const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  'https://gwtgftosscjupxxsubev.supabase.co',
  process.env.SUPABASE_SERVICE_KEY
);

async function fetchAllVerseAnalyses() {
  const allRows = [];
  let from = 0;
  const pageSize = 1000;
  while (true) {
    const { data, error } = await supabase
      .from('verse_analyses')
      .select('id, verse_id, translation_explanation')
      .gte('verse_id', 8).lte('verse_id', 293)
      .order('verse_id')
      .range(from, from + pageSize - 1);
    if (error) { console.error('Fetch error:', error.message); break; }
    if (!data || data.length === 0) break;
    allRows.push(...data);
    if (data.length < pageSize) break;
    from += pageSize;
  }
  return allRows;
}

function cleanDemarche(text) {
  if (!text) return { cleaned: text, changed: false };
  let cleaned = text;

  // === CLEANUP PASS 3 ===

  // 1. Fix "§§" that should be "§JUSTIFICATION§" (the section header was eaten)
  cleaned = cleaned.replace(/§§\n/g, '§JUSTIFICATION§\n');
  cleaned = cleaned.replace(/§§$/gm, '§JUSTIFICATION§');
  // Handle §§ right after text without newline
  cleaned = cleaned.replace(/([^§])§§([^§])/g, '$1\n\n§JUSTIFICATION§\n$2');

  // 2. Remove glued transliteration fragments (sequences of transliteration chars
  //    without proper spacing, containing ʾ,ʿ,ā,ī,ū,ḫ,ḥ etc.)
  //    e.g. "llāhu l-bayʿMan jāʾahu mawʿWa-man ʿFa-ūlāʾ"
  //    These are multi-word transliteration sequences that got partially stripped.
  //    Detect: 2+ transliteration words in sequence where at least some have diacritical marks
  const transRun = /(?:[A-Za-zāīūẓḍṣṭḥḫʾʿ''\-]+\s+){2,}[A-Za-zāīūẓḍṣṭḥḫʾʿ''\-]+/g;
  cleaned = cleaned.replace(transRun, function(match) {
    // Count words with transliteration diacritics
    const words = match.trim().split(/\s+/);
    const transWords = words.filter(w => /[āīūẓḍṣṭḥḫʾʿ]/.test(w));
    // If most words are transliteration, remove the whole sequence
    if (transWords.length >= words.length * 0.5 && transWords.length >= 2) {
      // But check: do any words look like common French words?
      const frenchCount = words.filter(w => /^(le|la|les|un|une|des|de|du|et|ou|est|sont|qui|que|ce|cette|pour|par|avec|dans|sur|pas|ne|se|il|elle|ils|elles|nous|vous|mais|donc|car|son|sa|ses|leur|leurs|au|aux|en|on|si|ni|y|je|tu|mon|ma|mes|ton|ta|tes|notre|nos|votre|vos|été|avoir|être|fait|dit|peut|comme|tout|tous|toute|aussi|encore|entre|même|plus|sans|sous|après|avant|vers|chez|pendant|deux|trois|quatre|cinq|six|sept|huit|neuf|dix|cette|aucun|aucune|autre|autres|chaque|certains|certaines|plusieurs|quelque|quelques|quel|quelle|quels|quelles|ceux|celle|celles|celui)$/i.test(w));
      if (frenchCount >= words.length * 0.4) return match; // Keep if lots of French
      return '';
    }
    return match;
  });

  // 3. Remove standalone short transliteration fragments (< 30 chars, no French)
  //    e.g. "In kuntum muʾ" stuck to text
  //    Look for fragments of 2-5 transliteration words at sentence boundaries
  cleaned = cleaned.replace(/(?:^|(?<=\.))\s*[A-Za-zāīūẓḍṣṭḥḫʾʿ''\-]+(?:\s+[A-Za-zāīūẓḍṣṭḥḫʾʿ''\-]+){0,4}\s*(?=$|(?=§))/gm, function(match) {
    if (match.trim().length < 3) return match;
    // Check if it has transliteration chars
    if (/[āīūẓḍṣṭḥḫʾʿ]/.test(match)) {
      // Check if it has common French words
      const words = match.trim().split(/\s+/);
      const frenchCount = words.filter(w => /^(le|la|les|un|une|des|de|du|et|ou|est|sont|qui|que|ce|cette|pour|par|avec|dans|sur|pas|ne|se|il|elle|ils|elles|nous|vous|mais|donc|car|ni|si|son|sa|ses|leur|leurs|au|aux|en|on)$/i.test(w));
      if (frenchCount === 0) return '';
    }
    return match;
  });

  // 4. Remove "Form I/II/.../X" references that remain, including after ":"
  //    e.g. "wqy Form VIII = se garder"
  cleaned = cleaned.replace(/\b[a-zA-Zʾʿāīūẓḍṣṭḥḫ''\-]+\s+Form\s+[IVX]+\b/gi, '');
  // Standalone "Form VIII" etc.
  cleaned = cleaned.replace(/\bForm\s+[IVX]+\b/gi, '');

  // 5. Remove "Transliteration traduit par" patterns in JUSTIFICATION
  //    e.g. "Yaʾkulūna ar-ribā traduit par "consomment l'usure" :"
  //    These start with transliteration and say "traduit par"
  //    Replace with just the French part after "traduit par"
  cleaned = cleaned.replace(/[A-Za-zāīūẓḍṣṭḥḫʾʿ''\-]+(?:\s+[A-Za-zāīūẓḍṣṭḥḫʾʿ''\-]+)*\s+traduit\s+par\s+/gi, function(match) {
    const beforeTraduit = match.split(/\s+traduit\s+par\s+/i)[0];
    // If the part before "traduit par" is mostly transliteration
    if (/[āīūẓḍṣṭḥḫʾʿ]/.test(beforeTraduit)) {
      return 'Traduit par ';
    }
    return match;
  });

  // 6. Remove "root = meaning" patterns like "ʾkl = manger/consommer"
  //    But only when the part before = looks like a root (3-4 transliteration chars)
  cleaned = cleaned.replace(/\b[a-zA-Zʾʿāīūẓḍṣṭḥḫ''\-]{2,6}\s*=\s*[^.;,\n]{3,40}[;,]\s*/g, function(match) {
    const beforeEq = match.split('=')[0].trim();
    if (/[āīūẓḍṣṭḥḫʾʿ]/.test(beforeEq) && beforeEq.length <= 6) {
      return '';
    }
    return match;
  });

  // 7. Remove lone morphological labels: "accompli", "inaccompli", "impératif"
  //    when they appear as standalone fragments (not in a sentence)
  //    e.g. ", inaccompli" at end of a parenthetical
  // Actually these are fine in French context, skip.

  // 8. Fix orphaned leading space + bold at start of section
  //    e.g. "§DEMARCHE§\n\n **ala**" should be "§DEMARCHE§\n\n**ala**"
  cleaned = cleaned.replace(/(§[A-Z]+§\n+)\s+(\*\*)/g, '$1$2');

  // 9. Remove empty "Traduit par" that remain after root removal
  cleaned = cleaned.replace(/Traduit par\s*"[^"]*"\s*:\s*—?\s*(?="|\.|$)/gm, '');

  // 10. Clean up double spaces, triple newlines
  cleaned = cleaned.replace(/ {2,}/g, ' ');
  cleaned = cleaned.replace(/\n{3,}/g, '\n\n');
  cleaned = cleaned.replace(/ +\n/g, '\n');
  // Remove trailing : at end of sentences before newline (leftover from removed content)
  cleaned = cleaned.replace(/:\s*\n/g, '.\n');
  cleaned = cleaned.trim();

  const changed = cleaned !== text.trim();
  return { cleaned, changed };
}

