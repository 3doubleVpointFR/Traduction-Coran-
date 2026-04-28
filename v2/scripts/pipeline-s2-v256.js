const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

const verseData = {
  256: {
    verse_id: 263, analysis_id: 622,
    translation_arab: "la ikraha fi d-dini qad tabayyana r-rushdu mina l-ghayyi fa-man yakfur bi-t-taghuti wa-yu'min bi-llahi fa-qadi stamSaka bi-l-'urwati l-wuthqa la infisama laha wa-llahu sami'un 'alim",
    full_translation: "Pas de contrainte dans la religion. La bonne voie s'est bien distinguée de l'erreur. Celui qui refuse les idoles et croit en Dieu s'est en effet saisi de la poignée la plus solide, qui ne se brisera pas. Dieu est Tout-Entendant, Omniscient.",
    translation_explanation: `§DEMARCHE§
Le verset 2:256 est l'une des déclarations de principe les plus fondamentales du Coran sur la liberté de conscience. La démarche traductive consiste à rendre chaque terme dans sa plénitude sémantique tout en préservant la cohérence interne du verset, qui va de la déclaration générale (pas de contrainte) à la métaphore concrète (la poignée solide), en passant par l'énoncé du choix libre entre la bonne voie et l'erreur.

La ikraha fi d-din est rendu par "Pas de contrainte dans la religion" plutôt que "Nulle contrainte en la religion" car la formulation directe en français courant rend mieux la force assertive de l'arabe. Ikraha (racine krh, Form IV masdar) désigne la coercition active, le fait de forcer quelqu'un contre sa volonté — c'est bien plus fort que "pression" ou "obligation". La négation la est absolue : pas de contrainte, nulle, aucune.

Qad tabayyana r-rushdu mina l-ghayyi est rendu par "La bonne voie s'est bien distinguée de l'erreur" : qad + verbe accompli exprime une complétude, un fait accompli avec emphase. Tabayyana (Form V de byn = devenir clairement visible) signifie "s'est manifesté de façon évidente". Rushd est traduit par "bonne voie" plutôt que "rectitude" car rushd dans l'arabe coranique désigne le sens pratique, la maturité de jugement, la direction sensée — une notion active de bon chemin. Ghayy est rendu par "l'erreur" qui capture l'égarement actif du ghayy, son sens de perdition volontaire (opposé au rushd).

Fa-man yakfur bi-t-taghuti wa-yu'min bi-llahi est rendu par "Celui qui refuse les idoles et croit en Dieu" : yakfur (kfr au subjonctif) est traduit par "refuse" plutôt que "nie" car bi-t-taghut avec kfr exprime le rejet actif des idoles — on ne nie pas une idole comme on nierait un fait, on la rejette, on refuse d'y obéir. Taghut (racine tghy = dépasser les limites) est traduit par "les idoles" qui est le sens le plus courant dans le contexte coranique de l'époque.

Fa-qadi stamSaka bi-l-'urwati l-wuthqa est rendu par "s'est en effet saisi de la poignée la plus solide" : istamsaka (Form X de msk) exprime une saisie ferme et délibérée — non pas simplement tenir mais s'agripper avec détermination. 'Urwa al-wuthqa est la "poignée la plus solide" — al-wuthqa (féminin du superlatif de wathiqa = solide, fiable) qualifie la poignée de la manière la plus absolue.

La infisama laha est rendu par "qui ne se brisera pas" : infisam (racine fsm = briser, fendre) avec la négation la = l'impossibilité de rupture. La poignée est présentée comme indestructible — il n'y a pas de rupture possible. C'est une garantie absolue pour celui qui s'y est accroché.
§JUSTIFICATION§
"Pas de contrainte" pour la ikraha : ikraha (masdar de Form IV akraha) = la contrainte forcée, la coercition — Lane atteste akraha = to compel, to force, to do a thing against one's will. "La bonne voie" pour rushd : Lane atteste rushd = the right course, rectitude of conduct, maturity of judgment — traduit par "bonne voie" qui rend la dimension pratique et orientée de rushd. "L'erreur" pour ghayy : Lane atteste ghayy = error, going astray, perdition — s'oppose directement à rushd dans ce verset, formant un binôme clair. "Refuse les idoles" pour yakfur bi-t-taghut : kfr bi = rejeter, nier, refuser ; avec taghut (celui qui dépasse les limites = idole, tyran), le sens est rejet actif de ce qui s'oppose à Dieu. "S'est saisi de la poignée" pour istamsaka bi-l-'urwa : istamsaka (Form X = prendre ferme, s'accrocher avec force) + urwa (poignée, anse) — Lane atteste l'expression al-'urwat al-wuthqa = the most firm hold/handle. "La plus solide" pour al-wuthqa : wuthqa = féminin superlatif de wathiqa (solide, fiable, digne de confiance). "Qui ne se brisera pas" pour la infisama laha : infisam = rupture, brisure (racine fsm) — la negation porte sur la possibilité même de rupture.
§CRITIQUE§
La traduction de Hamidullah rend ce verset : "Nulle contrainte en la religion ! Car le bon chemin s'est distingué de l'égarement. Donc, quiconque mécroit aux Taghout et croit en Allah saisit l'anse la plus solide, à laquelle nul brisement. Allah est Omniscient et Omniscient." Cette traduction mérite plusieurs remarques. Premièrement, "nulle contrainte en la religion" est littéralement correct mais l'ordre français "pas de contrainte dans la religion" est plus naturel et plus fort : la ikraha est une formule percutante en arabe et doit l'être en français. Deuxièmement, "mécroit aux Taghout" : garder le terme arabe taghut en français est un choix lexical qui montre l'hésitation à trouver un équivalent — "refuse les idoles" est plus accessible au lecteur francophone non arabisant. Troisièmement, "saisit l'anse" pour istamsaka : Hamidullah choisit "anse" pour 'urwa (valide) mais "s'est saisi" pour istamsaka est moins fort que "s'agrippe" — la Form X exprime une saisie déterminée et ferme que "saisit" ne rend pas complètement. Quatrièmement, "à laquelle nul brisement" pour la infisama laha est une traduction elliptique qui calque l'arabe — "qui ne se brisera pas" est plus fluide en français. Notre traduction vise un équilibre entre fidélité sémantique et naturel de la langue française courante.`,
    segments: [
      { position: 1, text_arab: "لَآ", translation: "Pas de", phonetic: "la", grammar_type: "particle" },
      { position: 2, text_arab: "إِكْرَاهَ", translation: "contrainte", phonetic: "ikraha", grammar_type: "noun", root_key: "krh" },
      { position: 3, text_arab: "فِى", translation: "dans", phonetic: "fi", grammar_type: "particle" },
      { position: 4, text_arab: "ٱلدِّينِ", translation: "la religion", phonetic: "ad-dini", grammar_type: "noun", root_key: "dyn" },
      { position: 5, text_arab: "قَد", translation: "bien", phonetic: "qad", grammar_type: "particle" },
      { position: 6, text_arab: "تَّبَيَّنَ", translation: "s'est distinguée", phonetic: "tabayyana", grammar_type: "verb", root_key: "byn" },
      { position: 7, text_arab: "ٱلرُّشْدُ", translation: "la bonne voie", phonetic: "ar-rushdu", grammar_type: "noun", root_key: "rshd" },
      { position: 8, text_arab: "مِنَ", translation: "de", phonetic: "mina", grammar_type: "particle" },
      { position: 9, text_arab: "ٱلْغَىِّ", translation: "l'erreur", phonetic: "al-ghayyi", grammar_type: "noun", root_key: "ghwy" },
      { position: 10, text_arab: "فَمَن", translation: "Celui qui", phonetic: "fa-man", grammar_type: "particle" },
      { position: 11, text_arab: "يَكْفُرْ", translation: "refuse", phonetic: "yakfur", grammar_type: "verb", root_key: "kfr" },
      { position: 12, text_arab: "بِٱلطَّـٰغُوتِ", translation: "les idoles", phonetic: "bi-t-taghuti", grammar_type: "noun", root_key: "tghy" },
      { position: 13, text_arab: "وَيُؤْمِنۢ", translation: "et croit", phonetic: "wa-yu'min", grammar_type: "verb", root_key: "amn" },
      { position: 14, text_arab: "بِٱللَّهِ", translation: "en Dieu", phonetic: "bi-llahi", grammar_type: "particle" },
      { position: 15, text_arab: "فَقَدِ", translation: "s'est en effet", phonetic: "fa-qadi", grammar_type: "particle" },
      { position: 16, text_arab: "ٱسْتَمْسَكَ", translation: "saisi de", phonetic: "istamsaka", grammar_type: "verb", root_key: "msk" },
      { position: 17, text_arab: "بِٱلْعُرْوَةِ", translation: "la poignée", phonetic: "bi-l-'urwati", grammar_type: "noun", root_key: "erw" },
      { position: 18, text_arab: "ٱلْوُثْقَىٰ", translation: "la plus solide", phonetic: "al-wuthqa", grammar_type: "adjective", root_key: "wthq" },
      { position: 19, text_arab: "لَا", translation: "qui ne", phonetic: "la", grammar_type: "particle" },
      { position: 20, text_arab: "ٱنفِصَامَ", translation: "se brisera pas", phonetic: "infisama", grammar_type: "noun", root_key: "fsm" },
      { position: 21, text_arab: "لَهَا", translation: "pour elle", phonetic: "laha", grammar_type: "particle" },
      { position: 22, text_arab: "وَٱللَّهُ", translation: "Dieu est", phonetic: "wa-llahu", grammar_type: "particle" },
      { position: 23, text_arab: "سَمِيعٌ", translation: "Tout-Entendant", phonetic: "sami'un", grammar_type: "adjective", root_key: "sme" },
      { position: 24, text_arab: "عَلِيمٌ", translation: "Omniscient", phonetic: "'alimun", grammar_type: "adjective", root_key: "elm" }
    ],
    vwa: [
      {
        word_key: "krh",
        position: 2,
        sense_chosen: "contrainte, coercition — forcer quelqu'un contre sa volonté (Form IV masdar)",
        analysis_axes: {
          sense_chosen: "contrainte, coercition — forcer quelqu'un contre sa volonté (Form IV masdar)",
          concept_chosen: "Coercition/LiberteDeConscience",
          concepts: {
            "Coercition/LiberteDeConscience": {
              status: "retenu",
              senses: ["être mécontent de, détester (sens premier racine kره)", "Form IV akraha = contraindre par la force, forcer", "ikraha = masdar : la contrainte, la coercition", "la ikraha fi d-din = absence totale de contrainte dans la religion"],
              proof_ctx: "Lane's Lexicon: k-r-h = to be displeased, to dislike; Form IV akraha = to compel, to force, to constrain against one's will; ikraha = compulsion, coercion, constraint. La ikraha fi d-din = there is no compulsion in religion (Quran 2:256). The masdar ikraha here functions as an absolute statement of principle.",
              axe1_verset: "Dans ce verset, ikraha est le mot central sur lequel repose toute la déclaration de principe. La negation la + ikraha (masdar) = formule d'impossibilité absolue : il n'existe pas de contrainte, il ne peut pas y en avoir. Cette structure (la + masdar) est la plus forte façon d'exprimer une négation en arabe, plus forte que lan yakunu (ne sera pas) ou ma kana (n'a pas été). Le Coran choisit ici le registre de la déclaration ontologique : la contrainte n'est pas compatible avec la nature même de la religion.",
              axe2_voisins: "Ikraha (pos=2) est immédiatement suivi de fi d-din (dans la religion, pos=3-4), puis de qad tabayyana (la bonne voie s'est distinguée, pos=5-7). La structure est logique : parce que la bonne voie s'est clairement distinguée de l'erreur, la contrainte est inutile. Si la vérité est évidente, on n'a pas besoin de forcer — le verbe tabayyana (devenir clairement visible, Form V) fonctionne comme la justification de la déclaration d'ikraha.",
              axe3_sourate: "La racine krh dans Al-Baqara apparaît également en 2:216 (wa-'asa an takrahu shay'an wa-huwa khayrun lakum = il se peut que vous détestiez quelque chose et que ce soit bon pour vous) et 2:286 (la yukallif allahu nafsan illa wus'aha). L'idée que la contrainte est incompatible avec la foi authentique traverse toute la sourate : la foi vraie ne peut pas être forcée car elle est un acte intérieur de conscience.",
              axe4_coherence: "La cohérence entre ikraha et la suite du verset est profonde : si personne ne peut être contraint, c'est parce que le choix existe vraiment — yakfur (refuse) ou yu'min (croit). Les deux options sont réelles. Celui qui choisit de s'accrocher à la poignée solide le fait librement. La liberté de conscience est la condition de possibilité d'une foi authentique : une foi contrainte ne serait pas une foi mais une obéissance mécanique.",
              axe5_frequence: "La déclaration la ikraha fi d-din est l'une des formulations les plus célèbres du Coran dans les débats sur la liberté religieuse. La racine krh dans le Coran couvre deux champs : le déplaisir/la haine (karaha = détester, v.49:12) et la contrainte forcée (akraha = forcer, v.24:33). Ce verset utilise le sens fort de la coercition pour le nier radicalement dans le domaine religieux, marquant une position théologique fondamentale sur la non-imposition de la foi."
            }
          }
        }
      },
      {
        word_key: "dyn",
        position: 4,
        sense_chosen: "la religion comme système de vie, la voie choisie — sens global englobant foi, pratique et jugement",
        analysis_axes: {
          sense_chosen: "la religion comme système de vie, la voie choisie — sens global englobant foi, pratique et jugement",
          concept_chosen: "Din/SystemeDeVie",
          concepts: {
            "Din/SystemeDeVie": {
              status: "retenu",
              senses: ["la dette, l'obligation, le jugement (sens premier)", "la religion comme système de vie complet", "al-din = la foi dans sa dimension totale (croyance + pratique + éthique)", "din dans al-Baqara = la voie choisie par opposition à la contrainte"],
              proof_ctx: "Lane's Lexicon: d-y-n = debt, obligation, requital, judgment; din = the religion, the way of life, the system of belief and practice; al-din = the religion as a total system encompassing faith, law and ethics. The primary sense of debt/obligation feeds into religion as something owed to God and chosen by the human.",
              axe1_verset: "Dans ce verset, al-din est le domaine dans lequel la contrainte est déclarée impossible. La ikraha fi l-din ne dit pas seulement "dans la prière" ou "dans le rite" mais dans l'ensemble du système religieux — la foi, la pratique, l'éthique, la vision du monde. Le din est total : on ne peut pas forcer quelqu'un à adopter un système de vie de façon authentique. La contrainte peut produire une conformité extérieure mais pas un din vrai.",
              axe2_voisins: "Al-din (pos=4) est délimité par la negation la ikraha (pos=1-2) d'un côté et par qad tabayyana r-rushdu mina l-ghayyi (pos=5-9) de l'autre. Cette structure place le din entre la liberté (pas de contrainte) et la clarté (la bonne voie est évidente). Le din n'est pas un mystère obscur qui nécessiterait une guidance forcée — c'est un chemin qui s'est clarifié et que l'on peut choisir librement.",
              axe3_sourate: "Al-din dans Al-Baqara est présent dès 2:132 (Ibrahim recommande le din à ses fils) et traverse toute la sourate comme la voie totale soumise à Dieu. En 2:193, l'idée est de combattre jusqu'à ce qu'il n'y ait plus de persecution et que le din soit établi — mais ce verset 256 précise que le din lui-même ne peut pas être imposé par la force. La distinction est importante : protéger la liberté de pratiquer le din est différent de forcer quelqu'un à adopter le din.",
              axe4_coherence: "La cohérence entre din et l'ensemble du verset est que le système de vie qu'est le din ne peut être authentique que s'il est choisi librement. La foi dans le cœur (yu'min bi-llahi), le rejet des idoles (yakfur bi-t-taghut), la saisie de la poignée solide (istamsaka bi-l-'urwat al-wuthqa) — tout cela est un acte de volonté libre. Un din contraint serait une contradiction dans les termes.",
              axe5_frequence: "La racine dyn est l'une des plus importantes du Coran avec des centaines d'occurrences. Dans Al-Baqara elle désigne tantôt la dette/créance (v.282 le long verset sur les dettes), tantôt la religion comme système total (v.132, 193, 217, 256). Le sens de din comme 'jugement final' (yawm ad-din = jour du Jugement) relie la religion au compte final que chacun devra rendre — ce qui confirme que le din est affaire de conscience individuelle, pas de conformité imposée."
            }
          }
        }
      },
      {
        word_key: "rshd",
        position: 8,
        sense_chosen: "la bonne voie, la maturité de jugement, la direction sensée et pratique",
        analysis_axes: {
          sense_chosen: "la bonne voie, la maturité de jugement, la direction sensée et pratique",
          concept_chosen: "Rushd/BonneVoie",
          concepts: {
            "Rushd/BonneVoie": {
              status: "retenu",
              senses: ["être sur la bonne voie, grandir dans la bonne direction (sens premier)", "rushd = la rectitude pratique, la maturité de jugement", "ar-rushdu = la bonne voie comme réalité évidente et vérifiable", "s'oppose à ghayy = l'égarement, l'erreur volontaire"],
              proof_ctx: "Lane's Lexicon: r-sh-d = to go the right way, to follow the right course; rushd = right conduct, maturity of judgment, good sense in practical affairs; ar-rushdu = the right course (as opposed to al-ghayy the wrong course). The word carries a sense of practical wisdom and correct orientation, not just theoretical knowledge.",
              axe1_verset: "Dans ce verset, ar-rushdu est le sujet de tabayyana : la bonne voie s'est manifestée clairement d'elle-même. Le verbe tabayyana (Form V = devenir évident, se clarifier de façon visible) est important : ce n'est pas Allah qui impose la clarté, c'est la bonne voie qui s'est montrée d'elle-même à quiconque veut voir. Cette auto-manifestation du rushd est la raison pour laquelle la contrainte est inutile : quand la vérité est évidente, on n'a pas besoin de forcer.",
              axe2_voisins: "Ar-rushdu (pos=8) s'oppose directement à al-ghayyi (pos=10) dans la même phrase : tabayyana ar-rushdu mina l-ghayyi (la bonne voie s'est distinguée de l'erreur). Le min (de, depuis) marque la séparation : les deux chemins sont maintenant clairement distingués l'un de l'autre. Cette opposition binaire rushd/ghayy est l'une des plus claires du Coran — deux voies, deux destinations, un choix libre.",
              axe3_sourate: "La racine rshd dans Al-Baqara est présente en 2:186 (wa-idha sa'alaka 'ibadi 'anni fa-inni qarib = si Mes serviteurs t'interrogent sur Moi, Je suis proche) et implicitement dans les nombreux passages sur la guidance. En 2:256, rushd est employé sans article défini dans la première partie de la sourate, ce qui suggère une vérité universelle : la bonne voie (rushd) en tant que telle, pas une version particulière.",
              axe4_coherence: "La cohérence entre rushd et la suite du verset est que celui qui s'accroche à la poignée solide (istamsaka bi-l-'urwat al-wuthqa) est précisément celui qui a compris le rushd : il voit la bonne voie, rejette l'erreur et fait le choix juste. La chaîne logique du verset est : rushd/ghayy sont clairs (v.256a) → le croyant rejette taghut + croit en Dieu (v.256b) → il s'accroche à la poignée indestructible (v.256c). Le rushd est le point de départ de cette chaîne.",
              axe5_frequence: "La racine rshd dans le Coran couvre la bonne guidance pratique (rushd, rashid), la maturité de jugement (v.4:6 pour les orphelins ayant atteint l'âge de rashid = la maturité), et la bonne orientation spirituelle. En 18:10 les compagnons de la caverne demandent rashadan = la bonne direction. En 72:2 les djinns reconnaissent avoir trouvé ar-rushda. Cette racine est distincte de huda (guidance spirituelle directe de Dieu) : rushd est la sagesse pratique accessible à la raison humaine."
            }
          }
        }
      },
      {
        word_key: "ghwy",
        position: 10,
        sense_chosen: "l'erreur, l'égarement — s'écarter de la bonne voie de façon active et délibérée",
        analysis_axes: {
          sense_chosen: "l'erreur, l'égarement — s'écarter de la bonne voie de façon active et délibérée",
          concept_chosen: "Ghayy/Egarement",
          concepts: {
            "Ghayy/Egarement": {
              status: "retenu",
              senses: ["s'égarer, être dans l'erreur (sens premier de ghawa)", "ghayy = l'égarement, l'erreur active (plus fort que simple ignorance)", "al-ghayyi = génitif : séparé de l'égarement (s'en distingue)", "s'oppose directement à rushd dans ce verset — le binôme de l'orientation"],
              proof_ctx: "Lane's Lexicon: gh-w-y = to err, to go astray, to be in error; ghayy = error, going astray, perdition — the opposite of rushd. The word implies an active straying from the right path, not mere ignorance. Al-ghayy in contrast to ar-rushd forms the fundamental binary of right guidance versus erroneous wandering.",
              axe1_verset: "Dans ce verset, al-ghayyi est le deuxième terme du binôme rushd/ghayy. La phrase tabayyana ar-rushdu mina l-ghayyi dit que les deux sont maintenant clairement séparés, distingués. On peut les reconnaître chacun. Cette clarté de la distinction est précisément ce qui rend la contrainte inutile : si quelqu'un choisit al-ghayy, ce n'est pas par ignorance (la distinction est claire) mais par un choix délibéré. La contrainte ne changerait pas ce choix intérieur.",
              axe2_voisins: "Al-ghayyi (pos=10) est relié à ar-rushdu (pos=8) par le verbe tabayyana et la préposition min. La structure min (de/depuis) exprime la séparation : rushd s'est distingué depuis ghayy, les deux étant maintenant clairement délimités. Ce qui suivra immédiatement (fa-man yakfur bi-t-taghut = celui qui refuse les idoles) est la traduction concrète du choix entre rushd et ghayy : refuser le taghut et croire en Dieu = choisir le rushd.",
              axe3_sourate: "La racine ghwy dans Al-Baqara est rare mais son sens d'égarement actif résonne avec les passages sur les hypocrites (munafiqun) qui savent la vérité mais la rejettent (2:8-20) et les mécréants qui choisissent de ne pas voir (2:6-7). Le ghayy n'est pas l'ignorance involontaire — c'est le choix de l'erreur quand la vérité est disponible. C'est pourquoi le ghayy entraîne la responsabilité morale.",
              axe4_coherence: "La cohérence entre ghayy et la conclusion du verset est que ceux qui choisissent le ghayy ne s'accrochent pas à la poignée solide. La poignée al-'urwat al-wuthqa est disponible pour tous (la liberté est garantie), mais seul celui qui refuse le taghut et croit en Dieu la saisit. Ceux qui choisissent le ghayy restent sans point d'ancrage, ce qui les expose à la rupture et à la perdition.",
              axe5_frequence: "La racine ghwy dans le Coran couvre l'égarement spirituel (ghawa = s'égarer, v.53:2 ma dalla sahibukum wa-ma ghawa = votre compagnon ne s'est pas égaré), la perdition active (ghayy = perdition, v.19:59 ceux qui ont négligé la prière trouveront ghayyan = la perdition). En 79:37-39 celui qui a transgressé et préféré la vie mondaine, son refuge sera le ghayy. La racine a toujours une connotation d'erreur choisie et de ses conséquences."
            }
          }
        }
      },
      {
        word_key: "tghy",
        position: 14,
        sense_chosen: "les idoles, ce qui dépasse les limites divines — transgression élevée en objet de culte",
        analysis_axes: {
          sense_chosen: "les idoles, ce qui dépasse les limites divines — transgression élevée en objet de culte",
          concept_chosen: "Taghut/Idoles",
          concepts: {
            "Taghut/Idoles": {
              status: "retenu",
              senses: ["dépasser les limites (sens premier de taghiya)", "taghut = celui/ce qui transgresse les limites de Dieu", "les idoles, les tyrans, tout objet de culte autre que Dieu", "bi-t-taghut avec kfr = rejeter activement les idoles/la transgression"],
              proof_ctx: "Lane's Lexicon: t-gh-y = to exceed the proper bounds, to be inordinate, to transgress; taghut = one who exceeds the bounds (in evil), an idol, a false deity, a tyrant; at-taghut = the transgressor/idol (used as both singular and plural in the Quran). Kfr bi-t-taghut = to disbelieve in/reject the idols/transgressors.",
              axe1_verset: "Dans ce verset, bi-t-taghut est le premier objet du choix libre décrit par fa-man yakfur/wa-yu'min : celui qui refuse le taghut et croit en Dieu. Le taghut représente tout ce qui prend la place de Dieu et transgresse les limites qu'Il a fixées — idoles, tyrans, systèmes d'oppression, tout ce qui réclame une loyauté absolue que Dieu seul mérite. Refuser le taghut est la condition préalable à la foi authentique.",
              axe2_voisins: "Bi-t-taghut (pos=14) est en opposition directe avec bi-llahi (pos=16) : yakfur bi-t-taghut wa-yu'min bi-llahi. Les deux compléments prépositionnels (avec bi dans les deux cas) forment un parallélisme parfait : refuser (kfr + bi) les idoles / croire (amn + bi) en Dieu. Ce parallélisme souligne que le choix est binaire, clair et total — pas de position intermédiaire entre refuser les idoles et croire en Dieu.",
              axe3_sourate: "Le taghut dans Al-Baqara apparaît également en 2:257 (le verset suivant) où les alliés des mécréants sont appelés at-taghut. La paire de versets 256-257 forme ainsi un diptyque : 256 décrit le principe (liberté de conscience, choix rushd/ghayy, s'accrocher à Dieu) et 257 décrit le mécanisme (Dieu guide les croyants vers la lumière, le taghut mène les mécréants vers les ténèbres). Le taghut est le fil conducteur entre les deux versets.",
              axe4_coherence: "La cohérence entre taghut et l'image de la poignée solide est que le taghut représente tout ce qui semble être une poignée mais qui n'en est pas une — des appuis trompeurs, des loyautés qui brisent, des systèmes qui abandonnent ceux qui s'y accrochent. À l'opposé, la 'urwat al-wuthqa (la poignée la plus solide) est indestructible. Rejeter le taghut = refuser les fausses poignées ; croire en Dieu = saisir la vraie poignée.",
              axe5_frequence: "La racine tghy et le mot taghut reviennent plusieurs fois dans le Coran (v.2:256-257, 4:51, 4:60, 4:76, 5:60, 16:36, 39:17). En 16:36 il est dit qu'à chaque nation a été envoyé un messager pour dire : adorez Dieu et rejetez le taghut (wa-jtanibu t-taghut). Le rejet du taghut est donc présenté comme le message universel de tous les prophètes. Ce verset 2:256 s'inscrit dans cette tradition en faisant du rejet du taghut la condition de la vraie foi."
            }
          }
        }
      },
      {
        word_key: "msk",
        position: 18,
        sense_chosen: "s'est saisi de, s'est accroché fermement — Form X : saisir avec détermination et force",
        analysis_axes: {
          sense_chosen: "s'est saisi de, s'est accroché fermement — Form X : saisir avec détermination et force",
          concept_chosen: "Istamsaka/SaisirFermement",
          concepts: {
            "Istamsaka/SaisirFermement": {
              status: "retenu",
              senses: ["tenir ferme, s'accrocher (sens premier de masaka)", "Form X istamsaka = saisir fortement, s'agripper avec détermination", "istamsaka bi = s'est saisi de, s'est agrippé à", "la Form X ajoute l'intensité et le caractère délibéré de la saisie"],
              proof_ctx: "Lane's Lexicon: m-s-k = to hold, to retain, to grasp; Form X istamsaka = to hold firmly, to grasp with determination, to cling to; istamsaka bi-sh-shay' = to hold fast to something, to take firm hold of it. The Form X (reflexive-intensive) emphasizes the personal initiative and strength of the grasp.",
              axe1_verset: "Dans ce verset, istamsaka (Form X perfectif) exprime une action accomplie avec résolution : celui qui refuse les idoles et croit en Dieu S'EST SAISI (accompli, résolu) de la poignée la plus solide. La Form X en arabe ajoute à la racine un sens d'intensité et de démarche active : ce n'est pas une saisie accidentelle ou passive, c'est un acte délibéré de quelqu'un qui cherche un ancrage et qui le trouve. Le perfectif (qad istamsaka) signifie que la saisie est effective et complète.",
              axe2_voisins: "Istamsaka (pos=18) est relié à bi-l-'urwati (pos=19) et al-wuthqa (pos=20) : la Form X avec bi = s'accrocher à quelque chose de précis. La poignée al-'urwat al-wuthqa est l'objet de cette saisie — elle est décrite comme la plus solide (wuthqa) et comme indéfectible (la infisama laha). La saisie et l'objet saisi se définissent mutuellement : une saisie aussi forte exige une poignée aussi solide.",
              axe3_sourate: "La métaphore de s'accrocher à une corde/poignée solide est récurrente dans la théologie coranique. En 3:103 : wa-ta'tasimu bi-habli llahi jami'an (accrochez-vous tous ensemble à la corde de Dieu). En 3:112 les humiliés sont ceux qui ne se sont pas accrochés à la corde de Dieu. La Form X istamsaka dans notre verset est encore plus forte que Form VIII i'tasama : elle exprime la saisie la plus ferme, la plus déterminée.",
              axe4_coherence: "La cohérence entre istamsaka et l'ensemble du verset est que la saisie de la poignée est la conséquence logique et pratique du double choix de refuser le taghut et de croire en Dieu. Ce n'est pas une récompense accordée de l'extérieur mais la réalité de ce que signifie croire : s'accrocher à quelque chose de solide. La foi n'est pas un état passif mais une saisie active — istamsaka est le verbe parfait pour exprimer cela.",
              axe5_frequence: "La racine msk dans le Coran couvre plusieurs domaines : retenir (v.2:231 wa-amsiku hunna bi-ma'rufin = retenez-les convenablement), tenir ferme (Form II massaka = faire tenir, consolider), et la saisie spirituelle (Form X istamsaka = s'accrocher avec résolution). La Form X n'apparaît que rarement dans le Coran, ce qui souligne le caractère exceptionnel et fort de la saisie décrite ici — s'accrocher à la poignée solide est un acte de foi de la plus haute intensité."
            }
          }
        }
      },
      {
        word_key: "fsm",
        position: 22,
        sense_chosen: "brisure, rupture — l'impossibilité de rompre le lien entre le croyant et la poignée solide",
        analysis_axes: {
          sense_chosen: "brisure, rupture — l'impossibilité de rompre le lien entre le croyant et la poignée solide",
          concept_chosen: "Infisam/Indestructibilite",
          concepts: {
            "Infisam/Indestructibilite": {
              status: "retenu",
              senses: ["briser, fendre (sens premier de fasama)", "infisam = rupture, brisure, séparation (masdar de Form VII)", "la infisama laha = pas de rupture possible pour elle (négation absolue)", "la poignée al-'urwat al-wuthqa ne peut pas être brisée"],
              proof_ctx: "Lane's Lexicon: f-s-m = to break, to cleave, to split; Form VII infasama = to become broken, to split apart; infisam = breaking, rupture, cleavage. La infisama laha = there is no breaking for it, it cannot be broken. The negation la + masdar is an absolute negation of the very possibility of rupture.",
              axe1_verset: "Dans ce verset, la infisama laha (pas de rupture pour elle) est la garantie finale de l'image de la poignée solide. Après avoir décrit la poignée comme la plus solide (al-wuthqa), le Coran ajoute une garantie supplémentaire : non seulement elle est solide, mais elle est indestructible — il n'y a pas de rupture possible. La négation la + masdar infisam = impossibilité ontologique. Ce n'est pas "elle est difficile à briser" mais "elle ne peut pas être brisée".",
              axe2_voisins: "La infisama laha (pos=22-23) est la proposition relative qui qualifie al-'urwati l-wuthqa (pos=19-20). La poignée la plus solide + qui ne se brise pas = double qualification de la solidité. Cette répétition de l'idée de solidité (wuthqa + la infisam) n'est pas un pléonasme : wuthqa décrit la qualité intrinsèque de la poignée (sa solidité), tandis que la infisama laha décrit sa résistance à la destruction extérieure (elle ne peut pas être brisée par une force externe).",
              axe3_sourate: "La métaphore de la rupture et de l'indestructibilité résonne avec d'autres images de la solidité divine dans Al-Baqara. En 2:165 les mécréants aiment leurs idoles comme on aime Dieu — mais ces amours brisent au Jugement. En 2:256-257 la poignée solide de Dieu est le seul lien qui ne se brise pas. Le contraste entre les liens humains fragiles (qui se rompent) et le lien divin indestructible (la infisama) est une constante théologique du Coran.",
              axe4_coherence: "La cohérence entre infisam et l'ensemble du verset est que la garantie de la non-rupture est la conclusion logique de toute la démarche décrite : choisir librement (pas de contrainte), distinguer rushd de ghayy, rejeter taghut, croire en Dieu, et s'accrocher à la poignée. Tout ce parcours mène à un ancrage indestructible. L'infisam (la rupture) est ce qui ne peut pas arriver à celui qui a suivi cette démarche — c'est la promesse finale du verset.",
              axe5_frequence: "La racine fsm est très rare dans le Coran — elle n'apparaît que dans ce verset. Cette rareté souligne le caractère exceptionnel de l'image : l'indestructibilité de la poignée solide de Dieu est un hapax qui n'a pas d'équivalent ailleurs dans le Coran. Cette unicité de la formule la infisama laha contribue à sa force rhétorique et à son caractère absolu. La racine fsm (briser) est distincte de ksr (briser au sens général), de ftq (fendre), de qtt (couper) — elle désigne spécifiquement la rupture d'un lien, d'une connexion."
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
  const {error:veErr} = await supabase.from('verse_analyses').update({
    translation_arab: data.translation_arab, full_translation: data.full_translation,
    translation_explanation: data.translation_explanation, segments: data.segments
  }).eq('id', data.analysis_id);
  if (veErr) { console.error('ERROR:', veErr.message); return; }
  console.log('verse_analyses updated (V256)');
  for (const word of data.vwa) {
    const {error:vwaErr} = await supabase.from('verse_word_analyses').insert({
      verse_id: data.verse_id, word_key: word.word_key, position: word.position,
      sense_chosen: word.sense_chosen, analysis_axes: word.analysis_axes
    });
    if (vwaErr) console.error('VWA ERROR ' + word.word_key + ':', vwaErr.message);
    else console.log('  VWA OK: ' + word.word_key + ' pos=' + word.position);
  }
  console.log('DONE V256');
}
main().catch(console.error);
