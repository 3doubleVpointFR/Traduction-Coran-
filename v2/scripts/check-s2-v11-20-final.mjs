import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://gwtgftosscjupxxsubev.supabase.co',
  process.env.SUPABASE_SERVICE_KEY
);

// Step 0: Get verse_ids for S2 v11-20
console.log('=== STEP 0: Getting verse_ids for S2 v11-20 ===');
const { data: versesRaw, error: ev } = await supabase
  .from('verses')
  .select('id, verse_num')
  .eq('surah_id', 2)
  .gte('verse_num', 11)
  .lte('verse_num', 20)
  .order('verse_num');

if (ev) {
  console.log('ERROR:', ev.message);
  process.exit(1);
}

const verseMap = {}; // verse_id -> verse_num
for (const v of versesRaw) verseMap[v.id] = v.verse_num;
const verseIds = versesRaw.map(v => v.id);
console.log('verse_ids:', versesRaw.map(v => `S2:${v.verse_num}=id${v.id}`).join(', '));

// ============================
// QUERY 1: VWA entries
// ============================
console.log('\n' + '='.repeat(60));
console.log('QUERY 1: VWA entries for S2 verses 11-20');
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
      verse_num: verseMap[r.verse_id],
      word_key: r.word_key,
      has_axes: r.analysis_axes !== null
    }));
    console.log(`\nTotal VWA entries: ${result.length}`);
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
    console.log(`\nFound ${data.length} word_analyses (out of 12 queried):`);
    console.log(JSON.stringify(data, null, 2));
    const foundKeys = new Set(data.map(d => d.word_key));
    const missing = ['tgy', 'mvl', 'a', 'xtf', 'm', 'adhn', 'mshy', 'shtn', 'shry', 'dhb', 'shy', 'sher'].filter(k => !foundKeys.has(k));
    console.log(`\nMissing from word_analyses: [${missing.join(', ')}]`);
  }
}

// ============================
// QUERY 3: segments_step1
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
    for (const va of data) {
      const vnum = verseMap[va.verse_id];
      const segs = va.segments_step1;
      if (segs && Array.isArray(segs)) {
        // Extract word_keys - check multiple possible field names
        const wordKeys = segs
          .map(s => s.word_key || s.key || null)
          .filter(k => k && k.trim() !== '');
        console.log(`\nS2:${vnum} (verse_id=${va.verse_id}): ${segs.length} segments`);
        console.log('  word_keys:', wordKeys);
        console.log('  Full segments_step1:', JSON.stringify(segs));
      } else {
        console.log(`\nS2:${vnum} (verse_id=${va.verse_id}): segments_step1 = ${JSON.stringify(segs)}`);
      }
    }
    // Report which verses have NO verse_analyses entry
    const foundIds = new Set(data.map(d => d.verse_id));
    const missingVerses = verseIds.filter(id => !foundIds.has(id));
    if (missingVerses.length > 0) {
      console.log(`\nVerses with NO verse_analyses entry: ${missingVerses.map(id => `S2:${verseMap[id]}(id=${id})`).join(', ')}`);
    } else {
      console.log('\nAll 10 verses have verse_analyses entries.');
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
  const wordKeys = new Set();
  for (const va of segmentsData) {
    if (va.segments_step1 && Array.isArray(va.segments_step1)) {
      for (const seg of va.segments_step1) {
        const key = seg.word_key || seg.key;
        if (key && key.trim() !== '') wordKeys.add(key);
      }
    }
  }

  const uniqueKeys = Array.from(wordKeys).sort();
  console.log(`\nTotal unique word_keys found: ${uniqueKeys.length}`);
  console.log('All keys:', uniqueKeys);

  if (uniqueKeys.length === 0) {
    console.log('No word_keys found - segments_step1 may be null or use different field names');
    // Let's look at what fields segments actually use
    for (const va of segmentsData) {
      if (va.segments_step1 && Array.isArray(va.segments_step1) && va.segments_step1.length > 0) {
        console.log('Sample segment fields:', Object.keys(va.segments_step1[0]));
        break;
      }
    }
    process.exit(0);
  }

  // Get word_analyses
  const { data: waData, error: e2 } = await supabase
    .from('word_analyses')
    .select('id, word_key')
    .in('word_key', uniqueKeys);

  if (e2) {
    console.log('ERROR:', e2.message);
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

    console.log('\nFull coverage results:');
    console.log(JSON.stringify(result, null, 2));

    const missing = result.filter(r => r.missing);
    const noConcepts = result.filter(r => !r.missing && r.concept_count === 0);
    const withConcepts = result.filter(r => !r.missing && r.concept_count > 0);

    console.log(`\n--- SUMMARY ---`);
    console.log(`Total unique word_keys: ${uniqueKeys.length}`);
    console.log(`With word_analyses: ${result.filter(r => !r.missing).length}`);
    console.log(`  - With concepts: ${withConcepts.length} -> [${withConcepts.map(r => r.word_key).join(', ')}]`);
    console.log(`  - 0 concepts: ${noConcepts.length} -> [${noConcepts.map(r => r.word_key).join(', ')}]`);
    console.log(`MISSING word_analyses: ${missing.length} -> [${missing.map(r => r.word_key).join(', ')}]`);
  }
}
