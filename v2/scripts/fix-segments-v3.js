const {createClient} = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// V3: Use old grouped segments as guide to redistribute French within each group
(async () => {
  const badVns = [25,26,213,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,240,245,246];

  for (const vn of badVns) {
    const vid = vn + 7;
    const {data: va} = await supabase.from('verse_analyses')
      .select('id, full_translation, segments, segments_step1')
      .eq('verse_id', vid).single();

    if (!va) continue;

    let step1 = typeof va.segments_step1 === 'string' ? JSON.parse(va.segments_step1) : va.segments_step1;

    // Re-fetch old grouped segments from before our fix
    // We need to reconstruct the old grouping from step1 + translation
    // Since we already overwrote segments, let's use the translation directly

    // Get VWA for sense_retenu
    const {data: vwaList} = await supabase.from('verse_word_analyses')
      .select('position, word_key, sense_chosen')
      .eq('verse_id', vid)
      .order('position');

    const vwaMap = {};
    if (vwaList) {
      for (const w of vwaList) vwaMap[w.position] = w;
    }

    const tr = va.full_translation || '';

    // Build proper segments by matching each Arabic word to its French translation
    // For each step1 word, find the French word(s) that translate it
    const newSegs = [];
    const assignments = assignFrToAr(step1, tr, vwaMap);

    for (let i = 0; i < step1.length; i++) {
      const s1 = step1[i];
      const vwa = vwaMap[s1.position];

      newSegs.push({
        position: s1.position,
        phon: s1.phon || '',
        arabic: s1.arabic || '',
        pos: s1.pos || 'particule',
        is_particle: s1.type === 'particle',
        word_key: s1.key || null,
        sense_retenu: vwa ? vwa.sense_chosen : '',
        fr: assignments[i] || (s1.type === 'particle' ? getParticleFr(s1) : '—'),
      });
    }

    await supabase.from('verse_analyses')
      .update({ segments: newSegs })
      .eq('id', va.id);

    console.log('V' + vn + ': ' + newSegs.length + ' segments');
  }
})();

