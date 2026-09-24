
const RAW = JSON.parse(document.getElementById('rawData').textContent);
const ALL_ORDERS = RAW.orders;
const ALL_ITEMS = RAW.lineItems;
const REVIEWS_RAW = JSON.parse(document.getElementById('reviewsData').textContent);
const ALL_REVIEWS = REVIEWS_RAW.reviews || [];
const ALL_SERVICE_RATINGS = REVIEWS_RAW.serviceRatings || [];
const SLOT_REQUESTS_RAW = JSON.parse(document.getElementById('slotRequestsData').textContent);
const TARGET_DATA = JSON.parse(document.getElementById('targetData').textContent);
const PRIMARY_TAGGED = JSON.parse(document.getElementById('primaryTaggedData').textContent);
const ALL_SLOT_REQUESTS = SLOT_REQUESTS_RAW.requests || [];
const HUB_ZONES = [{"name":"Banashankari West","polygon":[[12.908657,77.526415],[12.926145,77.550296],[12.97587,77.520605],[12.982881,77.477097],[12.979003,77.479443],[12.967031,77.473598],[12.964491,77.465509],[12.945505,77.465509],[12.9269529,77.472928],[12.9176115,77.4705075],[12.9075864,77.4717002],[12.8940462,77.4878279],[12.8873249,77.5068298],[12.8976711,77.515189],[12.908657,77.526415]]},{"name":"Koramangala","polygon":[[12.980608,77.639724],[12.926117,77.596527],[12.89472,77.644154],[12.899924,77.660165],[12.947711,77.675008],[12.980663,77.642523],[12.980608,77.639724]]},{"name":"Yelahanka","polygon":[[13.060262,77.606956],[13.135839,77.618116],[13.134491,77.605509],[13.128055,77.604152],[13.124654,77.599061],[13.124491,77.545508],[13.119838,77.543285],[13.114492,77.535509],[13.100939,77.535346],[13.096316,77.532575],[13.096263,77.531797],[13.092133,77.534097],[13.060262,77.606956]]},{"name":"Thanisandra","polygon":[[13.056182,77.679408],[13.063456,77.684503],[13.064492,77.684491],[13.066863,77.679589],[13.073491,77.674846],[13.094491,77.674491],[13.095445,77.658729],[13.099439,77.655109],[13.104491,77.654491],[13.105445,77.648729],[13.109439,77.645109],[13.144491,77.644491],[13.144491,77.625509],[13.136316,77.622575],[13.135839,77.618116],[13.060262,77.606956],[13.056478,77.608775],[13.056182,77.679408]]},{"name":"KR Puram","polygon":[[12.9962325,77.7164293],[13.0293295,77.7743192],[13.0341565,77.7743192],[13.0355135,77.7678832],[13.0441565,77.7643192],[13.0448065,77.7586032],[13.0485965,77.7545812],[13.0741565,77.7543192],[13.0741565,77.7353373],[13.0570905,77.7335123],[13.0543195,77.7288893],[13.0541565,77.7153373],[13.0483945,77.7143833],[13.0447745,77.7103893],[13.0455135,77.6878833],[13.0506045,77.6844823],[13.0631215,77.6843313],[13.0558475,77.6792364],[13.006673,77.6875794],[13.0106035,77.6980078],[12.9962325,77.7164293]]},{"name":"Whitefield","polygon":[[12.965142,77.718822],[12.9539,77.771717],[12.955509,77.774491],[13.029664,77.774491],[12.996567,77.716601],[12.965142,77.718822]]},{"name":"Marathalli","polygon":[[12.980663,77.642523],[12.947711,77.675008],[12.954087,77.709096],[12.965142,77.718822],[12.996567,77.716601],[13.0106035,77.6980078],[12.9981425,77.672667],[12.980663,77.642523]]},{"name":"Bellandur","polygon":[[12.947711,77.675008],[12.9144812,77.6648857],[12.8985309,77.7135963],[12.9036835,77.7224595],[12.9048105,77.7248924],[12.954087,77.709096],[12.947711,77.675008]]},{"name":"Varthur","polygon":[[12.965142,77.718822],[12.954087,77.709096],[12.9048105,77.7248924],[12.903684,77.727425],[12.905509,77.744491],[12.913157,77.746843],[12.915509,77.754491],[12.929139,77.755445],[12.935507,77.76449],[12.951271,77.767187],[12.9539,77.771717],[12.965142,77.718822]]},{"name":"Sarjapura Circle","polygon":[[12.8963798,77.7492184],[12.8920988,77.7452443],[12.8900178,77.7415822],[12.8852848,77.7393101],[12.8810548,77.7392701],[12.8623698,77.7392301],[12.8535786,77.7406495],[12.8496092,77.7515464],[12.8386458,77.7796655],[12.8595328,77.8115221],[12.8667798,77.8150962],[12.8813528,77.809234],[12.8839328,77.8042119],[12.8949399,77.7956496],[12.8957349,77.7887335],[12.8954719,77.7758241],[12.895485,77.7634734],[12.8947709,77.7583657],[12.8952125,77.7534924],[12.8963798,77.7492184]]},{"name":"Peenya","polygon":[[13.092133,77.534097],[13.096263,77.531797],[13.094491,77.505509],[13.080178,77.505156],[13.075445,77.501271],[13.074491,77.495509],[13.058055,77.494152],[13.054654,77.489061],[13.054491,77.475509],[13.038729,77.474555],[13.035109,77.470561],[13.034491,77.465509],[13.015509,77.465509],[13.014611,77.471277],[13.039601,77.533406],[13.092133,77.534097]]},{"name":"Mahalakshmi layout","polygon":[[13.01031,77.563134],[13.039601,77.533406],[13.014611,77.471277],[13.014506,77.471949],[13.010331,77.475569],[12.985506,77.475509],[12.982881,77.477097],[12.97587,77.520605],[13.01031,77.563134]]},{"name":"Vidyaranyapura","polygon":[[13.039601,77.533406],[13.01031,77.563134],[13.009131,77.572645],[13.018431,77.594482],[13.056478,77.608775],[13.060262,77.606956],[13.092133,77.534097],[13.039601,77.533406]]},{"name":"JP Nagar East","polygon":[[12.926117,77.596527],[12.925157,77.582179],[12.8489414,77.577792],[12.8522456,77.5927794],[12.8544275,77.6081901],[12.8592747,77.6188936],[12.8686349,77.6321447],[12.8674531,77.6398657],[12.8646866,77.6452713],[12.8634705,77.6483176],[12.8611217,77.6521959],[12.8609513,77.6550793],[12.8588998,77.6584522],[12.8804448,77.6541002],[12.8893867,77.6495833],[12.89472,77.644154],[12.926117,77.596527]]},{"name":"Kanakapura Road","polygon":[[12.8527314,77.551617],[12.849256,77.563256],[12.849047,77.5708711],[12.8511341,77.5758488],[12.8521213,77.5774486],[12.925157,77.582179],[12.926815,77.578642],[12.926145,77.550296],[12.908657,77.526415],[12.8976711,77.515189],[12.8873249,77.5068298],[12.8620863,77.5204129],[12.8599949,77.5272036],[12.8563972,77.5322776],[12.8552876,77.5386749],[12.8525382,77.547697],[12.8527314,77.551617]]},{"name":"MG Road","polygon":[[13.018431,77.594482],[13.009131,77.572645],[12.926815,77.578642],[12.925157,77.582179],[12.926117,77.596527],[12.980608,77.639724],[13.018431,77.594482]]},{"name":"Rajajinagar","polygon":[[13.01031,77.563134],[12.97587,77.520605],[12.926145,77.550296],[12.926815,77.578642],[13.009131,77.572645],[13.01031,77.563134]]},{"name":"HRBR Layout","polygon":[[13.056478,77.608775],[13.018431,77.594482],[12.980608,77.639724],[12.980663,77.642523],[12.9942962,77.6645994],[13.006673,77.6875794],[13.056182,77.679408],[13.056478,77.608775]]},{"name":"Rayasandra","polygon":[[12.8588998,77.6584522],[12.84074,77.6772178],[12.8564245,77.7020274],[12.8605491,77.7067361],[12.8648809,77.7098771],[12.878284,77.714539],[12.883157,77.716843],[12.883157,77.716864],[12.8985309,77.7135963],[12.9022032,77.7021807],[12.9099636,77.6781895],[12.9144812,77.6648857],[12.899924,77.660165],[12.89472,77.644154],[12.8893867,77.6495833],[12.8799729,77.6543467],[12.8588998,77.6584522]]}];

const fmtINR = n => '₹' + Math.round(n).toLocaleString('en-IN');
const fmtNum = n => Math.round(n).toLocaleString('en-IN');
const pct = (a,b) => b>0 ? ((a/b)*100).toFixed(1)+'%' : '—';

// ---- Local date helper (avoids UTC shift) ----
function isoLocal(d){
  const y=d.getFullYear(), m=String(d.getMonth()+1).padStart(2,'0'), day=String(d.getDate()).padStart(2,'0');
  return `${y}-${m}-${day}`;
}
const todayISO = isoLocal(new Date());

let dataMin = null, dataMax = null;
ALL_ORDERS.forEach(o=>{
  if(!o.scheduled) return;
  if(!dataMin || o.scheduled < dataMin) dataMin = o.scheduled;
  if(!dataMax || o.scheduled > dataMax) dataMax = o.scheduled;
});

const now0 = new Date();
const mtdStart = isoLocal(new Date(now0.getFullYear(), now0.getMonth(), 1));
const mtdEndDate = new Date(now0); mtdEndDate.setDate(mtdEndDate.getDate()-1);
const mtdEnd = isoLocal(mtdEndDate);

let activePresetKey = 'mtd';
let filterFrom = mtdStart < dataMin ? dataMin : mtdStart;
let filterTo = mtdEnd > dataMax ? dataMax : (mtdEnd < dataMin ? dataMin : mtdEnd);
if(filterFrom > filterTo){ filterFrom = mtdStart; filterTo = mtdStart; } // first day of a new month: MTD = today only, not the full dataset

const fromInput = document.getElementById('dateFrom');
const toInput = document.getElementById('dateTo');
fromInput.value = filterFrom;
toInput.value = filterTo;
fromInput.min = dataMin; fromInput.max = dataMax;
toInput.min = dataMin; toInput.max = dataMax;

document.getElementById('genAt').textContent = 'generated ' + RAW.generatedAt + ' · data covers ' + dataMin + ' → ' + dataMax;
document.getElementById('rangeNote').textContent = 'today: ' + todayISO;

function setRange(f, t, presetKey){
  // Only guard against a reversed range (e.g. manual input mistake) — do NOT clamp
  // to the data window, since that silently expanded single-day presets like
  // Today/Tomorrow into multi-day ranges whenever the date fell at the edge of the data.
  if(f > t){ const tmp=f; f=t; t=tmp; }
  filterFrom = f; filterTo = t;
  fromInput.value = f; toInput.value = t;
  highlightPreset(presetKey || null);
  render();
}

function applyFilter(){
  setRange(fromInput.value, toInput.value, null);
}

// ---- RL Deep Dive tab: its own independent date filter (by RL date), not
// tied to the main Scheduled-date filter above. ----
let rlDataMin = null, rlDataMax = null;
ALL_SLOT_REQUESTS.forEach(r=>{
  if(!r.date) return;
  if(!rlDataMin || r.date < rlDataMin) rlDataMin = r.date;
  if(!rlDataMax || r.date > rlDataMax) rlDataMax = r.date;
});
let rlFilterFrom = rlDataMin, rlFilterTo = rlDataMax;

const rlFromInput = document.getElementById('rlDateFrom');
const rlToInput = document.getElementById('rlDateTo');
if(rlFromInput && rlToInput){
  rlFromInput.value = rlFilterFrom; rlToInput.value = rlFilterTo;
  rlFromInput.min = rlDataMin; rlFromInput.max = rlDataMax;
  rlToInput.min = rlDataMin; rlToInput.max = rlDataMax;
  document.getElementById('rlRangeNote').textContent = `RL data covers ${rlDataMin} → ${rlDataMax}`;
}

function applyRLFilter(){
  let f = rlFromInput.value, t = rlToInput.value;
  if(f > t){ const tmp=f; f=t; t=tmp; }
  rlFilterFrom = f; rlFilterTo = t;
  rlFromInput.value = f; rlToInput.value = t;
  renderRLDeepDive();
}

function csvEscape(v){
  if(v===null || v===undefined) return '';
  const s = String(v);
  if(s.includes(',') || s.includes('"') || s.includes('\n')){
    return '"' + s.replace(/"/g,'""') + '"';
  }
  return s;
}

function downloadBeauticianUtilCSV(){
  const table = document.getElementById('beauticianTableBody').closest('table');
  const headerCells = Array.from(table.querySelectorAll('thead th'));
  const headers = headerCells.map(th => th.textContent.replace(/[▲▼]/g,'').trim());

  const rows = Array.from(document.getElementById('beauticianTableBody').querySelectorAll('tr'));
  const lines = [headers.map(csvEscape).join(',')];
  rows.forEach(row=>{
    const cells = Array.from(row.children).map(td => {
      // strip the bar-cell visual markup down to just the % text (last column: Share of GMV)
      const barSpan = td.querySelector('.bar-cell span');
      if(barSpan) return barSpan.textContent.trim();
      return td.textContent.replace(/⚑/g,'').trim();
    });
    lines.push(cells.map(csvEscape).join(','));
  });

  const csvContent = lines.join('\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `naturals-at-home-beautician-utilization_${filterFrom}_to_${filterTo}.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function downloadCSV(){
  const rows = ALL_ORDERS.filter(o=>inRange(o.scheduled));
  const itemsByOrder = {};
  ALL_ITEMS.forEach(li=>{
    if(!itemsByOrder[li.orderId]) itemsByOrder[li.orderId] = [];
    itemsByOrder[li.orderId].push(li.sku || li.service);
  });
  const headers = [
    'Order ID','Created Date','Scheduled Date','Raw Status','Payment Status','Booking Failed',
    'Provider','SP Model','Platform','Bill (Post-discount)','Discount Given','Promo Uplift',
    'Customer Name','Customer Mobile','Customer ID','Locality','Services Booked'
  ];
  const lines = [headers.join(',')];
  rows.forEach(o=>{
    const services = (itemsByOrder[o.id] || []).join('; ');
    lines.push([
      o.id, o.created, o.scheduled, o.rawStatus, o.paymentStatus, o.bookingFailed ? 'Yes' : 'No',
      o.provider, o.spModel || '', o.platform || 'Unknown', o.bill, o.discount, o.promoUplift,
      o.custName, o.custMobile, o.custId, o.locality, services
    ].map(csvEscape).join(','));
  });
  const csvContent = lines.join('\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `naturals-at-home-orders_${filterFrom}_to_${filterTo}.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function downloadHubLevelCSV(){
  const table = document.getElementById('hubBody').closest('table');
  const headerCells = table.querySelectorAll('thead th');
  const headers = Array.from(headerCells).map(th=>th.textContent.trim());
  const lines = [headers.map(csvEscape).join(',')];
  document.querySelectorAll('#hubBody tr').forEach(tr=>{
    const cells = Array.from(tr.querySelectorAll('td')).map(td=>td.textContent.trim());
    if(cells.length) lines.push(cells.map(csvEscape).join(','));
  });
  const csvContent = lines.join('\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `naturals-at-home-hub-level-data_${filterFrom}_to_${filterTo}.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function highlightPreset(key){
  activePresetKey = key;
  document.querySelectorAll('#presets button').forEach(b=>{
    b.classList.toggle('active', b.dataset.preset===key);
  });
}

// ---- Week helper (Monday start) ----
function mondayOf(d){
  const day = d.getDay(); // 0=Sun..6=Sat
  const diff = (day===0 ? -6 : 1-day);
  const m = new Date(d);
  m.setDate(m.getDate()+diff);
  return m;
}

// ---- Presets ----
document.querySelectorAll('#presets button').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    const now = new Date();
    let f, t;
    switch(btn.dataset.preset){
      case 'yesterday': { const d=new Date(now); d.setDate(d.getDate()-1); f=t=isoLocal(d); break; }
      case 'today':     { f=t=isoLocal(now); break; }
      case 'tomorrow':  { const d=new Date(now); d.setDate(d.getDate()+1); f=t=isoLocal(d); break; }
      case 'thisweek':  { const mon=mondayOf(now); const sun=new Date(mon); sun.setDate(sun.getDate()+6); f=isoLocal(mon); t=isoLocal(sun); break; }
      case 'lastweek':  { const mon=mondayOf(now); mon.setDate(mon.getDate()-7); const sun=new Date(mon); sun.setDate(sun.getDate()+6); f=isoLocal(mon); t=isoLocal(sun); break; }
      case 'mtd':       { const y=new Date(now); y.setDate(y.getDate()-1); f=isoLocal(new Date(now.getFullYear(), now.getMonth(), 1)); t=isoLocal(y); break; }
      case 'lastmonth': { f=isoLocal(new Date(now.getFullYear(), now.getMonth()-1, 1)); t=isoLocal(new Date(now.getFullYear(), now.getMonth(), 0)); break; }
      case 'alltime':   { f=dataMin; t=dataMax; break; }
    }
    setRange(f, t, btn.dataset.preset);
  });
});

