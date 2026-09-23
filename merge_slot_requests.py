"""
Merge a slot-requests CSV export into master-slot-requests.json.
Usage: python3 merge_slot_requests.py <new_csv_path> <master_json_path>

Expects the "FullDetail" export format (Customer, Phone, Interaction,
Requested Zone, Time Slot, Services, Status, Scheduled Date/Timestamp,
Created Date/Timestamp, RL, Services (Detailed w/ Price), Total Value (Rs),
Hub / Branch, Address / Notes, Internal Notes, Updated Timestamp, Lead ID) —
this superseded the older "Updated" format (which lacked value/hub/
interaction/itemized-price data) as of Sept 2026.

RL-dated: the 'date' field is the RL (Request Loss) column, not Requested/
Scheduled/Created Date — rows with a blank RL are excluded (they haven't
lost/converted yet, so there's nothing to record).

Dedupe key: hash of (Phone, RL date, Requested Zone, Time Slot) — since
the source export has no unique row ID. Re-running with an overlapping export
upserts rather than duplicating. Same key formula as the pre-FullDetail
format, so old and new rows coexist in one master file; old rows just lack
the newer fields (interaction/totalValue/hub/serviceItems/leadId).
"""
import csv, json, hashlib, datetime, sys, os, re

def parse_date(s):
    return datetime.datetime.strptime(s.strip(), '%b %d %Y').date().isoformat()

def row_key(phone, date_iso, zone, slot):
    return hashlib.md5(f"{phone}|{date_iso}|{zone}|{slot}".encode()).hexdigest()

# "Threading (Eyebrows) - Rs49.00 | Half Legs Waxing (Rica Chocolate Tin) - Rs499.00"
# -> [{"name": "Threading (Eyebrows)", "price": 49.0}, ...]
ITEM_RE = re.compile(r'^(.*) - Rs([\d,]+\.\d\d)$')
def parse_service_items(detail):
    items = []
    if not detail:
        return items
    for part in detail.split(' | '):
        part = part.strip()
        if not part:
            continue
        m = ITEM_RE.match(part)
        if m:
            items.append({'name': m.group(1).strip(), 'price': float(m.group(2).replace(',', ''))})
    return items

def main():
    csv_path = sys.argv[1]
    json_path = sys.argv[2]

    if os.path.exists(json_path):
        master = json.load(open(json_path, encoding='utf-8'))
    else:
        master = {'requests': []}

    by_key = {r['key']: r for r in master['requests']}

    new_count = 0
    blank_rl_count = 0
    with open(csv_path, newline='', encoding='utf-8-sig') as f:
        for r in csv.DictReader(f):
            rl = (r.get('RL') or '').strip()
            if not rl:
                blank_rl_count += 1
                continue
            date_iso = parse_date(rl)
            key = row_key(r['Phone'], date_iso, r['Requested Zone'], r['Time Slot'])
            is_new = key not in by_key

            total_value_raw = (r.get('Total Value (Rs)') or '').strip()
            total_value = float(total_value_raw) if total_value_raw else None

            created_ts_raw = (r.get('Created Timestamp') or '').strip()
            created_hour = None
            if created_ts_raw:
                try:
                    created_hour = datetime.datetime.strptime(created_ts_raw, '%b %d %Y %I:%M %p').hour
                except ValueError:
                    pass

            by_key[key] = {
                'key': key,
                'customer': r['Customer'],
                'phone': r['Phone'],
                'zone': r['Requested Zone'],
                'date': date_iso,
                'timeSlot': r['Time Slot'],
                'services': r['Services'],
                'status': r['Status'],
                'interaction': r.get('Interaction') or None,
                'totalValue': total_value,
                'hub': r.get('Hub / Branch') or None,
                'serviceItems': parse_service_items(r.get('Services (Detailed w/ Price)')),
                'leadId': r.get('Lead ID') or None,
                'createdHour': created_hour,
            }
            if is_new:
                new_count += 1

    master['requests'] = list(by_key.values())
    json.dump(master, open(json_path, 'w', encoding='utf-8'), ensure_ascii=False)
    print(f"Rows in file: {sum(1 for _ in open(csv_path, encoding='utf-8-sig')) - 1}")
    print(f"New/updated rows upserted: {new_count}")
    print(f"Blank-RL rows excluded: {blank_rl_count}")
    print(f"Master total: {len(master['requests'])} slot requests")

if __name__ == '__main__':
    main()
