const {createClient} = require('@supabase/supabase-js');
const db = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

(async()=>{
  // Important roots for V20
  const roots = ['hjj','qwl','slm','wjh','llh','tbe','aty','ktb','amm','hdy','wly','blg','bSr','ebd'];

  console.log('=== RICHESSE DES RACINES V20 ===');
  for(const r of roots){
    const {data:wa} = await db.from('word_analyses').select('id,word_key,root_ar').eq('word_key',r).maybeSingle();
    if(!wa){
      console.log(r + ': NOT IN DB <<<');
      continue;
    }
    const {count} = await db.from('word_meanings').select('*',{count:'exact',head:true}).eq('analysis_id',wa.id);
    console.log(r + ': aid=' + wa.id + ' root_ar=' + wa.root_ar + ' meanings=' + count + (count < 5 ? ' <<< SUSPECTE' : ' OK'));
  }

  // Also check existing VWA for verse_id 313
  const {data:va} = await db.from('verse_analyses').select('id').eq('verse_id',313);
  console.log('\n=== VERSE_ANALYSES pour verse_id=313 ===');
  console.log(va && va.length ? JSON.stringify(va) : 'AUCUNE');

  // Check verse 19 context
  const {data:v19} = await db.from('verse_analyses').select('id,translation_arab').eq('verse_id',312);
  if(v19 && v19.length) console.log('\nV19 traduction:', v19[0].translation_arab);
})();
