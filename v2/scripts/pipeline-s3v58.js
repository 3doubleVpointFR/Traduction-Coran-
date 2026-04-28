// Pipeline S3:V58 — Étape 1 (tagging) + Étape 2 (enrichissement) + Étape 3 (VWA) + Étape 4 (traduction)
// verse_id=351 (3:58)
// Texte: ذَٰلِكَ نَتْلُوهُ عَلَيْكَ مِنَ ٱلْـَٔايَـٰتِ وَٱلذِّكْرِ ٱلْحَكِيمِ
// Hamidullah: "Voilà ce que Nous te récitons des versets et de la sage invocation."
// Notre traduction (étymologique) : "Cela, Nous te le récitons parmi les signes et le rappel sage."

const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

const VERSE_ID = 351;
const SURAH = 3, VERSE = 58;
const ARABIC_TEXT = "ذَٰلِكَ نَتْلُوهُ عَلَيْكَ مِنَ ٱلْـَٔايَـٰتِ وَٱلذِّكْرِ ٱلْحَكِيمِ";

// ═══════════════════════════════════════════════════════════════════
// ÉTAPE 1 — Segments step1 (tagging grammatical)
// ═══════════════════════════════════════════════════════════════════

const SEGMENTS_STEP1 = [
  { type: 'important', pos: 'démonstratif', phon: 'dhālika', arabic: 'ذَٰلِكَ',
    key: null, root: null, gender: 'masculin', number: 'singulier', definite: true, position: 1 },
  { type: 'important', pos: 'verbe', phon: 'natlūhu', arabic: 'نَتْلُوهُ',
    key: 'tlw', root: 'ت ل و', tense: 'inaccompli', voice: 'actif', person: 1,
    number: 'pluriel', gender: null, verb_form: 'I', suffix_pronoun: 'hu',
    prefix_particle: null, definite: false, position: 2 },
  { type: 'particle', phon: 'ʿalayka', arabic: 'عَلَيْكَ', fr: 'sur toi', position: 3 },
  { type: 'particle', phon: 'mina', arabic: 'مِنَ', fr: 'parmi', position: 4 },
  { type: 'important', pos: 'nom', phon: 'al-āyāti', arabic: 'ٱلْـَٔايَـٰتِ',
    key: 'ayy', root: 'آ ي ي', gender: 'féminin', number: 'pluriel', definite: true,
    case_i18n: 'génitif', position: 5 },
  { type: 'particle', phon: 'wa', arabic: 'وَ', fr: 'et', position: 6 },
  { type: 'important', pos: 'nom', phon: 'adh-dhikri', arabic: 'ٱلذِّكْرِ',
    key: 'dhkr', root: 'ذ ك ر', gender: 'masculin', number: 'singulier', definite: true,
    case_i18n: 'génitif', position: 7 },
  { type: 'important', pos: 'adjectif', phon: 'al-ḥakīmi', arabic: 'ٱلْحَكِيمِ',
    key: 'hkm', root: 'ح ك م', gender: 'masculin', number: 'singulier', definite: true,
    case_i18n: 'génitif', position: 8 }
];

// ═══════════════════════════════════════════════════════════════════
// ÉTAPE 2 — ENRICHISSEMENTS
// ═══════════════════════════════════════════════════════════════════

// TLW (aid=730) : 3 sens existants (réciter, lire, succéder). Enrichir d'après Lane's.
const TLW_ENRICH = [
  { concept: 'Suite/Succession', sense: 'suivre',
    description: "Acte extérieur directionnel qui consiste à venir derrière quelqu'un ou quelque chose, immédiatement ou par l'esprit. D'après les sources étymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), talā signifie d'abord marcher derrière, aller après — c'est un mouvement de l'agent qui suit un autre, que ce soit un être physique ou un discours." },
  { concept: 'Suite/Succession', sense: 'marcher derrière',
    description: "Déplacement physique à la suite d'un autre." },
  { concept: 'Suite/Succession', sense: 'venir après',
    description: "Venir dans le temps ou l'espace après quelque chose, en ordre." },
  { concept: 'Récitation/Lecture suivie', sense: 'réciter suivi',
    description: "Transmettre un texte en le suivant mot à mot à voix haute. Le récitant suit le texte — chaque mot suit le précédent. C'est pourquoi la racine t-l-w désigne à la fois « suivre » et « réciter » : réciter, c'est suivre un ordre de mots. L'acte sort du récitant et atteint celui qui écoute." },
  { concept: 'Récitation/Lecture suivie', sense: 'lire à haute voix',
    description: "Transmettre à voix haute ce qui est écrit." },
  { concept: 'Consécutivité', sense: 'se succéder',
    description: "Événements ou personnes qui se succèdent sans rupture. Le Lane's donne tatālat = « les choses ou les événements se sont succédé consécutivement »." },
  { concept: 'Consécutivité', sense: 'venir consécutivement',
    description: "Venir à la suite les uns des autres." },
  { concept: 'Prolongation/Complément', sense: 'compléter en chantant',
    description: "Le Lane's donne tālāhu = « il l'a aidé dans le chant en reprenant la mélodie quand il ne pouvait plus prolonger sa voix ». Sens dérivé — prolonger ce que l'autre ne peut plus soutenir." },
  { concept: 'Engagement/Promesse', sense: 'responsabilité',
    description: "Le Lane's donne talā' = engagement par lequel on devient responsable de la sécurité d'un autre, flèche sur laquelle on écrit son nom pour garantir la protection." },
  { concept: 'Restant/Reste', sense: 'restant',
    description: "Le Lane's donne taliyyah = ce qui reste d'une chose." }
];

