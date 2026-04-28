const { createClient } = require('@supabase/supabase-js');
const supabase = createClient(
  'https://gwtgftosscjupxxsubev.supabase.co',
  process.env.SUPABASE_SERVICE_KEY
);

// Buckwalter-to-Latin readable transliteration map
const BW_TO_LATIN = {
  'A': 'a', 'b': 'b', 't': 't', 'v': 'th', 'j': 'j', 'H': 'h', 'x': 'kh',
  'd': 'd', '*': 'dh', 'r': 'r', 'z': 'z', 's': 's', '$': 'sh', 'S': 's',
  'D': 'd', 'T': 't', 'Z': 'z', 'E': '`', 'g': 'gh', 'f': 'f', 'q': 'q',
  'k': 'k', 'l': 'l', 'm': 'm', 'n': 'n', 'h': 'h', 'w': 'w', 'y': 'y',
  'p': 'h', 'Y': 'a', 'a': 'a', 'u': 'u', 'i': 'i', '~': '', 'o': '',
  'F': 'an', 'N': 'un', 'K': 'in', '{': 'a', '}': '', '|': 'a', '`': '`',
  '<': 'i', '>': 'a', '&': 'u', 'P': '',
};

function bwToLatin(bw) {
  if (!bw) return '';
  return bw.split('').map(c => BW_TO_LATIN[c] || c).join('');
}

// Arabic Unicode to basic Latin transliteration
const AR_TRANSLIT = {
  '\u0627': 'a',   // alif
  '\u0628': 'b',   // ba
  '\u062A': 't',   // ta
  '\u062B': 'th',  // tha
  '\u062C': 'j',   // jim
  '\u062D': 'h',   // ha
  '\u062E': 'kh',  // kha
  '\u062F': 'd',   // dal
  '\u0630': 'dh',  // dhal
  '\u0631': 'r',   // ra
  '\u0632': 'z',   // zay
  '\u0633': 's',   // sin
  '\u0634': 'sh',  // shin
  '\u0635': 's',   // sad
  '\u0636': 'd',   // dad
  '\u0637': 't',   // ta
  '\u0638': 'z',   // za
  '\u0639': '`',   // ayn
  '\u063A': 'gh',  // ghayn
  '\u0641': 'f',   // fa
  '\u0642': 'q',   // qaf
  '\u0643': 'k',   // kaf
  '\u0644': 'l',   // lam
  '\u0645': 'm',   // mim
  '\u0646': 'n',   // nun
  '\u0647': 'h',   // ha
  '\u0648': 'w',   // waw
  '\u064A': 'y',   // ya
  '\u0621': "'",   // hamza
  '\u0623': 'a',   // alif hamza above
  '\u0625': 'i',   // alif hamza below
  '\u0624': 'u',   // waw hamza
  '\u0626': 'y',   // ya hamza
  '\u0649': 'a',   // alif maqsura
  '\u0629': 'h',   // ta marbuta
  '\u0671': 'a',   // alif wasla
};

function arabicToLatin(arabic) {
  if (!arabic) return '';
  let result = '';
  for (const ch of arabic) {
    if (AR_TRANSLIT[ch]) result += AR_TRANSLIT[ch];
    // skip diacritics (tashkeel) \u064B-\u065F and \u0670
    else if (ch >= '\u064B' && ch <= '\u065F') continue;
    else if (ch === '\u0670') continue;
    else if (ch === ' ') result += ' ';
    // skip other Arabic marks
    else if (ch >= '\u0600' && ch <= '\u06FF') continue;
    else result += ch;
  }
  return result;
}

function hasArabic(text) {
  return /[\u0600-\u06FF]/.test(text);
}

function buildPhon(s1) {
  // Priority: phon (if Latin) > transliteration > buckwalter > arabicToLatin
  let phon = s1.phon || '';
  if (phon && !hasArabic(phon)) return phon;

  if (s1.transliteration && !hasArabic(s1.transliteration)) return s1.transliteration;
  if (s1.buckwalter) return bwToLatin(s1.buckwalter);
  if (s1.arabic) return arabicToLatin(s1.arabic);
  return '';
}

