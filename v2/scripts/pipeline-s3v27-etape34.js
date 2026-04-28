const {createClient} = require('@supabase/supabase-js');
const db = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

const VERSE_ID = 320;

async function getSenses(wordKey) {
  const {data:wa} = await db.from('word_analyses').select('id').eq('word_key', wordKey).maybeSingle();
  if (!wa) return {};
  const {data:senses} = await db.from('word_meanings').select('concept,sense').eq('analysis_id', wa.id).order('display_order');
  const byC = {};
  senses.forEach(s => { if(!byC[s.concept]) byC[s.concept]=[]; byC[s.concept].push(s.sense); });
  return byC;
}

async function run() {
  console.log('=== PIPELINE S3:V27 — ÉTAPES 3+4 ===\n');

  // =============================================
  // ÉTAPE 3 — Lire les sens depuis la BDD
  // =============================================
  const wljS = await getSenses('wlj');
  const xrjS = await getSenses('xrj');
  const rzqS = await getSenses('rzq');
  const shyS = await getSenses('shy');
  const ghyrS = await getSenses('ghyr');
  const hsbS = await getSenses('hsb');

  // =============================================
  // ÉTAPE 3 — Construire analysis_axes pour chaque mot
  // =============================================

  // 1. WLJ — tūliju (pos=1, forme IV inaccompli)
  // Réflexion interne 5 axes :
  // Axe 1 (champ lexical) : le verset parle de cycles cosmiques (nuit→jour, vivant→mort). "Faire entrer" capture le mouvement d'un état qui envahit l'autre.
  // Axe 2 (versets voisins) : V26 a établi la souveraineté absolue de Dieu. V27 détaille les manifestations concrètes de cette souveraineté.
  // Axe 3 (thème sourate) : sourate 3 traite de la vérité, de la puissance divine et de la guidance.
  // Axe 4 (cohérence coranique) : yūliju l-layla fī n-nahār apparaît en 22:61, 31:29, 35:13, 57:6 — toujours pour les cycles cosmiques.
  // Axe 5 (khalifa) : comprendre les cycles cosmiques aide l'être humain à situer sa mission dans l'ordre naturel.
  // Test grammatical : forme IV (causatif) + inaccompli + nuit/jour comme objets.
  //   - Entrée/Pénétration : "faire entrer la nuit dans le jour" ✅ naturel, progressif
  //   - Abri/Refuge : "faire abriter la nuit" ❌ absurde
  //   - Intrusion/Infiltration : "faire s'introduire la nuit" ❌ connotation négative injustifiée
  //   - Maladie/Douleur : ❌ hors sujet
  //   - Lieu d'entrée : ❌ hors sujet
  const wljAxes = {
    sense_chosen: 'faire entrer',
    concept_chosen: 'Entrée/Pénétration',
    concepts: {
      'Entrée/Pénétration': {
        status: 'retenu',
        senses: wljS['Entrée/Pénétration'],
        proof_ctx: "Le verbe tūliju (forme IV, inaccompli) transforme le mouvement d'entrée en acte causatif : Dieu fait entrer la nuit dans le jour et le jour dans la nuit. Le Lane's cite spécifiquement ce verset comme exemple de la forme IV de w-l-j. Le sens d'entrée progressive — un état qui envahit l'autre graduellement — correspond exactement au phénomène décrit : le passage continu et cyclique entre la nuit et le jour."
      },
      'Abri/Refuge': {
        status: 'nul',
        senses: wljS['Abri/Refuge'],
        proof_ctx: "Aucun rapport avec un abri ou un refuge dans ce verset — il s'agit de faire entrer, pas de se réfugier."
      },
      'Intrusion/Infiltration': {
        status: 'nul',
        senses: wljS['Intrusion/Infiltration'],
        proof_ctx: "L'intrusion implique une entrée non légitime. Ici l'entrée de la nuit dans le jour est un acte divin souverain, pas une infiltration."
      },
      'Maladie/Douleur': {
        status: 'nul',
        senses: wljS['Maladie/Douleur'],
        proof_ctx: "Sans rapport avec la maladie."
      },
      "Lieu d'entrée": {
        status: 'nul',
        senses: wljS["Lieu d'entrée"],
        proof_ctx: "Il s'agit de l'acte de faire entrer, pas du lieu où l'on entre."
      }
    }
  };

  // 2. XRJ — tukh'riju (pos=11, forme IV inaccompli)
  // Réflexion interne 5 axes :
  // Axe 1 : le verset passe des cycles temporels (nuit/jour) aux cycles vitaux (vivant/mort). "Faire sortir" est le mouvement inverse de "faire entrer".
  // Axe 2 : V26 énumère 4 actes souverains (donner, retirer, renforcer, abaisser). V27 en ajoute 4 autres (faire entrer, faire sortir, pourvoir).
  // Axe 3 : manifestation concrète de la souveraineté divine sur la vie et la mort.
  // Axe 4 : tukhrigu l-ḥayya mina l-mayyiti apparaît en 3:27, 6:95, 10:31, 30:19.
  // Axe 5 : comprendre que la vie sort de la mort et inversement aide l'être humain à ne pas craindre les cycles.
  // Test grammatical : forme IV (causatif) + vivant/mort comme objets.
  //   - Sortie/Émergence : "faire sortir le vivant du mort" ✅ naturel et clair
  //   - Tribut/Revenu : ❌ hors sujet
  //   - Sens isolé/Résoudre : ❌ hors sujet
  const xrjAxes = {
    sense_chosen: 'faire sortir',
    concept_chosen: 'Sortie/Émergence',
    concepts: {
      'Sortie/Émergence': {
        status: 'retenu',
        senses: xrjS['Sortie/Émergence'],
        proof_ctx: "Le verbe tukhrigu (forme IV, inaccompli) transforme la sortie en acte causatif : Dieu fait sortir le vivant du mort et le mort du vivant. Le parallélisme avec tūliju (faire entrer) crée une paire d'opposés : faire entrer et faire sortir. Le sens de sortie-émergence capture exactement le mouvement décrit — une chose qui était à l'intérieur d'une autre est amenée au dehors par un acte divin."
      },
      'Tribut/Revenu': {
        status: 'nul',
        senses: xrjS['Tribut/Revenu'],
        proof_ctx: "Aucun rapport avec l'impôt ou le revenu dans ce verset."
      },
      'Sens isolé/Résoudre': {
        status: 'nul',
        senses: xrjS['Sens isolé/Résoudre'],
        proof_ctx: "Sans rapport avec la résolution d'un problème."
      }
    }
  };

  // 3. RZQ — tarzuqu (pos=21, forme I inaccompli)
  // Réflexion interne 5 axes :
  // Axe 1 : après les cycles cosmiques et vitaux, le verset passe à la provision. La souveraineté s'étend aux moyens de vivre.
  // Axe 2 : V26 conclut par "capable de toute chose". V27 détaille cette capacité dans la provision sans mesure.
  // Axe 3 : la sourate affirme que Dieu est la source de tout — pouvoir, vie, subsistance.
  // Axe 4 : le rizq est un thème coranique majeur (123 occurrences). Toujours lié à la subsistance donnée par Dieu.
  // Axe 5 : comprendre que la subsistance vient de Dieu sans limite aide l'être humain à se concentrer sur sa mission.
  // Test grammatical : forme I + inaccompli + man tashāʾu (qui Tu veux).
  //   - Subsistance/Provision : "Tu pourvois qui Tu veux" ✅ naturel
  //   - Sens isolé/Gratitude : ❌ hors sujet
  const rzqAxes = {
    sense_chosen: 'pourvoir',
    concept_chosen: 'Subsistance/Provision',
    concepts: {
      'Subsistance/Provision': {
        status: 'retenu',
        senses: rzqS['Subsistance/Provision'],
        proof_ctx: "Le verbe tarzuqu (forme I, inaccompli) exprime l'acte continu et habituel d'accorder la subsistance. Après les cycles cosmiques (nuit/jour) et vitaux (vivant/mort), le verset étend la souveraineté divine aux moyens de vivre. Le Lane's donne razaqa : « il a pourvu, il a donné la subsistance ». La provision ici est sans mesure (bi-ghayri ḥisāb), ce qui souligne son caractère illimité."
      },
      'Sens isolé/Gratitude': {
        status: 'nul',
        senses: rzqS['Sens isolé/Gratitude'],
        proof_ctx: "Aucune gratitude n'est exprimée ici — c'est Dieu qui pourvoit, pas qui remercie."
      }
    }
  };

  // 4. SHY — tashāʾu (pos=23, forme I inaccompli)
  // Même usage que dans V26 — volonté divine libre.
  // Test grammatical : "Tu veux" — inaccompli, volonté en cours ✅
  const shyAxes = {
    sense_chosen: 'vouloir',
    concept_chosen: 'Volonté',
    concepts: {
      'Volonté': {
        status: 'retenu',
        senses: shyS['Volonté'],
        proof_ctx: "Le verbe tashāʾu (inaccompli, 2e personne) exprime la volonté divine libre. Comme dans le verset 26 qui répète quatre fois « qui Tu veux », le verset 27 rappelle que la provision est liée à la volonté de Dieu — sans condition extérieure ni contrainte."
      },
      'Chose/Être': {
        status: 'nul',
        senses: shyS['Chose/Être'],
        proof_ctx: "Le verbe tashāʾu est conjugué — c'est l'acte de vouloir, pas la chose."
      },
      'Néant': {
        status: 'nul',
        senses: shyS['Néant'],
        proof_ctx: "Aucun rapport avec le néant."
      },
      'Incitation/Contrainte': {
        status: 'nul',
        senses: shyS['Incitation/Contrainte'],
        proof_ctx: "La forme I exprime la volonté propre, pas l'incitation d'un autre."
      },
      'Difformité/Laideur': {
        status: 'nul',
        senses: shyS['Difformité/Laideur'],
        proof_ctx: "Sans rapport."
      },
      'Apaisement': {
        status: 'nul',
        senses: shyS['Apaisement'],
        proof_ctx: "Sans rapport."
      }
    }
  };

  // 5. GHYR — ghayri (pos=25, nom au génitif)
  // Réflexion interne 5 axes :
  // Axe 1 : "sans compte" renforce le caractère illimité de la provision divine.
  // Axe 2 : V26 conclut par « capable de toute chose ». V27 ajoute « sans compte » — la capacité est non seulement totale mais sans mesure.
  // Axe 3 : la sourate affirme la générosité divine illimitée.
  // Axe 4 : bi-ghayri ḥisāb apparaît en 2:212, 3:27, 3:37, 24:38, 38:39, 39:10 — toujours pour la provision sans mesure.
  // Axe 5 : savoir que la provision est sans mesure libère l'être humain de l'angoisse matérielle.
  // Test grammatical : nom au génitif après bi (préposition), en idāfa avec ḥisāb.
  //   - Autre/Exclusion : bi-ghayri = "sans" ✅ naturel
  //   - Changement/Altération : ❌ aucun changement ici
  //   - Jalousie/Protection : ❌ hors sujet
  //   - Provision/Subsistance : ❌ hors sujet
  //   - autres : ❌
  const ghyrAxes = {
    sense_chosen: 'sans',
    concept_chosen: 'Autre/Exclusion',
    concepts: {
      'Autre/Exclusion': {
        status: 'retenu',
        senses: ghyrS['Autre/Exclusion'],
        proof_ctx: "Le nom ghayri au génitif, précédé de la préposition bi, forme la locution bi-ghayri qui signifie « sans, en l'absence de ». Dans bi-ghayri ḥisābin (sans compte), il indique l'absence totale de calcul ou de mesure. La provision divine n'est pas comptée, pas limitée, pas mesurée."
      },
      'Changement/Altération': {
        status: 'nul',
        senses: ghyrS['Changement/Altération'],
        proof_ctx: "Aucun changement ou transformation n'est exprimé ici — ghayri est utilisé pour l'exclusion."
      },
      'Jalousie/Protection': {
        status: 'nul',
        senses: ghyrS['Jalousie/Protection'],
        proof_ctx: "Sans rapport avec la jalousie."
      },
      'Provision/Subsistance': {
        status: 'nul',
        senses: ghyrS['Provision/Subsistance'],
        proof_ctx: "La provision est portée par tarzuqu (racine r-z-q), pas par ghayri."
      },
      'Sens isolé/Mensonge': {
        status: 'nul',
        senses: ghyrS['Sens isolé/Mensonge'],
        proof_ctx: "Sans rapport."
      },
      'Lieu/Géographie': {
        status: 'nul',
        senses: ghyrS['Lieu/Géographie'],
        proof_ctx: "Sans rapport."
      },
      'Corps/Anatomie': {
        status: 'nul',
        senses: ghyrS['Corps/Anatomie'],
        proof_ctx: "Sans rapport."
      },
      'Sens isolé/Badge': {
        status: 'nul',
        senses: ghyrS['Sens isolé/Badge'],
        proof_ctx: "Sans rapport."
      }
    }
  };

  // 6. HSB — ḥisābin (pos=26, nom indéfini au génitif)
  // Réflexion interne 5 axes :
  // Axe 1 : "sans compte" = provision non mesurée, non limitée — clôture le verset.
  // Axe 2 : après V26 "capable de toute chose", V27 affirme que cette capacité s'exerce sans mesure.
  // Axe 3 : la générosité divine est un thème central de cette sourate.
  // Axe 4 : ḥisāb apparaît ~40 fois dans le Coran, souvent pour le "compte" du Jour du Jugement. Ici c'est l'absence de compte.
  // Axe 5 : comprendre que la provision divine est sans compte encourage la confiance et la sérénité.
  // Test grammatical : nom indéfini au génitif (en idāfa avec ghayri).
  //   - Calcul/Évaluation : "sans compte" ✅ naturel
  //   - Suffisance : "sans suffisance" ❌ ne fait pas sens
  //   - Sens isolé/Noblesse : ❌ hors sujet
  const hsbAxes = {
    sense_chosen: 'compte',
    concept_chosen: 'Calcul/Évaluation',
    concepts: {
      'Calcul/Évaluation': {
        status: 'retenu',
        senses: hsbS['Calcul/Évaluation'],
        proof_ctx: "Le nom ḥisābin (indéfini, génitif) dans bi-ghayri ḥisābin désigne le résultat du calcul — le compte, la mesure. L'indéfinition (pas d'article al-) renforce l'idée d'absence totale : sans aucun compte, sans aucune mesure. Après les cycles cosmiques et vitaux, le verset conclut par cette provision sans mesure — Dieu pourvoit sans être limité par une quantité."
      },
      'Suffisance': {
        status: 'peu_probable',
        senses: hsbS['Suffisance'],
        proof_ctx: "La suffisance (ḥasb = il suffit) est un sens attesté de cette racine, mais dans bi-ghayri ḥisābin, c'est le nom ḥisāb (compte) qui est utilisé, pas ḥasb (suffisance). Le contexte — l'absence de mesure — active le sens de calcul."
      },
      'Sens isolé/Noblesse': {
        status: 'nul',
        senses: hsbS['Sens isolé/Noblesse'],
        proof_ctx: "Sans rapport avec la noblesse."
      }
    }
  };

  // =============================================
  // INSERTION VWA (verse_word_analyses)
  // =============================================
  console.log('--- Insertion VWA ---');
  const vwaEntries = [
    {verse_id:VERSE_ID, word_key:'wlj', position:1,  sense_chosen:'faire entrer', analysis_axes:wljAxes},
    {verse_id:VERSE_ID, word_key:'wlj', position:6,  sense_chosen:'faire entrer', analysis_axes:wljAxes},
    {verse_id:VERSE_ID, word_key:'xrj', position:11, sense_chosen:'faire sortir', analysis_axes:xrjAxes},
    {verse_id:VERSE_ID, word_key:'xrj', position:16, sense_chosen:'faire sortir', analysis_axes:xrjAxes},
    {verse_id:VERSE_ID, word_key:'rzq', position:21, sense_chosen:'pourvoir',     analysis_axes:rzqAxes},
    {verse_id:VERSE_ID, word_key:'shy', position:23, sense_chosen:'vouloir',      analysis_axes:shyAxes},
    {verse_id:VERSE_ID, word_key:'ghyr',position:25, sense_chosen:'sans',         analysis_axes:ghyrAxes},
    {verse_id:VERSE_ID, word_key:'hsb', position:26, sense_chosen:'compte',       analysis_axes:hsbAxes},
  ];

  const {error:vwaErr} = await db.from('verse_word_analyses').insert(vwaEntries);
  console.log('VWA:', vwaErr ? 'ERROR: '+vwaErr.message : vwaEntries.length+' entrées insérées OK');

  // =============================================
  // ÉTAPE 4 — Segments d'affichage (26 segments)
  // =============================================
  const segments = [
    {position:1,  phon:'tūliju',      arabic:'تُولِجُ',     fr:'Tu fais entrer', pos:'verbe', word_key:'wlj',  is_particle:false, sense_retenu:'faire entrer'},
    {position:2,  phon:'al-layla',     arabic:'ٱلَّيْلَ',    fr:'la nuit',        is_particle:true, word_key:null},
    {position:3,  phon:'fī',           arabic:'فِى',         fr:'dans',           is_particle:true, word_key:null},
    {position:4,  phon:'an-nahāri',    arabic:'ٱلنَّهَارِ',  fr:'le jour',        is_particle:true, word_key:null},
    {position:5,  phon:'wa',           arabic:'وَ',          fr:'et',             is_particle:true, word_key:null},
    {position:6,  phon:'tūliju',       arabic:'تُولِجُ',     fr:'Tu fais entrer', pos:'verbe', word_key:'wlj',  is_particle:false, sense_retenu:'faire entrer'},
    {position:7,  phon:'an-nahāra',    arabic:'ٱلنَّهَارَ',  fr:'le jour',        is_particle:true, word_key:null},
    {position:8,  phon:'fī',           arabic:'فِى',         fr:'dans',           is_particle:true, word_key:null},
    {position:9,  phon:'al-layli',     arabic:'ٱلَّيْلِ',    fr:'la nuit',        is_particle:true, word_key:null},
    {position:10, phon:'wa',           arabic:'وَ',          fr:'et',             is_particle:true, word_key:null},
    {position:11, phon:"tukh'riju",    arabic:'تُخْرِجُ',    fr:'Tu fais sortir', pos:'verbe', word_key:'xrj',  is_particle:false, sense_retenu:'faire sortir'},
    {position:12, phon:'al-ḥayya',     arabic:'ٱلْحَىَّ',    fr:'le vivant',      is_particle:true, word_key:null},
    {position:13, phon:'mina',         arabic:'مِنَ',        fr:'du',             is_particle:true, word_key:null},
    {position:14, phon:'al-mayyiti',   arabic:'ٱلْمَيِّتِ',  fr:'mort',           is_particle:true, word_key:null},
    {position:15, phon:'wa',           arabic:'وَ',          fr:'et',             is_particle:true, word_key:null},
    {position:16, phon:"tukh'riju",    arabic:'تُخْرِجُ',    fr:'Tu fais sortir', pos:'verbe', word_key:'xrj',  is_particle:false, sense_retenu:'faire sortir'},
    {position:17, phon:'al-mayyita',   arabic:'ٱلْمَيِّتَ',  fr:'le mort',        is_particle:true, word_key:null},
    {position:18, phon:'mina',         arabic:'مِنَ',        fr:'du',             is_particle:true, word_key:null},
    {position:19, phon:'al-ḥayyi',     arabic:'ٱلْحَىِّ',    fr:'vivant',         is_particle:true, word_key:null},
    {position:20, phon:'wa',           arabic:'وَ',          fr:'et',             is_particle:true, word_key:null},
    {position:21, phon:'tarzuqu',      arabic:'تَرْزُقُ',    fr:'Tu pourvois',    pos:'verbe', word_key:'rzq',  is_particle:false, sense_retenu:'pourvoir'},
    {position:22, phon:'man',          arabic:'مَن',         fr:'qui',            is_particle:true, word_key:null},
    {position:23, phon:'tashāʾu',     arabic:'تَشَآءُ',     fr:'Tu veux',        pos:'verbe', word_key:'shy',  is_particle:false, sense_retenu:'vouloir'},
    {position:24, phon:'bi',           arabic:'بِ',          fr:'',               is_particle:true, word_key:null},
    {position:25, phon:'ghayri',       arabic:'غَيْرِ',      fr:'sans',           pos:'nom',   word_key:'ghyr', is_particle:false, sense_retenu:'sans'},
    {position:26, phon:'ḥisābin',      arabic:'حِسَابٍ',     fr:'compte',         pos:'nom',   word_key:'hsb',  is_particle:false, sense_retenu:'compte'},
  ];

  // =============================================
  // ÉTAPE 4 — Traduction et démarche
  // =============================================
  const translationArab = "Tu fais entrer la nuit dans le jour et Tu fais entrer le jour dans la nuit ; et Tu fais sortir le vivant du mort et Tu fais sortir le mort du vivant ; et Tu pourvois qui Tu veux sans compte.";

  const fullTranslation = "Tu fais pénétrer la nuit dans le jour, et Tu fais pénétrer le jour dans la nuit. Tu fais sortir le vivant du mort, et Tu fais sortir le mort du vivant. Et Tu attribues à qui Tu veux, sans compter. — Hamidullah";

  const explanation = [
    '§DEMARCHE§',

    "Ce verset poursuit l'invocation ordonnée au verset 26. Après avoir affirmé que Dieu distribue et reprend le pouvoir, élève et abaisse, le texte détaille maintenant les manifestations concrètes de cette souveraineté : les cycles cosmiques (nuit et jour), les cycles de vie (vivant et mort), et la provision sans mesure.",

    "**tūliju** (Tu fais entrer) est un verbe à l'inaccompli (une forme qui dit que l'action est en cours, habituelle, ou permanente) de la racine w-l-j, forme IV (une forme qui ajoute l'idée de « faire faire » — ici « faire entrer »). Le sens premier de w-l-j est « entrer, passer de l'extérieur vers l'intérieur ». D'après les sources étymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), walaja signifie « il est entré (dans la maison) ». La forme IV transforme ce mouvement en acte causatif : faire entrer une chose dans une autre. Le Lane's cite spécifiquement l'expression yūliju l-layla fī n-nahāri comme exemple de cette forme IV. L'inaccompli indique que cette action est continue — Dieu fait entrer la nuit dans le jour en permanence, comme un cycle sans fin. Le verbe est répété deux fois : d'abord la nuit entre dans le jour, puis le jour entre dans la nuit. Cette symétrie souligne la réciprocité du cycle. On traduit par « Tu fais entrer ».",

    "**tukh'riju** (Tu fais sortir) est un verbe à l'inaccompli de la racine kh-r-j, forme IV (une forme qui transforme « sortir » en « faire sortir »). Le sens premier de kh-r-j est « sortir, passer de l'intérieur vers l'extérieur ». D'après les sources étymologiques, akhraja signifie « il a fait sortir ». Le parallélisme avec tūliju (faire entrer) crée une paire d'opposés : faire entrer et faire sortir. Ici, c'est le vivant qui est fait sortir du mort et le mort qui est fait sortir du vivant — un cycle de transformation qui inverse la direction. Le texte ne précise pas la nature de ce cycle — le lecteur comprend par lui-même à partir de ce que les mots disent. On traduit par « Tu fais sortir ».",

    "**tarzuqu** (Tu pourvois) est un verbe à l'inaccompli de la racine r-z-q, forme I. Le sens premier est « accorder la subsistance, pourvoir aux moyens de vivre ». D'après les sources étymologiques, razaqa signifie « il a pourvu, il a donné la subsistance ». L'inaccompli indique une action continue et habituelle — Dieu pourvoit en permanence. Après les cycles cosmiques (nuit et jour) et vitaux (vivant et mort), le verset passe à la provision matérielle, montrant que la même souveraineté s'étend à tous les domaines de l'existence. On traduit par « Tu pourvois ».",

    "**tashāʾu** (Tu veux) est un verbe à l'inaccompli de la racine sh-y-ʾ. Le sens premier est « vouloir ». Comme dans le verset 26 qui répète quatre fois « qui Tu veux », le verset 27 rappelle que la provision est liée à la volonté de Dieu — sans condition extérieure et sans contrainte. L'inaccompli dit que cette volonté est en cours, active, et sans limite temporelle. On traduit par « Tu veux ».",

    "**ghayri** (sans) est un nom au génitif (cas du complément) de la racine gh-y-r. D'après les sources étymologiques, ghayr signifie « autre que, différent de, sauf ». Précédé de la préposition bi, il forme la locution bi-ghayri qui signifie « sans, en l'absence de ». Dans bi-ghayri ḥisābin, il indique l'absence totale de compte — la provision divine n'est pas mesurée ni limitée par un calcul. C'est une construction en idāfa (rattachement) : ghayri est rattaché à ḥisābin. On traduit par « sans ».",

    "**ḥisābin** (compte) est un nom indéfini au génitif (en idāfa avec ghayri) de la racine ḥ-s-b. Le sens premier est « compter, calculer ». D'après les sources étymologiques, ḥisāb signifie « le fait de compter, le calcul, le compte ». L'indéfinition (pas d'article al-) renforce l'idée d'absence totale : sans aucun compte, sans aucune mesure. Après avoir montré les cycles cosmiques et vitaux, le verset conclut par cette provision sans mesure — Dieu n'est pas limité par une quantité ni un calcul. On traduit par « compte ».",

    '§JUSTIFICATION§',

    "**Tu fais entrer** — Le sens retenu est « Entrée/Pénétration ». L'expression « faire entrer » est choisie car la forme IV de w-l-j transforme le mouvement d'entrée en acte causatif : Dieu fait entrer la nuit dans le jour. L'alternative « insérer » est écartée car elle implique un placement précis et mécanique — l'entrée de la nuit dans le jour est progressive, pas chirurgicale. L'alternative « introduire » est écartée car elle est plus littéraire et moins courante en français quotidien.",

    "**Tu fais sortir** — Le sens retenu est « Sortie/Émergence ». L'expression « faire sortir » est choisie car la forme IV de kh-r-j transforme la sortie en acte causatif : Dieu fait sortir le vivant du mort. L'alternative « extraire » est écartée car elle implique un effort technique d'arrachement. L'alternative « produire » est écartée car elle perd la dimension spatiale — le vivant sort littéralement de l'intérieur du mort.",

    "**Tu pourvois** — Le sens retenu est « Subsistance/Provision ». Le mot « pourvoir » est choisi car il capture l'acte concret d'accorder les moyens de vivre. L'alternative « nourrir » est écartée car elle restreint la provision à la nourriture alors que le rizq couvre tous les moyens de subsistance — matériels, intellectuels, spirituels. L'alternative « donner » est écartée car elle est trop vague et ne véhicule pas l'idée de subsistance vitale.",

    "**Tu veux** — Le sens retenu est « Volonté ». Le mot « vouloir » est choisi car il exprime l'acte intérieur de volonté libre. L'alternative « désirer » est écartée car elle ajoute une nuance émotionnelle (manque, aspiration) absente du contexte — la volonté divine ici est souveraine, pas émotionnelle.",

    "**sans** — Le sens retenu est « Autre/Exclusion ». Le mot « sans » est choisi car la locution bi-ghayri exprime l'absence, l'exclusion d'une chose. L'alternative « autre que » est écartée car elle donnerait « autre que compte » qui est grammaticalement bancal en français. L'alternative « en dehors de » est écartée car elle est plus longue et moins naturelle.",

    "**compte** — Le sens retenu est « Calcul/Évaluation ». Le mot « compte » est choisi car il désigne le résultat du calcul — la mesure chiffrée. L'alternative « estimation » est écartée car elle ajoute une nuance d'approximation — le ḥisāb est un compte précis dont Dieu se passe. L'alternative « limite » est écartée car ce serait une interprétation — le texte dit « sans compte », pas « sans limite ».",

    '§CRITIQUE§',

    "**faire entrer vs faire pénétrer** : les traductions courantes donnent « Tu fais pénétrer la nuit dans le jour ». Le verbe « pénétrer » en français ajoute une nuance d'effort, de difficulté à traverser une résistance. Le texte arabe dit tūliju (forme IV de w-l-j) : « faire entrer ». D'après les sources étymologiques, walaja signifie « il est entré (dans la maison) » — c'est un passage naturel, pas une percée. La nuit entre dans le jour comme une transition progressive et douce. Notre traduction « Tu fais entrer » préserve cette simplicité sans ajouter l'idée d'un effort ou d'une résistance.",

    "**pourvois vs attribues** : les traductions courantes donnent « Tu attribues à qui Tu veux ». Le mot « attribuer » en français implique une distribution formelle et administrative — un fonctionnaire qui attribue des allocations. Le texte dit tarzuqu (de r-z-q) : « Tu pourvois » — c'est l'acte concret et vital d'accorder la subsistance, les moyens de vivre. Le rizq est plus concret et plus vital que l'attribution. Notre traduction « Tu pourvois » capture cette dimension de nécessité vitale que « Tu attribues » perd."
  ].join('\n\n');

  // =============================================
  // UPDATE verse_analyses
  // =============================================
  console.log('\n--- Update verse_analyses ---');
  const {error:vaErr} = await db.from('verse_analyses').update({
    translation_arab: translationArab,
    translation_explanation: explanation,
    full_translation: fullTranslation,
    segments: segments
  }).eq('verse_id', VERSE_ID);
  console.log('verse_analyses:', vaErr ? 'ERROR: '+vaErr.message : 'OK');

  // =============================================
  // WORD_DAILY — wlj (pas encore de phrases)
  // =============================================
  console.log('\n--- Insertion word_daily ---');
  const {data:waWlj} = await db.from('word_analyses').select('id').eq('word_key','wlj').single();
  const {count:wljDaily} = await db.from('word_daily').select('*',{count:'exact',head:true}).eq('analysis_id', waWlj.id);

  if (wljDaily === 0) {
    const wljPhrases = [
      {analysis_id:waWlj.id, sense:'entrer',       arabic:'وَلَجَ البَيتَ', phon:'walaja l-bayta', french:'Il est entré dans la maison'},
      {analysis_id:waWlj.id, sense:'faire entrer',  arabic:'أَولَجَ المِفتاحَ فِى القُفلِ', phon:'awlaja l-miftāḥa fī l-qufli', french:'Il a fait entrer la clé dans la serrure'},
      {analysis_id:waWlj.id, sense:'pénétrer',      arabic:'وَلَجَ الماءُ فِى الأَرضِ', phon:'walaja l-māʾu fī l-arḍi', french:"L'eau a pénétré dans le sol"},
    ];
    const {error:wljDErr} = await db.from('word_daily').insert(wljPhrases);
    console.log('wlj daily:', wljDErr ? 'ERROR: '+wljDErr.message : '3 phrases insérées');
  } else {
    console.log('wlj daily: SKIP ('+wljDaily+' phrases existent déjà)');
  }

  // Vérifier les autres racines (doivent avoir des phrases)
  const otherKeys = ['xrj','rzq','shy','ghyr','hsb'];
  for (const key of otherKeys) {
    const {data:waCheck} = await db.from('word_analyses').select('id').eq('word_key', key).single();
    if (waCheck) {
      const {count} = await db.from('word_daily').select('*',{count:'exact',head:true}).eq('analysis_id', waCheck.id);
      console.log(key + ' daily: ' + (count > 0 ? count + ' phrases OK' : 'AUCUNE <<<'));
    }
  }

  // =============================================
  // LOGS FINAUX
  // =============================================
  console.log('\n========================================');
  console.log('VERSET 3:27 — TERMINÉ');
  console.log('========================================');
  const logEntries = [
    ['wlj', 'w-l-j',   'Entrée/Pénétration',    'faire entrer', 'Tu fais entrer'],
    ['xrj', 'kh-r-j',  'Sortie/Émergence',       'faire sortir', 'Tu fais sortir'],
    ['rzq', 'r-z-q',   'Subsistance/Provision',  'pourvoir',     'Tu pourvois'],
    ['shy', 'sh-y-ʾ',  'Volonté',                'vouloir',      'Tu veux'],
    ['ghyr','gh-y-r',   'Autre/Exclusion',        'sans',         'sans'],
    ['hsb', 'ḥ-s-b',   'Calcul/Évaluation',      'compte',       'compte'],
  ];
  logEntries.forEach(([key, root, concept, sense, fr]) => {
    console.log(`  ${key} (${root}) → sens "${concept}" → mot français "${fr}"`);
  });
  console.log(`\nTraduction : "${translationArab}"`);
}

run().catch(e => console.error(e));
