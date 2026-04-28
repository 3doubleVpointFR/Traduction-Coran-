// Pipeline S3:V77 — verse_id=370, va_id=731
// إِنَّ ٱلَّذِينَ يَشْتَرُونَ بِعَهْدِ ٱللَّهِ وَأَيْمَـٰنِهِمْ ثَمَنًا قَلِيلًا أُو۟لَـٰٓئِكَ لَا خَلَـٰقَ لَهُمْ...
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

const VERSE_ID = 370;
const VA_ID    = 731;

// ─── ÉTAPE 2a : Enrichissement shry (aid=871) ─────────────────────────────
// 4 sens actuels : [acheter, vendre, échanger] + [se vendre]. SUSPECT (<5).
// Lane's broot=$rY (25 entrées) :
// Forme I شَرَى = vendre ET acheter (même racine, deux sens opposés — Lane's le note expressément)
// Forme III شَارَى = bartering/troquer mutuellement + persister dans une contestation
// Forme VIII اشترى = spécifiquement acheter/acquérir en échange de
// شَرِيَّةٌ = manière d'agir, nature innée, conduite (Lane's : "A way, course, mode, or manner of acting")
const SHRY_NEW_SENSES = [
  // Ajout à Échange/Transaction (3 sens → 5 sens)
  { analysis_id: 871, concept: 'Échange/Transaction', sense: 'marchander',          meaning_type: 'etymology', display_order: 4 },
  { analysis_id: 871, concept: 'Échange/Transaction', sense: 'troquer',              meaning_type: 'etymology', display_order: 5 },
  // Nouveau concept : Disposition/Comportement (de شَرِيَّةٌ)
  // Lane's : "A way, course, mode, or manner, of acting or conduct; and a nature, or a natural, native, or innate disposition"
  { analysis_id: 871, concept: 'Disposition/Comportement', sense: 'manière d\'agir',
    description: 'Trait caractéristique de la personne dans son rapport à l\'action. La disposition est intérieure — elle naît de la nature de la personne — mais se manifeste extérieurement dans la conduite. C\'est permanent, ancré dans le caractère, pas ponctuel. Lane\'s donne shariyyah = "a way, mode, or manner, of acting or conduct; a nature, or innate disposition."',
    meaning_type: 'etymology', display_order: 6 },
  { analysis_id: 871, concept: 'Disposition/Comportement', sense: 'conduite',        meaning_type: 'etymology', display_order: 7 },
  { analysis_id: 871, concept: 'Disposition/Comportement', sense: 'nature innée',    meaning_type: 'etymology', display_order: 8 },
];

// ─── ÉTAPE 2b : Enrichissement xlq (aid=344) ──────────────────────────────
// 8 sens actuels ✅ mais manque le concept CRUCIAL pour ce verset :
// خَلَاق (khalāq) = part, portion de bien — sens DISTINCT de خَلَقَ (créer).
// Lane's broot=xlq, entrée id=19950 :
// "khalāq = A share, or portion; a good, just, or righteous, share or portion;
//  or a full, complete, or abundant, share or portion of good and of goodness.
//  One says, lā khalāqa lahu fī l-ākhirah = There is no share of good for him
//  in the final state of existence. [See the Kur iii.71, &c.]"
// Lane's cite EXACTEMENT notre verset.
const XLQ_NEW_SENSES = [
  { analysis_id: 344, concept: 'Part/Portion méritée', sense: 'portion',
    description: 'Part de bien que quelqu\'un a acquise ou devrait avoir. Lane\'s donne khalāq = "a share, or portion — a full, complete share of good and righteousness." C\'est une réalité attribuable, stable : on a une portion ou on n\'en a pas. Elle est extérieure (elle appartient à la personne, pas ressentie intérieurement). La structure coranique lā khalāqa lahum fī l-ākhirah = aucune portion [de bien] pour eux dans la vie à venir — Lane\'s cite ce verset (3:77) explicitement.',
    meaning_type: 'etymology', display_order: 9 },
  { analysis_id: 344, concept: 'Part/Portion méritée', sense: 'part',               meaning_type: 'etymology', display_order: 10 },
  { analysis_id: 344, concept: 'Part/Portion méritée', sense: 'lot',                meaning_type: 'etymology', display_order: 11 },
  { analysis_id: 344, concept: 'Part/Portion méritée', sense: 'part méritée',       meaning_type: 'etymology', display_order: 12 },
];

// ─── PHRASES DU QUOTIDIEN — qll (aid=493, daily=0) ────────────────────────
// Seule racine sans phrases du quotidien dans ce verset.
const QLL_DAILY = [
  { analysis_id: 493, sense: 'être peu', arabic: 'عَدَدُ الحاضِرِينَ كانَ قَلِيلًا جِدًّا — لَمْ يَتَجاوَزْ عَشَرَةَ أَشْخاص.', phon: 'ʿadadu l-ḥāḍirīna kāna qalīlan jiddan — lam yatajāwaz ʿasharat ashkhāṣ.', french: 'Le nombre de participants était infime — pas plus de dix personnes.' },
  { analysis_id: 493, sense: 'être peu', arabic: 'المَوارِدُ المُتاحَةُ قَلِيلَةٌ مُقارَنَةً بِحَجْمِ المَشْرُوع.', phon: 'al-mawāridu l-mutāḥatu qalīlatun muqāranatan bi-ḥajmi l-mashrūʿ.', french: 'Les ressources disponibles sont dérisoires par rapport à l\'ampleur du projet.' },
  { analysis_id: 493, sense: 'être peu', arabic: 'أَجابَ بِكَلِماتٍ قَلِيلَةٍ لَكِنَّها كانَتْ دَقِيقَةً جِدًّا.', phon: 'ajāba bi-kalimātin qalīlatin lākinnaha kānat daqīqatan jiddan.', french: 'Il a répondu en peu de mots, mais ils étaient très précis.' },
];

// ─── ÉTAPE 3 : VWA entries ─────────────────────────────────────────────────
// Après réflexion interne sur les 5 axes pour tous les mots importants.
// Mots traités comme particules (pronoms/démonstratifs) : dhhy (al-ladhīna), alk (ʾulāʾika), lhm (lahum)

