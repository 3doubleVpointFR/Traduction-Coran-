const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// =====================================================
// SCRIPT DE CORRECTION — SOURATE 2 VERSETS 221-230
// Corrections ciblées sur les VWAs listées
// =====================================================

async function fetchVWA(verse_id, word_key, position) {
  const { data, error } = await supabase
    .from('verse_word_analyses')
    .select('id, analysis_axes, sense_chosen')
    .eq('verse_id', verse_id)
    .eq('word_key', word_key)
    .eq('position', position)
    .single();
  if (error) {
    console.error(`  FETCH ERROR [verse_id=${verse_id}, word_key=${word_key}, pos=${position}]:`, error.message);
    return null;
  }
  return data;
}

async function updateVWA(id, updatedAxes, senseChosen) {
  const { error } = await supabase
    .from('verse_word_analyses')
    .update({ analysis_axes: updatedAxes, sense_chosen: senseChosen })
    .eq('id', id);
  if (error) {
    console.error(`  UPDATE ERROR [id=${id}]:`, error.message);
    return false;
  }
  return true;
}

// =====================================================
// ERREUR 1: V221 nwr pos=7 — verse_id=228
// Mettre "Lumière/Clarté" en status 'retenu' avec 5 axes
// =====================================================
async function fixV221_nwr() {
  console.log('\n--- ERREUR 1: V221 nwr pos=7 ---');
  const vwa = await fetchVWA(228, 'nwr', 7);
  if (!vwa) return;
  console.log('  Existant id:', vwa.id);
  console.log('  concept_chosen actuel:', vwa.analysis_axes?.concept_chosen);

  const updatedAxes = { ...vwa.analysis_axes };
  if (!updatedAxes.concepts) updatedAxes.concepts = {};

  updatedAxes.concept_chosen = 'Lumière/Clarté';
  updatedAxes.sense_chosen = 'feu/lumiere';

  updatedAxes.concepts['Lumière/Clarté'] = {
    status: 'retenu',
    senses: ['lumière', 'clarté', 'feu', 'source lumineuse', 'nūr', 'nār'],
    proof_ctx: "La racine ن و ر (n-w-r) désigne à la fois la lumière (nūr) et le feu (nār). Le mot an-nāri est le feu — source première de lumière dans l'expérience humaine. Le concept Lumière/Clarté englobe le feu comme sa manifestation la plus brute et directe.",
    axe1_verset: "Le mot an-nāri (le feu) clôt la première moitié de l'antithèse : « eux appellent au feu, Dieu appelle au jardin ». La racine ن و ر désigne à la fois le feu et la lumière dans la langue arabe classique — le feu est la source première de clarté et de lumière dans l'expérience humaine. Le concept Lumière/Clarté englobe ainsi le feu comme sa manifestation la plus brute et la plus directe. La nār (feu) est la lumière non maîtrisée, aveuglante et destructrice — ce que ceux qui appellent au désordre proposent comme destination.",
    axe2_voisins: "Le verset 221 construit une antithèse entre le feu (nār) et le jardin (janna). Le verset 220 parlait de la connaissance divine qui distingue le corrupteur du réformateur. Le feu ici n'est pas une punition explicite mais ce vers quoi on est appelé par ceux qui associent — l'orientation ultime de leur invitation est destructrice, là où Dieu oriente vers le jardin et le pardon.",
    axe3_sourate: "La paire nār/janna (feu/jardin) est l'une des antithèses structurantes de la sourate al-Baqarah. En 2:24, ceux qui ne peuvent rivaliser avec le Coran craignent le feu. En 2:39, ceux qui refusent les signes sont les compagnons du feu. Le feu désigne dans la sourate l'orientation de ceux qui s'opposent à Dieu — il est mentionné comme destination de l'invitation des polythéistes.",
    axe4_coherence: "La racine ن و ر est une des racines les plus riches du Coran — nūr (lumière de Dieu), nār (feu), tanwīr (illuminer). Dans les autres versets, Dieu est décrit comme la lumière des cieux et de la terre (24:35), tandis que le feu est la destination opposée. L'association de nār et nūr dans la même racine montre que le feu et la lumière partagent une nature commune — l'un illumine et guide, l'autre consume et détruit.",
    axe5_frequence: "Pour le khalifa, la distinction entre la lumière qui guide et le feu qui consume est une métaphore de gouvernance. Une invitation vers le feu est une invitation vers la destruction collective. Le khalifa doit orienter la communauté vers ce qui la préserve et l'illumine, pas vers ce qui la consume."
  };

  // Mettre les autres concepts en nul
  if (updatedAxes.concepts['Sens isolé/Fleur']) {
    updatedAxes.concepts['Sens isolé/Fleur'] = {
      ...updatedAxes.concepts['Sens isolé/Fleur'],
      status: 'nul',
      proof_ctx: "Sens isolé/Fleur — contexte non applicable ici."
    };
  }
  if (updatedAxes.concepts['Sens isolé/Fuir']) {
    updatedAxes.concepts['Sens isolé/Fuir'] = {
      ...updatedAxes.concepts['Sens isolé/Fuir'],
      status: 'nul',
      proof_ctx: "Sens isolé/Fuir — contexte non applicable ici."
    };
  }

  const ok = await updateVWA(vwa.id, updatedAxes, 'feu/lumiere');
  if (ok) console.log('  ✓ V221 nwr pos=7 corrigé → concept_chosen="Lumière/Clarté" status=retenu');
}

