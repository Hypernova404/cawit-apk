/* =========================================================
   DATA & MESIN PERHITUNGAN — Cawitku
   (data gulma, obat, perekat & logika hitung; tanpa DOM)
   ========================================================= */

const GROUPS = {
  rumput_tinggi: { label: 'Rumput tinggi', color: '#2f7d32', bg: '#e8f5e9' },
  teki: { label: 'Teki-tekian', color: '#b58900', bg: '#fdf6e3' },
  merambat_daun_lebar: { label: 'Gulma merambat & daun lebar', color: '#e07b00', bg: '#fdeee0' },
  semak: { label: 'Semak berkayu', color: '#795548', bg: '#efe7e3' },
  rumput_halus: { label: 'Rumput halus (ringan)', color: '#66a80f', bg: '#f1f7e3' },
  pakis: { label: 'Pakis-pakisan', color: '#0e8c8c', bg: '#e0f5f5' },
  lcc: { label: 'Tanaman penutup tanah', color: '#5c7cfa', bg: '#ebeffc' }
};

const WEEDS = [
  { id: 'alang_alang', label: 'Alang-alang / Ilalang', scientific: 'Imperata cylindrica', group: 'rumput_tinggi',
    why: 'Akarnya dalam, susah dicabut manual, bikin sawit kalah rebutan makanan, buah sawit bisa berkurang banyak' },
  { id: 'teki', label: 'Rumput teki', scientific: 'Cyperus rotundus', group: 'teki',
    why: 'Punya umbi di dalam tanah, kalau dicabut suka tumbuh lagi, sangat umum di kebun sawit' },
  { id: 'sembung', label: 'Sembung rambat', scientific: 'Mikania micrantha', group: 'merambat_daun_lebar',
    why: 'Tumbuh sangat cepat, melilit pohon sawit, buah sawit bisa turun sampai 20% — paling sering dikeluhkan petani' },
  { id: 'babadotan', label: 'Babadotan', scientific: 'Ageratum conyzoides', group: 'merambat_daun_lebar',
    why: 'Sangat umum di kebun sawit, cepat menyebar lewat biji' },
  { id: 'kirinyuh', label: 'Kirinyuh / putihan', scientific: 'Chromolaena odorata', group: 'semak',
    why: 'Tumbuh tinggi dan cepat menutupi area kebun, batangnya mengayu dan susah dicabut manual' },
  { id: 'anak_kayu', label: 'Anak kayu (pohon liar kecil)', scientific: 'berbagai pohon muda liar', group: 'semak',
    why: 'Tumbuh liar dan ikut rebutan makanan dengan sawit' },
  { id: 'rumput_halus', label: 'Rumput biasa / rumput halus', scientific: 'Paspalum conjugatum, Axonopus compressus', group: 'rumput_halus',
    why: 'Tidak terlalu mengganggu, bisa jadi penutup tanah, tapi tetap dipangkas rutin jangan terlalu lebat' },
  { id: 'pakis', label: 'Pakis-pakisan', scientific: 'Nephrolepis biserrata, Dicranopteris linearis', group: 'pakis',
    why: 'Biasa tumbuh di tempat lembap/ternaungi, tidak berbahaya kalau tidak berlebihan' },
  { id: 'lcc', label: 'Kacang-kacangan penutup tanah', scientific: 'Calopogonium mucunoides, Mucuna bracteata', group: 'lcc',
    why: 'Sengaja ditanam/dibiarkan untuk menjaga kelembapan tanah & menekan gulma lain — JANGAN disemprot, cukup dipangkas kalau mulai naik ke batang sawit' }
];