const VWA_ROWS = [
  // pos=3 : yashtarūna (shry, aid=871) — Forme VIII inaccompli actif 3ème pl.
  // [Réflexion interne] : axe lexical = verset entièrement commercial (ʿahd/price/qalīl) → Échange ✅
  // axe voisins = v75-76 parle de dépôts et d'engagements respectés → contraste délibéré
  // axe sourate = thème de la trahison des gens du Livre
  // axe coranique = même formule yashtarūna... thamanan qalīlan en 2:16, 2:41, 2:79 = troquent la vérité divine
  // axe khalifa = céder le pacte divin pour un gain dérisoire = trahison de la mission de justice
  // test grammatical = Forme VIII inaccompli actif → acte délibéré, actif, continu : compatible avec Échange/Transaction ✅
  {
    word_key: 'shry', position: 3, analysis_id: 871,
    analysis_axes: {
      sense_chosen: 'acheter',
      concept_chosen: 'Échange/Transaction',
      concepts: {
        'Échange/Transaction': {
          status: 'retenu',
          senses: ['acheter', 'vendre', 'échanger', 'marchander', 'troquer'],
          proof_ctx: "La Forme VIII ishtarā signifie acquérir en donnant quelque chose en échange — ici ils cèdent l'engagement divin et leurs serments pour obtenir un gain dérisoire. La formule yashtarūna bi-ʿahdi Allāh thamanan qalīlan est récurrente dans le Coran (2:16, 2:41, 2:79) pour désigner ceux qui troquent la vérité divine contre un avantage mondain. C'est l'unique sens compatible avec la construction grammaticale bi (instrument de l'échange) + accusatif (ce qu'on obtient).",
        },
        'Sacrifice/Don de soi': {
          status: 'peu_probable',
          senses: ['se vendre (sacrifier sa vie)'],
          proof_ctx: "Le sacrifice de soi (sens des Kharijites qui se 'vendaient' à Dieu) est un usage dérivé de la racine, mais il ne s'applique pas ici : le verset décrit un échange dans lequel on obtient un bien mondain, non un acte de dévotion. La construction bi-thamanan qalīlan (contre un prix infime) exclut un don de soi.",
        },
        'Disposition/Comportement': {
          status: 'nul',
          senses: ["manière d'agir", 'conduite', 'nature innée'],
          proof_ctx: "Sens nominal (une manière d'être) — incompatible avec un verbe à l'inaccompli actif qui décrit un acte en cours.",
        },
      },
    },
  },

  // pos=5 : ʿahdi (ehd, aid=425) — nom génitif en idāfa avec allāh
  {
    word_key: 'ehd', position: 5, analysis_id: 425,
    analysis_axes: {
      sense_chosen: 'engagement',
      concept_chosen: 'Engagement/Promesse',
      concepts: {
        'Engagement/Promesse': {
          status: 'retenu',
          senses: ['engagement', 'pacte', 'promesse', 'confier'],
          proof_ctx: "ʿAhd désigne l'acte de se lier par une parole ou un accord — un lien contractuel qui sort de celui qui s'engage et atteint celui envers qui on s'engage. ʿAhdi Allāh (idāfa = l'engagement de Dieu) désigne ce que Dieu a établi comme lien avec l'humain : une obligation réciproque. C'est ce lien précieux que les sujets du verset cèdent en échange d'un prix dérisoire.",
        },
        "Sens isolé/Époque": {
          status: 'nul',
          senses: ['époque'],
          proof_ctx: "Sens temporel — incompatible avec un bien qu'on échange dans une transaction.",
        },
        "Sens isolé/Rencontre": {
          status: 'nul',
          senses: ['rencontre'],
          proof_ctx: "Sens événementiel — incompatible avec un engagement qui peut être troqué.",
        },
      },
    },
  },

  // pos=6 : allāh (llh, aid=255) — convention Dieu
  {
    word_key: 'llh', position: 6, analysis_id: 255,
    analysis_axes: {
      sense_chosen: 'Dieu',
      concept_chosen: 'Divinité',
      concepts: {
        'Divinité': {
          status: 'retenu',
          senses: ['divinité', 'dieu', 'Dieu', 'théologie'],
          proof_ctx: "Allāh est le nom propre désignant Dieu — convention universelle dans cette traduction.",
        },
        'Adoration/Culte': {
          status: 'nul',
          senses: ['adorer', 'servir', 'se consacrer au culte'],
          proof_ctx: "Allāh est ici un nom propre au génitif, second terme de l'idāfa avec ʿahd — non un verbe d'adoration.",
        },
        'Confusion/Perplexité': { status: 'nul', senses: ['être confus'], proof_ctx: "Hors contexte." },
        'Asservissement': { status: 'nul', senses: ['réduire en esclavage'], proof_ctx: "Hors contexte." },
      },
    },
  },

  // pos=8 : aymānihim (ymn, aid=1028) — nom génitif pluriel + pronom hum
  {
    word_key: 'ymn', position: 8, analysis_id: 1028,
    analysis_axes: {
      sense_chosen: 'serment',
      concept_chosen: 'Droite/Serment',
      concepts: {
        'Droite/Serment': {
          status: 'retenu',
          senses: ['droite', 'serment', 'main droite'],
          proof_ctx: "Aymān (pluriel de yamīn = main droite) désigne les serments prononcés en levant la main droite. Coordonné avec ʿahdi Allāh par wa (et), aymānihim ajoute la dimension personnelle : non seulement l'engagement divin, mais aussi leurs propres serments sont troqués. C'est un durcissement de la condamnation — ils violent à la fois le pacte de Dieu et leurs propres paroles données.",
        },
        'Bénédiction/Prospérité': {
          status: 'nul',
          senses: ['être béni', 'prospérité'],
          proof_ctx: "Les serments ne sont pas des bénédictions — il s'agit d'engagements verbaux solennels, non d'états de prospérité.",
        },
        "Sens isolé/Yémen": { status: 'nul', senses: ['Yémen'], proof_ctx: "Sens géographique — hors contexte." },
      },
    },
  },

  // pos=9 : thamanan (thmn, aid=492) — nom accusatif singulier indéfini
  {
    word_key: 'thmn', position: 9, analysis_id: 492,
    analysis_axes: {
      sense_chosen: 'prix',
      concept_chosen: 'Valeur/Prix',
      concepts: {
        'Valeur/Prix': {
          status: 'retenu',
          senses: ['prix', 'valeur', 'acheter', 'vendre'],
          proof_ctx: "Thaman désigne ce qui est donné en échange d'une chose — la contrepartie. Ici c'est l'accusatif objet de yashtarūna (ce qu'ils obtiennent dans l'échange) : ils acquièrent ce prix en cédant le pacte. L'indéfini (thamanan = un prix) souligne le caractère quelconque, insignifiant de ce qu'ils reçoivent.",
        },
        'Nombre': {
          status: 'nul',
          senses: ['huit', 'huitième'],
          proof_ctx: "Sens numérique — hors contexte d'une transaction.",
        },
      },
    },
  },

  // pos=10 : qalīlan (qll, aid=493) — adjectif accusatif singulier indéfini
  {
    word_key: 'qll', position: 10, analysis_id: 493,
    analysis_axes: {
      sense_chosen: 'être peu',
      concept_chosen: 'Quantité/Rareté',
      concepts: {
        'Quantité/Rareté': {
          status: 'retenu',
          senses: ['être peu', 'diminuer', 'peu nombreux', 'rare'],
          proof_ctx: "Qalīlan (accusatif épithète de thamanan) qualifie le prix comme étant d'une quantité infime. Le contraste est au cœur du verset : ce qui est cédé (le pacte divin, les serments) est inestimable, ce qui est obtenu (thamanan qalīlan) est dérisoire. L'adjectif qalīl rend cet écart de valeur manifeste.",
        },
        "Sens isolé/Porter": {
          status: 'nul',
          senses: ['porter'],
          proof_ctx: "Sens physique de soulever une charge — incompatible avec un adjectif qualifiant un prix.",
        },
      },
    },
  },

  // pos=13 : khalāqa (xlq, aid=344) — ATTENTION : nom خَلَاق (portion), PAS verbe خَلَقَ (créer)
  // Le LLM a tagué pos="verbe" et tense="accompli" → ERREUR. C'est un nom dans la structure :
  // لَا (négation du genre) + خَلَاقَ (nom accusatif) + لَهُمْ = aucune portion pour eux.
  // Lane's broot=xlq, entrée id=19950 cite EXACTEMENT ce verset (3:77).
  {
    word_key: 'xlq', position: 13, analysis_id: 344,
    analysis_axes: {
      sense_chosen: 'portion',
      concept_chosen: 'Part/Portion méritée',
      concepts: {
        'Part/Portion méritée': {
          status: 'retenu',
          senses: ['portion', 'part', 'lot', 'part méritée'],
          proof_ctx: "Khalāq (خَلَاق, à distinguer du verbe خَلَقَ = créer) désigne une portion de bien méritée — d'après les sources étymologiques, 'a full, complete share of good and righteousness'. La structure lā khalāqa lahum (lā al-nafy li-l-jins + accusatif) nie absolument toute portion pour eux dans la vie à venir. Lane's cite ce verset précisément comme exemple de khalāq. Ce sens est incompatible avec Création/Production (qui serait absurde : 'aucune création pour eux') ou Nature/Caractère (qui ne peut pas être nié par cette construction).",
        },
        'Création/Production': {
          status: 'nul',
          senses: ['créer', 'création', 'créature', 'façonner', 'nature', 'caractère'],
          proof_ctx: "La structure lā khalāqa lahum fī l-ākhirah avec le sens 'créer' donnerait 'aucune création pour eux dans la vie à venir' — formulation absurde et non attestée. Ce n'est pas du tout le sens de khalāq ici.",
        },
        "Sens isolé/Lisse": { status: 'nul', senses: ['lisse'], proof_ctx: "Sens physique — hors contexte." },
        "Sens isolé/Mensonge": { status: 'nul', senses: ['mensonge'], proof_ctx: "Hors contexte." },
      },
    },
  },

  // pos=16 : al-ākhirah (akhr, aid=653) — nom féminin défini génitif
  {
    word_key: 'akhr', position: 16, analysis_id: 653,
    analysis_axes: {
      sense_chosen: 'la vie dernière',
      concept_chosen: 'Monde à venir/Vie dernière',
      concepts: {
        'Monde à venir/Vie dernière': {
          status: 'retenu',
          senses: ['al-ākhirah', 'la vie dernière'],
          proof_ctx: "Al-ākhirah (forme définie + féminine = la dernière [demeure]) est la désignation coranique de la vie après la mort. D'après les sources étymologiques, Lane's donne al-ākhirah comme abréviation de al-dār al-ākhirah = la demeure dernière. C'est le terme standard dans ce verset eschatologique : aucune part pour eux dans cette demeure finale.",
        },
        'Altérité/Délai': {
          status: 'peu_probable',
          senses: ['autre', 'dernier', 'retarder', 'au-delà'],
          proof_ctx: "La racine ʾ-kh-r signifie bien 'ce qui vient après' — mais al-ākhirah avec l'article défini et la forme féminine est une désignation coranique fixée pour la vie dernière, non un simple adjectif de postériorité.",
        },
        'Postériorité/Fin': {
          status: 'peu_probable',
          senses: ["fin d'une durée", 'arrière (d\'une chose)'],
          proof_ctx: "Sens de position temporelle ou spatiale — al-ākhirah dans ce contexte dépasse le sens de 'fin' pour désigner la demeure eschatologique.",
        },
        'Délai/Report': { status: 'nul', senses: ['différer', 'reculer', 'accorder un délai'], proof_ctx: "Sens verbal — incompatible avec un nom défini en idāfa." },
        'Autre/Alternative': { status: 'nul', senses: ['un parmi deux'], proof_ctx: "Sens de paire — hors contexte eschatologique." },
      },
    },
  },

  // pos=18 : yukallimuhumu (klm, aid=478) — Forme II inaccompli actif 3ème sg. + pronom hum
  {
    word_key: 'klm', position: 18, analysis_id: 478,
    analysis_axes: {
      sense_chosen: 'parler',
      concept_chosen: 'Parole/Discours',
      concepts: {
        'Parole/Discours': {
          status: 'retenu',
          senses: ['parler', 'parole', 'mot', 's\'adresser à', 'discours', 'expression'],
          proof_ctx: "La Forme II yukallimu = s'adresser directement à quelqu'un, lui parler — acte directionnel qui sort du locuteur et atteint le destinataire. La négation wa-lā yukallimuhumu Allāhu = Dieu ne leur adressera pas la parole au Jour de la Résurrection. C'est un refus de communication — non pas que Dieu ne puisse pas parler, mais qu'Il ne leur accordera pas ce dialogue.",
        },
        'Blessure': {
          status: 'nul',
          senses: ['blesser', 'blessure'],
          proof_ctx: "La Forme II yukallim signifie ici 's'adresser à', non 'blesser' (sens aussi attesté de la racine mais dans d'autres formes et contextes). Le texte dit 'ne leur parlera pas', non 'ne les blessera pas'.",
        },
      },
    },
  },

  // pos=20 : yanẓuru (nzr, aid=522) — Forme I inaccompli + ilā (vers eux)
  {
    word_key: 'nzr', position: 20, analysis_id: 522,
    analysis_axes: {
      sense_chosen: 'regarder',
      concept_chosen: 'Regard/Contemplation',
      concepts: {
        'Regard/Contemplation': {
          status: 'retenu',
          senses: ['regarder', 'voir', 'contempler', 'considérer'],
          proof_ctx: "Naẓara ilā = diriger le regard vers — acte directionnel. Le regard nié ici (wa-lā yanẓuru ilayhim) est le regard bienveillant, l'attention accordée à quelqu'un — non la perception (Dieu perçoit tout). D'après les sources étymologiques, naẓara ilā = regarder vers, poser les yeux sur. La construction + ilayhim (vers eux) confirme la direction du regard. Le texte ne dit pas que Dieu ne les 'verra' pas — il dit qu'il ne les 'regardera' pas.",
        },
        'Attente': {
          status: 'peu_probable',
          senses: ['attendre', 'délai'],
          proof_ctx: "Anẓara = accorder un délai (Forme IV) ou attendre — mais yanẓuru (Forme I + ilā) désigne spécifiquement l'acte de regarder vers quelque chose, non d'attendre. La préposition ilā (vers) exclut le sens d'attente.",
        },
      },
    },
  },

  // pos=22 : yawma (ywm, aid=257) — nom accusatif en idāfa avec al-qiyāmah
  {
    word_key: 'ywm', position: 22, analysis_id: 257,
    analysis_axes: {
      sense_chosen: 'jour',
      concept_chosen: 'Temps/Période',
      concepts: {
        'Temps/Période': {
          status: 'retenu',
          senses: ['jour', 'journée', 'temps', 'période'],
          proof_ctx: "Yawm = jour, unité temporelle. En idāfa avec al-qiyāmah (la résurrection), yawm désigne le jour précis de l'événement. Le sens premier et direct est 'jour'.",
        },
        'Événement/Moment marquant': {
          status: 'probable',
          senses: ['événement', 'bataille', 'jour de combat', 'jour marquant'],
          proof_ctx: "Yawm al-qiyāmah est effectivement un jour marquant par excellence dans le Coran — le Grand Jour. Mais ici yawm est le terme de temps en idāfa, et al-qiyāmah porte le sens de l'événement. Le mot yawm joue son rôle premier de repère temporel.",
        },
        "Sens isolé/Étape": { status: 'nul', senses: ['étape'], proof_ctx: "Hors contexte." },
        "Temps/Cycle": { status: 'nul', senses: ["distance d'un jour de marche"], proof_ctx: "Sens de distance — hors contexte." },
      },
    },
  },

  // pos=23 : al-qiyāmah (qwm, aid=263) — masdar féminin défini génitif
  // qāma = se lever → qiyāmah = le fait de se lever → la Résurrection (le Grand Lever)
  {
    word_key: 'qwm', position: 23, analysis_id: 263,
    analysis_axes: {
      sense_chosen: 'se lever',
      concept_chosen: 'Verticalité/Droiture',
      concepts: {
        'Verticalité/Droiture': {
          status: 'retenu',
          senses: ['se lever', 'se dresser', 'droit', 'rectitude', 'redresser', 'corriger', 'se tenir debout'],
          proof_ctx: "Al-qiyāmah est le masdar de qāma (se lever) — littéralement 'le fait de se lever'. La Résurrection est nommée ainsi car c'est le moment où tous se lèveront de leurs tombes. Le nom défini al-qiyāmah avec l'article désigne cette réalité connue et identifiable. L'étymologie (se lever, se dresser) donne directement 'la résurrection' comme extension — c'est le Grand Lever, le moment où les êtres se redressent après la mort.",
        },
        'Peuple/Communauté': { status: 'nul', senses: ['peuple', 'communauté', 'tribu', 'nation', 'groupe'], proof_ctx: "Al-qiyāmah est un masdar (action nominale) — non un nom de groupe." },
        'Gestion/Administration': { status: 'nul', senses: ['gérer', 'administrer', 'prendre en charge', 'diriger', 'veiller sur'], proof_ctx: "Sens actif de gestion — incompatible avec un nom d'événement eschatologique." },
        'Valeur/Mesure': { status: 'nul', senses: ['valeur', 'prix', 'estimation', 'stature', 'taille'], proof_ctx: "Hors contexte." },
        'Subsistance': { status: 'nul', senses: ['subsistance', 'nourriture', 'ce qui fait vivre'], proof_ctx: "Hors contexte." },
        "Lieu/Géographie": { status: 'nul', senses: ['lieu'], proof_ctx: "Hors contexte." },
        "Sens isolé/Résidence": { status: 'nul', senses: ['résidence'], proof_ctx: "Hors contexte." },
        "Sens isolé/Station": { status: 'nul', senses: ['station'], proof_ctx: "Hors contexte." },
      },
    },
  },

  // pos=25 : yuzakkīhim (zkw, aid=504) — Forme II inaccompli actif 3ème sg. + pronom hum
  {
    word_key: 'zkw', position: 25, analysis_id: 504,
    analysis_axes: {
      sense_chosen: 'purifier',
      concept_chosen: 'Purification/Croissance',
      concepts: {
        'Purification/Croissance': {
          status: 'retenu',
          senses: ['purifier', 'aumône légale', 'croître', 'être pur', 'prospérer'],
          proof_ctx: "La Forme II yuzakkī = purifier, rendre pur — acte actif et directionnel (Dieu purifie la personne). La négation wa-lā yuzakkīhim = Dieu ne les purifiera pas, ne les déclarera pas purs. Ce troisième refus divin clôt l'énumération des grâces refusées : pas de parole, pas de regard, pas de purification.",
        },
      },
    },
  },

  // pos=27 : ʿadhābun (edb, aid=314) — nom nominatif singulier indéfini
  {
    word_key: 'edb', position: 27, analysis_id: 314,
    analysis_axes: {
      sense_chosen: 'châtiment',
      concept_chosen: 'Châtiment/Punition',
      concepts: {
        'Châtiment/Punition': {
          status: 'retenu',
          senses: ['punir', 'châtier', 'tourmenter', 'châtiment'],
          proof_ctx: "ʿAdhāb désigne la souffrance infligée — acte extérieur qui atteint celui qui le reçoit. Le nom au nominatif indéfini (ʿadhābun) est le prédicat de la proposition nominale wa-lahum ʿadhābun alīmun. Le sens de Douceur (sens premier de la racine ʿ-dh-b = eau douce/agréable) est paradoxalement l'étymologie opposée — mais ʿadhāb comme terme de tourment est pleinement attesté dans les sources et n'est pas un sens post-islamique.",
        },
        'Douceur': {
          status: 'nul',
          senses: ['doux', 'sucré', 'eau douce', 'agréable'],
          proof_ctx: "Le sens premier de la racine (eau douce, agréable) est ici parfaitement opposé au contexte — le verset annonce un tourment, non une douceur.",
        },
        'Abstention': { status: 'nul', senses: ["s'abstenir", 'quitter'], proof_ctx: "Sens d'acte volontaire de renoncement — incompatible avec une sanction infligée." },
        "Eau/Liquide": { status: 'nul', senses: ["poussières flottant sur l'eau"], proof_ctx: "Sens physique isolé — hors contexte." },
        "Végétation/Plante": { status: 'nul', senses: ['arbre vénéneux'], proof_ctx: "Hors contexte." },
      },
    },
  },

  // pos=28 : ʾalīmun (alm, aid=315) — adjectif nominatif singulier indéfini
  {
    word_key: 'alm', position: 28, analysis_id: 315,
    analysis_axes: {
      sense_chosen: 'douloureux',
      concept_chosen: 'Douleur/Souffrance',
      concepts: {
        'Douleur/Souffrance': {
          status: 'retenu',
          senses: ['douleur', 'souffrir', 'faire souffrir', 'douloureux', 'affliger', 'blesser'],
          proof_ctx: "Alīm (forme faʿīl = intensité ou durabilité de la qualité) = qui cause beaucoup de douleur, profondément douloureux. Épithète de ʿadhāb : le tourment est qualifié d'une intensité de souffrance. La racine ʾ-l-m désigne la douleur physique ou morale.",
        },
      },
    },
  },
];

