const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// =====================================================
// PIPELINE SOURATE 2 — VERSET 217
// verse_id=224, analysis_id=585
// "yas'alunaka 'an al-shahri al-harami qitalin fihi
//  qul qitalun fihi kabirun wa-saddun 'an sabili Allahi
//  wa-kufrun bihi wa-al-masjidi al-harami
//  wa-ikhraju ahlihi minhu akbaru 'inda Allahi
//  wa-al-fitnatu akbaru min al-qatli
//  wa-la yazaluna yuqatilunakum hatta yaruddukum 'an dinikum
//  in istata'u wa-man yartadid minkum 'an dinihi
//  fa-yamut wa-huwa kafirun
//  fa-ula'ika habitat a'maluhum fi al-dunya wa-al-akhirati
//  wa-ula'ika ashhabu al-nari hum fiha khaliduna"
// =====================================================

const verseData = {
  217: {
    verse_id: 224,
    analysis_id: 585,
    translation_arab: "Ils t'interrogent sur le mois sacre — y combattre. Dis : y combattre est grave. Mais obstruer la voie de Dieu, le rejeter Lui et la Mosquee sacree, et expulser ses habitants en est encore plus grave aupres de Dieu. La discorde est plus grave que le meurtre. Ils ne cesseront de vous combattre pour vous detourner de votre voie, s'ils le peuvent. Quiconque parmi vous se retourne de sa voie et meurt rejetant — ceux-la : leurs oeuvres ont ete annulees dans l'ici-bas et dans l'au-dela. Ceux-la sont les compagnons du feu — ils y sont pour toujours.",
    full_translation: "Ils t'interrogent sur le fait de faire la guerre pendant les mois sacres. - Dis: «Y combattre est un peche grave, mais plus grave encore aupres d'Allah est de faire obstacle au sentier d'Allah, d'etre impie envers Celui-ci et la Mosquee sacree, et d'expulser de la ses habitants. L'association est plus grave que le meurtre.» Or, ils ne cesseront de vous combattre jusqu'a, s'ils peuvent, vous detourner de votre religion. Et ceux qui parmi vous abjureront leur religion et mourront infideles, vaines seront pour eux leurs actions dans la vie immediate et la vie future. Voila les gens du Feu: ils y demeureront eternellement.",
    translation_explanation: `§DEMARCHE§
Le verset 217 est un verset de casuistique — il repond a une question sur le combat dans le mois sacre (al-shahr al-haram). La reponse est comparative : le combat dans le mois sacre est grave (kabir), mais certaines autres fautes (obstruction de la voie de Dieu, expulsion des habitants de la Mosquee sacree) sont encore plus graves (akbar). Et la discorde (fitna) est plus grave que le meurtre (qatl).

Le nom **al-shahri** est un nom defini genitif de la racine sh-h-r. Le Lane's donne : mois, period de temps, renommee, ce qui est connu. L'adjectif al-haram (sacre) le qualifie. Le shahr al-haram est un des mois sacres (Dhu al-Qa'da, Dhu al-Hijja, Muharram, Rajab) dans lesquels le combat etait traditionnellement interdit.

L'adjectif **al-harami** (dans al-shahr al-haram) est de la racine h-r-m. Le Lane's donne : interdit, sacre, ce qui est protege par un tabou. Le haram designe a la fois l'interdiction (ce qui est interdit) et le sacre (ce qui est protege).

L'adjectif **kabirun** est de la racine k-b-r. Le Lane's donne : grand, important, grave, majeur. Le kabir est la gravite significative — une faute grave.

Le nom **saddun** est de la racine s-d-d. Le Lane's donne : obstruction, barrage, empechement, boucher. Le sadd 'an sabil Allah = l'obstruction de la voie de Dieu — empecher les gens de suivre la voie divine.

Le nom **al-masjidi** est de la racine s-j-d. Le Lane's donne : lieu de prosternation. Le masjid est le lieu de la priere — la mosquee. Al-Masjid al-Haram est la Grande Mosquee de La Mecque.

Le nom **ikhraju** est un madar de la racine kh-r-j (Form IV). Le Lane's donne : expulsion, sortie forcee, faire sortir. L'ikhraju ahlihi (expulsion de ses habitants) = chasser les gens de chez eux de force.

Le nom **ahlihi** est de la racine a-h-l. Le Lane's donne : famille, peuple, habitants, gens d'un lieu. Le ahl al-masjid al-haram = les habitants/gens de la Mosquee sacree.

Le nom **al-fitnatu** est de la racine f-t-n. Le Lane's donne : epreuve, tentation, discorde, persecution, sedition, trouble. La fitna est le trouble qui fait que les gens abandonnent leur chemin — persecution, sedition, chaos.

Le verbe **la yazaluna** est un inaccompli de la racine z-y-l (Form IV). Le Lane's donne : ne pas cesser, continuer, persister. La construction « la yazaunu... » = ils ne cessent pas de...

Le verbe **yaruddukum** est un inaccompli 3MP avec suffixe 2MP de la racine r-d-d. Le Lane's donne : retourner, rejeter, faire revenir en arriere. Le radd est le retour — faire revenir quelqu'un en arriere. Yaruddukum 'an dinikum = vous faire retourner (devier) de votre religion.

Le nom **dinikum** est de la racine d-y-n. Le Lane's donne : religion, systeme de vie, dette, jugement. Le din est le systeme de vie — la religion comme cadre d'existence total.

Le verbe **yartadid** est un inaccompli 3MS de la racine r-d-d (Form X). L'irtidad est le fait de se retourner — l'apostasie. Yartadid 'an dinihi = se retourne de sa religion.

Le verbe **yamut** est un inaccompli 3MS de la racine m-w-t. Le Lane's donne : mourir, cesser de vivre. La construction conditionnelle « fa-yamut wa-huwa kafirun » = et meurt en etant rejetant.

Le verbe **habitat** est un accompli 3FS de la racine h-b-t (ح-ب-ط). Racine que nous venons de creer (hbt_h). Le Lane's donne : etre anneanti, rendre nul et non avenu, faire que les oeuvres soient nulles. L'habita est l'annulation des oeuvres — elles deviennent nulles, vides d'effet et de recompense.

Le nom **a'maluhum** est un nom pluriel avec suffixe 3MP de la racine '-m-l. Le Lane's donne : actes, oeuvres, travaux. Les a'mal sont les actes accomplis dans la vie.

Le nom **al-nari** est de la racine n-w-r. Le Lane's donne : feu, flamme, lumiere. Al-nar est le feu — dans le contexte eschatologique, le feu est le lieu du chatiment.

Le mot **khaliduna** est un participe actif pluriel de la racine kh-l-d. Le Lane's donne : eternel, permanent, qui dure toujours. Les khalidun sont ceux qui restent pour toujours — la permanence dans le feu.

§JUSTIFICATION§
**mois sacre** — « al-shahr al-haram » = le mois sacre. Traduit par « mois sacre » car haram designe ce qui est sacre/interdit.

**grave** — « kabirun » = grand/grave. Traduit par « grave » dans ce contexte moral.

**encore plus grave** — « akbaru » = plus grand/plus grave. La comparaison de gravite entre les fautes est explicite.

**obstruer la voie** — « saddun 'an sabil Allah » = obstruction de la voie de Dieu. Traduit par « obstruer la voie » car c'est l'image d'un barrage sur le chemin.

**discorde** — « al-fitna » = discorde, persecution, trouble. Traduit par « discorde » car c'est son sens principal dans ce contexte.

**annulees** — « habitat » = ont ete annulees, rendues nulles. Traduit par « annulees » car l'habita designe la nullification des oeuvres.

**pour toujours** — « khaliduna » = permanents/eternels. Traduit par « pour toujours » dans ce contexte eschatologique.

§CRITIQUE§
Hamidullah traduit « al-fitna akbaru min al-qatli » par « l'association est plus grave que le meurtre ». Le terme « association » traduit ici al-fitna... Mais le texte dit al-fitna (la discorde/persecution), pas al-shirk (l'association de divinites). L'association/shirk est une traduction erronee ici — al-fitna est bien distinct d'al-shirk. La fitna est la persecution, la discorde, le chaos qui fait devier les gens de leur chemin. La traduire par « association » est une erreur manifeste de Hamidullah. Le sens correct est : la discorde/persecution (fitna) est plus grave que le meurtre (qatl) — car la fitna detruit les gens spirituellement, le meurtre seulement physiquement.`,
    segments: [
      { fr: "Ils t'interrogent", pos: "verbe", phon: "yas'alunaka", arabic: "يَسْـَٔلُونَكَ", word_key: "sal", is_particle: false, sense_retenu: "demander/interroger", position: 0 },
      { fr: "sur le mois sacre", pos: "nom", phon: "'an al-shahri al-harami", arabic: "عَنِ ٱلشَّهْرِ ٱلْحَرَامِ", word_key: "shhr", is_particle: false, sense_retenu: "temps/mois", position: 1 },
      { fr: "le combat en lui", pos: "nom", phon: "qitalin fihi", arabic: "قِتَالٍ فِيهِ", word_key: "qtl", is_particle: false, sense_retenu: "meurtre/combat", position: 2 },
      { fr: "Dis : le combat en lui est grave", pos: "adj", phon: "qul qitalun fihi kabirun", arabic: "قُلْ قِتَالٌ فِيهِ كَبِيرٌ", word_key: "kbr", is_particle: false, sense_retenu: "grandeur/importance", position: 3 },
      { fr: "et l'obstruction de la voie de Dieu", pos: "nom", phon: "wa-saddun 'an sabili Allahi", arabic: "وَصَدٌّ عَن سَبِيلِ ٱللَّهِ", word_key: "sdd", is_particle: false, sense_retenu: "empechement/obstruction", position: 4 },
      { fr: "et le rejeter", pos: "nom", phon: "wa-kufrun bihi", arabic: "وَكُفْرٌۢ بِهِۦ", word_key: "kfr", is_particle: false, sense_retenu: "rejet/ingratitude", position: 5 },
      { fr: "et la Mosquee sacree", pos: "nom", phon: "wa-al-masjidi al-harami", arabic: "وَٱلْمَسْجِدِ ٱلْحَرَامِ", word_key: "sjd", is_particle: false, sense_retenu: "lieu de prosternation", position: 6 },
      { fr: "et expulser ses habitants", pos: "nom", phon: "wa-ikhraju ahlihi minhu", arabic: "وَإِخْرَاجُ أَهْلِهِۦ مِنْهُ", word_key: "khrj", is_particle: false, sense_retenu: "expulsion/sortie", position: 7 },
      { fr: "est plus grave aupres de Dieu", phon: "akbaru 'inda Allahi", arabic: "أَكْبَرُ عِندَ ٱللَّهِ", is_particle: true, position: 8 },
      { fr: "Et la discorde", pos: "nom", phon: "wa-al-fitnatu", arabic: "وَٱلْفِتْنَةُ", word_key: "ftn", is_particle: false, sense_retenu: "desordre/persecution", position: 9 },
      { fr: "est plus grave que le meurtre", phon: "akbaru min al-qatli", arabic: "أَكْبَرُ مِنَ ٱلْقَتْلِ", is_particle: true, position: 10 },
      { fr: "Et ils ne cesseront pas de vous combattre", pos: "verbe", phon: "wa-la yazaluna yuqatilunakum", arabic: "وَلَا يَزَالُونَ يُقَـٰتِلُونَكُمْ", word_key: "zyl", is_particle: false, sense_retenu: "separation/distinction", position: 11 },
      { fr: "pour vous detourner", pos: "verbe", phon: "hatta yaruddukum", arabic: "حَتَّىٰ يَرُدُّوكُمْ", word_key: "rdd", is_particle: false, sense_retenu: "retour/rejet", position: 12 },
      { fr: "de votre voie", pos: "nom", phon: "'an dinikum", arabic: "عَن دِينِكُمْ", word_key: "dyn", is_particle: false, sense_retenu: "religion/systeme", position: 13 },
      { fr: "s'ils le peuvent", phon: "in istata'u", arabic: "إِنِ ٱسْتَطَـٰعُوا۟", is_particle: true, position: 14 },
      { fr: "Et quiconque se retourne parmi vous", pos: "verbe", phon: "wa-man yartadid minkum", arabic: "وَمَن يَرْتَدِدْ مِنكُمْ", word_key: "rdd", is_particle: false, sense_retenu: "retour/rejet", position: 15 },
      { fr: "de sa voie", pos: "nom", phon: "'an dinihi", arabic: "عَن دِينِهِۦ", word_key: "dyn", is_particle: false, sense_retenu: "religion/systeme", position: 16 },
      { fr: "et meurt rejetant", pos: "verbe", phon: "fa-yamut wa-huwa kafirun", arabic: "فَيَمُتْ وَهُوَ كَافِرٌ", word_key: "mwt", is_particle: false, sense_retenu: "mort/cessation", position: 17 },
      { fr: "ceux-la — leurs oeuvres ont ete annulees", pos: "verbe", phon: "fa-ula'ika habitat a'maluhum", arabic: "فَأُو۟لَـٰٓئِكَ حَبِطَتْ أَعْمَـٰلُهُمْ", word_key: "hbt_h", is_particle: false, sense_retenu: "rendre nul/annuler", position: 18 },
      { fr: "dans l'ici-bas et dans l'au-dela", phon: "fi al-dunya wa-al-akhirati", arabic: "فِى ٱلدُّنْيَا وَٱلْـَٔاخِرَةِ", is_particle: true, position: 19 },
      { fr: "Ceux-la sont les compagnons du feu", pos: "nom", phon: "wa-ula'ika ashhabu al-nari", arabic: "وَأُو۟لَـٰٓئِكَ أَصْحَـٰبُ ٱلنَّارِ", word_key: "nwr", is_particle: false, sense_retenu: "lumiere/clarte", position: 20 },
      { fr: "ils y sont pour toujours", pos: "adj", phon: "hum fiha khaliduna", arabic: "هُمْ فِيهَا خَـٰلِدُونَ", word_key: "khld", is_particle: false, sense_retenu: "eternite/permanence", position: 21 }
    ],
    vwa: [
      {
        word_key: "shhr",
        position: 1,
        sense_chosen: "temps/mois",
        analysis_axes: {
          sense_chosen: "temps/mois",
          concept_chosen: "Temps/Mois",
          concepts: {
            "Temps/Mois": {
              status: "retenu",
              senses: ["mois", "periode de temps", "mois lunaire"],
              proof_ctx: "Le nom al-shahri est un nom defini genitif de la racine sh-h-r. Le Lane's donne : mois (division lunaire du temps), periode, renommee (ce qui est connu de tous). Le shahr est le mois lunaire. Al-shahr al-haram = le mois sacre — un des quatre mois sacres de l'annee arabe.",
              axe1_verset: "Le mois sacre (al-shahr al-haram) est le cadre temporel de la question. La sacralite du mois (haram) cree une tension avec la question du combat — peut-on combattre dans un mois ou le combat est traditionnellement interdit ?",
              axe2_voisins: "Le verset 216 prescrivait le combat en general. Le verset 217 pose la question specifique du mois sacre. La sequence general/particulier montre que la prescription du combat s'applique avec des nuances — le mois sacre est un cadre temporel specifique.",
              axe3_sourate: "La racine sh-h-r est presente dans la sourate al-Baqarah en 2:185 (le mois de Ramadan) et 2:194, 197, 217. La sourate traite des mois sacres comme des cadres temporels speciaux avec des regles specifiques.",
              axe4_coherence: "La racine sh-h-r apparait environ 27 fois dans le Coran. Le calendrier sacre (mois sacres) est une institution pre-islamique confirmee par le Coran.",
              axe5_frequence: "Pour la mission du khalifa, les cadres temporels sacres (mois sacres) sont des institutions a respecter. La temporalite sacree structure l'action du khalifa — certaines periodes requierent pause et respect."
            }
          }
        }
      },
      {
        word_key: "qtl",
        position: 2,
        sense_chosen: "meurtre/combat",
        analysis_axes: {
          sense_chosen: "meurtre/combat",
          concept_chosen: "Meurtre/Combat",
          concepts: {
            "Meurtre/Combat": {
              status: "retenu",
              senses: ["combattre", "combat", "guerre", "tuer"],
              proof_ctx: "Le nom qitalin est un nom indefini genitif de la racine q-t-l. Le combat dans le mois sacre — c'est la question posee. Le qital (Form III = combat reciproque) est l'objet de la question.",
              axe1_verset: "Le combat (qital) dans le mois sacre est la question et aussi la reponse : qital fihi kabirun (le combat dans le mois sacre est grave). La reponse admet la gravite tout en la relativisant face aux fautes plus graves.",
              axe2_voisins: "Le verset 216 prescrivait le qital en general. Le verset 217 traite le cas specifique du qital dans le mois sacre.",
              axe3_sourate: "La racine q-t-l est centrale dans la sourate al-Baqarah pour les questions de combat.",
              axe4_coherence: "Le Coran admet que le qital dans le mois sacre est grave mais le relativise face a des fautes plus graves — la persecution (fitna) et l'expulsion des habitants de la Mosquee sacree.",
              axe5_frequence: "Pour le khalifa, la casuistique (peser les gravites relatives des fautes) est une competence juridique essentielle. Le verset montre comment comparer des fautes dans une hierarchie morale."
            }
          }
        }
      },
      {
        word_key: "kbr",
        position: 3,
        sense_chosen: "grandeur/importance",
        analysis_axes: {
          sense_chosen: "grandeur/importance",
          concept_chosen: "Grandeur/Importance",
          concepts: {
            "Grandeur/Importance": {
              status: "retenu",
              senses: ["grand", "grave", "important", "majeur", "grandeur"],
              proof_ctx: "Le mot kabirun est un adjectif nominatif indefini de la racine k-b-r. Le Lane's donne : grand, important, grave, majeur, de grande taille. Dans le contexte moral, kabir designe la gravite — une faute importante. Le superlatif akbar (plus grand/plus grave) est utilise pour les fautes encore plus graves.",
              axe1_verset: "La gravite (kabirun) du combat dans le mois sacre est la reponse initiale. Puis le verset montre des fautes plus graves (akbar) — la comparaison de gravite est le coeur du verset.",
              axe2_voisins: "Le verset 215 mentionnait les bienfaits. Le verset 216 prescrivait le combat. Le verset 217 classe les gravites morales. La sequence construit une hierarchie de valeurs morales.",
              axe3_sourate: "La racine k-b-r est frequente dans la sourate al-Baqarah. Le kabir et akbar sont des outils de graduation morale — les fautes ne sont pas toutes egales.",
              axe4_coherence: "La racine k-b-r apparait environ 159 fois dans le Coran. La hierarchisation morale (kabir/akbar) est un principe coraniquement etabli — certaines fautes sont plus graves que d'autres.",
              axe5_frequence: "Pour le khalifa, la hierarchisation des gravites (kabir/akbar) est essentielle pour le jugement. Tout n'est pas egalement grave — le khalifa doit savoir prioriser les sanctions selon la hierarchie morale."
            }
          }
        }
      },
      {
        word_key: "sdd",
        position: 4,
        sense_chosen: "empechement/obstruction",
        analysis_axes: {
          sense_chosen: "empechement/obstruction",
          concept_chosen: "Empechement/Obstruction",
          concepts: {
            "Empechement/Obstruction": {
              status: "retenu",
              senses: ["obstruction", "barrage", "empecher", "boucher", "bloquer"],
              proof_ctx: "Le nom saddun est un nom de la racine s-d-d. Le Lane's donne : boucher, obstruer, barrer, empecher le passage. Le sadd est le barrage — ce qui bouche un passage. « Saddun 'an sabil Allah » = obstruction de la voie de Dieu — empecher les gens d'emprunter la voie divine.",
              axe1_verset: "L'obstruction de la voie de Dieu (saddun 'an sabil Allah) est presentee comme plus grave que le combat dans le mois sacre. Empecher la guidance spirituelle est plus grave que le combat physique.",
              axe2_voisins: "Le verset 213 parlait du chemin droit (sirat mustaqim). Le verset 217 parle de l'obstruction du chemin de Dieu (saddun 'an sabil Allah). Le chemin divine doit etre libre — l'obstruction est la faute la plus grave.",
              axe3_sourate: "La racine s-d-d est presente dans la sourate al-Baqarah en 2:217. L'obstruction de la voie divine est une des fautes les plus graves dans le Coran.",
              axe4_coherence: "La racine s-d-d apparait environ 13 fois dans le Coran. Le sadd 'an sabil Allah est une des violations les plus condamnees — empecher les gens de suivre la voie divine.",
              axe5_frequence: "Pour le khalifa, garantir la liberte de la voie divine est une obligation premiere. Personne ne doit obstruer la voie de Dieu — ni les ennemis exterieurs ni les dirigeants interieurs."
            }
          }
        }
      },
      {
        word_key: "kfr",
        position: 5,
        sense_chosen: "rejet/ingratitude",
        analysis_axes: {
          sense_chosen: "rejet/ingratitude",
          concept_chosen: "Rejet/Ingratitude",
          concepts: {
            "Rejet/Ingratitude": {
              status: "retenu",
              senses: ["rejeter", "etre ingrat", "nier"],
              proof_ctx: "Le nom kufrun est un nom nominatif indefini de la racine k-f-r. Le Lane's donne : rejet, ingratitude, couverture de la verite. « Kufrun bihi » = rejet de lui (Dieu) — le kufr envers Dieu.",
              axe1_verset: "Le rejet de Dieu (kufrun bihi) est enumere parmi les fautes plus graves que le combat dans le mois sacre. L'ingratitude/rejet envers Dieu est une transgression spirituelle majeure.",
              axe2_voisins: "Le verset 212 parlait des rejeteurs (kafaru) et leur embellissement de la dunya. Le verset 217 presente le kufr comme une faute plus grave que le combat dans le mois sacre.",
              axe3_sourate: "La racine k-f-r est centrale dans la sourate al-Baqarah. Le kufr est systematiquement presente comme la faute morale la plus severe.",
              axe4_coherence: "La racine k-f-r est une des racines les plus frequentes du Coran pour la faute spirituelle.",
              axe5_frequence: "Pour le khalifa, combattre le kufr (rejet de Dieu) est plus prioritaire que de proteger les regles temporelles des mois sacres."
            }
          }
        }
      },
      {
        word_key: "sjd",
        position: 6,
        sense_chosen: "lieu de prosternation",
        analysis_axes: {
          sense_chosen: "lieu de prosternation",
          concept_chosen: "Lieu de prosternation",
          concepts: {
            "Lieu de prosternation": {
              status: "retenu",
              senses: ["mosquee", "lieu de prosternation", "lieu de priere"],
              proof_ctx: "Le nom al-masjidi est un nom defini genitif de la racine s-j-d. Le Lane's donne : lieu de prosternation, mosquee. Le masjid est le lieu ou on se prosterne (sajada = se prosterner). Al-Masjid al-Haram est la Grande Mosquee de La Mecque — le lieu le plus sacre de l'Islam.",
              axe1_verset: "La Mosquee sacree (al-masjid al-haram) est un espace sacre dont la profanation (par le kufr et l'expulsion de ses habitants) est une des fautes les plus graves.",
              axe2_voisins: "Le mois sacre et la mosquee sacree sont deux espaces sacres (l'un temporel, l'autre spatial) que le verset met en parallele.",
              axe3_sourate: "La racine s-j-d est presente dans la sourate al-Baqarah en 2:23, 58, 125, 144, 149, 150, 217. La prosternation et la mosquee sont des elements centraux de la pratique religieuse.",
              axe4_coherence: "La racine s-j-d apparait environ 92 fois dans le Coran. Le masjid est le lieu central de la communaute religieuse.",
              axe5_frequence: "Pour le khalifa, proteger les lieux sacres (masjid) est une obligation de gouvernance. La profanation des lieux sacres est une attaque contre l'identite spirituelle de la communaute."
            }
          }
        }
      },
      {
        word_key: "khrj",
        position: 7,
        sense_chosen: "expulsion/sortie",
        analysis_axes: {
          sense_chosen: "expulsion/sortie",
          concept_chosen: "Expulsion/Sortie",
          concepts: {
            "Expulsion/Sortie": {
              status: "retenu",
              senses: ["expulsion", "faire sortir", "chasser", "expulser", "sortie"],
              proof_ctx: "Le nom ikhraju est un madar de la racine kh-r-j (Form IV). Le Lane's donne : faire sortir, expulser, chasser. L'ikhraju des habitants de la Mosquee sacree est l'expulsion forcee de chez eux.",
              axe1_verset: "L'expulsion (ikhraju) des habitants de la Mosquee sacree est une des fautes les plus graves. Chasser les gens de leur lieu de culte est une violation spirituelle et humaine majeure.",
              axe2_voisins: "L'expulsion de la Mecque (ikhraju ahlihi) fait echo au contexte historique de la migration (hijra) des musulmans. L'expulsion est une violence sociale majeure.",
              axe3_sourate: "La racine kh-r-j est frequente dans la sourate al-Baqarah pour les sorties et expulsions. En 2:36, la sortie d'Adam du Jardin. En 2:191, ne pas les chasser d'ou ils vous ont chasses.",
              axe4_coherence: "La racine kh-r-j apparait environ 133 fois dans le Coran. L'expulsion est une violence qui prive les gens de leur espace de vie.",
              axe5_frequence: "Pour le khalifa, proteger les habitants de leur espace (empecher les expulsions injustes) est une obligation de justice sociale."
            }
          }
        }
      },
      {
        word_key: "ftn",
        position: 9,
        sense_chosen: "desordre/persecution",
        analysis_axes: {
          sense_chosen: "desordre/persecution",
          concept_chosen: "Desordre/Persecution",
          concepts: {
            "Desordre/Persecution": {
              status: "retenu",
              senses: ["discorde", "persecution", "epreuve", "trouble", "tentation", "sedition"],
              proof_ctx: "Le nom al-fitnatu est un nom defini nominatif de la racine f-t-n. Le Lane's donne : epreuve, tentation, discorde, persecution, sedition, trouble qui fait devier. La fitna est le trouble qui pousse les gens hors de leur chemin. « Al-fitna akbaru min al-qatli » = la discorde/persecution est plus grave que le meurtre.",
              axe1_verset: "La fitna (discorde/persecution) est declaree plus grave que le qatl (meurtre). Cette comparaison est fondamentale — la violence spirituelle et sociale (fitna) est plus destructrice que la violence physique (meurtre). La fitna detruit les ames, le meurtre detruit les corps.",
              axe2_voisins: "Le verset 216 disait que vos perceptions sont limitees (Dieu sait, vous ne savez pas). Le verset 217 montre que la fitna (qui detourne les gens du chemin) est la faute la plus grave — plus grave que le combat.",
              axe3_sourate: "La racine f-t-n est presente dans la sourate al-Baqarah en 2:191, 193, 217. La fitna est systematiquement presentee comme une menace majeure a l'ordre spirituel et social.",
              axe4_coherence: "La racine f-t-n apparait environ 60 fois dans le Coran. La fitna est une des mots les plus importants du Coran pour les troubles sociaux et spirituels.",
              axe5_frequence: "Pour le khalifa, combattre la fitna (discorde/persecution qui detourne du chemin) est plus prioritaire que le combat physique. La stabilite spirituelle et sociale de la communaute est la priorite."
            },
            "Epreuve/Tentation": {
              status: "probable",
              senses: ["epreuve", "tentation", "test", "trial"],
              proof_ctx: "Le sens d'epreuve/tentation est aussi atteste pour fitna — la racine f-t-n designe le fait de mettre a l'epreuve (comme l'or dans le feu). Dans ce contexte, le sens de persecution/discorde est plus actif car la fitna est presente comme une action des adversaires contre les croyants.",
              axe1_verset: "La persecution (fitna) des adversaires contre les croyants est le sens contextuel — ils vous persecutent pour vous faire devier.",
              axe2_voisins: "Le contexte « ils ne cesseront de vous combattre pour vous detourner » confirme que la fitna est une persecution active.",
              axe3_sourate: "La sourate utilise fitna dans ce sens de persecution/detournement.",
              axe4_coherence: "Le Coran utilise fitna dans les deux sens selon le contexte.",
              axe5_frequence: "Le khalifa doit reconnaitre les deux formes de fitna — l'epreuve divine (test) et la persecution humaine (violence)."
            }
          }
        }
      },
      {
        word_key: "zyl",
        position: 11,
        sense_chosen: "separation/distinction",
        analysis_axes: {
          sense_chosen: "separation/distinction",
          concept_chosen: "Separation/Distinction",
          concepts: {
            "Separation/Distinction": {
              status: "retenu",
              senses: ["ne pas cesser", "continuer", "persister", "distinction", "separation"],
              proof_ctx: "Le verbe la yazaluna est de la racine z-y-l (Form IV). Le Lane's donne : se separer, s'eloigner, cesser. La construction « la yazaluna + verbe » = ils ne cessent pas de... La negation de la cessation indique la continuite — ils continuent sans arret.",
              axe1_verset: "La persistance (la yazaluna) des adversaires dans le combat est la realite permanente que le verset expose. Ils ne cesseront pas — c'est un fait etabli.",
              axe2_voisins: "Le verset 217 presente la menace persistante de ceux qui combattent les croyants pour les detourner. Cette persistance requiert une vigilance permanente.",
              axe3_sourate: "La racine z-y-l est presente dans quelques contextes du Coran pour l'idee de continuite.",
              axe4_coherence: "La formule « la yazalu » (ne pas cesser) est une construction grammaticale frequente dans le Coran pour marquer la persistance.",
              axe5_frequence: "Pour le khalifa, la menace persistante requiert une vigilance permanente. La securite de la communaute est une obligation continue, pas ponctuelle."
            }
          }
        }
      },
      {
        word_key: "rdd",
        position: 12,
        sense_chosen: "retour/rejet",
        analysis_axes: {
          sense_chosen: "retour/rejet",
          concept_chosen: "Retour/Rejet",
          concepts: {
            "Retour/Rejet": {
              status: "retenu",
              senses: ["retourner", "rejeter", "faire revenir", "deviation", "apostasie"],
              proof_ctx: "Le verbe yaruddukum est un inaccompli 3MP avec suffixe 2MP de la racine r-d-d. Le Lane's donne : retourner, faire revenir en arriere, repousser. Le radd est le retour en arriere — faire devier. Yaruddukum 'an dinikum = vous faire retourner (devier) de votre religion. La Form X (yartadid) est le retour de soi-meme — l'apostasie.",
              axe1_verset: "Le retour/deviation (radd) de la religion est la menace que les adversaires veulent realiser. Leur combat a pour but de vous faire revenir en arriere spirituellement — quitter la voie que vous avez choisie.",
              axe2_voisins: "Le verset 216 parlait de l'aversion pour le combat. Le verset 217 montre pourquoi le combat est necessaire — pour empecher la deviation forcee.",
              axe3_sourate: "La racine r-d-d est presente dans la sourate al-Baqarah en 2:109 (raddukum kafiran = vous faire revenir rejetants) et en 2:217.",
              axe4_coherence: "La racine r-d-d apparait environ 82 fois dans le Coran. Le retour en arriere (spirituel ou physique) est systematiquement presente comme une perte.",
              axe5_frequence: "Pour le khalifa, proteger la communaute contre la deviation (radd) forcee est une obligation. La liberte religieuse et spirituelle de la communaute est sous sa protection."
            }
          }
        }
      },
      {
        word_key: "dyn",
        position: 13,
        sense_chosen: "religion/systeme",
        analysis_axes: {
          sense_chosen: "religion/systeme",
          concept_chosen: "Religion/Systeme",
          concepts: {
            "Religion/Systeme": {
              status: "retenu",
              senses: ["religion", "systeme de vie", "dette", "jugement", "engagement total"],
              proof_ctx: "Le nom dinikum est un nom genitif avec suffixe 2MP de la racine d-y-n. Le Lane's donne : religion, systeme de vie, dette, jugement. Le din est le systeme total d'engagement — pas seulement les pratiques religieuses mais le mode de vie complet. « Dinikum » = votre religion/systeme de vie.",
              axe1_verset: "La religion (din) est ce que les adversaires veulent que les croyants abandonnent. La menace n'est pas externe (violence physique) mais interne (deviation de la voie).",
              axe2_voisins: "Le verset 213 parlait du chemin droit vers lequel Dieu guide. Le verset 217 montre que les adversaires veulent detourner les croyants de ce chemin.",
              axe3_sourate: "La racine d-y-n est presente dans la sourate al-Baqarah pour la religion comme systeme total.",
              axe4_coherence: "La racine d-y-n apparait environ 92 fois dans le Coran. Le din est un concept central — l'engagement total envers Dieu qui structure toute la vie.",
              axe5_frequence: "Pour le khalifa, proteger le din est la mission centrale. Le din n'est pas seulement les pratiques cultuelles mais le systeme complet de valeurs et d'engagement."
            }
          }
        }
      },
      {
        word_key: "mwt",
        position: 17,
        sense_chosen: "mort/cessation",
        analysis_axes: {
          sense_chosen: "mort/cessation",
          concept_chosen: "Mort/Cessation",
          concepts: {
            "Mort/Cessation": {
              status: "retenu",
              senses: ["mourir", "mort", "cesser de vivre", "fin de vie"],
              proof_ctx: "Le verbe yamut est un inaccompli 3MS de la racine m-w-t. Le Lane's donne : mourir, cesser de vivre, s'eteindre. L'inaccompli est ici employe dans une construction conditionnelle (fa-yamut = et qu'il meure). La mort est la condition qui finalise l'apostasie — mourir en etant rejetant est la condition du chatiment decrit.",
              axe1_verset: "La mort en etat de rejet (yamut wa-huwa kafirun) est la condition du chatiment — les oeuvres annulees. La mort finalise le choix de deviation. Si on se retourne et meurt dans cet etat, c'est sans retour.",
              axe2_voisins: "Le verset 214 parlait de l'epreuve jusqu'a la limite (hatta yaqula al-rasul). Le verset 217 parle de mourir dans le rejet. La mort est l'horizon definitif dans les deux versets.",
              axe3_sourate: "La racine m-w-t est tres frequente dans la sourate al-Baqarah pour la mort physique et spirituelle.",
              axe4_coherence: "La racine m-w-t apparait environ 164 fois dans le Coran. La mort est le seuil apres lequel le retour n'est plus possible.",
              axe5_frequence: "Pour le khalifa, la mort dans le rejet est la catastrophe finale. La mission du khalifa est de retenir les gens avant ce seuil irreversible."
            }
          }
        }
      },
      {
        word_key: "hbt_h",
        position: 18,
        sense_chosen: "rendre nul/annuler",
        analysis_axes: {
          sense_chosen: "rendre nul/annuler",
          concept_chosen: "Nullification/Aneantissement",
          concepts: {
            "Nullification/Aneantissement": {
              status: "retenu",
              senses: ["rendre nul", "annuler les oeuvres", "etre aneanti", "perdre tout effet"],
              proof_ctx: "Le verbe habitat est un accompli 3FS de la racine h-b-t (ح-ب-ط, racine hbt_h). Le Lane's donne : Form IV (ahbata) = rendre les oeuvres nulles et vaines, annuler leur recompense, les faire perir sans effet. L'accompli marque l'annulation comme accomplie — leurs oeuvres ont ete annulees (c'est fait). Le feminin s'accorde avec a'maluhum (oeuvres, pluriel non-humain = accord feminin).",
              axe1_verset: "L'annulation des oeuvres (habitat a'maluhum) est la consequence directe de l'apostasie suivie de mort. Toutes les bonnes oeuvres accomplies pendant la vie sont annulees — rendues nulles et sans effet. L'image est puissante : des annees d'efforts qui s'evaporent, sans recompense ni trace.",
              axe2_voisins: "Le verset 216 parlait du bien (khay) qui peut etre cache derriere l'aversion. Le verset 217 montre que les oeuvres de bien (a'mal) peuvent etre annulees par l'apostasie. La possibilite de perdre le fruit de ses efforts est un avertissement contre la deviation.",
              axe3_sourate: "La racine hbt_h apparait en 2:217 comme la premiere occurrence du Coran concernant la nullification des oeuvres. C'est une racine rare mais conceptuellement forte.",
              axe4_coherence: "La racine h-b-t (ح-ب-ط) apparait environ 13 fois dans le Coran. Elle designe systematiquement l'annulation des oeuvres comme consequence d'un choix radical de rejet. Le sens vient de l'image du ventre gonfle d'un animal — rien ne sort, tout reste en dedans sans produire effet.",
              axe5_frequence: "Pour le khalifa, la nullification des oeuvres est l'avertissement le plus fort contre la deviation. Toute une vie d'efforts peut etre annulee par un choix final de rejet. Cette realite fonde la vigilance du khalifa sur lui-meme — maintenir la coherence jusqu'a la fin."
            },
            "Gonflement/Bloat": {
              status: "nul",
              senses: ["se gonfler", "ventre gonfle"],
              proof_ctx: "Le sens physique de gonflement est le sens etymologique premier de h-b-t. Mais dans la construction grammaticale du Coran (habitat a'maluhum = les oeuvres ont ete annulees), c'est le sens moral/spirituel de nullification qui est actif — pas le sens physique de gonflement."
            }
          }
        }
      },
      {
        word_key: "eml",
        position: 18,
        sense_chosen: "action/oeuvre",
        analysis_axes: {
          sense_chosen: "action/oeuvre",
          concept_chosen: "Action/Oeuvre",
          concepts: {
            "Action/Oeuvre": {
              status: "retenu",
              senses: ["oeuvres", "actes", "actions accomplies", "travaux"],
              proof_ctx: "Le nom a'maluhum est un nom pluriel avec suffixe 3MP de la racine '-m-l. Le Lane's donne : actes, oeuvres, travaux, accomplissements. Les a'mal (pluriel de 'amal) sont les actes accomplis — toutes les actions de la vie. A'maluhum = leurs oeuvres.",
              axe1_verset: "Les oeuvres (a'mal) annulees sont les actes de toute une vie — les bonnes actions, les efforts, les depenses, les services. L'annulation est totale — toutes les oeuvres, pas seulement certaines.",
              axe2_voisins: "Le verset 215 parlait des actes de bien (ma taf'alu min khayrin). Le verset 217 parle des oeuvres annulees (habitat a'maluhum). La sequence actes de bien (215) → oeuvres annulees (217) montre la fragilite des oeuvres face au choix final.",
              axe3_sourate: "La racine '-m-l est tres frequente dans la sourate al-Baqarah. Les a'mal sont constamment evalues — bonnes oeuvres (a'mal salih) et mauvaises oeuvres (a'mal sayyi'a).",
              axe4_coherence: "La racine '-m-l apparait environ 360 fois dans le Coran. Les oeuvres sont l'objet du jugement divin — chaque oeuvre sera pesee au Jour du Relevement.",
              axe5_frequence: "Pour le khalifa, la conscience de la perishabilite des oeuvres est une protection contre l'orgueil. Meme les oeuvres peuvent etre annulees — l'humilite s'impose jusqu'a la fin."
            }
          }
        }
      },
      {
        word_key: "nwr",
        position: 20,
        sense_chosen: "lumiere/clarte",
        analysis_axes: {
          sense_chosen: "lumiere/clarte",
          concept_chosen: "Lumiere/Clarte",
          concepts: {
            "Lumiere/Clarte": {
              status: "retenu",
              senses: ["feu", "flamme", "lumiere", "clarte", "eclat"],
              proof_ctx: "Le nom al-nari est un nom defini genitif de la racine n-w-r. Le Lane's donne : feu, flamme, lumiere, clarte. La nar est le feu — a la fois source de lumiere et de chaleur intense. Dans le contexte eschatologique, al-nar est le feu du chatiment. La racine n-w-r lie le feu (nar) et la lumiere (nur) — deux manifestations de la meme energie.",
              axe1_verset: "Le feu (al-nar) est le lieu de sejour des compagnons du feu (ashab al-nar). C'est la consequence finale de l'apostasie et de la mort dans le rejet.",
              axe2_voisins: "Le verset 212 mentionnait le Jour du Relevement. Le verset 217 conclut sur le feu permanent. La sequence Jour du Relevement → feu montre la continuité du jugement.",
              axe3_sourate: "La racine n-w-r est presente dans la sourate al-Baqarah en 2:17 (leur feu s'eteint), 2:257 (lumiere vs tenebres), 2:266 (le feu qui consume). La sourate contraste le feu (nar) et la lumiere (nur).",
              axe4_coherence: "La racine n-w-r apparait environ 192 fois dans le Coran. Le feu (nar) et la lumiere (nur) sont les deux poles de la racine — l'un detruit, l'autre eclaire.",
              axe5_frequence: "Pour le khalifa, la menace du feu permanent est l'horizon ultime qui fonde la severite morale. Certaines transgressions menent au feu — la connaissance de cette realite structure la justice khalifale."
            }
          }
        }
      },
      {
        word_key: "khld",
        position: 21,
        sense_chosen: "eternite/permanence",
        analysis_axes: {
          sense_chosen: "eternite/permanence",
          concept_chosen: "Eternite/Permanence",
          concepts: {
            "Eternite/Permanence": {
              status: "retenu",
              senses: ["eternite", "permanence", "durer toujours", "immortalite", "sejour eternel"],
              proof_ctx: "Le mot khaliduna est un participe actif pluriel de la racine kh-l-d. Le Lane's donne : eternel, permanent, qui reste toujours, immortel. Le khalid est ce qui ne finit pas — l'eternite de l'etant. « Hum fiha khaliduna » = ils y sont pour toujours (en permanence).",
              axe1_verset: "La permanence (khaliduna) dans le feu est la conclusion du verset. L'eternite du sejour dans le feu est la consequence ultime de l'apostasie suivie de mort dans le rejet.",
              axe2_voisins: "Le verset 212 parlait des premunies au-dessus au Jour du Relevement. Le verset 217 conclut sur les apostats dans le feu pour toujours. Les deux horizons eschatologiques (superiority/feu) encadrent les choix de la vie presente.",
              axe3_sourate: "La racine kh-l-d est presente dans la sourate al-Baqarah en 2:25 (les croyants dans les jardins pour toujours) et en 2:217, 257, 275, 281 (les rejeteurs dans le feu pour toujours). La permanence eschatologique structure les deux hemispheres du jugement.",
              axe4_coherence: "La racine kh-l-d apparait environ 87 fois dans le Coran. Le khuld est l'eternite — ce qui ne finit pas. Le Coran utilise la permanence (khalidun) pour les deux destinations eschatologiques — Jardin et Feu.",
              axe5_frequence: "Pour le khalifa, la permanence (khuld) est l'horizon definitif qui donne poids a tout acte. La permanence dans le Jardin motive; la permanence dans le Feu avertit. Le khalifa governe en gardant cet horizon."
            }
          }
        }
      }
    ],
    daily_phrases: []
  }
};