function inRange(dstr){
  return dstr && dstr >= filterFrom && dstr <= filterTo;
}

// ---- Tabs ----
document.querySelectorAll('.tab-btn').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));
    document.querySelectorAll('.tab-panel').forEach(p=>p.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('tab-'+btn.dataset.tab).classList.add('active');
  });
});

let charts = {};
function destroyChart(key){ if(charts[key]){ charts[key].destroy(); delete charts[key]; } }

const CHART_FONT = { family: "Calibri, sans-serif", size: 11 };
Chart.defaults.font = CHART_FONT;
Chart.defaults.color = '#7A7480';

const VIOLET = '#80489A', GREEN='#2E8B57', RED='#C1463D', AMBER='#B8862E', INK='#161219';
const GST_CUTOFF = '2026-07-27'; // GST liability applies only to orders CREATED on/after this date
function gstFactor(order){ return (order.created && order.created >= GST_CUTOFF) ? (1-0.126) : 1; }

function render(){
  const inRangeOrders = ALL_ORDERS.filter(o=>inRange(o.scheduled));
  const bookingFailedOrders = inRangeOrders.filter(o=>o.bookingFailed);
  const orders = inRangeOrders.filter(o=>!o.bookingFailed); // excludes booking-failed from all totals
  const items = ALL_ITEMS.filter(li=>inRange(li.scheduled));
  const slotRequests = ALL_SLOT_REQUESTS.filter(r=>inRange(r.date));

  renderOverview(orders, bookingFailedOrders, inRangeOrders, slotRequests);
  renderWoWMoM();
  renderDayCompare();
  renderBeauticians(orders);
  renderAttach(items, orders);
  renderCustomers();
  renderQuality();
  renderStakeholderReport();
  renderHubLevel(orders, bookingFailedOrders, slotRequests);
  renderRLTrend();
  renderSeptTarget();
  enableSortableTables();
}

// ---- September Plan: Target vs Actual (Ops tab, reacts to the date filter) + Growth/CAC trend (Stakeholder tab, static) ----
function renderSeptTarget(){
  if(!TARGET_DATA) return;
  const td = TARGET_DATA;

  // Actuals per day, using the plan's own definitions
  const actualByDate = {};
  td.daily.forEach(d=>{ actualByDate[d.date] = {created:0, scheduled:0, completed:0}; });

  ALL_ORDERS.forEach(o=>{
    if(o.spModel==='Test Orders') return;
    const createdDate = o.created;
    if(createdDate && actualByDate[createdDate] && !o.bookingFailed) actualByDate[createdDate].created++;
    if(o.scheduled && actualByDate[o.scheduled] && !o.bookingFailed){
      actualByDate[o.scheduled].scheduled++;
      if(o.status==='Closed') actualByDate[o.scheduled].completed++;
    }
  });

  // Only the days that fall inside the currently active date filter AND have a plan target (September only)
  const daysInFilter = td.daily.filter(d => d.date >= filterFrom && d.date <= filterTo);

  const titleEl = document.getElementById('targetVsActualTitle');
  const noteEl = document.getElementById('targetVsActualNote');
  if(titleEl) titleEl.textContent = `September Target vs. Actual — ${filterFrom} to ${filterTo}`;

  if(daysInFilter.length===0){
    if(noteEl) noteEl.textContent = 'No September plan days fall inside the selected date range.';
    ['k-target-created','k-target-scheduled','k-target-completed','k-target-comppct'].forEach(id=>{ const el=document.getElementById(id); if(el) el.textContent='—'; });
    ['k-target-created-foot','k-target-scheduled-foot','k-target-completed-foot','k-target-comppct-foot'].forEach(id=>{ const el=document.getElementById(id); if(el) el.innerHTML='—'; });
  } else {
    if(noteEl) noteEl.textContent = `Scheduled and Created switch with the date filter above. Completed = Closed orders, keyed on scheduled date.`;

    let targetCreated=0, targetScheduled=0, targetCompleted=0;
    let actualCreated=0, actualScheduled=0, actualCompleted=0;
    daysInFilter.forEach(d=>{
      targetCreated += d.created; targetScheduled += d.scheduled; targetCompleted += d.completed;
      const a = actualByDate[d.date];
      actualCreated += a.created; actualScheduled += a.scheduled; actualCompleted += a.completed;
    });
    const targetCompPct = targetScheduled ? targetCompleted/targetScheduled*100 : 0;
    const actualCompPct = actualScheduled ? actualCompleted/actualScheduled*100 : 0;

    const pctSpan = (pct)=>{
      const color = pct>=0 ? 'var(--green)' : 'var(--red)';
      return `<span style="color:${color}; font-weight:700;">${pct>=0?'+':''}${pct.toFixed(1)}%</span>`;
    };
    const setKpi = (id, footId, target, actual, isPctMetric)=>{
      const el = document.getElementById(id);
      if(el) el.textContent = isPctMetric ? `${actual.toFixed(1)}% / ${target.toFixed(1)}%` : `${fmtNum(actual)} / ${fmtNum(target)}`;
      const foot = document.getElementById(footId);
      if(foot){
        const diff = actual - target;
        const pct = target ? (diff/target*100) : 0;
        foot.innerHTML = `${pctSpan(pct)} vs target`;
      }
    };
    setKpi('k-target-created','k-target-created-foot', targetCreated, actualCreated, false);
    setKpi('k-target-scheduled','k-target-scheduled-foot', targetScheduled, actualScheduled, false);
    setKpi('k-target-completed','k-target-completed-foot', targetCompleted, actualCompleted, false);
    const compPctEl = document.getElementById('k-target-comppct');
    if(compPctEl) compPctEl.textContent = `${actualCompPct.toFixed(1)}% / ${targetCompPct.toFixed(1)}%`;
    const compPctFoot = document.getElementById('k-target-comppct-foot');
    if(compPctFoot){
      const ptDiff = actualCompPct - targetCompPct;
      const color = ptDiff>=0 ? 'var(--green)' : 'var(--red)';
      compPctFoot.innerHTML = `<span style="color:${color}; font-weight:700;">${ptDiff>=0?'+':''}${ptDiff.toFixed(1)} pts</span> vs target`;
    }
  }

  // Stakeholder: target vs MTD actual (kept as a fixed MTD reference regardless of the Ops-tab filter)
  const elapsedDates = td.daily.map(d=>d.date).filter(dt => dt <= mtdEnd);
  let mtdTargetCreated=0, mtdTargetScheduled=0, mtdTargetCompleted=0;
  let mtdActualCreated=0, mtdActualScheduled=0, mtdActualCompleted=0;
  td.daily.forEach(d=>{
    if(elapsedDates.includes(d.date)){
      mtdTargetCreated += d.created; mtdTargetScheduled += d.scheduled; mtdTargetCompleted += d.completed;
      const a = actualByDate[d.date];
      mtdActualCreated += a.created; mtdActualScheduled += a.scheduled; mtdActualCompleted += a.completed;
    }
  });
  const mtdTargetCompPct = mtdTargetScheduled ? mtdTargetCompleted/mtdTargetScheduled*100 : 0;
  const mtdActualCompPct = mtdActualScheduled ? mtdActualCompleted/mtdActualScheduled*100 : 0;
  const skPctSpan = (pct)=>{
    const color = pct>=0 ? 'var(--green)' : 'var(--red)';
    return `<span style="color:${color}; font-weight:700;">${pct>=0?'+':''}${pct.toFixed(1)}%</span>`;
  };
  const varPct = (actual, target) => target ? (actual-target)/target*100 : 0;
  const skBody = document.getElementById('stakeholderTargetBody');
  if(skBody){
    skBody.innerHTML = `
      <tr><td>Actual (MTD)</td><td class="num">${fmtNum(mtdActualCreated)}</td><td class="num">${fmtNum(mtdActualScheduled)}</td><td class="num">${fmtNum(mtdActualCompleted)}</td><td class="num">${mtdActualCompPct.toFixed(1)}%</td></tr>
      <tr><td>Target (MTD, ${elapsedDates.length} days)</td><td class="num">${fmtNum(mtdTargetCreated)}</td><td class="num">${fmtNum(mtdTargetScheduled)}</td><td class="num">${fmtNum(mtdTargetCompleted)}</td><td class="num">${mtdTargetCompPct.toFixed(1)}%</td></tr>
      <tr><td><b>Variance vs Target</b></td><td class="num">${skPctSpan(varPct(mtdActualCreated,mtdTargetCreated))}</td><td class="num">${skPctSpan(varPct(mtdActualScheduled,mtdTargetScheduled))}</td><td class="num">${skPctSpan(varPct(mtdActualCompleted,mtdTargetCompleted))}</td><td class="num">${skPctSpan(mtdActualCompPct-mtdTargetCompPct)}</td></tr>
      <tr><td>Full Month Target</td><td class="num">${fmtNum(td.monthlyTotal.created)}</td><td class="num">${fmtNum(td.monthlyTotal.scheduled)}</td><td class="num">${fmtNum(td.monthlyTotal.completed)}</td><td class="num">${td.monthlyTotal.compPct.toFixed(1)}%</td></tr>
    `;
  }

  // Growth trend table (chronological: June -> Dec), static
  const periods = [...td.trendPeriods].reverse();
  const header = document.getElementById('growthTrendHeader');
  if(header){
    header.innerHTML = '<th></th>' + periods.map(p=>`<th class="num">${p}</th>`).join('');
  }
  const trendBody = document.getElementById('growthTrendBody');
  if(trendBody){
    const rows = ['Spend','Created','Completed','Cost/ Created','Cost/ Completed'];
    trendBody.innerHTML = rows.map(label=>{
      const rowData = td.trend[label] || {};
      const cells = periods.map(p=>{
        const v = rowData[p];
        if(v==null) return '<td class="num">—</td>';
        if(label==='Spend' || label.startsWith('Cost/')) return `<td class="num">${fmtINR(v)}</td>`;
        return `<td class="num">${fmtNum(v)}</td>`;
      }).join('');
      return `<tr><td>${label}</td>${cells}</tr>`;
    }).join('');
  }
}

// ---- Day Level Trend — Scheduled Orders + Request Loss, one chart, dual axis (all-time, hub-filterable, independent of the date filter) ----
let rlTrendInit = false;
function renderRLTrend(){
  const selectEl = document.getElementById('rlTrendHubSelect');
  if(!rlTrendInit){
    rlTrendInit = true;
    const zoneNames = HUB_ZONES.map(z=>z.name).sort();
    selectEl.innerHTML = ['<option value="__ALL__">All Hubs</option>']
      .concat(zoneNames.map(n=>`<option value="${n}">${n}</option>`)).join('');
    selectEl.addEventListener('change', renderRLTrend);
  }
  const selected = selectEl.value || '__ALL__';

  // Scheduled Orders per day
  const ordersByDate = {};
  ALL_ORDERS.forEach(o=>{
    if(o.bookingFailed || !o.scheduled) return;
    if(selected!=='__ALL__'){
      if(!o.lat || !o.lng) return;
      if(findHubZone(o.lat, o.lng)!==selected) return;
    }
    const d = o.scheduled.slice(0,10);
    ordersByDate[d] = (ordersByDate[d]||0) + 1;
  });

  // Request Loss (unique phones) per day
  const phonesByDate = {};
  ALL_SLOT_REQUESTS.forEach(r=>{
    if(selected!=='__ALL__' && r.zone!==selected) return;
    (phonesByDate[r.date] = phonesByDate[r.date] || new Set()).add(r.phone);
  });
  const rlByDate = {};
  Object.keys(phonesByDate).forEach(d=>{ rlByDate[d] = phonesByDate[d].size; });

  const dates = Array.from(new Set([...Object.keys(ordersByDate), ...Object.keys(rlByDate)])).sort();
  const ordersData = dates.map(d=>ordersByDate[d]||0);
  const rlData = dates.map(d=>rlByDate[d]||0);
  const hubLabel = selected==='__ALL__' ? 'All Hubs' : selected;

  destroyChart('rlTrend');
  const ctx = document.getElementById('rlTrendChart').getContext('2d');
  charts['rlTrend'] = new Chart(ctx, {
    type: 'line',
    data: {
      labels: dates,
      datasets: [
        {
          label: `Scheduled Orders — ${hubLabel}`,
          data: ordersData,
          borderColor: VIOLET,
          backgroundColor: 'rgba(128,72,154,0.10)',
          fill: false,
          tension: 0.25,
          pointRadius: 3,
          yAxisID: 'yOrders',
        },
        {
          label: `Request Loss (RL) — ${hubLabel}`,
          data: rlData,
          borderColor: RED,
          backgroundColor: 'rgba(193,70,61,0.10)',
          fill: false,
          tension: 0.25,
          pointRadius: 3,
          yAxisID: 'yRL',
        },
      ]
    },
    options: {
      responsive: true,
      plugins: { legend: { display: true } },
      scales: {
        x: { grid: { display: false } },
        yOrders: { beginAtZero: true, position: 'left', ticks: { precision: 0 }, grid: { color: '#EFEBEE' }, title: { display: true, text: 'Scheduled Orders' } },
        yRL: { beginAtZero: true, position: 'right', ticks: { precision: 0 }, grid: { display: false }, title: { display: true, text: 'Request Loss (RL)' } },
      }
    }
  });
}

// ================= QUALITY =================
// Static store ratings (fetched manually from live Play Store / App Store pages — update periodically)
const PLAYSTORE_RATING = 4.3, PLAYSTORE_REVIEWS = 66;
const APPSTORE_RATING = 4.1, APPSTORE_REVIEWS = 19;