// ─── SEGMENTS display ─────────────────────────────────────────────────────
const SEGMENTS = [
  { position:1,  phon:'inna',          arabic:'إِنَّ',          fr:'En vérité,',         is_particle:true  },
  { position:2,  phon:'al-ladhīna',    arabic:'ٱلَّذِينَ',      fr:'ceux qui',            is_particle:true  },
  { position:3,  phon:'yashtarūna',    arabic:'يَشْتَرُونَ',    fr:'troquent',            word_key:'shry', is_particle:false, pos:'verbe',    sense_retenu:'acheter'         },
  { position:4,  phon:'bi',            arabic:'بِ',             fr:'avec',                is_particle:true  },
  { position:5,  phon:"ʿahdi",         arabic:'عَهْدِ',         fr:"l'engagement de",     word_key:'ehd',  is_particle:false, pos:'nom',      sense_retenu:'engagement'      },
  { position:6,  phon:'allāhi',        arabic:'ٱللَّهِ',        fr:'Dieu',                word_key:'llh',  is_particle:false, pos:'nom',      sense_retenu:'Dieu'            },
  { position:7,  phon:'wa',            arabic:'وَ',             fr:'et',                  is_particle:true  },
  { position:8,  phon:'aymānihim',     arabic:'أَيْمَـٰنِهِمْ', fr:'leurs serments',      word_key:'ymn',  is_particle:false, pos:'nom',      sense_retenu:'serment'         },
  { position:9,  phon:'thamanan',      arabic:'ثَمَنًا',        fr:'contre un prix',      word_key:'thmn', is_particle:false, pos:'nom',      sense_retenu:'prix'            },
  { position:10, phon:'qalīlan',       arabic:'قَلِيلًا',       fr:'infime',              word_key:'qll',  is_particle:false, pos:'adjectif', sense_retenu:'être peu'        },
  { position:11, phon:"ʾulāʾika",      arabic:'أُو۟لَـٰٓئِكَ', fr:'— ceux-là',           is_particle:true  },
  { position:12, phon:'lā',            arabic:'لَا',            fr:'aucune',              is_particle:true  },
  { position:13, phon:'khalāqa',       arabic:'خَلَـٰقَ',       fr:'part',                word_key:'xlq',  is_particle:false, pos:'nom',      sense_retenu:'portion'         },
  { position:14, phon:'lahum',         arabic:'لَهُمْ',         fr:'pour eux',            is_particle:true  },
  { position:15, phon:'fī',            arabic:'فِى',            fr:'dans',                is_particle:true  },
  { position:16, phon:'al-ākhirah',    arabic:'ٱلْـَٔاخِرَةِ', fr:'la vie à venir,',     word_key:'akhr', is_particle:false, pos:'nom',      sense_retenu:'la vie dernière' },
  { position:17, phon:'wa-lā',         arabic:'وَلَا',          fr:'et ne pas',           is_particle:true  },
  { position:18, phon:'yukallimuhumu', arabic:'يُكَلِّمُهُمُ',  fr:'leur parler,',        word_key:'klm',  is_particle:false, pos:'verbe',    sense_retenu:'parler'          },
  { position:19, phon:'allāhu',        arabic:'ٱللَّهُ',        fr:'— Dieu',              is_particle:true  },
  { position:20, phon:'yanẓuru',       arabic:'يَنظُرُ',        fr:'les regarder,',       word_key:'nzr',  is_particle:false, pos:'verbe',    sense_retenu:'regarder'        },
  { position:21, phon:'ilayhim',       arabic:'إِلَيْهِمْ',    fr:'vers eux,',           is_particle:true  },
  { position:22, phon:'yawma',         arabic:'يَوْمَ',         fr:'le jour de',          word_key:'ywm',  is_particle:false, pos:'nom',      sense_retenu:'jour'            },
  { position:23, phon:'al-qiyāmah',   arabic:'ٱلْقِيَـٰمَةِ', fr:'la résurrection,',    word_key:'qwm',  is_particle:false, pos:'nom',      sense_retenu:'se lever'        },
  { position:24, phon:'wa-lā',         arabic:'وَلَا',          fr:'et ne pas',           is_particle:true  },
  { position:25, phon:'yuzakkīhim',    arabic:'يُزَكِّيهِمْ',   fr:'les purifier,',       word_key:'zkw',  is_particle:false, pos:'verbe',    sense_retenu:'purifier'        },
  { position:26, phon:'wa-lahum',      arabic:'وَلَهُمْ',       fr:'et pour eux',         is_particle:true  },
  { position:27, phon:"ʿadhābun",      arabic:'عَذَابٌ',        fr:'un tourment',         word_key:'edb',  is_particle:false, pos:'nom',      sense_retenu:'châtiment'       },
  { position:28, phon:"ʾalīmun",       arabic:'أَلِيمٌ',        fr:'douloureux.',         word_key:'alm',  is_particle:false, pos:'adjectif', sense_retenu:'douloureux'      },
];

