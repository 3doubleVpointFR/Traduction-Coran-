// FIX — Axes trop courts dans les VWAs (verse_word_analyses)
// Regle : chaque axe dans les concepts "probable" et "peu_probable" doit faire >= 100 chars
const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// --- Textes allonges pour chaque axe court ---
// Format : { verse_id, word_key, position, concept, axe_name, new_text }

const FIXES = [

  // 1. V258 (verse_id=265) — hdy pos=41 — concept "Don/Cadeau" (peu_probable)
  //    axe2_voisins actuel (97): "Le contexte de la negation (la yahdi = ne guide pas) impose le sens de guidance et non de cadeau."
  {
    verse_id: 265, word_key: 'hdy', position: 41,
    concept: 'Don/Cadeau',
    axe: 'axe2_voisins',
    new_text: "Le contexte de la negation (la yahdi = ne guide pas) impose le sens de guidance et non de cadeau. Aucun destinataire, aucun objet materiel ne figurent dans le verset.",
  },

  // 2. V258 (verse_id=265) — hyy pos=18 — concept "Vie/Vitalite" (probable)
  //    axe4_coherence actuel (97): "La distinction forme I / forme IV est essentielle pour comprendre le debat theologique du verset."
  {
    verse_id: 265, word_key: 'hyy', position: 18,
    concept: 'Vie/Vitalite',
    axe: 'axe4_coherence',
    new_text: "La distinction forme I / forme IV est essentielle pour comprendre le debat theologique du verset. La forme IV (causative) designe l'acte divin de vivifier, non l'etat.",
  },

  // 3. V259 (verse_id=266) — ksw pos=55 — concept "Don de vetement" (peu_probable)
  //    axe2_voisins actuel (75): "Le contexte de la resurrection anatomique exclut tout sens de don materiel."
  {
    verse_id: 266, word_key: 'ksw', position: 55,
    concept: 'Don de vetement',
    axe: 'axe2_voisins',
    new_text: "Le contexte de la resurrection anatomique exclut tout sens de don materiel. Les mots voisins (os, chair) renvoient exclusivement a l'anatomie corporelle, pas a un echange social de vetements.",
  },
  //    axe4_coherence actuel (96): "La coherence avec la sequence nunshizu (dresser les os) impose le sens de revetement anatomique."
  {
    verse_id: 266, word_key: 'ksw', position: 55,
    concept: 'Don de vetement',
    axe: 'axe4_coherence',
    new_text: "La coherence avec la sequence nunshizu (dresser les os) impose le sens de revetement anatomique. Le don de vetement presupposerait un donataire conscient, ce qui contredit la scene de reconstruction osseuse.",
  },
  //    axe5_frequence actuel (94): "Dans ce contexte unique de resurrection anatomique, kasaa designe le revetement et non le don."
  {
    verse_id: 266, word_key: 'ksw', position: 55,
    concept: 'Don de vetement',
    axe: 'axe5_frequence',
    new_text: "Dans ce contexte unique de resurrection anatomique, kasaa designe le revetement et non le don. Les occurrences comparables dans le Coran confirment que kasaa avec un complement corporel signifie toujours revetir, jamais offrir.",
  },

  // 4. V259 (verse_id=266) — lbv pos=25 — concept "Attente/Immobilite" (probable)
  //    axe3_sourate actuel (92): "Le sens d'attente est connexe mais secondaire dans ce contexte de quantification temporelle."
  {
    verse_id: 266, word_key: 'lbv', position: 25,
    concept: 'Attente/Immobilite',
    axe: 'axe3_sourate',
    new_text: "Le sens d'attente est connexe mais secondaire dans ce contexte de quantification temporelle. Al-Baqarah emploie labitha pour mesurer des durees, jamais pour decrire un simple etat d'immobilite.",
  },

  // 5. V259 (verse_id=266) — qry pos=5 — concept "Rassemblement/Concentration" (peu_probable)
  //    axe4_coherence actuel (70): "La coherence avec khawiya (effondree) impose le sens de lieu physique."
  {
    verse_id: 266, word_key: 'qry', position: 5,
    concept: 'Rassemblement/Concentration',
    axe: 'axe4_coherence',
    new_text: "La coherence avec khawiya (effondree) impose le sens de lieu physique concret. Un rassemblement abstrait ne peut pas s'effondrer sur ses toits — seul un etablissement humain physique peut etre decrit ainsi.",
  },

  // 6. V260 (verse_id=267) — hyy pos=7 — concept "Vie/Vitalite" (peu_probable)
  //    axe3_sourate actuel (98): "Le sens de vie comme etat est present partout dans al-Baqarah mais n'est pas l'enjeu de ce verset."
  {
    verse_id: 267, word_key: 'hyy', position: 7,
    concept: 'Vie/Vitalite',
    axe: 'axe3_sourate',
    new_text: "Le sens de vie comme etat est present partout dans al-Baqarah mais n'est pas l'enjeu de ce verset specifique. La sourate distingue soigneusement ihya' (acte de vivifier) de hayat (etat de vie) — ce verset emploie le premier.",
  },
  //    axe4_coherence actuel (75): "La distinction Form I / Form IV est theologique et decisive pour ce verset."
  {
    verse_id: 267, word_key: 'hyy', position: 7,
    concept: 'Vie/Vitalite',
    axe: 'axe4_coherence',
    new_text: "La distinction Form I / Form IV est theologique et decisive pour ce verset. La Form IV causative (tuhyi al-mawta) place Dieu comme agent actif de vivification, pas comme simple etre vivant — ce qui invalide le sens de vitalite statique.",
  },
  //    axe5_frequence actuel (83): "Tuhyi avec al-mawta impose toujours le sens causatif de vivification dans le Coran."
  {
    verse_id: 267, word_key: 'hyy', position: 7,
    concept: 'Vie/Vitalite',
    axe: 'axe5_frequence',
    new_text: "Tuhyi avec al-mawta impose toujours le sens causatif de vivification dans le Coran. Chaque occurrence de cette formule designe un acte divin actif sur des morts, jamais la description d'un etat de vitalite.",
  },

  // 7. V260 (verse_id=267) — sEy pos=34 — concept "Effort/Travail" (probable)
  //    axe4_coherence actuel (99): "Les deux sens (hate et effort) coexistent dans la racine et sont tous deux presents dans ce verset."
  {
    verse_id: 267, word_key: 'sEy', position: 34,
    concept: 'Effort/Travail',
    axe: 'axe4_coherence',
    new_text: "Les deux sens (hate et effort) coexistent dans la racine et sont tous deux presents dans ce verset. Le retour delibere des oiseaux depuis des montagnes differentes implique un effort oriente, coherent avec le sens coranique du sa'y rituel.",
  },

  // 8. V260 (verse_id=267) — Tmn pos=15 — concept "Stabilisation/Affermissement" (probable)
  //    axe5_frequence actuel (77): "Les deux sens sont etymologiquement inclus dans la Form X de la racine t-m-n."
  {
    verse_id: 267, word_key: 'Tmn', position: 15,
    concept: 'Stabilisation/Affermissement',
    axe: 'axe5_frequence',
    new_text: "Les deux sens sont etymologiquement inclus dans la Form X de la racine t-m-n. Dans les occurrences coraniques, itma'anna designe toujours une stabilisation profonde du coeur, que ce soit apres une revelation ou apres une certitude acquise.",
  },

  // 9. V260 (verse_id=267) — Tyr pos=21 — concept "Presage/Omen" (peu_probable)
  //    axe2_voisins actuel (96): "Le contexte de demonstration empirique de la resurrection exclut tout sens de presage ou d'omen."
  {
    verse_id: 267, word_key: 'Tyr', position: 21,
    concept: 'Presage/Omen',
    axe: 'axe2_voisins',
    new_text: "Le contexte de demonstration empirique de la resurrection exclut tout sens de presage ou d'omen. Les mots voisins (prendre, couper, placer sur montagne) decrivent une manipulation physique concrete, incompatible avec une lecture augurale.",
  },
  //    axe4_coherence actuel (90): "Le sens de presage est etymologiquement connexe mais semantiquement exclu par le contexte."
  {
    verse_id: 267, word_key: 'Tyr', position: 21,
    concept: 'Presage/Omen',
    axe: 'axe4_coherence',
    new_text: "Le sens de presage est etymologiquement connexe mais semantiquement exclu par le contexte. Le Coran condamne ailleurs la divination par les oiseaux (tatayyur) — utiliser tayr ici dans ce sens condamne serait theologiquement incoherent.",
  },
  //    axe5_frequence actuel (80): "Le sens de presage est minoritaire dans le Coran et totalement inapplicable ici."
  {
    verse_id: 267, word_key: 'Tyr', position: 21,
    concept: 'Presage/Omen',
    axe: 'axe5_frequence',
    new_text: "Le sens de presage est minoritaire dans le Coran et totalement inapplicable ici. Dans la grande majorite des occurrences, tayr et tuyur designent des animaux volatiles concrets, et le contexte de ce verset confirme sans ambiguite ce sens physique.",
  },

];

