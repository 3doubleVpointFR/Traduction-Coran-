// Validation Pipeline Sourate 90 (v1-10)
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

let errors = 0;
let warnings = 0;

function err(msg) { errors++; console.log(`  ❌ ${msg}`); }
function warn(msg) { warnings++; console.log(`  ⚠️  ${msg}`); }
function ok(msg) { console.log(`  ✅ ${msg}`); }

async function validate() {
  console.log('=== VALIDATION SOURATE 90 (v1-10) ===\n');

  // 1. Check verse_analyses with segments
  console.log('--- 1. Vérification verse_analyses ---');
  const { data: va } = await sb.from('verse_analyses').select('verse_id, segments, translation_explanation, translation_arab, full_translation, verses!inner(verse_num, surah_id)')
    .eq('verses.surah_id', 90).gte('verses.verse_num', 1).lte('verses.verse_num', 10).order('verses(verse_num)');

  if (!va || va.length === 0) { err('Aucune verse_analyses pour sourate 90 v1-10'); return; }
  if (va.length === 10) ok(`${va.length} verse_analyses trouvées (10/10)`);
  else err(`${va.length} verse_analyses trouvées (attendu: 10)`);

  for (const v of va) {
    const vn = v.verses.verse_num;
    if (!v.segments) err(`v${vn}: pas de segments`);
    if (!v.translation_explanation) err(`v${vn}: pas de translation_explanation`);
    if (!v.full_translation) warn(`v${vn}: pas de full_translation (Hamidullah)`);

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
  const verseIds = va.map(v => v.verse_id);
  const { data: vwa } = await sb.from('verse_word_analyses').select('*').in('verse_id', verseIds);

  ok(`${(vwa||[]).length} verse_word_analyses trouvées`);

  // Map verse_id to verse_num
  const vidToVnum = {};
  for (const v of va) vidToVnum[v.verse_id] = v.verses.verse_num;

  for (const w of vwa || []) {
    const vn = vidToVnum[w.verse_id];
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
        for (const axeName of ['axe1_verset', 'axe2_voisins', 'axe3_sourate', 'axe4_coherence', 'axe5_frequence']) {
          if (!cdata[axeName]) err(`v${vn} ${w.word_key}: concept retenu "${cname}" sans ${axeName}`);
          else if (cdata[axeName].length < 100) warn(`v${vn} ${w.word_key}: ${axeName} trop court (${cdata[axeName].length} chars)`);
        }
      }

      if (cdata.status === 'probable' || cdata.status === 'peu_probable') {
        for (const axeName of ['axe1_verset', 'axe2_voisins', 'axe3_sourate', 'axe4_coherence', 'axe5_frequence']) {
          if (!cdata[axeName]) err(`v${vn} ${w.word_key}: concept ${cdata.status} "${cname}" sans ${axeName}`);
          else if (cdata[axeName].length < 80) warn(`v${vn} ${w.word_key}: ${axeName} court (${cdata[axeName].length} chars) pour "${cname}"`);
        }
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

  // 3. Check concepts vs word_meanings
  console.log('\n--- 3. Vérification concepts vs word_meanings ---');
  const wordKeys = [...new Set((vwa||[]).map(w => w.word_key))];

  for (const wk of wordKeys) {
    const { data: waData } = await sb.from('word_analyses').select('id').eq('word_key', wk).limit(1);
    if (!waData || waData.length === 0) { err(`${wk}: pas de word_analyses`); continue; }
    const aid = waData[0].id;

    const { data: wmData } = await sb.from('word_meanings').select('concept').eq('analysis_id', aid);
    const dbConcepts = new Set((wmData||[]).filter(m => m.concept).map(m => m.concept));

    if (dbConcepts.size === 0) { err(`${wk} (id=${aid}): aucun concept dans word_meanings`); continue; }

    const vwaForKey = (vwa||[]).filter(w => w.word_key === wk);
    let conceptOk = true;
    for (const w of vwaForKey) {
      const axes = typeof w.analysis_axes === 'string' ? JSON.parse(w.analysis_axes) : w.analysis_axes;
      if (axes.concept_chosen && !dbConcepts.has(axes.concept_chosen)) {
        err(`v${vidToVnum[w.verse_id]} ${wk}: concept_chosen "${axes.concept_chosen}" n'existe pas dans word_meanings (id=${aid}). Concepts DB: ${[...dbConcepts].join(', ')}`);
        conceptOk = false;
      }
    }

    if (conceptOk) ok(`${wk} (id=${aid}): concepts OK`);
  }

  // 4. Check no anthropomorphism
  console.log('\n--- 4. Vérification pas d\'anthropomorphisme ---');
  const anthropoTerms = ['main de Dieu', 'visage de Dieu', 'oeil de Dieu', 'trone de Dieu', 'Dieu ressent', 'Dieu eprouve', 'colère de Dieu'];
  let anthropoFound = false;
  for (const v of va) {
    if (!v.translation_explanation) continue;
    for (const term of anthropoTerms) {
      if (v.translation_explanation.toLowerCase().includes(term.toLowerCase())) {
        err(`v${v.verses.verse_num}: anthropomorphisme possible: "${term}"`);
        anthropoFound = true;
      }
    }
  }
  if (!anthropoFound) ok('Pas d\'anthropomorphisme détecté');

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

  // 6. Check daily phrases for all roots used
  console.log('\n--- 6. Vérification phrases quotidiennes ---');
  const rootIds = {
    qsm: 1433, bld: 793, hll: 939, wld: 2576, xlq: 344, Ans: 2630,
    kbd: 2626, hsb: 996, qdr: 373, whd: 578, qwl: 307, hlk: 982,
    mwl: 1148, lbd: 2627, ray: 552, jel: 359, eyn: 590, lsn: 1298,
    shfh: 2629, hdy: 261, njd: 2628
  };
  for (const [wk, aid] of Object.entries(rootIds)) {
    const { count } = await sb.from('word_daily').select('*', { count: 'exact', head: true }).eq('analysis_id', aid);
    if (count === 0) err(`${wk} (id=${aid}): pas de phrases quotidiennes`);
    else ok(`${wk}: ${count} phrases`);
  }

  // 7. Check jargon
  console.log('\n--- 7. Vérification pas de jargon technique ---');
  for (const v of va) {
    const vn = v.verses.verse_num;
    if (!v.translation_explanation) continue;
    if (/\bconcept\b/i.test(v.translation_explanation)) warn(`v${vn}: jargon "concept" dans translation_explanation`);
    if (/\bpipeline\b/i.test(v.translation_explanation)) err(`v${vn}: jargon "pipeline" dans translation_explanation`);
  }

  // Also check VWA proof_ctx for jargon
  for (const w of vwa || []) {
    const vn = vidToVnum[w.verse_id];
    const axes = typeof w.analysis_axes === 'string' ? JSON.parse(w.analysis_axes) : w.analysis_axes;
    if (!axes.concepts) continue;
    for (const [cname, cdata] of Object.entries(axes.concepts)) {
      if (cdata.proof_ctx && /\bconcept\b/i.test(cdata.proof_ctx)) {
        warn(`v${vn} ${w.word_key}: jargon "concept" dans proof_ctx de "${cname}"`);
      }
      for (const axeName of ['axe1_verset', 'axe2_voisins', 'axe3_sourate', 'axe4_coherence', 'axe5_frequence']) {
        if (cdata[axeName] && /\bconcept\b/i.test(cdata[axeName])) {
          warn(`v${vn} ${w.word_key}: jargon "concept" dans ${axeName} de "${cname}"`);
        }
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
  console.log('\n=== TRADUCTIONS COMPLÈTES SOURATE 90 (v1-10) ===');
  for (const v of va) {
    const vn = v.verses.verse_num;
    if (v.segments) {
      const segs = typeof v.segments === 'string' ? JSON.parse(v.segments) : v.segments;
      const tr = segs.map(s => s.fr).join(' ');
      console.log(`v${vn}: ${tr}`);
    } else {
      console.log(`v${vn}: ${v.translation_arab || v.full_translation || '(pas de traduction)'}`);
    }
  }
}

validate().catch(console.error);