// Particle Arabic -> French mapping
const PARTICLE_FR_MAP = [
  // Conjunctions
  { match: ar => ar === '\u0648\u064E' || ar === '\u0648', fr: 'et' },
  { match: ar => ar === '\u0641\u064E' || ar === '\u0641', fr: 'alors' },
  { match: ar => ar === '\u062B\u064F\u0645\u0651\u064E' || ar === '\u062B\u0645', fr: 'puis' },
  { match: ar => ar === '\u0623\u064E\u0648\u0652' || ar === '\u0623\u0648', fr: 'ou' },
  // Prepositions
  { match: ar => ar === '\u0641\u0650\u0649' || ar === '\u0641\u0650\u064A' || ar === '\u0641\u064A', fr: 'dans' },
  { match: ar => ar === '\u0645\u0650\u0646\u0652' || ar === '\u0645\u0650\u0646' || ar === '\u0645\u0646', fr: 'de' },
  { match: ar => ar.startsWith('\u0625\u0650\u0644\u064E') || ar.startsWith('\u0627\u0644\u0649') || ar === '\u0625\u0644\u0649', fr: 'vers' },
  { match: ar => ar.startsWith('\u0639\u064E\u0644\u064E') || ar === '\u0639\u0644\u0649', fr: 'sur' },
  { match: ar => ar.startsWith('\u0628\u0650') || ar === '\u0628', fr: 'par' },
  { match: ar => ar.startsWith('\u0644\u0650') || (ar.length <= 3 && ar.startsWith('\u0644')), fr: 'pour' },
  // Negation
  { match: ar => ar === '\u0644\u064E\u0627' || ar === '\u0644\u0627' || ar === '\u0644\u0651\u064E\u0627', fr: 'ne pas' },
  { match: ar => ar === '\u0645\u064E\u0627' || ar === '\u0645\u0627', fr: 'ce que' },
  // Emphatic
  { match: ar => ar.startsWith('\u0623\u064E\u0646\u0651\u064E') || ar.startsWith('\u0623\u0646'), fr: 'que' },
  { match: ar => ar.startsWith('\u0625\u0650\u0646\u0651\u064E') || ar.startsWith('\u0625\u0646'), fr: 'certes' },
  // Conditional/temporal
  { match: ar => ar === '\u0625\u0650\u0630\u064E\u0627' || ar === '\u0625\u0630\u0627', fr: 'lorsque' },
  { match: ar => ar === '\u0625\u0650\u0630\u0652' || ar === '\u0625\u0630', fr: 'quand' },
  { match: ar => ar === '\u0625\u0650\u0646\u0652' || ar === '\u0625\u0646', fr: 'si' },
  { match: ar => ar === '\u0644\u064E\u0645\u0652' || ar === '\u0644\u0645', fr: 'ne pas' },
  { match: ar => ar === '\u0642\u064E\u062F\u0652' || ar === '\u0642\u062F', fr: 'certes' },
  // Relative pronouns
  { match: ar => ar.startsWith('\u0671\u0644\u0651\u064E\u0630\u0650') || ar.startsWith('\u0627\u0644\u0630\u064A') || ar.startsWith('\u0627\u0644\u0651\u064E\u0630\u0650'), fr: ar => ar.includes('\u064A\u0646\u064E') ? 'ceux qui' : 'celui qui' },
  // Demonstratives
  { match: ar => ar.startsWith('\u0630\u064E\u0670\u0644\u0650') || ar.startsWith('\u0630\u0644\u0643'), fr: 'cela' },
  { match: ar => ar.startsWith('\u0647\u064E\u0670\u0630\u064E') || ar.startsWith('\u0647\u0630\u0627'), fr: 'ceci' },
  // Pronouns
  { match: ar => ar === '\u0647\u064F\u0648\u064E' || ar === '\u0647\u0648', fr: 'il' },
  { match: ar => ar === '\u0647\u064F\u0645\u0652' || ar === '\u0647\u0645', fr: 'eux' },
  { match: ar => ar === '\u0647\u0650\u064A\u064E' || ar === '\u0647\u064A', fr: 'elle' },
  { match: ar => ar.endsWith('\u0643\u064F\u0645\u0652') || ar.endsWith('\u0643\u0645'), fr: 'vous' },
  { match: ar => ar === '\u0623\u064E\u0646\u062A\u064F\u0645\u0652', fr: 'vous' },
  // an (that)
  { match: ar => ar === '\u0623\u064E\u0646' || ar === '\u0623\u0646\u0652', fr: 'que' },
  // kay (so that)
  { match: ar => ar.startsWith('\u0643\u064E\u064A'), fr: 'afin que' },
  // bal (rather)
  { match: ar => ar === '\u0628\u064E\u0644\u0652' || ar === '\u0628\u0644', fr: 'plutot' },
  // hatta (until)
  { match: ar => ar.startsWith('\u062D\u064E\u062A\u0651\u064E') || ar.startsWith('\u062D\u062A\u0649'), fr: 'jusqu\'a' },
  // lam emphatic
  { match: ar => ar === '\u0644\u064E' || (ar === '\u0644' && ar.length === 1), fr: 'certes' },
  // ya (vocative)
  { match: ar => ar === '\u064A\u064E\u0670' || ar === '\u064A\u0627', fr: 'o' },
];

