const {createClient} = require('@supabase/supabase-js');
const db = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

(async()=>{
  // All important word keys from V21 tagger segments
  const keys = ['kfr','ayt','llh','qtl','nba','ghyr','hqq','amr','qst','nws','bshr','edb','alm'];

  console.log('=== SENSES DISPONIBLES POUR V21 (verse_id=314, va_id=676) ===\n');

  for(const key of keys) {
    const {data:wa} = await db.from('word_analyses').select('id,word_key,root_ar,total_occurrences').eq('word_key',key).maybeSingle();
    if(!wa) { console.log(key + ': NOT IN DB <<<\n'); continue; }

    const {data:senses} = await db.from('word_meanings').select('id,concept,sense,description,meaning_type,display_order').eq('analysis_id',wa.id).order('display_order');
    console.log(key + ' (aid=' + wa.id + ', root=' + wa.root_ar + ', occ=' + wa.total_occurrences + ') — ' + (senses?senses.length:0) + ' sens:');

    if(senses && senses.length) {
      let currentConcept = '';
      for(const s of senses) {
        if(s.concept !== currentConcept) {
          currentConcept = s.concept;
          console.log('  [' + currentConcept + ']');
        }
        console.log('    - ' + s.sense + ' (id=' + s.id + ')');
      }
    }

    // Check word_daily
    const {count} = await db.from('word_daily').select('*',{count:'exact',head:true}).eq('analysis_id',wa.id);
    console.log('  word_daily: ' + (count > 0 ? count + ' phrases' : 'AUCUNE <<<'));
    console.log('');
  }

  // Also show current segments
  console.log('=== SEGMENTS VA 676 ===');
  const {data:va} = await db.from('verse_analyses').select('segments').eq('id',676).single();
  if(va && va.segments) {
    for(const s of va.segments) {
      if(s.type === 'important') {
        console.log('pos=' + s.position + ' phon=' + s.phon + ' key=' + s.key + ' root=' + s.root + ' pos_tag=' + (s.pos||'-'));
      } else {
        console.log('pos=' + s.position + ' phon=' + s.phon + ' [particle] fr=' + (s.fr||'-') + ' key=' + (s.key||'-'));
      }
    }
  }

  // Check existing VWA
  const {data:vwa} = await db.from('verse_word_analyses').select('id,word_key,position').eq('verse_id',314);
  console.log('\n=== VWA EXISTANTES ===');
  console.log(vwa && vwa.length ? JSON.stringify(vwa) : 'AUCUNE');
})();
