const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// =====================================================
// PIPELINE SOURATE 2 — VERSET 154
// verse_id=161, analysis_id=521
// "Et ne dites pas de ceux qui sont tues dans le chemin
//  de Dieu qu'ils sont morts. Non, ils sont vivants,
//  mais vous ne percevez pas."
// =====================================================

const verseData = {
  154: {
    verse_id: 161,
    analysis_id: 521,
    translation_arab: "Et ne dites pas de ceux qui sont tues dans le chemin de Dieu qu'ils sont morts. Non, ils sont vivants, mais vous ne percevez pas.",
    full_translation: "Et ne dites pas de ceux qui sont tues dans le chemin d'Allah : 'Ils sont morts'. Au contraire, ils sont vivants, mais vous n'en etes pas conscients.",
    translation_explanation: `§DEMARCHE§
Le verset interdit une parole specifique : dire que ceux qui sont tues dans le chemin de Dieu sont morts. Le verbe **taqulu** est un inaccompli 2MP de la racine q-w-l avec la negation **la** (ne dites pas). Le Lane's donne : dire, parler, enoncer. L'inaccompli avec la negation (la taqulu) est un ordre negatif — une interdiction. Le pronom relatif **man** introduit ceux qui sont concernes. Le verbe **yuqtalu** est un inaccompli passif 3MS de la racine q-t-l. Le Lane's donne : tuer, faire mourir. Le passif indique que la personne est tuee — elle subit l'action. L'inaccompli passif peut avoir ici une valeur de present general ou de passe dans le contexte du relatif. Le nom **sabili** est un nom genitif de la racine s-b-l. Le Lane's donne : chemin, voie, route. L'expression « fi sabili Allahi » (dans le chemin de Dieu) est une expression coranique fixe qui designe la cause de Dieu. Le nom **Allahi** est le nom propre de la divinite au genitif. Le nom **amwatun** est un pluriel indefini de la racine m-w-t. Le Lane's donne : morts, ceux qui ont cesse de vivre. Le pluriel indefini (amwatun sans article) signifie « des morts » — le verset interdit de qualifier ces personnes avec ce mot. Le nom **ahya'un** est un pluriel indefini de la racine h-y-y. Le Lane's donne : vivants, ceux qui possedent la vie. Le pluriel indefini (ahya'un sans article) contraste directement avec amwatun — non pas morts mais vivants. Le verbe **tash'uruna** est un inaccompli 2MP de la racine sh-'-r avec la negation **la** (vous ne percevez pas). Le Lane's donne : percevoir, sentir, etre conscient par les sens. L'inaccompli avec la negation indique une incapacite permanente — vous n'avez pas la perception necessaire pour comprendre leur etat. Le choix de sh-'-r (percevoir par les sens) plutot que '-l-m (savoir par la raison) est significatif : il ne s'agit pas de savoir intellectuel mais de perception sensorielle — cette realite echappe aux sens humains.

§JUSTIFICATION§
**ne dites pas** — Le sens retenu est « dire ». Le verbe taqulu avec la negation la forme un ordre negatif : ne dites pas. L'alternative « penser » est ecartee car q-w-l designe l'enonciation exterieure, pas la pensee interieure.

**ceux qui sont tues** — Le sens retenu est « tuer ». Le verbe yuqtalu au passif signifie « sont tues ». L'alternative « combattre » est ecartee car le passif yuqtal designe celui qui subit la mort, pas celui qui combat activement.

**chemin** — Le sens retenu est « chemin/voie ». Le mot sabili dans l'expression « fi sabili Allahi » designe la voie de Dieu. L'alternative « voyageur » est ecartee car le mot est ici un nom au genitif dans une expression figee.

**Dieu** — Le sens retenu est « Dieu ». Allah est le nom propre de la divinite unique.

**morts** — Le sens retenu est « mort ». Le mot amwatun est le pluriel de mayyit (mort). L'alternative « terre morte » est ecartee car le contexte parle de personnes tuees, pas de terres steriles.

**vivants** — Le sens retenu est « vivant ». Le mot ahya'un est le pluriel de hayy (vivant). L'alternative « saluer » est ecartee car le mot est ici un nom adjectival designant l'etat de vie.

**ne percevez pas** — Le sens retenu est « percevoir/sentir ». Le verbe tash'uruna avec la negation la signifie « vous ne percevez pas ». L'alternative « poesie » est ecartee car le verbe est a la forme I dans un contexte de perception sensorielle.

§CRITIQUE§
Les traductions courantes rendent ce verset de maniere similaire. La difference principale porte sur tash'uruna : certains traduisent « vous n'en avez pas conscience » (Hamidullah), d'autres « vous ne le savez pas ». Notre choix de « vous ne percevez pas » est plus fidele a la racine sh-'-r qui porte specifiquement sur la perception sensorielle, pas sur le savoir rationnel ('-l-m). Le Coran choisit deliberement sh-'-r ici pour indiquer que cette realite — la vie des tues dans le chemin de Dieu — echappe aux sens humains, pas a la raison.`,
    segments: [
      { fr: "et", phon: "wa", arabic: "\u0648\u064e", is_particle: true, position: 0 },
      { fr: "ne", phon: "la", arabic: "\u0644\u064e\u0627", is_particle: true, position: 1 },
      { fr: "dites pas", pos: "verbe", phon: "taqulu", arabic: "\u062a\u064e\u0642\u064f\u0648\u0644\u064f\u0648\u0627", word_key: "qwl", is_particle: false, sense_retenu: "dire", position: 2 },
      { fr: "de ceux qui", pos: "pronom", phon: "li-man", arabic: "\u0644\u0650\u0645\u064e\u0646", word_key: "mn", is_particle: true, position: 3 },
      { fr: "sont tues", pos: "verbe", phon: "yuqtalu", arabic: "\u064a\u064f\u0642\u0652\u062a\u064e\u0644\u064f", word_key: "qtl", is_particle: false, sense_retenu: "tuer", position: 4 },
      { fr: "dans", phon: "fi", arabic: "\u0641\u0650\u064a", is_particle: true, position: 5 },
      { fr: "le chemin", pos: "nom", phon: "sabili", arabic: "\u0633\u064e\u0628\u0650\u064a\u0644\u0650", word_key: "sbl", is_particle: false, sense_retenu: "chemin", position: 6 },
      { fr: "de Dieu", pos: "nom", phon: "Allahi", arabic: "\u0671\u0644\u0644\u0651\u064e\u0647\u0650", word_key: "llh", is_particle: false, sense_retenu: "Dieu", position: 7 },
      { fr: "morts", pos: "nom", phon: "amwatun", arabic: "\u0623\u064e\u0645\u0652\u0648\u064e\u0670\u062a\u064c", word_key: "mwt", is_particle: false, sense_retenu: "mort", position: 8 },
      { fr: "au contraire", phon: "bal", arabic: "\u0628\u064e\u0644\u0652", is_particle: true, position: 9 },
      { fr: "vivants", pos: "nom", phon: "ahya'un", arabic: "\u0623\u064e\u062d\u0652\u064a\u064e\u0627\u0621\u064c", word_key: "hyy", is_particle: false, sense_retenu: "vivant", position: 10 },
      { fr: "mais", phon: "wa-lakin", arabic: "\u0648\u064e\u0644\u064e\u0640\u0643\u0650\u0646", is_particle: true, position: 11 },
      { fr: "ne", phon: "la", arabic: "\u0644\u064e\u0627", is_particle: true, position: 12 },
      { fr: "percevez pas", pos: "verbe", phon: "tash'uruna", arabic: "\u062a\u064e\u0634\u0652\u0639\u064f\u0631\u064f\u0648\u0646\u064e", word_key: "sher", is_particle: false, sense_retenu: "percevoir", position: 13 }
    ],
    words: [
      // qwl pos=2
      {
        word_key: "qwl", position: 2, sense_chosen: "dire",
        analysis_axes: {
          sense_chosen: "dire",
          concept_chosen: "Parole/\u00c9nonciation",
          concepts: {
            "Parole/\u00c9nonciation": {
              status: "retenu",
              senses: ["dire", "parler", "parole", "discours", "affirmer"],
              proof_ctx: "Le verbe taqulu est un inaccompli 2MP de la racine q-w-l. Le Lane's donne : dire, parler, enoncer une parole. Dire est un acte exterieur de production de mots — la parole sort de celui qui parle et atteint celui qui ecoute. Ici le verbe est precede de la negation la qui forme un ordre negatif (la taqulu = ne dites pas). L'inaccompli donne a cette interdiction une portee permanente — ne dites jamais. La distinction avec le sens d'opinion (nul) est claire : le verset interdit une enonciation, pas une pensee interieure.",
              axe1_verset: "Le verbe taqulu ouvre le verset avec une interdiction : ne dites pas. Le champ lexical du verset oppose deux declarations : dire qu'ils sont morts (amwatun) versus la realite qu'ils sont vivants (ahya'un). Le verset corrige une parole erronee par une verite que les sens ne percoivent pas. L'interdiction de dire porte sur une qualification fausse — qualifier de morts ceux qui sont en realite vivants. La parole ici n'est pas un simple acte de communication mais un jugement sur la realite.",
              axe2_voisins: "Le verset 153 demandait de chercher aide dans la patience et la priere. Le verset 154 precise l'attitude face aux pertes humaines dans le chemin de Dieu — ne pas les qualifier de morts. Le verset 155 annoncera les epreuves a venir. La sequence montre que la patience exige aussi une correction du langage — ne pas dire ce qui est faux meme dans la douleur.",
              axe3_sourate: "La racine q-w-l est une des plus frequentes de la sourate al-Baqarah. En 2:8, « parmi les gens il y a ceux qui disent ». En 2:11, « quand on leur dit ne semez pas le desordre ». La sourate structure les groupes humains par ce qu'ils disent — la parole revele la croyance interieure. Le verset 154 montre que certaines paroles doivent etre interdites car elles contredisent la realite.",
              axe4_coherence: "La racine q-w-l apparait environ 1722 fois dans le Coran. L'interdiction « la taqulu » (ne dites pas) apparait dans plusieurs versets pour corriger des paroles erronees. En 4:171, « ne dites pas trois ». En 2:104, « ne dites pas ra'ina mais dites unzurna ». Le Coran corrige le langage pour corriger la pensee — la parole juste mene a la croyance juste.",
              axe5_frequence: "Pour la mission du khalifa, la parole est un outil de la mission qui doit etre utilise avec precision. Dire que les tues dans le chemin de Dieu sont morts c'est nier une realite que Dieu affirme. Le khalifa doit aligner sa parole sur la verite revelee, meme quand les sens semblent contredire cette verite."
            },
            "Pens\u00e9e/Avis": {
              status: "nul",
              senses: ["opinion", "avis", "doctrine"],
              proof_ctx: "Le sens d'opinion est un etat interieur. Le verset interdit une enonciation exterieure (ne dites pas), pas une pensee interieure."
            },
            "Sens isol\u00e9/Puissance": {
              status: "nul",
              senses: ["puissance"],
              proof_ctx: "Le sens de puissance est hors sujet — le verbe est un inaccompli 2MP signifiant dire."
            }
          }
        }
      },
      // qtl pos=4
      {
        word_key: "qtl", position: 4, sense_chosen: "tuer",
        analysis_axes: {
          sense_chosen: "tuer",
          concept_chosen: "Meurtre/Combat",
          concepts: {
            "Meurtre/Combat": {
              status: "retenu",
              senses: ["tuer", "assassiner", "combattre", "meurtre", "combat"],
              proof_ctx: "Le verbe yuqtalu est un inaccompli passif 3MS de la racine q-t-l. Le Lane's donne : tuer, oter la vie, faire mourir. Le passif (yuqtalu) indique que la personne subit l'action — elle est tuee par quelqu'un. L'inaccompli dans le contexte du pronom relatif (man yuqtalu) a une valeur de present general — « ceux qui sont tues ». L'expression « fi sabili Allahi » (dans le chemin de Dieu) qualifie les circonstances de la mort — ils ne sont pas tues de maniere quelconque mais dans la cause de Dieu. Le passif souligne que ces personnes n'ont pas choisi de mourir mais ont ete tuees.",
              axe1_verset: "Le verbe yuqtalu identifie les personnes concernees — ceux qui sont tues dans le chemin de Dieu. Le champ lexical du verset oppose tuer (qtl) et mort (mwt) et vie (hyy). Etre tue (qtl) est un acte subi de l'exterieur, alors que la mort (mwt) est un etat. Le verset dit que ceux qui sont tues ne sont pas dans l'etat de mort — ils sont dans l'etat de vie. La distinction entre l'acte (etre tue) et l'etat (etre mort ou vivant) est le coeur du verset.",
              axe2_voisins: "Le verset 153 parlait de patience et de priere. Le verset 154 precise une des epreuves majeures — la perte de vies dans le chemin de Dieu. Le verset 155 annoncera des pertes en vies, biens et recoltes. La sequence montre que la mort dans le chemin de Dieu n'est pas une fin mais un passage vers un etat de vie que les sens ne percoivent pas.",
              axe3_sourate: "La racine q-t-l apparait frequemment dans la sourate al-Baqarah dans le contexte du combat et du sacrifice. En 2:61, « ils tuaient les prophetes sans droit ». En 2:91, « pourquoi tuiez-vous les prophetes de Dieu ? ». En 2:190, « combattez dans le chemin de Dieu ceux qui vous combattent ». La sourate traite du combat et de la mort dans une perspective de cause divine.",
              axe4_coherence: "La racine q-t-l apparait environ 170 fois dans le Coran. Le meme theme des tues dans le chemin de Dieu revient en 3:169 avec plus de detail : « Ne considere pas ceux qui ont ete tues dans le chemin de Dieu comme morts. Ils sont vivants aupres de leur Seigneur, recevant leur subsistance ». Le verset 3:169 developpe ce que 2:154 enonce de maniere concise.",
              axe5_frequence: "Pour la mission du khalifa, etre tue dans le chemin de Dieu n'est pas une perte mais un accomplissement de la mission. Le khalifa doit comprendre que le sacrifice dans la cause de Dieu conduit a une vie que les sens ne percoivent pas. La mort physique n'est pas la fin de la mission mais un passage vers un etat superieur."
            }
          }
        }
      },
      // sbl pos=6
      {
        word_key: "sbl", position: 6, sense_chosen: "chemin",
        analysis_axes: {
          sense_chosen: "chemin",
          concept_chosen: "Voie/Direction",
          concepts: {
            "Voie/Direction": {
              status: "retenu",
              senses: ["chemin", "voie", "voyageur"],
              proof_ctx: "Le mot sabili est un nom masculin singulier genitif de la racine s-b-l. Le Lane's donne : chemin, voie, route qu'on emprunte. Le chemin est une realite permanente qui mene quelque part — il a un debut et une fin, une direction. Ici sabili est dans l'expression « fi sabili Allahi » (dans le chemin de Dieu), une expression coranique fixe qui designe la cause de Dieu, toute action accomplie pour Dieu. Le genitif rattache le chemin a Dieu — c'est Son chemin, pas n'importe quel chemin. La distinction avec « voyageur » est que le mot est ici le chemin lui-meme, pas celui qui le parcourt.",
              axe1_verset: "Le mot sabili qualifie les circonstances de la mort — « dans le chemin de Dieu ». Le champ lexical du verset (tues, chemin, Dieu, morts, vivants) montre que le chemin de Dieu est le contexte qui transforme la mort en vie. Ce n'est pas n'importe quelle mort — c'est la mort dans une cause specifique. Le chemin de Dieu est la condition qui change le statut des tues.",
              axe2_voisins: "Le verset 153 parlait de la patience comme soutien. Le verset 154 montre que la patience face a la mort dans le chemin de Dieu est soutenue par une verite : ils ne sont pas morts. Le verset 155 annoncera des epreuves dans les biens et les vies. Le chemin de Dieu est le cadre de ces epreuves et de ces sacrifices.",
              axe3_sourate: "L'expression « fi sabili Allahi » est une expression structurante de la sourate al-Baqarah. En 2:190, « combattez dans le chemin de Dieu ». En 2:195, « depensez dans le chemin de Dieu ». En 2:218, « ceux qui ont emigre et combattu dans le chemin de Dieu ». La sourate utilise cette expression pour designer toute action accomplie pour la cause de Dieu.",
              axe4_coherence: "La racine s-b-l apparait environ 176 fois dans le Coran. L'expression « fi sabili Allahi » apparait environ 69 fois. Elle couvre le combat, la depense, l'emigration, et tout sacrifice dans la cause de Dieu. Le chemin de Dieu est le cadre universel de la mission humaine — tout ce qui est fait dans ce chemin a une valeur superieure.",
              axe5_frequence: "Pour la mission du khalifa, le chemin de Dieu est la direction de la mission. Le khalifa est place sur terre pour suivre ce chemin — depenser, agir, et si necessaire sacrifier sa vie dans cette cause. Le chemin de Dieu n'est pas un chemin parmi d'autres mais le chemin principal qui donne sens a tous les autres."
            }
          }
        }
      },
      // llh pos=7
      {
        word_key: "llh", position: 7, sense_chosen: "Dieu",
        analysis_axes: {
          sense_chosen: "Dieu",
          concept_chosen: "Divinit\u00e9",
          concepts: {
            "Divinit\u00e9": {
              status: "retenu",
              senses: ["divinite", "dieu", "Dieu", "theologie"],
              proof_ctx: "Le nom Allahi est le nom propre de la divinite au genitif. Le Lane's donne : Dieu, l'Etre qui existe necessairement par Lui-meme. Ici Allah est le possesseur du chemin — « sabili Allahi » (le chemin de Dieu). Le genitif rattache le chemin a Dieu comme proprietaire et destination. Etre tue dans le chemin de Dieu c'est etre tue dans une cause qui appartient a Dieu et qui mene a Dieu.",
              axe1_verset: "Le nom Allahi qualifie le chemin — c'est le chemin de Dieu. Le champ lexical du verset (tues, chemin, Dieu, morts, vivants, percevoir) montre que Dieu est la cause pour laquelle on est tue et la source de la vie qui persiste apres la mort. Dieu est l'autorite qui declare que les tues ne sont pas morts mais vivants — cette declaration contredit les sens humains mais vient de Celui qui connait la realite.",
              axe2_voisins: "Le verset 153 disait « Dieu est avec les patients ». Le verset 154 montre que Dieu veille sur ceux qui sont tues dans Son chemin — ils sont vivants. Le verset 156 dira « nous sommes a Dieu et vers Lui nous retournons ». La sequence montre que Dieu est present a chaque etape — dans la patience, dans la mort, et dans le retour.",
              axe3_sourate: "Le nom Allah est le mot le plus frequent de la sourate al-Baqarah. Il structure chaque passage. En 2:154, Dieu est le proprietaire du chemin et le garant de la vie des tues. La sourate montre que tout vient de Dieu et retourne a Dieu — y compris la vie de ceux qui sont tues dans Son chemin.",
              axe4_coherence: "Le nom Allah apparait plus de 2600 fois dans le Coran. L'expression « sabili Allahi » lie le chemin a Dieu comme autorite supreme. En 3:169, « vivants aupres de leur Seigneur » precise que la vie des tues est une vie aupres de Dieu. Le Coran montre que mourir dans le chemin de Dieu rapproche de Dieu au lieu d'en eloigner.",
              axe5_frequence: "Pour la mission du khalifa, Dieu est le mandant de la mission et le proprietaire du chemin. Le khalifa qui meurt dans le chemin de Dieu ne perd pas sa mission — il l'accomplit pleinement. La vie aupres de Dieu est l'aboutissement de la mission, pas son echec."
            },
            "Adoration/Culte": {
              status: "nul",
              senses: ["adorer", "servir", "se consacrer au culte"],
              proof_ctx: "Le mot est le nom propre Allah au genitif dans l'expression « chemin de Dieu ». Le contexte est la propriete du chemin, pas un acte d'adoration."
            },
            "Confusion/Perplexit\u00e9": {
              status: "nul",
              senses: ["etre confus"],
              proof_ctx: "Le sens de confusion est hors sujet — le mot est le nom propre Allah designant la divinite unique."
            },
            "Asservissement": {
              status: "nul",
              senses: ["reduire en esclavage"],
              proof_ctx: "Le sens d'asservissement est hors sujet — le mot est le nom propre Allah dans un contexte de voie divine."
            }
          }
        }
      },
      // mwt pos=8
      {
        word_key: "mwt", position: 8, sense_chosen: "mort",
        analysis_axes: {
          sense_chosen: "mort",
          concept_chosen: "Mort/Cessation",
          concepts: {
            "Mort/Cessation": {
              status: "retenu",
              senses: ["mourir", "mort", "tuer", "mortel", "terre morte"],
              proof_ctx: "Le mot amwatun est un nom pluriel masculin indefini de la racine m-w-t. Le Lane's donne : morts, ceux qui ont cesse de vivre. Le pluriel amwat designe plusieurs personnes dans l'etat de mort. L'indefini (amwatun sans article) est utilise comme attribut — « ne dites pas d'eux : morts ». Le verset interdit de leur attribuer cet etat. La distinction avec « terre morte » (sens metaphorique) est claire : le contexte parle de personnes tuees, pas de sols steriles. Le mot porte le sens de cessation de vie — un etat permanent et irreversible dans la perception humaine.",
              axe1_verset: "Le mot amwatun est le qualificatif interdit — ne dites pas « morts ». Le champ lexical du verset oppose directement amwatun (morts) et ahya'un (vivants). Le verset nie l'etat de mort pour affirmer l'etat de vie. Cette opposition binaire est le coeur du message : la mort apparente n'est pas la realite. Les sens humains voient la mort mais la realite est la vie. Le verset corrige la perception par la revelation.",
              axe2_voisins: "Le verset 153 preparait a la patience face aux epreuves. Le verset 154 montre que la plus grande epreuve — la mort dans le chemin de Dieu — n'est pas ce qu'elle semble etre. Le verset 156 donnera la formule de patience face a la mort : « nous sommes a Dieu et vers Lui nous retournons ». La mort est integree dans un cycle qui commence et finit avec Dieu.",
              axe3_sourate: "La racine m-w-t apparait frequemment dans la sourate al-Baqarah. En 2:19, « la mort est dans leurs oreilles ». En 2:28, « comment pouvez-vous renier Dieu alors que vous etiez morts et Il vous a donne la vie ? ». En 2:56, « puis Nous vous avons ressuscites apres votre mort ». La sourate presente la mort comme un etat que Dieu peut inverser — Il donne la vie apres la mort.",
              axe4_coherence: "La racine m-w-t apparait environ 161 fois dans le Coran. Le theme de la mort qui n'est pas une mort reelle apparait aussi en 3:169 : « ne considere pas ceux qui ont ete tues dans le chemin de Dieu comme morts ». Le Coran distingue la mort physique (apparente) de la mort reelle (cessation de toute vie). Ceux qui sont tues dans le chemin de Dieu subissent la premiere mais pas la seconde.",
              axe5_frequence: "Pour la mission du khalifa, la mort dans le chemin de Dieu n'est pas la fin de la mission mais sa transformation. Le khalifa ne doit pas craindre la mort physique dans l'accomplissement de sa mission car cette mort conduit a une vie reelle. La peur de la mort est un obstacle a la mission — ce verset la dissipe."
            },
            "Sens isol\u00e9/Immobile": {
              status: "nul",
              senses: ["immobile"],
              proof_ctx: "Le sens d'immobilite est un sens concret lie a la racine. Le contexte parle de personnes tuees, pas d'objets immobiles."
            }
          }
        }
      },
      // hyy pos=9 (position dans segments = 10)
      {
        word_key: "hyy", position: 9, sense_chosen: "vivant",
        analysis_axes: {
          sense_chosen: "vivant",
          concept_chosen: "Vie/Vivant",
          concepts: {
            "Vie/Vivant": {
              status: "retenu",
              senses: ["vivre", "vie", "vivant", "donner la vie"],
              proof_ctx: "Le mot ahya'un est un nom pluriel masculin indefini de la racine h-y-y. Le Lane's donne : vivants, ceux qui possedent la vie. Le pluriel ahya' designe plusieurs personnes dans l'etat de vie. L'indefini (ahya'un sans article) est utilise comme attribut — « ils sont vivants ». La particule bal (au contraire) introduit cette affirmation en opposition directe avec « morts ». La vie ici est une vie reelle et active — pas une metaphore. La distinction avec « saluer » (nul) est claire : le contexte est l'etat de vie, pas un acte social.",
              axe1_verset: "Le mot ahya'un est la correction apportee par le verset — au lieu de « morts », la verite est « vivants ». Le champ lexical oppose directement la mort et la vie. La particule bal (au contraire, non) marque la rupture : ce que vous croyez est faux, la realite est l'inverse. Le verset nie puis affirme — ne dites pas morts, ils sont vivants. Cette structure rhethorique binaire force l'auditeur a abandonner une croyance pour en adopter une autre.",
              axe2_voisins: "Le verset 153 invoquait la patience. Le verset 154 donne une raison de patience : ceux qui meurent dans le chemin de Dieu sont vivants. Le verset 155 annoncera des epreuves futures. La vie des tues dans le chemin de Dieu est un motif de consolation et de force pour ceux qui restent — la patience est plus facile quand on sait que les defunts sont vivants.",
              axe3_sourate: "La racine h-y-y est une racine fondamentale de la sourate al-Baqarah. En 2:28, « vous etiez morts et Il vous a donne la vie, puis Il vous fera mourir, puis Il vous redonnera la vie ». En 2:73, « ainsi Dieu donne la vie aux morts ». La sourate insiste sur le pouvoir de Dieu de donner la vie — la vie n'est pas un attribut humain mais un don divin que Dieu peut accorder, retirer et redonner.",
              axe4_coherence: "La racine h-y-y apparait environ 184 fois dans le Coran. En 3:169, le verset parallele dit « vivants aupres de leur Seigneur, recevant leur subsistance ». En 36:26, un martyr entre au Paradis et dit « si seulement mon peuple savait ». Le Coran affirme que la vie des tues dans le chemin de Dieu est une vie reelle avec des attributs concrets — subsistance, joie, proximite divine.",
              axe5_frequence: "Pour la mission du khalifa, la vie est le but de la mission. Le khalifa est place sur terre pour promouvoir la vie — la vie physique, spirituelle et intellectuelle. Ceux qui sont tues dans le chemin de Dieu acceident a une vie superieure, ce qui montre que la mission du khalifa ne s'arrete pas a la mort physique mais se prolonge au-dela."
            },
            "Salutation/Pudeur": {
              status: "nul",
              senses: ["saluer", "pudeur"],
              proof_ctx: "Le sens de salutation est un acte social exterieur. Le contexte est l'etat de vie des tues dans le chemin de Dieu, pas un acte de salutation."
            }
          }
        }
      },
      // sher pos=11 (position dans segments = 13)
      {
        word_key: "sher", position: 11, sense_chosen: "percevoir",
        analysis_axes: {
          sense_chosen: "percevoir",
          concept_chosen: "Perception/Conscience",
          concepts: {
            "Perception/Conscience": {
              status: "retenu",
              senses: ["sentir", "savoir", "etre conscient de"],
              proof_ctx: "Le verbe tash'uruna est un inaccompli 2MP de la racine sh-'-r. Le Lane's donne : percevoir, sentir, etre conscient par les sens ou l'intuition. La perception est le premier contact entre l'etre et le monde — elle est directionnelle de l'exterieur vers l'interieur. Le verbe est precede de la negation la (la tash'uruna = vous ne percevez pas). L'inaccompli avec la negation indique un etat permanent — vous n'avez pas et n'aurez pas cette perception. Le choix de sh-'-r (percevoir par les sens) plutot que '-l-m (savoir par la raison) est delibere : la vie des tues echappe aux sens humains, pas necessairement a la raison.",
              axe1_verset: "Le verbe tash'uruna ferme le verset avec une explication : « mais vous ne percevez pas ». Le champ lexical du verset (dire, tuer, chemin, Dieu, morts, vivants, percevoir) montre que le probleme n'est pas l'ignorance mais l'incapacite sensorielle. Les sens humains percoivent la mort physique — le corps sans vie. Mais la realite de la vie qui continue echappe a ces sens. Le verset ne reproche pas un manque de savoir mais un manque de perception — la realite est au-dela des sens.",
              axe2_voisins: "Le verset 153 parlait de patience et de priere comme soutiens. Le verset 154 montre que la perception humaine est limitee — ce qui semble une perte (la mort) est en realite un gain (la vie). Le verset 155 annoncera des epreuves qui necessitent cette comprehension. La limitation de la perception est ce qui rend la patience necessaire — si nous percevions la realite, la patience serait inutile.",
              axe3_sourate: "La racine sh-'-r apparait rarement dans la sourate al-Baqarah. En 2:9, « ils ne trompent qu'eux-memes mais ils ne le percoivent pas ». En 2:12, « ce sont eux les corrupteurs mais ils ne le percoivent pas ». La sourate utilise sh-'-r pour marquer une cecite sensorielle — les gens ne percoivent pas la realite de ce qu'ils font ou de ce qui se passe.",
              axe4_coherence: "La racine sh-'-r apparait environ 28 fois dans le Coran. Le Coran utilise cette racine pour marquer la limite de la perception humaine. En 7:95, « ils furent saisis soudainement sans qu'ils percoivent ». En 26:202, « il leur viendra soudainement sans qu'ils percoivent ». La perception humaine a des limites — ce qui est reel peut echapper aux sens. Le verset 2:154 place cette limitation dans le contexte de la vie apres la mort dans le chemin de Dieu.",
              axe5_frequence: "Pour la mission du khalifa, la perception limitee est un defi de la mission. Le khalifa doit accepter que certaines realites echappent a ses sens et faire confiance a la revelation. La foi complete les sens — ce que la perception ne saisit pas, la revelation le declare. Le khalifa doit agir selon la revelation meme quand ses sens semblent la contredire."
            },
            "Cheveux/Poils": {
              status: "nul",
              senses: ["cheveux", "poils"],
              proof_ctx: "Le sens de cheveux/poils est un sens physique de sh-'-r lie a ce qui pousse du corps. Le contexte est la perception sensorielle, pas l'anatomie."
            },
            "Po\u00e9sie/Expression": {
              status: "nul",
              senses: ["poesie", "poete"],
              proof_ctx: "Le sens de poesie est un sens derive de sh-'-r lie a la perception fine qui produit l'art. Le contexte est l'incapacite de percevoir une realite, pas la production poetique."
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

  const verseIds = [161];
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
  console.log('=== PIPELINE SOURATE 2 — VERSET 154 ===\n');
  await processVerse(154);
  await syncWordMeanings();
  console.log('\n=== PIPELINE V154 TERMINEE ===');
}

main().catch(e => console.error('FATAL:', e));
