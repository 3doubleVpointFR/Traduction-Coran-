const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

const verseData = {
  256: {
    verse_id: 263, analysis_id: 622,
    full_translation: "Nulle contrainte en religion ! Car le bon chemin s'est distingué de l'égarement. Donc, quiconque mécroît aux Taghoûts et croit en Dieu saisit l'anse la plus solide, à nulle rupture. Et Dieu est Audient et Omniscient.",
    translation_arab: "Pas de contrainte en religion : la rectitude s'est distinguée de l'égarement. Quiconque rejette le taghut et croit en Dieu s'est saisi de l'anse la plus solide, sans rupture possible. Et Dieu est Entendant, Savant.",
    translation_explanation: `§DEMARCHE§
Le verset 2:256 est l'une des declarations de principe les plus fondamentales du Coran sur la liberte de conscience. La formule d'ouverture — "la ikraha fi al-din" — est une negation absolue (la + masdar = impossibilite ontologique) : il n'existe pas, il ne peut pas exister de contrainte dans le domaine de la religion. La demarche traductive consiste a rendre chaque terme dans sa plenitude semantique tout en preservant la coherence interne du verset, qui va de la declaration generale (pas de contrainte) a la justification logique (la rectitude s'est distinguee de l'egarement), puis au choix concret (rejeter le taghut, croire en Dieu) et enfin a la metaphore de l'ancrage (l'anse la plus solide, sans rupture).

Le mot ikrah (racine k-r-h, Form IV masdar d'akraha) designe la contrainte forcee, la coercition — forcer quelqu'un a faire quelque chose contre sa volonte. La negation absolue "la ikraha fi al-din" signifie que cette coercition est incompatible avec la nature meme de la foi authentique : une foi contrainte ne serait pas une foi. Nous traduisons par "Pas de contrainte en religion" pour conserver la force assertive de la formule arabe.

Qad tabayyana al-rushdu min al-ghayy : le verbe tabayyana (Form V de b-y-n = devenir clairement visible, se manifester distinctement) au perfectif avec qad exprime un fait accompli avec emphase. La rectitude (rushd = maturite de jugement, bon sens pratique) s'est distinguee de l'egarement (ghayy = deviation active de la bonne voie). Puisque la distinction est claire et evidente, la contrainte devient superflue — chacun peut voir par lui-meme.

Fa-man yakfur bi-al-taghut wa yu'min bi-Allah : yakfur (kfr au subjonctif = nier, rejeter) bi-al-taghut = rejeter le taghut (ce qui depasse les limites divines — idoles, tyrans, autorites illegitimes). Wa yu'min bi-Allah = et croire en Dieu. Ce double mouvement (rejet + adhesion) est la condition du vrai ancrage.

Fa-qad istamsaka bi-al-'urwati al-wuthqa la infisama laha : istamsaka (Form X de m-s-k = saisir fermement pour soi, s'accrocher avec determination) bi = a. L'anse (urwa) la plus solide (wuthqa = la plus fiable, la plus sure). La infisama laha = sans rupture possible (la + masdar infisam = impossibilite ontologique de rupture). Wa-Allah sami'un 'alim : Dieu est Entendant (sami') et Savant ('alim).
§JUSTIFICATION§
"Pas de contrainte" pour "la ikraha" : la + masdar = negation absolue et ontologique, plus forte que la negation verbale ordinaire. "Contrainte" pour ikrah (racine k-r-h, Form IV masdar) : Lane atteste akraha = to compel, to force, to constrain against one's will — la coercition active est le sens exact. "La rectitude" pour "al-rushdu" : Lane atteste rushd = right conduct, rectitude, maturity of judgment, the right course — nous preferons "la rectitude" qui rend la dimension de jugement droit et pratique. "L'egarement" pour "al-ghayy" : Lane atteste ghayy = error, going astray, perdition — deviation active de la bonne voie, opposition directe au rushd. "Rejette le taghut" pour "yakfur bi-al-taghut" : kfr bi = nier, rejeter (rejet actif), taghut = ce qui transgresse les limites divines (racine t-gh-y). "Croit en Dieu" pour "yu'min bi-Allah" : amn + bi = faire confiance a, croire en. "S'est saisi" pour "istamsaka" : Form X de m-s-k = saisir fermement, s'accrocher avec determination et force (forme reflexive intensive). "L'anse" pour "al-'urwa" : Lane atteste 'urwa = a handle, a loop, that by which one lays hold — l'anse ou poignee qu'on attrape. "La plus solide" pour "al-wuthqa" : superlatif feminin de wathiqa (solide, fiable, digne de confiance). "Sans rupture possible" pour "la infisama laha" : la + masdar infisam = impossibilite ontologique de rupture, negation absolue. "Entendant" pour "sami'" : attribut divin qui renvoie a la connaissance divine des paroles et intentions. "Savant" pour "'alim" : attribut divin de la connaissance totale.
§CRITIQUE§
La traduction de Hamidullah rend ce verset : "Nulle contrainte en religion ! Car le bon chemin s'est distingue de l'egarement. Donc, quiconque mecroit aux Taghoûts et croit en Dieu saisit l'anse la plus solide, a nulle rupture. Et Dieu est Audient et Omniscient." Cette traduction est solide mais plusieurs points meritent discussion. Premierement, "le bon chemin" pour rushd : Hamidullah traduit rushd par "le bon chemin" ce qui capture la dimension pratique mais perd la notion de maturite de jugement et de rectitude qui fait la richesse du terme. "La rectitude" est plus proche de la richesse semantique de rushd en arabe. Deuxiemement, "mecroit aux Taghoûts" pour "yakfur bi-al-taghut" : garder le terme arabe "Taghoûts" necessite une note explicative pour le lecteur non arabisant. "Rejette le taghut" est plus accessible tout en preservant le terme comme entite conceptuelle distincte. Troisiemement, "a nulle rupture" pour "la infisama laha" est une traduction elliptique qui calque directement l'arabe — "sans rupture possible" est plus naturel en francais courant tout en rendant le sens absolu de la negation. Quatriemement, "Audient" pour sami' est un archaisme que "Entendant" evite sans perdre de sens. Notre traduction vise un equilibre entre fidelite semantique et naturel de la langue francaise courante, en privilegiant les equivalents etymologiques precis.`,
    segments: [
      { position: 1, text_arab: "لَآ", translation: "Pas de", phonetic: "la", grammar_type: "particle" },
      { position: 2, text_arab: "إِكْرَاهَ", translation: "contrainte", phonetic: "ikraha", grammar_type: "noun", root_key: "krh" },
      { position: 3, text_arab: "فِى", translation: "en", phonetic: "fi", grammar_type: "particle" },
      { position: 4, text_arab: "ٱلدِّينِ", translation: "religion", phonetic: "ad-dini", grammar_type: "noun", root_key: "din" },
      { position: 5, text_arab: "قَد", translation: "certes", phonetic: "qad", grammar_type: "particle" },
      { position: 6, text_arab: "تَّبَيَّنَ", translation: "s'est distinguee", phonetic: "tabayyana", grammar_type: "verb", root_key: "byn" },
      { position: 7, text_arab: "ٱلرُّشْدُ", translation: "la rectitude", phonetic: "ar-rushdu", grammar_type: "noun", root_key: "rshd" },
      { position: 8, text_arab: "مِنَ", translation: "de", phonetic: "mina", grammar_type: "particle" },
      { position: 9, text_arab: "ٱلْغَىِّ", translation: "l'egarement", phonetic: "al-ghayyi", grammar_type: "noun", root_key: "ghyy" },
      { position: 10, text_arab: "فَمَن", translation: "Quiconque", phonetic: "fa-man", grammar_type: "particle" },
      { position: 11, text_arab: "يَكْفُرْ", translation: "rejette", phonetic: "yakfur", grammar_type: "verb", root_key: "kfr" },
      { position: 12, text_arab: "بِٱلطَّـٰغُوتِ", translation: "le taghut", phonetic: "bi-t-taghuti", grammar_type: "noun", root_key: "tghy" },
      { position: 13, text_arab: "وَيُؤْمِنۢ", translation: "et croit", phonetic: "wa-yu'min", grammar_type: "verb", root_key: "amn" },
      { position: 14, text_arab: "بِٱللَّهِ", translation: "en Dieu", phonetic: "bi-llahi", grammar_type: "particle" },
      { position: 15, text_arab: "فَقَدِ", translation: "s'est alors", phonetic: "fa-qadi", grammar_type: "particle" },
      { position: 16, text_arab: "ٱسْتَمْسَكَ", translation: "saisi de", phonetic: "istamsaka", grammar_type: "verb", root_key: "mssk" },
      { position: 17, text_arab: "بِٱلْعُرْوَةِ", translation: "l'anse", phonetic: "bi-l-'urwati", grammar_type: "noun", root_key: "erw" },
      { position: 18, text_arab: "ٱلْوُثْقَىٰ", translation: "la plus solide", phonetic: "al-wuthqa", grammar_type: "adjective", root_key: "wvq" },
      { position: 19, text_arab: "لَا", translation: "sans", phonetic: "la", grammar_type: "particle" },
      { position: 20, text_arab: "ٱنفِصَامَ", translation: "rupture", phonetic: "infisama", grammar_type: "noun", root_key: "fsm" },
      { position: 21, text_arab: "لَهَا", translation: "possible", phonetic: "laha", grammar_type: "particle" },
      { position: 22, text_arab: "وَٱللَّهُ", translation: "Et Dieu est", phonetic: "wa-llahu", grammar_type: "particle" },
      { position: 23, text_arab: "سَمِيعٌ", translation: "Entendant", phonetic: "sami'un", grammar_type: "noun", root_key: "sme" },
      { position: 24, text_arab: "عَلِيمٌ", translation: "Savant", phonetic: "'alimun", grammar_type: "adjective", root_key: "elm" }
    ],
    vwa: [
      {
        word_key: "krh",
        position: 2,
        sense_chosen: "contrainte, coercition — forcer quelqu'un a faire quelque chose contre sa volonte, imposer par la force",
        analysis_axes: {
          sense_chosen: "contrainte, coercition — forcer quelqu'un a faire quelque chose contre sa volonte, imposer par la force",
          concept_chosen: "Contrainte/Coercition",
          concepts: {
            "Contrainte/Coercition": {
              status: "retenu",
              senses: [
                "akraha (Form IV) = contraindre, forcer contre la volonte",
                "ikrah (masdar Form IV) = la contrainte, la coercition",
                "la ikraha = pas de contrainte (negation absolue par la + masdar)",
                "la contrainte est un acte exterieur qui s'oppose a la liberte interieure"
              ],
              proof_ctx: "Lane's Lexicon: k-r-h = to be displeased, to dislike; Form IV akraha = to compel, to force, to constrain, to do a thing against one's will; ikraha = compulsion, coercion. La ikraha fi al-din = there is no compulsion in religion. The masdar ikraha here functions as absolute statement of principle — ontological negation of all coercion in the religious domain.",
              axe1_verset: "Le mot ikrah est le sujet d'une phrase nominale negative absolue — 'la ikraha fi al-din' signifie pas de contrainte dans la religion, c'est une negation categorique et ontologique. La structure la + masdar est la plus forte façon d'exprimer une negation en arabe : elle nie l'existence meme de la chose. Le contexte immediat est l'affirmation que la rectitude et l'egarement se sont distingues clairement — puisqu'il n'y a pas d'ambiguite, la contrainte devient inutile. Chacun peut voir le bon chemin par lui-meme. La contrainte est donc non seulement interdite mais structurellement superflue : elle n'aurait aucun sens face a une verite deja evidente.",
              axe2_voisins: "Ce verset suit une longue section sur la legislation (mariage, divorce, commerce, jihad) et precede l'histoire d'Ibrahim. La declaration 'pas de contrainte' vient apres que des regles precises ont ete enoncees — les regles sont la, mais leur adoption ne peut pas etre forcee. Le verset 257 qui suit (Dieu protecteur des croyants) montre que la protection divine remplace la contrainte humaine : Dieu fait sortir de Lui-meme les croyants des tenebres vers la lumiere, sans qu'il soit besoin de les y obliger de force. La declaration de non-contrainte est donc encadree par la revelation (qui clarifie) et par la protection divine (qui guide).",
              axe3_sourate: "Al-Baqarah contient plusieurs declarations d'autonomie et de responsabilite personnelle. La sourate s'adresse aux croyants mais aussi aux 'gens du Livre' et aux incroyants — elle ne presuppose pas une audience captive. L'appel a la raison (ta'qiluna, tatafakkarun) qui caracterise la sourate est coherent avec l'absence de contrainte : c'est a la raison de decider, pas a la coercition. La racine k-r-h apparait en 2:216 (le combat vous est prescrit bien qu'il vous repugne — kurhun lakum) pour designer le deplaisant subi, distinction importante d'avec la coercition imposee.",
              axe4_coherence: "La racine k-r-h apparait dans le Coran pour decrire ce qui est fait a contre-coeur (2:216 : le combat vous est prescrit bien qu'il vous repugne — kutiba 'alaykum al-qital wa huwa kurhun lakum). L'ikrah (contrainte forcee) s'oppose au tawa' (volonte libre, consentement). Le Coran valorise le tawa' systematiquement — meme les cieux et la terre ont obei a Dieu 'volontairement ou contraints' (41:11, taw'an aw karhan). Dans 24:33 est interdit de contraindre (tukrihu) des esclaves a la prostitution — la racine est utilisee exactement pour l'imposition par la force. La coherence est totale : ikrah dans le Coran designe toujours une contrainte physique ou psychologique contre la volonte.",
              axe5_frequence: "Pour les juristes musulmans, ce verset est la base coranique du principe que la foi ne peut pas etre imposee par la force — la croyance authentique requiert un assentiment interieur libre. La contrainte peut produire une conformite exterieure mais pas la foi reelle. Ce principe a des implications importantes sur la liberte religieuse en droit islamique : une conversion sous la contrainte est consideree nulle par la plupart des ecoles juridiques. La formule 'la ikraha fi al-din' est l'une des plus citees dans les debats contemporains sur la liberte de conscience et les droits fondamentaux en contexte islamique."
            },
            "Repugnance/Aversion": {
              status: "probable",
              senses: [
                "karaha (Form I) = detester, avoir de l'aversion pour",
                "karahiya = l'aversion, le degoût",
                "etat interieur de repulsion (different de la contrainte exterieure)"
              ],
              proof_ctx: "Lane's Lexicon: k-r-h Form I = to dislike, to be averse to, to hold in abomination; karahiya = dislikeness, aversion, disgust. This is the interior feeling as opposed to ikrah which is the exterior act of coercion.",
              axe1_verset: "L'aversion (karaha) est l'etat interieur ressenti quand on est contraint — c'est ce que ressent la personne forcee. Mais dans 'la ikraha fi al-din', c'est l'acte de contraindre (ikrah) qui est nie, pas le sentiment d'aversion que quelqu'un pourrait eprouver face a la religion. La distinction est importante : le Coran ne dit pas que personne n'aura d'aversion pour la religion, il dit que personne ne peut etre contraint d'y adherer. L'acte de coercition est interdit, pas le sentiment personnel.",
              axe2_voisins: "Le sens d'aversion reste secondaire dans ce contexte car la structure de la phrase (la + masdar ikrah = negation de l'acte) pointe clairement vers la contrainte comme acte exterieur. Si le sens vise avait ete l'aversion interieure, on attendrait une formulation differente. Le contexte des versets voisins (choix libre, rectitude evidente) confirme que c'est l'acte de forcer qui est vise.",
              axe3_sourate: "En 2:216 karaha designe ce qu'on n'aime pas faire (le combat est prescrit bien qu'il vous deplaise) — c'est le sentiment interieur de repugnance. Ce sens coexiste dans Al-Baqarah avec le sens de contrainte exterieure mais dans des contextes differents. La distinction est systematique : la repugnance (Form I) est un etat, la contrainte (Form IV) est un acte.",
              axe4_coherence: "Dans le Coran, la racine k-r-h couvre les deux sens mais les distingue selon la forme verbale : Form I (karaha) = sentiment d'aversion, Form IV (akraha) = acte de contraindre. En 2:256 c'est la Form IV (masdar ikrah) qui est utilisee, ce qui confirme sans ambiguite que c'est la contrainte comme acte exterieur qui est visee, pas le sentiment interieur.",
              axe5_frequence: "Les deux sens de la racine k-r-h coexistent dans le Coran mais sont bien distincts par la forme. Le sens d'aversion (karaha = detester) est tres frequent (karha, karihan, makrihan). Le sens de coercition (akraha = forcer) est moins frequent mais plus fort semantiquement. Ce verset utilise le terme le plus fort pour formuler l'interdiction la plus absolue."
            }
          }
        }
      },
      {
        word_key: "din",
        position: 4,
        sense_chosen: "religion, voie de vie — systeme de croyance et de pratique, maniere d'organiser sa vie autour de valeurs transcendantes",
        analysis_axes: {
          sense_chosen: "religion, voie de vie — systeme de croyance et de pratique, maniere d'organiser sa vie autour de valeurs transcendantes",
          concept_chosen: "Religion/VoieDeVie",
          concepts: {
            "Religion/VoieDeVie": {
              status: "retenu",
              senses: [
                "din = la religion comme systeme total de croyance et de pratique",
                "la voie choisie, la maniere de vivre organisee autour du divin",
                "la foi dans sa dimension collective et individuelle",
                "le din n'est pas seulement des rites mais une vision du monde"
              ],
              proof_ctx: "Lane's Lexicon: d-y-n = debt, obligation, requital, judgment; din = the religion, the way of life, the system of belief and practice; al-din = the religion as total system encompassing faith, law and ethics. More than mere ritual, din designates the complete way of life organized around transcendent values — faith, practice, ethics, social organization.",
              axe1_verset: "Dans 'la ikraha fi al-din', le mot 'din' designe la sphere religieuse en general — l'ensemble du systeme de croyance et de pratique. La contrainte est niee dans cette sphere precisement parce que le din est une affaire d'engagement interieur authentique, pas seulement de conformite exterieure. Le din englobe la foi (iman), les rites ('ibadat), les comportements sociaux (mu'amalat) et la vision du monde — on ne peut forcer personne a adopter authentiquement un tel systeme complet.",
              axe2_voisins: "Le contexte immediat (la rectitude s'est distinguee de l'egarement) montre que le din comprend une dimension cognitive — distinguer le vrai du faux, le bon chemin de l'egarement. Le din n'est pas un ensemble de rites aveugles mais un engagement eclaire qui requiert la capacite de voir et de comprendre. C'est pourquoi la contrainte y est incompatible : on peut forcer des gestes exterieurs mais pas la comprehension interieure qui fait le din veritable.",
              axe3_sourate: "Al-Baqarah contient de nombreux usages du mot din : 2:132 (Ibrahim recommande a ses fils le din), 2:193 (combattre jusqu'a ce qu'il n'y ait plus de fitna et que le din soit pour Dieu), 2:217 (la fitna est pire que le meurtre). Ces usages montrent que le din est a la fois une identite collective et un engagement personnel. La declaration 'pas de contrainte dans le din' est donc tres large : elle couvre tous les aspects de la vie religieuse sans exception.",
              axe4_coherence: "Le Coran utilise din aussi bien pour la religion islamique (3:19 : le din aupres de Dieu est l'islam) que pour d'autres religions (109:6 : 'a vous votre din, a moi le mien'). Le terme est donc assez large pour designer n'importe quel systeme de croyance et de pratique, pas seulement l'islam. La declaration 'pas de contrainte dans le din' a donc une portee universelle : aucune religion, aucun systeme de vie ne peut etre impose par la force.",
              axe5_frequence: "Le mot din apparait environ 92 fois dans le Coran. Son sens est plus large que 'religion' au sens chretien occidental (dogme + institutions) — il englobe la maniere de vivre, les valeurs, les pratiques rituelles et sociales, et meme le sens eschatologique (yawm al-din = jour du Jugement, ou chacun recevra sa retribution). Cette multiplicite de sens renforce l'idee que la non-contrainte couvre l'integralite de la sphere de la vie orientee vers Dieu."
            },
            "Jugement/Retribution": {
              status: "probable",
              senses: [
                "yawm al-din = le Jour du Jugement, de la retribution",
                "din = la dette, ce qu'on doit, la retribution due",
                "le sens eschatologique est present mais secondaire ici"
              ],
              proof_ctx: "Lane's Lexicon: d-y-n also yields din in the sense of requital, retribution, judgment — hence yawm al-din = the Day of Judgment (Quran 1:4). This eschatological sense is attested throughout the Quran and is etymologically connected to the primary sense of debt/obligation.",
              axe1_verset: "Le sens de jugement/retribution est present dans la racine d-y-n mais il est secondaire dans ce contexte. La phrase 'la ikraha fi al-din' vise la sphere religieuse comme domaine de vie, pas le Jugement eschatologique. Cependant, le lien entre les deux sens n'est pas fortuit : le din comme voie de vie menera au jugement (din eschatologique) — c'est pourquoi le choix du din doit etre libre et authentique.",
              axe2_voisins: "Le contexte voisin (rectitude vs egarement, choix libre) confirme que le sens premier vise est le din comme systeme de vie que l'on choisit — pas le jugement final auquel on sera soumis. Le sens eschatologique est implicite (le choix libre aura des consequences dans le jugement) mais il n'est pas le sens direct de 'fi al-din' ici.",
              axe3_sourate: "Les deux sens de din coexistent dans Al-Baqarah mais dans des contextes differents. Le sens de voie de vie domine dans les versets legislatifs et de guidance. Le sens de retribution/jugement est present dans les versets eschatologiques. Le verset 2:256 appartient clairement au registre de la guidance et du choix libre.",
              axe4_coherence: "La coherence entre les deux sens de din est theologique : choisir librement sa voie de vie (din comme systeme) implique d'en assumer les consequences devant Dieu (din comme jugement). La liberte de choix et la responsabilite devant le jugement sont les deux faces d'une meme piece. Le verset 2:256 affirme la premiere ; la theologie coranique generale implique la seconde.",
              axe5_frequence: "Le sens de retribution/jugement dans din est particulierement visible dans la formule recurrente 'yawm al-din' (le Jour de la Retribution, comme en 1:4, 15:35, 26:82, 37:20, 51:12, 56:56, 82:15-17). Ce sens est present dans environ la moitie des occurrences de din dans le Coran."
            },
            "Obedience/Soumission": {
              status: "peu_probable",
              senses: [
                "dana (Form I) = etre soumis a, obeir a",
                "tadayyana = adopter une religion, se soumettre a une autorite religieuse",
                "sens possible mais peripherique dans ce contexte"
              ],
              proof_ctx: "Lane's Lexicon: d-y-n Form I dana = to be under authority, to be submissive, to be subservient; din in this sense = the act of being subject to an authority. This is a peripheral sense in the Quranic usage where din primarily means religion/way of life.",
              axe1_verset: "Le sens d'obedience/soumission est etymologiquement lie a din mais il est peu pertinent dans 'la ikraha fi al-din'. Si le sens vise avait ete l'obedience a une autorite, la phrase dirait 'pas de contrainte a obeir' — mais le texte dit 'pas de contrainte dans la religion', ce qui pointe vers le systeme global de vie, pas vers l'acte de soumission a une autorite specifique.",
              axe2_voisins: "Le contexte du choix libre (yakfur/yu'min = rejeter/croire) confirme que le din ici est une affaire de conviction personnelle, pas d'obedience a une hierarchie. L'obedience sans conviction est precisement ce que la non-contrainte refuse — on ne peut forcer une obedience sincere.",
              axe3_sourate: "Dans Al-Baqarah, le sens d'obedience est present mais dans des contextes differents (obedience aux commandements divins, aux parents, etc.). Dans le verset 2:256, la dimension de systeme de vie integrale domine clairement sur le simple sens d'obedience.",
              axe4_coherence: "La racine d-y-n dans le sens d'obedience est plus presente dans les hadith que dans le Coran. Dans le texte coranique, din designe presque toujours la religion comme systeme de croyance et de pratique, pas comme simple soumission a une autorite.",
              axe5_frequence: "Ce sens d'obedience est rare dans les occurrences coraniques de din. Il est beaucoup plus frequent dans la litterature juridique islamique ou 'din' peut designer l'acte de s'acquitter d'une obligation religieuse. Dans le Coran, le sens de systeme de vie et de retribution est nettement dominant."
            }
          }
        }
      },
      {
        word_key: "rshd",
        position: 7,
        sense_chosen: "rectitude, bon sens — etre sur la bonne voie, avoir le jugement juste, intelligence pratique orientee vers le bien",
        analysis_axes: {
          sense_chosen: "rectitude, bon sens — etre sur la bonne voie, avoir le jugement juste, intelligence pratique orientee vers le bien",
          concept_chosen: "Rectitude/BonSens",
          concepts: {
            "Rectitude/BonSens": {
              status: "retenu",
              senses: [
                "rashada (Form I) = aller dans la bonne direction, etre sur la bonne voie",
                "rushd = la maturite de jugement, la sagesse pratique, la bonne direction",
                "al-rashid = celui qui est guide par le bon sens, le mature dans son jugement",
                "rushd s'oppose a ghayy : bonne direction vs mauvaise direction"
              ],
              proof_ctx: "Lane's Lexicon: r-sh-d = to go the right way, to follow the right course; rushd = rectitude of conduct, right guidance, maturity of judgment, good sense in practical affairs; ar-rushd = the right course (as opposed to al-ghayy). The term carries both intellectual and moral dimensions — not abstract virtue but practical wisdom that leads in the right direction.",
              axe1_verset: "Rushd s'oppose directement a ghayy (egarement) dans ce verset. La paire rushd/ghayy est une antithese complete — la rectitude est tout ce que l'egarement n'est pas. La rectitude s'est 'distinguee' (tabayyana = s'est rendue evidente, s'est separee clairement) de l'egarement, ce qui justifie l'absence de contrainte : il n'est plus necessaire de forcer car la voie juste est visible a quiconque veut voir. La rectitude n'est pas cachee ou ambigue — elle s'est manifestee d'elle-meme.",
              axe2_voisins: "La declaration 'la rectitude s'est distinguee de l'egarement' fait suite a la revelation — c'est parce que la guidance divine a clarifie les choses que la contrainte devient superflue. Sans clarte, la contrainte pourrait sembler necessaire pour guider les gens ; avec la clarte de la revelation, chacun peut choisir en connaissance de cause. Le rushd est donc la clarification divine qui rend la contrainte inutile et le choix libre possible.",
              axe3_sourate: "La sourate Al-Baqarah commence par la description des gens de la guidance (hudâ) — ceux qui ont pris le bon chemin. Le rushd ici est l'equivalent de cette guidance pratique. La sourate valorise systematiquement la raison et la clarte comme moyens d'acceder a la verite : ta'qiluna (vous raisonnez), tatafakkarun (vous reflechissez), ya'qiluna (ils comprennent). Le rushd est la forme la plus active de cette intelligence pratique orientee vers le bien.",
              axe4_coherence: "La racine r-sh-d est liee dans le Coran a la guidance pratique : 2:186 (rashad dans le sens de bonne direction), 18:10 (guide-nous vers la rectitude, rashadan), 18:66 (t'apprendre ce qui mene a la rectitude, rushda). Le rushd est toujours une direction vers le bien, une voie pratique vers le succes. Il se distingue de huda (guidance divine directe) en ce qu'il est la manifestation visible et accessible de cette guidance que la raison humaine peut saisir.",
              axe5_frequence: "En droit islamique, 'rashid' designe la personne majeure et capable de gerer ses affaires — la maturite du jugement qui permet d'assumer ses responsabilites. Ce sens juridique renforce l'idee que le rushd dans ce verset est une forme de lucidite cognitive et pratique, pas seulement une vertu morale abstraite. La personne qui a le rushd est celle qui voit clairement et choisit correctement — exactement ce que la revelation rend possible dans ce verset."
            },
            "Maturite/Discernement": {
              status: "probable",
              senses: [
                "rashid = la personne majeure, capable de jugement autonome",
                "rushd = la maturite de discernement qui vient avec l'age et l'experience",
                "le rashid en droit = celui qui a atteint la maturite du jugement"
              ],
              proof_ctx: "Lane's Lexicon: r-sh-d also yields rashid = one who follows the right course, a person of sound judgment; in legal usage rashid = one who has attained maturity and is capable of managing his own affairs. This sense of personal maturity and discernment is closely related to rushd.",
              axe1_verset: "Le sens de maturite/discernement est connexe au sens retenu mais il met l'accent sur la personne plutot que sur la voie. Dans 'al-rushdu s'est distingue de al-ghayy', il s'agit de la voie objective (la rectitude comme chemin) plutot que de la qualite de la personne qui marche dessus. Le sens de maturite est present en filigrane mais il est second.",
              axe2_voisins: "La structure du verset (al-rushdu vs al-ghayy comme deux voies objectives qui se sont distinguees) confirme que rushd designe ici la bonne direction comme realite exterieure et visible, pas principalement la qualite interieure de maturite. La maturite de jugement est la faculte qui permet de voir la distinction, mais ce que le verset dit c'est que la distinction elle-meme est devenue evidente.",
              axe3_sourate: "Dans Al-Baqarah, rushd apparait dans ce seul verset avec ce sens de bonne direction. Le sens de maturite juridique (rashad/rashid) est plus present dans les versets sur les orphelins et les contrats (2:282) ou le discernement est necessaire pour les actes juridiques valides.",
              axe4_coherence: "Les deux sens (bonne direction vs maturite de jugement) sont etymologiquement lies et se reinforcent mutuellement : avoir le rushd (bonne direction) implique d'avoir la maturite de jugement (rashid), et vice versa. La distinction est de perspective : rushd comme voie objective, rashid comme qualite subjective.",
              axe5_frequence: "Le sens de maturite/discernement est tres present dans la jurisprudence islamique ou rashid designe la personne capable d'actes juridiques valides. Dans le texte coranique pur, le sens de bonne direction objective est plus frequent que le sens de maturite personnelle."
            }
          }
        }
      },
      {
        word_key: "ghyy",
        position: 9,
        sense_chosen: "egarement, mauvaise direction — s'eloigner de la bonne voie, aller dans la mauvaise direction, deviation active",
        analysis_axes: {
          sense_chosen: "egarement, mauvaise direction — s'eloigner de la bonne voie, aller dans la mauvaise direction, deviation active",
          concept_chosen: "Egarement/Deviation",
          concepts: {
            "Egarement/Deviation": {
              status: "retenu",
              senses: [
                "ghawa (Form I) = s'egarer, aller dans la mauvaise direction, errer",
                "ghayy = l'egarement comme deviation active (plus fort que simple ignorance)",
                "al-ghayy s'oppose directement a al-rushd : mauvaise direction vs bonne direction",
                "mouvement actif de deviation, pas simple erreur passive"
              ],
              proof_ctx: "Lane's Lexicon: gh-w-y = to err, to go astray, to be in error, to go in a wrong direction; ghayy = error, going astray, perdition — the active straying from the right path. As opposed to dall (mere loss of way), ghayy implies an active deviation towards something wrong, a wilful turning away from the right course.",
              axe1_verset: "Ghayy s'oppose directement a rushd dans ce verset. L'egarement est tout ce que la rectitude n'est pas. Le fait que 'la rectitude s'est distinguee de l'egarement' implique que l'egarement etait ou peut etre present — il existe reellement une possibilite de se tromper de chemin, c'est pourquoi la clarification etait necessaire. La distinction est maintenant claire : quiconque choisit le ghayy le fait en connaissance de cause, ce qui rend sa responsabilite entiere.",
              axe2_voisins: "La paire rushd/ghayy dans le Coran est liee a la liberte de choix. Le verset precedent (2:255 ayat al-kursi) affirme la souverainete divine absolue — pourtant le verset 2:256 affirme l'absence de contrainte. Ce n'est pas une contradiction : la souverainete de Dieu n'efface pas le libre choix humain. Le ghayy existe comme possibility reelle que l'homme peut choisir — le Coran ne nie pas l'existence de l'egarement, il dit que la voie juste s'en est distinguee clairement.",
              axe3_sourate: "Dans al-Baqarah, l'egarement (ghayy, dalal) est un theme recurrent : les gens qui achevent l'egarement contre la guidance (2:16, 'ils ont achete l'egarement contre la guidance'), Iblis qui detourne (aghwa, 2:36 implicitement). L'egarement n'est pas seulement une erreur intellectuelle mais une deviation existentielle — un choix de la mauvaise direction qui a des consequences durables. L'egarement dans Al-Baqarah est toujours actif et choisi, jamais simplement subi.",
              axe4_coherence: "La racine gh-w-y est liee a ghiya' (seduction, tromperie) et a l'idee d'un desir trompeur qui detourne. Compare a dall (s'egarer sur un chemin qu'on a perdu), ghayy implique une deviation active vers quelque chose de mauvais, pas seulement une perte de direction. C'est pourquoi le choix du ghayy engage la pleine responsabilite de celui qui le fait : il ne s'egare pas accidentellement mais s'oriente activement vers la mauvaise direction.",
              axe5_frequence: "Le mot ghayy apparait dans le Coran notamment en 19:59 (suivre les passions = waqa'u al-ghayy = ils tomberont dans l'egarement). Cette connexion avec les passions renforce l'idee que ghayy est une deviation active vers ce qui plait au detriment de ce qui est juste. En 79:37-39 : celui qui a transgresse et prefere la vie mondaine, son refuge sera le ghayy — confirmant que l'egarement est une consequence de choix actifs et non d'ignorance involontaire."
            },
            "Corruption/Faillite": {
              status: "probable",
              senses: [
                "ghayy comme etat de corruption morale, pas seulement deviation de direction",
                "la personne dans le ghayy se deteriore moralement",
                "sens plus statique que le mouvement de l'egarement"
              ],
              proof_ctx: "Lane's Lexicon: gh-w-y also yields senses of moral corruption, perdition, ruin — ghayy as a state of moral degradation resulting from straying. This is a consequential sense: one who strays (verbal action) ends up in a state of corruption (resultant state).",
              axe1_verset: "Le sens de corruption est le resultat de l'egarement, pas l'egarement lui-meme. Dans ce verset, l'opposition rushd/ghayy est posee comme antithese de deux voies ou directions — le mouvement de deviation est premier, la corruption qui en resulte est seconde. Le sens retenu (deviation active) capture mieux l'opposition dynamique avec rushd (bonne direction).",
              axe2_voisins: "Le contexte du choix libre (rejeter le taghut ou croire en Dieu) confirme que ghayy designe ici une direction choisie, pas un etat subi. On choisit de prendre la voie du ghayy comme on choisit de prendre la voie du rushd — ce sont deux chemins, deux orientations, pas deux etats statiques.",
              axe3_sourate: "Dans Al-Baqarah, la corruption morale est presente dans d'autres termes (fasad, zulumat) mais ghayy reste prioritairement la deviation de chemin. La corruption est la consequence de l'egarement prolonge, pas l'egarement lui-meme.",
              axe4_coherence: "Les deux sens coexistent semantiquement : ghayy comme deviation (cause) et ghayy comme etat de corruption/perdition (consequence). Le Coran utilise parfois ghayy dans le second sens (en 19:59 'ils tomberont dans le ghayy' comme etat de perdition). Mais dans 2:256, l'opposition directe avec rushd (bonne direction) fait du sens de deviation le plus pertinent.",
              axe5_frequence: "Le sens de perdition/etat de corruption est present dans certaines occurrences de ghayy (notamment 19:59) mais le sens de deviation active est le plus frequent et le plus etymologiquement premier. La racine gh-w-y designe d'abord le mouvement d'aller dans la mauvaise direction avant de designer l'etat qui en resulte."
            }
          }
        }
      },
      {
        word_key: "mssk",
        position: 16,
        sense_chosen: "saisie ferme, accrochage — tenir solidement, s'accrocher de façon active et deliberee (Form X)",
        analysis_axes: {
          sense_chosen: "saisie ferme, accrochage — tenir solidement, s'accrocher de façon active et deliberee (Form X)",
          concept_chosen: "SaisieFerme/Accrochage",
          concepts: {
            "SaisieFerme/Accrochage": {
              status: "retenu",
              senses: [
                "masaka (Form I) = tenir, saisir, retenir",
                "Form X istamsaka = s'accrocher, saisir fermement pour soi (reflexive intensive)",
                "istamsaka bi = se mettre en etat de saisie ferme de quelque chose",
                "action active de maintien d'un contact ferme et durable"
              ],
              proof_ctx: "Lane's Lexicon: m-s-k = to hold, to retain, to grasp; Form X istamsaka = to hold firmly, to grasp with determination, to cling to; istamsaka bi-sh-shay' = to hold fast to something, to take firm hold of it. The Form X (reflexive-intensive) emphasizes the personal initiative and the strength of the grasp — not a passive holding but an active, deliberate seizing.",
              axe1_verset: "Istamsaka bi = se saisir de + l'anse la plus solide. La Form X (istamsaka) est reflexive intensive — non pas 'saisir quelque chose' mais 'se mettre en etat de saisie ferme pour soi'. L'anse (urwa) est ce qu'on attrape pour ne pas tomber — l'image est celle d'un alpiniste ou d'un naufragé qui attrape une prise solide avec toute sa force. La Form X ajoute la dimension de volonte et d'effort personnel : on ne se contente pas de tenir, on s'accroche activement.",
              axe2_voisins: "L'accrochage a l'urwa al-wuthqa (l'anse la plus solide) contraste avec l'egarement (ghayy) qui precede. Celui qui s'egare glisse, perd pied ; celui qui s'accroche a l'anse ferme se stabilise. L'image est dynamique et complementaire : on peut glisser vers le ghayy ou s'accrocher a la foi en Dieu — ce verset decrit l'acte de s'accrocher comme consequence du double choix de rejeter le taghut et de croire en Dieu.",
              axe3_sourate: "Al-Baqarah utilise plusieurs images de solidite et de fermete : le pacte ferme (mithaq), le chemin droit (sirat mustaqim). L'image de l'anse solide s'inscrit dans ce reseau d'images de stabilite et d'ancrage. L'expression 'istamsaka bi-l-'urwati al-wuthqa' est reprise en 31:22 avec le meme contexte — celui qui soumet son visage a Dieu en faisant le bien s'est accroche a l'anse la plus solide. L'accrochage est donc associe a la soumission sincere et a la pratique.",
              axe4_coherence: "L'expression 'al-urwa al-wuthqa' (l'anse la plus solide) est reprise en 31:22 avec le meme contexte — celui qui soumet son visage a Dieu en faisant le bien s'est accroche a l'anse la plus solide. L'accrochage est donc associe a la soumission sincere et a la pratique. En 3:103 : 'wa-ta'tasimu bi-habli llahi jami'an' (accrochez-vous tous ensemble a la corde de Dieu) — image parallele ou l'accrochage est une action communautaire et volontaire.",
              axe5_frequence: "En arabe, 'istamsaka bi-hibal Allah' (s'accrocher a la corde de Dieu, 3:103) est une image parallele. L'accrochage est une metaphore filee dans le Coran : la religion n'est pas une idee abstraite mais une prise concrete qui tient l'homme dans la bonne direction. La Form X de m-s-k n'apparait que rarement dans le Coran, ce qui souligne le caractere exceptionnel et fort de la saisie decrite ici — s'accrocher a l'anse solide est l'acte de foi le plus ferme et le plus delibere qui soit."
            },
            "Retention/NePassLacher": {
              status: "probable",
              senses: [
                "amsaka (Form IV) = retenir, ne pas lacher, garder pour soi",
                "sens de conserver, de maintenir sans relacher",
                "action plus passive que l'accrochage actif"
              ],
              proof_ctx: "Lane's Lexicon: m-s-k Form IV amsaka = to retain, to withhold, to keep from letting go; amsaka 'an = to restrain from, to hold back. This is a related but more passive sense than the active seizing of Form X istamsaka.",
              axe1_verset: "La retention (ne pas lacher) est un aspect de l'accrochage mais il est second. Dans 'istamsaka bi-l-'urwati', c'est d'abord l'acte de saisir et de s'accrocher qui est vise — l'aspect de ne-pas-lacher decoule de la qualite de la saisie initiale. La Form X insiste sur l'initiative de la saisie, pas sur la retention passive.",
              axe2_voisins: "La distinction entre saisir (action initiale) et retenir (action continue) est importante dans le contexte du verset. Le verbe istamsaka est au perfectif (qad istamsaka = s'est saisi) — c'est l'acte accompli de saisir qui est mis en avant, pas l'etat continu de retention qui en resulte. La retention est impliquee mais elle est la consequence, pas le sens premier.",
              axe3_sourate: "En 2:229 et 2:231, amsaka est utilise dans le contexte du divorce : 'amsiku hunna bi-ma'rufin' (retenez-les convenablement) et 'la tumsiku hunna diraran' (ne les retenez pas pour les nuire). Ce sens de retention est bien atteste dans Al-Baqarah mais dans des contextes differents. Dans 2:256, c'est l'acte de saisir la foi qui est premier.",
              axe4_coherence: "Les deux dimensions (saisir et retenir) sont inherentes a l'image de l'anse : on attrape l'anse (acte de saisie) et on ne la lache pas (retention). La Form X istamsaka capture les deux en mettant l'accent sur l'initiative et la force de la saisie. Le sens de retention est implicitement present dans l'image.",
              axe5_frequence: "Le sens de retention est tres frequent dans le Coran (Form IV amsaka) mais la Form X istamsaka est rare et specifique a la saisie active et deliberee. La distinction est importante pour la traduction : 'retenir' serait moins fort que 's'accrocher' pour rendre la Form X."
            }
          }
        }
      },
      {
        word_key: "wvq",
        position: 18,
        sense_chosen: "solidite, fiabilite — ce qui tient, ce qui ne cede pas, ce en quoi on peut avoir confiance absolue",
        analysis_axes: {
          sense_chosen: "solidite, fiabilite — ce qui tient, ce qui ne cede pas, ce en quoi on peut avoir confiance absolue",
          concept_chosen: "Solidite/Fiabilite",
          concepts: {
            "Solidite/Fiabilite": {
              status: "retenu",
              senses: [
                "wathiqa (Form I) = etre solidement attache, etre fiable, digne de confiance",
                "wuthqa = superlative feminin : la plus solide, la plus fiable",
                "al-'urwatu al-wuthqa = l'anse la plus solide, la plus sure",
                "solidite absolue : ce qui ne cede pas face a la force ou au temps"
              ],
              proof_ctx: "Lane's Lexicon: w-th-q = to be firmly tied, to be firm and solid, to be reliable and trustworthy; wuthqa = superlative/elative feminine form = the most firm, the most reliable, the most trustworthy; al-'urwatu al-wuthqa = the most firm handle/hold. The root implies both physical solidity and moral reliability.",
              axe1_verset: "Al-urwa al-wuthqa = l'anse la plus solide. Wuthqa (superlative en contexte) dit que parmi toutes les anses possibles, celle-la est la plus digne de confiance — elle ne se cassera pas (la infisama laha = sans rupture possible). La solidite est absolue et double : wuthqa dit la qualite intrinseque de l'anse (elle est solide par nature), et la infisama ajoute la garantie externe (elle ne peut pas etre brisee de l'exterieur). La solidite divine est presentee comme superieure a toute solidite humaine.",
              axe2_voisins: "La qualification 'sans rupture possible' (la infisama laha) confirme le sens de wuthqa : non seulement elle est solide, mais elle est indestructible. La rupture (infisam) est la cassure de ce qui est lie — la wuthqa s'oppose structurellement a l'infisam. L'anse est qualifiee deux fois de solide (wuthqa + la infisam) non par redundance mais par gradation : d'abord sa solidite positive, puis l'impossibilite de sa destruction.",
              axe3_sourate: "La solidite divine (dans les pactes, dans la protection) est un theme constant dans al-Baqarah. Le pacte avec les Enfants d'Israel (2:63, 83, 84, 93) utilise la racine m-th-q pour les engagements solennels. La solidite de l'engagement envers Dieu dans 2:256 est presentee comme superieure a tout pacte humain. L'image de l'anse solide est la metaphore la plus concrete de cette solidite divine dans la sourate.",
              axe4_coherence: "La racine w-th-q apparait dans le Coran principalement pour les pactes et engagements (mawthiq = pacte solennel en 4:154, 5:7). La solidite d'un pacte et la solidite d'une anse partagent la meme qualite fondamentale : ce qui tient, ce qui ne se relache pas. La foi en Dieu est ici presentee comme l'engagement le plus solide qui soit — l'anse la plus fiable parmi toutes les anses possibles.",
              axe5_frequence: "Pour les juristes, un contrat 'wathiq' est un contrat sur, authentifie. La foi en Dieu est ici presentee comme l'engagement le plus solide qui soit — plus fiable que tout contrat humain, plus durable que toute alliance entre hommes. L'usage juridique de la racine w-th-q pour les engagements solennels confirme que wuthqa dans ce verset a une dimension d'engagement absolument fiable, pas seulement une solidite physique."
            },
            "Pacte/Engagement": {
              status: "probable",
              senses: [
                "wathiqa et mithaq = pacte, engagement solennel",
                "mawthiq = pacte solennel (4:154, 5:7)",
                "la meme racine designe les engagements les plus forts"
              ],
              proof_ctx: "Lane's Lexicon: w-th-q also yields mithaq = solemn covenant, firm compact; mawthiq = a vow, a covenant, a firm pledge. These are derived from the same root and share the quality of firmness and reliability. Wuthqa applied to 'urwa (handle) draws on this semantic field of reliable commitment.",
              axe1_verset: "Le sens de pacte/engagement est connexe mais il designe ici la qualite de l'anse (wuthqa = la plus solide/fiable) plutot qu'un accord bilateral. La nuance est importante : wuthqa applique a l'urwa qualifie la solidite de la prise, pas un engagement contractuel entre deux parties. Cependant, la connotation d'engagement fiable est bien presente — saisir l'anse solide c'est s'engager dans quelque chose de sur.",
              axe2_voisins: "La structure du verset (rejeter le taghut, croire en Dieu, s'accrocher a l'anse) ressemble a un engagement unilateral : le croyant prend une prise solide (istamsaka) sur quelque chose de fiable (wuthqa). Cette action unilaterale peut etre lue comme un engagement (sens de pacte) mais l'image est celle de la prise physique sur une anse, pas d'un contrat bilateral.",
              axe3_sourate: "Dans Al-Baqarah, les pactes (mithaq) occupent une place importante : pacte avec les Enfants d'Israel (2:63, 83, 84, 93), pacte entre epoux (mithaq dans le mariage 4:21 explicitement). Le verset 2:256 n'utilise pas mithaq mais wuthqa — ce choix lexical insiste sur la solidite de la prise plutot que sur la nature contractuelle de l'engagement.",
              axe4_coherence: "Les deux sens (solidite physique de l'anse vs pacte solennel) convergent dans l'image finale : l'anse la plus solide est a la fois une prise concrete sur laquelle on s'appuie et un engagement fiable qui ne se rompra pas. La racine w-th-q unit ces deux dimensions. Le sens de solidite/fiabilite est premier pour wuthqa applique a une anse ; le sens de pacte est second mais present.",
              axe5_frequence: "Mawthiq (pacte solennel) apparait 5 fois dans le Coran (4:154, 5:7, 12:66, 12:80). Wuthqa applique a l'urwa (l'anse) est specifique a 2:256 et 31:22. La repartition confirme que wuthqa dans ces deux versets est une forme superlative de fiabilite/solidite appliquee a l'image de l'anse, distincte du mawthiq (pacte) qui est un terme juridique-religieux specifique."
            }
          }
        }
      }
    ],
    daily_phrases: []
  }
};

async function main() {
  const data = verseData[256];

  // Mise a jour verse_analyses
  const { error: veErr } = await supabase.from('verse_analyses').update({
    full_translation: data.full_translation,
    translation_arab: data.translation_arab,
    translation_explanation: data.translation_explanation,
    segments: data.segments
  }).eq('id', data.analysis_id);

  if (veErr) { console.error('ERROR verse_analyses:', veErr.message); return; }
  console.log('verse_analyses updated (V256)');

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

  console.log('DONE V256');
}

main().catch(console.error);