function getParticleFr(s1) {
  const ar = s1.arabic || '';
  for (const rule of PARTICLE_FR_MAP) {
    if (rule.match(ar)) {
      return typeof rule.fr === 'function' ? rule.fr(ar) : rule.fr;
    }
  }
  return '';
}

// Proper nouns that should NOT be particles
const PROPER_NOUNS = [
  '\u0645\u064F\u0648\u0633\u064E\u0649', '\u0645\u0648\u0633\u0649', // Moussa
  '\u0647\u064E\u0670\u0631\u064F\u0648\u0646\u064E', '\u0647\u0627\u0631\u0648\u0646', // Haroun
  '\u0625\u0650\u0628\u0652\u0631\u064E\u0670\u0647\u0650\u064A\u0645\u064E', '\u0625\u0628\u0631\u0627\u0647\u064A\u0645', // Ibrahim
  '\u0625\u0650\u0633\u0652\u0645\u064E\u0670\u0639\u0650\u064A\u0644\u064E', '\u0625\u0633\u0645\u0627\u0639\u064A\u0644', // Ismail
  '\u0625\u0650\u0633\u0652\u062D\u064E\u0670\u0642\u064E', '\u0625\u0633\u062D\u0627\u0642', // Ishaq
  '\u064A\u064E\u0639\u0652\u0642\u064F\u0648\u0628\u064E', '\u064A\u0639\u0642\u0648\u0628', // Yaqoub
  '\u0622\u062F\u064E\u0645\u064E', '\u0622\u062F\u0645', // Adam
  '\u0639\u0650\u064A\u0633\u064E\u0649', '\u0639\u064A\u0633\u0649', // Issa
  '\u062F\u064E\u0627\u0648\u064F\u0648\u062F\u064E', '\u062F\u0627\u0648\u062F', // Daoud
  '\u0633\u064F\u0644\u064E\u064A\u0652\u0645\u064E\u0670\u0646\u064E', '\u0633\u0644\u064A\u0645\u0627\u0646', // Suleiman
  '\u062C\u064E\u0627\u0644\u064F\u0648\u062A\u064E', '\u062C\u0627\u0644\u0648\u062A', // Jalout
  '\u0637\u064E\u0627\u0644\u064F\u0648\u062A\u064E', '\u0637\u0627\u0644\u0648\u062A', // Talout
  '\u0645\u064E\u0631\u0652\u064A\u064E\u0645\u064E', '\u0645\u0631\u064A\u0645', // Maryam
  '\u0627\u0644\u0644\u0651\u064E\u0647\u064E', '\u0627\u0644\u0644\u0647', '\u0671\u0644\u0644\u0651\u064E\u0647\u064E', '\u0671\u0644\u0644\u0647', // Allah
];

