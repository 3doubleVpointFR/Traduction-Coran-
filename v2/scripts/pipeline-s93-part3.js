// Pipeline Sourate 93 (Ad-Duha) — Partie 3: Versets 9-11
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

async function upsertVWA(verse_id, word_key, sense_chosen, analysis_axes, position) {
  const { data: existing } = await sb.from('verse_word_analyses').select('id').eq('verse_id', verse_id).eq('word_key', word_key);
  if (existing && existing.length > 0) {
    await sb.from('verse_word_analyses').update({ sense_chosen, analysis_axes, position }).eq('id', existing[0].id);
    console.log(`  Updated VWA ${word_key} id=${existing[0].id}`);
  } else {
    const { data, error } = await sb.from('verse_word_analyses').insert({ verse_id, word_key, sense_chosen, analysis_axes, position }).select().single();
    if (error) console.log(`  Error VWA ${word_key}:`, error.message);
    else console.log(`  Created VWA ${word_key} id=${data.id}`);
  }
}

async function insertDaily(analysis_id, sense, arabic, phon, french) {
  const { count } = await sb.from('word_daily').select('*', { count: 'exact', head: true }).eq('analysis_id', analysis_id);
  if (count > 0) { console.log(`  Daily SKIP (${count} exist) for id=${analysis_id}`); return; }
  const rows = french.map(fr => ({ analysis_id, sense, arabic, phon, french: fr }));
  const { error } = await sb.from('word_daily').insert(rows);
  if (error) console.log(`  Daily ERROR:`, error.message);
  else console.log(`  Daily inserted ${rows.length} phrases for id=${analysis_id}`);
}

// ================================================================
// CONTEXTE SOURATE 93 (Ad-Duha / La Clarte du Matin)
// ================================================================
// Versets 9-11 : les trois injonctions finales.
// Structure parallele avec v6-8 :
// v6 orphelin → refuge  ↔  v9 orphelin → ne pas opprimer
// v7 egare → guidance   ↔  v10 demandeur → ne pas repousser
// v8 demuni → enrichi   ↔  v11 bienfait → proclamer

