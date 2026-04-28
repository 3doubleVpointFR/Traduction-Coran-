const {createClient} = require('@supabase/supabase-js');
const db = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

(async () => {
  const {data: allVA} = await db.from('verse_analyses')
    .select('id, verse_id, segments')
    .gte('verse_id', 8).lte('verse_id', 293)
    .order('verse_id');

  // Get ALL VWA with word_key matching
  const {data: allVWA} = await db.from('verse_word_analyses')
    .select('verse_id, word_key, position, sense_chosen')
    .gte('verse_id', 8).lte('verse_id', 293);

  // Build VWA map: verse_id -> { byKey: {key -> [senses]}, byPos: {pos -> sense} }
  const vwaMap = {};
  for (const v of (allVWA || [])) {
    if (!vwaMap[v.verse_id]) vwaMap[v.verse_id] = { byKey: {}, byPos: {} };
    vwaMap[v.verse_id].byPos[v.position] = v.sense_chosen;
    if (!vwaMap[v.verse_id].byKey[v.word_key]) vwaMap[v.verse_id].byKey[v.word_key] = [];
    vwaMap[v.verse_id].byKey[v.word_key].push(v.sense_chosen);
  }

  // Also get word_analyses retenu for fallback
  const {data: allWA} = await db.from('word_analyses')
    .select('word_key, retenu');
  const waMap = {};
  for (const w of (allWA || [])) {
    if (w.retenu) waMap[w.word_key] = w.retenu;
  }

  let totalFixed = 0;
  let versesFixed = 0;
  let stillEmpty = 0;
  let stillEmptyDetails = [];

  for (const va of allVA) {
    let segs = typeof va.segments === 'string' ? JSON.parse(va.segments) : va.segments;
    if (!segs || !Array.isArray(segs)) continue;

    let fixedInVerse = 0;
    let emptyInVerse = 0;
    const vwa = vwaMap[va.verse_id] || { byKey: {}, byPos: {} };

    // Track which VWA keys have been used (for duplicate keys in same verse)
    const usedKeys = {};

    for (const s of segs) {
      if (s.fr && s.fr !== '' && s.fr !== '—') continue;
      if (s.is_particle) { emptyInVerse++; continue; } // skip particles, already tried

      const key = s.word_key;
      if (!key) { emptyInVerse++; continue; }

      // Try VWA by word_key
      const senses = vwa.byKey[key];
      if (senses && senses.length > 0) {
        const idx = usedKeys[key] || 0;
        let sense = senses[idx] || senses[0];
        usedKeys[key] = idx + 1;

        if (sense) {
          let fr = sense;
          if (fr.length > 40) {
            const paren = fr.indexOf('(');
            if (paren > 0) fr = fr.substring(0, paren).trim();
            const dash = fr.indexOf('—');
            if (dash > 0) fr = fr.substring(0, dash).trim();
            const comma = fr.indexOf(',');
            if (comma > 0 && fr.length > 40) fr = fr.substring(0, comma).trim();
          }
          s.fr = fr;
          fixedInVerse++;
          continue;
        }
      }

      // Fallback: word_analyses retenu
      if (waMap[key]) {
        let fr = waMap[key];
        if (fr.length > 40) {
          const comma = fr.indexOf(',');
          if (comma > 0) fr = fr.substring(0, comma).trim();
        }
        s.fr = fr;
        fixedInVerse++;
        continue;
      }

      emptyInVerse++;
      stillEmptyDetails.push('V' + (va.verse_id-7) + ':pos' + s.position + '(' + key + ')=' + (s.arabic||'').substring(0,10));
    }

    if (fixedInVerse > 0) {
      await db.from('verse_analyses').update({segments: segs}).eq('id', va.id);
      versesFixed++;
      totalFixed += fixedInVerse;
    }
    stillEmpty += emptyInVerse;
  }

  console.log('=== RÉSULTAT ===');
  console.log('Versets corrigés:', versesFixed);
  console.log('Segments remplis:', totalFixed);
  console.log('Segments encore vides:', stillEmpty);
  if (stillEmptyDetails.length > 0 && stillEmptyDetails.length <= 50) {
    console.log('Détails:', stillEmptyDetails.join(', '));
  } else if (stillEmptyDetails.length > 50) {
    console.log('Premiers 50:', stillEmptyDetails.slice(0, 50).join(', '));
    console.log('... et', stillEmptyDetails.length - 50, 'de plus');
  }
})();
