// List concepts per root used in V61
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

const AIDS = [
  {k:'hjj', aid:637},
  {k:'baed', aid:926},
  {k:'jyy', aid:629},
  {k:'elm', aid:254},
  {k:'qwl', aid:307},
  {k:'elw', aid:371},
  {k:'dew', aid:381},
  {k:'bny', aid:386},
  {k:'nsw', aid:2198},
  {k:'nfs', aid:298},
  {k:'bhl', aid:1287},
  {k:'jel', aid:359},
  {k:'len', aid:680},
  {k:'alh', aid:250},
  {k:'kdhb', aid:854}
];

async function run() {
  for (const r of AIDS) {
    const { data: wm } = await db.from('word_meanings').select('concept,sense').eq('analysis_id', r.aid).order('display_order');
    const byC = {};
    for (const m of (wm || [])) {
      if (!byC[m.concept]) byC[m.concept] = [];
      byC[m.concept].push(m.sense);
    }
    console.log('\n' + r.k + ' (aid=' + r.aid + ') :');
    for (const [c, senses] of Object.entries(byC)) {
      console.log('  [' + c + ']  ' + senses.join(' | '));
    }
  }
}
run().catch(e => { console.error(e); process.exit(1); });
