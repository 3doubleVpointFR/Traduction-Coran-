/**
 * fix-s2-v31-40-axes.js
 * Enrichit les 57 axes courts (1-2 phrases) des VWA de sourate 2:31-40.
 * Ajoute 2-3 phrases supplementaires a chaque axe pour atteindre 4-5 phrases.
 *
 * Usage: npx tsx scripts/fix-s2-v31-40-axes.js
 */

const { createClient } = require('@supabase/supabase-js');

const sb = createClient(
  'https://gwtgftosscjupxxsubev.supabase.co',
  process.env.SUPABASE_SERVICE_KEY
);

// All 57 short axes grouped by VWA id + concept name
// Each entry: [vwaId, conceptName, axeName, appendText]
const enrichments = [

  // ============================================================
  // VWA 1231 [skn] v35 "Calme/Repos" — 5 axes short
  // ============================================================
  [1231, "Calme/Repos", "axe1_verset",
    " Le verset contient aussi kula (mangez) et la taqraba (ne vous approchez pas) — des actions concretes qui presupposent un lieu physique, pas un etat interieur. Si le sens etait le calme, le complement de lieu al-jannata serait redondant — on ne dit pas « sois calme dans le jardin » comme on dit « habite le jardin ». Le calme est un etat qui se suffit a lui-meme sans complement de lieu, alors que l'habitation exige un endroit precis."
  ],
  [1231, "Calme/Repos", "axe2_voisins",
    " Le verset 34 ordonnait la prosternation — un acte exterieur, pas un etat de calme. Le verset 37 parlera de paroles recues, un autre evenement concret. Le passage est une succession d'actions (prosterner, habiter, manger, interdire, glisser, descendre) qui privilegient le concret sur l'abstrait. Le calme comme sens isole ne s'insere pas dans cette dynamique narrative ou chaque verset marque une etape dans le parcours d'Adam."
  ],
  [1231, "Calme/Repos", "axe3_sourate",
    " Mais dans le contexte immediat du verset 35, la question est l'installation dans un lieu, pas la quietude. La sourate distingue les deux usages de la racine : la sakina descend sur les gens (2:248), tandis qu'ici uskun est un ordre d'habitation dans un lieu precis. Le calme est un sous-produit de l'habitation, pas l'objet de l'ordre divin dans ce verset."
  ],
  [1231, "Calme/Repos", "axe4_coherence",
    " Mais en 7:19 et 2:35, le meme imperatif uskun est suivi d'un complement de lieu (al-jannata), ce qui oriente systematiquement vers l'habitation. Le calme conjugal (li-taskunu) en 30:21 utilise la forme V avec la preposition ila — une construction differente qui marque un etat interieur. L'imperatif simple uskun + lieu = habiter, pas etre calme."
  ],
  [1231, "Calme/Repos", "axe5_frequence",
    " Mais le verset 35 ne parle pas de la paix en general — il donne une instruction precise : occuper un lieu. Le khalifa recoit d'abord un lieu, puis une mission. Le calme est une consequence de la bonne habitation, pas l'instruction elle-meme. La mission du khalifa commence par s'installer quelque part, pas par atteindre un etat de serenite. La paix viendra quand l'habitation sera juste."
  ],

  // ============================================================
  // VWA 1233 [jnn] v35 "Dissimulation/Couverture" — 4 axes short
  // ============================================================
  [1233, "Dissimulation/Couverture", "axe1_verset",
    " Le mot al-jannata porte l'article defini al- qui en fait un nom propre designant un lieu specifique. La dissimulation est une action, pas un lieu — dire « habitez la dissimulation » serait incoherent. La construction grammaticale (imperatif uskun + complement de lieu) exige un endroit physique, pas une qualite abstraite. Le lien etymologique entre jardin et couverture reste en arriere-plan mais n'est pas active dans cette phrase."
  ],
  [1233, "Dissimulation/Couverture", "axe2_voisins",
    " Le verset 34 mentionne la prosternation devant Adam, le verset 36 mentionne la sortie — les deux se rapportent a un lieu physique (etre devant Adam, sortir d'un endroit). Le recit suit un schema spatial coherent : prosternation dans un lieu → habitation dans le jardin → sortie du jardin. La dissimulation comme sens premier ne s'insere pas dans cette logique spatiale du passage."
  ],
  [1233, "Dissimulation/Couverture", "axe3_sourate",
    " Mais dans le verset 35, le mot fonctionne clairement comme un lieu. La dissimulation en tant que sens premier est etymologiquement juste mais contextuellement secondaire. La sourate distingue entre le jardin comme lieu (2:35, 2:82, 2:221, 2:265-266) et la dissimulation comme phenomene (les djinns caches). Ici le contexte de lieu l'emporte."
  ],
  [1233, "Dissimulation/Couverture", "axe4_coherence",
    " En 2:35, 7:19 et 20:117, al-janna designe systematiquement un lieu d'habitation, pas un acte de dissimulation. Le Coran utilise la meme racine pour les etres caches (djinns en 6:100, 6:128, 7:38, 18:50) avec des formes grammaticales differentes. La distinction entre le nom de lieu (janna) et le verbe d'action (junna) est claire dans l'usage coranique."
  ],

  // ============================================================
  // VWA 1237 [qrb] v35 "Proximité/Rapprochement" — 2 axes short
  // ============================================================
  [1237, "Proximité/Rapprochement", "axe3_sourate",
    " Cette dualite de la proximite structure l'ethique de la sourate : il y a des choses dont il faut se rapprocher (Dieu, la priere, la justice) et des choses dont il faut s'eloigner (les interdits, la transgression). Le verset 35 etablit le premier interdit de proximite du Coran — ne vous approchez pas de cet arbre. Ce modele sera repete tout au long de la sourate pour d'autres interdits (2:187 pendant le jeune, 2:222 pendant les menstrues)."
  ],
  [1237, "Proximité/Rapprochement", "axe4_coherence",
    " L'interdiction par la proximite (la taqrabu) est plus stricte qu'une interdiction par l'action (la taf'alu) — elle cree une zone tampon avant meme l'acte interdit. En 17:32, ne vous approchez pas de la fornication signifie eviter tout ce qui y mene. En 2:35, ne vous approchez pas de l'arbre pose le meme principe : l'interdit ne commence pas au contact, il commence a l'approche. Cette logique preventive est une constante coranique dans l'usage de la racine q-r-b avec la negation."
  ],

  // ============================================================
  // VWA 1239 [kwn] v35 "Être/Existence" — 1 axe short
  // ============================================================
  [1239, "Être/Existence", "axe3_sourate",
    " Dans le verset 35, takuna min al-zalimina (que vous ne soyez parmi les injustes) utilise le verbe d'etat pour decrire une consequence potentielle — un etat dans lequel on peut basculer. La sourate utilise cette construction avertissante a plusieurs reprises : ne soyez pas les premiers a le nier (2:41), ne soyez pas parmi les ignorants (2:67). Le verbe d'etat sert ici de mise en garde : l'etat d'injustice n'est pas un acte ponctuel mais une condition dans laquelle on s'installe."
  ],

  // ============================================================
  // VWA 1240 [zlm] v35 "Injustice/Oppression" — 4 axes short
  // ============================================================
  [1240, "Injustice/Oppression", "axe1_verset",
    " Le verset se termine par fa-takuna min al-zalimina (que tu ne sois parmi les injustes). La construction min al-zalimina (parmi les injustes) fait des injustes un groupe defini — on peut y entrer ou en rester dehors. Le mot est un participe actif pluriel defini, ce qui designe une categorie de personnes connues pour cet attribut. L'injustice est le resultat direct de la transgression de l'interdit."
  ],
  [1240, "Injustice/Oppression", "axe2_voisins",
    " Le shaytan du verset 36 est celui qui cause le glissement — il provoque le deplacement hors de la place juste. Le verset 37 introduit le retour (taba), qui est le mouvement inverse : revenir a sa place juste apres l'avoir quittee. Le deplacement hors de la place juste (zulm) est l'evenement pivot entre l'habitation du jardin et la descente sur terre."
  ],
  [1240, "Injustice/Oppression", "axe3_sourate",
    " L'injustice dans la sourate al-Baqarah designe systematiquement le deplacement des choses hors de leur place : les fils d'Isra'il se font du tort en adorant le veau (2:54), ceux qui changent les paroles se font du tort (2:59). Le verset 2:35 etablit la premiere occurrence de ce deplacement dans le recit humain — s'approcher de l'arbre interdit, c'est placer son action hors de sa place. Cette premiere occurrence pose le modele que la sourate declinera ensuite."
  ],
  [1240, "Injustice/Oppression", "axe5_frequence",
    " Le khalifa doit eviter de se placer hors de sa position juste pour ne pas basculer dans l'obscurite. Le verset 35 montre que l'injustice commence par une transgression qui semble mineure — s'approcher de l'arbre — mais qui suffit a deplacer la personne de sa place juste. La mission du khalifa inclut le discernement : identifier les limites et rester dans les bornes pour ne pas basculer dans la categorie des zalimina. Cette vigilance face aux limites est le fondement de la prevention de la corruption sur terre."
  ],
  [1240, "Obscurité/Ténèbres", "axe3_sourate",
    " Le verset 2:257 synthetise cette relation en disant que Dieu fait sortir les croyants des tenebres vers la lumiere, tandis que ceux qui denient sont tires de la lumiere vers les tenebres. Le parcours d'Adam dans les versets 35-37 illustre ce schema : la transgression de l'interdit le plonge dans les tenebres (v35), la descente le met dans l'epreuve (v36), et les paroles le ramenent vers la lumiere (v37). La sourate utilise la metaphore lumiere/tenebres comme un fil conducteur que le recit d'Adam inaugure."
  ],

  // ============================================================
  // VWA 1243 [xrj] v36 "Sortie/Émergence" — 1 axe short
  // ============================================================
  [1243, "Sortie/Émergence", "axe3_sourate",
    " En 2:257, Dieu fait sortir les croyants des tenebres vers la lumiere — une sortie positive. En 2:84 et 2:85, les fils d'Isra'il font sortir les leurs de leurs maisons — une sortie violente. Le verset 36 presente une sortie negative : etre expulse du jardin. La sourate explore donc les trois types de sortie : la sortie liberatrice, la sortie violente, et la sortie comme consequence d'une transgression. Chaque type de sortie revele la nature du rapport entre l'etre humain et ses limites."
  ],

  // ============================================================
  // VWA 1244 [kwn] v36 "Être/Existence" — 3 axes short
  // ============================================================
  [1244, "Être/Existence", "axe3_sourate",
    " Dans le verset 36, kanu fihi (ils etaient dedans) decrit l'etat anterieur a la sortie — un etat de bien-etre dans le jardin qui a ete perdu. Ce usage de kana pour decrire un etat revolu et regrette se retrouve dans la sourate quand elle evoque les situations passees des peuples : ils etaient guids et se sont egares. Le verbe d'etat transforme le jardin en souvenir, en condition perdue que la vie terrestre cherche a retrouver."
  ],
  [1244, "Être/Existence", "axe4_coherence",
    " En 7:24, le meme recit utilise une formule similaire : la terre sera votre lieu de residence. Le Coran passe de l'etat (kana fihi = ils etaient dedans) a un nouvel etat (la terre comme demeure). Cette transition entre deux etats marque le basculement central du recit. Le verbe d'etat n'est pas seulement grammatical — il porte le poids existentiel de la perte d'un etat premier et de l'entree dans un etat nouveau."
  ],
  [1244, "Être/Existence", "axe5_frequence",
    " L'etat perdu n'est pas une nostalgie sterile mais un moteur d'action : le khalifa sait ce qu'il a perdu et cela oriente sa mission. La conscience de l'etat anterieur (le jardin) donne un horizon a la mission terrestre — la justice, la civilisation et la prevention de la corruption visent a recreer les conditions d'un etat juste. Le verbe d'etat rappelle que la mission du khalifa n'est pas abstraite mais ancrée dans l'experience d'une perte concrete."
  ],

  // ============================================================
  // VWA 1247 [bed] v36 "Partie/Division" — 1 axe short
  // ============================================================
  [1247, "Partie/Division", "axe4_coherence",
    " Le fait que le Coran repete la meme formule mot pour mot en 7:24 et 20:123 montre que la division est un element constitutif de la condition terrestre, pas un accident. La formule ba'dukum li-ba'din aduww (les uns pour les autres ennemis) definit la relation entre les etres descendus : la division precede toute organisation sociale. Le khalifa devra construire la civilisation malgre cette division originelle — la justice consiste precisement a surmonter cette inimitie structurelle."
  ],

  // ============================================================
  // VWA 1248 [edw] v36 "Transgression/Excès" — 5 axes short
  // ============================================================
  [1248, "Transgression/Excès", "axe1_verset",
    " Cependant, le verset ne decrit pas l'acte de transgression mais son resultat : la relation d'inimitie entre les descendants. Le mot aduww (ennemi) est le terme employe, et il vient de la racine e-d-w qui couvre a la fois l'hostilite et la transgression. Ici, le sens d'hostilite domine car il s'agit de decrire un etat relationnel (les uns ennemis des autres) et non un acte ponctuel de depassement des limites."
  ],
  [1248, "Transgression/Excès", "axe2_voisins",
    " Le verset 35 posait l'interdit (ne vous approchez pas de l'arbre), le verset 36 montre les consequences de la transgression de cet interdit. La transgression est la cause, l'hostilite est l'effet. Les versets voisins forment une chaine causale : interdit → transgression → glissement → sortie → hostilite. La transgression se situe en amont de l'hostilite dans cette sequence narrative."
  ],
  [1248, "Transgression/Excès", "axe3_sourate",
    " Mais dans le verset 36, le mot aduww est utilise pour decrire le resultat de la descente, pas l'acte de transgression lui-meme. La sourate distingue entre la transgression comme acte (2:178, 2:190, 2:229) et l'inimitie comme etat (2:36, 2:168, 2:208). Ici c'est l'etat d'inimitie qui est decrit, pas l'acte de depassement des limites."
  ],
  [1248, "Transgression/Excès", "axe4_coherence",
    " Mais le Coran distingue les deux usages : aduww comme adjectif (ennemi) et 'udwan comme nom d'action (transgression). En 2:36, c'est la forme adjectivale qui est utilisee — elle decrit un attribut permanent, pas un acte ponctuel. La transgression (le depassement des limites) est l'acte qui mene a l'inimitie, mais le texte ici parle du resultat, pas de la cause. La distinction grammaticale confirme que le sens retenu d'hostilite est plus precis."
  ],
  [1248, "Transgression/Excès", "axe5_frequence",
    " La transgression est ce qui transforme une relation neutre en hostilite. Le khalifa doit comprendre que l'inimitie terrestre n'est pas une fatalite mais le resultat de transgressions repetees. En evitant la transgression, le khalifa previent l'hostilite et travaille a la civilisation. Mais dans ce verset, c'est le resultat (l'hostilite) qui est mis en avant, pas la cause (la transgression)."
  ],

  // ============================================================
  // VWA 1249 [ard] v36 "Terre/Sol" — 2 axes short
  // ============================================================
  [1249, "Terre/Sol", "axe3_sourate",
    " La terre est aussi le lieu ou le khalifa doit construire la justice et prevenir la corruption (2:30, 2:205, 2:220). Les deux dimensions de la terre — lieu de descente apres le jardin et lieu de mission pour le khalifa — se croisent dans la sourate. Le verset 36 etablit la terre comme le nouveau territoire du khalifa, avec ses defis (inimitie, temporalite, epreuve) et ses possibilites (jouissance temporaire, stabilite, retour vers Dieu)."
  ],
  [1249, "Terre/Sol", "axe4_coherence",
    " En 7:25, le Coran precise que la terre est le lieu de vie, de mort et de resurrection — un cycle complet. La terre n'est pas une punition mais un passage obligatoire avec un debut (la descente) et une fin (la resurrection). Le Coran ne presente jamais la terre comme un lieu de chatiment mais comme un lieu d'epreuve ou le khalifa exerce sa mission. La descente sur terre est un deplacement, pas une degradation."
  ],

  // ============================================================
  // VWA 1250 [qrr] v36 "Stabilité/Établissement" — 1 axe short
  // ============================================================
  [1250, "Stabilité/Établissement", "axe3_sourate",
    " Le theme de l'etablissement relie le jardin (premier lieu) a la terre (deuxieme lieu). Le verset 36 utilise mustaqarr (lieu d'etablissement) pour definir la terre comme le nouveau chez-soi de l'humanite. Contrairement au jardin qui etait un don, la terre est un lieu ou la stabilite doit etre construite — par la justice, les lois et la civilisation que la sourate detaillera dans ses prochains passages."
  ],

  // ============================================================
  // VWA 1251 [mte] v36 "Bien/Provision" — 5 axes short
  // ============================================================
  [1251, "Bien/Provision", "axe1_verset",
    " Le verset mentionne mustaqarr (lieu d'etablissement) et mata' (jouissance) — les deux termes definissent la vie terrestre. Les provisions sont la dimension materielle de cet etablissement, tandis que le profit est la dimension plus large de la jouissance temporaire. Le sens de provision est compatible mais plus restreint que le sens de profit qui englobe tous les types de jouissance, pas seulement la nourriture ou les biens."
  ],
  [1251, "Bien/Provision", "axe2_voisins",
    " Le verset 35 mentionnait la nourriture du jardin (kula minha raghadan = mangez-en librement). Le verset 36 remplace cette abondance par un mata' ila hinin (jouissance jusqu'a un moment). Les provisions terrestres sont donc la version bornee de l'abondance illimitee du jardin. Le passage du verset 35 au verset 36 marque la transition de l'illimite au limite."
  ],
  [1251, "Bien/Provision", "axe3_sourate",
    " La sourate reviendra sur les provisions terrestres dans les recits des fils d'Isra'il : la manne et les cailles (2:57), les produits de la terre (2:61). Ces provisions sont toujours presentees comme temporaires et conditionnelles — le peuple les recoit tant qu'il respecte les regles. Le modele du jardin (provisions liees au respect de l'interdit) se reproduit dans le recit historique."
  ],
  [1251, "Bien/Provision", "axe4_coherence",
    " Le Coran utilise rizq (provision) dans de nombreux versets pour decrire ce que Dieu accorde (2:3, 2:22, 2:25, 2:57, 2:60, 2:172, 2:212, 2:254). La provision (rizq) et la jouissance (mata') sont distinctes : le rizq vient de Dieu directement, le mata' est ce dont on profite temporairement. Le sens de provision pour mte se rapproche de rizq mais n'est pas identique — mte insiste sur la temporalite du profit."
  ],
  [1251, "Bien/Provision", "axe5_frequence",
    " Le khalifa gere les provisions terrestres comme un depot temporaire dont il est responsable. La gestion juste des biens et des provisions fait partie de sa mission de prevention de la corruption. Le verset 36 pose que les provisions sont limitees dans le temps (ila hinin) — le khalifa ne possede rien en permanence, il profite temporairement de ce qui lui est confie. Cette conscience de la temporalite oriente la mission vers la justice distributive."
  ],
  [1251, "Jouissance/Profit", "axe4_coherence",
    " Le caractere temporaire du mata' est confirme dans les versets qui le comparent directement a l'akhira : en 3:14 le Coran dit que la vie ici-bas est un mata' ephemere, en 3:185 il dit que cette vie n'est que jouissance illusoire (mata' al-ghurur). Le mot mata' porte en lui-meme l'idee que la jouissance terrestre est reelle mais bornee. Le verset 36 pose cette limite des le debut du sejour terrestre — la jouissance est la, mais elle a une fin."
  ],

  // ============================================================
  // VWA 1252 [hyn] v36 "Temps/Durée" — 2 axes short
  // ============================================================
  [1252, "Temps/Durée", "axe2_voisins",
    " Le passage des versets 35-37 suit un arc temporel precis : le jardin (sans mention de temps), la terre (jusqu'a un moment), le retour vers Dieu (hors du temps). L'introduction du temps au verset 36 marque la condition terrestre comme fondamentalement differente de la condition du jardin. Le ila hinin (jusqu'a un temps) fait de la temporalite le trait distinctif de la vie sur terre."
  ],
  [1252, "Temps/Durée", "axe3_sourate",
    " Le temps dans al-Baqarah est toujours une dimension de l'epreuve : le temps de la patience (2:155), le temps du jeune (2:183-187), le temps du pelerinage (2:197), le temps du deuil (2:234). Le ila hinin du verset 36 inaugure cette dimension temporelle que la sourate declinera dans les obligations et les epreuves. La vie terrestre est bornee, et c'est dans cette borne que le khalifa doit accomplir sa mission."
  ],

  // ============================================================
  // VWA 1253 [lqy] v37 "Rencontre/Face à face" — 1 axe short
  // ============================================================
  [1253, "Rencontre/Face à face", "axe3_sourate",
    " La forme talaqqa (recevoir) est une forme V qui implique un effort de reception — Adam ne recoit pas passivement, il va vers les paroles et les accueille. Cette reception active s'inscrit dans le theme de la sourate ou les croyants recoivent le Livre et doivent activement s'en saisir. Le verset 37 montre que meme apres la transgression, la reception active de la guidance reste possible. Ce schema (transgression → reception de paroles → retour) sera le modele que la sourate proposera aux fils d'Isra'il."
  ],

  // ============================================================
  // VWA 1254 [rbb] v37 "Croissance/Augmentation" — 5 axes short
  // ============================================================
  [1254, "Croissance/Augmentation", "axe1_verset",
    " Mais le mot rabbih (son Maitre) utilise la forme possessive — c'est le Maitre de Adam, pas un processus de croissance. La structure min rabbihi (de la part de son Maitre) place rabb dans le role d'emetteur des paroles, pas dans le role d'un processus de croissance. La croissance est une dimension de la relation Maitre-creature mais n'est pas le sens active dans cette phrase ou rabb designe l'autorite qui emet les paroles."
  ],
  [1254, "Croissance/Augmentation", "axe2_voisins",
    " Cependant, le recit des versets 30-37 ne met pas l'accent sur la croissance d'Adam mais sur la relation d'autorite : Dieu decide (v30), enseigne (v31), ordonne (v34-35), et pardonne (v37). Le fil conducteur est celui de l'autorite qui guide, pas celui de la croissance qui se deploie. Les paroles du verset 37 sont donnees par l'autorite (min rabbihi), elles ne poussent pas d'elles-memes."
  ],
  [1254, "Croissance/Augmentation", "axe3_sourate",
    " La sourate utilise rabb dans le sens de Maitre dans la grande majorite de ses occurrences : rabbukum (votre Maitre) en 2:21, rabbi (mon Maitre) en 2:126, 2:131, 2:258. Le sens de croissance est etymologiquement premier mais le contexte coranique privilegie systematiquement le sens d'autorite bienveillante. La sourate ne parle jamais de croissance directement quand elle utilise rabb."
  ],
  [1254, "Croissance/Augmentation", "axe4_coherence",
    " Le lien etymologique entre rabb et tarbiya (education) est reel mais le Coran ne joue pas explicitement sur ce lien dans ses usages de rabb. Le mot est toujours utilise comme titre d'autorite (Maitre, Seigneur) et non comme processus (celui qui fait grandir). La croissance reste en arriere-plan semantique sans etre activee dans le texte."
  ],
  [1254, "Croissance/Augmentation", "axe5_frequence",
    " La croissance du khalifa est un theme reel de la sourate mais elle est decrite par d'autres moyens (enseignement, epreuves, lois) et non par le mot rabb lui-meme. Rabb designe celui qui supervise la croissance, pas la croissance elle-meme. Le khalifa grandit sous la tutelle de son rabb, mais le mot rabb pointe vers la tutelle, pas vers la croissance. La mission du khalifa s'inscrit dans une relation d'autorite bienveillante, pas dans un processus autonome de croissance."
  ],

  // ============================================================
  // VWA 1254 [rbb] v37 "Éducation/Accompagnement" — 5 axes short
  // ============================================================
  [1254, "Éducation/Accompagnement", "axe1_verset",
    " Mais le verset 37 ne decrit pas un acte educatif — il decrit la reception de paroles et l'acceptation du retour. Le mot rabbih (son Maitre) est le sujet de l'acceptation (fa-taba alayhi), pas un processus d'education. L'education est une dimension de la relation Maitre-creature mais n'est pas le sens premier du mot dans ce contexte precis ou rabb fonctionne comme un titre d'autorite."
  ],
  [1254, "Éducation/Accompagnement", "axe2_voisins",
    " L'enseignement des noms (v31) est un acte educatif, mais il utilise le verbe allama (enseigner), pas le mot rabb. La structure du passage distingue l'acte educatif (enseigner, avec allama) de l'autorite educatrice (rabb). Le recit presente Dieu comme Maitre qui enseigne, mais le mot rabb porte le sens de Maitre, tandis que l'acte d'enseigner est porte par un autre verbe."
  ],
  [1254, "Éducation/Accompagnement", "axe3_sourate",
    " La sourate al-Baqarah est certes educative dans son ensemble, mais elle utilise rabb comme titre d'autorite dans les invocations et les ordres, pas comme processus educatif. L'education dans la sourate passe par les recits, les lois et les epreuves — pas par le mot rabb lui-meme. Le sens d'education est en toile de fond mais n'est pas active quand le texte utilise rabb."
  ],
  [1254, "Éducation/Accompagnement", "axe4_coherence",
    " Le Coran presente la relation rabb-abd comme une relation d'autorite bienveillante ou le Maitre guide, corrige et protege. Le volet educatif de cette relation est reel mais il est porte par les actions du rabb (enseigner, reveler, legiférer), pas par le mot rabb lui-meme. Quand le Coran veut parler d'education, il utilise des verbes specifiques comme allama, hadā, rabba — le titre rabb est plus large qu'education."
  ],
  [1254, "Éducation/Accompagnement", "axe5_frequence",
    " Le khalifa est en formation permanente, mais cette formation est le fait de l'autorite du rabb, pas du mot rabb lui-meme. La mission du khalifa necessite un Maitre qui eduque, mais le mot rabb designe ce Maitre dans sa globalite (autorite, soin, education, protection), pas seulement dans sa dimension educative. Reduire rabb a « educateur » serait restreindre le sens la ou le Coran l'utilise dans sa plenitude."
  ],

  // ============================================================
  // VWA 1254 [rbb] v37 "Seigneurie/Autorité bienveillante" — 1 axe short
  // ============================================================
  [1254, "Seigneurie/Autorité bienveillante", "axe3_sourate",
    " La sourate utilise rabbukum (votre Maitre) comme interpellation recurrente, notamment dans les passages legislatifs (2:21, 2:49, 2:105, 2:198). Le Maitre dans la sourate est celui qui donne les lois, accorde les bienfaits et demande des comptes. Ce triple role (legislateur, bienfaiteur, juge) est la definition meme de l'autorite bienveillante. Le verset 37 montre la dimension de bienveillance : le Maitre accepte le retour de celui qui a transgresse, il ne le rejette pas."
  ],

  // ============================================================
  // VWA 1255 [klm] v37 "Parole/Discours" — 1 axe short
  // ============================================================
  [1255, "Parole/Discours", "axe4_coherence",
    " Le contenu de ces paroles (l'aveu en 7:23) montre que les kalimat ne sont pas une simple formule mais un acte de reconnaissance : reconnaitre le tort, demander le pardon et la misericorde, et accepter la possibilite de la perte. Le Coran fait des paroles un instrument de retour — elles ne sont pas magiques mais performatives, elles realisent quelque chose quand elles sont dites sincerement. Ce modele se retrouve dans la sourate ou les paroles justes (2:83 parlez bien aux gens) et les paroles fausses (2:79 ceux qui ecrivent le Livre de leurs mains) determinent le destin."
  ],

  // ============================================================
  // VWA 1257 [rhm] v37 "Miséricorde/Tendresse" — 1 axe short
  // ============================================================
  [1257, "Miséricorde/Tendresse", "axe4_coherence",
    " Le couple tawwab-rahim definit un processus complet : le retour (tawwab = celui qui revient constamment vers Sa creature) est suivi de la misericorde (rahim = celui qui prend soin avec tendresse). Ce n'est pas un pardon froid mais un retour suivi de soin. Le Coran distingue rahman (misericorde universelle) et rahim (misericorde specifique, orientee vers ceux qui reviennent). En 2:37, c'est rahim qui est utilise — la misericorde est dirigee specifiquement vers Adam qui a recu les paroles et est revenu."
  ],

  // ============================================================
  // VWA 1259 [smw] v31 "Nom/Identification" — 1 axe short (axe3)
  // ============================================================
  [1259, "Nom/Identification", "axe3_sourate",
    " L'enseignement des noms est la premiere marque de distinction d'Adam dans la sourate. Ce savoir des noms sera oppose a l'ignorance des fils d'Isra'il qui trahissent le savoir (2:75, 2:146). La sourate construit un contraste entre Adam qui recoit le savoir des noms et le valorise, et les peuples suivants qui recoivent des Livres mais les deforment. Le nom comme acte d'identification est le fondement du savoir — connaitre le nom, c'est connaitre la chose."
  ],

  // ============================================================
  // VWA 1267 [qwl] v32 "Parole/Énonciation" — 1 axe short
  // ============================================================
  // Note: concept name may have accent on E - we try both
  [1267, "Parole/Énonciation", "axe3_sourate",
    " Chaque dialogue de la sourate a une fonction specifique : le dialogue Dieu-anges (2:30-34) etablit la legitimite du khalifa, le dialogue Dieu-Adam (2:35-39) pose les regles et les consequences, le dialogue Dieu-fils d'Isra'il (2:40-) rappelle les engagements. Le qalu des anges au verset 32 est une parole d'humilite — ils reconnaissent les limites de leur savoir. Cette humilite epistemique contraste avec l'arrogance d'Iblis (v34) et la deformation des paroles par les fils d'Isra'il (2:75, 2:79)."
  ],

  // ============================================================
  // VWA 1268 [sbh] v32 "Glorification/Louange" — 1 axe short
  // ============================================================
  [1268, "Glorification/Louange", "axe4_coherence",
    " En 2:32, les anges disent subhanaka apres avoir reconnu qu'ils ne savent que ce que Dieu leur a enseigne. Ce n'est pas une simple louange — c'est une declaration d'incompletude. Les anges placent Dieu au-dessus de toute imperfection pour signifier qu'ils avaient tort de questionner Son choix de faire Adam khalifa. Le subhanaka est donc un acte d'humilite intellectuelle, pas seulement une formule de louange. Ce sens se retrouve en 21:22 ou subhana declare Dieu au-dessus de ce qu'ils decrivent — toujours en reponse a une attribution insuffisante."
  ],

  // ============================================================
  // VWA 1274 [elm] v33 "Savoir/Connaissance" — 1 axe short
  // ============================================================
  [1274, "Savoir/Connaissance", "axe3_sourate",
    " Le verset 33 utilise a'lamu (je sais) dans la forme divine — Dieu declare savoir ce qui est cache et ce qui est montre. Ce savoir divin total est le fondement de la legitimite du khalifa : Dieu sait ce que les anges ignorent. La sourate declinera cette opposition entre le savoir divin et le savoir humain : les fils d'Isra'il savent mais cachent (2:146), certains pretendent savoir mais ne savent pas (2:13, 2:80). Le savoir est un enjeu de pouvoir et de responsabilite dans toute la sourate."
  ],

  // ============================================================
  // VWA 1278 [kwn] v33 "Être/Existence" — 1 axe short (axe4)
  // ============================================================
  // Note: concept name may have accent on E
  [1278, "Être/Existence", "axe4_coherence",
    " Le Coran utilise cette formule (kuntum taktumuna / ma kuntum taktumun) comme un rappel recurrent que les actes interieurs ne sont pas caches pour Dieu. En 2:33, ce rappel intervient juste apres la demonstration du savoir d'Adam — Dieu montre qu'Il sait non seulement les noms (savoir objectif) mais aussi ce que les creatures cachent (savoir des intentions). Le couplage du savoir des noms et du savoir des intentions fait du verset 33 une double demonstration de l'omniscience divine."
  ],

];

