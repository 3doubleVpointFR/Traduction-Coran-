// Step 0: Get context for verse 3:60 — Arabic text, Hamidullah, verse_id status
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

async function run() {
  // 1. Get the verse data (id=353)
  const { data: verse, error: verseErr } = await db
    .from('verses')
    .select('*')
    .eq('id', 353)
    .single();
  if (verseErr) { console.error('verses err:', verseErr); }
  console.log('=== VERSE 353 ===');
  console.log(JSON.stringify(verse, null, 2));

  // 2. Check verse_analyses
  const { data: va } = await db
    .from('verse_analyses')
    .select('*')
    .eq('verse_id', 353);
  console.log('\n=== VERSE_ANALYSES (353) ===');
  console.log(JSON.stringify(va, null, 2));

  // 3. Get surah 3 verses around 60 (58, 59, 60, 61) for context
  const { data: nb } = await db
    .from('verses')
    .select('id, surah_number, verse_number, arabic_text, full_translation, translation_arab')
    .eq('surah_number', 3)
    .gte('verse_number', 58)
    .lte('verse_number', 62)
    .order('verse_number');
  console.log('\n=== NEIGHBORS (58-62) ===');
  console.log(JSON.stringify(nb, null, 2));
}
run().catch(console.error);
