const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

async function main() {
  for (let vnum = 251; vnum <= 260; vnum++) {
    const vid = vnum + 7;
    const { data: va } = await supabase.from('verse_analyses').select('id, full_translation').eq('verse_id', vid).single();
    const { data: vwas } = await supabase.from('verse_word_analyses').select('word_key, position').eq('verse_id', vid);
    const aid = va ? va.id : '???';
    const hasTr = va && va.full_translation ? '✅' : '❌';
    const vwaCount = vwas ? vwas.length : 0;
    const keys = vwas ? vwas.map(w => w.word_key).join(', ') : '-';
    console.log(`V${vnum} (vid=${vid}, aid=${aid}): translation=${hasTr}, VWAs=${vwaCount} [${keys}]`);
  }
}
main().catch(console.error);
