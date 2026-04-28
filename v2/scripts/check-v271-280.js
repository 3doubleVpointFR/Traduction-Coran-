const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

async function main() {
  // V271-280 → vid 278-287
  const vids = Array.from({length:10}, (_,i) => 278+i);

  const { data: vas } = await supabase
    .from('verse_analyses')
    .select('id,verse_id,translation_arab,segments')
    .in('verse_id', vids)
    .order('verse_id');

  console.log('=== verse_analyses existants ===');
  for (const va of (vas||[])) {
    const segs = va.segments || [];
    const content = segs.filter(s => !s.is_particle && s.word_key);
    console.log(`vid=${va.verse_id} aid=${va.id} segments=${segs.length} contenu=${content.length} arab=${va.translation_arab?'OUI':'NON'}`);
    if (content.length > 0) {
      console.log('  mots:', content.map(s=>`${s.word_key}(pos=${s.position})`).join(', '));
    }
  }

  // Vérifier les VWA déjà présents
  console.log('\n=== verse_word_analyses existants ===');
  const { data: vwas } = await supabase
    .from('verse_word_analyses')
    .select('verse_id, word_key, position')
    .in('verse_id', vids)
    .order('verse_id');
  const byVid = {};
  for (const w of (vwas||[])) {
    byVid[w.verse_id] = byVid[w.verse_id] || [];
    byVid[w.verse_id].push(w.word_key);
  }
  for (const vid of vids) {
    const vnum = vid - 7;
    console.log(`V${vnum} (vid=${vid}): ${byVid[vid] ? byVid[vid].length+' VWA — '+byVid[vid].join(', ') : 'AUCUN'}`);
  }
}
main().catch(console.error);
