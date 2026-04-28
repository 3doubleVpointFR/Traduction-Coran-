const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

async function fixVWA(id, concept_chosen_new, concepts_update) {
  // First get existing
  const { data: existing } = await supabase.from('verse_word_analyses').select('id,word_key,position,analysis_axes').eq('id', id).single();
  if (!existing) { console.error('NOT FOUND id=', id); return; }

  const axes = existing.analysis_axes;
  // Update concept_chosen
  axes.concept_chosen = concept_chosen_new;
  // Update statuses
  for (const [name, updates] of Object.entries(concepts_update)) {
    if (axes.concepts[name]) {
      Object.assign(axes.concepts[name], updates);
    }
  }

  const { error } = await supabase.from('verse_word_analyses').update({ analysis_axes: axes }).eq('id', id);
  if (error) console.error(`Fix error [id=${id}]:`, error.message);
  else console.log(`Fixed id=${id} key=${existing.word_key} pos=${existing.position} -> concept_chosen=${concept_chosen_new}`);
}

async function main() {
  // 1. dhw pos=20, id=4451 — set concept_chosen to 'Particule/Pronom', mark it retenu
  await fixVWA(4451, 'Particule/Pronom', {
    'Particule/Pronom': { status: 'retenu' },
    'Dispersion/Semence': { status: 'peu_probable' },
    'Postérité': { status: 'peu_probable' }
  });

  // 2. elw pos=4, id=4441 — set concept_chosen to 'Sur/Au-dessus (préposition)', mark it retenu
  await fixVWA(4441, 'Sur/Au-dessus (préposition)', {
    'Sur/Au-dessus (préposition)': { status: 'retenu' },
    'Hauteur/Élévation': { status: 'probable' }
  });

  // 3. mny pos=31, id=4459 — set concept_chosen to 'Particule/Pronom', mark it retenu
  await fixVWA(4459, 'Particule/Pronom', {
    'Particule/Pronom': { status: 'retenu' },
    'Désir/Espérance': { status: 'peu_probable' },
    'Semence': { status: 'nul' }
  });

  // 4. mym pos=38, id=4465 — set concept_chosen to 'Particule/Connexion', mark it retenu
  await fixVWA(4465, 'Particule/Connexion', {
    'Particule/Connexion': { status: 'retenu' },
    'Lettre/Mystère': { status: 'nul' }
  });

  // 5. nws pos=34, id=4461 — set concept_chosen to 'Particule/Emphase', mark it retenu
  await fixVWA(4461, 'Particule/Emphase', {
    'Particule/Emphase': { status: 'retenu' },
    'Humanité/Peuple': { status: 'peu_probable' },
    'Perception/Visibilité': { status: 'nul' }
  });

  // 6. sfar pos=5, id=4442 — fix Arabic text in proof_ctx and axe4_coherence
  // Need to get the full data and clean Arabic characters
  const { data: sfarVWA } = await supabase.from('verse_word_analyses').select('*').eq('id', 4442).single();
  if (sfarVWA) {
    const axes = sfarVWA.analysis_axes;
    const concept = axes.concepts['Voyage/Déplacement'];
    if (concept) {
      // Remove Arabic script from proof_ctx
      concept.proof_ctx = concept.proof_ctx ? concept.proof_ctx.replace(/[\u0600-\u06FF\u0750-\u077F\uFB50-\uFDFF\uFE70-\uFEFF]+/g, '[ar]') : concept.proof_ctx;
      // Remove Arabic script from axe4_coherence
      concept.axe4_coherence = concept.axe4_coherence ? concept.axe4_coherence.replace(/[\u0600-\u06FF\u0750-\u077F\uFB50-\uFDFF\uFE70-\uFEFF]+/g, '[ar]') : concept.axe4_coherence;
      // Also check other concepts
      for (const [cname, cdata] of Object.entries(axes.concepts)) {
        for (const field of ['axe1_verset','axe2_voisins','axe3_sourate','axe4_coherence','axe5_frequence','proof_ctx']) {
          if (cdata[field]) {
            cdata[field] = cdata[field].replace(/[\u0600-\u06FF\u0750-\u077F\uFB50-\uFDFF\uFE70-\uFEFF]+/g, '[ar]');
          }
        }
      }
      const { error } = await supabase.from('verse_word_analyses').update({ analysis_axes: axes }).eq('id', 4442);
      if (error) console.error('Fix sfar error:', error.message);
      else console.log('Fixed sfar pos=5: Arabic text removed from proof_ctx and axe4_coherence');
    }
  }

  // 7. swr pos=35 V285, id=4505 — set concept_chosen to 'Destination/Retour', mark it retenu
  await fixVWA(4505, 'Destination/Retour', {
    'Destination/Retour': { status: 'retenu' },
    'Forme/Image': { status: 'peu_probable' },
    'Sens isolé/Mur': { status: 'nul' },
    'Sens isolé/Trompette': { status: 'nul' }
  });

  // 8. kmw pos=24 in V283 — need to find it
  const { data: kmwVWA } = await supabase.from('verse_word_analyses').select('id,word_key,position,analysis_axes').eq('verse_id', 290).eq('position', 24).single();
  if (kmwVWA) {
    console.log('kmw pos=24 id=', kmwVWA.id, 'concept_chosen=', kmwVWA.analysis_axes?.concept_chosen, 'concepts=', Object.keys(kmwVWA.analysis_axes?.concepts || {}));
  } else {
    console.log('kmw pos=24 NOT FOUND in verse_id=290');
    // Check which verse it's in
    const { data: kmwAll } = await supabase.from('verse_word_analyses').select('id,verse_id,word_key,position,analysis_axes').eq('word_key', 'kmw');
    kmwAll?.forEach(d => console.log('  kmw id=', d.id, 'verse_id=', d.verse_id, 'pos=', d.position, 'concept_chosen=', d.analysis_axes?.concept_chosen));
  }

  console.log('\nFix script DONE');
}
main().catch(console.error);
