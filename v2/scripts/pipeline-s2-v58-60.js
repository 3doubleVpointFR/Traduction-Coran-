const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// =====================================================
// PIPELINE SOURATE 2 — AL-BAQARAH — VERSETS 58 À 60
// verse_id=65 (2:58), verse_id=66 (2:59), verse_id=67 (2:60)
// =====================================================
// CRITICAL: concept names and senses are read from DB (concepts JSON)
// =====================================================

const verseData = {

  // =====================================================
  // VERSET 2:58
  // verse_id=65, analysis_id=425
  // "Entrez dans cette cite et mangez-en a votre guise en abondance,
  //  et entrez par la porte en vous prosternant, et dites 'decharge' —
  //  Nous vous pardonnerons vos fautes et Nous augmenterons les bienfaisants"
  // =====================================================
  58: {
    verse_id: 65,
    analysis_id: 425,
    translation_arab: "Et lorsque Nous avons dit : Entrez dans cette cite et mangez-en a votre guise en abondance, et entrez par la porte en vous prosternant, et dites 'decharge' — Nous vous pardonnerons vos fautes et Nous augmenterons les bienfaisants.",
    full_translation: "Et lorsque Nous avons dit : Entrez dans cette cite et mangez de [ses biens] ou vous voulez, en abondance, et entrez par la porte en vous prosternant, et dites 'decharge [de nos fautes]' — Nous vous pardonnerons vos fautes et Nous augmenterons [la recompense] des bienfaisants.",
    translation_explanation: `§DEMARCHE§
Ce verset rapporte un ordre divin adresse aux enfants d'Israel apres leur errance dans le desert. Le verbe **qulna** est un accompli 1P de la racine q-w-l. Le Lane's donne « he said, spoke, told ». Le « Nous avons dit » est le discours divin rapporte au passe — Dieu rappelle un ordre ancien. Le verbe **udkhuluu** est un imperatif 2MP de la racine d-kh-l. Le Lane's donne « he entered, went in, penetrated ». L'imperatif ordonne l'entree dans la cite. Le mot **al-qaryata** est un nom feminin singulier defini accusatif de la racine q-r-y. Le Lane's donne « town, village, city, settlement ». La cite designee est un etablissement humain — une ville ou les enfants d'Israel sont invites a s'installer. Le verbe **kuluu** est un imperatif 2MP de la racine a-k-l. Le Lane's donne « he ate, consumed, devoured ». L'imperatif donne la permission de manger. Le mot **haythu** est un adverbe de lieu de la racine h-y-th. Le Lane's donne « where, wherever, in whatever place ». L'adverbe donne la liberte totale du lieu de consommation. Le mot **raghadan** est un masdar accusatif de la racine r-gh-d. Le Lane's donne « easy, pleasant, plentiful, without constraint ». L'abondance est sans contrainte — la nourriture est offerte sans limite ni condition. Le mot **al-baba** est un nom masculin singulier defini accusatif de la racine b-w-b. Le Lane's donne « door, gate, entrance, chapter ». La porte designee est l'entree de la cite. Le mot **sujjadan** est un nom pluriel accusatif de la racine s-j-d. Le Lane's donne « prostrating, bowing down in worship ». Le pluriel brise indique une posture d'humilite collective. Le mot **hittatun** est un nom feminin singulier nominatif de la racine h-t-t. Le Lane's donne « a putting down, removal of sin, a prayer for forgiveness ». Le mot designe la demande d'allegement des fautes. Le verbe **naghfir** est un inaccompli 1P majzum de la racine gh-f-r. Le Lane's donne « he forgave, pardoned, covered over sins ». Le pardon est conditionne par l'obeissance a l'ordre. Le mot **khatayakum** est un nom pluriel accusatif avec pronom 2MP de la racine kh-t-a. Le Lane's donne « sin, fault, error, mistake ». Les fautes sont les manquements passes des enfants d'Israel. Le verbe **sanazidu** est un inaccompli 1P avec particule sa de la racine z-y-d. Le Lane's donne « he increased, added, augmented ». L'augmentation est promise pour l'avenir (sa = futur). Le mot **al-muhsinina** est un participe actif pluriel defini forme IV de la racine h-s-n. Le Lane's donne « those who do good, the beneficent, the excellent ». Les bienfaisants sont ceux qui font le bien au-dela du minimum requis.

§JUSTIFICATION§
**dit** — Le sens retenu est « dire ». Le verbe qulna designe la parole divine rapportee. L'alternative « avis » est ecartee car le contexte est un ordre divin explicite, pas une opinion.

**entrez** — Le sens retenu est « entrer ». Le verbe udkhuluu ordonne l'entree physique dans un lieu. L'alternative « revenu » est ecartee car la forme imperative designe un mouvement physique, pas un flux financier.

**cite** — Le sens retenu est « cite ». Le mot al-qaryata designe un etablissement humain habite. L'alternative « lire » est ecartee car la forme nominale avec l'article defini designe un lieu physique, pas un acte de lecture.

**mangez** — Le sens retenu est « manger ». Le verbe kuluu ordonne de consommer la nourriture. L'alternative « consumer (le feu mange) » est ecartee car le contexte parle de nourriture offerte a des humains.

**en abondance** — Le sens retenu est « abondance ». Le mot raghadan designe une vie plaisante et sans contrainte. L'alternative « confusion » est ecartee car le contexte decrit une permission genereuse, pas un etat de desordre.

**porte** — Le sens retenu est « porte ». Le mot al-baba designe l'entree physique de la cite. Pas d'alternative pertinente dans ce contexte.

**prosternant** — Le sens retenu est « se prosterner ». Le mot sujjadan designe la prosternation physique. L'alternative « mosquee » est ecartee car le mot est un masdar/adjectif decrivant une posture, pas un lieu.

**decharge** — Le sens retenu est « deposer ». Le mot hittatun designe l'acte de deposer les fautes, d'en etre decharge. Pas d'alternative pertinente.

**pardonnerons** — Le sens retenu est « pardonner ». Le verbe naghfir signifie couvrir les fautes, les effacer. L'alternative « casque » est ecartee car le contexte est spirituel (pardon des fautes), pas materiel.

**fautes** — Le sens retenu est « faute ». Le mot khataya designe les erreurs et les peches. L'alternative « manquer (une cible) » est ecartee car le contexte parle de peches moraux.

**augmenterons** — Le sens retenu est « augmenter ». Le verbe sanazidu annonce un accroissement futur de la recompense. Pas d'alternative pertinente.

**bienfaisants** — Le sens retenu est « bien faire ». Le mot al-muhsinina designe ceux qui pratiquent l'excellence morale (ihsan). L'alternative « etre beau » est ecartee car la forme IV du participe actif designe l'agent qui fait le bien, pas celui qui est beau.

§CRITIQUE§
**cite vs village** — Le Lane's donne « town, village, city » pour qarya. « Cite » est plus neutre que « village » qui implique la petitesse. La cite designee est probablement Jerusalem, un etablissement de taille considerable.
**decharge vs allegement** — Le mot hitta vient de hatta (deposer). « Decharge » preserve le sens physique de deposer un fardeau — les fautes sont un poids que l'on depose. « Allegement » serait aussi acceptable mais moins direct.
**bienfaisants vs excellents** — Le Lane's donne « those who do good ». « Bienfaisants » est plus precis que « excellents » car il designe l'acte de faire le bien (ihsan), pas simplement la qualite d'etre excellent.`,
    segments: [
      { fr: "et lorsque", phon: "wa-idh", arabic: "وَإِذْ", is_particle: true, position: 0 },
      { fr: "Nous avons dit", pos: "verbe", phon: "qulna", arabic: "قُلْنَا", word_key: "qwl", is_particle: false, sense_retenu: "dire", position: 1 },
      { fr: "entrez", pos: "verbe", phon: "udkhuluu", arabic: "ٱدْخُلُوا۟", word_key: "dxl", is_particle: false, sense_retenu: "entrer", position: 2 },
      { fr: "cette", phon: "hadhihi", arabic: "هَٰذِهِ", is_particle: true, position: 3 },
      { fr: "cite", pos: "nom", phon: "al-qaryata", arabic: "ٱلْقَرْيَةَ", word_key: "qry", is_particle: false, sense_retenu: "cite", position: 4 },
      { fr: "mangez", pos: "verbe", phon: "kuluu", arabic: "فَكُلُوا۟", word_key: "akl", is_particle: false, sense_retenu: "manger", position: 5 },
      { fr: "d'elle", phon: "minha", arabic: "مِنْهَا", is_particle: true, position: 6 },
      { fr: "ou vous voulez", pos: "nom", phon: "haythu", arabic: "حَيْثُ", word_key: "hyth", is_particle: false, sense_retenu: "ou", position: 7 },
      { fr: "vous avez voulu", phon: "shi'tum", arabic: "شِئْتُمْ", is_particle: true, position: 8 },
      { fr: "en abondance", pos: "nom", phon: "raghadan", arabic: "رَغَدًا", word_key: "rgd", is_particle: false, sense_retenu: "abondance", position: 9 },
      { fr: "et entrez", pos: "verbe", phon: "wa-udkhuluu", arabic: "وَٱدْخُلُوا۟", word_key: "dxl", is_particle: false, sense_retenu: "entrer", position: 10 },
      { fr: "la porte", pos: "nom", phon: "al-baba", arabic: "ٱلْبَابَ", word_key: "bwb", is_particle: false, sense_retenu: "porte", position: 11 },
      { fr: "en vous prosternant", pos: "nom", phon: "sujjadan", arabic: "سُجَّدًا", word_key: "sjd", is_particle: false, sense_retenu: "se prosterner", position: 12 },
      { fr: "et dites", pos: "verbe", phon: "wa-quuluu", arabic: "وَقُولُوا۟", word_key: "qwl", is_particle: false, sense_retenu: "dire", position: 13 },
      { fr: "decharge", pos: "nom", phon: "hittatun", arabic: "حِطَّةٌ", word_key: "htt", is_particle: false, sense_retenu: "deposer", position: 14 },
      { fr: "Nous pardonnerons", pos: "verbe", phon: "naghfir", arabic: "نَّغْفِرْ", word_key: "ghf", is_particle: false, sense_retenu: "pardonner", position: 15 },
      { fr: "pour vous", phon: "lakum", arabic: "لَكُمْ", is_particle: true, position: 16 },
      { fr: "vos fautes", pos: "nom", phon: "khatayakum", arabic: "خَطَٰيَٰكُمْ", word_key: "xta", is_particle: false, sense_retenu: "faute", position: 17 },
      { fr: "et Nous augmenterons", pos: "verbe", phon: "sanazidu", arabic: "وَسَنَزِيدُ", word_key: "zyd", is_particle: false, sense_retenu: "augmenter", position: 18 },
      { fr: "les bienfaisants", pos: "nom", phon: "al-muhsinina", arabic: "ٱلْمُحْسِنِينَ", word_key: "hsn", is_particle: false, sense_retenu: "bien faire", position: 19 }
    ],
    words: [
      {
        word_key: "qwl", position: 1, sense_chosen: "dire",
        analysis_axes: {
          concept_chosen: "Parole/Énonciation",
          concepts: {
            "Parole/Énonciation": {
              status: "retenu",
              senses: ["parole", "discours", "parler", "dire", "affirmer"],
              proof_ctx: "Le verbe qulna est un accompli 1P de la racine q-w-l. Le Lane's donne « he said, spoke, uttered ». La premiere personne du pluriel (Nous) est le pluriel de majeste divin. Qulna introduit le discours direct de Dieu aux enfants d'Israel — c'est une parole d'autorite qui ordonne. Le contexte rapporte un commandement ancien, une parole prononcee dans le passe.",
              axe1_verset: "Le verbe qulna ouvre le recit de l'ordre divin. Tout le verset est le contenu de cette parole — les ordres d'entrer, de manger, de se prosterner, de dire hitta, et les promesses de pardon et d'augmentation. La parole divine est performative — elle ne se contente pas de decrire, elle cree l'obligation. Le verset contient quatre imperatifs dans cette seule parole : entrez, mangez, entrez par la porte, dites.",
              axe2_voisins: "Le verset 57 rappelait les bienfaits materiels du desert (manne et cailles). Ce verset 58 marque le passage du desert a la cite — Dieu ordonne d'entrer dans un etablissement permanent. La parole divine accompagne chaque etape du parcours des enfants d'Israel. Le verset 59 montrera que certains ont change cette parole.",
              axe3_sourate: "La racine q-w-l est la plus frequente de la sourate al-Baqarah. La parole divine structure toute la narration des enfants d'Israel — chaque episode est introduit par « Nous avons dit » ou « lorsque Moise dit ». La sourate montre que la parole divine est systematiquement mise a l'epreuve par la desobeissance.",
              axe4_coherence: "La racine q-w-l apparait plus de 1700 fois dans le Coran. Le verbe qulna (Nous avons dit) est une formule recurrente pour rappeler les ordres divins passes. En 7:161, un verset parallele reprend exactement le meme recit avec les memes ordres. La parole divine est repetee pour souligner son importance.",
              axe5_frequence: "Pour la mission du khalifa, la parole divine est la source de la mission. Le khalifa recoit ses ordres par la parole de Dieu. Les enfants d'Israel ont recu cette parole et devaient l'executer fidelement. Changer la parole (verset 59) est une trahison de la mission."
            }
          }
        }
      },
      {
        word_key: "dxl", position: 2, sense_chosen: "entrer",
        analysis_axes: {
          concept_chosen: "Entrée/Pénétration",
          concepts: {
            "Entrée/Pénétration": {
              status: "retenu",
              senses: ["pénétrer", "accéder", "introduire", "entrer"],
              proof_ctx: "Le verbe udkhuluu est un imperatif 2MP de la racine d-kh-l. Le Lane's donne « he entered, went in, penetrated ». L'imperatif ordonne l'entree physique dans la cite. Le verbe apparait deux fois dans le verset — une premiere fois pour entrer dans la cite, une seconde pour entrer par la porte. La double entree implique deux actes distincts : l'entree generale dans la cite et l'entree ceremonielle par la porte sacree.",
              axe1_verset: "Le verbe udkhuluu est le premier et le troisieme imperatif du verset. La premiere occurrence (udkhuluu hadhihi al-qaryata) ordonne l'entree dans la cite — c'est l'installation. La seconde occurrence (wa-udkhuluu al-baba sujjadan) ordonne l'entree par la porte en se prosternant — c'est l'humilite. L'entree physique est doublee d'une entree spirituelle. On entre dans la cite pour vivre et par la porte pour adorer.",
              axe2_voisins: "Les versets precedents (49-57) rappelaient la delivrance de Pharaon, la traversee de la mer, et les provisions du desert. Ce verset 58 marque l'arrivee a destination — l'entree dans la cite promise. Apres les epreuves du desert, l'entree est un soulagement et un privilege. Le verset 59 montrera que certains ont corrompu cette entree.",
              axe3_sourate: "La racine d-kh-l apparait dans la sourate pour decrire des entrees significatives. L'entree dans la cite est un tournant — elle marque la fin de l'errance et le debut de l'installation. La sourate montre que chaque privilege (l'entree) s'accompagne d'une exigence (la prosternation et le repentir).",
              axe4_coherence: "La racine d-kh-l apparait 126 fois dans le Coran. En 7:161, un verset parallele reprend le meme ordre « entrez dans cette cite ». En 5:21, Moise dit « entrez dans la terre sainte ». L'entree dans une terre est toujours liee a une mission divine — on entre dans un lieu parce que Dieu l'ordonne.",
              axe5_frequence: "Pour la mission du khalifa, l'entree est le commencement de l'exercice de la mission. Le khalifa entre dans son domaine de responsabilite. Les enfants d'Israel entrent dans la cite pour y exercer leur role de peuple elu. L'entree avec prosternation rappelle que la mission commence par l'humilite devant Dieu."
            }
          }
        }
      },
      {
        word_key: "qry", position: 4, sense_chosen: "cité",
        analysis_axes: {
          concept_chosen: "Établissement humain",
          concepts: {
            "Établissement humain": {
              status: "retenu",
              senses: ["village", "cité"],
              proof_ctx: "Le mot al-qaryata est un nom feminin singulier defini accusatif de la racine q-r-y. Le Lane's donne « town, village, city, any place where people are collected and permanently reside ». La cite est un etablissement humain permanent — un lieu habite avec des structures et des ressources. L'article defini (al-) indique une cite connue et specifique. Le demonstratif hadhihi (cette) renforce la designation precise. La tradition identifie cette cite a Jerusalem (Bayt al-Maqdis).",
              axe1_verset: "Le mot al-qaryata est l'objet de l'imperatif udkhuluu — c'est le lieu ou les enfants d'Israel doivent entrer. La cite est presentee comme un don — on y mange en abondance, ou l'on veut. La cite offre la securite et l'abondance apres l'incertitude du desert. L'entree dans la cite est conditionnee par la prosternation et la demande de pardon.",
              axe2_voisins: "Les versets precedents decrivaient la vie nomade dans le desert (manne, cailles, ombre). Ce verset marque la transition vers la sedentarisation — la cite offre un cadre de vie stable. Le passage du desert a la cite est un passage de l'epreuve au confort. Le verset 59 montrera que meme dans le confort, certains desobeissent.",
              axe3_sourate: "La racine q-r-y apparait dans la sourate pour designer des cites detruites ou eprouvees. En 2:259, un homme passe devant une cite detruite. La cite est un lieu de civilisation qui peut prosperer ou etre detruite selon l'obeissance ou la desobeissance de ses habitants. La cite de ce verset est offerte — mais l'offre implique des conditions.",
              axe4_coherence: "La racine q-r-y apparait 57 fois dans le Coran. En 7:161, le verset parallele utilise le meme mot « cette cite ». En 12:82, Yusuf mentionne la cite ou ils etaient. La cite est toujours un lieu de concentration humaine — elle peut etre un lieu de bienfaits ou de chatiment selon la conduite de ses habitants.",
              axe5_frequence: "Pour la mission du khalifa, la cite est le lieu d'exercice de la mission. Le khalifa s'installe dans un etablissement pour y faire regner l'ordre divin. La cite est offerte aux enfants d'Israel comme cadre de leur mission — ils doivent y vivre selon les commandements divins."
            },
            "Lecture/Récitation": {
              status: "nul",
              senses: ["réciter", "lire"],
              proof_ctx: "La lecture est un sens de q-r-y dans d'autres contextes (iqra' = lis). Ici le mot al-qaryata est un nom feminin defini avec le demonstratif hadhihi, designant clairement un lieu physique (cette cite), pas un acte de lecture."
            },
            "Hospitalité": {
              status: "nul",
              senses: ["accueillir"],
              proof_ctx: "L'hospitalite est un sens derive de q-r-y (qara = accueillir un hote). Ici le contexte est l'entree dans une cite, pas un acte d'hospitalite. Les enfants d'Israel ne sont pas accueillis par un hote mais invites a entrer dans un lieu."
            }
          }
        }
      },
      {
        word_key: "akl", position: 5, sense_chosen: "manger",
        analysis_axes: {
          concept_chosen: "Alimentation/Consommation",
          concepts: {
            "Alimentation/Consommation": {
              status: "retenu",
              senses: ["consommer", "dévorer", "nourriture", "manger"],
              proof_ctx: "Le verbe kuluu est un imperatif 2MP de la racine a-k-l. Le Lane's donne « he ate, consumed food ». L'imperatif donne la permission explicite de manger — c'est un acte de generosite divine. Le prefixe fa- (fa-kuluu) indique la consequence : parce que vous etes entres, alors mangez. La nourriture est offerte sans restriction de lieu (haythu shi'tum = ou vous voulez) et sans restriction de quantite (raghadan = en abondance).",
              axe1_verset: "Le verbe kuluu est le deuxieme imperatif du verset, consequence directe de l'entree. Apres « entrez », vient « mangez ». La sequence entree-nourriture montre que Dieu pourvoit immediatement aux besoins de ceux qui obeissent. La permission de manger est totale — ou l'on veut et en abondance. Cette generosite divine contraste avec les restrictions du desert.",
              axe2_voisins: "Le verset 57 mentionnait la manne et les cailles — nourriture miraculeuse du desert. Ce verset 58 offre la nourriture de la cite — nourriture ordinaire mais abondante. Le passage du miraculeux a l'ordinaire montre que Dieu pourvoit dans toutes les circonstances. Les enfants d'Israel passent de la dependance divine directe (manne) a l'autonomie dans la cite (mangez ou vous voulez).",
              axe3_sourate: "La racine a-k-l revient frequemment dans la sourate al-Baqarah. En 2:168, « mangez de ce qui est sur terre, licite et bon ». En 2:172, « mangez des bonnes choses que Nous vous avons attribuees ». La nourriture est un bienfait divin qui appelle la gratitude. La sourate lie systematiquement la permission de manger a la reconnaissance envers Dieu.",
              axe4_coherence: "La racine a-k-l apparait 109 fois dans le Coran. Le Coran presente la nourriture comme un signe divin et un test. En 7:161, le verset parallele reprend le meme ordre « mangez-en ». La permission de manger est toujours un acte de grace — Dieu nourrit et attend la gratitude en retour.",
              axe5_frequence: "Pour la mission du khalifa, la nourriture est un outil de la mission. Le khalifa mange pour vivre et vit pour accomplir sa mission. La nourriture abondante de la cite est un moyen, pas une fin. Les enfants d'Israel recoivent l'abondance pour se consacrer a leur mission, pas pour s'y complaire."
            }
          }
        }
      },
      {
        word_key: "rgd", position: 9, sense_chosen: "abondance",
        analysis_axes: {
          concept_chosen: "Abondance/Aisance",
          concepts: {
            "Abondance/Aisance": {
              status: "retenu",
              senses: ["abondance", "aisance", "vie plaisante", "sans contrainte"],
              proof_ctx: "Le mot raghadan est un masdar accusatif de la racine r-gh-d. Le Lane's donne « easy and pleasant life, plentiful means of subsistence, without constraint ». Le mot qualifie la maniere de manger — non pas avec parcimonie mais en abondance et sans gene. Le masdar accusatif fonctionne comme un hal (etat) — ils mangent dans un etat d'abondance et de facilite.",
              axe1_verset: "Le mot raghadan complete l'imperatif kuluu en decrivant la qualite de la permission. La nourriture n'est pas seulement permise, elle est offerte en abondance. L'ajout de raghadan apres haythu shi'tum (ou vous voulez) cree une liberte totale — pas de restriction de lieu ni de quantite. L'abondance est un signe de la generosite divine qui accompagne l'obeissance.",
              axe2_voisins: "Le verset 57 offrait la manne et les cailles — nourriture suffisante mais specifique. Ce verset 58 offre une abondance generalisee dans la cite. La progression est du necessaire a l'abondant. L'abondance marque l'elevation du statut — les enfants d'Israel passent de survivants dans le desert a residents prosperes dans la cite.",
              axe3_sourate: "La racine r-gh-d apparait aussi en 2:35 pour decrire la vie au Paradis (kulaa minha raghadan). L'expression identique dans les deux versets est significative — la cite offerte aux enfants d'Israel est comparee au Paradis. L'abondance terrestre prefigure l'abondance paradisiaque. Dans les deux cas, l'abondance est conditionnee par l'obeissance.",
              axe4_coherence: "La racine r-gh-d est rare dans le Coran (3 occurrences). En 2:35 et 2:58, la formule kuluu minha raghadan est repetee. En 16:112, une cite vivait en securite et en abondance (raghadan) puis a ete ingrate. Le Coran lie l'abondance a l'epreuve — l'abondance est un test de gratitude.",
              axe5_frequence: "Pour la mission du khalifa, l'abondance est une epreuve. Le khalifa qui recoit l'abondance doit rester reconnaissant et fidele. Les enfants d'Israel recoivent l'abondance comme un test — l'abondance sans reconnaissance mene au chatiment (comme la cite de 16:112)."
            },
            "Confusion/Mélange": {
              status: "nul",
              senses: ["être confus", "se mélanger", "douter"],
              proof_ctx: "La confusion est un sens de r-gh-d dans certains contextes. Ici le mot raghadan est utilise comme hal accusatif qualifiant la nourriture — le sens d'abondance et d'aisance est clairement etabli par le contexte (mangez ou vous voulez, en abondance)."
            }
          }
        }
      },
      {
        word_key: "bwb", position: 11, sense_chosen: "porte",
        analysis_axes: {
          concept_chosen: "Ouverture/Accès",
          concepts: {
            "Ouverture/Accès": {
              status: "retenu",
              senses: ["porte", "chapitre", "entrée", "accès"],
              proof_ctx: "Le mot al-baba est un nom masculin singulier defini accusatif de la racine b-w-b. Le Lane's donne « door, gate, entrance, opening, access, chapter ». La porte est l'entree principale de la cite — un lieu de passage symbolique. L'article defini (al-) indique une porte connue et specifique, pas n'importe quelle porte. La tradition identifie cette porte a une porte de Jerusalem.",
              axe1_verset: "Le mot al-baba est l'objet du second udkhuluu — entrez par la porte. La porte est le lieu ou se joue l'acte de soumission — entrer en se prosternant. La porte n'est pas seulement un passage physique mais un seuil de soumission. Le verset exige que l'entree par cette porte soit accompagnee de prosternation et de la formule hitta. La porte est un test d'humilite.",
              axe2_voisins: "Le verset 57 ne mentionnait aucune porte — le desert n'a pas de portes. L'apparition de la porte marque l'entree dans la civilisation. La porte est un marqueur de transition entre deux mondes — le desert ouvert et la cite delimitee. Le verset 59 montrera que certains ont corrompu l'entree par cette porte.",
              axe3_sourate: "La racine b-w-b dans la sourate designe des acces et des ouvertures. La porte de la cite est un symbole d'acces aux bienfaits divins — celui qui entre correctement (en se prosternant) recoit le pardon. La sourate montre que l'acces aux bienfaits est conditionne par l'attitude interieure.",
              axe4_coherence: "La racine b-w-b apparait 25 fois dans le Coran. En 7:161, le verset parallele mentionne la meme porte. En 39:71-73, les portes de l'Enfer et du Paradis sont mentionnees. La porte est toujours un lieu de passage significatif — on entre dans un lieu selon son merite et son attitude.",
              axe5_frequence: "Pour la mission du khalifa, la porte represente le seuil d'engagement. Le khalifa entre dans sa mission par une porte — il doit y entrer avec humilite (prosternation) et repentir (hitta). Les enfants d'Israel devaient entrer par la porte de la cite avec cette attitude pour acceder aux bienfaits."
            }
          }
        }
      },
      {
        word_key: "sjd", position: 12, sense_chosen: "se prosterner",
        analysis_axes: {
          concept_chosen: "Prosternation/Adoration",
          concepts: {
            "Prosternation/Adoration": {
              status: "retenu",
              senses: ["se prosterner", "s'incliner", "adorer", "obéir"],
              proof_ctx: "Le mot sujjadan est un pluriel brise de sajid au cas accusatif de la racine s-j-d. Le Lane's donne « one who prostrates himself, who bows down in worship or adoration ». Le pluriel brise sujjad (comme kubar, humur) est un scheme intensif — la prosternation est profonde et collective. L'accusatif fonctionne comme hal (etat) — ils entrent dans l'etat de prosternation.",
              axe1_verset: "Le mot sujjadan qualifie la maniere d'entrer par la porte. L'entree doit etre dans un etat de prosternation — tete baissee, corps incline. La prosternation a la porte est un acte d'humilite collective avant de recevoir les bienfaits. Le verset lie l'entree physique a la soumission spirituelle — on ne peut pas entrer dans la cite de Dieu avec arrogance.",
              axe2_voisins: "Les versets precedents montraient les bienfaits materiels (manne, cailles, ombre). Ce verset exige la prosternation comme condition d'acces aux bienfaits de la cite. La sequence bienfait-exigence est constante — Dieu donne et demande la soumission en retour. Le verset 59 montrera que certains ont refuse cette soumission.",
              axe3_sourate: "La racine s-j-d est fondamentale dans la sourate al-Baqarah. En 2:34, Dieu ordonne aux anges de se prosterner devant Adam — et Iblis refuse. En 2:58, Dieu ordonne aux enfants d'Israel de se prosterner en entrant — et certains desobeissent (v59). La sourate etablit un parallele entre le refus d'Iblis et le refus des enfants d'Israel.",
              axe4_coherence: "La racine s-j-d apparait 92 fois dans le Coran. La prosternation est l'acte de soumission ultime — le front touche le sol devant Dieu. En 7:161, le verset parallele reprend le meme ordre de prosternation. En 15:98-99, la prosternation est ordonnee pour adorer. La prosternation physique est toujours l'expression d'une soumission interieure.",
              axe5_frequence: "Pour la mission du khalifa, la prosternation est la reconnaissance de la souverainete divine. Le khalifa ne peut exercer sa mission que s'il reconnait d'abord qu'il est soumis a Dieu. L'entree dans la cite en se prosternant montre que meme les privilegies (enfants d'Israel) doivent se soumettre."
            }
          }
        }
      },
      {
        word_key: "htt", position: 14, sense_chosen: "déposer",
        analysis_axes: {
          concept_chosen: "Décharge/Allègement",
          concepts: {
            "Décharge/Allègement": {
              status: "retenu",
              senses: ["déposer", "enlever", "abaisser", "péché enlevé"],
              proof_ctx: "Le mot hittatun est un nom feminin singulier nominatif de la racine h-t-t. Le Lane's donne « a putting down, a laying down, a removing or taking away of sin ». Le Lane's precise que hitta est une priere par laquelle on demande a Dieu de deposer ses peches — c'est une demande d'allegement du fardeau. Le mot est au nominatif parce qu'il est le contenu de l'imperatif quuluu (dites) — ce qu'ils doivent dire est hitta.",
              axe1_verset: "Le mot hittatun est le contenu de l'imperatif quuluu — c'est la parole que les enfants d'Israel doivent prononcer en entrant. Apres la prosternation physique (sujjadan), vient la parole de repentir (hittatun). La sequence corps-parole est complete — le corps se prosterne et la bouche demande le pardon. Le verset lie ensuite cette demande a la promesse de pardon (naghfir lakum).",
              axe2_voisins: "Le verset 57 decrivait les provisions materielles. Ce verset 58 exige une contrepartie spirituelle — la prosternation et la demande de pardon. La sequence bienfait-exigence est pedagogique. Le verset 59 montrera que certains ont change le mot hitta pour autre chose — la corruption de la parole de repentir est une trahison directe.",
              axe3_sourate: "Le mot hitta est rare dans le Coran (2 occurrences : 2:58 et 7:161). La sourate al-Baqarah utilise ce mot pour montrer que le repentir des enfants d'Israel devait etre explicite et formule. La demande de decharge est un acte de langage — dire hitta c'est reconnaitre ses fautes et demander leur suppression.",
              axe4_coherence: "La racine h-t-t apparait 4 fois dans le Coran. En 7:161, le verset parallele reprend le meme mot hittatun. En 56:3, hatta est utilisee dans un autre sens. Le sens de decharge/allegement des peches est specifique a ce contexte des enfants d'Israel. Le repentir exige des enfants d'Israel est formule — ils doivent prononcer un mot precis.",
              axe5_frequence: "Pour la mission du khalifa, la decharge est la reconnaissance de ses fautes. Le khalifa ne peut pas exercer sa mission avec le fardeau des fautes non reconnues. La demande de decharge est un prealable a l'exercice de la mission dans la cite — on entre purifies pour servir correctement."
            }
          }
        }
      },
      {
        word_key: "ghf", position: 15, sense_chosen: "pardonner",
        analysis_axes: {
          concept_chosen: "Pardon/Couverture",
          concepts: {
            "Pardon/Couverture": {
              status: "retenu",
              senses: ["pardonner", "effacer", "couvrir"],
              proof_ctx: "Le verbe naghfir est un inaccompli 1P majzum de la racine gh-f-r. Le Lane's donne « he forgave, pardoned, covered, concealed sins ». Le sens premier est couvrir — le pardon est un acte de couverture des fautes. Le verbe est majzum (apocopee) parce qu'il est reponse a un imperatif (dites hitta et Nous pardonnerons). Le pardon est conditionne par l'obeissance — si vous dites hitta, alors Nous pardonnons.",
              axe1_verset: "Le verbe naghfir est la reponse divine a la demande hitta. La structure conditionnelle est : dites hitta (condition) — Nous pardonnerons (reponse). Le pardon porte sur khatayakum (vos fautes) — les erreurs passees seront couvertes. Le verset ajoute ensuite une promesse supplementaire (sanazidu) — au-dela du pardon, il y a l'augmentation pour les bienfaisants.",
              axe2_voisins: "Le verset 52 mentionnait le pardon apres l'episode du veau d'or. Ce verset 58 promet le pardon a condition de la prosternation et de hitta. La repetition du pardon montre la misericorde divine — Dieu pardonne a chaque reprise si le repentir est sincere. Le verset 59 montrera que certains n'ont pas profite de cette offre de pardon.",
              axe3_sourate: "La racine gh-f-r est frequente dans la sourate al-Baqarah. En 2:199, « demandez le pardon de Dieu, car Dieu est Pardonnant, Misericordieux ». En 2:268, Satan promet la pauvrete tandis que Dieu promet le pardon. Le pardon divin est un theme central de la sourate — il est toujours offert mais conditionne par le repentir.",
              axe4_coherence: "La racine gh-f-r apparait 234 fois dans le Coran. Al-Ghafur (le Pardonnant) est l'un des noms divins les plus frequents. Le pardon est l'acte par lequel Dieu couvre les fautes et les efface du registre. En 39:53, « Dieu pardonne tous les peches ». Le pardon divin est vaste mais conditionne par le retour sincere a Dieu.",
              axe5_frequence: "Pour la mission du khalifa, le pardon est la condition de renouvellement. Le khalifa qui faute peut revenir par le repentir et le pardon. Les enfants d'Israel ont faute dans le desert et Dieu leur offre le pardon a l'entree de la cite — un nouveau depart pour la mission."
            },
            "Protection": {
              status: "nul",
              senses: ["casque"],
              proof_ctx: "Le casque (mighfar) est un objet qui couvre la tete, de la meme racine gh-f-r (couvrir). Le contexte utilise naghfir dans son sens spirituel de pardon des fautes, pas dans le sens materiel de protection physique."
            }
          }
        }
      },
      {
        word_key: "xta", position: 17, sense_chosen: "faute",
        analysis_axes: {
          concept_chosen: "Erreur/Faute",
          concepts: {
            "Erreur/Faute": {
              status: "retenu",
              senses: ["pécher", "erreur", "faute", "manquer", "se tromper"],
              proof_ctx: "Le mot khatayakum est un pluriel brise de khati'a au cas accusatif avec pronom 2MP de la racine kh-t-a. Le Lane's donne « sin, fault, error, mistake, a missing of the right course ». La faute est un ecart par rapport au chemin droit — on manque la cible. Le pluriel indique la multiplicite des fautes accumulees. Le pronom possessif (vos fautes) les attribue directement aux enfants d'Israel.",
              axe1_verset: "Le mot khatayakum est l'objet de naghfir — ce qui sera pardonne. Les fautes des enfants d'Israel sont multiples (pluriel) et personnelles (vos). Le verset promet l'effacement de ces fautes a condition du repentir (hitta). Les fautes designent les manquements du desert — la desobeissance, le veau d'or, les recriminations. L'entree dans la cite est l'occasion d'un pardon general.",
              axe2_voisins: "Le verset 52 mentionnait le pardon apres l'adoration du veau d'or — une faute majeure. Ce verset 58 elargit le pardon a toutes les fautes (khatayakum, pluriel general). La progression montre que Dieu pardonne toutes les fautes, pas seulement les fautes specifiques. Le verset 59 montrera que certains ont ajoute de nouvelles fautes a celles qui auraient du etre pardonnees.",
              axe3_sourate: "La racine kh-t-a dans la sourate designe les ecarts moraux. En 2:81, « celui qui commet une faute (khati'a) et dont le peche l'enveloppe... ». La sourate distingue la faute (khati'a) du peche majeur (ithm). La faute est un ecart qui peut etre pardonne ; le peche est une transgression plus grave.",
              axe4_coherence: "La racine kh-t-a apparait 22 fois dans le Coran. En 7:161, le verset parallele utilise le meme mot khatayakum. En 17:31, tuer ses enfants est une khati'a kabira (faute immense). La faute a des degres — de l'erreur involontaire au crime delibere. Les fautes des enfants d'Israel sont des ecarts corrigeables par le repentir.",
              axe5_frequence: "Pour la mission du khalifa, la faute est un ecart corrigible. Le khalifa qui reconnait ses fautes et demande la decharge peut etre pardonne et reprendre sa mission. Les enfants d'Israel recoivent cette chance a l'entree de la cite — un pardon qui efface l'ardoise et permet un nouveau depart."
            }
          }
        }
      },
      {
        word_key: "zyd", position: 18, sense_chosen: "augmenter",
        analysis_axes: {
          concept_chosen: "Augmentation/Surplus",
          concepts: {
            "Augmentation/Surplus": {
              status: "retenu",
              senses: ["augmenter", "ajouter", "croître", "surplus", "davantage", "excéder", "surpasser"],
              proof_ctx: "Le verbe sanazidu est un inaccompli 1P avec particule sa (futur) de la racine z-y-d. Le Lane's donne « he increased, added, augmented, exceeded ». La particule sa projette l'augmentation dans le futur — c'est une promesse divine. Le sujet est Dieu (Nous) et l'objet implicite est la recompense des bienfaisants. L'augmentation est un ajout au-dela du pardon — le pardon efface les fautes, l'augmentation ajoute des merites.",
              axe1_verset: "Le verbe sanazidu cloture le verset par une promesse. Apres le pardon (naghfir), vient l'augmentation (sanazidu). La structure est : pardon pour tous + augmentation pour les bienfaisants. Le pardon est general (pour vous) mais l'augmentation est selective (les bienfaisants). Le verset etablit deux niveaux de recompense — le minimum (pardon) et le maximum (augmentation).",
              axe2_voisins: "Le verset 57 offrait des biens materiels. Ce verset 58 promet des biens spirituels (pardon et augmentation). La progression materiel-spirituel montre que Dieu pourvoit aux deux dimensions. Le verset 59 montrera que ceux qui changent la parole divine perdent les deux.",
              axe3_sourate: "La racine z-y-d apparait dans la sourate pour decrire des augmentations divines et humaines. En 2:10, Dieu augmente la maladie des hypocrites. En 2:58, Dieu augmente la recompense des bienfaisants. L'augmentation divine est ambivalente — elle accroit le bien pour les bons et le mal pour les mauvais.",
              axe4_coherence: "La racine z-y-d apparait 60 fois dans le Coran. En 3:173, la menace « augmente leur foi ». En 9:124, chaque sourate augmente la foi de certains et la maladie d'autres. L'augmentation est un principe coranique — Dieu augmente pour chacun ce qu'il a deja. Les bienfaisants recoivent plus de bienfaisance, les corrupteurs plus de corruption.",
              axe5_frequence: "Pour la mission du khalifa, l'augmentation est le principe de progression. Le khalifa qui fait le bien recoit davantage de bien — sa mission se renforce. Les enfants d'Israel bienfaisants verront leur recompense augmentee au-dela du simple pardon."
            }
          }
        }
      },
      {
        word_key: "hsn", position: 19, sense_chosen: "bien faire",
        analysis_axes: {
          concept_chosen: "Excellence morale",
          concepts: {
            "Excellence morale": {
              status: "retenu",
              senses: ["bien faire", "bienfaisance"],
              proof_ctx: "Le mot al-muhsinina est un participe actif pluriel defini accusatif forme IV de la racine h-s-n. Le Lane's donne « one who does good, who acts well, who practises ihsan ». La forme IV (ahsana) signifie « faire le bien, agir avec excellence ». Le participe actif pluriel designe un groupe de personnes caracteriees par l'acte continu de bien faire. L'article defini (al-) individualise ce groupe — les bienfaisants connus comme tels.",
              axe1_verset: "Le mot al-muhsinina est le complement de sanazidu — ceux qui recevront l'augmentation sont les bienfaisants. Le verset distingue deux categories : ceux qui recoivent le pardon (tous ceux qui disent hitta) et ceux qui recoivent en plus l'augmentation (les bienfaisants). L'ihsan (bienfaisance) est un degre au-dessus de la simple obeissance — c'est l'excellence dans l'acte.",
              axe2_voisins: "Les versets precedents montraient les bienfaits de Dieu envers les enfants d'Israel. Ce verset introduit la distinction entre l'obeissance minimale et l'excellence. Les bienfaisants ne se contentent pas d'entrer et de manger — ils entrent en se prosternant, disent hitta avec sincerite, et ajoutent le bien au-dela du requis. Le verset 59 montrera l'oppose — ceux qui corrompent la parole.",
              axe3_sourate: "La racine h-s-n dans la sourate designe la beaute et la bonte. En 2:83, il est ordonne de dire aux gens husnan (de belles paroles). En 2:112, « celui qui soumet sa face a Dieu et qui est muhsin ». L'ihsan est lie a la soumission — le muhsin est celui qui soumet sa face a Dieu et fait le bien simultanement.",
              axe4_coherence: "La racine h-s-n apparait 194 fois dans le Coran. Le muhsin est un concept central de l'ethique coranique. En 55:60, « la recompense de l'ihsan est-elle autre chose que l'ihsan ? ». En 16:128, « Dieu est avec ceux qui se premunissent et ceux qui font le bien ». L'ihsan est le niveau le plus eleve de la pratique religieuse — au-dessus de l'islam (soumission) et de l'iman (foi).",
              axe5_frequence: "Pour la mission du khalifa, l'ihsan est l'accomplissement parfait de la mission. Le khalifa muhsin ne se contente pas de remplir le minimum — il excelle dans sa gestion de la terre. Les enfants d'Israel bienfaisants sont ceux qui obeissent avec excellence et recoivent l'augmentation divine."
            },
            "Beauté/Bonté": {
              status: "probable",
              senses: ["être beau", "bon", "excellent"],
              proof_ctx: "La beaute est le sens concret premier de h-s-n (ce qui est agreable a voir et a percevoir). Le contexte utilise al-muhsinina (participe actif forme IV) — c'est l'agent qui fait le bien, pas l'objet qui est beau. La beaute est la qualite du bien fait (l'ihsan est beau), pas le concept retenu ici."
            }
          }
        }
      }
    ]
  },

  // =====================================================
  // VERSET 2:59
  // verse_id=66, analysis_id=424
  // "Ceux qui ont ete injustes ont change la parole pour une autre
  //  que celle qui leur avait ete dite. Nous avons fait descendre
  //  sur les injustes un chatiment du ciel parce qu'ils transgressaient."
  // =====================================================
  59: {
    verse_id: 66,
    analysis_id: 424,
    translation_arab: "Ceux qui ont ete injustes ont change la parole pour une autre que celle qui leur avait ete dite. Nous avons fait descendre sur les injustes un chatiment du ciel parce qu'ils transgressaient.",
    full_translation: "Ceux qui ont commis l'injustice ont substitue une parole differente de celle qui leur avait ete ordonnee. Nous avons alors fait descendre sur ceux qui ont ete injustes un chatiment du ciel a cause de leur transgression persistante.",
    translation_explanation: `§DEMARCHE§
Ce verset decrit la desobeissance des injustes parmi les enfants d'Israel. Le verbe **baddala** est un accompli 3MS forme II de la racine b-d-l. Le Lane's donne « he changed, exchanged, substituted, replaced ». La forme II (intensif) renforce l'idee de changement delibere — ils n'ont pas simplement modifie la parole mais l'ont substituee completement. Le mot **alladhina** est un pronom relatif pluriel. Le verbe **zalamuu** est un accompli 3MP de la racine z-l-m. Le Lane's donne « he wronged, he was unjust, he transgressed ». Les injustes sont identifies par leur acte — ceux qui ont commis l'injustice. Le mot **qawlan** est un nom accusatif indefini de la racine q-w-l. Le Lane's donne « a saying, a word, speech ». La parole changee est celle que Dieu avait ordonne de dire (hittatun du verset 58). Le mot **ghayra** est un nom accusatif de la racine gh-y-r. Le Lane's donne « other than, different from, not ». Le mot indique l'alterite — une parole radicalement differente de celle prescrite. Le verbe **qila** est un accompli passif 3MS de la racine q-w-l. Le Lane's donne « it was said to them ». Le passif est un passif divin — c'est Dieu qui avait dit. Le verbe **anzalna** est un accompli 1P forme IV de la racine n-z-l. Le Lane's donne « he sent down, revealed ». La forme IV (causatif) signifie « faire descendre ». Le mot **rijzan** est un nom accusatif indefini de la racine r-j-z. Le Lane's donne « punishment, plague, pestilence, filth ». Le chatiment est envoye d'en haut — c'est un fleau celeste. Le mot **al-sama'i** est un nom feminin singulier defini genitif de la racine s-m-w. Le Lane's donne « sky, heaven, what is above ». Le ciel est la source du chatiment — il descend d'en haut. Le verbe **kanuu** est un accompli 3MP de la racine k-w-n. Le Lane's donne « they were ». Le verbe **yafsuquna** est un inaccompli 3MP de la racine f-s-q. Le Lane's donne « they transgressed, deviated from obedience ». L'inaccompli avec kanuu indique une action continue dans le passe — ils transgressaient de maniere habituelle.

§JUSTIFICATION§
**change** — Le sens retenu est « changer ». Le verbe baddala forme II signifie substituer deliberement. L'alternative « echanger » est ecartee car le contexte decrit un acte de corruption volontaire, pas un echange neutre.

**injustes** — Le sens retenu est « etre injuste ». Le verbe zalamuu designe l'acte de commettre l'injustice. L'alternative « obscurite » est ecartee car le contexte parle d'agents moraux qui agissent, pas d'un etat physique de tenebres.

**parole** — Le sens retenu est « parole ». Le mot qawlan designe ce qui a ete dit — la parole prescrite (hitta). Pas d'alternative pertinente dans ce contexte verbal.

**autre** — Le sens retenu est « autre ». Le mot ghayra indique l'alterite — une parole differente. L'alternative « changer » est ecartee car ghayra est ici un adjectif qualifiant la parole, pas un verbe d'action.

**fait descendre** — Le sens retenu est « faire descendre ». Le verbe anzalna forme IV designe l'envoi d'en haut. L'alternative « s'installer » est ecartee car la forme IV est causative — Dieu fait descendre le chatiment.

**chatiment** — Le sens retenu est « chatiment ». Le mot rijzan designe un fleau envoye par Dieu. L'alternative « idole » est ecartee car le contexte parle d'une punition descendue du ciel, pas d'un objet d'adoration.

**ciel** — Le sens retenu est « ciel ». Le mot al-sama'i designe l'espace d'ou descend le chatiment. Le ciel est la source — le chatiment vient d'en haut comme la pluie.

**transgressaient** — Le sens retenu est « transgresser ». Le verbe yafsuquna designe la sortie de l'obeissance. L'alternative « datte qui sort de sa peau » est ecartee car le contexte est moral (desobeissance), pas botanique.

§CRITIQUE§
**change vs substitue** — Le Lane's donne « he changed, exchanged, substituted ». « Change » est plus courant que « substitue » en francais. « Substitue » serait plus technique mais « change » preserve la clarte du texte.
**chatiment vs fleau** — Le Lane's donne « punishment, plague, pestilence ». « Chatiment » est plus precis que « fleau » car il implique une cause morale — le chatiment punit une faute, le fleau peut etre naturel. Le contexte est clairement punitif.
**transgressaient vs desobeissaient** — Le Lane's donne « they transgressed, deviated from obedience ». « Transgressaient » est plus fort que « desobeissaient » — la transgression implique le depassement d'une limite, pas simplement le refus d'un ordre.`,
    segments: [
      { fr: "ceux qui ont change", pos: "verbe", phon: "fa-baddala", arabic: "فَبَدَّلَ", word_key: "bdl", is_particle: false, sense_retenu: "changer", position: 0 },
      { fr: "ceux qui", phon: "alladhina", arabic: "ٱلَّذِينَ", is_particle: true, position: 1 },
      { fr: "ont ete injustes", pos: "verbe", phon: "zalamuu", arabic: "ظَلَمُوا۟", word_key: "zlm", is_particle: false, sense_retenu: "etre injuste", position: 2 },
      { fr: "une parole", pos: "nom", phon: "qawlan", arabic: "قَوْلًا", word_key: "qwl", is_particle: false, sense_retenu: "parole", position: 3 },
      { fr: "autre que", pos: "nom", phon: "ghayra", arabic: "غَيْرَ", word_key: "ghyr", is_particle: false, sense_retenu: "autre", position: 4 },
      { fr: "celle qui", phon: "alladhi", arabic: "ٱلَّذِY", is_particle: true, position: 5 },
      { fr: "leur avait ete dite", pos: "verbe", phon: "qila", arabic: "قِيلَ", word_key: "qwl", is_particle: false, sense_retenu: "dire", position: 6 },
      { fr: "a eux", phon: "lahum", arabic: "لَهُمْ", is_particle: true, position: 7 },
      { fr: "Nous avons fait descendre", pos: "verbe", phon: "fa-anzalna", arabic: "فَأَنزَلْنَا", word_key: "nzl", is_particle: false, sense_retenu: "faire descendre", position: 8 },
      { fr: "sur", phon: "'ala", arabic: "عَلَY", is_particle: true, position: 9 },
      { fr: "ceux qui", phon: "alladhina", arabic: "ٱلَّذِينَ", is_particle: true, position: 10 },
      { fr: "ont ete injustes", pos: "verbe", phon: "zalamuu", arabic: "ظَلَمُوا۟", word_key: "zlm", is_particle: false, sense_retenu: "etre injuste", position: 11 },
      { fr: "un chatiment", pos: "nom", phon: "rijzan", arabic: "رِجْزًا", word_key: "rjz", is_particle: false, sense_retenu: "chatiment", position: 12 },
      { fr: "du", phon: "mina", arabic: "مِّنَ", is_particle: true, position: 13 },
      { fr: "ciel", pos: "nom", phon: "al-sama'i", arabic: "ٱلسَّمَآءِ", word_key: "smw", is_particle: false, sense_retenu: "ciel", position: 14 },
      { fr: "parce que", phon: "bima", arabic: "بِمَا", is_particle: true, position: 15 },
      { fr: "ils etaient", pos: "verbe", phon: "kanuu", arabic: "كَانُوا۟", word_key: "knw", is_particle: false, sense_retenu: "etre", position: 16 },
      { fr: "transgressant", pos: "verbe", phon: "yafsuquna", arabic: "يَفْسُقُونَ", word_key: "fsq", is_particle: false, sense_retenu: "transgresser", position: 17 }
    ],
    words: [
      {
        word_key: "bdl", position: 0, sense_chosen: "changer",
        analysis_axes: {
          concept_chosen: "Changement/Substitution",
          concepts: {
            "Changement/Substitution": {
              status: "retenu",
              senses: ["changer", "remplacer", "substituer", "échange"],
              proof_ctx: "Le verbe baddala est un accompli 3MS forme II de la racine b-d-l. Le Lane's donne « he changed, exchanged, substituted one thing for another ». La forme II (intensif) renforce la deliberation de l'acte — la substitution est volontaire et complete. Le sujet est « ceux qui ont ete injustes » — le changement est un acte d'injustice. L'objet est qawlan (une parole) — ils ont substitue la parole prescrite par une autre.",
              axe1_verset: "Le verbe baddala ouvre le verset par la description de la faute. La faute est precise : ils ont change la parole (qawlan ghayra alladhi qila lahum). Le changement porte sur le contenu de ce que Dieu avait ordonne de dire (hittatun du verset 58). La substitution est un acte de rebellion — au lieu de dire ce que Dieu ordonne, ils disent autre chose. Le verset lie directement cette substitution au chatiment divin.",
              axe2_voisins: "Le verset 58 ordonnait de dire hitta. Ce verset 59 revele que les injustes ont change ce mot. La tradition rapporte qu'au lieu de dire hitta (decharge), ils ont dit hinta (ble) — se moquant de l'ordre divin. La sequence ordre-desobeissance est le schema narratif de toute la section sur les enfants d'Israel.",
              axe3_sourate: "La racine b-d-l dans la sourate designe les actes de substitution. En 2:211, « celui qui substitue le bienfait de Dieu apres qu'il lui est parvenu... ». La substitution est une corruption deliberee — on remplace le bon par le mauvais. La sourate montre que la substitution de la parole divine est un acte grave qui entraine le chatiment.",
              axe4_coherence: "La racine b-d-l apparait 44 fois dans le Coran. En 7:162, le verset parallele utilise le meme verbe baddala. En 14:28, « ceux qui ont change le bienfait de Dieu en ingratitude ». La substitution est un theme coranique — les peuples qui recoivent la guidance et la corrompent sont chaties. Le changement delibere de la parole divine est une forme d'ingratitude.",
              axe5_frequence: "Pour la mission du khalifa, la substitution est la corruption de la mission. Le khalifa qui change les termes de sa mission trahit la confiance divine. Les enfants d'Israel qui changent hitta en autre chose corrompent l'acte de repentir qui devait les purifier pour leur mission dans la cite."
            }
          }
        }
      },
      {
        word_key: "zlm", position: 2, sense_chosen: "être injuste",
        analysis_axes: {
          concept_chosen: "Injustice/Oppression",
          concepts: {
            "Injustice/Oppression": {
              status: "retenu",
              senses: ["opprimer", "injustice", "oppresseur", "être injuste"],
              proof_ctx: "Le verbe zalamuu est un accompli 3MP de la racine z-l-m. Le Lane's donne « he wronged, acted unjustly, transgressed the proper limit, put a thing in a wrong place ». Le sens premier est mettre quelque chose a la mauvaise place — l'injustice est un desordre. Le pluriel (3MP) designe un groupe parmi les enfants d'Israel — pas tous, seulement ceux qui ont ete injustes. Le verbe apparait deux fois dans le verset — pour identifier les fautifs et pour les designer comme destinataires du chatiment.",
              axe1_verset: "Le verbe zalamuu identifie les fautifs — ce sont les injustes parmi les enfants d'Israel. L'injustice consiste a changer la parole divine. Le verset repete zalamuu une seconde fois dans « Nous avons fait descendre sur ceux qui ont ete injustes un chatiment ». La repetition cree un parallelisme — ceux qui sont injustes au debut du verset sont ceux qui recoivent le chatiment a la fin.",
              axe2_voisins: "Le verset 58 offrait le pardon et l'augmentation. Ce verset 59 montre que certains ont choisi l'injustice au lieu du repentir. Le contraste est maximal — au lieu du pardon, le chatiment ; au lieu de l'augmentation, le fleau. Le passage du verset 58 au verset 59 est le passage de la misericorde a la justice.",
              axe3_sourate: "La racine z-l-m est l'une des plus frequentes de la sourate al-Baqarah. En 2:35, Adam est averti de ne pas etre parmi les injustes. En 2:54, les enfants d'Israel se sont fait du tort en adorant le veau. L'injustice est le fil conducteur de tous les echecs — chaque peche est une forme d'injustice envers soi-meme ou envers les autres.",
              axe4_coherence: "La racine z-l-m apparait 315 fois dans le Coran. C'est le concept moral negatif le plus frequent. En 7:162, le verset parallele utilise le meme verbe « ceux qui ont ete injustes ont change ». L'injustice est definie comme mettre les choses a la mauvaise place — changer la parole divine est un acte d'injustice car on met une parole humaine a la place d'une parole divine.",
              axe5_frequence: "Pour la mission du khalifa, l'injustice est l'echec de la mission. Le khalifa injuste met les choses a la mauvaise place — il corrompt l'ordre divin au lieu de l'appliquer. Les enfants d'Israel injustes ont echoue a leur mission en changeant la parole qui devait les purifier."
            },
            "Obscurité/Ténèbres": {
              status: "probable",
              senses: ["obscurité", "ténèbres"],
              proof_ctx: "Les tenebres (zulm/zulumat) sont le sens physique de z-l-m. Le contexte utilise zalamuu dans son sens moral d'injustice. Les deux sens sont lies — l'injustice est une forme de tenebres morales. Mais le contexte specifie clairement un acte d'injustice (changer la parole), pas un etat physique d'obscurite."
            }
          }
        }
      },
      {
        word_key: "ghyr", position: 4, sense_chosen: "autre",
        analysis_axes: {
          concept_chosen: "Autre/Exclusion",
          concepts: {
            "Autre/Exclusion": {
              status: "retenu",
              senses: ["sauf", "excepté", "différent", "exclusion", "pas", "n'est pas", "sans", "autre"],
              proof_ctx: "Le mot ghayra est un nom accusatif de la racine gh-y-r. Le Lane's donne « other than, different from, not being, without ». Le mot indique l'alterite radicale — ce qu'ils ont dit est totalement different de ce qui avait ete prescrit. La construction qawlan ghayra alladhi qila lahum signifie « une parole autre que celle qui leur avait ete dite ». Le mot ghayra marque la rupture complete entre la parole prescrite et la parole prononcee.",
              axe1_verset: "Le mot ghayra est le pivot de l'accusation. Ce qui rend l'acte grave n'est pas simplement d'avoir parle mais d'avoir dit autre chose (ghayra). Le changement n'est pas une modification mineure mais une substitution totale — une parole radicalement differente. Le verset insiste sur cette alterite pour montrer la gravite de la corruption.",
              axe2_voisins: "Le verset 58 prescrivait une parole precise (hittatun). Ce verset 59 revele qu'une parole « autre » a ete prononcee. Le contraste entre la parole prescrite et la parole prononcee est le sujet central de ce verset. Les versets suivants continueront le recit des bienfaits de Dieu malgre cette corruption.",
              axe3_sourate: "La racine gh-y-r dans la sourate designe l'alterite et le changement. En 2:105, les incredules ne veulent pas qu'un bien descende sur les croyants. En 2:108, « celui qui substitue la foi par l'incredulite ». L'alterite dans la sourate est souvent liee a la corruption — remplacer le bien par le mal, la parole divine par une parole humaine.",
              axe4_coherence: "La racine gh-y-r apparait 163 fois dans le Coran. En 7:162, le verset parallele utilise le meme mot ghayra. Le concept d'alterite est central dans le Coran — il distingue le vrai du faux, le prescrit du corrompu. En 1:7, « non pas ceux qui ont encouru la colere ni ceux qui s'egarent » — ghayri marque l'exclusion des egares.",
              axe5_frequence: "Pour la mission du khalifa, l'alterite est le signe de la corruption. Le khalifa qui fait « autre chose » que ce qui est prescrit corrompt sa mission. Les enfants d'Israel ont dit autre chose que hitta — cette alterite est la preuve de leur corruption."
            }
          }
        }
      },
      {
        word_key: "nzl", position: 8, sense_chosen: "faire descendre",
        analysis_axes: {
          concept_chosen: "Descente/Révélation",
          concepts: {
            "Descente/Révélation": {
              status: "retenu",
              senses: ["pluie qui descend", "descendre", "faire descendre", "révéler", "envoyer d'en haut"],
              proof_ctx: "Le verbe anzalna est un accompli 1P forme IV de la racine n-z-l. Le Lane's donne « he sent down, caused to descend, revealed from above ». La forme IV (causatif) signifie « faire descendre activement ». Le sujet est Dieu (Nous) et l'objet est rijzan (chatiment). Le prefixe fa- indique la consequence — parce qu'ils ont change la parole, alors Nous avons fait descendre le chatiment.",
              axe1_verset: "Le verbe anzalna introduit le chatiment divin. La descente est depuis le ciel (mina al-sama'i) — le chatiment vient d'en haut, de la meme direction que les bienfaits. Le Dieu qui fait descendre la manne et les cailles fait aussi descendre le chatiment. La descente est un acte de souverainete — Dieu envoie d'en haut ce qu'Il veut.",
              axe2_voisins: "Le verset 57 mentionnait la descente de bienfaits (manne, cailles). Ce verset 59 mentionne la descente du chatiment. La meme racine n-z-l est utilisee pour les deux — la descente est un mecanisme divin neutre qui transmet bienfaits ou chatiments selon le merite. Les enfants d'Israel qui obeissent recoivent des bienfaits qui descendent ; ceux qui desobeissent recoivent un chatiment qui descend.",
              axe3_sourate: "La racine n-z-l est fondamentale dans la sourate al-Baqarah. Le Coran lui-meme est decrit comme « descendu » (2:2). La sourate utilise la descente pour la revelation, la pluie, la nourriture et le chatiment. Tout vient d'en haut — la guidance comme la punition. La descente est l'acte par lequel Dieu intervient dans le monde.",
              axe4_coherence: "La racine n-z-l apparait 293 fois dans le Coran. En 7:162, le verset parallele utilise le meme verbe anzalna pour le chatiment. La descente du chatiment est un theme recurrent — les peuples qui desobeissent recoivent un chatiment d'en haut. La pluie (bienfait) et le chatiment descendent tous deux du ciel.",
              axe5_frequence: "Pour la mission du khalifa, la descente est le mode d'intervention divine. Le khalifa recoit la guidance par la descente (revelation) et recoit le chatiment par la meme voie s'il desobeissait. Les enfants d'Israel font l'experience des deux descentes — bienfaits et chatiment."
            }
          }
        }
      },
      {
        word_key: "rjz", position: 12, sense_chosen: "châtiment",
        analysis_axes: {
          concept_chosen: "Châtiment/Fléau",
          concepts: {
            "Châtiment/Fléau": {
              status: "retenu",
              senses: ["tremblement", "châtiment", "souillure", "fléau"],
              proof_ctx: "Le mot rijzan est un nom accusatif indefini de la racine r-j-z. Le Lane's donne « punishment, plague, pestilence, anger, filth, uncleanness ». Le mot designe un chatiment physique concret — un fleau envoye par Dieu. L'indefini (rijzan, pas al-rijza) rend le chatiment indetermine dans sa forme — il peut etre une epidemie, une famine, ou tout autre fleau. La tradition rapporte que le chatiment fut une epidemie de peste.",
              axe1_verset: "Le mot rijzan est l'objet de anzalna — ce que Dieu fait descendre. Le chatiment est du ciel (mina al-sama'i) et frappe les injustes. Le verset lie directement la cause (ils ont change la parole) a la consequence (le chatiment). Le chatiment est proportionne a la faute — ceux qui corrompent la parole de pardon recoivent un fleau a la place du pardon.",
              axe2_voisins: "Le verset 58 promettait le pardon et l'augmentation. Ce verset 59 rapporte le chatiment. Le contraste est brutal — au lieu du pardon, un fleau. Les injustes ont transforme l'offre de pardon en occasion de chatiment par leur propre faute. Le verset 60 retournera aux bienfaits de Dieu (les sources).",
              axe3_sourate: "La racine r-j-z apparait dans la sourate pour designer le chatiment divin. Le chatiment est toujours la consequence d'une faute precise — il n'est jamais arbitraire. La sourate montre que la justice divine est exacte : chaque faute recoit un chatiment proportionne.",
              axe4_coherence: "La racine r-j-z apparait 10 fois dans le Coran. En 7:162, le verset parallele utilise le meme mot rijzan. En 7:134, les plaies d'Egypte sont designees comme rijz. En 34:5, le chatiment est un rijz. Le mot designe specifiquement un chatiment physique concret, distinct du chatiment eschatologique ('adhab).",
              axe5_frequence: "Pour la mission du khalifa, le chatiment est la consequence de la trahison de la mission. Le khalifa qui corrompt sa mission recoit un chatiment proportionne. Les enfants d'Israel ont recu un fleau du ciel parce qu'ils ont corrompu la parole divine qui devait les purifier."
            },
            "Impureté spirituelle": {
              status: "nul",
              senses: ["idole"],
              proof_ctx: "L'impurete spirituelle (idole) est un sens de r-j-z dans d'autres contextes. En 74:5, « fuis l'abomination (al-rujza) ». Ici le mot rijzan est clairement un chatiment envoye du ciel — c'est un fleau physique, pas une souillure spirituelle."
            }
          }
        }
      },
      {
        word_key: "smw", position: 14, sense_chosen: "ciel",
        analysis_axes: {
          concept_chosen: "Ciel/Ce qui couvre",
          concepts: {
            "Ciel/Ce qui couvre": {
              status: "retenu",
              senses: ["semelle supérieure", "céleste", "pièce de tissu supérieure", "bounty", "ciel", "toit", "nuage", "pluie", "herbage", "dos"],
              proof_ctx: "Le mot al-sama'i est un nom feminin singulier defini genitif de la racine s-m-w. Le Lane's donne « heaven, sky, that which is above, canopy, ceiling, rain ». Le ciel est ce qui couvre et ce qui est en haut. Le mot est ici le complement de mina (du ciel) — le chatiment descend depuis le ciel. Le ciel est la source d'ou proviennent les decrets divins — bienfaits comme chatiments.",
              axe1_verset: "Le mot al-sama'i precise l'origine du chatiment. Le chatiment ne vient pas des hommes mais du ciel — c'est un acte divin. La descente depuis le ciel confere au chatiment une autorite cosmique — il n'y a pas d'echappatoire a un chatiment celeste. Le ciel etait la source des bienfaits (manne et cailles) et devient la source du chatiment.",
              axe2_voisins: "Le verset 57 mentionnait les bienfaits venant du ciel (l'ombre du nuage, la manne). Ce verset 59 utilise le meme ciel comme source de chatiment. Le parallele est frappant — le meme ciel envoie la manne et le chatiment. Le ciel est un instrument neutre de la volonte divine.",
              axe3_sourate: "Le mot sama' est tres frequent dans la sourate al-Baqarah. En 2:19, un orage vient du ciel. En 2:22, le ciel est un toit et la pluie descend. En 2:144, le Prophete leve son regard vers le ciel. Le ciel est le lieu d'ou descend la guidance, la subsistance et le chatiment.",
              axe4_coherence: "La racine s-m-w apparait 381 fois dans le Coran pour le ciel. Le ciel est le lieu de l'autorite divine — tout ce qui en descend a une origine divine. En 7:162, le verset parallele utilise la meme expression « mina al-sama'i ». Le chatiment celeste est un theme recurrent pour les peuples desobeissants.",
              axe5_frequence: "Pour la mission du khalifa, le ciel est la source de l'autorite. Le khalifa recoit son mandat du ciel (par la revelation) et rend des comptes au ciel. Les enfants d'Israel recoivent du ciel la nourriture et le chatiment — les deux aspects de la relation avec le Createur."
            }
          }
        }
      },
      {
        word_key: "knw", position: 16, sense_chosen: "être",
        analysis_axes: {
          concept_chosen: "Existence/Devenir",
          concepts: {
            "Existence/Devenir": {
              status: "retenu",
              senses: ["être", "exister", "devenir"],
              proof_ctx: "Le verbe kanuu est un accompli 3MP de la racine k-w-n. Le Lane's donne « they were, they used to be ». Le verbe kana avec l'inaccompli (kanuu yafsuquna) indique une action continue dans le passe — « ils etaient [habituellement] en train de transgresser ». La forme accompli + inaccompli cree un aspect duratif — la transgression n'est pas un acte ponctuel mais une habitude.",
              axe1_verset: "Le verbe kanuu avec yafsuquna explique la cause profonde du chatiment. Le chatiment ne sanctionne pas un acte isole mais une habitude de transgression. La formule bima kanuu yafsuquna (a cause de leur transgression habituelle) montre que le chatiment est la consequence d'un comportement persistant, pas d'un seul ecart.",
              axe2_voisins: "Les versets precedents montraient des actes specifiques de desobeissance. Ce verset 59 revele que ces actes sont le fruit d'une habitude de transgression (kanuu yafsuquna). La forme durative montre que la faute n'est pas accidentelle mais enracinee. Le verset 60 retournera aux bienfaits divins — Dieu continue de pourvoir malgre la transgression habituelle.",
              axe3_sourate: "Le verbe kana est le plus frequent de la sourate — il sert a decrire les etats durables des personnes et des peuples. La formule kanuu + inaccompli revient souvent pour decrire les habitudes des incredules (kanuu yakfuruna, kanuu yakdhibuna). La sourate distingue les actes ponctuels des habitudes enracinees.",
              axe4_coherence: "La racine k-w-n est la plus frequente du Coran (environ 1390 occurrences). Le verbe kana sert de copule et d'auxiliaire pour decrire les etats passes et les habitudes. La formule kanuu yafsuquna est un schema recurrent — elle designe une transgression enracinee et persistante.",
              axe5_frequence: "Pour la mission du khalifa, l'habitude de transgression est l'echec chronique. Le khalifa qui transgresse habituellement (pas ponctuellement) perd sa legitimite. Les enfants d'Israel etaient des transgresseurs habituels — le chatiment sanctionne cette habitude, pas un seul acte."
            }
          }
        }
      },
      {
        word_key: "fsq", position: 17, sense_chosen: "transgresser",
        analysis_axes: {
          concept_chosen: "Transgression/Rébellion",
          concepts: {
            "Transgression/Rébellion": {
              status: "retenu",
              senses: ["sortir de l'obéissance", "désobéir", "pervers"],
              proof_ctx: "Le verbe yafsuquna est un inaccompli 3MP de la racine f-s-q. Le Lane's donne « he departed from obedience, he transgressed, he became a fasiq (deviator) ». Le sens premier est sortir — la datte qui sort de sa peau (fassaqat al-tamra). Le transgresseur est celui qui sort du cadre de l'obeissance. L'inaccompli avec kanuu indique que la transgression etait continue et habituelle.",
              axe1_verset: "Le verbe yafsuquna cloture le verset par l'explication causale du chatiment. La cause du chatiment est la transgression habituelle (bima kanuu yafsuquna). Le fisq (transgression) est plus grave que le simple peche — c'est une sortie deliberee du cadre de l'obeissance. Les injustes ne se sont pas simplement trompes — ils ont choisi de transgresser de maniere repetee.",
              axe2_voisins: "Le verset 58 ordonnait l'obeissance (entrez, prosternez-vous, dites hitta). Ce verset 59 revele la transgression (ils ont change la parole). Le contraste obeissance-transgression structure les deux versets. Le fisq est l'exact oppose du taqwa — tandis que le taqwa est la protection contre le mal, le fisq est la sortie volontaire de l'obeissance.",
              axe3_sourate: "La racine f-s-q dans la sourate designe la deviation morale. En 2:26, les fasiqin sont ceux qui s'egarent par les paraboles. En 2:99, les versets sont clairs mais seuls les fasiqin les rejettent. La sourate presente le fisq comme un choix delibere — les fasiqin ont la connaissance mais choisissent de transgresser.",
              axe4_coherence: "La racine f-s-q apparait 54 fois dans le Coran. En 7:163, le verset parallele mentionne les memes fasiqin. Le fasiq est celui qui connait les limites et les depasse volontairement. En 49:6, si un fasiq apporte une nouvelle, verifiez — le fasiq n'est pas digne de confiance. La transgression est un defaut de caractere, pas un acte isole.",
              axe5_frequence: "Pour la mission du khalifa, le fisq est la disqualification. Le khalifa fasiq (transgresseur) est disqualifie pour sa mission car il sort des limites fixees par Dieu. Les enfants d'Israel fasiqin ont perdu leur droit aux bienfaits promis en sortant de l'obeissance."
            }
          }
        }
      }
    ]
  },

  // =====================================================
  // VERSET 2:60
  // verse_id=67, analysis_id=427
  // "Lorsque Moise demanda de l'eau pour son peuple, Nous avons dit :
  //  Frappe le rocher de ton baton. Alors douze sources en jaillirent.
  //  Chaque groupe sut son abreuvoir. Mangez et buvez de la provision
  //  de Dieu et ne semez pas la corruption sur terre."
  // =====================================================
  60: {
    verse_id: 67,
    analysis_id: 427,
    translation_arab: "Et lorsque Moise demanda de l'eau pour son peuple, Nous avons dit : Frappe le rocher de ton baton. Alors douze sources en jaillirent. Chaque groupe sut son abreuvoir. Mangez et buvez de la provision de Dieu et ne semez pas la corruption sur terre.",
    full_translation: "Et lorsque Moise demanda a boire pour son peuple, Nous dimes : Frappe la pierre de ton baton. Douze sources en jaillirent alors. Chaque groupe d'hommes connut son point d'eau. Mangez et buvez de la provision de Dieu, et ne commettez pas de corruption sur la terre.",
    translation_explanation: `§DEMARCHE§
Ce verset rapporte le miracle de l'eau dans le desert. Le verbe **istasqa** est un accompli 3MS forme X de la racine s-q-y. Le Lane's donne « he asked for water, he requested to be given drink ». La forme X (demande) signifie « demander a boire, solliciter de l'eau ». Moise demande a Dieu de l'eau pour son peuple — c'est une intercession. Le mot **li-qawmihi** est un nom masculin singulier genitif avec pronom 3MS de la racine q-w-m, precede de la preposition li. Le Lane's donne « people, nation, tribe, community ». Le peuple designe les enfants d'Israel dans le desert. Le verbe **qulna** est un accompli 1P de la racine q-w-l. Le Lane's donne « We said ». Dieu repond a la demande de Moise par un ordre. Le verbe **idrib** est un imperatif 2MS de la racine d-r-b. Le Lane's donne « strike, hit, beat ». L'imperatif ordonne a Moise de frapper — un acte physique qui declenchera le miracle. Le mot **bi-'asaka** est un nom masculin singulier genitif avec pronom 2MS de la racine e-s-w, precede de la preposition bi. Le Lane's donne « staff, rod, stick ». Le baton est l'instrument du miracle. Le mot **al-hajara** est un nom masculin singulier defini accusatif de la racine h-j-r. Le Lane's donne « stone, rock ». La pierre est l'objet frappe — une roche specifique (l'article defini). Le verbe **infajarat** est un accompli 3FS forme VII de la racine f-j-r. Le Lane's donne « it burst forth, it gushed out ». La forme VII (reflexif/passif) signifie « eclater de soi-meme, jaillir ». Le mot **ithnataa** est un nombre cardinal feminin duel de la racine th-n-y. Le Lane's donne « two ». Avec 'ashrata (dix), il forme « douze ». Le mot **'aynan** est un nom feminin singulier accusatif indefini de la racine e-y-n. Le Lane's donne « spring, source, eye ». La source est un point d'eau naturel jaillissant. Le verbe **'alima** est un accompli 3MS de la racine e-l-m. Le Lane's donne « he knew, learned ». Le mot **kullu** est un nom masculin singulier nominatif de la racine k-l-l. Le Lane's donne « every, each, all, totality ». Le mot **unasin** est un nom pluriel genitif indefini de la racine a-n-s. Le Lane's donne « people, human beings, men ». Le mot **mashrabahum** (leur abreuvoir) est un nom genitif avec pronom 3MP. Le verbe **kuluu** est un imperatif 2MP de la racine a-k-l. Le Lane's donne « eat ». Le mot **rizqi** est un nom masculin genitif de la racine r-z-q. Le Lane's donne « provision, sustenance, means of living ». Le mot **Allahi** est le nom divin au genitif de la racine a-l-h. Le verbe **ta'thaw** est un inaccompli 2MP majzum de la racine e-th-w. Le Lane's donne « he did mischief, he acted corruptly ». Le mot **al-ardi** est un nom feminin singulier defini genitif de la racine a-r-d. Le Lane's donne « earth, land, ground ». Le mot **mufsidina** est un participe actif pluriel forme IV de la racine f-s-d. Le Lane's donne « those who corrupt, who cause disorder ».

§JUSTIFICATION§
**demanda a boire** — Le sens retenu est « abreuver ». Le verbe istasqa forme X signifie demander de l'eau. L'alternative « irriguer » est ecartee car le contexte est une demande urgente de boisson pour un peuple assoiffe, pas une technique agricole.

**peuple** — Le sens retenu est « peuple ». Le mot qawmihi designe la communaute de Moise. L'alternative « se lever » est ecartee car le mot est ici un nom (peuple), pas un verbe (se lever).

**Frappe** — Le sens retenu est « frapper ». Le verbe idrib ordonne un coup physique sur la pierre. L'alternative « etablir » est ecartee car le contexte decrit un acte physique concret (frapper un rocher), pas l'etablissement d'une institution.

**baton** — Le sens retenu est « baton ». Le mot 'asa designe l'instrument de Moise. L'alternative « desobeir » est ecartee car le mot est un nom (baton), pas un verbe.

**rocher** — Le sens retenu est « pierre ». Le mot al-hajara designe la roche frappee. L'alternative « interdit » est ecartee car le contexte est physique (un rocher que l'on frappe).

**jaillirent** — Le sens retenu est « jaillir ». Le verbe infajarat forme VII designe l'eclatement de l'eau. L'alternative « aube » est ecartee car le contexte decrit un jaillissement d'eau, pas un lever du jour.

**douze** — Le sens retenu est « deux ». Le mot ithnataa avec 'ashrata forme le nombre douze. L'alternative « plier » est ecartee car le mot est un nombre cardinal.

**sources** — Le sens retenu est « source ». Le mot 'aynan designe un point d'eau jaillissant. L'alternative « oeil » est ecartee car le contexte parle de sources d'eau dans un rocher.

**sut** — Le sens retenu est « savoir ». Le verbe 'alima signifie connaitre. L'alternative « les mondes » est ecartee car le verbe est a la forme accompli 3MS (il sut), pas au pluriel nominal.

**chaque** — Le sens retenu est « chaque ». Le mot kullu designe la totalite distributive. L'alternative « s'emousser » est ecartee car le contexte est distributif (chaque groupe).

**groupe** — Le sens retenu est « humains ». Le mot unasin designe un groupe de personnes. L'alternative « percevoir » est ecartee car le mot est un nom pluriel (gens), pas un verbe de perception.

**provision** — Le sens retenu est « subsistance ». Le mot rizqi designe ce que Dieu pourvoit. Pas d'alternative pertinente dans ce contexte.

**Dieu** — Le sens retenu est « Dieu ». Le mot Allah est le nom propre de la divinite. Pas d'alternative pertinente.

**ne semez pas le desordre** — Le sens retenu est « corrompre ». Le verbe ta'thaw signifie faire du mal, semer le desordre. Pas d'alternative pertinente.

**terre** — Le sens retenu est « terre ». Le mot al-ardi designe la terre, le sol. L'alternative « tremblement » est ecartee car le contexte est geographique (la terre comme lieu de vie).

**corrupteurs** — Le sens retenu est « corrompre ». Le mot mufsidina designe ceux qui causent la corruption. Pas d'alternative pertinente.

§CRITIQUE§
**demanda a boire vs implora de l'eau** — Le Lane's donne « he asked for water ». « Demanda a boire » est plus exact que « implora » car la forme X est une demande, pas une supplication desesperee. Moise demande a Dieu, pas aux hommes.
**frappe vs heurte** — Le Lane's donne « strike, hit ». « Frappe » est plus direct et energique que « heurte ». L'ordre divin est un acte de puissance, pas un contact accidentel.
**sources vs fontaines** — Le Lane's donne « spring, eye ». « Sources » est plus precis que « fontaines » car le mot 'ayn designe un jaillissement naturel, pas une construction humaine. Les sources jaillissent du rocher, elles ne sont pas amenagees.`,
    segments: [
      { fr: "et lorsque", phon: "wa-idhi", arabic: "وَإِذِ", is_particle: true, position: 0 },
      { fr: "demanda a boire", pos: "verbe", phon: "istasqa", arabic: "ٱسْتَسْقَYٰ", word_key: "sqy", is_particle: false, sense_retenu: "demander a boire", position: 1 },
      { fr: "Moise", phon: "Musa", arabic: "مُوسَYٰ", is_particle: true, position: 2 },
      { fr: "pour son peuple", pos: "nom", phon: "li-qawmihi", arabic: "لِقَوْمِهِ.", word_key: "qwm", is_particle: false, sense_retenu: "peuple", position: 3 },
      { fr: "Nous dimes", pos: "verbe", phon: "fa-qulna", arabic: "فَقُلْنَا", word_key: "qwl", is_particle: false, sense_retenu: "dire", position: 4 },
      { fr: "frappe", pos: "verbe", phon: "idrib", arabic: "ٱضْرِب", word_key: "drb", is_particle: false, sense_retenu: "frapper", position: 5 },
      { fr: "de ton baton", pos: "nom", phon: "bi-'asaka", arabic: "بِّعَصَاكَ", word_key: "esw", is_particle: false, sense_retenu: "baton", position: 6 },
      { fr: "le rocher", pos: "nom", phon: "al-hajara", arabic: "ٱلْحَجَرَ", word_key: "hjr", is_particle: false, sense_retenu: "pierre", position: 7 },
      { fr: "jaillirent", pos: "verbe", phon: "fa-infajarat", arabic: "فَٱنفَجَرَتْ", word_key: "fjr", is_particle: false, sense_retenu: "jaillir", position: 8 },
      { fr: "de lui", phon: "minhu", arabic: "مِنْهُ", is_particle: true, position: 9 },
      { fr: "douze", pos: "nom", phon: "ithnataa", arabic: "ٱثْنَتَا", word_key: "thny", is_particle: false, sense_retenu: "deux", position: 10 },
      { fr: "dix", pos: "nom", phon: "'ashrata", arabic: "عَشْرَةَ", word_key: "eyn", is_particle: false, sense_retenu: "dix", position: 11 },
      { fr: "sources", pos: "nom", phon: "'aynan", arabic: "عَيْنًا", word_key: "eyn", is_particle: false, sense_retenu: "source", position: 12 },
      { fr: "certes", phon: "qad", arabic: "قَدْ", is_particle: true, position: 13 },
      { fr: "sut", pos: "verbe", phon: "'alima", arabic: "عَلِمَ", word_key: "elm", is_particle: false, sense_retenu: "savoir", position: 14 },
      { fr: "chaque", pos: "nom", phon: "kullu", arabic: "كُلُّ", word_key: "kll", is_particle: false, sense_retenu: "chaque", position: 15 },
      { fr: "groupe d'hommes", pos: "nom", phon: "unasin", arabic: "أُنَاسٍ", word_key: "ans", is_particle: false, sense_retenu: "humains", position: 16 },
      { fr: "leur abreuvoir", phon: "mashrabahum", arabic: "مَّشْرَبَهُمْ", is_particle: true, position: 17 },
      { fr: "mangez", pos: "verbe", phon: "kuluu", arabic: "كُلُوا۟", word_key: "akl", is_particle: false, sense_retenu: "manger", position: 18 },
      { fr: "et buvez", phon: "wa-ishrabuu", arabic: "وَٱشْرَبُوا۟", is_particle: true, position: 19 },
      { fr: "de", phon: "min", arabic: "مِن", is_particle: true, position: 20 },
      { fr: "la provision", pos: "nom", phon: "rizqi", arabic: "رِّزْقِ", word_key: "rzq", is_particle: false, sense_retenu: "subsistance", position: 21 },
      { fr: "de Dieu", pos: "nom", phon: "Allahi", arabic: "ٱللَّهِ", word_key: "alh", is_particle: false, sense_retenu: "Dieu", position: 22 },
      { fr: "et ne", phon: "wa-la", arabic: "وَلَا", is_particle: true, position: 23 },
      { fr: "semez le desordre", pos: "verbe", phon: "ta'thaw", arabic: "تَعْثَوْا۟", word_key: "ethw", is_particle: false, sense_retenu: "corrompre", position: 24 },
      { fr: "sur", phon: "fi", arabic: "فِY", is_particle: true, position: 25 },
      { fr: "la terre", pos: "nom", phon: "al-ardi", arabic: "ٱلْأَرْضِ", word_key: "ard", is_particle: false, sense_retenu: "terre", position: 26 },
      { fr: "en corrupteurs", pos: "nom", phon: "mufsidina", arabic: "مُفْسِدِينَ", word_key: "fsd", is_particle: false, sense_retenu: "corrompre", position: 27 }
    ],
    words: [
      {
        word_key: "sqy", position: 1, sense_chosen: "demander à boire",
        analysis_axes: {
          concept_chosen: "Irrigation/Don",
          concepts: {
            "Irrigation/Don": {
              status: "retenu",
              senses: ["abreuver", "irriguer", "donner à boire"],
              proof_ctx: "Le verbe istasqa est un accompli 3MS forme X de la racine s-q-y. Le Lane's donne « he asked for water, he requested to be given drink, he prayed for rain ». La forme X (istaf'ala) est une forme de demande — demander a etre abreuve. Le sujet est Moise — il demande a Dieu de l'eau pour son peuple. La demande est une intercession — Moise agit comme intermediaire entre son peuple assoiffe et Dieu.",
              axe1_verset: "Le verbe istasqa ouvre le verset par la presentation du besoin. Le peuple a soif dans le desert et Moise demande l'eau a Dieu. La demande est directe (forme X = demander explicitement) et altruiste (li-qawmihi = pour son peuple). Dieu repond immediatement par un ordre (frappe le rocher). La sequence demande-reponse montre la relation entre le prophete et Dieu — le prophete demande et Dieu pourvoit.",
              axe2_voisins: "Le verset 57 mentionnait la manne et les cailles (nourriture). Ce verset 60 traite de l'eau — l'autre besoin vital. La sequence nourriture-eau complete la provision divine dans le desert. Le verset 58 offrait l'abondance de la cite ; le verset 60 montre l'abondance du desert (douze sources). Dieu pourvoit dans tous les milieux.",
              axe3_sourate: "La racine s-q-y dans le Coran designe l'acte de donner a boire. En 2:71, la vache qui n'irrigue pas. En 76:21, les habitants du Paradis sont abreuves. L'eau est un bienfait divin fondamental — sans eau, pas de vie. La sourate montre que Dieu controle l'eau et la donne a qui Il veut.",
              axe4_coherence: "La racine s-q-y apparait 36 fois dans le Coran. En 7:160, le verset parallele reprend exactement le meme recit avec istasqa. En 26:79, Abraham dit « c'est Lui qui me donne a manger et a boire ». L'eau est toujours presentee comme un don divin. La forme X (demander a boire) souligne la dependance du serviteur envers Dieu.",
              axe5_frequence: "Pour la mission du khalifa, la demande d'eau montre la dependance du khalifa envers Dieu. Le khalifa ne peut pas accomplir sa mission sans les provisions divines. Moise demande et Dieu pourvoit — le khalifa doit demander avant de recevoir."
            }
          }
        }
      },
      {
        word_key: "qwm", position: 3, sense_chosen: "peuple",
        analysis_axes: {
          concept_chosen: "Peuple/Communauté",
          concepts: {
            "Peuple/Communauté": {
              status: "retenu",
              senses: ["peuple", "communauté", "tribu", "nation", "groupe"],
              proof_ctx: "Le mot qawmihi est un nom masculin singulier genitif avec pronom 3MS de la racine q-w-m. Le Lane's donne « people, folk, community, a body of men ». Le peuple de Moise designe les enfants d'Israel collectivement. Le pronom possessif (son peuple) lie Moise a son peuple — il est leur leader et leur intercesseur. Le mot est precede de li (pour son peuple) — la demande est faite au benefice du groupe.",
              axe1_verset: "Le mot qawmihi identifie les beneficiaires de la demande de Moise. Moise ne demande pas pour lui-meme mais pour son peuple. L'intercession de Moise est altruiste — le leader demande pour sa communaute. Le verset montre que la relation entre le leader et le peuple passe par Dieu — Moise demande a Dieu pour son peuple, pas au peuple pour lui-meme.",
              axe2_voisins: "Les versets precedents s'adressaient aux enfants d'Israel collectivement (ya bani Isra'il). Ce verset 60 designe le meme groupe comme « le peuple de Moise ». Le changement d'appellation est significatif — de « enfants d'Israel » (filiation) a « peuple de Moise » (leadership). Le peuple est defini par son leader.",
              axe3_sourate: "La racine q-w-m dans la sourate designe les peuples et les communautes. En 2:143, la communaute musulmane est un « peuple median ». La sourate compare les peuples — celui de Moise, celui de Muhammad, les peuples anciens. Chaque peuple est juge selon sa reponse a la guidance divine.",
              axe4_coherence: "La racine q-w-m apparait 660 fois dans le Coran. Le mot qawm designe systematiquement un groupe lie par un leader ou une identite commune. En 7:160, le verset parallele utilise le meme mot qawmihi. En 5:20, Moise dit « o mon peuple ». Le lien entre le prophete et son peuple est un theme central.",
              axe5_frequence: "Pour la mission du khalifa, le peuple est la communaute dont le khalifa est responsable. Le khalifa intercede pour son peuple et lui procure ce dont il a besoin. Moise est le modele du leader qui demande a Dieu pour son peuple."
            },
            "Verticalité/Droiture": {
              status: "probable",
              senses: ["se lever", "se dresser", "droit", "rectitude", "redresser", "corriger", "se tenir debout"],
              proof_ctx: "La verticalite est le sens premier de q-w-m (se tenir debout). Le contexte utilise qawm dans son sens de « peuple, communaute » — un groupe de personnes. Le lien entre les deux sens est que le peuple est ce qui se dresse ensemble, ce qui se tient debout collectivement."
            }
          }
        }
      },
      {
        word_key: "drb", position: 5, sense_chosen: "frapper",
        analysis_axes: {
          concept_chosen: "Frappe/Coup",
          concepts: {
            "Frappe/Coup": {
              status: "retenu",
              senses: ["frapper", "battre"],
              proof_ctx: "Le verbe idrib est un imperatif 2MS de la racine d-r-b. Le Lane's donne « strike, hit, beat, smite ». L'imperatif ordonne a Moise un acte physique precis — frapper le rocher avec son baton. Le sens est exclusivement physique dans ce contexte — un coup porte sur une pierre pour en faire jaillir l'eau. Il n'y a aucune dimension metaphorique ou institutionnelle ici.",
              axe1_verset: "Le verbe idrib est l'ordre central du verset — c'est l'acte qui declenche le miracle. Dieu ordonne a Moise de frapper, et l'eau jaillit. La frappe est un acte simple mais ses consequences sont extraordinaires — d'un coup sur une pierre naissent douze sources. Le miracle repose sur l'obeissance — Moise frappe parce que Dieu le lui ordonne.",
              axe2_voisins: "Les versets precedents (58-59) traitaient de l'entree dans la cite et de la corruption de la parole. Ce verset 60 retourne au desert et au miracle de l'eau. La frappe sur le rocher est un miracle de provision — Dieu pourvoit meme dans le desert sterile. Le retour aux miracles du desert apres l'episode de la cite montre que la narration n'est pas chronologique mais thematique.",
              axe3_sourate: "La racine d-r-b dans la sourate porte plusieurs sens. En 2:26, Dieu « frappe un exemple » (daraba mathalan). En 2:60, Moise frappe le rocher. En 2:73, il est ordonne de frapper le mort avec un morceau de la vache. La sourate utilise la frappe dans ses deux sens — physique (frapper un objet) et metaphorique (donner un exemple).",
              axe4_coherence: "La racine d-r-b apparait 58 fois dans le Coran. En 7:160, le verset parallele utilise le meme verbe idrib. En 20:77, Moise recoit un ordre similaire (frappe un chemin dans la mer). La frappe mosaique est un motif recurrent — Moise frappe et Dieu fait jaillir le miracle. La frappe est l'acte humain minimal qui declenche l'intervention divine.",
              axe5_frequence: "Pour la mission du khalifa, la frappe represente l'action humaine qui active la providence divine. Le khalifa ne reste pas passif — il agit (frappe) et Dieu fait le reste (le jaillissement). L'obeissance active est le mode d'operation du khalifa."
            },
            "Établissement/Institution": {
              status: "nul",
              senses: ["donner un exemple", "établir", "frapper la monnaie", "dresser une tente"],
              proof_ctx: "Le sens d'etablissement (donner un exemple, frapper la monnaie) est un sens derive de d-r-b. Le contexte est exclusivement physique — un ordre de frapper un rocher avec un baton. La construction idrib bi-'asaka al-hajara (frappe de ton baton le rocher) est clairement un acte physique concret."
            },
            "Déplacement": {
              status: "nul",
              senses: ["voyager"],
              proof_ctx: "Le voyage est un sens de d-r-b (daraba fi al-ard = voyager sur la terre). Le contexte est un ordre de frapper un objet precis (le rocher), pas un ordre de se deplacer."
            }
          }
        }
      },
      {
        word_key: "esw", position: 6, sense_chosen: "bâton",
        analysis_axes: {
          concept_chosen: "Instrument/Appui",
          concepts: {
            "Instrument/Appui": {
              status: "retenu",
              senses: ["bâton", "canne"],
              proof_ctx: "Le mot bi-'asaka est un nom masculin singulier genitif avec pronom 2MS de la racine e-s-w precede de la preposition bi (instrument). Le Lane's donne « staff, stick, rod, walking-stick ». Le baton de Moise est un instrument de pouvoir prophetique. La preposition bi indique l'instrument — « avec ton baton ». Le pronom possessif (ton baton) lie l'instrument a Moise personnellement.",
              axe1_verset: "Le mot bi-'asaka est l'instrument de la frappe — Moise frappe le rocher avec son baton. Le baton est l'intermediaire entre l'ordre divin et le resultat miraculeux. Le baton en lui-meme est un objet ordinaire — c'est l'ordre divin qui le transforme en instrument de miracle. Le verset montre que l'instrument est secondaire par rapport a l'obeissance.",
              axe2_voisins: "Le baton de Moise n'apparaissait pas dans les versets precedents de cette section. Son introduction en 2:60 ancre le recit dans la tradition mosaique. En 20:18, Moise decrit son baton : « je m'y appuie, je fais tomber des feuilles pour mes brebis ». Le baton est un objet quotidien transforme en instrument miraculeux.",
              axe3_sourate: "Le baton de Moise est mentionne dans la sourate pour ce miracle specifique. La sourate ne detaille pas les autres usages du baton (serpent, mer). L'accent est mis sur la provision — le baton fait jaillir l'eau. La sourate selectionne les episodes qui illustrent les bienfaits divins.",
              axe4_coherence: "La racine e-s-w apparait 12 fois dans le Coran. En 7:160, le verset parallele mentionne le meme baton. En 20:18, Moise parle de son baton. En 7:107, le baton se transforme en serpent. Le baton de Moise est l'instrument miraculeux par excellence — il sert a plusieurs miracles differents.",
              axe5_frequence: "Pour la mission du khalifa, le baton represente les moyens mis a disposition par Dieu. Le khalifa dispose d'instruments pour accomplir sa mission — ces instruments sont ordinaires mais deviennent extraordinaires par l'obeissance a Dieu."
            },
            "Rébellion": {
              status: "nul",
              senses: ["désobéir"],
              proof_ctx: "La desobeissance ('asa = desobeir) est un sens de la racine e-s-w avec une vocalisation differente. Le contexte utilise 'asa dans son sens de « baton, canne » — un nom concret d'objet, pas un verbe de rebellion."
            }
          }
        }
      },
      {
        word_key: "hjr", position: 7, sense_chosen: "pierre",
        analysis_axes: {
          concept_chosen: "Pierre/Matériau",
          concepts: {
            "Pierre/Matériau": {
              status: "retenu",
              senses: ["roche", "pierre"],
              proof_ctx: "Le mot al-hajara est un nom masculin singulier defini accusatif de la racine h-j-r. Le Lane's donne « stone, rock, a hard mass of mineral matter ». L'article defini (al-) indique une pierre specifique et connue — pas n'importe quelle pierre mais « la » pierre. La tradition identifie cette pierre a un rocher precis que Moise transportait dans le desert. La pierre est l'objet de la frappe et la source du miracle.",
              axe1_verset: "Le mot al-hajara est l'objet de idrib — ce que Moise doit frapper. La pierre est dure et sterile en apparence — rien n'indique qu'elle contient de l'eau. Le miracle est dans le contraste entre la durete de la pierre et le jaillissement de douze sources. La pierre obeit a Dieu mieux que les enfants d'Israel — elle donne quand Dieu ordonne.",
              axe2_voisins: "Les versets precedents mentionnaient la cite (qaryata, v58) — un etablissement humain. Ce verset 60 retourne au desert et a la pierre — un element naturel brut. Le contraste cite-pierre montre que Dieu pourvoit dans tous les environnements. La cite offre la nourriture ; la pierre offre l'eau.",
              axe3_sourate: "La racine h-j-r dans la sourate designe la matiere minerale. En 2:24, les pierres sont le combustible de l'Enfer. En 2:60, la pierre est la source d'eau. La pierre a une double valence — elle peut etre chatiment ou bienfait. Dans les deux cas, la pierre obeit a Dieu.",
              axe4_coherence: "La racine h-j-r apparait 24 fois dans le Coran. En 7:160, le verset parallele utilise le meme mot al-hajara. En 2:74, les coeurs sont decrits comme des pierres ou plus durs — et certaines pierres laissent jaillir des ruisseaux. Le parallele entre 2:60 et 2:74 est frappant — la pierre qui donne de l'eau est plus sensible que le coeur qui refuse.",
              axe5_frequence: "Pour la mission du khalifa, la pierre represente les ressources cachees. Le khalifa doit savoir ou frapper pour faire jaillir les ressources. La terre confiee au khalifa contient des bienfaits caches — il faut l'obeissance a Dieu pour les reveler."
            }
          }
        }
      },
      {
        word_key: "fjr", position: 8, sense_chosen: "jaillir",
        analysis_axes: {
          concept_chosen: "Éclatement",
          concepts: {
            "Éclatement": {
              status: "retenu",
              senses: ["jaillir"],
              proof_ctx: "Le verbe infajarat est un accompli 3FS forme VII de la racine f-j-r. Le Lane's donne « it burst forth, it gushed out, it broke out ». La forme VII (infi'al) est une forme medio-passive — le jaillissement se produit de lui-meme apres la cause (la frappe). Le sujet implicite est l'eau — elle eclate de la pierre. Le temps accompli indique que le resultat est immediat apres la frappe.",
              axe1_verset: "Le verbe infajarat decrit le resultat immediat de la frappe. Moise frappe (idrib) et l'eau jaillit (infajarat). La sequence cause-effet est instantanee — pas d'attente, pas de delai. Le jaillissement est spectaculaire — douze sources eclatent d'un seul rocher. Le miracle est dans la disproportion entre l'acte (un coup) et le resultat (douze sources).",
              axe2_voisins: "Le verset 59 decrivait un chatiment descendant du ciel. Ce verset 60 decrit un bienfait jaillissant de la terre. La descente et le jaillissement sont deux mouvements opposes — le chatiment descend, le bienfait monte. Dieu utilise toutes les directions pour intervenir.",
              axe3_sourate: "La racine f-j-r dans la sourate est associee au jaillissement. En 2:74, certaines pierres laissent jaillir des ruisseaux (yatafajjaru). Le parallele entre 2:60 (infajarat) et 2:74 (yatafajjaru) est direct — les pierres qui font jaillir l'eau sont plus sensibles que les coeurs endurcis.",
              axe4_coherence: "La racine f-j-r apparait 17 fois dans le Coran. En 7:160, le verset parallele utilise inbajasat (couler) au lieu d'infajarat (jaillir). La difference est significative — 2:60 utilise le terme plus explosif (jaillir, eclater) tandis que 7:160 utilise un terme plus doux (couler doucement). Le Coran varie les expressions pour le meme evenement.",
              axe5_frequence: "Pour la mission du khalifa, le jaillissement represente la reponse divine a l'action du khalifa. Le khalifa frappe (agit avec obeissance) et les bienfaits jaillissent. La provision divine eclate quand l'obeissance est sincere."
            },
            "Commencement/Lumière": {
              status: "nul",
              senses: ["aube", "aurore"],
              proof_ctx: "L'aube (fajr) est un sens de f-j-r lie au jaillissement de la lumiere. Le contexte utilise infajarat pour le jaillissement de l'eau, pas de la lumiere. Le sens est clairement hydrologique (l'eau eclate de la pierre)."
            },
            "Transgression": {
              status: "nul",
              senses: ["débauche"],
              proof_ctx: "La debauche (fujur) est un sens moral de f-j-r lie a l'eclatement des limites morales. Le contexte est un miracle physique (jaillissement d'eau), pas un acte de transgression morale."
            }
          }
        }
      },
      {
        word_key: "thny", position: 10, sense_chosen: "deux",
        analysis_axes: {
          concept_chosen: "Dualité/Répétition",
          concepts: {
            "Dualité/Répétition": {
              status: "retenu",
              senses: ["plier", "répéter", "deux", "deuxième"],
              proof_ctx: "Le mot ithnataa est un nombre cardinal feminin duel de la racine th-n-y. Le Lane's donne « two ». Le duel feminin (ithnataa au lieu de ithnaani) s'accorde avec 'ashrata (forme feminine de dix) pour former le nombre compose douze (ithnataa 'ashrata 'aynan = douze sources). Le nombre douze correspond aux douze tribus d'Israel — chaque tribu recoit sa propre source.",
              axe1_verset: "Le mot ithnataa 'ashrata precise le nombre de sources — douze exactement. Le chiffre n'est pas arbitraire — il correspond aux douze tribus d'Israel. Chaque tribu a sa source propre pour eviter les conflits. Le miracle est non seulement dans le jaillissement mais dans l'organisation — Dieu pourvoit de maniere ordonnee, une source par tribu.",
              axe2_voisins: "Les versets precedents traitaient de la cite et de ses portes. Ce verset 60 parle de douze sources dans le desert. Le nombre douze est un marqueur des enfants d'Israel — douze tribus, douze sources. La provision divine est adaptee a la structure sociale du peuple.",
              axe3_sourate: "Le nombre douze dans la sourate est specifique a cet episode. La sourate ne mentionne pas explicitement les douze tribus mais le nombre les evoque directement. L'organisation en douze sources montre que Dieu connait la structure interne du peuple et pourvoit en consequence.",
              axe4_coherence: "La racine th-n-y apparait 24 fois dans le Coran. En 7:160, le verset parallele utilise le meme nombre (ithnataa 'ashrata). Le nombre douze lie aux tribus d'Israel apparait aussi en 5:12 (douze chefs) et 7:160 (douze sources). La coherence numerique est parfaite.",
              axe5_frequence: "Pour la mission du khalifa, le nombre douze rappelle que la provision divine est adaptee a chaque groupe. Le khalifa distribue les ressources selon les besoins de chaque communaute — la gestion est organisee, pas anarchique."
            }
          }
        }
      },
      {
        word_key: "eyn", position: 12, sense_chosen: "source",
        analysis_axes: {
          concept_chosen: "Eau vive",
          concepts: {
            "Eau vive": {
              status: "retenu",
              senses: ["source"],
              proof_ctx: "Le mot 'aynan est un nom feminin singulier accusatif indefini de la racine e-y-n. Le Lane's donne « spring of water, source, fountain ; eye ». Le contexte determine le sens — apres le jaillissement d'eau d'un rocher, 'ayn designe une source d'eau, pas un oeil. Le singulier 'aynan est un tamyiz (specificateur de nombre) apres ithnataa 'ashrata — douze source(s). Le mot est au singulier par convention grammaticale arabe (le tamyiz apres un nombre compose est au singulier).",
              axe1_verset: "Le mot 'aynan specifie ce qui a jailli — des sources d'eau vive. Le tamyiz au singulier designe douze sources individuelles. Chaque source est un point d'eau vivant et permanent — pas une flaque temporaire mais une source qui coule. Le miracle transforme un rocher sec en un reservoir de douze sources permanentes.",
              axe2_voisins: "Les versets precedents mentionnaient la nourriture (manne, cailles, nourriture de la cite). Ce verset 60 traite de l'eau — le complement indispensable de la nourriture. La sequence nourriture-eau dans le recit des enfants d'Israel montre que Dieu pourvoit a tous les besoins vitaux.",
              axe3_sourate: "La racine e-y-n dans la sourate porte le sens de source et d'oeil. En 2:60, le sens de source est clair. En d'autres contextes, 'ayn peut designer l'oeil physique ou la surveillance. La sourate utilise les deux sens selon le contexte.",
              axe4_coherence: "La racine e-y-n apparait 65 fois dans le Coran. En 7:160, le verset parallele utilise le meme mot 'aynan. Le sens de source d'eau est frequent dans les contextes paradisiaques (76:6, 83:28, 88:12). Les sources terrestres du miracle mosaique prefigurent les sources paradisiaques.",
              axe5_frequence: "Pour la mission du khalifa, la source represente la provision divine permanente. Le khalifa a acces a des sources de bienfaits — il doit savoir ou les trouver et comment les distribuer equitablement."
            },
            "Vision/Perception": {
              status: "nul",
              senses: ["œil", "regard"],
              proof_ctx: "L'oeil est le sens premier de e-y-n. Le contexte (jaillissement d'eau d'un rocher frappe) determine sans ambiguite le sens de source d'eau. Aucun oeil ne jaillit d'un rocher."
            },
            "Identité": {
              status: "nul",
              senses: ["essence"],
              proof_ctx: "L'essence ('ayn al-shay' = l'essence de la chose) est un sens philosophique de e-y-n. Le contexte est concret et physique — des sources d'eau qui jaillissent. Le sens d'essence est ecarte."
            }
          }
        }
      },
      {
        word_key: "elm", position: 14, sense_chosen: "savoir",
        analysis_axes: {
          concept_chosen: "Savoir/Connaissance",
          concepts: {
            "Savoir/Connaissance": {
              status: "retenu",
              senses: ["science", "enseignement", "connaître", "être informé", "savoir", "certitude", "savant"],
              proof_ctx: "Le verbe 'alima est un accompli 3MS de la racine e-l-m. Le Lane's donne « he knew, learned, became aware of ». Le verbe est a la forme accompli (il sut) avec la particule qad (certes, en effet) qui renforce la certitude. Chaque groupe sut son abreuvoir — la connaissance est immediate et certaine. Le savoir ici est pratique — chaque tribu connait le lieu precis ou boire.",
              axe1_verset: "Le verbe 'alima decrit la consequence organisationnelle du miracle. Apres le jaillissement des douze sources, chaque groupe sut immediatement son point d'eau. Le savoir est dirige et precis — pas de confusion, pas de conflit. La connaissance est un don divin qui accompagne la provision — Dieu donne l'eau et la connaissance de son lieu.",
              axe2_voisins: "Le verset 58 offrait la liberte totale (mangez ou vous voulez). Ce verset 60 organise la distribution (chaque groupe sut son point). La difference est significative — dans la cite, la liberte ; dans le desert, l'organisation. Les deux modes de provision refletent les besoins du contexte.",
              axe3_sourate: "La racine e-l-m est l'une des plus frequentes de la sourate al-Baqarah. En 2:31, Dieu enseigne a Adam les noms. En 2:32, les anges disent « nous ne savons que ce que Tu nous as enseigne ». Le savoir est toujours un don divin — Dieu enseigne et les creatures apprennent.",
              axe4_coherence: "La racine e-l-m apparait plus de 800 fois dans le Coran. En 7:160, le verset parallele utilise le meme verbe 'alima. Le savoir est le fondement de l'ethique coranique — celui qui sait est responsable de ce qu'il sait. Les douze tribus savent ou boire — cette connaissance organise leur vie sociale.",
              axe5_frequence: "Pour la mission du khalifa, le savoir est l'outil de la mission. Le khalifa doit savoir ou sont les ressources et comment les distribuer. La connaissance de chaque tribu de son point d'eau est un modele de gouvernance — chacun sait ce qui lui revient."
            }
          }
        }
      },
      {
        word_key: "kll", position: 15, sense_chosen: "chaque",
        analysis_axes: {
          concept_chosen: "Totalité",
          concepts: {
            "Totalité": {
              status: "retenu",
              senses: ["chaque", "totalité", "tout"],
              proof_ctx: "Le mot kullu est un nom masculin singulier nominatif de la racine k-l-l. Le Lane's donne « every, each, all, the whole ». Le mot kullu en construction idafa avec unasin (kullu unasin = chaque groupe d'hommes) a un sens distributif — il distribue la connaissance a chaque sous-groupe. La totalite est decomposee en unites — chacune recoit sa part.",
              axe1_verset: "Le mot kullu distribue la connaissance a chaque tribu individuellement. « Chaque groupe d'hommes sut son abreuvoir » — pas un point d'eau commun mais douze points distincts. La distribution est equitable et organisee. Le mot kullu garantit que personne n'est oublie — chaque groupe sans exception connait son lieu.",
              axe2_voisins: "Le verset 58 offrait la nourriture sans restriction de lieu (haythu shi'tum = ou vous voulez). Ce verset 60 organise l'eau par groupe (kullu unasin mashrabahum = chaque groupe son abreuvoir). La difference entre nourriture et eau reflete la rarete relative — la nourriture est libre, l'eau est distribuee.",
              axe3_sourate: "Le mot kull est parmi les plus frequents de la sourate al-Baqarah. En 2:20, « Dieu est sur toute chose omnipotent ». En 2:29, « Il a cree pour vous tout ce qui est sur terre ». La totalite divine englobe tout — chaque creature, chaque besoin, chaque provision.",
              axe4_coherence: "La racine k-l-l apparait plus de 200 fois dans le Coran. En 7:160, le verset parallele utilise le meme mot kullu. La totalite distributive (chaque) est un mecanisme divin — chaque creature recoit sa part. En 11:6, « il n'y a pas de creature sur terre dont la subsistance n'incombe a Dieu ».",
              axe5_frequence: "Pour la mission du khalifa, la totalite est le principe de justice distributive. Le khalifa doit veiller a ce que chaque groupe recouive sa part. La provision divine est pour tous (kull) — le khalifa est le distributeur equitable."
            }
          }
        }
      },
      {
        word_key: "ans", position: 16, sense_chosen: "humains",
        analysis_axes: {
          concept_chosen: "Familiarité/Sociabilité",
          concepts: {
            "Familiarité/Sociabilité": {
              status: "retenu",
              senses: ["être familier", "être sociable", "être humain", "humains (ins)"],
              proof_ctx: "Le mot unasin est un nom masculin pluriel genitif indefini de la racine a-n-s. Le Lane's donne « men, human beings, people ». Le pluriel unas designe un groupe d'etres humains. Le mot est le complement de kullu (chaque groupe d'hommes). L'indefini donne un sens generique — chaque groupe, quel qu'il soit. La racine a-n-s lie l'humanite a la sociabilite — les humains sont ceux qui vivent ensemble.",
              axe1_verset: "Le mot unasin specifie le type de groupe — des groupes humains, pas des individus isoles. Chaque groupe d'hommes (tribu) sut son abreuvoir. Le mot implique une organisation sociale — les gens sont en groupes distincts avec des besoins distincts. Le miracle respecte cette organisation sociale — chaque tribu a sa source.",
              axe2_voisins: "Le verset 58 s'adressait aux enfants d'Israel comme un bloc (udkhuluu = entrez). Ce verset 60 decompose le peuple en groupes (kullu unasin = chaque groupe). La decomposition montre que le peuple est compose de sous-groupes avec des identites propres — les douze tribus ont chacune leur autonomie.",
              axe3_sourate: "La racine a-n-s dans la sourate designe les etres humains dans leur dimension sociale. En 2:8, certains « parmi les gens » (mina al-nas) pretendent croire. En 2:44, « ordonnez-vous la bienfaisance aux gens ». Les humains sont toujours presentes en groupes sociaux, jamais isoles.",
              axe4_coherence: "La racine a-n-s apparait sous la forme nas plus de 240 fois et sous la forme unas quelques fois. En 7:160, le verset parallele utilise le meme mot unasin. Le Coran utilise unas pour des groupes indefinis et al-nas pour les humains en general. Le choix d'unas ici souligne l'aspect indefini — chaque groupe, quel qu'il soit.",
              axe5_frequence: "Pour la mission du khalifa, les groupes humains sont les unites de base de la gestion. Le khalifa ne gere pas des individus isoles mais des communautes. Chaque communaute a ses besoins propres — la provision divine et la gestion du khalifa doivent respecter cette diversite."
            }
          }
        }
      },
      {
        word_key: "rzq", position: 21, sense_chosen: "subsistance",
        analysis_axes: {
          concept_chosen: "Subsistance/Provision",
          concepts: {
            "Subsistance/Provision": {
              status: "retenu",
              senses: ["pourvoir", "nourrir", "subsistance", "moyens de vivre", "part"],
              proof_ctx: "Le mot rizqi est un nom masculin singulier genitif de la racine r-z-q. Le Lane's donne « provision, sustenance, means of subsistence, that which God has provided ». Le mot est en construction idafa avec Allah (rizqi Allahi = la provision de Dieu). La provision est attribuee a Dieu comme source unique — tout ce que les enfants d'Israel mangent et boivent vient de Dieu.",
              axe1_verset: "Le mot rizqi est le complement de « mangez et buvez » — mangez et buvez de la provision de Dieu. L'attribution a Dieu transforme l'acte de manger et boire en acte de reconnaissance. La provision n'est pas le fruit du travail humain mais un don divin. Le verset lie la provision a l'interdiction de la corruption — recevez la provision et ne corrompez pas.",
              axe2_voisins: "Le verset 57 mentionnait la manne et les cailles comme provision divine. Ce verset 60 generalise — tout (nourriture et eau) est provision de Dieu. La progression du specifique (manne) au general (provision de Dieu) elargit la perspective. Tout ce que les enfants d'Israel consomment est un don divin.",
              axe3_sourate: "La racine r-z-q est tres frequente dans la sourate al-Baqarah. En 2:3, les croyants depensent de ce que Dieu leur a pourvu. En 2:22, Dieu fait descendre la pluie et fait sortir les fruits comme provision. La sourate lie systematiquement la provision a Dieu et exige la reconnaissance en retour.",
              axe4_coherence: "La racine r-z-q apparait 123 fois dans le Coran. Dieu est al-Razzaq (le Grand Pourvoyeur). En 7:160, le verset parallele utilise le meme mot rizq. En 11:6, « il n'y a pas de creature dont la subsistance n'incombe a Dieu ». La provision divine est universelle — tout etre vivant est nourri par Dieu.",
              axe5_frequence: "Pour la mission du khalifa, la provision est le moyen de la mission. Le khalifa recoit la provision pour accomplir sa mission, pas pour en jouir egoistement. Les enfants d'Israel recoivent la provision de Dieu avec l'ordre de ne pas corrompre — la provision implique une responsabilite."
            }
          }
        }
      },
      {
        word_key: "alh", position: 22, sense_chosen: "Dieu",
        analysis_axes: {
          concept_chosen: "Divinité",
          concepts: {
            "Divinité": {
              status: "retenu",
              senses: ["divinité", "exclamation divine", "Dieu", "oui certes", "divinité (concept)", "théologie"],
              proof_ctx: "Le mot Allahi est le nom propre de Dieu au cas genitif de la racine a-l-h. Le Lane's donne « God, the One True God, the proper name of the Supreme Being ». Le nom Allah est le nom unique de la divinite dans l'islam — il ne se pluralise pas et ne se feminise pas. Le genitif est la construction idafa avec rizq (la provision de Dieu).",
              axe1_verset: "Le mot Allahi attribue la provision a Dieu directement. « La provision de Dieu » (rizqi Allahi) signifie que tout ce qui est consomme vient de Dieu. Le verset utilise le nom propre Allah pour renforcer l'attribution — ce n'est pas une force anonyme qui nourrit mais Dieu Lui-meme. L'attribution a Dieu fonde l'interdiction qui suit — parce que c'est la provision de Dieu, ne corrompez pas.",
              axe2_voisins: "Les versets precedents utilisaient le « Nous » de majeste (qulna = Nous avons dit). Ce verset 60 introduit le nom Allah dans le discours rapporte (« mangez de la provision de Dieu »). Le passage du « Nous » narratif au nom propre « Allah » dans le discours direct renforce la solennite de l'ordre.",
              axe3_sourate: "Le nom Allah est le mot le plus important de la sourate al-Baqarah. Il apparait dans presque chaque passage. La sourate est centree sur la relation entre Dieu et les humains — chaque bienfait, chaque ordre, chaque chatiment est rattache a Dieu. Le nom propre Allah traverse toute la sourate comme un fil conducteur.",
              axe4_coherence: "Le nom Allah apparait plus de 2600 fois dans le Coran. C'est le mot le plus frequent. Le nom est utilise dans tous les contextes — legislation, narration, louange, avertissement. La racine a-l-h porte le sens de divinite, d'adoration et de refuge. Allah est Celui vers qui tout revient.",
              axe5_frequence: "Pour la mission du khalifa, Dieu est la source et la fin de la mission. Le khalifa agit au nom de Dieu et pour Dieu. La provision de Dieu est le moyen de la mission — le khalifa doit reconnaitre cette source et agir en consequence."
            }
          }
        }
      },
      {
        word_key: "ethw", position: 24, sense_chosen: "corrompre",
        analysis_axes: {
          concept_chosen: "Corruption/Désordre",
          concepts: {
            "Corruption/Désordre": {
              status: "retenu",
              senses: ["corrompre", "semer le désordre", "faire du mal"],
              proof_ctx: "Le verbe ta'thaw est un inaccompli 2MP majzum de la racine e-th-w. Le Lane's donne « he did mischief, he acted corruptly, he made mischief in the land ». Le verbe est precede de la negation la (la ta'thaw = ne semez pas le desordre). La forme est directe et sans equivoque — c'est un interdit explicite. Le verbe designe un comportement de corruption active, pas simplement un manque de bien.",
              axe1_verset: "Le verbe ta'thaw est l'interdit du verset. Apres les permissions (mangez, buvez) et les provisions (provision de Dieu), vient l'interdit — ne corrompez pas. La structure est permission-provision-interdit — Dieu donne generalement mais pose une limite. L'interdit est renforce par le hal mufsidina (en etat de corrupteurs) — ne faites pas le desordre en tant que corrupteurs.",
              axe2_voisins: "Le verset 58 ordonnait l'entree avec prosternation. Le verset 59 decrivait la corruption de la parole. Ce verset 60 interdit la corruption de la terre. La progression est : ordre de soumission, echec de soumission, interdiction de corruption. Le verset 60 previent une corruption future apres avoir montre une corruption passee.",
              axe3_sourate: "La corruption sur terre est un theme central de la sourate al-Baqarah. En 2:11-12, les hypocrites disent « nous ne faisons que reformer » alors qu'ils corrompent. En 2:27, les impies corrompent sur terre. En 2:30, les anges craignent que le khalifa corrompe. L'interdit de corruption est lie a la mission du khalifa.",
              axe4_coherence: "La racine e-th-w apparait 2 fois dans le Coran (2:60 et 7:74). Le verbe est rare et specifique — il designe un desordre actif et delibere. En 7:74, le meme interdit est adresse au peuple de Salih. Les peuples qui recoivent des bienfaits sont avertis de ne pas corrompre.",
              axe5_frequence: "Pour la mission du khalifa, la corruption est l'anti-mission. Le khalifa est place sur terre pour eviter la corruption (2:30) et voila que les enfants d'Israel sont avertis de ne pas corrompre (2:60). L'interdit de corruption est le coeur negatif de la mission — ne pas faire ce pour quoi les anges craignaient."
            }
          }
        }
      },
      {
        word_key: "ard", position: 26, sense_chosen: "terre",
        analysis_axes: {
          concept_chosen: "Terre/Sol",
          concepts: {
            "Terre/Sol": {
              status: "retenu",
              senses: ["bas", "terre", "sol", "pays"],
              proof_ctx: "Le mot al-ardi est un nom feminin singulier defini genitif de la racine a-r-d. Le Lane's donne « earth, land, ground, country, territory ». La terre est le lieu de la mission du khalifa — c'est sur la terre que l'ordre ou le desordre se manifeste. L'article defini (al-ard) designe la terre en general, pas un pays specifique. L'interdit de corruption s'applique a la terre entiere.",
              axe1_verset: "Le mot al-ardi est le lieu ou la corruption est interdite. « Ne semez pas le desordre sur la terre » — la terre est le theatre de l'action humaine. Le verset passe du desert (pierre, sources) a la terre en general. L'interdit est universel — pas seulement dans le desert ou dans la cite mais sur toute la terre.",
              axe2_voisins: "Le verset 58 parlait de la cite (qaryata). Ce verset 60 parle de la terre (al-ard). L'elargissement du local (cite) au global (terre) montre que l'interdit de corruption depasse le contexte immediat. La corruption est interdite partout, pas seulement dans un lieu precis.",
              axe3_sourate: "Le mot al-ard est l'un des plus frequents de la sourate al-Baqarah. En 2:11, « ne corrompez pas sur la terre ». En 2:22, Dieu a fait la terre un lit. En 2:30, Dieu place un khalifa sur la terre. La terre est le lieu central de la narration — c'est sur la terre que se joue la mission du khalifa.",
              axe4_coherence: "La racine a-r-d apparait 461 fois dans le Coran. La terre est le lieu de l'epreuve humaine — entre le ciel (source de la guidance) et la terre (lieu de l'action). En 7:56, « ne corrompez pas sur la terre apres sa reforme ». L'interdit de corruption sur la terre est un commandement universel et recurrent.",
              axe5_frequence: "Pour la mission du khalifa, la terre est le domaine de la mission. Le khalifa est place sur la terre pour la gerer correctement. La corruption de la terre est l'echec ultime du khalifa. Les enfants d'Israel sont avertis de ne pas corrompre la terre que Dieu leur confie."
            }
          }
        }
      },
      {
        word_key: "fsd", position: 27, sense_chosen: "corrompre",
        analysis_axes: {
          concept_chosen: "Corruption/Désordre",
          concepts: {
            "Corruption/Désordre": {
              status: "retenu",
              senses: ["gâter", "corrompre", "désordre", "corrupteur", "corruption", "détériorer"],
              proof_ctx: "Le mot mufsidina est un participe actif pluriel accusatif forme IV de la racine f-s-d. Le Lane's donne « those who make mischief, who cause corruption, who destroy or damage ». La forme IV (ifsad) signifie « causer la corruption ». Le participe actif (mufsid) designe l'agent — celui qui corrompt activement. Le pluriel accusatif fonctionne comme hal (etat) — ne semez pas le desordre en etant des corrupteurs.",
              axe1_verset: "Le mot mufsidina renforce l'interdit de ta'thaw. Le verset interdit non seulement l'acte (ne semez pas le desordre) mais l'etat (en etant des corrupteurs). La double negation (ne faites pas le mal en etant des faiseurs de mal) est un renforcement — l'interdit porte sur l'acte et sur l'identite. Ne devenez pas des corrupteurs.",
              axe2_voisins: "Le verset 59 decrivait les injustes (zalamu) qui ont change la parole. Ce verset 60 mentionne les corrupteurs (mufsidina). Les deux termes designent le meme type de comportement — l'injustice et la corruption sont les deux faces de la desobeissance. Le verset 59 montrait la corruption passee ; le verset 60 interdit la corruption future.",
              axe3_sourate: "La racine f-s-d est un theme central de la sourate al-Baqarah. En 2:11, « ne corrompez pas sur la terre ». En 2:12, « ce sont eux les corrupteurs mais ils ne s'en rendent pas compte ». En 2:27, « ceux qui corrompent sur la terre ». En 2:30, les anges craignent un khalifa qui corrompra. La corruption est l'anti-these de la mission du khalifa.",
              axe4_coherence: "La racine f-s-d apparait 50 fois dans le Coran. La corruption est systematiquement condamnee. En 5:33, le chatiment des corrupteurs est severe. En 28:77, « ne cherche pas la corruption sur la terre ». Le Coran lie la corruption a la destruction de l'equilibre naturel et moral.",
              axe5_frequence: "Pour la mission du khalifa, la corruption est l'echec absolu. Le khalifa est place sur terre pour reformer, pas pour corrompre. En 2:30, les anges craignaient la corruption ; en 2:60, Dieu interdit explicitement aux enfants d'Israel de corrompre. L'interdit de corruption est la condition negative de la mission — le minimum est de ne pas corrompre."
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
  // qry (id=568) — cite
  { analysis_id: 568, phrases: [
    { sense: "cité", arabic: "دَخَلُوا القَرْيَةَ مِنْ بَابِهَا", phon: "dakhaluu al-qaryata min babiha", french: "Ils sont entres dans la cite par sa porte." },
    { sense: "village", arabic: "أَهْلُ القَرْيَةِ كَانُوا صَالِحِينَ", phon: "ahlu al-qaryati kanuu salihina", french: "Les habitants du village etaient des gens vertueux." },
    { sense: "cité", arabic: "هَلَكَتِ القَرْيَةُ بِظُلْمِ أَهْلِهَا", phon: "halakati al-qaryatu bi-zulmi ahliha", french: "La cite a peri par l'injustice de ses habitants." }
  ]},
  // hyth (id=465) — ou
  { analysis_id: 465, phrases: [
    { sense: "où", arabic: "اِجْلِسْ حَيْثُ شِئْتَ", phon: "ijlis haythu shi'ta", french: "Assieds-toi ou tu veux." },
    { sense: "là où", arabic: "ذَهَبَ حَيْثُ لَا يَعْلَمُ أَحَدٌ", phon: "dhahaba haythu la ya'lamu ahad", french: "Il est parti la ou personne ne sait." },
    { sense: "partout où", arabic: "حَيْثُمَا تَكُونُوا يُدْرِكْكُمُ المَوْتُ", phon: "haythuma takunuu yudrikkumu al-mawt", french: "Ou que vous soyez, la mort vous atteindra." }
  ]},
  // bwb (id=569) — porte
  { analysis_id: 569, phrases: [
    { sense: "porte", arabic: "اُدْخُلُوا الأَبْوَابَ سُجَّدًا", phon: "udkhuluu al-abwaba sujjadan", french: "Entrez par les portes en vous prosternant." },
    { sense: "entrée", arabic: "وَقَفَ عِنْدَ بَابِ الدَّارِ يَنْتَظِرُ", phon: "waqafa 'inda babi al-dari yantaziru", french: "Il s'est tenu a l'entree de la maison en attendant." },
    { sense: "chapitre", arabic: "فَتَحَ بَابًا جَدِيدًا فِي العِلْمِ", phon: "fataha baban jadidan fi al-'ilmi", french: "Il a ouvert un nouveau chapitre dans la science." }
  ]},
  // sjd (id=448) — prosternation
  { analysis_id: 448, phrases: [
    { sense: "se prosterner", arabic: "سَجَدَ لِلَّهِ شُكْرًا", phon: "sajada li-Allahi shukran", french: "Il s'est prosterne devant Dieu par gratitude." },
    { sense: "s'incliner", arabic: "سَجَدَتِ الأَشْجَارُ وَالنُّجُومُ", phon: "sajadati al-ashjaru wa-al-nujumu", french: "Les arbres et les etoiles s'inclinent." },
    { sense: "adorer", arabic: "اُسْجُدُوا لِلَّهِ وَاعْبُدُوهُ", phon: "usjuduu li-Allahi wa-u'buduh", french: "Prosternez-vous devant Dieu et adorez-Le." }
  ]},
  // htt (id=570) — decharge
  { analysis_id: 570, phrases: [
    { sense: "déposer", arabic: "حَطَّ عَنْهُ ذُنُوبَهُ", phon: "hatta 'anhu dhunubahu", french: "Il a depose ses peches loin de lui." },
    { sense: "abaisser", arabic: "حَطَّ قَدْرَهُ بِكَلَامِهِ", phon: "hatta qadrahu bi-kalamihi", french: "Il a abaisse son rang par ses paroles." },
    { sense: "péché enlevé", arabic: "قَالُوا حِطَّةٌ فَغُفِرَ لَهُمْ", phon: "qaluu hittatun fa-ghufira lahum", french: "Ils ont dit 'decharge' et il leur a ete pardonne." }
  ]},
  // ghf (id=571) — pardon
  { analysis_id: 571, phrases: [
    { sense: "pardonner", arabic: "اللَّهُمَّ اغْفِرْ لِي ذَنْبِي", phon: "Allahumma ighfir li dhanbi", french: "O Dieu, pardonne-moi mon peche." },
    { sense: "couvrir", arabic: "غَفَرَ اللَّهُ ذُنُوبَهُ كُلَّهَا", phon: "ghafara Allahu dhunubahu kullaha", french: "Dieu a couvert tous ses peches." },
    { sense: "effacer", arabic: "اسْتَغْفِرُوا رَبَّكُمْ إِنَّهُ كَانَ غَفَّارًا", phon: "istaghfiruu rabbakum innahu kana ghaffaran", french: "Demandez le pardon a votre Seigneur, Il est Tres-Pardonnant." }
  ]},
  // hsn (id=574) — bienfaisance
  { analysis_id: 574, phrases: [
    { sense: "bien faire", arabic: "أَحْسِنْ كَمَا أَحْسَنَ اللَّهُ إِلَيْكَ", phon: "ahsin kama ahsana Allahu ilayka", french: "Fais le bien comme Dieu t'a fait du bien." },
    { sense: "bienfaisance", arabic: "الإِحْسَانُ أَنْ تَعْبُدَ اللَّهَ كَأَنَّكَ تَرَاهُ", phon: "al-ihsanu an ta'buda Allaha ka-annaka tarahu", french: "La bienfaisance c'est adorer Dieu comme si tu Le voyais." },
    { sense: "être beau", arabic: "مَا أَحْسَنَ هَذَا القَوْلَ", phon: "ma ahsana hadha al-qawla", french: "Que cette parole est belle !" }
  ]},
  // rjz (id=565) — chatiment
  { analysis_id: 565, phrases: [
    { sense: "châtiment", arabic: "أَنْزَلَ اللَّهُ عَلَيْهِمْ رِجْزًا مِنَ السَّمَاءِ", phon: "anzala Allahu 'alayhim rijzan mina al-sama'i", french: "Dieu a fait descendre sur eux un chatiment du ciel." },
    { sense: "fléau", arabic: "لَمَّا وَقَعَ عَلَيْهِمُ الرِّجْزُ قَالُوا ادْعُ لَنَا رَبَّكَ", phon: "lamma waqa'a 'alayhimu al-rijzu qaluu ud'u lana rabbaka", french: "Quand le fleau tomba sur eux, ils dirent : invoque pour nous ton Seigneur." },
    { sense: "souillure", arabic: "وَالرُّجْزَ فَاهْجُرْ", phon: "wa-al-rujza fahjur", french: "Et la souillure, fuis-la." }
  ]},
  // sqy (id=584) — abreuver
  { analysis_id: 584, phrases: [
    { sense: "abreuver", arabic: "سَقَاهُمْ رَبُّهُمْ شَرَابًا طَهُورًا", phon: "saqahum rabbuhum sharaban tahuran", french: "Leur Seigneur les a abreuves d'une boisson pure." },
    { sense: "irriguer", arabic: "سَقَيْنَاكُمْ مَاءً فُرَاتًا", phon: "saqaynakum ma'an furatan", french: "Nous vous avons donne a boire une eau douce." },
    { sense: "donner à boire", arabic: "اسْتَسْقَى مُوسَى لِقَوْمِهِ", phon: "istasqa Musa li-qawmihi", french: "Moise a demande a boire pour son peuple." }
  ]},
  // esw (id=586) — baton
  { analysis_id: 586, phrases: [
    { sense: "bâton", arabic: "أَلْقِ عَصَاكَ فَإِذَا هِيَ ثُعْبَانٌ", phon: "alqi 'asaka fa-idha hiya thu'banun", french: "Jette ton baton et voila que c'est un serpent." },
    { sense: "canne", arabic: "تَوَكَّأَ عَلَى عَصَاهُ وَمَشَى", phon: "tawakka'a 'ala 'asahu wa-masha", french: "Il s'est appuye sur sa canne et a marche." },
    { sense: "bâton", arabic: "لِيَ فِيهَا مَآرِبُ أُخْرَى", phon: "li fiiha ma'aribu ukhra", french: "J'ai en lui d'autres usages encore." }
  ]},
  // fjr (id=587) — jaillissement
  { analysis_id: 587, phrases: [
    { sense: "jaillir", arabic: "فَانْفَجَرَتْ مِنْهُ اثْنَتَا عَشْرَةَ عَيْنًا", phon: "fa-infajarat minhu ithnataa 'ashrata 'aynan", french: "Alors douze sources en jaillirent." },
    { sense: "aube", arabic: "قُرْآنَ الفَجْرِ كَانَ مَشْهُودًا", phon: "qur'ana al-fajri kana mashhuda", french: "La recitation de l'aube est temoin." },
    { sense: "jaillir", arabic: "فَجَّرْنَا الأَرْضَ عُيُونًا", phon: "fajjarna al-arda 'uyunan", french: "Nous avons fait jaillir la terre en sources." }
  ]},
  // thny (id=588) — dualite
  { analysis_id: 588, phrases: [
    { sense: "deux", arabic: "اِثْنَتَا عَشْرَةَ عَيْنًا", phon: "ithnataa 'ashrata 'aynan", french: "Douze sources." },
    { sense: "répéter", arabic: "اللَّهُ نَزَّلَ أَحْسَنَ الحَدِيثِ مُتَشَابِهًا مَثَانِيَ", phon: "Allahu nazzala ahsana al-hadithi mutashabihan mathani", french: "Dieu a fait descendre le meilleur des recits, semblable et repete." },
    { sense: "deuxième", arabic: "ثَانِيَ اثْنَيْنِ إِذْ هُمَا فِي الغَارِ", phon: "thaniya ithnayni idh huma fi al-ghari", french: "Le deuxieme de deux, quand ils etaient dans la grotte." }
  ]},
  // ethw (id=592) — corruption
  { analysis_id: 592, phrases: [
    { sense: "corrompre", arabic: "لَا تَعْثَوْا فِي الأَرْضِ مُفْسِدِينَ", phon: "la ta'thaw fi al-ardi mufsidina", french: "Ne semez pas la corruption sur la terre." },
    { sense: "semer le désordre", arabic: "عَثَوْا فِي الأَرْضِ فَسَادًا", phon: "'athaw fi al-ardi fasadan", french: "Ils ont seme le desordre sur la terre." },
    { sense: "faire du mal", arabic: "وَلَا تَعْثَوْا فِيهَا مُفْسِدِينَ", phon: "wa-la ta'thaw fiha mufsidina", french: "Et n'y faites pas de mal en corrupteurs." }
  ]},
  // bdl (id=562) — changement
  { analysis_id: 562, phrases: [
    { sense: "changer", arabic: "بَدَّلَ نِعْمَةَ اللَّهِ كُفْرًا", phon: "baddala ni'mata Allahi kufran", french: "Il a change le bienfait de Dieu en ingratitude." },
    { sense: "remplacer", arabic: "بَدَّلْنَاهُمْ جُلُودًا غَيْرَهَا", phon: "baddalnahum juludan ghayraha", french: "Nous leur avons remplace leurs peaux par d'autres." },
    { sense: "substituer", arabic: "لَا تَبْدِيلَ لِكَلِمَاتِ اللَّهِ", phon: "la tabdila li-kalimati Allahi", french: "Les paroles de Dieu ne sont pas sujettes a substitution." }
  ]},
  // xta (id=572) — faute
  { analysis_id: 572, phrases: [
    { sense: "faute", arabic: "رَبَّنَا لَا تُؤَاخِذْنَا إِنْ نَسِينَا أَوْ أَخْطَأْنَا", phon: "rabbana la tu'akhidhna in nasina aw akhta'na", french: "Seigneur, ne nous blame pas si nous avons oublie ou fauté." },
    { sense: "erreur", arabic: "كُلُّ ابْنِ آدَمَ خَطَّاءٌ", phon: "kullu ibni Adama khatta'", french: "Tout fils d'Adam est sujet a l'erreur." },
    { sense: "pécher", arabic: "مَنْ يَكْسِبْ خَطِيئَةً يُجْزَ بِهَا", phon: "man yaksib khati'atan yujza biha", french: "Celui qui commet un peche en sera retribue." }
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

  const verseIds = [65, 66, 67];
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
  console.log('=== PIPELINE SOURATE 2 — AL-BAQARAH — VERSETS 58 A 60 ===\n');

  let totalOk = 0, totalErr = 0;

  for (let v = 58; v <= 60; v++) {
    const result = await processVerse(v);
    if (result) {
      totalOk += result.okCount;
      totalErr += result.errCount;
    }
  }

  await syncWordMeanings();
  await insertDailyPhrases();

  console.log(`\n=== PIPELINE V58-60 TERMINEE — TOTAL: ${totalOk} OK, ${totalErr} erreurs ===`);
}

main().catch(e => console.error('FATAL:', e));