async function verse93_9() {
  console.log('\n=== VERSET 93:9 — فَأَمَّا ٱلْيَتِيمَ فَلَا تَقْهَرْ ===');
  const verse_id = 6088;

  // ---- YTM (ي ت م) id=664 — "orphelin" ----
  // Forme: al-yatima — nom defini par al- a l'accusatif (objet avance = taqdim)
  // Meme concept retenu que v6
  await upsertVWA(verse_id, 'ytm', 'orphelin', {
    sense_chosen: "orphelin",
    concept_chosen: "Orphelinat/Solitude",
    concepts: {
      "Orphelinat/Solitude": {
        status: "retenu",
        senses: ["etre orphelin", "orphelin", "unique"],
        proof_ctx: "Le sens Orphelinat/Solitude est retenu pour al-yatima dans ce verset. Meme analyse que v6. Le mot yatim apparait ici avec l'article al- (l'orphelin, categorie definie et connue) et a l'accusatif en position de complement d'objet avance (taqdim) — la structure fa-amma ... fa-la signifie « quant a ... ne pas ». L'orphelin est presente comme une categorie de personnes envers lesquelles une obligation s'impose. Le lien avec v6 est explicite : toi qui as ete orphelin et a recu le refuge, ne maltraite pas l'orphelin.",
        axe1_verset: "Le champ lexical (quant a, orphelin, ne pas, opprimer) est celui de l'injonction protectrice. L'orphelin est l'objet de la protection ordonnee. Le verset ne decrit pas l'orphelinat mais prescrit un comportement envers l'orphelin. Le taqdim (avancement du complement) met l'orphelin en premiere position — c'est lui le sujet de preoccupation, pas l'action.",
        axe2_voisins: "Le verset 9 fait echo au verset 6 : l'orphelin qui a recu le refuge (v6) fonde l'obligation de proteger les orphelins (v9). Les trois injonctions (v9-11) repondent aux trois bienfaits (v6-8) dans un parallelisme parfait. L'orphelin de v9 represente tous les orphelins, universalisant l'experience personnelle du prophete.",
        axe3_sourate: "Les injonctions de v9-11 sont la conclusion pratique de la sourate. Apres la reassurance (v1-5) et les preuves (v6-8), le texte demande des actes. L'orphelin est le premier destinataire de ces actes — la sourate revient a son point de depart (l'orphelinat du prophete) pour en tirer une lecon universelle.",
        axe4_coherence: "Le Coran accorde une attention particuliere aux orphelins. En 107:2 (fa-dhalika alladhi yadu''u al-yatim = c'est celui qui repousse l'orphelin), le mauvais traitement de l'orphelin est presente comme un signe de la negation du jugement. En 2:220 et 4:2-10, le Coran donne des regles detaillees sur la protection des biens et de la personne de l'orphelin.",
        axe5_frequence: "La protection de l'orphelin est un pilier de la mission du khalifa. L'orphelin est celui qui n'a pas de protecteur naturel — la communaute doit prendre le relais. C'est un test fondamental de justice : une societe qui maltraite ses orphelins a failli a sa mission."
      }
    }
  }, 1);

  // ---- QHR (ق ه ر) id=1727 — "opprimer" ----
  // Forme: fa-la taqhar — verbe inaccompli majzum (ne ... pas opprimer) — interdiction
  // Concepts: Domination/Victoire (dominer, vaincre, soumettre, opprimer)
  await upsertVWA(verse_id, 'qhr', 'opprimer', {
    sense_chosen: "opprimer",
    concept_chosen: "Domination/Victoire",
    concepts: {
      "Domination/Victoire": {
        status: "retenu",
        senses: ["dominer", "vaincre", "soumettre", "opprimer"],
        proof_ctx: "Le sens Domination/Victoire est le seul concept de la racine qhr. D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), qahara = il a domine, il a vaincu, il a soumis par la force, il a opprime. Le verbe est a l'inaccompli majzum apres la- (interdiction) : fa-la taqhar = alors ne domine pas, n'opprime pas. Le sens d'oppression est le plus adapte dans ce contexte car l'objet est l'orphelin — un etre vulnerable. Dominer un vulnerable c'est l'opprimer. Le Lane's donne aussi qahara = he overcame, overpowered, subdued, prevailed against. Dans ce verset, la negation (la taqhar = n'opprime pas) transforme la domination en interdiction — le texte ordonne de NE PAS exercer de pouvoir ecrasant sur l'orphelin.",
        axe1_verset: "Le champ lexical (quant a, orphelin, ne pas, opprimer) est un ordre negatif : ne fais pas cette chose a cette personne. Le verbe qahara implique un rapport de force — le fort ecrase le faible. L'interdiction protege l'orphelin de cette violence. Le verset ne dit pas « aide l'orphelin » (formulation positive) mais « n'opprime pas l'orphelin » (formulation negative) — c'est plus fort car il interdit le mal avant d'exiger le bien.",
        axe2_voisins: "Les trois injonctions de v9-11 alternent entre negation et affirmation. V9 : ne pas opprimer (negatif). V10 : ne pas repousser (negatif). V11 : proclamer (positif). Les deux premieres injonctions sont des interdictions — elles fixent une ligne rouge. La troisieme est un ordre positif — elle demande une action. L'oppression de l'orphelin est la premiere ligne rouge.",
        axe3_sourate: "L'oppression est l'antithese de la protection. Le prophete a recu la protection divine (v6) — il ne doit pas infliger l'oppression aux autres. La sourate transforme l'experience recue (bienfait) en devoir envers les autres (ne pas nuire, puis faire le bien). L'oppression de l'orphelin serait la trahison du bienfait recu.",
        axe4_coherence: "La racine qhr apparait en 89:17 dans un contexte similaire : « kalla bal la tukrimuna al-yatim » (mais non, vous ne respectez pas l'orphelin). En 107:2, « yadu''u al-yatim » (il repousse l'orphelin). Le Coran associe regulierement le mauvais traitement de l'orphelin a l'injustice et a la negation des valeurs. En 93:9, l'interdiction est directe et sans condition.",
        axe5_frequence: "Ne pas opprimer le vulnerable est le minimum de la justice. La mission du khalifa commence par l'abstention du mal avant l'accomplissement du bien. L'orphelin est le test ultime — si on ne peut pas s'empecher d'opprimer celui qui n'a aucune defense, on ne peut pas pretendre a la justice."
      }
    }
  }, 2);

  // --- Segments & traduction v9 ---
  const segs9 = [
    { fr: "Quant a", pos: "particule", phon: "fa-amma", arabic: "فَأَمَّا", position: 0, is_particle: true },
    { fr: "l'orphelin", pos: "nom", phon: "al-yatima", arabic: "ٱلْيَتِيمَ", position: 1, word_key: "ytm", is_particle: false, sense_retenu: "orphelin" },
    { fr: "ne l'opprime pas", pos: "verbe", phon: "fa-la taqhar", arabic: "فَلَا تَقْهَرْ", position: 2, word_key: "qhr", is_particle: false, sense_retenu: "opprimer" }
  ];

  const te9 = `§DEMARCHE§
Le verset commence par **fa-amma** (quant a, pour ce qui est de) — une structure arabe de distribution qui introduit un cas particulier et sa regle. Le mot **al-yatima** (l'orphelin) est le complement d'objet avance (taqdim) — il est place avant le verbe pour insister sur la personne concernee. La structure amma ... fa- signifie « quant a X, voici ce qui s'applique ». Le verbe **taqhar** est un inaccompli majzum (coupe) apres **la** (particule de negation/interdiction) — « ne fais pas ». La racine q-h-r signifie dominer, vaincre, soumettre par la force. D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), qahara = il a domine, il a vaincu, il a soumis. L'ensemble « fa-la taqhar » est une interdiction formelle : « ne l'opprime pas, ne le domine pas ». La structure du verset met l'orphelin en premiere position et l'interdiction en seconde — c'est d'abord la personne qui compte, ensuite la regle.

§JUSTIFICATION§
**orphelin** — Le sens retenu est « Orphelinat/Solitude ». Meme mot qu'en v6. Le mot « orphelin » est la traduction universelle de yatim.

**opprimer** — Le sens retenu est « Domination/Victoire ». Le mot « opprimer » est choisi car il decrit l'exercice d'un pouvoir ecrasant sur un etre plus faible. L'alternative « dominer » est ecartee car elle peut etre neutre (dominer dans un sport), alors que l'oppression est toujours negative. L'alternative « soumettre » est ecartee car elle implique un processus plus long et plus organise, alors que qahara peut etre un acte ponctuel de violence. L'alternative « vaincre » est ecartee car elle implique un combat, or l'orphelin n'est pas un adversaire.

§CRITIQUE§
Hamidullah traduit « Quant à l'orphelin, donc, ne le maltraite pas ». Le mot « maltraiter » est plus faible que « opprimer ». Le Lane's donne qahara comme « he overcame, overpowered, subdued » — c'est un mot de force et de pouvoir, pas juste de mauvais traitement. « Maltraiter » pourrait etre une negligence, alors que qahara est un acte de domination active. Notre traduction « ne l'opprime pas » est plus fidele a la racine qui implique un rapport de force.`;

  await sb.from('verse_analyses').update({
    segments: segs9,
    translation_explanation: te9,
    full_translation: "Quant à l'orphelin, donc, ne le maltraite pas."
  }).eq('verse_id', 6088);

  // Daily for qhr
  await insertDaily(1727, 'opprimer', 'قَهَرَ', "qahara", [
    "Il ne faut jamais opprimer les plus faibles.",
    "Ce regime opprime sa population depuis des annees.",
    "Personne n'a le droit d'opprimer un enfant."
  ]);

  console.log('VERSET 93:9 — TERMINE');
  console.log('  ytm (ي ت م) → sens "Orphelinat/Solitude" → mot francais "orphelin"');
  console.log('  qhr (ق ه ر) → sens "Domination/Victoire" → mot francais "opprimer"');
  console.log('  Traduction : "Quant a l\'orphelin, ne l\'opprime pas"');
}

