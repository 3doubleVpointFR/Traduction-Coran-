const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

async function run() {
  const keys = ['amr', 'akhḏ', 'akhdh', 'akhz', 'mlk', 'nba', 'rbb', 'kfr', 'bed', 'baed', 'bad', 'ḏwr', 'ant', 'slm'];
  for (const k of keys) {
    const wa = await db.from('word_analyses').select('id,root_key,root_meaning').eq('root_key', k);
    if (wa.data?.length) {
      for (const w of wa.data) {
        const wm = await db.from('word_meanings').select('sense,concept,status,display_order').eq('analysis_id', w.id).order('display_order');
        const wd = await db.from('word_daily').select('id', { count: 'exact', head: true }).eq('analysis_id', w.id);
        const usage = await db.from('verse_word_analyses').select('id', { count: 'exact', head: true }).eq('word_key', w.root_key);
        console.log(`\n[${k}] (id=${w.id}): ${wm.data?.length} sens, ${wd.count} daily, ${usage.count} VWA`);
        console.log(`  meaning: ${w.root_meaning?.substring(0, 100)}`);
        const concepts = {};
        wm.data.forEach(m => {
          if (!concepts[m.concept]) concepts[m.concept] = [];
          concepts[m.concept].push(m.sense + (m.status === 'retenu' ? ' [R]' : ''));
        });
        Object.entries(concepts).forEach(([c, s]) => console.log(`    ${c}: ${s.join(', ')}`));
      }
    } else {
      console.log(`[${k}] : aucune entrée`);
    }
  }
}
run().catch(console.error);
