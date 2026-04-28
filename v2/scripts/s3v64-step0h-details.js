const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

const KEYS = ['shrk','slm','swy'];

async function run() {
  for (const key of KEYS) {
    console.log('\n═══ ' + key + ' ═══');
    const { data: wa } = await db.from('word_analyses').select('id').eq('word_key', key);
    if (!wa || !wa.length) { console.log('MANQUANT'); continue; }
    const aid = wa[0].id;
    const { data: wm } = await db.from('word_meanings').select('*').eq('analysis_id', aid).order('display_order', { ascending: true });
    for (const r of wm) {
      console.log('  [' + r.concept + '] "' + r.sense + '" — desc: ' + (r.description ? r.description.substring(0, 150) : '(vide)'));
    }
  }
}
run().catch(console.error);
