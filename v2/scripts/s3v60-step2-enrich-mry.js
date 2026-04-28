// Enrich mry (id=691) with additional Lane's senses.
// Current: 3 senses in 1 concept "Doute/Contestation":
//   - douter (retenu)
//   - contestation (exclu)
//   - dispute (exclu)
// Lane's adds:
//   - mārā (3rd form) = He disputed with him obstinately (contention en opposition)
//   - tamārā (6th form) = dispute together
//   - imtarā (8th form) = He doubted (Kur 43:61)
//   - tamrī (1st form) = The wind draws forth the clouds (extraire, tirer)
//
// Plan:
//   - Keep the 3 existing senses, ADD new ones, never delete.
//   - Restructure: two concepts remain because senses existing are all in "Doute/Contestation".
//     Actually "douter" and "dispute/contestation" are philosophically different enough to split:
//     - Concept "Doute/Incertitude" — état intérieur de l'esprit qui n'a pas de certitude
//     - Concept "Dispute/Contestation" — acte extérieur d'opposition verbale
//     - Concept "Extraction/Tirer" — sens physique premier (le vent tire les nuages)
//   - BUT we cannot modify existing senses' concept (rule: no modification of ≥5 senses).
//     Current has < 5 senses, so we CAN restructure. But rule says "AJOUTER, jamais supprimer".
//     So we add new senses and optionally update concept grouping on the existing 3.
//     Safest: keep the 3 existing with their concept, ADD new ones in new concepts.
//
// Final plan:
//   Concept existing: "Doute/Contestation" (3 senses, keep as is)
//   New concept: "Extraction/Tirer" — le vent tire les nuages (sens physique premier, Lane's tamrī)
//     + "tirer" (nul) — physique
//     + "extraire" (nul)
//   New concept: "Dispute/Opposition obstinée" — acte actif dirigé vers autrui
//     + "disputer obstinément" (probable) — Lane's: mārāhu = disputer avec obstination, seulement en opposition à ce qui a été dit
//     + "contredire" (probable)
//
// Actually the rule says concepts should be philosophically distinct. "Doute/Contestation" lumps together
// two different philosophical realities: l'état de doute intérieur vs l'acte de contestation extérieure.
// Since this root is not yet enriched and we are adding Lane's, we will ADD the distinction through new concepts.

const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

const analysis_id = 691; // mry

// New senses to ADD (do not touch existing ones)
const newSenses = [
  // Concept: Extraction/Tirer — sens physique Lane's (tamrī al-rīḥu al-saḥāb)
  {
    analysis_id,
    sense: 'tirer',
    status: 'nul',
    concept: 'Extraction/Tirer',
    description: "Acte physique d'extraire quelque chose de son lieu. Le vent qui tire les nuages illustre le sens concret premier : une force qui arrache et déplace ce qui était sur place. C'est un acte extérieur, directionnel, qui sort de l'agent et atteint l'objet tiré.",
    meaning_type: 'etymology',
    display_order: 4,
    proof_ctx: "Le Lane's donne le premier sens physique : الرِّيحُ تَمْرِى السَّحَابَ — le vent tire/extrait les nuages. C'est l'étymologie concrète de la racine."
  },
  {
    analysis_id,
    sense: 'extraire',
    status: 'nul',
    concept: 'Extraction/Tirer',
    description: "Sortir ce qui est contenu en l'attirant au-dehors.",
    meaning_type: 'etymology',
    display_order: 5,
    proof_ctx: "Extension du sens premier : extraire, faire sortir."
  },
  // Concept: Dispute/Opposition obstinée — forme III (mārāhu) et VI (tamārā)
  {
    analysis_id,
    sense: 'disputer obstinément',
    status: 'peu_probable',
    concept: 'Dispute/Opposition obstinée',
    description: "Acte verbal dirigé vers autrui consistant à contester ce qui a été dit, avec ténacité. C'est un acte extérieur qui sort de celui qui dispute et atteint l'interlocuteur. La dispute se fait toujours en opposition (pas pour commencer un débat) et suppose un échange qui s'installe dans la durée.",
    meaning_type: 'etymology',
    display_order: 6,
    proof_ctx: "Le Lane's donne pour مَارَاهُ (forme III) : He disputed with him, or did so obstinately — spécifiquement en opposition à ce qui a été dit, pas pour commencer une discussion. Forme VI (tamārā) = se disputer ensemble."
  },
  {
    analysis_id,
    sense: 'contredire',
    status: 'peu_probable',
    concept: 'Dispute/Opposition obstinée',
    description: "Réfuter ou s'opposer verbalement à ce qui est affirmé par autrui.",
    meaning_type: 'etymology',
    display_order: 7,
    proof_ctx: "Extension naturelle du sens de dispute : contredire ce qui est avancé."
  }
];

async function run() {
  console.log('=== ENRICHISSEMENT mry (id=691) ===');
  console.log(`Sens à ajouter : ${newSenses.length}`);

  // Check existing senses (don't touch)
  const { data: existing } = await db.from('word_meanings').select('id, sense, concept').eq('analysis_id', analysis_id);
  console.log(`Existant : ${existing.length} sens`);
  for (const e of existing) console.log(`  - ${e.sense} [${e.concept}]`);

  // Insert new senses
  const { data: ins, error } = await db.from('word_meanings').insert(newSenses).select();
  if (error) { console.error('INSERT err:', error); process.exit(1); }
  console.log(`\nINSÉRÉ : ${ins.length} nouveaux sens`);
  for (const r of ins) console.log(`  + id=${r.id} ${r.sense} [${r.concept}] ${r.status}`);

  // Update analysis_step from 'tagged' to 'etymology'
  const { error: upErr } = await db.from('word_analyses').update({ analysis_step: 'etymology' }).eq('id', analysis_id);
  if (upErr) console.error('UPDATE err:', upErr);
  console.log('\nanalysis_step → etymology');

  // Final verify
  const { data: final } = await db.from('word_meanings').select('sense, status, concept, display_order').eq('analysis_id', analysis_id).order('display_order');
  console.log(`\n=== FINAL mry count=${final.length} ===`);
  const by = {};
  for (const m of final) { (by[m.concept] ||= []).push(`${m.sense} (${m.status})`); }
  for (const [c, l] of Object.entries(by)) console.log(`  [${c}] ${l.join(' | ')}`);
}
run().catch(console.error);
