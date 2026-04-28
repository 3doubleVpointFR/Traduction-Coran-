const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);
const fs = require('fs');

(async () => {
  const { data: vas } = await db.from('verse_analyses')
    .select('verse_id, translation_arab, full_translation, translation_explanation')
    .not('translation_arab', 'is', null);

  const ids = vas.map(v => v.verse_id);
  const vmap = {};
  for (let i = 0; i < ids.length; i += 100) {
    const { data } = await db.from('verses').select('id, surah_id, verse_num').in('id', ids.slice(i, i + 100));
    for (const x of data ?? []) vmap[x.id] = { tag: `S${x.surah_id}V${x.verse_num}`, surah: x.surah_id, verse: x.verse_num };
  }

  const sorted = vas.map(v => ({ ...v, ...vmap[v.verse_id] })).sort((a, b) => a.surah - b.surah || a.verse - b.verse);

  let out = '';
  for (const v of sorted) {
    out += `\n\n========== ${v.tag} (vid=${v.verse_id}) ==========\n`;
    out += `NOUS : ${v.translation_arab}\n`;
    out += `HAMI : ${v.full_translation}\n`;
    // Extraire les blocs **xxx vs ...** du §CRITIQUE§
    const expl = v.translation_explanation || '';
    const idx = expl.indexOf('§CRITIQUE§');
    if (idx >= 0) {
      const crit = expl.slice(idx).replace('§CRITIQUE§', '').trim();
      const blocks = crit.match(/\*\*[^*]+\*\*/g) || [];
      out += `CRITIQUES : ${blocks.length} blocs\n`;
      for (const b of blocks) out += `  - ${b}\n`;
    } else {
      out += `CRITIQUES : (aucune)\n`;
    }
  }
  fs.writeFileSync('scripts/_dump_verses.txt', out);
  console.log('Dump → scripts/_dump_verses.txt (' + sorted.length + ' versets)');
})();
