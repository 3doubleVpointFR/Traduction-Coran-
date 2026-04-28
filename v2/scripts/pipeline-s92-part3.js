// Pipeline Sourate 92 (Al-Layl / La Nuit) — Partie 3: Versets 15-21
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
// CONTEXTE SOURATE 92 (Al-Layl / La Nuit) — Versets 15-21
// ================================================================
// Structure globale : sourate de 21 versets. Serments (v1-3), deux voies
// (v4), le genereux pieux (v5-7), l'avare orgueilleux (v8-11),
// avertissement (v12-14), description du feu (v15-16),
// le plus pieux (v17-21). Theme : contraste entre deux chemins.
// v15-16 : qui brulera dans le feu — le plus malheureux qui dement.
// v17-21 : le plus pieux sera ecarte du feu — il donne ses biens
// pour se purifier, sans attendre de retour, uniquement pour
// chercher la direction de son Seigneur le Tres-Haut. Il sera satisfait.

async function verse92_15() {
  console.log('\n=== VERSET 92:15 — لَا يَصْلَىٰهَآ إِلَّا ٱلْأَشْقَى ===');
  const verse_id = 6073;

  // ---- SLY (صلي) — id=1469 — "bruler" ----
  // Forme: yasla-ha = verbe inaccompli (il y brulera) + suffixe -ha (elle = le feu)
  await upsertVWA(verse_id, 'sly', 'bruler', {
    sense_chosen: "bruler",
    concept_chosen: "Combustion/Châtiment",
    concepts: {
      "Combustion/Châtiment": {
        status: "retenu",
        senses: ["bruler", "etre expose au feu", "rotir", "endurer le feu", "subir la chaleur"],
        proof_ctx: "Le sens retenu est « Combustion/Chatiment ». D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la racine s-l-y signifie bruler, etre expose a la chaleur du feu, rotir. Le verbe yasla est a l'inaccompli — il decrit une action future et continue, pas un evenement ponctuel. Le suffixe pronominal -ha (elle) renvoie au feu mentionne au verset 14 (naran talazza). Le Lane's precise que le verbe implique l'immersion dans le feu, pas un simple contact superficiel — l'etre brule entierement, endure le feu de l'interieur. La combustion est ici un chatiment, pas un accident naturel. Le feu est le resultat de la voie choisie aux versets 8-11 (l'avarice, l'orgueil, le deni). Distinction avec un simple « chauffer » : la racine porte la violence de la flamme directe, pas la tiédeur. Distinction avec « rotir » au sens culinaire : le contexte est eschatologique, pas alimentaire.",
        axe1_verset: "Le verset dit « n'y brulera que le plus malheureux ». Le verbe yasla-ha est a l'inaccompli avec negation la et exception illa — seul le plus malheureux sera concerne. Le suffixe -ha (elle) renvoie au feu du verset precedent. Le champ lexical bruler + feu + exception forme une restriction : le chatiment n'est pas universel, il est reserve a une categorie precise. L'inaccompli indique un etat prolonge — bruler n'est pas instantane mais durable. Le feu est la consequence directe de la voie decrite aux versets 8-11.",
        axe2_voisins: "Le verset 14 decrivait le feu qui flambe (naran talazza). Le verset 15 precise qui y brulera. Le verset 16 identifiera ce « plus malheureux » : celui qui dement et tourne le dos. La progression est logique : le feu (v14), celui qui y brule (v15), son identite (v16). Le feu n'est pas anonyme — il a un destinataire precis.",
        axe3_sourate: "La sourate 92 oppose deux voies depuis le verset 4. Les versets 5-7 decrivent celui qui donne et confirme le bien. Les versets 8-11 decrivent celui qui est avare et se croit autosuffisant. Le verbe yasla (bruler) est la conclusion de la deuxieme voie — l'avare orgueilleux finit dans le feu. Le feu est le point d'arrivee de la voie de la facilite trompeuse (v10).",
        axe4_coherence: "La racine s-l-y apparait dans le Coran dans des contextes de chatiment : « ils bruleront dans un feu ardent » (88:4), « il brulera dans un feu aux flammes » (111:3). Le verbe yasla est toujours associe au feu eschatologique. Le Coran ne l'utilise jamais pour un feu domestique ou un feu de camp — c'est un verbe reserve au chatiment.",
        axe5_frequence: "Pour la mission du khalifa, le verbe bruler marque l'echec total de la mission. Celui qui brule dans le feu est celui qui a refuse d'exercer sa responsabilite envers les autres (avarice) et a nie les signes divins (deni). Le feu est la consequence de l'abandon de la mission — le khalifa qui refuse de donner et de reconnoitre la verite finit par perdre tout."
      }
    }
  }, 1);

  // ---- SHQY (شقي) — id=2176 — "le plus malheureux" ----
  // Forme: al-ashqa = superlatif defini (le plus malheureux/damne)
  await upsertVWA(verse_id, 'shqy', 'le plus malheureux', {
    sense_chosen: "le plus malheureux",
    concept_chosen: "Malheur/Damnation",
    concepts: {
      "Malheur/Damnation": {
        status: "retenu",
        senses: ["etre malheureux", "etre damne", "etre miserable", "etre infortune"],
        proof_ctx: "Le sens retenu est « Malheur/Damnation ». D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la racine sh-q-y signifie etre malheureux, miserable, infortune, damne. Le mot al-ashqa est un superlatif defini (forme af'al avec al-) — le plus malheureux de tous, le comble du malheur. Le Lane's donne shaqi comme l'oppose de sa'id (heureux). Le superlatif indique le degre maximal : pas simplement un malheureux mais le plus malheureux de tous. Le malheur n'est pas subi passivement — c'est le resultat de choix actifs (dementir et tourner le dos, verset 16). Distinction avec la simple tristesse ou la melancolie : le malheur ici est eschatologique, il designe la damnation, pas un etat psychologique passager.",
        axe1_verset: "Le verset dit « n'y brulera que le plus malheureux ». Le mot al-ashqa est en position de sujet de la restriction (illa). Le superlatif defini isole un individu : non pas les malheureux en general mais le plus malheureux specifiquement. Le champ lexical feu + bruler + le plus malheureux lie la damnation au degre maximal du malheur. Le verset pose une equation : le feu n'est reserve qu'a celui qui a atteint le sommet du malheur par ses propres choix.",
        axe2_voisins: "Le verset 16 identifie ce « plus malheureux » : celui qui a dementi et s'est detourne. Le verset 17 introduit l'oppose exact : le plus pieux (al-atqa). Les deux superlatifs (al-ashqa et al-atqa) forment une paire contrastive qui structure toute la fin de la sourate. Le plus malheureux brule, le plus pieux est ecarte du feu.",
        axe3_sourate: "La sourate oppose deux voies. Le plus malheureux est la conclusion de la voie de l'avarice et du deni (versets 8-11). Le superlatif montre que cette voie mene au pire resultat possible. Le contraste avec le plus pieux (verset 17) est le climax de la sourate — les deux extremes sont presentes face a face.",
        axe4_coherence: "Le mot shaqi et ses derives apparaissent dans le Coran pour designer les damnes : « parmi vous il y aura un malheureux (shaqi) et un heureux (sa'id) » (11:105). En 19:4, Zacharie dit « je n'ai jamais ete malheureux dans mon invocation ». En 20:2, « nous n'avons pas fait descendre le Coran pour que tu sois malheureux ». Le malheur coranique est toujours lie au rapport avec Dieu — celui qui s'eloigne de Dieu devient malheureux.",
        axe5_frequence: "Pour la mission du khalifa, le malheur est l'echec existentiel. Le khalifa qui refuse sa mission (donner, reconnoitre la verite) devient le plus malheureux. Le malheur n'est pas une punition arbitraire mais la consequence naturelle de l'abandon de la mission. Le superlatif montre qu'il n'y a pas de degre intermediaire — refuser totalement mene au malheur total."
      }
    }
  }, 2);

  await sb.from('verse_analyses').update({
    translation_arab: "لَا يَصْلَىٰهَآ إِلَّا ٱلْأَشْقَى",
    full_translation: "où ne brûlera que le damné",
    segments: [
      { fr: "N'y", pos: "particule", phon: "la", arabic: "لَا", is_particle: true, position: 1 },
      { fr: "brulera", pos: "verbe", phon: "yaslaha", arabic: "يَصْلَىٰهَآ", word_key: "sly", is_particle: false, sense_retenu: "bruler", position: 2 },
      { fr: "que", pos: "particule", phon: "illa", arabic: "إِلَّا", is_particle: true, position: 3 },
      { fr: "le plus malheureux", pos: "adjectif", phon: "al-ashqa", arabic: "ٱلْأَشْقَى", word_key: "shqy", is_particle: false, sense_retenu: "etre malheureux", position: 4 }
    ],
    translation_explanation: `§DEMARCHE§
Le verset contient une restriction : la + verbe + illa + sujet — « ne brulera que ». Le verbe yasla-ha est un inaccompli de la racine s-l-y avec le suffixe pronominal -ha (elle, renvoyant au feu du verset 14). D'apres les sources etymologiques (Lane's, 1863), la racine s-l-y signifie bruler, etre expose a la chaleur du feu, endurer le feu. L'inaccompli marque une action future et continue. Le mot al-ashqa est un superlatif defini de la racine sh-q-y (etre malheureux, etre damne). Le Lane's donne shaqi comme l'oppose de sa'id (heureux). Le superlatif al-ashqa designe le plus malheureux de tous — le degre maximal du malheur. La restriction (la...illa) limite le chatiment a cette seule categorie.

§JUSTIFICATION§
**brulera** — Le sens retenu est « bruler ». Le verbe yasla traduit l'exposition au feu, l'immersion dans les flammes. L'alternative « endurer » est trop passive — la racine implique une combustion active. L'alternative « rotir » est trop culinaire pour le contexte eschatologique.

**le plus malheureux** — Le sens retenu est « etre malheureux/damne ». Le mot « le plus malheureux » traduit le superlatif al-ashqa. L'alternative « le damne » (Hamidullah) est une interpretation — le texte dit « le plus malheureux », pas « le damne ». Le malheur est la cause, la damnation est la consequence.

§CRITIQUE§
Hamidullah traduit « le damne ». Le mot arabe al-ashqa signifie litteralement « le plus malheureux », pas « le damne ». La damnation est implicite dans le contexte (bruler dans le feu) mais le mot lui-meme decrit le malheur, pas la damnation. Notre traduction « le plus malheureux » respecte le sens etymologique et laisse le contexte parler.`
  }).eq('verse_id', verse_id);

  console.log('VERSET 92:15 — TERMINE');
  console.log('  sly (ص ل ي) → "bruler" | shqy (ش ق ي) → "le plus malheureux"');
}