// AYY (aid=510) : 3 sens existants (quel, lequel, n'importe quel). Ces sens correspondent au pronom interrogatif ayyu — pas à notre mot dans le verset (āyāt = signes). Enrichir pour intégrer le sens de signe.
const AYY_ENRICH = [
  { concept: 'Signe/Marque', sense: 'signe',
    description: "Marque visible ou audible qui indique quelque chose d'autre qu'elle-même. Acte qui sort de celui qui le pose et atteint celui qui l'observe pour le diriger vers une réalité cachée. C'est par nature directionnel : le signe pointe vers autre chose. L'āyah désigne le signe éloquent, celui qui ne peut être confondu." },
  { concept: 'Signe/Marque', sense: 'marque distinctive',
    description: "Trait qui permet de reconnaître une chose parmi d'autres." },
  { concept: 'Signe/Marque', sense: 'indice',
    description: "Trace matérielle qui laisse deviner une réalité absente." },
  { concept: 'Verset/Énoncé', sense: 'verset',
    description: "Portion de texte structurée en unité de sens. Le mot āyah est employé dans le Coran pour désigner les versets qui sont autant de signes — chaque unité de texte est un signe qui renvoie à autre chose qu'elle-même." },
  { concept: 'Verset/Énoncé', sense: 'phrase remarquable',
    description: "Énoncé qui retient l'attention par sa force ou sa clarté." },
  { concept: 'Exemple/Témoin', sense: 'exemple remarquable',
    description: "Chose ou événement qui sert de témoignage visible d'une réalité. Le signe peut être un événement éclatant qui rend évidente une vérité." },
  { concept: 'Interrogation/Choix', sense: 'lequel (ayyu)',
    description: "Interrogatif et relatif — sert à choisir entre plusieurs options possibles. Sens grammatical distinct du sens de signe." }
];

// DHKR (aid=485) : 5 sens existants. ≥5 donc INTOUCHABLE pour ajout/suppression. On assigne seulement les concepts aux sens existants (NULL actuellement).

// HKM (aid=447) : 7 sens existants. ≥5 donc INTOUCHABLE. On assigne les concepts.

// Assignation concepts sur rows existantes (UPDATE uniquement) :
const DHKR_CONCEPT_MAP = {
  // sense (existant) → concept, description à écrire sur row existant
  'se souvenir': { concept: 'Rappel/Mention', description: "Acte intérieur de garder présent dans la mémoire ou de ramener à la conscience ce qui risque d'être oublié. La racine ذ ك ر dit d'abord le fait de maintenir vivante la présence d'une chose à l'esprit. Le Lane's donne dhakarahu = « il l'a conservé dans sa mémoire, il s'en est souvenu, il l'a rappelé à sa conscience »." },
  'rappeler': { concept: 'Rappel/Mention', description: "Acte extérieur dirigé vers l'autre — faire revenir à l'esprit de quelqu'un une chose qu'il avait oubliée ou qu'il pourrait oublier. Le rappel sort de celui qui le prononce et atteint celui qui l'écoute. Le Coran désigne souvent son propre texte comme dhikr, rappel adressé aux humains." },
  'mentionner': { concept: 'Rappel/Mention', description: "Dire une chose en la nommant — l'évocation verbale qui la place devant les oreilles de l'autre." },
  'mémoire': { concept: 'Mémoire/Souvenir', description: "La faculté ou l'objet du souvenir — le lieu intérieur où se conservent les choses rappelées et le contenu qui y est gardé. C'est le corrélat intérieur de l'acte de rappel." },
  'mâle': { concept: 'Sens isolé/Mâle', description: "Sens masculin de la racine ذ ك ر, homophone du sens de rappel. Le Lane's le signale comme sens propre sans connexion sémantique avec le rappel." }
};

