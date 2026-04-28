const { createClient } = require('@supabase/supabase-js');
const supabase = createClient(
  'https://gwtgftosscjupxxsubev.supabase.co',
  process.env.SUPABASE_SERVICE_KEY
);

async function main() {
  // Fix 3 verses with remaining (pos=N) markers
  for (const vid of [172, 269, 291]) { // V165=172, V262=269, V284=291
    const { data } = await supabase.from('verse_analyses')
      .select('id, translation_explanation').eq('verse_id', vid).single();
    if (!data) continue;
    let t = data.translation_explanation;
    const before = t;

    // Remove (pos=N) and (pos=N-M) markers
    t = t.replace(/\(pos=\d+(?:-\d+)?\)/g, '');
    // Clean double spaces
    t = t.replace(/ {2,}/g, ' ');
    t = t.trim();

    if (t !== before.trim()) {
      await supabase.from('verse_analyses')
        .update({ translation_explanation: t }).eq('id', data.id);
      console.log('Fixed V' + (vid - 7) + ': removed pos markers');
    }
  }

  // Fix V281 (verse_id 288) - replace corrupted JUSTIFICATION
  const { data: d281 } = await supabase.from('verse_analyses')
    .select('id, translation_explanation').eq('verse_id', 288).single();
  if (d281) {
    let t = d281.translation_explanation;

    // The DEMARCHE has orphaned fragment " et ils ne seront pas lésés."
    // Clean it up
    t = t.replace(/\s+et ils ne seront pas lésés\./, '');

    // Replace corrupted JUSTIFICATION entirely
    const critIdx = t.indexOf('§CRITIQUE§');
    const justIdx = t.indexOf('§JUSTIFICATION§');
    if (justIdx >= 0 && critIdx > justIdx) {
      // Extract the CRITIQUE section (which has useful content)
      const critique = t.substring(critIdx);
      // Check if CRITIQUE has actual Hamidullah comparison
      if (/Hamidullah/.test(critique)) {
        t = t.substring(0, justIdx + 16) + '\nVoir la section critique ci-dessous.\n\n' + critique;
      }
    }

    // But also clean up the CRITIQUE content - extract the Hamidullah part
    // The CRITIQUE has garbled beginning: "sens retenu de..." is before §CRITIQUE§
    // Actually check if the Hamidullah quote is inside JUSTIFICATION or CRITIQUE

    await supabase.from('verse_analyses')
      .update({ translation_explanation: t }).eq('id', d281.id);
    console.log('Fixed V281');
    console.log('V281 final:');
    console.log(t);
  }

  // Final verification of all 286
  console.log('\n=== Final verification ===');
  const { data: allRows } = await supabase.from('verse_analyses')
    .select('verse_id, translation_explanation')
    .gte('verse_id', 8).lte('verse_id', 293).order('verse_id');

  let clean = 0, issues = 0;
  for (const row of allRows) {
    const t = row.translation_explanation || '';
    const v = row.verse_id - 7;
    const problems = [];

    if (/\(pos=\d+/.test(t)) problems.push('pos');
    if (/\bForm [IVX]+\b/.test(t)) problems.push('form');
    if (/\b[123][MF][SPD]\b/.test(t)) problems.push('morph');

    if (problems.length > 0) {
      issues++;
      console.log('  V' + v + ': ' + problems.join(', '));
    } else {
      clean++;
    }
  }
  console.log('Clean: ' + clean + '/286, Issues: ' + issues);
}

main().catch(console.error);