async function main() {
  console.log('=== Pass 3: Final cleanup ===\n');

  const rows = await fetchAllVerseAnalyses();
  console.log(`Found ${rows.length} rows.\n`);

  let cleanedCount = 0;
  let flaggedShort = [];
  let unchanged = 0;
  const updates = [];
  const examples = [];

  for (const row of rows) {
    if (!row.translation_explanation || row.translation_explanation.trim() === '') continue;

    const { cleaned, changed } = cleanDemarche(row.translation_explanation);
    if (!changed) { unchanged++; continue; }

    cleanedCount++;
    if (cleaned.length < 50) {
      flaggedShort.push({ verse_id: row.verse_id, verseNum: row.verse_id - 7, cleanedLength: cleaned.length, cleaned });
    }

    if ([282, 285, 19, 232].includes(row.verse_id) || examples.length < 2) {
      examples.push({
        verseNum: row.verse_id - 7,
        before: row.translation_explanation.substring(0, 300),
        after: cleaned.substring(0, 300),
      });
    }

    updates.push({ id: row.id, translation_explanation: cleaned });
  }

  console.log(`Unchanged: ${unchanged}, To update: ${updates.length}, Flagged short: ${flaggedShort.length}\n`);

  // Apply updates
  let updateErrors = 0;
  for (let i = 0; i < updates.length; i += 50) {
    const batch = updates.slice(i, i + 50);
    const promises = batch.map(u =>
      supabase.from('verse_analyses').update({ translation_explanation: u.translation_explanation }).eq('id', u.id)
    );
    const results = await Promise.all(promises);
    for (const r of results) {
      if (r.error) { updateErrors++; console.error('Update error:', r.error.message); }
    }
  }

  console.log(`Updates applied: ${updates.length}, Errors: ${updateErrors}\n`);

  if (flaggedShort.length > 0) {
    console.log('--- Flagged short ---');
    for (const f of flaggedShort) console.log(`  V${f.verseNum}: ${f.cleanedLength} chars`);
  }

  for (const ex of examples) {
    console.log(`\n--- V${ex.verseNum} ---`);
    console.log(`BEFORE: ${ex.before}`);
    console.log(`AFTER:  ${ex.after}`);
  }

  // Final verification
  console.log('\n=== Final verification ===');
  for (const vid of [19, 282, 285, 232]) {
    const { data } = await supabase.from('verse_analyses').select('translation_explanation').eq('verse_id', vid).single();
    console.log(`\n--- V${vid-7} ---`);
    console.log(data?.translation_explanation?.substring(0, 500));
  }
}

main().catch(console.error);
