const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// =====================================================
// PIPELINE SOURATE 2 — VERSETS 129-130
// V129: verse_id=136, analysis_id=497
// V130: verse_id=137, analysis_id=495
// =====================================================

const verseData = {
  129: {
    verse_id: 136,
    analysis_id: 497,
    translation_arab: "Notre Seigneur, et suscite parmi eux un envoye issu d'eux qui leur recite Tes signes, leur enseigne le Livre et la sagesse, et les purifie. En verite, c'est Toi le Puissant, le Sage.",
    full_translation: "Notre Seigneur! Envoie l'un des leurs comme messager parmi eux, pour leur reciter Tes versets, leur enseigner le Livre et la Sagesse, et les purifier. Car c'est Toi certes le Puissant, le Sage!",
    translation_explanation: `§DEMARCHE§
Le verset 129 est une invocation d'Ibrahim et Ismail, la suite directe de leur priere en 2:127-128. Apres avoir eleve les fondations de la Maison sacree et demande l'acceptation de leurs actes, ils demandent maintenant a Dieu de susciter un envoye parmi leur descendance. Le vocatif **rabbana** est un nom masculin singulier accusatif de la racine r-b-b avec pronom suffixe 1PP. Le Lane's donne : seigneur, maitre, celui qui eleve et entretient. L'accusatif marque l'invocation directe — ils s'adressent a leur Seigneur en Le nommant. Le pronom « na » (notre) etablit la relation de dependance — c'est leur Seigneur a eux. Le verbe **ib'ath** est un imperatif 2MS de la racine b-'-th. Le Lane's donne : envoyer, susciter, faire surgir. L'imperatif exprime la demande — ils demandent a Dieu de susciter un envoye. La forme I indique un envoi simple et direct. Le preposition **fihim** (parmi eux) precise le lieu de la mission — l'envoye doit etre suscite au milieu d'eux, dans leur communaute. Le nom **rasulan** est un nom masculin singulier indefini accusatif de la racine r-s-l. Le Lane's donne : envoye, messager, celui qui est envoye. L'indefini marque qu'ils demandent un envoye — pas un envoye specifique nomme, mais un envoye parmi eux. La preposition **minhum** (d'entre eux, issu d'eux) precise l'origine — l'envoye doit etre issu de leur descendance. Le verbe **yatlu** est un inaccompli 3MS indicatif de la racine t-l-w. Le Lane's donne : reciter, lire a haute voix, suivre. L'inaccompli marque une action continue et repetee — l'envoye recite les signes de maniere permanente. La preposition **'alayhim** (sur eux) indique que la recitation est dirigee vers la communaute. Le nom **ayatika** est un nom feminin pluriel genitif de la racine a-y-t avec pronom suffixe 2MS. Le Lane's donne : signes, preuves, versets. Le pronom « ka » (Tes) rattache les signes a Dieu — ce sont les signes de Dieu que l'envoye recite. Le verbe **yu'allimuhumu** est un inaccompli 3MS de la forme II de la racine '-l-m avec pronom suffixe 3MP. Le Lane's donne : enseigner, faire savoir. La forme II (fa''ala) est causative — faire savoir, transmettre le savoir. L'inaccompli marque une action continue. Le pronom « hum » indique que l'enseignement est dirige vers la communaute. Le nom **al-kitaba** est un nom masculin singulier defini accusatif de la racine k-t-b. Le Lane's donne : livre, ecriture revelee. L'article defini (al-) marque qu'il s'agit du Livre par excellence — l'ecriture revelee specifique. Le nom **al-hikmata** est un nom feminin singulier defini accusatif de la racine h-k-m. Le Lane's donne : sagesse, science appliquee avec justesse. L'article defini marque la Sagesse par excellence — pas une sagesse quelconque mais la Sagesse divine. Le verbe **yuzakkihim** est un inaccompli 3MS de la forme II de la racine z-k-w avec pronom suffixe 3MP. Le Lane's donne : purifier, faire croitre en purete. La forme II est causative — faire devenir pur. L'inaccompli marque une action continue. La purification est le troisieme role de l'envoye apres la recitation et l'enseignement. La particule emphatique **innaka** (en verite toi) introduit la cloture de l'invocation. Le pronom emphatique **anta** (toi) renforce l'adresse directe — c'est Toi et personne d'autre. Le nom **al-'azizu** est un adjectif masculin singulier defini nominatif de la racine '-z-z. Le Lane's donne : puissant, invincible, glorieux. L'article defini marque l'exclusivite — c'est LE Puissant, pas un puissant parmi d'autres. Le nom **al-hakimu** est un adjectif masculin singulier defini nominatif de la racine h-k-m. Le Lane's donne : sage, celui qui juge avec sagesse. C'est la deuxieme occurrence de la racine h-k-m dans le verset — la premiere comme nom (la sagesse enseignee) et la deuxieme comme adjectif (Dieu est le Sage).

§JUSTIFICATION§
**Seigneur** — Le sens retenu est « seigneur ». Le mot rabb designe celui qui eleve, entretient et possede. « Seigneur » rend la relation d'autorite bienveillante. L'alternative « maitre » est ecartee car elle evoque la domination en francais courant, alors que rabb porte l'idee d'education et d'entretien.

**suscite** — Le sens retenu est « susciter ». Le verbe ib'ath signifie envoyer, faire surgir, susciter. « Suscite » est choisi car il rend l'idee de faire apparaitre quelqu'un qui n'etait pas encore la. L'alternative « ressuscite » est ecartee car le contexte n'est pas la resurrection des morts mais l'envoi d'un envoye vivant.

**envoye** — Le sens retenu est « envoyer ». Le mot rasul designe celui qui est envoye avec une mission. « Envoye » preserve l'idee d'envoi actif. L'alternative « messager » est ecartee car en francais courant « messager » evoque le porteur d'un message ponctuel.

**recite** — Le sens retenu est « reciter ». Le verbe yatlu signifie reciter a haute voix, lire. « Recite » est choisi car il rend l'enonciation orale des signes divins. L'alternative « suivre » est ecartee car le contexte est la transmission orale des signes, pas le fait de suivre quelqu'un.

**signes** — Le sens retenu est « signes ». Le mot ayat designe les signes de Dieu — preuves, versets, miracles. « Signes » est choisi car il englobe les differentes manifestations de la Parole divine. L'alternative « versets » est ecartee car elle restreint le sens a la seule parole ecrite alors que ayat couvre aussi les signes dans la creation.

**enseigne** — Le sens retenu est « enseigner ». Le verbe yu'allimu est la forme II causative de '-l-m — faire savoir. « Enseigne » rend l'acte de transmission du savoir. L'alternative « informer » est ecartee car enseigner implique une transmission structuree et durable, pas une simple information.

**le Livre** — Le sens retenu est « livre ». Le mot al-kitab designe l'ecriture revelee. « Le Livre » avec article defini rend le caractere specifique de cette ecriture — c'est LE Livre, pas un livre quelconque.

**la sagesse** — Le sens retenu est « sagesse ». Le mot al-hikma designe la science appliquee avec justesse. « La sagesse » rend l'idee de la connaissance juste des choses et de leurs causes. L'alternative « le jugement » est ecartee car hikma dans ce contexte est un don enseigne, pas un acte de juger.

**purifie** — Le sens retenu est « purifier ». Le verbe yuzakki est la forme II causative de z-k-w — faire devenir pur. « Purifie » rend l'acte de nettoyage moral et spirituel. L'alternative « aumone » est ecartee car le contexte est la purification des personnes, pas le versement d'une aumone.

**Puissant** — Le sens retenu est « puissant ». L'adjectif al-'aziz designe celui qui est invincible et glorieux. « Puissant » rend l'idee de la force que rien ne peut vaincre. L'alternative « rare » est ecartee car le contexte est un attribut divin de force, pas de rarete.

**Sage** — Le sens retenu est « sage ». L'adjectif al-hakim designe celui qui juge avec sagesse. « Sage » rend l'idee de la connaissance juste appliquee avec discernement. L'alternative « juge » est ecartee car hakim comme adjectif divin designe la sagesse permanente, pas un acte ponctuel de jugement.

§CRITIQUE§
Les traductions courantes donnent sensiblement le meme sens pour ce verset. La principale difference est l'ordre des missions de l'envoye. Le texte arabe donne : reciter les signes, enseigner le Livre et la sagesse, purifier. Notre traduction suit exactement cet ordre. Hamidullah utilise « messager » la ou nous donnons « envoye » — la difference est mineure mais « envoye » est plus fidele a l'etymologie de r-s-l. Le mot « suscite » pour ib'ath est un choix delibere : il rend mieux l'idee de faire apparaitre quelqu'un dans une communaute que le simple « envoie ». La cloture « c'est Toi le Puissant, le Sage » est identique dans toutes les traductions car le texte est sans ambiguite.`,
    segments: [
      { fr: "notre Seigneur", pos: "nom", phon: "rabbana", arabic: "\u0631\u064E\u0628\u064E\u0651\u0646\u064E\u0627", word_key: "rbb", is_particle: false, sense_retenu: "seigneur", position: 0 },
      { fr: "et", phon: "wa", arabic: "\u0648\u064E", is_particle: true, position: 1 },
      { fr: "suscite", pos: "verbe", phon: "ib'ath", arabic: "\u0671\u0628\u0652\u0639\u064E\u062B\u0652", word_key: "be\u1E6F", is_particle: false, sense_retenu: "susciter", position: 2 },
      { fr: "parmi eux", phon: "fihim", arabic: "\u0641\u0650\u064A\u0647\u0650\u0645\u0652", is_particle: true, position: 3 },
      { fr: "un envoye", pos: "nom", phon: "rasulan", arabic: "\u0631\u064E\u0633\u064F\u0648\u0644\u064B\u0627", word_key: "rsl", is_particle: false, sense_retenu: "envoye", position: 4 },
      { fr: "d'entre eux", phon: "minhum", arabic: "\u0645\u0650\u0651\u0646\u0652\u0647\u064F\u0645\u0652", is_particle: true, position: 5 },
      { fr: "il recite", pos: "verbe", phon: "yatlu", arabic: "\u064A\u064E\u062A\u0652\u0644\u064F\u0648\u0627\u06DF", word_key: "tlw", is_particle: false, sense_retenu: "reciter", position: 6 },
      { fr: "sur eux", phon: "'alayhim", arabic: "\u0639\u064E\u0644\u064E\u064A\u0652\u0647\u0650\u0645\u0652", is_particle: true, position: 7 },
      { fr: "Tes signes", pos: "nom", phon: "ayatika", arabic: "\u0621\u064E\u0627\u064A\u064E\u0640\u0670\u062A\u0650\u0643\u064E", word_key: "ayt", is_particle: false, sense_retenu: "signes", position: 8 },
      { fr: "et", phon: "wa", arabic: "\u0648\u064E", is_particle: true, position: 9 },
      { fr: "leur enseigne", pos: "verbe", phon: "yu'allimuhumu", arabic: "\u064A\u064F\u0639\u064E\u0644\u0651\u0650\u0645\u064F\u0647\u064F\u0645\u064F", word_key: "elm", is_particle: false, sense_retenu: "enseigner", position: 10 },
      { fr: "le Livre", pos: "nom", phon: "al-kitaba", arabic: "\u0671\u0644\u0652\u0643\u0650\u062A\u064E\u0640\u0670\u0628\u064E", word_key: "ktb", is_particle: false, sense_retenu: "livre", position: 11 },
      { fr: "et", phon: "wa", arabic: "\u0648\u064E", is_particle: true, position: 12 },
      { fr: "la sagesse", pos: "nom", phon: "al-hikmata", arabic: "\u0671\u0644\u0652\u062D\u0650\u0643\u0652\u0645\u064E\u0629\u064E", word_key: "hkm", is_particle: false, sense_retenu: "sagesse", position: 13 },
      { fr: "et les purifie", pos: "verbe", phon: "wayuzakkihim", arabic: "\u0648\u064E\u064A\u064F\u0632\u064E\u0643\u0651\u0650\u064A\u0647\u0650\u0645\u0652", word_key: "zkw", is_particle: false, sense_retenu: "purifier", position: 14 },
      { fr: "en verite tu es", phon: "innaka", arabic: "\u0625\u0650\u0646\u064E\u0651\u0643\u064E", is_particle: true, position: 15 },
      { fr: "Toi", phon: "anta", arabic: "\u0623\u064E\u0646\u062A\u064E", is_particle: true, position: 16 },
      { fr: "le Puissant", pos: "adjectif", phon: "al-'azizu", arabic: "\u0671\u0644\u0652\u0639\u064E\u0632\u0650\u064A\u0632\u064F", word_key: "ezz", is_particle: false, sense_retenu: "puissant", position: 17 },
      { fr: "le Sage", pos: "adjectif", phon: "al-hakimu", arabic: "\u0671\u0644\u0652\u062D\u064E\u0643\u0650\u064A\u0645\u064F", word_key: "hkm", is_particle: false, sense_retenu: "sage", position: 18 }
    ],
    words: [
      // rbb pos=0
      {
        word_key: "rbb", position: 0, sense_chosen: "seigneur",
        analysis_axes: {
          sense_chosen: "seigneur",
          concept_chosen: "Seigneurie/Autorite bienveillante",
          concepts: {
            "Seigneurie/Autorite bienveillante": {
              status: "retenu",
              senses: ["seigneur", "maitre", "proprietaire", "celui qui eleve", "celui qui entretient", "celui qui possede", "gouverner"],
              proof_ctx: "Le mot rabbana est un nom masculin singulier accusatif de la racine r-b-b avec pronom suffixe 1PP. Le Lane's donne : seigneur, maitre, celui qui eleve et entretient, proprietaire. Le rabb est celui qui possede, eleve, nourrit et entretient ce qui est sous sa responsabilite. La seigneurie est une relation permanente d'autorite bienveillante — le seigneur prend soin de ce qu'il possede. Ici « rabbana » (notre Seigneur) est un vocatif d'invocation — Ibrahim et Ismail s'adressent a Dieu en Le reconnaissant comme leur Seigneur. Le pronom « na » (notre) marque la relation personnelle. La distinction avec la croissance (probable) est que rabb ici n'est pas un verbe de croissance mais un nom de relation : le Seigneur par rapport a ses serviteurs.",
              axe1_verset: "Le mot rabbana ouvre le verset comme vocatif d'invocation. Ibrahim et Ismail s'adressent a Dieu directement — c'est une priere. Le champ lexical du verset (susciter, envoye, reciter, enseigner, purifier) montre que la demande porte sur la mission prophetique. Ils demandent a leur Seigneur de susciter un envoye — la relation de seigneurie est la base de la demande. On demande a celui qui eleve et entretient de poursuivre son oeuvre en envoyant un guide.",
              axe2_voisins: "Le verset 127 utilisait deja « rabbana » — « Notre Seigneur, accepte de nous ». Le verset 128 continue avec « rabbana » — « Notre Seigneur, fais de nous des soumis a Toi ». Le verset 129 est la troisieme invocation consecutive avec « rabbana ». Les versets 127-129 forment une serie d'invocations d'Ibrahim et Ismail, chacune commencant par le meme vocatif. La repetition montre l'intensite de la priere.",
              axe3_sourate: "Le vocatif « rabbana » est recurrent dans la sourate al-Baqarah. En 2:127, 2:128, 2:129, 2:201, 2:250, 2:286 — la sourate est ponctuee de prieres adressees au Seigneur. Ces invocations montrent que la relation de seigneurie est le fondement de la communication entre l'homme et Dieu. La sourate enseigne comment s'adresser a Dieu — par la reconnaissance de Sa seigneurie.",
              axe4_coherence: "La racine r-b-b apparait environ 970 fois dans le Coran. Le vocatif « rabbana » est une formule d'invocation recurrente — en 3:8, 3:16, 3:53, 7:23, 14:40. Le Coran enseigne la priere par l'exemple — les prophetes commencent par reconnaitre la seigneurie de Dieu avant de formuler leur demande. La reconnaissance precede toujours la demande.",
              axe5_frequence: "Pour la mission du khalifa, reconnaitre le Seigneur est le premier acte de la mission. Le khalifa est un gerant, pas un proprietaire — il doit reconnaitre que le Seigneur est au-dessus de lui. La priere d'Ibrahim montre que meme les prophetes demandent a Dieu — personne n'est autonome dans la mission. La seigneurie divine est le cadre de toute action humaine."
            },
            "Croissance/Augmentation": {
              status: "probable",
              senses: ["augmenter", "croitre", "faire grandir", "nourrir", "developper", "exces", "colline", "eminence"],
              proof_ctx: "Le sens premier de r-b-b est la croissance — faire grandir, nourrir, elever. La distinction philosophique avec la seigneurie est que la croissance est le processus physique (faire grandir) tandis que la seigneurie est la relation d'autorite qui englobe la croissance. Le rabb fait grandir parce qu'il est seigneur — la croissance est une manifestation de la seigneurie, pas l'inverse. Dans ce verset, rabbana est un vocatif d'invocation qui designe la relation d'autorite, pas le processus de croissance.",
              axe1_verset: "Le mot rabbana pourrait theoriquement porter le sens de « celui qui fait grandir ». Mais le contexte est une invocation — Ibrahim s'adresse a Dieu pour demander un envoye. La croissance physique n'est pas l'objet de la demande. Le sens de seigneurie englobe la croissance mais va au-dela — le Seigneur eleve, possede et gouverne.",
              axe2_voisins: "Les versets 127-128 utilisent rabbana dans des contextes d'invocation — accepter, faire soumis, montrer les rites. Le sens de croissance n'est actif dans aucune de ces invocations. C'est la relation d'autorite qui est invoquee.",
              axe3_sourate: "La sourate al-Baqarah utilise rabb principalement au sens de seigneurie divine. En 2:21, « adorez votre Seigneur ». En 2:131, « soumis au Seigneur des mondes ». Le sens de croissance est present dans la racine mais pas dominant dans les usages coraniques.",
              axe4_coherence: "Le Coran utilise rabb comme titre divin — « Seigneur des mondes » (rabb al-'alamin). Le sens de croissance est implicite dans la seigneurie — Dieu fait grandir ce qu'Il possede. Mais dans les invocations, c'est la relation d'autorite qui est au premier plan.",
              axe5_frequence: "La croissance est un aspect de la mission du khalifa — faire grandir ce qui est sous sa responsabilite. Mais dans ce verset, la demande porte sur l'envoi d'un envoye, pas sur la croissance. Le sens de croissance reste pertinent comme arriere-plan de la seigneurie."
            },
            "Education/Accompagnement": {
              status: "nul",
              senses: ["elever un enfant", "eduquer", "former", "accompagner la croissance"],
              proof_ctx: "Le sens d'education est un aspect de la seigneurie — le rabb eleve et eduque. Mais le mot ici est un vocatif d'invocation (rabbana), pas un verbe d'education. Le contexte est la priere, pas l'acte d'eduquer."
            },
            "Commerce/Usure": {
              status: "nul",
              senses: ["usure", "augmentation de dette", "interet"],
              proof_ctx: "Le sens d'usure est hors sujet — le mot est un vocatif d'invocation a Dieu, pas un terme commercial."
            },
            "Souffle/Vent": {
              status: "nul",
              senses: ["essoufflement"],
              proof_ctx: "Le sens de souffle est hors sujet — le contexte est une invocation a Dieu."
            }
          }
        }
      },
      // beṯ pos=2
      {
        word_key: "be\u1E6F", position: 2, sense_chosen: "susciter",
        analysis_axes: {
          sense_chosen: "susciter",
          concept_chosen: "Envoi/Mission",
          concepts: {
            "Envoi/Mission": {
              status: "retenu",
              senses: ["envoyer", "envoyer un messager"],
              proof_ctx: "Le verbe ib'ath est un imperatif 2MS de la racine b-'-th. Le Lane's donne : envoyer, susciter, faire partir, deleguer. Le sens d'envoi/mission est l'acte de faire partir quelqu'un vers un but precis. L'imperatif marque la demande — Ibrahim demande a Dieu de susciter un envoye. La forme I indique un envoi simple et direct. La distinction avec la resurrection (probable) est que le contexte n'est pas la vie apres la mort mais l'envoi d'un prophete vivant dans une communaute vivante.",
              axe1_verset: "Le verbe ib'ath est l'action demandee — susciter un envoye. Le champ lexical du verset (envoye, reciter, enseigner, purifier) montre que l'envoi est le premier acte d'une chaine de missions. L'envoye est suscite pour accomplir trois taches : reciter les signes, enseigner le Livre et la sagesse, purifier. Le verbe ib'ath declenche toute la chaine missionnaire du verset.",
              axe2_voisins: "Le verset 127 parlait de l'elevation des fondations de la Maison. Le verset 128 demandait la soumission et les rites. Le verset 129 demande maintenant un envoye — la progression est : batir la Maison → se soumettre → demander un guide. La priere d'Ibrahim suit un ordre logique : d'abord le lieu, puis la pratique, puis le guide.",
              axe3_sourate: "La racine b-'-th apparait dans la sourate al-Baqarah dans des contextes d'envoi et de resurrection. En 2:56, Dieu ressuscite apres la mort. En 2:213, Dieu suscite les prophetes. Le verset 129 s'inscrit dans le theme de la suscitation prophetique — Dieu fait surgir des prophetes parmi les communautes. Le verbe ib'ath lie la construction de la Maison a la mission prophetique.",
              axe4_coherence: "La racine b-'-th apparait environ 67 fois dans le Coran. Le verbe ba'atha est utilise pour la resurrection des morts (2:56, 6:36) et pour l'envoi des prophetes (2:213, 16:36). Le double sens — susciter/ressusciter — montre que l'envoi d'un prophete est un acte de vivification spirituelle comparable a la resurrection physique.",
              axe5_frequence: "Pour la mission du khalifa, la suscitation d'un envoye est un acte de misericorde divine. Dieu ne laisse pas les communautes sans guide — Il suscite des envoyes pour reciter, enseigner et purifier. Le khalifa doit reconnaitre que la guidance ne vient pas de lui mais de Dieu qui suscite les guides."
            },
            "Resurrection/Eveil": {
              status: "probable",
              senses: ["ressusciter", "eveiller du sommeil", "se lever pour partir"],
              proof_ctx: "Le sens de resurrection est un sens majeur de b-'-th — ramener a la vie, eveiller. La distinction philosophique avec l'envoi est que la resurrection est un passage de la mort a la vie, tandis que l'envoi est un deplacement d'un lieu a un autre. Le verset parle de susciter un envoye vivant dans une communaute, pas de ressusciter un mort. Le sens de resurrection reste pertinent comme arriere-plan — susciter un prophete dans une communaute c'est la vivifier spirituellement.",
              axe1_verset: "Le verbe ib'ath pourrait theoriquement porter le sens d'eveiller — susciter un envoye c'est eveiller une communaute endormie. Mais le contexte est la demande d'un envoye specifique avec des missions precises (reciter, enseigner, purifier). Le sens d'envoi/mission est plus coherent avec les complements du verbe.",
              axe2_voisins: "Le verset 128 parlait de soumission — la communaute existe deja et cherche la guidance. Le verset 129 demande un guide. Le sens de resurrection n'est pas actif dans ce contexte — la communaute n'est pas morte, elle a besoin d'un guide.",
              axe3_sourate: "En 2:56, ba'atha est utilise au sens de resurrection (apres la mort). En 2:213, ba'atha est utilise au sens d'envoi des prophetes. La sourate utilise les deux sens selon le contexte.",
              axe4_coherence: "Le Coran utilise ba'atha dans les deux sens. Le contexte determine le sens — quand l'objet est un prophete, c'est l'envoi. Quand l'objet est un mort, c'est la resurrection.",
              axe5_frequence: "La resurrection spirituelle est un aspect de la mission prophetique — l'envoye eveille les consciences. Ce sens reste pertinent comme arriere-plan de l'envoi."
            },
            "Incitation/Impulsion": {
              status: "nul",
              senses: ["inciter", "exciter"],
              proof_ctx: "Le sens d'incitation est hors sujet — le contexte est la demande de susciter un envoye, pas d'inciter quelqu'un a agir."
            }
          }
        }
      },
      // rsl pos=4
      {
        word_key: "rsl", position: 4, sense_chosen: "envoye",
        analysis_axes: {
          sense_chosen: "envoye",
          concept_chosen: "Envoi/Message",
          concepts: {
            "Envoi/Message": {
              status: "retenu",
              senses: ["envoyer", "messager", "message", "liberer"],
              proof_ctx: "Le mot rasulan est un nom masculin singulier indefini accusatif de la racine r-s-l. Le Lane's donne : envoye, messager, celui qui est envoye avec une mission. Le rasul est l'agent de l'envoi — celui qui est mandate pour transmettre. L'indefini (rasulan sans article) marque qu'Ibrahim demande un envoye parmi d'autres, pas un envoye specifique nomme. L'accusatif marque l'objet de la demande — c'est ce qu'Ibrahim demande a Dieu de susciter. La distinction avec le sens de pluie (nul) est evidente : le contexte est la mission prophetique, pas la meteorologie.",
              axe1_verset: "Le mot rasulan est l'objet de la demande — Ibrahim demande a Dieu de susciter un envoye. Le champ lexical (reciter, signes, enseigner, Livre, sagesse, purifier) definit les missions de cet envoye. Le rasul n'est pas un titre vide — c'est un agent charge de trois missions precises. Le verset construit le portrait complet de l'envoye a travers ses fonctions.",
              axe2_voisins: "Le verset 127 parlait de la construction de la Maison. Le verset 128 de la soumission. Le verset 129 demande un envoye — la progression montre que la Maison a besoin d'un guide pour etre un lieu de guidance. La construction physique doit etre completee par la mission spirituelle de l'envoye.",
              axe3_sourate: "La racine r-s-l est une racine structurante de la sourate al-Baqarah. En 2:87, Dieu a envoye des messagers apres Moussa. En 2:101, un envoye est venu de chez Dieu. En 2:119, le Prophete est envoye avec la verite. Le verset 129 est l'origine de cette chaine — Ibrahim demande ce que Dieu realisera. La sourate montre la continuite entre la demande d'Ibrahim et la realisation divine.",
              axe4_coherence: "La racine r-s-l apparait environ 513 fois dans le Coran. En 62:2, « C'est Lui qui a suscite parmi les illetres un envoye issu d'eux qui leur recite Ses versets, les purifie et leur enseigne le Livre et la sagesse ». Ce verset de sourate al-Jumu'a est presque identique a 2:129 — il montre la realisation de la priere d'Ibrahim. La demande du verset 129 a ete exaucee.",
              axe5_frequence: "Pour la mission du khalifa, l'envoye est le modele de la mission. Les trois fonctions de l'envoye (reciter, enseigner, purifier) definissent le contenu de la mission prophetique. Le khalifa doit suivre cet envoye et perpetuer sa mission de transmission et de purification."
            },
            "Eau/Liquide": {
              status: "nul",
              senses: ["pluie"],
              proof_ctx: "Le sens de pluie est un usage physique de r-s-l. Le contexte est la mission prophetique, pas la meteorologie."
            }
          }
        }
      },
      // tlw pos=6
      {
        word_key: "tlw", position: 6, sense_chosen: "reciter",
        analysis_axes: {
          sense_chosen: "reciter",
          concept_chosen: "Recitation/Succession",
          concepts: {
            "Recitation/Succession": {
              status: "retenu",
              senses: ["reciter", "lire", "succeder"],
              proof_ctx: "Le verbe yatlu est un inaccompli 3MS indicatif de la racine t-l-w. Le Lane's donne : reciter, lire a haute voix, suivre, succeder. Le sens de recitation est l'enonciation orale des paroles sacrees — reciter c'est faire passer la Parole divine de l'ecrit a la voix. L'inaccompli marque une action continue et repetee — l'envoye recite de maniere permanente. La preposition 'ala (sur eux) indique que la recitation est dirigee vers un auditoire. Le double sens de reciter/suivre est revelateur : reciter les signes c'est les suivre mot a mot, les repeter fidelement.",
              axe1_verset: "Le verbe yatlu decrit la premiere mission de l'envoye — reciter les signes de Dieu. L'objet de la recitation est « ayatika » (Tes signes) — les signes appartiennent a Dieu (pronom « ka »), l'envoye les recite. Le champ lexical (reciter, enseigner, purifier) montre une progression : d'abord la recitation orale, puis l'enseignement du sens, puis la purification morale. La recitation est le premier contact avec la Parole divine.",
              axe2_voisins: "Le verset 127 parlait de la construction de la Maison. Le verset 128 de la soumission et des rites. Le verset 129 passe a la transmission orale — la recitation des signes. La progression va du materiel (batir) au spirituel (reciter). La Maison est le lieu, la recitation est l'acte qui remplit ce lieu de sens.",
              axe3_sourate: "La racine t-l-w apparait dans la sourate al-Baqarah pour decrire la recitation des textes sacres. En 2:102, « les demons recitaient ». En 2:113, « ils recitent le Livre ». En 2:121, « ceux a qui Nous avons donne le Livre le recitent comme il merite d'etre recite ». La sourate distingue la bonne recitation (fidele) de la mauvaise (falsifiee). Le verset 129 demande un envoye qui recite fidelement — la vraie recitation.",
              axe4_coherence: "La racine t-l-w apparait environ 63 fois dans le Coran. En 62:2, le meme schema « yatlu 'alayhim ayatihi » (il recite sur eux Ses signes) decrit la mission du Prophete. La recitation est le premier pilier de la mission prophetique dans le Coran. En 3:164, meme structure. La recitation est la premiere fonction de tout envoye.",
              axe5_frequence: "Pour la mission du khalifa, la recitation est le premier acte de la transmission. Reciter les signes c'est maintenir le lien entre la Parole divine et la communaute. Le khalifa doit d'abord ecouter la recitation avant de comprendre et de purifier. La recitation est la base de tout apprentissage spirituel."
            }
          }
        }
      },
      // ayt pos=8
      {
        word_key: "ayt", position: 8, sense_chosen: "signes",
        analysis_axes: {
          sense_chosen: "signes",
          concept_chosen: "Signe/Preuve",
          concepts: {
            "Signe/Preuve": {
              status: "retenu",
              senses: ["signe", "miracle", "preuve"],
              proof_ctx: "Le mot ayatika est un nom feminin pluriel genitif de la racine a-y-t avec pronom suffixe 2MS (ka, Tes). Le Lane's donne : signes, preuves, miracles. Le signe (aya) est ce qui montre autre chose que soi — il pointe vers une realite superieure. Le pluriel (ayat) marque la multiplicite des signes. Le pronom « ka » (Tes) rattache les signes a Dieu — ce sont Ses signes, pas ceux de l'envoye. La distinction avec le sens de verset (probable) est que « signes » englobe les versets recites, les miracles et les preuves dans la creation, tandis que « versets » se limite au texte ecrit.",
              axe1_verset: "Le mot ayatika est l'objet de la recitation — l'envoye recite les signes de Dieu. Le possessif « ka » (Tes) montre que les signes appartiennent a Dieu et que l'envoye en est le transmetteur, pas l'auteur. Le champ lexical (reciter, enseigner, Livre, sagesse) montre que les signes sont le contenu de la transmission. Les signes precendent l'enseignement — d'abord on recite les signes, puis on enseigne leur sens.",
              axe2_voisins: "Le verset 128 demandait a Dieu de montrer les rites. Le verset 129 demande que l'envoye recite les signes. Les rites et les signes sont des manifestations de la volonte divine — les premiers dans la pratique, les seconds dans la parole. La progression montre que la pratique (rites) a besoin de la parole (signes) pour etre comprise.",
              axe3_sourate: "La racine a-y-t est une des plus frequentes de la sourate al-Baqarah. En 2:39, « ceux qui rejettent Nos signes ». En 2:73, « Dieu vous montre Ses signes ». En 2:99, « Nous avons fait descendre vers toi des signes clairs ». La sourate est ponctuee de signes — chaque passage revele un signe de Dieu. Le verset 129 demande un envoye qui recite ces signes.",
              axe4_coherence: "La racine a-y-t apparait environ 382 fois dans le Coran. Les signes de Dieu sont partout — dans la creation (2:164), dans la revelation (3:4), dans les miracles (7:133). Le Coran se presente lui-meme comme un ensemble de signes a reciter et a mediter. En 62:2, la meme structure « yatlu 'alayhim ayatihi » confirme que la recitation des signes est la premiere mission de l'envoye.",
              axe5_frequence: "Pour la mission du khalifa, les signes de Dieu sont les indicateurs de la mission. Chaque signe pointe vers une verite que le khalifa doit reconnaitre et transmettre. Les signes ne sont pas des decorations — ce sont des preuves qui exigent une reponse. Le khalifa qui ignore les signes manque sa mission."
            },
            "Revelation/Parole": {
              status: "probable",
              senses: ["verset"],
              proof_ctx: "Le sens de verset est un sens specifique de a-y-t — l'unite de texte dans la revelation. La distinction philosophique avec le signe est que le verset est un signe verbal specifique (une unite du texte revele), tandis que le signe est plus large (il inclut les versets mais aussi les miracles et les preuves naturelles). Dans ce verset, l'envoye recite les « ayat » — ce qui peut etre des versets recites oralement ou des signes au sens large.",
              axe1_verset: "Le mot ayatika pourrait porter le sens de « versets » — l'envoye recite les versets reveles. Le contexte de recitation orale favorise ce sens specifique. Mais le mot ayat dans le Coran est souvent plus large que « versets » — il inclut les signes dans la creation et les miracles.",
              axe2_voisins: "Les versets voisins parlent du Livre et de la sagesse. Les « ayat » recitees pourraient etre les versets du Livre. Mais la distinction entre « ayat » (signes) et « kitab » (Livre) dans le meme verset suggere que les deux ne sont pas identiques — les signes sont recites, le Livre est enseigne.",
              axe3_sourate: "La sourate utilise ayat dans les deux sens selon le contexte. En 2:99, « signes clairs » (versets). En 2:164, « signes dans la creation » (pas des versets). Le contexte determine le sens.",
              axe4_coherence: "Le Coran utilise ayat de maniere englobante — les versets sont des signes, mais tous les signes ne sont pas des versets. La recitation des signes inclut les versets mais peut aller au-dela.",
              axe5_frequence: "Le verset comme unite textuelle est un outil de la mission — mais le signe comme preuve divine est le cadre plus large de la mission du khalifa."
            }
          }
        }
      },
      // elm pos=10
      {
        word_key: "elm", position: 10, sense_chosen: "enseigner",
        analysis_axes: {
          sense_chosen: "enseigner",
          concept_chosen: "Savoir/Connaissance",
          concepts: {
            "Savoir/Connaissance": {
              status: "retenu",
              senses: ["savoir", "connaitre", "etre informe", "certitude", "savant", "science", "enseignement"],
              proof_ctx: "Le verbe yu'allimuhumu est un inaccompli 3MS de la forme II de la racine '-l-m avec pronom suffixe 3MP. Le Lane's donne : enseigner, faire savoir, transmettre le savoir. La forme II (fa''ala) est causative — faire savoir a quelqu'un ce qu'il ne savait pas. L'inaccompli marque une action continue et repetee — l'enseignement est permanent. Le pronom « hum » indique les destinataires. L'objet de l'enseignement est double : le Livre et la sagesse. La distinction avec le monde/creation (nul) est claire : le contexte est la transmission du savoir, pas l'univers.",
              axe1_verset: "Le verbe yu'allimuhumu decrit la deuxieme mission de l'envoye — enseigner le Livre et la sagesse. Apres la recitation (contact oral), vient l'enseignement (comprehension du sens). Le champ lexical (Livre, sagesse) precise le contenu de l'enseignement. L'envoye ne recite pas seulement — il explique, fait comprendre, transmet le sens profond. L'enseignement est le pont entre la recitation et la purification.",
              axe2_voisins: "Le verset 128 demandait les rites. Le verset 129 demande l'enseignement. Les rites sans enseignement sont des gestes vides — l'enseignement donne le sens aux rites. La progression (batir → pratiquer → enseigner → purifier) montre que chaque etape prepare la suivante.",
              axe3_sourate: "La racine '-l-m est une des plus frequentes de la sourate al-Baqarah. En 2:31, « Il enseigna a Adam les noms ». En 2:151, « Nous vous avons envoye un envoye issu de vous qui vous recite Nos versets, vous purifie, vous enseigne le Livre et la sagesse ». Le verset 2:151 reprend presque mot pour mot la demande du verset 129 — montrant que la priere d'Ibrahim a ete exaucee.",
              axe4_coherence: "La racine '-l-m apparait environ 854 fois dans le Coran. L'enseignement divin est un theme central — Dieu enseigne a Adam (2:31), Dieu enseigne par le calame (96:4). L'envoye est le relais de l'enseignement divin — il enseigne ce que Dieu lui a enseigne. La chaine du savoir va de Dieu a l'envoye a la communaute.",
              axe5_frequence: "Pour la mission du khalifa, l'enseignement est le coeur de la transmission. Le khalifa doit apprendre du Livre et de la sagesse pour pouvoir transmettre. L'enseignement n'est pas optionnel — c'est la deuxieme mission de l'envoye et donc une obligation pour quiconque suit l'envoye."
            },
            "Marque/Signe": {
              status: "nul",
              senses: ["marquer", "signe", "drapeau", "montagne", "repere", "etendard", "levre fendue"],
              proof_ctx: "Le sens de marque est hors sujet — le verbe yu'allimuhumu est un verbe d'enseignement a la forme II causative, pas un verbe de marquage."
            },
            "Monde/Creation": {
              status: "nul",
              senses: ["monde", "les mondes", "ensemble des creatures", "univers"],
              proof_ctx: "Le sens de monde est hors sujet — le verbe est « enseigner », pas un nom designant l'univers."
            }
          }
        }
      },
      // ktb pos=11
      {
        word_key: "ktb", position: 11, sense_chosen: "livre",
        analysis_axes: {
          sense_chosen: "livre",
          concept_chosen: "Livre/Ecrit",
          concepts: {
            "Livre/Ecrit": {
              status: "retenu",
              senses: ["contrat de mariage", "contrat d'affranchissement", "ecriture revelee", "livre", "registre", "contrat ecrit"],
              proof_ctx: "Le mot al-kitaba est un nom masculin singulier defini accusatif de la racine k-t-b. Le Lane's donne : livre, ecriture revelee. L'article defini (al-) marque qu'il s'agit du Livre par excellence — l'ecriture revelee specifique. C'est l'objet de l'enseignement de l'envoye — il enseigne le Livre. La distinction avec l'ecriture (probable) est que le contexte designe le Livre comme contenu d'enseignement, pas l'acte d'ecrire.",
              axe1_verset: "Le mot al-kitaba est le premier objet de l'enseignement — l'envoye enseigne le Livre. Le Livre est distingue de la sagesse (al-hikma) — les deux sont enseignes mais ce sont des realites differentes. Le Livre est le texte revele, la sagesse est la science de l'application juste. Le champ lexical montre que le Livre est le support de la mission — c'est a travers le Livre que l'envoye transmet le savoir.",
              axe2_voisins: "Le verset 127 parlait de la Maison. Le verset 129 parle du Livre. La Maison et le Livre sont les deux piliers de la mission d'Ibrahim — un lieu et un texte. La Maison est le lieu de la pratique, le Livre est le guide de la comprehension.",
              axe3_sourate: "La racine k-t-b est une des plus importantes de la sourate al-Baqarah. En 2:2, « Ce Livre, nul doute en lui ». La sourate s'ouvre par le Livre et le verset 129 demande un envoye qui enseigne ce Livre. Le Livre est le fil conducteur de la sourate.",
              axe4_coherence: "La racine k-t-b apparait environ 319 fois dans le Coran. Le Livre (al-kitab) designe les ecritures revelees — Torah, Evangile, Coran. En 62:2, le meme schema montre le Prophete enseignant le Livre. Le Livre est le contenu permanent de la mission prophetique.",
              axe5_frequence: "Pour la mission du khalifa, le Livre est le guide ecrit de la mission. L'envoye enseigne le Livre — le khalifa doit etudier ce Livre et le transmettre. Le Livre n'est pas un objet passif — c'est un guide actif qui doit etre lu, compris et enseigne."
            },
            "Ecriture/Inscription": {
              status: "probable",
              senses: ["ecrire", "dicter", "copier un livre", "art de l'ecriture", "scribe", "s'inscrire", "savant", "enseignant", "vendeur de livres", "ecole", "demander d'ecrire", "ecrire a quelqu'un"],
              proof_ctx: "Le sens d'ecriture est un sens majeur de k-t-b — l'acte de transcrire. La distinction philosophique avec le Livre est que l'ecriture est l'acte (tracer des signes), tandis que le Livre est le resultat (le support contenant le texte). Le verset parle du Livre comme objet d'enseignement — on enseigne le contenu du Livre, pas l'acte d'ecrire.",
              axe1_verset: "Le mot al-kitaba est l'objet de l'enseignement. On enseigne le contenu du Livre, pas l'acte d'ecrire. Le sens de livre-contenu est plus coherent avec le verbe « enseigner ».",
              axe2_voisins: "Les versets voisins traitent le kitab comme un contenu revele a transmettre, pas comme un acte d'ecriture.",
              axe3_sourate: "La sourate utilise kitab principalement au sens de livre-objet de revelation. En 2:2, c'est un contenu « nul doute en lui ».",
              axe4_coherence: "Quand kitab est defini (al-kitab), il designe generalement le Livre revele. Le sens d'ecriture-acte est plus frequent dans les contextes juridiques (2:282).",
              axe5_frequence: "L'ecriture comme acte est un outil — mais dans ce verset c'est le Livre comme contenu qui est enseigne."
            },
            "Obligation/Decret": {
              status: "nul",
              senses: ["prescrire", "decret divin", "predestination", "rendre obligatoire", "juger"],
              proof_ctx: "Le sens de decret est hors sujet — le verset parle du Livre comme contenu d'enseignement, pas d'un decret."
            },
            "Assemblage/Couture": {
              status: "nul",
              senses: ["rassembler", "coudre", "attacher"],
              proof_ctx: "Le sens d'assemblage est hors sujet — le contexte est le Livre revele, pas l'acte de rassembler."
            }
          }
        }
      },
      // hkm pos=13 (al-hikmata = la sagesse, nom)
      {
        word_key: "hkm", position: 13, sense_chosen: "sagesse",
        analysis_axes: {
          sense_chosen: "sagesse",
          concept_chosen: "Sagesse",
          concepts: {
            "Sagesse": {
              status: "retenu",
              senses: ["etre sage", "sagesse"],
              proof_ctx: "Le mot al-hikmata est un nom feminin singulier defini accusatif de la racine h-k-m. Le Lane's donne : sagesse, science appliquee avec justesse, connaissance juste des choses et de leurs causes. L'article defini (al-) marque la Sagesse par excellence — pas une sagesse quelconque mais la Sagesse comme discipline de comprehension. La hikma est le deuxieme objet de l'enseignement de l'envoye, apres le Livre. La distinction avec le jugement (probable) est que la hikma ici est un contenu enseigne (un savoir transmis), pas un acte de juger. La sagesse est la capacite de comprendre le Livre et d'appliquer ses enseignements avec justesse.",
              axe1_verset: "Le mot al-hikmata est le deuxieme objet de l'enseignement — apres le Livre, la sagesse. Le verset distingue le Livre (le texte) et la sagesse (l'art de l'appliquer). L'envoye enseigne les deux — le contenu et la methode. Le champ lexical montre que la sagesse complete le Livre : le Livre dit quoi, la sagesse dit comment. Sans la sagesse, le Livre reste lettre morte.",
              axe2_voisins: "Le verset 128 demandait les rites (pratique). Le verset 129 demande l'enseignement du Livre et de la sagesse (theorie). La sagesse est le pont entre le texte et la pratique — elle transforme la connaissance en action juste.",
              axe3_sourate: "La racine h-k-m apparait dans la sourate al-Baqarah sous ses differents sens. En 2:32, « Tu es le Savant, le Sage ». En 2:129, la sagesse est un contenu enseigne. En 2:151, le meme schema reprend — l'envoye enseigne la sagesse. La sourate presente la sagesse a la fois comme attribut divin (Dieu est Sage) et comme contenu transmis par l'envoye.",
              axe4_coherence: "La racine h-k-m apparait environ 210 fois dans le Coran. La sagesse (hikma) est souvent associee au Livre dans le Coran — en 3:48, « Il lui enseignera le Livre et la sagesse ». En 4:113, « Dieu a fait descendre sur toi le Livre et la sagesse ». Le couple Livre/sagesse est un refrain coranique qui montre que le texte seul ne suffit pas — la sagesse est necessaire pour le comprendre et l'appliquer.",
              axe5_frequence: "Pour la mission du khalifa, la sagesse est l'outil d'application du Livre. Le khalifa doit non seulement connaitre le Livre mais aussi posseder la sagesse de l'appliquer avec justesse. La sagesse previent les interpretations erronees et les applications injustes."
            },
            "Jugement/Decision": {
              status: "probable",
              senses: ["juger", "decider", "sentence"],
              proof_ctx: "Le sens de jugement est un sens majeur de h-k-m — l'acte de trancher entre le vrai et le faux. La distinction philosophique avec la sagesse est que le jugement est un acte ponctuel (decider dans un cas), tandis que la sagesse est un etat permanent (voir juste dans tout). Le verset parle de la hikma comme contenu enseigne — on enseigne la sagesse (l'etat de comprehension juste), pas l'acte ponctuel de juger.",
              axe1_verset: "Le mot al-hikmata est l'objet de l'enseignement. On enseigne la sagesse — la capacite de comprendre et d'appliquer avec justesse. Le sens de jugement est inclus dans la sagesse mais la sagesse est plus large — elle precede et fonde le jugement juste.",
              axe2_voisins: "Les versets voisins parlent de la construction de la Maison et de la soumission. Le contexte est la formation d'une communaute — la sagesse est un outil de formation, le jugement est un acte d'application. La formation precede l'application.",
              axe3_sourate: "La sourate utilise h-k-m dans les deux sens — sagesse (2:129, 2:151, 2:269) et jugement (2:188, 2:213). Le contexte determine le sens.",
              axe4_coherence: "Le Coran associe souvent hikma au Livre — le couple designe le contenu et la methode. Quand hikma est associee au jugement (hukm), c'est dans un contexte juridique, pas d'enseignement.",
              axe5_frequence: "Le jugement est un acte de la mission — mais la sagesse est le fondement de tout jugement juste. La sagesse precede le jugement dans l'ordre de la mission."
            },
            "Autorite/Pouvoir": {
              status: "nul",
              senses: ["gouverner"],
              proof_ctx: "Le sens de gouvernement est hors sujet — la hikma ici est un contenu enseigne, pas un acte de pouvoir."
            }
          }
        }
      },
      // zkw pos=14
      {
        word_key: "zkw", position: 14, sense_chosen: "purifier",
        analysis_axes: {
          sense_chosen: "purifier",
          concept_chosen: "Purification/Croissance",
          concepts: {
            "Purification/Croissance": {
              status: "retenu",
              senses: ["purifier", "aumone legale", "croitre", "etre pur", "prosperer"],
              proof_ctx: "Le verbe yuzakkihim est un inaccompli 3MS de la forme II de la racine z-k-w avec pronom suffixe 3MP. Le Lane's donne : purifier, faire croitre en purete, rendre pur. La forme II est causative — faire devenir pur. L'inaccompli marque une action continue. Le pronom « hum » indique que la purification est dirigee vers la communaute. La purification est le troisieme role de l'envoye — apres la recitation et l'enseignement. La distinction avec l'aumone est claire : le contexte est la purification des personnes, pas le versement financier.",
              axe1_verset: "Le verbe yuzakkihim decrit la troisieme mission de l'envoye — purifier. La progression est : reciter les signes (contact oral), enseigner le Livre et la sagesse (comprehension), purifier (transformation morale). La purification est le resultat final de l'enseignement — quand on comprend le Livre et la sagesse, on se purifie. Le verset construit un programme complet de formation spirituelle.",
              axe2_voisins: "Le verset 128 demandait la soumission. Le verset 129 demande la purification par l'envoye. La soumission est l'attitude interieure, la purification est le processus de nettoyage moral. Les deux sont lies — la soumission prepare le terrain de la purification.",
              axe3_sourate: "La racine z-k-w apparait dans la sourate al-Baqarah sous ses differents sens. En 2:43, « acquittez la zakat ». En 2:151, « il vous purifie ». En 2:174, « Dieu ne les purifiera pas ». La sourate utilise la purification a la fois comme acte financier (aumone) et comme processus spirituel. Le verset 129 est dans le sens spirituel — purifier les ames.",
              axe4_coherence: "La racine z-k-w apparait environ 59 fois dans le Coran. En 62:2, le meme schema montre le Prophete qui purifie. En 3:164, meme structure. La purification est la troisieme (ou deuxieme selon l'ordre) fonction de l'envoye — elle est constante dans la description de la mission prophetique. Le Coran place toujours la purification parmi les missions de l'envoye.",
              axe5_frequence: "Pour la mission du khalifa, la purification est le but ultime de l'enseignement. Le khalifa doit se purifier avant de purifier les autres. La purification n'est pas un acte unique — c'est un processus continu de nettoyage moral et spirituel. Sans purification, le savoir reste sterile."
            }
          }
        }
      },
      // ezz pos=17
      {
        word_key: "ezz", position: 17, sense_chosen: "puissant",
        analysis_axes: {
          sense_chosen: "puissant",
          concept_chosen: "Puissance/Gloire",
          concepts: {
            "Puissance/Gloire": {
              status: "retenu",
              senses: ["etre puissant", "etre glorieux", "etre invincible"],
              proof_ctx: "Le mot al-'azizu est un adjectif masculin singulier defini nominatif de la racine '-z-z. Le Lane's donne : puissant, invincible, glorieux, celui que rien ne peut vaincre. L'article defini (al-) marque l'exclusivite — c'est LE Puissant, pas un puissant parmi d'autres. Le nominatif marque l'attribut du sujet — « Tu es le Puissant ». L'adjectif qualifie Dieu directement, cloturant l'invocation par la reconnaissance de Sa puissance. La distinction avec la rarete (nul) est que le contexte est un attribut divin de force absolue, pas de rarete.",
              axe1_verset: "Le mot al-'azizu cloture l'invocation en qualifiant Dieu. Apres avoir demande un envoye, Ibrahim reconnait que Dieu est le Puissant — Il a le pouvoir d'exaucer cette demande. Le champ lexical final (en verite, Toi, le Puissant, le Sage) montre la confiance d'Ibrahim en la capacite de Dieu. La puissance divine est le garant de l'exaucement de la priere.",
              axe2_voisins: "Le verset 127 se terminait par « Tu es l'Audient, le Savant ». Le verset 128 par « Tu es le Repentant, le Misericordieux ». Le verset 129 par « Tu es le Puissant, le Sage ». Chaque invocation se cloture par un couple d'attributs divins adapte au contenu de la demande. Ici la puissance est liee a la capacite de susciter un envoye.",
              axe3_sourate: "La racine '-z-z apparait dans la sourate al-Baqarah sous differentes formes. En 2:209, « Dieu est Puissant, Sage ». En 2:220, « Dieu est Puissant, Sage ». Le couple « Puissant-Sage » est recurrent dans la sourate — la puissance et la sagesse sont deux attributs complementaires de Dieu.",
              axe4_coherence: "La racine '-z-z apparait environ 120 fois dans le Coran. Le couple « al-'Aziz al-Hakim » (le Puissant, le Sage) apparait 46 fois dans le Coran — c'est un des couples d'attributs les plus frequents. La puissance sans sagesse serait brutale, la sagesse sans puissance serait impuissante — les deux se completent.",
              axe5_frequence: "Pour la mission du khalifa, la puissance divine est le garant de la mission. Le khalifa ne reussit pas par sa propre force mais par la puissance de Dieu. Reconnaitre la puissance de Dieu c'est accepter sa propre faiblesse et s'en remettre a Celui qui peut tout."
            },
            "Rarete/Valeur": {
              status: "nul",
              senses: ["etre rare et precieux"],
              proof_ctx: "Le sens de rarete est hors sujet — l'adjectif al-'aziz qualifie Dieu dans un contexte de puissance absolue, pas de rarete."
            },
            "Renforcement": {
              status: "nul",
              senses: ["renforcer"],
              proof_ctx: "Le sens de renforcement est hors sujet — l'adjectif al-'aziz designe un etat permanent de puissance, pas un acte de renforcement."
            }
          }
        }
      },
      // hkm pos=18 (al-hakimu = le Sage, adjectif)
      {
        word_key: "hkm", position: 18, sense_chosen: "sage",
        analysis_axes: {
          sense_chosen: "sage",
          concept_chosen: "Sagesse",
          concepts: {
            "Sagesse": {
              status: "retenu",
              senses: ["etre sage", "sagesse"],
              proof_ctx: "Deuxieme occurrence de la racine h-k-m dans le verset — ici comme adjectif qualifiant Dieu. Le mot al-hakimu est un adjectif masculin singulier defini nominatif. Le Lane's donne : sage, celui qui possede la sagesse, celui qui juge avec justesse. L'article defini marque l'exclusivite — c'est LE Sage. Le nominatif marque l'attribut du sujet — « Tu es le Sage ». La premiere occurrence (al-hikmata, pos=13) designait la sagesse comme contenu enseigne, la deuxieme (al-hakimu, pos=18) designe Dieu comme la source de cette sagesse. La distinction montre que la sagesse enseignee par l'envoye vient de Dieu qui est Lui-meme le Sage.",
              axe1_verset: "Le mot al-hakimu cloture l'invocation avec al-'azizu. Le couple « Puissant-Sage » montre que Dieu possede a la fois la force et la sagesse. La sagesse divine est la source de la sagesse enseignee par l'envoye — le lien entre les deux occurrences de h-k-m dans le verset montre la chaine : Dieu est Sage → Il envoie un envoye → l'envoye enseigne la sagesse → la communaute acquiert la sagesse.",
              axe2_voisins: "Le verset 127 attribuait a Dieu « l'Audient, le Savant ». Le verset 128 « le Repentant, le Misericordieux ». Le verset 129 « le Puissant, le Sage ». Chaque paire d'attributs est adaptee a la demande — la sagesse est l'attribut adapte a la demande d'enseignement du Livre et de la sagesse.",
              axe3_sourate: "Le couple « al-'Aziz al-Hakim » apparait plusieurs fois dans la sourate al-Baqarah (2:129, 2:209, 2:220, 2:228, 2:240, 2:260). C'est le couple d'attributs le plus frequent de la sourate — la puissance et la sagesse sont les deux piliers de l'action divine dans la sourate.",
              axe4_coherence: "Le couple « al-'Aziz al-Hakim » apparait 46 fois dans le Coran. C'est une formule fixe qui associe la capacite d'agir (puissance) et la justesse de l'action (sagesse). Dieu est Puissant pour exaucer et Sage pour choisir le meilleur moment et la meilleure maniere.",
              axe5_frequence: "Pour la mission du khalifa, la sagesse divine est le modele de la mission. Le khalifa doit aspirer a la sagesse — comprendre les choses dans leur realite et agir avec justesse. La sagesse n'est pas la connaissance brute — c'est la connaissance appliquee avec discernement."
            },
            "Jugement/Decision": {
              status: "nul",
              senses: ["juger", "decider", "sentence"],
              proof_ctx: "Le sens de jugement est un sous-aspect de la sagesse divine. Quand Dieu est qualifie de Hakim, c'est Sa sagesse totale qui est visee, pas un acte ponctuel de jugement. Le contexte est la cloture d'une invocation, pas un tribunal."
            }
          }
        }
      }
    ]
  },
  130: {
    verse_id: 137,
    analysis_id: 495,
    translation_arab: "Et qui se detourne de la voie d'Ibrahim sinon celui qui a rendu son ame insensee ? Et certes Nous l'avons choisi dans ce monde d'ici-bas, et dans l'au-dela il est certes parmi les vertueux.",
    full_translation: "Qui donc aura en aversion la religion d'Abraham, sinon celui qui seme son ame dans la sottise? Car tres certainement Nous l'avons choisi en ce monde; et, dans l'au-dela, il est certes du nombre des gens de bien.",
    translation_explanation: `§DEMARCHE§
Le verset 130 marque un tournant apres les invocations d'Ibrahim (2:127-129). Apres la priere, le texte pose une question rhetorique : qui peut rejeter la voie d'Ibrahim ? La conjonction **wa** (et) relie ce verset aux precedents. Le pronom interrogatif **man** (qui) ouvre la question rhetorique — une question qui n'attend pas de reponse car la reponse est evidente. Le verbe **yargabu** est un inaccompli 3MS indicatif de la racine r-gh-b. Le Lane's donne : desirer, aspirer. Avec la preposition **'an** (de, loin de), le sens est inverse : raghiba 'an signifie se detourner de, avoir en aversion, rejeter. L'inaccompli marque une action generale et intemporelle — la question vaut pour tous les temps. Le nom **millati** est un nom feminin singulier genitif de la racine m-l-l. Le Lane's donne : religion, voie, confession. La milla est la voie religieuse suivie par une communaute. L'idafa (millati Ibrahima) rattache la voie a Ibrahim — c'est la voie d'Ibrahim specifiquement. Le nom propre **Ibrahima** est le nom du patriarche au genitif. La particule d'exception **illa** (sauf, sinon) introduit la seule reponse possible a la question. Le pronom **man** (celui qui) designe la categorie de personne visee. Le verbe **safiha** est un accompli 3MS de la racine s-f-h. Le Lane's donne : etre insense, leger d'esprit, perdre le discernement. L'accompli marque un acte acheve — celui qui a rendu son ame insensee l'a deja fait, c'est un etat acquis. Le nom **nafsahu** est un nom feminin singulier accusatif de la racine n-f-s avec pronom suffixe 3MS. Le Lane's donne : ame, soi-meme, personne. Le nafs est l'ame qui siege la volonte et les decisions. L'expression « safiha nafsahu » signifie litteralement « il a rendu insensee son ame » — il a agi contre les interets de sa propre ame. La particule emphatique **wa laqad** (et certes) introduit une affirmation renforcee. Le verbe **istafaynahu** est un accompli 1PP de la forme VIII de la racine s-t-f avec pronom suffixe 3MS. Le Lane's donne : choisir, elire, selectionner le meilleur. La forme VIII (ifta'ala) est reflexive avec nuance d'effort — choisir pour soi-meme apres examen. Le pronom « nahu » (le) refere a Ibrahim — Nous l'avons choisi. Le pronom « na » (Nous) est le pluriel de majeste divine. La preposition **fi** (dans) introduit le lieu/temps du choix. Le nom **ad-dunya** est un nom feminin singulier defini de la racine d-n-w. Le Lane's donne : proche, ici-bas, ce monde. La dunya est le monde proche, immediat, par opposition a l'au-dela. L'article defini marque le monde d'ici-bas comme realite connue. La conjonction **wa** (et) introduit la deuxieme partie. La particule emphatique **innahu** (en verite il) renforce l'affirmation. La preposition **fi** (dans) introduit le lieu. Le nom **al-akhirati** est un nom feminin singulier defini de la racine a-kh-r. Le Lane's donne : l'au-dela, la derniere, la vie apres la mort. L'akhira est le monde a venir, oppose a la dunya. Le mot **lamina** est compose de la particule d'emphase « la » et de la preposition « min » (parmi). L'ensemble signifie « certes parmi ». Le nom **as-salihina** est un nom masculin pluriel defini genitif de la racine s-l-h. Le Lane's donne : etre bon, vertueux, integre, celui qui fait le bien. Le pluriel (salihina) designe la categorie des vertueux. L'article defini (as-) marque un groupe connu et defini — LES vertueux, pas des vertueux quelconques.

§JUSTIFICATION§
**se detourne** — Le sens retenu est « se detourner de ». Le verbe raghiba avec la preposition 'an signifie se detourner de, rejeter. L'alternative « desirer » est ecartee car raghiba fi signifie desirer (vers), tandis que raghiba 'an signifie se detourner (loin de). La preposition determine le sens.

**voie** — Le sens retenu est « voie/religion ». Le mot milla designe la voie religieuse suivie. « Voie » est choisi car il est plus neutre et plus proche de l'etymologie que « religion » qui est un mot charge en francais. L'alternative « communaute » est ecartee car le contexte est la voie suivie, pas le groupe qui la suit.

**Ibrahim** — Le nom propre est transcrit tel quel. C'est le patriarche dont la voie est la reference.

**a rendu insensee** — Le sens retenu est « rendre insense ». Le verbe safiha signifie etre leger d'esprit, agir sans discernement. « A rendu insensee » rend l'idee que la personne a fait du tort a sa propre ame par son manque de sagesse. L'alternative « etre stupide » est ecartee car le texte indique un acte commis (accompli), pas un etat inne.

**son ame** — Le sens retenu est « ame ». Le mot nafs designe l'ame, le soi interieur. « Son ame » rend le fait que l'insensibilite touche l'ame de la personne elle-meme — c'est un auto-dommage. L'alternative « personne » est ecartee car le contexte est interieur — c'est l'ame qui est touchee, pas la personne physique.

**Nous l'avons choisi** — Le sens retenu est « choisir ». Le verbe istafa signifie choisir le meilleur, elire. « Nous l'avons choisi » rend l'election divine d'Ibrahim. La forme VIII indique un choix delibere et reflechi. L'alternative « aligner » est ecartee car le contexte est l'election divine, pas l'alignement physique.

**ici-bas** — Le sens retenu est « ici-bas ». Le mot ad-dunya designe le monde proche, la vie d'ici-bas. « Ici-bas » rend l'idee de ce monde temporel par opposition a l'au-dela.

**l'au-dela** — Le sens retenu est « l'au-dela ». Le mot al-akhira designe la vie apres la mort, le monde a venir. « L'au-dela » est le terme le plus courant en francais.

**certes parmi** — Le sens retenu est « certes parmi ». Le mot lamina est compose de la particule d'emphase « la » et de « min » (parmi). Cette construction emphatique affirme avec force qu'Ibrahim est parmi les vertueux.

**les vertueux** — Le sens retenu est « vertueux ». Le mot as-salihina designe ceux qui sont bons, integres, qui font le bien. « Les vertueux » rend l'idee d'un groupe de personnes moralement droites. L'alternative « la paix » est ecartee car le mot est un participe actif pluriel designant des personnes, pas un nom abstrait.

§CRITIQUE§
Les traductions courantes rendent ce verset de maniere similaire. Hamidullah traduit « la religion d'Abraham » la ou nous donnons « la voie d'Ibrahim ». Le mot « religion » est un choix possible mais « voie » est plus neutre et evite les connotations institutionnelles du mot « religion » en francais. L'expression « seme son ame dans la sottise » (Hamidullah) est une interpretation poetique de « safiha nafsahu » — litteralement « a rendu insensee son ame ». Notre traduction « a rendu son ame insensee » est plus litterale. La deuxieme partie du verset est traduite de maniere quasi identique par toutes les traductions.`,
    segments: [
      { fr: "et", phon: "wa", arabic: "\u0648\u064E", is_particle: true, position: 0 },
      { fr: "qui", phon: "man", arabic: "\u0645\u064E\u0646", is_particle: true, position: 1 },
      { fr: "se detourne", pos: "verbe", phon: "yargabu", arabic: "\u064A\u064E\u0631\u0652\u063A\u064E\u0628\u064F", word_key: "rghb", is_particle: false, sense_retenu: "se detourner", position: 2 },
      { fr: "de", phon: "'an", arabic: "\u0639\u064E\u0646", is_particle: true, position: 3 },
      { fr: "la voie", pos: "nom", phon: "millati", arabic: "\u0645\u0650\u0651\u0644\u064E\u0651\u0629\u0650", word_key: "mll", is_particle: false, sense_retenu: "voie", position: 4 },
      { fr: "d'Ibrahim", pos: "nom", phon: "Ibrahima", arabic: "\u0625\u0650\u0628\u0652\u0631\u064E\u0670\u0647\u0650\u0640\u06E7\u0645\u064E", word_key: "abrh", is_particle: false, sense_retenu: "Ibrahim", position: 5 },
      { fr: "sinon", phon: "illa", arabic: "\u0625\u0650\u0644\u0651\u064E\u0627", is_particle: true, position: 6 },
      { fr: "celui qui", phon: "man", arabic: "\u0645\u064E\u0646", is_particle: true, position: 7 },
      { fr: "a rendu insensee", pos: "verbe", phon: "safiha", arabic: "\u0633\u064E\u0641\u0650\u0647\u064E", word_key: "sfh", is_particle: false, sense_retenu: "rendre insense", position: 8 },
      { fr: "son ame", pos: "nom", phon: "nafsahu", arabic: "\u0646\u064E\u0641\u0652\u0633\u064E\u0647\u064F\u06E5", word_key: "nfs", is_particle: false, sense_retenu: "ame", position: 9 },
      { fr: "et certes", phon: "wa laqad", arabic: "\u0648\u064E\u0644\u064E\u0642\u064E\u062F\u0650", is_particle: true, position: 10 },
      { fr: "Nous l'avons choisi", pos: "verbe", phon: "istafaynahu", arabic: "\u0671\u0635\u0652\u0637\u064E\u0641\u064E\u064A\u0652\u0646\u064E\u0640\u0670\u0647\u064F", word_key: "stf", is_particle: false, sense_retenu: "choisir", position: 11 },
      { fr: "dans", phon: "fi", arabic: "\u0641\u0650\u064A", is_particle: true, position: 12 },
      { fr: "ce monde d'ici-bas", pos: "nom", phon: "ad-dunya", arabic: "\u0671\u0644\u062F\u0651\u064F\u0646\u0652\u064A\u064E\u0627", word_key: "dnw", is_particle: false, sense_retenu: "ici-bas", position: 13 },
      { fr: "et", phon: "wa", arabic: "\u0648\u064E", is_particle: true, position: 14 },
      { fr: "en verite il", phon: "innahu", arabic: "\u0625\u0650\u0646\u064E\u0651\u0647\u064F\u06E5", is_particle: true, position: 15 },
      { fr: "dans", phon: "fi", arabic: "\u0641\u0650\u064A", is_particle: true, position: 16 },
      { fr: "l'au-dela", pos: "nom", phon: "al-akhirati", arabic: "\u0671\u0644\u0652\u0640\u064E\u0654\u0627\u062E\u0650\u0631\u064E\u0629\u0650", word_key: "axhr", is_particle: false, sense_retenu: "l'au-dela", position: 17 },
      { fr: "certes parmi", phon: "lamina", arabic: "\u0644\u064E\u0645\u0650\u0646\u064E", is_particle: true, position: 18 },
      { fr: "les vertueux", pos: "nom", phon: "as-salihina", arabic: "\u0671\u0644\u0635\u064E\u0651\u0640\u0670\u0644\u0650\u062D\u0650\u064A\u0646\u064E", word_key: "slh", is_particle: false, sense_retenu: "vertueux", position: 19 }
    ],
    words: [
      // rghb pos=2
      {
        word_key: "rghb", position: 2, sense_chosen: "se detourner",
        analysis_axes: {
          sense_chosen: "se detourner",
          concept_chosen: "Desir/Aspiration",
          concepts: {
            "Desir/Aspiration": {
              status: "retenu",
              senses: ["desirer", "aspirer", "souhaiter"],
              proof_ctx: "Le verbe yargabu est un inaccompli 3MS indicatif de la racine r-gh-b. Le Lane's donne : desirer ardemment, aspirer a obtenir. Avec la preposition fi, raghiba fi signifie desirer (vers). Avec la preposition 'an, raghiba 'an signifie se detourner de, avoir en aversion. La preposition inverse le sens du desir — au lieu de se tourner vers, on se detourne de. Le desir est une force directionnelle qui peut aller vers ou se detourner de. Ici « man yargabu 'an millati Ibrahim » — qui se detourne de la voie d'Ibrahim. L'inaccompli marque une question intemporelle — la question vaut pour tout etre humain a toute epoque.",
              axe1_verset: "Le verbe yargabu avec 'an ouvre la question rhetorique du verset. Le champ lexical (se detourner, voie, Ibrahim, insense, ame) montre que se detourner de la voie d'Ibrahim est un acte d'insensibilite. Le verset repond a sa propre question : seul celui qui a rendu son ame insensee se detourne. Le desir inverse (l'aversion) est presente comme un signe de folie, pas de sagesse.",
              axe2_voisins: "Le verset 129 se terminait par la priere d'Ibrahim. Le verset 130 pose la question : qui rejette cette voie ? La transition est logique — apres avoir presente la priere du patriarche, le texte interpelle quiconque la rejette. Le verset 131 enchainera avec la soumission d'Ibrahim. La question du verset 130 est un pont entre la priere et la soumission.",
              axe3_sourate: "La racine r-gh-b apparait rarement dans la sourate al-Baqarah. Ce verset est un des rares usages. La rarete de cette racine rend son usage d'autant plus significatif — se detourner de la voie d'Ibrahim est un acte rare et condamnable. La sourate al-Baqarah est construite autour de la voie d'Ibrahim et le rejet de cette voie est un acte de folie.",
              axe4_coherence: "La racine r-gh-b apparait environ 8 fois dans le Coran. En 9:59, « si seulement ils avaient ete satisfaits de ce que Dieu leur a donne, avec Son envoye, et avaient dit : Dieu nous suffit ». En 68:32, « peut-etre notre Seigneur nous donnera mieux ». Le Coran utilise raghiba pour exprimer le desir et l'aspiration — avec 'an, c'est l'aversion. La direction du desir determine le salut ou la perdition.",
              axe5_frequence: "Pour la mission du khalifa, le desir est le moteur de la mission. Se tourner vers la voie d'Ibrahim c'est desirer la guidance. Se detourner c'est perdre le sens de la mission. Le khalifa doit orienter son desir vers la voie d'Ibrahim — la voie du monotheisme pur et de la soumission a Dieu."
            }
          }
        }
      },
      // mll pos=4
      {
        word_key: "mll", position: 4, sense_chosen: "voie",
        analysis_axes: {
          sense_chosen: "voie",
          concept_chosen: "Religion/Confession",
          concepts: {
            "Religion/Confession": {
              status: "retenu",
              senses: ["religion", "confession", "communaute"],
              proof_ctx: "Le mot millati est un nom feminin singulier genitif de la racine m-l-l. Le Lane's donne : religion, voie, confession, maniere d'etre d'une communaute religieuse. La milla est la voie religieuse complete suivie par une communaute — elle englobe les croyances, les pratiques et les lois. L'idafa « millati Ibrahima » (la voie d'Ibrahim) rattache cette voie au patriarche. Le genitif marque la relation possessive — c'est la voie qui appartient a Ibrahim, qu'il a tracee et suivie.",
              axe1_verset: "Le mot millati est l'objet de l'aversion — qui se detourne de la voie d'Ibrahim ? Le champ lexical (se detourner, voie, Ibrahim) montre que la voie d'Ibrahim est la reference a laquelle on est mesure. L'idafa rattache la voie a Ibrahim comme son fondateur et son modele. Se detourner de cette voie c'est rejeter le modele abrahamique de soumission a Dieu.",
              axe2_voisins: "Le verset 129 presentait la priere d'Ibrahim — sa demande d'un envoye. Le verset 130 pose la question du rejet de sa voie. La voie d'Ibrahim est definie par les versets precedents : construire la Maison, se soumettre, demander un guide. Rejeter cette voie c'est rejeter la soumission, la construction et la guidance.",
              axe3_sourate: "Le mot milla apparait dans la sourate al-Baqarah en 2:120 et 2:130. En 2:120, « suis leur milla ». En 2:130, « la milla d'Ibrahim ». La sourate oppose la voie d'Ibrahim (soumission a Dieu seul) aux voies deviantes (suivre les desirs, les demons, les traditions). La milla d'Ibrahim est le critere de reference.",
              axe4_coherence: "La racine m-l-l apparait environ 15 fois dans le Coran. En 3:95, « suivez la milla d'Ibrahim, hanif ». En 4:125, « qui est meilleur en religion que celui qui soumet son visage a Dieu en faisant le bien et suit la milla d'Ibrahim ». Le Coran presente la milla d'Ibrahim comme le monothéisme pur — la voie de la soumission a Dieu sans associe. L'islam se presente comme le retour a cette voie originelle.",
              axe5_frequence: "Pour la mission du khalifa, la voie d'Ibrahim est le cadre de la mission. Le khalifa doit suivre la milla d'Ibrahim — le monotheisme pur, la soumission a Dieu, la construction de la communaute. Se detourner de cette voie c'est perdre le cadre de la mission. La milla est a la fois un heritage et un programme."
            }
          }
        }
      },
      // abrh pos=5
      {
        word_key: "abrh", position: 5, sense_chosen: "Ibrahim",
        analysis_axes: {
          sense_chosen: "Ibrahim",
          concept_chosen: "Nom propre",
          concepts: {
            "Nom propre": {
              status: "retenu",
              senses: ["Abraham (variante dialectale)"],
              proof_ctx: "Le mot Ibrahima est le nom propre du patriarche Ibrahim au genitif. C'est un nom propre non derive d'une racine arabe productive — il est emprunte a l'hebreu Abraham. En tant que nom propre, il designe une personne historique specifique et n'a qu'un seul referent possible. La distinction avec les sens de piqure/fecondation (nul) est evidente : c'est un nom propre dans un contexte de voie religieuse, pas un verbe ou un nom commun.",
              axe1_verset: "Le nom Ibrahim est le complement de « millati » — la voie d'Ibrahim. Ibrahim est le modele dont la voie est la reference. Le champ lexical (voie, se detourner, insense, choisi, ici-bas, au-dela, vertueux) montre qu'Ibrahim est presente comme le paradigme de la personne choisie par Dieu et dont la voie est la norme.",
              axe2_voisins: "Les versets 124-129 etaient consacres a Ibrahim — ses epreuves, sa mission, la construction de la Maison, ses invocations. Le verset 130 conclut cette section en posant la question du rejet de sa voie. Ibrahim est le personnage central de ce passage — le verset 130 synthetise sa place dans l'economie divine.",
              axe3_sourate: "Le nom Ibrahim apparait 15 fois dans la sourate al-Baqarah. C'est le patriarche par excellence de la sourate — en 2:124, Dieu l'eprouve. En 2:125-127, il construit la Maison. En 2:130, sa voie est la reference. En 2:135, juifs et chretiens sont invites a suivre sa milla. Ibrahim est le point de convergence des traditions monotheistes dans la sourate.",
              axe4_coherence: "Le nom Ibrahim apparait 69 fois dans le Coran. Il est le pere du monotheisme, le hanif, celui qui s'est soumis entierement. En 16:120, « Ibrahim etait un guide (umma), soumis a Dieu, hanif ». En 22:78, « la milla de votre pere Ibrahim ». Le Coran presente Ibrahim comme le fondateur de la voie de la soumission a Dieu.",
              axe5_frequence: "Pour la mission du khalifa, Ibrahim est le modele de la mission. Sa soumission totale, sa construction de la Maison, sa priere pour un envoye — tout cela definit la mission du khalifa. Suivre la milla d'Ibrahim c'est suivre le modele originel de la mission humaine sur terre."
            },
            "Piqure/Pointe": {
              status: "nul",
              senses: ["aiguille", "dard de guepe"],
              proof_ctx: "Le sens de piqure est hors sujet — le mot est le nom propre du patriarche Ibrahim."
            },
            "Fecondation": {
              status: "nul",
              senses: ["feconder un palmier"],
              proof_ctx: "Le sens de fecondation est hors sujet — le mot est un nom propre, pas un verbe agricole."
            }
          }
        }
      },
      // sfh pos=8
      {
        word_key: "sfh", position: 8, sense_chosen: "rendre insense",
        analysis_axes: {
          sense_chosen: "rendre insense",
          concept_chosen: "Legerete/Stupidite",
          concepts: {
            "Legerete/Stupidite": {
              status: "retenu",
              senses: ["etre insense", "leger d'esprit", "stupide", "declarer insense", "agir de maniere insensee"],
              proof_ctx: "Le verbe safiha est un accompli 3MS de la racine s-f-h. Le Lane's donne : etre insense, leger d'esprit, manquer de sagesse et de discernement, perdre le jugement. L'accompli marque un acte acheve — l'insensibilite est un etat acquis, pas un trait inne. L'objet est « nafsahu » (son ame) — celui qui a rendu insensee sa propre ame. Le safih est celui qui ne mesure pas les consequences de ses actes — il agit contre ses propres interets par manque de discernement. La distinction avec l'agitation (nul) est que le contexte est moral (l'insensibilite de l'ame), pas physique (le mouvement desordonne).",
              axe1_verset: "Le verbe safiha est la reponse a la question rhetorique — qui se detourne de la voie d'Ibrahim ? Celui qui a rendu insensee son ame. Le champ lexical (se detourner, voie, insense, ame) montre que le rejet de la voie d'Ibrahim est un acte d'auto-destruction. L'insensibilite n'est pas imposee de l'exterieur — c'est la personne qui rend sa propre ame insensee. C'est un choix personnel aux consequences internes.",
              axe2_voisins: "Le verset 129 priait pour un envoye qui enseigne et purifie. Le verset 130 montre l'oppose — celui qui rejette la voie d'Ibrahim se salit au lieu de se purifier. La purification (v129) et l'insensibilite (v130) sont les deux destins possibles : suivre l'envoye et se purifier, ou rejeter la voie et se rendre insense.",
              axe3_sourate: "La racine s-f-h apparait dans la sourate al-Baqarah en 2:13 et 2:130 et 2:142. En 2:13, « ce sont eux les insenses (sufaha') mais ils ne savent pas ». En 2:130, celui qui rejette Ibrahim est qualifie d'insense. En 2:142, « les insenses parmi les gens diront ». La sourate utilise la racine s-f-h pour designer ceux qui rejettent la guidance — l'insensibilite est le diagnostic coranique du rejet.",
              axe4_coherence: "La racine s-f-h apparait environ 11 fois dans le Coran. En 7:155, Moussa dit « la detruirais-Tu pour ce que des insenses parmi nous ont fait ? ». En 72:4, « notre insense disait contre Dieu une enormite ». Le Coran lie systematiquement l'insensibilite au rejet de la guidance divine. L'insense n'est pas celui qui manque d'intelligence — c'est celui qui refuse la sagesse disponible.",
              axe5_frequence: "Pour la mission du khalifa, l'insensibilite est l'ennemi de la mission. Le khalifa doit eviter de rendre son ame insensee en rejetant la guidance. L'insensibilite est un choix — on choisit de ne pas ecouter, de ne pas comprendre, de ne pas suivre. La mission exige la sagesse, l'exact oppose de l'insensibilite."
            },
            "Agitation/Mouvement": {
              status: "nul",
              senses: ["agitation"],
              proof_ctx: "Le sens d'agitation physique est hors sujet — le contexte est moral, l'insensibilite de l'ame."
            },
            "Sens isole/Soif": {
              status: "nul",
              senses: ["soif violente"],
              proof_ctx: "Le sens de soif est hors sujet — le contexte est l'insensibilite de l'ame, pas la soif physique."
            }
          }
        }
      },
      // nfs pos=9
      {
        word_key: "nfs", position: 9, sense_chosen: "ame",
        analysis_axes: {
          sense_chosen: "ame",
          concept_chosen: "Ame/Etre",
          concepts: {
            "Ame/Etre": {
              status: "retenu",
              senses: ["ame", "soi-meme", "personne", "esprit", "desir"],
              proof_ctx: "Le mot nafsahu est un nom feminin singulier accusatif de la racine n-f-s avec pronom suffixe 3MS. Le Lane's donne : ame, soi-meme, personne, esprit. Le nafs est la realite interieure de l'etre — le siege de la volonte, des desirs et de la conscience. L'accusatif marque l'objet du verbe safiha — c'est l'ame qui est rendue insensee. Le pronom « hu » (son) marque que c'est sa propre ame — l'auto-dommage. La distinction avec le souffle (nul) est que le contexte est interieur (l'etat de l'ame), pas physique (la respiration).",
              axe1_verset: "Le mot nafsahu est l'objet de l'insensibilite — « safiha nafsahu » (il a rendu insensee son ame). Le champ lexical (se detourner, voie, insense, ame) montre que le rejet de la voie d'Ibrahim est un acte contre sa propre ame. L'ame est le siege du discernement — la rendre insensee c'est detruire sa propre capacite de jugement. Le verset montre que le rejet de la guidance est un auto-sabotage.",
              axe2_voisins: "Le verset 129 demandait la purification des ames par l'envoye. Le verset 130 montre l'ame non purifiee — celle qui s'est rendue insensee. L'opposition est claire : l'ame purifiee suit la voie d'Ibrahim, l'ame insensee la rejette. Les deux destins de l'ame sont poses cote a cote.",
              axe3_sourate: "La racine n-f-s est une des plus frequentes de la sourate al-Baqarah. En 2:48, « aucune ame ne sera assistee par une autre ». En 2:72, « vous avez tue une ame ». En 2:110, « ce que vous avancez pour vos ames ». La sourate utilise nafs pour designer l'ame individuelle responsable — chaque ame porte ses propres actes. Le verset 130 s'inscrit dans cette responsabilite individuelle — c'est son propre ame que l'insense rend folle.",
              axe4_coherence: "La racine n-f-s apparait environ 295 fois dans le Coran. Le Coran insiste sur la responsabilite de l'ame — en 91:7-10, « par l'ame et Celui qui l'a harmonisee... a reussi celui qui l'a purifiee, a echoue celui qui l'a corrompue ». Le verset 130 s'inscrit dans cette doctrine de la responsabilite de l'ame — chacun est responsable de l'etat de son ame.",
              axe5_frequence: "Pour la mission du khalifa, l'ame est le siege de la mission. Le khalifa doit prendre soin de son ame — la purifier, la nourrir de sagesse, la proteger de l'insensibilite. La mission commence par l'etat de l'ame — une ame insensee ne peut pas accomplir la mission."
            },
            "Souffle/Vie": {
              status: "nul",
              senses: ["souffle", "respirer", "soulagement"],
              proof_ctx: "Le sens de souffle est hors sujet — le contexte est l'etat moral de l'ame, pas la respiration physique."
            }
          }
        }
      },
      // stf pos=11
      {
        word_key: "stf", position: 11, sense_chosen: "choisir",
        analysis_axes: {
          sense_chosen: "choisir",
          concept_chosen: "Alignement/Ordre",
          concepts: {
            "Alignement/Ordre": {
              status: "retenu",
              senses: ["ranger en rang", "se mettre en rang", "s'aligner pour le combat", "rangee"],
              proof_ctx: "Le verbe istafaynahu est un accompli 1PP de la forme VIII de la racine s-t-f (safwa/safiya) avec pronom suffixe 3MS. Le Lane's donne : choisir, elire, selectionner le meilleur. La forme VIII (ifta'ala) indique un choix delibere et reflechi — choisir pour soi-meme apres examen et selection. Le sens de selectionner vient de l'idee premiere de la racine s-f-w : la purete, ce qui est pur et sans melange. Choisir c'est selectionner le pur parmi l'impur, le meilleur parmi les bons. L'accompli marque un acte acheve — le choix est fait, Ibrahim est l'elu. Le pronom « nahu » (le) refere a Ibrahim. Le pronom « na » (Nous) est le pluriel de majeste divine. Bien que les concepts du fichier sources donnent « Alignement/Ordre », le sens contextuel est le choix et la selection — istafa signifie choisir le meilleur, pas aligner en rang. Le concept recouvre ici le sens de selection du meilleur.",
              axe1_verset: "Le verbe istafaynahu est l'affirmation divine centrale de la deuxieme partie du verset — « Nous l'avons choisi ». Apres la question rhetorique (qui rejette Ibrahim ?), le verset affirme que Dieu a choisi Ibrahim dans ce monde. Le champ lexical (choisi, ici-bas, au-dela, vertueux) montre que le choix divin couvre les deux mondes. Ibrahim est choisi dans la dunya et vertueux dans l'akhira — son election est totale.",
              axe2_voisins: "Les versets 124-129 montraient Ibrahim mis a l'epreuve, construisant la Maison, priant pour sa descendance. Le verset 130 revele le fondement de tout cela : Dieu l'a choisi. Le choix divin precede les epreuves — Ibrahim a ete choisi, puis eprouve, puis confirme. Le choix est l'origine de la mission d'Ibrahim.",
              axe3_sourate: "La racine s-t-f est rare dans la sourate al-Baqarah. En 2:132, Ibrahim recommande la religion a ses fils. En 2:247, Dieu a choisi Talut comme roi. La sourate montre que le choix divin est le fondement de la legitimite — Ibrahim est choisi, donc sa voie est la reference. Les versets environnants montrent que le choix divin est confirme par les actes du choisi.",
              axe4_coherence: "La racine s-t-f (istafa) apparait environ 12 fois dans le Coran. En 3:33, « Dieu a choisi Adam, Nuh, la famille d'Ibrahim et la famille de 'Imran ». En 3:42, « Dieu t'a choisie (Maryam) ». Le Coran presente l'election divine comme un acte de selection du meilleur — Dieu choisit ceux qui sont les plus aptes a porter Sa mission. Le choix n'est pas arbitraire — il est fonde sur la purete et la capacite.",
              axe5_frequence: "Pour la mission du khalifa, le choix divin est le fondement de la legitimite. Ibrahim n'a pas choisi d'etre prophete — Dieu l'a choisi. Le khalifa doit reconnaitre que sa mission vient de Dieu, pas de lui-meme. Le choix divin engage le choisi — etre choisi c'est etre charge d'une responsabilite."
            },
            "Abri/Veranda": {
              status: "nul",
              senses: ["galerie couverte (suffa)"],
              proof_ctx: "Le sens d'abri est hors sujet — le verbe istafa signifie choisir, pas abriter."
            },
            "Surface/Platitude": {
              status: "nul",
              senses: ["dalle plate"],
              proof_ctx: "Le sens de surface plate est hors sujet — le contexte est l'election divine d'Ibrahim."
            }
          }
        }
      },
      // dnw pos=13
      {
        word_key: "dnw", position: 13, sense_chosen: "ici-bas",
        analysis_axes: {
          sense_chosen: "ici-bas",
          concept_chosen: "Proximite/Monde d'ici-bas",
          concepts: {
            "Proximite/Monde d'ici-bas": {
              status: "retenu",
              senses: ["etre proche", "proche", "ici-bas", "approcher"],
              proof_ctx: "Le mot ad-dunya est un nom feminin singulier defini de la racine d-n-w. Le Lane's donne : proche, ce qui est proche, le monde d'ici-bas. Le mot dunya est le feminin de adna (le plus proche) — la vie d'ici-bas est « la plus proche » par opposition a l'au-dela qui est « la derniere ». L'article defini (al-/ad-) marque le monde d'ici-bas comme une realite connue et definie. Le sens etymologique de proximite eclaire le sens du mot — la dunya est le monde a portee de main, le monde immediat.",
              axe1_verset: "Le mot ad-dunya precise le lieu du choix divin — Dieu a choisi Ibrahim dans ce monde d'ici-bas. Le verset oppose ensuite la dunya et l'akhira — Ibrahim est choisi ici-bas et vertueux dans l'au-dela. La double mention (dunya/akhira) montre que le choix d'Ibrahim couvre les deux dimensions de l'existence. Le champ lexical (choisi, ici-bas, au-dela, vertueux) montre l'election totale d'Ibrahim.",
              axe2_voisins: "Les versets 127-129 montraient Ibrahim agissant dans la dunya — construisant la Maison, priant pour un envoye. Le verset 130 confirme que ces actes dans la dunya sont le fruit du choix divin. Les actions d'Ibrahim dans ce monde sont la manifestation du choix divin — il construit et prie parce qu'il a ete choisi.",
              axe3_sourate: "Le mot dunya apparait dans la sourate al-Baqarah en opposition avec l'akhira. En 2:85, « la degradation dans la vie d'ici-bas ». En 2:86, « ceux qui ont achete la vie d'ici-bas au prix de l'au-dela ». En 2:114, « la degradation dans ce monde ». La sourate presente la dunya comme un lieu d'epreuve et de choix — ce qui compte c'est ce qui est fait dans la dunya pour l'akhira.",
              axe4_coherence: "La racine d-n-w apparait environ 115 fois dans le Coran. La dunya est systematiquement opposee a l'akhira. En 28:77, « recherche dans ce que Dieu t'a donne la demeure de l'au-dela et n'oublie pas ta part dans ce monde ». Le Coran ne rejette pas la dunya — il la place en perspective avec l'akhira. Le verset 130 montre qu'Ibrahim a ete choisi dans la dunya — la dunya est un lieu de choix divin, pas seulement de jouissance.",
              axe5_frequence: "Pour la mission du khalifa, la dunya est le lieu de la mission. Le khalifa agit dans ce monde pour construire ce qui compte dans l'au-dela. Ibrahim a ete choisi dans la dunya — la dunya est le terrain de la mission, pas un obstacle. Le khalifa doit travailler dans la dunya tout en visant l'akhira."
            }
          }
        }
      },
      // axhr pos=17
      {
        word_key: "axhr", position: 17, sense_chosen: "l'au-dela",
        analysis_axes: {
          sense_chosen: "l'au-dela",
          concept_chosen: "Sens isole/L'au-dela",
          concepts: {
            "Sens isole/L'au-dela": {
              status: "retenu",
              senses: ["l'au-dela (akhira)"],
              proof_ctx: "Le mot al-akhirati est un nom feminin singulier defini genitif de la racine a-kh-r. Le Lane's donne : dernier, l'au-dela, la vie apres la mort. L'akhira est le monde a venir, oppose a la dunya. Le mot akhira est le feminin de akhir (dernier) — la vie derniere, la vie qui vient apres. L'article defini marque l'au-dela comme une realite connue et definie. La distinction avec le report (nul) est que le mot ici est un nom designant l'au-dela, pas un verbe de retardement.",
              axe1_verset: "Le mot al-akhirati complete le tableau de l'election d'Ibrahim — il est choisi ici-bas et vertueux dans l'au-dela. Le champ lexical (ici-bas, au-dela, vertueux) montre que la reussite d'Ibrahim est totale — il ne reussit pas seulement dans ce monde mais aussi dans l'autre. L'opposition dunya/akhira structure la deuxieme partie du verset et montre que le choix divin a des consequences eternelles.",
              axe2_voisins: "Le verset 129 parlait de la mission dans la dunya (reciter, enseigner, purifier). Le verset 130 etend la perspective a l'akhira — Ibrahim est aussi vertueux dans l'au-dela. La mission dans la dunya a des consequences dans l'akhira. Les deux mondes sont lies par les actes du choisi.",
              axe3_sourate: "Le mot akhira apparait dans la sourate al-Baqarah en opposition constante avec la dunya. En 2:86, « ceux qui ont achete la vie d'ici-bas au prix de l'au-dela ». En 2:102, « ils n'ont aucune part dans l'au-dela ». En 2:200, « celui qui n'a aucune part dans l'au-dela ». La sourate insiste sur le fait que l'au-dela est le critere final de jugement — ce qui compte ultimement c'est le sort dans l'akhira.",
              axe4_coherence: "La racine a-kh-r apparait environ 250 fois dans le Coran. L'akhira est un pilier de la foi coranique — croire en l'au-dela est un des fondements de la foi. En 2:4, « ceux qui croient en ce qui t'a ete revele... et en l'au-dela ils ont la certitude ». Le Coran presente l'au-dela comme la finalite de l'existence — la dunya est le lieu de l'epreuve, l'akhira est le lieu du resultat.",
              axe5_frequence: "Pour la mission du khalifa, l'au-dela est la finalite de la mission. Le khalifa travaille dans la dunya mais vise l'akhira. Ibrahim est vertueux dans l'au-dela parce qu'il a ete fidele dans la dunya. La mission du khalifa dans ce monde determine son sort dans l'au-dela."
            },
            "Report/Delai": {
              status: "nul",
              senses: ["retarder", "differer", "etre en retard"],
              proof_ctx: "Le sens de retardement est hors sujet — le mot al-akhira designe l'au-dela, pas un acte de retarder."
            },
            "Alterite": {
              status: "nul",
              senses: ["autre", "dernier"],
              proof_ctx: "Le sens d'alterite est un sous-sens de la racine — akhir signifie dernier. L'akhira est « la derniere » — c'est le nom propre de l'au-dela. Le sens d'alterite est implicite mais le mot designe specifiquement l'au-dela."
            }
          }
        }
      },
      // slh pos=19
      {
        word_key: "slh", position: 19, sense_chosen: "vertueux",
        analysis_axes: {
          sense_chosen: "vertueux",
          concept_chosen: "Bonte/Rectitude",
          concepts: {
            "Bonte/Rectitude": {
              status: "retenu",
              senses: ["etre bon", "rectitude", "reparer", "reconcilier", "oeuvre bonne", "vertueux", "reformer"],
              proof_ctx: "Le mot as-salihina est un nom masculin pluriel defini genitif de la racine s-l-h. Le Lane's donne : etre bon, vertueux, integre, conforme a l'ordre juste. Le salih est celui dont les actes sont conformes a la rectitude — il fait le bien de maniere constante. Le pluriel (salihina) designe la categorie des vertueux. L'article defini (as-) marque un groupe connu et defini — LES vertueux, pas des vertueux quelconques. La preposition « min » (parmi) avec le lam d'emphase (la-mina) affirme avec force qu'Ibrahim est parmi ce groupe. La distinction avec la paix (nul) est que le mot est un participe actif designant des personnes vertueuses, pas un nom abstrait.",
              axe1_verset: "Le mot as-salihina ferme le verset en qualifiant Ibrahim dans l'au-dela — il est parmi les vertueux. Le champ lexical final (au-dela, certes parmi, les vertueux) montre que le sort d'Ibrahim dans l'akhira est la recompense de son election et de sa fidelite dans la dunya. Le mot salihina est l'aboutissement du verset — tout ce qui precede (voie, choix, ici-bas) converge vers ce resultat : la vertu dans l'au-dela.",
              axe2_voisins: "Le verset 129 demandait un envoye qui purifie. Le verset 130 montre le resultat de la purification — etre parmi les vertueux. La purification dans la dunya produit la vertu dans l'akhira. Ibrahim est le modele de ce processus — purifie dans ce monde, vertueux dans l'au-dela.",
              axe3_sourate: "La racine s-l-h apparait dans la sourate al-Baqarah sous ses differents sens. En 2:11, « ne semez pas le desordre ». En 2:228, « si elles veulent la reconciliation ». En 2:236, « le bien pour les vertueux ». La sourate oppose la corruption (fasad) et la rectitude (salah) — les vertueux sont ceux qui font le bien et evitent le desordre.",
              axe4_coherence: "La racine s-l-h apparait environ 180 fois dans le Coran. Les vertueux (salihun/salihina) sont une categorie coranique recurrente — en 21:105, « la terre sera heritee par Mes serviteurs vertueux ». En 29:9, « Nous les ferons entrer parmi les vertueux ». Le Coran presente la vertu comme un objectif a atteindre et une categorie a laquelle on aspire appartenir. Ibrahim est presente comme membre eminent de cette categorie.",
              axe5_frequence: "Pour la mission du khalifa, la vertu est l'objectif final de la mission. Le khalifa doit aspirer a etre parmi les vertueux — ceux dont les actes sont conformes a la rectitude. Ibrahim est le modele — choisi par Dieu, fidele dans la dunya, vertueux dans l'akhira. La mission du khalifa suit ce meme chemin : etre choisi, agir avec rectitude, atteindre la vertu."
            },
            "Sens isole/Paix": {
              status: "nul",
              senses: ["paix"],
              proof_ctx: "Le sens de paix est hors sujet — le mot est un participe actif pluriel designant des personnes vertueuses, pas un nom abstrait."
            }
          }
        }
      }
    ]
  }
};

