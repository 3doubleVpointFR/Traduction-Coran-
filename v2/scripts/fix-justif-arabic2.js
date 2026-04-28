const {createClient} = require('@supabase/supabase-js');
const db = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

function cleanArabicInline(text) {
  if (!text) return text;
  let t = text;

  // =====================================================
  // 1. Fix double articles and typos from previous scripts
  // =====================================================
  t = t.replace(/\blla\b/g, 'la');
  t = t.replace(/\bles les\b/g, 'les');
  t = t.replace(/\bDieuu\b/g, 'Dieu');
  t = t.replace(/\bDieua\b/g, 'Dieu');

  // =====================================================
  // 2. In JUSTIFICATION sections, remove Arabic phrases after "—"
  //    Better approach: remove everything between "— " and " : "
  //    if it contains Arabic-looking words
  // =====================================================

  // Arabic word indicators: words containing ', ʿ, or typical Arabic patterns
  const isArabicWord = (w) => {
    const arabPatterns = /^(wa|la|fi|bi|min|an|aw|ma|al-|inna|anna|illa|hatta|lam|qad|in|ya|ta|sa|ka|fa|li|hu|ha|him|hum|kum|na|ni)$/i;
    const hasArabChars = /[ʿāīūṣṭḍḥẓ']/.test(w);
    const looksArabic = /^[a-z]+-[a-z]+$/.test(w); // hyphenated like al-nisa
    return arabPatterns.test(w) || hasArabChars || looksArabic;
  };

  // Process the justification section specifically
  const justIdx = t.indexOf('§JUSTIFICATION§');
  if (justIdx > -1) {
    let before = t.substring(0, justIdx);
    let justSection = t.substring(justIdx);

    // Pattern: "**bold title** — Arabic phrase : French text"
    // Remove the Arabic phrase between — and :
    justSection = justSection.replace(
      /(\*\*[^*]+\*\*)\s*—\s*([^:]+):\s*/g,
      (match, boldTitle, middlePart) => {
        // Count Arabic-looking words in the middle part
        const words = middlePart.trim().split(/\s+/);
        let arabCount = 0;
        let frCount = 0;
        for (const w of words) {
          const clean = w.replace(/[,.:;()]/g, '');
          if (clean.length < 2) continue;
          if (isArabicWord(clean)) arabCount++;
          else frCount++;
        }

        // If more than 30% Arabic, remove the middle part
        if (arabCount > 0 && arabCount >= frCount * 0.3) {
          return boldTitle + ' : ';
        }
        return match;
      }
    );

    // Remove standalone Arabic phrases like "Aknanntum fi anfusikum = ..."
    // These have Capital first letter + apostrophe or unusual transliteration
    justSection = justSection.replace(
      /\b([A-Z][a-z'ʿāīūṣṭḍḥẓ]+(?:\s+(?:fi|bi|min|al-|wa|la|an|aw|in|ma|li)[a-z'ʿāīūṣṭḍḥẓ-]*)*)\s*=\s*/g,
      (match, arabPhrase) => {
        if (arabPhrase.length > 5 && isArabicWord(arabPhrase.split(/\s+/)[0])) {
          return ''; // Remove completely
        }
        return match;
      }
    );

    // Remove "(Arabic word = French, de root)" → "(French)"
    justSection = justSection.replace(
      /\(([a-z'ʿāīūṣṭḍḥẓ-]+)\s*=\s*([^,)]+)(?:,\s*de\s+[a-z]+)?\)/gi,
      (match, arab, french) => {
        if (isArabicWord(arab)) {
          return '(' + french.trim() + ')';
        }
        return match;
      }
    );

    // Remove "de root" at end of parentheses: "(meaning, de xyz)" → "(meaning)"
    justSection = justSection.replace(/,\s*de\s+[a-z]{2,4}\)/g, ')');

    // Remove inline Arabic that's clearly not French:
    // Words like tallaqtumu, tamassuhunna, matti'uhunna, etc.
    // These are long words (>8 chars) with typical Arabic morphology
    justSection = justSection.replace(
      /\b(?:in |wa |la |fa |aw )?(?:[a-z]+-)?[a-z]*(?:tumu|hunna|hum|kum|tum|na|ha|hu)\b/gi,
      (match) => {
        // Only remove if it looks Arabic (long enough and not a French word)
        const frenchWords = ['fortune', 'nocturna', 'lacuna', 'tribuna', 'importuna'];
        if (match.length > 6 && !frenchWords.includes(match.toLowerCase().trim())) {
          return '';
        }
        return match;
      }
    );

    // Clean up resulting artifacts
    justSection = justSection.replace(/\(\s*\)/g, '');  // empty parens
    justSection = justSection.replace(/:\s*:\s*/g, ': '); // double colons
    justSection = justSection.replace(/\.\s*\./g, '.'); // double periods
    justSection = justSection.replace(/  +/g, ' '); // double spaces
    justSection = justSection.replace(/ ,/g, ',');
    justSection = justSection.replace(/ \./g, '.');

    t = before + justSection;
  }

  // =====================================================
  // 3. Also clean CRITIQUE section
  // =====================================================
  const critIdx = t.indexOf('§CRITIQUE§');
  if (critIdx > -1) {
    let beforeCrit = t.substring(0, critIdx);
    let critSection = t.substring(critIdx);

    // Same cleanup: remove Arabic roots references "de root"
    critSection = critSection.replace(/,\s*de\s+[a-z]{2,4}\)/g, ')');
    // Remove "(Arab = French)" → "(French)"
    critSection = critSection.replace(
      /\(([a-z'ʿāīūṣṭḍḥẓ-]+)\s*=\s*([^)]+)\)/gi,
      (match, arab, french) => {
        if (isArabicWord(arab)) {
          return '(' + french.trim() + ')';
        }
        return match;
      }
    );

    t = beforeCrit + critSection;
  }

  // =====================================================
  // 4. Global final cleanup
  // =====================================================
  t = t.replace(/  +/g, ' ');
  t = t.replace(/ \./g, '.');
  t = t.replace(/ ,/g, ',');

  return t;
}

(async () => {
  const {data} = await db.from('verse_analyses')
    .select('id, verse_id, translation_explanation')
    .gte('verse_id', 8).lte('verse_id', 293)
    .order('verse_id');

  let fixed = 0;

  for (const va of data) {
    if (!va.translation_explanation || va.translation_explanation.length < 50) continue;
    const original = va.translation_explanation;
    const cleaned = cleanArabicInline(original);
    if (cleaned !== original) {
      await db.from('verse_analyses').update({translation_explanation: cleaned}).eq('id', va.id);
      fixed++;
    }
  }

  console.log('Nettoyage complet:', fixed, 'versets');

  // Show V235 and V236 results
  for (const vid of [242, 243]) {
    const {data: va} = await db.from('verse_analyses').select('translation_explanation').eq('verse_id', vid).single();
    const t = va.translation_explanation;
    const justIdx = t.indexOf('§JUSTIFICATION§');
    if (justIdx > -1) {
      console.log('\n=== V' + (vid-7) + ' JUSTIFICATION ===');
      console.log(t.substring(justIdx, justIdx + 800));
      console.log('...');
    }
  }
})();
