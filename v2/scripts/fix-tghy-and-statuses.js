const { createClient } = require('@supabase/supabase-js');
const supabase = createClient(
  'https://gwtgftosscjupxxsubev.supabase.co',
  process.env.SUPABASE_SERVICE_KEY
);

async function task1_fixTghyVWA() {
  console.log('\n========== TASK 1: Fix tghy VWA for V256 (verse_id=263) ==========');

  // Check if VWA already exists for tghy at verse_id=263
  const { data: existing } = await supabase
    .from('verse_word_analyses')
    .select('id, word_key, position, sense_chosen')
    .eq('verse_id', 263)
    .eq('word_key', 'tghy');

  if (existing && existing.length > 0) {
    console.log('VWA for tghy at verse_id=263 already exists:', existing[0]);
    return;
  }
  console.log('No VWA for tghy at verse_id=263. Creating one...');

  // Get segments from verse_analyses to confirm tghy position
  const { data: va } = await supabase
    .from('verse_analyses')
    .select('segments')
    .eq('verse_id', 263)
    .single();

  if (!va) {
    console.log('ERROR: No verse_analyses for verse_id=263');
    return;
  }
  const tghySeg = va.segments.find(s => s.root_key === 'tghy' || s.word_key === 'tghy');
  console.log('tghy segment in V256:', tghySeg ? `position=${tghySeg.position}` : 'NOT FOUND in segments');
  const tghyPosition = tghySeg ? tghySeg.position : 12; // fallback from pipeline script

  // Get analysis_id for tghy from word_analyses
  const { data: wa } = await supabase
    .from('word_analyses')
    .select('id, word_key, root_ar, retenu')
    .eq('word_key', 'tghy')
    .single();

  if (!wa) {
    console.log('ERROR: No word_analyses entry for tghy');
    return;
  }
  console.log('word_analyses for tghy:', { id: wa.id, retenu: wa.retenu });

  // Get word_meanings for tghy to find sense text
  const { data: meanings } = await supabase
    .from('word_meanings')
    .select('id, sense, status, display_order')
    .eq('analysis_id', wa.id)
    .order('display_order');

  console.log('word_meanings for tghy:');
  for (const m of meanings || []) {
    console.log(`  id=${m.id} sense="${m.sense}" status=${m.status} order=${m.display_order}`);
  }

  // Find a sense matching "transgresser" or similar
  const transgresserSense = (meanings || []).find(m =>
    m.sense && m.sense.toLowerCase().includes('transgress')
  );
  const senseChosen = transgresserSense
    ? transgresserSense.sense
    : (meanings && meanings.length > 0 ? meanings[0].sense : 'transgresser les limites');
  console.log('sense_chosen:', senseChosen);

  // Get existing VWA for tghy at V257 (verse_id=264) as template
  const { data: templateVWA } = await supabase
    .from('verse_word_analyses')
    .select('*')
    .eq('word_key', 'tghy')
    .eq('verse_id', 264)
    .single();

  if (!templateVWA) {
    console.log('WARNING: No template VWA for tghy at verse_id=264. Will build from scratch.');
  } else {
    console.log('Template VWA from V257:', { id: templateVWA.id, position: templateVWA.position, sense_chosen: templateVWA.sense_chosen });
  }

  // Build the new VWA entry
  let analysis_axes;
  if (templateVWA && templateVWA.analysis_axes) {
    // Copy axes from template, adjust sense_chosen
    analysis_axes = JSON.parse(JSON.stringify(templateVWA.analysis_axes));
    // Keep the same concept structure but use the sense for this verse
  } else {
    // Build minimal axes
    const conceptName = 'Transgression/Depassement';
    analysis_axes = {
      sense_chosen: senseChosen,
      concept_chosen: conceptName,
      concepts: {
        [conceptName]: {
          status: 'retenu',
          senses: [senseChosen],
          proof_ctx: 'tghy = transgresser les limites, depasser les bornes',
          axe1_verset: 'Le taghut dans V256 designe ce qui transgresse les limites divines — idoles, tyrans, faux dieux.',
          axe2_voisins: 'Le contexte du rejet du taghut et de la croyance en Dieu confirme le sens de transgression des limites.',
          axe3_sourate: 'La racine t-gh-y apparait plusieurs fois dans Al-Baqarah.',
          axe4_coherence: 'Le Coran utilise taghut systematiquement pour designer ce qui depasse les limites de Dieu.',
          axe5_frequence: 'Le taghut est un concept central du Coran, designant tout ce qui est adore en dehors de Dieu.'
        }
      }
    };
  }

  // Ensure sense_chosen matches
  analysis_axes.sense_chosen = senseChosen;

  const newVWA = {
    verse_id: 263,
    word_key: 'tghy',
    position: tghyPosition,
    analysis_id: wa.id,
    sense_chosen: senseChosen,
    analysis_axes: analysis_axes,
  };

  const { data: inserted, error } = await supabase
    .from('verse_word_analyses')
    .insert(newVWA)
    .select();

  if (error) {
    console.log('ERROR inserting VWA:', error.message);
  } else {
    console.log('SUCCESS: Inserted VWA for tghy at V256:', inserted[0]?.id);
  }
}

