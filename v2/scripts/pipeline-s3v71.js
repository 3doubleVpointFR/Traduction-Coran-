// Pipeline S3:V71 — verse_id=364, va_id=724
// "Ô gens de l'Écriture, pourquoi mêlez-vous la vérité avec le faux, et dissimulez-vous la vérité alors que vous savez ?"
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

const VERSE_ID = 364;
const VA_ID = 724;
const SURAH = 3, VERSE = 71;

// ═══════════════════════════════════════════════════════
// SEGMENTS_STEP1 — nettoyé (word_key=undefined → absent pour particles)
// ═══════════════════════════════════════════════════════
const SEGMENTS_STEP1 = [
  { pos: 'nom', phon: 'ahlā', root: 'أ ه ل', type: 'important', arabic: 'يَـٰٓأَهْلَ', gender: 'masculin', grammar: { pos: 'nom', gender: 'masculin', case: 'accusatif', vocative: true }, position: 1, word_key: 'ahl', is_particle: false },
  { pos: 'nom', phon: 'al-kitābi', root: 'ك ت ب', type: 'important', arabic: 'ٱلْكِتَـٰبِ', gender: 'masculin', grammar: { pos: 'nom', gender: 'masculin' }, definite: true, position: 2, word_key: 'ktb', is_particle: false },
  { phon: 'lima', type: 'particle', arabic: 'لِمَ', position: 3, is_particle: true },
  { pos: 'verbe', phon: 'talbisūna', root: 'ل ب س', type: 'important', tense: 'inaccompli', arabic: 'تَلْبِسُونَ', person: '2ème', grammar: { pos: 'verbe', tense: 'inaccompli', person: '2ème', genre: 'masculin', number: 'pluriel' }, position: 4, word_key: 'lbs', verb_form: 'I', is_particle: false },
  { pos: 'nom', phon: 'al-ḥaqqa', root: 'ح ق ق', type: 'important', arabic: 'ٱلْحَقَّ', gender: 'masculin', grammar: { pos: 'nom', gender: 'masculin', case: 'accusatif' }, definite: true, position: 5, word_key: 'hqq', is_particle: false },
  { pos: 'nom', phon: 'bi-l-bāṭili', root: 'ب ط ل', type: 'important', arabic: 'بِٱلْبَـٰطِلِ', gender: 'masculin', grammar: { pos: 'nom', gender: 'masculin', case: 'génitif' }, definite: true, position: 6, word_key: 'btl', is_particle: false, prefix_particle: 'bi' },
  { pos: 'verbe', phon: 'wa-taktumūna', root: 'ك ت م', type: 'important', tense: 'inaccompli', arabic: 'وَتَكْتُمُونَ', person: '2ème', grammar: { pos: 'verbe', tense: 'inaccompli', person: '2ème', genre: 'masculin', number: 'pluriel' }, position: 7, word_key: 'ktm', verb_form: 'I', is_particle: false, prefix_particle: 'wa' },
  { pos: 'nom', phon: 'al-ḥaqqa', root: 'ح ق ق', type: 'important', arabic: 'ٱلْحَقَّ', gender: 'masculin', grammar: { pos: 'nom', gender: 'masculin', case: 'accusatif' }, definite: true, position: 8, word_key: 'hqq', is_particle: false },
  { phon: 'wa-antum', type: 'particle', arabic: 'وَأَنتُمْ', position: 9, is_particle: true, prefix_particle: 'wa' },
  { pos: 'verbe', phon: 'taʿlamūna', root: 'ع ل م', type: 'important', tense: 'inaccompli', arabic: 'تَعْلَمُونَ', person: '2ème', grammar: { pos: 'verbe', tense: 'inaccompli', person: '2ème', genre: 'masculin', number: 'pluriel' }, position: 10, word_key: 'elm', verb_form: 'I', is_particle: false }
];

