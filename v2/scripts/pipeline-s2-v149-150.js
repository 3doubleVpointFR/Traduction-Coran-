const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// =====================================================
// PIPELINE SOURATE 2 — VERSETS 149-150
// V149: verse_id=156, analysis_id=514
// V150: verse_id=157, analysis_id=516
// =====================================================

const verseData = {
  149: {
    verse_id: 156,
    analysis_id: 514,
    translation_arab: "Et d'ou que tu sortes, tourne ton visage en direction du lieu de prosternation sacre. Et en verite c'est la verite de la part de ton Seigneur. Et Dieu n'est pas inattentif a ce que vous faites.",
    full_translation: "Et d'ou que tu sortes, tourne ton visage vers la Mosquee sacree. Oui c'est bien la verite de la part de ton Seigneur. Et Allah n'est pas inattentif a ce que vous faites.",
    translation_explanation: `§DEMARCHE§
Le verset 149 repete l'injonction du verset 144 avec un ajout emphatique. Le mot **haythu** est un nom de lieu invariable de la racine h-y-th. Le Lane's donne : ou, la ou, partout ou. C'est un adverbe de lieu indefini — il couvre toute localisation possible sans restriction. Combine avec **min** (de), l'expression « min haythu » signifie « d'ou que ». Le verbe **kharajta** est un accompli 2MS de la forme I de la racine kh-r-j. Le Lane's donne : sortir, emerger, quitter un lieu. L'accompli dans une proposition conditionnelle generalisee (min haythu kharajta) marque une condition indefinie — chaque fois que tu sors, quelle que soit ta sortie. Le fa consecutif introduit l'imperatif **walli** — un imperatif 2MS de la forme II de la racine w-l-y. Le Lane's donne pour la forme II : tourner, diriger vers. La forme II est causative — faire se tourner. L'imperatif marque l'ordre divin direct. Le nom **wajhaka** est un nom masculin singulier accusatif de la racine w-j-h avec pronom suffixe 2MS (ka). Le Lane's donne : visage, face, direction, cote vers lequel on se dirige. Le visage est la partie du corps qui porte l'identite et la direction du regard. Tourner le visage c'est orienter toute sa personne. Le nom **shatra** est un nom masculin singulier accusatif de la racine sh-t-r. Le Lane's donne : direction, cote, moitie. Le sens de direction est retenu car shatra est ici un complement de direction — « en direction de ». Le nom **al-masjidi** est un nom masculin singulier defini genitif de la racine s-j-d. Le Lane's donne : lieu de prosternation, lieu ou l'on se prosterne. Le prefixe « ma- » designe le lieu de l'action. L'article defini marque qu'il s'agit du lieu de prosternation par excellence. Le nom **al-harami** est un adjectif masculin singulier defini genitif de la racine h-r-m. Le Lane's donne : sacre, interdit, inviolable. L'adjectif qualifie le lieu de prosternation — c'est le lieu de prosternation sacre, celui dont l'acces est protege par une interdiction de violation. La particule emphatique **innahu** (en verite il/cela) introduit une affirmation forte. Le lam emphatique **la** renforce encore — « c'est vraiment, certainement ». Le nom **al-haqqu** est un nom masculin singulier defini nominatif de la racine h-q-q. Le Lane's donne : verite, realite, ce qui est conforme a la realite. L'article defini et le nominatif montrent que c'est LE vrai — la verite absolue. Le nom **rabbika** est un nom masculin singulier genitif de la racine r-b-b avec pronom suffixe 2MS (ka). Le Lane's donne : seigneur, maitre, celui qui eleve et entretient. L'expression « min rabbika » (de la part de ton Seigneur) rattache la verite a sa source divine — ce changement de direction est une verite qui vient du Seigneur. Le nom **Allahu** est le nom propre de la divinite au nominatif. Le Lane's donne : Dieu, la divinite unique. Le nom **bighāfilin** est un participe actif masculin singulier indefini de la racine gh-f-l avec preposition bi. Le Lane's donne : etre inattentif, negliger, etre insouciant. La construction « ma Allahu bighāfilin » avec la negation ma est une construction de negation renforcee — Dieu n'est absolument pas inattentif. Le nom **'amma** est la contraction de la preposition 'an (de, au sujet de) et du pronom relatif ma (ce que). Le verbe **ta'maluna** est un inaccompli 2MP de la forme I de la racine '-m-l. Le Lane's donne : travailler, agir, faire. L'inaccompli marque que les actes sont en cours et continus.

§JUSTIFICATION§
**ou** — Le sens retenu est « ou, la ou ». Le mot haythu est un adverbe de lieu indefini. « D'ou que » rend la generalisation spatiale totale. L'alternative « de quelque facon » est ecartee car le contexte est spatial (sortir d'un lieu), pas modal.

**tu sortes** — Le sens retenu est « sortir ». Le verbe kharajta decrit la sortie d'un lieu. L'alternative « faire sortir » est ecartee car le verbe est a la forme I active — le sujet sort lui-meme.

**tourne** — Le sens retenu est « tourner, diriger vers ». Le verbe walli est un imperatif de la forme II. L'alternative « proteger » (sens de wali) est ecartee car la forme II de w-l-y dans ce contexte syntaxique (avec wajhaka comme complement d'objet) signifie tourner, pas proteger.

**ton visage** — Le sens retenu est « visage ». Le mot wajhaka designe la face. L'alternative « direction » est ecartee car le pronom possessif « ka » (ton) montre qu'il s'agit du visage physique — on ne dit pas « tourne ta direction » en francais courant.

**en direction de** — Le sens retenu est « direction, cote ». Le mot shatra designe ici la direction. L'alternative « moitie » est ecartee car le contexte est directionnel, pas fractionnaire.

**le lieu de prosternation** — Le sens retenu est « se prosterner ». Le mot al-masjid est le lieu ou l'on se prosterne. L'alternative « obeir » est ecartee car le mot est un nom de lieu (ma-sjid), pas un verbe.

**sacre** — Le sens retenu est « interdit, sacre ». Le mot al-haram qualifie le lieu de prosternation comme sacre et inviolable. L'alternative « priver » est ecartee car le mot est ici un adjectif qualifiant un lieu, pas un verbe.

**la verite** — Le sens retenu est « verite, realite ». Le mot al-haqq designe ce qui est conforme a la realite. L'alternative « droit » est ecartee car le contexte est la veracite de l'injonction divine, pas un droit legal.

**ton Seigneur** — Le sens retenu est « seigneur ». Le mot rabbika designe celui qui eleve et entretient. L'alternative « maitre » est ecartee car elle evoque la domination en francais courant.

**Dieu** — Le sens retenu est « Dieu ». Le nom Allah est le nom propre de la divinite unique.

**inattentif** — Le sens retenu est « etre inattentif ». Le mot ghāfilin designe celui qui neglige. L'alternative « pardonner » est ecartee car le participe actif ghāfil vient du sens de negligence, pas du pardon (qui est ghafir/ghafur de la racine gh-f-r).

**ce que** — Le sens retenu est « ce que ». Le mot 'amma est une contraction preposition+pronom. Les sens de la racine '-m-m (generalite, oncle) sont hors sujet car le mot est ici une contraction grammaticale.

**vous faites** — Le sens retenu est « agir ». Le verbe ta'maluna designe l'action continue. L'alternative « gouverner » est ecartee car le contexte est les actes des hommes, pas le gouvernement.

§CRITIQUE§
Les traductions courantes donnent sensiblement le meme sens pour ce verset. La difference principale est que nous traduisons al-masjid par « lieu de prosternation » plutot que « Mosquee » car le mot arabe masjid designe etymologiquement le lieu ou l'on se prosterne, pas un batiment religieux au sens moderne. Le sens de « sacre » pour al-haram est unanime. La formule de cloture « Dieu n'est pas inattentif a ce que vous faites » est un refrain recurrent dans la sourate et sa traduction ne fait pas debat.`,
    segments: [
      { fr: "et", phon: "wa", arabic: "\u0648\u064E", is_particle: true, position: 0 },
      { fr: "de", phon: "min", arabic: "\u0645\u0650\u0646\u0652", is_particle: true, position: 1 },
      { fr: "ou", pos: "nom", phon: "\u1e25aythu", arabic: "\u062D\u064E\u064A\u0652\u062B\u064F", word_key: "hyth", is_particle: false, sense_retenu: "ou", position: 2 },
      { fr: "tu sortes", pos: "verbe", phon: "kharajta", arabic: "\u062E\u064E\u0631\u064E\u062C\u0652\u062A\u064E", word_key: "xrj", is_particle: false, sense_retenu: "sortir", position: 3 },
      { fr: "donc", phon: "fa", arabic: "\u0641\u064E", is_particle: true, position: 4 },
      { fr: "tourne", pos: "verbe", phon: "walli", arabic: "\u0648\u064E\u0644\u0650\u0651", word_key: "wly", is_particle: false, sense_retenu: "tourner", position: 5 },
      { fr: "ton visage", pos: "nom", phon: "wajhaka", arabic: "\u0648\u064E\u062C\u0652\u0647\u064E\u0643\u064E", word_key: "wjh", is_particle: false, sense_retenu: "visage", position: 6 },
      { fr: "en direction de", pos: "nom", phon: "sha\u1e6dra", arabic: "\u0634\u064E\u0637\u0652\u0631\u064E", word_key: "shtr", is_particle: false, sense_retenu: "direction", position: 7 },
      { fr: "le lieu de prosternation", pos: "nom", phon: "al-masjidi", arabic: "\u0671\u0644\u0652\u0645\u064E\u0633\u0652\u062C\u0650\u062F\u0650", word_key: "sjd", is_particle: false, sense_retenu: "se prosterner", position: 8 },
      { fr: "sacre", pos: "adjectif", phon: "al-\u1e25ar\u0101mi", arabic: "\u0671\u0644\u0652\u062D\u064E\u0631\u064E\u0627\u0645\u0650", word_key: "hrm", is_particle: false, sense_retenu: "sacre", position: 9 },
      { fr: "et", phon: "wa", arabic: "\u0648\u064E", is_particle: true, position: 10 },
      { fr: "en verite il", phon: "innahu", arabic: "\u0625\u0650\u0646\u0651\u064E\u0647\u064F\u06E5", is_particle: true, position: 11 },
      { fr: "vraiment", phon: "la", arabic: "\u0644\u064E", is_particle: true, position: 12 },
      { fr: "la verite", pos: "nom", phon: "al-\u1e25aqq", arabic: "\u0671\u0644\u0652\u062D\u064E\u0642\u0651\u064F", word_key: "hqq", is_particle: false, sense_retenu: "verite", position: 13 },
      { fr: "de", phon: "min", arabic: "\u0645\u0650\u0646\u0652", is_particle: true, position: 14 },
      { fr: "ton Seigneur", pos: "nom", phon: "rabbika", arabic: "\u0631\u064E\u0651\u0628\u0650\u0651\u0643\u064E", word_key: "rbb", is_particle: false, sense_retenu: "seigneur", position: 15 },
      { fr: "et", phon: "wa", arabic: "\u0648\u064E", is_particle: true, position: 16 },
      { fr: "ne... pas / ce que", phon: "m\u0101", arabic: "\u0645\u064E\u0627", is_particle: true, position: 17 },
      { fr: "Dieu", pos: "nom", phon: "all\u0101hu", arabic: "\u0671\u0644\u0644\u0651\u064E\u0647\u064F", word_key: "alh", is_particle: false, sense_retenu: "Dieu", position: 18 },
      { fr: "inattentif", pos: "adjectif", phon: "bi-gh\u0101filin", arabic: "\u0628\u0650\u063A\u064E\u0640\u0670\u0641\u0650\u0644\u064D", word_key: "ghf", is_particle: false, sense_retenu: "inattentif", position: 19 },
      { fr: "de ce que", pos: "nom", phon: "\u02BFamm\u0101", arabic: "\u0639\u064E\u0645\u0651\u064E\u0627", word_key: "emm", is_particle: false, sense_retenu: "ce que", position: 20 },
      { fr: "vous faites", pos: "verbe", phon: "ta\u02BFmal\u016Bna", arabic: "\u062A\u064E\u0639\u0652\u0645\u064E\u0644\u064F\u0648\u0646\u064E", word_key: "eml", is_particle: false, sense_retenu: "agir", position: 21 }
    ],
    words: [
      // hyth pos=2
      {
        word_key: "hyth", position: 2, sense_chosen: "ou",
        analysis_axes: {
          sense_chosen: "ou",
          concept_chosen: "Lieu/Espace",
          concepts: {
            "Lieu/Espace": {
              status: "nul",
              senses: ["ou", "la ou", "partout ou"],
              proof_ctx: "Le mot haythu est un adverbe de lieu invariable de la racine h-y-th. Le Lane's donne : ou, la ou, partout ou. C'est un mot de lieu indefini qui couvre toute localisation sans restriction. Ici « min haythu kharajta » signifie « d'ou que tu sortes ». Ce mot est grammaticalement invariable et fonctionne comme une particule de lieu. Les concepts dans word_meanings sont tous nuls car ce mot ne porte pas de sens conceptuel propre — il est un outil grammatical de generalisation spatiale."
            },
            "Mani\u00e8re": {
              status: "nul",
              senses: ["de quelque facon"],
              proof_ctx: "Le sens de maniere est un usage theorique de haythu. Mais le contexte est spatial — il s'agit de sortir d'un lieu, pas d'agir d'une certaine facon."
            }
          }
        }
      },
      // xrj pos=3
      {
        word_key: "xrj", position: 3, sense_chosen: "sortir",
        analysis_axes: {
          sense_chosen: "sortir",
          concept_chosen: "Sortie/\u00c9mergence",
          concepts: {
            "Sortie/\u00c9mergence": {
              status: "retenu",
              senses: ["sortir", "faire sortir", "expulser", "emerger", "produire"],
              proof_ctx: "Le verbe kharajta est un accompli 2MS de la forme I de la racine kh-r-j. Le Lane's donne : sortir, emerger, quitter un lieu, passer de l'interieur a l'exterieur. La sortie est un mouvement de transition — on quitte un espace pour entrer dans un autre. L'accompli dans la construction « min haythu kharajta » cree une condition generalisee : chaque fois que tu sors. Le 2MS s'adresse directement au Prophete. Cette racine porte un sens clair et le contexte est sans ambiguite — il s'agit de la sortie physique d'un lieu.",
              axe1_verset: "Le verbe kharajta ouvre la condition du verset — « d'ou que tu sortes ». La sortie est le declencheur de l'injonction : des que tu sors d'un lieu quelconque, tourne ton visage vers le lieu de prosternation sacre. Le champ lexical du verset (sortir, tourner, visage, direction, lieu de prosternation) tourne autour du mouvement et de l'orientation. La sortie cree le besoin d'orientation — quitter un lieu c'est perdre son ancrage et devoir se repositionner.",
              axe2_voisins: "Le verset 144 contenait deja l'injonction de tourner le visage. Le verset 148 parlait de chaque direction. Le verset 149 reprend l'injonction avec la meme ouverture « d'ou que tu sortes » — la repetition insiste sur l'universalite de l'obligation. Le verset 150 reprendra encore la meme formule puis l'elargira a la communaute entiere.",
              axe3_sourate: "La racine kh-r-j apparait dans la sourate al-Baqarah dans des contextes varies. En 2:167, « si seulement nous pouvions sortir ». En 2:217, « en faire sortir ses habitants ». En 2:243, « ceux qui sortirent de leurs demeures par milliers ». La sortie est un theme recurrent de la sourate — elle marque des transitions decisives. Ici la sortie est quotidienne et banale, mais l'orientation qui doit suivre est sacree.",
              axe4_coherence: "La racine kh-r-j apparait environ 182 fois dans le Coran. La sortie est un mouvement fondamental dans la vision coranique — sortir d'un etat, d'un lieu, d'une condition. En 65:1, « ne les faites pas sortir de leurs maisons ». La sortie implique toujours une transition et un repositionnement. Dans les versets de la qibla, la sortie est le moment ou l'orientation doit etre consciente.",
              axe5_frequence: "Pour la mission du khalifa, la sortie est le moment de la mise en action. Sortir de chez soi c'est entrer dans le monde de la mission. Le khalifa doit, des sa sortie, s'orienter vers sa reference — le lieu de prosternation sacre. La sortie quotidienne devient un acte de renouvellement de l'orientation."
            },
            "Tribut/Revenu": {
              status: "nul",
              senses: ["impot", "revenu"],
              proof_ctx: "Le sens de tribut est un usage derive de kh-r-j — ce qui sort comme contribution. Le contexte est la sortie physique d'un lieu, pas la fiscalite."
            }
          }
        }
      },
      // wly pos=5
      {
        word_key: "wly", position: 5, sense_chosen: "tourner",
        analysis_axes: {
          sense_chosen: "tourner",
          concept_chosen: "Proximit\u00e9/Protection",
          concepts: {
            "Proximit\u00e9/Protection": {
              status: "retenu",
              senses: ["proche", "ami", "protecteur", "allie"],
              proof_ctx: "Le verbe walli est un imperatif 2MS de la forme II de la racine w-l-y. Le Lane's donne pour la forme II : tourner vers, faire se tourner, confier a. La racine w-l-y porte fondamentalement le sens de proximite — etre proche de, etre adjacent a. La forme II (fa''ala) intensifie et cause cette proximite : tourner quelque chose vers, rapprocher. Le sens retenu « tourner » est le sens contextuel immediat : tourner le visage vers le lieu de prosternation sacre. Le sens de protection et d'alliance est le sens fondamental de la racine qui sous-tend l'acte de tourner — se tourner vers c'est se rapprocher de, chercher la proximite.",
              axe1_verset: "Le verbe walli est l'injonction centrale du verset — l'ordre divin de tourner le visage. La structure syntaxique est : condition (d'ou que tu sortes) → ordre (tourne ton visage) → direction (vers le lieu de prosternation sacre). Tourner le visage est l'acte d'orientation delibere. Le champ lexical (sortir, tourner, visage, direction, lieu de prosternation) montre que le verset est entierement consacre a l'orientation physique comme acte de soumission a l'ordre divin.",
              axe2_voisins: "Le verset 144 utilisait le meme verbe walli dans la meme construction : « tourne ton visage ». Le verset 150 reprendra encore ce verbe au pluriel (wallu) pour l'etendre a toute la communaute. La repetition de walli dans les versets 144, 149, 150 montre l'insistance sur cet acte de tourner — ce n'est pas un choix mais un ordre repete trois fois.",
              axe3_sourate: "La racine w-l-y est une des racines structurantes de la sourate al-Baqarah. En 2:107, « vous n'avez en dehors de Dieu ni wali ni nasr ». En 2:120, « Dieu est votre wali ». La proximite et la protection sont des themes centraux. En 2:144 et 149, la forme II (tourner) utilise la meme racine pour l'orientation — tourner vers le lieu sacre c'est chercher la proximite de Dieu.",
              axe4_coherence: "La racine w-l-y apparait environ 233 fois dans le Coran. Les sens oscillent entre proximite, protection, alliance et direction. L'usage en forme II pour « tourner le visage » est specifique aux versets de la qibla (2:144, 2:149, 2:150). Le lien entre tourner vers et etre proche de est fondamental — l'orientation physique est une forme de rapprochement.",
              axe5_frequence: "Pour la mission du khalifa, tourner le visage est l'acte fondateur de l'orientation. Le khalifa doit constamment se repositionner vers sa reference. Se tourner vers le lieu de prosternation sacre n'est pas un geste mecanique — c'est un renouvellement de la proximite avec Dieu a travers l'orientation physique."
            },
            "Autorit\u00e9": {
              status: "nul",
              senses: ["gouverner"],
              proof_ctx: "Le sens de gouverner est un usage derive de w-l-y. Le contexte est l'orientation physique — tourner le visage vers un lieu precis, pas un acte de gouvernement."
            }
          }
        }
      },
      // wjh pos=6
      {
        word_key: "wjh", position: 6, sense_chosen: "visage",
        analysis_axes: {
          sense_chosen: "visage",
          concept_chosen: "Visage/Direction",
          concepts: {
            "Visage/Direction": {
              status: "retenu",
              senses: ["visage", "face", "direction", "se diriger vers"],
              proof_ctx: "Le nom wajhaka est un nom masculin singulier accusatif de la racine w-j-h avec pronom suffixe 2MS (ka). Le Lane's donne : visage, face, partie anterieure, direction. Le visage est la partie du corps qui porte l'identite et la direction du regard — c'est ce par quoi on fait face au monde. Le pronom « ka » (ton) personnalise l'injonction — c'est TON visage que tu dois tourner. L'accusatif marque le complement d'objet direct du verbe walli (tourne TON visage). Le sens de visage et de direction sont lies — tourner son visage c'est changer sa direction.",
              axe1_verset: "Le mot wajhaka est l'objet de l'injonction — c'est le visage qui doit etre tourne. Le verset construit un mouvement : sortir → tourner le visage → vers le lieu sacre. Le visage est le support de l'orientation — c'est par le visage qu'on fait face a une direction. Le champ lexical (sortir, tourner, visage, direction) montre que le verset est structure autour du corps comme instrument d'orientation. Le visage n'est pas seulement physique — il represente l'attention, l'intention, la direction de la personne entiere.",
              axe2_voisins: "Le verset 144 utilisait la meme expression « wajhaka » (ton visage). Le verset 115 disait « ou que vous vous tourniez, la est le visage de Dieu ». Le verset 148 parlait de la direction (wijha) de chacun. Le visage revient comme motif dans tout le passage de la qibla — il est le symbole de l'orientation.",
              axe3_sourate: "La racine w-j-h est centrale dans la sourate al-Baqarah. En 2:112, « celui qui soumet son visage a Dieu ». En 2:115, « le visage de Dieu ». En 2:144, « tourne ton visage ». Le visage dans la sourate oscille entre le sens physique (tourner le visage) et le sens figuratif (le visage de Dieu). Le verset 149 utilise le sens physique — tourner le visage comme geste concret d'orientation.",
              axe4_coherence: "La racine w-j-h apparait environ 73 fois dans le Coran. Le visage est un motif recurrent — en 6:79, « je tourne mon visage vers Celui qui a cree les cieux et la terre ». En 30:30, « dirige ton visage vers la religion ». Le Coran utilise le visage comme symbole de l'orientation totale de la personne vers Dieu.",
              axe5_frequence: "Pour la mission du khalifa, le visage est le symbole de l'orientation de la mission. Tourner le visage vers le lieu sacre c'est orienter toute sa personne — corps, esprit, intention — vers la reference divine. Le khalifa ne peut accomplir sa mission en tournant le dos a sa reference."
            }
          }
        }
      },
      // shtr pos=7
      {
        word_key: "shtr", position: 7, sense_chosen: "direction",
        analysis_axes: {
          sense_chosen: "direction",
          concept_chosen: "Direction/Orientation",
          concepts: {
            "Direction/Orientation": {
              status: "nul",
              senses: ["se diriger vers", "cote"],
              proof_ctx: "Le nom shatra est un nom masculin singulier accusatif de la racine sh-t-r. Le Lane's donne : cote, direction, moitie. Le sens de direction est retenu car shatra fonctionne ici comme un complement directionnel — « en direction de ». L'accusatif adverbial confirme l'usage directionnel. Ce mot n'apparait dans le Coran que dans les versets de la qibla (2:144, 2:149, 2:150) toujours dans le meme syntagme « shatra al-masjidi al-harami ». Les concepts dans word_meanings pour cette racine sont tous nuls."
            },
            "Division/Moiti\u00e9": {
              status: "nul",
              senses: ["moitie", "couper en deux"],
              proof_ctx: "Le sens de moitie est un sens premier de sh-t-r — couper en deux parties. Le contexte est directionnel, pas fractionnaire. On tourne le visage EN DIRECTION DE, pas vers la moitie de quelque chose."
            }
          }
        }
      },
      // sjd pos=8
      {
        word_key: "sjd", position: 8, sense_chosen: "se prosterner",
        analysis_axes: {
          sense_chosen: "se prosterner",
          concept_chosen: "Prosternation/Adoration",
          concepts: {
            "Prosternation/Adoration": {
              status: "retenu",
              senses: ["se prosterner", "s'incliner", "adorer", "obeir"],
              proof_ctx: "Le nom al-masjidi est un nom de lieu masculin singulier defini genitif de la racine s-j-d. Le Lane's donne : se prosterner, poser le front au sol en signe de soumission. Le prefixe « ma- » forme un nom de lieu — al-masjid est le lieu ou l'on se prosterne. L'article defini (al-) marque qu'il s'agit du lieu de prosternation par excellence — celui de la Mecque. Le mot masjid porte en lui l'acte de prosternation — le lieu est defini par l'action qui s'y accomplit.",
              axe1_verset: "Le mot al-masjidi est la destination de l'orientation — c'est vers ce lieu que le visage doit se tourner. Le verset construit un mouvement directionnel : sortir → tourner → vers le lieu de prosternation sacre. Le lieu de prosternation est le point de convergence de tous les mouvements d'orientation. Le champ lexical (sortir, tourner, visage, direction, lieu de prosternation, sacre) forme une chaine qui part du sujet et aboutit au lieu sacre.",
              axe2_voisins: "Le verset 144 utilisait deja « al-masjid al-haram ». Le verset 142 evoquait la qibla. Le verset 125 parlait de la Maison sacree. Le lieu de prosternation sacre est le point focal de tout le passage 2:142-150. Les versets 144, 149, 150 repetent trois fois la meme injonction de se tourner vers ce lieu — chaque repetition ajoute un destinataire ou un contexte.",
              axe3_sourate: "La racine s-j-d est structurante dans la sourate al-Baqarah. En 2:34, l'ordre de se prosterner devant Adam. En 2:58, « entrez par la porte en vous prosternant ». En 2:125, « purifiez Ma Maison pour ceux qui tournent autour et ceux qui se prosternent ». La prosternation est un acte fondateur dans la sourate — elle marque la soumission et l'obeissance.",
              axe4_coherence: "La racine s-j-d apparait environ 92 fois dans le Coran. Le nom masjid (lieu de prosternation) apparait 28 fois. En 9:18, « les mosquees de Dieu ne sont frequentees que par ceux qui croient ». En 17:1, « du lieu de prosternation sacre au lieu de prosternation eloigne ». Le lieu de prosternation est un concept central — c'est le lieu ou la soumission a Dieu prend forme physique.",
              axe5_frequence: "Pour la mission du khalifa, le lieu de prosternation est le point de reference physique de la mission. Se tourner vers ce lieu c'est ancrer la mission dans un repere concret. La prosternation est l'acte de soumission par excellence — le khalifa accomplit sa mission en se soumettant a Dieu, et le lieu de prosternation est le symbole physique de cette soumission."
            },
            "Lieu de prosternation": {
              status: "nul",
              senses: ["mosquee"],
              proof_ctx: "Le sens de « mosquee » comme batiment religieux est un sens derive et moderne. Le mot arabe masjid designe etymologiquement le lieu ou l'on se prosterne — le sens retenu englobe ce sens derive."
            }
          }
        }
      },
      // hrm pos=9
      {
        word_key: "hrm", position: 9, sense_chosen: "sacre",
        analysis_axes: {
          sense_chosen: "sacre",
          concept_chosen: "Interdiction/Sacr\u00e9",
          concepts: {
            "Interdiction/Sacr\u00e9": {
              status: "retenu",
              senses: ["interdire", "sacre", "sanctuaire", "illicite", "priver", "respecter"],
              proof_ctx: "Le mot al-harami est un adjectif masculin singulier defini genitif de la racine h-r-m. Le Lane's donne : sacre, interdit, inviolable, dont l'acces est protege par une interdiction. Le sacre et l'interdit sont les deux faces d'un meme concept — ce qui est sacre est protege par des interdits. L'article defini et le genitif montrent que c'est l'adjectif qualifiant le lieu de prosternation — le lieu de prosternation sacre, celui qui est protege par des interdictions de violation.",
              axe1_verset: "Le mot al-harami qualifie le lieu de prosternation — c'est le lieu de prosternation SACRE. L'adjectif ajoute une dimension de sacralite au lieu — ce n'est pas n'importe quel lieu de prosternation, c'est celui qui est protege par l'interdit divin. Le champ lexical (tourner, visage, direction, lieu de prosternation, sacre, verite, Seigneur) montre que le verset lie l'orientation physique a une realite sacree. Se tourner vers le sacre c'est reconnaitre l'autorite de l'interdit divin.",
              axe2_voisins: "Le verset 144 utilisait la meme expression « al-masjid al-haram ». Le verset 148 rappelait que c'est la verite. Le verset 149 repete l'injonction avec l'ajout emphatique « c'est la verite de la part de ton Seigneur ». Le sacre du lieu de prosternation est un fait etabli dans tout le passage — les versets repetent cette sacralite pour l'ancrer.",
              axe3_sourate: "La racine h-r-m est frequente dans la sourate al-Baqarah. En 2:194, « le mois sacre pour le mois sacre ». En 2:196, le pelerinage. En 2:217, « combattre pendant le mois sacre ». Le sacre dans la sourate couvre les lieux (le lieu de prosternation sacre), les temps (les mois sacres) et les actes (ce qui est interdit). Le lieu de prosternation sacre est le lieu sacre par excellence.",
              axe4_coherence: "La racine h-r-m apparait environ 83 fois dans le Coran. L'expression « al-masjid al-haram » apparait 15 fois. En 5:2, « ne profanez pas les rites sacres de Dieu ». En 17:1, « du lieu de prosternation sacre au lieu de prosternation eloigne ». Le lieu de prosternation sacre est un repere geographique et spirituel central dans la vision coranique.",
              axe5_frequence: "Pour la mission du khalifa, le sacre est le cadre de la mission. Ce qui est sacre est protege par l'interdit — le khalifa doit respecter ces limites. Se tourner vers le lieu sacre c'est accepter les limites que Dieu a posees. La mission du khalifa s'accomplit dans le respect du sacre."
            }
          }
        }
      },
      // hqq pos=13
      {
        word_key: "hqq", position: 13, sense_chosen: "verite",
        analysis_axes: {
          sense_chosen: "verite",
          concept_chosen: "V\u00e9rit\u00e9/R\u00e9alit\u00e9",
          concepts: {
            "V\u00e9rit\u00e9/R\u00e9alit\u00e9": {
              status: "retenu",
              senses: ["etre vrai", "verite", "realite", "droit"],
              proof_ctx: "Le nom al-haqqu est un nom masculin singulier defini nominatif de la racine h-q-q. Le Lane's donne : verite, realite, ce qui est conforme a la realite, ce qui est etabli et certain. L'article defini (al-) marque la verite absolue — c'est LA verite, pas une verite parmi d'autres. Le nominatif montre que c'est le predicat de la phrase nominale introduite par inna. La construction « innahu la-l-haqqu » est triple emphatique : inna (en verite) + la (certes) + al-haqq (la verite definie). Cette triple emphase souligne que l'injonction de se tourner vers le lieu sacre est une verite incontestable.",
              axe1_verset: "Le mot al-haqq est le pivot de la deuxieme partie du verset — apres l'injonction (tourne ton visage), vient la justification (c'est la verite de la part de ton Seigneur). Le champ lexical (verite, Seigneur, Dieu, inattentif) montre que la deuxieme partie du verset passe de l'ordre a la validation. L'injonction n'est pas arbitraire — elle est fondee sur la verite divine. La triple emphase (innahu la-l-haqq) interdit tout doute.",
              axe2_voisins: "Le verset 144 disait « c'est la verite de la part de ton Seigneur ». Le verset 147 aussi : « la verite vient de ton Seigneur ». Le verset 149 reprend la meme formule. La repetition de « c'est la verite de la part de ton Seigneur » dans trois versets proches ancre cette affirmation comme un refrain de certitude dans le passage de la qibla.",
              axe3_sourate: "La racine h-q-q est frequente dans la sourate al-Baqarah. En 2:26, « ils savent que c'est la verite de la part de leur Seigneur ». En 2:42, « ne melez pas le vrai au faux ». En 2:119, « Nous t'avons envoye avec la verite ». La sourate oppose constamment le vrai et le faux — le haqq est le critere absolu.",
              axe4_coherence: "La racine h-q-q apparait environ 287 fois dans le Coran. Al-haqq est un des noms de Dieu — « Dieu est al-Haqq » (22:6). La verite dans le Coran n'est pas relative — elle est absolue et vient de Dieu. En 2:149, la verite est rattachee au Seigneur (min rabbika) comme source — la verite a une source divine.",
              axe5_frequence: "Pour la mission du khalifa, la verite est le fondement de la mission. L'injonction de se tourner vers le lieu sacre est une verite — pas une opinion, pas une tradition, mais une realite etablie par Dieu. Le khalifa accomplit sa mission en suivant la verite, pas les coutumes ou les preferences."
            },
            "Obligation/N\u00e9cessit\u00e9": {
              status: "nul",
              senses: ["devoir", "meriter", "etre obligatoire"],
              proof_ctx: "Le sens d'obligation est un sens derive de h-q-q. Le contexte est l'affirmation de verite (innahu la-l-haqq), pas une obligation legale."
            }
          }
        }
      },
      // rbb pos=15
      {
        word_key: "rbb", position: 15, sense_chosen: "seigneur",
        analysis_axes: {
          sense_chosen: "seigneur",
          concept_chosen: "Seigneurie/Autorit\u00e9 bienveillante",
          concepts: {
            "Seigneurie/Autorit\u00e9 bienveillante": {
              status: "retenu",
              senses: ["seigneur", "maitre", "proprietaire", "celui qui eleve", "celui qui entretient", "celui qui possede", "gouverner"],
              proof_ctx: "Le nom rabbika est un nom masculin singulier genitif de la racine r-b-b avec pronom suffixe 2MS (ka). Le Lane's donne : seigneur, maitre, celui qui eleve et entretient progressivement. Le rabb est celui qui prend en charge la croissance et l'entretien de ce qui est sous sa garde. Le pronom « ka » (ton) personnalise la relation — c'est TON Seigneur. L'expression « min rabbika » (de la part de ton Seigneur) rattache la verite a sa source — elle ne vient pas des hommes mais du Seigneur qui eleve et entretient.",
              axe1_verset: "Le mot rabbika rattache la verite a sa source divine — « la verite de la part de ton Seigneur ». Le Seigneur est la source de l'injonction et le garant de sa veracite. Le champ lexical (verite, Seigneur, Dieu) montre que l'autorite de l'injonction vient du plus haut. L'adresse personnelle (ton Seigneur, pas « le Seigneur ») cree un lien direct entre le Prophete et la source de l'ordre.",
              axe2_voisins: "Le verset 144 utilisait « min rabbika ». Le verset 147 aussi. Le verset 149 reprend la meme expression. La repetition de « de la part de ton Seigneur » dans ce passage montre que chaque injonction est directement rattachee a l'autorite divine. Le Seigneur n'est pas lointain — Il s'adresse directement au Prophete.",
              axe3_sourate: "La racine r-b-b est parmi les plus frequentes de la sourate al-Baqarah. En 2:5, « ceux qui suivent la guidance de leur Seigneur ». En 2:126, « Mon Seigneur, fais de cette cite un lieu sur ». La sourate utilise rabb pour designer la relation personnelle entre le croyant et Dieu — une relation d'education, d'entretien et d'autorite bienveillante.",
              axe4_coherence: "La racine r-b-b apparait environ 979 fois dans le Coran. C'est la racine la plus frequente apres Allah. Le mot rabb designe Dieu dans Sa relation d'elevateur et d'educateur. En 1:2, « Seigneur des mondes ». La seigneurie de Dieu est universelle mais aussi personnelle — « ton Seigneur » est une adresse intime.",
              axe5_frequence: "Pour la mission du khalifa, le Seigneur est le mandant de la mission. La verite vient de Lui — le khalifa n'invente pas sa mission, il la recoit de son Seigneur. La relation seigneuriale est une relation d'education et de responsabilite — le Seigneur eleve et le khalifa repond."
            },
            "Croissance/Augmentation": {
              status: "probable",
              senses: ["augmenter", "croitre", "faire grandir", "nourrir", "developper", "exces", "colline", "eminence"],
              proof_ctx: "Le sens de croissance est le sens premier de la racine r-b-b — faire grandir, augmenter. La distinction philosophique avec la seigneurie est que la croissance est l'acte physique (faire grandir une plante, un enfant), tandis que la seigneurie est l'autorite qui preside a cette croissance. Le mot rabbika est ici un titre (ton Seigneur), pas une description de croissance. Mais le sens de croissance sous-tend le titre — le Seigneur est celui qui fait croitre.",
              axe1_verset: "Le sens de croissance pourrait sous-tendre l'idee que le Seigneur fait croitre la communaute — mais le contexte immediat est l'autorite (la verite vient de ton Seigneur), pas la croissance biologique.",
              axe2_voisins: "Les versets voisins utilisent rabb comme titre d'autorite, pas comme reference a la croissance. Le contexte du passage de la qibla est l'obeissance a un ordre, pas la croissance.",
              axe3_sourate: "La sourate utilise rabb principalement comme titre divin d'autorite bienveillante. Le sens de croissance est sous-jacent mais pas dominant.",
              axe4_coherence: "Le Coran utilise rabb presque exclusivement comme titre divin. Le sens physique de croissance est rarement au premier plan quand le mot designe Dieu.",
              axe5_frequence: "Pour la mission du khalifa, la croissance est un objectif — le Seigneur fait croitre le khalifa pour qu'il accomplisse sa mission. Mais dans ce verset, c'est l'autorite du Seigneur qui est en jeu, pas la croissance."
            }
          }
        }
      },
      // alh pos=18
      {
        word_key: "alh", position: 18, sense_chosen: "Dieu",
        analysis_axes: {
          sense_chosen: "Dieu",
          concept_chosen: "Divinit\u00e9",
          concepts: {
            "Divinit\u00e9": {
              status: "retenu",
              senses: ["divinite (concept)", "Dieu", "theologie", "divinite", "exclamation divine", "oui certes"],
              proof_ctx: "Le nom Allahu est le nom propre de la divinite au nominatif. Le Lane's donne : Dieu, la divinite unique. Ici Allah est le sujet de la negation « ma Allahu bighāfilin » — Dieu n'est pas inattentif. Le nom est au nominatif car il est sujet de la phrase nominale nee par la negation ma. Le verset passe de « ton Seigneur » (rabbika, relation personnelle) a « Dieu » (Allah, nom propre universel) — la verite vient du Seigneur personnel, et la surveillance est exercee par Dieu le nom propre universel.",
              axe1_verset: "Le nom Allah cloture le verset en introduisant l'avertissement final. La structure du verset est : injonction (tourne) → validation (c'est la verite de ton Seigneur) → avertissement (Dieu n'est pas inattentif). Le passage de « ton Seigneur » a « Dieu » elargit le propos — la verite est personnelle (ton Seigneur) mais la surveillance est universelle (Dieu).",
              axe2_voisins: "Le verset 144 se terminait de maniere similaire. Le verset 140 aussi. La formule « Dieu n'est pas inattentif a ce que vous faites » est un refrain recurrent dans le passage. Le nom Allah revient comme une constante de surveillance dans chaque verset d'avertissement.",
              axe3_sourate: "Le nom Allah est le mot le plus frequent de la sourate al-Baqarah. Il structure chaque passage et chaque argument. En 2:149, il ferme le verset par un rappel de la surveillance divine. La sourate utilise Allah pour marquer les moments de rappel et d'avertissement.",
              axe4_coherence: "Le nom Allah apparait plus de 2600 fois dans le Coran. La formule « wa ma Allahu bighāfilin » (et Dieu n'est pas inattentif) est un refrain specifique — il rappelle que rien n'echappe a Dieu. Cette formule apparait en 2:74, 2:85, 2:140, 2:149, 3:99, 11:123 entre autres.",
              axe5_frequence: "Pour la mission du khalifa, Dieu est le superviseur permanent de la mission. La surveillance divine n'est pas une menace mais une garantie — chaque acte du khalifa est vu et juge. Cette conscience de la surveillance divine est le moteur de l'integrite dans la mission."
            }
          }
        }
      },
      // ghf pos=19
      {
        word_key: "ghf", position: 19, sense_chosen: "inattentif",
        analysis_axes: {
          sense_chosen: "inattentif",
          concept_chosen: "Pardon/Couverture",
          concepts: {
            "Pardon/Couverture": {
              status: "nul",
              senses: ["pardonner", "effacer", "couvrir"],
              proof_ctx: "Le mot bighāfilin est un participe actif masculin singulier indefini de la racine gh-f-l avec preposition bi. Le Lane's donne pour gh-f-l : etre inattentif, negliger, etre insouciant. ATTENTION : la racine gh-f-l (negligence) est distincte de la racine gh-f-r (pardon). Le participe ghāfil (inattentif) ne vient PAS de la meme racine que ghafūr (pardonneur). Le concept dans word_meanings est « Pardon/Couverture » car il couvre les deux racines, mais ici seul le sens de negligence est en jeu. Le contexte « ma Allahu bighāfilin » signifie « Dieu n'est pas inattentif » — une negation de la negligence, pas du pardon."
            },
            "Protection": {
              status: "nul",
              senses: ["casque"],
              proof_ctx: "Le sens de casque est un objet physique de protection. Le contexte est la negation de la negligence divine, pas un equipement."
            }
          }
        }
      },
      // emm pos=20
      {
        word_key: "emm", position: 20, sense_chosen: "ce que",
        analysis_axes: {
          sense_chosen: "ce que",
          concept_chosen: "G\u00e9n\u00e9ralit\u00e9/Parent\u00e9",
          concepts: {
            "G\u00e9n\u00e9ralit\u00e9/Parent\u00e9": {
              status: "nul",
              senses: ["etre general", "oncle paternel", "general"],
              proof_ctx: "Le mot 'amma est la contraction de la preposition 'an (de, au sujet de) et du pronom relatif ma (ce que). Le Lane's donne pour '-m-m : etre general, oncle paternel. Mais ici le mot n'est pas de la racine '-m-m — c'est une contraction preposition+pronom qui signifie « de ce que ». Le contexte est : « Dieu n'est pas inattentif de ce que ('amma) vous faites ». Le sens de generalite ou d'oncle paternel est hors sujet."
            }
          }
        }
      },
      // eml pos=21
      {
        word_key: "eml", position: 21, sense_chosen: "agir",
        analysis_axes: {
          sense_chosen: "agir",
          concept_chosen: "Action/Oeuvre",
          concepts: {
            "Action/Oeuvre": {
              status: "retenu",
              senses: ["travailler", "agir", "oeuvre", "acte", "ouvrier"],
              proof_ctx: "Le verbe ta'maluna est un inaccompli 2MP de la forme I de la racine '-m-l. Le Lane's donne : travailler, agir, faire une oeuvre. L'inaccompli indique que les actes sont en cours et continus — « ce que vous faites » designe les actions presentes et futures. Le 2MP (vous) elargit l'avertissement au-dela du Prophete seul — apres l'adresse au singulier (tourne TON visage), le verset passe au pluriel (ce que VOUS faites). Cet elargissement montre que la surveillance divine concerne toute la communaute.",
              axe1_verset: "Le verbe ta'maluna ferme le verset par un avertissement. La structure complete est : injonction au singulier (tourne ton visage) → validation (c'est la verite) → avertissement au pluriel (Dieu n'est pas inattentif a ce que vous faites). Le passage du singulier au pluriel est significatif — l'injonction est personnelle mais la surveillance est collective. Le champ lexical du verset se termine sur l'action — les actes sont le domaine ou Dieu surveille.",
              axe2_voisins: "Le verset 140 se terminait par la meme formule « wa ma Allahu bighāfilin 'amma ta'maluna ». Le verset 144 aussi contenait un avertissement similaire. La formule est un refrain qui ponctue le passage de la qibla. Chaque injonction d'orientation est suivie d'un rappel que les actes sont surveilles.",
              axe3_sourate: "La racine '-m-l est frequente dans la sourate al-Baqarah. En 2:139, « a nous nos oeuvres et a vous vos oeuvres ». En 2:134, la meme formule. La sourate insiste sur la responsabilite individuelle des actes — chacun porte ses propres oeuvres. Le refrain « ce que vous faites » rappelle cette responsabilite.",
              axe4_coherence: "La racine '-m-l apparait environ 360 fois dans le Coran. Le theme des oeuvres est central — en 99:7-8, « celui qui fait un atome de bien le verra, et celui qui fait un atome de mal le verra ». Le Coran affirme que chaque acte, si petit soit-il, est enregistre et sera evalue. Le refrain « ce que vous faites » est un rappel permanent de cette realite.",
              axe5_frequence: "Pour la mission du khalifa, les actes sont la substance de la mission. La mission ne se reduit pas a des intentions — elle se realise dans les actes. Dieu surveille les actes, pas seulement les intentions. Le khalifa est juge sur ce qu'il fait, pas sur ce qu'il pense faire."
            },
            "Gouverneur": {
              status: "nul",
              senses: ["gouverneur"],
              proof_ctx: "Le sens de gouverneur est un usage nominal derive de '-m-l. Le contexte est le verbe ta'maluna (vous faites/agissez), pas un titre de fonction."
            }
          }
        }
      }
    ]
  },

  150: {
    verse_id: 157,
    analysis_id: 516,
    translation_arab: "Et d'ou que tu sortes, tourne ton visage en direction du lieu de prosternation sacre. Et ou que vous soyez, tournez vos visages dans sa direction, pour que les gens n'aient pas d'argument contre vous, sauf ceux d'entre eux qui ont commis l'injustice. Ne les craignez donc pas mais craignez-Moi, et pour que Je paracheve Mon bienfait sur vous, et pour que vous soyez guides.",
    full_translation: "Et d'ou que tu sortes, tourne ton visage vers la Mosquee sacree. Et ou que vous soyez, tournez-y vos visages, afin que les gens n'aient pas d'argument contre vous, sauf ceux d'entre eux qui sont injustes. Ne les craignez donc pas, mais craignez-Moi, pour que Je paracheve Mon bienfait a votre egard, et que vous soyez bien guides!",
    translation_explanation: `§DEMARCHE§
Le verset 150 est le troisieme et dernier rappel de l'injonction de la qibla dans ce passage. La premiere partie (min haythu kharajta fawalli wajhaka shatra al-masjidi al-harami) est identique au verset 149 — meme formule, meme injonction. La nouveaute du verset 150 est double : d'abord l'extension de l'injonction a toute la communaute (wa haythu ma kuntum fawallu wujuhakum shatrahu), puis la justification par la suppression de l'argument (li-alla yakuna li-n-nasi 'alaykum hujjatun). Le mot **haythu** est a nouveau un adverbe de lieu de la racine h-y-th. Le Lane's donne : ou, la ou. Combine avec **ma** (quoi que), l'expression « haythu ma kuntum » signifie « ou que vous soyez ». Le verbe **kuntum** est un accompli 2MP de la racine k-w-n. Le Lane's donne : etre, exister. L'accompli dans une construction generalisee cree une condition indefinie — dans quelque lieu que vous soyez. Le verbe **fawallu** est un imperatif 2MP de la forme II de la racine w-l-y. Le Lane's donne : tourner, diriger vers. L'imperatif pluriel etend l'ordre a toute la communaute — ce n'est plus le Prophete seul, c'est « vous tous ». Le nom **wujuhakum** est un pluriel masculin accusatif de la racine w-j-h avec pronom suffixe 2MP (kum). Le Lane's donne : visages, faces. Le pluriel « vos visages » correspond au pluriel « vous » — chaque membre de la communaute doit tourner son propre visage. Le nom **shatrahu** est un nom masculin singulier accusatif de la racine sh-t-r avec pronom suffixe 3MS (hu). Le pronom « hu » renvoie au lieu de prosternation sacre mentionne plus haut — « dans sa direction ». Le verbe **yakuna** est un inaccompli 3MS subjonctif de la racine k-w-n. Le Lane's donne : etre. Le subjonctif est commande par la negation « alla » (pour que ne pas) — l'objectif est que l'argument n'existe pas. Le nom **hujjatun** est un nom feminin singulier indefini nominatif de la racine h-j-j. Le Lane's donne : argument, preuve, justification utilisee dans un debat. L'indefini marque qu'aucun argument, quel qu'il soit, ne doit subsister. Le nom relatif **alladhina** (ceux qui) introduit une exception. Le verbe **zalamu** est un accompli 3MP de la racine z-l-m. Le Lane's donne : commettre l'injustice, opprimer, mettre une chose a une place qui n'est pas la sienne. Le verbe **takhshawhum** est un inaccompli 2MP de la racine kh-sh-y avec pronom suffixe 3MP. Le Lane's donne : craindre, avoir peur de, redouter. La negation « la takhshawhum » interdit la crainte des hommes. Le verbe **ikhshawni** est un imperatif 2MP de la racine kh-sh-y avec pronom suffixe 1S (ni). L'opposition « ne les craignez pas / craignez-Moi » est directe — la crainte doit etre reorientee des hommes vers Dieu. Le verbe **li-utimma** est un inaccompli 1S subjonctif de la forme IV de la racine a-t-m avec preposition li. Le Lane's donne : achever, completer, parfaire. La forme IV est causative — faire arriver a completion. Le subjonctif avec li exprime le but : « pour que Je paracheve ». Le nom **ni'mati** est un nom feminin singulier accusatif de la racine n-'-m avec pronom suffixe 1S (i). Le Lane's donne : bienfait, faveur, don gracieux. Le pronom « i » (Mon/Ma) rattache le bienfait a Dieu — c'est le bienfait de Dieu. Le mot **la'allakum** est un nom de la racine '-l-l avec pronom suffixe 2MP. Il exprime l'esperance ou la possibilite — « pour que peut-etre vous ». Le verbe **tahtaduna** est un inaccompli 2MP de la forme VIII de la racine h-d-y. Le Lane's donne : se guider soi-meme, etre guide. La forme VIII est reflexive — se guider, trouver la guidance par soi-meme. L'inaccompli marque une action continue — etre constamment guide.

§JUSTIFICATION§
**ou** — Le sens retenu est « ou ». Le mot haythu est un adverbe de lieu. Meme justification que pour le verset 149.

**tu sortes** — Le sens retenu est « sortir ». Meme verbe kharajta que dans le verset 149.

**tourne** — Le sens retenu est « tourner ». Le verbe walli — meme forme et meme sens qu'au verset 149.

**ton visage** — Le sens retenu est « visage ». Le mot wajhaka — identique au verset 149.

**en direction de** — Le sens retenu est « direction ». Le mot shatra au sens directionnel.

**le lieu de prosternation** — Le sens retenu est « se prosterner ». Le mot al-masjid — identique au verset 149.

**sacre** — Le sens retenu est « sacre ». Le mot al-haram — identique au verset 149.

**vous soyez** — Le sens retenu est « etre ». Le verbe kuntum au sens d'existence localisee. L'alternative « devenir » est ecartee car le contexte est la localisation, pas la transformation.

**tournez** — Le sens retenu est « tourner ». Le verbe fawallu est le pluriel de walli — meme sens etendu a la communaute entiere. L'alternative « proteger » est ecartee car le contexte est l'orientation physique.

**vos visages** — Le sens retenu est « visages ». Le mot wujuhakum est le pluriel de wajhaka. L'adresse passe du singulier au pluriel — toute la communaute est concernee.

**dans sa direction** — Le sens retenu est « direction ». Le mot shatrahu avec pronom renvoie au lieu sacre.

**il y ait** — Le sens retenu est « etre ». Le verbe yakuna dans une construction de negation finale (pour que ne pas il y ait).

**les gens** — Le sens retenu est « gens ». Le mot an-nas designe les etres humains en general. L'alternative « peuple » est ecartee car le mot est ici generique — tous les gens, pas un peuple specifique.

**contre vous** — Le sens retenu est « sur, contre ». Le mot 'alaykum avec le sens de « contre » dans un contexte d'argumentation. L'alternative « au-dessus de » est ecartee car le contexte est l'opposition argumentative, pas la position spatiale.

**argument** — Le sens retenu est « argument, preuve ». Le mot hujjatun designe la justification utilisee dans un debat. L'alternative « pelerinage » est ecartee car le contexte est l'argumentation, pas le rite.

**ceux qui** — Le mot alladhina est un pronom relatif fonctionnant comme particule. Il introduit l'exception.

**ont commis l'injustice** — Le sens retenu est « etre injuste ». Le verbe zalamu decrit l'acte d'injustice. L'alternative « tenebres » est ecartee car le verbe est a l'accompli actif, pas un nom.

**d'entre eux** — Le mot minhum est une preposition+pronom indiquant la provenance partitive.

**ne les craignez pas** — Le sens retenu est « craindre ». Le verbe takhshawhum decrit la crainte. Le texte interdit la crainte des hommes.

**craignez-Moi** — Le sens retenu est « craindre ». Le verbe ikhshawni est un imperatif — l'ordre de craindre Dieu seul. La meme racine est utilisee dans les deux occurrences, creant un contraste direct : ne les craignez pas EUX, craignez-MOI.

**que Je paracheve** — Le sens retenu est « achever, parfaire ». Le verbe utimma decrit l'achevement. L'alternative « accomplir » est synonyme mais « parachevement » rend mieux l'idee de mener a sa plenitude.

**Mon bienfait** — Le sens retenu est « bienfait ». Le mot ni'mati designe le don gracieux de Dieu. L'alternative « douceur » est ecartee car le contexte est le don divin, pas la sensation physique.

**pour que vous** — Le mot la'allakum exprime l'esperance. Il indique un but escompte mais non garanti.

**soyez guides** — Le sens retenu est « se guider ». Le verbe tahtaduna (forme VIII reflexive) signifie trouver la guidance par soi-meme. L'alternative « conduire un cortege » est ecartee car le contexte est la guidance spirituelle, pas un cortege.

§CRITIQUE§
Les traductions courantes donnent sensiblement le meme sens pour ce verset. La structure en trois parties (injonction au singulier, extension au pluriel, justification) est unanimement reconnue. Hamidullah traduit « sauf ceux d'entre eux qui sont injustes » tandis que nous donnons « sauf ceux d'entre eux qui ont commis l'injustice » — la nuance est que l'accompli arabe (zalamu) decrit un acte passe, pas un etat permanent. Le passage « ne les craignez pas mais craignez-Moi » est traduit identiquement par tous. La fin du verset (parachevement du bienfait et guidance) est egalement sans ambiguite. Le mot cle du verset est hujja (argument) — les traductions oscillent entre « argument » et « preuve ». Nous retenons « argument » car le contexte est le debat (les gens utilisent un argument contre vous), pas la demonstration scientifique.`,
    segments: [
      { fr: "et", phon: "wa", arabic: "\u0648\u064E", is_particle: true, position: 0 },
      { fr: "de", phon: "min", arabic: "\u0645\u0650\u0646\u0652", is_particle: true, position: 1 },
      { fr: "ou", pos: "nom", phon: "\u1e25aythu", arabic: "\u062D\u064E\u064A\u0652\u062B\u064F", word_key: "hyth", is_particle: false, sense_retenu: "ou", position: 2 },
      { fr: "tu sortes", pos: "verbe", phon: "kharajta", arabic: "\u062E\u064E\u0631\u064E\u062C\u0652\u062A\u064E", word_key: "xrj", is_particle: false, sense_retenu: "sortir", position: 3 },
      { fr: "donc", phon: "fa", arabic: "\u0641\u064E", is_particle: true, position: 4 },
      { fr: "tourne", pos: "verbe", phon: "walli", arabic: "\u0648\u064E\u0644\u0650\u0651", word_key: "wly", is_particle: false, sense_retenu: "tourner", position: 5 },
      { fr: "ton visage", pos: "nom", phon: "wajha", arabic: "\u0648\u064E\u062C\u0652\u0647\u064E", word_key: "wjh", is_particle: false, sense_retenu: "visage", position: 6 },
      { fr: "le lieu de prosternation", pos: "nom", phon: "al-masjidi", arabic: "\u0671\u0644\u0652\u0645\u064E\u0633\u0652\u062C\u0650\u062F\u0650", word_key: "sjd", is_particle: false, sense_retenu: "se prosterner", position: 7 },
      { fr: "sacre", pos: "adjectif", phon: "al-\u1e25ar\u0101mi", arabic: "\u0671\u0644\u0652\u062D\u064E\u0631\u064E\u0627\u0645\u0650", word_key: "hrm", is_particle: false, sense_retenu: "sacre", position: 8 },
      { fr: "et", phon: "wa", arabic: "\u0648\u064E", is_particle: true, position: 9 },
      { fr: "ou", pos: "nom", phon: "\u1e25aythu", arabic: "\u062D\u064E\u064A\u0652\u062B\u064F", word_key: "hyth", is_particle: false, sense_retenu: "ou", position: 10 },
      { fr: "quoi que", phon: "m\u0101", arabic: "\u0645\u064E\u0627", is_particle: true, position: 11 },
      { fr: "vous soyez", pos: "verbe", phon: "kuntum", arabic: "\u0643\u064F\u0646\u062A\u064F\u0645\u0652", word_key: "kwn", is_particle: false, sense_retenu: "etre", position: 12 },
      { fr: "tournez", pos: "verbe", phon: "fawall\u016B", arabic: "\u0641\u064E\u0648\u064E\u0644\u064F\u0651\u0648\u0627\u06DF", word_key: "wly", is_particle: false, sense_retenu: "tourner", position: 13 },
      { fr: "vos visages", pos: "nom", phon: "wuj\u016Bhakum", arabic: "\u0648\u064F\u062C\u064F\u0648\u0647\u064E\u0643\u064F\u0645\u0652", word_key: "wjh", is_particle: false, sense_retenu: "visage", position: 14 },
      { fr: "dans sa direction", pos: "nom", phon: "sha\u1e6drahu", arabic: "\u0634\u064E\u0637\u0652\u0631\u064E\u0647\u064F\u06E5", word_key: "shtr", is_particle: false, sense_retenu: "direction", position: 15 },
      { fr: "pour", phon: "li", arabic: "\u0644\u0650", is_particle: true, position: 16 },
      { fr: "afin que ne pas", phon: "all\u0101", arabic: "\u0623\u064E\u0644\u0651\u064E\u0627", is_particle: true, position: 17 },
      { fr: "il y ait", pos: "verbe", phon: "yak\u016Bna", arabic: "\u064A\u064E\u0643\u064F\u0648\u0646\u064E", word_key: "kwn", is_particle: false, sense_retenu: "etre", position: 18 },
      { fr: "pour", phon: "li", arabic: "\u0644\u0650", is_particle: true, position: 19 },
      { fr: "les gens", pos: "nom", phon: "an-n\u0101si", arabic: "\u0644\u0650\u0644\u0646\u0651\u064E\u0627\u0633\u0650", word_key: "nws", is_particle: false, sense_retenu: "gens", position: 20 },
      { fr: "contre vous", pos: "nom", phon: "\u02BFalaykum", arabic: "\u0639\u064E\u0644\u064E\u064A\u0652\u0643\u064F\u0645\u0652", word_key: "ely", is_particle: false, sense_retenu: "contre", position: 21 },
      { fr: "un argument", pos: "nom", phon: "\u1e25ujjatun", arabic: "\u062D\u064F\u062C\u0651\u064E\u0629\u064C", word_key: "hjj", is_particle: false, sense_retenu: "argument", position: 22 },
      { fr: "sauf", phon: "ill\u0101", arabic: "\u0625\u0650\u0644\u0651\u064E\u0627", is_particle: true, position: 23 },
      { fr: "ceux qui", pos: "nom", phon: "alladh\u012Bna", arabic: "\u0671\u0644\u0651\u064E\u0630\u0650\u064A\u0646\u064E", word_key: "dhyy", is_particle: false, sense_retenu: "ceux qui", position: 24 },
      { fr: "ont commis l'injustice", pos: "verbe", phon: "\u1e93alam\u016B", arabic: "\u0638\u064E\u0644\u064E\u0645\u064F\u0648\u0627\u06DF", word_key: "zlm", is_particle: false, sense_retenu: "etre injuste", position: 25 },
      { fr: "d'entre eux", pos: "nom", phon: "minhum", arabic: "\u0645\u0650\u0646\u0652\u0647\u064F\u0645\u0652", word_key: "mnh", is_particle: false, sense_retenu: "d'entre eux", position: 26 },
      { fr: "donc", phon: "fa", arabic: "\u0641\u064E", is_particle: true, position: 27 },
      { fr: "ne", pos: "particule", phon: "l\u0101", arabic: "\u0644\u064E\u0627", word_key: "la", is_particle: false, sense_retenu: "ne pas", position: 28 },
      { fr: "les craignez", pos: "verbe", phon: "takhshawhum", arabic: "\u062A\u064E\u062E\u0652\u0634\u064E\u0648\u0652\u0647\u064F\u0645\u0652", word_key: "kshy", is_particle: false, sense_retenu: "craindre", position: 29 },
      { fr: "et", phon: "wa", arabic: "\u0648\u064E", is_particle: true, position: 30 },
      { fr: "craignez-Moi", pos: "verbe", phon: "ikhshawn\u012B", arabic: "\u0671\u062E\u0652\u0634\u064E\u0648\u0652\u0646\u0650\u0649", word_key: "kshy", is_particle: false, sense_retenu: "craindre", position: 31 },
      { fr: "et", phon: "wa", arabic: "\u0648\u064E", is_particle: true, position: 32 },
      { fr: "pour que Je paracheve", pos: "verbe", phon: "li-utimma", arabic: "\u0644\u0650\u0623\u064F\u062A\u0650\u0645\u0651\u064E", word_key: "atm", is_particle: false, sense_retenu: "parfaire", position: 33 },
      { fr: "Mon bienfait", pos: "nom", phon: "ni\u02BFmat\u012B", arabic: "\u0646\u0650\u0639\u0652\u0645\u064E\u062A\u0650\u0649", word_key: "nem", is_particle: false, sense_retenu: "bienfait", position: 34 },
      { fr: "sur vous", phon: "\u02BFalaykum", arabic: "\u0639\u064E\u0644\u064E\u064A\u0652\u0643\u064F\u0645\u0652", is_particle: true, position: 35 },
      { fr: "et", phon: "wa", arabic: "\u0648\u064E", is_particle: true, position: 36 },
      { fr: "pour que vous", pos: "nom", phon: "la\u02BFallakum", arabic: "\u0644\u064E\u0639\u064E\u0644\u0651\u064E\u0643\u064F\u0645\u0652", word_key: "ell", is_particle: false, sense_retenu: "pour que", position: 37 },
      { fr: "soyez guides", pos: "verbe", phon: "tahtad\u016Bna", arabic: "\u062A\u064E\u0647\u0652\u062A\u064E\u062F\u064F\u0648\u0646\u064E", word_key: "hdy", is_particle: false, sense_retenu: "se guider", position: 38 }
    ],
    words: [
      // hyth pos=2 — V150 first occurrence (same as V149)
      {
        word_key: "hyth", position: 2, sense_chosen: "ou",
        analysis_axes: {
          sense_chosen: "ou",
          concept_chosen: "Lieu/Espace",
          concepts: {
            "Lieu/Espace": {
              status: "nul",
              senses: ["ou", "la ou", "partout ou"],
              proof_ctx: "Le mot haythu est un adverbe de lieu invariable. Meme usage que dans le verset 149 — « d'ou que tu sortes ». Ce mot est un outil grammatical de generalisation spatiale. Les concepts dans word_meanings sont tous nuls car ce mot ne porte pas de sens conceptuel propre."
            }
          }
        }
      },
      // xrj pos=3
      {
        word_key: "xrj", position: 3, sense_chosen: "sortir",
        analysis_axes: {
          sense_chosen: "sortir",
          concept_chosen: "Sortie/\u00c9mergence",
          concepts: {
            "Sortie/\u00c9mergence": {
              status: "retenu",
              senses: ["sortir", "faire sortir", "expulser", "emerger", "produire"],
              proof_ctx: "Le verbe kharajta est un accompli 2MS de la forme I de la racine kh-r-j. Le Lane's donne : sortir, emerger, quitter un lieu. Meme forme et meme sens que dans le verset 149. L'accompli dans la construction generalisee « min haythu kharajta » cree une condition indefinie. Ce troisieme emploi de la meme formule (apres 2:144 et 2:149) montre l'insistance du Coran sur l'universalite de l'injonction.",
              axe1_verset: "Le verbe kharajta ouvre la premiere partie du verset — identique au verset 149. Mais le verset 150 va ensuite etendre l'injonction au pluriel et ajouter la justification. La sortie est le declencheur qui s'applique d'abord au Prophete (kharajta, tu sortes) puis a toute la communaute (kuntum, vous soyez). Le champ lexical de la premiere partie est identique au verset 149 : sortir, tourner, visage, direction, lieu de prosternation sacre.",
              axe2_voisins: "Le verset 149 contenait exactement la meme formule. Le verset 150 la reprend comme point de depart puis l'enrichit par l'extension au pluriel et la justification. Les versets 144, 149, 150 forment une triple repetition — la repetition est un procede coranique d'insistance qui ancre l'injonction dans la memoire.",
              axe3_sourate: "La racine kh-r-j dans les versets 144, 149, 150 est utilisee dans le meme sens et la meme construction. La sourate al-Baqarah utilise la triple repetition pour clore definitivement la question de la qibla — apres trois rappels identiques, la question ne peut plus etre discutee.",
              axe4_coherence: "La racine kh-r-j apparait environ 182 fois dans le Coran. La triple repetition de la meme formule dans un passage aussi court est inhabituelle dans le Coran — elle montre l'importance que le texte accorde a cette question d'orientation.",
              axe5_frequence: "Pour la mission du khalifa, la triple repetition de « d'ou que tu sortes » est un rappel que l'orientation doit etre constante, sans exception de lieu ni de circonstance. Le khalifa ne peut jamais s'exempter de l'orientation vers sa reference."
            }
          }
        }
      },
      // wly pos=5 — tourne (singulier)
      {
        word_key: "wly", position: 5, sense_chosen: "tourner",
        analysis_axes: {
          sense_chosen: "tourner",
          concept_chosen: "Proximit\u00e9/Protection",
          concepts: {
            "Proximit\u00e9/Protection": {
              status: "retenu",
              senses: ["proche", "ami", "protecteur", "allie"],
              proof_ctx: "Le verbe walli est un imperatif 2MS de la forme II de la racine w-l-y. Le Lane's donne pour la forme II : tourner vers, faire se tourner. Meme forme et meme sens que dans le verset 149. C'est la troisieme occurrence de cet imperatif au singulier dans le passage de la qibla (2:144, 2:149, 2:150). La racine w-l-y porte le sens de proximite — tourner vers c'est se rapprocher de.",
              axe1_verset: "Le verbe walli est identique a celui du verset 149 — meme injonction au singulier. Mais le verset 150 ajoutera ensuite l'imperatif au pluriel (fawallu) qui etend l'injonction. Le singulier s'adresse au Prophete comme modele, le pluriel s'adresse a la communaute qui doit suivre ce modele.",
              axe2_voisins: "Le verset 149 utilisait le meme walli. Le verset 150 l'utilise a nouveau puis le complete par fawallu. La progression est : le Prophete tourne (singulier) → la communaute tourne (pluriel). Le voisinage montre l'extension progressive de l'injonction.",
              axe3_sourate: "La forme II de w-l-y pour « tourner le visage » est specifique aux versets de la qibla dans la sourate al-Baqarah. La sourate utilise cette forme pour marquer l'orientation comme acte d'obeissance — tourner vers le lieu sacre c'est obeir a l'ordre divin.",
              axe4_coherence: "La racine w-l-y dans le Coran oscille entre proximite, protection et direction. Dans les versets de la qibla, c'est le sens directionnel (tourner vers) qui domine. Ce sens est lie au sens fondamental de proximite — tourner vers c'est se rapprocher.",
              axe5_frequence: "Pour la mission du khalifa, l'acte de tourner est un renouvellement constant de l'orientation. Le khalifa tourne son visage vers sa reference — c'est un acte delibere et repete qui ancre la mission dans la direction divine."
            }
          }
        }
      },
      // wjh pos=6 — ton visage (singulier, sans shatra car pas d'idafa ici dans le texte)
      {
        word_key: "wjh", position: 6, sense_chosen: "visage",
        analysis_axes: {
          sense_chosen: "visage",
          concept_chosen: "Visage/Direction",
          concepts: {
            "Visage/Direction": {
              status: "retenu",
              senses: ["visage", "face", "direction", "se diriger vers"],
              proof_ctx: "Le nom wajha est un nom masculin singulier accusatif de la racine w-j-h. Le Lane's donne : visage, face, direction. Dans le verset 150, ce mot apparait ici sans pronom suffixe dans l'idafa avec le lieu de prosternation. Meme sens fondamental que dans le verset 149 — le visage est le support de l'orientation. Le verset 150 utilisera ensuite le pluriel wujuhakum pour les visages de la communaute.",
              axe1_verset: "Le mot wajha dans la premiere partie s'adresse au Prophete au singulier. La deuxieme partie du verset utilisera wujuhakum (vos visages) au pluriel. Le passage du singulier au pluriel montre l'extension de l'injonction. Le visage du Prophete est le modele — les visages de la communaute doivent suivre la meme direction.",
              axe2_voisins: "Le verset 149 utilisait wajhaka (ton visage). Le verset 150 utilise d'abord wajha puis wujuhakum. Cette progression verset par verset montre l'elargissement : en 144, le Prophete seul ; en 149, le Prophete seul avec emphase ; en 150, le Prophete d'abord puis toute la communaute.",
              axe3_sourate: "La racine w-j-h est utilisee dans la sourate al-Baqarah tant au singulier qu'au pluriel. Le passage du singulier au pluriel dans le verset 150 montre que la sourate construit progressivement une obligation communautaire a partir d'une injonction individuelle.",
              axe4_coherence: "Le Coran utilise le visage comme symbole de l'orientation totale. En 6:79, « je tourne mon visage vers Celui qui a cree les cieux et la terre ». Le verset 150 etend ce geste a toute la communaute — chaque visage doit se tourner vers le meme point.",
              axe5_frequence: "Pour la mission du khalifa, le visage est la partie visible de l'orientation. Le khalifa ne peut pas cacher sa direction — son visage montre ou il se tourne. L'extension au pluriel montre que la mission est collective — chaque membre de la communaute porte sa propre responsabilite d'orientation."
            }
          }
        }
      },
      // sjd pos=7 — le lieu de prosternation (V150)
      {
        word_key: "sjd", position: 7, sense_chosen: "se prosterner",
        analysis_axes: {
          sense_chosen: "se prosterner",
          concept_chosen: "Prosternation/Adoration",
          concepts: {
            "Prosternation/Adoration": {
              status: "retenu",
              senses: ["se prosterner", "s'incliner", "adorer", "obeir"],
              proof_ctx: "Le nom al-masjidi est le meme nom de lieu que dans le verset 149. La racine s-j-d porte le sens de prosternation. Le lieu de prosternation sacre est mentionne pour la troisieme fois dans le passage (2:144, 2:149, 2:150). La triple mention ferme definitivement la question de la direction — il n'y a qu'un seul lieu de prosternation sacre et c'est vers lui que tous doivent se tourner.",
              axe1_verset: "Le mot al-masjidi dans la premiere partie du verset reprend la destination de l'orientation. Le verset 150 ajoutera ensuite shatrahu (dans SA direction) avec un pronom renvoyant a ce meme lieu — le lieu est nomme une fois puis reference par un pronom. Cette construction stylistique montre que le lieu est tellement connu qu'un simple pronom suffit dans la deuxieme partie.",
              axe2_voisins: "Le verset 149 mentionnait al-masjid al-haram explicitement. Le verset 150 le mentionne encore dans sa premiere partie, puis utilise le pronom hu (sa direction) dans la deuxieme partie. La progression montre que le lieu est deja bien etabli dans le discours — la repetition l'a ancre.",
              axe3_sourate: "Le lieu de prosternation sacre est le point focal du passage 2:142-150 dans la sourate. Sa triple mention explicite (2:144, 2:149, 2:150) plus la mention pronominale (shatrahu en 2:150) montrent son importance structurante. Toute la question de la qibla tourne autour de ce lieu unique.",
              axe4_coherence: "L'expression al-masjid al-haram apparait 15 fois dans le Coran. En 9:28, l'interdiction d'approcher le lieu de prosternation sacre pour les associateurs. En 48:25, l'empechement d'y acceder. Le lieu de prosternation sacre est un enjeu central du Coran — sa direction et son acces sont reglementes.",
              axe5_frequence: "Pour la mission du khalifa, le lieu de prosternation sacre est le point de convergence de toute la communaute. Tous les khalifas, ou qu'ils soient, se tournent vers le meme lieu. Ce point unique cree l'unite dans la diversite — chaque visage s'oriente vers le meme centre."
            }
          }
        }
      },
      // hrm pos=8 — sacre (V150)
      {
        word_key: "hrm", position: 8, sense_chosen: "sacre",
        analysis_axes: {
          sense_chosen: "sacre",
          concept_chosen: "Interdiction/Sacr\u00e9",
          concepts: {
            "Interdiction/Sacr\u00e9": {
              status: "retenu",
              senses: ["interdire", "sacre", "sanctuaire", "illicite", "priver", "respecter"],
              proof_ctx: "Le mot al-harami qualifie le lieu de prosternation comme sacre. Meme forme et meme sens que dans le verset 149. La sacralite du lieu est un fait etabli qui ne change pas d'une occurrence a l'autre. L'article defini confirme qu'il s'agit du meme lieu sacre deja mentionne.",
              axe1_verset: "Le mot al-harami complete l'identification du lieu dans la premiere partie du verset. La deuxieme partie utilisera le pronom hu (shatrahu) pour y referer sans le renommer. Le sacre du lieu est deja etabli — il n'a pas besoin d'etre reaffirme dans la deuxieme partie.",
              axe2_voisins: "Les versets 144 et 149 utilisaient la meme expression al-masjid al-haram. Le verset 150 est la derniere occurrence dans ce passage. La triple mention du caractere sacre ferme la question — le lieu est sacre, c'est un fait.",
              axe3_sourate: "La racine h-r-m dans la sourate al-Baqarah couvre le lieu sacre, les mois sacres et les interdits alimentaires. Le lieu de prosternation sacre est la premiere de ces sacralites — le lieu ou converge l'orientation de la communaute est protege par l'interdit divin.",
              axe4_coherence: "La racine h-r-m apparait environ 83 fois dans le Coran. Le sacre dans le Coran est un concept qui lie l'interdiction et la protection — ce qui est sacre est protege par des limites qu'il est interdit de franchir.",
              axe5_frequence: "Pour la mission du khalifa, le sacre est une limite que la mission ne peut pas transgresser. Le lieu sacre est protege — le khalifa doit respecter cette protection comme faisant partie de sa mission."
            }
          }
        }
      },
      // hyth pos=10 — V150 second occurrence
      {
        word_key: "hyth", position: 10, sense_chosen: "ou",
        analysis_axes: {
          sense_chosen: "ou",
          concept_chosen: "Lieu/Espace",
          concepts: {
            "Lieu/Espace": {
              status: "nul",
              senses: ["ou", "la ou", "partout ou"],
              proof_ctx: "Deuxieme occurrence de haythu dans le verset 150. Ici dans la construction « wa haythu ma kuntum » (et ou que vous soyez). Le mot fonctionne de la meme maniere que dans la premiere partie mais avec un elargissement : il ne s'agit plus de « d'ou que tu sortes » mais de « ou que vous soyez ». Les concepts dans word_meanings sont tous nuls."
            }
          }
        }
      },
      // kwn pos=12 — vous soyez
      {
        word_key: "kwn", position: 12, sense_chosen: "etre",
        analysis_axes: {
          sense_chosen: "etre",
          concept_chosen: "\u00catre/Existence",
          concepts: {
            "\u00catre/Existence": {
              status: "retenu",
              senses: ["etre (verbe incomplet)", "venir a l'existence"],
              proof_ctx: "Le verbe kuntum est un accompli 2MP de la forme I de la racine k-w-n. Le Lane's donne : etre, exister, se trouver dans un etat ou un lieu. L'accompli dans la construction generalisee « haythu ma kuntum » cree une condition indefinie : dans quelque lieu que vous soyez, quelle que soit votre localisation. Le 2MP (vous, kum) elargit l'adresse du Prophete seul a toute la communaute. Le verbe kana est le verbe d'existence par excellence en arabe — il exprime l'etre dans un lieu ou un etat.",
              axe1_verset: "Le verbe kuntum marque la transition du singulier au pluriel dans le verset. Apres « d'ou que TU sortes, tourne TON visage », le verset passe a « ou que VOUS soyez, tournez VOS visages ». Le verbe etre localise la communaute dans l'espace — ou que vous soyez, sans exception de lieu. Le champ lexical de localisation (ou, etre, tourner, visage, direction) montre que le verset couvre toute localisation possible.",
              axe2_voisins: "Le verset 148 disait « chacun a une direction ». Le verset 149 s'adressait au Prophete seul. Le verset 150 etend l'injonction par kuntum (vous etes) — la communaute entiere est concernee. La progression montre l'elargissement : le Prophete → la communaute.",
              axe3_sourate: "La racine k-w-n est la plus frequente de la sourate al-Baqarah. Le verbe kana structure la temporalite et l'existence dans la sourate. En 2:150, il sert a generaliser la localisation — l'injonction vaut pour tout lieu et tout temps.",
              axe4_coherence: "La racine k-w-n apparait environ 1390 fois dans le Coran. C'est la racine la plus frequente. Le verbe kana est le verbe d'existence et de devenir par excellence. La construction « haythu ma kuntum » (ou que vous soyez) apparait aussi en 4:78 et 2:148 — elle marque l'universalite spatiale d'une injonction ou d'un fait.",
              axe5_frequence: "Pour la mission du khalifa, l'etre dans un lieu est le point de depart de l'action. Ou que le khalifa soit, il doit s'orienter. La mission ne depend pas du lieu — elle est permanente et universelle."
            },
            "Humilit\u00e9/Soumission": {
              status: "nul",
              senses: ["etre humble soumis"],
              proof_ctx: "Le sens d'humilite est un usage rare et secondaire de k-w-n. Le contexte est la localisation (ou que vous soyez), pas l'humilite."
            }
          }
        }
      },
      // wly pos=13 — tournez (pluriel)
      {
        word_key: "wly", position: 13, sense_chosen: "tourner",
        analysis_axes: {
          sense_chosen: "tourner",
          concept_chosen: "Proximit\u00e9/Protection",
          concepts: {
            "Proximit\u00e9/Protection": {
              status: "retenu",
              senses: ["proche", "ami", "protecteur", "allie"],
              proof_ctx: "Le verbe fawallu est un imperatif 2MP de la forme II de la racine w-l-y avec particule fa consecutive. Le Lane's donne pour la forme II : tourner vers, diriger. Le fa consecutif lie cette injonction a la condition precedente (ou que vous soyez → tournez). Le pluriel (wallu vs walli) etend l'ordre du Prophete seul a toute la communaute. C'est le meme sens que pour walli mais a une echelle collective.",
              axe1_verset: "Le verbe fawallu est la deuxieme injonction de tourner dans le verset — la premiere au singulier (walli, tourne) et celle-ci au pluriel (wallu, tournez). Le verset construit une progression : le Prophete doit tourner, et vous tous devez tourner. Le fa consecutif cree un lien logique avec la condition : OU QUE VOUS SOYEZ → TOURNEZ. L'injonction est universelle et inconditionnelle.",
              axe2_voisins: "Le verset 144 ne contenait que l'injonction au singulier. Le verset 149 aussi. Le verset 150 est le premier a ajouter l'injonction au pluriel. Cette extension marque la completude de l'injonction — le passage se termine en englobant toute la communaute.",
              axe3_sourate: "La forme II au pluriel de w-l-y (wallu) est specifique au verset 150 dans la sourate al-Baqarah. C'est l'unique moment ou l'injonction de tourner le visage est etendue au pluriel. La sourate reserve cette extension pour le dernier verset du passage — elle construit l'obligation progressive.",
              axe4_coherence: "Le passage du singulier au pluriel est un procede coranique courant. Le Prophete recoit d'abord l'ordre personnellement puis la communaute est englobee. En 73:20, le meme passage du singulier au pluriel dans les injonctions de priere nocturne.",
              axe5_frequence: "Pour la mission du khalifa, l'extension au pluriel montre que la mission n'est pas individuelle. Chaque membre de la communaute porte sa responsabilite d'orientation. Le khalifa n'est pas seul — toute la communaute doit tourner ses visages vers la meme direction."
            }
          }
        }
      },
      // wjh pos=14 — vos visages (pluriel)
      {
        word_key: "wjh", position: 14, sense_chosen: "visage",
        analysis_axes: {
          sense_chosen: "visage",
          concept_chosen: "Visage/Direction",
          concepts: {
            "Visage/Direction": {
              status: "retenu",
              senses: ["visage", "face", "direction", "se diriger vers"],
              proof_ctx: "Le nom wujuhakum est un nom masculin pluriel accusatif de la racine w-j-h avec pronom suffixe 2MP (kum). Le Lane's donne : visages, faces. Le pluriel wujuh (visages) correspond au pluriel du verbe wallu (tournez) et du pronom kum (vos). La concordance plurielle montre que chaque membre de la communaute doit tourner son propre visage. Le passage du singulier wajhaka (ton visage) au pluriel wujuhakum (vos visages) est le moment cle du verset 150.",
              axe1_verset: "Le mot wujuhakum est l'objet de l'injonction plurielle — « tournez VOS visages ». Le pluriel montre que chaque personne a son propre visage a tourner — la responsabilite est individuelle au sein de l'injonction collective. Le champ lexical (ou que vous soyez, tournez, vos visages, dans sa direction) construit une obligation universelle et personnelle a la fois.",
              axe2_voisins: "Le verset 149 utilisait wajhaka (ton visage, singulier). Le verset 150 passe a wujuhakum (vos visages, pluriel). Ce passage est unique dans le passage de la qibla — il marque la completude de l'injonction. Desormais, tous sont concernes.",
              axe3_sourate: "La racine w-j-h au pluriel est plus rare que le singulier dans la sourate. En 2:150, le pluriel marque un moment de rassemblement — tous les visages convergent vers le meme point. La sourate utilise ce pluriel pour montrer l'unite de la communaute dans l'orientation.",
              axe4_coherence: "Le Coran utilise le pluriel wujuh dans plusieurs contextes. En 3:106, « le jour ou des visages seront blancs et des visages seront noirs ». Le visage au pluriel marque la diversite des destins individuels. En 2:150, les visages sont divers (chaque personne) mais la direction est unique.",
              axe5_frequence: "Pour la mission du khalifa, les visages pluriels montrent que la mission est collective sans etre uniforme. Chaque khalifa a son propre visage mais tous regardent dans la meme direction. L'unite de la mission se trouve dans la direction commune, pas dans l'uniformite des visages."
            }
          }
        }
      },
      // shtr pos=15 — dans sa direction
      {
        word_key: "shtr", position: 15, sense_chosen: "direction",
        analysis_axes: {
          sense_chosen: "direction",
          concept_chosen: "Direction/Orientation",
          concepts: {
            "Direction/Orientation": {
              status: "nul",
              senses: ["se diriger vers", "cote"],
              proof_ctx: "Le nom shatrahu est un nom masculin singulier accusatif de la racine sh-t-r avec pronom suffixe 3MS (hu). Le Lane's donne : direction, cote. Le pronom hu (sa) renvoie au lieu de prosternation sacre mentionne dans la premiere partie du verset. « Shatrahu » signifie « dans sa direction » — la direction du lieu sacre. L'usage pronominal est propre a cette deuxieme partie du verset — dans la premiere partie, shatra etait suivi du nom complet (al-masjid al-haram), ici le pronom suffit car le referent est deja connu."
            },
            "Division/Moiti\u00e9": {
              status: "nul",
              senses: ["moitie", "couper en deux"],
              proof_ctx: "Le sens de moitie est hors sujet — le contexte est directionnel. Le pronom « hu » confirme le sens de direction : « dans SA direction » (direction du lieu sacre), pas « dans SA moitie »."
            }
          }
        }
      },
      // kwn pos=18 — il y ait (yakuna)
      {
        word_key: "kwn", position: 18, sense_chosen: "etre",
        analysis_axes: {
          sense_chosen: "etre",
          concept_chosen: "\u00catre/Existence",
          concepts: {
            "\u00catre/Existence": {
              status: "retenu",
              senses: ["etre (verbe incomplet)", "venir a l'existence"],
              proof_ctx: "Le verbe yakuna est un inaccompli 3MS subjonctif de la forme I de la racine k-w-n. Le Lane's donne : etre, exister. Le subjonctif est commande par la negation finale « li-alla » (pour que ne pas). La construction « li-alla yakuna li-n-nasi 'alaykum hujjatun » signifie « pour qu'il n'y ait pas pour les gens d'argument contre vous ». Le verbe yakuna exprime l'existence de l'argument — la negation vise a supprimer cette existence. Le but de l'orientation vers le lieu sacre est d'eliminer l'argument que les gens pourraient utiliser.",
              axe1_verset: "Le verbe yakuna ouvre la justification de l'injonction — POURQUOI tourner vos visages ? Pour qu'il n'y ait pas d'argument. Le champ lexical (gens, argument, contre vous, injustes) passe de l'orientation physique au debat argumentatif. L'orientation n'est pas un geste gratuit — elle a une finalite strategique : supprimer l'argument des adversaires.",
              axe2_voisins: "Le verset 144 donnait l'injonction sans justification detaillee. Le verset 146 mentionnait ceux qui reconnaissent la verite. Le verset 150 ajoute la justification par l'argument — la question de la qibla est aussi une question de legitimite face aux gens. Le passage progresse vers une resolution complete : injonction → validation → justification.",
              axe3_sourate: "La racine k-w-n dans la sourate al-Baqarah sert souvent a exprimer l'existence ou la non-existence d'un etat. En 2:150, la non-existence souhaitee est celle de l'argument — le texte veut eliminer la possibilite meme de l'argumentation adverse.",
              axe4_coherence: "Le verbe kana au subjonctif avec negation est un procede coranique pour exprimer un but negatif — supprimer une condition. En 4:165, « pour que les gens n'aient pas d'argument contre Dieu apres les envoyes ». Le Coran utilise cette construction pour fermer les voies d'objection.",
              axe5_frequence: "Pour la mission du khalifa, l'elimination de l'argument est un objectif strategique. Le khalifa doit agir de maniere a ne laisser aucune prise a l'objection. L'orientation correcte supprime l'argument — la coherence de la pratique rend les objections caduques."
            }
          }
        }
      },
      // nws pos=20 — les gens
      {
        word_key: "nws", position: 20, sense_chosen: "gens",
        analysis_axes: {
          sense_chosen: "gens",
          concept_chosen: "Humanit\u00e9/Peuple",
          concepts: {
            "Humanit\u00e9/Peuple": {
              status: "retenu",
              senses: ["gens", "etres humains", "peuple"],
              proof_ctx: "Le nom an-nasi est un nom masculin pluriel defini genitif de la racine n-w-s (ou n-a-s selon les analyses). Le Lane's donne : gens, etres humains, humanite. L'article defini (an-) marque la generalite — les gens en general, pas un groupe specifique. Le genitif est commande par la preposition li (pour). La construction « li-n-nasi 'alaykum hujjatun » signifie « pour les gens un argument contre vous » — les gens sont ceux qui pourraient argumenter. Le mot est generique — il couvre tous les opposants potentiels.",
              axe1_verset: "Le mot an-nas introduit les adversaires potentiels dans le verset. Apres l'injonction et la justification, le verset identifie ceux contre qui la defense est necessaire : les gens en general, sauf les injustes. Le champ lexical (gens, argument, contre vous, injustes, craindre) montre que le verset passe de l'orientation a la confrontation argumentative. Les gens sont une categorie large — le verset les mentionne pour ensuite les neutraliser.",
              axe2_voisins: "Le verset 142 mentionnait les gens insenses (as-sufaha' mina n-nasi) qui critiquent le changement de qibla. Le verset 150 repond a cette critique — en se tournant vers le lieu sacre, les gens n'auront plus d'argument. Le passage 2:142-150 est encadre par la reference aux gens : ceux qui critiquent au debut, ceux qui sont desarmes a la fin.",
              axe3_sourate: "Le mot an-nas est un des mots les plus frequents de la sourate al-Baqarah. En 2:8, « parmi les gens, il en est qui disent ». En 2:13, « croyez comme les gens ont cru ». La sourate utilise an-nas pour designer l'humanite dans sa diversite — croyants et incroyants, sinceres et hypocrites.",
              axe4_coherence: "La racine n-w-s/n-a-s apparait environ 241 fois dans le Coran. An-nas est un mot fondamental qui designe l'humanite en general. En 4:165, « pour que les gens n'aient pas d'argument contre Dieu ». La meme construction qu'en 2:150 montre que le Coran utilise « les gens » comme categorie generale d'opposition potentielle.",
              axe5_frequence: "Pour la mission du khalifa, les gens sont a la fois le public et les critiques de la mission. Le khalifa doit agir de maniere a ne pas donner prise a l'argument des gens. La mission s'accomplit dans le monde des gens — leur argument doit etre neutralise par la coherence de la pratique."
            }
          }
        }
      },
      // ely pos=21 — contre vous
      {
        word_key: "ely", position: 21, sense_chosen: "contre",
        analysis_axes: {
          sense_chosen: "contre",
          concept_chosen: "Sur/Au-dessus (pr\u00e9position)",
          concepts: {
            "Sur/Au-dessus (pr\u00e9position)": {
              status: "retenu",
              senses: ["sur", "au-dessus de", "vers", "contre", "pour", "a propos de", "malgre", "selon", "avec"],
              proof_ctx: "Le mot 'alaykum est une preposition de la racine '-l-y avec pronom suffixe 2MP (kum). Le Lane's donne : sur, au-dessus de, contre. Le sens de « contre » est retenu car le contexte est l'argumentation adverse — les gens pourraient avoir un argument CONTRE vous. La preposition 'ala dans un contexte de conflit ou d'argumentation prend le sens de « contre ». La construction « li-n-nasi 'alaykum hujjatun » (pour les gens contre vous un argument) utilise 'ala dans son sens adversatif.",
              axe1_verset: "Le mot 'alaykum situe la communaute comme cible de l'argument — les gens ont un argument CONTRE VOUS. La preposition cree une relation d'opposition : les gens → contre → vous. Le verset montre que l'orientation correcte elimine cette opposition — en se tournant vers le lieu sacre, la communaute supprime la prise argumentative.",
              axe2_voisins: "Le verset 142 montrait la critique des insenses contre le changement de qibla. Le verset 150 montre comment neutraliser cette critique : en obeissant a l'injonction, les gens n'auront plus d'argument contre vous. Le passage repond a l'objection initiale par l'obeissance.",
              axe3_sourate: "La preposition 'ala est extremement frequente dans la sourate al-Baqarah dans des contextes varies. En 2:150, elle exprime l'opposition argumentative. En 2:286, « notre Seigneur, ne nous impose pas ('ala) ce que nous ne pouvons supporter ». La preposition marque tantot l'opposition, tantot la charge.",
              axe4_coherence: "La preposition 'ala apparait des centaines de fois dans le Coran. Le sens adversatif (« contre ») est un de ses sens majeurs. En 4:165, « pour que les gens n'aient pas d'argument contre ('ala) Dieu ». La meme construction qu'en 2:150.",
              axe5_frequence: "Pour la mission du khalifa, l'opposition est un fait de la mission. Les gens auront des arguments contre le khalifa — mais la coherence de la pratique les neutralise. Le khalifa ne craint pas l'opposition, il la desactive par l'obeissance a l'injonction divine."
            },
            "Hauteur/Domination": {
              status: "nul",
              senses: ["etre haut", "monter", "dominer", "surpasser", "elever", "s'exalter", "superieur", "noble", "eminent", "fort", "lion", "orgueilleux"],
              proof_ctx: "Le sens de hauteur et de domination est le sens premier de la racine '-l-y — etre eleve, dominer. Le mot 'alaykum est ici une preposition avec pronom, pas un verbe ou un adjectif de hauteur. Le contexte est l'argumentation adverse, pas l'elevation."
            }
          }
        }
      },
      // hjj pos=22 — argument
      {
        word_key: "hjj", position: 22, sense_chosen: "argument",
        analysis_axes: {
          sense_chosen: "argument",
          concept_chosen: "P\u00e8lerinage/Preuve",
          concepts: {
            "P\u00e8lerinage/Preuve": {
              status: "retenu",
              senses: ["pelerinage", "argument", "preuve", "disputer"],
              proof_ctx: "Le nom hujjatun est un nom feminin singulier indefini nominatif de la racine h-j-j. Le Lane's donne : argument, preuve, raison invoquee dans un debat, justification. L'indefini marque qu'aucun argument, quel qu'il soit, ne doit subsister. Le nominatif montre que hujjatun est le sujet du verbe yakuna (qu'il n'y ait pas d'argument). La racine h-j-j couvre a la fois le pelerinage (hajj) et l'argumentation (hujja) — ici c'est le sens d'argumentation qui est retenu car le contexte est le debat, pas le rite.",
              axe1_verset: "Le mot hujjatun est le pivot de la justification — tout le passage « pour que les gens n'aient pas d'argument contre vous » tourne autour de ce mot. L'argument est ce que les adversaires pourraient utiliser comme arme dans le debat. L'orientation correcte supprime cette arme. Le champ lexical (gens, contre vous, argument, injustes) construit un espace de confrontation ou l'argument est l'outil de l'adversaire. L'obeissance a l'injonction divine desactive cet outil.",
              axe2_voisins: "Le verset 142 montrait la critique : « qu'est-ce qui les a detournes de leur qibla ? ». C'est cet argument que le verset 150 neutralise. En obeissant a l'injonction de se tourner vers le lieu sacre, la critique tombe — il n'y a plus d'argument de contradiction ou d'incoherence. Le passage 2:142-150 est structure autour de cette question-reponse.",
              axe3_sourate: "La racine h-j-j apparait dans la sourate al-Baqarah principalement dans le contexte du pelerinage (2:158, 2:189, 2:196, 2:197). En 2:150, c'est le sens d'argument qui est utilise — la sourate montre que la meme racine couvre le rite sacre et la confrontation intellectuelle. Le pelerinage est un argument en soi — il manifeste l'unite de la communaute.",
              axe4_coherence: "La racine h-j-j apparait environ 33 fois dans le Coran. Le mot hujja (argument) apparait en 2:150, 4:165, 6:83, 42:15, 45:25. En 4:165, « pour que les gens n'aient pas d'argument contre Dieu apres les envoyes ». Le Coran montre que Dieu ferme les voies d'objection une par une — les envoyes suppriment l'argument, l'injonction de la qibla supprime l'argument.",
              axe5_frequence: "Pour la mission du khalifa, l'argument est l'arme de l'opposition. Le khalifa doit agir de maniere a neutraliser les arguments. L'obeissance aux injonctions divines est la meilleure defense — elle supprime les prises argumentatives. Le khalifa n'a pas besoin de gagner le debat — il doit le rendre sans objet par sa pratique coherente."
            }
          }
        }
      },
      // dhyy pos=24 — ceux qui (pronom relatif)
      {
        word_key: "dhyy", position: 24, sense_chosen: "ceux qui",
        analysis_axes: {
          sense_chosen: "ceux qui",
          concept_chosen: "Non trouv\u00e9",
          concepts: {
            "Non trouv\u00e9": {
              status: "nul",
              senses: ["non trouve"],
              proof_ctx: "Le mot alladhina est un pronom relatif pluriel masculin. Il signifie « ceux qui » et introduit une proposition relative. Ce mot n'a pas de racine productive dans word_meanings — il fonctionne comme un outil grammatical. Le concept « Non trouve » dans word_meanings indique que ce mot n'a pas de sens conceptuel propre a analyser."
            }
          }
        }
      },
      // zlm pos=25 — ont commis l'injustice
      {
        word_key: "zlm", position: 25, sense_chosen: "etre injuste",
        analysis_axes: {
          sense_chosen: "etre injuste",
          concept_chosen: "Injustice/Oppression",
          concepts: {
            "Injustice/Oppression": {
              status: "retenu",
              senses: ["opprimer", "etre injuste", "injustice", "oppresseur"],
              proof_ctx: "Le verbe zalamu est un accompli 3MP de la forme I de la racine z-l-m. Le Lane's donne : commettre l'injustice, opprimer, mettre une chose a une place qui n'est pas la sienne. Le sens premier de zulm est le deplacement — mettre quelque chose la ou ce n'est pas sa place. L'injustice est un deplacement : donner un droit a celui qui ne le merite pas, ou le retirer a celui qui le merite. L'accompli marque un acte acheve — ceux qui ont commis l'injustice, pas ceux qui la commettront. Le verset excepte les injustes de la neutralisation de l'argument — eux continueront a argumenter malgre tout.",
              axe1_verset: "Le mot zalamu introduit une exception : « sauf ceux d'entre eux qui ont commis l'injustice ». L'argument des gens est neutralise SAUF pour les injustes. Le verset reconnait que certains continueront a argumenter malgre la coherence de la pratique — mais ces arguments ne viennent pas de la raison, ils viennent de l'injustice. L'exception montre la lucidite du texte : il ne promet pas l'unanimite mais la neutralisation des arguments legitimes.",
              axe2_voisins: "Le verset 145 mentionnait ceux qui ne suivent pas la qibla « meme si tu leur apportais toutes les preuves ». Le verset 150 reprend ce theme avec les injustes — certains refuseront toujours. Les versets voisins montrent que l'opposition a la qibla est de deux types : l'objection raisonnable (neutralisee par l'obeissance) et le refus injuste (qui persiste malgre tout).",
              axe3_sourate: "La racine z-l-m est une des plus frequentes de la sourate al-Baqarah. En 2:35, « vous seriez parmi les injustes ». En 2:51, « quand vous avez pris le veau, vous etiez des injustes ». En 2:124, « Mon engagement n'inclut pas les injustes ». La sourate trace une ligne claire entre les justes et les injustes — l'injustice est le critere de separation.",
              axe4_coherence: "La racine z-l-m apparait environ 315 fois dans le Coran. L'injustice dans le Coran est le deplacement — mettre une chose a une place qui n'est pas la sienne. Les injustes du verset 150 sont ceux qui persistent dans l'argumentation malgre l'evidence — ils deplacent la verite pour la remplacer par leur propre volonte.",
              axe5_frequence: "Pour la mission du khalifa, les injustes sont ceux qui s'opposent a la mission par injustice, pas par ignorance. Le khalifa doit distinguer l'opposition legitime (qui peut etre neutralisee par l'argument) de l'opposition injuste (qui persiste malgre l'evidence). Les injustes ne doivent pas etre craints — la crainte est reservee a Dieu seul."
            },
            "Obscurit\u00e9/T\u00e9n\u00e8bres": {
              status: "probable",
              senses: ["obscurite", "tenebres"],
              proof_ctx: "Le sens de tenebres est un sens majeur de la racine z-l-m. La distinction philosophique avec l'injustice est que les tenebres sont l'absence de lumiere (sens physique/figuratif) tandis que l'injustice est le deplacement d'une chose de sa place (sens moral). Le verbe zalamu dans ce verset est a l'accompli actif — il decrit un acte (commettre l'injustice), pas un etat (etre dans les tenebres). Le sens d'injustice est premier dans ce contexte.",
              axe1_verset: "Le sens de tenebres pourrait sous-tendre l'idee que les injustes sont dans l'obscurite — mais le contexte immediat est l'argumentation et le refus, pas la description d'un etat de tenebres.",
              axe2_voisins: "Les versets voisins traitent de l'orientation et de l'argument, pas de la lumiere et de l'obscurite. Le sens d'injustice est plus pertinent que le sens de tenebres.",
              axe3_sourate: "La sourate al-Baqarah utilise la racine z-l-m dans les deux sens. En 2:17-20, les tenebres. En 2:35, l'injustice. Le contexte de 2:150 est moral (l'injustice), pas physique (les tenebres).",
              axe4_coherence: "Le Coran lie souvent l'injustice et les tenebres — les injustes sont dans les tenebres. Mais ici le verbe zalamu decrit un acte, pas un etat.",
              axe5_frequence: "Pour la mission du khalifa, les tenebres sont l'etat de ceux qui s'eloignent de la lumiere — l'injustice est l'acte qui produit cet eloignement."
            }
          }
        }
      },
      // mnh pos=26 — d'entre eux
      {
        word_key: "mnh", position: 26, sense_chosen: "d'entre eux",
        analysis_axes: {
          sense_chosen: "d'entre eux",
          concept_chosen: "Provenance/Origine",
          concepts: {
            "Provenance/Origine": {
              status: "nul",
              senses: ["de lui", "de cela"],
              proof_ctx: "Le mot minhum est la preposition min (de, parmi) avec pronom suffixe 3MP (hum, eux). Le Lane's donne pour min : de, depuis, parmi. L'expression « minhum » (d'entre eux) precise que les injustes sont un sous-groupe des gens mentionnes plus haut. Les concepts dans word_meanings sont tous nuls car ce mot fonctionne comme une preposition+pronom sans sens conceptuel propre."
            }
          }
        }
      },
      // la pos=28 — ne (negation)
      {
        word_key: "la", position: 28, sense_chosen: "ne pas",
        analysis_axes: {
          sense_chosen: "ne pas",
          concept_chosen: "N\u00e9gation",
          concepts: {
            "N\u00e9gation": {
              status: "nul",
              senses: ["non", "ne pas", "aucun"],
              proof_ctx: "Le mot la est une particule de negation. Le Lane's donne : non, ne pas. La particule la devant un inaccompli (la takhshawhum) cree un imperatif negatif — « ne les craignez pas ». Ce mot est un outil grammatical sans sens conceptuel propre — il nie le verbe qui suit. Les concepts dans word_meanings sont tous nuls."
            }
          }
        }
      },
      // kshy pos=29 — ne les craignez pas
      {
        word_key: "kshy", position: 29, sense_chosen: "craindre",
        analysis_axes: {
          sense_chosen: "craindre",
          concept_chosen: "Crainte",
          concepts: {
            "Crainte": {
              status: "nul",
              senses: ["craindre"],
              proof_ctx: "Le verbe takhshawhum est un inaccompli 2MP de la forme I de la racine kh-sh-y avec pronom suffixe 3MP (hum). Le Lane's donne : craindre, redouter, avoir peur. La khashya est une crainte profonde melee de respect — pas une peur panique mais une crainte reverentielle. La negation « la takhshawhum » interdit cette crainte envers les hommes — ne les craignez pas. Le pronom « hum » (eux) renvoie aux injustes mentionnes juste avant. Le concept dans word_meanings est nul — c'est un mot a sens unique."
            }
          }
        }
      },
      // kshy pos=31 — craignez-Moi
      {
        word_key: "kshy", position: 31, sense_chosen: "craindre",
        analysis_axes: {
          sense_chosen: "craindre",
          concept_chosen: "Crainte",
          concepts: {
            "Crainte": {
              status: "nul",
              senses: ["craindre"],
              proof_ctx: "Le verbe ikhshawni est un imperatif 2MP de la forme I de la racine kh-sh-y avec pronom suffixe 1S (ni, Moi). Le Lane's donne : craindre, redouter. L'imperatif positif « ikhshawni » (craignez-Moi) contraste avec la negation precedente (la takhshawhum, ne les craignez pas). Le meme verbe est utilise dans les deux cas — seuls la negation et le pronom changent. La crainte doit etre reorientee : pas envers les hommes (eux) mais envers Dieu (Moi). Le concept dans word_meanings est nul — c'est un mot a sens unique."
            }
          }
        }
      },
      // atm pos=33 — pour que Je paracheve
      {
        word_key: "atm", position: 33, sense_chosen: "parfaire",
        analysis_axes: {
          sense_chosen: "parfaire",
          concept_chosen: "Accomplissement/Pl\u00e9nitude",
          concepts: {
            "Accomplissement/Pl\u00e9nitude": {
              status: "nul",
              senses: ["achever", "completer", "parfaire", "mener a terme"],
              proof_ctx: "Le verbe li-utimma est un inaccompli 1S subjonctif de la forme IV de la racine a-t-m avec preposition li. Le Lane's donne : achever, completer, mener a sa plenitude. La forme IV (af'ala) est causative — faire arriver a completion. Le subjonctif avec li exprime le but : « pour que Je paracheve ». Le sujet 1S (Je) est Dieu — c'est Dieu qui paracheve le bienfait. L'achevement est un processus qui arrive a sa completion — le bienfait existait deja mais n'etait pas encore complet. Les concepts dans word_meanings sont tous nuls car ce mot a un sens unique et clair."
            }
          }
        }
      },
      // nem pos=34 — Mon bienfait
      {
        word_key: "nem", position: 34, sense_chosen: "bienfait",
        analysis_axes: {
          sense_chosen: "bienfait",
          concept_chosen: "Bienfait/Faveur",
          concepts: {
            "Bienfait/Faveur": {
              status: "retenu",
              senses: ["bienfait", "faveur", "benediction", "richesse", "accorder un bienfait", "nourrir bien", "combler"],
              proof_ctx: "Le nom ni'mati est un nom feminin singulier accusatif de la racine n-'-m avec pronom suffixe 1S (i, Mon/Ma). Le Lane's donne : bienfait, faveur, don gracieux. Le bienfait (ni'ma) est un don qui procure douceur et aisance a celui qui le recoit. Le pronom « i » (Mon/Ma) rattache le bienfait a Dieu — c'est MON bienfait, le bienfait de Dieu. Le verset lie l'orientation correcte au parachevement du bienfait divin — obeir a l'injonction est la condition pour que Dieu paracheve Son bienfait.",
              axe1_verset: "Le mot ni'mati est l'objet du parachevement — Dieu paracheve Son bienfait. Le verset lie trois finalites : supprimer l'argument des gens, parachevement du bienfait divin, guidance. L'orientation correcte produit ces trois resultats. Le bienfait n'est pas nouveau — il existait deja mais l'obeissance a l'injonction le porte a sa plenitude. Le champ lexical (parachevement, bienfait, guidance) montre que la fin du verset tourne autour de la plenitude et de l'achevement.",
              axe2_voisins: "Le verset 40 disait « souvenez-vous de Mon bienfait dont Je vous ai combles ». Le verset 47 repetait la meme formule. Le verset 150 reprend le theme du bienfait divin — le bienfait est un fil conducteur de la sourate. Le parachevement du bienfait en 2:150 montre que le bienfait est progressif — il est donne, puis complete, puis paracheve.",
              axe3_sourate: "La racine n-'-m est frequente dans la sourate al-Baqarah. En 2:40, 2:47, 2:122, Dieu rappelle Son bienfait aux fils d'Israel. En 2:150, le bienfait est paracheve pour la communaute du Prophete. La sourate montre que le bienfait divin traverse les epoques et les communautes.",
              axe4_coherence: "La racine n-'-m apparait environ 142 fois dans le Coran. En 5:3, « aujourd'hui J'ai paracheve pour vous votre religion et complete sur vous Mon bienfait ». Le meme verbe atamma avec ni'ma apparait en 5:3 et en 2:150 — le parachevement du bienfait est un theme coranique majeur. En 2:150, le parachevement est lie a l'orientation ; en 5:3, il est lie a la completion de la religion.",
              axe5_frequence: "Pour la mission du khalifa, le bienfait divin est le cadre de la mission. Le khalifa accomplit sa mission dans le bienfait de Dieu — ce bienfait n'est pas acquis une fois pour toutes, il est paracheve progressivement a mesure que le khalifa obeit aux injonctions divines."
            },
            "Douceur/Aisance": {
              status: "probable",
              senses: ["douceur", "tendresse", "souplesse", "delicatesse", "vie agreable", "confort", "aisance", "fraicheur", "floraison"],
              proof_ctx: "Le sens de douceur est le sens premier de la racine n-'-m — la douceur, la souplesse, la delicatesse. La distinction philosophique avec le bienfait est que la douceur est la sensation physique (tendre, agreable) tandis que le bienfait est le don qui produit cette sensation. Le mot ni'ma dans ce verset est un nom (bienfait), pas un adjectif de douceur. Mais le bienfait produit la douceur — le sens de douceur sous-tend le bienfait.",
              axe1_verset: "Le sens de douceur pourrait sous-tendre l'idee que le parachevement du bienfait apporte douceur et aisance a la communaute. Mais le contexte immediat est le don divin (Mon bienfait), pas la sensation physique.",
              axe2_voisins: "Les versets voisins parlent du bienfait comme don divin. Le sens de douceur est sous-jacent mais pas dominant dans ce passage.",
              axe3_sourate: "La sourate utilise la racine n-'-m principalement au sens de bienfait divin. Le sens de douceur physique n'est pas au premier plan.",
              axe4_coherence: "Le Coran utilise ni'ma principalement au sens de bienfait et faveur. Le sens physique de douceur est rare dans les occurrences coraniques de ce mot.",
              axe5_frequence: "Pour la mission du khalifa, la douceur est le fruit du bienfait — obéir aux injonctions divines produit une aisance dans la mission."
            }
          }
        }
      },
      // ell pos=37 — pour que vous
      {
        word_key: "ell", position: 37, sense_chosen: "pour que",
        analysis_axes: {
          sense_chosen: "pour que",
          concept_chosen: "Cause/Raison",
          concepts: {
            "Cause/Raison": {
              status: "nul",
              senses: ["cause", "raison", "pretexte"],
              proof_ctx: "Le mot la'allakum est un mot compose de la'alla (peut-etre, pour que) et du pronom suffixe 2MP (kum, vous). Le Lane's donne pour la racine '-l-l : cause, raison, pretexte. Mais le mot la'alla fonctionne dans le Coran comme une particule d'esperance et de but — « pour que peut-etre vous ». Les concepts dans word_meanings pour cette racine sont tous nuls car le mot fonctionne comme un outil grammatical exprimant l'esperance ou le but. Le sens de cause est le plus proche — la'alla introduit la finalite esperee."
            },
            "Maladie/Faiblesse": {
              status: "nul",
              senses: ["maladie", "malade"],
              proof_ctx: "Le sens de maladie est un sens de la racine '-l-l — la maladie comme cause de faiblesse. Le mot la'alla dans ce verset est une particule d'esperance, pas un nom de maladie."
            }
          }
        }
      },
      // hdy pos=38 — soyez guides
      {
        word_key: "hdy", position: 38, sense_chosen: "se guider",
        analysis_axes: {
          sense_chosen: "se guider",
          concept_chosen: "Guidance/Direction",
          concepts: {
            "Guidance/Direction": {
              status: "retenu",
              senses: ["guider", "diriger vers la bonne voie", "montrer le chemin", "guidance", "se guider soi-meme"],
              proof_ctx: "Le verbe tahtaduna est un inaccompli 2MP de la forme VIII de la racine h-d-y. Le Lane's donne : se guider soi-meme, trouver la guidance, etre guide. La forme VIII (ifta'ala) est reflexive — se guider, trouver la guidance par ses propres efforts. L'inaccompli marque une action continue et en cours — la guidance n'est pas un etat ponctuel mais un processus continu. Le 2MP (vous) designe la communaute entiere. Le verset ferme sur cette esperance — la guidance est le resultat final de toute la chaine : orientation → suppression de l'argument → parachevement du bienfait → guidance.",
              axe1_verset: "Le verbe tahtaduna ferme le verset et le passage entier de la qibla (2:142-150). La guidance est le dernier mot — le but ultime de toutes les injonctions precedentes. La chaine du verset est : tournez vos visages → pour que les gens n'aient pas d'argument → craignez-Moi → pour que Je paracheve Mon bienfait → pour que vous soyez guides. La guidance est l'aboutissement de tout le processus. Le champ lexical de la fin du verset (parachevement, bienfait, guidance) montre que le verset s'acheve sur la plenitude.",
              axe2_voisins: "Le verset 143 mentionnait « Dieu n'allait pas faire perdre votre foi ». Le verset 144 donnait la premiere injonction de la qibla. Le verset 150 ferme le passage par la promesse de guidance — le passage 2:142-150 est encadre par la question (qui les a detournes?) et la reponse (pour que vous soyez guides). La guidance est la reponse finale a toutes les objections.",
              axe3_sourate: "La racine h-d-y est une des racines les plus importantes de la sourate al-Baqarah. En 2:2, « guidance pour les craignants ». En 2:5, « ceux-la sont sur la guidance de leur Seigneur ». En 2:38, « celui qui suit Ma guidance n'aura rien a craindre ». La sourate est fondamentalement un discours sur la guidance — qui est guide, qui refuse la guidance, comment trouver la guidance. Le verset 150 s'inscrit dans ce theme central.",
              axe4_coherence: "La racine h-d-y apparait environ 316 fois dans le Coran. La forme VIII (ihtada, se guider) souligne la dimension reflexive — la guidance n'est pas passive, elle demande un effort du sujet. En 7:178, « celui que Dieu guide est le bien guide ». La guidance est un don divin mais qui demande la cooperation humaine — se tourner vers le lieu sacre est un acte de cooperation qui ouvre la porte a la guidance.",
              axe5_frequence: "Pour la mission du khalifa, la guidance est le but de la mission. Tout ce que le khalifa fait — s'orienter, obeir, ne pas craindre les hommes, craindre Dieu — vise la guidance. La forme reflexive (se guider) montre que la guidance n'est pas imposee — le khalifa doit la chercher activement. L'orientation vers le lieu sacre est un pas dans cette recherche active de la guidance."
            },
            "Conduite/Comportement": {
              status: "nul",
              senses: ["conduite", "maniere d'agir", "comportement calme"],
              proof_ctx: "Le sens de conduite est un sens secondaire de h-d-y. Le contexte est la guidance spirituelle (se guider vers la bonne voie), pas le comportement social."
            },
            "Don/Offrande": {
              status: "nul",
              senses: ["cadeau", "offrande", "sacrifice", "present"],
              proof_ctx: "Le sens de cadeau est un sens derive de h-d-y — le hady est l'animal offert en sacrifice. Le contexte est la guidance, pas le sacrifice."
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

  const verseIds = [156, 157];
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
  console.log('=== PIPELINE SOURATE 2 — VERSETS 149-150 ===\n');
  await processVerse(149);
  await processVerse(150);
  await syncWordMeanings();
  console.log('\n=== PIPELINE V149-150 TERMINEE ===');
}

main().catch(e => console.error('FATAL:', e));
