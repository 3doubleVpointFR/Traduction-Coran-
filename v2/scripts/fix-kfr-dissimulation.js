/**
 * Standardise la traduction de la racine k-f-r en "dissimulation"/"dissimuler"
 * dans toute la BDD : segments, VWA, translation_arab, translation_explanation, proof_ctx.
 *
 * Versets concernés : V52, V56, V70, V72, V80 (sourate 3).
 */
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

// Mapping verset → mot-cible
const TARGET_PER_VERSE = {
  345: { sense: 'dissimuler', segFr: 'la dissimulation' },     // V52 (al-kufra, nom)
  349: { sense: 'dissimuler', segFr: 'ont dissimulé' },        // V56 (kafarū, verbe accompli pl.)
  363: { sense: 'dissimuler', segFr: 'dissimulez-vous' },      // V70 (takfurūna, verbe inaccompli pl.)
  365: { sense: 'dissimuler', segFr: 'dissimulez-le' },        // V72 (kfurū, impératif pl.)
  373: { sense: 'dissimuler', segFr: 'la dissimulation' },     // V80 (al-kufri, nom)
};

// Remplacements dans les textes courants (translation_arab)
const TEXT_REPLACEMENTS = [
  // V52
  [345, [
    [/\bla couverture venant d'eux\b/g, 'la dissimulation venant d\'eux'],
    [/\bla couverture\b/g, 'la dissimulation'],
  ]],
  // V56 — pas de couverture/recouvrir dans translation_arab (utilise "ont rejeté")
  [349, [
    [/\bceux qui ont rejeté\b/g, 'ceux qui ont dissimulé [la vérité]'],
    [/\bont rejeté\b/g, 'ont dissimulé [la vérité]'],
  ]],
  // V70
  [363, [
    [/\brecouvrez-vous\b/g, 'dissimulez-vous'],
    [/\brecouvrir\b/g, 'dissimuler'],
  ]],
  // V72
  [365, [
    [/\bet recouvrez-le\b/g, 'et dissimulez-le'],
    [/\brecouvrez-le\b/g, 'dissimulez-le'],
  ]],
  // V80
  [373, [
    [/\bvous ordonnerait-il par la couverture\b/g, 'vous ordonnerait-il la dissimulation'],
    [/\bla couverture \[de la vérité\]\b/g, 'la dissimulation [de la vérité]'],
    [/\bla couverture\b/g, 'la dissimulation'],
    [/\bpar la couverture\b/g, 'la dissimulation'],
  ]],
];

// Replacements pour les explications (DEMARCHE/JUSTIFICATION/CRITIQUE)
// On remplace partout :
//  - "couverture" → "dissimulation" (sauf dans des phrases méta-théoriques sur l'étymologie)
//  - "recouvrir" verbe → "dissimuler"
const EXPL_REPLACEMENTS_GLOBAL = [
  [/« couverture \[de la vérité\] »/g, '« dissimulation [de la vérité] »'],
  [/« par la couverture \[de la vérité\] »/g, '« la dissimulation [de la vérité] »'],
  [/« par la couverture »/g, '« la dissimulation »'],
  [/« la couverture »/g, '« la dissimulation »'],
  [/« recouvrir »/g, '« dissimuler »'],
  [/« recouvrez-vous »/g, '« dissimulez-vous »'],
  [/« recouvrez-le »/g, '« dissimulez-le »'],
  [/Le choix « couverture/g, 'Le choix « dissimulation'],
  [/notre choix « couverture/g, 'notre choix « dissimulation'],
  [/par la couverture/g, 'la dissimulation'],
];

