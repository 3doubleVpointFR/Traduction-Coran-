// Scan verset 3:64 — texte arabe + segments QAC + racines présentes en BDD
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

const VERSE_ID = 357;

async function run() {
  console.log('═══ S3:V64 — CONTEXTE ═══\n');
  // 1) verse row
  const { data: vrow } = await db.from('verses').select('*').eq('id', VERSE_ID).single();
  console.log('VERSET (id=' + VERSE_ID + ') :');
  console.log('  surah=' + vrow.surah + ' verse=' + vrow.verse);
  console.log('  text_arab =', vrow.text_arab || vrow.text);
  console.log('  text_translit =', vrow.text_translit);
  console.log('  text_fr =', vrow.text_fr);

  // 2) QAC tokens from qac_tokens if exist
  const { data: qac } = await db.from('qac_tokens').select('*').eq('surah', 3).eq('verse', 64).order('word_number', { ascending: true });
  console.log('\n── qac_tokens (' + (qac ? qac.length : 0) + ') ──');
  if (qac) {
    for (const t of qac) {
      console.log('  w=' + t.word_number + ' seg=' + t.segment_number + ' form=' + t.form + ' tag=' + t.tag + ' root=' + t.root + ' lemma=' + t.lemma + ' features=' + t.features);
    }
  }

  // 3) check va row
  const { data: va } = await db.from('verse_analyses').select('id,segments_step1,segments').eq('verse_id', VERSE_ID);
  console.log('\n── verse_analyses ──');
  console.log('  rows =', va ? va.length : 0);
  if (va && va.length) console.log('  segments_step1 =', va[0].segments_step1 ? 'yes' : 'no', ' segments =', va[0].segments ? 'yes' : 'no');

  // 4) VWA rows
  const { data: vwa } = await db.from('verse_word_analyses').select('id,word_key,position,sense_chosen').eq('verse_id', VERSE_ID);
  console.log('\n── VWA existantes (' + (vwa ? vwa.length : 0) + ') ──');
  if (vwa) for (const r of vwa) console.log('  ', r);
}
run().catch(e => { console.error('ERR', e); process.exit(1); });