// ─── TRADUCTION ──────────────────────────────────────────────────────────
const TRANSLATION_ARAB = 'إِنَّ ٱلَّذِينَ يَشْتَرُونَ بِعَهْدِ ٱللَّهِ وَأَيْمَـٰنِهِمْ ثَمَنًا قَلِيلًا أُو۟لَـٰٓئِكَ لَا خَلَـٰقَ لَهُمْ فِى ٱلْـَٔاخِرَةِ وَلَا يُكَلِّمُهُمُ ٱللَّهُ وَلَا يَنظُرُ إِلَيْهِمْ يَوْمَ ٱلْقِيَـٰمَةِ وَلَا يُزَكِّيهِمْ وَلَهُمْ عَذَابٌ أَلِيمٌ';

const NOTRE_TRADUCTION = 'En vérité, ceux qui troquent l\'engagement de Dieu et leurs serments contre un prix infime — pour eux aucune part dans la vie à venir, et Dieu ne leur parlera pas, ne les regardera pas au jour de la résurrection, ne les purifiera pas — et pour eux un tourment douloureux.';

const HAMIDULLAH = 'Ceux qui vendent l\'alliance d\'Allah et leurs serments à vil prix, ceux-là n\'auront aucune part dans l\'au-delà ; Allah ne leur adressera pas la parole, ne les regardera pas au Jour de la Résurrection, et ne les purifiera point. Et ils auront un châtiment douloureux.';

