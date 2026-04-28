const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  'https://gwtgftosscjupxxsubev.supabase.co',
  process.env.SUPABASE_SERVICE_KEY
);

function normalize(text) {
  if (!text) return '';
  return text
    .toLowerCase()
    .replace(/[^\w\sàâäéèêëïîôùûüÿçœæ]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function jaccard(a, b) {
  const setA = new Set(a.split(' ').filter(Boolean));
  const setB = new Set(b.split(' ').filter(Boolean));
  if (setA.size === 0 && setB.size === 0) return 1;
  if (setA.size === 0 || setB.size === 0) return 0;
  let intersection = 0;
  for (const w of setA) {
    if (setB.has(w)) intersection++;
  }
  const union = new Set([...setA, ...setB]).size;
  return intersection / union;
}

async function main() {
  // Fetch all verse_analyses for verse_id 8-293 with pagination
  let allRows = [];
  let from = 0;
  const pageSize = 1000;
  while (true) {
    const { data, error } = await supabase
      .from('verse_analyses')
      .select('verse_id, full_translation, translation_arab')
      .gte('verse_id', 8)
      .lte('verse_id', 293)
      .order('verse_id')
      .range(from, from + pageSize - 1);
    if (error) { console.error('Supabase error:', error); process.exit(1); }
    if (!data || data.length === 0) break;
    allRows = allRows.concat(data);
    if (data.length < pageSize) break;
    from += pageSize;
  }

  console.log(`Fetched ${allRows.length} verse_analyses\n`);

  const identical = [];
  const verySimilar = [];
  const similar = [];
  const different = [];
  let missingCount = 0;

  for (const row of allRows) {
    const ft = normalize(row.full_translation);
    const ta = normalize(row.translation_arab);
    if (!ft || !ta) { missingCount++; continue; }
    const sim = jaccard(ft, ta);
    const verseNum = row.verse_id - 7; // verse_id = verse_number + 7 for sourate 2
    const entry = { verseNum, verse_id: row.verse_id, similarity: sim, full_translation: row.full_translation, translation_arab: row.translation_arab };

    if (sim > 0.95) identical.push(entry);
    else if (sim > 0.80) verySimilar.push(entry);
    else if (sim > 0.60) similar.push(entry);
    else different.push(entry);
  }

  console.log('=== CATEGORY COUNTS ===');
  console.log(`IDENTICAL (>95%):    ${identical.length}`);
  console.log(`VERY SIMILAR (80-95%): ${verySimilar.length}`);
  console.log(`SIMILAR (60-80%):    ${similar.length}`);
  console.log(`DIFFERENT (<60%):    ${different.length}`);
  console.log(`Missing data:        ${missingCount}`);
  console.log(`Total:               ${allRows.length}\n`);

  if (identical.length > 0) {
    console.log('=== IDENTICAL VERSES (>95%) ===');
    console.log('Verse numbers:', identical.map(e => e.verseNum).join(', '));
    console.log('\n--- 3 IDENTICAL examples ---');
    for (const ex of identical.slice(0, 3)) {
      console.log(`\nVerset ${ex.verseNum} (similarity: ${(ex.similarity * 100).toFixed(1)}%)`);
      console.log(`  full_translation: ${ex.full_translation}`);
      console.log(`  translation_arab: ${ex.translation_arab}`);
    }
  }

  if (verySimilar.length > 0) {
    console.log('\n=== VERY SIMILAR VERSES (80-95%) ===');
    console.log('Verse numbers:', verySimilar.map(e => e.verseNum).join(', '));
    console.log('\n--- 3 VERY SIMILAR examples ---');
    for (const ex of verySimilar.slice(0, 3)) {
      console.log(`\nVerset ${ex.verseNum} (similarity: ${(ex.similarity * 100).toFixed(1)}%)`);
      console.log(`  full_translation: ${ex.full_translation}`);
      console.log(`  translation_arab: ${ex.translation_arab}`);
    }
  }

  if (different.length > 0) {
    console.log('\n=== 3 DIFFERENT examples (<60%) ===');
    // Sort by lowest similarity first
    different.sort((a, b) => a.similarity - b.similarity);
    for (const ex of different.slice(0, 3)) {
      console.log(`\nVerset ${ex.verseNum} (similarity: ${(ex.similarity * 100).toFixed(1)}%)`);
      console.log(`  full_translation: ${ex.full_translation}`);
      console.log(`  translation_arab: ${ex.translation_arab}`);
    }
  }
}

main().catch(console.error);
