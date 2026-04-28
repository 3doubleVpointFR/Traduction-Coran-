// Script: check-s91-roots.js
// Queries word_analyses to check which roots exist from Surah 91 (Ash-Shams / The Sun)
// Uses supabase-js client with .env.local

import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env.local
const envPath = path.resolve(__dirname, '../.env.local');
dotenv.config({ path: envPath });

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_KEY;

if (!SUPABASE_URL || !SUPABASE_SERVICE_KEY) {
  console.error('Missing SUPABASE_URL or SUPABASE_SERVICE_KEY in .env.local');
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);

// ─── Roots from Surah 91 (15 verses) ──────────────────────────────────────────

const surah91Roots = [
  'shms',  // شمس - sun
  'dhw',   // ضحو/ضحي - forenoon/brightness
  'qmr',   // قمر - moon
  'tly',   // تلو - follow
  'nhr',   // نهر - day
  'jly',   // جلو - manifest/clarify
  'lyl',   // ليل - night
  'ghw',   // غشو - cover
  'smw',   // سمو - sky/heaven
  'bny',   // بنو - build
  'ard',   // أرض - earth
  'thw',   // طحو - spread
  'nfs',   // نفس - soul/self
  'swy',   // سوي - fashion/shape
  'lhm',   // لهم - inspire
  'fjr',   // فجر - wickedness/dawn
  'wqy',   // وقي - piety/protection (taqwa)
  'flh',   // فلح - succeed/prosper
  'zkw',   // زكو - purify
  'xwb',   // خيب - fail/disappoint (dassaha)
  'dsw',   // دسو - bury/hide
  'kdb',   // كذب - deny/lie
  'thm',   // ثمود - Thamud
  'tgh',   // طغو - transgress
  'bth',   // بعث - send/raise
  'nqr',   // ناقة - she-camel (root nwq or nqy?)
  'eqr',   // عقر - hamstring
  'dmdm',  // دمدم - destroy
  'rbb',   // ربب - lord
  'dnb',   // ذنب - sin/consequence
  'wqb',   // عقب - consequence/follow
];

// ─── helpers ──────────────────────────────────────────────────────────────────

async function checkRootExists(wordKey) {
  const { data: analysis, error: analysisErr } = await supabase
    .from('word_analyses')
    .select('id, word_key, root_ar')
    .eq('word_key', wordKey)
    .single();

  if (analysisErr && analysisErr.code !== 'PGRST116') {
    // PGRST116 means "not found"
    console.error(`  Error querying root ${wordKey}:`, analysisErr.message);
    return null;
  }

  if (!analysis) {
    return null;
  }

  // Count concepts for this analysis_id
  const { count, error: countErr } = await supabase
    .from('word_meanings')
    .select('id', { count: 'exact', head: true })
    .eq('analysis_id', analysis.id)
    .not('concept', 'is', null);

  if (countErr) {
    console.error(`  Error counting concepts for ${wordKey}:`, countErr.message);
    return { ...analysis, concept_count: 0 };
  }

  return { ...analysis, concept_count: count || 0 };
}

// ─── main ─────────────────────────────────────────────────────────────────────

async function main() {
  console.log('=== check-s91-roots.js ===\n');
  console.log(`Checking ${surah91Roots.length} roots from Surah 91 (Ash-Shams)\n`);

  const results = [];
  const existingRoots = [];
  const missingRoots = [];

  for (const wordKey of surah91Roots) {
    process.stdout.write(`Checking ${wordKey}... `);
    const result = await checkRootExists(wordKey);
    
    if (result) {
      console.log(`FOUND (id=${result.id})`);
      results.push(result);
      existingRoots.push(result);
    } else {
      console.log('MISSING');
      missingRoots.push(wordKey);
    }
  }

  console.log('\n=== SUMMARY ===\n');
  console.log(`Total roots checked: ${surah91Roots.length}`);
  console.log(`Existing roots: ${existingRoots.length}`);
  console.log(`Missing roots: ${missingRoots.length}\n`);

  if (existingRoots.length > 0) {
    console.log('=== EXISTING ROOTS ===\n');
    console.log('word_key | id | root_ar | concept_count');
    console.log('---------|----|---------|--------------');
    existingRoots.forEach(r => {
      console.log(`${r.word_key} | ${r.id} | ${r.root_ar} | ${r.concept_count}`);
    });
  }

  if (missingRoots.length > 0) {
    console.log('\n=== MISSING ROOTS ===\n');
    missingRoots.forEach(r => console.log(`  - ${r}`));
  }

  console.log('\nDone.');
}

main().catch(err => {
  console.error('FATAL:', err);
  process.exit(1);
});
