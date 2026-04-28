// Pipeline S89 v11-15 — Étapes 3-4 : Axes + Traduction
require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');
const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

async function upsertVWA(verse_id, word_key, sense_chosen, analysis_axes, position) {
  const { data: existing } = await sb.from('verse_word_analyses').select('id').eq('verse_id', verse_id).eq('word_key', word_key);
  if (existing && existing.length > 0) {
    await sb.from('verse_word_analyses').update({ sense_chosen, analysis_axes, position }).eq('id', existing[0].id);
    console.log(`  UPD VWA ${word_key} v${verse_id} id=${existing[0].id}`);
  } else {
    const { data, error } = await sb.from('verse_word_analyses').insert({ verse_id, word_key, sense_chosen, analysis_axes, position }).select().single();
    if (error) console.log(`  ERR VWA ${word_key}: ${error.message}`);
    else console.log(`  NEW VWA ${word_key} v${verse_id} id=${data.id}`);
  }
}

async function upsertVA(verse_id, d) {
  const { data: existing } = await sb.from('verse_analyses').select('id').eq('verse_id', verse_id);
  if (existing && existing.length > 0) {
    await sb.from('verse_analyses').update(d).eq('id', existing[0].id);
    console.log(`  UPD VA v${verse_id} id=${existing[0].id}`);
  } else {
    const { data, error } = await sb.from('verse_analyses').insert({ verse_id, ...d }).select().single();
    if (error) console.log(`  ERR VA: ${error.message}`);
    else console.log(`  NEW VA v${verse_id} id=${data.id}`);
  }
}

