const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  'https://gwtgftosscjupxxsubev.supabase.co',
  process.env.SUPABASE_SERVICE_KEY
);

async function main() {
  // 1. Query verse_analyses for verse_id=263
  console.log('=== 1. VERSE ANALYSIS (verse_id=263, V256) ===');
  const { data: va, error: vaErr } = await supabase
    .from('verse_analyses')
    .select('id, verse_id, segments, full_translation')
    .eq('verse_id', 263)
    .single();
  if (vaErr) { console.error('verse_analyses error:', vaErr); return; }

  console.log('full_translation:', va.full_translation);
  console.log('segments count:', va.segments?.length);

  // 2. Query word_analyses for tghy root
  console.log('\n=== 2. WORD ANALYSIS for root tghy ===');
  const { data: wa, error: waErr } = await supabase
    .from('word_analyses')
    .select('id, word_key, root_ar, root_phon, root_meaning, retenu')
    .eq('word_key', 'tghy')
    .single();

  if (waErr) {
    console.log('No word_analyses for tghy, trying tgwt or Tgw...');
    // Try other possible keys
    const { data: waAll } = await supabase
      .from('word_analyses')
      .select('id, word_key, root_ar, root_phon, root_meaning, retenu')
      .or('word_key.ilike.%tg%,word_key.ilike.%Tg%');
    console.log('Found analyses with tg:', waAll);

    if (waAll && waAll.length > 0) {
      for (const w of waAll) {
        const { data: meanings } = await supabase
          .from('word_meanings')
          .select('sense, sense_ar, description, status, occ_count')
          .eq('analysis_id', w.id);
        console.log(`\nMeanings for ${w.word_key} (id=${w.id}):`, meanings);
      }
    }
  } else {
    console.log('word_analyses:', wa);
    const { data: meanings } = await supabase
      .from('word_meanings')
      .select('sense, sense_ar, description, status, occ_count')
      .eq('analysis_id', wa.id);
    console.log('Meanings:', meanings);
  }

  // 3. Find the taghut segment
  console.log('\n=== 3. TAGHUT SEGMENT ===');
  const segments = va.segments;
  let taghutIdx = -1;
  for (let i = 0; i < segments.length; i++) {
    const seg = segments[i];
    const fr = (seg.fr || '').toLowerCase();
    const ar = seg.ar || '';
    const wk = seg.word_key || '';
    if (fr.includes('taghut') || fr.includes('tâghût') ||
        ar.includes('طَّـٰغُوت') || ar.includes('ٱلطَّـٰغُوتِ') || ar.includes('طاغوت') ||
        wk.includes('tg') || wk.includes('Tg')) {
      taghutIdx = i;
      console.log(`Found taghut at segment index ${i}:`);
      console.log(JSON.stringify(seg, null, 2));
    }
  }

  if (taghutIdx === -1) {
    // Print all segments to find it manually
    console.log('Could not auto-detect taghut segment. All segments:');
    for (let i = 0; i < segments.length; i++) {
      console.log(`  [${i}] fr="${segments[i].fr}" ar="${segments[i].ar}" word_key="${segments[i].word_key || 'N/A'}"`);
    }
    return;
  }

  // 4. Determine the best French translation
  // In V256 context (la ilkraha fi din), taghut = false deities/idols
  const newFr = 'les fausses divinités';

  console.log('\n=== 4. UPDATING SEGMENT ===');
  console.log('BEFORE fr:', segments[taghutIdx].fr);

  // Update segment
  segments[taghutIdx].fr = newFr;

  // 5. Check and update full_translation
  let newTranslation = va.full_translation;
  const oldTranslation = va.full_translation;

  if (newTranslation.includes('le taghut') || newTranslation.includes('le Taghut') ||
      newTranslation.includes('le tâghût') || newTranslation.includes('au taghut') ||
      newTranslation.includes('du taghut')) {
    // Replace various forms
    newTranslation = newTranslation
      .replace(/\bau taghut\b/gi, 'aux fausses divinités')
      .replace(/\bdu taghut\b/gi, 'des fausses divinités')
      .replace(/\ble taghut\b/gi, 'les fausses divinités')
      .replace(/\bla taghut\b/gi, 'les fausses divinités')
      .replace(/\btâghût\b/gi, 'fausses divinités');
    console.log('\nfull_translation BEFORE:', oldTranslation);
    console.log('full_translation AFTER:', newTranslation);
  } else {
    console.log('\nfull_translation does not contain "taghut":', oldTranslation);
  }

  // 6. Write updates
  const { error: updateErr } = await supabase
    .from('verse_analyses')
    .update({ segments, full_translation: newTranslation })
    .eq('verse_id', 263);

  if (updateErr) {
    console.error('Update error:', updateErr);
    return;
  }

  console.log('\nAFTER fr:', segments[taghutIdx].fr);
  console.log('\n=== UPDATE SUCCESSFUL ===');
}

main().catch(console.error);
