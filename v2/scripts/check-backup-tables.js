const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

async function run() {
  // Try various RPCs and historical/audit tables
  const tries = [
    'verse_analyses_audit',
    'verse_analyses_history',
    'verse_analyses_backup',
    'verse_analyses_old',
    'verse_word_analyses_audit',
    'verse_word_analyses_history',
    'verse_word_analyses_backup',
    'audit_log',
  ];
  for (const t of tries) {
    const { data, error, count } = await db.from(t).select('*', { count: 'exact', head: true });
    if (!error) console.log(`✓ table "${t}" existe (${count} lignes)`);
    else if (!error.message.includes('Could not find')) console.log(`? "${t}": ${error.message}`);
  }
  console.log('\nFin de la vérification.');
}
run().catch(console.error);