async function verse92_16() {
  console.log('\n=== VERSET 92:16 — ٱلَّذِى كَذَّبَ وَتَوَلَّىٰ ===');
  const verse_id = 6074;

  // ---- KDB (كذب) — id=474 — "dementir" ----
  // Forme: kadhdhaba = verbe accompli forme II (il a dementi)
  await upsertVWA(verse_id, 'kdb', 'dementir', {
    sense_chosen: "dementir",
    concept_chosen: "Mensonge/Fausseté",
    concepts: {
      "Mensonge/Fausseté": {
        status: "retenu",
        senses: ["mentir", "dementir", "declarer faux", "nier", "fausser"],
        proof_ctx: "Le sens retenu est « Mensonge/Faussete ». D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la racine k-dh-b signifie mentir, dire le faux, dementir. Le verbe kadhdhaba est a la forme II (taf'il) qui exprime l'intensite et la transitivite — il ne s'agit pas d'un simple mensonge ponctuel mais d'un deni systematique et delibere. La forme II transforme le mensonge (dire le faux) en deni actif (declarer faux ce qui est vrai). Le Lane's precise que la forme II kadhdhaba signifie « he accused of lying, he declared to be false ». Le deni porte sur les signes divins, la revelation, la verite — le plus malheureux refuse activement ce qui lui est presente comme vrai. Distinction avec « Accusation » : accuser quelqu'un est un acte dirige vers une personne. Le deni ici est dirige vers la verite elle-meme — c'est la verite qui est declaree fausse, pas une personne qui est accusee.",
        axe1_verset: "Le verset dit « celui qui a dementi et s'est detourne ». Le verbe kadhdhaba est le premier des deux actes qui definissent le plus malheureux. Le deni precede le detournement — d'abord on refuse la verite intellectuellement (kadhdhaba), puis on s'en detourne physiquement (tawalla). Le champ lexical dementir + se detourner forme une progression du refus interieur au refus exterieur. L'accompli marque un acte acheve et definitif — le deni n'est pas un doute passager mais un rejet consomme.",
        axe2_voisins: "Le verset 15 identifiait le sujet comme « le plus malheureux ». Le verset 16 le definit par deux actes : dementir et se detourner. Le verset 17 introduira l'oppose exact : le plus pieux. Le deni du verset 16 contraste avec la generosite du verset 18 — celui qui dement refuse de donner, celui qui donne confirme la verite par ses actes.",
        axe3_sourate: "La sourate oppose deux voies depuis le debut. Les versets 5-7 decrivent celui qui confirme le bien (saddaqa). Les versets 8-11 decrivent celui qui dement (kadhdhaba, verset 9 implicitement). Le verset 16 reprend ce deni et le pose comme la cause directe du chatiment. Le deni est le fil rouge de la voie du malheur dans toute la sourate.",
        axe4_coherence: "La racine k-dh-b est l'une des plus frequentes dans le Coran (plus de 180 occurrences). Le deni est le reproche le plus grave fait aux incredules : « Malheur, ce jour-la, a ceux qui dementent » (77:15). La forme II kadhdhaba est utilisee specifiquement pour le deni de la revelation : « et ils l'ont dementi alors que leurs ames en etaient convaincues » (27:14). Le deni coranique est toujours presente comme un acte volontaire, pas comme une erreur innocente.",
        axe5_frequence: "Pour la mission du khalifa, le deni est l'antithese de la mission. Le khalifa est celui qui confirme la verite et agit en consequence. Celui qui dement refuse la responsabilite inherente a sa mission — il declare faux ce qui devrait le guider. Le deni est le premier pas vers l'echec total de la mission."
      },
      "Accusation": {
        status: "nul",
        senses: ["accuser de mensonge", "incriminer"],
        proof_ctx: "L'accusation est un acte dirige vers une personne. Le contexte du verset ne mentionne aucune personne accusee — le deni est dirige vers la verite, les signes, la revelation. Le verbe kadhdhaba ici est intransitif (sans complement d'objet explicite), ce qui indique un deni general et absolu."
      }
    }
  }, 1);

  // ---- WLY (ولي) — id=599 — "se detourner" ----
  // Forme: tawalla = verbe accompli forme V (il a tourne le dos, s'est detourne)
  await upsertVWA(verse_id, 'wly', 'se detourner', {
    sense_chosen: "se detourner",
    concept_chosen: "Proximité/Protection",
    concepts: {
      "Proximité/Protection": {
        status: "retenu",
        senses: ["etre proche", "proteger", "ami", "allie", "prendre en charge", "se detourner"],
        proof_ctx: "Le sens retenu est « Proximite/Protection ». D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la racine w-l-y signifie etre proche, etre adjacent, prendre en charge, proteger, etre l'ami ou l'allie de quelqu'un. Le wali est celui qui est proche et qui protege. Cependant, le verset utilise la forme V tawalla qui est un RENVERSEMENT de ce sens fondamental. Le Lane's donne pour tawalla forme V : il s'est detourne, il a tourne le dos, il est parti en s'eloignant. La forme V (reflexif de la forme II) prend le sens de proximite et le retourne : au lieu de se rapprocher, on s'eloigne ; au lieu de proteger, on abandonne. Le tawalla est l'abandon delibere de la proximite et de la protection. L'accompli marque un acte acheve — le detournement est consomme. Distinction avec « Autorite » : l'autorite (wilaya) est un derive de la racine qui designe le pouvoir de gestion. Le contexte ici est le detournement, pas l'exercice de l'autorite.",
        axe1_verset: "Le verset dit « celui qui a dementi et s'est detourne ». Le verbe tawalla est le second acte qui definit le plus malheureux. Le detournement suit le deni : apres avoir refuse la verite intellectuellement (kadhdhaba), le plus malheureux s'en eloigne physiquement (tawalla). Le champ lexical dementir + se detourner forme une rupture totale : la tete refuse et le corps s'eloigne. L'accompli marque un acte definitif — ce n'est pas une hesitation mais un depart consomme.",
        axe2_voisins: "Le verset 15 nommait le sujet « le plus malheureux ». Le verset 16 le definit par ses actes. Le verset 17 introduira le plus pieux qui, lui, ne se detourne pas mais se rapproche par le don (verset 18). Le detournement du verset 16 contraste avec l'orientation du verset 20 — le plus malheureux tourne le dos, le plus pieux se tourne vers la direction de son Seigneur.",
        axe3_sourate: "La sourate oppose le rapprochement et l'eloignement. Les versets 5-7 decrivent celui qui donne et confirme — il se rapproche de la verite. Les versets 8-11 decrivent celui qui est avare et se croit autosuffisant — il s'eloigne. Le verbe tawalla cristallise cet eloignement : la racine w-l-y qui porte la proximite est utilisee dans sa forme de renversement pour decrire le plus malheureux.",
        axe4_coherence: "La racine w-l-y est l'une des plus riches du Coran (plus de 200 occurrences). Le wali est le proche, le protecteur, l'allie. Le verbe tawalla forme V est utilise dans le Coran pour decrire ceux qui se detournent de la verite : « et quand il tourne le dos, il s'efforce de semer la corruption sur la terre » (2:205). Le detournement est un acte grave dans le Coran car il inverse la relation de proximite que Dieu offre a l'etre humain.",
        axe5_frequence: "Pour la mission du khalifa, le detournement est l'abandon de poste. Le khalifa est celui qui reste proche de sa mission, qui protege ce qui lui est confie. Se detourner, c'est abandonner la proximite et la protection — c'est quitter la mission. Le plus malheureux est celui qui a eu la possibilite d'etre un wali (proche, protecteur) et qui a choisi de devenir un mutawalli (celui qui tourne le dos)."
      },
      "Autorité": {
        status: "nul",
        senses: ["autorite", "pouvoir", "gouvernance"],
        proof_ctx: "L'autorite (wilaya) est un derive de la racine w-l-y qui designe le pouvoir de gestion et de gouvernance. Le verset utilise la forme V tawalla qui signifie se detourner, pas exercer l'autorite. Le contexte est celui d'un abandon, pas d'un exercice de pouvoir."
      }
    }
  }, 2);

  await sb.from('verse_analyses').update({
    translation_arab: "ٱلَّذِى كَذَّبَ وَتَوَلَّىٰ",
    full_translation: "qui dément et tourne le dos",
    segments: [
      { fr: "Celui qui", pos: "pronom relatif", phon: "alladhi", arabic: "ٱلَّذِى", is_particle: true, position: 1 },
      { fr: "a dementi", pos: "verbe", phon: "kadhdhaba", arabic: "كَذَّبَ", word_key: "kdb", is_particle: false, sense_retenu: "mentir", position: 2 },
      { fr: "et s'est detourne", pos: "verbe", phon: "wa-tawalla", arabic: "وَتَوَلَّىٰ", word_key: "wly", is_particle: false, sense_retenu: "etre proche", position: 3 }
    ],
    translation_explanation: `§DEMARCHE§
Le verset est une proposition relative qui identifie « le plus malheureux » du verset 15. Le pronom relatif alladhi (celui qui) rattache ce verset au precedent. Le verbe kadhdhaba est un accompli forme II de la racine k-dh-b. D'apres les sources etymologiques (Lane's, 1863), la forme II kadhdhaba signifie dementir, declarer faux. L'accompli marque un acte acheve et definitif. Le verbe tawalla est un accompli forme V de la racine w-l-y. Le Lane's donne pour tawalla forme V : il s'est detourne, il a tourne le dos. La forme V est un renversement du sens fondamental de la racine (proximite, protection) — au lieu de se rapprocher, il s'eloigne. La coordination wa- (et) lie les deux actes en une sequence : d'abord le deni intellectuel, puis le detournement physique.

§JUSTIFICATION§
**dementi** — Le sens retenu est « mentir/dementir ». Le verbe « dementir » traduit kadhdhaba forme II comme un rejet actif de la verite. L'alternative « mentir » est trop faible — mentir est dire le faux, dementir est declarer faux ce qui est vrai. La forme II porte l'intensite du deni.

**se detourner** — Le sens retenu est « etre proche ». La racine w-l-y porte le sens de proximite. Mais la forme V tawalla renverse ce sens en « se detourner ». Le mot « se detourner » traduit cette inversion. L'alternative « tourner le dos » (Hamidullah) est equivalente mais plus idiomatique. L'alternative « partir » perd la dimension de renversement de la proximite.

§CRITIQUE§
Hamidullah traduit « qui dement et tourne le dos ». La traduction est equivalente a la notre. La difference est mineure : « tourne le dos » est plus idiomatique en francais, « se detourne » est plus proche de l'etymologie. Les deux sont acceptables.`
  }).eq('verse_id', verse_id);

  console.log('VERSET 92:16 — TERMINE');
  console.log('  kdb (ك ذ ب) → "dementir" | wly (و ل ي) → "se detourner"');
}

