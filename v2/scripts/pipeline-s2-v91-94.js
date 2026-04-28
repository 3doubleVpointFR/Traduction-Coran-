const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// =====================================================
// PIPELINE SOURATE 2 — AL-BAQARAH — VERSETS 91 A 94
// verse_id=98 (2:91), verse_id=99 (2:92), verse_id=100 (2:93), verse_id=101 (2:94)
// =====================================================
// CRITICAL: concept names and senses are read from concepts JSON
// =====================================================

const verseData = {

  // =====================================================
  // VERSET 2:91
  // verse_id=98, analysis_id=456
  // "Quand on leur dit : Croyez en ce que Dieu a fait descendre,
  //  ils disent : Nous croyons en ce qui a ete fait descendre sur nous
  //  — et ils rejettent ce qui est au-dela, alors que c'est la verite
  //  confirmant ce qu'ils ont. Dis : Pourquoi donc tuiez-vous les
  //  prophetes de Dieu auparavant, si vous etiez croyants ?"
  // =====================================================
  91: {
    verse_id: 98,
    analysis_id: 456,
    translation_arab: "Et quand on leur dit : Croyez en ce que Dieu a fait descendre, ils dirent : Nous croyons en ce qui a ete fait descendre sur nous — et ils rejettent ce qui est au-dela de lui, alors que c'est la verite confirmant ce qu'ils ont. Dis : Pourquoi donc tuiez-vous les prophetes de Dieu auparavant, si vous etiez croyants ?",
    full_translation: "Et quand on leur dit : Croyez en ce que Dieu a fait descendre, ils dirent : Nous croyons en ce qui a ete fait descendre sur nous — et ils rejettent ce qui [vient] au-dela de lui, alors que c'est la verite confirmant ce qu'ils ont. Dis : Pourquoi donc tuiez-vous les prophetes de Dieu auparavant, si vous etiez croyants ?",
    translation_explanation: `§DEMARCHE§
Ce verset expose la contradiction des enfants d'Israel qui pretendent croire en ce qui leur a ete revele mais rejettent ce qui vient apres. Le verbe **qila** est un accompli passif 3MS de la racine q-w-l. Le Lane's donne « it was said to them ». Le passif efface le locuteur pour mettre l'accent sur le message. Le verbe **aminuu** est un imperatif 2MP forme IV de la racine a-m-n. Le Lane's donne « believe, have faith, accept as true ». L'imperatif forme IV signifie « ayez la foi, croyez ». Le verbe **anzala** est un accompli 3MS forme IV de la racine n-z-l. Le Lane's donne « He sent down, He revealed ». La forme IV (if'al) est causative — faire descendre. Dieu fait descendre la revelation. Le mot **Allahu** est un nom propre de la racine a-l-h. Le Lane's donne « God, the one true deity ». Le nom propre designe Dieu comme source de la revelation. Le verbe **qaluu** est un accompli 3MP de la racine q-w-l. Le Lane's donne « they said ». Ils repondent par une pretention de foi selective. Le verbe **nu'minu** est un inaccompli 1P forme IV de la racine a-m-n. Le Lane's donne « we believe ». L'inaccompli marque une pretention de foi continue. Le verbe **unzila** est un accompli passif 3MS forme IV de la racine n-z-l. Le Lane's donne « what was sent down ». Le passif designe ce qui leur a ete revele specifiquement — la Torah. Le verbe **yakfuruna** est un inaccompli 3MP de la racine k-f-r. Le Lane's donne « they reject, they disbelieve, they cover ». Le verbe designe l'acte de couvrir la verite, de rejeter activement. Le mot **wara'ahu** est un nom de la racine w-r-y avec pronom 3MS. Le Lane's donne « behind it, beyond it ». Le mot designe ce qui est au-dela — ce qui vient apres la Torah, a savoir le Coran. Le mot **al-haqqu** est un nom masculin defini de la racine h-q-q. Le Lane's donne « the truth, the reality ». Le nom defini designe la verite absolue — ce qu'ils rejettent est la verite. Le mot **musaddiqan** est un participe actif forme II accusatif de la racine s-d-q. Le Lane's donne « confirming, attesting the truth of ». Le participe forme II signifie « confirmant activement » — le Coran confirme la Torah. Le verbe **taqtuluna** est un inaccompli 2MP de la racine q-t-l. Le Lane's donne « you kill, you slay ». L'inaccompli a valeur de passe iteratif — ils tuaient les prophetes de maniere repetee. Le mot **anbiya'a** est un nom masculin pluriel de la racine n-b-a. Le Lane's donne « prophets ». Les prophetes sont ceux qui transmettent les nouvelles de Dieu. Le mot **Allahi** est le nom propre au genitif de la racine a-l-h. Le Lane's donne « of God ». Les prophetes appartiennent a Dieu. Le mot **qablu** est un nom de la racine q-b-l. Le Lane's donne « before, previously ». L'anteriorite situe le meurtre des prophetes dans le passe. Le verbe **kuntum** est un accompli 2MP de la racine k-w-n. Le Lane's donne « you were ». Le verbe auxiliaire introduit la condition. Le mot **mu'minina** est un participe actif pluriel forme IV de la racine a-m-n. Le Lane's donne « believers ». Le participe designe l'etat de croyant.

§JUSTIFICATION§
**on leur dit** — Le sens retenu est « dire ». Le verbe qila au passif designe une parole adressee aux enfants d'Israel. L'alternative « avis » est ecartee car le contexte est un ordre, pas une opinion.

**croyez** — Le sens retenu est « croire ». Le verbe aminuu forme IV designe l'acte d'avoir la foi. L'alternative « faire confiance » est ecartee car le contexte est l'adhesion a la revelation, pas une confiance interpersonnelle.

**a fait descendre** — Le sens retenu est « faire descendre ». Le verbe anzala forme IV designe la revelation divine. L'alternative « s'installer » est ecartee car la forme IV causative signifie faire descendre, pas descendre soi-meme.

**Dieu** — Le sens retenu est « Dieu ». Le nom propre Allah designe l'Etre divin unique. L'alternative « adorer » est ecartee car le mot est ici un nom propre, pas un verbe.

**ils dirent** — Le sens retenu est « dire ». Le verbe qaluu designe la reponse des enfants d'Israel.

**nous croyons** — Le sens retenu est « croire ». Le verbe nu'minu designe leur pretention de foi. L'alternative « proteger » est ecartee car le contexte est l'adhesion, pas la protection.

**a ete fait descendre** — Le sens retenu est « faire descendre ». Le verbe unzila au passif designe la Torah revelee specifiquement aux enfants d'Israel.

**rejettent** — Le sens retenu est « couvrir ». Le verbe yakfuruna designe l'acte de rejeter la verite en la couvrant. L'alternative « expier » est ecartee car le contexte est un refus, pas une reparation.

**au-dela** — Le sens retenu est « derriere ». Le mot wara'ahu designe ce qui vient apres la Torah. L'alternative « cacher » est ecartee car wara'a est ici un adverbe de lieu.

**la verite** — Le sens retenu est « verite ». Le mot al-haqqu designe la realite objective de ce qui est revele. L'alternative « devoir » est ecartee car le nom defini designe la verite, pas l'obligation.

**confirmant** — Le sens retenu est « confirmer ». Le participe musaddiqan forme II designe l'acte de confirmer la verite de ce qui precede. L'alternative « aumone » est ecartee car le participe actif designe la confirmation, pas le don.

**tuiez-vous** — Le sens retenu est « tuer ». Le verbe taqtuluna designe le meurtre des prophetes. Pas d'alternative pertinente.

**prophetes** — Le sens retenu est « prophete ». Le mot anbiya'a designe ceux qui transmettent les nouvelles divines. L'alternative « nouvelle » est ecartee car le pluriel brise anbiya'a designe specifiquement les prophetes.

**auparavant** — Le sens retenu est « avant ». Le mot qablu designe l'anteriorite temporelle. L'alternative « recevoir » est ecartee car le mot est ici un adverbe de temps.

**vous etiez** — Le sens retenu est « etre ». Le verbe kuntum designe l'etat passe.

**croyants** — Le sens retenu est « croyant ». Le participe mu'minina designe l'etat de foi.

§CRITIQUE§
**foi selective vs foi complete** — Les enfants d'Israel pretendent croire en ce qui leur a ete revele (la Torah) mais rejettent ce qui vient apres (le Coran). Cette foi selective contredit le principe meme de la foi — croire en une partie de la revelation et rejeter l'autre est une forme de rejet global. Le musaddiqan (confirmant) montre que les revelations forment un tout coherent.
**meurtre des prophetes vs pretention de foi** — Le verset oppose leur pretention de foi (nu'minu) a leur action reelle (taqtuluna anbiya'a). S'ils etaient vraiment croyants (mu'minina), ils n'auraient pas tue les prophetes de Dieu. La question rhetorique (fa-lima) expose la contradiction entre la parole et l'acte.
**passif qila vs actif qaluu** — Le « on leur dit » (passif) contraste avec le « ils dirent » (actif). L'ordre divin est au passif (effacement de l'autorite) tandis que leur refus est actif et assume.`,
    segments: [
      { fr: "et quand", phon: "wa-idha", arabic: "\u0648\u0625\u0650\u0630\u064E\u0627", is_particle: true, position: 0 },
      { fr: "on leur dit", pos: "verbe", phon: "qila", arabic: "\u0642\u0650\u064A\u0644\u064E", word_key: "qwl", is_particle: false, sense_retenu: "dire", position: 1 },
      { fr: "a eux", phon: "lahum", arabic: "\u0644\u064E\u0647\u064F\u0645\u0652", is_particle: true, position: 2 },
      { fr: "croyez", pos: "verbe", phon: "aminuu", arabic: "\u0621\u064E\u0627\u0645\u0650\u0646\u064F\u0648\u0627\u06E1", word_key: "amn", is_particle: false, sense_retenu: "croire", position: 3 },
      { fr: "en ce que", phon: "bima", arabic: "\u0628\u0650\u0645\u064E\u0622", is_particle: true, position: 4 },
      { fr: "a fait descendre", pos: "verbe", phon: "anzala", arabic: "\u0623\u064E\u0646\u0632\u064E\u0644\u064E", word_key: "nzl", is_particle: false, sense_retenu: "faire descendre", position: 5 },
      { fr: "Dieu", pos: "nom", phon: "Allahu", arabic: "\u0671\u0644\u0644\u0651\u064E\u0647\u064F", word_key: "alh", is_particle: false, sense_retenu: "Dieu", position: 6 },
      { fr: "ils dirent", pos: "verbe", phon: "qaluu", arabic: "\u0642\u064E\u0627\u0644\u064F\u0648\u0627\u06E1", word_key: "qwl", is_particle: false, sense_retenu: "dire", position: 7 },
      { fr: "nous croyons", pos: "verbe", phon: "nu'minu", arabic: "\u0646\u064F\u0624\u0652\u0645\u0650\u0646\u064F", word_key: "amn", is_particle: false, sense_retenu: "croire", position: 8 },
      { fr: "en ce que", phon: "bima", arabic: "\u0628\u0650\u0645\u064E\u0622", is_particle: true, position: 9 },
      { fr: "a ete fait descendre", pos: "verbe", phon: "unzila", arabic: "\u0623\u064F\u0646\u0632\u0650\u0644\u064E", word_key: "nzl", is_particle: false, sense_retenu: "faire descendre", position: 10 },
      { fr: "sur nous", phon: "'alayna", arabic: "\u0639\u064E\u0644\u064E\u064A\u0652\u0646\u064E\u0627", is_particle: true, position: 11 },
      { fr: "et ils rejettent", pos: "verbe", phon: "yakfuruna", arabic: "\u0648\u064E\u064A\u064E\u0643\u0652\u0641\u064F\u0631\u064F\u0648\u0646\u064E", word_key: "kfr", is_particle: false, sense_retenu: "couvrir", position: 12 },
      { fr: "ce que", phon: "bima", arabic: "\u0628\u0650\u0645\u064E\u0627", is_particle: true, position: 13 },
      { fr: "au-dela de lui", pos: "nom", phon: "wara'ahu", arabic: "\u0648\u064E\u0631\u064E\u0622\u0621\u064E\u0647\u064F\u0654", word_key: "wry", is_particle: false, sense_retenu: "derriere", position: 14 },
      { fr: "et il est", phon: "wa-huwa", arabic: "\u0648\u064E\u0647\u064F\u0648\u064E", is_particle: true, position: 15 },
      { fr: "la verite", pos: "nom", phon: "al-haqqu", arabic: "\u0671\u0644\u0652\u062D\u064E\u0642\u0651\u064F", word_key: "hqq", is_particle: false, sense_retenu: "verite", position: 16 },
      { fr: "confirmant", pos: "nom", phon: "musaddiqan", arabic: "\u0645\u064F\u0635\u064E\u062F\u0651\u0650\u0642\u064B\u0627", word_key: "sdq", is_particle: false, sense_retenu: "confirmer", position: 17 },
      { fr: "ce que", phon: "lima", arabic: "\u0644\u0650\u0651\u0645\u064E\u0627", is_particle: true, position: 18 },
      { fr: "avec eux", phon: "ma'ahum", arabic: "\u0645\u064E\u0639\u064E\u0647\u064F\u0645\u0652", is_particle: true, position: 19 },
      { fr: "dis", pos: "verbe", phon: "qul", arabic: "\u0642\u064F\u0644\u0652", word_key: "qwl", is_particle: false, sense_retenu: "dire", position: 20 },
      { fr: "pourquoi donc", phon: "falima", arabic: "\u0641\u064E\u0644\u0650\u0645\u064E", is_particle: true, position: 21 },
      { fr: "tuiez-vous", pos: "verbe", phon: "taqtuluna", arabic: "\u062A\u064E\u0642\u0652\u062A\u064F\u0644\u064F\u0648\u0646\u064E", word_key: "qtl", is_particle: false, sense_retenu: "tuer", position: 22 },
      { fr: "les prophetes", pos: "nom", phon: "anbiya'a", arabic: "\u0623\u064E\u0646\u06E2\u0628\u0650\u064A\u064E\u0622\u0621\u064E", word_key: "nba", is_particle: false, sense_retenu: "prophete", position: 23 },
      { fr: "de Dieu", pos: "nom", phon: "Allahi", arabic: "\u0671\u0644\u0644\u0651\u064E\u0647\u0650", word_key: "alh", is_particle: false, sense_retenu: "Dieu", position: 24 },
      { fr: "de", phon: "min", arabic: "\u0645\u0650\u0646", is_particle: true, position: 25 },
      { fr: "auparavant", pos: "nom", phon: "qablu", arabic: "\u0642\u064E\u0628\u0652\u0644\u064F", word_key: "qbl", is_particle: false, sense_retenu: "avant", position: 26 },
      { fr: "si", phon: "in", arabic: "\u0625\u0650\u0646", is_particle: true, position: 27 },
      { fr: "vous etiez", pos: "verbe", phon: "kuntum", arabic: "\u0643\u064F\u0646\u062A\u064F\u0645", word_key: "knw", is_particle: false, sense_retenu: "etre", position: 28 },
      { fr: "croyants", pos: "nom", phon: "mu'minina", arabic: "\u0645\u0651\u064F\u0624\u0652\u0645\u0650\u0646\u0650\u064A\u0646\u064E", word_key: "amn", is_particle: false, sense_retenu: "croyant", position: 29 }
    ],
    words: [
      // qwl position 1 — "on leur dit" (passif)
      {
        word_key: "qwl", position: 1, sense_chosen: "dire",
        analysis_axes: {
          concept_chosen: "Parole/\u00c9nonciation",
          concepts: {
            "Parole/\u00c9nonciation": {
              status: "retenu",
              senses: ["parler", "parole", "discours", "dire", "affirmer"],
              proof_ctx: "Le verbe qila est un accompli passif 3MS de la racine q-w-l. Le Lane's donne \u00ab it was said, it was told \u00bb. Le passif efface le locuteur pour mettre l'accent sur le contenu du message. La parole est ici un ordre divin transmis aux enfants d'Israel — le passif souligne que la source ultime est Dieu.",
              axe1_verset: "Le verbe qila ouvre le verset par un ordre au passif — « on leur dit ». Le passif contraste avec le qaluu (ils dirent) qui suit — l'ordre divin est impersonnel tandis que la reponse du peuple est active et assumee. La structure qila/qaluu oppose le commandement a la tergiversation. Le verset contient trois occurrences de q-w-l (qila, qaluu, qul) qui structurent l'argumentation.",
              axe2_voisins: "Les versets 88-90 rapportaient la malediction sur les enfants d'Israel pour leur rejet. Ce verset 91 developpe la nature de ce rejet — ils pretendent croire mais ne croient que partiellement. Le verset 92 rappellera un autre acte de desobeissance — l'adoration du veau. La parole dans ce passage est toujours un outil de confrontation entre l'ordre divin et le refus humain.",
              axe3_sourate: "La racine q-w-l structure toute la sourate al-Baqarah par des dialogues entre Dieu et les differentes communautes. En 2:80, « ils disent : le Feu ne nous touchera que quelques jours ». En 2:111, « ils disent : n'entrera au Paradis que celui qui est juif ». La sourate accumule les pretentions verbales des enfants d'Israel pour les confronter a la realite de leurs actes.",
              axe4_coherence: "La racine q-w-l est la plus frequente du Coran avec plus de 1700 occurrences. Le schema qila lahum... qaluu (on leur dit... ils dirent) est un procede recurrent de confrontation dans le Coran. En 2:11-12, on retrouve le meme schema avec les hypocrites. La structure oppose systematiquement l'injonction divine a la reponse humaine deviante.",
              axe5_frequence: "Pour la mission du khalifa, la parole doit etre coherente entre ce que l'on dit et ce que l'on fait. Les enfants d'Israel disent « nous croyons » mais rejettent une partie de la revelation. Le khalifa qui dit croire mais agit autrement trahit sa parole et sa mission."
            },
            "Pens\u00e9e/Avis": {
              status: "nul",
              senses: ["avis", "doctrine", "opinion"],
              proof_ctx: "Le contexte est une parole prononcee (on leur dit / ils dirent), pas une pensee interieure. Le verbe qila/qaluu designe l'acte de parler, pas de penser."
            }
          }
        }
      },
      // amn position 3 — "croyez" (imperatif)
      {
        word_key: "amn", position: 3, sense_chosen: "croire",
        analysis_axes: {
          concept_chosen: "Foi/Adh\u00e9sion",
          concepts: {
            "Foi/Adh\u00e9sion": {
              status: "retenu",
              senses: ["confirmer", "croyant", "accepter comme vrai", "croire", "avoir la foi"],
              proof_ctx: "Le verbe aminuu est un imperatif 2MP forme IV de la racine a-m-n. Le Lane's donne \u00ab believe, have faith, accept as true \u00bb. La forme IV (if'al) est causative — se rendre en securite en acceptant la verite. L'imperatif ordonne aux enfants d'Israel de croire en l'ensemble de la revelation, pas seulement en une partie.",
              axe1_verset: "Le verbe aminuu est l'ordre central du verset — croyez en ce que Dieu a fait descendre. L'ordre est general (ma anzala Allah — tout ce que Dieu a fait descendre), sans restriction. La reponse nu'minu bima unzila 'alayna (nous croyons en ce qui a ete fait descendre sur nous) restreint la foi a la Torah. La foi selective est presentee comme une forme de rejet (kufr).",
              axe2_voisins: "Le verset 89 mentionnait que les enfants d'Israel rejettent ce qui leur est venu de Dieu. Ce verset 91 detaille ce rejet — ils croient partiellement mais rejettent ce qui vient apres. Le verset 93 montrera qu'ils ont dit « nous entendons et nous desobeissons ». La foi selective est un fil conducteur de ce passage.",
              axe3_sourate: "La racine a-m-n traverse toute la sourate al-Baqarah. En 2:3-4, les croyants sont definis comme ceux qui croient en l'invisible et en ce qui a ete revele. En 2:85, « croyez-vous en une partie du Livre et rejetez-vous l'autre ? ». La sourate oppose la foi complete (iman) a la foi selective qui est une forme de rejet.",
              axe4_coherence: "La racine a-m-n apparait plus de 800 fois dans le Coran. La foi dans le Coran est l'adhesion totale — croire en une partie et rejeter une autre annule la foi. En 4:150-151, « ceux qui veulent faire une distinction entre Dieu et Ses messagers sont les vrais mecreants ». La foi partielle est assimilee a la mecreance.",
              axe5_frequence: "Pour la mission du khalifa, la foi est le fondement de l'action. Le khalifa croit en l'ensemble de la revelation sans distinction. La foi selective des enfants d'Israel montre l'echec de celui qui choisit ce qui lui convient dans les ordres divins."
            },
            "S\u00e9curit\u00e9/Confiance": {
              status: "probable",
              senses: ["faire confiance", "\u00eatre en s\u00e9curit\u00e9", "confier", "fid\u00e8le", "lieu s\u00fbr", "se sentir en s\u00e9curit\u00e9"],
              proof_ctx: "Le sens de securite est le sens premier de a-m-n. La foi (iman) derive de la securite — croire c'est se mettre en securite interieure par l'adhesion a la verite. Les enfants d'Israel qui croient partiellement ne trouvent pas la securite complete."
            }
          }
        }
      },
      // nzl position 5 — "a fait descendre"
      {
        word_key: "nzl", position: 5, sense_chosen: "faire descendre",
        analysis_axes: {
          concept_chosen: "Descente/R\u00e9v\u00e9lation",
          concepts: {
            "Descente/R\u00e9v\u00e9lation": {
              status: "retenu",
              senses: ["descendre", "pluie qui descend", "faire descendre", "r\u00e9v\u00e9ler", "envoyer d'en haut"],
              proof_ctx: "Le verbe anzala est un accompli 3MS forme IV de la racine n-z-l. Le Lane's donne \u00ab He sent down, He revealed, He caused to descend \u00bb. La forme IV (if'al) est causative — Dieu fait descendre la revelation du haut vers le bas. La revelation est un mouvement vertical de Dieu vers les hommes.",
              axe1_verset: "Le verbe anzala (actif) contraste avec unzila (passif) dans le meme verset. L'actif designe l'ensemble de ce que Dieu a fait descendre (toute revelation), le passif designe ce qui a ete fait descendre specifiquement sur les enfants d'Israel (la Torah). La distinction actif/passif marque la difference entre le general et le particulier.",
              axe2_voisins: "Le verset 89 mentionnait « ce qui leur est venu de Dieu ». Ce verset 91 precise la nature de ce qui est venu — c'est une revelation descendue (nuzul). Le verset 97 precisera que Gabriel est celui qui fait descendre le Coran. La descente est le mode de transmission de la revelation dans tout ce passage.",
              axe3_sourate: "La racine n-z-l est omnipresente dans la sourate al-Baqarah. En 2:2, le Coran est « le Livre sans doute ». En 2:4, les croyants croient en « ce qui a ete fait descendre vers toi et ce qui a ete fait descendre avant toi ». La sourate insiste sur la continuite de la revelation descendue — Torah et Coran forment un ensemble.",
              axe4_coherence: "La racine n-z-l apparait plus de 290 fois dans le Coran. Le Coran se definit lui-meme comme tanzil — une descente de Dieu. En 3:3-4, « Il a fait descendre sur toi le Livre confirmant ce qui etait avant ». La revelation est un mouvement continu du haut vers le bas.",
              axe5_frequence: "Pour la mission du khalifa, la revelation descendue est la source de la guidance. Le khalifa recoit la revelation dans sa totalite, sans distinction entre les livres reveles. Rejeter une partie de ce qui est descendu revient a rejeter l'ensemble de la revelation."
            },
            "Halte/S\u00e9jour": {
              status: "nul",
              senses: ["s'installer", "faire halte", "lieu de descente", "h\u00f4te"],
              proof_ctx: "Le sens de halte/sejour est un autre aspect de n-z-l. Ici la forme IV anzala signifie « faire descendre » au sens de revelation, pas d'installation dans un lieu."
            }
          }
        }
      },
      // alh position 6 — "Dieu"
      {
        word_key: "alh", position: 6, sense_chosen: "Dieu",
        analysis_axes: {
          concept_chosen: "Divinit\u00e9",
          concepts: {
            "Divinit\u00e9": {
              status: "retenu",
              senses: ["divinit\u00e9", "exclamation divine", "divinit\u00e9 (concept)", "oui certes", "Dieu", "th\u00e9ologie"],
              proof_ctx: "Le mot Allahu est le nom propre de Dieu au nominatif de la racine a-l-h. Le Lane's donne \u00ab God, the one true deity, the Supreme Being \u00bb. Allah est le sujet du verbe anzala — c'est Dieu qui fait descendre la revelation. Le nom propre designe l'Etre divin unique, source de toute revelation.",
              axe1_verset: "Le mot Allahu apparait deux fois dans le verset — comme sujet de la revelation (anzala Allahu) et comme possesseur des prophetes (anbiya'a Allahi). Dieu est a la fois la source de la revelation et le maitre des prophetes. Le rejet de la revelation et le meurtre des prophetes sont deux offenses directes a Dieu.",
              axe2_voisins: "Le verset 89 mentionnait deja « ce qui leur est venu de la part de Dieu ». Le verset 90 parlait de « la colere de Dieu ». Ce passage montre que les actes des enfants d'Israel sont une offense directe a Dieu — rejet de Sa revelation, meurtre de Ses prophetes.",
              axe3_sourate: "Le nom Allah est le mot le plus frequent de la sourate al-Baqarah. La sourate definit la relation entre Dieu et les differentes communautes — croyants, mecreants, hypocrites, enfants d'Israel. Chaque groupe est juge par sa reponse a Dieu et a Sa revelation.",
              axe4_coherence: "Le nom Allah apparait plus de 2700 fois dans le Coran. C'est le nom le plus frequent du texte. Le Coran est tout entier une revelation de Dieu (Allah) — le rejeter c'est rejeter Dieu Lui-meme.",
              axe5_frequence: "Pour la mission du khalifa, Dieu est la source de l'autorite et de la revelation. Le khalifa agit au nom de Dieu et execute Ses ordres. Le rejet d'une partie de la revelation de Dieu est une trahison de la mission du khalifa."
            }
          }
        }
      },
      // kfr position 12 — "rejettent"
      {
        word_key: "kfr", position: 12, sense_chosen: "couvrir",
        analysis_axes: {
          concept_chosen: "Couverture/Dissimulation",
          concepts: {
            "Couverture/Dissimulation": {
              status: "retenu",
              senses: ["cacher", "la nuit qui couvre", "couvrir"],
              proof_ctx: "Le verbe yakfuruna est un inaccompli 3MP de la racine k-f-r. Le Lane's donne \u00ab they cover, they hide, they reject by covering \u00bb. Le sens premier de k-f-r est couvrir — le mecreant est celui qui couvre la verite. L'inaccompli indique une action continue — ils ne cessent de couvrir/rejeter ce qui vient au-dela de la Torah.",
              axe1_verset: "Le verbe yakfuruna est le pivot du verset — apres la pretention de foi (nu'minu), le rejet (yakfuruna) expose la contradiction. Le wa-adversatif (et ils rejettent) marque l'opposition entre les deux attitudes. Ils couvrent ce qui vient au-dela de leur revelation propre, alors que c'est la verite (al-haqq). Le rejet est d'autant plus grave qu'il porte sur ce qui confirme (musaddiq) ce qu'ils ont deja.",
              axe2_voisins: "Le verset 89 mentionnait deja le kufr — « ils ont mecru en lui ». Ce verset 91 precise la nature du kufr — c'est un rejet selectif, une couverture de la verite au-dela de la Torah. Le verset 93 ajoutera une autre dimension du kufr — « on fit boire a leurs coeurs le veau a cause de leur kufr ».",
              axe3_sourate: "La racine k-f-r est l'une des plus frequentes de la sourate al-Baqarah. Le kufr est presente sous toutes ses formes — rejet de la revelation, ingratitude envers les bienfaits, couverture de la verite. En 2:85, « quelle est la sanction de celui parmi vous qui fait cela, sinon l'ignominie dans la vie d'ici-bas ? ». La sourate montre les consequences du kufr.",
              axe4_coherence: "La racine k-f-r apparait plus de 520 fois dans le Coran. Le kufr est l'oppose de l'iman — couvrir la verite est l'oppose de l'accepter. En 2:256, « la bonne direction s'est distinguee de l'egarement ». Le Coran oppose systematiquement iman et kufr, adhesion et rejet.",
              axe5_frequence: "Pour la mission du khalifa, le kufr est l'echec de la mission. Le khalifa qui couvre une partie de la verite trahit sa fonction. La couverture selective — accepter ce qui convient et rejeter le reste — est la forme la plus insidieuse du kufr."
            },
            "Rejet/Ingratitude": {
              status: "probable",
              senses: ["\u00eatre ingrat", "nier", "renier un bienfait", "rejeter", "m\u00e9cr\u00e9ant"],
              proof_ctx: "Le sens de rejet/ingratitude est directement lie au sens de couverture. Rejeter c'est couvrir la verite, nier c'est dissimuler. Le yakfuruna ici porte les deux sens — ils couvrent la verite du Coran et par la meme sont ingrats envers Dieu qui leur a revele la Torah que le Coran confirme."
            }
          }
        }
      },
      // wry position 14 — "au-dela"
      {
        word_key: "wry", position: 14, sense_chosen: "derriere",
        analysis_axes: {
          concept_chosen: "Position cach\u00e9e",
          concepts: {
            "Position cach\u00e9e": {
              status: "retenu",
              senses: ["derri\u00e8re"],
              proof_ctx: "Le mot wara'ahu est un nom avec pronom 3MS de la racine w-r-y. Le Lane's donne \u00ab behind it, beyond it, what is past it \u00bb. Wara'a designe ce qui est derriere, hors de vue, au-dela. Dans ce verset, wara'ahu (au-dela de lui) designe ce qui vient apres la Torah — le Coran. Les enfants d'Israel rejettent ce qui se trouve au-dela de leur revelation propre.",
              axe1_verset: "Le mot wara'ahu situe le Coran par rapport a la Torah — il est « au-dela » de ce qui a ete revele aux enfants d'Israel. La position « derriere » est significative : les enfants d'Israel ne regardent pas au-dela de ce qu'ils ont. Le rejet de wara'ahu est le refus de voir au-dela de soi. La proposition concessive (wa-huwa al-haqq — alors que c'est la verite) aggrave le rejet.",
              axe2_voisins: "Le verset 89 mentionnait le rejet de ce qui leur est venu. Ce verset 91 precise que le rejet porte sur ce qui est « au-dela » — le Coran. Le verset 101 evoquera la « demeure de l'au-dela » (al-dar al-akhira). Le positionnement spatial (wara'/akhir) structure la vision temporelle de ces versets.",
              axe3_sourate: "La racine w-r-y est peu frequente dans la sourate al-Baqarah. Le mot wara'a designe la position cachee — ce qui est derriere et que l'on ne voit pas. Les enfants d'Israel refusent de voir au-dela de leur propre revelation. La sourate montre que la verite n'est pas limitee a un seul peuple.",
              axe4_coherence: "La racine w-r-y apparait dans le Coran avec le sens de « derriere, au-dela ». En 18:79, « wara'ahum malikun — derriere eux un roi ». En 19:26, wara'a al-hijab — derriere le voile. Le sens de « au-dela » implique ce qui est cache ou non visible depuis la position actuelle.",
              axe5_frequence: "Pour la mission du khalifa, voir au-dela est une capacite essentielle. Le khalifa ne se limite pas a ce qui est immediat — il voit au-dela, vers l'avenir et vers la verite complete. Les enfants d'Israel qui rejettent ce qui est wara'a montrent l'echec de la vision limitee."
            },
            "Dissimulation": {
              status: "nul",
              senses: ["dissimuler", "enterrer", "cacher"],
              proof_ctx: "Le sens de dissimulation est un autre aspect de w-r-y. Ici wara'a est un nom de lieu (au-dela, derriere), pas un verbe de dissimulation. Le contexte est spatial, pas un acte de cacher."
            }
          }
        }
      },
      // hqq position 16 — "la verite"
      {
        word_key: "hqq", position: 16, sense_chosen: "verite",
        analysis_axes: {
          concept_chosen: "V\u00e9rit\u00e9/R\u00e9alit\u00e9",
          concepts: {
            "V\u00e9rit\u00e9/R\u00e9alit\u00e9": {
              status: "retenu",
              senses: ["v\u00e9rit\u00e9", "\u00eatre vrai", "r\u00e9alit\u00e9", "droit"],
              proof_ctx: "Le mot al-haqqu est un nom masculin defini singulier nominatif de la racine h-q-q. Le Lane's donne \u00ab the truth, that which is real, that which is established as fact, right, just claim \u00bb. Le nom defini al-haqq designe la verite absolue et objective — ce n'est pas une opinion mais un fait etabli. Le Coran est al-haqq.",
              axe1_verset: "Le mot al-haqqu qualifie ce que les enfants d'Israel rejettent — la revelation venue apres la Torah. La proposition nominale wa-huwa al-haqq (et c'est la verite) est un constat factuel qui aggrave le rejet. Rejeter la verite tout en pretendant croire est une contradiction majeure. Le mot al-haqq est renforce par musaddiqan — la verite qui confirme ce qu'ils ont deja.",
              axe2_voisins: "Le verset 89 mentionnait le rejet de ce qui leur est venu. Ce verset 91 qualifie ce qui est rejete — c'est al-haqq, la verite. Le verset 92 rappellera les signes clairs (bayyinat) — les preuves de la verite. La verite est le fil rouge de ce passage.",
              axe3_sourate: "La racine h-q-q traverse la sourate al-Baqarah. En 2:26, « ils savent que c'est la verite de leur Seigneur ». En 2:42, « ne revetez pas le vrai de faux ». La sourate oppose systematiquement al-haqq (la verite) au batil (le faux) et montre que les enfants d'Israel melangent les deux.",
              axe4_coherence: "La racine h-q-q apparait plus de 280 fois dans le Coran. Al-haqq est aussi un nom de Dieu — Il est la Verite. Le Coran se definit comme al-haqq — la parole de verite. En 10:32, « apres la verite, que reste-t-il sinon l'egarement ? ». La verite est un absolu qui ne tolere pas le compromis.",
              axe5_frequence: "Pour la mission du khalifa, la verite est le fondement de l'action. Le khalifa reconnait al-haqq et agit en consequence. Rejeter la verite — meme partiellement — c'est s'engager dans l'egarement."
            },
            "Obligation/N\u00e9cessit\u00e9": {
              status: "nul",
              senses: ["devoir", "m\u00e9riter", "\u00eatre obligatoire"],
              proof_ctx: "Le sens d'obligation est un autre aspect de h-q-q. Ici al-haqqu est un nom defini (la verite) qui qualifie la revelation. Le contexte est celui de la verite, pas de l'obligation."
            }
          }
        }
      },
      // sdq position 17 — "confirmant"
      {
        word_key: "sdq", position: 17, sense_chosen: "confirmer",
        analysis_axes: {
          concept_chosen: "V\u00e9rit\u00e9/Sinc\u00e9rit\u00e9",
          concepts: {
            "V\u00e9rit\u00e9/Sinc\u00e9rit\u00e9": {
              status: "retenu",
              senses: ["dire vrai", "vrai", "sinc\u00e8re", "confirmer"],
              proof_ctx: "Le mot musaddiqan est un participe actif forme II accusatif singulier de la racine s-d-q. Le Lane's donne \u00ab confirming, attesting the truth of, declaring true \u00bb. La forme II (taf'il) est un intensif causatif — confirmer activement la verite de quelque chose. Le participe est au hal (etat) — le Coran est la verite « en tant que confirmant » ce qui precede.",
              axe1_verset: "Le mot musaddiqan est en position de hal (etat concomitant) — le Coran est la verite confirmant (musaddiqan) ce qu'ils ont. Le participe cree un lien entre les deux revelations — le Coran ne contredit pas la Torah, il la confirme. Le rejet du Coran par les enfants d'Israel est d'autant plus irrationnel que le Coran confirme leur propre livre.",
              axe2_voisins: "Le verset 89 utilisait deja musaddiqun pour qualifier le Coran. Le verset 91 reitere cette qualification. Le verset 97 precisera que Gabriel a fait descendre le Coran « confirmant ce qui le precede ». La notion de confirmation (tasdiq) est essentielle dans l'argumentation de ce passage.",
              axe3_sourate: "La racine s-d-q dans la sourate al-Baqarah porte les sens de verite et de confirmation. En 2:41, « croyez en ce que J'ai fait descendre, confirmant ce que vous avez ». En 2:89, « confirmant ce qu'ils avaient ». La sourate insiste sur le fait que chaque revelation confirme les precedentes.",
              axe4_coherence: "La racine s-d-q apparait plus de 150 fois dans le Coran. Le mot musaddiq (confirmant) est utilise specifiquement pour decrire le rapport entre les revelations successives. En 3:3, « Il a fait descendre le Livre confirmant ce qui le precede ». La confirmation mutuelle des livres est un argument majeur du Coran.",
              axe5_frequence: "Pour la mission du khalifa, la veracite (sidq) est une qualite fondamentale. Le khalifa confirme la verite par ses actes. La confirmation mutuelle des revelations montre que la verite est une et coherente."
            }
          }
        }
      },
      // qtl position 22 — "tuiez-vous"
      {
        word_key: "qtl", position: 22, sense_chosen: "tuer",
        analysis_axes: {
          concept_chosen: "Meurtre/Combat",
          concepts: {
            "Meurtre/Combat": {
              status: "retenu",
              senses: ["combat", "assassiner", "tuer", "combattre", "meurtre"],
              proof_ctx: "Le verbe taqtuluna est un inaccompli 2MP de la racine q-t-l. Le Lane's donne \u00ab you kill, you slay, you murder \u00bb. L'inaccompli a ici valeur de passe iteratif — il designe une action repetee dans le passe. Les enfants d'Israel tuaient les prophetes de Dieu de maniere systematique.",
              axe1_verset: "Le verbe taqtuluna est l'argument massue de la question rhetorique — « pourquoi donc tuiez-vous les prophetes de Dieu ? ». Le meurtre des prophetes contredit directement la pretention de foi des enfants d'Israel. Si l'on croit en la revelation, on ne tue pas ceux qui la transmettent. La question fa-lima (pourquoi donc) expose l'absurdite de leur position.",
              axe2_voisins: "Le verset 87 mentionnait deja le meurtre des prophetes — « chaque fois qu'un messager vous apportait ce que vos ames ne desiraient pas, vous les traitiez d'imposteurs et certains vous les tuiez ». Le verset 91 reprend ce theme comme argument contre leur pretention de foi. Le meurtre des prophetes est un refrain accablant dans ce passage.",
              axe3_sourate: "La racine q-t-l dans la sourate al-Baqarah traite du meurtre et du combat. En 2:61, « ils tuaient les prophetes sans droit ». En 2:72, « vous avez tue un homme ». La sourate accumule les accusations de meurtre contre les enfants d'Israel pour montrer l'ampleur de leur transgression.",
              axe4_coherence: "La racine q-t-l apparait plus de 170 fois dans le Coran. Le meurtre des prophetes est un theme recurrent — en 3:21, « ceux qui tuent les prophetes sans droit ». En 3:181, « nous ecrirons ce qu'ils ont dit et leur meurtre des prophetes ». Le Coran presente ce meurtre comme le crime ultime contre Dieu.",
              axe5_frequence: "Pour la mission du khalifa, le meurtre est l'antithese de la protection de la vie. Le khalifa protege les prophetes et leur message. Les enfants d'Israel qui tuent les prophetes detruisent les messagers de Dieu."
            }
          }
        }
      },
      // nba position 23 — "prophetes"
      {
        word_key: "nba", position: 23, sense_chosen: "prophete",
        analysis_axes: {
          concept_chosen: "Information/Nouvelle",
          concepts: {
            "Information/Nouvelle": {
              status: "retenu",
              senses: ["nouvelle", "annoncer", "informer"],
              proof_ctx: "Le mot anbiya'a est un nom masculin pluriel brise de la racine n-b-a. Le Lane's donne \u00ab prophets, those who bring news from God \u00bb. Le pluriel brise anbiya'a designe l'ensemble des prophetes — ceux qui informent (naba'a) les hommes des nouvelles divines. Le prophete est etymologiquement celui qui porte les nouvelles (anba') de Dieu.",
              axe1_verset: "Le mot anbiya'a est le complement de taqtuluna — les prophetes sont les victimes du meurtre. L'ajout d'Allahi (de Dieu) souligne que les prophetes appartiennent a Dieu — les tuer c'est s'attaquer aux envoyes de Dieu. Le pluriel montre que ce n'est pas un cas isole — ils ont tue plusieurs prophetes.",
              axe2_voisins: "Le verset 87 mentionnait deja les messagers (rusul) qui leur apportaient ce que leurs ames ne desiraient pas. Ce verset 91 utilise anbiya'a (prophetes) au lieu de rusul (messagers). La distinction est significative — les prophetes transmettent les nouvelles divines, les messagers portent un message specifique.",
              axe3_sourate: "La racine n-b-a dans la sourate al-Baqarah traite de la prophetie et de l'information. En 2:31, Dieu dit aux anges « informez-Moi (anbi'uni) de leurs noms ». En 2:33, Adam informe les anges. La sourate montre que l'information vient de Dieu et passe par les prophetes.",
              axe4_coherence: "La racine n-b-a apparait plus de 160 fois dans le Coran. Les prophetes (anbiya') sont mentionnes collectivement pour designer la chaine prophetique — d'Adam a Muhammad. En 2:213, « Dieu envoya les prophetes comme annonciateurs et avertisseurs ». Les prophetes sont le canal de la revelation.",
              axe5_frequence: "Pour la mission du khalifa, les prophetes sont les modeles a suivre. Le khalifa herite de la mission prophetique — transmettre les nouvelles divines. Tuer les prophetes c'est detruire le lien entre Dieu et les hommes."
            },
            "Proph\u00e9tie": {
              status: "probable",
              senses: ["proph\u00e8te", "proph\u00e9tie"],
              proof_ctx: "Le sens de prophetie est directement lie a celui d'information — le prophete est celui qui recoit et transmet les nouvelles divines. Le mot anbiya'a porte les deux sens — l'informateur et le prophete ne font qu'un."
            }
          }
        }
      },
      // qbl position 26 — "auparavant"
      {
        word_key: "qbl", position: 26, sense_chosen: "avant",
        analysis_axes: {
          concept_chosen: "Ant\u00e9riorit\u00e9/Pass\u00e9",
          concepts: {
            "Ant\u00e9riorit\u00e9/Pass\u00e9": {
              status: "retenu",
              senses: ["avant", "auparavant", "ancien", "devant"],
              proof_ctx: "Le mot qablu est un nom de la racine q-b-l. Le Lane's donne \u00ab before, previously, aforetime \u00bb. Le mot situe le meurtre des prophetes dans le passe — avant la venue du Prophete Muhammad. L'anteriorite est factuelle et irrefutable.",
              axe1_verset: "Le mot qablu est en fin de verset dans la question rhetorique — « pourquoi tuiez-vous les prophetes de Dieu auparavant ? ». L'anteriorite temporelle ancre l'accusation dans l'histoire — ce n'est pas une accusation vague mais un rappel d'evenements historiques connus. Le « auparavant » renforce l'argument — leur violence contre les prophetes precede leur pretention de foi.",
              axe2_voisins: "Le verset 87 situait deja le meurtre dans le passe. Ce verset 91 reitere l'accusation en ajoutant « auparavant ». Le verset 92 rappellera un autre evenement passe — l'adoration du veau « apres (ba'di) » le depart de Moise. Le passage alterne entre anteriorite et posteriorite pour situer les fautes.",
              axe3_sourate: "La racine q-b-l dans la sourate al-Baqarah porte les sens d'anteriorite et de reception. En 2:4, « ce qui a ete fait descendre avant toi ». En 2:89, « confirmant ce qu'ils avaient ». La sourate utilise l'anteriorite pour etablir la continuite entre les revelations.",
              axe4_coherence: "La racine q-b-l apparait plus de 250 fois dans le Coran. Le mot qablu situe les evenements dans le passe. Le Coran utilise l'histoire comme argument — les actes passes sont des preuves irrefutables des dispositions presentes.",
              axe5_frequence: "Pour la mission du khalifa, l'anteriorite est une lecon. Le khalifa apprend des erreurs du passe. Les enfants d'Israel qui ont tue les prophetes auparavant montrent un schema repete de desobeissance."
            }
          }
        }
      },
      // knw position 28 — "vous etiez"
      {
        word_key: "knw", position: 28, sense_chosen: "etre",
        analysis_axes: {
          concept_chosen: "Existence/Devenir",
          concepts: {
            "Existence/Devenir": {
              status: "retenu",
              senses: ["\u00eatre", "devenir", "exister"],
              proof_ctx: "Le verbe kuntum est un accompli 2MP de la racine k-w-n. Le Lane's donne \u00ab you were \u00bb. Le verbe auxiliaire kana au passe situe la condition dans le temps — « si vous etiez croyants ». La condition irreelle (in kuntum) implique qu'ils ne l'etaient pas vraiment.",
              axe1_verset: "Le verbe kuntum introduit la condition finale du verset — « si vous etiez croyants ». La condition est rhetorique — elle implique qu'ils n'etaient pas de vrais croyants puisqu'ils tuaient les prophetes. Le verbe kana au passe (kuntum) renforce l'ironie — la condition porte sur un etat passe qui n'a manifestement pas existe.",
              axe2_voisins: "Le verset 89 utilisait deja « ils ont mecru en lui ». Le verset 91 clot l'argument par la condition « si vous etiez croyants ». Le verset 93 reprendra la meme formule finale (in kuntum mu'minina). La repetition de cette condition cree un refrain accusateur.",
              axe3_sourate: "La racine k-w-n est l'une des plus frequentes de la sourate al-Baqarah. Le verbe kana structure les phrases conditionnelles et les descriptions d'etats passes. En 2:23, « si vous etes veridiques ». En 2:111, « produisez votre preuve si vous etes veridiques ». La sourate utilise la condition pour defier les pretentions.",
              axe4_coherence: "La racine k-w-n apparait plus de 1300 fois dans le Coran. Le verbe kana est le verbe auxiliaire fondamental de l'arabe. La formule in kuntum mu'minina (si vous etiez croyants) est recurrente dans le Coran comme defi lance aux pretentions de foi.",
              axe5_frequence: "Pour la mission du khalifa, l'etre doit correspondre au paraitre. Le khalifa est (yakun) ce qu'il pretend etre. Les enfants d'Israel pretendaient etre croyants (mu'minina) mais ne l'etaient pas — leur etre contredisait leur pretention."
            }
          }
        }
      }
    ]
  },

  // =====================================================
  // VERSET 2:92
  // verse_id=99, analysis_id=458
  // "Moise vint a vous avec des preuves claires, puis vous avez
  //  pris le veau apres lui, et vous etiez injustes."
  // =====================================================
  92: {
    verse_id: 99,
    analysis_id: 458,
    translation_arab: "Et certes Moise vint a vous avec les preuves claires, puis vous avez pris le veau apres lui, et vous etiez injustes.",
    full_translation: "Et certes Moise vint a vous avec les preuves claires, puis vous avez pris le veau apres [son depart], et vous etiez injustes.",
    translation_explanation: `§DEMARCHE§
Ce verset rappelle un evenement precis — l'adoration du veau d'or pendant l'absence de Moise, malgre les preuves claires qu'il avait apportees. Le verbe **ja'akum** est un accompli 3MS de la racine j-y-a avec pronom 2MP. Le Lane's donne \u00ab he came to you \u00bb. La venue de Moise est un fait historique etabli. Le mot **Musa** est un nom propre (particule). Le mot **al-bayyinati** est un nom feminin pluriel defini de la racine b-y-n. Le Lane's donne \u00ab clear proofs, evident signs, manifest arguments \u00bb. Les preuves claires sont les miracles de Moise. Le verbe **ittakhadhtum** est un accompli 2MP forme VIII de la racine a-kh-dh. Le Lane's donne \u00ab you took, you adopted, you chose \u00bb. La forme VIII (ifta'ala) signifie prendre deliberement, adopter par choix. Le mot **al-'ijla** est un nom masculin singulier defini de la racine '-j-l. Le Lane's donne \u00ab the calf \u00bb. Le veau d'or est l'objet de l'idolatrie. Le mot **ba'dihi** est un nom de la racine b-'-d avec pronom 3MS. Le Lane's donne \u00ab after him, after his (departure) \u00bb. L'absence de Moise est le moment choisi pour l'idolatrie. Le mot **zalimuna** est un participe actif masculin pluriel de la racine z-l-m. Le Lane's donne \u00ab wrongdoers, oppressors, those who place things out of their proper place \u00bb. L'injustice est le verdict final sur leur acte.

§JUSTIFICATION§
**vint** — Le sens retenu est \u00ab venir \u00bb. Le verbe ja'akum designe la venue de Moise aupres des enfants d'Israel. Pas d'alternative pertinente.

**preuves claires** — Le sens retenu est \u00ab entre \u00bb. Le mot al-bayyinati (pluriel de bayyina) designe les preuves manifestes. L'alternative \u00ab separer \u00bb est ecartee car le nom pluriel defini designe les signes evidents, pas une separation.

**vous avez pris** — Le sens retenu est \u00ab prendre \u00bb. Le verbe ittakhadhtum forme VIII designe la prise deliberee du veau comme objet d'adoration. L'alternative \u00ab punir \u00bb est ecartee car le contexte est l'adoption, pas le chatiment.

**le veau** — Le sens retenu est \u00ab veau \u00bb. Le mot al-'ijla designe le veau d'or que les enfants d'Israel ont adore. L'alternative \u00ab precipiter \u00bb est ecartee car le nom defini designe l'animal.

**apres lui** — Le sens retenu est \u00ab apres \u00bb. Le mot ba'dihi designe l'absence de Moise. L'alternative \u00ab eloignement \u00bb est ecartee car le mot est ici un adverbe temporel.

**injustes** — Le sens retenu est \u00ab etre injuste \u00bb. Le mot zalimuna designe ceux qui placent les choses hors de leur place. L'alternative \u00ab tenebres \u00bb est ecartee car le participe actif designe les auteurs de l'injustice, pas l'obscurite.

§CRITIQUE§
**preuves claires vs idolatrie** — Moise est venu avec des preuves claires (bayyinat) mais les enfants d'Israel ont pris le veau. La juxtaposition des bayyinat et du 'ijl montre l'absurdite de leur choix — ils avaient les preuves de la verite et ont choisi l'idole.
**absence de Moise = desobeissance** — L'adoration du veau s'est produite ba'dihi (apres lui/en son absence). L'absence du prophete revele la fragilite de leur foi — des que le guide s'absente, ils retournent a l'idolatrie. La foi authentique ne depend pas de la presence physique du prophete.`,
    segments: [
      { fr: "et certes", phon: "wa-laqad", arabic: "\u0648\u064E\u0644\u064E\u0642\u064E\u062F\u0652", is_particle: true, position: 0 },
      { fr: "vint a vous", pos: "verbe", phon: "ja'akum", arabic: "\u062C\u064E\u0622\u0621\u064E\u0643\u064F\u0645", word_key: "jya", is_particle: false, sense_retenu: "venir", position: 1 },
      { fr: "Moise", phon: "Musa", arabic: "\u0645\u0651\u064F\u0648\u0633\u064E\u0649\u0670", is_particle: true, position: 2 },
      { fr: "avec les preuves claires", pos: "nom", phon: "al-bayyinati", arabic: "\u0628\u0650\u0671\u0644\u0652\u0628\u064E\u064A\u0651\u0650\u0646\u064E\u0670\u062A\u0650", word_key: "byn", is_particle: false, sense_retenu: "entre", position: 3 },
      { fr: "puis", phon: "thumma", arabic: "\u062B\u064F\u0645\u0651\u064E", is_particle: true, position: 4 },
      { fr: "vous avez pris", pos: "verbe", phon: "ittakhadhtum", arabic: "\u0671\u062A\u0651\u064E\u062E\u064E\u0630\u0652\u062A\u064F\u0645\u064F", word_key: "akhz", is_particle: false, sense_retenu: "prendre", position: 5 },
      { fr: "le veau", pos: "nom", phon: "al-'ijla", arabic: "\u0671\u0644\u0652\u0639\u0650\u062C\u0652\u0644\u064E", word_key: "ejl", is_particle: false, sense_retenu: "veau", position: 6 },
      { fr: "de", phon: "min", arabic: "\u0645\u0650\u0646\u06E2", is_particle: true, position: 7 },
      { fr: "apres lui", pos: "nom", phon: "ba'dihi", arabic: "\u0628\u064E\u0639\u0652\u062F\u0650\u0647\u0650.", word_key: "baed", is_particle: false, sense_retenu: "apres", position: 8 },
      { fr: "et vous", phon: "wa-antum", arabic: "\u0648\u064E\u0623\u064E\u0646\u062A\u064F\u0645\u0652", is_particle: true, position: 9 },
      { fr: "injustes", pos: "nom", phon: "zalimuna", arabic: "\u0638\u064E\u0670\u0644\u0650\u0645\u064F\u0648\u0646\u064E", word_key: "zlm", is_particle: false, sense_retenu: "etre injuste", position: 10 }
    ],
    words: [
      {
        word_key: "jya", position: 1, sense_chosen: "venir",
        analysis_axes: {
          concept_chosen: "Venue",
          concepts: {
            "Venue": {
              status: "retenu",
              senses: ["venir"],
              proof_ctx: "Le verbe ja'akum est un accompli 3MS de la racine j-y-a avec pronom 2MP. Le Lane's donne \u00ab he came to you \u00bb. La venue de Moise est un fait historique — il est venu aupres des enfants d'Israel avec les preuves claires. La particule qad (certes) renforce la certitude de la venue.",
              axe1_verset: "Le verbe ja'akum ouvre le corps du verset apres la particule d'emphase wa-laqad. La venue de Moise avec les preuves claires est le contexte qui aggrave l'adoration du veau — ils ont vu les preuves et ont quand meme choisi l'idole. La venue est factuelle et indiscutable. La particule emphathique laqad renforce — « assurement il est venu a vous ».",
              axe2_voisins: "Le verset 87 rappelait deja la venue des messagers. Ce verset 92 precise — Moise est venu avec des preuves claires. Le verset 93 rappellera la prise du pacte. La venue des prophetes avec des preuves est un theme constant de ce passage.",
              axe3_sourate: "La racine j-y-a dans la sourate al-Baqarah designe la venue des messagers et des revelations. En 2:87, « chaque fois qu'un messager vous apportait ». En 2:120, « apres ce qui t'est venu de science ». La venue est le mode d'interaction entre Dieu et les hommes par les prophetes.",
              axe4_coherence: "La racine j-y-a apparait plus de 270 fois dans le Coran. La venue (maji') des prophetes est un evenement majeur qui engage la responsabilite de ceux qui la vivent. Celui qui voit venir le prophete avec des preuves et refuse est plus coupable que celui qui n'a rien vu.",
              axe5_frequence: "Pour la mission du khalifa, la venue des prophetes est un modele. Le khalifa vient avec la verite et agit. Les enfants d'Israel qui voient la venue de Moise et choisissent le veau montrent le rejet le plus absurde."
            }
          }
        }
      },
      {
        word_key: "byn", position: 3, sense_chosen: "entre",
        analysis_axes: {
          concept_chosen: "S\u00e9paration/Distance",
          concepts: {
            "S\u00e9paration/Distance": {
              status: "retenu",
              senses: ["entre", "s\u00e9parer", "quitter"],
              proof_ctx: "Le mot al-bayyinati est un nom feminin pluriel defini de la racine b-y-n. Le Lane's donne \u00ab clear proofs, evident signs, manifest proofs \u00bb. Le nom bayyina (singulier) derive de la racine b-y-n qui porte le sens de separation/distinction — la preuve claire est ce qui separe le vrai du faux. Les bayyinat de Moise sont ses miracles (baton, main lumineuse, etc.).",
              axe1_verset: "Le mot al-bayyinati qualifie ce que Moise a apporte — des preuves qui separent le vrai du faux. La presence de preuves claires aggrave la faute — ils ont vu la verite se distinguer clairement et ont quand meme choisi le veau. Le contraste entre bayyinat (clarte) et 'ijl (idolatrie) est maximal.",
              axe2_voisins: "Le verset 87 mentionnait les messagers sans preciser les preuves. Ce verset 92 ajoute les preuves claires. Le verset 93 rappellera le pacte et l'ordre de prendre fermement la revelation. La clarte des preuves rend la desobeissance inexcusable.",
              axe3_sourate: "La racine b-y-n dans la sourate al-Baqarah porte les sens de clarte et de separation. En 2:99, « Nous avons fait descendre des signes clairs ». En 2:159, « ceux qui cachent les preuves claires ». Les bayyinat sont le critere de jugement — celui qui a recu les preuves et rejette est sans excuse.",
              axe4_coherence: "La racine b-y-n apparait environ 523 fois dans le Coran. Les bayyinat accompagnent systematiquement les prophetes — chaque prophete vient avec ses preuves claires. En 3:184, « des messagers avant toi qui sont venus avec les preuves claires ». La clarte des preuves est universelle.",
              axe5_frequence: "Pour la mission du khalifa, les preuves claires sont les outils de la guidance. Le khalifa presente la verite avec des preuves qui separent le vrai du faux. Les bayyinat de Moise n'ont pas suffi a convaincre les enfants d'Israel — la clarte seule ne garantit pas l'adhesion."
            }
          }
        }
      },
      {
        word_key: "akhz", position: 5, sense_chosen: "prendre",
        analysis_axes: {
          concept_chosen: "Prise/Saisie",
          concepts: {
            "Prise/Saisie": {
              status: "retenu",
              senses: ["prendre", "saisir", "adopter"],
              proof_ctx: "Le verbe ittakhadhtum est un accompli 2MP forme VIII de la racine a-kh-dh. Le Lane's donne \u00ab you took, you adopted, you chose deliberately \u00bb. La forme VIII (ifta'ala) ajoute le sens de deliberation — prendre par choix, pas par contrainte. L'adoption du veau est un acte volontaire et delibere.",
              axe1_verset: "Le verbe ittakhadhtum designe la prise deliberee du veau comme objet d'adoration. La forme VIII souligne le caractere volontaire — ils ont choisi le veau malgre les preuves claires. Le verbe est a la 2MP (vous avez pris) — l'accusation est directe et personnelle. La prise du veau est l'acte le plus grave de ce verset.",
              axe2_voisins: "Le verset 51 utilisait deja ittakhadhtum al-'ijla — la meme formule exacte. Ce verset 92 reprend cette formule dans un contexte d'argumentation — apres les preuves claires de Moise. Le verset 93 utilisera akhazna (Nous primes) pour le pacte — la prise divine (le pacte) contraste avec la prise humaine (le veau).",
              axe3_sourate: "La racine a-kh-dh dans la sourate al-Baqarah couvre la prise sous toutes ses formes — prise de pacte, prise d'idole, prise par le sommeil. En 2:255, « ni sommeil ni assoupissement ne Le prennent ». La sourate montre que la prise peut etre positive (pacte avec Dieu) ou negative (adoption du veau).",
              axe4_coherence: "La racine a-kh-dh apparait plus de 270 fois dans le Coran. Le verbe ittakhadha (forme VIII) designe l'adoption deliberee — en 25:43, « celui qui prend sa passion comme divinite ». La prise deliberee d'un objet d'adoration autre que Dieu est l'idolatrie.",
              axe5_frequence: "Pour la mission du khalifa, la prise doit etre guidee par la revelation. Le khalifa prend ce que Dieu ordonne de prendre — le pacte, la revelation. Prendre le veau c'est prendre l'oppose de ce que Dieu ordonne."
            },
            "Ch\u00e2timent": {
              status: "nul",
              senses: ["punir", "reprocher"],
              proof_ctx: "Le sens de chatiment est un autre aspect de a-kh-dh. Ici ittakhadhtum forme VIII signifie « adopter deliberement » — le contexte est l'adoption du veau, pas la punition."
            }
          }
        }
      },
      {
        word_key: "ejl", position: 6, sense_chosen: "veau",
        analysis_axes: {
          concept_chosen: "Idol\u00e2trie",
          concepts: {
            "Idol\u00e2trie": {
              status: "retenu",
              senses: ["veau"],
              proof_ctx: "Le mot al-'ijla est un nom masculin singulier defini accusatif de la racine '-j-l. Le Lane's donne \u00ab the calf, a young bovine \u00bb. Le veau d'or (al-'ijl) est le symbole de l'idolatrie des enfants d'Israel — ils ont fabrique un veau en or et l'ont adore en l'absence de Moise. Le nom defini (al-) montre qu'il s'agit du veau connu, pas d'un veau quelconque.",
              axe1_verset: "Le mot al-'ijla est le complement du verbe ittakhadhtum — ce qu'ils ont pris deliberement. Le veau est l'objet d'adoration substitue a Dieu. Le contraste entre les bayyinat (preuves claires de Dieu) et le 'ijl (veau fabrique) est maximal. L'article defini al- renvoie au veau historique connu — le veau d'or du recit de Moise.",
              axe2_voisins: "Le verset 51 mentionnait deja le veau d'or. Ce verset 92 le rappelle comme argument contre la pretention de foi. Le verset 93 dira « on fit boire a leurs coeurs le veau ». Le veau est un symbole recurrent dans ce passage — il revient comme un refrain accablant.",
              axe3_sourate: "La racine '-j-l dans la sourate al-Baqarah traite de l'idolatrie et de la precipation. Le veau d'or est mentionne dans les versets 51, 54, 92 et 93 — quatre rappels dans la meme sourate. La sourate insiste sur cet episode pour montrer la profondeur de la desobeissance des enfants d'Israel.",
              axe4_coherence: "La racine '-j-l apparait environ 20 fois dans le Coran. Le veau d'or est mentionne dans les sourates 2, 4, 7 et 20. En 7:148, la fabrication du veau est decrite en detail. Le veau est le symbole universel de l'idolatrie — l'adoration de ce qui est fabrique par les mains de l'homme.",
              axe5_frequence: "Pour la mission du khalifa, le veau represente la tentation de l'idolatrie. Le khalifa doit adorer Dieu seul et rejeter tout substitut. Les enfants d'Israel qui prennent le veau montrent la faiblesse de celui qui abandonne l'adoration de Dieu pour celle de la creature."
            },
            "H\u00e2te/Pr\u00e9cipitation": {
              status: "probable",
              senses: ["pr\u00e9cipiter", "se h\u00e2ter", "presser"],
              proof_ctx: "Le sens de hate est le sens premier de '-j-l. Le lien avec le veau est que l'adoration du veau fut un acte precipite — ils se sont hates vers l'idolatrie des que Moise s'est absente. La precipitation est le contexte psychologique de l'idolatrie."
            }
          }
        }
      },
      {
        word_key: "baed", position: 8, sense_chosen: "apres",
        analysis_axes: {
          concept_chosen: "Post\u00e9riorit\u00e9",
          concepts: {
            "Post\u00e9riorit\u00e9": {
              status: "retenu",
              senses: ["apr\u00e8s", "ensuite"],
              proof_ctx: "Le mot ba'dihi est un nom de la racine b-'-d avec pronom 3MS. Le Lane's donne \u00ab after him, after his departure \u00bb. La posteriorite situe l'adoration du veau dans le temps — apres le depart de Moise au Mont Sinai. Le pronom renvoie a Moise.",
              axe1_verset: "Le mot ba'dihi situe chronologiquement l'idolatrie — apres le depart de Moise. L'absence du prophete est le declencheur de la desobeissance. Le mot ba'di cree une sequence temporelle : Moise vient avec les preuves (ja'a), puis il s'absente, puis ils prennent le veau (ittakhadhtum). La desobeissance attend l'absence du guide pour se manifester.",
              axe2_voisins: "Le verset 91 utilisait qablu (auparavant) pour le meurtre des prophetes. Ce verset 92 utilise ba'dihi (apres lui) pour l'adoration du veau. Le verset 93 utilisera la meme structure — le pacte pris puis viole. L'alternance qablu/ba'di structure la chronologie du passage.",
              axe3_sourate: "La racine b-'-d dans la sourate al-Baqarah traite de la posteriorite et de l'eloignement. En 2:27, « ceux qui rompent apres (ba'da) son pacte ». En 2:52, « puis Nous vous avons pardonnes apres (ba'di) cela ». La sourate montre que les actes commis « apres » les preuves et les pactes sont les plus graves.",
              axe4_coherence: "La racine b-'-d apparait plus de 200 fois dans le Coran. Le mot ba'da (apres) structure la chronologie des evenements. En 5:41, « meme apres les signes ». Le Coran souligne que les actes commis apres la reception des preuves sont les plus graves.",
              axe5_frequence: "Pour la mission du khalifa, l'apres est le temps de l'epreuve. Le khalifa agit apres avoir recu les preuves — il ne retourne pas a l'idolatrie. Les enfants d'Israel qui prennent le veau apres les preuves montrent l'echec de l'apres-revelation."
            }
          }
        }
      },
      {
        word_key: "zlm", position: 10, sense_chosen: "etre injuste",
        analysis_axes: {
          concept_chosen: "Injustice/Oppression",
          concepts: {
            "Injustice/Oppression": {
              status: "retenu",
              senses: ["oppresseur", "opprimer", "injustice", "\u00eatre injuste"],
              proof_ctx: "Le mot zalimuna est un participe actif masculin pluriel de la racine z-l-m. Le Lane's donne \u00ab wrongdoers, those who place things out of their proper place, oppressors \u00bb. L'injustice (zulm) est l'acte de placer quelque chose hors de sa place. Adorer le veau au lieu de Dieu est l'injustice supreme — mettre la creature a la place du Createur.",
              axe1_verset: "Le mot zalimuna cloture le verset par un verdict — « et vous etiez injustes ». Le participe actif pluriel qualifie les enfants d'Israel comme auteurs permanents de l'injustice. L'injustice ici est specifique — elle consiste a placer le veau (creature) a la place de Dieu (Createur). La proposition wa-antum zalimuna est une proposition de hal — ils etaient dans l'etat d'injustice.",
              axe2_voisins: "Le verset 51 qualifiait deja les adorateurs du veau d'injustes. Ce verset 92 reitere le verdict. Le verset 54 rappelait le repentir exige — « vous vous etes fait du tort a vous-memes ». L'injustice dans ce passage est toujours liee a l'idolatrie.",
              axe3_sourate: "La racine z-l-m traverse la sourate al-Baqarah comme un fil rouge. En 2:35, l'avertissement a Adam — « ne soyez pas des injustes ». En 2:54, les adorateurs du veau se sont fait du tort. En 2:229, l'injustice est le depassement des limites de Dieu. La sourate montre que l'injustice supreme est le shirk — associer un egal a Dieu.",
              axe4_coherence: "La racine z-l-m apparait plus de 300 fois dans le Coran. Le zulm dans le Coran va de l'injustice entre humains a l'injustice envers Dieu (shirk). En 31:13, « le shirk est une injustice immense ». L'adoration du veau est la plus grande forme de zulm.",
              axe5_frequence: "Pour la mission du khalifa, la justice est le fondement de l'action. Le khalifa place chaque chose a sa place — Dieu a Sa place, la creation a sa place. Les enfants d'Israel qui adorent le veau commettent l'injustice de deplacer les realites."
            },
            "Obscurit\u00e9/T\u00e9n\u00e8bres": {
              status: "probable",
              senses: ["t\u00e9n\u00e8bres", "obscurit\u00e9"],
              proof_ctx: "Le sens d'obscurite est le sens premier de z-l-m. L'injustice est une forme d'obscurite — celui qui est injuste est dans les tenebres. L'adoration du veau est un acte d'obscurite spirituelle — les enfants d'Israel sont dans les tenebres de l'idolatrie."
            }
          }
        }
      }
    ]
  },

  // =====================================================
  // VERSET 2:93
  // verse_id=100, analysis_id=462
  // "Nous primes votre pacte et elevames au-dessus de vous le
  //  mont : Prenez fermement ce que Nous vous avons donne et
  //  ecoutez. Ils dirent : Nous avons entendu et nous desobeissons.
  //  On fit boire a leurs coeurs le veau a cause de leur rejet.
  //  Dis : Quel miserable commandement vous ordonne votre foi,
  //  si vous etes croyants."
  // =====================================================
  93: {
    verse_id: 100,
    analysis_id: 462,
    translation_arab: "Et quand Nous primes votre pacte et elevames au-dessus de vous le mont : Prenez fermement ce que Nous vous avons donne et ecoutez. Ils dirent : Nous avons entendu et nous desobeissons. Et on fit boire a leurs coeurs le veau a cause de leur rejet. Dis : Quelle miserable chose vous ordonne votre foi, si vous etiez croyants.",
    full_translation: "Et [rappelle] quand Nous primes votre pacte et elevames au-dessus de vous le mont : Prenez fermement ce que Nous vous avons donne et ecoutez. Ils dirent : Nous avons entendu et nous desobeissons. Et on fit absorber a leurs coeurs [l'amour du] veau a cause de leur rejet. Dis : Quelle miserable chose vous ordonne votre foi, si vous etiez croyants.",
    translation_explanation: `§DEMARCHE§
Ce verset long rapporte la scene du pacte au Mont Sinai. Dieu prit le pacte des enfants d'Israel, eleva la montagne au-dessus d'eux et leur ordonna de prendre fermement la revelation et d'ecouter. Leur reponse fut « nous entendons et nous desobeissons ». Le verbe **akhadhna** est un accompli 1P de la racine a-kh-dh. Le Lane's donne \u00ab We took, We seized \u00bb. Dieu prend le pacte. Le mot **mithaqakum** est un nom masculin de la racine w-th-q avec pronom 2MP. Le Lane's donne \u00ab your covenant, your firm pledge \u00bb. Le pacte est un engagement solennel. Le verbe **rafa'na** est un accompli 1P de la racine r-f-'. Le Lane's donne \u00ab We raised, We elevated \u00bb. Dieu eleva la montagne au-dessus d'eux. Le mot **fawqakum** est un nom de la racine f-w-q avec pronom 2MP. Le Lane's donne \u00ab above you \u00bb. La position au-dessus marque la domination. Le mot **al-tura** est un nom masculin defini de la racine t-w-r. Le Lane's donne \u00ab the mount, the mountain (of Sinai) \u00bb. Le mont Sinai est le lieu du pacte. Le verbe **khudhuu** est un imperatif 2MP de la racine a-kh-dh. Le Lane's donne \u00ab take, seize \u00bb. L'imperatif ordonne de prendre fermement. Le verbe **ataynakum** est un accompli 1P forme IV de la racine a-t-y avec pronom 2MP. Le Lane's donne \u00ab We gave you, We brought to you \u00bb. La forme IV est causative — faire arriver, donner. Le mot **bi-quwwatin** est un nom feminin de la racine q-w-y avec preposition. Le Lane's donne \u00ab with strength, with firmness \u00bb. La force designe la resolution et la determination. Le verbe **isma'uu** est un imperatif 2MP de la racine s-m-'. Le Lane's donne \u00ab listen, hear and obey \u00bb. L'imperatif ordonne l'ecoute qui implique l'obeissance. Le verbe **qaluu** est un accompli 3MP de la racine q-w-l. Le Lane's donne \u00ab they said \u00bb. Le verbe **sami'na** est un accompli 1P de la racine s-m-'. Le Lane's donne \u00ab we heard \u00bb. Le verbe **'asayna** est un accompli 1P de la racine '-s-y. Le Lane's donne \u00ab we disobeyed, we rebelled \u00bb. La desobeissance est la reponse au commandement divin. Le mot **qulubihim** est un nom pluriel de la racine q-l-b avec pronom 3MP. Le Lane's donne \u00ab their hearts \u00bb. Les coeurs sont le siege de la foi et de la volonte. Le mot **al-'ijla** est un nom de la racine '-j-l. Le Lane's donne \u00ab the calf \u00bb. Le veau a impregne leurs coeurs. Le mot **bi-kufrihim** est un nom de la racine k-f-r avec pronom 3MP. Le Lane's donne \u00ab by their rejection, because of their disbelief \u00bb. Le rejet est la cause de l'impregation du veau. Le verbe **qul** est un imperatif 2MS de la racine q-w-l. Le Lane's donne \u00ab say \u00bb. L'ordre s'adresse au Prophete. Le mot **bi'sama** est une expression de blame de la racine b-'-s. Le Lane's donne \u00ab wretched is what, evil is that which \u00bb. L'expression condamne. Le verbe **ya'murukum** est un inaccompli 3MS de la racine a-m-r avec pronom 2MP. Le Lane's donne \u00ab commands you, orders you \u00bb. Le mot **imanukum** est un nom de la racine a-m-n avec pronom 2MP. Le Lane's donne \u00ab your faith, your belief \u00bb. La foi est presentee ironiquement comme la source de leurs actes mauvais. Le verbe **kuntum** est un accompli 2MP de la racine k-w-n. Le Lane's donne \u00ab you were \u00bb. Le mot **mu'minina** est un participe de la racine a-m-n. Le Lane's donne \u00ab believers \u00bb.

§JUSTIFICATION§
**Nous primes** — Le sens retenu est \u00ab prendre \u00bb. Le verbe akhadhna designe la prise divine du pacte. L'alternative \u00ab punir \u00bb est ecartee car le contexte est l'etablissement d'un engagement.

**votre pacte** — Le sens retenu est \u00ab pacte \u00bb. Le mot mithaqakum designe l'engagement solennel. Pas d'alternative pertinente — la racine w-th-q n'a qu'un seul concept retenu.

**elevames** — Le sens retenu est \u00ab lever \u00bb. Le verbe rafa'na designe l'elevation physique du mont. L'alternative \u00ab enlever \u00bb est ecartee car le contexte est l'elevation, pas la suppression.

**au-dessus de vous** — Le sens retenu est \u00ab au-dessus \u00bb. Le mot fawqakum designe la position dominante du mont. L'alternative \u00ab se retablir \u00bb est ecartee car le mot est un adverbe de lieu.

**le mont** — Le sens retenu est \u00ab mont \u00bb. Le mot al-tura designe le mont Sinai. L'alternative \u00ab etape \u00bb est ecartee car le nom defini designe la montagne.

**prenez** — Le sens retenu est \u00ab prendre \u00bb. Le verbe khudhuu ordonne de prendre fermement la revelation. Meme racine que ittakhadhtum (verset 92) mais forme I — prendre directement.

**ce que Nous vous avons donne** — Le sens retenu est \u00ab donner \u00bb. Le verbe ataynakum forme IV designe l'acte de donner la revelation. L'alternative \u00ab detruire \u00bb est ecartee car la forme IV signifie donner.

**avec force** — Le sens retenu est \u00ab etre fort \u00bb. Le mot quwwatin designe la determination et la fermete. Pas d'alternative pertinente.

**ecoutez** — Le sens retenu est \u00ab ecouter \u00bb. Le verbe isma'uu designe l'ecoute qui implique l'obeissance. L'alternative \u00ab reputation \u00bb est ecartee car le verbe a l'imperatif designe l'ecoute.

**ils dirent** — Le sens retenu est \u00ab dire \u00bb. Le verbe qaluu designe la reponse du peuple.

**nous avons entendu** — Le sens retenu est \u00ab entendre \u00bb. Le verbe sami'na designe l'audition — ils ont physiquement entendu l'ordre.

**et nous desobeissons** — Le sens retenu est \u00ab desobeir \u00bb. Le verbe 'asayna designe la rebellion ouverte. Pas d'alternative pertinente.

**leurs coeurs** — Le sens retenu est \u00ab coeur \u00bb. Le mot qulubihim designe le siege de la foi. L'alternative \u00ab retourner \u00bb est ecartee car le nom pluriel designe l'organe de la comprehension.

**le veau** — Le sens retenu est \u00ab veau \u00bb. Le mot al-'ijla designe le veau d'or impregne dans leurs coeurs.

**leur rejet** — Le sens retenu est \u00ab couvrir \u00bb. Le mot kufrihim designe leur rejet/couverture de la verite.

**dis** — Le sens retenu est \u00ab dire \u00bb. L'imperatif s'adresse au Prophete Muhammad.

**miserable** — Le sens retenu est \u00ab malheur \u00bb. Le mot bi'sama exprime le blame et la condamnation.

**ordonne** — Le sens retenu est \u00ab commander \u00bb. Le verbe ya'murukum designe ce que leur « foi » leur ordonne.

**votre foi** — Le sens retenu est \u00ab croire \u00bb. Le mot imanukum est utilise ironiquement — leur foi pretentieuse les pousse a faire le mal.

**vous etiez** — Le sens retenu est \u00ab etre \u00bb. Le verbe kuntum introduit la condition.

**croyants** — Le sens retenu est \u00ab croyant \u00bb. La condition finale est un defi rhetorique.

§CRITIQUE§
**sami'na wa-'asayna** — La formule « nous avons entendu et nous desobeissons » est une inversion deliberee de la formule correcte sami'na wa-ata'na (nous avons entendu et nous obeissons) qui apparait en 2:285. L'inversion montre que les enfants d'Israel entendent l'ordre mais choisissent sciemment de desobeir.
**ushribuu fi qulubihim al-'ijl** — L'image de « faire boire le veau dans leurs coeurs » est puissante — l'amour du veau a penetre si profondement qu'il a impregne leurs coeurs comme une boisson imbibe le corps. Le passif (ushribuu) montre que c'est un chatiment, pas un choix — leur rejet (kufr) a provoque cette impregation.
**bi'sama ya'murukum bihi imanukum** — L'ironie mordante du verset — votre « foi » vous ordonne de tuer les prophetes, d'adorer le veau et de rejeter la verite. Ce n'est pas la vraie foi qui ordonne cela — c'est la fausse foi qu'ils pretendent avoir.`,
    segments: [
      { fr: "et quand", phon: "wa-idh", arabic: "\u0648\u064E\u0625\u0650\u0630\u0652", is_particle: true, position: 0 },
      { fr: "Nous primes", pos: "verbe", phon: "akhadhna", arabic: "\u0623\u064E\u062E\u064E\u0630\u0652\u0646\u064E\u0627", word_key: "akhz", is_particle: false, sense_retenu: "prendre", position: 1 },
      { fr: "votre pacte", pos: "nom", phon: "mithaqakum", arabic: "\u0645\u0650\u064A\u062B\u064E\u0670\u0642\u064E\u0643\u064F\u0645\u0652", word_key: "wthq", is_particle: false, sense_retenu: "pacte", position: 2 },
      { fr: "et elevames", pos: "verbe", phon: "rafa'na", arabic: "\u0648\u064E\u0631\u064E\u0641\u064E\u0639\u0652\u0646\u064E\u0627", word_key: "rfe", is_particle: false, sense_retenu: "lever", position: 3 },
      { fr: "au-dessus de vous", pos: "nom", phon: "fawqakum", arabic: "\u0641\u064E\u0648\u0652\u0642\u064E\u0643\u064F\u0645\u064F", word_key: "fwq", is_particle: false, sense_retenu: "au-dessus", position: 4 },
      { fr: "le mont", pos: "nom", phon: "al-tura", arabic: "\u0671\u0644\u0637\u0651\u064F\u0648\u0631\u064E", word_key: "twr", is_particle: false, sense_retenu: "mont", position: 5 },
      { fr: "prenez", pos: "verbe", phon: "khudhuu", arabic: "\u062E\u064F\u0630\u064F\u0648\u0627\u06E1", word_key: "akhz", is_particle: false, sense_retenu: "prendre", position: 6 },
      { fr: "ce que", phon: "ma", arabic: "\u0645\u064E\u0622", is_particle: true, position: 7 },
      { fr: "Nous vous avons donne", pos: "verbe", phon: "ataynakum", arabic: "\u0621\u064E\u0627\u062A\u064E\u064A\u0652\u0646\u064E\u0670\u0643\u064F\u0645", word_key: "aty", is_particle: false, sense_retenu: "donner", position: 8 },
      { fr: "avec force", pos: "nom", phon: "bi-quwwatin", arabic: "\u0628\u0650\u0642\u064F\u0648\u0651\u064E\u0629\u064D", word_key: "qwy", is_particle: false, sense_retenu: "etre fort", position: 9 },
      { fr: "et ecoutez", pos: "verbe", phon: "isma'uu", arabic: "\u0648\u064E\u0671\u0633\u0652\u0645\u064E\u0639\u064F\u0648\u0627\u06E1", word_key: "sme", is_particle: false, sense_retenu: "ecouter", position: 10 },
      { fr: "ils dirent", pos: "verbe", phon: "qaluu", arabic: "\u0642\u064E\u0627\u0644\u064F\u0648\u0627\u06E1", word_key: "qwl", is_particle: false, sense_retenu: "dire", position: 11 },
      { fr: "nous avons entendu", pos: "verbe", phon: "sami'na", arabic: "\u0633\u064E\u0645\u0650\u0639\u0652\u0646\u064E\u0627", word_key: "sme", is_particle: false, sense_retenu: "entendre", position: 12 },
      { fr: "et nous desobeissons", pos: "verbe", phon: "'asayna", arabic: "\u0648\u064E\u0639\u064E\u0635\u064E\u064A\u0652\u0646\u064E\u0627", word_key: "esy", is_particle: false, sense_retenu: "desobeir", position: 13 },
      { fr: "et on fit boire", phon: "wa-ushribuu", arabic: "\u0648\u064E\u0623\u064F\u0634\u0652\u0631\u0650\u0628\u064F\u0648\u0627\u06E1", is_particle: true, position: 14 },
      { fr: "dans", phon: "fi", arabic: "\u0641\u0650\u064A", is_particle: true, position: 15 },
      { fr: "leurs coeurs", pos: "nom", phon: "qulubihim", arabic: "\u0642\u064F\u0644\u064F\u0648\u0628\u0650\u0647\u0650\u0645\u064F", word_key: "qlb", is_particle: false, sense_retenu: "coeur", position: 16 },
      { fr: "le veau", pos: "nom", phon: "al-'ijla", arabic: "\u0671\u0644\u0652\u0639\u0650\u062C\u0652\u0644\u064E", word_key: "ejl", is_particle: false, sense_retenu: "veau", position: 17 },
      { fr: "a cause de leur rejet", pos: "nom", phon: "bi-kufrihim", arabic: "\u0628\u0650\u0643\u064F\u0641\u0652\u0631\u0650\u0647\u0650\u0645\u0652", word_key: "kfr", is_particle: false, sense_retenu: "couvrir", position: 18 },
      { fr: "dis", pos: "verbe", phon: "qul", arabic: "\u0642\u064F\u0644\u0652", word_key: "qwl", is_particle: false, sense_retenu: "dire", position: 19 },
      { fr: "miserable ce que", pos: "nom", phon: "bi'sama", arabic: "\u0628\u0650\u0626\u0652\u0633\u064E\u0645\u064E\u0627", word_key: "bas", is_particle: false, sense_retenu: "malheur", position: 20 },
      { fr: "vous ordonne", pos: "verbe", phon: "ya'murukum", arabic: "\u064A\u064E\u0623\u0652\u0645\u064F\u0631\u064F\u0643\u064F\u0645", word_key: "amr", is_particle: false, sense_retenu: "commander", position: 21 },
      { fr: "par cela", phon: "bihi", arabic: "\u0628\u0650\u0647\u0650.\u06D3", is_particle: true, position: 22 },
      { fr: "votre foi", pos: "nom", phon: "imanukum", arabic: "\u0625\u0650\u064A\u0645\u064E\u0670\u0646\u064F\u0643\u064F\u0645\u0652", word_key: "amn", is_particle: false, sense_retenu: "croire", position: 23 },
      { fr: "si", phon: "in", arabic: "\u0625\u0650\u0646", is_particle: true, position: 24 },
      { fr: "vous etiez", pos: "verbe", phon: "kuntum", arabic: "\u0643\u064F\u0646\u062A\u064F\u0645", word_key: "knw", is_particle: false, sense_retenu: "etre", position: 25 },
      { fr: "croyants", pos: "nom", phon: "mu'minina", arabic: "\u0645\u0651\u064F\u0624\u0652\u0645\u0650\u0646\u0650\u064A\u0646\u064E", word_key: "amn", is_particle: false, sense_retenu: "croyant", position: 26 }
    ],
    words: [
      {
        word_key: "akhz", position: 1, sense_chosen: "prendre",
        analysis_axes: {
          concept_chosen: "Prise/Saisie",
          concepts: {
            "Prise/Saisie": {
              status: "retenu",
              senses: ["prendre", "saisir", "adopter"],
              proof_ctx: "Le verbe akhadhna est un accompli 1P de la racine a-kh-dh. Le Lane's donne \u00ab We took, We seized, We contracted \u00bb. La prise divine du pacte est un acte solennel — Dieu saisit l'engagement des enfants d'Israel. La forme I est directe — prendre sans intermediaire.",
              axe1_verset: "Le verbe akhadhna ouvre le corps du verset — Nous primes votre pacte. La prise du pacte par Dieu est un acte d'autorite — Dieu prend l'engagement de Son peuple. Le meme verbe akhz apparait trois fois dans le verset — akhadhna (Nous primes le pacte), khudhuu (prenez la revelation). La prise divine (pacte) contraste avec la prise humaine (le veau au verset 92).",
              axe2_voisins: "Le verset 63 rapportait la meme scene — « Nous primes votre pacte et elevames au-dessus de vous le mont ». Ce verset 93 reprend la scene avec la reponse des enfants d'Israel — « nous avons entendu et nous desobeissons ». Le verset 92 utilisait ittakhadhtum (vous avez pris le veau) — la prise humaine s'oppose a la prise divine.",
              axe3_sourate: "La racine a-kh-dh dans la sourate al-Baqarah couvre la prise sous toutes ses formes. En 2:63, la prise du pacte. En 2:51, la prise du veau. En 2:255, « ni sommeil ni assoupissement ne Le prennent ». La sourate oppose la prise divine (pacte, engagement) a la prise humaine deviante (veau, idole).",
              axe4_coherence: "La racine a-kh-dh apparait plus de 270 fois dans le Coran. La prise du pacte (akhz al-mithaq) est un motif recurrent — en 3:81, 5:12, 7:169. Dieu prend les pactes des prophetes et des peuples. La prise divine engage la responsabilite de celui qui la recoit.",
              axe5_frequence: "Pour la mission du khalifa, la prise du pacte est le fondement de l'engagement. Le khalifa a pris un engagement avec Dieu — la revelation recue avec force. La prise divine est irrevocable — le pacte lie les enfants d'Israel meme quand ils le violent."
            }
          }
        }
      },
      {
        word_key: "wthq", position: 2, sense_chosen: "pacte",
        analysis_axes: {
          concept_chosen: "Fermet\u00e9/Confiance",
          concepts: {
            "Fermet\u00e9/Confiance": {
              status: "retenu",
              senses: ["lier solidement", "\u00eatre solide", "avoir confiance", "pacte", "se garantir", "\u00eatre ferme"],
              proof_ctx: "Le mot mithaqakum est un nom masculin singulier de la racine w-th-q avec pronom 2MP. Le Lane's donne \u00ab your covenant, your solemn compact, your firm pledge \u00bb. Le mithaq est un pacte solennel — un lien solide qui engage les deux parties. La racine w-th-q porte l'idee de fermete et de solidite.",
              axe1_verset: "Le mot mithaqakum est le complement d'akhadhna — Nous primes votre pacte. Le pacte est l'engagement solennel des enfants d'Israel envers Dieu. Le pronom 2MP (votre) rend le pacte personnel — c'est leur pacte, leur engagement. Le verset montre que malgre la solennite du pacte (mithaq + elevation du mont), ils ont desobei.",
              axe2_voisins: "Le verset 63 utilisait deja mithaqakum dans la meme scene. Le verset 83 mentionnait le mithaq des enfants d'Israel avec ses commandements specifiques. Ce verset 93 rappelle le pacte pour souligner la gravite de la desobeissance « nous avons entendu et nous desobeissons ».",
              axe3_sourate: "La racine w-th-q dans la sourate al-Baqarah traite exclusivement du pacte divin. Les versets 63, 83, 84 et 93 mentionnent le mithaq des enfants d'Israel. La sourate montre que le pacte a ete pris solennellement mais viole systematiquement.",
              axe4_coherence: "La racine w-th-q apparait environ 30 fois dans le Coran. Le mithaq est le pacte solennel que Dieu prend des peuples, des prophetes et des croyants. En 3:81, Dieu prend le mithaq des prophetes. En 5:7, « rappelez-vous le bienfait de Dieu sur vous et Son pacte qu'Il a contracte avec vous ». Le pacte engage irrevocablement.",
              axe5_frequence: "Pour la mission du khalifa, le pacte est l'engagement fondamental. Le khalifa est lie par le mithaq — son engagement envers Dieu est ferme et irrevocable. Violer le pacte c'est trahir la mission."
            }
          }
        }
      },
      {
        word_key: "rfe", position: 3, sense_chosen: "lever",
        analysis_axes: {
          concept_chosen: "\u00c9l\u00e9vation/Exaltation",
          concepts: {
            "\u00c9l\u00e9vation/Exaltation": {
              status: "retenu",
              senses: ["lever", "\u00e9lever", "hausser", "exalter"],
              proof_ctx: "Le verbe rafa'na est un accompli 1P de la racine r-f-'. Le Lane's donne \u00ab We raised, We elevated, We lifted up \u00bb. Le verbe designe l'elevation physique du mont au-dessus des enfants d'Israel. L'acte divin d'elevation est une demonstration de puissance destinee a impressionner et a obtenir l'engagement.",
              axe1_verset: "Le verbe rafa'na decrit l'elevation du mont Sinai au-dessus des enfants d'Israel. L'acte physique d'elevation cree une pression — le mont suspendu au-dessus d'eux est une incitation puissante a respecter le pacte. Malgre cette demonstration de puissance, ils ont dit « nous desobeissons ». L'elevation du mont rend la desobeissance encore plus grave.",
              axe2_voisins: "Le verset 63 rapportait la meme scene. Ce verset 93 ajoute la reponse des enfants d'Israel absente du verset 63. Le verset 92 rappelait les preuves claires de Moise. L'elevation du mont est la preuve ultime — apres les preuves intellectuelles, la preuve physique.",
              axe3_sourate: "La racine r-f-' dans la sourate al-Baqarah traite de l'elevation. En 2:127, Abraham eleve les fondations de la Maison. En 2:253, « Nous avons eleve certains au-dessus des autres en degres ». L'elevation est un acte divin de distinction et de puissance.",
              axe4_coherence: "La racine r-f-' apparait environ 28 fois dans le Coran. Dieu eleve ce qu'Il veut — le ciel sans piliers, le mont au-dessus des enfants d'Israel, Jesus vers Lui. L'elevation est un signe de puissance divine. En 4:158, « Dieu l'a eleve vers Lui ».",
              axe5_frequence: "Pour la mission du khalifa, l'elevation est un signe de la puissance divine. Le khalifa reconnait la puissance de Dieu et s'y soumet. Les enfants d'Israel qui desobeissent malgre l'elevation du mont montrent le comble de l'obstination."
            }
          }
        }
      },
      {
        word_key: "fwq", position: 4, sense_chosen: "au-dessus",
        analysis_axes: {
          concept_chosen: "Sup\u00e9riorit\u00e9/Dessus",
          concepts: {
            "Sup\u00e9riorit\u00e9/Dessus": {
              status: "retenu",
              senses: ["au-dessus", "surpasser", "exceller"],
              proof_ctx: "Le mot fawqakum est un nom de la racine f-w-q avec pronom 2MP. Le Lane's donne \u00ab above you, over you \u00bb. Le mot designe la position du mont Sinai au-dessus des enfants d'Israel. La superiorite spatiale symbolise la domination divine — le mont suspendu au-dessus d'eux est un rappel de la puissance de Dieu.",
              axe1_verset: "Le mot fawqakum precise la position du mont — au-dessus d'eux. La position « au-dessus » est mena\u00e7ante — le mont suspendu au-dessus est une incitation physique a l'obeissance. Le pronom 2MP (au-dessus de vous) rend la menace personnelle — chacun d'eux est sous le mont. La position fawq est la position de domination dans le Coran.",
              axe2_voisins: "Le verset 63 utilisait la meme expression fawqakum al-tura. Ce verset 93 reprend la scene pour l'enrichir de la reponse desobeissante. Le verset 92 montrait les preuves claires — le mont au-dessus est la preuve physique ultime.",
              axe3_sourate: "La racine f-w-q dans la sourate al-Baqarah traite de la superiorite. En 2:212, « ceux qui ont la conscience de Dieu seront au-dessus d'eux ». En 2:228, « les hommes ont un degre au-dessus d'elles ». La position fawq est la position de superiorite et d'autorite.",
              axe4_coherence: "La racine f-w-q apparait environ 45 fois dans le Coran. Le mot fawqa designe la superiorite spatiale, hierarchique ou morale. En 16:50, « ils craignent leur Seigneur au-dessus d'eux ». La position au-dessus est celle de l'autorite divine.",
              axe5_frequence: "Pour la mission du khalifa, reconnaitre ce qui est au-dessus est l'humilite. Le khalifa sait que Dieu est au-dessus de tout. Les enfants d'Israel qui desobeissent malgre le mont au-dessus d'eux montrent le refus de reconnaitre l'autorite superieure."
            }
          }
        }
      },
      {
        word_key: "twr", position: 5, sense_chosen: "mont",
        analysis_axes: {
          concept_chosen: "Montagne/R\u00e9v\u00e9lation",
          concepts: {
            "Montagne/R\u00e9v\u00e9lation": {
              status: "retenu",
              senses: ["mont", "montagne"],
              proof_ctx: "Le mot al-tura est un nom masculin singulier defini accusatif de la racine t-w-r. Le Lane's donne \u00ab the mount, the mountain — specifically Mount Sinai \u00bb. Le mont Sinai (al-Tur) est le lieu sacre ou Moise recut la Torah. Le nom defini al- renvoie au mont connu — le mont Sinai.",
              axe1_verset: "Le mot al-tura est le complement de rafa'na — Nous elevames le mont. Le mont Sinai est l'instrument de la pression divine — eleve au-dessus des enfants d'Israel pour les inciter a respecter le pacte. Le mont est le lieu de la revelation et le temoin du pacte. La montagne physique symbolise le poids de l'engagement.",
              axe2_voisins: "Le verset 63 mentionnait deja le mont. Ce verset 93 le rappelle dans le contexte de la desobeissance. Le mont est le temoin silencieux de la trahison du pacte — il a ete eleve au-dessus d'eux et ils ont quand meme desobei.",
              axe3_sourate: "La racine t-w-r dans la sourate al-Baqarah designe exclusivement le mont Sinai. En 2:63 et 2:93, le mont est eleve au-dessus des enfants d'Israel. Le mont est le lieu de la rencontre entre Dieu et Moise — le lieu sacre de la revelation de la Torah.",
              axe4_coherence: "La racine t-w-r apparait 10 fois dans le Coran. Le mont Sinai est mentionne dans les sourates 2, 4, 7, 19, 23, 28, 52 et 95. En 52:1, « Par le mont (al-Tur) ! ». Le mont est un lieu sacre lie a la revelation et a la prophetie.",
              axe5_frequence: "Pour la mission du khalifa, le mont est le lieu de la revelation. Le khalifa respecte les lieux sacres et les engagements pris en ces lieux. L'elevation du mont au-dessus des enfants d'Israel montre le poids de l'engagement pris au lieu de la revelation."
            },
            "Phase/D\u00e9veloppement": {
              status: "nul",
              senses: ["\u00e9tape"],
              proof_ctx: "Le sens de phase/etape est un autre aspect de t-w-r. Ici al-tura est un nom propre defini designant le mont Sinai, pas une etape dans un processus."
            }
          }
        }
      },
      {
        word_key: "aty", position: 8, sense_chosen: "donner",
        analysis_axes: {
          concept_chosen: "Venue/Arriv\u00e9e",
          concepts: {
            "Venue/Arriv\u00e9e": {
              status: "retenu",
              senses: ["arriver", "venir", "apporter", "donner", "commettre"],
              proof_ctx: "Le verbe ataynakum est un accompli 1P forme IV de la racine a-t-y avec pronom 2MP. Le Lane's donne \u00ab We gave you, We brought to you \u00bb. La forme IV (if'al) est causative — faire arriver, donner. Dieu donne la revelation aux enfants d'Israel. Le verbe ata au sens de « donner » est frequent dans le Coran.",
              axe1_verset: "Le verbe ataynakum est dans l'ordre divin — « prenez ce que Nous vous avons donne avec force ». Le don divin (la Torah) doit etre pris avec force et determination. Le verbe etablit la relation de don — Dieu donne, les enfants d'Israel recoivent. Le complement « avec force » (bi-quwwatin) montre que la reception doit etre active, pas passive.",
              axe2_voisins: "Le verset 63 utilisait la meme formule. Le verset 87 mentionnait les dons divins aux enfants d'Israel. Le verset 92 rappelait les preuves claires. La sequence don/rejet est le theme central de ce passage.",
              axe3_sourate: "La racine a-t-y dans la sourate al-Baqarah couvre la venue et le don. En 2:87, « Nous donnames a Moise le Livre ». En 2:136, « ce qui a ete donne a Moise et Jesus ». La sourate montre que Dieu donne la revelation a tous les peuples.",
              axe4_coherence: "La racine a-t-y apparait plus de 550 fois dans le Coran. Le verbe ata forme IV (donner) est l'un des verbes les plus frequents. En 2:269, « Il donne la sagesse a qui Il veut ». Le don divin engage la responsabilite du receveur.",
              axe5_frequence: "Pour la mission du khalifa, le don divin est la revelation a recevoir avec force. Le khalifa prend fermement ce que Dieu lui a donne. Les enfants d'Israel qui recoivent le don avec desobeissance trahissent le don."
            }
          }
        }
      },
      {
        word_key: "qwy", position: 9, sense_chosen: "etre fort",
        analysis_axes: {
          concept_chosen: "Force/Puissance",
          concepts: {
            "Force/Puissance": {
              status: "retenu",
              senses: ["\u00eatre fort", "puissance"],
              proof_ctx: "Le mot quwwatin est un nom feminin singulier indefini genitif de la racine q-w-y. Le Lane's donne \u00ab strength, power, force, might \u00bb. La force ici n'est pas physique mais morale — prendre la revelation avec determination et resolution. La preposition bi (avec) indique la maniere — prenez avec force.",
              axe1_verset: "Le mot quwwatin qualifie la maniere de prendre la revelation — avec force. L'ordre khudhuu ma ataynakum bi-quwwatin (prenez ce que Nous vous avons donne avec force) exige une reception active et determinee. La force s'oppose a la mollesse — la revelation ne doit pas etre prise avec legerete.",
              axe2_voisins: "Le verset 63 utilisait la meme expression bi-quwwatin. Le verset 92 rappelait les preuves claires. La force demandee contraste avec la faiblesse de la reponse — au lieu de prendre avec force, ils disent « nous desobeissons ».",
              axe3_sourate: "La racine q-w-y dans la sourate al-Baqarah traite de la force et de la puissance. En 2:165, « la force appartient a Dieu tout entiere ». En 2:206, « Dieu est severe en chatiment ». La force est un attribut divin que les hommes doivent mobiliser dans l'obeissance.",
              axe4_coherence: "La racine q-w-y apparait environ 42 fois dans le Coran. La force (quwwa) est demandee aux croyants — en 8:60, « preparez contre eux ce que vous pouvez de force ». La force dans la reception de la revelation est la determination a appliquer les commandements.",
              axe5_frequence: "Pour la mission du khalifa, la force est la qualite de celui qui agit avec determination. Le khalifa prend la revelation avec force — sans mollesse ni tergiversation. La force demandee est la resolution interieure, pas la contrainte physique."
            }
          }
        }
      },
      {
        word_key: "sme", position: 10, sense_chosen: "ecouter",
        analysis_axes: {
          concept_chosen: "Audition/\u00c9coute",
          concepts: {
            "Audition/\u00c9coute": {
              status: "retenu",
              senses: ["entendre", "ob\u00e9ir", "\u00e9couter", "ou\u00efe", "exaucer"],
              proof_ctx: "Le verbe isma'uu est un imperatif 2MP de la racine s-m-'. Le Lane's donne \u00ab hear, listen, obey \u00bb. L'imperatif ordonne l'ecoute — mais en arabe isma'uu implique l'obeissance, pas seulement l'audition physique. Ecouter c'est obeir — la distinction est fondamentale pour comprendre la reponse des enfants d'Israel.",
              axe1_verset: "Le verbe isma'uu est le dernier element de l'ordre divin — prenez avec force et ecoutez. L'ecoute est l'aboutissement — apres la prise, l'ecoute obeis-sante. La reponse sami'na wa-'asayna (nous avons entendu et nous desobeissons) est l'inversion exacte de l'ordre. Ils ont entendu physiquement (sami'na) mais refuse d'obeir ('asayna).",
              axe2_voisins: "Le verset 63 contenait le meme ordre « ecoutez ». Ce verset 93 ajoute la reponse — l'inversion de l'ordre. Le verset 285 donnera la reponse correcte — sami'na wa-ata'na (nous avons entendu et nous obeissons). L'opposition entre les deux reponses structure toute la sourate.",
              axe3_sourate: "La racine s-m-' dans la sourate al-Baqarah couvre l'audition et l'obeissance. En 2:181, « celui qui le modifie apres l'avoir entendu ». En 2:256, « Dieu est Entendant, Sachant ». La sourate montre que l'ecoute doit mener a l'obeissance — entendre sans obeir est une forme de surdite morale.",
              axe4_coherence: "La racine s-m-' apparait plus de 180 fois dans le Coran. L'ecoute dans le Coran implique l'obeissance. En 8:20, « ne soyez pas comme ceux qui disent nous avons entendu et ils n'entendent pas ». L'ecoute veritable est celle qui mene a l'action.",
              axe5_frequence: "Pour la mission du khalifa, l'ecoute est l'obeissance. Le khalifa ecoute la revelation et agit en consequence. Les enfants d'Israel qui disent « nous avons entendu et nous desobeissons » montrent l'echec de l'ecoute sans obeissance."
            }
          }
        }
      },
      {
        word_key: "esy", position: 13, sense_chosen: "desobeir",
        analysis_axes: {
          concept_chosen: "R\u00e9bellion/P\u00e9ch\u00e9",
          concepts: {
            "R\u00e9bellion/P\u00e9ch\u00e9": {
              status: "retenu",
              senses: ["d\u00e9sob\u00e9ir", "se rebeller", "p\u00e9cher"],
              proof_ctx: "Le verbe 'asayna est un accompli 1P de la racine '-s-y. Le Lane's donne \u00ab we disobeyed, we rebelled, we transgressed \u00bb. La desobeissance est l'acte de refuser de se soumettre a l'autorite divine. Le verbe est a la 1P — les enfants d'Israel assument leur desobeissance.",
              axe1_verset: "Le verbe 'asayna est la seconde partie de la reponse — « nous avons entendu et nous desobeissons ». La formule sami'na wa-'asayna est une provocation deliberee — ils affirment avoir entendu l'ordre mais choisissent sciemment de desobeir. Le wa-adversatif oppose l'ecoute a la desobeissance. La rebellion est ouverte et assumee.",
              axe2_voisins: "Le verset 91 montrait le rejet selectif de la revelation. Ce verset 93 montre la desobeissance ouverte. Le verset 92 rappelait l'adoration du veau. La desobeissance est le fil rouge de ce passage — rejet, idolatrie, rebellion.",
              axe3_sourate: "La racine '-s-y dans la sourate al-Baqarah traite de la desobeissance. En 2:61, « ils etaient desobeissants ». En 2:35, l'avertissement a Adam — ne desobeissez pas. La sourate montre que la desobeissance est le choix humain par excellence — d'Adam aux enfants d'Israel.",
              axe4_coherence: "La racine '-s-y apparait environ 35 fois dans le Coran. La desobeissance ('isyan) est l'oppose de l'obeissance (ta'a). En 20:121, « Adam desobeit a son Seigneur et s'egara ». La desobeissance rompt le lien entre le createur et la creature.",
              axe5_frequence: "Pour la mission du khalifa, la desobeissance est la trahison de la mission. Le khalifa obeit a Dieu — la desobeissance deliberee (sami'na wa-'asayna) est l'antithese de sa mission."
            }
          }
        }
      },
      {
        word_key: "qlb", position: 16, sense_chosen: "coeur",
        analysis_axes: {
          concept_chosen: "Coeur/Centre",
          concepts: {
            "Coeur/Centre": {
              status: "retenu",
              senses: ["esprit", "coeur", "intelligence", "milieu"],
              proof_ctx: "Le mot qulubihim est un nom pluriel de la racine q-l-b avec pronom 3MP. Le Lane's donne \u00ab their hearts, the seats of their understanding and will \u00bb. Le coeur (qalb) dans le Coran est le siege de la comprehension, de la foi et de la volonte — pas simplement l'organe physique.",
              axe1_verset: "Le mot qulubihim est le lieu de l'impregation du veau — on fit boire a leurs coeurs le veau. L'image est puissante : l'amour du veau a penetre leurs coeurs comme une boisson impregne le corps. Le coeur est le siege de la foi — quand le veau l'occupe, la foi n'a plus de place. Le passif ushribuu montre que c'est un chatiment divin.",
              axe2_voisins: "Le verset 74 decrivait des coeurs plus durs que la pierre. Ce verset 93 decrit des coeurs impregnes du veau. Le verset 88 mentionnait les coeurs enveloppes. Dans ce passage, les coeurs des enfants d'Israel sont systematiquement decrits comme corrompus.",
              axe3_sourate: "La racine q-l-b dans la sourate al-Baqarah traite du coeur comme siege de la foi. En 2:10, « dans leurs coeurs il y a une maladie ». En 2:74, « vos coeurs se sont endurcis ». En 2:97, le Coran est descendu sur le coeur du Prophete. La sourate oppose les coeurs sains aux coeurs corrompus.",
              axe4_coherence: "La racine q-l-b apparait environ 168 fois dans le Coran. Le coeur (qalb) est le centre de la personne — ce qui determine la foi ou la mecreance. En 26:89, « sauf celui qui vient a Dieu avec un coeur sain ». Le coeur impregne du veau est le contraire du coeur sain.",
              axe5_frequence: "Pour la mission du khalifa, le coeur est le siege de la mission. Le khalifa a un coeur sain (qalb salim) oriente vers Dieu. Un coeur impregne du veau est un coeur detourne de sa mission originelle."
            },
            "Retournement/Changement": {
              status: "probable",
              senses: ["retourner", "renverser", "revenir", "transformer", "changer d'\u00e9tat"],
              proof_ctx: "Le sens de retournement est le sens premier de q-l-b. Le coeur est appele qalb parce qu'il se retourne — il change d'etat, oscille entre la foi et le doute. Les coeurs des enfants d'Israel se sont retournes — de la foi vers l'idolatrie."
            }
          }
        }
      },
      {
        word_key: "bas", position: 20, sense_chosen: "malheur",
        analysis_axes: {
          concept_chosen: "Puissance/Malheur",
          concepts: {
            "Puissance/Malheur": {
              status: "retenu",
              senses: ["force", "malheur", "ch\u00e2timent"],
              proof_ctx: "Le mot bi'sama est une expression de blame composee de bi'sa (quel miserable) et ma (ce que). Le Lane's donne \u00ab evil is that which, wretched is what \u00bb. L'expression condamne fermement — elle exprime le blame divin. La racine b-'-s porte l'idee de malheur et de severite.",
              axe1_verset: "Le mot bi'sama introduit la condamnation finale — « quelle miserable chose vous ordonne votre foi ». L'ironie est mordante — leur « foi » (iman) les pousse a desobeir, a adorer le veau, a tuer les prophetes. Le blame (bi'sama) porte sur les consequences de leur fausse foi. L'expression est un jugement divin sans appel.",
              axe2_voisins: "Le verset 90 utilisait bi'sama (miserable est ce) pour condamner leur rejet. Ce verset 93 reitere la condamnation dans le contexte de la desobeissance. Le verset 102 utilisera une formule similaire. La condamnation bi'sama est un refrain de ce passage.",
              axe3_sourate: "La racine b-'-s dans la sourate al-Baqarah traite du blame et du chatiment. En 2:90, bi'sama — miserable est ce pour quoi ils se sont vendus. La sourate utilise cette expression pour marquer les moments de condamnation les plus forts.",
              axe4_coherence: "La racine b-'-s apparait environ 30 fois dans le Coran. L'expression bi'sa/bi'sama est utilisee pour le blame intense — en 3:187, bi'sama yasshtaruuna (miserable est ce qu'ils achetent). Le blame divin est sans appel et definitif.",
              axe5_frequence: "Pour la mission du khalifa, le blame divin est un avertissement. Le khalifa evite les actes qui meritent le blame bi'sama. La condamnation de la fausse foi est un rappel a la sincerite."
            }
          }
        }
      },
      {
        word_key: "amr", position: 21, sense_chosen: "commander",
        analysis_axes: {
          concept_chosen: "Commandement/Autorit\u00e9",
          concepts: {
            "Commandement/Autorit\u00e9": {
              status: "retenu",
              senses: ["commander", "nommer gouverneur", "ordonner"],
              proof_ctx: "Le verbe ya'murukum est un inaccompli 3MS de la racine a-m-r avec pronom 2MP. Le Lane's donne \u00ab it commands you, it orders you \u00bb. Le sujet du verbe est imanukum (votre foi) — c'est ironiquement leur « foi » qui leur ordonne. L'inaccompli indique une action continue.",
              axe1_verset: "Le verbe ya'murukum est utilise ironiquement — leur « foi » (imanukum) leur ordonne le mal. Normalement la foi ordonne le bien — ici leur fausse foi ordonne l'idolatrie, le meurtre des prophetes, la desobeissance. Le retournement est sarcastique — bi'sama ya'murukum bihi imanukum (quelle miserable chose vous ordonne votre foi).",
              axe2_voisins: "Le verset 67 utilisait ya'murukum pour le commandement divin (Dieu vous ordonne). Ce verset 93 retourne l'expression — votre « foi » vous ordonne. Le contraste entre le commandement divin (positif) et le commandement de la fausse foi (negatif) est frappant.",
              axe3_sourate: "La racine a-m-r dans la sourate al-Baqarah traite du commandement sous toutes ses formes. En 2:67, Dieu ordonne le sacrifice. En 2:93, la fausse foi « ordonne » le mal. La sourate montre que le commandement peut venir de Dieu (vrai amr) ou de la passion (faux amr).",
              axe4_coherence: "La racine a-m-r apparait 248 fois dans le Coran. Le commandement divin est toujours bon. Quand le commandement vient d'autre chose que Dieu — la passion, la fausse foi — il mene au mal. En 12:53, « l'ame ordonne le mal ». L'ironie de ya'murukum imanukum suit le meme schema.",
              axe5_frequence: "Pour la mission du khalifa, le commandement vient de Dieu seul. Le khalifa n'obeit qu'au commandement divin. La fausse foi qui « ordonne » le mal est une usurpation de l'autorite divine."
            }
          }
        }
      }
    ]
  },

  // =====================================================
  // VERSET 2:94
  // verse_id=101, analysis_id=460
  // "Dis : Si la demeure de l'au-dela aupres de Dieu est
  //  exclusivement pour vous, a l'exclusion des gens, alors
  //  souhaitez la mort si vous etes veridiques."
  // =====================================================
  94: {
    verse_id: 101,
    analysis_id: 460,
    translation_arab: "Dis : Si la demeure de l'au-dela aupres de Dieu est exclusivement pour vous, a l'exclusion des gens, alors souhaitez la mort si vous etes veridiques.",
    full_translation: "Dis : Si la demeure de l'au-dela aupres de Dieu est exclusivement pour vous, a l'exclusion de [tous les] gens, alors souhaitez la mort si vous etes veridiques.",
    translation_explanation: `§DEMARCHE§
Ce verset lance un defi aux enfants d'Israel qui pretendent que le Paradis leur est exclusivement reserve. Le verbe **qul** est un imperatif 2MS de la racine q-w-l. Le Lane's donne \u00ab say \u00bb. L'ordre s'adresse au Prophete Muhammad. Le verbe **kanat** est un accompli 3FS de la racine k-w-n. Le Lane's donne \u00ab if it were, if it is \u00bb. Le verbe auxiliaire introduit la condition. Le mot **al-daru** est un nom feminin singulier defini de la racine d-w-r. Le Lane's donne \u00ab the abode, the dwelling, the home \u00bb. La demeure designe le sejour permanent. Le mot **al-akhiratu** est un adjectif feminin singulier defini de la racine a-kh-r. Le Lane's donne \u00ab the Last, the Hereafter, the final \u00bb. L'au-dela est la derniere demeure. Le mot **'inda** est une preposition de la racine '-n-d. Le Lane's donne \u00ab with, at, near, in the presence of \u00bb. La proximite avec Dieu est le privilege revendique. Le mot **Allahi** est le nom propre au genitif de la racine a-l-h. Le Lane's donne \u00ab of God \u00bb. Le mot **khalisatan** est un participe actif feminin de la racine kh-l-s. Le Lane's donne \u00ab exclusively, purely, without admixture \u00bb. L'exclusivite est la pretention des enfants d'Israel. Le mot **duni** est un nom de la racine d-w-n. Le Lane's donne \u00ab other than, to the exclusion of, besides \u00bb. Le mot exclut tous les autres peuples. Le mot **al-nasi** est un nom masculin pluriel defini de la racine n-w-s. Le Lane's donne \u00ab the people, mankind \u00bb. Les gens sont tous les autres. Le verbe **tamannawu** est un imperatif 2MP forme V de la racine m-n-y. Le Lane's donne \u00ab wish for, desire, long for \u00bb. Le defi est de souhaiter la mort. Le mot **al-mawta** est un nom masculin singulier defini accusatif de la racine m-w-t. Le Lane's donne \u00ab death \u00bb. La mort est l'epreuve proposee. Le verbe **kuntum** est un accompli 2MP de la racine k-w-n. Le Lane's donne \u00ab you were \u00bb. Le mot **sadiqina** est un participe actif masculin pluriel de la racine s-d-q. Le Lane's donne \u00ab truthful, sincere, veracious \u00bb. Le defi final — prouvez votre sincerite.

§JUSTIFICATION§
**dis** — Le sens retenu est \u00ab dire \u00bb. L'imperatif qul s'adresse au Prophete.

**etait** — Le sens retenu est \u00ab etre \u00bb. Le verbe kanat introduit la condition.

**la demeure** — Le sens retenu est \u00ab demeure \u00bb. Le mot al-daru designe le sejour permanent. L'alternative \u00ab tourner \u00bb est ecartee car le nom defini designe un lieu, pas un mouvement.

**de l'au-dela** — Le sens retenu est \u00ab dernier \u00bb. Le mot al-akhiratu designe l'au-dela, la vie derniere. L'alternative \u00ab retarder \u00bb est ecartee car l'adjectif defini designe la derniere demeure.

**aupres de** — Le sens retenu est \u00ab aupres de \u00bb. Le mot 'inda situe la demeure dans la proximite de Dieu. L'alternative \u00ab selon \u00bb est ecartee car le contexte est spatial (aupres de Dieu), pas opinatif.

**Dieu** — Le sens retenu est \u00ab Dieu \u00bb. Le nom propre au genitif.

**exclusivement** — Le sens retenu est \u00ab etre pur \u00bb. Le mot khalisatan designe l'exclusivite — reserve exclusivement a eux. L'alternative \u00ab sauver \u00bb est ecartee car le participe feminin qualifie la demeure comme exclusive.

**a l'exclusion de** — Le sens retenu est \u00ab en dessous \u00bb. Le mot duni designe l'exclusion — a l'exclusion des autres gens. L'alternative \u00ab proche \u00bb est ecartee car le contexte est l'exclusion.

**les gens** — Le sens retenu est \u00ab etres humains \u00bb. Le mot al-nasi designe l'ensemble des gens. L'alternative \u00ab etre visible \u00bb est ecartee car le nom defini designe les humains.

**souhaitez** — Le sens retenu est \u00ab souhaiter \u00bb. Le verbe tamannawu forme V designe le souhait. L'alternative \u00ab sperme \u00bb est ecartee car le verbe a l'imperatif designe le desir.

**la mort** — Le sens retenu est \u00ab mort \u00bb. Le mot al-mawta designe la cessation de la vie. L'alternative \u00ab immobile \u00bb est ecartee car le nom defini designe la mort.

**vous etiez** — Le sens retenu est \u00ab etre \u00bb. Le verbe kuntum introduit la condition.

**veridiques** — Le sens retenu est \u00ab sinc\u00e8re \u00bb. Le mot sadiqina designe la veracite. L'alternative \u00ab aumone \u00bb est ecartee car le participe actif designe les veridiques.

§CRITIQUE§
**defi de la mort** — Le verset propose un defi simple : si le Paradis est exclusivement pour vous, alors la mort devrait etre un passage desirable. Le refus de souhaiter la mort expose la contradiction — ceux qui pretendent que le Paradis leur est reserve devraient accueillir la mort avec joie.
**khalisatan min duni al-nas** — La pretention d'exclusivite est totale — la demeure de l'au-dela serait pour eux seuls, a l'exclusion de tous les autres humains. Le defi expose l'absurdite de cette pretention.
**in kuntum sadiqina** — La formule finale change par rapport aux versets precedents — au lieu de mu'minina (croyants), le verset utilise sadiqina (veridiques). Le defi porte sur la sincerite de leur pretention, pas sur la foi.`,
    segments: [
      { fr: "dis", pos: "verbe", phon: "qul", arabic: "\u0642\u064F\u0644\u0652", word_key: "qwl", is_particle: false, sense_retenu: "dire", position: 0 },
      { fr: "si", phon: "in", arabic: "\u0625\u0650\u0646", is_particle: true, position: 1 },
      { fr: "etait", pos: "verbe", phon: "kanat", arabic: "\u0643\u064E\u0627\u0646\u064E\u062A\u0652", word_key: "knw", is_particle: false, sense_retenu: "etre", position: 2 },
      { fr: "pour vous", phon: "lakum", arabic: "\u0644\u064E\u0643\u064F\u0645\u064F", is_particle: true, position: 3 },
      { fr: "la demeure", pos: "nom", phon: "al-daru", arabic: "\u0671\u0644\u062F\u0651\u064E\u0627\u0631\u064F", word_key: "dwr", is_particle: false, sense_retenu: "demeure", position: 4 },
      { fr: "de l'au-dela", pos: "adjectif", phon: "al-akhiratu", arabic: "\u0671\u0644\u0652\u0621\u064E\u0627\u062E\u0650\u0631\u064E\u0629\u064F", word_key: "axr", is_particle: false, sense_retenu: "dernier", position: 5 },
      { fr: "aupres de", pos: "nom", phon: "'inda", arabic: "\u0639\u0650\u0646\u062F\u064E", word_key: "end", is_particle: false, sense_retenu: "aupres de", position: 6 },
      { fr: "Dieu", pos: "nom", phon: "Allahi", arabic: "\u0671\u0644\u0644\u0651\u064E\u0647\u0650", word_key: "alh", is_particle: false, sense_retenu: "Dieu", position: 7 },
      { fr: "exclusivement", pos: "nom", phon: "khalisatan", arabic: "\u062E\u064E\u0627\u0644\u0650\u0635\u064E\u0629\u064B", word_key: "khls", is_particle: false, sense_retenu: "etre pur", position: 8 },
      { fr: "de", phon: "min", arabic: "\u0645\u0650\u0651\u0646", is_particle: true, position: 9 },
      { fr: "a l'exclusion de", pos: "nom", phon: "duni", arabic: "\u062F\u064F\u0648\u0646\u0650", word_key: "dwn", is_particle: false, sense_retenu: "en dessous", position: 10 },
      { fr: "les gens", pos: "nom", phon: "al-nasi", arabic: "\u0671\u0644\u0646\u0651\u064E\u0627\u0633\u0650", word_key: "nws", is_particle: false, sense_retenu: "etres humains", position: 11 },
      { fr: "alors souhaitez", pos: "verbe", phon: "fa-tamannawu", arabic: "\u0641\u064E\u062A\u064E\u0645\u064E\u0646\u0651\u064E\u0648\u064F\u0627\u06E1", word_key: "mny", is_particle: false, sense_retenu: "souhaiter", position: 12 },
      { fr: "la mort", pos: "nom", phon: "al-mawta", arabic: "\u0671\u0644\u0652\u0645\u064E\u0648\u0652\u062A\u064E", word_key: "mwt", is_particle: false, sense_retenu: "mort", position: 13 },
      { fr: "si", phon: "in", arabic: "\u0625\u0650\u0646", is_particle: true, position: 14 },
      { fr: "vous etiez", pos: "verbe", phon: "kuntum", arabic: "\u0643\u064F\u0646\u062A\u064F\u0645\u0652", word_key: "knw", is_particle: false, sense_retenu: "etre", position: 15 },
      { fr: "veridiques", pos: "nom", phon: "sadiqina", arabic: "\u0635\u064E\u0670\u062F\u0650\u0642\u0650\u064A\u0646\u064E", word_key: "sdq", is_particle: false, sense_retenu: "sincere", position: 16 }
    ],
    words: [
      {
        word_key: "qwl", position: 0, sense_chosen: "dire",
        analysis_axes: {
          concept_chosen: "Parole/\u00c9nonciation",
          concepts: {
            "Parole/\u00c9nonciation": {
              status: "retenu",
              senses: ["parler", "parole", "discours", "dire", "affirmer"],
              proof_ctx: "Le verbe qul est un imperatif 2MS de la racine q-w-l. Le Lane's donne \u00ab say \u00bb. L'imperatif s'adresse au Prophete Muhammad — Dieu lui ordonne de lancer un defi aux enfants d'Israel. Le qul prophetique est un procede coranique frequent — Dieu parle par la bouche du Prophete.",
              axe1_verset: "Le verbe qul ouvre le verset par un ordre adresse au Prophete. L'imperatif divin qul introduit le defi — « dis : si la demeure de l'au-dela est pour vous... ». Le Prophete est le porte-parole de Dieu. Le defi est formule comme une condition logique — si A (le Paradis est pour vous), alors B (souhaitez la mort).",
              axe2_voisins: "Le verset 91 contenait qul (dis : pourquoi tuiez-vous les prophetes). Le verset 93 contenait qul (dis : miserable ce que votre foi vous ordonne). Ce verset 94 contient qul (dis : souhaitez la mort). Les trois qul forment une serie d'arguments contre les enfants d'Israel.",
              axe3_sourate: "La racine q-w-l structure la sourate al-Baqarah par les imperatifs qul. En 2:80, qul ittakhadhtum (avez-vous pris un pacte ?). En 2:111, qul hatuu (produisez votre preuve). La sourate utilise qul pour confronter les pretentions a la realite.",
              axe4_coherence: "La racine q-w-l apparait plus de 1700 fois dans le Coran. L'imperatif qul est le mot le plus frequent du Coran apres le nom Allah. Le qul prophetique est le mode de communication divine par excellence.",
              axe5_frequence: "Pour la mission du khalifa, la parole du Prophete est le modele. Le khalifa transmet le message divin comme le Prophete le faisait. La parole qul est la parole d'autorite divine transmise par l'intermediaire humain."
            }
          }
        }
      },
      {
        word_key: "knw", position: 2, sense_chosen: "etre",
        analysis_axes: {
          concept_chosen: "Existence/Devenir",
          concepts: {
            "Existence/Devenir": {
              status: "retenu",
              senses: ["\u00eatre", "devenir", "exister"],
              proof_ctx: "Le verbe kanat est un accompli 3FS de la racine k-w-n. Le Lane's donne \u00ab if it were, it was \u00bb. Le verbe auxiliaire kana au feminin s'accorde avec al-daru (la demeure). La condition in kanat (si elle etait) est hypothetique — elle prend leur pretention pour la tester.",
              axe1_verset: "Le verbe kanat introduit la condition — si la demeure de l'au-dela etait pour vous. Le ta' marbuta du feminin (kanat) s'accorde avec al-daru. La condition hypothetique prend leur pretention au serieux pour en tirer la consequence logique — si c'est vrai, souhaitez la mort.",
              axe2_voisins: "Le verset 91 utilisait kuntum mu'minina (si vous etiez croyants). Le verset 93 idem. Ce verset 94 utilise kanat pour une condition differente — non pas la foi mais la pretention d'exclusivite. Le passage multiplie les conditions hypothetiques pour tester les pretentions.",
              axe3_sourate: "Le verbe kana est omnipresent dans la sourate al-Baqarah. Il structure les conditions, les descriptions et les recits. La sourate utilise kana pour etablir les faits et tester les pretentions.",
              axe4_coherence: "La racine k-w-n apparait plus de 1300 fois dans le Coran. Le verbe kana est le verbe auxiliaire fondamental de l'arabe classique et coranique.",
              axe5_frequence: "Pour la mission du khalifa, l'etre est le fondement. Le khalifa est ce qu'il pretend etre — la condition in kanat teste la coherence entre la pretention et la realite."
            }
          }
        }
      },
      {
        word_key: "dwr", position: 4, sense_chosen: "demeure",
        analysis_axes: {
          concept_chosen: "Demeure",
          concepts: {
            "Demeure": {
              status: "retenu",
              senses: ["demeure", "maison"],
              proof_ctx: "Le mot al-daru est un nom feminin singulier defini nominatif de la racine d-w-r. Le Lane's donne \u00ab the abode, the dwelling, the permanent home \u00bb. La demeure (dar) designe le sejour permanent. Le nom defini al-daru associe a al-akhiratu designe la demeure de l'au-dela — le Paradis.",
              axe1_verset: "Le mot al-daru est le sujet de la condition — si la demeure de l'au-dela etait pour vous. La demeure de l'au-dela est le Paradis que les enfants d'Israel pretendent etre exclusivement pour eux. L'ajout de 'inda Allahi (aupres de Dieu) situe cette demeure dans la proximite divine.",
              axe2_voisins: "Le verset 91 parlait de la revelation que les enfants d'Israel rejettent. Ce verset 94 passe a la pretention d'exclusivite sur le Paradis. Le verset 95 revelera qu'ils ne souhaitent pas la mort, ce qui dement leur pretention. La demeure de l'au-dela est le point culminant de leur pretention.",
              axe3_sourate: "La racine d-w-r dans la sourate al-Baqarah designe la demeure. En 2:94 et 2:95, la demeure de l'au-dela est le sujet du defi. La sourate oppose la demeure terrestre a la demeure eternelle.",
              axe4_coherence: "La racine d-w-r apparait environ 50 fois dans le Coran. Le mot dar designe la demeure permanente — dar al-akhira (la demeure de l'au-dela), dar al-salam (la demeure de la paix). En 6:127, « la demeure de la paix aupres de leur Seigneur ». La demeure de l'au-dela est le sejour eternel.",
              axe5_frequence: "Pour la mission du khalifa, la demeure de l'au-dela est l'objectif ultime. Le khalifa vise la demeure eternelle par ses actes. Les enfants d'Israel qui pretendent y avoir droit exclusif refusent pourtant la mort qui y mene."
            }
          }
        }
      },
      {
        word_key: "axr", position: 5, sense_chosen: "dernier",
        analysis_axes: {
          concept_chosen: "Post\u00e9riorit\u00e9/Retard",
          concepts: {
            "Post\u00e9riorit\u00e9/Retard": {
              status: "retenu",
              senses: ["retarder", "reporter", "reculer", "apr\u00e8s", "dernier", "l'au-del\u00e0", "fin"],
              proof_ctx: "Le mot al-akhiratu est un adjectif feminin singulier defini de la racine a-kh-r. Le Lane's donne \u00ab the Last, the Hereafter, the final life \u00bb. L'au-dela (al-akhira) est la vie derniere — ce qui vient apres la vie d'ici-bas. Le feminin s'accorde avec al-daru (la demeure).",
              axe1_verset: "Le mot al-akhiratu qualifie la demeure — la demeure derniere, l'au-dela. L'expression al-dar al-akhira (la demeure de l'au-dela) designe le Paradis. Le defi porte sur cette demeure — si elle est exclusivement pour eux, ils devraient souhaiter la mort qui y mene. La posteriorite (akhira) est le point d'arrivee — la vie d'ici-bas est le passage, l'au-dela est la destination.",
              axe2_voisins: "Le verset 91 utilisait qablu (auparavant) pour le passe. Ce verset 94 utilise al-akhira pour le futur. Le passage oscillie entre le passe (meurtre des prophetes) et le futur (demeure de l'au-dela). La posteriorite est le complement de l'anteriorite.",
              axe3_sourate: "La racine a-kh-r dans la sourate al-Baqarah designe l'au-dela et la fin. En 2:4, les croyants croient en l'au-dela (al-akhira). En 2:86, « ceux qui ont achete la vie d'ici-bas au prix de l'au-dela ». La sourate oppose systematiquement la vie d'ici-bas (dunya) et l'au-dela (akhira).",
              axe4_coherence: "La racine a-kh-r apparait plus de 250 fois dans le Coran. L'au-dela (al-akhira) est mentionne dans presque toutes les sourates. La vie derniere est le lieu du jugement final et de la retribution eternelle.",
              axe5_frequence: "Pour la mission du khalifa, l'au-dela est l'objectif. Le khalifa agit dans la vie d'ici-bas en vue de la vie derniere. Les enfants d'Israel qui pretendent que l'au-dela est pour eux mais refusent la mort montrent l'insincerité de leur pretention."
            }
          }
        }
      },
      {
        word_key: "end", position: 6, sense_chosen: "aupres de",
        analysis_axes: {
          concept_chosen: "Proximit\u00e9/Pr\u00e9sence",
          concepts: {
            "Proximit\u00e9/Pr\u00e9sence": {
              status: "retenu",
              senses: ["aupr\u00e8s de", "chez", "pr\u00e8s de"],
              proof_ctx: "Le mot 'inda est une preposition de la racine '-n-d. Le Lane's donne \u00ab at, near, with, in the presence of \u00bb. La preposition situe la demeure dans la proximite de Dieu — 'inda Allahi (aupres de Dieu). La proximite divine est le privilege revendique.",
              axe1_verset: "Le mot 'inda situe la demeure de l'au-dela dans la proximite de Dieu. L'expression 'inda Allahi (aupres de Dieu) ajoute une dimension de prestige — la demeure n'est pas n'importe ou, elle est aupres de Dieu Lui-meme. La pretention d'exclusivite est d'autant plus forte — la demeure aupres de Dieu serait pour eux seuls.",
              axe2_voisins: "Le verset 91 situait la revelation comme venant de Dieu (anzala Allahu). Ce verset 94 situe la demeure aupres de Dieu ('inda Allahi). Le passage montre que tout vient de Dieu et retourne vers Dieu — la revelation descend de Lui, la demeure est aupres de Lui.",
              axe3_sourate: "La racine '-n-d dans la sourate al-Baqarah designe la proximite avec Dieu. En 2:110, « vous trouverez votre recompense aupres de Dieu ». En 2:186, « Je suis proche ». La sourate montre que la proximite avec Dieu est accessible a tous, pas reservee a un peuple.",
              axe4_coherence: "La racine '-n-d apparait plus de 200 fois dans le Coran. L'expression 'inda Allahi (aupres de Dieu) designe la valeur divine, la recompense et la proximite. En 3:169, « vivants aupres de leur Seigneur ». La proximite divine est le sommet de la recompense.",
              axe5_frequence: "Pour la mission du khalifa, la proximite de Dieu est l'objectif ultime. Le khalifa aspire a etre aupres de Dieu ('inda Allah). La pretention d'exclusivite est rejetee — la proximite de Dieu est accessible a tout croyant sincere."
            }
          }
        }
      },
      {
        word_key: "khls", position: 8, sense_chosen: "etre pur",
        analysis_axes: {
          concept_chosen: "Puret\u00e9/Sinc\u00e9rit\u00e9",
          concepts: {
            "Puret\u00e9/Sinc\u00e9rit\u00e9": {
              status: "retenu",
              senses: ["\u00eatre pur", "\u00eatre sinc\u00e8re", "d\u00e9dier exclusivement"],
              proof_ctx: "Le mot khalisatan est un participe actif feminin singulier accusatif indefini de la racine kh-l-s. Le Lane's donne \u00ab purely, exclusively, without admixture \u00bb. Le participe feminin s'accorde avec al-daru. Le mot exprime l'exclusivite — la demeure serait purement et exclusivement pour eux, sans partage avec les autres peuples.",
              axe1_verset: "Le mot khalisatan qualifie la demeure comme exclusive — reservee purement a eux. L'exclusivite (khulusa) est la pretention des enfants d'Israel — le Paradis serait pour eux seuls. Le complement min duni al-nas (a l'exclusion des gens) renforce l'exclusivite totale. Le defi expose l'absurdite — si c'est vrai, prouvez-le en souhaitant la mort.",
              axe2_voisins: "Le verset 91 montrait la foi selective. Le verset 92 montrait l'idolatrie. Ce verset 94 montre la pretention d'exclusivite. La progression montre l'escalade des pretentions — de la foi selective a l'exclusivite totale sur le Paradis.",
              axe3_sourate: "La racine kh-l-s dans la sourate al-Baqarah traite de la purete et de l'exclusivite. Ce verset est la premiere occurrence dans la sourate. La sourate montre que la purete (ikhlas) est un attribut du croyant sincere, pas une pretention d'exclusivite.",
              axe4_coherence: "La racine kh-l-s apparait environ 30 fois dans le Coran. Le mot mukhlis (sincere) designe celui dont la foi est pure. En 112:1, la sourate al-Ikhlas est la sourate de la purete. La purete est un ideal a atteindre, pas un privilege a revendiquer.",
              axe5_frequence: "Pour la mission du khalifa, la purete est la sincerite de l'intention. Le khalifa agit avec purete (ikhlas) pour Dieu seul. La pretention d'exclusivite est l'oppose de la purete — c'est l'orgueil deguise en foi."
            },
            "Extraction/D\u00e9livrance": {
              status: "nul",
              senses: ["sauver", "extraire", "parvenir \u00e0"],
              proof_ctx: "Le sens d'extraction/delivrance est un autre aspect de kh-l-s. Ici khalisatan est un participe qualifiant la demeure comme exclusive, pas un acte de sauvetage."
            }
          }
        }
      },
      {
        word_key: "dwn", position: 10, sense_chosen: "en dessous",
        analysis_axes: {
          concept_chosen: "Inf\u00e9riorit\u00e9/En-dessous",
          concepts: {
            "Inf\u00e9riorit\u00e9/En-dessous": {
              status: "retenu",
              senses: ["en dessous", "inf\u00e9rieur", "moindre"],
              proof_ctx: "Le mot duni est un nom de la racine d-w-n. Le Lane's donne \u00ab other than, to the exclusion of, besides, below \u00bb. Le mot min duni designe l'exclusion — les autres peuples sont exclus. Le sens premier est « en dessous » — les autres seraient en dessous d'eux en dignite.",
              axe1_verset: "Le mot duni complete l'exclusivite de khalisatan — non seulement la demeure est pour eux, mais elle est a l'exclusion des gens (min duni al-nas). L'expression min duni est un idiome coranique signifiant « a l'exclusion de ». L'exclusion totale renforce la pretention arrogante — personne d'autre n'y aurait droit.",
              axe2_voisins: "Le verset 91 montrait le rejet de ce qui vient « au-dela » (wara'a). Ce verset 94 exclut les gens « en dessous » (duni). Les deux mots spatiaux (wara'a/dun) marquent l'enfermement des enfants d'Israel dans leur position exclusive.",
              axe3_sourate: "La racine d-w-n dans la sourate al-Baqarah traite de l'exclusion et de l'inferiorite. En 2:23, « invoquez vos temoins en dehors de Dieu (min duni Allahi) ». L'expression min duni est frequente dans la sourate pour marquer l'exclusion.",
              axe4_coherence: "La racine d-w-n apparait environ 80 fois dans le Coran. L'expression min duni Allahi (en dehors de Dieu) est l'une des plus frequentes — elle designe tout ce qui est adore en dehors de Dieu. Ici min duni al-nas inverse la formule — les enfants d'Israel excluent les gens au lieu d'exclure les fausses divinites.",
              axe5_frequence: "Pour la mission du khalifa, l'exclusion illegitime est une forme d'injustice. Le khalifa ne s'arroge pas l'exclusivite de la misericorde divine. La pretention d'exclusion (min duni al-nas) est une forme d'orgueil."
            }
          }
        }
      },
      {
        word_key: "nws", position: 11, sense_chosen: "etres humains",
        analysis_axes: {
          concept_chosen: "Humanit\u00e9/Peuple",
          concepts: {
            "Humanit\u00e9/Peuple": {
              status: "retenu",
              senses: ["\u00eatres humains", "peuple", "gens"],
              proof_ctx: "Le mot al-nasi est un nom masculin pluriel defini genitif de la racine n-w-s. Le Lane's donne \u00ab the people, mankind, human beings \u00bb. Le nom defini designe l'ensemble des humains — tous les peuples autres que les enfants d'Israel sont exclus de leur pretention.",
              axe1_verset: "Le mot al-nasi complete l'expression min duni al-nas — a l'exclusion des gens. Les gens (al-nas) sont l'ensemble de l'humanite — la pretention d'exclusivite exclut tous les autres peuples. Le defi est d'autant plus fort — si vous seuls avez droit au Paradis, prouvez-le.",
              axe2_voisins: "Le verset 91 mentionnait les enfants d'Israel et leurs pretentions. Ce verset 94 etend la reflexion a l'humanite entiere — ils pretendent exclure tous les gens du Paradis. Le verset 95 revelera leur refus de souhaiter la mort.",
              axe3_sourate: "La racine n-w-s dans la sourate al-Baqarah designe l'humanite. En 2:8, « parmi les gens (al-nas) certains disent ». En 2:21, « o les gens, adorez votre Seigneur ». La sourate s'adresse a l'humanite entiere — le message n'est pas exclusif a un peuple.",
              axe4_coherence: "La racine n-w-s apparait plus de 240 fois dans le Coran. Le mot al-nas designe l'ensemble de l'humanite sans distinction. En 114:1-6, la sourate al-Nas s'adresse a tous les humains. Le Coran est un message pour al-nas, pas pour un peuple particulier.",
              axe5_frequence: "Pour la mission du khalifa, l'humanite est le destinataire de la mission. Le khalifa agit pour l'ensemble des gens, pas pour un groupe exclusif. La pretention d'exclusivite contredit la vocation universelle de la mission."
            }
          }
        }
      },
      {
        word_key: "mny", position: 12, sense_chosen: "souhaiter",
        analysis_axes: {
          concept_chosen: "D\u00e9sir/Esp\u00e9rance",
          concepts: {
            "D\u00e9sir/Esp\u00e9rance": {
              status: "retenu",
              senses: ["souhaiter", "d\u00e9sirer", "esp\u00e9rer"],
              proof_ctx: "Le verbe tamannawu est un imperatif 2MP forme V de la racine m-n-y. Le Lane's donne \u00ab wish for, desire, long for \u00bb. La forme V (tafa''ala) est reflexive — se souhaiter a soi-meme. L'imperatif ordonne aux enfants d'Israel de souhaiter la mort — un defi direct.",
              axe1_verset: "Le verbe tamannawu est le coeur du defi — souhaitez la mort. Si le Paradis est exclusivement pour eux, alors la mort devrait etre desirable comme passage vers le Paradis. Le defi est logiquement imparable — le refus de souhaiter la mort dement la pretention d'exclusivite. La particule fa (alors) lie la condition a la consequence.",
              axe2_voisins: "Ce verset 94 pose le defi. Le verset 95 donne la reponse — « jamais ils ne la souhaiteront ». Le refus de souhaiter la mort est la preuve de leur insincerité. Le couple 94-95 forme un argument complet.",
              axe3_sourate: "La racine m-n-y dans la sourate al-Baqarah traite du souhait. En 2:78, « ils ne font que conjecturer (amaniyya) ». Le souhait (umnya) peut etre vain — une pretention sans realite. La sourate oppose le souhait sincere au souhait vide.",
              axe4_coherence: "La racine m-n-y apparait environ 15 fois dans le Coran. Le souhait (tamanni) est utilise comme test de sincerite. En 62:6, le meme defi est repete — « souhaitez la mort si vous etes veridiques ». Le refus de souhaiter la mort est une preuve d'insincerité recurrente.",
              axe5_frequence: "Pour la mission du khalifa, le souhait doit correspondre a la pretention. Le khalifa qui pretend viser l'au-dela doit etre pret a quitter ce monde. Le test du souhait de la mort revele la sincerite de la foi."
            }
          }
        }
      },
      {
        word_key: "mwt", position: 13, sense_chosen: "mort",
        analysis_axes: {
          concept_chosen: "Mort/Cessation",
          concepts: {
            "Mort/Cessation": {
              status: "retenu",
              senses: ["mourir", "mort", "tuer", "mortel", "terre morte"],
              proof_ctx: "Le mot al-mawta est un nom masculin singulier defini accusatif de la racine m-w-t. Le Lane's donne \u00ab death, the cessation of life \u00bb. La mort est le passage obligatoire vers l'au-dela. Le nom defini designe la mort en general, pas une mort particuliere.",
              axe1_verset: "Le mot al-mawta est le complement de tamannawu — souhaitez la mort. La mort est presentee comme le test de sincerite — celui qui croit au Paradis n'a pas peur de la mort. Le defi est simple : si le Paradis vous est reserve, la mort est une bonne nouvelle. Le refus de souhaiter la mort demontre l'attachement a la vie d'ici-bas.",
              axe2_voisins: "Le verset 91 mentionnait le meurtre des prophetes (taqtuluna). Ce verset 94 mentionne la mort comme souhait. Le passage joue sur les differentes formes de la mort — donner la mort (tuer les prophetes) vs souhaiter la mort (pour soi-meme). Ils sont capables de tuer les prophetes mais incapables de souhaiter leur propre mort.",
              axe3_sourate: "La racine m-w-t dans la sourate al-Baqarah traite de la mort sous toutes ses formes. En 2:19, la mort comme chatiment. En 2:28, « vous etiez morts et Il vous a donne la vie ». En 2:56, la foudre les a frappes. La sourate montre que la mort est un passage, pas une fin.",
              axe4_coherence: "La racine m-w-t apparait plus de 160 fois dans le Coran. La mort est un theme central — elle est le passage vers le jugement et la retribution. En 3:185, « toute ame goutera la mort ». La mort est universelle et inevitable.",
              axe5_frequence: "Pour la mission du khalifa, la mort est le passage vers la recompense. Le khalifa n'a pas peur de la mort car il a fait son oeuvre. L'attachement excessif a la vie d'ici-bas est un signe d'insincerité."
            }
          }
        }
      },
      {
        word_key: "sdq", position: 16, sense_chosen: "sincere",
        analysis_axes: {
          concept_chosen: "V\u00e9rit\u00e9/Sinc\u00e9rit\u00e9",
          concepts: {
            "V\u00e9rit\u00e9/Sinc\u00e9rit\u00e9": {
              status: "retenu",
              senses: ["dire vrai", "vrai", "sinc\u00e8re", "confirmer"],
              proof_ctx: "Le mot sadiqina est un participe actif masculin pluriel de la racine s-d-q. Le Lane's donne \u00ab truthful, sincere, veracious \u00bb. Le participe designe ceux qui disent la verite — les veridiques. Le defi final porte sur la sincerite de leur pretention.",
              axe1_verset: "Le mot sadiqina cloture le verset par le test de sincerite — « si vous etes veridiques ». La formule in kuntum sadiqina (si vous etiez veridiques) change par rapport aux versets precedents qui utilisaient mu'minina (croyants). Le changement est significatif — le defi ne porte plus sur la foi mais sur la sincerite de la pretention. Etre veridique c'est etre coherent entre la pretention et l'acte.",
              axe2_voisins: "Le verset 91 utilisait in kuntum mu'minina (si vous etiez croyants). Ce verset 94 utilise in kuntum sadiqina (si vous etiez veridiques). Le passage du « croyant » au « veridique » montre que le defi evolue — il ne s'agit plus de foi mais de sincerite des pretentions.",
              axe3_sourate: "La racine s-d-q dans la sourate al-Baqarah traite de la verite et de la sincerite. En 2:23, « si vous etes veridiques ». En 2:31, « informez-Moi si vous etes veridiques ». La sourate utilise la formule in kuntum sadiqina comme defi recurrent.",
              axe4_coherence: "La racine s-d-q apparait plus de 150 fois dans le Coran. Le sidq (sincerite) est l'oppose du kidhb (mensonge). En 39:33, « celui qui apporte la verite et celui qui la confirme ». La sincerite est la coherence entre la parole et l'acte.",
              axe5_frequence: "Pour la mission du khalifa, la sincerite est fondamentale. Le khalifa est sadiq — veridique dans ses pretentions et ses actes. Les enfants d'Israel qui pretendent sans prouver leur sincerite echouent au test du sidq."
            }
          }
        }
      }
    ]
  }
};