// =====================================================
// ERREUR 2: V221 amn pos=2 — verse_id=228
// Ajouter 5 axes pour "Sécurité/Confiance" (probable)
// =====================================================
async function fixV221_amn() {
  console.log('\n--- ERREUR 2: V221 amn pos=2 ---');
  const vwa = await fetchVWA(228, 'amn', 2);
  if (!vwa) return;
  console.log('  Existant id:', vwa.id);

  const updatedAxes = { ...vwa.analysis_axes };
  if (!updatedAxes.concepts) updatedAxes.concepts = {};

  // Merge les axes pour "Sécurité/Confiance" sans toucher aux autres
  const existing = updatedAxes.concepts['Sécurité/Confiance'] || {};
  updatedAxes.concepts['Sécurité/Confiance'] = {
    ...existing,
    status: existing.status || 'probable',
    axe1_verset: "Le contexte du verset est le mariage avec les polythéistes interdit jusqu'à ce qu'ils « croient » (yuʾminna). Si l'on retenait « Sécurité/Confiance » pour ce mot, le verset dirait : attendez qu'ils accordent la sécurité ou la confiance. Mais la structure grammaticale est yuʾminna (Form IV, verbe inaccompli 3FP) — elle s'applique à un groupe qui doit faire l'action. « Accorder la sécurité » est possible grammaticalement mais contextuel : c'est la foi (engagement intérieur) qui est demandée, pas une promesse de sécurité.",
    axe2_voisins: "Dans le verset 220 et les versets précédents de la sourate, le contexte est la relation entre ceux qui croient et ceux qui associent. La foi (amāna/īmān) est l'élément distinctif entre les deux groupes — ce n'est pas simplement une promesse de sécurité.",
    axe3_sourate: "La racine a-m-n est utilisée systématiquement dans la sourate pour désigner la foi en Dieu et au Jour Dernier (iman), la foi comme engagement de l'être entier. Les polythéistes ne manquent pas de « sécurité » dans leur relation aux croyants — ils manquent de la foi (iman).",
    axe4_coherence: "Dans les autres versets du Coran, la distinction entre amāna (sécurité/garantie) et iman (foi) est précise. Les interdictions de mariage avec les polythéistes sont toujours liées à leur absence d'iman (foi), pas à leur absence d'amāna (garantie de sécurité). En 60:10, la même condition s'applique aux femmes qui émigrent — leur iman est testé.",
    axe5_frequence: "Pour le khalifa, la distinction entre Foi/Adhésion (engagement intérieur, valeur) et Sécurité/Confiance (promesse externe) est fondamentale. Dans les politiques sociales et matrimoniales, c'est l'orientation intérieure qui crée des unions durables, pas simplement les garanties contractuelles."
  };

  const ok = await updateVWA(vwa.id, updatedAxes, vwa.sense_chosen);
  if (ok) console.log('  ✓ V221 amn pos=2 corrigé → 5 axes ajoutés pour "Sécurité/Confiance"');
}