async function verse92_17() {
  console.log('\n=== VERSET 92:17 — وَسَيُجَنَّبُهَا ٱلْأَتْقَى ===');
  const verse_id = 6075;

  // ---- JNB (جنب) — id=1412 — "ecarter" ----
  // Forme: sayujannabha = verbe inaccompli passif forme II + sa- (futur) (il en sera ecarte)
  await upsertVWA(verse_id, 'jnb', 'ecarter', {
    sense_chosen: "ecarter",
    concept_chosen: "Côté/Éloignement",
    concepts: {
      "Côté/Éloignement": {
        status: "retenu",
        senses: ["cote", "flanc", "eviter", "s'eloigner", "ecarter", "mettre de cote"],
        proof_ctx: "Le sens retenu est « Cote/Eloignement ». D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la racine j-n-b signifie le cote, le flanc d'une chose, et par extension eviter, s'ecarter, mettre a distance. Le janb est le cote du corps — mettre quelque chose « de cote » c'est l'eloigner de soi. Le verbe yujannab est a la forme II passive (taf'il) avec le prefixe sa- (futur) — il sera ecarte, on l'ecartera. La forme II passive indique que l'ecartement est fait par un agent exterieur (Dieu ecarte le pieux du feu), pas par le pieux lui-meme. Le suffixe -ha (elle) renvoie au feu du verset 14. Le Lane's precise que jannaba signifie « he put away, removed, placed aside ». L'eloignement est actif et delibere — Dieu eloigne activement le pieux du feu. Distinction avec « Etre surnaturel » (jinn derive de la meme famille) : les etres surnaturels tirent leur nom du fait d'etre « caches, mis de cote ». Ce sens n'est pas pertinent ici — le verset parle d'ecarter du feu, pas d'etres caches.",
        axe1_verset: "Le verset dit « et le plus pieux en sera ecarte ». Le verbe sayujannabha ouvre le verset par une promesse divine. Le prefixe sa- (futur certain) exprime une promesse — l'ecartement n'est pas hypothetique mais garanti. La forme II passive montre que le pieux n'a pas a se sauver lui-meme : c'est Dieu qui l'ecarte du feu. Le suffixe -ha (elle = le feu) relie ce verset au chatiment decrit aux versets 14-16. Le champ lexical ecarter + futur + passif forme une promesse de protection divine.",
        axe2_voisins: "Le verset 15 decrivait qui brulera dans le feu (le plus malheureux). Le verset 17 decrit qui en sera ecarte (le plus pieux). Le contraste est total : bruler (yasla) versus ecarter (yujannab). Le passif du verset 17 contraste avec l'actif du verset 15 — le malheureux brule de sa propre faute, le pieux est ecarte par la grace divine. Le verset 18 precisera les actes qui meritent cet ecartement.",
        axe3_sourate: "La sourate oppose deux destins. Le feu (versets 14-16) est le destin du malheureux. L'ecartement (verset 17) est le destin du pieux. Le verbe jannaba porte l'idee de mettre a distance — Dieu place le pieux a bonne distance du feu, il le met de cote, il le protege activement. L'ecartement est la recompense de la voie de la generosite et de la piete decrite aux versets 5-7.",
        axe4_coherence: "La racine j-n-b apparait dans le Coran dans des contextes de distance et d'evitement : « Seigneur, ecarte-moi (jannibni), moi et mes fils, d'adorer les idoles » (14:35). Ibrahim demande a Dieu de l'ecarter de l'idolatrie — meme structure que le verset 17 ou Dieu ecarte le pieux du feu. Le verbe jannaba est un acte de protection divine dans les deux cas.",
        axe5_frequence: "Pour la mission du khalifa, l'ecartement est la protection divine accordee a celui qui accomplit sa mission. Le khalifa qui donne et se purifie (versets 18-20) est ecarte du feu par Dieu — sa mission accomplie le protege. L'ecartement n'est pas un merite personnel mais une grace divine en reponse a l'effort du khalifa. Le passif confirme que la protection vient de Dieu, pas de l'homme."
      },
      "Être surnaturel": {
        status: "nul",
        senses: ["jinn", "etre cache", "invisible"],
        proof_ctx: "Les etres surnaturels (jinn) tirent leur nom de la racine j-n-n (cacher), pas de j-n-b (cote). Meme si les deux familles se chevauchent etymologiquement, le verset utilise la forme II de j-n-b qui signifie ecarter, mettre de cote. Le contexte est l'ecartement du feu, pas les etres caches."
      }
    }
  }, 1);

  // ---- WQY (وقي) — id=277 — "le plus pieux" ----
  // Forme: al-atqa = superlatif defini (le plus pieux / le plus soucieux de se proteger)
  await upsertVWA(verse_id, 'wqy', 'le plus pieux', {
    sense_chosen: "le plus pieux",
    concept_chosen: "Protection/Préservation",
    concepts: {
      "Protection/Préservation": {
        status: "retenu",
        senses: ["se proteger", "se premunir", "craindre", "piete", "etre pieux"],
        proof_ctx: "Le sens retenu est « Protection/Preservation ». D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la racine w-q-y signifie se proteger, se premunir, prendre des precautions, placer un bouclier entre soi et le danger. Le muttaqi est celui qui se protege — la piete est un acte de protection de soi. Le mot al-atqa est un superlatif defini (forme af'al de ittaqa, forme VIII) — le plus soucieux de se proteger, le plus pieux de tous. Le superlatif al-atqa repond au superlatif al-ashqa du verset 15 : le plus pieux est l'oppose exact du plus malheureux. Le Lane's donne pour ittaqa : he guarded himself, he protected himself, he was cautious. La piete n'est pas une soumission passive mais une auto-protection active. Distinction avec la simple crainte : la taqwa n'est pas la peur mais la vigilance — celui qui se protege n'a pas peur, il prend des precautions.",
        axe1_verset: "Le verset dit « et le plus pieux en sera ecarte ». Le mot al-atqa est le sujet de l'ecartement. Le superlatif defini isole un individu specifique — non pas les pieux en general mais le plus pieux de tous. Le parallele avec al-ashqa (verset 15) est structurant : le plus malheureux brulera, le plus pieux sera ecarte. Les deux superlatifs forment les deux poles de la sourate. Le plus pieux est celui qui a le mieux pratique l'auto-protection spirituelle — sa piete l'a protege.",
        axe2_voisins: "Le verset 16 definissait le plus malheureux par ses actes (dementir, se detourner). Les versets 18-20 definiront le plus pieux par ses actes (donner, se purifier, ne chercher que la direction de son Seigneur). Le parallele est parfait : chaque superlatif est suivi de sa definition par les actes. Le plus malheureux refuse et s'eloigne ; le plus pieux donne et se rapproche.",
        axe3_sourate: "La sourate 92 utilise la racine w-q-y au verset 5 (ittaqa — celui qui se protege) et au verset 17 (al-atqa — le plus protege/pieux). Le verset 5 introduisait la piete comme voie ; le verset 17 montre le sommet de cette voie. Le plus pieux est celui qui a suivi la voie decrite aux versets 5-7 jusqu'a son point le plus eleve.",
        axe4_coherence: "La racine w-q-y est l'une des plus importantes du Coran (plus de 250 occurrences). Le muttaqi est la figure centrale du Coran — celui qui se protege par la foi et les actes. En 2:2, le Coran est « un guide pour les muttaqin (ceux qui se protegent) ». En 49:13, « le plus noble d'entre vous est le plus pieux (atqakum) ». Le superlatif atqa est le critere de noblesse dans le Coran.",
        axe5_frequence: "Pour la mission du khalifa, la piete est la qualite supreme. Le khalifa le plus noble est le plus pieux — celui qui se protege le mieux du mal et qui protege les autres. Le superlatif atqa montre que la piete est un effort graduel : on peut etre pieux, plus pieux, ou le plus pieux. Le khalifa vise le sommet de la piete."
      }
    }
  }, 2);

  await sb.from('verse_analyses').update({
    translation_arab: "وَسَيُجَنَّبُهَا ٱلْأَتْقَى",
    full_translation: "alors que le pieux en sera écarté",
    segments: [
      { fr: "Et", pos: "particule", phon: "wa", arabic: "وَ", is_particle: true, position: 1 },
      { fr: "sera ecarte", pos: "verbe", phon: "sayujannabha", arabic: "سَيُجَنَّبُهَا", word_key: "jnb", is_particle: false, sense_retenu: "ecarter", position: 2 },
      { fr: "le plus pieux", pos: "adjectif", phon: "al-atqa", arabic: "ٱلْأَتْقَى", word_key: "wqy", is_particle: false, sense_retenu: "se proteger", position: 3 }
    ],
    translation_explanation: `§DEMARCHE§
Le verset s'ouvre par wa- (et) qui introduit le contraste avec le destin du plus malheureux (versets 15-16). Le verbe sayujannab-ha est compose de : sa- (prefixe du futur certain), yu- (prefixe de l'inaccompli passif), jannab (forme II de la racine j-n-b — ecarter, mettre de cote), -ha (suffixe pronominal feminin renvoyant au feu). D'apres les sources etymologiques (Lane's, 1863), la racine j-n-b signifie le cote, et la forme II jannaba signifie mettre de cote, ecarter, eloigner. Le passif (yujannab) indique que l'ecartement est fait par un agent exterieur — Dieu ecarte le pieux, le pieux ne se sauve pas lui-meme. Le mot al-atqa est un superlatif defini de la racine w-q-y (se proteger, se premunir). Le Lane's donne ittaqa (forme VIII) : he guarded himself, il s'est protege. Le superlatif al-atqa designe le plus soucieux de se proteger, le plus pieux.

§JUSTIFICATION§
**sera ecarte** — Le sens retenu est « ecarter ». Le verbe traduit la forme II passive de j-n-b. L'alternative « sera eloigne » est equivalente mais moins precise — ecarter implique l'action deliberee de Dieu. Le passif est essentiel : le pieux ne s'ecarte pas lui-meme, il est ecarte par Dieu.

**le plus pieux** — Le sens retenu est « se proteger ». Le mot « le plus pieux » traduit le superlatif al-atqa. L'alternative « le plus craignant » est trop negative — la taqwa est une auto-protection, pas une peur. L'alternative « le pieux » (Hamidullah) perd le superlatif — al-atqa est le PLUS pieux, pas simplement pieux.

§CRITIQUE§
Hamidullah traduit « le pieux en sera ecarte ». Le superlatif est perdu — al-atqa signifie le PLUS pieux, pas simplement « le pieux ». Ce superlatif est important car il repond a al-ashqa (le plus malheureux) du verset 15. Les deux superlatifs forment une paire contrastive qui structure la fin de la sourate.`
  }).eq('verse_id', verse_id);

  console.log('VERSET 92:17 — TERMINE');
  console.log('  jnb (ج ن ب) → "ecarter" | wqy (و ق ي) → "le plus pieux"');
}

