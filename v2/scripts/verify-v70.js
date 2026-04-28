const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

async function run() {
  const { data: va } = await db.from('verse_analyses').select('segments, translation_explanation').eq('verse_id', 363).single();
  const segs = typeof va.segments === 'string' ? JSON.parse(va.segments) : va.segments;
  const seg8 = segs.find(s => s.position === 8);
  console.log('V70 seg pos=8:');
  console.log(JSON.stringify(seg8, null, 2));

  const { data: vwa } = await db.from('verse_word_analyses').select('word_key, sense_chosen, analysis_axes').eq('verse_id', 363).eq('position', 8).single();
  console.log('\nVWA pos=8:');
  console.log('  word_key:', vwa.word_key);
  console.log('  sense_chosen:', vwa.sense_chosen);
  const a = typeof vwa.analysis_axes === 'string' ? JSON.parse(vwa.analysis_axes) : vwa.analysis_axes;
  console.log('  concept_chosen:', a.concept_chosen);

  // Sens 'témoigner' existe-t-il dans word_meanings de shhd ?
  const { data: wa } = await db.from('word_analyses').select('id').eq('word_key', 'shhd').single();
  const { data: wmAll } = await db.from('word_meanings').select('sense, concept, meaning_type').eq('analysis_id', wa.id);
  const temoigner = wmAll.find(m => m.sense === 'témoigner');
  console.log('\n"témoigner" dans shhd word_meanings:');
  console.log('  concept:', temoigner?.concept);
  console.log('  meaning_type:', temoigner?.meaning_type);

  // Check si DEM/JUSTIFICATION mentionnent les anciens concepts de shh
  const expl = va.translation_explanation;
  const demStart = expl.indexOf('§DEMARCHE§');
  const justStart = expl.indexOf('§JUSTIFICATION§');
  const critStart = expl.indexOf('§CRITIQUE§');
  const demarche = expl.substring(demStart, justStart);
  const justification = expl.substring(justStart, critStart);

  console.log('\n=== Concepts mentionnés dans DEM/JUSTIFICATION ===');
  const oldConcepts = ['Témoignage/Attestation', 'Présence/Assistance'];
  const newConcepts = ['Témoignage/Déclaration', 'Présence/Constatation'];
  for (const c of oldConcepts) {
    if (demarche.includes(c) || justification.includes(c)) console.log('  ⚠ OLD "' + c + '" encore présent');
  }
  for (const c of newConcepts) {
    if (demarche.includes(c) || justification.includes(c)) console.log('  ✓ NEW "' + c + '" présent');
  }

  // Extract paragraph for témoigner
  console.log('\n=== Paragraphe DEM sur tashhadūna ===');
  const demParas = demarche.split(/\n\n/);
  for (const p of demParas) {
    if (/tashhad|témoign/i.test(p)) console.log(p);
  }
  console.log('\n=== Paragraphe JUSTIFICATION sur témoigner ===');
  const justParas = justification.split(/\n\n/);
  for (const p of justParas) {
    if (/témoign/i.test(p)) console.log(p);
  }
}
run().catch(console.error);
