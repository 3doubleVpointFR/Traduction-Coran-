const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

const verseData = {
  257: {
    verse_id: 264, analysis_id: 621,
    full_translation: "Allah est le Protecteur de ceux qui croient : Il les fait sortir des ténèbres à la lumière. Et ceux qui ne croient pas, leurs protecteurs sont les Tâghout, qui les font sortir de la lumière vers les ténèbres. Ceux-là sont les gens du Feu, où ils demeureront éternellement.",
    translation_arab: "Dieu est le protecteur de ceux qui ont cru : Il les fait sortir des ténèbres vers la lumière. Quant à ceux qui ont nié, leurs protecteurs sont les taghuts qui les font sortir de la lumière vers les ténèbres. Ceux-là sont les gens du Feu — ils y demeureront.",
    translation_explanation: `§DEMARCHE§
Le verset 2:257 forme avec le verset 2:256 un diptyque fondateur. Apres avoir pose le principe de la non-contrainte et du libre choix (2:256), le Coran decrit ici les consequences de ce choix : Dieu est le waliy (protecteur, tuteur) de ceux qui croient et Il les fait sortir des tenebres vers la lumiere ; les taghuts sont les awliya des mecreants et ils les font sortir de la lumiere vers les tenebres. La symetrie inversee est parfaite et deliberee.

La structure du verset est binaire et parallele : Allah / waliyyu / alladhina amanu / yukhrijuhum / min al-zulumati / ila al-nur, puis : alladhina kafaru / awliya'uhum / al-taghut / yukhrijunahum / min al-nuri / ila al-zulumati. Le meme schema (waliy — les siens — sortir — direction) est repete avec des elements inverses : croyants vs mecreants, Dieu vs taghut, tenebres → lumiere vs lumiere → tenebres. Cette symetrie inversee dit que les deux groupes sont dans des dynamiques exactement opposees.

Le mot waliy (racine w-l-y = etre proche, prendre en charge, proteger) designe celui qui a la charge active de quelqu'un. Dieu est waliyy des croyants — non pas ami passif mais tuteur actif qui fait sortir (yukhrijuhum = Il les fait sortir, causatif de kharaja). Les taghuts sont awliya (pluriel de waliy) des mecreants — mais faux protecteurs qui menent dans la mauvaise direction.

La paire lumiere/tenebres (nur/zulmat) est l'image centrale. Les tenebres sont au pluriel (zulumat) face a la lumiere au singulier (al-nur) — les voies de l'egarement sont multiples, la voie de la verite est une. La lumiere est definie (al-nur avec article = la lumiere par excellence), les tenebres sont indefinies et multiples.

Le verset se ferme sur la consequence eschatologique : 'ula'ika ashab al-nar hum fiha khalidun = ceux-la sont les gens du Feu, ils y demeureront'. La formule khalidun (participe actif pluriel = ceux qui demeureront) est la formule coranique standard de la permanence eschatologique.
§JUSTIFICATION§
"Protecteur" pour waliy : Lane atteste waliy = one who is near, a friend, a guardian, a protector — celui qui prend en charge et protege activement. "Font sortir" pour yukhrijuhum : Form IV causatif de kharaja = faire sortir, extraire — action active de mise en mouvement vers une nouvelle destination. "Tenebres" pour zulumat : pluriel de zulma = l'obscurite, les tenebres. Le pluriel zulumat signale des couches d'obscurite multiples et accumulees. "La lumiere" pour al-nur : article defini = la lumiere par excellence, la lumiere guidante et unique. "Les taghuts" pour al-taghut : tout ce qui transgresse les limites divines — idoles, tyrans, autorites illegitimes (racine t-gh-y = depasser les limites). "Gens du Feu" pour ashab al-nar : ashab = compagnons, gens de — ceux qui sont associes au Feu de façon permanente. "Ils y demeureront" pour hum fiha khalidun : khalidun = participe actif pluriel de khalada = demeurer, etre fixe pour toujours — formule standard de permanence eschatologique dans le Coran.
§CRITIQUE§
La traduction de Hamidullah rend ce verset : "Allah est le Protecteur de ceux qui croient : Il les fait sortir des tenebres a la lumiere. Et ceux qui ne croient pas, leurs protecteurs sont les Taghoût, qui les font sortir de la lumiere vers les tenebres. Ceux-la sont les gens du Feu, ou ils demeureront eternellement." Cette traduction est tres proche de la notre. Quelques divergences meritent d'etre notees. Premierement, "Protecteur" avec majuscule pour waliy est valide mais masque la richesse du terme : waliy designe une relation de proximite active et de prise en charge — 'tuteur-protecteur' rendrait mieux la dimension active que le simple 'Protecteur'. Deuxiemement, "Taghoût" garde le terme arabe avec majuscule — notre traduction "taghuts" sans majuscule le naturalise davantage tout en le conservant comme entite conceptuelle distincte. Troisiemement, "ils demeureront eternellement" pour khalidun : le Coran dit khalidun (ceux qui demeurent) sans adverbe d'eternite explicite dans ce verset — la permanence est dans le participe khalidun lui-meme, qui est plus precise que l'ajout d'"eternellement". "Ils y demeureront" (traduction de khalidun = demeurants) est plus precis. Notre traduction vise la fidelite semantique aux nuances du texte arabe tout en restant accessible en français courant.`,
    segments: [
      { position: 1, text_arab: "ٱللَّهُ", translation: "Dieu est", phonetic: "allahu", grammar_type: "particle" },
      { position: 2, text_arab: "وَلِىُّ", translation: "le protecteur", phonetic: "waliyyu", grammar_type: "noun", root_key: "wly" },
      { position: 3, text_arab: "ٱلَّذِينَ", translation: "de ceux qui", phonetic: "al-ladhina", grammar_type: "particle" },
      { position: 4, text_arab: "ءَامَنُوا۟", translation: "ont cru", phonetic: "amanu", grammar_type: "verb", root_key: "amn" },
      { position: 5, text_arab: "يُخْرِجُهُم", translation: "Il les fait sortir", phonetic: "yukhrijuhum", grammar_type: "verb", root_key: "xrj" },
      { position: 6, text_arab: "مِّنَ", translation: "des", phonetic: "mina", grammar_type: "particle" },
      { position: 7, text_arab: "ٱلظُّلُمَـٰتِ", translation: "tenebres", phonetic: "az-zulumat", grammar_type: "noun", root_key: "zlm" },
      { position: 8, text_arab: "إِلَى", translation: "vers", phonetic: "ila", grammar_type: "particle" },
      { position: 9, text_arab: "ٱلنُّورِ", translation: "la lumiere", phonetic: "an-nuri", grammar_type: "noun", root_key: "nwr" },
      { position: 10, text_arab: "وَٱلَّذِينَ", translation: "Et ceux qui", phonetic: "wa-l-ladhina", grammar_type: "particle" },
      { position: 11, text_arab: "كَفَرُوٓا۟", translation: "ont nie", phonetic: "kafaru", grammar_type: "verb", root_key: "kfr" },
      { position: 12, text_arab: "أَوْلِيَآؤُهُمُ", translation: "leurs protecteurs sont", phonetic: "awliya'uhum", grammar_type: "noun", root_key: "wly" },
      { position: 13, text_arab: "ٱلطَّـٰغُوتُ", translation: "les taghuts", phonetic: "at-taghut", grammar_type: "noun", root_key: "tghy" },
      { position: 14, text_arab: "يُخْرِجُونَهُم", translation: "qui les font sortir", phonetic: "yukhrijunahum", grammar_type: "verb", root_key: "xrj" },
      { position: 15, text_arab: "مِّنَ", translation: "de", phonetic: "mina", grammar_type: "particle" },
      { position: 16, text_arab: "ٱلنُّورِ", translation: "la lumiere", phonetic: "an-nuri", grammar_type: "noun", root_key: "nwr" },
      { position: 17, text_arab: "إِلَى", translation: "vers", phonetic: "ila", grammar_type: "particle" },
      { position: 18, text_arab: "ٱلظُّلُمَـٰتِ", translation: "les tenebres", phonetic: "az-zulumat", grammar_type: "noun", root_key: "zlm" },
      { position: 19, text_arab: "أُو۟لَـٰٓئِكَ", translation: "Ceux-la", phonetic: "ula'ika", grammar_type: "particle" },
      { position: 20, text_arab: "أَصْحَـٰبُ", translation: "sont les gens du", phonetic: "ashab", grammar_type: "noun", root_key: "shb" },
      { position: 21, text_arab: "ٱلنَّارِ", translation: "Feu", phonetic: "an-nari", grammar_type: "noun", root_key: "nar" },
      { position: 22, text_arab: "هُمْ", translation: "ils", phonetic: "hum", grammar_type: "particle" },
      { position: 23, text_arab: "فِيهَا", translation: "y", phonetic: "fiha", grammar_type: "particle" },
      { position: 24, text_arab: "خَـٰلِدُونَ", translation: "demeureront", phonetic: "khalidun", grammar_type: "noun", root_key: "xld" }
    ],
    vwa: [
      {
        word_key: "wly",
        position: 2,
        sense_chosen: "protection, tutelle — celui qui a la charge et la responsabilite de proteger, relation active de prise en charge",
        analysis_axes: {
          sense_chosen: "protection, tutelle — celui qui a la charge et la responsabilite de proteger, relation active de prise en charge",
          concept_chosen: "Protection/Tutelle",
          concepts: {
            "Protection/Tutelle": {
              status: "retenu",
              senses: [
                "waliya (Form I) = etre proche, adjacent, administrer",
                "waliy = celui qui est proche et protege, le tuteur, le protecteur actif",
                "awliya (pluriel) = les protecteurs, les tuteurs",
                "la walaya = la relation de protection et de prise en charge active"
              ],
              proof_ctx: "Lane's Lexicon: w-l-y = to be near, adjacent; to have charge of, to act as guardian; to protect, to be an ally. Waliy = a guardian, a protector, a friend who is near and acts on behalf of the one he protects. Awliya = plural, protectors, guardians. The root implies proximity that results in active care, not mere friendship.",
              axe1_verset: "Le verset montre immediatement ce que signifie etre waliy de Dieu : Il 'fait sortir les croyants des tenebres vers la lumiere' (yukhrijuhum min al-zulumati ila al-nur). Ce n'est pas une amitie passive — c'est une action de protection qui change le statut des croyants. Le waliy agit pour ceux dont il a la charge : il les deplace, les guide, les sort de l'obscurite. La walaya divine est dynamique et transformatrice, pas statique.",
              axe2_voisins: "La structure parallele est frappante : Dieu est waliy des croyants (tenebres vers lumiere) ; les taghuts sont awliya des mecreants (lumiere vers tenebres). Le parallelisme inverse montre que le waliy influence activement la direction de ceux qu'il protege. Un faux waliy mene dans la mauvaise direction — le taghut est un anti-protecteur, un tuteur pervers qui mene ses protegees vers la perdition au lieu de les en sortir.",
              axe3_sourate: "Al-Baqarah utilise waliy dans plusieurs contextes : le waliy de l'orphelin (2:220), les allies des mecreants (2:257). Le concept de walaya (tutelle, alliance) est central dans le Coran pour decrire les relations d'autorite et de protection. La walaya divine (Dieu comme waliy) est la forme la plus haute et la plus sure de protection — elle seule peut sortir des tenebres vers la lumiere.",
              axe4_coherence: "La racine w-l-y donne aussi : awla (plus proche, plus meritant, prioritaire) et mawla (maitre, affranchi, allie). La notion de proximite active est au coeur de la racine — le waliy est proche et agit de cette proximite. La walaya implique une asymetrie : le waliy a le pouvoir d'agir pour celui qui est sous sa protection. Dieu comme waliy des croyants est donc la relation de protection la plus puissante et la plus sure qui soit.",
              axe5_frequence: "La walaya divine (la tutelle/protection de Dieu) est un theme majeur du Coran. Dieu est 'waliy al-mu'minin' (protecteur des croyants) — une protection qui implique une action continue de guidance et de sortie des difficultes. Waliy apparait environ 23 fois dans le Coran dans des sens divers (ami intime, tuteur legal, protecteur divin). La richesse semantique du terme (proximite + action + autorite) en fait l'un des concepts relationnels les plus importants du vocabulaire coranique."
            },
            "AmitieProche/Alliance": {
              status: "probable",
              senses: [
                "waliy = ami intime, confident, celui qui est dans la proximite affective",
                "awliya = les allies, les amis proches",
                "la relation d'amitie et d'alliance (moins forte que la tutelle)"
              ],
              proof_ctx: "Lane's Lexicon: w-l-y also yields waliy in the sense of intimate friend, confidant, close ally. This sense is attested in Quranic usage where believers are not to take disbelievers as awliya (friends/allies) — 3:28, 4:144. The relational sense of close friendship is distinct from the stronger sense of active guardianship.",
              axe1_verset: "Le sens d'amitie proche est possible pour waliy mais il est trop faible pour rendre l'action decrite : 'yukhrijuhum min al-zulumati ila al-nur' (Il les fait sortir des tenebres vers la lumiere). Un ami n'a pas le pouvoir de faire sortir quelqu'un des tenebres — c'est l'action d'un tuteur ou d'un guide qui a autorite. Le sens de protection/tutelle est donc plus adequat au contexte.",
              axe2_voisins: "Le parallelisme avec les taghuts comme awliya des mecreants confirme que waliy ici designe une relation d'autorite et d'influence qui determine la direction du protege. Les taghuts ne sont pas simplement les amis des mecreants — ils sont leurs guides pervers qui les entrainent vers les tenebres. Cette relation d'entrainement actif pointe vers le sens de tutelle plutot que d'amitie.",
              axe3_sourate: "Dans al-Baqarah, le Coran met en garde contre la prise d'alliés (awliya) parmi les mecreants (2:165, 2:257). Dans ces contextes, awliya designe des allies ou amis proches. Mais dans 2:257, le waliy de Dieu est d'une autre nature : il ne s'agit pas d'une alliance reciproque mais d'une protection asymetrique et transformatrice.",
              axe4_coherence: "Les deux sens (amitie + tutelle) sont presents dans la racine w-l-y et les deux sont attestes dans le Coran. La distinction est de degre : l'amitie proche (sens faible) et la tutelle active (sens fort). Dans 2:257, la tutelle active est clairement dominante car le verset decrit une action concrete de transformation.",
              axe5_frequence: "Le sens d'amitie/alliance est tres frequent dans le Coran (notamment dans les mises en garde contre la prise d'alliés parmi les non-croyants). Le sens de tutelle divine est plus specifique mais theologically plus important. La distinction entre les deux sens de waliy est fondamentale pour comprendre la theologie coranique de la relation entre Dieu et les croyants."
            }
          }
        }
      },
      {
        word_key: "zlm",
        position: 7,
        sense_chosen: "tenebres, obscurite — absence de lumiere, obscurite profonde et multiple (pluriel zulumat)",
        analysis_axes: {
          sense_chosen: "tenebres, obscurite — absence de lumiere, obscurite profonde et multiple (pluriel zulumat)",
          concept_chosen: "Tenebres/Obscurite",
          concepts: {
            "Tenebres/Obscurite": {
              status: "retenu",
              senses: [
                "zalama (Form I) = s'obscurcir, devenir sombre",
                "zulma = obscurite, tenebres (sens physique premier)",
                "zulumat (pluriel) = les tenebres multiples et accumulees",
                "sens metaphorique : l'egarement spirituel, l'absence de lumiere divine"
              ],
              proof_ctx: "Lane's Lexicon: z-l-m = to be dark, to be in darkness; zulma = darkness, obscurity; zulumat = darknesses (plural), intensifying the sense of deep and manifold obscurity. The plural form suggests layers of darkness accumulated one upon another, in contrast to the singular nur (light). Both physical and metaphorical senses are attested.",
              axe1_verset: "La paire zulmat/nur (tenebres/lumiere) est l'image centrale du verset. Les tenebres sont au pluriel (zulumat) face a la lumiere au singulier (al-nur) — les tenebres se multiplient et s'accumulent, tandis que la lumiere est une et definie. C'est une image puissante : les voies de l'egarement sont multiples et diverses, la voie de la verite est une et claire. La pluralite des tenebres contraste avec l'unicite de la lumiere, tout comme la pluralite des fausses divinites contraste avec l'unicite de Dieu.",
              axe2_voisins: "Le verset 255 (ayat al-kursi) qui precede etablit que Dieu est le Vivant et l'Immuable. Le verset 256 (pas de contrainte) affirme le libre choix. Le verset 257 tire la consequence : Dieu protege ceux qui choisissent librement de croire — Il les fait sortir des tenebres. La logique narrative est coherente : apres la revelation de la verite (255), la liberte de choix (256), vient la protection de ceux qui choisissent bien (257).",
              axe3_sourate: "La paire lumiere/tenebres (nur/zulmat) est un schema recurrent dans al-Baqarah et le Coran entier. Elle structure la division entre croyants et incroyants, guidance et egarement. Al-Baqarah commence par 'ceux qui croient' (2:2-5) et leurs attributs de lumiere (guidance, salut). Le verset 2:257 reprend cette image en la dramatisant : la difference entre les croyants et les mecreants est la difference entre la lumiere et les tenebres.",
              axe4_coherence: "La racine Z-l-m donne a la fois 'tenebres' et 'injustice' — ce n'est pas une coincidence. Dans la pensee semitique, la tenebres morale et physique partagent la meme racine. L'injustice (zulm) est une forme de tenebres morales, les tenebres (zulma) sont une injustice faite a la lumiere. Cette double semantique renforce l'image : les mecreants sont dans les tenebres physiques ET dans l'injustice morale — les deux sont inseparables.",
              axe5_frequence: "Le theme nur/zulmat apparait tout au long du Coran. La sourate 14 (Ibrahim) commence : 'Alif Lam Ra, un Livre que Nous t'avons revele pour faire sortir les hommes des tenebres vers la lumiere' (litukhrija al-nasa min al-zulumati ila al-nur) — le meme verbe 'faire sortir' (akhraja) est utilise. La mission prophetique entiere est decrite comme une sortie des tenebres vers la lumiere. Ce verset 2:257 inscrit la walaya divine dans la meme logique : Dieu continue l'oeuvre prophetique en guidant les croyants hors des tenebres."
            },
            "Injustice/Oppression": {
              status: "probable",
              senses: [
                "zalama (Form I) = faire du tort, opprimer, etre injuste",
                "zalim = injuste, oppresseur",
                "zulm = l'injustice, le tort cause a autrui",
                "sens metaphorique tres present dans le Coran"
              ],
              proof_ctx: "Lane's Lexicon: z-l-m also yields zulm = wrongdoing, injustice, oppression; zalim = one who wrongs, an oppressor. This metaphorical sense is very frequent in the Quran where zalim designates those who wrong themselves or others by disbelieving or sinning. The double meaning (darkness/injustice) is etymologically connected.",
              axe1_verset: "Le sens d'injustice/oppression est tres present dans la racine Z-l-m mais dans ce verset, l'opposition directe avec 'nur' (lumiere) indique clairement le sens physique-metaphorique de tenebres. Si le sens vise avait ete l'injustice, on attendrait une opposition differente (justice vs injustice). L'opposition lumiere/tenebres est la plus naturelle et la plus pregnante ici.",
              axe2_voisins: "Le contexte du taghut (ce qui transgresse les limites) renforce la dimension d'injustice : les mecreants sont menes vers les tenebres PAR les taghuts (tyrans, idoles), ce qui implique une dimension d'oppression et d'injustice. Les deux sens se renforcent mutuellement : les tenebres des mecreants sont aussi l'injustice a laquelle les taghuts les exposent.",
              axe3_sourate: "Dans Al-Baqarah, zalim/zulm aparaissent frequemment pour designer les injustes (2:35, 2:51, 2:54, 2:59, 2:165, 2:193). Le sens d'injustice est tres present dans la sourate. Mais dans 2:257, c'est zulmat (tenebres, pluriel de zulma) qui est utilise — la forme nominale specifique aux tenebres physiques/metaphoriques, distincte de zulm (l'injustice comme acte).",
              axe4_coherence: "Les deux sens de la racine z-l-m s'eclairent mutuellement : les tenebres (sens physique-metaphorique) et l'injustice (sens moral) sont deux aspects d'une meme realite dans la pensee coranique. Vivre dans les tenebres = ne pas voir la verite = faire tort a soi-meme et aux autres. La semantique couverte par z-l-m est donc profondement coherente entre ses deux sens principaux.",
              axe5_frequence: "Zalim et ses derives aparaissent environ 315 fois dans le Coran — l'un des termes les plus frequents. Zulmat (tenebres) est moins frequent mais plus visuel et plus dramatique. Dans les contextes ou lumiere et tenebres sont opposes (14:1, 2:257, 33:43, 57:9), c'est toujours le sens de tenebres (obscurite) qui est premier, avec le sens d'injustice en arriere-plan."
            }
          }
        }
      },
      {
        word_key: "nwr",
        position: 9,
        sense_chosen: "lumiere, clarte — la presence de lumiere qui permet de voir, de distinguer et de se diriger, realite physique et metaphorique",
        analysis_axes: {
          sense_chosen: "lumiere, clarte — la presence de lumiere qui permet de voir, de distinguer et de se diriger, realite physique et metaphorique",
          concept_chosen: "Lumiere/Clarte",
          concepts: {
            "Lumiere/Clarte": {
              status: "retenu",
              senses: [
                "nara (Form I) = briller, etre lumineux",
                "nur = la lumiere, la clarte — sens physique premier",
                "al-nur = la lumiere guidante divine (sens metaphorique)",
                "la lumiere s'oppose aux tenebres comme la verite s'oppose a l'erreur"
              ],
              proof_ctx: "Lane's Lexicon: n-w-r = to shine, to give light; nur = light, clearness, brightness; al-nur = the light (with definite article, used for the divine light of guidance). The word encompasses physical light and its metaphorical extension to truth, guidance, and divine illumination. Distinct from nar (fire) despite related phonetics.",
              axe1_verset: "Al-nur (avec l'article defini = la lumiere par excellence) est le point d'arrivee de la sortie divine : yukhrijuhum min al-zulumati ila al-nur = Il les fait sortir des tenebres vers LA lumiere. L'article defini sur 'al-nur' et son unicite (singulier) face aux tenebres plurielles (zulumat) souligne que la lumiere est definie, claire, identifiable — une seule lumiere contre de multiples tenebres. C'est la lumiere de la guidance divine, la lumiere de la verite qui dissipe toutes les obscurites.",
              axe2_voisins: "La structure parallele inversee est frappante : les croyants vont des tenebres vers la lumiere (guides par Dieu), les mecreants vont de la lumiere vers les tenebres (guides par les taghuts). Ceux qui avaient de la lumiere (peut-etre la connaissance originelle, la fitrat — la disposition naturelle a reconnaitre Dieu) la perdent sous l'influence des taghuts. La lumiere peut donc etre perdue — ce qui rend d'autant plus precieuse la walaya divine qui la preserve.",
              axe3_sourate: "La lumiere est associee dans al-Baqarah a la guidance divine, au Coran lui-meme, et a la prophetie. Al-Baqarah 2:2 : 'ce Livre, point de doute, est une guidance pour les pieux' — la guidance est la lumiere. La Torah est aussi decrite comme 'lumiere' (nur) en 5:44. La lumiere que Dieu accorde aux croyants est la guidance qui leur permet de distinguer le vrai du faux, comme le rushd (2:256) s'est distingue du ghayy.",
              axe4_coherence: "Le verset 24:35 (la sourate de la Lumiere) dit que 'Allah est la lumiere des cieux et de la terre'. Cette association entre Dieu et la lumiere dans tout le Coran donne a al-nur dans 2:257 une dimension transcendante — la lumiere vers laquelle Dieu conduit les croyants est Sa propre lumiere, la lumiere de Sa presence et de Sa guidance. Dieu fait sortir les croyants vers Sa propre lumiere — il n'y a pas de separation entre le protecteur et la lumiere vers laquelle il guide.",
              axe5_frequence: "Nur apparait environ 43 fois dans le Coran. La metaphore lumiere/tenebres est l'une des images structurantes du texte coranique pour distinguer la foi de l'incroyance, la guidance de l'egarement. La racine n-w-r donne aussi nar (feu, racine proche) — la distinction entre la lumiere guidante (nur) et le feu destructeur (nar) est importante : dans ce verset, les croyants recoivent la lumiere (nur), tandis que les mecreants finissent dans le feu (nar, pos=21). La symetrie est parfaite."
            },
            "Feu/Flamme": {
              status: "probable",
              senses: [
                "racine n-w-r proche de n-a-r (feu)",
                "nar = le feu, la flamme (racine distincte mais phonetiquement proche)",
                "dans ce verset, pos=21 utilise 'nar' (feu eschatologique) distinct de 'nur' (lumiere)"
              ],
              proof_ctx: "Lane's Lexicon: n-w-r and n-a-r are distinct roots but phonetically close. Nur = light (guidance); nar = fire (destruction, hell). The Quran uses both in 2:257: nur (light, pos=9 and 16) for the divine guidance and nar (fire, pos=21) for the eschatological punishment. The distinction is semantically important.",
              axe1_verset: "Dans ce verset, nur (lumiere) et nar (feu) sont tous deux presents mais avec des sens distincts et opposes : la lumiere (nur) est ce vers quoi Dieu guide les croyants ; le feu (nar) est ce ou finissent les mecreants. La proximite phonetique entre nur et nar est significative dans le Coran — la lumiere et le feu sont deux formes de la meme energie, mais l'une guide et l'autre consume. Le Coran joue sur cette proximite.",
              axe2_voisins: "La distinction nur/nar dans ce verset est structurante : nur (pos=9, 16) = la lumiere guidante vers laquelle Dieu conduit les croyants ; nar (pos=21) = le feu eschatologique ou finissent les mecreants. Les mecreants passent de la lumiere (nur) aux tenebres (zulmat) et finissent dans le feu (nar) — la progression est coherente.",
              axe3_sourate: "Al-Baqarah utilise nar (feu) dans de nombreux contextes eschatologiques et metaphoriques (2:24 le feu de l'enfer, 2:39, 2:80, 2:81, etc.). Le nur (lumiere) est moins frequent mais plus positif. Les deux termes forment un couple d'opposes tout au long de la sourate.",
              axe4_coherence: "La distinction semantique nur/nar est fondamentale dans la theologie coranique : la lumiere divine (nur) est guidante et benefique, le feu de l'enfer (nar) est punissant et destructeur. Dans 2:257 les deux coexistent : la lumiere que les croyants recoivent (nur) et le feu que les mecreants subissent (nar) sont deux destinees opposees issues du meme choix fondamental.",
              axe5_frequence: "Nar (feu) apparait environ 145 fois dans le Coran, nur (lumiere) environ 43 fois. La difference de frequence est significative : le feu comme avertissement est plus frequent que la lumiere comme encouragement — la rhetorique coranique use plus souvent de la peur du feu que de la promesse de lumiere. Cependant, la lumiere est theologically plus centrale car elle definit la nature meme de Dieu (24:35)."
            }
          }
        }
      },
      {
        word_key: "tghy",
        position: 13,
        sense_chosen: "depassement des limites, transgression — tout ce qui transgresse les limites divines, idole, tyran, autorite illegitime",
        analysis_axes: {
          sense_chosen: "depassement des limites, transgression — tout ce qui transgresse les limites divines, idole, tyran, autorite illegitime",
          concept_chosen: "DepassementDesLimites/Transgression",
          concepts: {
            "DepassementDesLimites/Transgression": {
              status: "retenu",
              senses: [
                "taghiya (Form I) = depasser les limites, transgresser, etre excessif",
                "taghut = intensif collectif : tout ce qui transgresse les limites (idoles, tyrans, faux guides)",
                "tughyan = la transgression, le depassement des limites (meme racine)",
                "le taghut s'arroge une autorite qui n'appartient qu'a Dieu"
              ],
              proof_ctx: "Lane's Lexicon: t-gh-y = to exceed the proper bounds, to be inordinate, to transgress, to be rebellious; taghut = one who exceeds all bounds in evil; an idol, a false deity, a tyrant; used as both singular and plural in the Quran. Taghut designates anything that arrogates to itself divine authority — whether idol, tyrant, or illegitimate power.",
              axe1_verset: "Le taghut est presente comme le 'waliy' des mecreants — leur protecteur, tuteur, allie. Mais un waliy qui fait le chemin inverse de Dieu : lumiere vers tenebres. Le taghut n'est pas simplement une idole mais une force active qui entraine vers la mauvaise direction. Il est l'anti-waliy : il prend la forme d'un protecteur mais mene ses protegees vers la perdition. Sa transgression des limites divines se manifeste precisement dans cette usurpation du role de waliy.",
              axe2_voisins: "Le verset 256 mentionnait deja le taghut comme quelque chose qu'on rejette (yakfur bi-al-taghut). Les deux versets forment une paire : rejeter le taghut (256) = accepter le waliy divin (257). L'antithese taghut/Allah structure la section. Le taghut est la contre-force qui s'oppose a Dieu dans la lutte pour l'orientation des etres humains — il entraine vers les tenebres exactement comme Dieu entraine vers la lumiere.",
              axe3_sourate: "Al-Baqarah utilise taghut en 2:256 et 2:257. La sourate decrit les forces qui detournent de la voie divine — idoles, mauvais guides, faux protecteurs. Le taghut est la forme extreme de cette deviation : non seulement il ne guide pas vers Dieu, mais il detourne activement de Lui et entraine vers les tenebres. C'est l'ennemi actif de la walaya divine.",
              axe4_coherence: "Taghut vient de la meme racine que tughyan (le Coran 79:37 : 'quant a celui qui a transgresse — taga'). Le pharaon se proclamant 'votre seigneur supreme' (79:24) est l'exemple paradigmatique du taghut : il transgresse les limites divines en s'arrogeant une autorite absolue. Tout ce qui s'arroge une autorite divine est un taghut — idoles, tyrans, systemes d'oppression, jugements injustes.",
              axe5_frequence: "Taghut apparait 8 fois dans le Coran (2:256, 2:257, 4:51, 4:60, 4:76, 5:60, 16:36, 39:17). En 16:36 : 'a chaque nation Nous avons envoye un messager pour dire : adorez Dieu et rejetez le taghut' — le rejet du taghut est le message universel de tous les prophetes. En 4:60 : ceux qui vont plaider devant le taghut (autorite illégitime) alors qu'on leur a ordonne de le rejeter. Le concept couvre donc toute forme de transgression des limites divines qui pretend a une autorite legitime."
            },
            "Tyrannie/Oppression": {
              status: "probable",
              senses: [
                "le taghut comme tyran politique, despote",
                "tughyan = la tyrannie, l'exces de pouvoir politique",
                "pharaon comme exemple paradigmatique de taghut-tyran"
              ],
              proof_ctx: "Lane's Lexicon: t-gh-y also yields tughyan = inordinateness, exceeding all bounds; taghut in political sense = a tyrant, a despot who exceeds his authority. The Quranic paradigm of taghut-as-tyrant is Pharaoh who claimed divine authority.",
              axe1_verset: "La dimension tyrannique du taghut est presente mais elle est un cas particulier du sens plus large de transgression des limites. Dans ce verset, le taghut joue le role d'un faux waliy qui entraine vers les tenebres — ce role peut etre tenu par un tyran politique, une idole ou toute forme d'autorite illegitime. La tyrannie est la forme la plus visible du taghut mais pas la seule.",
              axe2_voisins: "Le verset 2:256 mentionnait le taghut dans un contexte de choix religieux (rejeter le taghut vs croire en Dieu) — ce contexte evoque plutot les idoles que les tyrans politiques. Dans 2:257, le taghut est presente comme waliy (protecteur) des mecreants — ce qui peut designer aussi bien un chef politique qu'une divinite tutélaire.",
              axe3_sourate: "Dans Al-Baqarah, le pharaon (taghut paradigmatique) est evoque comme celui qui opprimait les Israelites (2:49-50). La dimension politique de l'oppression est bien presente dans la sourate. Mais le taghut dans 2:256-257 semble designer plus largement tout ce qui usurpe la place de Dieu, pas seulement les tyrans politiques.",
              axe4_coherence: "La tyrannie politique et l'idolatrie religieuse sont liees dans la pensee coranique : le tyran qui se proclame dieu (comme le pharaon) est a la fois taghut politique et taghut religieux. La distinction entre les deux est secondaire car dans les deux cas c'est la transgression des limites divines qui definit le taghut.",
              axe5_frequence: "Le sens politique de taghut (tyran) est particulierement visible en 4:60 (ceux qui veulent plaider devant le taghut = les autorites illegitimes) et dans les references au tughyan du pharaon (79:17 : 'va vers le pharaon, il a transgresse — innahu tagha'). Le sens religieux (idole) est present en 2:256, 16:36, 39:17."
            }
          }
        }
      },
      {
        word_key: "xld",
        position: 24,
        sense_chosen: "demeure eternelle, permanence — rester sans fin, etre fixe pour toujours dans un lieu ou un etat",
        analysis_axes: {
          sense_chosen: "demeure eternelle, permanence — rester sans fin, etre fixe pour toujours dans un lieu ou un etat",
          concept_chosen: "DemeureEternelle/Permanence",
          concepts: {
            "DemeureEternelle/Permanence": {
              status: "retenu",
              senses: [
                "khalada (Form I) = rester longtemps, demeurer en permanence",
                "khalid = participe actif : celui qui demeure, qui reste fixe",
                "khalidun (pluriel) = ceux qui demeurent — formule eschatologique standard",
                "le khulud = l'eternite, l'immortalite, la permanence absolue"
              ],
              proof_ctx: "Lane's Lexicon: kh-l-d = to abide long, to remain permanently, to be immortal; khalid = one who abides, who remains permanently; khalidun = plural participle, those who remain. The Quranic formula 'hum fiha khalidun' (they shall abide therein) is the standard formula for eschatological permanence, applied both to paradise and hellfire.",
              axe1_verset: "Khalidun est un participe actif au pluriel = 'ceux qui demeurent'. La formule 'hum fiha khalidun' (ils y demeurent) est la formule coranique standard pour la permanence dans le Feu ou le Paradis. Elle clot le verset en soulignant que cette situation n'est pas temporaire. Le mouvement des versets precedents (sortir des tenebres vers la lumiere, ou de la lumiere vers les tenebres) s'arrete : les mecreants sont fixes dans le Feu — le mouvement cesse, la permanence s'installe.",
              axe2_voisins: "La permanence dans le Feu contraste avec le mouvement des versets precedents (sortir des tenebres vers la lumiere, ou de la lumiere vers les tenebres). Le mouvement s'arrete pour ceux qui ont suivi les taghuts — ils sont fixes dans le Feu. Cette fixite finale est le contraste ultime avec la mobilite de la guidance divine qui fait sortir les croyants : Dieu fait bouger (yukhrijuhum), le Feu fixe (khalidun). La dynamique et la stase eschatologiques s'opposent.",
              axe3_sourate: "Al-Baqarah utilise khalidun de nombreuses fois (2:25, 2:39, 2:81-82, 2:162, 2:217, 2:257, 2:275) pour decrire la permanence eschatologique des deux groupes. C'est une formule structurante de la description coranique de l'au-dela qui revient comme un refrain. La repetition de khalidun dans Al-Baqarah souligne que l'eternite (positive ou negative) est l'enjeu ultime de tous les choix faits dans cette vie.",
              axe4_coherence: "La racine kh-l-d donne aussi : khulud (eternite, immortalite) et mukhallad (immortalise, fixe pour toujours). Dans le Coran, le khulud est absolu pour certains groupes et conditionnel pour d'autres — le verset dit 'ils y demeurent' (khalidun) sans preciser de fin pour les gens du Feu. La permanence dans le Feu pour les mecreants absolus est l'une des donnees les plus fermes de l'eschatologie coranique.",
              axe5_frequence: "Khalidun apparait environ 87 fois dans le Coran, toujours dans des contextes eschatologiques. La permanence (khulud) est l'un des traits distinctifs de l'au-dela par rapport a ce monde qui passe (al-dunya = le plus proche/le passager). Le Coran insiste sur le contraste entre la brievete de la vie d'ici-bas et la permanence de la vie d'apres : les choix de la vie breve ont des consequences eternelles — khalidun en est le signe."
            },
            "JeunesseEternelle/ImmortalitePhysique": {
              status: "peu_probable",
              senses: [
                "khalada (sens premier) = rester jeune, ne pas vieillir",
                "mukhalladun = les immortels, ceux qui restent jeunes",
                "sens archaique, pre-coranique"
              ],
              proof_ctx: "Lane's Lexicon: kh-l-d primary sense = to remain youthful, not to age, to be immortal in the physical sense; khalid in pre-Islamic poetry = one who is forever young, who does not age. This physical sense is earlier than the eschatological sense but is displaced in Quranic usage by the sense of permanent abode.",
              axe1_verset: "Le sens de jeunesse eternelle/immortalite physique est etymologiquement premier mais il est peu pertinent dans ce contexte eschatologique. Dans 'hum fiha khalidun', khalidun designe la permanence dans le Feu, pas la jeunesse physique. Le Feu n'est pas un lieu ou l'on reste jeune — c'est un lieu ou l'on reste, point. Le sens de permanence spatiale et temporelle dans l'au-dela est le seul sens pertinent ici.",
              axe2_voisins: "Le contexte eschatologique du verset (gens du Feu) rend le sens de jeunesse physique totalement hors de propos. La permanence dans le Feu est le sens voulu — une permanence de souffrance, pas de jouissance ou de jeunesse. Le sens de jeunesse eternelle est associe au Paradis dans d'autres versets (les mukhalladu = serviteurs eternellement jeunes en 56:17, 76:19) mais jamais au Feu.",
              axe3_sourate: "Dans Al-Baqarah, toutes les occurrences de khalid/khalidun sont dans des contextes de permanence eschatologique (Paradis ou Feu), jamais dans le sens de jeunesse physique. Le sens eschatologique est clairement dominant dans la sourate et dans le Coran en general.",
              axe4_coherence: "Le sens de jeunesse eternelle (sens premier etymologique) a ete pratiquement entierement deplaci dans le Coran par le sens de permanence eschatologique. Cette evolution semantique est significative : le Coran recupere le concept de 'demeurer' (khalada) et lui donne une dimension exclusivement eschatologique.",
              axe5_frequence: "Le sens de jeunesse physique est present dans le Coran seulement dans mukhalladu (serviteurs eternellement jeunes, 56:17, 76:19) et pas dans khalidun. Pour khalidun, le sens est toujours et exclusivement la permanence dans une demeure eschatologique — Paradis ou Feu. La distinction est nette et coherente."
            }
          }
        }
      }
    ],
    daily_phrases: []
  }
};