async function verse92_18() {
  console.log('\n=== VERSET 92:18 — ٱلَّذِى يُؤْتِى مَالَهُۥ يَتَزَكَّىٰ ===');
  const verse_id = 6076;

  // ---- ETY (أتي) — id=2040 — "donner" ----
  // Forme: yu'ti = verbe inaccompli forme IV (il donne)
  await upsertVWA(verse_id, 'ety', 'donner', {
    sense_chosen: "donner",
    concept_chosen: "Don/Attribution",
    concepts: {
      "Don/Attribution": {
        status: "retenu",
        senses: ["donner", "accorder", "attribuer", "offrir", "remettre"],
        proof_ctx: "Le sens retenu est « Don/Attribution ». D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la racine '-t-y porte le sens fondamental de venir, arriver, et par extension donner, remettre, accorder. Le verbe yu'ti est a la forme IV (if'al) qui est transitive et causative — faire venir quelque chose a quelqu'un, c'est-a-dire donner. Le Lane's donne pour la forme IV ata : he gave, he brought, he granted. L'inaccompli yu'ti indique une action habituelle et continue — le plus pieux donne regulierement, pas une seule fois. Le don est l'acte qui definit le plus pieux dans ce verset. Distinction avec « Venue/Arrivee » : la venue est le sens fondamental de la racine a la forme I (ata = il est venu). La forme IV (ata) transforme la venue en don — faire venir a autrui. Le contexte confirme : l'objet du verbe est malahu (ses biens), ce qui impose le sens de « donner ».",
        axe1_verset: "Le verset dit « celui qui donne ses biens pour se purifier ». Le verbe yu'ti ouvre la description des actes du plus pieux. Le don precede la purification — c'est en donnant que le pieux se purifie. L'objet malahu (ses biens) montre que le don est materiel, concret, couteux. L'inaccompli indique une pratique habituelle — le pieux donne continuellement. Le champ lexical donner + biens + purification forme un triptyque : l'acte, l'objet, la finalite.",
        axe2_voisins: "Le verset 17 annonçait l'ecartement du plus pieux. Le verset 18 explique pourquoi : parce qu'il donne ses biens pour se purifier. Le don est la premiere raison de l'ecartement du feu. Le verset 19 completera : ce don est desinteresse (personne ne lui doit un bienfait en retour). Le verset 20 achevera : le don est fait uniquement pour chercher la direction du Seigneur.",
        axe3_sourate: "La sourate oppose le don et l'avarice depuis le debut. Le verset 5 decrivait celui qui donne (a'ta). Le verset 8 decrivait celui qui est avare (bakhila). Le verset 18 reprend le don avec un verbe different (yu'ti au lieu de a'ta) mais la meme idee : donner est la voie de la piete. Le don est le fil rouge de la voie du bien dans toute la sourate.",
        axe4_coherence: "La racine '-t-y est l'une des plus frequentes du Coran (plus de 500 occurrences). Le don est un acte central dans le Coran : « Et donnez la zakat » (2:43), « Ce que le Messager vous a donne (atakum), prenez-le » (59:7). La forme IV ata (donner) est le verbe le plus utilise pour le don dans le Coran. Le don est presente comme la vertu cardinale du croyant.",
        axe5_frequence: "Pour la mission du khalifa, le don est l'exercice concret de la mission. Le khalifa n'est pas celui qui accumule mais celui qui distribue. Donner ses biens, c'est mettre sa richesse au service de la communaute. Le don est l'acte qui transforme la richesse personnelle en bien collectif — c'est la mission du khalifa en action."
      },
      "Venue/Arrivée": {
        status: "nul",
        senses: ["venir", "arriver", "survenir"],
        proof_ctx: "La venue est le sens fondamental de la racine a la forme I (ata = il est venu). Le verset utilise la forme IV (yu'ti) qui signifie donner, pas venir. L'objet malahu (ses biens) confirme que le verbe est transitif au sens de donner, pas intransitif au sens de venir."
      }
    }
  }, 1);

  // ---- MWL (مول) — id=1148 — "biens" ----
  // Forme: malahu = nom + suffixe possessif (ses biens)
  await upsertVWA(verse_id, 'mwl', 'biens', {
    sense_chosen: "biens",
    concept_chosen: "Richesse/Biens",
    concepts: {
      "Richesse/Biens": {
        status: "retenu",
        senses: ["richesse", "biens", "fortune", "propriete", "avoir"],
        proof_ctx: "Le sens retenu est « Richesse/Biens ». D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la racine m-w-l (ou m-a-l) signifie etre riche, posseder des biens. Le mot mal designe les biens, la richesse, la propriete, tout ce qu'une personne possede. Le Lane's donne : wealth, property, goods, possessions. Le suffixe possessif -hu (ses) rattache les biens au plus pieux — ce sont SES biens qu'il donne, pas les biens d'autrui. Le don est un sacrifice personnel, pas une redistribution des biens des autres. Le mal est un terme general qui couvre tous les types de biens : argent, terres, animaux, recoltes. Le verset ne specifie pas quel type de biens — la generalite indique que tout bien peut etre donne.",
        axe1_verset: "Le verset dit « celui qui donne ses biens pour se purifier ». Le mot malahu est l'objet du verbe yu'ti (donner). Les biens sont ce que le pieux sacrifie pour se purifier. Le suffixe possessif -hu souligne que le don vient de sa propre richesse — c'est un sacrifice personnel et volontaire. Le champ lexical donner + ses biens + purification montre que la purification passe par le detachement materiel.",
        axe2_voisins: "Le verset 17 annonçait l'ecartement du feu. Le verset 18 explique la raison : le don des biens. Le verset 19 precisera que ce don est desinteresse. Les biens du verset 18 contrastent avec l'avarice du verset 8 — l'avare retient ses biens, le pieux les donne. Les biens sont le lieu du choix entre les deux voies.",
        axe3_sourate: "La sourate oppose la generosite et l'avarice comme les deux attitudes fondamentales face aux biens. Le verset 5 introduisait le don (a'ta). Le verset 8 introduisait l'avarice (bakhila). Le verset 18 developpe : le plus pieux donne SES biens — pas des miettes mais sa richesse personnelle. Les biens sont le test concret de la piete dans cette sourate.",
        axe4_coherence: "Le mot mal apparait plus de 80 fois dans le Coran. Les biens sont un sujet majeur : « Vos biens et vos enfants ne sont qu'une epreuve » (64:15). Le Coran presente les biens comme un depot confie a l'etre humain, pas comme une propriete absolue. Donner ses biens est restituer une partie de ce depot a la communaute.",
        axe5_frequence: "Pour la mission du khalifa, les biens sont un outil de la mission, pas une fin en soi. Le khalifa gere les biens de la communaute et donne les siens propres. L'accumulation de biens sans redistribution est une trahison de la mission. Le verset montre que le plus pieux est celui qui transforme ses biens en acte de purification."
      }
    }
  }, 2);

  // ---- ZKW (زكو) — id=504 — "se purifier" ----
  // Forme: yatazakka = verbe inaccompli forme V (il se purifie / il cherche a se purifier)
  await upsertVWA(verse_id, 'zkw', 'se purifier', {
    sense_chosen: "se purifier",
    concept_chosen: "Purification/Croissance",
    concepts: {
      "Purification/Croissance": {
        status: "retenu",
        senses: ["purifier", "croitre", "augmenter", "etre pur", "prosperer"],
        proof_ctx: "Le sens retenu est « Purification/Croissance ». D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la racine z-k-w porte deux sens fondamentaux lies : purifier et faire croitre. Le Lane's donne : he purified, he increased, he was pure, he grew. Les deux sens sont lies : la purification permet la croissance — en enlevant les impuretes, on permet a la chose pure de se developper. Le verbe yatazakka est a la forme V (reflexif de la forme II) — il se purifie lui-meme, il cherche activement a se purifier. La forme V implique un effort delibere et personnel de purification. L'inaccompli indique un processus continu — la purification n'est pas un acte ponctuel mais une demarche permanente. Le mot derive aussi zakat (l'aumone legale) qui combine purification et croissance : l'aumone purifie les biens et les fait croitre en benediction.",
        axe1_verset: "Le verset dit « celui qui donne ses biens pour se purifier ». Le verbe yatazakka est en position de complement de but — le don des biens a pour finalite la purification. La purification est le resultat du don, pas un acte separe. Le champ lexical donner + biens + se purifier forme une sequence causale : donner ses biens purifie l'ame et les biens restants. La forme V (reflexive) montre que la purification est auto-dirigee — le pieux se purifie lui-meme par le don.",
        axe2_voisins: "Le verset 17 promettait l'ecartement du feu. Le verset 18 donne la premiere raison : le don pour la purification. Le verset 19 ajoutera une precision : ce don n'est pas un echange commercial (pas de bienfait a rembourser). Le verset 20 completera : la seule finalite est la direction du Seigneur. La purification du verset 18 est desinteressee (verset 19) et orientee vers Dieu (verset 20).",
        axe3_sourate: "La sourate oppose la purification et la corruption. Le verset 5 decrivait la confirmation du bien (saddaqa bil-husna). Le verset 9 decrivait le deni du bien (kadhdhaba bil-husna). Le verset 18 montre que la confirmation du bien passe par un acte concret : donner et se purifier. La purification est la consequence pratique de la piete — le pieux ne se contente pas de croire, il se purifie activement par le don.",
        axe4_coherence: "La racine z-k-w est centrale dans le Coran. La zakat est l'un des cinq piliers : « Accomplissez la priere et donnez la zakat » (2:43). Le verbe tazakka (forme V) apparait en 80:3-7 : « Quant a celui qui se croit autosuffisant, tu t'empresses vers lui, alors que cela ne t'incombe pas s'il ne se purifie pas (yazzakka) ». En 87:14, « reussit celui qui se purifie (tazakka) ». La purification par le don est un theme coranique fondamental.",
        axe5_frequence: "Pour la mission du khalifa, la purification est l'entretien de la mission. Le khalifa se purifie par le don — il enleve l'attachement excessif aux biens pour rester libre d'accomplir sa mission. La purification est le moyen par lequel le khalifa maintient la constitution originelle (celle de la meilleure forme) sans la corrompre par l'avarice et l'orgueil."
      }
    }
  }, 3);

  await sb.from('verse_analyses').update({
    translation_arab: "ٱلَّذِى يُؤْتِى مَالَهُۥ يَتَزَكَّىٰ",
    full_translation: "celui qui donne ses biens pour se purifier",
    segments: [
      { fr: "Celui qui", pos: "pronom relatif", phon: "alladhi", arabic: "ٱلَّذِى", is_particle: true, position: 1 },
      { fr: "donne", pos: "verbe", phon: "yu'ti", arabic: "يُؤْتِى", word_key: "ety", is_particle: false, sense_retenu: "donner", position: 2 },
      { fr: "ses biens", pos: "nom", phon: "malahu", arabic: "مَالَهُۥ", word_key: "mwl", is_particle: false, sense_retenu: "richesse", position: 3 },
      { fr: "pour se purifier", pos: "verbe", phon: "yatazakka", arabic: "يَتَزَكَّىٰ", word_key: "zkw", is_particle: false, sense_retenu: "purifier", position: 4 }
    ],
    translation_explanation: `§DEMARCHE§
Le verset est une proposition relative qui definit le plus pieux du verset 17. Le pronom relatif alladhi (celui qui) rattache ce verset au precedent. Le verbe yu'ti est un inaccompli forme IV de la racine '-t-y. D'apres les sources etymologiques (Lane's, 1863), la forme IV ata signifie donner, accorder, remettre. L'inaccompli marque une action habituelle et continue. L'objet malahu est compose de mal (biens, richesse) et du suffixe possessif -hu (ses). Le verbe yatazakka est un inaccompli forme V de la racine z-k-w. Le Lane's donne pour tazakka : il se purifie, il cherche a se purifier. La forme V (reflexive) indique un effort delibere de purification de soi. Le verbe yatazakka est en position de complement de but (hal ou maf'ul li-ajlihi) — il donne ses biens dans le but de se purifier.

§JUSTIFICATION§
**donne** — Le sens retenu est « donner ». Le verbe yu'ti forme IV traduit le don. L'alternative « accorde » ajoute une nuance d'autorite qui n'est pas dans le texte — le pieux n'accorde pas en maitre, il donne en serviteur.

**ses biens** — Le sens retenu est « richesse ». Le mot « biens » traduit mal comme l'ensemble des possessions. L'alternative « sa fortune » est trop eleve — mal couvre tous les niveaux de richesse. L'alternative « son argent » est trop restrictif — mal inclut tout type de biens.

**se purifier** — Le sens retenu est « purifier/croitre ». Le verbe « se purifier » traduit yatazakka forme V. L'alternative « augmenter en merite » ajoute une interpretation absente du texte. L'alternative « donner la zakat » est trop technique — le verset decrit un don general de purification, pas necessairement l'aumone legale.

§CRITIQUE§
Hamidullah traduit « celui qui donne ses biens pour se purifier ». La traduction est identique a la notre. C'est un verset ou le texte arabe est clair et les traductions convergent. Aucune difference significative.`
  }).eq('verse_id', verse_id);

  console.log('VERSET 92:18 — TERMINE');
  console.log('  ety (أ ت ي) → "donner" | mwl (م و ل) → "biens" | zkw (ز ك و) → "se purifier"');
}

