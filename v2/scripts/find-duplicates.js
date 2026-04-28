const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

async function run() {
  // Find all word_analyses groups by root_ar
  const { data: all } = await db.from('word_analyses').select('id, word_key, root_ar, total_occurrences').not('root_ar', 'is', null);
  const byRoot = {};
  for (const w of all) {
    if (!w.root_ar || w.root_ar.trim() === '') continue;
    const norm = w.root_ar.trim();
    if (!byRoot[norm]) byRoot[norm] = [];
    byRoot[norm].push(w);
  }

  console.log('=== Racines avec doublons ===');
  const dupGroups = [];
  for (const [root, entries] of Object.entries(byRoot)) {
    if (entries.length > 1) {
      dupGroups.push({ root, entries });
    }
  }
  console.log('Total groupes de doublons:', dupGroups.length);
  console.log('');

  // For each duplicate group, check meanings count + VWA usage
  for (const g of dupGroups) {
    console.log('--- Root ' + g.root + ' ---');
    for (const e of g.entries) {
      const { count: wmCount } = await db.from('word_meanings').select('*', { count: 'exact', head: true }).eq('analysis_id', e.id);
      const { count: vwaCount } = await db.from('verse_word_analyses').select('*', { count: 'exact', head: true }).eq('word_key', e.word_key);
      console.log('  id=' + e.id + ' word_key="' + e.word_key + '" occ=' + e.total_occurrences + ' wm=' + wmCount + ' VWA=' + vwaCount);
    }
  }
}
run().catch(console.error);
