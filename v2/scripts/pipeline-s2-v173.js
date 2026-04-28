const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// =====================================================
// PIPELINE SOURATE 2 — VERSET 173
// verse_id=180, analysis_id=540
// "Il vous a seulement interdit la bete morte, le sang,
//  la chair de porc, et ce sur quoi un autre nom que celui
//  de Dieu a ete invoque. Mais celui qui est contraint sans
//  desir ni transgression, nul peche sur lui. Dieu est
//  Pardonneur, Misericordieux."
// Aliments interdits — exception de necessite
// =====================================================

const verseData = {
  173: {
    verse_id: 180,
    analysis_id: 540,
    translation_arab: "Il vous a seulement interdit la bete morte, le sang, la chair de porc, et ce sur quoi a ete invoque un autre que Dieu. Mais quiconque est contraint, sans desir ni transgression, nul peche sur lui. Dieu est Pardonneur, Misericordieux.",
    full_translation: "Il ne vous a interdit que la bete morte, le sang, la chair du porc, et ce qui a ete immole sous l'invocation d'un autre que Dieu. Mais quiconque est contraint sans etre anime de desir ni d'exces, nul peche ne sera sur lui. Certes Dieu est Pardonneur et Misericordieux.",
    translation_explanation: `§DEMARCHE§
Le verset enumere quatre categories d'aliments interdits puis pose immediatement l'exception de necessite. La structure est bipartite : interdiction (premiere moitie) puis levee de l'interdiction en cas de contrainte (deuxieme moitie). Le verbe **harrama** est un accompli 3MS de la forme II de la racine h-r-m. Le Lane's donne : interdire, declarer illicite, rendre sacre. La forme II intensifie — l'interdiction est deliberee et definitive. Le pronom suffixe « kum » montre que l'interdiction est adressee a la communaute entiere. Le mot **innama** (seulement) restreint l'interdiction aux quatre categories qui suivent — ce qui n'est pas mentionne n'est pas interdit. Cette restriction est fondamentale : le principe est la permission, l'exception est l'interdiction. Le nom **al-maytata** est un nom feminin singulier de la racine m-w-t. Le Lane's donne : ce qui est mort de soi-meme, la charogne, la bete crevee. La maytata est l'animal mort sans avoir ete abattu rituellement — sa mort n'est pas provoquee par l'homme selon les regles prescrites. Le nom **ad-dama** est un nom accusatif de la racine d-m-w. Le Lane's donne : sang, sang repandu. Le sang est interdit a la consommation — le verset 6:145 precise « sang repandu » (masfuhan), ce qui exclut le sang residuel dans la viande. Le nom **lahma** est un nom accusatif de la racine l-h-m. Le Lane's donne : chair, viande, ce qui recouvre les os. Le lahm est la partie charnue de l'animal — ici il s'agit specifiquement de la chair du porc (lahma al-khinziri). Le nom **al-khinziri** est un nom genitif de la racine kh-n-z-r. Le Lane's donne : porc, cochon. L'article defini (al-) generalise — tout porc est concerne, pas un porc en particulier. Le verbe **uhilla** est un accompli passif 3MS de la forme IV de la racine h-l-l. Le Lane's donne : elever la voix, invoquer, declarer licite. La forme IV passive signifie « ce sur quoi a ete invoque (un autre que Dieu) ». L'invocation est l'acte de prononcer un nom au moment de l'abattage — si un autre nom que celui de Dieu est prononce, la viande devient illicite. Le nom **ghayri** est un nom genitif de la racine gh-y-r. Le Lane's donne : autre que, different de. Le ghayr marque l'exclusion — l'invocation d'un autre que Dieu est ce qui rend l'abattage invalide. Le nom **allahi** est le nom propre divin au genitif. Le verset pose que l'abattage doit etre fait au nom de Dieu — l'invocation d'une autre divinite rend la viande illicite. Le verbe **idturra** est un accompli passif 3MS de la forme VIII de la racine d-r-r. Le Lane's donne : etre contraint, etre force par la necessite. La forme VIII passive indique que la contrainte est subie, pas choisie — la personne est forcee par les circonstances. Le nom **ghayra** est un nom accusatif de la racine gh-y-r. Le Lane's donne : autre que, sans. Ici ghayr fonctionne comme une negation circonstancielle — sans etre anime de desir. Le nom **baghin** est un nom actif (participe) de la racine b-gh-y. Le Lane's donne : celui qui transgresse, qui cherche au-dela de ce qui est permis, qui desire excessivement. Le baghi est celui qui va au-dela des limites — dans ce contexte, celui qui mange l'interdit par desir et non par necessite. La negation « ghayr baghin » montre que la levee de l'interdiction ne s'applique qu'a celui qui n'est pas anime de desir. Le nom **adin** est un nom actif (participe) de la racine '-d-w. Le Lane's donne : celui qui transgresse, qui depasse les limites, l'agresseur. Le 'adi est celui qui va au-dela de la mesure — dans ce contexte, celui qui consomme au-dela de la quantite necessaire pour survivre. La double negation « ghayr baghin wa-la 'adin » pose deux conditions : ne pas desirer l'interdit et ne pas depasser la quantite necessaire. Le nom **ithma** est un nom accusatif de la racine a-th-m. Le Lane's donne : peche, faute, ce qui merite une sanction. Le ithm est l'acte qui entraine une consequence negative — ici la negation « fa-la ithma 'alayhi » affirme que nul peche n'est impute a celui qui mange l'interdit par necessite. Le nom **ghafurun** est un adjectif intensif de la racine gh-f-r. Le Lane's donne : celui qui pardonne abondamment, qui couvre les fautes. Le ghafur est une forme intensive — Dieu ne pardonne pas une fois mais pardonne constamment et completement. Le pardon divin couvre la transgression faite par necessite. Le nom **rahimun** est un adjectif intensif de la racine r-h-m. Le Lane's donne : misericordieux, celui qui fait misericorde. Le rahim est une forme intensive — la misericorde de Dieu est permanente et active. La paire ghafur-rahim ferme le verset en montrant que l'exception de necessite est fondee sur la nature meme de Dieu : Il pardonne et fait misericorde.

§JUSTIFICATION§
**interdit** — Le sens retenu est « interdire ». Le verbe harrama designe l'acte de rendre illicite. L'alternative « rendre sacre » est ecartee car le contexte est l'interdiction alimentaire — les aliments enumeres ne sont pas sacres mais illicites.

**morte** — Le sens retenu est « morte/charogne ». Le nom al-maytata designe la bete crevee sans abattage rituel. L'alternative « mort spirituelle » est ecartee car le contexte est alimentaire — il s'agit de la mort physique de l'animal.

**sang** — Le sens retenu est « sang ». Le nom ad-dama designe le sang repandu. L'alternative « parente/lignee » est un sens secondaire de la racine — le contexte est l'interdiction alimentaire, pas les liens de parente.

**chair** — Le sens retenu est « chair/viande ». Le nom lahma designe la partie charnue. L'alternative « engloutissement » est le sens etymologique de l-h-m — ici le contexte precise la chair d'un animal specifique (le porc).

**porc** — Le sens retenu est « porc ». Le nom al-khinziri designe l'animal. Le sens d'interdit est un sens derive — le porc est l'animal interdit par excellence mais le mot designe d'abord l'animal lui-meme.

**invoque** — Le sens retenu est « invoquer/elever la voix ». Le verbe uhilla designe l'acte de prononcer un nom a haute voix lors de l'abattage. L'alternative « rendre licite » est ecartee car le verbe est au passif — ce n'est pas l'acte de rendre licite mais l'acte d'invoquer un nom.

**autre que** (1ere occurrence) — Le sens retenu est « autre/exclusion ». Le nom ghayri marque l'exclusion — tout autre que Dieu. L'alternative « changement » est ecartee car le contexte est la distinction entre Dieu et les faux dieux.

**Dieu** (1ere occurrence) — Le nom propre divin. Il designe le Createur unique — l'invocation doit etre faite en Son nom exclusivement.

**contraint** — Le sens retenu est « etre contraint par la necessite ». Le verbe idturra est au passif de la forme VIII de d-r-r — la contrainte est subie, pas choisie. L'alternative « nuire » est le sens premier de la racine mais la forme VIII passive donne le sens de « etre force par les circonstances ».

**sans** (2e occurrence de ghayr) — Le sens retenu est « sans/autre que ». Le nom ghayra fonctionne comme negation circonstancielle — sans etre dans tel etat.

**desir** — Le sens retenu est « transgression/recherche au-dela des limites ». Le nom baghin designe celui qui va au-dela du permis. L'alternative « recherche/quete » est le sens premier de b-gh-y mais le contexte moral impose le sens de transgression — chercher au-dela de ce qui est permis.

**exces** — Le sens retenu est « transgression/exces ». Le nom adin designe celui qui depasse la mesure. L'alternative « hostilite » est un sens derive — le contexte est le depassement de la quantite necessaire, pas l'agression envers autrui.

**peche** — Le sens retenu est « peche/faute ». Le nom ithma designe l'acte reprehensible. Le concept « Accomplissement/Plenitude » dans la base de donnees semble etre une erreur de classification mais il est conserve tel quel conformement aux instructions.

**Dieu** (2e occurrence) — Le nom propre divin. Repete pour introduire les attributs de cloture (Pardonneur, Misericordieux).

**Pardonneur** — Le sens retenu est « pardon/couverture ». Le nom ghafurun est un adjectif intensif — Dieu pardonne abondamment. L'alternative « cacher » est le sens premier de gh-f-r (couvrir, cacher) mais l'intensif ghafur donne le sens de pardon abondant.

**Misericordieux** — Le sens retenu est « misericorde/tendresse ». Le nom rahimun est un adjectif intensif — la misericorde divine est permanente. L'alternative « matrice/uterus » est le sens concret de r-h-m mais l'adjectif rahim designe la misericorde active.

§CRITIQUE§
Les traductions courantes rendent ce verset de facon tres similaire. La principale divergence concerne le verbe « uhilla ». Certains traducteurs donnent « ce qui a ete immole sous l'invocation d'un autre que Dieu » — le mot « immole » est un ajout interpretatif car le verbe uhilla signifie « elever la voix / invoquer » et ne contient pas en lui-meme le sens d'immolation. Notre traduction garde « ce sur quoi a ete invoque un autre que Dieu » pour rester fidele a la racine h-l-l. Le mot « innama » (seulement) est parfois rendu par « certes » ou « en verite » ce qui perd la nuance restrictive — « seulement » est plus fidele car il montre que l'interdiction est limitee a ces quatre categories.`,
    segments: [
      { fr: "seulement", phon: "innama", arabic: "\u0625\u0650\u0646\u0651\u064e\u0645\u064e\u0627", is_particle: true, position: 0 },
      { fr: "Il vous a interdit", pos: "verbe", phon: "harrama", arabic: "\u062d\u064e\u0631\u0651\u064e\u0645\u064e", word_key: "hrm", is_particle: false, sense_retenu: "interdire", position: 1 },
      { fr: "sur vous", phon: "alaykum", arabic: "\u0639\u064e\u0644\u064e\u064a\u0652\u0643\u064f\u0645\u064f", is_particle: true, position: 2 },
      { fr: "la bete morte", pos: "nom", phon: "al-maytata", arabic: "\u0671\u0644\u0652\u0645\u064e\u064a\u0652\u062a\u064e\u0629\u064e", word_key: "mwt", is_particle: false, sense_retenu: "mort", position: 3 },
      { fr: "et le sang", pos: "nom", phon: "wa-d-dama", arabic: "\u0648\u064e\u0671\u0644\u062f\u0651\u064e\u0645\u064e", word_key: "dmw", is_particle: false, sense_retenu: "sang", position: 4 },
      { fr: "et la chair", pos: "nom", phon: "wa-lahma", arabic: "\u0648\u064e\u0644\u064e\u062d\u0652\u0645\u064e", word_key: "lhm", is_particle: false, sense_retenu: "chair", position: 5 },
      { fr: "du porc", pos: "nom", phon: "al-khinziri", arabic: "\u0671\u0644\u0652\u062e\u0650\u0646\u0632\u0650\u064a\u0631\u0650", word_key: "xnzr", is_particle: false, sense_retenu: "porc", position: 6 },
      { fr: "et ce qui", phon: "wa-ma", arabic: "\u0648\u064e\u0645\u064e\u0627\u0653", is_particle: true, position: 7 },
      { fr: "a ete invoque", pos: "verbe", phon: "uhilla", arabic: "\u0623\u064f\u0647\u0650\u0644\u0651\u064e", word_key: "hll", is_particle: false, sense_retenu: "invoquer", position: 8 },
      { fr: "dessus", phon: "bihi", arabic: "\u0628\u0650\u0647\u0650\u06DF", is_particle: true, position: 9 },
      { fr: "pour un autre que", pos: "nom", phon: "li-ghayri", arabic: "\u0644\u0650\u063a\u064e\u064a\u0652\u0631\u0650", word_key: "ghyr", is_particle: false, sense_retenu: "autre que", position: 10 },
      { fr: "Dieu", pos: "nom", phon: "allahi", arabic: "\u0671\u0644\u0644\u0651\u064e\u0647\u0650", word_key: "alh", is_particle: false, sense_retenu: "Dieu", position: 11 },
      { fr: "mais quiconque", phon: "fa-mani", arabic: "\u0641\u064e\u0645\u064e\u0646\u0650", is_particle: true, position: 12 },
      { fr: "est contraint", pos: "verbe", phon: "idturra", arabic: "\u0671\u0636\u0652\u0637\u064f\u0631\u0651\u064e", word_key: "drr", is_particle: false, sense_retenu: "etre contraint", position: 13 },
      { fr: "sans etre", pos: "nom", phon: "ghayra", arabic: "\u063a\u064e\u064a\u0652\u0631\u064e", word_key: "ghyr", is_particle: false, sense_retenu: "sans", position: 14 },
      { fr: "anime de desir", pos: "nom", phon: "baghin", arabic: "\u0628\u064e\u0627\u063a\u064d", word_key: "bghy", is_particle: false, sense_retenu: "transgression", position: 15 },
      { fr: "et non", phon: "wa-la", arabic: "\u0648\u064e\u0644\u064e\u0627", is_particle: true, position: 16 },
      { fr: "d'exces", pos: "nom", phon: "adin", arabic: "\u0639\u064e\u0627\u062f\u064d", word_key: "edw", is_particle: false, sense_retenu: "exces", position: 17 },
      { fr: "alors nul", phon: "fa-la", arabic: "\u0641\u064e\u0644\u064e\u0627", is_particle: true, position: 18 },
      { fr: "peche", pos: "nom", phon: "ithma", arabic: "\u0625\u0650\u062b\u0652\u0645\u064e", word_key: "atm", is_particle: false, sense_retenu: "peche", position: 19 },
      { fr: "sur lui", phon: "alayhi", arabic: "\u0639\u064e\u0644\u064e\u064a\u0652\u0647\u0650", is_particle: true, position: 20 },
      { fr: "certes", phon: "inna", arabic: "\u0625\u0650\u0646\u0651\u064e", is_particle: true, position: 21 },
      { fr: "Dieu", pos: "nom", phon: "allaha", arabic: "\u0671\u0644\u0644\u0651\u064e\u0647\u064e", word_key: "alh", is_particle: false, sense_retenu: "Dieu", position: 22 },
      { fr: "Pardonneur", pos: "nom", phon: "ghafurun", arabic: "\u063a\u064e\u0641\u064f\u0648\u0631\u064c", word_key: "gfr", is_particle: false, sense_retenu: "pardon", position: 23 },
      { fr: "Misericordieux", pos: "adjectif", phon: "rahimun", arabic: "\u0631\u064e\u062d\u0650\u064a\u0645\u064c", word_key: "rhm", is_particle: false, sense_retenu: "misericorde", position: 24 }
    ],
    words: [
      // hrm pos=1 (verbe harrama)
      {
        word_key: "hrm", position: 1, sense_chosen: "interdire",
        analysis_axes: {
          sense_chosen: "interdire",
          concept_chosen: "Interdiction/Sacré",
          concepts: {
            "Interdiction/Sacré": {
              status: "retenu",
              senses: ["interdire", "sacré", "sanctuaire", "illicite", "priver", "respecter"],
              proof_ctx: "Le verbe harrama est un accompli 3MS de la forme II de la racine h-r-m. Le Lane's donne : interdire, declarer illicite, rendre sacre. La forme II intensifie le sens — l'interdiction est un acte delibere et definitif de la part de Dieu. Le pronom suffixe 'alaykum (sur vous) indique que l'interdiction porte sur la communaute entiere. La particule restrictive innama (seulement) qui precede le verbe montre que l'interdiction est limitee aux quatre categories enumerees. Le principe de base est la permission — l'interdiction est l'exception, pas la regle.",
              axe1_verset: "Le verbe harrama ouvre la liste des interdictions alimentaires. Le champ lexical du verset (bete morte, sang, chair, porc, invoquer) tourne autour de la nourriture et de sa licite. L'interdiction est le cadre juridique qui organise la consommation — elle separe ce qui est licite de ce qui ne l'est pas. Le verbe est au passe (accompli) car l'interdiction est un fait accompli de la part de Dieu — elle ne change pas selon les circonstances. La restriction par innama montre que Dieu n'a pas fait de l'interdiction la regle generale mais l'exception.",
              axe2_voisins: "Le verset 172 qui precede dit « mangez des bonnes choses que Nous vous avons attribuees ». Le verset 173 vient restreindre cette permission generale — mangez de tout sauf de ces quatre categories. La sequence 172-173 pose le principe (manger ce qui est bon) puis l'exception (sauf ces quatre choses). Le verset 174 enchainage sur ceux qui cachent ce que Dieu a revele — le contexte suggere que certains rajoutaient des interdictions que Dieu n'avait pas prescrites.",
              axe3_sourate: "La racine h-r-m est recurrente dans la sourate al-Baqarah. En 2:144-150, elle designe la Mosquee sacree (al-masjid al-haram). En 2:194, les mois sacres. En 2:196, le pelerinage. En 2:173, le meme sens d'interdiction s'applique aux aliments. La sourate montre que le sacre et l'interdit sont les deux faces de la meme racine — ce qui est sacre est mis a part, ce qui est interdit est exclu de l'usage commun.",
              axe4_coherence: "La racine h-r-m apparait environ 83 fois dans le Coran. En 5:3, la liste des aliments interdits est plus detaillee (bete etouffee, tuee a coups, morte d'une chute, encornee). En 6:145, le meme verset est quasi identique avec la precision « sang repandu ». En 16:115, la meme liste est repetee. Le Coran pose quatre interdictions alimentaires fondamentales qui reviennent dans plusieurs sourates — cette repetition montre leur caractere definitif et universel.",
              axe5_frequence: "Pour la mission du khalifa, l'interdiction est un cadre qui libere. En limitant l'interdit a quatre categories, Dieu libere tout le reste pour la consommation. Le khalifa doit comprendre que la loi divine n'est pas un fardeau mais une organisation — peu de choses sont interdites, tout le reste est permis. La mission du khalifa est de respecter ces limites et de ne pas en rajouter ni en retrancher."
            },
            "Respect/Vénération": {
              status: "nul",
              senses: ["vénérer", "respecter"],
              proof_ctx: "Le sens de veneration est hors sujet — le verbe harrama dans ce contexte designe l'interdiction alimentaire, pas le respect d'un lieu sacre."
            }
          }
        }
      },
      // mwt pos=3 (nom maytata)
      {
        word_key: "mwt", position: 3, sense_chosen: "mort",
        analysis_axes: {
          sense_chosen: "mort",
          concept_chosen: "Mort/Cessation",
          concepts: {
            "Mort/Cessation": {
              status: "retenu",
              senses: ["mourir", "mort", "charogne", "bête crevée", "cessation de vie"],
              proof_ctx: "Le nom al-maytata est un nom feminin singulier defini de la racine m-w-t. Le Lane's donne : ce qui est mort de soi-meme, la charogne, la bete crevee sans abattage rituel. La maytata est l'animal dont la vie a cesse sans intervention humaine reglementee. Le Lane's precise que la maytata inclut toute bete qui n'a pas ete abattue selon le rituel prescrit — qu'elle soit morte de maladie, de blessure ou de vieillesse. L'article defini al- generalise : toute bete morte, pas une bete morte en particulier.",
              axe1_verset: "Le nom al-maytata est le premier element de la liste des interdictions. Le champ lexical (sang, chair, porc) montre que la liste porte sur les categories alimentaires. La bete morte est placee en premier car c'est l'interdiction la plus evidente — un animal mort sans abattage est souille et potentiellement dangereux pour la sante. Le verset distingue la mort naturelle (maytata) de l'abattage rituel (implicite) — la difference est dans le mode de mise a mort, pas dans l'animal lui-meme.",
              axe2_voisins: "Le verset 172 invitait a manger les bonnes choses — la bete morte est la premiere chose qui ne fait pas partie des bonnes choses. Le verset 174 mentionne ceux qui cachent les revelations de Dieu — le contexte suggere que la distinction entre bete morte et bete abattue rituellement etait contestee par certains. La sequence 172-174 pose la regle, l'exception et la sanction pour ceux qui la contournent.",
              axe3_sourate: "La racine m-w-t est fondamentale dans la sourate al-Baqarah. En 2:19, la mort est celle des incredules. En 2:28, « vous etiez morts et Il vous a donne la vie ». En 2:56, « puis Nous vous avons ressuscites apres votre mort ». En 2:173, la mort concerne l'animal — c'est un usage concret et alimentaire de la racine. La sourate utilise m-w-t pour la mort physique, la mort spirituelle et la mort animale — les trois niveaux sont distincts mais relies par la meme racine.",
              axe4_coherence: "La racine m-w-t apparait environ 165 fois dans le Coran. Le mot maytata (charogne) apparait specifiquement dans les versets d'interdiction alimentaire : 2:173, 5:3, 6:145, 16:115. En 5:3, la liste est developpee avec les sous-categories (bete etouffee, tuee a coups, etc.). Le Coran utilise maytata comme terme technique designant l'animal non abattu rituellement — c'est un sens specifique au contexte alimentaire.",
              axe5_frequence: "Pour la mission du khalifa, la bete morte represente ce qui n'a pas ete consacre. L'abattage rituel est un acte de consecration — on prononce le nom de Dieu avant de prendre la vie de l'animal. La bete morte n'a pas ete consacree — elle est morte sans que l'homme ne reconnaisse la souverainete de Dieu sur la vie. Le khalifa doit comprendre que la nourriture n'est pas un simple acte biologique mais un acte de reconnaissance envers le Createur."
            },
            "Sommeil/Inactivité": {
              status: "nul",
              senses: ["sommeil", "inactivité"],
              proof_ctx: "Le sens de sommeil est hors sujet — le nom al-maytata designe la bete crevee, pas un etat d'inactivite temporaire."
            }
          }
        }
      },
      // dmw pos=4 (nom ad-dama)
      {
        word_key: "dmw", position: 4, sense_chosen: "sang",
        analysis_axes: {
          sense_chosen: "sang",
          concept_chosen: "Sang/Vie",
          concepts: {
            "Sang/Vie": {
              status: "retenu",
              senses: ["sang", "sang répandu", "vie", "vitalité"],
              proof_ctx: "Le nom ad-dama est un nom accusatif defini de la racine d-m-w. Le Lane's donne : sang, le liquide rouge qui circule dans le corps des etres vivants. Le sang est le support de la vie — sa presence dans le corps est le signe de la vie, son ecoulement est le signe de la mort. Le Lane's precise que le sang (dam) est ce qui coule des veines. Le verset 6:145 precise « sang repandu » (daman masfuhan) ce qui restreint l'interdiction au sang qui s'ecoule, pas au sang residuel dans la viande.",
              axe1_verset: "Le nom ad-dama est le deuxieme element de la liste des interdictions apres la bete morte. Le champ lexical (bete morte, chair, porc) montre une gradation : d'abord l'animal entier (bete morte), puis une substance (le sang), puis un type de chair specifique (porc). Le sang est interdit en tant que substance autonome — il ne doit pas etre consomme pur. La conjonction « wa » (et) lie les quatre categories en une liste coherente d'interdictions alimentaires.",
              axe2_voisins: "Le verset 172 parlait de « bonnes choses » (tayyibat) — le sang est le contraire des bonnes choses au niveau alimentaire. Le verset 174 mentionne ceux qui « avalent le feu dans leurs ventres » — l'image digestive fait echo a l'interdiction alimentaire du verset 173. Le sang est un liquide vital qui n'est pas destine a la consommation humaine — il est le support de la vie, pas un aliment.",
              axe3_sourate: "La racine d-m-w n'apparait pas souvent dans la sourate al-Baqarah. En 2:30, les anges disent « y placeras-Tu celui qui y seme la corruption et verse le sang ? ». En 2:84, « ne versez pas votre sang ». En 2:173, le sang est un aliment interdit. La sourate lie le sang a la violence (verser le sang) et a l'interdit alimentaire — dans les deux cas, le sang est ce qui ne doit pas etre repandu ou consomme hors de son cadre naturel.",
              axe4_coherence: "La racine d-m-w apparait environ 10 fois dans le Coran. En 6:145, le Coran precise « sang repandu » (masfuh) — cette precision restreint l'interdiction au sang qui s'ecoule et exclut le sang residuel dans la viande cuite. En 22:37, « ni leur chair ni leur sang n'atteignent Dieu, mais c'est votre piete qui L'atteint ». Le Coran montre que le sang est un element physique qui n'a de valeur que par l'intention qui l'accompagne.",
              axe5_frequence: "Pour la mission du khalifa, le sang represente la vie que Dieu a donnee. Interdire la consommation du sang c'est reconnaitre que la vie appartient a Dieu — le khalifa ne consomme pas le sang parce que la vie n'est pas a lui. Le sang est sacre en tant que support de la vie — le respecter c'est respecter la vie elle-meme. La mission du khalifa passe par le respect de la vie sous toutes ses formes."
            },
            "Parenté/Lignée": {
              status: "probable",
              senses: ["parenté", "lignée", "consanguinité", "lien de sang"],
              proof_ctx: "Le Lane's donne pour la racine d-m-w un sens derive de parente par le sang — la consanguinite (dhawu al-arham) est un lien fonde sur le sang partage. Ce sens secondaire est possible car le sang est le symbole universel du lien familial. Cependant dans le contexte du verset 2:173, le sens premier de sang physique est dominant — la liste porte sur les aliments, pas sur les liens de parente.",
              axe1_verset: "Le sens de parente pourrait enrichir la lecture du verset en montrant que le sang n'est pas qu'un liquide physique mais aussi le symbole du lien entre les etres vivants. L'interdiction de consommer le sang pourrait alors signifier aussi le respect du lien vital qui unit les creatures. Le champ lexical du verset reste cependant alimentaire — la parente est un sens sous-jacent, pas le sens principal.",
              axe2_voisins: "Le verset 172 mentionne « les bonnes choses que Nous vous avons attribuees » — l'attribution est un acte de parente divine (Dieu donne a ses creatures). Le sang comme lien de parente s'inscrit dans cette logique du don divin. Le verset 174 mentionne ceux qui « cachent ce que Dieu a revele » — cacher la verite c'est trahir le lien de confiance (un autre type de lien). Le sens de parente enrichit la lecture sans la dominer.",
              axe3_sourate: "En 2:27, le Coran condamne « ceux qui rompent le pacte de Dieu apres l'avoir conclu et coupent ce que Dieu a ordonne de joindre ». Couper les liens de parente (silat al-rahim) est un des grands peches coraniques. La sourate al-Baqarah insiste sur les liens — liens avec Dieu, liens entre les hommes. Le sang comme symbole de ces liens pourrait eclairer l'interdiction alimentaire sous un angle relationnel.",
              axe4_coherence: "En 47:22, « ne vous attendez-vous pas, si vous vous detournez, a semer la corruption sur terre et a rompre vos liens de parente ? ». La parente (rahim) est un lien sacre dans le Coran. Le sang est le symbole de ce lien — interdire la consommation du sang pourrait etre aussi une maniere de rappeler le respect du a la vie partagee.",
              axe5_frequence: "Pour la mission du khalifa, la parente est le fondement de la communaute. Le khalifa est responsable des liens entre les membres de la communaute — le sang partage est le premier de ces liens. Interdire la consommation du sang c'est rappeler que la vie est un lien, pas une ressource a exploiter."
            }
          }
        }
      },
      // lhm pos=5 (nom lahma)
      {
        word_key: "lhm", position: 5, sense_chosen: "chair",
        analysis_axes: {
          sense_chosen: "chair",
          concept_chosen: "Engloutissement",
          concepts: {
            "Engloutissement": {
              status: "retenu",
              senses: ["chair", "viande", "engloutir", "dévorer", "absorber"],
              proof_ctx: "Le nom lahma est un nom accusatif indefini de la racine l-h-m. Le Lane's donne : chair, viande, ce qui recouvre les os, la partie charnue. Le sens etymologique de la racine l-h-m est « engloutir, devorer » — la chair est ce qui est englouti, devore. Le Lane's precise que le lahm est la partie de l'animal qui est mangee — la chair est destinee a la consommation. Ici le mot est suivi de al-khinziri (du porc) — il s'agit specifiquement de la chair du porc, pas de la chair en general. L'absence d'article defini sur lahma et la presence de l'article sur al-khinziri montrent que c'est le porc qui est defini, pas la chair.",
              axe1_verset: "Le nom lahma est le troisieme element de la liste des interdictions. Le champ lexical (bete morte, sang, porc) montre une progression du general au specifique : d'abord toute bete morte, puis le sang en general, puis la chair d'un animal specifique. La chair est le support de l'interdiction — ce n'est pas le porc vivant qui est interdit mais sa chair comme aliment. Le verset cible la consommation, pas l'animal en tant qu'etre vivant.",
              axe2_voisins: "Le verset 172 disait « mangez des bonnes choses » — la chair du porc n'est pas une bonne chose au sens coranique. Le verset 174 mentionne ceux qui « mangent le Feu dans leurs ventres » — l'image de la consommation interdite fait echo a la chair du porc. La sequence 172-174 construit un contraste entre ce qui est bon a manger et ce qui ne l'est pas.",
              axe3_sourate: "La racine l-h-m n'apparait dans la sourate al-Baqarah qu'en 2:173 et 2:259 (ou la chair recouvre les os dans la resurrection de l'ane). La chair est liee a la vie concrete — la manger c'est incorporer la substance d'un autre etre. La sourate montre la chair comme element de la vie physique — elle peut etre licite ou illicite selon sa source.",
              axe4_coherence: "La racine l-h-m apparait environ 12 fois dans le Coran. En 23:14, « puis Nous avons revetu les os de chair » dans la creation de l'homme. En 49:12, « aimeriez-vous manger la chair de votre frere mort ? » comme metaphore de la medisance. Le Coran utilise la chair a la fois au sens propre (aliment, composant du corps) et au sens figure (medisance). En 2:173, le sens est strictement alimentaire.",
              axe5_frequence: "Pour la mission du khalifa, la chair represente la substance materielle. Le khalifa consomme de la chair pour survivre mais il doit choisir quelle chair il consomme. L'interdiction de la chair du porc est un exercice de discernement — le khalifa doit distinguer entre ce qui est permis et ce qui ne l'est pas. La mission passe par des choix quotidiens, y compris dans l'alimentation."
            },
            "Combat/Guerre": {
              status: "nul",
              senses: ["combattre corps à corps"],
              proof_ctx: "Le sens de combat est un sens derive de l-h-m (lutter corps a corps, au sens d'enchainement physique). Le contexte est alimentaire — le mot designe la chair comme aliment, pas le combat."
            }
          }
        }
      },
      // xnzr pos=6 (nom al-khinziri)
      {
        word_key: "xnzr", position: 6, sense_chosen: "porc",
        analysis_axes: {
          sense_chosen: "porc",
          concept_chosen: "Animal/Interdit",
          concepts: {
            "Animal/Interdit": {
              status: "retenu",
              senses: ["porc", "cochon", "animal interdit"],
              proof_ctx: "Le nom al-khinziri est un nom genitif defini de la racine kh-n-z-r. Le Lane's donne : porc, cochon, animal a sabots fendus non ruminant. Le khinzir est l'animal specifiquement nomme dans l'interdiction alimentaire. L'article defini al- generalise — il s'agit du genre entier du porc, pas d'un porc particulier. Le nom est au genitif car il est complement de lahma (chair du porc). L'interdiction porte sur la chair — l'ensemble de la viande porcine est concernee sans distinction de partie.",
              axe1_verset: "Le nom al-khinziri precise l'interdiction de la chair — c'est la chair du porc qui est interdite. Le champ lexical (bete morte, sang, chair) montre que le porc est le seul animal specifiquement nomme dans cette liste. Les autres interdictions portent sur des categories generales (toute bete morte, tout sang) — le porc est l'exception nommee. Cette nomination specifique souligne le caractere particulier de cette interdiction.",
              axe2_voisins: "Le verset 172 invitait a manger les bonnes choses — le porc est exclu de cette categorie. Le verset 174 evoque ceux qui cachent les revelations — l'interdiction du porc fait partie de ces revelations que certains voudraient cacher ou contourner. La sequence montre que l'interdiction est une revelation divine, pas une tradition humaine.",
              axe3_sourate: "La racine kh-n-z-r n'apparait dans la sourate al-Baqarah qu'en 2:173. C'est un hapax de la sourate — le porc n'est mentionne qu'une seule fois dans la sourate mais cette unique mention suffit pour etablir l'interdiction. La sourate al-Baqarah est avant tout une sourate legislative — l'interdiction du porc s'inscrit dans son cadre juridique.",
              axe4_coherence: "La racine kh-n-z-r apparait environ 5 fois dans le Coran : 2:173, 5:3, 5:60, 6:145, 16:115. En 5:60, Dieu transforme des transgresseurs en singes et en porcs — le porc est associe a la degradation morale. En 5:3 et 6:145, la chair du porc est dans la liste des interdictions alimentaires. Le Coran maintient une interdiction constante et sans equivoque du porc.",
              axe5_frequence: "Pour la mission du khalifa, le porc represente l'interdit nomme. Le khalifa doit connaitre les limites que Dieu a posees — le porc est une de ces limites claires et non ambigues. La mission du khalifa n'est pas de comprendre pourquoi le porc est interdit mais d'obeir a l'interdiction. L'obeissance aux limites divines est le fondement de la mission — le khalifa obeit d'abord, il comprend ensuite si Dieu le veut."
            }
          }
        }
      },
      // hll pos=8 (verbe uhilla)
      {
        word_key: "hll", position: 8, sense_chosen: "invoquer",
        analysis_axes: {
          sense_chosen: "invoquer",
          concept_chosen: "Licéité/Permission",
          concepts: {
            "Licéité/Permission": {
              status: "retenu",
              senses: ["licite", "permis", "invoquer", "élever la voix", "proclamer"],
              proof_ctx: "Le verbe uhilla est un accompli passif 3MS de la forme IV de la racine h-l-l. Le Lane's donne : elever la voix, invoquer a haute voix, proclamer. La forme IV (ahalla) signifie « rendre licite » ou « invoquer le nom de quelqu'un ». Au passif (uhilla), le sens est « ce sur quoi a ete invoque (un nom) ». Le Lane's precise que ihlal est l'acte de prononcer un nom a haute voix au moment de l'abattage — si le nom invoque n'est pas celui de Dieu, la viande devient illicite. L'invocation est ce qui rend l'abattage licite ou illicite — c'est l'intention declaree qui compte.",
              axe1_verset: "Le verbe uhilla est le quatrieme et dernier element de la liste des interdictions. Le champ lexical (bete morte, sang, chair, porc) portait sur la nature de l'animal ou de la substance — cette quatrieme interdiction porte sur l'intention de l'abatteur. Le verset passe du physique (ce que l'animal est) au spirituel (au nom de qui il est abattu). L'invocation d'un autre que Dieu est ce qui rend la viande illicite — meme un animal licite devient interdit si l'invocation est incorrecte.",
              axe2_voisins: "Le verset 172 disait « soyez reconnaissants envers Lui » — la reconnaissance (shukr) est liee a l'invocation du nom de Dieu. Le verset 173 montre que l'invocation d'un autre que Dieu est l'oppose de la reconnaissance. Le verset 174 evoque ceux qui cachent la verite — invoquer un autre que Dieu est une forme de dissimulation de la verite. La sequence 172-174 lie reconnaissance, invocation et verite.",
              axe3_sourate: "La racine h-l-l apparait dans la sourate al-Baqarah en 2:187 (« il vous est permis la nuit du jeune ») et en 2:197 (« quand vous quittez l'etat de sacralisation »). En 2:173, le sens est l'invocation au moment de l'abattage. La sourate utilise h-l-l pour marquer ce qui est permis et ce qui est proclame — la permission et l'invocation partagent la meme racine car ce qui est proclame au nom de Dieu est ce qui est permis.",
              axe4_coherence: "La racine h-l-l apparait environ 53 fois dans le Coran. En 5:4, « mangez de ce que les betes de proie attrapent pour vous, en mentionnant le nom de Dieu dessus ». En 6:118, « mangez de ce sur quoi le nom de Dieu a ete mentionne ». En 6:121, « ne mangez pas de ce sur quoi le nom de Dieu n'a pas ete mentionne ». Le Coran insiste sur la mention du nom de Dieu comme condition de licite de la viande.",
              axe5_frequence: "Pour la mission du khalifa, l'invocation est l'acte de declaration de souverainete. Invoquer le nom de Dieu au moment de l'abattage c'est reconnaitre que la vie de l'animal appartient a Dieu et que l'homme n'a pas le droit de la prendre sans Sa permission. Le khalifa agit au nom de Dieu — chaque acte doit etre precede de l'invocation divine. La mission commence par la reconnaissance de la souverainete de Dieu sur toute chose."
            },
            "Descente/Installation": {
              status: "nul",
              senses: ["descendre", "s'installer"],
              proof_ctx: "Le sens de descendre est un sens distinct de h-l-l (halla = descendre, s'installer). Le contexte est l'invocation au moment de l'abattage, pas l'installation dans un lieu."
            }
          }
        }
      },
      // ghyr pos=10 (1ere occurrence : ghayri — « autre que »)
      {
        word_key: "ghyr", position: 10, sense_chosen: "autre que",
        analysis_axes: {
          sense_chosen: "autre que",
          concept_chosen: "Autre/Exclusion",
          concepts: {
            "Autre/Exclusion": {
              status: "retenu",
              senses: ["autre que", "différent de", "sauf", "excepté", "sans"],
              proof_ctx: "Le nom ghayri est un nom genitif de la racine gh-y-r. Le Lane's donne : autre que, different de, excepte, sauf. Le ghayr marque l'alterite et l'exclusion — tout ce qui n'est pas Dieu. Ici ghayri est au genitif car il est complement de la preposition li- (pour/au nom de). La structure « ma uhilla bihi li-ghayri allahi » signifie « ce sur quoi a ete invoque pour un autre que Dieu ». Le ghayr isole Dieu de tout ce qui n'est pas Lui — l'invocation doit etre exclusive.",
              axe1_verset: "Le nom ghayri definit la frontiere de l'interdiction — ce n'est pas l'abattage en soi qui est interdit mais l'abattage fait au nom d'un autre que Dieu. Le champ lexical (invoquer, Dieu) montre que l'exclusivite de l'invocation divine est le critere. Le verset pose que l'intention de l'abatteur compte autant que la nature de l'animal. Le ghayr cree une opposition binaire : Dieu ou autre que Dieu — il n'y a pas de position intermediaire.",
              axe2_voisins: "Le verset 163 affirmait « votre Dieu est un Dieu unique, pas de divinite autre que Lui ». Le verset 173 reprend cette unicite dans le contexte alimentaire — l'abattage doit etre fait au nom de Dieu seul, pas au nom d'un autre. Le ghayr des deux versets porte le meme sens : l'exclusion de tout ce qui n'est pas Dieu. La coherence entre unicite divine (163) et invocation exclusive (173) est forte.",
              axe3_sourate: "La racine gh-y-r apparait frequemment dans la sourate al-Baqarah. En 2:105, « les incredules parmi les Gens du Livre ne souhaitent pas qu'un bien descende sur vous ». En 2:173, ghayr marque l'exclusion de Dieu. En 2:150, ghayr marquait l'exception des injustes. La sourate utilise ghayr pour toutes les formes d'exclusion — exclusion divine, exclusion morale, exclusion alimentaire.",
              axe4_coherence: "La racine gh-y-r apparait environ 150 fois dans le Coran. L'expression « ghayri allahi » (autre que Dieu) est recurrente dans les contextes d'interdiction et d'unicite divine. En 3:83, « cherchent-ils une autre religion que celle de Dieu ? ». Le Coran pose constamment l'alternative entre Dieu et autre que Dieu — il n'y a pas de troisieme voie. L'exclusion est le moyen linguistique de l'unicite.",
              axe5_frequence: "Pour la mission du khalifa, l'exclusion est le fondement du monotheisme. Le khalifa ne peut servir que Dieu — tout autre service est une deviation. L'expression « autre que Dieu » definit negativement la mission : tout ce qui n'est pas pour Dieu est hors mission. Le khalifa doit constamment verifier que ses actes sont au nom de Dieu et non au nom d'un autre."
            },
            "Changement": {
              status: "nul",
              senses: ["changer", "altérer", "transformer"],
              proof_ctx: "Le sens de changement est un sens derive de gh-y-r (ghayyara = changer). Ici le nom ghayr est un marqueur d'exclusion, pas un verbe de transformation."
            }
          }
        }
      },
      // alh pos=11 (1ere occurrence : allahi)
      {
        word_key: "alh", position: 11, sense_chosen: "Dieu",
        analysis_axes: {
          sense_chosen: "Dieu",
          concept_chosen: "Divinité",
          concepts: {
            "Divinité": {
              status: "retenu",
              senses: ["Dieu", "divinité", "le Créateur", "l'Unique"],
              proof_ctx: "Le nom allahi est le nom propre divin au genitif. Le Lane's donne : le Dieu (al-ilah contracte en allah), le Createur, Celui qui est adore. Le genitif est cause par la preposition li- (li-ghayri allahi = pour un autre que Dieu). Le nom divin est ici dans le contexte de l'invocation — c'est au nom de Dieu que l'abattage doit etre fait. Le nom propre est definitif et exclusif — il n'y a pas de synonyme ni de substitut pour le nom divin.",
              axe1_verset: "Le nom allahi est le pivot de la quatrieme interdiction — c'est par rapport a Dieu que l'invocation est jugee. Le champ lexical (invoquer, autre que) montre que l'identite de celui qui est invoque est le critere decisif. Le verset ne dit pas « ce qui a ete abattu sans invocation » mais « ce sur quoi a ete invoque un autre que Dieu » — la presence d'une invocation non divine est pire que l'absence d'invocation.",
              axe2_voisins: "Le verset 163 etablissait l'unicite de Dieu. Le verset 173 en tire une consequence pratique — l'abattage doit etre fait au nom de ce Dieu unique. Le passage de la theologie (163) a la pratique (173) montre que l'unicite divine n'est pas un concept abstrait mais une regle de vie quotidienne. Le verset 174 evoque ceux qui « cachent ce que Dieu a revele » — le nom de Dieu est ce qui doit etre proclame, pas cache.",
              axe3_sourate: "Le nom Allah est le mot le plus frequent de la sourate al-Baqarah et du Coran entier. Chaque mention rappelle que Dieu est le legislateur — les interdictions ne sont pas humaines mais divines. En 2:173, le nom divin est dans le contexte de l'invocation alimentaire — meme la nourriture est un domaine ou la souverainete de Dieu s'exerce. La sourate montre que rien n'echappe a l'autorite divine.",
              axe4_coherence: "Le nom Allah apparait environ 2700 fois dans le Coran. Dans les versets d'interdiction alimentaire (2:173, 5:3, 6:145, 16:115), le nom de Dieu est toujours le critere de l'invocation licite. En 6:118, « mangez de ce sur quoi le nom de Dieu a ete mentionne, si vous etes croyants en Ses signes ». Le Coran lie la mention du nom de Dieu a la foi — celui qui ne mentionne pas le nom de Dieu en abattant doute de Sa souverainete.",
              axe5_frequence: "Pour la mission du khalifa, le nom de Dieu est le sceau de la mission. Le khalifa agit au nom de Dieu — l'invocation divine est la signature de chaque acte. L'abattage au nom de Dieu est un rappel que le khalifa ne prend rien sans permission divine. La mission est une delegation — le khalifa agit au nom d'un Autre, pas en son propre nom."
            }
          }
        }
      },
      // drr pos=13 (verbe idturra)
      {
        word_key: "drr", position: 13, sense_chosen: "etre contraint",
        analysis_axes: {
          sense_chosen: "etre contraint",
          concept_chosen: "Nuisance/Mal",
          concepts: {
            "Nuisance/Mal": {
              status: "retenu",
              senses: ["nuire", "mal", "contrainte", "nécessité", "détresse"],
              proof_ctx: "Le verbe idturra est un accompli passif 3MS de la forme VIII de la racine d-r-r. Le Lane's donne : etre contraint, etre force par la necessite, etre pousse par la detresse. La racine d-r-r porte le sens fondamental de nuisance et de mal — la contrainte est une forme de nuisance subie. La forme VIII (iftaala) est reflexive-passive — le sujet subit la contrainte, il ne la choisit pas. Le passif renforce l'idee que la personne est victime des circonstances, pas actrice de sa propre transgression. L'idtirar est l'etat de necessite absolue ou la survie est en jeu.",
              axe1_verset: "Le verbe idturra ouvre la deuxieme partie du verset — apres les quatre interdictions, l'exception. Le champ lexical (sans desir, sans exces, nul peche) montre que l'exception est encadree par des conditions strictes. La structure est precise : qui est contraint + sans desir + sans exces = nul peche. Le verbe passif (est contraint) souligne que la personne ne choisit pas sa situation — elle subit une contrainte exterieure (famine, danger de mort). Le verset ne dit pas « celui qui veut manger » mais « celui qui est contraint » — la volonte est absente.",
              axe2_voisins: "Le verset 172 invitait a manger les bonnes choses — le verset 173 pose d'abord les interdictions puis l'exception de necessite. La sequence montre la hierarchie : la regle est de manger ce qui est bon, l'exception est de manger l'interdit en cas de necessite. Le verset 174 mentionne la sanction pour ceux qui cachent la verite — la contrainte du verset 173 est l'exact oppose de la dissimulation du verset 174. Le contraint est sincere, le dissimulateur est menteur.",
              axe3_sourate: "La racine d-r-r apparait dans la sourate al-Baqarah en 2:231 (« ne les retenez pas pour leur nuire ») et en 2:233 (« ni la mere ni le pere ne doivent subir de prejudice »). En 2:173, le sens est la contrainte par la necessite — la nuisance subie est celle de la faim extreme ou du danger de mort. La sourate utilise la racine d-r-r pour toutes les formes de nuisance subie — domestique, alimentaire, relationnelle.",
              axe4_coherence: "La racine d-r-r apparait environ 75 fois dans le Coran. La forme VIII (idtarra) apparait specifiquement dans les versets d'exception alimentaire : 2:173, 5:3, 6:119, 6:145, 16:115. En 6:119, « Dieu vous a detaille ce qu'Il vous a interdit, sauf ce a quoi vous etes contraints ». Le Coran pose systematiquement l'exception de necessite — l'interdiction n'est pas absolue quand la survie est en jeu.",
              axe5_frequence: "Pour la mission du khalifa, la contrainte est une epreuve qui revele le caractere. Le khalifa contraint ne transgresse pas par plaisir mais par necessite — la transgression est subie, pas desiree. La mission n'est pas d'eviter toute difficulte mais de reagir correctement quand la difficulte survient. L'exception de necessite montre que Dieu connait les limites humaines et ne charge personne au-dela de sa capacite."
            },
            "Dommage/Préjudice": {
              status: "nul",
              senses: ["dommage", "préjudice"],
              proof_ctx: "Le sens de dommage est un sous-ensemble de la racine d-r-r. Ici le verbe est a la forme VIII passive — le sens est la contrainte subie, pas le dommage cause a autrui."
            }
          }
        }
      },
      // ghyr pos=14 (2e occurrence : ghayra — « sans »)
      {
        word_key: "ghyr", position: 14, sense_chosen: "sans",
        analysis_axes: {
          sense_chosen: "sans",
          concept_chosen: "Autre/Exclusion",
          concepts: {
            "Autre/Exclusion": {
              status: "retenu",
              senses: ["autre que", "différent de", "sauf", "excepté", "sans"],
              proof_ctx: "Le nom ghayra est un nom accusatif de la racine gh-y-r. Le Lane's donne : autre que, sans, en l'absence de. Ici ghayra fonctionne comme une negation circonstancielle — « ghayra baghin » signifie « sans etre un transgresseur » ou « n'etant pas un transgresseur ». La forme accusative (hal/circumstantiel) montre que ghayr qualifie l'etat du sujet au moment de la contrainte. La distinction avec la premiere occurrence (ghayri pos=10, exclusion divine) est que cette deuxieme occurrence est un hal — elle decrit l'etat moral de la personne contrainte.",
              axe1_verset: "Le nom ghayra pose la premiere des deux conditions de l'exception — ne pas etre anime de desir. Le champ lexical (contraint, desir, exces) montre que l'exception est soumise a des conditions morales. La contrainte physique ne suffit pas — il faut aussi que l'intention soit pure. Le verset distingue la contrainte (exterieure) de l'intention (interieure) — les deux doivent etre alignees pour que l'exception s'applique.",
              axe2_voisins: "La premiere occurrence de ghayr (pos=10) excluait Dieu de l'invocation — la deuxieme occurrence exclut le desir de la contrainte. Les deux exclusions sont structurellement paralleles : la premiere est theologique (pas d'autre que Dieu), la deuxieme est morale (pas de desir). Le verset construit un systeme d'exclusions qui encadre a la fois la pratique religieuse et le comportement individuel.",
              axe3_sourate: "En 2:150, ghayr excluait les injustes de la communaute. En 2:173, ghayr exclut le desir du contraint. La sourate utilise ghayr comme outil de discrimination morale — il separe ce qui est acceptable de ce qui ne l'est pas. La precision morale est constante dans la sourate al-Baqarah.",
              axe4_coherence: "En 5:3 et 6:145, la meme expression « ghayra baghin wa-la 'adin » est utilisee dans le meme contexte d'exception alimentaire. Le Coran reprend la meme formule exacte pour l'exception de necessite — la stabilite de la formule montre qu'elle est une regle juridique precise, pas une suggestion morale vague.",
              axe5_frequence: "Pour la mission du khalifa, l'exclusion du desir est une discipline interieure. Le khalifa qui mange l'interdit par necessite doit le faire sans plaisir — la nourriture interdite n'est pas un delice mais un remede de survie. La mission exige non seulement des actes corrects mais des intentions pures."
            },
            "Changement": {
              status: "nul",
              senses: ["changer"],
              proof_ctx: "Le sens de changement est hors sujet — ghayra est ici un circumstantiel de negation (sans etre), pas un verbe de transformation."
            }
          }
        }
      },
      // bghy pos=15 (nom baghin)
      {
        word_key: "bghy", position: 15, sense_chosen: "transgression",
        analysis_axes: {
          sense_chosen: "transgression",
          concept_chosen: "Transgression/Injustice",
          concepts: {
            "Transgression/Injustice": {
              status: "retenu",
              senses: ["transgresser", "aller au-delà des limites", "désirer excessivement", "opprimer", "chercher injustement"],
              proof_ctx: "Le nom baghin est un participe actif masculin singulier indefini de la racine b-gh-y. Le Lane's donne : celui qui transgresse, qui va au-dela des limites, qui cherche au-dela de ce qui est permis, qui desire ce qui est interdit. Le baghi est celui dont le desir depasse les limites — il ne se contente pas de ce qui est permis mais recherche ce qui est interdit. Le Lane's precise que le baghy est la recherche de ce qui n'est pas un droit — le transgresseur cherche ce qui ne lui appartient pas. Ici le nom est au hal (circumstantiel) avec ghayra — « sans etre un transgresseur ».",
              axe1_verset: "Le nom baghin est la premiere condition morale de l'exception — le contraint ne doit pas desirer l'interdit. Le champ lexical (contraint, sans, exces) montre que le verset pose deux conditions paralleles : pas de desir et pas d'exces. La transgression est interieure (desir) tandis que l'exces est exterieur (quantite). Le verset couvre les deux dimensions — intention et action. La negation « ghayra baghin » montre que c'est l'absence de transgression qui est requise.",
              axe2_voisins: "Le verset 172 invitait a la reconnaissance envers Dieu — la transgression est l'oppose de la reconnaissance. Celui qui mange l'interdit par desir est un ingrat, celui qui le mange par contrainte est reconnaissant. Le verset 174 evoque ceux qui « echangent la revelation de Dieu pour un prix derisoire » — l'echange est une forme de transgression. La sequence 172-174 distingue les reconnaissants des transgresseurs.",
              axe3_sourate: "La racine b-gh-y apparait dans la sourate al-Baqarah en 2:90 (« par envie — baghyan ») et en 2:213 (« par envie mutuelle »). En 2:173, le sens est le desir excessif de l'interdit. La sourate utilise b-gh-y pour toutes les formes de depassement des limites — l'envie, le desir, la transgression sont des manifestations du meme travers : vouloir ce qui n'est pas a soi.",
              axe4_coherence: "La racine b-gh-y apparait environ 95 fois dans le Coran. En 7:33, « Dieu a interdit le peche (ithm) et la transgression (baghy) sans droit ». En 10:23, « votre transgression est contre vous-memes ». Le Coran montre que la transgression se retourne contre le transgresseur — elle nuit d'abord a celui qui la commet. En 2:173, l'absence de transgression est la condition du pardon.",
              axe5_frequence: "Pour la mission du khalifa, la transgression est le danger permanent de la mission. Le khalifa peut etre tente de depasser les limites — le desir de pouvoir, de richesse, de plaisir. Le verset montre que la transgression disqualifie meme en cas de contrainte — si le khalifa desire l'interdit, il n'est plus excusable. La mission exige une vigilance constante sur les intentions."
            },
            "Recherche/Quête": {
              status: "probable",
              senses: ["chercher", "rechercher", "quêter", "aspirer à"],
              proof_ctx: "Le Lane's donne pour la racine b-gh-y le sens premier de « chercher, rechercher ». Le baghi est etymologiquement « celui qui cherche » — la transgression est une recherche qui depasse les limites. Ce sens est possible car la recherche est neutre en soi — c'est l'objet de la recherche qui la rend licite ou transgressive. Dans le contexte du verset, la recherche est celle de l'interdit, ce qui la rend transgressive.",
              axe1_verset: "Le sens de recherche pourrait enrichir la lecture du verset en montrant que le contraint ne doit pas « chercher » l'interdit — il ne doit pas aller au-devant de la situation de contrainte. Le champ lexical (contraint, sans, exces) suggere que le contraint subit passivement tandis que le chercheur agit activement. L'absence de recherche active est une condition de l'exception — celui qui se met volontairement en situation de contrainte n'est pas excusable.",
              axe2_voisins: "Le verset 172 invitait a chercher les bonnes choses — le verset 173 montre que la recherche doit etre orientee vers le licite. La recherche (quete) du verset 173 est la recherche de l'interdit, qui est condamnee. La sequence 172-173 oppose deux types de recherche : la recherche du bien (172) et la recherche de l'interdit (173).",
              axe3_sourate: "En 2:198, « il n'y a pas de peche a chercher (tabtaghu) une faveur de votre Seigneur ». La racine b-gh-y dans ce contexte est positive — chercher la faveur divine est licite. La sourate montre que la recherche en soi est neutre — c'est son objet qui la rend licite ou illicite.",
              axe4_coherence: "En 28:77, « recherche (ibtaghi) dans ce que Dieu t'a donne la demeure derniere ». Le Coran utilise b-gh-y pour la recherche positive (chercher Dieu, chercher la vie future) et negative (chercher l'interdit, transgresser). La racine est ambivalente — le contexte determine son orientation morale.",
              axe5_frequence: "Pour la mission du khalifa, la recherche est le moteur de la mission. Le khalifa cherche la verite, la justice, le bien — mais il ne doit pas chercher l'interdit. La mission est une quete orientee — le khalifa cherche ce que Dieu a permis et evite ce que Dieu a interdit."
            }
          }
        }
      },
      // edw pos=17 (nom adin)
      {
        word_key: "edw", position: 17, sense_chosen: "exces",
        analysis_axes: {
          sense_chosen: "exces",
          concept_chosen: "Transgression/Excès",
          concepts: {
            "Transgression/Excès": {
              status: "retenu",
              senses: ["transgresser", "excéder", "dépasser les limites", "agresser", "hostile"],
              proof_ctx: "Le nom adin est un participe actif masculin singulier indefini de la racine '-d-w. Le Lane's donne : celui qui transgresse, qui depasse les limites, qui va au-dela de la mesure, l'agresseur, l'hostile. Le 'adi est celui qui depasse la quantite permise — dans le contexte alimentaire, celui qui consomme plus que la quantite necessaire pour survivre. Le Lane's precise que le 'udwan est le depassement de la mesure juste — l'exces dans la consommation est un depassement de la mesure de necessite. Le nom est au hal avec la negation wa-la — « et n'etant pas un excessif ».",
              axe1_verset: "Le nom adin est la deuxieme condition morale de l'exception, apres baghin. Le champ lexical (contraint, sans desir, nul peche) montre une structure precise : contrainte (condition physique) + absence de desir (condition interieure) + absence d'exces (condition exterieure) = absence de peche. Le verset distingue deux types de fautes : le desir de l'interdit (baghin) et l'exces dans la consommation (adin). La paire baghin-adin couvre l'intention et l'action.",
              axe2_voisins: "Le verset 172 invitait a manger sans specifier de quantite — le verset 173 pose la limite quantitative en cas de contrainte. Le verset 174 evoque un « petit prix » (thamanan qalilan) — la mesquinerie est une forme d'exces inverse. La sequence 172-174 montre que la mesure est essentielle : ni trop ni trop peu, ni exces ni radinerie.",
              axe3_sourate: "La racine '-d-w est frequente dans la sourate al-Baqarah. En 2:61, le depassement des limites des enfants d'Israel. En 2:85, « ceux d'entre vous qui transgressent ». En 2:190, « combattez ceux qui vous combattent et ne transgressez pas ». En 2:173, l'exces est le depassement de la quantite necessaire. La sourate montre que la transgression prend de multiples formes — militaire, sociale, alimentaire — mais le principe est le meme : ne pas depasser les limites fixees par Dieu.",
              axe4_coherence: "La racine '-d-w apparait environ 97 fois dans le Coran. En 5:3, la meme expression « ghayra baghin wa-la 'adin » apparait dans le meme contexte. En 5:87, « ne transgressez pas — Dieu n'aime pas les transgresseurs ». Le Coran pose la mesure comme vertu fondamentale — l'exces est condamne dans tous les domaines. L'expression « ghayra baghin wa-la 'adin » est une formule juridique fixe qui encadre l'exception de necessite.",
              axe5_frequence: "Pour la mission du khalifa, l'exces est l'ennemi de la mission. Le khalifa qui depasse les limites trahit sa mission — meme en situation de necessite, la mesure doit etre respectee. La mission exige l'equilibre : ni privation excessive ni consommation excessive. Le khalifa mange l'interdit pour survivre, pas pour se rassasier — la quantite est limitee a la stricte necessite."
            },
            "Hostilité/Inimitié": {
              status: "probable",
              senses: ["ennemi", "hostile", "agresseur", "inimitié"],
              proof_ctx: "Le Lane's donne pour la racine '-d-w le sens d'hostilite et d'inimitie — le 'aduww est l'ennemi. Ce sens secondaire est possible car l'exces dans la consommation de l'interdit pourrait etre vu comme un acte d'hostilite envers la loi divine. Cependant dans le contexte du verset 2:173, le sens premier est le depassement quantitatif — ne pas consommer plus que le necessaire.",
              axe1_verset: "Le sens d'hostilite pourrait enrichir la lecture en montrant que celui qui mange l'interdit avec exces se comporte en ennemi de Dieu — il transgresse volontairement les limites divines. Le champ lexical (contraint, desir, peche) montre que le verset distingue l'ami de Dieu (le contraint qui respecte les limites) de l'ennemi de Dieu (le transgresseur qui les depasse). L'hostilite est le degre ultime de la transgression.",
              axe2_voisins: "Le verset 168 evoquait « les pas du diable » — le diable est l'ennemi (aduww) par excellence. Le verset 173 pose que celui qui consomme l'interdit avec exces marche dans les pas du diable. La sequence 168-173 lie l'hostilite du diable a la transgression alimentaire — depasser les limites c'est suivre l'ennemi.",
              axe3_sourate: "En 2:36, le diable est designe comme « ennemi » (aduww) — la racine '-d-w est la racine de l'inimitie. En 2:98, « Dieu est l'ennemi des incredules ». En 2:173, l'hostilite se manifeste par l'exces alimentaire. La sourate montre que l'inimitie prend des formes variees — de la rebellion ouverte a l'exces quotidien.",
              axe4_coherence: "En 2:168, « ne suivez pas les pas du diable, il est pour vous un ennemi declare ('aduwwun mubin) ». Le Coran lie explicitement l'hostilite a la transgression alimentaire — suivre le diable c'est depasser les limites. En 7:22, Adam et Eve mangent de l'arbre interdit apres avoir suivi l'ennemi. Le schema « ennemi → transgression alimentaire » est un motif coranique recurrent.",
              axe5_frequence: "Pour la mission du khalifa, l'inimitie est la consequence de l'exces. Le khalifa qui depasse les limites se fait l'ennemi de sa propre mission. L'hostilite envers la loi divine est une auto-destruction — le khalifa hostile a Dieu se detruit lui-meme."
            }
          }
        }
      },
      // atm pos=19 (nom ithma)
      {
        word_key: "atm", position: 19, sense_chosen: "peche",
        analysis_axes: {
          sense_chosen: "peche",
          concept_chosen: "Accomplissement/Plénitude",
          concepts: {
            "Accomplissement/Plénitude": {
              status: "retenu",
              senses: ["accomplir", "achever", "plénitude", "péché"],
              proof_ctx: "Le nom ithma est un nom accusatif indefini de la racine a-th-m. Le Lane's donne : peche, faute morale, ce qui merite une sanction. Le ithm est l'acte qui entraine une consequence negative dans l'au-dela. Le Lane's precise que le ithm designe l'acte reprehensible en lui-meme, independamment de ses consequences sociales — c'est un peche devant Dieu. Ici le nom est precede de la negation « fa-la ithma 'alayhi » (alors nul peche sur lui) — la negation leve la sanction pour le contraint qui remplit les conditions. Le concept « Accomplissement/Plenitude » dans la base de donnees est conserve tel quel malgre l'apparent decalage avec le sens de peche.",
              axe1_verset: "Le nom ithma est la conclusion logique de la deuxieme partie du verset : si quelqu'un est contraint + sans desir + sans exces → nul peche. Le champ lexical (contraint, sans, desir, exces) construit les conditions et le ithm est le resultat. La negation « la ithma » est le verdict — l'acquittement moral du contraint. Le verset transforme ce qui etait un peche (manger l'interdit) en un non-peche (quand les conditions sont remplies). L'exception de necessite est un mecanisme juridique de levee de sanction.",
              axe2_voisins: "Le verset 172 invitait a la reconnaissance — la negation du peche est une grace divine. Le verset 174 evoque ceux qui « achevent pour un petit prix » — le mot uthmique est le peche qui pese sur eux. La sequence 172-174 montre le contraste : le contraint est pardonne (173) tandis que le dissimulateur est condamne (174). Le peche n'est pas dans l'acte mais dans l'intention.",
              axe3_sourate: "La racine a-th-m apparait dans la sourate al-Baqarah en 2:85 (« peche ») et en 2:188 (« ne devorez pas vos biens entre vous par le peche »). En 2:173, le peche est leve en cas de necessite. La sourate montre que le peche est contextuel — le meme acte peut etre peche ou non selon les circonstances et les intentions.",
              axe4_coherence: "La racine a-th-m apparait environ 48 fois dans le Coran. En 4:111, « celui qui commet un peche ne le commet que contre lui-meme ». En 5:3, la meme formule « fa-la ithma 'alayhi » apparait apres la liste des interdictions alimentaires. Le Coran pose systematiquement que le peche nuit d'abord a son auteur et que l'exception de necessite leve la sanction. La formule est juridiquement precise — « nul peche sur lui » est un acquittement formel.",
              axe5_frequence: "Pour la mission du khalifa, le peche est ce qui eloigne de la mission. Le khalifa qui peche s'eloigne de son mandat — mais le peche n'est pas dans l'acte commis sous contrainte, il est dans l'intention libre. La mission du khalifa est de rester dans l'intention pure — meme en situation de contrainte, l'intention doit etre la survie, pas le plaisir. L'absence de peche est le resultat de l'alignement entre la contrainte et l'intention."
            },
            "Lenteur/Retard": {
              status: "nul",
              senses: ["être lent", "tarder", "retarder"],
              proof_ctx: "Le sens de lenteur est un sens secondaire de la racine a-th-m — l'athim est celui qui est en retard sur le bien. Le contexte du verset est la sanction morale (peche), pas le retard temporel."
            }
          }
        }
      },
      // alh pos=22 (2e occurrence : allaha)
      {
        word_key: "alh", position: 22, sense_chosen: "Dieu",
        analysis_axes: {
          sense_chosen: "Dieu",
          concept_chosen: "Divinité",
          concepts: {
            "Divinité": {
              status: "retenu",
              senses: ["Dieu", "divinité", "le Créateur", "l'Unique"],
              proof_ctx: "Le nom allaha est le nom propre divin a l'accusatif, sujet de la particule inna (certes). Le Lane's donne : le Dieu, le Createur, Celui qui est adore. La particule inna introduit une affirmation emphatique — « certes Dieu est Pardonneur, Misericordieux ». Le nom divin est repete une deuxieme fois dans le verset pour introduire les attributs de cloture. La premiere occurrence (pos=11) etait dans le contexte de l'invocation ; cette deuxieme occurrence est dans le contexte du pardon et de la misericorde.",
              axe1_verset: "Le nom allaha ouvre la formule de cloture du verset. Le champ lexical (Pardonneur, Misericordieux) montre que Dieu est presente ici par Ses attributs de clemence. Le verset commence par l'interdiction (harrama) et finit par le pardon (ghafur) — la structure montre que Dieu interdit mais pardonne aussi. L'interdiction et le pardon sont deux faces de la meme legislation divine. Le nom divin est le pivot entre l'interdiction et le pardon.",
              axe2_voisins: "Le verset 163 affirmait « votre Dieu est un Dieu unique ». Le verset 173 presente ce Dieu unique comme Pardonneur et Misericordieux. La sequence montre la progression : unicite (163) → legislation (173a) → pardon (173b). Le verset 174 enchainge avec la sanction — Dieu pardonne le contraint mais punit le dissimulateur.",
              axe3_sourate: "Le nom divin est le fil conducteur de la sourate al-Baqarah. Chaque mention de Dieu revele un aspect de Sa nature — legislateur, juge, pardonnant, misericordieux. En 2:173, les deux mentions du nom divin montrent les deux aspects : Dieu interdit (pos=11) et Dieu pardonne (pos=22). La sourate presente un Dieu complet — pas seulement legislateur, pas seulement misericordieux, mais les deux a la fois.",
              axe4_coherence: "La formule « inna allaha ghafurun rahimun » (certes Dieu est Pardonneur, Misericordieux) est une des formules de cloture les plus frequentes du Coran. Elle apparait des dizaines de fois. Sa repetition montre que le pardon et la misericorde sont les attributs les plus mis en avant dans le Coran — ils sont la signature divine par excellence.",
              axe5_frequence: "Pour la mission du khalifa, la repetition du nom divin est un rappel constant de la source de la mission. Le khalifa agit au nom de Dieu et est pardonne par Dieu. La mission est encadree par le nom divin — elle commence par Lui (invocation) et se termine par Lui (pardon). Le khalifa n'est pas autonome — il est sous le regard et la clemence de Dieu en permanence."
            }
          }
        }
      },
      // gfr pos=23 (nom ghafurun)
      {
        word_key: "gfr", position: 23, sense_chosen: "pardon",
        analysis_axes: {
          sense_chosen: "pardon",
          concept_chosen: "Pardon/Couverture",
          concepts: {
            "Pardon/Couverture": {
              status: "retenu",
              senses: ["pardonner", "couvrir", "protéger", "effacer les fautes", "absoudre"],
              proof_ctx: "Le nom ghafurun est un adjectif intensif (fa'ul) indefini de la racine gh-f-r. Le Lane's donne : celui qui pardonne abondamment, qui couvre les fautes, qui protege du chatiment. La racine gh-f-r porte le sens fondamental de « couvrir » — le pardon divin couvre la faute comme un vetement couvre le corps. Le Lane's precise que le ghafur est celui qui pardonne de maniere repetee et abondante — la forme intensive (fa'ul) indique que le pardon n'est pas ponctuel mais permanent. L'indefini (tanwin) dans la formule attributive « allaha ghafurun » souligne l'ampleur du pardon.",
              axe1_verset: "Le nom ghafurun est le premier attribut de cloture du verset. Le champ lexical (peche, Dieu, Misericordieux) montre que la cloture est une formule de clemence. Le verset passe de l'interdiction au pardon — la structure est : Dieu interdit mais Dieu pardonne aussi. Le pardon est la reponse divine a la faiblesse humaine — le contraint qui mange l'interdit est pardonne. Le ghafurun rassure apres l'interdiction — Dieu ne cherche pas a punir mais a pardonner.",
              axe2_voisins: "Le verset 172 invitait a la reconnaissance — le pardon est la reponse de Dieu a la reconnaissance humaine. Le verset 174 mentionne la sanction pour les dissimulateurs — le contraste est net entre le pardon (173) et la sanction (174). La sequence montre que Dieu pardonne le contraint sincere mais punit le dissimulateur delibere.",
              axe3_sourate: "La racine gh-f-r est recurrente dans la sourate al-Baqarah. En 2:58, « Nous pardonnerons vos fautes ». En 2:199, « demandez pardon a Dieu, certes Dieu est Pardonneur, Misericordieux ». En 2:218, « ceux-la esperent la misericorde de Dieu, et Dieu est Pardonneur, Misericordieux ». La sourate utilise la formule ghafur-rahim comme signature de la clemence divine — elle revient chaque fois qu'une exception ou un espoir est mentionne.",
              axe4_coherence: "La racine gh-f-r apparait environ 234 fois dans le Coran. Le mot ghafur apparait environ 91 fois — c'est un des attributs divins les plus frequents. La paire ghafur-rahim apparait environ 72 fois. Le Coran insiste massivement sur le pardon divin — c'est l'attribut le plus cite apres la misericorde. La frequence montre que le pardon est au coeur du message coranique.",
              axe5_frequence: "Pour la mission du khalifa, le pardon divin est le filet de securite de la mission. Le khalifa peut faillir — la contrainte peut l'amener a transgresser. Mais Dieu pardonne le faillible sincere. La mission n'exige pas la perfection mais la sincerite — le khalifa imparfait mais sincere est pardonne. Le pardon divin permet au khalifa de continuer sa mission apres une chute."
            },
            "Casque/Protection": {
              status: "nul",
              senses: ["casque", "protection physique"],
              proof_ctx: "Le sens de casque (mighfar) est un sens concret de la racine gh-f-r — le casque couvre la tete. Le contexte est le pardon divin, pas la protection physique."
            }
          }
        }
      },
      // rhm pos=24 (adj rahimun)
      {
        word_key: "rhm", position: 24, sense_chosen: "misericorde",
        analysis_axes: {
          sense_chosen: "misericorde",
          concept_chosen: "Miséricorde/Tendresse",
          concepts: {
            "Miséricorde/Tendresse": {
              status: "retenu",
              senses: ["miséricorde", "tendresse", "compassion", "clémence", "bienveillance"],
              proof_ctx: "Le nom rahimun est un adjectif intensif (fa'il) indefini de la racine r-h-m. Le Lane's donne : misericordieux, celui qui fait misericorde activement, qui traite avec tendresse et compassion. La racine r-h-m porte le sens fondamental de « matrice, uterus » — la misericorde est l'amour de la mere pour l'enfant dans son ventre. Le Lane's precise que le rahim est celui dont la misericorde est active et constante — elle ne cesse pas et ne diminue pas. La forme intensive (fa'il) indique une qualite permanente et definissante.",
              axe1_verset: "Le nom rahimun est le dernier mot du verset — il ferme la sequence par la misericorde. Le champ lexical (interdit, contraint, peche, Pardonneur) montre une progression : interdiction → exception → pardon → misericorde. La misericorde est le degre au-dessus du pardon — le pardon efface la faute, la misericorde enveloppe de tendresse. Le verset commence par la severite (interdiction) et finit par la douceur (misericorde) — la structure montre que la douceur a le dernier mot.",
              axe2_voisins: "Le verset 163 parlait du « Tout-Misericordieux, le Tres-Misericordieux » (ar-rahman ar-rahim). Le verset 173 reprend rahim dans la formule de cloture. La sequence montre que les attributs de misericorde encadrent la legislation — la loi divine est promulguee par un Dieu misericordieux, pas par un tyran. Le verset 174 mentionne la sanction mais la misericorde du verset 173 reste en arriere-plan.",
              axe3_sourate: "La racine r-h-m est fondamentale dans la sourate al-Baqarah. En 2:1, la basmala commence par « Au nom de Dieu, le Tout-Misericordieux, le Tres-Misericordieux ». En 2:128, Ibrahim demande a Dieu de « se tourner vers eux, car Tu es le Repentant, le Misericordieux ». En 2:143, « Dieu est envers les gens plein de bonte et de misericorde ». La sourate est saturee de references a la misericorde — elle est le trait dominant de la nature divine dans cette sourate legislative.",
              axe4_coherence: "La racine r-h-m apparait environ 339 fois dans le Coran. Le mot rahim apparait environ 114 fois. La paire ghafur-rahim est la formule de cloture la plus frequente du Coran. La misericorde est l'attribut divin le plus cite — chaque sourate sauf une commence par la mention de la misericorde (basmala). Le Coran fait de la misericorde le premier et le dernier attribut de Dieu.",
              axe5_frequence: "Pour la mission du khalifa, la misericorde est le modele de la mission. Le khalifa doit etre misericordieux comme Dieu est misericordieux — la mission est une extension de la misericorde divine. Juger sans misericorde est une trahison de la mission. Le khalifa qui pardonne et fait misericorde imite les attributs divins — il est le representant d'un Dieu misericordieux, pas d'un Dieu vengeur."
            },
            "Matrice/Parenté": {
              status: "nul",
              senses: ["utérus", "matrice", "parenté utérine"],
              proof_ctx: "Le sens de matrice est le sens concret de r-h-m — le rahim est l'uterus. Le contexte est l'attribut divin de misericorde, pas la parente uterine. Le lien etymologique entre la matrice et la misericorde est conserve dans le sens retenu mais le referent ici est Dieu, pas un organe."
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

  const verseIds = [180];
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
  console.log('=== PIPELINE SOURATE 2 — VERSET 173 ===\n');
  await processVerse(173);
  await syncWordMeanings();
  console.log('\n=== PIPELINE V173 TERMINEE ===');
}

main().catch(e => console.error('FATAL:', e));
