const { createClient } = require('@supabase/supabase-js');
const db = createClient(
  'https://gwtgftosscjupxxsubev.supabase.co',
  process.env.SUPABASE_SERVICE_KEY
);

async function validate() {
  const errors = [];
  const warnings = [];

  // S2:11-20 = verse_ids 18-27
  const verseIds = [18,19,20,21,22,23,24,25,26,27];
  const { data: verses } = await db
    .from('verse_analyses')
    .select('*')
    .in('verse_id', verseIds)
    .order('verse_id');

  for (const v of verses) v.verse_number = v.verse_id - 7; // S2 offset

  console.log(`=== VALIDATION SOURATE 2:11-20 ===\n`);
  console.log(`Versets trouvés: ${verses.length}`);

  // Get all VWA
  const { data: vwas } = await db
    .from('verse_word_analyses')
    .select('*')
    .in('verse_id', verseIds)
    .order('id');

  console.log(`VWA trouvés: ${vwas.length}\n`);

  // Get all word_analyses for used word_keys
  const wordKeys = [...new Set(vwas.map(v => v.word_key))];
  const { data: was } = await db
    .from('word_analyses')
    .select('id, word_key, root_ar, total_occurrences')
    .in('word_key', wordKeys);

  const waMap = {};
  for (const wa of was) waMap[wa.word_key] = wa;

  const waIds = was.map(w => w.id);
  const { data: wms } = await db
    .from('word_meanings')
    .select('id, analysis_id, concept, sense')
    .in('analysis_id', waIds);

  // Build lookup: word_key -> { concept -> [senses] }
  const wmByKey = {};
  for (const wm of wms) {
    const wa = was.find(w => w.id === wm.analysis_id);
    if (!wa) continue;
    if (!wmByKey[wa.word_key]) wmByKey[wa.word_key] = {};
    if (!wmByKey[wa.word_key][wm.concept]) wmByKey[wa.word_key][wm.concept] = [];
    wmByKey[wa.word_key][wm.concept].push(wm.sense);
  }

  // Get daily phrases
  const { data: dailies } = await db
    .from('word_daily')
    .select('id, analysis_id')
    .in('analysis_id', waIds);

  const dailyCount = {};
  for (const d of dailies) {
    const wa = was.find(w => w.id === d.analysis_id);
    if (wa) dailyCount[wa.word_key] = (dailyCount[wa.word_key] || 0) + 1;
  }

  // === VALIDATION CHECKS ===

  // CHECK 1: total_occurrences not null/0
  console.log(`--- CHECK 1: total_occurrences ---`);
  for (const wa of was) {
    if (!wa.total_occurrences || wa.total_occurrences === 0) {
      errors.push(`[${wa.word_key}] total_occurrences = ${wa.total_occurrences}`);
    }
  }
  console.log(`  ${was.length} racines vérifiées\n`);

  // CHECK 2: Daily phrases (exactly 3 per root)
  console.log(`--- CHECK 2: Phrases du quotidien ---`);
  for (const wk of wordKeys) {
    const count = dailyCount[wk] || 0;
    if (count === 0) errors.push(`[${wk}] 0 phrases du quotidien`);
    else if (count !== 3) warnings.push(`[${wk}] ${count} phrases (attendu: 3)`);
  }
  console.log(`  ${wordKeys.length} racines vérifiées\n`);

  // CHECK 3: translation_explanation structure
  console.log(`--- CHECK 3: Structure §DEMARCHE§/§JUSTIFICATION§/§CRITIQUE§ ---`);
  for (const v of verses) {
    const te = v.translation_explanation || '';
    if (!te.includes('§DEMARCHE§')) errors.push(`V${v.verse_number}: manque §DEMARCHE§`);
    if (!te.includes('§JUSTIFICATION§')) errors.push(`V${v.verse_number}: manque §JUSTIFICATION§`);
    if (!te.includes('§CRITIQUE§')) errors.push(`V${v.verse_number}: manque §CRITIQUE§`);
  }
  console.log(`  ${verses.length} versets vérifiés\n`);

  // CHECK 4: Segments — sense_retenu matches word_meanings
  console.log(`--- CHECK 4: sense_retenu dans segments vs word_meanings ---`);
  for (const v of verses) {
    const segs = v.segments || [];
    for (const seg of segs) {
      if (seg.is_particle || !seg.word_key) continue;
      const wk = seg.word_key;
      const sr = seg.sense_retenu;
      if (!sr) { warnings.push(`V${v.verse_number} [${wk}]: sense_retenu manquant`); continue; }

      const concepts = wmByKey[wk] || {};
      const allSenses = Object.values(concepts).flat();
      if (allSenses.length > 0 && !allSenses.includes(sr)) {
        errors.push(`V${v.verse_number} [${wk}]: sense_retenu "${sr}" n'existe PAS dans word_meanings. Sens disponibles: ${allSenses.slice(0, 10).join(', ')}`);
      }
    }
  }
  console.log(`  Segments vérifiés\n`);

  // CHECK 5: VWA analysis_axes quality
  console.log(`--- CHECK 5: Qualité des axes ---`);
  for (const vwa of vwas) {
    const ax = vwa.analysis_axes;
    if (!ax || !ax.concepts) { errors.push(`VWA ${vwa.id} [${vwa.word_key}]: analysis_axes manquant`); continue; }

    const retenu = Object.entries(ax.concepts).find(([_, c]) => c.status === 'retenu');
    if (!retenu) { errors.push(`VWA ${vwa.id} [${vwa.word_key}]: aucun concept retenu`); continue; }

    const [rName, rData] = retenu;

    // Check concept name exists in word_meanings
    const wmConcepts = wmByKey[vwa.word_key] || {};
    if (Object.keys(wmConcepts).length > 0 && !wmConcepts[rName]) {
      errors.push(`VWA ${vwa.id} [${vwa.word_key}]: concept retenu "${rName}" n'existe PAS dans word_meanings. Concepts: ${Object.keys(wmConcepts).join(', ')}`);
    }

    // Check all 5 axes exist and have content
    const axes = ['axe1_verset', 'axe2_voisins', 'axe3_sourate', 'axe4_coherence', 'axe5_frequence'];
    for (const axe of axes) {
      if (!rData[axe]) { errors.push(`VWA ${vwa.id} [${vwa.word_key}]: ${axe} manquant`); continue; }
      const sentences = rData[axe].split(/[.!?]+/).filter(s => s.trim().length > 10);
      if (sentences.length < 3) {
        warnings.push(`VWA ${vwa.id} [${vwa.word_key}]: ${axe} n'a que ${sentences.length} phrases (min: 4)`);
      }
    }

    // Check proof_ctx exists for retenu
    if (!rData.proof_ctx || rData.proof_ctx.length < 50) {
      errors.push(`VWA ${vwa.id} [${vwa.word_key}]: proof_ctx trop court ou manquant`);
    }

    // Check no Arabic characters in axes
    for (const axe of axes) {
      if (rData[axe] && /[\u0600-\u06FF]/.test(rData[axe])) {
        errors.push(`VWA ${vwa.id} [${vwa.word_key}]: ${axe} contient de l'arabe`);
      }
    }
  }
  console.log(`  ${vwas.length} VWA vérifiés\n`);

  // CHECK 6: concept_chosen match
  console.log(`--- CHECK 6: concept_chosen match ---`);
  for (const vwa of vwas) {
    const ax = vwa.analysis_axes;
    if (!ax) continue;
    const cc = ax.concept_chosen || vwa.concept_chosen;
    const wmConcepts = wmByKey[vwa.word_key] || {};
    if (cc && Object.keys(wmConcepts).length > 0 && !wmConcepts[cc]) {
      errors.push(`VWA ${vwa.id} [${vwa.word_key}]: concept_chosen "${cc}" pas dans word_meanings`);
    }
  }
  console.log(`  Vérifié\n`);

  // CHECK 7: Segments have position field
  console.log(`--- CHECK 7: position dans segments ---`);
  for (const v of verses) {
    const segs = v.segments || [];
    for (const seg of segs) {
      if (seg.position === undefined || seg.position === null) {
        errors.push(`V${v.verse_number}: segment "${seg.fr}" n'a pas de position`);
      }
    }
  }
  console.log(`  Vérifié\n`);

  // CHECK 8: full_translation exists
  console.log(`--- CHECK 8: full_translation (Hamidullah) ---`);
  for (const v of verses) {
    if (!v.full_translation) {
      errors.push(`V${v.verse_number}: full_translation manquant`);
    }
  }
  console.log(`  Vérifié\n`);

  // === RESULTS ===
  console.log(`\n========== RÉSULTATS ==========`);
  console.log(`ERREURS: ${errors.length}`);
  for (const e of errors) console.log(`  ❌ ${e}`);
  console.log(`\nAVERTISSEMENTS: ${warnings.length}`);
  for (const w of warnings) console.log(`  ⚠️  ${w}`);

  if (errors.length === 0) {
    console.log(`\n✅ VALIDATION RÉUSSIE — Sourate 2:11-20 conforme aux règles`);
  } else {
    console.log(`\n❌ VALIDATION ÉCHOUÉE — ${errors.length} erreurs à corriger`);
  }

  // Print summary per verse
  console.log(`\n========== RÉSUMÉ PAR VERSET ==========`);
  for (const v of verses) {
    const vVwas = vwas.filter(w => w.verse_id === v.verse_id);
    console.log(`\nVERSET 2:${v.verse_number} — ${vVwas.length} mots analysés`);
    for (const vwa of vVwas) {
      const ax = vwa.analysis_axes || {};
      console.log(`  ${vwa.word_key} (${waMap[vwa.word_key]?.root_ar || '?'}) → concept "${ax.concept_chosen}" → mot français "${ax.sense_chosen}"`);
    }
    console.log(`  Traduction: "${v.translation_arab}"`);
  }
}

validate().catch(console.error);
