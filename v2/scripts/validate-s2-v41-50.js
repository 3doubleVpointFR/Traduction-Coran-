const { createClient } = require('@supabase/supabase-js');
const db = createClient(
  'https://gwtgftosscjupxxsubev.supabase.co',
  process.env.SUPABASE_SERVICE_KEY
);

function norm(s) {
  if (!s) return '';
  return s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
}

function hasArabic(s) {
  return /[\u0600-\u06FF]/.test(s || '');
}

function countSentences(s) {
  if (!s) return 0;
  return (s.match(/\./g) || []).length;
}

async function validate() {
  const errors = [];
  const warnings = [];

  // S2:41-50 = verse_ids 48-57
  const verseIds = Array.from({ length: 10 }, (_, i) => 48 + i);

  const { data: verses, error: vErr } = await db
    .from('verse_analyses')
    .select('*')
    .in('verse_id', verseIds)
    .order('verse_id');

  if (vErr) { console.error('verse_analyses fetch error:', vErr); return; }

  console.log(`=== VALIDATION SOURATE 2:41-50 (verse_ids 48-57) ===\n`);
  console.log(`Versets trouvés: ${verses ? verses.length : 0}/10`);

  if (!verses || verses.length === 0) {
    console.log('\nAucun verset trouvé. Pipeline non exécutée pour ces versets.');
    return;
  }

  // Get all VWA
  const { data: vwas, error: vwaErr } = await db
    .from('verse_word_analyses')
    .select('*')
    .in('verse_id', verseIds)
    .order('id');

  if (vwaErr) { console.error('VWA fetch error:', vwaErr); return; }
  console.log(`VWA trouvés: ${vwas ? vwas.length : 0}\n`);

  // Get word_analyses for used word_keys
  const wordKeys = [...new Set((vwas || []).map(v => v.word_key))];

  let was = [], wms = [];
  if (wordKeys.length > 0) {
    const { data: wasData } = await db
      .from('word_analyses')
      .select('id, word_key, root_ar, total_occurrences')
      .in('word_key', wordKeys);
    was = wasData || [];

    const waIds = was.map(w => w.id);
    if (waIds.length > 0) {
      const { data: wmsData } = await db
        .from('word_meanings')
        .select('id, analysis_id, concept, sense, status')
        .in('analysis_id', waIds);
      wms = wmsData || [];
    }
  }

  // Build lookups
  const waMap = {};
  for (const wa of was) waMap[wa.word_key] = wa;

  // word_key -> { concept_norm -> { original_concept, senses[], status } }
  const wmByKey = {};
  for (const wm of wms) {
    const wa = was.find(w => w.id === wm.analysis_id);
    if (!wa) continue;
    if (!wmByKey[wa.word_key]) wmByKey[wa.word_key] = {};
    const cn = norm(wm.concept);
    if (!wmByKey[wa.word_key][cn]) {
      wmByKey[wa.word_key][cn] = { original: wm.concept, senses: [], status: wm.status };
    }
    if (wm.sense) {
      const senses = Array.isArray(wm.sense) ? wm.sense : [wm.sense];
      wmByKey[wa.word_key][cn].senses.push(...senses);
    }
  }

  // === CHECKS ===

  // CHECK 1: sense_chosen in analysis_axes
  console.log(`--- CHECK 1: sense_chosen in analysis_axes ---`);
  for (const vwa of (vwas || [])) {
    const axes = vwa.analysis_axes;
    if (!axes || axes.sense_chosen === undefined || axes.sense_chosen === null) {
      errors.push(`[ERR] VWA id=${vwa.id} word_key=${vwa.word_key} verse_id=${vwa.verse_id}: sense_chosen manquant dans analysis_axes`);
    }
  }

  // CHECK 2: concept_chosen matches DB
  console.log(`--- CHECK 2: concept_chosen matches word_meanings ---`);
  for (const vwa of (vwas || [])) {
    const axes = vwa.analysis_axes;
    if (!axes || !axes.concept_chosen) continue;
    const cc = axes.concept_chosen;
    const concepts = wmByKey[vwa.word_key];
    if (!concepts) {
      errors.push(`[ERR] VWA id=${vwa.id} word_key=${vwa.word_key}: aucun concept en DB pour ce word_key`);
      continue;
    }
    const ccNorm = norm(cc);
    const match = concepts[ccNorm];
    if (!match) {
      // Try partial match
      const keys = Object.keys(concepts);
      const partial = keys.find(k => k.includes(ccNorm) || ccNorm.includes(k));
      if (partial) {
        warnings.push(`[WARN] VWA id=${vwa.id} word_key=${vwa.word_key}: concept_chosen="${cc}" match partiel avec "${concepts[partial].original}"`);
      } else {
        errors.push(`[ERR] VWA id=${vwa.id} word_key=${vwa.word_key}: concept_chosen="${cc}" ne correspond à aucun concept DB. Disponibles: ${keys.map(k => concepts[k].original).join(', ')}`);
      }
    } else if (match.original !== cc) {
      warnings.push(`[WARN] VWA id=${vwa.id} word_key=${vwa.word_key}: accent mismatch concept_chosen="${cc}" vs DB="${match.original}"`);
    }
  }

  // CHECK 3: full_translation exists
  console.log(`--- CHECK 3: full_translation ---`);
  for (const vid of verseIds) {
    const v = (verses || []).find(x => x.verse_id === vid);
    if (!v) {
      errors.push(`[ERR] verse_id=${vid}: verset absent de verse_analyses`);
      continue;
    }
    if (!v.full_translation || v.full_translation.trim() === '') {
      errors.push(`[ERR] verse_id=${vid}: full_translation manquant`);
    }
  }

  // CHECK 4: translation_explanation structure
  console.log(`--- CHECK 4: translation_explanation structure ---`);
  const requiredSections = ['§DEMARCHE§', '§JUSTIFICATION§', '§CRITIQUE§'];
  for (const v of (verses || [])) {
    const te = typeof v.translation_explanation === 'string' ? v.translation_explanation : JSON.stringify(v.translation_explanation || '');
    for (const sec of requiredSections) {
      if (!te.includes(sec)) {
        errors.push(`[ERR] verse_id=${v.verse_id}: translation_explanation manque ${sec}`);
      }
    }
  }

  // CHECK 5: segments with position
  console.log(`--- CHECK 5: segments position ---`);
  for (const v of (verses || [])) {
    const segs = v.segments;
    if (!segs || !Array.isArray(segs)) {
      errors.push(`[ERR] verse_id=${v.verse_id}: segments manquants ou non-array`);
      continue;
    }
    for (let i = 0; i < segs.length; i++) {
      if (segs[i].position === undefined || segs[i].position === null) {
        errors.push(`[ERR] verse_id=${v.verse_id} segment[${i}]: position manquant`);
      }
    }
  }

  // CHECK 6: Axis quality (retenu/probable concepts)
  console.log(`--- CHECK 6: axis quality ---`);
  for (const vwa of (vwas || [])) {
    const axes = vwa.analysis_axes;
    if (!axes) continue;
    const cc = axes.concept_chosen;
    if (!cc) continue;
    // Check status in wms
    const concepts = wmByKey[vwa.word_key];
    if (!concepts) continue;
    const ccNorm = norm(cc);
    const match = concepts[ccNorm];
    if (!match) continue;
    const status = match.status;
    if (status === 'retenu' || status === 'probable') {
      for (let n = 1; n <= 5; n++) {
        const axeKey = `axe${n}`;
        const axeVal = axes[axeKey];
        if (!axeVal) {
          warnings.push(`[WARN] VWA id=${vwa.id} word_key=${vwa.word_key}: ${axeKey} manquant (concept ${status})`);
        } else {
          const sentences = countSentences(axeVal);
          if (sentences < 3) {
            warnings.push(`[WARN] VWA id=${vwa.id} word_key=${vwa.word_key}: ${axeKey} n'a que ${sentences} phrases (min 3 attendu)`);
          }
        }
      }
    }
  }

  // CHECK 7: sense_chosen matches word_meanings senses
  console.log(`--- CHECK 7: sense_chosen matches senses in word_meanings ---`);
  for (const vwa of (vwas || [])) {
    const axes = vwa.analysis_axes;
    if (!axes || !axes.sense_chosen || !axes.concept_chosen) continue;
    const sc = axes.sense_chosen;
    const cc = axes.concept_chosen;
    const concepts = wmByKey[vwa.word_key];
    if (!concepts) continue;
    const ccNorm = norm(cc);
    const match = concepts[ccNorm];
    if (!match || !match.senses || match.senses.length === 0) continue;
    // Flatten all senses
    const allSenses = match.senses.flat();
    const scNorm = norm(sc);
    const found = allSenses.some(s => norm(s) === scNorm);
    if (!found) {
      // Try partial
      const partial = allSenses.some(s => norm(s).includes(scNorm) || scNorm.includes(norm(s)));
      if (partial) {
        warnings.push(`[WARN] VWA id=${vwa.id} word_key=${vwa.word_key}: sense_chosen="${sc}" match partiel dans senses`);
      } else {
        errors.push(`[ERR] VWA id=${vwa.id} word_key=${vwa.word_key}: sense_chosen="${sc}" ne correspond à aucun sens du concept "${cc}". Sens dispo: ${allSenses.slice(0, 5).join('; ')}${allSenses.length > 5 ? '...' : ''}`);
      }
    }
  }

  // CHECK 8: sense_retenu in segments (non-particle)
  console.log(`--- CHECK 8: sense_retenu in segments ---`);
  const particleTags = ['P', 'CONJ', 'INTG', 'VOC', 'CERT', 'RES', 'SUP', 'NEG', 'EMPH', 'CIRC', 'COND', 'ACC', 'AMD', 'ANS', 'AVR', 'EXH', 'EXL', 'EXP', 'FUT', 'INC', 'INT', 'PRO', 'RET', 'SUR', 'PRP'];
  for (const v of (verses || [])) {
    const segs = v.segments;
    if (!segs || !Array.isArray(segs)) continue;
    for (let i = 0; i < segs.length; i++) {
      const seg = segs[i];
      const tag = seg.tag || seg.pos || '';
      const isParticle = particleTags.includes(tag);
      if (!isParticle && (!seg.sense_retenu || seg.sense_retenu.trim() === '')) {
        warnings.push(`[WARN] verse_id=${v.verse_id} segment[${i}] (${seg.word_key || seg.ar || '?'}, tag=${tag}): sense_retenu manquant (non-particule)`);
      }
    }
  }

  // CHECK 9: No Arabic in axes
  console.log(`--- CHECK 9: No Arabic in axes/proof_ctx ---`);
  for (const vwa of (vwas || [])) {
    const axes = vwa.analysis_axes;
    if (!axes) continue;
    for (let n = 1; n <= 5; n++) {
      const axeVal = axes[`axe${n}`];
      if (axeVal && hasArabic(axeVal)) {
        errors.push(`[ERR] VWA id=${vwa.id} word_key=${vwa.word_key}: axe${n} contient de l'arabe`);
      }
    }
    if (axes.proof_ctx && hasArabic(axes.proof_ctx)) {
      errors.push(`[ERR] VWA id=${vwa.id} word_key=${vwa.word_key}: proof_ctx contient de l'arabe`);
    }
  }

  // === SUMMARY PER VERSE ===
  console.log(`\n=== RESUME PAR VERSET ===\n`);
  for (const vid of verseIds) {
    const vn = vid - 7; // S2 offset
    const v = (verses || []).find(x => x.verse_id === vid);
    console.log(`--- S2:V${vn} (verse_id=${vid}) ---`);
    if (!v) {
      console.log(`  ABSENT\n`);
      continue;
    }
    console.log(`  full_translation: ${v.full_translation ? 'OUI' : 'NON'}`);
    const vVwas = (vwas || []).filter(x => x.verse_id === vid);
    for (const vwa of vVwas) {
      const axes = vwa.analysis_axes || {};
      console.log(`  ${vwa.word_key} | concept="${axes.concept_chosen || '?'}" | sense="${axes.sense_chosen || '?'}"`);
    }
    console.log('');
  }

  // === FINAL REPORT ===
  console.log(`\n=== RAPPORT FINAL ===\n`);
  for (const e of errors) console.log(e);
  for (const w of warnings) console.log(w);
  console.log(`\nERREURS: ${errors.length}`);
  console.log(`AVERTISSEMENTS: ${warnings.length}`);
}

validate().catch(e => console.error(e));
