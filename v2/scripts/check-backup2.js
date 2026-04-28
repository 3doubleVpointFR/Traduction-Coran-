const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

async function run() {
  for (const t of ['verse_analyses_audit', 'verse_analyses_history', 'verse_analyses_backup', 'audit_log', 'pg_archive']) {
    const { data, error } = await db.from(t).select('*').limit(1);
    if (error) console.log(`${t}: ERROR ${error.message}`);
    else console.log(`${t}: ${data?.length || 0} lignes lues, sample=`, data);
  }
  // List all tables via RPC
  const { data: tables, error } = await db.rpc('get_tables');
  console.log('\nrpc get_tables:', error?.message || tables);
}
run().catch(console.error);