async function verse93_10() {
  console.log('\n=== VERSET 93:10 — وَأَمَّا ٱلسَّآئِلَ فَلَا تَنْهَرْ ===');
  const verse_id = 6089;

  // ---- SAL (س أ ل) id=739 — "demandeur" ----
  // Forme: as-sa'ila — participe actif defini par al- a l'accusatif (celui qui demande)
  // Concepts: Requete/Interrogation (demander, questionner, interroger)
  await upsertVWA(verse_id, 'sal', 'demander', {
    sense_chosen: "demander",
    concept_chosen: "Requête/Interrogation",
    concepts: {
      "Requête/Interrogation": {
        status: "retenu",
        senses: ["demander", "questionner", "interroger"],
        proof_ctx: "Le sens Requete/Interrogation est le seul concept de la racine sal. D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), sa'ala = il a demande, il a questionne, il a interroge. Le mot as-sa'ila est un participe actif defini (celui qui demande, le demandeur) — c'est la personne qui pose une question ou qui sollicite quelque chose. Le participe actif indique que la personne fait l'action activement — elle demande. Le texte ne precise pas ce que le demandeur demande : cela peut etre de l'aide materielle, une question de connaissance, ou toute autre sollicitation. L'interdiction qui suit (ne repousse pas) s'applique a tout demandeur quel qu'il soit.",
        axe1_verset: "Le champ lexical (quant a, le demandeur, ne pas, repousser) est celui de l'accueil et du respect de la sollicitation. Le demandeur est celui qui s'adresse a quelqu'un avec un besoin — le texte interdit de le repousser. La requete est le premier pas de celui qui cherche — la repousser c'est fermer la porte a la possibilite d'aider.",
        axe2_voisins: "Le verset 10 est parallele au verset 7 (egare → guidance). L'egare est celui qui ne connait pas le chemin — le demandeur est celui qui cherche une reponse. Tous deux sont dans un etat de recherche. Le verset 7 dit que Dieu a guide l'egare, le verset 10 dit de ne pas repousser le demandeur. L'accueil du demandeur est la version humaine de la guidance divine.",
        axe3_sourate: "Dans la structure des injonctions (v9-11), le demandeur est le deuxieme cas apres l'orphelin. Si l'orphelin represente la vulnerabilite sociale, le demandeur represente le besoin actif — celui qui fait la demarche de demander. Le texte protege aussi bien celui qui ne peut pas demander (l'orphelin) que celui qui demande.",
        axe4_coherence: "La racine sal est tres frequente dans le Coran. En 2:177, la depense pour les demandeurs (al-sa'ilin) est citee comme un acte de piete. En 51:19, « wa-fi amwalihim haqqun lil-sa'ili wal-mahrum » (dans leurs biens il y a un droit pour le demandeur et le prive). Le demandeur a un droit dans le Coran — pas seulement une faveur mais un droit.",
        axe5_frequence: "Accueillir le demandeur est un devoir du khalifa. La mission de l'etre humain inclut la reponse aux besoins des autres. Le demandeur est celui qui exprime un besoin — le repousser c'est trahir la mission de justice et de solidarite."
      }
    }
  }, 1);

  // ---- NHR (ن ه ر) id=397 — "repousser / interdire" ----
  // Forme: fa-la tanhar — verbe inaccompli majzum (ne repousse pas)
  // Concepts: Eau/Cours d'eau, Clarte/Jour, Sens isole/Interdire, Sens isole/Creuser
  // Le sens « interdire/repousser » est dans « Sens isole/Interdire »
  await upsertVWA(verse_id, 'nhr', 'repousser', {
    sense_chosen: "interdire",
    concept_chosen: "Sens isolé/Interdire",
    concepts: {
      "Sens isolé/Interdire": {
        status: "retenu",
        senses: ["interdire"],
        proof_ctx: "Le sens Interdire est retenu pour tanhar dans ce verset. D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), nahara = il a repousse avec durete, il a gronde, il a rabroue, il a interdit avec brusquerie. Le Lane's precise : nahara al-sa'ila = il a repousse le demandeur avec des mots durs. Le verbe est a l'inaccompli majzum apres la (interdiction) : la tanhar = ne repousse pas, ne rabroue pas. Le sens d'eau et de cours d'eau (nahr = riviere) est un homonyme qui n'a aucun rapport avec le contexte — le verset parle du comportement envers un demandeur, pas de geographie. Le sens de clarte/jour (nahar = jour) est egalement hors contexte. La difference philosophique est nette : interdire/repousser est un acte de rejet dirige vers une personne, tandis que riviere et jour sont des realites naturelles impersonnelles. Le verbe nahara dans le sens de repousser est un acte verbal — c'est avec les mots qu'on rabroue, pas avec les mains. C'est la violence verbale envers le demandeur qui est interdite.",
        axe1_verset: "Le champ lexical (demandeur, ne pas, repousser) decrit une interaction entre deux personnes : celui qui demande et celui qui repond. Le verbe tanhar est la reponse a eviter — une reponse dure et brusque qui humilie le demandeur. Le verset protege la dignite du demandeur : meme si on ne peut pas satisfaire sa requete, on ne doit pas le rabrouer.",
        axe2_voisins: "Le verset 10 est parallele au verset 9 dans sa structure (amma ... fa-la) — deux interdictions consecutives. V9 interdit l'oppression de l'orphelin (violence physique ou de pouvoir), v10 interdit le rabrouement du demandeur (violence verbale). Les deux protegent la dignite des personnes vulnerables. Le verset 11 (positif) demandera la proclamation des bienfaits.",
        axe3_sourate: "L'interdiction de repousser le demandeur s'inscrit dans le theme de la gratitude et de la generosite. Le prophete, qui a recu la guidance quand il etait egare (v7), ne doit pas repousser ceux qui cherchent. L'accueil du demandeur est la manifestation humaine de la grace recue.",
        axe4_coherence: "En 17:23, le Coran dit « wa-la tanharhuma » (ne les rabroue pas) en parlant des parents — meme verbe nahara, meme interdiction de la durete verbale. Le verbe nahara dans le Coran est toujours lie a la violence verbale, au rejet brusque. En 80:10 (amma man istghna, fa-anta lahu tasadda), le Coran reproche de se tourner vers le riche et d'ignorer celui qui cherche.",
        axe5_frequence: "Ne pas repousser le demandeur est une condition de la mission du khalifa. La justice commence par l'ecoute. Celui qui repousse le demandeur ferme la porte au dialogue et a la solidarite. L'accueil de la demande — meme si on ne peut pas y repondre — est un acte de respect de la dignite humaine."
      },
      "Eau/Cours d'eau": {
        status: "nul",
        senses: ["riviere", "fleuve", "couler"],
        proof_ctx: "Le sens de riviere et de cours d'eau est un homonyme de la racine nhr qui n'a aucun rapport avec le contexte du verset. Le verset parle du comportement envers un demandeur, pas de geographie."
      },
      "Clarté/Jour": {
        status: "nul",
        senses: ["jour", "clarte"],
        proof_ctx: "Le sens de jour et de clarte est un autre homonyme sans rapport avec le contexte. Le verset est une injonction comportementale, pas une description temporelle."
      }
    }
  }, 2);

  // --- Segments & traduction v10 ---
  const segs10 = [
    { fr: "Et quant au", pos: "particule", phon: "wa-amma", arabic: "وَأَمَّا", position: 0, is_particle: true },
    { fr: "demandeur", pos: "nom", phon: "as-sa'ila", arabic: "ٱلسَّآئِلَ", position: 1, word_key: "sal", is_particle: false, sense_retenu: "demander" },
    { fr: "ne le repousse pas", pos: "verbe", phon: "fa-la tanhar", arabic: "فَلَا تَنْهَرْ", position: 2, word_key: "nhr", is_particle: false, sense_retenu: "interdire" }
  ];

  const te10 = `§DEMARCHE§
Le verset suit la meme structure que le verset 9 : **wa-amma** (et quant a) introduit le second cas. Le mot **as-sa'ila** est un participe actif defini par al- (une forme qui dit que la personne fait l'action activement) de la racine s-'-l — « celui qui demande ». Le participe actif indique que le demandeur est quelqu'un qui fait activement la demarche de demander — ce n'est pas un etat passif mais une action. L'article al- (le) generalise : il ne s'agit pas d'un demandeur precis mais de tout demandeur. Le verbe **tanhar** est un inaccompli majzum apres **la** (interdiction) de la racine n-h-r — « ne repousse pas, ne rabroue pas ». D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), nahara signifie « repousser avec durete, rabrouer, gronder ». C'est un acte verbal — c'est avec les mots et le ton qu'on rabroue, pas avec les mains. L'interdiction porte sur la maniere de repondre, pas sur le fait de refuser : on peut ne pas pouvoir aider, mais on ne doit pas humilier.

§JUSTIFICATION§
**demandeur** — Le sens retenu est « Requete/Interrogation ». Le mot « demandeur » traduit le participe actif sa'il — celui qui demande. L'alternative « mendiant » est ecartee car elle restreint la demande a l'aumone materielle, alors que sa'il peut designer tout type de demandeur (question de savoir, aide, conseil). L'alternative « questionneur » est ecartee car elle oriente vers la seule curiosite intellectuelle.

**repousser** — Le sens retenu est « Interdire » (dans le sens de repousser avec durete). Le mot « repousser » est choisi car il capture le mouvement de rejet — on ecarte la personne loin de soi. L'alternative « rabrouer » est plus precise mais moins courante en francais quotidien. L'alternative « gronder » est ecartee car elle implique une relation d'autorite (parent-enfant), alors que le verset parle de toute interaction.

§CRITIQUE§
Hamidullah traduit « Quant au demandeur, ne le repousse pas ». La traduction est identique a la notre sur le fond. Certaines traductions utilisent « mendiant » au lieu de « demandeur » — c'est une restriction interpretative. Le texte arabe dit as-sa'il (le demandeur), pas al-faqir (le pauvre) ni al-miskin (le necessiteux). Le demandeur peut demander n'importe quoi : de l'argent, du savoir, un conseil, de l'aide. Restreindre a « mendiant » reduit la portee universelle de l'injonction.`;

  await sb.from('verse_analyses').update({
    segments: segs10,
    translation_explanation: te10,
    full_translation: "Quant au demandeur, ne le repousse pas."
  }).eq('verse_id', 6089);

  console.log('VERSET 93:10 — TERMINE');
  console.log('  sal (س أ ل) → sens "Requete/Interrogation" → mot francais "demandeur"');
  console.log('  nhr (ن ه ر) → sens "Sens isole/Interdire" → mot francais "repousser"');
  console.log('  Traduction : "Et quant au demandeur, ne le repousse pas"');
}

