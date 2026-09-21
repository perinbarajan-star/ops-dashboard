"""
Merge a new daily bookings xlsx dump into the master data.json.
Rebuilt after an environment reset — uses a (service,variant)->(category,group)
lookup table built from the existing master data.json (98 known mappings)
instead of re-implementing categorize() from scratch, since the historical
mappings are already verified and correct.
"""
import json, re, sys, os
from datetime import datetime
import openpyxl

XLSX_PATH = sys.argv[1]
DATA_JSON = sys.argv[2] if len(sys.argv) > 2 else 'data.json'

def norm_provider(s):
    return re.sub(r'\s+', ' ', (s or '').strip()).lower()

# ---- Load existing master data + build category lookup table ----
data = json.load(open(DATA_JSON))
orders_by_id = {o['id']: o for o in data['orders']}
items_by_order = {}
for li in data['lineItems']:
    items_by_order.setdefault(li['orderId'], []).append(li)

CATEGORY_LOOKUP = {}
for li in data['lineItems']:
    svc = li['service']
    sku = li['sku']
    prefix = svc + ' – '
    if sku.startswith(prefix):
        variant = sku[len(prefix):]
    else:
        variant = ''
    CATEGORY_LOOKUP[(svc, variant)] = (li['category'], li['group'])

SVC_ONLY_FALLBACK = {}
for (svc, variant), (cat, grp) in CATEGORY_LOOKUP.items():
    SVC_ONLY_FALLBACK.setdefault(svc, (cat, grp))  # first-seen mapping as fallback

# roster lookup (name -> SP model)
import csv
SP_CATEGORY_PATH = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'sp_category.csv')
sp_model_lookup = {}
if os.path.exists(SP_CATEGORY_PATH):
    with open(SP_CATEGORY_PATH, newline='', encoding='utf-8-sig') as f:
        for r in csv.DictReader(f):
            name = r.get('Smile Providers:') or ''
            cat = r.get('Category') or ''
            if name.strip():
                sp_model_lookup[norm_provider(name)] = cat.strip()

def get_sp_model(provider):
    if not provider:
        return 'Churned / Unmapped'
    return sp_model_lookup.get(norm_provider(provider), 'Churned / Unmapped')

STATUS_MAP_CLOSED = {'Closed', 'Service Completed', 'In Progress', 'Settlement Pending'}

def map_status(raw_status, payment_status):
    if raw_status in STATUS_MAP_CLOSED:
        return 'Closed'
    if raw_status == 'Cancelled':
        return 'Cancelled'
    return 'Open'

def is_booking_failed(raw_status, payment_status):
    return raw_status == 'Cancelled' and payment_status in ('Failed', 'Pending')

def get_discount(row, idx):
    # New schema (post July 19): 'Discount (Strike-out)' + 'Discount (Coupon/Other)'
    # Old schema: 'Discount Given'
    total = 0
    if 'Discount (Strike-out)' in idx:
        total += (row[idx['Discount (Strike-out)']] or 0)
    if 'Discount (Coupon/Other)' in idx:
        total += (row[idx['Discount (Coupon/Other)']] or 0)
    if not total and 'Discount Given' in idx:
        total = row[idx['Discount Given']] or 0
    return total

def to_iso_date(v):
    if isinstance(v, datetime):
        return v.date().isoformat()
    if isinstance(v, str) and v:
        return v[:10]
    return None

def to_iso_dt(v):
    if isinstance(v, datetime):
        return v.isoformat()
    return None

wb = openpyxl.load_workbook(XLSX_PATH, data_only=True)
ws = wb['Orders — Scheduled in Range']
idx = {c.value: i for i, c in enumerate(next(ws.iter_rows(min_row=1, max_row=1)))}

ws_items = wb['Service Line Items']
idx_items = {c.value: i for i, c in enumerate(next(ws_items.iter_rows(min_row=1, max_row=1)))}

# Group line items by order id
items_rows = list(ws_items.iter_rows(min_row=2, values_only=True))
lineitems_by_order_new = {}
for row in items_rows:
    oid = row[idx_items['Unique Order ID']]
    lineitems_by_order_new.setdefault(oid, []).append(row)

new_orders = []
new_lineitems = []
unmatched_categories = set()
n_orders_seen = 0

