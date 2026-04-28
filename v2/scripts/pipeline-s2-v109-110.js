const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// =====================================================
// PIPELINE SOURATE 2 — VERSETS 109-110
// V109: verse_id=116, analysis_id=477
// "Nombre de gens du Livre aimeraient par jalousie de leur
//  part, pouvoir vous rendre mecreants apres que vous ayez
//  cru. Pardonnez et oubliez jusqu'a ce qu'Allah fasse venir
//  Son commandement. Allah est certes Omnipotent sur toute chose."
// V110: verse_id=117, analysis_id=476
// "Et accomplissez la Salat et acquittez la Zakat. Et tout ce
//  que vous avancez de bien pour vous-memes, vous le retrouverez
//  aupres d'Allah, car Allah voit parfaitement ce que vous faites."
// =====================================================

const verseData = {
  109: {
    verse_id: 116,
    analysis_id: 477,
    translation_arab: "Beaucoup parmi les gens du Livre souhaiteraient vous ramener a la couverture apres votre adhesion, par jalousie d'aupres d'eux-memes, apres que la verite leur est apparue clairement. Pardonnez et detournez-vous jusqu'a ce que Dieu fasse venir Son commandement. Dieu est certes sur toute chose Puissant.",
    full_translation: "Nombre de gens du Livre aimeraient par jalousie de leur part, pouvoir vous rendre mecreants apres que vous ayez cru. Pardonnez et oubliez jusqu'a ce qu'Allah fasse venir Son commandement. Allah est certes Omnipotent sur toute chose.",
    translation_explanation: `§DEMARCHE§
Le verset s'adresse aux croyants en decrivant le souhait de nombreux gens du Livre et en ordonnant une reponse precise. Le verbe **wadda** est un accompli 3MS de la racine w-d-d. Le Lane's donne : aimer, souhaiter, desirer. L'accompli exprime un souhait etabli — leur desir de ramener les croyants a la mecreance est un fait acquis, pas une hypothese. Le mot **kathirun** est un adjectif qualificatif masculin indefini de la racine k-th-r. Le Lane's donne : beaucoup, nombreux. L'indefini marque que c'est un nombre indetermine mais important — pas tous, mais beaucoup. Le mot **ahli** est un nom masculin de la racine a-h-l au genitif construit avec al-kitab. Le Lane's donne : gens de, famille de, ceux qui appartiennent a. Les « gens du Livre » (ahl al-kitab) designe ceux qui appartiennent au Livre — une communaute definie par son lien a une ecriture revelee. Le mot **al-kitabi** est un nom defini de la racine k-t-b au genitif. Le Lane's donne : livre, ecriture revelee. Le Livre est l'ecriture qui definit l'identite de cette communaute. Le verbe **yaruddunakum** est un inaccompli 3MP de la racine r-d-d avec pronom suffixe 2MP. Le Lane's donne : renvoyer, ramener, faire revenir. L'inaccompli exprime le souhait continu — « s'ils pouvaient vous ramener ». Le retour est directionnel : ils veulent les ramener en arriere, de l'adhesion vers la couverture. Le mot **ba'di** est un nom de la racine b-'-d au genitif. Le Lane's donne : apres. La posteriorite temporelle precise le moment : apres votre adhesion — le retour vise a defaire ce qui a deja ete fait. Le mot **imanikum** est un nom verbal forme IV de la racine a-m-n avec pronom 2MP. Le Lane's donne : adhesion, foi, le fait de croire. L'adhesion est l'etat acquis des croyants — un acte interieur de conviction. Le mot **kuffaran** est un pluriel intensif de la racine k-f-r a l'accusatif. Le Lane's donne : couvrir, dissimuler. Les kuffar sont ceux qui couvrent — le sens premier est physique (couvrir quelque chose) avant d'etre moral (rejeter la verite). Le choix du pluriel intensif (fa''al) marque l'etat complet de couverture. Le mot **hasadan** est un masdar a l'accusatif de la racine h-s-d. Le Lane's donne : jalousie, envie. Le masdar exprime la cause : « par jalousie » — c'est un complement de cause qui explique leur motivation. La jalousie est le moteur de leur souhait. Le mot **'indi** est un nom de la racine '-n-d au genitif. Le Lane's donne : aupres de, chez. La jalousie vient d'aupres d'eux-memes — elle est interieure, elle nait de leur propre personne. Le mot **anfusihim** est un pluriel feminin de la racine n-f-s avec pronom 3MP. Le Lane's donne : ame, personne, soi-meme. Leurs ames sont la source de la jalousie — le texte localise la cause dans leur interiorite. Le mot **tabayyana** est un accompli forme V de la racine b-y-n. Le Lane's donne : devenir clair, se manifester. La forme V (tafa''ala) indique un processus reflexif — la verite s'est manifestee d'elle-meme, elle est devenue claire. L'accompli marque que cette manifestation est un fait acheve. Le mot **al-haqqu** est un nom defini de la racine h-q-q au nominatif. Le Lane's donne : verite, realite, droit. La verite est definie (al-) — c'est LA verite, pas une verite parmi d'autres. Le verbe **i'fu** est un imperatif 2MP de la racine '-f-w. Le Lane's donne : pardonner, effacer, excuser. L'imperatif est un ordre divin direct aux croyants — pardonnez. Le pardon est l'effacement de la faute. Le verbe **isfahhu** est un imperatif 2MP de la racine s-f-h. Le Lane's donne : se detourner, tourner la page, presenter le flanc. Le sens premier de safh est le cote, le flanc — se detourner c'est presenter son flanc au lieu de faire face. L'imperatif ordonne de se detourner de l'offense. Le verbe **ya'tiya** est un inaccompli subjonctif 3MS de la racine a-t-y. Le Lane's donne : venir, arriver, apporter. Le subjonctif apres hatta (jusqu'a ce que) exprime un but attendu — l'attente se prolonge jusqu'a la venue du commandement divin. Le nom **Allahu** est le nom propre de la divinite au nominatif, sujet du verbe ya'tiya. Dieu est Celui qui fait venir Son commandement. Le mot **amrihi** est un nom de la racine a-m-r avec pronom 3MS au genitif. Le Lane's donne : commandement, ordre, affaire. Le commandement de Dieu est ce qui est attendu — le texte ne precise pas la nature de ce commandement, laissant l'ouverture a toute forme d'intervention divine. Le mot **kulli** est un nom de la racine k-l-l au genitif. Le Lane's donne : tout, chaque, totalite. La totalite englobe sans exception — Dieu est puissant sur TOUTE chose, pas sur certaines choses. Le mot **qadirun** est un adjectif intensif de la racine q-d-r au nominatif. Le Lane's donne : puissant, capable. L'adjectif intensif (fa'il) marque la puissance permanente — Dieu n'est pas seulement capable ponctuellement, Il est Puissant par nature.

§JUSTIFICATION§
**souhaiteraient** — Le sens retenu est « souhaiter/aimer ». Le verbe wadda decrit un souhait intense. L'alternative « affection » est ecartee car le contexte est un souhait malveillant, pas un sentiment d'amour.

**beaucoup** — Le sens retenu est « beaucoup/nombreux ». Le mot kathir qualifie le nombre de gens du Livre. L'alternative « multiplier » est ecartee car le mot est un adjectif, pas un verbe.

**gens** — Le sens retenu est « gens de/famille de ». Le mot ahl designe l'appartenance communautaire. L'alternative « digne de » est ecartee car le contexte est l'appartenance au Livre, pas le merite.

**du Livre** — Le sens retenu est « livre/ecrit ». Le mot al-kitab designe l'ecriture revelee qui definit la communaute.

**vous ramener** — Le sens retenu est « ramener/renvoyer ». Le verbe yaruddunakum exprime le retour force. L'alternative « repondre » est ecartee car le contexte est un mouvement de retour, pas une reponse.

**apres** — Le sens retenu est « apres/posteriorite ». Le mot ba'di situe l'action dans le temps.

**votre adhesion** — Le sens retenu est « adhesion/foi ». Le mot iman designe l'acte interieur de croire. L'alternative « securite » est ecartee car le contexte est la foi, pas la protection.

**a la couverture** — Le sens retenu est « couvrir/dissimuler ». Le mot kuffaran porte le sens premier de couverture. L'alternative « rejeter » est probable mais le sens physique de couverture est premier selon le Lane's.

**par jalousie** — Le sens retenu est « jalousie/envie ». Le mot hasadan est le complement de cause.

**d'aupres d'eux-memes** — Le sens retenu est « aupres de/chez ». La jalousie vient de leur interiorite.

**leurs ames** — Le sens retenu est « ame/personne ». Le mot anfusihim designe leur interiorite.

**est apparue clairement** — Le sens retenu est « devenir clair/se manifester ». Le verbe tabayyana indique une manifestation claire.

**la verite** — Le sens retenu est « verite/realite ». Le mot al-haqq designe la realite objective.

**pardonnez** — Le sens retenu est « pardonner/effacer ». Le verbe i'fu ordonne l'effacement de la faute.

**detournez-vous** — Le sens retenu est « se detourner/tourner la page ». Le verbe isfahhu ordonne de presenter le flanc — ne pas faire face a l'offense. L'alternative « stupide » est ecartee car la racine ici est s-f-h (sad-fa-ha), pas s-f-h (sin-fa-ha).

**fasse venir** — Le sens retenu est « venir/apporter ». Le verbe ya'tiya exprime l'arrivee attendue du commandement.

**Dieu** — Le sens retenu est « divinite ». Allah est le nom propre de la divinite.

**Son commandement** — Le sens retenu est « commandement/ordre ». Le mot amrihi designe le commandement divin. L'alternative « affaire » est ecartee car le contexte est un ordre attendu.

**toute** — Le sens retenu est « totalite ». Le mot kulli englobe la totalite sans exception.

**Puissant** — Le sens retenu est « puissance/capacite ». Le mot qadir decrit la puissance permanente de Dieu. L'alternative « mesurer » est ecartee car l'adjectif qualifie la puissance, pas la mesure.

§CRITIQUE§
Hamidullah traduit « aimeraient par jalousie de leur part, pouvoir vous rendre mecreants ». La structure francaise est fidele mais le mot « mecreants » est une traduction traditionnelle de kuffar qui perd le sens physique de la racine k-f-r (couvrir). Nous choisissons « couverture » pour preserver le champ semantique original. Le sens « oubliez » pour isfahhu chez Hamidullah est une interpretation — le Lane's donne « se detourner, presenter le flanc », pas « oublier ». Le mot « Omnipotent » est un latinisme — « Puissant » est plus naturel en francais courant.`,
    segments: [
      { fr: "souhaiteraient", pos: "verbe", phon: "wadda", arabic: "\u0648\u064e\u062f\u0651\u064e", word_key: "wdd", is_particle: false, sense_retenu: "souhaiter", position: 0 },
      { fr: "beaucoup", pos: "nom", phon: "kathirun", arabic: "\u0643\u064e\u062b\u0650\u064a\u0631\u064c", word_key: "kthr", is_particle: false, sense_retenu: "beaucoup", position: 1 },
      { fr: "parmi", phon: "min", arabic: "\u0645\u0650\u0651\u0646\u0652", is_particle: true, position: 2 },
      { fr: "les gens", pos: "nom", phon: "ahli", arabic: "\u0623\u064e\u0647\u0652\u0644\u0650", word_key: "ahl", is_particle: false, sense_retenu: "gens de", position: 3 },
      { fr: "du Livre", pos: "nom", phon: "al-kitabi", arabic: "\u0671\u0644\u0652\u0643\u0650\u062a\u064e\u0640\u0628\u0650", word_key: "ktb", is_particle: false, sense_retenu: "livre", position: 4 },
      { fr: "s'ils pouvaient", phon: "law", arabic: "\u0644\u064e\u0648\u0652", is_particle: true, position: 5 },
      { fr: "vous ramener", pos: "verbe", phon: "yaruddunakum", arabic: "\u064a\u064e\u0631\u064f\u062f\u0651\u064f\u0648\u0646\u064e\u0643\u064f\u0645", word_key: "rdd", is_particle: false, sense_retenu: "ramener", position: 6 },
      { fr: "apres", phon: "min ba'di", arabic: "\u0645\u0650\u0651\u0646\u06e2 \u0628\u064e\u0639\u0652\u062f\u0650", is_particle: true, position: 7 },
      { fr: "apres", pos: "nom", phon: "ba'di", arabic: "\u0628\u064e\u0639\u0652\u062f\u0650", word_key: "baed", is_particle: false, sense_retenu: "apres", position: 8 },
      { fr: "votre adhesion", pos: "nom", phon: "imanikum", arabic: "\u0625\u0650\u064a\u0645\u064e\u0640\u0646\u0650\u0643\u064f\u0645\u0652", word_key: "amn", is_particle: false, sense_retenu: "adhesion", position: 9 },
      { fr: "a la couverture", pos: "nom", phon: "kuffaran", arabic: "\u0643\u064f\u0641\u0651\u064e\u0627\u0631\u064b\u0627", word_key: "kfr", is_particle: false, sense_retenu: "couverture", position: 10 },
      { fr: "par jalousie", pos: "nom", phon: "hasadan", arabic: "\u062d\u064e\u0633\u064e\u062f\u064b\u0627", word_key: "hsd", is_particle: false, sense_retenu: "jalousie", position: 11 },
      { fr: "de", phon: "min", arabic: "\u0645\u0650\u0651\u0646\u0652", is_particle: true, position: 12 },
      { fr: "aupres de", pos: "nom", phon: "'indi", arabic: "\u0639\u0650\u0646\u062f\u0650", word_key: "end", is_particle: false, sense_retenu: "aupres de", position: 13 },
      { fr: "eux-memes", pos: "nom", phon: "anfusihim", arabic: "\u0623\u064e\u0646\u0641\u064f\u0633\u0650\u0647\u0650\u0645", word_key: "nfs", is_particle: false, sense_retenu: "ame", position: 14 },
      { fr: "apres", phon: "min", arabic: "\u0645\u0650\u0651\u0646\u06e2", is_particle: true, position: 15 },
      { fr: "apres que", pos: "nom", phon: "ba'di", arabic: "\u0628\u064e\u0639\u0652\u062f\u0650", word_key: "baed", is_particle: false, sense_retenu: "apres", position: 16 },
      { fr: "ce que", phon: "ma", arabic: "\u0645\u064e\u0627", is_particle: true, position: 17 },
      { fr: "s'est manifeste", pos: "verbe", phon: "tabayyana", arabic: "\u062a\u064e\u0628\u064e\u064a\u0651\u064e\u0646\u064e", word_key: "byn", is_particle: false, sense_retenu: "devenir clair", position: 18 },
      { fr: "a eux", phon: "lahumu", arabic: "\u0644\u064e\u0647\u064f\u0645\u064f", is_particle: true, position: 19 },
      { fr: "la verite", pos: "nom", phon: "al-haqqu", arabic: "\u0671\u0644\u0652\u062d\u064e\u0642\u0651\u064f", word_key: "hqq", is_particle: false, sense_retenu: "verite", position: 20 },
      { fr: "pardonnez", pos: "verbe", phon: "i'fu", arabic: "\u0641\u064e\u0671\u0639\u0652\u0641\u064f\u0648\u0627\u06df", word_key: "efw", is_particle: false, sense_retenu: "pardonner", position: 21 },
      { fr: "et detournez-vous", pos: "verbe", phon: "isfahhu", arabic: "\u0648\u064e\u0671\u0635\u0652\u0641\u064e\u062d\u064f\u0648\u0627\u06df", word_key: "sfh", is_particle: false, sense_retenu: "se detourner", position: 22 },
      { fr: "jusqu'a ce que", phon: "hatta", arabic: "\u062d\u064e\u062a\u0651\u064eY\u0640\u0649", is_particle: true, position: 23 },
      { fr: "fasse venir", pos: "verbe", phon: "ya'tiya", arabic: "\u064a\u064e\u0623\u0652\u062a\u0650Y\u064e", word_key: "aty", is_particle: false, sense_retenu: "venir", position: 24 },
      { fr: "Dieu", pos: "nom", phon: "Allahu", arabic: "\u0671\u0644\u0644\u0651\u064e\u0647\u064f", word_key: "alh", is_particle: false, sense_retenu: "Dieu", position: 25 },
      { fr: "Son commandement", pos: "nom", phon: "amrihi", arabic: "\u0628\u0650\u0623\u064e\u0645\u0652\u0631\u0650\u0647\u0650.\u06d3", word_key: "amr", is_particle: false, sense_retenu: "commandement", position: 26 },
      { fr: "certes", phon: "inna", arabic: "\u0625\u0650\u0646\u0651\u064e", is_particle: true, position: 27 },
      { fr: "Dieu", pos: "nom", phon: "Allaha", arabic: "\u0671\u0644\u0644\u0651\u064e\u0647\u064e", word_key: "alh", is_particle: false, sense_retenu: "Dieu", position: 28 },
      { fr: "sur", phon: "'ala", arabic: "\u0639\u064e\u0644\u064eY\u0640\u0649", is_particle: true, position: 29 },
      { fr: "toute", pos: "nom", phon: "kulli", arabic: "\u0643\u064f\u0644\u0650\u0651", word_key: "kll", is_particle: false, sense_retenu: "totalite", position: 30 },
      { fr: "chose", phon: "shay'in", arabic: "\u0634\u064eY\u0652\u0621\u064d", is_particle: true, position: 31 },
      { fr: "Puissant", pos: "nom", phon: "qadirun", arabic: "\u0642\u064e\u062f\u0650\u064a\u0631\u064c", word_key: "qdr", is_particle: false, sense_retenu: "puissant", position: 32 }
    ],
    words: [
      // wdd pos=0
      {
        word_key: "wdd", position: 0, sense_chosen: "souhaiter",
        analysis_axes: {
          sense_chosen: "souhaiter",
          concept_chosen: "Amour/Affection",
          concepts: {
            "Amour/Affection": {
              status: "retenu",
              senses: ["aimer", "affection", "souhaiter"],
              proof_ctx: "Le verbe wadda est un accompli 3MS de la racine w-d-d. Le Lane's donne : aimer, souhaiter, desirer. Le wudd est l'inclination du coeur — le souhait (widadah) est l'expression du desir interieur. Ici wadda exprime le souhait intense — ils souhaiteraient vous ramener. L'accompli marque un souhait etabli et permanent, pas une velleite passagere. La racine n'a qu'un seul concept retenu, le choix est immediat.",
              axe1_verset: "Le verbe wadda ouvre le verset en posant la motivation du groupe : un souhait intense. Le champ lexical du verset tourne autour de l'hostilite masquee (souhaiter, ramener, couverture, jalousie) et de la reponse divine (pardonner, se detourner, commandement, puissance). Le souhait est le point de depart — c'est le desir interieur qui motive l'action exterieure. Le verset oppose le souhait humain (ramener a la couverture) et le commandement divin (qui viendra).",
              axe2_voisins: "Le verset 108 reprochait de vouloir interroger le prophete comme Moussa fut interroge. Le verset 109 revele la motivation profonde de cette attitude : la jalousie et le souhait de ramener les croyants en arriere. Le verset 110 ordonnera la priere et la zakat comme reponse positive. La progression est : reproche → motivation → reponse.",
              axe3_sourate: "La sourate al-Baqarah explore les motivations des differents groupes face a la revelation. En 2:90, la jalousie est deja mentionnee comme moteur du rejet. Le verset 109 reprend ce theme — le souhait de ramener les autres a la couverture est une forme active de jalousie. La sourate montre que le rejet n'est pas neutre — il est motive par un desir de nuire.",
              axe4_coherence: "La racine w-d-d apparait environ 29 fois dans le Coran. En 60:7, « Dieu placera entre vous et ceux d'entre eux que vous aviez comme ennemis, de l'affection ». Le Coran utilise wadda dans les deux sens — le souhait bienveillant (affection) et le souhait malveillant (desir de nuire). Le contexte determine la valeur morale du souhait.",
              axe5_frequence: "Pour la mission du khalifa, le souhait des autres de le detourner de sa mission est un obstacle previsible. Le khalifa doit savoir que certains souhaiteront le ramener en arriere — cette connaissance le prepare a resister. Le souhait malveillant ne doit pas le detourner de sa mission."
            }
          }
        }
      },
      // kthr pos=1
      {
        word_key: "kthr", position: 1, sense_chosen: "beaucoup",
        analysis_axes: {
          sense_chosen: "beaucoup",
          concept_chosen: "Abondance/Multiplicité",
          concepts: {
            "Abondance/Multiplicité": {
              status: "retenu",
              senses: ["beaucoup", "abondant", "nombreux"],
              proof_ctx: "Le mot kathirun est un adjectif qualificatif masculin indefini de la racine k-th-r. Le Lane's donne : beaucoup, nombreux, abondant. Le kathir s'oppose au qalil (peu). L'indefini (sans article) marque un nombre indetermine mais significatif. Le texte precise « beaucoup parmi les gens du Livre » — pas tous, mais un nombre important. La racine n'a qu'un seul concept retenu, le choix est immediat.",
              axe1_verset: "Le mot kathirun qualifie le nombre de ceux qui souhaitent ramener les croyants en arriere. Le champ lexical du verset (souhaiter, ramener, jalousie) montre que cette hostilite n'est pas marginale — elle est le fait de beaucoup. Mais le texte dit « beaucoup parmi » — pas « tous les gens du Livre ». Le Coran nuance : l'hostilite est repandue mais pas unanime.",
              axe2_voisins: "Le verset 100 utilisait « la plupart d'entre eux » pour la rupture des engagements. Le verset 109 utilise « beaucoup » — le vocabulaire varie mais le constat est le meme : une majorite est dans l'hostilite, pas la totalite. Le verset 110 ne s'adresse plus aux hostiles mais aux croyants directement.",
              axe3_sourate: "La racine k-th-r apparait dans la sourate al-Baqarah pour qualifier les nombres. En 2:100, « la plupart d'entre eux ne croient pas ». En 2:243, « la plupart des gens ne remercient pas ». La sourate utilise le vocabulaire de la quantite pour montrer que la majorite n'est pas toujours dans le vrai.",
              axe4_coherence: "La racine k-th-r apparait environ 158 fois dans le Coran. Le schema « beaucoup parmi eux » est recurrent — en 5:62, 5:64, 5:66, le Coran qualifie les groupes par leur nombre. La distinction entre « beaucoup » et « tous » est systematique — le Coran refuse la generalisation totale.",
              axe5_frequence: "Pour la mission du khalifa, savoir que les opposants sont nombreux sans etre unanimes est strategiquement important. Le khalifa ne doit ni minimiser l'opposition ni la totaliser — certains sont des allies potentiels. L'abondance de l'opposition ne rend pas la mission impossible."
            }
          }
        }
      },
      // ahl pos=3
      {
        word_key: "ahl", position: 3, sense_chosen: "gens de",
        analysis_axes: {
          sense_chosen: "gens de",
          concept_chosen: "Famille/Communauté",
          concepts: {
            "Famille/Communauté": {
              status: "retenu",
              senses: ["famille", "gens de", "peuple"],
              proof_ctx: "Le mot ahli est un nom masculin au genitif construit avec al-kitab, de la racine a-h-l. Le Lane's donne : gens de, famille de, ceux qui appartiennent a. L'expression ahl al-kitab designe ceux qui appartiennent a une communaute definie par le Livre — un lien d'appartenance communautaire, pas familial. L'ahl est le groupe qui entoure et partage une identite commune. La distinction avec « merite » est claire : le contexte est l'appartenance, pas la dignite.",
              axe1_verset: "Le mot ahli situe l'identite des souhaiteurs — ce sont les gens du Livre. Le champ lexical (Livre, souhaiter, ramener, jalousie) montre que leur hostilite est paradoxale : ils appartiennent au Livre mais souhaitent ramener les autres a la couverture. L'appartenance au Livre devrait les rapprocher des croyants, mais la jalousie les en eloigne.",
              axe2_voisins: "Le verset 101 parlait de « ceux a qui le Livre a ete donne ». Le verset 105 mentionnait « les gens du Livre parmi les dissimulateurs ». Le verset 109 reprend l'expression « gens du Livre » pour designer le meme groupe. Les versets voisins construisent le portrait d'un groupe defini par son lien au Livre mais en conflit avec la nouvelle revelation.",
              axe3_sourate: "L'expression « ahl al-kitab » est une expression structurante de la sourate al-Baqarah. Elle apparait dans les versets 105, 109 et d'autres passages pour designer les communautes anterieures. La sourate construit un dialogue avec ces communautes — les interpellant, les critiquant, mais aussi les reconnaissant comme detentrices d'une revelation.",
              axe4_coherence: "L'expression « ahl al-kitab » apparait environ 31 fois dans le Coran. Elle designe systematiquement les juifs et les chretiens comme communautes liees a une ecriture revelee. En 3:64, « dis : O gens du Livre, venez a une parole commune ». Le Coran reconnait leur statut tout en critiquant leurs deviations.",
              axe5_frequence: "Pour la mission du khalifa, les gens du Livre sont des interlocuteurs privilegies — ils partagent une base commune (le Livre). Le khalifa doit connaitre leurs ecritures et comprendre leur hostilite sans la generaliser. L'appartenance au Livre cree un terrain commun malgre les divergences."
            },
            "Mérite/Aptitude": {
              status: "nul",
              senses: ["digne de"],
              proof_ctx: "Le sens de merite est hors sujet — le contexte est l'appartenance communautaire (gens du Livre), pas la dignite."
            }
          }
        }
      },
      // ktb pos=4
      {
        word_key: "ktb", position: 4, sense_chosen: "livre",
        analysis_axes: {
          sense_chosen: "livre",
          concept_chosen: "Livre/Écrit",
          concepts: {
            "Livre/Écrit": {
              status: "retenu",
              senses: ["contrat de mariage", "contrat d'affranchissement", "ecriture revelee", "livre", "registre", "contrat ecrit"],
              proof_ctx: "Le mot al-kitabi est un nom defini au genitif de la racine k-t-b. Le Lane's donne : livre, ecrit, ecriture revelee. L'article defini (al-) marque que c'est LE Livre — l'ecriture revelee specifique. L'expression « ahl al-kitab » (gens du Livre) utilise le Livre comme critere d'identite communautaire. La distinction avec l'acte d'ecrire est claire : le mot est un nom defini, pas un verbe.",
              axe1_verset: "Le mot al-kitab definit l'identite du groupe — les gens du Livre. Le Livre est ici un marqueur communautaire — il distingue ceux qui l'ont recu de ceux qui ne l'ont pas recu. Le paradoxe du verset est que les gens du Livre souhaitent ramener les croyants a la couverture alors que le Livre devrait les rapprocher de la verite.",
              axe2_voisins: "Le verset 101 parlait de jeter le Livre de Dieu derriere les dos. Le verset 105 mentionnait les gens du Livre parmi les dissimulateurs. Le verset 109 montre que les gens du Livre souhaitent activement nuire — au-dela du simple rejet passif.",
              axe3_sourate: "La racine k-t-b est une racine structurante de la sourate. En 2:2, « ce Livre, nul doute en lui ». Le Livre est a la fois l'objet de la revelation et le critere d'identite des communautes. La sourate oppose ceux qui suivent le Livre et ceux qui le rejettent.",
              axe4_coherence: "Le Coran utilise kitab au sens de livre revele dans les constructions avec l'article defini. L'expression « ahl al-kitab » est un terme technique coranique qui definit un groupe specifique.",
              axe5_frequence: "Pour la mission du khalifa, le Livre est le critere de la mission. Les communautes anterieures sont definies par leur lien au Livre — le khalifa est defini par son lien au Coran."
            }
          }
        }
      },
      // rdd pos=6 — MISSING FROM CONCEPTS, query DB
      {
        word_key: "rdd", position: 6, sense_chosen: "ramener",
        analysis_axes: {
          sense_chosen: "ramener",
          concept_chosen: "Retour/Renvoi",
          concepts: {
            "Retour/Renvoi": {
              status: "retenu",
              senses: ["renvoyer", "ramener", "faire revenir", "repondre"],
              proof_ctx: "Le verbe yaruddunakum est un inaccompli 3MP de la racine r-d-d avec pronom suffixe 2MP. Le Lane's donne : renvoyer, ramener, faire revenir, restituer. Le retour (radd) est un mouvement directionnel inverse — ramener quelqu'un a un etat anterieur. Ici le mouvement est : de l'adhesion (iman) vers la couverture (kufr). L'inaccompli dans un contexte de souhait (wadda + law) exprime un desir irreal — ils voudraient pouvoir vous ramener. Le retour vise a defaire ce qui a ete fait.",
              axe1_verset: "Le verbe yaruddunakum est l'action souhaitee — l'objectif de leur jalousie. Le champ lexical (souhaiter, ramener, apres, adhesion, couverture) montre un mouvement de regression : de l'avant (adhesion) vers l'arriere (couverture). Le verset oppose ce mouvement regressif au commandement divin qui viendra. Le retour est une tentative de defaire l'oeuvre divine.",
              axe2_voisins: "Le verset 108 mettait en garde contre l'echange de la foi pour la mecreance. Le verset 109 revele que ce retour est activement souhaite par les gens du Livre. Le verset 110 ordonne la priere et la zakat comme ancrage dans l'adhesion. La progression est : mise en garde → revelation du souhait hostile → ancrage positif.",
              axe3_sourate: "La racine r-d-d apparait dans la sourate al-Baqarah dans le contexte du retour. En 2:217, « ils ne cesseront de vous combattre jusqu'a vous ramener de votre religion s'ils le pouvaient ». La sourate montre que le retour force est un objectif constant des opposants.",
              axe4_coherence: "La racine r-d-d apparait environ 60 fois dans le Coran. Le schema « ramener de la foi a la mecreance » est recurrent — en 3:100, « si vous obeissez a un groupe parmi ceux a qui le Livre a ete donne, ils vous rameneront a la mecreance apres votre foi ». Le Coran avertit systematiquement contre cette tentative de retour force.",
              axe5_frequence: "Pour la mission du khalifa, le retour en arriere est la tentation permanente. Les opposants souhaiteront toujours le ramener a l'etat anterieur. Le khalifa doit savoir que la pression du retour est constante et qu'il doit resister par l'ancrage dans la priere et les oeuvres."
            }
          }
        }
      },
      // baed pos=8
      {
        word_key: "baed", position: 8, sense_chosen: "apres",
        analysis_axes: {
          sense_chosen: "apres",
          concept_chosen: "Postériorité",
          concepts: {
            "Postériorité": {
              status: "retenu",
              senses: ["apres", "ensuite"],
              proof_ctx: "Le mot ba'di est un nom au genitif de la racine b-'-d. Le Lane's donne : apres, ensuite. La posteriorite situe un evenement dans le temps par rapport a un autre. Ici « min ba'di imanikum » (apres votre adhesion) precise que le retour souhaite se situe APRES l'adhesion — ils veulent defaire un etat deja acquis. La distinction avec « eloignement » est claire : le contexte est temporel, pas spatial.",
              axe1_verset: "Le mot ba'di situe la tentative de retour dans le temps — apres l'adhesion. Le champ lexical (ramener, apres, adhesion, couverture) montre que le verset decrit un mouvement temporel inverse : revenir a un etat anterieur a l'adhesion. La posteriorite souligne l'absurdite — ils veulent defaire ce qui est deja fait.",
              axe2_voisins: "Le verset 108 avertissait contre l'echange de la foi pour la mecreance. Le verset 109 precise le moment : apres l'adhesion. Le retour apres l'adhesion est plus grave que le refus initial — c'est une apostasie provoquee.",
              axe3_sourate: "La racine b-'-d apparait dans la sourate al-Baqarah pour marquer la posteriorite. En 2:92, « puis vous avez pris le veau apres son depart ». En 2:52, « puis Nous vous avons pardonne apres cela ». La sourate utilise « apres » pour montrer la sequence des evenements et souligner les ruptures.",
              axe4_coherence: "La racine b-'-d apparait environ 280 fois dans le Coran. Le schema « apres la foi/la guidee » est recurrent — en 3:86, « comment Dieu guiderait-Il un peuple qui a mecru apres avoir cru ». L'apres souligne la gravite du retour en arriere.",
              axe5_frequence: "Pour la mission du khalifa, l'apres est un rappel que la mission a commence et qu'il n'y a pas de retour. Une fois l'adhesion faite, le retour en arriere est une regression. Le khalifa doit avancer, pas reculer."
            },
            "Éloignement/Distance": {
              status: "nul",
              senses: ["eloignement", "etre loin"],
              proof_ctx: "Le sens d'eloignement spatial est hors sujet — le contexte est temporel (apres votre adhesion), pas spatial."
            },
            "Mort/Destruction": {
              status: "nul",
              senses: ["perir"],
              proof_ctx: "Le sens de perir est hors sujet — le mot est utilise comme preposition temporelle, pas comme verbe de destruction."
            }
          }
        }
      },
      // amn pos=9
      {
        word_key: "amn", position: 9, sense_chosen: "adhesion",
        analysis_axes: {
          sense_chosen: "adhesion",
          concept_chosen: "Foi/Adhésion",
          concepts: {
            "Foi/Adhésion": {
              status: "retenu",
              senses: ["accepter comme vrai", "croire", "avoir la foi", "confirmer", "croyant"],
              proof_ctx: "Le mot imanikum est un masdar de la forme IV de la racine a-m-n avec pronom 2MP au genitif. Le Lane's donne : adhesion, foi, le fait de croire et d'accepter comme vrai. L'iman est un acte interieur de conviction — c'est l'adhesion du coeur a la verite. Le pronom « kum » (votre) rattache l'adhesion aux destinataires du discours. La forme IV (af'ala) marque l'intensite — l'iman n'est pas une simple croyance passive mais une adhesion active. La distinction avec la securite (probable) est claire : le contexte est la foi, pas la protection physique.",
              axe1_verset: "Le mot imanikum designe l'etat que les gens du Livre veulent defaire. Le champ lexical (ramener, apres, adhesion, couverture) montre que l'adhesion est l'etat acquis que le retour vise a detruire. L'adhesion est le point de depart du mouvement regressif souhaite — sans adhesion prealable, il n'y aurait pas de retour possible.",
              axe2_voisins: "Le verset 108 mettait en garde contre l'echange de la foi pour la mecreance. Le verset 109 precise que l'adhesion est la cible de l'hostilite. Le verset 110 ordonne la priere et la zakat comme consolidation de l'adhesion. La progression montre que l'adhesion doit etre protegee et renforcee.",
              axe3_sourate: "La racine a-m-n est une des plus frequentes de la sourate al-Baqarah. En 2:3-4, les croyants sont definis par ce qu'ils croient. En 2:62, la foi est la condition du salut. La sourate construit une identite autour de l'adhesion — les croyants sont ceux qui adherent.",
              axe4_coherence: "La racine a-m-n apparait environ 879 fois dans le Coran. L'expression « apres votre adhesion » apparait en 3:100 dans un contexte identique. Le Coran insiste sur la protection de l'adhesion contre les tentatives de retour en arriere.",
              axe5_frequence: "Pour la mission du khalifa, l'adhesion est le fondement de la mission. Sans adhesion, pas de mission. Le khalifa doit proteger son adhesion contre les tentatives de retour — la priere et les oeuvres sont les gardiens de l'adhesion."
            },
            "Sécurité/Confiance": {
              status: "probable",
              senses: ["faire confiance", "etre en securite", "confier", "se sentir en securite", "fidele", "lieu sur"],
              proof_ctx: "Le sens de securite est un sens majeur de a-m-n. L'aman (securite) et l'iman (foi) partagent la meme racine. La distinction est que l'iman est l'adhesion interieure a la verite, tandis que l'aman est l'etat de tranquillite qui en resulte. Le contexte privilegie l'adhesion car le verset oppose iman et kufr — deux etats de conviction, pas deux etats de securite.",
              axe1_verset: "Le mot imanikum pourrait porter le sens de securite interieure — les croyants sont en securite dans leur foi. Mais le verset oppose iman et kufr comme deux etats de conviction opposes, pas comme securite et danger.",
              axe2_voisins: "Les versets voisins traitent de la foi et de la mecreance, pas de la securite physique. Le contexte confirme le sens d'adhesion.",
              axe3_sourate: "La sourate utilise la racine a-m-n principalement au sens de foi/adhesion. Le sens de securite apparait dans d'autres contextes specifiques (2:125, lieu sur).",
              axe4_coherence: "Le Coran distingue les deux sens selon le contexte — la forme IV (amana/yu'minu) est quasi-exclusivement utilisee pour la foi.",
              axe5_frequence: "La securite est un fruit de l'adhesion — le khalifa trouve la securite interieure par la foi."
            }
          }
        }
      },
      // kfr pos=10
      {
        word_key: "kfr", position: 10, sense_chosen: "couverture",
        analysis_axes: {
          sense_chosen: "couverture",
          concept_chosen: "Couverture/Dissimulation",
          concepts: {
            "Couverture/Dissimulation": {
              status: "retenu",
              senses: ["couvrir", "cacher", "la nuit qui couvre"],
              proof_ctx: "Le mot kuffaran est un pluriel intensif (fa''al) a l'accusatif de la racine k-f-r. Le Lane's donne : couvrir, cacher, la nuit qui couvre le jour. Le sens premier et physique de k-f-r est couvrir — le cultivateur couvre la graine dans la terre, la nuit couvre le jour. Le pluriel intensif (kuffar) marque l'etat complet de couverture — ceux qui couvrent totalement la verite. Le choix du sens physique est coherent avec le Lane's qui donne « couvrir » comme sens premier.",
              axe1_verset: "Le mot kuffaran est l'etat-cible du retour souhaite — les gens du Livre veulent ramener les croyants a l'etat de couverture. Le champ lexical (ramener, apres, adhesion, couverture) montre une opposition entre deux etats : l'adhesion (ouverture a la verite) et la couverture (dissimulation de la verite). Le verset oppose l'adhesion et la couverture comme deux poles.",
              axe2_voisins: "Le verset 108 parlait de l'echange de la foi pour la mecreance. Le verset 109 precise que la couverture est l'objectif de l'hostilite. Le verset 110 ordonne la priere comme antidote. La progression montre que la couverture est un danger permanent contre lequel il faut se premunir.",
              axe3_sourate: "La racine k-f-r est une des plus frequentes de la sourate al-Baqarah. En 2:6, « ceux qui couvrent — que tu les avertisses ou non ». En 2:19-20, les images de la nuit et des tenebres illustrent la couverture. La sourate utilise k-f-r dans son sens physique et moral — couvrir la verite.",
              axe4_coherence: "La racine k-f-r apparait environ 525 fois dans le Coran. Le sens physique de « couvrir » est le fondement de tous les autres sens. En 57:20, le cultivateur (kuffar) couvre la graine — le meme mot est utilise pour celui qui couvre la verite. Le Coran maintient le lien entre le sens physique et le sens moral.",
              axe5_frequence: "Pour la mission du khalifa, la couverture est l'antithese de la mission. Le khalifa doit decouvrir la verite, pas la couvrir. La tentative de ramener a la couverture est une tentative de saboter la mission."
            },
            "Rejet/Ingratitude": {
              status: "probable",
              senses: ["renier un bienfait", "rejeter", "mecreant", "etre ingrat", "nier"],
              proof_ctx: "Le sens de rejet/ingratitude est un sens derive de k-f-r — celui qui couvre la verite la rejette et se montre ingrat envers le bienfait divin. La distinction est que la couverture est l'acte physique premier, le rejet est la consequence morale. Le mot kuffar dans ce verset designe l'etat vise par le retour — l'etat de ceux qui couvrent la verite. Le sens de rejet est inclus dans la couverture.",
              axe1_verset: "Le mot kuffaran pourrait etre traduit par « rejeteurs/ingrats » — ceux qui rejettent la verite apres l'avoir connue. Le sens de rejet est coherent avec le contexte du verset — les gens du Livre veulent que les croyants rejettent la verite.",
              axe2_voisins: "Les versets voisins utilisent k-f-r dans les deux sens. Le choix entre couverture et rejet depend de la coherence avec le Lane's — le sens premier est couvrir.",
              axe3_sourate: "La sourate utilise k-f-r dans les deux sens. Les premiers versets (2:6) utilisent le participe « alladhina kafaru » que nous pouvons comprendre comme « ceux qui couvrent » ou « ceux qui rejettent ».",
              axe4_coherence: "Le Coran utilise k-f-r dans un spectre allant de la couverture physique au rejet moral. Les deux sens sont valides et complementaires.",
              axe5_frequence: "Le rejet est la manifestation exterieure de la couverture interieure — les deux sens sont lies dans la mission du khalifa."
            }
          }
        }
      },
      // hsd pos=11
      {
        word_key: "hsd", position: 11, sense_chosen: "jalousie",
        analysis_axes: {
          sense_chosen: "jalousie",
          concept_chosen: "Envie/Jalousie",
          concepts: {
            "Envie/Jalousie": {
              status: "retenu",
              senses: ["convoitise", "jalousie", "envier"],
              proof_ctx: "Le mot hasadan est un masdar a l'accusatif de la racine h-s-d. Le Lane's donne : jalousie, envie, desirer que l'autre perde ce qu'il possede. Le hasad est un sentiment interieur destructeur — le jaloux ne veut pas seulement ce que l'autre a, il veut que l'autre le perde. Ici hasadan est un complement de cause (maf'ul li-ajlihi) — c'est PAR JALOUSIE qu'ils souhaitent vous ramener. La racine n'a qu'un seul concept retenu, le choix est immediat.",
              axe1_verset: "Le mot hasadan revele la motivation profonde du souhait — la jalousie. Le champ lexical (souhaiter, ramener, jalousie, d'aupres d'eux-memes) montre que la jalousie est interieure (d'aupres d'eux-memes) et destructrice (elle vise a defaire l'adhesion des autres). Le verset localise la source de l'hostilite dans l'interiorite des jaloux — ce n'est pas une reaction a une agression mais un sentiment spontane.",
              axe2_voisins: "Le verset 90 disait « par jalousie qu'Allah fasse descendre de Sa grace sur qui Il veut parmi Ses serviteurs ». Le verset 109 reprend le meme motif — la jalousie est le moteur du rejet. Les deux versets revelent que le rejet n'est pas intellectuel mais emotionnel.",
              axe3_sourate: "La jalousie est un theme structurant de la sourate al-Baqarah. En 2:90, la jalousie explique le rejet de la revelation. En 2:109, elle explique le souhait de ramener les croyants. La sourate montre que la jalousie est le vice fondamental qui empeche l'acceptation de la verite.",
              axe4_coherence: "La racine h-s-d apparait 5 fois dans le Coran. En 113:5, on demande refuge contre « le mal d'un envieux quand il envie ». En 4:54, « envient-ils les gens pour ce que Dieu leur a donne de Sa grace ? ». Le Coran identifie la jalousie comme un danger spirituel majeur.",
              axe5_frequence: "Pour la mission du khalifa, la jalousie est un ennemi interieur. Le khalifa ne doit pas envier — et il doit savoir que sa mission suscitera la jalousie des autres. La jalousie est la preuve que la grace divine est a l'oeuvre."
            }
          }
        }
      },
      // end pos=13
      {
        word_key: "end", position: 13, sense_chosen: "aupres de",
        analysis_axes: {
          sense_chosen: "aupres de",
          concept_chosen: "Proximité/Présence",
          concepts: {
            "Proximité/Présence": {
              status: "retenu",
              senses: ["aupres de", "chez", "pres de"],
              proof_ctx: "Le mot 'indi est une preposition de la racine '-n-d au genitif. Le Lane's donne : aupres de, chez, pres de. La proximite est une relation spatiale ou relationnelle permanente. Ici « min 'indi anfusihim » (d'aupres d'eux-memes) localise la source de la jalousie : elle vient de l'interieur de leurs ames. La distinction avec l'opinion (nul) est claire : le contexte est la provenance interieure, pas un jugement.",
              axe1_verset: "Le mot 'indi localise la source de la jalousie — elle vient d'aupres d'eux-memes. Le champ lexical (jalousie, d'aupres de, eux-memes) montre que le verset souligne la responsabilite interieure. La jalousie n'est pas une reaction a une agression exterieure — elle nait de leur propre interiorite.",
              axe2_voisins: "Le verset 101 utilisait 'indi pour la provenance divine (« de chez Dieu »). Le verset 109 utilise 'indi pour la provenance interieure (« d'aupres d'eux-memes »). Le contraste est frappant : l'envoye vient de chez Dieu, la jalousie vient de chez eux.",
              axe3_sourate: "La preposition 'inda apparait dans la sourate avec Dieu et avec les humains comme complement. En 2:101, « de chez Dieu ». En 2:109, « d'aupres d'eux-memes ». La sourate oppose ce qui vient de Dieu (la verite) et ce qui vient des hommes (la jalousie).",
              axe4_coherence: "La racine '-n-d apparait environ 200 fois dans le Coran. L'expression « min 'indi anfusihim » localise systematiquement la source d'un acte dans l'interiorite de la personne. Le Coran insiste sur la responsabilite personnelle.",
              axe5_frequence: "Pour la mission du khalifa, reconnaitre que l'hostilite vient de l'interiorite des opposants libere de la culpabilite. Le khalifa n'est pas la cause de la jalousie — elle vient d'aupres d'eux-memes."
            },
            "Opinion/Jugement": {
              status: "nul",
              senses: ["selon"],
              proof_ctx: "Le sens d'opinion est hors sujet — le contexte est la provenance interieure de la jalousie, pas un jugement."
            }
          }
        }
      },
      // nfs pos=14
      {
        word_key: "nfs", position: 14, sense_chosen: "ame",
        analysis_axes: {
          sense_chosen: "ame",
          concept_chosen: "Âme/Être",
          concepts: {
            "Âme/Être": {
              status: "retenu",
              senses: ["desir", "ame", "personne", "esprit", "soi-meme"],
              proof_ctx: "Le mot anfusihim est un pluriel feminin de la racine n-f-s avec pronom 3MP. Le Lane's donne : ame, personne, soi-meme. Le nafs est la realite interieure de l'etre. Le pluriel (anfus) avec le possessif (him, leurs) precise que la jalousie vient de leurs propres ames — de leur interiorite. L'expression « min 'indi anfusihim » (d'aupres de leurs ames) souligne la responsabilite personnelle. La distinction avec le souffle (nul) est claire : le contexte est l'interiorite, pas la respiration.",
              axe1_verset: "Le mot anfusihim complete la localisation de la jalousie — elle vient de leurs ames. Le champ lexical (jalousie, d'aupres de, ames) montre que le verset identifie la source du mal dans l'interiorite. Le verset ne dit pas « par jalousie de ce que vous avez » mais « par jalousie d'aupres d'eux-memes » — la jalousie est un probleme interieur, pas une reaction a un stimulus exterieur.",
              axe2_voisins: "Le verset 102 parlait de ceux qui suivaient ce que les demons recitaient. Le verset 109 montre que leurs ames sont la source de la deviation. Les versets voisins construisent un portrait de gens dont l'interiorite est corrompue par la jalousie et l'orgueil.",
              axe3_sourate: "La racine n-f-s apparait dans la sourate al-Baqarah pour designer l'interiorite. En 2:9, « ils ne trompent qu'eux-memes ». En 2:44, « vous oubliez vos propres personnes ». La sourate insiste sur la responsabilite de l'ame dans les choix moraux.",
              axe4_coherence: "La racine n-f-s apparait environ 295 fois dans le Coran. L'expression « min 'indi anfusihim » est une construction qui souligne la responsabilite interieure. Le Coran localise systematiquement la source du bien et du mal dans l'ame.",
              axe5_frequence: "Pour la mission du khalifa, l'ame est le champ de bataille de la mission. La jalousie, l'orgueil et le rejet naissent dans l'ame. Le khalifa doit purifier son ame pour accomplir sa mission."
            }
          }
        }
      },
      // byn pos=18
      {
        word_key: "byn", position: 18, sense_chosen: "devenir clair",
        analysis_axes: {
          sense_chosen: "devenir clair",
          concept_chosen: "Clarté/Distinction",
          concepts: {
            "Clarté/Distinction": {
              status: "retenu",
              senses: ["devenir clair", "se manifester", "etre evident", "expliquer"],
              proof_ctx: "Le verbe tabayyana est un accompli forme V de la racine b-y-n. Le Lane's donne : devenir clair, se manifester, etre evident. La forme V (tafa''ala) indique un processus reflexif — la verite s'est manifestee d'elle-meme, sans intervention humaine. L'accompli marque que la manifestation est un fait acheve — la verite est deja apparue clairement. La distinction avec la separation (nul) est claire : le contexte est la clarte de la verite, pas la separation spatiale.",
              axe1_verset: "Le verbe tabayyana qualifie la verite — elle s'est manifestee clairement. Le champ lexical (verite, devenir clair, apres) montre que la jalousie persiste MALGRE la clarte de la verite. Le verset souligne l'aggravation : ils savent que c'est la verite (elle s'est manifestee) et pourtant ils souhaitent ramener les croyants a la couverture.",
              axe2_voisins: "Le verset 101 montrait un envoye confirmant les ecritures anterieures. Le verset 109 precise que la verite s'est manifestee — la confirmation a eu lieu, la clarte est la. Les versets voisins montrent que la verite est etablie et que le rejet est un choix delibere, pas une ignorance.",
              axe3_sourate: "La racine b-y-n est une racine structurante de la sourate. En 2:99, « Nous avons fait descendre vers toi des signes clairs ». En 2:118, « Nous avons clarifie les signes ». La sourate insiste sur la clarte de la revelation — le rejet ne peut pas se justifier par l'obscurite.",
              axe4_coherence: "La racine b-y-n apparait environ 523 fois dans le Coran. La forme V (tabayyana) apparait dans les contextes ou la verite se manifeste d'elle-meme. En 2:256, « la bonne direction s'est distinguee clairement de l'egarement ». Le Coran insiste sur la clarte de la verite.",
              axe5_frequence: "Pour la mission du khalifa, la clarte de la verite est un outil de la mission. La verite se manifeste d'elle-meme — le khalifa n'a pas a la forcer. Sa mission est de la laisser se manifester et de la proteger."
            }
          }
        }
      },
      // hqq pos=20
      {
        word_key: "hqq", position: 20, sense_chosen: "verite",
        analysis_axes: {
          sense_chosen: "verite",
          concept_chosen: "Vérité/Réalité",
          concepts: {
            "Vérité/Réalité": {
              status: "retenu",
              senses: ["verite", "etre vrai", "realite", "droit"],
              proof_ctx: "Le mot al-haqqu est un nom defini au nominatif de la racine h-q-q. Le Lane's donne : verite, realite, ce qui est conforme a la realite. L'article defini (al-) marque que c'est LA verite — la realite objective et unique. Le haqq est aussi un nom de Dieu (al-Haqq, la Verite). Ici la verite s'est manifestee clairement (tabayyana lahum al-haqq) — elle est devenue evidente, incontournable.",
              axe1_verset: "Le mot al-haqq est l'objet de la manifestation claire. Le champ lexical (devenir clair, verite, apres que) montre que la verite est un fait accompli — elle s'est manifestee et pourtant la jalousie persiste. Le verset oppose la verite objective (qui est claire) et le souhait subjectif (qui est motive par la jalousie). La verite ne change rien a leur jalousie.",
              axe2_voisins: "Le verset 101 montrait un envoye confirmant les ecritures. Le verset 109 precise que la verite s'est manifestee. Le verset 111 parlera de leurs pretentions. Les versets voisins montrent que la verite est la mais qu'elle est couverte par les pretentions et la jalousie.",
              axe3_sourate: "La racine h-q-q apparait dans la sourate al-Baqarah comme un pilier. En 2:26, « ils savent que c'est la verite de la part de leur Seigneur ». En 2:42, « ne couvrez pas la verite par le faux ». La sourate insiste sur la verite comme realite objective que les humains peuvent accepter ou rejeter.",
              axe4_coherence: "La racine h-q-q apparait environ 287 fois dans le Coran. Le mot al-haqq designe a la fois la verite, Dieu (2:6) et le Coran. En 2:119, le Prophete est envoye avec la verite. Le Coran identifie la verite a la revelation et a Dieu Lui-meme.",
              axe5_frequence: "Pour la mission du khalifa, la verite est le guide de la mission. La verite se manifeste clairement — le khalifa doit la reconnaitre et la suivre malgre la jalousie et l'hostilite des opposants."
            },
            "Obligation/Nécessité": {
              status: "nul",
              senses: ["devoir", "meriter", "etre obligatoire"],
              proof_ctx: "Le sens d'obligation est hors sujet — le contexte est la manifestation de la verite, pas une obligation."
            }
          }
        }
      },
      // efw pos=21
      {
        word_key: "efw", position: 21, sense_chosen: "pardonner",
        analysis_axes: {
          sense_chosen: "pardonner",
          concept_chosen: "Pardon/Effacement",
          concepts: {
            "Pardon/Effacement": {
              status: "retenu",
              senses: ["pardonner", "effacer", "excuser"],
              proof_ctx: "Le verbe i'fu est un imperatif 2MP de la racine '-f-w. Le Lane's donne : pardonner, effacer, excuser. Le pardon ('afw) est l'effacement de la faute — celui qui pardonne renonce a la punition meritee. L'imperatif est un ordre divin direct aux croyants. Le pardon est un acte exterieur directionnel : de celui qui pardonne vers celui qui est pardonne. La distinction avec le surplus (nul) est claire : le contexte est le pardon, pas l'excedent.",
              axe1_verset: "Le verbe i'fu inaugure la reponse divine a la jalousie des gens du Livre. Le champ lexical (pardonner, se detourner, jusqu'a ce que, commandement) montre que la reponse n'est pas la vengeance mais la patience. Le verset oppose l'hostilite des jaloux (souhaiter, ramener) et la reponse des croyants (pardonner, se detourner). Le pardon est une force, pas une faiblesse.",
              axe2_voisins: "Le verset 108 mettait en garde. Le verset 109 revele l'hostilite et ordonne le pardon. Le verset 110 ordonne la priere et la zakat. La progression est : connaissance du danger → pardon et patience → ancrage dans la pratique. Le pardon est l'etape intermediaire entre la connaissance du danger et l'action positive.",
              axe3_sourate: "La racine '-f-w apparait dans la sourate al-Baqarah dans le contexte du pardon. En 2:187, « Dieu vous a pardonne ». En 2:219, « de ce qui est en surplus ». La sourate montre que le pardon est a la fois divin et humain — Dieu pardonne et les croyants doivent pardonner.",
              axe4_coherence: "La racine '-f-w apparait environ 35 fois dans le Coran. En 42:40, « celui qui pardonne et reforme, sa recompense est aupres de Dieu ». En 7:199, « pratique le pardon, ordonne le bien et detourne-toi des ignorants ». Le Coran presente le pardon comme une vertu active et superieure a la vengeance.",
              axe5_frequence: "Pour la mission du khalifa, le pardon est un outil strategique de la mission. Pardonner n'est pas capituler — c'est choisir la patience en attendant le commandement divin. Le khalifa pardonne pour se liberer de la colere et se concentrer sur sa mission."
            },
            "Surplus/Excès": {
              status: "nul",
              senses: ["surplus"],
              proof_ctx: "Le sens de surplus est hors sujet — le verbe est un imperatif de pardon, pas un nom designant l'excedent."
            }
          }
        }
      },
      // sfh pos=22 — root is s-f-h (sad-fa-ha), NOT s-f-h (sin-fa-ha)
      {
        word_key: "sfh", position: 22, sense_chosen: "se detourner",
        analysis_axes: {
          sense_chosen: "se detourner",
          concept_chosen: "Détournement/Page",
          concepts: {
            "Détournement/Page": {
              status: "retenu",
              senses: ["se detourner", "tourner la page", "presenter le flanc"],
              proof_ctx: "Le verbe isfahhu est un imperatif 2MP de la racine s-f-h (sad-fa-ha, pas sin-fa-ha). Le Lane's donne : se detourner, presenter le flanc, tourner la page (safha). Le safh est le cote/flanc d'une chose — se detourner (asfaha) c'est presenter son flanc au lieu de faire face. L'imperatif ordonne de ne pas confronter l'hostilite directement mais de se detourner. Ce sens est distinct de la racine homophone sin-fa-ha (etre insense) — ici la racine est sad-fa-ha (le flanc, la page). La distinction est cruciale pour la traduction.",
              axe1_verset: "Le verbe isfahhu complete le pardon — pardonnez ET detournez-vous. Le champ lexical (pardonner, se detourner, jusqu'a ce que) montre une double reponse : le pardon efface la faute, le detournement evite la confrontation. Le verset ordonne la patience active : ne pas riposter (pardon) et ne pas s'engager dans le conflit (detournement).",
              axe2_voisins: "Le verset 108 avertissait. Le verset 109 ordonne le pardon et le detournement. Le verset 110 ordonne la priere. La progression montre que le detournement de l'hostilite est suivi du tournement vers Dieu (priere). On se detourne du mal pour se tourner vers le bien.",
              axe3_sourate: "La racine s-f-h (sad) n'apparait pas frequemment dans la sourate. Cette occurrence est specifique et ordonne une attitude de non-confrontation. La sourate equilibre les passages de combat (2:190-193) et les passages de patience (2:109). Le detournement est ordonne quand le combat n'est pas necessaire.",
              axe4_coherence: "En 15:85, « pardonne d'un beau pardon » (fa-isfahi al-safha al-jamil). En 43:89, « detourne-toi d'eux et dis : paix ». Le Coran ordonne le detournement quand la confrontation n'est pas productive. Le safh est une strategie de sagesse, pas de lachete.",
              axe5_frequence: "Pour la mission du khalifa, se detourner de l'hostilite est une competence strategique. Le khalifa ne gaspille pas son energie dans les conflits steriles — il se detourne pour se concentrer sur la priere et les oeuvres. Le detournement preserve l'energie de la mission."
            }
          }
        }
      },
      // aty pos=24
      {
        word_key: "aty", position: 24, sense_chosen: "venir",
        analysis_axes: {
          sense_chosen: "venir",
          concept_chosen: "Venue/Arrivée",
          concepts: {
            "Venue/Arrivée": {
              status: "retenu",
              senses: ["apporter", "donner", "arriver", "venir", "commettre"],
              proof_ctx: "Le verbe ya'tiya est un inaccompli subjonctif 3MS de la racine a-t-y. Le Lane's donne : venir, arriver, apporter. Le subjonctif apres hatta (jusqu'a ce que) exprime un but attendu dans le futur. Dieu est le sujet — c'est Dieu qui fait venir Son commandement. L'inaccompli marque que l'evenement est attendu mais non encore realise. La distinction avec « detruire » est evidente : le contexte est la venue du commandement divin.",
              axe1_verset: "Le verbe ya'tiya exprime l'horizon d'attente — pardonnez et detournez-vous JUSQU'A ce que Dieu fasse venir Son commandement. Le champ lexical (jusqu'a ce que, fasse venir, commandement) montre que le pardon et le detournement sont temporaires — ils durent jusqu'a l'intervention divine. Le verset fixe un terme a la patience.",
              axe2_voisins: "Le verset 101 utilisait ja'a (venir) pour l'arrivee de l'envoye. Le verset 109 utilise ya'tiya (fasse venir) pour l'arrivee du commandement. Les deux venues sont divines — l'une passee (l'envoye est venu) et l'autre future (le commandement viendra).",
              axe3_sourate: "La racine a-t-y apparait dans la sourate al-Baqarah dans de nombreux contextes. En 2:145, « meme si tu apportais toutes les preuves ». En 2:210, « attendent-ils que Dieu leur vienne avec les anges ». La sourate montre que la venue divine est certaine mais son moment est inconnu.",
              axe4_coherence: "La racine a-t-y apparait environ 549 fois dans le Coran. Le schema « jusqu'a ce que Dieu fasse venir » est un motif coranique de patience — en 47:31, « Nous vous eprouverons jusqu'a ce que Nous connaissions ». Le Coran lie la patience a l'attente de l'intervention divine.",
              axe5_frequence: "Pour la mission du khalifa, la venue du commandement divin est l'horizon de la patience. Le khalifa pardonne et se detourne en attendant l'intervention divine. La patience n'est pas passive — elle est active et orientee vers un horizon certain."
            }
          }
        }
      },
      // alh pos=25
      {
        word_key: "alh", position: 25, sense_chosen: "Dieu",
        analysis_axes: {
          sense_chosen: "Dieu",
          concept_chosen: "Divinité",
          concepts: {
            "Divinité": {
              status: "retenu",
              senses: ["divinite (concept)", "Dieu", "theologie", "divinite", "exclamation divine", "oui certes"],
              proof_ctx: "Le nom Allahu est le nom propre de la divinite au nominatif, sujet du verbe ya'tiya. Dieu est Celui qui fait venir Son commandement — Il est l'agent de l'intervention attendue. Le nom apparait deux fois dans le verset : comme sujet de la venue du commandement (Allahu ya'tiya) et comme qualifie de la puissance (inna Allaha qadir). Dieu est a la fois Celui qui agit et Celui qui peut tout.",
              axe1_verset: "Le nom Allahu apparait deux fois dans le verset. La premiere fois comme sujet de la venue du commandement — Dieu est l'agent actif de l'intervention. La deuxieme fois comme objet de la qualification de puissance — Dieu est Puissant sur toute chose. Le verset oppose la jalousie humaine (impuissante) et la puissance divine (totale).",
              axe2_voisins: "Le verset 108 parlait du sentier de Dieu. Le verset 109 montre Dieu comme l'agent de la resolution — Son commandement viendra. Le verset 110 ordonne la priere envers Dieu. Les versets montrent que Dieu est a la fois le refuge et la solution.",
              axe3_sourate: "Le nom Allah est le mot le plus frequent de la sourate. Il structure chaque passage. En 2:109, Dieu est a la fois le garant de la patience (Son commandement viendra) et la garantie de la puissance (Il est Puissant sur toute chose).",
              axe4_coherence: "Le nom Allah apparait plus de 2600 fois dans le Coran. La formule « inna Allaha 'ala kulli shay'in qadir » (Dieu est Puissant sur toute chose) apparait dans de nombreux versets — en 2:20, 2:106, 2:109, 2:148. C'est une formule de cloture qui reassure les croyants.",
              axe5_frequence: "Pour la mission du khalifa, Dieu est le mandant et le garant de la mission. Sa puissance sur toute chose est la garantie que le commandement viendra et que la patience sera recompensee."
            }
          }
        }
      },
      // amr pos=26
      {
        word_key: "amr", position: 26, sense_chosen: "commandement",
        analysis_axes: {
          sense_chosen: "commandement",
          concept_chosen: "Commandement/Autorité",
          concepts: {
            "Commandement/Autorité": {
              status: "retenu",
              senses: ["nommer gouverneur", "ordonner", "commander"],
              proof_ctx: "Le mot amrihi est un nom au genitif de la racine a-m-r avec pronom 3MS. Le Lane's donne : commandement, ordre, affaire. Le amr (commandement) est un acte d'autorite — il emane de celui qui a le pouvoir et s'impose a celui qui le recoit. Ici « bi-amrihi » (avec Son commandement) precise que le commandement est divin — il porte l'autorite de Dieu. Le texte ne precise pas la nature du commandement, laissant l'ouverture a toute forme d'intervention divine. La distinction avec « affaire » est que le contexte est un acte d'autorite, pas une simple occupation.",
              axe1_verset: "Le mot amrihi est l'objet de l'attente — le commandement de Dieu viendra. Le champ lexical (pardonner, se detourner, jusqu'a ce que, commandement, puissant) montre que le commandement est la resolution attendue. Le verset ordonne la patience en attendant une intervention divine decisive.",
              axe2_voisins: "Le verset 108 avertissait. Le verset 109 ordonne la patience jusqu'au commandement. Le verset 110 ordonne la priere comme pratique d'attente. Les versets montrent que le commandement divin est l'horizon qui donne sens a la patience.",
              axe3_sourate: "La racine a-m-r apparait dans la sourate al-Baqarah dans le contexte de l'autorite divine. En 2:27, « ce que Dieu a ordonne de joindre ». En 2:68, « il ordonne que nous sacrifiions une vache ». La sourate montre que le commandement divin est irrevocable et definitif.",
              axe4_coherence: "La racine a-m-r apparait environ 248 fois dans le Coran. L'expression « amr Allah » (commandement de Dieu) designe les interventions divines decisives. En 16:1, « le commandement de Dieu est venu — ne le hatez pas ». Le Coran montre que le commandement vient a son heure.",
              axe5_frequence: "Pour la mission du khalifa, le commandement divin est la directive de la mission. Le khalifa attend le commandement avec patience et agit quand il vient. La patience n'est pas l'inaction — c'est l'attente active du moment juste."
            },
            "Affaire/Chose": {
              status: "nul",
              senses: ["affaire", "chose"],
              proof_ctx: "Le sens d'affaire est hors sujet — le contexte est un acte d'autorite divine attendu, pas une simple occupation."
            },
            "Consultation": {
              status: "nul",
              senses: ["consulter"],
              proof_ctx: "Le sens de consultation est hors sujet — le commandement de Dieu n'est pas une consultation mais un ordre."
            }
          }
        }
      },
      // kll pos=30
      {
        word_key: "kll", position: 30, sense_chosen: "totalite",
        analysis_axes: {
          sense_chosen: "totalite",
          concept_chosen: "Totalité",
          concepts: {
            "Totalité": {
              status: "retenu",
              senses: ["chaque", "tout", "totalite"],
              proof_ctx: "Le mot kulli est un nom au genitif de la racine k-l-l. Le Lane's donne : tout, chaque, totalite. Le kull englobe la totalite sans exception. Ici « 'ala kulli shay'in » (sur toute chose) qualifie la puissance de Dieu — elle s'etend a la totalite des choses, sans aucune exception. La racine n'a qu'un concept retenu, le choix est immediat.",
              axe1_verset: "Le mot kulli qualifie l'etendue de la puissance divine — sur TOUTE chose. Le champ lexical (Dieu, toute, chose, puissant) construit une formule de reassurance : quelle que soit la puissance des jaloux et des hostiles, Dieu est plus puissant qu'eux tous. La totalite ne souffre aucune exception.",
              axe2_voisins: "Le verset 106 parlait de la puissance de Dieu sur toute chose. Le verset 109 reprend la meme formule. La repetition renforce l'idee que la puissance divine est le cadre dans lequel tout se produit — y compris la jalousie des gens du Livre.",
              axe3_sourate: "La formule « 'ala kulli shay'in qadir » apparait plusieurs fois dans la sourate al-Baqarah (2:20, 2:106, 2:109, 2:148, 2:259, 2:284). C'est une formule recurrente de cloture qui affirme la puissance divine face aux defis du passage.",
              axe4_coherence: "La formule « 'ala kulli shay'in qadir » apparait environ 45 fois dans le Coran. Elle est systematiquement utilisee pour conclure un passage et affirmer la puissance divine. La totalite garantit qu'aucun obstacle ne depasse la puissance de Dieu.",
              axe5_frequence: "Pour la mission du khalifa, la totalite de la puissance divine est la garantie de la mission. Rien n'echappe a la puissance de Dieu — la jalousie, l'hostilite, le rejet, tout est sous Son controle."
            }
          }
        }
      },
      // qdr pos=32
      {
        word_key: "qdr", position: 32, sense_chosen: "puissant",
        analysis_axes: {
          sense_chosen: "puissant",
          concept_chosen: "Puissance/Capacité",
          concepts: {
            "Puissance/Capacité": {
              status: "retenu",
              senses: ["pouvoir", "etre capable"],
              proof_ctx: "Le mot qadirun est un adjectif intensif (fa'il) au nominatif de la racine q-d-r. Le Lane's donne : puissant, capable, qui a le pouvoir. L'adjectif qadir est une forme intensive — il designe une puissance permanente et intrinseque, pas une capacite ponctuelle. Ici qadir qualifie Dieu — Il est Puissant par nature, pas seulement capable ponctuellement. La distinction avec « mesurer/determiner » est claire : le contexte est la puissance, pas la mesure.",
              axe1_verset: "Le mot qadirun cloture le verset en qualifiant Dieu de Puissant sur toute chose. Le champ lexical (Dieu, toute, chose, puissant) forme une formule de reassurance face a l'hostilite decrite dans le verset. La puissance divine est la reponse ultime a la jalousie humaine — ils veulent mais ne peuvent pas, Dieu peut tout.",
              axe2_voisins: "Le verset 106 utilisait la meme formule (qadir). Le verset 109 la reprend pour conclure. La repetition entre versets proches montre que la puissance divine est le cadre permanent qui entoure les evenements humains.",
              axe3_sourate: "La racine q-d-r apparait dans la sourate al-Baqarah dans le contexte de la puissance. En 2:20, « Dieu est sur toute chose Puissant ». En 2:106, meme formule. La sourate utilise la puissance divine comme argument de reassurance recurrent.",
              axe4_coherence: "La racine q-d-r apparait environ 132 fois dans le Coran. L'adjectif qadir est reserve a Dieu dans l'expression « 'ala kulli shay'in qadir ». Le Coran affirme la puissance divine comme attribut permanent et total.",
              axe5_frequence: "Pour la mission du khalifa, la puissance de Dieu est le garant de la mission. Le khalifa n'agit pas par sa propre puissance mais par celle de Dieu. La puissance divine est totale — aucun obstacle n'est insurmontable."
            },
            "Mesure/Détermination": {
              status: "nul",
              senses: ["mesurer", "determiner", "decreter", "destin", "valeur"],
              proof_ctx: "Le sens de mesure est hors sujet — le contexte est la puissance divine, pas la mesure ou le decret."
            }
          }
        }
      }
    ]
  },
  110: {
    verse_id: 117,
    analysis_id: 476,
    translation_arab: "Et etablissez la priere et donnez la purification. Et ce que vous avancez pour vos ames de bien, vous le trouverez aupres de Dieu. Certes Dieu voit ce que vous faites.",
    full_translation: "Et accomplissez la Salat et acquittez la Zakat. Et tout ce que vous avancez de bien pour vous-memes, vous le retrouverez aupres d'Allah, car Allah voit parfaitement ce que vous faites.",
    translation_explanation: `§DEMARCHE§
Le verset ordonne deux pratiques fondamentales et promet une recompense. Le verbe **aqimu** est un imperatif 2MP forme IV de la racine q-w-m. Le Lane's donne : se lever, se dresser, etablir. La forme IV (af'ala) est causative — aqimu signifie « faites se tenir debout », c'est-a-dire etablissez. L'imperatif est un ordre divin direct. Etablir la priere c'est la faire se tenir droite — la maintenir avec constance et rectitude. Le mot **al-salata** est un nom feminin defini a l'accusatif de la racine s-l-w. Le Lane's donne : priere, invocation, priere rituelle. L'article defini (al-) marque que c'est LA priere — la priere connue et prescrite, pas n'importe quelle invocation. Le verbe **atu** est un imperatif 2MP forme IV de la racine a-t-y. Le Lane's donne : donner, apporter. La forme IV (af'ala) est causative — atu signifie « faites venir/donner ». L'imperatif ordonne de donner la zakat. Le mot **al-zakata** est un nom feminin defini a l'accusatif de la racine z-k-w. Le Lane's donne : purification, croissance, aumone legale. La zakat est a la fois une purification (du bien) et une croissance (de la barakah). Le verbe **tuqaddimu** est un inaccompli 2MP forme II de la racine q-d-m. Le Lane's donne : avancer, preceder, mettre devant. La forme II (fa''ala) intensifie l'action — avancer activement, mettre devant deliberement. L'inaccompli dans le contexte conditionnel (ma tuqaddimu) exprime une action continue et repetee. Le mot **li-anfusikum** (pour vos ames) est un nom pluriel de la racine n-f-s avec preposition li et pronom 2MP. Le Lane's donne : ame, personne. La preposition li (pour) marque le benefice — ce que vous avancez est POUR vos ames. Le mot **khayrin** est un nom masculin indefini au genitif de la racine kh-y-r. Le Lane's donne : bien, excellence, ce qui est bon. L'indefini (sans article) marque un bien non specifie — tout bien, quel qu'il soit. Le verbe **tajidahu** est un inaccompli 2MP de la racine w-j-d avec pronom 3MS. Le Lane's donne : trouver, rencontrer. L'inaccompli exprime une certitude future — vous le trouverez certainement. Le pronom suffixe (hu) renvoie au bien avance. Le mot **'inda** est une preposition de la racine '-n-d. Le Lane's donne : aupres de, chez. « Aupres de Dieu » signifie que le bien avance est conserve dans la presence divine. Le nom **Allahi** est le nom propre de la divinite au genitif. Le bien se trouve aupres de Dieu — Il en est le gardien. Le verbe **ta'maluna** est un inaccompli 2MP de la racine '-m-l. Le Lane's donne : travailler, agir, oeuvrer. L'inaccompli exprime une action continue — ce que vous faites en permanence. Le mot **basirun** est un adjectif intensif de la racine b-s-r au nominatif. Le Lane's donne : celui qui voit, clairvoyant, qui percoit. L'adjectif intensif (fa'il) marque une vision permanente et totale — Dieu ne voit pas ponctuellement, Il voit en permanence.

§JUSTIFICATION§
**etablissez** — Le sens retenu est « se lever/se dresser ». Le verbe aqimu a la forme IV signifie etablir, faire se tenir debout. L'alternative « peuple » est ecartee car le verbe est a la forme IV causative, pas un nom.

**la priere** — Le sens retenu est « priere/invocation ». Le mot al-salat designe la priere rituelle prescrite. L'alternative « suivre de pres » est ecartee car le contexte est la priere, pas la poursuite.

**donnez** — Le sens retenu est « donner/apporter ». Le verbe atu ordonne de donner la zakat. Le sens est le meme que dans le verset 101 (« donner ») mais dans un contexte actif (imperatif), pas passif.

**la purification** — Le sens retenu est « purification/croissance ». Le mot al-zakat designe a la fois la purification du bien et l'aumone legale. Le choix de « purification » preserve le sens etymologique — donner purifie le bien restant et fait croitre la barakah.

**avancez** — Le sens retenu est « avancer/preceder ». Le verbe tuqaddimu forme II signifie avancer activement, mettre devant. L'alternative « pied/ancien » est ecartee car le verbe est a la forme II active.

**pour vos ames** — Le sens retenu est « ame/personne ». Le mot anfusikum designe les beneficiaires — ce que vous avancez est pour vous-memes.

**de bien** — Le sens retenu est « bien/excellence ». Le mot khayrin designe tout ce qui est bon et excellent. C'est un terme general qui englobe toutes les formes de bien.

**le trouverez** — Le sens retenu est « trouver/rencontrer ». Le verbe tajidahu promet la decouverte — le bien avance sera retrouve.

**aupres de** — Le sens retenu est « aupres de/chez ». La preposition 'inda localise le bien — il est conserve aupres de Dieu.

**Dieu** — Le sens retenu est « divinite ». Allah est le gardien du bien avance.

**faites** — Le sens retenu est « agir/oeuvrer ». Le verbe ta'maluna designe l'action continue des croyants.

**voit** — Le sens retenu est « voir/percevoir ». Le mot basir qualifie Dieu comme Celui qui voit tout. L'alternative « peau » est ecartee car l'adjectif qualifie la vision divine, pas l'anatomie.

§CRITIQUE§
Hamidullah traduit « accomplissez la Salat et acquittez la Zakat ». Le mot « accomplir » est plus commun en francais religieux, mais « etablir » est plus fidele au sens de la forme IV de q-w-m (faire se tenir debout). « Acquitter » pour la zakat est un choix juridique — « donner la purification » est plus proche du sens etymologique. Hamidullah garde les mots arabes « Salat » et « Zakat » — nous les traduisons pour montrer leur sens. « Retrouverez aupres d'Allah » est similaire a notre « trouverez aupres de Dieu ». L'expression « voit parfaitement » pour basir est une interpretation acceptable mais « voit » suffit — basir signifie deja une vision complete.`,
    segments: [
      { fr: "et etablissez", pos: "verbe", phon: "aqimu", arabic: "\u0648\u064e\u0623\u064e\u0642\u0650\u064a\u0645\u064f\u0648\u0627\u06df", word_key: "qwm", is_particle: false, sense_retenu: "etablir", position: 0 },
      { fr: "la priere", pos: "nom", phon: "al-salata", arabic: "\u0671\u0644\u0635\u0651\u064e\u0644\u064e\u0648\u0640\u0629\u064e", word_key: "slw", is_particle: false, sense_retenu: "priere", position: 1 },
      { fr: "et donnez", pos: "verbe", phon: "atu", arabic: "\u0648\u064e\u0621\u064e\u0627\u062a\u064f\u0648\u0627\u06df", word_key: "aty", is_particle: false, sense_retenu: "donner", position: 2 },
      { fr: "la purification", pos: "nom", phon: "al-zakata", arabic: "\u0671\u0644\u0632\u0651\u064e\u0643\u064e\u0648\u0640\u0629\u064e", word_key: "zkw", is_particle: false, sense_retenu: "purification", position: 3 },
      { fr: "et ce que", phon: "wa-ma", arabic: "\u0648\u064e\u0645\u064e\u0627", is_particle: true, position: 4 },
      { fr: "vous avancez", pos: "verbe", phon: "tuqaddimu", arabic: "\u062a\u064f\u0642\u064e\u062f\u0651\u0650\u0645\u064f\u0648\u0627\u06df", word_key: "qdm", is_particle: false, sense_retenu: "avancer", position: 5 },
      { fr: "pour vos ames", pos: "nom", phon: "li-anfusikum", arabic: "\u0644\u0650\u0623\u064e\u0646\u0641\u064f\u0633\u0650\u0643\u064f\u0645", word_key: "nfs", is_particle: false, sense_retenu: "ame", position: 6 },
      { fr: "de", phon: "min", arabic: "\u0645\u0650\u0651\u0646\u0652", is_particle: true, position: 7 },
      { fr: "bien", pos: "nom", phon: "khayrin", arabic: "\u062e\u064e\u064a\u0652\u0631\u064d", word_key: "xyr", is_particle: false, sense_retenu: "bien", position: 8 },
      { fr: "vous le trouverez", pos: "verbe", phon: "tajidahu", arabic: "\u062a\u064e\u062c\u0650\u062f\u064f\u0648\u0647\u064f", word_key: "wjd", is_particle: false, sense_retenu: "trouver", position: 9 },
      { fr: "aupres de", pos: "nom", phon: "'inda", arabic: "\u0639\u0650\u0646\u062f\u064e", word_key: "end", is_particle: false, sense_retenu: "aupres de", position: 10 },
      { fr: "Dieu", pos: "nom", phon: "Allahi", arabic: "\u0671\u0644\u0644\u0651\u064e\u0647\u0650", word_key: "alh", is_particle: false, sense_retenu: "Dieu", position: 11 },
      { fr: "certes", phon: "inna", arabic: "\u0625\u0650\u0646\u0651\u064e", is_particle: true, position: 12 },
      { fr: "Dieu", pos: "nom", phon: "Allaha", arabic: "\u0671\u0644\u0644\u0651\u064e\u0647\u064e", word_key: "alh", is_particle: false, sense_retenu: "Dieu", position: 13 },
      { fr: "ce que", phon: "bi-ma", arabic: "\u0628\u0650\u0645\u064e\u0627", is_particle: true, position: 14 },
      { fr: "vous faites", pos: "verbe", phon: "ta'maluna", arabic: "\u062a\u064e\u0639\u0652\u0645\u064e\u0644\u064f\u0648\u0646\u064e", word_key: "eml", is_particle: false, sense_retenu: "agir", position: 15 },
      { fr: "voit", pos: "nom", phon: "basirun", arabic: "\u0628\u064e\u0635\u0650\u064a\u0631\u064c", word_key: "bsr", is_particle: false, sense_retenu: "voir", position: 16 }
    ],
    words: [
      // qwm pos=0
      {
        word_key: "qwm", position: 0, sense_chosen: "etablir",
        analysis_axes: {
          sense_chosen: "etablir",
          concept_chosen: "Verticalité/Droiture",
          concepts: {
            "Verticalité/Droiture": {
              status: "retenu",
              senses: ["se lever", "droit", "se dresser", "corriger", "se tenir debout", "rectitude", "redresser"],
              proof_ctx: "Le verbe aqimu est un imperatif 2MP forme IV de la racine q-w-m. Le Lane's donne : se lever, se dresser, etablir, faire se tenir debout. La forme IV (af'ala) est causative — aqimu signifie « faites se tenir debout ». Etablir la priere c'est la faire se tenir droite, la maintenir avec constance et rectitude. Le sens de verticalite est premier — ce qui se tient debout est droit, stable, permanent. La distinction avec « peuple » (retenu) est que le verbe est a la forme IV causative, pas un nom. Le choix de « verticalite » comme concept s'impose ici car le verbe decrit l'acte d'etablir, pas le peuple.",
              axe1_verset: "Le verbe aqimu ouvre le verset avec un ordre : etablissez la priere. Le champ lexical (etablir, priere, donner, purification, avancer, bien) montre que le verset ordonne des actions positives apres le passage sur la patience. Etablir la priere est la premiere action positive — c'est le fondement de toutes les autres. La verticalite de la priere contraste avec la regression voulue par les jaloux.",
              axe2_voisins: "Le verset 109 ordonnait le pardon et le detournement. Le verset 110 ordonne la priere et la zakat — les deux piliers de l'action positive. Le verset 111 parlera des pretentions des gens du Livre. La progression est : patience → action positive → refutation des pretentions.",
              axe3_sourate: "La formule « aqimu al-salat » (etablissez la priere) apparait dans la sourate al-Baqarah en 2:43, 2:83, 2:110. C'est un ordre recurrent — la priere est le pilier de la pratique ordonnee par la sourate. La sourate insiste sur l'etablissement (iqamah) de la priere, pas seulement son accomplissement.",
              axe4_coherence: "La racine q-w-m apparait environ 660 fois dans le Coran. La forme IV (aqama) avec la priere est un schema coranique fondamental. En 11:114, « etablis la priere aux deux extremites du jour ». Le Coran ordonne d'etablir la priere — pas seulement de la faire, mais de la maintenir droite et constante.",
              axe5_frequence: "Pour la mission du khalifa, etablir la priere est le premier acte de la mission. La priere est la verticalite — elle fait se tenir debout le croyant face a Dieu. Le khalifa qui etablit la priere etablit sa mission sur un fondement stable."
            },
            "Peuple/Communauté": {
              status: "nul",
              senses: ["peuple", "communaute", "nation", "tribu", "groupe"],
              proof_ctx: "Le sens de peuple est hors sujet — le verbe est a la forme IV causative (etablir), pas un nom designant un peuple. Le contexte est l'ordre d'etablir la priere."
            }
          }
        }
      },
      // slw pos=1
      {
        word_key: "slw", position: 1, sense_chosen: "priere",
        analysis_axes: {
          sense_chosen: "priere",
          concept_chosen: "Prière/Invocation",
          concepts: {
            "Prière/Invocation": {
              status: "retenu",
              senses: ["prier", "priere rituelle", "invoquer", "benir", "lieu de priere"],
              proof_ctx: "Le mot al-salata est un nom feminin defini a l'accusatif de la racine s-l-w. Le Lane's donne : priere, invocation, priere rituelle. Le sens premier de s-l-w est la connexion/lien — la priere est le lien entre le serviteur et Dieu. L'article defini (al-) marque LA priere — celle qui est prescrite et connue. L'accusatif marque le complement d'objet du verbe aqimu. La distinction avec « suivre de pres » (nul) est claire : le contexte est la priere, pas la poursuite.",
              axe1_verset: "Le mot al-salat est l'objet de l'ordre divin — ce que les croyants doivent etablir. Le champ lexical (etablir, priere, donner, purification) montre que la priere est associee a la zakat comme paire fondamentale. Le verset lie la priere (relation verticale avec Dieu) et la zakat (relation horizontale avec les autres).",
              axe2_voisins: "Le verset 109 ordonnait le pardon. Le verset 110 ordonne la priere — le passage du pardon a la priere montre que le pardon prepare le coeur a la priere. Le verset 111 parlera des pretentions — la priere est le contre-exemple des pretentions vides.",
              axe3_sourate: "La racine s-l-w apparait dans la sourate al-Baqarah dans le contexte de la priere. En 2:3, les croyants « etablissent la priere ». En 2:43, « etablissez la priere et donnez la zakat ». La paire priere-zakat est un leitmotiv de la sourate.",
              axe4_coherence: "La racine s-l-w apparait environ 99 fois dans le Coran. La priere est le deuxieme pilier de l'islam. En 29:45, « la priere empeche l'abomination et le blamable ». Le Coran presente la priere comme un rempart contre le mal.",
              axe5_frequence: "Pour la mission du khalifa, la priere est le lien avec le mandant de la mission. Sans priere, le khalifa perd la connexion avec Dieu. La priere maintient l'orientation de la mission."
            },
            "Proximité/Attachement": {
              status: "nul",
              senses: ["suivre de pres"],
              proof_ctx: "Le sens de suivre de pres est un sens connexe — la priere est un acte de proximite avec Dieu. Mais le contexte est la priere rituelle, pas l'acte de suivre."
            }
          }
        }
      },
      // aty pos=2
      {
        word_key: "aty", position: 2, sense_chosen: "donner",
        analysis_axes: {
          sense_chosen: "donner",
          concept_chosen: "Venue/Arrivée",
          concepts: {
            "Venue/Arrivée": {
              status: "retenu",
              senses: ["apporter", "donner", "arriver", "venir", "commettre"],
              proof_ctx: "Le verbe atu est un imperatif 2MP forme IV de la racine a-t-y. Le Lane's donne : donner, apporter, faire venir. La forme IV (af'ala) est causative — atu signifie « faites venir/donner ». L'imperatif ordonne de donner la zakat. La racine a-t-y porte le sens general de « venir/apporter » — donner la zakat c'est faire venir la purification vers les beneficiaires.",
              axe1_verset: "Le verbe atu est le deuxieme ordre du verset — donnez la purification. Le champ lexical (etablir, priere, donner, purification) montre la paire fondamentale : la priere (relation avec Dieu) et la zakat (relation avec les autres). Donner est un acte directionnel — le bien sort du donneur et atteint le beneficiaire.",
              axe2_voisins: "Le verset 109 ordonnait le pardon (effacer) et le detournement (eviter). Le verset 110 ordonne d'etablir (construire) et de donner (partager). La progression va de l'effacement du negatif a la construction du positif.",
              axe3_sourate: "La racine a-t-y au sens de « donner » apparait dans la sourate en 2:43, 2:83, 2:110, 2:177, 2:277 dans la formule « atu al-zakat ». La sourate insiste sur le don comme pratique fondamentale.",
              axe4_coherence: "La formule « atu al-zakat » (donnez la purification) apparait environ 30 fois dans le Coran. Elle est systematiquement associee a « aqimu al-salat » (etablissez la priere). Le Coran lie les deux pratiques comme un binome indissociable.",
              axe5_frequence: "Pour la mission du khalifa, donner la zakat est une dimension essentielle de la mission. Le khalifa ne prie pas seulement — il donne aussi. La mission a une dimension verticale (priere) et horizontale (zakat)."
            }
          }
        }
      },
      // zkw pos=3
      {
        word_key: "zkw", position: 3, sense_chosen: "purification",
        analysis_axes: {
          sense_chosen: "purification",
          concept_chosen: "Purification/Croissance",
          concepts: {
            "Purification/Croissance": {
              status: "retenu",
              senses: ["aumone legale", "prosperer", "purifier", "croitre", "etre pur"],
              proof_ctx: "Le mot al-zakata est un nom feminin defini a l'accusatif de la racine z-k-w. Le Lane's donne : purification, croissance, aumone legale. Le sens premier de z-k-w est la purete et la croissance — la zakat purifie le bien et fait croitre la barakah. L'article defini (al-) marque LA zakat — l'aumone prescrite. La racine n'a qu'un concept retenu, le choix est immediat.",
              axe1_verset: "Le mot al-zakat est l'objet du deuxieme ordre — donnez la purification. Le champ lexical (priere, purification, avancer, bien) montre que le verset ordonne la construction spirituelle. La purification est le complement de la priere : la priere purifie le coeur, la zakat purifie le bien materiel.",
              axe2_voisins: "Le verset 109 parlait de jalousie (un vice interieur). Le verset 110 ordonne la purification (un acte de vertu). La progression montre que la purification est l'antidote de la jalousie — celui qui purifie son bien ne jalouse pas celui des autres.",
              axe3_sourate: "La racine z-k-w apparait dans la sourate al-Baqarah en 2:43, 2:83, 2:110, 2:177, 2:277. La zakat est un pilier de la pratique ordonnee par la sourate. En 2:276, « Dieu aneantit l'usure et fait croitre les aumones ». La sourate oppose l'usure (croissance illegitime) et la zakat (croissance benedite).",
              axe4_coherence: "La racine z-k-w apparait environ 59 fois dans le Coran. La zakat est le troisieme pilier de l'islam. En 9:103, « prends de leurs biens une aumone qui les purifie et les fasse croitre ». Le Coran lie purification et croissance dans le meme mot.",
              axe5_frequence: "Pour la mission du khalifa, la purification est un acte de mission. Donner la zakat c'est purifier son bien et contribuer a la communaute. Le khalifa participe a la circulation du bien par la purification."
            }
          }
        }
      },
      // qdm pos=5
      {
        word_key: "qdm", position: 5, sense_chosen: "avancer",
        analysis_axes: {
          sense_chosen: "avancer",
          concept_chosen: "Antériorité/Établissement",
          concepts: {
            "Antériorité/Établissement": {
              status: "retenu",
              senses: ["preceder", "ancien", "pied", "avancer"],
              proof_ctx: "Le verbe tuqaddimu est un inaccompli 2MP forme II de la racine q-d-m. Le Lane's donne : avancer, preceder, mettre devant. La forme II (fa''ala) intensifie l'action — avancer activement et deliberement. Le sens de qaddama est « mettre devant soi » — ce que vous avancez de bien est ce que vous placez devant vous pour l'avenir. L'inaccompli dans un contexte conditionnel (ma tuqaddimu) exprime une action continue.",
              axe1_verset: "Le verbe tuqaddimu introduit la promesse du verset — ce que vous avancez de bien, vous le trouverez. Le champ lexical (avancer, ames, bien, trouver, aupres de Dieu) montre un mouvement vers l'avant et vers le haut : avancer le bien vers Dieu. Le verset oppose la regression souhaitee par les jaloux (V109) et l'avancement ordonne aux croyants (V110).",
              axe2_voisins: "Le verset 109 parlait de ramener en arriere (radd). Le verset 110 parle d'avancer vers l'avant (taqdim). Le contraste est frappant : les jaloux veulent vous ramener, mais vous devez avancer. La direction est opposee — en arriere vs en avant.",
              axe3_sourate: "La racine q-d-m apparait dans la sourate al-Baqarah dans le contexte de l'avancement. En 2:95, « ce que leurs mains ont avance ». En 2:223, « avancez pour vos ames ». La sourate utilise taqdim pour les oeuvres preparees pour l'au-dela.",
              axe4_coherence: "La racine q-d-m apparait environ 47 fois dans le Coran. Le schema « ce que vos mains ont avance » est recurrent — en 18:57, 36:12, 78:40. Le Coran presente les oeuvres comme un capital avance qui sera retrouve.",
              axe5_frequence: "Pour la mission du khalifa, avancer le bien est la mission elle-meme. Le khalifa avance les oeuvres pour l'avenir — chaque acte de bien est un investissement dans la mission. L'avancement s'oppose a la regression."
            }
          }
        }
      },
      // nfs pos=6
      {
        word_key: "nfs", position: 6, sense_chosen: "ame",
        analysis_axes: {
          sense_chosen: "ame",
          concept_chosen: "Âme/Être",
          concepts: {
            "Âme/Être": {
              status: "retenu",
              senses: ["desir", "ame", "personne", "esprit", "soi-meme"],
              proof_ctx: "Le mot anfusikum est un pluriel feminin de la racine n-f-s avec preposition li et pronom 2MP. Le Lane's donne : ame, personne, soi-meme. La preposition li (pour) marque le benefice — ce que vous avancez est POUR vos ames. Le texte souligne que le benefice des oeuvres revient a celui qui les accomplit — le donneur est aussi le beneficiaire. Le nafs est le soi profond qui recueille le fruit des oeuvres.",
              axe1_verset: "Le mot anfusikum designe les beneficiaires des oeuvres — vos propres ames. Le champ lexical (avancer, ames, bien, trouver) montre que les oeuvres sont un investissement pour soi-meme. Le verset renverse la perspective : donner n'est pas perdre, c'est investir pour soi.",
              axe2_voisins: "Le verset 109 parlait des ames des jaloux (anfusihim) comme source de la jalousie. Le verset 110 parle des ames des croyants (anfusikum) comme beneficiaires du bien. Le contraste est entre les ames corrompues par la jalousie et les ames enrichies par les oeuvres.",
              axe3_sourate: "La racine n-f-s apparait dans la sourate al-Baqarah pour designer l'interiorite. En 2:223, « avancez pour vos ames ». En 2:231, « ne vous faites pas tort a vous-memes ». La sourate insiste sur la responsabilite de chacun envers sa propre ame.",
              axe4_coherence: "L'expression « li-anfusikum » (pour vos ames) est un rappel coranique recurrent que les oeuvres beneficient d'abord a celui qui les accomplit. En 17:7, « si vous faites le bien, vous le faites pour vous-memes ». Le Coran montre que l'homme est le premier beneficiaire de ses actes.",
              axe5_frequence: "Pour la mission du khalifa, l'ame est le champ et le beneficiaire de la mission. Chaque oeuvre avancee enrichit l'ame du khalifa. La mission n'est pas un sacrifice — c'est un investissement pour l'ame."
            }
          }
        }
      },
      // xyr pos=8 — analysis_id=557, concept "Bien/Excellence"
      {
        word_key: "xyr", position: 8, sense_chosen: "bien",
        analysis_axes: {
          sense_chosen: "bien",
          concept_chosen: "Bien/Excellence",
          concepts: {
            "Bien/Excellence": {
              status: "retenu",
              senses: ["bien", "meilleur", "excellence", "preferer"],
              proof_ctx: "Le mot khayrin est un nom masculin indefini au genitif de la racine kh-y-r. Le Lane's donne : bien, ce qui est bon, meilleur, excellence. Le khayr est l'oppose du sharr (mal). L'indefini (sans article) marque un bien non specifie — tout bien, quel qu'il soit, de la priere a l'aumone en passant par toute action positive. Le khayr englobe toutes les formes de bien sans restriction.",
              axe1_verset: "Le mot khayrin qualifie ce qui est avance — ce que vous avancez DE BIEN. Le champ lexical (avancer, ames, bien, trouver, aupres de Dieu) montre que le bien est la matiere de l'investissement spirituel. Le verset ne limite pas le bien a une categorie specifique — tout bien compte.",
              axe2_voisins: "Le verset 109 revelait le mal (jalousie, souhait de nuire). Le verset 110 ordonne le bien (priere, zakat, avancer). Le contraste est entre le mal venant des jaloux et le bien ordonne aux croyants. Le bien est la reponse au mal.",
              axe3_sourate: "La racine kh-y-r apparait dans la sourate al-Baqarah pour designer le bien. En 2:103, « s'ils avaient cru et craint, une recompense de Dieu aurait ete meilleure ». En 2:184, « celui qui fait un bien supplementaire, c'est meilleur pour lui ». La sourate insiste sur la recherche du bien comme choix fondamental.",
              axe4_coherence: "La racine kh-y-r apparait environ 176 fois dans le Coran. Le khayr est un concept central — en 2:215, « ce que vous depensez de bien ». En 99:7, « celui qui fait un poids d'atome de bien le verra ». Le Coran affirme que tout bien, meme minime, est comptabilise.",
              axe5_frequence: "Pour la mission du khalifa, le bien est la matiere premiere de la mission. Chaque acte de bien est un pas dans la mission. Le khalifa avance le bien pour son ame et pour la communaute — c'est la substance meme de sa responsabilite."
            }
          }
        }
      },
      // wjd pos=9
      {
        word_key: "wjd", position: 9, sense_chosen: "trouver",
        analysis_axes: {
          sense_chosen: "trouver",
          concept_chosen: "Découverte/Existence",
          concepts: {
            "Découverte/Existence": {
              status: "retenu",
              senses: ["trouver", "exister", "rencontrer"],
              proof_ctx: "Le verbe tajidahu est un inaccompli 2MP de la racine w-j-d avec pronom 3MS. Le Lane's donne : trouver, rencontrer, decouvrir. La decouverte (wujud) est le moment ou l'on rencontre ce qu'on a avance. Le pronom suffixe (hu) renvoie au bien avance — ce bien, vous le trouverez. L'inaccompli exprime une certitude future — la decouverte est garantie par Dieu.",
              axe1_verset: "Le verbe tajidahu est la promesse du verset — le bien avance sera retrouve. Le champ lexical (avancer, bien, trouver, aupres de Dieu) construit un circuit : le bien part du croyant, passe par Dieu, et revient au croyant. Le verset garantit que rien ne se perd — tout bien avance est conserve et retrouve.",
              axe2_voisins: "Le verset 109 parlait du souhait des jaloux (qui ne se realisera pas). Le verset 110 parle de la promesse divine (qui se realisera). Le contraste est entre le souhait humain (vain) et la promesse divine (certaine).",
              axe3_sourate: "La racine w-j-d apparait dans la sourate al-Baqarah dans le contexte de la decouverte. En 2:96, « tu les trouveras les plus avides de vie ». En 2:283, « s'il trouve de quoi ». La sourate utilise « trouver » dans des contextes varies — ici la decouverte est la recompense.",
              axe4_coherence: "La racine w-j-d apparait environ 107 fois dans le Coran. Le schema « ce que vous avancez, vous le trouverez » est un motif coranique de recompense. En 73:20, « ce que vous avancez pour vos ames de bien, vous le trouverez aupres de Dieu ». Le verset 73:20 est presque identique a 2:110.",
              axe5_frequence: "Pour la mission du khalifa, trouver le bien avance aupres de Dieu est la garantie de la mission. Le khalifa sait que ses oeuvres ne sont pas perdues — elles sont conservees aupres de Dieu. Cette certitude alimente la perseverance."
            }
          }
        }
      },
      // end pos=10
      {
        word_key: "end", position: 10, sense_chosen: "aupres de",
        analysis_axes: {
          sense_chosen: "aupres de",
          concept_chosen: "Proximité/Présence",
          concepts: {
            "Proximité/Présence": {
              status: "retenu",
              senses: ["aupres de", "chez", "pres de"],
              proof_ctx: "Le mot 'inda est une preposition de la racine '-n-d. Le Lane's donne : aupres de, chez, pres de. La proximite divine est le lieu de conservation du bien. « 'Inda Allah » (aupres de Dieu) signifie que le bien avance est garde dans la presence divine — il ne se perd pas, il ne se deteriore pas. La distinction avec l'opinion (nul) est claire : le contexte est la conservation divine, pas un jugement.",
              axe1_verset: "Le mot 'inda localise le bien retrouve — aupres de Dieu. Le champ lexical (trouver, aupres de, Dieu) montre que Dieu est le gardien du bien avance. Le verset place Dieu comme intermediaire entre l'action et la recompense : le croyant avance le bien → Dieu le conserve → le croyant le retrouve.",
              axe2_voisins: "Le verset 109 utilisait 'inda pour la source de la jalousie (d'aupres d'eux-memes). Le verset 110 utilise 'inda pour le lieu de la recompense (aupres de Dieu). Le contraste est entre ce qui vient de l'homme (jalousie) et ce qui est aupres de Dieu (le bien conserve).",
              axe3_sourate: "La preposition 'inda avec Dieu est frequente dans la sourate. En 2:62, « ils auront leur recompense aupres de leur Seigneur ». En 2:112, « il aura sa recompense aupres de son Seigneur ». La sourate localise la recompense aupres de Dieu — c'est le lieu de conservation du bien.",
              axe4_coherence: "L'expression « 'inda Allah » apparait de nombreuses fois dans le Coran pour designer le lieu de la recompense et de la valeur. En 3:169, les martyrs « sont vivants aupres de leur Seigneur ». Ce qui est aupres de Dieu est permanent et inalterable.",
              axe5_frequence: "Pour la mission du khalifa, savoir que le bien est aupres de Dieu est une motivation permanente. Le khalifa ne travaille pas pour une recompense terrestre — il avance le bien vers un lieu de conservation permanent."
            }
          }
        }
      },
      // alh pos=11
      {
        word_key: "alh", position: 11, sense_chosen: "Dieu",
        analysis_axes: {
          sense_chosen: "Dieu",
          concept_chosen: "Divinité",
          concepts: {
            "Divinité": {
              status: "retenu",
              senses: ["divinite (concept)", "Dieu", "theologie", "divinite", "exclamation divine", "oui certes"],
              proof_ctx: "Le nom Allahi est le nom propre de la divinite au genitif, complement de 'inda. Dieu est le gardien du bien avance — ce que vous avancez, vous le trouverez AUPRES DE DIEU. Le nom apparait deux fois dans le verset : comme gardien du bien (tajidahu 'inda Allahi) et comme Celui qui voit (inna Allaha bi-ma ta'maluna basir). Dieu est a la fois le recepteur et l'observateur.",
              axe1_verset: "Le nom Allahi apparait deux fois dans le verset. La premiere fois comme gardien du bien (aupres de Dieu). La deuxieme fois comme observateur des oeuvres (Dieu voit ce que vous faites). Dieu est simultanement le lieu de conservation du bien et le temoin des oeuvres. Rien ne se perd et rien n'echappe.",
              axe2_voisins: "Le verset 109 montrait Dieu comme agent du commandement a venir et comme Puissant. Le verset 110 Le montre comme gardien du bien et comme observateur. Les deux versets presentent Dieu sous differentes facettes de Sa presence active.",
              axe3_sourate: "Le nom Allah structure chaque passage de la sourate. En 2:110, Dieu est le gardien et l'observateur — deux roles complementaires qui motivent l'action.",
              axe4_coherence: "Le nom Allah apparait plus de 2600 fois dans le Coran. Les deux roles de gardien et d'observateur sont complementaires — en 2:233, « sachez que Dieu voit ce que vous faites ». La vision divine est omnipresente.",
              axe5_frequence: "Pour la mission du khalifa, Dieu est le mandant, le gardien et l'observateur de la mission. Savoir que Dieu voit et conserve motive la perseverance et l'excellence."
            }
          }
        }
      },
      // eml pos=15
      {
        word_key: "eml", position: 15, sense_chosen: "agir",
        analysis_axes: {
          sense_chosen: "agir",
          concept_chosen: "Action/Oeuvre",
          concepts: {
            "Action/Oeuvre": {
              status: "retenu",
              senses: ["travailler", "agir", "oeuvre", "acte", "ouvrier"],
              proof_ctx: "Le verbe ta'maluna est un inaccompli 2MP de la racine '-m-l. Le Lane's donne : travailler, agir, produire une oeuvre. L'inaccompli exprime une action continue et repetee — ce que vous faites en permanence. Le 'amal (oeuvre) est l'acte volontaire et delibere qui produit un resultat. Le Coran distingue le 'amal (action volontaire) du fi'l (action en general). La distinction avec « gouverneur » (nul) est claire : le verbe designe l'action, pas une fonction.",
              axe1_verset: "Le verbe ta'maluna ferme le verset — Dieu voit ce que vous faites. Le champ lexical (etablir, donner, avancer, agir, voir) montre que le verset est centre sur l'action. Le verset commence par des ordres (etablissez, donnez) et se termine par la garantie que les actions sont vues. L'action est le lien entre l'ordre et la recompense.",
              axe2_voisins: "Le verset 109 montrait le souhait (passif) des jaloux. Le verset 110 ordonne l'action (active) des croyants. Le contraste est entre le souhait (velleite) et l'action (realisation). Les croyants ne souhaitent pas — ils agissent.",
              axe3_sourate: "La racine '-m-l apparait dans la sourate al-Baqarah dans le contexte des oeuvres. En 2:25, « ceux qui croient et font les bonnes oeuvres ». En 2:82, « ceux qui croient et font les bonnes oeuvres ». La sourate lie la foi aux oeuvres — la foi sans les oeuvres est incomplete.",
              axe4_coherence: "La racine '-m-l apparait environ 360 fois dans le Coran. Le schema « Dieu voit ce que vous faites » est un motif coranique recurrent — en 2:237, 2:265, 3:156. Le Coran rappelle que toutes les actions sont observees par Dieu.",
              axe5_frequence: "Pour la mission du khalifa, l'action est la substance de la mission. La mission n'est pas une contemplation — c'est une action permanente. Dieu voit chaque action, ce qui motive l'excellence dans l'oeuvre."
            }
          }
        }
      },
      // bsr pos=16
      {
        word_key: "bsr", position: 16, sense_chosen: "voir",
        analysis_axes: {
          sense_chosen: "voir",
          concept_chosen: "Vision/Perception",
          concepts: {
            "Vision/Perception": {
              status: "retenu",
              senses: ["voir", "vue", "regarder", "clairvoyance", "comprendre", "preuve visible"],
              proof_ctx: "Le mot basirun est un adjectif intensif (fa'il) au nominatif de la racine b-s-r. Le Lane's donne : celui qui voit, clairvoyant, qui percoit. L'adjectif intensif marque une vision permanente et totale — Dieu ne voit pas ponctuellement, Il voit en permanence et completement. Le basir est Celui dont la vision n'a ni angle mort ni interruption. La distinction avec « peau » (nul) est evidente : le contexte est la vision divine.",
              axe1_verset: "Le mot basirun cloture le verset en qualifiant Dieu de Voyant. Le champ lexical (Dieu, voit, ce que, vous faites) montre que la vision divine est la garantie de la justice : chaque oeuvre est vue, rien n'echappe. Le verset se termine sur cette garantie — Dieu voit tout, donc chaque bien avance sera comptabilise.",
              axe2_voisins: "Le verset 109 se terminait par « Dieu est Puissant sur toute chose ». Le verset 110 se termine par « Dieu voit ce que vous faites ». Les deux qualifications divines se completent : Dieu est Puissant (Il peut agir) et Il voit (Il sait ce qui se passe). La puissance est la capacite, la vision est la connaissance.",
              axe3_sourate: "La racine b-s-r apparait dans la sourate al-Baqarah dans le contexte de la vision. En 2:96, « Dieu est Clairvoyant ». En 2:233, « Dieu voit ce que vous faites ». La sourate utilise la vision divine comme motif de surveillance bienveillante.",
              axe4_coherence: "La racine b-s-r apparait environ 148 fois dans le Coran. Le nom al-Basir (le Clairvoyant) est un des noms de Dieu. En 67:19, « seul le Misericordieux les voit. Il est de toute chose Clairvoyant ». Le Coran affirme que la vision divine est totale et permanente.",
              axe5_frequence: "Pour la mission du khalifa, savoir que Dieu voit est a la fois un rappel et une motivation. Le khalifa agit sous le regard divin — chaque oeuvre est vue et comptee. La vision divine est la garantie que rien ne se perd."
            },
            "Corps/Anatomie": {
              status: "nul",
              senses: ["peau"],
              proof_ctx: "Le sens de peau est un sens physique de b-s-r hors sujet — le contexte est la vision divine, pas l'anatomie."
            }
          }
        }
      }
    ]
  }
};

