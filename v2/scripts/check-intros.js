const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

async function run() {
  for (const vid of [372, 373]) {
    const va = await db.from('verse_analyses').select('translation_explanation').eq('verse_id', vid).single();
    const expl = va.data.translation_explanation;
    const dem = expl.split(/§(DEMARCHE|JUSTIFICATION|CRITIQUE)§/);
    let demarche = '';
    for (let i = 0; i < dem.length; i++) {
      if (dem[i] === 'DEMARCHE') { demarche = (dem[i + 1] || '').trim(); break; }
    }
    const firstMark = demarche.indexOf('\n\n**');
    const intro = firstMark > 0 ? demarche.substring(0, firstMark).trim() : '';
    console.log(`V${vid === 372 ? 79 : 80} intro (${intro.length} chars):`);
    console.log('  ' + (intro.substring(0, 200) || '[VIDE]'));
    console.log();
  }
}
run().catch(console.error);
