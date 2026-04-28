const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

async function main() {
  const keys = ['shy','mny','ann','allh','alh','šytn','ðlk','hum','fyh','ḫld','dhhy','ant','lhm','hm m','hmm','alk','ma','kbr'];
  const { data: was } = await supabase.from('word_analyses').select('id,word_key,root_ar,root_transliteration').in('word_key', keys);
  console.log('Found in word_analyses:');
  for (const wa of (was||[])) {
    const { count } = await supabase.from('word_meanings').select('*',{count:'exact',head:true}).eq('analysis_id',wa.id).not('concept','is',null);
    console.log(`  "${wa.word_key}" (id=${wa.id}, root=${wa.root_ar}) → ${count} concepts`);
  }
  const foundKeys = (was||[]).map(w=>w.word_key);
  const missing = keys.filter(k => !foundKeys.includes(k));
  console.log('\nNot in word_analyses:', missing);
}
main().catch(console.error);
