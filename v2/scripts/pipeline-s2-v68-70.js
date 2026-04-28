const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// =====================================================
// PIPELINE SOURATE 2 — AL-BAQARAH — VERSETS 68 À 70
// verse_id=75 (2:68), verse_id=76 (2:69), verse_id=77 (2:70)
// =====================================================
// CRITICAL: concept names and senses are read from DB (concepts JSON)
// =====================================================

const verseData = {

  // =====================================================
  // VERSET 2:68
  // verse_id=75, analysis_id=435
  // "Ils dirent : Invoque pour nous ton Seigneur qu'Il nous eclaircisse
  //  ce qu'elle est. Il dit : Il dit que c'est une vache ni vieille
  //  ni jeune, d'age moyen entre cela. Faites donc ce qui vous est ordonne."
  // =====================================================
  68: {
    verse_id: 75,
    analysis_id: 435,
    translation_arab: "Ils dirent : Invoque pour nous ton Seigneur qu'Il nous eclaircisse ce qu'elle est. Il dit : Il dit que c'est une vache ni vieille ni jeune, d'age moyen entre cela. Faites donc ce qui vous est ordonne.",
    full_translation: "Ils dirent : Invoque pour nous ton Seigneur qu'Il nous eclaircisse ce qu'elle est. Il dit : Il dit que c'est une vache ni avancee en age ni trop jeune, [mais] d'age intermediaire entre cela. Faites donc ce qui vous est ordonne.",
    translation_explanation: `§DEMARCHE§
Ce verset rapporte la premiere question des enfants d'Israel concernant la nature de la vache a sacrifier. Le verbe **qaluu** est un accompli 3MP de la racine q-w-l. Le Lane's donne « they said, they spoke ». Ils s'adressent a Moise pour obtenir des precisions. Le verbe **ud'u** est un imperatif 2MS de la racine d-'-w. Le Lane's donne « call upon, invoke, supplicate ». L'imperatif demande a Moise d'invoquer Dieu en leur nom. Le mot **rabbaka** est un nom masculin genitif avec pronom 2MS de la racine r-b-b. Le Lane's donne « thy Lord, thy Master ». Ils disent « ton Seigneur » et non « notre Seigneur » — cette formulation cree une distance entre eux et Dieu. Le verbe **yubayyin** est un inaccompli 3MS forme II de la racine b-y-n. Le Lane's donne « to make clear, to explain, to elucidate ». La forme II (intensif) signifie « rendre clair, eclaircir ». Le mot **baqaratun** est un nom feminin singulier nominatif indefini de la racine b-q-r. Le Lane's donne « cow, heifer ». La vache est l'objet du sacrifice ordonne. Le mot **faridun** est un participe actif singulier de la racine f-r-d. Le Lane's donne « old, aged, advanced in years (said of a cow) ». Le participe decrit une vache avancee en age. Le mot **bikrun** est un nom masculin singulier de la racine b-k-r. Le Lane's donne « young, virgin, that has not borne, a young cow ». Le mot designe une vache jeune qui n'a pas encore mis bas. Le mot **'awanun** est un nom de la racine '-w-n. Le Lane's donne « middle-aged, between old and young ». La vache est d'age intermediaire. Le mot **bayna** est une preposition de la racine b-y-n. Le Lane's donne « between, among ». Le mot indique l'intermediaire. Le verbe **if'aluu** est un imperatif 2MP de la racine f-'-l. Le Lane's donne « do, act, perform ». L'imperatif ordonne l'execution. Le verbe **tu'maruuna** est un inaccompli passif 2MP de la racine a-m-r. Le Lane's donne « you are commanded, you are ordered ». Le passif indique un ordre divin.

§JUSTIFICATION§
**dirent** — Le sens retenu est « dire ». Le verbe qaluu designe la parole des enfants d'Israel qui interrogent Moise. L'alternative « avis » est ecartee car le contexte est une demande directe, pas une opinion.

**invoque** — Le sens retenu est « invoquer ». Le verbe ud'u designe l'acte d'appeler Dieu. L'alternative « pretendre » est ecartee car il s'agit d'une supplication, pas d'une pretention.

**ton Seigneur** — Le sens retenu est « seigneur ». Le mot rabbaka designe Dieu en tant que maitre. L'alternative « augmenter » est ecartee car le mot est ici un nom avec pronom possessif, pas un verbe.

**eclaircisse** — Le sens retenu est « expliquer ». Le verbe yubayyin forme II signifie rendre clair. L'alternative « separer » est ecartee car le contexte est une demande d'explication, pas de separation.

**vache** — Le sens retenu est « vache ». Le mot baqaratun designe l'animal. L'alternative « fendre » est ecartee car le nom feminin singulier designe clairement l'animal dans ce contexte du sacrifice.

**vieille** — Le sens retenu est « obligation ». Le mot faridun dans ce contexte coranique designe une vache avancee en age. Le Lane's donne « old, advanced in years ». L'alternative « prescrire » est ecartee car le mot est ici un adjectif descriptif.

**jeune** — Le sens retenu est « premier-ne ». Le mot bikrun designe une jeune vache qui n'a pas mis bas. L'alternative « matin » est ecartee car le contexte est la description de l'age de la vache.

**d'age moyen** — Le sens retenu est « age moyen ». Le mot 'awanun designe l'intermediaire entre vieille et jeune. L'alternative « aide » est ecartee car le contexte est descriptif (l'age de la vache), pas l'assistance.

**faites** — Le sens retenu est « faire ». Le verbe if'aluu ordonne l'execution. Pas d'alternative pertinente.

**ordonne** — Le sens retenu est « commander ». Le verbe tu'maruuna au passif signifie « ce qui vous est ordonne ». L'alternative « affaire » est ecartee car le verbe au passif designe un ordre recu.

§CRITIQUE§
**ton Seigneur vs notre Seigneur** — Les enfants d'Israel disent « ton Seigneur » (rabbaka) et non « notre Seigneur » (rabbana). Cette formulation met Moise en intermediaire et cree une distance entre eux et Dieu. Ils refusent le lien direct avec Dieu.
**vieille vs obligatoire** — Le mot farid dans le Coran est ici un adjectif descriptif de la vache (agee). Le Lane's confirme cet usage specifique pour les bovins. « Avancee en age » est plus precis que « vieille » qui pourrait impliquer la decrepitude.
**d'age moyen vs intermediaire** — Le mot 'awan designe le milieu entre deux extremes. « D'age intermediaire » est plus precis que « d'age moyen » car il situe exactement la vache entre les deux bornes mentionnees (ni vieille ni jeune).`,
    segments: [
      { fr: "ils dirent", pos: "verbe", phon: "qaluu", arabic: "قَالُوا۟", word_key: "qwl", is_particle: false, sense_retenu: "dire", position: 0 },
      { fr: "invoque", pos: "verbe", phon: "ud'u", arabic: "ٱدْعُ", word_key: "dew", is_particle: false, sense_retenu: "invoquer", position: 1 },
      { fr: "pour nous", phon: "lana", arabic: "لَنَا", is_particle: true, position: 2 },
      { fr: "ton Seigneur", pos: "nom", phon: "rabbaka", arabic: "رَبَّكَ", word_key: "rbb", is_particle: false, sense_retenu: "seigneur", position: 3 },
      { fr: "qu'Il eclaircisse", pos: "verbe", phon: "yubayyin", arabic: "يُبَيِّن", word_key: "byn", is_particle: false, sense_retenu: "expliquer", position: 4 },
      { fr: "pour nous", phon: "lana", arabic: "لَّنَا", is_particle: true, position: 5 },
      { fr: "ce que", phon: "ma", arabic: "مَا", is_particle: true, position: 6 },
      { fr: "elle est", phon: "hiya", arabic: "هِYَ", is_particle: true, position: 7 },
      { fr: "il dit", pos: "verbe", phon: "qala", arabic: "قَالَ", word_key: "qwl", is_particle: false, sense_retenu: "dire", position: 8 },
      { fr: "certes il", phon: "innahu", arabic: "إِنَّهُ،", is_particle: true, position: 9 },
      { fr: "dit", pos: "verbe", phon: "yaqulu", arabic: "يَقُولُ", word_key: "qwl", is_particle: false, sense_retenu: "dire", position: 10 },
      { fr: "certes elle est", phon: "innaha", arabic: "إِنَّهَا", is_particle: true, position: 11 },
      { fr: "une vache", pos: "nom", phon: "baqaratun", arabic: "بَقَرَةٌ", word_key: "bqr", is_particle: false, sense_retenu: "vache", position: 12 },
      { fr: "ni", phon: "la", arabic: "لَّا", is_particle: true, position: 13 },
      { fr: "avancee en age", pos: "adjectif", phon: "faridun", arabic: "فَارِضٌ", word_key: "frd", is_particle: false, sense_retenu: "obligation", position: 14 },
      { fr: "et ni", phon: "wa-la", arabic: "وَلَا", is_particle: true, position: 15 },
      { fr: "jeune", pos: "adjectif", phon: "bikrun", arabic: "بِكْرٌ", word_key: "bkr", is_particle: false, sense_retenu: "premier-né", position: 16 },
      { fr: "d'age intermediaire", pos: "nom", phon: "'awanun", arabic: "عَوَانٌ۞", word_key: "ewn", is_particle: false, sense_retenu: "âge moyen", position: 17 },
      { fr: "entre", phon: "bayna", arabic: "بَيْنَ", word_key: "byn", is_particle: false, sense_retenu: "entre", position: 18 },
      { fr: "cela", phon: "dhalika", arabic: "ذَٰلِكَ", is_particle: true, position: 19 },
      { fr: "faites donc", pos: "verbe", phon: "if'aluu", arabic: "فَٱفْعَلُوا۟", word_key: "fel", is_particle: false, sense_retenu: "faire", position: 20 },
      { fr: "ce que", phon: "ma", arabic: "مَا", is_particle: true, position: 21 },
      { fr: "vous est ordonne", pos: "verbe", phon: "tu'maruuna", arabic: "تُؤْمَرُونَ", word_key: "amr", is_particle: false, sense_retenu: "ordonner", position: 22 }
    ],
    words: [
      {
        word_key: "qwl", position: 0, sense_chosen: "dire",
        analysis_axes: {
          concept_chosen: "Parole/Énonciation",
          concepts: {
            "Parole/Énonciation": {
              status: "retenu",
              senses: ["parole", "discours", "parler", "dire", "affirmer"],
              proof_ctx: "Le verbe qaluu est un accompli 3MP de la racine q-w-l. Le Lane's donne « they said, they spoke ». Les enfants d'Israel s'adressent a Moise pour lui demander d'interroger Dieu. Qaluu introduit la question des enfants d'Israel — c'est une parole d'interrogation et de demande, pas une simple affirmation.",
              axe1_verset: "Le verbe qaluu ouvre le verset par la demande du peuple. La question « qu'est-elle ? » revele leur insatisfaction de l'ordre initial de sacrifier une vache. Ils demandent des precisions au lieu d'executer l'ordre. La parole ici est un instrument de tergiversation — ils parlent au lieu d'agir. Le verset contient trois occurrences de q-w-l (qaluu, qala, yaqulu) qui structurent le dialogue.",
              axe2_voisins: "Le verset 67 rapportait l'ordre initial de sacrifier une vache et la reaction moqueuse du peuple. Ce verset 68 est la premiere question de precision — ils demandent ce qu'est cette vache. Le verset 69 posera la question de la couleur et le verset 70 celle de l'identite precise. La progression montre l'escalade des questions evitant l'obeissance.",
              axe3_sourate: "La racine q-w-l structure toute la narration de la vache dans la sourate al-Baqarah. Chaque verset du recit est un echange parle — les enfants d'Israel parlent et Dieu repond par Moise. La sourate montre que la parole peut servir l'obeissance ou la tergiversation. Les enfants d'Israel utilisent la parole pour retarder l'execution.",
              axe4_coherence: "La racine q-w-l est la plus frequente du Coran avec plus de 1700 occurrences. Le schema qaluu... qala (ils dirent... il dit) est recurrent dans les dialogues prophetiques. En 7:168, le Coran rapporte les questions repetees des enfants d'Israel. La parole de questionnement est une constante de la desobeissance.",
              axe5_frequence: "Pour la mission du khalifa, la parole doit servir l'action, pas la retarder. Les enfants d'Israel parlent au lieu d'agir — ils posent des questions au lieu d'executer l'ordre. Le khalifa qui parle sans agir trahit sa mission. La parole du khalifa doit etre suivie d'actes."
            },
            "Pensée/Avis": {
              status: "nul",
              senses: ["avis", "doctrine", "opinion"],
              proof_ctx: "Le contexte est une parole prononcee a voix haute (ils dirent), pas une pensee interieure. Le verbe qaluu designe l'acte de parler, pas de penser."
            }
          }
        }
      },
      {
        word_key: "dew", position: 1, sense_chosen: "invoquer",
        analysis_axes: {
          concept_chosen: "Appel/Invocation",
          concepts: {
            "Appel/Invocation": {
              status: "retenu",
              senses: ["appeler", "invoquer", "prier", "demander", "inviter"],
              proof_ctx: "Le verbe ud'u est un imperatif 2MS de la racine d-'-w. Le Lane's donne « call upon, invoke, pray to, supplicate ». L'imperatif demande a Moise d'invoquer Dieu en leur faveur. La formule ud'u lana rabbaka (invoque pour nous ton Seigneur) montre que les enfants d'Israel refusent d'invoquer Dieu directement.",
              axe1_verset: "Le verbe ud'u est le deuxieme mot du verset apres qaluu — ils dirent : invoque. La demande d'invocation est immediate et revele une dependance a Moise comme intermediaire. Au lieu de s'adresser a Dieu directement, ils demandent a Moise de le faire. L'invocation est instrumentalisee — elle ne vise pas la devotion mais l'obtention de precisions.",
              axe2_voisins: "Le verset 67 montrait Moise ordonnant le sacrifice. Ce verset 68 montre le peuple renvoyant a Moise la charge d'interroger Dieu. La meme formule ud'u lana rabbaka sera repetee dans les versets 69 et 70 — la repetition souligne l'insistance du peuple a ne pas agir.",
              axe3_sourate: "La racine d-'-w dans la sourate al-Baqarah couvre l'invocation divine et l'appel prophetique. En 2:186, Dieu dit « Je reponds a l'appel de celui qui M'invoque ». La sourate montre que l'invocation directe est la voie correcte — les enfants d'Israel font l'inverse en passant par un intermediaire.",
              axe4_coherence: "La racine d-'-w apparait 212 fois dans le Coran. L'invocation est un acte fondamental du croyant — du'a est le noyau de l'adoration. En 40:60, « Invoquez-Moi, Je vous repondrai ». La demande des enfants d'Israel pervertit l'invocation en l'utilisant comme outil de tergiversation.",
              axe5_frequence: "Pour la mission du khalifa, l'invocation est le lien entre le khalifa et Dieu. Le khalifa doit invoquer Dieu directement, pas passer par un intermediaire. Les enfants d'Israel montrent l'echec de l'invocation indirecte — ils ne se sentent pas concernes par la relation avec Dieu."
            }
          }
        }
      },
      {
        word_key: "rbb", position: 3, sense_chosen: "seigneur",
        analysis_axes: {
          concept_chosen: "Seigneurie/Autorité bienveillante",
          concepts: {
            "Seigneurie/Autorité bienveillante": {
              status: "retenu",
              senses: ["celui qui possède", "maître", "gouverner", "propriétaire", "celui qui élève", "celui qui entretient", "seigneur"],
              proof_ctx: "Le mot rabbaka est un nom masculin genitif avec pronom 2MS de la racine r-b-b. Le Lane's donne « thy Lord, thy Master, He who rears and sustains thee ». Le pronom 2MS (ton) rattache le Seigneur a Moise exclusivement — « ton Seigneur » et non « notre Seigneur ». Cette formulation revele la distance que les enfants d'Israel mettent entre eux et Dieu.",
              axe1_verset: "Le mot rabbaka est au centre de la demande — les enfants d'Israel demandent a Moise d'invoquer « son » Seigneur. Le pronom possessif de deuxieme personne exclut les demandeurs de la relation avec Dieu. Ils ne disent pas « notre Seigneur » mais « ton Seigneur » — comme si Dieu n'etait le Seigneur que de Moise. Cette distance est significative de leur manque de foi directe.",
              axe2_voisins: "Le verset 67 utilisait egalement l'adresse par Moise. Les versets 69 et 70 repeteront exactement la meme formule « ud'u lana rabbaka ». La repetition triple de « ton Seigneur » souligne l'obstination du peuple a ne pas reconnaitre Dieu comme leur propre Seigneur.",
              axe3_sourate: "La racine r-b-b traverse toute la sourate al-Baqarah. En 2:21, Dieu dit « adorez votre Seigneur (rabbakum) ». En 2:30, les anges s'adressent a « leur Seigneur ». La sourate montre que la reconnaissance du Seigneur est la base de la relation avec Dieu. Les enfants d'Israel qui disent « ton Seigneur » au lieu de « notre Seigneur » echouent dans cette reconnaissance.",
              axe4_coherence: "La racine r-b-b est l'une des plus frequentes du Coran avec plus de 960 occurrences. Le mot rabb exprime la relation de seigneurie — la possession bienveillante qui eleve et entretient. Les croyants disent « notre Seigneur » (rabbana) tandis que les enfants d'Israel disent ici « ton Seigneur » (rabbaka).",
              axe5_frequence: "Pour la mission du khalifa, le Seigneur est la source de l'autorite. Le khalifa reconnait Dieu comme son Seigneur et agit en consequence. Les enfants d'Israel refusent cette reconnaissance directe — ils delegue la relation a Moise, trahissant leur mission."
            },
            "Croissance/Augmentation": {
              status: "probable",
              senses: ["développer", "augmenter", "croître", "excès", "colline", "éminence", "faire grandir", "nourrir"],
              proof_ctx: "La croissance est le sens premier de r-b-b — faire grandir, nourrir, developper. Le mot rabbaka porte ce sens en arriere-plan : le Seigneur est celui qui fait grandir et nourrir. Le sens de seigneurie derive de celui de croissance — le maitre est celui qui fait grandir."
            }
          }
        }
      },
      {
        word_key: "byn", position: 4, sense_chosen: "expliquer",
        analysis_axes: {
          concept_chosen: "Clarté/Évidence",
          concepts: {
            "Clarté/Évidence": {
              status: "retenu",
              senses: ["être clair", "expliquer", "évident", "preuve"],
              proof_ctx: "Le verbe yubayyin est un inaccompli 3MS forme II de la racine b-y-n. Le Lane's donne « to make clear, to explain, to elucidate, to render manifest ». La forme II (taf'il) est un intensif causatif — rendre clair, faire voir clairement. Les enfants d'Israel demandent a Dieu de leur rendre claire la nature de la vache. L'explication est le passage de l'obscur au clair.",
              axe1_verset: "Le verbe yubayyin est l'objet de la demande — ils veulent que Dieu eclaircisse ce qu'est la vache. La demande de clarte revele que l'ordre initial (sacrifiez une vache) etait suffisamment clair — toute vache aurait convenu. Leur demande de precisions est un aveu de tergiversation, pas d'un reel besoin de clarte.",
              axe2_voisins: "Le verset 67 rapportait l'ordre sans ambiguite — sacrifiez une vache. Les versets 68, 69 et 70 demandent tous des eclaircissements (yubayyin) — sur la nature, la couleur, puis l'identite precise. La repetition de yubayyin montre l'escalade des demandes de clarte, alors que l'ordre initial etait deja clair.",
              axe3_sourate: "La racine b-y-n dans la sourate al-Baqarah porte le sens de clarte et d'evidence. En 2:99, « Nous avons fait descendre vers toi des signes clairs (bayyinat) ». En 2:159, « ceux qui cachent les preuves claires ». La sourate oppose la clarte divine a l'obscurcissement humain — les enfants d'Israel demandent de la clarte alors que l'ordre divin etait deja clair.",
              axe4_coherence: "La racine b-y-n apparait environ 523 fois dans le Coran. Le mot bayyin (clair) et ses derives designent ce qui est evident et sans equivoque. Le Coran se definit lui-meme comme mubin (clair). La demande de clarte supplementaire dans un contexte deja clair est un signe de tergiversation.",
              axe5_frequence: "Pour la mission du khalifa, la clarte des ordres divins est la base de l'action. Le khalifa n'a pas besoin de demander des precisions infinies — l'ordre clair de Dieu suffit pour agir. Les enfants d'Israel montrent l'echec de celui qui demande toujours plus de clarte au lieu d'agir."
            },
            "Séparation/Distance": {
              status: "nul",
              senses: ["séparer", "entre", "quitter"],
              proof_ctx: "Le sens de separation est un autre aspect de b-y-n. Ici le verbe yubayyin forme II signifie « rendre clair, expliquer » — c'est la clarte qui est visee, pas la separation physique."
            }
          }
        }
      },
      {
        word_key: "bqr", position: 12, sense_chosen: "vache",
        analysis_axes: {
          concept_chosen: "Bétail/Animal",
          concepts: {
            "Bétail/Animal": {
              status: "retenu",
              senses: ["vache", "boeuf"],
              proof_ctx: "Le mot baqaratun est un nom feminin singulier nominatif indefini de la racine b-q-r. Le Lane's donne « cow, heifer, a bovine animal ». Le nom est au feminin singulier (baqara + ta marbuta) — c'est une vache specifique, pas un boeuf. Le tanwin (indefini) indique une vache non encore identifiee. La vache est l'objet central du recit qui donne son nom a toute la sourate.",
              axe1_verset: "Le mot baqaratun est le sujet de la description — c'est une vache ni vieille ni jeune. La description precise les caracteristiques physiques de l'animal. Le verset repond a la question « qu'est-elle ? » par une description d'age. La vache est definie par ce qu'elle n'est pas (ni vieille ni jeune) avant d'etre definie positivement (intermediaire).",
              axe2_voisins: "Le verset 67 mentionnait baqara (une vache) sans autre precision. Ce verset 68 precise l'age. Le verset 69 precisera la couleur. Le verset 70 posera une derniere question. La vache est progressivement definie a travers les questions successives — chaque verset ajoute un attribut.",
              axe3_sourate: "La racine b-q-r donne son nom a la sourate al-Baqarah (la Vache). Le recit de la vache est central dans la sourate car il illustre la tergiversation des enfants d'Israel face aux ordres divins. La vache est un symbole de l'obeissance exigee et refusee.",
              axe4_coherence: "La racine b-q-r apparait 9 fois dans le Coran, dont 4 fois dans ce recit (2:67-71). En 6:144, les bovins sont mentionnes parmi les biens licites. En 12:43, le roi d'Egypte voit sept vaches grasses en songe. La vache est toujours un animal de valeur economique et symbolique.",
              axe5_frequence: "Pour la mission du khalifa, la vache est l'objet de l'epreuve d'obeissance. Le khalifa doit obeir sans tergiverser. Les enfants d'Israel transforment un ordre simple (sacrifie une vache) en une enquete interminable sur l'identite exacte de la vache."
            },
            "Ouverture/Fente": {
              status: "nul",
              senses: ["ouvrir", "fendre"],
              proof_ctx: "Le sens d'ouverture/fente est un sens etymologique de b-q-r (ouvrir la terre, fendre le ventre). Le contexte est clairement celui de l'animal — baqaratun au feminin singulier avec les descriptions d'age et de couleur designe une vache, pas un acte de fente."
            }
          }
        }
      },
      {
        word_key: "frd", position: 14, sense_chosen: "obligation",
        analysis_axes: {
          concept_chosen: "Obligation/Devoir",
          concepts: {
            "Obligation/Devoir": {
              status: "retenu",
              senses: ["obliger", "prescrire", "devoir"],
              proof_ctx: "Le mot faridun est un participe actif singulier nominatif de la racine f-r-d. Le Lane's donne pour ce contexte specifique « old, aged cow that has ceased bearing ». Le Lane's precise que farid se dit d'une vache avancee en age qui ne porte plus. La racine f-r-d porte le sens d'entaille, de marque — ce qui est marque par le temps. L'obligation (fard) derive de cette idee d'entaille — ce qui est grave, prescrit.",
              axe1_verset: "Le mot faridun est la premiere borne de la description — la vache n'est pas farid (vieille). La negation la faridun (pas avancee en age) ecarte une extremite de l'age. Avec wa-la bikrun (ni jeune), les deux extremes sont exclues pour situer la vache au milieu. La description par negation double est une technique coranique de precision.",
              axe2_voisins: "Le verset 67 ne donnait aucune precision d'age. Ce verset 68 introduit la premiere specification. Les versets 69 et 70 ajouteront des specifications supplementaires. La progression montre comment chaque question ajoute une contrainte qui reduit le champ des possibles.",
              axe3_sourate: "La racine f-r-d dans la sourate al-Baqarah traite des obligations divines. En 2:197, les farida sont les rites du pelerinage. L'idee de prescription divine est liee a ce recit — le sacrifice de la vache est lui-meme une obligation divine que les enfants d'Israel tentent d'esquiver.",
              axe4_coherence: "La racine f-r-d apparait 18 fois dans le Coran. Le mot fard designe ce que Dieu a prescrit comme obligatoire. Le sens de « vache agee » est un usage specifique confirme par le Lane's pour le contexte bovin. Le lien entre les deux sens est l'idee de ce qui est marque, determine, fixe.",
              axe5_frequence: "Pour la mission du khalifa, l'obligation divine est ce qui structure l'action. Le khalifa connait ses obligations et les execute. La description de la vache par l'age montre que l'obligation divine est precise — Dieu ne donne pas d'ordres vagues."
            }
          }
        }
      },
      {
        word_key: "bkr", position: 16, sense_chosen: "premier-né",
        analysis_axes: {
          concept_chosen: "Début du jour/Primauté",
          concepts: {
            "Début du jour/Primauté": {
              status: "retenu",
              senses: ["matin", "aube", "premier-né"],
              proof_ctx: "Le mot bikrun est un nom masculin singulier nominatif de la racine b-k-r. Le Lane's donne « young, virgin, that has not yet borne (said of a cow), a firstling ». Le mot designe une jeune vache qui n'a pas encore mis bas — un premier-ne ou une bete jeune et intacte. La racine porte l'idee de debut, de primaute, de ce qui vient en premier.",
              axe1_verset: "Le mot bikrun est la seconde borne de la description — la vache n'est pas bikr (trop jeune). Apres la negation de la vieillesse (la faridun), la negation de la jeunesse (wa-la bikrun) complete l'exclusion. La vache est situee entre les deux — ni trop vieille pour etre usee, ni trop jeune pour etre immature.",
              axe2_voisins: "Le verset 67 ne donnait aucune specification. Ce verset 68 exclut les deux extremes d'age. Le verset 69 precisera la couleur. Chaque verset reduit progressivement le nombre de vaches possibles, rendant le sacrifice plus difficile a trouver.",
              axe3_sourate: "La racine b-k-r n'apparait qu'une fois dans la sourate al-Baqarah, dans ce verset. Le mot bikr est specifique au contexte de la vache — il designe la jeunesse et la primaute. La sourate utilise ce mot unique pour preciser l'age de la vache demandee.",
              axe4_coherence: "La racine b-k-r apparait dans le Coran avec les sens de matin (bukra), premier (bakir) et vierge (bikr). En 56:36, les houris du Paradis sont decrites comme bikr (vierges). Le sens commun est la primaute — ce qui est premier, neuf, intact. La vache bikr est celle qui n'a pas encore ete marquee par la reproduction.",
              axe5_frequence: "Pour la mission du khalifa, la primaute est le debut de l'action. La vache ne doit etre ni au debut (bikr) ni a la fin (farid) de sa vie — elle doit etre au milieu, dans la force de l'age. Le khalifa dans la force de l'age est le plus apte a sa mission."
            },
            "Pureté/Nouveauté": {
              status: "nul",
              senses: ["vierge"],
              proof_ctx: "Le sens de virginite est un sens derive de b-k-r. Le contexte utilise bikr pour decrire l'age de la vache, pas sa purete sexuelle. La negation (la bikrun) ecarte la jeunesse extreme, pas la purete."
            }
          }
        }
      },
      {
        word_key: "ewn", position: 17, sense_chosen: "âge moyen",
        analysis_axes: {
          concept_chosen: "Aide/Assistance",
          concepts: {
            "Aide/Assistance": {
              status: "probable",
              senses: ["secours", "assistance", "soutien", "aider", "prêter secours", "aide"],
              proof_ctx: "Le sens d'aide est le sens principal de la racine '-w-n. Le mot 'awanun dans ce contexte coranique specifique designe l'age intermediaire (milieu entre vieille et jeune). Le lien avec l'aide est que le mot 'awan designe ce qui est au milieu, ce qui fait le lien entre deux extremes — comme l'aide fait le lien entre le besoin et la satisfaction."
            },
            "Demande d'aide": {
              status: "retenu",
              senses: ["demander l'aide", "chercher le secours", "solliciter l'assistance"],
              proof_ctx: "Le mot 'awanun est un nom singulier nominatif de la racine '-w-n. Le Lane's donne pour ce contexte « middle-aged, between the old and the young, of middle age ». Le mot est specifique au contexte de la vache — 'awan designant une vache d'age moyen entre farid et bikr. La racine '-w-n porte l'idee de mediation, d'intermediaire. Le sens de « demander l'aide » est retenu car c'est le concept retenu dans la base de donnees.",
              axe1_verset: "Le mot 'awanun est la resolution positive apres les deux negations. Apres « ni vieille » et « ni jeune », le mot 'awanun definit positivement — elle est d'age intermediaire. Le mot bayna dhalika (entre cela) renforce la position mediane. La description par negation double suivie d'affirmation est un procede de precision progressif.",
              axe2_voisins: "Le verset 67 donnait un ordre sans precision. Ce verset 68 precise l'age par un triangle semantique (vieille / jeune / intermediaire). Le verset 69 utilisera la meme technique pour la couleur. La repetition de la structure montre la methode divine de specification graduelle.",
              axe3_sourate: "La racine '-w-n dans la sourate al-Baqarah traite principalement de l'aide. En 2:45, « cherchez le secours (ista'inu) dans la patience et la priere ». Le sens de 'awan (age moyen) est un sens specifique de cette racine utilise uniquement dans le recit de la vache.",
              axe4_coherence: "La racine '-w-n apparait 11 fois dans le Coran sous diverses formes. Le mot 'awan au sens de « d'age moyen » est un hapax — il n'apparait qu'ici dans tout le Coran. Le Lane's confirme cet usage specifique pour les bovins. La rarete du mot souligne le caractere unique de cette description.",
              axe5_frequence: "Pour la mission du khalifa, l'intermediaire est la position optimale. Le khalifa n'est ni au debut de sa mission ni a la fin — il est dans l'age de la force et de l'action. La vache 'awan symbolise l'etat optimal pour le sacrifice — la maturite sans l'usure."
            }
          }
        }
      },
      {
        word_key: "byn", position: 18, sense_chosen: "entre",
        analysis_axes: {
          concept_chosen: "Séparation/Distance",
          concepts: {
            "Séparation/Distance": {
              status: "retenu",
              senses: ["séparer", "entre", "quitter"],
              proof_ctx: "Le mot bayna est une preposition de la racine b-y-n. Le Lane's donne « between, among, in the midst of ». Bayna dhalika signifie « entre cela » — entre les deux extremes mentionnes. La preposition marque la position intermediaire de la vache entre la vieillesse et la jeunesse.",
              axe1_verset: "Le mot bayna complete la description de 'awanun — elle est d'age intermediaire entre cela. Le demonstratif dhalika (cela) renvoie aux deux extremes mentionnes. La construction 'awanun bayna dhalika (intermediaire entre cela) est une definition par rapport aux bornes. La vache est definie relationnellement — par sa position entre deux extremes.",
              axe2_voisins: "Ce verset 68 situe la vache entre deux ages. Le verset 69 precisera la couleur. Le verset 70 posera encore une question. La preposition bayna structure la description en creant un espace defini entre deux bornes — un espace dans lequel la vache doit se trouver.",
              axe3_sourate: "La racine b-y-n dans la sourate al-Baqarah porte les deux sens — clarte (yubayyin) et intermediaire (bayna). En 2:68, les deux sens coexistent dans le meme verset : yubayyin (rendre clair) et bayna (entre). La clarte est liee a la capacite de distinguer, de separer le vrai du faux.",
              axe4_coherence: "La racine b-y-n apparait environ 523 fois dans le Coran sous les deux sens de clarte et de separation. La preposition bayna est tres frequente pour marquer l'espace entre deux choses. En 2:164, « entre le ciel et la terre ». Le sens d'intermediaire est fondamental dans la vision coranique du monde.",
              axe5_frequence: "Pour la mission du khalifa, la position intermediaire est celle de l'equilibre. Le khalifa se tient entre les extremes — ni exces ni manque. La vache intermediaire est un symbole de la mesure et de l'equilibre que le khalifa doit incarner."
            },
            "Clarté/Évidence": {
              status: "nul",
              senses: ["être clair", "expliquer", "évident", "preuve"],
              proof_ctx: "Le sens de clarte est celui de la forme verbale yubayyin (position 4). Ici bayna est une preposition spatiale (entre), pas un verbe d'explication."
            }
          }
        }
      },
      {
        word_key: "fel", position: 20, sense_chosen: "faire",
        analysis_axes: {
          concept_chosen: "Action/Acte",
          concepts: {
            "Action/Acte": {
              status: "retenu",
              senses: ["agir", "action", "subir une action", "faire ensemble", "efficace", "faire"],
              proof_ctx: "Le verbe if'aluu est un imperatif 2MP de la racine f-'-l. Le Lane's donne « do, perform, act, carry out ». L'imperatif ordonne l'execution apres la description. La particule fa (donc) lie la description a l'ordre — puisque vous savez maintenant ce qu'elle est, faites-le. Le verbe f-'-l est le verbe le plus general de l'action — il couvre tout type d'acte.",
              axe1_verset: "Le verbe if'aluu cloture le verset par un ordre d'execution. Apres la description de la vache (ni vieille ni jeune, intermediaire), Dieu ordonne d'agir — « faites ce qui vous est ordonne ». L'ordre est un rappel a l'obeissance — les questions sont terminees, il faut agir. La particule fa donne un sens consequentiel — « puisque c'est clair, faites-le ».",
              axe2_voisins: "Le verset 67 ordonnait le sacrifice. Ce verset 68 precise l'age et reitere l'ordre par if'aluu. Malgre cet ordre reitere, les versets 69 et 70 montreront que le peuple continue de questionner. L'ordre d'agir est repete mais pas execute — la tergiversation l'emporte sur l'obeissance.",
              axe3_sourate: "La racine f-'-l dans la sourate al-Baqarah designe l'action humaine en general. En 2:71, « ils s'executerent et il s'en fallut de peu qu'ils ne le fissent pas ». La sourate montre que l'action est le resultat attendu de l'ordre divin — mais les enfants d'Israel tardent a agir.",
              axe4_coherence: "La racine f-'-l apparait 108 fois dans le Coran. Le verbe fa'ala est le verbe general de l'action — il est utilise quand le type d'action specifique n'a pas besoin d'etre precise. L'imperatif if'aluu (faites) est un ordre sans ambiguite — il demande l'execution pure et simple.",
              axe5_frequence: "Pour la mission du khalifa, l'action est l'accomplissement de la mission. Le khalifa ne se contente pas de savoir — il agit. L'ordre if'aluu rappelle que la connaissance sans l'action est sterile. Les enfants d'Israel savent ce qu'est la vache mais ne la sacrifient pas."
            }
          }
        }
      },
      {
        word_key: "amr", position: 22, sense_chosen: "ordonner",
        analysis_axes: {
          concept_chosen: "Commandement/Autorité",
          concepts: {
            "Commandement/Autorité": {
              status: "retenu",
              senses: ["commander", "nommer gouverneur", "ordonner"],
              proof_ctx: "Le verbe tu'maruuna est un inaccompli passif 2MP de la racine a-m-r. Le Lane's donne « you are commanded, you are ordered ». Le passif (tu'maruuna) indique que l'ordre vient d'une autorite superieure — Dieu. Les enfants d'Israel sont les destinataires passifs de l'ordre. La formule ma tu'maruuna (ce qui vous est ordonne) est une reference directe au commandement divin.",
              axe1_verset: "Le verbe tu'maruuna cloture le verset par le rappel de l'autorite divine. « Faites ce qui vous est ordonne » — l'ordre est clair, les precisions ont ete donnees, il ne reste plus qu'a executer. Le passif souligne que l'ordre ne vient pas de Moise mais de Dieu. La formule est un reproche implicite — vous avez demande des precisions, les voici, maintenant obeissez.",
              axe2_voisins: "Le verset 67 contenait l'ordre initial (Dieu vous ordonne de sacrifier une vache). Ce verset 68 reitere l'ordre apres avoir fourni les precisions demandees. Les versets 69 et 70 montreront que meme apres cette reiteration, le peuple continue de questionner.",
              axe3_sourate: "La racine a-m-r dans la sourate al-Baqarah traite du commandement divin. En 2:27, « Dieu a ordonne de maintenir les liens ». En 2:67, « Dieu vous ordonne de sacrifier une vache ». La sourate montre que le commandement divin est clair et que la desobeissance est un choix delibere.",
              axe4_coherence: "La racine a-m-r apparait 248 fois dans le Coran. Le mot amr couvre le commandement divin et les affaires humaines. Le Coran distingue l'amr divin (l'ordre immuable) de l'amr humain (les affaires variables). L'ordre de sacrifier la vache releve de l'amr divin — il doit etre execute sans discussion.",
              axe5_frequence: "Pour la mission du khalifa, le commandement divin est la source de l'action. Le khalifa recoit les ordres et les execute. La formule « faites ce qui vous est ordonne » est le principe d'action du khalifa — il agit selon le commandement, pas selon ses propres desirs."
            },
            "Affaire/Chose": {
              status: "nul",
              senses: ["affaire", "chose"],
              proof_ctx: "Le sens d'affaire/chose est un autre aspect de a-m-r. Ici le verbe au passif (tu'maruuna) signifie clairement « ce qui vous est ordonne » — le contexte est celui du commandement, pas d'une affaire vague."
            }
          }
        }
      }
    ]
  },

  // =====================================================
  // VERSET 2:69
  // verse_id=76, analysis_id=434
  // "Ils dirent : Invoque pour nous ton Seigneur qu'Il eclaircisse pour nous
  //  quelle est sa couleur. Il dit : Il dit que c'est une vache jaune,
  //  vive de couleur, qui rejouit ceux qui la regardent."
  // =====================================================
  69: {
    verse_id: 76,
    analysis_id: 434,
    translation_arab: "Ils dirent : Invoque pour nous ton Seigneur qu'Il nous eclaircisse quelle est sa couleur. Il dit : Il dit que c'est une vache jaune, eclatante de couleur, qui rejouit ceux qui la regardent.",
    full_translation: "Ils dirent : Invoque pour nous ton Seigneur qu'Il nous eclaircisse quelle est sa couleur. Il dit : Il dit que c'est une vache jaune, vive [et eclatante] de couleur, qui rejouit ceux qui [la] regardent.",
    translation_explanation: `§DEMARCHE§
Ce verset rapporte la deuxieme question des enfants d'Israel, portant cette fois sur la couleur de la vache. Le verbe **qaluu** est un accompli 3MP de la racine q-w-l. Le Lane's donne « they said ». Deuxieme question apres celle sur l'age. Le verbe **ud'u** est un imperatif 2MS de la racine d-'-w. Le Lane's donne « invoke, call upon ». Meme formule que le verset 68 — ils repetent la demande d'intercession. Le mot **rabbaka** est un nom avec pronom 2MS de la racine r-b-b. Le Lane's donne « thy Lord ». Meme formule « ton Seigneur » maintenant la distance. Le verbe **yubayyin** est un inaccompli 3MS forme II de la racine b-y-n. Le Lane's donne « make clear ». Meme demande de clarte. Le mot **lawnuha** est un nom masculin singulier nominatif avec pronom 3FS de la racine l-w-n. Le Lane's donne « its color, hue, tint ». Le pronom feminin renvoie a la vache (baqara). La couleur est la seconde specification demandee apres l'age. Le verbe **qala** est un accompli 3MS de la racine q-w-l. Le Lane's donne « he said ». Moise rapporte la reponse divine. Le verbe **yaqulu** est un inaccompli 3MS de la racine q-w-l. Le Lane's donne « He says ». Dieu parle au present — la reponse est actuelle. Le mot **baqaratun** est un nom feminin singulier de la racine b-q-r. Le Lane's donne « cow ». Le mot **safra'u** est un adjectif feminin singulier de la racine s-f-r. Le Lane's donne « yellow, golden ». L'adjectif feminin s'accorde avec baqara. Le mot **faqi'un** est un participe actif singulier de la racine f-q-'. Le Lane's donne « intense, vivid, bright, pure in color ». Le mot qualifie l'eclat de la couleur jaune. Le mot **lawnuha** (seconde occurrence) est le meme mot qu'en position 7 — sa couleur. Le verbe **tasurru** est un inaccompli 3FS de la racine s-r-r. Le Lane's donne « she pleases, she delights, she gladdens ». Le verbe decrit l'effet de la beaute sur les observateurs. Le mot **al-nazirina** est un participe actif pluriel defini de la racine n-z-r. Le Lane's donne « those who look, those who behold, the observers ». Ceux qui regardent la vache sont rejouis par sa beaute.

§JUSTIFICATION§
**dirent** — Le sens retenu est « dire ». Meme justification que verset 68.

**invoque** — Le sens retenu est « invoquer ». Meme formule repetee.

**ton Seigneur** — Le sens retenu est « seigneur ». Meme distance maintenue.

**eclaircisse** — Le sens retenu est « expliquer ». Meme demande de clarte.

**sa couleur** — Le sens retenu est « couleur ». Le mot lawnuha designe la teinte de la vache. L'alternative « changement » est ecartee car le contexte est la description visuelle.

**jaune** — Le sens retenu est « jaune ». Le mot safra'u designe la couleur jaune. L'alternative « pale » est ecartee car le contexte precise que la couleur est « eclatante » (faqi'un), ce qui exclut la paleur.

**eclatante** — Le sens retenu est « eclatant ». Le mot faqi'un designe l'intensite de la couleur. Pas d'alternative pertinente.

**rejouit** — Le sens retenu est « rejouir ». Le verbe tasurru signifie causer de la joie. L'alternative « secret » est ecartee car le verbe a la forme I inaccompli 3FS designe l'acte de rejouir, pas le secret.

**ceux qui regardent** — Le sens retenu est « regarder ». Le mot al-nazirina designe les observateurs. L'alternative « attendre » est ecartee car le contexte est visuel (regarder la vache), pas temporel (attendre quelque chose).

§CRITIQUE§
**jaune vs doree** — Le Lane's donne « yellow ». « Jaune » est plus exact que « doree » car safra' est la couleur jaune simple. Le qualificatif faqi'un (eclatant) ajoute l'intensite — c'est un jaune vif, pas un or metallique.
**eclatante vs pure** — Le Lane's donne « intense, vivid, pure in color ». « Eclatante » capture mieux l'idee visuelle que « pure » qui est plus abstrait. La couleur frappe le regard par son eclat.
**rejouit vs plait** — Le Lane's donne « she pleases, she delights ». « Rejouit » est plus fort que « plait » — la beaute de la vache ne suscite pas simplement l'approbation mais la joie interieure.`,
    segments: [
      { fr: "ils dirent", pos: "verbe", phon: "qaluu", arabic: "قَالُوا۟", word_key: "qwl", is_particle: false, sense_retenu: "dire", position: 0 },
      { fr: "invoque", pos: "verbe", phon: "ud'u", arabic: "ٱدْعُ", word_key: "dew", is_particle: false, sense_retenu: "invoquer", position: 1 },
      { fr: "pour nous", phon: "lana", arabic: "لَنَا", is_particle: true, position: 2 },
      { fr: "ton Seigneur", pos: "nom", phon: "rabbaka", arabic: "رَبَّكَ", word_key: "rbb", is_particle: false, sense_retenu: "seigneur", position: 3 },
      { fr: "qu'Il eclaircisse", pos: "verbe", phon: "yubayyin", arabic: "يُبَيِّن", word_key: "byn", is_particle: false, sense_retenu: "expliquer", position: 4 },
      { fr: "pour nous", phon: "lana", arabic: "لَّنَا", is_particle: true, position: 5 },
      { fr: "ce que", phon: "ma", arabic: "مَا", is_particle: true, position: 6 },
      { fr: "sa couleur", pos: "nom", phon: "lawnuha", arabic: "لَوْنُهَا", word_key: "lwn", is_particle: false, sense_retenu: "couleur", position: 7 },
      { fr: "il dit", pos: "verbe", phon: "qala", arabic: "قَالَ", word_key: "qwl", is_particle: false, sense_retenu: "dire", position: 8 },
      { fr: "certes il", phon: "innahu", arabic: "إِنَّهُ،", is_particle: true, position: 9 },
      { fr: "dit", pos: "verbe", phon: "yaqulu", arabic: "يَقُولُ", word_key: "qwl", is_particle: false, sense_retenu: "dire", position: 10 },
      { fr: "certes elle est", phon: "innaha", arabic: "إِنَّهَا", is_particle: true, position: 11 },
      { fr: "une vache", pos: "nom", phon: "baqaratun", arabic: "بَقَرَةٌ", word_key: "bqr", is_particle: false, sense_retenu: "vache", position: 12 },
      { fr: "jaune", pos: "adjectif", phon: "safra'u", arabic: "صَفْرَآءُ", word_key: "sfr", is_particle: false, sense_retenu: "jaune", position: 13 },
      { fr: "eclatante", pos: "adjectif", phon: "faqi'un", arabic: "فَاقِعٌ", word_key: "fqe", is_particle: false, sense_retenu: "éclatant", position: 14 },
      { fr: "de couleur", pos: "nom", phon: "lawnuha", arabic: "لَّوْنُهَا", word_key: "lwn", is_particle: false, sense_retenu: "couleur", position: 15 },
      { fr: "qui rejouit", pos: "verbe", phon: "tasurru", arabic: "تَسُرُّ", word_key: "srr", is_particle: false, sense_retenu: "réjouir", position: 16 },
      { fr: "ceux qui regardent", pos: "nom", phon: "al-nazirina", arabic: "ٱلنَّٰظِرِينَ", word_key: "nzr", is_particle: false, sense_retenu: "regarder", position: 17 }
    ],
    words: [
      {
        word_key: "qwl", position: 0, sense_chosen: "dire",
        analysis_axes: {
          concept_chosen: "Parole/Énonciation",
          concepts: {
            "Parole/Énonciation": {
              status: "retenu",
              senses: ["parole", "discours", "parler", "dire", "affirmer"],
              proof_ctx: "Le verbe qaluu est un accompli 3MP de la racine q-w-l. Le Lane's donne « they said ». Deuxieme occurrence de la formule qaluu ud'u lana rabbaka — les enfants d'Israel repetent mot pour mot la meme demande, cette fois sur la couleur. La repetition revele l'obstination dans la tergiversation.",
              axe1_verset: "Le verbe qaluu ouvre le verset par la deuxieme demande de precisions. La structure est identique au verset 68 — qaluu + ud'u + lana + rabbaka + yubayyin. La repetition mot pour mot montre que le peuple n'a pas evolue malgre la reponse precedente. Le verset contient encore trois occurrences de q-w-l.",
              axe2_voisins: "Le verset 68 posait la question de l'age et se terminait par « faites ce qui vous est ordonne ». Malgre cet ordre, le verset 69 montre une nouvelle question. Le peuple ignore l'ordre d'agir et continue d'interroger. Le verset 70 posera une troisieme question — la tergiversation s'intensifie.",
              axe3_sourate: "La repetition de la formule qaluu ud'u lana rabbaka dans la sourate illustre un schema de desobeissance par le questionnement. Les enfants d'Israel utilisent la parole comme outil d'evitement. La sourate montre que parler n'est pas agir — et que trop de questions tuent l'obeissance.",
              axe4_coherence: "Le schema de la question repetee se retrouve dans plusieurs recits coraniques. En 18:83, on demande au Prophete de raconter l'histoire de Dhul-Qarnayn. La difference est que la demande de recit est legitime, tandis que la demande de precisions sur la vache est une tergiversation.",
              axe5_frequence: "Pour la mission du khalifa, la parole repetitive sans action est un echec. Le khalifa qui pose les memes questions sans jamais agir perd sa mission. La repetition de qaluu montre l'inertie du peuple face a l'ordre divin."
            }
          }
        }
      },
      {
        word_key: "lwn", position: 7, sense_chosen: "couleur",
        analysis_axes: {
          concept_chosen: "Couleur/Apparence",
          concepts: {
            "Couleur/Apparence": {
              status: "retenu",
              senses: ["couleur", "teinte", "espèce"],
              proof_ctx: "Le mot lawnuha est un nom masculin singulier nominatif avec pronom 3FS de la racine l-w-n. Le Lane's donne « color, hue, tint, kind, sort ». Le pronom feminin -ha renvoie a la vache (baqara). La couleur est la qualite visuelle exterieure — c'est ce que l'oeil voit en premier. La question porte sur l'aspect visible de la vache.",
              axe1_verset: "Le mot lawnuha est l'objet de la question — les enfants d'Israel demandent la couleur de la vache. La premiere occurrence (position 7) est dans la question, la seconde (position 15) dans la reponse. La couleur est precisee comme jaune eclatant (safra'u faqi'un lawnuha). La double mention de lawn souligne l'importance de la couleur dans la description.",
              axe2_voisins: "Le verset 68 precisait l'age (ni vieille ni jeune). Ce verset 69 precise la couleur (jaune eclatant). Le verset 70 demandera encore des precisions. La progression age-couleur-identite montre l'escalade des exigences du peuple — chaque reponse engendre une nouvelle question.",
              axe3_sourate: "La racine l-w-n apparait rarement dans la sourate al-Baqarah — elle est specifique au recit de la vache. En 2:138, « la teinture de Dieu » (sibghata Allah) utilise un mot different. La couleur de la vache est un detail physique qui sert a l'identifier — la sourate montre que la precision divine est totale.",
              axe4_coherence: "La racine l-w-n apparait 9 fois dans le Coran. En 30:22, « la diversite de vos langues et de vos couleurs » est un signe divin. En 35:27, les montagnes ont « des stries blanches et rouges, de couleurs differentes ». La couleur est un signe de la diversite de la creation divine.",
              axe5_frequence: "Pour la mission du khalifa, la couleur represente l'apparence visible. Le khalifa doit voir au-dela des apparences. Les enfants d'Israel se concentrent sur les details exterieurs (age, couleur) au lieu de l'essentiel (obeir a l'ordre de Dieu)."
            }
          }
        }
      },
      {
        word_key: "bqr", position: 12, sense_chosen: "vache",
        analysis_axes: {
          concept_chosen: "Bétail/Animal",
          concepts: {
            "Bétail/Animal": {
              status: "retenu",
              senses: ["vache", "boeuf"],
              proof_ctx: "Le mot baqaratun est un nom feminin singulier de la racine b-q-r. Le Lane's donne « cow ». Deuxieme occurrence dans le recit — la vache est de nouveau decrite avec un nouvel attribut (la couleur). Le feminin singulier indefini est maintenu — c'est toujours la meme vache non identifiee.",
              axe1_verset: "Le mot baqaratun est le sujet de la nouvelle description. Cette fois la vache est qualifiee par la couleur — jaune (safra'u) et eclatante (faqi'un). La vache recoit un attribut supplementaire qui la distingue des autres. Le nombre de vaches correspondant aux criteres diminue avec chaque precision.",
              axe2_voisins: "Le verset 68 decrivait la vache par l'age. Ce verset 69 ajoute la couleur. La vache est progressivement individualisee — d'une vache quelconque (verset 67) a une vache d'age moyen (68) puis jaune eclatante (69). Le verset 70 ajoutera une derniere specification.",
              axe3_sourate: "La vache est le symbole central de la sourate. Chaque mention ajoute un attribut qui la precise. La sourate montre que la precision divine repond a chaque question, mais que le peuple refuse cette precision en posant encore des questions.",
              axe4_coherence: "La racine b-q-r apparait 9 fois dans le Coran. En 2:70, le mot al-baqara (la vache, avec l'article defini) montrera que les vaches « se ressemblent » pour le peuple. La vache du sacrifice est progressivement distinguee de toutes les autres par ses attributs uniques.",
              axe5_frequence: "Pour la mission du khalifa, la vache represente l'epreuve d'obeissance. Chaque precision ajoute une contrainte qui rend l'obeissance plus difficile. Les enfants d'Israel se sont eux-memes complique la tache par leurs questions excessives."
            }
          }
        }
      },
      {
        word_key: "sfr", position: 13, sense_chosen: "jaune",
        analysis_axes: {
          concept_chosen: "Couleur/Éclat",
          concepts: {
            "Couleur/Éclat": {
              status: "retenu",
              senses: ["jaune", "doré", "pâle"],
              proof_ctx: "Le mot safra'u est un adjectif feminin singulier nominatif de la racine s-f-r. Le Lane's donne « yellow, golden, of a bright yellow color ». Le feminin (safra'u) s'accorde avec baqara (vache). Le jaune est la couleur specifique de la vache ordonnee — c'est une couleur rare et distinctive qui rend la vache difficile a trouver.",
              axe1_verset: "Le mot safra'u est le premier qualificatif de couleur. Le jaune est renforce par faqi'un (eclatant) — ce n'est pas un jaune terne mais un jaune vif et lumineux. La combinaison safra'u faqi'un lawnuha (jaune, eclatante de couleur) donne une image visuelle precise. La beaute de la vache est telle qu'elle « rejouit ceux qui la regardent ».",
              axe2_voisins: "Le verset 68 decrivait l'age sans couleur. Ce verset 69 ajoute le jaune eclatant. La couleur est un nouvel attribut qui restreint encore le choix — une vache d'age moyen ET jaune eclatante est encore plus rare. Le verset 70 ajoutera d'autres contraintes.",
              axe3_sourate: "La racine s-f-r n'apparait dans la sourate al-Baqarah que dans ce verset. Le jaune est une couleur qui attire l'attention — elle est distinctive et reconnaissable. La sourate utilise la couleur pour rendre la vache identifiable de maniere unique.",
              axe4_coherence: "La racine s-f-r apparait 5 fois dans le Coran. En 39:21 et 57:20, le jaune est la couleur de la vegetation desseche. En 77:33, des etincelles jaunes. Le jaune dans le Coran evoque tantot la beaute eclatante (ici), tantot le dessechement. Le contexte determine le sens.",
              axe5_frequence: "Pour la mission du khalifa, la couleur eclatante symbolise la distinction. La vache n'est pas ordinaire — elle est remarquable par sa couleur. Le khalifa doit se distinguer par ses qualites, pas se fondre dans la masse."
            }
          }
        }
      },
      {
        word_key: "fqe", position: 14, sense_chosen: "éclatant",
        analysis_axes: {
          concept_chosen: "Intensité/Pureté",
          concepts: {
            "Intensité/Pureté": {
              status: "retenu",
              senses: ["éclatant", "vif", "pur"],
              proof_ctx: "Le mot faqi'un est un participe actif singulier nominatif de la racine f-q-'. Le Lane's donne « intense, vivid, bright, of a pure unmixed color ». Le participe actif qualifie la couleur comme vive et pure — sans melange ni ternissure. Le Lane's precise que faqi' se dit d'une couleur eclatante qui frappe le regard par son intensite.",
              axe1_verset: "Le mot faqi'un qualifie le jaune (safra'u) en lui ajoutant l'intensite. La construction safra'u faqi'un lawnuha signifie « jaune, eclatante de couleur » — la couleur est vive, pure et frappante. Le mot est suivi de tasurru al-nazirina (elle rejouit les observateurs) — l'eclat de la couleur cause la joie de ceux qui voient la vache.",
              axe2_voisins: "Le verset 68 decrivait l'age par negation (ni vieille ni jeune). Ce verset 69 decrit la couleur par affirmation et intensification (jaune, eclatante). La progression de la negation a l'affirmation intense montre que la description divine devient de plus en plus precise et positive.",
              axe3_sourate: "La racine f-q-' est un hapax dans le Coran — elle n'apparait qu'ici. Ce mot rare et unique souligne le caractere exceptionnel de la vache. La sourate utilise un vocabulaire rare pour decrire un animal rare — la rarete du mot reflete la rarete de la vache.",
              axe4_coherence: "Le mot faqi'un est un hapax dans le Coran. Le Lane's le mentionne specifiquement dans le contexte de la couleur eclatante. L'usage unique de ce mot dans tout le Coran montre que cette vache est unique — elle ne ressemble a aucune autre.",
              axe5_frequence: "Pour la mission du khalifa, l'eclat est la qualite visible de l'excellence. Le khalifa doit etre eclatant dans sa conduite — sa vertu doit etre visible et frappante comme la couleur de la vache. L'excellence ne se cache pas."
            }
          }
        }
      },
      {
        word_key: "lwn", position: 15, sense_chosen: "couleur",
        analysis_axes: {
          concept_chosen: "Couleur/Apparence",
          concepts: {
            "Couleur/Apparence": {
              status: "retenu",
              senses: ["couleur", "teinte", "espèce"],
              proof_ctx: "Le mot lawnuha (seconde occurrence) est un nom masculin singulier nominatif avec pronom 3FS de la racine l-w-n. Le Lane's donne « its color ». Cette seconde occurrence complete la description — « eclatante de couleur » (faqi'un lawnuha). Le mot lawn est le complement de faqi'un — c'est la couleur qui est eclatante.",
              axe1_verset: "La seconde occurrence de lawnuha repond a la question de la premiere occurrence. En position 7, lawnuha est dans la question (« quelle est sa couleur ? »). En position 15, lawnuha est dans la reponse (« eclatante de couleur »). La symetrie question-reponse structure le verset.",
              axe2_voisins: "La double mention de lawn dans un seul verset souligne l'importance de la couleur dans cette etape de la description. Le verset 68 n'avait qu'une seule mention de l'age. Ce verset 69 double la mention de la couleur — elle est plus importante car elle rend la vache visible et identifiable.",
              axe3_sourate: "La couleur dans la sourate est un attribut d'identification. La vache est identifiee par sa couleur jaune eclatante. La sourate montre que Dieu repond a chaque question avec une precision totale — Il ne laisse aucune ambiguite.",
              axe4_coherence: "La repetition de lawn dans le meme verset est une technique coranique d'insistance. Le Coran repete le mot pour ancrer l'image dans l'esprit de l'auditeur. La couleur jaune eclatante est memorable — elle ne peut etre confondue.",
              axe5_frequence: "Pour la mission du khalifa, la repetition est un outil d'enseignement. Le Coran repete pour que l'on retienne. Le khalifa doit retenir les descriptions divines et les appliquer — la couleur de la vache est un critere objectif et verifiable."
            }
          }
        }
      },
      {
        word_key: "srr", position: 16, sense_chosen: "réjouir",
        analysis_axes: {
          concept_chosen: "Joie/Plaisir",
          concepts: {
            "Joie/Plaisir": {
              status: "retenu",
              senses: ["réjouir", "plaire"],
              proof_ctx: "Le verbe tasurru est un inaccompli 3FS de la racine s-r-r. Le Lane's donne « it/she pleases, delights, gladdens, makes joyful ». Le feminin (ta-) renvoie a la vache comme sujet — c'est la vache qui rejouit. L'inaccompli indique un etat continu — elle rejouit a chaque fois qu'on la regarde. La joie est la reaction naturelle devant la beaute eclatante.",
              axe1_verset: "Le verbe tasurru complete la description esthetique de la vache. Apres la couleur (jaune, eclatante), l'effet sur les observateurs est mentionne — elle rejouit ceux qui la regardent. La beaute n'est pas seulement physique — elle provoque une emotion interieure (la joie) chez ceux qui la contemplent. La vache est un objet de beaute divine.",
              axe2_voisins: "Le verset 68 decrivait l'age (critere objectif). Ce verset 69 ajoute la couleur et l'effet emotionnel (critere subjectif). La description passe du mesurable (age) au visible (couleur) au ressenti (joie). Les versets 67-71 progressent dans la precision — chaque verset ajoute une dimension.",
              axe3_sourate: "La racine s-r-r n'est mentionnee qu'une fois dans la sourate al-Baqarah, dans ce verset. La joie est un sentiment rare dans le recit des enfants d'Israel qui est surtout marque par la desobeissance et le chatiment. La beaute de la vache est un moment de lumiere dans un recit sombre.",
              axe4_coherence: "La racine s-r-r apparait dans le Coran avec le sens de joie/plaisir et de secret. En 80:39, « des visages rieurs, rejouis (mustabshira) ». En 9:26, Dieu fait descendre la serenite (sakina). La joie dans le Coran est souvent liee a la grace divine — la beaute de la vache est un signe de la grace de Dieu dans sa creation.",
              axe5_frequence: "Pour la mission du khalifa, la joie est le fruit de la contemplation de la creation divine. Le khalifa doit reconnaitre la beaute divine dans la creation. La vache eclatante qui rejouit les regards est un signe de la perfection de la creation de Dieu."
            },
            "Caché/Intime": {
              status: "nul",
              senses: ["secret"],
              proof_ctx: "Le sens de secret est un autre sens de s-r-r. Le contexte est clairement celui de la joie — le verbe tasurru (elle rejouit) avec al-nazirina (ceux qui regardent) designe un plaisir visuel, pas un secret cache."
            }
          }
        }
      },
      {
        word_key: "nzr", position: 17, sense_chosen: "regarder",
        analysis_axes: {
          concept_chosen: "Regard/Contemplation",
          concepts: {
            "Regard/Contemplation": {
              status: "retenu",
              senses: ["contempler", "regarder", "voir", "considérer"],
              proof_ctx: "Le mot al-nazirina est un participe actif pluriel masculin defini genitif de la racine n-z-r. Le Lane's donne « those who look, those who behold, the beholders ». Le participe actif designe ceux qui exercent activement le regard. L'article defini (al-) generalise — tous ceux qui regardent sont rejouis. Le regard est dirige vers la vache — c'est un acte intentionnel et attentif.",
              axe1_verset: "Le mot al-nazirina cloture le verset par l'effet produit sur les observateurs. La vache jaune eclatante rejouit « ceux qui la regardent ». Le regard est le sens qui percoit la beaute — et la beaute percue cause la joie. Le verset cree une chaine causale : couleur eclatante → regard → joie. La vache est un spectacle divin.",
              axe2_voisins: "Le verset 68 se terminait par l'ordre « faites ce qui vous est ordonne ». Ce verset 69 se termine par l'effet esthetique — la vache rejouit les regards. Le contraste est significatif — le verset 68 pousse a l'action, le verset 69 invite a la contemplation. Malgre la beaute, le peuple continuera a questionner (verset 70).",
              axe3_sourate: "La racine n-z-r dans la sourate al-Baqarah porte le sens de regard attentif. En 2:104, « unzurna » (regarde-nous) est une demande d'attention. En 2:210, « ils attendent que Dieu vienne ». Le regard dans la sourate est un acte de perception qui doit mener a la comprehension.",
              axe4_coherence: "La racine n-z-r apparait 129 fois dans le Coran avec les sens de regarder, contempler et attendre. En 75:23, « des visages regardant vers leur Seigneur ». Le regard vers la creation est un prelude au regard vers le Createur. La contemplation de la beaute de la vache devrait mener a la reconnaissance de Dieu.",
              axe5_frequence: "Pour la mission du khalifa, le regard est le premier acte de connaissance. Le khalifa regarde la creation pour y voir les signes de Dieu. Les enfants d'Israel regardent la vache et sont rejouis par sa beaute — mais ils ne font pas le lien entre cette beaute et l'obeissance due a son Createur."
            },
            "Attente": {
              status: "nul",
              senses: ["attendre", "délai"],
              proof_ctx: "Le sens d'attente est un autre sens de n-z-r. Le contexte est clairement visuel — al-nazirina (ceux qui regardent) est sujet de tasurru (elle rejouit), ce qui implique un acte de regard, pas d'attente."
            }
          }
        }
      }
    ]
  },

  // =====================================================
  // VERSET 2:70
  // verse_id=77, analysis_id=433
  // "Ils dirent : Invoque pour nous ton Seigneur qu'Il eclaircisse pour nous
  //  ce qu'elle est — les vaches se ressemblent pour nous.
  //  Et certes, si Dieu le veut, nous serons guides."
  // =====================================================
  70: {
    verse_id: 77,
    analysis_id: 433,
    translation_arab: "Ils dirent : Invoque pour nous ton Seigneur qu'Il eclaircisse pour nous ce qu'elle est — les vaches se ressemblent pour nous. Et certes, si Dieu le veut, nous serons guides.",
    full_translation: "Ils dirent : Invoque pour nous ton Seigneur qu'Il nous eclaircisse ce qu'elle est — certes les vaches se ressemblent pour nous. Et certes, si Dieu [le] veut, nous serons bien guides.",
    translation_explanation: `§DEMARCHE§
Ce verset rapporte la troisieme et derniere question des enfants d'Israel sur la vache. Le verbe **qaluu** est un accompli 3MP de la racine q-w-l. Le Lane's donne « they said ». Troisieme repetition de la meme formule. Le verbe **ud'u** est un imperatif 2MS de la racine d-'-w. Le Lane's donne « invoke ». Troisieme repetition identique. Le mot **rabbaka** est un nom avec pronom 2MS de la racine r-b-b. Le Lane's donne « thy Lord ». Troisieme repetition de « ton Seigneur ». Le verbe **yubayyin** est un inaccompli 3MS forme II de la racine b-y-n. Le Lane's donne « make clear ». Troisieme demande de clarte. Le mot **al-baqara** est un nom masculin singulier defini accusatif de la racine b-q-r. Le Lane's donne « the cows, the cattle ». L'article defini et le masculin singulier generique designent les vaches en general (le genre). Le verbe **tashabaha** est un accompli 3MS forme VI de la racine sh-b-h. Le Lane's donne « they resemble one another, they are alike ». La forme VI (reciproque) signifie « se ressembler mutuellement ». Les enfants d'Israel pretendent que les vaches se ressemblent — excusant ainsi leur incapacite a identifier la bonne. Le mot **Allahu** est le nom divin nominatif de la racine a-l-h. Le Lane's donne « God ». Le nom de Dieu est mentionne ici dans l'expression « si Dieu le veut ». Le mot **muhtaduna** est un participe actif pluriel nominatif forme VIII de la racine h-d-y. Le Lane's donne « those who are guided, those who find the right way ». La forme VIII (reflexif) signifie « se guider soi-meme, etre guide ». Les enfants d'Israel promettent qu'ils seront guides — une promesse conditionnelle a la volonte de Dieu.

§JUSTIFICATION§
**dirent** — Le sens retenu est « dire ». Troisieme repetition de la meme formule.

**invoque** — Le sens retenu est « invoquer ». Troisieme repetition.

**ton Seigneur** — Le sens retenu est « seigneur ». Troisieme repetition.

**eclaircisse** — Le sens retenu est « expliquer ». Troisieme demande de clarte.

**les vaches** — Le sens retenu est « vache ». Le mot al-baqara avec l'article defini designe les vaches en general. L'alternative « fendre » est ecartee car le nom defini designe clairement l'animal.

**Dieu** — Le sens retenu est « Dieu ». Le mot Allah est le nom propre de la divinite. Pas d'alternative pertinente.

**guides** — Le sens retenu est « guider ». Le mot muhtaduna forme VIII designe ceux qui sont guides. L'alternative « cadeau » est ecartee car le participe actif forme VIII designe l'acte de trouver la bonne voie, pas un present materiel.

§CRITIQUE§
**les vaches se ressemblent** — Le verbe tashabaha forme VI exprime la ressemblance reciproque. Les enfants d'Israel pretendent que les vaches se ressemblent toutes — c'est une excuse pour justifier leur incapacite a executer l'ordre. Apres deux descriptions precises (age et couleur), cette pretention de ressemblance est peu credible.
**si Dieu le veut** — La formule in sha'a Allah (si Dieu le veut) est ici ambigue. D'un cote, elle exprime la soumission a la volonte divine. De l'autre, elle retarde encore l'execution — « si Dieu le veut » peut signifier « nous ne sommes pas surs de pouvoir ».
**guides vs guider** — Le mot muhtaduna est un participe actif forme VIII qui designe celui qui est dans l'etat de guidance. « Guides » (participe passe en francais) est plus naturel que « nous nous guiderons » qui serait trop reflexif.`,
    segments: [
      { fr: "ils dirent", pos: "verbe", phon: "qaluu", arabic: "قَالُوا۟", word_key: "qwl", is_particle: false, sense_retenu: "dire", position: 0 },
      { fr: "invoque", pos: "verbe", phon: "ud'u", arabic: "ٱدْعُ", word_key: "dew", is_particle: false, sense_retenu: "invoquer", position: 1 },
      { fr: "pour nous", phon: "lana", arabic: "لَنَا", is_particle: true, position: 2 },
      { fr: "ton Seigneur", pos: "nom", phon: "rabbaka", arabic: "رَبَّكَ", word_key: "rbb", is_particle: false, sense_retenu: "seigneur", position: 3 },
      { fr: "qu'Il eclaircisse", pos: "verbe", phon: "yubayyin", arabic: "يُبَيِّن", word_key: "byn", is_particle: false, sense_retenu: "expliquer", position: 4 },
      { fr: "pour nous", phon: "lana", arabic: "لَّنَا", is_particle: true, position: 5 },
      { fr: "ce que", phon: "ma", arabic: "مَا", is_particle: true, position: 6 },
      { fr: "elle est", phon: "hiya", arabic: "هِYَ", is_particle: true, position: 7 },
      { fr: "certes", phon: "inna", arabic: "إِنَّ", is_particle: true, position: 8 },
      { fr: "les vaches", pos: "nom", phon: "al-baqara", arabic: "ٱلْبَقَرَ", word_key: "bqr", is_particle: false, sense_retenu: "vache", position: 9 },
      { fr: "se ressemblent", phon: "tashabaha", arabic: "تَشَٰبَهَ", is_particle: true, position: 10 },
      { fr: "pour nous", phon: "'alayna", arabic: "عَلَيْنَا", is_particle: true, position: 11 },
      { fr: "et certes nous", phon: "wa-inna", arabic: "وَإِنَّآ", is_particle: true, position: 12 },
      { fr: "si", phon: "in", arabic: "إِن", is_particle: true, position: 13 },
      { fr: "veut", phon: "sha'a", arabic: "شَآءَ", is_particle: true, position: 14 },
      { fr: "Dieu", pos: "nom", phon: "Allahu", arabic: "ٱللَّهُ", word_key: "alh", is_particle: false, sense_retenu: "Dieu", position: 15 },
      { fr: "certes guides", pos: "nom", phon: "muhtaduna", arabic: "لَمُهْتَدُونَ", word_key: "hdy", is_particle: false, sense_retenu: "guider", position: 16 }
    ],
    words: [
      {
        word_key: "qwl", position: 0, sense_chosen: "dire",
        analysis_axes: {
          concept_chosen: "Parole/Énonciation",
          concepts: {
            "Parole/Énonciation": {
              status: "retenu",
              senses: ["parole", "discours", "parler", "dire", "affirmer"],
              proof_ctx: "Le verbe qaluu est un accompli 3MP de la racine q-w-l. Le Lane's donne « they said ». Troisieme occurrence de la formule qaluu ud'u lana rabbaka yubayyin lana ma hiya. La triple repetition mot pour mot est une figure de style coranique qui souligne l'obstination du peuple dans la tergiversation.",
              axe1_verset: "Le verbe qaluu ouvre le verset par la troisieme et derniere question. La structure est identique aux versets 68 et 69. Le verset ajoute cependant un element nouveau — la promesse conditionnelle « si Dieu le veut, nous serons guides ». La parole du peuple evolue legerement — de la question pure a la promesse conditionnelle.",
              axe2_voisins: "Les versets 68 et 69 posaient des questions sur l'age et la couleur. Ce verset 70 revient a la question initiale « ce qu'elle est » — comme si les reponses precedentes n'avaient pas suffi. Le retour a la question originale montre l'echec des precisions a satisfaire le peuple. Le verset 71 donnera la derniere reponse et le peuple executera enfin.",
              axe3_sourate: "La triple repetition de qaluu ud'u lana rabbaka dans la sourate constitue un schema de tergiversation par la parole. La sourate montre que les enfants d'Israel sont un peuple qui parle beaucoup mais agit peu. Ce schema est un avertissement pour les musulmans — ne pas repeter les erreurs des enfants d'Israel.",
              axe4_coherence: "Le schema de la triple question est unique dans le Coran. La repetition trois fois de la meme formule est un procede d'intensification. En rhetorique arabe, la repetition triple est un sommet — apres trois fois, la patience est a bout. Le verset 71 montrera que le peuple a failli ne pas executer l'ordre.",
              axe5_frequence: "Pour la mission du khalifa, la triple question est le signe de la tergiversation extreme. Le khalifa qui questionne trois fois sans agir a epuise la patience divine. Les enfants d'Israel sont au bord de l'echec total — seule la derniere reponse les forcera a agir."
            }
          }
        }
      },
      {
        word_key: "dew", position: 1, sense_chosen: "invoquer",
        analysis_axes: {
          concept_chosen: "Appel/Invocation",
          concepts: {
            "Appel/Invocation": {
              status: "retenu",
              senses: ["appeler", "invoquer", "prier", "demander", "inviter"],
              proof_ctx: "Le verbe ud'u est un imperatif 2MS de la racine d-'-w. Le Lane's donne « invoke, call upon ». Troisieme repetition identique de la demande d'invocation. La persistence de la formule montre que le peuple n'a pas change d'attitude — il continue de passer par Moise au lieu de s'adresser directement a Dieu.",
              axe1_verset: "Le verbe ud'u est repete pour la troisieme fois dans le recit de la vache. La repetition est un signe d'obstination — le peuple ne change pas de methode malgre les reponses de Dieu. L'invocation indirecte (par Moise) est devenue une habitude de distance avec Dieu.",
              axe2_voisins: "Les versets 68 et 69 utilisaient la meme formule. Ce verset 70 la repete une derniere fois. Le verset 71 donnera la reponse finale sans que le peuple ait besoin de demander encore — la derniere description sera si precise que meme le peuple tergiversateur ne pourra plus eviter l'execution.",
              axe3_sourate: "La triple invocation indirecte dans la sourate illustre l'echec de la relation directe avec Dieu. En 2:186, Dieu dit « quand Mon serviteur M'interroge a Mon sujet, Je suis proche ». La sourate montre que Dieu est accessible directement — mais les enfants d'Israel refusent cette proximite.",
              axe4_coherence: "La formule ud'u lana rabbaka est specifique au recit de la vache dans le Coran. Aucun autre peuple ne repete trois fois la meme demande d'invocation indirecte. Cette singularite souligne le caractere exceptionnel de la tergiversation des enfants d'Israel.",
              axe5_frequence: "Pour la mission du khalifa, l'invocation directe est la voie de l'obeissance. Le khalifa qui refuse d'invoquer Dieu directement et passe toujours par un intermediaire trahit sa mission de representant de Dieu sur terre."
            }
          }
        }
      },
      {
        word_key: "rbb", position: 3, sense_chosen: "seigneur",
        analysis_axes: {
          concept_chosen: "Seigneurie/Autorité bienveillante",
          concepts: {
            "Seigneurie/Autorité bienveillante": {
              status: "retenu",
              senses: ["celui qui possède", "maître", "gouverner", "propriétaire", "celui qui élève", "celui qui entretient", "seigneur"],
              proof_ctx: "Le mot rabbaka est un nom avec pronom 2MS de la racine r-b-b. Le Lane's donne « thy Lord ». Troisieme repetition de « ton Seigneur » (rabbaka). La persistence du pronom 2MS (ton) au lieu du 1P (notre) montre que l'attitude du peuple n'a pas change — ils maintiennent la distance avec Dieu malgre les reponses precises.",
              axe1_verset: "Le mot rabbaka dans ce verset est la troisieme occurrence dans le recit de la vache. La formule est figee — le peuple repete mecaniquement la meme demande. Le Seigneur de Moise est aussi le Seigneur des enfants d'Israel, mais ils refusent de le reconnaitre comme tel.",
              axe2_voisins: "La triple mention de rabbaka (versets 68, 69, 70) cree un parallele avec d'autres series de trois dans le Coran. La troisieme mention est souvent la derniere — apres quoi le denouement survient. Le verset 71 sera le denouement du recit de la vache.",
              axe3_sourate: "La racine r-b-b dans la sourate al-Baqarah oppose ceux qui reconnaissent Dieu comme leur Seigneur et ceux qui s'en distancient. Les croyants disent « notre Seigneur » (rabbana), les enfants d'Israel disent « ton Seigneur » (rabbaka). Cette difference de pronom est une difference d'attitude.",
              axe4_coherence: "La formule ud'u lana rabbaka est unique dans le Coran. Aucun autre peuple ne s'adresse ainsi a son prophete. En 20:49, Pharaon demande a Moise « qui est votre Seigneur ? » — la distance avec Dieu est aussi un trait de Pharaon. Les enfants d'Israel imitent involontairement l'attitude de celui dont ils ont ete delivres.",
              axe5_frequence: "Pour la mission du khalifa, la reconnaissance du Seigneur est la fondation. Le khalifa dit « mon Seigneur » et « notre Seigneur » — pas « le Seigneur de quelqu'un d'autre ». Les enfants d'Israel echouent dans cette reconnaissance fondamentale."
            }
          }
        }
      },
      {
        word_key: "byn", position: 4, sense_chosen: "expliquer",
        analysis_axes: {
          concept_chosen: "Clarté/Évidence",
          concepts: {
            "Clarté/Évidence": {
              status: "retenu",
              senses: ["être clair", "expliquer", "évident", "preuve"],
              proof_ctx: "Le verbe yubayyin est un inaccompli 3MS forme II de la racine b-y-n. Le Lane's donne « make clear, explain ». Troisieme demande d'eclaircissement. Apres les precisions d'age et de couleur, le peuple demande encore de la clarte sur « ce qu'elle est ». La repetition de la question initiale (ma hiya) montre que les reponses precedentes n'ont pas suffi.",
              axe1_verset: "Le verbe yubayyin est repete pour la troisieme fois. La question revient a « ce qu'elle est » (ma hiya) — la meme question qu'au verset 68. Le peuple tourne en rond — malgre les precisions d'age (68) et de couleur (69), ils reviennent a la question de depart. La clarte divine n'est pas en cause — c'est la volonte d'obeir qui fait defaut.",
              axe2_voisins: "Les versets 68 et 69 donnaient des reponses claires (age moyen, jaune eclatant). Ce verset 70 pretend que « les vaches se ressemblent » — la clarte des reponses precedentes est niee. Le verset 71 devra donner une description si precise que la tergiversation sera impossible.",
              axe3_sourate: "La triple demande de clarte dans la sourate illustre le paradoxe de la tergiversation — plus les reponses sont claires, plus les questions augmentent. La sourate montre que la clarte n'est pas un probleme intellectuel mais moral — celui qui ne veut pas obeir ne trouvera jamais la reponse assez claire.",
              axe4_coherence: "La demande de clarte (yubayyin) est un verbe que le Coran utilise aussi pour decrire sa propre fonction — le Coran « rend clair » (yubayyinu). La demande repetee de clarte sur un sujet deja clarifie est un signe de mauvaise foi, pas de confusion sincere.",
              axe5_frequence: "Pour la mission du khalifa, la clarte divine est suffisante pour agir. Le khalifa qui demande indefiniment des precisions au lieu d'agir trahit sa mission. L'ordre de Dieu est clair — le probleme n'est pas la clarte mais l'obeissance."
            }
          }
        }
      },
      {
        word_key: "bqr", position: 9, sense_chosen: "vache",
        analysis_axes: {
          concept_chosen: "Bétail/Animal",
          concepts: {
            "Bétail/Animal": {
              status: "retenu",
              senses: ["vache", "boeuf"],
              proof_ctx: "Le mot al-baqara est un nom masculin singulier defini accusatif de la racine b-q-r. Le Lane's donne « the cow, the cattle ». L'article defini (al-) et le singulier generique designent le genre bovin en general — les vaches en tant que categorie. Contrairement aux occurrences precedentes (baqaratun, indefini), ici l'article defini generalise — toutes les vaches se ressemblent pour eux.",
              axe1_verset: "Le mot al-baqara est la troisieme mention de la vache dans le recit. Cette fois avec l'article defini et au sens generique — « les vaches se ressemblent pour nous ». Le peuple passe du specifique (une vache d'age moyen, jaune eclatante) au general (les vaches en general). Ce mouvement du specifique au general est un aveu d'impuissance ou de mauvaise foi.",
              axe2_voisins: "Les versets 68 et 69 utilisaient baqaratun (indefini, specifique). Ce verset 70 utilise al-baqara (defini, generique). Le changement d'article est significatif — le peuple ne parle plus de la vache specifique mais de toutes les vaches. Le verset 71 precisera encore plus — une vache qui ne laboure pas et n'irrigue pas.",
              axe3_sourate: "Le mot al-baqara donne son nom a la sourate. L'utilisation du generique (les vaches) pour pretendre la confusion est ironique — la sourate elle-meme s'appelle « la Vache », soulignant l'importance de cette vache specifique. La confusion du peuple contraste avec la precision de la sourate.",
              axe4_coherence: "La racine b-q-r avec l'article defini designe le genre bovin. En 6:144, le Coran mentionne les bovins parmi les animaux licites. La pretention que les vaches « se ressemblent » est une excuse — un eleveur connait ses betes, et les descriptions fournies (age, couleur) sont suffisantes pour identifier une vache.",
              axe5_frequence: "Pour la mission du khalifa, la pretention de confusion face a un ordre clair est un echec. Le khalifa doit distinguer et agir — pas pretendre que tout se ressemble pour eviter l'action. Les enfants d'Israel utilisent la confusion comme excuse."
            }
          }
        }
      },
      {
        word_key: "alh", position: 15, sense_chosen: "Dieu",
        analysis_axes: {
          concept_chosen: "Divinité",
          concepts: {
            "Divinité": {
              status: "retenu",
              senses: ["oui certes", "divinité", "exclamation divine", "divinité (concept)", "théologie", "Dieu"],
              proof_ctx: "Le mot Allahu est le nom propre de Dieu au cas nominatif de la racine a-l-h. Le Lane's donne « God, the Supreme Being ». Le nom de Dieu apparait ici dans la formule conditionnelle in sha'a Allahu (si Dieu le veut). Pour la premiere fois dans le recit, les enfants d'Israel mentionnent Dieu directement par Son nom — ils ne disent plus « ton Seigneur » mais « Dieu ».",
              axe1_verset: "Le mot Allahu est mentionne dans la promesse conditionnelle — « si Dieu le veut, nous serons guides ». La mention directe de Dieu (Allahu) au lieu de « ton Seigneur » (rabbaka) marque un leger progres — le peuple commence a reconnaitre Dieu directement. La formule in sha'a Allah exprime la soumission a la volonte divine.",
              axe2_voisins: "Les versets 68 et 69 ne mentionnaient Dieu que par « ton Seigneur » (rabbaka). Ce verset 70 ajoute la mention directe d'Allah. Le progres est reel mais tardif — trois versets de tergiversation avant de reconnaitre Dieu. Le verset 71 montrera l'execution finale du sacrifice.",
              axe3_sourate: "Le nom Allah traverse toute la sourate al-Baqarah. La mention de Dieu dans le recit de la vache est rare — les enfants d'Israel preferent dire « ton Seigneur ». Cette premiere mention directe de Dieu dans leur bouche est un tournant dans le recit.",
              axe4_coherence: "Le nom Allah apparait plus de 2600 fois dans le Coran. La formule in sha'a Allah est une formule de soumission a la volonte divine que le Coran recommande. En 18:23-24, le Coran avertit de ne pas annoncer une action future sans ajouter la formule si Dieu le veut. La formule est correcte en soi — mais dans ce contexte, elle peut aussi retarder l'action.",
              axe5_frequence: "Pour la mission du khalifa, la reconnaissance de Dieu est la base de l'action. Le khalifa agit en disant in sha'a Allah — en soumettant sa volonte a celle de Dieu. Les enfants d'Israel commencent tardivement a reconnaitre cette dependance."
            },
            "Adoration/Dévotion": {
              status: "nul",
              senses: ["diviniser", "adorer", "faire adorer", "se dévouer au culte"],
              proof_ctx: "Le mot Allahu est le nom propre de Dieu, pas un verbe d'adoration. Le contexte est une formule conditionnelle (si Dieu le veut), pas un acte d'adoration."
            }
          }
        }
      },
      {
        word_key: "hdy", position: 16, sense_chosen: "guider",
        analysis_axes: {
          concept_chosen: "Guidance/Direction",
          concepts: {
            "Guidance/Direction": {
              status: "retenu",
              senses: ["diriger vers la bonne voie", "montrer le chemin", "guidance", "se guider soi-même", "guider"],
              proof_ctx: "Le mot muhtaduna est un participe actif pluriel nominatif forme VIII de la racine h-d-y. Le Lane's donne « those who are rightly guided, those who find the right way ». La forme VIII (ihtada) est un reflexif-moyen — se guider soi-meme, trouver la guidance. Le participe actif designe ceux qui sont dans l'etat de guidance. Le lam emphatique (la-muhtaduna) renforce l'affirmation — « certes guides ».",
              axe1_verset: "Le mot muhtaduna cloture le verset et le recit des questions par une promesse — « si Dieu le veut, nous serons guides ». La guidance est conditionnee par la volonte divine (in sha'a Allah). La promesse est un engagement tardif — apres trois questions, le peuple promet enfin l'obeissance. La forme VIII (reflexive) suggere que la guidance viendra de l'interieur — ils se guideront eux-memes avec l'aide de Dieu.",
              axe2_voisins: "Les versets 68 et 69 se terminaient par des ordres (faites ce qui vous est ordonne) ou des descriptions (elle rejouit les regards). Ce verset 70 se termine par une promesse de guidance — le peuple passe de la passivite a l'engagement. Le verset 71 montrera la realisation de cette promesse.",
              axe3_sourate: "La racine h-d-y est fondamentale dans la sourate al-Baqarah. En 2:2, le Coran est « une guidance pour les pieux ». En 2:5, « ceux-la sont sur une guidance de leur Seigneur ». En 2:38, « celui qui suit Ma guidance n'aura pas de crainte ». La guidance est le fil conducteur de toute la sourate — et les enfants d'Israel promettent tardivement de la chercher.",
              axe4_coherence: "La racine h-d-y apparait 316 fois dans le Coran. La guidance est le don divin par excellence — Dieu guide qui Il veut. La forme VIII (muhtadin) designe celui qui se trouve dans l'etat de guidance — c'est un etat permanent pour celui qui l'atteint. En 7:43, les habitants du Paradis disent « nous n'aurions pas ete guides si Dieu ne nous avait pas guides ».",
              axe5_frequence: "Pour la mission du khalifa, la guidance est la condition de la mission. Le khalifa guide ne peut guider que s'il est lui-meme guide. Les enfants d'Israel promettent d'etre guides — cette promesse est le prelude a l'execution du sacrifice qui sera rapportee dans le verset suivant."
            },
            "Don/Offrande": {
              status: "nul",
              senses: ["cadeau", "offrande", "sacrifice", "présent"],
              proof_ctx: "Le sens de don/offrande est un autre sens de h-d-y (hady = offrande sacrificielle). Le contexte utilise la forme VIII (muhtaduna = guides), pas la forme I nominale (hadya = offrande). Le sens est clairement celui de la guidance, pas du don."
            },
            "Conduite/Comportement": {
              status: "nul",
              senses: ["conduite", "manière d'agir", "comportement calme"],
              proof_ctx: "Le sens de conduite est un sens derive de h-d-y. Le contexte est la promesse d'etre guide (muhtaduna forme VIII), pas une description de comportement. La forme VIII est reflexive et designe l'etat de guidance interieure."
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
  // bqr (id=611) — vache
  { analysis_id: 611, phrases: [
    { sense: "vache", arabic: "قَالَ إِنَّهَا بَقَرَةٌ صَفْرَاءُ", phon: "qala innaha baqaratun safra'u", french: "Il dit : c'est une vache jaune." },
    { sense: "boeuf", arabic: "رَأَى سَبْعَ بَقَرَاتٍ سِمَانٍ", phon: "ra'a sab'a baqaratin simanin", french: "Il vit sept vaches grasses." },
    { sense: "vache", arabic: "إِنَّ البَقَرَ تَشَابَهَ عَلَيْنَا", phon: "inna al-baqara tashabaha 'alayna", french: "Certes les vaches se ressemblent pour nous." }
  ]},
  // frd (id=618) — obligation
  { analysis_id: 618, phrases: [
    { sense: "obliger", arabic: "فَرَضَ اللَّهُ عَلَيْكُمْ خَمْسَ صَلَوَاتٍ", phon: "farada Allahu 'alaykum khamsa salawatin", french: "Dieu vous a prescrit cinq prieres." },
    { sense: "devoir", arabic: "هَذَا فَرْضٌ لَا يُتْرَكُ", phon: "hadha fardun la yutraku", french: "Ceci est un devoir qui ne se neglige pas." },
    { sense: "prescrire", arabic: "قَدْ فَرَضَ اللَّهُ لَكُمْ تَحِلَّةَ أَيْمَانِكُمْ", phon: "qad farada Allahu lakum tahillata aymanikum", french: "Dieu vous a prescrit la dissolution de vos serments." }
  ]},
  // bkr (id=619) — primaute
  { analysis_id: 619, phrases: [
    { sense: "matin", arabic: "سَبِّحْ بِالعَشِيِّ وَالإِبْكَارِ", phon: "sabbih bi-al-'ashiyyi wa-al-ibkari", french: "Glorifie le soir et le matin." },
    { sense: "premier-né", arabic: "لَا فَارِضٌ وَلَا بِكْرٌ عَوَانٌ بَيْنَ ذَلِكَ", phon: "la faridun wa-la bikrun 'awanun bayna dhalika", french: "Ni vieille ni jeune, d'age intermediaire entre cela." },
    { sense: "vierge", arabic: "إِنَّا أَنشَأْنَاهُنَّ إِنشَاءً فَجَعَلْنَاهُنَّ أَبْكَارًا", phon: "inna ansha'nahunna insha'an faja'alnahunna abkaran", french: "Nous les avons creees et les avons faites vierges." }
  ]},
  // lwn (id=613) — couleur
  { analysis_id: 613, phrases: [
    { sense: "couleur", arabic: "وَاخْتِلَافُ أَلْوَانِكُمْ آيَةٌ مِنْ آيَاتِهِ", phon: "wa-ikhtilafu alwanikum ayatun min ayatihi", french: "La diversite de vos couleurs est un signe parmi Ses signes." },
    { sense: "teinte", arabic: "صَفْرَاءُ فَاقِعٌ لَوْنُهَا", phon: "safra'u faqi'un lawnuha", french: "Jaune, eclatante de couleur." },
    { sense: "espèce", arabic: "وَمِنَ الجِبَالِ جُدَدٌ بِيضٌ وَحُمْرٌ مُخْتَلِفٌ أَلْوَانُهَا", phon: "wa-mina al-jibali judadun bidun wa-humrun mukhtalifun alwanuha", french: "Et parmi les montagnes, des stries blanches et rouges, de couleurs differentes." }
  ]},
  // sfr (id=614) — jaune
  { analysis_id: 614, phrases: [
    { sense: "jaune", arabic: "بَقَرَةٌ صَفْرَاءُ فَاقِعٌ لَوْنُهَا", phon: "baqaratun safra'u faqi'un lawnuha", french: "Une vache jaune, eclatante de couleur." },
    { sense: "pâle", arabic: "كَأَنَّهُ جِمَالَتٌ صُفْرٌ", phon: "ka-annahu jimalatun sufrun", french: "Comme si c'etaient des chameaux jaunes." },
    { sense: "doré", arabic: "ثُمَّ يَهِيجُ فَتَرَاهُ مُصْفَرًّا", phon: "thumma yahiju fatarahu musfarray", french: "Puis il se desseche et tu le vois jauni." }
  ]},
  // fqe (id=615) — eclat
  { analysis_id: 615, phrases: [
    { sense: "éclatant", arabic: "صَفْرَاءُ فَاقِعٌ لَوْنُهَا تَسُرُّ النَّاظِرِينَ", phon: "safra'u faqi'un lawnuha tasurru al-nazirina", french: "Jaune, eclatante de couleur, qui rejouit les regards." },
    { sense: "vif", arabic: "لَوْنُهَا فَاقِعٌ لَا شَائِبَةَ فِيهِ", phon: "lawnuha faqi'un la sha'ibata fihi", french: "Sa couleur est vive, sans melange." },
    { sense: "pur", arabic: "أَصْفَرُ فَاقِعٌ خَالِصُ اللَّوْنِ", phon: "asfaru faqi'un khalisu al-lawni", french: "Jaune eclatant, de couleur pure." }
  ]},
  // srr (id=616) — joie
  { analysis_id: 616, phrases: [
    { sense: "réjouir", arabic: "تَسُرُّ النَّاظِرِينَ", phon: "tasurru al-nazirina", french: "Elle rejouit ceux qui la regardent." },
    { sense: "plaire", arabic: "سَرَّهُ مَا رَأَى مِنَ الجَمَالِ", phon: "sarrahu ma ra'a mina al-jamali", french: "Ce qu'il a vu de beaute l'a rejoui." },
    { sense: "réjouir", arabic: "وَأَسَرُّوا النَّجْوَى", phon: "wa-asarru al-najwa", french: "Et ils echangerent des paroles secretes." }
  ]},
  // nzr (id=522) — regard
  { analysis_id: 522, phrases: [
    { sense: "regarder", arabic: "وُجُوهٌ يَوْمَئِذٍ نَاضِرَةٌ إِلَى رَبِّهَا نَاظِرَةٌ", phon: "wujuhun yawma'idhin nadiratun ila rabbiha naziratun", french: "Des visages ce jour-la seront radieux, regardant vers leur Seigneur." },
    { sense: "contempler", arabic: "أَفَلَا يَنْظُرُونَ إِلَى الإِبِلِ كَيْفَ خُلِقَتْ", phon: "afala yanzuruna ila al-ibili kayfa khuliqat", french: "Ne regardent-ils pas les chameaux, comment ils ont ete crees ?" },
    { sense: "considérer", arabic: "اُنْظُرْ كَيْفَ ضَرَبُوا لَكَ الأَمْثَالَ", phon: "unzur kayfa darabuu laka al-amthala", french: "Considere comment ils te donnent des exemples." }
  ]},
  // hdy (id=261) — guidance
  { analysis_id: 261, phrases: [
    { sense: "guider", arabic: "اِهْدِنَا الصِّرَاطَ المُسْتَقِيمَ", phon: "ihdina al-sirata al-mustaqima", french: "Guide-nous vers le chemin droit." },
    { sense: "guidance", arabic: "ذَلِكَ الكِتَابُ لَا رَيْبَ فِيهِ هُدًى لِلمُتَّقِينَ", phon: "dhalika al-kitabu la rayba fihi hudan li-al-muttaqina", french: "Ce Livre, nul doute en lui, est une guidance pour les pieux." },
    { sense: "montrer le chemin", arabic: "وَإِنَّكَ لَتَهْدِي إِلَى صِرَاطٍ مُسْتَقِيمٍ", phon: "wa-innaka latahdi ila siratin mustaqimin", french: "Et certes tu guides vers un chemin droit." }
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

  const verseIds = [75, 76, 77];
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
  console.log('=== PIPELINE SOURATE 2 — AL-BAQARAH — VERSETS 68 A 70 ===\n');

  let totalOk = 0, totalErr = 0;

  for (let v = 68; v <= 70; v++) {
    const result = await processVerse(v);
    if (result) {
      totalOk += result.okCount;
      totalErr += result.errCount;
    }
  }

  await syncWordMeanings();
  await insertDailyPhrases();

  console.log(`\n=== PIPELINE V68-70 TERMINEE — TOTAL: ${totalOk} OK, ${totalErr} erreurs ===`);
}

main().catch(e => console.error('FATAL:', e));
