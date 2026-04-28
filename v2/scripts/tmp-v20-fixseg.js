const {createClient} = require('@supabase/supabase-js');
const db = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

(async()=>{
  const {data:va} = await db.from('verse_analyses').select('segments').eq('id',672).single();
  let segs = va.segments;
  let fixes = 0;

  for(const s of segs) {
    // Add word_key from key for important segments
    if(s.key && !s.word_key) {
      s.word_key = s.key;
      fixes++;
    }
    // Fix particle segments that have type=important but is_particle=true (dhn, mn, ely)
    // These are relative pronouns/prepositions treated as particles
    if(s.is_particle === true && s.type === 'important' && !s.fr) {
      // Add appropriate fr for these
      if(s.key === 'mn') s.fr = 'et celui qui';
      if(s.key === 'dhn') s.fr = 'à ceux qui';
      if(s.key === 'ely') s.fr = 'sur toi';
    }
  }

  const {error} = await db.from('verse_analyses').update({segments: segs}).eq('id',672);
  if(error) console.log('ERROR:', error.message);
  else console.log(fixes + ' segments fixés (word_key ajouté)');
})();
