// Pipeline S3:V70 — verse_id=363, va_id=718
// "Ô gens de l'Écriture, pourquoi recouvrez-vous les signes de Dieu alors que vous en êtes témoins ?"
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

const VERSE_ID = 363;
const VA_ID = 718;
const SURAH = 3, VERSE = 70;

// ═══════════════════════════════════════════════════════
// SEGMENTS_STEP1 — fix: pos=8 word_key='shh' ajouté
// ═══════════════════════════════════════════════════════
const SEGMENTS_STEP1 = [
  { pos: 'nom', phon: 'ahlā', root: 'أ ه ل', type: 'important', arabic: 'يَـٰٓأَهْلَ', gender: 'masculin', grammar: { pos: 'nom', gender: 'masculin', case: 'accusatif', vocative: true }, position: 1, word_key: 'ahl', is_particle: false },
  { pos: 'nom', phon: 'al-kitābi', root: 'ك ت ب', type: 'important', arabic: 'ٱلْكِتَـٰبِ', gender: 'masculin', grammar: { pos: 'nom', gender: 'masculin' }, definite: true, position: 2, word_key: 'ktb', is_particle: false },
  { phon: 'lima', type: 'particle', arabic: 'لِمَ', position: 3, is_particle: true },
  { pos: 'verbe', phon: 'takfurūna', root: 'ك ف ر', type: 'important', tense: 'inaccompli', arabic: 'تَكْفُرُونَ', person: '2ème', grammar: { pos: 'verbe', tense: 'inaccompli', person: '2ème', genre: 'masculin', number: 'pluriel' }, position: 4, word_key: 'kfr', verb_form: 'I', is_particle: false },
  { pos: 'nom', phon: 'āyāti', root: 'أ ي ي', type: 'important', arabic: 'بِـَٔايَـٰتِ', gender: 'féminin', number: 'pluriel', grammar: { pos: 'nom', gender: 'féminin', number: 'pluriel' }, position: 5, word_key: 'ayy', is_particle: false, prefix_particle: 'bi' },
  { pos: 'nom', phon: 'allāhi', root: 'أ ل ه', type: 'important', arabic: 'ٱللَّهِ', grammar: { pos: 'nom' }, position: 6, word_key: 'alh', is_particle: false },
  { phon: 'wa-antum', type: 'particle', arabic: 'وَأَنتُمْ', position: 7, is_particle: true, prefix_particle: 'wa' },
  { pos: 'verbe', phon: 'tashhadūna', root: 'ش ه د', type: 'important', tense: 'inaccompli', arabic: 'تَشْهَدُونَ', person: '2ème', grammar: { pos: 'verbe', tense: 'inaccompli', person: '2ème', genre: 'masculin', number: 'pluriel' }, position: 8, word_key: 'shh', verb_form: 'I', is_particle: false }
];

// ═══════════════════════════════════════════════════════
// SEGMENTS (affichage) — schéma strict V3
// ═══════════════════════════════════════════════════════
const SEGMENTS = [
  { fr: 'Ô gens',         pos: 1, phon: 'yā-ahlā',    arabic: 'يَـٰٓأَهْلَ',   word_key: 'ahl', is_particle: false, sense_retenu: 'gens de',         position: 1 },
  { fr: "de l'Écriture",  pos: 2, phon: 'al-kitābi',  arabic: 'ٱلْكِتَـٰبِ',  word_key: 'ktb', is_particle: false, sense_retenu: 'écriture révélée', position: 2 },
  { fr: 'pourquoi',       pos: 3, phon: 'lima',        arabic: 'لِمَ',         is_particle: true, position: 3 },
  { fr: 'recouvrez-vous', pos: 4, phon: 'takfurūna',  arabic: 'تَكْفُرُونَ',  word_key: 'kfr', is_particle: false, sense_retenu: 'recouvrir',       position: 4 },
  { fr: 'les signes',     pos: 5, phon: 'āyāti',      arabic: 'بِـَٔايَـٰتِ', word_key: 'ayy', is_particle: false, sense_retenu: 'signe',           position: 5 },
  { fr: 'de Dieu',        pos: 6, phon: 'allāhi',     arabic: 'ٱللَّهِ',      word_key: 'alh', is_particle: false, sense_retenu: 'Dieu',            position: 6 },
  { fr: 'alors que vous', pos: 7, phon: 'wa-antum',   arabic: 'وَأَنتُمْ',    is_particle: true, position: 7 },
  { fr: 'êtes témoins',   pos: 8, phon: 'tashhadūna', arabic: 'تَشْهَدُونَ', word_key: 'shh', is_particle: false, sense_retenu: 'témoigner',       position: 8 }
];