// =====================================================
// ERREUR 3: V221 byn pos=11 — verse_id=228
// Ajouter 5 axes pour "Séparation/Distance" (probable)
// =====================================================
async function fixV221_byn() {
  console.log('\n--- ERREUR 3: V221 byn pos=11 ---');
  const vwa = await fetchVWA(228, 'byn', 11);
  if (!vwa) return;
  console.log('  Existant id:', vwa.id);

  const updatedAxes = { ...vwa.analysis_axes };
  if (!updatedAxes.concepts) updatedAxes.concepts = {};

  const existing = updatedAxes.concepts['Séparation/Distance'] || {};
  updatedAxes.concepts['Séparation/Distance'] = {
    ...existing,
    status: existing.status || 'probable',
    axe1_verset: "Le verset 221 termine sur yubayyinu (il clarifie/explique). Si l'on retenait « Séparation/Distance », le verset dirait « il sépare/distance Ses signes pour les gens ». Grammaticalement, yubayyinu (Form II de b-y-n, inaccompli 3MS) peut fonctionner avec les deux sens — clarifier et séparer/distinguer sont connexes. Mais dans le contexte, l'acte de Dieu est de rendre visible (clarifier) pas de créer une distance.",
    axe2_voisins: "Les versets précédents parlent d'une communauté qui a besoin de guidance. La clarification (bayān) de Dieu est une aide à la compréhension, pas une mise à distance. Le contexte pédagogique penche vers « Clarté/Évidence ».",
    axe3_sourate: "La sourate al-Baqarah utilise byyn systématiquement dans le sens de clarification/exposition des signes divins. En 2:118, ceux qui ne savent pas demandent des signes — Dieu bayyana (a clarifié) pour les gens qui ont la certitude. En 2:187, Dieu yubayyinu (clarifie) Ses signes pour que les gens aient conscience.",
    axe4_coherence: "La racine b-y-n dans le Coran couvre deux pôles : bayyana (clarifier, Form II) et tabāyana (se séparer, Form VI). Dans les formules conclusives où Dieu « clarifie Ses signes », c'est toujours Form II dans le sens de rendre évident.",
    axe5_frequence: "Pour le khalifa, la clarification (bayān) des règles est un acte de gouvernance. Séparer les gens ou créer de la distance n'est pas l'objectif — rendre les règles claires et accessibles l'est."
  };

  const ok = await updateVWA(vwa.id, updatedAxes, vwa.sense_chosen);
  if (ok) console.log('  ✓ V221 byn pos=11 corrigé → 5 axes ajoutés pour "Séparation/Distance"');
}

// =====================================================
// ERREUR 4: V221 ebd pos=5 — verse_id=228
// Ajouter 5 axes pour "Adoration/Dévotion" (probable)
// =====================================================
async function fixV221_ebd() {
  console.log('\n--- ERREUR 4: V221 ebd pos=5 ---');
  const vwa = await fetchVWA(228, 'ebd', 5);
  if (!vwa) return;
  console.log('  Existant id:', vwa.id);

  const updatedAxes = { ...vwa.analysis_axes };
  if (!updatedAxes.concepts) updatedAxes.concepts = {};

  const existing = updatedAxes.concepts['Adoration/Dévotion'] || {};
  updatedAxes.concepts['Adoration/Dévotion'] = {
    ...existing,
    status: existing.status || 'probable',
    axe1_verset: "Le contexte est un esclave ('abd) croyant qui est meilleur qu'un polythéiste libre. La racine '-b-d inclut l'adoration (ibāda) et l'esclavage ('ubūdiyya). Si l'on retenait « Adoration/Dévotion » ici, le verset comparerait le « adorateur/dévot croyant » au polythéiste. Mais la forme est 'abd (nom, pas verbe) et le contraste est social (esclave vs libre) autant que spirituel.",
    axe2_voisins: "Le verset symétrique précédent parle d'une amah (servante/esclave femme) croyante. Le parallélisme structural montre que 'abd désigne le statut social (esclave) pas uniquement la dévotion spirituelle.",
    axe3_sourate: "Dans la sourate al-Baqarah, 'ibād Allāh (serviteurs de Dieu) désigne les croyants en général (2:207, 2:221). Mais dans le contexte précis de 2:221 avec « esclave vs libre », la dimension sociale de 'abd est au premier plan.",
    axe4_coherence: "Le Coran utilise 'abd dans deux registres : l'esclavage social ('abd/amah = esclave, homme/femme) et la dévotion divine ('ibāda = adoration). Dans 2:221, les deux registres coexistent — un esclave croyant est aussi un adorateur — mais le contraste principal est avec le polythéiste (pas le non-dévot).",
    axe5_frequence: "Pour le khalifa, l'abolition de la hiérarchie basée sur le statut social au profit de la foi est un principe de justice. La foi ('iman) de l'esclave le rend supérieur au polythéiste libre — c'est la valeur intérieure qui compte, pas le statut social. Cette inversion est révolutionnaire pour son époque."
  };

  const ok = await updateVWA(vwa.id, updatedAxes, vwa.sense_chosen);
  if (ok) console.log('  ✓ V221 ebd pos=5 corrigé → 5 axes ajoutés pour "Adoration/Dévotion"');
}