function isProperNoun(arabic) {
  if (!arabic) return false;
  const clean = arabic.replace(/[\u064B-\u065F\u0670]/g, '');
  for (const pn of PROPER_NOUNS) {
    const pnClean = pn.replace(/[\u064B-\u065F\u0670]/g, '');
    if (clean === pnClean) return true;
  }
  return false;
}

function truncateSense(sense) {
  if (!sense) return '';
  if (sense.length <= 30) return sense;
  // Truncate at first dash or comma
  const dashIdx = sense.indexOf(' — ');
  if (dashIdx > 0 && dashIdx <= 30) return sense.slice(0, dashIdx);
  const commaIdx = sense.indexOf(',');
  if (commaIdx > 0 && commaIdx <= 30) return sense.slice(0, commaIdx);
  return sense.slice(0, 30);
}

function segmentsAreGood(segments) {
  if (!segments || !Array.isArray(segments) || segments.length === 0) return false;

  for (const seg of segments) {
    // Check phon is Latin (no Arabic)
    if (seg.phon && hasArabic(seg.phon)) return false;

    // Check content words have word_key
    if (!seg.is_particle && !seg.word_key) return false;

    // Check fr has actual French (not concept names with /)
    if (seg.fr && /^[A-Z]+\/[A-Z]+/.test(seg.fr)) return false;

    // Check not grouped (spaces in arabic means grouped)
    if (seg.arabic && seg.arabic.includes(' ') && seg.arabic.length > 10) return false;
  }

  // Check that at least some segments have fr
  const withFr = segments.filter(s => s.fr && s.fr.trim()).length;
  if (withFr < segments.length * 0.5) return false;

  return true;
}

