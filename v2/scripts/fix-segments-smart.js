const {createClient} = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// Smart segment fr mapping using Arabic word meaning + French translation alignment
(async () => {
  const badVns = [25,26,213,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,240,245,246];

  for (const vn of badVns) {
    const vid = vn + 7;
    const {data: va} = await supabase.from('verse_analyses')
      .select('id, full_translation, segments, segments_step1')
      .eq('verse_id', vid).single();

    if (!va) continue;

    let step1 = typeof va.segments_step1 === 'string' ? JSON.parse(va.segments_step1) : va.segments_step1;
    const tr = va.full_translation || '';

    // Get VWA for this verse
    const {data: vwaList} = await supabase.from('verse_word_analyses')
      .select('position, word_key, sense_chosen')
      .eq('verse_id', vid)
      .order('position');

    const vwaMap = {};
    if (vwaList) {
      for (const w of vwaList) vwaMap[w.position] = w;
    }

    // Build segments from scratch using step1 + translation
    const newSegs = [];

    // Split translation into tokens
    const trTokens = tokenizeFr(tr);
    let tIdx = 0;

    for (let i = 0; i < step1.length; i++) {
      const s1 = step1[i];
      const vwa = vwaMap[s1.position];

      const seg = {
        position: s1.position,
        phon: s1.phon || '',
        arabic: s1.arabic || '',
        pos: s1.pos || 'particule',
        is_particle: s1.type === 'particle',
        word_key: s1.key || null,
        sense_retenu: vwa ? vwa.sense_chosen : '',
      };

      // Determine how many French tokens this Arabic word takes
      const frCount = estimateFrTokens(s1, step1, i, trTokens, tIdx);

      if (frCount > 0 && tIdx + frCount <= trTokens.length) {
        seg.fr = trTokens.slice(tIdx, tIdx + frCount).join(' ');
        tIdx += frCount;
      } else if (s1.type === 'particle') {
        // Particles might be absorbed into prefix/suffix of adjacent French words
        seg.fr = getParticleFr(s1);
      } else {
        seg.fr = vwa ? vwa.sense_chosen : '—';
      }

      newSegs.push(seg);
    }

    // If we didn't consume all tokens, append remainder to last content segment
    if (tIdx < trTokens.length) {
      const remaining = trTokens.slice(tIdx).join(' ');
      const lastContent = [...newSegs].reverse().find(s => !s.is_particle);
      if (lastContent) {
        lastContent.fr += ' ' + remaining;
      }
    }

    // Update
    await supabase.from('verse_analyses')
      .update({ segments: newSegs })
      .eq('id', va.id);

    const emptyFr = newSegs.filter(s => !s.fr).length;
    console.log('V'+vn+': '+newSegs.length+' segments' + (emptyFr ? ' ('+emptyFr+' vides)' : ' OK'));
  }
})();

function tokenizeFr(text) {
  // Split French text preserving punctuation attached to words
  return text.split(/\s+/).filter(t => t.length > 0);
}

function estimateFrTokens(s1, allStep1, idx, trTokens, tIdx) {
  // Estimate how many French tokens correspond to this Arabic word

  if (tIdx >= trTokens.length) return 0;

  const remaining = trTokens.length - tIdx;
  const remainingAr = allStep1.length - idx;

  if (remainingAr <= 0) return remaining;

  // Particles typically take 0-1 French words
  if (s1.type === 'particle') {
    // Check if prefix particles (wa, fa, bi, li) are absorbed
    const ar = s1.arabic || '';
    if (ar === 'وَ' || ar === 'فَ') {
      // wa/fa are often 'et'/'alors' - 1 token
      const next = trTokens[tIdx] || '';
      if (next.toLowerCase() === 'et' || next.toLowerCase() === 'alors' || next.toLowerCase() === 'puis') return 1;
      return 0; // absorbed into next word
    }
    if (ar.startsWith('أَنَّ') || ar.startsWith('إِنَّ')) return 1; // 'que' or 'certes'
    if (ar === 'لَا' || ar === 'لَّا') return 1; // 'ne' (pas will be with verb)

    // Check if the particle matches the next French token
    const pfr = getParticleFr(s1).toLowerCase();
    if (pfr && trTokens[tIdx] && trTokens[tIdx].toLowerCase().replace(/[,.;:!?]/g, '') === pfr) return 1;

    // Suffix pronouns: typically 0 (absorbed)
    if (ar.endsWith('كُمْ') || ar.endsWith('هُمْ') || ar.endsWith('هُ')) return 0;

    return 1; // default: take 1 token
  }

  // Content words: estimate based on average distribution
  // Count remaining content words
  let contentRemaining = 0;
  for (let j = idx; j < allStep1.length; j++) {
    if (allStep1[j].type !== 'particle') contentRemaining++;
  }

  if (contentRemaining <= 0) return remaining;

  // Average tokens per content word
  const avgTokens = remaining / contentRemaining;

  // Nouns typically take 1-2 tokens (article + noun)
  // Verbs typically take 1-3 tokens (verb + pronoun/aux)
  // Defined nouns (with al-) typically take 2 tokens (le/la + noun)

  if (s1.pos === 'nom') {
    if (s1.definite || (s1.arabic && s1.arabic.startsWith('ٱل'))) {
      return Math.min(2, remaining); // le/la + nom
    }
    if (s1.suffix_pronoun) {
      return Math.min(2, remaining); // nom + possessif
    }
    return Math.min(Math.ceil(avgTokens), remaining);
  }

  if (s1.pos === 'verbe') {
    if (s1.prefix_particle) {
      // Has prefix like wa- already handled by separate particle segment
      return Math.min(Math.ceil(avgTokens), remaining);
    }
    return Math.min(Math.ceil(avgTokens), remaining);
  }

  return Math.min(Math.max(1, Math.round(avgTokens)), remaining);
}

function getParticleFr(s1) {
  const ar = s1.arabic || '';
  if (ar === 'وَ' || ar.startsWith('وَ')) return 'et';
  if (ar === 'فَ' || ar.startsWith('فَ')) return 'alors';
  if (ar === 'فِى' || ar === 'فِي') return 'dans';
  if (ar === 'مِنْ' || ar === 'مِن') return 'de';
  if (ar.startsWith('إِلَ')) return 'vers';
  if (ar.startsWith('عَلَ')) return 'sur';
  if (ar.startsWith('بِ')) return 'par';
  if (ar.startsWith('لِ') || ar.startsWith('لَّ')) return 'pour';
  if (ar.startsWith('أَنَّ') || ar.startsWith('أَنَ')) return 'que';
  if (ar.startsWith('إِنَّ') || ar.startsWith('إِنَ')) return 'certes';
  if (ar === 'لَا') return 'ne pas';
  if (ar === 'مَا') return 'ce que';
  if (ar === 'إِذَا') return 'lorsque';
  if (ar === 'ثُمَّ') return 'puis';
  if (ar === 'أَوْ') return 'ou';
  if (ar.endsWith('كُمْ')) return 'vous';
  if (ar.endsWith('هُمْ')) return 'eux';
  if (ar.startsWith('ٱلَّذِ') || ar.startsWith('الَّذِ')) return ar.includes('ينَ') ? 'ceux qui' : 'celui qui';
  return '—';
}
