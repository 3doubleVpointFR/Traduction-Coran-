const {createClient} = require('@supabase/supabase-js');
const db = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

function cleanJustification(text) {
  if (!text) return text;
  let t = text;

  // =====================================================
  // 1. Remove inline Arabic transliteration phrases after "—"
  //    Pattern: "**French title** — Arabic phrase : French explanation"
  //    → "**French title** : French explanation"
  // =====================================================
  // The Arabic phrases typically contain: words with apostrophes,
  // short words like wa, la, fi, bi, min, an, aw, ma, etc.
  // They end with " :" or " —" or a French word starting with uppercase

  // Pattern: after a "— " remove sequences of transliterated Arabic words until we hit " : " or a sentence start
  // Arabic transliteration words: contain a-z, apostrophes, hyphens, and are typically short
  t = t.replace(
    /(\*\*[^*]+\*\*)\s*—\s*([a-zA-Z'ʿāīūṣṭḍḥẓ\-]+(?:\s+[a-zA-Z'ʿāīūṣṭḍḥẓ\-]+)*)\s*:\s*/g,
    (match, boldTitle, arabicPhrase) => {
      // Check if the "Arabic phrase" is actually French (contains common French words)
      const frenchIndicators = /\b(le|la|les|un|une|des|est|sont|dans|pour|par|sur|avec|qui|que|ce|cette|il|elle|nous|vous|ils|elles|ne|pas|se|du|au|ou|et|en)\b/i;
      const arabicIndicators = /\b(wa|la|fi|bi|min|an|aw|ma|al-|inna|anna|illa|hatta|lam|qad|ya|ta|sa|ka|fa)\b/i;

      // If it looks more Arabic than French, remove it
      const frCount = (arabicPhrase.match(frenchIndicators) || []).length;
      const arCount = (arabicPhrase.match(arabicIndicators) || []).length;

      if (arCount > frCount || arabicPhrase.length > 30) {
        return boldTitle + ' : ';
      }
      return match; // Keep as-is if it looks French
    }
  );

  // =====================================================
  // 2. Remove standalone Arabic transliteration in parentheses
  //    Pattern: (word = French meaning, de root) → (French meaning)
  // =====================================================
  // "(wa lakin = mais)" → remove entirely or keep just "(mais)"
  t = t.replace(/\(([a-zA-Z'ʿāīūṣṭḍḥẓ\-]+(?:\s+[a-zA-Z'ʿāīūṣṭḍḥẓ\-]+)*)\s*=\s*([^)]+)\)/g,
    (match, arabic, french) => {
      // Keep just the French meaning
      return '(' + french.trim() + ')';
    }
  );

  // =====================================================
  // 3. Remove "Arabic = French" patterns outside parentheses
  //    Like: "Aknanntum = vous avez caché"
  // =====================================================
  // These are harder — let's just remove the Arabic part
  t = t.replace(/\b([A-Z][a-z'ʿāīūṣṭḍḥẓ]{3,}(?:\s+[a-z'ʿāīūṣṭḍḥẓ]+)*)\s*=\s*((?:vous|nous|ils|elles|il|elle|on|Dieu|ce|le|la|les|un|une|des)[^.;]*)/g,
    (match, arabic, french) => {
      return french.trim();
    }
  );

  // =====================================================
  // 4. Remove isolated Arabic words/phrases not in parentheses or bold
  //    Like: "satadh-kurunahunna" or "'arradtum"
  //    But keep words inside ** ** (bold) and (* *) (italic/transliteration)
  // =====================================================
  // Remove: "de root" patterns like "de knn", "de srr", "de qwl"
  t = t.replace(/,?\s*de [a-z]{2,4}\b(?=\))/g, '');
  // Remove: "(Arabic, de root)" → "(French)" — already handled above mostly

  // =====================================================
  // 5. Fix double articles created by previous script
  // =====================================================
  t = t.replace(/\blla\b/g, 'la');
  t = t.replace(/\bles les\b/g, 'les');
  t = t.replace(/\bLa La\b/g, 'La');
  t = t.replace(/\bLe Le\b/g, 'Le');

  // =====================================================
  // 6. Fix "Dieuu" → "Dieu"
  // =====================================================
  t = t.replace(/Dieuu/g, 'Dieu');
  t = t.replace(/Dieua/g, 'Dieu');

  // =====================================================
  // 7. Fix mangled text from previous replacements
  // =====================================================
  // "l'inclinaison vers la faute (*junāḥa*) sur vous (*ʿalaykum*) en ce que (*fīmā*) 'arradtum par cela (*bihi*)"
  // → just keep the French
  t = t.replace(/l'inclinaison vers la faute \(\*junāḥa\*\) sur vous \(\*ʿalaykum\*\) en ce que \(\*fīmā\*\) 'arradtum par cela \(\*bihi\*\)/g,
    'pas de faute sur vous pour ce que vous avez fait en termes d\'allusions');

  // "dans les les âmes (*anfus*)" → "dans les âmes"
  t = t.replace(/dans les les âmes \(\*anfus\*\)/g, 'dans les âmes');
  t = t.replace(/les les âmes \(\*anfus\*\)/g, 'les âmes');

  // Clean orphan transliteration after bold
  // Pattern: "s'oppose au tasrih" → "s'oppose à la déclaration directe"
  t = t.replace(/s'oppose au tasrih/g, 's\'oppose à la déclaration directe');

  // =====================================================
  // 8. General cleanup
  // =====================================================
  t = t.replace(/  +/g, ' ');
  t = t.replace(/ \./g, '.');
  t = t.replace(/ ,/g, ',');
  t = t.replace(/\(\(/g, '(');
  t = t.replace(/\)\)/g, ')');
  // Remove empty parentheses
  t = t.replace(/\(\s*\)/g, '');

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
    const cleaned = cleanJustification(original);

    if (cleaned !== original) {
      await db.from('verse_analyses').update({translation_explanation: cleaned}).eq('id', va.id);
      fixed++;
    }
  }

  console.log('Justifications nettoyées:', fixed);

  // Show V235 result
  const {data: v235} = await db.from('verse_analyses').select('translation_explanation').eq('verse_id', 242).single();
  const t = v235.translation_explanation;
  const justIdx = t.indexOf('§JUSTIFICATION§');
  if (justIdx > -1) {
    console.log('\n=== V235 JUSTIFICATION (après nettoyage) ===');
    console.log(t.substring(justIdx, justIdx + 1500));
  }
})();
