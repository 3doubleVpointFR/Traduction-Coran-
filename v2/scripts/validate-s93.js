// Validation Pipeline Sourate 93
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

let errors = 0;
let warnings = 0;

function err(msg) { errors++; console.log(`  ❌ ${msg}`); }
function warn(msg) { warnings++; console.log(`  ⚠️  ${msg}`); }
function ok(msg) { console.log(`  ✅ ${msg}`); }

async function validate() {
  console.log('=== VALIDATION SOURATE 93 ===\n');

  // 1. Check all 11 verses have verse_analyses
  console.log('--- 1. Vérification verse_analyses ---');
  const { data: va } = await sb.from('verse_analyses').select('verse_id, segments, translation_explanation, full_translation, translation_arab, verses!inner(verse_num)')
    .eq('verses.surah_id', 93).order('verses(verse_num)');

  if (!va || va.length === 0) { err('Aucune verse_analyses pour sourate 93'); return; }
  if (va.length === 11) ok(`${va.length} verse_analyses trouvées (11/11)`);
  else err(`${va.length} verse_analyses trouvées (attendu: 11)`);

  for (const v of va) {
    const vn = v.verses.verse_num;
    if (!v.segments) err(`v${vn}: pas de segments`);
    if (!v.translation_explanation) err(`v${vn}: pas de translation_explanation`);
    if (!v.full_translation) warn(`v${vn}: pas de full_translation`);

    if (v.segments) {
      const segs = typeof v.segments === 'string' ? JSON.parse(v.segments) : v.segments;
      for (const seg of segs) {
        if (seg.position === undefined || seg.position === null) err(`v${vn}: segment "${seg.fr}" sans position`);
        if (!seg.is_particle && !seg.sense_retenu) err(`v${vn}: segment "${seg.fr}" (${seg.word_key}) sans sense_retenu`);
      }
    }

    if (v.translation_explanation) {
      const te = v.translation_explanation;
      if (!te.includes('§DEMARCHE§')) err(`v${vn}: translation_explanation sans §DEMARCHE§`);
      if (!te.includes('§JUSTIFICATION§')) err(`v${vn}: translation_explanation sans §JUSTIFICATION§`);
      if (!te.includes('§CRITIQUE§')) err(`v${vn}: translation_explanation sans §CRITIQUE§`);
      if (/\bconcept\b/i.test(te)) warn(`v${vn}: le mot "concept" apparaît dans translation_explanation`);
    }
  }

  // 2. Check verse_word_analyses
  console.log('\n--- 2. Vérification verse_word_analyses ---');
  const { data: vwa, count: vwaCount } = await sb.from('verse_word_analyses')
    .select('*, verses!inner(verse_num, surah_id)', { count: 'exact' })
    .eq('verses.surah_id', 93)
    .order('verses(verse_num)');

  ok(`${vwaCount} verse_word_analyses trouvées`);

  const byVerse = {};
  for (const w of vwa) {
    const vn = w.verses.verse_num;
    if (!byVerse[vn]) byVerse[vn] = [];
    byVerse[vn].push(w);
  }

  // Expected VWA counts per verse
  const expectedVWA = { 1: 1, 2: 2, 3: 3, 4: 3, 5: 3, 6: 3, 7: 3, 8: 3, 9: 2, 10: 2, 11: 3 };
  for (let vn = 1; vn <= 11; vn++) {
    const words = byVerse[vn] || [];
    if (words.length === 0) { err(`v${vn}: aucun VWA`); continue; }
    if (words.length !== expectedVWA[vn]) warn(`v${vn}: ${words.length} VWA (attendu: ${expectedVWA[vn]})`);

    for (const w of words) {
      if (!w.analysis_axes) { err(`v${vn} ${w.word_key}: pas d'analysis_axes`); continue; }
      const axes = typeof w.analysis_axes === 'string' ? JSON.parse(w.analysis_axes) : w.analysis_axes;

      if (!axes.sense_chosen) err(`v${vn} ${w.word_key}: pas de sense_chosen dans axes`);
      if (!axes.concept_chosen) err(`v${vn} ${w.word_key}: pas de concept_chosen dans axes`);
      if (!axes.concepts) { err(`v${vn} ${w.word_key}: pas de concepts dans axes`); continue; }

      let hasRetenu = false;
      for (const [cname, cdata] of Object.entries(axes.concepts)) {
        if (!cdata.status) err(`v${vn} ${w.word_key}: concept "${cname}" sans status`);
        if (!cdata.senses || cdata.senses.length === 0) err(`v${vn} ${w.word_key}: concept "${cname}" sans senses`);
        if (!cdata.proof_ctx) err(`v${vn} ${w.word_key}: concept "${cname}" sans proof_ctx`);

        if (cdata.status === 'retenu') {
          hasRetenu = true;
          if (!cdata.axe1_verset) err(`v${vn} ${w.word_key}: concept retenu "${cname}" sans axe1_verset`);
          if (!cdata.axe2_voisins) err(`v${vn} ${w.word_key}: concept retenu "${cname}" sans axe2_voisins`);
          if (!cdata.axe3_sourate) err(`v${vn} ${w.word_key}: concept retenu "${cname}" sans axe3_sourate`);
          if (!cdata.axe4_coherence) err(`v${vn} ${w.word_key}: concept retenu "${cname}" sans axe4_coherence`);
          if (!cdata.axe5_frequence) err(`v${vn} ${w.word_key}: concept retenu "${cname}" sans axe5_frequence`);

          for (const axeName of ['axe1_verset', 'axe2_voisins', 'axe3_sourate', 'axe4_coherence', 'axe5_frequence']) {
            if (cdata[axeName] && cdata[axeName].length < 100) {
              warn(`v${vn} ${w.word_key}: ${axeName} trop court (${cdata[axeName].length} chars)`);
            }
          }
        }

        if (cdata.status === 'probable') {
          if (!cdata.axe1_verset) warn(`v${vn} ${w.word_key}: concept probable "${cname}" sans axe1_verset`);
        }

        // Check no Arabic in axes
        for (const key of ['axe1_verset', 'axe2_voisins', 'axe3_sourate', 'axe4_coherence', 'axe5_frequence', 'proof_ctx']) {
          if (cdata[key] && /[\u0600-\u06FF]/.test(cdata[key])) {
            err(`v${vn} ${w.word_key}: arabe trouvé dans ${key} du concept "${cname}"`);
          }
        }

        // Check no English in axes
        for (const key of ['axe1_verset', 'axe2_voisins', 'axe3_sourate', 'axe4_coherence', 'axe5_frequence']) {
          if (cdata[key] && /\b(the|and|of|that|which|with|from|this|but|not|are|was|for|have|has|been|its|his|her)\b/i.test(cdata[key])) {
            warn(`v${vn} ${w.word_key}: mots anglais possibles dans ${key} du concept "${cname}"`);
          }
        }
      }

      if (!hasRetenu) err(`v${vn} ${w.word_key}: aucun concept retenu`);
      if (w.position === undefined || w.position === null) err(`v${vn} ${w.word_key}: pas de position`);
    }
  }

  // 3. Check concepts vs word_meanings
  console.log('\n--- 3. Vérification concepts vs word_meanings ---');
  const wordKeys = [...new Set(vwa.map(w => w.word_key))];

  // Map step1 word_keys to real analysis_ids for checking
  const realIds = {
    dhw: 2138,  // dhuh
    wde: 1799,  // wdae for v3
    xyr: 727,   // khyr
    etw: 2040,  // ety
    hdv: 1649   // hdth
  };

  for (const wk of wordKeys) {
    const realId = realIds[wk];
    let aid;

    if (realId) {
      aid = realId;
    } else {
      const { data: waData } = await sb.from('word_analyses').select('id').eq('word_key', wk).limit(1);
      if (!waData || waData.length === 0) { warn(`${wk}: pas de word_analyses`); continue; }
      aid = waData[0].id;
    }

    const { data: wmData } = await sb.from('word_meanings').select('concept').eq('analysis_id', aid).not('concept', 'is', null);
    if (!wmData || wmData.length === 0) { warn(`${wk} (id=${aid}): pas de concepts dans word_meanings`); continue; }

    const dbConcepts = new Set(wmData.map(m => m.concept));

    const vwaForKey = vwa.filter(w => w.word_key === wk);
    for (const w of vwaForKey) {
      const axes = typeof w.analysis_axes === 'string' ? JSON.parse(w.analysis_axes) : w.analysis_axes;
      if (axes.concept_chosen && !dbConcepts.has(axes.concept_chosen)) {
        err(`v${w.verses.verse_num} ${wk}: concept_chosen "${axes.concept_chosen}" n'existe pas dans word_meanings (id=${aid})`);
      }
    }

    ok(`${wk} (id=${aid}): concepts OK — ${[...dbConcepts].join(', ')}`);
  }

  // 4. Check no anthropomorphism
  console.log('\n--- 4. Vérification pas d\'anthropomorphisme ---');
  const anthropoTerms = ['main de Dieu', 'visage de Dieu', 'oeil de Dieu', 'trone de Dieu', 'Dieu ressent', 'Dieu eprouve'];
  for (const v of va) {
    if (!v.translation_explanation) continue;
    for (const term of anthropoTerms) {
      if (v.translation_explanation.toLowerCase().includes(term.toLowerCase())) {
        err(`v${v.verses.verse_num}: anthropomorphisme possible: "${term}"`);
      }
    }
  }
  ok('Pas d\'anthropomorphisme détecté');

  // 5. Check no interpretation
  console.log('\n--- 5. Vérification pas d\'interprétation ---');
  const interpoTerms = ['cela signifie que', 'le sens cache', 'l\'intention divine', 'Dieu veut dire'];
  for (const v of va) {
    if (!v.translation_explanation) continue;
    for (const term of interpoTerms) {
      if (v.translation_explanation.toLowerCase().includes(term.toLowerCase())) {
        warn(`v${v.verses.verse_num}: interprétation possible: "${term}"`);
      }
    }
  }

  // 6. Check daily phrases
  console.log('\n--- 6. Vérification phrases quotidiennes ---');
  const rootIds = {
    dhuh: 2138, lyl: 528, sjw: 2619, wdae: 1799, rbb: 253, qly: 1872,
    axr: 292, khyr: 727, awl: 337, ety: 2040, rdw: 812, wjd: 700,
    ytm: 664, awy: 755, dll: 268, hdy: 261, eyl: 2039, gny: 2584,
    qhr: 1727, sal: 739, nhr: 397, nem: 264, hdth: 1649
  };
  for (const [wk, aid] of Object.entries(rootIds)) {
    const { count } = await sb.from('word_daily').select('*', { count: 'exact', head: true }).eq('analysis_id', aid);
    if (count === 0) warn(`${wk} (id=${aid}): pas de phrases quotidiennes`);
    else ok(`${wk}: ${count} phrases`);
  }

  // 7. Check no "concept" word in user-facing text
  console.log('\n--- 7. Vérification pas de jargon technique ---');
  const jargonTerms = ['pipeline', 'concept'];
  for (const v of va) {
    const vn = v.verses.verse_num;
    if (!v.translation_explanation) continue;
    for (const term of jargonTerms) {
      const regex = new RegExp('\\b' + term + '\\b', 'i');
      if (regex.test(v.translation_explanation)) {
        warn(`v${vn}: jargon "${term}" dans translation_explanation`);
      }
    }
  }

  // Summary
  console.log('\n========================================');
  console.log(`RÉSULTAT: ${errors} erreurs, ${warnings} avertissements`);
  if (errors === 0) {
    console.log('✅ VALIDATION RÉUSSIE');
  } else {
    console.log('❌ VALIDATION ÉCHOUÉE — corriger les erreurs');
  }
  console.log('========================================');

  // Print full translation overview
  console.log('\n=== TRADUCTIONS COMPLÈTES SOURATE 93 ===');
  for (const v of va) {
    const vn = v.verses.verse_num;
    if (v.segments) {
      const segs = typeof v.segments === 'string' ? JSON.parse(v.segments) : v.segments;
      const tr = segs.map(s => s.fr).join(' ');
      console.log(`v${vn}: ${tr}`);
    } else {
      console.log(`v${vn}: ${v.full_translation || '(pas de traduction)'}`);
    }
  }
}

validate().catch(console.error);
