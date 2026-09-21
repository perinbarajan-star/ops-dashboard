# Naturals at Home — Ops Dashboard Pipeline

This repo holds the live dashboard (`dashboard.html`/`index.html`, auto-deployed to
naturalsathomes.netlify.app) plus the persistent data (`master-data.json`,
`master-reviews.json`) and the build/merge scripts needed to update it.

## Daily update workflow (what a new Claude session should do)

1. Fetch these files from this repo into a sandbox at `/home/claude/dashboard_build/`:
   - `dashboard.html` (already-built, live version — used as the source to extract
     the HTML template + app.js from, since those aren't stored separately)
   - `master-data.json` → save as `data.json`
   - `master-reviews.json` → save as `reviews.json`
   - `merge_new_upload.py`
   - `extract_reviews_v2.py`
   - `sp_category.csv` (roster: provider name → SP model category)
   - `test_run.js` (needs `npm install jsdom` in the sandbox first)
   - `zones.json` (the 19 Hub Level Data zone polygons, also embedded in app.js
     as `HUB_ZONES` — kept as a standalone file for convenience)

2. To reconstruct the editable `app.js` and `dashboard.html` TEMPLATE (with
   `__DATA_JSON__`/`__REVIEWS_JSON__`/`__APP_JS__`/`__LOGO_B64__` placeholders)
   from the live built `dashboard.html`:
   - The built file has three `<script>` blocks: `id="rawData"` (data.json
     content), `id="reviewsData"` (reviews.json content), and a final unlabeled
     `<script>` block starting with `const RAW = JSON.parse(...)` (this is app.js).
   - Extract each, replace with the placeholder tokens above to get the template
     back, and pull the base64 logo out of the `<img src="data:image/png;base64,...">`
     tag the same way.

3. When a new daily bookings xlsx is uploaded:
   ```
   python3 merge_new_upload.py <new_file.xlsx> data.json
   python3 extract_reviews_v2.py <new_file.xlsx> data.json reviews.json
   node -c app.js && node test_run.js
   ```
   Then rebuild `dashboard.html` by substituting the 4 placeholders, and push
   `dashboard.html`, `index.html` (identical content), `master-data.json`, and
   `master-reviews.json` back to this repo via the GitHub Contents API.

4. Every data push, also generate an attach-rate tracker report (see standing
   instructions the user has given — check memory) covering: Choco Mint Facial,
   Head Massage (10/20 Min), Clean-up (Dry/Oily Skin), comparing "7th of this
   month onwards" vs. "7th of last month, same span length," with absolute
   booking counts alongside attach %.

## Known data quirks to watch for

- The `Service Line Items` sheet sometimes has `Variant` duplicated into the
  same value as `Service Name` for some rows (a source quirk) — `merge_new_upload.py`
  already normalizes this (treats it as empty variant).
- Compound service names like "Perron Rigot Waxing – Paris Edition" contain an
  internal dash — always derive `variant` by stripping the known `service` name
  as a prefix from `sku`, never by naive `split(' – ')`, or multi-dash names
  break.
- The master price list (`NT__Alagist__-_Sheet7__2_.csv`, uploaded separately
  by the user, not in this repo) has repeatedly proven stale against the live
  app — verify against screenshots or the user's direct correction before
  trusting it for pricing work.
- GST logic: 12.6% reduction applies to GMV/AOV wherever shown, but only for
  orders **created** on/after 2026-07-27 (not scheduled date) — see `GST_CUTOFF`
  and `gstFactor()` in app.js.

## Roster corrections already applied (as of last push)

sp_category.csv includes several corrections made mid-conversation for
providers that were initially "Churned / Unmapped" — check the file directly
rather than assuming; it's the current source of truth for provider → SP model.
