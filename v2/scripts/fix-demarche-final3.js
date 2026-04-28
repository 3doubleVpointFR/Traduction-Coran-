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

  // 1. Clean orphaned JUSTIFICATION content that starts with fragments
  //    e.g. "§JUSTIFICATION§\n "consomment l'usure" : augmenter ;"
  //    Remove lines that start with quoted text + : pattern (orphaned from transliteration removal)
  c = c.replace(/(§JUSTIFICATION§\n)\s*"[^"]*"\s*:\s*[^.\n]*[.;]\s*/g, '$1');

  // 2. Remove orphaned fragment lines in JUSTIFICATION that are just:
  //    "word — meaning" or "infinitive — meaning" without proper structure
  //    e.g. "abandonner — "abandonnez" est juste."
  //    These are fragments from "TranslitWord traduit par "X" : meaning" patterns
  c = c.replace(/(§JUSTIFICATION§\n(?:.*\n)*?)\s*[a-zéèêëàâùûîïôöç]+\s*—\s*"[^"]*"\s+est\s+[^.\n]*\.\s*/g, '$1');

  // 3. Remove lines that are just: "augmenter ;" or "affliger ;" (orphaned root meanings)
  c = c.replace(/^\s*[a-zéèêëàâùûîïôöç]+(?:\s*[/,]\s*[a-zéèêëàâùûîïôöç]+)*\s*[;.]\s*$/gm, '');

  // 4. Remove "traduit par "X" :" fragments (orphaned)
  c = c.replace(/\s*traduit par\s+"[^"]*"\s*:\s*/g, ' ');

  // 5. Remove orphaned "condition mise sur la foi." type fragments
  //    (these are meaning glosses without context)

  // 6. Remove "Ajal musamman : terme fixe/designe." type glossary entries
  //    Capitalized transliteration word : French meaning.
  c = c.replace(/[A-Z][A-Za-zāīūẓḍṣṭḥḫʾʿ''\-]+(?:\s+[a-zA-Zāīūẓḍṣṭḥḫʾʿ''\-]+)*\s*:\s*[a-zéèêëàâùûîïôöç][^.\n]{0,40}\.\s*/g, function(match) {
    const beforeColon = match.split(':')[0].trim();
    // Exclude legitimate French sentences starting with common French words
    const frenchStarters = /^(Le|La|Les|Un|Une|Des|De|Du|Et|Ou|Il|Elle|Ils|Elles|On|Ce|Cette|Son|Sa|Ses|Leur|Leurs|Notre|Nos|Votre|Vos|Mon|Ma|Mes|Car|Mais|Donc|Or|Que|Qui|Au|Aux|En|Par|Pour|Sur|Avec|Dans|Sans|Sous|Vers|Dieu|Hamidullah|Ibrahim|Ismael|Adam|Moïse|Moise|Jesus|Aucun|Aucune|Chaque|Tout|Tous|Toute|Structure|Nos)/;
    if (frenchStarters.test(beforeColon)) return match;
    return '';
  });

  // 7. Remove orphaned ": " at start of content after JUSTIFICATION
  c = c.replace(/(§JUSTIFICATION§\n)\s*:\s*/g, '$1');

  // 8. Remove "(N)" orphaned numbered structure refs
  //    e.g. "(1) (2) (3)" in V282 DEMARCHE
  //    Only when they appear as a sequence of 3+ consecutive numbered parentheses
  c = c.replace(/(?:\(\d+\)\s*){3,}/g, '');

  // 9. Remove "Wa-lā yaʾba" and similar lone transliteration words between cleaned parentheses
  //    In the structure description of V282
  c = c.replace(/\bWa-[A-Za-zāīūẓḍṣṭḥḫʾʿ''\-]+\b/g, function(match) {
    // Only remove if it's in a context with orphaned () around it
    return '';
  });

  // 10. Remove "Illā" and similar standalone transliteration particles
  c = c.replace(/\bIllā\b/g, '');

  // 11. Clean empty parentheses, double spaces, etc
  c = c.replace(/\(\s*\)/g, '');
  c = c.replace(/\n{3,}/g, '\n\n');
  c = c.replace(/ {2,}/g, ' ');
  c = c.replace(/ +\n/g, '\n');

  // 12. Remove orphaned lines with just "Ḍ:" or "Ṣ" or "Ḥ:" (corrupted fragments)
  c = c.replace(/^\s*[ḌṢḤ]+:?\s*$/gm, '');

  // 13. Remove leading comma after section header
  c = c.replace(/(§\w+§\n)\s*,/g, '$1');

  c = c.trim();
  return { cleaned: c, changed: c !== text.trim() };
}

async function main() {
  console.log('=== Final cleanup pass 3 ===\n');
  const rows = await fetchAll();

  let cleanedCount = 0, unchanged = 0;
  const updates = [];

  for (const row of rows) {
    if (!row.translation_explanation) continue;
    const { cleaned, changed } = cleanText(row.translation_explanation);
    if (!changed) { unchanged++; continue; }
    cleanedCount++;
    updates.push({ id: row.id, translation_explanation: cleaned });
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
  console.log('Applied: ' + updates.length + ', Errors: ' + errors);

  // Verify
  console.log('\n=== Verification ===');
  for (const vid of [282, 285, 289, 32, 107]) {
    const { data } = await supabase.from('verse_analyses').select('translation_explanation').eq('verse_id', vid).single();
    console.log('\n--- V' + (vid-7) + ' ---');
    console.log(data?.translation_explanation?.substring(0, 500));
  }
}

main().catch(console.error);
