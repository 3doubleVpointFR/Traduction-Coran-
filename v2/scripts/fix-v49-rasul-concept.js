const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

async function run() {
  // 1. Vérifier les word_meanings réels de la racine rsl (via analysis_id 688)
  const { data: wm } = await db.from('word_meanings').select('concept, sense, meaning_type').eq('analysis_id', 688);
  console.log('=== word_meanings rsl ===');
  const concepts = new Set();
  for (const m of wm) {
    concepts.add(m.concept);
    console.log(`  concept="${m.concept}" sense="${m.sense}" type=${m.meaning_type}`);
  }
  console.log('\nConcepts uniques :', [...concepts].join(' | '));

  // 2. Récupérer la VWA actuelle
  const VID = 342;
  const { data: vwa } = await db.from('verse_word_analyses')
    .select('*')
    .eq('verse_id', VID)
    .eq('word_key', 'rsl')
    .single();

  console.log('\n=== analysis_axes actuel ===');
  console.log('sense_chosen:', vwa.analysis_axes.sense_chosen);
  console.log('concept_chosen:', vwa.analysis_axes.concept_chosen);
  console.log('concepts présents:', Object.keys(vwa.analysis_axes.concepts).join(', '));

  // 3. Le bon concept pour "messager" est "Messager/Porteur"
  // Reconstruire analysis_axes en utilisant les vrais concepts de word_meanings
  const newConcepts = {};
  // Tous les concepts existants en BDD pour rsl, statut "nul" sauf Messager/Porteur
  for (const c of concepts) {
    newConcepts[c] = {
      senses: wm.filter(m => m.concept === c).map(m => m.sense),
      status: c === 'Messager/Porteur' ? 'retenu' : 'nul',
      proof_ctx: c === 'Messager/Porteur'
        ? "Le nom rasūlan (indéfini accusatif) désigne celui qui est envoyé avec un message. Jésus est envoyé comme messager auprès des Fils d'Israël — il porte un message divin. Le sens 'messager' (porteur d'un message) est le seul cohérent pour un nom de fonction qui précède 'auprès des Fils d'Israël'."
        : 'Hors sujet.'
    };
  }

  const newAxes = {
    concepts: newConcepts,
    sense_chosen: 'messager',
    concept_chosen: 'Messager/Porteur',
  };

  console.log('\n=== nouveau analysis_axes ===');
  console.log('concept_chosen: Messager/Porteur');
  console.log('concepts retenu:', Object.keys(newConcepts).filter(k => newConcepts[k].status === 'retenu').join(', '));

  const { error } = await db.from('verse_word_analyses')
    .update({ analysis_axes: newAxes })
    .eq('id', vwa.id);

  if (error) throw error;
  console.log('\n✅ VWA V49 rsl mise à jour : concept_chosen = Messager/Porteur');
}
run().catch(e => { console.error(e); process.exit(1); });
