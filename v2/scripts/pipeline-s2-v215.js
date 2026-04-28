const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// =====================================================
// PIPELINE SOURATE 2 — VERSET 215
// verse_id=222, analysis_id=580
// "yas'alunaka madha yunfiquna
//  qul ma anfaqtum min khayrin fa-lil-walidayni
//  wa-al-aqrabina wa-al-yatama wa-al-masakini
//  wa-ibni al-sabili
//  wa-ma taf'alu min khayrin fa-inna Allaha bihi 'alimun"
// Question sur la depense : qui sont les beneficiaires ?
// =====================================================

const verseData = {
  215: {
    verse_id: 222,
    analysis_id: 580,
    translation_arab: "Ils t'interrogent : que depensent-ils ? Dis : ce que vous depensez de bien revient aux parents, aux proches, aux orphelins, aux pauvres et au voyageur de la voie. Et ce que vous faites de bien — Dieu en est sachant.",
    full_translation: "Ils t'interrogent: «Qu'est-ce qu'on doit depenser?» Dis: «Ce que vous depensez de bien devrait etre pour les pere et mere, les proches, les orphelins, les pauvres et les voyageurs indigents. Et tout ce que vous faites de bien, vraiment Allah le sait».",
    translation_explanation: `§DEMARCHE§
Le verset 215 est un verset de question-reponse (yas'alunaka — ils t'interrogent). La question porte sur la depense (yunfiquna — que depensent-ils). La reponse identifie les beneficiaires : parents, proches, orphelins, pauvres, voyageur de la voie. Le verset clos sur un attribut divin : Dieu sait ce qu'on fait de bien.

Le verbe **yas'alunaka** est un inaccompli 3MP avec suffixe 2MS de la racine s-'-l. L'inaccompli marque la question comme recurrente — ils t'interrogent (habituellement). Le suffixe « ka » = toi (le Prophete). Le verbe designe l'acte de demander/interroger.

Le verbe **yunfiquna** est un inaccompli 3MP de la racine n-f-q. Le Lane's donne : depenser, distribuer, donner en depense, faire sortir de ses biens. Le nafaqa est la depense — la sortie de biens vers les autres. L'inaccompli marque la question comme generale et continue : que faut-il depenser ?

Le verbe **anfaqtum** est un accompli 2MP de la racine n-f-q. « Ma anfaqtum min khayrin » = ce que vous depensez de bien. L'accompli generalise : tout ce que vous aurez depense. La preposition min partitive + khayrin = parmi les biens.

Le nom **khayrin** est un nom indefini genitif de la racine kh-y-r. Le Lane's donne : bien, excellence, avantage, ce qui est bon. Le khay est le bien dans un sens large — ressources, argent, actes bons. La construction min khayrin (de bien) specifie que la depense dont il s'agit est une depense de quelque chose de bon.

Le nom **al-walidayni** est un nom defini accusatif duel de la racine w-l-d. Le Lane's donne : les deux parents (pere et mere). Le walidayni est le duel — les deux geniteurs. La priorite des parents dans la liste des beneficiaires est significative.

Le nom **al-aqrabina** est un nom defini accusatif pluriel de la racine q-r-b. Le Lane's donne : les plus proches, les proches. L'aqrab est le superlatif de qarb (proche). Les plus proches designent les membres de la famille proche.

Le nom **al-yatama** est un nom defini accusatif pluriel de la racine y-t-m. Le Lane's donne : orphelin, celui qui a perdu son pere (pour un enfant). L'orphelin dans la societe arabe est particulierement vulnerable — sans pere, il perd son protecteur principal.

Le nom **al-masakini** est un nom defini accusatif pluriel de la racine s-k-n. Le Lane's donne : pauvre, celui qui est dans le besoin, miskin = celui qui s'est immobilise/calme par la pauvrete. Le miskin est celui qui a peu et qui est dans la necessite.

Le nom **ibni al-sabili** est une construction : ibn (fils) + sabil (voie/route). « Fils de la route » = le voyageur sans ressource, l'itinerant. C'est une metaphore — le voyageur est tellement lie a la route qu'il en est « le fils ». Il designe celui qui est en voyage loin de chez lui et sans ressources.

Le verbe **taf'alu** est un inaccompli 2MP de la racine f-'-l. « Ma taf'alu min khayrin » = ce que vous faites de bien. L'inaccompli marque l'action generale — tout ce que vous ferez.

§JUSTIFICATION§
**que depensent-ils** — « madha yunfiquna » : madha est l'interrogatif de nature/quantite, yunfiquna est l'inaccompli. La question porte sur quoi depenser, pas combien. Traduit par « que depensent-ils ? » car c'est la question sur l'objet de la depense.

**de bien** — « min khayrin » = de bien/de biens. Traduit par « de bien » car khay designe a la fois la qualite (ce qui est bon) et la quantite (les biens). Le double sens est preserve dans « de bien ».

**parents** — « al-walidayni » = les deux parents (duel). Traduit par « parents » car c'est le terme courant pour les deux geniteurs.

**proches** — « al-aqrabina » = les plus proches. Traduit par « proches » car c'est le terme naturel pour les membres de la famille proche.

**orphelins** — « al-yatama » = les orphelins. Terme conserve.

**pauvres** — « al-masakini » = les miskins. Traduit par « pauvres » car le miskin est celui qui est dans le besoin.

**voyageur de la voie** — « ibnu al-sabil » = fils de la route. Traduit par « voyageur de la voie » car cette traduction preserve l'image metaphorique (il est tellement lie a la voie qu'il en est le fils) tout en etant comprhensible.

**Dieu en est sachant** — « Allahu bihi 'alimun » = Dieu de cela est sachant. Traduit par « Dieu en est sachant » car c'est l'expression de l'omniscience divine appliquee aux actes de bien.

§CRITIQUE§
Hamidullah traduit « ibna al-sabil » par « voyageurs indigents ». L'original dit « fils de la route » — une image poetique et forte. « Voyageurs indigents » est correct dans le sens mais perd l'image metaphorique du « fils de la route » qui designe quelqu'un qui a la route comme seul foyer, qui est tellement voyage qu'il appartient a la route. Cette image evoque une dimension de deracinement total que « voyageur indigent » ne capture pas.

Hamidullah commence par « qu'est-ce qu'on doit depenser ? » — le texte arabe dit « madha yunfiquna » (qu'est-ce qu'ils depensent) sans le mot « doit ». L'introduction de la modalite deontique (« doit ») est une interpretation qui rend la question normative alors que le texte pose d'abord une question descriptive sur l'objet de la depense.`,
    segments: [
      { fr: "Ils t'interrogent", pos: "verbe", phon: "yas'alunaka", arabic: "يَسْـَٔلُونَكَ", word_key: "sal", is_particle: false, sense_retenu: "demander/interroger", position: 0 },
      { fr: "que depensent-ils", pos: "verbe", phon: "madha yunfiquna", arabic: "مَاذَا يُنفِقُونَ", word_key: "nfq", is_particle: false, sense_retenu: "depense/distribution", position: 1 },
      { fr: "Dis", phon: "qul", arabic: "قُلْ", is_particle: true, position: 2 },
      { fr: "ce que vous depensez", pos: "verbe", phon: "ma anfaqtum", arabic: "مَآ أَنفَقْتُم", word_key: "nfq", is_particle: false, sense_retenu: "depense/distribution", position: 3 },
      { fr: "de bien", pos: "nom", phon: "min khayrin", arabic: "مِّنْ خَيْرٍ", word_key: "khyr", is_particle: false, sense_retenu: "bien/excellence", position: 4 },
      { fr: "revient aux parents", pos: "nom", phon: "fa-lil-walidayni", arabic: "فَلِلْوَٰلِدَيْنِ", word_key: "wld", is_particle: false, sense_retenu: "engendrer/naissance", position: 5 },
      { fr: "et aux proches", pos: "nom", phon: "wa-al-aqrabina", arabic: "وَٱلْأَقْرَبِينَ", word_key: "qrb", is_particle: false, sense_retenu: "proximite/rapprochement", position: 6 },
      { fr: "et aux orphelins", pos: "nom", phon: "wa-al-yatama", arabic: "وَٱلْيَتَـٰمَىٰ", word_key: "ytm", is_particle: false, sense_retenu: "orphelinat/solitude", position: 7 },
      { fr: "et aux pauvres", pos: "nom", phon: "wa-al-masakini", arabic: "وَٱلْمَسَـٰكِينِ", word_key: "skn", is_particle: false, sense_retenu: "habitation/demeure", position: 8 },
      { fr: "et au voyageur de la voie", pos: "nom", phon: "wa-ibni al-sabili", arabic: "وَٱبْنِ ٱلسَّبِيلِ", word_key: "sbl", is_particle: false, sense_retenu: "voie/direction", position: 9 },
      { fr: "Et ce que vous faites", pos: "verbe", phon: "wa-ma taf'alu", arabic: "وَمَا تَفْعَلُوا۟", word_key: "fel", is_particle: false, sense_retenu: "action/acte", position: 10 },
      { fr: "de bien", pos: "nom", phon: "min khayrin", arabic: "مِنْ خَيْرٍ", word_key: "khyr", is_particle: false, sense_retenu: "bien/excellence", position: 11 },
      { fr: "alors certes Dieu en est sachant", pos: "adj", phon: "fa-inna Allaha bihi 'alimun", arabic: "فَإِنَّ ٱللَّهَ بِهِۦ عَلِيمٌ", word_key: "elm", is_particle: false, sense_retenu: "savoir/connaissance", position: 12 }
    ],
    vwa: [
      {
        word_key: "sal",
        position: 0,
        sense_chosen: "demander/interroger",
        analysis_axes: {
          sense_chosen: "demander/interroger",
          concept_chosen: "Requete/Interrogation",
          concepts: {
            "Requete/Interrogation": {
              status: "retenu",
              senses: ["demander", "interroger", "questionner", "solliciter"],
              proof_ctx: "Le verbe yas'alunaka est un inaccompli 3MP avec suffixe 2MS de la racine s-'-l. Le Lane's donne : demander, interroger, questionner. L'inaccompli marque la recurrence — ils t'interrogent (habituellement). C'est la formule standard des questions adressees au Prophete dans la sourate al-Baqarah.",
              axe1_verset: "L'interrogation (yas'alunaka) ouvre la structure question-reponse du verset. La question porte sur la depense (yunfiquna). Cette structure dialogue est recurrente dans la sourate al-Baqarah — les croyants posent des questions pratiques et le Prophete repond avec la guidance divine.",
              axe2_voisins: "Le verset 214 posait une question rhetorique (avez-vous pense ?). Le verset 215 pose une vraie question des croyants au Prophete. La transition de la question rhetorique a la question sincere montre le dialogue vivant de la communaute avec le Prophete.",
              axe3_sourate: "La formule yas'alunaka est recurrente dans la sourate al-Baqarah. Elle ouvre plusieurs sequences de question-reponse en 2:215, 217, 219, 220, 221, 222. Ces questions couvrent les domaines pratiques de la vie — depense, combat, vin, orphelins, femmes. La sourate est en partie un manuel de vie pratique.",
              axe4_coherence: "La racine s-'-l dans le Coran est souvent suivie de reponses divines. Le schema yas'alunaka → qul (ils interrogent → dis) est un schema pedagogique : la question des croyants → la reponse divine par le Prophete.",
              axe5_frequence: "Pour la mission du khalifa, repondre aux questions de la communaute est une fonction essentielle. Le khalifa doit etre accessible aux questions et capable de donner des orientations claires. La structure yas'alunaka/qul est le modele de la gouvernance pedagogique."
            }
          }
        }
      },
      {
        word_key: "nfq",
        position: 1,
        sense_chosen: "depense/distribution",
        analysis_axes: {
          sense_chosen: "depense/distribution",
          concept_chosen: "Depense/Distribution",
          concepts: {
            "Depense/Distribution": {
              status: "retenu",
              senses: ["depenser", "distribuer", "donner en aumone", "faire sortir des biens", "depense"],
              proof_ctx: "Le verbe yunfiquna est un inaccompli 3MP de la racine n-f-q. Le Lane's donne : depenser, distribuer, faire sortir ses biens, donner en depense, subvenir. L'infaq est la depense — la sortie de biens vers les autres. C'est un acte volontaire de redistribution. L'inaccompli marque la question continue : que font-ils de leur argent ?",
              axe1_verset: "La depense (yunfiquna/anfaqtum) est le sujet du verset. Le verset identifie les beneficiaires de la depense — c'est une reponse pratique a une question pratique. La depense n'est pas simplement une obligation pieuse mais une redistribution sociale avec des beneficiaires identifies.",
              axe2_voisins: "Le verset 214 parlait d'epreuves et de secours. Le verset 215 passe a la depense sociale — une forme concrete de secours aux vulnerables. La sequence epreuve → secours divin (214) → depense sociale (215) montre que le secours prend aussi forme humaine dans la solidarite.",
              axe3_sourate: "La racine n-f-q est tres frequente dans la sourate al-Baqarah. Des le verset 2:3, les croyants depensent de ce que Nous leur avons accorde. En 2:195, 215, 254, etc. La depense est un critere fondamental du croyant — celui qui croit redistribue.",
              axe4_coherence: "La racine n-f-q apparait environ 72 fois dans le Coran. L'infaq (depense dans la voie de Dieu) est un pilier de la pratique islamique. Le Coran associe systematiquement foi et depense — croire c'est aussi redistribuer.",
              axe5_frequence: "Pour la mission du khalifa, l'infaq est une politique economique. Le khalifa organise la redistribution (infaq) de la richesse vers les vulnerables. La liste des beneficiaires (parents, proches, orphelins, pauvres, voyageurs) est la carte de la vulnerabilite sociale que le khalifa doit adresser."
            }
          }
        }
      },
      {
        word_key: "khyr",
        position: 4,
        sense_chosen: "bien/excellence",
        analysis_axes: {
          sense_chosen: "bien/excellence",
          concept_chosen: "Bien/Excellence",
          concepts: {
            "Bien/Excellence": {
              status: "retenu",
              senses: ["bien", "excellence", "avantage", "ce qui est bon", "biens/richesses"],
              proof_ctx: "Le nom khayrin est un nom indefini genitif de la racine kh-y-r. Le Lane's donne : bien, excellence, avantage, ce qui est bon, biens materiels, richesse. Le khay est polyvalent — il designe a la fois la qualite (ce qui est bon) et la quantite (les biens). La construction « min khayrin » = de biens/de bien. La preposition min partitive marque la partition : ce que vous depensez parmi vos biens.",
              axe1_verset: "Le bien (khay) est l'objet de la depense. La depense n'est valable que si c'est de la depense de bien (min khayrin). Le verset ne prescrit pas la quantite mais la qualite — la depense doit etre de quelque chose de bon. La reprise de « min khayrin » a la fin du verset (wa-ma taf'alu min khayrin) cree un echo — tout acte de bien sera connu de Dieu.",
              axe2_voisins: "Le verset 215 encadre la depense dans la notion de bien (khay). Le verset suivant (216) opposera le bien (khay) au mal (sharr) dans le contexte du combat.",
              axe3_sourate: "La racine kh-y-r est tres frequente dans la sourate al-Baqarah. Le khay est le bien dans toutes ses dimensions — materiel, moral, spirituel. La sourate construit une economie du bien — le bien doit circuler vers les beneficiaires identifies.",
              axe4_coherence: "La racine kh-y-r apparait environ 176 fois dans le Coran. Le khay est un des mots les plus importants du Coran — il designe ce qui est bon, ce qui est preferable. L'expression « khayr lakum » (meilleur pour vous) est une formule frequente pour guider vers les meilleures options.",
              axe5_frequence: "Pour la mission du khalifa, le bien (khay) est l'orientation de toute redistribution. Le khalifa redistribue le bien — pas seulement des ressources quelconques mais du bien, des choses qui ameliorent la condition des beneficiaires. La qualite de la depense (khay) est aussi importante que sa quantite."
            }
          }
        }
      },
      {
        word_key: "wld",
        position: 5,
        sense_chosen: "engendrer/naissance",
        analysis_axes: {
          sense_chosen: "engendrer/naissance",
          concept_chosen: "Engendrer/Naissance",
          concepts: {
            "Engendrer/Naissance": {
              status: "retenu",
              senses: ["parents", "geniteurs", "naissance", "engendrer", "pere et mere"],
              proof_ctx: "Le nom al-walidayni est un nom defini accusatif duel de la racine w-l-d. Le Lane's donne : walid = geniteur (celui qui a engendre). Al-walidayni (duel) = les deux geniteurs = le pere et la mere. La racine w-l-d designe la naissance et l'acte d'engendrer. Les walidayn sont ceux qui ont donne naissance — le lien biologique le plus fondamental.",
              axe1_verset: "Les parents (al-walidayni) sont en tete de liste des beneficiaires de la depense. Cette priorite est significative — avant les orphelins et les pauvres, les parents. Le lien de naissance (walada) fonde une obligation de reconnaissance et de soutien.",
              axe2_voisins: "Le verset 211 interpellait les Fils d'Israel (bani isra'ila — la filiation). Le verset 215 place les parents (walidayn) en tete des beneficiaires. La dimension filiale et familiale est un fil conducteur de ces versets.",
              axe3_sourate: "La racine w-l-d est presente dans la sourate al-Baqarah en 2:215, 233. Les parents (walidayn) et les enfants (awlad) sont des acteurs recurrents dans les obligations sociales. La sourate fonde les obligations familiales sur le lien de naissance.",
              axe4_coherence: "La racine w-l-d apparait environ 99 fois dans le Coran. Le respect des parents (walidayn) est un commandement recurrent — place immediatement apres l'adoration de Dieu dans plusieurs versets (2:83, 4:36, 6:151, etc.).",
              axe5_frequence: "Pour la mission du khalifa, la protection des parents dans la vieillesse est une obligation sociale structurelle. Le systeme de redistribution (infaq) commence par le cercle familial le plus proche (walidayn) avant de s'etendre vers les autres."
            }
          }
        }
      },
      {
        word_key: "qrb",
        position: 6,
        sense_chosen: "proximite/rapprochement",
        analysis_axes: {
          sense_chosen: "proximite/rapprochement",
          concept_chosen: "Proximite/Rapprochement",
          concepts: {
            "Proximite/Rapprochement": {
              status: "retenu",
              senses: ["proches", "parents", "membres de la famille proche", "proximite"],
              proof_ctx: "Le nom al-aqrabina est un nom defini accusatif pluriel de la racine q-r-b. Le Lane's donne : les plus proches (superlatif pluriel de qarb = proche). L'aqrabin designe les membres de la famille au sens large — plus proches que les inconnus mais moins que les parents directs.",
              axe1_verset: "Les proches (al-aqrabin) sont en deuxieme position apres les parents. L'echelle de proximite est claire : parents (walidayn, les plus proches par la naissance) → proches (aqrabin, famille elargie) → orphelins, pauvres, voyageurs (les plus eloignes socialement).",
              axe2_voisins: "Le verset 214 mentionnait la proximite (qarib) du secours de Dieu. Le verset 215 parle des proches (aqrabin) comme beneficiaires de la depense. La racine q-r-b dans les deux versets relie la proximite divine (secours proche) et la proximite humaine (beneficiaires proches).",
              axe3_sourate: "La racine q-r-b est recurrente dans la sourate al-Baqarah. En 2:177, les proches (dhawi al-qurba) sont cites parmi les beneficiaires de la charite. En 2:215, ils sont en deuxieme position dans la liste. La sourate construit une solidarite par cercles concentriques de proximite.",
              axe4_coherence: "La racine q-r-b apparait environ 96 fois dans le Coran. Le Coran construit systematiquement une economie de la proximite — les obligations commencent par les plus proches et s'etendent vers les plus eloignes.",
              axe5_frequence: "Pour la mission du khalifa, la solidarite par cercles concentriques est un modele de politique sociale. Commencer par les plus proches (famille) avant d'aller vers les plus eloignes est un principe de gestion sociale efficace."
            }
          }
        }
      },
      {
        word_key: "ytm",
        position: 7,
        sense_chosen: "orphelinat/solitude",
        analysis_axes: {
          sense_chosen: "orphelinat/solitude",
          concept_chosen: "Orphelinat/Solitude",
          concepts: {
            "Orphelinat/Solitude": {
              status: "retenu",
              senses: ["orphelin", "celui qui a perdu son pere", "solitude", "sans protecteur"],
              proof_ctx: "Le nom al-yatama est un nom defini accusatif pluriel de la racine y-t-m. Le Lane's donne : orphelin, celui qui a perdu son pere (pour les enfants), ce qui est unique en son genre. Le yatim est l'enfant sans pere — le plus vulnerable dans la societe arabe ou le pere est le protecteur principal. L'yatm est aussi la solitude de ce qui est unique.",
              axe1_verset: "Les orphelins (al-yatama) sont en troisieme position dans la liste des beneficiaires. Leur vulnerabilite specifique (absence du protecteur principal) justifie leur mention explicite. La depense vers les orphelins est une forme de remplacement de la protection paternelle absente.",
              axe2_voisins: "Le verset 214 parlait de l'epreuve et de l'ebranlement. Les orphelins sont les victimes directes de certaines epreuves (mort du pere au combat, en voyage). La solidarite envers les orphelins est une reponse concretes aux consequences sociales des epreuves.",
              axe3_sourate: "La racine y-t-m et les orphelins sont mentionnes frequemment dans la sourate al-Baqarah. En 2:83, 177, 215, 220, etc. La protection des orphelins est une obligation centrale de la communaute. La sourate revient plusieurs fois sur les orphelins pour renforcer cette obligation.",
              axe4_coherence: "La racine y-t-m apparait environ 23 fois dans le Coran. La protection des orphelins est une obligation coranique fondamentale — parmi les premiers interdits sociaux sont les atteintes aux orphelins. Le Prophete lui-meme etait orphelin, ce qui donne a cette obligation une dimension autobiographique.",
              axe5_frequence: "Pour la mission du khalifa, la protection des orphelins est une priorite sociale. La presence des orphelins dans la liste de la depense montre que la politique de redistribution doit adresser specifiquement les plus vulnerables. L'absence du protecteur (pere) cree un vide que la communaute doit combler."
            }
          }
        }
      },
      {
        word_key: "skn",
        position: 8,
        sense_chosen: "habitation/demeure",
        analysis_axes: {
          sense_chosen: "habitation/demeure",
          concept_chosen: "Habitation/Demeure",
          concepts: {
            "Habitation/Demeure": {
              status: "retenu",
              senses: ["pauvre", "celui qui est demeur/immobilise", "habitation", "calme forcé", "miskin"],
              proof_ctx: "Le nom al-masakini est un nom defini accusatif pluriel de la racine s-k-n. Le Lane's donne : miskin = pauvre, celui qui est devenu immobile/calme par la pauvrete, celui qui a peu et qui reste sans bouger. La racine s-k-n designe le repos, l'immobility, l'habitation. Le miskin est celui qui est « calme » par la pauvrete — immobilise dans sa condition, sans moyen de s'en sortir.",
              axe1_verset: "Les pauvres (al-masakin) sont en quatrieme position. Le miskin est distinct du faqir (pauvre sans rien) — le miskin a peu mais quelque chose. Les deux categories de pauvres (faqir et miskin) sont completes dans les obligations de zakat (2:177, 9:60). Ici seul le miskin est mentionne.",
              axe2_voisins: "La liste des beneficiaires (parents, proches, orphelins, pauvres, voyageurs) couvre l'ensemble des vulnerabilites sociales — liens familiaux, manque de protecteur, manque de ressources, manque de stabilite spatiale.",
              axe3_sourate: "La racine s-k-n est presente dans la sourate al-Baqarah. En 2:126, Abraham demande la provision pour les habitants (sakanahu). En 2:215, les miskins sont des beneficiaires. La racine associe l'habitation (maison, stabilite) et la pauvrete (miskin = celui qui est immobilise).",
              axe4_coherence: "La racine s-k-n apparait environ 69 fois dans le Coran. Le miskin est une des categories sociales les plus mentionnees dans le Coran pour la charite. La zakat (2:177, 9:60) inclut systematiquement les masakin.",
              axe5_frequence: "Pour la mission du khalifa, les pauvres (masakin) sont une priorite de la politique sociale. L'immobilite du miskin (incapable de sortir de sa pauvrete par ses propres moyens) requiert une intervention exterieure — la depense (infaq) de la communaute vers lui."
            }
          }
        }
      },
      {
        word_key: "sbl",
        position: 9,
        sense_chosen: "voie/direction",
        analysis_axes: {
          sense_chosen: "voie/direction",
          concept_chosen: "Voie/Direction",
          concepts: {
            "Voie/Direction": {
              status: "retenu",
              senses: ["voie", "chemin", "route", "sabil"],
              proof_ctx: "Le nom ibni al-sabili : ibn (fils) + sabil (voie/route). Le Lane's donne pour sabil : voie, chemin, route, passage. Le sabil est la voie ouverte — le chemin sur lequel on marche. « Ibn al-sabil » (fils de la route) est une metaphore pour le voyageur qui n'a plus de lieu fixe — il est tellement en route qu'il est comme un fils de la route.",
              axe1_verset: "Le voyageur de la voie (ibn al-sabil) clot la liste des beneficiaires. Sa vulnerabilite est spatiale — il est loin de sa famille et de ses ressources. La voie (sabil) est son seul espace — il n'a pas de maison, pas de famille proche. La depense vers lui est une hospitalite, un soutien au passage.",
              axe2_voisins: "Le verset 213 concluait sur le chemin droit (sirat mustaqim). Le verset 215 mentionne le fils de la route (ibn al-sabil). Les deux versets utilisent l'image de la voie — le sirat mustaqim est la voie spirituelle, le sabil est la voie physique que le voyageur parcourt.",
              axe3_sourate: "La racine s-b-l apparait frequemment dans la sourate al-Baqarah. En 2:154, 190, 194, 215, 217, 218, 246, 261, etc. La voie de Dieu (sabil Allah) et la voie physique (sabil comme route) sont deux dimensions de la meme racine.",
              axe4_coherence: "La racine s-b-l apparait environ 176 fois dans le Coran. Ibn al-sabil est une des huit categories beneficiaires de la zakat (9:60). Le voyageur de la voie est reconnu comme une categorie sociale specifique avec des droits specifiques.",
              axe5_frequence: "Pour la mission du khalifa, le voyageur de la voie represente l'etranger de passage. La politique d'hospitalite et de soutien aux voyageurs est une obligation sociale. Le khalifa doit assurer que les voyageurs dans sa communaute ont acces aux ressources dont ils ont besoin."
            }
          }
        }
      },
      {
        word_key: "fel",
        position: 10,
        sense_chosen: "action/acte",
        analysis_axes: {
          sense_chosen: "action/acte",
          concept_chosen: "Action/Acte",
          concepts: {
            "Action/Acte": {
              status: "retenu",
              senses: ["faire", "agir", "acte", "action", "accomplir"],
              proof_ctx: "Le verbe taf'alu est un inaccompli 2MP de la racine f-'-l. Le Lane's donne : faire, agir, accomplir, executer. Le fi'l est l'acte — ce qu'on fait. La construction « ma taf'alu min khayrin » = ce que vous faites de bien. L'inaccompli marque la generalite — tout ce que vous aurez fait, habituelement.",
              axe1_verset: "L'action (taf'alu) est le terme general qui englobe la depense (infaq) et tout autre acte de bien. Le verset passe de la question specifique (depenser vers qui ?) a la conclusion generale (tout ce que vous faites de bien — Dieu en est sachant). L'action de bien est connue de Dieu dans sa totalite.",
              axe2_voisins: "Le verset 214 parlait de l'epreuve et de l'attente du secours. Le verset 215 parle de l'action — ce qu'on fait de bien dans la vie sociale. La sequence epreuve (214) → action sociale (215) montre que l'action est la reponse a l'epreuve.",
              axe3_sourate: "La racine f-'-l est presente partout dans le Coran. L'acte (fi'l) est la dimension concretes de la foi — croire c'est aussi agir. En 2:44, la sourate reproche de ne pas faire ce qu'on dit. La coherence entre la foi et l'acte est fondamentale.",
              axe4_coherence: "La racine f-'-l apparait environ 108 fois dans le Coran. Le fi'l (acte) est la realisation concretes de ce qu'on pense et dit. Le Coran insiste sur la coherence entre parole et acte.",
              axe5_frequence: "Pour la mission du khalifa, l'action (fi'l) est la mesure de la foi. La gouvernance du khalifa est un ensemble d'actes — ses decisions, ses redistributions, ses jugements. Ces actes sont connus de Dieu, meme ceux qui ne sont pas visibles publiquement."
            }
          }
        }
      },
      {
        word_key: "elm",
        position: 12,
        sense_chosen: "savoir/connaissance",
        analysis_axes: {
          sense_chosen: "savoir/connaissance",
          concept_chosen: "Savoir/Connaissance",
          concepts: {
            "Savoir/Connaissance": {
              status: "retenu",
              senses: ["savoir", "connaitre", "science", "omniscience", "informé de"],
              proof_ctx: "Le mot 'alimun est un adjectif nominatif de la racine '-l-m. Le Lane's donne : savant, connaissant, omniscient. Al-'Alim est un des attributs de Dieu. La construction « Allahu bihi 'alimun » = Dieu de cela est sachant (omniscient de ce que vous faites). Le 'alim est l'omniscient divin — Dieu ne peut rien ignorer de ce qu'on fait.",
              axe1_verset: "La connaissance divine ('alimun) conclut le verset comme garantie. Dieu sait ce qu'on fait de bien — meme ce qui n'est pas vu publiquement. Cette conclusion a une double fonction : encouragement (les actes de bien sont connus et recompenses) et avertissement (les actes mauvais sont aussi connus).",
              axe2_voisins: "Le verset 212 mentionnait que Dieu pourvoit selon sa volonte. Le verset 215 conclut sur la connaissance divine. La sequence volonte divine (212) → connaissance divine (215) construit l'image d'un Dieu qui choisit librement et sait tout.",
              axe3_sourate: "La racine '-l-m est parmi les plus frequentes de la sourate al-Baqarah. Al-'Alim (l'Omniscient) est un attribut divin recurrent. La sourate rappelle constamment que Dieu sait — pour encourager les actes discrets et avertir contre la simulation.",
              axe4_coherence: "La racine '-l-m apparait environ 854 fois dans le Coran. Al-'Alim est le nom divin qui exprime la connaissance absolue et totale. Rien n'echappe a la connaissance de Dieu — ni les actes publics ni les intentions cachees.",
              axe5_frequence: "Pour la mission du khalifa, la connaissance divine est la reference ultime de la reddition de compte. Le khalifa ne gouverne pas pour etre vu des hommes mais en sachant que Dieu sait. Cette conscience de la connaissance divine (Allahu bihi 'alimun) est le fondement de l'integrite."
            }
          }
        }
      }
    ],
    daily_phrases: []
  }
};

async function main() {
  const data = verseData[215];

  const { error: veErr } = await supabase.from('verse_analyses').update({
    translation_arab: data.translation_arab,
    full_translation: data.full_translation,
    translation_explanation: data.translation_explanation,
    segments: data.segments
  }).eq('id', data.analysis_id);
  if (veErr) { console.error('verse_analyses ERROR:', veErr.message); return; }
  console.log('verse_analyses updated (V215)');

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

  console.log('\n✅ V215 TERMINE');
}
main().catch(console.error);
