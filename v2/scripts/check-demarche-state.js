const { createClient } = require('@supabase/supabase-js');
const sb = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

async function main() {
  const { data } = await sb.from('verse_analyses').select('verse_id, translation_explanation')
    .gte('verse_id', 8).lte('verse_id', 293).order('verse_id');

  let corruptCount = 0;
  const corrupt = [];

  for (const row of data) {
    const t = row.translation_explanation || '';
    const issues = [];

    // Check for remaining transliteration fragments
    if (/[āīūẓḍṣṭḥḫʾʿ]/.test(t)) {
      // Count how many transliteration words are in the DEMARCHE section
      const demEnd = t.indexOf('§JUSTIFICATION§');
      const dem = demEnd > 0 ? t.substring(0, demEnd) : t;
      const transWords = (dem.match(/[A-Za-zāīūẓḍṣṭḥḫʾʿ''\-]*[āīūẓḍṣṭḥḫʾʿ][A-Za-zāīūẓḍṣṭḥḫʾʿ''\-]*/g) || []);
      if (transWords.length > 5) issues.push('trans-in-dem:' + transWords.length);
    }

    // Check for "Traduit par" patterns
    const traduitCount = (t.match(/Traduit par/g) || []).length;
    if (traduitCount > 2) issues.push('traduit:' + traduitCount);

    // Check for remaining "Form X" references
    const formCount = (t.match(/Form [IVX]+/g) || []).length;
    if (formCount > 0) issues.push('form:' + formCount);

    // Check if DEMARCHE section is very short (corrupted)
    const demStart = t.indexOf('§DEMARCHE§');
    const demEnd = t.indexOf('§JUSTIFICATION§');
    if (demStart >= 0 && demEnd > demStart) {
      const demContent = t.substring(demStart + 12, demEnd).trim();
      if (demContent.length < 50) issues.push('short-dem:' + demContent.length);
    }

    // Check for "root = meaning" patterns like "rbw = croître"
    const rootPatterns = (t.match(/\b[a-zA-Zʾʿ''\-]{2,5}\s*=\s*[a-zéèêëàâùûîïôöçA-Z][^;,.\n]{2,20}/g) || []);
    if (rootPatterns.length > 3) issues.push('root-eq:' + rootPatterns.length);

    if (issues.length > 0) {
      corruptCount++;
      corrupt.push({ v: row.verse_id - 7, issues: issues.join(', ') });
    }
  }

  console.log('Total verses with remaining issues: ' + corruptCount);
  for (const c of corrupt) {
    console.log('  V' + c.v + ': ' + c.issues);
  }
}

main().catch(console.error);
