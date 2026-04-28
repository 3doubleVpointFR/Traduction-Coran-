const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

async function run() {
  // Direct lookups by id (from previous summary)
  const ids = [428, 256, 418, 253, 294, 627, 926, 929, 2660, 2274];
  for (const id of ids) {
    const w = await db.from('word_analyses').select('id,root_key,root_meaning').eq('id', id).maybeSingle();
    if (w.data) {
      const wm = await db.from('word_meanings').select('sense,concept,status,display_order').eq('analysis_id', id).order('display_order');
      const wd = await db.from('word_daily').select('id', { count: 'exact', head: true }).eq('analysis_id', id);
      const usage = await db.from('verse_word_analyses').select('id', { count: 'exact', head: true }).eq('word_key', w.data.root_key);
      console.log(`\n${w.data.root_key} (id=${id}): ${wm.data?.length} sens, ${wd.count} daily, ${usage.count} VWA`);
      console.log(`  meaning: ${w.data.root_meaning}`);
      const concepts = {};
      wm.data.forEach(m => {
        if (!concepts[m.concept]) concepts[m.concept] = [];
        concepts[m.concept].push(m.sense + (m.status === 'retenu' ? ' [R]' : ''));
      });
      Object.entries(concepts).forEach(([c, s]) => console.log(`    ${c}: ${s.join(', ')}`));
    } else {
      console.log(`id=${id}: not found`);
    }
  }
  
  // Also check segments fully
  const va = await db.from('verse_analyses').select('segments').eq('verse_id', 373).single();
  const segs = typeof va.data.segments === 'string' ? JSON.parse(va.data.segments) : va.data.segments;
  console.log('\n=== V80 segments existing ===');
  segs.forEach(s => console.log(`  pos=${s.position} arabic="${s.arabic}" phon="${s.phon}" key=${s.key||s.word_key||'-'} fr=${s.fr}`));
}
run().catch(console.error);
