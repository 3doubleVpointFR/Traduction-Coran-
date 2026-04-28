const {createClient} = require('@supabase/supabase-js');
const db = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

(async()=>{
  // Check by word_key
  for(const key of ['blgh','bsr','hjj','tbe']) {
    const {data:wa} = await db.from('word_analyses').select('id,word_key,root_ar,root_transliteration,total_occurrences').eq('word_key',key).maybeSingle();
    if(wa) {
      const {data:senses} = await db.from('word_meanings').select('id,concept,sense,description').eq('analysis_id',wa.id);
      console.log('\n=== ' + key + ' (aid=' + wa.id + ') root=' + wa.root_ar + ' occ=' + wa.total_occurrences + ' ===');
      if(senses) senses.forEach(s => console.log('  [' + s.concept + '] ' + s.sense + (s.description ? ' — ' + s.description.substring(0,80) : '')));
      else console.log('  NO SENSES');
    } else {
      console.log('\n=== ' + key + ' === NOT IN DB');
    }
  }

  // Full segments for VA 672
  const {data:va} = await db.from('verse_analyses').select('segments').eq('id',672).single();
  console.log('\n=== VA 672 FULL SEGMENTS ===');
  va.segments.forEach(s => {
    if(s.type === 'important') {
      console.log('pos=' + s.position + ' phon=' + s.phon + ' key=' + s.key + ' root=' + s.root + ' form=' + (s.verb_form||'-') + ' tense=' + (s.tense||'-') + ' voice=' + (s.voice||'-'));
    } else {
      console.log('pos=' + s.position + ' phon=' + s.phon + ' [particle] fr=' + s.fr);
    }
  });
})();
