"""
Merge a slot-requests CSV export into master-slot-requests.json.
Usage: python3 merge_slot_requests.py <new_csv_path> <master_json_path>

Dedupe key: hash of (Phone, Requested Date, Requested Zone, Time Slot) — since
the source export has no unique row ID. Re-running with an overlapping export
upserts rather than duplicating.
"""
import csv, json, hashlib, datetime, sys, os

def parse_date(s):
    return datetime.datetime.strptime(s.strip(), '%b %d %Y').date().isoformat()

def row_key(phone, date_iso, zone, slot):
    return hashlib.md5(f"{phone}|{date_iso}|{zone}|{slot}".encode()).hexdigest()

def main():
    csv_path = sys.argv[1]
    json_path = sys.argv[2]

    if os.path.exists(json_path):
        master = json.load(open(json_path, encoding='utf-8'))
    else:
        master = {'requests': []}

    by_key = {r['key']: r for r in master['requests']}

    new_count = 0
    with open(csv_path, newline='', encoding='utf-8-sig') as f:
        for r in csv.DictReader(f):
            date_iso = parse_date(r['Requested Date'])
            key = row_key(r['Phone'], date_iso, r['Requested Zone'], r['Time Slot'])
            is_new = key not in by_key
            by_key[key] = {
                'key': key,
                'customer': r['Customer'],
                'phone': r['Phone'],
                'zone': r['Requested Zone'],
                'date': date_iso,
                'timeSlot': r['Time Slot'],
                'services': r['Services (visible)'],
                'status': r['Status'],
            }
            if is_new:
                new_count += 1

    master['requests'] = list(by_key.values())
    json.dump(master, open(json_path, 'w', encoding='utf-8'), ensure_ascii=False)
    print(f"Rows in file: {sum(1 for _ in open(csv_path, encoding='utf-8-sig')) - 1}")
    print(f"New rows upserted: {new_count}")
    print(f"Master total: {len(master['requests'])} slot requests")

if __name__ == '__main__':
    main()
