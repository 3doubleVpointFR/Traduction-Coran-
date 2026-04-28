import { createClient } from '@supabase/supabase-js';
import { writeFileSync } from 'fs';

const SUPABASE_URL = 'https://gwtgftosscjupxxsubev.supabase.co';
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_KEY;

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const results = {};

// ─── 1. verse_analyses for S2:11-20 ─────────────────────────────────────────
console.log('\n=== QUERY 1: verse_analyses WHERE verse_id BETWEEN 18 AND 27 ===');
const { data: va1, error: va1err } = await supabase
  .from('verse_analyses')
  .select('id, verse_id, full_translation')
  .gte('verse_id', 18)
  .lte('verse_id', 27)
  .order('verse_id');

if (va1err) {
  console.log('ERROR (between 18-27):', va1err.message);
  // Try fetching all and filtering
  console.log('Trying to get all verse_analyses (first 200)...');
  const { data: vaAll, error: vaAllErr } = await supabase
    .from('verse_analyses')
    .select('id, verse_id, full_translation')
    .order('verse_id')
    .limit(200);
  if (vaAllErr) {
    console.log('ERROR all:', vaAllErr.message);
  } else {
    console.log(`Total rows returned: ${vaAll?.length}`);
    console.log(JSON.stringify(vaAll, null, 2));
    results.verse_analyses_all = vaAll;
  }
} else {
  console.log(`Rows found: ${va1?.length}`);
  console.log(JSON.stringify(va1, null, 2));
  results.verse_analyses_18_27 = va1;
}

// ─── 2. Full verse_analyses with segments_step1 ──────────────────────────────
console.log('\n=== QUERY 2: verse_analyses full with segments_step1 (verse_id 18-27) ===');
const { data: va2, error: va2err } = await supabase
  .from('verse_analyses')
  .select('id, verse_id, segments_step1, translation_arab, translation_explanation, full_translation')
  .gte('verse_id', 18)
  .lte('verse_id', 27)
  .order('verse_id');

if (va2err) {
  console.log('ERROR:', va2err.message);
} else {
  console.log(`Rows found: ${va2?.length}`);
  for (const row of (va2 || [])) {
    console.log(`\n--- verse_id=${row.verse_id} id=${row.id} ---`);
    console.log('full_translation:', row.full_translation);
    console.log('translation_arab:', row.translation_arab?.substring(0, 80));
    console.log('segments_step1 keys:', Object.keys(row.segments_step1 || {}));
    if (row.segments_step1) {
      console.log('segments_step1 sample:', JSON.stringify(row.segments_step1).substring(0, 300));
    }
  }
  results.verse_analyses_full = va2;
}

// ─── 3. verse_word_analyses for verse_id 18-27 ───────────────────────────────
console.log('\n=== QUERY 3: verse_word_analyses WHERE verse_id BETWEEN 18 AND 27 ===');
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
  console.log(`Rows found: ${vwa?.length}`);
  console.log(JSON.stringify(vwa, null, 2));
  results.verse_word_analyses = vwa;
}

// ─── 4. word_analyses for specific word_keys ─────────────────────────────────
console.log('\n=== QUERY 4: word_analyses for specific keys ===');
const keysToCheck = ['tgy', 'mvl', 'xtf', 'a', 'm', 'adhn', 'mshy'];
const { data: waSpecific, error: waErr } = await supabase
  .from('word_analyses')
  .select('id, word_key, root_ar, total_occurrences')
  .in('word_key', keysToCheck);

if (waErr) {
  console.log('ERROR:', waErr.message);
} else {
  console.log(`Rows found: ${waSpecific?.length}`);
  console.log(JSON.stringify(waSpecific, null, 2));
  const foundKeys = new Set(waSpecific?.map(r => r.word_key));
  const missingKeys = keysToCheck.filter(k => !foundKeys.has(k));
  console.log('Missing from word_analyses:', missingKeys);
  results.word_analyses_specific = waSpecific;
  results.missing_word_keys = missingKeys;
}

// ─── 5. Extract all word_keys from segments_step1 ────────────────────────────
console.log('\n=== QUERY 5: Extract all word_keys from segments_step1 ===');
const allWordKeys = new Set();
if (results.verse_analyses_full) {
  for (const row of results.verse_analyses_full) {
    const s1 = row.segments_step1;
    if (s1) {
      // segments_step1 may be an object with word keys as properties, or an array
      if (Array.isArray(s1)) {
        for (const seg of s1) {
          if (seg.word_key) allWordKeys.add(seg.word_key);
          if (seg.root) allWordKeys.add(seg.root);
        }
      } else if (typeof s1 === 'object') {
        // Could be { words: [...] } or { segments: [...] } or direct keyed object
        const candidates = s1.words || s1.segments || s1.items || Object.values(s1);
        for (const item of (Array.isArray(candidates) ? candidates : [])) {
          if (item && item.word_key) allWordKeys.add(item.word_key);
          if (item && item.root) allWordKeys.add(item.root);
        }
        // Also check top-level keys
        for (const [k, v] of Object.entries(s1)) {
          if (typeof v === 'object' && v !== null && v.word_key) {
            allWordKeys.add(v.word_key);
          }
        }
      }
    }
  }
}
console.log('All word_keys found in segments_step1:', [...allWordKeys]);
results.all_word_keys_from_segments = [...allWordKeys];

