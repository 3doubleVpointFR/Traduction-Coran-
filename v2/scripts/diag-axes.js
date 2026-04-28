const { createClient } = require('@supabase/supabase-js');

const db = createClient(
  'https://gwtgftosscjupxxsubev.supabase.co',
  process.env.SUPABASE_SERVICE_KEY
);

async function main() {
  // 1. Get word_analyses for word_key='tghy'
  console.log('=== 1. word_analyses for word_key=tghy ===');
  const { data: wa, error: waErr } = await db
    .from('word_analyses')
    .select('*')
    .eq('word_key', 'tghy');
  if (waErr) { console.error('Error:', waErr); return; }
  console.log('Found', wa.length, 'rows');
  for (const r of wa) {
    console.log(JSON.stringify(r, null, 2));
  }

  if (!wa.length) {
    console.log('No word_analyses found for tghy, trying a broader search...');
    const { data: sample } = await db.from('word_analyses').select('word_key, id').limit(5);
    console.log('Sample word_analyses:', sample);
    return;
  }

  const analysisId = wa[0].id;
  console.log('\nanalysis_id =', analysisId);

  // 2. Get ALL word_meanings for that analysis_id
  console.log('\n=== 2. word_meanings for analysis_id=' + analysisId + ' ===');
  const { data: wm, error: wmErr } = await db
    .from('word_meanings')
    .select('*')
    .eq('analysis_id', analysisId);
  if (wmErr) { console.error('Error:', wmErr); return; }
  console.log('Found', wm.length, 'word_meanings rows');
  for (const r of wm) {
    console.log(JSON.stringify(r, null, 2));
  }

  // 3. Broad scan across ALL word_meanings
  console.log('\n=== 3. Broad scan: axe1_verset and proof_ctx population ===');

  // Count total
  const { count: totalCount } = await db
    .from('word_meanings')
    .select('*', { count: 'exact', head: true });
  console.log('Total word_meanings rows:', totalCount);

  // Count where axe1_verset is not null and not empty
  const { count: axe1Populated } = await db
    .from('word_meanings')
    .select('*', { count: 'exact', head: true })
    .not('axe1_verset', 'is', null)
    .neq('axe1_verset', '');
  console.log('axe1_verset populated (not null, not empty):', axe1Populated);
  console.log('axe1_verset null or empty:', totalCount - axe1Populated);

  // Count where proof_ctx is not null and not empty
  const { count: proofPopulated } = await db
    .from('word_meanings')
    .select('*', { count: 'exact', head: true })
    .not('proof_ctx', 'is', null)
    .neq('proof_ctx', '');
  console.log('proof_ctx populated (not null, not empty):', proofPopulated);
  console.log('proof_ctx null or empty:', totalCount - proofPopulated);

  // Also check axe2-6
  for (const col of ['axe2_voisins', 'axe3_sourate', 'axe4_coherence', 'axe5_frequence', 'axe6_finalite']) {
    const { count: pop } = await db
      .from('word_meanings')
      .select('*', { count: 'exact', head: true })
      .not(col, 'is', null)
      .neq(col, '');
    console.log(`${col} populated: ${pop} / ${totalCount}`);
  }

  // 4. Pick 3 word_keys that DO have axes populated
  console.log('\n=== 4. Examples of word_meanings with axes populated ===');
  const { data: examples, error: exErr } = await db
    .from('word_meanings')
    .select('*, word_analyses!inner(word_key)')
    .not('axe1_verset', 'is', null)
    .neq('axe1_verset', '')
    .limit(3);
  if (exErr) {
    console.error('Join error, trying alternative approach:', exErr.message);
    // Fallback: get analysis_ids with populated axes, then look up word_keys
    const { data: axeRows } = await db
      .from('word_meanings')
      .select('analysis_id, axe1_verset, axe2_voisins, axe3_sourate, axe4_coherence, axe5_frequence, axe6_finalite, proof_ctx, sense_fr, sense_ar')
      .not('axe1_verset', 'is', null)
      .neq('axe1_verset', '')
      .limit(3);
    if (axeRows && axeRows.length) {
      for (const r of axeRows) {
        const { data: waRow } = await db.from('word_analyses').select('word_key').eq('id', r.analysis_id).single();
        console.log(`\nword_key: ${waRow?.word_key}, analysis_id: ${r.analysis_id}`);
        console.log(JSON.stringify(r, null, 2));
      }
    } else {
      console.log('No word_meanings with axe1_verset populated found!');
    }
  } else {
    for (const r of examples) {
      console.log(`\nword_key: ${r.word_analyses?.word_key}`);
      console.log(JSON.stringify(r, null, 2));
    }
  }
}

main().catch(console.error);
