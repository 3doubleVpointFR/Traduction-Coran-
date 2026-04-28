const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

async function run() {
  // Search all word_analyses where root_key contains the target
  const targets = ['amr', 'mr', 'xd', 'akh', 'axd', 'mlk', 'nba', 'rbb', 'kfr', 'bad', 'baed', 'slm'];
  for (const t of targets) {
    const wa = await db.from('word_analyses').select('id,root_key,root_meaning').ilike('root_key', `%${t}%`);
    if (wa.data?.length) {
      console.log(`\n--- ilike "%${t}%" ---`);
      for (const w of wa.data.slice(0, 10)) {
        const wm = await db.from('word_meanings').select('id', { count: 'exact', head: true }).eq('analysis_id', w.id);
        const wd = await db.from('word_daily').select('id', { count: 'exact', head: true }).eq('analysis_id', w.id);
        const usage = await db.from('verse_word_analyses').select('id', { count: 'exact', head: true }).eq('word_key', w.root_key);
        console.log(`  ${w.root_key} (id=${w.id}): ${wm.count} sens, ${wd.count} daily, ${usage.count} VWA — ${w.root_meaning?.substring(0, 60)}`);
      }
    }
  }

  // Fetch verse_analyses V80 detail
  console.log('\n=== verse_analyses V80 ===');
  const va = await db.from('verse_analyses').select('*').eq('verse_id', 373).single();
  console.log('translation_arab:', va.data.translation_arab?.substring(0, 200));
  console.log('full_translation:', va.data.full_translation?.substring(0, 200));
  console.log('segments:', va.data.segments ? (typeof va.data.segments === 'string' ? va.data.segments.substring(0, 200) : JSON.stringify(va.data.segments).substring(0, 200)) : 'null');
  console.log('translation_explanation length:', va.data.translation_explanation?.length || 0);
}
run().catch(console.error);