async function main() {
  const data = verseData[257];

  // Mise a jour verse_analyses
  const { error: veErr } = await supabase.from('verse_analyses').update({
    full_translation: data.full_translation,
    translation_arab: data.translation_arab,
    translation_explanation: data.translation_explanation,
    segments: data.segments
  }).eq('id', data.analysis_id);

  if (veErr) { console.error('ERROR verse_analyses:', veErr.message); return; }
  console.log('verse_analyses updated (V257)');

  // Suppression des VWAs existants pour ce verset
  const { error: delErr } = await supabase.from('verse_word_analyses')
    .delete().eq('verse_id', data.verse_id);
  if (delErr) console.warn('DEL warning:', delErr.message);
  else console.log('  VWAs precedents supprimes pour verse_id=' + data.verse_id);

  // Insertion des nouveaux VWAs
  for (const word of data.vwa) {
    const { error: vwaErr } = await supabase.from('verse_word_analyses').insert({
      verse_id: data.verse_id,
      word_key: word.word_key,
      position: word.position,
      sense_chosen: word.sense_chosen,
      analysis_axes: word.analysis_axes
    });
    if (vwaErr) console.error('VWA ERROR ' + word.word_key + ':', vwaErr.message);
    else console.log('  VWA OK: ' + word.word_key + ' pos=' + word.position);
  }

  console.log('DONE V257');
}

main().catch(console.error);