// ═══════════════════════════════════════════════════════
// SEGMENTS (affichage) — schéma strict V3
// ═══════════════════════════════════════════════════════
const SEGMENTS = [
  { fr: 'Ô gens',              pos: 1,  phon: 'yā-ahlā',       arabic: 'يَـٰٓأَهْلَ',   word_key: 'ahl', is_particle: false, sense_retenu: 'gens de',         position: 1  },
  { fr: "de l'Écriture",       pos: 2,  phon: 'al-kitābi',     arabic: 'ٱلْكِتَـٰبِ',  word_key: 'ktb', is_particle: false, sense_retenu: 'écriture révélée', position: 2  },
  { fr: 'pourquoi',            pos: 3,  phon: 'lima',           arabic: 'لِمَ',          is_particle: true, position: 3  },
  { fr: 'mêlez-vous',          pos: 4,  phon: 'talbisūna',     arabic: 'تَلْبِسُونَ',  word_key: 'lbs', is_particle: false, sense_retenu: 'confondre',        position: 4  },
  { fr: 'la vérité',           pos: 5,  phon: 'al-ḥaqqa',      arabic: 'ٱلْحَقَّ',     word_key: 'hqq', is_particle: false, sense_retenu: 'vérité',           position: 5  },
  { fr: 'avec le faux',        pos: 6,  phon: 'bi-l-bāṭili',   arabic: 'بِٱلْبَـٰطِلِ', word_key: 'btl', is_particle: false, sense_retenu: 'faux',             position: 6  },
  { fr: 'et dissimulez-vous',  pos: 7,  phon: 'wa-taktumūna',  arabic: 'وَتَكْتُمُونَ', word_key: 'ktm', is_particle: false, sense_retenu: 'dissimuler',       position: 7  },
  { fr: 'la vérité',           pos: 8,  phon: 'al-ḥaqqa',      arabic: 'ٱلْحَقَّ',     word_key: 'hqq', is_particle: false, sense_retenu: 'vérité',           position: 8  },
  { fr: 'alors que vous',      pos: 9,  phon: 'wa-antum',       arabic: 'وَأَنتُمْ',    is_particle: true, position: 9  },
  { fr: 'savez',               pos: 10, phon: 'taʿlamūna',     arabic: 'تَعْلَمُونَ',  word_key: 'elm', is_particle: false, sense_retenu: 'savoir',           position: 10 }
];

// ═══════════════════════════════════════════════════════
// TRADUCTION
// ═══════════════════════════════════════════════════════
const TRANSLATION_ARAB = `Ô gens de l'Écriture, pourquoi mêlez-vous la vérité avec le faux, et dissimulez-vous la vérité alors que vous savez ?`;

const FULL_TRANSLATION_HAMIDULLAH = `Ô gens du Livre, pourquoi confondez-vous la vérité et le faux, et cachez-vous la vérité, alors que vous le savez ?`;