async function verse92_19() {
  console.log('\n=== VERSET 92:19 — وَمَا لِأَحَدٍ عِندَهُۥ مِن نِّعْمَةٍ تُجْزَىٰٓ ===');
  const verse_id = 6077;

  // ---- NEM (نعم) — id=264 — "bienfait" ----
  // Forme: ni'matin = nom indefini au genitif (un bienfait)
  await upsertVWA(verse_id, 'nem', 'bienfait', {
    sense_chosen: "bienfait",
    concept_chosen: "Bienfait/Faveur",
    concepts: {
      "Bienfait/Faveur": {
        status: "retenu",
        senses: ["bienfait", "faveur", "grace", "benediction", "don recu"],
        proof_ctx: "Le sens retenu est « Bienfait/Faveur ». D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la racine n-'-m signifie etre dans un etat agreable, jouir d'un bienfait, vivre dans l'aisance. Le mot ni'ma designe un bienfait, une faveur, une grace recue. Le Lane's donne : a blessing, a benefit, a boon, a favour. Le mot est ici au genitif indefini (ni'matin) precede de la particule min (expliquant la negation) — « aucun bienfait ». Le verset nie l'existence d'un bienfait a rembourser — le don du pieux n'est pas un remboursement. Le bienfait est ce que l'on recoit d'autrui et qui cree une dette morale. Le pieux n'a aucune dette morale envers quiconque — son don est pur.",
        axe1_verset: "Le verset dit « et personne n'a aupres de lui un bienfait a retribuer ». Le mot ni'matin est l'objet nie — il n'y a aucun bienfait. La negation ma + li-ahadin + min ni'matin forme une triple negation emphatique : pas + pour personne + aucun bienfait. Le champ lexical negation + personne + bienfait + retribuer forme une declaration de desinteressement total. Le pieux ne donne pas pour rembourser une dette — il donne gratuitement.",
        axe2_voisins: "Le verset 18 decrivait le don et la purification. Le verset 19 ajoute une precision cruciale : ce don n'est pas un echange. Le pieux ne rend pas un service en retour d'un bienfait recu. Le verset 20 completera : la seule motivation est la direction du Seigneur. Les trois versets (18-19-20) forment un triptyque : l'acte (donner), la precision (sans dette), la motivation (pour Dieu).",
        axe3_sourate: "La sourate oppose deux economies. L'avare (verset 8) retient ses biens par calcul. Le pieux (versets 18-19) donne sans calcul. Le verset 19 exclut toute motivation d'echange — le don n'est pas un investissement qui attend un retour. La sourate presente la generosite pure comme l'oppose de l'avarice calculee.",
        axe4_coherence: "La racine n-'-m est tres frequente dans le Coran (plus de 140 occurrences). Le bienfait divin est un theme central : « Lequel des bienfaits de votre Seigneur nierez-vous ? » (55:13). Le Coran rappelle constamment les bienfaits de Dieu sur l'etre humain. Dans le verset 19, le bienfait est humain (un bienfait qu'une personne fait a une autre) et le verset nie qu'un tel bienfait existe chez le plus pieux — personne ne lui a fait une faveur qu'il doive rembourser.",
        axe5_frequence: "Pour la mission du khalifa, le desinteressement est la marque de la mission authentique. Le khalifa qui donne pour rembourser une dette fait du commerce, pas de la mission. Le verset 19 montre que le don veritable est celui qui n'attend aucun retour humain. Le khalifa accompli donne parce qu'il doit donner, pas parce qu'il doit rembourser."
      },
      "Douceur/Aisance": {
        status: "probable",
        senses: ["douceur", "aisance", "confort", "vie agreable"],
        proof_ctx: "La douceur et l'aisance sont un sens fondamental de la racine n-'-m. Le Lane's donne na'ima : vivre dans l'aisance, jouir d'une vie douce et agreable. Ce sens est present en arriere-plan : le bienfait (ni'ma) est ce qui rend la vie douce et agreable. Le mot ni'ma contient en lui l'idee de douceur — un bienfait est doux par nature. Cependant, dans le contexte du verset, le sens premier est celui d'un bienfait recu d'autrui (une faveur, un service), pas l'aisance generale.",
        axe1_verset: "Le verset nie qu'un bienfait existe aupres du pieux. Si on lit ni'ma dans le sens de douceur/aisance, le verset dirait que personne n'a aupres du pieux une douceur a lui retribuer — ce qui revient a dire que le pieux ne cherche pas le confort aupres des autres. Le sens de douceur colore le bienfait : le pieux n'attend aucune douceur en retour de son don.",
        axe2_voisins: "Le verset 18 decrit le don pour la purification. Si le verset 19 parle d'aisance, il precise que le pieux ne donne pas pour obtenir l'aisance en retour. La douceur de vie n'est pas sa motivation — sa motivation est la direction du Seigneur (verset 20).",
        axe3_sourate: "La sourate oppose le confort materiel (voie de l'avare) et le detachement (voie du pieux). La douceur comme sens de ni'ma rappelle que l'avare cherche le confort materiel tandis que le pieux y renonce pour se purifier.",
        axe4_coherence: "En 102:8, le Coran avertit : « vous serez interroges sur les bienfaits (na'im) ». Le na'im est la douceur de la vie dont on sera interroge. La racine porte les deux sens (bienfait et douceur) dans tout le Coran, souvent entrelaces.",
        axe5_frequence: "Pour la mission du khalifa, le renoncement a la douceur personnelle au profit du don desinteresse est une marque de maturite. Le khalifa ne cherche pas le confort pour lui-meme mais distribue les bienfaits aux autres."
      }
    }
  }, 1);

  // ---- JZY (جزي) — id=531 — "retribuer" ----
  // Forme: tujza = verbe inaccompli passif (qui soit retribuee/remboursee)
  await upsertVWA(verse_id, 'jzy', 'retribuer', {
    sense_chosen: "retribuer",
    concept_chosen: "Rétribution/Justice",
    concepts: {
      "Rétribution/Justice": {
        status: "retenu",
        senses: ["retribuer", "recompenser", "rendre", "suffire", "rembourser"],
        proof_ctx: "Le sens retenu est « Retribution/Justice ». D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la racine j-z-y signifie retribuer, recompenser, rendre l'equivalent, rembourser. Le Lane's donne : he requited, he recompensed, he gave an equivalent. Le verbe tujza est a l'inaccompli passif — « qui soit retribuee, qui soit remboursee ». Le passif indique que le bienfait n'est pas activement retribue — c'est une retribution qui ne se realise pas. Le mot qualifie ni'matin (un bienfait) : un bienfait qui serait retribue, rembourse. Le verset nie cette retribution : personne n'a aupres du pieux un bienfait a retribuer. Le champ lexical de la retribution transforme le don en acte de justice — retribuer est rendre ce qui est du. Le verset dit que rien n'est du au pieux.",
        axe1_verset: "Le verset dit « personne n'a aupres de lui un bienfait a retribuer ». Le verbe tujza qualifie ni'matin comme un bienfait qui pourrait etre retribue — mais le verset nie cette possibilite. La retribution est l'acte de rendre l'equivalent de ce qu'on a recu. Le verset exclut toute logique d'echange : le pieux ne donne pas parce qu'il doit quelque chose, il donne gratuitement. Le champ lexical bienfait + retribuer + negation forme une declaration de gratuite absolue.",
        axe2_voisins: "Le verset 18 decrivait le don. Le verset 19 exclut la retribution comme motivation. Le verset 20 donnera la vraie motivation : la direction du Seigneur. Les trois versets construisent une progression : acte → exclusion du calcul → vraie intention. La retribution (jaza') est exclue du champ des motivations du pieux.",
        axe3_sourate: "La sourate oppose deux logiques. L'avare (versets 8-11) vit dans une logique d'echange et de calcul — il retient parce qu'il calcule. Le pieux (versets 18-20) vit hors de cette logique — il donne sans rien attendre en retour. La retribution est le mecanisme de la voie de l'avare ; le desinteressement est celui de la voie du pieux.",
        axe4_coherence: "La racine j-z-y apparait environ 120 fois dans le Coran. La retribution est un theme central : « Celui qui fait un bien du poids d'un atome le verra ; celui qui fait un mal du poids d'un atome le verra » (99:7-8). Le Coran affirme la retribution divine — chaque acte est retribue. Mais le verset 92:19 parle de retribution humaine : le pieux ne cherche pas la retribution des hommes. Seule la retribution divine compte.",
        axe5_frequence: "Pour la mission du khalifa, le depassement de la logique d'echange est essentiel. Le khalifa qui agit pour etre retribue par les hommes corrompt sa mission. Le verset 19 pose le principe : la mission s'exerce sans attente de retour humain. La retribution viendra de Dieu (verset 21 : il sera satisfait)."
      },
      "Suffisance": {
        status: "peu_probable",
        senses: ["suffire", "etre suffisant", "satisfaire"],
        proof_ctx: "La suffisance est un sens secondaire de la racine j-z-y. Le Lane's donne jaza'a : it sufficed, it was enough. Ce sens est possible en theorie : un bienfait qui suffirait a justifier le don. Mais le contexte est clairement celui de la retribution (rembourser un bienfait recu), pas de la suffisance.",
        axe1_verset: "Si le verbe tujza portait le sens de suffire, le verset dirait : personne n'a aupres de lui un bienfait qui suffise. Le sens serait que rien ne justifie suffisamment le don du pieux — il donne au-dela de toute raison. Ce sens est secondaire mais enrichit la lecture : le don du pieux est excessif, surabondant, au-dela de toute justification.",
        axe2_voisins: "Le verset 20 dira que la seule raison est la direction du Seigneur. Si le verset 19 parle de suffisance, il dit qu'aucune raison humaine ne suffit a expliquer le don. Seule la raison divine (verset 20) est suffisante.",
        axe3_sourate: "La sourate montre que la voie du pieux depasse la logique humaine. La suffisance humaine est depassee — le don du pieux n'a pas de raison suffisante dans la logique d'echange.",
        axe4_coherence: "En 39:36, « Dieu ne suffit-il pas (a-laysa Allahu bi-kafin) a Son serviteur ? ». La suffisance divine remplace la suffisance humaine. Le verset 92:19 pourrait dire que la suffisance humaine est nulle — seule la suffisance divine compte.",
        axe5_frequence: "Le khalifa depasse la logique de suffisance humaine pour entrer dans la logique de generosite divine. Son don n'a pas besoin de raison suffisante — il donne parce que c'est sa mission."
      }
    }
  }, 2);

  await sb.from('verse_analyses').update({
    translation_arab: "وَمَا لِأَحَدٍ عِندَهُۥ مِن نِّعْمَةٍ تُجْزَىٰٓ",
    full_translation: "et auprès de qui personne ne bénéficie d'un bienfait intéressé",
    segments: [
      { fr: "Et personne n'a", pos: "particule", phon: "wa-ma li-ahadin", arabic: "وَمَا لِأَحَدٍ", is_particle: true, position: 1 },
      { fr: "aupres de lui", pos: "particule", phon: "'indahu", arabic: "عِندَهُۥ", is_particle: true, position: 2 },
      { fr: "de bienfait", pos: "nom", phon: "min ni'matin", arabic: "مِن نِّعْمَةٍ", word_key: "nem", is_particle: false, sense_retenu: "bienfait", position: 3 },
      { fr: "a retribuer", pos: "verbe", phon: "tujza", arabic: "تُجْزَىٰٓ", word_key: "jzy", is_particle: false, sense_retenu: "retribuer", position: 4 }
    ],
    translation_explanation: `§DEMARCHE§
Le verset est une proposition nominale negative. La structure wa-ma li-ahadin signifie « et personne n'a » — ma est la particule de negation, li- est la preposition d'appartenance, ahadin est un nom indefini (quelqu'un/personne). Le complement 'indahu (aupres de lui) situe la relation : aupres du pieux. La particule min (de) introduit ni'matin (un bienfait) au genitif indefini. D'apres les sources etymologiques (Lane's, 1863), ni'ma est un bienfait, une faveur, une grace recue. Le verbe tujza est un inaccompli passif de la racine j-z-y. Le Lane's donne jaza : retribuer, rembourser, rendre l'equivalent. Le passif (tujza) qualifie le bienfait : un bienfait qui serait retribue. L'ensemble signifie : personne n'a aupres de lui (le pieux) un bienfait qui doive etre retribue — il ne doit rien a personne.

§JUSTIFICATION§
**bienfait** — Le sens retenu est « bienfait/faveur ». Le mot « bienfait » traduit ni'ma comme une faveur recue d'autrui. L'alternative « grace » est trop religieuse — le contexte est une relation humaine (un bienfait d'une personne). L'alternative « douceur » est trop vague.

**retribuer** — Le sens retenu est « retribuer/rembourser ». Le verbe « retribuer » traduit tujza comme le remboursement d'une dette morale. L'alternative « recompenser » ajoute une nuance positive absente — ici la retribution est un simple remboursement.

§CRITIQUE§
Hamidullah traduit « aupres de qui personne ne beneficie d'un bienfait interesse ». La traduction de Hamidullah reformule : au lieu de « personne n'a aupres de lui un bienfait a retribuer », il dit « personne ne beneficie d'un bienfait interesse ». Les deux sens convergent : le don du pieux n'est pas motive par un retour. Notre traduction est plus litterale et respecte la structure du verset arabe.`
  }).eq('verse_id', verse_id);

  console.log('VERSET 92:19 — TERMINE');
  console.log('  nem (ن ع م) → "bienfait" | jzy (ج ز ي) → "retribuer"');
}

