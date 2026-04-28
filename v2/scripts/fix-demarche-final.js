const { createClient } = require('@supabase/supabase-js');
const supabase = createClient(
  'https://gwtgftosscjupxxsubev.supabase.co',
  process.env.SUPABASE_SERVICE_KEY
);

async function fetchAll() {
  const allRows = [];
  let from = 0;
  while (true) {
    const { data, error } = await supabase
      .from('verse_analyses')
      .select('id, verse_id, translation_explanation')
      .gte('verse_id', 8).lte('verse_id', 293)
      .order('verse_id')
      .range(from, from + 999);
    if (error) { console.error('Fetch error:', error.message); break; }
    if (!data || data.length === 0) break;
    allRows.push(...data);
    if (data.length < 1000) break;
    from += 1000;
  }
  return allRows;
}

function cleanText(text) {
  if (!text) return { cleaned: text, changed: false };
  let c = text;

  // ===== JUSTIFICATION section cleanup =====
  // The JUSTIFICATION section in later verses has raw technical patterns like:
  // "Tadāyantum : dyn = Dette/Obligation —(se faire des dettes mutuellement)."
  // "Kātibun : scribe (participe actif de ktb)."
  // These are "TranslitWord : root = French" patterns.

  // Pattern 1: "TranslitWord : root = Meaning" - raw root glossary entries
  // e.g. "Daynin : dette." or "Fa-ktubūhu : ktb = Ecriture"
  // These are entries that start with a transliteration word, have :, and root = meaning
  // But be careful: in early verses, "**mot** — Le sens retenu est..." is the intended format
  c = c.replace(/[A-Za-zāīūẓḍṣṭḥḫʾʿ''\-]+\s*:\s*[a-zA-Zʾʿ''\-]{2,5}\s*=\s*[^.\n]+\.?\s*/g, function(match) {
    // Only remove if the word before : has transliteration diacritics
    const beforeColon = match.split(':')[0].trim();
    if (/[āīūẓḍṣṭḥḫʾʿ]/.test(beforeColon)) return '';
    return match;
  });

  // Pattern 2: "TranslitWord : French meaning." without root code
  // e.g. "Daynin : dette." - just word : translation
  c = c.replace(/[A-Za-zāīūẓḍṣṭḥḫʾʿ''\-]+\s*:\s*[a-zéèêëàâùûîïôöç][^.:;\n]{0,30}[.]\s*/g, function(match) {
    const beforeColon = match.split(':')[0].trim();
    if (/[āīūẓḍṣṭḥḫʾʿ]/.test(beforeColon) && beforeColon.length < 20) return '';
    return match;
  });

  // Pattern 3: Remaining "Traduit par" fragments that start with that phrase
  // "Traduit par "mot" :" -> remove if followed by nothing useful
  c = c.replace(/Traduit par\s+"[^"]*"\s*:\s*/g, '');

  // Pattern 4: Standalone "root = meaning" in JUSTIFICATION
  // e.g. "rbw = croître, augmenter ;" or "dyn = Dette"
  // Only 2-5 char roots with transliteration chars
  c = c.replace(/\b[a-zA-Zʾʿ''\-]{2,5}\s*=\s*[A-Za-zéèêëàâùûîïôöçÀ-ÿ][^;,.\n]{1,30}[;,]\s*/g, function(match) {
    const beforeEq = match.split('=')[0].trim();
    // Only remove if it looks like a root code (short, possibly with ʾʿ)
    if (beforeEq.length <= 5 && /^[a-zA-Zʾʿ''\-]+$/.test(beforeEq)) return '';
    return match;
  });

  // Pattern 5: "(participe actif de xyz)" or "(imperatif pluriel)" technical grammar notes
  c = c.replace(/\((?:participe (?:actif|passif)|imperatif|forme? [IVX]+|inaccompli|accompli)[^)]*\)/gi, '');

  // Pattern 6: Orphaned " : " followed by nothing meaningful before period/newline
  // e.g. "— ." or ": ."
  c = c.replace(/\s*:\s*\./g, '.');
  c = c.replace(/\s*—\s*\./g, '.');

  // Pattern 7: "selon ce que Dieu lui a enseigne (elm)." - (root) in parens
  c = c.replace(/\([a-zA-Zʾʿ''\-]{2,5}\)/g, '');

  // Pattern 8: Leftover transliteration-only fragments before §
  // e.g. "In kuntum muʾ§"
  c = c.replace(/[A-Za-zāīūẓḍṣṭḥḫʾʿ''\-\s]+(?=§)/g, function(match) {
    // Only remove if it has transliteration chars and no French
    if (/[āīūẓḍṣṭḥḫʾʿ]/.test(match)) {
      const words = match.trim().split(/\s+/);
      const french = words.filter(w => /^(le|la|les|un|une|des|de|du|et|ou|est|sont|qui|que|ce|cette|pour|par|avec|dans|sur|pas|ne|se|il|elle|ils|nous|vous|mais|donc|car|son|sa|ses)$/i.test(w));
      if (french.length === 0) return '\n\n';
    }
    return match;
  });

  // Pattern 9: Empty sentences "." or lines with just punctuation
  c = c.replace(/^\s*[.;,]\s*$/gm, '');

  // Pattern 10: Multiple empty lines
  c = c.replace(/\n{3,}/g, '\n\n');
  c = c.replace(/ {2,}/g, ' ');
  c = c.replace(/ +\n/g, '\n');
  c = c.trim();

  return { cleaned: c, changed: c !== text.trim() };
}