// Assign French tokens to Arabic segments using particle matching + proportional distribution
function assignFrenchToSegments(step1, fullTranslation, vwaMap) {
  const frTokens = fullTranslation.split(/\s+/).filter(t => t.length > 0);
  const assignments = new Array(step1.length).fill('');
  const used = new Array(frTokens.length).fill(false);

  // Phase 1: Match known particles to French equivalents by position proximity
  for (let i = 0; i < step1.length; i++) {
    const s1 = step1[i];
    if (s1.type !== 'particle') continue;

    const pfr = getParticleFr(s1);
    if (!pfr || pfr === '') continue;

    const pfrWords = pfr.toLowerCase().split(/\s+/);
    const firstWord = pfrWords[0];

    // Estimate position proportionally
    const ratio = i / Math.max(step1.length, 1);
    const estPos = Math.floor(ratio * frTokens.length);

    let bestDist = Infinity;
    let bestIdx = -1;

    for (let j = 0; j < frTokens.length; j++) {
      if (used[j]) continue;
      const w = frTokens[j].toLowerCase().replace(/[,.;:!?'"()]/g, '');
      if (w === firstWord) {
        const dist = Math.abs(j - estPos);
        if (dist < bestDist) {
          bestDist = dist;
          bestIdx = j;
        }
      }
    }

    if (bestIdx >= 0) {
      // Assign this token (and consecutive ones for multi-word particles like "ne pas")
      const tokensToAssign = [];
      tokensToAssign.push(frTokens[bestIdx]);
      used[bestIdx] = true;

      // For "ne pas" type particles, also grab "pas" if nearby
      if (pfrWords.length > 1 && bestIdx + 1 < frTokens.length) {
        for (let k = 1; k < pfrWords.length; k++) {
          const nextIdx = bestIdx + k;
          if (nextIdx < frTokens.length && !used[nextIdx]) {
            const nextW = frTokens[nextIdx].toLowerCase().replace(/[,.;:!?'"()]/g, '');
            if (nextW === pfrWords[k]) {
              tokensToAssign.push(frTokens[nextIdx]);
              used[nextIdx] = true;
            }
          }
        }
      }
      assignments[i] = tokensToAssign.join(' ');
    }
  }

  // Phase 2: Distribute remaining French tokens among content words in order
  const remainingTokenIdxs = [];
  for (let j = 0; j < frTokens.length; j++) {
    if (!used[j]) remainingTokenIdxs.push(j);
  }

  const contentIdxs = [];
  for (let i = 0; i < step1.length; i++) {
    if (step1[i].type !== 'particle' || assignments[i] === '') {
      if (step1[i].type !== 'particle') contentIdxs.push(i);
    }
  }

  if (contentIdxs.length > 0 && remainingTokenIdxs.length > 0) {
    // Distribute proportionally
    const tokensPerWord = remainingTokenIdxs.length / contentIdxs.length;

    for (let c = 0; c < contentIdxs.length; c++) {
      const segIdx = contentIdxs[c];
      const startT = Math.floor(c * tokensPerWord);
      const endT = (c === contentIdxs.length - 1)
        ? remainingTokenIdxs.length
        : Math.floor((c + 1) * tokensPerWord);

      const toks = [];
      for (let t = startT; t < endT; t++) {
        toks.push(frTokens[remainingTokenIdxs[t]]);
      }
      assignments[segIdx] = toks.join(' ');
    }
  }

  // Phase 3: Particles that didn't match anything get their default fr
  for (let i = 0; i < step1.length; i++) {
    if (step1[i].type === 'particle' && !assignments[i]) {
      assignments[i] = getParticleFr(step1[i]);
    }
  }

  return assignments;
}

// ============================================================
// MAIN
// ============================================================
(async () => {
  const MIN_VID = 107;
  const MAX_VID = 293;
  const PAGE_SIZE = 50;

  console.log('=== REBUILD SEGMENTS: verse_id ' + MIN_VID + '-' + MAX_VID + ' ===\n');

  // Step 1: Fetch all VWA for this range (paginated)
  console.log('Fetching VWA...');
  const allVwa = [];
  let vwaOffset = 0;
  while (true) {
    const { data, error } = await supabase
      .from('verse_word_analyses')
      .select('verse_id, position, word_key, sense_chosen')
      .gte('verse_id', MIN_VID)
      .lte('verse_id', MAX_VID)
      .order('verse_id')
      .order('position')
      .range(vwaOffset, vwaOffset + 999);

    if (error) { console.error('VWA fetch error:', error.message); break; }
    if (!data || data.length === 0) break;
    allVwa.push(...data);
    if (data.length < 1000) break;
    vwaOffset += 1000;
  }
  console.log('VWA fetched: ' + allVwa.length + ' entries');

  // Build VWA map: verse_id -> { position -> vwa }
  const vwaByVerse = {};
  for (const w of allVwa) {
    if (!vwaByVerse[w.verse_id]) vwaByVerse[w.verse_id] = {};
    vwaByVerse[w.verse_id][w.position] = w;
  }

  // Step 2: Process verses in pages
  let totalProcessed = 0;
  let totalSkipped = 0;
  let totalRebuilt = 0;
  let totalErrors = 0;
  const warnings = [];

  for (let pageStart = MIN_VID; pageStart <= MAX_VID; pageStart += PAGE_SIZE) {
    const pageEnd = Math.min(pageStart + PAGE_SIZE - 1, MAX_VID);

    const { data: verses, error } = await supabase
      .from('verse_analyses')
      .select('id, verse_id, segments, segments_step1, full_translation')
      .gte('verse_id', pageStart)
      .lte('verse_id', pageEnd)
      .order('verse_id');

    if (error) {
      console.error('Fetch error for verse_id ' + pageStart + '-' + pageEnd + ':', error.message);
      totalErrors++;
      continue;
    }

    if (!verses || verses.length === 0) continue;

    for (const va of verses) {
      totalProcessed++;
      const vid = va.verse_id;
      const vn = vid - 7; // verse number for sourate 2

      // Parse segments_step1
      let step1 = va.segments_step1;
      if (typeof step1 === 'string') {
        try { step1 = JSON.parse(step1); } catch (e) {
          warnings.push('V' + vn + ' (vid=' + vid + '): segments_step1 parse error');
          totalErrors++;
          continue;
        }
      }

      if (!step1 || !Array.isArray(step1) || step1.length === 0) {
        warnings.push('V' + vn + ' (vid=' + vid + '): no segments_step1');
        totalErrors++;
        continue;
      }

      // Parse current segments
      let currentSegs = va.segments;
      if (typeof currentSegs === 'string') {
        try { currentSegs = JSON.parse(currentSegs); } catch (e) { currentSegs = null; }
      }

      // Rule 6: Check if already good
      if (segmentsAreGood(currentSegs)) {
        totalSkipped++;
        continue;
      }

      // Build new segments
      const vwaMap = vwaByVerse[vid] || {};
      const fullTr = va.full_translation || '';

      // Assign French words
      const frAssignments = assignFrenchToSegments(step1, fullTr, vwaMap);

      const newSegs = [];
      for (let i = 0; i < step1.length; i++) {
        const s1 = step1[i];

        // Rule 1: phon must be Latin
        const phon = buildPhon(s1);

        // Rule 3: is_particle classification
        let isParticle = s1.type === 'particle';
        if (isParticle && isProperNoun(s1.arabic)) {
          isParticle = false;
        }

        // Rule 2: word_key assignment
        let wordKey = s1.key || s1.word_key || null;
        const vwa = vwaMap[s1.position];
        if (!wordKey && vwa) {
          wordKey = vwa.word_key;
        }
        // Fallback: try to find VWA by matching word_key to any entry for this verse
        if (!wordKey && !isParticle) {
          // Look for a VWA entry that might match by position proximity
          for (const pos of Object.keys(vwaMap)) {
            const candidate = vwaMap[pos];
            if (parseInt(pos) === s1.position) {
              wordKey = candidate.word_key;
              break;
            }
          }
        }

        // Rule 5: sense_retenu
        let senseRetenu = '';
        if (vwa && !isParticle) {
          senseRetenu = truncateSense(vwa.sense_chosen || '');
        }
        // Also try matching by word_key if position didn't match
        if (!senseRetenu && wordKey && !isParticle) {
          for (const pos of Object.keys(vwaMap)) {
            const candidate = vwaMap[pos];
            if (candidate.word_key === wordKey) {
              senseRetenu = truncateSense(candidate.sense_chosen || '');
              break;
            }
          }
        }

        // Rule 4: French from assignment
        let fr = frAssignments[i] || '';
        if (!fr && isParticle) {
          fr = getParticleFr(s1);
        }

        newSegs.push({
          position: s1.position,
          arabic: s1.arabic || '',
          phon: phon,
          fr: fr,
          is_particle: isParticle,
          word_key: wordKey,
          pos: s1.pos || (isParticle ? 'particule' : ''),
          sense_retenu: senseRetenu,
        });
      }

      // Update in DB
      const { error: upErr } = await supabase
        .from('verse_analyses')
        .update({ segments: newSegs })
        .eq('id', va.id);

      if (upErr) {
        warnings.push('V' + vn + ' (vid=' + vid + '): update error: ' + upErr.message);
        totalErrors++;
      } else {
        totalRebuilt++;
        const emptyFr = newSegs.filter(s => !s.fr && !s.is_particle).length;
        const arabicPhon = newSegs.filter(s => s.phon && hasArabic(s.phon)).length;
        const nullKeys = newSegs.filter(s => !s.is_particle && !s.word_key).length;
        const flags = [];
        if (emptyFr > 0) flags.push(emptyFr + ' empty fr');
        if (arabicPhon > 0) flags.push(arabicPhon + ' arabic phon');
        if (nullKeys > 0) flags.push(nullKeys + ' null keys');
        console.log('V' + vn + ': ' + newSegs.length + ' segs' + (flags.length ? ' [' + flags.join(', ') + ']' : ' OK'));
      }
    }
  }

  // Summary
  console.log('\n=== SUMMARY ===');
  console.log('Processed: ' + totalProcessed);
  console.log('Rebuilt:   ' + totalRebuilt);
  console.log('Skipped:   ' + totalSkipped + ' (already good)');
  console.log('Errors:    ' + totalErrors);

  if (warnings.length > 0) {
    console.log('\nWarnings:');
    for (const w of warnings) {
      console.log('  - ' + w);
    }
  }
})();
