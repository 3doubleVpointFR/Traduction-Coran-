import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://gwtgftosscjupxxsubev.supabase.co',
  process.env.SUPABASE_SERVICE_KEY
);

async function runQuery(label, fn) {
  console.log('\n' + '='.repeat(60));
  console.log('QUERY:', label);
  console.log('='.repeat(60));
  try {
    const result = await fn();
    console.log(JSON.stringify(result, null, 2));
  } catch (e) {
    console.error('ERROR:', e.message);
  }
}

// Query 1: VWA entries for verses 11-20
await runQuery('1. VWA entries for S2 verses 11-20', async () => {
  const { data, error } = await supabase.rpc('exec_sql', {
    sql: `SELECT vwa.id, vwa.verse_analysis_id, vwa.word_key, vwa.analysis_axes IS NOT NULL as has_axes
FROM verse_word_analyses vwa
JOIN verse_analyses va ON va.id = vwa.verse_analysis_id
WHERE va.surah_number = 2 AND va.verse_number BETWEEN 11 AND 20
ORDER BY va.verse_number, vwa.id`
  });
  if (error) throw new Error(error.message);
  return data;
});

// Query 2: Specific word_analyses
await runQuery('2. word_analyses for specific word_keys', async () => {
  const { data, error } = await supabase
    .from('word_analyses')
    .select('id, word_key, root_ar, root_transliteration')
    .in('word_key', ['tgy', 'mvl', 'a', 'xtf', 'm', 'adhn', 'mshy', 'shtn', 'shry', 'dhb', 'shy', 'sher']);
  if (error) throw new Error(error.message);
  return data;
});

// Query 3: segments_step1 for verses 11-20
await runQuery('3. segments_step1 for S2 verses 11-20', async () => {
  const { data, error } = await supabase
    .from('verse_analyses')
    .select('verse_number, segments_step1')
    .eq('surah_number', 2)
    .gte('verse_number', 11)
    .lte('verse_number', 20)
    .order('verse_number');
  if (error) throw new Error(error.message);
  return data;
});

// Query 4: word_analyses existence for all word_keys in S2:11-20
// We need to use RPC or raw SQL for this complex query
// Let's build it from the data we got in query 3
await runQuery('4. word_analyses coverage for S2:11-20 word_keys', async () => {
  // First get all segments
  const { data: verses, error: e1 } = await supabase
    .from('verse_analyses')
    .select('verse_number, segments_step1')
    .eq('surah_number', 2)
    .gte('verse_number', 11)
    .lte('verse_number', 20)
    .order('verse_number');
  if (e1) throw new Error(e1.message);

  // Extract all unique word_keys from segments
  const wordKeys = new Set();
  for (const verse of verses) {
    if (verse.segments_step1 && Array.isArray(verse.segments_step1)) {
      for (const seg of verse.segments_step1) {
        if (seg.word_key && seg.word_key !== '') {
          wordKeys.add(seg.word_key);
        }
      }
    }
  }

  const uniqueKeys = Array.from(wordKeys).sort();
  console.log('Unique word_keys found:', uniqueKeys.length, ':', uniqueKeys);

  if (uniqueKeys.length === 0) return { error: 'No word_keys found in segments_step1' };

  // Get word_analyses for these keys
  const { data: waData, error: e2 } = await supabase
    .from('word_analyses')
    .select('id, word_key')
    .in('word_key', uniqueKeys);
  if (e2) throw new Error(e2.message);

  // Get concept counts per word_analysis
  const waIds = waData.map(w => w.id);
  let conceptCounts = {};
  if (waIds.length > 0) {
    const { data: wmData, error: e3 } = await supabase
      .from('word_meanings')
      .select('analysis_id')
      .in('analysis_id', waIds)
      .not('concept', 'is', null);
    if (e3) throw new Error(e3.message);
    for (const wm of wmData) {
      conceptCounts[wm.analysis_id] = (conceptCounts[wm.analysis_id] || 0) + 1;
    }
  }

  // Build result
  const waByKey = {};
  for (const wa of waData) {
    waByKey[wa.word_key] = wa;
  }

  const result = uniqueKeys.map(key => {
    const wa = waByKey[key];
    return {
      word_key: key,
      wa_id: wa ? wa.id : null,
      concept_count: wa ? (conceptCounts[wa.id] || 0) : null,
      missing: !wa
    };
  });

  return result;
});
