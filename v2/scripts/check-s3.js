const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

async function run() {
  const { data: verses } = await db.from('verses').select('id, verse_num').eq('surah_id', 3).order('verse_num');
  const ids = verses.map(v => v.id);
  let done = 0;
  for (let i = 0; i < ids.length; i += 100) {
    const chunk = ids.slice(i, i + 100);
    const { data } = await db.from('verse_analyses')
      .select('verse_id')
      .in('verse_id', chunk)
      .not('translation_arab', 'is', null);
    done += data?.length || 0;
  }
  console.log(`Sourate 3 : ${done}/${verses.length} versets analysés`);

  // Look specifically at V79, V80
  for (const vn of [79, 80]) {
    const v = verses.find(x => x.verse_num === vn);
    if (v) {
      const va = await db.from('verse_analyses').select('translation_arab,segments,translation_explanation').eq('verse_id', v.id).single();
      console.log(`V${vn} (verse_id=${v.id}) : translation_arab=${va.data.translation_arab ? 'OUI' : 'NULL'} | segments=${va.data.segments ? 'OUI' : 'NULL'} | expl=${va.data.translation_explanation ? va.data.translation_explanation.length+' chars' : 'NULL'}`);
    }
  }
}
run().catch(console.error);