const HKM_CONCEPT_MAP = {
  'juger': { concept: 'Jugement/Décision', description: "Acte extérieur dirigé vers l'objet jugé — prendre position sur une réalité et dire ce qu'elle est. D'après les sources étymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la racine ح ك م dit d'abord empêcher/restreindre : juger, c'est trancher en empêchant que d'autres issues demeurent possibles. Le jugement sort de celui qui juge et atteint la chose ou la personne jugée." },
  'décider': { concept: 'Jugement/Décision', description: "Trancher entre plusieurs possibilités pour en retenir une seule. Le Lane's donne ḥakama = « il a décidé judicieusement, il a arrêté sa décision »." },
  'sentence': { concept: 'Jugement/Décision', description: "Le contenu prononcé du jugement — la décision formulée." },
  'gouverner': { concept: 'Jugement/Décision', description: "Exercer l'autorité judiciaire et politique — celui qui gouverne est celui qui juge entre les gens. Le Lane's donne ḥākim = celui qui exerce l'autorité judiciaire, jurisdiction, gouverne." },
  'être sage': { concept: 'Sagesse/Connaissance', description: "État intérieur de connaissance profonde des choses et d'action conforme à cette connaissance. Le Lane's donne ḥikmah = ce qui empêche le comportement ignorant, la connaissance des vraies natures des choses et l'action selon leurs exigences. La sagesse sort du sage comme lumière et éclaire le monde, mais elle reste un attribut qui habite celui qui la possède." },
  'sagesse': { concept: 'Sagesse/Connaissance', description: "La qualité même d'être sage — la connaissance et la rectitude d'action qui caractérisent le sage." },
  'empêcher': { concept: 'Empêchement/Retenue', description: "Sens premier physique et concret de la racine — retenir, interdire, restreindre quelqu'un d'agir d'une manière déréglée. Le Lane's donne ḥakama = « il l'a empêché, retenu, d'agir d'une manière mauvaise ou corrompue, ou de faire ce qu'il désirait ». C'est de ce sens que dérivent tous les autres : le jugement empêche l'erreur, la sagesse empêche l'ignorance, le gouvernement empêche le désordre." }
};

async function enrichRoot(aid, label, newSenses) {
  console.log('\n--- Enrichissement ' + label + ' (aid=' + aid + ') ---');
  const { data: existing } = await db.from('word_meanings')
    .select('id,concept,sense,display_order')
    .eq('analysis_id', aid).order('display_order');
  console.log('  Existant: ' + existing.length + ' sens');
  const maxOrder = Math.max(...existing.map(s => s.display_order || 0), 0);
  const toInsert = newSenses.map((s, i) => ({
    ...s, analysis_id: aid, display_order: maxOrder + 1 + i, meaning_type: 'etymology'
  }));
  const { error } = await db.from('word_meanings').insert(toInsert);
  if (error) { console.log('  ERREUR: ' + error.message); throw error; }
  console.log('  Inséré: ' + toInsert.length + ' sens -> total ' + (existing.length + toInsert.length));
  await db.from('word_analyses').update({ analysis_step: 'etymology' }).eq('id', aid);
}

async function assignConcepts(aid, label, conceptMap) {
  console.log('\n--- Assignation concepts ' + label + ' (aid=' + aid + ') ---');
  const { data: existing } = await db.from('word_meanings')
    .select('id,concept,sense').eq('analysis_id', aid);
  let updated = 0;
  for (const row of existing || []) {
    const map = conceptMap[row.sense];
    if (!map) { console.log('  [SKIP] sens="' + row.sense + '" (pas dans map)'); continue; }
    if (row.concept) { console.log('  [SKIP] sens="' + row.sense + '" concept existe déjà: "' + row.concept + '"'); continue; }
    const { error } = await db.from('word_meanings')
      .update({ concept: map.concept, description: map.description })
      .eq('id', row.id);
    if (error) { console.log('  ERREUR: ' + error.message); throw error; }
    updated++;
    console.log('  [OK] "' + row.sense + '" -> concept="' + map.concept + '"');
  }
  console.log('  Total concepts assignés: ' + updated);
  await db.from('word_analyses').update({ analysis_step: 'etymology' }).eq('id', aid);
}

// ═══════════════════════════════════════════════════════════════════
// ÉTAPE 3 — VWA
// ═══════════════════════════════════════════════════════════════════

