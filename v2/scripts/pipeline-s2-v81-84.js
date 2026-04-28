const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// =====================================================
// PIPELINE SOURATE 2 — AL-BAQARAH — VERSETS 81 A 84
// verse_id=88 (2:81), verse_id=89 (2:82), verse_id=90 (2:83), verse_id=91 (2:84)
// =====================================================
// CRITICAL: concept names and senses are read from concepts JSON
// =====================================================

const verseData = {

  // =====================================================
  // VERSET 2:81
  // verse_id=88, analysis_id=445
  // "Oui, celui qui acquiert un mal et dont la faute l'encercle
  //  — ceux-la sont les compagnons du Feu, ils y demeureront eternellement."
  // =====================================================
  81: {
    verse_id: 88,
    analysis_id: 445,
    translation_arab: "Oui ! Celui qui acquiert un mal et que sa faute encercle — ceux-la sont les compagnons du Feu, ils y demeureront eternellement.",
    full_translation: "Oui ! Celui qui acquiert un mal et [dont] sa faute l'encercle — ceux-la sont les compagnons du Feu, ils y demeureront eternellement.",
    translation_explanation: `§DEMARCHE§
Ce verset repond a la pretention des enfants d'Israel que le Feu ne les toucherait que quelques jours. Le mot **bala** est une particule d'affirmation de reponse. Le Lane's donne « yes, indeed, on the contrary ». La particule bala contredit leur pretention et affirme le contraire. Le pronom relatif **man** signifie « celui qui ». Le verbe **kasaba** est un accompli 3MS de la racine k-s-b. Le Lane's donne « he earned, he gained, he acquired ». L'acquisition ici est celle du mal — c'est un gain negatif, une accumulation de mauvais actes. Le mot **sayyi'atan** est un nom feminin singulier accusatif indefini de la racine s-w-'. Le Lane's donne « an evil deed, a sin, what is bad ». Le mal est l'objet de l'acquisition — c'est ce que la personne a gagne par ses actes. Le verbe **ahatat** est un accompli 3FS forme IV de la racine h-w-t. Le Lane's donne « she encompassed, she surrounded, she enclosed ». La forme IV (causatif) intensifie l'encerclement — la faute a completement entoure la personne. Le pronom **bihi** (par lui) indique que l'encerclement est total. Le mot **khatiy'atuhu** est un nom feminin singulier nominatif de la racine kh-t-'. Le Lane's donne « his sin, his fault, his transgression ». La faute est sujet du verbe — c'est elle qui encercle, pas l'inverse. Le pronom possessif 3MS (son peche) montre que le peche appartient a la personne. Le demonstratif **ula'ika** signifie « ceux-la ». Le mot **ashabu** est un nom masculin pluriel nominatif de la racine s-h-b. Le Lane's donne « companions, associates, those who accompany ». Les compagnons du Feu sont ceux qui y resteront — le compagnonnage implique une presence permanente. Le mot **al-nar** est un nom feminin singulier genitif defini de la racine n-w-r. Le Lane's donne « the Fire, Hell ». Le Feu est la demeure des pecheurs. Le pronom **hum** signifie « eux ». Le mot **khaaliduna** est un participe actif masculin pluriel nominatif de la racine kh-l-d. Le Lane's donne « those who dwell forever, those who remain permanently ». Le participe actif designe un etat permanent — ils demeurent dans le Feu sans fin.

§JUSTIFICATION§
**acquiert** — Le sens retenu est « acquerir ». Le verbe kasaba designe l'acte de gagner par son effort. L'alternative « meriter » est ecartee car le contexte est l'accumulation d'actes, pas la merite.

**un mal** — Le sens retenu est « mal ». Le mot sayyi'atan designe une mauvaise action. L'alternative « honte » est ecartee car le contexte est le mal moral qui conduit au Feu, pas la pudeur.

**encercle** — Le sens retenu est « encercler ». Le verbe ahatat forme IV designe l'encerclement total. L'alternative « ruser » est ecartee car le contexte est l'enfermement dans le peche, pas la ruse.

**compagnons** — Le sens retenu est « compagnon ». Le mot ashabu designe ceux qui accompagnent le Feu. Pas d'alternative pertinente dans ce contexte.

**le Feu** — Le sens retenu est « feu ». Le mot al-nar designe l'Enfer. L'alternative « lumiere » est ecartee car al-nar dans le contexte eschatologique designe le Feu punitif, pas la lumiere.

**demeureront eternellement** — Le sens retenu est « demeurer ». Le participe khaaliduna designe la permanence dans le Feu. L'alternative « orner » est ecartee car le participe actif de kh-l-d designe la demeure eternelle.

§CRITIQUE§
**acquiert un mal vs gagne un peche** — Le Lane's donne « earned, gained ». « Acquiert » est plus neutre que « gagne » qui implique un profit. L'acquisition d'un mal est paradoxale — on gagne ce qui nous detruit.
**sa faute l'encercle vs son peche l'entoure** — Le verbe ahatat forme IV implique un encerclement complet, pas un simple entourage. La faute forme une enceinte autour du pecheur — il ne peut plus s'en echapper. L'encerclement est plus fort que l'entourage.
**compagnons du Feu vs gens du Feu** — Le mot ashab implique le compagnonnage permanent, pas simplement la presence. Les compagnons du Feu sont lies a lui comme on est lie a un compagnon — la relation est intime et durable.`,
    segments: [
      { fr: "oui !", phon: "bala", arabic: "\u0628\u064e\u0644\u064e\u0649\u0670", is_particle: true, position: 0 },
      { fr: "celui qui", phon: "man", arabic: "\u0645\u064e\u0646", is_particle: true, position: 1 },
      { fr: "acquiert", pos: "verbe", phon: "kasaba", arabic: "\u0643\u064e\u0633\u064e\u0628\u064e", word_key: "ksb", is_particle: false, sense_retenu: "acquerir", position: 2 },
      { fr: "un mal", pos: "nom", phon: "sayyi'atan", arabic: "\u0633\u064e\u064a\u0651\u0650\u0626\u064e\u0629\u064b", word_key: "swa", is_particle: false, sense_retenu: "mal", position: 3 },
      { fr: "et l'encercle", pos: "verbe", phon: "ahatat", arabic: "\u0648\u064e\u0623\u064e\u062d\u064e\u0670\u0637\u064e\u062a\u0652", word_key: "hwt", is_particle: false, sense_retenu: "encercler", position: 4 },
      { fr: "par lui", phon: "bihi", arabic: "\u0628\u0650\u0647\u0650.", is_particle: true, position: 5 },
      { fr: "sa faute", phon: "khatiy'atuhu", arabic: "\u062e\u064e\u0637\u0650\u064a\u0653\u0640\u0640\u0654\u062a\u064f\u0647\u064f\u060c", is_particle: false, position: 6 },
      { fr: "alors ceux-la", phon: "fa-ula'ika", arabic: "\u0641\u064e\u0623\u064f\u0648\u06e1\u0644\u064e\u0670\u0653\u0626\u0650\u0643\u064e", is_particle: true, position: 7 },
      { fr: "les compagnons", pos: "nom", phon: "ashabu", arabic: "\u0623\u064e\u0635\u0652\u062d\u064e\u0670\u0628\u064f", word_key: "shb", is_particle: false, sense_retenu: "compagnon", position: 8 },
      { fr: "du Feu", pos: "nom", phon: "al-nar", arabic: "\u0671\u0644\u0646\u0651\u064e\u0627\u0631\u0650", word_key: "nwr", is_particle: false, sense_retenu: "feu", position: 9 },
      { fr: "eux", phon: "hum", arabic: "\u0647\u064f\u0645\u0652", is_particle: true, position: 10 },
      { fr: "dedans", phon: "fiha", arabic: "\u0641\u0650\u064a\u0647\u064e\u0627", is_particle: true, position: 11 },
      { fr: "demeureront eternellement", pos: "nom", phon: "khaaliduna", arabic: "\u062e\u064e\u0670\u0644\u0650\u062f\u064f\u0648\u0646\u064e", word_key: "khd", is_particle: false, sense_retenu: "demeurer", position: 12 }
    ],
    words: [
      {
        word_key: "ksb", position: 2, sense_chosen: "acquerir",
        analysis_axes: {
          concept_chosen: "Acquisition/Rétribution",
          sense_chosen: "acquerir",
          concepts: {
            "Acquisition/Rétribution": {
              status: "retenu",
              senses: ["acquérir", "gagner", "mériter"],
              proof_ctx: "Le verbe kasaba est un accompli 3MS de la racine k-s-b. Le Lane's donne « he earned, he gained, he acquired ». L'acquisition est ici celle du mal — kasaba sayyi'atan signifie « il a acquis un mal ». Le kasb est l'effort d'obtention, l'acte par lequel on gagne quelque chose. Ici le gain est negatif — on acquiert un peche comme on acquiert un bien.",
              axe1_verset: "Le verbe kasaba ouvre la proposition conditionnelle — celui qui acquiert un mal. L'acquisition du mal est presentee comme un choix actif — la personne n'est pas victime du mal, elle l'a acquis par son effort. Le verbe kasaba implique une action deliberee. La suite du verset montre la consequence de cette acquisition — l'encerclement par la faute et le sejour eternel dans le Feu.",
              axe2_voisins: "Le verset 80 rapportait la pretention des enfants d'Israel que le Feu ne les toucherait que quelques jours. Ce verset 81 repond par bala (oui, au contraire) et pose la condition de l'eternite dans le Feu — l'acquisition du mal et l'encerclement par la faute. Le verset 82 presentera le cas oppose — ceux qui croient et font le bien.",
              axe3_sourate: "La racine k-s-b dans la sourate al-Baqarah traite de l'acquisition des actes. En 2:134, « pour elle ce qu'elle a acquis (kasabat) et pour vous ce qu'avez acquis ». En 2:286, « pour elle ce qu'elle a acquis (kasabat) et contre elle ce qu'elle s'est acquis (iktasabat) ». La sourate distingue l'acquisition du bien (kasaba) et l'effort d'acquisition du mal (iktasaba).",
              axe4_coherence: "La racine k-s-b apparait 67 fois dans le Coran. Le verbe kasaba est utilise pour l'acquisition des bonnes et des mauvaises actions. En 3:25, « chaque ame sera retribuee pour ce qu'elle a acquis ». En 45:22, « pour que chaque ame soit retribuee selon ce qu'elle a acquis ». L'acquisition est le fondement de la retribution — on recoit ce qu'on a gagne.",
              axe5_frequence: "Pour la mission du khalifa, l'acquisition est la responsabilite personnelle. Le khalifa est responsable de ce qu'il acquiert — ses actes lui appartiennent et il en rendra compte. L'acquisition du mal est un echec de la mission — le khalifa qui acquiert le mal trahit sa charge."
            }
          }
        }
      },
      {
        word_key: "swa", position: 3, sense_chosen: "mal",
        analysis_axes: {
          concept_chosen: "Mal/Mauvais",
          sense_chosen: "mal",
          concepts: {
            "Mal/Mauvais": {
              status: "retenu",
              senses: ["mal", "mauvais", "nuisible", "péché"],
              proof_ctx: "Le mot sayyi'atan est un nom feminin singulier accusatif indefini de la racine s-w-'. Le Lane's donne « an evil deed, a sin, that which is bad or evil ». Le mot est a l'accusatif comme complement d'objet de kasaba — c'est ce qui est acquis. Le mal (sayyi'a) est l'oppose du bien (hasana). C'est un jugement de valeur sur ce qui nuit et degrade.",
              axe1_verset: "Le mot sayyi'atan est l'objet de l'acquisition — celui qui acquiert un mal. Le mal est indefini (tanwin) — il s'agit de n'importe quel mal, pas d'un mal specifique. La generalite du terme couvre toute forme de transgression. Le verset lie l'acquisition du mal a l'encerclement par la faute — le mal acquis ne reste pas isole, il entoure completement la personne.",
              axe2_voisins: "Le verset 80 montrait la pretention des enfants d'Israel. Ce verset 81 definit le critere de l'eternite dans le Feu — l'acquisition du mal et l'encerclement. Le verset 82 definira le critere de l'eternite au Paradis — la foi et les bonnes oeuvres. Les deux versets forment un diptyque bien/mal.",
              axe3_sourate: "La racine s-w-' dans la sourate al-Baqarah traite du mal sous plusieurs formes. En 2:49, « ils vous infligeaient le pire (su') du chatiment ». En 2:169, « Satan vous ordonne le mal (al-su') ». La sourate montre que le mal est une realite active que la personne choisit d'acquerir ou de rejeter.",
              axe4_coherence: "La racine s-w-' apparait 167 fois dans le Coran. Le mot sayyi'a designe la mauvaise action, l'oppose de hasana (bonne action). En 4:110, « celui qui commet un mal (su'an) puis demande pardon a Dieu trouvera Dieu Pardonneur ». Le mal est reparable par le repentir — sauf quand il encercle completement la personne.",
              axe5_frequence: "Pour la mission du khalifa, le mal est l'echec de la mission. Le khalifa qui acquiert le mal au lieu du bien perd sa fonction. La sayyi'a est le contraire de ce que le khalifa est cense produire — la corruption au lieu de la construction."
            },
            "Honte/Pudeur": {
              status: "nul",
              senses: ["honte"],
              proof_ctx: "Le sens de honte est un autre aspect de s-w-'. Le contexte utilise sayyi'atan comme complement de kasaba — c'est le mal moral acquis, pas la honte physique. Le sens de pudeur est ecarte par le contexte eschatologique."
            }
          }
        }
      },
      {
        word_key: "hwt", position: 4, sense_chosen: "encercler",
        analysis_axes: {
          concept_chosen: "Protection/Encerclement",
          sense_chosen: "encercler",
          concepts: {
            "Protection/Encerclement": {
              status: "retenu",
              senses: ["garder", "protéger", "entourer", "encercler", "mur", "englober"],
              proof_ctx: "Le verbe ahatat est un accompli 3FS forme IV de la racine h-w-t. Le Lane's donne « she encompassed, she surrounded completely ». La forme IV (ahata) est un causatif intensif — faire entourer completement. Le sujet est khatiy'atuhu (sa faute) — c'est la faute qui encercle la personne, pas l'inverse. L'encerclement total par la faute signifie qu'il n'y a plus d'issue.",
              axe1_verset: "Le verbe ahatat est la condition decisive — non seulement la personne a acquis le mal, mais sa faute l'a completement encercle. L'encerclement total implique l'absence de repentir — si la faute entoure completement, il n'y a plus de place pour le bien. La construction wa-ahatat bihi khatiy'atuhu (et sa faute l'a encercle) montre que la faute est devenue une enceinte autour du pecheur.",
              axe2_voisins: "Le verset 80 montrait la pretention que le Feu ne durerait que quelques jours. Ce verset 81 repond que l'encerclement par la faute rend le Feu eternel. Le verset 82 montre l'alternative — la foi et les bonnes oeuvres menent au Paradis eternel. L'encerclement par le mal est le miroir inverse de l'enveloppement par le bien.",
              axe3_sourate: "La racine h-w-t dans la sourate al-Baqarah porte le sens de connaissance englobante et d'encerclement. En 2:19, Dieu « encercle (muhitun) les negateurs ». En 2:255, « Son Trone englobe (wasi'a kursiyyuhu) les cieux et la terre ». L'encerclement peut etre divin (connaissance totale) ou punitif (la faute qui enferme).",
              axe4_coherence: "La racine h-w-t apparait 28 fois dans le Coran. Le verbe ahata signifie « entourer completement, englober ». En 18:29, « le Feu les encerclera (ahata bihim) de ses flammes ». L'encerclement par le Feu est parallele a l'encerclement par la faute — la faute mene au Feu, et le Feu enferme comme la faute enfermait.",
              axe5_frequence: "Pour la mission du khalifa, l'encerclement par la faute est la perte totale de la mission. Le khalifa dont les fautes l'encerclent ne peut plus remplir sa charge — il est prisonnier de ses propres actes. L'encerclement est le stade final de la degradation."
            },
            "Sens isolé/Ruser": {
              status: "nul",
              senses: ["ruser pour convaincre"],
              proof_ctx: "Le sens de ruse est un sens isole de h-w-t. Le contexte est clairement l'encerclement — la faute entoure la personne. La forme IV (ahata) designe l'encerclement total, pas la ruse."
            }
          }
        }
      },
      {
        word_key: "shb", position: 8, sense_chosen: "compagnon",
        analysis_axes: {
          concept_chosen: "Compagnonnage/Association",
          sense_chosen: "compagnon",
          concepts: {
            "Compagnonnage/Association": {
              status: "retenu",
              senses: ["compagnon", "associé", "ami", "accompagner"],
              proof_ctx: "Le mot ashabu est un nom masculin pluriel nominatif de la racine s-h-b. Le Lane's donne « companions, associates, those who are in company with ». Le pluriel ashab designe les compagnons du Feu — ceux qui y sont lies de maniere permanente. Le compagnonnage implique la presence continue et la relation intime avec le Feu.",
              axe1_verset: "Le mot ashabu al-nar (les compagnons du Feu) designe ceux dont la faute les a encercles. Le compagnonnage avec le Feu est la consequence de l'acquisition du mal. Le demonstratif ula'ika (ceux-la) cree une distance — ce sont eux, pas nous. La formule ashab al-nar est suivie de khaaliduna fiha (demeurant eternellement dedans).",
              axe2_voisins: "Le verset 80 contenait la pretention que le Feu ne durerait que quelques jours. Ce verset 81 repond par la formule ashab al-nar — ils ne sont pas des visiteurs temporaires mais des compagnons permanents. Le verset 82 presentera les ashab al-janna (compagnons du Paradis) en miroir.",
              axe3_sourate: "La racine s-h-b dans la sourate al-Baqarah distingue les compagnons du Feu et ceux du Paradis. En 2:39, « ceux-la sont les compagnons du Feu ». En 2:82, « ceux-la sont les compagnons du Paradis ». La sourate utilise le mot ashab pour definir l'appartenance eternelle a un lieu.",
              axe4_coherence: "La racine s-h-b apparait 97 fois dans le Coran. La formule ashab al-nar apparait 20 fois et ashab al-janna 17 fois. Le mot ashab implique une relation de proximite et de permanence — on ne quitte pas son compagnon. Les compagnons du Feu sont lies a lui comme les compagnons du Prophete etaient lies a lui.",
              axe5_frequence: "Pour la mission du khalifa, le compagnonnage definit l'identite. Le khalifa est compagnon de la guidance ou du Feu selon ses actes. Le choix du compagnonnage est le choix de la destinee — accompagner le bien ou le mal."
            }
          }
        }
      },
      {
        word_key: "nwr", position: 9, sense_chosen: "feu",
        analysis_axes: {
          concept_chosen: "Lumière/Clarté",
          sense_chosen: "feu",
          concepts: {
            "Lumière/Clarté": {
              status: "retenu",
              senses: ["éclairer", "lumière", "feu", "guider par la lumière"],
              proof_ctx: "Le mot al-nar est un nom feminin singulier genitif defini de la racine n-w-r. Le Lane's donne « the fire, Hell, the Fire of punishment ». Al-nar est le nom du Feu de l'au-dela — la demeure du chatiment. La racine n-w-r porte le sens de lumiere et de feu — le feu est une source de lumiere, mais aussi de destruction. Al-nar dans le Coran designe specifiquement l'Enfer.",
              axe1_verset: "Le mot al-nar est le lieu de destination des pecheurs encercles par leurs fautes. La formule ashabu al-nar (compagnons du Feu) fait du Feu un compagnon permanent. Le verset pose la condition de l'entree au Feu — l'acquisition du mal et l'encerclement par la faute — et la duree — eternelle (khaaliduna).",
              axe2_voisins: "Le verset 80 mentionnait le Feu (al-nar) comme chatiment temporaire selon les enfants d'Israel. Ce verset 81 repond que le Feu est eternel pour ceux dont les fautes les encerclent. Le verset 82 presentera le Paradis (al-janna) en opposition. Le couple Feu/Paradis structure les versets 81-82.",
              axe3_sourate: "La racine n-w-r dans la sourate al-Baqarah porte les deux sens de feu et de lumiere. En 2:17, « Dieu a emporte leur lumiere (nur) ». En 2:257, « Dieu est le protecteur de ceux qui croient, Il les fait sortir des tenebres vers la lumiere ». Le feu punitif et la lumiere divine sont les deux faces de la racine n-w-r.",
              axe4_coherence: "La racine n-w-r apparait 194 fois dans le Coran. Le mot al-nar (le Feu) designe l'Enfer dans la majorite de ses occurrences. Le mot nur (lumiere) designe la guidance divine. Le Feu detruit comme la lumiere eclaire — les deux sont des manifestations de la puissance divine, l'un pour le chatiment, l'autre pour la guidance.",
              axe5_frequence: "Pour la mission du khalifa, le Feu est la consequence de l'echec. Le khalifa qui echoue dans sa mission risque le Feu eternel. La lumiere divine guide le khalifa, tandis que le feu punitif attend celui qui s'en detourne."
            },
            "Sens isolé/Fleur": {
              status: "nul",
              senses: ["fleur"],
              proof_ctx: "Le sens de fleur est un sens isole de n-w-r. Le contexte est clairement le Feu eschatologique — al-nar avec l'article defini designe l'Enfer."
            },
            "Sens isolé/Fuir": {
              status: "nul",
              senses: ["fuir"],
              proof_ctx: "Le sens de fuir est un sens isole de n-w-r. Le contexte utilise al-nar comme nom du Feu, pas comme verbe de fuite."
            }
          }
        }
      },
      {
        word_key: "khd", position: 12, sense_chosen: "demeurer",
        analysis_axes: {
          concept_chosen: "Permanence/Éternité",
          sense_chosen: "demeurer",
          concepts: {
            "Permanence/Éternité": {
              status: "retenu",
              senses: ["demeurer", "demeurer longtemps", "éternel", "faire demeurer"],
              proof_ctx: "Le mot khaaliduna est un participe actif masculin pluriel nominatif de la racine kh-l-d. Le Lane's donne « those who remain permanently, those who abide forever, immortal ». Le participe actif designe un etat permanent — ils sont dans l'etat de demeurer. Le pluriel masculin s'accorde avec ashab (compagnons). La racine kh-l-d porte l'idee de permanence et d'eternite.",
              axe1_verset: "Le mot khaaliduna cloture le verset par la sentence d'eternite. Apres la condition (acquiert le mal, la faute l'encercle) et la designation (compagnons du Feu), vient la duree — ils y demeureront eternellement. La structure du verset progresse de la cause (le mal) a la consequence (le Feu) a la duree (l'eternite).",
              axe2_voisins: "Le verset 80 contenait la pretention que le Feu ne durerait que quelques jours (ayyaman ma'dudat). Ce verset 81 repond par khaaliduna (eternellement) — la contradiction est totale. Le verset 82 utilisera le meme mot khaaliduna pour l'eternite au Paradis. Les deux eternites se font face.",
              axe3_sourate: "La racine kh-l-d dans la sourate al-Baqarah est utilisee pour l'eternite au Feu et au Paradis. En 2:25, « ils y demeureront eternellement (khaaliduna fiha) » pour le Paradis. En 2:39, « ils y demeureront eternellement » pour le Feu. La sourate pose l'eternite comme la duree de la retribution — pas de limite de temps.",
              axe4_coherence: "La racine kh-l-d apparait 87 fois dans le Coran. Le participe khaalid est utilise pour les deux destinations eternelles. En 3:116, « ils sont les compagnons du Feu, ils y demeureront eternellement ». En 4:57, « ils y demeureront eternellement ». L'eternite est le trait distinctif de la retribution divine — elle ne prend pas fin.",
              axe5_frequence: "Pour la mission du khalifa, l'eternite est l'enjeu ultime. Le khalifa sait que ses actes ont des consequences eternelles — le bien mene a l'eternite au Paradis, le mal a l'eternite au Feu. Cette conscience de l'eternite doit guider chaque acte du khalifa."
            },
            "Sens isolé/Orner": {
              status: "nul",
              senses: ["orner de bracelets"],
              proof_ctx: "Le sens d'orner est un sens isole de kh-l-d. Le contexte est clairement la demeure eternelle — le participe khaaliduna designe la permanence dans le Feu, pas l'ornement."
            }
          }
        }
      }
    ]
  },

  // =====================================================
  // VERSET 2:82
  // verse_id=89, analysis_id=448
  // "Et ceux qui croient et font les oeuvres bonnes
  //  — ceux-la sont les compagnons du Jardin, ils y demeureront eternellement."
  // =====================================================
  82: {
    verse_id: 89,
    analysis_id: 448,
    translation_arab: "Et ceux qui croient et font les oeuvres bonnes — ceux-la sont les compagnons du Jardin, ils y demeureront eternellement.",
    full_translation: "Et ceux qui croient et font les oeuvres bonnes — ceux-la sont les compagnons du Jardin, ils y demeureront eternellement.",
    translation_explanation: `§DEMARCHE§
Ce verset est le pendant positif du verset 81. Le pronom relatif **alladhina** est precede de la conjonction wa (et). Le verbe **amanuu** est un accompli 3MP forme IV de la racine '-m-n. Le Lane's donne « they believed, they had faith ». La forme IV (af'ala) est causative — ils ont accepte la verite, ils ont donne la foi. L'accompli indique un acte accompli et ferme. Le verbe **'amiluu** est un accompli 3MP de la racine '-m-l. Le Lane's donne « they worked, they did, they performed ». Le verbe designe l'action concrete — les oeuvres, pas seulement l'intention. Le mot **al-salihat** est un participe actif feminin pluriel defini de la racine s-l-h. Le Lane's donne « the good deeds, the righteous works, what is good and right ». Le participe feminin pluriel defini designe les oeuvres conformes a l'ordre juste. Le demonstratif **ula'ika** signifie « ceux-la ». Le mot **ashabu** est un nom masculin pluriel de la racine s-h-b. Le Lane's donne « companions ». Le mot **al-janna** est un nom feminin singulier genitif defini de la racine j-n-n. Le Lane's donne « the Garden, Paradise, the enclosed garden ». Le Jardin est la demeure des croyants. Le mot **khaaliduna** est un participe actif masculin pluriel de la racine kh-l-d. Le Lane's donne « abiding therein forever ».

§JUSTIFICATION§
**croient** — Le sens retenu est « croire ». Le verbe amanuu designe l'acte de foi. L'alternative « proteger » est ecartee car la forme IV de '-m-n designe la foi, pas la protection.

**font** — Le sens retenu est « agir ». Le verbe 'amiluu designe l'action concrete. L'alternative « gouverneur » est ecartee car le verbe a l'accompli 3MP designe l'acte de travailler.

**les oeuvres bonnes** — Le sens retenu est « oeuvre bonne ». Le participe al-salihat designe les bonnes actions. L'alternative « paix » est ecartee car le participe feminin pluriel defini designe la rectitude morale des oeuvres.

**compagnons** — Le sens retenu est « compagnon ». Meme mot que verset 81.

**le Jardin** — Le sens retenu est « jardin ». Le mot al-janna designe le Paradis. L'alternative « djinn » est ecartee car al-janna avec l'article defini dans le contexte eschatologique designe le Jardin paradisiaque.

**demeureront eternellement** — Le sens retenu est « demeurer ». Meme mot que verset 81.

§CRITIQUE§
**croient et font** — L'ordre est significatif : la foi precede les oeuvres. On croit d'abord, puis on agit. La foi sans oeuvres est insuffisante (elle doit etre suivie d'actes), et les oeuvres sans foi sont vides.
**oeuvres bonnes vs bonnes actions** — Le mot salihat vient de s-l-h qui porte le sens de rectitude, de conformite a l'ordre juste. « Oeuvres bonnes » est plus precis que « bonnes actions » car salih implique la rectitude objective, pas seulement la bonte subjective.
**Jardin vs Paradis** — Le mot janna signifie litteralement « jardin clos, couvert de vegetation ». « Jardin » preserve le sens concret — un lieu de vegetation, de beaute et de protection. « Paradis » est un terme plus abstrait qui perd l'image concrete.`,
    segments: [
      { fr: "et ceux qui", phon: "wa-alladhina", arabic: "\u0648\u064e\u0671\u0644\u0651\u064e\u0630\u0650\u064a\u0646\u064e", is_particle: true, position: 0 },
      { fr: "croient", pos: "verbe", phon: "amanuu", arabic: "\u0621\u064e\u0627\u0645\u064e\u0646\u064f\u0648\u06e1", word_key: "amn", is_particle: false, sense_retenu: "croire", position: 1 },
      { fr: "et font", pos: "verbe", phon: "'amiluu", arabic: "\u0648\u064e\u0639\u064e\u0645\u0650\u0644\u064f\u0648\u06e1", word_key: "eml", is_particle: false, sense_retenu: "agir", position: 2 },
      { fr: "les oeuvres bonnes", pos: "nom", phon: "al-salihat", arabic: "\u0671\u0644\u0635\u0651\u064e\u0670\u0644\u0650\u062d\u064e\u0670\u062a\u0650", word_key: "slh", is_particle: false, sense_retenu: "oeuvre bonne", position: 3 },
      { fr: "ceux-la", phon: "ula'ika", arabic: "\u0623\u064f\u0648\u06e1\u0644\u064e\u0670\u0653\u0626\u0650\u0643\u064e", is_particle: true, position: 4 },
      { fr: "les compagnons", pos: "nom", phon: "ashabu", arabic: "\u0623\u064e\u0635\u0652\u062d\u064e\u0670\u0628\u064f", word_key: "shb", is_particle: false, sense_retenu: "compagnon", position: 5 },
      { fr: "du Jardin", pos: "nom", phon: "al-jannati", arabic: "\u0671\u0644\u0652\u062c\u064e\u0646\u0651\u064e\u0629\u0650", word_key: "jnn", is_particle: false, sense_retenu: "jardin", position: 6 },
      { fr: "eux", phon: "hum", arabic: "\u0647\u064f\u0645\u0652", is_particle: true, position: 7 },
      { fr: "dedans", phon: "fiha", arabic: "\u0641\u0650\u064a\u0647\u064e\u0627", is_particle: true, position: 8 },
      { fr: "demeureront eternellement", pos: "nom", phon: "khaaliduna", arabic: "\u062e\u064e\u0670\u0644\u0650\u062f\u064f\u0648\u0646\u064e", word_key: "khd", is_particle: false, sense_retenu: "demeurer", position: 9 }
    ],
    words: [
      {
        word_key: "amn", position: 1, sense_chosen: "croire",
        analysis_axes: {
          concept_chosen: "Foi/Adhésion",
          sense_chosen: "croire",
          concepts: {
            "Foi/Adhésion": {
              status: "retenu",
              senses: ["croyant", "confirmer", "accepter comme vrai", "croire", "avoir la foi"],
              proof_ctx: "Le verbe amanuu est un accompli 3MP forme IV de la racine '-m-n. Le Lane's donne « they believed, they accepted as true, they had faith ». La forme IV (af'ala) est un causatif — ils ont rendu sur la foi, ils ont donne leur adhesion. L'accompli 3MP (amanuu) indique un acte de foi accompli par un groupe. La foi est l'adhesion interieure a la verite.",
              axe1_verset: "Le verbe amanuu ouvre la condition positive — ceux qui croient et font les bonnes oeuvres. La foi precede l'action — on croit d'abord, puis on agit. Le verset pose la foi comme premiere condition de l'acces au Jardin. La conjonction wa (et) lie la foi aux oeuvres — les deux sont necessaires ensemble.",
              axe2_voisins: "Le verset 81 posait la condition negative — l'acquisition du mal et l'encerclement par la faute. Ce verset 82 pose la condition positive — la foi et les bonnes oeuvres. Les deux versets forment un diptyque complet — le mal mene au Feu, le bien mene au Jardin. La symetrie est parfaite.",
              axe3_sourate: "La racine '-m-n est fondamentale dans la sourate al-Baqarah. En 2:3, les pieux sont « ceux qui croient a l'invisible ». En 2:62, « quiconque croit en Dieu et au Jour dernier ». La sourate definit la foi comme la premiere condition de la reussite — celui qui croit est sur la guidance.",
              axe4_coherence: "La racine '-m-n apparait 879 fois dans le Coran — c'est l'une des plus frequentes. Le verbe amana forme IV designe l'acte de foi. La formule alladhina amanuu (ceux qui croient) est la designation standard des croyants dans le Coran. En 2:285, « le Messager a cru en ce qui lui a ete revele de son Seigneur, ainsi que les croyants ».",
              axe5_frequence: "Pour la mission du khalifa, la foi est le fondement de la mission. Le khalifa croit en sa mission et en Celui qui l'a missionne. Sans foi, il n'y a pas de mission — la foi est la condition premiere de l'action juste."
            },
            "Sécurité/Confiance": {
              status: "probable",
              senses: ["faire confiance", "être en sécurité", "confier", "fidèle", "lieu sûr", "se sentir en sécurité"],
              proof_ctx: "Le sens de securite et de confiance est un sens fondamental de la racine '-m-n. La foi (iman) derive de la securite (amn) — celui qui croit se sent en securite. Le lien est que la foi apporte la securite interieure — le croyant est en securite car il a confiance en Dieu."
            },
            "Garantie/Protection": {
              status: "nul",
              senses: ["accorder la sécurité", "protéger"],
              proof_ctx: "Le sens de garantie est un autre aspect de '-m-n. Le contexte utilise la forme IV (amanuu = ils ont cru), pas la forme II (ammana = il a mis en securite). La foi est l'acte interieur, pas l'acte de protection exterieure."
            }
          }
        }
      },
      {
        word_key: "eml", position: 2, sense_chosen: "agir",
        analysis_axes: {
          concept_chosen: "Action/Oeuvre",
          sense_chosen: "agir",
          concepts: {
            "Action/Oeuvre": {
              status: "retenu",
              senses: ["travailler", "agir", "oeuvre", "acte", "ouvrier"],
              proof_ctx: "Le verbe 'amiluu est un accompli 3MP de la racine '-m-l. Le Lane's donne « they worked, they did, they performed deeds ». Le verbe designe l'action concrete et volontaire — le travail qui produit un resultat. L'accompli 3MP indique que le groupe a agi de maniere accomplie. Le complement al-salihat precise la qualite des oeuvres.",
              axe1_verset: "Le verbe 'amiluu est le second element de la condition — apres la foi (amanuu), l'action (wa-'amiluu al-salihat). La conjonction wa lie les deux de maniere indissociable. L'action sans foi est sterile, la foi sans action est incomplete. Le verset exige les deux pour acceder au Jardin.",
              axe2_voisins: "Le verset 81 montrait l'acquisition du mal (kasaba sayyi'atan). Ce verset 82 montre l'accomplissement du bien ('amiluu al-salihat). Le couple kasaba/amila distingue deux types d'activite — l'acquisition passive du mal et l'accomplissement actif du bien.",
              axe3_sourate: "La racine '-m-l dans la sourate al-Baqarah designe l'action humaine. En 2:25, « ceux qui croient et font les bonnes oeuvres ». En 2:62, « quiconque croit et fait le bien ». La formule amanuu wa-'amiluu al-salihat est la condition standard du salut dans la sourate.",
              axe4_coherence: "La racine '-m-l apparait 360 fois dans le Coran. La formule alladhina amanuu wa-'amiluu al-salihat apparait 62 fois — c'est la formule la plus repetee du Coran pour decrire les croyants. En 103:3, « sauf ceux qui croient et font les bonnes oeuvres ». L'action est inseparable de la foi.",
              axe5_frequence: "Pour la mission du khalifa, l'action est la realisation de la mission. Le khalifa ne se contente pas de croire — il agit. Les oeuvres bonnes sont la manifestation concrete de la foi dans la vie du khalifa."
            },
            "Sens isolé/Gouverneur": {
              status: "nul",
              senses: ["gouverneur"],
              proof_ctx: "Le sens de gouverneur est un sens isole de '-m-l. Le contexte utilise le verbe 'amiluu a l'accompli 3MP — ils ont fait, ils ont agi. Le sens est l'action, pas la gouvernance."
            }
          }
        }
      },
      {
        word_key: "slh", position: 3, sense_chosen: "oeuvre bonne",
        analysis_axes: {
          concept_chosen: "Bonté/Rectitude",
          sense_chosen: "oeuvre bonne",
          concepts: {
            "Bonté/Rectitude": {
              status: "retenu",
              senses: ["être bon", "rectitude", "réparer", "réconcilier", "oeuvre bonne", "vertueux", "réformer"],
              proof_ctx: "Le mot al-salihat est un participe actif feminin pluriel defini de la racine s-l-h. Le Lane's donne « the good deeds, the righteous works, what is right and good ». Le participe actif designe ce qui est dans l'etat de rectitude — les oeuvres qui sont conformes a l'ordre juste. L'article defini (al-) indique que les oeuvres bonnes sont connues et definies.",
              axe1_verset: "Le mot al-salihat complete le verbe 'amiluu — ils ont fait les oeuvres bonnes. Le participe feminin pluriel defini specifie la qualite des oeuvres — elles sont bonnes, conformes a la rectitude. Le verset exige non seulement l'action mais la qualite de l'action — seules les oeuvres conformes a la rectitude comptent.",
              axe2_voisins: "Le verset 81 montrait l'acquisition du mal (sayyi'atan). Ce verset 82 montre les oeuvres bonnes (al-salihat). Le couple sayyi'a/saliha est fondamental — le mal et le bien. Le pluriel defini (al-salihat) s'oppose au singulier indefini (sayyi'atan) — les bonnes oeuvres sont multiples et connues, le mal est vague et indefini.",
              axe3_sourate: "La racine s-l-h dans la sourate al-Baqarah traite de la rectitude et de la reforme. En 2:11, « ils disent : nous ne sommes que des reformateurs ». En 2:220, « et si vous les ameliorez c'est mieux ». La sourate montre que la rectitude est l'etat naturel que la corruption altere.",
              axe4_coherence: "La racine s-l-h apparait 180 fois dans le Coran. Le participe salihat (bonnes oeuvres) est toujours au pluriel defini — les oeuvres bonnes sont un ensemble connu et defini. En 18:107, « ceux qui croient et font les bonnes oeuvres auront les jardins du Firdaws ». La formule est constante dans tout le Coran.",
              axe5_frequence: "Pour la mission du khalifa, les bonnes oeuvres sont la production attendue. Le khalifa produit des oeuvres conformes a la rectitude — c'est la finalite de sa mission. Les salihat sont la manifestation visible de la foi interieure."
            },
            "Sens isolé/Paix": {
              status: "nul",
              senses: ["paix"],
              proof_ctx: "Le sens de paix est un sens isole de s-l-h. Le contexte utilise le participe pluriel al-salihat pour designer les bonnes oeuvres — la rectitude des actes, pas la paix."
            }
          }
        }
      },
      {
        word_key: "shb", position: 5, sense_chosen: "compagnon",
        analysis_axes: {
          concept_chosen: "Compagnonnage/Association",
          sense_chosen: "compagnon",
          concepts: {
            "Compagnonnage/Association": {
              status: "retenu",
              senses: ["compagnon", "associé", "ami", "accompagner"],
              proof_ctx: "Le mot ashabu est un nom masculin pluriel nominatif de la racine s-h-b. Le Lane's donne « companions, associates ». Le pluriel ashab designe ici les compagnons du Jardin — ceux qui y sont lies de maniere permanente. Le compagnonnage avec le Jardin est l'oppose du compagnonnage avec le Feu du verset 81.",
              axe1_verset: "Le mot ashabu al-janna (compagnons du Jardin) designe ceux qui croient et font les bonnes oeuvres. Le compagnonnage avec le Jardin est la recompense de la foi et des oeuvres. Le demonstratif ula'ika (ceux-la) souligne la designation — ce sont eux les compagnons du Jardin.",
              axe2_voisins: "Le verset 81 presentait les ashab al-nar (compagnons du Feu). Ce verset 82 presente les ashab al-janna (compagnons du Jardin). La symetrie est parfaite — les deux versets utilisent la meme structure pour les deux destinations opposees.",
              axe3_sourate: "La racine s-h-b distingue les deux groupes dans toute la sourate. En 2:39, les ashab al-nar. En 2:82, les ashab al-janna. En 2:119, « tu ne seras pas interroge sur les compagnons du brasier ». La sourate definit l'humanite en deux camps selon leurs actes.",
              axe4_coherence: "La formule ashab al-janna apparait 17 fois dans le Coran. En 7:42, « ceux-la sont les compagnons du Jardin, ils y demeureront eternellement ». En 46:14, « ceux-la sont les compagnons du Jardin, en recompense de ce qu'ils faisaient ». Le compagnonnage avec le Jardin est la recompense ultime.",
              axe5_frequence: "Pour la mission du khalifa, le Jardin est la destination. Le khalifa qui accomplit sa mission avec foi et bonnes oeuvres devient compagnon du Jardin. Le compagnonnage avec le Jardin est l'accomplissement de la mission du khalifa sur terre."
            }
          }
        }
      },
      {
        word_key: "jnn", position: 6, sense_chosen: "jardin",
        analysis_axes: {
          concept_chosen: "Jardin/Paradis",
          sense_chosen: "jardin",
          concepts: {
            "Jardin/Paradis": {
              status: "retenu",
              senses: ["jardin", "paradis"],
              proof_ctx: "Le mot al-jannati est un nom feminin singulier genitif defini de la racine j-n-n. Le Lane's donne « the Garden, Paradise, an enclosed garden with dense trees ». Le mot janna vient de la racine j-n-n qui porte le sens de couvrir, cacher — le jardin est un lieu couvert de vegetation dense. Al-janna avec l'article defini designe le Paradis.",
              axe1_verset: "Le mot al-jannati est le lieu de destination des croyants qui font les bonnes oeuvres. La formule ashabu al-janna (compagnons du Jardin) fait du Jardin un lieu de compagnonnage permanent. Le verset oppose le Jardin au Feu du verset 81 — les deux destinations eternelles.",
              axe2_voisins: "Le verset 81 designait le Feu comme destination des pecheurs. Ce verset 82 designe le Jardin comme destination des croyants. Les deux versets forment un couple antithetique — Feu/Jardin, mal/bien, faute/foi. La symetrie est complete.",
              axe3_sourate: "La racine j-n-n dans la sourate al-Baqarah designe principalement le Paradis. En 2:25, « annonce a ceux qui croient et font les bonnes oeuvres qu'ils auront des jardins (jannat) ». En 2:35, « habitez le Jardin (al-janna) ». La sourate fait du Jardin la destination promise aux croyants.",
              axe4_coherence: "La racine j-n-n apparait 201 fois dans le Coran. Le mot janna designe le Paradis dans la grande majorite de ses occurrences. En 55:46, « pour celui qui craint la station de son Seigneur, il y aura deux jardins ». Le Jardin est le lieu de la recompense eternelle — un lieu de beaute, de vegetation et de repos.",
              axe5_frequence: "Pour la mission du khalifa, le Jardin est la recompense de la mission accomplie. Le khalifa qui croit et agit bien est destine au Jardin eternel. Le Jardin est la finalite de la creation — Dieu a cree le khalifa pour habiter le Jardin."
            },
            "Dissimulation/Couverture": {
              status: "probable",
              senses: ["cacher", "couvrir"],
              proof_ctx: "Le sens de dissimulation est le sens etymologique de j-n-n — cacher, couvrir. Le jardin (janna) est un lieu couvert de vegetation qui cache ce qui est a l'interieur. Le lien est que le Jardin paradisiaque est un lieu protege et couvert — la vegetation dense offre ombre et intimite."
            },
            "Êtres cachés": {
              status: "nul",
              senses: ["djinn"],
              proof_ctx: "Le sens de djinn est un autre aspect de j-n-n. Le contexte utilise al-janna pour le Paradis, pas pour les djinns. L'article defini et le contexte eschatologique designent clairement le Jardin paradisiaque."
            }
          }
        }
      },
      {
        word_key: "khd", position: 9, sense_chosen: "demeurer",
        analysis_axes: {
          concept_chosen: "Permanence/Éternité",
          sense_chosen: "demeurer",
          concepts: {
            "Permanence/Éternité": {
              status: "retenu",
              senses: ["demeurer", "demeurer longtemps", "éternel", "faire demeurer"],
              proof_ctx: "Le mot khaaliduna est un participe actif masculin pluriel nominatif de la racine kh-l-d. Le Lane's donne « those who abide forever, those who remain permanently ». Meme mot que le verset 81 mais applique au Jardin au lieu du Feu. L'eternite dans le Jardin est la recompense des croyants.",
              axe1_verset: "Le mot khaaliduna cloture le verset par la promesse d'eternite dans le Jardin. La structure est identique au verset 81 — condition + designation + duree. Les compagnons du Jardin y demeureront eternellement — la permanence est la marque de la retribution divine.",
              axe2_voisins: "Le verset 81 utilisait khaaliduna pour l'eternite au Feu. Ce verset 82 utilise le meme mot pour l'eternite au Jardin. La repetition du meme mot pour les deux destinations souligne la symetrie — les deux eternites sont de meme nature mais de sens oppose.",
              axe3_sourate: "Le mot khaaliduna est utilise dans toute la sourate pour les deux destinations. En 2:25, khaaliduna fiha pour le Jardin. En 2:39, khaaliduna fiha pour le Feu. La sourate ne laisse pas de place a un entre-deux — l'eternite est au Jardin ou au Feu.",
              axe4_coherence: "Le mot khaaliduna apparait dans tous les contextes eschatologiques du Coran. L'eternite est la caracteristique de l'au-dela — contrairement a la vie terrestre qui est temporaire, l'au-dela est permanent. L'eternite au Jardin est la recompense supreme.",
              axe5_frequence: "Pour la mission du khalifa, l'eternite au Jardin est l'objectif ultime. Le khalifa travaille sur terre pour obtenir l'eternite au Jardin. Chaque acte du khalifa est une contribution a sa destination eternelle."
            }
          }
        }
      }
    ]
  },

  // =====================================================
  // VERSET 2:83
  // verse_id=90, analysis_id=451
  // "Et quand Nous primes le pacte des enfants d'Israel : vous n'adorerez
  //  que Dieu, et [soyez bons] envers les parents avec excellence, et les proches,
  //  et les orphelins, et les necessiteux. Et dites aux gens une bonne parole,
  //  et etablissez la priere, et donnez la purification-dues. Puis vous vous
  //  etes detournes sauf un petit nombre d'entre vous, et vous refusez."
  // =====================================================
  83: {
    verse_id: 90,
    analysis_id: 451,
    translation_arab: "Et quand Nous primes le pacte des enfants d'Israel : vous n'adorerez que Dieu, et envers les parents avec excellence, et les proches, et les orphelins, et les necessiteux. Et dites aux gens une bonne parole, et etablissez la priere, et donnez la purification. Puis vous vous etes detournes sauf un petit nombre d'entre vous, et vous refusez.",
    full_translation: "Et quand Nous primes le pacte des enfants d'Israel : vous n'adorerez que Dieu, et [soyez bons] envers les parents avec excellence, et [envers] les proches, et les orphelins, et les necessiteux. Et dites aux gens une bonne [parole], et etablissez la priere, et donnez la purification. Puis vous vous etes detournes sauf un petit [nombre] d'entre vous, et vous [etes ceux qui] refusez.",
    translation_explanation: `§DEMARCHE§
Ce verset rappelle les clauses du pacte pris avec les enfants d'Israel. Le verbe **akhadhna** est un accompli 1P de la racine '-kh-dh. Le Lane's donne « We took, We seized ». La premiere personne du pluriel de majeste designe Dieu. L'accompli indique un acte passe et accompli — Dieu a pris le pacte. Le mot **mithaq** est un nom masculin singulier accusatif de la racine w-th-q. Le Lane's donne « covenant, compact, pact, firm agreement ». Le pacte est un engagement solennel et contraignant. Le mot **bani** est un nom masculin pluriel genitif de la racine b-n-y. Le Lane's donne « sons, children ». Bani Isra'il est la designation des enfants d'Israel. Le verbe **ta'buduna** est un inaccompli 2MP de la racine '-b-d. Le Lane's donne « you worship, you serve ». La negation la precede le verbe et illa (sauf) le suit — la construction la...illa cree une exclusion : vous n'adorerez que Dieu. Le mot **Allah** est un nom propre de la racine '-l-h. Le Lane's donne « God, the one true Deity ». Le mot **al-walidayni** est un nom masculin duel defini genitif de la racine w-l-d. Le Lane's donne « the two parents, father and mother ». Le duel indique les deux parents ensemble. Le mot **ihsanan** est un masdar forme IV accusatif indefini de la racine h-s-n. Le Lane's donne « excellence, doing good, beautiful conduct ». L'excellence envers les parents est la premiere obligation apres l'adoration de Dieu. Le mot **al-qurba** est un nom feminin singulier genitif defini de la racine q-r-b. Le Lane's donne « kinship, near relatives ». Les proches sont les parents par le sang. Le mot **al-yatama** est un nom pluriel defini de la racine y-t-m. Le Lane's donne « orphans, those who have lost their father ». Les orphelins sont proteges par le pacte. Le mot **al-masakin** est un nom masculin pluriel defini genitif de la racine s-k-n. Le Lane's donne « the needy, the destitute, those who cannot move due to poverty ». Les necessiteux sont ceux que la pauvrete immobilise. Le verbe **quluu** est un imperatif 2MP de la racine q-w-l. Le Lane's donne « say, speak ». L'imperatif ordonne de bien parler aux gens. Le mot **al-nas** est un nom masculin pluriel defini de la racine n-w-s. Le Lane's donne « the people, mankind, human beings ». Le mot **husnan** est un nom masculin singulier accusatif indefini de la racine h-s-n. Le Lane's donne « goodness, a good word, what is excellent ». La bonne parole est exigee envers tous les gens. Le verbe **aqimuu** est un imperatif 2MP forme IV de la racine q-w-m. Le Lane's donne « establish, perform regularly ». La forme IV signifie « faire se tenir debout, etablir ». Le mot **al-salat** est un nom feminin singulier defini de la racine s-l-w. Le Lane's donne « the ritual prayer, the prescribed prayer ». La priere rituelle est la deuxieme obligation du pacte. Le verbe **atuu** est un imperatif 2MP forme IV de la racine '-t-y. Le Lane's donne « give, bring, pay ». La forme IV signifie « faire venir, donner ». Le mot **al-zakat** est un nom feminin singulier defini de la racine z-k-w. Le Lane's donne « the obligatory alms, the purification-dues, the zakah ». La zakat est la troisieme obligation du pacte. Le verbe **tawallaytum** est un accompli 2MP forme V de la racine w-l-y. Le Lane's donne « you turned away, you turned your backs ». La forme V signifie se detourner, tourner le dos. Le mot **qalilan** est un nom masculin singulier accusatif indefini de la racine q-l-l. Le Lane's donne « a few, a small number ». Seul un petit nombre a respecte le pacte. Le mot **mu'riduna** est un participe actif masculin pluriel nominatif forme IV de la racine '-r-d. Le Lane's donne « those who turn away, those who refuse ». Le participe designe un etat permanent de refus.

§JUSTIFICATION§
**primes** — Le sens retenu est « prendre ». Le verbe akhadhna designe l'acte de saisir le pacte. L'alternative « punir » est ecartee car le contexte est la prise d'un engagement, pas un chatiment.

**pacte** — Le sens retenu est « pacte ». Le mot mithaq designe un engagement solennel. Pas d'alternative pertinente.

**enfants** — Le sens retenu est « fils ». Le mot bani designe la descendance. L'alternative « construire » est ecartee car bani au pluriel genitif devant un nom propre designe les fils.

**n'adorerez que** — Le sens retenu est « adorer ». Le verbe ta'buduna designe l'adoration exclusive. L'alternative « asservir » est ecartee car la construction la ta'buduna illa Allah designe l'adoration, pas l'asservissement.

**Dieu** — Le sens retenu est « Dieu ». Le nom propre Allah designe la divinite unique.

**les parents** — Le sens retenu est « fils ». Le mot al-walidayni (duel) designe les deux parents — ceux qui ont engendre.

**avec excellence** — Le sens retenu est « bien faire ». Le masdar ihsanan designe l'excellence dans le comportement.

**les proches** — Le sens retenu est « s'approcher ». Le mot al-qurba designe la parente proche.

**les orphelins** — Le sens retenu est « orphelin ». Le mot al-yatama designe ceux qui ont perdu leur pere.

**les necessiteux** — Le sens retenu est « pauvre ». Le mot al-masakin designe les pauvres immobilises par le besoin.

**dites** — Le sens retenu est « dire ». Le verbe quluu ordonne la bonne parole.

**aux gens** — Le sens retenu est « etres humains ». Le mot al-nas designe l'ensemble des humains.

**une bonne parole** — Le sens retenu est « bien faire ». Le mot husnan designe la bonte et l'excellence dans la parole.

**etablissez** — Le sens retenu est « peuple ». Le verbe aqimuu forme IV de q-w-m signifie « faire se tenir debout, etablir ». L'alternative « se lever » est ecartee car la forme IV est causative — faire se dresser la priere.

**la priere** — Le sens retenu est « prier ». Le mot al-salat designe la priere rituelle.

**donnez** — Le sens retenu est « venir ». Le verbe atuu forme IV signifie « donner, apporter ».

**la purification** — Le sens retenu est « purifier ». Le mot al-zakat designe la purification par l'aumone.

**vous vous etes detournes** — Le sens retenu est « etre proche ». Le verbe tawallaytum forme V de w-l-y signifie « se detourner, tourner le dos ».

**sauf un petit nombre** — Le sens retenu est « etre peu ». Le mot qalilan designe le petit nombre qui a respecte le pacte.

**vous refusez** — Le sens retenu est « montrer ». Le participe mu'riduna forme IV de '-r-d signifie « ceux qui se detournent, ceux qui refusent ».

§CRITIQUE§
**primes le pacte vs conclumes l'alliance** — Le verbe akhadha (prendre) implique une prise ferme et unilaterale. Dieu a « pris » le pacte des enfants d'Israel — ce n'est pas une negociation mais un acte d'autorite divine. « Primes » preserve cette unilateralite.
**excellence vs bienfaisance** — Le mot ihsan vient de h-s-n (etre beau, etre bon). L'ihsan est le degre supreme du comportement — faire le bien avec beaute. « Excellence » capture mieux cette idee que « bienfaisance » qui est plus faible.
**necessiteux vs pauvres** — Le mot miskin vient de s-k-n (etre immobile). Le miskin est celui que la pauvrete immobilise — il ne peut plus bouger par manque de moyens. « Necessiteux » est plus precis que « pauvre » car il implique l'immobilisation par le besoin.
**vous refusez** — Le participe mu'riduna est au present — ils refusent encore au moment de la revelation. Le passe (vous vous etes detournes) et le present (vous refusez) montrent la continuite de la desobeissance.`,
    segments: [
      { fr: "et quand", phon: "wa-idh", arabic: "\u0648\u064e\u0625\u0650\u0630\u0652", is_particle: true, position: 0 },
      { fr: "Nous primes", pos: "verbe", phon: "akhadhna", arabic: "\u0623\u064e\u062e\u064e\u0630\u0652\u0646\u064e\u0627", word_key: "akhz", is_particle: false, sense_retenu: "prendre", position: 1 },
      { fr: "le pacte", pos: "nom", phon: "mithaq", arabic: "\u0645\u0650\u064a\u062b\u064e\u0670\u0642\u064e", word_key: "wthq", is_particle: false, sense_retenu: "pacte", position: 2 },
      { fr: "des enfants", pos: "nom", phon: "bani", arabic: "\u0628\u064e\u0646\u0650\u0649\u0653", word_key: "bny", is_particle: false, sense_retenu: "fils", position: 3 },
      { fr: "d'Israel", phon: "isra'il", arabic: "\u0625\u0650\u0633\u0652\u0631\u064e\u0670\u0653\u0621\u0650\u064a\u0644\u064e", is_particle: true, position: 4 },
      { fr: "pas", phon: "la", arabic: "\u0644\u064e\u0627", is_particle: true, position: 5 },
      { fr: "vous n'adorerez que", pos: "verbe", phon: "ta'buduna", arabic: "\u062a\u064e\u0639\u0652\u0628\u064f\u062f\u064f\u0648\u0646\u064e", word_key: "ebd", is_particle: false, sense_retenu: "adorer", position: 6 },
      { fr: "sauf", phon: "illa", arabic: "\u0625\u0650\u0644\u0651\u064e\u0627", is_particle: true, position: 7 },
      { fr: "Dieu", pos: "nom", phon: "Allah", arabic: "\u0671\u0644\u0644\u0651\u064e\u0647\u064e", word_key: "alh", is_particle: false, sense_retenu: "Dieu", position: 8 },
      { fr: "et envers les parents", pos: "nom", phon: "wa-bi-al-walidayni", arabic: "\u0648\u064e\u0628\u0650\u0671\u0644\u0652\u0648\u064e\u0670\u0644\u0650\u062f\u064e\u064a\u0652\u0646\u0650", word_key: "bn", is_particle: false, sense_retenu: "fils", position: 9 },
      { fr: "avec excellence", pos: "nom", phon: "ihsanan", arabic: "\u0625\u0650\u062d\u0652\u0633\u064e\u0627\u0646\u064b\u0627", word_key: "hsn", is_particle: false, sense_retenu: "bienfaisance", position: 10 },
      { fr: "et les proches", phon: "wa-dhi", arabic: "\u0648\u064e\u0630\u0650\u0649", is_particle: true, position: 11 },
      { fr: "de parente", pos: "nom", phon: "al-qurba", arabic: "\u0671\u0644\u0652\u0642\u064f\u0631\u0652\u0628\u064e\u0649\u0670", word_key: "qrb", is_particle: false, sense_retenu: "s'approcher", position: 12 },
      { fr: "et les orphelins", pos: "nom", phon: "wa-al-yatama", arabic: "\u0648\u064e\u0671\u0644\u0652\u064a\u064e\u062a\u064e\u0670\u0645\u064e\u0649\u0670", word_key: "ytm", is_particle: false, sense_retenu: "orphelin", position: 13 },
      { fr: "et les necessiteux", pos: "nom", phon: "wa-al-masakin", arabic: "\u0648\u064e\u0671\u0644\u0652\u0645\u064e\u0633\u064e\u0670\u0643\u0650\u064a\u0646\u0650", word_key: "skn", is_particle: false, sense_retenu: "pauvre", position: 14 },
      { fr: "et dites", pos: "verbe", phon: "wa-quluu", arabic: "\u0648\u064e\u0642\u064f\u0648\u0644\u064f\u0648\u06e1", word_key: "qwl", is_particle: false, sense_retenu: "dire", position: 15 },
      { fr: "aux gens", pos: "nom", phon: "li-al-nas", arabic: "\u0644\u0650\u0644\u0646\u0651\u064e\u0627\u0633\u0650", word_key: "nws", is_particle: false, sense_retenu: "etres humains", position: 16 },
      { fr: "une bonne [parole]", pos: "nom", phon: "husnan", arabic: "\u062d\u064f\u0633\u0652\u0646\u064b\u0627", word_key: "hsn", is_particle: false, sense_retenu: "bon", position: 17 },
      { fr: "et etablissez", pos: "verbe", phon: "wa-aqimuu", arabic: "\u0648\u064e\u0623\u064e\u0642\u0650\u064a\u0645\u064f\u0648\u06e1", word_key: "qwm", is_particle: false, sense_retenu: "se lever", position: 18 },
      { fr: "la priere", pos: "nom", phon: "al-salat", arabic: "\u0671\u0644\u0635\u0651\u064e\u0644\u064e\u0648\u0670\u0629\u064e", word_key: "slw", is_particle: false, sense_retenu: "priere rituelle", position: 19 },
      { fr: "et donnez", pos: "verbe", phon: "wa-atuu", arabic: "\u0648\u064e\u0621\u064e\u0627\u062a\u064f\u0648\u06e1", word_key: "aty", is_particle: false, sense_retenu: "donner", position: 20 },
      { fr: "la purification", pos: "nom", phon: "al-zakat", arabic: "\u0671\u0644\u0632\u0651\u064e\u0643\u064e\u0648\u0670\u0629\u064e", word_key: "zkw", is_particle: false, sense_retenu: "aumone legale", position: 21 },
      { fr: "puis", phon: "thumma", arabic: "\u062b\u064f\u0645\u0651\u064e", is_particle: true, position: 22 },
      { fr: "vous vous etes detournes", pos: "verbe", phon: "tawallaytum", arabic: "\u062a\u064e\u0648\u064e\u0644\u0651\u064e\u064a\u0652\u062a\u064f\u0645\u0652", word_key: "w l y", is_particle: false, sense_retenu: "se detourner", position: 23 },
      { fr: "sauf", phon: "illa", arabic: "\u0625\u0650\u0644\u0651\u064e\u0627", is_particle: true, position: 24 },
      { fr: "un petit nombre", pos: "nom", phon: "qalilan", arabic: "\u0642\u064e\u0644\u0650\u064a\u0644\u064b\u0627", word_key: "qll", is_particle: false, sense_retenu: "etre peu", position: 25 },
      { fr: "d'entre vous", phon: "minkum", arabic: "\u0645\u0651\u0650\u0646\u0643\u064f\u0645\u0652", is_particle: true, position: 26 },
      { fr: "et vous", phon: "wa-antum", arabic: "\u0648\u064e\u0623\u064e\u0646\u062a\u064f\u0645", is_particle: true, position: 27 },
      { fr: "refusez", pos: "nom", phon: "mu'riduna", arabic: "\u0645\u0651\u064f\u0639\u0652\u0631\u0650\u0636\u064f\u0648\u0646\u064e", word_key: "erd", is_particle: false, sense_retenu: "proposer", position: 28 }
    ],
    words: [
      {
        word_key: "akhz", position: 1, sense_chosen: "prendre",
        analysis_axes: {
          concept_chosen: "Prise/Saisie",
          sense_chosen: "prendre",
          concepts: {
            "Prise/Saisie": {
              status: "retenu",
              senses: ["prendre", "saisir", "adopter"],
              proof_ctx: "Le verbe akhadhna est un accompli 1P de la racine '-kh-dh. Le Lane's donne « We took, We seized, We grasped ». La premiere personne du pluriel de majeste designe Dieu. L'accompli indique un acte passe et definitif — le pacte a ete pris et demeure en vigueur. Prendre un pacte signifie le saisir fermement.",
              axe1_verset: "Le verbe akhadhna ouvre le rappel du pacte — Dieu rappelle aux enfants d'Israel qu'Il a pris leur engagement. La prise du pacte est un acte d'autorite divine — Dieu saisit l'engagement, Il ne negocie pas. Le verset enumerera ensuite les clauses du pacte avant de constater la violation.",
              axe2_voisins: "Les versets 81-82 definissaient les deux destinations (Feu et Jardin). Ce verset 83 rappelle les obligations du pacte que les enfants d'Israel ont viole. Le verset 84 rappellera un second pacte — ne pas verser le sang et ne pas s'expulser mutuellement.",
              axe3_sourate: "La racine '-kh-dh dans la sourate al-Baqarah traite de la prise de pacte et de la saisie. En 2:63, « et quand Nous primes votre pacte ». En 2:84, « et quand Nous primes votre pacte ». La formule wa-idh akhadhna est repetee pour rappeler les engagements violes.",
              axe4_coherence: "La racine '-kh-dh apparait 273 fois dans le Coran. Le verbe akhadha couvre la prise physique et la prise d'engagement. En 3:81, « et quand Dieu prit le pacte des prophetes ». En 7:172, « et quand ton Seigneur prit de la descendance d'Adam ». La prise du pacte est un acte fondateur qui lie les parties.",
              axe5_frequence: "Pour la mission du khalifa, la prise du pacte est l'engagement fondateur. Le khalifa est lie par le pacte divin — il a des obligations envers Dieu et envers les hommes. Violer le pacte est trahir la mission."
            },
            "Châtiment": {
              status: "nul",
              senses: ["punir", "reprocher"],
              proof_ctx: "Le sens de chatiment est un autre aspect de '-kh-dh. Le contexte est la prise d'un pacte (akhadhna mithaq), pas un chatiment. La saisie ici est celle de l'engagement."
            }
          }
        }
      },
      {
        word_key: "wthq", position: 2, sense_chosen: "pacte",
        analysis_axes: {
          concept_chosen: "Fermeté/Confiance",
          sense_chosen: "pacte",
          concepts: {
            "Fermeté/Confiance": {
              status: "retenu",
              senses: ["lier solidement", "être solide", "avoir confiance", "pacte", "se garantir", "être ferme"],
              proof_ctx: "Le mot mithaq est un nom masculin singulier accusatif de la racine w-th-q. Le Lane's donne « covenant, compact, firm agreement, solemn pact ». Le mithaq est un engagement solennel qui lie les parties — c'est un lien solide et inviolable. La racine w-th-q porte l'idee de fermete et de solidite.",
              axe1_verset: "Le mot mithaq est l'objet de la prise divine — Dieu a pris le pacte des enfants d'Israel. Le pacte contient les clauses enumerees dans le verset : adorer Dieu seul, etre bons envers les parents, les proches, les orphelins, les necessiteux, parler bien, etablir la priere, donner la zakat. Le pacte est complet et detaille.",
              axe2_voisins: "Le verset 63 rapportait une premiere prise de pacte. Ce verset 83 rapporte les clauses detaillees du pacte. Le verset 84 rappellera un second pacte portant sur l'interdiction du meurtre et de l'expulsion. Les rappels de pacte s'accumulent pour montrer l'ampleur de la violation.",
              axe3_sourate: "La racine w-th-q dans la sourate al-Baqarah traite des engagements solennels. En 2:63, mithaq avec l'elevation du mont Sinai. En 2:84, mithaq sur le sang et l'expulsion. En 2:93, mithaq avec l'elevation du mont. La sourate montre que les enfants d'Israel ont eu de nombreux pactes — et les ont tous violes.",
              axe4_coherence: "La racine w-th-q apparait 31 fois dans le Coran. Le mot mithaq designe le pacte divin dans la majorite de ses occurrences. En 4:21, « comment le prendriez-vous alors que vous etes alles l'un vers l'autre et qu'elles ont pris de vous un pacte solide ». Le pacte est un lien que seule la trahison peut briser.",
              axe5_frequence: "Pour la mission du khalifa, le pacte est le cadre de la mission. Le khalifa est lie par un pacte avec Dieu — adorer Dieu seul et agir avec excellence. Violer le pacte est la pire forme de trahison."
            }
          }
        }
      },
      {
        word_key: "bny", position: 3, sense_chosen: "fils",
        analysis_axes: {
          concept_chosen: "Filiation",
          sense_chosen: "fils",
          concepts: {
            "Filiation": {
              status: "retenu",
              senses: ["fils"],
              proof_ctx: "Le mot bani est un nom masculin pluriel genitif de la racine b-n-y. Le Lane's donne « sons, children, descendants ». Bani Isra'il (enfants d'Israel) est la designation coranique des descendants de Jacob. Le pluriel bani indique la filiation — ce sont les fils, les descendants de la lignee d'Israel.",
              axe1_verset: "Le mot bani identifie les destinataires du pacte — les enfants d'Israel. Le pacte est specifique a ce peuple — il les engage de maniere particuliere. Le verset rappelle leurs obligations et constate leur violation.",
              axe2_voisins: "La formule bani Isra'il est recurrente dans cette section de la sourate. Les versets 40-86 s'adressent specifiquement aux enfants d'Israel. Le verset 83 rappelle les clauses de leur pacte — un pacte que les versets suivants montreront viole.",
              axe3_sourate: "La racine b-n-y dans la sourate al-Baqarah traite principalement de la filiation (bani Isra'il) et de la construction (bana). En 2:40, « O enfants d'Israel ». La sourate utilise bani Isra'il pour designer le peuple elu qui a trahi son election.",
              axe4_coherence: "La racine b-n-y apparait 176 fois dans le Coran. Le mot bani (fils, enfants) est utilise pour la filiation physique et spirituelle. La formule bani Isra'il apparait 41 fois — c'est la designation constante du peuple d'Israel dans le Coran.",
              axe5_frequence: "Pour la mission du khalifa, la filiation est l'heritage de la mission. Les enfants d'Israel ont herite de la mission de Jacob — mais ils ont trahi cet heritage. Le khalifa herite de la mission d'Adam et doit la preserver."
            },
            "Construction/Édification": {
              status: "nul",
              senses: ["construire", "bâtir", "édifier", "donner une maison"],
              proof_ctx: "Le sens de construction est un autre aspect de b-n-y. Le contexte utilise bani au pluriel genitif devant un nom propre — c'est la filiation (enfants de), pas la construction."
            }
          }
        }
      },
      {
        word_key: "ebd", position: 6, sense_chosen: "adorer",
        analysis_axes: {
          concept_chosen: "Adoration/Dévotion",
          sense_chosen: "adorer",
          concepts: {
            "Adoration/Dévotion": {
              status: "retenu",
              senses: ["vouer un culte", "se dévouer", "servir", "adorer", "adoration", "dévotion"],
              proof_ctx: "Le verbe ta'buduna est un inaccompli 2MP de la racine '-b-d. Le Lane's donne « you worship, you serve with devotion, you devote yourselves to ». La construction la ta'buduna illa Allah (vous n'adorerez que Dieu) est l'expression de l'exclusivite de l'adoration. L'inaccompli a valeur d'interdiction permanente.",
              axe1_verset: "Le verbe ta'buduna est la premiere clause du pacte — l'adoration exclusive de Dieu. La negation la suivie de l'exception illa cree l'exclusivite — aucune adoration sauf pour Dieu. C'est la clause fondamentale du pacte, celle dont decoulent toutes les autres. L'adoration de Dieu seul est le fondement de toute la Loi.",
              axe2_voisins: "Les versets 81-82 definissaient les consequences (Feu ou Jardin). Ce verset 83 rappelle la cause — le pacte et ses clauses. Le verset 84 ajoutera d'autres clauses. L'adoration exclusive de Dieu est la premiere et la plus importante des clauses du pacte.",
              axe3_sourate: "La racine '-b-d est fondamentale dans la sourate al-Baqarah. En 2:21, « adorez votre Seigneur ». En 2:172, « si c'est Lui que vous adorez ». La sourate fait de l'adoration exclusive le premier commandement — tout le reste en decoule.",
              axe4_coherence: "La racine '-b-d apparait 275 fois dans le Coran. Le verbe 'abada designe l'acte d'adoration qui est la finalite de la creation. En 51:56, « Je n'ai cree les djinns et les humains que pour qu'ils M'adorent ». L'adoration exclusive est le premier commandement de chaque prophete.",
              axe5_frequence: "Pour la mission du khalifa, l'adoration est la finalite de la mission. Le khalifa est cree pour adorer Dieu — c'est la clause premiere de son pacte. Toute autre adoration est une trahison de la mission."
            },
            "Servitude/Esclavage": {
              status: "peu_probable",
              senses: ["être humain", "asservir", "aplanir un chemin", "serviteur", "rendre soumis", "esclave"],
              proof_ctx: "Le sens de servitude est un sens connexe de '-b-d. Le contexte est l'adoration exclusive de Dieu — le verbe ta'buduna designe l'acte cultuel de devotion, pas l'asservissement. Le serviteur ('abd) adore, mais l'adoration depasse la servitude."
            }
          }
        }
      },
      {
        word_key: "alh", position: 8, sense_chosen: "Dieu",
        analysis_axes: {
          concept_chosen: "Divinité",
          sense_chosen: "Dieu",
          concepts: {
            "Divinité": {
              status: "retenu",
              senses: ["divinité", "exclamation divine", "divinité (concept)", "théologie", "oui certes", "Dieu"],
              proof_ctx: "Le mot Allah est le nom propre de Dieu, de la racine '-l-h. Le Lane's donne « God, the one true God, the only Deity ». Allah est le seul objet de l'adoration exclusive — la construction la ta'buduna illa Allah (vous n'adorerez que Dieu) fait de Dieu l'unique destinataire de l'adoration.",
              axe1_verset: "Le mot Allah est l'objet exclusif de l'adoration dans le pacte. L'exception illa Allah (sauf Dieu) exclut toute autre divinite. Le pacte pose Dieu comme l'unique objet de culte — c'est la base de la monotheisme. Toutes les autres clauses du pacte decoulent de cette premiere clause.",
              axe2_voisins: "Les versets precedents montraient les consequences de l'obeissance et de la desobeissance. Ce verset 83 pose le fondement — l'adoration de Dieu seul. Le verset 84 ajoutera des clauses pratiques (ne pas tuer, ne pas expulser).",
              axe3_sourate: "La racine '-l-h dans la sourate al-Baqarah porte principalement le nom propre Allah. En 2:163, « votre Dieu est un Dieu unique ». La sourate affirme l'unicite divine comme base de toute la Loi.",
              axe4_coherence: "Le nom Allah apparait 2699 fois dans le Coran. C'est le mot le plus frequent du Coran. En 112:1, « Dis : Il est Dieu, Unique ». L'unicite de Dieu est le message central de toute la revelation.",
              axe5_frequence: "Pour la mission du khalifa, Dieu est la source et la finalite de la mission. Le khalifa est au service de Dieu — il n'adore que Lui et n'obeit qu'a Lui."
            }
          }
        }
      },
      {
        word_key: "bn", position: 9, sense_chosen: "fils",
        analysis_axes: {
          concept_chosen: "Filiation/Descendance",
          sense_chosen: "fils",
          concepts: {
            "Filiation/Descendance": {
              status: "retenu",
              senses: ["fils", "enfant"],
              proof_ctx: "Le mot al-walidayni est un nom masculin duel defini genitif de la racine w-l-d. Le Lane's donne « the two parents, the father and the mother ». Le duel (walidayni) designe les deux parents ensemble. La preposition bi (envers) indique la direction du bienfait. Les parents sont les premiers beneficiaires de l'excellence apres Dieu.",
              axe1_verset: "Le mot al-walidayni est le premier objet de l'excellence (ihsanan) — apres l'adoration de Dieu, l'excellence envers les parents. L'ordre est significatif : Dieu d'abord, puis les parents. Le duel souligne que les deux parents sont concernes — pere et mere ensemble.",
              axe2_voisins: "Ce verset 83 enumere les obligations du pacte dans un ordre de priorite : Dieu, parents, proches, orphelins, necessiteux. Le verset 84 ajoutera l'interdiction du meurtre et de l'expulsion. Les obligations sociales completent l'obligation cultuelle.",
              axe3_sourate: "La racine w-l-d dans la sourate al-Baqarah traite de la filiation et de la descendance. En 2:233, « les meres allaiteront leurs enfants deux annees entieres ». La sourate accorde une place importante aux relations familiales.",
              axe4_coherence: "Le respect des parents est l'un des commandements les plus repetes du Coran. En 17:23, « Ton Seigneur a decrete que vous n'adorerez que Lui et que vous serez bons envers vos parents ». L'ordre est toujours le meme — Dieu puis les parents.",
              axe5_frequence: "Pour la mission du khalifa, les parents sont le premier cercle de responsabilite. Le khalifa est excellent envers ses parents — c'est la premiere manifestation sociale de sa devotion envers Dieu."
            }
          }
        }
      },
      {
        word_key: "hsn", position: 10, sense_chosen: "bienfaisance",
        analysis_axes: {
          concept_chosen: "Excellence morale",
          sense_chosen: "bienfaisance",
          concepts: {
            "Excellence morale": {
              status: "retenu",
              senses: ["bien faire", "bienfaisance"],
              proof_ctx: "Le mot ihsanan est un masdar forme IV accusatif indefini de la racine h-s-n. Le Lane's donne « excellence, doing good in the best manner, beautiful conduct ». L'ihsan est le degre supreme du comportement — au-dela du simple bien, c'est l'excellence. Le masdar forme IV (if'al) indique l'intensite de l'action — faire le bien avec perfection.",
              axe1_verset: "Le mot ihsanan est l'accusatif d'etat — soyez bons envers les parents avec excellence. L'ihsan envers les parents est la premiere obligation sociale du pacte. L'excellence n'est pas optionnelle — c'est une clause du pacte divin. Le mot est au tanwin (indefini) ce qui suggere une excellence sans limites.",
              axe2_voisins: "Les versets 81-82 definissaient les consequences. Ce verset 83 detaille les obligations. L'ihsan est le mode d'execution des obligations — non pas simplement remplir le devoir mais le remplir avec excellence.",
              axe3_sourate: "La racine h-s-n dans la sourate al-Baqarah traite de l'excellence et de la bonte. En 2:58, « Nous augmenterons les bienfaisants (al-muhsinin) ». En 2:112, « celui qui soumet son visage a Dieu en etant bienfaisant (muhsin) ». La sourate lie l'excellence a la soumission a Dieu.",
              axe4_coherence: "La racine h-s-n apparait 194 fois dans le Coran. L'ihsan est defini dans le hadith comme « adorer Dieu comme si tu Le voyais ». En 16:90, « Dieu ordonne la justice et l'excellence (al-ihsan) ». L'ihsan est le degre supreme apres l'islam et l'iman.",
              axe5_frequence: "Pour la mission du khalifa, l'excellence est le mode d'execution de la mission. Le khalifa ne se contente pas du minimum — il fait le bien avec la plus haute qualite. L'ihsan est la marque du khalifa accompli."
            },
            "Beauté/Bonté": {
              status: "probable",
              senses: ["être beau", "bon", "excellent"],
              proof_ctx: "Le sens de beaute est le sens premier de h-s-n. L'ihsan (excellence) derive de husn (beaute) — faire le bien de maniere belle. Le lien est que l'excellence morale est une forme de beaute — le beau geste, la belle action."
            }
          }
        }
      },
      {
        word_key: "qrb", position: 12, sense_chosen: "s'approcher",
        analysis_axes: {
          concept_chosen: "Proximité/Rapprochement",
          sense_chosen: "s'approcher",
          concepts: {
            "Proximité/Rapprochement": {
              status: "retenu",
              senses: ["s'approcher", "être proche", "rapprocher"],
              proof_ctx: "Le mot al-qurba est un nom feminin singulier genitif defini de la racine q-r-b. Le Lane's donne « nearness of kin, relationship, kindred ». Al-qurba designe la parente proche — les liens du sang. Le mot dhi al-qurba signifie « ceux qui ont de la parente », les proches parents.",
              axe1_verset: "Le mot al-qurba designe les proches parents — le deuxieme cercle apres les parents directs. Le verset enumere les cercles concentriques de responsabilite : Dieu, parents, proches, orphelins, necessiteux, puis tous les gens. Chaque cercle elargit la portee de l'excellence.",
              axe2_voisins: "Ce verset enumere les clauses sociales du pacte. Apres les parents (al-walidayni) viennent les proches (dhi al-qurba), puis les orphelins (al-yatama), puis les necessiteux (al-masakin). L'ordre va du plus proche au plus eloigne.",
              axe3_sourate: "La racine q-r-b dans la sourate al-Baqarah porte les sens de proximite et de sacrifice. En 2:186, « Je suis proche (qarib) ». La sourate montre que la proximite est un lien qui cree des obligations.",
              axe4_coherence: "La racine q-r-b apparait 96 fois dans le Coran. Le mot qurba (parente) et qurban (offrande) derivent de la meme idee de proximite — le parent est celui qui est proche, l'offrande est ce qu'on rapproche de Dieu.",
              axe5_frequence: "Pour la mission du khalifa, les proches sont le deuxieme cercle de responsabilite apres les parents. Le khalifa est excellent envers ses proches — la proximite du sang cree des devoirs."
            },
            "Offrande/Sacrifice": {
              status: "nul",
              senses: ["sacrifice", "offrande"],
              proof_ctx: "Le sens d'offrande est un autre aspect de q-r-b. Le contexte utilise al-qurba pour la parente, pas pour le sacrifice. La formule dhi al-qurba designe les proches parents."
            },
            "Parenté": {
              status: "nul",
              senses: ["parent proche"],
              proof_ctx: "Le sens de parente est precisement celui qui est utilise ici — dhi al-qurba (ceux de la parente). Cependant le concept retenu est Proximite/Rapprochement car c'est le concept principal de la racine q-r-b."
            }
          }
        }
      },
      {
        word_key: "ytm", position: 13, sense_chosen: "orphelin",
        analysis_axes: {
          concept_chosen: "Orphelinat/Solitude",
          sense_chosen: "orphelin",
          concepts: {
            "Orphelinat/Solitude": {
              status: "retenu",
              senses: ["orphelin", "unique", "être orphelin"],
              proof_ctx: "Le mot al-yatama est un nom pluriel defini de la racine y-t-m. Le Lane's donne « the orphans, those who have lost their father before reaching maturity ». L'orphelin (yatim) est celui qui a perdu son pere — il est seul et vulnerable. Le pluriel yatama designe le groupe des orphelins en tant que categorie sociale protegee.",
              axe1_verset: "Le mot al-yatama est le troisieme cercle de responsabilite — apres Dieu, les parents et les proches. Les orphelins sont des etres vulnerables que le pacte oblige a proteger. L'article defini (al-) designe les orphelins en tant que categorie — tous les orphelins sont concernes.",
              axe2_voisins: "Ce verset 83 enumere les beneficiaires de l'excellence : parents, proches, orphelins, necessiteux. L'ordre va des liens les plus forts (parents) aux plus faibles (necessiteux). Les orphelins sont entre les proches et les necessiteux — ils ont perdu leur protecteur naturel.",
              axe3_sourate: "La racine y-t-m dans la sourate al-Baqarah traite de la protection des orphelins. En 2:177, « donner de ses biens aux orphelins ». En 2:215, « ce que vous depensez de bien, c'est pour les parents, les proches, les orphelins ». La sourate fait de la protection des orphelins une obligation recurrente.",
              axe4_coherence: "La racine y-t-m apparait 23 fois dans le Coran. L'orphelin est une categorie protegee dans toute la revelation. En 93:9, « quant a l'orphelin, ne le maltraite pas ». En 107:2, « c'est celui qui repousse l'orphelin ». Le Coran accorde une protection speciale aux orphelins.",
              axe5_frequence: "Pour la mission du khalifa, la protection des orphelins est une clause du pacte. Le khalifa est le protecteur des vulnerables — les orphelins sont les premiers beneficiaires de sa protection."
            }
          }
        }
      },
      {
        word_key: "skn", position: 14, sense_chosen: "pauvre",
        analysis_axes: {
          concept_chosen: "Sens isolé/Pauvre",
          sense_chosen: "pauvre",
          concepts: {
            "Sens isolé/Pauvre": {
              status: "retenu",
              senses: ["pauvre"],
              proof_ctx: "Le mot al-masakin est un nom masculin pluriel defini genitif de la racine s-k-n. Le Lane's donne « the needy, the destitute, those so poor they cannot move ». Le miskin est celui que la pauvrete a immobilise — il ne peut plus bouger par manque de moyens. La racine s-k-n porte le sens de calme et d'immobilite — le miskin est celui qui est calme par force, immobile par pauvrete.",
              axe1_verset: "Le mot al-masakin est le quatrieme cercle de responsabilite. Apres Dieu, les parents, les proches et les orphelins, les necessiteux sont les derniers beneficiaires nommes. L'article defini et le pluriel designent la categorie entiere des necessiteux.",
              axe2_voisins: "Ce verset enumere les obligations du pacte. Les necessiteux sont mentionnes apres les orphelins — les deux categories partagent la vulnerabilite. Le verset 84 passera aux interdictions (ne pas tuer, ne pas expulser).",
              axe3_sourate: "La racine s-k-n dans la sourate al-Baqarah traite de l'habitation et de la pauvrete. En 2:61, « habitez l'Egypte ». En 2:184, « nourrir un necessiteux (miskin) ». La sourate lie l'habitation et la pauvrete — le miskin est celui qui ne peut pas habiter dignement.",
              axe4_coherence: "La racine s-k-n apparait 69 fois dans le Coran. Le mot miskin designe le pauvre immobilise par le besoin. En 9:60, « les aumones sont pour les pauvres et les necessiteux ». Le Coran distingue le faqir (pauvre) du miskin (necessiteux) — le miskin est dans un etat plus grave.",
              axe5_frequence: "Pour la mission du khalifa, les necessiteux sont une responsabilite du pacte. Le khalifa est charge de subvenir aux besoins des necessiteux — c'est une clause de son engagement envers Dieu."
            }
          }
        }
      },
      {
        word_key: "qwl", position: 15, sense_chosen: "dire",
        analysis_axes: {
          concept_chosen: "Parole/Énonciation",
          sense_chosen: "dire",
          concepts: {
            "Parole/Énonciation": {
              status: "retenu",
              senses: ["parole", "discours", "parler", "dire", "affirmer"],
              proof_ctx: "Le verbe quluu est un imperatif 2MP de la racine q-w-l. Le Lane's donne « say, speak ». L'imperatif ordonne de parler bien aux gens — la bonne parole est une clause du pacte. Le verbe est precede de la conjonction wa (et) qui lie cette clause aux precedentes.",
              axe1_verset: "Le verbe quluu introduit la clause de la bonne parole — « et dites aux gens une bonne parole ». La parole bien est une obligation envers tous les gens (al-nas), pas seulement les proches. Le verset elargit le cercle de responsabilite de la famille a l'humanite entiere.",
              axe2_voisins: "Les clauses precedentes concernaient des categories specifiques (parents, proches, orphelins, necessiteux). La clause de la bonne parole concerne tous les gens. Le passage du specifique au general montre l'universalite de l'obligation.",
              axe3_sourate: "La racine q-w-l dans la sourate al-Baqarah est la plus frequente. La parole est l'instrument principal de la communication — elle peut construire ou detruire. En 2:83, la bonne parole est une obligation du pacte — parler bien n'est pas optionnel.",
              axe4_coherence: "La racine q-w-l est la plus frequente du Coran avec plus de 1700 occurrences. En 33:70, « O vous qui croyez, craignez Dieu et dites une parole juste ». La bonne parole est un commandement recurrent dans tout le Coran.",
              axe5_frequence: "Pour la mission du khalifa, la bonne parole est un instrument de la mission. Le khalifa parle bien aux gens — sa parole construit la communaute au lieu de la detruire."
            }
          }
        }
      },
      {
        word_key: "nws", position: 16, sense_chosen: "etres humains",
        analysis_axes: {
          concept_chosen: "Humanité/Peuple",
          sense_chosen: "etres humains",
          concepts: {
            "Humanité/Peuple": {
              status: "retenu",
              senses: ["êtres humains", "peuple", "gens"],
              proof_ctx: "Le mot al-nas est un nom masculin pluriel defini de la racine n-w-s. Le Lane's donne « mankind, the people, human beings ». Al-nas designe l'ensemble des etres humains — la totalite de l'humanite sans distinction. L'article defini (al-) donne une portee universelle — tous les gens.",
              axe1_verset: "Le mot al-nas est le destinataire de la bonne parole — parler bien a tous les gens, sans exception. Le pacte oblige les enfants d'Israel a etre bons envers l'humanite entiere, pas seulement envers leur propre peuple. L'universalite de l'obligation est significative.",
              axe2_voisins: "Les clauses precedentes concernaient des categories specifiques. La clause de la bonne parole s'adresse a tous les gens (al-nas). Le passage du specifique a l'universel montre que le pacte ne se limite pas au cercle familial.",
              axe3_sourate: "La racine n-w-s dans la sourate al-Baqarah designe l'humanite. En 2:8, « et parmi les gens (al-nas) ». En 2:21, « O gens (al-nas), adorez votre Seigneur ». La sourate s'adresse a l'humanite entiere.",
              axe4_coherence: "Le mot al-nas apparait 241 fois dans le Coran. C'est le terme generique pour l'humanite. En 49:13, « O gens, Nous vous avons crees d'un male et d'une femelle ». Le Coran s'adresse a l'humanite comme un tout.",
              axe5_frequence: "Pour la mission du khalifa, l'humanite est le champ de la mission. Le khalifa ne sert pas seulement sa communaute — il sert l'humanite entiere par sa bonne parole et ses bonnes actions."
            }
          }
        }
      },
      {
        word_key: "hsn", position: 17, sense_chosen: "bon",
        analysis_axes: {
          concept_chosen: "Excellence morale",
          sense_chosen: "bon",
          concepts: {
            "Excellence morale": {
              status: "retenu",
              senses: ["bien faire", "bienfaisance"],
              proof_ctx: "Le mot husnan est un nom masculin singulier accusatif indefini de la racine h-s-n. Le Lane's donne « goodness, what is good and beautiful, an excellent word ». Husnan ici qualifie la parole — « dites aux gens husnan » signifie une parole bonne et belle. Le tanwin (indefini) suggere une bonte sans limites.",
              axe1_verset: "Le mot husnan est la qualite de la parole ordonnee — la parole doit etre bonne. Le verset ne demande pas simplement de parler mais de parler bien. La bonne parole est une forme d'ihsan (excellence) appliquee a la communication.",
              axe2_voisins: "Le mot ihsanan (position 10) qualifiait l'attitude envers les parents. Le mot husnan (position 17) qualifie la parole envers les gens. La racine h-s-n est utilisee deux fois dans le verset pour deux contextes differents — l'excellence envers les parents et la bonte dans la parole.",
              axe3_sourate: "La racine h-s-n est recurrente dans la sourate pour exprimer l'excellence sous toutes ses formes. L'ihsan (excellence) et le husn (bonte) sont les deux manifestations de la meme racine — l'une pour l'action, l'autre pour la qualite.",
              axe4_coherence: "Le mot husn et ses derives sont utilises dans tout le Coran pour la bonte, la beaute et l'excellence. En 2:263, « une parole convenable et un pardon valent mieux qu'une aumone suivie d'un tort ». La bonne parole est valorisee dans tout le Coran.",
              axe5_frequence: "Pour la mission du khalifa, la bonne parole est une obligation. Le khalifa parle bien — sa parole est belle et bonne. La qualite de la parole reflete la qualite de l'ame."
            },
            "Beauté/Bonté": {
              status: "probable",
              senses: ["être beau", "bon", "excellent"],
              proof_ctx: "Le sens de beaute est le sens premier de h-s-n. Le mot husnan porte le sens de bonte et de beaute — la bonne parole est aussi une belle parole. Le lien est que la bonte et la beaute sont inseparables dans la vision coranique."
            }
          }
        }
      },
      {
        word_key: "qwm", position: 18, sense_chosen: "se lever",
        analysis_axes: {
          concept_chosen: "Peuple/Communauté",
          sense_chosen: "se lever",
          concepts: {
            "Peuple/Communauté": {
              status: "retenu",
              senses: ["peuple", "communauté", "nation", "tribu", "groupe"],
              proof_ctx: "Le verbe aqimuu est un imperatif 2MP forme IV de la racine q-w-m. Le Lane's donne « establish, set up, maintain, perform regularly ». La forme IV (aqama) signifie « faire se tenir debout, etablir ». L'imperatif ordonne d'etablir la priere — la faire se tenir debout, la maintenir regulierement. Le concept retenu est Peuple/Communaute car c'est le concept principal de q-w-m dans la base.",
              axe1_verset: "Le verbe aqimuu introduit la clause de la priere — « et etablissez la priere ». Etablir la priere signifie la maintenir de maniere reguliere et constante, pas simplement la faire de temps en temps. La priere est la deuxieme obligation cultuelle du pacte apres l'adoration exclusive.",
              axe2_voisins: "Les clauses precedentes concernaient les relations sociales (parents, proches, orphelins, necessiteux, gens). La clause de la priere et de la zakat ramene aux obligations cultuelles. Le verset alterne entre le cultuel et le social.",
              axe3_sourate: "La racine q-w-m dans la sourate al-Baqarah porte les sens de verticalite, d'etablissement et de peuple. En 2:3, « et ils etablissent (yuqimuna) la priere ». En 2:43, « et etablissez la priere ». La formule aqimu al-salat est une constante de la sourate.",
              axe4_coherence: "La racine q-w-m apparait 660 fois dans le Coran. La formule aqimu al-salat apparait dans de nombreuses sourates. En 11:114, « et etablis la priere aux deux extremites du jour ». Etablir la priere est un commandement fondamental et recurrent.",
              axe5_frequence: "Pour la mission du khalifa, l'etablissement de la priere est une obligation fondamentale. Le khalifa maintient la priere de maniere reguliere — c'est le lien vertical entre lui et Dieu."
            },
            "Verticalité/Droiture": {
              status: "probable",
              senses: ["se lever", "droit", "se dresser", "corriger", "se tenir debout", "redresser", "rectitude"],
              proof_ctx: "Le sens de verticalite est le sens premier de q-w-m. Le verbe aqama (faire se tenir debout) derive directement de qama (se lever). Etablir la priere c'est la faire se dresser — la maintenir debout et droite."
            }
          }
        }
      },
      {
        word_key: "slw", position: 19, sense_chosen: "priere rituelle",
        analysis_axes: {
          concept_chosen: "Prière/Invocation",
          sense_chosen: "priere rituelle",
          concepts: {
            "Prière/Invocation": {
              status: "retenu",
              senses: ["prier", "prière rituelle", "invoquer", "bénir", "lieu de prière"],
              proof_ctx: "Le mot al-salat est un nom feminin singulier accusatif defini de la racine s-l-w. Le Lane's donne « the ritual prayer, the prescribed prayer, the salah ». Al-salat avec l'article defini designe la priere rituelle prescrite — pas l'invocation spontanee mais la priere structuree avec ses gestes et ses paroles.",
              axe1_verset: "Le mot al-salat est l'objet de l'etablissement — aqimuu al-salat. La priere est la premiere obligation cultuelle concrete du pacte (apres l'adoration de Dieu qui est le principe). Etablir la priere c'est la pratiquer regulierement avec ses conditions et ses piliers.",
              axe2_voisins: "La priere est mentionnee avant la zakat — l'ordre est constant dans le Coran. La priere est le lien vertical (avec Dieu) et la zakat est le lien horizontal (avec les hommes). Les deux ensemble forment le socle des obligations.",
              axe3_sourate: "La racine s-l-w dans la sourate al-Baqarah traite de la priere rituelle. En 2:3, « ceux qui etablissent la priere ». En 2:43, « et etablissez la priere et donnez la zakat ». La formule est repetee comme un refrain dans la sourate.",
              axe4_coherence: "La racine s-l-w apparait 99 fois dans le Coran. La priere (salat) est le pilier central de l'islam. En 29:45, « certes la priere preserve de la turpitude et du blamable ». La priere est le lien entre le serviteur et son Seigneur.",
              axe5_frequence: "Pour la mission du khalifa, la priere est le lien avec Dieu. Le khalifa maintient ce lien par la priere reguliere — c'est la source de sa guidance et de sa force."
            }
          }
        }
      },
      {
        word_key: "aty", position: 20, sense_chosen: "donner",
        analysis_axes: {
          concept_chosen: "Venue/Arrivée",
          sense_chosen: "donner",
          concepts: {
            "Venue/Arrivée": {
              status: "retenu",
              senses: ["arriver", "venir", "apporter", "donner", "commettre"],
              proof_ctx: "Le verbe atuu est un imperatif 2MP forme IV de la racine '-t-y. Le Lane's donne « give, bring, pay, hand over ». La forme IV (ata) signifie « faire venir, donner ». L'imperatif ordonne de donner la zakat — atuu al-zakat. Le verbe ata au sens de donner est directionnel — on fait venir quelque chose vers le destinataire.",
              axe1_verset: "Le verbe atuu introduit la clause de la zakat — « et donnez la purification-dues ». Donner la zakat c'est faire parvenir l'aumone a ses destinataires. La zakat est la derniere obligation cultuelle mentionnee dans le pacte.",
              axe2_voisins: "La priere (position 19) et la zakat (position 21) sont les deux obligations cultuelles concretes du pacte. Le verbe aqimuu (etablir) pour la priere et atuu (donner) pour la zakat distinguent deux modes d'action — maintenir et transmettre.",
              axe3_sourate: "La racine '-t-y dans la sourate al-Baqarah couvre la venue et le don. En 2:43, « et donnez (atuu) la zakat ». En 2:233, « quand vous donnez (ataytum) ce que vous avez promis ». La sourate utilise le verbe ata pour le don concret.",
              axe4_coherence: "La racine '-t-y apparait 550 fois dans le Coran. Le verbe ata couvre la venue, le don et l'apport. En 2:277, « ceux qui croient et font les bonnes oeuvres et etablissent la priere et donnent la zakat ». La formule est constante.",
              axe5_frequence: "Pour la mission du khalifa, le don est une manifestation de la mission. Le khalifa donne — il transmet les biens aux necessiteux par la zakat. Le don est le lien horizontal entre le khalifa et la communaute."
            }
          }
        }
      },
      {
        word_key: "zkw", position: 21, sense_chosen: "aumone legale",
        analysis_axes: {
          concept_chosen: "Purification/Croissance",
          sense_chosen: "aumone legale",
          concepts: {
            "Purification/Croissance": {
              status: "retenu",
              senses: ["purifier", "aumône légale", "croître", "être pur", "prospérer"],
              proof_ctx: "Le mot al-zakat est un nom feminin singulier accusatif defini de la racine z-k-w. Le Lane's donne « the obligatory alms, the purification-dues, the zakah which purifies wealth and makes it grow ». La zakat purifie les biens en les partageant et fait croitre le bien restant. La racine z-k-w porte le double sens de purification et de croissance.",
              axe1_verset: "Le mot al-zakat est la derniere obligation cultuelle concrete du pacte. La zakat purifie les biens et fait croitre la baraka. Le verset enumere les obligations dans un ordre logique : adorer Dieu, etre bons envers les proches, parler bien, prier, donner la zakat.",
              axe2_voisins: "La priere et la zakat sont toujours mentionnees ensemble dans le Coran. La priere est le lien vertical avec Dieu, la zakat est le lien horizontal avec la communaute. Les deux forment le socle de la pratique religieuse.",
              axe3_sourate: "La racine z-k-w dans la sourate al-Baqarah traite de la purification et de l'aumone. En 2:43, « et donnez la zakat ». En 2:110, « et ce que vous donnez de zakat ». En 2:177, « et donner de ses biens ». La sourate fait de la zakat une obligation recurrente.",
              axe4_coherence: "La racine z-k-w apparait 59 fois dans le Coran. La zakat est l'un des cinq piliers de l'islam. En 9:103, « prends de leurs biens une aumone par laquelle tu les purifies ». La zakat purifie le donneur autant que le receveur.",
              axe5_frequence: "Pour la mission du khalifa, la zakat est le partage obligatoire. Le khalifa partage ses biens — la zakat est la manifestation de la solidarite et de la purification des richesses."
            }
          }
        }
      },
      {
        word_key: "w l y", position: 23, sense_chosen: "se detourner",
        analysis_axes: {
          concept_chosen: "Proximité/Alliance",
          sense_chosen: "se detourner",
          concepts: {
            "Proximité/Alliance": {
              status: "retenu",
              senses: ["être proche", "allié", "protecteur", "ami intime"],
              proof_ctx: "Le verbe tawallaytum est un accompli 2MP forme V de la racine w-l-y. Le Lane's donne « you turned away, you turned your backs, you abandoned ». La forme V (tawalla) a le sens de se detourner — tourner le dos, abandonner. C'est l'inverse de la proximite — se detourner c'est rompre le lien. Le concept retenu est Proximite/Alliance car c'est le concept principal de w-l-y.",
              axe1_verset: "Le verbe tawallaytum marque la rupture — « puis vous vous etes detournes ». La particule thumma (puis, ensuite) indique la succession temporelle — apres avoir recu le pacte, ils se sont detournes. Le detournement est la violation du pacte. L'exception illa qalilan (sauf un petit nombre) montre que la majorite a trahi.",
              axe2_voisins: "Les clauses du pacte occupent la premiere partie du verset. Le detournement est la conclusion — malgre le pacte, ils se sont detournes. Le verset 84 rappellera un second pacte egalement viole. La repetition souligne la recidive.",
              axe3_sourate: "La racine w-l-y dans la sourate al-Baqarah traite de la proximite et du detournement. En 2:257, « Dieu est le protecteur (waliy) de ceux qui croient ». En 2:205, « et quand il se detourne (tawalla) ». La sourate oppose la proximite divine au detournement humain.",
              axe4_coherence: "La racine w-l-y apparait 233 fois dans le Coran. La forme V (tawalla) signifie se detourner — c'est le contraire de la proximite. En 3:82, « ceux qui se detournent (tawalla) apres cela sont les pervers ». Le detournement apres le pacte est la pire forme de trahison.",
              axe5_frequence: "Pour la mission du khalifa, le detournement est l'abandon de la mission. Le khalifa qui se detourne du pacte trahit sa charge. Le detournement est l'oppose de la proximite avec Dieu."
            },
            "Autorité/Gestion": {
              status: "probable",
              senses: ["gouverner", "prendre en charge"],
              proof_ctx: "Le sens d'autorite est un autre aspect de w-l-y. Le waliy est celui qui prend en charge. La forme V (tawalla) peut signifier « prendre en charge » ou « se detourner » selon le contexte. Ici le contexte est le detournement — ils ont tourne le dos au pacte."
            }
          }
        }
      },
      {
        word_key: "qll", position: 25, sense_chosen: "etre peu",
        analysis_axes: {
          concept_chosen: "Quantité/Rareté",
          sense_chosen: "etre peu",
          concepts: {
            "Quantité/Rareté": {
              status: "retenu",
              senses: ["être peu", "diminuer", "peu nombreux", "rare"],
              proof_ctx: "Le mot qalilan est un nom masculin singulier accusatif indefini de la racine q-l-l. Le Lane's donne « a few, a small number, a little ». Le mot est a l'accusatif d'exception — sauf un petit nombre d'entre vous. L'indefini (tanwin) souligne l'indetermination — un petit nombre non specifie.",
              axe1_verset: "Le mot qalilan est l'exception dans le detournement — « puis vous vous etes detournes sauf un petit nombre ». La majorite s'est detournee, seule une minorite est restee fidele. Le mot souligne l'isolement des fideles parmi les desobeissants.",
              axe2_voisins: "Le verset 83 constate la violation du pacte par la majorite. Le verset 84 constatera la violation d'un second pacte. Les rares fideles sont l'exception qui confirme la regle de la desobeissance generalisee.",
              axe3_sourate: "La racine q-l-l dans la sourate al-Baqarah traite de la rarete et de la faible quantite. En 2:88, « peu est ce qu'ils croient ». La sourate montre que la foi veritable est rare parmi les enfants d'Israel.",
              axe4_coherence: "La racine q-l-l apparait 49 fois dans le Coran. Le mot qalil designe ce qui est rare ou peu nombreux. En 2:246, « quand le combat leur fut prescrit, ils se detournerent sauf un petit nombre ». Le schema du detournement de la majorite et de la fidelite de la minorite est recurrent.",
              axe5_frequence: "Pour la mission du khalifa, la rarete des fideles est une constante. Le khalifa sait que la majorite peut se detourner — il doit rester fidele meme s'il est seul. La rarete n'invalide pas la verite."
            }
          }
        }
      },
      {
        word_key: "erd", position: 28, sense_chosen: "proposer",
        analysis_axes: {
          concept_chosen: "Présentation/Exposition",
          sense_chosen: "proposer",
          concepts: {
            "Présentation/Exposition": {
              status: "retenu",
              senses: ["montrer", "proposer", "exposer", "parler indirectement"],
              proof_ctx: "Le mot mu'riduna est un participe actif masculin pluriel nominatif forme IV de la racine '-r-d. Le Lane's donne « those who turn away, those who avert themselves, those who refuse ». La forme IV (a'rada) signifie « se detourner, refuser, tourner le dos ». Le participe actif designe un etat permanent — ils sont dans l'etat de refus. Le concept retenu est Presentation/Exposition car c'est le concept le plus applicable pour la forme IV.",
              axe1_verset: "Le mot mu'riduna cloture le verset par le constat du refus permanent. La phrase wa-antum mu'riduna (et vous etes ceux qui refusez) est une phrase nominale qui designe un etat — pas une action ponctuelle mais un etat permanent de refus. Le present souligne que le refus continue au moment de la revelation.",
              axe2_voisins: "Le verset 83 commence par le rappel du pacte et se termine par le constat de la violation. Le passage du passe (tawallaytum) au present (mu'riduna) montre la continuite — ils se sont detournes et continuent de refuser. Le verset 84 rappellera un second pacte egalement viole.",
              axe3_sourate: "La racine '-r-d dans la sourate al-Baqarah traite du refus et du detournement. Le participe mu'rid designe celui qui se detourne volontairement — c'est un choix delibere, pas une negligence. La sourate montre que la desobeissance est un choix permanent.",
              axe4_coherence: "La racine '-r-d apparait 85 fois dans le Coran. Le verbe a'rada forme IV signifie « se detourner de, refuser, tourner le dos a ». En 4:128, « si une femme craint de son mari un refus (i'radan) ». Le refus est un acte volontaire de rupture.",
              axe5_frequence: "Pour la mission du khalifa, le refus est l'echec de la mission. Le khalifa qui refuse le pacte divin perd sa charge. Le participe mu'rid designe un etat permanent de refus — le contraire de la soumission."
            }
          }
        }
      }
    ]
  },

  // =====================================================
  // VERSET 2:84
  // verse_id=91, analysis_id=450
  // "Et quand Nous primes votre pacte : vous ne verserez pas votre sang
  //  et vous ne vous expulserez pas de vos demeures. Puis vous avez
  //  confirme et vous en temoignez."
  // =====================================================
  84: {
    verse_id: 91,
    analysis_id: 450,
    translation_arab: "Et quand Nous primes votre pacte : vous ne verserez pas votre sang et vous ne vous expulserez pas de vos demeures. Puis vous avez confirme et vous en temoignez.",
    full_translation: "Et quand Nous primes votre pacte : vous ne verserez pas votre sang et vous ne vous expulserez pas [les uns les autres] de vos demeures. Puis vous avez confirme [cela] et vous en temoignez.",
    translation_explanation: `§DEMARCHE§
Ce verset rappelle un second pacte pris avec les enfants d'Israel. Le verbe **akhadhna** est un accompli 1P de la racine '-kh-dh. Le Lane's donne « We took ». Meme formule que le verset 83 — Dieu rappelle la prise du pacte. Le mot **mithaqakum** est un nom avec pronom 2MP de la racine w-th-q. Le Lane's donne « your covenant, your compact ». Le pronom 2MP (votre) rend le pacte plus direct — « votre pacte » au lieu de « le pacte des enfants d'Israel ». Le verbe **tasfukuna** est un inaccompli 2MP de la racine s-f-k. Le Lane's donne « you shed, you pour out ». La negation la precede — vous ne verserez pas. Le verbe saface designe l'effusion de sang — faire couler le sang violemment. Le mot **dima'akum** est un nom masculin pluriel accusatif avec pronom 2MP de la racine d-m-w. Le Lane's donne « your blood, your bloods ». Le pluriel des sangs et le pronom « vos » signifient « le sang les uns des autres ». Le verbe **tukhrijuna** est un inaccompli 2MP forme IV de la racine kh-r-j. Le Lane's donne « you expel, you drive out ». La forme IV (causatif) signifie « faire sortir, expulser ». La negation la precede — vous ne vous expulserez pas. Le mot **anfusakum** est un nom feminin pluriel accusatif avec pronom 2MP de la racine n-f-s. Le Lane's donne « yourselves, your persons ». Anfusakum signifie « vous-memes » — vous n'expulserez pas vous-memes, c'est-a-dire les uns les autres. Le mot **diyarikum** est un nom feminin pluriel genitif avec pronom 2MP de la racine d-w-r. Le Lane's donne « your dwellings, your homes ». Les demeures sont les lieux d'habitation. Le verbe **aqrartum** est un accompli 2MP forme IV de la racine q-r-r. Le Lane's donne « you confirmed, you acknowledged, you ratified ». La forme IV signifie « confirmer, ratifier, reconnaitre comme vrai ». Les enfants d'Israel ont confirme le pacte. Le mot **tashhuduna** est un inaccompli 2MP de la racine sh-h-d. Le Lane's donne « you bear witness, you testify ». Le present indique que le temoignage est actuel — vous en temoignez encore au moment de la revelation.

§JUSTIFICATION§
**primes** — Le sens retenu est « prendre ». Meme verbe que verset 83.

**votre pacte** — Le sens retenu est « pacte ». Le mot mithaqakum avec pronom 2MP rend l'engagement direct et personnel.

**ne verserez pas** — Le sens retenu est « verser ». Le verbe tasfukuna designe l'effusion de sang.

**votre sang** — Le sens retenu est « sang ». Le mot dima'akum designe le sang des uns et des autres.

**ne vous expulserez pas** — Le sens retenu est « faire sortir ». Le verbe tukhrijuna forme IV designe l'expulsion forcee.

**vous-memes** — Le sens retenu est « ame ». Le mot anfusakum designe les personnes — « vous-memes » c'est-a-dire « les uns les autres ».

**de vos demeures** — Le sens retenu est « maison ». Le mot diyarikum designe les habitations.

**vous avez confirme** — Le sens retenu est « etre stable ». Le verbe aqrartum forme IV signifie « confirmer, ratifier ».

§CRITIQUE§
**vous ne verserez pas votre sang** — Le mot dima' (sangs) est au pluriel — les sangs de tous les membres de la communaute. Le pronom « votre » rend l'interdiction reflexive — vous ne verserez pas le sang les uns des autres. L'interdiction couvre tout acte de violence interne.
**vous ne vous expulserez pas** — Le mot anfusakum (vous-memes) rend l'interdiction reciproque — vous n'expulserez pas les uns les autres. L'expulsion est une forme de violence sociale — priver quelqu'un de sa demeure.
**puis vous avez confirme** — La particule thumma (puis) marque la succession — apres avoir pris le pacte, ils l'ont confirme. Le verbe aqrara forme IV signifie « rendre stable, confirmer ». Ils ont ratifie le pacte de maniere ferme.
**et vous en temoignez** — Le verbe tashhuduna est au present — ils temoignent encore au moment de la revelation. Le temoignage est actuel — ils ne peuvent pas nier avoir accepte le pacte.`,
    segments: [
      { fr: "et quand", phon: "wa-idh", arabic: "\u0648\u064e\u0625\u0650\u0630\u0652", is_particle: true, position: 0 },
      { fr: "Nous primes", pos: "verbe", phon: "akhadhna", arabic: "\u0623\u064e\u062e\u064e\u0630\u0652\u0646\u064e\u0627", word_key: "akhz", is_particle: false, sense_retenu: "prendre", position: 1 },
      { fr: "votre pacte", pos: "nom", phon: "mithaqakum", arabic: "\u0645\u0650\u064a\u062b\u064e\u0670\u0642\u064e\u0643\u064f\u0645\u0652", word_key: "wthq", is_particle: false, sense_retenu: "pacte", position: 2 },
      { fr: "pas", phon: "la", arabic: "\u0644\u064e\u0627", is_particle: true, position: 3 },
      { fr: "vous ne verserez pas", pos: "verbe", phon: "tasfukuna", arabic: "\u062a\u064e\u0633\u0652\u0641\u0650\u0643\u064f\u0648\u0646\u064e", word_key: "sfk", is_particle: false, sense_retenu: "verser", position: 4 },
      { fr: "votre sang", pos: "nom", phon: "dima'akum", arabic: "\u062f\u0650\u0645\u064e\u0622\u0621\u064e\u0643\u064f\u0645\u0652", word_key: "dmw", is_particle: false, sense_retenu: "sang", position: 5 },
      { fr: "et pas", phon: "wa-la", arabic: "\u0648\u064e\u0644\u064e\u0627", is_particle: true, position: 6 },
      { fr: "vous n'expulserez pas", pos: "verbe", phon: "tukhrijuna", arabic: "\u062a\u064f\u062e\u0652\u0631\u0650\u062c\u064f\u0648\u0646\u064e", word_key: "xrj", is_particle: false, sense_retenu: "faire sortir", position: 7 },
      { fr: "vous-memes", pos: "nom", phon: "anfusakum", arabic: "\u0623\u064e\u0646\u0641\u064f\u0633\u064e\u0643\u064f\u0645", word_key: "nfs", is_particle: false, sense_retenu: "ame", position: 8 },
      { fr: "de", phon: "min", arabic: "\u0645\u0651\u0650\u0646", is_particle: true, position: 9 },
      { fr: "vos demeures", pos: "nom", phon: "diyarikum", arabic: "\u062f\u0650\u064a\u064e\u0670\u0631\u0650\u0643\u064f\u0645\u0652", word_key: "dwr", is_particle: false, sense_retenu: "maison", position: 10 },
      { fr: "puis", phon: "thumma", arabic: "\u062b\u064f\u0645\u0651\u064e", is_particle: true, position: 11 },
      { fr: "vous avez confirme", pos: "verbe", phon: "aqrartum", arabic: "\u0623\u064e\u0642\u0652\u0631\u064e\u0631\u0652\u062a\u064f\u0645\u0652", word_key: "qrr", is_particle: false, sense_retenu: "etre stable", position: 12 },
      { fr: "et vous", phon: "wa-antum", arabic: "\u0648\u064e\u0623\u064e\u0646\u062a\u064f\u0645\u0652", is_particle: true, position: 13 },
      { fr: "en temoignez", phon: "tashhuduna", arabic: "\u062a\u064e\u0634\u0652\u0647\u064e\u062f\u064f\u0648\u0646\u064e", is_particle: true, position: 14 }
    ],
    words: [
      {
        word_key: "akhz", position: 1, sense_chosen: "prendre",
        analysis_axes: {
          concept_chosen: "Prise/Saisie",
          sense_chosen: "prendre",
          concepts: {
            "Prise/Saisie": {
              status: "retenu",
              senses: ["prendre", "saisir", "adopter"],
              proof_ctx: "Le verbe akhadhna est un accompli 1P de la racine '-kh-dh. Le Lane's donne « We took, We seized ». Meme verbe que le verset 83. La prise du pacte est repetee — Dieu rappelle un second pacte. La repetition souligne l'insistance divine et la gravite de la violation.",
              axe1_verset: "Le verbe akhadhna ouvre le rappel du second pacte. La formule est identique au verset 83 (wa-idh akhadhna) — la repetition cree un parallele entre les deux pactes. Ce second pacte porte sur des interdictions concretes — ne pas verser le sang et ne pas expulser.",
              axe2_voisins: "Le verset 83 rappelait le premier pacte (adorer Dieu, etre bon, prier, donner la zakat). Ce verset 84 rappelle le second pacte (ne pas tuer, ne pas expulser). Les deux pactes sont complementaires — le premier pose les obligations, le second pose les interdictions.",
              axe3_sourate: "La formule wa-idh akhadhna est repetee dans la sourate pour rappeler les pactes. En 2:63, 2:83, 2:84, 2:93 — chaque occurrence rappelle un engagement viole. La sourate accumule les rappels pour montrer l'ampleur de la trahison.",
              axe4_coherence: "La prise du pacte par Dieu est un acte fondateur dans le Coran. En 5:7, « et rappelez-vous le bienfait de Dieu sur vous et Son pacte qu'Il a pris avec vous ». Le pacte lie les parties de maniere irrevocable.",
              axe5_frequence: "Pour la mission du khalifa, la multiplication des pactes souligne la gravite de la mission. Le khalifa est lie par de nombreux engagements — violer un seul est une trahison, les violer tous est une catastrophe."
            },
            "Châtiment": {
              status: "nul",
              senses: ["punir", "reprocher"],
              proof_ctx: "Le sens de chatiment est ecarte — le contexte est la prise d'un pacte, pas un chatiment."
            }
          }
        }
      },
      {
        word_key: "wthq", position: 2, sense_chosen: "pacte",
        analysis_axes: {
          concept_chosen: "Fermeté/Confiance",
          sense_chosen: "pacte",
          concepts: {
            "Fermeté/Confiance": {
              status: "retenu",
              senses: ["lier solidement", "être solide", "avoir confiance", "pacte", "se garantir", "être ferme"],
              proof_ctx: "Le mot mithaqakum est un nom avec pronom 2MP de la racine w-th-q. Le Lane's donne « your covenant ». La difference avec le verset 83 est le pronom — mithaqakum (votre pacte) au lieu de mithaq bani Isra'il (le pacte des enfants d'Israel). Le pronom 2MP rend l'adresse directe et personnelle.",
              axe1_verset: "Le mot mithaqakum rend le pacte personnel — « votre pacte ». L'adresse directe accentue la responsabilite — ce n'est pas un pacte abstrait mais votre engagement personnel. Les clauses qui suivent sont des interdictions concretes — ne pas verser le sang, ne pas expulser.",
              axe2_voisins: "Le verset 83 utilisait mithaq bani Isra'il (troisieme personne). Ce verset 84 utilise mithaqakum (deuxieme personne). Le passage de la troisieme a la deuxieme personne rend l'adresse plus directe et plus accusatrice.",
              axe3_sourate: "Le mot mithaq est repete dans la sourate pour marteler les engagements violes. Chaque repetition ajoute une couche de responsabilite — les enfants d'Israel ne peuvent pas pretendre ignorer leurs obligations.",
              axe4_coherence: "Le pacte dans le Coran est toujours solennel et contraignant. Le pronom possessif (votre) rend l'engagement intime — ce n'est pas un pacte lointain mais le votre, que vous avez personnellement accepte.",
              axe5_frequence: "Pour la mission du khalifa, le pacte personnel est l'engagement intime. Le khalifa est personnellement lie — le pacte n'est pas une abstraction mais un engagement qui le concerne directement."
            }
          }
        }
      },
      {
        word_key: "sfk", position: 4, sense_chosen: "verser",
        analysis_axes: {
          concept_chosen: "Violence/Sang",
          sense_chosen: "verser",
          concepts: {
            "Violence/Sang": {
              status: "retenu",
              senses: ["faire couler le sang", "effusion de sang"],
              proof_ctx: "Le verbe tasfukuna est un inaccompli 2MP de la racine s-f-k. Le Lane's donne « you shed, you pour out (blood) ». Le verbe safaka designe specifiquement l'effusion de sang — faire couler le sang violemment. La negation la tasfukuna (vous ne verserez pas) est une interdiction absolue du meurtre interne.",
              axe1_verset: "Le verbe tasfukuna est la premiere interdiction du pacte — ne pas verser le sang. L'interdiction est formulee a la deuxieme personne du pluriel — c'est un commandement direct. Le complement dima'akum (votre sang) rend l'interdiction reciproque — ne versez pas le sang les uns des autres.",
              axe2_voisins: "Le verset 83 posait les obligations positives du pacte. Ce verset 84 pose les interdictions — ne pas tuer et ne pas expulser. Le verset 85 montrera que ces interdictions ont ete violees.",
              axe3_sourate: "La racine s-f-k n'apparait qu'une fois dans la sourate, ici en 2:84. En 2:30, les anges s'interrogent « vas-Tu y placer quelqu'un qui y seme la corruption et verse le sang (yasfiku al-dima') ? ». Le lien entre 2:30 et 2:84 est frappant — les enfants d'Israel font exactement ce que les anges craignaient.",
              axe4_coherence: "La racine s-f-k apparait 2 fois dans le Coran — en 2:30 (les anges) et 2:84 (le pacte). Le verbe safaka est specifique a l'effusion de sang — il ne s'utilise pas pour d'autres liquides. L'interdiction de verser le sang est fondamentale dans la Loi divine.",
              axe5_frequence: "Pour la mission du khalifa, l'interdiction de verser le sang est la premiere regle. Le khalifa protege la vie — il ne verse pas le sang des siens. La question des anges (yasfiku al-dima') trouve sa reponse dans le pacte — le khalifa ne doit pas verser le sang."
            },
            "Écoulement/Effusion": {
              status: "probable",
              senses: ["verser", "répandre"],
              proof_ctx: "Le sens d'ecoulement est le sens general de s-f-k — verser un liquide. Le contexte specifie le liquide — le sang (dima'). L'effusion de sang est la forme violente de l'ecoulement."
            }
          }
        }
      },
      {
        word_key: "dmw", position: 5, sense_chosen: "sang",
        analysis_axes: {
          concept_chosen: "Sang/Vie",
          sense_chosen: "sang",
          concepts: {
            "Sang/Vie": {
              status: "retenu",
              senses: ["sang", "saigner", "ensanglanté"],
              proof_ctx: "Le mot dima'akum est un nom masculin pluriel accusatif avec pronom 2MP de la racine d-m-w. Le Lane's donne « your bloods, your blood ». Le pluriel dima' (sangs) designe le sang de tous les membres de la communaute. Le pronom 2MP (votre) rend l'interdiction reciproque — le sang des uns et des autres.",
              axe1_verset: "Le mot dima'akum est l'objet de l'interdiction — ne versez pas votre sang. Le pluriel souligne la multiplicite des victimes potentielles — le sang de chaque membre de la communaute est protege. Le pronom possessif rend le sang sacre — c'est « votre » sang, celui de votre propre communaute.",
              axe2_voisins: "Le verset 83 parlait des obligations positives. Ce verset 84 ajoute les interdictions negatives. L'interdiction de verser le sang precede celle d'expulser — la vie passe avant la demeure. L'ordre est significatif — proteger la vie est plus important que proteger l'habitat.",
              axe3_sourate: "La racine d-m-w dans la sourate al-Baqarah traite du sang et de la vie. En 2:30, « qui verse le sang (yasfiku al-dima') ». En 2:84, l'interdiction de verser le sang. La sourate lie la question du sang a la mission du khalifa.",
              axe4_coherence: "La racine d-m-w apparait 9 fois dans le Coran. Le mot dam (sang) designe le liquide vital. En 5:3, « le sang verse (al-dam al-masfuh) » est interdit a la consommation. Le sang est sacre — le verser est un crime, le consommer est interdit.",
              axe5_frequence: "Pour la mission du khalifa, le sang est sacre. Le khalifa protege la vie — le sang des membres de la communaute est inviolable. Verser le sang est la pire violation du pacte."
            }
          }
        }
      },
      {
        word_key: "xrj", position: 7, sense_chosen: "faire sortir",
        analysis_axes: {
          concept_chosen: "Sortie/Émergence",
          sense_chosen: "faire sortir",
          concepts: {
            "Sortie/Émergence": {
              status: "retenu",
              senses: ["sortir", "faire sortir", "expulser", "émerger", "produire"],
              proof_ctx: "Le verbe tukhrijuna est un inaccompli 2MP forme IV de la racine kh-r-j. Le Lane's donne « you expel, you drive out, you cause to go out ». La forme IV (akhraja) est causative — faire sortir, expulser. La negation la tukhrijuna (vous n'expulserez pas) interdit l'expulsion des membres de la communaute de leurs demeures.",
              axe1_verset: "Le verbe tukhrijuna est la seconde interdiction du pacte — ne pas expulser. L'expulsion est presentee comme un acte de violence sociale — priver quelqu'un de sa demeure est une forme de persecution. Le complement anfusakum (vous-memes) rend l'interdiction reciproque — vous n'expulserez pas les uns les autres.",
              axe2_voisins: "L'interdiction de verser le sang (position 4) precede l'interdiction d'expulser (position 7). Les deux forment un couple — la violence physique (meurtre) et la violence sociale (expulsion). Le verset 85 montrera que les enfants d'Israel ont viole les deux interdictions.",
              axe3_sourate: "La racine kh-r-j dans la sourate al-Baqarah porte le sens de sortie et d'expulsion. En 2:85, « et vous expulsiez (tukhrijuna) un groupe d'entre vous de leurs demeures ». Le verset 85 constatera la violation de cette interdiction.",
              axe4_coherence: "La racine kh-r-j apparait 183 fois dans le Coran. Le verbe akhraja (faire sortir) est utilise pour l'expulsion physique et spirituelle. En 2:217, « et l'expulsion (ikhraj) de ses habitants est plus grave que le meurtre ». Le Coran place l'expulsion au meme niveau que le meurtre.",
              axe5_frequence: "Pour la mission du khalifa, l'interdiction d'expulser protege la communaute. Le khalifa ne prive personne de sa demeure — l'expulsion est une violation du pacte social."
            },
            "Tribut/Revenu": {
              status: "nul",
              senses: ["impôt", "revenu"],
              proof_ctx: "Le sens de tribut est un autre aspect de kh-r-j. Le contexte est l'expulsion (faire sortir de la demeure), pas le prelevement fiscal."
            }
          }
        }
      },
      {
        word_key: "nfs", position: 8, sense_chosen: "ame",
        analysis_axes: {
          concept_chosen: "Âme/Être",
          sense_chosen: "ame",
          concepts: {
            "Âme/Être": {
              status: "retenu",
              senses: ["désir", "âme", "personne", "esprit", "soi-même"],
              proof_ctx: "Le mot anfusakum est un nom feminin pluriel accusatif avec pronom 2MP de la racine n-f-s. Le Lane's donne « yourselves, your persons, your own selves ». Le pluriel anfus avec le pronom 2MP signifie « vous-memes » — c'est-a-dire les uns les autres. La construction tukhrijuna anfusakum (vous n'expulserez pas vous-memes) rend l'interdiction reciproque.",
              axe1_verset: "Le mot anfusakum est le complement d'objet de tukhrijuna — vous n'expulserez pas vous-memes. Le pronom reflexif rend l'interdiction reciproque — expulser un membre de la communaute c'est s'expulser soi-meme. La solidarite communautaire est le principe — ce que vous faites aux autres, vous le faites a vous-memes.",
              axe2_voisins: "Le verset 83 utilisait le meme principe de reciprocite implicite. Ce verset 84 rend la reciprocite explicite avec anfusakum. Le verset 85 montrera que cette reciprocite a ete violee.",
              axe3_sourate: "La racine n-f-s dans la sourate al-Baqarah traite de l'ame et de la personne. En 2:48, « aucune ame (nafs) ne beneficiera d'une autre ». En 2:233, « aucune ame n'est chargee au-dela de sa capacite ». La sourate montre que chaque ame est responsable — et que les ames sont liees les unes aux autres.",
              axe4_coherence: "La racine n-f-s apparait 298 fois dans le Coran. Le mot nafs couvre l'ame, la personne et le soi. La formule anfusakum (vous-memes) est utilisee pour la reciprocite — ce que vous faites aux autres vous le faites a vos propres ames.",
              axe5_frequence: "Pour la mission du khalifa, la reciprocite est le principe de la communaute. Le khalifa sait que le mal fait aux autres est un mal fait a soi-meme. La solidarite communautaire est la base de la mission."
            }
          }
        }
      },
      {
        word_key: "dwr", position: 10, sense_chosen: "maison",
        analysis_axes: {
          concept_chosen: "Demeure",
          sense_chosen: "maison",
          concepts: {
            "Demeure": {
              status: "retenu",
              senses: ["maison", "demeure"],
              proof_ctx: "Le mot diyarikum est un nom feminin pluriel genitif avec pronom 2MP de la racine d-w-r. Le Lane's donne « your dwellings, your homes, your abodes ». Le pluriel diyar designe les demeures — les lieux d'habitation de la communaute. Le pronom 2MP (vos) rend les demeures personnelles — ce sont vos maisons, celles de votre communaute.",
              axe1_verset: "Le mot diyarikum est le complement de lieu de tukhrijuna — vous n'expulserez pas les uns les autres de vos demeures. La demeure est le lieu de securite et de stabilite — l'en priver est un acte de violence. Le pluriel souligne que toutes les demeures de la communaute sont protegees.",
              axe2_voisins: "L'interdiction de verser le sang protege la vie. L'interdiction d'expulser des demeures protege l'habitat. Les deux interdictions couvrent les deux aspects fondamentaux de la securite — la vie et le domicile.",
              axe3_sourate: "La racine d-w-r dans la sourate al-Baqarah traite de la demeure. En 2:85, « ceux qui expulsent (yukhrijuna) un groupe d'entre vous de leurs demeures (diyarihim) ». La violation de cette interdiction sera constatee au verset suivant.",
              axe4_coherence: "La racine d-w-r apparait 64 fois dans le Coran. Le mot dar (demeure) est fondamental — la demeure terrestre et la demeure de l'au-dela. En 59:9, « ceux qui se sont installes dans la demeure (al-dar) et dans la foi avant eux ». La demeure est le lieu de la stabilite et de la foi.",
              axe5_frequence: "Pour la mission du khalifa, la demeure est le lieu de la mission. Le khalifa protege les demeures de sa communaute — priver quelqu'un de sa maison est une trahison du pacte."
            },
            "Cycle/Rotation": {
              status: "probable",
              senses: ["tourner", "cercle"],
              proof_ctx: "Le sens de rotation est le sens premier de d-w-r — tourner en rond. La demeure (dar) derive de ce sens — le lieu autour duquel on tourne, ou l'on revient toujours. Le lien est que la maison est le centre du cycle de vie — on en sort et on y revient."
            }
          }
        }
      },
      {
        word_key: "qrr", position: 12, sense_chosen: "etre stable",
        analysis_axes: {
          concept_chosen: "Stabilité/Établissement",
          sense_chosen: "etre stable",
          concepts: {
            "Stabilité/Établissement": {
              status: "retenu",
              senses: ["être stable", "s'établir"],
              proof_ctx: "Le verbe aqrartum est un accompli 2MP forme IV de la racine q-r-r. Le Lane's donne « you confirmed, you acknowledged, you settled upon ». La forme IV (aqarra) signifie « confirmer, ratifier, rendre stable ». L'accompli 2MP indique que la confirmation a eu lieu — ils ont confirme le pacte. Confirmer c'est rendre stable — fixer l'engagement de maniere ferme.",
              axe1_verset: "Le verbe aqrartum marque la confirmation du pacte — « puis vous avez confirme ». La confirmation est un acte volontaire — ils n'ont pas ete forces mais ont confirme de leur plein gre. La suite (wa-antum tashhuduna — et vous en temoignez) ajoute le temoignage au confirmat. Ils ne peuvent nier ni le pacte ni sa confirmation.",
              axe2_voisins: "Le verset 83 constatait le detournement (tawallaytum). Ce verset 84 constate la confirmation (aqrartum). Le paradoxe est qu'ils ont confirme le pacte puis l'ont viole. Le verset 85 montrera la violation en detail.",
              axe3_sourate: "La racine q-r-r dans la sourate al-Baqarah traite de la stabilite et de la confirmation. Le verbe aqarra est utilise ici pour la ratification du pacte. La sourate montre que la confirmation ne garantit pas l'obeissance — on peut confirmer et trahir.",
              axe4_coherence: "La racine q-r-r apparait 37 fois dans le Coran. Le verbe qarra signifie « etre stable ». Le verbe aqarra forme IV signifie « confirmer, ratifier ». En 3:81, « Il dit : confirmez-vous (a-aqrartum) et prenez-vous Mon pacte ? Ils dirent : nous confirmons ». Le schema est le meme — confirmation suivie de violation.",
              axe5_frequence: "Pour la mission du khalifa, la confirmation est l'engagement solennel. Le khalifa confirme sa mission — et sa confirmation le lie. Trahir apres avoir confirme est la pire forme de desobeissance."
            },
            "Froid/Fraîcheur": {
              status: "nul",
              senses: ["être froid", "rafraîchir"],
              proof_ctx: "Le sens de froid est un autre aspect de q-r-r. Le contexte est la confirmation du pacte (aqrartum forme IV), pas le refroidissement."
            },
            "Aveu/Reconnaissance": {
              status: "nul",
              senses: ["avouer"],
              proof_ctx: "Le sens d'aveu est un sens connexe de q-r-r. Le verbe aqrara peut signifier « avouer, reconnaitre ». Ici le sens est la confirmation du pacte — reconnaitre son engagement."
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
  // ksb (id=647) — acquisition
  { analysis_id: 647, phrases: [
    { sense: "acquérir", arabic: "\u0643\u064f\u0644\u0651\u064f \u0646\u064e\u0641\u0652\u0633\u064d \u0628\u0650\u0645\u064e\u0627 \u0643\u064e\u0633\u064e\u0628\u064e\u062a\u0652 \u0631\u064e\u0647\u0650\u064a\u0646\u064e\u0629\u064c", phon: "kullu nafsin bima kasabat rahinatun", french: "Chaque ame est otage de ce qu'elle a acquis." },
    { sense: "gagner", arabic: "\u0644\u064e\u0647\u064e\u0627 \u0645\u064e\u0627 \u0643\u064e\u0633\u064e\u0628\u064e\u062a\u0652 \u0648\u064e\u0639\u064e\u0644\u064e\u064a\u0652\u0647\u064e\u0627 \u0645\u064e\u0627 \u0671\u0643\u0652\u062a\u064e\u0633\u064e\u0628\u064e\u062a\u0652", phon: "laha ma kasabat wa-'alayha ma iktasabat", french: "Pour elle ce qu'elle a gagne et contre elle ce qu'elle s'est acquis." },
    { sense: "mériter", arabic: "\u0628\u064e\u0644\u064e\u0649\u0670 \u0645\u064e\u0646 \u0643\u064e\u0633\u064e\u0628\u064e \u0633\u064e\u064a\u0651\u0650\u0626\u064e\u0629\u064b", phon: "bala man kasaba sayyi'atan", french: "Oui, celui qui acquiert un mal." }
  ]},
  // hwt (id=365) — encerclement
  { analysis_id: 365, phrases: [
    { sense: "entourer", arabic: "\u0648\u064e\u0623\u064e\u062d\u064e\u0670\u0637\u064e\u062a\u0652 \u0628\u0650\u0647\u0650 \u062e\u064e\u0637\u0650\u064a\u0653\u0640\u0654\u062a\u064f\u0647\u064f", phon: "wa-ahatat bihi khatiy'atuhu", french: "Et sa faute l'encercle." },
    { sense: "englober", arabic: "\u0648\u064e\u0627\u0644\u0644\u0651\u064e\u0647\u064f \u0645\u064f\u062d\u0650\u064a\u0637\u064c \u0628\u0650\u0627\u0644\u0652\u0643\u064e\u0627\u0641\u0650\u0631\u0650\u064a\u0646\u064e", phon: "wa-Allahu muhitun bi-al-kafirina", french: "Et Dieu encercle les negateurs." },
    { sense: "encercler", arabic: "\u0625\u0650\u0646\u0651\u064e \u062c\u064e\u0647\u064e\u0646\u0651\u064e\u0645\u064e \u0644\u064e\u0645\u064f\u062d\u0650\u064a\u0637\u064e\u0629\u064c \u0628\u0650\u0627\u0644\u0652\u0643\u064e\u0627\u0641\u0650\u0631\u0650\u064a\u0646\u064e", phon: "inna jahannama la-muhitatun bi-al-kafirina", french: "Certes la Gehenne encerclera les negateurs." }
  ]},
  // ytm (id=664) — orphelin
  { analysis_id: 664, phrases: [
    { sense: "orphelin", arabic: "\u0641\u064e\u0623\u064e\u0645\u0651\u064e\u0627 \u0671\u0644\u0652\u064a\u064e\u062a\u0650\u064a\u0645\u064e \u0641\u064e\u0644\u064e\u0627 \u062a\u064e\u0642\u0652\u0647\u064e\u0631\u0652", phon: "fa-amma al-yatima fa-la taqhar", french: "Quant a l'orphelin, ne le maltraite pas." },
    { sense: "être orphelin", arabic: "\u0648\u064e\u064a\u064e\u0633\u0652\u0640\u0654\u0644\u064f\u0648\u0646\u064e\u0643\u064e \u0639\u064e\u0646\u0650 \u0671\u0644\u0652\u064a\u064e\u062a\u064e\u0670\u0645\u064e\u0649\u0670", phon: "wa-yas'alunaka 'ani al-yatama", french: "Et ils t'interrogent au sujet des orphelins." },
    { sense: "unique", arabic: "\u062f\u064f\u0631\u0651\u064e\u0629\u064c \u064a\u064e\u062a\u0650\u064a\u0645\u064e\u0629\u064c \u0644\u064e\u0627 \u0645\u064e\u062b\u0650\u064a\u0644\u064e \u0644\u064e\u0647\u064e\u0627", phon: "durratun yatimatun la mathila laha", french: "Une perle unique, sans pareille." }
  ]},
  // sfk (id=438) — verser le sang
  { analysis_id: 438, phrases: [
    { sense: "effusion de sang", arabic: "\u0648\u064e\u064a\u064e\u0633\u0652\u0641\u0650\u0643\u064f \u0671\u0644\u062f\u0651\u0650\u0645\u064e\u0627\u0621\u064e", phon: "wa-yasfiku al-dima'a", french: "Et il verse le sang." },
    { sense: "verser", arabic: "\u0644\u064e\u0627 \u062a\u064e\u0633\u0652\u0641\u0650\u0643\u064f\u0648\u0646\u064e \u062f\u0650\u0645\u064e\u0627\u0621\u064e\u0643\u064f\u0645\u0652", phon: "la tasfukuna dima'akum", french: "Vous ne verserez pas votre sang." },
    { sense: "répandre", arabic: "\u0633\u064e\u0641\u064e\u0643\u064e \u062f\u064e\u0645\u064e\u0647\u064f \u0638\u064f\u0644\u0652\u0645\u064b\u0627", phon: "safaka damahu zulman", french: "Il repandit son sang injustement." }
  ]},
  // qrr (id=459) — stabilite
  { analysis_id: 459, phrases: [
    { sense: "être stable", arabic: "\u062b\u064f\u0645\u0651\u064e \u0623\u064e\u0642\u0652\u0631\u064e\u0631\u0652\u062a\u064f\u0645\u0652 \u0648\u064e\u0623\u064e\u0646\u062a\u064f\u0645\u0652 \u062a\u064e\u0634\u0652\u0647\u064e\u062f\u064f\u0648\u0646\u064e", phon: "thumma aqrartum wa-antum tashhuduna", french: "Puis vous avez confirme et vous en temoignez." },
    { sense: "s'établir", arabic: "\u0648\u064e\u0642\u064e\u0631\u0651\u064e \u0641\u0650\u064a \u0671\u0644\u0652\u0623\u064e\u0631\u0652\u0636\u0650", phon: "wa-qarra fi al-ard", french: "Et il s'est etabli sur la terre." },
    { sense: "être stable", arabic: "\u0642\u064f\u0631\u0651\u064e\u0629\u064f \u0639\u064e\u064a\u0652\u0646\u064d \u0644\u0650\u064a \u0648\u064e\u0644\u064e\u0643\u064e", phon: "qurratu 'aynin li wa-laka", french: "Fraicheur des yeux pour moi et pour toi." }
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

  const verseIds = [88, 89, 90, 91];
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
  console.log('=== PIPELINE SOURATE 2 — AL-BAQARAH — VERSETS 81 A 84 ===\n');

  let totalOk = 0, totalErr = 0;

  for (let v = 81; v <= 84; v++) {
    const result = await processVerse(v);
    if (result) {
      totalOk += result.okCount;
      totalErr += result.errCount;
    }
  }

  await syncWordMeanings();
  await insertDailyPhrases();

  console.log(`\n=== PIPELINE V81-84 TERMINEE — TOTAL: ${totalOk} OK, ${totalErr} erreurs ===`);
}

main().catch(e => console.error('FATAL:', e));
