/**
 * Standardise la traduction de mlk (al-malāʾikatu) :
 *   "messagers" → "anges"
 * Affecte V39 (vid=332), V42 (vid=335), V45 (vid=338).
 *
 * Met à jour :
 *   - verse_word_analyses.analysis_axes.sense_chosen
 *   - verse_analyses.segments[i] (fr, sense_retenu)
 *   - verse_analyses.translation_arab (texte courant)
 */
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

const TARGETS = [332, 335, 338];

async function run() {
  // 1. VWA : sense_chosen "messager" → "anges"
  const { data: vwas } = await db.from('verse_word_analyses')
    .select('id, verse_id, analysis_axes')
    .eq('word_key', 'mlk')
    .in('verse_id', TARGETS);
  for (const v of vwas) {
    const ax = v.analysis_axes;
    if (ax.sense_chosen === 'messager') {
      ax.sense_chosen = 'anges';
      const c = ax.concepts?.['Ange/Créature céleste'];
      if (c && c.proof_ctx) {
        c.proof_ctx = c.proof_ctx.replace(/messagers? de Dieu/g, 'envoyés célestes (anges)')
          .replace(/messagers? que le maître envoie/g, 'créatures que le maître envoie');
      }
      await db.from('verse_word_analyses').update({ analysis_axes: ax }).eq('id', v.id);
      console.log(`✓ VWA vid=${v.verse_id} → sense_chosen "anges"`);
    }
  }

  // 2. verse_analyses : segments + translation_arab
  const { data: vas } = await db.from('verse_analyses')
    .select('verse_id, segments, translation_arab')
    .in('verse_id', TARGETS);
  for (const va of vas) {
    let changed = false;
    const newSegs = (va.segments || []).map(s => {
      if (s.word_key === 'mlk' && /messager/i.test(s.fr || '')) {
        changed = true;
        return { ...s, fr: s.fr.replace(/les\s+messagers?/i, 'les anges').replace(/messagers?/i, 'anges'), sense_retenu: 'anges' };
      }
      return s;
    });
    let newArab = va.translation_arab || '';
    // Remplacer "les messagers" / "messagers" par "les anges" / "anges" mais uniquement quand c'est le sujet (cas malak)
    // Stratégie sûre : remplacer "Les messagers" / "les messagers" en début de proposition
    const before = newArab;
    newArab = newArab
      .replace(/Alors les messagers\b/g, 'Alors les anges')
      .replace(/Et lorsque les messagers\b/g, 'Et lorsque les anges')
      .replace(/Lorsque les messagers\b/g, 'Lorsque les anges')
      .replace(/^Les messagers\b/g, 'Les anges');
    if (newArab !== before) changed = true;

    if (changed) {
      await db.from('verse_analyses').update({ segments: newSegs, translation_arab: newArab }).eq('verse_id', va.verse_id);
      console.log(`✓ verse_analyses vid=${va.verse_id} : segments + translation_arab mis à jour`);
      console.log(`  → "${newArab.slice(0, 100)}..."`);
    }
  }
}
run().catch(e => { console.error(e); process.exit(1); });
