/* =========================================================
   UI — Cawit (render kartu gulma, hasil, tabel struk)
   ========================================================= */

const svgWrap = (inner, vb = '0 0 64 64') =>
  `<svg viewBox="${vb}" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">${inner}</svg>`;

/* ---- ilustrasi SVG flat gulma ---- */
const WEED_SVG = {
  alang_alang: svgWrap(
    '<g fill="none" stroke="#2f7d32" stroke-width="3.2" stroke-linecap="round">' +
    '<path d="M32 58 C30 44 24 34 18 22"/><path d="M32 58 C34 42 40 34 48 20"/><path d="M32 58 C31 46 27 38 23 30"/><path d="M32 58 C33 44 37 36 43 30"/>' +
    '<path d="M18 22 c-2 -4 4 -6 3 -1"/><path d="M48 20 c1 -4 -5 -6 -3 -1"/></g>' +
    '<path d="M24 20 C24 14 40 14 40 20 C40 26 24 26 24 20 Z" fill="#c8e08c"/><path d="M29 20 L26 10 M35 20 L38 10" stroke="#7ba324" stroke-width="2" stroke-linecap="round"/>'
  ),
  teki: svgWrap(
    '<g fill="none" stroke="#b58900" stroke-width="3.4" stroke-linecap="round">' +
    '<path d="M20 58 C20 44 24 36 25 30"/><path d="M32 58 C32 42 32 34 32 26"/><path d="M44 58 C44 44 40 36 39 30"/></g>' +
    '<path d="M32 12 a6 6 0 1 1 0.1 0" stroke="#7a5c00" stroke-width="3.4" fill="none"/>' +
    '<path d="M32 22 l-3 -4 M32 22 l3 -4 M32 22 l0 -4" stroke="#7a5c00" stroke-width="2.2" stroke-linecap="round"/>'
  ),
  sembung: svgWrap(
    '<path d="M56 6 C40 12 30 22 26 34 C24 41 27 48 33 52" fill="none" stroke="#2e7d32" stroke-width="2.6" stroke-linecap="round"/>' +
    '<path d="M24 30 C30 26 36 32 32 38 C26 42 20 36 24 30 Z" fill="#43a047"/>' +
    '<path d="M34 44 C40 40 46 46 42 52 C36 56 30 50 34 44 Z" fill="#66bb6a"/>' +
    '<path d="M14 54 C19 50 25 56 21 62 C15 66 10 60 14 54 Z" fill="#43a047"/>'
  ),
  babadotan: svgWrap(
    '<path d="M32 58 L32 28" stroke="#3e7a1f" stroke-width="3.6" stroke-linecap="round"/>' +
    '<path d="M32 46 C26 44 22 46 20 48 M32 40 C27 38 23 40 20 42" stroke="#3e7a1f" stroke-width="2.6" fill="none" stroke-linecap="round"/>' +
    '<path d="M32 36 C38 34 42 36 44 38" stroke="#3e7a1f" stroke-width="2.6" fill="none" stroke-linecap="round"/>' +
    '<g fill="#d4a017"><circle cx="20" cy="42" r="4"/><circle cx="32" cy="32" r="4"/><circle cx="44" cy="34" r="4"/><circle cx="24" cy="50" r="3.4"/></g>' +
    '<g fill="#f5e6a8"><circle cx="18.5" cy="40.5" r="1.6"/><circle cx="30.5" cy="30.5" r="1.6"/><circle cx="42.5" cy="32.5" r="1.6"/></g>'
  ),
  kirinyuh: svgWrap(
    '<path d="M32 58 L32 46" stroke="#5d4037" stroke-width="5" stroke-linecap="round"/>' +
    '<path d="M32 50 C22 50 18 46 16 42 M32 50 C42 50 46 46 48 42 M32 42 C34 36 41 34 46 34" stroke="#4a7c1f" stroke-width="3.4" fill="none" stroke-linecap="round"/>' +
    '<ellipse cx="46" cy="35" rx="6" ry="8" fill="#66bb6a" transform="rotate(15 46 35)"/>' +
    '<ellipse cx="16" cy="43" rx="5" ry="7" fill="#43a047" transform="rotate(-12 16 43)"/>' +
    '<path d="M32 42 l-8 0 M32 50 l8 0" stroke="#4a7c1f" stroke-width="3" stroke-linecap="round"/>' +
    '<ellipse cx="30" cy="53" rx="7" ry="6" fill="#66bb6a"/>'
  ),
  anak_kayu: svgWrap(
    '<path d="M32 58 L32 32" stroke="#6d4c41" stroke-width="6" stroke-linecap="round"/>' +
    '<circle cx="32" cy="24" r="13" fill="#43a047"/>' +
    '<circle cx="23" cy="30" r="7" fill="#388e3c"/>' +
    '<circle cx="41" cy="30" r="7" fill="#4caf50"/>' +
    '<path d="M29 58 L24 50 M35 58 L40 50" stroke="#6d4c41" stroke-width="4" stroke-linecap="round"/>'
  ),
  rumput_halus: svgWrap(
    '<g fill="none" stroke="#66a80f" stroke-width="2.8" stroke-linecap="round">' +
    '<path d="M16 58 C14 48 20 40 20 30"/><path d="M24 58 C25 50 24 44 28 34"/><path d="M32 58 C30 48 34 42 34 32"/><path d="M42 58 C40 46 44 40 44 30"/><path d="M50 58 C51 48 48 42 52 34"/></g>' +
    '<path d="M20 30 c-3 -1 -2 -3 1 -2 M34 32 c3 -1 3 -3 0 -2 M44 30 c3 -1 3 -3 0 -2" stroke="#8bc34a" stroke-width="2" fill="none" stroke-linecap="round"/>'
  ),
  pakis: svgWrap(
    '<g fill="none" stroke="#0e8c8c" stroke-width="3" stroke-linecap="round">' +
    '<path d="M20 58 C26 46 30 34 34 22 M34 22 C38 18 44 18 48 22"/>' +
    '<path d="M34 22 C30 18 26 18 22 22"/></g>' +
    '<g stroke="#2fb6a7" stroke-width="2.2" fill="none" stroke-linecap="round">' +
    '<path d="M27 46 l-4 -2 M30 40 l-5 -1 M32 34 l-5 0 M28 52 l-3 -1"/>' +
    '<path d="M41 44 l4 -2 M38 38 l5 -1 M36 32 l5 0 M40 50 l3 -1"/>' +
    '<path d="M27 46 l3 -3 M30 40 l4 -3 M32 34 l4 0 M28 52 l2 -2 M41 44 l-3 -3 M38 38 l-4 -3 M36 32 l-4 0 M40 50 l-2 -2"/>' +
    '</g>'
  ),
  lcc: svgWrap(
    '<path d="M16 54 C24 48 34 48 42 52" fill="none" stroke="#5c7cfa" stroke-width="2.6" stroke-linecap="round"/>' +
    '<path d="M34 44 C28 40 22 44 24 50 C28 54 36 50 34 44 Z" fill="#748ffc" transform="rotate(-10 29 47)"/>' +
    '<path d="M36 44 C36 36 44 36 46 42 C44 48 38 48 36 44 Z" fill="#91a7ff" transform="rotate(12 41 41)"/>' +
    '<circle cx="38" cy="43" r="1.8" fill="#3b5bdb"/>' +
    '<path d="M46 56 C50 52 54 52 55 56 C52 59 48 59 46 56 Z" fill="#748ffc"/>'
  )
};