const TRANSLATION_EXPLANATION = `§DEMARCHE§

Ce verset prolonge l'interpellation du verset 70 — même structure vocative (yā ahla al-kitāb + lima = pourquoi). Après avoir posé la question du « recouvrement des signes » en V70, le verset 71 nomme deux pratiques distinctes : mêler la vérité au faux, et dissimuler la vérité.

**yā-ahlā** (Ô gens) et **al-kitābi** (de l'Écriture) reprennent la même construction vocative + idāfa qu'en V70 : yā (particule d'appel) + ahlā (gens de, accusatif, en annexion) + al-kitābi (l'Écriture, génitif). Voir V70 pour le détail étymologique.

**talbisūna** (mêlez-vous) est un verbe inaccompli, 2ème personne du pluriel masculin, Forme I. La racine l-b-s possède deux formes distinctes : labisa (avec kasra sur le lam, signifiant « porter un vêtement ») et labasa (avec fatha, aor. yalbisu, signifiant « rendre confus, mêler »). C'est cette seconde forme qui est ici utilisée. Lane's précise : « il rendit la chose, ou l'affaire, confuse pour lui » (labasa ʿalayhi al-amra). La construction talbisūna al-ḥaqqa bil-bāṭili signifie : « vous mêlez la vérité avec/au moyen du faux ». Le bi devant al-bāṭil indique l'instrument ou l'accompagnement — la vérité est mêlée au faux pour la rendre indistinguable. On traduit par « mêlez-vous ».

**al-ḥaqqa** (la vérité, 1ère occurrence) est un nom masculin défini (al-), à l'accusatif, objet direct de talbisūna. La racine ḥ-q-q désigne ce qui est réel, fondé, conforme à la réalité — al-ḥaqq est l'exact opposé de al-bāṭil. Lane's en définit le sens premier comme « ce qui est conforme aux exigences de la sagesse, de la justice, de la vérité ou de la réalité ». On traduit par « la vérité ».

**bi-l-bāṭili** (avec le faux) est un nom masculin défini, au génitif, précédé de bi (avec/au moyen de). Bāṭil, de la racine b-ṭ-l, désigne ce qui est sans fondement, sans substance, sans réalité. Lane's le définit comme le contraire exact de ḥaqq : « faux, irréel, vain, sans valeur, devenu nul comme une chose de nulle valeur ». On traduit par « avec le faux ».

**wa-taktumūna** (et dissimulez-vous) est une conjonction wa (et) suivie d'un verbe inaccompli Forme I, 2ème pluriel. La racine k-t-m signifie dissimuler un secret — retenir une information pour qu'elle ne soit pas connue. Lane's : « il cacha, dissimula un secret ». C'est l'acte de rétention délibérée de la vérité — distinct de talbisūna (qui mêle) : ici on cache, là on brouille. On traduit par « et dissimulez-vous ».

**al-ḥaqqa** (la vérité, 2ème occurrence) est le même mot qu'en position 5 — la vérité est ici l'objet de taktumūna. Sa répétition crée une insistance rhétorique : la vérité est à la fois mélangée au faux ET dissimulée — deux stratégies complémentaires.

**wa-antum taʿlamūna** (alors que vous savez) est une construction ḥāl (proposition d'état simultané) identique à celle de V70 (wa-antum tashhadūna). Le pronom détaché antum insiste sur l'identité des acteurs. La racine ʿ-l-m désigne le savoir, la connaissance certaine — taʿlamūna = « vous savez » (inaccompli, 2ème pluriel). Comparer avec V70 (tashhadūna = vous êtes témoins) : en V70, c'est la qualité de témoin direct qui est invoquée ; en V71, c'est la connaissance intellectuelle. Les deux clausules ḥāl de V70 et V71 construisent une accumulation rhétorique : ils témoignent (V70) ET ils savent (V71). On traduit par « alors que vous savez ».

§JUSTIFICATION§

**mêlez-vous** — Le sens retenu est « confondre ». Le mot « mêlez-vous » est choisi car il rend l'image physique de l-b-s (labasa) : mêler deux choses ensemble pour les rendre indistinguables — ici la vérité et le faux présentés ensemble. L'alternative « confondez » (traduction courante) est écartée car « confondre » en français peut désigner une erreur intellectuelle involontaire, alors que « mêler » décrit un acte délibéré de brouillage — ce que la clausule « alors que vous savez » confirme. L'alternative « enveloppez » est écartée car elle suggère une direction unique (envelopper X dans Y), alors que lbs bil-bāṭil décrit un mélange dans lequel le faux sert d'instrument.

**la vérité** — Le sens retenu est « vérité ». Le mot « la vérité » est choisi car al-ḥaqq désigne ce qui est réel et fondé — l'opposé du vain et du sans-substance (bāṭil). L'alternative « le vrai » est écartée au profit de « la vérité » pour maintenir une cohérence stylistique dans les deux occurrences du verset. L'alternative « le droit » (autre sens de ḥaqq) est écartée car ici al-ḥaqq s'oppose directement à al-bāṭil dans la paire vrai/faux.

**avec le faux** — Le sens retenu est « faux ». Le mot « le faux » est choisi car bāṭil désigne ce qui est sans fondement, sans réalité, sans valeur — l'exact opposé de al-ḥaqq. L'alternative « le mensonge » est écartée car bāṭil (b-ṭ-l) est distinct de la racine du mensonge (k-dh-b). Bāṭil = ce qui est vide, nul, sans substance — pas nécessairement une affirmation fausse consciente. « Le faux » est plus précis et forme une paire naturelle avec « la vérité ».

**et dissimulez-vous** — Le sens retenu est « dissimuler ». Le mot « dissimulez » est choisi car k-t-m désigne le fait de retenir une information de façon active et délibérée. L'alternative « cachez » (traduction courante) est écartée car « cacher » peut désigner un acte purement physique ou inconscient, alors que k-t-m implique une rétention intentionnelle d'un secret — ce que confirme la clausule « alors que vous savez ».

**savez** — Le sens retenu est « savoir ». Le mot « savez » est choisi car ʿ-l-m désigne la connaissance certaine. La clausule wa-antum taʿlamūna reproduit la structure de V70 (wa-antum tashhadūna) : leur acte de mêler et de dissimuler se fait en pleine connaissance de cause. En V70, c'est le témoignage direct ; en V71, c'est le savoir intellectuel — accumulation rhétorique sur deux versets.

§CRITIQUE§

**de l'Écriture vs "du Livre"** : Les traductions courantes donnent « gens du Livre ». Notre traduction donne « gens de l'Écriture » car al-kitāb désigne l'écriture révélée dans sa dimension de parole fixée, pas l'objet-livre. Voir V70 pour le développement complet.

**mêlez-vous vs "confondez-vous"** : Les traductions courantes donnent « pourquoi confondez-vous la vérité et le faux ». Ce choix traduit talbisūna par « confondre » — possible mais moins précis. « Confondre » en français peut désigner une erreur intellectuelle involontaire — confondre deux choses par méconnaissance. Or le verset précise « alors que vous savez » : il n'y a pas d'erreur, il y a mélange délibéré. La racine l-b-s (labasa) décrit physiquement l'acte de rendre une chose confuse à quelqu'un en la brouillant — Lane's cite cette forme spécifiquement pour « rendre l'affaire confuse ». Notre traduction « mêlez-vous » restitue ce caractère actif et intentionnel du brouillage : on présente ensemble le vrai et le faux pour les rendre indistinguables.

**dissimulez-vous vs "cachez-vous"** : Les traductions courantes donnent « cachez-vous la vérité ». Ce choix traduit taktumūna par « cacher » — synonyme courant mais moins spécifique. La racine k-t-m désigne la dissimulation d'un secret — retenir quelque chose de su pour qu'il ne soit pas connu. « Cacher » peut désigner un acte purement physique ; « dissimuler » implique toujours une intention. Cette distinction, bien que ne changeant pas le sens global du verset, précise la nature délibérée de l'acte, cohérente avec la clausule « alors que vous savez ».`;

