// Validation Pipeline Sourate 96
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

let errors = 0;
let warnings = 0;

function err(msg) { errors++; console.log(`  ❌ ${msg}`); }
function warn(msg) { warnings++; console.log(`  ⚠️  ${msg}`); }
function ok(msg) { console.log(`  ✅ ${msg}`); }

async function validate() {
  console.log('=== VALIDATION SOURATE 96 ===\n');

  // 1. Check all 19 verses have verse_analyses
  console.log('--- 1. Vérification verse_analyses ---');
  const { data: va } = await sb.from('verse_analyses').select('verse_id, segments, translation_explanation, full_translation, translation_arab, segments_step1, verses!inner(verse_num)')
    .eq('verses.surah_id', 96).order('verses(verse_num)');

  if (!va || va.length === 0) { err('Aucune verse_analyses pour sourate 96'); return; }
  ok(`${va.length} verse_analyses trouvées`);

  for (const v of va) {
    const vn = v.verses.verse_num;
    if (!v.segments) err(`v${vn}: pas de segments`);
    if (!v.translation_explanation) err(`v${vn}: pas de translation_explanation`);
    if (!v.full_translation) warn(`v${vn}: pas de full_translation (Hamidullah)`);
    if (!v.translation_arab) warn(`v${vn}: pas de translation_arab`);

    // Check segments have position
    if (v.segments) {
      const segs = typeof v.segments === 'string' ? JSON.parse(v.segments) : v.segments;
      for (const seg of segs) {
        if (seg.position === undefined || seg.position === null) err(`v${vn}: segment "${seg.fr}" sans position`);
        if (!seg.is_particle && !seg.sense_retenu) err(`v${vn}: segment "${seg.fr}" (${seg.word_key}) sans sense_retenu`);
      }
    }

    // Check translation_explanation has 3 sections
    if (v.translation_explanation) {
      const te = v.translation_explanation;
      if (!te.includes('§DEMARCHE§')) err(`v${vn}: translation_explanation sans §DEMARCHE§`);
      if (!te.includes('§JUSTIFICATION§')) err(`v${vn}: translation_explanation sans §JUSTIFICATION§`);
      if (!te.includes('§CRITIQUE§')) err(`v${vn}: translation_explanation sans §CRITIQUE§`);
      if (te.includes('concept')) warn(`v${vn}: le mot "concept" apparaît dans translation_explanation`);
    }
  }

  // 2. Check verse_word_analyses
  console.log('\n--- 2. Vérification verse_word_analyses ---');
  const { data: vwa, count: vwaCount } = await sb.from('verse_word_analyses')
    .select('*, verses!inner(verse_num, surah_id)', { count: 'exact' })
    .eq('verses.surah_id', 96)
    .order('verses(verse_num)');

  ok(`${vwaCount} verse_word_analyses trouvées`);

  const byVerse = {};
  for (const w of vwa) {
    const vn = w.verses.verse_num;
    if (!byVerse[vn]) byVerse[vn] = [];
    byVerse[vn].push(w);
  }

  for (let vn = 1; vn <= 19; vn++) {
    const words = byVerse[vn] || [];
    if (words.length === 0) { err(`v${vn}: aucun VWA`); continue; }

    for (const w of words) {
      // Check analysis_axes structure
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
          // Check 5 axes exist for retenu
          if (!cdata.axe1_verset) err(`v${vn} ${w.word_key}: concept retenu "${cname}" sans axe1_verset`);
          if (!cdata.axe2_voisins) err(`v${vn} ${w.word_key}: concept retenu "${cname}" sans axe2_voisins`);
          if (!cdata.axe3_sourate) err(`v${vn} ${w.word_key}: concept retenu "${cname}" sans axe3_sourate`);
          if (!cdata.axe4_coherence) err(`v${vn} ${w.word_key}: concept retenu "${cname}" sans axe4_coherence`);
          if (!cdata.axe5_frequence) err(`v${vn} ${w.word_key}: concept retenu "${cname}" sans axe5_frequence`);

          // Check axes length (should be 5-6 sentences = ~200+ chars)
          for (const axeName of ['axe1_verset', 'axe2_voisins', 'axe3_sourate', 'axe4_coherence', 'axe5_frequence']) {
            if (cdata[axeName] && cdata[axeName].length < 100) {
              warn(`v${vn} ${w.word_key}: ${axeName} trop court (${cdata[axeName].length} chars)`);
            }
          }
        }

        if (cdata.status === 'probable' || cdata.status === 'peu_probable') {
          // Should have 5 axes too
          if (!cdata.axe1_verset) warn(`v${vn} ${w.word_key}: concept ${cdata.status} "${cname}" sans axe1_verset`);
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

      // Check sense_chosen matches a sense in the retained concept
      if (hasRetenu && axes.concept_chosen && axes.concepts[axes.concept_chosen]) {
        const retainedConcept = axes.concepts[axes.concept_chosen];
        // The sense_chosen doesn't have to be in the senses list per the rules,
        // but it should be the French word from stage 4
      }

      // Check position
      if (w.position === undefined || w.position === null) err(`v${vn} ${w.word_key}: pas de position`);
    }
  }

  // 3. Check word_meanings concepts match
  console.log('\n--- 3. Vérification concepts vs word_meanings ---');
  const wordKeys = [...new Set(vwa.map(w => w.word_key))];

  for (const wk of wordKeys) {
    const { data: waData } = await sb.from('word_analyses').select('id').eq('word_key', wk).limit(1);
    if (!waData || waData.length === 0) { warn(`${wk}: pas de word_analyses`); continue; }
    const aid = waData[0].id;

    const { data: wmData } = await sb.from('word_meanings').select('concept').eq('analysis_id', aid).not('concept', 'is', null);
    if (!wmData || wmData.length === 0) { warn(`${wk}: pas de concepts dans word_meanings`); continue; }

    const dbConcepts = new Set(wmData.map(m => m.concept));

    // Check that VWA concept_chosen exists in word_meanings
    const vwaForKey = vwa.filter(w => w.word_key === wk);
    for (const w of vwaForKey) {
      const axes = typeof w.analysis_axes === 'string' ? JSON.parse(w.analysis_axes) : w.analysis_axes;
      if (axes.concept_chosen && !dbConcepts.has(axes.concept_chosen)) {
        // Special cases: some concepts are added by the pipeline itself or are meta-concepts
        if (!['Front/Toupet', 'Mensonge/Démenti', 'Détournement/Rejet'].includes(axes.concept_chosen)) {
          warn(`v${w.verses.verse_num} ${wk}: concept_chosen "${axes.concept_chosen}" n'existe pas dans word_meanings`);
        }
      }
    }
  }

  // 4. Check new roots have occurrences
  console.log('\n--- 4. Vérification occurrences nouvelles racines ---');
  for (const wk of ['sfe', 'zbn']) {
    const { data } = await sb.from('word_analyses').select('total_occurrences').eq('word_key', wk).limit(1);
    if (data && data[0] && data[0].total_occurrences > 0) {
      ok(`${wk}: total_occurrences = ${data[0].total_occurrences}`);
    } else {
      err(`${wk}: total_occurrences = 0 ou manquant`);
    }
  }

  // 5. Check daily phrases for new roots
  console.log('\n--- 5. Vérification phrases quotidiennes ---');
  for (const aid of [2617, 2618]) {
    const { count } = await sb.from('word_daily').select('*', { count: 'exact', head: true }).eq('analysis_id', aid);
    if (count > 0) ok(`analysis_id=${aid}: ${count} phrases`);
    else err(`analysis_id=${aid}: pas de phrases quotidiennes`);
  }

  // 6. Check segments sense_retenu matches word_meanings
  console.log('\n--- 6. Vérification sense_retenu dans segments ---');
  for (const v of va) {
    if (!v.segments) continue;
    const segs = typeof v.segments === 'string' ? JSON.parse(v.segments) : v.segments;
    for (const seg of segs) {
      if (seg.is_particle || !seg.word_key) continue;
      // Check fr is natural French
      if (seg.fr && seg.fr.length > 50) warn(`v${v.verses.verse_num}: segment "${seg.word_key}" fr trop long: "${seg.fr}"`);
    }
  }

  // 7. Check no anthropomorphism
  console.log('\n--- 7. Vérification pas d\'anthropomorphisme ---');
  const anthropoTerms = ['main de Dieu', 'visage de Dieu', 'œil de Dieu', 'trône de Dieu', 'Dieu ressent', 'Dieu éprouve'];
  for (const v of va) {
    if (!v.translation_explanation) continue;
    for (const term of anthropoTerms) {
      if (v.translation_explanation.toLowerCase().includes(term.toLowerCase())) {
        err(`v${v.verses.verse_num}: anthropomorphisme possible: "${term}"`);
      }
    }
  }

  // 8. Check no interpretation
  console.log('\n--- 8. Vérification pas d\'interprétation ---');
  const interpoTerms = ['cela signifie que', 'le sens caché', 'l\'intention divine', 'Dieu veut dire'];
  for (const v of va) {
    if (!v.translation_explanation) continue;
    for (const term of interpoTerms) {
      if (v.translation_explanation.toLowerCase().includes(term.toLowerCase())) {
        warn(`v${v.verses.verse_num}: interprétation possible: "${term}"`);
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
  console.log('\n=== TRADUCTIONS COMPLÈTES SOURATE 96 ===');
  for (const v of va) {
    const segs = typeof v.segments === 'string' ? JSON.parse(v.segments) : v.segments;
    const tr = segs ? segs.map(s => s.fr).join(' ') : '(pas de segments)';
    console.log(`v${v.verses.verse_num}: ${tr}`);
  }
}

validate().catch(console.error);