// =====================================================
// PROCESS VERSE
// =====================================================
async function processVerse(verseNum) {
  console.log(`\n=== VERSET 2:${verseNum} ===`);
  const data = verseData[verseNum];
  if (!data) { console.log('  Pas de donnees'); return; }

  let okCount = 0, errCount = 0;

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
      console.log(`  OK VWA ${word.word_key} pos=${word.position}`);
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
    console.log(`  OK verse_analyses V${verseNum}`);
    okCount++;
  }

  console.log(`VERSET 2:${verseNum} — ${okCount} OK, ${errCount} erreurs`);
  return { okCount, errCount };
}

// =====================================================
// LOOKUP MISSING ROOTS
// =====================================================
async function lookupMissingRoots() {
  console.log('\n=== LOOKUP MISSING ROOTS ===');

  // rdd — missing from concepts JSON
  const {data:wa_rdd} = await supabase.from('word_analyses').select('id,word_key').eq('word_key','rdd').single();
  if (wa_rdd) {
    const {data:wm_rdd} = await supabase.from('word_meanings').select('concept,status,senses,description').eq('analysis_id', wa_rdd.id);
    console.log('  rdd found:', wa_rdd.id, JSON.stringify(wm_rdd));
  } else {
    // try ilike search
    const {data:results} = await supabase.from('word_analyses').select('id,word_key').ilike('word_key','%rdd%');
    console.log('  rdd ilike search:', JSON.stringify(results));
  }

  // xyr — analysis_id=557
  const {data:wa_xyr} = await supabase.from('word_analyses').select('id,word_key').eq('word_key','xyr').single();
  if (wa_xyr) {
    const {data:wm_xyr} = await supabase.from('word_meanings').select('concept,status,senses,description').eq('analysis_id', wa_xyr.id);
    console.log('  xyr found:', wa_xyr.id, JSON.stringify(wm_xyr));
  }

  // sfh — check if the correct root exists (sad-fa-ha vs sin-fa-ha)
  const {data:wa_sfh} = await supabase.from('word_analyses').select('id,word_key').eq('word_key','sfh').single();
  if (wa_sfh) {
    const {data:wm_sfh} = await supabase.from('word_meanings').select('concept,status,senses,description').eq('analysis_id', wa_sfh.id);
    console.log('  sfh found:', wa_sfh.id, JSON.stringify(wm_sfh));
  }
}

// =====================================================
// SYNC word_meanings
// =====================================================
async function syncWordMeanings() {
  console.log('\n=== SYNC word_meanings ===');

  const verseIds = [116, 117];
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
// MAIN
// =====================================================
async function main() {
  console.log('=== PIPELINE SOURATE 2 — VERSETS 109-110 ===\n');
  await lookupMissingRoots();
  await processVerse(109);
  await processVerse(110);
  await syncWordMeanings();
  console.log('\n=== PIPELINE V109-110 TERMINEE ===');
}

main().catch(e => console.error('FATAL:', e));
