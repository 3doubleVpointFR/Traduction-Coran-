const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

async function run() {
  const va = await db.from('verse_analyses').select('translation_explanation').eq('verse_id', 372).single();
  const lines = va.data.translation_explanation.split('\n');
  lines.forEach((l, i) => {
    if (/concept|axe|sens [A-Z]/i.test(l) && /[A-Z][a-zé]+\/[A-Z]/.test(l)) {
      console.log(`L${i}: ${l.substring(0, 250)}`);
    }
  });
}
run().catch(console.error);
