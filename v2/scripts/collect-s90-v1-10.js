const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

(async () => {
  // 1. Get verses 1-10 of surah 90
  const { data: verses, error: e1 } = await sb.from('verses').select('id, surah_id, verse_num, arabic_text').eq('surah_id', 90).gte('verse_num', 1).lte('verse_num', 10).order('verse_num');
  if (e1) { console.log('ERROR verses:', e1.message); process.exit(1); }
  console.log('=== VERSES ===');
  for (const v of verses) console.log(`v${v.verse_num} (id=${v.id}): ${v.arabic_text}`);

  // 2. Get existing verse_analyses
  const vids = verses.map(v => v.id);
  const { data: va } = await sb.from('verse_analyses').select('*').in('verse_id', vids);
  console.log('\n=== VERSE_ANALYSES ===');
  console.log(`Found: ${va?.length || 0}`);
  if (va) for (const a of va) console.log(`  v${verses.find(v=>v.id===a.verse_id)?.verse_num}: segments=${a.segments?'YES':'NO'}, translation=${a.translation_arab?'YES':'NO'}`);

  // 3. Get existing VWAs
  const { data: vwa } = await sb.from('verse_word_analyses').select('*').in('verse_id', vids);
  console.log('\n=== VERSE_WORD_ANALYSES ===');
  console.log(`Found: ${vwa?.length || 0}`);
  if (vwa) for (const w of vwa) console.log(`  v${verses.find(v=>v.id===w.verse_id)?.verse_num}: ${w.word_key} pos=${w.position} sense=${w.sense_chosen}`);

  // 4. Get word_analyses for surah 90
  const { data: wa } = await sb.from('word_analyses').select('id, word_key, root_ar, root_phon, total_occurrences').eq('surah_id', 90);
  console.log('\n=== WORD_ANALYSES (surah 90) ===');
  for (const w of wa || []) console.log(`  ${w.word_key} (id=${w.id}): root_ar=${w.root_ar}, phon=${w.root_phon}, occ=${w.total_occurrences}`);

  // 5. For each word_analysis, check concepts count
  console.log('\n=== CONCEPTS CHECK ===');
  for (const w of wa || []) {
    const { count } = await sb.from('word_meanings').select('*', { count: 'exact', head: true }).eq('analysis_id', w.id).not('concept', 'is', null);
    console.log(`  ${w.word_key} (id=${w.id}): ${count} concepts`);
  }

  // 6. Root keys found
  const rootKeys = (wa || []).map(w => w.word_key);
  console.log('\n=== ROOT KEYS FOUND ===');
  console.log(rootKeys.join(', '));

  // 7. Get all word_meanings for these analyses
  const waIds = (wa || []).map(w => w.id);
  if (waIds.length > 0) {
    const { data: wm } = await sb.from('word_meanings').select('analysis_id, concept, sense, sense_ar, description, display_order').in('analysis_id', waIds).order('display_order');
    console.log('\n=== WORD_MEANINGS ===');
    for (const m of wm || []) {
      const wk = (wa || []).find(w => w.id === m.analysis_id)?.word_key;
      console.log(`  ${wk}: [${m.concept}] ${m.sense} (order=${m.display_order})`);
    }
  }

  // 8. Check daily phrases
  console.log('\n=== DAILY PHRASES CHECK ===');
  for (const w of wa || []) {
    const { count } = await sb.from('word_daily').select('*', { count: 'exact', head: true }).eq('analysis_id', w.id);
    console.log(`  ${w.word_key} (id=${w.id}): ${count} daily phrases`);
  }
})();
