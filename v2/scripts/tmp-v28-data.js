const {createClient} = require('@supabase/supabase-js');
const db = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

(async()=>{
  // Find verse_id for S3:V28
  const {data:v} = await db.from('verses').select('*').eq('surah_id', 3).eq('verse_num', 28).single();
  if (!v) { console.log('Verse not found!'); return; }
  console.log('=== VERSE 3:28 (id=' + v.id + ') ===');
  console.log('arabic:', v.arabic_text);

  const VERSE_ID = v.id;

  const {data:w} = await db.from('words').select('position,transliteration,arabic,root,pos_tag').eq('verse_id', VERSE_ID).order('position');
  console.log('\n=== WORDS (' + w.length + ') ===');
  w.forEach(wd => console.log('pos=' + wd.position + ' tr=' + wd.transliteration + ' ar=' + wd.arabic + ' root=' + (wd.root || '-') + ' tag=' + (wd.pos_tag || '-')));

  const {data:va} = await db.from('verse_analyses').select('id,segments').eq('verse_id', VERSE_ID);
  console.log('\n=== VERSE_ANALYSES ===');
  if(va && va.length) {
    console.log('va.id=' + va[0].id);
    if(va[0].segments) {
      console.log('segments: ' + va[0].segments.length);
      va[0].segments.forEach(s => {
        if(s.type === 'important' || (!s.is_particle && s.word_key))
          console.log('  pos=' + s.position + ' phon=' + s.phon + ' key=' + s.key + ' root=' + (s.root||'-') + ' type=' + (s.type||'important'));
        else
          console.log('  pos=' + s.position + ' phon=' + s.phon + ' [particle] fr=' + (s.fr||'-'));
      });
    } else console.log('segments: NULL');
  } else console.log('NO verse_analysis');

  if(va && va[0] && va[0].segments) {
    const keys = [...new Set(va[0].segments.filter(s => s.type === 'important' || (!s.is_particle && s.word_key)).map(s => s.key || s.word_key))];
    console.log('\n=== SENSES FOR IMPORTANT WORDS ===');
    for(const key of keys) {
      if (!key) continue;
      const {data:wa} = await db.from('word_analyses').select('id,word_key,root_ar,total_occurrences').eq('word_key', key).maybeSingle();
      if(!wa) { console.log(key + ': NOT IN DB <<<\n'); continue; }
      const {data:senses} = await db.from('word_meanings').select('concept,sense,description').eq('analysis_id', wa.id).order('display_order');
      console.log('\n' + key + ' (aid=' + wa.id + ', occ=' + wa.total_occurrences + ') — ' + (senses?senses.length:0) + ' sens:');
      if(senses) {
        let cur = '';
        for(const s of senses) { if(s.concept !== cur) { cur = s.concept; console.log('  [' + cur + ']'); } console.log('    - ' + s.sense); }
      }
      const {count} = await db.from('word_daily').select('*',{count:'exact',head:true}).eq('analysis_id', wa.id);
      console.log('  daily: ' + (count > 0 ? count : 'AUCUNE <<<'));
    }
  }

  const {data:vwa} = await db.from('verse_word_analyses').select('id,word_key,position').eq('verse_id', VERSE_ID);
  console.log('\n=== VWA ===');
  console.log(vwa && vwa.length ? JSON.stringify(vwa) : 'AUCUNE');

  // Also check neighboring verse context
  const {data:v26} = await db.from('verse_analyses').select('translation_arab').eq('verse_id', VERSE_ID - 2).single();
  const {data:v27} = await db.from('verse_analyses').select('translation_arab').eq('verse_id', VERSE_ID - 1).single();
  console.log('\n=== CONTEXTE VOISINS ===');
  console.log('V26:', v26 ? v26.translation_arab : 'N/A');
  console.log('V27:', v27 ? v27.translation_arab : 'N/A');
})();