// ═══════════════════════════════════════════════════════
// VWA
// ═══════════════════════════════════════════════════════
const VWA_ROWS = [
  {
    word_key: 'ahl', position: 1,
    sense_chosen: 'gens de',
    reason: 'ahl al-kitāb en vocatif — communauté définie par appartenance à l\'Écriture.',
    analysis_axes: {
      sense_chosen: 'gens de',
      concept_chosen: 'Famille/Communauté',
      concepts: {
        'Famille/Communauté': {
          status: 'retenu',
          senses: ['famille', 'gens de', 'peuple'],
          proof_ctx: 'Même construction vocative yā ahla al-kitāb qu\'en V70. Ahl désigne une communauté par appartenance commune — ici définie par son rapport à l\'Écriture révélée.'
        },
        'Mérite/Aptitude': {
          status: 'peu_probable',
          senses: ['digne de'],
          proof_ctx: 'Le sens de mérite/qualification n\'est pas compatible avec la construction d\'annexion vocative qui désigne un groupe par appartenance, non par mérite.'
        },
        'Parenté/Famille': { status: 'nul', senses: ['se marier'], proof_ctx: 'Sens verbal d\'origine, hors contexte ici.' },
        'Sens isolé/Accueillir': { status: 'nul', senses: ['accueillir'], proof_ctx: 'Sens isolé hors sujet.' }
      }
    }
  },
  {
    word_key: 'ktb', position: 2,
    sense_chosen: 'écriture révélée',
    reason: 'al-kitāb dans ahl al-kitāb — texte sacré révélé, parole divine fixée par écrit.',
    analysis_axes: {
      sense_chosen: 'écriture révélée',
      concept_chosen: 'Livre/Écrit',
      concepts: {
        'Livre/Écrit': {
          status: 'retenu',
          senses: ['registre', 'contrat écrit', 'écriture révélée', 'livre'],
          proof_ctx: 'Al-kitāb défini (al-) dans ahl al-kitāb désigne le texte sacré révélé — la parole divine fixée, identifiée comme telle. Même analyse qu\'en V70.'
        },
        'Écriture/Inscription': { status: 'probable', senses: ['écrire', 'copier', 'scribe'], proof_ctx: 'L\'étymologie (acte d\'écrire) est le fond, mais al-kitāb désigne ici le résultat — le texte sacré, pas l\'acte.' },
        'Obligation/Décret': { status: 'peu_probable', senses: ['décret divin', 'prescrire'], proof_ctx: 'Possible dans d\'autres contextes coraniques, mais dans ahl al-kitāb, l\'annexion identifie un groupe par son rapport à l\'Écriture.' },
        'Assemblage/Couture': { status: 'nul', senses: ['coudre', 'lier'], proof_ctx: 'Sens physique archaïque, hors sujet.' }
      }
    }
  },
  {
    word_key: 'lbs', position: 4,
    sense_chosen: 'confondre',
    reason: 'labasa (avec fatha) = rendre confus/mêler — forme distincte de labisa (porter). Talbisūna al-ḥaqqa bil-bāṭili = vous mêlez la vérité avec le faux.',
    analysis_axes: {
      sense_chosen: 'confondre',
      concept_chosen: 'Confusion/Mélange',
      concepts: {
        'Confusion/Mélange': {
          status: 'retenu',
          senses: ['confondre', 'obscurcir'],
          proof_ctx: 'Labasa (forme à fatha, distincte de labisa = porter) signifie rendre confus, brouiller. La construction talbisūna al-ḥaqqa bil-bāṭili — « vous mêlez la vérité avec le faux » — décrit cet acte de brouillage délibéré. La clausule « alors que vous savez » confirme qu\'il ne s\'agit pas d\'erreur mais d\'acte intentionnel.'
        },
        'Vêtement/Revêtement': {
          status: 'peu_probable',
          senses: ['vêtir', 'habiller', 'revêtir', 'vêtement'],
          proof_ctx: 'Le sens de « porter/vêtir » vient de labisa (avec kasra), une forme grammaticalement distincte. Ici le verbe est labasa (avec fatha = confondre/mêler). La métaphore du vêtement n\'est pas le sens principal de cette forme.'
        }
      }
    }
  },
  {
    word_key: 'hqq', position: 5,
    sense_chosen: 'vérité',
    reason: 'al-ḥaqq = la vérité/le réel — s\'oppose directement à al-bāṭil (le faux). 1ère occurrence : objet de talbisūna.',
    analysis_axes: {
      sense_chosen: 'vérité',
      concept_chosen: 'Vérité/Réalité',
      concepts: {
        'Vérité/Réalité': {
          status: 'retenu',
          senses: ['être vrai', 'vérité', 'réalité', 'droit'],
          proof_ctx: 'Al-ḥaqq est ici en opposition directe à al-bāṭil — c\'est la paire vrai/faux. Il désigne ce qui est réel, fondé, conforme à la réalité — par opposition à ce qui est vide et sans substance. Lane\'s confirme cette opposition terminologique fondamentale.'
        },
        'Obligation/Nécessité': {
          status: 'nul',
          senses: ['devoir', 'mériter', 'être obligatoire'],
          proof_ctx: 'Le sens d\'obligation est possible dans d\'autres contextes, mais ici al-ḥaqq s\'oppose à al-bāṭil dans la paire vrai/faux — pas dû/injuste.'
        },
        'Sens isolé/Se': { status: 'nul', senses: ['se réaliser'], proof_ctx: 'Sens verbal isolé, hors contexte nominal défini.' },
        'Sens isolé/Vérifier': { status: 'nul', senses: ['vérifier'], proof_ctx: 'Sens verbal isolé, hors contexte.' }
      }
    }
  },
  {
    word_key: 'btl', position: 6,
    sense_chosen: 'faux',
    reason: 'al-bāṭil s\'oppose à al-ḥaqq — ce qui est sans fondement, sans réalité, sans valeur.',
    analysis_axes: {
      sense_chosen: 'faux',
      concept_chosen: 'Vanité/Nullité',
      concepts: {
        'Vanité/Nullité': {
          status: 'retenu',
          senses: ['être vain', 'faux', 'nul'],
          proof_ctx: 'Al-bāṭil est le contraire terminologique de al-ḥaqq dans ce verset. Lane\'s définit bāṭil comme « faux, irréel, vain, sans valeur, ce qui va pour rien comme une chose de nulle valeur ». C\'est ce qui est présenté ici comme instrument du brouillage de la vérité.'
        },
        'Annulation': {
          status: 'peu_probable',
          senses: ['annuler', 'invalider'],
          proof_ctx: 'Le sens d\'annulation juridique est possible pour baṭala (verbe), mais ici al-bāṭil est un nom désignant une qualité — le faux, ce qui est sans substance — pas un acte d\'annulation.'
        }
      }
    }
  },
  {
    word_key: 'ktm', position: 7,
    sense_chosen: 'dissimuler',
    reason: 'taktumūna = Form I inaccompli 2ème pluriel — vous dissimulez (la vérité). Distinct de talbisūna : mêler ≠ cacher.',
    analysis_axes: {
      sense_chosen: 'dissimuler',
      concept_chosen: 'Dissimulation/Secret',
      concepts: {
        'Dissimulation/Secret': {
          status: 'retenu',
          senses: ['cacher', 'taire', 'dissimuler', 'garder secret'],
          proof_ctx: 'Taktumūna décrit l\'acte de retenir la vérité pour qu\'elle ne soit pas connue — distinct de talbisūna (brouiller). Les deux verbes sont parallèles : on brouille d\'un côté ce qu\'on cache de l\'autre. La clausule « alors que vous savez » confirme que cette dissimulation est délibérée.'
        },
        'Répression/Étouffement': {
          status: 'peu_probable',
          senses: ['étouffer', 'réprimer', 'retenir (son souffle)'],
          proof_ctx: 'Le sens de réprimer/étouffer (un son, une émotion) est attesté pour la racine k-t-m mais ici taktumūna al-ḥaqq est un acte social et intellectuel — dissimuler la vérité — pas une répression physique.'
        },
        'Sens isolé/Teinture': { status: 'nul', senses: ['teindre (les cheveux)'], proof_ctx: 'Sens lexical isolé (plante katm), hors sujet.' }
      }
    }
  },
  {
    word_key: 'hqq', position: 8,
    sense_chosen: 'vérité',
    reason: 'al-ḥaqq — 2ème occurrence, objet de taktumūna. Répétition rhétorique : la vérité est à la fois mêlée ET dissimulée.',
    analysis_axes: {
      sense_chosen: 'vérité',
      concept_chosen: 'Vérité/Réalité',
      concepts: {
        'Vérité/Réalité': {
          status: 'retenu',
          senses: ['être vrai', 'vérité', 'réalité', 'droit'],
          proof_ctx: 'Même al-ḥaqq qu\'en position 5, ici objet de taktumūna (dissimuler). La répétition souligne que la même vérité est doublement traitée : mêlée au faux ET cachée. Même analyse étymologique et contextuelle.'
        },
        'Obligation/Nécessité': { status: 'nul', senses: ['devoir', 'mériter'], proof_ctx: 'Hors sujet — paire vrai/faux ici, pas droit/obligation.' },
        'Sens isolé/Se': { status: 'nul', senses: ['se réaliser'], proof_ctx: 'Sens verbal isolé.' },
        'Sens isolé/Vérifier': { status: 'nul', senses: ['vérifier'], proof_ctx: 'Sens verbal isolé.' }
      }
    }
  },
  {
    word_key: 'elm', position: 10,
    sense_chosen: 'savoir',
    reason: 'taʿlamūna (ḥāl) — vous savez, en pleine connaissance de cause. Symétrique à tashhadūna en V70.',
    analysis_axes: {
      sense_chosen: 'savoir',
      concept_chosen: 'Savoir/Connaissance',
      concepts: {
        'Savoir/Connaissance': {
          status: 'retenu',
          senses: ['savoir', 'connaître', 'être informé', 'certitude', 'savant', 'science', 'enseignement'],
          proof_ctx: 'Taʿlamūna dans la clausule ḥāl (wa-antum taʿlamūna) dit que leur acte de mêler et de dissimuler se fait en pleine connaissance de cause — comme en V70 (tashhadūna = vous êtes témoins). Les deux clausules construisent une accumulation : ils témoignent ET ils savent.'
        },
        'Marque/Signe': { status: 'nul', senses: ['marquer', 'signe', 'drapeau', 'montagne'], proof_ctx: 'Sens nominal (ʿālam) d\'une forme différente de la racine. Hors sujet ici.' },
        'Monde/Création': { status: 'nul', senses: ['monde', 'les mondes', 'univers'], proof_ctx: 'Sens nominal (ʿālam = monde). Hors sujet.' }
      }
    }
  }
];

