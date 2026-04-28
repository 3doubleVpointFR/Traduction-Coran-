import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://gwtgftosscjupxxsubev.supabase.co',
  process.env.SUPABASE_SERVICE_KEY
);

// First find the verses table structure
console.log('\n=== FINDING VERSE IDS FOR S2 V11-20 ===');

// Try to find verses table or equivalent
let verseIds = [];
{
  // Try 'verses' table
  const { data, error } = await supabase.from('verses').select('id, surah_id, verse_number').limit(5);
  if (!error) {
    console.log('Found verses table. Sample:', JSON.stringify(data));
    // Find surah 2
    const { data: s2, error: e2 } = await supabase
      .from('verses')
      .select('id, verse_number')
      .eq('surah_id', 2)
      .gte('verse_number', 11)
      .lte('verse_number', 20)
      .order('verse_number');
    if (!e2 && s2) {
      verseIds = s2.map(v => v.id);
      console.log('Verse IDs for S2:11-20:', s2.map(v => `v${v.verse_number}=id${v.id}`).join(', '));
    } else {
      console.log('Error getting S2 verses:', e2?.message);
    }
  } else {
    console.log('No verses table:', error.message);
    // Try verse_analyses directly - look at which verse_ids exist
    const { data: va, error: eVa } = await supabase
      .from('verse_analyses')
      .select('verse_id')
      .order('verse_id')
      .limit(50);
    if (!eVa) {
      console.log('verse_ids in verse_analyses (first 50):', va.map(v => v.verse_id));
    }
  }
}

if (verseIds.length === 0) {
  console.log('Could not determine verse IDs, trying to scan verse_analyses...');
  // Look at verse IDs in context — S2 v1 would be verse_id ~2 or 8 depending on encoding
  // S1 has 7 verses, so S2 v1 = id 8, v11 = id 18, v20 = id 27
  // But this depends on the actual data
  const { data, error } = await supabase
    .from('verse_analyses')
    .select('verse_id, segments_step1')
    .gte('verse_id', 1)
    .lte('verse_id', 30)
    .order('verse_id');
  if (!error) {
    console.log('verse_analyses verse_ids 1-30:', data.map(v => v.verse_id));
  }
  process.exit(1);
}

// ============================
// QUERY 1: VWA entries for verses 11-20
// ============================
console.log('\n' + '='.repeat(60));
console.log('QUERY 1: VWA entries for S2 verses 11-20');
console.log('verse_ids:', verseIds);
console.log('='.repeat(60));

{
  const { data, error } = await supabase
    .from('verse_word_analyses')
    .select('id, verse_id, word_key, analysis_axes')
    .in('verse_id', verseIds)
    .order('verse_id')
    .order('id');
  if (error) {
    console.log('ERROR:', error.message);
  } else {
    const result = data.map(r => ({
      id: r.id,
      verse_id: r.verse_id,
      word_key: r.word_key,
      has_axes: r.analysis_axes !== null
    }));
    console.log(`Found ${result.length} VWA entries:`);
    console.log(JSON.stringify(result, null, 2));
  }
}

// ============================
// QUERY 2: Specific word_analyses
// ============================
console.log('\n' + '='.repeat(60));
console.log('QUERY 2: word_analyses for specific word_keys');
console.log('='.repeat(60));

{
  const { data, error } = await supabase
    .from('word_analyses')
    .select('id, word_key, root_ar, root_phon')
    .in('word_key', ['tgy', 'mvl', 'a', 'xtf', 'm', 'adhn', 'mshy', 'shtn', 'shry', 'dhb', 'shy', 'sher']);
  if (error) {
    console.log('ERROR:', error.message);
  } else {
    console.log(`Found ${data.length} word_analyses:`);
    console.log(JSON.stringify(data, null, 2));
  }
}

// ============================
// QUERY 3: segments_step1 for verses 11-20
// ============================
console.log('\n' + '='.repeat(60));
console.log('QUERY 3: segments_step1 for S2 verses 11-20');
console.log('='.repeat(60));

let segmentsData = [];
{
  const { data, error } = await supabase
    .from('verse_analyses')
    .select('verse_id, segments_step1')
    .in('verse_id', verseIds)
    .order('verse_id');
  if (error) {
    console.log('ERROR:', error.message);
  } else {
    segmentsData = data;
    // Show verse_id and summary of segments
    for (const va of data) {
      const segs = va.segments_step1;
      if (segs && Array.isArray(segs)) {
        const wordKeys = segs.map(s => s.word_key || s.key || '?').filter(k => k && k !== '?');
        console.log(`\nverse_id=${va.verse_id}: ${segs.length} segments, word_keys: [${wordKeys.join(', ')}]`);
        console.log('Full segments_step1:', JSON.stringify(segs));
      } else {
        console.log(`\nverse_id=${va.verse_id}: segments_step1 = NULL or not array`);
      }
    }
  }
}

// ============================
// QUERY 4: word_analyses coverage
// ============================
console.log('\n' + '='.repeat(60));
console.log('QUERY 4: word_analyses coverage for all word_keys in S2:11-20');
console.log('='.repeat(60));

{
  // Extract all unique word_keys from segments_step1
  const wordKeys = new Set();
  for (const va of segmentsData) {
    if (va.segments_step1 && Array.isArray(va.segments_step1)) {
      for (const seg of va.segments_step1) {
        const key = seg.word_key || seg.key;
        if (key && key !== '') wordKeys.add(key);
      }
    }
  }

  const uniqueKeys = Array.from(wordKeys).sort();
  console.log(`\nTotal unique word_keys found in S2:11-20: ${uniqueKeys.length}`);
  console.log('Keys:', uniqueKeys);

  if (uniqueKeys.length > 0) {
    // Get word_analyses
    const { data: waData, error: e2 } = await supabase
      .from('word_analyses')
      .select('id, word_key')
      .in('word_key', uniqueKeys);

    if (e2) {
      console.log('ERROR fetching word_analyses:', e2.message);
    } else {
      const waByKey = {};
      for (const wa of waData) waByKey[wa.word_key] = wa;

      // Get concept counts
      const waIds = waData.map(w => w.id);
      let conceptCounts = {};
      if (waIds.length > 0) {
        const { data: wmData, error: e3 } = await supabase
          .from('word_meanings')
          .select('analysis_id')
          .in('analysis_id', waIds)
          .not('concept', 'is', null);
        if (!e3) {
          for (const wm of wmData) {
            conceptCounts[wm.analysis_id] = (conceptCounts[wm.analysis_id] || 0) + 1;
          }
        }
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

      console.log('\nCoverage results:');
      console.log(JSON.stringify(result, null, 2));

      const missing = result.filter(r => r.missing);
      const noConcepts = result.filter(r => !r.missing && r.concept_count === 0);
      console.log(`\nSUMMARY:`);
      console.log(`- Total keys: ${uniqueKeys.length}`);
      console.log(`- With word_analyses: ${result.filter(r => !r.missing).length}`);
      console.log(`- MISSING word_analyses: ${missing.length} -> [${missing.map(r => r.word_key).join(', ')}]`);
      console.log(`- Has word_analyses but 0 concepts: ${noConcepts.length} -> [${noConcepts.map(r => r.word_key).join(', ')}]`);
    }
  }
}
