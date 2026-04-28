const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// Normalize key: remove spaces, lowercase
function norm(k) { return k.replace(/\s+/g,'').toLowerCase(); }

async function main() {
  // V271-280 → vid 278-287
  const vids = Array.from({length:10}, (_,i) => 278+i);

  const { data: vas } = await supabase
    .from('verse_analyses')
    .select('id,verse_id,segments')
    .in('verse_id', vids)
    .order('verse_id');

  // Collect all keys from content segments
  const rawKeys = new Set();
  const keyByVerse = {};
  for (const va of (vas||[])) {
    const segs = va.segments || [];
    const content = segs.filter(s => s.key && s.type === 'important');
    keyByVerse[va.verse_id] = { aid: va.id, content };
    content.forEach(s => rawKeys.add(s.key));
  }

  // Normalize keys
  const normKeyMap = {}; // norm → original
  for (const k of rawKeys) normKeyMap[norm(k)] = k;

  const normKeys = Object.keys(normKeyMap);
  console.log(`Total clés uniques: ${normKeys.length}`);

  // Fetch all matching word_analyses
  const { data: was } = await supabase
    .from('word_analyses')
    .select('id, word_key')
    .in('word_key', normKeys);

  const waMap = {}; // norm word_key → {id, word_key}
  for (const wa of (was||[])) waMap[norm(wa.word_key)] = wa;

  // For those found, count concepts in word_meanings
  const missing = [];
  const found = [];

  for (const nk of normKeys.sort()) {
    const wa = waMap[nk];
    const orig = normKeyMap[nk];
    if (!wa) {
      missing.push({ key: orig, norm: nk });
    } else {
      const { count } = await supabase
        .from('word_meanings')
        .select('*', { count: 'exact', head: true })
        .eq('analysis_id', wa.id)
        .not('concept', 'is', null);
      found.push({ key: orig, norm: nk, waid: wa.id, concepts: count });
    }
  }

  console.log('\n=== RACINES TROUVÉES EN BDD ===');
  for (const f of found) {
    const status = f.concepts > 0 ? `✅ ${f.concepts} concepts → SKIP étape 2` : `⚠️  0 concepts → ÉTAPE 2 OBLIGATOIRE`;
    console.log(`  ${f.key} (id=${f.waid}): ${status}`);
  }

  console.log('\n=== RACINES ABSENTES → ÉTAPE 2 OBLIGATOIRE ===');
  for (const m of missing) {
    console.log(`  ${m.key} (norm=${m.norm})`);
  }

  console.log(`\nRésumé: ${found.length} trouvées, ${missing.length} absentes`);
  console.log(`SKIP étape 2: ${found.filter(f=>f.concepts>0).length}`);
  console.log(`Étape 2 obligatoire: ${missing.length + found.filter(f=>f.concepts===0).length}`);
}
main().catch(console.error);
