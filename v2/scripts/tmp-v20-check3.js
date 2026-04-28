const {createClient} = require('@supabase/supabase-js');
const db = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

(async()=>{
  // Check blgh (987)
  const {data:blgh} = await db.from('word_analyses').select('id,word_key,root_ar,root_transliteration').eq('id',987).single();
  console.log('blgh:', JSON.stringify(blgh));
  const {count:blghC} = await db.from('word_meanings').select('*',{count:'exact',head:true}).eq('analysis_id',987);
  console.log('blgh meanings count:', blghC);

  // Check bsr (304)
  const {data:bsr} = await db.from('word_analyses').select('id,word_key,root_ar,root_transliteration').eq('id',304).single();
  console.log('\nbsr:', JSON.stringify(bsr));
  const {count:bsrC} = await db.from('word_meanings').select('*',{count:'exact',head:true}).eq('analysis_id',304);
  console.log('bsr meanings count:', bsrC);

  // Check hjj (637) - meanings with error
  const {data:hjjM, error:hjjE} = await db.from('word_meanings').select('id,concept,meaning').eq('analysis_id',637);
  console.log('\nhjj meanings:', JSON.stringify(hjjM));
  if(hjjE) console.log('hjj error:', hjjE);

  // Check tbe (1752)
  const {data:tbe} = await db.from('word_analyses').select('id,word_key,root_ar,root_transliteration').eq('id',1752).single();
  console.log('\ntbe(1752):', JSON.stringify(tbe));

  // Check VA 672 segments
  const {data:va} = await db.from('verse_analyses').select('segments').eq('id',672).single();
  console.log('\nVA 672 segments:', JSON.stringify(va.segments).substring(0,500));

  // Get word_meanings columns
  const {data:sample} = await db.from('word_meanings').select('*').limit(1);
  if(sample && sample.length) console.log('\nword_meanings columns:', Object.keys(sample[0]).join(', '));
})();
