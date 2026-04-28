require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');
const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

let errors = 0;
let warnings = 0;

function err(msg) { errors++; console.log('  ❌ ' + msg); }
function warn(msg) { warnings++; console.log('  ⚠️ ' + msg); }
function ok(msg) { console.log('  ✅ ' + msg); }

(async () => {
  console.log('=== VALIDATION S86 v11-17 ===\n');

  for (let vnum = 11; vnum <= 17; vnum++) {
    const vid = 5931 + vnum;
    console.log(`\n--- v${vnum} (${vid}) ---`);

    // Get VA
    const { data: va } = await sb.from('verse_analyses').select('*').eq('verse_id', vid).single();
    if (!va) { err('VA manquant'); continue; }

    // Check translation_arab
    if (!va.translation_arab || va.translation_arab.length < 5) err('translation_arab vide ou trop court');
    else ok('translation_arab: ' + va.translation_arab.substring(0, 70));

    // Check full_translation (Hamidullah)
    if (!va.full_translation || va.full_translation.length < 5) err('full_translation (Hamidullah) manquant');
    else ok('full_translation: ' + va.full_translation.substring(0, 70));

    // Check segments
    if (!va.segments || !Array.isArray(va.segments) || va.segments.length === 0) {
      err('segments manquants');
    } else {
      for (const seg of va.segments) {
        if (!seg.fr) err('segment sans fr: ' + JSON.stringify(seg));
        if (!seg.pos) err('segment sans pos: ' + JSON.stringify(seg));
        if (!seg.phon) err('segment sans phon: ' + JSON.stringify(seg));
        if (!seg.arabic) err('segment sans arabic: ' + JSON.stringify(seg));
        if (seg.position === undefined || seg.position === null) err('segment sans position: ' + JSON.stringify(seg));
        if (seg.is_particle === undefined) err('segment sans is_particle: ' + JSON.stringify(seg));
        if (!seg.is_particle && !seg.word_key) err('segment non-particule sans word_key: ' + JSON.stringify(seg));
        if (!seg.is_particle && !seg.sense_retenu) err('segment non-particule sans sense_retenu: ' + JSON.stringify(seg));
      }
      ok(va.segments.length + ' segments valides');
    }

    // Check translation_explanation sections
    const te = va.translation_explanation || '';
    if (!te.includes('§DEMARCHE§')) err('§DEMARCHE§ manquant');
    if (!te.includes('§JUSTIFICATION§')) err('§JUSTIFICATION§ manquant');
    if (!te.includes('§CRITIQUE§')) err('§CRITIQUE§ manquant');

    // Check no Arabic in explanation
    const arabicInTE = te.match(/[\u0600-\u06FF]/g);
    if (arabicInTE) err('Arabe dans translation_explanation: ' + arabicInTE.length + ' caracteres');
    else ok('Pas d\'arabe dans translation_explanation');

    // Check no jargon
    if (/\bconcept\b/i.test(te)) warn('Mot "concept" dans translation_explanation');
    if (/\bpipeline\b/i.test(te)) err('Mot "pipeline" dans translation_explanation');

    // Get VWA
    const { data: vwas } = await sb.from('verse_word_analyses').select('*').eq('verse_id', vid);
    if (!vwas || vwas.length === 0) { err('Aucun VWA'); continue; }
    ok(vwas.length + ' VWA');

    for (const vwa of vwas) {
      const axes = vwa.analysis_axes;
      if (!axes) { err('VWA ' + vwa.word_key + ': analysis_axes manquant'); continue; }

      if (!axes.sense_chosen) err('VWA ' + vwa.word_key + ': sense_chosen manquant');
      if (!axes.concept_chosen) err('VWA ' + vwa.word_key + ': concept_chosen manquant');

      if (!axes.concepts) { err('VWA ' + vwa.word_key + ': concepts manquant'); continue; }

      const retenuCount = Object.values(axes.concepts).filter(c => c.status === 'retenu').length;
      if (retenuCount !== 1) err('VWA ' + vwa.word_key + ': ' + retenuCount + ' retenu (attendu 1)');

      if (!axes.concepts[axes.concept_chosen]) {
        err('VWA ' + vwa.word_key + ': concept_chosen "' + axes.concept_chosen + '" ne correspond a aucun concept');
      }

      for (const [name, c] of Object.entries(axes.concepts)) {
        if (c.status === 'nul' || c.status === null) continue;

        const axeKeys = ['axe1_verset', 'axe2_voisins', 'axe3_sourate', 'axe4_coherence', 'axe5_frequence'];
        for (const ak of axeKeys) {
          if (!c[ak]) {
            err('VWA ' + vwa.word_key + ' / ' + name + ' [' + c.status + ']: ' + ak + ' MANQUANT');
          } else if (c[ak].length < 100) {
            warn('VWA ' + vwa.word_key + ' / ' + name + ' [' + c.status + ']: ' + ak + ' trop court (' + c[ak].length + ' chars)');
          }
        }

        for (const ak of axeKeys) {
          if (c[ak] && /[\u0600-\u06FF]/.test(c[ak])) {
            err('VWA ' + vwa.word_key + ' / ' + name + ': arabe dans ' + ak);
          }
        }

        if (!c.proof_ctx) err('VWA ' + vwa.word_key + ' / ' + name + ': proof_ctx manquant');
        else if (/[\u0600-\u06FF]/.test(c.proof_ctx)) err('VWA ' + vwa.word_key + ' / ' + name + ': arabe dans proof_ctx');

        for (const ak of axeKeys) {
          if (c[ak] && /\bconcept\b/i.test(c[ak])) warn('VWA ' + vwa.word_key + ' / ' + name + ': "concept" dans ' + ak);
          if (c[ak] && /\bpipeline\b/i.test(c[ak])) err('VWA ' + vwa.word_key + ' / ' + name + ': "pipeline" dans ' + ak);
        }
      }

      for (const [name, c] of Object.entries(axes.concepts)) {
        if (c.status === 'nul' || c.status === null) {
          if (!c.proof_ctx) err('VWA ' + vwa.word_key + ' / ' + name + ' [nul]: proof_ctx manquant');
        }
      }

      ok('VWA ' + vwa.word_key + ' (' + axes.concept_chosen + ') OK');
    }
  }

  // Check new roots have word_meanings
  console.log('\n--- VÉRIFICATION RACINES ---');
  const newRoots = ['ArD', 'SdE', 'fSl', 'hzl'];
  for (const r of newRoots) {
    const { data: wa } = await sb.from('word_analyses').select('id, total_occurrences').eq('word_key', r);
    if (!wa || wa.length === 0) { err(r + ': racine manquante'); continue; }
    if (wa[0].total_occurrences === 0) err(r + ': total_occurrences = 0');
    const { count } = await sb.from('word_meanings').select('id', { count: 'exact' }).eq('analysis_id', wa[0].id);
    ok(r + ': id=' + wa[0].id + ', occ=' + wa[0].total_occurrences + ', sens=' + count);
  }

  // Check mhl occurrences
  const { data: mhlCheck } = await sb.from('word_analyses').select('total_occurrences').eq('word_key', 'mhl');
  if (mhlCheck && mhlCheck[0].total_occurrences > 0) ok('mhl: occ=' + mhlCheck[0].total_occurrences);
  else err('mhl: total_occurrences toujours 0');

  // Check word_daily for new roots
  console.log('\n--- VÉRIFICATION PHRASES DU QUOTIDIEN ---');
  for (const r of [...newRoots, 'mhl']) {
    const { data: wa } = await sb.from('word_analyses').select('id').eq('word_key', r);
    if (wa && wa.length > 0) {
      const { count } = await sb.from('word_daily').select('id', { count: 'exact' }).eq('analysis_id', wa[0].id);
      if (count >= 3) ok(r + ': ' + count + ' phrases');
      else err(r + ': seulement ' + count + ' phrases');
    }
  }

  console.log('\n=== RÉSULTAT ===');
  console.log(errors + ' erreurs, ' + warnings + ' warnings');
  if (errors === 0) console.log('✅ VALIDATION RÉUSSIE');
  else console.log('❌ VALIDATION ÉCHOUÉE');
})();
