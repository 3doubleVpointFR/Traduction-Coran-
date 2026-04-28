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
      .order('verse_id').range(from, from + 999);
    if (error) { console.error(error.message); break; }
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

  // 1. "Word : root = Meaning" entries (JUSTIFICATION glossary-style)
  //    e.g. "Daynin : dette." or "Yattaqi : wqy = se premunir."
  //    The word before : starts with uppercase, is a single transliteration token
  //    Broader: any capitalized word followed by : then either root= or short French
  c = c.replace(/[A-Z][A-Za-zāīūẓḍṣṭḥḫʾʿ''\-]*\s*:\s*(?:[a-zA-Zʾʿ''\-]{2,5}\s*=\s*)?[A-Za-zéèêëàâùûîïôöçÀ-ÿ''][^.\n]{0,50}\.?\s*/g, function(match) {
    const beforeColon = match.split(':')[0].trim();
    // If the word before : looks like a transliteration word (starts with uppercase,
    // single word, no common French word pattern)
    const commonFrench = /^(Le|La|Les|Un|Une|Des|De|Du|Et|Ou|Il|Elle|Ils|Elles|On|Ce|Cette|Son|Sa|Ses|Leur|Leurs|Notre|Nos|Votre|Vos|Mon|Ma|Mes|Ton|Ta|Tes|Car|Mais|Donc|Or|Ni|Que|Qui|Au|Aux|En|Par|Pour|Sur|Avec|Dans|Sans|Sous|Vers|Chez|Dieu|Hamidullah|Ibrahim|Ismael|Adam|Moïse|Moise|Jesus)$/i;
    if (!commonFrench.test(beforeColon) && /^[A-Z]/.test(beforeColon) && beforeColon.length > 2) {
      // Check if it's a single transliteration-like word (no spaces)
      if (!/\s/.test(beforeColon)) return '';
    }
    return match;
  });

  // 2. Remaining "root = meaning" patterns: "xyz = French word"
  //    where xyz is 2-4 lowercase letters (root code)
  c = c.replace(/\b[a-zA-Z'ʾʿ]{2,4}\s*=\s*[a-zéèêëàâùûîïôöç][^;,.\n]{1,30}[;,.]\s*/g, function(match) {
    const beforeEq = match.split('=')[0].trim();
    // Only remove if looks like root (2-4 chars, no common French words)
    const commonFr2 = /^(le|la|un|il|on|ce|ne|se|si|ou|ni|en|au|du|de|et|eu|ai|as|va|vu|lu|su|bu|pu|sa|ma|ta|tu)$/i;
    if (beforeEq.length <= 4 && !commonFr2.test(beforeEq)) return '';
    return match;
  });

  // 3. "traduit par" fragments: "translitWord traduit par "meaning""
  c = c.replace(/[A-Za-zāīūẓḍṣṭḥḫʾʿ''\-]+\s+traduit\s+par\s+"[^"]*"\s*:\s*/g, '');
  // Also standalone "traduit par" at start of sentence after cleanup
  c = c.replace(/^\s*traduit par\s+/gim, '');

  // 4. Orphaned fragments: "= meaning" at start of content
  c = c.replace(/^\s*=\s*[^.\n]+[.]\s*/gm, '');

  // 5. Lines that are just punctuation or very short fragments (< 10 chars) after cleanup
  c = c.replace(/^\s*[.:;,\-—]+\s*$/gm, '');

  // 6. "selon ce que Dieu lui a enseigne ." -> "selon ce que Dieu lui a enseigné."
  // Actually just fix double space before period
  c = c.replace(/ +\./g, '.');

  // 7. Empty parentheses ()
  c = c.replace(/\(\s*\)/g, '');

  // 8. Cleanup
  c = c.replace(/\n{3,}/g, '\n\n');
  c = c.replace(/ {2,}/g, ' ');
  c = c.replace(/ +\n/g, '\n');
  c = c.trim();

  return { cleaned: c, changed: c !== text.trim() };
}

async function main() {
  console.log('=== Final cleanup pass 2 ===\n');
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

  // Run the diagnostic check
  console.log('\n=== Diagnostic check ===');
  const rows2 = await fetchAll();
  let issueCount = 0;
  for (const row of rows2) {
    const t = row.translation_explanation || '';
    const issues = [];

    // Count "root = meaning" patterns
    const rootEq = (t.match(/\b[a-zA-Zʾʿ''\-]{2,5}\s*=\s*[a-zéèêëàâùûîïôöç][^;,.\n]{1,30}/g) || []);
    if (rootEq.length > 3) issues.push('root-eq:' + rootEq.length);

    // Count "Traduit par"
    const tp = (t.match(/[Tt]raduit par/g) || []).length;
    if (tp > 2) issues.push('traduit:' + tp);

    // Count "Form X"
    const fm = (t.match(/Form [IVX]+/g) || []).length;
    if (fm > 0) issues.push('form:' + fm);

    // Count "TranslitWord : " glossary entries
    const glossary = (t.match(/[A-Z][A-Za-zāīūẓḍṣṭḥḫʾʿ''\-]+\s*:\s*[a-z]/g) || []);
    if (glossary.length > 3) issues.push('glossary:' + glossary.length);

    if (issues.length > 0) {
      issueCount++;
      console.log('  V' + (row.verse_id - 7) + ': ' + issues.join(', '));
    }
  }
  console.log('Total verses with remaining issues: ' + issueCount);

  // Show specific problem verses
  console.log('\n=== Sample outputs ===');
  for (const vid of [282, 285, 289]) {
    const { data } = await supabase.from('verse_analyses').select('translation_explanation').eq('verse_id', vid).single();
    if (!data) continue;
    console.log('\nV' + (vid - 7) + ' full:');
    console.log(data.translation_explanation?.substring(0, 600));
  }
}

main().catch(console.error);
