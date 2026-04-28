const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

async function run() {
  const { data } = await db.from('verse_word_analyses').select('*').eq('verse_id', 354).order('position');
  for (const vwa of data) {
    const axes = vwa.analysis_axes;
    if (!axes || !axes.concepts) continue;
    for (const [cname, cobj] of Object.entries(axes.concepts)) {
      const txt = cobj.proof_ctx || '';
      if (/concept(?![a-z_])/i.test(txt)) {
        console.log('pos=' + vwa.position + ' key=' + vwa.word_key + ' concept=' + cname);
        // print just the match with context
        const m = txt.match(/.{0,80}concept(?![a-z_]).{0,80}/i);
        if (m) console.log('  CTX: ...' + m[0] + '...');
      }
    }
  }

  // also check démarche for "selon les"
  const { data: va } = await db.from('verse_analyses').select('translation_explanation').eq('verse_id', 354).single();
  const expl = va.translation_explanation || '';
  const m2 = expl.match(/.{0,100}selon les.{0,100}/gi);
  if (m2) {
    console.log('\n"selon les" dans translation_explanation:');
    for (const x of m2) console.log('  ...' + x + '...');
  }
}
run().catch(e => { console.error(e); process.exit(1); });