function assignFrToAr(step1, translation, vwaMap) {
  // Split translation into words
  const words = translation.split(/\s+/);
  const assignments = new Array(step1.length).fill('');
  const used = new Array(words.length).fill(false);

  // Phase 1: Match particles to their French equivalents
  for (let i = 0; i < step1.length; i++) {
    const s1 = step1[i];
    if (s1.type !== 'particle') continue;

    const pfr = getParticleFr(s1);
    if (!pfr || pfr === '—') continue;

    // Find nearest unused occurrence of this particle word in French
    // Estimate position proportionally
    const ratio = i / step1.length;
    const estPos = Math.floor(ratio * words.length);

    let bestDist = Infinity;
    let bestIdx = -1;

    for (let j = 0; j < words.length; j++) {
      if (used[j]) continue;
      const w = words[j].toLowerCase().replace(/[,.;:!?'"]/g, '');
      if (w === pfr.toLowerCase() || (pfr === 'ne pas' && w === 'ne') || (pfr === 'pour' && w === 'pour') || (pfr === 'vous' && w === 'vous')) {
        const dist = Math.abs(j - estPos);
        if (dist < bestDist) {
          bestDist = dist;
          bestIdx = j;
        }
      }
    }

    if (bestIdx >= 0) {
      assignments[i] = words[bestIdx];
      used[bestIdx] = true;

      // If 'ne pas', also grab 'pas'
      if (pfr === 'ne pas' && bestIdx + 1 < words.length) {
        const next = words[bestIdx + 1].toLowerCase().replace(/[,.;:!?]/g, '');
        if (next === 'pas' || next === 'point') {
          assignments[i] += ' ' + words[bestIdx + 1];
          used[bestIdx + 1] = true;
        }
      }
    }
  }

  // Phase 2: For content words, assign remaining French words in order
  // Group consecutive unused French words
  const contentIdxs = [];
  for (let i = 0; i < step1.length; i++) {
    if (step1[i].type !== 'particle' || !assignments[i]) {
      if (step1[i].type !== 'particle') contentIdxs.push(i);
    }
  }

  // Get remaining unused French words in order
  const unusedWords = [];
  for (let j = 0; j < words.length; j++) {
    if (!used[j]) unusedWords.push({ word: words[j], idx: j });
  }

  if (contentIdxs.length > 0 && unusedWords.length > 0) {
    // Distribute unused words among content Arabic words proportionally
    const wordsPerContent = unusedWords.length / contentIdxs.length;

    let uIdx = 0;
    for (let c = 0; c < contentIdxs.length; c++) {
      const arIdx = contentIdxs[c];
      const s1 = step1[arIdx];

      // How many French words for this Arabic word?
      let count;
      if (c === contentIdxs.length - 1) {
        // Last content word gets all remaining
        count = unusedWords.length - uIdx;
      } else {
        count = Math.max(1, Math.round(wordsPerContent));

        // Adjust: verbs with prefixes get more, particles get less
        if (s1.prefix_particle) count = Math.max(1, count);
        if (s1.suffix_pronoun) count = Math.max(1, count + 1);
      }

      count = Math.min(count, unusedWords.length - uIdx);

      if (count > 0) {
        assignments[arIdx] = unusedWords.slice(uIdx, uIdx + count).map(u => u.word).join(' ');
        uIdx += count;
      }
    }
  }

  // Phase 3: Fill any remaining empty assignments
  for (let i = 0; i < step1.length; i++) {
    if (!assignments[i] || assignments[i] === '') {
      if (step1[i].type === 'particle') {
        assignments[i] = getParticleFr(step1[i]);
      }
    }
  }

  return assignments;
}

function getParticleFr(s1) {
  const ar = s1.arabic || '';
  if (ar === 'وَ') return 'et';
  if (ar === 'فَ') return 'alors';
  if (ar === 'فِى' || ar === 'فِي') return 'dans';
  if (ar === 'مِنْ' || ar === 'مِن' || ar === 'مِّن' || ar === 'مِّنَ') return 'de';
  if (ar.startsWith('إِلَ') || ar.startsWith('إِلَىٰ')) return 'vers';
  if (ar.startsWith('عَلَ') || ar.startsWith('عَلَىٰ')) return 'sur';
  if (ar === 'بِ') return 'par';
  if (ar.startsWith('لِ') || ar === 'لَّ') return 'pour';
  if (ar.startsWith('أَنَّ') || ar.startsWith('أَنَ')) return 'que';
  if (ar.startsWith('إِنَّ') || ar.startsWith('إِنَ')) return 'certes';
  if (ar === 'لَا' || ar === 'لَّا') return 'ne pas';
  if (ar === 'مَا') return 'ce que';
  if (ar === 'إِذَا') return 'lorsque';
  if (ar === 'ثُمَّ') return 'puis';
  if (ar === 'أَوْ') return 'ou';
  if (ar.endsWith('كُمْ') && !ar.startsWith('ٱل') && ar.length < 8) return 'vous';
  if (ar.endsWith('هُمْ') && ar.length < 8) return 'eux';
  if (ar.startsWith('ٱلَّذِ') || ar.startsWith('الَّذِ')) return ar.includes('ينَ') ? 'ceux qui' : 'celui qui';
  if (ar === 'ذَٰلِكَ') return 'cela';
  if (ar === 'حَتَّىٰ' || ar === 'حَتَّى') return "jusqu'à";
  if (ar === 'بَلْ') return 'plutôt';
  if (ar === 'كَمَا') return 'comme';
  if (ar === 'هُوَ') return 'il';
  if (ar === 'هُمْ') return 'eux';
  if (ar === 'هَـٰذَا') return 'ceci';
  return '—';
}
