const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  'https://gwtgftosscjupxxsubev.supabase.co',
  process.env.SUPABASE_SERVICE_KEY
);

// First, let's look at the ORIGINAL data from a backup perspective
// We need to see what's left after pass 1 and fix remaining issues

async function fetchAllVerseAnalyses() {
  const allRows = [];
  let from = 0;
  const pageSize = 1000;

  while (true) {
    const { data, error } = await supabase
      .from('verse_analyses')
      .select('id, verse_id, translation_explanation')
      .gte('verse_id', 8)
      .lte('verse_id', 293)
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

  // --- Fix residual fragments from pass 1 ---

  // Pattern A: Residual transliteration fragments stuck together after removal
  // e.g. "YaʾYataḫAl-bayʿWa-aḥalla" - these are partial transliterations
  // glued together when the (pos=N) = translation patterns were removed.
  // Detect: sequences of 3+ capital letters or sequences of CamelCase transliterations
  // that form nonsensical runs without spaces or with only ʾʿ between them

  // Pattern B: "Word (pos=N-M) = translation" - any remaining ones
  // More aggressive: match transliteration words (may contain ā,ī,ū,ʾ,ʿ,ḫ,ḥ,ṣ,ṭ,ẓ,ḍ, hyphens)
  // followed by (pos=...) = ...
  const transChars = "[A-Za-zÀ-ÿāīūẓḍṣṭḥḫʾʿ''\\-]";
  const posPattern = new RegExp(
    `${transChars}+(?:\\s+${transChars}+)*\\s*\\(pos=\\d+(?:-\\d+)?\\)\\s*=\\s*[^.;\\n]*[.;]?\\s*`,
    'g'
  );
  cleaned = cleaned.replace(posPattern, '');

  // Pattern C: remaining (pos=N) or (pos=N-M) markers
  cleaned = cleaned.replace(/\(pos=\d+(?:-\d+)?\)/g, '');

  // Pattern D: "Form I/II/.../X 3MP/3MS/etc de root" patterns
  cleaned = cleaned.replace(/,?\s*Form\s+[IVX]+\s+(?:\d*[MF][SPD]\s+)?(?:de\s+)?[a-zA-Zʾʿ''āīūẓḍṣṭḥḫ]+\.?\s*/gi, '');

  // Pattern E: standalone morphological codes "3MP", "3MS" etc. with surrounding spaces
  cleaned = cleaned.replace(/\b[123][MF][SPD]\b/g, '');

  // Pattern F: "inaccompli  + suffixe " (leftover from removed codes)
  cleaned = cleaned.replace(/inaccompli\s+\+\s+suffixe\s+\)/g, 'inaccompli)');
  cleaned = cleaned.replace(/inaccompli\s+\+\s+suffixe\s+\b/g, 'inaccompli ');
  cleaned = cleaned.replace(/,\s*inaccompli\s+\+\s+suffixe\s*/g, ', inaccompli');

  // Pattern G: Residual transliteration-only fragments
  // These are sequences of transliteration words that don't contain French words
  // Often stuck together as "YaʾYataḫAl-bayʿ" etc.
  // Detect: a sequence starting with uppercase transliteration chars, containing
  // special chars (ʾ,ʿ,ā,ī,ū,ḫ,ḥ etc.) and NO spaces, > 10 chars
  cleaned = cleaned.replace(/[A-Z][A-Za-zāīūẓḍṣṭḥḫʾʿ''\-]{10,}(?=[§\s\n])/g, '');

  // Pattern H: Lines that are just "transliteration = translation" without (pos=)
  // e.g. "Yaʾkulūna ar-ribā = ils consomment l'usure"
  // But be careful: keep "word = translation" if it's part of a French sentence
  // Only target lines that start with transliteration
  const transWordRe = new RegExp(
    `^\\s*${transChars}+(?:\\s+${transChars}+){0,5}\\s*=\\s*[^\\n]*$`,
    'gm'
  );
  cleaned = cleaned.replace(transWordRe, function(match) {
    // If line contains common French function words embedded in a sentence, keep it
    const frenchWords = match.match(/\b(le|la|les|un|une|des|de|du|et|ou|est|sont|qui|que|ce|cette|pour|par|avec|dans|sur|pas|ne|se|il|elle|ils|elles|nous|vous|mais|donc|car|son|sa|ses|leur|leurs)\b/gi);
    // If it has multiple French words, it's probably a French sentence with = sign
    if (frenchWords && frenchWords.length >= 3) return match;
    // If the part before = looks like transliteration (has special chars), remove
    const beforeEq = match.split('=')[0];
    if (/[āīūẓḍṣṭḥḫʾʿ]/.test(beforeEq)) return '';
    return match;
  });

  // Pattern I: "In kuntum muʾminīna = si vous êtes croyants" inline patterns
  // More precisely: "Transliteration = French" inline, where transliteration has diacritics
  cleaned = cleaned.replace(/[A-Za-zāīūẓḍṣṭḥḫʾʿ''\-]+(?:\s+[A-Za-zāīūẓḍṣṭḥḫʾʿ''\-]+){0,5}\s*=\s*[^.:;\n]*[.:;]\s*/g, function(match) {
    const beforeEq = match.split('=')[0];
    // Only remove if the before-equals part has transliteration chars
    if (/[āīūẓḍṣṭḥḫʾʿ]/.test(beforeEq)) return '';
    return match;
  });

  // Pattern J: sentences/clauses that are purely about "X traduit par Y : root = meaning"
  // These are in the JUSTIFICATION section and are legit content there, keep them.
  // But in DEMARCHE section, remove lines like:
  // "Yaʾkulūna ar-ribā traduit par ..."
  // Actually these might be fine to keep - they're explaining the translation choice.
  // Let's NOT remove these.

  // Clean up: multiple spaces
  cleaned = cleaned.replace(/ {2,}/g, ' ');
  // Multiple newlines
  cleaned = cleaned.replace(/\n{3,}/g, '\n\n');
  // Trailing spaces on lines
  cleaned = cleaned.replace(/ +\n/g, '\n');
  // Empty sections like "§DEMARCHE§\n\n§JUSTIFICATION§"
  // Don't remove sections, just clean inner whitespace
  cleaned = cleaned.trim();

  const changed = cleaned !== text.trim();
  return { cleaned, changed };
}