// =====================================================
// DAILY PHRASES (3 roots manquants)
// =====================================================
const dailyPhrases = [
  // fwq (id=407) — superiorite
  { analysis_id: 407, phrases: [
    { sense: "au-dessus", arabic: "\u0648\u064E\u0631\u064E\u0641\u064E\u0639\u0652\u0646\u064E\u0627 \u0641\u064E\u0648\u0652\u0642\u064E\u0643\u064F\u0645\u064F \u0671\u0644\u0637\u0651\u064F\u0648\u0631\u064E", phon: "wa-rafa'na fawqakum al-tura", french: "Et Nous elevames au-dessus de vous le mont." },
    { sense: "surpasser", arabic: "\u0648\u064E\u0647\u064F\u0648\u064E \u0671\u0644\u0652\u0642\u064E\u0627\u0647\u0650\u0631\u064F \u0641\u064E\u0648\u0652\u0642\u064E \u0639\u0650\u0628\u064E\u0627\u062F\u0650\u0647\u0650", phon: "wa-huwa al-qahiru fawqa 'ibadihi", french: "Et Il est le Dominateur au-dessus de Ses serviteurs." },
    { sense: "exceller", arabic: "\u0646\u064E\u0631\u0652\u0641\u064E\u0639\u064F \u062F\u064E\u0631\u064E\u062C\u064E\u0627\u062A\u064D \u0645\u064E\u0646 \u0646\u064E\u0634\u064E\u0627\u0621\u064F", phon: "narfa'u darajatin man nasha'u", french: "Nous elevons en degres qui Nous voulons." }
  ]},
  // khls (id=822) — purete
  { analysis_id: 822, phrases: [
    { sense: "etre pur", arabic: "\u062E\u064E\u0627\u0644\u0650\u0635\u064E\u0629\u064B \u0645\u0650\u0651\u0646 \u062F\u064F\u0648\u0646\u0650 \u0671\u0644\u0646\u0651\u064E\u0627\u0633\u0650", phon: "khalisatan min duni al-nasi", french: "Exclusivement a l'exclusion des gens." },
    { sense: "etre sincere", arabic: "\u0642\u064F\u0644\u0652 \u0625\u0650\u0646\u0651\u064E \u0635\u064E\u0644\u064E\u0627\u062A\u0650\u0649 \u0648\u064E\u0646\u064F\u0633\u064F\u0643\u0650\u0649 \u0644\u0650\u0644\u0651\u064E\u0647\u0650 \u0631\u064E\u0628\u0651\u0650 \u0671\u0644\u0652\u0639\u064E\u0627\u0644\u064E\u0645\u0650\u064A\u0646\u064E", phon: "qul inna salati wa-nusuki li-llahi rabbi al-'alamina", french: "Dis : ma priere et ma devotion sont pour Dieu Seigneur des mondes." },
    { sense: "dedier exclusivement", arabic: "\u0641\u064E\u0671\u0639\u0652\u0628\u064F\u062F\u0650 \u0671\u0644\u0644\u0651\u064E\u0647\u064E \u0645\u064F\u062E\u0652\u0644\u0650\u0635\u064B\u0627 \u0644\u064E\u0647\u064F \u0671\u0644\u062F\u0651\u0650\u064A\u0646\u064E", phon: "fa-u'bud Allaha mukhlisan lahu al-dina", french: "Adore Dieu en Lui vouant un culte exclusif." }
  ]},
  // nba (id=418) — information/prophete
  { analysis_id: 418, phrases: [
    { sense: "prophete", arabic: "\u0648\u064E\u0625\u0650\u0630\u0652 \u0642\u064E\u0627\u0644\u064E \u0671\u0644\u0646\u0651\u064E\u0628\u0650\u064A\u0651\u064F \u0644\u0650\u0623\u064E\u0632\u0652\u0648\u064E\u0627\u062C\u0650\u0647\u0650", phon: "wa-idh qala al-nabiyyu li-azwajihi", french: "Et quand le Prophete dit a ses epouses." },
    { sense: "nouvelle", arabic: "\u0639\u064E\u0645\u0651\u064E \u064A\u064E\u062A\u064E\u0633\u064E\u0627\u0621\u064E\u0644\u064F\u0648\u0646\u064E \u0639\u064E\u0646\u0650 \u0671\u0644\u0646\u0651\u064E\u0628\u064E\u0625\u0650 \u0671\u0644\u0652\u0639\u064E\u0638\u0650\u064A\u0645\u0650", phon: "'amma yatasa'aluna 'ani al-naba'i al-'azimi", french: "Sur quoi s'interrogent-ils ? Sur la grande nouvelle." },
    { sense: "informer", arabic: "\u0646\u064E\u0628\u0651\u0650\u0626\u0652 \u0639\u0650\u0628\u064E\u0627\u062F\u0650\u0649 \u0623\u064E\u0646\u0651\u0650\u0649 \u0623\u064E\u0646\u064E\u0627 \u0671\u0644\u0652\u063A\u064E\u0641\u064F\u0648\u0631\u064F \u0671\u0644\u0631\u0651\u064E\u062D\u0650\u064A\u0645\u064F", phon: "nabbi' 'ibadi anni ana al-ghafuru al-rahimu", french: "Informe Mes serviteurs que Je suis le Pardonneur, le Tres Misericordieux." }
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

  const verseIds = [98, 99, 100, 101];
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
  console.log('=== PIPELINE SOURATE 2 — AL-BAQARAH — VERSETS 91 A 94 ===\n');

  let totalOk = 0, totalErr = 0;

  for (let v = 91; v <= 94; v++) {
    const result = await processVerse(v);
    if (result) {
      totalOk += result.okCount;
      totalErr += result.errCount;
    }
  }

  await syncWordMeanings();
  await insertDailyPhrases();

  console.log(`\n=== PIPELINE V91-94 TERMINEE — TOTAL: ${totalOk} OK, ${totalErr} erreurs ===`);
}

main().catch(e => console.error('FATAL:', e));