const BOTTLE_SVG = (color) => svgWrap(
  '<path d="M26 10 h12 v6 h2 v14 l12 14 v18 a2 2 0 0 1 -2 2 H14 a2 2 0 0 1 -2 -2 V44 L24 30 V16 h2 Z" fill="' + color + '"/>' +
  '<rect x="38" y="44" width="8" height="22" fill="rgba(255,255,255,0.45)" rx="2"/>' +
  '<rect x="23" y="6" width="18" height="6" rx="3" fill="' + color + '"/>'
);

const DROP_SVG = (color) => svgWrap(
  '<path d="M32 8 C32 8 14 30 14 42 a18 18 0 0 0 36 0 C50 30 32 8 32 8 Z" fill="' + color + '"/>' +
  '<path d="M26 38 a8 8 0 0 0 6 10" stroke="rgba(255,255,255,0.6)" stroke-width="3" fill="none" stroke-linecap="round"/>'
);

const GROUP_META = {
  rumput_tinggi: { badge: '#2f7d32', iconColor: '#2f7d32' },
  teki: { badge: '#b58900', iconColor: '#b58900' },
  merambat_daun_lebar: { badge: '#e07b00', iconColor: '#43a047' },
  semak: { badge: '#795548', iconColor: '#5d4037' },
  rumput_halus: { badge: '#66a80f', iconColor: '#66a80f' },
  pakis: { badge: '#0e8c8c', iconColor: '#0e8c8c' },
  lcc: { badge: '#5c7cfa', iconColor: '#5c7cfa' }
};