const VWA_ROWS = [
  // Position 2 — natlūhu (ت ل و) : verbe inaccompli 1re pluriel, actif, forme I, suffixe -hu
  {
    position: 2, word_key: 'tlw', sense_chosen: 'réciter suivi',
    reason: "Verbe inaccompli à la 1ʳᵉ personne du pluriel, voix active, forme I, avec pronom suffixe -hu qui renvoie à dhālika (cela). L'inaccompli marque une action en cours ou habituelle — Dieu dit « Nous te le récitons » à propos du récit de Jésus qui précède. La 1ʳᵉ personne du pluriel (« Nous ») désigne le locuteur divin qui s'adresse au Prophète (« à toi »). Le changement de voix par rapport aux versets 55-57 est net : après avoir rapporté les paroles adressées à Jésus, le texte revient à la situation de récitation où Dieu s'adresse directement à son envoyé.",
    analysis_axes: {
      concept_chosen: 'Récitation/Lecture suivie',
      concepts: {
        'Récitation/Lecture suivie': {
          status: 'retenu',
          senses: ['réciter suivi', 'lire à haute voix'],
          proof_ctx: "D'après les sources étymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), talā signifie transmettre un texte en le suivant mot à mot à voix haute. Le complément d'objet -hu (cela) renvoie au récit qui vient d'être rapporté — c'est ce récit qui est récité. Le verbe à l'inaccompli avec objet direct de type texte fixe le sens de récitation suivie, pas de poursuite physique. Ce sens est compatible avec la 1ʳᵉ personne pluriel active : Dieu, locuteur, transmet activement au Prophète, destinataire."
        },
        'Suite/Succession': {
          status: 'probable',
          senses: ['suivre', 'marcher derrière', 'venir après'],
          proof_ctx: "Sens premier de la racine — marcher derrière, venir après. Il éclaire l'étymologie de la récitation (réciter, c'est suivre mot à mot), mais seul, il ne rend pas compte du complément -hu qui renvoie à un récit et non à une personne à suivre physiquement. Dans le contexte d'un texte transmis, c'est la récitation qui est visée, pas le déplacement."
        },
        'Consécutivité': {
          status: 'peu_probable',
          senses: ['se succéder', 'venir consécutivement'],
          proof_ctx: "Sens dérivé qui décrit une succession d'événements ou de choses. Il ne convient pas à un verbe transitif direct dont l'objet est un récit singulier."
        },
        'Prolongation/Complément': {
          status: 'nul',
          senses: ['compléter en chantant'],
          proof_ctx: "Sens isolé lié au chant, sans rapport avec la situation du verset."
        },
        'Engagement/Promesse': {
          status: 'nul',
          senses: ['responsabilité'],
          proof_ctx: "Sens juridique dérivé, hors sujet dans le verset."
        },
        'Restant/Reste': {
          status: 'nul',
          senses: ['restant'],
          proof_ctx: "Sens nominal isolé, sans rapport."
        }
      }
    }
  },
  // Position 5 — al-āyāti (آ ي ي) : nom défini féminin pluriel génitif (après min)
  {
    position: 5, word_key: 'ayy', sense_chosen: 'signe',
    reason: "Nom défini féminin pluriel au cas génitif, après la préposition min qui désigne l'origine ou l'appartenance (parmi). La forme définie avec al- fixe le sens comme catégorie connue — les signes, au sens reconnu dans le Coran. Le verset précise que « cela » (le récit de Jésus rapporté en 55-57) fait partie de cette catégorie.",
    analysis_axes: {
      concept_chosen: 'Signe/Marque',
      concepts: {
        'Signe/Marque': {
          status: 'retenu',
          senses: ['signe', 'marque distinctive', 'indice'],
          proof_ctx: "Le sens retenu est la marque visible qui pointe vers une réalité autre qu'elle-même. Le récit de Jésus est présenté comme signe — il renvoie à la puissance du locuteur et à la réalité qu'il enseigne. Ce sens est compatible avec le nom défini pluriel précédé de min (parmi les signes) : le verset situe le récit dans une classe connue d'éléments à valeur démonstrative. La forme plurielle suggère que ce récit se range parmi d'autres signes de même nature que le destinataire du verset connaît déjà."
        },
        'Verset/Énoncé': {
          status: 'probable',
          senses: ['verset', 'phrase remarquable'],
          proof_ctx: "Sens dérivé et technique : l'unité de texte coranique est nommée āyah parce qu'elle est elle-même un signe. Il éclaire le sens retenu mais en restreint la portée à l'unité textuelle, alors que le verset parle d'un récit pris globalement comme signe — pas d'une simple unité de découpage."
        },
        'Exemple/Témoin': {
          status: 'probable',
          senses: ['exemple remarquable'],
          proof_ctx: "Sens proche du signe. L'exemple remarquable fonctionne comme signe, mais il met l'accent sur la dimension exemplaire, alors que le verset souligne plutôt la fonction de renvoi vers autre chose."
        },
        'Interrogation/Choix': {
          status: 'nul',
          senses: ['lequel (ayyu)'],
          proof_ctx: "Sens grammatical du pronom interrogatif-relatif ayyu. Hors sujet ici : le mot est un nom défini féminin pluriel, pas un interrogatif."
        }
      }
    }
  },
  // Position 7 — adh-dhikri (ذ ك ر) : nom défini masculin singulier génitif
  {
    position: 7, word_key: 'dhkr', sense_chosen: 'rappeler',
    reason: "Nom défini masculin singulier au cas génitif, coordonné à al-āyāt par la conjonction wa. La forme définie fixe le sens du rappel comme catégorie reconnue. Le nom est ici le nom d'action (maṣdar) qui désigne la réalité du rappel en général — ce qui fait revenir à l'esprit une chose.",
    analysis_axes: {
      concept_chosen: 'Rappel/Mention',
      concepts: {
        'Rappel/Mention': {
          status: 'retenu',
          senses: ['rappeler', 'se souvenir', 'mentionner'],
          proof_ctx: "Le sens retenu est l'acte qui fait revenir à la conscience de l'auditeur une réalité importante. Le Coran se désigne lui-même comme dhikr : le récit de Jésus joue ce rôle — il rappelle à qui l'entend une réalité qu'il pourrait oublier. Ce sens est compatible avec le nom défini masculin singulier : il nomme la catégorie connue du rappel, comme le font les autres nominations coraniques du livre (al-qurʾān, al-kitāb, adh-dhikr). La forme nominale du maṣdar rend l'acte de rappel en lui-même."
        },
        'Mémoire/Souvenir': {
          status: 'probable',
          senses: ['mémoire'],
          proof_ctx: "Sens intérieur qui désigne la faculté ou le contenu du souvenir. Il éclaire le sens retenu mais reste passif et intérieur, alors que le verset présente un rappel qui est récité activement au Prophète — un acte dirigé vers l'extérieur."
        },
        'Sens isolé/Mâle': {
          status: 'nul',
          senses: ['mâle'],
          proof_ctx: "Homophone sans rapport sémantique avec le rappel. Sens hors sujet."
        }
      }
    }
  },
  // Position 8 — al-ḥakīmi (ح ك م) : adjectif défini masculin singulier génitif, qualifie adh-dhikri
  {
    position: 8, word_key: 'hkm', sense_chosen: 'être sage',
    reason: "Adjectif défini masculin singulier au cas génitif, qualifie adh-dhikri avec lequel il s'accorde en genre, nombre et détermination. La forme faʿīl (ḥakīm) exprime une qualité pleinement installée dans la chose qui la porte — le rappel qui est sage à fond. La forme adjectivale attribue au rappel un caractère durable : ce rappel n'est pas un rappel passager mais un rappel qui enseigne et qui met en garde.",
    analysis_axes: {
      concept_chosen: 'Sagesse/Connaissance',
      concepts: {
        'Sagesse/Connaissance': {
          status: 'retenu',
          senses: ['être sage', 'sagesse'],
          proof_ctx: "Le sens retenu est l'état de connaissance profonde et d'action conforme à cette connaissance, attribué ici comme qualité du rappel. Le rappel est dit sage parce qu'il porte en lui la connaissance des réalités et l'empêchement de l'erreur — les deux ensemble. Ce sens est compatible avec l'adjectif défini qualifiant un nom : la sagesse est présentée comme propriété du rappel, pas comme acte ponctuel. L'axe coranique éclaire : les termes ḥakīm et ḥikmah sont systématiquement associés au texte révélé (al-kitāb wa-l-ḥikmah) et à la connaissance qui empêche l'ignorance."
        },
        'Jugement/Décision': {
          status: 'probable',
          senses: ['juger', 'décider', 'sentence', 'gouverner'],
          proof_ctx: "Sens actif de la racine — trancher entre plusieurs possibilités. Il éclaire la nature du ḥakīm qui discrimine ce qui est vrai de ce qui ne l'est pas, mais comme qualité du rappel, c'est la dimension de connaissance-sagesse qui prime sur l'acte judiciaire. Un rappel qui juge activement serait plutôt ḥākim (participe actif), pas ḥakīm (adjectif de qualité)."
        },
        'Empêchement/Retenue': {
          status: 'probable',
          senses: ['empêcher'],
          proof_ctx: "Sens premier physique de la racine — retenir, empêcher. Il est présent en filigrane dans la sagesse (ce qui empêche l'ignorance et l'erreur) mais le verset met l'accent sur la qualité positive de la sagesse plutôt que sur sa fonction d'empêchement."
        }
      }
    }
  }
];

