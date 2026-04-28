const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// Ce script corrige les axes trop courts (< 100 chars) dans les VWAs V211-220.
// Chaque entree: { verse_id, word_key, position, conceptName, field, newText }

const fixes = [
  // --- V212 (verse_id=219) amn pos=7 "Securite/Confiance" ---
  {
    verse_id: 219, word_key: 'amn', position: 7,
    conceptName: 'Securite/Confiance',
    field: 'axe2_voisins',
    newText: 'La securite des croyants sera confirmee au Jour du Relevement — ils seront au-dessus de ceux qui se moquaient. La taqwa (protection) et la foi (aman) forment un couple : croire c\'est aussi se mettre en securite spirituelle.'
  },
  {
    verse_id: 219, word_key: 'amn', position: 7,
    conceptName: 'Securite/Confiance',
    field: 'axe3_sourate',
    newText: 'La sourate al-Baqarah utilise la racine a-m-n dans les deux dimensions : foi (iman) et securite (aman). La foi est une mise en securite — croire c\'est s\'abriter sous la protection divine. Cette double dimension est constante dans la sourate depuis 2:2 jusqu\'a la fin.'
  },
  // --- V212 (verse_id=219) kfr pos=2 "Couverture/Dissimulation" ---
  {
    verse_id: 219, word_key: 'kfr', position: 2,
    conceptName: 'Couverture/Dissimulation',
    field: 'axe4_coherence',
    newText: 'Le Coran utilise kfr pour designer le refus actif de la verite apres qu\'elle a ete presentee. Couvrir la verite est un acte delibere — le kafir n\'est pas celui qui ne sait pas mais celui qui cache ce qu\'il sait. Cette dimension de la dissimulation est centrale dans le concept de kufr coraniquement.'
  },
  // --- V213 (verse_id=220) ktb pos=10 "Obligation/Decret" (peu_probable) ---
  {
    verse_id: 220, word_key: 'ktb', position: 10,
    conceptName: 'Obligation/Decret',
    field: 'axe1_verset',
    newText: 'Dans ce verset, al-kitab designe le Livre descend par Dieu avec les prophetes pour juger les divergences. L\'interpretation comme "obligation/decret" est secondaire : le Livre a ete envoye pour trancher, donc il a force d\'obligation. Mais le sens premier reste le Livre revele, pas simplement un decret abstrait.'
  },
  {
    verse_id: 220, word_key: 'ktb', position: 10,
    conceptName: 'Obligation/Decret',
    field: 'axe3_sourate',
    newText: 'Dans la sourate al-Baqarah, al-kitab designe principalement le Livre revele (Torah, Coran, Evangile). Le sens d\'obligation (kutiba alaykum = il vous est prescrit) est present dans d\'autres versets mais avec une forme verbale differente. Dans 2:213, le substantif al-kitab pointe vers le Livre revele transmis aux prophetes.'
  },
  {
    verse_id: 220, word_key: 'ktb', position: 10,
    conceptName: 'Obligation/Decret',
    field: 'axe5_frequence',
    newText: 'La racine k-t-b apparait dans plus de 319 occurrences coraniques. La distinction entre al-kitab (le Livre) et kutiba (il a ete prescrit) est importante : la forme verbale passive exprime l\'obligation, le nom defini exprime le Livre revele. La frequence du nom al-kitab en contexte prophetique oriente vers le sens de Livre plutot que decret.'
  },
  // --- V217 (verse_id=224) dyn pos=13 ---
  {
    verse_id: 224, word_key: 'dyn', position: 13,
    conceptName: 'Jugement/Remuneration',
    field: 'axe3_sourate',
    newText: 'Dans la sourate al-Baqarah, la racine d-y-n apparait notamment en 2:132 (din al-islam), 2:193 (jusqu\'a ce que le din soit pour Dieu), et 2:256 (pas de contrainte dans le din). Le din est l\'ordre divin — celui qui combat dans le chemin de Dieu restaure l\'ordre du din. La mort dans cet acte de restauration est une mort dans le din.'
  },
  // --- V217 (verse_id=224) qtl pos=2 ---
  {
    verse_id: 224, word_key: 'qtl', position: 2,
    conceptName: 'Combat/Mise a mort',
    field: 'axe3_sourate',
    newText: 'La racine q-t-l est tres presente dans la sourate al-Baqarah, notamment en 2:190-193 (combattez dans le chemin de Dieu), 2:216 (le combat vous a ete prescrit), 2:244, 2:251. La sourate developpe une ethique du combat : le qital est permis en defense, interdit en agression, obligatoire pour proteger l\'ordre divin contre l\'oppression.'
  },
  // --- V217 (verse_id=224) mwt pos=17 ---
  {
    verse_id: 224, word_key: 'mwt', position: 17,
    conceptName: 'Mort/Cessation',
    field: 'axe3_sourate',
    newText: 'La racine m-w-t est presente dans la sourate al-Baqarah en 2:19, 2:73, 2:164, 2:243, 2:259, etc. La mort est traitee comme une transition — non pas une fin absolue mais un passage. En 2:217, la mort survenant pendant un combat pour Dieu est contextualisee par les grands principes du verset : les oeuvres s\'annulent si on apostasie.'
  },
  // --- V217 (verse_id=224) zyl pos=11 ---
  {
    verse_id: 224, word_key: 'zyl', position: 11,
    conceptName: 'Eloignement/Ecart',
    field: 'axe3_sourate',
    newText: 'La racine z-y-l (s\'eloigner, devier de sa direction) apparait rarement dans la sourate al-Baqarah mais s\'inscrit dans le theme de la deviation par rapport au chemin droit (sabil). En 2:217, zyluhum designe l\'eloignement definitif des apostats du droit chemin — non pas une deviation temporaire mais une rupture totale avec la direction divine.'
  },
  // --- V217 (verse_id=224) ftn pos=9 "Epreuve/Tentation" ---
  {
    verse_id: 224, word_key: 'ftn', position: 9,
    conceptName: 'Epreuve/Tentation',
    field: 'axe3_sourate',
    newText: 'La racine f-t-n (epreuve, tentation, sedition, trouble) est presente dans la sourate al-Baqarah en 2:102 (les demons enseignent la fitna), 2:191 (la fitna est pire que le meurtre), 2:193 (combattre jusqu\'a ce qu\'il n\'y ait plus de fitna). La fitna est le trouble qui detourne les gens de la foi et de l\'ordre divin — elle justifie le combat defensif.'
  },
  {
    verse_id: 224, word_key: 'ftn', position: 9,
    conceptName: 'Epreuve/Tentation',
    field: 'axe4_coherence',
    newText: 'La fitna dans le Coran designe a la fois l\'epreuve (test de la foi), la tentation (seduite par l\'injustice), et la sedition (trouble de l\'ordre social). Ces trois dimensions sont liees : le mois sacre interdit le combat mais la fitna — le desordre qui detruit la foi — est pire que le combat. La logique de 2:217 est que la fitna justifie le combat en periode normalement protegee.'
  },
  // --- V217 (verse_id=224) kfr pos=5 ---
  {
    verse_id: 224, word_key: 'kfr', position: 5,
    conceptName: 'Couverture/Dissimulation',
    field: 'axe4_coherence',
    newText: 'Le Coran distingue le kufr comme acte (kafara = il a recouvert la verite) du kufr comme etat (kafir = celui qui est dans cet etat). En 2:217, le fait de combattre dans le chemin de Dieu est oppose au kufr bi-Allah — le recouvrement de la realite divine. Le kufr n\'est pas l\'ignorance mais le refus actif : on couvre ce que l\'on sait.'
  },
  // --- V220 (verse_id=227) hkm pos=8 "Jugement/Decision" (probable) ---
  {
    verse_id: 227, word_key: 'hkm', position: 8,
    conceptName: 'Jugement/Decision',
    field: 'axe1_verset',
    newText: 'Dans ce verset sur les orphelins, Dieu conclut en se declarant al-Aziz (le Puissant) al-Hakim (le Sage/Juge). Le sens Jugement/Decision est probable : Dieu juge les situations et decide de ce qui est juste dans la gestion des biens des orphelins. Mais le sens Sagesse/Maitrise (retenu) est plus adequat — Dieu n\'est pas seulement juge mais sage dans ses dispositions.'
  }
];