// ─── 6. Check concepts (word_meanings) for these word_keys ───────────────────
if (allWordKeys.size > 0) {
  console.log('\n=== QUERY 6: word_analyses + concept count for all found word_keys ===');
  const wkArray = [...allWordKeys];
  const { data: waAll, error: waAllErr } = await supabase
    .from('word_analyses')
    .select('id, word_key, root_ar, total_occurrences')
    .in('word_key', wkArray);

  if (waAllErr) {
    console.log('ERROR:', waAllErr.message);
  } else {
    console.log(`word_analyses rows found: ${waAll?.length}`);
    results.word_analyses_all_keys = waAll;
    const waIds = waAll?.map(r => r.id) || [];
    const waKeyById = Object.fromEntries((waAll || []).map(r => [r.id, r.word_key]));

    if (waIds.length > 0) {
      const { data: wm, error: wmErr } = await supabase
        .from('word_meanings')
        .select('id, analysis_id, concept, axis_label')
        .in('analysis_id', waIds)
        .not('concept', 'is', null);

      if (wmErr) {
        console.log('ERROR word_meanings:', wmErr.message);
      } else {
        console.log(`word_meanings rows with concept: ${wm?.length}`);
        // Count per word_key
        const conceptCount = {};
        for (const m of (wm || [])) {
          const wk = waKeyById[m.analysis_id] || m.analysis_id;
          conceptCount[wk] = (conceptCount[wk] || 0) + 1;
        }
        console.log('Concept count per word_key:', JSON.stringify(conceptCount, null, 2));
        results.concept_counts = conceptCount;

        // Show which word_keys from segments have NO concepts
        const noConceptKeys = wkArray.filter(k => {
          const wa = waAll?.find(r => r.word_key === k);
          return !wa || !conceptCount[k];
        });
        console.log('Word keys with NO concepts (or not in word_analyses):', noConceptKeys);
        results.no_concept_keys = noConceptKeys;
      }
    }
  }
}

// ─── 7. Check daily_phrases for these word_keys ──────────────────────────────
if (allWordKeys.size > 0) {
  console.log('\n=== QUERY 7: daily_phrases for all found word_keys ===');
  const wkArray = [...allWordKeys];

  // First get the word_analyses ids
  const { data: waForDaily, error: waForDailyErr } = await supabase
    .from('word_analyses')
    .select('id, word_key')
    .in('word_key', wkArray);

  if (waForDailyErr) {
    console.log('ERROR:', waForDailyErr.message);
  } else {
    const waIdsForDaily = waForDaily?.map(r => r.id) || [];
    const waKeyByIdDaily = Object.fromEntries((waForDaily || []).map(r => [r.id, r.word_key]));

    if (waIdsForDaily.length > 0) {
      const { data: dp, error: dpErr } = await supabase
        .from('daily_phrases')
        .select('id, analysis_id, phrase_ar, phrase_fr')
        .in('analysis_id', waIdsForDaily);

      if (dpErr) {
        console.log('ERROR daily_phrases:', dpErr.message);
      } else {
        console.log(`daily_phrases rows found: ${dp?.length}`);
        // Map back to word_key
        const dpByKey = {};
        for (const p of (dp || [])) {
          const wk = waKeyByIdDaily[p.analysis_id] || p.analysis_id;
          if (!dpByKey[wk]) dpByKey[wk] = [];
          dpByKey[wk].push({ phrase_ar: p.phrase_ar, phrase_fr: p.phrase_fr });
        }
        console.log('daily_phrases by word_key:', JSON.stringify(dpByKey, null, 2));
        results.daily_phrases = dpByKey;

        const noDaily = wkArray.filter(k => {
          const wa = waForDaily?.find(r => r.word_key === k);
          return !wa || !dpByKey[k];
        });
        console.log('Word keys with NO daily_phrases:', noDaily);
        results.no_daily_keys = noDaily;
      }
    }
  }
}

// ─── 8. Inspect segments_step1 structure more carefully ──────────────────────
console.log('\n=== QUERY 8: Raw segments_step1 JSON for each verse ===');
if (results.verse_analyses_full) {
  for (const row of results.verse_analyses_full) {
    console.log(`\n--- verse_id=${row.verse_id} ---`);
    if (row.segments_step1) {
      console.log(JSON.stringify(row.segments_step1, null, 2).substring(0, 2000));
    } else {
      console.log('NULL');
    }
  }
}

// ─── Write output file ───────────────────────────────────────────────────────
const outputPath = '/c/Users/mugui/Documents/traduction coran/v2/scripts/s2-v11-20-audit-results.json';
writeFileSync(outputPath.replace('/c/', 'C:/'), JSON.stringify(results, null, 2), 'utf8');
console.log('\n=== Results written to s2-v11-20-audit-results.json ===');
