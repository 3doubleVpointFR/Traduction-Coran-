const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// =====================================================
// PIPELINE SOURATE 2 — AL-BAQARAH — VERSETS 98 A 100
// verse_id=105 (2:98), verse_id=106 (2:99), verse_id=107 (2:100)
// =====================================================
// CRITICAL: concept names and senses are read from concepts JSON
// =====================================================

const verseData = {

  // =====================================================
  // VERSET 2:98
  // verse_id=105, analysis_id=465
  // "Quiconque est ennemi de Dieu, de Ses anges, de Ses
  //  messagers, de Gabriel et de Michael — alors Dieu est
  //  ennemi des rejeteurs."
  // =====================================================
  98: {
    verse_id: 105,
    analysis_id: 465,
    translation_arab: "Quiconque est ennemi de Dieu, de Ses anges, de Ses messagers, de Djibril et de Mikal, alors certes Dieu est ennemi des dissimulateurs.",
    full_translation: "Quiconque est ennemi d'Allah, de Ses anges, de Ses messagers, de Djibril (Gabriel) et de Mika'il (Michae:l) [ce sera en vain], car Allah est l'ennemi des infideles.",
    translation_explanation: `§DEMARCHE§
Ce verset pose une equivalence : celui qui se declare ennemi de Dieu et de Ses intermediaires (anges et messagers) se retrouve face a l'hostilite de Dieu Lui-meme. Le verbe **kana** est un accompli 3MS de la racine k-w-n. Le Lane's donne « he was, he became ». Il introduit une condition intemporelle — quiconque est ennemi de Dieu. Le nom **'aduwwan** est un nom masculin singulier accusatif de la racine '-d-w. Le Lane's donne « enemy, one who is hostile ». L'inimitie est un etat permanent d'opposition active — l'ennemi ne se contente pas de ne pas aimer, il agit contre. Le nom **li-Llahi** est le nom propre de la divinite avec preposition li de la racine a-l-h. Le Lane's donne « God, the One True God ». Dieu est l'objet de l'hostilite declaree. Le nom **mala'ikatihi** est un pluriel brise avec pronom 3MS de la racine m-l-k. Le Lane's donne « His angels, His messengers ». Les anges sont les intermediaires entre Dieu et les hommes — etre ennemi des anges c'est etre ennemi du systeme de communication divine. Le nom **rusulih** est un pluriel avec pronom 3MS de la racine r-s-l. Le Lane's donne « His messengers, those He sent ». Les messagers sont les humains charges de transmettre le message divin. Etre ennemi des messagers c'est rejeter le message. Le nom **'aduwwun** apparait une seconde fois en position de predicat — Dieu est ennemi des rejeteurs. La structure est symetrique : l'hostilite vers Dieu entraine l'hostilite de Dieu. Le nom **li-l-kafirina** est un pluriel defini avec preposition li de la racine k-f-r. Le Lane's donne « those who cover, the disbelievers ». Les dissimulateurs sont ceux qui couvrent la verite — leur hostilite envers Dieu est le resultat de leur dissimulation.

§JUSTIFICATION§
**ennemi** — Le sens retenu est « hostilite/inimitie ». Le mot 'aduwwan designe celui qui est activement oppose. L'alternative « transgresser » est ecartee car le contexte est celui de l'inimitie declaree, pas de la transgression d'une limite. L'alternative « courir » est ecartee car le mot est un nom, pas un verbe de mouvement.

**Dieu** — Le sens retenu est « Dieu ». Le nom Allah designe la divinite unique.

**anges** — Le sens retenu est « ange/messager ». Le mot mala'ikatihi designe les etres charges de transmettre entre Dieu et les hommes. Le contexte enumere les intermediaires divins — anges puis messagers humains. L'alternative « roi/souverain » est ecartee car le mot est au pluriel avec pronom possessif de Dieu, designant les anges dans le champ lexical de la revelation.

**messagers** — Le sens retenu est « messager/envoyer ». Le mot rusulih designe les prophetes envoyes aux hommes. L'alternative « pluie » est ecartee car le contexte est celui de la transmission du message divin.

**dissimulateurs** — Le sens retenu est « couvrir/dissimuler ». Le mot al-kafirina designe ceux qui couvrent la verite. L'alternative « etre ingrat » est ecartee car le contexte est celui de l'hostilite active envers Dieu et Ses intermediaires, pas de l'ingratitude passive.

§CRITIQUE§
**ennemi de Dieu vs infideles** — Les traductions courantes donnent « infideles » pour al-kafirina. Ce choix vient du vocabulaire religieux chretien qui traduit kufr par « infidelite ». Mais la racine k-f-r porte d'abord le sens de « couvrir, dissimuler ». Le verset ne parle pas de gens qui manquent de foi — il parle de gens qui couvrent activement la verite tout en se declarant ennemis de Dieu et de Ses intermediaires. Le mot « dissimulateurs » rend mieux l'idee d'un acte delibere de couverture que « infideles » qui suggere un simple manque de foi.`,
    segments: [
      { fr: "quiconque", phon: "man", arabic: "مَن", is_particle: true, position: 0 },
      { fr: "est", pos: "verbe", phon: "kana", arabic: "كَانَ", word_key: "knw", is_particle: false, sense_retenu: "etre", position: 1 },
      { fr: "ennemi", pos: "nom", phon: "'aduwwan", arabic: "عَدُوًّا", word_key: "edw", is_particle: false, sense_retenu: "ennemi", position: 2 },
      { fr: "de Dieu", pos: "nom", phon: "li-Llahi", arabic: "لِّلَّهِ", word_key: "alh", is_particle: false, sense_retenu: "Dieu", position: 3 },
      { fr: "et", phon: "wa", arabic: "وَ", is_particle: true, position: 4 },
      { fr: "de Ses anges", pos: "nom", phon: "mala'ikatihi", arabic: "مَلَائِكَتِهِ", word_key: "mlk", is_particle: false, sense_retenu: "ange", position: 5 },
      { fr: "et", phon: "wa", arabic: "وَ", is_particle: true, position: 6 },
      { fr: "de Ses messagers", pos: "nom", phon: "rusulih", arabic: "وَرُسُلِهِ", word_key: "rsl", is_particle: false, sense_retenu: "messager", position: 7 },
      { fr: "et de Djibril", phon: "wa-Jibrila", arabic: "وَجِبْرِيلَ", is_particle: true, position: 8 },
      { fr: "et de Mikal", phon: "wa-Mikala", arabic: "وَمِيكَالَ", is_particle: true, position: 9 },
      { fr: "alors certes", phon: "fa-inna", arabic: "فَإِنَّ", is_particle: true, position: 10 },
      { fr: "Dieu", pos: "nom", phon: "Allaha", arabic: "ٱللَّهَ", word_key: "alh", is_particle: false, sense_retenu: "Dieu", position: 11 },
      { fr: "est ennemi", pos: "nom", phon: "'aduwwun", arabic: "عَدُوٌّ", word_key: "edw", is_particle: false, sense_retenu: "ennemi", position: 12 },
      { fr: "des dissimulateurs", pos: "nom", phon: "li-l-kafirina", arabic: "لِّلْكَافِرِينَ", word_key: "kfr", is_particle: false, sense_retenu: "couvrir", position: 13 }
    ],
    words: [
      {
        word_key: "knw", position: 1, sense_chosen: "etre",
        analysis_axes: {
          concept_chosen: "Existence/Devenir",
          concepts: {
            "Existence/Devenir": {
              status: "retenu",
              senses: ["être", "devenir", "exister"],
              proof_ctx: "Le verbe kana est un accompli 3MS de la racine k-w-n. Le Lane's donne « he was, he became, he existed ». Kana introduit la condition du verset — quiconque est ennemi. L'accompli donne a la condition une valeur intemporelle et definitive. Le verbe d'existence est ici un verbe auxiliaire qui pose un etat permanent.",
              axe1_verset: "Le verbe kana ouvre la structure conditionnelle du verset. « Quiconque est ennemi de Dieu » — l'existence de l'hostilite est posee comme un fait. Le verset enumere ensuite les cibles de l'hostilite : Dieu, Ses anges, Ses messagers, Djibril et Mikal. Kana ne decrit pas un evenement ponctuel mais un etat — etre ennemi est une posture permanente qui definit la personne.",
              axe2_voisins: "Le verset 97 rappelait que Djibril a fait descendre la revelation. Le verset 98 pose la consequence — etre ennemi de Djibril c'est etre ennemi de tout le systeme de revelation. Le verset 99 enchaîne avec les signes clairs envoyes. La progression montre que la revelation (v97), l'hostilite envers elle (v98) et les signes clairs (v99) forment un ensemble.",
              axe3_sourate: "La racine k-w-n est omnipresente dans la sourate al-Baqarah. Kana sert de verbe auxiliaire dans des dizaines de versets. Ici il pose la condition d'hostilite qui structure le verset. La sourate utilise kana pour definir les etats des personnes — croyants, rejeteurs, ennemis.",
              axe4_coherence: "La racine k-w-n est la plus frequente du Coran apres q-w-l. Le verbe kana apparait dans presque chaque page. En 2:98, kana est un auxiliaire conditionnel. Le schema « man kana 'aduwwan » (quiconque est ennemi) est un procede coranique de mise en garde. L'existence de l'hostilite entraine une consequence precise.",
              axe5_frequence: "Pour la mission du khalifa, le verbe kana rappelle que les etats ne sont pas neutres — etre quelque chose a des consequences. Etre ennemi de Dieu est un etat qui entraine l'hostilite de Dieu. Le khalifa ne peut pas etre ennemi de la verite et esperer echapper aux consequences."
            }
          }
        }
      },
      {
        word_key: "edw", position: 2, sense_chosen: "ennemi",
        analysis_axes: {
          concept_chosen: "Hostilité/Inimitié",
          concepts: {
            "Hostilité/Inimitié": {
              status: "retenu",
              senses: ["ennemi", "hostilité", "agression"],
              proof_ctx: "Le mot 'aduwwan est un nom masculin singulier accusatif de la racine '-d-w. Le Lane's donne « an enemy, one who is hostile, one who bears enmity ». L'inimitie est un etat permanent d'opposition active. Le mot 'aduww apparait deux fois dans le verset — d'abord comme attribut de l'homme hostile ('aduwwan li-Llahi) puis comme attribut de Dieu ('aduwwun li-l-kafirina). La symetrie montre que l'hostilite vers Dieu se retourne contre celui qui la porte. La distinction philosophique avec la transgression (sens de la meme racine) est que l'inimitie est un etat relationnel permanent, tandis que la transgression est un acte ponctuel de depassement de limites. Ici le verset parle d'etre ennemi, pas de transgresser une limite.",
              axe1_verset: "Le mot 'aduwwan est l'attribut central du verset — quiconque est ennemi de Dieu. Le verset enumere les cibles de l'inimitie : Dieu, Ses anges, Ses messagers, Djibril et Mikal. L'ennemi ne vise pas un seul intermediaire mais tout le systeme de communication divine. La conclusion retourne l'hostilite : Dieu est ennemi des dissimulateurs. L'inimitie est reciproque — celui qui se declare ennemi de Dieu fait face a l'hostilite de Dieu.",
              axe2_voisins: "Le verset 97 rappelait que Djibril est celui qui a fait descendre la revelation sur le coeur du Prophete. Ce verset 98 pose la consequence — etre ennemi de Djibril c'est etre ennemi de la revelation elle-meme. Le verset 99 montrera que Dieu a fait descendre des signes clairs. L'inimitie envers les intermediaires est en fait une inimitie envers le message.",
              axe3_sourate: "La racine '-d-w apparait dans la sourate al-Baqarah sous ses differents sens. En 2:36, le diable est declare ennemi de l'homme. En 2:98, les hommes se declarent ennemis de Dieu. La sourate montre que l'inimitie est un choix — le diable est ennemi par nature, les hommes le deviennent par choix.",
              axe4_coherence: "La racine '-d-w apparait environ 106 fois dans le Coran. L'inimitie est toujours relationnelle — on est ennemi de quelqu'un. En 2:168, le diable est « votre ennemi manifeste ». En 35:6, « le diable est pour vous un ennemi, prenez-le pour ennemi ». Le Coran insiste sur la reciprocite de l'inimitie — se declarer ennemi de Dieu, c'est recevoir l'inimitie de Dieu.",
              axe5_frequence: "Pour la mission du khalifa, l'inimitie envers Dieu est le rejet total de la mission. Le khalifa qui se declare ennemi de Dieu et de Ses intermediaires abandonne sa mission et se retrouve face a l'hostilite divine. L'ennemi de Dieu n'est pas celui qui doute mais celui qui s'oppose activement au systeme de revelation."
            },
            "Transgression/Excès": {
              status: "probable",
              senses: ["transgresser", "injustice"],
              proof_ctx: "Le sens de transgression est un sens atteste de '-d-w — depasser les limites fixees par la loi ou l'autorite legitime. La distinction philosophique avec l'inimitie est que la transgression est un acte ponctuel de depassement de limites, tandis que l'inimitie est un etat relationnel permanent d'opposition. Le verset dit « quiconque est ennemi » — c'est un etat d'etre, pas un acte de transgression. Le mot 'aduwwan designe la personne qui est en etat d'hostilite, pas celle qui commet un acte de transgression.",
              axe1_verset: "Le mot 'aduwwan pourrait porter le sens de transgresseur — celui qui depasse les limites envers Dieu. Mais le verset construit une relation d'hostilite reciproque : quiconque est ennemi de Dieu → Dieu est ennemi des dissimulateurs. La structure relationnelle favorise le sens d'inimitie plutot que de transgression. La transgression est un acte, l'inimitie est un etat — le verset pose un etat.",
              axe2_voisins: "Le verset 97 parlait de Djibril qui a fait descendre la revelation. Le verset 98 pose l'inimitie envers Djibril et les autres intermediaires. La transgression impliquerait un depassement de limites, mais le contexte est celui de l'opposition au systeme de revelation, pas du depassement d'une regle.",
              axe3_sourate: "La sourate al-Baqarah utilise la racine '-d-w dans les deux sens. En 2:178, « fa-man i'tada ba'da dhalika » (quiconque transgresse apres cela). En 2:98, le sens est l'inimitie — le contexte le distingue clairement.",
              axe4_coherence: "Le Coran utilise les deux sens de '-d-w dans des contextes distincts. La transgression (i'tida) est utilisee pour le depassement de regles. L'inimitie ('aduww) est utilisee pour les relations d'opposition. Le verset 2:98 utilise la forme nominale 'aduww qui designe l'ennemi.",
              axe5_frequence: "La transgression implique un acte ponctuel contre une regle. L'inimitie implique une posture permanente contre une personne ou une entite. Le verset pose un etat permanent, pas un acte ponctuel."
            },
            "Course/Vitesse": {
              status: "nul",
              senses: ["courir"],
              proof_ctx: "Le sens de courir est un sens physique de '-d-w — se deplacer rapidement. Le contexte est celui de l'hostilite envers Dieu, pas du mouvement physique."
            }
          }
        }
      },
      {
        word_key: "alh", position: 3, sense_chosen: "Dieu",
        analysis_axes: {
          concept_chosen: "Divinité",
          concepts: {
            "Divinité": {
              status: "retenu",
              senses: ["divinité", "exclamation divine", "divinité (concept)", "oui certes", "Dieu", "théologie"],
              proof_ctx: "Le nom li-Llahi est le nom propre de la divinite avec preposition li de la racine a-l-h. Le Lane's donne « God, the One True God ». Dieu est l'objet de l'hostilite declaree — etre ennemi de Dieu est la forme la plus grave d'opposition. Le nom Allah apparait deux fois dans le verset — comme objet de l'hostilite puis comme sujet de la reciprocite.",
              axe1_verset: "Le nom li-Llahi est le premier element de l'enumeration — ennemi de Dieu, de Ses anges, de Ses messagers. Dieu est au sommet de la hierarchie des cibles de l'hostilite. La deuxieme occurrence (Allaha) fait de Dieu le sujet actif — Dieu est ennemi des dissimulateurs. Dieu n'est pas passif face a l'hostilite — Il repond par la meme hostilite.",
              axe2_voisins: "Le verset 97 mentionnait Dieu comme source de la revelation via Djibril. Ce verset 98 fait de Dieu a la fois la cible et la source de l'hostilite. Le verset 99 mentionnera Dieu comme celui qui a fait descendre les signes clairs. La progression montre Dieu comme revelateur (v97), cible et repondant de l'hostilite (v98), et source des signes (v99).",
              axe3_sourate: "La racine a-l-h est la plus presente de la sourate al-Baqarah. Le nom Allah structure chaque verset — Il est le sujet principal de la sourate. Ici Allah est d'abord cible de l'hostilite puis auteur de l'hostilite reciproque.",
              axe4_coherence: "Le nom Allah apparait plus de 2600 fois dans le Coran. En 2:98, la double occurrence montre la reciprocite de l'hostilite. Dieu repond a l'hostilite par l'hostilite — ce n'est pas une punition arbitraire mais une consequence logique du choix humain.",
              axe5_frequence: "Pour la mission du khalifa, Dieu est le mandant de la mission. Etre ennemi de Dieu c'est rejeter la source meme de la mission. Le khalifa qui se declare ennemi de Dieu detruit le fondement de sa propre existence en tant que khalifa."
            },
            "Adoration/Dévotion": {
              status: "nul",
              senses: ["diviniser", "adorer", "faire adorer", "se dévouer au culte"],
              proof_ctx: "Le mot est ici le nom propre Allah, pas un verbe d'adoration. Le contexte est celui de l'objet de l'hostilite, pas de l'objet de l'adoration."
            }
          }
        }
      },
      {
        word_key: "mlk", position: 5, sense_chosen: "ange",
        analysis_axes: {
          concept_chosen: "Ange/Messager",
          concepts: {
            "Ange/Messager": {
              status: "retenu",
              senses: ["ange", "messager", "message"],
              proof_ctx: "Le mot mala'ikatihi est un pluriel brise avec pronom possessif 3MS de la racine m-l-k. Le Lane's donne « angels, beings who carry messages between God and men ». Les anges sont les intermediaires entre Dieu et les hommes. La distinction philosophique avec la royaute est que le contexte enumere la chaine de transmission divine : Dieu → anges → messagers humains → Djibril et Mikal (nommement). Le sens d'ange est le seul qui s'integre dans cette chaine de communication. La royaute impliquerait une autorite sur un territoire, ce qui ne correspond pas a l'enumeration du verset.",
              axe1_verset: "Le mot mala'ikatihi est le deuxieme element de l'enumeration — apres Dieu et avant les messagers. Les anges occupent une position intermediaire entre Dieu et les hommes. Le verset nomme ensuite deux anges specifiques — Djibril et Mikal — ce qui confirme que mala'ika designe les anges. La chaine est complete : Dieu, anges en general, messagers humains, puis deux anges nommes.",
              axe2_voisins: "Le verset 97 mentionnait Djibril par son nom comme celui qui a fait descendre la revelation. Ce verset 98 elargit a tous les anges — etre ennemi des anges c'est etre ennemi de tout le systeme de transmission. Le verset 99 montrera les signes clairs — les signes sont le produit de cette chaine de transmission.",
              axe3_sourate: "La racine m-l-k dans la sourate al-Baqarah porte les deux sens — ange et royaute. En 2:30-34, les anges (mala'ika) sont les interlocuteurs de Dieu lors de la creation du khalifa. En 2:102, les deux anges de Babel. La sourate distingue clairement les contextes — ici le contexte est la transmission divine.",
              axe4_coherence: "La racine m-l-k avec le sens d'ange apparait environ 88 fois dans le Coran. Les anges sont toujours lies a la transmission, l'execution des ordres divins ou l'adoration. En 2:98, les anges sont dans l'enumeration des intermediaires divins. La forme mala'ika est la forme consacree pour les anges dans le Coran.",
              axe5_frequence: "Pour la mission du khalifa, les anges sont les temoins et les auxiliaires de la mission. En 2:30, les anges questionnent la creation du khalifa. Etre ennemi des anges c'est rejeter les temoins de la mission humaine. Le khalifa qui s'oppose aux anges s'oppose au systeme qui soutient sa propre mission."
            },
            "Royauté/Souveraineté": {
              status: "probable",
              senses: ["règne", "souverain", "couronnement", "trône", "roi", "royaume"],
              proof_ctx: "Le sens de royaute est un sens majeur de m-l-k — le roi qui gouverne et commande. La distinction philosophique avec le sens d'ange est que la royaute implique une autorite sur un peuple et un territoire, tandis que l'ange est un intermediaire dans la chaine de communication. Le verset enumere Dieu, anges, messagers, Djibril, Mikal — c'est une chaine de transmission, pas une hierarchie de pouvoir politique. Le pronom possessif « Ses » (mala'ikatihi) rattache les anges a Dieu comme Ses envoyés, pas comme Ses rois.",
              axe1_verset: "Le mot mala'ikatihi pourrait theoriquement porter le sens de « ses rois » ou « ses souverains ». Mais l'enumeration du verset est clairement celle des intermediaires de la revelation — Dieu, anges, messagers, Djibril, Mikal. Inserer « rois » dans cette enumeration briserait la coherence thematique de la chaine de transmission.",
              axe2_voisins: "Le verset 97 parle de la revelation descendue par Djibril. Le sens de royaute n'a aucun lien avec la revelation. Le contexte des versets voisins confirme que le theme est la transmission divine, pas le pouvoir politique.",
              axe3_sourate: "La sourate utilise mulk (royaute) en 2:247 pour Talut (Saul) et en 2:251 pour Dawud. Ces contextes sont clairement politiques. Le verset 2:98 est dans un contexte de revelation, pas de politique.",
              axe4_coherence: "Le Coran distingue clairement mala'ika (anges) de mulk/malik (roi/royaute). La forme mala'ika est toujours utilisee pour les anges dans le Coran. Le pluriel de malik (roi) serait muluk, pas mala'ika.",
              axe5_frequence: "La royaute concerne le pouvoir politique. Le verset traite de l'hostilite envers le systeme de revelation — les anges sont plus pertinents que les rois dans ce contexte."
            },
            "Possession/Autorité": {
              status: "nul",
              senses: ["maître", "possesseur", "biens", "esclave", "asservir", "posséder", "propriété"],
              proof_ctx: "Le sens de possession est hors sujet — le contexte est celui des intermediaires divins, pas de la propriete. La forme mala'ika designe les anges."
            }
          }
        }
      },
      {
        word_key: "rsl", position: 7, sense_chosen: "messager",
        analysis_axes: {
          concept_chosen: "Envoi/Message",
          concepts: {
            "Envoi/Message": {
              status: "retenu",
              senses: ["messager", "message", "libérer", "envoyer"],
              proof_ctx: "Le mot rusulih est un pluriel avec pronom possessif 3MS de la racine r-s-l. Le Lane's donne « His messengers, those He sent ». Les messagers sont les humains charges de transmettre le message divin aux autres humains. Ils completent la chaine de transmission : Dieu → anges → messagers humains. Le verset nomme ensuite deux anges specifiques (Djibril et Mikal), montrant que les messagers humains (rusul) sont distincts des anges (mala'ika) dans cette enumeration.",
              axe1_verset: "Le mot rusulih est le troisieme element de l'enumeration — apres Dieu et les anges. Les messagers humains completent la chaine de transmission. Etre ennemi des messagers c'est rejeter les porteurs humains du message. Le verset couvre toute la chaine : la source (Dieu), les intermediaires celestes (anges), les intermediaires humains (messagers) et deux anges nommes.",
              axe2_voisins: "Le verset 97 mentionnait la revelation descendue par Djibril. Ce verset 98 elargit aux messagers humains — etre ennemi des messagers c'est etre ennemi de la revelation telle qu'elle est transmise aux hommes. Le verset 99 montrera que les signes sont clairs — les messagers ont bien transmis.",
              axe3_sourate: "La racine r-s-l est centrale dans la sourate al-Baqarah. En 2:87, « Nous avons donne a Moussa le Livre et envoye apres lui des messagers ». En 2:119, « Nous t'avons envoye avec la verite ». La sourate insiste sur la chaine ininterrompue de messagers envoyes par Dieu.",
              axe4_coherence: "La racine r-s-l apparait environ 513 fois dans le Coran. Les messagers (rusul) sont un pilier de la foi coranique — croire aux messagers fait partie des articles de foi en 2:285. Etre ennemi des messagers c'est rejeter un pilier fondamental.",
              axe5_frequence: "Pour la mission du khalifa, les messagers sont les guides qui montrent le chemin de la mission. Etre ennemi des messagers c'est se priver des guides qui enseignent comment accomplir la mission humaine sur terre."
            },
            "Eau/Liquide": {
              status: "nul",
              senses: ["pluie"],
              proof_ctx: "Le sens de pluie est un sens physique de r-s-l — l'eau envoyee du ciel. Le contexte est celui des intermediaires divins, pas de la meteorologie."
            }
          }
        }
      },
      {
        word_key: "edw", position: 12, sense_chosen: "ennemi",
        analysis_axes: {
          concept_chosen: "Hostilité/Inimitié",
          concepts: {
            "Hostilité/Inimitié": {
              status: "retenu",
              senses: ["ennemi", "hostilité", "agression"],
              proof_ctx: "Le mot 'aduwwun est un nom masculin singulier nominatif de la racine '-d-w. Le Lane's donne « an enemy, one who is hostile ». Cette deuxieme occurrence de 'aduww dans le verset fait de Dieu le sujet de l'hostilite — « Dieu est ennemi des dissimulateurs ». La symetrie est complete : l'hostilite vers Dieu → l'hostilite de Dieu. La forme nominative (marfu') montre que 'aduwwun est le predicat — c'est l'attribut de Dieu dans cette relation.",
              axe1_verset: "Le mot 'aduwwun est le predicat de la phrase nominale « inna Allaha 'aduwwun li-l-kafirina ». Dieu est declare ennemi des dissimulateurs. Cette deuxieme occurrence ferme la symetrie du verset — l'hostilite humaine vers Dieu entraine l'hostilite divine vers les dissimulateurs. Le verset ne laisse pas l'hostilite sans reponse.",
              axe2_voisins: "Le verset 97 posait la revelation comme un bienfait. Le verset 98 montre que l'hostilite vers ce bienfait entraine l'hostilite de Dieu. Le verset 99 montrera les signes clairs — malgre l'evidence, certains restent ennemis.",
              axe3_sourate: "L'hostilite reciproque est un theme de la sourate al-Baqarah. En 2:36, le diable est ennemi de l'homme. En 2:98, Dieu est ennemi des dissimulateurs. La sourate montre que les relations d'hostilite ont des consequences — personne ne peut etre ennemi de Dieu impunement.",
              axe4_coherence: "L'idee que Dieu est ennemi des rejeteurs apparait en 2:98. Le Coran utilise aussi d'autres formulations — en 8:60, « votre ennemi et l'ennemi de Dieu ». L'hostilite divine est toujours une reponse a l'hostilite humaine, jamais gratuite.",
              axe5_frequence: "L'hostilite de Dieu est la consequence ultime du rejet de la mission. Le khalifa qui se declare ennemi de Dieu perd tout — la guidance, la protection et la misericorde."
            },
            "Transgression/Excès": {
              status: "nul",
              senses: ["transgresser", "injustice"],
              proof_ctx: "Meme raisonnement que pour la premiere occurrence — le contexte est l'hostilite relationnelle, pas la transgression d'une limite."
            }
          }
        }
      },
      {
        word_key: "kfr", position: 13, sense_chosen: "couvrir",
        analysis_axes: {
          concept_chosen: "Couverture/Dissimulation",
          concepts: {
            "Couverture/Dissimulation": {
              status: "retenu",
              senses: ["cacher", "la nuit qui couvre", "couvrir"],
              proof_ctx: "Le mot al-kafirina est un participe actif pluriel defini de la racine k-f-r. Le Lane's donne « those who cover, those who conceal the truth ». Le participe actif designe ceux qui font l'acte de couvrir activement — ce n'est pas un etat passif mais un acte delibere. Les dissimulateurs couvrent la verite qu'ils connaissent. La distinction philosophique avec l'ingratitude est que couvrir est un acte directionnel qui cache quelque chose aux autres, tandis que l'ingratitude est un etat interieur de refus de reconnaissance. Le verset parle de gens qui sont ennemis de Dieu et de Ses intermediaires — c'est un rejet actif et dirige vers l'exterieur, pas un sentiment interieur d'ingratitude.",
              axe1_verset: "Le mot al-kafirina ferme le verset — Dieu est ennemi des dissimulateurs. Les dissimulateurs sont ceux qui couvrent la verite tout en se declarant ennemis de Dieu. La couverture est la cause profonde de l'hostilite — on devient ennemi de ce qu'on refuse de voir. Le verset lie l'hostilite a la dissimulation comme cause et effet.",
              axe2_voisins: "Le verset 97 rappelait la revelation descendue par Djibril. Ce verset 98 montre que certains couvrent cette revelation et se declarent ennemis de son systeme de transmission. Le verset 99 montrera que les signes sont clairs — les dissimulateurs couvrent ce qui est evident.",
              axe3_sourate: "La racine k-f-r est la racine centrale de la sourate al-Baqarah — elle definit l'opposition fondamentale entre ceux qui decouvrent la verite et ceux qui la couvrent. En 2:6, « ceux qui ont couvert — les avertir ou ne pas les avertir c'est egal ». La sourate montre que la dissimulation est un choix delibere qui a des consequences.",
              axe4_coherence: "La racine k-f-r apparait environ 525 fois dans le Coran. Le sens premier de couvrir traverse toutes les occurrences — le kufr est l'acte de couvrir la verite. En 57:20, « comme une pluie dont la vegetation plait aux cultivateurs (kuffar) » — le cultivateur est celui qui couvre la graine de terre. Le meme acte physique de couvrir est transpose au spirituel.",
              axe5_frequence: "Pour la mission du khalifa, la dissimulation est l'antithese de la mission. Le khalifa est charge de decouvrir et de transmettre la verite — le dissimulateur fait l'inverse. Couvrir la verite c'est trahir la mission fondamentale de l'etre humain sur terre."
            },
            "Rejet/Ingratitude": {
              status: "probable",
              senses: ["être ingrat", "nier", "renier un bienfait", "rejeter", "mécréant"],
              proof_ctx: "Le sens de rejet est un sens atteste de k-f-r — refuser de reconnaitre un bienfait. La distinction philosophique avec la couverture est que le rejet est une reaction interieure de refus, tandis que la couverture est un acte exterieur de dissimulation. Le verset parle de gens qui sont activement ennemis de Dieu — la couverture est plus active et directionnelle que le simple rejet ou l'ingratitude. L'ingratitude est un etat interieur, la couverture est un acte qui cache quelque chose aux autres.",
              axe1_verset: "Le mot al-kafirina pourrait porter le sens de « les ingrats » ou « les rejeteurs ». Le contexte d'hostilite active favorise la couverture — ceux qui sont ennemis de Dieu font plus que rejeter, ils couvrent activement la verite.",
              axe2_voisins: "Le verset 89 utilisait la racine k-f-r dans le contexte de la malediction. Le verset 98 utilise al-kafirina pour designer les ennemis de Dieu. Le rejet et la couverture sont lies mais le contexte d'hostilite active favorise la couverture.",
              axe3_sourate: "La sourate utilise k-f-r dans les deux sens selon le contexte. En 2:88, « a cause de leur kufr » — la couverture comme cause. En 2:98, al-kafirina — ceux qui couvrent comme ennemis de Dieu.",
              axe4_coherence: "Le Coran utilise k-f-r comme un spectre de sens — de l'ingratitude a la couverture active. Le contexte determine la nuance. En 2:98, l'hostilite active vers Dieu favorise le sens de couverture active.",
              axe5_frequence: "L'ingratitude est un manque de reconnaissance. La couverture est un acte delibere de dissimulation. Le verset decrit des gens activement hostiles, pas simplement ingrats."
            },
            "Expiation/Réparation": {
              status: "nul",
              senses: ["expier", "effacer les péchés"],
              proof_ctx: "Le sens d'expiation est hors sujet — le contexte est celui de l'hostilite envers Dieu, pas de la reparation d'une faute."
            }
          }
        }
      }
    ]
  },

  // =====================================================
  // VERSET 2:99
  // verse_id=106, analysis_id=466
  // "Et certes Nous avons fait descendre vers toi des signes
  //  clairs, et ne les rejettent que les transgresseurs."
  // =====================================================
  99: {
    verse_id: 106,
    analysis_id: 466,
    translation_arab: "Et certes Nous avons fait descendre vers toi des signes clairs, et ne les couvre que celui qui sort de l'obeissance.",
    full_translation: "Et tres certainement, Nous avons fait descendre vers toi des signes evidents, et seuls les pervers n'y croient pas.",
    translation_explanation: `§DEMARCHE§
Ce verset est une affirmation divine directe : les signes envoyes au Prophete sont clairs, et seuls les transgresseurs les rejettent. Le verbe **anzalna** est un accompli 1P de la forme IV de la racine n-z-l. Le Lane's donne « We sent down, We revealed ». La forme IV (af'ala) ajoute l'idee de « faire faire » — Dieu a fait descendre les signes, c'est un envoi actif d'en haut vers le bas. L'accompli avec le pronom « Nous » (pluriel de majeste) marque l'autorite divine sur la revelation. Le nom **ayatin** est un pluriel indefini accusatif de la racine a-y-t. Le Lane's donne « signs, proofs, verses ». Les signes sont ce qui montre et indique — chaque signe pointe vers une verite. L'indefini (ayatin, sans al-) marque que les signes sont multiples et varies. Le nom **bayyinatin** est un adjectif qualificatif pluriel feminin indefini de la racine b-y-n. Le Lane's donne « clear, manifest, evident ». Les signes sont qualifies de clairs — ils separent le vrai du faux sans ambiguite. La racine b-y-n porte le sens de separation et de distinction — les signes clairs separent la verite du mensonge. Le verbe **yakfuru** est un inaccompli 3MS de la racine k-f-r. Le Lane's donne « he covers, he conceals ». L'inaccompli indique que l'acte de couvrir est habituel et continu — ce n'est pas un evenement ponctuel mais un comportement recurrent. La negation « wa-ma yakfuru biha » (et ne les couvre pas) suivie de l'exception « illa » (sauf) cree une structure restrictive — SEULS les transgresseurs les couvrent. Le nom **al-fasiquna** est un participe actif pluriel defini de la racine f-s-q. Le Lane's donne « those who go out of obedience, the transgressors, the rebellious ». Le participe actif designe ceux qui font activement l'acte de sortir de l'obeissance — ce sont des gens qui ont quitte le cadre volontairement.

§JUSTIFICATION§
**fait descendre** — Le sens retenu est « faire descendre/reveler ». Le verbe anzalna designe l'envoi de la revelation d'en haut vers le bas. L'alternative « s'installer » est ecartee car la forme IV indique un envoi actif, pas une halte.

**signes** — Le sens retenu est « signe/preuve ». Le mot ayatin designe les signes qui pointent vers la verite. L'alternative « verset » est ecartee car le contexte ne parle pas d'une unite textuelle mais de preuves envoyees au Prophete.

**clairs** — Le sens retenu est « separer/distinguer ». Le mot bayyinatin qualifie les signes comme clairs et distincts. La racine b-y-n porte le sens de separation — les signes clairs separent le vrai du faux. L'alternative « entre » est ecartee car le mot est un adjectif qualificatif, pas une preposition.

**couvre** — Le sens retenu est « couvrir ». Le verbe yakfuru designe l'acte de couvrir les signes clairs. L'alternative « etre ingrat » est ecartee car le contexte est celui de la couverture des signes, pas de l'ingratitude envers un bienfait.

**transgresseurs** — Le sens retenu est « sortir de l'obeissance ». Le mot al-fasiquna designe ceux qui ont quitte le cadre de l'obeissance. L'alternative « datte qui sort de sa peau » est ecartee car le contexte est spirituel.

§CRITIQUE§
**pervers vs transgresseurs** — Les traductions courantes donnent « pervers » pour al-fasiquna. Ce choix vient du vocabulaire religieux qui associe le fisq a la perversite morale. Mais la racine f-s-q porte d'abord le sens de « sortir » — la datte qui sort de sa peau, la souris qui sort de son trou. Le fasiq est celui qui est sorti du cadre de l'obeissance. « Transgresseur » ou « celui qui sort de l'obeissance » rend mieux l'idee d'un acte de sortie volontaire que « pervers » qui suggere une disposition morale intrinseque.`,
    segments: [
      { fr: "et certes", phon: "wa-laqad", arabic: "وَلَقَدْ", is_particle: true, position: 0 },
      { fr: "Nous avons fait descendre", pos: "verbe", phon: "anzalna", arabic: "أَنزَلْنَآ", word_key: "nzl", is_particle: false, sense_retenu: "faire descendre", position: 1 },
      { fr: "vers toi", phon: "ilayka", arabic: "إِلَيْكَ", is_particle: true, position: 2 },
      { fr: "des signes", pos: "nom", phon: "ayatin", arabic: "ءَايَاتٍ", word_key: "ayt", is_particle: false, sense_retenu: "signe", position: 3 },
      { fr: "clairs", pos: "nom", phon: "bayyinatin", arabic: "بَيِّنَاتٍ", word_key: "byn", is_particle: false, sense_retenu: "separer", position: 4 },
      { fr: "et ne", phon: "wa-ma", arabic: "وَمَا", is_particle: true, position: 5 },
      { fr: "les couvre", pos: "verbe", phon: "yakfuru", arabic: "يَكْفُرُ", word_key: "kfr", is_particle: false, sense_retenu: "couvrir", position: 6 },
      { fr: "par elles", phon: "biha", arabic: "بِهَا", is_particle: true, position: 7 },
      { fr: "sauf", phon: "illa", arabic: "إِلَّا", is_particle: true, position: 8 },
      { fr: "ceux qui sortent de l'obeissance", pos: "nom", phon: "al-fasiquna", arabic: "ٱلْفَاسِقُونَ", word_key: "fsq", is_particle: false, sense_retenu: "sortir de l'obeissance", position: 9 }
    ],
    words: [
      {
        word_key: "nzl", position: 1, sense_chosen: "faire descendre",
        analysis_axes: {
          concept_chosen: "Descente/Révélation",
          concepts: {
            "Descente/Révélation": {
              status: "retenu",
              senses: ["descendre", "pluie qui descend", "faire descendre", "révéler", "envoyer d'en haut"],
              proof_ctx: "Le verbe anzalna est un accompli 1P de la forme IV de la racine n-z-l. Le Lane's donne « We sent down, We caused to descend ». La forme IV (af'ala) indique que Dieu a fait descendre activement les signes — ce n'est pas une descente naturelle mais un envoi delibere. L'accompli avec le pluriel de majeste « Nous » marque l'autorite divine sur l'acte de revelation.",
              axe1_verset: "Le verbe anzalna ouvre le contenu du verset — Nous avons fait descendre vers toi des signes clairs. La descente est le mouvement fondamental de la revelation — du haut vers le bas, de Dieu vers le Prophete. Les signes descendent avec clarte (bayyinatin), ce qui rend inexcusable le rejet. Le verset lie la descente des signes a l'inexcusabilite du rejet.",
              axe2_voisins: "Le verset 97 utilisait nazzala (forme II intensive) pour la descente de la revelation par Djibril. Le verset 99 utilise anzala (forme IV causative) pour la descente des signes. Les deux formes decrivent le meme mouvement — la revelation descend — mais avec des nuances : nazzala insiste sur la progressivite, anzala sur l'acte divin de faire descendre.",
              axe3_sourate: "La racine n-z-l est une racine structurante de la sourate al-Baqarah. En 2:2, « ce Livre sans doute ». En 2:4, « ce qui a ete fait descendre vers toi ». En 2:97, « il l'a fait descendre sur ton coeur ». La sourate revient constamment a la descente de la revelation comme fait central.",
              axe4_coherence: "La racine n-z-l apparait environ 293 fois dans le Coran. La revelation est systematiquement decrite comme un mouvement descendant — du ciel vers la terre, de Dieu vers l'homme. En 17:105, « Nous l'avons fait descendre avec la verite et avec la verite il est descendu ». La descente est le mode de transmission de la verite divine.",
              axe5_frequence: "Pour la mission du khalifa, la descente des signes est le materiau de la mission. Les signes descendent pour que le khalifa les lise, les comprenne et agisse en consequence. Sans la descente de la revelation, le khalifa n'a pas de guide pour sa mission."
            },
            "Halte/Séjour": {
              status: "nul",
              senses: ["s'installer", "faire halte", "lieu de descente", "hôte"],
              proof_ctx: "Le sens de halte est un sens secondaire de n-z-l — s'arreter dans un lieu. Le contexte est celui de la revelation envoyee par Dieu, pas d'un voyageur qui fait halte."
            }
          }
        }
      },
      {
        word_key: "ayt", position: 3, sense_chosen: "signe",
        analysis_axes: {
          concept_chosen: "Signe/Preuve",
          concepts: {
            "Signe/Preuve": {
              status: "retenu",
              senses: ["signe", "miracle", "preuve"],
              proof_ctx: "Le mot ayatin est un pluriel indefini accusatif de la racine a-y-t. Le Lane's donne « signs, proofs, marks, tokens ». Les signes sont ce qui montre et indique — ils pointent vers une verite au-dela d'eux-memes. La distinction philosophique avec le verset est que le signe est une realite signifiante qui montre quelque chose, tandis que le verset est une unite textuelle. Le verset parle de « signes clairs » envoyes au Prophete — ce sont des preuves qui separent le vrai du faux.",
              axe1_verset: "Le mot ayatin est l'objet de la descente — Nous avons fait descendre des signes. Les signes sont qualifies de bayyinatin (clairs) — ils separent la verite du mensonge sans ambiguite. Le verset montre que les signes sont a la fois envoyes (par Dieu) et clairs (en eux-memes) — le probleme n'est pas dans les signes mais dans ceux qui les couvrent.",
              axe2_voisins: "Le verset 97 parlait de la revelation descendue par Djibril. Le verset 99 precise que cette revelation comprend des signes clairs. Le verset 100 montrera que meme avec ces signes clairs, certains rompent leurs engagements. La progression montre que la clarte des signes n'empeche pas le rejet.",
              axe3_sourate: "La racine a-y-t structure la sourate al-Baqarah. En 2:39, « ceux qui rejettent Nos signes ». En 2:61, « ils rejetaient les signes de Dieu ». En 2:87, « vous vous etes enorgueillies — vous en avez traite de menteurs et d'autres vous les avez tues ». La sourate accumule les signes rejetes — le verset 99 s'inscrit dans cette serie.",
              axe4_coherence: "La racine a-y-t apparait environ 382 fois dans le Coran. Les signes sont de trois types : cosmiques (creation), textuels (versets) et historiques (miracles). En 2:99, les signes sont qualifies de clairs (bayyinatin) — le Coran insiste sur la clarte des signes pour rendre inexcusable le rejet.",
              axe5_frequence: "Pour la mission du khalifa, les signes sont les indicateurs de la mission. Le khalifa lit les signes — dans la creation, dans la revelation, dans l'histoire — pour comprendre sa mission et l'accomplir. Couvrir les signes c'est se priver des indicateurs de la mission."
            },
            "Révélation/Parole": {
              status: "probable",
              senses: ["verset"],
              proof_ctx: "Le sens de verset est un sens atteste de a-y-t — une unite textuelle de la revelation. La distinction philosophique avec le signe est que le verset est une unite de texte, tandis que le signe est une realite qui montre quelque chose. Le qualificatif bayyinatin (clairs) favorise le sens de signe — les signes clairs sont des preuves evidentes, pas simplement des unites de texte. Cependant, les ayat du Coran sont aussi des signes au sens plein du terme.",
              axe1_verset: "Le mot ayatin avec le qualificatif bayyinatin pourrait designer des versets clairs. Mais le contexte de la descente (anzalna) et de la clarte (bayyinatin) favorise le sens de signes-preuves plutot que d'unites textuelles.",
              axe2_voisins: "Le verset 97 parlait de la revelation en tant que message descendu. Le verset 99 parle de signes clairs — le passage traite des preuves envoyees, pas des unites textuelles.",
              axe3_sourate: "La sourate utilise aya/ayat dans les deux sens — verset et signe. Le contexte determine la nuance. En 2:99, la qualification de bayyinatin (clairs) et le contexte de preuve favorisent le sens de signe.",
              axe4_coherence: "Le Coran utilise ayat comme un concept englobant — les versets sont des signes et les signes sont des versets. La distinction est souvent academique plutot que semantique.",
              axe5_frequence: "Le sens de signe est plus large et plus profond que le sens de verset. Les signes englobent les versets mais les depassent — chaque verset est un signe mais chaque signe n'est pas un verset."
            }
          }
        }
      },
      {
        word_key: "byn", position: 4, sense_chosen: "separer",
        analysis_axes: {
          concept_chosen: "Séparation/Distance",
          concepts: {
            "Séparation/Distance": {
              status: "retenu",
              senses: ["entre", "séparer", "quitter"],
              proof_ctx: "Le mot bayyinatin est un adjectif qualificatif derive de la racine b-y-n. Le Lane's donne « clear, manifest, evident, that which separates truth from falsehood ». La clarte des signes vient de leur capacite a separer — les signes clairs (bayyinatin) sont ceux qui font la distinction entre le vrai et le faux. La racine b-y-n porte fondamentalement le sens de separation — ce qui est « clair » est ce qui est « separe » de la confusion. La distinction philosophique avec la clarte pure est que la clarte est un etat passif (etre visible), tandis que la separation est un acte actif (distinguer, faire le tri). Les signes ne sont pas juste visibles — ils separent le vrai du faux.",
              axe1_verset: "Le mot bayyinatin qualifie les signes descendus — des signes qui separent le vrai du faux. Le verset enchaine avec le rejet par les transgresseurs — les signes sont clairs et distinctifs, mais les transgresseurs les couvrent malgre tout. La clarte-separation des signes rend le rejet inexcusable.",
              axe2_voisins: "Le verset 97 parlait de la revelation descendue comme guidance et bonne nouvelle. Le verset 99 precise que les signes sont « separants » — ils font la distinction. Le verset 100 montrera que malgre cette distinction, certains rompent leurs engagements. La progression montre que la distinction n'empeche pas la trahison.",
              axe3_sourate: "La racine b-y-n apparait dans la sourate al-Baqarah dans les deux sens — separation et clarte. En 2:159, « ceux qui cachent ce que Nous avons fait descendre de preuves (bayyinat) et de guidance ». La sourate associe les bayyinat a la guidance — ce qui separe le vrai du faux guide vers le vrai.",
              axe4_coherence: "La racine b-y-n apparait environ 523 fois dans le Coran. Le mot bayyinat (preuves claires) est un terme recurrent pour decrire les signes divins. En 3:86, « un peuple qui a rejete apres les preuves claires ». Les bayyinat sont les preuves qui ne laissent aucune ambiguite.",
              axe5_frequence: "Pour la mission du khalifa, la separation entre le vrai et le faux est le fondement de la justice. Le khalifa utilise les signes clairs pour distinguer et juger. Les signes qui separent le vrai du faux sont l'outil du khalifa pour exercer sa mission de justice."
            },
            "Clarté/Évidence": {
              status: "nul",
              senses: ["être clair", "expliquer", "preuve", "évident"],
              proof_ctx: "Le sens de clarte est un sens atteste de b-y-n mais derive du sens premier de separation. Ce qui est clair est ce qui est separe de la confusion. Le sens de separation est premier et plus profond."
            }
          }
        }
      },
      {
        word_key: "kfr", position: 6, sense_chosen: "couvrir",
        analysis_axes: {
          concept_chosen: "Couverture/Dissimulation",
          concepts: {
            "Couverture/Dissimulation": {
              status: "retenu",
              senses: ["cacher", "la nuit qui couvre", "couvrir"],
              proof_ctx: "Le verbe yakfuru est un inaccompli 3MS de la racine k-f-r. Le Lane's donne « he covers, he conceals ». L'inaccompli indique un acte habituel et continu — couvrir les signes est un comportement recurrent, pas un evenement ponctuel. La structure « wa-ma yakfuru biha illa al-fasiquna » (et ne les couvre sauf les transgresseurs) restreint l'acte de couverture aux seuls transgresseurs.",
              axe1_verset: "Le verbe yakfuru est dans la structure restrictive « ne... que » — seuls les transgresseurs couvrent les signes. Les signes sont clairs (bayyinatin) mais les transgresseurs les couvrent malgre la clarte. La couverture est l'exact oppose de la clarte — les signes separent le vrai du faux, et les transgresseurs recouvrent cette separation.",
              axe2_voisins: "Le verset 98 utilisait al-kafirina pour les ennemis de Dieu. Le verset 99 utilise yakfuru pour l'acte de couvrir les signes. Le verset 100 montrera que les engagements sont rompus. La progression va de l'hostilite (v98) a la couverture des signes (v99) puis a la rupture des pactes (v100).",
              axe3_sourate: "La racine k-f-r dans la sourate al-Baqarah designe systematiquement l'acte de couvrir la verite. En 2:89, « la malediction de Dieu est sur ceux qui couvrent ». En 2:99, seuls les transgresseurs couvrent les signes clairs.",
              axe4_coherence: "Le Coran associe souvent kufr et fisq — la couverture et la transgression. En 2:99, les deux sont lies : ceux qui couvrent les signes sont les fasiqun (transgresseurs). La couverture des signes est un acte de transgression — sortir du cadre de l'obeissance.",
              axe5_frequence: "La couverture des signes clairs est la pire forme de dissimulation — couvrir ce qui est evident demande un effort delibere. Le khalifa qui couvre les signes clairs trahit sa mission de maniere aggravee."
            },
            "Rejet/Ingratitude": {
              status: "probable",
              senses: ["être ingrat", "nier", "renier un bienfait", "rejeter", "mécréant"],
              proof_ctx: "Le sens de rejet est coherent — rejeter les signes clairs. La distinction avec la couverture est la meme que dans le verset 98 : couvrir est un acte exterieur et actif, rejeter peut etre interieur et passif. L'inaccompli yakfuru suggere un acte habituel et delibere — la couverture active est plus coherente que le rejet passif.",
              axe1_verset: "Le verbe yakfuru avec la preposition bi (par) pourrait porter le sens de « rejeter ». Mais la structure restrictive et l'inaccompli favorisent un acte habituel et actif — couvrir plutot que simplement rejeter.",
              axe2_voisins: "Le contexte des versets 97-100 traite de l'hostilite active envers la revelation. Le rejet passif est moins coherent que la couverture active dans ce contexte.",
              axe3_sourate: "La sourate utilise k-f-r dans les deux sens mais le sens de couverture est premier etymologiquement.",
              axe4_coherence: "Le Coran lie le kufr au fisq — les deux sont des actes deliberes, pas des etats passifs.",
              axe5_frequence: "Le rejet est moins grave que la couverture — rejeter c'est refuser, couvrir c'est cacher activement."
            }
          }
        }
      },
      {
        word_key: "fsq", position: 9, sense_chosen: "sortir de l'obeissance",
        analysis_axes: {
          concept_chosen: "Transgression/Rébellion",
          concepts: {
            "Transgression/Rébellion": {
              status: "retenu",
              senses: ["sortir de l'obéissance", "désobéir", "pervers"],
              proof_ctx: "Le mot al-fasiquna est un participe actif pluriel defini de la racine f-s-q. Le Lane's donne « those who go out of the right way, those who leave the bounds of obedience ». Le participe actif designe ceux qui font activement l'acte de sortir — ce ne sont pas des gens qui sont dans un etat passif de perversite mais des gens qui ont activement quitte le cadre. La racine f-s-q vient de l'image de la datte qui sort de sa peau — le fasiq est celui qui sort du cadre comme la datte sort de son enveloppe.",
              axe1_verset: "Le mot al-fasiquna ferme le verset — seuls les transgresseurs couvrent les signes clairs. La transgression est la cause du rejet des signes : ceux qui sont sortis du cadre de l'obeissance sont ceux qui couvrent les signes. Le verset etablit un lien causal : sortir de l'obeissance → couvrir les signes clairs. Le participe actif avec l'article defini (al-) designe un groupe connu et identifie.",
              axe2_voisins: "Le verset 98 parlait des dissimulateurs (al-kafirina). Le verset 99 les identifie comme transgresseurs (al-fasiquna). Le verset 100 montrera que ces memes personnes rompent leurs engagements. La progression montre que les dissimulateurs sont des transgresseurs qui rompent leurs pactes.",
              axe3_sourate: "La racine f-s-q apparait dans la sourate al-Baqarah pour designer ceux qui sortent du cadre. En 2:26, « Il n'egare par [cet exemple] que les transgresseurs ». En 2:59, « les transgresseurs ont change la parole ». La sourate montre que la transgression est un choix delibere de sortie du cadre.",
              axe4_coherence: "La racine f-s-q apparait environ 54 fois dans le Coran. Le fasiq est toujours celui qui sort volontairement du cadre de l'obeissance — ce n'est jamais un etat involontaire. En 18:50, Iblis « sortit de l'obeissance a son Seigneur (fasaqa 'an amri rabbihi) ». L'image de la sortie est constante.",
              axe5_frequence: "Pour la mission du khalifa, la transgression est la sortie volontaire de la mission. Le khalifa transgresse quand il quitte le cadre de sa mission — il sort de l'obeissance et couvre les signes qui guidaient sa mission. Le verset lie transgression et couverture — sortir de l'obeissance mene a couvrir la verite."
            }
          }
        }
      }
    ]
  },

  // =====================================================
  // VERSET 2:100
  // verse_id=107, analysis_id=467
  // "Est-ce que chaque fois qu'ils ont fait un pacte, un
  //  groupe d'entre eux l'a jete? Mais la plupart d'entre
  //  eux ne croient pas."
  // =====================================================
  100: {
    verse_id: 107,
    analysis_id: 467,
    translation_arab: "Est-ce que chaque fois qu'ils ont fait un engagement, un groupe parmi eux l'a jete? La plupart d'entre eux ne croient pas.",
    full_translation: "Est-ce qu'a chaque fois qu'ils prennent un engagement, une partie d'entre eux le rejette? En fait, la plupart d'entre eux ne croient pas.",
    translation_explanation: `§DEMARCHE§
Ce verset est une question rhetorique qui denonce la rupture repetee des engagements. Le verbe **'ahadu** est un accompli 3MP de la racine '-h-d. Le Lane's donne « they made a covenant, they pledged ». L'engagement est un acte solennel qui lie deux parties — les enfants d'Israel ont pris des engagements envers Dieu. Le nom **'ahdan** est un nom masculin singulier accusatif indefini de la meme racine '-h-d. Le Lane's donne « a covenant, a pledge, a compact ». Le nom repete l'idee verbale pour insister — ils ont fait un engagement, un pacte concret. La double occurrence de la racine '-h-d (verbe + nom) dans le meme verset insiste sur la gravite de la rupture — c'est un engagement qu'ils ont pris et qu'ils rompent. Le verbe **nabadha** est un accompli 3MS de la racine n-b-dh. Le Lane's donne « he threw, he cast away, he rejected by throwing aside ». Jeter un engagement c'est le traiter avec mepris — on ne le rompt pas simplement, on le jette comme un objet sans valeur. Le mouvement est physique et directionnel — l'engagement est projete loin. Le nom **fariqun** est un nom masculin singulier nominatif indefini de la racine f-r-q. Le Lane's donne « a group, a party that has separated from the main body ». Un groupe — pas tous — s'est separe du reste pour jeter l'engagement. Le mot fariq implique la separation : c'est une partie qui s'est distinguee du reste par son acte de rejet. La particule **bal** est une particule de rectification. Le Lane's donne « rather, nay ». La rectification corrige la question — le probleme n'est pas seulement la rupture du pacte mais l'absence de foi. Le nom **aktharuhum** est un elatif avec pronom 3MP de la racine k-th-r. Le Lane's donne « most of them, the majority ». La majorite ne croit pas — c'est pire que le groupe qui jette le pacte, c'est la plupart qui n'ont pas la foi. Le verbe **yu'minuna** est un inaccompli 3MP de la racine a-m-n. Le Lane's donne « they believe ». L'inaccompli avec la negation « la » indique une absence habituelle et continue de foi — ce n'est pas un manque ponctuel mais un etat permanent.

§JUSTIFICATION§
**engagement** — Le sens retenu est « pacte/engagement ». Le mot 'ahd designe un accord solennel entre deux parties. L'alternative « epoque » est ecartee car le contexte est celui de la rupture d'un accord, pas d'une periode de temps. Le mot « engagement » est choisi car il porte l'idee d'un acte volontaire et solennel — on s'engage, ce qui implique une responsabilite.

**jete** — Le sens retenu est « jeter/rejeter ». Le verbe nabadha designe l'acte physique de lancer quelque chose loin de soi. Le mot « jeter » est choisi car il rend le mepris physique — on ne rompt pas simplement un accord, on le jette comme un dechet.

**groupe** — Le sens retenu est « separer/distinguer ». Le mot fariqun designe un groupe qui s'est separe du reste. L'alternative « diviser » est ecartee car le mot designe le groupe lui-meme (le resultat de la separation), pas l'acte de diviser.

**plupart** — Le sens retenu est « beaucoup/abondant ». Le mot aktharuhum designe la majorite d'entre eux. L'elatif (forme de superiorite) montre que ce n'est pas simplement beaucoup mais la plupart — la majorite.

**croient** — Le sens retenu est « croire ». Le verbe yu'minuna designe la foi. L'alternative « securite » est ecartee car le contexte est celui de la croyance, pas de la protection.

§CRITIQUE§
**rejette vs jete** — Les traductions courantes donnent « rejette » pour nabadha. Ce choix est acceptable mais attenué. La racine n-b-dh porte d'abord le sens physique de « jeter, lancer loin de soi ». « Jeter un engagement » est plus violent et plus meprisant que « rejeter un engagement ». Le texte utilise un verbe physique pour montrer le mepris — l'engagement est traite comme un objet sans valeur qu'on lance.`,
    segments: [
      { fr: "est-ce que", phon: "a-wa", arabic: "أَوَ", is_particle: true, position: 0 },
      { fr: "chaque fois que", pos: "nom", phon: "kullama", arabic: "كُلَّمَا", word_key: "kll", is_particle: false, sense_retenu: "chaque", position: 1 },
      { fr: "ils ont fait un engagement", pos: "verbe", phon: "'ahadu", arabic: "عَاهَدُوا۟", word_key: "ehd", is_particle: false, sense_retenu: "engagement", position: 2 },
      { fr: "un engagement", pos: "nom", phon: "'ahdan", arabic: "عَهْدًا", word_key: "ehd", is_particle: false, sense_retenu: "engagement", position: 3 },
      { fr: "l'a jete", pos: "verbe", phon: "nabadha-hu", arabic: "نَّبَذَهُ", word_key: "nbdh", is_particle: false, sense_retenu: "jeter", position: 4 },
      { fr: "un groupe", pos: "nom", phon: "fariqun", arabic: "فَرِيقٌ", word_key: "frq", is_particle: false, sense_retenu: "groupe", position: 5 },
      { fr: "parmi eux", phon: "minhum", arabic: "مِّنْهُمْ", is_particle: true, position: 6 },
      { fr: "mais plutot", phon: "bal", arabic: "بَلْ", is_particle: true, position: 7 },
      { fr: "la plupart", pos: "nom", phon: "aktharuhum", arabic: "أَكْثَرُهُمْ", word_key: "kthr", is_particle: false, sense_retenu: "beaucoup", position: 8 },
      { fr: "ne", phon: "la", arabic: "لَا", is_particle: true, position: 9 },
      { fr: "croient pas", pos: "verbe", phon: "yu'minuna", arabic: "يُؤْمِنُونَ", word_key: "amn", is_particle: false, sense_retenu: "croire", position: 10 }
    ],
    words: [
      {
        word_key: "ehd", position: 2, sense_chosen: "engagement",
        analysis_axes: {
          concept_chosen: "Engagement/Promesse",
          concepts: {
            "Engagement/Promesse": {
              status: "retenu",
              senses: ["pacte", "engagement", "promesse", "confier"],
              proof_ctx: "Le verbe 'ahadu est un accompli 3MP de la racine '-h-d et le nom 'ahdan est un accusatif indefini de la meme racine. Le Lane's donne « they made a covenant, they pledged; a covenant, a compact ». La double occurrence de la racine dans le meme verset (verbe + nom, cognate accusative) insiste sur la solennite de l'acte. L'engagement est un acte relationnel qui lie deux parties — il sort de celui qui s'engage et atteint celui envers qui il s'engage. L'engagement est permanent tant qu'il n'est pas rompu — sa rupture est donc un acte grave qui detruit la relation.",
              axe1_verset: "Le verbe 'ahadu et le nom 'ahdan forment une structure emphatique — « ils ont fait un engagement, un engagement ». La repetition insiste sur la solennite et la gravite. Le verset pose ensuite la rupture : un groupe jette cet engagement. La question rhetorique (a-wa kullama) denonce la repetition de la rupture — « est-ce que chaque fois qu'ils font un engagement ». La rupture n'est pas un evenement isole mais un schema recurrent.",
              axe2_voisins: "Le verset 98 posait l'hostilite envers Dieu. Le verset 99 montrait la couverture des signes clairs. Le verset 100 ajoute la rupture des engagements. La progression montre trois formes de trahison : hostilite directe (v98), couverture des preuves (v99), rupture des pactes (v100). Chaque verset aggrave le precedent.",
              axe3_sourate: "La racine '-h-d est centrale dans la sourate al-Baqarah. En 2:27, « ceux qui rompent le pacte de Dieu apres l'avoir contracte ». En 2:40, « soyez fideles a Mon pacte, Je serai fidele au votre ». En 2:80, « Dieu ne manque pas a Sa promesse ». La sourate montre que le pacte est la base de la relation entre Dieu et les enfants d'Israel — sa rupture est la trahison fondamentale.",
              axe4_coherence: "La racine '-h-d apparait environ 46 fois dans le Coran. L'engagement divin est toujours presente comme inconditionnel — Dieu tient Sa promesse. L'engagement humain est souvent rompu — les enfants d'Israel rompent « chaque fois » qu'ils s'engagent. En 3:77, « ceux qui vendent le pacte de Dieu a vil prix ». La rupture du pacte est un theme recurrent lie aux enfants d'Israel.",
              axe5_frequence: "Pour la mission du khalifa, l'engagement est le fondement de la mission. Le khalifa s'est engage aupres de Dieu lors du pacte primordial (7:172). Rompre cet engagement c'est trahir la mission fondamentale. Le verset denonce la rupture repetee — le khalifa qui rompt ses engagements de maniere recurrente trahit sa mission de maniere aggravee."
            },
            "Sens isolé/Époque": {
              status: "nul",
              senses: ["époque"],
              proof_ctx: "Le sens d'epoque est un sens secondaire de '-h-d — une periode de temps. Le contexte est celui de la rupture d'un pacte, pas d'une reference temporelle."
            }
          }
        }
      },
      {
        word_key: "nbdh", position: 4, sense_chosen: "jeter",
        analysis_axes: {
          concept_chosen: "Rejet/Abandon",
          concepts: {
            "Rejet/Abandon": {
              status: "retenu",
              senses: ["jeter", "rejeter", "rompre un pacte"],
              proof_ctx: "Le verbe nabadha est un accompli 3MS de la racine n-b-dh. Le Lane's donne « he threw, he cast away, he rejected by throwing aside, he threw behind his back ». Jeter est un acte physique, directionnel et meprisant — on jette ce qui n'a plus de valeur. L'engagement est traite comme un dechet. Le Lane's precise « nabadha al-'ahda » (il a jete le pacte) comme expression specifique pour la rupture meprisante d'un accord. L'accompli 3MS avec le pronom suffixe -hu (le) montre que le sujet (fariqun, un groupe) jette l'engagement (l'objet).",
              axe1_verset: "Le verbe nabadha est l'acte central du verset — un groupe jette l'engagement. Le mouvement est physique et violent — nabadha implique un lancer, pas un simple abandon. L'engagement est projete loin comme un objet sans valeur. Le verset utilise un verbe physique pour montrer le mepris — l'engagement solennel est traite comme un dechet. La structure emphatique (kullama 'ahadu 'ahdan nabadha-hu fariqun) montre la repetition de cet acte meprisant.",
              axe2_voisins: "Le verset 98 montrait l'hostilite. Le verset 99 montrait la couverture des signes. Le verset 100 montre le jet des engagements. La progression aggrave le mepris — de l'hostilite declaree a la couverture cachee puis au jet meprisant du pacte. Nabadha est plus violent que kafara — couvrir est discret, jeter est ostensible.",
              axe3_sourate: "La racine n-b-dh n'apparait qu'une fois dans la sourate al-Baqarah, dans ce verset. Le geste de jeter l'engagement est unique et marque — il n'est pas dilue par la repetition. La sourate utilise d'autres racines pour la rupture du pacte (naqada en 2:27, bada'a en 2:55) mais nabadha ajoute la violence physique du jet.",
              axe4_coherence: "La racine n-b-dh apparait 5 fois dans le Coran. En 3:187, « ils le jeterent derriere leurs dos ». En 8:58, « jette-leur [le pacte] de maniere egale ». En 19:26, sens different (enfant). Le schema « jeter le pacte derriere le dos » est une image recurrente pour decrire le mepris du pacte divin. En 2:100, nabadha decrit le meme geste de mepris.",
              axe5_frequence: "Pour la mission du khalifa, jeter l'engagement est le geste le plus meprisant envers la mission. Le khalifa qui jette son pacte avec Dieu ne le rompt pas simplement — il le traite comme un dechet. C'est pire que l'oubli ou la negligence — c'est le mepris delibere."
            }
          }
        }
      },
      {
        word_key: "frq", position: 5, sense_chosen: "groupe",
        analysis_axes: {
          concept_chosen: "Séparation/Distinction",
          concepts: {
            "Séparation/Distinction": {
              status: "retenu",
              senses: ["séparer", "distinguer", "diviser", "Furqân"],
              proof_ctx: "Le mot fariqun est un nom derive de la racine f-r-q. Le Lane's donne « a party, a group, a sect that has separated from the main body ». Le fariq est le resultat de la separation — c'est un groupe qui s'est distingue du reste par ses actes. En 2:100, le fariq est le groupe qui jette l'engagement — il s'est separe du reste de la communaute par son acte de trahison. La distinction philosophique avec le sens de « groupe » abstrait est que le fariq implique la separation — ce n'est pas un groupe neutre mais un groupe qui s'est separe. Le mot porte en lui l'acte de separation qui l'a constitue.",
              axe1_verset: "Le mot fariqun est le sujet de nabadha — un groupe a jete l'engagement. Le fariq n'est pas la totalite mais une partie qui s'est separee. Le verset corrige ensuite par bal (mais plutot) : la plupart ne croient pas. Le fariq jette le pacte, mais la majorite ne croit pas — le probleme est plus large que le groupe qui jette.",
              axe2_voisins: "Le verset 98 parlait des dissimulateurs en general. Le verset 99 parlait des transgresseurs. Le verset 100 precise qu'un groupe specifique jette l'engagement, mais que la majorite ne croit pas. La precision montre que le rejet a differents niveaux — du groupe actif a la majorite passive.",
              axe3_sourate: "La racine f-r-q apparait dans la sourate al-Baqarah dans les deux sens. En 2:53, « le Furqan » (ce qui separe le vrai du faux). En 2:100, fariqun (un groupe separe). La sourate utilise la separation dans les deux directions — le Furqan separe le vrai du faux, le fariq se separe de la communaute.",
              axe4_coherence: "La racine f-r-q apparait environ 72 fois dans le Coran. Le mot fariq designe un groupe qui s'est distingue par ses actes. En 3:23, « un groupe d'entre eux se detourne ». En 2:75, « un groupe d'entre eux entendait la parole de Dieu puis la falsifiait ». Le schema « fariqun minhum » (un groupe parmi eux) est recurrent pour decrire les trahisons partielles des enfants d'Israel.",
              axe5_frequence: "Pour la mission du khalifa, la separation est un acte qui brise l'unite. Le groupe qui se separe en jetant l'engagement detruit la cohesion de la communaute. Le khalifa doit maintenir l'unite — la separation est un echec de la mission."
            },
            "Groupe/Partie": {
              status: "nul",
              senses: ["groupe", "partie"],
              proof_ctx: "Le sens de « groupe » abstrait sans l'idee de separation est une lecture appauvrie de fariq. Le mot porte en lui la separation — ce n'est pas un groupe neutre mais un groupe qui s'est separe."
            }
          }
        }
      },
      {
        word_key: "kll", position: 1, sense_chosen: "chaque",
        analysis_axes: {
          concept_chosen: "Totalité",
          concepts: {
            "Totalité": {
              status: "retenu",
              senses: ["chaque", "totalité", "tout"],
              proof_ctx: "Le mot kullama est compose de kull (chaque/tout) de la racine k-l-l et de ma (quand). Le Lane's donne « every time, whenever ». Kull marque la totalite et la repetition — chaque fois, sans exception. Le verset utilise kullama pour denoncer la repetition systematique de la rupture — ce n'est pas un evenement isole mais un schema recurrent.",
              axe1_verset: "Le mot kullama ouvre la question rhetorique — « est-ce que chaque fois qu'ils font un engagement ». La totalite (kull) marque que la rupture se produit a chaque occasion, sans exception. Le verset ne dit pas « parfois » mais « chaque fois ». La repetition systematique aggrave la trahison — ce n'est pas une defaillance occasionnelle mais un comportement systematique.",
              axe2_voisins: "Les versets 98-99 denoncaient l'hostilite et la couverture. Le verset 100 ajoute la dimension temporelle — chaque fois. La repetition dans le temps montre que le probleme n'est pas ponctuel mais structurel. Les enfants d'Israel ne rompent pas un seul pacte mais tous les pactes, systematiquement.",
              axe3_sourate: "Le mot kullama apparait dans la sourate al-Baqarah pour marquer la repetition. En 2:20, « chaque fois que [l'eclair] les eclaire, ils marchent ». En 2:87, « chaque fois qu'un messager vous apportait ce que vos ames ne desiraient pas ». La sourate montre que le rejet est un schema repete — chaque messager, chaque signe, chaque engagement.",
              axe4_coherence: "La racine k-l-l avec le sens de totalite est omnipresente dans le Coran. Kull marque l'universalite et l'absence d'exception. En 2:100, kullama marque la repetition universelle de la rupture.",
              axe5_frequence: "Pour la mission du khalifa, la totalite et la constance sont des vertus. Rompre ses engagements « chaque fois » est le contraire de la constance — c'est l'inconstance systematique qui detruit la confiance et la mission."
            }
          }
        }
      },
      {
        word_key: "ehd", position: 3, sense_chosen: "engagement",
        analysis_axes: {
          concept_chosen: "Engagement/Promesse",
          concepts: {
            "Engagement/Promesse": {
              status: "retenu",
              senses: ["pacte", "engagement", "promesse", "confier"],
              proof_ctx: "Le nom 'ahdan est un accusatif indefini de la racine '-h-d (maf'ul mutlaq — accusatif absolu). Le Lane's donne « a covenant, a pledge, a compact ». La forme d'accusatif absolu ('ahadu 'ahdan) renforce le verbe par le nom de la meme racine — « ils ont engage un engagement ». Cette construction arabe insiste sur la realite et la completude de l'acte. L'engagement n'est pas vague ou implicite — c'est un acte solennel pleinement accompli. Ce deuxieme emploi de la meme racine '-h-d insiste sur l'inexcusabilite de la rupture.",
              axe1_verset: "Le nom 'ahdan est le complement d'objet interne du verbe 'ahadu. La construction est emphatique — ils ont bel et bien fait un engagement, un vrai engagement, et malgre cela un groupe l'a jete. L'emphase rend la rupture encore plus grave.",
              axe2_voisins: "Meme contexte que pour la premiere occurrence — le verset 100 conclut la serie 98-99-100 par la rupture repetee des engagements.",
              axe3_sourate: "La sourate al-Baqarah revient constamment au theme du pacte. En 2:40, Dieu dit « soyez fideles a Mon pacte ». Le verset 100 montre que cette fidelite n'est pas respectee — « chaque fois » qu'ils s'engagent, ils rompent.",
              axe4_coherence: "L'accusatif absolu est un procede coranique d'emphase. Le Coran utilise cette construction pour insister sur la realite d'un acte. Ici l'insistance montre que l'engagement etait reel et solennel — sa rupture est donc inexcusable.",
              axe5_frequence: "L'engagement solennel engage la responsabilite du khalifa. Rompre un engagement solennel est une trahison aggravee par la solennite de l'acte initial."
            }
          }
        }
      },
      {
        word_key: "kthr", position: 8, sense_chosen: "beaucoup",
        analysis_axes: {
          concept_chosen: "Abondance/Multiplicité",
          concepts: {
            "Abondance/Multiplicité": {
              status: "retenu",
              senses: ["beaucoup", "abondant", "nombreux"],
              proof_ctx: "Le mot aktharuhum est un elatif (forme de superiorite) avec pronom 3MP de la racine k-th-r. Le Lane's donne « most of them, the majority of them ». L'elatif akthar indique que ce n'est pas simplement « beaucoup » mais « la plupart » — la majorite. Le verset corrige par bal (mais plutot) : le probleme n'est pas seulement qu'un groupe jette le pacte, c'est que la plupart ne croient pas. La majorite depasse le groupe — le mal est plus repandu que la rupture visible du pacte.",
              axe1_verset: "Le mot aktharuhum vient apres la rectification bal — « mais plutot la plupart d'entre eux ne croient pas ». Le verset passe du groupe (fariqun) a la majorite (aktharuhum). Le probleme est plus grave qu'il n'y parait : ce n'est pas juste un groupe qui jette le pacte, c'est la majorite qui ne croit pas. La rectification aggrave le constat.",
              axe2_voisins: "Le verset 98 parlait des dissimulateurs. Le verset 99 les identifiait comme transgresseurs. Le verset 100 revele que la majorite ne croit pas. La progression va du groupe hostile (v98) au groupe transgresseur (v99) a la majorite incredule (v100). Le probleme s'elargit a chaque verset.",
              axe3_sourate: "La racine k-th-r apparait dans la sourate al-Baqarah pour quantifier le rejet. En 2:88, « peu (qalilan) croient-ils ». En 2:100, « la plupart (aktharuhum) ne croient pas ». La sourate montre que le rejet est majoritaire — la foi est l'exception, pas la regle.",
              axe4_coherence: "La racine k-th-r apparait environ 153 fois dans le Coran. Le Coran utilise souvent akthar (la plupart) pour decrire la majorite qui rejette la verite. En 12:103, « la plupart des gens ne croient pas, meme si tu t'y efforces ». En 6:116, « si tu obeis a la plupart de ceux qui sont sur terre, ils t'egareront ». La majorite n'est pas un argument de verite dans le Coran.",
              axe5_frequence: "Pour la mission du khalifa, la majorite n'est pas un guide. Le khalifa ne suit pas la majorite mais la verite. Le verset montre que la plupart ne croient pas — le khalifa fidele fait partie de la minorite qui croit."
            }
          }
        }
      },
      {
        word_key: "amn", position: 10, sense_chosen: "croire",
        analysis_axes: {
          concept_chosen: "Foi/Adhésion",
          concepts: {
            "Foi/Adhésion": {
              status: "retenu",
              senses: ["confirmer", "croyant", "accepter comme vrai", "croire", "avoir la foi"],
              proof_ctx: "Le verbe yu'minuna est un inaccompli 3MP de la racine a-m-n. Le Lane's donne « they believe, they accept as true ». L'inaccompli avec la negation « la » indique une absence habituelle et continue de foi — ce n'est pas un doute passager mais un etat permanent d'incredulite. La distinction philosophique avec la securite est que la foi est un acte interieur d'adhesion, tandis que la securite est un etat exterieur de protection. Le verset parle de l'absence de foi, pas de l'absence de securite.",
              axe1_verset: "Le verbe yu'minuna ferme le verset — la plupart d'entre eux ne croient pas. L'absence de foi est la cause profonde de tout ce qui precede : l'hostilite (v98), la couverture des signes (v99), la rupture des engagements (v100). Le verset revele la racine du probleme — ce n'est pas le pacte lui-meme qui est en cause, c'est l'absence de foi qui rend le pacte sans valeur.",
              axe2_voisins: "Le verset 98 montrait l'hostilite. Le verset 99 montrait la couverture des signes. Le verset 100 conclut par l'absence de foi. La progression decouvre la cause profonde — de l'acte visible (hostilite, couverture, rupture) a la cause invisible (absence de foi). L'absence de foi explique tout le reste.",
              axe3_sourate: "La racine a-m-n est une racine structurante de la sourate al-Baqarah. En 2:3, « ceux qui croient a l'invisible ». En 2:6, « ceux qui ont couvert — les avertir ou pas, ils ne croient pas ». En 2:88, « peu croient-ils ». En 2:100, « la plupart ne croient pas ». La sourate montre que la foi est le critere fondamental qui separe les etres humains.",
              axe4_coherence: "La racine a-m-n apparait environ 879 fois dans le Coran. La foi (iman) est le pilier central du message coranique. L'absence de foi est systematiquement associee a la couverture de la verite, la rupture des pactes et l'hostilite envers Dieu. En 2:100, l'absence de foi est la conclusion logique de la serie.",
              axe5_frequence: "Pour la mission du khalifa, la foi est le moteur de la mission. Le khalifa croit aux signes, respecte les pactes et n'est pas ennemi de Dieu. L'absence de foi detruit la mission a sa racine — sans foi, les engagements sont vides et les signes sont couverts."
            },
            "Sécurité/Confiance": {
              status: "probable",
              senses: ["faire confiance", "être en sécurité", "confier", "fidèle", "lieu sûr", "se sentir en sécurité"],
              proof_ctx: "Le sens de securite est un sens atteste de a-m-n — etre en securite, faire confiance. La distinction philosophique avec la foi est que la securite est un etat exterieur de protection, tandis que la foi est un acte interieur d'adhesion. Le verset parle de l'absence de foi (la yu'minuna) dans le contexte de la rupture des engagements — ceux qui ne croient pas sont ceux qui rompent les pactes. Le sens de securite n'explique pas la rupture des pactes aussi bien que le sens de foi — on ne rompt pas un pacte parce qu'on n'est pas en securite, on le rompt parce qu'on n'y croit pas.",
              axe1_verset: "Le verbe yu'minuna pourrait porter le sens de « ils ne se sentent pas en securite ». Mais le verset parle de la rupture des engagements — l'absence de foi est une cause plus logique de rupture que l'absence de securite.",
              axe2_voisins: "Le contexte des versets 98-100 traite de l'hostilite, de la couverture et de la rupture. L'absence de foi est la cause commune de ces trois actes. L'absence de securite n'explique pas l'hostilite envers Dieu.",
              axe3_sourate: "La sourate al-Baqarah utilise a-m-n principalement dans le sens de foi. En 2:3, « ceux qui croient a l'invisible ». Le sens de securite apparait en 2:125 (lieu sur) mais dans un contexte different.",
              axe4_coherence: "Le Coran oppose systematiquement iman (foi) et kufr (couverture). Le verset 100 conclut une serie sur la couverture par l'absence de foi — la correspondance est iman/kufr, pas securite/couverture.",
              axe5_frequence: "L'absence de foi est la cause profonde du rejet. L'absence de securite est un etat exterieur qui ne determine pas les choix moraux."
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
  // edw (id=457) — hostilite
  { analysis_id: 457, phrases: [
    { sense: "ennemi", arabic: "مَن كَانَ عَدُوًّا لِّلَّهِ", phon: "man kana 'aduwwan li-Llahi", french: "Quiconque est ennemi de Dieu." },
    { sense: "hostilité", arabic: "إِنَّ الشَّيْطَانَ لَكُمْ عَدُوٌّ", phon: "inna al-shaytana lakum 'aduwwun", french: "Le diable est pour vous un ennemi." },
    { sense: "agression", arabic: "فَلَا عُدْوَانَ إِلَّا عَلَى الظَّالِمِينَ", phon: "fa-la 'udwana illa 'ala al-zalimina", french: "Il n'y a d'agression que contre les injustes." }
  ]},
  // nbdh (id=1408) — jeter
  { analysis_id: 1408, phrases: [
    { sense: "jeter", arabic: "نَّبَذَهُ فَرِيقٌ مِّنْهُمْ", phon: "nabadha-hu fariqun minhum", french: "Un groupe parmi eux l'a jete." },
    { sense: "rejeter", arabic: "نَبَذَ فَرِيقٌ مِّنَ الَّذِينَ أُوتُوا الْكِتَابَ", phon: "nabadha fariqun mina alladhina utu al-kitaba", french: "Un groupe de ceux a qui le Livre a ete donne l'a rejete." },
    { sense: "rompre un pacte", arabic: "فَانبِذْ إِلَيْهِمْ عَلَىٰ سَوَاءٍ", phon: "fanbidh ilayhim 'ala sawa'in", french: "Jette-leur [le pacte] de maniere egale." }
  ]},
  // kthr (id=715) — majorite
  { analysis_id: 715, phrases: [
    { sense: "beaucoup", arabic: "أَكْثَرُهُمْ لَا يُؤْمِنُونَ", phon: "aktharuhum la yu'minuna", french: "La plupart d'entre eux ne croient pas." },
    { sense: "abondant", arabic: "وَالْكَوْثَرَ", phon: "wa-l-kawthara", french: "Et l'abondance." },
    { sense: "nombreux", arabic: "أَلْهَاكُمُ التَّكَاثُرُ", phon: "alhakumu al-takathuru", french: "La course au nombre vous a distraits." }
  ]},
  // ehd (id=425) — engagement
  { analysis_id: 425, phrases: [
    { sense: "pacte", arabic: "أَوَكُلَّمَا عَاهَدُوا عَهْدًا", phon: "a-wa kullama 'ahadu 'ahdan", french: "Est-ce que chaque fois qu'ils ont fait un engagement." },
    { sense: "engagement", arabic: "وَأَوْفُوا بِعَهْدِي أُوفِ بِعَهْدِكُمْ", phon: "wa-awfu bi-'ahdi ufi bi-'ahdikum", french: "Respectez Mon engagement, Je respecterai le votre." },
    { sense: "confier", arabic: "وَعَهِدْنَا إِلَىٰ إِبْرَاهِيمَ", phon: "wa-'ahidna ila Ibrahim", french: "Et Nous avons confie a Ibrahim." }
  ]},
  // frq (id=515) — separation
  { analysis_id: 515, phrases: [
    { sense: "séparer", arabic: "فَرَقْنَا بِكُمُ الْبَحْرَ", phon: "faraqna bikumu al-bahra", french: "Nous avons separe la mer pour vous." },
    { sense: "groupe", arabic: "نَّبَذَهُ فَرِيقٌ مِّنْهُمْ", phon: "nabadha-hu fariqun minhum", french: "Un groupe parmi eux l'a jete." },
    { sense: "Furqân", arabic: "نَزَّلَ الْفُرْقَانَ", phon: "nazzala al-furqana", french: "Il a fait descendre le Discernement." }
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

  const verseIds = [105, 106, 107];
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
  console.log('=== PIPELINE SOURATE 2 — AL-BAQARAH — VERSETS 98 A 100 ===\n');

  let totalOk = 0, totalErr = 0;

  for (let v = 98; v <= 100; v++) {
    const result = await processVerse(v);
    if (result) {
      totalOk += result.okCount;
      totalErr += result.errCount;
    }
  }

  await syncWordMeanings();
  await insertDailyPhrases();

  console.log(`\n=== PIPELINE V98-100 TERMINEE — TOTAL: ${totalOk} OK, ${totalErr} erreurs ===`);
}

main().catch(e => console.error('FATAL:', e));
