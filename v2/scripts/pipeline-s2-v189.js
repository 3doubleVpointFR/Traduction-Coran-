const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// =====================================================
// PIPELINE SOURATE 2 — VERSET 189
// verse_id=196, analysis_id=554
// "Ils t'interrogent au sujet des croissants. Dis : ce sont
//  des echeances pour les gens et pour le pelerinage. La piete
//  ne consiste pas a venir aux maisons par leur dos, mais la
//  piete est de se premunir. Venez aux maisons par leurs
//  portes, et premunissez-vous envers Dieu afin que vous
//  reussissiez."
// Croissants lunaires, temps, pelerinage, piete, portes
// =====================================================

const verseData = {
  189: {
    verse_id: 196,
    analysis_id: 554,
    translation_arab: "Ils t'interrogent au sujet des croissants. Dis : ce sont des echeances pour les gens et pour le pelerinage. La piete ne consiste pas a venir aux maisons par leur dos, mais la piete est de se premunir. Venez aux maisons par leurs portes, et premunissez-vous envers Dieu afin que vous reussissiez.",
    full_translation: "Ils t'interrogent sur les nouvelles lunes. Dis : elles servent aux gens pour compter le temps et pour le pelerinage. Et ce n'est pas un acte de piete que de rentrer chez vous par l'arriere de vos maisons. Mais la piete consiste a craindre Dieu. Entrez donc dans les maisons par leurs portes. Et craignez Dieu afin que vous reussissiez !",
    translation_explanation: `§DEMARCHE§
Le verset s'ouvre par une question posee au Prophete concernant les croissants lunaires, puis la reponse divine, suivie d'une injonction sur la piete veritable. Le verbe **yas'alunaka** est un inaccompli 3MP avec pronom suffixe 2MS de la racine s-'-l. Le Lane's donne : demander, interroger, questionner, faire une requete. L'inaccompli marque une action repetee — ils t'interrogent regulierement, c'est une habitude. Le pronom suffixe -ka (toi) designe le Prophete comme destinataire des questions. La particule **'ani** (au sujet de) introduit le sujet de la question. Le nom **al-ahillati** est un pluriel defini de hilal de la racine h-l-l. Le Lane's donne : nouveau croissant de lune, premiere apparition de la lune, s'exclamer de joie a la vue de la nouvelle lune, apparaitre. Les ahilla sont les croissants lunaires qui marquent le debut de chaque mois — leur apparition est un evenement astronomique et social. L'article al- definit les croissants comme une realite connue et observee par tous. Le verbe **qul** est un imperatif 2MS de la racine q-w-l. Le Lane's donne : dire, enoncer, prononcer, declarer. L'imperatif ordonne au Prophete de transmettre la reponse divine. La forme breve et directe (qul = dis) marque l'autorite de la revelation — la reponse vient de Dieu, le Prophete la transmet. Le pronom **hiya** (elles) renvoie aux ahilla — les croissants sont le sujet de la phrase nominale qui suit. Le nom **mawaqitu** est un pluriel de miqat de la racine w-q-t. Le Lane's donne : temps fixe, echeance, moment determine, rendez-vous temporel. Les mawaqit sont des reperes temporels — les croissants marquent les mois, les saisons, les echeances des obligations religieuses et civiles. Le pluriel montre la multiplicite des temps mesures par les croissants. Le nom **li-n-nasi** est un nom defini pluriel de la racine n-w-s avec preposition li-. Le Lane's donne : gens, humanite, peuple, les etres humains. La preposition li- (pour) marque la finalite — les croissants servent AUX gens, ils sont un outil pour l'humanite. Les gens ici designent tous les etres humains sans distinction — les croissants sont un repere universel. Le nom **wa-l-hajji** est un nom defini singulier de la racine h-j-j avec conjonction wa-. Le Lane's donne : pelerinage, se rendre a un lieu sacre, argumentation, preuve. Le hajj est le pelerinage a la Maison Sacree — il est determine par le calendrier lunaire. La mention du hajj apres les gens montre que les croissants ont une double fonction : civile (pour les gens) et religieuse (pour le pelerinage). Le verbe negatif **wa-laysa** est un verbe de negation existentielle de la racine l-y-s. Le Lane's donne : ne pas etre, nier l'existence. Laysa nie l'identite entre une chose et une autre — la piete n'est PAS cela. La negation est categorique et existentielle — ce n'est pas que la chose est insuffisante, c'est qu'elle n'est pas la piete du tout. Le nom **al-birru** est un nom defini singulier de la racine b-r-r. Le Lane's donne : piete, bonte, droiture, obeissance, bienfaisance. Le birr est la piete sincere et active — l'ensemble des actes de bonte et d'obeissance qui plaisent a Dieu. L'article al- definit la piete comme un concept connu et central dans la vie religieuse. La particule **bi-an** (que/de) introduit la proposition completive qui decrit ce que la piete n'est pas. Le verbe **ta'tu** est un inaccompli 2MP subjonctif de la racine '-t-y. Le Lane's donne : venir, arriver, se presenter, se rendre a. Le subjonctif marque la subordination apres an — le verbe decrit l'action niee. Le nom **al-buyuta** est un pluriel defini de bayt de la racine b-y-t. Le Lane's donne : maison, demeure, temple, sanctuaire, lieu d'habitation. Les buyut sont les maisons — le pluriel et l'article designent les maisons en general, ou les maisons connues des interlocuteurs. Le mot bayt couvre la demeure physique et le lieu sacre (bayt Allah). La particule **min** (de/par) introduit le complement de provenance. Le nom **zuhurriha** est un pluriel de zahr avec pronom suffixe 3FP de la racine z-h-r. Le Lane's donne : dos, derriere, surface exterieure, partie arriere. Les zuhur sont les dos des maisons — l'arriere, l'acces detourne. Le pronom -ha renvoie aux maisons. Venir aux maisons par leur dos signifie entrer par l'arriere, de maniere detournee, evitant l'entree principale. La particule **wa-lakinna** (mais) introduit la rectification — apres avoir nie ce que la piete n'est pas, le verset affirme ce qu'elle est. Le nom **al-birra** est le meme mot que al-birru mais a l'accusatif — la piete, cette fois sujet de la rectification. La piete veritable est definie par opposition a la fausse piete. Le verbe **man ittaqa** est un nom relatif + accompli 3MS forme VIII de la racine w-q-y. Le Lane's donne : se premunir, se proteger, placer un bouclier entre soi et ce qu'on craint. La forme VIII (ittaqa) est reflexive intensive — se premunir soi-meme activement. Le nom relatif man (celui qui) generalise — la piete est l'acte de quiconque se premunit. Le verbe **wa-'tu** est un imperatif 2MP de la racine '-t-y. Le Lane's donne : venez, presentez-vous, rendez-vous. L'imperatif ordonne de venir aux maisons — mais cette fois par la bonne entree. Le nom **al-buyuta** est le meme que precedemment — les maisons, cette fois destination de l'acces correct. La particule **min** (par) introduit le moyen ou la voie d'acces. Le nom **abwabiha** est un pluriel de bab avec pronom suffixe 3FP de la racine b-w-b. Le Lane's donne : porte, ouverture, acces, chapitre, entree. Les abwab sont les portes des maisons — l'acces direct, frontal, correct. Le pronom -ha renvoie aux maisons. Entrer par les portes est l'oppose d'entrer par le dos — c'est l'acces droit, honnete, transparent. Le verbe **wa-ttaqu** est un imperatif 2MP forme VIII de la racine w-q-y. Le Lane's donne : premunissez-vous, protegez-vous, prenez garde. L'imperatif ordonne la taqwa comme acte concret et collectif. Le nom **Allaha** est le nom propre divin de la racine '-l-h. Le Lane's donne : Dieu, la divinite unique, l'adore a l'exclusion de tout autre. Le nom est a l'accusatif comme complement du verbe ittaqu — premunissez-vous envers DIEU. La particule **la'allakum** (afin que vous / peut-etre que vous) introduit la finalite esperee. Le verbe **tuflihuna** est un inaccompli 2MP de la racine f-l-h. Le Lane's donne : reussir, prosperer, atteindre le bonheur, labourer. La forme IV (aflaha) est causative — faire aboutir la reussite. Le Coran utilise al-falah pour la reussite ultime — le salut dans ce monde et dans l'autre. L'inaccompli marque une possibilite ouverte — la reussite n'est pas garantie mais esperee pour ceux qui se premunissent.

§JUSTIFICATION§
**ils t'interrogent** — Le sens retenu est « requete/interrogation ». Le verbe yas'alunaka est un inaccompli 3MP de s-'-l qui marque la question repetee. L'alternative « mendicite » est ecartee car le contexte est une question intellectuelle, pas une demande materielle.

**les croissants** — Le sens retenu est « apparition/croissant ». Le nom al-ahillati est le pluriel de hilal (nouveau croissant de lune). L'alternative « permission/licéité » est ecartee car celle-ci correspond a la racine h-l-l au sens de « rendre licite » (halla), tandis qu'ici la forme ahilla designe specifiquement les croissants lunaires — l'apparition de la nouvelle lune.

**dis** — Le sens retenu est « parole/enonciation ». L'imperatif qul ordonne la transmission du message divin. L'alternative « opinion » est ecartee car le Prophete ne donne pas son avis — il transmet la revelation.

**echeances** — Le sens retenu est « temps/echeance ». Le nom mawaqitu est le pluriel de miqat — un temps fixe, un rendez-vous temporel. L'alternative « lieu » est ecartee car le contexte est temporel — les croissants marquent des temps, pas des lieux.

**les gens** — Le sens retenu est « humanite/peuple ». Le nom an-nasi designe les etres humains en general. L'alternative « agitation » (sens etymologique de n-w-s) est ecartee car le contexte designe clairement les beneficiaires humains des reperes temporels.

**le pelerinage** — Le sens retenu est « pelerinage/preuve ». Le nom al-hajj designe le pelerinage a la Maison Sacree. L'alternative « argumentation » est ecartee car le contexte lie le hajj aux echeances lunaires — il s'agit du calendrier du pelerinage, pas d'un debat.

**n'est pas** — Le sens retenu est « negation/non-existence ». Le verbe laysa nie l'identite entre la piete et l'acte decrit. Aucune alternative pertinente — laysa est un verbe de negation univoque.

**la piete** — Le sens retenu est « piete/bonte ». Le nom al-birr designe la piete sincere et active. L'alternative « ble/terre » (au sens agricole) est ecartee car le contexte est ethique et religieux — la piete est un comportement moral.

**venir** — Le sens retenu est « venue/arrivee ». Le verbe ta'tu designe l'action de se rendre a un lieu. L'alternative « apporter » est ecartee car le sujet est les personnes qui viennent aux maisons, pas des objets qu'on apporte.

**les maisons** — Le sens retenu est « demeure/sanctuaire ». Le nom al-buyuta designe les maisons ou demeures. L'alternative « nuit/passer la nuit » (sens verbal de b-y-t) est ecartee car le contexte est spatial — les maisons sont des lieux physiques avec un dos et des portes.

**leur dos** — Le sens retenu est « dos/derriere ». Le nom zuhur designe la partie arriere des maisons. L'alternative « manifestation » (un autre sens de z-h-r) est ecartee car le contexte spatial (entrer par le dos vs par les portes) impose le sens de partie arriere.

**se premunir** — Le sens retenu est « protection/preservation ». Le verbe ittaqa (forme VIII de w-q-y) designe l'acte de se premunir activement. L'alternative « crainte passive » est ecartee car la forme VIII est reflexive et active — se premunir soi-meme, pas simplement avoir peur.

**venez** — Le sens retenu est le meme que « venir » (pos=12), ici a l'imperatif — un ordre direct d'entrer par la bonne voie.

**les maisons** — Meme sens que pos=13, repetition qui marque le contraste : les memes maisons, mais par la bonne entree cette fois.

**leurs portes** — Le sens retenu est « ouverture/acces ». Le nom abwab designe les portes, les acces directs. L'alternative « chapitre » (sens derive de bab) est ecartee car le contexte est spatial — les portes physiques des maisons.

**premunissez-vous** — Meme sens que pos=19, ici a l'imperatif 2MP — un ordre collectif de taqwa.

**Dieu** — Le sens retenu est « divinite ». Le nom Allah designe Dieu. Aucune alternative — le nom est univoque.

**reussir** — Le sens retenu est « reussite/prosperite ». Le verbe tuflihuna designe la reussite ultime. L'alternative « fendre/labourer » (sens premier de f-l-h) est ecartee car le contexte est eschatologique — la reussite est le salut, pas le labour.

§CRITIQUE§
Les traductions courantes rendent « al-ahilla » par « les nouvelles lunes » ou « les croissants ». Hamidullah traduit « les nouvelles lunes » ce qui est fidele. Notre traduction garde « les croissants » qui est plus proche du mot arabe hilal (le croissant specifiquement). Le passage sur les maisons et leurs dos est diversement interprete : certains exegetes y voient une reference a une pratique preislamique ou les pelerins entraient par l'arriere de leurs maisons au retour du hajj. D'autres y voient une metaphore sur l'approche directe vs detournee des affaires. Notre traduction reste littérale — « venir aux maisons par leur dos » vs « par leurs portes » — sans imposer une interpretation specifique. Le verbe « laysa al-birru » est rendu fidelement par « la piete ne consiste pas a ». Le mot « la'allakum tuflihuna » est rendu par « afin que vous reussissiez » — certains traducteurs preferent « peut-etre reussirez-vous » pour garder l'incertitude de la'alla, mais la finalite est claire dans les deux cas.`,
    segments: [
      { fr: "ils t'interrogent", pos: "verbe", phon: "yas'alunaka", arabic: "\u064a\u064e\u0633\u0652\u0640\u064e\u0640\u0654\u0644\u064f\u0648\u0646\u064e\u0643\u064e", word_key: "sal", is_particle: false, sense_retenu: "interroger", position: 1 },
      { fr: "au sujet de", phon: "'ani", arabic: "\u0639\u064e\u0646\u0650", is_particle: true, position: 2 },
      { fr: "les croissants", pos: "nom", phon: "al-ahillati", arabic: "\u0671\u0644\u0652\u0623\u064e\u0647\u0650\u0644\u0651\u064e\u0629\u0650", word_key: "hll", is_particle: false, sense_retenu: "croissant lunaire", position: 3 },
      { fr: "dis", pos: "verbe", phon: "qul", arabic: "\u0642\u064f\u0644\u0652", word_key: "qwl", is_particle: false, sense_retenu: "dire", position: 4 },
      { fr: "elles", phon: "hiya", arabic: "\u0647\u0650\u0649\u064e", is_particle: true, position: 5 },
      { fr: "des echeances", pos: "nom", phon: "mawaqitu", arabic: "\u0645\u064e\u0648\u064e\u0640\u0670\u0642\u0650\u064a\u062a\u064f", word_key: "wqt", is_particle: false, sense_retenu: "echeance temporelle", position: 6 },
      { fr: "pour les gens", pos: "nom", phon: "li-n-nasi", arabic: "\u0644\u0650\u0644\u0646\u0651\u064e\u0627\u0633\u0650", word_key: "nws", is_particle: false, sense_retenu: "les gens", position: 7 },
      { fr: "et pour le pelerinage", pos: "nom", phon: "wa-l-hajji", arabic: "\u0648\u064e\u0671\u0644\u0652\u062d\u064e\u062c\u0651\u0650", word_key: "hjj", is_particle: false, sense_retenu: "pelerinage", position: 8 },
      { fr: "et n'est pas", pos: "verbe", phon: "wa-laysa", arabic: "\u0648\u064e\u0644\u064e\u064a\u0652\u0633\u064e", word_key: "lys", is_particle: false, sense_retenu: "negation", position: 9 },
      { fr: "la piete", pos: "nom", phon: "al-birru", arabic: "\u0671\u0644\u0652\u0628\u0650\u0631\u0651\u064f", word_key: "brr", is_particle: false, sense_retenu: "piete", position: 10 },
      { fr: "que", phon: "bi-an", arabic: "\u0628\u0650\u0623\u064e\u0646", is_particle: true, position: 11 },
      { fr: "vous veniez", pos: "verbe", phon: "ta'tu", arabic: "\u062a\u064e\u0623\u0652\u062a\u064f\u0648\u0627\u06df", word_key: "aty", is_particle: false, sense_retenu: "venir", position: 12 },
      { fr: "aux maisons", pos: "nom", phon: "al-buyuta", arabic: "\u0671\u0644\u0652\u0628\u064f\u064a\u064f\u0648\u062a\u064e", word_key: "byt", is_particle: false, sense_retenu: "maisons", position: 13 },
      { fr: "par", phon: "min", arabic: "\u0645\u0650\u0646", is_particle: true, position: 14 },
      { fr: "leur dos", pos: "nom", phon: "zuhuri-ha", arabic: "\u0638\u064f\u0647\u064f\u0648\u0631\u0650\u0647\u064e\u0627", word_key: "zhr", is_particle: false, sense_retenu: "dos/derriere", position: 15 },
      { fr: "mais", phon: "wa-lakinna", arabic: "\u0648\u064e\u0644\u064e\u0640\u0670\u0643\u0650\u0646\u0651\u064e", is_particle: true, position: 16 },
      { fr: "la piete", pos: "nom", phon: "al-birra", arabic: "\u0671\u0644\u0652\u0628\u0650\u0631\u0651\u064e", word_key: "brr", is_particle: false, sense_retenu: "piete", position: 17 },
      { fr: "est celui qui", phon: "mani", arabic: "\u0645\u064e\u0646\u0650", is_particle: true, position: 18 },
      { fr: "se premunit", pos: "verbe", phon: "ittaqa", arabic: "\u0671\u062a\u0651\u064e\u0642\u064e\u0649\u0670", word_key: "wqy", is_particle: false, sense_retenu: "se premunir", position: 19 },
      { fr: "et venez", pos: "verbe", phon: "wa-'tu", arabic: "\u0648\u064e\u0623\u0652\u062a\u064f\u0648\u0627\u06df", word_key: "aty", is_particle: false, sense_retenu: "venir", position: 20 },
      { fr: "aux maisons", pos: "nom", phon: "al-buyuta", arabic: "\u0671\u0644\u0652\u0628\u064f\u064a\u064f\u0648\u062a\u064e", word_key: "byt", is_particle: false, sense_retenu: "maisons", position: 21 },
      { fr: "par", phon: "min", arabic: "\u0645\u0650\u0646\u0652", is_particle: true, position: 22 },
      { fr: "leurs portes", pos: "nom", phon: "abwabi-ha", arabic: "\u0623\u064e\u0628\u0652\u0648\u064e\u0640\u0670\u0628\u0650\u0647\u064e\u0627", word_key: "bwb", is_particle: false, sense_retenu: "portes", position: 23 },
      { fr: "et premunissez-vous envers", pos: "verbe", phon: "wa-ttaqu", arabic: "\u0648\u064e\u0671\u062a\u0651\u064e\u0642\u064f\u0648\u0627\u06df", word_key: "wqy", is_particle: false, sense_retenu: "se premunir", position: 24 },
      { fr: "Dieu", pos: "nom", phon: "Allaha", arabic: "\u0671\u0644\u0644\u0651\u064e\u0647\u064e", word_key: "alh", is_particle: false, sense_retenu: "Dieu", position: 25 },
      { fr: "afin que vous", phon: "la'allakum", arabic: "\u0644\u064e\u0639\u064e\u0644\u0651\u064e\u0643\u064f\u0645\u0652", is_particle: true, position: 26 },
      { fr: "reussissiez", pos: "verbe", phon: "tuflihuna", arabic: "\u062a\u064f\u0641\u0652\u0644\u0650\u062d\u064f\u0648\u0646\u064e", word_key: "flh", is_particle: false, sense_retenu: "reussir", position: 27 }
    ],
    words: [
      // sal pos=1
      {
        word_key: "sal", position: 1, sense_chosen: "interroger",
        analysis_axes: {
          sense_chosen: "interroger",
          concept_chosen: "Requ\u00eate/Interrogation",
          concepts: {
            "Requ\u00eate/Interrogation": {
              status: "retenu",
              senses: ["demander", "interroger", "questionner", "faire une requ\u00eate", "solliciter une r\u00e9ponse"],
              proof_ctx: "Le verbe yas'alunaka est un inaccompli 3MP avec pronom suffixe 2MS de la racine s-'-l. Le Lane's donne : demander, interroger, questionner, solliciter, faire une requete. La question est un acte linguistique par lequel on cherche a obtenir une information qu'on ne possede pas. L'inaccompli marque la repetition — ils t'interrogent de maniere habituelle, c'est une pratique recurrente. Le pronom suffixe -ka fait du Prophete le receptacle des questions — c'est lui qu'on interroge parce qu'il est le lien avec la revelation. La forme I est simple et directe — elle designe la question pure, sans connotation de mendicite ou d'insistance excessive.",
              axe1_verset: "Le verbe yas'alunaka ouvre le verset en posant le cadre dialogique : les gens posent une question au Prophete. Le champ lexical (dis, echeances, gens, pelerinage, piete, premunir) montre que la question des croissants est le point de depart d'un enseignement plus large sur la piete. La question porte sur un phenomene astronomique (les croissants) mais la reponse depasse l'astronomie pour toucher a la piete et au comportement. L'ouverture par la question cree un mouvement pedagogique : question → reponse factuelle → enseignement moral. Le verbe installe le Prophete comme mediateur entre les questions humaines et les reponses divines.",
              axe2_voisins: "Le verset 2:186 utilisait « quand Mes serviteurs t'interrogent a Mon sujet (sa'alaka) » — les serviteurs interrogent le Prophete sur Dieu. Le verset 2:189 utilise la meme forme « yas'alunaka » mais pour les croissants. Le verset 2:215 utilisera « yas'alunaka madha yunfiquna » (ils t'interrogent sur ce qu'ils depensent). La sourate al-Baqarah contient une serie de questions adressees au Prophete (2:186, 2:189, 2:215, 2:217, 2:219, 2:220, 2:222) qui structurent la revelation comme un dialogue permanent entre la communaute et Dieu via le Prophete.",
              axe3_sourate: "La racine s-'-l apparait plusieurs fois dans la sourate al-Baqarah sous la forme « yas'alunaka ». Chaque occurrence introduit un theme different : Dieu (2:186), les croissants (2:189), la depense (2:215), le combat (2:217), le vin et le jeu (2:219), les orphelins (2:220), les menstrues (2:222). La sourate construit ainsi un catechisme — un ensemble de questions-reponses qui couvre les aspects de la vie du croyant. La question sur les croissants s'inscrit dans cette pedagogie dialogique.",
              axe4_coherence: "La racine s-'-l apparait environ 129 fois dans le Coran. La formule « yas'alunaka » apparait dans une dizaine de versets, toujours pour introduire une question de la communaute au Prophete. En 5:4, « ils t'interrogent sur ce qui leur est permis ». En 7:187, « ils t'interrogent sur l'Heure ». En 17:85, « ils t'interrogent sur l'esprit ». Le Coran fait de la question un mode d'apprentissage — la communaute apprend en interrogeant, et Dieu repond a travers le Prophete. La question est un droit de la communaute et la reponse est une obligation divine.",
              axe5_frequence: "Pour la mission du khalifa, la question est un outil de connaissance. Le khalifa ne se contente pas de ce qu'il sait — il interroge, il cherche, il demande. La formule « yas'alunaka » montre que poser des questions est un acte de piete, pas un signe d'ignorance. Le khalifa qui interroge les sources de la connaissance (le Livre, les savants, la nature) accomplit sa mission de comprendre l'ordre divin. La curiosite intellectuelle est un devoir du khalifa — elle le preserve de l'ignorance qui mene a la corruption."
            }
          }
        }
      },
      // hll pos=3
      {
        word_key: "hll", position: 3, sense_chosen: "croissant lunaire",
        analysis_axes: {
          sense_chosen: "croissant lunaire",
          concept_chosen: "Apparition/Croissant",
          concepts: {
            "Apparition/Croissant": {
              status: "retenu",
              senses: ["appara\u00eetre", "se montrer", "nouveau croissant de lune", "premiere lueur lunaire", "d\u00e9but du mois"],
              proof_ctx: "Le nom al-ahillati est un pluriel defini de hilal de la racine h-l-l. Le Lane's donne : nouveau croissant de lune, la premiere apparition de la lune apres la conjonction, la lune dans ses deux ou trois premieres nuits. Le hilal est specifiquement le fin croissant visible a l'oeil nu apres la nouvelle lune — c'est un phenomene astronomique observable qui marque le debut du mois lunaire. La racine h-l-l porte aussi les sens de s'exclamer de joie, acclamer, et de paraitre/apparaitre. Le hilal est ce qui apparait — la lune se montre, elle se revele apres une periode d'obscurite. L'article al- definit les croissants comme une realite connue et partagee par tous les observateurs du ciel.",
              axe1_verset: "Le mot al-ahillati est le sujet de la question — c'est a propos des croissants que les gens interrogent le Prophete. Le champ lexical (echeances, gens, pelerinage) montre que les croissants sont consideres comme des reperes temporels. La reponse divine ne decrit pas l'astronomie des croissants mais leur utilite : ce sont des mawaqit (echeances). Le verset passe du phenomene naturel (les croissants) a sa fonction sociale (le temps) puis a son usage religieux (le pelerinage). Le pluriel ahilla montre qu'il s'agit de tous les croissants de l'annee — chaque mois lunaire commence par un hilal.",
              axe2_voisins: "Le verset 2:185 mentionnait « le mois de Ramadan durant lequel le Coran fut revele » — un mois determine par le croissant lunaire. Le verset 2:189 explique precisement le role des croissants : ils sont les marqueurs temporels qui determinent les mois, y compris le Ramadan. La sequence montre la coherence : apres avoir prescrit le jeune du Ramadan (2:183-187), le Coran explique le systeme calendaire lunaire qui determine quand ce jeune commence et finit. Les croissants sont le mecanisme qui rend operationnelles les prescriptions temporelles.",
              axe3_sourate: "La racine h-l-l apparait dans la sourate al-Baqarah principalement en 2:189. Les autres occurrences de la racine dans la sourate (ahalla, uhilla) concernent le sens de « rendre licite » ou « invoquer un nom lors de l'immolation » (2:168, 2:173). Le pluriel ahilla (croissants) est un usage distinct qui se rapporte a l'apparition de la lune. La sourate utilise la meme racine pour deux sens tres differents — la licéité et l'apparition lunaire — montrant la richesse polysemique des racines arabes.",
              axe4_coherence: "La racine h-l-l au sens de croissant lunaire apparait specifiquement en 2:189. Le Coran utilise d'autres termes pour les phenomenes lunaires : al-qamar (la lune comme astre, environ 27 occurrences), al-qamar dans les serments (54:1, 74:32, 84:18). Le hilal est le seul terme qui designe specifiquement le croissant, la premiere apparition — pas la lune pleine ou la lune en general. Le Coran fait du hilal un repere temporel pratique, tandis que le qamar est un signe cosmique de la puissance divine.",
              axe5_frequence: "Pour la mission du khalifa, les croissants lunaires sont un outil de mesure du temps confie a l'humanite. Le khalifa organise sa vie selon des reperes temporels naturels — les croissants marquent les mois, les saisons, les echeances des obligations. Le khalifa n'invente pas le temps — il le lit dans les signes celestes que Dieu a places dans le ciel. L'observation du croissant est un acte de soumission a l'ordre cosmique : le khalifa ajuste son calendrier sur le rythme que Dieu a inscrit dans la creation."
            },
            "Acclamation/Joie": {
              status: "probable",
              senses: ["s'exclamer de joie", "acclamer", "pousser des cris a l'apparition de la lune", "jubiler"],
              proof_ctx: "Le Lane's mentionne que la racine h-l-l porte le sens de s'exclamer, acclamer, pousser des cris de joie — notamment a l'apparition de la nouvelle lune. Les Arabes acclamaient le nouveau croissant par des cris (ahalla) quand ils le voyaient. Mais le contexte du verset est informatif et legislatif — les croissants sont presentes comme des echeances temporelles (mawaqit), pas comme des occasions de joie. L'acclamation est une reaction humaine au phenomene, tandis que l'echeance est la fonction objective du croissant. Le verset retient la fonction temporelle, pas l'emotion associee."
            }
          }
        }
      },
      // qwl pos=4
      {
        word_key: "qwl", position: 4, sense_chosen: "dire",
        analysis_axes: {
          sense_chosen: "dire",
          concept_chosen: "Parole/\u00c9nonciation",
          concepts: {
            "Parole/\u00c9nonciation": {
              status: "retenu",
              senses: ["dire", "\u00e9noncer", "prononcer", "d\u00e9clarer", "transmettre un message"],
              proof_ctx: "Le verbe qul est un imperatif 2MS de la racine q-w-l. Le Lane's donne : dire, enoncer, prononcer, declarer, exprimer par la parole. L'imperatif qul est adresse au Prophete — il lui ordonne de transmettre la reponse divine. La forme breve et directe (une seule syllabe) marque l'autorite et l'urgence du message. Le qul coranique est un acte de communication tripartite : Dieu parle → le Prophete transmet → la communaute recoit. Le verbe ne designe pas une opinion personnelle mais une enonciation authoritative — ce qui est dit apres qul a la force d'un decret divin.",
              axe1_verset: "Le verbe qul est la charniere entre la question (yas'alunaka) et la reponse (hiya mawaqitu). Le champ lexical (interroger, croissants, echeances) montre que qul introduit la reponse divine a une question humaine. Le Prophete n'elabore pas — il dit ce que Dieu lui ordonne de dire. La brievete de qul contraste avec la longueur de la reponse qui suit, montrant que l'autorite du message ne depend pas de l'eloquence mais de sa source divine. L'imperatif installe un devoir de transmission — le Prophete ne peut pas garder la reponse pour lui.",
              axe2_voisins: "Le verset 2:186 contenait deja la formule « fa-inni qaribun » (Je suis proche) — Dieu repond directement. Le verset 2:189 utilise « qul » — Dieu ordonne au Prophete de repondre. La difference est significative : en 2:186, Dieu parle a la premiere personne ; en 2:189, Il delegue la parole au Prophete. Les deux modes coexistent dans la sourate — la reponse directe de Dieu et la reponse mediee par le Prophete.",
              axe3_sourate: "La racine q-w-l est la plus frequente dans la sourate al-Baqarah. Le verbe qul apparait en 2:80, 2:91, 2:111, 2:135, 2:136, 2:142, 2:189, 2:215, 2:217, 2:219, 2:220, 2:222 entre autres. Chaque qul introduit une reponse divine a une question ou a une objection. La sourate est structuree comme un dialogue — les questions viennent des hommes et les reponses viennent de Dieu via le Prophete. Le qul est le marqueur de cette mediation prophetique.",
              axe4_coherence: "La racine q-w-l apparait environ 1722 fois dans le Coran — c'est la racine la plus frequente. L'imperatif qul apparait dans plus de 300 versets. En 112:1, « Qul huwa Allahu ahad » (Dis : Il est Dieu, Un). En 109:1, « Qul ya ayyuha al-kafirun » (Dis : o vous les denegateurs). Le qul est le mode par excellence de la revelation — Dieu ordonne au Prophete de dire, et ce qui est dit devient parole revelee. Le Coran est fondamentalement un qul — un « dis » divin transmis par le Prophete.",
              axe5_frequence: "Pour la mission du khalifa, la parole est un outil de la mission. Le khalifa transmet la verite — il dit ce qui doit etre dit, sans deformation ni omission. Le qul prophetique est le modele de la parole du khalifa : une parole qui vient de la connaissance, pas de l'opinion personnelle. Le khalifa qui parle avec verite et autorite accomplit sa mission de transmettre l'ordre divin. La parole vraie est un bouclier contre la corruption — celui qui dit la verite empeche le mensonge de s'installer."
            }
          }
        }
      },
      // wqt pos=6
      {
        word_key: "wqt", position: 6, sense_chosen: "echeance temporelle",
        analysis_axes: {
          sense_chosen: "echeance temporelle",
          concept_chosen: "Temps/\u00c9ch\u00e9ance",
          concepts: {
            "Temps/\u00c9ch\u00e9ance": {
              status: "retenu",
              senses: ["temps fixe", "\u00e9ch\u00e9ance", "moment d\u00e9termin\u00e9", "rendez-vous temporel", "calendrier"],
              proof_ctx: "Le nom mawaqitu est un pluriel de miqat de la racine w-q-t. Le Lane's donne : un temps fixe, une echeance, un rendez-vous temporel determine, un moment precise pour l'accomplissement d'une action. Le miqat est un point dans le temps marque pour un evenement specifique — il est a la fois un repere et une limite. Le pluriel mawaqit montre la multiplicite des echeances : chaque mois a son croissant, chaque obligation a son temps. La racine w-q-t porte l'idee de determination temporelle — fixer un moment, le distinguer du flux continu du temps. Le miqat transforme le temps indifferent en temps signifiant.",
              axe1_verset: "Le mot mawaqitu est le coeur de la reponse divine : les croissants sont des echeances. Le champ lexical (croissants, gens, pelerinage) montre que les echeances sont a la fois civiles et religieuses. Les croissants ne sont pas decrits comme des phenomenes astronomiques a contempler mais comme des outils pratiques de mesure du temps. Le verset repond a la question en donnant la fonction des croissants — pas leur nature physique. La reponse est pragmatique : les croissants servent a compter le temps et a fixer les dates du pelerinage.",
              axe2_voisins: "Le verset 2:185 mentionnait « quiconque parmi vous est temoin du mois, qu'il le jeune » — le mois est determine par le croissant lunaire. Le verset 2:187 fixait les limites temporelles du jeune quotidien (« jusqu'a ce que se distingue le fil blanc du fil noir de l'aube »). Le verset 2:189 explique le mecanisme general : les croissants sont les echeances qui structurent le calendrier. La sequence montre un mouvement du particulier (le jeune du Ramadan) au general (le systeme calendaire lunaire).",
              axe3_sourate: "La racine w-q-t apparait dans la sourate al-Baqarah en 2:189 pour les echeances lunaires. La sourate est riche en references temporelles : le mois de Ramadan (2:185), les jours comptes (2:184), le pelerinage dans des mois connus (2:197). La notion de temps fixe (miqat) est le cadre dans lequel s'inscrivent toutes les obligations cultuelles. La sourate construit un calendrier religieux fonde sur les croissants lunaires.",
              axe4_coherence: "La racine w-q-t apparait environ 13 fois dans le Coran. En 7:142, « Nous avons fixe pour Moise trente nuits (wa-waqatna) ». En 15:38, « jusqu'au jour du temps fixe (al-waqt al-ma'lum) ». En 56:50, « rassembles pour le rendez-vous d'un jour fixe (miqat yawmin ma'lum) ». Le Coran utilise la racine w-q-t pour les rendez-vous divins — les moments fixes dans le calendrier cosmique ou chaque chose arrive a son heure. Le temps coranique n'est pas aleatoire — il est structure, fixe, determine par Dieu.",
              axe5_frequence: "Pour la mission du khalifa, le temps est un cadre de la mission. Le khalifa vit dans un temps structure par des echeances — les mois lunaires, les prieres, le jeune, le pelerinage. Le miqat transforme le temps en responsabilite : chaque echeance est un rendez-vous avec Dieu que le khalifa ne peut pas manquer. Le khalifa qui respecte les echeances divines vit dans l'ordre ; celui qui les neglige vit dans le desordre. Les croissants rappellent au khalifa que le temps n'est pas le sien — il appartient a Dieu qui l'a structure."
            }
          }
        }
      },
      // nws pos=7
      {
        word_key: "nws", position: 7, sense_chosen: "les gens",
        analysis_axes: {
          sense_chosen: "les gens",
          concept_chosen: "Humanit\u00e9/Peuple",
          concepts: {
            "Humanit\u00e9/Peuple": {
              status: "retenu",
              senses: ["gens", "humanit\u00e9", "peuple", "\u00eatres humains", "les hommes en g\u00e9n\u00e9ral"],
              proof_ctx: "Le nom an-nasi est un nom defini pluriel de la racine n-w-s (ou n-'-s selon certaines analyses). Le Lane's donne : gens, humanite, peuple, les etres humains en general, l'ensemble des personnes. Le mot an-nas est un collectif qui designe l'humanite sans distinction de foi, de race ou de statut. L'article al- (an- par assimilation) definit les gens comme une categorie connue et universelle. La preposition li- (pour) marque la finalite — les croissants sont POUR les gens, ils sont au service de l'humanite.",
              axe1_verset: "Le mot li-n-nasi designe les beneficiaires des echeances lunaires. Le champ lexical (croissants, echeances, pelerinage) montre que les gens sont les utilisateurs du systeme calendaire. Les croissants ne servent pas les anges ni les astres — ils servent les gens. La mention universelle (an-nas = les gens en general) montre que le calendrier lunaire est un bienfait universel, pas un privilege reserve aux croyants. La preposition li- fait des gens la finalite du systeme — Dieu a cree les croissants POUR les gens.",
              axe2_voisins: "Le verset 2:185 mentionnait le Coran comme « une guidance pour les gens (hudan li-n-nas) ». Le verset 2:189 mentionne les croissants comme « des echeances pour les gens (mawaqitu li-n-nas) ». La structure parallele montre que Dieu fournit aux gens a la fois une guidance spirituelle (le Coran) et des outils pratiques (les croissants). Les deux sont au service de l'humanite — le Coran guide l'esprit et les croissants structurent le temps.",
              axe3_sourate: "La racine n-w-s (an-nas) est omnipresente dans la sourate al-Baqarah. En 2:8, « parmi les gens il y a ceux qui disent ». En 2:13, « croyez comme les gens ont cru ». En 2:21, « o les gens, adorez votre Seigneur ». La sourate s'adresse regulierement aux gens comme categorie universelle — l'humanite dans son ensemble est interpellee, guidee, avertie. Le verset 2:189 s'inscrit dans cette adresse universelle.",
              axe4_coherence: "La racine n-w-s (an-nas) apparait environ 241 fois dans le Coran. Le mot an-nas est le terme le plus frequent pour designer l'humanite. En 49:13, « o les gens, Nous vous avons crees d'un male et d'une femelle et Nous avons fait de vous des peuples ». En 114:1-6, la sourate entiere s'appelle « an-Nas » (les gens). Le Coran fait de l'humanite le destinataire premier de la revelation et des signes divins — les croissants comme le Coran sont pour les gens.",
              axe5_frequence: "Pour la mission du khalifa, les gens sont l'objet de la mission. Le khalifa est place sur terre pour servir l'humanite — pas pour la dominer ou l'exploiter. Les croissants sont donnes aux gens comme un outil de vie en societe — organiser le temps, fixer les rendez-vous, planifier les activites. Le khalifa qui sert les gens en organisant leur vie sociale selon les reperes divins accomplit sa mission. L'humanite est a la fois le beneficiaire et le terrain d'exercice de la mission du khalifa."
            }
          }
        }
      },
      // hjj pos=8
      {
        word_key: "hjj", position: 8, sense_chosen: "pelerinage",
        analysis_axes: {
          sense_chosen: "pelerinage",
          concept_chosen: "P\u00e8lerinage/Preuve",
          concepts: {
            "P\u00e8lerinage/Preuve": {
              status: "retenu",
              senses: ["p\u00e8lerinage", "se rendre a un lieu sacr\u00e9", "argumentation", "preuve", "d\u00e9monstration"],
              proof_ctx: "Le nom al-hajji est un nom defini singulier de la racine h-j-j. Le Lane's donne : pelerinage, se rendre a un lieu sacre avec l'intention de le visiter, argumentation, preuve, demonstration. Le hajj est le grand pelerinage a la Maison Sacree de La Mecque — un des cinq piliers de l'islam. La racine porte aussi le sens d'argumentation et de preuve — l'idee de se diriger vers un but, de tendre vers une destination avec intention. Le hajj comme pelerinage est un acte de deplacement sacre : on quitte son lieu pour se rendre au lieu de Dieu. L'article al- definit le pelerinage comme l'institution connue.",
              axe1_verset: "Le mot wa-l-hajji complete la reponse sur les echeances : les croissants sont des echeances pour les gens ET pour le pelerinage. Le champ lexical (echeances, gens) montre que le pelerinage est l'usage religieux specifique du calendrier lunaire. Le pelerinage a lieu pendant des mois determines par les croissants (les mois du hajj : Shawwal, Dhu al-Qi'da, Dhu al-Hijja). La mention du hajj apres les gens distingue deux fonctions : la fonction civile (pour les gens) et la fonction rituelle (pour le pelerinage). Le hajj est le sommet des echeances religieuses lunaires.",
              axe2_voisins: "Le verset 2:158 mentionnait la marche entre Safa et Marwa — un rite du pelerinage. Le verset 2:189 mentionne le pelerinage comme echeance temporelle. Le verset 2:196 donnera les regles detaillees du hajj. Le verset 2:197 precisera que « le pelerinage a lieu en des mois connus ». La sourate construit progressivement la legislation du pelerinage : le rite (2:158), le calendrier (2:189), les regles (2:196-203). Le verset 2:189 est la charniere qui relie le systeme calendaire au pelerinage.",
              axe3_sourate: "La racine h-j-j apparait dans la sourate al-Baqarah en 2:76 (hujja = argument), 2:150 (hujja = argument), 2:189 (hajj = pelerinage), 2:196-197 (hajj = pelerinage, regles). La sourate utilise la racine dans ses deux sens majeurs : l'argumentation (les gens du Livre et leurs arguments) et le pelerinage (l'institution rituelle). Les deux sens partagent l'idee de se diriger vers un but — l'argument vise a prouver, le pelerinage vise a atteindre le lieu sacre.",
              axe4_coherence: "La racine h-j-j apparait environ 33 fois dans le Coran. En 3:97, « le pelerinage a la Maison est un devoir envers Dieu pour quiconque en a les moyens ». En 22:27, « appelle les gens au pelerinage — ils viendront a toi a pied et sur toute monture ». Le Coran fait du hajj un pilier de la vie religieuse — un rendez-vous annuel de l'humanite croyante avec Dieu a la Maison Sacree. Le pelerinage est l'echeance supreme du calendrier lunaire — le moment ou le temps, l'espace et la foi convergent.",
              axe5_frequence: "Pour la mission du khalifa, le pelerinage est l'acte communautaire par excellence de la mission. Le khalifa ne vit pas isole — il se deplace, il se rend au lieu de Dieu, il rejoint la communaute des croyants. Le hajj est une reunion universelle — les khalifas de toute la terre convergent vers un seul lieu pour temoigner de leur soumission. Le pelerinage rappelle au khalifa que sa mission n'est pas individuelle — elle est collective, elle exige le deplacement, la rencontre, la convergence vers Dieu."
            }
          }
        }
      },
      // lys pos=9
      {
        word_key: "lys", position: 9, sense_chosen: "negation",
        analysis_axes: {
          sense_chosen: "negation",
          concept_chosen: "N\u00e9gation/Non-existence",
          concepts: {
            "N\u00e9gation/Non-existence": {
              status: "retenu",
              senses: ["ne pas \u00eatre", "nier l'existence", "n\u00e9gation cat\u00e9gorique", "refus d'identit\u00e9"],
              proof_ctx: "Le verbe wa-laysa est un verbe de negation existentielle de la racine l-y-s. Le Lane's donne : ne pas etre, nier l'existence, negation categorique. Laysa nie l'identite entre le sujet et le predicat — il affirme que A n'est PAS B. La negation est categorique et existentielle : ce n'est pas que la chose est imparfaite ou insuffisante, c'est qu'elle n'est pas ce qu'on pretend. Laysa se distingue de la (negation de l'action) et de ma (negation du fait) en ce qu'il nie l'etre meme — l'essence, pas l'accident. La conjonction wa- lie cette negation a ce qui precede, creant une transition du factuel (les echeances) au moral (la piete).",
              axe1_verset: "Le verbe laysa marque le tournant du verset — apres la reponse factuelle sur les croissants, le verset passe a un enseignement moral sur la piete. Le champ lexical (piete, maisons, dos, portes, premunir) montre que la negation ouvre une section ethique. Laysa nie une fausse conception de la piete : la piete n'est PAS d'entrer dans les maisons par le dos. La negation est corrective — elle corrige une erreur de pratique en niant son identite avec la piete. Le verset ne dit pas que la pratique est mauvaise — il dit qu'elle n'est pas la piete.",
              axe2_voisins: "Le verset 2:177 utilisait « laysa al-birra an tuwallu wujuhakum » (la piete ne consiste pas a tourner vos visages). Le verset 2:189 utilise « laysa al-birru bi-an ta'tu al-buyuta min zuhuri-ha » (la piete ne consiste pas a venir aux maisons par leur dos). La structure est identique : laysa + al-birr + negation d'une pratique. La sourate repete la meme formule pour corriger les fausses conceptions de la piete. Le verset 2:177 corrigeait la piete rituelle superficielle ; le verset 2:189 corrige une pratique superstitieuse.",
              axe3_sourate: "La racine l-y-s apparait plusieurs fois dans la sourate al-Baqarah. En 2:177, laysa nie la fausse piete. En 2:189, laysa nie une autre fausse piete. En 2:198, laysa nie le peche du commerce pendant le pelerinage. La sourate utilise laysa comme un outil de correction : chaque occurrence detruit une idee fausse pour la remplacer par la verite. La negation laysa est pedagogique — elle deconstruit pour reconstruire.",
              axe4_coherence: "La racine l-y-s apparait environ 89 fois dans le Coran. En 2:177, la formule « laysa al-birra » corrige la piete. En 3:128, « laysa laka min al-amri shay'un » (tu n'as rien a voir dans l'affaire). En 42:11, « laysa ka-mithlihi shay'un » (rien ne Lui est semblable). Le Coran utilise laysa pour poser des negations fondamentales — nier les fausses identites, les fausses ressemblances, les fausses croyances. Laysa est un scalpel qui separe le vrai du faux.",
              axe5_frequence: "Pour la mission du khalifa, la negation est un outil de discernement. Le khalifa doit savoir ce que les choses ne sont PAS autant que ce qu'elles sont. Laysa enseigne au khalifa a rejeter les apparences trompeuses — la piete n'est pas ce qu'on croit, le bien n'est pas ce qu'on voit. La capacite de nier le faux est aussi importante que la capacite d'affirmer le vrai. Le khalifa qui ne sait pas dire « ce n'est pas » est incapable de distinguer la piete veritable de la superstition."
            }
          }
        }
      },
      // brr pos=10
      {
        word_key: "brr", position: 10, sense_chosen: "piete",
        analysis_axes: {
          sense_chosen: "piete",
          concept_chosen: "Pi\u00e9t\u00e9/Bont\u00e9",
          concepts: {
            "Pi\u00e9t\u00e9/Bont\u00e9": {
              status: "retenu",
              senses: ["pi\u00e9t\u00e9", "bont\u00e9", "droiture", "ob\u00e9issance", "bienfaisance", "vertu"],
              proof_ctx: "Le nom al-birru est un nom defini singulier de la racine b-r-r. Le Lane's donne : piete, bonte, droiture, obeissance, bienfaisance, vertu, l'ensemble des actes de bonte et d'obeissance qui plaisent a Dieu. Le birr est un concept englobant qui couvre la piete interieure (la foi) et la piete exterieure (les actes). L'article al- definit la piete comme un concept connu et central — LA piete, pas une piete parmi d'autres. Le birr se distingue de la taqwa (premunition) en ce qu'il est plus large — la taqwa est une composante du birr, pas l'inverse. Le birr est la totalite de la vie pieuse.",
              axe1_verset: "Le mot al-birru est le concept central de la seconde partie du verset. Le champ lexical (negation, maisons, dos, mais, premunir, portes) montre que le verset definit la piete par opposition et par affirmation. La piete n'est PAS de venir par le dos → la piete EST de se premunir. Le verset deconstruit une fausse piete (l'acte superstitieux) pour la reconstruire sur une base correcte (la taqwa). Le mot apparait deux fois dans le verset (al-birru et al-birra) pour marquer le contraste entre la fausse et la vraie piete.",
              axe2_voisins: "Le verset 2:177 definissait longuement la piete (al-birr) : ce n'est pas tourner le visage vers l'Est ou l'Ouest, mais croire en Dieu, au Jour dernier, aux anges, au Livre, aux prophetes, donner le bien, prier, jeuner, tenir ses engagements, etre patient. Le verset 2:189 continue cette definition par un nouvel exemple negatif : la piete n'est pas d'entrer par le dos des maisons. Les deux versets forment un diptyque sur la vraie piete — 2:177 est la definition positive exhaustive, 2:189 est une correction ponctuelle d'une pratique erronee.",
              axe3_sourate: "La racine b-r-r apparait dans la sourate al-Baqarah en 2:44, 2:177, 2:189, 2:224. Chaque occurrence traite de la piete — son contenu, sa definition, ses conditions. La sourate fait du birr un theme structurant : elle ne cesse de revenir sur ce que la piete est et n'est pas, comme si la communaute avait besoin d'etre constamment redirigee vers la piete veritable. Le verset 2:189 est une nouvelle iteration de cet enseignement.",
              axe4_coherence: "La racine b-r-r apparait environ 32 fois dans le Coran. En 2:177, la definition la plus complete du birr. En 3:92, « vous n'atteindrez la piete (al-birr) que si vous depensez de ce que vous aimez ». En 58:9, la piete et la taqwa sont liees comme objectifs conjoints. Le Coran fait du birr le standard supreme de la vie religieuse — tout acte est mesure a l'aune de la piete. Le birr n'est pas un rituel specifique mais un mode de vie complet.",
              axe5_frequence: "Pour la mission du khalifa, la piete est le moteur de la mission. Le khalifa n'agit pas par interet personnel mais par piete — chaque acte de bonte, de justice, de droiture est un acte de birr. Le verset enseigne au khalifa que la piete ne reside pas dans les formes exterieures (entrer par le dos des maisons) mais dans la substance interieure (se premunir envers Dieu). Le khalifa pieux est celui qui va droit au but — par la porte, pas par le dos — dans tous les domaines de sa mission."
            }
          }
        }
      },
      // aty pos=12
      {
        word_key: "aty", position: 12, sense_chosen: "venir",
        analysis_axes: {
          sense_chosen: "venir",
          concept_chosen: "Venue/Arriv\u00e9e",
          concepts: {
            "Venue/Arriv\u00e9e": {
              status: "retenu",
              senses: ["venir", "arriver", "se pr\u00e9senter", "se rendre \u00e0", "approcher"],
              proof_ctx: "Le verbe ta'tu est un inaccompli 2MP subjonctif de la racine '-t-y. Le Lane's donne : venir, arriver, se presenter, se rendre a un lieu, approcher. Le verbe designe un mouvement vers un lieu — le sujet se deplace pour atteindre une destination. Le subjonctif est commande par an — la structure « bi-an ta'tu » (que vous veniez) est une proposition completive subordonnee. La venue est un acte volontaire et directionnel — on choisit d'aller quelque part et on choisit par ou l'on passe. Cette notion de choix est centrale dans le verset : on peut venir par le dos ou par la porte.",
              axe1_verset: "Le verbe ta'tu est l'action niee — la piete n'est pas QUE VOUS VENIEZ aux maisons par leur dos. Le champ lexical (maisons, dos, portes) montre que le verbe decrit un deplacement physique vers un lieu. Le verset nie que ce deplacement specifique (par le dos) soit un acte de piete. Le verbe apparait deux fois dans le verset : ta'tu (venir par le dos, nie) et wa-'tu (venir par les portes, ordonne). La repetition marque le contraste : meme action (venir) mais deux voies differentes (dos vs portes) avec deux jugements differents (nie vs ordonne).",
              axe2_voisins: "Le verset 2:188 mentionnait « venir avec cela (les biens) devant les juges (wa-tudlu biha ila al-hukkam) » — une autre forme de venue a un lieu d'autorite. Le verset 2:189 parle de venir aux maisons. La sequence montre differentes formes de venue : venue aux juges pour corrompre (2:188), venue aux maisons par le dos (2:189). Les deux sont critiquees — la premiere pour la corruption, la seconde pour la superstition. La venue droite et honnete est celle qui passe par la porte.",
              axe3_sourate: "La racine '-t-y apparait frequemment dans la sourate al-Baqarah. En 2:23, « produisez (fa-'tu) une sourate semblable ». En 2:106, « Nous en apportons (na'ti) une meilleure ». En 2:145, « meme si tu apportais (atayta) a ceux qui ont recu le Livre tout signe ». La sourate utilise '-t-y pour differentes formes de venue et d'apport — physique, textuel, argumentatif. Le verset 2:189 utilise le sens physique le plus direct : se rendre a un lieu.",
              axe4_coherence: "La racine '-t-y apparait environ 549 fois dans le Coran — c'est une des racines les plus frequentes. En 2:222, « venez a elles (vos epouses) par ou Dieu vous l'a ordonne ». En 4:15, « celles de vos femmes qui commettent (ya'tina) la turpitude ». Le Coran utilise '-t-y dans des contextes tres varies — la venue physique, l'apport d'un argument, l'accomplissement d'un acte. Le sens commun est le mouvement vers un but — qu'il soit spatial, intellectuel ou moral.",
              axe5_frequence: "Pour la mission du khalifa, la venue est un acte d'engagement. Le khalifa vient aux choses — il ne les fuit pas, il ne les evite pas. Mais le verset enseigne que la maniere de venir compte autant que la venue elle-meme. Le khalifa qui vient par la porte est droit et transparent ; celui qui vient par le dos est detourne et suspect. La mission du khalifa exige la franchise — aborder les problemes de face, entrer dans les situations par la voie directe, ne pas contourner les difficultes."
            }
          }
        }
      },
      // byt pos=13
      {
        word_key: "byt", position: 13, sense_chosen: "maisons",
        analysis_axes: {
          sense_chosen: "maisons",
          concept_chosen: "Demeure/Sanctuaire",
          concepts: {
            "Demeure/Sanctuaire": {
              status: "retenu",
              senses: ["maison", "demeure", "temple", "sanctuaire", "lieu d'habitation", "foyer"],
              proof_ctx: "Le nom al-buyuta est un pluriel defini de bayt de la racine b-y-t. Le Lane's donne : maison, demeure, lieu d'habitation, temple, sanctuaire, la structure ou l'on reside et ou l'on passe la nuit. Le bayt est a la fois l'espace physique (la construction) et l'espace social (le foyer, la famille). Le pluriel al-buyut designe les maisons en general — l'ensemble des demeures des interlocuteurs. L'article al- definit les maisons comme connues — les leurs ou les maisons en general. Le mot bayt porte aussi le sens sacre : bayt Allah est la Maison de Dieu (la Ka'ba). Le contexte determine s'il s'agit de demeures ordinaires ou du sanctuaire.",
              axe1_verset: "Le mot al-buyuta est la destination de la venue — on vient AUX maisons. Le champ lexical (dos, portes, piete) montre que les maisons sont le lieu ou se manifeste le choix entre la piete et la superstition. Le verset mentionne les maisons deux fois — la premiere fois avec leur dos (l'acces detourne), la seconde fois avec leurs portes (l'acces correct). Les maisons sont le terrain du choix moral : comment on y entre definit le type de piete qu'on pratique. Le pluriel montre que l'enseignement est general — il concerne toutes les maisons, pas une seule.",
              axe2_voisins: "Le verset 2:187 mentionnait les epouses comme « vetement pour vous » dans le contexte du comportement nocturne pendant le Ramadan — implicitement dans les maisons. Le verset 2:189 parle explicitement des maisons et de la maniere d'y entrer. Le verset 2:196 mentionnera le rituel du pelerinage a la Maison Sacree (bayt). La sequence montre que la notion de bayt evolue du foyer domestique (2:187-189) au sanctuaire sacre (2:196).",
              axe3_sourate: "La racine b-y-t apparait dans la sourate al-Baqarah en 2:125 (« Nous avons fait de la Maison un lieu de retour »), 2:127 (« quand Ibrahim elevait les fondations de la Maison »), 2:158, 2:189. La sourate utilise bayt pour la Maison Sacree (la Ka'ba) et pour les maisons ordinaires. Le verset 2:189 pourrait porter les deux sens — les maisons ordinaires (interpretation littérale) ou la Maison Sacree (interpretation rituelle liee au pelerinage mentionne juste avant).",
              axe4_coherence: "La racine b-y-t apparait environ 73 fois dans le Coran. En 3:96, « la premiere Maison (bayt) fondee pour les gens est celle de Bakka ». En 24:27, « n'entrez pas dans des maisons (buyut) autres que les votres sans avoir demande permission ». En 33:33, « restez dans vos maisons ». Le Coran traite les maisons comme des espaces sacres — qu'il s'agisse de la Maison de Dieu ou des maisons des gens, l'acces y est reglemente par des normes de piete et de convenance.",
              axe5_frequence: "Pour la mission du khalifa, la maison est le premier espace de la mission. Le khalifa commence par sa propre maison — c'est la qu'il pratique la piete, qu'il forme sa famille, qu'il exerce sa responsabilite. Entrer dans sa maison par la porte est une metaphore de la droiture : le khalifa aborde ses responsabilites de face, sans detour ni dissimulation. La maison est aussi le bayt Allah — la Maison de Dieu — ou le khalifa se rend en pelerinage pour renouveler son engagement dans la mission."
            }
          }
        }
      },
      // zhr pos=15
      {
        word_key: "zhr", position: 15, sense_chosen: "dos/derriere",
        analysis_axes: {
          sense_chosen: "dos/derriere",
          concept_chosen: "Dos/Derri\u00e8re",
          concepts: {
            "Dos/Derri\u00e8re": {
              status: "retenu",
              senses: ["dos", "derri\u00e8re", "surface ext\u00e9rieure", "partie arri\u00e8re", "revers"],
              proof_ctx: "Le nom zuhuri-ha est un pluriel de zahr avec pronom suffixe 3FP de la racine z-h-r. Le Lane's donne : dos, derriere, surface exterieure, partie arriere, le cote oppose au ventre. Le zahr est la partie arriere de toute chose — le dos d'un homme, le derriere d'une maison, la face exterieure. Le pluriel zuhur est accorde avec le pluriel buyut (maisons) — chaque maison a un dos. Le pronom suffixe -ha renvoie aux maisons. Le dos est l'oppose de la face — ce qui est cache, ce qui n'est pas la voie d'acces normale. Venir par le dos signifie eviter l'entree principale, contourner, prendre un chemin detourne.",
              axe1_verset: "Le mot zuhuri-ha est le complement de provenance — venir aux maisons PAR LEUR DOS. Le champ lexical (maisons, portes, piete) montre que le dos est l'oppose de la porte — l'acces detourne contre l'acces direct. Le verset nie que venir par le dos soit de la piete. Le dos des maisons symbolise l'approche detournee, la voie indirecte, le contournement. Les exegetes classiques rapportent que les Arabes, en etat de sacralisation pour le pelerinage, entraient par l'arriere de leurs maisons pour eviter de passer par la porte — une pratique superstitieuse que le verset corrige.",
              axe2_voisins: "Le verset 2:177 corrigeait la piete rituelle (tourner le visage vers l'Est ou l'Ouest). Le verset 2:189 corrige une autre pratique rituelle erronee (entrer par le dos des maisons). Les deux versets visent la meme erreur : confondre le geste exterieur avec la piete interieure. L'acte de contourner sa maison pour entrer par l'arriere est un geste superstitieux qui ne porte aucune vertu — la piete est dans la taqwa, pas dans le chemin qu'on emprunte.",
              axe3_sourate: "La racine z-h-r apparait dans la sourate al-Baqarah en 2:85 (« puis vous les expulsez de leurs demeures, vous vous soutenez les uns les autres contre eux (tazaharuna) ») et en 2:189 (le dos des maisons). Les deux usages partagent l'idee de l'exterieur, de la surface — l'hostilite ouverte (tazahur) et la partie exterieure des maisons (zuhur). La sourate utilise z-h-r pour ce qui est visible, exterieur, expose — le dos est la surface, pas la profondeur.",
              axe4_coherence: "La racine z-h-r apparait environ 60 fois dans le Coran. En 6:120, « abandonnez l'apparence (zahira) du peche et ce qu'il cache ». En 18:97, « ils ne purent ni l'escalader (yazharu-hu) ni le percer ». En 30:41, « la corruption est apparue (zahara) sur terre et sur mer ». Le Coran utilise z-h-r pour la manifestation, l'apparition, la surface. Le dos est ce qui apparait a l'exterieur — la surface visible d'une chose, par opposition a son interieur. Le verset 2:189 utilise le sens spatial le plus direct : la partie arriere d'un batiment.",
              axe5_frequence: "Pour la mission du khalifa, le dos des maisons est une metaphore de l'approche detournee. Le khalifa qui aborde ses responsabilites « par le dos » est celui qui evite la confrontation directe, qui contourne les problemes, qui prend des chemins obliques. Le verset enseigne que cette approche n'est pas de la piete — c'est de la lachete ou de la superstition. Le khalifa doit affronter les situations de face, entrer par la porte, aller droit au but. La droiture du chemin est une composante de la droiture morale."
            }
          }
        }
      },
      // brr pos=17 (meme racine que pos=10)
      {
        word_key: "brr", position: 17, sense_chosen: "piete",
        analysis_axes: {
          sense_chosen: "piete",
          concept_chosen: "Pi\u00e9t\u00e9/Bont\u00e9",
          concepts: {
            "Pi\u00e9t\u00e9/Bont\u00e9": {
              status: "retenu",
              senses: ["pi\u00e9t\u00e9", "bont\u00e9", "droiture", "ob\u00e9issance", "bienfaisance", "vertu"],
              proof_ctx: "Le nom al-birra est le meme mot que al-birru (pos=10) mais a l'accusatif comme attribut (khabar) de lakinna. Le Lane's donne les memes sens : piete, bonte, droiture. La repetition du mot est deliberee — le verset dit d'abord ce que la piete N'EST PAS (laysa al-birru) puis ce qu'elle EST (lakinna al-birra). L'accusatif marque le mot comme predicat de lakinna — « mais la piete est... ». La piete ainsi definie positivement est identifiee a la taqwa (se premunir) — la piete veritable est l'acte de se premunir envers Dieu.",
              axe1_verset: "Le mot al-birra est la deuxieme occurrence de birr dans le verset. Le champ lexical (mais, premunir) montre que cette occurrence est la definition positive de la piete. La structure est classique dans le Coran : negation (laysa al-birru...) → rectification (wa-lakinna al-birra...). La piete est definie par ce qu'elle est (la taqwa) apres avoir ete definie par ce qu'elle n'est pas (entrer par le dos). La repetition du meme mot renforce le contraste — c'est le meme concept (birr) mais avec deux contenus opposes : le faux et le vrai.",
              axe2_voisins: "Le verset 2:177 utilisait exactement la meme structure : « laysa al-birra an tuwallu... wa-lakinna al-birra man amana » (la piete n'est pas de tourner les visages, mais la piete est de croire). Le verset 2:189 reproduit ce schema : « laysa al-birru bi-an ta'tu... wa-lakinna al-birra man ittaqa » (la piete n'est pas de venir par le dos, mais la piete est de se premunir). Les deux versets sont des paralleles structurels — la sourate enseigne la piete veritable par la repetition du meme schema correctif.",
              axe3_sourate: "La double occurrence de birr dans le verset 2:189 fait echo au meme procede en 2:177. La sourate al-Baqarah est obsedee par la question « qu'est-ce que la piete ? » — elle y revient sans cesse, corrigeant les fausses conceptions et affirmant la vraie. Le birr est un concept qui se construit tout au long de la sourate, chaque verset ajoutant un element a la definition ou enlevant un element errone.",
              axe4_coherence: "Memes references que pos=10. La repetition du birr dans un meme verset est un procede rhetorique specifique — la juxtaposition du faux et du vrai birr dans une seule phrase force l'auditeur a choisir. Le Coran ne laisse pas l'ambiguite — il definit, il corrige, il rectifie dans un mouvement dialectique de negation et d'affirmation.",
              axe5_frequence: "Pour la mission du khalifa, la double mention du birr enseigne le discernement. Le khalifa doit distinguer la vraie piete de la fausse — les gestes superstitieux de la veritable soumission a Dieu. La repetition du mot birr dans un meme verset est un signal : la piete peut etre contrefaite, imitee, detournee. Le khalifa vigilant ne se laisse pas tromper par les apparences de piete — il cherche la substance, pas la forme."
            }
          }
        }
      },
      // wqy pos=19
      {
        word_key: "wqy", position: 19, sense_chosen: "se premunir",
        analysis_axes: {
          sense_chosen: "se premunir",
          concept_chosen: "Protection/Pr\u00e9servation",
          concepts: {
            "Protection/Pr\u00e9servation": {
              status: "retenu",
              senses: ["se pr\u00e9munir", "se prot\u00e9ger", "prendre garde", "pr\u00e9server", "placer un bouclier"],
              proof_ctx: "Le verbe ittaqa est un accompli 3MS forme VIII de la racine w-q-y. Le Lane's donne : se premunir, se proteger, prendre garde, placer un bouclier (wiqaya) entre soi et ce qu'on craint. La forme VIII (ifta'ala) est reflexive intensive — se premunir soi-meme activement et volontairement. Le verbe est precede du nom relatif man (celui qui) — la piete est celle de « celui qui se premunit ». La taqwa est presentee comme la definition meme de la piete : al-birr = man ittaqa. Se premunir est un acte concret et continu — ce n'est pas un sentiment mais une action de protection permanente.",
              axe1_verset: "Le verbe ittaqa est le coeur de la definition positive de la piete : « la piete est de celui qui se premunit ». Le champ lexical (piete, maisons, dos, portes) montre que se premunir est l'alternative vraie a la superstition. Le verset oppose deux comportements : entrer par le dos (fausse piete) et se premunir (vraie piete). La taqwa n'est pas un geste physique (comme entrer par telle ou telle porte) mais un etat interieur actif — la vigilance permanente contre ce qui deplait a Dieu. Le verbe apparait aussi a l'imperatif (wa-ttaqu) plus loin dans le verset, montrant que la taqwa est a la fois une definition et un ordre.",
              axe2_voisins: "Le verset 2:187 se terminait par « telles sont les limites de Dieu — ne vous en approchez pas. Ainsi Dieu expose Ses signes aux gens afin qu'ils se premunissent (yattaqun) ». Le verset 2:189 identifie la piete a la taqwa. La sequence montre un resserrement : en 2:187, la taqwa est une finalite esperee ; en 2:189, elle est identifiee a la piete meme. La taqwa passe du statut d'objectif a celui de definition — se premunir n'est pas seulement un but a atteindre, c'est la piete elle-meme.",
              axe3_sourate: "La racine w-q-y est un fil conducteur de la sourate al-Baqarah. En 2:2, le Livre est « une guidance pour les muttaqin ». En 2:21, « peut-etre vous premunissez-vous ». En 2:177, les muttaqin sont ceux qui accomplissent les actes de piete. En 2:189, la taqwa EST la piete. La sourate construit la taqwa comme la vertu cardinale — elle commence par etre une condition (2:2) et finit par etre une identite (2:189). La taqwa n'est pas une composante de la piete — elle est la piete.",
              axe4_coherence: "La racine w-q-y apparait environ 258 fois dans le Coran. En 3:102, « premunissez-vous envers Dieu de Sa vraie taqwa ». En 49:13, « le plus noble d'entre vous aupres de Dieu est le plus premuni (atqakum) ». Le Coran fait de la taqwa le critere supreme de la valeur humaine — ce n'est ni la richesse, ni la naissance, ni le rituel, mais la premunition active envers Dieu. Le verset 2:189 s'inscrit dans cette hierarchie de valeurs en identifiant piete et taqwa.",
              axe5_frequence: "Pour la mission du khalifa, la taqwa est le moteur de la mission. Le khalifa qui se premunit envers Dieu est celui qui accomplit veritablement sa mission — il place un bouclier entre lui et tout ce qui corrompt l'ordre social. La taqwa transforme le khalifa de simple executant en gardien actif — il ne se contente pas d'obeir aux regles, il se protege activement contre tout ce qui pourrait le detourner de sa mission. La taqwa est la piete en acte — la vigilance permanente du khalifa sur terre."
            }
          }
        }
      },
      // aty pos=20 (meme racine que pos=12)
      {
        word_key: "aty", position: 20, sense_chosen: "venir",
        analysis_axes: {
          sense_chosen: "venir",
          concept_chosen: "Venue/Arriv\u00e9e",
          concepts: {
            "Venue/Arriv\u00e9e": {
              status: "retenu",
              senses: ["venir", "arriver", "se pr\u00e9senter", "se rendre \u00e0", "entrer"],
              proof_ctx: "Le verbe wa-'tu est un imperatif 2MP de la racine '-t-y. Le Lane's donne : venez, presentez-vous, rendez-vous a un lieu. L'imperatif marque un ordre divin — apres avoir nie la fausse piete et defini la vraie, le verset donne un ordre concret. Le passage du subjonctif negatif (ta'tu dans bi-an ta'tu) a l'imperatif positif (wa-'tu) marque le mouvement de la correction a l'injonction. La conjonction wa- lie l'ordre a ce qui precede — puisque la piete n'est pas d'entrer par le dos, DONC venez par les portes.",
              axe1_verset: "Le verbe wa-'tu est l'injonction positive qui suit la negation et la definition. Le champ lexical (maisons, portes) montre que l'ordre est concret et spatial : entrez par les portes. L'imperatif est collectif (2MP) — l'ordre s'adresse a toute la communaute. Le verset passe de la theorie (definition de la piete) a la pratique (ordre concret d'entrer par les portes). Le meme verbe (ata) qui etait nie (ta'tu... par le dos) est maintenant ordonne (wa-'tu... par les portes) — la correction est complete, le geste est redirige.",
              axe2_voisins: "Le verset 2:222 utilisera une formule similaire : « fa-'tuhunna min haythu amarakum Allah » (venez a elles par ou Dieu vous l'a ordonne). Le parallele est frappant : dans les deux cas, le verbe ata est suivi d'une indication de la voie correcte ordonnee par Dieu. Le Coran reglemente non seulement les actes mais aussi la maniere de les accomplir — le « comment » est aussi important que le « quoi ».",
              axe3_sourate: "Memes references que pos=12. La repetition du verbe '-t-y dans le meme verset (subjonctif negatif puis imperatif positif) est un procede de contraste — la sourate utilise le meme verbe pour montrer que le probleme n'est pas l'acte de venir mais la voie empruntee. La venue elle-meme est neutre — c'est le chemin qui la qualifie moralement.",
              axe4_coherence: "Memes references que pos=12. L'utilisation du meme verbe a l'imperatif apres le subjonctif negatif est un procede rhetorique coranique — la correction par substitution. Le Coran ne se contente pas de nier — il remplace l'acte nie par l'acte correct. « Ne venez pas par le dos → venez par les portes » est un schema de correction positive.",
              axe5_frequence: "Pour la mission du khalifa, l'imperatif « venez » est un appel a l'action. Le khalifa n'est pas contemplatif — il agit, il vient, il se presente. L'ordre de venir par les portes est un appel a la franchise et a la droiture dans l'action. Le khalifa qui recoit l'ordre divin doit l'executer — il ne peut pas rester passif. La venue par les portes est l'image de la mission accomplie de face, sans detour, avec honnetete."
            }
          }
        }
      },
      // byt pos=21 (meme racine que pos=13)
      {
        word_key: "byt", position: 21, sense_chosen: "maisons",
        analysis_axes: {
          sense_chosen: "maisons",
          concept_chosen: "Demeure/Sanctuaire",
          concepts: {
            "Demeure/Sanctuaire": {
              status: "retenu",
              senses: ["maison", "demeure", "temple", "sanctuaire", "lieu d'habitation", "foyer"],
              proof_ctx: "Le nom al-buyuta est la meme forme que pos=13 — pluriel defini de bayt. Cette deuxieme occurrence est le complement du verbe imperatif wa-'tu — venez AUX maisons. Le Lane's donne les memes sens : maison, demeure, sanctuaire. La repetition du mot al-buyuta dans le meme verset cree un parallele delibere : les memes maisons sont d'abord le lieu de la fausse piete (entrer par le dos) puis le lieu de la vraie piete (entrer par les portes). Le lieu ne change pas — c'est l'approche qui change.",
              axe1_verset: "Le mot al-buyuta est repete pour marquer le contraste des voies d'acces. Le champ lexical (portes) montre que les maisons sont maintenant approchees correctement. Le parallele est exact : al-buyuta min zuhuri-ha (les maisons par leur dos) → al-buyuta min abwabi-ha (les maisons par leurs portes). Le lieu est identique — seul le chemin differe. Le verset enseigne que la piete ne change pas les destinations mais les chemins — on va aux memes endroits, mais par la bonne voie.",
              axe2_voisins: "Memes references que pos=13. La repetition du mot buyut dans le meme verset renforce l'idee que le probleme n'est pas le lieu mais l'approche. Les maisons restent les maisons — ce sont les comportements qui sont juges.",
              axe3_sourate: "Memes references que pos=13. La sourate al-Baqarah utilise bayt/buyut pour les maisons ordinaires et pour la Maison Sacree. Le verset 2:189, en repetant buyut, maintient l'ambiguite feconde entre les deux sens — l'enseignement vaut pour les maisons des gens et pour la Maison de Dieu.",
              axe4_coherence: "Memes references que pos=13. Le procede de repetition du meme mot dans un meme verset pour marquer le contraste est un trait stylistique coranique. Le Coran economise les mots mais varie les contextes — le meme mot dans deux contextes differents acquiert deux significations morales differentes.",
              axe5_frequence: "Pour la mission du khalifa, la repetition des maisons rappelle que la mission s'exerce dans les memes lieux que la vie quotidienne. Le khalifa ne change pas de lieu — il change d'approche. La piete n'est pas d'aller dans un lieu special mais d'aller dans les lieux ordinaires avec une intention et un comportement corrects. La maison du khalifa est son premier terrain de mission — il y entre par la porte, avec droiture."
            }
          }
        }
      },
      // bwb pos=23
      {
        word_key: "bwb", position: 23, sense_chosen: "portes",
        analysis_axes: {
          sense_chosen: "portes",
          concept_chosen: "Ouverture/Acc\u00e8s",
          concepts: {
            "Ouverture/Acc\u00e8s": {
              status: "retenu",
              senses: ["porte", "ouverture", "acc\u00e8s", "entr\u00e9e", "chapitre"],
              proof_ctx: "Le nom abwabi-ha est un pluriel de bab avec pronom suffixe 3FP de la racine b-w-b. Le Lane's donne : porte, ouverture, acces, entree, chapitre d'un livre. Le bab est l'acces principal d'un lieu — l'ouverture par laquelle on entre normalement et officiellement. Le pluriel abwab est accorde avec le pluriel buyut — chaque maison a sa porte. Le pronom -ha renvoie aux maisons. La porte est l'oppose du dos — c'est l'acces direct, frontal, normal. Entrer par la porte signifie prendre la voie droite, la voie prevue, la voie honnete. La porte est un point de passage reglemente — on entre par la porte quand on a le droit d'entrer.",
              axe1_verset: "Le mot abwabi-ha est le complement de provenance — venez par LEURS PORTES. Le champ lexical (maisons, dos, piete, premunir) montre que les portes sont la voie de la piete. Le contraste dos/portes est le coeur de l'enseignement : le dos est l'acces detourne et superstitieux, la porte est l'acces droit et pieux. Les portes sont la voie que Dieu a prevue pour entrer — elles existent pour etre utilisees. Eviter les portes pour entrer par le dos est un acte de defiance envers l'ordre naturel et divin des choses.",
              axe2_voisins: "Le verset 2:177 definissait la piete comme un ensemble d'actes droits et sinceres. Le verset 2:189 ajoute une image concrete : la piete entre par la porte, pas par le dos. Le verset 2:197 mentionnera les « mois du pelerinage » — les portes temporelles du hajj. La notion de porte (bab) comme voie d'acces correcte se retrouve dans la legislation pelerine : on entre dans l'ihram par les miqat (les lieux fixes), on ne contourne pas les procedures.",
              axe3_sourate: "La racine b-w-b apparait dans la sourate al-Baqarah en 2:58 (« entrez par la porte en vous prosternant ») et en 2:189 (« venez aux maisons par leurs portes »). Les deux versets partagent la meme image — entrer par la porte avec humilite et droiture. En 2:58, c'est l'entree dans la ville promise ; en 2:189, c'est l'entree dans les maisons avec piete. La porte est le seuil de l'obeissance — on entre par la porte quand on se soumet a l'ordre divin.",
              axe4_coherence: "La racine b-w-b apparait environ 31 fois dans le Coran. En 7:40, « les portes du ciel ne s'ouvriront pas pour eux ». En 15:44, « la Gehenne a sept portes ». En 39:71-73, les incredules et les pieux sont conduits a des portes differentes. Le Coran utilise la porte comme un symbole d'acces — l'acces au ciel, a l'enfer, a la maison, au salut. La porte est selective : elle s'ouvre pour certains et se ferme pour d'autres. Entrer par la porte est un acte d'eligibilite — on y entre parce qu'on en a le droit moral.",
              axe5_frequence: "Pour la mission du khalifa, la porte est la voie de la mission. Le khalifa entre dans sa mission par la porte — il ne contourne pas ses responsabilites, il ne prend pas de raccourcis, il ne se glisse pas par l'arriere. La porte est aussi un symbole d'ouverture — le bab est l'acces que Dieu a prevu pour que le khalifa accomplisse sa mission. Le khalifa qui trouve la porte et la franchit avec droiture est celui qui accomplit sa mission correctement. La porte est le seuil entre la vie ordinaire et la mission sacree."
            }
          }
        }
      },
      // wqy pos=24 (meme racine que pos=19)
      {
        word_key: "wqy", position: 24, sense_chosen: "se premunir",
        analysis_axes: {
          sense_chosen: "se premunir",
          concept_chosen: "Protection/Pr\u00e9servation",
          concepts: {
            "Protection/Pr\u00e9servation": {
              status: "retenu",
              senses: ["se pr\u00e9munir", "se prot\u00e9ger", "prendre garde", "pr\u00e9server", "placer un bouclier"],
              proof_ctx: "Le verbe wa-ttaqu est un imperatif 2MP forme VIII de la racine w-q-y. Le Lane's donne : premunissez-vous, protegez-vous, prenez garde. La forme VIII reflexive (ittaqa) est ici a l'imperatif pluriel — c'est un ordre collectif de se premunir. La conjonction wa- lie cet imperatif au precedent (wa-'tu) — venez par les portes ET premunissez-vous. Les deux ordres sont lies : entrer par les portes est un acte de droiture, se premunir envers Dieu est l'intention qui motive cet acte. L'imperatif fait de la taqwa un devoir concret, pas une aspiration vague.",
              axe1_verset: "Le verbe wa-ttaqu est le deuxieme imperatif de la serie finale du verset. Le champ lexical (Dieu, reussir) montre que la taqwa est liee a Dieu specifiquement et que sa finalite est la reussite. Le verset passe de la taqwa comme definition de la piete (man ittaqa) a la taqwa comme ordre collectif (wa-ttaqu Allah). La taqwa n'est plus seulement une identite (la piete est la taqwa) — elle est un devoir explicite (premunissez-vous envers Dieu). La sequence des imperatifs (venez + premunissez-vous) montre que l'action physique (venir par les portes) et l'action spirituelle (se premunir) sont inseparables.",
              axe2_voisins: "Le verset 2:187 se terminait par « afin qu'ils se premunissent (yattaqun) ». Le verset 2:189 utilise l'imperatif wa-ttaqu — le passage de l'inaccompli (souhait, finalite) a l'imperatif (ordre direct) montre une intensification. La taqwa n'est plus seulement un espoir — elle est un commandement. Le verset 2:194 utilisera « wa-ttaqu Allah wa-'lamu anna Allah ma'a al-muttaqin » (premunissez-vous et sachez que Dieu est avec ceux qui se premunissent) — confirmant la taqwa comme imperatif recurrent.",
              axe3_sourate: "Memes references que pos=19. La sourate al-Baqarah utilise la taqwa a la fois comme qualite des elus (2:2), comme finalite des prescriptions (2:183, 2:187), et comme imperatif direct (2:189, 2:194, 2:196, 2:197, 2:203). La repetition de l'imperatif wa-ttaqu tout au long de la sourate cree un rythme de rappel — le croyant est constamment rappele a la vigilance.",
              axe4_coherence: "Memes references que pos=19. L'imperatif « ittaqu Allah » (premunissez-vous envers Dieu) est une des formules les plus frequentes du Coran. Elle apparait dans des dizaines de versets comme un rappel constant de la responsabilite du croyant envers Dieu. La formule lie la taqwa a un objet precis — Dieu — ce n'est pas se premunir en general mais se premunir specifiquement dans la relation avec Dieu.",
              axe5_frequence: "Pour la mission du khalifa, l'imperatif « premunissez-vous envers Dieu » est l'ordre fondamental de la mission. Le khalifa recoit cet ordre et doit l'executer — il ne peut pas s'en dispenser. La taqwa envers Dieu est la garantie que la mission sera accomplie avec integrite — le khalifa qui craint Dieu ne corrompt pas, ne triche pas, ne detourne pas. L'imperatif collectif (2MP) rappelle que la taqwa est aussi une responsabilite communautaire — les khalifas se premunissent ensemble."
            }
          }
        }
      },
      // alh pos=25
      {
        word_key: "alh", position: 25, sense_chosen: "Dieu",
        analysis_axes: {
          sense_chosen: "Dieu",
          concept_chosen: "Divinit\u00e9",
          concepts: {
            "Divinit\u00e9": {
              status: "retenu",
              senses: ["Dieu", "divinit\u00e9 unique", "l'ador\u00e9", "le cr\u00e9ateur", "le souverain"],
              proof_ctx: "Le nom Allah est le nom propre divin de la racine '-l-h. Le Lane's donne : Dieu, la divinite unique, l'etre adore a l'exclusion de tout autre. Allah est le nom supreme — il designe l'Etre divin dans sa totalite, avec tous ses attributs de perfection. Le nom est a l'accusatif comme complement du verbe ittaqu — premunissez-vous envers DIEU. Le nom Allah n'a pas de pluriel et pas de feminin — il est unique dans sa forme comme dans sa realite. L'invocation du nom Allah apres l'imperatif de taqwa precis l'objet de la premunition : c'est envers Dieu qu'on se premunit, pas envers les hommes.",
              axe1_verset: "Le mot Allah est le complement de l'imperatif wa-ttaqu — c'est envers DIEU que la communaute doit se premunir. Le champ lexical (premunir, reussir) montre que Dieu est a la fois l'objet de la crainte et la source de la reussite. Le verset lie la piete (birr), la premunition (taqwa) et Dieu (Allah) en un triangle : la piete veritable est la taqwa envers Dieu. Dieu est le point de reference absolu — c'est par rapport a Lui que les actes sont juges pieux ou superstitieux. Entrer par le dos n'est pas de la piete parce que Dieu n'a pas ordonne cette pratique.",
              axe2_voisins: "Le verset 2:186 affirmait « Je suis proche » — Dieu se revele dans Sa proximite. Le verset 2:189 ordonne de se premunir envers Dieu. La sequence montre les deux faces de la relation avec Dieu : Sa proximite (Il est proche, Il repond) et la taqwa (premunissez-vous envers Lui). Le Dieu proche est aussi le Dieu devant qui on se premunit — la proximite n'exclut pas la crainte respectueuse. Les deux versets se completent : Dieu est accessible (2:186) et Dieu est redoutable (2:189).",
              axe3_sourate: "La racine '-l-h (Allah) apparait des centaines de fois dans la sourate al-Baqarah. Le nom Allah est le mot le plus frequent de la sourate — il structure chaque paragraphe, chaque prescription, chaque recit. En 2:163, « votre Dieu est un Dieu unique ». En 2:186, « Je suis proche ». En 2:189, « premunissez-vous envers Dieu ». La sourate est un rappel permanent de la presence de Dieu dans tous les aspects de la vie — de l'astronomie (les croissants) a la legislation (le pelerinage) en passant par l'ethique (la piete).",
              axe4_coherence: "Le nom Allah apparait environ 2699 fois dans le Coran — c'est le mot le plus frequent. La formule « ittaqu Allah » (premunissez-vous envers Dieu) est un des imperatifs les plus repetes. Le Coran fait de Dieu le centre de toute la vie du croyant — chaque acte, chaque choix, chaque comportement est rapporte a Dieu. Le verset 2:189 s'inscrit dans cette centralite divine — les croissants sont des signes de Dieu, la piete est envers Dieu, la premunition est envers Dieu, la reussite vient de Dieu.",
              axe5_frequence: "Pour la mission du khalifa, Dieu est le mandataire de la mission. Le khalifa agit au nom de Dieu et se premunit envers Dieu — sa mission est definie par Dieu, encadree par Dieu, jugee par Dieu. Le nom Allah dans ce verset rappelle au khalifa que la piete n'est pas une affaire humaine — c'est une relation avec Dieu. Le khalifa qui se premunit envers Dieu accomplit sa mission ; celui qui se premunit envers les hommes la trahit. Dieu est le seul referent de la mission du khalifa."
            }
          }
        }
      },
      // flh pos=27
      {
        word_key: "flh", position: 27, sense_chosen: "reussir",
        analysis_axes: {
          sense_chosen: "reussir",
          concept_chosen: "R\u00e9ussite/Prosp\u00e9rit\u00e9",
          concepts: {
            "R\u00e9ussite/Prosp\u00e9rit\u00e9": {
              status: "retenu",
              senses: ["r\u00e9ussir", "prosp\u00e9rer", "atteindre le bonheur", "obtenir le salut", "\u00eatre sauve"],
              proof_ctx: "Le verbe tuflihuna est un inaccompli 2MP de la racine f-l-h. Le Lane's donne : reussir, prosperer, atteindre le bonheur, obtenir le salut, labourer la terre, fendre. Le sens premier de la racine est fendre/labourer — celui qui laboure la terre en tire sa subsistance, d'ou la prosperite et la reussite. La forme IV (aflaha) est causative — faire aboutir la reussite. L'inaccompli marque une possibilite ouverte — la reussite n'est pas garantie mais esperee. La particule la'alla (afin que, peut-etre) ajoute une dimension d'espoir conditionne — la reussite depend de la premunition envers Dieu.",
              axe1_verset: "Le verbe tuflihuna ferme le verset en donnant la finalite de tous les ordres precedents : venez par les portes + premunissez-vous envers Dieu → AFIN QUE vous reussissiez. Le champ lexical (Dieu, premunir) montre que la reussite est la consequence de la taqwa. Le verset construit une chaine causale : piete veritable (taqwa) → droiture (entrer par les portes) → reussite (falah). La reussite n'est pas un hasard — elle est le fruit d'un comportement correct. Le verset ferme le cycle ouvert par la question (yas'alunaka) en donnant la finalite ultime : la reussite par la taqwa.",
              axe2_voisins: "Le verset 2:189 se termine par « la'allakum tuflihun » — la meme formule se retrouve en 2:189 et en d'autres versets de la sourate. Le verset 2:183 se terminait par « la'allakum tattaqun » (afin que vous vous premunissiez). Le verset 2:189 passe de la taqwa comme finalite a la reussite comme finalite — la reussite est l'etape au-dela de la taqwa. La sequence des finalites dans la sourate est : taqwa → falah. On se premunit pour reussir.",
              axe3_sourate: "La racine f-l-h apparait dans la sourate al-Baqarah en 2:5 (« ce sont eux les bien guides et ce sont eux qui reussissent (al-muflihun) »). En 2:189, la reussite est la finalite de la taqwa. La sourate ouvre et parcourt la reussite comme horizon — les muttaqin du debut (2:2-5) sont les muflihun (ceux qui reussissent), et le verset 2:189 rappelle cette promesse. La reussite est le telos de la sourate — tout converge vers elle.",
              axe4_coherence: "La racine f-l-h apparait environ 40 fois dans le Coran. En 3:104, « ceux-la sont les reussissants (al-muflihun) ». En 23:1, « les croyants ont reussi (qad aflaha) ». En 87:14, « a reussi celui qui se purifie (qad aflaha man tazakka) ». Le Coran fait de la reussite (falah) le but ultime de la vie du croyant — non pas la reussite materielle mais la reussite totale, dans ce monde et dans l'autre. L'appel a la priere contient « hayya 'ala al-falah » (venez a la reussite) — la reussite est un appel permanent.",
              axe5_frequence: "Pour la mission du khalifa, la reussite est l'accomplissement de la mission. Le khalifa ne travaille pas en vain — sa mission a une finalite : la reussite, le falah. Cette reussite n'est pas la richesse ou le pouvoir mais la prosperite totale — la paix sociale, la justice, l'obeissance a Dieu, le salut dans l'au-dela. Le khalifa qui se premunit envers Dieu et entre par les portes — c'est-a-dire qui agit avec droiture et transparence — est promis a la reussite. La reussite du khalifa est la reussite de sa communaute tout entiere."
            },
            "Fendre/Labourer": {
              status: "peu_probable",
              senses: ["fendre", "labourer", "cultiver la terre", "ouvrir un sillon"],
              proof_ctx: "Le sens premier de la racine f-l-h est fendre, labourer — le fallah est le cultivateur, celui qui fend la terre pour y semer. Le Lane's confirme ce sens etymologique. Mais le contexte du verset est eschatologique et moral — la reussite visee est le salut spirituel, pas la recolte agricole. Le Coran a developpe le sens derive (reussir, prosperer) a partir du sens concret (labourer) par une metaphore productive : comme le laboureur fend la terre et en tire sa subsistance, le croyant « laboure » sa vie spirituelle et en tire le salut. Mais dans ce verset, seul le sens derive est operant."
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
// SYNC word_meanings
// =====================================================
async function syncWordMeanings() {
  console.log('\n=== SYNC word_meanings ===');

  const verseIds = [196];
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
  console.log('=== PIPELINE SOURATE 2 — VERSET 189 ===\n');
  await processVerse(189);
  await syncWordMeanings();
  console.log('\n=== PIPELINE V189 TERMINEE ===');
}

main().catch(e => console.error('FATAL:', e));
