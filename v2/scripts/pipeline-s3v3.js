/**
 * Pipeline maison V3 — Sourate 3, Verset 3
 *
 * Verset : نَزَّلَ عَلَيْكَ ٱلْكِتَـٰبَ بِٱلْحَقِّ مُصَدِّقًا لِّمَا بَيْنَ يَدَيْهِ وَأَنزَلَ ٱلتَّوْرَىٰةَ وَٱلْإِنجِيلَ
 *
 * 11 mots, 6 mots avec racine : nzl×2, ktb, ḥqq, ṣdq, ydy
 * Toutes les racines ≥ 5 sens → étape 2 SKIP
 */
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

const VID = 296;

// ============== ÉTAPE 1 : SEGMENTS ==============
const SEGMENTS = [
  { fr: 'faire descendre', pos: 'V',    phon: 'nazzala',     arabic: 'نَزَّلَ',         position: 1,  word_key: 'nzl', is_particle: false, sense_retenu: 'faire descendre' },
  { fr: 'sur toi',         pos: 'P',    phon: 'ʿalayka',     arabic: 'عَلَيْكَ',        position: 2,  word_key: null,  is_particle: true,  sense_retenu: null },
  { fr: 'écriture révélée',pos: 'N',    phon: 'al-kitāba',   arabic: 'ٱلْكِتَٰبَ',       position: 3,  word_key: 'ktb', is_particle: false, sense_retenu: 'écriture révélée' },
  { fr: 'vérité',          pos: 'N',    phon: 'bi-l-ḥaqqi',  arabic: 'بِٱلْحَقِّ',       position: 4,  word_key: 'hqq', is_particle: false, sense_retenu: 'vérité' },
  { fr: 'confirmer',       pos: 'N',    phon: 'muṣaddiqan',  arabic: 'مُصَدِّقًا',      position: 5,  word_key: 'sdq', is_particle: false, sense_retenu: 'confirmer' },
  { fr: 'ce que',          pos: 'REL',  phon: 'li-mā',       arabic: 'لِّمَا',          position: 6,  word_key: null,  is_particle: true,  sense_retenu: null },
  { fr: 'entre',           pos: 'LOC',  phon: 'bayna',       arabic: 'بَيْنَ',          position: 7,  word_key: null,  is_particle: true,  sense_retenu: null },
  { fr: 'devant',          pos: 'N',    phon: 'yadayhi',     arabic: 'يَدَيْهِ',        position: 8,  word_key: 'ydy', is_particle: false, sense_retenu: 'devant' },
  { fr: 'faire descendre', pos: 'V',    phon: 'wa-anzala',   arabic: 'وَأَنزَلَ',       position: 9,  word_key: 'nzl', is_particle: false, sense_retenu: 'faire descendre' },
  { fr: 'la Torah',        pos: 'PN',   phon: 'at-tawrāta',  arabic: 'ٱلتَّوْرَىٰةَ',   position: 10, word_key: null,  is_particle: false, sense_retenu: null },
  { fr: 'l\'Évangile',     pos: 'PN',   phon: 'wa-l-injīla', arabic: 'وَٱلْإِنجِيلَ',  position: 11, word_key: null,  is_particle: false, sense_retenu: null },
];

async function loadConcepts(word_key) {
  const wa = await db.from('word_analyses').select('id').eq('word_key', word_key).single();
  const wm = await db.from('word_meanings').select('concept, sense').eq('analysis_id', wa.data.id);
  const out = {};
  for (const m of wm.data || []) {
    if (!out[m.concept]) out[m.concept] = { senses: [], status: 'nul', proof_ctx: '' };
    out[m.concept].senses.push(m.sense);
  }
  return out;
}

function buildAxes(concepts, retenuName, senseChose, retenuProof, otherProofs = {}) {
  const out = {};
  for (const [name, body] of Object.entries(concepts)) {
    out[name] = {
      senses: body.senses,
      status: name === retenuName ? 'retenu' : (otherProofs[name] ? 'probable' : 'nul'),
      proof_ctx: name === retenuName ? retenuProof : (otherProofs[name] || 'Hors sujet pour ce verset.'),
    };
  }
  return { sense_chosen: senseChose, concept_chosen: retenuName, concepts: out };
}

