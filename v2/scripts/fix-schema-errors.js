/**
 * Corrige les erreurs de schéma détectées par validate-pipeline.js sections 28-32 :
 *  - Renomme ar→arabic, translation→fr, phonetic→phon
 *  - Ajoute pos manquant (= position)
 *  - Remplit sense_retenu depuis VWA sense_chosen
 *  - Convertit V65 VWAs format V2 → V3
 */
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

async function run() {
  // ============== 1. Fix segments schéma (champs renommés + pos + sense_retenu) ==============
  const { data: vas } = await db.from('verse_analyses')
    .select('verse_id, segments')
    .not('segments', 'is', null);

  let segFixed = 0;
  for (const va of vas) {
    if (!Array.isArray(va.segments)) continue;
    let changed = false;
    const newSegs = va.segments.map(s => {
      const fixed = { ...s };
      // ar → arabic
      if ('ar' in fixed && !('arabic' in fixed)) {
        fixed.arabic = fixed.ar;
        delete fixed.ar;
        changed = true;
      }
      // translation → fr
      if ('translation' in fixed && !('fr' in fixed)) {
        fixed.fr = fixed.translation;
        delete fixed.translation;
        changed = true;
      }
      // phonetic → phon
      if ('phonetic' in fixed && !('phon' in fixed)) {
        fixed.phon = fixed.phonetic;
        delete fixed.phonetic;
        changed = true;
      }
      // pos manquant → position en string
      if (!('pos' in fixed) && 'position' in fixed) {
        fixed.pos = String(fixed.position);
        changed = true;
      }
      return fixed;
    });
    if (changed) {
      await db.from('verse_analyses').update({ segments: newSegs }).eq('verse_id', va.verse_id);
      segFixed++;
    }
  }
  console.log(`✓ ${segFixed} verse_analyses : schéma segments corrigé`);

  // ============== 2. Remplir sense_retenu manquants depuis VWA sense_chosen ==============
  const { data: vasWithSeg } = await db.from('verse_analyses')
    .select('verse_id, segments')
    .not('segments', 'is', null);

  let senseFixed = 0;
  for (const va of vasWithSeg) {
    if (!Array.isArray(va.segments)) continue;
    // Collecter les VWA pour ce verset
    const { data: vwas } = await db.from('verse_word_analyses')
      .select('position, word_key, analysis_axes')
      .eq('verse_id', va.verse_id);
    const vwaByPos = {};
    for (const v of vwas || []) {
      vwaByPos[v.position] = v.analysis_axes?.sense_chosen;
    }

    let changed = false;
    const newSegs = va.segments.map(s => {
      if (s.is_particle || !s.word_key) return s;
      if (s.sense_retenu) return s;
      const senseChosen = vwaByPos[s.position];
      if (senseChosen) {
        changed = true;
        return { ...s, sense_retenu: senseChosen };
      }
      return s;
    });
    if (changed) {
      await db.from('verse_analyses').update({ segments: newSegs }).eq('verse_id', va.verse_id);
      senseFixed++;
    }
  }
  console.log(`✓ ${senseFixed} verse_analyses : sense_retenu rempli`);

  // ============== 3. Convertir V65 VWAs ancien format V2 → V3 ==============
  // V65 (vid=358) a 6 mots avec axe1_forme, axe2_voisins... au lieu de concepts{}
  const { data: oldVwas } = await db.from('verse_word_analyses')
    .select('id, verse_id, word_key, analysis_axes')
    .eq('verse_id', 358);

  let v2Fixed = 0;
  for (const v of oldVwas || []) {
    const ax = v.analysis_axes;
    if (!ax) continue;
    // Détecter format V2 : axe1_forme/axe2_voisins existent + pas de concepts{}
    if (ax.axe1_forme || ax.axe1_verset || (!ax.concepts && !ax.concept_chosen)) {
      // Récupérer concepts existants pour cette racine
      const wa = await db.from('word_analyses').select('id').eq('word_key', v.word_key).maybeSingle();
      if (!wa.data) continue;
      const wm = await db.from('word_meanings').select('concept, sense').eq('analysis_id', wa.data.id);
      const concepts = {};
      const conceptsBySense = {};
      for (const m of wm.data || []) {
        if (!concepts[m.concept]) concepts[m.concept] = { senses: [], status: 'nul', proof_ctx: 'Hors sujet.' };
        concepts[m.concept].senses.push(m.sense);
        conceptsBySense[m.sense] = m.concept;
      }
      // Identifier le sens retenu (depuis ax.retenu ou ax.sense_chosen)
      const senseRetenu = ax.retenu || ax.sense_chosen;
      const conceptChosen = senseRetenu ? conceptsBySense[senseRetenu] : Object.keys(concepts)[0];
      if (conceptChosen && concepts[conceptChosen]) {
        concepts[conceptChosen].status = 'retenu';
        concepts[conceptChosen].proof_ctx = ax.proof_ctx || `Sens "${senseRetenu}" retenu pour le contexte du verset.`;
      }
      const newAxes = {
        sense_chosen: senseRetenu,
        concept_chosen: conceptChosen,
        concepts,
      };
      await db.from('verse_word_analyses').update({ analysis_axes: newAxes }).eq('id', v.id);
      v2Fixed++;
    }
  }
  console.log(`✓ ${v2Fixed} VWA V65 : format V2 → V3 converti`);

  // ============== 4. V67/V68 : segments restent invalides ? Vérifier ==============
  for (const vid of [360, 361]) {
    const r = await db.from('verse_analyses').select('segments').eq('verse_id', vid).single();
    if (!r.data) continue;
    const segs = r.data.segments;
    if (!Array.isArray(segs)) continue;
    // Vérifier si les word-segments ont fr/phon/arabic
    let needsFix = false;
    for (const s of segs) {
      if (!s.is_particle && !s.fr) { needsFix = true; break; }
    }
    if (needsFix) {
      // Re-récupérer les sense_chosen depuis les VWA et reconstruire les segments
      const { data: vwas } = await db.from('verse_word_analyses')
        .select('position, word_key, analysis_axes')
        .eq('verse_id', vid);
      const senseByPos = {};
      for (const v of vwas || []) senseByPos[v.position] = v.analysis_axes?.sense_chosen;

      const newSegs = segs.map(s => {
        const fixed = { ...s };
        if (!fixed.is_particle && !fixed.fr && senseByPos[fixed.position]) {
          fixed.fr = senseByPos[fixed.position];
          fixed.sense_retenu = senseByPos[fixed.position];
        }
        return fixed;
      });
      await db.from('verse_analyses').update({ segments: newSegs }).eq('verse_id', vid);
      console.log(`✓ vid=${vid} segments mots-clés remplis depuis VWA`);
    }
  }
}

run().catch(e => { console.error(e); process.exit(1); });
