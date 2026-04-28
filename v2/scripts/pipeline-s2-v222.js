const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// =====================================================
// PIPELINE SOURATE 2 — VERSET 222
// verse_id=229, analysis_id=586
// "wa-yas'alunaka 'an al-mahidi
//  qul huwa adhan
//  fa-i'tazilu al-nisa'a fi al-mahidi
//  wa-la taqrabuhunna hatta yathhurna
//  fa-idha tataharna fa-'tuhunna min haythu amarakumu Allahu
//  inna Allaha yuhibbu al-tawwabina wa-yuhibbu al-mutatahhirin"
// =====================================================

const verseData = {
  222: {
    verse_id: 229,
    analysis_id: 586,
    translation_arab: "Ils t'interrogent sur la menstruation. Dis : c'est une nuisance. Eloignez-vous des femmes pendant la menstruation. Ne les approchez pas jusqu'a ce qu'elles soient pures. Puis quand elles se sont purifiees, allez vers elles par ou Dieu vous l'a ordonne. Dieu aime ceux qui reviennent et Il aime ceux qui se purifient.",
    full_translation: "Et ils t'interrogent sur la menstruation. Dis: «C'est un mal. Éloignez-vous des femmes pendant la menstruation et ne les approchez pas jusqu'à ce qu'elles soient purifiées. Puis quand elles sont purifiées, allez-y par où Allah vous l'a commandé. Allah aime ceux qui se repentent et Il aime ceux qui se purifient.»",
    translation_explanation: `§DEMARCHE§
Le verset 222 est un verset legislatif sur la menstruation (al-mahid). Il est construit en trois parties : 1) une question posee au Prophete sur la menstruation, 2) une reponse en trois temps (c'est une nuisance → eloignez-vous → ne vous approchez pas jusqu'a la purification, puis approchez quand purifiees selon l'ordre de Dieu), 3) une conclusion theologique (Dieu aime ceux qui reviennent et ceux qui se purifient).

Le nom **al-mahidi** est un nom masdar de la racine h-y-d. Le Lane's donne : menstruation, le flux menstruel, avoir ses regles. Al-mahid designe a la fois la periode de menstruation et le flux lui-meme. C'est un terme technique legislatif — le verset etablit une loi a partir de ce terme.

Le nom **adhan** est un nom indefini de la racine a-dh-y. Le Lane's donne : nuisance, souffrance, mal, ce qui cause de la peine ou de la gene. L'adha est le mal diffus — ce qui gene, incommode ou fait souffrir sans necessairement etre un tort moral. « Huwa adhan » = c'est une nuisance.

Le verbe **i'tazilu** est un imperatif pluriel masculin Form VIII de la racine '-z-l. Le Lane's donne : se separer, s'isoler de, s'ecarter de. La Form VIII (i'fazala) est reflexive — elle signifie se retirer soi-meme de quelque chose. L'imperatif ici est une injonction : eloignez-vous, tenez-vous a l'ecart.

Le verbe **taqrabuhunna** est un inaccompli 2MP negatif de la racine q-r-b. Le Lane's donne : s'approcher de, se rapprocher de. « La taqrabuhunna » = ne vous approchez pas d'elles. La prohibition porte sur l'approche intime.

Le verbe **yathhurna** est un inaccompli 3FP de la racine t-h-r. Le Lane's donne : etre pur, se purifier, devenir pur. « Hatta yathhurna » = jusqu'a ce qu'elles soient pures (etat).

Le verbe **tataharna** est un inaccompli 3FP Form V de la racine t-h-r. Le Lane's donne : se purifier activement. La Form V est reflexive-causative — elle indique une action deliberee de purification. « Idha tataharna » = quand elles se sont purifiees (acte). La distinction entre yathhurna (etat de purete) et tataharna (acte de purification) est significative : la premiere est la fin du flux, la seconde est la purification rituelle accomplie.

Le verbe **amarakumu** est un accompli 3MS de la racine a-m-r avec suffixe 2MP. Le Lane's donne : ordonner, commander, prescrire. « Min haythu amarakumu Allahu » = par ou Dieu vous l'a ordonne. La forme accomplie (amara) indique que l'ordre est deja donne — le Coran se refere a lui-meme ou a une prescription etablie.

Le verbe **yuhibbu** est un inaccompli 3MS de la racine h-b-b. Le Lane's donne : aimer, avoir de l'affection pour, preferer. « Yuhibbu al-tawwabina » = Il aime ceux qui reviennent. L'amour divin exprime ici est une consequence de l'acte de retour et de purification.

Le nom **al-tawwabina** est un participe actif pluriel masculin accusatif intensif (Form II) de la racine t-w-b. Le Lane's donne : ceux qui reviennent, ceux qui se repentent souvent et constamment. La forme intensive (tawwab) indique la repetition — non pas un retour ponctuel mais un retour habituel vers Dieu.

Le nom **al-mutatahhirin** est un participe actif pluriel masculin genitif Form V de la racine t-h-r. Le Lane's donne : ceux qui se purifient activement. La Form V confirme l'acte delibere de purification — ceux qui font la demarche de se purifier.

§JUSTIFICATION§
**menstruation** — « al-mahid » est traduit par « la menstruation » car h-y-d designe specifiquement le flux menstruel et sa periode. Hamidullah traduit par « la menstruation » — conforme au terme.

**une nuisance** — « adhan » est traduit par « une nuisance » car a-dh-y designe le mal diffus, la gene, ce qui incommode. Hamidullah traduit par « un mal » — acceptable mais « nuisance » est plus proche de l'arabe qui ne designe pas un peche moral mais une condition penible. Le terme adha est neutre — il dit que la menstruation est une condition difficile, pas une impurete morale.

**eloignez-vous** — « i'tazilu » est un imperatif Form VIII reflexif. La traduction « eloignez-vous » (Hamidullah : « eloignez-vous ») est correcte. La Form VIII indique le mouvement delibere de separation.

**jusqu'a ce qu'elles soient pures... puis quand elles se sont purifiees** — la distinction entre yathhurna (etat de purete atteint = fin du flux) et tataharna (acte de purification = ablution rituelle accomplie) justifie la double formulation. Hamidullah traduit par « jusqu'a ce qu'elles soient purifiees. Puis quand elles sont purifiees » — la repetition reflete le texte.

**par ou Dieu vous l'a ordonne** — « min haythu amarakumu Allahu » est traduit litteralement. Hamidullah traduit par « par ou Allah vous l'a commande » — conforme.

**ceux qui reviennent** — « al-tawwabina » est le pluriel du participe intensif de t-w-b. La Form I est le retour, la Form II intensive (tawwab) est le retour habituel. Hamidullah traduit par « ceux qui se repentent » — acceptable mais la racine t-w-b designe le retour (vers Dieu) plus que le repentir psychologique.

**ceux qui se purifient** — « al-mutatahhirin » (Form V) est la purification active et deliberee. Hamidullah traduit par « ceux qui se purifient » — conforme.

§CRITIQUE§
Hamidullah traduit « adhan » par « un mal » alors que le terme arabe designe plutot une nuisance, une gene, un inconvenient — quelque chose qui cause de la peine sans etre necessairement une transgression morale. « Mal » (en francais) peut etre compris comme un peche ou une corruption, ce que l'arabe adha n'implique pas. La menstruation est presentee comme une condition penible (adha), pas comme un etat de peche.

La distinction entre les deux formes de la racine t-h-r (yathhurna / tataharna) est importante theologiquement : la premiere marque la fin naturelle du flux (la purete revient), la seconde marque l'acte rituel de purification (l'ablution ou le bain). Ce sont deux etapes distinctes. Hamidullah les rend par la meme formulation « jusqu'a ce qu'elles soient purifiees / quand elles sont purifiees » sans marquer cette distinction — ce qui est fidele au sens global mais efface une nuance que les juristes ont longuement debattue.

La conclusion (Dieu aime les tawwabun et les mutatahhirun) etend la portee du verset au-dela de la menstruation : le retour vers Dieu (tawwab) et la purification (mutatahhir) sont des attitudes generales que Dieu aime. La menstruation devient ainsi un cas particulier d'une loi generale sur la purete et le retour.`,
    segments: [
      { fr: "Et ils t'interrogent sur la menstruation", pos: "nom", phon: "wa-yas'alunaka 'ani al-mahidi", arabic: "وَيَسْـَٔلُونَكَ عَنِ ٱلْمَحِيضِ", word_key: "sal", is_particle: false, sense_retenu: "interroger", position: 0 },
      { fr: "Dis : c'est une nuisance", pos: "nom", phon: "qul huwa adhan", arabic: "قُلْ هُوَ أَذًى", word_key: "adhy", is_particle: false, sense_retenu: "gêne", position: 1 },
      { fr: "eloignez-vous des femmes", pos: "verbe", phon: "fa-i'tazilu al-nisa'a", arabic: "فَٱعْتَزِلُوا۟ ٱلنِّسَآءَ", word_key: "ezl", is_particle: false, sense_retenu: "séparer", position: 2 },
      { fr: "pendant la menstruation", pos: "nom", phon: "fi al-mahidi", arabic: "فِى ٱلْمَحِيضِ", word_key: "hyd", is_particle: false, sense_retenu: "menstruation", position: 3 },
      { fr: "et ne les approchez pas", pos: "verbe", phon: "wa-la taqrabuhunna", arabic: "وَلَا تَقْرَبُوهُنَّ", word_key: "qrb", is_particle: false, sense_retenu: "s'approcher", position: 4 },
      { fr: "jusqu'a ce qu'elles soient pures", pos: "verbe", phon: "hatta yathhurna", arabic: "حَتَّىٰ يَطْهُرْنَ", word_key: "thr", is_particle: false, sense_retenu: "être pur", position: 5 },
      { fr: "puis quand elles se sont purifiees approchez-les par ou Dieu vous l'a ordonne", pos: "verbe", phon: "fa-idha tataharna fa-'tuhunna min haythu amarakumu Allahu", arabic: "فَإِذَا تَطَهَّرْنَ فَأْتُوهُنَّ مِنْ حَيْثُ أَمَرَكُمُ ٱللَّهُ", word_key: "amr", is_particle: false, sense_retenu: "ordonner", position: 6 },
      { fr: "Dieu aime ceux qui reviennent", pos: "verbe", phon: "inna Allaha yuhibbu al-tawwabina", arabic: "إِنَّ ٱللَّهَ يُحِبُّ ٱلتَّوَّٰبِينَ", word_key: "twb", is_particle: false, sense_retenu: "se repentir", position: 7 },
      { fr: "et Il aime ceux qui se purifient", pos: "verbe", phon: "wa-yuhibbu al-mutatahhirina", arabic: "وَيُحِبُّ ٱلْمُتَطَهِّرِينَ", word_key: "thr", is_particle: false, sense_retenu: "se purifier", position: 8 }
    ],
    vwa: [
      {
        word_key: "sal",
        position: 0,
        sense_chosen: "interroger",
        analysis_axes: {
          sense_chosen: "interroger",
          concept_chosen: "Requête/Interrogation",
          concepts: {
            "Requête/Interrogation": {
              status: "retenu",
              senses: ["interroger", "demander", "questionner"],
              proof_ctx: "Le verbe yas'alunaka est un inaccompli 3MP de la racine s-a-l avec suffixe 2MS (te). Le Lane's donne : interroger, demander, questionner. La forme yas'alunaka est recurrente dans la sourate al-Baqarah — elle introduit les questions posees au Prophete sur des points de loi ou de doctrine. La structure « wa-yas'alunaka 'an » (et ils t'interrogent sur) est une formule legislative standard du Coran.",
              axe1_verset: "L'interrogation (yas'alunaka) sur la menstruation ouvre le verset legislatif. La question vient de la communaute — elle est concrete et pratique. La reponse est une injonction en plusieurs parties : declaration (c'est une nuisance), prohibition (eloignez-vous, ne vous approchez pas), autorisation conditionnelle (puis approchez quand purifiees). L'interrogation motive la loi.",
              axe2_voisins: "Le verset 219 utilisait la meme formule « yas'alunaka 'an al-khamri wa-al-maysir » (ils t'interrogent sur le vin et les jeux de hasard). Le verset 220 : « yas'alunaka 'an al-yatama » (sur les orphelins). Le verset 222 : « yas'alunaka 'an al-mahid » (sur la menstruation). La serie des questions (219, 220, 222) forme un ensemble legislatif coherent — la sourate repond aux questions pratiques de la communaute naissante.",
              axe3_sourate: "La racine s-a-l est tres presente dans la sourate al-Baqarah sous la forme yas'alunaka. Chaque question est suivie d'une reponse divine precise. La structure question-reponse est le mode pedagogique de la sourate pour etablir les lois pratiques.",
              axe4_coherence: "La racine s-a-l apparait environ 129 fois dans le Coran. La forme yas'alunaka (ils t'interrogent) apparait specifiquement dans les versets legislatifs de la sourate al-Baqarah et d'autres. L'interrogation est le moteur de la revelation legislative — les questions humaines appellent les reponses divines.",
              axe5_frequence: "Pour le khalifa, la reponse aux questions de la communaute est une obligation fondamentale. Le modele coranique (question posee → reponse divine transmise par le Prophete) etablit que le gouvernant doit repondre aux besoins pratiques de sa communaute. Le verset 222 montre que meme les questions les plus intimes de la vie quotidienne recoivent une reponse legislative."
            }
          }
        }
      },
      {
        word_key: "adhy",
        position: 1,
        sense_chosen: "gêne",
        analysis_axes: {
          sense_chosen: "gêne",
          concept_chosen: "Nuisance/Souffrance",
          concepts: {
            "Nuisance/Souffrance": {
              status: "retenu",
              senses: ["gêne", "nuire"],
              proof_ctx: "Le nom adhan est un nom indefini accusatif de la racine a-dh-y. Le Lane's donne : nuisance, gene, souffrance, mal diffus, ce qui cause de la peine sans etre necessairement un acte moral. L'adha designe une condition penible — pas un peche ni une impurete au sens rituel strict, mais une gene concrète. « Huwa adhan » = c'est une nuisance. La qualification de la menstruation comme adha etablit la raison des restrictions qui suivent : non pas une impurete morale mais une condition physiologique genante.",
              axe1_verset: "La qualification de la menstruation comme adha (nuisance) est la justification des injonctions qui suivent. Le texte ne condamne pas la menstruation moralement — il la caracterise comme une gene physique. Cette caracterisation motive les deux prohibitions (eloignez-vous / ne vous approchez pas) : non par impurete morale mais par consideration de la condition genante.",
              axe2_voisins: "Le verset 221 parlait de la prohibition du mariage avec les polythéistes. Le verset 222 introduit un nouveau domaine legislatif : la menstruation. La transition est brusque — la sourate accumule les lois pratiques. La notion d'adha (nuisance) est differente du haram (interdit moral) — c'est une categorisation qui menage la dignite de la femme.",
              axe3_sourate: "La racine a-dh-y apparait dans la sourate al-Baqarah en plusieurs contextes : en 2:196, le pelerinage interrompu par la maladie ou un probleme (adhan). En 2:262-263, la nuisance dans l'acte de donner (manna wa-adhan). En 2:222, la menstruation comme adha. La racine designe systematiquement ce qui gene et incommode dans la vie pratique.",
              axe4_coherence: "La racine a-dh-y apparait environ 24 fois dans le Coran. L'adha est le mal diffus, quotidien — distinct du zulm (injustice) et du fasad (corruption). L'adha peut etre involontaire — la menstruation est un adha physiologique, non un choix ni une transgression.",
              axe5_frequence: "Pour le khalifa, reconnaitre l'adha (nuisance) sans la condamner moralement est un principe de gouvernance equitable. La loi qui repose sur la gene pratique (adha) plutot que sur une impurete morale est plus juste et plus humaine. Le verset 222 etablit un principe : la loi s'adapte aux conditions physiologiques reelles sans les stigmatiser moralement."
            }
          }
        }
      },
      {
        word_key: "ezl",
        position: 2,
        sense_chosen: "séparer",
        analysis_axes: {
          sense_chosen: "séparer",
          concept_chosen: "Séparation/Isolation",
          concepts: {
            "Séparation/Isolation": {
              status: "retenu",
              senses: ["isoler", "séparer", "destituer"],
              proof_ctx: "Le verbe i'tazilu est un imperatif pluriel masculin Form VIII de la racine '-z-l. Le Lane's donne : se separer de, s'isoler de, s'ecarter de. La Form VIII (i'tazala) est reflexive — l'action porte sur le sujet lui-meme qui se retire. L'imperatif pluriel « i'tazilu » = eloignez-vous (vous-memes). La complement est al-nisa'a fi al-mahid (les femmes pendant la menstruation). L'injonction est de se tenir a l'ecart, de maintenir une distance.",
              axe1_verset: "L'eloignement (i'tazilu) des femmes pendant la menstruation est la premiere injonction du verset. Elle est suivie d'une seconde prohibition (la taqrabuhunna). Les deux injonctions forment un double commandement : eloignez-vous (en general) et ne vous approchez pas (en particulier). La Separation/Isolation est la regle generale, la prohibition d'approche est la regle specifique.",
              axe2_voisins: "Le verset 219 traitait du vin et des jeux de hasard — des prohibitions claires. Le verset 222 traite de la menstruation — une situation temporaire qui implique une separation provisoire, pas une prohibition permanente. La separation (i'tazila) est distincte du haram absolu : elle est conditionnee par la periode de menstruation et cesse avec la purification.",
              axe3_sourate: "La racine '-z-l apparait dans la sourate al-Baqarah en 2:222 uniquement dans cette forme. La separation prescrite est limitee dans le temps — « hatta yathhurna » (jusqu'a ce qu'elles soient pures). C'est une mesure temporaire et conditionnelle, non une exclusion permanente.",
              axe4_coherence: "La racine '-z-l apparait environ 10 fois dans le Coran. La separation (i'tizal) est prescrite dans des contextes precis : eviter ce qui cause une gene ou un tort. En 19:48, Ibrahim s'isole de son peuple et de ses idoles. La separation est une mesure de protection — soi-meme et l'autre.",
              axe5_frequence: "Pour le khalifa, l'i'tizal (separation provisoire) est un principe de politique sanitaire et sociale. Se tenir a l'ecart de ce qui cause une gene ou un tort, le temps que la condition change, est une sagesse pratique. Le verset 222 montre que la separation n'est pas une stigmatisation mais une mesure de soin — provisoire, motivee, et suivie d'un retour autorise."
            }
          }
        }
      },
      {
        word_key: "hyd",
        position: 3,
        sense_chosen: "menstruation",
        analysis_axes: {
          sense_chosen: "menstruation",
          concept_chosen: "Menstruation/Flux",
          concepts: {
            "Menstruation/Flux": {
              status: "retenu",
              senses: ["menstruation", "avoir ses règles", "couler (sang)"],
              proof_ctx: "Le nom al-mahidi (position 3) est une repetition du meme mot qu'en debut de verset (position 0). Al-mahid est un nom masdar de la racine h-y-d. Le Lane's donne : menstruation, flux menstruel, periode des regles. La repetition est structurelle : la question porte sur al-mahid, et la restriction est situee dans al-mahid (« fi al-mahid » = pendant la menstruation). La preposition fi (dans/pendant) indique la duree — la restriction est temporelle, limitee a la periode du flux.",
              axe1_verset: "La seconde occurrence d'al-mahid (fi al-mahidi = pendant la menstruation) delimite temporellement la restriction. La separation et la prohibition d'approche sont situees dans le temps de la menstruation — elles cessent avec lui. Le verset construit une loi temporelle : pendant le mahid (restriction) → apres le mahid (autorisation conditionnelle).",
              axe2_voisins: "La premiere occurrence d'al-mahid (position 0) est l'objet de la question. La seconde (position 3) est le cadre temporel de la restriction. Entre les deux occurrences, le verset a pose la qualification (adha) et la premiere injonction (i'tazilu). La structure montre que le mahid est a la fois l'objet de la question et le cadre de la loi.",
              axe3_sourate: "La racine h-y-d n'apparait que dans ce verset dans la sourate al-Baqarah. C'est le seul texte coranique traitant directement de la menstruation en termes legislatifs. La sourate al-Baqarah est la sourate legislative par excellence — elle traite des situations de la vie quotidienne qui necessitent un cadre legal.",
              axe4_coherence: "La racine h-y-d apparait 3 fois dans le Coran, toutes dans le verset 2:222 (al-mahid x2, al-mahida x1 dans certaines lectures). C'est un hapax legislatif — un terme technique qui n'apparait que dans ce contexte precis. La rarete du terme souligne la specificite de la loi.",
              axe5_frequence: "Pour le khalifa, la loi sur la menstruation montre que le cadre legal divin descend jusqu'aux details les plus intimes de la vie humaine. Le legislateur divin ne laisse pas les situations physiologiques sans cadre — il les regit avec precision et equite. La menstruation (mahid) est un cas type de la legislation sur les etats temporaires du corps."
            }
          }
        }
      },
      {
        word_key: "qrb",
        position: 4,
        sense_chosen: "s'approcher",
        analysis_axes: {
          sense_chosen: "s'approcher",
          concept_chosen: "Proximité/Rapprochement",
          concepts: {
            "Proximité/Rapprochement": {
              status: "retenu",
              senses: ["s'approcher", "rapprocher", "être proche"],
              proof_ctx: "Le verbe taqrabuhunna est un inaccompli 2MP de la racine q-r-b avec suffixe 3FP (elles). Il est precede de la negation la — « la taqrabuhunna » = ne vous approchez pas d'elles. Le Lane's donne : s'approcher de, se rapprocher de, s'y rapporter. La prohibition d'approche (la taqrabu) est une formule recurrente dans le Coran pour interdire l'acces a quelque chose — elle est plus forte qu'une simple prohibition de l'acte : elle interdit meme l'approche.",
              axe1_verset: "La prohibition d'approche (la taqrabuhunna) vient apres l'injonction d'eloignement (i'tazilu). Les deux forment un double cadre : eloignez-vous (distance active) ET ne vous approchez pas (proximite interdite). La double formulation renforce la loi — d'abord le mouvement de retrait, puis l'interdiction de revenir. La condition de fin est « hatta yathhurna » (jusqu'a ce qu'elles soient pures).",
              axe2_voisins: "La formule « la taqrabu » (ne vous approchez pas) apparait dans la sourate al-Baqarah en 2:187 (« ne les approchez pas » pendant le retrait spirituel en mosquee, i'tikaf), en 2:229-230 (limites du mariage), et en 2:222. La formule est une prohibition d'acces — elle dit que la frontiere elle-meme ne doit pas etre franchie.",
              axe3_sourate: "La racine q-r-b est presente dans la sourate al-Baqarah sous plusieurs formes. En 2:177, le qaraba (parent proche) dans la liste des beneficiaires. En 2:187, la prohibition d'approche pendant l'i'tikaf. En 2:222, la prohibition pendant la menstruation. Les interdictions d'approche (la taqrabu) etablissent des frontieres temporelles et spatiales.",
              axe4_coherence: "La racine q-r-b apparait environ 96 fois dans le Coran. La formule « la taqrabu » (ne vous approchez pas) est une prohibition de frontieres — plus forte que la simple prohibition d'un acte. En 17:32, « ne vous approchez pas de la fornication ». En 2:35 (Adam), « ne vous approchez pas de cet arbre ». La proximite interdite signale une frontiere sacree.",
              axe5_frequence: "Pour le khalifa, la prohibition d'approche (la taqrabu) est un principe de politique preventive. Interdire l'approche d'une frontiere — pas seulement l'acte lui-meme — est plus efficace pour maintenir l'ordre. Le verset 222 montre que la loi divine etablit des marges de securite autour des restrictions, pas seulement les restrictions elles-memes."
            }
          }
        }
      },
      {
        word_key: "thr",
        position: 5,
        sense_chosen: "être pur",
        analysis_axes: {
          sense_chosen: "être pur",
          concept_chosen: "Pureté/Purification",
          concepts: {
            "Pureté/Purification": {
              status: "retenu",
              senses: ["être pur", "purifier", "se purifier", "pur"],
              proof_ctx: "Le verbe yathhurna est un inaccompli 3FP Form I de la racine t-h-r. Le Lane's donne : etre pur, devenir pur, atteindre l'etat de purete. La Form I (tahara) designe l'etat — elles deviennent pures (le flux s'arrete). C'est distinct de la Form V (tatahara = se purifier activement, faire le bain rituel). « Hatta yathhurna » = jusqu'a ce qu'elles soient pures (etat naturel de fin du flux).",
              axe1_verset: "La premiere condition de fin de restriction est yathhurna (qu'elles soient pures = fin du flux). La seconde condition est tataharna (qu'elles se soient purifiees = bain rituel accompli). Le verset distingue deux etapes : la fin naturelle de la menstruation (tahara = etat) et la purification rituelle deliberee (tatahara = acte). Les deux etapes sont necessaires avant l'autorisation.",
              axe2_voisins: "Le verset 221 evoquait le bapteme (sibghat Allahi = teinte de Dieu) comme identification des croyants. Le verset 222 parle de purete (tahara) physique et rituelle. Les deux notions de purete sont differentes — l'une est spirituelle (sibgha), l'autre est physique-rituelle (tahara). La sourate traite les deux dimensions sans les confondre.",
              axe3_sourate: "La racine t-h-r est presente dans la sourate al-Baqarah en 2:222 (trois occurrences : yathhurna, tataharna, al-mutatahhirin), en 2:232 et 2:237. La purete (tahara) est un concept juridique central dans la sourate — elle conditionne l'acces a certains actes (priere, rapport conjugal).",
              axe4_coherence: "La racine t-h-r apparait environ 31 fois dans le Coran. La purete (tahara) est a la fois physique (absence de souillure) et rituelle (accomplissement du bain ou des ablutions). Le Coran distingue toujours ces deux dimensions — la purete naturelle (etat) et la purete rituelle (acte delibere).",
              axe5_frequence: "Pour le khalifa, la purete (tahara) est une condition d'acces a certaines fonctions — la priere, certains rites, certains actes. Le principe est que l'etat corporel conditionne la capacite rituelle. Cette logique s'etend a la gouvernance : la purete des intentions et des actes conditionne la legitimite de l'action publique."
            }
          }
        }
      },
      {
        word_key: "amr",
        position: 6,
        sense_chosen: "ordonner",
        analysis_axes: {
          sense_chosen: "ordonner",
          concept_chosen: "Commandement/Autorité",
          concepts: {
            "Commandement/Autorité": {
              status: "retenu",
              senses: ["ordonner", "commander", "nommer gouverneur"],
              proof_ctx: "Le verbe amarakumu est un accompli 3MS de la racine a-m-r avec suffixe 2MP. Le Lane's donne : ordonner, commander, prescrire, etablir une regle. La forme accomplie (amara) indique que l'ordre est deja etabli — Dieu a ordonne. « Min haythu amarakumu Allahu » = par ou Dieu vous l'a ordonne. L'ordre divin (amr) est le cadre dans lequel l'approche est autorisee apres la purification.",
              axe1_verset: "L'ordre divin (amarakumu Allahu) est la reference normative qui conditionne l'approche autorisee. Apres la purification (tataharna), l'approche est permise mais selon l'ordre divin — pas selon le desir ou l'arbitraire humain. Le commandement (amr) de Dieu est a la fois une permission et un cadre : « approchez selon ce que Dieu a ordonne ».",
              axe2_voisins: "Le verset 219 mentionnait la volonte divine (yatafakkarun = pour que vous reflechissiez). Le verset 222 mentionne l'ordre divin (amarakumu). La progression montre que Dieu non seulement invite a la reflexion mais aussi donne des ordres precis. L'amr (ordre) est plus constraignant que l'invitation a la reflexion.",
              axe3_sourate: "La racine a-m-r est tres presente dans la sourate al-Baqarah sous differentes formes. En 2:27, ceux qui coupent ce que Dieu a ordonne (amara). En 2:67, Moise transmet l'ordre de Dieu. En 2:222, l'ordre de Dieu conditionne l'approche conjugale apres la menstruation. L'amr (ordre) est le moteur de la legislation divine.",
              axe4_coherence: "La racine a-m-r apparait environ 247 fois dans le Coran. Al-Amr (le commandement/l'ordre) est un des concepts centraux — il designe la volonte divine qui s'exprime en prescriptions. Le khalifa est celui qui execute l'amr de Dieu dans la cite.",
              axe5_frequence: "Pour le khalifa, l'amr (commandement) de Dieu est la source premiere de la loi. Le verset 222 montre que meme les permissions (approche apres purification) sont encadrees par l'amr divin — rien n'est libre d'arbitraire. Le khalifa gouverne en executant l'amr de Dieu, pas ses propres desirs."
            }
          }
        }
      },
      {
        word_key: "twb",
        position: 7,
        sense_chosen: "se repentir",
        analysis_axes: {
          sense_chosen: "se repentir",
          concept_chosen: "Retour",
          concepts: {
            "Retour": {
              status: "retenu",
              senses: ["se repentir", "revenir", "accepter le repentir", "repentir"],
              proof_ctx: "Le nom al-tawwabina est un participe actif pluriel masculin accusatif de la racine t-w-b, a la forme intensive (tawwab = celui qui revient souvent). Le Lane's donne : revenir vers Dieu, se repentir, retourner. La forme intensive tawwab (et non simplement ta'ib) indique la repetition et l'habitude — celui qui revient constamment vers Dieu. « Yuhibbu al-tawwabina » = Il aime ceux qui reviennent (habituellement).",
              axe1_verset: "L'amour divin pour les tawwabun (ceux qui reviennent) conclut le verset sur la menstruation. Le lien est theologique : les restrictions (eloignement, prohibition d'approche) sont des occasions de retour vers Dieu — en les respectant, on revient vers Dieu. Le verset transforme une loi pratique en attitude spirituelle : respecter la loi = revenir vers Dieu.",
              axe2_voisins: "Le verset 218 parlait de ceux qui ont emigre et lutté — Dieu est misericordieux et pardonnant. Le verset 222 parle de ceux qui reviennent (tawwabun) — Dieu les aime. La progression (misericorde en 218, amour en 222) montre l'intensite croissante du rapport entre Dieu et ceux qui s'orientent vers Lui.",
              axe3_sourate: "La racine t-w-b est tres presente dans la sourate al-Baqarah. En 2:37, Adam revient vers Dieu apres la faute (fa-taba 'alayhi). En 2:54, les Israelites reviennent vers Dieu apres le veau d'or. En 2:160, ceux qui reviennent et s'ameliorent. En 2:222, Dieu aime les tawwabun. Le retour (tawba) est le mouvement central de la sourate — revenir vers Dieu apres l'ecart.",
              axe4_coherence: "La racine t-w-b apparait environ 87 fois dans le Coran. La tawba est le retour vers Dieu — le mouvement de reorientation apres un eloignement. Ce n'est pas seulement le regret psychologique mais l'acte concret de se retourner vers Dieu et de reorienter sa conduite.",
              axe5_frequence: "Pour le khalifa, encourager le retour (tawba) de ceux qui se sont ecartes est une fonction spirituelle et politique. Le khalifa qui incarne la tawba (retour vers les principes divins) attire l'amour de Dieu. Le verset 222 montre que meme dans le contexte d'une loi pratique (menstruation), la conclusion est spirituelle : Dieu aime ceux qui reviennent."
            }
          }
        }
      },
      {
        word_key: "thr",
        position: 8,
        sense_chosen: "se purifier",
        analysis_axes: {
          sense_chosen: "se purifier",
          concept_chosen: "Pureté/Purification",
          concepts: {
            "Pureté/Purification": {
              status: "retenu",
              senses: ["être pur", "purifier", "se purifier", "pur"],
              proof_ctx: "Le nom al-mutatahhirina est un participe actif pluriel masculin genitif Form V de la racine t-h-r. Le Lane's donne : ceux qui se purifient activement, ceux qui font l'acte delibere de purification. La Form V (tatahara) est reflexive-causative — elle implique un acte volontaire et delibere de purification, contrairement a la Form I (tahara = etre naturellement pur). « Yuhibbu al-mutatahhirina » = Il aime ceux qui se purifient (activement).",
              axe1_verset: "Les mutatahhirun (ceux qui se purifient) sont les deuxiemes beneficiaires de l'amour divin, apres les tawwabun. Le parallele est construit : Dieu aime ceux qui reviennent (tawba = mouvement spirituel) ET ceux qui se purifient (tahara = acte physique et rituel). La double conclusion articule la dimension spirituelle (retour vers Dieu) et la dimension physique-rituelle (purification du corps). Les deux sont aimes de Dieu.",
              axe2_voisins: "La position 5 du verset mentionnait yathhurna (qu'elles soient pures = Form I, etat). La position 6 mentionnait tataharna (qu'elles se soient purifiees = Form V, acte). La position 8 mentionne al-mutatahhirun (ceux qui se purifient = Form V, participe). La progression Form I → Form V montre le mouvement de l'etat naturel vers l'acte delibere — la purete s'accomplit en deux etapes.",
              axe3_sourate: "La racine t-h-r apparait trois fois dans le verset 222. La conclusion « yuhibbu al-mutatahhirina » etend la portee de la purification au-dela de la menstruation — la purification (tahara) est une valeur generale que Dieu aime, dont la menstruation est un cas particulier.",
              axe4_coherence: "La paire tawwab/mutatahhir (celui qui revient / celui qui se purifie) est une paire unique dans le Coran — elle n'apparait qu'en 2:222. Cette double caracterisation montre que la pieté (tawba) et la purete (tahara) sont les deux dimensions de la relation a Dieu : retour vers Lui et purete devant Lui.",
              axe5_frequence: "Pour le khalifa, la purete (tahara) est a la fois personnelle et institutionnelle. Le khalifa qui se purifie — de ses intentions, de ses actes, de ses affaires — est dans la categorie des mutatahhirun que Dieu aime. Le verset 222 etablit que la purification deliberee est une valeur divine : Dieu aime ceux qui font la demarche active de se purifier."
            }
          }
        }
      }
    ],
    daily_phrases: []
  }
};

async function main() {
  const data = verseData[222];

  const { error: veErr } = await supabase.from('verse_analyses').update({
    translation_arab: data.translation_arab,
    full_translation: data.full_translation,
    translation_explanation: data.translation_explanation,
    segments: data.segments
  }).eq('id', data.analysis_id);
  if (veErr) { console.error('verse_analyses ERROR:', veErr.message); return; }
  console.log('verse_analyses updated (V222)');

  for (const word of data.vwa) {
    const { error: vwaErr } = await supabase.from('verse_word_analyses').insert({
      verse_id: data.verse_id,
      word_key: word.word_key,
      position: word.position,
      sense_chosen: word.sense_chosen,
      analysis_axes: word.analysis_axes
    });
    if (vwaErr) console.error('VWA ERROR ' + word.word_key + ' pos=' + word.position + ':', vwaErr.message);
    else console.log('  VWA OK: ' + word.word_key + ' pos=' + word.position + ' → ' + word.sense_chosen);
  }

  console.log('\n✅ V222 TERMINE');
}
main().catch(console.error);
