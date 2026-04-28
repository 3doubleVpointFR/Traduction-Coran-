const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

async function main() {
  // Regarder V271 (vid=278, aid=638) en détail
  const { data: va } = await supabase
    .from('verse_analyses')
    .select('*')
    .eq('id', 638)
    .single();

  console.log('=== V271 (aid=638) ===');
  console.log('Keys:', Object.keys(va));
  console.log('translation_arab:', va.translation_arab);
  console.log('full_translation:', va.full_translation);
  console.log('translation_explanation:', va.translation_explanation ? va.translation_explanation.substring(0,100)+'...' : 'NULL');
  console.log('\nSegments (', (va.segments||[]).length, '):');
  for (const s of (va.segments||[])) {
    console.log(JSON.stringify(s));
  }
}
main().catch(console.error);
