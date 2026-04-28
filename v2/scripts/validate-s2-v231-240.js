const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

const VERSES = [
  { num: 231, vid: 238, aid: 596 },
  { num: 232, vid: 239, aid: 600 },
  { num: 233, vid: 240, aid: 598 },
  { num: 234, vid: 241, aid: 599 },
  { num: 235, vid: 242, aid: 605 },
  { num: 236, vid: 243, aid: 602 },
  { num: 237, vid: 244, aid: 604 },
  { num: 238, vid: 245, aid: 601 },
  { num: 239, vid: 246, aid: 603 },
  { num: 240, vid: 247, aid: 610 }
];

let totalErrors = 0, totalWarnings = 0;
function err(msg) { console.error(`  ❌ ${msg}`); totalErrors++; }
function warn(msg) { console.warn(`  ⚠️  ${msg}`); totalWarnings++; }
function ok(msg) { console.log(`  ✅ ${msg}`); }

async function main() {
  console.log('=== VALIDATION PIPELINE V231-240 ===\n');

  for (const v of VERSES) {
    console.log(`\n--- VERSET 2:${v.num} (vid=${v.vid}, aid=${v.aid}) ---`);

    const { data: va } = await supabase.from('verse_analyses').select('*').eq('id', v.aid).single();
    if (!va) { err(`verse_analyses id=${v.aid} NOT FOUND`); continue; }

    if (!va.segments || va.segments.length === 0) err('segments vides');
    else {
      const contentSegs = va.segments.filter(s => !s.is_particle && s.word_key);
      ok(`${va.segments.length} segments (${contentSegs.length} contenu)`);
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
      if (!axes) { err(`${prefix}: analysis_axes NULL`); continue; }
      if (!axes.concept_chosen) err(`${prefix}: concept_chosen manquant`);
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
        }
        for (const field of ['axe1_verset','axe2_voisins','axe3_sourate','axe4_coherence','axe5_frequence','proof_ctx']) {
          if (cdata[field] && arabicRegex.test(cdata[field])) err(`${prefix} "${cname}": ARABE dans ${field}`);
        }
      }
      if (!hasRetenu) err(`${prefix}: AUCUN concept retenu`);
      if (axes.concept_chosen && axes.concepts[axes.concept_chosen]) {
        if (axes.concepts[axes.concept_chosen].status !== 'retenu')
          err(`${prefix}: concept_chosen "${axes.concept_chosen}" n'est pas retenu`);
        else ok(`${prefix} → ${axes.concept_chosen} (${w.sense_chosen})`);
      } else if (axes.concept_chosen) {
        warn(`${prefix}: concept_chosen "${axes.concept_chosen}" pas trouvé dans concepts`);
      }
    }
  }

  console.log('\n\n========================================');
  console.log(`VALIDATION TERMINÉE — V231-240`);
  console.log(`  Erreurs: ${totalErrors}`);
  console.log(`  Avertissements: ${totalWarnings}`);
  if (totalErrors === 0 && totalWarnings === 0) {
    console.log('  🟢 PARFAIT — 0 erreur, 0 avertissement');
  } else if (totalErrors === 0) {
    console.log('  🟡 OK avec avertissements');
  } else {
    console.log('  🔴 ERREURS A CORRIGER');
  }
  console.log('========================================');
}
main().catch(console.error);
