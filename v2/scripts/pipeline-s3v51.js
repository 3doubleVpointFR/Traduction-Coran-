const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

async function run() {
  const verseId = 344; // S3:V51
  const vaId = 704;

  console.log('═══════════════════════════════════════════');
  console.log('PIPELINE MAISON — Sourate 3, Verset 51');
  console.log('verse_id:', verseId, '| va_id:', vaId);
  console.log('═══════════════════════════════════════════');

  // ═══════════════════════════════════════════
  // ÉTAPE 3 — VWA ENTRIES (6 mots importants)
  // ═══════════════════════════════════════════

  // VWA 1: Allāha (alh) — position 2
  // Nom propre accusatif (ism inna)
  const { error: e1 } = await db.from('verse_word_analyses').insert({
    verse_id: verseId,
    word_key: 'alh',
    position: 2,
    sense_chosen: 'Dieu',
    reason: "Nom propre accusatif (ism inna). inna Allāha = assurément Dieu. Le nom est en position de sujet de inna, ce qui confirme que Dieu est le thème de la phrase.",
    analysis_axes: {
      concept_chosen: "Divinité",
      concepts: {
        "Divinité": {
          status: "retenu",
          senses: ["divinité", "divinité (concept)", "Dieu", "théologie", "exclamation divine", "oui certes"],
          proof_ctx: "Allāh est le nom propre de Dieu. Le sens est univoque — Jésus déclare que Dieu est son Seigneur et celui des Enfants d'Israël. La particule inna (assurément) renforce l'affirmation."
        },
        "Adoration/Dévotion": {
          status: "nul",
          senses: ["adorer", "faire adorer", "se dévouer au culte", "diviniser"],
          proof_ctx: "L'adoration est un acte dirigé vers la divinité — ici le mot est le nom propre, pas l'acte d'adorer."
        },
        "Détresse": { status: "nul", senses: ["être perplexe", "se lamenter"], proof_ctx: "Hors contexte pour le nom propre." },
        "Refuge/Protection": { status: "nul", senses: ["chercher refuge", "protéger", "demeurer"], proof_ctx: "Hors contexte pour le nom propre." },
        "Domination": { status: "nul", senses: ["asservir"], proof_ctx: "Hors contexte pour le nom propre." }
      }
    }
  });
  console.log('VWA alh:', e1 ? 'ERREUR: ' + e1.message : 'OK');

  // VWA 2: rabbī (rbb) — position 3
  // Nom en iḍāfa + pronom possessif 1ère pers sing = "mon Seigneur"
  const { error: e2 } = await db.from('verse_word_analyses').insert({
    verse_id: verseId,
    word_key: 'rbb',
    position: 3,
    sense_chosen: 'seigneur',
    reason: "Nom au génitif en iḍāfa avec le pronom -ī (moi). rabbī = mon Seigneur. Jésus affirme que Dieu est SON Seigneur — il se place lui-même sous l'autorité de Dieu avant de mentionner celle des Enfants d'Israël.",
    analysis_axes: {
      concept_chosen: "Seigneurie/Autorité bienveillante",
      concepts: {
        "Seigneurie/Autorité bienveillante": {
          status: "retenu",
          senses: ["seigneur", "maître", "propriétaire", "celui qui élève", "celui qui entretient", "celui qui possède", "gouverner"],
          proof_ctx: "Le rabb est celui qui fait croître, qui élève et entretient. Jésus dit rabbī (mon Seigneur) AVANT de dire rabbukum (votre Seigneur) — il se met sous l'autorité divine avant de rappeler cette même autorité aux autres. Cette séquence est significative : Jésus ne se place pas au-dessus de son auditoire mais au même niveau de servitude envers Dieu."
        },
        "Croissance/Augmentation": { status: "probable", senses: ["augmenter", "croître", "faire grandir", "nourrir"], proof_ctx: "Le sens premier de r-b-b est la croissance. Le rabb est celui qui fait croître. Mais ici le contexte est celui de l'autorité divine, pas de la croissance." },
        "Éducation/Accompagnement": { status: "peu_probable", senses: ["élever un enfant", "éduquer", "former"], proof_ctx: "L'éducation est un aspect du rabb mais le contexte est l'affirmation d'autorité, pas l'enseignement." },
        "Commerce/Usure": { status: "nul", senses: ["usure", "augmentation de dette", "intérêt"], proof_ctx: "Hors contexte." },
        "Souffle/Vent": { status: "nul", senses: ["essoufflement"], proof_ctx: "Hors contexte." }
      }
    }
  });
  console.log('VWA rbb-1:', e2 ? 'ERREUR: ' + e2.message : 'OK');

  // VWA 3: wa-rabbukum (rbb) — position 4
  // wa- + nom nominatif en iḍāfa + pronom 2ème pers plur = "et votre Seigneur"
  const { error: e3 } = await db.from('verse_word_analyses').insert({
    verse_id: verseId,
    word_key: 'rbb',
    position: 4,
    sense_chosen: 'seigneur',
    reason: "Nom nominatif (khabar inna, en coordination avec rabbī). wa-rabbukum = et votre Seigneur. Dieu est à la fois le Seigneur de Jésus ET celui des Enfants d'Israël — l'unicité de la seigneurie divine est le point central.",
    analysis_axes: {
      concept_chosen: "Seigneurie/Autorité bienveillante",
      concepts: {
        "Seigneurie/Autorité bienveillante": {
          status: "retenu",
          senses: ["seigneur", "maître", "propriétaire", "celui qui élève", "celui qui entretient", "celui qui possède", "gouverner"],
          proof_ctx: "Même analyse que rabbī — mais ici avec le pronom -kum (votre). Jésus unifie sa situation et celle de son auditoire : le même Dieu est Seigneur de tous. La conjonction wa- (et) lie les deux formules en une seule affirmation d'unicité."
        },
        "Croissance/Augmentation": { status: "probable", senses: ["augmenter", "croître", "faire grandir"], proof_ctx: "Le sens premier de r-b-b mais le contexte est l'affirmation de seigneurie." },
        "Éducation/Accompagnement": { status: "peu_probable", senses: ["élever un enfant", "éduquer"], proof_ctx: "L'éducation est un aspect du rabb mais secondaire ici." },
        "Commerce/Usure": { status: "nul", senses: ["usure"], proof_ctx: "Hors contexte." }
      }
    }
  });
  console.log('VWA rbb-2:', e3 ? 'ERREUR: ' + e3.message : 'OK');

  // VWA 4: fa-ʿbudūhu (ebd) — position 5
  // fa- + impératif forme I + pronom suffixe -hu = "adorez-Le donc"
  const { error: e4 } = await db.from('verse_word_analyses').insert({
    verse_id: verseId,
    word_key: 'ebd',
    position: 5,
    sense_chosen: 'adorer',
    reason: "Impératif forme I (uʿbudū) de ʿ-b-d + pronom -hu (Le). fa- est une conjonction de conséquence : PUISQUE Dieu est votre Seigneur, ALORS adorez-Le. L'impératif ordonne la dévotion exclusive envers le Seigneur unique.",
    analysis_axes: {
      concept_chosen: "Adoration/Dévotion",
      concepts: {
        "Adoration/Dévotion": {
          status: "retenu",
          senses: ["adorer", "servir", "vouer un culte", "se dévouer", "dévotion", "adoration"],
          proof_ctx: "La racine ʿ-b-d signifie « servir avec dévotion ». D'après les sources étymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), le sens premier est « être serviteur, se consacrer entièrement ». Dans le contexte de Dieu, ʿibāda est la dévotion totale — servir Dieu de tout son être. La conjonction fa- (donc) tire la conséquence logique : si Dieu est votre Seigneur, alors la réponse est de Le servir avec dévotion. Le sens « Servitude/Esclavage » (serviteur, esclave) est le sens social de la même racine — ici le contexte est la relation avec Dieu, pas la relation maître-esclave entre humains."
        },
        "Servitude/Esclavage": {
          status: "probable",
          senses: ["serviteur", "esclave", "être humain", "asservir", "rendre soumis", "aplanir un chemin"],
          proof_ctx: "La servitude est le pendant social de la racine ʿ-b-d. Le ʿabd est le serviteur/esclave. Mais l'impératif uʿbudūhu dans le contexte de Dieu désigne la dévotion volontaire, pas la servitude imposée."
        },
        "Sens isolé/Être": { status: "nul", senses: ["être en colère"], proof_ctx: "Hors contexte." },
        "Sens isolé/Mépriser": { status: "nul", senses: ["mépriser"], proof_ctx: "Hors contexte." },
        "Sens isolé/Colérique": { status: "nul", senses: ["colérique"], proof_ctx: "Hors contexte." }
      }
    }
  });
  console.log('VWA ebd:', e4 ? 'ERREUR: ' + e4.message : 'OK');

  // VWA 5: ṣirāṭun (srt) — position 7
  // Nom masculin indéfini au nominatif (khabar de hādhā) = "un chemin"
  const { error: e5 } = await db.from('verse_word_analyses').insert({
    verse_id: verseId,
    word_key: 'srt',
    position: 7,
    sense_chosen: 'chemin',
    reason: "Nom indéfini au nominatif (khabar de hādhā). ṣirāṭun = un chemin. L'indéfini (tankīr) est notable : le texte dit « un chemin droit » et non « LE chemin droit ». Le ṣirāṭ est un chemin large et dégagé — d'après les sources étymologiques, c'est un chemin qu'on peut avaler (saraṭa = avaler), tellement il est facile à parcourir.",
    analysis_axes: {
      concept_chosen: "Chemin/Voie",
      concepts: {
        "Chemin/Voie": {
          status: "retenu",
          senses: ["chemin", "route", "voie"],
          proof_ctx: "Le ṣirāṭ est un chemin large et dégagé. D'après les sources étymologiques, la racine ṣ-r-ṭ est liée à saraṭa (avaler) — le ṣirāṭ est un chemin tellement facile qu'il « avale » celui qui le parcourt, ou que le marcheur l'avale sans effort. Le sens est univoque dans ce contexte. ṣirāṭun est indéfini — le texte dit « ceci est un chemin droit », pas « ceci est LE chemin droit ». L'indéfini peut avoir une valeur de glorification (tankīr li-t-taʿẓīm) mais la forme grammaticale reste indéfinie."
        },
        "Arme/Combat": {
          status: "nul",
          senses: ["épée longue"],
          proof_ctx: "L'épée longue (ṣirāṭ) est un homonyme rare — hors contexte ici."
        },
        "Sens isolé/Pont": {
          status: "nul",
          senses: ["pont de l'au-delà"],
          proof_ctx: "Le pont de l'au-delà est un sens post-islamique dérivé des commentaires — le texte parle ici d'un chemin de conduite, pas d'un pont eschatologique."
        }
      }
    }
  });
  console.log('VWA srt:', e5 ? 'ERREUR: ' + e5.message : 'OK');

  // VWA 6: mustaqīmun (qwm) — position 8
  // Participe actif forme X (mustaf'il), indéfini nominatif = "droit, qui se tient droit"
  const { error: e6 } = await db.from('verse_word_analyses').insert({
    verse_id: verseId,
    word_key: 'qwm',
    position: 8,
    sense_chosen: 'droit',
    reason: "Participe actif forme X (mustaqīm) de q-w-m, indéfini nominatif (qualificatif de ṣirāṭ). La forme X (istaqāma) signifie « se dresser de soi-même, être droit par nature ». Le participe actif mustaqīm désigne ce qui est droit de façon permanente et intrinsèque — pas un chemin qu'on a redressé, mais un chemin qui est naturellement droit.",
    analysis_axes: {
      concept_chosen: "Verticalité/Droiture",
      concepts: {
        "Verticalité/Droiture": {
          status: "retenu",
          senses: ["se lever", "se dresser", "droit", "rectitude", "redresser", "corriger", "se tenir debout"],
          proof_ctx: "La forme X (istaf'ala) de q-w-m est « chercher à se tenir droit, être droit par nature ». Le participe actif mustaqīm qualifie le ṣirāṭ : c'est un chemin qui se tient droit de lui-même — pas tortueux, pas dévié, pas ambigu. Le sens « Verticalité/Droiture » est le sens premier de q-w-m (se lever, se tenir debout). Le sens « Peuple/Communauté » (qawm) est un sens dérivé de « ceux qui se tiennent ensemble » — hors contexte pour un adjectif qualifiant un chemin."
        },
        "Peuple/Communauté": {
          status: "nul",
          senses: ["peuple", "communauté", "tribu", "nation", "groupe"],
          proof_ctx: "Le peuple (qawm) est un sens nominal de la même racine — hors contexte pour un participe qualifiant un chemin."
        },
        "Gestion/Administration": {
          status: "nul",
          senses: ["gérer", "administrer", "prendre en charge", "diriger", "veiller sur"],
          proof_ctx: "La gestion est un sens dérivé de q-w-m (se charger de) — hors contexte pour un adjectif de droiture."
        },
        "Valeur/Mesure": {
          status: "nul",
          senses: ["valeur", "prix", "estimation", "stature", "taille"],
          proof_ctx: "La valeur et la mesure sont des sens dérivés de « se tenir droit = avoir une stature » — hors contexte pour un chemin."
        },
        "Subsistance": {
          status: "nul",
          senses: ["subsistance", "nourriture", "ce qui fait vivre"],
          proof_ctx: "La subsistance (qiwām) dérive de « ce qui fait se tenir debout » — hors contexte ici."
        }
      }
    }
  });
  console.log('VWA qwm:', e6 ? 'ERREUR: ' + e6.message : 'OK');

  // ═══════════════════════════════════════════
  // ÉTAPE 4 — TRADUCTION + EXPLICATION
  // ═══════════════════════════════════════════

  const translationArab = "Dieu est assurément mon Seigneur et votre Seigneur ; adorez-Le donc. Voici un chemin droit.";

  const fullTranslation = "Certes, Allah est mon Seigneur et votre Seigneur. Adorez-Le donc: voilà le chemin droit.";

  const explanation = `§DEMARCHE§
Ce verset conclut le discours de Jésus aux Enfants d'Israël, commencé au verset 49. Après avoir présenté ses miracles (V49) et sa mission de confirmer la Torah et d'alléger certains interdits (V50), Jésus résume son message en une affirmation d'unicité divine et un double impératif.

**inna** (assurément) est une particule de renforcement (ḥarf tawkīd) qui ouvre la phrase. Elle confère une force assertive à la déclaration qui suit : ce n'est pas une hypothèse mais une affirmation solennelle. inna place le nom qui suit à l'accusatif (Allāha).

**Allāha** (Dieu) est le nom propre de la divinité, à l'accusatif car c'est le ism de inna (le sujet de la phrase renforcée). Dieu est déclaré comme étant le Seigneur commun de Jésus et des Enfants d'Israël.

**rabbī** (mon Seigneur) est le nom rabb de la racine r-b-b au génitif en iḍāfa avec le pronom possessif -ī (moi). Le rabb est celui qui fait croître, qui élève, qui nourrit et qui gouverne. D'après les sources étymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la racine r-b-b porte l'idée de croissance accompagnée — le rabb est celui qui prend en charge une chose depuis le début et la mène à son accomplissement. rabbī = mon Seigneur — Jésus se place LUI-MÊME sous l'autorité de Dieu avant de rappeler cette autorité aux autres. On traduit par « mon Seigneur ».

**wa-rabbukum** (et votre Seigneur) est la conjonction wa- (et) suivie du même nom rabb avec le pronom possessif -kum (votre, pluriel). La coordination rabbī wa-rabbukum (mon Seigneur et votre Seigneur) affirme l'unicité de la seigneurie divine : le même Dieu est Seigneur de Jésus et Seigneur de son auditoire. Il n'y a pas deux seigneuries différentes. On traduit par « et votre Seigneur ».

**fa-ʿbudūhu** (adorez-Le donc) est composé de **fa-** (donc, conjonction de conséquence) et **uʿbudū**, impératif de la forme I de la racine ʿ-b-d, avec le pronom suffixe -hu (Le). La conjonction fa- tire la conséquence logique de ce qui précède : PUISQUE Dieu est votre Seigneur, ALORS adorez-Le. D'après les sources étymologiques, le sens premier de ʿ-b-d est « servir, se consacrer entièrement à ». L'impératif uʿbudūhu ordonne la dévotion exclusive envers le Seigneur unique. On traduit par « adorez-Le donc ».

**hādhā** (voici) est un pronom démonstratif (ism ishāra) qui pointe vers ce qui vient d'être dit : le message de Jésus dans son ensemble — confirmer la Torah, alléger les interdits, et se dévouer à Dieu. On traduit par « voici ».

**ṣirāṭun** (un chemin) est un nom masculin indéfini au nominatif (khabar de hādhā = ce que « voici » désigne). Le ṣirāṭ est un chemin large et dégagé. D'après les sources étymologiques, la racine ṣ-r-ṭ est liée à saraṭa (avaler) — le ṣirāṭ est un chemin tellement facile et direct qu'il « avale » celui qui le parcourt sans effort. L'indéfini (ṣirāṭun et non aṣ-ṣirāṭ) est notable : le texte dit « UN chemin droit » et non « LE chemin droit ». On traduit par « un chemin ».

**mustaqīmun** (droit) est un participe actif de la forme X (istaf'ala) de la racine q-w-m, indéfini au nominatif (qualificatif de ṣirāṭ). Un participe actif est une forme qui décrit un état permanent — le chemin EST droit de façon permanente. La forme X (istaqāma) ajoute la nuance de « se tenir droit par soi-même, de sa propre nature » — le chemin n'a pas été redressé par quelqu'un, il est intrinsèquement droit. D'après les sources étymologiques, le sens premier de q-w-m est « se lever, se tenir debout » — la droiture est la qualité de ce qui se tient sans dévier. On traduit par « droit ».

§JUSTIFICATION§
**Dieu** — Le sens retenu est « Dieu » du champ « Divinité ». Conforme à l'usage constant dans notre projet. « Dieu » est le mot français courant pour le nom propre Allāh.

**mon Seigneur** — Le sens retenu est « seigneur » du champ « Seigneurie/Autorité bienveillante ». Le mot « Seigneur » est le seul mot français qui rend la combinaison d'autorité, de bienveillance, de croissance et de possession que rabb exprime. L'alternative « mon maître » est écartée car elle réduit la relation à un rapport de domination. L'alternative « celui qui m'élève » est plus étymologique mais trop long pour la traduction.

**et votre Seigneur** — Même justification que rabbī. L'unicité de la seigneurie est le point central du verset.

**adorez-Le** — Le sens retenu est « adorer » du champ « Adoration/Dévotion ». Le mot « adorez » rend l'impératif uʿbudū dans le contexte de Dieu. L'alternative « servez-Le » est plus proche du sens premier de ʿ-b-d (servir) mais en français courant, « servir Dieu » est moins naturel qu'« adorer Dieu » pour exprimer la dévotion totale. L'alternative « vouez-vous à Lui » est trop littéraire.

**un chemin** — Le sens retenu est « chemin » du champ « Chemin/Voie ». Le mot « chemin » est le mot français courant pour ṣirāṭ. L'alternative « voie » est acceptable mais plus abstraite — « chemin » est plus concret et courant. L'alternative « route » est trop utilitaire.

**droit** — Le sens retenu est « droit » du champ « Verticalité/Droiture ». Le mot « droit » rend mustaqīm : ce qui se tient sans dévier. L'alternative « rectiligne » est trop technique. L'alternative « juste » introduit une notion morale que mustaqīm ne porte pas directement — mustaqīm décrit la forme du chemin (droit, sans courbes), pas sa qualité morale.

§CRITIQUE§
**un chemin droit vs le chemin droit** — Les traductions courantes donnent « le chemin droit » pour ṣirāṭun mustaqīmun. Or le texte arabe utilise l'indéfini (ṣirāṭun avec tanwīn) et non le défini (aṣ-ṣirāṭ avec article al-). « Le chemin droit » implique qu'il n'y a qu'un seul chemin identifié et connu de tous. « Un chemin droit » dit que ce que Jésus propose EST un chemin droit — sans exclure ni inclure d'autres chemins. Le biais vient de l'habitude de traduire ṣirāṭ mustaqīm comme une formule figée « le droit chemin », alors que la grammaire arabe distingue clairement le défini du indéfini. En 1:6 (ihdinā aṣ-ṣirāṭa al-mustaqīma), l'article est bien présent — c'est LE chemin droit. Ici en 3:51, l'absence d'article est un choix du texte.

Les traductions courantes donnent sensiblement le même sens pour les autres mots du verset. « Adorez-Le » et « mon Seigneur et votre Seigneur » font consensus.`;

  // Segments d'affichage
  const segments = [
    { fr: "assurément", phon: "inna", arabic: "إِنَّ", word_key: null, is_particle: true, sense_retenu: null, position: 1 },
    { fr: "Dieu", phon: "Allāha", arabic: "ٱللَّهَ", word_key: "alh", is_particle: false, sense_retenu: "Dieu", position: 2 },
    { fr: "est mon Seigneur", phon: "rabbī", arabic: "رَبِّى", word_key: "rbb", is_particle: false, sense_retenu: "seigneur", position: 3 },
    { fr: "et votre Seigneur", phon: "wa-rabbukum", arabic: "وَرَبُّكُمْ", word_key: "rbb", is_particle: false, sense_retenu: "seigneur", position: 4 },
    { fr: "adorez-Le donc", phon: "fa-ʿbudūhu", arabic: "فَٱعْبُدُوهُ", word_key: "ebd", is_particle: false, sense_retenu: "adorer", position: 5 },
    { fr: "voici", phon: "hādhā", arabic: "هَـٰذَا", word_key: null, is_particle: true, sense_retenu: null, position: 6 },
    { fr: "un chemin", phon: "ṣirāṭun", arabic: "صِرَٰطٌ", word_key: "srt", is_particle: false, sense_retenu: "chemin", position: 7 },
    { fr: "droit", phon: "mustaqīmun", arabic: "مُّسْتَقِيمٌ", word_key: "qwm", is_particle: false, sense_retenu: "droit", position: 8 }
  ];

  // UPDATE verse_analyses (ghost entry exists)
  const { error: vaErr } = await db.from('verse_analyses').update({
    translation_arab: translationArab,
    translation_explanation: explanation,
    segments: segments,
    full_translation: fullTranslation
  }).eq('id', vaId);
  console.log('VA update:', vaErr ? 'ERREUR: ' + vaErr.message : 'OK');

  console.log('\nword_daily: toutes les racines ont déjà ≥3 phrases → SKIP');

  console.log('\n═══════════════════════════════════════════');
  console.log('VERSET 3:51 — TERMINÉ');
  console.log('═══════════════════════════════════════════');
  console.log('  Allāha (alh) → « Divinité » → « Dieu »');
  console.log('  rabbī (rbb) → « Seigneurie/Autorité bienveillante » → « mon Seigneur »');
  console.log('  wa-rabbukum (rbb) → « Seigneurie/Autorité bienveillante » → « et votre Seigneur »');
  console.log('  fa-ʿbudūhu (ebd) → « Adoration/Dévotion » → « adorez-Le »');
  console.log('  ṣirāṭun (srt) → « Chemin/Voie » → « un chemin »');
  console.log('  mustaqīmun (qwm) → « Verticalité/Droiture » → « droit »');
  console.log('\n  Traduction : "Dieu est assurément mon Seigneur et votre Seigneur ; adorez-Le donc. Voici un chemin droit."');
}

run().catch(console.error);
