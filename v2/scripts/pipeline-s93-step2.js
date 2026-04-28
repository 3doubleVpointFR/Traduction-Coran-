// Pipeline Sourate 93 — Étape 2: Création racine sjw + ajout concepts manquants qly
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

async function main() {
  // === 1. Créer racine SJW (س ج و) ===
  console.log('=== Création racine SJW (س ج و) ===');

  // Check if already exists
  const { data: existing } = await sb.from('word_analyses').select('id').eq('word_key', 'sjw').limit(1);
  let sjwId;
  if (existing && existing.length > 0) {
    sjwId = existing[0].id;
    console.log('  sjw existe déjà, id=' + sjwId);
  } else {
    const { data, error } = await sb.from('word_analyses').insert({
      word_key: 'sjw',
      root_ar: 'س ج و',
      root_phon: 'sjw',
      total_occurrences: 1 // سَجَى appears once in 93:2
    }).select().single();
    if (error) { console.log('Error:', error.message); return; }
    sjwId = data.id;
    console.log('  Créé sjw id=' + sjwId);
  }

  // Check existing concepts
  const { count: sjwCount } = await sb.from('word_meanings').select('*', { count: 'exact', head: true })
    .eq('analysis_id', sjwId).not('concept', 'is', null);

  if (sjwCount > 0) {
    console.log('  Concepts existent déjà (' + sjwCount + ') — SKIP');
  } else {
    // Lane's: سجا (saja) — to cover, to be still/calm, to be dark (night), to spread its darkness
    // The night سَجَى means: it covered with its darkness, it became still/calm, it spread
    const meanings = [
      {
        analysis_id: sjwId,
        concept: 'Couverture/Calme',
        sense: 'couvrir',
        description: "Acte exterieur de couvrir, recouvrir. La couverture est un mouvement descendant qui enveloppe ce qui est en dessous. C'est directionnel (du haut vers le bas) et progressif. Le Lane's (Edward Lane, 1863) donne : saja al-laylu — la nuit a couvert de son obscurite, elle s'est etendue et a tout enveloppe.",
        meaning_type: 'etymology',
        display_order: 1
      },
      {
        analysis_id: sjwId,
        concept: 'Couverture/Calme',
        sense: 'etre calme',
        description: "Etat de tranquillite et d'immobilite.",
        meaning_type: 'etymology',
        display_order: 2
      },
      {
        analysis_id: sjwId,
        concept: 'Couverture/Calme',
        sense: 'etre immobile',
        description: "Etat de repos, absence de mouvement.",
        meaning_type: 'etymology',
        display_order: 3
      },
      {
        analysis_id: sjwId,
        concept: 'Couverture/Calme',
        sense: 'etendre son obscurite',
        description: "La nuit etend son voile d'obscurite sur la terre.",
        meaning_type: 'etymology',
        display_order: 4
      },
      {
        analysis_id: sjwId,
        concept: 'Obscurité/Nuit',
        sense: 'devenir sombre',
        description: "Passage a l'etat d'obscurite. Le devenir sombre est un processus graduel — la lumiere diminue et l'obscurite s'installe. Le Lane's donne : saja signifie que la nuit est devenue sombre et immobile, que ses tenebres se sont stabilisees.",
        meaning_type: 'etymology',
        display_order: 5
      },
      {
        analysis_id: sjwId,
        concept: 'Obscurité/Nuit',
        sense: 'nuit profonde',
        description: "L'etat de la nuit quand elle est a son plus sombre.",
        meaning_type: 'etymology',
        display_order: 6
      }
    ];

    const { error } = await sb.from('word_meanings').insert(meanings);
    if (error) console.log('  Error inserting:', error.message);
    else console.log('  6 sens insérés → 2 concepts (Couverture/Calme, Obscurité/Nuit)');
  }

  // === 2. Ajouter concepts manquants à QLY (id=1872) ===
  console.log('\n=== Ajout concepts manquants à QLY (1872) ===');

  // Existing: Rareté/Quantité infime (peu, être rare, diminuer)
  // Missing: Aversion/Rejet (détester, haïr, rejeter) — c'est LE sens de قَلَى dans 93:3
  // Also: Cuisson (frire, griller) — sens physique premier

  // Check if Aversion concept already exists
  const { data: qlyCheck } = await sb.from('word_meanings').select('concept')
    .eq('analysis_id', 1872).eq('concept', 'Aversion/Rejet').limit(1);

  if (qlyCheck && qlyCheck.length > 0) {
    console.log('  Concept Aversion/Rejet existe déjà — SKIP');
  } else {
    const newMeanings = [
      {
        analysis_id: 1872,
        concept: 'Aversion/Rejet',
        sense: 'detester',
        description: "Etat interieur de repulsion et de rejet. La destestation est un sentiment permanent d'aversion envers quelqu'un ou quelque chose. C'est un etat qui reste chez celui qui le ressent — il ne sort pas vers l'autre directement. Le Lane's donne : qala = il a deteste, il a eu de l'aversion pour, il a rejete avec degout.",
        meaning_type: 'etymology',
        display_order: 10
      },
      {
        analysis_id: 1872,
        concept: 'Aversion/Rejet',
        sense: 'rejeter',
        description: "Repousser avec aversion.",
        meaning_type: 'etymology',
        display_order: 11
      },
      {
        analysis_id: 1872,
        concept: 'Aversion/Rejet',
        sense: 'avoir de l\'aversion',
        description: "Eprouver un degout profond.",
        meaning_type: 'etymology',
        display_order: 12
      },
      {
        analysis_id: 1872,
        concept: 'Cuisson/Transformation',
        sense: 'frire',
        description: "Acte physique de cuire dans l'huile. La friture est une transformation par la chaleur — l'objet frit change de nature sous l'effet de la chaleur intense. C'est un acte exterieur, ponctuel et transformateur. Le Lane's donne : qala = il a frit, il a grille.",
        meaning_type: 'etymology',
        display_order: 13
      },
      {
        analysis_id: 1872,
        concept: 'Cuisson/Transformation',
        sense: 'griller',
        description: "Cuire par exposition directe a la chaleur.",
        meaning_type: 'etymology',
        display_order: 14
      }
    ];

    const { error } = await sb.from('word_meanings').insert(newMeanings);
    if (error) console.log('  Error:', error.message);
    else console.log('  5 sens ajoutés → 2 nouveaux concepts (Aversion/Rejet, Cuisson/Transformation)');
  }

  console.log('\n=== ÉTAPE 2 TERMINÉE ===');
}

main().catch(console.error);
