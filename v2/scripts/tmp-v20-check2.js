const {createClient} = require('@supabase/supabase-js');
const db = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

(async()=>{
  // Check VA 672 status
  const {data:va} = await db.from('verse_analyses').select('*').eq('id',672).single();
  console.log('=== VA 672 ===');
  console.log('status:', va.status);
  console.log('tagger_output:', va.tagger_output ? 'EXISTS' : 'NULL');
  console.log('segments:', va.segments ? 'EXISTS' : 'NULL');
  console.log('translation_arab:', va.translation_arab || 'NULL');
  console.log('translation_explanation:', va.translation_explanation ? va.translation_explanation.substring(0,100) : 'NULL');
  if(va.tagger_output) console.log('\ntagger_output:', JSON.stringify(va.tagger_output));

  // Check tbE (follow) vs tbe (stamp)
  const {data:tbE} = await db.from('word_analyses').select('id,word_key,root_ar').eq('word_key','tbE').maybeSingle();
  console.log('\ntbE:', tbE ? 'aid='+tbE.id+' root='+tbE.root_ar : 'NOT FOUND');
  if(tbE) {
    const {count} = await db.from('word_meanings').select('*',{count:'exact',head:true}).eq('analysis_id',tbE.id);
    console.log('tbE meanings:', count);
  }

  // Check blg
  const {data:blg} = await db.from('word_analyses').select('id,word_key,root_ar').eq('word_key','blg').maybeSingle();
  console.log('\nblg:', blg ? 'aid='+blg.id : 'NOT FOUND');

  // Check bSr
  const {data:bSr} = await db.from('word_analyses').select('id,word_key,root_ar').eq('word_key','bSr').maybeSingle();
  console.log('bSr:', bSr ? 'aid='+bSr.id : 'NOT FOUND');

  // Check alternative keys for bSr (bsr, bSyr, etc.)
  const {data:bsrAll} = await db.from('word_analyses').select('id,word_key,root_ar').ilike('word_key','%bs%');
  console.log('All bs* keys:', bsrAll ? bsrAll.map(x=>x.word_key+'('+x.id+')').join(', ') : 'NONE');

  // Check alternative keys for blg
  const {data:blgAll} = await db.from('word_analyses').select('id,word_key,root_ar').ilike('word_key','%bl%');
  console.log('All bl* keys:', blgAll ? blgAll.map(x=>x.word_key+'('+x.id+')').join(', ') : 'NONE');

  // Check hjj existing meanings
  const {data:hjjM} = await db.from('word_meanings').select('concept,meaning,description').eq('analysis_id',637);
  console.log('\nhjj meanings:', JSON.stringify(hjjM));

  // Existing VWA for va=672
  const {data:vwa} = await db.from('verse_word_analyses').select('id,word_key,position,concept_chosen,sense_chosen').eq('verse_analysis_id',672);
  console.log('\nExisting VWA for va=672:', vwa && vwa.length ? JSON.stringify(vwa) : 'NONE');
})();
