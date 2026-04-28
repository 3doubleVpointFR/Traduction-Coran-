const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

async function fetchAll(table, select, filterFn) {
  let all = [], offset = 0;
  while (true) {
    let q = db.from(table).select(select).range(offset, offset + 999);
    const { data, error } = await q;
    if (error) throw error;
    if (!data || data.length === 0) break;
    all = all.concat(data);
    if (data.length < 1000) break;
    offset += 1000;
  }
  return all;
}

async function run() {
  // Fetch verses with surah_id and verse_num, joined with verse_analyses
  const verses = await fetchAll('verses', 'id,surah_id,verse_num');
  console.log(`Total versets : ${verses.length}`);

  const va = await fetchAll('verse_analyses', 'verse_id,segments,translation_arab,full_translation,translation_explanation');
  console.log(`Total verse_analyses : ${va.length}`);

  const verseMap = new Map(verses.map(v => [v.id, v]));

  // Per sourate, count format
  const surahStats = {};
  for (const a of va) {
    const v = verseMap.get(a.verse_id);
    if (!v) continue;
    const sid = v.surah_id;
    if (!surahStats[sid]) surahStats[sid] = { total: 0, v3: 0, old: 0, empty: 0, verses: [] };
    surahStats[sid].total++;

    const expl = a.translation_explanation || '';
    const hasV3 = expl.includes('§DEMARCHE§') || expl.includes('§JUSTIFICATION§') || expl.includes('§CRITIQUE§');
    const hasContent = a.translation_arab || a.full_translation || expl || a.segments;

    if (hasV3) {
      surahStats[sid].v3++;
      surahStats[sid].verses.push(`V${v.verse_num} ✓ V3`);
    } else if (hasContent) {
      surahStats[sid].old++;
      surahStats[sid].verses.push(`V${v.verse_num} ⚠ ancien`);
    } else {
      surahStats[sid].empty++;
    }
  }

  console.log('\n=== Sourates avec données ===');
  Object.entries(surahStats).sort((a, b) => parseInt(a[0]) - parseInt(b[0])).forEach(([sid, s]) => {
    console.log(`Sourate ${sid}: total=${s.total} | V3=${s.v3} | ancien=${s.old} | vide=${s.empty}`);
    if (s.old > 0 && s.old < 10) console.log('  → ' + s.verses.filter(x => x.includes('ancien')).join(', '));
  });
}
run().catch(console.error);