const HERB_COLORS = {
  glifosat: '#2f7d32', metil_metsulfuron: '#0072b8', fluroxypyr: '#c2185b',
  triclopyr: '#6d4c41', sulfosat: '#00838f', glufosinat: '#5e35b1'
};

/* ---------- render daftar gulma ---------- */
function renderWeedCards() {
  const grid = document.getElementById('weedCards');
  grid.innerHTML = '';
  WEEDS.forEach((w) => {
    const g = GROUPS[w.group];
    const meta = GROUP_META[w.group];
    const card = document.createElement('div');
    card.className = 'weed-card';
    card.dataset.id = w.id;
    card.setAttribute('role', 'checkbox');
    card.setAttribute('aria-checked', 'false');
    card.tabIndex = 0;
    card.innerHTML =
      '<div class="ico">' + (WEED_SVG[w.id] || '') + '</div>' +
      '<div class="wname">' + w.label + '</div>' +
      '<div class="wsci">' + w.scientific + '</div>' +
      '<span class="badge" style="background:' + g.color + '">' + g.label + '</span>' +
      '<div class="w-check">✓</div>';
    if (w.id === 'lcc') {
      const tip = document.createElement('div');
      tip.style.cssText = 'font-size:11px;color:#5c7cfa;font-weight:700;margin-top:6px;';
      tip.textContent = '⚠ Bukan untuk disemprot — cukup dipangkas';
      card.appendChild(tip);
    }
    card.addEventListener('click', () => toggleWeed(w.id));
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleWeed(w.id); }
    });
    grid.appendChild(card);
  });
}

function toggleWeed(id) {
  const card = document.querySelector('.weed-card[data-id="' + id + '"]');
  card.classList.toggle('selected');
  card.setAttribute('aria-checked', card.classList.contains('selected') ? 'true' : 'false');
  hideError('weedError');
}

/* ---------- validasi ---------- */
function showError(id, msg) {
  const el = document.getElementById(id);
  el.textContent = msg;
  el.classList.remove('hidden');
}
function hideError(id) { document.getElementById(id).classList.add('hidden'); }

/* ---------- render hasil ---------- */
function fmtL(n, unit) {
  return fmt(n) + ' ' + unit;
}

function herbRowHtml(comp, color) {
  const qtyVal = fmt(comp.qty);
  const pairHtml = comp.hasPair && comp.pairQty != null
    ? '<div class="herb-qty"><div class="h-qty">' + fmt(comp.pairQty) + ' gram</div>' +
      '<div class="h-pack">' + (comp.pairPack ? comp.pairPack.count + ' bungkus ' + fmt(comp.pairPack.size) + ' gr' : '') + '</div></div>'
    : '';
  return (
    '<div class="herb-row">' +
      '<div class="herb-icon" style="background:' + color + '1a">' + BOTTLE_SVG(color) + '</div>' +
      '<div class="herb-info">' +
        '<div class="h-label">' + comp.herb.label + '</div>' +
        '<div class="h-brand">cth: ' + comp.herb.brands + '</div>' +
      '</div>' +
      '<div class="herb-qty"><div class="h-qty">' + qtyVal + ' ' + comp.unit + '</div>' +
        '<div class="h-pack">' + comp.packLabel + '</div></div>' +
      (comp.hasPair ? pairHtml : '') +
    '</div>'
  );
}

