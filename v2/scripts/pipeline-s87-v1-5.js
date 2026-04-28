require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');
const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

async function upsertVWA(verse_id, word_key, sense_chosen, analysis_axes, position) {
  const { data: existing } = await sb.from('verse_word_analyses').select('id').eq('verse_id', verse_id).eq('word_key', word_key);
  if (existing && existing.length > 0) {
    const { error } = await sb.from('verse_word_analyses').update({ sense_chosen, analysis_axes, position }).eq('id', existing[0].id);
    if (error) console.log('  ERR update VWA ' + word_key + ': ' + error.message);
    else console.log('  ✓ VWA updated ' + word_key + ' (id=' + existing[0].id + ')');
  } else {
    const { data, error } = await sb.from('verse_word_analyses').insert({ verse_id, word_key, sense_chosen, analysis_axes, position }).select().single();
    if (error) console.log('  ERR insert VWA ' + word_key + ': ' + error.message);
    else console.log('  ✓ VWA created ' + word_key + ' (id=' + data.id + ')');
  }
}

async function upsertVA(verse_id, d) {
  const { data: existing } = await sb.from('verse_analyses').select('id').eq('verse_id', verse_id);
  if (existing && existing.length > 0) {
    const { error } = await sb.from('verse_analyses').update(d).eq('id', existing[0].id);
    if (error) console.log('  ERR update VA: ' + error.message);
    else console.log('  ✓ VA updated (id=' + existing[0].id + ')');
  } else {
    const { data, error } = await sb.from('verse_analyses').insert({ verse_id, ...d }).select().single();
    if (error) console.log('  ERR insert VA: ' + error.message);
    else console.log('  ✓ VA created (id=' + data.id + ')');
  }
}