// ═══════════════════════════════════════════════════════
// TRADUCTION
// ═══════════════════════════════════════════════════════
const TRANSLATION_ARAB = `Ô gens de l'Écriture, pourquoi recouvrez-vous les signes de Dieu alors que vous en êtes témoins ?`;

const FULL_TRANSLATION_HAMIDULLAH = `Ô gens du Livre, pourquoi niez-vous les signes d'Allah, alors que vous en êtes témoins ?`;

const TRANSLATION_EXPLANATION = `§DEMARCHE§

Ce verset ouvre une interpellation directe — en forme de question rhétorique — adressée aux gens de l'Écriture. Il fait suite au verset 69, qui décrivait le désir d'une faction de les égarer : ici, le discours bascule en confrontation ouverte, posant frontalement la question de leur responsabilité en tant que dépositaires d'une révélation antérieure.

**yā-ahlā** (Ô gens) est un nom à l'accusatif, précédé de la particule vocative yā (Ô). En arabe, yā est la particule d'appel : elle place le mot qui suit en position d'interpellation directe. Le mot ahl, de la racine a-h-l, désigne ceux qui partagent un lien commun — famille, communauté, appartenance. Ici, ahlā est en construction d'annexion (idāfa) avec al-kitābi : « les gens de l'Écriture ». On traduit par « Ô gens ».

**al-kitābi** (de l'Écriture) est un nom masculin singulier défini (al-), au génitif — il complète l'annexion avec ahlā. La racine k-t-b couvre l'acte d'écrire et son résultat (le texte écrit). Dans l'expression ahl al-kitāb, kitāb désigne un texte sacré de parole révélée fixée par écrit — pas l'objet-livre, mais l'Écriture en tant que révélation connue et identifiée. On traduit par « de l'Écriture ».

**lima** (pourquoi) est une particule d'interrogation composée de li (dans quel but) et mā (quoi). Elle introduit la question rhétorique du verset : « pour quoi faites-vous cela ? »

**takfurūna** (recouvrez-vous) est un verbe inaccompli, 2ème personne du pluriel masculin, Forme I. L'inaccompli dit que l'action est en cours ou répétée : « vous recouvrez [encore et encore] ». La racine k-f-r a pour premier sens physique « couvrir », « dissimuler » — comme la nuit qui recouvre la lumière du jour (Lane's Lexicon). La particule bi devant āyāt indique l'objet de cette action. L'expression takfurūna bi-āyāt signifie « vous recouvrez [par rapport à] les signes ». La clausule qui suit — « alors que vous en êtes témoins » — renforce le sens de dissimulation délibérée : ils ne nient pas l'existence des signes (ils en témoignent), ils les recouvrent sciemment. On traduit par « recouvrez-vous ».

**āyāti** (les signes) est un nom féminin pluriel au génitif, précédé de bi (envers/par rapport à). C'est le pluriel de āya, de la racine a-y-y. Le Lane's définit āya comme « un signe, une marque distinctive, un indice » — quelque chose qui rend visible une réalité. Ici, āyāt allāhi désigne les manifestations de Dieu — ses signes dans le monde, dans la révélation et dans l'histoire. On traduit par « les signes ».

**allāhi** (de Dieu) est un nom propre au génitif, complément d'annexion de āyāt. La racine a-l-h renvoie à la divinité, celui vers qui se dirige la vénération. On traduit par « de Dieu ».

**wa-antum tashhadūna** (alors que vous en êtes témoins) est une construction appelée ḥāl — une proposition d'état qui décrit la situation du sujet au moment de l'action principale. Elle est formée de wa (conjonction) + antum (pronom détaché 2ème pluriel, mis en relief) + tashhadūna (verbe inaccompli, 2ème pluriel, Forme I). Le pronom détaché antum crée un effet d'insistance : « vous, vous ! ». La racine sh-h-d désigne le fait d'être présent à quelque chose comme témoin direct et de l'attester. On traduit par « alors que vous en êtes témoins ».

§JUSTIFICATION§

**recouvrez-vous** — Le sens retenu est « recouvrir ». Le mot « recouvrez-vous » est choisi car la racine k-f-r désigne d'abord l'acte physique de couvrir quelque chose. Le verset précise « alors que vous en êtes témoins » : on ne recouvre pas ce qu'on ignore, on recouvre ce qu'on sait. L'alternative « niez-vous » (traduction courante) est écartée car nier peut naître de l'ignorance, alors que recouvrir suppose une connaissance préalable — ce que la clausule ḥāl confirme explicitement. L'alternative « rejetez-vous » est écartée car elle appartient au concept Rejet/Ingratitude, dont le sens n'est pas l'étymologie primaire de k-f-r.

**les signes** — Le sens retenu est « signe ». Le mot « signes » est choisi car āya désigne d'abord une marque distinctive qui rend visible une réalité — ce qui englobe les signes cosmiques, les preuves et les textes révélés. L'alternative « versets » est écartée car elle réduit āyāt aux seuls textes scripturaires, alors que le mot a une portée plus large. L'alternative « révélations » est écartée car elle introduit une nuance d'envoi divin qui n'est pas dans le mot lui-même.

**êtes témoins** — Le sens retenu est « témoigner ». Le mot « êtes témoins » est choisi car shh désigne l'acte d'attester ce qu'on a perçu directement — avoir une connaissance directe et en être garant. La construction ḥāl (wa-antum tashhadūna) souligne que leur dissimulation des signes se produit alors même qu'ils en sont les témoins directs — ce qui qualifie cet acte de délibéré. L'alternative « êtes présents » (sens Présence/Assistance) est écartée car elle efface la dimension d'attestation et de responsabilité qu'implique tashhadūna.

§CRITIQUE§

**de l'Écriture vs "du Livre"** : Les traductions courantes donnent « gens du Livre ». Ce choix fixe kitāb comme un objet physique ou une institution. Notre traduction donne « gens de l'Écriture » car al-kitāb désigne d'abord l'acte d'écriture révélée et la parole fixée par écrit — pas l'objet-livre. « Écriture » maintient le lien avec la révélation comme parole divine, là où « Livre » le réduit à un contenant.

**recouvrez-vous vs "niez-vous"** : Les traductions courantes donnent « pourquoi niez-vous les signes d'Allah ». Ce choix traduit k-f-r par « nier » — un sens du registre Rejet/Ingratitude, possible mais moins précis que l'étymologie primaire. Le verset ajoute une clausule décisive : « alors que vous en êtes témoins » (wa-antum tashhadūna). On ne nie pas ce dont on est soi-même le témoin direct : on le recouvre. Le sens premier de k-f-r est « couvrir », « dissimuler » (comme la nuit recouvre la lumière). La combinaison kfr bi-āyāt + tashhadūna décrit une dissimulation délibérée de ce qu'on sait — pas un refus venu de l'ignorance. Notre traduction « recouvrez-vous » rend compte de cette responsabilité consciente là où « niez-vous » laisse ouverte la possibilité d'une méprise.`;

