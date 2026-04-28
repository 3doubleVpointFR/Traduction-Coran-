const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

async function main() {
  // V271-280 → vid 278-287
  const vids = Array.from({length:10}, (_,i) => 278+i);

  const { data: vas } = await supabase
    .from('verse_analyses')
    .select('id,verse_id,segments')
    .in('verse_id', vids)
    .order('verse_id');

  // Collect all unique keys that have a 'key' field (content words)
  const allKeys = new Set();
  const verseMap = {};

  for (const va of (vas||[])) {
    const segs = va.segments || [];
    const content = segs.filter(s => s.key);
    verseMap[va.verse_id] = { aid: va.id, segments: segs, content };
    content.forEach(s => allKeys.add(s.key));
  }

  console.log('=== Mots de contenu par verset ===');
  for (const vid of vids) {
    const vnum = vid - 7;
    const v = verseMap[vid];
    if (!v) { console.log(`V${vnum}: ABSENT`); continue; }
    const words = v.content.map(s => `${s.key}(${s.phon}, pos=${s.position})`).join(', ');
    console.log(`V${vnum} (vid=${vid}, aid=${v.aid}): ${v.content.length} mots — ${words}`);
  }

  // Vérifier lesquelles ont déjà des concepts dans word_meanings
  console.log('\n=== Vérification word_meanings par racine ===');
  const keys = Array.from(allKeys).filter(k => k && k.length > 1 && !['llh','ma','hyy','hwy','enk'].includes(k));

  // Get word_analyses IDs for these keys
  const { data: was } = await supabase
    .from('word_analyses')
    .select('id, word_key, root_transliteration')
    .in('word_key', keys);

  const waMap = {};
  for (const wa of (was||[])) waMap[wa.word_key] = wa;

  // For each key, count concepts
  for (const k of keys.sort()) {
    const wa = waMap[k];
    if (!wa) {
      console.log(`  ${k}: PAS dans word_analyses → ÉTAPE 2 OBLIGATOIRE`);
      continue;
    }
    const { count } = await supabase
      .from('word_meanings')
      .select('*', { count: 'exact', head: true })
      .eq('analysis_id', wa.id)
      .not('concept', 'is', null);
    console.log(`  ${k} (aid=${wa.id}, root=${wa.root_transliteration}): ${count} concepts → ${count > 0 ? 'SKIP étape 2' : 'ÉTAPE 2 OBLIGATOIRE'}`);
  }

  // Afficher les segments complets pour les versets
  console.log('\n=== Texte arabe de chaque verset (segments) ===');
  for (const vid of vids) {
    const vnum = vid - 7;
    const v = verseMap[vid];
    if (!v) continue;
    const arabic = v.segments.map(s => s.arabic).join(' ');
    console.log(`V${vnum}: ${arabic}`);
  }
}
main().catch(console.error);