// ─── DÉMARCHE / JUSTIFICATION / CRITIQUE ─────────────────────────────────
const TRANSLATION_EXPLANATION = `§DEMARCHE§
Ce verset fait suite au verset 76 qui louait ceux qui respectent leurs engagements et craignent Dieu. Par un renversement symétrique, le verset 77 dresse le portrait inverse — ceux qui troquent ce même engagement divin contre un gain mondain dérisoire — et annonce quatre conséquences dans la vie à venir : aucune part, pas de parole de Dieu, pas de regard de Dieu, pas de purification.

**inna** (en vérité) est une particule d'affirmation et de mise en relief. Elle place ce qui suit sous le signe de la certitude absolue. Al-ladhīna (ceux qui) est le pronom relatif masculin pluriel, sujet de la phrase — il passe à l'accusatif après inna. La structure inna al-ladhīna = « certes, ceux qui… » introduit une sentence solennelle.

**yashtarūna** (ils troquent) est un verbe de la racine sh-r-y à la Forme VIII (la Forme VIII ajoute un ta après la première consonne radicale — ish-ta-ra — et exprime l'acte d'acquérir de manière active et délibérée), à l'inaccompli actif, troisième personne du masculin pluriel. D'après les sources étymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la racine sh-r-y signifie à la fois vendre et acheter — les deux faces d'une même transaction. La Forme VIII ishtarā particularise le sens d'« acquérir en échange de ». La construction bi-ʿahdi Allāhi (avec l'engagement de Dieu) + thamanan qalīlan (un prix infime) : ils acquièrent un prix dérisoire en cédant le pacte divin — un échange inégal. On traduit par « troquent ».

**ʿahdi** (l'engagement de) est un nom de la racine ʿ-h-d, masculin singulier génitif, en état construit (idāfa) avec allāhi. D'après les sources étymologiques, ʿahd = un engagement, un pacte, une parole donnée — acte de se lier envers quelqu'un. ʿAhdi Allāhi = l'engagement de Dieu, ce que Dieu a établi comme lien avec l'humain. C'est ce lien précieux que les sujets du verset cèdent. On traduit par « l'engagement de ».

**aymānihim** (leurs serments) est un nom de la racine y-m-n, masculin pluriel génitif, avec le pronom suffixe -him (leur). La racine y-m-n désigne la droite — la main droite — et par extension le serment prononcé en levant la main droite. D'après les sources étymologiques, yamīn = la main droite ; au pluriel aymān = les serments solennels. Coordonné avec ʿahdi Allāhi par wa (et) : deux biens sacrés sont simultanément troqués — le pacte divin et les serments personnels. On traduit par « leurs serments ».

**thamanan** (un prix) est un nom de la racine th-m-n, masculin singulier accusatif indéfini. D'après les sources étymologiques, thaman = ce qui est donné en échange d'une chose, la contrepartie. C'est l'objet de yashtarūna — ce qu'ils obtiennent dans l'échange. L'indéfini (thamanan = un prix quelconque) souligne l'insignifiance de ce qu'ils reçoivent. On traduit par « un prix ».

**qalīlan** (infime) est un adjectif de la racine q-l-l, masculin singulier accusatif indéfini, épithète de thamanan. D'après les sources étymologiques, qalīl = qui est en petite quantité, peu abondant. Accolé à thaman, il qualifie le prix comme dérisoire face à ce qui est cédé. On traduit par « infime ».

**lā khalāqa lahum** (aucune part pour eux) : lā est ici la particule de négation absolue du genre (elle nie l'existence même de la chose, sans exception). **Khalāqa** est un nom de la racine kh-l-q, masculin singulier accusatif — à distinguer du verbe خَلَقَ (créer). D'après les sources étymologiques, khalāq (خَلَاق) signifie : une part, une portion de bien ; plus précisément, une portion complète et pleine de bien et de droiture. Lane's cite exactement cette construction : « lā khalāqa lahu fī l-ākhirah = il n'y a aucune part [de bien] pour lui dans la vie dernière » et référence ce verset (3:77). La structure lā + khalāqa (accusatif) + lahum (complément) nie absolument toute portion pour eux dans la vie à venir. On traduit par « aucune part ».

**al-ākhirah** (la vie à venir) est un nom de la racine ʾ-kh-r, féminin singulier génitif défini. La racine ʾ-kh-r désigne ce qui vient après, ce qui est le dernier. Al-ākhirah (avec l'article défini + forme féminine) est la désignation coranique de la vie après la mort — abréviation de al-dār al-ākhirah (la demeure dernière). D'après les sources étymologiques. On traduit par « la vie à venir ».

**wa-lā yukallimuhumu allāhu** (et Dieu ne leur parlera pas) : **yukallimuhumu** est un verbe de la racine k-l-m à la Forme II (une forme qui exprime l'adresse directe, parler à quelqu'un), à l'inaccompli actif, troisième personne du masculin singulier, avec le pronom suffixe accusatif -humu (eux). La Forme II yukallimu = s'adresser directement à quelqu'un. Nié par wa-lā : refus du dialogue divin. D'après les sources étymologiques, la racine k-l-m désigne la parole, le mot, le discours. On traduit par « ne leur parlera pas ».

**wa-lā yanẓuru ilayhim** (et ne les regardera pas) : **yanẓuru** est un verbe de la racine n-ẓ-r à la Forme I, inaccompli actif, troisième personne du masculin singulier. Construit avec ilā + ilayhim (vers eux). D'après les sources étymologiques, naẓara ilā = diriger le regard vers, regarder. Le regard nié ici n'est pas la perception (Dieu perçoit tout) mais le regard d'attention bienveillante accordée à quelqu'un. On traduit par « ne les regardera pas ».

**yawma** (le jour de) est un nom de la racine y-w-m, masculin singulier accusatif (complément circonstanciel de temps), en idāfa avec al-qiyāmah. D'après les sources étymologiques, yawm = jour, journée. On traduit par « le jour de ».

**al-qiyāmah** (la résurrection) est un nom verbal (masdar) de la racine q-w-m, féminin singulier génitif défini. Le masdar qiyāmah = le fait de se lever, l'action de se dresser. D'après les sources étymologiques, qāma = se lever, se dresser. Al-qiyāmah désigne le Grand Lever — le moment où tous les êtres se lèveront de leurs tombes. La Résurrection est étymologiquement « le fait que tous se lèvent ». On traduit par « la résurrection ».

**wa-lā yuzakkīhim** (et ne les purifiera pas) : **yuzakkīhim** est un verbe de la racine z-k-w à la Forme II (zakka = purifier, rendre pur, faire croître), inaccompli actif, troisième personne du masculin singulier, avec le pronom suffixe -him (eux). La Forme II yuzakkī = il purifie, il rend pur — acte actif et directionnel. La négation : Dieu ne les purifiera pas, ne les déclarera pas purs. D'après les sources étymologiques, zakā = être pur, croître ; zakka (Forme II) = purifier. On traduit par « ne les purifiera pas ».

**ʿadhābun** (un tourment) est un nom de la racine ʿ-dh-b, masculin singulier nominatif indéfini. D'après les sources étymologiques, ʿadhāb = tourment, châtiment — acte d'infliger une souffrance. Le sens premier de la racine est paradoxalement « doux/agréable » (eau douce) — ʿadhāb comme châtiment est l'extension opposée, celle qui fait mal au lieu d'être agréable. On traduit par « un tourment ».

**ʾalīmun** (douloureux) est un adjectif de la racine ʾ-l-m, masculin singulier nominatif indéfini, épithète de ʿadhāb. D'après les sources étymologiques, alīm (forme faʿīl exprimant l'intensité) = qui cause beaucoup de douleur, profondément douloureux. On traduit par « douloureux ».

§JUSTIFICATION§
**troquent** — Le sens retenu est « Échange/Transaction » de la racine sh-r-y. Le mot « troquent » est choisi car il rend l'échange inégal au cœur du verset : quelque chose de précieux (le pacte divin, les serments) est cédé pour quelque chose de peu de valeur (un prix infime). « Achètent » est écarté car il met l'accent sur l'acquisition sans rendre l'inégalité de l'échange. « Vendent » est écarté car la Forme VIII ishtarā spécifie l'acte d'acquérir, non de céder (Hamidullah a inversé la direction). « Échangent » est possible mais neutre — « troquent » porte la connotation de l'échange peu avantageux.

**l'engagement de Dieu** — Le sens retenu est « Engagement/Promesse » de la racine ʿ-h-d. Le mot « engagement » est choisi car ʿahd désigne un lien contracté par une parole — quelque chose d'actif, de contractuel. « Pacte » est proche mais souligne davantage la dimension bilatérale formelle. « Alliance » est écarté car il implique une symétrie entre égaux, alors que ʿahd Allāh est un engagement établi par Dieu. « Engagement » rend le mieux la dimension d'obligation personnelle que l'on trahit.

**leurs serments** — Le sens retenu est « Droite/Serment » de la racine y-m-n. « Serments » est choisi car aymān (pluriel de yamīn = main droite → serment) désigne les engagements solennels. L'alternative « leurs droites » (sens littéral) est écartée car le contexte est celui d'engagements verbaux trahis, non d'une référence anatomique.

**un prix infime** — « prix » : Le sens retenu est « Valeur/Prix » de la racine th-m-n. Thaman = contrepartie reçue dans un échange. « Valeur » est écarté car il implique une qualité intrinsèque ; « contrepartie » est trop juridique. — « infime » : Le sens retenu est « Quantité/Rareté » de la racine q-l-l. Qalīl = peu, rare. « Infime » rend l'insignifiance absolue du prix face à ce qui est cédé. « Dérisoire » serait possible mais « infime » insiste davantage sur la petitesse quantitative.

**aucune part** — Le sens retenu est « Part/Portion méritée » de la racine kh-l-q (sens khalāq). Le mot « part » est choisi car khalāq désigne une portion de bien qui revient à quelqu'un — une attribution. « Portion » est synonyme correct. « Lot » possible. « Part » est préféré pour son naturel en français courant.

**la vie à venir** — Le sens retenu est « Monde à venir/Vie dernière » de la racine ʾ-kh-r. « La vie à venir » est choisi car al-ākhirah (la dernière [demeure]) désigne ce qui vient après cette vie. « L'au-delà » est plus vague. « La vie éternelle » est écarté car elle implique l'éternité que le texte ne mentionne pas.

**ne leur parlera pas** — Le sens retenu est « Parole/Discours » de la racine k-l-m (Forme II). « Parler » est choisi car yukallim = s'adresser directement à quelqu'un. « Communiquer avec » est trop large.

**ne les regardera pas** — Le sens retenu est « Regard/Contemplation » de la racine n-ẓ-r. « Regarder » est choisi car naẓara ilā = diriger le regard vers. « Voir » est écarté : le refus ici n'est pas perceptif mais de bienveillance. « Considérer » est trop abstrait.

**le jour de la résurrection** — « jour » : sens direct de yawm. « La résurrection » : Le sens retenu est « Verticalité/Droiture » de la racine q-w-m. Al-qiyāmah = le fait de se lever → la Résurrection. « Le Jugement » est écarté car le texte nomme al-qiyāmah (le Grand Lever), non al-ḥisāb (le Compte).

**ne les purifiera pas** — Le sens retenu est « Purification/Croissance » de la racine z-k-w. « Purifier » rend l'acte actif et directionnel de zakka (Forme II). « Faire croître » est écarté car dans ce contexte de condamnation morale, c'est la purification (déclaration de pureté) qui est niée, non la croissance matérielle.

**un tourment douloureux** — « tourment » : Le sens retenu est « Châtiment/Punition » de la racine ʿ-dh-b. « Tourment » rend la souffrance infligée sans présupposer la finalité corrective. « Châtiment » est possible mais implique une logique punitive plus explicite. — « douloureux » : Le sens retenu est « Douleur/Souffrance » de la racine ʾ-l-m. Alīm = qui cause beaucoup de douleur (forme faʿīl d'intensité). Aucune alternative pertinente.

§CRITIQUE§
**troquent vs « vendent »** : Hamidullah traduit yashtarūna par « vendent ». C'est une erreur de direction : la Forme VIII ishtarā signifie spécifiquement acquérir/acheter — non vendre. Ce sont eux qui obtiennent un prix infime en cédant le pacte. La confusion vient de l'ambiguïté réelle de la racine sh-r-y (qui désigne les deux faces de la transaction), mais la Forme VIII particularise le sens d'acquisition. Hamidullah a inversé les termes, ce qui change le sens : « ils vendent l'alliance » suggère qu'ils cèdent délibérément pour de l'argent, alors que « ils troquent » rend mieux l'échange inégal dans lequel ils perdent le précieux pour le dérisoire. Certains traducteurs (Blachère) utilisent « achètent » — techniquement plus proche de la Forme VIII, mais « troquent » rend mieux le caractère inégal.

**aucune part vs « aucune part »** : Sur khalāqa, les traductions françaises donnent généralement « aucune part » (Hamidullah, Blachère, Berque) — ce qui correspond au sens de khalāq. La vraie différence est que certains exégètes ont interprété khalāq comme « aucun rang / aucune dignité » plutôt que « aucune portion de bien » — interprétation exégétique qui va au-delà de l'étymologie. Notre traduction « aucune part » reste fidèle au sens attesté du Lane's sans ajout interprétatif.

**la vie à venir vs « l'au-delà »** : Hamidullah traduit al-ākhirah par « l'au-delà ». Notre traduction donne « la vie à venir ». La nuance : « l'au-delà » est une expression française qui désigne vaguement ce qui est après la mort, sans rendre l'étymologie de ʾ-kh-r (ce qui vient après, la suite de cette vie). « La vie à venir » est plus proche de l'étymologie et souligne la continuité (une vie qui succède à celle-ci) plutôt que le franchissement d'une frontière. Le sens global du verset ne change pas fondamentalement.

**le tourment vs « le châtiment »** : Hamidullah traduit ʿadhābun alīmun par « un châtiment douloureux ». Notre traduction donne « un tourment douloureux ». La nuance : « châtiment » implique une logique de punition méritée avec une finalité corrective, alors que ʿadhāb désigne la souffrance infligée sans préciser cette finalité. « Tourment » rend mieux la réalité brute de la souffrance. Cela change légèrement le registre : « châtiment » est juridique, « tourment » est phénoménologique. Le Lane's donne punir, châtier, tourmenter — les deux traductions sont défendables, mais « tourment » est plus étymologiquement neutre.`;

