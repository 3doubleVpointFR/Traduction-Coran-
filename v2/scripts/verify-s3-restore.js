const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

async function run() {
  const { data: verses } = await db
    .from('verses')
    .select('id, verse_num')
    .eq('surah_id', 3)
    .order('verse_num');

  const ids = verses.map(v => v.id);
  const map = Object.fromEntries(verses.map(v => [v.id, v.verse_num]));

  const done = new Set();
  const partial = new Set();
  for (let i = 0; i < ids.length; i += 100) {
    const chunk = ids.slice(i, i + 100);
    const { data } = await db
      .from('verse_analyses')
      .select('verse_id, translation_arab, full_translation, segments, translation_explanation')
      .in('verse_id', chunk);
    for (const a of data ?? []) {
      const hasArab = !!a.translation_arab;
      const hasFull = !!a.full_translation;
      const hasSegs = !!a.segments && a.segments.length > 0;
      const hasExpl = !!a.translation_explanation;
      if (hasArab && hasFull && hasSegs && hasExpl) done.add(a.verse_id);
      else if (hasArab || hasFull || hasSegs || hasExpl) partial.add(a.verse_id);
    }
  }

  // VWA count per verse
  const vwaCount = {};
  for (let i = 0; i < ids.length; i += 100) {
    const chunk = ids.slice(i, i + 100);
    const { data } = await db
      .from('verse_word_analyses')
      .select('verse_id')
      .in('verse_id', chunk);
    for (const r of data ?? []) {
      vwaCount[r.verse_id] = (vwaCount[r.verse_id] || 0) + 1;
    }
  }

  const doneVerses = [...done].map(id => map[id]).sort((a, b) => a - b);
  const partialVerses = [...partial].map(id => map[id]).sort((a, b) => a - b);

  console.log(`\n=== ÉTAT SOURATE 3 APRÈS RESTAURATION ===`);
  console.log(`✅ Versets COMPLETS  : ${doneVerses.length} → ${doneVerses.join(', ')}`);
  console.log(`\n⚠ Versets PARTIELS  : ${partialVerses.length} → ${partialVerses.join(', ')}`);

  // VWA
  const totalVwa = Object.values(vwaCount).reduce((a, b) => a + b, 0);
  console.log(`\n📊 VWA total sourate 3 : ${totalVwa}`);

  // Liste détail des versets complets avec leur nombre de VWA
  console.log(`\n--- détail versets complets ---`);
  for (const id of [...done].sort((a, b) => map[a] - map[b])) {
    console.log(`  V${map[id]} → ${vwaCount[id] || 0} VWA`);
  }
}

run().catch(e => { console.error(e); process.exit(1); });