async function main() {
  console.log('=== Final cleanup pass ===\n');
  const rows = await fetchAll();
  console.log('Total rows: ' + rows.length);

  let cleanedCount = 0, unchanged = 0, flaggedShort = [];
  const updates = [];

  for (const row of rows) {
    if (!row.translation_explanation) continue;
    const { cleaned, changed } = cleanText(row.translation_explanation);
    if (!changed) { unchanged++; continue; }
    cleanedCount++;
    if (cleaned.length < 50) flaggedShort.push({ v: row.verse_id - 7, len: cleaned.length });
    updates.push({ id: row.id, translation_explanation: cleaned });
  }

  console.log('Unchanged: ' + unchanged + ', To update: ' + updates.length + ', Flagged short: ' + flaggedShort.length);

  // Apply
  let errors = 0;
  for (let i = 0; i < updates.length; i += 50) {
    const batch = updates.slice(i, i + 50);
    const results = await Promise.all(batch.map(u =>
      supabase.from('verse_analyses').update({ translation_explanation: u.translation_explanation }).eq('id', u.id)
    ));
    for (const r of results) if (r.error) { errors++; console.error(r.error.message); }
  }
  console.log('Applied: ' + updates.length + ', Errors: ' + errors);

  if (flaggedShort.length > 0) {
    console.log('\nFlagged short:');
    for (const f of flaggedShort) console.log('  V' + f.v + ': ' + f.len + ' chars');
  }

  // Verify problematic verses
  console.log('\n=== Verification ===');
  for (const vid of [282, 285, 289, 19, 32, 232, 271]) {
    const { data } = await supabase.from('verse_analyses').select('translation_explanation').eq('verse_id', vid).single();
    if (!data) continue;
    const t = data.translation_explanation || '';
    // Find JUSTIFICATION section
    const justIdx = t.indexOf('§JUSTIFICATION§');
    console.log('\nV' + (vid - 7) + ':');
    if (justIdx >= 0) {
      console.log('  JUST: ' + t.substring(justIdx, justIdx + 200).replace(/\n/g, ' | '));
    } else {
      console.log('  ' + t.substring(0, 200).replace(/\n/g, ' | '));
    }
  }
}

main().catch(console.error);
