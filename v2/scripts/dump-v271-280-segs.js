const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

async function main() {
  const vids = Array.from({length:10}, (_,i) => 278+i);
  const { data: vas } = await supabase
    .from('verse_analyses')
    .select('id,verse_id,segments,translation_arab')
    .in('verse_id', vids)
    .order('verse_id');

  for (const va of (vas||[])) {
    const vnum = va.verse_id - 7;
    console.log(`\n=== V${vnum} (vid=${va.verse_id}, aid=${va.id}) ===`);
    console.log(`translation_arab: ${va.translation_arab}`);
    for (const s of (va.segments||[])) {
      const key = s.key || s.root_key || '';
      const type = s.type || s.grammar_type || '';
      const arab = s.arabic || s.text_arab || '';
      const phon = s.phonetic || s.phon || '';
      const trans = s.translation || s.trans || '';
      console.log(`  pos=${s.position} [${type}] ${arab} / ${phon} / "${trans}" key="${key}"`);
    }
  }
}
main().catch(console.error);
