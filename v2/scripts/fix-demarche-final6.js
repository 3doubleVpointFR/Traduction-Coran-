const { createClient } = require('@supabase/supabase-js');
const supabase = createClient(
  'https://gwtgftosscjupxxsubev.supabase.co',
  process.env.SUPABASE_SERVICE_KEY
);

async function main() {
  // Targeted fixes for specific corrupted verses
  const fixes = [];

  // V283 (verse_id 290) - corrupted JUSTIFICATION
  const { data: d283 } = await supabase.from('verse_analyses')
    .select('id, translation_explanation').eq('verse_id', 290).single();
  if (d283) {
    let t = d283.translation_explanation;
    // Replace corrupted JUSTIFICATION with minimal content
    const critIdx = t.indexOf('§CRITIQUE§');
    const justIdx = t.indexOf('§JUSTIFICATION§');
    if (justIdx >= 0 && critIdx > justIdx) {
      const justContent = t.substring(justIdx + 16, critIdx).trim();
      // The JUSTIFICATION content is corrupted fragments - replace with note
      if (justContent.length < 200 && /dhw|mym|Taktumū/.test(justContent)) {
        t = t.substring(0, justIdx + 16) + '\nVoir la section critique ci-dessous.\n\n' + t.substring(critIdx);
        fixes.push({ id: d283.id, translation_explanation: t, v: 283 });
      }
    }
  }

  // V285 (verse_id 292) - corrupted JUSTIFICATION "Āmana : : :"
  const { data: d285 } = await supabase.from('verse_analyses')
    .select('id, translation_explanation').eq('verse_id', 292).single();
  if (d285) {
    let t = d285.translation_explanation;
    const critIdx = t.indexOf('§CRITIQUE§');
    const justIdx = t.indexOf('§JUSTIFICATION§');
    if (justIdx >= 0 && critIdx > justIdx) {
      const justContent = t.substring(justIdx + 16, critIdx).trim();
      if (justContent.length < 30 && /Āmana|:\s*:/.test(justContent)) {
        t = t.substring(0, justIdx + 16) + '\nVoir la section critique ci-dessous.\n\n' + t.substring(critIdx);
        fixes.push({ id: d285.id, translation_explanation: t, v: 285 });
      }
    }
  }

  // V281 (verse_id 288) - garbled JUSTIFICATION with "sens retenu de senses"
  const { data: d281 } = await supabase.from('verse_analyses')
    .select('id, translation_explanation').eq('verse_id', 288).single();
  if (d281) {
    let t = d281.translation_explanation;
    const critIdx = t.indexOf('§CRITIQUE§');
    const justIdx = t.indexOf('§JUSTIFICATION§');
    if (justIdx >= 0 && critIdx > justIdx) {
      const justContent = t.substring(justIdx + 16, critIdx).trim();
      if (/sens retenu de senses/.test(justContent)) {
        t = t.substring(0, justIdx + 16) + '\nVoir la section critique ci-dessous.\n\n' + t.substring(critIdx);
        fixes.push({ id: d281.id, translation_explanation: t, v: 281 });
      }
    }
  }

  // V275 (verse_id 282) - mostly empty JUSTIFICATION
  const { data: d275 } = await supabase.from('verse_analyses')
    .select('id, translation_explanation').eq('verse_id', 282).single();
  if (d275) {
    let t = d275.translation_explanation;
    const critIdx = t.indexOf('§CRITIQUE§');
    const justIdx = t.indexOf('§JUSTIFICATION§');
    if (justIdx >= 0 && critIdx > justIdx) {
      const justContent = t.substring(justIdx + 16, critIdx).trim();
      if (justContent.length < 100 && /est standard/.test(justContent)) {
        t = t.substring(0, justIdx + 16) + '\nVoir la section critique ci-dessous.\n\n' + t.substring(critIdx);
        fixes.push({ id: d275.id, translation_explanation: t, v: 275 });
      }
    }
  }

  // V278 (verse_id 285) - minimal JUSTIFICATION
  const { data: d278 } = await supabase.from('verse_analyses')
    .select('id, translation_explanation').eq('verse_id', 285).single();
  if (d278) {
    let t = d278.translation_explanation;
    const critIdx = t.indexOf('§CRITIQUE§');
    const justIdx = t.indexOf('§JUSTIFICATION§');
    if (justIdx >= 0 && critIdx > justIdx) {
      const justContent = t.substring(justIdx + 16, critIdx).trim();
      if (justContent.length < 100 && /condition mise sur la foi/.test(justContent)) {
        t = t.substring(0, justIdx + 16) + '\nVoir la section critique ci-dessous.\n\n' + t.substring(critIdx);
        fixes.push({ id: d278.id, translation_explanation: t, v: 278 });
      }
    }
  }

  // V282 (verse_id 289) - minimal JUSTIFICATION
  const { data: d282 } = await supabase.from('verse_analyses')
    .select('id, translation_explanation').eq('verse_id', 289).single();
  if (d282) {
    let t = d282.translation_explanation;
    const critIdx = t.indexOf('§CRITIQUE§');
    const justIdx = t.indexOf('§JUSTIFICATION§');
    if (justIdx >= 0 && critIdx > justIdx) {
      const justContent = t.substring(justIdx + 16, critIdx).trim();
      if (justContent.length < 80 && /enseigne/.test(justContent)) {
        t = t.substring(0, justIdx + 16) + '\nVoir la section critique ci-dessous.\n\n' + t.substring(critIdx);
        fixes.push({ id: d282.id, translation_explanation: t, v: 282 });
      }
    }
  }

  console.log('Targeted fixes: ' + fixes.length);
  for (const f of fixes) {
    console.log('  V' + f.v);
    const { error } = await supabase.from('verse_analyses')
      .update({ translation_explanation: f.translation_explanation }).eq('id', f.id);
    if (error) console.error('Error V' + f.v + ': ' + error.message);
  }

  // Also do a global pass to clean remaining orphaned fragments
  console.log('\n=== Global cleanup of remaining fragments ===');
  const { data: allRows } = await supabase.from('verse_analyses')
    .select('id, verse_id, translation_explanation')
    .gte('verse_id', 8).lte('verse_id', 293).order('verse_id');

  let globalUpdates = 0;
  for (const row of allRows) {
    let t = row.translation_explanation;
    if (!t) continue;
    let changed = false;

    // Remove "pris en main." orphaned fragments
    let cleaned = t.replace(/^\s*pris en main\.\s*$/gm, '');
    // Remove "(= text)" orphaned
    cleaned = cleaned.replace(/\(=\s*[^)]*\)\.\s*/g, '');
    // Remove "dhw = pronom relatif + ..." type entries
    cleaned = cleaned.replace(/\bdhw\s*=\s*[^.\n]*\.?\s*/g, '');
    // Remove "mym + + Action/Oeuvre." type
    cleaned = cleaned.replace(/\bmym\s*\+\s*\+\s*[^.\n]*\.?\s*/g, '');
    // Remove "Taktumū/Ā" type fragments
    cleaned = cleaned.replace(/[A-Z][A-Za-zāīūẓḍṣṭḥḫʾʿ'']+\/[A-ZÉÈÊËÀÂÙÛÎÏÔÖÇ][A-Za-zāīūẓḍṣṭḥḫʾʿ'']*/g, '');
    // Remove orphaned quoted fragments
    cleaned = cleaned.replace(/^\s*"[^"]{3,30}"\s*:\s*$/gm, '');
    // Clean up
    cleaned = cleaned.replace(/\n{3,}/g, '\n\n');
    cleaned = cleaned.replace(/ {2,}/g, ' ');
    cleaned = cleaned.trim();

    if (cleaned !== t.trim()) {
      globalUpdates++;
      await supabase.from('verse_analyses')
        .update({ translation_explanation: cleaned }).eq('id', row.id);
    }
  }
  console.log('Global updates: ' + globalUpdates);

  // Final verification
  console.log('\n=== Final state ===');
  for (const vid of [282, 285, 288, 289, 290, 292]) {
    const { data } = await supabase.from('verse_analyses')
      .select('translation_explanation').eq('verse_id', vid).single();
    if (!data) continue;
    console.log('\nV' + (vid-7) + ':');
    console.log(data.translation_explanation.substring(0, 400));
  }
}

main().catch(console.error);
