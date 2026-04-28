const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  'https://gwtgftosscjupxxsubev.supabase.co',
  process.env.SUPABASE_SERVICE_KEY
);

async function main() {
  // Get actual columns of verse_analyses
  const { data: sample, error: sErr } = await supabase
    .from('verse_analyses')
    .select('*')
    .eq('verse_id', 263)
    .limit(1);
  if (sErr) { console.error('Error:', sErr); return; }

  console.log('=== ACTUAL COLUMNS in verse_analyses ===');
  if (sample && sample.length > 0) {
    const cols = Object.keys(sample[0]);
    console.log(cols.join(', '));
    console.log();

    // Check which "meta" fields exist and their status
    const metaFields = ['explanation', 'critique', 'translation_approach', 'word_choices_justification',
      'translation_explanation', 'translation_meditational', 'translation_arab'];
    for (const f of metaFields) {
      if (cols.includes(f)) {
        const val = sample[0][f];
        const status = (!val || (typeof val === 'string' && val.trim() === '')) ? 'MISSING/EMPTY' : 'POPULATED';
        console.log(`  ${f}: ${status}`);
      }
    }
  }

  // Broader scan using only columns that exist
  console.log('\n=== BROADER SCAN: verse_analyses for sourate 2 (verse_id 8-293) ===\n');
  const { data: allVa, error: allVaErr } = await supabase
    .from('verse_analyses')
    .select('*')
    .gte('verse_id', 8)
    .lte('verse_id', 293);
  if (allVaErr) { console.error('Error:', allVaErr); return; }

  const total = allVa ? allVa.length : 0;
  console.log(`Total verse_analyses records: ${total}`);

  if (!allVa || allVa.length === 0) return;

  // Check all text columns for null/empty
  const cols = Object.keys(allVa[0]);
  const textCols = cols.filter(c => {
    const v = allVa[0][c];
    return typeof v === 'string' || v === null;
  });
  // Exclude id, verse_id, generated_at etc
  const skipCols = ['id', 'verse_id', 'generated_at', 'model_used', 'prompt_version'];
  const checkCols = textCols.filter(c => !skipCols.includes(c));

  console.log(`\nChecking columns: ${checkCols.join(', ')}\n`);

  for (const col of checkCols) {
    let nullCount = 0;
    const nullIds = [];
    for (const r of allVa) {
      const v = r[col];
      if (v === null || v === undefined || (typeof v === 'string' && v.trim() === '') || v === false) {
        nullCount++;
        if (nullIds.length < 20) nullIds.push(r.verse_id);
      }
    }
    if (nullCount > 0) {
      console.log(`${col}: ${nullCount}/${total} NULL/empty`);
      if (nullIds.length <= 20) {
        console.log(`  verse_ids: [${nullIds.join(', ')}]`);
      } else {
        console.log(`  (first 20 verse_ids: [${nullIds.join(', ')}]...)`);
      }
    } else {
      console.log(`${col}: ALL populated (${total}/${total})`);
    }
  }

  // Also check: how many verse_ids in range 8-293 have NO verse_analyses at all
  console.log('\n=== COVERAGE CHECK ===');
  const existingIds = new Set(allVa.map(r => r.verse_id));
  const missing = [];
  for (let i = 8; i <= 293; i++) {
    if (!existingIds.has(i)) missing.push(i);
  }
  console.log(`verse_ids with NO verse_analyses: ${missing.length}`);
  if (missing.length > 0 && missing.length <= 50) {
    console.log(`  missing: [${missing.join(', ')}]`);
  }
}

main().catch(e => console.error(e));