async function verse92_20() {
  console.log('\n=== VERSET 92:20 — إِلَّا ٱبْتِغَآءَ وَجْهِ رَبِّهِ ٱلْأَعْلَىٰ ===');
  const verse_id = 6078;

  // ---- BGH (بغي) — id=683 — "quete" ----
  // Forme: ibtigha'a = masdar forme VIII accusatif (la recherche/quete de)
  await upsertVWA(verse_id, 'bgh', 'quete', {
    sense_chosen: "quete",
    concept_chosen: "Quête/Transgression",
    concepts: {
      "Quête/Transgression": {
        status: "retenu",
        senses: ["chercher", "desirer", "queter", "transgresser", "opprimer", "convoiter"],
        proof_ctx: "Le sens retenu est « Quete/Transgression ». D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la racine b-gh-y porte deux sens fondamentaux : chercher/desirer et transgresser/opprimer. Le Lane's donne : he sought, he desired, he transgressed. Le mot ibtigha'a est un masdar (nom verbal) de la forme VIII (ifti'al) qui a le sens de quete deliberee, recherche active. La forme VIII ajoute une dimension d'effort personnel — ce n'est pas un simple desir passif mais une quete active et volontaire. Le mot est a l'accusatif (ibtigha'a) car il est en position de complement de but apres l'exception illa — « sauf en quete de ». Le sens de transgression est un autre aspect de la racine qui n'est pas pertinent ici : la quete du pieux est dirigee vers la direction de Dieu, pas vers la transgression. Distinction avec « Oppression » : l'oppression (baghy) est l'abus de pouvoir. La quete (ibtigha') est la recherche sincere. Les deux derives de la meme racine montrent que la recherche peut tourner en abus si elle n'est pas orientee vers Dieu.",
        axe1_verset: "Le verset dit « sauf en quete de la direction de son Seigneur le Tres-Haut ». Le mot ibtigha'a est en position de complement de but apres illa (sauf). La quete est la seule motivation du don du pieux — il ne donne pour aucune raison humaine, seulement pour chercher la direction de son Seigneur. Le champ lexical exception + quete + direction + Seigneur + Tres-Haut forme la declaration de motivation supreme. La quete est un acte actif et volontaire — le pieux ne subit pas, il cherche.",
        axe2_voisins: "Le verset 18 decrivait l'acte (donner pour se purifier). Le verset 19 excluait toute motivation humaine (pas de bienfait a rembourser). Le verset 20 donne la seule motivation : la quete de la direction du Seigneur. Les trois versets (18-19-20) forment une progression : acte → exclusion → intention. La quete est le couronnement de cette progression.",
        axe3_sourate: "La sourate oppose deux recherches. L'avare (verset 8) cherche l'autosuffisance (istaghna — se passer de Dieu). Le pieux (verset 20) cherche la direction de Dieu (ibtigha'a wajhi rabbihi). Les deux recherches sont opposees : l'une tourne le dos a Dieu, l'autre se tourne vers Lui. La quete du pieux est la reponse positive a l'egarement de l'avare.",
        axe4_coherence: "Le mot ibtigha' apparait dans le Coran dans des contextes de quete sincere : « ceux qui recherchent (yabtaghuna) la grace de Dieu » (73:20), « cherchant (ibtigha'a) la satisfaction de Dieu » (2:207). La quete de la direction de Dieu est une motivation coranique frequente. La forme VIII ibtigha' est toujours utilisee pour une recherche deliberee et sincere, jamais pour une simple envie passagere.",
        axe5_frequence: "Pour la mission du khalifa, la quete de la direction de Dieu est la boussole de la mission. Le khalifa ne donne pas pour la gloire, le pouvoir ou le confort — il donne en quete de la direction divine. Cette quete oriente toute l'action du khalifa : chaque don, chaque acte est dirige vers Dieu. La quete est le moteur interieur de la mission."
      }
    }
  }, 1);

  // ---- WJH (وجه) — id=747 — "direction" ----
  // Forme: wajhi = nom au genitif en idafa avec rabbihi
  // IMPORTANT: wajh signifie etymologiquement "le cote vers lequel on se tourne",
  // "la direction". Le sens de "visage" est second. Pour eviter l'anthropomorphisme,
  // on traduit par "direction" ou "orientation".
  await upsertVWA(verse_id, 'wjh', 'direction', {
    sense_chosen: "direction",
    concept_chosen: "Visage/Direction",
    concepts: {
      "Visage/Direction": {
        status: "retenu",
        senses: ["visage", "face", "direction", "orientation", "cote vers lequel on se tourne"],
        proof_ctx: "Le sens retenu est « Visage/Direction ». D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la racine w-j-h porte un champ semantique riche : le visage, la face, la direction, l'orientation, le cote vers lequel on se tourne, la maniere de se presenter. Le Lane's donne wajh : the face, the front, the direction, the way, the object toward which one turns. Le mot wajh est fondamentalement « ce vers quoi l'on se tourne » — la face est le cote du corps qui est oriente vers l'interlocuteur, la direction est le cote vers lequel on se dirige. L'etymologie montre que « direction » et « visage » sont deux aspects du meme sens : la face est la direction du regard, la direction est la face du chemin. Dans le contexte « wajhi rabbihi » (la direction de son Seigneur), le mot wajh designe ce vers quoi le pieux se tourne — l'orientation de son action vers Dieu. La traduction par « direction » est plus fidele a l'etymologie et evite l'anthropomorphisme (attribuer un visage physique a Dieu). Le texte ne dit pas que Dieu a un visage — il dit que le pieux oriente son action vers Dieu. Distinction avec « Noble/Eminent » : la noblesse (wajaha) est un sens derive (celui qui a de la face = de la dignite). Ce sens n'est pas pertinent ici. Distinction avec « Maniere » : la maniere (wajh) est un sens derive (la face d'une question). Ce sens n'est pas pertinent ici.",
        axe1_verset: "Le verset dit « sauf en quete de la direction de son Seigneur le Tres-Haut ». Le mot wajhi est en position d'idafa avec rabbihi — la direction de son Seigneur. Le pieux oriente toute son action vers Dieu : il donne, il se purifie, il ne cherche aucun retour humain, il se tourne entierement vers son Seigneur. Le champ lexical quete + direction + Seigneur + Tres-Haut forme une orientation totale vers Dieu. La direction est l'objet de la quete — le pieux cherche a se tourner vers Dieu.",
        axe2_voisins: "Le verset 18 decrivait le don. Le verset 19 excluait la motivation humaine. Le verset 20 donne l'orientation finale : la direction du Seigneur. Le mot wajh concentre toute l'intention du pieux en un point : Dieu. Apres avoir dit ce que le pieux fait (donner), ce qu'il ne fait pas (rembourser), le verset dit vers ou il se tourne (Dieu). La direction est le point focal de la piete.",
        axe3_sourate: "La sourate oppose deux orientations. Le malheureux se detourne (tawalla, verset 16) — il tourne le dos a Dieu. Le pieux se tourne vers Dieu (wajhi rabbihi, verset 20). Les deux mouvements sont opposes : l'un s'eloigne, l'autre se rapproche. La direction (wajh) est le pivot de cette opposition — la question est : vers ou te tournes-tu ?",
        axe4_coherence: "Le Coran utilise wajh en rapport avec Dieu dans plusieurs passages : « Ou que vous vous tourniez, la est la direction (wajh) de Dieu » (2:115). Ce verset confirme que wajh peut signifier direction/orientation. En 6:79, Ibrahim dit : « J'oriente ma face (wajhi) vers Celui qui a cree les cieux et la terre ». L'orientation vers Dieu est un acte fondamental de la foi coranique. Le mot wajh porte toujours cette double dimension de visage et de direction.",
        axe5_frequence: "Pour la mission du khalifa, l'orientation vers Dieu est le fondement de la mission. Le khalifa se tourne vers Dieu dans chaque acte — son don, sa purification, sa generosite sont diriges vers la direction divine. La direction de Dieu est la boussole permanente du khalifa. Sans cette orientation, le don n'est que philanthropie — avec elle, le don devient mission."
      },
      "Noble/Éminent": {
        status: "nul",
        senses: ["etre noble", "avoir du prestige", "eminence"],
        proof_ctx: "La noblesse (wajaha, wajh) est un sens derive : avoir de la face, c'est avoir de la dignite. Ce sens n'est pas pertinent ici — le verset parle de la direction vers laquelle le pieux se tourne, pas de la noblesse de Dieu."
      },
      "Manière": {
        status: "nul",
        senses: ["maniere", "aspect", "facette"],
        proof_ctx: "La maniere (wajh al-mas'ala — la face de la question) est un sens figure. Le verset ne parle pas de la maniere de faire mais de l'orientation vers Dieu. Le contexte est celui de la quete spirituelle, pas de la methode."
      }
    }
  }, 2);

  // ---- RBB (ربب) — id=253 — "Seigneur" ----
  // Forme: rabbihi = nom en idafa + suffixe possessif (son Seigneur)
  await upsertVWA(verse_id, 'rbb', 'Seigneur', {
    sense_chosen: "Seigneur",
    concept_chosen: "Seigneurie/Autorité bienveillante",
    concepts: {
      "Seigneurie/Autorité bienveillante": {
        status: "retenu",
        senses: ["seigneur", "maitre", "educateur", "celui qui fait croitre", "celui qui prend en charge"],
        proof_ctx: "Le sens retenu est « Seigneurie/Autorite bienveillante ». D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la racine r-b-b signifie elever, nourrir, faire croitre, prendre en charge, etre le maitre de. Le rabb est celui qui nourrit, eduque et fait grandir. Le Lane's donne : he reared, he nurtured, he fostered, he was lord or master. Le mot rabbihi est en position d'idafa avec wajhi (la direction de son Seigneur) et porte le suffixe possessif -hi (son). Le possessif cree une relation personnelle entre le pieux et son Seigneur — ce n'est pas un seigneur abstrait mais SON Seigneur qui l'a eleve et nourri. L'autorite du rabb est bienveillante — il n'est pas un despote mais un educateur. La seigneurie combine autorite et sollicitude.",
        axe1_verset: "Le verset dit « la direction de son Seigneur le Tres-Haut ». Le mot rabbihi est le complement d'idafa de wajhi — la direction est celle du Seigneur. Le pieux cherche la direction de Celui qui l'a eleve et nourri. Le champ lexical direction + Seigneur + Tres-Haut forme une ascension : le pieux se tourne vers le haut, vers son Educateur supreme. Le possessif -hi (son) personnalise la relation — chaque etre humain a son propre rapport avec son Seigneur.",
        axe2_voisins: "Les versets 18-19 decrivaient les actes du pieux (donner, sans attente de retour). Le verset 20 donne la direction de ces actes : le Seigneur. Le verset 21 couronnera : le pieux sera satisfait. Le Seigneur est l'horizon vers lequel le pieux se tourne — le don et la purification menent a Lui.",
        axe3_sourate: "La sourate oppose l'autosuffisance (verset 8 — istaghna, se croire independant de Dieu) et la relation avec le Seigneur (verset 20 — rabbihi, son Seigneur). L'avare se croit autosuffisant — il n'a pas besoin de Seigneur. Le pieux reconnoait sa dependance envers son Seigneur et se tourne vers Lui. Le rabb est la figure d'autorite bienveillante que l'avare rejette et que le pieux accepte.",
        axe4_coherence: "Le mot rabb est le mot le plus frequent du Coran pour designer Dieu dans Sa relation avec la creation. En 1:2, « louange a Dieu, Seigneur (rabb) des mondes ». En 55:1-4, « le Tout Misericordieux a enseigne le Coran, a cree l'etre humain ». Le rabb est celui qui cree, enseigne et nourrit. Le possessif « son Seigneur » apparait des centaines de fois pour marquer la relation personnelle entre chaque etre et son Createur.",
        axe5_frequence: "Pour la mission du khalifa, le Seigneur est la source de la mission. Le khalifa agit au nom de son Seigneur — il est le representant de Celui qui l'a eleve et nourri. Se tourner vers la direction du Seigneur, c'est accepter la mission et agir en conformite avec elle. Le possessif « son Seigneur » rappelle que la mission est personnelle — chaque khalifa a son propre rapport avec le Seigneur."
      }
    }
  }, 3);

  // ---- ELY (علو) — id=265 — "le Tres-Haut" ----
  // Forme: al-a'la = superlatif defini (le plus haut/eleve)
  await upsertVWA(verse_id, 'ely', 'le Tres-Haut', {
    sense_chosen: "le Tres-Haut",
    concept_chosen: "Hauteur/Domination",
    concepts: {
      "Hauteur/Domination": {
        status: "retenu",
        senses: ["etre haut", "s'elever", "dominer", "surpasser", "etre supreme"],
        proof_ctx: "Le sens retenu est « Hauteur/Domination ». D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la racine '-l-w signifie etre haut, s'elever, etre au-dessus, dominer, surpasser. Le Lane's donne : he was high, he rose, he was lofty, he was exalted. Le mot al-a'la est un superlatif defini (forme af'al avec al-) — le plus haut de tous, le plus eleve. C'est un attribut de Dieu dans ce verset : le Seigneur est qualifie de « le Tres-Haut ». Le superlatif indique la suprematie absolue — rien n'est plus haut que Lui. La hauteur divine n'est pas une position spatiale (Dieu n'est pas « en haut » physiquement) mais une suprematie ontologique — Il depasse tout en dignite, en pouvoir, en majesté. Distinction avec « Domination tyrannique » : la hauteur du rabb est une hauteur bienveillante (Il est Seigneur = educateur), pas une domination oppressive.",
        axe1_verset: "Le verset dit « son Seigneur le Tres-Haut ». Le mot al-a'la qualifie rabbihi — le Seigneur est le Tres-Haut. Le superlatif ferme le verset sur une note de grandeur : le pieux se tourne vers le Seigneur le plus eleve. Le champ lexical direction + Seigneur + Tres-Haut forme une ascension spirituelle : le pieux s'eleve par son don desinteresse vers le plus haut des Seigneurs. La hauteur divine est le point d'orientation supreme.",
        axe2_voisins: "Le verset 20 est le sommet thematique avant la conclusion du verset 21 (la satisfaction). Le Tres-Haut est le destinataire ultime du don du pieux. Les versets 15-16 decrivaient le plus bas (le plus malheureux qui brule). Les versets 17-20 decrivent le plus haut (le plus pieux qui se tourne vers le Tres-Haut). La sourate oppose le bas et le haut — la chute et l'elevation.",
        axe3_sourate: "La sourate ouvrait par la nuit (v1) et le jour (v2) — le bas et le haut naturels. Elle se conclut par le plus bas (le feu, v14-16) et le plus haut (le Seigneur, v20). La structure est en miroir : le contraste cosmique du debut (nuit/jour) se traduit en contraste eschatologique a la fin (feu/Seigneur). Le Tres-Haut est le point culminant de la sourate.",
        axe4_coherence: "Le titre de la sourate 87 est « Al-A'la » (le Tres-Haut). Le verset 87:1 dit « glorifie le nom de ton Seigneur le Tres-Haut (al-a'la) ». Le meme superlatif qualifie le meme Seigneur. En 2:255, « Il est le Tres-Haut (al-'aliyy), l'Immense ». La hauteur divine est un attribut constant dans le Coran — Dieu est toujours au-dessus de tout.",
        axe5_frequence: "Pour la mission du khalifa, la hauteur du Seigneur est la reference absolue. Le khalifa se tourne vers le Tres-Haut — vers ce qui depasse toute mesure humaine. La hauteur divine empeche le khalifa de se croire supreme : il y a toujours au-dessus de lui le Seigneur le Tres-Haut. Cette conscience de la hauteur divine preserve l'humilite du khalifa."
      }
    }
  }, 4);

  await sb.from('verse_analyses').update({
    translation_arab: "إِلَّا ٱبْتِغَآءَ وَجْهِ رَبِّهِ ٱلْأَعْلَىٰ",
    full_translation: "mais seulement pour chercher La Face de son Seigneur le Très-Haut",
    segments: [
      { fr: "Sauf", pos: "particule", phon: "illa", arabic: "إِلَّا", is_particle: true, position: 1 },
      { fr: "en quete de", pos: "nom", phon: "ibtigha'a", arabic: "ٱبْتِغَآءَ", word_key: "bgh", is_particle: false, sense_retenu: "chercher", position: 2 },
      { fr: "la direction de", pos: "nom", phon: "wajhi", arabic: "وَجْهِ", word_key: "wjh", is_particle: false, sense_retenu: "direction", position: 3 },
      { fr: "son Seigneur", pos: "nom", phon: "rabbihi", arabic: "رَبِّهِ", word_key: "rbb", is_particle: false, sense_retenu: "seigneur", position: 4 },
      { fr: "le Tres-Haut", pos: "adjectif", phon: "al-a'la", arabic: "ٱلْأَعْلَىٰ", word_key: "ely", is_particle: false, sense_retenu: "etre haut", position: 5 }
    ],
    translation_explanation: `§DEMARCHE§
Le verset est une exception (illa) qui donne la seule motivation du don du pieux. Le mot ibtigha'a est un masdar (nom verbal) de la forme VIII de la racine b-gh-y. D'apres les sources etymologiques (Lane's, 1863), ibtigha' signifie la quete deliberee, la recherche active. Il est a l'accusatif car complement de but. Le mot wajhi est un nom de la racine w-j-h au genitif en idafa avec rabbihi. Le Lane's donne wajh : the face, the direction, the way toward which one turns. Le sens etymologique fondamental est « ce vers quoi l'on se tourne » — la direction, l'orientation. Le visage est le cote du corps tourne vers l'autre ; la direction est le cote vers lequel on avance. Les deux sens sont lies par l'idee d'orientation. La traduction par « direction » respecte l'etymologie et evite d'attribuer a Dieu un visage physique (anthropomorphisme). Le texte dit que le pieux se tourne vers Dieu — son action est orientee vers Dieu. Le mot rabbihi est compose de rabb (seigneur, educateur) et du suffixe possessif -hi (son). Le mot al-a'la est un superlatif defini de la racine '-l-w (etre haut, s'elever). Le Lane's donne al-a'la : the highest, the most exalted. C'est un attribut de Dieu qui marque la suprematie absolue.

§JUSTIFICATION§
**en quete de** — Le sens retenu est « chercher ». Le mot ibtigha'a est traduit par « en quete de » qui rend la recherche active et deliberee de la forme VIII. L'alternative « desirant » est trop passif. L'alternative « cherchant » perd la dimension de nom verbal.

**la direction de** — Le sens retenu est « direction/orientation ». Le mot wajh est traduit par « direction » plutot que par « face » ou « visage ». L'etymologie confirme que wajh signifie fondamentalement « ce vers quoi l'on se tourne ». La traduction par « Face » (Hamidullah) risque l'anthropomorphisme — attribuer un visage physique a Dieu. Le texte dit que le pieux oriente son action vers Dieu, pas qu'il cherche le visage de Dieu. La direction respecte l'etymologie et le sens du verset.

**son Seigneur** — Le sens retenu est « seigneur/educateur ». Le mot rabbihi porte le possessif qui personnalise la relation.

**le Tres-Haut** — Le sens retenu est « etre haut/supreme ». Le superlatif al-a'la traduit la suprematie absolue de Dieu.

§CRITIQUE§
Hamidullah traduit « pour chercher La Face de son Seigneur le Tres-Haut ». La traduction de Hamidullah utilise « La Face » avec majuscule, ce qui est une convention theologique pour eviter l'anthropomorphisme tout en gardant le mot « face ». Notre traduction va plus loin en utilisant « direction » qui est etymologiquement justifie et evite completement le risque anthropomorphique. La question est ancienne en theologie islamique : le wajh de Dieu est-il un visage ou une direction ? L'etymologie du Lane's confirme que les deux sens coexistent. Le choix de « direction » est plus prudent et plus fidele a la racine.`
  }).eq('verse_id', verse_id);

  console.log('VERSET 92:20 — TERMINE');
  console.log('  bgh (ب غ ي) → "quete" | wjh (و ج ه) → "direction" | rbb (ر ب ب) → "Seigneur" | ely (ع ل و) → "le Tres-Haut"');
}

