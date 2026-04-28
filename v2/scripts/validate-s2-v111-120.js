const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

const VERSES = [
  { num: 111, vid: 118, aid: 474 },
  { num: 112, vid: 119, aid: 478 },
  { num: 113, vid: 120, aid: 482 },
  { num: 114, vid: 121, aid: 481 },
  { num: 115, vid: 122, aid: 479 },
  { num: 116, vid: 123, aid: 480 },
  { num: 117, vid: 124, aid: 484 },
  { num: 118, vid: 125, aid: 486 },
  { num: 119, vid: 126, aid: 483 },
  { num: 120, vid: 127, aid: 487 }
];

let totalErrors = 0;
let totalWarnings = 0;

function err(msg) { console.error(`  ❌ ${msg}`); totalErrors++; }
function warn(msg) { console.warn(`  ⚠️  ${msg}`); totalWarnings++; }
function ok(msg) { console.log(`  ✅ ${msg}`); }

async function main() {
  console.log('=== VALIDATION PIPELINE V111-120 ===\n');

  for (const v of VERSES) {
    console.log(`\n--- VERSET 2:${v.num} (vid=${v.vid}, aid=${v.aid}) ---`);

    // 1. Check verse_analyses
    const { data: va } = await supabase.from('verse_analyses').select('*').eq('id', v.aid).single();
    if (!va) { err(`verse_analyses id=${v.aid} NOT FOUND`); continue; }

    // Check segments
    if (!va.segments || va.segments.length === 0) {
      err('segments vides');
    } else {
      const segs = va.segments;
      const contentSegs = segs.filter(s => !s.is_particle && s.word_key);
      ok(`${segs.length} segments (${contentSegs.length} contenu)`);

      // Check segment fields
      for (const s of contentSegs) {
        if (!s.sense_retenu) warn(`segment ${s.word_key} pos=${s.position}: sense_retenu manquant`);
        if (!s.fr) warn(`segment ${s.word_key} pos=${s.position}: fr manquant`);
        if (s.position === undefined) warn(`segment ${s.word_key}: position manquante`);
      }
    }

    // Check translation
    if (!va.translation_arab) err('translation_arab manquante');
    else ok('translation_arab présente');

    if (!va.full_translation) err('full_translation (Hamidullah) manquante');
    else ok('full_translation présente');

    // Check translation_explanation structure
    const te = va.translation_explanation || '';
    if (!te.includes('§DEMARCHE§')) err('§DEMARCHE§ manquante');
    else ok('§DEMARCHE§ présente');
    if (!te.includes('§JUSTIFICATION§')) err('§JUSTIFICATION§ manquante');
    else ok('§JUSTIFICATION§ présente');
    if (!te.includes('§CRITIQUE§')) err('§CRITIQUE§ manquante');
    else ok('§CRITIQUE§ présente');

    // 2. Check VWA
    const { data: vwas } = await supabase.from('verse_word_analyses')
      .select('*').eq('verse_id', v.vid);

    if (!vwas || vwas.length === 0) {
      err('AUCUNE verse_word_analyses');
      continue;
    }
    ok(`${vwas.length} verse_word_analyses`);

    for (const w of vwas) {
      const axes = w.analysis_axes;
      const prefix = `VWA ${w.word_key} pos=${w.position}`;

      // Check sense_chosen
      if (!w.sense_chosen) err(`${prefix}: sense_chosen manquant (colonne)`);
      if (!axes) { err(`${prefix}: analysis_axes NULL`); continue; }
      if (!axes.sense_chosen) err(`${prefix}: sense_chosen manquant dans JSONB`);
      if (!axes.concept_chosen) err(`${prefix}: concept_chosen manquant dans JSONB`);

      // Check sense_chosen match
      if (w.sense_chosen && axes.sense_chosen && w.sense_chosen !== axes.sense_chosen) {
        warn(`${prefix}: sense_chosen mismatch: col="${w.sense_chosen}" vs jsonb="${axes.sense_chosen}"`);
      }

      // Check concepts
      if (!axes.concepts || Object.keys(axes.concepts).length === 0) {
        err(`${prefix}: concepts vides`);
        continue;
      }

      const concepts = axes.concepts;
      const conceptNames = Object.keys(concepts);
      let hasRetenu = false;

      for (const [cname, cdata] of Object.entries(concepts)) {
        if (cdata.status === 'retenu') hasRetenu = true;

        if (cdata.status === 'retenu' || cdata.status === 'probable' || cdata.status === 'peu_probable') {
          // Check 5 axes exist and have sufficient length
          for (const axe of ['axe1_verset','axe2_voisins','axe3_sourate','axe4_coherence','axe5_frequence']) {
            if (!cdata[axe]) {
              err(`${prefix} concept "${cname}" (${cdata.status}): ${axe} MANQUANT`);
            } else if (cdata[axe].length < 100) {
              warn(`${prefix} concept "${cname}" (${cdata.status}): ${axe} TROP COURT (${cdata[axe].length} chars)`);
            }
          }
          // Check proof_ctx
          if (!cdata.proof_ctx) warn(`${prefix} concept "${cname}" (${cdata.status}): proof_ctx manquant`);
        }

        if (cdata.status === 'nul') {
          // Nul should have proof_ctx but no axes
          if (!cdata.proof_ctx) warn(`${prefix} concept "${cname}" (nul): proof_ctx manquant`);
        }

        // Check no Arabic script in axes
        const arabicRegex = /[\u0600-\u06FF\u0750-\u077F\uFB50-\uFDFF\uFE70-\uFEFF]/;
        for (const field of ['axe1_verset','axe2_voisins','axe3_sourate','axe4_coherence','axe5_frequence','proof_ctx']) {
          if (cdata[field] && arabicRegex.test(cdata[field])) {
            err(`${prefix} concept "${cname}": ARABE détecté dans ${field}`);
          }
        }
      }

      if (!hasRetenu) err(`${prefix}: AUCUN concept retenu`);

      // Check concept_chosen matches a retenu concept
      if (axes.concept_chosen && concepts[axes.concept_chosen]) {
        if (concepts[axes.concept_chosen].status !== 'retenu') {
          err(`${prefix}: concept_chosen "${axes.concept_chosen}" n'est pas retenu (status=${concepts[axes.concept_chosen].status})`);
        }
      } else if (axes.concept_chosen) {
        warn(`${prefix}: concept_chosen "${axes.concept_chosen}" pas trouvé dans concepts`);
      }
    }
  }

  // 3. Summary
  console.log('\n\n========================================');
  console.log(`VALIDATION TERMINÉE`);
  console.log(`  Erreurs: ${totalErrors}`);
  console.log(`  Avertissements: ${totalWarnings}`);
  console.log('========================================');
}

main().catch(console.error);