// ═══════════════════════════════════════════════════════
// VWA
// ═══════════════════════════════════════════════════════
const VWA_ROWS = [
  {
    word_key: 'ahl', position: 1,
    sense_chosen: 'gens de',
    reason: 'ahl al-kitāb en vocatif — groupe défini par appartenance commune à l\'Écriture.',
    analysis_axes: {
      sense_chosen: 'gens de',
      concept_chosen: 'Famille/Communauté',
      concepts: {
        'Famille/Communauté': {
          status: 'retenu',
          senses: ['famille', 'gens de', 'peuple'],
          proof_ctx: 'Ahl désigne ceux qui partagent un lien commun — famille, communauté, appartenance. Dans l\'expression ahl al-kitāb (interpellation vocative directe), le sens « gens de » rend compte de cette communauté définie par son rapport à l\'Écriture. C\'est le sens le plus adapté à la construction vocative de ce verset.'
        },
        'Mérite/Aptitude': {
          status: 'peu_probable',
          senses: ['digne de'],
          proof_ctx: 'Le sens « digne de » implique une qualification. Il n\'est pas compatible avec la construction d\'annexion vocative yā ahla al-kitāb, qui désigne un groupe par appartenance, non par mérite.'
        },
        'Parenté/Famille': {
          status: 'peu_probable',
          senses: ['se marier'],
          proof_ctx: 'Sens verbal d\'origine (s\'installer, se marier). Hors contexte ici.'
        },
        'Sens isolé/Accueillir': {
          status: 'nul',
          senses: ['accueillir'],
          proof_ctx: 'Sens verbal isolé, hors sujet ici.'
        }
      }
    }
  },
  {
    word_key: 'ktb', position: 2,
    sense_chosen: 'écriture révélée',
    reason: 'al-kitāb dans ahl al-kitāb désigne le texte sacré révélé — parole divine fixée, identifiée par al-.',
    analysis_axes: {
      sense_chosen: 'écriture révélée',
      concept_chosen: 'Livre/Écrit',
      concepts: {
        'Livre/Écrit': {
          status: 'retenu',
          senses: ['registre', 'contrat écrit', 'écriture révélée', 'livre'],
          proof_ctx: 'Al-kitāb dans ahl al-kitāb désigne un texte sacré de révélation — pas l\'objet-livre mais l\'Écriture révélée connue et identifiée (article défini al-). Le sens « écriture révélée » capture cette dimension de parole divine fixée.'
        },
        'Écriture/Inscription': {
          status: 'probable',
          senses: ['écrire', 'copier', 'scribe', 'art de l\'écriture'],
          proof_ctx: 'Le sens de l\'acte d\'écrire est l\'étymologie primaire de k-t-b. Mais ici al-kitāb est un nom défini désignant un texte particulier — le résultat de l\'écriture sacrée, pas l\'acte lui-même. C\'est pourquoi Livre/Écrit est retenu.'
        },
        'Obligation/Décret': {
          status: 'peu_probable',
          senses: ['décret divin', 'prescrire', 'rendre obligatoire'],
          proof_ctx: 'Le sens de « décret divin » est attesté pour kitāb dans d\'autres contextes. Mais dans ahl al-kitāb, la construction identifie un groupe par son rapport à l\'Écriture, pas au décret.'
        },
        'Assemblage/Couture': {
          status: 'nul',
          senses: ['coudre', 'lier', 'rassembler', 'attacher'],
          proof_ctx: 'Sens physique archaïque de la racine, hors sujet ici.'
        }
      }
    }
  },
  {
    word_key: 'kfr', position: 4,
    sense_chosen: 'recouvrir',
    reason: 'takfurūna bi-āyāt + clausule tashhadūna : dissimulation délibérée de ce qu\'on sait, pas ignorance.',
    analysis_axes: {
      sense_chosen: 'recouvrir',
      concept_chosen: 'Couverture/Dissimulation',
      concepts: {
        'Couverture/Dissimulation': {
          status: 'retenu',
          senses: ['couvrir', 'cacher', 'la nuit qui couvre'],
          proof_ctx: 'La racine k-f-r désigne d\'abord l\'acte de couvrir. La clausule ḥāl « wa-antum tashhadūna » (alors que vous en êtes témoins) confirme qu\'il ne s\'agit pas d\'ignorance mais de dissimulation délibérée : on recouvre ce qu\'on sait. Ce sens est le plus compatible avec la structure complète du verset.'
        },
        'Rejet/Ingratitude': {
          status: 'probable',
          senses: ['nier', 'être ingrat', 'renier un bienfait', 'rejeter'],
          proof_ctx: 'Le sens « rejeter/nier » est cohérent avec kfr bi-āyāt dans de nombreux contextes coraniques. Mais « rejeter » peut naître de l\'ignorance, alors que la clausule tashhadūna indique une connaissance directe — ce qui fait basculer le sens vers la dissimulation délibérée plutôt que le simple rejet.'
        },
        'Expiation/Réparation': {
          status: 'nul',
          senses: ['expier', 'effacer les péchés'],
          proof_ctx: 'Sens opposé — l\'expiation répare, alors que le verset décrit un acte de dissimulation.'
        },
        'Sens isolé/Cultivateur': {
          status: 'nul',
          senses: ['cultivateur'],
          proof_ctx: 'Sens lexical isolé, hors sujet.'
        },
        'Sens isolé/Goudron': {
          status: 'nul',
          senses: ['goudron'],
          proof_ctx: 'Sens lexical isolé, hors sujet.'
        },
        'Sens isolé/Village': {
          status: 'nul',
          senses: ['village'],
          proof_ctx: 'Sens lexical isolé, hors sujet.'
        }
      }
    }
  },
  {
    word_key: 'ayy', position: 5,
    sense_chosen: 'signe',
    reason: 'āyāt allāhi — les signes de Dieu au sens large : manifestations, preuves, révélations.',
    analysis_axes: {
      sense_chosen: 'signe',
      concept_chosen: 'Signe/Marque',
      concepts: {
        'Signe/Marque': {
          status: 'retenu',
          senses: ['signe', 'marque distinctive', 'indice'],
          proof_ctx: 'Āya désigne d\'abord une marque distinctive qui rend visible une réalité. Dans « les signes de Dieu », āyāt englobe les manifestations dans la création, les textes révélés et les preuves au sens large — terme plus englobant et plus fidèle à l\'étymologie que le seul « verset ».'
        },
        'Verset/Énoncé': {
          status: 'probable',
          senses: ['verset', 'phrase remarquable'],
          proof_ctx: 'Le sens « verset » est attesté dans le Coran pour āya. Ici, « signes de Dieu » pourrait désigner les versets de la révélation. Mais āyāt allāhi couvre un spectre plus large — c\'est pourquoi Signe/Marque est retenu.'
        },
        'Exemple/Témoin': {
          status: 'peu_probable',
          senses: ['exemple remarquable'],
          proof_ctx: 'Sens secondaire trop spécifique pour ce contexte général.'
        },
        'Interrogation/Sélection': {
          status: 'nul',
          senses: ['quel', 'lequel', 'n\'importe quel'],
          proof_ctx: 'Sens interrogatif d\'une forme grammaticale différente (ayyu, pronom) — hors sujet ici.'
        },
        'Interrogation/Choix': {
          status: 'nul',
          senses: ['lequel (ayyu)'],
          proof_ctx: 'Même raison — forme grammaticale différente.'
        }
      }
    }
  },
  {
    word_key: 'alh', position: 6,
    sense_chosen: 'Dieu',
    reason: 'Allāh — nom propre de la divinité. On traduit par « Dieu » selon notre convention de traduction.',
    analysis_axes: {
      sense_chosen: 'Dieu',
      concept_chosen: 'Divinité',
      concepts: {
        'Divinité': {
          status: 'retenu',
          senses: ['divinité', 'Dieu', 'théologie'],
          proof_ctx: 'Allāh désigne le divin dont émanent les signes révélés. Le sens « Dieu » est le plus universel pour rendre allāh en français courant, conforme à notre convention de traduction.'
        },
        'Adoration/Dévotion': {
          status: 'peu_probable',
          senses: ['adorer', 'se dévouer au culte', 'diviniser'],
          proof_ctx: 'Ces sens verbaux décrivent l\'acte d\'adorer, pas l\'entité divine elle-même. Hors sujet pour allāh utilisé comme nom propre.'
        },
        'Refuge/Protection': {
          status: 'nul',
          senses: ['protéger', 'chercher refuge', 'demeurer'],
          proof_ctx: 'Sens d\'origine de la racine, non pertinent pour allāh comme nom propre.'
        },
        'Détresse': {
          status: 'nul',
          senses: ['se lamenter', 'être perplexe'],
          proof_ctx: 'Sens émotionnel éloigné du contexte.'
        },
        'Domination': {
          status: 'nul',
          senses: ['asservir'],
          proof_ctx: 'Sens éloigné du contexte.'
        }
      }
    }
  },
  {
    word_key: 'shh', position: 8,
    sense_chosen: 'témoigner',
    reason: 'wa-antum tashhadūna (ḥāl) : ils témoignent directement des signes — connaissance directe qui rend leur dissimulation délibérée.',
    analysis_axes: {
      sense_chosen: 'témoigner',
      concept_chosen: 'Témoignage/Attestation',
      concepts: {
        'Témoignage/Attestation': {
          status: 'retenu',
          senses: ['témoigner', 'attester'],
          proof_ctx: 'La construction ḥāl wa-antum tashhadūna décrit leur état simultané : ils témoignent des signes (ils les connaissent directement) et pourtant les recouvrent. Le sens « témoigner » rend compte de cette connaissance directe et de la responsabilité qu\'elle implique — c\'est précisément ce qui rend leur acte délibéré.'
        },
        'Présence/Assistance': {
          status: 'peu_probable',
          senses: ['être présent', 'assister à'],
          proof_ctx: 'Le sens « être présent » dit qu\'on était là, mais pas qu\'on en témoigne. Dans ce contexte où leur responsabilité est en cause, c\'est leur qualité de témoin — et non leur simple présence — qui est invoquée.'
        },
        'Martyre': {
          status: 'nul',
          senses: ['martyr (shahid)'],
          proof_ctx: 'Sens post-islamique spécifique, hors contexte ici.'
        },
        'Nourriture/Alimentation': {
          status: 'nul',
          senses: ['miel (dans la ruche)'],
          proof_ctx: 'Sens lexical isolé, hors sujet.'
        }
      }
    }
  }
];