async function verse92_21() {
  console.log('\n=== VERSET 92:21 — وَلَسَوْفَ يَرْضَىٰ ===');
  const verse_id = 6079;

  // ---- RDW (رضو) — id=812 — "etre satisfait" ----
  // Forme: yarda = verbe inaccompli (il sera satisfait) + la-sawfa (futur certain)
  await upsertVWA(verse_id, 'rdw', 'etre satisfait', {
    sense_chosen: "etre satisfait",
    concept_chosen: "Satisfaction/Agrément",
    concepts: {
      "Satisfaction/Agrément": {
        status: "retenu",
        senses: ["etre satisfait", "agreer", "approuver", "accepter", "etre content"],
        proof_ctx: "Le sens retenu est « Satisfaction/Agrement ». D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la racine r-d-w (ou r-d-y) signifie etre satisfait, agreer, approuver, etre content de. Le Lane's donne radiya : he was pleased, he was satisfied, he approved, he was content. Le verbe yarda est a l'inaccompli precede de la-sawfa — une double particule d'emphase qui exprime un futur certain et emphatique. La- est une particule de serment et d'affirmation ; sawfa est un marqueur de futur. Ensemble, la-sawfa yarda signifie « il sera certainement et indubitablement satisfait ». La satisfaction est l'aboutissement de la voie du pieux — apres avoir donne, s'etre purifie, n'avoir cherche que la direction de son Seigneur, il atteindra la satisfaction. Le Lane's donne aussi rida (satisfaction, contentement) comme nom verbal — c'est l'etat de plenitude interieure ou tout desir est comble. Distinction avec « Choix/Preference » : le choix est un acte de selection. La satisfaction est un etat de plenitude. Le pieux ne choisit pas — il est satisfait, comble.",
        axe1_verset: "Le verset dit « et certes il sera satisfait ». Le verbe yarda est seul, sans complement — la satisfaction est absolue, non qualifiee. Le pieux ne sera pas satisfait de telle ou telle chose specifique — il sera satisfait tout court. Le champ lexical futur certain (la-sawfa) + satisfaction (yarda) forme une promesse de plenitude totale. Le wa- initial relie ce verset aux precedents : apres avoir decrit les actes du pieux (versets 18-20), le verset 21 donne le resultat : la satisfaction.",
        axe2_voisins: "Les versets 18-20 decrivaient les actes du pieux : donner, se purifier, chercher la direction du Seigneur. Le verset 21 est la recompense : la satisfaction. Les versets 15-16 decrivaient le destin du malheureux : bruler dans le feu. Le verset 21 est le pendant positif : le pieux sera satisfait. Le contraste est entre le feu (insatisfaction totale) et la satisfaction (plenitude totale).",
        axe3_sourate: "La sourate se conclut sur la satisfaction — c'est le dernier mot. La structure de la sourate mene a ce point : serments (v1-3), deux voies (v4), description des deux voies (v5-11), avertissement (v12-14), le malheureux (v15-16), le pieux (v17-20), et enfin la satisfaction (v21). Toute la sourate converge vers cette promesse de satisfaction pour celui qui choisit la voie du don et de la piete.",
        axe4_coherence: "La racine r-d-w est frequente dans le Coran (plus de 70 occurrences). La satisfaction divine est un sommet : « Dieu est satisfait d'eux et ils sont satisfaits de Lui » (5:119, 9:100, 58:22, 98:8). La satisfaction mutuelle entre Dieu et le croyant est la recompense supreme dans le Coran. En 89:28, « entre dans Mon Paradis, ame satisfaite (radiya) ». La satisfaction est la porte du paradis. En 20:130, la satisfaction est le fruit de la priere et de la patience.",
        axe5_frequence: "Pour la mission du khalifa, la satisfaction est l'accomplissement de la mission. Le khalifa qui a donne, s'est purifie et s'est tourne vers son Seigneur atteint la satisfaction — non pas parce qu'il a recu une recompense materielle, mais parce qu'il a accompli ce pour quoi il a ete cree. La satisfaction est la preuve que la mission est accomplie. Le futur certain (la-sawfa) garantit que cet accomplissement viendra."
      },
      "Choix/Préférence": {
        status: "peu_probable",
        senses: ["choisir", "preferer", "elire", "opter pour"],
        proof_ctx: "Le choix et la preference sont des sens secondaires de la racine r-d-w. Le Lane's mentionne irtada (forme VIII) : il a choisi, il a prefere, il a elu. Ce sens est possible en arriere-plan : le pieux a « choisi » la bonne voie et sera « satisfait » de ce choix. Mais le verbe du verset est yarda (forme I), pas yartadi (forme VIII) — le sens premier est la satisfaction, pas le choix.",
        axe1_verset: "Si yarda portait le sens de choix, le verset dirait « il choisira » ou « il preferera ». Ce sens est difficile dans le contexte car le verset decrit un etat futur (il sera satisfait), pas un acte futur (il choisira). La satisfaction est un etat de plenitude, le choix est un acte de decision.",
        axe2_voisins: "Les versets precedents decrivent des actes (donner, se purifier, chercher). Le verset 21 decrit un etat (etre satisfait). Le choix serait un acte de plus, pas un etat. La progression actes → etat confirme le sens de satisfaction.",
        axe3_sourate: "La sourate oppose deux voies et leurs resultats. Le resultat de la voie du malheureux est le feu (etat). Le resultat de la voie du pieux devrait etre un etat equivalent — la satisfaction. Le choix est deja fait (versets 18-20) ; le verset 21 donne le resultat de ce choix.",
        axe4_coherence: "En 98:8, « Dieu est satisfait (radiya) d'eux ». Le verbe radiya est clairement un etat de satisfaction, pas un acte de choix. Le Coran utilise la forme I pour la satisfaction et la forme VIII pour le choix.",
        axe5_frequence: "Pour le khalifa, la satisfaction finale est le fruit de tous ses choix anterieurs. Le choix est le moyen, la satisfaction est la fin."
      }
    }
  }, 1);

  await sb.from('verse_analyses').update({
    translation_arab: "وَلَسَوْفَ يَرْضَىٰ",
    full_translation: "Et certes, il sera satisfait",
    segments: [
      { fr: "Et certes", pos: "particule", phon: "wa-la", arabic: "وَلَ", is_particle: true, position: 1 },
      { fr: "bientot", pos: "particule", phon: "sawfa", arabic: "سَوْفَ", is_particle: true, position: 2 },
      { fr: "il sera satisfait", pos: "verbe", phon: "yarda", arabic: "يَرْضَىٰ", word_key: "rdw", is_particle: false, sense_retenu: "etre satisfait", position: 3 }
    ],
    translation_explanation: `§DEMARCHE§
Le verset est une promesse emphatique. La particule wa- (et) relie ce verset aux precedents. La particule la- est une particule d'affirmation et de serment — « certes, assurement ». La particule sawfa est un marqueur de futur — « bientot, dans l'avenir ». Ensemble, la-sawfa exprime un futur certain et garanti — la promesse est irrevocable. Le verbe yarda est un inaccompli de la racine r-d-w. D'apres les sources etymologiques (Lane's, 1863), radiya signifie etre satisfait, etre content, agreer. L'inaccompli yarda avec la-sawfa donne « il sera certainement satisfait ». Le verbe est intransitif et sans complement — la satisfaction est absolue, totale, non qualifiee. Le pieux ne sera pas satisfait de quelque chose en particulier — il sera satisfait de tout, il sera dans un etat de plenitude complete.

§JUSTIFICATION§
**il sera satisfait** — Le sens retenu est « etre satisfait ». Le verbe yarda traduit la satisfaction comme etat de plenitude. L'alternative « il sera content » est trop faible — la satisfaction coranique est une plenitude existentielle, pas un simple contentement. L'alternative « il agreera » change la structure — agreer est transitif (on agree quelque chose), la satisfaction ici est intransitive (on est satisfait).

§CRITIQUE§
Hamidullah traduit « Et certes, il sera satisfait ». La traduction est identique a la notre. C'est le dernier verset de la sourate et son sens est limpide — les traductions convergent unanimement. La seule question est l'intensite : la-sawfa porte une emphase que « certes » rend partiellement. L'emphase arabe est plus forte — « certes et assurement dans l'avenir il sera satisfait » — mais la concision francaise « certes il sera satisfait » est acceptable.`
  }).eq('verse_id', verse_id);

  console.log('VERSET 92:21 — TERMINE');
  console.log('  rdw (ر ض و) → "etre satisfait"');
}