async function getVWA(verse_id, word_key, position) {
  const { data, error } = await supabase
    .from('verse_word_analyses')
    .select('analysis_axes')
    .eq('verse_id', verse_id)
    .eq('word_key', word_key)
    .eq('position', position)
    .single();
  if (error) throw new Error(`GET ${verse_id}/${word_key}/${position}: ${error.message}`);
  return data.analysis_axes;
}

async function updateVWA(verse_id, word_key, position, analysis_axes) {
  const { error } = await supabase
    .from('verse_word_analyses')
    .update({ analysis_axes })
    .eq('verse_id', verse_id)
    .eq('word_key', word_key)
    .eq('position', position);
  if (error) throw new Error(`UPDATE ${verse_id}/${word_key}/${position}: ${error.message}`);
}

async function run() {
  console.log('==============================================');
  console.log('  FIX — Axes trop courts dans VWAs');
  console.log('==============================================\n');

  // Groupe les fixes par VWA pour n'envoyer qu'une seule requete par VWA
  const groups = {};
  for (const fix of FIXES) {
    const key = `${fix.verse_id}/${fix.word_key}/${fix.position}`;
    if (!groups[key]) groups[key] = { verse_id: fix.verse_id, word_key: fix.word_key, position: fix.position, fixes: [] };
    groups[key].fixes.push(fix);
  }

  for (const [key, group] of Object.entries(groups)) {
    console.log(`>>> VWA: ${key}`);
    const axes = await getVWA(group.verse_id, group.word_key, group.position);

    for (const fix of group.fixes) {
      const concept = axes.concepts?.[fix.concept];
      if (!concept) {
        console.log(`  ERREUR: concept "${fix.concept}" introuvable`);
        continue;
      }
      const before = concept[fix.axe] || '';
      const after = fix.new_text;
      concept[fix.axe] = after;
      console.log(`  [${fix.concept}] ${fix.axe}:`);
      console.log(`    AVANT  (${before.length}): ${before}`);
      console.log(`    APRES  (${after.length}): ${after}`);
      if (after.length < 100) console.log(`    *** ATTENTION: toujours < 100 chars ***`);
    }

    await updateVWA(group.verse_id, group.word_key, group.position, axes);
    console.log(`  -> Mis a jour en base.\n`);
  }

  console.log('==============================================');
  console.log('  VERIFICATION FINALE');
  console.log('==============================================\n');

  // Verifier que tous les axes corriges font bien >= 100 chars
  let allOk = true;
  for (const [key, group] of Object.entries(groups)) {
    const axes = await getVWA(group.verse_id, group.word_key, group.position);
    for (const fix of group.fixes) {
      const concept = axes.concepts?.[fix.concept];
      const val = concept?.[fix.axe] || '';
      const status = val.length >= 100 ? 'OK' : 'TROP COURT';
      if (val.length < 100) allOk = false;
      console.log(`  [${status}] ${key} "${fix.concept}" ${fix.axe}: ${val.length} chars`);
    }
  }

  console.log('');
  if (allOk) {
    console.log('Tous les axes corriges font >= 100 chars.');
  } else {
    console.log('ATTENTION: certains axes sont encore trop courts !');
  }
}

run().catch(console.error);
