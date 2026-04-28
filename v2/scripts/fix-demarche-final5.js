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

  // Target: raw glossary entries in JUSTIFICATION sections
  // Pattern: "root = Category/Word" or "root = Category — explanation"
  // e.g. "kwn = Être/Existence." or "amn = Sécurité/Confiance —"
  // These have uppercase French after = (capitalized category names)

  // Pattern A: "root = UppercaseWord/UppercaseWord" (category glossary)
  c = c.replace(/\b[a-zA-Z'ʾʿ\-]{2,4}\s*=\s*[A-ZÉÈÊËÀÂÙÛÎÏÔÖÇ][a-zéèêëàâùûîïôöç]+(?:\/[A-ZÉÈÊËÀÂÙÛÎÏÔÖÇ][a-zéèêëàâùûîïôöç]+)*(?:\s*[—\-]\s*[^.\n]*)?\.?\s*/g, function(match) {
    const root = match.split('=')[0].trim();
    // Skip common French 2-letter words
    const commonFr = /^(le|la|un|il|on|ce|ne|se|si|ou|ni|en|au|du|de|et|eu|ai|as|va|vu|lu|su|bu|pu|sa|ma|ta|tu|me|te|or)$/i;
    if (commonFr.test(root)) return match;
    if (root.length <= 4) return '';
    return match;
  });

  // Pattern B: "root = préposition/word" (lowercase category with special chars)
  c = c.replace(/\b[a-zA-Z]{2,4}\s*=\s*[A-ZÉÈÊË][a-zéèêëàâùûîïôöç]+(?:\s+[a-zéèêëàâùûîïôöç]+)*(?:\s*\([^)]*\))?\.?\s*/g, function(match) {
    const root = match.split('=')[0].trim();
    const commonFr = /^(le|la|un|il|on|ce|ne|se|si|ou|ni|en|au|du|de|et|eu|ai|as|va|vu|lu|su|bu|pu|sa|ma|ta|tu|me|te|or)$/i;
    if (commonFr.test(root)) return match;
    // Check if the part after = starts with a known category word
    const afterEq = match.split('=')[1]?.trim();
    if (afterEq && /^(Être|Sur|Voyage|Découverte|Écriture|Gage|Sécurité|Partie|Accomplissement|Bien|Mal|Foi|Dette|Justice|Perception|Corruption)/.test(afterEq)) {
      return '';
    }
    return match;
  });

  // Pattern C: Remaining " = faire confiance, confier" type patterns
  //    with lowercase root before =
  c = c.replace(/\b[a-zA-Z]{2,4}\s+passif\s*=\s*[A-ZÉÈÊË][^.\n]*\.?\s*/g, '');

  // Pattern D: orphaned "pris en main." or "ne pas trouver de scribe." fragments
  //    These are sentence fragments left from glossary cleanup
  //    Only remove if they're very short and isolated
  c = c.replace(/^\s*[a-z][^.\n]{5,40}\.\s*$/gm, function(match) {
    // Only remove if it looks like a fragment (no verb indicators)
    const trimmed = match.trim();
    if (trimmed.length < 30 && !/\b(est|sont|a|ont|fait|dit|peut|doit|faut|voir|cette|cette|le verset)\b/i.test(trimmed)) {
      return '';
    }
    return match;
  });

  // Pattern E: "l'un de vous à l'autre" : standalone quoted text fragments
  c = c.replace(/^\s*"[^"]{5,40}"\s*:\s*$/gm, '');

  // Pattern F: Lines starting with "(= " which are orphaned
  c = c.replace(/^\s*\(=\s*[^)\n]*\)\s*$/gm, '');

  // Cleanup
  c = c.replace(/\n{3,}/g, '\n\n');
  c = c.replace(/ {2,}/g, ' ');
  c = c.replace(/ +\n/g, '\n');
  c = c.trim();

  return { cleaned: c, changed: c !== text.trim() };
}

async function main() {
  console.log('=== Final cleanup pass 5 ===\n');
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
  console.log('Applied, Errors: ' + errors);

  // Verify
  console.log('\n=== Verification ===');
  for (const vid of [290, 288, 292, 293]) {
    const { data } = await supabase.from('verse_analyses').select('translation_explanation').eq('verse_id', vid).single();
    if (!data) continue;
    console.log('\n--- V' + (vid-7) + ' ---');
    const justIdx = data.translation_explanation.indexOf('JUSTIFICATION');
    if (justIdx >= 0) {
      console.log('JUST: ' + data.translation_explanation.substring(justIdx, justIdx + 300));
    }
  }

  // Final diagnostic
  console.log('\n=== Final diagnostic ===');
  let issueCount = 0;
  const rows2 = await fetchAll();
  for (const row of rows2) {
    const t = row.translation_explanation || '';
    const rootEq = (t.match(/\b[a-zA-Zʾʿ''\-]{2,5}\s*=\s*[a-zéèêëàâùûîïôöç][^;,.\n]{1,30}/g) || []);
    // Filter out legitimate French uses of =
    const realRootEq = rootEq.filter(m => {
      const root = m.split('=')[0].trim();
      return root.length <= 4 && !/^(le|la|un|il|on|ce|ne|se|si|ou|ni|en|au|du|de|et)$/i.test(root);
    });
    if (realRootEq.length > 3) {
      issueCount++;
      console.log('  V' + (row.verse_id - 7) + ': root-eq:' + realRootEq.length);
    }
  }
  console.log('Verses with real root-eq issues: ' + issueCount);
}

main().catch(console.error);