/* Kemasan pasaran, satuan dasar: liter (cair) / gram (serbuk) */
const HERBS = {
  glifosat: {
    id: 'glifosat', label: 'Glifosat', brands: 'Roundup, Kenfosat',
    unit: 'liter', unitShort: 'liter', packs: [0.1, 0.25, 0.5, 1, 5],
    note: 'Bekerja lewat daun, meresap sampai akar. Jangan sampai kena daun/batang sawit karena bisa ikut mati. Hasil baru terlihat 5–10 hari setelah semprot.'
  },
  metil_metsulfuron: {
    id: 'metil_metsulfuron', label: 'Metil Metsulfuron', brands: 'Erpon, Ally, Meta Prima',
    unit: 'gram', unitShort: 'gram', packs: [6, 10, 30, 70, 100, 500, 1000],
    note: 'Sangat kuat walau sedikit, jangan berlebihan takarannya. Larutkan sampai benar-benar rata sebelum disemprotkan.'
  },
  fluroxypyr: {
    id: 'fluroxypyr', label: 'Fluroxypyr', brands: 'Starane',
    unit: 'liter', unitShort: 'liter', packs: [0.1, 0.25, 0.5, 1, 5],
    note: 'Paling efektif untuk gulma merambat. Tetap hindari kena sawit muda langsung.'
  },
  triclopyr: {
    id: 'triclopyr', label: 'Triclopyr', brands: 'Garlon',
    unit: 'liter', unitShort: 'liter', packs: [0.1, 0.25, 0.5, 1, 5],
    note: 'Cocok untuk gulma berkayu yang susah dicabut manual. Untuk semak yang masih muda/kecil, Metil Metsulfuron dosis tinggi juga bisa jadi alternatif.'
  },
  sulfosat: {
    id: 'sulfosat', label: 'Sulfosat (Amonium Sulfosat)', brands: 'Touchdown, Sunfosat',
    unit: 'liter', unitShort: 'liter', packs: [0.1, 0.25, 0.5, 1, 5],
    note: 'Cara kerja mirip glifosat (sistemik sampai akar). Jadi alternatif kalau glifosat sedang tidak tersedia di kios.'
  },
  glufosinat: {
    id: 'glufosinat', label: 'Amonium Glufosinat', brands: 'Basta, Finale',
    unit: 'liter', unitShort: 'liter', packs: [0.1, 0.25, 0.5, 1, 5],
    note: 'Kerja kontak, cepat terlihat hasilnya (1–3 hari) tapi akar gulma tahunan bisa tumbuh lagi. Risikonya lebih terkendali dipakai dekat pokok sawit dibanding bahan kontak lain.'
  }
};

const STICKERS = {
  agristick: { label: 'Agristick', doseMin: 0.25, doseMax: 0.5, unit: 'ml per liter air',
    note: 'Bikin obat semprot lebih nempel & merata di daun gulma, tidak gampang luntur kalau kena embun/hujan ringan.' },
  durastic: { label: 'Durastic', doseMin: 4, doseMax: 6, unit: 'ml per liter air',
    note: 'Perekat & perata untuk obat semprot.' },
  sanvit: { label: 'Sanvit', doseMin: 1, doseMax: 2, unit: 'ml per liter air',
    note: 'Perekat, bikin semprotan lebih merata.' },
  silikon: { label: 'Perekat Silikon (Break Thru, Silwet)', doseMin: 0.1, doseMax: 0.2, unit: 'ml per liter air',
    note: 'Untuk daun yang sangat licin/berlilin (misalnya alang-alang tua), bikin obat menempel maksimal.' },
  pewarna: { label: 'Pewarna Semprot (Blue Marker, Signal Marker)', perTankMin: 20, perTankMax: 30, tankLitres: 15, unit: 'ml per tangki',
    note: 'Bukan perekat — pewarna agar area yang sudah disemprot terlihat jelas, supaya tidak disemprot dobel atau ada yang kelewat.' }
};

const AGE = {
  muda: { label: 'Sawit Muda (baru tanam s/d ±3–4 tahun, belum berbuah)', short: 'Sawit Muda' },
  dewasa: { label: 'Sawit Dewasa (sudah berbuah)', short: 'Sawit Dewasa' }
};

const TANK_LITRES = 16;

/* ---------- utilitas ---------- */

function mid(a, b) { return (a + b) / 2; }

/* bersihkan noise float (±3 desimal), tanpa pembulatan hitungan */
function exact(n) {
  return Math.round(n * 1000) / 1000;
}

function fmt(n) {
  const r = exact(n);
  const s = (Math.round(r * 100) / 100).toString();
  const [int, dec] = s.split('.');
  const withSep = int.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  return dec ? withSep + ',' + dec : withSep;
}

