const {createClient} = require('@supabase/supabase-js');
const db = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

(async()=>{
  // All important word keys from tagger segments
  const keys = ['hjj','qwl','slm','wjh','tba','aty','ktb','amy','hdy','wly','blgh','llh','bsr','ebd'];

  console.log('=== VERIFICATION RACINES V20 ===');
  for(const key of keys) {
    const {data:wa, error:e} = await db.from('word_analyses').select('id,word_key,root_ar,total_occurrences').eq('word_key',key).maybeSingle();
    if(e) { console.log(key + ': ERROR ' + e.message); continue; }
    if(!wa) { console.log(key + ': NOT IN DB <<<'); continue; }
    const {data:senses} = await db.from('word_meanings').select('id,concept,sense,description').eq('analysis_id',wa.id);
    const count = senses ? senses.length : 0;
    console.log('\n' + key + ': aid=' + wa.id + ' root=' + wa.root_ar + ' occ=' + wa.total_occurrences + ' sens=' + count + (count < 5 ? ' <<< SUSPECTE' : ' OK'));
    if(senses) senses.forEach(s => console.log('  [' + (s.concept||'?') + '] ' + s.sense));
  }

  // Also check existing word_daily for these analysis_ids
  console.log('\n=== WORD_DAILY EXISTANTS ===');
  for(const key of keys) {
    const {data:wa} = await db.from('word_analyses').select('id').eq('word_key',key).maybeSingle();
    if(!wa) continue;
    const {count} = await db.from('word_daily').select('*',{count:'exact',head:true}).eq('analysis_id',wa.id);
    if(count > 0) console.log(key + ' (aid=' + wa.id + '): ' + count + ' phrases');
  }
})();
