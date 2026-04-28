const {createClient} = require('@supabase/supabase-js');
const db = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

(async()=>{
  // Verse text
  const {data:v} = await db.from('verses').select('*').eq('id',314).single();
  console.log('=== VERSE 3:21 ===');
  console.log('arabic:', v.arabic_text);

  // Words
  const {data:w} = await db.from('words').select('position,transliteration,arabic,root').eq('verse_id',314).order('position');
  console.log('\n=== WORDS (' + w.length + ') ===');
  w.forEach(wd => console.log('pos=' + wd.position + ' tr=' + wd.transliteration + ' ar=' + wd.arabic + ' root=' + (wd.root || '-')));

  // Check VA
  const {data:va} = await db.from('verse_analyses').select('id,segments').eq('verse_id',314);
  console.log('\n=== VERSE_ANALYSES ===');
  if(va && va.length) {
    console.log('va.id=' + va[0].id + ' segments=' + (va[0].segments ? 'EXISTS (' + va[0].segments.length + ')' : 'NULL'));
    if(va[0].segments) {
      va[0].segments.forEach(s => {
        if(s.type === 'important') {
          console.log('  pos=' + s.position + ' phon=' + s.phon + ' key=' + s.key + ' root=' + s.root + ' form=' + (s.verb_form||'-') + ' tense=' + (s.tense||'-'));
        } else {
          console.log('  pos=' + s.position + ' phon=' + s.phon + ' [particle] fr=' + s.fr);
        }
      });
    }
  } else {
    console.log('NO verse_analysis');
  }

  // Check root richness
  console.log('\n=== RICHESSE DES RACINES ===');
  // Get important segment keys
  if(va && va[0] && va[0].segments) {
    const importantKeys = [...new Set(va[0].segments.filter(s => s.type === 'important').map(s => s.key))];
    for(const key of importantKeys) {
      const {data:wa} = await db.from('word_analyses').select('id,word_key,root_ar,total_occurrences').eq('word_key',key).maybeSingle();
      if(!wa) { console.log(key + ': NOT IN DB <<<'); continue; }
      const {count} = await db.from('word_meanings').select('*',{count:'exact',head:true}).eq('analysis_id',wa.id);
      console.log(key + ': aid=' + wa.id + ' root=' + wa.root_ar + ' occ=' + wa.total_occurrences + ' sens=' + count + (count < 5 ? ' <<< SUSPECTE' : ' OK'));
    }
  }

  // Check word_daily
  console.log('\n=== WORD_DAILY ===');
  if(va && va[0] && va[0].segments) {
    const importantKeys = [...new Set(va[0].segments.filter(s => s.type === 'important').map(s => s.key))];
    for(const key of importantKeys) {
      const {data:wa} = await db.from('word_analyses').select('id').eq('word_key',key).maybeSingle();
      if(!wa) continue;
      const {count} = await db.from('word_daily').select('*',{count:'exact',head:true}).eq('analysis_id',wa.id);
      if(count > 0) console.log(key + ': ' + count + ' phrases');
      else console.log(key + ': PAS DE PHRASES <<<');
    }
  }

  // Existing VWA
  const {data:vwa} = await db.from('verse_word_analyses').select('id,word_key,position').eq('verse_id',314);
  console.log('\n=== VWA EXISTANTES ===');
  console.log(vwa && vwa.length ? JSON.stringify(vwa) : 'AUCUNE');
})();