async function main() {
  console.log('=== FIX WARNINGS V211-220 ===\n');
  let fixed = 0, errors = 0;

  for (const fix of fixes) {
    // Recuperer la VWA
    const { data: rows, error: fetchErr } = await supabase
      .from('verse_word_analyses')
      .select('id, analysis_axes')
      .eq('verse_id', fix.verse_id)
      .eq('word_key', fix.word_key)
      .eq('position', fix.position);

    if (fetchErr || !rows || rows.length === 0) {
      console.error(`  ERREUR: VWA verse_id=${fix.verse_id} word_key=${fix.word_key} pos=${fix.position} NOT FOUND`);
      errors++;
      continue;
    }

    const row = rows[0];
    const axes = row.analysis_axes;

    if (!axes.concepts || !axes.concepts[fix.conceptName]) {
      console.error(`  ERREUR: concept "${fix.conceptName}" absent dans VWA id=${row.id}`);
      errors++;
      continue;
    }

    // Verifier que le nouveau texte fait >= 100 chars
    if (fix.newText.length < 100) {
      console.error(`  ERREUR: newText pour "${fix.conceptName}" ${fix.field} trop court (${fix.newText.length} chars)`);
      errors++;
      continue;
    }

    // Modifier l'axe
    axes.concepts[fix.conceptName][fix.field] = fix.newText;

    const { error: updateErr } = await supabase
      .from('verse_word_analyses')
      .update({ analysis_axes: axes })
      .eq('id', row.id);

    if (updateErr) {
      console.error(`  ERREUR update VWA id=${row.id}: ${updateErr.message}`);
      errors++;
    } else {
      console.log(`  OK: VWA id=${row.id} verse_id=${fix.verse_id} ${fix.word_key} pos=${fix.position} "${fix.conceptName}" ${fix.field} => ${fix.newText.length} chars`);
      fixed++;
    }
  }

  console.log(`\n=== TERMINE: ${fixed} corrections, ${errors} erreurs ===`);
}

main().catch(console.error);
