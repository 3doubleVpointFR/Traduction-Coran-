const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// =====================================================
// PIPELINE SOURATE 2 — AL-BAQARAH — VERSETS 62 A 64
// verse_id=69 (2:62), verse_id=70 (2:63), verse_id=71 (2:64)
// =====================================================
// CRITICAL: concept names and senses are read from concepts JSON
// =====================================================

const verseData = {

  // =====================================================
  // VERSET 2:62
  // verse_id=69, analysis_id=432
  // "Ceux qui croient, ceux qui sont juifs, les chretiens, les Sabeens
  //  — quiconque croit en Dieu et au Jour dernier et fait le bien —
  //  ceux-la ont leur recompense aupres de leur Seigneur.
  //  Pas de crainte sur eux et ils ne seront pas attristes."
  // =====================================================
  62: {
    verse_id: 69,
    analysis_id: 432,
    translation_arab: "Ceux qui croient, ceux qui sont juifs, les chretiens, les Sabeens — quiconque croit en Dieu et au Jour dernier et fait le bien — ceux-la ont leur recompense aupres de leur Seigneur. Pas de crainte sur eux et ils ne seront pas attristes.",
    full_translation: "Ceux qui croient, ceux qui pratiquent le judaisme, les chretiens, les Sabeens — quiconque [parmi eux] croit en Dieu et au Jour dernier et accomplit [des oeuvres] bonnes — ceux-la ont leur recompense aupres de leur Seigneur. Nulle crainte sur eux et ils ne seront pas attristes.",
    translation_explanation: `§DEMARCHE§
Ce verset etablit un principe universel : le salut n'est pas reserve a une communaute religieuse particuliere mais a quiconque remplit trois conditions. Le verbe **aamanuu** est un accompli 3MP forme IV de la racine a-m-n. Le Lane's donne « he believed, he was secure, he trusted ». La forme IV indique l'adhesion active — croire c'est entrer dans la securite par l'acceptation. Le premier emploi designe les musulmans, le second designe quiconque croit parmi les groupes mentionnes. Le verbe **haaduu** est un accompli 3MP de la racine h-w-d. Le Lane's donne « he was a Jew, he returned, he repented ». Le sens ici est l'appartenance religieuse — « ceux qui pratiquent le judaisme ». Le mot **al-nasaaraa** est un pluriel defini de la racine n-s-r. Le Lane's donne « the Christians, the Nazarenes, helpers ». Le pluriel designe la communaute chretienne comme groupe historique. Le mot **al-saabi'iina** est un pluriel defini accusatif de la racine s-b-a. Le Lane's donne « the Sabians, star-worshippers ». Les Sabeens sont une communaute religieuse mentionnee avec les juifs et les chretiens. Le mot **al-aakhiri** est un adjectif defini genitif de la racine a-kh-r. Le Lane's donne « the last, the latter, the hereafter ». Joint a « yawm », il designe le Jour dernier — le jour ultime de la retribution. Le verbe **'amila** est un accompli 3MS de la racine '-m-l. Le Lane's donne « he worked, he did, he acted ». L'action est volontaire et continue. Le mot **saalihan** est un participe actif accusatif de la racine s-l-h. Le Lane's donne « good, righteous, virtuous, proper ». L'oeuvre bonne est conforme a l'ordre juste. Le mot **ajruhum** est un nom masculin singulier avec pronom 3MP de la racine a-j-r. Le Lane's donne « reward, recompense, wage, hire ». La recompense est ce qui est du en retour de l'action bonne. Le mot **'inda** est une preposition de la racine '-n-d. Le Lane's donne « with, at, near, in the presence of ». « Aupres de leur Seigneur » signifie dans la science et la garde de Dieu. Le mot **rabbihim** est un nom genitif avec pronom 3MP de la racine r-b-b. Le Lane's donne « lord, master, owner, sustainer, nourisher ». Le Seigneur est Celui qui possede, eleve et entretient Ses creatures. Le mot **khawfun** est un nom masculin singulier indefini de la racine kh-w-f. Le Lane's donne « fear, dread, apprehension ». La crainte est l'anticipation d'un mal futur — la negation (la khawfun) signifie l'absence totale de peur pour l'avenir. Le verbe **yahzanuuna** est un inaccompli 3MP de la racine h-z-n. Le Lane's donne « he was sad, he grieved, he sorrowed ». La tristesse est la douleur face a une perte passee — la negation (la hum yahzanuun) signifie l'absence de regret pour le passe.

§JUSTIFICATION§
**croient** — Le sens retenu est « croire ». Le verbe aamanuu designe l'adhesion de foi. L'alternative « etre en securite » est ecartee car la forme IV avec la preposition bi designe la croyance en quelque chose, pas l'etat de securite.

**juifs** — Le sens retenu est « juifs ». Le verbe haaduu designe ceux qui pratiquent le judaisme. L'alternative « retourner » est ecartee car le contexte enumere des communautes religieuses.

**chretiens** — Le sens retenu est « chretiens ». Le mot al-nasaaraa designe les adeptes du christianisme. L'alternative « secourir » est ecartee car le pluriel defini avec l'article designe un groupe religieux identifie.

**Sabeens** — Le sens retenu est « Sabeens ». Le mot al-saabi'iina designe une communaute religieuse. Pas d'alternative pertinente dans ce contexte d'enumeration.

**dernier** — Le sens retenu est « dernier ». Le mot al-aakhiri qualifie le Jour (yawm) comme ultime. L'alternative « retarder » est ecartee car la forme adjectivale definit une position finale dans le temps.

**fait** — Le sens retenu est « agir ». Le verbe 'amila designe l'action volontaire. L'alternative « gouverneur » est ecartee car le verbe a l'accompli designe un acte, pas un titre.

**bonne** — Le sens retenu est « oeuvre bonne ». Le mot saalihan qualifie l'action comme conforme a la rectitude. L'alternative « paix » est ecartee car le participe actif indefini qualifie la nature de l'oeuvre.

**recompense** — Le sens retenu est « recompense ». Le mot ajruhum designe ce qui est du en retour. L'alternative « dot » est ecartee car le contexte parle de retribution divine, pas de mariage.

**aupres** — Le sens retenu est « aupres de ». Le mot 'inda indique la proximite avec le Seigneur. L'alternative « selon » est ecartee car le contexte designe un lieu (aupres de Dieu), pas un point de vue.

**Seigneur** — Le sens retenu est « seigneur ». Le mot rabbihim designe Celui qui possede et eleve. L'alternative « augmentation » est ecartee car la forme avec le pronom possessif designe un rapport de seigneurie.

**crainte** — Le sens retenu est « peur ». Le mot khawfun designe l'anticipation d'un mal futur. L'alternative « danger » est ecartee car le nom indefini nie une emotion interieure, pas une menace exterieure.

**attristes** — Le sens retenu est « etre triste ». Le verbe yahzanuuna designe l'etat de tristesse. Pas d'alternative pertinente.

§CRITIQUE§
**croient (deux occurrences)** — Le verbe aamanuu apparait deux fois dans le verset. La premiere occurrence designe « ceux qui croient » en tant que communaute (les musulmans). La seconde occurrence (man aamana bi-Allah) designe l'acte individuel de croire en Dieu, quelle que soit l'appartenance communautaire. Cette distinction est fondamentale — le verset passe du groupe a l'individu.
**juifs vs retournants** — Le Lane's donne « he returned » comme sens premier de hada. Les juifs seraient donc « ceux qui retournent [a Dieu] ». Ce sens etymologique est compatible avec le contexte mais le sens usuel « juifs » est plus direct et universellement compris.
**crainte vs tristesse** — Le verset nie deux emotions distinctes : la crainte (khawf) concerne l'avenir — pas de peur de ce qui vient. La tristesse (huzn) concerne le passe — pas de regret de ce qui est parti. L'absence de ces deux emotions couvre la totalite du temps : ni peur de l'avenir ni chagrin du passe.`,
    segments: [
      { fr: "ceux qui", phon: "inna alladhiina", arabic: "إِنَّ ٱلَّذِينَ", is_particle: true, position: 0 },
      { fr: "croient", pos: "verbe", phon: "aamanuu", arabic: "ءَامَنُوا۟", word_key: "amn", is_particle: false, sense_retenu: "croire", position: 1 },
      { fr: "et ceux qui", phon: "wa-alladhiina", arabic: "وَٱلَّذِينَ", is_particle: true, position: 2 },
      { fr: "sont juifs", pos: "verbe", phon: "haaduu", arabic: "هَادُوا۟", word_key: "hwd", is_particle: false, sense_retenu: "juifs", position: 3 },
      { fr: "et les chretiens", pos: "nom", phon: "wa-al-nasaaraa", arabic: "وَٱلنَّصَٰرَىٰ", word_key: "nsr", is_particle: false, sense_retenu: "chretiens", position: 4 },
      { fr: "et les Sabeens", pos: "nom", phon: "wa-al-saabi'iina", arabic: "وَٱلصَّٰبِـِٔينَ", word_key: "sba", is_particle: false, sense_retenu: "Sabeens", position: 5 },
      { fr: "quiconque", phon: "man", arabic: "مَنْ", is_particle: true, position: 6 },
      { fr: "croit", pos: "verbe", phon: "aamana", arabic: "ءَامَنَ", word_key: "amn", is_particle: false, sense_retenu: "croire", position: 7 },
      { fr: "en Dieu", pos: "nom", phon: "bi-Allaahi", arabic: "بِٱللَّهِ", word_key: "alh", is_particle: false, sense_retenu: "Dieu", position: 8 },
      { fr: "et le Jour", pos: "nom", phon: "wa-al-yawmi", arabic: "وَٱلْيَوْمِ", word_key: "ywm", is_particle: false, sense_retenu: "jour", position: 9 },
      { fr: "dernier", pos: "adjectif", phon: "al-aakhiri", arabic: "ٱلْءَاخِرِ", word_key: "axr", is_particle: false, sense_retenu: "dernier", position: 10 },
      { fr: "et fait", pos: "verbe", phon: "wa-'amila", arabic: "وَعَمِلَ", word_key: "eml", is_particle: false, sense_retenu: "agir", position: 11 },
      { fr: "le bien", pos: "nom", phon: "saalihan", arabic: "صَٰلِحًا", word_key: "slh", is_particle: false, sense_retenu: "oeuvre bonne", position: 12 },
      { fr: "ceux-la ont pour eux", phon: "fa-lahum", arabic: "فَلَهُمْ", is_particle: true, position: 13 },
      { fr: "leur recompense", pos: "nom", phon: "ajruhum", arabic: "أَجْرُهُمْ", word_key: "ajr", is_particle: false, sense_retenu: "recompense", position: 14 },
      { fr: "aupres de", pos: "nom", phon: "'inda", arabic: "عِندَ", word_key: "end", is_particle: false, sense_retenu: "aupres de", position: 15 },
      { fr: "leur Seigneur", pos: "nom", phon: "rabbihim", arabic: "رَبِّهِمْ", word_key: "rbb", is_particle: false, sense_retenu: "seigneur", position: 16 },
      { fr: "et nulle", phon: "wa-laa", arabic: "وَلَا", is_particle: true, position: 17 },
      { fr: "crainte", pos: "nom", phon: "khawfun", arabic: "خَوْفٌ", word_key: "khw f", is_particle: false, sense_retenu: "peur", position: 18 },
      { fr: "sur eux", phon: "'alayhim", arabic: "عَلَيْهِمْ", is_particle: true, position: 19 },
      { fr: "et ils ne", phon: "wa-laa hum", arabic: "وَلَا هُمْ", is_particle: true, position: 20 },
      { fr: "seront attristes", pos: "verbe", phon: "yahzanuuna", arabic: "يَحْزَنُونَ", word_key: "hzn", is_particle: false, sense_retenu: "etre triste", position: 21 }
    ],
    words: [
      {
        word_key: "amn", position: 1, sense_chosen: "croire",
        analysis_axes: {
          sense_chosen: "croire",
          concept_chosen: "Foi/Adhésion",
          concepts: {
            "Foi/Adhésion": {
              status: "retenu",
              senses: ["croire", "avoir la foi", "accepter comme vrai", "croyant", "confirmer"],
              proof_ctx: "Le verbe aamanuu est un accompli 3MP forme IV de la racine a-m-n. Le Lane's donne « he believed, he trusted, he accepted as true ». La forme IV (af'ala) est factitive — elle signifie « il a rendu sur/il a entre dans la securite [de la foi] ». Le premier emploi du verbe dans le verset designe les croyants en tant que communaute — « ceux qui croient » sont les musulmans. Le second emploi (man aamana bi-Allah) designe l'acte individuel de croire en Dieu, transcendant les appartenances communautaires.",
              axe1_verset: "Le verbe aamanuu apparait deux fois dans le verset. La premiere occurrence introduit les croyants comme premier groupe dans l'enumeration (croyants, juifs, chretiens, Sabeens). La seconde occurrence (man aamana bi-Allahi) est la premiere des trois conditions du salut : croire en Dieu. La repetition du verbe montre que la foi communautaire ne suffit pas — il faut une foi individuelle authentique. Le verset passe du collectif (inna alladhiina aamanuu) a l'individuel (man aamana).",
              axe2_voisins: "Les versets 60-61 rappelaient les bienfaits materiels donnes aux enfants d'Israel dans le desert et leur ingratitude persistante. Ce verset 62 rompt brutalement avec le recit historique pour enoncer un principe universel : le salut depend de la foi et des actes, pas de l'appartenance communautaire. Le verset 63 reviendra au recit de l'alliance avec les enfants d'Israel, montrant que ce principe universel s'applique aussi a eux.",
              axe3_sourate: "La racine a-m-n est fondamentale dans la sourate al-Baqarah. Des le debut (verset 3), les croyants sont definis par leur foi au ghayb (l'invisible). Le verset 62 elargit la definition — la foi n'est plus limitee a une communaute. La sourate oppose constamment la foi (imaan) a la mecreance (kufr), et ce verset montre que la ligne de partage traverse toutes les communautes.",
              axe4_coherence: "La racine a-m-n apparait plus de 800 fois dans le Coran. En 5:69, un verset quasi identique reprend la meme formule (inna alladhiina aamanuu wa-alladhiina haaduu...). En 22:17, cinq groupes sont enumeres (croyants, juifs, Sabeens, chretiens, zoroastriens). Le principe est constant — la foi individuelle en Dieu prime sur l'etiquette communautaire.",
              axe5_frequence: "Pour la mission du khalifa, la foi est le fondement de la responsabilite sur terre. Le khalifa est d'abord un croyant — celui qui adhere a la verite divine et agit en consequence. Ce verset montre que la mission n'est pas reservee a un peuple — quiconque croit et agit bien est dans la bonne voie. La foi universelle fonde la mission universelle."
            },
            "Sécurité/Confiance": {
              status: "probable",
              senses: ["faire confiance", "confier", "fidèle", "lieu sûr", "se sentir en sécurité", "être en sécurité"],
              proof_ctx: "La racine a-m-n porte le sens fondamental de securite et de confiance. Le Lane's donne « he was or became secure, safe, free from fear ». Celui qui croit (mu'min) est aussi celui qui est en securite et qui donne la securite. Le lien entre foi et securite est etymologique — la foi est l'entree dans la securite interieure.",
              axe1_verset: "La fin du verset confirme le lien foi-securite : « pas de crainte (khawf) sur eux et ils ne seront pas attristes ». Celui qui croit obtient la securite — l'absence de peur et de tristesse. La foi est la cause et la securite est la consequence. Le verset reunit les deux sens de la racine a-m-n : la foi comme acte (aamanuu) et la securite comme resultat (laa khawfun 'alayhim).",
              axe2_voisins: "Les versets precedents montraient les enfants d'Israel dans l'insecurite du desert — ils avaient faim, soif, peur. Dieu leur avait donne la manne, les cailles, l'eau. Ce verset promet une securite d'un autre ordre — une securite eschatologique qui depasse les besoins materiels. La confiance en Dieu remplace la peur de l'avenir.",
              axe3_sourate: "La sourate al-Baqarah oppose constamment la securite des croyants a l'insecurite des mecreants. En 2:38, Dieu promet : « Celui qui suit Ma guidee, pas de crainte sur eux ». Le meme schema (foi → securite) se repete tout au long de la sourate. La securite est le fruit permanent de la foi.",
              axe4_coherence: "La racine a-m-n dans son sens de securite apparait dans le nom divin al-Mu'min (59:23) — Celui qui donne la securite. La Mecque est appelee al-balad al-amin (le pays sur, 95:3). La securite divine est un don qui transcende les circonstances materielles.",
              axe5_frequence: "La securite interieure du croyant est essentielle pour la mission du khalifa. Celui qui a peur ne peut pas gouverner. Celui qui est en securite par sa foi peut affronter les epreuves. La confiance en Dieu est le bouclier du khalifa contre les difficultes de la mission."
            },
            "Garantie/Protection": {
              status: "nul",
              senses: ["accorder la sécurité", "protéger"],
              proof_ctx: "La garantie est un sens derive de a-m-n (donner l'aman, la protection). Ici le verbe aamanuu avec la preposition bi designe la croyance en quelque chose, pas l'acte de proteger quelqu'un."
            },
            "Sens isolé/Amen": {
              status: "nul",
              senses: ["amen"],
              proof_ctx: "Amen est un usage liturgique de la racine. Le verbe conjugue aamanuu ne peut pas signifier « amen » — c'est un accompli 3MP qui designe un acte de foi passe."
            }
          }
        }
      },
      {
        word_key: "hwd", position: 3, sense_chosen: "juifs",
        analysis_axes: {
          sense_chosen: "juifs",
          concept_chosen: "Judaïsme/Retour",
          concepts: {
            "Judaïsme/Retour": {
              status: "retenu",
              senses: ["juifs", "retourner", "prophète Hûd"],
              proof_ctx: "Le verbe haaduu est un accompli 3MP de la racine h-w-d. Le Lane's donne « he was a Jew, he returned, he became Jewish ». Le sens premier est le retour (hada = retourner). Les juifs (al-ladhiina haaduu) sont etymologiquement « ceux qui retournent [a Dieu] ». Dans le contexte de l'enumeration des communautes religieuses (croyants, juifs, chretiens, Sabeens), le sens est clairement l'appartenance au judaisme.",
              axe1_verset: "Le mot haaduu designe le deuxieme groupe dans l'enumeration des communautes. Les juifs sont mentionnes immediatement apres les croyants (musulmans). Le verset ne les exclut pas du salut — au contraire, il les inclut parmi ceux qui peuvent obtenir la recompense divine. La condition n'est pas l'appartenance mais la foi et les actes.",
              axe2_voisins: "Les versets 40 a 61 etaient entierement consacres aux enfants d'Israel — leurs bienfaits, leurs epreuves, leur desobeissance. Ce verset 62 apporte une nuance cruciale : malgre les reproches faits aux enfants d'Israel collectivement, les individus parmi eux qui croient et agissent bien sont sauves. Le jugement est individuel, pas communautaire.",
              axe3_sourate: "La racine h-w-d apparait dans la sourate pour designer la communaute juive. En 2:111, les juifs et les chretiens pretendent que le paradis leur est reserve. Ce verset 62 contredit cette pretention — le salut n'est pas une exclusivite ethnique ou communautaire. La sourate critique la desobeissance tout en preservant la voie du salut individuel.",
              axe4_coherence: "La racine h-w-d apparait 10 fois dans le Coran. En 5:69, la formule est repetee presque a l'identique. En 7:156, Moise dit « nous avons retourne (hudna) vers Toi ». Le double sens (juif/retourner) est significatif — le judaisme est etymologiquement un retour a Dieu.",
              axe5_frequence: "Pour la mission du khalifa, ce verset rappelle que la mission divine n'est pas reservee a un peuple. Les juifs, comme les autres, sont juges sur leur foi et leurs actes individuels. Le khalifa doit gouverner avec justice envers toutes les communautes, sans favoritisme ni exclusion."
            }
          }
        }
      },
      {
        word_key: "nsr", position: 4, sense_chosen: "chretiens",
        analysis_axes: {
          sense_chosen: "chretiens",
          concept_chosen: "Secours/Victoire",
          concepts: {
            "Secours/Victoire": {
              status: "retenu",
              senses: ["aider", "victoire", "défendre", "secourir"],
              proof_ctx: "Le mot al-nasaaraa est un pluriel defini de la racine n-s-r. Le Lane's donne « the Christians, the Nazarenes, he who aided ». Les chretiens sont appeles nasaaraa car ils sont les partisans (ansaar) de Jesus — ceux qui l'ont aide et soutenu. Le nom derive du verbe nasara (aider, secourir). En 3:52, Jesus demande « qui sont mes aides (ansaarii) vers Dieu ? » et les disciples repondent « nous sommes les aides (ansaar) de Dieu ». L'etymologie lie le christianisme a l'aide apportee au prophete.",
              axe1_verset: "Le mot al-nasaaraa designe le troisieme groupe dans l'enumeration. Les chretiens sont places entre les juifs et les Sabeens. Comme pour les juifs, le verset ne les exclut pas du salut mais pose les memes conditions universelles : foi en Dieu, foi au Jour dernier, oeuvres bonnes. L'etiquette « chretien » ne suffit pas — il faut remplir les conditions.",
              axe2_voisins: "Le passage des versets 40-61 etait centre sur les enfants d'Israel. Ce verset 62 elargit la perspective en incluant trois autres communautes. Les chretiens, comme les juifs, ont recu une revelation et sont juges sur leur fidelite a l'essence du message divin. Le verset suivant (63) reviendra au cas specifique des enfants d'Israel.",
              axe3_sourate: "La racine n-s-r apparait dans la sourate avec les deux sens : le secours divin et la designation des chretiens. En 2:120, les juifs et les chretiens sont mentionnes ensemble. La sourate traite les chretiens avec le meme principe que les juifs — le jugement est individuel et base sur la foi et les actes.",
              axe4_coherence: "La racine n-s-r apparait dans le Coran pour designer les chretiens a plusieurs reprises (2:111, 2:113, 2:120, 2:135, 5:14, 5:69, etc.). En 61:14, les disciples de Jesus sont appeles ansaar Allah (les aides de Dieu). Le lien etymologique entre chretiens et secours est constant dans le texte coranique.",
              axe5_frequence: "Pour la mission du khalifa, les chretiens sont une communaute partenaire dans l'histoire de la revelation. Le khalifa doit reconnaitre leur place dans le plan divin tout en maintenant le critere universel de la foi et des actes. La mission inclut le dialogue avec toutes les communautes de foi."
            },
            "Alliance/Soutien": {
              status: "nul",
              senses: ["partisan"],
              proof_ctx: "Le sens de partisan (naasir) est derive du meme champ semantique. Ici le pluriel defini al-nasaaraa avec l'article designe specifiquement la communaute chretienne, pas des partisans en general."
            }
          }
        }
      },
      {
        word_key: "sba", position: 5, sense_chosen: "Sabeens",
        analysis_axes: {
          sense_chosen: "Sabeens",
          concept_chosen: "Communauté religieuse",
          concepts: {
            "Communauté religieuse": {
              status: "retenu",
              senses: ["Sabéens", "adorateurs des astres"],
              proof_ctx: "Le mot al-saabi'iina est un pluriel defini accusatif de la racine s-b-a. Le Lane's donne « the Sabians, those who departed from one religion to another ». Les Sabeens sont une communaute religieuse historique — leur identification exacte est debattue (mandéens, adorateurs des astres, ou tout groupe monotheiste hors des trois grands). Le Coran les mentionne trois fois (2:62, 5:69, 22:17) toujours dans le contexte d'une enumeration de communautes religieuses.",
              axe1_verset: "Les Sabeens sont le quatrieme et dernier groupe enumere. Leur inclusion montre que le principe de salut universel s'etend au-dela des trois grandes religions abrahamiques. Meme les Sabeens — un groupe dont l'identite precise est debattue — peuvent acceder au salut s'ils remplissent les trois conditions (foi en Dieu, foi au Jour dernier, oeuvres bonnes).",
              axe2_voisins: "Apres les versets 40-61 centres sur Israel, le verset 62 elargit radicalement la perspective. L'inclusion des Sabeens — le groupe le plus eloigne des trois monotheismes — montre que le message est veritablement universel. Le verset 63 reviendra au cas particulier d'Israel, mais le principe universel est deja pose.",
              axe3_sourate: "La racine s-b-a n'apparait qu'une fois dans la sourate al-Baqarah, dans ce verset. Sa presence est significative — elle elargit le champ du salut au-dela des communautes les plus connues. La sourate, malgre son attention aux enfants d'Israel, affirme un principe qui les depasse.",
              axe4_coherence: "Les Sabeens apparaissent trois fois dans le Coran : 2:62, 5:69 et 22:17. En 22:17, cinq groupes sont enumeres (croyants, juifs, Sabeens, chretiens, zoroastriens). Leur presence constante dans ces enumerations confirme que le Coran reconnait l'existence de communautes religieuses variees et les soumet toutes au meme critere de jugement.",
              axe5_frequence: "Pour la mission du khalifa, l'inclusion des Sabeens rappelle que la gouvernance divine s'adresse a l'humanite entiere, pas a un groupe restreint. Le khalifa ne peut pas limiter la justice et la misericorde a une seule communaute — il doit reconnaitre la diversite des chemins tout en maintenant les criteres universels de la foi et des actes."
            }
          }
        }
      },
      {
        word_key: "axr", position: 10, sense_chosen: "dernier",
        analysis_axes: {
          sense_chosen: "dernier",
          concept_chosen: "Postériorité/Retard",
          concepts: {
            "Postériorité/Retard": {
              status: "retenu",
              senses: ["retarder", "reporter", "reculer", "après", "dernier", "l'au-delà", "fin"],
              proof_ctx: "Le mot al-aakhiri est un adjectif defini genitif de la racine a-kh-r. Le Lane's donne « the last, the latter, the hereafter, the final ». Ici il qualifie « yawm » (jour) — le Jour dernier est le dernier jour de la creation, le jour de la retribution finale. L'adjectif est au genitif car il suit le nom yawm en etat d'annexion. « Al-yawm al-aakhir » est une formule coranique recurrente pour designer le Jour du Jugement.",
              axe1_verset: "Le Jour dernier est la deuxieme condition du salut : croire en Dieu et au Jour dernier. Cette double croyance est le minimum requis — croire en l'existence de Dieu et en la realite de la retribution. Le Jour dernier est le moment ou chaque individu sera juge selon ses actes. Sa mention ici ancre la responsabilite dans l'eternite.",
              axe2_voisins: "Les versets precedents rappelaient les chatiments temporels (abaissement, miserabilite). Ce verset 62 depasse le temporel pour parler de la retribution eschatologique — la recompense « aupres de leur Seigneur » est eternelle. Le Jour dernier est l'horizon ultime qui donne sens aux epreuves terrestres.",
              axe3_sourate: "L'expression « al-yawm al-aakhir » apparait plusieurs fois dans la sourate. En 2:8, les hypocrites pretendent croire en Dieu et au Jour dernier. En 2:177, la piete est definie par la foi en Dieu, au Jour dernier, aux anges, au Livre et aux prophetes. Le Jour dernier est un pilier de la foi repete tout au long de la sourate.",
              axe4_coherence: "L'expression « al-yawm al-aakhir » apparait plus de 25 fois dans le Coran. Elle est toujours liee a la foi en Dieu comme un couple inseparable. En 9:18-19, les mosquees de Dieu ne sont frequentees que par ceux qui croient en Dieu et au Jour dernier. La croyance au Jour dernier est le moteur de la responsabilite morale.",
              axe5_frequence: "Pour la mission du khalifa, le Jour dernier est l'horizon de la reddition des comptes. Le khalifa sait qu'il sera juge pour sa gestion de la terre. Cette conscience eschatologique empeche l'arrogance et l'injustice. Croire au Jour dernier c'est savoir que toute action a des consequences eternelles."
            },
            "Sens isolé/Arrière": {
              status: "nul",
              senses: ["arrière"],
              proof_ctx: "Le sens d'arriere est un usage spatial de la racine. Ici le contexte est temporel — « dernier » qualifie le Jour du Jugement, pas une position spatiale."
            },
            "Sens isolé/Derrière": {
              status: "nul",
              senses: ["derrière"],
              proof_ctx: "Le sens de derriere est un usage spatial. La forme adjectivale definie al-aakhiri dans l'expression al-yawm al-aakhir designe le dernier jour, pas ce qui est derriere."
            }
          }
        }
      },
      {
        word_key: "eml", position: 11, sense_chosen: "agir",
        analysis_axes: {
          sense_chosen: "agir",
          concept_chosen: "Action/Oeuvre",
          concepts: {
            "Action/Oeuvre": {
              status: "retenu",
              senses: ["travailler", "agir", "oeuvre", "acte", "ouvrier"],
              proof_ctx: "Le verbe 'amila est un accompli 3MS de la racine '-m-l. Le Lane's donne « he worked, he did, he acted, he labored ». Le verbe designe l'action deliberee et continue — pas un acte ponctuel mais un engagement dans l'effort. Le verbe est suivi de saalihan (bien/bon), formant l'expression « 'amila saalihan » — il a fait le bien, il a accompli des oeuvres bonnes.",
              axe1_verset: "Le verbe 'amila saalihan est la troisieme condition du salut : apres la foi en Dieu et la foi au Jour dernier, il faut agir. La foi sans les actes ne suffit pas — le verset exige l'oeuvre bonne comme preuve de la foi. Le verbe a l'accompli indique que les oeuvres doivent etre effectives, pas seulement intentionnelles.",
              axe2_voisins: "Les versets precedents montraient les enfants d'Israel recevant des bienfaits sans agir en retour — ils reclamaient, se plaignaient, desobeissaient. Ce verset 62 rappelle que la recompense divine est liee a l'action positive. Le contraste est fort entre l'inaction des enfants d'Israel et l'exigence universelle d'oeuvres bonnes.",
              axe3_sourate: "L'expression « 'amila saalihan » est recurrente dans la sourate. En 2:25, les croyants qui font le bien auront des jardins sous lesquels coulent les rivieres. En 2:82, ceux qui croient et font le bien sont les gens du paradis. L'association foi-action est un leitmotiv de la sourate — la foi seule ne suffit jamais.",
              axe4_coherence: "La racine '-m-l apparait plus de 360 fois dans le Coran. L'expression 'amila saalihan apparait dans de nombreuses sourates (18:88, 18:107, 19:60, 20:82, etc.). Le Coran insiste constamment sur l'union de la foi et des actes comme condition du salut. L'oeuvre bonne est la manifestation exterieure de la foi interieure.",
              axe5_frequence: "Pour la mission du khalifa, l'action est l'essence de la mission. Le khalifa ne se contente pas de croire — il agit pour etablir l'ordre divin sur terre. Les oeuvres bonnes sont le resultat tangible de la foi. Croire sans agir est une trahison de la mission."
            },
            "Sens isolé/Gouverneur": {
              status: "nul",
              senses: ["gouverneur"],
              proof_ctx: "Le sens de gouverneur ('amil) est un derive nominal. Ici le verbe 'amila a l'accompli designe l'acte d'agir, pas un titre administratif."
            }
          }
        }
      },
      {
        word_key: "slh", position: 12, sense_chosen: "oeuvre bonne",
        analysis_axes: {
          sense_chosen: "oeuvre bonne",
          concept_chosen: "Bonté/Rectitude",
          concepts: {
            "Bonté/Rectitude": {
              status: "retenu",
              senses: ["être bon", "rectitude", "réparer", "réconcilier", "oeuvre bonne", "vertueux", "réformer"],
              proof_ctx: "Le mot saalihan est un participe actif masculin singulier indefini accusatif de la racine s-l-h. Le Lane's donne « good, righteous, sound, proper, virtuous, suitable ». Le participe actif designe ce qui est dans l'etat de bonte — l'oeuvre bonne (al-'amal al-saalih) est l'acte conforme a l'ordre juste. L'indefini (saalihan, pas al-saalih) indique « quelque chose de bon » sans restriction.",
              axe1_verset: "Le mot saalihan qualifie le type d'action requise — pas n'importe quelle action mais une action bonne, conforme a la rectitude. Les trois conditions du salut sont ainsi : croire en Dieu, croire au Jour dernier, et accomplir des actes bons. La bonte de l'acte est definie par sa conformite a l'ordre divin.",
              axe2_voisins: "Les versets precedents montraient des actes qui n'etaient pas saalih — les enfants d'Israel changeaient la parole, corrompaient les ordres, se comportaient avec arrogance. Ce verset 62 pose le critere positif : l'oeuvre bonne. Le contraste souligne que la rectitude est un choix delibere, pas un acquis communautaire.",
              axe3_sourate: "La racine s-l-h apparait dans la sourate pour designer la rectitude morale. En 2:11, les corrompeurs pretendent etre des reformateurs (muslihun). En 2:220, il est question d'ameliorer le sort des orphelins (islaah). La sourate distingue la vraie rectitude (conforme a l'ordre divin) de la fausse (pretention humaine).",
              axe4_coherence: "L'expression 'amila saalihan apparait dans de nombreuses sourates. En 18:110, « quiconque espere la rencontre de son Seigneur, qu'il fasse une oeuvre bonne ». En 103:3, seuls « ceux qui croient et font le bien » echappent a la perte. La rectitude des actes est un critere universel constant dans le Coran.",
              axe5_frequence: "Pour la mission du khalifa, la rectitude est le critere de toute action. Le khalifa doit non seulement agir mais agir bien — selon l'ordre divin. Les oeuvres bonnes reforment la terre et etablissent la justice. La mission du khalifa est fondamentalement un acte de salaah (rectitude)."
            },
            "Sens isolé/Paix": {
              status: "nul",
              senses: ["paix"],
              proof_ctx: "Le sens de paix (sulh) est un derive nominal. Ici le participe actif saalihan qualifie l'oeuvre comme bonne et juste, pas comme pacifique."
            }
          }
        }
      },
      {
        word_key: "ajr", position: 14, sense_chosen: "recompense",
        analysis_axes: {
          sense_chosen: "recompense",
          concept_chosen: "Rétribution/Salaire",
          concepts: {
            "Rétribution/Salaire": {
              status: "retenu",
              senses: ["récompense", "salaire", "rémunération", "dot"],
              proof_ctx: "Le mot ajruhum est un nom masculin singulier nominatif avec pronom 3MP de la racine a-j-r. Le Lane's donne « reward, recompense, hire, wages ». La recompense (ajr) est ce que l'on recoit en retour d'un effort ou d'une action meritoire. Le pronom possessif (hum = leur) indique que la recompense appartient aux croyants — elle leur est due.",
              axe1_verset: "La recompense est le resultat des trois conditions remplies (foi, Jour dernier, oeuvres bonnes). Le verset dit « fa-lahum ajruhum » — « alors pour eux leur recompense ». Le « fa » (alors) indique la consequence logique. L'ajr est localise « aupres de leur Seigneur » — c'est une recompense divine, pas humaine. Elle est garantie et permanente.",
              axe2_voisins: "Les versets precedents montraient Dieu accordant des bienfaits materiels (manne, cailles, eau) aux enfants d'Israel. Ce verset 62 promet une recompense d'un ordre superieur — l'ajr aupres du Seigneur est eschatologique et eternel. La recompense materielle du desert est temporaire ; la recompense de la foi est permanente.",
              axe3_sourate: "La racine a-j-r apparait dans la sourate pour designer la recompense divine. En 2:112, « celui qui soumet son visage a Dieu en etant bienfaisant aura sa recompense aupres de son Seigneur ». La formule est presque identique a celle de ce verset. La sourate repete le principe : foi + actes = recompense aupres de Dieu.",
              axe4_coherence: "La racine a-j-r apparait plus de 100 fois dans le Coran. La recompense divine (ajr) est toujours liee a la foi et aux actes. En 3:199, « leur recompense est aupres de leur Seigneur ». En 16:97, « Nous les recompenserons selon le meilleur de ce qu'ils faisaient ». L'ajr divin est toujours juste et genereux.",
              axe5_frequence: "Pour la mission du khalifa, la recompense divine est la motivation ultime. Le khalifa n'attend pas de recompense humaine — son ajr est aupres de Dieu. Cette certitude libere le khalifa de la quete du pouvoir et de la richesse terrestres. La recompense eschatologique oriente la mission vers l'excellence."
            }
          }
        }
      },
      {
        word_key: "end", position: 15, sense_chosen: "aupres de",
        analysis_axes: {
          sense_chosen: "aupres de",
          concept_chosen: "Proximité/Présence",
          concepts: {
            "Proximité/Présence": {
              status: "retenu",
              senses: ["auprès de", "chez", "près de"],
              proof_ctx: "Le mot 'inda est une preposition locative de la racine '-n-d. Le Lane's donne « at, with, near, in the presence of, in the opinion of ». La preposition indique la proximite — etre 'inda quelqu'un c'est etre dans sa presence, dans sa sphere. 'Inda rabbihim signifie « dans la presence/science/garde de leur Seigneur ». La recompense est conservee aupres de Dieu — elle est en securite et garantie.",
              axe1_verset: "La preposition 'inda localise la recompense — elle n'est pas dans ce monde mais « aupres de leur Seigneur ». Cette localisation est une garantie : ce qui est aupres de Dieu ne peut etre perdu, vole ou diminue. La recompense terrestre est ephemere ; celle qui est 'inda Allah est eternelle et certaine.",
              axe2_voisins: "Les versets precedents montraient des bienfaits materiels donnes sur terre (manne, cailles). Ce verset 62 eleve le regard vers une recompense « aupres du Seigneur » — au-dela du materiel terrestre. La transition du terrestre au divin marque un changement de registre dans le recit coranique.",
              axe3_sourate: "L'expression « 'inda rabbihim » apparait dans la sourate pour indiquer la valeur supreme. En 2:112, la meme formule est utilisee. En 2:262, ceux qui depensent dans le chemin de Dieu « ont leur recompense aupres de leur Seigneur ». La sourate utilise cette expression pour designer ce qui a la plus haute valeur.",
              axe4_coherence: "L'expression 'inda Allah ou 'inda rabbihim apparait des dizaines de fois dans le Coran. En 3:169, les martyrs « sont vivants aupres de leur Seigneur ». En 42:36, « ce qui est aupres de Dieu est meilleur et plus durable ». La proximite divine est le sommet de toute aspiration.",
              axe5_frequence: "Pour la mission du khalifa, savoir que la recompense est aupres de Dieu libere des attentes terrestres. Le khalifa agit pour Dieu, pas pour la reconnaissance humaine. La certitude que l'ajr est 'inda Allah donne la patience face aux epreuves et la perseverance dans la mission."
            },
            "Opinion/Jugement": {
              status: "nul",
              senses: ["selon"],
              proof_ctx: "Le sens de « selon » ('indi = a mon avis) est un usage derive. Ici 'inda rabbihim signifie clairement « dans la presence de leur Seigneur », pas « selon leur Seigneur »."
            }
          }
        }
      },
      {
        word_key: "rbb", position: 16, sense_chosen: "seigneur",
        analysis_axes: {
          sense_chosen: "seigneur",
          concept_chosen: "Seigneurie/Autorité bienveillante",
          concepts: {
            "Seigneurie/Autorité bienveillante": {
              status: "retenu",
              senses: ["celui qui possède", "maître", "gouverner", "propriétaire", "celui qui élève", "celui qui entretient", "seigneur"],
              proof_ctx: "Le mot rabbihim est un nom genitif avec pronom possessif 3MP de la racine r-b-b. Le Lane's donne « lord, master, owner, sustainer, one who nourishes and rears ». Le Seigneur (rabb) est Celui qui possede, eleve, nourrit et entretient. L'ajout du pronom possessif (hum = leur) cree un lien personnel — « leur Seigneur » indique une relation directe entre Dieu et les croyants.",
              axe1_verset: "La recompense est localisee « aupres de leur Seigneur ». Le mot rabb souligne la relation de soin et d'autorite — le Seigneur qui a eleve Ses creatures les recompense pour leur fidelite. Le pronom possessif (hum) personnalise la relation — ce n'est pas un Dieu lointain mais leur Seigneur a eux, Celui qui les connait et les garde.",
              axe2_voisins: "Les versets precedents utilisaient le nom Allah (le Dieu) et les pronoms de majeste (Nous). Ce verset 62 utilise rabb (Seigneur) avec le pronom possessif — un changement qui souligne la proximite et la bienveillance. Le Seigneur qui punit la desobeissance (versets precedents) est aussi Celui qui recompense la fidelite.",
              axe3_sourate: "La racine r-b-b est parmi les plus frequentes de la sourate. En 2:5, les bien-guides sont « sur une voie de leur Seigneur ». En 2:26, le Seigneur ne rougit pas de donner des paraboles. La seigneurie divine structure toute la sourate — Dieu est le Maitre qui eleve, nourrit, teste et recompense.",
              axe4_coherence: "La racine r-b-b apparait plus de 900 fois dans le Coran. Le mot rabb est le nom divin le plus utilise apres Allah. En 1:2, « Louange a Dieu, Seigneur des mondes ». La seigneurie divine est universelle (rabb al-'alamin) et personnelle (rabbuhum). Elle combine l'autorite supreme et la bienveillance la plus intime.",
              axe5_frequence: "Pour la mission du khalifa, le Seigneur est Celui qui a confie la mission. Le khalifa est le representant du rabb sur terre. La seigneurie divine est le modele de la gouvernance terrestre — autorite avec bienveillance, possession avec soin, pouvoir avec misericorde."
            },
            "Croissance/Augmentation": {
              status: "probable",
              senses: ["développer", "augmenter", "croître", "excès", "colline", "éminence", "faire grandir", "nourrir"],
              proof_ctx: "Le sens de croissance est le sens premier de r-b-b (raba = grandir, augmenter). Le Seigneur (rabb) est etymologiquement « Celui qui fait grandir ». Ce sens fondamental nourrit le concept de seigneurie — le rabb est le maitre qui eleve et fait croitre ce qu'il possede. Ici le mot rabbihim designe Dieu comme Seigneur-educateur.",
              axe1_verset: "La recompense « aupres de leur Seigneur » implique la croissance — le rabb fait grandir et mener a maturite ceux qui Lui obeissent. La recompense n'est pas seulement un salaire mais un epanouissement sous la garde du Seigneur qui fait croitre. Ceux qui croient et agissent bien grandissent dans la proximite divine.",
              axe2_voisins: "Les versets precedents montraient Dieu faisant croitre les enfants d'Israel dans le desert — les nourrissant, les abreuvant, les protegeant. Ce verset 62 promet une croissance d'un autre ordre — la croissance spirituelle aupres du Seigneur. La tarbiya (education du rabb) est le fil conducteur du recit.",
              axe3_sourate: "La racine r-b-b avec le sens de croissance apparait dans la sourate en lien avec la creation et l'education. Le rabb est Celui qui fait croitre les plantes, les etres humains, les societes. La sourate montre que cette croissance peut etre physique (bienfaits du desert) ou spirituelle (recompense eschatologique).",
              axe4_coherence: "Le mot rabb derive de rabba/yarubbu (faire croitre, nourrir, elever). En 26:18, Pharaon dit a Moise « ne t'avons-nous pas eleve (rabbaynaaka) parmi nous ? ». Le double sens (seigneur/educateur) est constant — le rabb est toujours celui qui fait grandir avec autorite et bienveillance.",
              axe5_frequence: "La croissance sous l'autorite du Seigneur est le modele de la mission du khalifa. Le khalifa fait croitre ce qui est confie a sa charge — les etres humains, la terre, les ressources. La tarbiya divine est le modele de la gouvernance terrestre."
            },
            "Commerce/Usure": {
              status: "nul",
              senses: ["augmentation de dette", "intérêt", "usure"],
              proof_ctx: "L'usure (riba) est un derive de r-b-b (augmentation). Ici rabbihim avec le pronom possessif designe clairement le Seigneur, pas une transaction financiere."
            },
            "Éducation/Accompagnement": {
              status: "probable",
              senses: ["élever un enfant", "former", "éduquer", "accompagner la croissance"],
              proof_ctx: "L'education (tarbiya) derive de r-b-b — le rabb est l'educateur supreme. Le mot rabbihim contient cette dimension — le Seigneur qui eduque et accompagne la croissance de Ses creatures. La recompense aupres du rabb est aussi un accompagnement educatif eternel.",
              axe1_verset: "Le mot rabbihim dans le contexte de la recompense implique que le Seigneur continue de prendre soin des croyants. La recompense n'est pas un objet donne et abandonne mais un accompagnement continu par le rabb-educateur. La proximite divine ('inda rabbihim) est un espace d'education permanente.",
              axe2_voisins: "Les versets precedents montraient l'education divine des enfants d'Israel — par les epreuves, les bienfaits, les ordres. Ce verset 62 montre que l'education divine aboutit a la recompense pour ceux qui apprennent la lecon. L'education est un processus dont la recompense est l'aboutissement.",
              axe3_sourate: "La dimension educative de r-b-b traverse toute la sourate. Les enfants d'Israel sont eduques par les epreuves et les bienfaits. Les croyants sont eduques par les preceptes. Le rabb est constamment l'educateur qui forme ses creatures a travers l'experience et la revelation.",
              axe4_coherence: "En 17:24, la priere « Seigneur, fais-leur misericorde comme ils m'ont eduque (rabbayaniyy) etant petit » montre le lien entre seigneurie et education. Le rabb divin est le modele de l'educateur — patient, bienveillant, exigeant et juste.",
              axe5_frequence: "L'education divine est le coeur de la mission du khalifa. Le khalifa est un educateur qui reflete la tarbiya du rabb. Accompagner la croissance des etres humains vers la rectitude est l'essence de la mission terrestre."
            },
            "Sens isolé/Fixer": {
              status: "nul",
              senses: ["fixer"],
              proof_ctx: "Le sens de fixer est un usage marginal de r-b-b. Le mot rabbihim designe sans ambiguite le Seigneur."
            },
            "Sens isolé/Groupe": {
              status: "nul",
              senses: ["groupe"],
              proof_ctx: "Le sens de groupe est un usage marginal. Le mot rabbihim avec le pronom possessif designe le Seigneur, pas un groupe."
            },
            "Sens isolé/Rassembler": {
              status: "nul",
              senses: ["rassembler"],
              proof_ctx: "Le sens de rassembler est un usage marginal. Le mot rabbihim designe le Seigneur dans un contexte de retribution."
            },
            "Souffle/Vent": {
              status: "nul",
              senses: ["essoufflement"],
              proof_ctx: "L'essoufflement est un sens concret marginal. Le mot rabbihim designe le Seigneur, pas un etat physique."
            },
            "Sens isolé/Confiture": {
              status: "nul",
              senses: ["confiture"],
              proof_ctx: "La confiture (rubb) est un sens concret marginal. Le mot rabbihim designe le Seigneur."
            }
          }
        }
      },
      {
        word_key: "khw f", position: 18, sense_chosen: "peur",
        analysis_axes: {
          sense_chosen: "peur",
          concept_chosen: "Crainte/Peur",
          concepts: {
            "Crainte/Peur": {
              status: "retenu",
              senses: ["craindre", "peur", "avoir peur", "effrayer"],
              proof_ctx: "Le mot khawfun est un nom masculin singulier indefini nominatif de la racine kh-w-f. Le Lane's donne « fear, dread, apprehension, expectation of evil ». La crainte est l'anticipation d'un mal futur — l'ame ressent la peur face a ce qui pourrait arriver. L'indefini (khawfun, pas al-khawf) avec la negation (la) indique l'absence totale de toute forme de crainte.",
              axe1_verset: "La negation « la khawfun 'alayhim » est la premiere partie de la double promesse qui conclut le verset. Pas de crainte sur eux — ceux qui remplissent les trois conditions n'ont rien a craindre de l'avenir. La crainte est orientee vers le futur (ce qui pourrait arriver), et elle est totalement niee. C'est une securite eschatologique absolue.",
              axe2_voisins: "Les versets precedents montraient les enfants d'Israel dans la crainte — crainte de Pharaon, crainte du desert, crainte de la faim et de la soif. Ce verset 62 promet l'absence de crainte pour ceux qui croient et agissent bien. La peur est le lot de ceux qui desobeissent ; la securite est le lot de ceux qui obeissent.",
              axe3_sourate: "La formule « la khawfun 'alayhim wa-la hum yahzanun » est une formule recurente dans la sourate. En 2:38, la meme promesse est faite a ceux qui suivent la guidee divine. En 2:112, elle est repetee pour ceux qui soumettent leur visage a Dieu. La sourate utilise cette formule comme un refrain de securite pour les croyants.",
              axe4_coherence: "La racine kh-w-f apparait plus de 120 fois dans le Coran. La formule « la khawfun 'alayhim wa-la hum yahzanun » apparait dans de nombreuses sourates (3:170, 6:48, 7:35, 10:62, etc.). C'est une promesse divine constante — la securite eschatologique pour les croyants fideles.",
              axe5_frequence: "Pour la mission du khalifa, l'absence de crainte est la liberte qui permet d'agir. Le khalifa qui ne craint que Dieu est libre d'affronter les epreuves de la mission. La peur des creatures paralyse ; la confiance en Dieu libere. La promesse de securite divine donne au khalifa le courage d'accomplir sa mission."
            },
            "Menace/Danger": {
              status: "nul",
              senses: ["danger"],
              proof_ctx: "Le danger est une realite exterieure objective. Ici le mot khawfun designe l'emotion interieure de peur, pas une menace exterieure. La negation nie l'etat interieur de crainte, pas l'existence du danger."
            }
          }
        }
      },
      {
        word_key: "hzn", position: 21, sense_chosen: "etre triste",
        analysis_axes: {
          sense_chosen: "etre triste",
          concept_chosen: "Tristesse/Affliction",
          concepts: {
            "Tristesse/Affliction": {
              status: "retenu",
              senses: ["être triste", "tristesse", "chagrin", "affliger", "attrister"],
              proof_ctx: "Le verbe yahzanuuna est un inaccompli 3MP de la racine h-z-n. Le Lane's donne « he was sad, he grieved, he was sorrowful, he mourned ». La tristesse est l'etat interieur de l'ame qui souffre d'une perte passee ou d'un manque. Le verbe a l'inaccompli avec la negation (la hum yahzanuun) indique qu'ils ne seront jamais dans l'etat de tristesse — c'est une promesse permanente.",
              axe1_verset: "La negation « la hum yahzanuun » est la seconde partie de la double promesse. Pas de tristesse pour eux — ceux qui remplissent les conditions n'ont pas de regret pour le passe. La tristesse est orientee vers le passe (ce qui est perdu), et elle est totalement niee. Avec l'absence de crainte (futur) et l'absence de tristesse (passe), la totalite du temps est couverte.",
              axe2_voisins: "Les versets precedents montraient les enfants d'Israel dans l'affliction — abaissement, miserabilite, colere divine. Ce verset 62 promet la fin de la tristesse pour ceux qui croient et agissent bien. Le chagrin des desobeissants contraste avec la joie des obeissants.",
              axe3_sourate: "La racine h-z-n apparait dans la sourate avec la formule « la hum yahzanun ». En 2:38 et 2:112, la meme promesse est faite. La sourate utilise systematiquement cette formule pour clore les descriptions de la recompense des croyants. La fin de la tristesse est l'aboutissement de la foi.",
              axe4_coherence: "La racine h-z-n apparait environ 40 fois dans le Coran. En 3:139, « ne faiblissez pas et ne soyez pas tristes ». En 9:40, « ne sois pas triste, Dieu est avec nous ». En 12:86, Jacob dit « je ne me plains de mon chagrin qu'a Dieu ». La tristesse est reconnue comme emotion humaine mais Dieu promet de l'effacer pour les croyants.",
              axe5_frequence: "Pour la mission du khalifa, l'absence de tristesse permet la perseverance. Le khalifa qui ne regrette pas le passe peut se concentrer sur le present et l'avenir. Le chagrin paralyse ; la confiance en la promesse divine libere. Le khalifa sait que ses sacrifices ne sont pas vains — il n'a pas de raison d'etre triste."
            }
          }
        }
      }
    ]
  },

  // =====================================================
  // VERSET 2:63
  // verse_id=70, analysis_id=431
  // "Et lorsque Nous avons pris votre engagement et eleve au-dessus de
  //  vous le mont : Prenez avec force ce que Nous vous avons donne
  //  et rappelez-vous ce qui s'y trouve, afin que vous soyez premunis."
  // =====================================================
  63: {
    verse_id: 70,
    analysis_id: 431,
    translation_arab: "Et lorsque Nous avons pris votre engagement et eleve au-dessus de vous le mont : Prenez avec force ce que Nous vous avons donne et rappelez-vous ce qui s'y trouve, afin que vous soyez premunis.",
    full_translation: "Et [rappelez-vous] lorsque Nous avons pris votre engagement et eleve au-dessus de vous le mont [Sinai] : Prenez avec force ce que Nous vous avons donne et rappelez-vous ce qui s'y trouve, afin que vous soyez [pieusement] premunis.",
    translation_explanation: `§DEMARCHE§
Ce verset rappelle un episode fondateur de l'alliance entre Dieu et les enfants d'Israel : la prise de l'engagement au pied du mont Sinai. Le verbe **akhadhna** est un accompli 1P de la racine a-kh-dh. Le Lane's donne « he took, he seized, he grasped ». La premiere personne du pluriel (Nous) est le pluriel de majeste. Prendre l'engagement signifie l'etablir avec autorite — Dieu saisit l'engagement de Son peuple. Le mot **miithaqakum** est un nom masculin singulier accusatif avec pronom 2MP de la racine w-th-q. Le Lane's donne « covenant, pact, compact, firm agreement, bond ». Le miithaq est un engagement ferme et lie — c'est un pacte qui oblige les parties. Le suffixe -kum (votre) indique que l'engagement est celui des enfants d'Israel. Le verbe **rafa'na** est un accompli 1P de la racine r-f-'. Le Lane's donne « he raised, he lifted, he elevated ». Dieu a eleve le mont au-dessus des enfants d'Israel — un acte de puissance qui accompagne la prise d'engagement. Le mot **fawqakum** est une preposition avec pronom 2MP de la racine f-w-q. Le Lane's donne « above, over, upon ». Le mont a ete eleve au-dessus d'eux — en surplomb. Le mot **al-tuura** est un nom masculin singulier defini accusatif de la racine t-w-r. Le Lane's donne « mount, mountain, Mount Sinai ». Le mont (al-tur) est le mont Sinai, lieu de la revelation de la Torah a Moise. L'imperatif **khudhuu** est un imperatif 2MP de la racine a-kh-dh. Le Lane's donne « take, grasp, seize ». L'ordre est de prendre fermement ce qui a ete donne — la Torah. Le mot **bi-quwwatin** est un nom feminin singulier indefini genitif avec preposition bi de la racine q-w-y. Le Lane's donne « strength, power, force, might ». La force designe la resolution et la determination dans l'application. Le verbe **aataynakum** est un accompli 1P forme IV avec pronom 2MP de la racine a-t-y. Le Lane's donne « he gave, he brought, he came with ». Dieu a donne la Torah — le don divin exige une reception avec force. Le verbe **tattaquuna** est un inaccompli 2MP forme VIII de la racine w-q-y. Le Lane's donne « he guarded himself, he feared God, he was pious, he preserved himself ». Se premunir (ittaqa) c'est se proteger du mal par la crainte reverentielle de Dieu.

§JUSTIFICATION§
**pris** — Le sens retenu est « prendre ». Le verbe akhadhna designe l'acte de saisir l'engagement. L'alternative « punir » est ecartee car le contexte est l'etablissement d'un pacte, pas un chatiment.

**engagement** — Le sens retenu est « pacte ». Le mot miithaqakum designe un accord ferme et lie. Pas d'alternative pertinente — le miithaq est toujours un engagement solennel.

**eleve** — Le sens retenu est « lever ». Le verbe rafa'na designe l'elevation physique du mont. L'alternative « enlever » est ecartee car le contexte decrit un mouvement vers le haut, pas un retrait.

**au-dessus de** — Le sens retenu est « au-dessus ». Le mot fawqakum indique la position de surplomb. L'alternative « surpasser » est ecartee car le contexte est spatial et physique.

**mont** — Le sens retenu est « mont ». Le mot al-tuura designe le mont Sinai. L'alternative « etape » est ecartee car l'article defini et le contexte geographique designent un lieu precis.

**prenez** — Le sens retenu est « prendre ». L'imperatif khudhuu ordonne de saisir fermement la Torah. L'alternative « punir » est ecartee car l'imperatif suivi de « ce que Nous vous avons donne » designe un acte de reception.

**force** — Le sens retenu est « force ». Le mot quwwatin designe la resolution et la determination. Pas d'alternative pertinente.

**donne** — Le sens retenu est « donner ». Le verbe aataynakum designe le don divin de la Torah. L'alternative « detruire » est ecartee car la forme IV avec le pronom 2MP designe un transfert genereux.

**premunis** — Le sens retenu est « se premunir ». Le verbe tattaquuna designe la preservation pieuse de soi-meme. L'alternative « bouclier » est ecartee car la forme VIII verbale designe un acte de protection interieure.

§CRITIQUE§
**pris l'engagement vs impose l'engagement** — Le verbe akhadha avec miithaq peut signifier « prendre l'engagement » (le recevoir) ou « imposer l'engagement » (l'exiger). Le mont eleve au-dessus d'eux suggere une pression — l'engagement n'est pas volontaire mais impose sous la menace du mont suspendu. Cependant « prendre » est plus neutre et respecte le texte.
**force vs determination** — Le mot quwwa designe la force physique et morale. « Prenez avec force » signifie « appliquez avec determination et serieux ». Ce n'est pas la force brute mais la fermete dans l'engagement.
**premunis vs craignez** — Le verbe ittaqa vient de waqaya (proteger). « Se premunir » est plus precis que « craindre » car il garde le sens de protection active — se mettre a l'abri du mal par l'obeissance a Dieu.`,
    segments: [
      { fr: "et lorsque", phon: "wa-idh", arabic: "وَإِذْ", is_particle: true, position: 0 },
      { fr: "Nous avons pris", pos: "verbe", phon: "akhadhna", arabic: "أَخَذْنَا", word_key: "akhz", is_particle: false, sense_retenu: "prendre", position: 1 },
      { fr: "votre engagement", pos: "nom", phon: "miithaqakum", arabic: "مِيثَٰقَكُمْ", word_key: "wthq", is_particle: false, sense_retenu: "pacte", position: 2 },
      { fr: "et Nous avons eleve", pos: "verbe", phon: "wa-rafa'na", arabic: "وَرَفَعْنَا", word_key: "rfe", is_particle: false, sense_retenu: "lever", position: 3 },
      { fr: "au-dessus de vous", pos: "nom", phon: "fawqakum", arabic: "فَوْقَكُمُ", word_key: "fwq", is_particle: false, sense_retenu: "au-dessus", position: 4 },
      { fr: "le mont", pos: "nom", phon: "al-tuura", arabic: "ٱلطُّورَ", word_key: "twr", is_particle: false, sense_retenu: "mont", position: 5 },
      { fr: "prenez", pos: "verbe", phon: "khudhuu", arabic: "خُذُوا۟", word_key: "akhz", is_particle: false, sense_retenu: "prendre", position: 6 },
      { fr: "ce que", phon: "maa", arabic: "مَآ", is_particle: true, position: 7 },
      { fr: "Nous vous avons donne", pos: "verbe", phon: "aataynakum", arabic: "ءَاتَيْنَٰكُم", word_key: "aty", is_particle: false, sense_retenu: "donner", position: 8 },
      { fr: "avec force", pos: "nom", phon: "bi-quwwatin", arabic: "بِقُوَّةٍ", word_key: "qwy", is_particle: false, sense_retenu: "force", position: 9 },
      { fr: "et rappelez-vous", phon: "wa-udhkuruu", arabic: "وَٱذْكُرُوا۟", is_particle: true, position: 10 },
      { fr: "ce qui", phon: "maa", arabic: "مَا", is_particle: true, position: 11 },
      { fr: "s'y trouve", phon: "fiihi", arabic: "فِيهِ", is_particle: true, position: 12 },
      { fr: "afin que", phon: "la'allakum", arabic: "لَعَلَّكُمْ", is_particle: true, position: 13 },
      { fr: "vous soyez premunis", pos: "verbe", phon: "tattaquuna", arabic: "تَتَّقُونَ", word_key: "wqy", is_particle: false, sense_retenu: "se premunir", position: 14 }
    ],
    words: [
      {
        word_key: "akhz", position: 1, sense_chosen: "prendre",
        analysis_axes: {
          sense_chosen: "prendre",
          concept_chosen: "Prise/Saisie",
          concepts: {
            "Prise/Saisie": {
              status: "retenu",
              senses: ["prendre", "saisir", "adopter"],
              proof_ctx: "Le verbe akhadhna est un accompli 1P de la racine a-kh-dh. Le Lane's donne « he took, he seized, he grasped, he took hold of ». Le verbe apparait deux fois dans le verset — d'abord pour la prise de l'engagement (akhadhna miithaqakum), puis pour l'ordre de prendre avec force (khudhuu). La premiere occurrence designe l'acte divin de saisir l'engagement ; la seconde est un imperatif ordonnant aux enfants d'Israel de saisir ce qui leur a ete donne.",
              axe1_verset: "Le verbe akhadha ouvre le verset avec la prise de l'engagement — Dieu saisit le pacte de Son peuple. Puis le meme verbe revient en imperatif (khudhuu) pour ordonner de prendre la Torah avec force. La double occurrence cree un parallelisme — Dieu prend leur engagement, ils doivent prendre Sa revelation. L'echange est reciproque : un engagement contre un don.",
              axe2_voisins: "Le verset 62 promettait la recompense a quiconque croit et agit bien. Ce verset 63 revient au cas specifique d'Israel — Dieu leur a pris un engagement solennel. Le contraste est fort : le verset 62 etait universel, le verset 63 est particulier. L'engagement d'Israel est un cas d'espece du principe universel.",
              axe3_sourate: "La racine a-kh-dh est frequente dans la sourate. En 2:83, « Nous avons pris (akhadhna) l'engagement des enfants d'Israel ». En 2:84, « Nous avons pris votre engagement ». La prise d'engagement divine est un motif recurrent — Dieu rappelle constamment le pacte pour souligner la desobeissance subsequente.",
              axe4_coherence: "La racine a-kh-dh apparait plus de 270 fois dans le Coran. Le verbe akhadha avec miithaq (engagement) apparait dans de nombreux contextes d'alliance (3:81, 5:7, 5:12, 7:169). La prise d'engagement est un acte fondateur de la relation entre Dieu et les communautes humaines.",
              axe5_frequence: "Pour la mission du khalifa, la prise d'engagement est le fondement de la responsabilite. Le khalifa a un pacte avec Dieu — prendre la responsabilite de la terre. L'imperatif « prenez avec force » s'applique aussi au khalifa : saisir la mission divine avec determination et resolution."
            },
            "Châtiment": {
              status: "nul",
              senses: ["punir", "reprocher"],
              proof_ctx: "Le chatiment (akhadha = saisir pour punir) est un sens derive. Ici le verbe akhadhna est suivi de miithaqakum (votre engagement), designant clairement l'acte d'etablir un pacte, pas de punir."
            }
          }
        }
      },
      {
        word_key: "wthq", position: 2, sense_chosen: "pacte",
        analysis_axes: {
          sense_chosen: "pacte",
          concept_chosen: "Fermeté/Confiance",
          concepts: {
            "Fermeté/Confiance": {
              status: "retenu",
              senses: ["être solide", "lier solidement", "avoir confiance", "pacte", "se garantir", "être ferme"],
              proof_ctx: "Le mot miithaqakum est un nom masculin singulier accusatif avec pronom 2MP de la racine w-th-q. Le Lane's donne « covenant, compact, pact, firm agreement, bond ». Le miithaq est forme sur le schema mif'al qui designe l'instrument ou le lieu — le miithaq est l'instrument par lequel on lie fermement. Le suffixe -kum (votre) indique que l'engagement est celui des enfants d'Israel envers Dieu.",
              axe1_verset: "Le miithaq est l'objet de la prise (akhadhna miithaqakum) — Dieu a pris leur engagement. Cet engagement est renforce par l'elevation du mont au-dessus d'eux — la fermete du pacte est soulignee par la puissance divine. Le miithaq implique des obligations : prendre la Torah avec force et se rappeler son contenu.",
              axe2_voisins: "Le verset 62 enoncait un principe universel sans parler d'engagement particulier. Ce verset 63 revient a l'engagement specifique d'Israel — un pacte solennel avec des conditions precises. Le passage du general au particulier montre qu'Israel avait un engagement supplementaire en plus des conditions universelles.",
              axe3_sourate: "La racine w-th-q apparait dans la sourate pour designer les pactes divins. En 2:27, ceux qui rompent l'engagement (miithaq) de Dieu apres l'avoir contracte. En 2:83, le miithaq des enfants d'Israel. En 2:84, « Nous avons pris votre miithaq ». La sourate insiste sur la gravite de rompre le pacte divin.",
              axe4_coherence: "La racine w-th-q apparait environ 30 fois dans le Coran. Le miithaq est toujours un engagement solennel et ferme. En 4:21, le mariage est appele « miithaqan ghalizan » (un pacte solennel). Le pacte divin est le plus solennel de tous — il engage les communautes envers Dieu.",
              axe5_frequence: "Pour la mission du khalifa, le miithaq est le fondement de la legitimite. Le khalifa est lie par un pacte avec Dieu. La fermete (wathaaqa) de cet engagement empeche la trahison et la negligence. Le khalifa doit etre aussi ferme dans son engagement que le pacte lui-meme est solide."
            }
          }
        }
      },
      {
        word_key: "rfe", position: 3, sense_chosen: "lever",
        analysis_axes: {
          sense_chosen: "lever",
          concept_chosen: "Élévation/Exaltation",
          concepts: {
            "Élévation/Exaltation": {
              status: "retenu",
              senses: ["lever", "élever", "hausser", "exalter"],
              proof_ctx: "Le verbe rafa'na est un accompli 1P de la racine r-f-'. Le Lane's donne « he raised, he lifted up, he elevated, he exalted ». Dieu a eleve (rafa'na) le mont au-dessus des enfants d'Israel. L'elevation est physique et concrete — le mont Sinai a ete souleve et suspendu au-dessus d'eux comme un dais ou une menace. C'est un acte de puissance divine qui accompagne la prise d'engagement.",
              axe1_verset: "L'elevation du mont est le deuxieme acte divin du verset (apres la prise d'engagement). Le mont suspendu au-dessus d'eux cree une pression — il faut accepter l'engagement sous cette demonstration de puissance. L'elevation du mont est a la fois un signe de la grandeur divine et un rappel de la gravite de l'engagement.",
              axe2_voisins: "Le verset 62 promettait serenement la recompense. Ce verset 63 montre la solennite de l'engagement — Dieu ne se contente pas de demander, Il montre Sa puissance. Le contraste entre la douceur de la promesse (v62) et la force de l'engagement (v63) souligne que la foi requiert aussi de la fermete.",
              axe3_sourate: "La racine r-f-' apparait dans la sourate pour decrire des actes d'elevation divine. En 2:253, « Nous avons eleve certains au-dessus des autres ». L'elevation du mont est l'acte le plus spectaculaire — un miracle physique qui accompagne l'alliance. La sourate montre que Dieu utilise la puissance pour soutenir le pacte.",
              axe4_coherence: "En 7:171, le meme evenement est decrit : « lorsque Nous avons secoue le mont au-dessus d'eux comme si c'etait un dais ». En 4:154, « Nous avons eleve au-dessus d'eux le mont lors de leur pacte ». L'evenement est rapporte a plusieurs reprises, confirmant son importance dans l'histoire de l'alliance.",
              axe5_frequence: "Pour la mission du khalifa, l'elevation du mont rappelle que la mission divine s'accompagne de la puissance divine. Le khalifa n'est pas seul — Dieu soutient la mission par Sa puissance. L'elevation est aussi un avertissement : l'engagement divin n'est pas un jeu mais une affaire grave."
            },
            "Suppression": {
              status: "nul",
              senses: ["enlever"],
              proof_ctx: "Le sens d'enlever (rafa'a = retirer) est un usage derive. Ici le verbe rafa'na suivi de fawqakum (au-dessus de vous) et al-tuura (le mont) designe clairement l'elevation physique, pas un retrait."
            }
          }
        }
      },
      {
        word_key: "fwq", position: 4, sense_chosen: "au-dessus",
        analysis_axes: {
          sense_chosen: "au-dessus",
          concept_chosen: "Supériorité/Dessus",
          concepts: {
            "Supériorité/Dessus": {
              status: "retenu",
              senses: ["au-dessus", "surpasser", "exceller"],
              proof_ctx: "Le mot fawqakum est une preposition locative avec pronom 2MP de la racine f-w-q. Le Lane's donne « above, over, upon, on top of ». Fawqa indique la position spatiale superieure — le mont a ete eleve au-dessus (fawqa) des enfants d'Israel. La preposition est concrete et physique — le mont etait litteralement au-dessus de leurs tetes.",
              axe1_verset: "Le mot fawqakum precise la position du mont — au-dessus des enfants d'Israel. Cette position de surplomb cree une pression physique et psychologique. Le mont suspendu est une demonstration de la puissance divine et un rappel que l'engagement n'est pas optionnel. Dieu est au-dessus (bi-qudrati-Hi) et le mont est au-dessus d'eux (fawqakum).",
              axe2_voisins: "Les versets precedents montraient des bienfaits descendants (manne, cailles du ciel). Ce verset montre un mont eleve au-dessus — le mouvement descendant des bienfaits est remplace par le mouvement ascendant du mont. La direction « au-dessus » souligne la solennite et la gravite de l'engagement.",
              axe3_sourate: "La racine f-w-q apparait dans la sourate pour indiquer la hierarchie et la superiorite. En 2:212, « ceux qui ont la taqwa seront au-dessus d'eux au Jour de la Resurrection ». En 2:228, « les hommes ont un degre au-dessus d'elles ». La position « au-dessus » indique toujours la superiorite et l'autorite.",
              axe4_coherence: "La racine f-w-q apparait environ 50 fois dans le Coran. En 7:171, le mont est decrit « au-dessus d'eux comme un dais » (ka-annahu zullatun). En 2:19, « il y a des rangs au-dessus des rangs ». La position spatiale superieure symbolise toujours l'autorite et la puissance.",
              axe5_frequence: "Pour la mission du khalifa, la position « au-dessus » rappelle l'autorite divine qui surplombe toute mission terrestre. Le khalifa agit sous le regard de Dieu qui est au-dessus. La conscience de cette surveillance divine guide et contraint l'exercice de la mission."
            },
            "Rétablissement": {
              status: "nul",
              senses: ["se rétablir"],
              proof_ctx: "Le retablissement est un sens derive (revenir au-dessus). Le mot fawqakum dans le contexte de l'elevation du mont designe une position spatiale concrete, pas un retour a la sante."
            },
            "Sens isolé/Encoche": {
              status: "nul",
              senses: ["encoche de flèche"],
              proof_ctx: "L'encoche de fleche est un sens technique marginal. Le mot fawqakum designe clairement la position spatiale au-dessus."
            }
          }
        }
      },
      {
        word_key: "twr", position: 5, sense_chosen: "mont",
        analysis_axes: {
          sense_chosen: "mont",
          concept_chosen: "Montagne/Révélation",
          concepts: {
            "Montagne/Révélation": {
              status: "retenu",
              senses: ["mont", "montagne"],
              proof_ctx: "Le mot al-tuura est un nom masculin singulier defini accusatif de la racine t-w-r. Le Lane's donne « mount, mountain, specifically Mount Sinai ». Le mot tur avec l'article defini (al-tur) designe specifiquement le mont Sinai — le lieu sacre ou Moise a recu la Torah. C'est une montagne historique et geographique precise, identifiee dans la tradition comme le Jebel Musa dans la peninsule du Sinai.",
              axe1_verset: "Le mont (al-tur) est l'element central de la scene — il est eleve au-dessus des enfants d'Israel lors de la prise d'engagement. Le mont Sinai est le lieu de la revelation de la Torah, et son elevation au-dessus du peuple symbolise le poids de cette revelation. La montagne sacree surplombe ceux qui doivent accepter le pacte.",
              axe2_voisins: "Les versets precedents decrivaient des episodes dans le desert sans mention de lieu sacre specifique. Ce verset ancre le recit dans un lieu precis — le mont Sinai. Le mont est le point de contact entre le ciel et la terre, le lieu ou la revelation descend et ou l'engagement est pris.",
              axe3_sourate: "Le mont Sinai apparait dans la sourate comme repere geographique et spirituel de l'alliance. En 2:93, « Nous les avons fait trembler par le mont au-dessus d'eux ». La sourate rappelle a plusieurs reprises l'episode du mont pour souligner la desobeissance subsequente — ils ont vu le mont et ont quand meme desobei.",
              axe4_coherence: "La racine t-w-r apparait dans le Coran pour designer le mont Sinai (2:63, 2:93, 4:154, 7:171, 19:52, 20:80, 23:20, 28:29, 52:1, 95:2). En 52:1, Dieu jure « par le mont (wa-al-tur) ». En 95:2, « et par le mont Sinai (tur siniin) ». Le mont est un lieu sacre majeur dans la geographie coranique.",
              axe5_frequence: "Pour la mission du khalifa, le mont Sinai represente le lieu ou la mission est definie et le pacte est scelle. Le khalifa doit se rappeler l'origine sacree de sa mission — elle vient d'en haut, du lieu de la revelation. Le mont est un rappel permanent de la gravite de l'engagement divin."
            },
            "Phase/Développement": {
              status: "nul",
              senses: ["étape"],
              proof_ctx: "Le sens d'etape (tawr = phase) est un usage different de la racine. Ici l'article defini al-tuura et le contexte geographique (eleve au-dessus de vous) designent clairement une montagne physique, pas une phase de developpement."
            }
          }
        }
      },
      {
        word_key: "aty", position: 8, sense_chosen: "donner",
        analysis_axes: {
          sense_chosen: "donner",
          concept_chosen: "Venue/Arrivée",
          concepts: {
            "Venue/Arrivée": {
              status: "retenu",
              senses: ["venir", "arriver", "apporter", "donner", "commettre"],
              proof_ctx: "Le verbe aataynakum est un accompli 1P forme IV avec pronom 2MP de la racine a-t-y. Le Lane's donne « he gave, he brought, he came with ». La forme IV (af'ala) est causative — « il a fait venir vers » c'est-a-dire « il a donne ». Le verbe ataa dans sa forme IV signifie donner, accorder. Le pronom -kum (vous) est le beneficiaire du don — Dieu a donne aux enfants d'Israel (la Torah).",
              axe1_verset: "Le verbe aataynakum est au coeur de l'imperatif : « prenez avec force ce que Nous vous avons donne ». Le don divin est la Torah — la revelation donnee a Moise sur le mont Sinai. L'imperatif khudhuu (prenez) exige que le don soit recu avec force et determination, pas passivement.",
              axe2_voisins: "Les versets precedents montraient des dons materiels (manne, cailles, eau). Ce verset parle d'un don superieur — la revelation divine. Le passage du don materiel au don spirituel marque une elevation dans le recit. La Torah est le don qui donne sens a tous les autres dons.",
              axe3_sourate: "La racine a-t-y est tres frequente dans la sourate. Dieu « donne » (aata) constamment — la revelation, les bienfaits, la sagesse. En 2:87, « Nous avons donne a Moise le Livre ». En 2:53, « Nous avons donne a Moise le Livre et le critere ». Le don divin est le fil conducteur du recit des enfants d'Israel.",
              axe4_coherence: "La racine a-t-y apparait plus de 500 fois dans le Coran. Le verbe aata avec le sens de donner est l'un des plus frequents. En 17:2, « Nous avons donne a Moise le Livre ». En 28:43, « Nous avons donne a Moise le Livre ». Le don de la revelation est un acte divin recurrent qui lie toutes les communautes de foi.",
              axe5_frequence: "Pour la mission du khalifa, le don divin est ce qui fonde et oriente la mission. Le khalifa recoit la revelation comme guide et doit la « prendre avec force ». Le don divin n'est pas optionnel — il doit etre saisi et applique avec determination."
            },
            "Sens isolé/Détruire": {
              status: "nul",
              senses: ["détruire"],
              proof_ctx: "Le sens de detruire est un usage rare de a-t-y. Ici le verbe aataynakum avec le pronom beneficiaire -kum et dans le contexte de « prenez ce que Nous vous avons donne » designe clairement un don, pas une destruction."
            }
          }
        }
      },
      {
        word_key: "qwy", position: 9, sense_chosen: "force",
        analysis_axes: {
          sense_chosen: "force",
          concept_chosen: "Force/Puissance",
          concepts: {
            "Force/Puissance": {
              status: "retenu",
              senses: ["être fort", "puissance"],
              proof_ctx: "Le mot quwwatin est un nom feminin singulier indefini genitif de la racine q-w-y. Le Lane's donne « strength, power, force, might, ability ». La quwwa est la capacite d'agir et de resister — c'est la force physique et morale. La preposition bi (avec) indique la maniere — « prenez avec force » signifie prenez avec determination, resolution et fermete.",
              axe1_verset: "Le mot quwwatin qualifie la maniere de prendre la Torah — pas mollement mais avec force. L'imperatif « khudhuu maa aataynakum bi-quwwatin » exige une reception active et resolue de la revelation. La force n'est pas la violence mais la determination — l'engagement serieux et ferme dans l'application de la Torah.",
              axe2_voisins: "Les versets precedents montraient les enfants d'Israel recevoir passivement les bienfaits (manne, eau). Ce verset exige une reception active — avec force. Le contraste souligne que la revelation divine requiert un effort de la part de celui qui la recoit. La passivite ne suffit pas.",
              axe3_sourate: "La racine q-w-y apparait dans la sourate pour designer la puissance. En 2:165, « la puissance appartient entierement a Dieu ». La force requise ici est humaine — c'est la determination dans l'application de la loi divine. La sourate oppose la force divine (absolue) a la force humaine (requise pour l'obeissance).",
              axe4_coherence: "En 7:145, Dieu dit a Moise : « prends-les avec force et ordonne a ton peuple de prendre le meilleur ». La formule est parallele — la force dans la reception de la revelation est une exigence constante. En 19:12, Dieu dit a Yahya : « prends le Livre avec force ». La force est toujours requise pour porter la revelation.",
              axe5_frequence: "Pour la mission du khalifa, la force est essentielle. Le khalifa doit saisir la revelation avec force et l'appliquer avec determination. La faiblesse dans l'application est une trahison du pacte. La quwwa du khalifa est sa resolution face aux difficultes de la mission."
            }
          }
        }
      },
      {
        word_key: "wqy", position: 14, sense_chosen: "se premunir",
        analysis_axes: {
          sense_chosen: "se premunir",
          concept_chosen: "Protection/Préservation",
          concepts: {
            "Protection/Préservation": {
              status: "retenu",
              senses: ["protéger", "préserver", "craindre", "piété", "se prémunir", "éviter"],
              proof_ctx: "Le verbe tattaquuna est un inaccompli 2MP forme VIII de la racine w-q-y. Le Lane's donne « he guarded himself, he feared God, he preserved himself from sin ». La forme VIII (ifta'ala) est reflexive — se proteger soi-meme. Le verbe ittaqa vient de waqaya (proteger). Se premunir (ittaqa) c'est se mettre a l'abri du mal en observant les commandements divins. C'est la taqwa — la crainte reverentielle qui preserve du peche.",
              axe1_verset: "Le verbe tattaquuna conclut le verset comme objectif final. Prendre avec force la Torah et se rappeler son contenu — tout cela a pour but la taqwa, la preservation pieuse. La taqwa est le fruit de l'engagement et de l'effort — elle ne vient pas sans action. Le verset trace un chemin : engagement → force → rappel → taqwa.",
              axe2_voisins: "Le verset 62 promettait l'absence de crainte (la khawfun). Ce verset 63 exige la taqwa — la crainte reverentielle de Dieu. La distinction est fondamentale : l'absence de crainte terrestre est le resultat de la taqwa (crainte de Dieu). Celui qui craint Dieu n'a rien d'autre a craindre.",
              axe3_sourate: "La racine w-q-y est fondamentale dans la sourate. En 2:2, le Livre est « une guidee pour les muttaqin (ceux qui se premunissent) ». En 2:21, « adorez votre Seigneur afin que vous vous premunissiez ». La taqwa est le leitmotiv de la sourate — elle est le but ultime de toute adoration et de tout commandement.",
              axe4_coherence: "La racine w-q-y apparait plus de 250 fois dans le Coran. La taqwa est mentionnee comme qualite essentielle des croyants. En 3:102, « craignez Dieu comme Il merite d'etre craint ». En 49:13, « le plus noble d'entre vous aupres de Dieu est le plus pieux (atqaakum) ». La taqwa est le critere ultime de la noblesse.",
              axe5_frequence: "Pour la mission du khalifa, la taqwa est le bouclier et le guide. Le khalifa qui se premunit contre le mal par la conscience de Dieu est protege dans sa mission. La taqwa empeche l'abus de pouvoir, l'injustice et la negligence. Elle est la qualite premiere du gouvernant juste."
            },
            "Sens isolé/Bouclier": {
              status: "nul",
              senses: ["bouclier"],
              proof_ctx: "Le bouclier (wiqaya) est un sens concret de la racine — l'objet qui protege. Ici le verbe tattaquuna designe l'acte interieur de se premunir par la piete, pas un objet physique de protection."
            }
          }
        }
      }
    ]
  },

  // =====================================================
  // VERSET 2:64
  // verse_id=71, analysis_id=429
  // "Puis vous vous etes detournes apres cela. N'eut ete la grace
  //  de Dieu et Sa misericorde sur vous, vous auriez ete parmi
  //  les perdants."
  // =====================================================
  64: {
    verse_id: 71,
    analysis_id: 429,
    translation_arab: "Puis vous vous etes detournes apres cela. N'eut ete la grace de Dieu et Sa misericorde sur vous, vous auriez ete parmi les perdants.",
    full_translation: "Puis vous vous etes detournes apres cela. N'eut ete la grace de Dieu sur vous et Sa misericorde, vous auriez ete parmi les perdants.",
    translation_explanation: `§DEMARCHE§
Ce verset constate la rupture de l'engagement pris au verset precedent. Les enfants d'Israel se sont detournes malgre l'alliance solennelle. Le verbe **tawallaytum** est un accompli 2MP forme V de la racine w-l-y. Le Lane's donne « he turned away, he turned his back, he withdrew ». La forme V (tafa''ala) est reflexive — se detourner soi-meme. Le verbe tawalla signifie tourner le dos, s'eloigner, se detourner de quelqu'un ou de quelque chose. Les enfants d'Israel se sont volontairement detournes de l'engagement qu'ils avaient pris. Le mot **ba'di** est un nom masculin singulier genitif de la racine b-'-d. Le Lane's donne « after, following, subsequent to ». L'adverbe « apres » indique la posteriorite temporelle — le detournement est venu apres l'engagement solennel. Le mot **dhalika** (cela) renvoie a l'engagement, l'elevation du mont et l'ordre de prendre avec force. La particule **fa-lawlaa** introduit une condition irreelle — « n'eut ete » ou « si ce n'etait ». Le mot **fadlu** est un nom masculin singulier nominatif de la racine f-d-l. Le Lane's donne « grace, favor, bounty, merit, superiority, excellence ». La grace de Dieu (fadl Allah) est ce qu'Il donne par pure generosite, au-dela de ce qui est du. Le mot **rahmatu-hu** est un nom feminin singulier nominatif avec pronom 3MS de la racine r-h-m. Le Lane's donne « mercy, compassion, tenderness, pity ». La misericorde est le mouvement interieur de tendresse qui pousse a pardonner et proteger. Le verbe **kuntum** est un accompli 2MP de la racine k-w-n. Le Lane's donne « he was, he became, he existed ». Le verbe kana dans le conditionnel irrel (lawla... la-kuntum) indique ce qui aurait ete sans l'intervention divine. Le mot **al-khaasiriina** est un participe actif pluriel defini genitif de la racine kh-s-r. Le Lane's donne « the losers, those who incur loss, the ones in perdition ». Les perdants sont ceux qui ont perdu leur capital de merite — leur desobeissance aurait entraine la perte totale sans la grace et la misericorde divines.

§JUSTIFICATION§
**detournes** — Le sens retenu est « se detourner ». Le verbe tawallaytum designe l'acte de tourner le dos a l'engagement. L'alternative « etre proche » est ecartee car la forme V (tawalla) avec le contexte d'apres-engagement designe le retrait, pas la proximite.

**apres** — Le sens retenu est « apres ». Le mot ba'di indique la posteriorite temporelle. L'alternative « eloignement » est ecartee car le contexte est temporel (apres cela), pas spatial.

**grace** — Le sens retenu est « grace ». Le mot fadlu designe la generosite divine gratuite. L'alternative « surplus » est ecartee car le contexte parle de l'intervention divine qui sauve, pas d'un excedent materiel.

**Dieu** — Le sens retenu est « Dieu ». Le mot Allah designe le Dieu unique. Pas d'alternative pertinente.

**misericorde** — Le sens retenu est « misericorde ». Le mot rahmatuhu designe la compassion divine. L'alternative « uterus » est ecartee car le contexte parle d'un attribut divin, pas d'un organe physique.

**ete** — Le sens retenu est « etre ». Le verbe kuntum designe l'etat d'existence. Pas d'alternative pertinente.

**perdants** — Le sens retenu est « perdre ». Le mot al-khaasiriina designe ceux qui subissent la perte. L'alternative « etre dans l'erreur » est ecartee car le participe actif avec l'article designe ceux qui ont perdu, pas ceux qui sont egares.

§CRITIQUE§
**detournes vs eloignes** — Le verbe tawalla (forme V de w-l-y) a deux sens opposes selon le contexte : « se rapprocher / prendre en charge » (tawalla amrahu) et « se detourner / tourner le dos ». Ici le contexte « apres cela » (apres l'engagement) indique clairement le sens de detournement — ils ont tourne le dos au pacte.
**grace vs faveur** — Le mot fadl peut se traduire par « grace » ou « faveur ». « Grace » insiste sur la gratuite du don divin — Dieu sauve malgre la desobeissance, pas parce qu'ils le meritent. « Faveur » serait aussi acceptable mais moins fort.
**perdants vs perdus** — Le mot khaasiriina est un participe actif (ceux qui perdent activement) et non un participe passif (ceux qui sont perdus). « Les perdants » respecte la voix active — ils sont agents de leur propre perte.`,
    segments: [
      { fr: "puis", phon: "thumma", arabic: "ثُمَّ", is_particle: true, position: 0 },
      { fr: "vous vous etes detournes", pos: "verbe", phon: "tawallaytum", arabic: "تَوَلَّيْتُم", word_key: "w l y", is_particle: false, sense_retenu: "se detourner", position: 1 },
      { fr: "de", phon: "min", arabic: "مِّن۞", is_particle: true, position: 2 },
      { fr: "apres", pos: "nom", phon: "ba'di", arabic: "بَعْدِ", word_key: "baed", is_particle: false, sense_retenu: "apres", position: 3 },
      { fr: "cela", phon: "dhalika", arabic: "ذَٰلِكَ", is_particle: true, position: 4 },
      { fr: "n'eut ete", phon: "fa-lawlaa", arabic: "فَلَوْلَا", is_particle: true, position: 5 },
      { fr: "la grace", pos: "nom", phon: "fadlu", arabic: "فَضْلُ", word_key: "fdl", is_particle: false, sense_retenu: "grace", position: 6 },
      { fr: "de Dieu", pos: "nom", phon: "Allaahi", arabic: "ٱللَّهِ", word_key: "alh", is_particle: false, sense_retenu: "Dieu", position: 7 },
      { fr: "sur vous", phon: "'alaykum", arabic: "عَلَيْكُمْ", is_particle: true, position: 8 },
      { fr: "et Sa misericorde", pos: "nom", phon: "wa-rahmatuhu", arabic: "وَرَحْمَتُهُ،", word_key: "rhm", is_particle: false, sense_retenu: "misericorde", position: 9 },
      { fr: "vous auriez ete", pos: "verbe", phon: "la-kuntum", arabic: "لَكُنتُم", word_key: "knw", is_particle: false, sense_retenu: "etre", position: 10 },
      { fr: "parmi", phon: "mina", arabic: "مِّنَ", is_particle: true, position: 11 },
      { fr: "les perdants", pos: "nom", phon: "al-khaasiriina", arabic: "ٱلْخَٰسِرِينَ", word_key: "khsr", is_particle: false, sense_retenu: "perdre", position: 12 }
    ],
    words: [
      {
        word_key: "w l y", position: 1, sense_chosen: "se detourner",
        analysis_axes: {
          sense_chosen: "se detourner",
          concept_chosen: "Proximité/Alliance",
          concepts: {
            "Proximité/Alliance": {
              status: "retenu",
              senses: ["être proche", "allié", "protecteur", "ami intime"],
              proof_ctx: "Le verbe tawallaytum est un accompli 2MP forme V de la racine w-l-y. Le Lane's donne « he turned away, he turned his back, he withdrew, he took charge of ». La racine w-l-y a pour sens fondamental la proximite (wilaya = etre proche). La forme V (tawalla) a deux sens opposes : se rapprocher de (prendre en charge) et se detourner de (tourner le dos). Ici le contexte « apres cela » (apres l'engagement) et la consequence negative (vous auriez ete perdants) indiquent clairement le detournement — ils se sont eloignes de la proximite divine.",
              axe1_verset: "Le verbe tawallaytum ouvre le verset avec le constat du detournement. Apres la prise d'engagement (v63), les enfants d'Israel se sont detournes — ils ont rompu la proximite avec Dieu. Le detournement est le contraire de la wilaya (proximite/alliance). Ils sont passes de l'alliance (miithaq) a la rupture (tawalli). Le verset montre la trajectoire : engagement solennel → detournement.",
              axe2_voisins: "Le verset 63 decrivait l'engagement solennel avec l'elevation du mont. Ce verset 64 montre immediatement la rupture — « puis vous vous etes detournes ». La transition est brutale — le « thumma » (puis) marque une rupture temporelle. Malgre la solennite du pacte et la puissance du signe (le mont), les enfants d'Israel se sont detournes.",
              axe3_sourate: "La racine w-l-y est fondamentale dans la sourate. En 2:257, « Dieu est le Waliy (protecteur/proche) de ceux qui croient ». Le detournement (tawalli) est l'oppose de la wilaya — se detourner de Dieu c'est perdre Sa protection. La sourate oppose constamment la proximite divine (pour les croyants) et le detournement (pour les desobeissants).",
              axe4_coherence: "La racine w-l-y apparait plus de 200 fois dans le Coran. Le verbe tawalla au sens de « se detourner » est frequent dans les recits de desobeissance. En 3:82, « quiconque se detourne apres cela, ce sont les pervers ». En 24:47, « puis un groupe se detourne apres cela ». Le detournement apres l'engagement est un motif recurrent de la desobeissance humaine.",
              axe5_frequence: "Pour la mission du khalifa, le detournement est la trahison de la mission. Le khalifa qui se detourne de l'engagement divin abandonne sa responsabilite. La wilaya (proximite avec Dieu) est le fondement de la mission ; le tawalli (detournement) en est la negation. Les enfants d'Israel sont un avertissement pour tout khalifa."
            },
            "Autorité/Gestion": {
              status: "probable",
              senses: ["gouverner", "prendre en charge"],
              proof_ctx: "Le sens de gouverner (waliya = prendre en charge) est un usage de w-l-y. La forme V tawalla peut signifier « prendre en charge » dans certains contextes. Ici le sens de detournement prevaut mais la dimension d'autorite est presente en arriere-plan — se detourner c'est aussi abandonner la charge, refuser la responsabilite.",
              axe1_verset: "Le verbe tawallaytum au sens d'abandonner la charge eclaire le verset — les enfants d'Israel n'ont pas seulement tourne le dos, ils ont abandonne leur responsabilite de peuple elu. Ils avaient recu un engagement (miithaq), la Torah (maa aataynakum), et l'ordre de prendre avec force. Se detourner c'est refuser la charge que Dieu leur avait confiee.",
              axe2_voisins: "Le verset 63 decrivait la remise d'une charge (l'engagement, la Torah). Ce verset 64 montre l'abandon de cette charge. Le passage de la prise de responsabilite au detournement est le drame central du recit des enfants d'Israel dans la sourate.",
              axe3_sourate: "La sourate al-Baqarah traite du theme du khalifat — la responsabilite sur terre (2:30). Les enfants d'Israel avaient recu cette responsabilite. Leur tawalli (detournement/abandon) est le modele de l'echec du khalifat. La sourate avertit les musulmans de ne pas repeter la meme erreur.",
              axe4_coherence: "En 47:22, « si vous vous detournez (tawallaytum), ne risquez-vous pas de semer la corruption sur terre et de rompre vos liens de parente ? ». Le detournement est lie a la corruption — abandonner la charge divine conduit au desordre sur terre.",
              axe5_frequence: "L'abandon de la charge est la pire trahison du khalifa. Le khalifa qui se detourne de sa mission laisse la terre sans gouvernance juste. Les enfants d'Israel ont abandonne leur charge — les musulmans sont avertis de ne pas faire de meme."
            },
            "Sens isolé/Se": {
              status: "nul",
              senses: ["se succéder"],
              proof_ctx: "Le sens de se succeder (tawala = se succeder) est un usage different. Le verbe tawallaytum avec « apres cela » designe clairement le detournement, pas une succession."
            }
          }
        }
      },
      {
        word_key: "baed", position: 3, sense_chosen: "apres",
        analysis_axes: {
          sense_chosen: "apres",
          concept_chosen: "Postériorité",
          concepts: {
            "Postériorité": {
              status: "retenu",
              senses: ["après", "ensuite"],
              proof_ctx: "Le mot ba'di est un nom masculin singulier genitif de la racine b-'-d. Le Lane's donne « after, following, subsequent to ». La preposition min (de) suivie de ba'di (apres) forme l'expression « min ba'di dhalika » (apres cela). La posteriorite est temporelle — le detournement est venu apres l'engagement solennel et l'elevation du mont.",
              axe1_verset: "Le mot ba'di situe le detournement dans le temps — apres l'engagement (miithaq), apres l'elevation du mont, apres l'ordre de prendre avec force. La posteriorite est accablante — les enfants d'Israel ont vu tout cela et se sont quand meme detournes. L'expression « min ba'di dhalika » souligne l'ingratitude et la desobeissance deliberee.",
              axe2_voisins: "Le verset 63 decrivait un moment solennel. Ce verset 64 situe la rupture « apres cela » — la posteriorite cree le contraste. L'engagement etait grandiose ; le detournement vient apres. La chronologie amplifie la gravite de la faute.",
              axe3_sourate: "L'expression « min ba'di » est recurrente dans la sourate pour marquer les retournements. En 2:75, « ils ont altere [la parole de Dieu] apres l'avoir comprise ». En 2:52, « apres cela, Nous vous avons pardonnes ». La posteriorite dans la sourate souligne toujours le contraste entre ce qui a ete recu et ce qui a ete fait ensuite.",
              axe4_coherence: "La racine b-'-d avec le sens de posteriorite apparait des centaines de fois dans le Coran. L'expression « min ba'di » est une formule recurrente pour situer les evenements dans le temps. Elle sert souvent a souligner l'ingratitude — recevoir un bienfait puis se detourner « apres cela ».",
              axe5_frequence: "Pour la mission du khalifa, la posteriorite est un avertissement. Apres avoir recu la mission et les moyens de l'accomplir, le khalifa doit perseverer — pas se detourner. Les enfants d'Israel sont le contre-exemple — ils se sont detournes apres avoir tout recu."
            },
            "Éloignement/Distance": {
              status: "nul",
              senses: ["éloignement", "être loin"],
              proof_ctx: "Le sens d'eloignement spatial est un autre usage de b-'-d. Ici le contexte est temporel — « min ba'di dhalika » (apres cela) designe une posteriorite dans le temps, pas une distance spatiale."
            },
            "Mort/Destruction": {
              status: "nul",
              senses: ["périr"],
              proof_ctx: "Le sens de perir (ba'uda = s'eloigner definitivement) est un sens figure. Le mot ba'di dans le contexte temporel « apres cela » designe la posteriorite, pas la mort."
            }
          }
        }
      },
      {
        word_key: "fdl", position: 6, sense_chosen: "grace",
        analysis_axes: {
          sense_chosen: "grace",
          concept_chosen: "Excellence/Faveur",
          concepts: {
            "Excellence/Faveur": {
              status: "retenu",
              senses: ["être supérieur", "grâce", "faveur", "mérite"],
              proof_ctx: "Le mot fadlu est un nom masculin singulier nominatif de la racine f-d-l. Le Lane's donne « grace, bounty, favor, excellence, surplus, merit ». Le fadl est ce que Dieu accorde par pure generosite, au-dela de ce qui est strictement du. La grace divine (fadl Allah) est un don gratuit qui ne depend pas du merite du receveur. Ici le fadl de Dieu est ce qui a sauve les enfants d'Israel de la perte malgre leur detournement.",
              axe1_verset: "Le mot fadlu introduit la condition irreelle — « n'eut ete la grace de Dieu ». La grace divine est presentee comme le seul rempart contre la perte. Sans cette grace, les enfants d'Israel auraient ete parmi les perdants. Le fadl est un don gratuit qui depasse le merite — ils ne meritaient pas d'etre sauves mais Dieu les a sauves par Sa grace.",
              axe2_voisins: "Le verset 63 montrait l'engagement solennel et le verset 64a le detournement. La grace divine intervient pour sauver malgre la faute. Le contraste est fort : la gravite du detournement (apres tout ce qu'ils avaient recu) est compensee par la generosite divine (la grace et la misericorde). Dieu est plus genereux que les humains ne sont ingrats.",
              axe3_sourate: "La racine f-d-l apparait dans la sourate pour designer la generosite divine. En 2:64, la grace sauve de la perte. En 2:90, « Dieu fait descendre Sa grace sur qui Il veut ». En 2:105, « Dieu accorde Sa grace a qui Il veut ». La sourate montre que la grace divine est universelle mais conditionnelle — elle va a qui Dieu veut.",
              axe4_coherence: "La racine f-d-l apparait plus de 100 fois dans le Coran. Le fadl de Dieu est constamment evoque comme la source de tout bien. En 3:174, « ils sont revenus avec une grace de Dieu et un bienfait ». En 57:29, « la grace est dans la main de Dieu, Il la donne a qui Il veut ». La grace divine est le principe de la generosite cosmique.",
              axe5_frequence: "Pour la mission du khalifa, la grace divine est ce qui soutient la mission malgre les faiblesses humaines. Le khalifa echoue parfois mais la grace de Dieu rattrape ses erreurs. Sans le fadl divin, la mission serait impossible. La conscience de cette grace inspire l'humilite et la gratitude."
            },
            "Reste/Surplus": {
              status: "nul",
              senses: ["surplus", "reste"],
              proof_ctx: "Le sens de surplus (fadl = ce qui reste) est un usage materiel. Ici le mot fadlu Allahi dans le contexte « n'eut ete la grace de Dieu » designe la generosite divine qui sauve, pas un excedent materiel."
            }
          }
        }
      },
      {
        word_key: "alh", position: 7, sense_chosen: "Dieu",
        analysis_axes: {
          sense_chosen: "Dieu",
          concept_chosen: "Divinité",
          concepts: {
            "Divinité": {
              status: "retenu",
              senses: ["oui certes", "divinité", "exclamation divine", "divinité (concept)", "théologie", "Dieu"],
              proof_ctx: "Le mot Allaahi est le nom propre divin au genitif de la racine a-l-h. Le Lane's donne « God, the one true God, the Supreme Being ». Allah est le nom propre de Dieu — il n'a pas de pluriel et ne prend pas l'article. Dans l'expression « fadlu Allahi » (grace de Dieu), le nom divin est en etat d'annexion avec fadl, indiquant que la grace appartient a Dieu et vient de Lui.",
              axe1_verset: "Le nom Allah apparait comme source de la grace et possesseur de la misericorde. « La grace de Dieu sur vous et Sa misericorde » — Dieu est la source du salut qui a empeche la perte. Le nom divin est au centre de la condition irreelle — sans Dieu, il n'y a que la perte.",
              axe2_voisins: "Dans les versets precedents, Dieu etait designe par le pronom « Nous » (pluriel de majeste). Ce verset utilise le nom propre « Allah » — un changement qui souligne la solennite. La grace et la misericorde sont attribuees nommement a Dieu, pas a un pronom anonyme.",
              axe3_sourate: "Le nom Allah est le nom divin le plus frequent de la sourate. Il apparait dans tous les contextes : commandements, promesses, avertissements, recits. La sourate utilise Allah pour designer la source ultime de toute autorite, grace et misericorde.",
              axe4_coherence: "Le nom Allah apparait plus de 2600 fois dans le Coran. C'est le nom divin par excellence. En 112:1, « Dis : Lui est Dieu, l'Unique ». En 59:22-24, les noms divins sont enumeres. Allah est le nom qui englobe tous les autres attributs.",
              axe5_frequence: "Pour la mission du khalifa, Dieu est Celui qui a confie la mission et qui soutient le khalifa par Sa grace. Le nom Allah rappelle la source de toute autorite — le khalifa ne gouverne pas en son nom mais au nom de Dieu."
            },
            "Détresse": {
              status: "nul",
              senses: ["être perplexe", "se lamenter"],
              proof_ctx: "La detresse est un sens marginal de la racine a-l-h. Le nom propre Allah dans l'expression fadlu Allahi designe sans ambiguite le Dieu unique."
            },
            "Domination": {
              status: "nul",
              senses: ["asservir"],
              proof_ctx: "La domination est un sens derive. Le nom propre Allah designe Dieu, pas l'acte d'asservir."
            },
            "Adoration/Dévotion": {
              status: "nul",
              senses: ["diviniser", "adorer", "faire adorer", "se dévouer au culte"],
              proof_ctx: "L'adoration est un sens de la racine a-l-h (alaha = adorer). Le nom propre Allah designe Celui qui est adore, pas l'acte d'adorer."
            },
            "Refuge/Protection": {
              status: "nul",
              senses: ["demeurer", "protéger", "chercher refuge"],
              proof_ctx: "Le refuge est un sens derive. Le nom propre Allah dans l'expression fadlu Allahi designe Dieu comme source de la grace, pas comme refuge au sens strict."
            }
          }
        }
      },
      {
        word_key: "rhm", position: 9, sense_chosen: "misericorde",
        analysis_axes: {
          sense_chosen: "misericorde",
          concept_chosen: "Miséricorde/Tendresse",
          concepts: {
            "Miséricorde/Tendresse": {
              status: "retenu",
              senses: ["traiter avec compassion", "se forcer à la compassion", "miséricorde réciproque", "dire \"que Dieu te fasse miséricorde\"", "miséricorde", "pardon", "demander la miséricorde", "le Compatissant", "plus miséricordieux", "objet de miséricorde", "traité avec beaucoup de compassion"],
              proof_ctx: "Le mot rahmatuhu est un nom feminin singulier nominatif avec pronom 3MS de la racine r-h-m. Le Lane's donne « mercy, compassion, tenderness, pity, kindness ». La misericorde (rahma) est le mouvement interieur de tendresse qui pousse a pardonner, proteger et sauver. Le pronom -hu (Sa) rattache la misericorde a Dieu — c'est Sa misericorde, un attribut divin essentiel.",
              axe1_verset: "La misericorde divine est le second element qui a sauve les enfants d'Israel — apres la grace (fadl), la misericorde (rahma). Les deux termes se completent : la grace est le don genereux, la misericorde est la compassion qui pardonne. Sans ces deux attributs divins, le detournement aurait entraine la perte totale.",
              axe2_voisins: "Le verset 63 montrait la puissance divine (elevation du mont). Ce verset 64 montre la misericorde divine — apres la puissance, la compassion. Dieu est puissant pour imposer le pacte et misericordieux pour pardonner la rupture. La misericorde tempere la puissance — Dieu ne detruit pas les desobeissants mais les sauve par Sa rahma.",
              axe3_sourate: "La racine r-h-m est fondamentale dans la sourate. La sourate commence par « Bismi Allahi al-Rahmani al-Rahimi » (au nom de Dieu, le Misericordieux, le Compatissant). En 2:143, « Dieu est envers les gens Compatissant et Misericordieux ». La misericorde divine est le fondement de tout le message coranique.",
              axe4_coherence: "La racine r-h-m apparait plus de 330 fois dans le Coran. La misericorde est l'attribut divin le plus mentionne. En 7:156, « Ma misericorde embrasse toute chose ». En 21:107, Muhammad est « une misericorde pour les mondes ». La rahma divine est universelle et englobante — elle sauve meme les desobeissants qui se repentent.",
              axe5_frequence: "Pour la mission du khalifa, la misericorde est le modele de la gouvernance. Le khalifa qui imite la rahma divine gouverne avec compassion, pas avec tyrannie. La misericorde n'est pas la faiblesse — c'est la force qui pardonne et protege. Le khalifa misericordieux reflète l'attribut divin le plus essentiel."
            },
            "Utérus/Reproduction": {
              status: "nul",
              senses: ["vulve", "utérus gonflé", "utérus", "maladie de l'utérus", "chamelle malade post-partum", "sortie de l'utérus"],
              proof_ctx: "Le sens physique de l'uterus (rahim) est le sens etymologique de r-h-m. Ici le mot rahmatuhu avec le pronom divin (Sa) designe clairement un attribut de Dieu — la misericorde, pas un organe physique."
            },
            "Parenté/Lien familial": {
              status: "nul",
              senses: ["sentiment de parenté", "lien de parenté", "parents par les femmes", "parent interdit au mariage", "connecté par parenté"],
              proof_ctx: "Le lien de parente (rahim = matrice commune) est un derive de r-h-m. Le mot rahmatuhu avec le pronom divin designe la misericorde de Dieu, pas un lien familial."
            },
            "Provision/Bienfait matériel": {
              status: "peu_probable",
              senses: ["prophétie", "subsistance", "pluie", "abondance"],
              proof_ctx: "Le bienfait materiel est une manifestation concrete de la rahma. Ici le mot rahmatuhu dans le contexte « n'eut ete la grace de Dieu et Sa misericorde » designe l'attribut divin de compassion qui sauve de la perte, pas un bienfait materiel specifique.",
              axe1_verset: "La rahma dans ce verset pourrait inclure des bienfaits concrets (provisions, protection) mais le sens premier est la compassion qui empeche la perte eschatologique. La misericorde de Dieu n'est pas seulement materielle — elle est surtout spirituelle, sauvant de la perdition.",
              axe2_voisins: "Les versets precedents mentionnaient des bienfaits materiels (manne, cailles, eau). Ce verset parle de la rahma comme ce qui sauve de la perte — un niveau superieur au bienfait materiel. La misericorde divine opere au-dela du materiel.",
              axe3_sourate: "La sourate mentionne des manifestations materielles de la rahma (pluie, provisions) mais aussi la rahma comme attribut divin. Ici le contexte est plus abstrait — la misericorde qui empeche la perdition, pas un bienfait physique.",
              axe4_coherence: "Le Coran distingue parfois la rahma comme attribut (7:156) et la rahma comme manifestation (30:46, la pluie). Ici le contexte est clairement celui de l'attribut divin qui sauve.",
              axe5_frequence: "La rahma materielle est une extension de la rahma spirituelle. Le khalifa recoit les deux — la protection spirituelle et les moyens materiels. Mais la rahma fondamentale est celle qui preserve la mission de la perte."
            },
            "Sens isolé/Outre": {
              status: "nul",
              senses: ["outre abîmée"],
              proof_ctx: "L'outre abimee est un sens marginal. Le mot rahmatuhu designe la misericorde divine."
            },
            "Lieu/Géographie": {
              status: "nul",
              senses: ["La Mecque", "Médine"],
              proof_ctx: "Les noms de lieux sont des usages marginaux. Le mot rahmatuhu designe la misericorde de Dieu."
            },
            "Sens isolé/La": {
              status: "nul",
              senses: ["la crainte vaut mieux que la pitié"],
              proof_ctx: "Expression proverbiale marginale. Le mot rahmatuhu designe la misericorde divine."
            }
          }
        }
      },
      {
        word_key: "knw", position: 10, sense_chosen: "etre",
        analysis_axes: {
          sense_chosen: "etre",
          concept_chosen: "Existence/Devenir",
          concepts: {
            "Existence/Devenir": {
              status: "retenu",
              senses: ["être", "exister", "devenir"],
              proof_ctx: "Le verbe kuntum est un accompli 2MP de la racine k-w-n. Le Lane's donne « he was, he became, he existed ». Le verbe kana est le verbe d'existence par excellence en arabe. Ici il est dans une construction conditionnelle irreelle : lawla fadlu Allahi... la-kuntum (n'eut ete la grace de Dieu... vous auriez ete). La particule la- devant kuntum renforce le caractere ireel — c'est ce qui se serait produit sans la grace divine.",
              axe1_verset: "Le verbe kuntum est au coeur de la condition irreelle — « vous auriez ete parmi les perdants ». L'existence dans l'etat de perte etait la consequence naturelle du detournement. Sans la grace et la misericorde divines, les enfants d'Israel auraient bascule dans la perdition. Le verbe kana ancre cette possibilite dans l'etre — pas juste « vous auriez perdu » mais « vous auriez ete des perdants ».",
              axe2_voisins: "Le verset 63 decrivait un engagement fort (prise de pacte, elevation du mont). Ce verset 64 montre la fragilite humaine — malgre tout, ils se sont detournes et auraient ete perdants sans l'intervention divine. Le verbe kana souligne le basculement ontologique : de peuple elu a peuple de perdants.",
              axe3_sourate: "Le verbe kana est le verbe le plus frequent de la sourate. Il structure les recits (kana... etait), les conditions (lawla... la-kana...), les descriptions (kana samian 'alima...). La sourate utilise kana pour ancrer les evenements et les consequences dans l'etre, pas seulement dans l'action.",
              axe4_coherence: "La racine k-w-n est la plus frequente du Coran. Le verbe kana apparait plus de 1300 fois. La formule « la-kuntum min... » (vous auriez ete parmi...) est recurrente pour exprimer des consequences hypothetiques (2:64, 5:31). Le Coran utilise l'etre pour decrire les consequences les plus graves.",
              axe5_frequence: "Pour la mission du khalifa, le verbe kana rappelle que l'existence a un sens — on est quelque chose (croyant, perdant, khalifa). Le khalifa doit etre attentif a ce qu'il est, pas seulement a ce qu'il fait. L'etre determine l'action — etre un croyant fidele empeche de devenir un perdant."
            }
          }
        }
      },
      {
        word_key: "khsr", position: 12, sense_chosen: "perdre",
        analysis_axes: {
          sense_chosen: "perdre",
          concept_chosen: "Perte/Diminution",
          concepts: {
            "Perte/Diminution": {
              status: "retenu",
              senses: ["perdre", "subir une perte"],
              proof_ctx: "Le mot al-khaasiriina est un participe actif pluriel defini genitif de la racine kh-s-r. Le Lane's donne « the losers, those who suffer loss, those who are in perdition ». Le participe actif (fa'il) indique l'agent — les khaasiriin sont ceux qui perdent activement, pas passivement. L'article defini (al-) et le pluriel indiquent une categorie connue et etablie — les perdants sont un groupe identifie.",
              axe1_verset: "Les perdants (al-khaasiriina) sont le sort evite grace a l'intervention divine. Sans la grace et la misericorde de Dieu, les enfants d'Israel auraient rejoint cette categorie. La perte est totale — ce n'est pas une perte partielle mais l'appartenance a la categorie des perdants (min al-khaasirin). Le verset avertit : le detournement mene a la perte.",
              axe2_voisins: "Le verset 62 promettait la recompense (ajr). Ce verset 64 menace de la perte (khusraan). Le contraste est net — foi et actes bons menent a la recompense ; detournement mene a la perte. Les deux versets forment un couple : promesse positive (v62) et avertissement negatif (v64).",
              axe3_sourate: "La racine kh-s-r apparait dans la sourate pour designer la perte eschatologique. En 2:27, « ceux qui rompent le pacte de Dieu... ceux-la sont les perdants ». Le lien est direct — rompre le pacte (miithaq) mene a la perte. Le verset 64 illustre ce principe avec le cas des enfants d'Israel.",
              axe4_coherence: "La racine kh-s-r apparait environ 65 fois dans le Coran. En 103:2, « l'etre humain est certes en perte ». En 39:15, « les perdants sont ceux qui se perdent eux-memes et leurs familles au Jour de la Resurrection ». La perte est le sort par defaut de l'humain — seuls la foi et les actes bons en sauvent (103:3).",
              axe5_frequence: "Pour la mission du khalifa, la perte est le risque ultime. Le khalifa qui trahit sa mission risque d'etre parmi les perdants. La conscience de ce risque maintient la vigilance et la determination. Les enfants d'Israel ont ete sauves par la grace divine — le khalifa doit aussi compter sur la grace tout en agissant avec droiture."
            },
            "Égarement": {
              status: "nul",
              senses: ["être dans l'erreur", "être trompé"],
              proof_ctx: "L'egarement est un sens derive (la perte du chemin). Le mot al-khaasiriina designe ceux qui subissent la perte, pas ceux qui sont egares. La perte est un resultat, l'egarement est un processus."
            },
            "Destruction": {
              status: "nul",
              senses: ["faire périr", "perdition"],
              proof_ctx: "La destruction est l'aboutissement extreme de la perte. Le mot al-khaasiriina avec le participe actif designe ceux qui perdent progressivement, pas ceux qui sont detruits instantanement."
            }
          }
        }
      }
    ]
  }
};

