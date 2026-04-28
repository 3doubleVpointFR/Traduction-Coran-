// Fix S88 v1-10 validation issues
// 1. Remove Arabic from translation_explanation
// 2. Fix short axes (nem Douceur axe4, rdw Choix axe2, jnn Dissimulation axe3+5)
require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');
const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

(async () => {
  console.log('=== FIX S88 v1-10 ===\n');

  // 1. Remove Arabic from all translation_explanations
  const { data: vas } = await sb.from('verse_analyses').select('id, verse_id, translation_explanation').gte('verse_id', 5968).lte('verse_id', 5977);

  for (const va of vas) {
    if (!va.translation_explanation) continue;
    // Remove Arabic characters but keep the parentheses and formatting
    // Pattern: replace (Arabic) with empty, or **word** (Arabic) with **word**
    let te = va.translation_explanation;
    // Remove (Arabic text) patterns - parenthesized Arabic
    te = te.replace(/\s*\([^)]*[\u0600-\u06FF]+[^)]*\)/g, '');

    if (te !== va.translation_explanation) {
      const { error } = await sb.from('verse_analyses').update({ translation_explanation: te }).eq('id', va.id);
      if (error) console.log(`  ❌ VA ${va.verse_id}: ${error.message}`);
      else console.log(`  ✓ VA ${va.verse_id}: Arabic removed from explanation`);
    }
  }

  // 2. Fix short axes
  // nem (v8, 5975) — Douceur/Aisance axe4_coherence too short
  console.log('\n--- Fixing short axes ---');
  const { data: nemVwa } = await sb.from('verse_word_analyses').select('id, analysis_axes').eq('verse_id', 5975).eq('word_key', 'nem').single();
  if (nemVwa) {
    const axes = nemVwa.analysis_axes;
    axes.concepts['Douceur/Aisance'].axe4_coherence = "Le Coran utilise na'im pour decrire le paradis — jannat al-na'im apparait dans de nombreux passages (5:65, 10:9, 22:56, 31:8, 56:12, 68:34). La racine n-'-m dans le Coran est systematiquement associee a la jouissance des bienfaits, pas a la simple douceur de texture. La coherence coranique oriente vers le bienfait dont on jouit, pas vers une qualite passive de douceur.";
    const { error } = await sb.from('verse_word_analyses').update({ analysis_axes: axes }).eq('id', nemVwa.id);
    console.log(error ? `  ❌ nem: ${error.message}` : '  ✓ nem: Douceur axe4 fixed');
  }

  // rdw (v9, 5976) — Choix/Préférence axe2_voisins too short
  const { data: rdwVwa } = await sb.from('verse_word_analyses').select('id, analysis_axes').eq('verse_id', 5976).eq('word_key', 'rdw').single();
  if (rdwVwa) {
    const axes = rdwVwa.analysis_axes;
    axes.concepts['Choix/Préférence'].axe2_voisins = "Le verset 8 decrivait les visages radieux. Le verset 9 explique la relation entre ces visages et leur effort passe. Le verset 10 completera en donnant le lieu de la recompense (un jardin eleve). Le contexte est celui du resultat : les visages sont dans un etat qui decoule de leur effort. Le choix est un acte prospectif (on choisit pour l'avenir), alors que le contexte est retrospectif (on regarde son effort passe). Le mot « choisissante de son effort » ne rend pas cette dimension retrospective.";
    const { error } = await sb.from('verse_word_analyses').update({ analysis_axes: axes }).eq('id', rdwVwa.id);
    console.log(error ? `  ❌ rdw: ${error.message}` : '  ✓ rdw: Choix axe2 fixed');
  }

  // jnn (v10, 5977) — Dissimulation/Couverture axe3_sourate + axe5_frequence too short
  const { data: jnnVwa } = await sb.from('verse_word_analyses').select('id, analysis_axes').eq('verse_id', 5977).eq('word_key', 'jnn').single();
  if (jnnVwa) {
    const axes = jnnVwa.analysis_axes;
    axes.concepts['Dissimulation/Couverture'].axe3_sourate = "La sourate 88 est construite autour de l'opposition entre deux destins concrets : le feu (v4), l'eau bouillante (v5), la plante epineuse (v6) d'un cote, et le jardin eleve (v10) de l'autre. Tous ces elements sont des lieux ou des objets physiques. La dissimulation est un acte abstrait qui ne s'inscrit pas dans cette opposition de lieux concrets. La sourate ne parle pas de cacher ou de reveler — elle parle de ce que les gens vivent physiquement.";
    axes.concepts['Dissimulation/Couverture'].axe5_frequence = "La dissimulation n'est pas un objectif de la mission du khalifa. Le khalifa est charge de construire, cultiver, partager — des actions positives dans le monde reel. La dissimulation est un acte negatif (cacher) qui ne contribue pas a la civilisation. Le jardin, en revanche, est le resultat de la construction et de la culture — il est le fruit concret de la mission accomplie.";
    const { error } = await sb.from('verse_word_analyses').update({ analysis_axes: axes }).eq('id', jnnVwa.id);
    console.log(error ? `  ❌ jnn: ${error.message}` : '  ✓ jnn: Dissimulation axe3+axe5 fixed');
  }

  console.log('\n=== FIX TERMINÉ ===');
})();