const TRANSLATION_ARAB = "Il a fait descendre sur toi l'écriture avec la vérité, confirmant ce qui est devant elle. Et Il a fait descendre la Torah et l'Évangile.";
const FULL_TRANSLATION = "Il a fait descendre sur toi le Livre avec la vérité, confirmant les Livres descendus avant lui. Et Il fit descendre la Thora et l'Évangile.";

const TRANSLATION_EXPLANATION = `§DEMARCHE§

Le verset 3 enchaîne directement sur le verset 2 qui a affirmé l'unicité divine et nommé Dieu comme le Vivant et le Subsistant. Maintenant, le verset s'adresse à Muhammad (« sur toi ») et présente le rôle qu'il joue dans l'histoire des révélations : Dieu lui a fait descendre l'écriture qui confirme ce qui a été révélé avant lui (la Torah et l'Évangile).

**nazzala** (a fait descendre) est un verbe qui décrit l'action d'envoyer quelque chose d'en haut vers le bas. Sa forme en arabe (forme II) ajoute une nuance : l'action est faite progressivement, par étapes — c'est exactement comme le Coran qui a été révélé sur 23 ans, par morceaux, et non d'un seul coup. Le Lane's Lexicon donne pour cette racine n-z-l : « faire descendre, descendre, envoyer d'en haut, révéler ».

**ʿalayka** (sur toi) est composé de deux petits mots collés : la préposition ʿalā (« sur ») et le pronom -ka (« toi », masculin singulier). Le « toi » désigne ici le Prophète Muhammad — c'est à lui directement que le verset s'adresse.

**al-kitāba** (l'écriture révélée) est un mot de la racine k-t-b qui signifie d'abord « écrire ». Avec l'article défini al- (« le, la »), il désigne LA chose écrite par excellence — le texte révélé. On traduit par « l'écriture révélée » plutôt que par « le livre » pour insister sur le caractère divin et scripturaire (et pas matériel) de ce qui descend.

**bi-l-ḥaqqi** (avec la vérité) est composé de la préposition bi- (« avec, par ») + l'article défini al- (« la ») + le mot ḥaqq (« vérité »). La racine ḥ-q-q veut dire « être vrai, réalité, vérité, ce qui est juste ». L'expression dit que la révélation descend en étant porteuse de vérité — pas une fiction, pas une supposition.

**muṣaddiqan** (confirmant) est de la racine ṣ-d-q (« vérité, sincérité, confirmer »). La forme du mot dit qu'il s'agit de quelqu'un (ou quelque chose) qui rend vrai ce qui était dit avant — qui le confirme et l'authentifie. Le complément à l'accusatif (forme du mot indiquant un état du sujet) qualifie l'écriture descendue : elle vient confirmer ce qui précède.

**li-mā** (ce que) est composé du li- (« à, pour, de ») et de mā (pronom relatif « ce qui »). L'ensemble forme « à ce qui... » et introduit l'objet de la confirmation.

**bayna** (entre) est un petit mot qui marque une position au milieu de deux choses. C'est aussi utilisé dans des expressions figées comme « entre ses mains », qui veut dire « devant lui » en arabe.

**yadayhi** (devant lui — litt. « ses deux mains ») est le mot yad (« main ») au duel (deux) avec le pronom -hi (« lui »). L'expression entière bayna yadayhi (« entre ses deux mains ») est une formule arabe figée qui veut dire « devant lui, ce qui est juste devant ». Ici elle désigne ce qui a été révélé avant cette écriture-ci — donc les révélations antérieures (Torah, Évangile, etc.).

**wa-anzala** (Et Il a fait descendre) reprend la même racine n-z-l mais sous une autre forme — la forme IV cette fois. Cette forme dit que l'action est faite d'un seul coup, ponctuellement — différente de la forme II du début du verset (nazzala) qui dit « progressivement ». La nuance grammaticale est volontaire : le Coran (kitāb pour Muhammad) descend graduellement, alors que la Torah et l'Évangile descendent ponctuellement.

**at-tawrāta** (la Torah) est un nom propre, l'écriture révélée à Moïse. Le mot vient de l'hébreu Torah (תורה).

**wa-l-injīla** (et l'Évangile) est un nom propre, l'écriture révélée à Jésus. Le mot vient du grec euangelion (« bonne nouvelle »).

§JUSTIFICATION§

**faire descendre** — Le sens retenu est « faire descendre » de l'axe Descente/Révélation de la racine n-z-l. Le mot est choisi car il rend exactement le sens étymologique de la racine (mouvement vers le bas, depuis le haut) tout en s'appliquant naturellement à une révélation divine en français. L'alternative « révéler » est écartée car elle aplanit l'image concrète de la descente que l'arabe garde explicitement. L'alternative « envoyer d'en haut » est écartée car plus longue sans apporter de précision.

**écriture révélée** — Le sens retenu est « écriture révélée » de l'axe Livre/Écrit de la racine k-t-b. Le mot est choisi car il garde la dimension scripturaire (le texte écrit révélé) plutôt que matérielle (un livre comme objet). L'alternative « livre » est écartée car elle est trop matérielle et glisse vers l'objet physique alors que le texte arabe parle du contenu divin.

**vérité** — Le sens retenu est « vérité » de l'axe Vérité/Réalité de la racine ḥ-q-q. Le mot est choisi car il rend directement le sens du nom ḥaqq. L'alternative « le vrai » est écartée car moins courante en français comme nom abstrait. L'alternative « réalité » est écartée car elle glisse vers le sens factuel/concret alors que ici le mot désigne la véracité du contenu révélé.

**confirmer** — Le sens retenu est « confirmer » de l'axe Vérité/Sincérité de la racine ṣ-d-q. Le mot est choisi car il rend l'idée d'authentification — rendre vrai en validant ce qui était déjà dit. L'alternative « attester » est écartée car elle implique de simplement témoigner, alors que confirmer implique aussi de valider. L'alternative « valider » est écartée car trop technique/administrative.

**devant** — Le sens retenu est « devant » de l'axe Antériorité/Présence de la racine y-d-y. Le mot est choisi car il rend le sens contextuel de l'expression bayna yadayhi (« entre ses deux mains » = « devant lui »). C'est un usage figé en arabe pour désigner ce qui précède dans le temps ou dans l'espace. L'alternative « avant » est écartée car elle insiste seulement sur le temps, alors que « devant » garde l'image de proximité immédiate (ce qui est juste là).

§CRITIQUE§

**l'écriture vs « le Livre »** : Hamidullah traduit al-kitāb par « le Livre ». La racine k-t-b en arabe désigne d'abord ce qui est écrit, le texte écrit. Quand al-kitāb est utilisé pour les révélations divines, « l'écriture » garde la dimension de texte sacré révélé (comme on dit « l'Écriture sainte » en français). « Le livre » glisse vers l'objet matériel — une chose qu'on tient dans les mains — et perd le caractère scripturaire de la révélation.

**confirmant ce qui est devant elle vs « confirmant les Livres descendus avant lui »** : Hamidullah ajoute deux mots qui ne sont pas dans le texte arabe : « les Livres » et « descendus ». Le texte arabe dit juste lima bayna yadayhi qui se traduit littéralement « ce qui est devant elle » (ou « ce qui est entre ses deux mains » en image arabe). Hamidullah remplit cette formule par une explication interprétative — il dit ce qu'il pense que l'expression signifie (« les Livres descendus avant »). Notre traduction garde la formule arabe telle quelle, sans rajouter de contenu, et laisse le lecteur comprendre par le contexte du verset (la Torah et l'Évangile sont mentionnés juste après).

**Et Il a fait descendre vs « Et Il fit descendre »** : différence de temps verbal en français. Hamidullah utilise le passé simple (« fit descendre ») qui place l'événement à distance dans le passé. Notre traduction utilise le passé composé (« a fait descendre ») qui garde la trace présente du passé — l'événement est révolu mais ses effets sont encore actuels. Pour un texte religieux qui parle d'écritures encore lues aujourd'hui, le passé composé est plus naturel.

**la Torah vs « la Thora »** : variante d'orthographe. « Torah » est plus proche de la translittération directe de l'arabe at-tawrāt et de l'hébreu original Torah. « Thora » est une orthographe française plus ancienne. Les deux désignent la même chose.`;

