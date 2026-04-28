const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  'https://gwtgftosscjupxxsubev.supabase.co',
  process.env.SUPABASE_SERVICE_KEY
);

// Sourate 2 verse_ids: verse_number + 7 (sourate 1 has 7 verses)
// So verse 1 of sourate 2 = verse_id 8, verse 286 = verse_id 293

async function fetchSamples() {
  console.log('=== PHASE 1: Fetching 5 sample translation_explanation fields ===\n');

  const sampleVerseIds = [
    8 + 24,   // V25 (early, V1-50 range)
    8 + 124,  // V125 (V100-150 range)
    8 + 224,  // V225 (V200-250 range)
    8 + 274,  // V275 (user reported)
    8 + 277,  // V278 (V271-280 range)
  ];

  for (const vid of sampleVerseIds) {
    const { data, error } = await supabase
      .from('verse_analyses')
      .select('verse_id, translation_explanation')
      .eq('verse_id', vid)
      .single();

    if (error) {
      console.log(`verse_id ${vid} (V${vid - 7}): ERROR - ${error.message}`);
      continue;
    }
    if (!data || !data.translation_explanation) {
      console.log(`verse_id ${vid} (V${vid - 7}): NULL or empty`);
      continue;
    }

    console.log(`--- verse_id ${vid} (V${vid - 7}) ---`);
    console.log(data.translation_explanation.substring(0, 1500));
    console.log('...\n');
  }
}

function cleanDemarche(text) {
  if (!text) return { cleaned: text, changed: false };

  let cleaned = text;

  // Pattern 1: Lines like "Word (pos=N) = translation." or "Word (pos=N-M) = translation."
  // These can appear as full lines or inline
  // e.g. "Ya'kulūna ar-ribā (pos=2-3) = ils consomment l'usure."
  cleaned = cleaned.replace(/[A-Za-zÀ-ÿ''āīūẓḍṣṭḥ\-\s]+\(pos=\d+(?:-\d+)?\)\s*=\s*[^.;!\n]*[.;!]?\s*/gi, '');

  // Pattern 2: standalone (pos=N) or (pos=N-M) markers left over
  cleaned = cleaned.replace(/\(pos=\d+(?:-\d+)?\)/g, '');

  // Pattern 3: "Form I/II/III/IV/V/VI/VII/VIII/IX/X 3MP de xyz" morphological references
  // e.g. "Form I 3MP de qwm" or "Form IV 3FS de rby"
  cleaned = cleaned.replace(/Form\s+[IVX]+\s+\d*[MF][SP]\s+de\s+[a-zA-Zʾʿ''āīūẓḍṣṭḥ]+\.?\s*/gi, '');

  // Pattern 4: Standalone morphological codes like "3MP", "3MS", "3FS", "2MP", "1S", "2MS" etc.
  // Only when they appear as isolated tokens (word boundary)
  cleaned = cleaned.replace(/\b[123][MF][SPD]\b/g, '');

  // Pattern 5: "3ème personne masculin/féminin pluriel/singuliel/duel" verbose morphological descriptions
  cleaned = cleaned.replace(/\d+(?:ère|ème|e)\s+personne\s+(?:masculin|féminin)(?:e)?\s+(?:pluriel|singulier|duel)\.?\s*/gi, '');

  // Pattern 6: Buckwalter transliteration patterns - words with special chars typical of transliteration
  // Lines that are purely transliteration + translation, like "lā ta'kulū (= ne consommez pas)"
  // Be careful not to remove French text that happens to have apostrophes
  // Only target lines that start with transliteration and have = sign
  cleaned = cleaned.replace(/^[A-Za-zāīūẓḍṣṭḥʾʿ'']+(?:\s+[A-Za-zāīūẓḍṣṭḥʾʿ'']+)*\s*\(?\s*=\s*[^)\n]*\)?\s*$/gm, '');

  // Pattern 7: Remove "de la racine XYZ" technical references when they appear as standalone fragments
  // But keep them if embedded in a proper French sentence
  // cleaned = cleaned.replace(/\bde la racine [a-zA-Zʾʿ]+\b/gi, ''); // too aggressive, skip

  // Pattern 8: Lines that are just transliteration words (no French), e.g. "wa-lā taʾkulū"
  // These are Buckwalter-style: typically have ā, ī, ū, ʾ, ʿ, ḥ, etc.
  // Only remove if the line is purely transliteration (no common French words)
  cleaned = cleaned.replace(/^[A-Za-zāīūẓḍṣṭḥʾʿ''\-\s]+$/gm, function(match) {
    // If line has common French words, keep it
    if (/\b(le|la|les|un|une|des|de|du|et|ou|est|sont|qui|que|ce|cette|pour|par|avec|dans|sur|pas|ne|se|il|elle|ils|elles|nous|vous|on|mais|donc|car|ni|si|son|sa|ses|leur|leurs|mon|ma|mes|au|aux)\b/i.test(match)) {
      return match;
    }
    // If very short (< 5 chars), could be French, keep it
    if (match.trim().length < 5) return match;
    // Otherwise likely transliteration, remove
    return '';
  });

  // Clean up: multiple blank lines -> single blank line
  cleaned = cleaned.replace(/\n{3,}/g, '\n\n');
  // Trim
  cleaned = cleaned.trim();

  const changed = cleaned !== text.trim();
  return { cleaned, changed };
}

async function fetchAllVerseAnalyses() {
  const allRows = [];
  let from = 0;
  const pageSize = 1000;

  while (true) {
    const { data, error } = await supabase
      .from('verse_analyses')
      .select('id, verse_id, translation_explanation')
      .gte('verse_id', 8)    // sourate 2 starts at verse_id 8
      .lte('verse_id', 293)  // sourate 2 ends at verse_id 293
      .order('verse_id')
      .range(from, from + pageSize - 1);

    if (error) {
      console.error('Fetch error:', error.message);
      break;
    }
    if (!data || data.length === 0) break;

    allRows.push(...data);
    if (data.length < pageSize) break;
    from += pageSize;
  }

  return allRows;
}

async function main() {
  // Phase 1: Show samples
  await fetchSamples();

  // Phase 2: Fetch all and clean
  console.log('\n=== PHASE 2: Fetching all verse_analyses for Sourate 2 ===\n');
  const rows = await fetchAllVerseAnalyses();
  console.log(`Found ${rows.length} verse_analyses rows for Sourate 2.\n`);

  let cleanedCount = 0;
  let flaggedShort = [];
  let unchanged = 0;
  let nullOrEmpty = 0;
  const examples = []; // store before/after for 3 examples

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

    // Collect examples (pick first 3 that changed)
    if (examples.length < 3) {
      examples.push({
        verse_id: row.verse_id,
        verseNum: row.verse_id - 7,
        before: row.translation_explanation.substring(0, 500),
        after: cleaned.substring(0, 500),
      });
    }

    updates.push({ id: row.id, translation_explanation: cleaned });
  }

  // Phase 3: Apply updates
  console.log(`=== PHASE 3: Applying ${updates.length} updates ===\n`);

  let updateErrors = 0;
  // Batch updates in groups of 50
  for (let i = 0; i < updates.length; i += 50) {
    const batch = updates.slice(i, i + 50);
    const promises = batch.map(u =>
      supabase
        .from('verse_analyses')
        .update({ translation_explanation: u.translation_explanation })
        .eq('id', u.id)
    );
    const results = await Promise.all(promises);
    for (const r of results) {
      if (r.error) {
        updateErrors++;
        console.error('Update error:', r.error.message);
      }
    }
  }

  // Report
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
}

main().catch(console.error);