// ═══════════════════════════════════════════════════════
// MAIN
// ═══════════════════════════════════════════════════════
async function run() {
  console.log('╔═══════════════════════════════════════════════════════╗');
  console.log('║   PIPELINE MAISON — S3:V71 (verse_id=' + VERSE_ID + ')             ║');
  console.log('╚═══════════════════════════════════════════════════════╝');

  // ─── ÉTAPE 2 — vérification richesse ───
  console.log('\n═══ ÉTAPE 2 — Vérification richesse racines ═══');
  const rootsCheck = [
    { key: 'ahl', aid: 736 }, { key: 'ktb', aid: 275 },
    { key: 'lbs', aid: 506 }, { key: 'hqq', aid: 409 },
    { key: 'btl', aid: 507 }, { key: 'ktm', aid: 471 }, { key: 'elm', aid: 254 }
  ];
  for (const r of rootsCheck) {
    const { data: wm } = await db.from('word_meanings').select('id').eq('analysis_id', r.aid);
    const n = wm ? wm.length : 0;
    console.log('  ' + r.key + ' (aid=' + r.aid + '): ' + n + ' sens ' + (n >= 5 ? '[OK → SKIP]' : '[<5 ENRICHIR]'));
  }
  console.log('  [ktm enrichi dans étape préliminaire : 4→8 sens via Lane\'s]');

  // ─── word_daily — toutes déjà remplies ───
  console.log('\n═══ word_daily ═══');
  for (const r of rootsCheck) {
    const { data: daily } = await db.from('word_daily').select('id').eq('analysis_id', r.aid);
    console.log('  ' + r.key + ': ' + (daily ? daily.length : 0) + ' phrases → SKIP');
  }

  // ─── ÉTAPES 1 & 4 — UPDATE verse_analyses ───
  console.log('\n═══ ÉTAPES 1 & 4 — verse_analyses UPDATE (va_id=' + VA_ID + ') ═══');
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
  console.log('  UPDATE OK');

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
    analysis_axes: { ...v.analysis_axes }
  }));
  const { error: vwaErr } = await db.from('verse_word_analyses').insert(vwaRows);
  if (vwaErr) throw vwaErr;
  console.log('  Insérés : ' + vwaRows.length + ' VWA');
  VWA_ROWS.forEach(v => console.log('    pos=' + v.position + ' ' + v.word_key + ' → « ' + v.sense_chosen + ' » [' + v.analysis_axes.concept_chosen + ']'));

  // ─── LOGS ───
  console.log('\n══════════════════════════════════════════════════════');
  console.log('VERSET 3:71 — TERMINÉ');
  console.log('  yā-ahlā (ahl)       → Famille/Communauté     → "Ô gens"');
  console.log('  al-kitābi (ktb)     → Livre/Écrit            → "de l\'Écriture"');
  console.log('  talbisūna (lbs)     → Confusion/Mélange      → "mêlez-vous"');
  console.log('  al-ḥaqqa/1 (hqq)    → Vérité/Réalité         → "la vérité"');
  console.log('  bi-l-bāṭili (btl)   → Vanité/Nullité         → "avec le faux"');
  console.log('  wa-taktumūna (ktm)  → Dissimulation/Secret   → "et dissimulez-vous"');
  console.log('  al-ḥaqqa/2 (hqq)    → Vérité/Réalité         → "la vérité"');
  console.log('  taʿlamūna (elm)     → Savoir/Connaissance    → "savez"');
  console.log('  Traduction : "' + TRANSLATION_ARAB + '"');
  console.log('╔═══════════════════════════════════════════════════════╗');
  console.log('║              PIPELINE S3:V71 TERMINÉE                ║');
  console.log('╚═══════════════════════════════════════════════════════╝');
}

run().catch(e => { console.error('ERREUR PIPELINE :', e); process.exit(1); });
