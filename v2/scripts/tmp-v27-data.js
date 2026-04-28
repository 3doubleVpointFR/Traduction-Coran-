const {createClient} = require('@supabase/supabase-js');
const db = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

(async()=>{
  const VERSE_ID = 320;
  const {data:v} = await db.from('verses').select('*').eq('id', VERSE_ID).single();
  console.log('=== VERSE 3:27 (id=' + VERSE_ID + ') ===');
  console.log('arabic:', v.arabic_text);

  const {data:w} = await db.from('words').select('position,transliteration,arabic,root').eq('verse_id', VERSE_ID).order('position');
  console.log('\n=== WORDS (' + w.length + ') ===');
  w.forEach(wd => console.log('pos=' + wd.position + ' tr=' + wd.transliteration + ' ar=' + wd.arabic + ' root=' + (wd.root || '-')));

  const {data:va} = await db.from('verse_analyses').select('id,segments').eq('verse_id', VERSE_ID);
  console.log('\n=== VERSE_ANALYSES ===');
  if(va && va.length) {
    console.log('va.id=' + va[0].id);
    if(va[0].segments) {
      console.log('segments: ' + va[0].segments.length);
      va[0].segments.forEach(s => {
        if(s.type === 'important')
          console.log('  pos=' + s.position + ' phon=' + s.phon + ' key=' + s.key + ' root=' + s.root);
        else
          console.log('  pos=' + s.position + ' phon=' + s.phon + ' [particle] fr=' + (s.fr||'-'));
      });
    } else console.log('segments: NULL');
  } else console.log('NO verse_analysis');

  if(va && va[0] && va[0].segments) {
    const keys = [...new Set(va[0].segments.filter(s => s.type === 'important').map(s => s.key))];
    console.log('\n=== SENSES ===');
    for(const key of keys) {
      const {data:wa} = await db.from('word_analyses').select('id,word_key,root_ar,total_occurrences').eq('word_key', key).maybeSingle();
      if(!wa) { console.log(key + ': NOT IN DB <<<\n'); continue; }
      const {data:senses} = await db.from('word_meanings').select('concept,sense,description').eq('analysis_id', wa.id).order('display_order');
      console.log('\n' + key + ' (aid=' + wa.id + ', occ=' + wa.total_occurrences + ') — ' + (senses?senses.length:0) + ' sens:');
      if(senses) {
        let cur = '';
        for(const s of senses) { if(s.concept !== cur) { cur = s.concept; console.log('  [' + cur + ']'); } console.log('    - ' + s.sense + (s.description ? ' | ' + s.description.substring(0,80) : '')); }
      }
      const {count} = await db.from('word_daily').select('*',{count:'exact',head:true}).eq('analysis_id', wa.id);
      console.log('  daily: ' + (count > 0 ? count : 'AUCUNE <<<'));
    }
  }

  const {data:vwa} = await db.from('verse_word_analyses').select('id,word_key,position').eq('verse_id', VERSE_ID);
  console.log('\n=== VWA ===');
  console.log(vwa && vwa.length ? JSON.stringify(vwa) : 'AUCUNE');
})();
