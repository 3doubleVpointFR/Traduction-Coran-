const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// =====================================================
// PIPELINE SOURATE 2 - VERSET 233
// verse_id=240, analysis_id=598
// "wa al-walidatu yurdi'na awladahunna
//  hawlayni kamilayni liman arada an yutimma al-rada'ata
//  wa 'ala al-mawludi lahu rizquhunna wa kiswatuhunna bi al-ma'rufi
//  la tukallafu nafsun illa wus'aha
//  la tudarra walidatun bi waladiha wa la mawludun lahu bi waladihi
//  wa 'ala al-warithi mithlu dhalika
//  fa in arada fisalan 'an taradin minhuma wa tashawurin fa la junaha 'alayhima
//  wa in aradtum an tastaradi'u awladakum fa la junaha 'alaykum
//  idha sallamtum ma ataytum bi al-ma'rufi
//  wa ittaqu Allaha wa i'lamu anna Allaha bima ta'maluna basir"
// =====================================================

const verseData = {
  233: {
    verse_id: 240,
    analysis_id: 598,
    translation_arab: "Les meres allaitent leurs enfants pendant deux cycles complets — pour celui qui desire accomplir la periode d'allaitement. Il incombe a celui pour lequel l'enfant est ne de les sustenter et de les vetir convenablement. Nulle ame n'est chargee au-dela de sa capacite. La mere ne doit pas subir de tort a cause de son enfant, ni le pere a cause de son enfant. L'heritier a la meme obligation. S'ils veulent sevrer d'un commun agrement et apres deliberation, il n'y a pas d'inclinaison vers la faute pour eux. Et si vous voulez confier vos enfants a une nourrice, il n'y a pas d'inclinaison vers la faute pour vous, pourvu que vous remettiez ce que vous avez convenu convenablement. Craignez Dieu et sachez que Dieu est Temoin de ce que vous faites.",
    full_translation: "Les meres allaiteront leurs enfants pendant deux annees completes — pour celui qui veut completer la periode d'allaitement. Il incombe au pere de les nourrir et de les vetir convenablement. Nulle ame n'est chargee au-dela de sa capacite. La mere ne doit pas etre lesee pour son enfant, ni le pere pour son enfant. Il en est de meme pour l'heritier. Si tous deux veulent sevrer d'un commun accord et apres consultation, ce n'est pas un peche pour eux. Et si vous voulez confier vos enfants a une nourrice, ce n'est pas un peche pour vous, pourvu que vous remettiez ce que vous avez promis convenablement. Craignez Dieu et sachez que Dieu voit bien ce que vous faites.",
    translation_explanation: "§DEMARCHE§\n" +
"Le verset 233 etablit le cadre juridique et moral de l'allaitement maternel apres divorce ou separation. Il fixe la duree maximale (deux cycles annuels complets), les obligations du pere (sustentation et vetement), le principe de capacite limitee (la nafs n'est chargee qu'a la mesure de sa capacite), les conditions du sevrage anticipe (accord mutuel et deliberation), et la possibilite de confier l'enfant a une nourrice sous condition de remuneration convenable.\n" +
"\n" +
"La racine **wld** (waw-lam-dal) couvre tout le champ de la naissance et de la descendance. Le Lane's donne : naître, enfanter, mettre au monde, engendrer. Al-walidat = les meres (celles qui ont enfante), al-mawlud lahu = celui pour lequel l'enfant est ne (le pere). La racine exprime la relation de generation : al-walid (pere), al-walida (mere), al-walad (enfant).\n" +
"\n" +
"La racine **rde** (ra-dal-'ayn) couvre le champ de l'allaitement. Le Lane's donne : allaiter, donner le sein, nourrir du lait maternel. Yurdi'na = elles allaitent (inaccompli 3FP). Al-rada'a = l'allaitement comme periode ou acte. La racine exprime le lien vital du lait maternel.\n" +
"\n" +
"La racine **hwl** (ha-waw-lam) signifie le cycle, le tour complet, l'annee. Le Lane's donne : annee, cycle solaire complet, revolution autour d'un centre. Hawlayni = deux cycles/annees (duel). La racine signifie fondamentalement le tour (hawl = autour de), donc l'annee est le cycle complet du soleil.\n" +
"\n" +
"La racine **kml** (kaf-mim-lam) signifie la completude et la perfection. Le Lane's donne : etre complet, entier, parfait, sans manque ni defaut. Kamilayni = deux complets (duel masculin) — les deux cycles sont integres, sans deduction. Precise que les deux ans sont mesures en entier.\n" +
"\n" +
"La racine **rwd** (ra-waw-dal) signifie le desir oriente et l'intention. Le Lane's donne : vouloir, desirer, chercher, avoir l'intention de, tendre vers. Arada = il voulut/il desire (accompli). Le sens est l'orientation de la volonte vers un but.\n" +
"\n" +
"La racine **tmm** (ta-mim-mim) signifie l'achevement total. Le Lane's donne : completer, achever, mener a terme, accomplir jusqu'au bout. Yutimma = qu'il complete/acheve (inaccompli subjonctif). L'achevement est la realisation integrale sans reste.\n" +
"\n" +
"La racine **rzq** (ra-zay-qaf) signifie la provision et la subsistance. Le Lane's donne : pourvoir en nourriture et necessites vitales, allocation, ce qui soutient la vie. Rizquhunna = leur provision/subsistance (a elles, les meres). Le rizq est ce que Dieu ou le responsable alloue pour la vie.\n" +
"\n" +
"La racine **ksw** (kaf-sin-waw) signifie le vetement et la couverture. Le Lane's donne : vetir, habiller, couvrir d'un vetement, vêtement. Kiswatuhunna = leur vetement/habillement. La kiswa est l'acte de couvrir le corps — vetement comme protection et dignite.\n" +
"\n" +
"La racine **erf** (ayn-ra-fa) signifie ce qui est reconnu et convenable. Le Lane's donne : connaitre, reconnaitre, ce qui est connu/reconnu socialement comme bien, bienfait, convention sociale etablie. Bi al-ma'rufi = de facon convenable, selon l'usage reconnu. Le ma'ruf est la norme sociale positive.\n" +
"\n" +
"La racine **klf** (kaf-lam-fa) signifie l'imposition d'une charge. Le Lane's donne : imposer une charge, obliger quelqu'un a ce qui est au-dela de ses forces, burden. La tukallafu = elle n'est pas chargee/obligee (inaccompli passif). L'idee est la charge imposee par une autorite sur une personne.\n" +
"\n" +
"La racine **nfs** (nun-fa-sin) signifie l'ame et la personne individuee. Le Lane's donne : ame, souffle vital, soi, personne, etre vivant dans son individualite. Nafsun = une ame (indefini) — chaque individu dans sa singularite.\n" +
"\n" +
"La racine **wse** (waw-sin-'ayn) signifie la capacite et la largeur. Le Lane's donne : etre large, avoir de l'espace, capacite, possibilite, ce qu'on peut contenir. Wus'aha = sa capacite (a elle, l'ame). La wus'a est la mesure de ce qu'un etre peut supporter ou accomplir.\n" +
"\n" +
"La racine **drr** (dal-ra-ra) signifie la nuisance et le tort. Le Lane's donne : nuire, causer du tort, dommage, prejudice, harm. La tudarra = elle n'est pas lesee/blessee (inaccompli passif). La darar est la nuisance infligee a quelqu'un.\n" +
"\n" +
"La racine **fsl** (fa-sin-lam) signifie la separation et le sevrage. Le Lane's donne : separer, trancher, diviser ce qui etait uni, sevrer un enfant du sein. Fisalan = sevrage/separation (accusatif). Le fasl est l'acte de trancher le lien — en contexte d'allaitement, le sevrage.\n" +
"\n" +
"La racine **rdy** (ra-dal-ya) signifie la satisfaction et le consentement. Le Lane's donne : etre satisfait, agreer, consentir, accord mutuel. Taradin = d'un commun agrement/consentement (masdar de Form VI : reciprocite). Le rida est la satisfaction mutuelle.\n" +
"\n" +
"La racine **jnh** (jim-nun-ha) signifie l'inclinaison vers la faute. Le Lane's donne : s'incliner vers ce qui est blamable, penchant vers la faute, tendance condamnable. Junaha = inclinaison vers la faute. La junah est la responsabilite morale de s'etre penche vers le mal.\n" +
"\n" +
"La racine **wqy** (waw-qaf-ya) signifie la protection et la piete. Le Lane's donne : se premunir, proteger, se garder de, craindre en se protégeant. Ittaqu = craignez (Form VIII, sens reflexif : prenez garde, protegez-vous par la piete). La taqwa est la protection de soi par la conscience divine.\n" +
"\n" +
"La racine **elm** ('ayn-lam-mim) signifie le savoir certain. Le Lane's donne : savoir, connaitre avec certitude, etre informe. I'lamu = sachez (Form IV, imperatif). La 'ilm est la connaissance certaine.\n" +
"\n" +
"La racine **bsr** (ba-sin-ra) signifie la vue et le temoignage. Le Lane's donne : voir, percevoir par la vue, etre temoin. Basir = Celui qui voit/le Temoin — attribut divin de la vision totale.\n" +
"\n" +
"§JUSTIFICATION§\n" +
"**Les meres allaitent** — al-walidatu yurdi'na : le verbe inaccompli (yurdi'na) exprime une action en cours ou une prescription generale. Les meres (al-walidat, de wld = celles qui ont enfante) sont les sujets de l'allaitement (rde).\n" +
"\n" +
"**deux cycles complets** — hawlayni kamilayni : le duel de hawl (cycle/annee) precise deux cycles complets (kamilayni, de kml). La completude (kml) est soulignee pour eviter toute reduction arbitraire de la periode.\n" +
"\n" +
"**pour celui qui desire accomplir** — liman arada an yutimma : la clause restrictive indique que les deux ans ne sont pas obligatoires mais la duree maximale pour celui qui veut (rwd) completer (tmm) l'allaitement.\n" +
"\n" +
"**provision et vetement convenablement** — rizquhunna wa kiswatuhunna bi al-ma'rufi : les deux obligations du pere sont la sustentation (rzq) et le vetement (ksw), accomplies selon la convention sociale reconnue (erf/ma'ruf).\n" +
"\n" +
"**nulle ame n'est chargee au-dela de sa capacite** — la tukallafu nafsun illa wus'aha : le principe de proportionnalite (klf/wse) est universel — chaque ame (nfs) est chargee seulement a la mesure de sa largeur/capacite.\n" +
"\n" +
"**sans tort pour aucun des parents** — la tudarra walidatun bi waladiha wa la mawludun lahu bi waladihi : le principe de non-nuisance (drr) protege les deux parents — la mere et le pere ne doivent pas subir de tort a cause de l'enfant.\n" +
"\n" +
"**d'un commun agrement et deliberation** — 'an taradin minhuma wa tashawurin : le sevrage (fsl) anticipe exige le consentement mutuel (rdy, Form VI = reciprocite) et la deliberation/consultation (shwr).\n" +
"\n" +
"**Craignez Dieu** — ittaqu Allaha : l'imperatif de la taqwa (wqy) conclut le cadre juridique par une injonction morale. Sachez (i'lamu, de elm) que Dieu est Temoin (basir, de bsr).\n" +
"\n" +
"§CRITIQUE§\n" +
"Hamidullah traduit 'hawlayni kamilayni' par 'deux annees completes'. Le terme hawl (de hwl) est fondamentalement le cycle/tour complet — l'annee etant le cycle solaire. 'Deux cycles complets' preserve mieux l'image du retour cyclique inherente a la racine. L'usage de 'annees' est correct mais efface la notion de cycle.\n" +
"\n" +
"Hamidullah traduit 'rizquhunna wa kiswatuhunna' par 'les nourrir et les vetir'. Rizq (de rzq) est plus large que 'nourriture' — c'est la provision vitale dans son ensemble (nourriture, logement, necessaire de vie). 'Sustentation' serait plus fidele a l'etendue de la racine rzq.\n" +
"\n" +
"Hamidullah traduit 'junaha' par 'peche'. Junah (de jnh) est litteralement l'inclinaison/penchant vers la faute — la responsabilite morale de s'etre incline vers le mal. 'Peche' est trop theologique ; 'inclinaison vers la faute' ou 'faute' est plus precis etymologiquement.\n" +
"\n" +
"Hamidullah traduit 'basir' par 'voit bien'. Basir (de bsr) est Celui qui voit, le Temoin — l'attribut divin de la vision totale et parfaite. 'Temoin' capture mieux la dimension de surveillance et de responsabilite devant Dieu que 'voit bien'.",
    segments: [
      { fr: "Les meres allaitent leurs enfants", pos: "verbe", phon: "al-walidatu yurdi'na awladahunna", arabic: "وَٱلْوَٰلِدَٰتُ يُرْضِعْنَ أَوْلَـٰدَهُنَّ", word_key: "rde", is_particle: false, sense_retenu: "allaitement/sustentation", position: 1 },
      { fr: "pendant deux cycles complets", pos: "nom", phon: "hawlayni kamilayni", arabic: "حَوْلَيْنِ كَامِلَيْنِ", word_key: "hwl", is_particle: false, sense_retenu: "cycle/annee", position: 2 },
      { fr: "pour celui qui desire accomplir l'allaitement", pos: "verbe", phon: "liman arada an yutimma al-rada'ata", arabic: "لِمَنْ أَرَادَ أَن يُتِمَّ ٱلرَّضَاعَةَ", word_key: "tmm", is_particle: false, sense_retenu: "achevement/completude", position: 3 },
      { fr: "Il incombe [au pere] de les sustenter et vetir convenablement", pos: "nom", phon: "rizquhunna wa kiswatuhunna bi al-ma'rufi", arabic: "رِزْقُهُنَّ وَكِسْوَتُهُنَّ بِٱلْمَعْرُوفِ", word_key: "rzq", is_particle: false, sense_retenu: "provision/subsistance", position: 4 },
      { fr: "Nulle ame n'est chargee au-dela de sa capacite", pos: "verbe", phon: "la tukallafu nafsun illa wus'aha", arabic: "لَا تُكَلَّفُ نَفْسٌ إِلَّا وُسْعَهَا", word_key: "klf", is_particle: false, sense_retenu: "charge/imposition", position: 5 },
      { fr: "La mere ne subit pas de tort a cause de son enfant", pos: "verbe", phon: "la tudarra walidatun bi waladiha", arabic: "لَا تُضَآرَّ وَٰلِدَةٌۢ بِوَلَدِهَا", word_key: "drr", is_particle: false, sense_retenu: "nuisance/tort", position: 6 },
      { fr: "ni le pere a cause de son enfant", is_particle: true, phon: "wa la mawludun lahu bi waladihi", arabic: "وَلَا مَوْلُودٌ لَّهُۥ بِوَلَدِهِۦ", position: 7 },
      { fr: "S'ils veulent sevrer d'un commun agrement et deliberation", pos: "nom", phon: "fa in arada fisalan 'an taradin minhuma wa tashawurin", arabic: "فَإِنْ أَرَادَا فِصَالًا عَن تَرَاضٍ مِّنْهُمَا وَتَشَاوُرٍ", word_key: "fsl", is_particle: false, sense_retenu: "separation/sevrage", position: 8 },
      { fr: "il n'y a pas d'inclinaison vers la faute pour eux", pos: "nom", phon: "fa la junaha 'alayhima", arabic: "فَلَا جُنَاحَ عَلَيْهِمَا", word_key: "jnh", is_particle: false, sense_retenu: "inclinaison/penchant", position: 9 },
      { fr: "Si vous confiez vos enfants a une nourrice, pas d'inclinaison vers la faute", is_particle: true, phon: "wa in aradtum an tastaradi'u awladakum fa la junaha 'alaykum", arabic: "وَإِنْ أَرَدتُّمْ أَن تَسْتَرْضِعُوٓا۟ أَوْلَـٰدَكُمْ فَلَا جُنَاحَ عَلَيْكُمْ", position: 10 },
      { fr: "pourvu que vous remettiez ce que vous avez convenu convenablement", is_particle: true, phon: "idha sallamtum ma ataytum bi al-ma'rufi", arabic: "إِذَا سَلَّمْتُم مَّآ ءَاتَيْتُم بِٱلْمَعْرُوفِ", position: 11 },
      { fr: "Craignez Dieu et sachez que Dieu est Temoin de ce que vous faites", pos: "verbe", phon: "wa ittaqu Allaha wa i'lamu anna Allaha bima ta'maluna basir", arabic: "وَٱتَّقُوا۟ ٱللَّهَ وَٱعْلَمُوٓا۟ أَنَّ ٱللَّهَ بِمَا تَعْمَلُونَ بَصِيرٌ", word_key: "wqy", is_particle: false, sense_retenu: "protection/piete", position: 12 }
    ],
    vwa: [
      {
        word_key: "wld",
        position: 1,
        sense_chosen: "naissance/generation",
        analysis_axes: {
          sense_chosen: "naissance/generation",
          concept_chosen: "Naissance/Generation",
          concepts: {
            "Naissance/Generation": {
              status: "retenu",
              senses: ["naitre", "enfanter", "mere", "pere", "fils", "progéniture", "descendance"],
              proof_ctx: "La racine w-l-d (waw-lam-dal) couvre le champ semantique de la naissance et de la generation. Le Lane's donne : naitre, enfanter, mettre au monde, engendrer. Al-walidat = les meres (celles qui ont enfante). Al-mawlud lahu = celui pour lequel l'enfant est ne (le pere). La relation de generation est au coeur de ce verset.",
              axe1_verset: "Le verset 233 emploie la racine wld dans trois formes differentes : al-walidatu (les meres, pos=1), al-mawlud lahu (le pere, pos=14/31), wa-l-waridat biwaladiha (la mere avec son enfant, pos=28-29). La racine structure toute la triade familiale mere-pere-enfant autour du fait de la naissance et de la generation. Chaque emploi designe un role different lie a la meme relation de naissance.",
              axe2_voisins: "Le verset 232 traitait du retour des epouses divorcees. Le verset 233 etend la protection aux enfants nes du mariage. La racine wld relie directement les deux versets : la dissolution du mariage (divorce) a des consequences sur les enfants nes (wld) de cette union. La continuite wld (generation) assure la protection de la progéniture apres la separation.",
              axe3_sourate: "La racine wld est recurrente dans la section matrimoniale de al-Baqarah. Les verses 228, 232, 233, 234 traitent tous des consequences du divorce sur les enfants et epouses. La wld (naissance/generation) est le lien biologique qui cree des obligations meme apres la dissolution du mariage.",
              axe4_coherence: "La racine wld apparait plus de 100 fois dans le Coran sous diverses formes (walad, walid, mawlud, walidat). La relation de generation est une des relations fondamentales dans le texte sacre — elle cree des droits et des obligations irreductibles. La filiation biologique (nasab) est sacree et inaliénable.",
              axe5_frequence: "Pour le contexte juridique de ce verset, la distinction entre al-walidatu (les meres, celles qui allaitent) et al-mawlud lahu (le pere, celui pour lequel l'enfant est ne) est significative : la mere est designee par son acte d'enfantement, le pere par sa relation de filiation. Cette asymetrie reflète les roles biologiques distincts."
            }
          }
        }
      },
      {
        word_key: "rde",
        position: 2,
        sense_chosen: "allaitement/sustentation",
        analysis_axes: {
          sense_chosen: "allaitement/sustentation",
          concept_chosen: "Allaitement/Sustentation",
          concepts: {
            "Allaitement/Sustentation": {
              status: "retenu",
              senses: ["allaiter", "nourrir du sein", "sustenter", "nourrice", "lait maternel"],
              proof_ctx: "La racine r-d-' (ra-dal-'ayn) couvre le champ de l'allaitement maternel. Le Lane's donne : allaiter, donner le sein, nourrir du lait maternel. Yurdi'na = elles allaitent (inaccompli 3FP). Al-rada'a = l'allaitement comme periode ou acte accompli. La racine exprime le lien vital du lait maternel entre la mere et l'enfant.",
              axe1_verset: "La racine rde apparait deux fois dans le verset : yurdi'na (pos=2, elles allaitent) et al-rada'ata (pos=11, l'allaitement comme terme). La premiere occurrence designe l'acte en cours ; la seconde, la periode complete. L'allaitement (rde) est a la fois un acte naturel et une periode juridiquement definie par le verset.",
              axe2_voisins: "Le verset 233 est le verset de reference pour le droit de l'allaitement dans l'islam. Il fixe la duree maximale (deux cycles) et les conditions du sevrage. La racine rde est le pivot autour duquel s'organisent toutes les obligations : provision (rzq), vetement (ksw), non-nuisance (drr), consentement (rdy) pour le sevrage.",
              axe3_sourate: "La racine rde n'apparait qu'en deux versets de al-Baqarah : ici (233) et le principe est rappele. Dans le reste du Coran, rde apparait notamment en S.31:14 (deux ans d'allaitement), S.2:233, S.65:6 (nourrice). La coheérence doctrinale est forte : deux ans est la reference coranique de l'allaitement complet.",
              axe4_coherence: "La racine rde apparait environ 5 fois dans le Coran. Le sens d'allaitement est constant et exclusif — jamais utilise pour d'autres types de nourriture. L'allaitement (rada'a) cree une relation de mahrémité (interdit de mariage) en droit islamique classique.",
              axe5_frequence: "Le verset precise 'liman arada an yutimma al-rada'ata' (pour celui qui desire accomplir l'allaitement) : les deux ans sont le maximum, non le minimum obligatoire. La liberte de choix (rada'a ou pas pendant deux ans complets) est encadree par le principe de non-nuisance (drr) pour les deux parents."
            }
          }
        }
      },
      {
        word_key: "hwl",
        position: 4,
        sense_chosen: "cycle/annee",
        analysis_axes: {
          sense_chosen: "cycle/annee",
          concept_chosen: "Cycle/Annee",
          concepts: {
            "Cycle/Annee": {
              status: "retenu",
              senses: ["annee", "cycle solaire", "tour complet", "revolution", "periode cyclique"],
              proof_ctx: "La racine h-w-l (ha-waw-lam) signifie le tour, le cycle complet. Le Lane's donne : annee (comme cycle complet du soleil), tour, revolution autour d'un centre. Hawlayni = deux cycles/annees (duel). Hawl designe fondamentalement le 'autour de' — hawla = autour, donc l'annee est le retour cyclique du soleil a son point de depart.",
              axe1_verset: "Hawlayni kamilayni (deux cycles complets) est la duree maximale d'allaitement. Le duel de hawl souligne que c'est exactement deux cycles — ni plus, ni moins si les deux parents consentent a un sevrage anticipe. La precision kamilayni (complets, de kml) renforce que les cycles sont entiers.",
              axe2_voisins: "Le verset 234 utilise 'arba'ata ashhurin wa 'ashran' (quatre mois et dix jours) pour le delai d'attente de la veuve. Les deux versets (233 et 234) sont complementaires dans leur gestion des periodes post-dissolution du mariage : deux cycles pour l'allaitement (233), quatre mois et dix pour le deuil (234).",
              axe3_sourate: "La racine hwl apparait en S.2:233, S.46:15 (trente mois), S.65:4 (periode d'attente). La notion de cycle temporel est liee aux droits et obligations post-separation. Les periodes sont calculees en cycles (hawl) ou en mois (shahr), selon la nature de la situation.",
              axe4_coherence: "La racine hwl apparait environ 30 fois dans le Coran, principalement au sens d'annee et de cycle. La conception cyclique du temps (hawl = tour complet) est distincte de la conception lineaire. L'allaitement pendant deux hawl complets est la reference coranique de base pour la duree maximale.",
              axe5_frequence: "Le choix du terme hawl (cycle) plutot que sana (annee lineaire) est significatif : il s'agit d'un retour cyclique, une mesure naturelle liee au cosmos. La duree de deux cycles (environ 24 mois) est aussi la duree minimum de developpement du cerveau de l'enfant dans les conceptions modernes, ce qui souligne la pertinence du terme cyclique."
            }
          }
        }
      },
      {
        word_key: "kml",
        position: 5,
        sense_chosen: "completude/perfection",
        analysis_axes: {
          sense_chosen: "completude/perfection",
          concept_chosen: "Completude/Perfection",
          concepts: {
            "Completude/Perfection": {
              status: "retenu",
              senses: ["complet", "entier", "parfait", "acheve", "sans manque"],
              proof_ctx: "La racine k-m-l (kaf-mim-lam) signifie la completude et l'integrite. Le Lane's donne : etre complet, entier, parfait, sans manque ni defaut. Kamilayni = deux complets (duel masculin, qualifiant hawlayni). La completude (kml) est l'etat d'absence totale de manque.",
              axe1_verset: "Kamilayni (deux complets) qualifie hawlayni (deux cycles). La precision de completude souligne que les deux cycles d'allaitement doivent etre integres — sans deduction arbitraire d'un ou deux mois. La kml assure la protection de la duree maximale contre des reductions non consensuelles.",
              axe2_voisins: "La completude (kml) est mise en regard avec l'achevement (tmm) dans le meme verset : kamilayni (v. 5) et yutimma (v. 10). Les deux racines sont synonymiques dans ce contexte mais avec une nuance : kml decrit l'etat (complet), tmm decrit l'action d'achever (completer). La completude est l'objectif, l'achevement est l'acte.",
              axe3_sourate: "La racine kml apparait en S.2:185 ('fa man shahida minkum al-shahra falyasumhu' suivi de 'wa litutmilu al-'iddata'), S.2:233 (hawlayni kamilayni), S.5:3 ('al-yawma akmaltu lakum dinakum'). La completude est une valeur coranique importante : la religion complete (5:3), le jeune complet (2:185), l'allaitement complet (2:233).",
              axe4_coherence: "La racine kml apparait environ 10 fois dans le Coran. Le sens de completude est constant. La completude (kml) est distinct de l'achevement (tmm) : kml designe l'etat final d'integrite, tmm designe le processus d'arriver a cet etat. Kamilayni (complets) = les deux cycles sont integres, pas tronques.",
              axe5_frequence: "L'insistance sur kamilayni (complets) dans ce verset a une portee juridique : elle empeche le pere de reduire arbitrairement la periode d'allaitement sous pretexte d'economie. La mere ne peut etre contrainte a sevrer avant le terme de son choix, et le pere ne peut refuser de financer une periode reduite si la mere choisit moins de deux cycles."
            }
          }
        }
      },
      {
        word_key: "rwd",
        position: 8,
        sense_chosen: "desir/intention",
        analysis_axes: {
          sense_chosen: "desir/intention",
          concept_chosen: "Desir/Intention",
          concepts: {
            "Desir/Intention": {
              status: "retenu",
              senses: ["vouloir", "desirer", "chercher", "avoir l'intention", "tendre vers"],
              proof_ctx: "La racine r-w-d (ra-waw-dal) signifie le desir oriente et l'intention volontaire. Le Lane's donne : vouloir, desirer, chercher, avoir l'intention de, tendre vers un but. Arada = il voulut/il desire (accompli 3MS). Le sens est l'orientation deliberee de la volonte vers un objectif.",
              axe1_verset: "La racine rwd apparait trois fois dans le verset : arada (pos=8, celui qui desire accomplir l'allaitement), arada (pos=41, s'ils veulent sevrer), aradtum (pos=52, si vous voulez une nourrice). Le verset structure les droits autour du desir/intention des parties : chaque decision (allaitement complet, sevrage, nourrice) requiert une volonte deliberee.",
              axe2_voisins: "Dans les versets precedents (229-232), la meme racine rwd est utilisee pour les decisions matrimoniales : la decision de maintenir ou de rompre le mariage. Le verset 233 etend ce schema decisionnel a la gestion post-divorce de l'enfant. La volonte (rwd) est toujours le moteur des decisions juridiques.",
              axe3_sourate: "La racine rwd est tres frequente dans al-Baqarah, notamment dans les sections sur le jeune (S.2:185 : 'yuridu Allah bikum al-yusra'), la guerre (2:190), les donations (2:207). L'irada (volonte/intention) est une notion centrale : elle distingue l'acte volontaire de la contrainte.",
              axe4_coherence: "La racine rwd apparait environ 140 fois dans le Coran sous diverses formes (arada, yurid, irada). La volonte (irada) est l'une des categories fondamentales de la theologie islamique : l'irada divine et l'irada humaine. Dans un contexte juridique, l'irada est l'intention qui donne validite a un acte.",
              axe5_frequence: "La structure 'liman arada an yutimma' (pour celui qui desire accomplir) signifie que les deux cycles sont un droit, non une obligation. Le desir/intention (rwd) de completer l'allaitement est le critere d'application de la reglen — ceux qui ne desirent pas completer les deux cycles peuvent convenir d'un sevrage anticipe sous conditions."
            }
          }
        }
      },
      {
        word_key: "tmm",
        position: 10,
        sense_chosen: "achevement/completude",
        analysis_axes: {
          sense_chosen: "achevement/completude",
          concept_chosen: "Achevement/Completude",
          concepts: {
            "Achevement/Completude": {
              status: "retenu",
              senses: ["completer", "achever", "accomplir entierement", "mener a terme", "realisation integrale"],
              proof_ctx: "La racine t-m-m (ta-mim-mim) signifie l'achevement total et definitif. Le Lane's donne : completer, achever, mener a terme, accomplir jusqu'au bout, realiser integralement. Yutimma = qu'il complete/acheve (inaccompli subjonctif Form IV). L'achevement (tmm) est la realisation integrale sans reste ni manque.",
              axe1_verset: "Yutimma al-rada'ata (qu'il acheve l'allaitement) designe l'acte de mener les deux cycles jusqu'a leur terme. La Form IV (atamma) est causative : celui qui desire 'faire achever' l'allaitement — soit la mere continue jusqu'au terme, soit on laisse le processus se completer. L'achevement (tmm) est l'objectif de la periode de deux cycles.",
              axe2_voisins: "La racine tmm est en correspondance avec kml dans le meme verset : kamilayni (complets, etat) et yutimma (achever, action). La kml decrit l'etat d'integrite des deux cycles, la tmm decrit l'action de les mener jusqu'a leur terme. Les deux racines se completent : la completude est l'etat vise par l'achevement.",
              axe3_sourate: "La racine tmm apparait en S.2:150 ('wa litutimmu al-'iddata'), S.2:187 ('thumma atimmu al-siyama'), S.2:233 ('an yutimma al-rada'ata'). L'achevement d'une periode est un pattern recurrent dans al-Baqarah : jeune, idda (delai), allaitement. L'achevement des periodes est une exigence de la loi divine.",
              axe4_coherence: "La racine tmm apparait environ 60 fois dans le Coran. Le sens d'achevement/completion est constant. La tmm est distincte de la kml : tmm est l'acte dynamique de completer (verbe), kml est l'etat statique d'etre complet (adjectif). Les deux racines sont complementaires dans leur description de la completude.",
              axe5_frequence: "L'expression 'an yutimma al-rada'ata' (qu'il acheve l'allaitement) est la formulation d'un droit conditionnel : si l'intention est d'achever (tmm), alors la duree de deux cycles s'applique. Cette conditionnalite protege la liberte des parties tout en fixant un cadre maximal clair."
            }
          }
        }
      },
      {
        word_key: "rzq",
        position: 16,
        sense_chosen: "provision/subsistance",
        analysis_axes: {
          sense_chosen: "provision/subsistance",
          concept_chosen: "Provision/Subsistance",
          concepts: {
            "Provision/Subsistance": {
              status: "retenu",
              senses: ["provision", "nourriture", "ce qui soutient la vie", "allocation", "moyen de subsistance"],
              proof_ctx: "La racine r-z-q (ra-zay-qaf) signifie la provision et la sustentation vitale. Le Lane's donne : pourvoir en nourriture et necessites vitales, allocation, ce qui soutient la vie. Rizquhunna = leur provision/subsistance (a elles, les meres allaitantes). Le rizq est ce que Dieu ou l'autorite competente alloue pour maintenir la vie.",
              axe1_verset: "Rizquhunna wa kiswatuhunna bi al-ma'rufi (leur provision et leur vetement convenablement) : le pere (al-mawlud lahu) a deux obligations envers les meres allaitantes — la sustentation (rzq) et le vetement (ksw). Ces deux obligations couvrent les besoins vitaux : nourriture et couverture du corps. La conjonction 'wa' (et) les place sur un pied d'egalite.",
              axe2_voisins: "Le verset 231 parlait des droits des femmes divorcees. Le verset 233 etend la protection materielle a la mere allaitante meme apres divorce. Le rizq est une obligation perpetuee par l'allaitement : tant que la mere allaite, le pere doit la sustenter. Le rizq cree un lien de dependance economique justifie par le service d'allaitement.",
              axe3_sourate: "La racine rzq est tres frequente dans al-Baqarah : S.2:3, 22, 25, 60, 172, 212, 254, 261. Le rizq est un concept central : ce que Dieu dispense, ce que l'homme doit dispenser. En contexte juridique (2:233), le rizq est une obligation legale du pere envers la mere allaitante.",
              axe4_coherence: "La racine rzq apparait plus de 120 fois dans le Coran. Le sens de provision vitale est constant. La distinction entre le rizq divin (ce que Dieu dispense) et le rizq humain (ce que l'homme est oblige de fournir) est importante : ici, le rizq est une obligation legale humaine, reflet de l'obligation divine de sustenter la vie.",
              axe5_frequence: "Le rzq dans ce verset est specifiquement pour les meres allaitantes (rizquhunna = leur provision a elles). Ce n'est pas le rzq de l'enfant directement, mais le rizq de la mere en compensation de son service d'allaitement. Cette precision protege la mere comme prestatrice d'un service vital pour l'enfant."
            }
          }
        }
      },
      {
        word_key: "ksw",
        position: 17,
        sense_chosen: "vetement/couverture",
        analysis_axes: {
          sense_chosen: "vetement/couverture",
          concept_chosen: "Vetement/Couverture",
          concepts: {
            "Vetement/Couverture": {
              status: "retenu",
              senses: ["vetir", "habiller", "couvrir", "vetement", "ce qui couvre le corps"],
              proof_ctx: "La racine k-s-w (kaf-sin-waw) signifie le vetement et l'acte de couvrir le corps. Le Lane's donne : vetir, habiller, couvrir d'un vetement, le vetement lui-meme. Kiswatuhunna = leur vetement/habillement (a elles, les meres allaitantes). La kiswa est a la fois l'acte de couvrir et le vetement comme objet.",
              axe1_verset: "Kiswatuhunna (leur vetement) est la seconde obligation du pere apres la provision (rzq). Le couple rzq + ksw couvre les deux besoins vitaux fondamentaux : nourriture (vie interieure) et vetement (protection exterieure). Bi al-ma'rufi (convenablement) qualifie les deux obligations ensemble : l'une et l'autre doivent etre accomplies selon la norme sociale reconnue.",
              axe2_voisins: "Le terme kiswa n'apparait qu'en S.2:233 dans al-Baqarah (au sens de vetement pour les epouses/meres). L'association rzq + ksw est la formule standard des obligations maritales/parentales dans la jurisprudence islamique. Ces deux elements constituent la nafaqa (entretien) que le pere doit a la mere allaitante.",
              axe3_sourate: "La racine ksw apparait dans le Coran en S.2:233 (kiswa des meres allaitantes), S.4:5 (vetir les personnes sous tutelle), S.24:31 (voilement). Le vetement (kiswa) est toujours lie a la dignite et a la protection — couvrir quelqu'un est un acte de soin et de responsabilite.",
              axe4_coherence: "La racine ksw apparait environ 15 fois dans le Coran. Le sens de vetement/couverture est constant. La kiswa est une obligation que le responsable doit accomplir envers ceux qui dependent de lui : elle exprime la responsabilite de pourvoir a la dignite corporelle d'autrui.",
              axe5_frequence: "La formula 'rizquhunna wa kiswatuhunna bi al-ma'rufi' est devenue la base juridique de la nafaqa en droit islamique : l'obligation du mari/pere de pourvoir a la nourriture (rzq) et au vetement (ksw) de ceux qui dependent de lui, selon les normes sociales reconnues (ma'ruf). Cette formule concise fonde tout le droit de l'entretien conjugal et parental."
            }
          }
        }
      },
      {
        word_key: "erf",
        position: 18,
        sense_chosen: "convention/bienfait",
        analysis_axes: {
          sense_chosen: "convention/bienfait",
          concept_chosen: "Convention/Bienfait",
          concepts: {
            "Convention/Bienfait": {
              status: "retenu",
              senses: ["ce qui est connu/reconnu", "bienfait", "convention sociale", "ce qui est convenable", "usage etabli"],
              proof_ctx: "La racine '-r-f ('ayn-ra-fa) signifie ce qui est connu et reconnu. Le Lane's donne : connaitre, reconnaitre, ce qui est socialement connu comme bien, bienfait, convention etablie, usage reconnu. Al-ma'rufi = le convenable/l'usage reconnu (issu du participe passif de Form IV : ce qui est rendu connu). Bi al-ma'rufi = selon l'usage reconnu.",
              axe1_verset: "Bi al-ma'rufi (convenablement/selon l'usage reconnu) apparait deux fois dans le verset : une fois pour qualifier les obligations du pere (rzq + ksw), une fois pour qualifier la remise de la remuneration a la nourrice. Le ma'ruf est la norme sociale positive qui calibre les obligations — ni trop ni trop peu, mais selon ce qui est reconnu comme juste.",
              axe2_voisins: "La racine erf ('ayn-ra-fa) est un fil conducteur de la section matrimoniale : S.2:228 (ma'ruf pour les droits des femmes divorcees), S.2:229 (imsakun bi ma'rufin, retenir avec bienfait), S.2:231 (tasyiruhunna bi ma'rufin, les congedier avec bienfait), S.2:232 (bi al-ma'rufi), S.2:233 (deux occurrences). Le ma'ruf est le standard ethique de tout le droit matrimonial.",
              axe3_sourate: "La racine erf et le terme ma'ruf sont parmi les plus frequents dans al-Baqarah. Le ma'ruf est la notion coranique centrale de la norme sociale positive — ce que la communaute reconnait comme bon et convenable. Il s'oppose au munkar (ce qui est desavoue/reprehensible).",
              axe4_coherence: "La racine erf apparait environ 70 fois dans le Coran. Le ma'ruf est un concept ethico-social fondamental dans l'islam : c'est l'ensemble des pratiques reconnues comme bonnes par la communaute croyante et raisonnee. Il est adaptatif : le ma'ruf peut varier selon les contextes sociaux, mais exprime toujours la norme positive reconnue.",
              axe5_frequence: "L'usage du ma'ruf comme standard des obligations (rzq, ksw, remuneration de nourrice) est sophistique juridiquement : il evite la rigidite d'un montant fixe et permet l'adaptation aux situations economiques variables. Ce que le ma'ruf exige varie selon les capacites (wus'a) de chacun, ce qui explique l'enchainnement des deux principes dans le verset."
            }
          }
        }
      },
      {
        word_key: "klf",
        position: 21,
        sense_chosen: "charge/imposition",
        analysis_axes: {
          sense_chosen: "charge/imposition",
          concept_chosen: "Charge/Imposition",
          concepts: {
            "Charge/Imposition": {
              status: "retenu",
              senses: ["charger", "imposer une charge", "obliger", "burden", "contrainte"],
              proof_ctx: "La racine k-l-f (kaf-lam-fa) signifie l'imposition d'une charge sur quelqu'un. Le Lane's donne : imposer une charge, obliger quelqu'un a ce qui est au-dela de ses forces, charger. La tukallafu = elle n'est pas chargee (inaccompli passif Form II). La Form II intensive : l'imposition deliberee d'une charge lourde. Le taklif est l'obligation imposee.",
              axe1_verset: "La tukallafu nafsun illa wus'aha (nulle ame n'est chargee au-dela de sa capacite) est un principe de proportionnalite : la charge (klf) ne peut depasser la capacite (wse). Ce principe s'applique aux obligations du pere (rzq + ksw) et aux obligations de la mere (allaitement) — nul ne peut etre force au-dela de ce qu'il peut accomplir.",
              axe2_voisins: "Le verset 286 de la meme sourate (la yukallif Allah nafsan illa wus'aha) reprend la meme formule exacte. C'est une des formules cles de al-Baqarah : le principe de capacite limite fonde la jurisprudence de la facilite (yusr) et empeche l'oppression. Ici (v.233) le principe s'applique au droit de la famille specifiquement.",
              axe3_sourate: "La racine klf est fondamentale dans la theologie juridique coranique. Le taklif (imposition de charges/obligations) est le concept central du droit islamique : Dieu impose des obligations (takalif) a la mesure de ce que les ames peuvent supporter. Le principe 'la yukallifu nafsan illa wus'aha' est repete pour souligner que les obligations divines sont toujours dans les limites du possible.",
              axe4_coherence: "La racine klf apparait environ 15 fois dans le Coran. Le sens d'imposition de charge est constant. Le taklif est le fondement de la theorie de la responsabilite en droit islamique : seul un etre capable (mukallaf) peut etre tenu responsable de ses actes. La capacite (wus'a) est la condition de l'imputabilite.",
              axe5_frequence: "Le principe 'la tukallafu nafsun illa wus'aha' dans ce verset a une application pratique immediate : le pere qui n'a pas les moyens d'assurer le rizq et la kiswa dans leur totalite ne peut etre force qu'a la mesure de ses capacites reelles. La jurisprudence islamique a developpe ce principe pour moduler les obligations alimentaires selon les ressources de chacun."
            }
          }
        }
      },
      {
        word_key: "nfs",
        position: 22,
        sense_chosen: "ame/personne",
        analysis_axes: {
          sense_chosen: "ame/personne",
          concept_chosen: "Ame/Personne",
          concepts: {
            "Ame/Personne": {
              status: "retenu",
              senses: ["ame", "souffle vital", "soi", "personne", "etre vivant", "identite propre"],
              proof_ctx: "La racine n-f-s (nun-fa-sin) signifie l'ame et la personne dans son individualite. Le Lane's donne : ame, souffle vital, soi, personne, etre vivant dans son individualite. Nafsun = une ame (indefini, forme nominative). La nafs est l'individu comme sujet moral et juridique — la personne responsable.",
              axe1_verset: "La tukallafu nafsun (nulle ame n'est chargee) emploie nafs comme sujet de l'imposition (klf). La nafs est l'entite qui supporte les obligations et les droits. L'indefini (nafsun, sans article) signifie n'importe quelle ame, toute personne — universalite du principe. Plus loin (pos=8), 'bi anfusihinna' (par/avec elles-memes) designe les femmes dans leur autonomie.",
              axe2_voisins: "Le verset 286 (la yukallif Allah nafsan illa wus'aha) reprend la meme structure. La nafs est le sujet de la responsabilite morale et juridique dans l'islam. La distinction entre al-nafs (l'ame dans sa singularite) et al-ruh (l'esprit/souffle divin) est importante : nafs est la personne individuelle et responsable.",
              axe3_sourate: "La racine nfs est l'une des plus frequentes dans al-Baqarah (nafs, anfus, nufus). La nafs est le sujet moral fondamental du Coran — c'est elle qui croit, qui agit, qui porte la responsabilite et qui recoit la recompense ou la sanction. La nafs est le locus de la responsabilite individuelle.",
              axe4_coherence: "La racine nfs apparait plus de 280 fois dans le Coran — c'est l'un des termes les plus frequents. Le sens d'ame/personne individuelle est constant. La nafs est le sujet moral et juridique par excellence dans le texte coranique.",
              axe5_frequence: "Dans le contexte juridique du verset 233, la nafs comme sujet de l'obligation (klf) souligne que les obligations de sustentation (rzq) et de vetement (ksw) ne peuvent depasser la capacite reelle de la personne. Le droit de la famille en islam est fonde sur ce principe : l'obligation est proportionnelle a la capacite (wus'a) de la nafs."
            }
          }
        }
      },
      {
        word_key: "wse",
        position: 24,
        sense_chosen: "capacite/largeur",
        analysis_axes: {
          sense_chosen: "capacite/largeur",
          concept_chosen: "Capacite/Largeur",
          concepts: {
            "Capacite/Largeur": {
              status: "retenu",
              senses: ["capacite", "possibilite", "largeur", "ce qu'on peut contenir", "portee"],
              proof_ctx: "La racine w-s-' (waw-sin-'ayn) signifie la largeur et la capacite. Le Lane's donne : etre large, avoir de l'espace, capacite, possibilite, ce qu'on peut contenir ou faire. Wus'aha = sa capacite (a elle, l'ame). La wus'a est la mesure de ce qu'un etre peut supporter ou accomplir — l'amplitude de ses forces.",
              axe1_verset: "Wus'aha (sa capacite) est le complement de l'imposition : la tukallafu nafsun illa wus'aha (l'ame n'est chargee qu'a la mesure de sa capacite/largeur). La wus'a est la limite naturelle et juste de l'obligation — ce qui est dans l'espace de possibilite de l'individu. La largeur (wse) est l'image spatiale de la capacite.",
              axe2_voisins: "Le verset 286 reprend la meme formule (la yukallif Allah nafsan illa wus'aha). La wus'a est la capacite reelle, effective — pas theorique ou ideale. Dans le contexte des obligations familiales (rzq, ksw), la wus'a est la capacite economique reelle du pere : il ne peut etre oblige qu'a la mesure de ses ressources.",
              axe3_sourate: "La racine wse apparait en S.2:233, 255 (wasi'a kursiyyuhu, Son trone embrasse tout), 261, 268. Le sens de largeur/capacite est constant. L'image de la largeur (wse) exprime la bonté et l'amplitude : Dieu est al-Wasi' (l'Ample), dont la largeur embrasse tout.",
              axe4_coherence: "La racine wse apparait environ 30 fois dans le Coran. Le sens de largeur/capacite est constant. La wus'a est la capacite individuelle — ce que l'etre peut contenir, supporter, accomplir. L'obligation juridique est toujours calibree sur la wus'a pour etre juste et non oppressive.",
              axe5_frequence: "La wus'a comme limite de l'obligation (klf) est le fondement de la theorie de la facilite (yusr) en droit islamique. Allah veut la facilite (yusr) et non la difficulte ('usr) — ce principe fonde l'adaptation des obligations aux capacites reelles. En contexte matrimonial et parental, la wus'a empeche que des obligations legales deviennent des instruments d'oppression."
            }
          }
        }
      },
      {
        word_key: "drr",
        position: 27,
        sense_chosen: "nuisance/tort",
        analysis_axes: {
          sense_chosen: "nuisance/tort",
          concept_chosen: "Nuisance/Tort",
          concepts: {
            "Nuisance/Tort": {
              status: "retenu",
              senses: ["nuire", "causer du tort", "dommage", "prejudice", "harm"],
              proof_ctx: "La racine d-r-r (dal-ra-ra) signifie la nuisance et le tort cause. Le Lane's donne : nuire, causer du tort, dommage, prejudice, harm. La tudarra = elle n'est pas lesee/blessee (inaccompli passif). La darar est le prejudice inflige a quelqu'un — le tort qui lui est cause. La double forme (d-r-r) souligne l'intensite ou la repetition du tort.",
              axe1_verset: "La tudarra walidatun bi waladiha wa la mawludun lahu bi waladihi (la mere ne subit pas de tort par son enfant, ni le pere par son enfant) : le principe de non-nuisance (drr) protege les deux parents symetriquement. L'enfant ne peut etre utilise comme instrument de nuisance entre les parents — ni la mere ne peut nuire au pere via l'enfant, ni le pere a la mere.",
              axe2_voisins: "Le verset 231 (wa la tumsikuhunna dirar = ne les retenez pas pour leur nuire) utilisait la meme racine drr. La non-nuisance (la darar wa la dirar, hadith prophetique cite par les juristes) est un principe fondamental du droit islamique. Le verset 233 l'applique specifiquement a la relation parents-enfant apres divorce.",
              axe3_sourate: "La racine drr apparait en S.2:231 (dirar = dans un but de nuisance), S.2:233 (tudarra). La nuisance intentionnelle (dirar = nuire deliberement) est expressement interdite dans les relations matrimoniales et parentales. Le principe de non-nuisance structure tout le droit de la famille coranique.",
              axe4_coherence: "La racine drr apparait environ 30 fois dans le Coran. Le sens de nuisance est constant. La distinction entre darr (nuisance non intentionnelle) et dirar (nuisance intentionnelle, Form III) est importante dans le droit islamique. Le verset 233 utilise le passif (tudarra = subir un tort) pour souligner la protection de la mere.",
              axe5_frequence: "Le principe 'la darar wa la dirar' (ni nuisance, ni nuisance en retour) attribue au Prophete est directement fonde sur ces versets. Il est devenu l'une des maximes juridiques (qawa'id fiqhiyya) les plus importantes en droit islamique. Le verset 233 l'applique symetriquement aux deux parents : ni la mere ne peut utiliser l'allaitement pour nuire au pere, ni le pere la sustenation pour forcer la mere."
            }
          }
        }
      },
      {
        word_key: "fsl",
        position: 42,
        sense_chosen: "separation/sevrage",
        analysis_axes: {
          sense_chosen: "separation/sevrage",
          concept_chosen: "Separation/Sevrage",
          concepts: {
            "Separation/Sevrage": {
              status: "retenu",
              senses: ["séparer", "sevrer", "trancher", "diviser", "l'acte de séparer ce qui était uni"],
              proof_ctx: "La racine f-s-l (fa-sin-lam) signifie la separation et le tranchement. Le Lane's donne : séparer, trancher, diviser ce qui etait uni, sevrer un enfant du sein. Fisalan = sevrage/separation (masdar/accusatif indefini). Le fasl est l'acte de couper le lien — en contexte d'allaitement, c'est le sevrage : l'acte de separer l'enfant du sein maternel.",
              axe1_verset: "Fa in arada fisalan 'an taradin minhuma wa tashawurin (s'ils veulent sevrer/separer d'un commun agrement et deliberation) : le sevrage (fsl) est encadre par deux conditions cumulatives — consentement mutuel (taradin, de rdy) et deliberation (tashawur, de shwr). Sans ces conditions, le sevrage anticipe n'est pas legitime.",
              axe2_voisins: "Le verset 233 contraste fsl (sevrage/separation) avec tmm (achevement) : soit on acheve les deux cycles (yutimma), soit on separe avant terme (fisalan). La decision de separer (fsl) avant le terme maximum requiert des conditions plus strictes que de simplement continuer.",
              axe3_sourate: "La racine fsl apparait notamment en S.2:233 (fisalan = sevrage). Dans le reste du Coran, fasl signifie : jugement/decision (yawm al-fasl = le Jour du Jugement/de la Decision), separation (entre le bien et le mal). La dimension de separation/tranchement est constante.",
              axe4_coherence: "La racine fsl apparait environ 40 fois dans le Coran. Le sens de separation/tranchement est constant mais s'exprime dans des contextes tres differents : sevrage (2:233), jugement (77:38, 44:40), decision divine (37:21). La fisala (sevrage) est une separation physique — le tranchement du lien d'allaitement.",
              axe5_frequence: "La condition 'an taradin wa tashawurin' (d'un commun agrement et deliberation) pour le sevrage anticipe (fisalan) etablit que les decisions importantes pour l'enfant doivent etre prises conjointement. Cette disposition protege l'enfant contre un sevrage premature unilateral impose par l'un des parents sans concertation."
            }
          }
        }
      },
      {
        word_key: "rdy",
        position: 44,
        sense_chosen: "agrement/consentement",
        analysis_axes: {
          sense_chosen: "agrement/consentement",
          concept_chosen: "Agrement/Consentement",
          concepts: {
            "Agrement/Consentement": {
              status: "retenu",
              senses: ["satisfaction", "accord mutuel", "consentement", "agrement", "reciprocite"],
              proof_ctx: "La racine r-d-y (ra-dal-ya) signifie la satisfaction et le consentement. Le Lane's donne : etre satisfait, agreer, consentir, accord mutuel. Taradin = d'un commun agrement/consentement (masdar de Form VI, tarada = s'agreer mutuellement). La Form VI exprime la reciprocite : les deux parties se donnent leur accord mutuel.",
              axe1_verset: "Taradin minhuma (d'un commun agrement d'eux deux) : la Form VI (taradin) exprime la reciprocite du consentement — non pas l'accord d'un seul mais l'agrement mutuel des deux parents. Ce consentement reciproque est la premiere condition du sevrage anticipe, suivie de la deliberation (tashawur).",
              axe2_voisins: "La racine rdy est liee a la racine erf (ma'ruf) dans la structure ethique du verset. Le ma'ruf (convention reconnue) est la norme objective ; le rida (agrement) est la dimension subjective du consentement. Les deux parents doivent a la fois agir selon la convention reconnue (erf) et se donner mutuellement leur agrement (rdy).",
              axe3_sourate: "La racine rdy est frequente dans al-Baqarah. Le rida Allah (l'agrement de Dieu) est l'une des notions spirituelles cles : l'objectif de l'action croyante est d'obtenir l'agrement divin. Dans le contexte juridique du v.233, le taradi (agrement mutuel) entre les parents est le reflet humain de cette notion.",
              axe4_coherence: "La racine rdy apparait environ 70 fois dans le Coran. Le sens d'agrement/satisfaction est constant. La distinction entre rida (agrement, satisfaction) et ridwan (agrément divin supreme) est importante. Taradin (Form VI) est toujours l'agrement reciproque — les deux parties se satisfont mutuellement.",
              axe5_frequence: "Le taradin (agrement mutuel) comme condition du sevrage (fsl) etablit un modele de decision parentale conjointe. Ce principe depasse le sevrage : toute decision importante concernant l'enfant requiert l'agrement mutuel des parents. La jurisprudence islamique a etendu ce principe a de nombreuses decisions parentales post-divorce."
            }
          }
        }
      },
      {
        word_key: "jnh",
        position: 48,
        sense_chosen: "inclinaison/penchant",
        analysis_axes: {
          sense_chosen: "inclinaison/penchant",
          concept_chosen: "Inclinaison/Penchant",
          concepts: {
            "Inclinaison/Penchant": {
              status: "retenu",
              senses: ["penchant vers la faute", "inclination blamable", "tendance", "responsabilite morale de pencher"],
              proof_ctx: "La racine j-n-h (jim-nun-ha) signifie l'inclinaison et le penchant. Le Lane's donne : s'incliner vers ce qui est blamable, penchant vers la faute, tendance condamnable. Junaha = inclinaison vers la faute (masdar/nom verbal). La junah est la responsabilite morale qui decoule du fait de s'etre incline vers le mal. La negation 'la junaha' = pas d'inclinaison, pas de faute.",
              axe1_verset: "La junah apparait deux fois dans le verset : fa la junaha 'alayhima (pos=48, pas d'inclinaison pour eux deux en cas de sevrage consenti) et fa la junaha 'alaykum (pos=57, pas d'inclinaison pour vous en cas de nourrice). Les deux 'la junaha' delimitent les domaines de liberte : tant que les conditions sont remplies, l'acte n'entraine pas d'inclinaison vers la faute.",
              axe2_voisins: "La racine jnh est utilisee en S.2:229 (la junaha 'alayhima fima aftadat), S.2:230 (la junaha 'alayhima), S.2:233 (deux occurrences), S.2:234, S.2:235. Le schema 'la junaha' est une formule juridique coranique pour declarer la licite conditionnelle d'un acte : l'acte ne cree pas de responsabilite penale/morale si les conditions sont remplies.",
              axe3_sourate: "La formule 'la junaha 'ala...' est une formule juridique recurrente dans al-Baqarah. Elle structure le droit en definissant les zones de licite : ce qui n'entraine pas de junah est permis sous conditions. La junah est la notion de responsabilite morale derivant d'un penchant condamnable.",
              axe4_coherence: "La racine jnh apparait environ 20 fois dans le Coran, principalement sous la forme 'la junaha'. Le sens d'inclinaison/penchant est constant. La junah est differente du ithm (faute morale grave) et du khatiya (erreur) — c'est specifiquement l'inclinaison vers ce qui est blamable, une nuance de responsabilite.",
              axe5_frequence: "L'utilisation repetee de 'la junaha' dans les versets sur le divorce et la famille (229-237) est significative : dans un domaine ou les decisions sont difficiles et les situations variees, le Coran delimite precisement les zones de liberte. 'La junaha' assure que les parties n'hesitent pas par crainte excessive de faire une faute, tant que les conditions (agrement mutuel, deliberation, remuneration convenable) sont remplies."
            }
          }
        }
      },
      {
        word_key: "wqy",
        position: 65,
        sense_chosen: "protection/piete",
        analysis_axes: {
          sense_chosen: "protection/piete",
          concept_chosen: "Protection/Piete",
          concepts: {
            "Protection/Piete": {
              status: "retenu",
              senses: ["se premunir", "proteger", "se garder de", "craindre en se protégeant", "taqwa"],
              proof_ctx: "La racine w-q-y (waw-qaf-ya) signifie la protection et le fait de se premunir. Le Lane's donne : se premunir, proteger contre le mal, se garder de, craindre en prenant des precautions. Ittaqu = craignez/protegez-vous (Form VIII, imperatif 2MP). La Form VIII (ittaqa) est reflexive : se premunir soi-meme, prendre garde pour soi. La taqwa est l'etat de vigilance protectrice contre le mal.",
              axe1_verset: "Ittaqu Allaha wa i'lamu anna Allaha bima ta'maluna basir (craignez Dieu et sachez que Dieu est Temoin de ce que vous faites) : la double injonction cloture le verset. Ittaqu (taqwa/protection) est l'attitude interieure ; i'lamu (elm/savoir) est l'affirmation cognitive. La taqwa fonde la conformite aux regles elaborees dans le verset.",
              axe2_voisins: "La formule ittaqu Allaha (craignez Dieu) est l'une des formules de cloture les plus frequentes dans al-Baqarah et dans le Coran. Elle rappelle que les regles juridiques ne sont pas seulement des normes externes mais des expressions de la relation avec Dieu. La taqwa est l'attitude interieure qui assure le respect sincere des regles.",
              axe3_sourate: "La racine wqy est fondamentale dans al-Baqarah : les mutaqun (ceux qui font preuve de taqwa) sont les destinataires privilegies du Coran (2:2). La taqwa est a la fois la crainte reverentielle de Dieu et la protection active contre ce qui lui deplait. Dans les versets juridiques, ittaqu Allaha rappelle que le respect des droits est une expression de la piete.",
              axe4_coherence: "La racine wqy apparait plus de 250 fois dans le Coran sous diverses formes (taqwa, muttaqin, ittaqa). La taqwa est l'une des valeurs centrales de l'ethique coranique — elle est a la fois crainte, vigilance, protection et piete. La Form VIII (ittaqa) exprime l'aspect reflexif : se proteger soi-meme en craignant Dieu.",
              axe5_frequence: "La formule ittaqu Allaha wa i'lamu (craignez Dieu et sachez) combine l'aspect emotionnel/moral (wqy = taqwa) et l'aspect cognitif (elm = savoir). Cette combinaison est significative : la piete sans connaissance risque d'etre mal orientee, et la connaissance sans piete risque d'etre sans effet moral. Les deux ensemble fondent le respect sincere des obligations familiales."
            }
          }
        }
      },
      {
        word_key: "elm",
        position: 66,
        sense_chosen: "savoir/connaissance",
        analysis_axes: {
          sense_chosen: "savoir/connaissance",
          concept_chosen: "Savoir/Connaissance",
          concepts: {
            "Savoir/Connaissance": {
              status: "retenu",
              senses: ["savoir", "connaitre", "connaissance certaine", "science", "etre informe"],
              proof_ctx: "La racine '-l-m ('ayn-lam-mim) signifie le savoir certain et la connaissance. Le Lane's donne : savoir, connaitre avec certitude, etre informe, la science. I'lamu = sachez (Form IV, imperatif 2MP). La Form IV (a'lama) est causative : faire savoir, informer. Ici, i'lamu = prenez conscience, sachez. La 'ilm est la connaissance certaine (par opposition a la zann, supposition).",
              axe1_verset: "I'lamu anna Allaha bima ta'maluna basir (sachez que Dieu est Temoin de ce que vous faites) : l'imperatif du savoir (elm) porte sur la conscience de la surveillance divine (basir). Savoir que Dieu est Temoin oriente le comportement vers la conformite sincere aux regles. Le savoir (elm) active la responsabilite morale.",
              axe2_voisins: "La paire wqy (taqwa) + elm (savoir) est frequente dans les formules de cloture coraniques. La taqwa est l'attitude interieure, le savoir en est la base cognitive. Connaitre (elm) que Dieu est Temoin (basir) fonde la taqwa : la conscience de la surveillance divine motive la crainte reverentielle.",
              axe3_sourate: "La racine elm est l'une des plus frequentes dans al-Baqarah et dans le Coran. Le 'ilm (savoir) est une valeur fondamentale de l'islam. La formule 'wa i'lamu anna Allaha...' est une formule d'instruction : elle introduit une verite cognitive qui doit orienter le comportement.",
              axe4_coherence: "La racine elm apparait plus de 850 fois dans le Coran — c'est l'une des racines les plus frequentes. Le savoir est la valeur epistemique fondamentale de l'islam. La 'ilm est toujours la connaissance certaine et fondee — distincte de la zann (supposition) et de l'dhann (conjecture).",
              axe5_frequence: "L'imperatif i'lamu (sachez) dans les formules de cloture juridiques n'est pas redondant : il rappelle que les obligations elaborees dans le verset ne sont pas de simples conventions sociales mais des prescriptions divines. Savoir (elm) que Dieu est Temoin (basir) de tout acte transforme la conformite externe en engagement intérieur sincere."
            }
          }
        }
      },
      {
        word_key: "bsr",
        position: 67,
        sense_chosen: "vue/temoignage",
        analysis_axes: {
          sense_chosen: "vue/temoignage",
          concept_chosen: "Vue/Temoignage",
          concepts: {
            "Vue/Temoignage": {
              status: "retenu",
              senses: ["voir", "etre temoin", "percevoir", "avoir la vue", "Basir = Celui qui voit"],
              proof_ctx: "La racine b-s-r (ba-sin-ra) signifie la vue et le temoignage. Le Lane's donne : voir, percevoir par la vue, etre temoin, avoir la vue. Basir = Celui qui voit/le Temoin (adjectif intensif, attribut divin). L'adjectif basir exprime la vision complete et certaine — Dieu voit tout ce que font Ses serviteurs.",
              axe1_verset: "Allaha bima ta'maluna basir (Dieu est Temoin de ce que vous faites) : basir est le dernier mot du verset, en position emphatique. L'attribut divin de la vue totale (bsr) cloture l'ensemble des dispositions juridiques par un rappel de la surveillance divine. Bima ta'maluna (de ce que vous faites) couvre tous les actes mentionnes dans le verset.",
              axe2_voisins: "La formule de cloture avec un attribut divin (basir, khabir, 'alim) est tres frequente dans al-Baqarah. Elle varie selon le registre : basir (vision) quand les actes sont visibles/exterieurs ; khabir (information) quand les intentions sont en jeu ; 'alim (omniscience) quand c'est la totalite du savoir. Basir ici souligne que les comportements exterieurs (respect des obligations) sont vus.",
              axe3_sourate: "La racine bsr est frequente dans les attributs divins coraniques. Al-Basir est l'un des 99 noms de Dieu. Le verset suivant (234) utilise khabir (Bien Informe) a la place de basir — les deux attributs se complementent : la vue totale (bsr) et l'information complete (kbr).",
              axe4_coherence: "La racine bsr apparait environ 150 fois dans le Coran, dont de nombreuses occurrences comme attribut divin. Basir (Celui qui voit) est l'un des attributs divins fondamentaux exprimant l'omniscience de Dieu. Sa vision couvre a la fois les actes exterieurs et les intentions.",
              axe5_frequence: "L'utilisation de basir (et non khabir ou 'alim) pour clore le verset 233 est significative : les obligations stipulees (allaitement, provision, vetement, non-nuisance, remuneration convenable) sont des actes observables. Dieu comme Temoin (basir) des actes exterieurs rappelle que la conformite doit etre reelle et non feinte."
            }
          }
        }
      }
    ],
    daily_phrases: []
  }
};

async function main() {
  const data = verseData[233];
  const { error: veErr } = await supabase.from('verse_analyses').update({
    translation_arab: data.translation_arab,
    full_translation: data.full_translation,
    translation_explanation: data.translation_explanation,
    segments: data.segments
  }).eq('id', data.analysis_id);
  if (veErr) { console.error('verse_analyses ERROR:', veErr.message); return; }
  console.log('verse_analyses updated (V233)');
  for (const word of data.vwa) {
    const { error: vwaErr } = await supabase.from('verse_word_analyses').insert({
      verse_id: data.verse_id,
      word_key: word.word_key,
      position: word.position,
      sense_chosen: word.sense_chosen,
      analysis_axes: word.analysis_axes
    });
    if (vwaErr) console.error('VWA ERROR ' + word.word_key + ':', vwaErr.message);
    else console.log('  VWA OK: ' + word.word_key + ' pos=' + word.position + ' -> ' + word.sense_chosen);
  }
  console.log('\n' + String.fromCodePoint(0x2705) + ' V233 TERMINE');
}
main().catch(console.error);
