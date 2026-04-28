const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  'https://gwtgftosscjupxxsubev.supabase.co',
  process.env.SUPABASE_SERVICE_KEY
);

const REQUIRED_AXES = ['morpho_syntaxique', 'semantique_contextuelle', 'rhethorique', 'intertextuelle', 'theologique'];

async function main() {
  // 1. verse_analyses for verse_id=263
  console.log('=== 1. VERSE_ANALYSES for verse_id=263 (V256) ===\n');
  const { data: va, error: vaErr } = await supabase
    .from('verse_analyses')
    .select('*')
    .eq('verse_id', 263);
  if (vaErr) { console.error('Error:', vaErr); return; }
  if (!va || va.length === 0) {
    console.log('NO verse_analyses found for verse_id=263!');
  } else {
    for (const row of va) {
      const segCount = Array.isArray(row.segments) ? row.segments.length : (row.segments ? 'non-array' : 'null');
      console.log(`id: ${row.id}`);
      console.log(`verse_id: ${row.verse_id}`);
      console.log(`full_translation: ${row.full_translation ? row.full_translation.substring(0, 200) : 'NULL/EMPTY'}`);
      console.log(`explanation: ${row.explanation ? row.explanation.substring(0, 200) : 'NULL/EMPTY'}`);
      console.log(`segments count: ${segCount}`);
      console.log(`critique: ${row.critique ? row.critique.substring(0, 200) : 'NULL/EMPTY'}`);
      console.log(`translation_approach: ${row.translation_approach ? row.translation_approach.substring(0, 200) : 'NULL/EMPTY'}`);
      console.log(`word_choices_justification: ${row.word_choices_justification ? row.word_choices_justification.substring(0, 200) : 'NULL/EMPTY'}`);
      // Print all other keys
      const shown = ['id','verse_id','full_translation','explanation','segments','critique','translation_approach','word_choices_justification'];
      for (const k of Object.keys(row)) {
        if (!shown.includes(k)) {
          const v = row[k];
          const display = (v === null || v === undefined) ? 'NULL' : (typeof v === 'string' ? v.substring(0, 150) : JSON.stringify(v).substring(0, 150));
          console.log(`${k}: ${display}`);
        }
      }
    }
  }

  // 2. verse_word_analyses for verse_id=263
  console.log('\n=== 2. VERSE_WORD_ANALYSES for verse_id=263 ===\n');
  const { data: vwa, error: vwaErr } = await supabase
    .from('verse_word_analyses')
    .select('*')
    .eq('verse_id', 263)
    .order('position', { ascending: true });
  if (vwaErr) { console.error('Error:', vwaErr); return; }
  console.log(`Total VWA count: ${vwa ? vwa.length : 0}\n`);

  let missingAxesCount = 0;
  let nullAxesCount = 0;
  if (vwa) {
    for (const w of vwa) {
      console.log(`--- VWA id=${w.id} | word_key=${w.word_key} | position=${w.position} ---`);
      console.log(`  sense_chosen: ${w.sense_chosen || 'NULL/EMPTY'}`);

      const axes = w.analysis_axes;
      if (!axes || (typeof axes === 'object' && Object.keys(axes).length === 0)) {
        console.log(`  analysis_axes: NULL/EMPTY`);
        nullAxesCount++;
        missingAxesCount++;
      } else {
        const present = REQUIRED_AXES.filter(a => axes[a] !== undefined && axes[a] !== null);
        const missing = REQUIRED_AXES.filter(a => axes[a] === undefined || axes[a] === null);
        console.log(`  analysis_axes present: [${present.join(', ')}]`);
        if (missing.length > 0) {
          console.log(`  analysis_axes MISSING: [${missing.join(', ')}]`);
          missingAxesCount++;
        }
        console.log(`  analysis_axes JSON:`);
        console.log(JSON.stringify(axes, null, 2).split('\n').map(l => '    ' + l).join('\n'));
      }
      console.log();
    }
  }

  // 3. Summary for V256
  console.log('=== 3. VWA AXES SUMMARY for verse_id=263 ===');
  console.log(`Total VWA: ${vwa ? vwa.length : 0}`);
  console.log(`VWA with null/empty analysis_axes: ${nullAxesCount}`);
  console.log(`VWA missing any of 5 standard axes: ${missingAxesCount}`);

  // 4. VA field check recap
  console.log('\n=== 4. VA FIELD CHECK for verse_id=263 ===');
  if (va && va.length > 0) {
    const r = va[0];
    for (const field of ['explanation', 'critique', 'translation_approach', 'word_choices_justification']) {
      const val = r[field];
      const status = (!val || (typeof val === 'string' && val.trim() === '')) ? 'MISSING/EMPTY' : 'POPULATED';
      console.log(`  ${field}: ${status}`);
    }
  }

  // 5. Broader scan: sourate 2 (verse_id 8 to 293)
  console.log('\n=== 5. BROADER SCAN: verse_analyses for sourate 2 (verse_id 8-293) ===\n');
  const { data: allVa, error: allVaErr } = await supabase
    .from('verse_analyses')
    .select('id, verse_id, explanation, critique, translation_approach, word_choices_justification')
    .gte('verse_id', 8)
    .lte('verse_id', 293);
  if (allVaErr) { console.error('Error:', allVaErr); return; }

  const total = allVa ? allVa.length : 0;
  let nullExplanation = 0, nullCritique = 0, nullApproach = 0, nullJustification = 0;
  const missingExplanationIds = [];
  const missingCritiqueIds = [];

  if (allVa) {
    for (const r of allVa) {
      if (!r.explanation || r.explanation.trim() === '') { nullExplanation++; missingExplanationIds.push(r.verse_id); }
      if (!r.critique || r.critique.trim() === '') { nullCritique++; missingCritiqueIds.push(r.verse_id); }
      if (!r.translation_approach || r.translation_approach.trim() === '') { nullApproach++; }
      if (!r.word_choices_justification || r.word_choices_justification.trim() === '') { nullJustification++; }
    }
  }

  console.log(`Total verse_analyses in sourate 2: ${total}`);
  console.log(`NULL/empty explanation: ${nullExplanation}`);
  if (missingExplanationIds.length > 0 && missingExplanationIds.length <= 30) {
    console.log(`  verse_ids: [${missingExplanationIds.join(', ')}]`);
  }
  console.log(`NULL/empty critique: ${nullCritique}`);
  if (missingCritiqueIds.length > 0 && missingCritiqueIds.length <= 30) {
    console.log(`  verse_ids: [${missingCritiqueIds.join(', ')}]`);
  }
  console.log(`NULL/empty translation_approach: ${nullApproach}`);
  console.log(`NULL/empty word_choices_justification: ${nullJustification}`);
}

main().catch(e => console.error(e));
