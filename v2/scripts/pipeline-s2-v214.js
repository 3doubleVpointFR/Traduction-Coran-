const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// =====================================================
// PIPELINE SOURATE 2 — VERSET 214
// verse_id=221, analysis_id=582
// "am hasibtum an tadkhulu al-jannata wa-lamma ya'tikum
//  mathalu alladhina khalaw min qablikum
//  massathum al-ba'sa'u wa-al-darra'u wa-zulzilu
//  hatta yaqula al-rasulu wa-alladhina amanu ma'ahu
//  mata nasru Allahi ala inna nasra Allahi qaribun"
// Question rhethorique : penser entrer au Jardin sans epreuve ?
// Exemple de ceux qui sont passes avant.
// =====================================================

const verseData = {
  214: {
    verse_id: 221,
    analysis_id: 582,
    translation_arab: "Avez-vous pense entrer au Jardin alors que ne vous est pas encore venu l'exemple de ceux qui ont passe avant vous ? La puissance du malheur et la nuisance les ont touches, et ils ont ete ebranles au point que le messager et ceux qui croyaient avec lui disent : Quand le secours de Dieu ? Certes le secours de Dieu est proche.",
    full_translation: "Pensez-vous entrer au Paradis alors que vous n'avez pas encore subi des epreuves semblables a celles que subirent ceux qui vecurent avant vous? Misere et maladie les avaient touches; et ils furent secoues jusqu'a ce que le Messager, et avec lui, ceux qui avaient cru, se fussent ecries: «Quand viendra le secours d'Allah?» - Quoi! le secours d'Allah est surement proche.",
    translation_explanation: `§DEMARCHE§
Le verset 214 est une question rhetorique d'avertissement. Apres avoir expose la divergence et la guidance (213), le verset interpelle les croyants directement : avez-vous pense entrer au Jardin sans epreuve ? La reponse implicite est non — les communautes precedentes ont ete eprouvees durement avant d'etre secourues. La structure est : question (avez-vous pense ?) → exemple historique (ceux qui ont passe) → description de l'epreuve (puissance du malheur, nuisance, ebranlement) → limite de l'epreuve (au point que le messager dit : quand le secours ?) → reponse divine (le secours de Dieu est proche).

Le verbe **hasibtum** est un accompli 2MP de la racine h-s-b. Le Lane's donne : calculer, evaluer, compter, supposer, penser, croire que. En forme d'accompli suivi d'un subjonctif (hasibtum an tadkhulu), le sens est « avez-vous suppose/cru que vous entreriez ». La racine h-s-b designe le calcul mental — l'evaluation, l'estimation. Ici, le sens est « supposer » ou « penser que ».

Le verbe **tadkhulu** est un subjonctif 2MP de la racine d-kh-l. Le Lane's donne : entrer, penetrer, s'introduire. La construction « hasibtum an tadkhulu » = avez-vous suppose que vous entreriez. L'entree dans le Jardin est conditionnelle — on ne peut pas la supposer acquise sans epreuve.

Le nom **al-jannata** est un nom defini accusatif de la racine j-n-n. Le Lane's donne : jardin, paradis, lieu couvert de vegetation dense. Le Jardin (al-janna) est dans le Coran le lieu de recompense final pour les croyants. Le defini marque le Jardin comme l'horizon connu de la promesse divine.

Le verbe **ya'tikum** est un inaccompli 3MS avec suffixe 2MP (vous vienne) de la racine a-t-y. La construction « wa-lamma ya'tikum » (alors que ne vous est pas encore venu) marque la condition non encore remplie — l'exemple des predecesseurs n'est pas encore « venu » aux croyants (ils ne l'ont pas encore vecu/exerce).

Le nom **mathalu** est un nominatif de la racine m-th-l. Le Lane's donne : ressemblance, exemple, modele, similitude, parabole. Le mathal est l'exemple qui illustre une realite par comparaison — un cas qui sert de modele. Le « mathal de ceux qui ont passe » = l'exemple historique de ce qui leur est arrive.

Le verbe **khalaw** est un accompli 3MP de la racine kh-l-w. Le Lane's donne : etre vide, partir, s'en aller, passer, se separer, etre desolé. « Alladhina khalaw min qablikum » = ceux qui ont passe avant vous — ceux dont l'epoque est revolue, qui sont passes et ne sont plus.

Le nom **al-ba'sa'u** est un nom defini nominatif de la racine b-'-s. Le Lane's donne : puissance, force, misere, malheur, durete de la vie. La ba'sa' est la puissance negative — le malheur sous sa forme la plus forte. Le Lane's distingue ba's (force/puissance) et ba'sa' (misere/malheur fort) — c'est l'intensite du malheur qui prime.

Le nom **al-darra'u** est un nom defini nominatif de la racine d-r-r. Le Lane's donne : nuisance, mal, dommage, tort, calamite. La darra' est le mal subi — la nuisance qui fait souffrir.

Le verbe **zulzilu** est un accompli passif 3MP de la racine z-l-z-l (quadriconsonantique). Le Lane's donne : ebranler, secouer, faire trembler. Le passif « zulzilu » (ils ont ete ebranles) supprime l'agent — les epreuves les ont ebranles. L'ebranlement est total — corps et ame.

Le verbe **yaqula** est un subjonctif 3MS de la racine q-w-l. « Hatta yaqula al-rasulu » = au point que le messager dise. La construction « hatta + subjonctif » marque la limite de l'action precedente — l'ebranlement a ete si fort qu'il a abouti a cette declaration du messager.

Le nom **al-rasulu** est un nom defini nominatif de la racine r-s-l. Le Lane's donne : messager, envoye, celui qui transmet un message. Le rasul est l'envoye divin — superieur au nabi par sa mission active de transmission.

L'adverbe interrogatif **mata** de la racine m-t-y. Le Lane's donne : quand ? (interrogatif temporel). « Mata nasru Allahi » = quand [vient] le secours de Dieu ? C'est une interrogation temporelle de la part du messager et des croyants — ils attendent le secours mais ne savent pas quand il viendra.

Le nom **nasru** est un nom de la racine n-s-r. Le Lane's donne : secours, aide, victoire, assistance. Le nasr est le secours qui renverse la situation — une aide decisive qui amene la victoire.

L'adjectif **qaribun** est un adjectif nominatif de la racine q-r-b. Le Lane's donne : proche, a cote, pres, imminant. Le qarib est ce qui est a courte distance — spatial ou temporel. « Nasru Allahi qaribun » = le secours de Dieu est proche — imminant, pas lointain.

§JUSTIFICATION§
**avez-vous pense** — « hasibtum » est traduit par « avez-vous pense » car c'est la valeur de supposition/calculation mentale. L'alternative « croyez-vous » est aussi valide mais moins fidele a la dimension de calcul/evaluation de h-s-b.

**entrer** — « tadkhulu » est traduit par « entrer » car c'est le sens direct de d-kh-l. L'alternative « acceder » est trop administratif.

**le Jardin** — « al-janna » est traduit par « le Jardin » car c'est le sens etymologique de j-n-n (jardin, lieu couvert). L'alternative « Paradis » (Hamidullah) est une traduction theologique; « Jardin » est plus literal et preserves l'image vegetale.

**ont passe** — « khalaw » est traduit par « ont passe » car c'est le sens de s'en aller, d'etre revolus. L'alternative « vecurent » (Hamidullah) est moins precis — khalaw dit qu'ils sont passes, pas seulement qu'ils ont vecu.

**puissance du malheur** — « al-ba'sa'u » est traduit par « puissance du malheur » car b-'-s designe a la fois la force et le malheur — la durete du sort. L'alternative « misere » (Hamidullah) est moins complete — ba'sa' est plus fort que la simple misere.

**nuisance** — « al-darra'u » est traduit par « nuisance » car d-r-r designe le mal inflige, le dommage. L'alternative « maladie » (Hamidullah) est une interpretation trop specifique — darra' peut designer toute forme de mal subi, pas seulement la maladie.

**ebranles** — « zulzilu » est traduit par « ebranles » car z-l-z-l designe le seisme, le tremblant. L'alternative « secoues » (Hamidullah) est acceptable mais « ebranles » rend mieux la dimension interne — ebranler touche le fondement interieur.

**le secours** — « nasru » est traduit par « le secours » car n-s-r designe l'aide decisive. L'alternative « victoire » est une des significations mais « secours » rend mieux le sens d'aide exterieure.

**proche** — « qaribun » est traduit par « proche » car q-r-b designe la proximite. L'alternative « surement proche » (Hamidullah) ajoute l'adverbe de certitude — le texte arabe dit juste « proche » (qarib), pas « surement proche ».

§CRITIQUE§
Hamidullah traduit « al-ba'sa'u wa-al-darra'u » par « misere et maladie ». Le terme « ba'sa' » dans le Lane's designe la durete et la misere mais aussi la force adverse, la puissance du malheur. Le terme « darra' » designe le mal, la nuisance, la calamite — pas specifiquement la maladie. Traduire darra' par « maladie » est trop restrictif — la calamite peut etre une guerre, une famine, une persecution, pas seulement une maladie. En restreignant les deux termes a « misere et maladie », Hamidullah reduit la portee universelle du verset a deux types specifiques d'epreuves.

Hamidullah traduit « nasru Allahi qaribun » par « le secours d'Allah est surement proche ». Le texte arabe dit « qaribun » (proche) sans adverbe d'insistance. L'ajout de « surement » est une interpretation qui renforce la certitude — certes, le secours est proche mais le texte est plus sobre. La sobriete de « le secours de Dieu est proche » sans emphase ajoutee preserve le caractere direct et confiant du message.`,
    segments: [
      { fr: "Ou bien", phon: "am", arabic: "أَمْ", is_particle: true, position: 0 },
      { fr: "avez-vous pense", pos: "verbe", phon: "hasibtum", arabic: "حَسِبْتُمْ", word_key: "hsb", is_particle: false, sense_retenu: "calcul/evaluation", position: 1 },
      { fr: "que vous entrez", pos: "verbe", phon: "an tadkhulu", arabic: "أَن تَدْخُلُوا۟", word_key: "dkhl", is_particle: false, sense_retenu: "entree/penetration", position: 2 },
      { fr: "le Jardin", pos: "nom", phon: "al-jannata", arabic: "ٱلْجَنَّةَ", word_key: "jnn", is_particle: false, sense_retenu: "jardin/paradis", position: 3 },
      { fr: "alors que pas encore", phon: "wa-lamma", arabic: "وَلَمَّا", is_particle: true, position: 4 },
      { fr: "ne vous soit venu", pos: "verbe", phon: "ya'tikum", arabic: "يَأْتِكُم", word_key: "aty", is_particle: false, sense_retenu: "venir/arriver", position: 5 },
      { fr: "l'exemple", pos: "nom", phon: "mathalu", arabic: "مَّثَلُ", word_key: "mthl", is_particle: false, sense_retenu: "ressemblance/exemple", position: 6 },
      { fr: "de ceux qui ont passe", pos: "verbe", phon: "alladhina khalaw", arabic: "ٱلَّذِينَ خَلَوْا۟", word_key: "khlw", is_particle: false, sense_retenu: "abandon/separation", position: 7 },
      { fr: "avant vous", phon: "min qablikum", arabic: "مِن قَبْلِكُم", is_particle: true, position: 8 },
      { fr: "les a touches la puissance du malheur", pos: "nom", phon: "massathum al-ba'sa'u", arabic: "مَّسَّتْهُمُ ٱلْبَأْسَآءُ", word_key: "bas", is_particle: false, sense_retenu: "puissance/malheur", position: 9 },
      { fr: "et la nuisance", pos: "nom", phon: "wa-al-darra'u", arabic: "وَٱلضَّرَّآءُ", word_key: "drr", is_particle: false, sense_retenu: "nuisance/mal", position: 10 },
      { fr: "et ils ont ete ebranles", pos: "verbe", phon: "wa-zulzilu", arabic: "وَزُلْزِلُوا۟", word_key: "zlzl", is_particle: false, sense_retenu: "seisme/ebranlement", position: 11 },
      { fr: "jusqu'a ce que dise", phon: "hatta yaqula", arabic: "حَتَّىٰ يَقُولَ", is_particle: true, position: 12 },
      { fr: "le messager", pos: "nom", phon: "al-rasulu", arabic: "ٱلرَّسُولُ", word_key: "rsl", is_particle: false, sense_retenu: "envoi/message", position: 13 },
      { fr: "et ceux qui croyaient avec lui", phon: "wa-alladhina amanu ma'ahu", arabic: "وَٱلَّذِينَ ءَامَنُوا۟ مَعَهُۥ", is_particle: true, position: 14 },
      { fr: "Quand", pos: "adv", phon: "mata", arabic: "مَتَىٰ", word_key: "mty", is_particle: false, sense_retenu: "interrogation temporelle", position: 15 },
      { fr: "le secours de Dieu", pos: "nom", phon: "nasru Allahi", arabic: "نَصْرُ ٱللَّهِ", word_key: "nsr", is_particle: false, sense_retenu: "secours/victoire", position: 16 },
      { fr: "Certes", phon: "ala inna", arabic: "أَلَآ إِنَّ", is_particle: true, position: 17 },
      { fr: "le secours de Dieu", phon: "nasra Allahi", arabic: "نَصْرَ ٱللَّهِ", is_particle: true, position: 18 },
      { fr: "est proche", pos: "adj", phon: "qaribun", arabic: "قَرِيبٌ", word_key: "qrb", is_particle: false, sense_retenu: "proximite/rapprochement", position: 19 }
    ],
    vwa: [
      {
        word_key: "hsb",
        position: 1,
        sense_chosen: "calcul/evaluation",
        analysis_axes: {
          sense_chosen: "calcul/evaluation",
          concept_chosen: "Calcul/Evaluation",
          concepts: {
            "Calcul/Evaluation": {
              status: "retenu",
              senses: ["calculer", "evaluer", "supposer", "penser", "croire que", "compter"],
              proof_ctx: "Le verbe hasibtum est un accompli 2MP de la racine h-s-b. Le Lane's donne : calculer, evaluer, compter, tenir compte, supposer, croire. En construction avec an + subjonctif, le sens est « avez-vous suppose/estime que ». Le h-s-b designe l'evaluation mentale — l'acte de calculer dans sa tete, d'estimer, de supposer. La forme accomplie 2MP interpelle directement le groupe des croyants — vous (pluriel 2eme personne) avez-vous suppose ?",
              axe1_verset: "La supposition (hasibtum) est le point de depart de la question rhetorique. Le champ lexical (entrer, Jardin, exemple, epreuve, secours) montre que la supposition est fausse — on ne peut pas supposer entrer dans le Jardin sans epreuve. La question est de structure negative : vous avez suppose quelque chose d'impossible. La question remet en cause un calcul errone.",
              axe2_voisins: "Le verset 213 parlait de la guidance divine et du chemin droit. Le verset 214 demande si les croyants pensent que suivre le chemin droit est sans epreuve. La connexion est : guidance (213) → question sur les conditions de cette guidance (214). On suit le chemin droit mais ce chemin passe par des epreuves.",
              axe3_sourate: "La racine h-s-b apparait dans la sourate al-Baqarah en 2:212 (bighayri hisabin — sans compte) et en 2:214 (hasibtum — avez-vous suppose). En 2:212, la provision divine est sans compte (abondante). En 2:214, le calcul humain est errone (supposer que le Jardin est sans epreuve). La sourate oppose le calcul humain errone et la provision divine sans limite.",
              axe4_coherence: "La racine h-s-b apparait environ 109 fois dans le Coran. La forme hasibtum (avez-vous suppose ?) est une formule d'interpellation frequente dans le Coran pour corriger des suppositions fausses. En 3:142, 9:16, la meme formule remet en cause des attentes non fondees des croyants.",
              axe5_frequence: "Pour la mission du khalifa, la remise en cause des suppositions fausses est une fonction pedagogique importante. Le khalifa ne doit pas laisser la communaute se reposer sur des calculs errones. La question « avez-vous suppose ? » est une invitation a reexaminer ses presuppositions."
            }
          }
        }
      },
      {
        word_key: "dkhl",
        position: 2,
        sense_chosen: "entree/penetration",
        analysis_axes: {
          sense_chosen: "entree/penetration",
          concept_chosen: "Entree/Penetration",
          concepts: {
            "Entree/Penetration": {
              status: "retenu",
              senses: ["entrer", "penetrer", "s'introduire", "acces", "franchir un seuil"],
              proof_ctx: "Le verbe tadkhulu est un subjonctif 2MP de la racine d-kh-l. Le Lane's donne : entrer, penetrer dans un lieu, s'introduire, acceder, franchir un seuil. Le dukhl est l'acte de penetrer a l'interieur — franchir la limite entre l'exterieur et l'interieur. Le Jardin est un espace interieur protege — y entrer est un acte de franchissement definitif.",
              axe1_verset: "L'entree dans le Jardin (tadkhulu al-jannata) est la recompense finale que les croyants esperent. La question rhetorique met en doute la possibilite d'y entrer sans les epreuves. L'entree presuppose un parcours — on n'entre pas dans le Jardin directement, sans avoir passe par les etapes.",
              axe2_voisins: "Le verset 212 montrait les premunies au-dessus au Jour du Relevement. Le verset 214 montre que cette superiorite ne vient pas sans epreuve. L'entree dans le Jardin est la forme concrete de cette superiorite eschatologique — mais elle a un prix.",
              axe3_sourate: "La racine d-kh-l apparait dans la sourate al-Baqarah en 2:58, 85, 89, 111, 114, 214. En 2:58, les Fils d'Israel entrent dans le village. En 2:111, seuls les Juifs ou les Chretiens entreront dans le Jardin (selon leurs pretentions). En 2:214, la question : avez-vous pense entrer ? La sourate construit l'entree dans le Jardin comme un horizon conditionnel.",
              axe4_coherence: "La racine d-kh-l apparait environ 125 fois dans le Coran. L'entree dans le Jardin est un motif eschatologique frequent. Le Coran presente l'entree dans le Jardin comme conditionnelle — elle depend d'actes (foi, oeuvres) et d'epreuves surmontees.",
              axe5_frequence: "Pour la mission du khalifa, l'entree dans le Jardin est l'horizon ultime qui donne sens a l'epreuve. Le khalifa sait que la mission sera eprouvante — mais l'entree dans le Jardin est la recompense au bout. Cette conscience transforme l'epreuve en investissement."
            }
          }
        }
      },
      {
        word_key: "jnn",
        position: 3,
        sense_chosen: "jardin/paradis",
        analysis_axes: {
          sense_chosen: "jardin/paradis",
          concept_chosen: "Jardin/Paradis",
          concepts: {
            "Jardin/Paradis": {
              status: "retenu",
              senses: ["jardin", "paradis", "lieu couvert de vegetation", "espace protege"],
              proof_ctx: "Le nom al-jannata est un nom defini accusatif de la racine j-n-n. Le Lane's donne : jardin, lieu couvert d'arbres et de vegetation dense, ce qui est cache et protege. La janna est etymologiquement un lieu couvert — la vegetation dense cache l'interieur. Dans le Coran, al-janna est le Paradis — le lieu de recompense finale pour les croyants. Le defini marque le Jardin comme connu et specifique.",
              axe1_verset: "Le Jardin (al-janna) est l'enjeu de la question rhetorique. Entrer au Jardin est la finalite que les croyants esperent. La question « avez-vous pense entrer au Jardin sans epreuve ? » montre que le Jardin est une destination qui se merite par l'epreuve.",
              axe2_voisins: "Le verset 212 montrait les premunies au-dessus au Jour du Relevement. Le Jardin est le lieu de cette superiorite eschatologique. La sequence fawq (au-dessus au Jour du Relevement) → janna (entrer dans le Jardin) montre que la superiorite eschatologique se concretise dans l'entree au Jardin.",
              axe3_sourate: "La racine j-n-n et la janna sont tres frequentes dans la sourate al-Baqarah. En 2:25, description du Jardin. En 2:35, Adam et Eve dans le Jardin. En 2:82, 111, 214, etc. La sourate construit le Jardin comme la destination finale de la mission humaine — commencee dans le Jardin (Adam), terminee dans le Jardin (paradis).",
              axe4_coherence: "La racine j-n-n apparait environ 147 fois dans le Coran pour le sens de jardin/paradis. Le Jardin est la promesse divine aux croyants. Le Coran le decrit comme un lieu de protection, de beautee et d'abondance — l'inverse de l'epreuve terrestre.",
              axe5_frequence: "Pour la mission du khalifa, le Jardin est la promesse qui soutient l'epreuve. La certitude que l'epreuve conduit au Jardin (pas malgre l'epreuve mais a travers elle) donne force pour continuer. Le khalifa investit dans l'epreuve presente pour le Jardin futur."
            }
          }
        }
      },
      {
        word_key: "aty",
        position: 5,
        sense_chosen: "venir/arriver",
        analysis_axes: {
          sense_chosen: "venir/arriver",
          concept_chosen: "Venue/Arrivee",
          concepts: {
            "Venue/Arrivee": {
              status: "retenu",
              senses: ["venir", "arriver", "parvenir", "se presenter"],
              proof_ctx: "Le verbe ya'tikum est un inaccompli 3MS avec suffixe 2MP de la racine a-t-y (Form I). Le Lane's donne : venir, arriver, se presenter, parvenir. La construction « wa-lamma ya'tikum mathalu » (alors que ne vous est pas encore venu l'exemple) marque une condition non remplie — l'exemple ne vous est pas encore venu. Le verbe a-t-y designe la venue de l'exemple comme un evenement a vivre.",
              axe1_verset: "La venue de l'exemple (ya'tikum mathalu) est la condition manquante pour entrer au Jardin. L'exemple ne vient pas par information seulement — il « vient » en tant que vecu, experience. La question implique que les epreuves precedentes n'ont pas encore touche les destinataires.",
              axe2_voisins: "Le verset 213 parlait des preuves « venues » (ja'atahum al-bayyinat). Le verset 214 parle de l'exemple qui n'est pas encore « venu ». La repetition de la venue (a-t-y) cree un parallele : les preuves sont venues (213), l'exemple n'est pas encore venu (214). La guidance requiert les deux — les preuves intellectuelles et l'exemple vecu.",
              axe3_sourate: "La racine a-t-y est tres frequente dans la sourate al-Baqarah. La venue est le mode d'action divine — Dieu apporte, envoie, fait venir. Ici la venue de l'exemple est un processus naturel de l'histoire — les epreuves « viennent » comme arrivent les evenements.",
              axe4_coherence: "La racine a-t-y designe systematiquement dans le Coran la venue d'evenements, de personnes, de signes. La venue de l'exemple (mathal) des precedents est un motif d'avertissement — la meme chose viendra vous toucher.",
              axe5_frequence: "Pour la mission du khalifa, les epreuves « viennent » — elles ne sont pas choisies. Le khalifa se prepare non pas a choisir ses epreuves mais a les recevoir quand elles « viennent ». La preparation est interieure, pas exterieure."
            }
          }
        }
      },
      {
        word_key: "mthl",
        position: 6,
        sense_chosen: "ressemblance/exemple",
        analysis_axes: {
          sense_chosen: "ressemblance/exemple",
          concept_chosen: "Ressemblance/Exemple",
          concepts: {
            "Ressemblance/Exemple": {
              status: "retenu",
              senses: ["exemple", "ressemblance", "similitude", "modele", "parabole", "cas"],
              proof_ctx: "Le nom mathalu est un nominatif de la racine m-th-l. Le Lane's donne : ressemblance, exemple, similitude, comparaison, parabole, ce qui illustre par comparaison. Le mathal est ce qui ressemble a quelque chose d'autre — l'exemple qui permet de comprendre une realite par analogie. Le « mathal des predecesseurs » est leur experience historique presentee comme modele-exemple.",
              axe1_verset: "L'exemple (mathal) des predecesseurs est ce qui doit « venir » aux croyants. L'exemple est leur histoire d'epreuve — ba'sa', darra', zilzal. L'exemple n'est pas seulement connu intellectuellement mais vecu. Le mathal est une forme pedagogique — apprendre par l'exemple.",
              axe2_voisins: "Le verset 213 parlait du Livre envoye pour juger entre les gens. Le verset 214 parle de l'exemple (mathal) des predecesseurs. Les deux outils de guidances sont complementaires : le Livre (texte) et l'exemple (histoire vecue).",
              axe3_sourate: "La racine m-th-l est frequente dans la sourate al-Baqarah. En 2:17, 19, 26, des exemples (amthal) sont donnes pour illustrer les hypocrites et les croyants. En 2:214, l'exemple est historique — les predecesseurs. La sourate utilise le mathal comme outil pedagogique central.",
              axe4_coherence: "La racine m-th-l apparait environ 169 fois dans le Coran. Le mathal est un des outils rhetoriques principaux du Coran — illustrer des realites abstraites par des exemples concrets. Le Coran dit souvent « We set forth examples » (wa-daraba mathal) pour ses enseignements.",
              axe5_frequence: "Pour la mission du khalifa, l'exemple (mathal) des predecesseurs est une ressource pedagogique. Connaitre l'histoire des epreuves passees prepare a affronter les epreuves presentes. Le khalifa est educateur — il utilise les exemples historiques pour former la communaute a la resilience."
            }
          }
        }
      },
      {
        word_key: "khlw",
        position: 7,
        sense_chosen: "abandon/separation",
        analysis_axes: {
          sense_chosen: "abandon/separation",
          concept_chosen: "Abandon/Separation",
          concepts: {
            "Abandon/Separation": {
              status: "retenu",
              senses: ["passer", "s'en aller", "etre parti", "etre revolu", "se vider", "se retirer"],
              proof_ctx: "Le verbe khalaw est un accompli 3MP de la racine kh-l-w. Le Lane's donne : etre vide, se vider, se retirer, partir, passer, quitter. Le kh-l-w designe fondamentalement le vide laisse par quelqu'un ou quelque chose qui est parti. « Alladhina khalaw min qablikum » = ceux qui sont passes (partis, revolus) avant vous. Le khalaw marque leur absence maintenant — ils ont passe, ils sont partis, leur epoque est revolue.",
              axe1_verset: "Ceux qui ont passe (khalaw) sont les generations precedentes qui ont vecu les epreuves et sont maintenant revolus. Leur exemple (mathal) est ce qui doit venir aux destinataires. Le khalaw marque la distance temporelle — ils sont loin maintenant, leur temps est revolu, mais leur exemple subsiste.",
              axe2_voisins: "Le verset 213 parlait des prophetes envoyes aux generations precedentes. Le verset 214 parle de ces generations comme exemple pour les croyants actuels. Les generatios qui ont passe (khalaw) ont ete eprouvees par les prophetes qu'elles ont rejectes et par les epreuves qui les ont touchees.",
              axe3_sourate: "La racine kh-l-w est presente dans la sourate al-Baqarah en 2:134, 141 (chaque communaute a ses actes — khalat) et en 2:214. « Tilka ummatan qad khalat » = cette communaute est passee. La racine marque la revolution des generatios — les precedentes sont passees et laissent leurs exemples.",
              axe4_coherence: "La racine kh-l-w apparait environ 84 fois dans le Coran. Le motif des generations precedentes (alladhina khalaw = ceux qui ont passe) est un marqueur d'exemple historique. Le Coran utilise regulierement les generatios passees comme avertissement ou modele pour les contemporains.",
              axe5_frequence: "Pour la mission du khalifa, les generatios passees sont des ressources d'apprentissage. Le khalifa s'inscrit dans une sequence de generatios — il herite de l'exemple de ceux qui ont passe et laissera son propre exemple pour ceux qui viennent. La conscience de cette sequence historique donne profondeur a la mission."
            }
          }
        }
      },
      {
        word_key: "bas",
        position: 9,
        sense_chosen: "puissance/malheur",
        analysis_axes: {
          sense_chosen: "puissance/malheur",
          concept_chosen: "Puissance/Malheur",
          concepts: {
            "Puissance/Malheur": {
              status: "retenu",
              senses: ["puissance du malheur", "durete", "misere intense", "force adverse"],
              proof_ctx: "Le nom al-ba'sa'u est un nom defini nominatif de la racine b-'-s. Le Lane's donne : ba's = force, puissance, durete, vigueur. Ba'sa' (forme intensive) = misere intense, force du malheur, durete extreme de la vie. Le ba'sa' est la forme intensive du ba's — la puissance du malheur dans sa forme la plus forte. C'est l'adversite dans sa dimension de force qui s'impose.",
              axe1_verset: "La puissance du malheur (al-ba'sa'u) est la premiere des deux dimensions de l'epreuve. Elle est completee par la nuisance (al-darra'u). Les deux forment ensemble l'image de l'epreuve complete — la force adverse qui s'impose (ba'sa') et le mal qui fait souffrir (darra'). L'epreuve est double : la force exterieure et la souffrance interieure.",
              axe2_voisins: "Le verset 213 parlait de la guidance vers la verite. Le verset 214 montre que cette guidance passe par des epreuves — ba'sa', darra', zilzal. Les generations precedentes guidees par les prophetes ont quand meme ete eprouvees. La guidance divine n'epargne pas l'epreuve.",
              axe3_sourate: "La racine b-'-s apparait dans la sourate al-Baqarah en 2:177 (le ba's = l'epreuve, dans la description du pieux qui supporte les epreuves) et en 2:214 (ba'sa' et darra'). La sourate associe la suporrtation des epreuves a la piete authentique.",
              axe4_coherence: "La racine b-'-s apparait environ 26 fois dans le Coran. Le ba's et la ba'sa' sont les termes pour les calamites et les epreuves. En 7:94, 165, Dieu eprouve les communautes par les calamites (ba's) pour qu'elles reviennent. L'epreuve est un processus divin de purification et de retour.",
              axe5_frequence: "Pour la mission du khalifa, la puissance du malheur (ba'sa') est une epreuve ineluctable. Le khalifa ne peut pas s'en premunir totalement — il doit l'endurer avec la confiance que le secours de Dieu est proche. La gestion de la ba'sa' (adversite puissante) est une competence centrale du khalifa."
            }
          }
        }
      },
      {
        word_key: "drr",
        position: 10,
        sense_chosen: "nuisance/mal",
        analysis_axes: {
          sense_chosen: "nuisance/mal",
          concept_chosen: "Nuisance/Mal",
          concepts: {
            "Nuisance/Mal": {
              status: "retenu",
              senses: ["nuisance", "mal", "dommage", "calamite", "tort", "souffrance"],
              proof_ctx: "Le nom al-darra'u est un nom defini nominatif de la racine d-r-r. Le Lane's donne : nuire, faire du tort, causer un dommage, souffrance, calamite, mal inflige. La darra' (forme intensive) est le mal dans sa dimension de nuisance — ce qui fait souffrir. Elle est distincte de la ba'sa' (force/puissance du malheur) — la darra' est le mal subi, la nuisance directe.",
              axe1_verset: "La nuisance (al-darra'u) complete la puissance du malheur (al-ba'sa'u) dans la description de l'epreuve. Les deux dimensions ensemble couvrent l'epreuve dans sa totalite : la force adverse qui s'impose (ba'sa') et la souffrance infligee (darra'). L'ebranlement (zilzal) suit ces deux dimensions — l'epreuve physique/sociale (ba'sa' et darra') produit l'ebranlement interieur (zilzal).",
              axe2_voisins: "Le verset 214 presente ba'sa' et darra' comme un couple d'epreuves complementaires. Ce meme couple apparait ailleurs dans le Coran (7:94, etc.) — c'est une formule etablie pour designer l'ensemble des calamites.",
              axe3_sourate: "La racine d-r-r apparait dans la sourate al-Baqarah en 2:175, 231, 232, 233, 282 pour le mal/dommage. En 2:214, la darra' est la calamite des predecesseurs. La sourate utilise d-r-r pour designer les formes de mal que l'on subit.",
              axe4_coherence: "La racine d-r-r apparait environ 72 fois dans le Coran. La darra' est souvent couplee avec le ba's pour former le tableau complet de l'epreuve. Le Coran montre que les epreuves touchent dans toutes les dimensions — externale (ba'sa') et interne (darra').",
              axe5_frequence: "Pour la mission du khalifa, reconnaitre les differentes dimensions de l'epreuve est important. La ba'sa' et la darra' sont deux formes d'adversite — la force qui s'oppose et la souffrance directe. Le khalifa doit traiter les deux dimensions pour soutenir sa communaute a travers l'epreuve."
            }
          }
        }
      },
      {
        word_key: "zlzl",
        position: 11,
        sense_chosen: "seisme/ebranlement",
        analysis_axes: {
          sense_chosen: "seisme/ebranlement",
          concept_chosen: "Seisme/Ebranlement",
          concepts: {
            "Seisme/Ebranlement": {
              status: "retenu",
              senses: ["secouer", "ebranler", "trembler", "seisme interieur"],
              proof_ctx: "Le verbe zulzilu est un accompli passif 3MP de la racine z-l-z-l (quadriconsonantique). Le Lane's donne : secouer, ebranler vivement, trembler. Le zalzal est le seisme — le tremblement de terre qui ebranle tout. Le passif « zulzilu » (ils ont ete ebranles) marque un ebranlement subi — pas voulu mais impose par les epreuves. L'ebranlement est total — ba'sa' et darra' ont d'abord touche, puis l'ebranlement est venu — secouer jusqu'au fondement.",
              axe1_verset: "L'ebranlement (zulzilu) est le resultat des deux epreuves precedentes — ba'sa' et darra' ont produit un ebranlement. L'echelle de l'epreuve est progressive : toucher (ba'sa' et darra') → ebranler (zilzal). L'ebranlement est le degre maximal d'epreuve — quand on est ebranle jusque dans ses fondements, on ne sait plus si on va tenir.",
              axe2_voisins: "L'ebranlement du verset 214 est si fort que le messager lui-meme dit « quand le secours de Dieu ? ». L'epreuve peut ebranler meme les plus forts. Cette honnêtete est remarquable — le messager n'est pas presente comme impassible mais comme humain qui souffre et attend.",
              axe3_sourate: "La racine z-l-z-l dans la sourate al-Baqarah aparait principalement en 2:214. Le seisme/ebranlement est une image de la limite de la resistance humaine — quand on est ebranle, on est a la limite de ses forces.",
              axe4_coherence: "La racine z-l-z-l apparait environ 8 fois dans le Coran. La Sourate 99 s'appelle al-Zalzalah (le Seisme) et decrit le Jour ou la terre sera ebranlée. L'ebranlement de 2:214 est une zalzala interieure — l'epreuve ebranle les personnes comme le seisme ebranle la terre.",
              axe5_frequence: "Pour la mission du khalifa, l'ebranlement est une realite a preparer. Les epreuves peuvent ebranler meme les plus engages. La cle est de ne pas confondre l'ebranlement avec la defaite — l'ebranlement est permis, voire signe que la pression est reelle. Le secours arrive apres l'ebranlement, pas avant."
            }
          }
        }
      },
      {
        word_key: "rsl",
        position: 13,
        sense_chosen: "envoi/message",
        analysis_axes: {
          sense_chosen: "envoi/message",
          concept_chosen: "Envoi/Message",
          concepts: {
            "Envoi/Message": {
              status: "retenu",
              senses: ["messager", "envoye", "message", "transmission"],
              proof_ctx: "Le nom al-rasulu est un nom defini nominatif de la racine r-s-l. Le Lane's donne : messager, envoye, celui qui transmet un message. Le rasul est l'envoye — celui qui est mis en mouvement par quelqu'un pour transmettre. Dans le contexte coranique, al-rasul designe le prophete en tant qu'envoye divin — Muhammad ou les prophetes predecesseurs. Le nominatif marque le rasul comme sujet de yaqula (dise).",
              axe1_verset: "Le messager (al-rasul) est l'acteur qui, au moment de l'ebranlement maximal, exprime la question « quand le secours de Dieu ? ». Le messager n'est pas present comme invulnerable — il est ebranle avec les croyants et exprime leur attente commune. Cette humanite du messager est significative.",
              axe2_voisins: "Le verset 213 parlait des prophetes (nabiyyun) envoyes par Dieu. Le verset 214 parle du messager (rasul) — une designation plus active. Le rasul est l'envoye en mission, le nabiyy est l'annonciateur. Le rasul du verset 214 est le prophete dans sa fonction d'executant de la mission.",
              axe3_sourate: "La racine r-s-l est tres frequente dans la sourate al-Baqarah. Le rasul (messager) est mentionne de nombreuses fois en reference a Muhammad et aux prophetes precedents. La sourate construit la figure du rasul comme centrale dans la relation entre Dieu et les humains.",
              axe4_coherence: "La racine r-s-l apparait environ 513 fois dans le Coran. Al-Rasul est l'envoye de Dieu — sa dignite est la plus haute apres les prophetes (nabiyy). Le Coran distingue nabiyy (prophete : recepteur de revelation) et rasul (messager : envoye en mission active).",
              axe5_frequence: "Pour la mission du khalifa, le messager est le modele de l'envoye qui endure l'epreuve avec sa communaute. Le khalifa s'identifie avec le rasul dans la dimension de l'ebranlement partage — il n'est pas au-dessus de l'epreuve mais dans l'epreuve avec sa communaute."
            }
          }
        }
      },
      {
        word_key: "mty",
        position: 15,
        sense_chosen: "interrogation temporelle",
        analysis_axes: {
          sense_chosen: "interrogation temporelle",
          concept_chosen: "Interrogation temporelle",
          concepts: {
            "Interrogation temporelle": {
              status: "retenu",
              senses: ["quand ?", "a quel moment ?", "interrogation sur le temps"],
              proof_ctx: "Le mot mata est un adverbe interrogatif temporel. Le Lane's donne : quand ?, a quel moment ? C'est un interrogatif de temps — on demande le moment d'un evenement. « Mata nasru Allahi » = quand [vient] le secours de Dieu ? La question porte sur le MOMENT du secours, pas sur sa realite — le secours est certain, mais quand arrive-t-il ?",
              axe1_verset: "L'interrogation temporelle (mata) exprime l'impatience de l'epreuve. Le messager et les croyants ne doutent pas que le secours viendra — ils demandent QUAND. Cette nuance est importante : ce n'est pas un doute mais une attente intense. L'adverbe qui suit (qaribun = proche) repond directement a mata — le secours est proche (pas loin temporellement).",
              axe2_voisins: "Le verset 2:210 posait la question rhetorique « hal yanẓuruna illa » (attendent-ils sinon que). Le verset 2:214 integre la question « mata » dans la bouche du messager lui-meme. Les deux versets parlent d'attente — mais en 2:210, l'attente passive des temporisateurs; en 2:214, l'attente active et legitime des eprouves.",
              axe3_sourate: "L'interrogatif mata est utilise dans plusieurs versets de la sourate al-Baqarah pour des questions temporelles. La question « quand le secours ? » est reprise pour montrer que meme les plus engages eprouvent l'impatience de l'epreuve — c'est humain et legitime.",
              axe4_coherence: "Le mot mata apparait environ 44 fois dans le Coran. Il est toujours un interrogatif sur le temps — quand ? Le Coran presente souvent des questions temporelles de ce type pour montrer l'attente humaine et la reponse divine.",
              axe5_frequence: "Pour la mission du khalifa, la question « quand ? » est la question legitime de l'eprouve. Le khalifa peut poser cette question — ce n'est pas un manque de foi mais une expression humaine d'impatience dans l'epreuve. La reponse divine (proche) est la certitude qui soutient."
            }
          }
        }
      },
      {
        word_key: "nsr",
        position: 16,
        sense_chosen: "secours/victoire",
        analysis_axes: {
          sense_chosen: "secours/victoire",
          concept_chosen: "Secours/Victoire",
          concepts: {
            "Secours/Victoire": {
              status: "retenu",
              senses: ["secours", "aide", "victoire", "assistance", "soutien"],
              proof_ctx: "Le nom nasru est un nom de la racine n-s-r. Le Lane's donne : secours, aide, assistance, victoire. Le nasr est l'aide decisive qui renverse la situation — une intervention exterieure qui change le cours des choses. Dans le contexte divin, nasru Allahi est l'intervention divine qui secourt les eprouves et donne la victoire aux croyants.",
              axe1_verset: "Le secours de Dieu (nasru Allahi) est l'objet de l'attente du messager et des croyants. La question « quand le secours ? » montre que le secours est attendu, certain dans son principe, incertain dans son moment. La reponse « le secours est proche » assure que l'attente ne sera pas longue.",
              axe2_voisins: "Le verset 2:210 montrait l'attente eschatologique (Dieu vient dans des nuages). Le verset 2:214 montre l'attente historique (le secours dans l'epreuve presente). Les deux types d'attente sont lies — la certitude du secours divin en history (2:214) fonde la certitude du secours eschatologique (2:210).",
              axe3_sourate: "La racine n-s-r est frequente dans la sourate al-Baqarah. En 2:107, Dieu est sans soutien ni aide (wali et nasir). En 2:214, le secours de Dieu (nasr Allah). En 2:286, Dieu nous secourt contre les gens qui rejettent. La sourate presente Dieu comme la source du secours contre l'adversite.",
              axe4_coherence: "La racine n-s-r apparait environ 159 fois dans le Coran. Le nasr Allah est une formule qui apparait notamment en Sourate 110 (iza ja'a nasr Allahi wa-al-fath — quand vient le secours de Dieu et la victoire). Le secours divin est toujours lie a la victoire finale.",
              axe5_frequence: "Pour la mission du khalifa, le secours divine est la garantie qui permet d'endurer. Le khalifa ne compte pas seulement sur ses propres forces — il attend et confie en le secours de Dieu. Cette confiance dans le nasr transforme l'epreuve en investissement."
            }
          }
        }
      },
      {
        word_key: "qrb",
        position: 19,
        sense_chosen: "proximite/rapprochement",
        analysis_axes: {
          sense_chosen: "proximite/rapprochement",
          concept_chosen: "Proximite/Rapprochement",
          concepts: {
            "Proximite/Rapprochement": {
              status: "retenu",
              senses: ["proche", "pres", "imminant", "a proximite", "rapprochement"],
              proof_ctx: "L'adjectif qaribun est un adjectif nominatif de la racine q-r-b. Le Lane's donne : proche, a cote, pres, imminant dans le temps ou l'espace. Le qarib designe ce qui est a courte distance — physique ou temporelle. « Nasru Allahi qaribun » = le secours de Dieu est proche (imminant dans le temps). La proximite est la reponse a la question temporelle mata (quand ?) — le secours est proche, c'est-a-dire imminant.",
              axe1_verset: "La proximite (qaribun) est la reponse a l'attente douloureuse. Apres l'epreuve (ba'sa', darra', zilzal) et la question impatiente (mata nasru Allahi ?), la reponse divine est sobre et directe : le secours est proche. La proximite transforme l'attente de torture en esperance confiante.",
              axe2_voisins: "Le verset 212 mentionnait les proches (aqrabun) dans la liste des beneficiaires de la depense. Le verset 214 clot sur la proximite (qaribun) du secours. La racine q-r-b dans les deux versets relie la proximite des liens humains (relatives) et la proximite du secours divin — Dieu est aussi proche que les proches.",
              axe3_sourate: "La racine q-r-b est frequente dans la sourate al-Baqarah. En 2:186, Dieu est proche (qaribun) — Il repond a l'appel de ceux qui appellent. La proximite divine est un theme central : Dieu n'est pas lointain et inaccessible mais proche.",
              axe4_coherence: "La racine q-r-b apparait environ 96 fois dans le Coran. La proximite divine est un motif theologique important — Dieu est plus proche de l'homme que sa veine jugulaire (50:16). Le nasr qarib de 2:214 est une actualisation de cette proximite divine dans le contexte de l'epreuve.",
              axe5_frequence: "Pour la mission du khalifa, la proximite du secours est la certitude qui soutient l'action dans l'adversite. Le khalifa agit meme sous l'epreuve parce qu'il sait que le secours est proche. Cette certitude transforme la perseverance en acte de foi."
            }
          }
        }
      }
    ],
    daily_phrases: []
  }
};

async function main() {
  const data = verseData[214];

  const { error: veErr } = await supabase.from('verse_analyses').update({
    translation_arab: data.translation_arab,
    full_translation: data.full_translation,
    translation_explanation: data.translation_explanation,
    segments: data.segments
  }).eq('id', data.analysis_id);
  if (veErr) { console.error('verse_analyses ERROR:', veErr.message); return; }
  console.log('verse_analyses updated (V214)');

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

  console.log('\n✅ V214 TERMINE');
}
main().catch(console.error);
