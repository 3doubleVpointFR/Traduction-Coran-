const { createClient } = require('@supabase/supabase-js');
const db = createClient(
  'https://gwtgftosscjupxxsubev.supabase.co',
  process.env.SUPABASE_SERVICE_KEY
);

// Normalize string for accent-insensitive comparison
function normalize(s) {
  if (!s) return '';
  return s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
}

async function validate() {
  const errors = [];
  const warnings = [];

  // S2:31-40 = verse_ids 38-47 (offset = verse_id - 7 = verse_number)
  const verseIds = [38,39,40,41,42,43,44,45,46,47];
  const { data: verses, error: vErr } = await db
    .from('verse_analyses')
    .select('*')
    .in('verse_id', verseIds)
    .order('verse_id');

  if (vErr) { console.error('Error fetching verses:', vErr); return; }

  for (const v of verses) v.verse_number = v.verse_id - 7;

  console.log(`=== VALIDATION SOURATE 2:31-40 (verse_ids 38-47) ===\n`);
  console.log(`Versets trouves: ${verses.length} / 10 attendus`);
  if (verses.length < 10) {
    errors.push(`Seulement ${verses.length}/10 versets trouves dans verse_analyses`);
  }

  // Get all VWA
  const { data: vwas, error: wErr } = await db
    .from('verse_word_analyses')
    .select('*')
    .in('verse_id', verseIds)
    .order('id');

  if (wErr) { console.error('Error fetching VWA:', wErr); return; }
  console.log(`VWA trouves: ${vwas.length}\n`);

  // Get all word_analyses for used word_keys
  const wordKeys = [...new Set(vwas.map(v => v.word_key))];
  const { data: was } = await db
    .from('word_analyses')
    .select('id, word_key, root_ar, total_occurrences')
    .in('word_key', wordKeys);

  const waMap = {};
  for (const wa of (was || [])) waMap[wa.word_key] = wa;

  const waIds = (was || []).map(w => w.id);
  let wms = [];
  if (waIds.length > 0) {
    const { data: wmsData } = await db
      .from('word_meanings')
      .select('id, analysis_id, concept, sense')
      .in('analysis_id', waIds);
    wms = wmsData || [];
  }

  // Build lookup: word_key -> { concept -> [senses] }
  const wmByKey = {};
  for (const wm of wms) {
    const wa = (was || []).find(w => w.id === wm.analysis_id);
    if (!wa) continue;
    if (!wmByKey[wa.word_key]) wmByKey[wa.word_key] = {};
    if (!wmByKey[wa.word_key][wm.concept]) wmByKey[wa.word_key][wm.concept] = [];
    wmByKey[wa.word_key][wm.concept].push(wm.sense);
  }

  // === CHECK 1: sense_chosen in VWA analysis_axes ===
  console.log(`--- CHECK 1: sense_chosen dans analysis_axes ---`);
  for (const vwa of vwas) {
    const ax = vwa.analysis_axes;
    if (!ax || !ax.sense_chosen) {
      errors.push(`VWA ${vwa.id} [${vwa.word_key}] v${vwa.verse_id - 7}: sense_chosen manquant dans analysis_axes`);
    }
  }
  console.log(`  ${vwas.length} VWA verifies\n`);

  // === CHECK 2: concept_chosen matches actual concept in word_meanings ===
  console.log(`--- CHECK 2: concept_chosen vs word_meanings ---`);
  for (const vwa of vwas) {
    const ax = vwa.analysis_axes;
    if (!ax) continue;
    const cc = ax.concept_chosen;
    if (!cc) {
      errors.push(`VWA ${vwa.id} [${vwa.word_key}] v${vwa.verse_id - 7}: concept_chosen manquant`);
      continue;
    }
    const wmConcepts = wmByKey[vwa.word_key] || {};
    if (Object.keys(wmConcepts).length > 0 && !wmConcepts[cc]) {
      // Try normalized match
      const normalizedCC = normalize(cc);
      const match = Object.keys(wmConcepts).find(k => normalize(k) === normalizedCC);
      if (!match) {
        errors.push(`VWA ${vwa.id} [${vwa.word_key}] v${vwa.verse_id - 7}: concept_chosen "${cc}" absent de word_meanings. Concepts disponibles: ${Object.keys(wmConcepts).join(', ')}`);
      } else {
        warnings.push(`VWA ${vwa.id} [${vwa.word_key}] v${vwa.verse_id - 7}: concept_chosen "${cc}" match normalise avec "${match}"`);
      }
    }
  }
  console.log(`  Verifie\n`);

  // === CHECK 3: full_translation exists ===
  console.log(`--- CHECK 3: full_translation ---`);
  for (const v of verses) {
    if (!v.full_translation) {
      errors.push(`V${v.verse_number}: full_translation manquant`);
    }
  }
  console.log(`  ${verses.length} versets verifies\n`);

  // === CHECK 4: translation_explanation structure ===
  console.log(`--- CHECK 4: Structure DEMARCHE/JUSTIFICATION/CRITIQUE ---`);
  const requiredSections = ['§DEMARCHE§', '§JUSTIFICATION§', '§CRITIQUE§'];
  for (const v of verses) {
    const te = v.translation_explanation || '';
    for (const section of requiredSections) {
      if (!te.includes(section)) {
        errors.push(`V${v.verse_number}: manque ${section} dans translation_explanation`);
      }
    }
  }
  console.log(`  ${verses.length} versets verifies\n`);

  // === CHECK 5: segments array with position ===
  console.log(`--- CHECK 5: segments avec position ---`);
  for (const v of verses) {
    const segs = v.segments;
    if (!segs || !Array.isArray(segs) || segs.length === 0) {
      errors.push(`V${v.verse_number}: segments manquant ou vide`);
      continue;
    }
    for (let i = 0; i < segs.length; i++) {
      const seg = segs[i];
      if (seg.position === undefined || seg.position === null) {
        errors.push(`V${v.verse_number}: segment #${i} ("${seg.fr || seg.ar || '?'}") n'a pas de position`);
      }
    }
  }
  console.log(`  Verifie\n`);

  // === CHECK 6: axes quality for retenu/probable ===
  console.log(`--- CHECK 6: Qualite des axes (retenu/probable) ---`);
  const axeKeys = ['axe1_verset', 'axe2_voisins', 'axe3_sourate', 'axe4_coherence', 'axe5_frequence'];
  for (const vwa of vwas) {
    const ax = vwa.analysis_axes;
    if (!ax || !ax.concepts) continue;

    for (const [cName, cData] of Object.entries(ax.concepts)) {
      if (cData.status !== 'retenu' && cData.status !== 'probable') continue;

      for (const axeKey of axeKeys) {
        const text = cData[axeKey];
        if (!text) {
          errors.push(`VWA ${vwa.id} [${vwa.word_key}] v${vwa.verse_id - 7}: concept "${cName}" (${cData.status}) — ${axeKey} manquant`);
          continue;
        }
        const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 10);
        if (sentences.length < 3) {
          warnings.push(`VWA ${vwa.id} [${vwa.word_key}] v${vwa.verse_id - 7}: concept "${cName}" — ${axeKey} n'a que ${sentences.length} phrases (min 3)`);
        }
      }
    }
  }
  console.log(`  ${vwas.length} VWA verifies\n`);

  // === CHECK 7: sense_chosen matches retained concept's senses (normalized) ===
  console.log(`--- CHECK 7: sense_chosen vs senses du concept retenu ---`);
  for (const vwa of vwas) {
    const ax = vwa.analysis_axes;
    if (!ax || !ax.sense_chosen || !ax.concept_chosen) continue;

    const wmConcepts = wmByKey[vwa.word_key] || {};
    // Find the concept (exact or normalized)
    let conceptSenses = wmConcepts[ax.concept_chosen];
    if (!conceptSenses) {
      const normCC = normalize(ax.concept_chosen);
      const matchKey = Object.keys(wmConcepts).find(k => normalize(k) === normCC);
      if (matchKey) conceptSenses = wmConcepts[matchKey];
    }

    if (conceptSenses && conceptSenses.length > 0) {
      const normSenseChosen = normalize(ax.sense_chosen);
      const match = conceptSenses.find(s => normalize(s) === normSenseChosen);
      if (!match) {
        errors.push(`VWA ${vwa.id} [${vwa.word_key}] v${vwa.verse_id - 7}: sense_chosen "${ax.sense_chosen}" absent des sens du concept "${ax.concept_chosen}". Sens disponibles: ${conceptSenses.join(', ')}`);
      }
    }
  }
  console.log(`  Verifie\n`);

  // === CHECK 8: segments have sense_retenu ===
  console.log(`--- CHECK 8: sense_retenu dans segments ---`);
  for (const v of verses) {
    const segs = v.segments || [];
    for (const seg of segs) {
      if (seg.is_particle || !seg.word_key) continue;
      if (!seg.sense_retenu) {
        warnings.push(`V${v.verse_number} [${seg.word_key}]: sense_retenu manquant dans segment`);
      }
    }
  }
  console.log(`  Verifie\n`);

  // === CHECK 9 (bonus): No Arabic in axes ===
  console.log(`--- CHECK 9: Pas d'arabe dans les axes ---`);
  for (const vwa of vwas) {
    const ax = vwa.analysis_axes;
    if (!ax || !ax.concepts) continue;
    for (const [cName, cData] of Object.entries(ax.concepts)) {
      if (cData.status !== 'retenu' && cData.status !== 'probable') continue;
      for (const axeKey of axeKeys) {
        if (cData[axeKey] && /[\u0600-\u06FF]/.test(cData[axeKey])) {
          errors.push(`VWA ${vwa.id} [${vwa.word_key}] v${vwa.verse_id - 7}: ${axeKey} contient de l'arabe`);
        }
      }
    }
  }
  console.log(`  Verifie\n`);

  // === RESULTS ===
  console.log(`\n========== RESULTATS ==========`);
  console.log(`ERREURS: ${errors.length}`);
  for (const e of errors) console.log(`  [ERR] ${e}`);
  console.log(`\nAVERTISSEMENTS: ${warnings.length}`);
  for (const w of warnings) console.log(`  [WARN] ${w}`);

  if (errors.length === 0) {
    console.log(`\n[OK] VALIDATION REUSSIE — Sourate 2:31-40 conforme`);
  } else {
    console.log(`\n[FAIL] VALIDATION ECHOUEE — ${errors.length} erreurs a corriger`);
  }

  // Summary per verse
  console.log(`\n========== RESUME PAR VERSET ==========`);
  for (const v of verses) {
    const vVwas = vwas.filter(w => w.verse_id === v.verse_id);
    console.log(`\nVERSET 2:${v.verse_number} — ${vVwas.length} mots analyses`);
    for (const vwa of vVwas) {
      const ax = vwa.analysis_axes || {};
      const status = ax.concepts ? Object.values(ax.concepts).find(c => c.status === 'retenu') ? 'retenu' : 'N/A' : 'N/A';
      console.log(`  ${vwa.word_key} (${waMap[vwa.word_key]?.root_ar || '?'}) — concept: "${ax.concept_chosen || '?'}" — sens: "${ax.sense_chosen || '?'}" [${status}]`);
    }
    const segs = v.segments || [];
    console.log(`  Segments: ${segs.length} | Traduction: "${(v.full_translation || '').substring(0, 80)}..."`);
  }
}

validate().catch(console.error);
