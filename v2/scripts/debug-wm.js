const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

async function main() {
  // Test simple: colonnes de word_meanings
  const { data: sample, error } = await supabase
    .from('word_meanings')
    .select('*')
    .limit(3);
  if (error) console.log('ERROR:', error);
  if (sample && sample[0]) {
    console.log('Colonnes word_meanings:', Object.keys(sample[0]));
    for (const r of sample) console.log(JSON.stringify(r).substring(0,250));
  }

  // Test: chercher sdq (analysis_id=384)
  const { data: sdqData, error: e2 } = await supabase
    .from('word_meanings')
    .select('*')
    .eq('analysis_id', 384)
    .limit(5);
  if (e2) console.log('ERROR sdq:', e2);
  console.log('\n=== sdq (aid=384) word_meanings ===', sdqData?.length);
  for (const r of (sdqData||[])) console.log(JSON.stringify(r).substring(0,300));
}
main().catch(console.error);