async function main() {
  console.log('=== Pass 2: Fixing residual technical content ===\n');

  const rows = await fetchAllVerseAnalyses();
  console.log(`Found ${rows.length} rows.\n`);

  // First, show 5 problematic examples before cleaning
  console.log('--- Checking V275 BEFORE pass 2 ---');
  const v275 = rows.find(r => r.verse_id === 282);
  if (v275) console.log(v275.translation_explanation?.substring(0, 600));

  console.log('\n--- Checking V278 BEFORE pass 2 ---');
  const v278 = rows.find(r => r.verse_id === 285);
  if (v278) console.log(v278.translation_explanation?.substring(0, 600));

  console.log('\n--- Checking V225 BEFORE pass 2 ---');
  const v225 = rows.find(r => r.verse_id === 232);
  if (v225) console.log(v225.translation_explanation?.substring(0, 600));

  let cleanedCount = 0;
  let flaggedShort = [];
  let unchanged = 0;
  let nullOrEmpty = 0;
  const examples = [];
  const updates = [];

  for (const row of rows) {
    if (!row.translation_explanation || row.translation_explanation.trim() === '') {
      nullOrEmpty++;
      continue;
    }

    const { cleaned, changed } = cleanDemarche(row.translation_explanation);

    if (!changed) {
      unchanged++;
      continue;
    }

    cleanedCount++;

    if (cleaned.length < 50) {
      flaggedShort.push({ verse_id: row.verse_id, verseNum: row.verse_id - 7, cleanedLength: cleaned.length, cleaned });
    }

    // Collect specific examples
    if ([282, 285, 232, 19, 132].includes(row.verse_id) || examples.length < 3) {
      examples.push({
        verse_id: row.verse_id,
        verseNum: row.verse_id - 7,
        before: row.translation_explanation.substring(0, 400),
        after: cleaned.substring(0, 400),
      });
    }

    updates.push({ id: row.id, translation_explanation: cleaned });
  }

  console.log(`\n=== Applying ${updates.length} updates ===\n`);

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

  console.log('=== RESULTS ===\n');
  console.log(`Total rows:     ${rows.length}`);
  console.log(`Null/empty:     ${nullOrEmpty}`);
  console.log(`Unchanged:      ${unchanged}`);
  console.log(`Cleaned:        ${cleanedCount}`);
  console.log(`Flagged short:  ${flaggedShort.length}`);
  console.log(`Update errors:  ${updateErrors}`);

  if (flaggedShort.length > 0) {
    console.log('\n--- Flagged as too short after cleaning ---');
    for (const f of flaggedShort) {
      console.log(`  V${f.verseNum} (verse_id=${f.verse_id}): ${f.cleanedLength} chars => "${f.cleaned}"`);
    }
  }

  if (examples.length > 0) {
    console.log('\n--- Before/After Examples ---');
    for (const ex of examples) {
      console.log(`\n  V${ex.verseNum} (verse_id=${ex.verse_id}):`);
      console.log(`  BEFORE: ${ex.before}`);
      console.log(`  AFTER:  ${ex.after}`);
    }
  }

  // Final verification: print cleaned V275, V278
  console.log('\n=== Final verification ===');
  for (const vid of [282, 285]) {
    const { data } = await supabase.from('verse_analyses').select('translation_explanation').eq('verse_id', vid).single();
    console.log(`\n--- V${vid-7} after pass 2 ---`);
    console.log(data?.translation_explanation?.substring(0, 600));
  }
}

main().catch(console.error);