// =====================================================
// ERREUR 5: V221 ghfr pos=9 — verse_id=228
// Ajouter 5 axes pour "Protection" (probable)
// =====================================================
async function fixV221_ghfr() {
  console.log('\n--- ERREUR 5: V221 ghfr pos=9 ---');
  const vwa = await fetchVWA(228, 'ghfr', 9);
  if (!vwa) return;
  console.log('  Existant id:', vwa.id);

  const updatedAxes = { ...vwa.analysis_axes };
  if (!updatedAxes.concepts) updatedAxes.concepts = {};

  const existing = updatedAxes.concepts['Protection'] || {};
  updatedAxes.concepts['Protection'] = {
    ...existing,
    status: existing.status || 'probable',
    axe1_verset: "Le verset 221 emploie al-maghfira (le pardon/couverture) comme ce vers quoi Dieu appelle. Si l'on retenait « Protection » ici, Dieu appellerait vers Sa protection. Les deux sens sont liés — le pardon couvre les fautes, ce qui protège de leurs conséquences. Mais dans le contexte d'une invitation (da'wā), le pardon est plus précis : Dieu invite à revenir à Lui pour que les fautes soient couvertes.",
    axe2_voisins: "Les versets 220 et 218 mentionnaient des gens qui cherchent le bien — ici Dieu appelle vers le pardon (ghufr) et le jardin (janna). Le pardon répond aux fautes, la protection serait plus générale.",
    axe3_sourate: "La paire ghufr/rahma (pardon/miséricorde) est récurrente dans la sourate al-Baqarah. En 2:192, ghafūrun raḥīmun suit la cessation du combat. En 2:199, ghafūrun raḥīmun suit l'évocation des rites. Le ghafūr/ghufr désigne systématiquement la couverture des fautes.",
    axe4_coherence: "Le Coran utilise ghafara (pardonner/couvrir) principalement pour les fautes humaines. La « Protection » (himāya) est une autre racine. Dans le contexte de l'invitation divine, ghufr = pardon des fautes passées — distinct de la protection future.",
    axe5_frequence: "Pour le khalifa, offrir le pardon (ghufr) plutôt que simplement la protection est une politique de clémence. Couvrir les fautes passées des repentants et les réintégrer dans la communauté est plus transformateur que simplement les protéger physiquement."
  };

  const ok = await updateVWA(vwa.id, updatedAxes, vwa.sense_chosen);
  if (ok) console.log('  ✓ V221 ghfr pos=9 corrigé → 5 axes ajoutés pour "Protection"');
}