// =====================================================
// DAILY PHRASES
// =====================================================
const dailyPhrases = [
  // sba (id=607) — Sabeens
  { analysis_id: 607, phrases: [
    { sense: "Sabéens", arabic: "إِنَّ ٱلَّذِينَ ءَامَنُوا۟ وَٱلصَّٰبِـِٔينَ", phon: "inna alladhiina aamanuu wa-al-saabi'iina", french: "Ceux qui croient et les Sabeens." },
    { sense: "adorateurs des astres", arabic: "كَانَ ٱلصَّابِئُونَ يَعْبُدُونَ ٱلنُّجُومَ", phon: "kana al-saabi'uuna ya'buduuna al-nujuum", french: "Les Sabeens adoraient les astres." },
    { sense: "Sabéens", arabic: "ٱلصَّٰبِـِٔينَ مَنْ ءَامَنَ بِٱللَّهِ فَلَهُمْ أَجْرُهُمْ", phon: "al-saabi'iina man aamana bi-Allahi fa-lahum ajruhum", french: "Parmi les Sabeens, quiconque croit en Dieu, ceux-la ont leur recompense." }
  ]},
  // ajr (id=609) — recompense
  { analysis_id: 609, phrases: [
    { sense: "récompense", arabic: "فَلَهُمْ أَجْرُهُمْ عِندَ رَبِّهِمْ", phon: "fa-lahum ajruhum 'inda rabbihim", french: "Ceux-la ont leur recompense aupres de leur Seigneur." },
    { sense: "salaire", arabic: "وَلِكُلٍّ أَجْرٌ بِمَا عَمِلَ", phon: "wa-li-kullin ajrun bi-maa 'amila", french: "Et chacun a un salaire selon ce qu'il a fait." },
    { sense: "récompense", arabic: "إِنَّ ٱللَّهَ لَا يُضِيعُ أَجْرَ ٱلْمُحْسِنِينَ", phon: "inna Allaha laa yudii'u ajra al-muhsiniina", french: "Dieu ne laisse pas perdre la recompense des bienfaisants." }
  ]},
  // akhz (id=929) — prise
  { analysis_id: 929, phrases: [
    { sense: "prendre", arabic: "أَخَذْنَا مِيثَٰقَكُمْ", phon: "akhadhna miithaqakum", french: "Nous avons pris votre engagement." },
    { sense: "saisir", arabic: "خُذُوا۟ مَآ ءَاتَيْنَٰكُم بِقُوَّةٍ", phon: "khudhuu maa aataynakum bi-quwwatin", french: "Prenez avec force ce que Nous vous avons donne." },
    { sense: "prendre", arabic: "أَخَذَ ٱللَّهُ مِيثَٰقَ ٱلنَّبِيِّينَ", phon: "akhadha Allahu miithaaqa al-nabiyyiina", french: "Dieu a pris l'engagement des prophetes." }
  ]},
  // rfe (id=711) — elevation
  { analysis_id: 711, phrases: [
    { sense: "élever", arabic: "وَرَفَعْنَا فَوْقَكُمُ ٱلطُّورَ", phon: "wa-rafa'na fawqakum al-tuura", french: "Et Nous avons eleve au-dessus de vous le mont." },
    { sense: "lever", arabic: "رَفَعَ إِبْرَاهِيمُ ٱلْقَوَاعِدَ مِنَ ٱلْبَيْتِ", phon: "rafa'a Ibraahiimu al-qawaa'ida mina al-bayti", french: "Abraham a eleve les fondations de la Maison." },
    { sense: "exalter", arabic: "وَرَفَعْنَا لَكَ ذِكْرَكَ", phon: "wa-rafa'na laka dhikraka", french: "Et Nous avons exalte pour toi ta renommee." }
  ]},
  // twr (id=605) — mont
  { analysis_id: 605, phrases: [
    { sense: "mont", arabic: "وَٱلطُّورِ", phon: "wa-al-tuuri", french: "Par le mont !" },
    { sense: "montagne", arabic: "وَطُورِ سِينِينَ", phon: "wa-tuuri siiniina", french: "Et par le mont Sinai." },
    { sense: "mont", arabic: "وَنَٰدَيْنَٰهُ مِن جَانِبِ ٱلطُّورِ", phon: "wa-naadaynaahu min jaanibi al-tuuri", french: "Et Nous l'avons appele du flanc du mont." }
  ]},
  // qwy (id=2007) — force
  { analysis_id: 2007, phrases: [
    { sense: "force", arabic: "خُذُوا۟ مَآ ءَاتَيْنَٰكُم بِقُوَّةٍ", phon: "khudhuu maa aataynakum bi-quwwatin", french: "Prenez ce que Nous vous avons donne avec force." },
    { sense: "puissance", arabic: "إِنَّ ٱللَّهَ قَوِىٌّ عَزِيزٌ", phon: "inna Allaha qawiyyun 'aziizun", french: "Dieu est Fort et Puissant." },
    { sense: "être fort", arabic: "لَا قُوَّةَ إِلَّا بِٱللَّهِ", phon: "laa quwwata illaa bi-Allahi", french: "Il n'y a de force qu'en Dieu." }
  ]},
  // w l y (id=904) — proximite
  { analysis_id: 904, phrases: [
    { sense: "se détourner", arabic: "ثُمَّ تَوَلَّيْتُم مِّن بَعْدِ ذَٰلِكَ", phon: "thumma tawallaytum min ba'di dhalika", french: "Puis vous vous etes detournes apres cela." },
    { sense: "protecteur", arabic: "ٱللَّهُ وَلِىُّ ٱلَّذِينَ ءَامَنُوا۟", phon: "Allahu waliyyu alladhiina aamanuu", french: "Dieu est le Protecteur de ceux qui croient." },
    { sense: "allié", arabic: "وَمَا لَهُم مِّن دُونِ ٱللَّهِ مِنْ أَوْلِيَآءَ", phon: "wa-maa lahum min duuni Allahi min awliyaa'a", french: "Et ils n'ont en dehors de Dieu aucun allie." }
  ]},
  // fdl (id=524) — grace
  { analysis_id: 524, phrases: [
    { sense: "grâce", arabic: "فَلَوْلَا فَضْلُ ٱللَّهِ عَلَيْكُمْ", phon: "fa-lawlaa fadlu Allahi 'alaykum", french: "N'eut ete la grace de Dieu sur vous." },
    { sense: "faveur", arabic: "ذَٰلِكَ فَضْلُ ٱللَّهِ يُؤْتِيهِ مَن يَشَآءُ", phon: "dhaalika fadlu Allahi yu'tiihi man yashaa'u", french: "Voila la faveur de Dieu, Il la donne a qui Il veut." },
    { sense: "mérite", arabic: "لَا يَسْتَوِى مِنكُم مَّنْ أَنفَقَ", phon: "laa yastawii minkum man anfaqa", french: "Ne sont pas egaux ceux d'entre vous qui ont un plus grand merite." }
  ]},
  // khsr (id=431) — perte
  { analysis_id: 431, phrases: [
    { sense: "perdre", arabic: "لَكُنتُم مِّنَ ٱلْخَٰسِرِينَ", phon: "la-kuntum mina al-khaasiriina", french: "Vous auriez ete parmi les perdants." },
    { sense: "subir une perte", arabic: "قُلْ إِنَّ ٱلْخَٰسِرِينَ ٱلَّذِينَ خَسِرُوٓا۟ أَنفُسَهُمْ", phon: "qul inna al-khaasiriina alladhiina khasiruu anfusahum", french: "Dis : les perdants sont ceux qui se sont perdus eux-memes." },
    { sense: "perdre", arabic: "إِنَّ ٱلْإِنسَٰنَ لَفِى خُسْرٍ", phon: "inna al-insaana la-fii khusrin", french: "L'etre humain est certes en perte." }
  ]}
];