(async () => {
  console.log('=== PIPELINE S89 v11-15 — ÉTAPES 3-4 ===\n');

  // ============================================================
  // VERSET 11 (6004): ٱلَّذِينَ طَغَوْا۟ فِى ٱلْبِلَـٰدِ
  // "Ceux qui ont transgressé dans les cités"
  // ============================================================
  console.log('--- VERSET 89:11 ---');

  // tgy (id=2598) — طَغَوْا = verbe accompli, 3e pers. pluriel
  await upsertVWA(6004, 'tgy', 'transgresser', {
    sense_chosen: 'transgresser',
    concept_chosen: 'Transgression/Excès',
    concepts: {
      'Transgression/Excès': {
        status: 'retenu',
        senses: ['transgresser', 'dépasser les limites', 'outrepasser', 'excès', 'tyrannie'],
        axe1_verset: "Le verset décrit des personnes qui ont agi dans les cités (bilād). Le champ lexical est celui de l'action humaine dans un espace habité. La transgression s'inscrit parfaitement dans ce champ : des personnes qui dépassent les limites dans un lieu de vie collective. Le verbe est au passé (accompli), indiquant un acte achevé et constaté. Les cités sont le théâtre de cette transgression, ce qui implique un impact sur la collectivité.",
        axe2_voisins: "Les versets précédents (v6-10) mentionnent Ad, Iram aux piliers, Thamoud qui ont taillé la roche, et Pharaon aux piquets — des peuples historiques connus pour avoir exercé un pouvoir immense. Le verset 12 qui suit parle de la multiplication de la corruption. La transgression est le point de départ d'une séquence causale : transgression dans les cités → multiplication de la corruption → conséquence. Ce verset fait le lien entre les exemples historiques et leur comportement.",
        axe3_sourate: "La sourate 89 s'ouvre sur des serments cosmiques (l'aube, les nuits, le pair et l'impair) puis présente des exemples de peuples passés. Le thème central est la relation entre le pouvoir humain et ses limites. La transgression est précisément le moment où le pouvoir dépasse la limite — le franchissement d'une frontière qui n'aurait pas dû être franchie. C'est le pivot entre la description du pouvoir (v6-10) et ses conséquences (v12-14).",
        axe4_coherence: "Le Coran utilise la racine ṭ-gh-y dans de nombreux versets pour décrire le dépassement des limites. Pharaon est décrit comme ṭāghī (celui qui a transgressé) en 79:17. En 20:24, Moïse est envoyé vers Pharaon « car il a transgressé ». La transgression dans le Coran est toujours liée au pouvoir non maîtrisé — c'est l'abus du pouvoir confié. Le même mot est utilisé pour l'eau qui dépasse ses limites (69:11), montrant que la transgression est fondamentalement un dépassement de la mesure établie.",
        axe5_frequence: "La mission de l'être humain est de maintenir la justice et d'empêcher la corruption. La transgression est l'antithèse exacte de cette mission — c'est le moment où l'être humain utilise son pouvoir pour dépasser les limites au lieu de les respecter. Le verset associe la transgression à un espace collectif (les cités), ce qui montre que la transgression n'est pas un acte privé mais un acte qui affecte la communauté entière. Le khalifa est gardien des limites, le transgresseur les brise.",
        proof_ctx: "Le sens « Transgression/Excès » est le seul pertinent dans ce contexte de peuples historiques agissant dans des cités. Le verbe est au passé (accompli), compatible avec un acte achevé de transgression. Le sens « Inondation/Débordement » (l'eau qui dépasse ses rives) partage la même racine philosophique — le dépassement d'une limite — mais désigne un phénomène physique et naturel, pas une action humaine délibérée dans un cadre social."
      },
      'Inondation/Débordement': {
        status: 'nul',
        senses: ['déborder', 'inonder'],
        proof_ctx: "Le débordement physique de l'eau n'a aucun rapport avec le contexte de peuples historiques agissant dans des cités. Le verset décrit une action humaine délibérée, pas un phénomène naturel."
      }
    }
  }, 1);

  // bld (id=793) — ٱلْبِلَـٰدِ = nom défini pluriel, génitif
  await upsertVWA(6004, 'bld', 'cité', {
    sense_chosen: 'cité',
    concept_chosen: 'Territoire/Cité',
    concepts: {
      'Territoire/Cité': {
        status: 'retenu',
        senses: ['pays', 'cité', 'contrée'],
        axe1_verset: "Le verset parle de personnes qui ont transgressé « dans » un lieu. Le bilād (cités) est le cadre spatial de la transgression. Le champ lexical relie l'action humaine (transgresser) à un espace habité (les cités). La cité est le lieu où vivent les gens et où les règles de vie collective s'appliquent — transgresser dans les cités, c'est violer les règles de la vie en commun.",
        axe2_voisins: "Les versets précédents mentionnent des peuples associés à des lieux précis : Iram aux piliers (v7), « dont la pareille n'a pas été créée dans les cités » (v8), Thamoud qui ont taillé la roche dans la vallée (v9). Les cités sont le fil conducteur du passage — chaque peuple est défini par son rapport au territoire. Le v12 poursuit avec « et y ont multiplié la corruption », confirmant que les cités sont le cadre de toute cette séquence.",
        axe3_sourate: "La sourate 89 oppose les réalisations architecturales des peuples passés (piliers, roche taillée, piquets) à leur transgression dans ces mêmes cités. Le territoire n'est pas neutre — il est le lieu de la responsabilité. La cité est à la fois le témoignage du pouvoir humain (construire) et le théâtre de son abus (transgresser). Ce double rôle s'inscrit dans le thème de la sourate.",
        axe4_coherence: "Le Coran utilise bilād pour désigner les espaces habités dans de nombreux versets (3:196, 14:13, 50:36). En 89:8, le même mot apparaît : « dont la pareille n'a pas été créée dans les cités ». L'usage coranique de bilād insiste sur le rapport entre les peuples et leurs territoires — les cités ne sont pas juste des lieux géographiques mais des espaces de civilisation et de responsabilité.",
        axe5_frequence: "La cité est l'espace de la civilisation — le lieu où le khalifa exerce sa mission de justice et d'empêchement de la corruption. Transgresser dans les cités, c'est corrompre l'espace même de la civilisation. Le verset montre que la transgression n'est pas un acte isolé mais un acte qui affecte le cadre de vie collectif. La cité est le terrain de la mission du khalifa.",
        proof_ctx: "Le seul groupe de sens pertinent est « Territoire/Cité ». La forme al-bilād (défini pluriel) désigne les cités de manière connue et identifiée, renvoyant aux cités des peuples mentionnés dans les versets précédents (Ad, Thamoud, Pharaon)."
      }
    }
  }, 3);

  // VA v11
  await upsertVA(6004, {
    translation_arab: "Ceux qui ont transgressé dans les cités",
    full_translation: "qui transgressaient dans le pays",
    segments: [
      { fr: "Ceux qui", pos: "rel", phon: "alladhīna", arabic: "ٱلَّذِينَ", is_particle: true, position: 0 },
      { fr: "ont transgressé", pos: "verb_accompli", phon: "ṭaghaw", arabic: "طَغَوْا", word_key: "tgy", sense_retenu: "transgresser", position: 1 },
      { fr: "dans", pos: "prep", phon: "fī", arabic: "فِى", is_particle: true, position: 2 },
      { fr: "les cités", pos: "noun_def", phon: "al-bilād", arabic: "ٱلْبِلَـٰدِ", word_key: "bld", sense_retenu: "cité", position: 3 }
    ],
    translation_explanation: `§DEMARCHE§
Le mot **ṭaghaw** (طَغَوْا) est un verbe au passé (accompli), à la troisième personne du pluriel — une forme qui dit que l'action a été faite et achevée. La racine ṭ-gh-y, d'après les sources étymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), signifie fondamentalement « dépasser la limite, excéder la mesure ». Le verbe est précédé du pronom relatif **alladhīna** (ceux qui), qui renvoie aux peuples mentionnés dans les versets précédents : Ad, Thamoud et Pharaon. Le mot **al-bilād** (ٱلْبِلَـٰدِ) est un nom défini au pluriel, au génitif après la préposition fī (dans). Il désigne les cités, les territoires habités.

§JUSTIFICATION§
**transgressé** — Le sens retenu est « Transgression/Excès ». Le mot « transgresser » est choisi car il exprime précisément l'acte de dépasser une limite établie. L'alternative « excéder » a été écartée car elle est moins courante en français quotidien. L'alternative « tyranniser » a été écartée car elle ajoute une dimension de pouvoir sur autrui que le texte ne précise pas ici — le texte dit qu'ils ont dépassé les limites, pas qu'ils ont opprimé quelqu'un en particulier.

**les cités** — Le sens retenu est « Territoire/Cité ». Le mot « cités » est choisi car il désigne un espace habité et organisé. L'alternative « pays » (utilisée par Hamidullah) est plus vague — « cités » précise que la transgression a eu lieu dans des espaces de civilisation, ce qui renforce le lien avec les constructions monumentales décrites dans les versets précédents.

§CRITIQUE§
Les traductions courantes donnent sensiblement le même sens. La seule nuance est le choix entre « pays » et « cités » pour al-bilād. Le même mot apparaît en 89:8 où il est traduit par « cités » par la plupart des traducteurs. L'étymologie confirme que bilād désigne des espaces habités et construits, pas un territoire vague.`
  });

  console.log('VERSET 89:11 — TERMINÉ');
  console.log('  tgy → sens "Transgression/Excès" → mot "transgressé"');
  console.log('  bld → sens "Territoire/Cité" → mot "cités"');
  console.log('  Traduction : "Ceux qui ont transgressé dans les cités"\n');

  // ============================================================
  // VERSET 12 (6005): فَأَكْثَرُوا۟ فِيهَا ٱلْفَسَادَ
  // "Et y ont multiplié la corruption"
  // ============================================================
  console.log('--- VERSET 89:12 ---');

  // kṯr (id=413) — أَكْثَرُوا = verbe accompli forme IV, 3e pers. pluriel
  await upsertVWA(6005, 'kṯr', 'multiplier', {
    sense_chosen: 'multiplier',
    concept_chosen: 'Abondance/Multiplicité',
    concepts: {
      'Abondance/Multiplicité': {
        status: 'retenu',
        senses: ['être nombreux', 'abondance', 'beaucoup', 'multiplier', 'la plupart', 'souvent'],
        axe1_verset: "Le verset dit littéralement « ils ont fait abonder en elles la corruption ». Le champ lexical associe un verbe d'augmentation (akṯarū, forme IV = faire abonder) avec un objet (al-fasād = la corruption) dans un lieu (fīhā = en elles, renvoyant aux cités du verset précédent). Le sens de multiplication s'inscrit naturellement dans ce champ — la corruption n'est pas apparue une fois, elle a été rendue abondante par accumulation.",
        axe2_voisins: "Le verset précédent (v11) parle de la transgression dans les cités. Le verset suivant (v13) parle de la conséquence versée sur eux. La multiplication de la corruption est l'étape intermédiaire : d'abord la transgression (dépasser les limites), puis la corruption multipliée (les conséquences de cette transgression se répandent), puis la réponse. La forme IV (causative) montre que la multiplication est un acte délibéré, pas un accident.",
        axe3_sourate: "La sourate 89 oppose le pouvoir des peuples passés à leur comportement. La multiplication de la corruption montre que le pouvoir n'a pas été utilisé pour construire mais pour répandre le désordre. Le thème de la sourate est la responsabilité face au pouvoir — multiplier la corruption est l'usage le plus dévastateur du pouvoir confié.",
        axe4_coherence: "Le Coran associe souvent kaṯura à l'abondance des biens, des enfants ou des actes. La forme IV akṯara (faire abonder) apparaît dans le sens de « multiplier, faire en sorte qu'il y en ait beaucoup ». En 2:19, le Coran utilise la même racine pour « la plupart d'entre eux ». Le sens d'accumulation et de multiplication est constant dans l'usage coranique.",
        axe5_frequence: "La mission du khalifa est d'empêcher la corruption (fasād). Multiplier la corruption est le contraire absolu de cette mission — c'est non seulement ne pas empêcher la corruption mais activement la faire croître. La forme IV (causative) souligne la responsabilité : ce n'est pas la corruption qui est venue toute seule, ce sont eux qui l'ont fait abonder.",
        proof_ctx: "Le seul groupe de sens pertinent est « Abondance/Multiplicité ». La forme IV du verbe (akṯarū) signifie « ils ont rendu abondant, multiplié ». Aucun autre sens de la racine ne convient au contexte."
      }
    }
  }, 1);

  // fsd (id=318) — ٱلْفَسَادَ = nom défini accusatif
  await upsertVWA(6005, 'fsd', 'corruption', {
    sense_chosen: 'corruption',
    concept_chosen: 'Corruption/Désordre',
    concepts: {
      'Corruption/Désordre': {
        status: 'retenu',
        senses: ['corrompre', 'gâter', 'désordre', 'corrupteur', 'corruption', 'détériorer'],
        axe1_verset: "Le verset associe la corruption (al-fasād) à la multiplication (akṯarū) dans un lieu (fīhā = les cités). Le champ lexical est celui de la dégradation sociale : un désordre qui est activement multiplié dans un espace habité. La corruption est le résultat de la transgression mentionnée au verset précédent — quand on dépasse les limites, le résultat est la corruption de l'ordre établi.",
        axe2_voisins: "Le verset 11 établit que ces peuples ont transgressé dans les cités. Le verset 13 montre la conséquence. La corruption est le terme-clé qui justifie la conséquence : ce n'est pas la transgression seule qui provoque la réponse, mais la multiplication de la corruption qui en résulte. Le fasād est le dommage concret causé par la transgression.",
        axe3_sourate: "La sourate 89 présente des peuples qui avaient un pouvoir immense (piliers, roche taillée) mais qui l'ont utilisé pour corrompre. Le fasād est le thème central de la section v11-14 : le pouvoir non maîtrisé produit de la corruption. Le mot al-fasād est défini (avec al-), ce qui indique une corruption connue et identifiée — pas un désordre vague mais LA corruption, celle qui est reconnue comme telle.",
        axe4_coherence: "Le Coran utilise fasād massivement — c'est un terme central de sa vision du monde. En 2:205, « et quand il se détourne, il parcourt la terre pour y semer la corruption et détruire récoltes et bétail ». En 2:30, les anges demandent pourquoi placer sur terre quelqu'un qui y sèmera la corruption. Le fasād est l'opposé exact de la mission confiée à l'être humain. La racine f-s-d désigne la détérioration de ce qui était bon et ordonné.",
        axe5_frequence: "Le khalifa est explicitement chargé d'empêcher la corruption sur terre. Le mot fasād est utilisé dans le Coran pour définir l'échec de cette mission. Multiplier la corruption dans les cités, c'est la négation totale du rôle de khalifa. Le verset montre que les peuples passés n'ont pas juste échoué dans leur mission — ils ont activement fait le contraire.",
        proof_ctx: "Le sens « Corruption/Désordre » est le seul pertinent. Le mot al-fasād au sens de « corruption, détérioration de l'ordre » est utilisé ici comme objet direct du verbe « multiplier ». Aucun autre sens de cette racine ne convient."
      }
    }
  }, 3);

  // VA v12
  await upsertVA(6005, {
    translation_arab: "Et y ont multiplié la corruption",
    full_translation: "et y ont largement semé la corruption",
    segments: [
      { fr: "Et", pos: "conj", phon: "fa", arabic: "فَ", is_particle: true, position: 0 },
      { fr: "ont multiplié", pos: "verb_accompli_IV", phon: "akṯarū", arabic: "أَكْثَرُوا", word_key: "kṯr", sense_retenu: "multiplier", position: 1 },
      { fr: "en elles", pos: "prep_pron", phon: "fīhā", arabic: "فِيهَا", is_particle: true, position: 2 },
      { fr: "la corruption", pos: "noun_def", phon: "al-fasād", arabic: "ٱلْفَسَادَ", word_key: "fsd", sense_retenu: "corruption", position: 3 }
    ],
    translation_explanation: `§DEMARCHE§
Le verbe **akṯarū** (أَكْثَرُوا) est à la forme IV (af'ala), qui est une forme causative — elle dit que le sujet FAIT arriver l'action. La racine k-ṯ-r signifie « être nombreux, abondant ». À la forme IV, le sens devient « rendre nombreux, faire abonder, multiplier ». Le verbe est au passé (accompli), troisième personne du pluriel. Le pronom **fīhā** (فِيهَا) renvoie aux cités (al-bilād) du verset précédent. Le mot **al-fasād** (ٱلْفَسَادَ) est un nom défini à l'accusatif (complément d'objet direct), de la racine f-s-d qui signifie « se corrompre, se détériorer, se gâter ».

§JUSTIFICATION§
**multiplié** — Le sens retenu est « Abondance/Multiplicité ». Le mot « multiplier » est choisi car il traduit précisément la forme IV causative : ils ont FAIT que la corruption devienne abondante. L'alternative « répandre » a été écartée car elle implique une diffusion spatiale alors que la forme IV insiste sur l'augmentation quantitative. L'alternative « semer » (Hamidullah) ajoute une métaphore agricole absente du texte.

**la corruption** — Le sens retenu est « Corruption/Désordre ». Le mot « corruption » est choisi car il désigne la détérioration de l'ordre établi. L'alternative « désordre » a été écartée car elle est trop vague — le fasād implique un processus actif de dégradation, pas juste un manque d'ordre.

§CRITIQUE§
Les traductions courantes donnent sensiblement le même sens. Hamidullah traduit akṯarū par « largement semé » — le mot « semé » ajoute une métaphore de plantation absente du texte arabe, qui dit simplement « rendu abondant ». C'est une nuance stylistique qui ne change pas le sens global du verset.`
  });

  console.log('VERSET 89:12 — TERMINÉ');
  console.log('  kṯr → sens "Abondance/Multiplicité" → mot "multiplié"');
  console.log('  fsd → sens "Corruption/Désordre" → mot "corruption"');
  console.log('  Traduction : "Et y ont multiplié la corruption"\n');

  // ============================================================
  // VERSET 13 (6006): فَصَبَّ عَلَيْهِمْ رَبُّكَ سَوْطَ عَذَابٍ
  // "Alors ton seigneur a versé sur eux un fouet de châtiment"
  // ============================================================
  console.log('--- VERSET 89:13 ---');

  // Sbb (id=2638) — صَبَّ = verbe accompli
  await upsertVWA(6006, 'Sbb', 'verser', {
    sense_chosen: 'verser',
    concept_chosen: 'Versement/Écoulement',
    concepts: {
      'Versement/Écoulement': {
        status: 'retenu',
        senses: ['verser', "s'écouler", 'couler de la montagne', "payer d'un coup", 'baisser la corde dans le puits', 'suer', 'saigner'],
        axe1_verset: "Le verset dit « il a versé sur eux... un fouet de châtiment ». Le champ lexical associe le versement (ṣabba) avec une préposition directionnelle (ʿalayhim = sur eux) et un objet concret (sawṭa ʿaḏābin = fouet de châtiment). Le versement s'inscrit dans une image de mouvement descendant — quelque chose qui tombe d'en haut sur ceux qui sont en bas. Le verbe est au passé (accompli), indiquant un acte achevé et irrévocable.",
        axe2_voisins: "Les versets précédents (v11-12) ont établi la transgression et la multiplication de la corruption. Le verset 14 affirme que le seigneur est à l'affût. Le versement est la conséquence directe de la corruption : après la transgression et sa multiplication, la conséquence est « versée » sur eux. La préposition ʿalā (sur) renforce l'idée de quelque chose qui tombe d'en haut, sans échappatoire possible.",
        axe3_sourate: "La sourate 89 présente un cycle complet : pouvoir → transgression → corruption → conséquence. Le versement est le moment de la conséquence. L'image du versement est puissante car elle implique l'irrévocabilité — une fois que le liquide est versé, il ne peut pas être repris. Le thème de la sourate montre que les conséquences des actes sont inévitables.",
        axe4_coherence: "Le Coran utilise ṣabba dans un sens de châtiment en d'autres endroits. L'image du versement d'en haut est cohérente avec l'usage coranique de ʿalā pour les conséquences descendantes. La racine ṣ-b-b dans le Lane's a pour sens premier « verser de l'eau et ce qui est semblable ». Le Coran emploie ce verbe pour une conséquence qui descend sur quelqu'un comme un déversement irrésistible.",
        axe5_frequence: "Le versement sur les transgresseurs montre que la corruption n'est pas sans conséquence. Pour le khalifa, c'est un avertissement : la transgression dans les cités entraîne un retour de conséquence qui est « versé » — soudain, complet et irrévocable. Le versement est l'image de la loi naturelle de causalité entre les actes et leurs conséquences.",
        proof_ctx: "Le sens « Versement/Écoulement » est retenu car le verbe ṣabba avec la préposition ʿalā signifie littéralement « verser sur ». La distinction avec « Penchant/Descente » est que le versement est un acte soudain et complet (tout le contenu est déversé d'un coup), alors que la descente est un mouvement progressif. La distinction avec « Dispersion/Anéantissement » est que le versement est directionnel (de haut en bas, sur une cible précise), alors que la dispersion va dans toutes les directions."
      },
      'Dispersion/Anéantissement': {
        status: 'probable',
        senses: ['anéantir', 'disperser'],
        axe1_verset: "L'anéantissement s'accorde avec l'image d'une conséquence totale : verser un fouet de châtiment pourrait impliquer l'anéantissement de ceux qui le subissent. Le champ lexical du verset (fouet + châtiment) est compatible avec l'idée de destruction complète. Toutefois, le verbe ṣabba avec ʿalā (sur) implique un mouvement directionnel descendant, pas une dispersion dans toutes les directions.",
        axe2_voisins: "Les peuples mentionnés (Ad, Thamoud, Pharaon) ont effectivement été anéantis selon le récit coranique. L'anéantissement serait cohérent avec le destin de ces peuples. Mais le verset décrit l'acte de conséquence lui-même (le versement), pas son résultat (l'anéantissement). La séquence causale est : transgression → corruption → versement (pas anéantissement).",
        axe3_sourate: "L'anéantissement est un thème présent dans la sourate à travers les exemples de peuples détruits. Mais le mot utilisé est ṣabba, pas un verbe de destruction. La sourate choisit l'image du versement plutôt que celle de la destruction directe, ce qui suggère un processus (le versement) plutôt qu'un résultat (l'anéantissement).",
        axe4_coherence: "Le Coran utilise d'autres verbes pour l'anéantissement (ahlaka, dammara). Le choix de ṣabba est délibéré — le texte veut l'image du versement descendant, pas celle de la destruction frontale. L'anéantissement est une conséquence possible du versement, mais le verbe lui-même décrit le processus, pas le résultat.",
        axe5_frequence: "L'anéantissement comme fin des transgresseurs est un avertissement pour le khalifa. Mais philosophiquement, la dispersion et l'anéantissement sont des résultats, pas des processus directionnels. Le versement a une direction (de haut en bas, sur la cible), l'anéantissement n'en a pas.",
        proof_ctx: "Le sens « Dispersion/Anéantissement » est probable car les peuples mentionnés ont été détruits, mais le verbe ṣabba décrit un processus directionnel (verser de haut en bas sur quelqu'un), pas un résultat final. L'anéantissement est un acte définitif et total, le versement est un mouvement descendant et soudain. La nuance est entre le processus (versement) et le résultat (anéantissement)."
      },
      'Penchant/Descente': {
        status: 'peu_probable',
        senses: ['descendre un versant', 'pente', 'ne pas se laver la tête'],
        axe1_verset: "La descente d'un versant implique un mouvement spatial le long d'une pente. Le verset utilise ṣabba avec ʿalā (sur eux), ce qui indique un mouvement vertical descendant sur une cible précise, pas un déplacement le long d'une pente. Le champ lexical du fouet et du châtiment ne s'associe pas à la topographie mais à la conséquence d'actes.",
        axe2_voisins: "La descente d'un versant n'a pas de lien avec la séquence transgression → corruption → conséquence. Les versets voisins parlent d'actions humaines et de leurs conséquences, pas de mouvements géographiques. Le contexte est moral et social, pas topographique.",
        axe3_sourate: "La sourate ne traite pas de paysages ou de descentes physiques dans cette section. Les pentes et les versants n'ont pas de rapport avec le thème de la responsabilité humaine qui domine les versets 11-14. Le sens de descente est trop physique et spatial pour ce contexte.",
        axe4_coherence: "Le Coran n'utilise pas ṣabba dans le sens de descendre un versant dans un contexte moral. Les occurrences coraniques de cette racine sont liées au versement, pas à la topographie. Le sens de pente est attesté dans le Lane's mais reste marginal dans l'usage coranique.",
        axe5_frequence: "La descente d'un versant n'a pas de lien avec la mission du khalifa ni avec la conséquence de la transgression. C'est un sens physique qui ne s'applique pas à ce contexte de causalité morale.",
        proof_ctx: "Le sens « Penchant/Descente » est peu probable car il décrit un mouvement spatial le long d'une pente, alors que le verset décrit un acte soudain dirigé vers une cible (« sur eux »). La descente est progressive et continue, le versement est soudain et complet."
      },
      'Amour/Désir ardent': {
        status: 'nul',
        senses: ['amour passionné', 'désirer ardemment', 'tendresse du désir'],
        proof_ctx: "L'amour passionné est un état intérieur sans aucun rapport avec le contexte d'une conséquence versée sur des transgresseurs."
      }
    }
  }, 1);

  // rbb (id=253) — رَبُّكَ = nom en idafa (ton seigneur)
  await upsertVWA(6006, 'rbb', 'seigneur', {
    sense_chosen: 'seigneur',
    concept_chosen: 'Seigneurie/Autorité bienveillante',
    concepts: {
      'Seigneurie/Autorité bienveillante': {
        status: 'retenu',
        senses: ['seigneur', 'maître', 'propriétaire', 'celui qui élève', 'celui qui entretient', 'celui qui possède', 'gouverner'],
        axe1_verset: "Le verset dit « ton seigneur a versé sur eux un fouet de châtiment ». Le seigneur est le sujet de l'action — c'est lui qui verse la conséquence. La seigneurie implique une autorité qui a le pouvoir d'agir et qui agit en réponse à la transgression. Le « ton » (ka) s'adresse au prophète, rappelant que le seigneur est le même pour tous.",
        axe2_voisins: "Le verset 14 reprend « ton seigneur est à l'affût ». Le seigneur est le fil conducteur de cette section — c'est lui qui observe (v14), qui éprouve (v15-16) et qui agit en conséquence (v13). La seigneurie est une autorité vigilante et active, pas une abstraction passive.",
        axe3_sourate: "La sourate 89 commence par des serments cosmiques et présente des exemples de peuples passés. Le seigneur est présenté comme celui qui a agi envers ces peuples (v6 : « N'as-tu pas vu comment ton seigneur a agi envers Ad ? »). Le thème de la seigneurie traverse toute la sourate — le seigneur observe, éprouve et agit.",
        axe4_coherence: "Le Coran utilise la racine r-b-b dans le sens de « celui qui élève, nourrit, entretient et gouverne ». La seigneurie est bienveillante par nature — elle n'est pas tyrannique mais responsable. Le même mot rabb est utilisé dans « seigneur des mondes » (1:2), montrant une autorité universelle et bienfaisante.",
        axe5_frequence: "La seigneurie est le cadre dans lequel le khalifa opère. Le seigneur est celui qui confie la mission et qui observe son exécution. Le verset montre que la seigneurie n'est pas indifférente — elle agit quand la transgression et la corruption deviennent excessives. C'est un rappel pour le khalifa que ses actes ont des conséquences.",
        proof_ctx: "Le sens « Seigneurie/Autorité bienveillante » est le seul pertinent pour rabbuka dans ce contexte. Les autres sens de la racine (croissance, usure, éducation) ne s'appliquent pas quand le mot est utilisé comme titre d'autorité."
      },
      'Croissance/Augmentation': { status: 'nul', senses: ['augmenter', 'croître', 'faire grandir', 'nourrir', 'développer', 'excès', 'colline', 'éminence'], proof_ctx: "La croissance physique n'est pas pertinente quand rabb est utilisé comme titre d'autorité suprême." },
      'Éducation/Accompagnement': { status: 'nul', senses: ['élever un enfant', 'éduquer', 'former', 'accompagner la croissance'], proof_ctx: "L'éducation n'est pas le sens ici — le contexte est celui d'une action de conséquence, pas d'accompagnement pédagogique." },
      'Commerce/Usure': { status: 'nul', senses: ['usure', 'augmentation de dette', 'intérêt'], proof_ctx: "Le commerce et l'usure n'ont aucun rapport avec le contexte." }
    }
  }, 3);

  // swT (id=2639) — سَوْطَ = nom accusatif (objet de ṣabba)
  await upsertVWA(6006, 'swT', 'fouet', {
    sense_chosen: 'fouet',
    concept_chosen: 'Fouet/Correction',
    concepts: {
      'Fouet/Correction': {
        status: 'retenu',
        senses: ['fouet', 'frapper avec un fouet', 'celui qui porte le fouet', 'ustensile pour remuer'],
        axe1_verset: "Le verset dit « un fouet de châtiment ». Le fouet est l'instrument par lequel la conséquence se matérialise. Le champ lexical associe le versement (ṣabba) au fouet (sawṭ) et au châtiment (ʿaḏāb) — l'image est celle d'un coup qui descend d'en haut et frappe. Le fouet est un objet concret qui produit une douleur immédiate et visible.",
        axe2_voisins: "Les versets précédents décrivent des peuples puissants (piliers, roche taillée, piquets). Le fouet contraste avec cette puissance — quelle que soit la grandeur de leurs constructions, la conséquence est un simple fouet qui suffit. Le verset suivant (v14) affirme que le seigneur est à l'affût, prolongeant l'image d'une autorité qui corrige.",
        axe3_sourate: "La sourate 89 oppose le pouvoir humain à la conséquence de son abus. Le fouet est l'instrument de la correction — il ne détruit pas complètement mais inflige une douleur proportionnée. D'après les sources étymologiques, le fouet est nommé ainsi (sawṭ) parce qu'il « mélange la chair avec le sang » — l'impact du fouet produit un mélange, une confusion entre ce qui était séparé.",
        axe4_coherence: "Le mot sawṭ n'apparaît qu'une seule fois dans le Coran (89:13). Le Lane's explique que le mot vient de la racine s-w-ṭ qui signifie « mélanger » — le fouet est ainsi nommé parce que ses coups mélangent la chair et le sang. Cette étymologie révèle que le fouet n'est pas juste un instrument de frappe mais un instrument de confusion et de mélange — les peuples qui ont semé la corruption voient leurs affaires « mélangées » et confondues.",
        axe5_frequence: "Le fouet comme instrument de correction rappelle au khalifa que la transgression a des conséquences tangibles et douloureuses. Le fouet n'est pas une arme de destruction massive — c'est un instrument de correction qui inflige une douleur mesurée. La mission du khalifa est d'empêcher que cette correction soit nécessaire en maintenant l'ordre.",
        proof_ctx: "Le sens « Fouet/Correction » est retenu car sawṭa ʿaḏābin signifie littéralement « un fouet de châtiment ». La distinction avec « Mélange/Agitation » est que le fouet est un objet concret utilisé pour frapper, tandis que le mélange est un processus abstrait. Cependant, l'étymologie relie les deux : le fouet est nommé ainsi parce qu'il mélange la chair avec le sang. Le sens retenu est l'objet concret (fouet), tout en sachant que son nom même porte l'idée du mélange."
      },
      'Mélange/Agitation': {
        status: 'probable',
        senses: ['mélanger', 'remuer', 'confondre', 'être mélangé'],
        axe1_verset: "Le mélange pourrait s'appliquer si on lit sawṭ comme un acte de confusion plutôt qu'un objet physique. Le verset dirait alors que le seigneur a « versé sur eux un mélange de châtiment » — une confusion et un embrouillement de leurs affaires comme conséquence. Le champ lexical du versement est compatible avec l'idée de mélanger (on verse pour mélanger).",
        axe2_voisins: "Le mélange comme confusion des affaires serait cohérent avec la suite : après la transgression et la corruption, les affaires des peuples sont « mélangées » et confondues. Toutefois, les versets voisins utilisent des images concrètes (piliers, roche, piquets, fouet), pas des abstractions.",
        axe3_sourate: "La sourate utilise des images concrètes et visuelles. Le mélange comme abstraction est moins en accord avec le style du passage que le fouet comme objet concret. Les peuples sont décrits par leurs constructions physiques, la conséquence devrait aussi être physique et concrète.",
        axe4_coherence: "Le Lane's confirme que le mot sawṭ signifie d'abord « fouet » et que le nom vient du sens de « mélanger ». L'usage arabe standard de sawṭ est « fouet » — le sens de mélange est l'étymologie du mot, pas son usage courant.",
        axe5_frequence: "Le mélange des affaires comme conséquence de la corruption est un avertissement valide pour le khalifa : corrompre mène à la confusion. Mais le texte utilise le mot sawṭ dans sa construction standard (sawṭa ʿaḏābin = un fouet de châtiment), pas comme verbe de mélange.",
        proof_ctx: "Le sens « Mélange/Agitation » est probable car c'est l'étymologie même du mot sawṭ. Le fouet est appelé ainsi parce qu'il « mélange la chair avec le sang ». Mais dans l'usage linguistique, sawṭ en tant que nom signifie « fouet » comme objet concret. La nuance est entre l'étymologie (mélange) et l'usage (fouet)."
      },
      'Sens isolé/Plante': {
        status: 'nul',
        senses: ['tige de poireau'],
        proof_ctx: "La tige de poireau n'a aucun rapport avec le contexte de conséquence pour des transgresseurs."
      }
    }
  }, 4);

  // edb (id=314) — عَذَابٍ = nom indéfini génitif (mudaf ilayh)
  await upsertVWA(6006, 'edb', 'châtiment', {
    sense_chosen: 'châtiment',
    concept_chosen: 'Châtiment/Punition',
    concepts: {
      'Châtiment/Punition': {
        status: 'retenu',
        senses: ['punir', 'châtier', 'tourmenter', 'châtiment'],
        axe1_verset: "Le verset dit « un fouet de châtiment ». Le mot ʿaḏāb est en position de mudāf ilayh (complément du nom) — il qualifie le fouet. Le champ lexical associe le versement, le fouet et le châtiment en une image cohérente de conséquence douloureuse. Le châtiment est le contenu de ce qui est versé, le fouet est l'instrument par lequel il se matérialise.",
        axe2_voisins: "La séquence v11-13 est une chaîne causale : transgression → corruption → conséquence (châtiment). Le châtiment est le terme final de cette chaîne. Les versets précédents ont établi les causes (transgression, corruption) et ce verset établit l'effet (châtiment). Le verset 14 confirme que le seigneur surveille, justifiant l'existence du châtiment.",
        axe3_sourate: "La sourate 89 présente les peuples passés et leurs destins. Le châtiment n'est pas présenté comme arbitraire mais comme la conséquence logique de la transgression et de la corruption. Le thème de la sourate est la relation entre les actes et leurs conséquences — le châtiment est l'illustration de cette loi.",
        axe4_coherence: "Le mot ʿaḏāb apparaît 373 fois dans le Coran, ce qui en fait un terme majeur. La racine ʿ-ḏ-b a un sens premier surprenant : « eau douce » (ʿaḏb). Le châtiment (ʿaḏāb) partage la même racine que la douceur, ce qui suggère que le châtiment n'est pas une cruauté mais un processus qui « purifie » comme l'eau douce. Le Coran utilise ʿaḏāb dans des contextes variés, toujours comme conséquence d'actes.",
        axe5_frequence: "Le châtiment comme conséquence de la corruption est un avertissement fondamental pour le khalifa. La mission de l'être humain est d'empêcher la corruption — le châtiment montre ce qui arrive quand cette mission échoue. Le verset ne présente pas le châtiment comme une punition capricieuse mais comme la conséquence naturelle de la transgression multipliée.",
        proof_ctx: "Le sens « Châtiment/Punition » est le seul pertinent pour ʿaḏāb dans ce contexte. Le sens premier de la racine (eau douce, douceur) est philosophiquement intéressant mais ne s'applique pas ici. L'abstention (un autre sens de la racine) est trop éloignée du contexte."
      },
      'Douceur': { status: 'nul', senses: ['doux', 'sucré', 'eau douce', 'agréable'], proof_ctx: "La douceur ne s'applique pas dans le contexte d'un fouet versé sur des transgresseurs. Malgré le lien étymologique profond entre la douceur et le châtiment dans cette racine, le contexte impose le sens de châtiment." },
      'Abstention': { status: 'nul', senses: ["s'abstenir", 'quitter'], proof_ctx: "L'abstention n'a aucun rapport avec le contexte de conséquence." },
      'Eau/Liquide': { status: 'nul', senses: ["poussières flottant sur l'eau"], proof_ctx: "Sens physique sans rapport avec le contexte." },
      'Végétation/Plante': { status: 'nul', senses: ['arbre vénéneux'], proof_ctx: "Sens botanique sans rapport avec le contexte." }
    }
  }, 5);

  // VA v13
  await upsertVA(6006, {
    translation_arab: "Alors ton seigneur a versé sur eux un fouet de châtiment",
    full_translation: "ton Seigneur a déversé sur eux un fouet de châtiment",
    segments: [
      { fr: "Alors", pos: "conj", phon: "fa", arabic: "فَ", is_particle: true, position: 0 },
      { fr: "a versé", pos: "verb_accompli", phon: "ṣabba", arabic: "صَبَّ", word_key: "Sbb", sense_retenu: "verser", position: 1 },
      { fr: "sur eux", pos: "prep_pron", phon: "ʿalayhim", arabic: "عَلَيْهِمْ", is_particle: true, position: 2 },
      { fr: "ton seigneur", pos: "noun_idafa", phon: "rabbuka", arabic: "رَبُّكَ", word_key: "rbb", sense_retenu: "seigneur", position: 3 },
      { fr: "un fouet", pos: "noun", phon: "sawṭa", arabic: "سَوْطَ", word_key: "swT", sense_retenu: "fouet", position: 4 },
      { fr: "de châtiment", pos: "noun_indef", phon: "ʿaḏābin", arabic: "عَذَابٍ", word_key: "edb", sense_retenu: "châtiment", position: 5 }
    ],
    translation_explanation: `§DEMARCHE§
Le verbe **ṣabba** (صَبَّ) est au passé (accompli), troisième personne du singulier masculin. La racine ṣ-b-b signifie « verser un liquide de haut en bas ». La préposition **ʿalā** (sur) indique la direction descendante de l'action — le versement va vers ceux qui le subissent. Le sujet est **rabbuka** (ton seigneur), en construction possessive (idāfa) avec le pronom de la deuxième personne. Le mot **sawṭa** (سَوْطَ) est à l'accusatif (complément d'objet) — c'est ce qui est versé. D'après les sources étymologiques, sawṭ signifie « fouet, lanière de cuir tressée » et son nom vient de la racine s-w-ṭ (mélanger), car le fouet « mélange la chair avec le sang ». Le mot **ʿaḏābin** (عَذَابٍ) est au génitif indéfini (complément du nom de sawṭ). Le texte dit littéralement « un fouet de châtiment » — le châtiment est la nature du fouet, pas un ajout.

§JUSTIFICATION§
**versé** — Le sens retenu est « Versement/Écoulement ». Le mot « verser » est choisi car il traduit le mouvement descendant et soudain du verbe ṣabba. L'alternative « déverser » (Hamidullah) est proche mais ajoute une idée de quantité excessive absente du texte. L'alternative « faire pleuvoir » ajoute une métaphore météorologique.

**fouet** — Le sens retenu est « Fouet/Correction ». Le mot « fouet » est choisi car c'est le sens standard de sawṭ en arabe. L'étymologie relie le fouet au mélange (le fouet mélange la chair et le sang), mais l'usage est celui de l'instrument concret.

**châtiment** — Le sens retenu est « Châtiment/Punition ». Le mot « châtiment » est choisi car il désigne une conséquence douloureuse en réponse à une faute. L'alternative « tourment » a été écartée car elle implique une durée prolongée, alors que le versement d'un fouet est soudain.

§CRITIQUE§
Les traductions courantes donnent sensiblement le même sens. Hamidullah traduit « déversé » au lieu de « versé » — la nuance est que « déverser » implique une grande quantité, un excès, alors que le texte utilise simplement ṣabba (verser). L'image originale est plus sobre et plus forte : un simple versement, pas un déluge.`
  });

  console.log('VERSET 89:13 — TERMINÉ');
  console.log('  Sbb → sens "Versement/Écoulement" → mot "versé"');
  console.log('  rbb → sens "Seigneurie/Autorité bienveillante" → mot "seigneur"');
  console.log('  swT → sens "Fouet/Correction" → mot "fouet"');
  console.log('  edb → sens "Châtiment/Punition" → mot "châtiment"');
  console.log('  Traduction : "Alors ton seigneur a versé sur eux un fouet de châtiment"\n');

  // ============================================================
  // VERSET 14 (6007): إِنَّ رَبَّكَ لَبِٱلْمِرْصَادِ
  // "Certes, ton seigneur est à l'affût"
  // ============================================================
  console.log('--- VERSET 89:14 ---');

  // rsd (id=2024) — ٱلْمِرْصَادِ = nom de lieu (mif'āl) défini
  await upsertVWA(6007, 'rsd', 'guetter', {
    sense_chosen: 'guetter',
    concept_chosen: 'Guet/Surveillance',
    concepts: {
      'Guet/Surveillance': {
        status: 'retenu',
        senses: ['guetter', 'embuscade'],
        axe1_verset: "Le verset dit « certes, ton seigneur est au mirṣād (lieu de guet) ». Le champ lexical associe la particule d'insistance (inna... la-), le seigneur et le lieu de surveillance. Le guet est un état permanent et actif — le seigneur ne se contente pas d'exister, il observe. Le mot mirṣād est un nom de lieu (forme mif'āl), signifiant « le lieu d'où l'on guette » — le seigneur est positionné à un point d'observation d'où rien n'échappe.",
        axe2_voisins: "Le verset précédent (v13) montre le seigneur qui agit (verser le fouet). Le verset 14 explique pourquoi cette action est possible : le seigneur est à l'affût, il surveille en permanence. Les versets suivants (v15-20) montrent ce que le seigneur observe — le comportement de l'être humain face aux épreuves et aux biens. Le guet est le pont entre l'action passée (v13) et l'observation présente (v15-20).",
        axe3_sourate: "La sourate 89 passe de l'histoire (peuples passés) au présent (l'être humain). Le verset 14 est la charnière : le seigneur qui a agi envers les peuples passés est le même qui observe le comportement actuel. Le guet signifie que l'observation est continue — ce qui s'est passé pour Ad, Thamoud et Pharaon peut se reproduire.",
        axe4_coherence: "Le Coran utilise la racine r-ṣ-d pour le guet et la surveillance dans plusieurs versets. En 72:27, « il place devant lui et derrière lui des gardes (raṣad) ». Le sens de surveillance attentive et permanente est constant. Le mirṣād est le lieu stratégique d'où l'on voit tout sans être vu — l'image est celle d'une vigilance totale et ininterrompue.",
        axe5_frequence: "Le guet du seigneur est un rappel fondamental pour le khalifa : aucun acte n'échappe à l'observation. La mission du khalifa se fait sous surveillance constante — ce n'est pas une menace mais une réalité de la responsabilité. Le guet implique que la justice n'est pas aveugle mais vigilante et précise.",
        proof_ctx: "Le seul groupe de sens pertinent est « Guet/Surveillance ». Le mot mirṣād (forme mif'āl = nom de lieu) signifie « lieu d'observation ». Le sens d'embuscade est inclus mais le contexte insiste sur la surveillance permanente plutôt que sur l'attaque surprise."
      }
    }
  }, 2);

  // VA v14
  await upsertVA(6007, {
    translation_arab: "Certes, ton seigneur est à l'affût",
    full_translation: "Car ton Seigneur est certes à l'affût",
    segments: [
      { fr: "Certes", pos: "particle", phon: "inna", arabic: "إِنَّ", is_particle: true, position: 0 },
      { fr: "ton seigneur", pos: "noun_idafa", phon: "rabbaka", arabic: "رَبَّكَ", word_key: "rbb", sense_retenu: "seigneur", position: 1 },
      { fr: "est à l'affût", pos: "noun_lieu_def", phon: "la-bi-l-mirṣād", arabic: "لَبِٱلْمِرْصَادِ", word_key: "rsd", sense_retenu: "guetter", position: 2 }
    ],
    translation_explanation: `§DEMARCHE§
La particule **inna** (إِنَّ) ouvre la phrase nominale et indique l'insistance — « certes, assurément ». Le mot **rabbaka** (رَبَّكَ) est à l'accusatif (sujet de inna), en construction possessive avec le pronom « ton ». Le **lām** qui précède **bi-l-mirṣād** est un lām d'insistance qui renforce inna — double insistance dans cette phrase courte. La préposition **bi** signifie « à, dans ». Le mot **al-mirṣād** (ٱلْمِرْصَادِ) est un nom de lieu sur la forme mif'āl, de la racine r-ṣ-d (guetter, surveiller). Cette forme grammaticale (mif'āl) désigne le lieu où se fait l'action : le lieu d'où l'on guette. Le texte dit littéralement « ton seigneur est au lieu de guet ».

§JUSTIFICATION§
**à l'affût** — Le sens retenu est « Guet/Surveillance ». L'expression « à l'affût » est choisie car elle traduit à la fois la position fixe (être posté quelque part) et la vigilance active (observer attentivement). L'alternative « au poste de surveillance » a été écartée car elle est trop administrative. L'alternative « en embuscade » a été écartée car elle implique une attaque surprise prévue, alors que le texte décrit une surveillance permanente.

§CRITIQUE§
Les traductions courantes donnent sensiblement le même sens — « à l'affût » est la traduction standard de bi-l-mirṣād. Hamidullah ajoute « Car » au début, interprétant le fa comme causal, mais le texte dit simplement inna (certes). Cette nuance ne change pas le sens global du verset.`
  });

  console.log('VERSET 89:14 — TERMINÉ');
  console.log('  rsd → sens "Guet/Surveillance" → mot "à l\'affût"');
  console.log('  Traduction : "Certes, ton seigneur est à l\'affût"\n');

  // ============================================================
  // VERSET 15 (6008): فَأَمَّا ٱلْإِنسَـٰنُ إِذَا مَا ٱبْتَلَىٰهُ رَبُّهُۥ فَأَكْرَمَهُۥ وَنَعَّمَهُۥ فَيَقُولُ رَبِّىٓ أَكْرَمَنِ
  // "Quant à l'être humain, quand son seigneur l'éprouve en l'honorant et en le comblant, il dit : Mon seigneur m'a honoré"
  // ============================================================
  console.log('--- VERSET 89:15 ---');

  // ans (id=866) — ٱلْإِنسَـٰنُ = nom défini
  await upsertVWA(6008, 'ans', 'être humain', {
    sense_chosen: 'être humain',
    concept_chosen: 'Familiarité/Sociabilité',
    concepts: {
      'Familiarité/Sociabilité': {
        status: 'retenu',
        senses: ['être familier', 'être sociable', 'être humain', 'humains (ins)'],
        axe1_verset: "Le verset parle de « l'être humain » comme sujet d'une réflexion générale sur le comportement face à l'épreuve. Le mot al-insān est défini (avec al-), ce qui désigne l'être humain en général, pas un individu particulier. Le champ lexical du verset (éprouver, honorer, combler, dire) est celui de la psychologie humaine universelle. L'être humain est celui qui est capable de familiarité et de sociabilité — d'où son nom (ins = être familier).",
        axe2_voisins: "Les versets précédents (v6-14) parlaient de peuples spécifiques. Le verset 15 passe au général : « l'être humain ». Ce changement de perspective est significatif — le texte passe de l'histoire à la psychologie universelle. Les versets 15-20 décrivent un schéma comportemental qui n'est pas propre à un peuple mais à l'humanité entière.",
        axe3_sourate: "La sourate 89 oppose les exemples historiques (v6-14) au comportement humain universel (v15-20). L'être humain est présenté comme le sujet central de la deuxième partie de la sourate. Son comportement face aux biens et aux épreuves est le thème de cette section.",
        axe4_coherence: "Le Coran utilise al-insān dans de nombreux versets pour désigner l'être humain dans sa nature universelle (17:11, 70:19, 75:3, 96:2). La racine a-n-s signifie « être familier, sociable ». L'être humain est nommé ainsi parce qu'il est un être social par nature. Le Coran utilise ce mot quand il veut parler de la condition humaine en général, pas d'un groupe particulier.",
        axe5_frequence: "L'être humain est celui à qui la mission de khalifa est confiée. Le verset décrit une faiblesse fondamentale : l'être humain interprète les biens comme un honneur et la restriction comme une humiliation. Cette réaction instinctive est ce que le khalifa doit dépasser pour accomplir sa mission — comprendre que l'épreuve par l'abondance est aussi un test que l'épreuve par la restriction.",
        proof_ctx: "Le sens « Familiarité/Sociabilité » est retenu car al-insān désigne l'être humain en tant qu'être social et familier. Le sens « Perception » (percevoir, voir de loin) est nul dans ce contexte — le verset parle de la nature humaine, pas de la perception sensorielle."
      },
      'Perception': {
        status: 'nul',
        senses: ['percevoir', 'voir de loin'],
        proof_ctx: "La perception sensorielle n'est pas pertinente quand le mot désigne l'être humain en tant que catégorie."
      }
    }
  }, 1);

  // blw (id=918) — ٱبْتَلَىٰهُ = verbe accompli forme VIII
  await upsertVWA(6008, 'blw', 'éprouver', {
    sense_chosen: 'éprouver',
    concept_chosen: 'Épreuve/Test',
    concepts: {
      'Épreuve/Test': {
        status: 'retenu',
        senses: ['éprouver', 'tester', 'affliction'],
        axe1_verset: "Le verset dit « quand son seigneur l'éprouve en l'honorant et en le comblant ». L'épreuve (ibtalāhu) est l'action du seigneur sur l'être humain. Le champ lexical est celui du test : le seigneur éprouve, l'être humain réagit. Ce qui est remarquable est que l'épreuve ici n'est pas une affliction mais un honneur — le test consiste à recevoir des bienfaits et à voir comment on réagit.",
        axe2_voisins: "Le verset 16 utilise le même verbe ibtalāhu mais dans le contexte inverse : l'épreuve par la restriction des biens. Les deux versets forment un parallèle — l'épreuve par l'abondance (v15) et l'épreuve par la restriction (v16). L'être humain échoue dans les deux cas, interprétant l'abondance comme honneur et la restriction comme humiliation.",
        axe3_sourate: "La sourate 89 passe des exemples historiques au comportement humain universel. L'épreuve est le mécanisme par lequel le seigneur teste l'être humain. Les peuples passés ont été éprouvés par le pouvoir (v6-10) et ont transgressé (v11-12). L'être humain en général est éprouvé par les biens (v15-16) et réagit de manière erronée.",
        axe4_coherence: "Le Coran utilise la racine b-l-w pour l'épreuve dans de nombreux versets (2:155, 21:35, 67:2). En 67:2, Dieu a créé la vie et la mort « pour vous éprouver, lequel de vous est le meilleur en acte ». L'épreuve coranique n'est pas une punition mais un test de comportement — elle révèle la nature profonde de celui qui est éprouvé.",
        axe5_frequence: "L'épreuve est le mécanisme par lequel le khalifa est testé dans sa mission. L'épreuve par l'abondance est souvent plus difficile que l'épreuve par la restriction, car l'abondance peut faire oublier la responsabilité. Le verset montre que le khalifa doit comprendre que tout bien reçu est un test, pas un droit acquis.",
        proof_ctx: "Le sens « Épreuve/Test » est le seul pertinent. Le sens « Usure » (user un vêtement) est nul dans ce contexte de relation entre le seigneur et l'être humain."
      },
      'Usure': {
        status: 'nul',
        senses: ['user'],
        proof_ctx: "L'usure physique (user un vêtement) n'a aucun rapport avec le contexte d'un test divin de l'être humain."
      }
    }
  }, 3);

  // krm (id=1470) — فَأَكْرَمَهُۥ = verbe accompli forme IV
  await upsertVWA(6008, 'krm', 'honorable', {
    sense_chosen: 'honorable',
    concept_chosen: 'Générosité/Noblesse',
    concepts: {
      'Générosité/Noblesse': {
        status: 'retenu',
        senses: ['généreux', 'noble', 'honorable'],
        axe1_verset: "Le verbe akramahu (forme IV = faire devenir karīm, honorer) est l'une des deux manières dont le seigneur éprouve l'être humain. Le champ lexical associe l'épreuve (ibtalā), l'honneur (akrama) et le bienfait (naʿʿama). La noblesse et l'honneur sont le contenu de l'épreuve — le seigneur rend l'être humain honorable pour voir comment il réagit à cet honneur.",
        axe2_voisins: "Le verset 17 reprend le même verbe à la forme IV négative : « vous n'honorez pas l'orphelin » (lā tukrimūna). Le parallèle est frappant : en v15, le seigneur honore l'être humain ; en v17, l'être humain n'honore pas l'orphelin. L'honneur reçu n'est pas transmis — c'est précisément l'échec que le texte dénonce.",
        axe3_sourate: "La sourate 89 montre que l'honneur et les biens sont des épreuves, pas des récompenses. Le thème de la générosité traverse la section v15-20 : le seigneur est généreux (il honore et comble), l'être humain ne l'est pas (il n'honore pas l'orphelin, ne nourrit pas le pauvre). La noblesse est une qualité qui devrait être transmise, pas accumulée.",
        axe4_coherence: "Le Coran utilise la racine k-r-m pour la générosité et la noblesse dans de nombreux versets. En 17:70, « Nous avons honoré (karramnā) les fils d'Adam ». En 49:13, « le plus noble d'entre vous auprès de Dieu est le plus pieux ». La noblesse coranique n'est pas héréditaire ou matérielle — elle est liée au comportement et à la piété.",
        axe5_frequence: "La générosité et l'honneur sont au cœur de la mission du khalifa. Le khalifa honore les autres (v17 : l'orphelin) parce qu'il a été honoré par le seigneur (v15). Le verset montre que l'honneur est un test : l'être humain qui comprend sa mission transmet l'honneur reçu, celui qui échoue le garde pour lui.",
        proof_ctx: "Le sens « Générosité/Noblesse » est le seul pertinent. La forme IV akrama signifie « rendre noble/honorable, honorer ». Le sens « Fruit/Abondance » (la vigne est karīma) est nul dans ce contexte de relation entre le seigneur et l'être humain."
      },
      'Fruit/Abondance': {
        status: 'nul',
        senses: ['vigne'],
        proof_ctx: "La vigne et les fruits n'ont aucun rapport avec le contexte d'un seigneur qui honore un être humain."
      }
    }
  }, 5);

  // nem (id=264) — وَنَعَّمَهُۥ = verbe accompli forme II
  await upsertVWA(6008, 'nem', 'combler', {
    sense_chosen: 'combler',
    concept_chosen: 'Bienfait/Faveur',
    concepts: {
      'Bienfait/Faveur': {
        status: 'retenu',
        senses: ['bienfait', 'faveur', 'bénédiction', 'richesse', 'accorder un bienfait', 'nourrir bien', 'combler'],
        axe1_verset: "Le verbe naʿʿamahu (forme II = intensif de naʿima) signifie « il l'a comblé de bienfaits ». Le champ lexical associe l'épreuve, l'honneur et le bienfait — trois termes qui forment une séquence : le seigneur éprouve en honorant ET en comblant. Le bienfait est la deuxième composante de l'épreuve par l'abondance.",
        axe2_voisins: "Le verset 15 juxtapose akramahu (il l'a honoré) et naʿʿamahu (il l'a comblé). L'honneur est une distinction sociale, le bienfait est un apport matériel. Le verset 16 présente le contraire : la restriction de la subsistance. Le bienfait en v15 s'oppose à la restriction en v16, formant une paire d'épreuves complémentaires.",
        axe3_sourate: "La sourate 89 montre que les bienfaits sont des épreuves. Les peuples passés avaient des bienfaits immenses (piliers, constructions, pouvoir) mais ont transgressé. L'être humain en général reçoit des bienfaits et conclut « mon seigneur m'a honoré » — une conclusion erronée qui confond bienfait et mérite.",
        axe4_coherence: "Le Coran utilise la racine n-ʿ-m massivement pour les bienfaits. En 14:34, « si vous comptez les bienfaits de Dieu, vous ne pourrez les dénombrer ». La forme II naʿʿama (combler de bienfaits) est intensive — elle indique que les bienfaits sont donnés en abondance, pas au compte-gouttes. Le Coran insiste sur l'abondance des bienfaits pour montrer que l'être humain est comblé au-delà de ses besoins.",
        axe5_frequence: "Le bienfait est un outil de l'épreuve du khalifa. Le khalifa qui reçoit des bienfaits doit les redistribuer (v17-18 : honorer l'orphelin, nourrir le pauvre). Le verset montre que l'erreur de l'être humain est de croire que les bienfaits lui appartiennent — alors qu'ils sont un test de sa capacité à les partager.",
        proof_ctx: "Le sens « Bienfait/Faveur » est retenu car la forme II naʿʿama signifie « combler de bienfaits ». La distinction avec « Douceur/Aisance » est que le bienfait est un don extérieur dirigé vers l'autre (le seigneur DONNE à l'être humain), alors que la douceur est un état intérieur de confort. Le verbe est transitif (naʿʿamahu = il l'a comblé), ce qui confirme que c'est un acte dirigé vers l'extérieur."
      },
      'Douceur/Aisance': {
        status: 'probable',
        senses: ['douceur', 'tendresse', 'souplesse', 'délicatesse', 'vie agréable', 'confort', 'aisance', 'fraîcheur', 'floraison'],
        axe1_verset: "La douceur de vie pourrait s'appliquer si naʿʿamahu signifie « il lui a donné une vie douce et agréable ». Le champ lexical du verset (éprouver, honorer, vie douce) serait cohérent — le seigneur éprouve en donnant une vie confortable. La douceur est un état résultant, pas un don ponctuel.",
        axe2_voisins: "La vie douce en v15 s'opposerait à la restriction en v16. Mais le verset 16 parle spécifiquement de la subsistance (rizq), pas du confort en général. La douceur est plus vague que le bienfait — elle décrit un résultat plutôt qu'un acte.",
        axe3_sourate: "Les peuples passés vivaient dans le confort (constructions monumentales). Mais la sourate insiste sur les actes du seigneur, pas sur les états résultants. La forme II est causative et intensive, ce qui suggère un acte plutôt qu'un état.",
        axe4_coherence: "Le Coran utilise niʿma (bienfait) beaucoup plus souvent que naʿīm (douceur de vie) en rapport avec les dons du seigneur. La forme II est typiquement un acte transitif, pas la description d'un état.",
        axe5_frequence: "La douceur de vie comme épreuve est valide — le confort peut endormir la vigilance du khalifa. Mais philosophiquement, la douceur est un état passif, tandis que le bienfait est un don actif. Le verset insiste sur l'acte du seigneur (il a éprouvé, il a honoré, il a comblé), pas sur l'état de l'être humain.",
        proof_ctx: "Le sens « Douceur/Aisance » est probable car naʿʿama peut signifier « rendre la vie douce ». Mais la forme II est transitive et causative (il l'a FAIT devenir dans le bienfait), ce qui correspond mieux à un don actif (bienfait) qu'à un état résultant (douceur). La nuance philosophique est entre un acte dirigé (combler = donner activement des biens) et un état passif (rendre la vie douce)."
      },
      'Bétail/Animaux': { status: 'nul', senses: ['bétail', 'troupeau', 'chameaux', 'autruche'], proof_ctx: "Le bétail n'a aucun rapport avec le contexte." },
      'Affirmation': { status: 'nul', senses: ['oui', 'certes', 'excellent'], proof_ctx: "L'affirmation n'est pas pertinente ici." }
    }
  }, 6);

  // VA v15
  await upsertVA(6008, {
    translation_arab: "Quant à l'être humain, quand son seigneur l'éprouve en l'honorant et en le comblant, il dit : Mon seigneur m'a honoré",
    full_translation: "Quant à l'homme, lorsque son Seigneur l'éprouve en l'honorant et en le comblant de bienfaits, il dit : «Mon Seigneur m'a honoré»",
    segments: [
      { fr: "Quant à", pos: "particle", phon: "fa-ammā", arabic: "فَأَمَّا", is_particle: true, position: 0 },
      { fr: "l'être humain", pos: "noun_def", phon: "al-insān", arabic: "ٱلْإِنسَـٰنُ", word_key: "ans", sense_retenu: "être humain", position: 1 },
      { fr: "quand", pos: "particle", phon: "iḏā mā", arabic: "إِذَا مَا", is_particle: true, position: 2 },
      { fr: "l'éprouve", pos: "verb_accompli_VIII", phon: "ibtalāhu", arabic: "ٱبْتَلَىٰهُ", word_key: "blw", sense_retenu: "éprouver", position: 3 },
      { fr: "son seigneur", pos: "noun_idafa", phon: "rabbuhu", arabic: "رَبُّهُۥ", word_key: "rbb", sense_retenu: "seigneur", position: 4 },
      { fr: "en l'honorant", pos: "verb_accompli_IV", phon: "fa-akramahu", arabic: "فَأَكْرَمَهُۥ", word_key: "krm", sense_retenu: "honorable", position: 5 },
      { fr: "et en le comblant", pos: "verb_accompli_II", phon: "wa-naʿʿamahu", arabic: "وَنَعَّمَهُۥ", word_key: "nem", sense_retenu: "combler", position: 6 },
      { fr: "il dit :", pos: "verb_inaccompli", phon: "fa-yaqūlu", arabic: "فَيَقُولُ", word_key: "qwl", sense_retenu: "dire", position: 7 },
      { fr: "Mon seigneur", pos: "noun_idafa", phon: "rabbī", arabic: "رَبِّىٓ", is_particle: true, position: 8 },
      { fr: "m'a honoré", pos: "verb_accompli_IV", phon: "akramani", arabic: "أَكْرَمَنِ", is_particle: true, position: 9 }
    ],
    translation_explanation: `§DEMARCHE§
La particule **fa-ammā** (فَأَمَّا) introduit une condition : « quant à... ». Elle marque un changement de sujet — le texte passe des peuples historiques à l'être humain en général. Le mot **al-insān** (ٱلْإِنسَـٰنُ) est défini par al-, désignant l'être humain comme catégorie universelle. La particule temporelle **iḏā mā** (إِذَا مَا) signifie « quand, chaque fois que ». Le verbe **ibtalāhu** (ٱبْتَلَىٰهُ) est à la forme VIII de b-l-w, au passé, avec le pronom suffixe hu (le). La forme VIII ajoute une nuance de réflexivité — l'épreuve engage celui qui éprouve et celui qui est éprouvé dans une relation. Le sujet est **rabbuhu** (son seigneur).

Le verbe **fa-akramahu** (فَأَكْرَمَهُۥ) est à la forme IV de k-r-m — une forme causative qui signifie « il l'a rendu honorable, il l'a honoré ». Le verbe **wa-naʿʿamahu** (وَنَعَّمَهُۥ) est à la forme II de n-ʿ-m — une forme intensive qui signifie « il l'a comblé abondamment de bienfaits ». Ces deux verbes sont des explicitations de l'épreuve : le seigneur éprouve EN honorant et EN comblant. L'épreuve n'est pas une affliction ici — c'est un test par l'abondance.

Le verbe **fa-yaqūlu** (فَيَقُولُ) est à l'inaccompli (présent), ce qui indique une réaction habituelle et récurrente — chaque fois que l'être humain est comblé, il réagit de la même façon. La citation **rabbī akramani** (Mon seigneur m'a honoré) reprend le même verbe akrama — l'être humain interprète l'épreuve comme un honneur mérité.

§JUSTIFICATION§
**l'être humain** — Le sens retenu est « Familiarité/Sociabilité ». Le mot « être humain » est choisi car il est plus précis et universel que « homme » (qui peut exclure la femme) et moins technique que « humain ». L'alternative « homme » (Hamidullah) a été écartée car le texte parle de l'insān, qui désigne tout être humain sans distinction de genre.

**l'éprouve** — Le sens retenu est « Épreuve/Test ». Le mot « éprouver » est choisi car il combine l'idée du test et celle de l'expérience vécue. L'alternative « tester » est trop clinique pour un contexte existentiel.

**en l'honorant** — Le sens retenu est « Générosité/Noblesse ». Le mot « honorer » traduit la forme IV akrama (rendre honorable). L'alternative « être généreux envers » est plus longue et moins direct.

**en le comblant** — Le sens retenu est « Bienfait/Faveur ». Le mot « combler » est choisi car il traduit l'intensif de la forme II — donner en abondance. L'alternative « accorder des bienfaits » est plus précise mais moins fluide. Hamidullah ajoute « de bienfaits » qui est implicite dans le verbe arabe (la forme II de naʿima intègre l'idée de bienfaits).

§CRITIQUE§
Les traductions courantes donnent sensiblement le même sens. La seule différence notable est « homme » vs « être humain » pour al-insān. La racine a-n-s désigne la sociabilité et la familiarité — ce n'est pas un mot genré. Traduire par « homme » introduit une restriction absente du texte arabe.`
  });

  console.log('VERSET 89:15 — TERMINÉ');
  console.log('  ans → sens "Familiarité/Sociabilité" → mot "être humain"');
  console.log('  blw → sens "Épreuve/Test" → mot "éprouve"');
  console.log('  krm → sens "Générosité/Noblesse" → mot "honorant"');
  console.log('  nem → sens "Bienfait/Faveur" → mot "comblant"');
  console.log('  Traduction : "Quant à l\'être humain, quand son seigneur l\'éprouve en l\'honorant et en le comblant, il dit : Mon seigneur m\'a honoré"\n');

  console.log('=== PIPELINE S89 v11-15 TERMINÉ ===');
})();