async function run() {
  // ============== 1. Segments ==============
  for (const [vid, { sense, segFr }] of Object.entries(TARGET_PER_VERSE)) {
    const r = await db.from('verse_analyses').select('segments').eq('verse_id', parseInt(vid)).single();
    if (!r.data?.segments) continue;
    const newSegs = r.data.segments.map(s => {
      if (s.word_key === 'kfr') {
        return { ...s, fr: segFr, sense_retenu: sense };
      }
      return s;
    });
    await db.from('verse_analyses').update({ segments: newSegs }).eq('verse_id', parseInt(vid));
    console.log(`✓ vid=${vid} segments kfr → "${segFr}"`);
  }

  // ============== 2. VWA ==============
  const { data: vwas } = await db.from('verse_word_analyses').select('id, verse_id, analysis_axes').eq('word_key', 'kfr');
  for (const v of vwas) {
    const target = TARGET_PER_VERSE[v.verse_id];
    if (!target) continue;
    if (v.analysis_axes) {
      v.analysis_axes.sense_chosen = target.sense;
      // Le concept doit être "Couverture/Dissimulation" (déjà le bon)
      if (v.analysis_axes.concepts) {
        for (const c of Object.keys(v.analysis_axes.concepts)) {
          v.analysis_axes.concepts[c].status = (c === 'Couverture/Dissimulation') ? 'retenu' : 'nul';
        }
      }
      await db.from('verse_word_analyses').update({
        sense_chosen: target.sense,
        analysis_axes: v.analysis_axes,
      }).eq('id', v.id);
      console.log(`✓ VWA vid=${v.verse_id} sense_chosen → "${target.sense}"`);
    }
  }

  // ============== 3. translation_arab ==============
  for (const [vid, replacements] of TEXT_REPLACEMENTS) {
    const r = await db.from('verse_analyses').select('translation_arab').eq('verse_id', vid).single();
    if (!r.data?.translation_arab) continue;
    let t = r.data.translation_arab;
    const before = t;
    for (const [re, by] of replacements) t = t.replace(re, by);
    if (t !== before) {
      await db.from('verse_analyses').update({ translation_arab: t }).eq('verse_id', vid);
      console.log(`✓ vid=${vid} translation_arab mis à jour`);
    }
  }

  // ============== 4. translation_explanation ==============
  for (const vid of Object.keys(TARGET_PER_VERSE).map(Number)) {
    const r = await db.from('verse_analyses').select('translation_explanation').eq('verse_id', vid).single();
    if (!r.data?.translation_explanation) continue;
    let t = r.data.translation_explanation;
    const before = t;
    for (const [re, by] of EXPL_REPLACEMENTS_GLOBAL) t = t.replace(re, by);
    // Substitutions plus douces (en dehors des guillemets)
    t = t.replace(/\bcouverture \[de la vérité\]/g, 'dissimulation [de la vérité]');
    if (t !== before) {
      await db.from('verse_analyses').update({ translation_explanation: t }).eq('verse_id', vid);
      console.log(`✓ vid=${vid} translation_explanation mis à jour`);
    }
  }

  // ============== 5. proof_ctx dans VWA ==============
  for (const v of vwas) {
    if (!v.analysis_axes?.concepts) continue;
    let changed = false;
    for (const c of Object.keys(v.analysis_axes.concepts)) {
      const ctx = v.analysis_axes.concepts[c].proof_ctx || '';
      let newCtx = ctx
        .replace(/« couverture \[de la vérité\] »/g, '« dissimulation [de la vérité] »')
        .replace(/« la couverture »/g, '« la dissimulation »')
        .replace(/« par la couverture »/g, '« la dissimulation »')
        .replace(/le choix « couverture/g, 'le choix « dissimulation')
        .replace(/sens « couverture »/g, 'sens « dissimulation »')
        .replace(/sens « couvrir »/g, 'sens « dissimuler »')
        .replace(/par la couverture/g, 'la dissimulation');
      if (newCtx !== ctx) {
        v.analysis_axes.concepts[c].proof_ctx = newCtx;
        changed = true;
      }
    }
    if (changed) {
      await db.from('verse_word_analyses').update({ analysis_axes: v.analysis_axes }).eq('id', v.id);
      console.log(`✓ VWA vid=${v.verse_id} proof_ctx mis à jour`);
    }
  }

  console.log('\n✅ Standardisation kfr → dissimulation/dissimuler terminée');
}

run().catch(e => { console.error(e); process.exit(1); });