async function task2_fixTghyMeaningsStatus() {
  console.log('\n========== TASK 2: Fix word_meanings status=null for tghy ==========');

  const { data: wa } = await supabase
    .from('word_analyses')
    .select('id')
    .eq('word_key', 'tghy')
    .single();

  if (!wa) {
    console.log('ERROR: No word_analyses for tghy');
    return;
  }

  const { data: meanings } = await supabase
    .from('word_meanings')
    .select('id, sense, status, display_order')
    .eq('analysis_id', wa.id)
    .order('display_order');

  const nullMeanings = (meanings || []).filter(m => m.status === null);
  console.log(`Total meanings for tghy: ${meanings?.length}, with null status: ${nullMeanings.length}`);

  if (nullMeanings.length === 0) {
    console.log('No null statuses for tghy. Nothing to fix.');
    return;
  }

  // Check if some already have status set
  const withStatus = (meanings || []).filter(m => m.status !== null);
  if (withStatus.length > 0) {
    console.log('Some meanings already have status. Setting null ones to "exclu".');
    for (const m of nullMeanings) {
      const { error } = await supabase
        .from('word_meanings')
        .update({ status: 'exclu' })
        .eq('id', m.id);
      if (error) console.log(`  ERROR updating id=${m.id}: ${error.message}`);
      else console.log(`  Updated id=${m.id} "${m.sense}" -> status=exclu`);
    }
  } else {
    // All null: set first concept group to retenu, rest to exclu
    console.log('All meanings have null status. Setting first to "retenu", rest to "exclu".');
    // Group by concept (display_order groups might indicate concepts)
    // If we can't distinguish concepts, set the first one to retenu
    const firstId = nullMeanings[0].id;
    for (const m of nullMeanings) {
      const newStatus = m.id === firstId ? 'retenu' : 'exclu';
      const { error } = await supabase
        .from('word_meanings')
        .update({ status: newStatus })
        .eq('id', m.id);
      if (error) console.log(`  ERROR updating id=${m.id}: ${error.message}`);
      else console.log(`  Updated id=${m.id} "${m.sense}" -> status=${newStatus}`);
    }
  }
}

async function task3_broadScan() {
  console.log('\n========== TASK 3: Broad scan — word_meanings with status=null ==========');

  // Count total null status
  const { count: totalNull } = await supabase
    .from('word_meanings')
    .select('id', { count: 'exact', head: true })
    .is('status', null);

  console.log(`Total word_meanings with status IS NULL: ${totalNull}`);

  if (totalNull === 0) {
    console.log('No null statuses found. Nothing to do.');
    return { totalNull: 0, affectedRoots: 0, details: [] };
  }

  // Get distinct analysis_ids affected
  const { data: nullRows } = await supabase
    .from('word_meanings')
    .select('id, analysis_id, sense, status')
    .is('status', null);

  const affectedAnalysisIds = [...new Set((nullRows || []).map(r => r.analysis_id))];
  console.log(`Distinct analysis_ids (roots) affected: ${affectedAnalysisIds.length}`);

  // For each affected analysis_id, check if ALL or SOME senses are null
  const details = [];
  for (const aid of affectedAnalysisIds) {
    const { data: allMeanings } = await supabase
      .from('word_meanings')
      .select('id, sense, status')
      .eq('analysis_id', aid);

    const total = allMeanings.length;
    const nullCount = allMeanings.filter(m => m.status === null).length;
    const hasRetenu = allMeanings.some(m => m.status === 'retenu');

    // Get word_key
    const { data: waRow } = await supabase
      .from('word_analyses')
      .select('word_key')
      .eq('id', aid)
      .single();

    const wk = waRow?.word_key || '???';
    const category = nullCount === total ? 'ALL_NULL' : 'SOME_NULL';
    details.push({ analysis_id: aid, word_key: wk, total, nullCount, hasRetenu, category });
    console.log(`  analysis_id=${aid} word_key=${wk}: ${nullCount}/${total} null, hasRetenu=${hasRetenu} => ${category}`);
  }

  return { totalNull, affectedRoots: affectedAnalysisIds.length, details };
}

async function task4_fixAllNullStatuses(details) {
  console.log('\n========== TASK 4: Fix ALL word_meanings with null status ==========');

  if (!details || details.length === 0) {
    console.log('No affected roots. Nothing to fix.');
    return;
  }

  for (const d of details) {
    console.log(`\nProcessing analysis_id=${d.analysis_id} word_key=${d.word_key} (${d.category})...`);

    // Get all meanings for this analysis_id
    const { data: allMeanings } = await supabase
      .from('word_meanings')
      .select('id, sense, status, display_order')
      .eq('analysis_id', d.analysis_id)
      .order('display_order');

    if (d.category === 'SOME_NULL') {
      // Some already have status, set null ones to 'exclu'
      const nullOnes = allMeanings.filter(m => m.status === null);
      for (const m of nullOnes) {
        const { error } = await supabase
          .from('word_meanings')
          .update({ status: 'exclu' })
          .eq('id', m.id);
        if (error) console.log(`  ERROR id=${m.id}: ${error.message}`);
        else console.log(`  id=${m.id} "${m.sense.substring(0, 50)}..." -> exclu`);
      }
    } else {
      // ALL_NULL: set first sense to 'retenu', rest to 'exclu'
      for (let i = 0; i < allMeanings.length; i++) {
        const m = allMeanings[i];
        if (m.status !== null) continue; // skip already set
        const newStatus = i === 0 ? 'retenu' : 'exclu';
        const { error } = await supabase
          .from('word_meanings')
          .update({ status: newStatus })
          .eq('id', m.id);
        if (error) console.log(`  ERROR id=${m.id}: ${error.message}`);
        else console.log(`  id=${m.id} "${m.sense.substring(0, 50)}..." -> ${newStatus}`);
      }
    }
  }
}

async function main() {
  console.log('=== Starting fix-tghy-and-statuses ===');
  console.log('Date:', new Date().toISOString());

  await task1_fixTghyVWA();
  await task2_fixTghyMeaningsStatus();
  const scanResult = await task3_broadScan();
  await task4_fixAllNullStatuses(scanResult.details || []);

  console.log('\n=== ALL TASKS COMPLETE ===');
}

main().catch(err => {
  console.error('FATAL ERROR:', err);
  process.exit(1);
});