// ═══════════════════════════════════════════════════════════════════
// ÉTAPE 4 — TRADUCTION
// ═══════════════════════════════════════════════════════════════════

const FULL_TRANSLATION_HAMIDULLAH =
  "Voilà ce que Nous te récitons des versets et de la sage invocation.";

const TRANSLATION_ARAB =
  "Cela, Nous te le récitons parmi les signes et parmi le rappel sage.";

const TRANSLATION_MEDITATIONAL =
  "Ce récit qui vient d'être prononcé, Dieu le récite à son envoyé : il appartient à la classe des signes qui renvoient à lui, et à la classe des rappels qui gardent l'humain de l'oubli. Un signe parmi d'autres, un rappel plein de sagesse.";

const TRANSLATION_EXPLANATION = `§DEMARCHE§
Le verset 58 marque un changement de voix par rapport aux versets 55-57. Dans les versets précédents, Dieu parlait à Jésus (« Je te fais mourir, Je t'élève... ») et annonçait le sort des deux groupes (ceux qui rejettent / ceux qui s'engagent). Ici, le narrateur revient à la situation de récitation : Dieu s'adresse directement à son envoyé pour lui dire que ce récit qu'il vient d'entendre appartient à une classe précise — celle des signes et celle du rappel sage.

**Dhālika** (cela) est un pronom démonstratif éloigné, masculin singulier. Il renvoie à ce qui a été dit juste avant — le récit complet de Jésus depuis le verset 33 ou au moins depuis 55. « Éloigné » ne signifie pas « lointain dans le temps » ; en arabe, le démonstratif éloigné sert à pointer ce qui est hors de la sphère immédiate du locuteur, ce qui a été posé comme objet de discours.

**Natlūhu** (Nous te le récitons) est un verbe à l'inaccompli, à la 1ʳᵉ personne du pluriel, à la voix active, à la forme I, avec le pronom suffixe -hu qui renvoie à dhālika. L'inaccompli indique une action en cours ou habituelle — la récitation n'est pas un acte ponctuel achevé mais un acte qui se déroule. Le pluriel « Nous » est le pluriel que Dieu emploie pour se désigner lorsqu'il parle de lui-même. La racine t-l-w signifie d'abord « suivre, marcher derrière » ; d'après les sources étymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), elle désigne aussi l'acte de réciter un texte en le suivant mot à mot — réciter, c'est suivre un ordre de mots à voix haute.

**ʿAlayka** (sur toi) est la préposition ʿalā avec le pronom suffixe -ka de la 2ᵉ personne du masculin singulier. Littéralement « sur toi » — c'est la construction arabe pour dire « à ton intention » quand l'acte se pose comme venant d'en haut vers le destinataire. Le destinataire est le Prophète.

**Mina** (parmi) est la préposition min qui indique l'origine, l'appartenance ou la partition. Ici elle sert à situer « cela » dans un ensemble plus large.

**Al-āyāti** (les signes) est un nom défini féminin pluriel au cas génitif (après la préposition min). La racine a-y-y est celle qui donne āyah — la marque visible qui pointe vers une réalité autre qu'elle-même. Le pluriel définit une catégorie connue : « les signes » comme classe reconnue. Le verset dit donc que ce récit fait partie de cette classe — il est à ranger parmi les signes.

**Adh-dhikri** (le rappel) est un nom défini masculin singulier au cas génitif, coordonné à al-āyāt par la conjonction wa. La racine dh-k-r signifie « faire revenir à l'esprit, mentionner, rappeler ». Le Coran se désigne lui-même à plusieurs reprises par le terme adh-dhikr — le Rappel. Le verset range donc aussi ce récit dans cette seconde catégorie.

**Al-ḥakīmi** (sage) est un adjectif défini masculin singulier au cas génitif, qualifie adh-dhikri avec lequel il s'accorde en genre, nombre et détermination. La forme faʿīl exprime une qualité pleinement installée dans la chose qui la porte. La racine ḥ-k-m a pour sens premier « empêcher, retenir » ; d'après les sources étymologiques, elle désigne aussi la connaissance des vraies natures des choses et l'action conforme à cette connaissance — c'est ce qui empêche l'ignorance et l'erreur. Le rappel est dit sage parce qu'il enseigne ce qu'il faut savoir et met en garde contre ce qu'il faut éviter.

§JUSTIFICATION§
**réciter** — Le sens retenu est « Récitation/Lecture suivie ». Le mot « réciter » est choisi parce qu'il rend l'acte de transmettre un texte à voix haute en le suivant mot à mot. L'alternative « lire à haute voix » est écartée parce que lire implique un support écrit présent — le verbe talā s'applique à la transmission orale d'un récit déjà connu. L'alternative « suivre » (sens premier) est écartée parce qu'elle ne rend pas la transmission vocale — elle décrit un mouvement de l'agent derrière un autre. Le sens de succession ou de consécution ne convient pas non plus car l'objet direct -hu renvoie à un récit, pas à une série d'événements.

**signes (al-āyāt)** — Le sens retenu est « Signe/Marque ». Le mot « signes » est choisi parce qu'il rend la fonction de renvoi : ce qui pointe vers autre chose que soi. L'alternative « versets » est écartée parce qu'elle projette la notion tardive d'unité textuelle numérotée — le mot arabe āyah dit d'abord la marque démonstrative, pas le découpage éditorial. « Miracles » est écarté parce qu'il importe une catégorie théologique postérieure — āyah dit neutrement « signe », qu'il soit miraculeux ou non. « Preuves » est écarté parce qu'il insiste sur la démonstration logique, alors que āyah dit la marque qui fait voir.

**rappel (adh-dhikr)** — Le sens retenu est « Rappel/Mention ». Le mot « rappel » est choisi parce qu'il rend l'acte de faire revenir à l'esprit ce qui pourrait être oublié. L'alternative « mention » est possible mais plus faible — mentionner, c'est nommer, alors que rappeler ajoute l'idée de ramener à la conscience. « Souvenir » est écarté parce qu'il désigne plutôt ce qui est gardé en mémoire (le résultat) que l'acte qui fait revenir à la mémoire. « Invocation » (présente dans la traduction Hamidullah) est écartée parce qu'elle désigne l'acte d'appeler Dieu, ce que la racine ذ ك ر ne dit pas ici : le rappel dont il s'agit est adressé au Prophète et à travers lui aux humains, pas un appel prononcé vers Dieu.

**sage (al-ḥakīm)** — Le sens retenu est « Sagesse/Connaissance ». Le mot « sage » est choisi parce qu'il rend la qualité d'un rappel qui contient la connaissance vraie et ce qui empêche l'ignorance. L'alternative « sensé » est écartée parce qu'elle décrit ce qui a du bon sens, alors que ḥakīm dit une sagesse profonde, pas le simple bon sens. « Judicieux » est écarté parce qu'il insiste sur le discernement ponctuel plutôt que sur la sagesse installée. « Plein de sagesse » est une périphrase qui rend bien la forme faʿīl mais le mot « sage » seul suffit.

§CRITIQUE§
**signes vs versets** — Hamidullah traduit al-āyāt par « les versets ». Ce choix projette sur le mot arabe la notion tardive et technique d'unité textuelle numérotée qui découpe le texte. Or le texte dit al-āyāt, la racine a-y-y donne āyah = marque, signe qui pointe vers autre chose. Quand le verset déclare que « cela fait partie des signes », il ne dit pas « cela fait partie des versets » (tautologie — un verset coranique fait évidemment partie des versets coraniques), il dit que le récit de Jésus appartient à la classe des marques qui renvoient à la puissance et à la connaissance de Dieu. « Versets » fait disparaître la fonction démonstrative du signe et réduit le mot à un sens bureaucratique d'édition.

**rappel vs invocation** — Hamidullah traduit adh-dhikr par « invocation ». « Invocation » désigne l'acte par lequel on appelle Dieu ou on le prie. Le mot arabe dhikr dit l'acte de faire revenir à l'esprit, de mentionner, de rappeler — il peut s'appliquer à l'évocation de Dieu, mais il n'est pas limité à l'appel vers Dieu. Dans ce verset, le rappel est adressé du haut vers le Prophète (« Nous te le récitons ») : c'est Dieu qui rappelle à l'humain, pas l'humain qui appelle Dieu. « Invocation » inverse la direction de l'acte.

**sage (construction) vs la sage invocation** — Hamidullah place « sage » comme attribut de « invocation ». Cela reste grammaticalement correct, mais le décalage du mot « invocation » à la place de « rappel » déplace aussi la qualité sage : dans le texte, c'est le rappel qui est sage (il enseigne ce qu'il faut savoir), pas une invocation qui serait judicieuse. La qualification reste cohérente avec notre traduction quand elle est rattachée à « rappel ».`;

