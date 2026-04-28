const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

async function main() {
  const { data, error } = await supabase
    .from('verse_word_analyses')
    .select('word_key, position, analysis_axes')
    .eq('verse_id', 265)
    .eq('word_key', 'hdy')
    .eq('position', 41)
    .single();

  if (error) { console.log('ERR', error.message); return; }
  console.log('Raw analysis_axes:');
  console.log(JSON.stringify(data.analysis_axes, null, 2));
}
main().catch(console.error);
