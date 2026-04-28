const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

async function run() {
  // translation_explanation
  const { data: va } = await db.from('verse_analyses').select('translation_explanation').eq('verse_id', 350).single();
  const te = va.translation_explanation;
  const matches = [...te.matchAll(/\bconcept\b/gi)];
  console.log('translation_explanation matches for "concept":');
  matches.forEach(m => {
    const i = m.index;
    console.log(`  @${i}: ...${te.slice(Math.max(0,i-60), Math.min(te.length, i+60))}...`);
  });
  
  // VWA proof_ctx
  const { data: vwa } = await db.from('verse_word_analyses').select('word_key, analysis_axes').eq('verse_id', 350);
  for (const v of vwa) {
    const j = JSON.stringify(v.analysis_axes);
    if (/\bconcept\b/i.test(j)) {
      console.log(`\n${v.word_key} has 'concept' in proof_ctx:`);
      for (const [cname, cv] of Object.entries(v.analysis_axes.concepts)) {
        if (/\bconcept\b/i.test(cv.proof_ctx || '')) {
          console.log(`  [${cname}] status=${cv.status}`);
          console.log(`    proof_ctx: ${cv.proof_ctx}`);
        }
      }
    }
  }
}
run().catch(console.error);
