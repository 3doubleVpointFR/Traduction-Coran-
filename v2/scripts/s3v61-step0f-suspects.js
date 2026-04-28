// S3:V61 — examine les racines suspectes
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

const AIDS = [608, 926, 662, 2198, 1287, 680, 854, 386, 359, 371, 381, 298, 542, 307, 629, 637];

async function run() {
  for (const aid of AIDS) {
    const { data: wa } = await db.from('word_analyses').select('*').eq('id', aid).single();
    const { data: wm } = await db.from('word_meanings').select('id,concept,sense,description').eq('analysis_id', aid).order('display_order');
    console.log('\n========== aid=' + aid + ' ' + wa.word_key + ' (' + wa.root_ar + ') occ=' + wa.total_occurrences + ' senses=' + (wm ? wm.length : 0) + ' ==========');
    for (const m of (wm || [])) {
      console.log('  [' + m.concept + '] ' + m.sense + ' :: ' + (m.description || '').substring(0, 120));
    }
  }
}
run().catch(e => { console.error(e); process.exit(1); });