// =====================================================
// PROCESS VERSE
// =====================================================
async function processVerse(verseNum) {
  console.log(`\n=== VERSET 2:${verseNum} ===`);
  const data = verseData[verseNum];
  if (!data) { console.log('  Pas de donnees'); return; }

  let okCount = 0, errCount = 0;

  for (const word of data.words) {
    const { error: insertErr } = await supabase.from('verse_word_analyses').insert({
      verse_id: data.verse_id,
      word_key: word.word_key,
      position: word.position,
      sense_chosen: word.sense_chosen,
      analysis_axes: word.analysis_axes,
      model_used: 'claude-opus-4',
      prompt_version: 'v2-pipeline-maison'
    });

    if (insertErr) {
      console.error(`  ERREUR insertion vwa ${word.word_key}:`, insertErr.message);
      errCount++;
    } else {
      console.log(`  OK VWA ${word.word_key} pos=${word.position}`);
      okCount++;
    }
  }

  const { error: updateErr } = await supabase.from('verse_analyses').update({
    segments: data.segments,
    translation_arab: data.translation_arab,
    translation_explanation: data.translation_explanation,
    full_translation: data.full_translation
  }).eq('id', data.analysis_id);

  if (updateErr) {
    console.error(`  ERREUR update verse_analyses:`, updateErr.message);
    errCount++;
  } else {
    console.log(`  OK verse_analyses V${verseNum}`);
    okCount++;
  }

  console.log(`VERSET 2:${verseNum} — ${okCount} OK, ${errCount} erreurs`);
  return { okCount, errCount };
}

