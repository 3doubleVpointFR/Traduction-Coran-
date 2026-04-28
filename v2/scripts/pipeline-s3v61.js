// Pipeline S3:V61 — verse_id=354
// Verset de la mubāhala (imprécation mutuelle) - LONG verset
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

const { SEGMENTS_STEP1 } = require('./s3v61-data-segments.js');
const { VWA_PART1 } = require('./s3v61-data-vwa-part1.js');
const { VWA_PART2 } = require('./s3v61-data-vwa-part2.js');
const { VWA_PART3 } = require('./s3v61-data-vwa-part3.js');
const { FULL_TRANSLATION_HAMIDULLAH, TRANSLATION_ARAB, TRANSLATION_MEDITATIONAL, TRANSLATION_EXPLANATION, SEGMENTS } = require('./s3v61-data-translation.js');

const VERSE_ID = 354;
const SURAH = 3, VERSE = 61;

const VWA_ROWS = [...VWA_PART1, ...VWA_PART2, ...VWA_PART3];

async function run() {
  console.log('╔═══════════════════════════════════════════════════════╗');
  console.log('║   PIPELINE MAISON — S3:V61 (verse_id=' + VERSE_ID + ')             ║');
  console.log('╚═══════════════════════════════════════════════════════╝');

  // ÉTAPE 2 — Vérification racines
  console.log('\n═══ ÉTAPE 2 — Vérification richesse racines ═══');
  const rootsCheck = [
    { aid: 637,  key: 'hjj',  name: 'ḥājja' },
    { aid: 926,  key: 'baed', name: 'baʿd' },
    { aid: 629,  key: 'jyy',  name: 'jāʾa' },
    { aid: 254,  key: 'elm',  name: 'ʿilm' },
    { aid: 307,  key: 'qwl',  name: 'qāla' },
    { aid: 371,  key: 'elw',  name: 'ʿalā' },
    { aid: 381,  key: 'dew',  name: 'daʿā' },
    { aid: 386,  key: 'bny',  name: 'ibn' },
    { aid: 2198, key: 'nsw',  name: 'nisāʾ' },
    { aid: 298,  key: 'nfs',  name: 'nafs' },
    { aid: 1287, key: 'bhl',  name: 'bahala' },
    { aid: 359,  key: 'jel',  name: 'jaʿala' },
    { aid: 680,  key: 'len',  name: 'laʿana' },
    { aid: 250,  key: 'alh',  name: 'Allāh' },
    { aid: 854,  key: 'kdhb', name: 'kadhaba' }
  ];
  for (const r of rootsCheck) {
    const { data: m } = await db.from('word_meanings').select('id').eq('analysis_id', r.aid);
    const n = m ? m.length : 0;
    console.log('  aid=' + r.aid + ' (' + r.key + '/' + r.name + ') : ' + n + ' sens ' + (n >= 5 ? '[OK]' : '[<5 ATTN]'));
  }

  // ÉTAPES 1 & 4 — verse_analyses
  console.log('\n═══ ÉTAPES 1 & 4 — verse_analyses ═══');
  const { data: existingVa } = await db.from('verse_analyses').select('id').eq('verse_id', VERSE_ID);
  if (existingVa && existingVa.length) {
    const vaId = existingVa[0].id;
    console.log('Row existante va_id=' + vaId + ' → UPDATE');
    const { error: vaErr } = await db.from('verse_analyses').update({
      segments_step1: SEGMENTS_STEP1,
      full_translation: FULL_TRANSLATION_HAMIDULLAH,
      translation_arab: TRANSLATION_ARAB,
      translation_meditational: TRANSLATION_MEDITATIONAL,
      translation_explanation: TRANSLATION_EXPLANATION,
      segments: SEGMENTS,
      validated: true,
      model_used: 'claude-opus-4-pipeline-maison',
      prompt_version: 'v3'
    }).eq('id', vaId);
    if (vaErr) throw vaErr;
    console.log('  UPDATE OK');
  } else {
    console.log('Row absente → INSERT');
    const { data: inserted, error: vaErr } = await db.from('verse_analyses').insert({
      verse_id: VERSE_ID,
      segments_step1: SEGMENTS_STEP1,
      full_translation: FULL_TRANSLATION_HAMIDULLAH,
      translation_arab: TRANSLATION_ARAB,
      translation_meditational: TRANSLATION_MEDITATIONAL,
      translation_explanation: TRANSLATION_EXPLANATION,
      segments: SEGMENTS,
      validated: true,
      model_used: 'claude-opus-4-pipeline-maison',
      prompt_version: 'v3'
    }).select('id').single();
    if (vaErr) throw vaErr;
    console.log('  INSERT va_id=' + inserted.id);
  }

  // ÉTAPE 3 — VWA
  console.log('\n═══ ÉTAPE 3 — VWA ═══');
  const { data: existingVwa } = await db.from('verse_word_analyses').select('id').eq('verse_id', VERSE_ID);
  if (existingVwa && existingVwa.length) {
    await db.from('verse_word_analyses').delete().eq('verse_id', VERSE_ID);
    console.log('Clean: ' + existingVwa.length + ' VWA supprimés.');
  }
  const vwaRows = VWA_ROWS.map(v => ({
    verse_id: VERSE_ID,
    word_key: v.word_key,
    position: v.position,
    sense_chosen: v.sense_chosen,
    reason: v.reason,
    analysis_axes: v.analysis_axes
  }));
  const { error: vwaErr } = await db.from('verse_word_analyses').insert(vwaRows);
  if (vwaErr) throw vwaErr;
  console.log('  Insérés : ' + vwaRows.length + ' VWA');

  console.log('\n╔═══════════════════════════════════════════════════════╗');
  console.log('║              PIPELINE S3:V61 TERMINÉE                 ║');
  console.log('╚═══════════════════════════════════════════════════════╝');
}

run().catch(e => { console.error('ERREUR PIPELINE :', e); process.exit(1); });