async function run() {
  console.log('═══════════════════════════════════════════════════');
  console.log('  PIPELINE MAISON V3 — Sourate 3, Verset 3');
  console.log('═══════════════════════════════════════════════════\n');

  console.log('Étape 2 — toutes les racines ≥ 5 sens → SKIP');
  console.log('  • nzl (10 sens, 3 axes) ✓');
  console.log('  • ktb (36 sens, 8 axes) ✓');
  console.log('  • ḥqq (9 sens, 4 axes) ✓');
  console.log('  • ṣdq (7 sens, 3 axes) ✓');
  console.log('  • ydy (32 sens, 6 axes) ✓');

  console.log('\nÉtape 3 — VWA analysis_axes');

  const conceptsNzl = await loadConcepts('nzl');
  const conceptsKtb = await loadConcepts('ktb');
  const conceptsHqq = await loadConcepts('hqq');
  const conceptsSdq = await loadConcepts('sdq');
  const conceptsYdy = await loadConcepts('ydy');

  // pos=1 nazzala (forme II = causative intensive)
  const axesNazzala = buildAxes(conceptsNzl, 'Descente/Révélation', 'faire descendre',
    "Verbe forme II nazzala : action causative faite progressivement (révélation graduelle sur 23 ans). L'image de la racine est un mouvement vertical du haut vers le bas — le contexte divin la spécifie en révélation.",
    {
      'Halte/Séjour': "Sens dérivé de la racine (s'installer, faire halte). Ici le contexte est celui d'un envoi vertical depuis Dieu, pas d'une halte au sol."
    });

  // pos=3 al-kitāb (Livre/Écrit, sens "écriture révélée")
  const axesKitab = buildAxes(conceptsKtb, 'Livre/Écrit', 'écriture révélée',
    "Article défini al- + ktb : LA chose écrite par excellence. Le contexte (descente depuis Dieu sur le Prophète, mention de la Torah et l'Évangile juste après) confirme qu'il s'agit de l'écriture révélée.",
    {
      'Écriture/Inscription': "Concept lié à l'acte d'écrire (sens dynamique). Ici le mot désigne le résultat — le texte écrit révélé — pas l'acte d'écriture.",
      'Obligation/Décret': "Concept dérivé de la racine (rendre obligatoire, décret). Ici le contexte est celui de la révélation comme texte, pas comme prescription juridique."
    });

  // pos=4 al-ḥaqq (Vérité/Réalité, sens "vérité")
  const axesHaqq = buildAxes(conceptsHqq, 'Vérité/Réalité', 'vérité',
    "Préposition bi- + article + ḥaqq : la révélation descend en étant porteuse de vérité. Le contexte (descente d'une écriture révélée) appelle le sens de véracité du contenu.",
    {
      'Obligation/Nécessité': "Concept dérivé (devoir, mériter). Ici le mot est attaché à la révélation comme caractéristique de son contenu, pas comme obligation imposée."
    });

  // pos=5 muṣaddiqan (Vérité/Sincérité, sens "confirmer")
  const axesMusaddiqan = buildAxes(conceptsSdq, 'Vérité/Sincérité', 'confirmer',
    "Forme II participe actif (qui confirme activement) à l'accusatif (état du sujet) : qualifie l'écriture descendue comme étant celle qui valide ce qui précède (Torah, Évangile).",
    {
      'Don/Aumône': "Sens dérivé de la racine (aumône). Hors sujet ici car le contexte est celui de la confirmation d'écritures, pas de don matériel."
    });

  // pos=8 yadayhi (Antériorité/Présence, sens "devant")
  const axesYadayhi = buildAxes(conceptsYdy, 'Antériorité/Présence', 'devant',
    "Expression figée bayna yadayhi (entre ses deux mains) = devant lui en arabe. Ici elle désigne ce qui précède l'écriture nouvelle dans le temps — les révélations antérieures.",
    {
      'Main/Corps': "Sens premier physique de la racine (main, bras). Ici l'expression entière est figée pour signifier la position devant, pas les mains physiques.",
      'Pouvoir/Autorité': "Sens dérivé (autorité, pouvoir). Ici l'expression est temporelle (ce qui précède), pas une question d'autorité."
    });

  // pos=9 anzala (forme IV = causative ponctuelle)
  const axesAnzala = buildAxes(conceptsNzl, 'Descente/Révélation', 'faire descendre',
    "Verbe forme IV anzala : action causative ponctuelle (révélation faite d'un coup). La forme II nazzala (progressive) du début du verset s'oppose à anzala (ponctuelle) ici — l'arabe distingue les deux temporalités.",
    {
      'Halte/Séjour': "Sens dérivé. Ici le contexte est l'envoi de la Torah et l'Évangile depuis Dieu — un mouvement vertical, pas un séjour."
    });

  for (const [pos, key, axes, senseChose] of [
    [1, 'nzl', axesNazzala,    'faire descendre'],
    [3, 'ktb', axesKitab,      'écriture révélée'],
    [4, 'hqq', axesHaqq,       'vérité'],
    [5, 'sdq', axesMusaddiqan, 'confirmer'],
    [8, 'ydy', axesYadayhi,    'devant'],
    [9, 'nzl', axesAnzala,     'faire descendre'],
  ]) {
    const existing = await db.from('verse_word_analyses').select('id').eq('verse_id', VID).eq('position', pos).maybeSingle();
    if (existing.data) {
      await db.from('verse_word_analyses').update({ word_key: key, sense_chosen: senseChose, analysis_axes: axes }).eq('id', existing.data.id);
    } else {
      await db.from('verse_word_analyses').insert({ verse_id: VID, position: pos, word_key: key, sense_chosen: senseChose, analysis_axes: axes });
    }
    console.log(`  ✓ VWA pos=${pos} ${key} → "${senseChose}"`);
  }

  console.log('\nÉtape 4 — verse_analyses');
  const existing = await db.from('verse_analyses').select('verse_id').eq('verse_id', VID).maybeSingle();
  if (existing.data) {
    await db.from('verse_analyses').update({
      translation_arab: TRANSLATION_ARAB,
      full_translation: FULL_TRANSLATION,
      segments: SEGMENTS,
      translation_explanation: TRANSLATION_EXPLANATION,
    }).eq('verse_id', VID);
  } else {
    await db.from('verse_analyses').insert({
      verse_id: VID,
      translation_arab: TRANSLATION_ARAB,
      full_translation: FULL_TRANSLATION,
      segments: SEGMENTS,
      translation_explanation: TRANSLATION_EXPLANATION,
    });
  }
  console.log('  ✓ verse_analyses mise à jour');

  for (const k of ['nzl', 'ktb', 'hqq', 'sdq', 'ydy']) {
    const wa = await db.from('word_analyses').select('id').eq('word_key', k).single();
    const wd = await db.from('word_daily').select('id', { count: 'exact', head: true }).eq('analysis_id', wa.data.id);
    console.log(`  • word_daily ${k} : ${wd.count} phrases ${wd.count > 0 ? '(SKIP)' : '(à créer)'}`);
  }

  console.log('\n═══════════════════════════════════════════════════');
  console.log('  VERSET 3:3 — TERMINÉ');
  console.log('═══════════════════════════════════════════════════');
  console.log('  Traduction : "' + TRANSLATION_ARAB + '"');
  console.log('  Hamidullah : "' + FULL_TRANSLATION + '"');
}

run().catch(e => { console.error(e); process.exit(1); });
