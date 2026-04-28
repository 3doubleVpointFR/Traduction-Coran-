const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);
async function main() {
  // Chercher khabir dans word_analyses
  const { data: d1 } = await supabase.from('word_analyses').select('id,word_key,root_ar,root_phon').ilike('word_key','%kh%').ilike('word_key','%br%');
  console.log('kh*br:', d1?.map(r=>`${r.word_key}(id=${r.id},root=${r.root_ar})`));

  const { data: d2 } = await supabase.from('word_analyses').select('id,word_key,root_ar,root_phon').ilike('root_ar','%خ ب ر%');
  console.log('\nroot خ ب ر:', d2?.map(r=>`${r.word_key}(id=${r.id})`));

  const { data: d3 } = await supabase.from('word_analyses').select('id,word_key,root_ar,root_phon').ilike('word_key','khbr');
  console.log('\nkhbr exact:', d3?.map(r=>`${r.word_key}(id=${r.id},root=${r.root_ar})`));

  // Chercher aussi par root_phon
  const { data: d4 } = await supabase.from('word_analyses').select('id,word_key,root_ar,root_phon').ilike('root_phon','%kh%b%r%');
  console.log('\nroot_phon *kh*b*r:', d4?.map(r=>`${r.word_key}(id=${r.id},root=${r.root_ar})`));

  // Chercher eff (ع ف ف) dans le Lane's
  const Database = require('better-sqlite3');
  const db = new Database('lanes_data/lexicon.sqlite');
  const tables = db.prepare("SELECT name FROM sqlite_master WHERE type='table'").all();
  console.log('\nLanes tables:', tables.map(t=>t.name));
}
main().catch(console.error);