/* Rencana beli: pilih ukuran kemasan yang paling pas (sedikit sisa, wajar jumlahnya) */
function packPlan(qty, packsAsc) {
  const need = qty;
  const cands = packsAsc.filter((s) => s > 0).map((s) => {
    const n = Math.max(1, Math.ceil(need / s));
    return { s, n, over: n * s - need, ratio: (n * s - need) / need };
  });
  let ok = cands.filter((c) => c.ratio <= 0.5);
  if (!ok.length) ok = cands;
  ok.sort((a, b) => a.n - b.n || a.over - b.over || a.s - b.s);
  const b = ok[0];
  return { size: b.s, count: b.n };
}

function packDesc(plan, unitShort) {
  const count = plan.count;
  if (unitShort === 'gram') {
    return count + ' bungkus ' + fmt(Math.round(plan.size)) + ' gram';
  }
  if (plan.size >= 1) return count + ' jerigen ' + fmt(plan.size) + ' liter';
  return count + ' botol ' + fmt(Math.round(plan.size * 1000)) + ' ml';
}

/* ---------- aturan rekomendasi (Bagian 2.2) ---------- */

/*
  Skenario tetap (dosis per hektar — nilai tengah dipakai untuk hitungan utama):
  { herbId, doseMin, doseMax, waterMin, waterMax }
*/
const SINGLE_RULES = {
  alang_alang: [
    { herbId: 'glifosat', doseMin: 4, doseMax: 6, waterMin: 300, waterMax: 500, thickNote: true }
  ],
  teki: [
    { herbId: 'glifosat', doseMin: 4, doseMax: 6, waterMin: 300, waterMax: 500, thickNote: true }
  ],
  sembung: [
    { herbId: 'fluroxypyr', doseMin: 0.5, doseMax: 1, waterMin: 300, waterMax: 400 }
  ],
  babadotan: [
    { herbId: 'metil_metsulfuron', doseMin: 15, doseMax: 75, waterMin: 300, waterMax: 500 }
  ],
  kirinyuh: [
    { herbId: 'triclopyr', doseMin: 1, doseMax: 2, waterMin: 300, waterMax: 500 }
  ],
  anak_kayu: [
    { herbId: 'triclopyr', doseMin: 1, doseMax: 2, waterMin: 300, waterMax: 500 }
  ],
  rumput_halus: [
    { herbId: 'glifosat', doseMin: 2, doseMax: 3, waterMin: 300, waterMax: 500, lightNote: true }
  ],
  pakis: [
    { herbId: 'metil_metsulfuron', doseMin: 75, doseMax: 85, waterMin: 300, waterMax: 500, thickNote: true }
  ]
};

const ALT_RULES = {
  alang_alang: [{ herbId: 'sulfosat', doseMin: 3, doseMax: 5, waterMin: 300, waterMax: 500 }],
  teki: [{ herbId: 'metil_metsulfuron', doseMin: 15, doseMax: 75, waterMin: 300, waterMax: 500 }],
  sembung: [{ herbId: 'glifosat', doseMin: 4, doseMax: 6, waterMin: 300, waterMax: 500 }],
  babadotan: [{ herbId: 'glifosat', doseMin: 2.7, doseMax: 2.7, waterMin: 300, waterMax: 500, mixPair: 'metil_metsulfuron', pairDoseMin: 67, pairDoseMax: 67 }],
  kirinyuh: [{ herbId: 'metil_metsulfuron', doseMin: 75, doseMax: 85, waterMin: 300, waterMax: 500 }],
  anak_kayu: [{ herbId: 'metil_metsulfuron', doseMin: 75, doseMax: 85, waterMin: 300, waterMax: 500 }],
  rumput_halus: [],
  pakis: [{ herbId: 'glifosat', doseMin: 4, doseMax: 6, waterMin: 300, waterMax: 500 }]
};

const MIX_RULES = [
  { herbId: 'glifosat', doseMin: 2.7, doseMax: 2.7, waterMin: 300, waterMax: 500, mixPair: 'metil_metsulfuron', pairDoseMin: 67, pairDoseMax: 67 },
  { herbId: 'metil_metsulfuron', doseMin: 67, doseMax: 67, waterMin: 300, waterMax: 500 }
];

const MIX_ALT = {
  sembung: [{ herbId: 'fluroxypyr', doseMin: 0.5, doseMax: 1, waterMin: 300, waterMax: 400 }],
  semak: [{ herbId: 'triclopyr', doseMin: 1, doseMax: 2, waterMin: 300, waterMax: 500 }]
};

