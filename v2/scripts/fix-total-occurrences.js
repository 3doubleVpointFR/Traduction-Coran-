const { createClient } = require('@supabase/supabase-js');

const sb = createClient(
  'https://gwtgftosscjupxxsubev.supabase.co',
  process.env.SUPABASE_SERVICE_KEY
);

async function main() {
  // 1. Get all word_analyses where total_occurrences = 0 or IS NULL
  const { data: roots, error: e1 } = await sb
    .from('word_analyses')
    .select('id, word_key, total_occurrences')
    .or('total_occurrences.eq.0,total_occurrences.is.null');

  if (e1) { console.error('Error fetching word_analyses:', e1.message); process.exit(1); }
  console.log(`Found ${roots.length} roots with total_occurrences = 0 or NULL`);

  // 2. For each root, count actual occurrences in verse_word_analyses
  let updated = 0;
  let skipped = 0;

  for (const root of roots) {
    const { count, error: e2 } = await sb
      .from('verse_word_analyses')
      .select('id', { count: 'exact', head: true })
      .eq('word_key', root.word_key);

    if (e2) {
      console.error(`Error counting for ${root.word_key}:`, e2.message);
      continue;
    }

    if (count === 0 || count === null) {
      skipped++;
      continue;
    }

    // 3. Update total_occurrences
    const { error: e3 } = await sb
      .from('word_analyses')
      .update({ total_occurrences: count })
      .eq('id', root.id);

    if (e3) {
      console.error(`Error updating ${root.word_key}:`, e3.message);
      continue;
    }

    console.log(`  ${root.word_key}: 0 -> ${count}`);
    updated++;
  }

  console.log(`\nDone. Updated: ${updated}, Skipped (truly 0 occurrences): ${skipped}, Total checked: ${roots.length}`);
}

main().catch(err => { console.error(err); process.exit(1); });