function strukTableHtml(rows, title, isAlt) {
  const head = '<div class="struk-head' + (isAlt ? ' alt' : '') + '"><span>⚠ ' + title + '</span></div>';
  const body = '<table><tbody>' +
    rows.map((r) => '<tr><td class="k">' + r.k + '</td><td class="v">' + r.v + '</td></tr>').join('') +
    '</tbody></table>';
  return '<div class="struk">' + head + body + '</div>';
}

function renderResult(result, opts) {
  const area = document.getElementById('resultArea');
  const options = opts || {};
  area.classList.remove('hidden');
  const hs = document.getElementById('historyArea');
  if (hs) hs.classList.add('hidden');
  if (!options.fromHistory) {
    const form = document.getElementById('formCard');
    if (form) form.classList.remove('hidden');
  }

  /* --- kartu LCC saja --- */
  if (result.lccOnly) {
    area.innerHTML =
      '<div class="card"><h2 style="margin-bottom:8px">🌿 Kacang penutup tanah tidak perlu disemprot</h2>' +
      '<p>' + result.note + '</p></div>' + resetBtnHtml();
    return;
  }
  if (result.unknown) {
    area.innerHTML =
      '<div class="card"><h2 style="margin-bottom:8px">Yah, datanya belum tersedia 🙏</h2>' +
      '<p>Data untuk kombinasi gulma ini belum tersedia. Coba pilih jenis gulma lain atau konsultasi ke penyuluh pertanian (PPL) setempat.</p></div>' + resetBtnHtml();
    return;
  }

  if (!options.fromHistory) saveToHistory(result);

  const w = result.water;
  const s = result.sticker;
  const p = result.paint;
  const luasLabel = fmt(result.luas) + ' ha';

  /* kartu rekomendasi utama */
  const mainHerbs = result.main.map((c) => herbRowHtml(c, HERB_COLORS[c.herbId] || '#2f7d32')).join('');

  const pills =
    '<div class="summary-pills">' +
      '<div class="pill"><div class="p-label">💧 Total Air Semprot</div><div class="p-value">' + fmt(w.totalAir) + ' liter</div><div class="p-sub">' + fmt(w.waterMin) + '–' + fmt(w.waterMax) + ' liter per ha</div></div>' +
      '<div class="pill"><div class="p-label">🪣 Tangki Semprot</div><div class="p-value">' + fmt(w.tanks) + ' tangki</div><div class="p-sub">16 liter per tangki gendong</div></div>' +
      '<div class="pill"><div class="p-label">🧴 Perekat (Agristick)</div><div class="p-value">± ' + fmt(s.qty) + ' ml</div><div class="p-sub">' + s.packLabel + ' — dipakai paling akhir</div></div>' +
      '<div class="pill"><div class="p-label">🎨 Pewarna semprot (opsional)</div><div class="p-value">± ' + fmt(p.ml) + ' ml</div><div class="p-sub">agar area yang sudah disemprot terlihat jelas</div></div>' +
    '</div>';

  const buyStrip =
    '<div class="buy-strip"><span class="buy-label">Total Kebutuhan Obat Utama:</span> ' +
    '<span class="buy-value">' + result.mainPackLabel +
    (result.pair && result.pair.pairPack ? ' + ' + result.pair.pairPack.count + ' bungkus ' + fmt(result.pair.pairPack.size) + ' gram' : '') +
    '</span><br><span class="buy-label">Bahan Tambahan (Perekat) ' + s.sticker.label + ':</span> <span class="buy-value">' + s.packLabel + '</span></div>';

  const mainCard =
    '<div class="reco-block">' +
      '<div class="reco-head">🏆 Rekomendasi Utama</div>' +
      '<div class="reco-card">' + mainHerbs + buyStrip + pills + '</div>' +
    '</div>';

  /* kartu alternatif */
  let altHtml = '';
  if (result.alt && result.alt.length) {
    const altHerbs = result.alt.map((c) => herbRowHtml(c, HERB_COLORS[c.herbId] || '#6d4c41')).join('');
    altHtml =
      '<div class="reco-block">' +
        '<div class="reco-head alt">🔄 Alternatif (kalau obat utama tidak ada di kios)</div>' +
        '<div class="reco-card">' + altHerbs +
        '<div class="notes-block" style="margin:0;border:none;border-top:2px dashed #bcd9bd;border-radius:0">' +
          '<p style="font-size:13.5px;color:#4d3f16">Pakai jumlah air semprot yang sama dengan rekomendasi utama. Ikuti takaran di label kemasan masing-masing.</p>' +
        '</div></div>' +
      '</div>';
  }

  /* tabel struk — rekomendasi utama */
  const mainRows = [
    { k: 'Luas Lahan', v: luasLabel },
    { k: 'Jenis Gulma Terpilih', v: result.weedLabels.join(', ') },
    { k: 'Bahan Aktif (Obat Utama)', v: result.main.map((c) => c.herb.label).join(' + ') },
    { k: 'Jumlah Bahan Aktif', v: result.mainQtyLabel + (result.pair && !result.main.find((c)=>c.herbId===result.pair.herbId) ? ' + ' + fmt(result.pair.pairQty) + ' gram' : '') },
    { k: 'Estimasi Kemasan yang Dibeli', v: result.mainPackLabel + (result.pair && result.pair.pairPack ? ' + ' + result.pair.pairPack.count + ' bungkus ' + fmt(result.pair.pairPack.size) + ' gram' : '') },
    { k: 'Takaran Rentang (per ha)', v: result.main.map((c) => c.unit === 'gram' ? c.herb.label + ' ' + fmt(c.rule.doseMin) + '–' + fmt(c.rule.doseMax) + ' gram' : c.herb.label + ' ' + fmt(c.rule.doseMin) + '–' + fmt(c.rule.doseMax) + ' liter').join('; ') },
    { k: 'Bahan Tambahan (Perekat)', v: s.sticker.label + ' (±' + fmt(s.qty) + ' ml)' },
    { k: 'Jumlah Bahan Tambahan', v: s.packLabel },
    { k: 'Jumlah Air Semprot', v: fmt(w.totalAir) + ' liter' },
    { k: 'Jumlah Tangki Semprot (16L)', v: w.tanks + ' tangki' },
    { k: 'Catatan/Peringatan', v: result.notes.slice(0, 4).join(' ') }
  ];

  const strukMain = strukTableHtml(mainRows, '📋 Tabel Ringkasan — Rekomendasi Utama', false);

  /* tabel struk — alternatif */
  let strukAlt = '';
  if (result.alt && result.alt.length) {
    const altRows = [
      { k: 'Bahan Aktif (Alternatif)', v: result.alt.map((c) => c.herb.label).join(' + ') },
      { k: 'Jumlah Bahan Aktif', v: result.altQtyLabel },
      { k: 'Estimasi Kemasan yang Dibeli', v: result.altPackLabel },
      { k: 'Jumlah Air Semprot', v: 'Sama seperti rekomendasi utama (' + fmt(w.totalAir) + ' liter / ' + w.tanks + ' tangki)' },
      { k: 'Catatan/Peringatan', v: 'Obat alternatif dipakai kalau obat utama tidak tersedia di kios. Tetap ikuti takaran di label kemasan.' }
    ];
    strukAlt = strukTableHtml(altRows, '📋 Tabel Ringkasan — Alternatif', true);
  }

  /* catatan keamanan */
  const notesHtml =
    '<div class="notes-block"><h3>⚠️ Catatan &amp; Keamanan untuk Kamu</h3><ul>' +
    result.notes.map((n) => '<li>' + n + '</li>').join('') +
    '</ul></div>';

  /* rentang takaran catatan + info usia sawit */
  const infoLine =
    '<p style="font-size:13.5px;color:var(--muted);margin-top:10px">Umur sawit terpilih: <strong>' +
    (result.age === 'muda' ? AGE.muda.short : AGE.dewasa.short) + '</strong> · Takaran utama memakai nilai tengah — gulma tebal pakai mendekati batas atas, gulma baru tumbuh pakai mendekati batas bawah.</p>';

const actions = '';

  area.innerHTML =
    '<div class="card result-card">' +
      '<div class="result-title"><h2>📄 Hasil Perhitungan Kebutuhan</h2>' +
      '<p>' + luasLabel + ' · ' + result.weedLabels.join(', ') + ' · ' + (result.age === 'muda' ? AGE.muda.short : AGE.dewasa.short) + '</p></div>' +
      mainCard + altHtml + notesHtml + infoLine +
    '</div>' +
    strukMain + strukAlt +
    actions;
}

