const { createClient } = require('@supabase/supabase-js');

const SUPABASE_URL = 'https://gwtgftosscjupxxsubev.supabase.co';
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_KEY;
const db = createClient(SUPABASE_URL, SUPABASE_KEY);

async function main() {
  // Debug the 5 unmatched verses
  const failedIds = [102, 103, 246, 260, 261];

  for (const verseId of failedIds) {
    console.log(`\n${'='.repeat(60)}`);
    console.log(`verse_id=${verseId}`);

    const { data: va } = await db.from('verse_analyses').select('segments').eq('verse_id', verseId).single();
    const { data: vwa } = await db.from('verse_word_analyses').select('word_key, position').eq('verse_id', verseId).order('position');

    const segs = va?.segments || [];
    console.log(`\nSegments (${segs.length}):`);
    segs.forEach((s, i) => {
      console.log(`  [${i}] pos=${s.position ?? 'undef'} wk=${s.word_key ?? 'null'} is_p=${s.is_particle} "${(s.arabic || '').substring(0, 15)}" => "${(s.fr || '').substring(0, 25)}"`);
    });

    console.log(`\nVWA (${(vwa || []).length}):`);
    (vwa || []).forEach(v => {
      console.log(`  pos=${v.position} wk=${v.word_key}`);
    });

    // Check: do segments already have some word_keys?
    const withWk = segs.filter(s => s.word_key !== null && s.word_key !== undefined);
    const withoutWk = segs.filter(s => s.word_key === null || s.word_key === undefined);
    console.log(`\nSegments with word_key: ${withWk.length}, without: ${withoutWk.length}`);
  }
}

main().catch(console.error);
