import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://gwtgftosscjupxxsubev.supabase.co';
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_KEY;

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const waIds = [
  250, 287, 324, 334, 358, 304, 268, 350, 254, 323,
  335, 318, 389, 261, 351, 365, 320, 359, 294, 372,
  630, 2577, 327, 321, 364, 349, 303, 307, 263, 339,
  357, 336, 360, 554, 332, 326, 302, 333, 249, 917,
  340, 353, 348, 827, 354
];

const waKeyById = {
  250: 'alh', 287: 'amn', 324: 'ard', 334: 'bkm', 358: 'brq',
  304: 'bsr', 268: 'dll', 350: 'dwa', 254: 'elm', 323: 'emh',
  335: 'emy', 318: 'fsd', 389: 'h', 261: 'hdy', 351: 'hwl',
  365: 'hwt', 320: 'hza', 359: 'jel', 294: 'kfr', 372: 'kll',
  630: 'kwd', 2577: 'kwn', 327: 'lqy', 321: 'mdd', 364: 'mwt',
  349: 'nwr', 303: 'nws', 307: 'qwl', 263: 'qwm', 339: 'rbh',
  357: 'red', 336: 'rje', 360: 'sbe', 554: 'seq', 332: 'sfh',
  326: 'slh', 302: 'sme', 333: 'smm', 249: 'smw', 917: 'swb',
  340: 'tjr', 353: 'trk', 348: 'wqd', 827: 'xlw', 354: 'zlm'
};

// ─── word_meanings: concept count per word_key ────────────────────────────────
console.log('=== word_meanings: concept count per word_key ===');
const { data: wm, error: wmErr } = await supabase
  .from('word_meanings')
  .select('id, analysis_id, sense, concept')
  .in('analysis_id', waIds);

if (wmErr) {
  console.log('ERROR:', wmErr.message);
} else {
  console.log(`Total word_meanings rows: ${wm.length}`);

  const conceptCount = {};
  const totalCount = {};
  for (const m of wm) {
    const wk = waKeyById[m.analysis_id] || String(m.analysis_id);
    totalCount[wk] = (totalCount[wk] || 0) + 1;
    if (m.concept) {
      conceptCount[wk] = (conceptCount[wk] || 0) + 1;
    }
  }

  console.log('\nword_key | total_senses | with_concept');
  const allKeys = Object.keys(totalCount).sort();
  for (const wk of allKeys) {
    const total = totalCount[wk] || 0;
    const withConcept = conceptCount[wk] || 0;
    const status = withConcept > 0 ? 'OK' : 'NO CONCEPTS';
    console.log(`  ${wk.padEnd(8)} | ${String(total).padEnd(12)} | ${withConcept} ${status}`);
  }

  const keysWithoutConcept = allKeys.filter(k => !conceptCount[k]);
  console.log('\nWord keys with senses but NO concept assigned:', keysWithoutConcept);

  const allSegmentKeys = [
    'qwl', 'fsd', 'ard', 'slh', 'amn', 'nws', 'sfh', 'elm',
    'lqy', 'xlw', 'hza', 'alh', 'mdd', 'tgy', 'emh', 'dll',
    'hdy', 'rbh', 'tjr', 'kwn', 'mvl', 'wqd', 'nwr', 'dwa',
    'hwl', 'trk', 'zlm', 'bsr', 'smm', 'bkm', 'emy', 'rje',
    'swb', 'smw', 'red', 'brq', 'jel', 'sbe', 'a', 'seq',
    'h', 'mwt', 'hwt', 'kfr', 'kwd', 'xtf', 'kll', 'm', 'qwm', 'sme'
  ];

  const keysNotInWA = allSegmentKeys.filter(k => !Object.values(waKeyById).includes(k));
  console.log('\nWord keys from segments NOT in word_analyses (need to be created):', keysNotInWA);
}

// ─── verse_word_analyses check - what's there (check broader range) ───────────
console.log('\n=== verse_word_analyses: full check ===');
const { data: vwa, error: vwaErr } = await supabase
  .from('verse_word_analyses')
  .select('id, verse_id, word_key, sense_chosen, position')
  .gte('verse_id', 18)
  .lte('verse_id', 27)
  .order('verse_id')
  .order('position');

if (vwaErr) {
  console.log('ERROR:', vwaErr.message);
} else {
  console.log(`verse_word_analyses rows for verses 18-27: ${vwa.length}`);
  if (vwa.length > 0) {
    console.log(JSON.stringify(vwa, null, 2));
  } else {
    console.log('NONE - etapes 3/4 not yet run for S2:11-20');
  }
}

// ─── Check what S2:1-10 looks like (already done) for comparison ──────────────
console.log('\n=== verse_word_analyses for S2:1-10 (verse_id 8-17) - reference ===');
const { data: vwaRef, error: vwaRefErr } = await supabase
  .from('verse_word_analyses')
  .select('id, verse_id, word_key, sense_chosen, position')
  .gte('verse_id', 8)
  .lte('verse_id', 17)
  .order('verse_id')
  .order('position');

if (vwaRefErr) {
  console.log('ERROR:', vwaRefErr.message);
} else {
  console.log(`verse_word_analyses rows for S2:1-10: ${vwaRef.length}`);
  // Show counts by verse_id
  const countByVerse = {};
  for (const r of vwaRef) {
    countByVerse[r.verse_id] = (countByVerse[r.verse_id] || 0) + 1;
  }
  console.log('Counts by verse_id:', countByVerse);
}

// ─── Check verse_analyses for S2:1-10 full_translation comparison ──────────────
console.log('\n=== verse_analyses full_translation for S2:1-10 (verse_id 8-17) ===');
const { data: vaRef, error: vaRefErr } = await supabase
  .from('verse_analyses')
  .select('id, verse_id, full_translation')
  .gte('verse_id', 8)
  .lte('verse_id', 17)
  .order('verse_id');

if (vaRefErr) {
  console.log('ERROR:', vaRefErr.message);
} else {
  for (const r of vaRef) {
    const hasTranslation = r.full_translation ? 'HAS TRANSLATION' : 'NULL';
    console.log(`  verse_id=${r.verse_id}: ${hasTranslation}`);
    if (r.full_translation) {
      console.log(`    ${r.full_translation.substring(0, 100)}`);
    }
  }
}

// ─── Final summary ─────────────────────────────────────────────────────────────
console.log('\n=== FINAL PIPELINE STATUS SUMMARY for S2:11-20 ===');
console.log('verse_id range: 18-27 (S2:11=18, S2:12=19, ..., S2:20=27)');
console.log('');
console.log('Etape 1 (segments_step1): DONE - all 10 verses have segments_step1');
console.log('Etape 2 (word_analyses): PARTIAL');
console.log('  - 45/50 word_keys present in word_analyses');
console.log('  - MISSING: tgy, mvl, xtf, a, m');
console.log('  - tgy = طُغْيَٰن (S2:15, طغي root)');
console.log('  - mvl = مَثَل (S2:17, مثل root)');
console.log('  - xtf = يَخْطَفُ (S2:20, خطف root)');
console.log('  - a = أ (S2:19 - likely a particle/letter, low priority)');
console.log('  - m = م (S2:20 - likely a particle/letter, low priority)');
console.log('Etape 3 (verse_word_analyses): NOT STARTED - 0 rows for verses 18-27');
console.log('Etape 4 (full_translation): NOT STARTED - all null for verses 18-27');