function resetBtnHtml() { return ''; }

/* ---------- alur utama ---------- */
function handleHitung() {
  const luasRaw = document.getElementById('luas').value.trim().replace(',', '.');
  const luas = Number(luasRaw);
  let ok = true;

  if (luasRaw === '' || isNaN(luas) || luas <= 0) {
    showError('luasError', 'Yuk isi dulu luas lahannya ya — minimal lebih dari 0 hektar 😊');
    ok = false;
  } else {
    hideError('luasError');
  }

  const selected = WEEDS.filter((w) =>
    document.querySelector('.weed-card[data-id="' + w.id + '"]').classList.contains('selected')
  ).map((w) => w.id);

  if (selected.length === 0) {
    showError('weedError', 'Pilih minimal 1 jenis gulma yang ada di kebunmu ya 🌿');
    ok = false;
  } else {
    hideError('weedError');
  }

  const ageEl = document.querySelector('input[name="age"]:checked');
  if (!ageEl) {
    showError('ageError', 'Pilih dulu umur sawitmu: muda atau sudah berbuah 😊');
    ok = false;
  } else {
    hideError('ageError');
  }

  if (!ok) return;

  const result = calculate(luas, selected, ageEl.value);
  renderResult(result);
  const rArea = document.getElementById('resultArea');
  rArea.scrollIntoView({ behavior: 'smooth', block: 'start' });
  window.scrollTo({ top: rArea.offsetTop - 10, behavior: 'smooth' });
}

