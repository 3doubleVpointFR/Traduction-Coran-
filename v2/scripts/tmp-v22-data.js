const {createClient} = require('@supabase/supabase-js');
const db = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

(async()=>{
  const VERSE_ID = 315;
  // Verse text
  const {data:v} = await db.from('verses').select('*').eq('id', VERSE_ID).single();
  console.log('=== VERSE 3:22 (id=' + VERSE_ID + ') ===');
  console.log('arabic:', v.arabic_text);

  // Words
  const {data:w} = await db.from('words').select('position,transliteration,arabic,root').eq('verse_id', VERSE_ID).order('position');
  console.log('\n=== WORDS (' + w.length + ') ===');
  w.forEach(wd => console.log('pos=' + wd.position + ' tr=' + wd.transliteration + ' ar=' + wd.arabic + ' root=' + (wd.root || '-')));

  // Check VA
  const {data:va} = await db.from('verse_analyses').select('id,segments').eq('verse_id', VERSE_ID);
  console.log('\n=== VERSE_ANALYSES ===');
  if(va && va.length) {
    console.log('va.id=' + va[0].id + ' segments=' + (va[0].segments ? 'EXISTS (' + va[0].segments.length + ')' : 'NULL'));
    if(va[0].segments) {
      va[0].segments.forEach(s => {
        if(s.type === 'important') {
          console.log('  pos=' + s.position + ' phon=' + s.phon + ' key=' + s.key + ' root=' + s.root);
        } else {
          console.log('  pos=' + s.position + ' phon=' + s.phon + ' [particle] fr=' + (s.fr||'-'));
        }
      });
    }
  } else {
    console.log('NO verse_analysis');
  }

  // Get unique important keys
  if(va && va[0] && va[0].segments) {
    const keys = [...new Set(va[0].segments.filter(s => s.type === 'important').map(s => s.key))];

    console.log('\n=== SENSES POUR CHAQUE RACINE ===');
    for(const key of keys) {
      const {data:wa} = await db.from('word_analyses').select('id,word_key,root_ar,total_occurrences').eq('word_key', key).maybeSingle();
      if(!wa) { console.log(key + ': NOT IN DB <<<\n'); continue; }

      const {data:senses} = await db.from('word_meanings').select('id,concept,sense').eq('analysis_id', wa.id).order('display_order');
      console.log('\n' + key + ' (aid=' + wa.id + ', root=' + wa.root_ar + ', occ=' + wa.total_occurrences + ') — ' + (senses?senses.length:0) + ' sens:');

      if(senses && senses.length) {
        let cur = '';
        for(const s of senses) {
          if(s.concept !== cur) { cur = s.concept; console.log('  [' + cur + ']'); }
          console.log('    - ' + s.sense);
        }
      }

      const {count} = await db.from('word_daily').select('*',{count:'exact',head:true}).eq('analysis_id', wa.id);
      console.log('  daily: ' + (count > 0 ? count + ' phrases' : 'AUCUNE <<<'));
    }
  }

  // Check VWA
  const {data:vwa} = await db.from('verse_word_analyses').select('id,word_key,position').eq('verse_id', VERSE_ID);
  console.log('\n=== VWA EXISTANTES ===');
  console.log(vwa && vwa.length ? JSON.stringify(vwa) : 'AUCUNE');
})();
