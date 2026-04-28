const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

(async () => {
  // Roots needed for S90 v1-10 based on Quranic text
  // v1: qsm, bld
  // v2: Hll, bld (repeat)
  // v3: wld
  // v4: xlq, ins/Ans, kbd
  // v5: Hsb, qdr
  // v6: qwl, hlk, mwl, lbd
  // v7: Hsb (repeat), rAy
  // v8: jel, eyn
  // v9: lsn, shf
  // v10: hdy, njd

  const rootKeys = ['qsm', 'bld', 'Hll', 'wld', 'xlq', 'Ans', 'ins', 'kbd', 'Hsb', 'qdr', 'qwl', 'hlk', 'mwl', 'lbd', 'rAy', 'jel', 'eyn', 'lsn', 'shf', 'hdy', 'njd', 'whd', 'AHd'];

  // Search by word_key patterns
  for (const rk of rootKeys) {
    const { data } = await sb.from('word_analyses').select('id, word_key, root_ar, root_transliteration, total_occurrences, surah_id').ilike('word_key', `%${rk}%`).limit(10);
    if (data && data.length > 0) {
      for (const w of data) {
        // Check concepts count
        const { count } = await sb.from('word_meanings').select('*', { count: 'exact', head: true }).eq('analysis_id', w.id).not('concept', 'is', null);
        console.log(`[${rk}] ${w.word_key} (id=${w.id}, surah=${w.surah_id}): root_ar=${w.root_ar}, occ=${w.total_occurrences}, concepts=${count}`);
      }
    } else {
      console.log(`[${rk}] NOT FOUND`);
    }
  }

  // Also search by root_ar for Arabic roots
  const arabicRoots = ['ق س م', 'ب ل د', 'ح ل ل', 'و ل د', 'خ ل ق', 'إ ن س', 'ك ب د', 'ح س ب', 'ق د ر', 'ق و ل', 'ه ل ك', 'م و ل', 'ل ب د', 'ر أ ي', 'ج ع ل', 'ع ي ن', 'ل س ن', 'ش ف ه', 'ه د ي', 'ن ج د', 'و ح د', 'أ ح د', 'ش ف و'];
  console.log('\n=== SEARCH BY ARABIC ROOT ===');
  for (const ar of arabicRoots) {
    const { data } = await sb.from('word_analyses').select('id, word_key, root_ar, total_occurrences, surah_id').eq('root_ar', ar).limit(5);
    if (data && data.length > 0) {
      for (const w of data) {
        const { count } = await sb.from('word_meanings').select('*', { count: 'exact', head: true }).eq('analysis_id', w.id).not('concept', 'is', null);
        console.log(`  [${ar}] ${w.word_key} (id=${w.id}, s=${w.surah_id}): concepts=${count}, occ=${w.total_occurrences}`);
      }
    } else {
      console.log(`  [${ar}] NOT FOUND`);
    }
  }
})();
