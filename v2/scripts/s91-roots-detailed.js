// Script: s91-roots-detailed.js
// Detailed analysis of Surah 91 roots with status and concept counts

import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
);

const surah91Roots = [
  'shms', 'dhw', 'qmr', 'tly', 'nhr', 'jly', 'lyl', 'ghw', 'smw', 'bny',
  'ard', 'thw', 'nfs', 'swy', 'lhm', 'fjr', 'wqy', 'flh', 'zkw', 'xwb',
  'dsw', 'kdb', 'thm', 'tgh', 'bth', 'nqr', 'eqr', 'dmdm', 'rbb', 'dnb', 'wqb'
];

async function main() {
  console.log('=== SURAH 91 ROOTS - DETAILED ANALYSIS ===\n');

  // Query all existing roots
  const { data: roots, error } = await supabase
    .from('word_analyses')
    .select('*')
    .in('word_key', surah91Roots);

  if (error) {
    console.error('Error querying roots:', error.message);
    process.exit(1);
  }

  const rootsMap = new Map(roots.map(r => [r.word_key, r]));
  const existing = Array.from(rootsMap.values());
  const missing = surah91Roots.filter(w => !rootsMap.has(w));

  // Get concept counts for each existing root
  const rootsWithCounts = await Promise.all(
    existing.map(async r => {
      const { count } = await supabase
        .from('word_meanings')
        .select('id', { count: 'exact', head: true })
        .eq('analysis_id', r.id)
        .not('concept', 'is', null);
      return { ...r, concept_count: count || 0 };
    })
  );

  // Sort by word_key order in surah91Roots
  rootsWithCounts.sort((a, b) => 
    surah91Roots.indexOf(a.word_key) - surah91Roots.indexOf(b.word_key)
  );

  // Print existing roots with analysis
  console.log('EXISTING ROOTS IN DATABASE\n');
  console.log('word_key | id    | root_ar        | occurrences | analysis_step | concepts');
  console.log('---------|-------|----------------|-------------|---------------|---------');

  rootsWithCounts.forEach(r => {
    const padding = (str, width) => String(str).padEnd(width);
    console.log(
      `${padding(r.word_key, 8)} | ${padding(r.id, 5)} | ${padding(r.root_ar, 14)} | ${padding(r.total_occurrences, 11)} | ${padding(r.analysis_step, 13)} | ${r.concept_count}`
    );
  });

  console.log('\n\nMISSING ROOTS (6 total)\n');
  missing.forEach(w => console.log(`  - ${w}`));

  console.log('\n\nSTATISTICS\n');
  console.log(`Total roots checked: ${surah91Roots.length}`);
  console.log(`Existing: ${existing.length}`);
  console.log(`Missing: ${missing.length}`);
  console.log(`Coverage: ${((existing.length / surah91Roots.length) * 100).toFixed(1)}%`);

  // Analysis status breakdown
  const byStatus = {};
  rootsWithCounts.forEach(r => {
    byStatus[r.analysis_step] = (byStatus[r.analysis_step] || 0) + 1;
  });

  console.log('\nAnalysis Step Breakdown:');
  Object.entries(byStatus).forEach(([step, count]) => {
    console.log(`  ${step}: ${count}`);
  });

  console.log('\nTotal concept meanings: ' + 
    rootsWithCounts.reduce((sum, r) => sum + r.concept_count, 0));

  console.log('\nDone.');
}

main().catch(err => {
  console.error('FATAL:', err);
  process.exit(1);
});