function renderQuality(){
  if(!ALL_REVIEWS.length){
    document.getElementById('q-avg-rating').textContent = 'No data';
    return;
  }
  const totalReviews = ALL_REVIEWS.length;
  const sumRating = ALL_REVIEWS.reduce((s,r)=>s+r.rating,0);
  const avgRating = sumRating/totalReviews;
  document.getElementById('q-avg-rating').textContent = avgRating.toFixed(2);

  document.getElementById('q-playstore').textContent = PLAYSTORE_RATING.toFixed(1);
  document.getElementById('q-playstore-foot').textContent = PLAYSTORE_REVIEWS + ' reviews · Google Play';
  document.getElementById('q-appstore').textContent = APPSTORE_RATING.toFixed(1);
  document.getElementById('q-appstore-foot').textContent = APPSTORE_REVIEWS + ' ratings · App Store';

  // Share of rated jobs = reviews ÷ Closed jobs in the same date window as the review file
  const reviewDates = ALL_REVIEWS.map(r=>r.date).filter(Boolean).sort();
  const winStart = reviewDates[0], winEnd = reviewDates[reviewDates.length-1];
  const closedInWindow = ALL_ORDERS.filter(o=>o.status==='Closed' && o.scheduled && o.scheduled>=winStart && o.scheduled<=winEnd).length;
  const ratedShare = closedInWindow ? totalReviews/closedInWindow*100 : 0;
  document.getElementById('q-rated-share').textContent = ratedShare.toFixed(1)+'%';
  document.getElementById('q-rated-share-foot').textContent = `${totalReviews} reviews ÷ ${closedInWindow} closed jobs (${winStart} → ${winEnd})`;

  // Per-artist stats
  const byArtist = {};
  ALL_REVIEWS.forEach(r=>{
    byArtist[r.artist] = byArtist[r.artist] || {ratings:[], spModel:r.spModel};
    byArtist[r.artist].ratings.push(r.rating);
  });
  const artistRows = Object.entries(byArtist).map(([artist,p])=>{
    const avg = p.ratings.reduce((s,x)=>s+x,0)/p.ratings.length;
    const starCounts = {1:0,2:0,3:0,4:0,5:0};
    p.ratings.forEach(r=>{ starCounts[r] = (starCounts[r]||0)+1; });
    const n = p.ratings.length;
    const share5 = n ? starCounts[5]/n*100 : 0;
    const shareBelow4 = n ? (starCounts[1]+starCounts[2]+starCounts[3])/n*100 : 0;
    return {artist, spModel:p.spModel, n, avg, starCounts, share5, shareBelow4};
  }).sort((a,b)=>b.avg-a.avg);

  const above47 = artistRows.filter(a=>a.avg>4.7).length;
  document.getElementById('q-providers-47').textContent = pct(above47, artistRows.length);
  document.getElementById('q-providers-47-foot').textContent = `${above47} of ${artistRows.length} rated providers`;

  const fiveStar = ALL_REVIEWS.filter(r=>r.rating===5).length;
  const below4 = ALL_REVIEWS.filter(r=>r.rating<4).length;
  document.getElementById('q-5star').textContent = pct(fiveStar, totalReviews);
  document.getElementById('q-below4').textContent = pct(below4, totalReviews);

  function artistRowHTML(a){
    return `<tr>
      <td>${a.artist}</td><td>${a.spModel}</td><td class="num">${fmtNum(a.n)}</td><td class="num">${a.avg.toFixed(2)}</td>
      <td class="num">${fmtNum(a.starCounts[1])}</td><td class="num">${fmtNum(a.starCounts[2])}</td><td class="num">${fmtNum(a.starCounts[3])}</td><td class="num">${fmtNum(a.starCounts[4])}</td><td class="num">${fmtNum(a.starCounts[5])}</td>
      <td class="num">${a.share5.toFixed(0)}%</td><td class="num">${a.shareBelow4.toFixed(0)}%</td>
    </tr>`;
  }

  document.getElementById('qualityArtistBody').innerHTML = artistRows.map(artistRowHTML).join('');

  // ---- Avg Rating by Category (across all beauticians) ----
  const byCategory = {};
  ALL_SERVICE_RATINGS.forEach(sr=>{
    byCategory[sr.category] = byCategory[sr.category] || {ratings:[]};
    byCategory[sr.category].ratings.push(sr.rating);
  });
  const categoryRows = Object.entries(byCategory).map(([cat,p])=>{
    const n = p.ratings.length;
    const avg = n ? p.ratings.reduce((s,x)=>s+x,0)/n : 0;
    const starCounts = {1:0,2:0,3:0,4:0,5:0};
    p.ratings.forEach(r=>{ starCounts[r] = (starCounts[r]||0)+1; });
    return {cat, n, avg, starCounts};
  }).sort((a,b)=>b.avg-a.avg);
  document.getElementById('qualityCategoryRatingBody').innerHTML = categoryRows.map(c=>`
    <tr><td>${c.cat}</td><td class="num">${fmtNum(c.n)}</td><td class="num">${c.avg.toFixed(2)}</td>
      <td class="num">${fmtNum(c.starCounts[1])}</td><td class="num">${fmtNum(c.starCounts[2])}</td><td class="num">${fmtNum(c.starCounts[3])}</td><td class="num">${fmtNum(c.starCounts[4])}</td><td class="num">${fmtNum(c.starCounts[5])}</td>
    </tr>
  `).join('') || '<tr><td colspan="8" style="color:var(--muted);">No service-level ratings available</td></tr>';

  // ---- Avg Rating by Service (individual service/SKU level, across all beauticians) ----
  const byService = {};
  ALL_SERVICE_RATINGS.forEach(sr=>{
    const key = sr.service+'||'+sr.category;
    byService[key] = byService[key] || {service:sr.service, category:sr.category, ratings:[]};
    byService[key].ratings.push(sr.rating);
  });
  const serviceRows = Object.values(byService).map(p=>{
    const n = p.ratings.length;
    const avg = n ? p.ratings.reduce((s,x)=>s+x,0)/n : 0;
    const starCounts = {1:0,2:0,3:0,4:0,5:0};
    p.ratings.forEach(r=>{ starCounts[r] = (starCounts[r]||0)+1; });
    return {...p, n, avg, starCounts};
  }).sort((a,b)=>b.avg-a.avg);
  document.getElementById('qualityServiceRatingBody').innerHTML = serviceRows.map(s=>`
    <tr><td>${s.service}</td><td>${s.category}</td><td class="num">${fmtNum(s.n)}</td><td class="num">${s.avg.toFixed(2)}</td>
      <td class="num">${fmtNum(s.starCounts[1])}</td><td class="num">${fmtNum(s.starCounts[2])}</td><td class="num">${fmtNum(s.starCounts[3])}</td><td class="num">${fmtNum(s.starCounts[4])}</td><td class="num">${fmtNum(s.starCounts[5])}</td>
    </tr>
  `).join('') || '<tr><td colspan="9" style="color:var(--muted);">No service-level ratings available</td></tr>';

  // ---- WoW Avg Rating, with Overall / per-cohort toggle ----
  const models = [...new Set(ALL_REVIEWS.map(r=>r.spModel))].sort();
  const toggleEl = document.getElementById('qualityWoWToggle');
  const options = ['Overall', ...models];
  toggleEl.innerHTML = options.map((m,i)=>`<button class="${i===0?'active':''}" data-model="${m}">${m}</button>`).join('');
  toggleEl.querySelectorAll('button').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      toggleEl.querySelectorAll('button').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      renderQualityWoWChart(btn.dataset.model);
    });
  });
  renderQualityWoWChart('Overall');

  // ---- Supply Model — Fill Rate & Rating ----
  const reviewDates2 = ALL_REVIEWS.map(r=>r.date).filter(Boolean).sort();
  const fwStart = reviewDates2[0], fwEnd = reviewDates2[reviewDates2.length-1];
  const byModelRatings = {};
  ALL_REVIEWS.forEach(r=>{
    byModelRatings[r.spModel] = byModelRatings[r.spModel] || [];
    byModelRatings[r.spModel].push(r.rating);
  });
  const closedByModelInWindow = {};
  ALL_ORDERS.filter(o=>o.status==='Closed' && o.provider && o.scheduled && o.scheduled>=fwStart && o.scheduled<=fwEnd)
    .forEach(o=>{ closedByModelInWindow[o.spModel] = (closedByModelInWindow[o.spModel]||0)+1; });

  const allModelsSeen = [...new Set([...Object.keys(byModelRatings), ...Object.keys(closedByModelInWindow)])];
  const fillRows = allModelsSeen.map(model=>{
    const ratings = byModelRatings[model] || [];
    const rated = ratings.length;
    const completed = closedByModelInWindow[model] || 0;
    const avg = rated ? ratings.reduce((s,x)=>s+x,0)/rated : null;
    const fillRate = completed ? rated/completed*100 : null;
    return {model, completed, rated, fillRate, avg};
  }).sort((a,b)=>(b.avg||0)-(a.avg||0));

  document.getElementById('qualityModelFillBody').innerHTML = fillRows.map(m=>`
    <tr>
      <td>${m.model}</td>
      <td class="num">${fmtNum(m.completed)}</td>
      <td class="num">${fmtNum(m.rated)}</td>
      <td class="num">${m.fillRate===null?'—':m.fillRate.toFixed(1)+'%'}</td>
      <td class="num">${m.avg===null?'—':m.avg.toFixed(2)}</td>
    </tr>
  `).join('');

  // Beauticians below 4.7 — ascending, worst first
  const below47 = artistRows.filter(a=>a.avg<4.7).sort((a,b)=>a.avg-b.avg);
  document.getElementById('qualityBelow47Body').innerHTML = below47.map(artistRowHTML).join('') || '<tr><td colspan="11" style="color:var(--muted);">Everyone is rated 4.7 or above</td></tr>';
}

function renderQualityWoWChart(filterModel){
  const reviews = filterModel==='Overall' ? ALL_REVIEWS : ALL_REVIEWS.filter(r=>r.spModel===filterModel);
  const byWeek = {};
  reviews.forEach(r=>{
    if(!r.date) return;
    const wk = isoLocal(mondayOf(new Date(r.date+'T00:00:00')));
    byWeek[wk] = byWeek[wk] || [];
    byWeek[wk].push(r.rating);
  });
  const weekKeys = Object.keys(byWeek).sort();
  const weekAvgs = weekKeys.map(wk=>byWeek[wk].reduce((s,x)=>s+x,0)/byWeek[wk].length);
  const weekCounts = weekKeys.map(wk=>byWeek[wk].length);
  const weekLabels = weekKeys.map(wk=>{
    const d = new Date(wk+'T00:00:00');
    return d.toLocaleDateString('en-IN',{day:'2-digit',month:'short'});
  });

  const overallAvg = reviews.length ? reviews.reduce((s,r)=>s+r.rating,0)/reviews.length : null;
  document.getElementById('qualityWoWOverall').textContent = overallAvg===null ? '—' : overallAvg.toFixed(2);

  const dotLabelPlugin = {
    id: 'dotLabelPlugin',
    afterDatasetsDraw(chart){
      const {ctx} = chart;
      ctx.save();
      ctx.font = '700 12px Calibri, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillStyle = VIOLET;
      chart.getDatasetMeta(0).data.forEach((point,i)=>{
        if(weekAvgs[i]===undefined || weekAvgs[i]===null) return;
        ctx.fillText(weekAvgs[i].toFixed(2), point.x, point.y - 12);
      });
      ctx.restore();
    }
  };

  destroyChart('qualitywow');
  charts['qualitywow'] = new Chart(document.getElementById('chartQualityWoW'), {
    type:'line',
    data:{
      labels: weekLabels,
      datasets:[{ label:'Weekly avg rating', data:weekAvgs, borderColor:VIOLET, backgroundColor:VIOLET, tension:0.3, pointRadius:4 }]
    },
    options:{
      layout:{ padding:{top:24} },
      scales:{
        x:{grid:{display:false}},
        y:{grid:{color:'#EFEBEE'}, min:1, max:5, title:{display:true, text:'Avg rating'}}
      },
      plugins:{
        legend:{display:false},
        tooltip:{ callbacks:{ label(ctx){
          const i = ctx.dataIndex;
          return weekCounts[i] ? `Weekly avg: ${ctx.raw.toFixed(2)} (${weekCounts[i]} reviews)` : 'No reviews';
        } } }
      }
    },
    plugins:[dotLabelPlugin]
  });
}


// ================= OVERVIEW =================
function renderOverview(orders, bookingFailedOrders, inRangeOrders, slotRequests){
  const total = orders.length;
  const closed = orders.filter(o=>o.status==='Closed');
  const cancelled = orders.filter(o=>o.status==='Cancelled');
  const open = orders.filter(o=>o.status==='Open');

  // Not Closed — split by every raw stage that isn't Closed/Completed (Cancelled + all Open sub-statuses)
  const notClosed = orders.filter(o=>o.status!=='Closed');
  const notClosedCounts = {};
  notClosed.forEach(o=>{ notClosedCounts[o.rawStatus] = (notClosedCounts[o.rawStatus]||0)+1; });
  const notClosedRows = Object.entries(notClosedCounts).sort((a,b)=>b[1]-a[1]);
  document.getElementById('openSplitBody').innerHTML = notClosedRows.map(([stage,count])=>`
    <tr><td>${stage}</td><td class="num">${fmtNum(count)}</td><td class="num">${pct(count,notClosed.length)}</td></tr>
  `).join('') || '<tr><td colspan="3" style="color:var(--muted);">Everything in range is Closed</td></tr>';

  // ---- AOV Bucket Distribution (Closed jobs, post-discount bill value) ----
  const AOV_BUCKETS = [
    ['<500', 0, 499],
    ['500-999', 500, 999],
    ['1000-1499', 1000, 1499],
    ['1500-1999', 1500, 1999],
    ['2000-2499', 2000, 2499],
    ['2500-2999', 2500, 2999],
    ['3000+', 3000, Infinity],
  ];
  const totalClosedForBuckets = closed.length;
  document.getElementById('aovBucketBody').innerHTML = AOV_BUCKETS.map(([label,lo,hi])=>{
    const inBucket = closed.filter(o=>o.bill>=lo && o.bill<=hi);
    const count = inBucket.length;
    const ricaCount = inBucket.filter(o=>(o.promoUplift||0)>0).length;
    const ricaShare = count ? ricaCount/count*100 : 0;
    return `<tr><td>${label}</td><td class="num">${fmtNum(count)}</td><td class="num">${pct(count,totalClosedForBuckets)}</td><td class="num">${ricaShare.toFixed(1)}%</td></tr>`;
  }).join('') || '<tr><td colspan="4" style="color:var(--muted);">No closed orders in range</td></tr>';

  // ---- Web vs App platform share ----
  const platformCounts = { App:0, Web:0, Unknown:0 };
  orders.forEach(o=>{
    if(o.platform==='App') platformCounts.App++;
    else if(o.platform==='Web') platformCounts.Web++;
    else platformCounts.Unknown++;
  });
  const platformTotal = orders.length;
  const platformLabels = ['App','Web','Unknown'];
  const platformColors = [VIOLET, GREEN, '#C9BFD4'];
  destroyChart('platformshare');
  charts['platformshare'] = new Chart(document.getElementById('chartPlatformShare'), {
    type:'pie',
    data:{
      labels: platformLabels,
      datasets:[{ data: platformLabels.map(l=>platformCounts[l]), backgroundColor: platformColors }]
    },
    options:{
      plugins:{ legend:{ position:'bottom', labels:{boxWidth:10, padding:12} } }
    }
  });
  document.getElementById('platformShareBody').innerHTML = platformLabels.map(l=>{
    const c = platformCounts[l];
    return `<tr><td>${l}</td><td class="num">${fmtNum(c)}</td><td class="num">${pct(c,platformTotal)}</td></tr>`;
  }).join('');

  // Revenue — Closed orders. AOV/GMV here are post-discount only: the actual money received.
  const gmvPost = closed.reduce((s,o)=>s+o.bill*gstFactor(o),0);
  const discount = closed.reduce((s,o)=>s+o.discount,0);
  const promoUplift = closed.reduce((s,o)=>s+(o.promoUplift||0),0);
  const aov = closed.length ? gmvPost/closed.length : 0;

  document.getElementById('k-gmv-post').textContent = fmtINR(gmvPost);
  document.getElementById('k-discount').textContent = fmtINR(discount+promoUplift);
  document.getElementById('k-discount-pct').textContent = pct(discount+promoUplift,gmvPost)+' of GMV (Closed) (incl. '+fmtINR(promoUplift)+' promo)';
  document.getElementById('k-aov').textContent = fmtINR(aov);

  // Created Orders — by created date, within the selected time frame (excl. booking failed)
  const createdInRange = ALL_ORDERS.filter(o=>!o.bookingFailed && o.created && o.created>=filterFrom && o.created<=filterTo);

  // CT -> BT gap: lead time between creation time and booked slot time
  const gapBuckets = {'< 3 hrs':0,'3–6 hrs':0,'6–12 hrs':0,'12–24 hrs':0,'1–2 days':0,'2–3 days':0,'3–7 days':0,'7+ days':0};
  let gapTotal = 0;
  orders.forEach(o=>{
    if(!o.createdDT || !o.scheduledDT) return;
    const h = (new Date(o.scheduledDT) - new Date(o.createdDT)) / 3600000;
    gapTotal++;
    if(h < 3) gapBuckets['< 3 hrs']++;
    else if(h < 6) gapBuckets['3–6 hrs']++;
    else if(h < 12) gapBuckets['6–12 hrs']++;
    else if(h < 24) gapBuckets['12–24 hrs']++;
    else if(h < 48) gapBuckets['1–2 days']++;
    else if(h < 72) gapBuckets['2–3 days']++;
    else if(h < 168) gapBuckets['3–7 days']++;
    else gapBuckets['7+ days']++;
  });
  const gapCounts = Object.values(gapBuckets);
  const gapPcts = gapCounts.map(c => gapTotal ? (c/gapTotal*100) : 0);

  const countAboveBar = {
    id: 'countAboveBar',
    afterDatasetsDraw(chart){
      const {ctx} = chart;
      ctx.save();
      ctx.font = '600 10.5px Calibri, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillStyle = '#7A7480';
      chart.getDatasetMeta(0).data.forEach((bar,i)=>{
        ctx.fillText(fmtNum(gapCounts[i]), bar.x, bar.y - 6);
      });
      ctx.restore();
    }
  };

  destroyChart('gap');
  charts['gap'] = new Chart(document.getElementById('chartGap'), {
    type:'bar',
    data:{ labels:Object.keys(gapBuckets), datasets:[{ label:'% of orders', data:gapPcts, backgroundColor: VIOLET }]},
    options:{
      plugins:{
        legend:{display:false},
        tooltip:{ callbacks:{ label(ctx){
          const i = ctx.dataIndex;
          return `${gapCounts[i]} orders (${ctx.raw.toFixed(1)}%)`;
        }}}
      },
      scales:{
        x:{grid:{display:false}, ticks:{font:{size:10}}},
        y:{grid:{color:'#EFEBEE'}, title:{display:true, text:'% of orders'}, ticks:{callback:v=>v+'%'}}
      },
      layout:{ padding:{top:18} }
    },
    plugins:[countAboveBar]
  });
}