// =====================================================
// PROCESS VERSE
// =====================================================
async function processVerse(verseNum) {
  console.log(`\n=== VERSET 2:${verseNum} ===`);
  const data = verseData[verseNum];
  if (!data) { console.log('  Pas de donnees'); return; }

  console.log(`  analysis_id=${data.analysis_id} (preset)`);

  let okCount = 0;
  let errCount = 0;

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
      console.log(`  OK VWA ${word.word_key} v${data.verse_id}`);
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
    console.log(`  OK verse V${verseNum}`);
    okCount++;
  }

  console.log(`VERSET 2:${verseNum} — TERMINE (${okCount} OK, ${errCount} erreurs)`);
  return { okCount, errCount };
}

// =====================================================
// SYNC word_meanings
// =====================================================
async function syncWordMeanings() {
  console.log('\n=== SYNC word_meanings ===');

  const verseIds = [69, 70, 71];
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
// DAILY PHRASES
// =====================================================
async function insertDailyPhrases() {
  console.log('\n=== DAILY PHRASES ===');

  let totalOk = 0, totalSkip = 0, totalErr = 0;

  for (const root of dailyPhrases) {
    const { count } = await supabase
      .from('word_daily')
      .select('*', { count: 'exact', head: true })
      .eq('analysis_id', root.analysis_id);

    if (count && count > 0) {
      console.log(`  analysis_id=${root.analysis_id} — ${count} phrases existent deja, skip`);
      totalSkip += root.phrases.length;
      continue;
    }

    for (const p of root.phrases) {
      const { error } = await supabase.from('word_daily').insert({
        analysis_id: root.analysis_id,
        sense: p.sense,
        arabic: p.arabic,
        phon: p.phon,
        french: p.french
      });
      if (error) {
        console.error(`  ERR daily id=${root.analysis_id}:`, error.message);
        totalErr++;
      } else {
        totalOk++;
      }
    }
    console.log(`  analysis_id=${root.analysis_id} — 3 phrases inserees`);
  }

  console.log(`DAILY PHRASES — ${totalOk} OK, ${totalSkip} skip, ${totalErr} erreurs`);
}

// =====================================================
// MAIN
// =====================================================
async function main() {
  console.log('=== PIPELINE SOURATE 2 — AL-BAQARAH — VERSETS 62 A 64 ===\n');

  let totalOk = 0, totalErr = 0;

  for (let v = 62; v <= 64; v++) {
    const result = await processVerse(v);
    if (result) {
      totalOk += result.okCount;
      totalErr += result.errCount;
    }
  }

  await syncWordMeanings();
  await insertDailyPhrases();

  console.log(`\n=== PIPELINE V62-64 TERMINEE — TOTAL: ${totalOk} OK, ${totalErr} erreurs ===`);
}

main().catch(e => console.error('FATAL:', e));
