const { createClient } = require('@supabase/supabase-js');
const supabase = createClient(
  'https://gwtgftosscjupxxsubev.supabase.co',
  process.env.SUPABASE_SERVICE_KEY
);

async function main() {
  // Fix V281 (verse_id 288) - corrupted DEMARCHE and JUSTIFICATION
  const { data: d281 } = await supabase.from('verse_analyses')
    .select('id, translation_explanation').eq('verse_id', 288).single();

  if (d281) {
    let t = d281.translation_explanation;
    console.log('V281 BEFORE:');
    console.log(t);
    console.log();

    // Clean the DEMARCHE: remove ":inaccompli de rja + " and ": :" and technical fragments
    t = t.replace(/:inaccompli de [a-z]+ \+ /g, ' ');
    t = t.replace(/Mā kasabat\s*:\s*:\s*/g, '');
    t = t.replace(/:\s*:\s*/g, ' ');

    // Clean the JUSTIFICATION: replace garbled content
    const critIdx = t.indexOf('§CRITIQUE§');
    const justIdx = t.indexOf('§JUSTIFICATION§');
    if (justIdx >= 0 && critIdx > justIdx) {
      const justContent = t.substring(justIdx + 16, critIdx).trim();
      if (/sens retenu de senses/.test(justContent)) {
        t = t.substring(0, justIdx + 16) + '\nVoir la section critique ci-dessous.\n\n' + t.substring(critIdx);
      }
    }

    console.log('V281 AFTER:');
    console.log(t);

    await supabase.from('verse_analyses')
      .update({ translation_explanation: t }).eq('id', d281.id);
    console.log('Updated V281');
  }

  // Check all 286 verses for remaining corruption indicators
  console.log('\n=== Final scan of all 286 verses ===');
  const { data: allRows } = await supabase.from('verse_analyses')
    .select('verse_id, translation_explanation')
    .gte('verse_id', 8).lte('verse_id', 293).order('verse_id');

  let cleanCount = 0;
  let problematic = [];

  for (const row of allRows) {
    const t = row.translation_explanation || '';
    const v = row.verse_id - 7;
    const issues = [];

    // Check for (pos=N) patterns (should be zero)
    if (/\(pos=\d+/.test(t)) issues.push('pos-marker');

    // Check for "Form [IVX]+" patterns
    if (/\bForm [IVX]+\b/.test(t)) issues.push('form-ref');

    // Check for standalone morphological codes
    if (/\b[123][MF][SPD]\b/.test(t)) issues.push('morph-code');

    // Check for garbled JUSTIFICATION (starts with fragments)
    const justIdx = t.indexOf('§JUSTIFICATION§');
    const critIdx = t.indexOf('§CRITIQUE§');
    if (justIdx >= 0) {
      const justEnd = critIdx > justIdx ? critIdx : t.length;
      const justContent = t.substring(justIdx + 16, justEnd).trim();
      if (justContent.length > 0 && justContent.length < 20 && !/Voir/.test(justContent)) {
        issues.push('short-just:' + justContent.length);
      }
    }

    // Check for corrupted fragments (sequences of : : or similar)
    if (/:\s*:\s*:/.test(t)) issues.push('triple-colon');

    if (issues.length > 0) {
      problematic.push({ v, issues: issues.join(', ') });
    } else {
      cleanCount++;
    }
  }

  console.log('Clean verses: ' + cleanCount + ' / ' + allRows.length);
  if (problematic.length > 0) {
    console.log('Remaining issues:');
    for (const p of problematic) console.log('  V' + p.v + ': ' + p.issues);
  }

  // Print summary stats
  console.log('\n=== Summary ===');
  console.log('Total Sourate 2 verses: ' + allRows.length);
  console.log('Fully clean: ' + cleanCount);
  console.log('With remaining minor issues: ' + problematic.length);
}

main().catch(console.error);
