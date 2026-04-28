const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

const verseData = {
  verse_id: 267,
  analysis_id: 629,
  full_translation: "Et quand Abraham dit : « Seigneur, montre-moi comment Tu ressuscites les morts. » Il dit : « Est-ce que tu n'y crois pas ? » Il dit : « Si ! Mais c'est pour que mon cœur soit rassuré. » Il lui dit : « Prends donc quatre oiseaux, apprivoise-les, puis place-en une partie sur chaque montagne, ensuite appelle-les : ils viendront à toi en toute hâte. Sache qu'Allah est Puissant et Sage. »",
  translation_arab: "Et quand Ibrahim dit : 'Seigneur, montre-moi comment Tu vivifies les morts.' Il dit : 'N'as-tu pas cru ?' Il dit : 'Si, mais pour que mon coeur s'apaise.' Il dit : 'Prends quatre oiseaux, attache-les a toi, puis place une partie d'eux sur chaque montagne, puis appelle-les : ils viendront a toi en hate.' Et sache que Dieu est Puissant, Sage.",
  translation_explanation: `§DEMARCHE§
Le verset 2:260 est le troisieme et dernier grand recit de resurrection dans cette sequence d'al-Baqarah (apres 2:243 et 2:259). Il est le plus personnel et le plus interactif : Ibrahim lui-meme pose la question, participe au miracle et atteste le resultat. La question d'Ibrahim — arini kayfa tuhyi al-mawta (montre-moi comment Tu vivifies les morts) — n'exprime pas un doute mais une demande d'experience directe. La distinction entre la foi intellectuelle (il croit deja) et la certitude vecue (il veut voir le processus) est au coeur du verset. La reponse divine est pedagogique et experiencielle : Ibrahim doit prendre quatre oiseaux, les attacher a lui (surrunna ilayka), les disposer sur des montagnes separees, puis les appeler. Leur retour rapide (sa'yan) est la demonstration visuelle et personnelle de la resurrection. La demarche traductive consiste a rendre la progression dramatique de la demande et de la reponse, tout en preservant la precision de chaque terme : tuhyi (vivifier, Form IV causative), itma'anna (s'apaiser completement, Form X intensive), surrunna (attacher/apprivoiser, Form I), sa'yan (en hate, complement de maniere).

§JUSTIFICATION§
Arini traduit par "montre-moi" : racine rwy Form I imperatif = montrer, faire voir. Kayfa traduit par "comment" : interrogatif de maniere. Tuhyi traduit par "vivifies" : racine hyy Form IV inaccompli = faire vivre, vivifier (causatif). Al-mawta traduit par "les morts" : racine mwt, pluriel de mayyit = ce qui est mort. Bala traduit par "si" : particule de reponse affirmative a une question negative. Yatma'inna traduit par "s'apaise" : racine tmn Form X = s'apaiser profondement, se stabiliser interieurement. Qalb traduit par "coeur" : racine qlb = le coeur comme centre de la vie interieure et de la foi. Arba'ata traduit par "quatre" : nombre. Al-tayr traduit par "oiseaux" : racine tyr = voler, oiseau. Surrunna traduit par "attache-les" : racine swr Form I = incliner vers soi, attacher, habituer. Jabal traduit par "montagne" : racine jbl = elevation rocheuse permanente. Juz'an traduit par "partie" : racine jz' = portion, fraction. Da'a traduit par "appelle" : racine dw' = appeler, invoquer. Sa'yan traduit par "en hate" : racine s'y = marche rapide, empressement. Aziz traduit par "Puissant" : racine azz = etre fort, etre cher. Hakim traduit par "Sage" : racine hkm = sagesse, jugement.

§CRITIQUE§
La traduction de Hamidullah rend "apprivoise-les" pour surrunna — interpretation possible mais la signification litterale "incline-les vers toi, attache-les a toi" est plus fidele au sens de la racine swr (Form I) qui implique l'action de faire pencher ou attirer vers soi. Hamidullah traduit itma'inna par "soit rassuré" — acceptable, mais "s'apaise" rend mieux la Form X intensive qui designe un apaisement profond et durable, pas une simple reassurance ponctuelle. "En toute hate" chez Hamidullah pour sa'yan est correct ; notre "en hate" est plus sobre et fidele au complement de maniere arabe. La traduction de Hamidullah utilise "Allah" au lieu de "Dieu" — notre traduction maintient "Dieu" pour la fluidite francophone. La distinction cruciale entre awa lam tu'min (est-ce que tu n'as pas cru ?) et la reponse bala (si ! certes !) montre qu'Ibrahim croit deja — il cherche l'experience vecue, pas la preuve. Hamidullah rend cela correctement.`,
  segments: [
    { position: 1, text_arab: "وَإِذْ", translation: "Et quand", phonetic: "wa-idh", grammar_type: "particle" },
    { position: 2, text_arab: "قَالَ", translation: "dit", phonetic: "qala", grammar_type: "verb" },
    { position: 3, text_arab: "إِبْرَٰهِـۧمُ", translation: "Ibrahim :", phonetic: "ibrahimu", grammar_type: "noun" },
    { position: 4, text_arab: "رَبِّ", translation: "Seigneur,", phonetic: "rabbi", grammar_type: "noun", root_key: "rbb" },
    { position: 5, text_arab: "أَرِنِى", translation: "montre-moi", phonetic: "arini", grammar_type: "verb", root_key: "rwy" },
    { position: 6, text_arab: "كَيْفَ", translation: "comment", phonetic: "kayfa", grammar_type: "particle" },
    { position: 7, text_arab: "تُحْىِۦ", translation: "Tu vivifies", phonetic: "tuhyi", grammar_type: "verb", root_key: "hyy" },
    { position: 8, text_arab: "ٱلْمَوْتَىٰ", translation: "les morts.", phonetic: "al-mawta", grammar_type: "noun", root_key: "mwt" },
    { position: 9, text_arab: "قَالَ", translation: "Il dit :", phonetic: "qala", grammar_type: "verb" },
    { position: 10, text_arab: "أَوَلَمْ", translation: "N'as-tu pas", phonetic: "awa-lam", grammar_type: "particle" },
    { position: 11, text_arab: "تُؤْمِن", translation: "cru ?", phonetic: "tu'min", grammar_type: "verb", root_key: "amn" },
    { position: 12, text_arab: "قَالَ", translation: "Il dit :", phonetic: "qala", grammar_type: "verb" },
    { position: 13, text_arab: "بَلَىٰ", translation: "Si,", phonetic: "bala", grammar_type: "particle" },
    { position: 14, text_arab: "وَلَٰكِن", translation: "mais", phonetic: "wa-lakin", grammar_type: "particle" },
    { position: 15, text_arab: "لِّيَطْمَئِنَّ", translation: "pour que s'apaise", phonetic: "li-yatma'inna", grammar_type: "verb", root_key: "Tmn" },
    { position: 16, text_arab: "قَلْبِى", translation: "mon coeur.", phonetic: "qalbi", grammar_type: "noun", root_key: "qlb" },
    { position: 17, text_arab: "قَالَ", translation: "Il dit :", phonetic: "qala", grammar_type: "verb" },
    { position: 18, text_arab: "فَخُذْ", translation: "Prends", phonetic: "fa-khudh", grammar_type: "verb", root_key: "axdh" },
    { position: 19, text_arab: "أَرْبَعَةً", translation: "quatre", phonetic: "arba'atan", grammar_type: "noun" },
    { position: 20, text_arab: "مِّنَ", translation: "parmi les", phonetic: "mina", grammar_type: "particle" },
    { position: 21, text_arab: "ٱلطَّيْرِ", translation: "oiseaux,", phonetic: "al-tayri", grammar_type: "noun", root_key: "Tyr" },
    { position: 22, text_arab: "فَصُرْهُنَّ", translation: "attache-les", phonetic: "fa-surrunna", grammar_type: "verb", root_key: "Swr" },
    { position: 23, text_arab: "إِلَيْكَ", translation: "a toi,", phonetic: "ilayka", grammar_type: "particle" },
    { position: 24, text_arab: "ثُمَّ", translation: "puis", phonetic: "thumma", grammar_type: "particle" },
    { position: 25, text_arab: "ٱجْعَلْ", translation: "place", phonetic: "ij'al", grammar_type: "verb" },
    { position: 26, text_arab: "عَلَىٰ", translation: "sur", phonetic: "ala", grammar_type: "particle" },
    { position: 27, text_arab: "كُلِّ", translation: "chaque", phonetic: "kulli", grammar_type: "noun" },
    { position: 28, text_arab: "جَبَلٍ", translation: "montagne", phonetic: "jabalin", grammar_type: "noun", root_key: "jbl" },
    { position: 29, text_arab: "مِّنْهُنَّ", translation: "d'eux", phonetic: "minhunna", grammar_type: "particle" },
    { position: 30, text_arab: "جُزْءًا", translation: "une partie,", phonetic: "juz'an", grammar_type: "noun" },
    { position: 31, text_arab: "ثُمَّ", translation: "puis", phonetic: "thumma", grammar_type: "particle" },
    { position: 32, text_arab: "ٱدْعُهُنَّ", translation: "appelle-les :", phonetic: "ud'uhunna", grammar_type: "verb", root_key: "dEw" },
    { position: 33, text_arab: "يَأْتِينَكَ", translation: "ils viendront a toi", phonetic: "ya'tinaka", grammar_type: "verb", root_key: "aty" },
    { position: 34, text_arab: "سَعْيًا", translation: "en hate.", phonetic: "sa'yan", grammar_type: "noun", root_key: "sEy" },
    { position: 35, text_arab: "وَٱعْلَمْ", translation: "Et sache", phonetic: "wa-'lam", grammar_type: "verb", root_key: "alm" },
    { position: 36, text_arab: "أَنَّ", translation: "que", phonetic: "anna", grammar_type: "particle" },
    { position: 37, text_arab: "ٱللَّهَ", translation: "Dieu", phonetic: "allaha", grammar_type: "noun" },
    { position: 38, text_arab: "عَزِيزٌ", translation: "est Puissant,", phonetic: "azizun", grammar_type: "noun", root_key: "azz" },
    { position: 39, text_arab: "حَكِيمٌ", translation: "Sage.", phonetic: "hakimun", grammar_type: "noun", root_key: "hkm" }
  ],
  vwa: [
    {
      word_key: "hyy",
      position: 7,
      sense_chosen: "vivifier les morts, Form IV causative — Ibrahim demande a voir le PROCESSUS de la vivification divine",
      analysis_axes: {
        sense_chosen: "vivifier les morts, Form IV causative — Ibrahim demande a voir le PROCESSUS de la vivification divine",
        concept_chosen: "Vivification/DonnerLaVie",
        concepts: {
          "Vivification/DonnerLaVie": {
            status: "retenu",
            senses: [
              "etre vivant (sens premier de la racine hyy)",
              "Form IV ahya = faire vivre, vivifier — causatif de vie",
              "tuhyi = Tu vivifies (inaccompli 2MS Form IV, interpellation divine)",
              "vivifier ce qui est mort — acte creatif et recreatif exclusif"
            ],
            proof_ctx: "Lane's Lexicon: h-y-y = to be alive; Form IV ahya = to give life to, to quicken; tuhyi = you give life to (imperfect 2MS Form IV). Ibrahim asks not IF God can do it but HOW — kayfa tuhyi al-mawta = how do You give life to the dead. The Form IV causative is key: not being alive but causing life in the dead.",
            axe1_verset: "Kayfa tuhyi al-mawta = comment Tu vivifies les morts. La question d'Ibrahim n'est pas si Dieu peut le faire — il croit deja (bala, pos=13). Il veut voir COMMENT. C'est une demande de demonstration visuelle du processus, pas de preuve de la capacite divine. Ibrahim est a la fois croyant et demandeur d'experience : la foi intellectuelle ne lui suffit pas, il veut la certitude vecue qui apaisera son coeur. C'est une distinction theologique fondamentale du verset.",
            axe2_voisins: "Le verset 259 montrait la resurrection d'un homme (le voyageur) puis la reconstitution de son ane. Le verset 260 va plus loin : Ibrahim demande a voir la resurrection en direct et participe lui-meme a l'experience (il prend les oiseaux, les attache a lui, les place sur les montagnes, les appelle). La progression est narrative et pedagogique — chaque demonstration de resurrection est plus personnelle et plus interactive que la precedente.",
            axe3_sourate: "Les trois demonstrations de resurrection dans al-Baqarah (2:243, 2:259, 2:260) forment une serie de preuves croissantes. Le verset 260 est le plus personnel et le plus interactif — Ibrahim est a la fois spectateur et participant. La vivification (tuhyi) demandee ici repond exactement a la question posee au verset 258 (le roi pretendait donner la vie) : Dieu seul peut reellement vivifier les morts, et Il le demontre ici de maniere concrete.",
            axe4_coherence: "La meme question kayfa yuhyi hadhihi llahu (comment Dieu ferait-Il revivre celle-ci ?) etait posee au verset 259 par le voyageur devant la cite effondree. Ici c'est Ibrahim lui-meme qui pose la question directement a Dieu, et Dieu lui repond par une experience interactive. Les deux versets 259 et 260 forment un diptyque complementaire sur la resurrection : l'un montre la resurrection d'une personne, l'autre montre la resurrection d'oiseaux demembres — deux demonstrations differentes du meme pouvoir divin.",
            axe5_frequence: "Tuhyi al-mawta = Tu vivifies les morts est une expression cle dans le Coran pour la resurrection. Elle apparait dans la priere (la ilaha illa llahu al-hayyu al-qayyum = pas de dieu sauf Dieu, le Vivant, le Subsistant, 2:255), dans les attributs divins et dans les recits de prophetes. La vivification des morts est la preuve ultime de la toute-puissance divine — c'est pourquoi Ibrahim demande a en voir le processus plutot que simplement a en recevoir l'assurance verbale."
          },
          "Vie/Vitalite": {
            status: "peu_probable",
            senses: [
              "hayat = la vie comme etat d'existence",
              "hayy = vivant, anime"
            ],
            proof_ctx: "Lane's Lexicon: hyy = being alive, the state of life — distinct from the causative Form IV.",
            axe1_verset: "La Form IV causative (ahya > tuhyi) est utilisee, pas la Form I qui decrit l'etat de vie. Ibrahim ne demande pas a voir des vivants mais a voir Dieu causer la vie.",
            axe2_voisins: "Le complement al-mawta (les morts) impose le sens causatif : on fait vivre des morts, on ne decrit pas leur etat de vie.",
            axe3_sourate: "Le sens de vie comme etat est present partout dans al-Baqarah mais n'est pas l'enjeu de ce verset.",
            axe4_coherence: "La distinction Form I / Form IV est theologique et decisive pour ce verset.",
            axe5_frequence: "Tuhyi avec al-mawta impose toujours le sens causatif de vivification dans le Coran."
          }
        }
      }
    },
    {
      word_key: "Tmn",
      position: 15,
      sense_chosen: "s'apaiser profondement, atteindre la paix interieure — Form X intensive, certitude vecue au-dela de la foi intellectuelle",
      analysis_axes: {
        sense_chosen: "s'apaiser profondement, atteindre la paix interieure — Form X intensive, certitude vecue au-dela de la foi intellectuelle",
        concept_chosen: "Apaisement/PaixInterieure",
        concepts: {
          "Apaisement/PaixInterieure": {
            status: "retenu",
            senses: [
              "etre tranquille, etre apaise — sens premier de la racine",
              "itma'anna = Form X s'apaiser completement, atteindre la paix interieure profonde",
              "li-yatma'inna qalbi = pour que mon coeur s'apaise — apaisement recherche, pas encore atteint",
              "la certitude vecue et ressentie qui depasse la foi intellectuelle declaree"
            ],
            proof_ctx: "Lane's Lexicon: t-m-n = to be still, to be at rest, to be tranquil; Form X itma'anna = to be thoroughly tranquil, to be completely at rest — the Form X intensive indicates a deep and complete state of peace, not a superficial calm. Lane notes itma'anna al-qalb = the heart became perfectly at rest, free from doubt and anxiety.",
            axe1_verset: "Li-yatma'inna qalbi = pour que mon coeur s'apaise. Ibrahim ne doute pas de Dieu — il dit bala (si, certes oui) a la question n'as-tu pas cru ? Il cherche non une preuve intellectuelle mais une experience directe qui apaisera le coeur. La distinction entre la foi intellectuelle et la certitude interieure vecue est au coeur de ce verset. Ibrahim croit avec sa raison ; il demande a croire avec son coeur apaise par l'experience directe. C'est une demande de tuma'nina — l'etat de paix profonde qui vient de la certitude directement vecue.",
            axe2_voisins: "La reponse de Dieu (prends quatre oiseaux, place-les sur les montagnes, appelle-les) est une reponse pedagogique et experiencielle. Dieu ne repond pas par un argument theorique sur la resurrection — Il donne a Ibrahim une experience concrete qui produira l'apaisement cherche. La participation active d'Ibrahim (il prend, attache, place, appelle) est elle-meme partie de la pedagogie : l'apaisement vient de l'experience personnelle et active, pas de la simple observation.",
            axe3_sourate: "Al-Baqarah valorise la foi vecue et non seulement declaree. L'apaisement du coeur (tuma'nina) est dans le Coran le fruit de la remememoration divine (13:28 : a la par le souvenir de Dieu que les coeurs s'apaisent — a-la bi-dhikri llahi tatma'innu al-qulub). Ibrahim cherche ce meme apaisement par une experience visuelle directe. Le coeur (qalb) est le siege de la foi dans le Coran — non pas l'intellect seul mais le centre integre de la personne.",
            axe4_coherence: "La racine t-m-n donne aussi mutma'inn (serein, apaise) dans 89:27 (l'appel a l'ame apaisee — ya ayyatuha al-nafs al-mutma'inna). L'apaisement du coeur est un etat spirituel accompli qui vient de la certitude divine directement vecue. La Form X (itma'anna) exprime l'intensite et la completude de cet apaisement — non une tranquillite superficielle mais une paix profonde et stable. Ibrahim ne cherche pas a se sentir mieux momentanement — il veut la certitude durable.",
            axe5_frequence: "Itma'anna apparait environ 9 fois dans le Coran. Sa Form X intensive souligne l'aspect radical de la paix recherchee — s'apaiser completement et durablement. La formule la plus celebre est 13:28 (a-la bi-dhikri llahi tatma'innu al-qulub = c'est bien par le souvenir de Dieu que les coeurs s'apaisent) qui montre que la tuma'nina est le fruit de la relation directe et vecue avec Dieu — exactement ce qu'Ibrahim cherche ici par l'experience des oiseaux."
          },
          "Stabilisation/Affermissement": {
            status: "probable",
            senses: [
              "se stabiliser, ne plus vaciller",
              "itma'anna = se poser fermement, cesser d'osciller"
            ],
            proof_ctx: "Lane's Lexicon: itma'anna peut aussi signifier to become firm, to settle, to stop vacillating — sens de stabilisation connexe a l'apaisement.",
            axe1_verset: "La stabilisation et l'apaisement sont deux aspects complementaires de la tuma'nina. Le coeur qui s'apaise est aussi un coeur qui se stabilise dans la certitude.",
            axe2_voisins: "Les deux sens (apaisement et stabilisation) coexistent dans ce verset — Ibrahim cherche a la fois la paix interieure et la certitude ferme.",
            axe3_sourate: "La stabilisation de la foi est un theme d'al-Baqarah (les croyants dont la foi est ferme vs les hesitants).",
            axe4_coherence: "La Form X intensive cumule les deux sens : s'apaiser profondement ET se stabiliser dans la certitude.",
            axe5_frequence: "Les deux sens sont etymologiquement inclus dans la Form X de la racine t-m-n."
          }
        }
      }
    },
    {
      word_key: "Tyr",
      position: 21,
      sense_chosen: "oiseaux, volatiles — etres vivants dotes d'ailes, choisis pour leur mobilite et leur vie evidente",
      analysis_axes: {
        sense_chosen: "oiseaux, volatiles — etres vivants dotes d'ailes, choisis pour leur mobilite et leur vie evidente",
        concept_chosen: "Oiseau/Volatile",
        concepts: {
          "Oiseau/Volatile": {
            status: "retenu",
            senses: [
              "s'envoler, voler — sens premier de la racine tyr",
              "ta'ir = ce qui vole, oiseau (singulier)",
              "al-tayr = les oiseaux (pluriel collectif)",
              "etre vivant visible et mobile, dont la vie et la mort sont evidentes"
            ],
            proof_ctx: "Lane's Lexicon: t-y-r = to fly, to take wing; ta'ir = a bird, any winged creature; al-tayr = birds (collective plural). The root evokes flight and mobility as defining characteristics. In Arabic classical tradition, tayr also has the sense of omen (the flight of birds as augury), but this sense is clearly inapplicable here.",
            axe1_verset: "Ibrahim prend quatre oiseaux vivants, les attache a lui (surrunna ilayka), puis les demembre et en place les parties sur des montagnes separees, puis les appelle — et ils reviennent vivants. Les oiseaux sont choisis pour leur mobilite (ils volent, ils peuvent donc revenir de loin), leur vie evidente (on voit clairement qu'ils sont vivants) et leur mort visible (on voit les os et les morceaux). Ils sont le support parfait pour une demonstration de resurrection qui doit etre visible et incontestable.",
            axe2_voisins: "Les quatre oiseaux sur quatre montagnes differentes amplifient le miracle — non pas un seul oiseau ressuscite mais des morceaux disperses sur plusieurs sommets qui se reconstituent a distance et reviennent en hate. L'ampleur du miracle (quatre oiseaux, plusieurs montagnes, distance entre les morceaux) est proportionnelle a l'apaisement profond recherche par Ibrahim. La demonstration doit etre spectaculaire et incontestable pour produire la tuma'nina.",
            axe3_sourate: "Les oiseaux (tayr) apparaissent dans le Coran dans des contextes miraculeux : les ababil de la sourate 105 (les oiseaux qui detruisent l'armee de l'elephant), Salomon qui comprend le langage des oiseaux (27:16 : ullimna mantiq al-tayr). L'oiseau est souvent l'instrument de demonstration divine dans les recits prophetiques. La meme image (oiseaux vivifies) revient chez Jesus en 3:49.",
            axe4_coherence: "La meme image (oiseaux ressuscites ou vivifies) revient en 3:49 en relation avec Jesus (il modele des oiseaux d'argile et leur insuffle la vie par la permission de Dieu). La resurrection ou la vivification d'oiseaux est associee aux prophetes qui temoignent de la puissance divine sur la vie. Ibrahim demande a voir comment Dieu vivifie les morts, et Dieu lui repond par les oiseaux — un signe vivant et mobile de Sa puissance.",
            axe5_frequence: "Tayr/ta'ir apparait environ 13 fois dans le Coran. L'oiseau est a la fois creature du monde naturel (la chasse et la peche en 5:3) et symbole de la liberte, de la vie spirituelle et de la mission divine. Dans ce verset, les oiseaux sont choisis pour leur carachere concret et observable — Ibrahim peut les tenir, les demembrer, voir les morceaux et les voir revenir. C'est une demonstration empirique, pas symbolique."
          },
          "Presage/Omen": {
            status: "peu_probable",
            senses: [
              "tayr comme presage tire du vol des oiseaux",
              "ti'ra = omen, augure (tradition pre-islamique)"
            ],
            proof_ctx: "Lane's Lexicon: dans l'arabe pre-islamique, tayr et ti'ra designaient les presages tires du vol des oiseaux (comme l'augure romain). Le Coran mentionne ce sens en 7:131 et 36:18.",
            axe1_verset: "Dans ce verset, les oiseaux sont explicitement des animaux physiques que Ibrahim prend et manipule — pas des symboles de presage.",
            axe2_voisins: "Le contexte de demonstration empirique de la resurrection exclut tout sens de presage ou d'omen.",
            axe3_sourate: "Le Coran rejette les presages tires des oiseaux (7:131) — il est impossible que ce verset utilise tayr dans ce sens condamne.",
            axe4_coherence: "Le sens de presage est etymologiquement connexe mais semantiquement exclu par le contexte.",
            axe5_frequence: "Le sens de presage est minoritaire dans le Coran et totalement inapplicable ici."
          }
        }
      }
    },
    {
      word_key: "Swr",
      position: 22,
      sense_chosen: "attacher a soi, incliner vers soi — apprivoiser les oiseaux pour qu'ils repondent a l'appel",
      analysis_axes: {
        sense_chosen: "attacher a soi, incliner vers soi — apprivoiser les oiseaux pour qu'ils repondent a l'appel",
        concept_chosen: "Habituation/Apprivoisement",
        concepts: {
          "Habituation/Apprivoisement": {
            status: "retenu",
            senses: [
              "incliner, faire pencher vers — sens premier de swr Form I",
              "surrunna ilayka = incline-les vers toi, attache-les a ta personne",
              "apprivoiser, habituer les oiseaux a reconnaitre leur maitre",
              "creer le lien personnel qui rendra possible l'appel a distance"
            ],
            proof_ctx: "Lane's Lexicon: s-w-r (Form I) = to incline, to lean towards, to draw towards; surrunna ilayka = incline them towards you, draw them to you. The majority of classical exegetes (Ibn Abbas, al-Tabari, al-Qurtubi) interpret fa-surrunna ilayka as 'familiarize them with you, make them know you' — the condition for them to respond to the call from a distance. Some read sawwarhunna (Form II) = give them a form, but the Form I incline/attach reading fits better with the narrative logic.",
            axe1_verset: "Fa-khudh arba'ata min al-tayr fa-surrunna ilayka = prends quatre oiseaux et incline-les/attache-les vers toi. L'instruction est sequentielle : prendre les oiseaux (les avoir physiquement), puis les attacher/habituer a sa personne pour qu'ils la reconnaissent. Ensuite les placer sur des montagnes separees, puis les appeler — et ils reviennent. L'habituation a Ibrahim est la condition qui rend possible le retour a l'appel : ce ne sont pas des oiseaux inconnus qui reviennent, mais des oiseaux qui ont reconnu leur maitre.",
            axe2_voisins: "L'habituation des oiseaux (pos=22-23) est la premiere etape qui rend possible l'appel a distance (pos=32-34). Ibrahim ne ressuscite pas des oiseaux inconnus quelconques — il ressuscite des oiseaux avec qui il a etabli un lien personnel. C'est une demonstration relationnelle et personnelle, pas simplement un phenomene mecanique. Le lien entre Ibrahim et les oiseaux prefigure le lien entre Dieu et les croyants : l'appel est possible parce que la relation a ete etablie.",
            axe3_sourate: "Al-Baqarah est une sourate d'engagement et de relation entre Dieu et les humains (pactes, appellations directes ya ayyuha alladhina amanu = o vous qui croyez). L'image d'Ibrahim qui apprivoise des oiseaux puis les ressuscite s'inscrit dans cette logique de relation directe et personnelle. La resurrection n'est pas un phenomene impersonnel mais la reponse a un lien etabli — les oiseaux reviennent parce qu'Ibrahim les a attaches a lui.",
            axe4_coherence: "Le verbe ilayka (vers toi) souligne le caractere personnel et directionnel du lien. Dans le Coran, le rapport entre Dieu et les prophetes est souvent presente comme une relation directe et choisie (Dieu appelle Ibrahim khalilullah = ami de Dieu). L'image d'Ibrahim attachant les oiseaux a lui est une metonymie de ce lien d'amitie et de reconnaissance mutuelle.",
            axe5_frequence: "Surrunna dans ce sens est unique dans le Coran — une hapax legomenon qui a fait debat parmi les exegetes. Certains lisent sawwarhunna (donne-leur une forme) mais la majorite retient le sens d'incliner/attacher vers soi pour la coherence narrative. Sa rarete meme souligne l'importance de ce detail dans le recit : l'habituation des oiseaux n'est pas un element accessoire mais une etape necessaire de la demonstration."
          },
          "Facconnage/Forme": {
            status: "peu_probable",
            senses: [
              "sawwara = Form II, donner une forme, facconner",
              "sawwara = il a donne une forme a quelque chose"
            ],
            proof_ctx: "Lane's Lexicon: s-w-r Form II sawwara = to form, to shape, to give a form. Certains exegetes lisent sawwarhunna (Form II) au lieu de surrunna (Form I).",
            axe1_verset: "Si on lit sawwarhunna (Form II), le sens serait 'donne-leur une forme' — mais couper ensuite les oiseaux en morceaux pour les placer sur des montagnes n'a de sens que si on les a d'abord attaches/habitues a soi. Le sens d'habituation (Form I) est plus coherent avec la sequence narrative.",
            axe2_voisins: "La logique narrative (attacher, placer, appeler, voir revenir) implique une relation etablie entre Ibrahim et les oiseaux — ce que l'habituation donne mais pas le simple facconnage.",
            axe3_sourate: "Le sens de Form II (donner une forme) est pertinent en 3:6 (sawwarakum fi al-arham = Il vous a formes dans les matrices) mais inapplicable ici.",
            axe4_coherence: "La coherence de la sequence narrative impose le sens d'habituation/lien personnel plutot que de simple facconnage.",
            axe5_frequence: "La lecture Form I (surrunna = incline-les vers toi) est majoritaire parmi les exegetes classiques pour des raisons de coherence narrative."
          }
        }
      }
    },
    {
      word_key: "sEy",
      position: 34,
      sense_chosen: "en hate, avec empressement — les oiseaux reviennent rapidement a l'appel, image de la resurrection comme obeissance immediate",
      analysis_axes: {
        sense_chosen: "en hate, avec empressement — les oiseaux reviennent rapidement a l'appel, image de la resurrection comme obeissance immediate",
        concept_chosen: "Hate/Empressement",
        concepts: {
          "Hate/Empressement": {
            status: "retenu",
            senses: [
              "marcher vite, se depêcher, courir — sens premier de la racine s'y",
              "sa'y = la marche rapide, l'effort soutenu vers un but",
              "ya'tinaka sa'yan = ils viendront a toi en marchant rapidement",
              "l'empressement comme qualite de la reponse immediate a l'appel"
            ],
            proof_ctx: "Lane's Lexicon: s-'-y = to walk quickly, to hasten, to run, to strive; sa'y = quick walking, haste, striving; the noun sa'yan used as a complement of manner = with haste, quickly. In Quranic usage, sa'y also refers to the ritual walking between Safa and Marwa during Hajj (2:158) — the same image of purposeful, rapid movement towards a goal.",
            axe1_verset: "Ya'tinaka sa'yan = ils viendront a toi en hate. Le sa'y est un complement de maniere qui decrit comment les oiseaux reviennent — rapidement, avec empressement. Apres avoir ete disperses sur des montagnes differentes, leurs morceaux reconstitues et ressuscites reviennent IMMEDIATEMENT a l'appel d'Ibrahim. La rapidite du retour amplifie le caractere miraculeux : non seulement ils sont ressuscites, mais leur premier acte de vie ressuscitee est de repondre en hate a celui qui les a appeles.",
            axe2_voisins: "Le retour rapide des oiseaux (sa'yan, pos=34) contraste avec leur dispersion sur des montagnes lointaines (pos=25-30). La distance et la dispersion semblaient rendre tout retour impossible — et pourtant ils reviennent immediatement. L'empressement de leur retour est lui-meme une partie du miracle : non seulement la resurrection est reelle, mais elle produit une reponse vive et directe a l'appel. Ibrahim a apprivoise les oiseaux (pos=22) et c'est pourquoi ils repondent a son appel.",
            axe3_sourate: "Le sa'y (effort rapide) est lie dans le Coran au pelerinage (2:158 : le sa'y entre Safa et Marwa). Dans les deux cas, il s'agit d'un mouvement actif, empresse et rituel. Le sa'y des oiseaux est le meme elan que le sa'y des pelerins — un empressement vers celui qui appelle, une reponse immediate et deliberee. Dans le contexte de la resurrection, le sa'y des oiseaux est l'image de la resurrection eschatologique comme obeissance immediate a l'appel divin.",
            axe4_coherence: "Sa'a (courir, se hater) est utilise dans le Coran pour l'empressement a repondre a Dieu (21:90 : ils s'empressaient vers les bonnes oeuvres — yusari'una fi al-khayrat), pour l'effort vers le Jugement (52:7, 79:34). L'empressement est une qualite de la reponse sincere et prompte. Les oiseaux d'Ibrahim qui reviennent en hate sont l'image des croyants qui repondent promptement a l'appel divin — et de tous les morts qui repondront promptement au jugement.",
            axe5_frequence: "Sa'y apparait environ 30 fois dans le Coran. Sa presence ici souligne la qualite de la reponse des oiseaux a Ibrahim — une reponse vive, empressee, sans delai. C'est une image de la resurrection comme obeissance immediate a l'appel divin : quand Dieu appelle, les morts repondent en hate. Le sa'y des oiseaux est ainsi a la fois la conclusion du miracle et une metaphore eschatologique de la promptitude de la resurrection au Jour dernier."
          },
          "Effort/Travail": {
            status: "probable",
            senses: [
              "le sa'y comme effort soutenu (comme le sa'y du pelerinage)",
              "s'efforcer, travailler assidument vers un but"
            ],
            proof_ctx: "Lane's Lexicon: sa'y designe aussi l'effort soutenu, le travail assidu vers un objectif — pas seulement la vitesse mais la determination.",
            axe1_verset: "Dans ce verset, sa'yan est un complement de maniere decrivant comment les oiseaux reviennent — la vitesse (hate) est le premier plan, mais l'effort delibere est inclus dans le mouvement.",
            axe2_voisins: "Le retour depuis des montagnes differentes implique un effort — les oiseaux ne reviennent pas passivement mais activement, avec determination.",
            axe3_sourate: "Le sa'y du pelerinage (2:158) inclut les deux sens (hate et effort). La connection entre les deux usages de sa'y dans al-Baqarah est significative.",
            axe4_coherence: "Les deux sens (hate et effort) coexistent dans la racine et sont tous deux presents dans ce verset.",
            axe5_frequence: "Sa'y dans le Coran cumule generalement les deux sens — empressement et effort delibere — plutot que de les distinguer."
          }
        }
      }
    }
  ]
};

async function main() {
  console.log('=== PIPELINE S2 V260 ===');
  const data = verseData;

  // Update verse_analyses
  const { error: veErr } = await supabase.from('verse_analyses').update({
    translation_arab: data.translation_arab,
    full_translation: data.full_translation,
    translation_explanation: data.translation_explanation,
    segments: data.segments
  }).eq('id', data.analysis_id);

  if (veErr) { console.error('ERROR verse_analyses:', veErr.message); return; }
  console.log('verse_analyses updated (V260, id=' + data.analysis_id + ')');

  // Insert VWAs
  for (const word of data.vwa) {
    const { error: vwaErr } = await supabase.from('verse_word_analyses').insert({
      verse_id: data.verse_id,
      word_key: word.word_key,
      position: word.position,
      sense_chosen: word.sense_chosen,
      analysis_axes: word.analysis_axes
    });
    if (vwaErr) console.error('  VWA ERROR ' + word.word_key + ' pos=' + word.position + ':', vwaErr.message);
    else console.log('  VWA OK: ' + word.word_key + ' pos=' + word.position);
  }
  console.log('DONE V260');
}
main().catch(console.error);
