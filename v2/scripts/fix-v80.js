const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

async function run() {
  const vid = 373;
  const va = await db.from('verse_analyses').select('translation_explanation').eq('verse_id', vid).single();
  let expl = va.data.translation_explanation;

  // 1. Locate occurrences of "concept" (case-insensitive, word boundary)
  const lines = expl.split('\n');
  lines.forEach((l, i) => {
    if (/concept/i.test(l)) console.log(`L${i}: ${l.substring(0, 200)}`);
  });
}
run().catch(console.error);
