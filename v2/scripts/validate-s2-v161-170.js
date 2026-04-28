const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

const VERSES = [
  { num: 161, vid: 168, aid: 527 },
  { num: 162, vid: 169, aid: 526 },
  { num: 163, vid: 170, aid: 529 },
  { num: 164, vid: 171, aid: 531 },
  { num: 165, vid: 172, aid: 530 },
  { num: 166, vid: 173, aid: 532 },
  { num: 167, vid: 174, aid: 534 },
  { num: 168, vid: 175, aid: 533 },
  { num: 169, vid: 176, aid: 535 },
  { num: 170, vid: 177, aid: 537 }
];

let totalErrors = 0, totalWarnings = 0;
function err(msg) { console.error(`  ❌ ${msg}`); totalErrors++; }
function warn(msg) { console.warn(`  ⚠️  ${msg}`); totalWarnings++; }
function ok(msg) { console.log(`  ✅ ${msg}`); }

async function main() {
  console.log('=== VALIDATION PIPELINE V161-170 ===\n');

  for (const v of VERSES) {
    console.log(`\n--- VERSET 2:${v.num} (vid=${v.vid}, aid=${v.aid}) ---`);

    const { data: va } = await supabase.from('verse_analyses').select('*').eq('id', v.aid).single();
    if (!va) { err(`verse_analyses id=${v.aid} NOT FOUND`); continue; }

    if (!va.segments || va.segments.length === 0) err('segments vides');
    else {
      const contentSegs = va.segments.filter(s => !s.is_particle && s.word_key);
      ok(`${va.segments.length} segments (${contentSegs.length} contenu)`);
      for (const s of contentSegs) {
        if (!s.sense_retenu) warn(`segment ${s.word_key} pos=${s.position}: sense_retenu manquant`);
        if (!s.fr) warn(`segment ${s.word_key} pos=${s.position}: fr manquant`);
        if (s.position === undefined) warn(`segment ${s.word_key}: position manquante`);
      }
    }

    if (!va.translation_arab) err('translation_arab manquante');
    else ok('translation_arab présente');
    if (!va.full_translation) err('full_translation manquante');
    else ok('full_translation présente');

    const te = va.translation_explanation || '';
    if (!te.includes('§DEMARCHE§')) err('§DEMARCHE§ manquante');
    else ok('§DEMARCHE§ présente');
    if (!te.includes('§JUSTIFICATION§')) err('§JUSTIFICATION§ manquante');
    else ok('§JUSTIFICATION§ présente');
    if (!te.includes('§CRITIQUE§')) err('§CRITIQUE§ manquante');
    else ok('§CRITIQUE§ présente');

    const { data: vwas } = await supabase.from('verse_word_analyses').select('*').eq('verse_id', v.vid);
    if (!vwas || vwas.length === 0) { err('AUCUNE verse_word_analyses'); continue; }
    ok(`${vwas.length} verse_word_analyses`);

    for (const w of vwas) {
      const axes = w.analysis_axes;
      const prefix = `VWA ${w.word_key} pos=${w.position}`;
      if (!w.sense_chosen) err(`${prefix}: sense_chosen manquant (colonne)`);
      if (!axes) { err(`${prefix}: analysis_axes NULL`); continue; }
      if (!axes.sense_chosen) err(`${prefix}: sense_chosen manquant dans JSONB`);
      if (!axes.concept_chosen) err(`${prefix}: concept_chosen manquant dans JSONB`);
      if (w.sense_chosen && axes.sense_chosen && w.sense_chosen !== axes.sense_chosen)
        warn(`${prefix}: sense_chosen mismatch`);
      if (!axes.concepts || Object.keys(axes.concepts).length === 0) { err(`${prefix}: concepts vides`); continue; }

      let hasRetenu = false;
      const arabicRegex = /[\u0600-\u06FF\u0750-\u077F\uFB50-\uFDFF\uFE70-\uFEFF]/;
      for (const [cname, cdata] of Object.entries(axes.concepts)) {
        if (cdata.status === 'retenu') hasRetenu = true;
        if (['retenu','probable','peu_probable'].includes(cdata.status)) {
          for (const axe of ['axe1_verset','axe2_voisins','axe3_sourate','axe4_coherence','axe5_frequence']) {
            if (!cdata[axe]) err(`${prefix} "${cname}" (${cdata.status}): ${axe} MANQUANT`);
            else if (cdata[axe].length < 100) warn(`${prefix} "${cname}" (${cdata.status}): ${axe} TROP COURT (${cdata[axe].length} chars)`);
          }
          if (!cdata.proof_ctx) warn(`${prefix} "${cname}" (${cdata.status}): proof_ctx manquant`);
        }
        if (cdata.status === 'nul' && !cdata.proof_ctx) warn(`${prefix} "${cname}" (nul): proof_ctx manquant`);
        for (const field of ['axe1_verset','axe2_voisins','axe3_sourate','axe4_coherence','axe5_frequence','proof_ctx']) {
          if (cdata[field] && arabicRegex.test(cdata[field])) err(`${prefix} "${cname}": ARABE dans ${field}`);
        }
      }
      if (!hasRetenu) err(`${prefix}: AUCUN concept retenu`);
      if (axes.concept_chosen && axes.concepts[axes.concept_chosen]) {
        if (axes.concepts[axes.concept_chosen].status !== 'retenu')
          err(`${prefix}: concept_chosen "${axes.concept_chosen}" n'est pas retenu`);
      } else if (axes.concept_chosen) {
        warn(`${prefix}: concept_chosen "${axes.concept_chosen}" pas trouvé dans concepts`);
      }
    }
  }

  console.log('\n\n========================================');
  console.log(`VALIDATION TERMINÉE`);
  console.log(`  Erreurs: ${totalErrors}`);
  console.log(`  Avertissements: ${totalWarnings}`);
  console.log('========================================');
}
main().catch(console.error);