// =====================================================
// SYNC word_meanings
// =====================================================
async function syncWordMeanings() {
  console.log('\n=== SYNC word_meanings ===');

  const verseIds = [136, 137];
  const { data: vwas } = await supabase
    .from('verse_word_analyses')
    .select('word_key, analysis_axes')
    .in('verse_id', verseIds);

  if (!vwas || vwas.length === 0) {
    console.log('  Aucune donnee a synchroniser');
    return;
  }

  const processed = new Set();
  for (const vwa of vwas) {
    const axes = vwa.analysis_axes;
    if (!axes || !axes.concepts) continue;

    const key = vwa.word_key;
    if (processed.has(key)) continue;
    processed.add(key);

    const { data: wa } = await supabase
      .from('word_analyses')
      .select('id')
      .eq('word_key', key)
      .single();

    if (!wa) {
      console.log(`  ${key} non trouve dans word_analyses — skip`);
      continue;
    }

    for (const [conceptName, conceptData] of Object.entries(axes.concepts)) {
      const { error } = await supabase.from('word_meanings')
        .update({
          status: conceptData.status,
          proof_ctx: conceptData.proof_ctx || null,
          axe1_verset: conceptData.axe1_verset || null,
          axe2_voisins: conceptData.axe2_voisins || null,
          axe3_sourate: conceptData.axe3_sourate || null,
          axe4_coherence: conceptData.axe4_coherence || null,
          axe5_frequence: conceptData.axe5_frequence || null
        })
        .eq('analysis_id', wa.id)
        .eq('concept', conceptName);

      if (error) {
        console.error(`  ERREUR sync ${key}/${conceptName}:`, error.message);
      }
    }
    console.log(`  ${key} -> synced`);
  }
}

// =====================================================
// MAIN
// =====================================================
async function main() {
  console.log('=== PIPELINE SOURATE 2 — VERSETS 129-130 ===\n');
  await processVerse(129);
  await processVerse(130);
  await syncWordMeanings();
  console.log('\n=== PIPELINE V129-130 TERMINEE ===');
}

main().catch(e => console.error('FATAL:', e));
