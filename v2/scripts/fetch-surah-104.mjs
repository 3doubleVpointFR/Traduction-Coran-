import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://gwtgftosscjupxxsubev.supabase.co';
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_KEY;

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);

async function runQuery(label, queryFn) {
  console.log(`\n${'='.repeat(60)}`);
  console.log(`QUERY: ${label}`);
  console.log('='.repeat(60));
  const { data, error } = await queryFn();
  if (error) {
    console.error('ERROR:', JSON.stringify(error, null, 2));
    return null;
  }
  console.log(`ROWS: ${data?.length ?? 0}`);
  console.log(JSON.stringify(data, null, 2));
  return data;
}

async function main() {
  // 1. Verses for surah 104
  const verses = await runQuery('verses WHERE surah_id = 104', () =>
    supabase.from('verses').select('*').eq('surah_id', 104).order('verse_num')
  );

  if (!verses || verses.length === 0) {
    console.log('\nNo verses found for surah 104.');
    return;
  }

  const verseIds = verses.map(v => v.id);

  // 2. Words for those verses
  await runQuery('words for surah 104 verses', () =>
    supabase
      .from('words')
      .select('*')
      .in('verse_id', verseIds)
      .order('position')
  );

  // 3. Get distinct roots from surah 104 words
  const { data: words104, error: wErr } = await supabase
    .from('words')
    .select('root')
    .in('verse_id', verseIds)
    .not('root', 'is', null)
    .neq('root', '');

  if (wErr) {
    console.error('Error fetching roots:', wErr);
  }

  const roots = [...new Set((words104 || []).map(w => w.root).filter(Boolean))];
  console.log('\n--- Distinct roots in surah 104 ---');
  console.log(JSON.stringify(roots, null, 2));

  // 4. word_analyses for those roots
  const wordAnalyses = await runQuery('word_analyses for surah 104 roots', () =>
    supabase
      .from('word_analyses')
      .select('*')
      .in('word_key', roots)
  );

  // 5. word_meanings for those analyses
  if (wordAnalyses && wordAnalyses.length > 0) {
    const analysisIds = wordAnalyses.map(wa => wa.id);
    await runQuery('word_meanings for surah 104 analyses', () =>
      supabase
        .from('word_meanings')
        .select('*')
        .in('analysis_id', analysisIds)
        .order('analysis_id')
    );
  } else {
    console.log('\nNo word_analyses found — skipping word_meanings query.');
  }

  // 6. verse_analyses for surah 104
  await runQuery('verse_analyses for surah 104', () =>
    supabase
      .from('verse_analyses')
      .select('*')
      .in('verse_id', verseIds)
  );

  // 7. verse_word_analyses for surah 104
  await runQuery('verse_word_analyses for surah 104', () =>
    supabase
      .from('verse_word_analyses')
      .select('*')
      .in('verse_id', verseIds)
  );
}

main().catch(console.error);
