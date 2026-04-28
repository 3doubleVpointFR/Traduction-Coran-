const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

async function run() {
  const vid = 373;

  // Existing analyses
  const va = await db.from('verse_analyses').select('*').eq('verse_id', vid).maybeSingle();
  console.log('verse_analyses V80:', va.data ? 'EXISTS' : 'absent');

  const vwa = await db.from('verse_word_analyses').select('id,word_key,position').eq('verse_id', vid).order('position');
  console.log('verse_word_analyses V80:', vwa.data?.length || 0, 'entries');
  if (vwa.data?.length) console.log(vwa.data);

  // Check canonical word_analyses for each root
  const roots = ['amr', 'akhz', 'axdh', 'akhdh', 'akhḏ', 'axḏ', 'mlk', 'nba', 'rbb', 'kfr', 'baed', 'bad', 'slm'];
  for (const r of roots) {
    const wa = await db.from('word_analyses').select('id,root_key,root_meaning').eq('root_key', r);
    if (wa.data?.length) {
      for (const w of wa.data) {
        const wm = await db.from('word_meanings').select('id', { count: 'exact', head: true }).eq('analysis_id', w.id);
        const wd = await db.from('word_daily').select('id', { count: 'exact', head: true }).eq('analysis_id', w.id);
        const usage = await db.from('verse_word_analyses').select('id', { count: 'exact', head: true }).eq('word_key', r);
        console.log(`  ${r} (id=${w.id}): ${wm.count} sens, ${wd.count} daily, ${usage.count} VWA`);
      }
    }
  }
}
run().catch(console.error);
