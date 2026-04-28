// query-s1-reference.js — Fetch S1:7 and S1:1 data from Supabase as reference
const { createClient } = require('@supabase/supabase-js');

const SUPABASE_URL = 'https://gwtgftosscjupxxsubev.supabase.co';
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_KEY;

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);

// S1:7 => verse id=7 | S1:1 => verse id=1

async function main() {
  console.log('='.repeat(80));
  console.log('QUERY 1 — verse_analyses for S1:7 (verse_id=7)');
  console.log('='.repeat(80));

  const { data: va7, error: e1 } = await supabase
    .from('verse_analyses')
    .select('id, verse_id, segments_step1, segments, translation_arab, translation_explanation, full_translation')
    .eq('verse_id', 7);

  if (e1) { console.error('ERROR query 1:', e1); process.exit(1); }
  console.log(JSON.stringify(va7, null, 2));

  console.log('\n' + '='.repeat(80));
  console.log('QUERY 2 — verse_word_analyses for S1:7');
  console.log('='.repeat(80));

  const va7id = va7 && va7[0] ? va7[0].id : null;
  if (!va7id) {
    console.log('No verse_analysis found for S1:7 (verse_id=7)');
  } else {
    const { data: vwa7, error: e2 } = await supabase
      .from('verse_word_analyses')
      .select('id, word_key, analysis_axes')
      .eq('verse_analysis_id', va7id)
      .order('id');

    if (e2) { console.error('ERROR query 2:', e2); } else { console.log(JSON.stringify(vwa7, null, 2)); }
  }

  console.log('\n' + '='.repeat(80));
  console.log('QUERY 3 — verse_analyses for S1:1 (verse_id=1)');
  console.log('='.repeat(80));

  const { data: va1, error: e3 } = await supabase
    .from('verse_analyses')
    .select('id, verse_id, segments, translation_arab, translation_explanation')
    .eq('verse_id', 1);

  if (e3) { console.error('ERROR query 3:', e3); process.exit(1); }
  console.log(JSON.stringify(va1, null, 2));

  console.log('\n' + '='.repeat(80));
  console.log('QUERY 4 — verse_word_analyses for S1:1');
  console.log('='.repeat(80));

  const va1id = va1 && va1[0] ? va1[0].id : null;
  if (!va1id) {
    console.log('No verse_analysis found for S1:1 (verse_id=1)');
  } else {
    const { data: vwa1, error: e4 } = await supabase
      .from('verse_word_analyses')
      .select('word_key, analysis_axes')
      .eq('verse_analysis_id', va1id)
      .order('id');

    if (e4) { console.error('ERROR query 4:', e4); } else { console.log(JSON.stringify(vwa1, null, 2)); }
  }
}

main().catch(console.error);