// ═══════════════════════════════════════════════════════
// MAIN
// ═══════════════════════════════════════════════════════
async function run() {
  console.log('╔═══════════════════════════════════════════════════════╗');
  console.log('║   PIPELINE MAISON — S3:V70 (verse_id=' + VERSE_ID + ')             ║');
  console.log('╚═══════════════════════════════════════════════════════╝');

  // ─── ÉTAPE 2 — vérification richesse ───
  console.log('\n═══ ÉTAPE 2 — Vérification richesse racines ═══');
  const rootsCheck = [
    { key: 'ahl', aid: 736 },
    { key: 'ktb', aid: 275 },
    { key: 'kfr', aid: 294 },
    { key: 'ayy', aid: 510 },
    { key: 'alh', aid: 250 },
    { key: 'shh', aid: 840 }
  ];
  for (const r of rootsCheck) {
    const { data: wm } = await db.from('word_meanings').select('id').eq('analysis_id', r.aid);
    const n = wm ? wm.length : 0;
    console.log('  ' + r.key + ' (aid=' + r.aid + '): ' + n + ' sens ' + (n >= 5 ? '[OK → SKIP]' : '[<5 ENRICHIR]'));
  }

  // ─── word_daily — toutes déjà remplies ───
  console.log('\n═══ word_daily ═══');
  for (const r of rootsCheck) {
    const { data: daily } = await db.from('word_daily').select('id').eq('analysis_id', r.aid);
    const n = daily ? daily.length : 0;
    console.log('  ' + r.key + ': ' + n + ' phrases → ' + (n > 0 ? 'SKIP' : 'À CRÉER'));
  }

  // ─── ÉTAPES 1 & 4 — UPDATE verse_analyses ───
  console.log('\n═══ ÉTAPES 1 & 4 — verse_analyses UPDATE ═══');
  const { error: vaErr } = await db.from('verse_analyses').update({
    segments_step1: SEGMENTS_STEP1,
    full_translation: FULL_TRANSLATION_HAMIDULLAH,
    translation_arab: TRANSLATION_ARAB,
    translation_explanation: TRANSLATION_EXPLANATION,
    segments: SEGMENTS,
    validated: true,
    model_used: 'claude-sonnet-4-6-pipeline-maison',
    prompt_version: 'v3'
  }).eq('id', VA_ID);
  if (vaErr) throw vaErr;
  console.log('  UPDATE va_id=' + VA_ID + ' OK');

  // ─── ÉTAPE 3 — VWA ───
  console.log('\n═══ ÉTAPE 3 — VWA ═══');
  const { data: existingVwa } = await db.from('verse_word_analyses').select('id').eq('verse_id', VERSE_ID);
  if (existingVwa && existingVwa.length) {
    await db.from('verse_word_analyses').delete().eq('verse_id', VERSE_ID);
    console.log('  Clean: ' + existingVwa.length + ' VWA supprimés.');
  }
  const vwaRows = VWA_ROWS.map(v => ({
    verse_id: VERSE_ID,
    word_key: v.word_key,
    position: v.position,
    sense_chosen: v.sense_chosen,
    reason: v.reason,
    analysis_axes: { ...v.analysis_axes, concept_chosen: v.analysis_axes.concept_chosen, sense_chosen: v.sense_chosen }
  }));
  const { error: vwaErr } = await db.from('verse_word_analyses').insert(vwaRows);
  if (vwaErr) throw vwaErr;
  console.log('  Insérés : ' + vwaRows.length + ' VWA');
  VWA_ROWS.forEach(v => console.log('    pos=' + v.position + ' ' + v.word_key + ' → « ' + v.sense_chosen + ' » [' + v.analysis_axes.concept_chosen + ']'));

  console.log('\n══════════════════════════════════════════════════════');
  console.log('VERSET 3:70 — TERMINÉ');
  console.log('  yā-ahlā (ahl)     → Famille/Communauté    → "Ô gens"');
  console.log('  al-kitābi (ktb)   → Livre/Écrit           → "de l\'Écriture"');
  console.log('  takfurūna (kfr)   → Couverture/Dissimulation → "recouvrez-vous"');
  console.log('  āyāti (ayy)       → Signe/Marque          → "les signes"');
  console.log('  allāhi (alh)      → Divinité              → "de Dieu"');
  console.log('  tashhadūna (shh)  → Témoignage/Attestation → "êtes témoins"');
  console.log('  Traduction : "' + TRANSLATION_ARAB + '"');
  console.log('╔═══════════════════════════════════════════════════════╗');
  console.log('║              PIPELINE S3:V70 TERMINÉE                ║');
  console.log('╚═══════════════════════════════════════════════════════╝');
}

run().catch(e => { console.error('ERREUR PIPELINE :', e); process.exit(1); });