async function main() {
  let totalEnriched = 0;
  let totalFailed = 0;
  const vwaIds = [...new Set(enrichments.map(e => e[0]))];

  console.log(`Loading ${vwaIds.length} VWAs from Supabase...`);

  const { data: vwas, error } = await sb
    .from('verse_word_analyses')
    .select('id, analysis_axes')
    .in('id', vwaIds);

  if (error) {
    console.error('Failed to load VWAs:', error);
    process.exit(1);
  }

  const vwaMap = {};
  for (const vwa of vwas) {
    vwaMap[vwa.id] = vwa;
  }

  // Group enrichments by VWA id
  const byVwa = {};
  for (const [id, concept, axe, text] of enrichments) {
    if (!byVwa[id]) byVwa[id] = [];
    byVwa[id].push({ concept, axe, text });
  }

  for (const idStr of Object.keys(byVwa)) {
    const id = parseInt(idStr);
    const vwa = vwaMap[id];
    if (!vwa) {
      console.error(`VWA ${id} not found in database!`);
      totalFailed += byVwa[id].length;
      continue;
    }

    const axes = JSON.parse(JSON.stringify(vwa.analysis_axes));
    let modified = 0;

    for (const { concept, axe, text } of byVwa[id]) {
      // Try exact concept name first
      let conceptObj = axes.concepts?.[concept];

      // If not found, try with/without accents
      if (!conceptObj) {
        const conceptNames = Object.keys(axes.concepts || {});
        const normalized = concept.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        const match = conceptNames.find(n =>
          n.normalize('NFD').replace(/[\u0300-\u036f]/g, '') === normalized
        );
        if (match) {
          conceptObj = axes.concepts[match];
          console.log(`  VWA ${id}: matched "${concept}" -> "${match}"`);
        }
      }

      if (!conceptObj) {
        console.error(`  VWA ${id}: concept "${concept}" not found! Available: ${Object.keys(axes.concepts || {}).join(', ')}`);
        totalFailed++;
        continue;
      }

      if (!conceptObj[axe]) {
        console.error(`  VWA ${id} "${concept}": ${axe} not found!`);
        totalFailed++;
        continue;
      }

      const before = conceptObj[axe].split(/[.!?]+/).filter(s => s.trim().length > 0).length;
      conceptObj[axe] = conceptObj[axe] + text;
      const after = conceptObj[axe].split(/[.!?]+/).filter(s => s.trim().length > 0).length;

      console.log(`  VWA ${id} "${concept}" ${axe}: ${before} -> ${after} sentences`);
      modified++;
    }

    if (modified > 0) {
      const { error: updateError } = await sb
        .from('verse_word_analyses')
        .update({ analysis_axes: axes })
        .eq('id', id);

      if (updateError) {
        console.error(`  VWA ${id}: UPDATE FAILED:`, updateError);
        totalFailed += modified;
      } else {
        console.log(`  VWA ${id}: ${modified} axes updated successfully`);
        totalEnriched += modified;
      }
    }
  }

  console.log(`\n=== DONE ===`);
  console.log(`Total axes enriched: ${totalEnriched}`);
  console.log(`Total failures: ${totalFailed}`);
}

main().catch(e => { console.error(e); process.exit(1); });