// ================= ATTACH (category-level, Closed jobs only) =================
function renderAttach(items, orders){
  const closedIds = new Set(orders.filter(o=>o.status==='Closed').map(o=>o.id));
  const totalClosed = closedIds.size;

  const catOrders = {}; // cat -> Set(closed orderIds)
  const catItemInstances = {}; // cat -> total raw item instances on closed jobs (for avg items/order)
  items.forEach(li=>{
    if(!closedIds.has(li.orderId)) return; // basis = completed jobs only
    catOrders[li.category] = catOrders[li.category] || new Set();
    catOrders[li.category].add(li.orderId);
    catItemInstances[li.category] = (catItemInstances[li.category]||0) + 1;
  });

  const rows = Object.keys(catOrders).map(cat=>{
    const count = catOrders[cat].size;
    return { cat, count, avgItems: count ? catItemInstances[cat]/count : 0 };
  }).sort((a,b)=>b.count-a.count); // descending by attach rate (== descending by count, since denominator is fixed)

  document.getElementById('categoryAttachBody').innerHTML = rows.map(r=>`
    <tr><td>${r.cat}</td><td class="num">${fmtNum(r.count)}</td><td class="num">${pct(r.count,totalClosed)}</td><td class="num">${r.avgItems.toFixed(2)}</td></tr>
  `).join('');
}

// ---- RL Deep Dive (independent date filter, driven by rlFilterFrom/rlFilterTo) ----
// service name (as booked, no variant) -> category, built from live booking
// history so it never drifts from the categories used elsewhere on this
// dashboard (Waxing, Facial, Pedicure, Threading, ...).
let _svcCategoryLookup = null;
function buildServiceCategoryLookup(){
  if(_svcCategoryLookup) return _svcCategoryLookup;
  const votes = {}; // service -> {category: count}
  ALL_ITEMS.forEach(li=>{
    const v = votes[li.service] = votes[li.service] || {};
    v[li.category] = (v[li.category]||0) + 1;
  });
  const lookup = {};
  Object.entries(votes).forEach(([svc, cats])=>{
    let best=null, bestN=-1;
    Object.entries(cats).forEach(([c,n])=>{ if(n>bestN){ best=c; bestN=n; } });
    lookup[svc] = best;
  });
  _svcCategoryLookup = lookup;
  return lookup;
}

// RL service-item names look like "Full Arms + Underarms Waxing (Rica Chocolate
// Tin)" or plain "Sea Soul Classic Pedicure" — strip a trailing "(...)" to get
// the base service name, then look it up; keyword match covers the rare
// (~0.3%) names booking history has never seen a variant of.
function categorizeRlItem(name){
  const lookup = buildServiceCategoryLookup();
  let base = name;
  if(name.includes('(') && name.endsWith(')')) base = name.slice(0, name.lastIndexOf('(')).trim();
  if(lookup[base]) return lookup[base];
  if(lookup[name]) return lookup[name];
  const n = name.toLowerCase();
  if(n.includes('waxing')) return 'Waxing';
  if(n.includes('pedicure')) return 'Pedicure';
  if(n.includes('facial')) return 'Facial';
  if(n.includes('threading')) return 'Threading';
  if(n.includes('massage')) return 'Massage';
  if(n.includes('manicure') || n.includes('polish') || n.includes('cut, file')) return 'Manicure';
  if(n.includes('detan')) return 'Detan';
  if(n.includes('bleach')) return 'Bleach';
  if(n.includes('scrub')) return 'Scrub';
  if(n.includes('hair')) return 'Hair Colour';
  if(n.includes('clean')) return 'Clean up';
  return 'Other';
}

const RL_SLOT_BUCKETS = ['Evening (4 PM - 8 PM)', 'Afternoon (12 PM - 4 PM)', 'Morning (8 AM - 12 PM)'];
// A named slot maps directly; anything else ("Any time", "Not selected", or a
// one-off exact time like "3:00 PM") falls back to the hour the request was
// actually created, since that's the best signal we have for when they wanted it.
function rlSlotBucket(r){
  const slot = r.timeSlot || '';
  if(slot.startsWith('Evening')) return RL_SLOT_BUCKETS[0];
  if(slot.startsWith('Afternoon')) return RL_SLOT_BUCKETS[1];
  if(slot.startsWith('Morning')) return RL_SLOT_BUCKETS[2];
  if(typeof r.createdHour === 'number'){
    if(r.createdHour >= 16) return RL_SLOT_BUCKETS[0];
    if(r.createdHour >= 12) return RL_SLOT_BUCKETS[1];
    return RL_SLOT_BUCKETS[2];
  }
  return null; // no timestamp to fall back on (pre-FullDetail rows) — excluded from bucketed tables
}

// One customer can generate more than one slot-request row on the same RL date (e.g. they
// clicked around before actually requesting, or requested more than one zone/slot). For
// counting purposes that's one lost customer for that day, not several: collapse each
// (phone, date) group to a single representative row, preferring an actual REQUESTED (or
// legacy pre-interaction-tracking) row over a CLICKED-only one.
function dedupeRlRequestsPerDay(requests){
  const byKey = new Map();
  const noKey = [];
  requests.forEach(r=>{
    if(!r.phone || !r.date){ noKey.push(r); return; }
    const key = r.phone+'|'+r.date;
    const existing = byKey.get(key);
    if(!existing){ byKey.set(key, r); return; }
    if(existing.interaction==='CLICKED' && r.interaction!=='CLICKED') byKey.set(key, r);
  });
  return [...byKey.values(), ...noKey];
}

function renderRLDeepDive(){
  if(!document.getElementById('rlServiceBody')) return; // panel not present in this build

  const inRl = r => r.date && r.date>=rlFilterFrom && r.date<=rlFilterTo;
  const requests = dedupeRlRequestsPerDay(ALL_SLOT_REQUESTS.filter(inRl));
  const rlRecoveryKeys = buildRlRecoveryIndex();

  // ---- Headline: RL / Recovered, both absolute and as a % of bookings in the same window ----
  const rlPhones = new Set(requests.map(r=>r.phone).filter(Boolean));
  const recoveredPhones = new Set();
  requests.forEach(r=>{ if(r.phone && r.date && rlRecoveryKeys.has(r.phone+'|'+r.date)) recoveredPhones.add(r.phone); });
  const rlCount = rlPhones.size;
  const recoveredCount = recoveredPhones.size;

  const bookings = ALL_ORDERS.filter(o=>o.scheduled && o.scheduled>=rlFilterFrom && o.scheduled<=rlFilterTo && !o.bookingFailed).length;
  const rlPct = bookings ? rlCount/bookings*100 : 0;
  const recoveredPct = bookings ? recoveredCount/bookings*100 : 0;

  document.getElementById('k-rl-count').textContent = fmtNum(rlCount);
  document.getElementById('k-rl-count-foot').textContent = 'unique phones lost';
  document.getElementById('k-rl-pct').textContent = rlPct.toFixed(1)+'%';
  document.getElementById('k-rl-pct-foot').textContent = `of ${fmtNum(bookings)} bookings`;
  document.getElementById('k-rl-recovered-count').textContent = fmtNum(recoveredCount);
  document.getElementById('k-rl-recovered-count-foot').textContent = 'unique phones recovered';
  document.getElementById('k-rl-recovered-pct').textContent = recoveredPct.toFixed(1)+'%';
  document.getElementById('k-rl-recovered-pct-foot').textContent = `of ${fmtNum(bookings)} bookings`;

  // ---- Lost demand by service, grouped to category, with a slot-of-day breakdown ----
  const catAgg = {}; // category -> {count, Evening, Afternoon, Morning}
  requests.forEach(r=>{
    const bucket = rlSlotBucket(r);
    (r.serviceItems||[]).forEach(it=>{
      const cat = categorizeRlItem(it.name);
      const a = catAgg[cat] = catAgg[cat] || {count:0, Evening:0, Afternoon:0, Morning:0};
      a.count++;
      if(bucket==='Evening (4 PM - 8 PM)') a.Evening++;
      else if(bucket==='Afternoon (12 PM - 4 PM)') a.Afternoon++;
      else if(bucket==='Morning (8 AM - 12 PM)') a.Morning++;
    });
  });
  const catRows = Object.entries(catAgg)
    .map(([cat,a])=>({cat, ...a}))
    .sort((a,b)=>b.count-a.count);
  const catTotal = catRows.reduce((s,r)=>({
    count: s.count+r.count, Evening: s.Evening+r.Evening, Afternoon: s.Afternoon+r.Afternoon, Morning: s.Morning+r.Morning
  }), {count:0, Evening:0, Afternoon:0, Morning:0});
  document.getElementById('rlServiceBody').innerHTML = catRows.map(r=>`
    <tr><td>${r.cat}</td><td class="num">${fmtNum(r.count)}</td><td class="num">${fmtNum(r.Evening)}</td><td class="num">${fmtNum(r.Afternoon)}</td><td class="num">${fmtNum(r.Morning)}</td></tr>
  `).join('') + `
    <tr style="font-weight:700; border-top:2px solid var(--ink);"><td>Total</td><td class="num">${fmtNum(catTotal.count)}</td><td class="num">${fmtNum(catTotal.Evening)}</td><td class="num">${fmtNum(catTotal.Afternoon)}</td><td class="num">${fmtNum(catTotal.Morning)}</td></tr>
  `;

  // ---- Lost demand by time slot, grouped into the same 3 buckets ----
  const valued = requests.filter(r=>typeof r.totalValue === 'number');
  const slotAgg = {};
  valued.forEach(r=>{
    const bucket = rlSlotBucket(r);
    if(!bucket) return;
    const a = slotAgg[bucket] = slotAgg[bucket] || {count:0, value:0};
    a.count++; a.value += r.totalValue;
  });
  const slotRows = RL_SLOT_BUCKETS
    .filter(b=>slotAgg[b])
    .map(b=>({slot:b, ...slotAgg[b]}))
    .sort((a,b)=>b.value-a.value);
  const slotTotal = slotRows.reduce((s,r)=>({count:s.count+r.count, value:s.value+r.value}), {count:0, value:0});
  document.getElementById('rlTimeSlotBody').innerHTML = slotRows.map(r=>`
    <tr><td>${r.slot}</td><td class="num">${fmtNum(r.count)}</td><td class="num">${fmtINR(r.value)}</td></tr>
  `).join('') + `
    <tr style="font-weight:700; border-top:2px solid var(--ink);"><td>Total</td><td class="num">${fmtNum(slotTotal.count)}</td><td class="num">${fmtINR(slotTotal.value)}</td></tr>
  `;
}

function addDays(dateStr, n){
  const d = new Date(dateStr+'T00:00:00'); d.setDate(d.getDate()+n);
  return isoLocal(d);
}
function daysBetween(a,b){
  return Math.round((new Date(b+'T00:00:00') - new Date(a+'T00:00:00'))/86400000);
}
// Shift a [start,end] window back by n calendar months, preserving day-of-month
// (capped to the shifted month's own last day, same convention used elsewhere here).
function shiftMonthRange(start, end, n){
  const s = new Date(start+'T00:00:00'), e = new Date(end+'T00:00:00');
  const newS = new Date(s.getFullYear(), s.getMonth()-n, s.getDate());
  const lastDayOfShiftedMonth = new Date(e.getFullYear(), e.getMonth()-n+1, 0).getDate();
  const newE = new Date(e.getFullYear(), e.getMonth()-n, Math.min(e.getDate(), lastDayOfShiftedMonth));
  return [isoLocal(newS), isoLocal(newE)];
}

