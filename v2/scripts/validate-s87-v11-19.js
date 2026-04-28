require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');
const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

let errors = 0;
let warnings = 0;

function err(msg) { errors++; console.log('  ❌ ' + msg); }
function warn(msg) { warnings++; console.log('  ⚠️ ' + msg); }
function ok(msg) { console.log('  ✅ ' + msg); }

(async () => {
  console.log('=== VALIDATION S87 v11-19 ===\n');

  for (let vnum = 11; vnum <= 19; vnum++) {
    const vid = 5948 + vnum;
    console.log(`\n--- v${vnum} (${vid}) ---`);

    // Get VA
    const { data: va } = await sb.from('verse_analyses').select('*').eq('verse_id', vid).single();
    if (!va) { err('VA manquant'); continue; }

    // Check translation_arab
    if (!va.translation_arab || va.translation_arab.length < 5) err('translation_arab vide ou trop court');
    else ok('translation_arab: ' + va.translation_arab.substring(0, 60));

    // Check full_translation (Hamidullah)
    if (!va.full_translation || va.full_translation.length < 5) err('full_translation (Hamidullah) manquant');
    else ok('full_translation: ' + va.full_translation.substring(0, 60));

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
    if (te.toLowerCase().includes('concept')) warn('Mot "concept" dans translation_explanation');
    if (te.toLowerCase().includes('pipeline')) err('Mot "pipeline" dans translation_explanation');

    // Get VWA
    const { data: vwas } = await sb.from('verse_word_analyses').select('*').eq('verse_id', vid);
    if (!vwas || vwas.length === 0) { err('Aucun VWA'); continue; }
    ok(vwas.length + ' VWA');

    for (const vwa of vwas) {
      const axes = vwa.analysis_axes;
      if (!axes) { err('VWA ' + vwa.word_key + ': analysis_axes manquant'); continue; }

      // Check sense_chosen
      if (!axes.sense_chosen) err('VWA ' + vwa.word_key + ': sense_chosen manquant');
      if (!axes.concept_chosen) err('VWA ' + vwa.word_key + ': concept_chosen manquant');

      // Check concepts
      if (!axes.concepts) { err('VWA ' + vwa.word_key + ': concepts manquant'); continue; }

      // Count retenu
      const retenuCount = Object.values(axes.concepts).filter(c => c.status === 'retenu').length;
      if (retenuCount !== 1) err('VWA ' + vwa.word_key + ': ' + retenuCount + ' retenu (attendu 1)');

      // Check concept_chosen matches a concept
      if (!axes.concepts[axes.concept_chosen]) {
        err('VWA ' + vwa.word_key + ': concept_chosen "' + axes.concept_chosen + '" ne correspond a aucun concept');
      }

      // Check axes for non-nul concepts
      for (const [name, c] of Object.entries(axes.concepts)) {
        if (c.status === 'nul' || c.status === null) continue;

        // Should have 5 axes
        const axeKeys = ['axe1_verset', 'axe2_voisins', 'axe3_sourate', 'axe4_coherence', 'axe5_frequence'];
        for (const ak of axeKeys) {
          if (!c[ak]) {
            err('VWA ' + vwa.word_key + ' / ' + name + ' [' + c.status + ']: ' + ak + ' MANQUANT');
          } else if (c[ak].length < 100) {
            warn('VWA ' + vwa.word_key + ' / ' + name + ' [' + c.status + ']: ' + ak + ' trop court (' + c[ak].length + ' chars)');
          }
        }

        // Check no Arabic in axes
        for (const ak of axeKeys) {
          if (c[ak] && /[\u0600-\u06FF]/.test(c[ak])) {
            err('VWA ' + vwa.word_key + ' / ' + name + ': arabe dans ' + ak);
          }
        }

        // Check proof_ctx
        if (!c.proof_ctx) err('VWA ' + vwa.word_key + ' / ' + name + ': proof_ctx manquant');
        else if (/[\u0600-\u06FF]/.test(c.proof_ctx)) err('VWA ' + vwa.word_key + ' / ' + name + ': arabe dans proof_ctx');

        // Check no jargon in axes
        for (const ak of axeKeys) {
          if (c[ak] && /\bconcept\b/i.test(c[ak])) warn('VWA ' + vwa.word_key + ' / ' + name + ': "concept" dans ' + ak);
          if (c[ak] && /\bpipeline\b/i.test(c[ak])) err('VWA ' + vwa.word_key + ' / ' + name + ': "pipeline" dans ' + ak);
        }
      }

      // Check nul concepts have proof_ctx
      for (const [name, c] of Object.entries(axes.concepts)) {
        if (c.status === 'nul' || c.status === null) {
          if (!c.proof_ctx) err('VWA ' + vwa.word_key + ' / ' + name + ' [nul]: proof_ctx manquant');
        }
      }

      ok('VWA ' + vwa.word_key + ' (' + axes.concept_chosen + ') OK');
    }
  }

  console.log('\n=== RÉSULTAT ===');
  console.log(errors + ' erreurs, ' + warnings + ' warnings');
  if (errors === 0) console.log('✅ VALIDATION RÉUSSIE');
  else console.log('❌ VALIDATION ÉCHOUÉE');
})();
