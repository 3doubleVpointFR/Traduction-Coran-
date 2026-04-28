/**
 * PURGE — Vide toutes les données de versets, conserve uniquement les données de racines.
 *
 * Tables vidées :
 *   - verse_word_analyses : DELETE ALL
 *   - verse_analyses      : UPDATE → translation_arab=null, full_translation=null,
 *                                    translation_explanation=null, segments=null
 *
 * Tables CONSERVÉES :
 *   - word_analyses, word_meanings, word_daily, words, verses, surahs, roots
 */

const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

async function run() {
  console.log('=== AUDIT AVANT PURGE ===');
  const vwaCount = await db.from('verse_word_analyses').select('id', { count: 'exact', head: true });
  console.log(`verse_word_analyses : ${vwaCount.count} lignes`);

  const vaWithContent = await db.from('verse_analyses')
    .select('verse_id', { count: 'exact', head: true })
    .or('translation_arab.not.is.null,full_translation.not.is.null,translation_explanation.not.is.null,segments.not.is.null');
  console.log(`verse_analyses avec contenu : ${vaWithContent.count} lignes`);

  console.log('\n=== PURGE EN COURS ===');

  // 1. Supprimer toutes les VWA
  const delVwa = await db.from('verse_word_analyses').delete().gte('id', 0);
  if (delVwa.error) throw delVwa.error;
  console.log('✅ verse_word_analyses : toutes les lignes supprimées');

  // 2. Vider le contenu de verse_analyses (par lots pour éviter timeout)
  const allVa = [];
  let offset = 0;
  while (true) {
    const { data } = await db.from('verse_analyses').select('verse_id').range(offset, offset + 999);
    if (!data || data.length === 0) break;
    allVa.push(...data);
    if (data.length < 1000) break;
    offset += 1000;
  }
  console.log(`Versets à nettoyer : ${allVa.length}`);

  let cleared = 0;
  const batchSize = 100;
  for (let i = 0; i < allVa.length; i += batchSize) {
    const batch = allVa.slice(i, i + batchSize);
    const ids = batch.map(v => v.verse_id);
    const upd = await db.from('verse_analyses').update({
      translation_arab: null,
      full_translation: null,
      translation_explanation: null,
      segments: null
    }).in('verse_id', ids);
    if (upd.error) throw upd.error;
    cleared += batch.length;
    if (i % 500 === 0) console.log(`  Nettoyé : ${cleared}/${allVa.length}`);
  }
  console.log(`✅ verse_analyses : ${cleared} lignes vidées`);

  console.log('\n=== AUDIT APRÈS PURGE ===');
  const vwaAfter = await db.from('verse_word_analyses').select('id', { count: 'exact', head: true });
  console.log(`verse_word_analyses : ${vwaAfter.count} lignes`);

  const vaResidual = await db.from('verse_analyses')
    .select('verse_id', { count: 'exact', head: true })
    .or('translation_arab.not.is.null,full_translation.not.is.null,translation_explanation.not.is.null,segments.not.is.null');
  console.log(`verse_analyses avec contenu : ${vaResidual.count} lignes`);

  // Confirmer racines intactes
  const wa = await db.from('word_analyses').select('id', { count: 'exact', head: true });
  const wm = await db.from('word_meanings').select('id', { count: 'exact', head: true });
  const wd = await db.from('word_daily').select('id', { count: 'exact', head: true });
  console.log(`\n=== RACINES (CONSERVÉES) ===`);
  console.log(`word_analyses : ${wa.count}`);
  console.log(`word_meanings : ${wm.count}`);
  console.log(`word_daily    : ${wd.count}`);

  console.log('\n✅ PURGE TERMINÉE — données de racines conservées');
}

run().catch(console.error);