async function main() {
  const data = verseData[217];

  const { error: veErr } = await supabase.from('verse_analyses').update({
    translation_arab: data.translation_arab,
    full_translation: data.full_translation,
    translation_explanation: data.translation_explanation,
    segments: data.segments
  }).eq('id', data.analysis_id);
  if (veErr) { console.error('verse_analyses ERROR:', veErr.message); return; }
  console.log('verse_analyses updated (V217)');

  for (const word of data.vwa) {
    const { error: vwaErr } = await supabase.from('verse_word_analyses').insert({
      verse_id: data.verse_id,
      word_key: word.word_key,
      position: word.position,
      sense_chosen: word.sense_chosen,
      analysis_axes: word.analysis_axes
    });
    if (vwaErr) console.error('VWA ERROR ' + word.word_key + ':', vwaErr.message);
    else console.log('  VWA OK: ' + word.word_key + ' pos=' + word.position + ' → ' + word.sense_chosen);
  }

  // Check daily phrases for hbt_h (already inserted in create-hbt-root.js)
  const { count } = await supabase.from('word_daily').select('*', { count: 'exact', head: true }).eq('analysis_id', 2655);
  console.log('  daily hbt_h: count=' + count + ' (already created in hbt-root script)');

  console.log('\n✅ V217 TERMINE');
}
main().catch(console.error);