// ================================================================
// PHRASES DU QUOTIDIEN
// ================================================================
// SKIP if already exist. Already exist for: sly(1469), kdb(474), wqy(277),
// ety(2040), mwl(1148), nem(264), jzy(531), rbb(253), rdw(812)
// Need daily for: shqy(2176), wly(599), jnb(1412), zkw(504→deja 3!),
// bgh(683), wjh(747), ely(265)

async function dailyPhrases() {
  console.log('\n====== PHRASES DU QUOTIDIEN ======\n');

  // shqy (2176) — Malheur/Damnation
  await insertDaily(2176, 'malheur', 'شَقِيّ', 'shaqi', [
    "Il a une vie difficile, il est vraiment malheureux — rien ne lui sourit.",
    "Ne sois pas si malheureux, les choses vont finir par s'arranger.",
    "C'est un sort miserable que de vivre sans espoir — un veritable malheur."
  ]);

  // wly (599) — Proximite/Protection (se detourner)
  await insertDaily(599, 'proche', 'وَلِيّ', 'waliy', [
    "C'est mon plus proche ami — il est toujours la quand j'ai besoin de lui.",
    "Il s'est detourne de ses anciens allies — il a tourne le dos a ceux qui l'avaient aide.",
    "Elle est la protectrice des orphelins du quartier — elle veille sur eux comme une tutrice."
  ]);

  // jnb (1412) — Cote/Eloignement
  await insertDaily(1412, 'ecarter', 'جَنْب', 'janb', [
    "Ecarte-toi du bord de la route, c'est dangereux — mets-toi de cote.",
    "Il a evite le sujet pendant toute la reunion — il l'a mis de cote deliberement.",
    "Elle s'est assise a cote de moi — on etait flanc contre flanc dans le bus bonde."
  ]);

  // zkw (504) — Purification/Croissance — DEJA 3, SKIP
  console.log('  zkw (504): SKIP (deja 3 phrases existantes)');

  // bgh (683) — Quete/Transgression
  await insertDaily(683, 'chercher', 'بَغَى', 'bagha', [
    "Il cherche du travail depuis des mois — sa quete est longue mais il ne lache rien.",
    "Elle recherche la verite dans cette affaire — elle veut comprendre ce qui s'est passe.",
    "Ne depasse pas les limites, tu vas finir par transgresser — la quete a ses bornes."
  ]);

  // wjh (747) — Visage/Direction
  await insertDaily(747, 'direction', 'وَجْه', 'wajh', [
    "Tourne-toi dans cette direction — c'est par la qu'on doit aller.",
    "Il a presente une autre face du probleme — une facette qu'on n'avait pas vue.",
    "En face de chez moi il y a une boulangerie — c'est juste en face, de l'autre cote de la rue."
  ]);

  // ely (265) — Hauteur/Domination
  await insertDaily(265, 'haut', 'عَلِيّ', "'aliy", [
    "Monte plus haut, tu verras mieux le paysage — la vue est magnifique de la-haut.",
    "C'est un homme de haute moralite — il s'eleve au-dessus des mesquineries.",
    "Le prix est trop eleve pour mon budget — c'est au-dessus de mes moyens."
  ]);
}

async function main() {
  await verse92_15();
  await verse92_16();
  await verse92_17();
  await verse92_18();
  await verse92_19();
  await verse92_20();
  await verse92_21();
  await dailyPhrases();
  console.log('\n=== PARTIE 3 TERMINEE (versets 15-21) ===');
}

main().catch(console.error);