function renderDayCompare(){
  const section = document.getElementById('dayCompareSection');
  const titleEl = document.getElementById('dayCompareTitle');
  const noteEl = document.getElementById('dayCompareNote');
  const preset = activePresetKey;

  if(preset==='alltime'){
    if(section) section.style.display = 'none';
    return;
  }
  if(section) section.style.display = '';

  // Build the "Today" window and up to 4 comparison windows, per preset.
  let todayWin, compWins /* [{label, start, end}] */, showL4W = true;

  if(preset==='yesterday' || preset===null || preset===undefined){
    // Custom range (preset null) falls here too only if it happens to be a single day;
    // real custom-range handling is the explicit branch further below.
  }

  if(preset==='today'){
    todayWin = [filterTo, filterTo];
    compWins = [7,14,21].map(n=>({label:`D-${n}`, start:addDays(filterTo,-n), end:addDays(filterTo,-n)}));
  } else if(preset==='yesterday'){
    todayWin = [filterTo, filterTo];
    compWins = [7,14,21,28].map(n=>({label:`D-${n}`, start:addDays(filterTo,-n), end:addDays(filterTo,-n)}));
  } else if(preset==='tomorrow'){
    todayWin = [filterTo, filterTo];
    compWins = [{label:'D-7', start:addDays(filterTo,-7), end:addDays(filterTo,-7)}];
    showL4W = false;
  } else if(preset==='thisweek'){
    const now = new Date();
    const mon = mondayOf(now);
    const realToday = isoLocal(now);
    todayWin = [isoLocal(mon), realToday]; // start of week through today only, not the full week
    const len = daysBetween(todayWin[0], todayWin[1]);
    compWins = [1,2,3,4].map(n=>({label:`D-${n*7}`, start:addDays(todayWin[0],-7*n), end:addDays(todayWin[1],-7*n)}));
  } else if(preset==='lastweek'){
    todayWin = [filterFrom, filterTo]; // already the full prior week
    compWins = [1,2,3,4].map(n=>({label:`D-${n*7}`, start:addDays(todayWin[0],-7*n), end:addDays(todayWin[1],-7*n)}));
  } else if(preset==='mtd'){
    todayWin = [filterFrom, filterTo]; // already 1st-of-month through yesterday
    compWins = [1,2,3,4].map(n=>{ const [s,e]=shiftMonthRange(filterFrom,filterTo,n); return {label:`M-${n}`, start:s, end:e}; });
  } else if(preset==='lastmonth'){
    todayWin = [filterFrom, filterTo]; // already the full prior calendar month
    compWins = [1,2,3,4].map(n=>{ const [s,e]=shiftMonthRange(filterFrom,filterTo,n); return {label:`M-${n}`, start:s, end:e}; });
  } else {
    // Custom range (manually picked From/To) — compare against the same-length prior period(s).
    todayWin = [filterFrom, filterTo];
    const len = daysBetween(todayWin[0], todayWin[1]) + 1;
    compWins = [1,2,3,4].map(n=>({label:`Period -${n}`, start:addDays(todayWin[0],-len*n), end:addDays(todayWin[1],-len*n)}));
  }

  // Title / note text, tailored per preset
  const presetLabels = { today:'Today', yesterday:'Yesterday', tomorrow:'Tomorrow', thisweek:'This Week', lastweek:'Last Week', mtd:'MTD', lastmonth:'Last Month' };
  const label = presetLabels[preset] || 'Custom Range';
  if(titleEl) titleEl.textContent = `Order Status — ${label} Comparison`;
  if(noteEl){
    if(preset==='tomorrow') noteEl.textContent = `Tomorrow (${todayWin[0]}) vs. the same day last week (${compWins[0].start}) — no longer-range comparison for a single future day.`;
    else if(preset==='thisweek') noteEl.textContent = `This week so far: ${todayWin[0]} to ${todayWin[1]}. D-7/14/21/28 = the same span, 1/2/3/4 weeks back (WTD-1, WTD-2, WTD-3, WTD-4).`;
    else if(preset==='lastweek') noteEl.textContent = `Last week fully: ${todayWin[0]} to ${todayWin[1]}. D-7/14/21/28 = the same full week, 1/2/3/4 weeks further back.`;
    else if(preset==='mtd') noteEl.textContent = `Month to date: ${todayWin[0]} to ${todayWin[1]}. M-1/M-2/M-3/M-4 = the same day-of-month span, 1/2/3/4 months back.`;
    else if(preset==='lastmonth') noteEl.textContent = `Last month fully: ${todayWin[0]} to ${todayWin[1]}. M-1/M-2/M-3/M-4 = the same full month, 1/2/3/4 months further back.`;
    else if(preset==='today') noteEl.textContent = `Today (${todayWin[0]}). D-7/14/21 = the same day, 1/2/3 weeks back.`;
    else if(preset==='yesterday') noteEl.textContent = `Yesterday (${todayWin[0]}). D-7/14/21/28 = the same day, 1/2/3/4 weeks back from yesterday.`;
    else noteEl.textContent = `${todayWin[0]} to ${todayWin[1]} (${daysBetween(todayWin[0],todayWin[1])+1} days). Each comparison period is the same length, further back.`;
  }


  const rlRecoveryKeys = buildRlRecoveryIndex();

  // Aggregate every Order Status metric over a [start,end] date range (inclusive).
  // Unique-phone metrics (RL, RL Recovered) are deduplicated across the WHOLE range,
  // not summed day-by-day. Ratio metrics are computed on aggregated numerator/denominator.
  function metricsForRange(start, end){
    const scheduledOrders = ALL_ORDERS.filter(o=>o.scheduled>=start && o.scheduled<=end && !o.bookingFailed);
    const scheduled = scheduledOrders.length;
    const closedOrders = scheduledOrders.filter(o=>o.status==='Closed');
    const closed = closedOrders.length;
    const cancelled = scheduledOrders.filter(o=>o.status==='Cancelled').length;
    const open = scheduledOrders.filter(o=>o.status==='Open').length;
    const bookingFailed = ALL_ORDERS.filter(o=>o.scheduled>=start && o.scheduled<=end && o.bookingFailed).length;

    const rangeRl = ALL_SLOT_REQUESTS.filter(r=>r.date>=start && r.date<=end);
    const rlPhones = new Set(rangeRl.map(r=>r.phone).filter(Boolean));
    const rl = rlPhones.size;
    const rlPct = scheduled ? rl/scheduled*100 : 0;
    const recoveredPhones = new Set();
    rangeRl.forEach(r=>{ if(r.phone && rlRecoveryKeys.has(r.phone+'|'+r.date)) recoveredPhones.add(r.phone); });
    const rlRecovered = recoveredPhones.size;
    const rlRecoveredPct = rl ? rlRecovered/rl*100 : 0;

    const sdPct = scheduled ? closed/scheduled*100 : 0;
    const gmv = closedOrders.reduce((s,o)=>s+o.bill*gstFactor(o),0);
    const closedAov = closed ? gmv/closed : 0;

    const created = ALL_ORDERS.filter(o=>o.created>=start && o.created<=end && !o.bookingFailed).length;

    return { scheduled, closed, cancelled, open, bookingFailed, rl, rlPct, rlRecovered, rlRecoveredPct, sdPct, closedAov, created };
  }

  const todayData = metricsForRange(todayWin[0], todayWin[1]);
  const compData = compWins.map(w=>metricsForRange(w.start, w.end));

  // goodWhenUp: true if an increase is a positive signal (green), false if an increase
  // is a negative signal (red) — e.g. more Cancelled/Booking Failed/RL is bad, more
  // Closed/RL Recovered/SD% is good.
  const METRICS = [
    { key:'scheduled', label:'Total Scheduled Orders', fmt:v=>fmtNum(v), goodWhenUp:true },
    { key:'closed', label:'Closed', fmt:v=>fmtNum(v), goodWhenUp:true },
    { key:'cancelled', label:'Cancelled', fmt:v=>fmtNum(v), goodWhenUp:false },
    { key:'open', label:'Open (in pipeline)', fmt:v=>fmtNum(v), goodWhenUp:true },
    { key:'bookingFailed', label:'Booking Failed', fmt:v=>fmtNum(v), goodWhenUp:false },
    { key:'rl', label:'Request Loss (Unique Phones)', fmt:v=>fmtNum(v), goodWhenUp:false },
    { key:'rlPct', label:'RL%', fmt:v=>v.toFixed(1)+'%', goodWhenUp:false },
    { key:'rlRecovered', label:'RL Recovered', fmt:v=>fmtNum(v), goodWhenUp:true },
    { key:'rlRecoveredPct', label:'RL Recovered %', fmt:v=>v.toFixed(1)+'%', goodWhenUp:true },
    { key:'sdPct', label:'SD% (Successful Delivery)', fmt:v=>v.toFixed(1)+'%', goodWhenUp:true },
    { key:'closedAov', label:'Closed AOV', fmt:v=>fmtINR(v), goodWhenUp:true },
    { key:'created', label:'Created Orders', fmt:v=>fmtNum(v), goodWhenUp:true },
  ];

  // Rebuild the header row to match however many comparison columns this preset uses
  const headerRow = document.getElementById('dayCompareHeaderRow');
  if(headerRow){
    let h = '<th>Metric</th><th class="num">Today</th>';
    if(showL4W) h += `<th class="num">L${compWins.length}W Average</th>`;
    compWins.forEach(w=> h += `<th class="num">${w.label}</th>`);
    headerRow.innerHTML = h;
  }

  // Heatmap cell: background/text color intensity scales with |delta|% (capped
  // at 60% so a handful of huge swings don't wash out the rest of the table).
  const heatCell = (val, fmtFn, delta, goodWhenUp)=>{
    if(delta===null) return `<td class="num">${fmtFn(val)}</td>`;
    const isGood = goodWhenUp ? (delta>=0) : (delta<=0);
    const intensity = Math.min(Math.abs(delta), 60) / 60;
    const bg = isGood ? `rgba(46,139,87,${(0.08+0.30*intensity).toFixed(2)})` : `rgba(193,70,61,${(0.08+0.30*intensity).toFixed(2)})`;
    const col = isGood ? '#1f6b41' : '#8f342c';
    const sign = delta>=0 ? '+' : '';
    return `<td class="num" style="background:${bg}; color:${col}; font-weight:600;">${fmtFn(val)} <span style="font-size:10px; opacity:0.85;">(${sign}${delta.toFixed(0)}%)</span></td>`;
  };

  const rows = METRICS.map(m=>{
    const todayVal = todayData[m.key];
    const compVals = compData.map(cd=>cd[m.key]);
    const l4w = compVals.length ? compVals.reduce((a,b)=>a+b,0)/compVals.length : 0;
    let cells = `<td>${m.label}</td><td class="num">${m.fmt(todayVal)}</td>`;
    if(showL4W) cells += `<td class="num">${m.fmt(l4w)}</td>`;
    compVals.forEach(cv=>{
      const delta = cv ? (todayVal-cv)/cv*100 : null;
      cells += heatCell(cv, m.fmt, delta, m.goodWhenUp);
    });
    return `<tr>${cells}</tr>`;
  });

  const body = document.getElementById('dayCompareBody');
  if(body) body.innerHTML = rows.join('');
}

let paceDayOffset = 0; // 0=Today, 1=Tomorrow, 2=Day After Tomorrow
let paceInit = false;

function setupPaceToggle(){
  if(paceInit) return;
  paceInit = true;
  const toggleEl = document.getElementById('pacedayToggle');
  const options = [{label:'Today', offset:0}, {label:'Tomorrow', offset:1}, {label:'Day After Tomorrow', offset:2}];
  toggleEl.innerHTML = options.map((o,i)=>`<button class="${i===0?'active':''}" data-offset="${o.offset}">${o.label}</button>`).join('');
  toggleEl.querySelectorAll('button').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      toggleEl.querySelectorAll('button').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      paceDayOffset = parseInt(btn.dataset.offset,10);
      renderCreatedPace();
    });
  });
}

function renderCreatedPace(){
  setupPaceToggle();
  const now = new Date();
  const target = new Date(now); target.setDate(target.getDate()+paceDayOffset); target.setHours(0,0,0,0);

  const OFFSETS = [0,7,14,21,28,35,49,56];
  const points = OFFSETS.map(N=>{
    const refScheduled = new Date(target); refScheduled.setDate(refScheduled.getDate()-N);
    const refScheduledISO = isoLocal(refScheduled);
    const refNow = new Date(now); refNow.setDate(refNow.getDate()-N);
    const count = ALL_ORDERS.filter(o=>{
      if(o.bookingFailed || !o.createdDT || o.scheduled !== refScheduledISO) return false;
      return new Date(o.createdDT) <= refNow;
    }).length;
    return { N, refScheduled, count };
  });

  const d0 = points[0].count;
  const d7 = points[1].count;
  const avgRest = points.slice(1).reduce((s,p)=>s+p.count,0)/(points.length-1);

  const dayLabel = paceDayOffset===0?'Today':paceDayOffset===1?'Tomorrow':'Day After Tomorrow';
  const cutoffLabel = now.toLocaleTimeString('en-IN',{hour:'numeric',minute:'2-digit'});
  document.getElementById('k-pace-today').textContent = fmtNum(d0);
  document.getElementById('k-pace-today-foot').textContent = `${dayLabel} (${points[0].refScheduled.toLocaleDateString('en-IN',{day:'2-digit',month:'short'})}), as of ${cutoffLabel} now`;
  document.getElementById('k-pace-lastweek').textContent = fmtNum(d7);
  document.getElementById('k-pace-avg').textContent = avgRest.toFixed(1);
  const vsAvgPct = avgRest ? ((d0-avgRest)/avgRest*100) : 0;
  document.getElementById('k-pace-avg-foot').textContent = `${dayLabel} is ${vsAvgPct>=0?'+':''}${vsAvgPct.toFixed(0)}% vs this average`;

  const chartLabels = points.map(p=> p.N===0 ? dayLabel : `D-${p.N}`).reverse();
  const chartData = points.map(p=>p.count).reverse();
  const chartColors = points.map(p=> p.N===0 ? VIOLET : '#C9BFD4').reverse();

  const paceCountLabel = {
    id: 'paceCountLabel',
    afterDatasetsDraw(chart){
      const {ctx} = chart;
      ctx.save();
      ctx.font = '600 11px Calibri, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillStyle = '#7A7480';
      chart.getDatasetMeta(0).data.forEach((bar,i)=>{
        ctx.fillText(fmtNum(chartData[i]), bar.x, bar.y - 6);
      });
      ctx.restore();
    }
  };

  destroyChart('createdpace');
  charts['createdpace'] = new Chart(document.getElementById('chartCreatedPace'), {
    type:'bar',
    data:{ labels: chartLabels, datasets:[{ label:'Orders locked in by matching cutoff', data: chartData, backgroundColor: chartColors }] },
    options:{
      layout:{ padding:{top:18} },
      scales:{ x:{grid:{display:false}, ticks:{font:{size:10}}}, y:{grid:{color:'#EFEBEE'}, title:{display:true, text:`Orders scheduled for that day, created by matching cutoff`}} },
      plugins:{ legend:{display:false} }
    },
    plugins:[paceCountLabel]
  });
}


