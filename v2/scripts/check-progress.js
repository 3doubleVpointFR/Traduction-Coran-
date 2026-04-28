const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

async function check() {
  // Count roots with concepts (done)
  let doneIds = new Set();
  let p = 0;
  while(true) {
    const {data} = await db.from('word_meanings').select('analysis_id').not('concept','is',null).range(p*1000,(p+1)*1000-1);
    if (!data || !data.length) break;
    data.forEach(d => doneIds.add(d.analysis_id));
    p++;
  }

  // Count total word_analyses
  const {count} = await db.from('word_analyses').select('*', {count:'exact', head:true});

  console.log('Done roots (with concepts):', doneIds.size);
  console.log('Total word_analyses:', count);
  console.log('Remaining:', count - doneIds.size);

  // Get next 15 undone roots
  let rem = [];
  p = 0;
  while(rem.length < 15) {
    const {data} = await db.from('word_analyses').select('id,word_key,root_ar').order('id').range(p*1000,(p+1)*1000-1);
    if (!data || !data.length) break;
    for (const r of data) {
      if (!doneIds.has(r.id)) {
        rem.push(r);
        if (rem.length >= 15) break;
      }
    }
    p++;
  }

  console.log('\nNext 15 roots to process:');
  rem.forEach((r, i) => console.log((doneIds.size + i + 1) + '. ' + r.word_key + ' (' + r.root_ar + ')'));
}
check().catch(e => console.error(e));
