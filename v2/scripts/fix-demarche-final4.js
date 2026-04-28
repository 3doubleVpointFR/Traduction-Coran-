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

  // 1. Remove lone transliteration words/fragments (2-15 chars with ā,ī,ū,ʾ,ʿ,ḫ etc.)
  //    that appear as orphaned text between or before § markers
  //    e.g. "ā yaʾba" in "Structure : ā yaʾba Illā"
  //    Be careful: some transliteration words are embedded in legitimate French prose
  //    Only target: sequences that are standalone between punctuation/markers

  // 2. Remove "root = meaning" patterns globally (these are technical glossary entries)
  //    e.g. "slf = précéder" or "khld = être éternel"
  //    Root = 2-4 lowercase letters, meaning = French word(s)
  c = c.replace(/\b[a-zA-Z'ʾʿ\-]{2,4}\s*=\s*[a-zéèêëàâùûîïôöçê][^.;\n]{0,40}[.;—]\s*/g, function(match) {
    const parts = match.split('=');
    const root = parts[0].trim();
    // Check if the root is a common French word - if so, keep it
    const commonFr = /^(le|la|un|il|on|ce|ne|se|si|ou|ni|en|au|du|de|et|eu|ai|as|va|vu|lu|su|bu|pu|sa|ma|ta|tu|me|te|or)$/i;
    if (commonFr.test(root)) return match;
    // If root is short (2-4 chars) and looks like a root code, remove
    if (root.length <= 4) return '';
    return match;
  });

  // 3. Remove "Ḍ:", "ṢḤ:", and similar corrupted fragment markers
  c = c.replace(/[ḌṢḤḪṬẒāīūẓḍṣṭḥḫ]+:\s*/g, '');

  // 4. Remove "ā yaʾba" and similar short transliteration fragments
  //    Target: sequences of transliteration words that contain special chars
  //    and don't form part of a French sentence
  c = c.replace(/\b[A-Za-zāīūẓḍṣṭḥḫʾʿ''\-]*[āīūẓḍṣṭḥḫʾʿ][A-Za-zāīūẓḍṣṭḥḫʾʿ''\-]*\b/g, function(match) {
    // Keep if it's inside ** ** (bold, used intentionally)
    // Keep if it's a well-known term used in French context (common transliterations)
    const commonTerms = ['ribā', 'taqwā', 'muʾminīna', 'ittaqū', 'ḥurūf', 'muqaṭṭaʿa'];
    if (commonTerms.some(t => match.includes(t))) return match;
    // Keep if it's part of a larger French word (e.g. embedded in text)
    return match; // Actually, let's be conservative here - too risky to remove inline
  });

  // 5. Remove orphaned "Structure :" line fragments with only transliteration after
  c = c.replace(/Structure\s*:\s*(?:[A-Za-zāīūẓḍṣṭḥḫʾʿ''\-\s()]+\s*)+(?=\n|§)/g, function(match) {
    // Check if there's actual French content after "Structure :"
    const afterColon = match.replace(/^Structure\s*:\s*/, '');
    // If most of the content is transliteration or empty parens, clean it up
    const cleaned = afterColon.replace(/[A-Za-zāīūẓḍṣṭḥḫʾʿ''\-]+/g, '').replace(/[() ]/g, '').trim();
    if (cleaned.length < 5) return 'Structure textuelle complexe.';
    return match;
  });

  // 6. Remove orphaned sentences that are just fragment meanings
  //    e.g. "subsister — "ce qui reste" des créances d'usure."
  //    "condition mise sur la foi."
  //    These are leftover from the word-by-word analysis
  //    But be careful: "Hamidullah traduit X par Y" is legitimate

  // 7. Remove "selon ce que Dieu lui a enseigne." when it's orphaned
  //    (it's a fragment from a glossary entry)
  c = c.replace(/^\s*selon ce que Dieu lui a enseigne\.\s*$/gm, '');

  // 8. Leading comma fix
  c = c.replace(/(§\w+§\n)\s*,\s*/g, '$1');

  // 9. Empty JUSTIFICATION sections: if content is <50 chars, add note
  const justMatch = c.match(/§JUSTIFICATION§\n([\s\S]*?)(?=§CRITIQUE§|$)/);
  if (justMatch) {
    const justContent = justMatch[1].trim();
    if (justContent.length < 30 && justContent.length > 0) {
      // Replace with a cleaner version
      c = c.replace(/§JUSTIFICATION§\n[\s\S]*?(?=§CRITIQUE§|$)/,
        '§JUSTIFICATION§\nVoir la section critique ci-dessous.\n\n');
    }
  }

  // 10. Cleanup
  c = c.replace(/\n{3,}/g, '\n\n');
  c = c.replace(/ {2,}/g, ' ');
  c = c.replace(/ +\n/g, '\n');
  c = c.trim();

  return { cleaned: c, changed: c !== text.trim() };
}

async function main() {
  console.log('=== Final cleanup pass 4 ===\n');
  const rows = await fetchAll();

  let cleanedCount = 0, unchanged = 0;
  const updates = [];

  for (const row of rows) {
    if (!row.translation_explanation) continue;
    const { cleaned, changed } = cleanText(row.translation_explanation);
    if (!changed) { unchanged++; continue; }
    cleanedCount++;
    updates.push({ id: row.id, translation_explanation: cleaned, v: row.verse_id - 7 });
  }

  console.log('Unchanged: ' + unchanged + ', To update: ' + updates.length);

  let errors = 0;
  for (let i = 0; i < updates.length; i += 50) {
    const batch = updates.slice(i, i + 50);
    const results = await Promise.all(batch.map(u =>
      supabase.from('verse_analyses').update({ translation_explanation: u.translation_explanation }).eq('id', u.id)
    ));
    for (const r of results) if (r.error) { errors++; console.error(r.error.message); }
  }
  console.log('Applied, Errors: ' + errors);

  // Verify key verses
  console.log('\n=== Verification ===');
  for (const vid of [282, 285, 289, 32, 19, 107]) {
    const { data } = await supabase.from('verse_analyses').select('translation_explanation').eq('verse_id', vid).single();
    console.log('\n--- V' + (vid-7) + ' ---');
    console.log(data?.translation_explanation);
    console.log('---');
  }
}

main().catch(console.error);
