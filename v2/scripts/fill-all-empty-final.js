const {createClient} = require('@supabase/supabase-js');
const db = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// Extended particle map
const particleMap = {
  'فِY': 'dans', 'إِلَّا': 'sauf', 'أُولَئِكَ': 'ceux-là',
  'شَطْرَ': 'en direction de', 'وَلَكِنَّ': 'mais', 'فَلَا': 'alors ne pas',
  'هُم': 'eux', 'وَحَيْثُ': 'et où que', 'شَطْرَهُ،': 'en direction de',
  'وَإِنَّ': 'et certes', 'عَمَّا': 'de ce que', 'وَمِنْ': 'et de',
  'نَحْنُ': 'nous', 'مِنْهُمَا': "d'eux deux", 'وَلَقَدْ': 'et certes',
  'لَمَنِ': 'pour celui qui', 'لَهُ،': 'pour lui', 'مِّنْهَا': "d'elle",
  'أَلَمْ': 'ne pas', 'وَلَئِنْ': 'et si', 'أَنتَ': 'tu',
  'وَلَئِنِ': 'et si', 'مِّن': 'de', 'إِذًا': 'alors',
  'لَّمِنَ': 'parmi', 'وَإِنَّهُ،': 'et certes il', 'وَأَنَّ': 'et que',
  'لَنَا': 'pour nous', 'مِنَّا': 'de nous', 'مِمَّا': 'de ce que',
  'فَهُمْ': 'alors eux', 'إِيَّاهُ': 'Lui seul', 'يَوْمَ': 'le jour',
  'وَلَهُمْ': 'et pour eux', 'لَفِY': 'certes dans', 'قِبَلَ': 'en direction de',
  'مَنْ': 'celui qui', 'وَفِY': 'et dans', 'وَحِينَ': 'et quand',
  'وَأُولَئِكَ': 'et ceux-là', 'هُمُ': 'eux', 'حَيْثُ': 'où',
  'مِّنْ': 'de', 'مَتَY': 'quand', 'لَّهُ،': 'pour lui',
  'مِّنْهُمَا': "d'eux deux", 'وَلَمَّا': 'et lorsque',
  'كَٱلَّذِY': 'comme celui qui', 'هَذِهِ': 'cette', 'أَوَلَمْ': 'ne pas',
  'بَلَY': 'bien au contraire', 'مِّنْهُنَّ': "d'entre elles",
  'ٱلْ': 'le', 'أَحَدُكُمْ': "l'un de vous", 'تَكُونَ': 'soit',
  'إِحْدَىهُمَا': "l'une d'elles", 'ٱلْأُخْرَى': "l'autre",
  'ٱل': 'le', 'عَلَيْنَا': 'sur nous', 'عَنَّا': 'de nous',
};

(async () => {
  // Get all word_analyses for Arabic→French fallback
  const {data: allWA} = await db.from('word_analyses')
    .select('word_key, retenu, root_ar');

  // Get all VWA for position-based matching with offset tolerance
  const {data: allVWA} = await db.from('verse_word_analyses')
    .select('verse_id, word_key, position, sense_chosen')
    .gte('verse_id', 8).lte('verse_id', 293);

  const vwaByVerse = {};
  for (const v of (allVWA || [])) {
    if (!vwaByVerse[v.verse_id]) vwaByVerse[v.verse_id] = [];
    vwaByVerse[v.verse_id].push(v);
  }

  // Build word_key -> retenu map
  const keyRetenu = {};
  for (const w of (allWA || [])) {
    if (w.retenu) keyRetenu[w.word_key] = w.retenu;
  }

  const {data: allVAData} = await db.from('verse_analyses')
    .select('id, verse_id, segments')
    .gte('verse_id', 8).lte('verse_id', 293)
    .order('verse_id');

  let totalFixed = 0;
  let versesFixed = 0;
  let remaining = [];

  for (const va of allVAData) {
    let segs = typeof va.segments === 'string' ? JSON.parse(va.segments) : va.segments;
    if (!segs || !Array.isArray(segs)) continue;

    let fixedInVerse = 0;
    const vwaEntries = vwaByVerse[va.verse_id] || [];

    for (const s of segs) {
      if (s.fr && s.fr !== '' && s.fr !== '—') continue;

      const ar = (s.arabic || '').replace(/[۟۞ٰٓ\u0670]/g, '').trim();

      // 1. Extended particle map
      if (particleMap[ar]) {
        s.fr = particleMap[ar];
        s.is_particle = true;
        fixedInVerse++;
        continue;
      }

      // 2. For content words without word_key: try to find VWA entry at nearby position
      if (!s.word_key) {
        // Try VWA entries at pos-1, pos, pos+1, pos+2
        let found = null;
        for (const offset of [0, -1, 1, -2, 2]) {
          const targetPos = s.position + offset;
          const match = vwaEntries.find(v => v.position === targetPos);
          if (match && match.sense_chosen) {
            // Check if this VWA entry is already used by a segment that has fr
            const matchingSeg = segs.find(seg => seg.position === targetPos && seg.fr && seg.fr !== '' && seg.fr !== '—');
            if (!matchingSeg) {
              found = match;
              break;
            }
          }
        }
        if (found) {
          let fr = found.sense_chosen;
          if (fr.length > 40) {
            const paren = fr.indexOf('(');
            if (paren > 0) fr = fr.substring(0, paren).trim();
          }
          s.fr = fr;
          s.word_key = found.word_key;
          fixedInVerse++;
          continue;
        }

        // Try word_analyses by matching the word_key pattern from nearby filled segments
        // Last resort: flag as remaining
        remaining.push('V' + (va.verse_id-7) + ':p' + s.position + '=' + ar.substring(0, 12));
        continue;
      }

      // 3. word_key present but no VWA match (already tried in previous script)
      if (keyRetenu[s.word_key]) {
        let fr = keyRetenu[s.word_key];
        if (fr.length > 40) {
          const comma = fr.indexOf(',');
          if (comma > 0) fr = fr.substring(0, comma).trim();
        }
        s.fr = fr;
        fixedInVerse++;
        continue;
      }

      remaining.push('V' + (va.verse_id-7) + ':p' + s.position + '=' + ar.substring(0, 12) + '(key=' + s.word_key + ')');
    }

    if (fixedInVerse > 0) {
      await db.from('verse_analyses').update({segments: segs}).eq('id', va.id);
      versesFixed++;
      totalFixed += fixedInVerse;
    }
  }

  console.log('=== RÉSULTAT ===');
  console.log('Versets corrigés:', versesFixed);
  console.log('Segments remplis:', totalFixed);
  console.log('Encore vides:', remaining.length);
  if (remaining.length <= 80) {
    console.log(remaining.join(', '));
  } else {
    console.log(remaining.slice(0, 80).join(', '));
    console.log('... +', remaining.length - 80);
  }
})();