/* ---------- mesin utama ---------- */

function recommend(selectedIds) {
  const real = selectedIds.filter((id) => id !== 'lcc');
  const hasLcc = selectedIds.includes('lcc');
  const lccOnly = hasLcc && real.length === 0;
  if (lccOnly) return { lccOnly: true, hasLcc };

  let main = [], alt = [];
  if (real.length === 1) {
    const wid = real[0];
    const rule = SINGLE_RULES[wid] || null;
    if (!rule) return { unknown: true, hasLcc };
    main = rule;
    alt = ALT_RULES[wid] || [];
  } else {
    main = MIX_RULES;
    const hasSem = real.includes('sembung');
    const hasSemak = real.some((id) => id === 'kirinyuh' || id === 'anak_kayu');
    if (hasSem) alt = MIX_ALT.sembung;
    else if (hasSemak) alt = MIX_ALT.semak;
  }
  return { main, alt, hasLcc, weeds: real };
}

/* Komponen rencana: { herbId, qty, qtyMin, qtyMax, unit, pack, packLabel, kind: 'main'|'pair' } */
function componentPlan(rule, luas) {
  const herb = HERBS[rule.herbId];
  const dMid = mid(rule.doseMin, rule.doseMax);
  const qty = exact(dMid * luas);
  const unit = herb.unit;
  const pack = packPlan(qty, herb.packs);
  const pairDose = rule.mixPair ? mid(rule.pairDoseMin, rule.pairDoseMax) : 0;
  return {
    herbId: rule.herbId,
    herb,
    rule,
    qty,
    qtyMin: exact(rule.doseMin * luas),
    qtyMax: exact(rule.doseMax * luas),
    unit,
    pack,
    packLabel: packDesc(pack, unit),
    hasPair: !!rule.mixPair && !!rule.pairDoseMin,
    pairHerbId: rule.mixPair || null,
    pairQty: rule.mixPair ? exact(pairDose * luas) : null,
    pairPack: rule.mixPair ? packPlan(exact(pairDose * luas), HERBS[rule.mixPair].packs) : null
  };
}

function waterPlan(rules, luas) {
  const wMid = mid(rules[0].waterMin, rules[0].waterMax);
  const totalAir = exact(wMid * luas);
  const tanks = Math.ceil(totalAir / TANK_LITRES);
  return { wMid, waterMin: rules[0].waterMin, waterMax: rules[0].waterMax, totalAir, tanks };
}

function stickerPlan(totalAir) {
  const s = STICKERS.agristick;
  const dose = mid(s.doseMin, s.doseMax);
  const qty = exact(dose * totalAir); /* ml */
  const pack = packPlan(qty / 1000, [0.05, 0.1, 0.25, 0.5, 1, 5]);
  return { sticker: s, qty, dose, pack, packLabel: packDesc(pack, 'liter') };
}

function paintPlan(totalAir, tanks) {
  const s = STICKERS.pewarna;
  const mL = exact(mid(s.perTankMin, s.perTankMax) * tanks);
  return { sticker: s, ml: mL, tanks };
}