function resetForm() {
  hideHistory();
  document.getElementById('luas').value = '';
  document.querySelectorAll('.weed-card.selected').forEach((c) => {
    c.classList.remove('selected');
    c.setAttribute('aria-checked', 'false');
  });
  const ageEl = document.querySelector('input[name="age"]:checked');
  if (ageEl) ageEl.checked = false;
  ['luasError', 'weedError', 'ageError'].forEach(hideError);
  const area = document.getElementById('resultArea');
  area.classList.add('hidden');
  area.innerHTML = '';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', () => {
  renderWeedCards();
  document.getElementById('hitungBtn').addEventListener('click', () => {
    document.querySelectorAll('input[name="age"]').forEach((r) => r.addEventListener('change', () => hideError('ageError')));
    handleHitung();
  });
  document.getElementById('luas').addEventListener('input', () => hideError('luasError'));
});

/* ---------- burger menu ---------- */
function toggleDrawer(force) {
  const drawer = document.getElementById('drawer');
  const overlay = document.getElementById('drawerOverlay');
  const btn = document.getElementById('burgerBtn');
  const open = force === undefined ? !drawer.classList.contains('open') : force;
  drawer.classList.toggle('open', open);
  overlay.classList.toggle('hidden', !open);
  btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  drawer.setAttribute('aria-hidden', open ? 'false' : 'true');
}