// ─── MAIN ────────────────────────────────────────────────────────────────
async function run() {
  console.log('=== Pipeline S3:V77 ===\n');

  // 1. Enrichissement shry
  console.log('--- Étape 2a : enrichissement shry (aid=871) ---');
  const { error: e1 } = await db.from('word_meanings').insert(SHRY_NEW_SENSES);
  if (e1) console.error('shry insert error:', e1.message);
  else console.log('  ✓ 5 nouveaux sens shry insérés');
  await db.from('word_analyses').update({ analysis_step: 'etymology' }).eq('id', 871);
  console.log('  ✓ shry → analysis_step = etymology');

  // 2. Enrichissement xlq
  console.log('--- Étape 2b : enrichissement xlq khalāq (aid=344) ---');
  const { error: e2 } = await db.from('word_meanings').insert(XLQ_NEW_SENSES);
  if (e2) console.error('xlq insert error:', e2.message);
  else console.log('  ✓ 4 nouveaux sens xlq (Part/Portion méritée) insérés');

  // 3. Phrases du quotidien — qll (aid=493, daily=0)
  console.log('--- Étape 2c : word_daily qll (aid=493) ---');
  const { error: e3 } = await db.from('word_daily').insert(QLL_DAILY);
  if (e3) console.error('word_daily qll error:', e3.message);
  else console.log('  ✓ 3 phrases word_daily qll insérées');

  // 4. VWA
  console.log('\n--- Étape 3 : VWA (15 entrées) ---');
  for (const row of VWA_ROWS) {
    const { error } = await db.from('verse_word_analyses').upsert(
      { verse_id: VERSE_ID, ...row, analysis_axes: JSON.stringify(row.analysis_axes) },
      { onConflict: 'verse_id,position' }
    );
    if (error) console.error(`  ✗ pos=${row.position} ${row.word_key}: ${error.message}`);
    else console.log(`  ✓ pos=${row.position} ${row.word_key} [${row.analysis_axes.concept_chosen}] "${row.analysis_axes.sense_chosen}"`);
  }

  // 5. verse_analyses
  console.log('\n--- Étape 4 : verse_analyses ---');
  const { error: eUpd } = await db.from('verse_analyses').update({
    segments: SEGMENTS,
    translation_arab: NOTRE_TRADUCTION,
    full_translation: HAMIDULLAH,
    translation_explanation: TRANSLATION_EXPLANATION,
  }).eq('id', VA_ID);
  if (eUpd) console.error('verse_analyses update error:', eUpd.message);
  else console.log('  ✓ segments, translation_arab, full_translation, translation_explanation mis à jour');

  // 6. Vérification
  console.log('\n--- Vérification ---');
  const { count: vwaCount } = await db.from('verse_word_analyses').select('id', { count: 'exact', head: true }).eq('verse_id', VERSE_ID);
  console.log(`  VWA count pour verse_id=${VERSE_ID}: ${vwaCount}`);
  const { count: shryCount } = await db.from('word_meanings').select('id', { count: 'exact', head: true }).eq('analysis_id', 871);
  console.log(`  Sens shry (871): ${shryCount}`);
  const { count: xlqCount } = await db.from('word_meanings').select('id', { count: 'exact', head: true }).eq('analysis_id', 344);
  console.log(`  Sens xlq (344): ${xlqCount}`);
  const { count: qllDaily } = await db.from('word_daily').select('id', { count: 'exact', head: true }).eq('analysis_id', 493);
  console.log(`  word_daily qll (493): ${qllDaily}`);

  console.log('\n=== Pipeline S3:V77 terminé ===');
}

run().catch(console.error);
