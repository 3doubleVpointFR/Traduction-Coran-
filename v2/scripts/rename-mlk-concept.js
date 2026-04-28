/**
 * Renomme "Ange/Messager" → "Ange/Créature céleste" pour la racine mlk,
 * afin de distinguer visuellement de rsl "Messager/Porteur".
 *
 * Met à jour :
 *  - word_meanings.concept (analysis_id de mlk)
 *  - verse_word_analyses.analysis_axes (concept_chosen + concepts dict) pour les VWA word_key=mlk
 */
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

const OLD = 'Ange/Messager';
const NEW = 'Ange/Créature céleste';

async function run() {
  // 1. récupérer analysis_id de mlk
  const { data: wa } = await db.from('word_analyses').select('id').eq('word_key', 'mlk').single();
  const aid = wa.id;
  console.log('analysis_id mlk =', aid);

  // 2. word_meanings : update concept
  const { data: rows, error: e1 } = await db.from('word_meanings')
    .update({ concept: NEW })
    .eq('analysis_id', aid)
    .eq('concept', OLD)
    .select('id');
  if (e1) throw e1;
  console.log(`✓ word_meanings : ${rows?.length || 0} lignes renommées`);

  // 3. VWA : update analysis_axes
  const { data: vwas } = await db.from('verse_word_analyses')
    .select('id, verse_id, position, analysis_axes')
    .eq('word_key', 'mlk');

  let updated = 0;
  for (const v of vwas) {
    const ax = v.analysis_axes;
    if (!ax) continue;
    let changed = false;
    if (ax.concept_chosen === OLD) { ax.concept_chosen = NEW; changed = true; }
    if (ax.concepts && ax.concepts[OLD]) {
      ax.concepts[NEW] = ax.concepts[OLD];
      delete ax.concepts[OLD];
      changed = true;
    }
    if (!changed) continue;
    const { error } = await db.from('verse_word_analyses').update({ analysis_axes: ax }).eq('id', v.id);
    if (error) { console.log('  ❌', v.id, error.message); continue; }
    updated++;
  }
  console.log(`✓ verse_word_analyses : ${updated} VWA renommées`);
}
run().catch(e => { console.error(e); process.exit(1); });
