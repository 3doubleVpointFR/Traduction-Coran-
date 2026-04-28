// Pipeline Sourate 92 — Étape 2: Création racines manquantes (rdya, lzw)
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

async function main() {
  // === 1. Créer racine RDYA (ر د ي) — chuter, périr ===
  console.log('=== Création racine RDYA (ر د ي) ===');

  const { data: existRdy } = await sb.from('word_analyses').select('id').eq('word_key', 'rdya').limit(1);
  let rdyaId;
  if (existRdy && existRdy.length > 0) {
    rdyaId = existRdy[0].id;
    console.log('  rdya existe déjà, id=' + rdyaId);
  } else {
    const { data, error } = await sb.from('word_analyses').insert({
      word_key: 'rdya',
      root_ar: 'ر د ي',
      root_phon: 'rdy',
      total_occurrences: 3 // taradda appears in 92:11, also radiya/ardahu in other verses
    }).select().single();
    if (error) { console.log('Error:', error.message); return; }
    rdyaId = data.id;
    console.log('  Créé rdya id=' + rdyaId);
  }

  // Check existing concepts
  const { count: rdyaCount } = await sb.from('word_meanings').select('*', { count: 'exact', head: true })
    .eq('analysis_id', rdyaId).not('concept', 'is', null);

  if (rdyaCount > 0) {
    console.log('  Concepts existent déjà (' + rdyaCount + ') — SKIP');
  } else {
    // Lane's (Edward Lane, 1863):
    // Form I: radiya = he perished; rada = he fell into a well, tumbled down into a deep hollow
    // Form II: raddahu = he made him fall, threw him down; (God) overthrew him; also: clad with a rida' (mantle)
    // Form III: radaytu = contended in throwing stones; endeavoured to turn by blandishment
    // Form IV: ardahu = caused to perish, destroyed
    // Form V: taradda = fell into a well; was overthrown; also: put on a rida' (mantle)
    // Noun: radan = excess, superfluity
    const meanings = [
      {
        analysis_id: rdyaId,
        concept: 'Chute/Destruction',
        sense: 'perir',
        description: "Acte de cesser d'exister, de tomber dans la mort ou la ruine. La perdition est un mouvement descendant — on tombe d'un etat de vie vers un etat de non-existence. C'est un processus irreversible et definitif. Le Lane's (Edward Lane, 1863) donne : radiya = il a peri. La forme V taradda = il est tombe dans un puits, il a ete renverse. La forme IV ardahu (Dieu) l'a renverse, l'a fait perir.",
        meaning_type: 'etymology',
        display_order: 1
      },
      {
        analysis_id: rdyaId,
        concept: 'Chute/Destruction',
        sense: 'tomber dans un puits',
        description: "Chuter dans une cavite profonde.",
        meaning_type: 'etymology',
        display_order: 2
      },
      {
        analysis_id: rdyaId,
        concept: 'Chute/Destruction',
        sense: 'etre renverse',
        description: "Etre projete au sol, etre abattu.",
        meaning_type: 'etymology',
        display_order: 3
      },
      {
        analysis_id: rdyaId,
        concept: 'Chute/Destruction',
        sense: 'detruire',
        description: "Faire perir, causer la ruine.",
        meaning_type: 'etymology',
        display_order: 4
      },
      {
        analysis_id: rdyaId,
        concept: 'Vêtement/Manteau',
        sense: 'porter un manteau',
        description: "Acte de se vetir d'un rida (manteau porte sur les epaules). Le vetement est un acte exterieur de couverture du corps — il est volontaire et ponctuel. Le Lane's donne : raddaytuhu = je l'ai revetu d'un rida. La forme V taradda = il a mis un rida, il s'est vetu d'un manteau.",
        meaning_type: 'etymology',
        display_order: 5
      },
      {
        analysis_id: rdyaId,
        concept: 'Vêtement/Manteau',
        sense: 'revetir',
        description: "Se couvrir d'un vetement.",
        meaning_type: 'etymology',
        display_order: 6
      },
      {
        analysis_id: rdyaId,
        concept: 'Combat/Jet de pierres',
        sense: 'jeter des pierres',
        description: "Acte de combattre en lancant des pierres. C'est un acte offensif et directionnel — les pierres sortent du lanceur et atteignent la cible. Le Lane's donne : radaytu 'an al-qawm = j'ai combattu en jetant des pierres pour defendre le peuple.",
        meaning_type: 'etymology',
        display_order: 7
      },
      {
        analysis_id: rdyaId,
        concept: 'Séduction/Ruse',
        sense: 'tenter de seduire',
        description: "Chercher a tourner quelqu'un par des moyens doux, par la flatterie ou la ruse. Le Lane's donne : radahu = il a cherche a le tourner par des caresses.",
        meaning_type: 'etymology',
        display_order: 8
      },
      {
        analysis_id: rdyaId,
        concept: 'Excès/Surplus',
        sense: 'exces',
        description: "Ce qui depasse la mesure, le surplus. Le Lane's donne : radan = exces, superflu. C'est un etat de depassement par rapport a une norme.",
        meaning_type: 'etymology',
        display_order: 9
      }
    ];

    const { error } = await sb.from('word_meanings').insert(meanings);
    if (error) console.log('  Error inserting:', error.message);
    else console.log('  9 sens insérés → 5 concepts (Chute/Destruction, Vêtement/Manteau, Combat/Jet de pierres, Séduction/Ruse, Excès/Surplus)');
  }

  // === 2. Créer racine LZW (ل ظ ي) — flamber, brasier ===
  console.log('\n=== Création racine LZW (ل ظ ي) ===');

  const { data: existLzw } = await sb.from('word_analyses').select('id').eq('word_key', 'lzw').limit(1);
  let lzwId;
  if (existLzw && existLzw.length > 0) {
    lzwId = existLzw[0].id;
    console.log('  lzw existe déjà, id=' + lzwId);
  } else {
    const { data, error } = await sb.from('word_analyses').insert({
      word_key: 'lzw',
      root_ar: 'ل ظ ي',
      root_phon: 'lzy',
      total_occurrences: 4 // talazza 92:14, laza (proper noun for hellfire) in 70:15, 79:39
    }).select().single();
    if (error) { console.log('Error:', error.message); return; }
    lzwId = data.id;
    console.log('  Créé lzw id=' + lzwId);
  }

  const { count: lzwCount } = await sb.from('word_meanings').select('*', { count: 'exact', head: true })
    .eq('analysis_id', lzwId).not('concept', 'is', null);

  if (lzwCount > 0) {
    console.log('  Concepts existent déjà (' + lzwCount + ') — SKIP');
  } else {
    // The root لظى/لظي is related to blazing fire
    // Lane's under root لظ gives: lazza = to drive away, to keep/cleave to
    // But لَظَى (laza) as a Quranic term = blazing fire, intense flame
    // The verb talazza (form V) = to blaze intensely
    // This is a specialized Quranic usage distinct from the لظ root
    const meanings = [
      {
        analysis_id: lzwId,
        concept: 'Flamme/Brasier',
        sense: 'flamber',
        description: "Acte de bruler avec une flamme intense et visible. Le flambement est un processus actif et continu — le feu se nourrit et produit des flammes. C'est directionnel (vers le haut) et destructeur. La forme V talazza signifie « flamber intensement, produire des flammes vives ». Le nom laza designe un brasier ardent, un feu dont les flammes sont visibles et constantes.",
        meaning_type: 'etymology',
        display_order: 1
      },
      {
        analysis_id: lzwId,
        concept: 'Flamme/Brasier',
        sense: 'brasier',
        description: "Feu intense a flammes vives.",
        meaning_type: 'etymology',
        display_order: 2
      },
      {
        analysis_id: lzwId,
        concept: 'Flamme/Brasier',
        sense: 'bruler intensement',
        description: "Etre consume par des flammes ardentes.",
        meaning_type: 'etymology',
        display_order: 3
      },
      {
        analysis_id: lzwId,
        concept: 'Adhérence/Persistance',
        sense: 'adherer',
        description: "S'attacher a quelque chose et ne pas le quitter. L'adherence est un etat de lien constant et volontaire. Le Lane's (Edward Lane, 1863) donne sous la racine l-z : alazza bihi = il s'est attache a lui, il ne l'a pas quitte. C'est un acte de perseverance et d'insistance.",
        meaning_type: 'etymology',
        display_order: 4
      },
      {
        analysis_id: lzwId,
        concept: 'Adhérence/Persistance',
        sense: 'perseverer',
        description: "Continuer sans relache.",
        meaning_type: 'etymology',
        display_order: 5
      }
    ];

    const { error } = await sb.from('word_meanings').insert(meanings);
    if (error) console.log('  Error inserting:', error.message);
    else console.log('  5 sens insérés → 2 concepts (Flamme/Brasier, Adhérence/Persistance)');
  }

  console.log('\n=== ÉTAPE 2 TERMINÉE ===');
}

main().catch(console.error);
