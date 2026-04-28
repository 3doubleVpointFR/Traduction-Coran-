// S3:V61 — step0 context check
// Récupère texte arabe, Hamidullah, tokens QAC, état VA/VWA actuel
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

const VERSE_ID = 354;
const SURAH = 3, VERSE = 61;

async function run() {
  // verse row
  const { data: v } = await db.from('verses').select('*').eq('id', VERSE_ID).single();
  console.log('=== VERSE ROW ===');
  console.log(JSON.stringify(v, null, 2));

  // QAC / words
  const { data: words } = await db.from('words').select('*').eq('verse_id', VERSE_ID).order('word_number');
  console.log('\n=== WORDS / QAC (count=' + (words ? words.length : 0) + ') ===');
  if (words) {
    for (const w of words) {
      console.log(JSON.stringify(w));
    }
  }

  // existing verse_analyses
  const { data: va } = await db.from('verse_analyses').select('*').eq('verse_id', VERSE_ID);
  console.log('\n=== VERSE_ANALYSES existant ===');
  console.log(JSON.stringify(va, null, 2));

  // existing VWA
  const { data: vwa } = await db.from('verse_word_analyses').select('*').eq('verse_id', VERSE_ID).order('position');
  console.log('\n=== VWA existant ===');
  console.log(JSON.stringify(vwa, null, 2));
}

run().catch(e => { console.error(e); process.exit(1); });