async function verse93_11() {
  console.log('\n=== VERSET 93:11 — وَأَمَّا بِنِعْمَةِ رَبِّكَ فَحَدِّثْ ===');
  const verse_id = 6090;

  // ---- NEM (ن ع م) id=264 — "bienfait" ----
  // Forme: bi-ni'mati — nom en idafa au genitif avec preposition bi (par le bienfait de)
  // Concepts: Douceur/Aisance, Bienfait/Faveur, Betail/Animaux, Affirmation, etc.
  await upsertVWA(verse_id, 'nem', 'bienfait', {
    sense_chosen: "bienfait",
    concept_chosen: "Bienfait/Faveur",
    concepts: {
      "Bienfait/Faveur": {
        status: "retenu",
        senses: ["bienfait", "faveur", "combler"],
        proof_ctx: "Le sens Bienfait/Faveur est retenu pour ni'mati dans ce verset. D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), ni'ma = bienfait, faveur, grace, don agreable. Le mot ni'mati est en idafa avec rabbika (ton seigneur) — « le bienfait de ton seigneur ». La preposition bi- (par, au sujet de) lie le bienfait au verbe haddith (proclame, parle de). Le verset ordonne de parler du bienfait de son seigneur — c'est un acte de reconnaissance et de proclamation publique. Le sens Douceur/Aisance est philosophiquement distinct : la douceur est un etat sensoriel agreable, tandis que le bienfait est un don recu. Le verset parle specifiquement de ce que Dieu a donne (les bienfaits rappeles en v6-8), pas d'un etat de confort. Le sens Betail/Animaux et les autres sens isoles sont hors contexte.",
        axe1_verset: "Le champ lexical (quant au, bienfait, de ton seigneur, proclame) est celui de la gratitude active. Le bienfait est l'objet de la proclamation. Le verset ordonne de parler publiquement des bienfaits recus — c'est un acte de temoignage. La preposition bi- (au sujet de) indique que le bienfait est le theme du discours, pas un instrument.",
        axe2_voisins: "Le verset 11 est la troisieme et derniere injonction, parallele au verset 8 (demuni → enrichi). Apres avoir recu l'enrichissement (v8), le prophete doit proclamer ce bienfait (v11). La proclamation est la forme supreme de la gratitude — pas juste ressentir la reconnaissance, mais la dire publiquement. Les trois injonctions forment un crescendo : ne pas nuire (v9), ne pas rejeter (v10), proclamer activement (v11).",
        axe3_sourate: "Le verset 11 est le point culminant de la sourate. Toute la structure — serments (v1-2), negation (v3), promesses (v4-5), preuves (v6-8), interdictions (v9-10) — converge vers cet ordre final : proclame les bienfaits de ton seigneur. C'est la reponse definitive a l'inquietude initiale : non seulement Dieu n'a pas abandonne, mais il a tant donne qu'il faut le proclamer.",
        axe4_coherence: "La racine nem est omnipresente dans le Coran. En 14:34, « wa-in ta'uddu ni'mata Allahi la tuhsuha » (si vous comptiez les bienfaits de Dieu, vous ne pourriez pas les denombrer). En 16:18, meme formule. Le bienfait divin est un theme central et la gratitude envers ces bienfaits est une obligation fondamentale dans le Coran. En 55:13, « fa-bi-ayyi ala'i rabbikuma tukadhdhibani » (lequel des bienfaits de votre seigneur niez-vous ?) — la meme logique de rappel et de proclamation.",
        axe5_frequence: "La proclamation des bienfaits est un acte qui sert directement la mission du khalifa. Reconnaitre et temoigner des bienfaits divins fonde la gratitude collective, qui a son tour motive la justice et la solidarite. Celui qui reconnait avoir recu est plus enclin a donner aux autres."
      },
      "Douceur/Aisance": {
        status: "peu_probable",
        senses: ["douceur", "tendresse", "aisance", "confort"],
        proof_ctx: "Le sens Douceur/Aisance designe un etat sensoriel ou emotionnel agreable — la douceur, le confort, l'aisance de vie. Or dans le verset, le mot ni'ma est en idafa avec rabbika (ton seigneur) et fait l'objet d'un verbe de proclamation (haddith). On ne proclame pas une douceur — on proclame un bienfait. La douceur est un etat qu'on ressent, le bienfait est un don qu'on reconnait. La difference philosophique est celle entre un etat passif (ressentir de l'aisance) et un don actif (recevoir un bienfait d'un donneur identifie).",
        axe1_verset: "Le champ lexical (de ton seigneur, proclame) implique un don recu d'un donneur et un acte de reconnaissance publique. La douceur n'a pas de donneur specifique — c'est un etat impersonnel. Le bienfait, lui, a un auteur (ton seigneur) et un destinataire (toi).",
        axe2_voisins: "Les versets 6-8 rappellent des bienfaits concrets (refuge, guidance, enrichissement), pas des etats de douceur. Le verset 11 renvoie a ces bienfaits precis.",
        axe3_sourate: "Le theme de la sourate est la reassurance par le rappel des bienfaits divins, pas par la description d'un etat de confort.",
        axe4_coherence: "Le Coran utilise ni'ma principalement au sens de bienfait et de faveur divine, pas de douceur sensorielle.",
        axe5_frequence: "La douceur est un etat personnel qui ne se proclame pas de la meme maniere qu'un bienfait recu."
      },
      "Bétail/Animaux": {
        status: "nul",
        senses: ["betail", "troupeau"],
        proof_ctx: "Le sens de betail est un sens derive et contextuel de la racine nem qui n'a aucun rapport avec ce verset. Le contexte est clairement celui de la gratitude et de la proclamation, pas de l'elevage."
      }
    }
  }, 1);

  // ---- RBB (ر ب ب) id=253 — "seigneur" ----
  // Forme: rabbika — nom en idafa au genitif avec suffixe possessif
  await upsertVWA(verse_id, 'rbb', 'seigneur', {
    sense_chosen: "seigneur",
    concept_chosen: "Seigneurie/Autorité bienveillante",
    concepts: {
      "Seigneurie/Autorité bienveillante": {
        status: "retenu",
        senses: ["seigneur", "maitre", "proprietaire", "celui qui eleve"],
        proof_ctx: "Le sens Seigneurie/Autorite bienveillante est retenu pour rabbika dans ce verset. Troisieme occurrence dans la sourate (apres v3 et v5). Ici rabbika est au genitif dans une construction idafa (ni'mati rabbika = le bienfait de ton seigneur). La seigneurie est ici celle du bienfaiteur — c'est le seigneur qui est la source des bienfaits a proclamer. Le fait que le texte dise « le bienfait de TON seigneur » (avec le possessif) souligne encore la relation personnelle entre le seigneur et celui qu'il a comble.",
        axe1_verset: "Le champ lexical (bienfait, de ton seigneur, proclame) identifie le seigneur comme la source du bienfait. C'est sa seigneurie bienveillante qui est a l'origine des dons rappeles en v6-8.",
        axe2_voisins: "Rabbuka/rabbika apparait trois fois dans la sourate (v3, v5, v11) — au debut de la section de reassurance, au centre (promesse de don), et a la fin (source du bienfait a proclamer). Le seigneur encadre toute la sourate.",
        axe3_sourate: "La seigneurie divine est le fil conducteur de la sourate : le seigneur n'abandonne pas (v3), le seigneur donne (v5), le seigneur est la source des bienfaits (v11).",
        axe4_coherence: "Usage parfaitement coherent avec le Coran.",
        axe5_frequence: "Reconnaitre la seigneurie divine et proclamer ses bienfaits est un acte fondateur de la mission du khalifa."
      },
      "Éducation/Accompagnement": {
        status: "probable",
        senses: ["elever un enfant", "eduquer"],
        proof_ctx: "Meme analyse que v5. Le sens Education/Accompagnement est philosophiquement proche de la seigneurie mais trop restreint. Ici, le seigneur est la source de bienfaits qui depassent l'education : refuge, guidance ET enrichissement. La seigneurie englobe ces trois dimensions, l'education n'en couvre qu'une.",
        axe1_verset: "Le bienfait de ton seigneur (ni'mati rabbika) englobe tout ce qui a ete rappele en v6-8. L'education serait un sous-ensemble trop etroit.",
        axe2_voisins: "Les trois bienfaits de v6-8 depassent le cadre educatif.",
        axe3_sourate: "La sourate decrit une seigneurie globale, pas uniquement educative.",
        axe4_coherence: "Le Coran utilise rabb dans un sens bien plus large que l'education.",
        axe5_frequence: "L'education est un aspect de la mission du khalifa, mais la seigneurie en est le cadre complet."
      }
    }
  }, 2);

  // ---- HDV (ح د ث) id=1649 — "proclamer / parler de" ----
  // Forme: fa-haddith — verbe imperatif forme II (proclame ! parle !)
  // NOTE: step1 a hdv comme word_key, la racine correcte est hdth (ح د ث) id=1649
  // Concepts: Narration/Recit (parler, raconter), Nouveaute (evenement nouveau)
  await upsertVWA(verse_id, 'hdv', 'proclamer', {
    sense_chosen: "parler",
    concept_chosen: "Narration/Récit",
    concepts: {
      "Narration/Récit": {
        status: "retenu",
        senses: ["parler", "raconter"],
        proof_ctx: "Le sens Narration/Recit est retenu pour fa-haddith. D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), haddatha (forme II) = il a parle a quelqu'un, il a raconte, il a informe. La forme II intensifie le sens — haddatha n'est pas juste « dire » mais « raconter en detail, informer publiquement ». L'imperatif haddith signifie « proclame, raconte, parle de ». La particule fa- (consequence) lie cette proclamation au bienfait : « quant au bienfait de ton seigneur, PROCLAME-LE ». Le sens Nouveaute (evenement nouveau) est un sens nominal de la racine (hadath = quelque chose de nouveau) qui ne correspond pas au contexte verbal du verset. Ici le verbe est a la forme II imperative — c'est un ordre de parler, pas une description d'un evenement nouveau. La difference philosophique est celle entre un acte de communication (proclamer) et un etat objectif (etre nouveau).",
        axe1_verset: "Le champ lexical (bienfait, de ton seigneur, proclame) forme un ordre complet : voici l'objet (le bienfait), voici la source (ton seigneur), voici l'action (proclame). Le verbe haddith est l'aboutissement du verset et de toute la sourate — c'est le dernier mot, l'acte final demande. Proclamer est un acte public et volontaire — ce n'est pas juste reconnaitre interieurement, c'est dire ouvertement.",
        axe2_voisins: "Le verset 11 est la troisieme injonction, la seule positive (les deux premieres sont des interdictions). Apres « ne fais pas le mal » (v9-10), le texte ordonne « fais le bien » (v11). Et le bien ultime n'est pas un acte materiel mais un acte de parole : proclamer les bienfaits. La parole de gratitude est l'aboutissement des trois injonctions.",
        axe3_sourate: "La sourate commence par un serment solennel (v1-2) et se termine par un ordre de proclamation (v11). Les deux extremites sont des actes de parole — le serment divin et la proclamation humaine. La structure est circulaire : Dieu parle (serment) → rappel des bienfaits → l'humain parle en retour (proclamation).",
        axe4_coherence: "La racine hdth dans la forme II (haddatha) est utilisee dans le Coran pour la communication et l'information. En 99:4, « yawma'idhin tuhaddith akhbaraha » (ce jour-la elle [la terre] racontera ses nouvelles). En 2:76, « a-tuhaddithūnahum bima fataha Allahu 'alaykum » (leur racontez-vous ce que Dieu vous a ouvert?). Le verbe haddatha est toujours un acte de communication volontaire et detaillee.",
        axe5_frequence: "Proclamer les bienfaits divins est un acte fondamental pour le khalifa. La gratitude publique cree un tissu social de reconnaissance et de solidarite. Celui qui proclame les bienfaits inspire les autres a reconnaitre et a donner a leur tour. La proclamation transforme l'experience individuelle en enseignement collectif."
      },
      "Nouveauté": {
        status: "peu_probable",
        senses: ["evenement nouveau", "nouveau"],
        proof_ctx: "Le sens de nouveaute designe quelque chose qui vient d'apparaitre, un evenement inedit. C'est un sens nominal de la racine hdth (hadith = nouveau, hadath = evenement). Or dans le verset, le mot est un imperatif de la forme II verbale — c'est un ordre de parler, pas une description de quelque chose de nouveau. La difference philosophique est celle entre un acte de communication (proclamer) et une qualite d'un objet ou d'un evenement (etre nouveau). Le contexte du verset est clairement celui de la proclamation : « quant au bienfait de ton seigneur, proclame » — il n'est pas question de nouveaute.",
        axe1_verset: "Le champ lexical (bienfait, seigneur) renvoie a des bienfaits passes (v6-8), pas a des evenements nouveaux. La proclamation porte sur ce qui a deja ete donne, pas sur du nouveau.",
        axe2_voisins: "Les versets precedents rappellent des bienfaits anciens — la nouveaute est hors theme.",
        axe3_sourate: "La sourate regarde vers le passe (v6-8) et le futur (v5), mais le verset 11 demande de parler du passe, pas de signaler du nouveau.",
        axe4_coherence: "Le Coran utilise hadith comme nom (recit, nouvelle) mais ici c'est la forme II verbale qui est utilisee, au sens de raconter.",
        axe5_frequence: "La nouveaute en soi ne contribue pas directement a la mission du khalifa dans ce contexte."
      }
    }
  }, 3);

  // --- Segments & traduction v11 ---
  const segs11 = [
    { fr: "Et quant au", pos: "particule", phon: "wa-amma", arabic: "وَأَمَّا", position: 0, is_particle: true },
    { fr: "bienfait", pos: "nom", phon: "bi-ni'mati", arabic: "بِنِعْمَةِ", position: 1, word_key: "nem", is_particle: false, sense_retenu: "bienfait" },
    { fr: "de ton seigneur", pos: "nom", phon: "rabbika", arabic: "رَبِّكَ", position: 2, word_key: "rbb", is_particle: false, sense_retenu: "seigneur" },
    { fr: "proclame-le", pos: "verbe", phon: "fa-haddith", arabic: "فَحَدِّثْ", position: 3, word_key: "hdv", is_particle: false, sense_retenu: "parler" }
  ];

  const te11 = `§DEMARCHE§
Le verset suit la meme structure que les versets 9 et 10 : **wa-amma** (et quant a) introduit le troisieme et dernier cas. Le mot **ni'mati** est un nom feminin au genitif singulier, en idafa avec **rabbika** (ton seigneur) — « le bienfait de ton seigneur ». La preposition **bi-** (par, au sujet de) est ici instrumentale ou thematique — elle indique le sujet du discours. Le verbe **haddith** est un imperatif de la forme II (une forme intensive qui signifie « parler en detail, raconter, informer ») de la racine h-d-th. D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), haddatha = il a parle a quelqu'un, il a raconte, il a informe en detail. La forme II renforce le sens : ce n'est pas un simple « dis » mais un « proclame, raconte en detail, temoigne publiquement ». La particule **fa-** (consequence/ordre) precede l'imperatif. La structure complete est : quant au bienfait de ton seigneur → proclame-le. C'est le seul imperatif positif des trois injonctions (v9-10 sont des interdictions).

§JUSTIFICATION§
**bienfait** — Le sens retenu est « Bienfait/Faveur ». Le mot « bienfait » est choisi car il designe un don positif recu d'un bienfaiteur identifie. L'alternative « grace » est ecartee car c'est un terme du vocabulaire religieux chretien qui porte des connotations theologiques specifiques (grace divine = don immmerite). L'alternative « faveur » est ecartee car elle implique un traitement preferentiel, alors que le bienfait est un don sans comparaison avec d'autres.

**seigneur** — Le sens retenu est « Seigneurie/Autorite bienveillante ». Troisieme occurrence dans la sourate. Le seigneur est ici la source du bienfait — c'est son autorite bienveillante qui a produit les dons rappeles en v6-8.

**proclame** — Le sens retenu est « Narration/Recit ». Le mot « proclamer » est choisi car il capture la dimension publique et volontaire de l'acte. L'alternative « parle » est ecartee car elle est trop neutre — parler peut etre prive et informel, alors que haddith a la forme II implique un recit detaille et intentionnel. L'alternative « raconte » est ecartee car elle implique un recit narratif (avec un debut et une fin), alors que la proclamation est un temoignage public qui peut prendre n'importe quelle forme.

§CRITIQUE§
Hamidullah traduit « Et quant au bienfait de ton Seigneur, proclame-le ». La traduction est identique a la notre. C'est un des rares versets ou les traductions courantes sont parfaitement alignees avec l'etymologie pure. Le sens est direct et sans ambiguite — la racine h-d-th a la forme II imperative ne laisse pas de place a l'interpretation.`;

  await sb.from('verse_analyses').update({
    segments: segs11,
    translation_explanation: te11,
    full_translation: "Et quant au bienfait de ton Seigneur, proclame-le."
  }).eq('verse_id', 6090);

  console.log('VERSET 93:11 — TERMINE');
  console.log('  nem (ن ع م) → sens "Bienfait/Faveur" → mot francais "bienfait"');
  console.log('  rbb (ر ب ب) → sens "Seigneurie/Autorite bienveillante" → mot francais "seigneur"');
  console.log('  hdv/hdth (ح د ث) → sens "Narration/Recit" → mot francais "proclamer"');
  console.log('  Traduction : "Et quant au bienfait de ton seigneur, proclame-le"');
}

async function main() {
  await verse93_9();
  await verse93_10();
  await verse93_11();
  console.log('\n=== PARTIE 3 TERMINEE (versets 9-11) ===');
}

main().catch(console.error);