for row in ws.iter_rows(min_row=2, values_only=True):
    n_orders_seen += 1
    oid = row[idx['Unique Order ID']]
    raw_status = row[idx['Current Status']]
    payment_status = row[idx['Payment Status']]
    platform = row[idx['Platform']] if 'Platform' in idx else None
    scheduled_dt = row[idx['Scheduled Date & Time']]
    created_dt = row[idx['Created Date & Time']]
    scheduled = to_iso_date(row[idx['Scheduled Date']])
    created = to_iso_date(row[idx['Created Date']])

    status = map_status(raw_status, payment_status)
    booking_failed = is_booking_failed(raw_status, payment_status)

    bill = row[idx['Total Bill Value']] or 0
    discount = get_discount(row, idx)

    provider = row[idx['Service Provider Assigned']]
    sp_model = get_sp_model(provider)

    coords = row[idx['Customer Location - Coordinates']] if 'Customer Location - Coordinates' in idx else None
    lat, lng = None, None
    if coords and ',' in str(coords):
        try:
            lat_s, lng_s = str(coords).split(',')
            lat, lng = float(lat_s.strip()), float(lng_s.strip())
        except Exception:
            pass

    order = {
        'id': oid,
        'created': created,
        'createdDT': to_iso_dt(created_dt),
        'scheduled': scheduled,
        'scheduledDT': to_iso_dt(scheduled_dt),
        'status': status,
        'rawStatus': raw_status,
        'paymentStatus': payment_status,
        'bookingFailed': booking_failed,
        'provider': provider,
        'bill': bill,
        'discount': discount,
        'promoUplift': 0,  # filled in below
        'locality': row[idx['Customer Location - Written']] if 'Customer Location - Written' in idx else None,
        'custId': row[idx['Customer Unique ID']],
        'custName': row[idx['Customer Name']],
        'custMobile': row[idx['Customer Mobile Number']],
        'spModel': sp_model,
        'lat': lat,
        'lng': lng,
        'platform': platform,
    }
    new_orders.append(order)

# ---- Line items + promo uplift (needs Service Line Items sheet fields) ----
svc_name_col = 'Service Name' if 'Service Name' in idx_items else 'Service'
variant_col = 'Variant' if 'Variant' in idx_items else 'Service Variant'
price_col = 'Service Price' if 'Service Price' in idx_items else 'Price'

orders_by_new_id = {o['id']: o for o in new_orders}
promo_by_order = {}

for oid, rows in lineitems_by_order_new.items():
    if oid not in orders_by_new_id:
        continue
    order = orders_by_new_id[oid]
    for irow in rows:
        svc = irow[idx_items[svc_name_col]] if svc_name_col in idx_items else None
        variant = irow[idx_items[variant_col]] if variant_col in idx_items else ''
        if variant == svc:
            variant = ''  # source quirk: some rows duplicate service name into variant
        price = irow[idx_items[price_col]] if price_col in idx_items else None

        key = (svc, variant or '')
        if key in CATEGORY_LOOKUP:
            category, group = CATEGORY_LOOKUP[key]
        elif svc in SVC_ONLY_FALLBACK:
            category, group = SVC_ONLY_FALLBACK[svc]
            unmatched_categories.add(key)  # still flag it, just not miscategorized
        else:
            unmatched_categories.add(key)
            category, group = (svc or 'Unknown'), (svc or 'Unknown')

        sku = f"{svc} – {variant}" if variant else (svc or '')
        new_lineitems.append({
            'orderId': oid,
            'scheduled': order['scheduled'],
            'category': category,
            'group': group,
            'service': svc,
            'sku': sku,
        })

        # RICA promo uplift check
        if (svc == 'Full Arms + Underarms Waxing' and variant == 'Rica Chocolate Tin'
                and price == 1 and order['created'] and order['created'] >= '2026-06-18'):
            promo_by_order[oid] = promo_by_order.get(oid, 0) + 498

for oid, uplift in promo_by_order.items():
    orders_by_new_id[oid]['promoUplift'] = uplift

# ---- Upsert into master data.json ----
before_count = len(data['orders'])
for o in new_orders:
    orders_by_id[o['id']] = o
data['orders'] = list(orders_by_id.values())

# Replace line items for touched orders, keep the rest
touched_ids = set(o['id'] for o in new_orders)
kept_items = [li for li in data['lineItems'] if li['orderId'] not in touched_ids]
data['lineItems'] = kept_items + new_lineitems

data['generatedAt'] = datetime.now().strftime('%Y-%m-%d %H:%M')

json.dump(data, open(DATA_JSON, 'w'))

print(f"Orders in file: {n_orders_seen}, Line items: {len(new_lineitems)}")
print(f"Merged: {len(new_orders)} orders upserted from new file")
print(f"Master total: {len(data['orders'])} orders, {len(data['lineItems'])} line items")
dates = sorted(set(o['scheduled'] for o in data['orders'] if o['scheduled']))
print(f"Master date range: {dates[0]} -> {dates[-1]}")
if unmatched_categories:
    print(f"UNMATCHED service/variant combos (using raw name as category fallback): {len(unmatched_categories)}")
    for k in sorted(unmatched_categories)[:20]:
        print("  ", k)
