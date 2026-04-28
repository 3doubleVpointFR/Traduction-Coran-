import { createClient } from '@supabase/supabase-js';
import { writeFileSync } from 'fs';

const SUPABASE_URL = 'https://gwtgftosscjupxxsubev.supabase.co';
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_KEY;

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const WORD_KEYS = [
  'alh','amn','ard','bkm','brq','bsr','dhb','dll','dwa','elm','emh','emy',
  'fsd','hdr','hdy','hwt','hza','jel','kfr','kll','kwd','kwn','lqy','mdd',
  'mvl','mshy','mwt','nwr','nws','qdr','qwl','qwm','rbh','red','rje','sbe',
  'seq','sfh','sher','shry','shtn','shy','slh','sme','smm','smw','swb','tgy',
  'tjr','trk','wqd','xlw','xtf','zlm','adhn'
];

async function fetchAll() {
  console.log('Fetching word_analyses for', WORD_KEYS.length, 'roots...');

  // Step 1: Get word_analyses
  const { data: analyses, error: err1 } = await supabase
    .from('word_analyses')
    .select('id, word_key, root_ar, total_occurrences')
    .in('word_key', WORD_KEYS)
    .order('word_key');

  if (err1) throw new Error('word_analyses error: ' + JSON.stringify(err1));
  console.log('Found', analyses.length, 'word_analyses entries');

  const analysisIds = analyses.map(a => a.id);

  // Step 2: Get ALL word_meanings for these analyses (paginated)
  let allMeanings = [];
  const PAGE_SIZE = 1000;
  let offset = 0;
  while (true) {
    const { data: meanings, error: err2 } = await supabase
      .from('word_meanings')
      .select('id, analysis_id, concept, sense, description, display_order')
      .in('analysis_id', analysisIds)
      .order('analysis_id')
      .order('concept')
      .order('display_order')
      .range(offset, offset + PAGE_SIZE - 1);

    if (err2) throw new Error('word_meanings error: ' + JSON.stringify(err2));
    if (!meanings || meanings.length === 0) break;
    allMeanings = allMeanings.concat(meanings);
    console.log(`  Fetched ${allMeanings.length} meanings so far (offset ${offset})...`);
    if (meanings.length < PAGE_SIZE) break;
    offset += PAGE_SIZE;
  }
  console.log('Total word_meanings:', allMeanings.length);

  // Step 3: Get word_daily counts
  const { data: dailyCounts, error: err3 } = await supabase
    .from('word_daily')
    .select('analysis_id')
    .in('analysis_id', analysisIds);

  if (err3) {
    console.warn('word_daily error (may not exist):', JSON.stringify(err3));
  }

  // Build daily count map
  const dailyCountMap = {};
  if (dailyCounts) {
    for (const d of dailyCounts) {
      dailyCountMap[d.analysis_id] = (dailyCountMap[d.analysis_id] || 0) + 1;
    }
  }

  // Step 4: Build structured result
  // Build meaning map: analysis_id -> { concept -> [meanings sorted by display_order] }
  const meaningMap = {};
  for (const m of allMeanings) {
    if (!meaningMap[m.analysis_id]) meaningMap[m.analysis_id] = {};
    if (!meaningMap[m.analysis_id][m.concept]) meaningMap[m.analysis_id][m.concept] = [];
    meaningMap[m.analysis_id][m.concept].push(m);
  }

  // Build final structure
  const result = {};
  for (const wa of analyses) {
    const concepts = meaningMap[wa.id] || {};
    const conceptList = [];
    for (const [conceptName, senses] of Object.entries(concepts)) {
      // Sort senses by display_order
      senses.sort((a, b) => a.display_order - b.display_order);
      const firstSense = senses[0];
      const sensesFormatted = senses.map((s, idx) => ({
        display_order: s.display_order,
        sense: s.sense,
        description: idx === 0 ? s.description : null
      }));
      conceptList.push({
        concept: conceptName,
        description_first: firstSense.description,
        senses: sensesFormatted
      });
    }

    result[wa.word_key] = {
      wa_id: wa.id,
      word_key: wa.word_key,
      root_ar: wa.root_ar,
      total_occurrences: wa.total_occurrences,
      daily_phrases_count: dailyCountMap[wa.id] || 0,
      concepts: conceptList
    };
  }

  // Step 5: Write JSON
  const outputPath = 'C:\\Users\\mugui\\Documents\\traduction coran\\v2\\scripts\\s2_v11-20_word_meanings.json';
  writeFileSync(outputPath, JSON.stringify(result, null, 2), 'utf8');
  console.log('Written to', outputPath);

  // Step 6: Print summary
  console.log('\n=== SUMMARY ===');
  console.log('word_key | root_ar | occurrences | concepts | daily_phrases');
  console.log('-'.repeat(80));
  for (const key of WORD_KEYS) {
    if (result[key]) {
      const r = result[key];
      const conceptNames = r.concepts.map(c => c.concept).join(', ');
      console.log(`${key.padEnd(8)} | ${(r.root_ar||'?').padEnd(8)} | ${String(r.total_occurrences||0).padEnd(11)} | ${conceptNames.substring(0,60)} | ${r.daily_phrases_count}`);
    } else {
      console.log(`${key.padEnd(8)} | NOT FOUND`);
    }
  }

  // Also report missing keys
  const foundKeys = new Set(analyses.map(a => a.word_key));
  const missing = WORD_KEYS.filter(k => !foundKeys.has(k));
  if (missing.length > 0) {
    console.log('\nMISSING KEYS:', missing.join(', '));
  }

  return result;
}

fetchAll().catch(console.error);
