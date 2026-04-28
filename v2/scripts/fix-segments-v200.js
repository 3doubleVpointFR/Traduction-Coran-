const {createClient} = require('@supabase/supabase-js');
const supabase = createClient(
  'https://gwtgftosscjupxxsubev.supabase.co',
  process.env.SUPABASE_SERVICE_KEY
);

// Fix broken segments in verses 200-286 of Sourate 2 (verse_id 207-293)

const VERSE_ID_MIN = 207;
const VERSE_ID_MAX = 293;

// ─── Detection helpers ───

function hasArabic(str) {
  return /[\u0600-\u06FF]/.test(str);
}

function isBadPhon(phon, wordKey) {
  if (!phon || phon.trim() === '') return true;
  if (hasArabic(phon)) return true;
  // Check if phon is same as word_key (Buckwalter leak)
  if (wordKey && phon === wordKey) return true;
  // Check if phon is all-consonant Latin (no vowels at all)
  const latin = phon.replace(/[-' ]/g, '');
  if (latin.length === 0) return false;
  // Must contain at least one vowel-like character
  if (!/[aeiouyāūīàèùâêîôûëïüéAEIOUY]/.test(latin)) return true;
  return false;
}

function isBadFr(fr) {
  if (!fr || fr.trim() === '') return true;
  if (fr === '—' || fr === '–' || fr === '-') return true;
  if (fr.includes('/')) return true;
  return false;
}

function isArabicInPhon(phon) {
  return phon && hasArabic(phon);
}

function isMissingWordKey(seg) {
  return !seg.is_particle && !seg.word_key;
}

// ─── Step 1: Identify broken verses ───

async function fetchAllAnalyses() {
  // Paginate to handle 1000-row limit
  const all = [];
  let from = 0;
  const pageSize = 500;
  while (true) {
    const {data, error} = await supabase.from('verse_analyses')
      .select('id, verse_id, segments, segments_step1')
      .gte('verse_id', VERSE_ID_MIN)
      .lte('verse_id', VERSE_ID_MAX)
      .order('verse_id')
      .range(from, from + pageSize - 1);
    if (error) throw new Error('Fetch error: ' + error.message);
    if (!data || data.length === 0) break;
    all.push(...data);
    if (data.length < pageSize) break;
    from += pageSize;
  }
  return all;
}

async function fetchAllVWA() {
  const all = [];
  let from = 0;
  const pageSize = 1000;
  while (true) {
    const {data, error} = await supabase.from('verse_word_analyses')
      .select('verse_id, position, word_key, sense_chosen')
      .gte('verse_id', VERSE_ID_MIN)
      .lte('verse_id', VERSE_ID_MAX)
      .order('verse_id')
      .range(from, from + pageSize - 1);
    if (error) throw new Error('VWA fetch error: ' + error.message);
    if (!data || data.length === 0) break;
    all.push(...data);
    if (data.length < pageSize) break;
    from += pageSize;
  }
  return all;
}

function parseJson(val) {
  if (!val) return null;
  if (typeof val === 'string') {
    try { return JSON.parse(val); } catch { return null; }
  }
  return val;
}

function diagnoseVerse(va) {
  const segs = parseJson(va.segments);
  if (!segs || !Array.isArray(segs) || segs.length === 0) return { broken: true, issues: ['no segments'], total: 0, badCount: 0 };

  let badCount = 0;
  const issues = [];

  for (const seg of segs) {
    let segBad = false;
    if (isBadPhon(seg.phon, seg.word_key)) { segBad = true; }
    if (isBadFr(seg.fr)) { segBad = true; }
    if (isArabicInPhon(seg.phon)) { segBad = true; }
    if (isMissingWordKey(seg)) { segBad = true; }
    if (segBad) badCount++;
  }

  const ratio = badCount / segs.length;
  return { broken: ratio > 0.3, total: segs.length, badCount, ratio };
}

// ─── Rebuild helpers ───

function getCleanPhon(s1) {
  // Priority 1: step1.phon if it's proper Latin with vowels
  if (s1.phon && !hasArabic(s1.phon) && /[aeiouyāūīàèùâêîôûëïüéAEIOUY]/.test(s1.phon)) {
    return s1.phon;
  }
  // Priority 2: transliteration
  if (s1.transliteration && !hasArabic(s1.transliteration) && /[aeiouyāūīàèùâêîôûëïüéAEIOUY]/.test(s1.transliteration)) {
    return s1.transliteration;
  }
  // Priority 3: buckwalter with basic vowel conversion
  if (s1.buckwalter) {
    return basicBwToPhon(s1.buckwalter);
  }
  // Priority 4: phon even if imperfect
  if (s1.phon && !hasArabic(s1.phon)) return s1.phon;
  // Fallback: arabic
  return s1.arabic || '?';
}

function basicBwToPhon(bw) {
  // Minimal Buckwalter to readable phonetic
  return bw
    .replace(/A/g, 'ā').replace(/w/g, 'w').replace(/y/g, 'y')
    .replace(/b/g, 'b').replace(/t/g, 't').replace(/v/g, 'th')
    .replace(/j/g, 'j').replace(/H/g, 'ḥ').replace(/x/g, 'kh')
    .replace(/d/g, 'd').replace(/\*/g, 'dh').replace(/r/g, 'r')
    .replace(/z/g, 'z').replace(/s/g, 's').replace(/\$/g, 'sh')
    .replace(/S/g, 'ṣ').replace(/D/g, 'ḍ').replace(/T/g, 'ṭ')
    .replace(/Z/g, 'ẓ').replace(/E/g, 'ʿ').replace(/g/g, 'gh')
    .replace(/f/g, 'f').replace(/q/g, 'q').replace(/k/g, 'k')
    .replace(/l/g, 'l').replace(/m/g, 'm').replace(/n/g, 'n')
    .replace(/h/g, 'h').replace(/p/g, 'tā')
    .replace(/i/g, 'i').replace(/u/g, 'u').replace(/a/g, 'a')
    .replace(/~/g, '').replace(/o/g, '').replace(/`/g, 'ā')
    .replace(/\{/g, 'i').replace(/\}/g, '')
    .replace(/\|/g, 'ā').replace(/>/g, '').replace(/</g, '')
    .replace(/&/g, '');
}

function getParticleFr(arabic) {
  const ar = arabic || '';
  if (ar.startsWith('وَ') || ar === 'وَ') return 'et';
  if (ar.startsWith('فَ') || ar === 'فَ') return 'alors';
  if (ar === 'فِى' || ar === 'فِي' || ar === 'فِىٓ') return 'dans';
  if (ar === 'مِنْ' || ar === 'مِن' || ar === 'مِّن' || ar === 'مِّنْ') return 'de';
  if (ar === 'إِلَىٰ' || ar === 'إِلَى') return 'vers';
  if (ar === 'عَلَىٰ' || ar === 'عَلَى') return 'sur';
  if (ar.startsWith('بِ') || ar === 'بِ') return 'par';
  if (ar === 'لِ' || ar === 'لَ' || ar.startsWith('لِ') || ar.startsWith('لَّ')) return 'pour';
  if (ar === 'أَنَّ' || ar === 'أَنَ' || ar.startsWith('أَنَّ')) return 'que';
  if (ar === 'إِنَّ' || ar === 'إِنَ' || ar.startsWith('إِنَّ')) return 'certes';
  if (ar === 'لَا' || ar === 'لَّا') return 'ne pas';
  if (ar === 'مَا' || ar === 'مَآ') return 'ce que';
  if (ar === 'إِذَا') return 'lorsque';
  if (ar === 'ثُمَّ') return 'puis';
  if (ar === 'أَوْ') return 'ou';
  if (ar === 'هُوَ' || ar.startsWith('هُوَ')) return 'il';
  if (ar === 'هُمْ' || ar.endsWith('هُمْ')) return 'eux';
  if (ar === 'كُمْ' || ar.endsWith('كُمْ')) return 'vous';
  if (ar === 'ٱلَّذِينَ' || ar === 'الَّذِينَ') return 'ceux qui';
  if (ar === 'ٱلَّذِى' || ar === 'الَّذِى' || ar === 'ٱلَّذِي' || ar === 'الَّذِي') return 'celui qui';
  if (ar === 'ذَٰلِكَ' || ar === 'ذَلِكَ') return 'cela';
  if (ar === 'حَتَّىٰ' || ar === 'حَتَّى') return "jusqu'a";
  if (ar === 'بَلْ') return 'plutot';
  if (ar === 'كَمَا' || ar === 'كَ') return 'comme';
  if (ar === 'قَدْ') return 'certes';
  if (ar === 'أَمْ') return 'ou bien';
  if (ar === 'إِذْ') return 'quand';
  if (ar === 'هَـٰذَا' || ar === 'هَٰذَا' || ar === 'هٰذَا') return 'ceci';
  if (ar === 'هِىَ' || ar === 'هِيَ') return 'elle';
  if (ar === 'نَحْنُ') return 'nous';
  if (ar === 'أَنتُمْ' || ar === 'أَنْتُمْ') return 'vous';
  if (ar === 'هُنَّ') return 'elles';
  if (ar === 'كَانَ') return 'etait';
  if (ar === 'يَـٰٓ' || ar === 'يَا' || ar === 'يَٰٓ') return 'o';
  if (ar === 'أَيُّهَا') return '';
  if (ar.startsWith('ٱلْ') || ar.startsWith('الْ') || ar.startsWith('ال')) return 'le/la';
  // Pronouns as suffixes
  if (ar === 'هُ' || ar === 'ـهُ') return 'lui';
  if (ar === 'هَا' || ar === 'ـهَا') return 'elle';
  if (ar === 'نَا' || ar === 'ـنَا') return 'nous';
  if (ar === 'ىٓ' || ar === 'ـى') return 'moi';
  return '';
}

function getFr(s1, vwaMap) {
  const isParticle = s1.type === 'particle';

  if (isParticle) {
    const fr = getParticleFr(s1.arabic);
    return fr || '';
  }

  // Content word: use VWA sense_chosen
  const vwa = vwaMap[s1.position];
  if (vwa && vwa.sense_chosen) {
    let sense = vwa.sense_chosen;
    // Truncate if too long
    if (sense.length > 30) {
      const dashIdx = sense.indexOf('—');
      const commaIdx = sense.indexOf(',');
      const cutAt = dashIdx > 0 ? dashIdx : (commaIdx > 0 ? commaIdx : 30);
      sense = sense.substring(0, cutAt).trim();
    }
    return sense;
  }

  // Fallback: use step1.key
  if (s1.key) return s1.key;
  return '';
}

// ─── Main ───

(async () => {
  console.log('=== Fix broken segments V200-286 (verse_id 207-293) ===\n');

  // Fetch all data
  console.log('Fetching verse_analyses...');
  const analyses = await fetchAllAnalyses();
  console.log(`  Found ${analyses.length} verse_analyses`);

  console.log('Fetching verse_word_analyses...');
  const vwaAll = await fetchAllVWA();
  console.log(`  Found ${vwaAll.length} VWA entries\n`);

  // Build VWA map: verse_id -> { position -> vwa }
  const vwaByVerse = {};
  for (const w of vwaAll) {
    if (!vwaByVerse[w.verse_id]) vwaByVerse[w.verse_id] = {};
    vwaByVerse[w.verse_id][w.position] = w;
  }

  // Step 1: Identify broken verses
  console.log('--- Step 1: Diagnosis ---');
  const brokenVerses = [];
  const okVerses = [];

  for (const va of analyses) {
    const diag = diagnoseVerse(va);
    const verseNum = va.verse_id - 7;
    if (diag.broken) {
      brokenVerses.push({ va, diag, verseNum });
      console.log(`  BROKEN V${verseNum} (id=${va.verse_id}): ${diag.badCount}/${diag.total} bad segs (${(diag.ratio*100).toFixed(0)}%)`);
    } else {
      okVerses.push(verseNum);
    }
  }

  console.log(`\n  Total: ${brokenVerses.length} broken, ${okVerses.length} OK\n`);

  if (brokenVerses.length === 0) {
    console.log('No broken verses found. Done.');
    return;
  }

  // Step 2: Fix broken segments
  console.log('--- Step 2: Fixing ---');
  let fixedCount = 0;
  const fixedVerses = [];
  const cantFix = [];

  for (const {va, verseNum} of brokenVerses) {
    const step1 = parseJson(va.segments_step1);
    if (!step1 || !Array.isArray(step1) || step1.length === 0) {
      cantFix.push(verseNum);
      console.log(`  SKIP V${verseNum}: no segments_step1`);
      continue;
    }

    const vwaMap = vwaByVerse[va.verse_id] || {};

    // Rebuild segments from step1
    const newSegs = [];
    for (const s1 of step1) {
      const isParticle = s1.type === 'particle';
      const vwa = vwaMap[s1.position];

      const seg = {
        position: s1.position,
        arabic: s1.arabic || '',
        phon: getCleanPhon(s1),
        fr: getFr(s1, vwaMap),
        is_particle: isParticle,
        word_key: s1.key || (vwa ? vwa.word_key : null) || null,
        pos: s1.pos || (isParticle ? 'particule' : 'nom'),
        sense_retenu: (vwa ? vwa.sense_chosen : '') || '',
      };

      newSegs.push(seg);
    }

    // Update DB
    const {error} = await supabase.from('verse_analyses')
      .update({ segments: newSegs })
      .eq('id', va.id);

    if (error) {
      cantFix.push(verseNum);
      console.log(`  ERROR V${verseNum}: ${error.message}`);
    } else {
      fixedCount++;
      fixedVerses.push(verseNum);
      const emptyFr = newSegs.filter(s => !s.fr && !s.is_particle).length;
      console.log(`  FIXED V${verseNum}: ${newSegs.length} segs` + (emptyFr ? ` [${emptyFr} empty fr]` : ''));
    }
  }

  // Step 3: Summary
  console.log('\n=== Summary ===');
  console.log(`Broken verses found: ${brokenVerses.length}`);
  console.log(`Fixed: ${fixedCount}`);
  console.log(`Could not fix: ${cantFix.length}`);
  if (fixedVerses.length > 0) {
    console.log(`\nFixed verse numbers: ${fixedVerses.join(', ')}`);
  }
  if (cantFix.length > 0) {
    console.log(`\nUnfixable verse numbers: ${cantFix.join(', ')}`);
  }
})();