(async () => {
  console.log('=== PIPELINE S87 v1-5 — ÉTAPES 3-4 ===\n');

  // ========== VERSET 1 (5949) ==========
  console.log('--- v1 (5949): sabbih isma rabbika al-a\'la ---');

  // sbh(440) — Glorification/Louange
  await upsertVWA(5949, 'sbh', 'glorifier', {
    sense_chosen: 'glorifier',
    concept_chosen: 'Glorification/Louange',
    concepts: {
      'Glorification/Louange': {
        senses: ['glorifier', 'louer', 'prier', 'subhana'],
        status: 'retenu',
        proof_ctx: "D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la racine s-b-h porte deux directions de sens. La Glorification/Louange est retenue car le verbe sabbih est un imperatif de la forme II, une forme intensive qui commande de glorifier activement et de declarer pur. Le champ lexical du verset — nom, celui qui eleve, le Tres-Haut — est entierement oriente vers la grandeur et la louange. Le Mouvement/Flottement (nager, flotter) est un sens physique premier qui decrit un deplacement dans un milieu fluide, sans rapport avec l'acte de glorification commande ici.",
        axe1_verset: "Le verbe sabbih est un imperatif de forme II qui commande de glorifier activement. Le champ lexical du verset contient isma (le nom), rabbika (celui qui t'eleve) et al-a'la (le Tres-Haut). Tous ces mots convergent vers un registre de grandeur, d'elevation et de louange. Glorifier le nom de quelqu'un, c'est reconnaitre sa grandeur par la parole. Le verset est une injonction a declarer la purete et la grandeur du Tres-Haut par son nom.",
        axe2_voisins: "Le verset 1 ouvre la sourate par un ordre direct. Les versets suivants (2-5) decrivent les actions de celui qui est glorifie : Il a cree, paracheve, determine, guide, fait emerger le paturage. La glorification du verset 1 est donc le preambule naturel a l'enumeration des actes qui justifient cette glorification. Glorifier precede la liste des raisons de glorifier.",
        axe3_sourate: "La sourate 87 s'appelle al-A'la (le Tres-Haut) et commence par l'ordre de glorifier. Le theme central est la grandeur de Dieu manifestee par ses actes (creation, determination, guidance) puis la revelation et le rappel. La glorification inaugure ce theme en posant l'attitude fondamentale du croyant face a ces manifestations.",
        axe4_coherence: "Le Coran utilise sabbih dans plusieurs sourates pour ouvrir ou conclure une glorification. En 56:74 et 56:96, sabbih bismi rabbika al-azim (glorifie par le nom de ton Seigneur, l'Immense). En 69:52, fa-sabbih bismi rabbika al-azim. Le pattern sabbih + ism + rabb est recurrent et coherent. La glorification est toujours liee au nom et aux attributs de grandeur.",
        axe5_frequence: "La glorification est un acte fondamental du khalifa : reconnaitre la grandeur de celui qui l'a cree et eleve. C'est le point de depart de toute relation entre l'etre humain et son createur. Sans cette reconnaissance, le khalifa ne peut pas remplir sa mission de justice et de civilisation. Glorifier, c'est se situer dans l'ordre des choses avant d'agir."
      },
      'Mouvement/Flottement': {
        senses: ['nager', 'flotter', 'voyager rapidement'],
        status: 'nul',
        proof_ctx: "Le sens physique de nager ou flotter decrit un deplacement dans un milieu fluide. Le verset est un imperatif adresse au prophete avec un objet (le nom de ton Seigneur). On ne nage pas un nom, on ne fait pas flotter un nom. Ce sens est completement hors sujet dans ce contexte de louange et de grandeur."
      }
    }
  }, 1);

  // smw(249) — Nom/Identification
  await upsertVWA(5949, 'smw', 'nom', {
    sense_chosen: 'nom',
    concept_chosen: 'Nom/Identification',
    concepts: {
      'Nom/Identification': {
        senses: ['nom', 'nommer', 'prononcer le nom de Dieu', 'se nommer', 'renommee', 'homonyme'],
        status: 'retenu',
        proof_ctx: "La racine s-m-w porte trois directions majeures. Le Nom/Identification est retenu car le mot isma est un nom au cas accusatif, objet direct du verbe sabbih. D'apres les sources etymologiques, ism designe ce par quoi une chose est identifiee et distinguee des autres. Glorifier le nom, c'est glorifier l'identite meme. La distinction avec Ciel/Ce qui couvre est nette : le ciel est un espace physique au-dessus, tandis que le nom est un outil d'identification. Le mot isma dans ce verset est clairement un nom (pas un ciel), suivi de rabbika en idafa (le nom de celui qui t'eleve).",
        axe1_verset: "Le mot isma est au cas accusatif, complement d'objet direct de sabbih (glorifie). Il est suivi de rabbika en construction d'annexion (idafa) : le nom de celui qui t'eleve. Le champ lexical est celui de l'identite et de la grandeur : glorifier, nom, celui qui eleve, le Tres-Haut. Isma designe ici l'identite par laquelle on reconnait et invoque. C'est par le nom qu'on accede a la reconnaissance.",
        axe2_voisins: "Les versets 2-5 decrivent les actions du Tres-Haut sans le nommer a nouveau — les pronoms suffisent apres que le nom a ete mentionne au verset 1. Le verset 1 pose l'identite (le nom) puis les versets suivants decrivent ce que cette identite fait. La structure est : voici qui Il est (v1), voici ce qu'Il fait (v2-5). Le nom est le point d'ancrage.",
        axe3_sourate: "La sourate commence par l'injonction de glorifier le nom, ce qui place l'identification au centre. Tout le reste de la sourate (actes divins, revelation, rappel) decoule de cette identification initiale. Nommer celui qui est glorifie est la premiere etape logique avant de decrire ses actes.",
        axe4_coherence: "Le Coran mentionne le nom de Dieu dans de nombreux contextes : bismi-llah (au nom de Dieu), sabbih isma rabbika (glorifie le nom de ton Seigneur). En 55:78, tabarak ismu rabbika (beni soit le nom de ton Seigneur). Le nom est toujours un vecteur d'invocation et de reconnaissance, jamais un simple label.",
        axe5_frequence: "Le nom est ce qui permet au khalifa de reconnaitre, d'invoquer et de se relier. Sans nom, pas d'identification, pas de relation. Le khalifa qui glorifie le nom reconnait l'identite de celui qui l'a cree, ce qui est le fondement de toute action juste et responsable."
      },
      'Ciel/Ce qui couvre': {
        senses: ['ciel', 'toit', 'nuage', 'pluie', 'herbage'],
        status: 'peu_probable',
        proof_ctx: "Le Ciel/Ce qui couvre decrit une realite physique : l'espace au-dessus, ce qui recouvre. Dans ce verset, le mot isma est en idafa avec rabbika (le ... de celui qui t'eleve), ce qui impose un sens d'identification, pas de couverture. On glorifie un nom, pas un ciel dans cette construction.",
        axe1_verset: "Le mot isma est complement d'objet de sabbih et suivi de rabbika en idafa. Si on prend le sens de ciel, le verset dirait 'glorifie le ciel de celui qui t'eleve'. Cette construction est grammaticalement possible mais semantiquement etrange : on glorifie un nom ou un attribut, pas un espace physique en tant que possession de quelqu'un. Le champ lexical du verset est celui de la grandeur et de l'identite.",
        axe2_voisins: "Les versets suivants parlent de creation, de determination, de guidance — des actes intellectuels et creatifs, pas d'elements physiques du cosmos. Le ciel n'est pas mentionne dans la suite immediate. Le verset 1 introduit l'identite de celui dont les actes seront enumeres, pas un element de son univers physique.",
        axe3_sourate: "La sourate 87 traite de la grandeur divine et de la revelation, pas de cosmologie. Le theme est spirituel et pedagogique : glorifier, rappeler, se souvenir. Le ciel comme espace physique ne s'inscrit pas dans ce fil directeur. Le nom comme identite s'y inscrit naturellement.",
        axe4_coherence: "Quand le Coran parle du ciel, il utilise sama' avec des verbes comme khalaqa (creer), rafa'a (elever), bana (construire). Avec sabbih, c'est toujours ism qui suit, pas sama'. La coherence des collocations coraniques confirme que sabbih + ism = glorifier le nom.",
        axe5_frequence: "Le ciel comme realite physique ne contribue pas directement a la mission du khalifa dans ce contexte. Le nom, en revanche, est l'outil fondamental de toute relation et reconnaissance, ce qui est au coeur de la mission de justice et de civilisation."
      },
      'Hauteur/Élévation': {
        senses: ['etre haut', 'se dresser', 'monter'],
        status: 'nul',
        proof_ctx: "La Hauteur/Elevation decrit un mouvement vers le haut ou un etat d'eminence. Le mot isma dans ce verset est clairement un nom (ism = nom), pas un participe ou un adjectif de hauteur. Ce sens est porte par le mot al-a'la en fin de verset, pas par isma."
      },
      'Chasse': {
        senses: ['chasser'],
        status: 'nul',
        proof_ctx: "La chasse est un sens marginal et specialise qui n'a aucun rapport avec le contexte de glorification et de grandeur du verset."
      }
    }
  }, 2);

  // rbb(253) — Seigneurie/Autorité bienveillante
  await upsertVWA(5949, 'rbb', 'celui qui élève', {
    sense_chosen: 'celui qui élève',
    concept_chosen: 'Seigneurie/Autorité bienveillante',
    concepts: {
      'Seigneurie/Autorité bienveillante': {
        senses: ['seigneur', 'maitre', 'proprietaire', 'celui qui eleve', 'celui qui entretient', 'gouverner'],
        status: 'retenu',
        proof_ctx: "D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la racine r-b-b porte deux grandes directions non-nulles. La Seigneurie/Autorite bienveillante est retenue car rabbika est en idafa avec le pronom ka (ton), ce qui etablit une relation personnelle d'autorite et de soin. Le rabb est celui qui possede, eleve et entretient — c'est une autorite permanente et bienveillante, pas un simple processus de croissance. La distinction avec Croissance/Augmentation est philosophique : la croissance est un processus physique impersonnel (augmenter, faire grandir), tandis que la seigneurie est une relation entre deux etres, ou l'un prend soin de l'autre avec autorite. Le pronom 'ton' (ka) impose cette relation personnelle — on ne dit pas 'ta croissance' pour designer celui qui prend soin de soi.",
        axe1_verset: "Le mot rabbika est en construction d'annexion avec le pronom ka (ton) : celui qui t'eleve. Le champ lexical du verset contient sabbih (glorifie), isma (le nom) et al-a'la (le Tres-Haut). Tous ces mots convergent vers une relation d'autorite et de grandeur. Glorifier le nom de celui qui t'eleve implique une reconnaissance de cette autorite bienveillante. Le rabb est l'interlocuteur de la glorification.",
        axe2_voisins: "Les versets 2-5 decrivent les actes de ce rabb : Il a cree, paracheve, determine, guide, fait emerger le paturage. Ce sont des actes d'autorite bienveillante — creer et parfaire, determiner et guider, nourrir. Le rabb du verset 1 est celui dont les actes seront enumeres comme preuves de sa seigneurie bienveillante.",
        axe3_sourate: "La sourate 87 pose d'emblee la relation entre le prophete et son rabb : glorifie son nom. Puis elle enumere les raisons de cette glorification (creation, guidance, revelation). Le rabb est le fil conducteur — c'est son autorite bienveillante qui cree, guide et revele.",
        axe4_coherence: "Le Coran utilise rabb systematiquement pour designer la relation entre Dieu et ses creatures. En 1:2, rabb al-'alamin (celui qui eleve les mondes). En 2:131, rabbi al-'alamin. Le rabb est toujours celui qui prend soin, eleve et possede — une autorite exercee avec bienveillance. La coherence coranique confirme ce sens relationnel.",
        axe5_frequence: "Le khalifa a besoin d'un rabb — quelqu'un qui l'eleve, le guide et prend soin de lui. Cette relation d'autorite bienveillante est le cadre dans lequel le khalifa peut remplir sa mission. Sans celui qui eleve, pas d'elevation. La reconnaissance du rabb par la glorification est le premier pas du khalifa dans sa mission."
      },
      'Croissance/Augmentation': {
        senses: ['augmenter', 'croitre', 'faire grandir', 'nourrir', 'developper'],
        status: 'probable',
        proof_ctx: "La Croissance/Augmentation est un processus physique d'accroissement. Ce sens est probable car la racine r-b-b contient bien l'idee de faire grandir. Mais dans le verset, rabbika avec le pronom possessif etablit une relation personnelle, pas un processus impersonnel. La distinction philosophique est nette : la croissance est un mecanisme naturel qui se produit sans relation personnelle, tandis que la seigneurie est une relation entre deux etres. On dit 'ton seigneur', 'celui qui t'eleve', mais 'ta croissance' ne designe pas une personne.",
        axe1_verset: "Le champ lexical du verset est celui de la grandeur personnelle : glorifier, nom, Tres-Haut. La croissance comme processus physique (augmenter, faire grandir) ne s'inscrit pas naturellement dans ce champ de louange et d'identite. Le verset commande de glorifier quelqu'un, pas un processus. La Croissance ne peut pas etre glorifiee au sens d'un imperatif sabbih.",
        axe2_voisins: "Les versets 2-5 montrent des actes intentionnels : creer, parachever, determiner, guider. Ce sont des actes d'un agent conscient, pas d'un processus naturel de croissance. La croissance est un phenomene passif, tandis que les versets voisins decrivent des actes volontaires et diriges. L'agent des versets suivants est une autorite qui agit, pas un processus qui se deroule.",
        axe3_sourate: "Le theme de la sourate est la relation entre Dieu et le prophete : glorifier, creer pour lui, lui reveler, lui faciliter. C'est une relation personnelle, pas un processus impersonnel de croissance. La sourate traite d'autorite et de guidance, pas de biologie ou de developpement naturel.",
        axe4_coherence: "Quand le Coran parle de croissance physique, il utilise des verbes comme anbata (faire pousser, 71:17) ou raba (augmenter). Le mot rabb est toujours utilise pour designer une relation d'autorite, jamais pour decrire un simple processus de croissance vegetale ou physique.",
        axe5_frequence: "La croissance est un aspect de la mission du khalifa (developper la civilisation), mais dans ce verset, il s'agit de reconnaitre celui qui eleve le khalifa lui-meme. C'est la relation fondatrice, pas un processus a observer."
      },
      'Éducation/Accompagnement': {
        senses: ['elever un enfant', 'eduquer', 'former'],
        status: 'nul',
        proof_ctx: "L'education est un sens derive de la seigneurie — elever un enfant est un aspect de la relation rabb/marbub. Mais dans le verset, le pronom ka et le contexte de glorification orientent vers la relation d'autorite globale, pas vers le seul aspect educatif."
      },
      'Commerce/Usure': {
        senses: ['usure', 'augmentation de dette'],
        status: 'nul',
        proof_ctx: "L'usure et le commerce n'ont aucun rapport avec le contexte de glorification du Tres-Haut."
      }
    }
  }, 3);

  // elw(371) — Hauteur/Élévation
  await upsertVWA(5949, 'elw', 'le Très-Haut', {
    sense_chosen: 'le Très-Haut',
    concept_chosen: 'Hauteur/Élévation',
    concepts: {
      'Hauteur/Élévation': {
        senses: ['etre haut', 'elever', 's\'elever', 'superieur', 'le Tres-Haut', 'rivaliser en elevation'],
        status: 'retenu',
        proof_ctx: "D'apres les sources etymologiques, la racine '-l-w porte le sens fondamental de hauteur et d'elevation. Le mot al-a'la est le superlatif (af'al) avec l'article al- : le plus haut, le Tres-Haut. C'est un adjectif qualifiant rabbika (celui qui t'eleve). L'Animal/Faune (charger sur un chameau) est un sens isole et physique qui n'a aucun rapport avec le contexte de grandeur divine.",
        axe1_verset: "Le mot al-a'la est le superlatif de la racine '-l-w avec l'article al-, ce qui en fait un attribut defini : le plus haut de tous. Il qualifie rabbika dans une structure appositive. Le champ lexical — glorifier, nom, celui qui eleve — culmine avec le Tres-Haut. C'est le sommet semantique du verset, l'attribut final qui justifie la glorification. La hauteur supreme est l'aboutissement logique de la grandeur evoquee par les mots precedents.",
        axe2_voisins: "Les versets 2-5 decrivent les actes de ce Tres-Haut : creation, achevement, determination, guidance. Chaque acte confirme la hauteur et la superiorite de celui qui les accomplit. Celui qui cree et determine est au-dessus de ce qu'il cree et determine. La hauteur du verset 1 est illustree par la maitrise absolue des versets suivants.",
        axe3_sourate: "La sourate s'appelle al-A'la — le Tres-Haut. C'est le titre meme de la sourate, ce qui montre que la hauteur/elevation est le theme central. Tout dans la sourate gravite autour de cette hauteur : les actes divins (v2-5), la revelation (v6-8), le rappel (v9-13). Le Tres-Haut est a la fois le sujet et le theme.",
        axe4_coherence: "Le Coran utilise al-'ali et al-a'la pour decrire Dieu dans plusieurs passages. En 2:255, wa huwa al-'ali al-'azim (et Il est le Tres-Haut, l'Immense). En 4:34, inna-llaha kana 'aliyan kabiran. La hauteur est un attribut divin constant dans le Coran, toujours associe a la grandeur et a l'autorite.",
        axe5_frequence: "La reconnaissance de la hauteur supreme est fondamentale pour le khalifa. Le khalifa est un representant sur terre de celui qui est au-dessus de tout. Reconnaitre cette hauteur, c'est se situer dans l'ordre cosmique : le khalifa agit sur terre en reconnaissant que l'autorite supreme est ailleurs. C'est le cadre de toute action juste."
      },
      'Animal/Faune': {
        senses: ['charger sur un chameau'],
        status: 'nul',
        proof_ctx: "Ce sens isole et concret (charger sur un chameau) n'a aucun rapport avec le contexte du verset. Le mot al-a'la est un superlatif avec article defini, pas un verbe d'action physique."
      }
    }
  }, 4);

  // VA verset 1
  await upsertVA(5949, {
    translation_arab: "Glorifie le nom de celui qui t'eleve, le Tres-Haut",
    full_translation: "Glorifie le Nom de ton Seigneur, le Tres Haut",
    segments: [
      { fr: "Glorifie", pos: "V", phon: "sabbih", arabic: "سَبِّحِ", position: 1, word_key: "sbh", is_particle: false, sense_retenu: "glorifier" },
      { fr: "le nom (de)", pos: "N", phon: "isma", arabic: "ٱسْمَ", position: 2, word_key: "smw", is_particle: false, sense_retenu: "nom" },
      { fr: "celui qui t'eleve", pos: "N", phon: "rabbika", arabic: "رَبِّكَ", position: 3, word_key: "rbb", is_particle: false, sense_retenu: "celui qui élève" },
      { fr: "le Tres-Haut", pos: "ADJ", phon: "al-a'la", arabic: "ٱلْأَعْلَى", position: 4, word_key: "elw", is_particle: false, sense_retenu: "le Très-Haut" }
    ],
    translation_explanation: `§DEMARCHE§
Le verbe **sabbih** est un imperatif de la forme II (forme intensive). La forme II en arabe ajoute une intensite ou une repetition a l'action — ici, glorifier de maniere appuyee, declarer la purete activement et avec insistance. L'imperatif s'adresse directement au prophete.

Le mot **isma** est un nom au cas accusatif (complement d'objet direct de sabbih). D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la racine s-m-w donne ism = ce par quoi une chose est connue et distinguee. Le nom est l'outil d'identification par excellence.

Le mot **rabbika** est en construction d'annexion (idafa) avec le pronom ka (ton). D'apres les sources etymologiques, la racine r-b-b porte l'idee de celui qui eleve, nourrit et prend soin. Le rabb est celui qui possede et eleve avec bienveillance — une relation personnelle d'autorite et de soin.

Le mot **al-a'la** est un superlatif (forme af'al) avec l'article al- : le plus haut de tous. Il qualifie rabbika en apposition. C'est le sommet semantique du verset.

§JUSTIFICATION§
**glorifie** — Le sens retenu est « glorifier ». Ce mot est choisi car il traduit l'acte de declarer grand et pur, qui est exactement ce que commande la forme II de s-b-h. L'alternative « louer » est ecartee car la louange peut etre passive (constater la grandeur), tandis que glorifier est un acte volontaire et intense. L'alternative « prier » est ecartee car c'est un sens derive qui restreint l'acte a un rituel specifique.

**le nom** — Le sens retenu est « nom ». Ce mot est le seul naturel dans cette construction : glorifier le nom de quelqu'un. L'alternative « ciel » ne convient pas car on ne glorifie pas un ciel en tant que possession de quelqu'un.

**celui qui t'eleve** — Le sens retenu est « celui qui eleve ». Cette expression est choisie car elle rend la dimension pedagogique et bienveillante de rabb — celui qui fait grandir, qui eleve au sens propre et figure. L'alternative « seigneur » est ecartee car c'est un mot du vocabulaire feodal europeen qui masque la dimension de soin et d'elevation.

**le Tres-Haut** — Le sens retenu est « le Tres-Haut ». Cette expression est le superlatif naturel de « haut » en francais, correspondant exactement a la forme af'al de la racine '-l-w.

§CRITIQUE§
**celui qui t'eleve vs Seigneur** — Les traductions courantes donnent « Seigneur » pour rabb. Ce choix vient du vocabulaire religieux chretien herite des premieres traductions latines. Mais rabb en arabe signifie etymologiquement « celui qui eleve, nourrit et prend soin ». Le mot « Seigneur » evoque un suzerain feodal qui possede et commande, tandis que rabb evoque un educateur qui eleve et fait grandir. La difference change le sens du verset : au lieu d'un ordre de glorifier un maitre, c'est un ordre de glorifier celui qui prend soin de nous et nous eleve. La dimension pedagogique disparait avec « Seigneur ».`
  });

  // ========== VERSET 2 (5950) ==========
  console.log('\n--- v2 (5950): alladhi khalaqa fa-sawwa ---');

  // xlq(344) — Création/Production
  await upsertVWA(5950, 'xlq', 'créer', {
    sense_chosen: 'créer',
    concept_chosen: 'Création/Production',
    concepts: {
      'Création/Production': {
        senses: ['creer', 'creation', 'creature', 'faconner', 'nature', 'caractere'],
        status: 'retenu',
        proof_ctx: "D'apres les sources etymologiques, la racine kh-l-q porte le sens fondamental de creer, faire exister ce qui n'existait pas. Le verbe khalaqa est a l'accompli 3e personne — Il a cree. C'est le premier acte enumere apres l'injonction de glorifier : la creation est la premiere raison de la glorification. Les autres sens (Lisse, Mensonge) sont des sens isoles et marginaux sans rapport avec le contexte.",
        axe1_verset: "Le verbe khalaqa est a l'accompli (action achevee) et precede fa-sawwa (puis a paracheve). Le champ lexical est celui de la production et du perfectionnement : creer puis achever. La creation est l'acte premier, le point de depart. Le verbe est suivi du relatif alladhi qui relie cette action au rabb du verset 1. Le champ semantique est entierement celui de la production originelle.",
        axe2_voisins: "Le verset 1 commande de glorifier, et le verset 2 donne la premiere raison : Il a cree. Les versets 3-5 continueront l'enumeration : determiner, guider, faire emerger. La creation est le premier maillon d'une chaine d'actes divins. Chaque verset ajoute un acte supplementaire qui enrichit la glorification.",
        axe3_sourate: "La sourate 87 commence par la glorification puis enumere les actes qui la justifient. La creation est le premier de ces actes — c'est l'acte fondateur. Sans creation, pas de perfectionnement, pas de determination, pas de guidance. Le theme de la sourate (grandeur divine) est ancre dans cet acte originel.",
        axe4_coherence: "Le Coran associe frequemment la creation a la glorification. En 36:36, subhana alladhi khalaqa (gloire a Celui qui a cree). En 23:14, fa-tabarak Allah ahsan al-khaliqin (beni soit Dieu, le meilleur des createurs). La creation est systematiquement citee comme preuve de la grandeur divine.",
        axe5_frequence: "La creation est le fondement de la mission du khalifa : il est lui-meme une creature. Reconnaitre l'acte de creation, c'est reconnaitre sa propre origine et sa dependance. Le khalifa agit sur terre en sachant qu'il est le produit d'une creation intentionnelle, ce qui donne un sens a sa mission."
      },
      'Sens isolé/Lisse': {
        senses: ['lisse'],
        status: 'nul',
        proof_ctx: "Le sens 'lisse' est un sens physique isole qui n'a aucun lien avec la creation ou le contexte du verset."
      },
      'Sens isolé/Mensonge': {
        senses: ['mensonge'],
        status: 'nul',
        proof_ctx: "Le mensonge est un sens derive qui n'a aucun rapport avec le contexte de creation et de glorification."
      }
    }
  }, 2);

  // swy(295) — Achèvement/Perfection (retenu pour CE verset)
  await upsertVWA(5950, 'swy', 'rendre parfait', {
    sense_chosen: 'rendre parfait',
    concept_chosen: 'Achèvement/Perfection',
    concepts: {
      'Achèvement/Perfection': {
        senses: ['achever', 'rendre parfait'],
        status: 'retenu',
        proof_ctx: "D'apres les sources etymologiques, la racine s-w-y porte plusieurs directions de sens. L'Achevement/Perfection est retenu pour ce verset car fa-sawwa suit immediatement khalaqa (Il a cree). La sequence creer puis parachever decrit deux etapes distinctes : la production originelle puis la mise en forme finale. Sawwa en forme II (intensive) signifie rendre parfait, donner la forme achevee. La distinction avec Egalite/Equivalence est philosophique : l'egalite est un etat de correspondance entre deux choses (A = B), tandis que l'achevement est un acte de finalisation (A passe de l'etat brut a l'etat fini). Apres la creation, ce qui est necessaire n'est pas l'egalisation mais le perfectionnement. On cree d'abord la matiere brute, puis on la paracheve.",
        axe1_verset: "Le verbe fa-sawwa est precede de la conjonction fa qui indique une succession temporelle : d'abord khalaqa (Il a cree), puis sawwa (Il a paracheve). Le champ lexical est celui de la production en deux etapes : creer puis parfaire. Sawwa en forme II ajoute l'intensite a l'action — ce n'est pas un simple ajustement mais un perfectionnement complet. Le verset decrit un processus acheve : la creation et son parachievement.",
        axe2_voisins: "Le verset 3 continue avec qaddara fa-hada (Il a determine puis guide). La structure est identique : un verbe a l'accompli + fa + un deuxieme verbe. Chaque paire decrit un processus en deux temps : creer/parfaire, determiner/guider. Le parachievement du verset 2 est la premiere illustration du soin apporte a la creation.",
        axe3_sourate: "La sourate enumere les actes divins pour justifier la glorification. Le parachievement est le deuxieme acte cite, juste apres la creation. C'est un acte de soin et de precision — Dieu ne se contente pas de creer, Il perfectionne. Ce theme de precision et de soin traverse toute la sourate jusqu'a la revelation (v6-8).",
        axe4_coherence: "Le Coran utilise sawwa dans d'autres contextes de creation. En 91:7, wa nafsin wa ma sawwaha (et l'ame et celui qui l'a parachevee). En 82:7, alladhi khalaqaka fa-sawwaka fa-'adalaka (qui t'a cree, paracheve et proportionne). La sequence khalaqa fa-sawwa est un pattern coranique recurrent qui designe la creation suivie du perfectionnement.",
        axe5_frequence: "Le parachievement montre que la creation n'est pas laissee a l'etat brut — elle est perfectionnee. Pour le khalifa, cela signifie qu'il est le produit d'une creation intentionnelle et soignee. Sa mission de civilisation est elle-meme un acte de parachievement du monde — il perfectionne ce qui lui est confie."
      },
      'Égalité/Équivalence': {
        senses: ['etre egal', 'equivalent', 'meme chose', 'indifferent', 'egaliser', 'aplanir'],
        status: 'probable',
        proof_ctx: "L'Egalite/Equivalence est un etat de correspondance entre deux choses. Ce sens est probable car la racine s-w-y contient bien l'idee d'egaliser et d'aplanir. Mais apres khalaqa (creer), sawwa ne decrit pas une egalisation entre deux entites — il decrit le perfectionnement d'une seule chose creee. La distinction est : l'egalite compare deux objets, le perfectionnement transforme un seul objet de l'etat brut a l'etat acheve.",
        axe1_verset: "Le champ lexical du verset est celui de la production : creer puis faire quelque chose a la creation. L'egalite suppose deux termes a comparer, mais le verset ne mentionne qu'un seul objet — ce qui est cree. Il n'y a pas de deuxieme terme auquel la creation serait egalisee. Le verbe sawwa ici s'applique a un seul objet pour le parfaire, pas pour le rendre egal a un autre.",
        axe2_voisins: "Les versets voisins montrent des actes unidirectionnels : creer, determiner, guider, faire sortir. Aucun de ces actes n'implique une comparaison entre deux choses. La structure est celle d'un agent qui agit sur un objet, pas d'un agent qui compare deux objets. L'egalisation ne s'inscrit pas dans cette logique d'actes successifs sur la creation.",
        axe3_sourate: "Le theme de la sourate est la grandeur divine manifestee par ses actes. Egaliser n'est pas un acte de grandeur au meme titre que creer, parfaire, determiner, guider. Le perfectionnement est un acte de soin qui contribue a la grandeur, tandis que l'egalisation est une operation technique neutre.",
        axe4_coherence: "En 82:7, khalaqa fa-sawwaka fa-'adalaka : la sequence khalaqa + sawwa + 'adala montre que sawwa est distinct de 'adala (proportionne/equilibre). Si sawwa signifiait deja egaliser, 'adala serait redondant. Le Coran distingue donc le perfectionnement (sawwa) de l'equilibrage ('adala).",
        axe5_frequence: "L'egalite est une valeur pour le khalifa (justice), mais ce n'est pas le sujet du verset. Le verset parle de la creation divine, pas de la justice humaine. Le perfectionnement comme acte divin est plus pertinent pour illustrer la grandeur qui justifie la glorification."
      },
      'Sens isolé/Se': {
        senses: ['se tenir droit'],
        status: 'nul',
        proof_ctx: "Se tenir droit est un sens reflexif qui ne s'applique pas ici — le sujet du verbe est Dieu et l'objet est la creation, pas un reflexif."
      },
      'Lieu/Géographie': {
        senses: ['milieu'],
        status: 'nul',
        proof_ctx: "Le milieu comme position geographique n'a aucun rapport avec la creation et le perfectionnement decrits dans ce verset."
      }
    }
  }, 3);

  // VA verset 2
  await upsertVA(5950, {
    translation_arab: "Celui qui a cree puis paracheve",
    full_translation: "Celui qui a cree et agence harmonieusement",
    segments: [
      { fr: "Celui qui", pos: "REL", phon: "alladhi", arabic: "ٱلَّذِى", position: 1, word_key: null, is_particle: true, sense_retenu: null },
      { fr: "a cree", pos: "V", phon: "khalaqa", arabic: "خَلَقَ", position: 2, word_key: "xlq", is_particle: false, sense_retenu: "créer" },
      { fr: "puis a paracheve", pos: "V", phon: "fa-sawwa", arabic: "فَسَوَّىٰ", position: 3, word_key: "swy", is_particle: false, sense_retenu: "rendre parfait" }
    ],
    translation_explanation: `§DEMARCHE§
Le pronom relatif **alladhi** (celui qui) relie ce verset au verset 1 : c'est celui qui t'eleve, le Tres-Haut, celui qui a cree. La structure est celle d'une proposition relative qui developpe l'identite du rabb.

Le verbe **khalaqa** est a l'accompli (action achevee dans le passe). D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la racine kh-l-q signifie creer, faire exister ce qui n'existait pas.

Le verbe **fa-sawwa** est a l'accompli, precede de la conjonction fa qui marque la succession temporelle : d'abord la creation, puis le parachievement. D'apres les sources etymologiques, la racine s-w-y en forme II signifie rendre parfait, achever la forme. La forme II (taf'il) ajoute l'intensite — c'est un parachievement complet, pas un simple ajustement.

§JUSTIFICATION§
**a cree** — Le sens retenu est « creer ». C'est l'acte de faire exister ce qui n'existait pas. Aucune alternative n'est necessaire — le verbe khalaqa a l'accompli se traduit directement.

**paracheve** — Le sens retenu est « rendre parfait ». Le mot « parachever » est choisi car il exprime l'idee de donner la forme finale et parfaite a ce qui a ete cree. L'alternative « egaliser » est ecartee car le verset ne parle pas de rendre deux choses egales mais de perfectionner une seule creation. L'alternative « aplanir » est ecartee car c'est un sens trop physique et plat pour decrire le soin apporte a la creation.

§CRITIQUE§
**paracheve vs agence harmonieusement** — Les traductions courantes donnent « agence harmonieusement » (Hamidullah). Ce choix ajoute le mot « harmonieusement » qui est absent du texte arabe. Le verbe sawwa ne contient pas l'idee d'harmonie mais celle d'achevement et de perfection. « Harmonieusement » est une interpretation qui oriente le lecteur vers l'esthetique, tandis que le texte parle de completude — la creation a ete achevee, rendue parfaite. C'est un ajout invisible qui embellit le texte au-dela de ce qu'il dit.`
  });

  // ========== VERSET 3 (5951) ==========
  console.log('\n--- v3 (5951): wa-alladhi qaddara fa-hada ---');

  // qdr(373) — Mesure/Détermination (retenu pour CE verset)
  await upsertVWA(5951, 'qdr', 'déterminer', {
    sense_chosen: 'déterminer',
    concept_chosen: 'Mesure/Détermination',
    concepts: {
      'Mesure/Détermination': {
        senses: ['mesurer', 'determiner', 'decreter', 'destin', 'valeur'],
        status: 'retenu',
        proof_ctx: "D'apres les sources etymologiques, la racine q-d-r porte deux directions majeures. La Mesure/Determination est retenue car qaddara est en forme II (intensive) a l'accompli : Il a determine/mesure. La forme II de q-d-r signifie fixer les proportions, assigner une mesure, decreter. C'est un acte de precision et d'assignation, dirige vers l'exterieur — on determine quelque chose pour quelque chose d'autre. La distinction avec Puissance/Capacite est philosophique : la puissance est un etat interieur (etre capable de), tandis que la determination est un acte dirige vers l'exterieur (fixer les proportions de quelque chose). Qaddara (forme II) est transitif et actif — il determine un objet, il ne se contente pas d'etre capable.",
        axe1_verset: "Le verbe qaddara est a l'accompli de forme II, suivi de fa-hada (puis a guide). Le champ lexical est celui de la precision et de la direction : determiner puis guider. Ces deux actes forment une paire logique — d'abord fixer les proportions, puis diriger vers le but. La determination est l'acte de mesurer et d'assigner, ce qui prepare la guidance. Le verset decrit un processus en deux temps : fixer puis orienter.",
        axe2_voisins: "Le verset 2 decrivait creer puis parachever (production materielle). Le verset 3 passe a determiner puis guider (assignation et direction). C'est une progression logique : d'abord la matiere est creee et perfectionnee, puis des proportions et une direction lui sont assignees. Les versets 4-5 continueront avec la production et le cycle de vie.",
        axe3_sourate: "La sourate enumere les actes divins en progression : creer, parfaire, determiner, guider, faire emerger. La determination est le troisieme acte — elle vient apres la creation physique et avant la guidance. C'est l'acte intermediaire qui donne une mesure et un destin a ce qui a ete cree.",
        axe4_coherence: "Le Coran utilise qaddara dans d'autres contextes de determination divine. En 25:2, wa khalaqa kulla shay'in fa-qaddarahu taqdiran (Il a cree toute chose et l'a determinee avec precision). En 80:19, min nutfatin khalaqahu fa-qaddarahu (d'une goutte Il l'a cree et l'a determine). La paire khalaqa + qaddara est un pattern coranique recurrent.",
        axe5_frequence: "La determination donne un sens et une mesure a la creation. Pour le khalifa, cela signifie que rien n'est laisse au hasard — chaque chose a une proportion et un destin. La mission du khalifa s'inscrit dans cet ordre mesure : agir avec justice, c'est respecter les proportions etablies."
      },
      'Puissance/Capacité': {
        senses: ['pouvoir', 'etre capable'],
        status: 'probable',
        proof_ctx: "La Puissance/Capacite est un etat interieur — etre capable de faire quelque chose. Ce sens est probable car la racine q-d-r contient bien l'idee de pouvoir. Mais dans ce verset, qaddara est en forme II a l'accompli, ce qui est un acte transitif (determiner quelque chose), pas un etat interieur (etre capable). La forme II ajoute l'intensite et la transitivite — elle ne decrit pas un etat mais un acte. De plus, la paire qaddara + hada (determiner + guider) est logique (fixer les proportions puis orienter), tandis que la paire 'etre capable + guider' serait etrange et sans progression.",
        axe1_verset: "Le champ lexical du verset contient qaddara et hada en paire. La puissance comme etat interieur ne forme pas de paire logique avec la guidance. On ne dit pas 'il a pu puis a guide' de la meme maniere que 'il a determine puis a guide'. La determination est un acte preparatoire a la guidance, tandis que la puissance est un etat qui ne prepare rien en soi.",
        axe2_voisins: "Les versets 2 et 4 montrent des actes concrets : creer, parachever, faire sortir. La puissance comme etat interieur serait le seul non-acte dans la serie, ce qui briserait la progression. Le verset 3 doit decrire un acte au meme titre que les autres versets, pas un etat.",
        axe3_sourate: "La sourate enumere les actes divins comme preuves de grandeur. La puissance est presupposee par tous ces actes — celui qui cree est necessairement puissant. Mais le verset ne dit pas qu'il est puissant, il dit ce qu'il a fait. La determination est un acte specifique, tandis que la puissance est une qualite generale implicite.",
        axe4_coherence: "Le Coran utilise qadir/qadira pour la puissance (inna-llaha 'ala kulli shay'in qadir = Dieu est capable de toute chose). Mais qaddara (forme II) est systematiquement utilise pour la determination et la mesure, pas pour la puissance. Le Coran distingue les deux par la forme verbale.",
        axe5_frequence: "La puissance est un attribut du khalifa (la capacite d'agir), mais dans ce verset, c'est la determination divine qui est mise en avant — Dieu a fixe les proportions de la creation. Le khalifa bénéficie de cette determination, il n'est pas appele a etre puissant mais a reconnaitre que tout est mesure."
      },
      'Sens isolé/Marmite': {
        senses: ['marmite'],
        status: 'nul',
        proof_ctx: "La marmite est un sens concret isole qui n'a aucun rapport avec le contexte de determination et de guidance du verset."
      }
    }
  }, 2);

  // hdy(261) — Guidance/Direction
  await upsertVWA(5951, 'hdy', 'guider', {
    sense_chosen: 'guider',
    concept_chosen: 'Guidance/Direction',
    concepts: {
      'Guidance/Direction': {
        senses: ['guider', 'diriger vers la bonne voie', 'montrer le chemin', 'guidance', 'se guider soi-meme'],
        status: 'retenu',
        proof_ctx: "D'apres les sources etymologiques, la racine h-d-y porte le sens premier de guider, montrer le chemin. Fa-hada (puis Il a guide) est a l'accompli apres la conjonction fa de succession. La guidance est un acte dirige vers l'exterieur — on guide quelqu'un d'autre vers un but. Les sens de Conduite/Comportement et de Don/Offrande sont des extensions derivees qui ne s'appliquent pas dans ce contexte de guidance divine apres la determination.",
        axe1_verset: "Le verbe hada est precede de fa qui marque la succession : apres avoir determine, Il a guide. Le champ lexical est celui de la direction et de l'orientation. La guidance complete la determination — d'abord fixer les proportions, puis orienter vers le but. Le verset decrit un processus de soin en deux temps : mesurer puis diriger.",
        axe2_voisins: "Le verset 2 montrait creer puis parfaire (production materielle). Le verset 3 montre determiner puis guider (orientation). Le verset 4 montrera faire emerger le paturage (provision). Chaque paire enrichit le tableau des actes divins. La guidance est l'acte d'orientation qui suit la determination, comme le perfectionnement suit la creation.",
        axe3_sourate: "Le theme de la sourate est la grandeur divine et la revelation. La guidance est un fil conducteur : Dieu guide la creation (v3), puis Il guidera le prophete par la revelation (v6-8). La guidance du verset 3 est cosmique (toute la creation), celle des versets 6-8 est specifique (le prophete). Les deux s'inscrivent dans le meme theme.",
        axe4_coherence: "Le Coran utilise hada dans de nombreux contextes. En 20:50, rabbuna alladhi a'ta kulla shay'in khalqahu thumma hada (notre Seigneur est celui qui a donne a chaque chose sa forme puis l'a guidee). Ce verset parallele (20:50) confirme la sequence creation + guidance comme pattern coranique. La guidance est une constante des actes divins envers la creation.",
        axe5_frequence: "La guidance est fondamentale pour le khalifa — c'est par la guidance qu'il connait sa mission et son chemin. Le khalifa est guide par celui qui a determine ses proportions. La reconnaissance de cette guidance est le fondement de l'action juste : le khalifa ne s'oriente pas seul, il est guide par celui qui l'a cree et mesure."
      },
      'Conduite/Comportement': {
        senses: ['conduite', 'maniere d\'agir', 'comportement calme'],
        status: 'nul',
        proof_ctx: "La conduite/comportement decrit une maniere d'etre, pas un acte de guidance. Le verbe hada ici est transitif implicite — Il a guide (la creation), pas Il s'est comporte calmement."
      },
      'Don/Offrande': {
        senses: ['cadeau', 'offrande', 'sacrifice'],
        status: 'nul',
        proof_ctx: "Le don/offrande est un sens derive (hadiya = cadeau) qui n'a aucun rapport avec le contexte de determination et de guidance divine."
      }
    }
  }, 3);

  // VA verset 3
  await upsertVA(5951, {
    translation_arab: "Et Celui qui a determine puis guide",
    full_translation: "qui a decrete et guide",
    segments: [
      { fr: "Et Celui qui", pos: "REL", phon: "wa-alladhi", arabic: "وَٱلَّذِى", position: 1, word_key: null, is_particle: true, sense_retenu: null },
      { fr: "a determine", pos: "V", phon: "qaddara", arabic: "قَدَّرَ", position: 2, word_key: "qdr", is_particle: false, sense_retenu: "déterminer" },
      { fr: "puis a guide", pos: "V", phon: "fa-hada", arabic: "فَهَدَىٰ", position: 3, word_key: "hdy", is_particle: false, sense_retenu: "guider" }
    ],
    translation_explanation: `§DEMARCHE§
La conjonction **wa** (et) relie ce verset au precedent. Le pronom relatif **alladhi** continue la description de celui qui est glorifie au verset 1.

Le verbe **qaddara** est a l'accompli de la forme II (taqdir). D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la forme II de q-d-r signifie mesurer avec precision, fixer les proportions, decreter. La forme II ajoute l'intensite a la racine — ce n'est pas un simple pouvoir mais un acte actif de determination precise.

Le verbe **fa-hada** est a l'accompli, precede de fa (puis). D'apres les sources etymologiques, h-d-y signifie guider, montrer le chemin, diriger vers la bonne voie.

§JUSTIFICATION§
**determine** — Le sens retenu est « determiner ». Ce mot est choisi car il rend l'idee de fixer les proportions et le destin avec precision. L'alternative « pouvoir » (sens de la racine q-d-r hors forme II) est ecartee car qaddara en forme II est un acte transitif de mesure, pas un etat de capacite. L'alternative « decreter » est proche mais orientee vers un contexte juridique.

**guide** — Le sens retenu est « guider ». Ce mot est choisi car il traduit directement l'acte de montrer le chemin. L'alternative « diriger » est ecartee car elle implique une autorite administrative, tandis que guider implique un accompagnement bienveillant.

§CRITIQUE§
Les traductions courantes donnent « decrete et guide » (Hamidullah). La difference entre « determiner » et « decreter » est subtile mais reelle. « Decreter » evoque un acte juridique ou autoritaire (un decret), tandis que « determiner » evoque un acte de precision et de mesure. L'etymologie de q-d-r porte l'idee de mesurer (qadr = mesure, proportion), pas de promulguer un decret. Le sens change legerement : au lieu d'un Dieu qui decrete comme un legislateur, c'est un Dieu qui mesure et fixe les proportions avec precision.`
  });

  // ========== VERSET 4 (5952) ==========
  console.log('\n--- v4 (5952): wa-alladhi akhraja al-mar\'a ---');

  // xrj(388) — Sortie/Émergence
  await upsertVWA(5952, 'xrj', 'faire sortir', {
    sense_chosen: 'faire sortir',
    concept_chosen: 'Sortie/Émergence',
    concepts: {
      'Sortie/Émergence': {
        senses: ['sortir', 'faire sortir', 'expulser', 'emerger', 'produire'],
        status: 'retenu',
        proof_ctx: "D'apres les sources etymologiques, la racine kh-r-j porte le sens premier de sortir, passer de l'interieur vers l'exterieur. Le verbe akhraja est en forme IV (causatif) : faire sortir. C'est un acte de production — faire emerger quelque chose de la terre. Les sens de Tribut/Revenu sont des extensions economiques qui ne s'appliquent pas dans ce contexte de production naturelle.",
        axe1_verset: "Le verbe akhraja est en forme IV (causatif) a l'accompli : Il a fait sortir. L'objet est al-mar'a (le paturage). Le champ lexical est celui de la production naturelle — faire emerger de la terre le paturage, la vegetation. La forme IV marque la causalite : Dieu ne sort pas lui-meme, Il fait sortir. C'est un acte de production dirige vers la creation.",
        axe2_voisins: "Les versets 2-3 decrivaient des actes abstraits (creer, parfaire, determiner, guider). Le verset 4 passe au concret : faire emerger le paturage. C'est la premiere illustration tangible de la determination et de la guidance — la vegetation qui sort de terre est un exemple visible de la determination divine. Le verset 5 completera le cycle en decrivant la decomposition.",
        axe3_sourate: "La sourate passe de la glorification (v1) aux actes divins (v2-5). Le verset 4 est le moment ou les actes deviennent visibles et concrets. La vegetation est le signe le plus quotidien et le plus universel de la creation divine. C'est une preuve accessible a tous, pas un argument abstrait.",
        axe4_coherence: "Le Coran utilise akhraja pour la vegetation dans d'autres passages. En 6:99, fa-akhrajna bihi nabata kulli shay'in (Nous en avons fait sortir la vegetation de toute chose). En 2:22, fa-akhraja bihi min ath-thamarati (Il en a fait sortir des fruits). La sortie de la vegetation est un theme coranique recurrent comme preuve de la puissance divine.",
        axe5_frequence: "La vegetation qui sort de terre est un signe fondamental pour le khalifa : elle montre que la terre produit sous l'action divine. Le khalifa, charge de la civilisation, depend de cette production naturelle. Reconnaitre que le paturage emerge par la volonte divine, c'est reconnaitre la source de toute subsistance."
      },
      'Tribut/Revenu': {
        senses: ['impot', 'revenu'],
        status: 'nul',
        proof_ctx: "L'impot et le revenu sont des sens economiques derives de l'idee de 'ce qui sort' (production economique). Mais dans ce verset, l'objet est al-mar'a (le paturage), pas un impot ou un revenu. Le contexte est naturel, pas economique."
      }
    }
  }, 2);

  // rey(1618) — Pâturage/Protection
  await upsertVWA(5952, 'rey', 'paître', {
    sense_chosen: 'paître',
    concept_chosen: 'Pâturage/Protection',
    concepts: {
      'Pâturage/Protection': {
        senses: ['paitre', 'garder', 'veiller sur'],
        status: 'retenu',
        proof_ctx: "D'apres les sources etymologiques, la racine r-'-y porte le sens de paitre, garder un troupeau, veiller sur. Le mot al-mar'a est un nom de lieu (schema maf'al) avec l'article al- : le lieu ou l'on pait, le paturage. C'est la vegetation qui sert de nourriture au betail et, par extension, a toute creature. Il n'y a qu'un seul regroupement de sens pour cette racine, donc pas de comparaison a faire. Le paturage est le lieu de subsistance par excellence.",
        axe1_verset: "Le mot al-mar'a est un nom de lieu (schema maf'al) avec l'article al- qui le definit : le paturage connu, la vegetation. Il est complement d'objet d'akhraja (Il a fait sortir). Le champ lexical est celui de la production naturelle : faire sortir le paturage. Le paturage est la nourriture qui sort de la terre, le premier maillon de la chaine alimentaire.",
        axe2_voisins: "Le verset 5 decrit ce que devient ce paturage : des debris noirdtres. La paire v4-v5 forme un cycle complet : emergence puis decomposition. Le paturage du verset 4 est le moment de vitalite, le sommet du cycle de vie vegetal avant le declin du verset 5.",
        axe3_sourate: "La sourate enumere les actes divins du plus abstrait au plus concret. Le paturage est l'illustration la plus quotidienne et la plus tangible : chacun voit l'herbe pousser. C'est un acte de provision — Dieu pourvoit aux besoins de la creation par la vegetation.",
        axe4_coherence: "Le Coran utilise le paturage et la vegetation comme preuves divines dans de nombreux passages. En 79:31, akhraja minha ma'aha wa mar'aha (Il en a fait sortir son eau et son paturage). Le meme mot mar'a apparait dans le meme contexte : la provision divine pour la terre.",
        axe5_frequence: "Le paturage est la base de la subsistance terrestre. Le khalifa depend de cette provision pour survivre et civiliser. Reconnaitre que le paturage est un acte divin, c'est reconnaitre que la subsistance ne vient pas de l'effort humain seul mais d'une source plus haute."
      }
    }
  }, 3);

  // VA verset 4
  await upsertVA(5952, {
    translation_arab: "Et Celui qui a fait emerger le paturage",
    full_translation: "qui a fait pousser le paturage",
    segments: [
      { fr: "Et Celui qui", pos: "REL", phon: "wa-alladhi", arabic: "وَٱلَّذِىٓ", position: 1, word_key: null, is_particle: true, sense_retenu: null },
      { fr: "a fait emerger", pos: "V", phon: "akhraja", arabic: "أَخْرَجَ", position: 2, word_key: "xrj", is_particle: false, sense_retenu: "faire sortir" },
      { fr: "le paturage", pos: "N", phon: "al-mar'a", arabic: "ٱلْمَرْعَىٰ", position: 3, word_key: "rey", is_particle: false, sense_retenu: "paître" }
    ],
    translation_explanation: `§DEMARCHE§
La conjonction **wa** et le pronom relatif **alladhi** continuent l'enumeration des actes divins.

Le verbe **akhraja** est a l'accompli de la forme IV (causatif). D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la racine kh-r-j signifie sortir. La forme IV ajoute la causalite : faire sortir, produire. C'est Dieu qui fait sortir de la terre la vegetation.

Le mot **al-mar'a** est un nom de lieu (schema maf'al) de la racine r-'-y (paitre). D'apres les sources etymologiques, r-'-y porte l'idee de paitre, garder un troupeau, et le mar'a est le lieu de pature, la vegetation servant de nourriture.

§JUSTIFICATION§
**fait emerger** — Le sens retenu est « faire sortir ». Le mot « fait emerger » est choisi car il rend l'idee de passage de l'interieur (la terre) vers l'exterieur (la surface). L'alternative « produire » est ecartee car elle est trop abstraite et industrielle — le texte decrit un mouvement physique de sortie, pas une production economique. L'alternative « expulser » est ecartee car elle implique un rejet violent.

**paturage** — Le sens retenu est « paitre ». Le mot « paturage » est choisi car c'est le nom de lieu naturel de la racine r-'-y. L'alternative « herbage » est ecartee car moins courant en francais moderne.

§CRITIQUE§
**fait emerger vs fait pousser** — Les traductions courantes donnent « fait pousser » (Hamidullah). La difference est significative : « pousser » decrit un processus lent de croissance vegetale, tandis que « faire emerger/sortir » (akhraja) decrit un acte ponctuel de production. Le texte dit qu'Il a fait sortir le paturage de la terre — c'est un acte de volonte, pas un processus biologique. La racine kh-r-j ne contient pas l'idee de croissance mais celle de sortie. Le choix de « fait pousser » transforme un acte divin en processus naturel.`
  });

  // ========== VERSET 5 (5953) ==========
  console.log('\n--- v5 (5953): fa-ja\'alahu ghutha\'an ahwa ---');

  // jel(359) — Action/Réalisation
  await upsertVWA(5953, 'jel', 'rendre', {
    sense_chosen: 'rendre',
    concept_chosen: 'Action/Réalisation',
    concepts: {
      'Action/Réalisation': {
        senses: ['faire', 'rendre', 'placer', 'commencer a', 'etablir', 'creer'],
        status: 'retenu',
        proof_ctx: "D'apres les sources etymologiques, la racine j-'-l porte le sens de faire, rendre, transformer. Le verbe fa-ja'alahu est a l'accompli avec le pronom hu (le) : puis Il l'a rendu. Le verset decrit la transformation du paturage en debris. Ja'ala est ici dans son sens de rendre/transformer — faire passer une chose d'un etat a un autre. Le sens de Recompense est un sens isole qui n'a aucun rapport avec ce contexte de transformation naturelle.",
        axe1_verset: "Le verbe ja'alahu est a l'accompli avec le pronom hu qui renvoie au paturage du verset 4. L'objet second est ghutha'an ahwa (des debris noirdtres) — c'est ce en quoi le paturage est transforme. Le champ lexical est celui de la transformation : rendre quelque chose autre chose. Le verset decrit le passage de la vitalite a la decomposition.",
        axe2_voisins: "Le verset 4 montrait l'emergence du paturage — le sommet du cycle de vie. Le verset 5 montre sa decomposition. La paire v4-v5 decrit un cycle complet : emergence puis transformation en debris. Ja'ala est le verbe de cette transformation, le pivot entre la vie et la mort vegetale.",
        axe3_sourate: "La sourate enumere les actes divins, y compris la transformation et le cycle de vie. Le verset 5 complete l'enumeration par le cycle naturel : Dieu ne se contente pas de creer et de faire emerger, Il gere aussi le declin. C'est un signe de maitrise totale sur le cycle de la vie.",
        axe4_coherence: "Le Coran utilise ja'ala dans de nombreux contextes de transformation. En 21:30, wa ja'alna min al-ma'i kulla shay'in hayy (et Nous avons fait de l'eau toute chose vivante). Ja'ala est le verbe coranique de la transformation par excellence — rendre une chose autre chose.",
        axe5_frequence: "Le khalifa observe le cycle de la vie et de la mort vegetale comme un signe de la maitrise divine. Cette transformation rappelle que rien n'est permanent sauf celui qui transforme. Le khalifa est invite a tirer les lecons de ce cycle pour sa mission : construire en sachant que tout retourne a son createur."
      },
      'Sens isolé/Récompense': {
        senses: ['recompense'],
        status: 'nul',
        proof_ctx: "La recompense est un sens isole qui n'a aucun rapport avec la transformation du paturage en debris dans ce verset."
      }
    }
  }, 1);

  // ghw2(2646) — Débris/Écume
  await upsertVWA(5953, 'ghw2', 'debris charries par un torrent', {
    sense_chosen: 'debris charries par un torrent',
    concept_chosen: 'Débris/Écume',
    concepts: {
      'Débris/Écume': {
        senses: ['debris charries par un torrent', 'ecume de surface', 'herbes seches et brisees sur un torrent', 'ordures et dechets charries', 'feuilles pourries melees a l\'ecume'],
        status: 'retenu',
        proof_ctx: "D'apres les sources etymologiques, la racine gh-th-w designe les debris charries par un torrent, l'ecume et les dechets vegetaux melee a l'eau. Le mot ghutha'an est au cas accusatif (objet second de ja'alahu) : Il l'a rendu debris. C'est un mot concret et visuel — les debris qu'on voit flotter sur un torrent apres la pluie. Les sens d'Abondance/Remplissage et de Sens isole/Animal sont marginaux et hors contexte.",
        axe1_verset: "Le mot ghutha'an est au cas accusatif, complement d'objet second de ja'alahu — c'est ce en quoi le paturage est transforme. Il est suivi d'ahwa (noirdtre) qui le qualifie. Le champ lexical est celui de la decomposition : des debris noirdtres, restes d'une vegetation qui etait verte. L'image est concrete : les herbes seches et brisees qu'on voit sur les torrents.",
        axe2_voisins: "Le verset 4 montrait le paturage vert et vivant. Le verset 5 montre ce meme paturage transforme en debris. Le contraste est saisissant : de la vie a la mort, du vert au noir. Les debris sont l'aboutissement du cycle commence au verset 4. Ce contraste illustre la maitrise divine sur le cycle complet de la vie.",
        axe3_sourate: "La sourate montre la maitrise divine sur toutes les etapes : creation, perfectionnement, determination, guidance, production et decomposition. Les debris sont le dernier maillon de cette chaine d'actes. Dieu maitrise le debut (creation) et la fin (decomposition). C'est un theme de completude.",
        axe4_coherence: "Le Coran utilise ghutha' dans un autre passage. En 13:17, fa-amma az-zabadu fa-yadhhabu jufa'an wa amma ma yanfa'u an-nasa fa-yamkuthu fi-l-ard (quant a l'ecume, elle s'en va comme debris, tandis que ce qui est utile aux gens reste sur terre). Le Coran utilise les debris comme metaphore de ce qui est futile et ephemere, par opposition a ce qui est utile et durable.",
        axe5_frequence: "Les debris rappellent au khalifa que le monde materiel est ephemere. La vegetation pousse puis se decompose — c'est le cycle naturel. Le khalifa est invite a ne pas s'attacher a ce qui est destine a devenir debris, mais a investir dans ce qui est durable : la justice, la connaissance, la civilisation."
      },
      'Abondance/Remplissage': {
        senses: ['vallee remplie de debris'],
        status: 'nul',
        proof_ctx: "L'abondance/remplissage decrit un etat de plenitude. Le verset parle de debris comme resultat de decomposition, pas d'un etat de remplissage. Le contexte est la transformation, pas l'abondance."
      },
      'Sens isolé/Animal': {
        senses: ['le lion'],
        status: 'nul',
        proof_ctx: "Le lion est un sens completement isole et hors contexte. Le verset parle de vegetation decomposee."
      }
    }
  }, 2);

  // Hw(2647) — Noirceur/Couleur sombre
  await upsertVWA(5953, 'Hw', 'noiratre', {
    sense_chosen: 'noiratre',
    concept_chosen: 'Noirceur/Couleur sombre',
    concepts: {
      'Noirceur/Couleur sombre': {
        senses: ['sombre', 'noiratre', 'rougeur tirant vers le noir', 'noir tirant vers le vert', 'brun fonce'],
        status: 'retenu',
        proof_ctx: "D'apres les sources etymologiques, la racine h-w designe un spectre de couleurs sombres : noirdtre, brun fonce, noir tirant vers le vert. Le mot ahwa est un adjectif (schema af'al) qui qualifie ghutha'an (debris). C'est la couleur de la decomposition — la vegetation verte qui noircit en se decomposant. Les sens de Rassemblement/Contention et de Serpent sont des sens isoles et hors contexte.",
        axe1_verset: "Le mot ahwa est un adjectif qualifiant ghutha'an (debris). C'est la couleur finale du paturage apres decomposition : du vert au sombre. Le champ lexical — rendre, debris, noirdtre — decrit la transformation complete. L'adjectif ahwa est la touche finale du tableau : les debris ne sont pas juste des debris, ils sont noirdtres. C'est la couleur de la mort vegetale.",
        axe2_voisins: "Le verset 4 evoquait implicitement le vert du paturage vivant. Le verset 5 oppose la couleur sombre des debris. Ce contraste chromatique est un procede coranique puissant : le passage du vert (vie) au noir (mort). Le lecteur visualise la transformation. Les versets 6-10 passeront a un autre sujet (la revelation), cloturant ce tableau naturel sur cette image de decomposition.",
        axe3_sourate: "La sourate passe des actes de creation et de vie (v2-4) a l'acte de decomposition (v5). La couleur sombre est le marqueur visuel de cette transition. Elle termine l'enumeration des actes divins sur une note de realisme : le cycle se termine, tout finit par devenir sombre et se decomposer.",
        axe4_coherence: "Le Coran utilise les couleurs comme signes. En 35:27, les montagnes ont des stries blanches, rouges et noires. En 39:21, l'eau fait pousser les plantes puis elles jaunissent et deviennent debris. Le passage du vert au sombre est un theme coranique de transformation et d'ephemere.",
        axe5_frequence: "La couleur sombre des debris rappelle au khalifa la realite du cycle de vie. Rien ne reste vert eternellement. Cette conscience de l'ephemere pousse le khalifa a agir avec urgence et a investir dans ce qui depasse le cycle materiel : la justice, la connaissance et la guidance."
      },
      'Rassemblement/Contention': {
        senses: ['rassembler', 'contenir', 's\'enrouler'],
        status: 'nul',
        proof_ctx: "Le rassemblement est un sens physique qui ne s'applique pas a un adjectif qualifiant des debris. Ahwa est une couleur, pas une action de rassemblement."
      },
      'Sens isolé/Serpent': {
        senses: ['serpent'],
        status: 'nul',
        proof_ctx: "Le serpent est un sens completement isole qui n'a aucun rapport avec les debris et la couleur de la decomposition."
      }
    }
  }, 3);

  // VA verset 5
  await upsertVA(5953, {
    translation_arab: "Puis Il en a fait des debris noirdtres",
    full_translation: "et en a fait ensuite un debris desseche",
    segments: [
      { fr: "puis en a fait", pos: "V", phon: "fa-ja'alahu", arabic: "فَجَعَلَهُۥ", position: 1, word_key: "jel", is_particle: false, sense_retenu: "rendre" },
      { fr: "des debris", pos: "N", phon: "ghutha'an", arabic: "غُثَآءً", position: 2, word_key: "ghw2", is_particle: false, sense_retenu: "debris charries par un torrent" },
      { fr: "noirdtres", pos: "ADJ", phon: "ahwa", arabic: "أَحْوَىٰ", position: 3, word_key: "Hw", is_particle: false, sense_retenu: "noiratre" }
    ],
    translation_explanation: `§DEMARCHE§
La conjonction **fa** marque la succession temporelle : apres avoir fait emerger le paturage (v4), Il l'a rendu debris.

Le verbe **ja'alahu** est a l'accompli avec le pronom hu (le/en) qui renvoie au paturage du verset 4. D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), ja'ala signifie rendre, faire devenir, transformer. La structure ja'ala + objet + complement d'etat signifie « il l'a rendu tel ».

Le mot **ghutha'an** est au cas accusatif (complement d'etat). D'apres les sources etymologiques, la racine gh-th-w designe les debris charries par un torrent — les herbes seches, les feuilles pourries et les dechets vegetaux qu'on voit flotter sur l'eau apres la pluie.

Le mot **ahwa** est un adjectif (schema af'al) qui qualifie ghutha'an. D'apres les sources etymologiques, la racine h-w designe un spectre de couleurs sombres : noirdtre, brun fonce, rougeur tirant vers le noir, noir tirant vers le vert. C'est la couleur de la matiere vegetale en decomposition.

§JUSTIFICATION§
**debris** — Le sens retenu est « debris charries par un torrent ». Le mot « debris » est choisi car c'est le terme francais le plus proche de ghutha' — des restes vegetaux brises et disperses. L'alternative « ecume » est ecartee car l'ecume est plus liquide et superficielle, tandis que ghutha' designe specifiquement les debris solides charries.

**noirdtres** — Le sens retenu est « noirdtre ». Ce mot est choisi car il traduit la nuance de couleur sombre sans etre un noir pur — ahwa est un sombre qui tire vers le noir, le vert fonce ou le brun, exactement ce que « noirdtre » exprime en francais. L'alternative « sombre » est ecartee car trop vague. L'alternative « brun fonce » est ecartee car trop specifique et trop technique.

§CRITIQUE§
**debris noirdtres vs debris desseche** — Les traductions courantes donnent « debris desseche » (Hamidullah). Le mot ahwa ne signifie pas « desseche » — il signifie « noirdtre, sombre ». « Desseche » viendrait de la racine y-b-s (secher), qui est absente du texte. Les traducteurs ont interprete la couleur sombre comme un signe de dessechement, ce qui est une interpretation logique mais pas l'etymologie. Le texte dit que les debris sont noirdtres, pas qu'ils sont desseches. La couleur sombre est un fait visuel, le dessechement est une deduction. Notre traduction reste au niveau de ce que le texte dit litteralement.`
  });

  console.log('\n=== PIPELINE S87 v1-5 TERMINÉE ===');
})();
