const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

async function main() {
  // Lire un enregistrement de word_analyses pour voir les colonnes
  const { data: sample } = await supabase
    .from('word_analyses')
    .select('*')
    .limit(3);
  console.log('=== Colonnes word_analyses ===');
  if (sample && sample[0]) console.log('Keys:', Object.keys(sample[0]));
  for (const r of (sample||[])) {
    console.log(JSON.stringify(r).substring(0, 200));
  }

  // Chercher sdq spécifiquement
  const { data: sdq } = await supabase
    .from('word_analyses')
    .select('*')
    .ilike('word_key', '%sdq%');
  console.log('\n=== word_key ilike sdq ===', sdq?.length, sdq?.map(r=>JSON.stringify(r).substring(0,150)));

  // Essayer avec root_transliteration
  const { data: sdq2 } = await supabase
    .from('word_analyses')
    .select('*')
    .ilike('root_transliteration', '%sdq%');
  console.log('\n=== root_transliteration ilike sdq ===', sdq2?.length);

  // Count total
  const { count } = await supabase.from('word_analyses').select('*', {count: 'exact', head: true});
  console.log('\n=== Total word_analyses:', count);
}
main().catch(console.error);
