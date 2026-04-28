import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://gwtgftosscjupxxsubev.supabase.co';
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_KEY;

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

// All word_keys found in segments_step1 (important ones only, with word_key field set)
const wordKeysFromSegments = [
  'qwl', 'fsd', 'ard', 'slh', 'amn', 'nws', 'sfh', 'elm',
  'lqy', 'xlw', 'hza', 'alh', 'mdd', 'tgy', 'emh', 'dll',
  'hdy', 'rbh', 'tjr', 'kwn', 'mvl', 'wqd', 'nwr', 'dwa',
  'hwl', 'trk', 'zlm', 'bsr', 'smm', 'bkm', 'emy', 'rje',
  'swb', 'smw', 'red', 'brq', 'jel', 'sbe', 'a', 'seq',
  'h', 'mwt', 'hwt', 'kfr', 'kwd', 'xtf', 'kll', 'm', 'qwm', 'sme'
];

// ─── Get word_analyses for these keys ────────────────────────────────────────
console.log('=== word_analyses for all word_keys from segments_step1 ===');
const { data: waData, error: waErr } = await supabase
  .from('word_analyses')
  .select('id, word_key, root_ar, total_occurrences')
  .in('word_key', wordKeysFromSegments)
  .order('word_key');

if (waErr) { console.log('ERROR:', waErr.message); process.exit(1); }

console.log(`Found ${waData.length} word_analyses entries`);
const foundKeys = new Set(waData.map(r => r.word_key));
const missingKeys = wordKeysFromSegments.filter(k => !foundKeys.has(k));
console.log('\nPresent in word_analyses:');
for (const row of waData) {
  console.log(`  ${row.word_key} (id=${row.id}, root_ar=${row.root_ar}, occurrences=${row.total_occurrences})`);
}
console.log('\nMISSING from word_analyses:', missingKeys);

// ─── Check word_meanings schema ───────────────────────────────────────────────
console.log('\n=== word_meanings schema check ===');
const { data: wmSample, error: wmSErr } = await supabase
  .from('word_meanings')
  .select('*')
  .limit(1);
if (wmSErr) {
  console.log('ERROR:', wmSErr.message);
} else {
  console.log('word_meanings columns:', Object.keys(wmSample?.[0] || {}));
}

// ─── Concept counts using correct columns ────────────────────────────────────
const waIds = waData.map(r => r.id);
const waKeyById = Object.fromEntries(waData.map(r => [r.id, r.word_key]));

if (waIds.length > 0) {
  console.log('\n=== word_meanings for found word_analyses (all columns) ===');
  const { data: wm, error: wmErr } = await supabase
    .from('word_meanings')
    .select('id, analysis_id, concept, sense_label, axis_fr, axis_en')
    .in('analysis_id', waIds);

  if (wmErr) {
    console.log('ERROR:', wmErr.message);
    // Try without axis columns
    const { data: wm2, error: wmErr2 } = await supabase
      .from('word_meanings')
      .select('*')
      .in('analysis_id', waIds)
      .limit(5);
    if (wmErr2) {
      console.log('ERROR again:', wmErr2.message);
    } else {
      console.log('Sample word_meanings:', JSON.stringify(wm2?.[0], null, 2));
    }
  } else {
    // Count per word_key
    const conceptCount = {};
    const noConceptCount = {};
    for (const m of (wm || [])) {
      const wk = waKeyById[m.analysis_id] || String(m.analysis_id);
      if (m.concept) {
        conceptCount[wk] = (conceptCount[wk] || 0) + 1;
      } else {
        noConceptCount[wk] = (noConceptCount[wk] || 0) + 1;
      }
    }
    console.log('\nword_meanings WITH concept, by word_key:');
    console.log(JSON.stringify(conceptCount, null, 2));
    console.log('\nword_meanings WITHOUT concept, by word_key:');
    console.log(JSON.stringify(noConceptCount, null, 2));

    const noConceptWordKeys = wordKeysFromSegments.filter(k => {
      const wa = waData.find(r => r.word_key === k);
      return !wa || !conceptCount[k];
    });
    console.log('\nWord keys with NO concepts (or missing from word_analyses):');
    console.log(noConceptWordKeys);
  }
}

// ─── Check if daily_phrases exists under a different name ─────────────────────
console.log('\n=== Checking available tables ===');
const { data: tables, error: tablesErr } = await supabase
  .rpc('get_tables_list')
  .limit(50);
if (tablesErr) {
  // Try another approach
  const { data: t2, error: t2err } = await supabase
    .from('information_schema.tables')
    .select('table_name')
    .eq('table_schema', 'public');
  if (t2err) {
    console.log('Cannot list tables:', t2err.message);
  } else {
    console.log('Tables:', t2?.map(r => r.table_name));
  }
} else {
  console.log('Tables:', tables);
}

// ─── Try word_phrases or phrases table ────────────────────────────────────────
for (const tableName of ['word_phrases', 'phrases', 'daily_phrases', 'phrase_examples']) {
  const { data: t, error: te } = await supabase
    .from(tableName)
    .select('*')
    .limit(1);
  if (!te) {
    console.log(`Table '${tableName}' EXISTS, columns:`, Object.keys(t?.[0] || {}));
  } else {
    console.log(`Table '${tableName}' not found: ${te.message}`);
  }
}

// ─── Summary table: verse_id → word_keys ─────────────────────────────────────
console.log('\n=== SUMMARY: word_keys per verse (S2:11-20 = verse_id 18-27) ===');
const verseWordMap = {
  18: ['qwl', 'fsd', 'ard', 'slh', 'amn', 'nws', 'sfh', 'elm'],
  19: ['fsd'],
  20: ['qwl', 'amn', 'nws', 'sfh'],
  21: ['lqy', 'amn', 'qwl', 'xlw', 'nws', 'sfh'],
  22: ['alh', 'hza', 'mdd', 'tgy', 'emh'],
  23: ['dll', 'hdy', 'rbh', 'tjr', 'kwn'],
  24: ['mvl', 'wqd', 'nwr', 'dwa', 'hwl', 'trk', 'zlm', 'bsr'],
  25: ['smm', 'bkm', 'emy', 'rje'],
  26: ['swb', 'smw', 'zlm', 'red', 'brq', 'jel', 'sbe', 'a', 'seq', 'mwt'],
  27: ['kwd', 'brq', 'xtf', 'bsr', 'kll', 'dwa', 'kfr', 'm', 'qwm', 'sme'],
};

for (const [vid, keys] of Object.entries(verseWordMap)) {
  const surahVerse = `S2:${parseInt(vid) - 7}`; // verse_id 18 = S2:11
  const inWA = keys.filter(k => foundKeys.has(k));
  const notInWA = keys.filter(k => !foundKeys.has(k));
  console.log(`verse_id=${vid} (${surahVerse}): ${keys.length} keys, ${inWA.length} in word_analyses, missing: [${notInWA.join(', ')}]`);
}
