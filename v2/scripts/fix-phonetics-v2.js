const {createClient} = require('@supabase/supabase-js');
const db = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

function arabicToPhon(arabic) {
  if (!arabic) return '';

  // Letter map (consonants only)
  const consonants = {
    'ب': 'b', 'ت': 't', 'ث': 'th', 'ج': 'j', 'ح': 'ḥ', 'خ': 'kh',
    'د': 'd', 'ذ': 'dh', 'ر': 'r', 'ز': 'z', 'س': 's', 'ش': 'sh',
    'ص': 'ṣ', 'ض': 'ḍ', 'ط': 'ṭ', 'ظ': 'ẓ', 'ع': 'ʿ', 'غ': 'gh',
    'ف': 'f', 'ق': 'q', 'ك': 'k', 'ل': 'l', 'م': 'm', 'ن': 'n',
    'ه': 'h', 'و': 'w', 'ي': 'y',
  };

  const chars = [...arabic];
  let result = '';
  let i = 0;

  while (i < chars.length) {
    const c = chars[i];
    const next = i + 1 < chars.length ? chars[i+1] : '';
    const next2 = i + 2 < chars.length ? chars[i+2] : '';

    // Skip ornamental marks
    if ('۟۞\u06E1'.includes(c)) { i++; continue; }
    // Skip punctuation
    if ('،.,:;'.includes(c)) { i++; continue; }

    // Hamza carriers
    if (c === 'ء' || c === 'ئ' || c === 'ؤ') {
      // Just skip it, the vowel after will show
      i++; continue;
    }

    // Alif with hamza
    if (c === 'أ') {
      if (next === 'َ') { result += 'a'; i += 2; continue; }
      if (next === 'ُ') { result += 'u'; i += 2; continue; }
      result += 'a'; i++; continue;
    }
    if (c === 'إ') { result += 'i'; i++; continue; }

    // Alif wasla (ٱ) — silent in connected speech
    if (c === 'ٱ') {
      // Start of al- article: check if next is lam
      if (next === 'ل') {
        // al- article
        const afterLam = chars[i+2]; // next consonant
        if (afterLam === 'ّ') {
          // lam assimilated: skip
          result += 'a'; // just 'a' before the doubled consonant
          i += 2; // skip ٱل, shadda will double
          continue;
        }
        result += 'al-';
        i += 2; // skip ٱل
        // Skip sukun on lam if present
        if (i < chars.length && chars[i] === 'ْ') i++;
        continue;
      }
      i++; continue;
    }

    // Regular alif ا
    if (c === 'ا' || c === 'آ') {
      if (c === 'آ') { result += 'ā'; i++; continue; }
      // After fatha → long ā (already added 'a', convert to ā)
      if (result.endsWith('a')) {
        result = result.slice(0, -1) + 'ā';
        i++; continue;
      }
      // Start of word
      result += 'ā';
      i++; continue;
    }

    // Taa marbouta
    if (c === 'ة') {
      if (next === 'ً' || next === 'ٍ' || next === 'ٌ') {
        // With tanwin
        result += 'a'; // or skip
      }
      // else silent at end
      i++; continue;
    }

    // Alif maqsura
    if (c === 'ى' || c === 'Y' || c === 'ﻯ') {
      if (result.endsWith('a')) {
        result = result.slice(0, -1) + 'ā';
      } else {
        result += 'ā';
      }
      i++; continue;
    }

    // Consonants
    if (consonants[c]) {
      const latin = consonants[c];

      // Check for shadda after → double
      if (next === 'ّ') {
        result += latin + latin;
        i += 2;
        continue;
      }

      // Waw as vowel (after damma → ū)
      if (c === 'و' && result.endsWith('u')) {
        result = result.slice(0, -1) + 'ū';
        i++; continue;
      }
      // Ya as vowel (after kasra → ī)
      if (c === 'ي' && result.endsWith('i')) {
        result = result.slice(0, -1) + 'ī';
        i++; continue;
      }

      result += latin;
      i++; continue;
    }

    // Short vowels
    if (c === 'َ') { result += 'a'; i++; continue; }
    if (c === 'ِ') { result += 'i'; i++; continue; }
    if (c === 'ُ') { result += 'u'; i++; continue; }

    // Tanwin
    if (c === 'ً') { result += 'an'; i++; continue; }
    if (c === 'ٍ') { result += 'in'; i++; continue; }
    if (c === 'ٌ') { result += 'un'; i++; continue; }

    // Shadda (shouldn't reach here normally)
    if (c === 'ّ') { i++; continue; }

    // Sukun
    if (c === 'ْ') { i++; continue; }

    // Dagger alif / superscript alef
    if (c === 'ٰ' || c === '\u0670') {
      if (result.endsWith('a')) {
        result = result.slice(0, -1) + 'ā';
      } else {
        result += 'ā';
      }
      i++; continue;
    }

    // Madda sign
    if (c === 'ٓ') { i++; continue; }

    // Skip any other char
    i++;
  }

  // Clean up double vowels
  result = result.replace(/aā/g, 'ā');
  result = result.replace(/iī/g, 'ī');
  result = result.replace(/uū/g, 'ū');

  return result;
}

(async () => {
  const {data: allVA} = await db.from('verse_analyses')
    .select('id, verse_id, segments')
    .gte('verse_id', 8).lte('verse_id', 293)
    .order('verse_id');

  let versesFixed = 0;

  for (const va of allVA) {
    let segs = typeof va.segments === 'string' ? JSON.parse(va.segments) : va.segments;
    if (!segs || !Array.isArray(segs)) continue;

    let changed = false;
    for (const s of segs) {
      if (!s.arabic) continue;
      // Special case: keep alif-lām-mīm etc for muqatta'at
      if (s.phon && s.phon.includes('lām')) continue;

      const newPhon = arabicToPhon(s.arabic);
      if (newPhon && newPhon.length > 0) {
        s.phon = newPhon;
        changed = true;
      }
    }

    if (changed) {
      await db.from('verse_analyses').update({segments: segs}).eq('id', va.id);
      versesFixed++;
    }
  }

  console.log('Versets mis à jour:', versesFixed);

  // Show samples
  for (const vid of [245, 8, 9, 15, 50, 100, 200, 280]) {
    const {data: va} = await db.from('verse_analyses').select('segments').eq('verse_id', vid).single();
    const segs = typeof va.segments === 'string' ? JSON.parse(va.segments) : va.segments;
    console.log('\n=== V'+(vid-7)+' ===');
    for (const s of segs.slice(0, 8)) {
      console.log('  ' + (s.phon||'?').padEnd(20) + ' ← ' + (s.arabic||'').substring(0,15));
    }
  }
})();
