const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

const VERSES = [
  { num: 211, vid: 218, aid: 577 },
  { num: 212, vid: 219, aid: 578 },
  { num: 213, vid: 220, aid: 579 },
  { num: 214, vid: 221, aid: 582 },
  { num: 215, vid: 222, aid: 580 },
  { num: 216, vid: 223, aid: 581 },
  { num: 217, vid: 224, aid: 585 },
  { num: 218, vid: 225, aid: 583 },
  { num: 219, vid: 226, aid: 584 },
  { num: 220, vid: 227, aid: 587 }
];

let totalErrors = 0, totalWarnings = 0;
function err(msg) { console.error(`  ❌ ${msg}`); totalErrors++; }
function warn(msg) { console.warn(`  ⚠️  ${msg}`); totalWarnings++; }
function ok(msg) { console.log(`  ✅ ${msg}`); }

async function main() {
  console.log('=== VALIDATION PIPELINE V211-220 ===\n');

  // Verifier d'abord la racine hbt_h
  console.log('--- RACINE hbt_h (حبط) ---');
  const { data: hbt } = await supabase.from('word_analyses').select('*').eq('word_key','hbt_h').single();
  if (!hbt) {
    err('word_analyses hbt_h NOT FOUND');
  } else {
    ok(`word_analyses hbt_h id=${hbt.id} root_ar="${hbt.root_ar}"`);
    const { data: meanings } = await supabase.from('word_meanings').select('*').eq('analysis_id', hbt.id);
    if (!meanings || meanings.length < 2) {
      err(`word_meanings hbt_h: seulement ${(meanings||[]).length} sens (attendu >= 2)`);
    } else {
      ok(`word_meanings hbt_h: ${meanings.length} sens`);
    }
    const { count: dpCount } = await supabase.from('word_daily').select('*', { count: 'exact', head: true }).eq('analysis_id', hbt.id);
    if (!dpCount || dpCount < 3) {
      err(`word_daily hbt_h: seulement ${dpCount} phrases (attendu >= 3)`);
    } else {
      ok(`word_daily hbt_h: ${dpCount} phrases`);
    }
  }

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
  console.log(`VALIDATION TERMINÉE — V211-220`);
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
