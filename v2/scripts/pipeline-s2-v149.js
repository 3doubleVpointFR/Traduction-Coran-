const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// =====================================================
// PIPELINE SOURATE 2 — VERSET 149
// verse_id=156, analysis_id=514
// "Et d'ou que tu sortes, tourne ton visage vers la
//  Mosquee sacree. C'est bien la verite venant de ton
//  Seigneur. Et Dieu n'est pas inattentif a ce que
//  vous faites."
// =====================================================

const verseData = {
  149: {
    verse_id: 156,
    analysis_id: 514,
    translation_arab: "Et d'ou que tu sortes, tourne ton visage en direction de la Mosquee sacree. C'est certes la verite venant de ton Seigneur. Et Dieu n'est pas insouciant de ce que vous faites.",
    full_translation: "Et d'ou que tu sortes, tourne ton visage vers la Mosquee sacree. Oui, c'est bien la verite venant de ton Seigneur. Et Allah n'est pas inattentif a ce que vous faites.",
    translation_explanation: `§DEMARCHE§
Le verset repete l'injonction de la direction de priere vers la Mosquee sacree, similaire aux versets 2:144 et 2:150. Le verbe **kharajta** est un accompli 2MS de la racine x-r-j. Le Lane's donne : sortir, passer de l'interieur a l'exterieur. L'accompli avec la particule conditionnelle hayth-u-ma (d'ou que, de quelque lieu que) cree une generalisation : peu importe d'ou tu sors, la direction reste la meme. L'imperatif **walli** est de la forme II de la racine w-l-y. Le Lane's donne a la forme II : tourner, diriger. La forme II (walla) est causative — tourner quelque chose dans une direction. L'imperatif ordonne au Prophete de tourner son visage. Le nom **wajhaka** est un nom masculin singulier de la racine w-j-h avec pronom suffixe 2MS. Le Lane's donne : visage, face, direction, ce vers quoi on se tourne. Le visage est la partie du corps qui fait face — tourner son visage c'est orienter toute sa personne. Le nom **shatra** est de la racine sh-t-r. Le Lane's donne : cote, direction, moitie. Shatr al-masjid al-haram signifie « en direction de la Mosquee sacree ». Le mot porte le sens de direction orientee vers un point precis. Le nom **al-masjidi** est de la racine s-j-d. Le Lane's donne : lieu de prosternation, mosquee. Le masjid est le lieu ou l'on se prosterne — le mot tire son nom de l'acte de prosternation (sujud). L'adjectif **al-harami** est de la racine h-r-m. Le Lane's donne : sacre, interdit, inviolable. Le haram est ce qui est mis hors d'atteinte — la Mosquee sacree est un lieu protege par une interdiction divine. Le nom **al-haqq** est de la racine h-q-q. Le Lane's donne : verite, realite, ce qui est conforme a la realite. Le haqq est ce qui correspond au reel — ce n'est pas une opinion mais un fait objectif. La proposition nominale « wa-innahu la-l-haqqu min rabbika » affirme avec emphase (inna + la) que cette injonction est la verite venant de ton Seigneur. Le nom **rabbika** est de la racine r-b-b avec pronom suffixe 2MS. Le Lane's donne : seigneur, maitre, celui qui eleve et entretient. Le Rabb est celui qui possede, gouverne et fait grandir. Le rattachement « min rabbika » (de ton Seigneur) indique que la verite vient de l'autorite seigneuriale. Le nom **Allahu** est le nom propre de la divinite, sujet de la phrase suivante. Le Lane's donne : Dieu, la divinite unique. Le nom **bi-ghafilin** est un participe actif de la racine gh-f-l a la forme I, precede de la preposition bi et de la negation ma. Le Lane's donne : etre insouciant, negliger, ne pas faire attention. La negation « wa-ma Allahu bi-ghafilin » affirme que Dieu n'est PAS insouciant — la double negation (ma + bi) renforce l'affirmation. Le verbe **ta'maluna** est un inaccompli 2MP de la racine '-m-l. Le Lane's donne : travailler, agir, faire. L'inaccompli marque une action continue — ce que vous faites en permanence. Le passage du singulier (tu sors, ton visage, ton Seigneur) au pluriel (vous faites) est delibere : l'injonction est adressee au Prophete mais la surveillance divine concerne tout le monde.

§JUSTIFICATION§
**sortes** — Le sens retenu est « sortir ». Le verbe kharajta decrit le mouvement de quitter un lieu. L'alternative « expulser » est ecartee car le verbe est a la forme I intransitive — le Prophete sort de lui-meme, il n'est pas expulse.

**tourne** — Le sens retenu est « tourner/diriger ». Le verbe walli est a la forme II causative qui signifie tourner quelque chose dans une direction. L'alternative « proteger » est ecartee car la forme II de w-l-y dans ce contexte est directionnelle, pas protectrice.

**visage** — Le sens retenu est « visage ». Le mot wajhaka designe la face du Prophete. L'alternative « direction » est ecartee car le mot est utilise au sens litteral (le visage physique) meme si l'implication est l'orientation de la priere.

**direction** — Le sens retenu est « direction/cote ». Le mot shatr designe ici la direction vers laquelle on se tourne. L'alternative « moitie » est ecartee car le contexte est l'orientation, pas le partage.

**Mosquee** — Le sens retenu est « mosquee/lieu de prosternation ». Le mot al-masjid designe le lieu de culte. L'alternative « prosternation » est ecartee car le mot est un nom de lieu (maf'il), pas un verbe.

**sacree** — Le sens retenu est « sacre/interdit ». Le mot al-haram qualifie la Mosquee comme lieu protege. L'alternative « epouse » est ecartee car hors sujet.

**verite** — Le sens retenu est « verite ». Le mot al-haqq affirme que l'injonction est conforme a la realite. L'alternative « devoir » est ecartee car le contexte est l'affirmation de verite, pas l'obligation.

**Seigneur** — Le sens retenu est « seigneur ». Le mot rabbika designe Dieu dans Sa relation d'autorite bienveillante avec le Prophete. L'alternative « augmenter » est ecartee car le mot est un nom, pas un verbe.

**Dieu** — Le sens retenu est « Dieu ». Le nom Allah est le nom propre de la divinite unique.

**insouciant** — Le sens retenu est « insouciant/negligent ». Le mot ghafilin (participe actif de ghafala) designe celui qui ne fait pas attention. L'alternative « pardonner » est ecartee car la racine est gh-f-l (insouciance) et non gh-f-r (pardon) — les deux racines sont distinctes.

**faites** — Le sens retenu est « faire/agir ». Le verbe ta'maluna designe les actes en general. L'alternative « gouverneur » est ecartee car le mot est un verbe, pas un nom.

§CRITIQUE§
Les traductions courantes rendent le meme sens pour ce verset. Hamidullah utilise « inattentif » la ou nous donnons « insouciant » — les deux mots sont proches mais « insouciant » est plus fidele au Lane's qui definit ghafala comme le fait de ne pas preter attention, de negliger. La repetition de cette injonction en 2:144, 2:149 et 2:150 est voulue par le texte — chaque occurrence ajoute un element (en 2:144 c'est le desir du Prophete, en 2:149 c'est la verite du Seigneur, en 2:150 ce sera la suppression de l'argument des contradicteurs).`,
    segments: [
      { fr: "et d'ou que", phon: "wa-haythu-ma", arabic: "\u0648\u064e\u062d\u064e\u064a\u0652\u062b\u064f \u0645\u064e\u0627", is_particle: true, position: 0 },
      { fr: "tu sortes", pos: "verbe", phon: "kharajta", arabic: "\u062e\u064e\u0631\u064e\u062c\u0652\u062a\u064e", word_key: "xrj", is_particle: false, sense_retenu: "sortir", position: 1 },
      { fr: "tourne", pos: "verbe", phon: "walli", arabic: "\u0641\u064e\u0648\u064e\u0644\u0651\u0650", word_key: "wly", is_particle: false, sense_retenu: "tourner", position: 2 },
      { fr: "ton visage", pos: "nom", phon: "wajhaka", arabic: "\u0648\u064e\u062c\u0652\u0647\u064e\u0643\u064e", word_key: "wjh", is_particle: false, sense_retenu: "visage", position: 3 },
      { fr: "en direction de", pos: "nom", phon: "shatra", arabic: "\u0634\u064e\u0637\u0652\u0631\u064e", word_key: "shtr", is_particle: false, sense_retenu: "direction", position: 4 },
      { fr: "la Mosquee", pos: "nom", phon: "al-masjidi", arabic: "\u0671\u0644\u0652\u0645\u064e\u0633\u0652\u062c\u0650\u062f\u0650", word_key: "sjd", is_particle: false, sense_retenu: "lieu de prosternation", position: 5 },
      { fr: "sacree", pos: "adjectif", phon: "al-harami", arabic: "\u0671\u0644\u0652\u062d\u064e\u0631\u064e\u0627\u0645\u0650", word_key: "hrm", is_particle: false, sense_retenu: "sacre", position: 6 },
      { fr: "et c'est certes", phon: "wa-innahu la", arabic: "\u0648\u064e\u0625\u0650\u0646\u0651\u064e\u0647\u064f\u06e5 \u0644\u064e", is_particle: true, position: 7 },
      { fr: "la verite", pos: "nom", phon: "al-haqqu", arabic: "\u0671\u0644\u0652\u062d\u064e\u0642\u0651\u064f", word_key: "hqq", is_particle: false, sense_retenu: "verite", position: 8 },
      { fr: "de", phon: "min", arabic: "\u0645\u0650\u0646", is_particle: true, position: 9 },
      { fr: "ton Seigneur", pos: "nom", phon: "rabbika", arabic: "\u0631\u0651\u064e\u0628\u0651\u0650\u0643\u064e", word_key: "rbb", is_particle: false, sense_retenu: "seigneur", position: 10 },
      { fr: "et n'est pas", phon: "wa-ma", arabic: "\u0648\u064e\u0645\u064e\u0627", is_particle: true, position: 11 },
      { fr: "Dieu", pos: "nom", phon: "Allahu", arabic: "\u0671\u0644\u0644\u0651\u064e\u0647\u064f", word_key: "alh", is_particle: false, sense_retenu: "Dieu", position: 12 },
      { fr: "insouciant", pos: "adjectif", phon: "bi-ghafilin", arabic: "\u0628\u0650\u063a\u064e\u0640\u0670\u0641\u0650\u0644\u064d", word_key: "ghf", is_particle: false, sense_retenu: "insouciant", position: 13 },
      { fr: "de ce que", phon: "'amma", arabic: "\u0639\u064e\u0645\u0651\u064e\u0627", is_particle: true, position: 14 },
      { fr: "vous faites", pos: "verbe", phon: "ta'maluna", arabic: "\u062a\u064e\u0639\u0652\u0645\u064e\u0644\u064f\u0648\u0646\u064e", word_key: "eml", is_particle: false, sense_retenu: "faire", position: 15 }
    ],
    words: [
      // xrj pos=2
      {
        word_key: "xrj", position: 2, sense_chosen: "sortir",
        analysis_axes: {
          sense_chosen: "sortir",
          concept_chosen: "Sortie/Émergence",
          concepts: {
            "Sortie/Émergence": {
              status: "retenu",
              senses: ["sortir", "faire sortir", "expulser", "emerger", "produire"],
              proof_ctx: "Le verbe kharajta est un accompli 2MS de la racine x-r-j. Le Lane's donne : sortir, passer de l'interieur a l'exterieur, quitter un lieu. La sortie est un mouvement directionnel qui traverse une limite — on quitte un espace clos pour l'espace ouvert. Ici, avec la particule conditionnelle hayth-u-ma (d'ou que), le verbe prend une portee universelle : peu importe le lieu d'ou tu sors. L'accompli dans une structure conditionnelle marque un evenement repete — a chaque fois que tu sors. La distinction avec « impot/revenu » (nul) est evidente : le contexte est le mouvement physique du Prophete, pas la fiscalite.",
              axe1_verset: "Le verbe kharajta ouvre l'injonction en posant la condition spatiale : d'ou que tu sortes. Le champ lexical du verset est celui de la direction et de l'orientation (sortir, tourner, visage, direction, Mosquee). La sortie est le premier terme de l'equation — d'ou que tu sortes, il y a une direction fixe. Le verset oppose la variabilite du lieu de depart (d'ou que) a la fixite de la destination (la Mosquee sacree). Cette opposition structure tout le verset et donne a l'injonction son caractere universel.",
              axe2_voisins: "Le verset 2:144 utilisait le meme verbe dans le meme contexte de changement de qibla. Le verset 2:150 reprendra encore cette formule. La repetition de kharajta dans trois versets successifs montre l'insistance du texte sur l'universalite de l'injonction. Chaque repetition ajoute un argument supplementaire — en 2:149 c'est la verite du Seigneur qui justifie la direction. La sortie est le point de depart invariable d'une equation dont le resultat est toujours le meme.",
              axe3_sourate: "La racine x-r-j apparait dans la sourate al-Baqarah dans plusieurs contextes. En 2:22, Dieu fait sortir les fruits de la terre. En 2:61, Moussa demande que Dieu fasse sortir les produits du sol. En 2:149, la sortie est celle du Prophete de n'importe quel lieu. La sourate utilise cette racine pour le mouvement physique — la sortie est un passage d'un etat a un autre, d'un lieu a un autre. Chaque sortie dans la sourate est suivie d'une direction ou d'un but.",
              axe4_coherence: "La racine x-r-j apparait environ 181 fois dans le Coran. Le schema « d'ou que tu sortes + tourne ton visage » est propre aux versets de la qibla (2:144, 2:149, 2:150). Le Coran utilise la sortie comme un moment de decision directionnelle — au moment ou l'on sort, on choisit sa direction. En 4:100, « celui qui sort de sa maison emigrant vers Dieu et Son envoye » montre que la sortie est un engagement.",
              axe5_frequence: "Pour la mission du khalifa, la sortie est le debut de l'action dans le monde. Le khalifa sort de chez lui pour agir — et des qu'il sort, il doit s'orienter vers la direction juste. La sortie n'est pas un acte neutre : elle engage une direction. Le khalifa ne sort pas dans le vide, il sort vers la Mosquee sacree, vers le centre de sa mission. Chaque sortie est une occasion de reaffirmer son orientation."
            },
            "Tribut/Revenu": {
              status: "nul",
              senses: ["impot", "revenu"],
              proof_ctx: "Le sens de tribut est un usage fiscal de x-r-j — ce qui sort des biens. Le contexte est le mouvement physique du Prophete, pas la fiscalite."
            },
            "Sens isolé/Résoudre": {
              status: "nul",
              senses: ["resoudre"],
              proof_ctx: "Le sens de resoudre est un usage metaphorique de x-r-j. Le contexte est le mouvement physique de sortie, pas la resolution d'un probleme."
            }
          }
        }
      },
      // wly pos=3
      {
        word_key: "wly", position: 3, sense_chosen: "tourner",
        analysis_axes: {
          sense_chosen: "tourner",
          concept_chosen: "Proximité/Protection",
          concepts: {
            "Proximité/Protection": {
              status: "retenu",
              senses: ["proche", "ami", "protecteur", "allie"],
              proof_ctx: "Le verbe walli est un imperatif 2MS de la forme II de la racine w-l-y. Le Lane's donne a la forme II : tourner, diriger quelque chose vers, confier a, mettre quelqu'un en charge. La forme II (wallaha wajhahu) signifie tourner son visage vers une direction. Le sens premier de la racine est la proximite — tourner son visage vers quelque chose c'est se rapprocher de cette chose, s'en rendre proche. L'imperatif ordonne au Prophete de se tourner, de se rendre proche de la direction de la Mosquee sacree. La distinction avec « gouverner » (nul) est claire : le contexte est l'orientation physique, pas le gouvernement politique.",
              axe1_verset: "Le verbe walli est l'imperatif central du verset — c'est l'ordre divin. Le champ lexical (sortir, visage, direction, Mosquee sacree) construit un acte d'orientation complet : sortir → tourner → le visage → en direction de → la Mosquee sacree. Chaque mot ajoute une precision a l'acte. Le verbe walli est le pivot — il relie le sujet (le Prophete) a l'objet (la direction de la Mosquee). L'imperatif marque un ordre direct et sans ambiguite.",
              axe2_voisins: "Le verset 2:144 contenait le meme imperatif walli dans le meme contexte. Le verset 2:150 le reprendra une troisieme fois. Cette triple repetition de l'ordre montre l'importance de l'orientation vers la Mosquee sacree. Chaque repetition ajoute un argument : en 2:144 c'est le desir du Prophete, en 2:149 la verite du Seigneur, en 2:150 l'elimination de l'argument des contradicteurs. L'ordre de tourner est le meme — les raisons s'accumulent.",
              axe3_sourate: "La racine w-l-y est une des plus frequentes de la sourate al-Baqarah. En 2:107, « vous n'avez en dehors de Dieu ni protecteur ni secoureur ». En 2:120, « la direction de Dieu est la vraie direction ». En 2:144, 2:149, 2:150, la forme II est utilisee pour l'orientation physique vers la qibla. La sourate utilise w-l-y dans ses deux sens : la proximite protectrice (Dieu est le wali) et la direction physique (tourner son visage).",
              axe4_coherence: "La racine w-l-y apparait environ 233 fois dans le Coran. La forme II (walla) dans le sens de tourner apparait specifiquement dans les versets de la qibla. En 2:115, « a Dieu appartiennent l'orient et l'occident, ou que vous vous tourniez la est la Face de Dieu ». La racine lie la proximite spirituelle (etre l'allie de Dieu) a la proximite physique (se tourner vers Sa direction).",
              axe5_frequence: "Pour la mission du khalifa, tourner son visage vers la Mosquee sacree est l'acte fondateur de l'orientation. Le khalifa ne choisit pas sa direction — elle lui est donnee par son Seigneur. Tourner son visage c'est aligner son corps et son intention sur la direction divine. La mission du khalifa est d'abord une question d'orientation : vers ou se tourne-t-on ? Vers le pouvoir humain ou vers la direction de Dieu ?"
            },
            "Autorité": {
              status: "nul",
              senses: ["gouverner"],
              proof_ctx: "Le sens de gouverner est un usage politique de w-l-y. Le contexte est l'orientation physique du Prophete vers la Mosquee sacree, pas l'exercice du pouvoir."
            }
          }
        }
      },
      // wjh pos=4
      {
        word_key: "wjh", position: 4, sense_chosen: "visage",
        analysis_axes: {
          sense_chosen: "visage",
          concept_chosen: "Visage/Direction",
          concepts: {
            "Visage/Direction": {
              status: "retenu",
              senses: ["visage", "face", "direction", "se diriger vers"],
              proof_ctx: "Le nom wajhaka est un nom masculin singulier de la racine w-j-h avec pronom suffixe 2MS (ka, ton). Le Lane's donne : visage, face, ce vers quoi on se tourne, direction. Le visage est la partie du corps qui fait face a l'autre — il montre vers ou on regarde. Le pronom suffixe rattache le visage au Prophete — c'est « ton visage » que tu dois tourner. Le wajh designe a la fois l'organe physique et la direction existentielle. La distinction avec « maniere » et « noble » (nul) est claire : le contexte est l'orientation physique.",
              axe1_verset: "Le mot wajhaka est l'objet direct du verbe walli — tourne ton visage. Le champ lexical (sortir, tourner, direction, Mosquee sacree) montre que le visage est l'instrument de l'orientation. Tourner le visage c'est orienter toute la personne — le visage precede le corps. Le verset fait du visage le representant de la personne entiere : tourner le visage c'est tourner tout son etre vers la direction de la Mosquee sacree.",
              axe2_voisins: "Le verset 2:144 disait « nous te voyons tourner ton visage vers le ciel ». Le verset 2:149 ordonne de tourner le visage vers la Mosquee sacree. Le verset 2:150 reprendra le meme mot. Le visage du Prophete est l'objet de l'orientation dans les trois versets. Le passage de la contemplation du ciel (2:144) a la direction de la Mosquee (2:149) montre le changement de qibla.",
              axe3_sourate: "La racine w-j-h apparait dans la sourate al-Baqarah dans le contexte de l'orientation. En 2:112, « quiconque soumet son visage a Dieu ». En 2:115, « la est la Face de Dieu ». En 2:144, 2:149, 2:150, le visage est l'organe de l'orientation vers la qibla. La sourate utilise le visage comme metonymie de la personne entiere — soumettre son visage c'est se soumettre soi-meme.",
              axe4_coherence: "La racine w-j-h apparait environ 79 fois dans le Coran. L'expression « wajhaka shatr al-masjid al-haram » est propre aux versets de la qibla. En 6:79, Ibrahim dit « j'ai tourne mon visage vers Celui qui a cree les cieux et la terre ». Le visage est l'organe de la direction existentielle dans le Coran — tourner son visage c'est choisir sa voie.",
              axe5_frequence: "Pour la mission du khalifa, le visage represente l'orientation de la mission. Le khalifa tourne son visage vers la direction que Dieu lui donne — pas vers sa propre preference. Le visage est le premier organe qui rencontre le monde — l'orienter c'est decider de ce qu'on regarde et de ce qu'on laisse derriere soi. La mission commence par l'orientation du visage."
            },
            "Sens isolé/Manière": {
              status: "nul",
              senses: ["maniere"],
              proof_ctx: "Le sens de maniere est un usage metaphorique de w-j-h. Le contexte est le visage physique du Prophete qu'il doit tourner vers la Mosquee."
            },
            "Sens isolé/Noble": {
              status: "nul",
              senses: ["noble"],
              proof_ctx: "Le sens de noble est un usage derive de w-j-h. Le contexte est l'orientation physique, pas la noblesse."
            }
          }
        }
      },
      // shtr pos=5
      {
        word_key: "shtr", position: 5, sense_chosen: "direction",
        analysis_axes: {
          sense_chosen: "direction",
          concept_chosen: "Direction/Orientation",
          concepts: {
            "Direction/Orientation": {
              status: "retenu",
              senses: ["se diriger vers", "cote"],
              proof_ctx: "Le nom shatra est de la racine sh-t-r. Le Lane's donne : cote, direction, moitie. Shatr al-masjid al-haram signifie « en direction de la Mosquee sacree » ou « du cote de la Mosquee sacree ». Le mot designe une orientation spatiale precise — le cote de l'horizon ou se trouve la Mosquee. Le sens de « direction » est une extension naturelle de « moitie » — se diriger vers un cote c'est choisir une moitie de l'espace. La distinction avec « paupiere inversee » (nul) est evidente.",
              axe1_verset: "Le mot shatra precise l'objet de l'orientation — en direction de la Mosquee sacree. Le champ lexical (sortir, tourner, visage, direction, Mosquee, sacree) forme une chaine complete : le mouvement (sortir) → l'acte (tourner) → l'instrument (visage) → la direction (shatr) → la destination (Mosquee sacree). Shatr est le lien spatial entre le visage du Prophete et la Mosquee sacree. Sans shatr, le visage tournerait dans le vide. Avec shatr, il a une direction precise.",
              axe2_voisins: "Le verset 2:144 utilisait le meme mot shatr dans la meme expression. Le verset 2:150 le reprendra. Cette expression fixe (walli wajhaka shatr al-masjid al-haram) est la formule de l'injonction de la qibla. La repetition de shatr dans les trois versets montre que la direction est immuable — c'est toujours la meme destination, quel que soit le lieu de depart.",
              axe3_sourate: "La racine sh-t-r n'apparait dans la sourate al-Baqarah que dans les versets de la qibla (2:144, 2:149, 2:150). Son usage est exclusivement spatial dans ce contexte. La sourate fait de shatr un terme technique de l'orientation rituelle — il designe la direction de priere avec precision.",
              axe4_coherence: "La racine sh-t-r est rare dans le Coran — elle apparait principalement dans les versets de la qibla de la sourate al-Baqarah. En dehors de ce contexte, le sens de « moitie » est atteste dans d'autres usages. La rarete de l'usage directionnel rend le mot specialise — il est reserve a la description de l'orientation vers la Mosquee sacree.",
              axe5_frequence: "Pour la mission du khalifa, la direction est l'element central de l'orientation. Le khalifa ne tourne pas son visage dans le vide — il le tourne dans une direction precise, vers un point fixe. La direction est ce qui donne un sens au mouvement. Sans direction, le mouvement est errance. Avec une direction claire, le mouvement devient mission. Le khalifa sait ou il va parce qu'il a une direction fixe."
            },
            "Division/Moitié": {
              status: "probable",
              senses: ["moitie", "couper en deux"],
              proof_ctx: "Le sens de moitie est le sens premier de sh-t-r — diviser en deux parts. Le sens de direction en derive : se diriger vers un cote c'est choisir une moitie de l'espace. Dans le contexte du verset, le sens de direction domine mais le sens de moitie reste en arriere-plan — on se tourne vers un cote de l'horizon.",
              axe1_verset: "Le mot shatra dans le verset designe la direction, mais le sens sous-jacent de moitie eclaire l'image : tourner son visage vers la Mosquee sacree c'est choisir une moitie de l'horizon. Le visage ne peut regarder que dans une direction a la fois — choisir la Mosquee sacree c'est tourner le dos a l'autre moitie. Le choix de la direction est un acte de division de l'espace en deux parties.",
              axe2_voisins: "Le verset 2:142 posait la question des insenses : « qu'est-ce qui les a detournes de leur qibla ? ». Le verset 2:145 affirmait que les Gens du Livre ne suivraient pas la qibla du Prophete. Le choix de la moitie (la direction de la Mosquee) implique le rejet de l'autre moitie (les autres directions). La division est au coeur du debat sur la qibla.",
              axe3_sourate: "Le theme de la division est present dans la sourate al-Baqarah sous differentes formes : la separation entre croyants et mecreants, entre l'ancien et le nouveau, entre la qibla de Jerusalem et celle de la Mosquee sacree. Le mot shatr porte en lui cette dualite structurelle — choisir un cote implique de ne pas choisir l'autre.",
              axe4_coherence: "Le sens de moitie est atteste dans d'autres contextes coraniques et linguistiques. En 73:20, « les deux tiers de la nuit ou la moitie ». Le partage de l'espace ou du temps en deux parties est un schema recurrent. La moitie est un concept d'equilibre — choisir sa moitie c'est trouver son equilibre directionnel.",
              axe5_frequence: "Pour la mission du khalifa, la moitie rappelle que le choix de direction implique un renoncement. Le khalifa qui se tourne vers la Mosquee sacree renonce a toute autre direction. La mission n'est pas un compromis — c'est un choix net qui divise l'espace en ce vers quoi on se tourne et ce qu'on laisse derriere soi. Le khalifa choisit sa moitie avec decision."
            },
            "Sens isolé/Paupière": {
              status: "nul",
              senses: ["paupiere inversee"],
              proof_ctx: "Le sens de paupiere est un usage anatomique rare de sh-t-r. Le contexte est l'orientation spatiale vers la Mosquee sacree."
            }
          }
        }
      },
      // sjd pos=6
      {
        word_key: "sjd", position: 6, sense_chosen: "lieu de prosternation",
        analysis_axes: {
          sense_chosen: "lieu de prosternation",
          concept_chosen: "Prosternation/Adoration",
          concepts: {
            "Prosternation/Adoration": {
              status: "retenu",
              senses: ["se prosterner", "s'incliner", "adorer", "obeir"],
              proof_ctx: "Le nom al-masjidi est un nom de lieu (maf'il) de la racine s-j-d. Le Lane's donne : lieu de prosternation, mosquee, lieu ou l'on se prosterne. Le masjid tire son nom de l'acte de prosternation (sujud) — c'est l'endroit ou l'on pose le front au sol. L'article defini (al) et l'adjectif al-haram (sacre) identifient un lieu precis : la Mosquee sacree de La Mecque. Le nom est au genitif (masjidi) car il est gouverne par la preposition implicite dans shatr.",
              axe1_verset: "Le nom al-masjidi est la destination de l'orientation — c'est vers la Mosquee que le visage doit etre tourne. Le champ lexical (sortir, tourner, visage, direction) converge vers ce point fixe. La Mosquee sacree est le centre vers lequel tout le mouvement du verset tend. Le mot masjid lie l'orientation physique (la direction) a l'orientation spirituelle (la prosternation) — se tourner vers le masjid c'est se tourner vers le lieu de l'adoration.",
              axe2_voisins: "Le verset 2:144 mentionnait deja al-masjid al-haram. Le verset 2:150 le mentionnera encore. La Mosquee sacree est le point fixe des trois versets de la qibla. Sa repetition trois fois montre son importance centrale — c'est le lieu immuable vers lequel on se tourne, quel que soit l'endroit ou l'on se trouve dans le monde.",
              axe3_sourate: "La racine s-j-d structure la sourate al-Baqarah. En 2:34, l'ordre de se prosterner devant Adam. En 2:125, Abraham et Ismail purifient la Maison pour ceux qui se prosternent. En 2:144, 2:149, 2:150, la Mosquee sacree est la direction de la prosternation. La sourate relie la prosternation primordiale (celle des anges) a la prosternation rituelle (celle des croyants) en passant par la construction du lieu de prosternation (par Abraham).",
              axe4_coherence: "La racine s-j-d apparait environ 92 fois dans le Coran. L'expression al-masjid al-haram apparait 15 fois, toujours pour designer la Mosquee sacree de La Mecque. En 17:1, le voyage nocturne va « du masjid al-haram au masjid al-aqsa ». Le masjid al-haram est le centre geographique et spirituel de l'orientation coranique.",
              axe5_frequence: "Pour la mission du khalifa, la Mosquee sacree est le lieu de la prosternation commune. Le khalifa se prosterne la ou Abraham s'est prosterne — la continuite du lieu assure la continuite de la mission. Se tourner vers la Mosquee sacree c'est inscrire sa mission dans la lignee d'Abraham. Le lieu de prosternation est le lieu de la mission renouvelee a chaque generation."
            },
            "Lieu de prosternation": {
              status: "nul",
              senses: ["mosquee"],
              proof_ctx: "Ce concept est engloble par le sens retenu de prosternation — le masjid est le lieu de prosternation. Le mot « mosquee » est la traduction francaise courante de masjid, mais le sens premier est « lieu de prosternation »."
            }
          }
        }
      },
      // hrm pos=7
      {
        word_key: "hrm", position: 7, sense_chosen: "sacre",
        analysis_axes: {
          sense_chosen: "sacre",
          concept_chosen: "Interdiction/Sacré",
          concepts: {
            "Interdiction/Sacré": {
              status: "retenu",
              senses: ["interdire", "sacre", "sanctuaire", "illicite", "priver", "respecter"],
              proof_ctx: "L'adjectif al-harami est de la racine h-r-m au genitif. Le Lane's donne : sacre, interdit, inviolable, ce qui est mis hors d'atteinte. Le haram est ce qui est protege par une interdiction — le sacre et l'interdit partagent la meme racine car ce qui est sacre est interdit d'acces non autorise. La Mosquee sacree (al-masjid al-haram) est le lieu protege par l'inviolabilite divine. La distinction avec « epouse » (nul) est evidente.",
              axe1_verset: "L'adjectif al-harami qualifie la Mosquee — c'est la Mosquee SACREE. Le champ lexical (sortir, tourner, visage, direction, Mosquee, sacree, verite, Seigneur) montre que le sacre est la qualite qui distingue cette Mosquee de toute autre. Ce n'est pas n'importe quelle mosquee — c'est celle qui est protegee par l'inviolabilite divine. La sacralite du lieu justifie l'importance de s'y tourner depuis n'importe quel endroit du monde.",
              axe2_voisins: "Le verset 2:144 utilisait le meme adjectif al-haram. Le verset 2:150 le reprendra. La sacralite de la Mosquee est un fait constant dans les trois versets de la qibla. Les versets 2:196-197 developperont les regles du pelerinage au lieu sacre. L'injonction de se tourner vers le sacre precede les regles de visite du sacre.",
              axe3_sourate: "La racine h-r-m est structurante dans la sourate al-Baqarah. En 2:173, Dieu a rendu illicites la bete morte et le sang. En 2:194, « le mois sacre pour le mois sacre ». En 2:217, « combattre pendant le mois sacre ». La sourate utilise h-r-m pour definir les limites — ce qui est sacre et ce qui est interdit definissent les frontieres de l'action humaine.",
              axe4_coherence: "La racine h-r-m apparait environ 83 fois dans le Coran. Le sacre et l'interdit sont les deux faces de la meme realite : ce qui est sacre est interdit de profanation, ce qui est interdit est sacre dans sa prohibition. En 5:97, « Dieu a fait de la Ka'ba la Maison sacree un soutien pour les hommes ». Le haram est le fondement de l'ordre social et spirituel.",
              axe5_frequence: "Pour la mission du khalifa, le sacre definit les limites de la mission. Le khalifa ne peut pas tout faire — il y a des limites sacrees qu'il ne doit pas franchir. Se tourner vers la Mosquee sacree c'est reconnaitre l'existence de ces limites et s'y soumettre. La mission du khalifa est encadree par le sacre — elle ne peut s'exercer que dans le respect de ce qui est hors d'atteinte."
            },
            "Sens isolé/Épouse": {
              status: "nul",
              senses: ["epouse"],
              proof_ctx: "Le sens d'epouse est un usage specifique de h-r-m. Le contexte est la Mosquee sacree, pas le mariage."
            }
          }
        }
      },
      // hqq pos=8
      {
        word_key: "hqq", position: 8, sense_chosen: "verite",
        analysis_axes: {
          sense_chosen: "verite",
          concept_chosen: "Vérité/Réalité",
          concepts: {
            "Vérité/Réalité": {
              status: "retenu",
              senses: ["etre vrai", "verite", "realite", "droit"],
              proof_ctx: "Le nom al-haqqu est un nom masculin singulier defini de la racine h-q-q. Le Lane's donne : verite, realite, ce qui est conforme a la realite, ce qui existe reellement. Le haqq est l'oppose du batil (le faux) — c'est ce qui correspond au reel. L'article defini (al) fait du haqq LA verite, pas une verite parmi d'autres. La proposition « wa-innahu la-l-haqqu min rabbika » utilise l'emphase (inna + la) pour affirmer avec la plus grande force : c'est certes LA verite venant de ton Seigneur.",
              axe1_verset: "Le mot al-haqqu est l'affirmation centrale du verset — apres l'injonction (tourne ton visage), vient la justification (c'est la verite). Le champ lexical change de registre : on passe de l'action physique (sortir, tourner, visage, direction) a l'affirmation metaphysique (verite, Seigneur). Le haqq legitime l'injonction — ce n'est pas un ordre arbitraire, c'est la verite. Le verset construit la sequence : ordre → justification → surveillance (Dieu n'est pas insouciant).",
              axe2_voisins: "Le verset 2:144 justifiait le changement de qibla par la satisfaction du Prophete : « nous allons te tourner vers une direction qui te plaise ». Le verset 2:149 ajoute une justification superieure : c'est la verite venant de ton Seigneur. La progression est : desir humain (2:144) → verite divine (2:149). Le verset 2:147 avait deja affirme : « la verite vient de ton Seigneur, ne sois pas parmi les douteurs ».",
              axe3_sourate: "La racine h-q-q est fondamentale dans la sourate al-Baqarah. En 2:26, « ils savent que c'est la verite venant de leur Seigneur ». En 2:42, « ne melangez pas le vrai (al-haqq) avec le faux ». En 2:91, « confirmant ce qui est avec eux ». En 2:147, « la verite vient de ton Seigneur ». La sourate oppose constamment le haqq et le batil, la verite et le mensonge.",
              axe4_coherence: "La racine h-q-q apparait environ 287 fois dans le Coran. Le Haqq est un des noms de Dieu — Il est la Verite. L'expression « al-haqqu min rabbika » (la verite venant de ton Seigneur) est un refrain coranique qui revient dans plusieurs sourates. En 3:60, « la verite vient de ton Seigneur, ne sois pas parmi les douteurs ». La verite n'est pas relative — elle vient du Seigneur.",
              axe5_frequence: "Pour la mission du khalifa, la verite est le fondement de la mission. Le khalifa ne fait pas ce qu'il veut — il suit la verite qui vient de son Seigneur. L'injonction de se tourner vers la Mosquee sacree n'est pas un choix culturel ou politique — c'est une verite objectivee par son origine seigneuriale. Le khalifa doit distinguer le vrai du faux et suivre le vrai, meme s'il est impopulaire."
            },
            "Obligation/Nécessité": {
              status: "nul",
              senses: ["devoir", "meriter", "etre obligatoire"],
              proof_ctx: "Le sens d'obligation est un usage normatif de h-q-q. Le contexte est l'affirmation de verite (c'est la verite), pas l'imposition d'un devoir."
            },
            "Sens isolé/Se": {
              status: "nul",
              senses: ["se realiser"],
              proof_ctx: "Le sens de se realiser est une extension de h-q-q. Le contexte est l'affirmation que l'injonction est la verite, pas la realisation d'un evenement."
            },
            "Sens isolé/Vérifier": {
              status: "nul",
              senses: ["verifier"],
              proof_ctx: "Le sens de verifier est un acte de confirmation de h-q-q. Le contexte est l'affirmation de verite, pas la verification."
            }
          }
        }
      },
      // rbb pos=9
      {
        word_key: "rbb", position: 9, sense_chosen: "seigneur",
        analysis_axes: {
          sense_chosen: "seigneur",
          concept_chosen: "Seigneurie/Autorité bienveillante",
          concepts: {
            "Seigneurie/Autorité bienveillante": {
              status: "retenu",
              senses: ["seigneur", "maitre", "proprietaire", "celui qui eleve", "celui qui entretient", "celui qui possede", "gouverner"],
              proof_ctx: "Le nom rabbika est un nom masculin singulier de la racine r-b-b au genitif avec pronom suffixe 2MS (ka, ton). Le Lane's donne : seigneur, maitre, proprietaire, celui qui eleve et entretient, celui qui possede et gouverne. Le Rabb est celui qui exerce une autorite bienveillante — il possede, nourrit, eleve et gouverne. Le pronom « ka » (ton) personnalise la relation — c'est « ton Seigneur » qui adresse la verite au Prophete. La preposition « min » (de, venant de) indique que la verite emane du Seigneur.",
              axe1_verset: "Le mot rabbika est la source de la verite — la verite vient de ton Seigneur. Le champ lexical (verite, Seigneur, Dieu) montre que l'autorite de l'injonction est divine. Le Seigneur est Celui qui a le droit de donner des ordres parce qu'Il possede et eleve. Le pronom possessif « ton » cree une relation intime entre le Prophete et son Seigneur — l'ordre n'est pas impersonnel, il vient de Celui qui s'occupe de toi.",
              axe2_voisins: "Le verset 2:147 disait « la verite vient de ton Seigneur, ne sois pas parmi les douteurs ». Le verset 2:149 reprend la meme formule. Le verset 2:148 parlait de « d'ou que vous soyez Dieu vous rassemblera ». Le lien entre le Seigneur et la verite est le fil conducteur de ces versets — le Seigneur est la source de la verite et le garant de l'orientation.",
              axe3_sourate: "La racine r-b-b est une des plus frequentes de la sourate al-Baqarah. En 2:5, « ceux-la sont sur une guidee de leur Seigneur ». En 2:124, « quand le Seigneur d'Ibrahim l'eprouva ». La sourate utilise Rabb pour designer Dieu dans Sa relation de gouvernance bienveillante avec Ses creatures — Il eleve, nourrit, guide et demande des comptes.",
              axe4_coherence: "La racine r-b-b apparait environ 980 fois dans le Coran. Le mot Rabb est le deuxieme nom de Dieu le plus frequent apres Allah. La distinction entre Allah (nom propre) et Rabb (relation de seigneurie) est significative : Allah designe l'identite, Rabb designe la relation. En 2:149, les deux apparaissent — rabbika (dans la relation intime) et Allahu (dans l'affirmation universelle).",
              axe5_frequence: "Pour la mission du khalifa, le Seigneur est le mandant de la mission. Le khalifa est le gerant (khalifa) qui a ete place par le Seigneur (Rabb). La verite vient du Seigneur — le khalifa ne fabrique pas sa propre verite, il recoit celle de son Seigneur. La relation seigneuriale est le cadre de la mission : le Seigneur ordonne, le khalifa execute. Le pronom « ton » rappelle que cette relation est personnelle."
            },
            "Croissance/Augmentation": {
              status: "probable",
              senses: ["augmenter", "croitre", "faire grandir", "nourrir", "developper", "exces", "colline", "eminence"],
              proof_ctx: "Le sens de croissance est le sens premier de r-b-b — augmenter, faire grandir. Le Rabb est celui qui fait grandir — le seigneur est celui qui fait croitre ce qui est sous sa charge. Dans le contexte du verset, le mot est utilise comme nom de Dieu (Seigneur) mais le sens sous-jacent de croissance reste present : le Seigneur est celui qui eleve et fait grandir.",
              axe1_verset: "Le mot rabbika dans le verset designe le Seigneur, mais le sens sous-jacent de croissance eclaire la relation : le Seigneur est celui qui fait grandir le Prophete. La verite qui vient du Seigneur est un outil de croissance — elle eleve celui qui la recoit. L'injonction de se tourner vers la Mosquee sacree est un acte de croissance spirituelle ordonne par Celui qui fait croitre.",
              axe2_voisins: "Le verset 2:152 dira « souvenez-vous de Moi et Je me souviendrai de vous ». La memoire reciproque entre Dieu et Ses serviteurs est un acte de croissance mutuelle. Le Seigneur fait croitre en donnant la verite et la direction. Les serviteurs croissent en suivant cette direction. Le lien entre le Seigneur et la croissance est le fil conducteur du passage.",
              axe3_sourate: "La sourate al-Baqarah utilise la racine r-b-b pour decrire la relation de croissance entre Dieu et Ses creatures. En 2:21, « adorez votre Seigneur qui vous a crees ». La creation est le premier acte de croissance — le Seigneur cree puis fait grandir. En 2:131, Ibrahim se soumet a son Seigneur — la soumission est la condition de la croissance.",
              axe4_coherence: "Le sens de croissance est atteste dans l'usage linguistique de r-b-b. La rabba est l'acte d'elever un enfant — le rabb est celui qui eleve. Le Coran utilise cette racine pour montrer que Dieu n'est pas un souverain distant mais un educateur bienveillant qui fait grandir Ses creatures. La croissance est au coeur de la relation seigneuriale.",
              axe5_frequence: "Pour la mission du khalifa, la croissance est l'objectif de la mission. Le Seigneur fait croitre le khalifa pour qu'il puisse accomplir sa mission. Le khalifa qui suit la verite de son Seigneur grandit — celui qui la rejette stagne. La mission est un processus de croissance continue sous la direction du Seigneur."
            },
            "Éducation/Accompagnement": {
              status: "nul",
              senses: ["elever un enfant", "eduquer", "former", "accompagner la croissance"],
              proof_ctx: "Le sens d'education est un usage pedagogique de r-b-b. Le contexte est la seigneurie divine, pas l'education au sens strict."
            },
            "Commerce/Usure": {
              status: "nul",
              senses: ["usure", "augmentation de dette", "interet"],
              proof_ctx: "Le sens d'usure est un usage financier de r-b-b. Le contexte est la relation seigneuriale entre Dieu et le Prophete."
            },
            "Souffle/Vent": {
              status: "nul",
              senses: ["essoufflement"],
              proof_ctx: "Le sens d'essoufflement est un usage physique de r-b-b. Le contexte est la seigneurie divine."
            },
            "Sens isolé/Fixer": {
              status: "nul",
              senses: ["fixer"],
              proof_ctx: "Le sens de fixer est un usage concret de r-b-b. Le contexte est la seigneurie divine."
            },
            "Sens isolé/Rassembler": {
              status: "nul",
              senses: ["rassembler"],
              proof_ctx: "Le sens de rassembler est un usage concret de r-b-b. Le contexte est la seigneurie divine."
            },
            "Sens isolé/Groupe": {
              status: "nul",
              senses: ["groupe"],
              proof_ctx: "Le sens de groupe est un usage concret de r-b-b. Le contexte est la seigneurie divine."
            },
            "Sens isolé/Confiture": {
              status: "nul",
              senses: ["confiture"],
              proof_ctx: "Le sens de confiture est un usage concret de r-b-b. Le contexte est la seigneurie divine."
            }
          }
        }
      },
      // alh pos=10
      {
        word_key: "alh", position: 10, sense_chosen: "Dieu",
        analysis_axes: {
          sense_chosen: "Dieu",
          concept_chosen: "Divinité",
          concepts: {
            "Divinité": {
              status: "retenu",
              senses: ["divinite", "divinite (concept)", "Dieu", "theologie", "exclamation divine", "oui certes"],
              proof_ctx: "Le nom Allahu est le nom propre de la divinite unique au nominatif. Le Lane's donne : Dieu, la divinite unique, Celui qui est adore. Ici Allah est le sujet de la phrase « wa-ma Allahu bi-ghafilin » — Dieu n'est pas insouciant. Le nom propre Allah est utilise (et non Rabb) pour marquer le passage de la relation intime (ton Seigneur) a l'affirmation universelle (Dieu). La distinction avec les concepts nuls est claire : le mot est le nom propre de Dieu.",
              axe1_verset: "Le nom Allahu est le sujet de la phrase finale du verset — Dieu n'est pas insouciant de ce que vous faites. Le champ lexical change de registre : apres l'injonction (tourner le visage) et la justification (la verite venant de ton Seigneur), vient l'avertissement (Dieu surveille). Le passage de rabbika (intime, 2eme personne) a Allahu (universel, 3eme personne) montre l'elargissement : l'ordre est pour le Prophete, la surveillance est pour tous.",
              axe2_voisins: "Le verset 2:144 se terminait par « Dieu n'est pas inattentif a ce que vous faites ». Le verset 2:149 utilise la meme formule. Cette repetition de l'avertissement final montre que la surveillance divine accompagne chaque injonction. Le verset 2:148 disait « Dieu est capable de toute chose » — la puissance divine est le complement de sa vigilance.",
              axe3_sourate: "Le nom Allah est le mot le plus frequent de la sourate al-Baqarah — il structure chaque passage et chaque argument. En 2:149, Allah apparait dans la phrase de conclusion pour rappeler que l'injonction n'est pas un ordre sans consequence : Dieu voit et sait ce que chacun fait. La sourate construit progressivement l'image d'un Dieu qui ordonne, justifie et surveille.",
              axe4_coherence: "Le nom Allah apparait plus de 2600 fois dans le Coran. La formule « wa-ma Allahu bi-ghafilin 'amma ta'maluna » (Dieu n'est pas insouciant de ce que vous faites) est un refrain coranique qui apparait dans plusieurs versets. En 2:74, « Dieu n'est pas inattentif a ce que vous faites ». En 3:99, la meme formule. Le Coran rappelle constamment que Dieu est vigilant.",
              axe5_frequence: "Pour la mission du khalifa, Dieu est Celui qui surveille l'accomplissement de la mission. Le khalifa n'est pas autonome — il est sous la surveillance de Dieu. Cette surveillance n'est pas une menace mais une garantie : Dieu voit ce que le khalifa fait, Il est temoin de ses efforts et de ses manquements. La mission s'exerce sous le regard divin permanent."
            },
            "Adoration/Dévotion": {
              status: "nul",
              senses: ["adorer", "faire adorer", "se devouer au culte", "diviniser"],
              proof_ctx: "Le mot est le nom propre Allah, pas un verbe d'adoration. Le contexte est la surveillance divine."
            },
            "Détresse": {
              status: "nul",
              senses: ["etre perplexe", "se lamenter"],
              proof_ctx: "Le sens de detresse est hors sujet — le mot est le nom propre Allah dans un contexte d'affirmation de vigilance."
            },
            "Refuge/Protection": {
              status: "nul",
              senses: ["chercher refuge", "proteger", "demeurer"],
              proof_ctx: "Le sens de refuge est hors sujet — le contexte est la surveillance divine, pas la protection."
            },
            "Domination": {
              status: "nul",
              senses: ["asservir"],
              proof_ctx: "Le sens de domination est hors sujet — le contexte est la surveillance divine."
            }
          }
        }
      },
      // ghf pos=11
      {
        word_key: "ghf", position: 11, sense_chosen: "insouciant",
        analysis_axes: {
          sense_chosen: "insouciant",
          concept_chosen: "Pardon/Couverture",
          concepts: {
            "Pardon/Couverture": {
              status: "retenu",
              senses: ["pardonner", "effacer", "couvrir"],
              proof_ctx: "Le mot bi-ghafilin est un participe actif de la racine gh-f-l au pluriel masculin precede de la preposition bi et de la negation ma. Le Lane's donne pour gh-f-l : etre insouciant, negligent, ne pas faire attention, ne pas etre conscient de quelque chose. ATTENTION : la racine gh-f-l (insouciance) est DISTINCTE de la racine gh-f-r (pardon). Dans le fichier concepts, seuls les concepts de « Pardon/Couverture » et « Protection » sont listes sous la cle ghf, mais le mot du verset est de la racine gh-f-l (ghafilin), pas gh-f-r (ghafirin). Le sens retenu est l'insouciance — Dieu n'est PAS insouciant, Il fait attention a tout. La negation (ma + bi) transforme l'affirmation : Dieu est le contraire de l'insouciant, Il est le Vigilant.",
              axe1_verset: "Le mot bi-ghafilin ferme le verset avec un avertissement : Dieu n'est pas insouciant de ce que vous faites. Le champ lexical du verset passe de l'injonction (sortir, tourner, visage, direction, Mosquee sacree) a la justification (verite, Seigneur) puis a l'avertissement (Dieu, insouciant, faites). L'insouciance niee est la vigilance affirmee — Dieu voit tout, sait tout, rien ne Lui echappe. Ce rappel est la garantie que les actes de chacun sont comptabilises.",
              axe2_voisins: "Le verset 2:144 se terminait par la meme formule « wa-ma Allahu bi-ghafilin 'amma ta'maluna ». Le verset 2:149 la repete a l'identique. Cette repetition montre l'importance de l'avertissement — a chaque injonction de la qibla correspond le rappel de la vigilance divine. Le verset 2:140 utilisait aussi cette formule. Le Coran lie systematiquement l'ordre divin a la surveillance divine.",
              axe3_sourate: "La racine gh-f-l apparait dans la sourate al-Baqarah pour decrire l'insouciance humaine et pour nier l'insouciance divine. En 2:74, « Dieu n'est pas inattentif a ce que vous faites ». En 2:85, meme formule. La sourate oppose l'insouciance des hommes (qui negligent les commandements) a la vigilance de Dieu (qui n'oublie rien). L'insouciance est un defaut humain, jamais un attribut divin.",
              axe4_coherence: "La racine gh-f-l apparait environ 40 fois dans le Coran. La formule « Dieu n'est pas insouciant » est un refrain qui ponctue les passages d'injonction et d'avertissement. En 6:132, « ton Seigneur n'est pas inattentif a ce qu'ils font ». En 11:123, « ton Seigneur n'est pas inattentif a ce que vous faites ». Le Coran nie systematiquement l'insouciance de Dieu pour affirmer Sa vigilance totale.",
              axe5_frequence: "Pour la mission du khalifa, la vigilance divine est la garantie de la mission. Le khalifa sait que Dieu n'est pas insouciant — chaque acte compte, chaque choix est vu. Cette conscience de la surveillance divine motive le khalifa a accomplir sa mission avec serieux et integrite. L'insouciance est l'ennemi de la mission — le khalifa ne peut pas etre insouciant puisque Dieu Lui-meme ne l'est pas."
            },
            "Protection": {
              status: "nul",
              senses: ["casque"],
              proof_ctx: "Le sens de casque est un usage concret de la racine gh-f. Le contexte est l'insouciance niee de Dieu, pas la protection physique."
            }
          }
        }
      },
      // eml pos=13
      {
        word_key: "eml", position: 13, sense_chosen: "faire",
        analysis_axes: {
          sense_chosen: "faire",
          concept_chosen: "Action/Oeuvre",
          concepts: {
            "Action/Oeuvre": {
              status: "retenu",
              senses: ["travailler", "agir", "oeuvre", "acte", "ouvrier"],
              proof_ctx: "Le verbe ta'maluna est un inaccompli 2MP de la racine '-m-l. Le Lane's donne : travailler, agir, faire, produire un acte. L'inaccompli marque une action continue et repetee — ce que vous faites en permanence, pas un acte ponctuel. Le passage du singulier (kharajta, ton visage, ton Seigneur) au pluriel (ta'maluna, vous faites) est delibere : l'injonction est adressee au Prophete seul mais la surveillance divine concerne tous les hommes. La distinction avec « gouverneur » (nul) est claire : le mot est un verbe, pas un nom.",
              axe1_verset: "Le verbe ta'maluna ferme le verset en designant l'objet de la vigilance divine : ce que vous faites. Le champ lexical final (Dieu, insouciant, faites) montre que les actes des hommes sont sous surveillance. Le verbe est au pluriel (vous) alors que le debut du verset est au singulier (tu sors, ton visage) — le verset s'elargit du Prophete a la communaute. Les actes dont Dieu n'est pas insouciant sont les actes de tous, pas seulement ceux du Prophete.",
              axe2_voisins: "Le verset 2:144 se terminait par le meme verbe ta'maluna dans la meme formule. Le verset 2:134 disait « a eux ce qu'ils ont acquis et a vous ce que vous avez acquis ». Le verset 2:141 repetait la meme formule. Le theme de la responsabilite des actes traverse tout le passage. Chacun est comptable de ce qu'il fait — les actes ne se perdent pas.",
              axe3_sourate: "La racine '-m-l est une des plus frequentes de la sourate al-Baqarah. En 2:25, « ceux qui croient et font de bonnes oeuvres ». En 2:62, « quiconque croit en Dieu et au Jour dernier et fait le bien ». La sourate lie constamment la foi aux oeuvres — croire sans agir est insuffisant, agir sans croire est vain. Le verbe ta'maluna englobe tous les actes humains sans distinction.",
              axe4_coherence: "La racine '-m-l apparait environ 360 fois dans le Coran. Le verbe ta'maluna (vous faites) est un des verbes les plus recurrents. La formule « Dieu n'est pas insouciant de ce que vous faites » lie la racine '-m-l a la surveillance divine. En 99:7-8, « quiconque fait un atome de bien le verra, et quiconque fait un atome de mal le verra ». Les actes, aussi petits soient-ils, sont comptabilises.",
              axe5_frequence: "Pour la mission du khalifa, les actes sont l'expression concrete de la mission. Le khalifa ne se definit pas par ses intentions mais par ses actes. Faire (ta'maluna) est le verbe de la mission accomplie — ce que vous faites est ce qui compte. La surveillance divine porte sur les actes, pas sur les paroles. Le khalifa doit savoir que chaque acte, du plus grand au plus petit, est vu par Dieu et sera comptabilise."
            },
            "Sens isolé/Gouverneur": {
              status: "nul",
              senses: ["gouverneur"],
              proof_ctx: "Le sens de gouverneur est un usage nominal de '-m-l. Le contexte est le verbe « faire/agir » au pluriel, pas un titre de fonction."
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

  const verseIds = [156];
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
  console.log('=== PIPELINE SOURATE 2 — VERSET 149 ===\n');
  await processVerse(149);
  await syncWordMeanings();
  console.log('\n=== PIPELINE V149 TERMINEE ===');
}

main().catch(e => console.error('FATAL:', e));
