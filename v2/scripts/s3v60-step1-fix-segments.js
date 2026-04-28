// Fix the segments of verse_id=353: the 8th position word "al-mumtarīn" has root="mrr"
// but the correct root is "mry" (م ر ي). The segments_step1 already has it as "mry".
// We align segments to use mry and root "م ر ي".

const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

async function run() {
  const { data: [va] } = await db.from('verse_analyses').select('*').eq('verse_id', 353);
  const segs = va.segments.map(s => {
    if (s.position === 8 && s.key === 'mrr') {
      return { ...s, key: 'mry', root: 'م ر ي' };
    }
    return s;
  });
  const { error } = await db.from('verse_analyses').update({ segments: segs }).eq('id', va.id);
  if (error) { console.error(error); process.exit(1); }
  console.log('segments updated (mrr → mry) on verse_analyses id=', va.id);

  const { data: check } = await db.from('verse_analyses').select('segments').eq('id', va.id).single();
  for (const s of check.segments) console.log(`  pos=${s.position} ${s.phon || s.fr} key=${s.key || '(particle)'} root=${s.root || '-'}`);
}
run().catch(console.error);
