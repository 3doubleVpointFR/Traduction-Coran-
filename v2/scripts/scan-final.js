const {createClient} = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

(async () => {
  let allData = [];
  for (let start = 8; start <= 293; start += 50) {
    const end = Math.min(start + 49, 293);
    const {data} = await supabase.from('verse_analyses')
      .select('id, verse_id, full_translation, translation_explanation, segments')
      .gte('verse_id', start).lte('verse_id', end);
    if (data) allData = allData.concat(data);
  }

  let issues = [];
  const forbidden = ['Allah','châtiment','Pardonneur','Djibril','associateur','associateurs','mécréant','mécréants','infidèle','infidèles','polythéiste','polythéistes','miséricordieux','idolâtre','couvrant-pardonnant'];
  const elisions = ["d'Dieu","qu'Dieu","l'Dieu"];

  for (const v of allData) {
    const vn = v.verse_id - 7;
    const texts = [
      {src: 'TRAD', txt: v.full_translation || ''},
      {src: 'EXPL', txt: v.translation_explanation || ''}
    ];

    for (const t of texts) {
      for (const fw of forbidden) {
        const escaped = fw.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const re = new RegExp('\\b' + escaped + '\\b', 'gi');
        if (re.test(t.txt)) issues.push('V' + vn + ' ' + t.src + ': ' + fw);
      }
      for (const el of elisions) {
        if (t.txt.includes(el)) issues.push('V' + vn + ' ' + t.src + ': elision ' + el);
      }
      if (/un rétribution/i.test(t.txt)) issues.push('V' + vn + ' ' + t.src + ': genre un retribution');
      if (/\bcraignez\b/i.test(t.txt)) issues.push('V' + vn + ' ' + t.src + ': craignez');
      if (/\bcraigne\b/i.test(t.txt)) issues.push('V' + vn + ' ' + t.src + ': craigne');
    }

    // Segments
    let segs;
    try { segs = typeof v.segments === 'string' ? JSON.parse(v.segments) : v.segments; } catch(e) { continue; }
    if (!segs || !Array.isArray(segs)) continue;
    for (let i = 0; i < segs.length; i++) {
      const fields = [segs[i].fr, segs[i].sense_retenu].filter(Boolean).map(String);
      for (const f of fields) {
        for (const fw of forbidden) {
          if (f.toLowerCase().includes(fw.toLowerCase())) {
            issues.push('V' + vn + ' seg[' + i + ']: ' + fw);
          }
        }
        for (const el of elisions) {
          if (f.includes(el)) issues.push('V' + vn + ' seg[' + i + ']: elision ' + el);
        }
      }
    }

    // Structure
    const expl = v.translation_explanation || '';
    if (expl.length > 50) {
      if (!expl.includes('DEMARCHE') && !expl.includes('DÉMARCHE')) issues.push('V' + vn + ': manque DEMARCHE');
      if (!expl.includes('JUSTIFICATION')) issues.push('V' + vn + ': manque JUSTIFICATION');
      if (!expl.includes('CRITIQUE')) issues.push('V' + vn + ': manque CRITIQUE');
    }
  }

  // VWA
  let offset = 0;
  while (true) {
    const {data} = await supabase.from('verse_word_analyses')
      .select('id, verse_id, sense_chosen')
      .gte('verse_id', 8).lte('verse_id', 293)
      .range(offset, offset + 999);
    if (!data || data.length === 0) break;
    for (const w of data) {
      const sc = (w.sense_chosen || '').toString();
      for (const fw of forbidden) {
        if (sc.toLowerCase().includes(fw.toLowerCase())) {
          issues.push('V' + (w.verse_id - 7) + ' VWA: ' + fw);
        }
      }
    }
    offset += 1000;
    if (data.length < 1000) break;
  }

  console.log('=== SCAN ULTRA-COMPLET FINAL ===');
  console.log('286 versets: trad + expl + segments + VWA');
  console.log('Issues:', issues.length);
  issues.forEach(i => console.log(' X', i));
  if (!issues.length) console.log(' ZERO PROBLEME sur 286 versets');
})();