function renderWoWMoM(){
  const orders = ALL_ORDERS.filter(o=>o.status==='Closed');

  // ---- WoW: last 12 Monday–Sunday weeks ending with the current week ----
  const thisMonday = mondayOf(new Date());
  const weeks = [];
  for(let i=11;i>=0;i--){
    const start = new Date(thisMonday); start.setDate(start.getDate()-7*i);
    const end = new Date(start); end.setDate(end.getDate()+6);
    weeks.push({ startISO: isoLocal(start), endISO: isoLocal(end) });
  }
  const weekCounts = weeks.map(w=>orders.filter(o=>o.scheduled>=w.startISO && o.scheduled<=w.endISO).length);
  const weekGrowth = weekCounts.map((c,i)=> i>0 && weekCounts[i-1]>0 ? ((c-weekCounts[i-1])/weekCounts[i-1]*100) : null);
  const weekLabels = weeks.map(w=>{
    const s = new Date(w.startISO);
    return s.toLocaleDateString('en-IN',{day:'2-digit',month:'short'});
  });

  destroyChart('wow');
  charts['wow'] = new Chart(document.getElementById('chartWoW'), {
    data:{
      labels: weekLabels,
      datasets:[
        { type:'bar', label:'Closed Jobs', data:weekCounts, backgroundColor:VIOLET, order:2, yAxisID:'y' },
        { type:'line', label:'WoW %', data:weekGrowth, borderColor:GREEN, backgroundColor:GREEN, tension:0.3, spanGaps:true, order:1, yAxisID:'y1', pointRadius:3 },
      ]
    },
    options:{
      scales:{
        x:{grid:{display:false}, ticks:{font:{size:10}}},
        y:{grid:{color:'#EFEBEE'}, title:{display:true, text:'Closed Jobs'}},
        y1:{position:'right', grid:{display:false}, title:{display:true, text:'WoW %'}, ticks:{callback:v=>v+'%'}}
      },
      plugins:{ legend:{ position:'bottom', labels:{boxWidth:10, padding:12} },
        tooltip:{ callbacks:{ label(ctx){
          if(ctx.dataset.label==='WoW %') return ctx.raw===null ? 'WoW %: —' : `WoW %: ${ctx.raw>=0?'+':''}${ctx.raw.toFixed(1)}%`;
          return `Closed Jobs: ${fmtNum(ctx.raw)}`;
        }}}
      }
    }
  });

  // ---- MoM: last 12 calendar months ending with the current month ----
  const now = new Date();
  const months = [];
  for(let i=11;i>=0;i--){
    const d = new Date(now.getFullYear(), now.getMonth()-i, 1);
    months.push(d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0'));
  }
  const monthCounts = months.map(m=>orders.filter(o=>o.scheduled && o.scheduled.slice(0,7)===m).length);
  const monthGrowth = monthCounts.map((c,i)=> i>0 && monthCounts[i-1]>0 ? ((c-monthCounts[i-1])/monthCounts[i-1]*100) : null);
  const monthLabels = months.map(monthLabel);

  destroyChart('mom');
  charts['mom'] = new Chart(document.getElementById('chartMoM'), {
    data:{
      labels: monthLabels,
      datasets:[
        { type:'bar', label:'Closed Jobs', data:monthCounts, backgroundColor:VIOLET, order:2, yAxisID:'y' },
        { type:'line', label:'MoM %', data:monthGrowth, borderColor:GREEN, backgroundColor:GREEN, tension:0.3, spanGaps:true, order:1, yAxisID:'y1', pointRadius:3 },
      ]
    },
    options:{
      scales:{
        x:{grid:{display:false}, ticks:{font:{size:10}}},
        y:{grid:{color:'#EFEBEE'}, title:{display:true, text:'Closed Jobs'}},
        y1:{position:'right', grid:{display:false}, title:{display:true, text:'MoM %'}, ticks:{callback:v=>v+'%'}}
      },
      plugins:{ legend:{ position:'bottom', labels:{boxWidth:10, padding:12} },
        tooltip:{ callbacks:{ label(ctx){
          if(ctx.dataset.label==='MoM %') return ctx.raw===null ? 'MoM %: —' : `MoM %: ${ctx.raw>=0?'+':''}${ctx.raw.toFixed(1)}%`;
          return `Closed Jobs: ${fmtNum(ctx.raw)}`;
        }}}
      }
    }
  });
}

// ================= STAKEHOLDER REPORT =================
// Fixed periods anchored to the data pull date (not the interactive date filter above).
// D-1 = the last fully complete day the dump covers (day before generation date).
function renderStakeholderReport(){
  const genDateStr = RAW.generatedAt.slice(0,10); // 'YYYY-MM-DD'
  const genDate = new Date(genDateStr+'T00:00:00');
  const d1Date = new Date(genDate); d1Date.setDate(d1Date.getDate()-1);
  const d1 = isoLocal(d1Date);

  const mondayDate = mondayOf(d1Date);
  const wtdStart = isoLocal(mondayDate);
  const mtdStart = d1.slice(0,8)+'01';
  const lastMonthEndDate = new Date(mtdStart+'T00:00:00'); lastMonthEndDate.setDate(lastMonthEndDate.getDate()-1);
  const lastMonthEnd = isoLocal(lastMonthEndDate);
  const lastMonthStart = lastMonthEnd.slice(0,8)+'01';
  const allOrders = ALL_ORDERS.filter(o=>!o.bookingFailed);
  const dataMinAll = allOrders.reduce((m,o)=> (o.scheduled && (!m || o.scheduled<m)) ? o.scheduled : m, null);

  document.getElementById('colD1').textContent = 'D-1 ('+d1Date.toLocaleDateString('en-GB',{day:'2-digit',month:'short'})+')';
  document.getElementById('colWTD').textContent = 'WTD';
  document.getElementById('colMTD').textContent = 'MTD';
  document.getElementById('colLastMonth').textContent = 'Last Month ('+lastMonthEndDate.toLocaleDateString('en-GB',{month:'short'})+')';
  document.getElementById('stakeholderAsOf').textContent = 'As of '+d1Date.toLocaleDateString('en-GB',{day:'2-digit',month:'short',year:'numeric'})+' (last fully complete day in this data pull) · basis: scheduled date';

  function metrics(start, end){
    const sub = allOrders.filter(o=>o.scheduled && o.scheduled>=start && o.scheduled<=end);
    const total = sub.length;
    const closedOrders = sub.filter(o=>o.status==='Closed');
    const completed = closedOrders.length;
    const cancelled = sub.filter(o=>o.status==='Cancelled').length;
    const freelancer = sub.filter(o=>o.provider && o.spModel==='Freelancer').length;
    const franchise = sub.filter(o=>o.provider && (o.spModel==='Hybrid Franchise'||o.spModel==='Dedicated Franchise')).length;
    const darkstore = sub.filter(o=>o.provider && o.spModel==='Dark Store').length;
    const gmvPostNet = closedOrders.reduce((s,o)=>s+o.bill*gstFactor(o),0);
    const beauticiansDelivered = new Set(closedOrders.filter(o=>o.provider).map(o=>o.provider)).size;
    const assignedOrders = sub.filter(o=>o.provider && (o.status==='Closed'||o.status==='Open'));
    const utilProviders = new Set(assignedOrders.map(o=>o.provider));
    const utilization = utilProviders.size ? assignedOrders.length/utilProviders.size : 0;
    return {
      total, completed, cancelled, freelancer, franchise, darkstore,
      compPct: total? completed/total*100 : 0,
      flPct: total? freelancer/total*100 : 0,
      dsPct: total? darkstore/total*100 : 0,
      gmvPost: gmvPostNet,
      aovPost: completed? gmvPostNet/completed : 0,
      beauticiansDelivered, utilization,
    };
  }

  const periods = [
    metrics(d1, d1),
    metrics(wtdStart, d1),
    metrics(mtdStart, d1),
    metrics(lastMonthStart, lastMonthEnd),
    metrics(dataMinAll || d1, d1),
  ];

  const rows = [
    { label:'Scheduled', cells: periods.map(p=>fmtNum(p.total)) },
    { label:'Completed', cells: periods.map(p=>fmtNum(p.completed)) },
    { label:'Cancelled', cells: periods.map(p=>fmtNum(p.cancelled)) },
    { label:'Completion %', cells: periods.map(p=>Math.round(p.compPct)+'%') },
    { label:'Beauticians Delivered', cells: periods.map(p=>fmtNum(p.beauticiansDelivered)) },
    { label:'Utilization', cells: periods.map(p=>p.utilization.toFixed(1)) },
    { label:'GMV (Closed, net of 12.6% GST)', cells: periods.map(p=>fmtINR(p.gmvPost)) },
    { label:'Closed AOV (net of 12.6% GST)', cells: periods.map(p=>fmtINR(p.aovPost)) },
    { label:'Freelancer % Share', cells: periods.map(p=>Math.round(p.flPct)+'%') },
    { label:'Dark Store % Share', cells: periods.map(p=>Math.round(p.dsPct)+'%') },
  ];

  document.getElementById('stakeholderBody').innerHTML = rows.map(r=>`
    <tr class="${r.isTarget?'target-row':''}">
      <td>${r.label}</td>
      ${r.cells.map(c=>`<td class="num">${c}</td>`).join('')}
    </tr>
  `).join('');
}
// ================= HUB LEVEL DATA (real serviceability zones from KML) =================
function pointInPolygon(lat, lng, polygon){
  let inside = false;
  for(let i=0, j=polygon.length-1; i<polygon.length; j=i++){
    const [lat_i, lng_i] = polygon[i];
    const [lat_j, lng_j] = polygon[j];
    if(((lng_i>lng) !== (lng_j>lng)) && (lat < (lat_j-lat_i)*(lng-lng_i)/(lng_j-lng_i)+lat_i)){
      inside = !inside;
    }
  }
  return inside;
}
function findHubZone(lat, lng){
  for(const z of HUB_ZONES){
    if(pointInPolygon(lat, lng, z.polygon)) return z.name;
  }
  return null;
}

// ---- RL Recovery index: for each (phone, RL date), was it recovered? ----
// Rule: a lost request is "recovered" if the customer has a genuine (non-cancelled,
// non-booking-failed) service scheduled in the NEXT 7 DAYS from the RL date (rolling
// window, RL date through RL date+6 inclusive) — but only if no LATER RL entry from
// that same phone exists after that booking. A booking sandwiched between two RL
// entries does not count; only the booking that ends a continuous run of losses
// (nothing after it) counts as a true recovery.
let _rlRecoveryIndex = null;
function buildRlRecoveryIndex(){
  if(_rlRecoveryIndex) return _rlRecoveryIndex;

  const successDatesByPhone = {};
  ALL_ORDERS.forEach(o=>{
    if(o.custMobile && o.scheduled && !o.bookingFailed && o.status!=='Cancelled'){
      (successDatesByPhone[o.custMobile] = successDatesByPhone[o.custMobile]||[]).push(o.scheduled);
    }
  });
  Object.values(successDatesByPhone).forEach(arr=>arr.sort());

  const rlDatesByPhone = {};
  ALL_SLOT_REQUESTS.forEach(r=>{
    if(r.phone && r.date){
      (rlDatesByPhone[r.phone] = rlDatesByPhone[r.phone]||[]).push(r.date);
    }
  });
  Object.values(rlDatesByPhone).forEach(arr=>arr.sort());

  function next7DaysBounds(dateStr){
    const d = new Date(dateStr+'T00:00:00');
    const end = new Date(d); end.setDate(end.getDate()+6);
    return [dateStr, isoLocal(end)];
  }

  const recoveredKeys = new Set();
  ALL_SLOT_REQUESTS.forEach(r=>{
    if(!r.phone || !r.date) return;
    const key = r.phone+'|'+r.date;
    if(recoveredKeys.has(key)) return; // already resolved via another entry on same date
    const [winStart, winEnd] = next7DaysBounds(r.date);
    const successes = (successDatesByPhone[r.phone]||[]).filter(sd => sd>=winStart && sd<=winEnd);
    if(successes.length===0) return; // not recovered
    const allRl = rlDatesByPhone[r.phone]||[];
    for(const matchDate of successes){
      const laterRl = allRl.filter(rd => rd > matchDate);
      if(laterRl.length===0){ recoveredKeys.add(key); break; }
    }
  });

  _rlRecoveryIndex = recoveredKeys;
  return recoveredKeys;
}

function renderHubLevel(orders, bookingFailedOrders, slotRequests){
  window.__lastHubOrders = orders;
  window.__lastHubBookingFailed = bookingFailedOrders;
  window.__lastHubSlotRequests = slotRequests || [];

  // Global (all-time, unfiltered) set of customers who have at least one successful booking anywhere
  const successfulCustIds = new Set();
  const successfulMobiles = new Set();
  ALL_ORDERS.forEach(o=>{
    if(!o.bookingFailed){
      if(o.custId) successfulCustIds.add(o.custId);
      if(o.custMobile) successfulMobiles.add(o.custMobile);
    }
  });

  const byZone = {};
  HUB_ZONES.forEach(z=>{ byZone[z.name] = {scheduled:0, closed:0, cancelled:0, gmv:0, gmvNet:0, discPromo:0, discPromoNet:0, custCounts:{}, bfNoSuccess:0, requestLossPhones:new Set(), recoveredPhones:new Set(), dsClosed:0, dsProviders:new Set(), nonDsClosed:0, nonDsProviders:new Set()}; });
  let unmatched = 0;
  orders.forEach(o=>{
    if(!o.lat || !o.lng) return;
    const zoneName = findHubZone(o.lat, o.lng);
    if(!zoneName){ unmatched++; return; }
    const z = byZone[zoneName];
    z.scheduled++;
    if(o.status==='Closed'){
      const gf = gstFactor(o);
      z.closed++; z.gmv += o.bill; z.gmvNet += o.bill*gf;
      z.discPromo += (o.discount||0)+(o.promoUplift||0);
      z.discPromoNet += ((o.discount||0)+(o.promoUplift||0))*gf;
      if(o.custId){ z.custCounts[o.custId] = (z.custCounts[o.custId]||0)+1; }
      if(o.provider){
        if(o.spModel==='Dark Store'){ z.dsClosed++; z.dsProviders.add(o.provider); }
        else { z.nonDsClosed++; z.nonDsProviders.add(o.provider); }
      }
    }
    if(o.status==='Cancelled') z.cancelled++;
  });
  bookingFailedOrders.forEach(o=>{
    if(!o.lat || !o.lng) return;
    const zoneName = findHubZone(o.lat, o.lng);
    if(!zoneName) return;
    const hasSuccess = (o.custId && successfulCustIds.has(o.custId)) || (o.custMobile && successfulMobiles.has(o.custMobile));
    if(!hasSuccess) byZone[zoneName].bfNoSuccess++;
  });
  const recoveredKeys = buildRlRecoveryIndex();
  (slotRequests||[]).forEach(r=>{
    const z = byZone[r.zone];
    if(!z || !r.phone) return;
    z.requestLossPhones.add(r.phone);
    z.totalSlotRequests = (z.totalSlotRequests||0) + 1;
    if(recoveredKeys.has(r.phone+'|'+r.date)) z.recoveredPhones.add(r.phone);
  });

  const rows = HUB_ZONES.map(z=>{
    const v = byZone[z.name];
    const cancelPct = v.scheduled ? v.cancelled/v.scheduled*100 : 0;
    const gmvPostNet = v.gmvNet;
    const aovPost = v.closed ? gmvPostNet/v.closed : 0;
    const custEntries = Object.values(v.custCounts);
    const repeatCusts = custEntries.filter(n=>n>=2).length;
    const repeatRate = custEntries.length ? repeatCusts/custEntries.length*100 : 0;
    const dsDeliveringCount = v.dsProviders.size;
    const nonDsDeliveringCount = v.nonDsProviders.size;
    const totalDelivering = dsDeliveringCount + nonDsDeliveringCount;
    const dsShare = v.closed ? v.dsClosed/v.closed*100 : 0;
    const nonDsShare = v.closed ? v.nonDsClosed/v.closed*100 : 0;
    const dsUtilRaw = dsDeliveringCount>0 ? v.dsClosed/dsDeliveringCount : null;
    const nonDsUtilRaw = nonDsDeliveringCount>0 ? v.nonDsClosed/nonDsDeliveringCount : null;
    const zoneTag = (PRIMARY_TAGGED && PRIMARY_TAGGED.zones) ? PRIMARY_TAGGED.zones[z.name] : null;
    const primaryTagged = zoneTag ? zoneTag.total : null;
    const util = (primaryTagged!=null && primaryTagged>0) ? v.closed/primaryTagged : null;

    // Real, verified DS/Non-DS headcount split from the beautician-level Primary Zone tagging file
    // (each beautician's own zone tag + their roster type) — not an estimate.
    const dsCount = zoneTag ? zoneTag.ds : null;
    const nonDsCount = zoneTag ? zoneTag.nonDs : null;
    const dsUtil = (dsCount!=null && dsCount>0) ? v.dsClosed/dsCount : null;
    const nonDsUtil = (nonDsCount!=null && nonDsCount>0) ? v.nonDsClosed/nonDsCount : null;
    return { name:z.name, polygon:z.polygon, scheduled:v.scheduled, closed:v.closed, cancelled:v.cancelled, cancelPct, gmvPost:gmvPostNet, aovPost, repeatRate, bfNoSuccess:v.bfNoSuccess, requestLoss:v.requestLossPhones.size, requestLossPct: v.scheduled ? v.requestLossPhones.size/v.scheduled*100 : 0, rlRecovered:v.recoveredPhones.size, rlRecoveredPct: v.requestLossPhones.size ? v.recoveredPhones.size/v.requestLossPhones.size*100 : 0, primaryTagged, util, dsCount, dsShare, dsUtil, nonDsCount, nonDsShare, nonDsUtil };
  });

  const asOfEl = document.getElementById('primaryTaggedAsOf');
  if(asOfEl && PRIMARY_TAGGED && PRIMARY_TAGGED.asOf) asOfEl.textContent = `(Primary Tagged as of ${PRIMARY_TAGGED.asOf})`;


  const sortedRows = rows.slice().sort((a,b)=>b.scheduled-a.scheduled);
  document.getElementById('hubBody').innerHTML = sortedRows.map(r=>`
    <tr>
      <td>${r.name}</td>
      <td class="num">${r.primaryTagged!=null ? fmtNum(r.primaryTagged) : '—'}</td>
      <td class="num">${r.util!=null ? r.util.toFixed(2) : '—'}</td>
      <td class="num">${fmtNum(r.dsCount)}</td>
      <td class="num">${r.dsShare.toFixed(1)}%</td>
      <td class="num">${r.dsUtil!=null ? r.dsUtil.toFixed(2) : '—'}</td>
      <td class="num">${fmtNum(r.nonDsCount)}</td>
      <td class="num">${r.nonDsShare.toFixed(1)}%</td>
      <td class="num">${r.nonDsUtil!=null ? r.nonDsUtil.toFixed(2) : '—'}</td>
      <td class="num">${fmtNum(r.scheduled)}</td>
      <td class="num">${fmtNum(r.closed)}</td>
      <td class="num">${fmtNum(r.cancelled)}</td>
      <td class="num">${r.cancelPct.toFixed(1)}%</td>
      <td class="num">${r.repeatRate.toFixed(1)}%</td>
      <td class="num">${fmtNum(r.bfNoSuccess)}</td>
      <td class="num">${fmtNum(r.requestLoss)}</td>
      <td class="num">${r.requestLossPct.toFixed(1)}%</td>
      <td class="num">${fmtNum(r.rlRecovered)}</td>
      <td class="num">${r.rlRecoveredPct.toFixed(1)}%</td>
      <td class="num">${fmtINR(r.gmvPost)}</td>
      <td class="num">${fmtINR(r.aovPost)}</td>
    </tr>
  `).join('');
}


function renderBeauticians(allOrders){
  const orders = allOrders.filter(o=>o.spModel!=='Test Orders');
  // Utilization — tied to the selected date range
  const assignedOrders = orders.filter(o=>o.provider && (o.status==='Closed'||o.status==='Open'));
  const utilProviders = new Set(assignedOrders.map(o=>o.provider));
  const util = utilProviders.size ? assignedOrders.length/utilProviders.size : 0;
  document.getElementById('k-util').textContent = util.toFixed(1);
  const days = (new Date(filterTo)-new Date(filterFrom))/86400000 + 1;
  const monthlyProjection = utilProviders.size ? (util / days) * 30 : 0;
  document.getElementById('k-util-foot').textContent = 'orders/beautician in range · ≈ ' + monthlyProjection.toFixed(0) + '/month projected';
  const utilPerDay = days ? util/days : 0;
  document.getElementById('k-util-per-day').textContent = utilPerDay.toFixed(2);

  // Utilization by model: Dark Store, Freelancer, Franchisee (Hybrid + Dedicated Franchise combined)
  function utilForModels(modelSet){
    const sub = assignedOrders.filter(o=>modelSet.has(o.spModel));
    const provs = new Set(sub.map(o=>o.provider));
    return provs.size ? sub.length/provs.size : 0;
  }
  const utilDarkStore = utilForModels(new Set(['Dark Store']));
  const utilFreelancer = utilForModels(new Set(['Freelancer']));
  const utilFranchisee = utilForModels(new Set(['Hybrid Franchise','Dedicated Franchise']));
  document.getElementById('k-util-darkstore').textContent = utilDarkStore.toFixed(1);
  document.getElementById('k-util-freelancer').textContent = utilFreelancer.toFixed(1);
  document.getElementById('k-util-franchisee').textContent = utilFranchisee.toFixed(1);

  // Active Beauticians — now tied to the selected date range (delivered ≥1 Closed job in range)
  const activeInRange = new Set(
    orders.filter(o=>o.provider && o.status==='Closed').map(o=>o.provider)
  );
  document.getElementById('k-providers').textContent = fmtNum(activeInRange.size);

  // Avg jobs/day per beautician — Closed (delivered) jobs only, divided by distinct days she delivered ≥1 job in range.
  // Bucketed into 4 cuts of that per-beautician average. Filterable by beautician type, base = All.
  const closedOnly = orders.filter(o=>o.provider && o.status==='Closed');
  window.__avgLoadClosedOnly = closedOnly; // for the type toggle's re-render

  const AVG_LOAD_TYPES = ['All','Freelancer','Dark Store','Hybrid Franchise','Dedicated Franchise'];
  let avgLoadSelectedType = window.__avgLoadSelectedType || 'All';
  window.__avgLoadSelectedType = avgLoadSelectedType;

  const toggleEl = document.getElementById('avgLoadTypeToggle');
  toggleEl.innerHTML = AVG_LOAD_TYPES.map(t=>`<button class="${t===avgLoadSelectedType?'active':''}" data-type="${t}">${t}</button>`).join('');
  toggleEl.querySelectorAll('button').forEach(btn=>{
    btn.onclick = ()=>{
      window.__avgLoadSelectedType = btn.dataset.type;
      renderAvgLoadCuts();
    };
  });
  renderAvgLoadCuts();

  // ---- Attendance lookup (merged into the main beautician table below) ----
  const rangeDays = Math.round((new Date(filterTo)-new Date(filterFrom))/86400000) + 1;
  const daysWorkedByProv = {}; // provider -> Set(dates worked)
  assignedOrders.forEach(o=>{
    daysWorkedByProv[o.provider] = daysWorkedByProv[o.provider] || new Set();
    daysWorkedByProv[o.provider].add(o.scheduled);
  });

  const assigned = orders.filter(o=>o.provider);
  const byProv = {};
  assigned.forEach(o=>{
    byProv[o.provider] = byProv[o.provider] || {total:0, closed:0, cancelled:0, gmv:0, gmvNet:0, discPromo:0, discPromoNet:0, spModel:o.spModel};
    byProv[o.provider].total++;
    if(o.status==='Closed'){
      const gf = gstFactor(o);
      byProv[o.provider].closed++; byProv[o.provider].gmv += o.bill; byProv[o.provider].gmvNet += o.bill*gf;
      byProv[o.provider].discPromo += (o.discount||0)+(o.promoUplift||0);
      byProv[o.provider].discPromoNet += ((o.discount||0)+(o.promoUplift||0))*gf;
    }
    if(o.status==='Cancelled') byProv[o.provider].cancelled++;
  });
  const totalGmv = Object.values(byProv).reduce((s,p)=>s+p.gmv,0);
  const rows = Object.entries(byProv).sort((a,b)=>b[1].gmv-a[1].gmv);

  document.getElementById('beauticianTableBody').innerHTML = rows.map(([name,p])=>{
    const gmvPostNet = p.gmvNet;
    const aov = p.closed ? gmvPostNet/p.closed : 0;
    const share = totalGmv ? (p.gmv/totalGmv*100) : 0;
    const cancelPct = p.total ? (p.cancelled/p.total*100) : 0;
    const cancelFlag = cancelPct > 15;
    const daysWorked = daysWorkedByProv[name] ? daysWorkedByProv[name].size : 0;
    const attendancePct = rangeDays ? daysWorked/rangeDays*100 : 0;
    return `<tr>
      <td>${name}</td>
      <td>${p.spModel}</td>
      <td class="num">${fmtNum(p.total)}</td>
      <td class="num">${fmtNum(p.closed)}</td>
      <td class="num">${fmtNum(p.cancelled)}</td>
      <td class="num" style="${cancelFlag?'color:var(--red); font-weight:700;':''}">${cancelPct.toFixed(1)}%${cancelFlag?' ⚑':''}</td>
      <td class="num">${fmtNum(daysWorked)}</td>
      <td class="num">${fmtNum(rangeDays)}</td>
      <td class="num">${attendancePct.toFixed(1)}%</td>
      <td class="num">${fmtINR(gmvPostNet)}</td>
      <td class="num">${fmtINR(aov)}</td>
      <td><div class="bar-cell"><div class="bar-track"><div class="bar-fill" style="width:${share}%"></div></div><span style="font-family:var(--mono); font-size:11px; min-width:38px; text-align:right;">${share.toFixed(1)}%</span></div></td>
    </tr>`;
  }).join('');

  renderSupplyModel(orders);
}

function renderAvgLoadCuts(){
  const closedOnly = window.__avgLoadClosedOnly || [];
  const selectedType = window.__avgLoadSelectedType || 'All';
  const sub = selectedType==='All' ? closedOnly : closedOnly.filter(o=>o.spModel===selectedType);

  const perProviderClosedDays = {};
  sub.forEach(o=>{
    perProviderClosedDays[o.provider] = perProviderClosedDays[o.provider] || {};
    perProviderClosedDays[o.provider][o.scheduled] = (perProviderClosedDays[o.provider][o.scheduled]||0)+1;
  });
  const avgPerProvider = {};
  Object.entries(perProviderClosedDays).forEach(([prov,dayMap])=>{
    const totalJobs = Object.values(dayMap).reduce((s,v)=>s+v,0);
    const daysActive = Object.keys(dayMap).length;
    avgPerProvider[prov] = daysActive ? totalJobs/daysActive : 0;
  });
  const avgBuckets = [
    { label: '0 – 1', test: v=>v>0 && v<=1 },
    { label: '1 – 2', test: v=>v>1 && v<=2 },
    { label: '2 – 3', test: v=>v>2 && v<=3 },
    { label: '> 3',   test: v=>v>3 },
  ];
  const providerAvgs = Object.values(avgPerProvider);
  const bucketCounts = avgBuckets.map(b=>providerAvgs.filter(b.test).length);
  document.getElementById('k-avgload-0to1').textContent = fmtNum(bucketCounts[0]);
  document.getElementById('k-avgload-0to1-foot').textContent = pct(bucketCounts[0], providerAvgs.length) + ' of beauticians with a delivered job in range';
  document.getElementById('k-avgload-1to2').textContent = fmtNum(bucketCounts[1]);
  document.getElementById('k-avgload-1to2-foot').textContent = pct(bucketCounts[1], providerAvgs.length) + ' of beauticians with a delivered job in range';
  document.getElementById('k-avgload-2to3').textContent = fmtNum(bucketCounts[2]);
  document.getElementById('k-avgload-2to3-foot').textContent = pct(bucketCounts[2], providerAvgs.length) + ' of beauticians with a delivered job in range';
  document.getElementById('k-avgload-3plus').textContent = fmtNum(bucketCounts[3]);
  document.getElementById('k-avgload-3plus-foot').textContent = pct(bucketCounts[3], providerAvgs.length) + ' of beauticians with a delivered job in range';
}

// ---- Supply model snapshots: share of deliveries + full metrics, by SP model (Freelancer / Dark Store / Hybrid Franchise / Dedicated Franchise / Churned) ----
function renderSupplyModel(orders){
  const assigned = orders.filter(o=>o.provider);
  const closed = assigned.filter(o=>o.status==='Closed');

  // Share of deliveries (Closed only)
  const deliveredByModel = {};
  closed.forEach(o=>{ deliveredByModel[o.spModel] = (deliveredByModel[o.spModel]||0)+1; });
  const totalDelivered = closed.length;
  const shareRows = Object.entries(deliveredByModel).sort((a,b)=>b[1]-a[1]);

  const MODEL_COLORS = {
    'Freelancer': VIOLET, 'Dark Store': GREEN, 'Hybrid Franchise': AMBER,
    'Dedicated Franchise': '#5B3270', 'Churned / Unmapped': RED
  };

  const sharePcts = shareRows.map(r => totalDelivered ? (r[1]/totalDelivered*100) : 0);
  const countLabelPlugin = {
    id: 'countLabelPlugin',
    afterDatasetsDraw(chart){
      const {ctx} = chart;
      ctx.save();
      ctx.font = '600 11px Calibri, sans-serif';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = '#161219';
      chart.getDatasetMeta(0).data.forEach((bar,i)=>{
        ctx.textAlign = 'left';
        ctx.fillText(fmtNum(shareRows[i][1]), bar.x + 8, bar.y);
      });
      ctx.restore();
    }
  };

  // Per-model detail stats for click-to-reveal panel
  const modelDetail = {};
  assigned.forEach(o=>{
    modelDetail[o.spModel] = modelDetail[o.spModel] || {scheduled:0, completed:0, providers:new Set()};
    modelDetail[o.spModel].scheduled++;
    modelDetail[o.spModel].providers.add(o.provider);
    if(o.status==='Closed') modelDetail[o.spModel].completed++;
  });

  destroyChart('supplyshare');
  charts['supplyshare'] = new Chart(document.getElementById('chartSupplyShare'), {
    type:'bar',
    data:{
      labels: shareRows.map(r=>r[0]),
      datasets:[{ label:'Share of deliveries', data: sharePcts, backgroundColor: shareRows.map(r=>MODEL_COLORS[r[0]]||'#9B7BAE'), borderRadius:4 }]
    },
    options:{
      indexAxis:'y',
      onClick(evt, elements){
        if(!elements.length) return;
        const idx = elements[0].index;
        const model = shareRows[idx][0];
        const d = modelDetail[model];
        if(!d) return;
        const completedPct = d.scheduled ? d.completed/d.scheduled*100 : 0;
        const util = d.providers.size ? d.scheduled/d.providers.size : 0;
        document.getElementById('supplyShareDetailPanel').style.display = 'block';
        document.getElementById('supplyShareDetailModel').textContent = model;
        document.getElementById('ssd-scheduled').textContent = fmtNum(d.scheduled);
        document.getElementById('ssd-completed').textContent = fmtNum(d.completed);
        document.getElementById('ssd-completed-pct').textContent = completedPct.toFixed(1)+'%';
        document.getElementById('ssd-util').textContent = util.toFixed(1);
      },
      plugins:{
        legend:{display:false},
        tooltip:{ callbacks:{ label(ctx){ const i=ctx.dataIndex; return `${fmtNum(shareRows[i][1])} delivered (${ctx.raw.toFixed(1)}%) · click for detail`; } } }
      },
      scales:{
        x:{grid:{color:'#EFEBEE'}, title:{display:true, text:'Share of deliveries (%)'}, ticks:{callback:v=>v+'%'}, max: sharePcts.length ? Math.max(...sharePcts)*1.2 : 100},
        y:{grid:{display:false}}
      }
    },
    plugins:[countLabelPlugin]
  });

  // Full supply metrics by model (all assigned orders, not just closed)
  const byModel = {};
  assigned.forEach(o=>{
    const m = o.spModel;
    byModel[m] = byModel[m] || {providers:new Set(), total:0, closed:0, cancelled:0, gmv:0, gmvNet:0, discPromo:0, discPromoNet:0};
    byModel[m].providers.add(o.provider);
    byModel[m].total++;
    if(o.status==='Closed'){
      const gf = gstFactor(o);
      byModel[m].closed++; byModel[m].gmv += o.bill; byModel[m].gmvNet += o.bill*gf;
      byModel[m].discPromo += (o.discount||0)+(o.promoUplift||0);
      byModel[m].discPromoNet += ((o.discount||0)+(o.promoUplift||0))*gf;
    }
    if(o.status==='Cancelled') byModel[m].cancelled++;
  });
  const modelRows = Object.entries(byModel).sort((a,b)=>b[1].gmv-a[1].gmv);
  document.getElementById('supplyModelBody').innerHTML = modelRows.map(([model,p])=>{
    const gmvPostNet = p.gmvNet;
    const aov = p.closed ? gmvPostNet/p.closed : 0;
    const util = p.providers.size ? p.total/p.providers.size : 0;
    const cancelPct = p.total ? (p.cancelled/p.total*100) : 0;
    const cancelFlag = cancelPct > 15;
    const deliveryShare = totalDelivered ? (p.closed/totalDelivered*100) : 0;
    return `<tr>
      <td>${model}</td>
      <td class="num">${fmtNum(p.providers.size)}</td>
      <td class="num">${fmtNum(p.total)}</td>
      <td class="num">${fmtNum(p.closed)}</td>
      <td class="num">${deliveryShare.toFixed(1)}%</td>
      <td class="num">${fmtNum(p.cancelled)}</td>
      <td class="num" style="${cancelFlag?'color:var(--red); font-weight:700;':''}">${cancelPct.toFixed(1)}%${cancelFlag?' ⚑':''}</td>
      <td class="num">${fmtINR(gmvPostNet)}</td>
      <td class="num">${fmtINR(aov)}</td>
      <td class="num">${util.toFixed(1)}</td>
    </tr>`;
  }).join('');
}

// ================= CUSTOMERS (all-time, not range-filtered) =================
function renderCustomers(){
  // All-time DELIVERED orders only — Closed status, no booking-failed
  const deliveredOrders = ALL_ORDERS.filter(o=>o.status==='Closed' && !o.bookingFailed);

  const byCust = {};
  deliveredOrders.forEach(o=>{
    const id = o.custId;
    if(!byCust[id]) byCust[id] = {closed:0, gmv:0, name:'', mobile:''};
    byCust[id].closed++;
    byCust[id].gmv += o.bill;
    if(o.custName) byCust[id].name = o.custName;      // keep latest non-empty
    if(o.custMobile) byCust[id].mobile = o.custMobile;
  });
  const custIds = Object.keys(byCust);
  const repeat = custIds.filter(id=>byCust[id].closed>=2);
  const newCust = custIds.filter(id=>byCust[id].closed===1);

  document.getElementById('k-cust-total').textContent = fmtNum(custIds.length);
  document.getElementById('k-cust-repeat').textContent = fmtNum(repeat.length);
  document.getElementById('k-cust-repeat-pct').textContent = pct(repeat.length, custIds.length)+' of customers · 2+ deliveries all-time';
  document.getElementById('k-cust-new').textContent = fmtNum(newCust.length);
  document.getElementById('k-cust-new-pct').textContent = pct(newCust.length, custIds.length)+' of customers · 1 delivery all-time';

  renderRetentionWindows(deliveredOrders);
  renderCohort(deliveredOrders);
  renderRollingRetention(deliveredOrders);
  renderNewRepeat(deliveredOrders);
}

// ---- Retention windows by acquisition month: 60D/90D/120D/180D — % of eligible customers in that cohort who returned within N days of their first delivery ----
function renderRetentionWindows(deliveredOrders){
  const byCustDates = {};
  deliveredOrders.forEach(o=>{
    if(!o.custId || !o.scheduled) return;
    (byCustDates[o.custId] = byCustDates[o.custId] || []).push(o.scheduled.slice(0,10));
  });
  Object.values(byCustDates).forEach(arr=>arr.sort());

  const byMonth = {};
  Object.values(byCustDates).forEach(dates=>{
    const month = dates[0].slice(0,7);
    (byMonth[month] = byMonth[month] || []).push(dates);
  });
  const months = Object.keys(byMonth).sort();

  const today = new Date(todayISO+'T00:00:00');
  const windows = [60, 90, 120, 180];

  const monthLabel = m => {
    const [y,mo] = m.split('-').map(Number);
    return new Date(y, mo-1, 1).toLocaleString('en-US',{month:'short'})+" '"+String(y).slice(2);
  };

  document.getElementById('retentionWindowsBody').innerHTML = months.map(month=>{
    const cohortDates = byMonth[month];
    const cells = windows.map(N=>{
      let eligible = 0, returned = 0;
      cohortDates.forEach(dates=>{
        const first = new Date(dates[0]+'T00:00:00');
        const daysSinceFirst = Math.floor((today - first) / 86400000);
        if(daysSinceFirst < N) return;
        eligible++;
        const hasReturn = dates.slice(1).some(d=>{
          const dt = new Date(d+'T00:00:00');
          const gap = Math.floor((dt - first) / 86400000);
          return gap <= N;
        });
        if(hasReturn) returned++;
      });
      if(eligible===0) return `<td class="num" style="color:var(--muted);">—</td>`;
      const rate = (returned/eligible*100).toFixed(1);
      return `<td class="num">${rate}% (${fmtNum(returned)})</td>`;
    }).join('');
    return `<tr><td>${monthLabel(month)}</td><td class="num">${fmtNum(cohortDates.length)}</td>${cells}</tr>`;
  }).join('');
}

// ---- New vs Repeat delivered customers by month ----
function renderNewRepeat(deliveredOrders){
  // acquisition month per customer = earliest DELIVERY month (Closed orders only)
  const firstMonth = {};
  deliveredOrders.forEach(o=>{
    const m = o.scheduled ? o.scheduled.slice(0,7) : null;
    if(!m) return;
    const id = o.custId;
    if(!firstMonth[id] || m < firstMonth[id]) firstMonth[id] = m;
  });

  // unique CUSTOMERS active (delivered) per scheduled month, split new vs repeat —
  // a customer with multiple deliveries in the same month counts once for that month
  const custMonth = {}; // month -> Set(custId)
  deliveredOrders.forEach(o=>{
    const dm = o.scheduled ? o.scheduled.slice(0,7) : null;
    if(!dm) return;
    custMonth[dm] = custMonth[dm] || new Set();
    custMonth[dm].add(o.custId);
  });
  const byMonth = {}; // month -> {newC, repeatC}
  Object.keys(custMonth).forEach(dm=>{
    byMonth[dm] = {newC:0, repeatC:0};
    custMonth[dm].forEach(custId=>{
      const acq = firstMonth[custId];
      if(acq === dm) byMonth[dm].newC++;    // first delivery month == this month -> new
      else byMonth[dm].repeatC++;
    });
  });
  const months = Object.keys(byMonth).sort();

  const pctInBar = {
    id: 'pctInBar',
    afterDatasetsDraw(chart){
      const {ctx} = chart;

      const totals = chart.data.labels.map((_,i)=>
        chart.data.datasets.reduce((s,ds)=>s+(ds.data[i]||0),0));
      ctx.save();
      ctx.font = '700 11px Calibri, sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = '#fff';
      chart.data.datasets.forEach((ds,di)=>{
        chart.getDatasetMeta(di).data.forEach((bar,i)=>{
          const val = ds.data[i]||0, tot = totals[i]||0;
          if(!tot || !val) return;
          const h = Math.abs(bar.base - bar.y);
          if(h < 16) return;
          ctx.fillText(Math.round(val/tot*100)+'%', bar.x, (bar.y+bar.base)/2);
        });
      });
      ctx.restore();
    }
  };

  destroyChart('newrepeat');
  charts['newrepeat'] = new Chart(document.getElementById('chartNewRepeat'), {
    type:'bar',
    data:{
      labels:months.map(monthLabel),
      datasets:[
        {label:'New', data:months.map(m=>byMonth[m].newC), backgroundColor:VIOLET, stack:'s'},
        {label:'Repeat', data:months.map(m=>byMonth[m].repeatC), backgroundColor:GREEN, stack:'s'},
      ]
    },
    options:{
      responsive:true,
      scales:{ x:{stacked:true, grid:{display:false}}, y:{stacked:true, grid:{color:'#EFEBEE'}, title:{display:true, text:'Delivered customers'}} },
      plugins:{
        legend:{ position:'bottom', labels:{boxWidth:10, padding:12} },
        tooltip:{ callbacks:{ label(ctx){
          const i = ctx.dataIndex;
          const tot = ctx.chart.data.datasets.reduce((s,ds)=>s+(ds.data[i]||0),0);
          const v = ctx.raw||0;
          return `${ctx.dataset.label}: ${fmtNum(v)} (${tot?Math.round(v/tot*100):0}%)`;
        }}}
      }
    },
    plugins:[pctInBar]
  });
}

// ---- Cohort retention: acquisition month (first booking) -> activity in later months ----
function monthOf(iso){ return iso ? iso.slice(0,7) : null; }
function monthLabel(m){
  const [y,mo] = m.split('-');
  const names = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  return names[parseInt(mo,10)-1] + " '" + y.slice(2);
}

function renderCohort(deliveredOrders){
  // acquisition month = earliest created month per customer; activity months = every month they booked
  const firstMonth = {};
  const activeMonths = {}; // custId -> Set(month)
  deliveredOrders.forEach(o=>{
    const m = monthOf(o.scheduled);
    if(!m) return;
    const id = o.custId;
    if(!firstMonth[id] || m < firstMonth[id]) firstMonth[id] = m;
    activeMonths[id] = activeMonths[id] || new Set();
    activeMonths[id].add(m);
  });

  const allMonths = [...new Set(deliveredOrders.map(o=>monthOf(o.scheduled)).filter(Boolean))].sort();

  // cohort -> {size, monthCounts: {month: count}}
  const cohorts = {};
  Object.keys(firstMonth).forEach(id=>{
    const acq = firstMonth[id];
    cohorts[acq] = cohorts[acq] || {size:0, months:{}};
    cohorts[acq].size++;
    activeMonths[id].forEach(m=>{
      if(m >= acq){ cohorts[acq].months[m] = (cohorts[acq].months[m]||0)+1; }
    });
  });

  const cohortMonths = Object.keys(cohorts).sort();

  // header
  const head = document.getElementById('cohortHead');
  head.innerHTML = '<th>Acquisition Cohort</th><th class="num">Customers</th>' +
    allMonths.map(m=>`<th class="num">${monthLabel(m)}</th>`).join('');

  // body
  const body = document.getElementById('cohortBody');
  body.innerHTML = cohortMonths.map(acq=>{
    const c = cohorts[acq];
    const cells = allMonths.map(m=>{
      if(m < acq) return '<td class="num" style="color:var(--line);">—</td>';
      const count = c.months[m] || 0;
      const p = c.size ? (count/c.size*100) : 0;
      const isBase = (m===acq);
      const bg = isBase ? 'var(--violet-soft)' : (count>0 ? `rgba(128,72,154,${(p/100*0.55).toFixed(3)})` : 'transparent');
      const col = (p>55 && !isBase) ? '#fff' : 'var(--ink)';
      const label = count>0 ? `${fmtNum(count)} (${p.toFixed(0)}%)` : '0 (0%)';
      return `<td class="num" style="background:${bg}; color:${col};">${label}</td>`;
    }).join('');
    return `<tr><td style="font-weight:700;">${monthLabel(acq)}</td><td class="num">${fmtNum(c.size)}</td>${cells}</tr>`;
  }).join('');
}

// ================= SORTABLE TABLES (applies to every data table dashboard-wide) =================
function parseCellForSort(text){
  const raw = text.trim();
  if(raw === '' || raw === '—') return { isNum:false, val:'' , empty:true };
  // strip currency, commas, %, flag emoji, star symbols, extra whitespace for numeric detection
  const cleaned = raw.replace(/[₹,%⚑★]/g,'').replace(/\s+/g,' ').trim();
  const num = parseFloat(cleaned);
  // only treat as numeric if the cleaned string is *entirely* numeric (with optional +/-, decimal)
  const isPureNumber = /^-?\d+(\.\d+)?$/.test(cleaned);
  if(isPureNumber && !isNaN(num)) return { isNum:true, val:num, empty:false };
  return { isNum:false, val:raw.toLowerCase(), empty:false };
}

function enableSortableTables(){
  document.querySelectorAll('table').forEach(table=>{
    const tbody = table.querySelector('tbody[id]');
    const headerRow = table.querySelector('thead tr');
    if(!tbody || !headerRow) return;
    if(headerRow.dataset.sortableInit) return; // avoid double-attaching
    headerRow.dataset.sortableInit = '1';

    Array.from(headerRow.children).forEach((th, colIdx)=>{
      if(!th.textContent.trim()) return; // skip blank corner headers
      th.classList.add('sortable');
      const label = th.innerHTML;
      th.innerHTML = label + ' <span class="sort-arrows">▲▼</span>';
      let dir = null; // null -> asc -> desc -> asc ...

      th.addEventListener('click', ()=>{
        const currentTbody = document.getElementById(tbody.id);
        if(!currentTbody) return;
        const rows = Array.from(currentTbody.querySelectorAll('tr'));
        if(!rows.length || rows[0].children.length <= colIdx) return;

        dir = dir === 'asc' ? 'desc' : 'asc';
        headerRow.querySelectorAll('th').forEach(h=>h.classList.remove('sort-asc','sort-desc'));
        th.classList.add(dir==='asc' ? 'sort-asc' : 'sort-desc');

        const parsed = rows.map(row=>({ row, cell: parseCellForSort(row.children[colIdx].textContent) }));
        parsed.sort((a,b)=>{
          if(a.cell.empty && !b.cell.empty) return 1;
          if(b.cell.empty && !a.cell.empty) return -1;
          if(a.cell.isNum && b.cell.isNum){
            return dir==='asc' ? a.cell.val-b.cell.val : b.cell.val-a.cell.val;
          }
          const av = String(a.cell.val), bv = String(b.cell.val);
          return dir==='asc' ? av.localeCompare(bv) : bv.localeCompare(av);
        });
        parsed.forEach(p=>currentTbody.appendChild(p.row));
      });
    });
  });
}

highlightPreset("mtd");
render();
renderRLDeepDive();

// ---- Rolling (chain) retention: each column measured against previous column's active set ----
function renderRollingRetention(deliveredOrders){
  const firstMonth = {};
  const activeMonths = {}; // custId -> Set(month)
  deliveredOrders.forEach(o=>{
    const m = monthOf(o.scheduled);
    if(!m) return;
    const id = o.custId;
    if(!firstMonth[id] || m < firstMonth[id]) firstMonth[id] = m;
    activeMonths[id] = activeMonths[id] || new Set();
    activeMonths[id].add(m);
  });

  const allMonths = [...new Set(deliveredOrders.map(o=>monthOf(o.scheduled)).filter(Boolean))].sort();

  // group customer ids by acquisition cohort
  const cohortCustIds = {};
  Object.keys(firstMonth).forEach(id=>{
    const acq = firstMonth[id];
    cohortCustIds[acq] = cohortCustIds[acq] || [];
    cohortCustIds[acq].push(id);
  });
  const cohortMonths = Object.keys(cohortCustIds).sort();

  const head = document.getElementById('rollingHead');
  head.innerHTML = '<th>Acquisition Cohort</th><th class="num">Customers</th>' +
    allMonths.map(m=>`<th class="num">${monthLabel(m)}</th>`).join('');

  const body = document.getElementById('rollingBody');
  body.innerHTML = cohortMonths.map(acq=>{
    const fullSize = cohortCustIds[acq].length;
    let currentSet = new Set(cohortCustIds[acq]); // everyone starts "active" in their acquisition month
    const cells = allMonths.map(m=>{
      if(m < acq) return '<td class="num" style="color:var(--line);">—</td>';
      if(m === acq){
        return `<td class="num" style="background:var(--violet-soft);">${fmtNum(fullSize)} (100%)</td>`;
      }
      const nextSet = new Set();
      currentSet.forEach(id=>{ if(activeMonths[id] && activeMonths[id].has(m)) nextSet.add(id); });
      currentSet = nextSet;
      const count = nextSet.size;
      const p = fullSize ? (count/fullSize*100) : 0;
      const bg = count>0 ? `rgba(46,139,87,${(p/100*0.55).toFixed(3)})` : 'transparent';
      const col = p>55 ? '#fff' : 'var(--ink)';
      const label = `${fmtNum(count)} (${p.toFixed(0)}%)`;
      return `<td class="num" style="background:${bg}; color:${col};">${label}</td>`;
    }).join('');
    return `<tr><td style="font-weight:700;">${monthLabel(acq)}</td><td class="num">${fmtNum(fullSize)}</td>${cells}</tr>`;
  }).join('');
}

