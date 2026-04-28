const {createClient} = require('@supabase/supabase-js');
const db = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// Arabic letter → Latin transliteration (simplified readable)
function arabicToPhon(arabic) {
  if (!arabic) return '';

  const map = {
    'ا': 'a', 'أ': 'a', 'إ': 'i', 'آ': 'ā', 'ٱ': 'i',
    'ب': 'b', 'ت': 't', 'ث': 'th',
    'ج': 'j', 'ح': 'ḥ', 'خ': 'kh',
    'د': 'd', 'ذ': 'dh', 'ر': 'r', 'ز': 'z',
    'س': 's', 'ش': 'sh', 'ص': 'ṣ', 'ض': 'ḍ',
    'ط': 'ṭ', 'ظ': 'ẓ', 'ع': "'", 'غ': 'gh',
    'ف': 'f', 'ق': 'q', 'ك': 'k', 'ل': 'l',
    'م': 'm', 'ن': 'n', 'ه': 'h', 'و': 'w',
    'ي': 'y', 'ى': 'ā', 'ة': 'a',
    'ء': "'", 'ئ': "'", 'ؤ': "'",
    // Diacritics
    'َ': 'a', 'ِ': 'i', 'ُ': 'u',
    'ً': 'an', 'ٍ': 'in', 'ٌ': 'un',
    'ّ': '', // shadda - double the letter (handled separately)
    'ْ': '', // sukun
    'ٰ': 'ā', // dagger alif
    'ٓ': '', // madda
    'ۡ': '', // small high alef
    '۟': '', // small waw
    '۞': '', // ornate
    '\u0670': 'ā', // superscript alef
  };

  let result = '';
  const chars = [...arabic];

  for (let i = 0; i < chars.length; i++) {
    const c = chars[i];

    // Skip non-Arabic punctuation
    if (c === '،' || c === '.' || c === ',' || c === ' ') continue;

    // Shadda: double the previous consonant
    if (c === 'ّ') {
      // Find last consonant in result
      if (result.length > 0) {
        // Get last meaningful character(s)
        let lastConsonant = '';
        let j = result.length - 1;
        // Skip vowels to find consonant
        while (j >= 0 && 'aiuāīū'.includes(result[j])) j--;
        if (j >= 0) {
          // Check for digraphs
          if (j > 0 && ['th', 'kh', 'dh', 'sh', 'gh', 'ṣh'].some(d => result.substring(j-1, j+1) === d)) {
            lastConsonant = result.substring(j-1, j+1);
          } else {
            lastConsonant = result[j];
          }
          result += lastConsonant;
        }
      }
      continue;
    }

    // Alif-lam (article)
    if (c === 'ل' && i > 0 && (chars[i-1] === 'ٱ' || chars[i-1] === 'ا' || chars[i-1] === 'أ')) {
      // Check for sun letters (assimilation)
      let nextLetter = '';
      for (let k = i + 1; k < chars.length; k++) {
        if (map[chars[k]] && !'aiuāīū'.includes(map[chars[k]]) && chars[k] !== 'َ' && chars[k] !== 'ِ' && chars[k] !== 'ُ' && chars[k] !== 'ّ' && chars[k] !== 'ْ') {
          nextLetter = chars[k];
          break;
        }
      }
      const sunLetters = 'تثدذرزسشصضطظلن';
      if (sunLetters.includes(nextLetter)) {
        result += 'l-'; // Keep al- for readability
      } else {
        result += 'l-';
      }
      continue;
    }

    // Long vowels
    if (c === 'ا' && i > 0 && chars[i-1] === 'َ') {
      // Replace last 'a' with 'ā'
      if (result.endsWith('a')) {
        result = result.slice(0, -1) + 'ā';
      }
      continue;
    }
    if (c === 'و' && i > 0 && chars[i-1] === 'ُ') {
      if (result.endsWith('u')) {
        result = result.slice(0, -1) + 'ū';
      }
      continue;
    }
    if (c === 'ي' && i > 0 && chars[i-1] === 'ِ') {
      if (result.endsWith('i')) {
        result = result.slice(0, -1) + 'ī';
      }
      continue;
    }

    if (map[c] !== undefined) {
      result += map[c];
    }
    // Skip unknown chars silently
  }

  // Clean up
  result = result.replace(/^[aiuā]*l-/, 'al-'); // Fix article prefix
  result = result.replace(/aa/g, 'ā');
  result = result.replace(/ii/g, 'ī');
  result = result.replace(/uu/g, 'ū');
  result = result.replace(/''/, "'");

  return result || arabic;
}

(async () => {
  const {data: allVA} = await db.from('verse_analyses')
    .select('id, verse_id, segments')
    .gte('verse_id', 8).lte('verse_id', 293)
    .order('verse_id');

  let versesFixed = 0;
  let totalSegs = 0;

  for (const va of allVA) {
    let segs = typeof va.segments === 'string' ? JSON.parse(va.segments) : va.segments;
    if (!segs || !Array.isArray(segs)) continue;

    let changed = false;
    for (const s of segs) {
      if (!s.arabic) continue;

      // Check if phon already looks good
      if (s.phon && /[āīūṣṭḍḥẓ\-]/.test(s.phon) && s.phon.length > 2) continue;

      const newPhon = arabicToPhon(s.arabic);
      if (newPhon && newPhon !== s.phon) {
        s.phon = newPhon;
        changed = true;
        totalSegs++;
      }
    }

    if (changed) {
      await db.from('verse_analyses').update({segments: segs}).eq('id', va.id);
      versesFixed++;
    }
  }

  console.log('Versets corrigés:', versesFixed);
  console.log('Segments phonétiques mis à jour:', totalSegs);

  // Show samples
  for (const vid of [245, 246, 8]) {
    const {data: va} = await db.from('verse_analyses').select('segments').eq('verse_id', vid).single();
    const segs = typeof va.segments === 'string' ? JSON.parse(va.segments) : va.segments;
    console.log('\n=== V'+(vid-7)+' ===');
    for (const s of segs.slice(0, 6)) {
      console.log('  ' + s.phon + ' → ' + (s.arabic||'').substring(0,15));
    }
  }
})();