// =====================================================
// ERREUR 6: V228 qry pos=4 — verse_id=235
// Vérification du nom exact du concept puis correction
// =====================================================
async function fixV228_qry() {
  console.log('\n--- ERREUR 6: V228 qry pos=4 ---');

  // D'abord vérifier le nom exact du concept dans la base
  console.log('  Vérification du nom exact du concept pour qry...');
  const { data: waData, error: waErr } = await supabase
    .from('word_analyses')
    .select('word_key, meanings')
    .eq('word_key', 'qry')
    .single();

  if (waErr) {
    console.log('  word_analyses non trouvé pour qry:', waErr.message);
  } else {
    console.log('  word_analyses qry meanings keys:', waData?.meanings ? Object.keys(waData.meanings) : 'aucun');
  }

  const vwa = await fetchVWA(235, 'qry', 4);
  if (!vwa) return;
  console.log('  Existant id:', vwa.id);
  console.log('  concept_chosen actuel:', vwa.analysis_axes?.concept_chosen);
  console.log('  Concepts existants:', vwa.analysis_axes?.concepts ? Object.keys(vwa.analysis_axes.concepts) : 'aucun');

  // Déterminer le nom exact du concept "Lecture/Récitation" tel qu'il existe dans la base
  let conceptName = 'Lecture/Récitation';
  if (vwa.analysis_axes?.concepts) {
    const keys = Object.keys(vwa.analysis_axes.concepts);
    // Chercher le concept contenant "Lecture" ou "Récitation"
    const found = keys.find(k => k.includes('Lecture') || k.includes('citation'));
    if (found) {
      conceptName = found;
      console.log('  Nom exact trouvé dans la base:', conceptName);
    }
  }

  const updatedAxes = { ...vwa.analysis_axes };
  if (!updatedAxes.concepts) updatedAxes.concepts = {};

  updatedAxes.concept_chosen = conceptName;
  updatedAxes.sense_chosen = 'periode/cycle';

  const existing = updatedAxes.concepts[conceptName] || {};
  updatedAxes.concepts[conceptName] = {
    ...existing,
    status: 'retenu',
    senses: existing.senses || ['lire', 'réciter', 'rassembler', 'recueillir', 'période/cycle', 'qurūʾ'],
    proof_ctx: existing.proof_ctx || "La racine q-r-ʾ signifie rassembler/recueillir, d'où « lire » (rassembler les lettres en un texte) et « période » (rassemblement du flux biologique dans un cycle). Le mot qurūʾ (pluriel de qar') désigne les cycles/périodes — le concept Lecture/Récitation couvre ce sens de rassemblement cyclique.",
    axe1_verset: "Le mot qurūʾ (pluriel de qar') est le terme central du verset 228 — les femmes divorcées attendent trois qurūʾ. La racine q-r-ʾ signifie rassembler/recueillir, d'où « lire » (rassembler les lettres en un texte) et « période » (rassemblement du flux biologique dans un cycle). Le concept Lecture/Récitation (racine q-r-ʾ) couvre ainsi qurūʾ comme « recueil/rassemblement cyclique » — les trois qurūʾ sont trois cycles complets de rassemblement biologique. Ce sens est plus proche du sens concret original de la racine que l'interprétation postérieure.",
    axe2_voisins: "Les versets 226-227 traitaient du délai de quatre mois (ila') et de la décision de divorce. Le verset 228 introduit un délai différent — trois qurūʾ — spécifiquement pour confirmer l'absence de grossesse et respecter les liens biologiques. Le contexte confirme que qurūʾ désigne un cycle biologique mesurable, pas un acte de lecture.",
    axe3_sourate: "La racine q-r-ʾ n'apparaît que rarement dans la sourate al-Baqarah hors des sens juridiques de qurūʾ. La sourate n'utilise pas cette racine dans le sens de récitation du Coran. Le qurūʾ de 2:228 est spécifiquement dans le registre du droit familial.",
    axe4_coherence: "Dans le reste du Coran, iqra' (lis/récite) est le premier mot révélé, et qur'ān est l'œuvre récitée. La racine q-r-ʾ peut désigner aussi un cycle de flux dans des textes médicaux anciens. Le fait que qurūʾ soit ambigu (menstrues vs pureté entre elles) dans la jurisprudence islamique confirme que ce mot désignait un « cycle » et non un acte de lecture.",
    axe5_frequence: "Pour le khalifa, la précision du délai de qurūʾ est une règle de droit protégeant les femmes — elle garantit qu'aucune femme n'est forcée à un nouveau mariage avant d'avoir établi son état biologique. La clarté juridique du terme est cruciale pour la justice."
  };

  // Mettre les autres concepts en statut non-retenu si nécessaire
  for (const key of Object.keys(updatedAxes.concepts)) {
    if (key !== conceptName && updatedAxes.concepts[key].status === 'retenu') {
      updatedAxes.concepts[key] = {
        ...updatedAxes.concepts[key],
        status: 'probable'
      };
      console.log(`  Concept "${key}" passé de retenu à probable`);
    }
  }

  const ok = await updateVWA(vwa.id, updatedAxes, 'periode/cycle');
  if (ok) console.log(`  ✓ V228 qry pos=4 corrigé → concept_chosen="${conceptName}" status=retenu, sense_chosen="periode/cycle"`);
}

// =====================================================
// MAIN
// =====================================================
async function main() {
  console.log('=== SCRIPT DE CORRECTION — SOURATE 2 V221-230 ===');
  console.log('Date:', new Date().toISOString());

  await fixV221_nwr();
  await fixV221_amn();
  await fixV221_byn();
  await fixV221_ebd();
  await fixV221_ghfr();
  await fixV228_qry();

  console.log('\n=== CORRECTIONS TERMINÉES ===');
}

main().catch(console.error);
