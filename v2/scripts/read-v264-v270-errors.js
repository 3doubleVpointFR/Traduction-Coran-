const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

async function main() {
  // V264 vid=271 : ray pos=15, sfw pos=29
  const { data: vwas264 } = await supabase
    .from('verse_word_analyses')
    .select('id, word_key, position, sense_chosen, analysis_axes')
    .eq('verse_id', 271)
    .in('word_key', ['ray', 'sfw']);

  console.log('=== V264 (vid=271) — ray et sfw ===');
  for (const w of (vwas264 || [])) {
    console.log(`\n--- ${w.word_key} pos=${w.position} id=${w.id} ---`);
    console.log('concept_chosen:', w.analysis_axes?.concept_chosen);
    console.log('sense_chosen:', w.sense_chosen);
    const concepts = w.analysis_axes?.concepts || {};
    for (const [name, data] of Object.entries(concepts)) {
      console.log(`  concept: "${name}" → status: ${data.status}`);
    }
  }

  // V270 vid=277 : ndhr pos=7
  const { data: vwas270 } = await supabase
    .from('verse_word_analyses')
    .select('id, word_key, position, sense_chosen, analysis_axes')
    .eq('verse_id', 277)
    .eq('word_key', 'ndhr');

  console.log('\n=== V270 (vid=277) — ndhr ===');
  for (const w of (vwas270 || [])) {
    console.log(`\n--- ${w.word_key} pos=${w.position} id=${w.id} ---`);
    console.log('concept_chosen:', w.analysis_axes?.concept_chosen);
    console.log('sense_chosen:', w.sense_chosen);
    const concepts = w.analysis_axes?.concepts || {};
    for (const [name, data] of Object.entries(concepts)) {
      console.log(`  concept: "${name}" → status: ${data.status}`);
    }
  }
}
main().catch(console.error);