const SEGMENTS = [
  { fr: 'cela', pos: 'démonstratif', phon: 'dhālika', arabic: 'ذَٰلِكَ', word_key: null, is_particle: false, sense_retenu: null, position: 1 },
  { fr: 'Nous te le récitons', pos: 'verbe', phon: 'natlūhu', arabic: 'نَتْلُوهُ', word_key: 'tlw', is_particle: false, sense_retenu: 'réciter suivi', position: 2 },
  { fr: 'sur toi', pos: null, phon: 'ʿalayka', arabic: 'عَلَيْكَ', word_key: null, is_particle: true, sense_retenu: null, position: 3 },
  { fr: 'parmi', pos: null, phon: 'mina', arabic: 'مِنَ', word_key: null, is_particle: true, sense_retenu: null, position: 4 },
  { fr: 'les signes', pos: 'nom', phon: 'al-āyāti', arabic: 'ٱلْـَٔايَـٰتِ', word_key: 'ayy', is_particle: false, sense_retenu: 'signe', position: 5 },
  { fr: 'et', pos: null, phon: 'wa', arabic: 'وَ', word_key: null, is_particle: true, sense_retenu: null, position: 6 },
  { fr: 'le rappel', pos: 'nom', phon: 'adh-dhikri', arabic: 'ٱلذِّكْرِ', word_key: 'dhkr', is_particle: false, sense_retenu: 'rappeler', position: 7 },
  { fr: 'sage', pos: 'adjectif', phon: 'al-ḥakīmi', arabic: 'ٱلْحَكِيمِ', word_key: 'hkm', is_particle: false, sense_retenu: 'être sage', position: 8 }
];

