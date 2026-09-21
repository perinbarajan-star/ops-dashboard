const fs = require('fs');
const { JSDOM } = require('jsdom');

const dataJson = fs.readFileSync('data.json', 'utf8');
const reviewsJson = fs.readFileSync('reviews.json', 'utf8');
const slotRequestsJson = fs.readFileSync('master-slot-requests.json', 'utf8');
const targetJson = fs.readFileSync('target-data.json', 'utf8');
const primaryTaggedJson = fs.readFileSync('primary_tagged.json', 'utf8');
const appJs = fs.readFileSync('app.js', 'utf8');
const dashboardHtml = fs.readFileSync('dashboard.html', 'utf8');
const logoB64 = fs.readFileSync('logo_b64.txt', 'utf8');

let html = dashboardHtml
  .replace('__DATA_JSON__', dataJson)
  .replace('__REVIEWS_JSON__', reviewsJson)
  .replace('__SLOT_REQUESTS_JSON__', slotRequestsJson)
  .replace('__TARGET_JSON__', targetJson)
  .replace('__PRIMARY_TAGGED_JSON__', primaryTaggedJson)
  .replace('__APP_JS__', '')  // strip app.js from the doc; we run it manually below
  .replace('__LOGO_B64__', logoB64);

const dom = new JSDOM(html, { runScripts: 'outside-only', pretendToBeVisual: true, url: 'https://example.com/' });
const { window } = dom;

// Minimal Chart.js stub — the real one loads from a CDN this sandbox can't fetch.
window.Chart = function(ctx, config) {
  this.destroy = () => {};
  this.getDatasetMeta = () => ({ data: [] });
  this.data = (config && config.data) || {};
  this.update = () => {};
};
window.Chart.defaults = { font: {}, color: '' };

try {
  window.eval(appJs);
  console.log('APP JS RAN WITHOUT ERROR');
} catch (e) {
  console.log('RUNTIME ERROR:', e.stack || e.message);
  process.exitCode = 1;
}
