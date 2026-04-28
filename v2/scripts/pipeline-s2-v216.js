const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// =====================================================
// PIPELINE SOURATE 2 — VERSET 216
// verse_id=223, analysis_id=581
// "kutiba 'alaykumu al-qitalu wa-huwa kurhun lakum
//  wa-'asa an takrahu shay'an wa-huwa khayrun lakum
//  wa-'asa an tuhibbu shay'an wa-huwa sharrun lakum
//  wa-Allahu ya'lamu wa-antum la ta'lamuna"
// Le combat prescrit, l'aversion humaine vs le bien/mal divins.
// =====================================================

const verseData = {
  216: {
    verse_id: 223,
    analysis_id: 581,
    translation_arab: "Le combat vous a ete prescrit alors qu'il vous est de l'aversion. Il se peut que vous ayez de l'aversion pour quelque chose alors que c'est un bien pour vous. Et il se peut que vous aimiez quelque chose alors que c'est un mal pour vous. Dieu sait et vous ne savez pas.",
    full_translation: "Le combat vous a ete prescrit alors qu'il vous est desagreable. Or, il se peut que vous ayez de l'aversion pour une chose alors qu'elle vous est un bien. Et il se peut que vous aimiez une chose alors qu'elle vous est mauvaise. C'est Allah qui sait, alors que vous ne savez pas.",
    translation_explanation: `§DEMARCHE§
Le verset 216 est un verset d'epistemologie morale. La structure est : prescription (le combat est prescrit) → tension (vous le detestez) → principe (il se peut que ce que vous detestez soit un bien; il se peut que ce que vous aimez soit un mal) → conclusion (Dieu sait, vous ne savez pas).

Le verbe **kutiba** est un accompli passif 3MS de la racine k-t-b. Le Lane's donne : ecrire, inscrire, prescrire. Le passif « kutiba » (a ete ecrit/prescrit) supprime l'agent — la prescription est divine mais exprimee par le passif impersonnel. Le kutiba 'alaykum (il a ete prescrit pour vous) est la formule de la prescription divine dans le Coran.

Le nom **al-qitalu** est un nom defini nominatif de la racine q-t-l. Le Lane's donne : combat, bataille, guerre, acte de combattre. Le qital est l'acte de combattre — le combat organise, pas simplement la violence. Le nominatif fait de al-qital le sujet du passif kutiba — c'est le combat qui a ete prescrit.

Le nom **kurhun** est un nom nominatif indefini de la racine k-r-h. Le Lane's donne : aversion, repugnance, chose penible, chose que l'on fait a contrecoeur. Le kurh est l'aversion — l'etat de faire quelque chose qui deplait. La construction « wa-huwa kurhun lakum » = alors qu'il est de l'aversion pour vous (il vous est penible/repugnant).

La particule **'asa** est une particule de possibilite/eventualite. Le Lane's donne : il se peut que, peut-etre, probablement. C'est une particule modale qui exprime la possibilite — pas la certitude mais l'eventualite.

Le verbe **takrahu** est un inaccompli 2MP de la racine k-r-h. Vous avez de l'aversion pour, vous detestez. L'inaccompli marque la possibilite generale — il se peut que vous detestiez (quelque chose en general).

Le nom **shay'an** est un nom accusatif indefini de la racine sh-y-'. Le Lane's donne : chose, quelque chose, etant. Le shay' est l'entite indefinie — quelque chose, n'importe quoi. L'indefini marque la generalite — n'importe quelle chose que vous detestez.

Le nom **khayrun** est un nom nominatif indefini de la racine kh-y-r. Le bien. « Wa-huwa khayrun lakum » = alors que c'est un bien pour vous. La construction predicate marque le contraste : vous le detestez (aversion) mais c'est un bien (khay).

Le verbe **tuhibbu** est un inaccompli 2MP de la racine h-b-b. Le Lane's donne : aimer, cherir, affecter. La hubb est l'amour/l'affection. « An tuhibbu shay'an » = que vous aimiez quelque chose.

Le nom **sharrun** est un nom nominatif indefini de la racine sh-r-r. Le Lane's donne : mal, mauvais, ce qui nuit. Le sharr s'oppose au khay — le mal s'oppose au bien. La construction « wa-huwa sharrun lakum » = alors que c'est un mal pour vous — contraste avec l'amour que vous lui portez.

Le verbe **ya'lamu** est un inaccompli 3MS de la racine '-l-m. Dieu sait/connait. L'inaccompli marque la connaissance divine comme continue et permanente — Dieu sait constamment.

§JUSTIFICATION§
**le combat** — « al-qital » est traduit par « le combat » car c'est le sens direct de q-t-l. L'alternative « la guerre » est trop large — le qital est l'acte de combattre, pas necessairement une guerre longue.

**prescrit** — « kutiba 'alaykum » = a ete ecrit/prescrit pour vous. Traduit par « prescrit » car le passif kutiba dans ce sens designe la prescription divine — comme un decret ecrit dans le livre des obligations.

**aversion** — « kurh » est traduit par « aversion » car c'est l'etat de repugnance, de deplaisir. L'alternative « desagreable » (Hamidullah) est moins fort — l'aversion est plus profonde que le simple desagrement.

**il se peut** — « 'asa » est traduit par « il se peut » car c'est une particule de possibilite. L'alternative « or » (Hamidullah) perd la dimension modale.

**bien** — « khay » est traduit par « bien » (le bien qui vous est benefique).

**mal** — « sharr » est traduit par « mal » (le mal qui vous nuit).

§CRITIQUE§
Hamidullah traduit « wa-Allahu ya'lamu wa-antum la ta'lamuna » par « C'est Allah qui sait, alors que vous ne savez pas ». Cette traduction est fidele. Cependant, l'emphase implicite du verset — l'ecart epistemologique entre la connaissance divine absolue et l'ignorance humaine relative — merite d'etre soulignee. Le contraste n'est pas simplement quantitatif (Dieu sait plus que vous) mais qualitatif (Dieu sait ce qu'est vraiment le bien et le mal pour vous, vous ne pouvez pas savoir par vous-memes). L'enjeu n'est pas l'information mais la capacite de voir ce qui est veritablement bon pour soi-meme — une capacite que seul Dieu possede pleinement.`,
    segments: [
      { fr: "A ete prescrit pour vous", pos: "verbe", phon: "kutiba 'alaykumu", arabic: "كُتِبَ عَلَيْكُمُ", word_key: "ktb", is_particle: false, sense_retenu: "obligation/decret", position: 0 },
      { fr: "le combat", pos: "nom", phon: "al-qitalu", arabic: "ٱلْقِتَالُ", word_key: "qtl", is_particle: false, sense_retenu: "meurtre/combat", position: 1 },
      { fr: "alors qu'il vous est", phon: "wa-huwa", arabic: "وَهُوَ", is_particle: true, position: 2 },
      { fr: "de l'aversion", pos: "nom", phon: "kurhun lakum", arabic: "كُرْهٌ لَّكُمْ", word_key: "krh", is_particle: false, sense_retenu: "aversion/repugnance", position: 3 },
      { fr: "Il se peut", phon: "'asa", arabic: "وَعَسَىٰٓ", is_particle: true, position: 4 },
      { fr: "que vous ayez de l'aversion", pos: "verbe", phon: "an takrahu", arabic: "أَن تَكْرَهُوا۟", word_key: "krh", is_particle: false, sense_retenu: "aversion/repugnance", position: 5 },
      { fr: "pour quelque chose", pos: "nom", phon: "shay'an", arabic: "شَيْـًٔا", word_key: "shy", is_particle: false, sense_retenu: "chose/etant", position: 6 },
      { fr: "alors que c'est un bien pour vous", pos: "nom", phon: "wa-huwa khayrun lakum", arabic: "وَهُوَ خَيْرٌ لَّكُمْ", word_key: "khyr", is_particle: false, sense_retenu: "bien/excellence", position: 7 },
      { fr: "Et il se peut", phon: "wa-'asa", arabic: "وَعَسَىٰٓ", is_particle: true, position: 8 },
      { fr: "que vous aimiez", pos: "verbe", phon: "an tuhibbu", arabic: "أَن تُحِبُّوا۟", word_key: "hbb", is_particle: false, sense_retenu: "amour/affection", position: 9 },
      { fr: "quelque chose", pos: "nom", phon: "shay'an", arabic: "شَيْـًٔا", word_key: "shy", is_particle: false, sense_retenu: "chose/etant", position: 10 },
      { fr: "alors que c'est un mal pour vous", pos: "nom", phon: "wa-huwa sharrun lakum", arabic: "وَهُوَ شَرٌّ لَّكُمْ", word_key: "shrr", is_particle: false, sense_retenu: "mal/mechancete", position: 11 },
      { fr: "Dieu sait", pos: "verbe", phon: "wa-Allahu ya'lamu", arabic: "وَٱللَّهُ يَعْلَمُ", word_key: "elm", is_particle: false, sense_retenu: "savoir/connaissance", position: 12 },
      { fr: "et vous ne savez pas", phon: "wa-antum la ta'lamuna", arabic: "وَأَنتُمْ لَا تَعْلَمُونَ", is_particle: true, position: 13 }
    ],
    vwa: [
      {
        word_key: "ktb",
        position: 0,
        sense_chosen: "obligation/decret",
        analysis_axes: {
          sense_chosen: "obligation/decret",
          concept_chosen: "Obligation/Decret",
          concepts: {
            "Obligation/Decret": {
              status: "retenu",
              senses: ["prescrire", "obliger", "decret", "ce qui est ecrit/fixe", "inscription divine"],
              proof_ctx: "Le verbe kutiba est un accompli passif 3MS de la racine k-t-b. Le Lane's donne : ecrire, inscrire, prescrire, obliger. Le passif kutiba (a ete ecrit/prescrit) dans la construction « kutiba 'alaykum » = il a ete prescrit pour vous — la prescription divine. Le ktb designe l'ecriture divine des obligations. En 2:183, « kutiba 'alaykum al-siyam » (le jeune vous a ete prescrit). En 2:216, « kutiba 'alaykum al-qital » (le combat vous a ete prescrit). La formule est la meme — la prescription divine par l'ecriture.",
              axe1_verset: "La prescription (kutiba) du combat est la realite incontournable que le verset pose d'emblee. Le passif marque que la prescription vient de Dieu — on ne dit pas qui prescrit, mais le contexte et la formule standard indiquent que c'est Dieu. La prescription est un fait accompli — le combat a ete prescrit, c'est acquis.",
              axe2_voisins: "Le verset 215 parlait de la depense volontaire (infaq). Le verset 216 parle du combat prescrit (kutiba). La sequence montre deux formes d'action : la depense (volontaire, vers les vulnerables) et le combat (prescrit, dans la defense). Les deux sont des formes de service a la communaute.",
              axe3_sourate: "La racine k-t-b dans la sourate al-Baqarah designe la prescription divine en 2:183 (jeune), 2:216 (combat), 2:246 (combat aussi). La formule kutiba 'alaykum est la prescription divine standard — ce qui a ete ecrit comme obligation.",
              axe4_coherence: "La racine k-t-b apparait environ 319 fois dans le Coran. Le sens de prescription (kutiba = il a ete prescrit) est distinct du sens de livre (kitab). La prescription (kutiba) est un decret divin permanent et contraignant.",
              axe5_frequence: "Pour la mission du khalifa, la prescription divine (kutiba) est le cadre de l'obligation. Le khalifa ne peut pas s'y soustraire. Mais le verset montre aussi que la prescription peut être contre-intuitive (le combat est prescrit alors qu'on le deteste) — l'obligation divine transcende les preferences personnelles."
            },
            "Livre/Ecrit": {
              status: "nul",
              senses: ["livre", "texte", "ecrit"],
              proof_ctx: "Le sens de livre/texte est le sens nominal de k-t-b (al-kitab). Mais ici c'est la forme verbale passive (kutiba = a ete ecrit/prescrit) qui designe la prescription, pas le livre. Le contexte 'alaykum (sur vous) confirme le sens de prescription (obligation imposée)."
            }
          }
        }
      },
      {
        word_key: "qtl",
        position: 1,
        sense_chosen: "meurtre/combat",
        analysis_axes: {
          sense_chosen: "meurtre/combat",
          concept_chosen: "Meurtre/Combat",
          concepts: {
            "Meurtre/Combat": {
              status: "retenu",
              senses: ["combattre", "tuer", "combat", "bataille", "guerre"],
              proof_ctx: "Le nom al-qitalu est un nom defini nominatif de la racine q-t-l. Le Lane's donne : tuer, combattre. Le qital (madar de Form III) designe le combat reciproque — les deux parties se battent mutuellement. C'est distinct du simple meurtre (qatl) car la Form III implique la reciprocite. Al-qital est le combat organise, la guerre defensive.",
              axe1_verset: "Le combat (al-qital) est ce qui a ete prescrit. La prescription porte specifiquement sur le qital (combat reciproque, defense) et non sur le simple meurtre (qatl). Cette distinction est importante — la prescription concerne la defense, pas l'agression.",
              axe2_voisins: "Le verset 215 portait sur la depense (infaq) vers les vulnerables. Le verset 216 porte sur le combat (qital). Les deux versets couvrent deux formes de service a la communaute : la solidarite economique (infaq) et la defense collective (qital).",
              axe3_sourate: "La racine q-t-l est tres frequente dans la sourate al-Baqarah. En 2:190, 191, 193, 216, 217, 244, 246, etc. La sourate traite extensivement du combat dans ses dimensions defensive, ethique et historique.",
              axe4_coherence: "La racine q-t-l apparait environ 170 fois dans le Coran. La distinction qatl (tuer) et qital (combat reciproque) est fondamentale — le Coran prescrit le qital (defense) pas le qatl arbitraire.",
              axe5_frequence: "Pour la mission du khalifa, le combat (qital) est une responsabilite de defense, pas d'agression. La prescription du qital est contextuelle — defense de la communaute contre ceux qui l'attaquent. Le khalifa ne prescrit pas le combat par desir mais par obligation defensive."
            }
          }
        }
      },
      {
        word_key: "krh",
        position: 3,
        sense_chosen: "aversion/repugnance",
        analysis_axes: {
          sense_chosen: "aversion/repugnance",
          concept_chosen: "Aversion/Repugnance",
          concepts: {
            "Aversion/Repugnance": {
              status: "retenu",
              senses: ["aversion", "repugnance", "deplaisir", "penible", "faire a contrecoeur"],
              proof_ctx: "Le nom kurhun est un nom nominatif indefini de la racine k-r-h. Le Lane's donne : ce qu'on fait a contrecoeur, aversion, repugnance, chose penible. Le kurh est l'aversion naturelle — l'instinct qui repugne quelque chose. Ce n'est pas un jugement moral (ce n'est pas mauvais) mais une reaction naturelle (c'est penible).",
              axe1_verset: "L'aversion (kurhun lakum) pour le combat est reconnue comme une realite humaine naturelle. Le verset ne condamne pas l'aversion — c'est normal de repugner le combat. Mais il la transcende immediatement par le principe : il se peut que ce que tu repugnes soit un bien pour toi. La prescription ne supprime pas l'aversion, elle demande de la transcender.",
              axe2_voisins: "Le verset 214 montrait l'ebranlement des eprouves. Le verset 216 parle de l'aversion pour le combat. Les deux versets reconnaissent la reaction humaine naturelle face a l'adversite (ebranlement en 214, aversion en 216) — sans la condamner mais en posant un cadre pour la transcender.",
              axe3_sourate: "La racine k-r-h apparait dans la sourate al-Baqarah en 2:216. La tension entre l'obligation divine et l'aversion humaine est un theme important — le Coran reconnait les reactions humaines et les integre dans sa guidance.",
              axe4_coherence: "La racine k-r-h apparait environ 41 fois dans le Coran. L'aversion (kurh/karaha) est presentee comme une reaction humaine normale que la foi doit transcender. Le Coran ne demande pas l'elimination des emotions mais leur transformation.",
              axe5_frequence: "Pour la mission du khalifa, reconnaitre et nommer l'aversion est une etape de la gouvernance. Le khalifa sait que sa communaute peut avoir de l'aversion pour des obligations necessaires — il ne pretend pas que ces obligations sont plaisantes, mais il explique pourquoi elles sont bonnes malgre l'aversion."
            },
            "Contrainte/Force": {
              status: "probable",
              senses: ["contrainte", "ce qui est impose", "force", "obligation penible"],
              proof_ctx: "Le sens de contrainte est present dans k-r-h — le ikrah (Form IV) est la contrainte, forcer quelqu'un. Le kurh peut aussi designer la chose qui est faite sous contrainte. Dans le contexte du combat prescrit, la dimension de contrainte est active — le combat vous est prescrit alors qu'il vous est penible (une forme de contrainte morale).",
              axe1_verset: "La contrainte (le combat impose contre l'aversion) est implicite dans la construction kutiba + kurh.",
              axe2_voisins: "La prescription (kutiba) suivie de l'aversion (kurh) cree une tension prescription/resistance qui active le sens de contrainte.",
              axe3_sourate: "Le Coran distingue la contrainte externe (ikrah = coercition physique) de la resistance interne (kurh = aversion). Ici c'est la resistance interne.",
              axe4_coherence: "Le Coran dit « la yikrahu fi al-din » (pas de contrainte en religion) — mais le combat prescrit est une obligation externe, pas une constraint de croyance.",
              axe5_frequence: "Le khalifa doit gerer la tension entre obligation et resistance — sans ignorer la resistance humaine ni ceder devant elle."
            }
          }
        }
      },
      {
        word_key: "shy",
        position: 6,
        sense_chosen: "chose/etant",
        analysis_axes: {
          sense_chosen: "chose/etant",
          concept_chosen: "Chose/Etre",
          concepts: {
            "Chose/Etre": {
              status: "retenu",
              senses: ["chose", "quelque chose", "etant", "realite"],
              proof_ctx: "Le nom shay'an est un nom accusatif indefini de la racine sh-y-'. Le Lane's donne : chose, quelque chose, etant, realite existante. Le shay' est l'entite indefinie la plus generale — n'importe quelle realite. Dans le contexte « an takrahu shay'an » (que vous ayez de l'aversion pour quelque chose), le shay' generalise — n'importe quelle chose, pas seulement le combat.",
              axe1_verset: "Le shay' generalise le principe du verset au-dela du combat. Le principe est universel : il se peut que tu aies de l'aversion pour n'importe quelle chose (shay') alors que c'est un bien. Cette generalisation etend le principe de l'epistemologie morale a toute la vie.",
              axe2_voisins: "Le verset dit « il se peut que vous ayez de l'aversion pour quelque chose (shay') ». La generalite du shay' est intentionnelle — ce n'est pas seulement pour le combat mais pour toute chose que la perception humaine peut etre trompeuse.",
              axe3_sourate: "La racine sh-y-' est tres frequente dans le Coran. Le shay' est l'entite existante par excellence — Dieu est la source de tout shay' (Dieu sur toute chose est capable).",
              axe4_coherence: "La racine sh-y-' apparait environ 240 fois dans le Coran. Le shay' est le terme le plus neutre pour designer toute entite — contrairement aux termes plus specifiques comme amr (affaire) ou hal (situation).",
              axe5_frequence: "Pour la mission du khalifa, la generalite du shay' rappelle que le principe s'applique universellement. Tout ce que la communaute deteste peut etre un bien; tout ce qu'elle aime peut etre un mal. La sagesse khalifale consiste a voir au-dela des preferences immédiates."
            },
            "Volonte": {
              status: "nul",
              senses: ["vouloir", "volonte"],
              proof_ctx: "La racine sh-y-' designe a la fois la volonte (sha'a = vouloir) et la chose (shay' = chose). Ici le mot est shay'an (accusatif indefini = une chose), pas yasha' (il veut). La forme nominale shay' active le sens de chose, pas le sens de volonte."
            }
          }
        }
      },
      {
        word_key: "khyr",
        position: 7,
        sense_chosen: "bien/excellence",
        analysis_axes: {
          sense_chosen: "bien/excellence",
          concept_chosen: "Bien/Excellence",
          concepts: {
            "Bien/Excellence": {
              status: "retenu",
              senses: ["bien", "excellence", "avantage", "benefice", "ce qui est bon"],
              proof_ctx: "Le nom khayrun est un nom nominatif indefini de la racine kh-y-r. Le Lane's donne : bien, excellence, avantage, ce qui est bon, ce qui est preferable. La construction « huwa khayrun lakum » = c'est un bien pour vous. Le khay designe le benefice reel — pas la perception subjective mais la realite objective du bien.",
              axe1_verset: "Le bien (khay) est ce que la chose est reellement — independamment de l'aversion qu'on lui porte. La tension aversion/bien est le coeur du principe epistemologique : ce que tu repugnes peut etre objectivement un bien pour toi. La perception subjective (aversion) et la realite objective (bien) peuvent diverger.",
              axe2_voisins: "Le verset 215 parlait de la depense de bien (min khayrin). Le verset 216 parle du bien objectif que l'aversion cache. La racine kh-y-r traverse les deux versets avec des nuances : le khay qu'on depense (215) et le khay qu'on ne voit pas parce qu'on le deteste (216).",
              axe3_sourate: "La racine kh-y-r est tres frequente dans la sourate al-Baqarah. Le khay est la reference morale de toutes les decisions — qu'est-ce qui est bien ? La sourate repond a cette question par reference a la connaissance divine (Dieu sait ce qui est bien, pas vous seuls).",
              axe4_coherence: "La racine kh-y-r apparait environ 176 fois dans le Coran. Le bien (khay) dans le Coran est toujours defini par reference a la volonte divine — non pas par la preference humaine. Ce principe est explicite dans ce verset : Dieu sait ce qui est bien pour vous.",
              axe5_frequence: "Pour la mission du khalifa, distinguer le bien percu et le bien reel est une competence centrale. Le khalifa sait que ce que la communaute desire n'est pas toujours son bien reel, et que ce qu'elle deteste peut etre necessaire. La sagesse est de voir le bien reel meme derriere l'aversion."
            }
          }
        }
      },
      {
        word_key: "hbb",
        position: 9,
        sense_chosen: "amour/affection",
        analysis_axes: {
          sense_chosen: "amour/affection",
          concept_chosen: "Amour/Affection",
          concepts: {
            "Amour/Affection": {
              status: "retenu",
              senses: ["aimer", "cherir", "affecter", "amour", "attachement"],
              proof_ctx: "Le verbe tuhibbu est un inaccompli 2MP de la racine h-b-b. Le Lane's donne : aimer, cherir, avoir de l'affection pour. La hubb est l'amour — l'attachement positif a quelque chose. Dans le verset, l'amour (tuhibbu) s'oppose a l'aversion (takrahu) — les deux poles de la preference subjective humaine. L'amour subjectif peut etre trompeur : ce qu'on aime peut etre un mal.",
              axe1_verset: "L'amour (tuhibbu) est le second pole de la preference humaine. Le verset montre que les deux poles (aversion et amour) peuvent etre trompeurs — l'aversion peut cacher un bien, l'amour peut cacher un mal. La perception subjective humaine (que ce soit aversion ou amour) est epistemologiquement limitee.",
              axe2_voisins: "Le verset 212 disait que la vie terrestre a ete embellie pour les rejeteurs — une forme d'amour trompeur de la dunya. Le verset 216 generalise : l'amour humain peut pointer vers le mal. Ces deux versets se completent pour montrer les limites de la perception subjective.",
              axe3_sourate: "La racine h-b-b est presente dans la sourate al-Baqarah en 2:165 (ceux qui aiment les idoles comme on aime Dieu), en 2:177 (la charite des biens qu'on aime), en 2:216 (aimer quelque chose qui est un mal). La sourate decrit differentes formes d'amour — l'amour divin, l'amour des biens, l'amour trompeur.",
              axe4_coherence: "La racine h-b-b apparait environ 95 fois dans le Coran. L'amour (hubb) est un motif central du Coran — l'amour de Dieu, l'amour du Prophete, l'amour de la famille. Mais le verset 216 met en garde contre l'amour trompeur — aimer quelque chose n'en fait pas un bien.",
              axe5_frequence: "Pour la mission du khalifa, la gestion de l'amour populaire est un enjeu. Ce que la communaute aime n'est pas toujours ce qui est bon pour elle — le khalifa doit parfois aller contre les preferences de la communaute pour son bien reel. Cette tension est au coeur de la gouvernance sage."
            }
          }
        }
      },
      {
        word_key: "shrr",
        position: 11,
        sense_chosen: "mal/mechancete",
        analysis_axes: {
          sense_chosen: "mal/mechancete",
          concept_chosen: "Mal/Mechancete",
          concepts: {
            "Mal/Mechancete": {
              status: "retenu",
              senses: ["mal", "mauvais", "nuisible", "ce qui est mauvais", "nocif"],
              proof_ctx: "Le nom sharrun est un nom nominatif indefini de la racine sh-r-r. Le Lane's donne : mal, mauvais, nuisible, ce qui est mauvais. Le sharr s'oppose directement au khay (bien) — le mal s'oppose au bien. La construction « wa-huwa sharrun lakum » = alors que c'est un mal pour vous. Le mal est la realite objective cachee derriere l'amour subjectif.",
              axe1_verset: "Le mal (sharr) est ce que l'amour humain peut cacher. Parallelement au bien cache derriere l'aversion, le mal peut se cacher derriere l'amour. Le verset complete la symetrie : aversion/bien et amour/mal sont les deux paradoxes de la perception humaine limitee.",
              axe2_voisins: "Les versets 215 et 216 forment une paire : le bien (khay) de la depense (215) et l'opposition bien/mal (khay/sharr) dans la perception (216). Le khay de la depense est objectivement bon; le khay/sharr de la perception sont subjectivement perques mais objectivement l'inverse de ce qu'on croit.",
              axe3_sourate: "La racine sh-r-r apparait dans la sourate al-Baqarah en 2:36, 49, 81, 216. Le sharr est une des realites fondamentales — le mal que la fuite (shaytan) apporte, le mal des epreuves. En 2:216, le sharr peut etre ce qu'on aime — une forme de mal particulierement dangereuse car invisible.",
              axe4_coherence: "La racine sh-r-r apparait environ 57 fois dans le Coran. La paire bien/mal (khay/sharr) est une des oppositions fondamentales du Coran — tout est classe en bien ou mal. Mais la difficulte est que la perception humaine peut inverser les deux.",
              axe5_frequence: "Pour la mission du khalifa, le mal cache est le danger le plus pernicieux. Un khalifa peut faire du mal en pensant faire du bien (parce qu'il aime quelque chose qui est en realite un mal). La vigilance epistemologique — Dieu sait, moi je ne sais pas completement — est la protection contre ce danger."
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
              senses: ["savoir", "connaitre", "omniscience"],
              proof_ctx: "Le verbe ya'lamu est un inaccompli 3MS de la racine '-l-m. Le Lane's donne : savoir, connaitre. La construction « Allahu ya'lamu wa-antum la ta'lamuna » = Dieu sait et vous ne savez pas. L'inaccompli marque la connaissance divine comme continue et permanente. La negation (la ta'lamuna) ne nie pas tout savoir humain mais un savoir complet de ce qui est bien/mal.",
              axe1_verset: "La connaissance divine (ya'lamu) conclut le verset comme le fondement du principe expose. Le raisonnement est : vos perceptions (aversion/amour) sont limitees parce que vous ne savez pas completement — Dieu, Lui, sait. La prescription du combat est fondee sur la connaissance divine de ce qui est bien, contre l'aversion humaine.",
              axe2_voisins: "Le verset 215 concluait avec la connaissance divine (bihi 'alimun). Le verset 216 conclut aussi avec la connaissance divine (ya'lamu). Les deux versets encadrent leurs prescriptions par la reference a la connaissance divine — Dieu qui sait valide les obligations qu'Il prescrit.",
              axe3_sourate: "La racine '-l-m est la racine la plus frequente de la sourate al-Baqarah pour les attributs divins. La connaissance divine ('ilm) est la base de toute prescription divine — Dieu prescrit ce qu'Il prescrit parce qu'Il sait.",
              axe4_coherence: "La racine '-l-m apparait environ 854 fois dans le Coran. L'ecart entre la connaissance divine (absolue) et la connaissance humaine (limitee) est un theme fondamental du Coran. Reconnaitre cet ecart est la premiere etape de l'humilite epistemologique.",
              axe5_frequence: "Pour la mission du khalifa, l'humilite epistemologique est une vertu cardinale. « Dieu sait et vous ne savez pas » rappelle au khalifa que ses propres preferences et perceptions sont limitees. Il doit decider en suivant la guidance divine plutot que ses preferences personnelles."
            }
          }
        }
      }
    ],
    daily_phrases: []
  }
};

async function main() {
  const data = verseData[216];

  const { error: veErr } = await supabase.from('verse_analyses').update({
    translation_arab: data.translation_arab,
    full_translation: data.full_translation,
    translation_explanation: data.translation_explanation,
    segments: data.segments
  }).eq('id', data.analysis_id);
  if (veErr) { console.error('verse_analyses ERROR:', veErr.message); return; }
  console.log('verse_analyses updated (V216)');

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

  console.log('\n✅ V216 TERMINE');
}
main().catch(console.error);