function buildSafetyNotes(main, alt, age, weeds, hasLcc) {
  const notes = [];
  notes.push('Semprot saat pagi (setelah embun hilang) atau sore hari, dan jangan saat hujan/angin kencang.');
  notes.push('Pakai sarung tangan, masker, baju lengan panjang, dan sepatu saat menyemprot.');
  if (age === 'muda') {
    notes.push('SAWIT MUDA: jauhkan semprotan dari batang dan daun sawit — kena sedikit saja bisa bikin sawit muda mati atau lambat tumbuh. Pakai sungkup/corong pelindung kalau ada.');
    notes.push('Semprot hati-hati ke bagian pangkal gulma, jangan ke arah tajuk sawit muda.');
  }
  if (age === 'dewasa') notes.push('Sawit sudah berbuah: tetap jangan sampai semprotan kena daun & buah sawit.');
  const ids = new Set([...main, ...alt].map((r) => r.herbId));
  if (ids.has('glifosat')) notes.push('Glifosat: jangan sampai kena daun/batang sawit (bisa ikut mati). Hasil baru terlihat 5–10 hari setelah semprot — sabar, jangan buru-buru semprot ulang.');
  if (ids.has('metil_metsulfuron')) notes.push('Metil Metsulfuron: sangat kuat walau sedikit — jangan menambah takaran seenaknya. Larutkan sampai rata dulu sebelum dipakai.');
  if (ids.has('fluroxypyr')) notes.push('Fluroxypyr (Starane): paling pas untuk sembung rambat, tapi hindari kena sawit muda langsung.');
  if (ids.has('triclopyr')) notes.push('Triclopyr (Garlon): untuk semak berkayu; untuk anakan yang masih kecil pakai dosis lebih rendah.');
  if (ids.has('glufosinat')) notes.push('Glufosinat (Basta/Finale): kerja kontak, hasil cepat (1–3 hari) tapi akar gulma bisa tumbuh lagi — pantau dan semprot ulang kalau perlu.');
  if (main.some((r) => r.thickNote)) notes.push('Gulma yang sudah tebal/lebat: pakai takaran mendekati batas maksimum paduan. Gulma yang masih jarang: cukup takaran mendekati minimum.');
  if (main.some((r) => r.lightNote)) notes.push('Gulma ringan: takaran rendah sudah cukup, tidak perlu memaksakan dosis penuh.');
  if (weeds.includes('alang_alang')) notes.push('Alang-alang: campurkan sedikit perekat silikon (Break Thru/Silwet) supaya menempel di daun yang licin.');
  if (hasLcc) notes.push('Kacang-kacangan penutup tanah yang terpilih TIDAK ikut dihitung/disarankan semprot — cukup dipangkas manual kalau mulai naik ke batang sawit.');
  return notes;
}

function calculate(luas, selectedIds, age) {
  const res = recommend(selectedIds);
  if (res.lccOnly) {
    return {
      lccOnly: true,
      note: 'Kacang-kacangan penutup tanah biasanya sengaja dipelihara, bukan dibasmi — cukup dipangkas kalau mulai naik ke batang sawit.'
    };
  }
  if (res.unknown) {
    return { unknown: true };
  }
  const out = { luas, age, weeds: res.weeds, hasLcc: res.hasLcc, main: [], alt: [] };

  const wPlan = waterPlan(res.main, luas);
  out.water = wPlan;

  const mainIds0 = res.main.map((r) => r.herbId);
  out.main = res.main.map((rule) => {
    const c = componentPlan(rule, luas);
    if (rule.mixPair && mainIds0.includes(rule.mixPair)) c.hasPair = false;
    return c;
  });

  const mainMixPair = out.main.find((c) => c.hasPair);
  const mainIds = out.main.map((c) => c.herbId);
  out.pair = (mainMixPair && !mainIds.includes(mainMixPair.pairHerbId)) ? mainMixPair : null;

  /* jumlah bahan aktif di tabel: gabung semua komponen utama */
  const parts = out.main.map((c) => {
    const v = fmt(c.qty);
    if (c.unit === 'gram') return `${v} gram`;
    return `${v} liter`;
  });
  out.mainQtyLabel = parts.join(' + ');
  const packParts = out.main.map((c) => c.packLabel);
  out.mainPackLabel = packParts.join(' + ');

  out.sticker = stickerPlan(out.water.totalAir);
  out.paint = paintPlan(out.water.totalAir, out.water.tanks);
  out.notes = buildSafetyNotes(res.main, res.alt, age, res.weeds, res.hasLcc);

  if (res.alt.length > 0) {
    out.alt = res.alt.map((rule) => componentPlan(rule, luas));
    const aParts = out.alt.map((c) => `${fmt(c.qty)} ${c.unit === 'gram' ? 'gram' : 'liter'}`);
    out.altQtyLabel = aParts.join(' + ');
    const aPackParts = out.alt.map((c) => c.packLabel);
    out.altPackLabel = aPackParts.join(' + ');
  }

  out.weedLabels = res.weeds.map((id) => WEEDS.find((w) => w.id === id).label);
  return out;
}

if (typeof module !== 'undefined') module.exports = { GROUPS, WEEDS, HERBS, STICKERS, AGE, calculate, packPlan, packDesc, fmt, mid, TANK_LITRES };