const {createClient} = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// Fill empty segment.fr fields by mapping Arabic words to French translation
(async () => {
  const badVns = [25,26,213,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,240,245,246];

  let totalFilled = 0;

  for (const vn of badVns) {
    const vid = vn + 7;
    const {data: va} = await supabase.from('verse_analyses')
      .select('id, full_translation, segments, segments_step1')
      .eq('verse_id', vid).single();

    if (!va) continue;

    let segs = typeof va.segments === 'string' ? JSON.parse(va.segments) : va.segments;
    let step1 = typeof va.segments_step1 === 'string' ? JSON.parse(va.segments_step1) : va.segments_step1;
    const tr = va.full_translation || '';

    // Split translation into words
    const trWords = tr.split(/\s+/);

    // Map each step1 segment to its French word(s)
    // We do this by going through step1 in order and assigning French words
    let trIdx = 0;
    let filled = 0;

    for (let i = 0; i < segs.length; i++) {
      if (segs[i].fr && segs[i].fr.length > 0) {
        // Already has fr - skip ahead in translation
        const frWords = segs[i].fr.split(/\s+/);
        // Try to find these words in translation to advance trIdx
        const frLower = segs[i].fr.toLowerCase();
        for (let j = trIdx; j < trWords.length; j++) {
          if (trWords.slice(j, j + frWords.length).join(' ').toLowerCase() === frLower) {
            trIdx = j + frWords.length;
            break;
          }
        }
        continue;
      }

      // Need to fill fr
      const s1 = step1.find(s => s.position === segs[i].position);
      if (!s1) continue;

      if (s1.type === 'particle') {
        // Particles: assign particle French
        const pfr = getParticleFrFromContext(s1, trWords, trIdx);
        if (pfr.fr) {
          segs[i].fr = pfr.fr;
          trIdx = pfr.newIdx;
          filled++;
        }
      } else {
        // Content word: assign next meaningful French word(s)
        const cfr = getContentFrFromContext(s1, segs, i, trWords, trIdx, step1);
        if (cfr.fr) {
          segs[i].fr = cfr.fr;
          trIdx = cfr.newIdx;
          filled++;
        }
      }
    }

    if (filled > 0) {
      // Second pass: fill remaining empty with placeholder from step1
      for (let i = 0; i < segs.length; i++) {
        if (!segs[i].fr || segs[i].fr === '') {
          const s1 = step1.find(s => s.position === segs[i].position);
          if (s1) {
            if (s1.type === 'particle') {
              segs[i].fr = getSimpleParticleFr(s1);
            } else {
              // Use sense_retenu or word_key as fallback
              segs[i].fr = segs[i].sense_retenu || segs[i].word_key || '—';
            }
            filled++;
          }
        }
      }

      await supabase.from('verse_analyses')
        .update({ segments: segs })
        .eq('id', va.id);

      totalFilled += filled;
    }

    const remaining = segs.filter(s => !s.fr || s.fr === '').length;
    console.log('V'+vn+': '+filled+' fr remplis' + (remaining ? ', '+remaining+' restants' : ' OK'));
  }

  console.log('\nTotal fr remplis:', totalFilled);
})();

function getSimpleParticleFr(s1) {
  const ar = s1.arabic || '';
  if (ar.startsWith('وَ')) return 'et';
  if (ar.startsWith('فَ')) return 'alors';
  if (ar === 'فِى' || ar === 'فِي') return 'dans';
  if (ar === 'مِنْ' || ar === 'مِن') return 'de';
  if (ar.startsWith('إِلَ')) return 'vers';
  if (ar.startsWith('عَلَ')) return 'sur';
  if (ar.startsWith('بِ')) return 'par';
  if (ar.startsWith('لِ') || ar.startsWith('لَ') || ar.startsWith('لَّ')) return 'pour';
  if (ar.startsWith('أَنَّ') || ar.startsWith('أَنَ')) return 'que';
  if (ar.startsWith('إِنَّ') || ar.startsWith('إِنَ')) return 'certes';
  if (ar === 'لَا' || ar === 'لَّا') return 'ne pas';
  if (ar === 'مَا') return 'ce que';
  if (ar === 'إِذَا') return 'lorsque';
  if (ar === 'ثُمَّ') return 'puis';
  if (ar === 'أَوْ') return 'ou';
  if (ar.startsWith('هُوَ') || ar.startsWith('هُ')) return 'il';
  if (ar.startsWith('هُمْ') || ar.endsWith('هُمْ')) return 'eux';
  if (ar.endsWith('كُمْ') || ar.startsWith('كُمْ')) return 'vous';
  if (ar === 'هِىَ') return 'elle';
  if (ar.startsWith('ٱلَّذِ') || ar.startsWith('الَّذِ')) return ar.includes('ينَ') ? 'ceux qui' : 'celui qui';
  if (ar === 'ذَ' || ar === 'ذَٰلِكَ') return 'cela';
  if (ar.startsWith('إِذْ')) return 'quand';
  if (ar === 'حَتَّىٰ') return "jusqu'à";
  if (ar === 'بَلْ') return 'plutôt';
  if (ar === 'قَدْ') return 'certes';
  if (ar === 'كَ' || ar === 'كَمَا') return 'comme';
  if (ar === 'أَمْ') return 'ou bien';
  return '—';
}

function getParticleFrFromContext(s1, trWords, trIdx) {
  const pfr = getSimpleParticleFr(s1);
  // Try to find this particle in translation starting from trIdx
  for (let j = trIdx; j < Math.min(trIdx + 5, trWords.length); j++) {
    if (trWords[j].toLowerCase().replace(/[,.;:!?]/g, '') === pfr.toLowerCase()) {
      return { fr: pfr, newIdx: j + 1 };
    }
  }
  return { fr: pfr, newIdx: trIdx };
}

function getContentFrFromContext(s1, segs, segIdx, trWords, trIdx, step1) {
  // Find how many French words to take for this Arabic word
  // Look ahead to find the next segment that already has fr set
  let nextFrIdx = trWords.length;
  let wordsUntilNext = 0;

  for (let j = segIdx + 1; j < segs.length; j++) {
    wordsUntilNext++;
    if (segs[j].fr && segs[j].fr.length > 0) {
      // Find where this fr starts in trWords
      const frLower = segs[j].fr.toLowerCase().split(/\s+/)[0];
      for (let k = trIdx; k < trWords.length; k++) {
        if (trWords[k].toLowerCase().replace(/[,.;:!?]/g, '') === frLower.replace(/[,.;:!?]/g, '')) {
          nextFrIdx = k;
          break;
        }
      }
      break;
    }
  }

  // Take 1-3 words from translation
  const available = nextFrIdx - trIdx;
  if (available <= 0) return { fr: '', newIdx: trIdx };

  // Take 1 word for most cases, 2-3 for verbs with prepositions
  const take = Math.min(Math.max(1, Math.ceil(available / Math.max(1, wordsUntilNext))), 3);
  const fr = trWords.slice(trIdx, trIdx + take).join(' ');

  return { fr, newIdx: trIdx + take };
}