function scrollToCalc() {
  toggleDrawer(false);
  hideHistory();
  document.getElementById('formCard').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

document.addEventListener('click', (e) => {
  if (e.target.closest('#burgerBtn')) { toggleDrawer(); return; }
  if (e.target.closest('#drawerOverlay')) { toggleDrawer(false); return; }
  if (e.target.closest('[data-action=calc]')) { scrollToCalc(); return; }
  if (e.target.closest('[data-action=history]')) {
    toggleDrawer(false);
    showHistory();
  }
});

/* ---------- riwayat perhitungan (localStorage) ---------- */
const HISTORY_KEY = 'cawit_riwayat_v1';
const HISTORY_MAX = 30;

function getHistory() {
  try { return JSON.parse(localStorage.getItem(HISTORY_KEY)) || []; } catch (e) { return []; }
}
function persistHistory(list) {
  try { localStorage.setItem(HISTORY_KEY, JSON.stringify(list)); } catch (e) {}
}
function saveToHistory(result) {
  const list = getHistory();
  const entry = {
    id: Date.now(),
    tanggal: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' }),
    luas: result.luas,
    luasLabel: fmt(result.luas) + ' ha',
    weedLabels: result.weedLabels,
    ageLabel: result.age === 'muda' ? AGE.muda.short : AGE.dewasa.short,
    herbLabels: result.main.map((c) => c.herb.label).join(' + '),
    qtyLabel: result.mainQtyLabel,
    result: result
  };
  list.unshift(entry);
  if (list.length > HISTORY_MAX) list.length = HISTORY_MAX;
  persistHistory(list);
}
function deleteHistory(id) {
  persistHistory(getHistory().filter((e) => e.id !== id));
}
function clearHistory() {
  persistHistory([]);
}

function hideHistory() {
  const hs = document.getElementById('historyArea');
  if (hs) { hs.classList.add('hidden'); hs.innerHTML = ''; }
  const form = document.getElementById('formCard');
  if (form) form.classList.remove('hidden');
  const res = document.getElementById('resultArea');
  if (res) res.classList.remove('hidden');
}

function showHistory() {
  const form = document.getElementById('formCard');
  const res = document.getElementById('resultArea');
  if (form) form.classList.add('hidden');
  if (res) res.classList.add('hidden');

  const list = getHistory();
  const hs = document.getElementById('historyArea');
  hs.classList.remove('hidden');

  let body;
  if (list.length === 0) {
    body = '<div class="hist-empty"><span class="he-ico">🕘</span>Belum ada riwayat perhitungan.<br>Coba hitung kebutuhan obat semprotmu dulu.</div>';
  } else {
    body = list.map((en) =>
      '<article class="hist-item">' +
        '<div class="hist-top"><span class="hist-date">🕐 ' + en.tanggal + '</span><span class="hist-count" style="font-size:12px;color:var(--muted)">' + en.luasLabel + '</span></div>' +
        '<div class="hist-main">' + en.herbLabels + '</div>' +
        '<div class="hist-sub">' + en.weedLabels.join(', ') + ' · ' + en.ageLabel + ' · ' + en.qtyLabel + '</div>' +
        '<div class="hist-actions">' +
          '<button class="hist-btn lihat" data-rid="' + en.id + '">Lihat Hasil</button>' +
          '<button class="hist-btn hapus" data-rid="' + en.id + '" data-del="1">Hapus</button>' +
        '</div>' +
      '</article>'
    ).join('');
  }

  hs.innerHTML =
    '<section class="card">' +
      '<div class="history-head">' +
        '<h2>🕘 Riwayat Perhitungan</h2>' +
        '<span class="history-count">' + list.length + ' entri</span>' +
      '</div>' +
      body +
      '<div class="btn-row">' +
        '<button class="btn-ghost" onclick="scrollToCalc()">📐 Kembali ke Perhitungan</button>' +
        (list.length ? '<button class="btn-ghost" style="color:#b3261e;border-color:#f5c6c0" onclick="hapusSemua()">Hapus Semua</button>' : '') +
      '</div>' +
    '</section>';

  hs.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function hapusSemua() {
  if (!window.confirm('Hapus semua riwayat perhitungan?')) return;
  clearHistory();
  showHistory();
}

document.addEventListener('click', function (e) {
  const lihat = e.target.closest('.hist-btn.lihat');
  const hapus = e.target.closest('.hist-btn.hapus');
  if (lihat) {
    const id = Number(lihat.dataset.rid);
    const en = getHistory().find((x) => x.id === id);
    if (en) {
      const hs = document.getElementById('historyArea');
      hs.classList.add('hidden');
      hs.innerHTML = '';
      renderResult(en.result, { fromHistory: true });
      const rArea = document.getElementById('resultArea');
      rArea.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  } else if (hapus) {
    deleteHistory(Number(hapus.dataset.rid));
    showHistory();
  }
});