// ═══════════════════════════════════════════════════════════════════
// RUN
// ═══════════════════════════════════════════════════════════════════

async function run() {
  console.log('╔═══════════════════════════════════════════════════════╗');
  console.log('║   PIPELINE MAISON — S3:V58 (verse_id=' + VERSE_ID + ')             ║');
  console.log('╚═══════════════════════════════════════════════════════╝');

  // --- ÉTAPE 2 : enrichissements ---
  console.log('\n═══ ÉTAPE 2 — ENRICHISSEMENTS ═══');
  await enrichRoot(730, 'tlw (ت ل و)', TLW_ENRICH);
  await enrichRoot(510, 'ayy (آ ي ي)', AYY_ENRICH);
  await assignConcepts(485, 'dhkr (ذ ك ر)', DHKR_CONCEPT_MAP);
  await assignConcepts(447, 'hkm (ح ك م)', HKM_CONCEPT_MAP);

  // --- ÉTAPE 1 + 4 : créer verse_analyses ---
  console.log('\n═══ ÉTAPES 1 & 4 — verse_analyses ═══');
  // Check existing
  const { data: existingVa } = await db.from('verse_analyses')
    .select('id').eq('verse_id', VERSE_ID);
  let vaId;
  if (existingVa && existingVa.length) {
    vaId = existingVa[0].id;
    console.log('Row existante va_id=' + vaId + ' -> UPDATE');
    const { error: vaErr } = await db.from('verse_analyses').update({
      segments_step1: SEGMENTS_STEP1,
      full_translation: FULL_TRANSLATION_HAMIDULLAH,
      translation_arab: TRANSLATION_ARAB,
      translation_meditational: TRANSLATION_MEDITATIONAL,
      translation_explanation: TRANSLATION_EXPLANATION,
      segments: SEGMENTS,
      validated: true,
      model_used: 'claude-opus-4-pipeline-maison',
      prompt_version: 'v3'
    }).eq('id', vaId);
    if (vaErr) throw vaErr;
  } else {
    console.log('Row absente -> INSERT');
    const { data: inserted, error: vaErr } = await db.from('verse_analyses').insert({
      verse_id: VERSE_ID,
      segments_step1: SEGMENTS_STEP1,
      full_translation: FULL_TRANSLATION_HAMIDULLAH,
      translation_arab: TRANSLATION_ARAB,
      translation_meditational: TRANSLATION_MEDITATIONAL,
      translation_explanation: TRANSLATION_EXPLANATION,
      segments: SEGMENTS,
      validated: true,
      model_used: 'claude-opus-4-pipeline-maison',
      prompt_version: 'v3'
    }).select('id').single();
    if (vaErr) throw vaErr;
    vaId = inserted.id;
    console.log('Inséré va_id=' + vaId);
  }

  // --- ÉTAPE 3 : VWA ---
  console.log('\n═══ ÉTAPE 3 — VWA ═══');
  const { data: existingVwa } = await db.from('verse_word_analyses').select('id').eq('verse_id', VERSE_ID);
  if (existingVwa && existingVwa.length) {
    await db.from('verse_word_analyses').delete().eq('verse_id', VERSE_ID);
    console.log('Clean: ' + existingVwa.length + ' VWA supprimés.');
  }
  const vwaRows = VWA_ROWS.map(v => ({
    verse_id: VERSE_ID,
    word_key: v.word_key,
    position: v.position,
    sense_chosen: v.sense_chosen,
    reason: v.reason,
    analysis_axes: v.analysis_axes
  }));
  const { error: vwaErr } = await db.from('verse_word_analyses').insert(vwaRows);
  if (vwaErr) throw vwaErr;
  console.log('Insérés : ' + vwaRows.length + ' VWA');

  console.log('\n╔═══════════════════════════════════════════════════════╗');
  console.log('║              PIPELINE S3:V58 TERMINÉE                 ║');
  console.log('╚═══════════════════════════════════════════════════════╝');
}

run().catch(e => { console.error(e); process.exit(1); });
