// Pipeline V2 — Sourate 1 Verset 2 — ÉTAPES 3+4
// ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَـٰلَمِينَ
const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)

const VERSE_ID = 2

async function run() {
  console.log('============================================')
  console.log('  VERSET 1:2 — ÉTAPES 3+4')
  console.log('  ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَـٰلَمِينَ')
  console.log('============================================')
  console.log('')

  // ── hmd (252) — al-hamdu — nom défini, sujet de phrase nominale ──
  console.log('>>> ÉTAPE 3 — hmd (al-hamdu, nom défini au nominatif)')

  // Récupérer les concepts depuis word_meanings
  const {data: hmdConcepts} = await db.from('word_meanings').select('concept').eq('analysis_id', 252).not('concept','is',null)
  const hmdConceptNames = [...new Set(hmdConcepts.map(c => c.concept))]
  console.log('  Concepts en base: ' + hmdConceptNames.join(', '))

  const hmdAxes = {
    sense_chosen: 'louange',
    concept_chosen: 'Louange/Éloge',
    concepts: {
      'Louange/Éloge': {
        status: 'retenu',
        senses: ['louange', 'louer', 'être loué', 'louable', 'digne de louange', 'loué par les gens'],
        proof_ctx: 'Le sens retenu est "Louange/Éloge". Le mot al-hamdu est un nom défini avec l\'article al- (une forme qui identifie une réalité connue et permanente). La louange est un acte extérieur et permanent : on exprime un éloge pour les qualités de quelqu\'un, sans condition de bienfait reçu. Le test de compatibilité : un nom défini peut-il identifier la louange comme une réalité connue ? Oui — la louange est une réalité universelle et identifiable. La phrase nominale (pas de verbe) exprime une vérité permanente : la louange appartient à Dieu par nature. Distinction avec "Gratitude/Remerciement" : la gratitude est conditionnelle (on remercie après avoir reçu un bienfait), la louange est inconditionnelle (on loue pour ce que l\'autre EST, pas pour ce qu\'il a donné). Le verset ne mentionne aucun bienfait reçu — c\'est une déclaration universelle. Distinction avec "Satisfaction/Contentement" : la satisfaction est un état intérieur passif (on est content), la louange est un acte extérieur actif (on exprime un éloge). La phrase nominale déclare, elle ne constate pas un état intérieur.',
        axe1_verset: 'Le verset dit al-hamdu li-llahi rabbi l-alamin (la louange est pour Dieu, Seigneur des mondes). Le mot al-hamdu est le sujet de la phrase, c\'est le mot central. Le champ lexical est celui de la déclaration et de l\'attribution : on déclare que la louange revient à Dieu. La particule li (pour) indique la direction : la louange va VERS Dieu. Le reste du verset qualifie Dieu (Seigneur des mondes) pour expliquer pourquoi la louange Lui revient.',
        axe2_voisins: 'Le verset 1 invoque Dieu par Son nom et Ses attributs de miséricorde. Le verset 2 ouvre par la louange et ajoute la seigneurie. Le verset 3 rappelle la miséricorde. Le verset 4 ajoute la maîtrise du Jour. La louange ouvre cette série de qualifications : on loue d\'abord, puis on explique pourquoi (seigneurie, miséricorde, maîtrise). La progression est logique.',
        axe3_sourate: 'La Fatiha s\'ouvre par la louange après la formule d\'invocation (v1). La louange est le premier mot significatif de la relation active entre l\'humain et Dieu. Avant de qualifier, de demander ou de s\'engager, on loue. La sourate construit une progression : louange (v2) → qualification (v2-4) → engagement (v5) → demande (v6-7).',
        axe4_coherence: 'Le Coran utilise al-hamdu li-llahi dans de nombreux passages et au début de plusieurs sourates (sourates 6, 18, 34, 35). L\'usage est constant et univoque. Le Coran distingue hamd (louange) de shukr (gratitude) en utilisant des mots différents pour chaque réalité.',
        axe5_frequence: 'La louange est l\'attitude fondamentale qui précède l\'action. Reconnaître les qualités de la source d\'autorité avant d\'agir en son nom. La louange n\'est pas conditionnelle (on ne loue pas parce qu\'on a reçu), elle est permanente (on loue pour ce que Dieu EST). Cette attitude fonde la mission de justice : on agit par reconnaissance, pas par intérêt.',
      },
      'Gratitude/Remerciement': {
        status: 'probable',
        senses: ['gratitude', 'remercier', 'être reconnaissant'],
        proof_ctx: 'La gratitude est conditionnelle : elle nécessite un bienfait reçu en amont. La louange est inconditionnelle : elle est donnée pour ce que l\'autre EST, pas pour ce qu\'il a donné. Le verset dit "la louange est pour Dieu" comme une vérité permanente (phrase nominale sans verbe), pas comme une réaction à un bienfait. Le Coran distingue hamd (louange) de shukr (gratitude) avec des mots différents.',
        axe1_verset: 'Le verset déclare al-hamdu li-llahi. La structure est une phrase nominale qui exprime une vérité permanente. La gratitude supposerait un bienfait identifié en amont, mais le verset ne mentionne aucun bienfait spécifique. C\'est une déclaration universelle et inconditionnelle, pas une réponse à un don. Le champ lexical est celui de la déclaration permanente, pas du remerciement circonstanciel.',
        axe2_voisins: 'Les versets suivants qualifient Dieu par ses attributs (seigneurie, miséricorde, maîtrise), pas par ses dons. La séquence va de la louange aux attributs de Dieu, pas de la louange aux faveurs accordées. Si le verset exprimait la gratitude, on attendrait une mention des bienfaits en retour.',
        axe3_sourate: 'La Fatiha pose une relation fondamentale entre l\'humain et Dieu. La gratitude implique un échange (bienfait reçu, remerciement donné), la louange pose une relation de reconnaissance permanente. Le ton est solennel et universel, pas circonstanciel.',
        axe4_coherence: 'Le Coran distingue hamd (louange) de shukr (gratitude). Les deux sont des actes positifs mais ils ont des champs sémantiques différents. Quand le Coran veut exprimer la gratitude, il utilise le verbe shakara et ses dérivés.',
        axe5_frequence: 'La gratitude est réactive : on remercie en réponse à un don. La louange est proactive : on loue sans attendre de recevoir. La mission de justice commence par la reconnaissance de ce que la source d\'autorité EST, pas par le remerciement de ce qu\'elle a donné.',
      },
      'Satisfaction/Contentement': {
        status: 'peu_probable',
        senses: ['être satisfait', 'être content', 'approuver'],
        proof_ctx: 'La satisfaction est un état intérieur passif : on est content. La louange est un acte extérieur actif : on exprime un éloge. Le verset est une déclaration active (phrase nominale qui proclame), pas un constat d\'état intérieur. Le Coran utilise radiya pour la satisfaction, pas hamida.',
        axe1_verset: 'Le verset est une déclaration active : "la louange est pour Dieu". La satisfaction serait un constat intérieur : "je suis content de Dieu". Le champ lexical est celui de la proclamation, pas de l\'introspection. La phrase nominale déclare vers l\'extérieur, elle ne constate pas un état intérieur.',
        axe2_voisins: 'Les versets voisins sont des qualifications actives de Dieu : Seigneur des mondes, Miséricordieux, Maître du Jour. Chaque verset est tourné vers Dieu, pas vers l\'intérieur du locuteur. La satisfaction serait un repli sur soi dans une série tournée vers l\'extérieur.',
        axe3_sourate: 'La Fatiha est une prière active, une suite de déclarations et de demandes. La satisfaction est un état passif. Le registre est celui de l\'engagement, pas de la contemplation intérieure.',
        axe4_coherence: 'Le Coran utilise radiya (être satisfait) pour la satisfaction et hamida (louer) pour la louange. Les deux mots ont des racines différentes et des usages distincts. Cette distinction est maintenue dans tout le texte.',
        axe5_frequence: 'La satisfaction est un état personnel qui ne contribue pas directement à la mission de justice. La louange est un acte public qui engage le locuteur dans une relation de reconnaissance.',
      },
      'Colère': {
        status: 'nul',
        senses: ['être en colère'],
        proof_ctx: 'Sens secondaire rare dans une construction spécifique. Le verset est une déclaration de louange, pas de colère.',
      },
      'Divers': {
        status: 'nul',
        senses: ['récompenser', 'pétrir', 'broyer finement', 'cuisiner', 'bien nourrir'],
        proof_ctx: 'Sens physiques et concrets sans rapport avec la déclaration de louange du verset.',
      },
    }
  }
  const {error: e1} = await db.from('verse_word_analyses').insert({
    verse_id: VERSE_ID, word_key: 'hmd', position: 1, sense_chosen: 'louange', analysis_axes: hmdAxes
  })
  console.log('  hmd → Louange/Éloge → "louange"' + (e1 ? ' ERREUR: '+e1.message : ' ✓'))

  // ── alh (250) — allahi — nom propre défini, en position de complément ──
  console.log('>>> ÉTAPE 3 — alh (allahi, SKIP car déjà analysé)')
  // Réutiliser les mêmes concepts mais avec axes spécifiques au verset 1:2
  const alhAxes = {
    sense_chosen: 'divinité',
    concept_chosen: 'Divinité',
    concepts: {
      'Divinité': {
        status: 'retenu',
        senses: ['divinité', 'divinité (concept)', 'Dieu', 'théologie', 'exclamation divine', 'oui certes'],
        proof_ctx: 'Le sens retenu est "Divinité". Le mot allahi est en position de complément de la particule li (pour). La louange est adressée à Dieu — la Divinité est le destinataire. Le verset identifie à qui la louange revient. Distinction avec "Adoration/Dévotion" : l\'adoration est l\'acte du fidèle, la divinité est l\'identité du destinataire. Le verset dit "pour Dieu" (destinataire), pas "en adorant Dieu" (action).',
        axe1_verset: 'Le verset dit al-hamdu li-llahi (la louange est pour Dieu). Le mot allahi est le complément de li : il identifie le destinataire de la louange. Le champ lexical est celui de l\'attribution : la louange appartient à la Divinité. Le verset dit à QUI va la louange, pas ce qu\'on fait (adorer) ni ce qu\'on ressent (détresse).',
        axe2_voisins: 'Le verset 1 invoque Dieu par Son nom. Le verset 2 Lui attribue la louange. Les deux versets travaillent sur l\'identité de Dieu : le premier nomme, le second attribue. La progression continue avec les qualificatifs (Seigneur des mondes, Miséricordieux).',
        axe3_sourate: 'La Fatiha identifie Dieu à chaque verset : nom (v1), destinataire de la louange (v2), miséricordieux (v3), maître (v4), adoré (v5). La divinité est le fil conducteur qui relie tous les versets.',
        axe4_coherence: 'Le Coran utilise li-llahi (pour Dieu) dans de nombreuses formules d\'attribution. L\'usage est constant : la Divinité est le destinataire naturel de la louange.',
        axe5_frequence: 'Identifier le destinataire de la louange fonde la direction de la mission : on agit pour Dieu, pas pour soi. La divinité est la boussole.',
      },
      'Adoration/Dévotion': {
        status: 'probable',
        senses: ['adorer', 'faire adorer', 'se dévouer au culte', 'diviniser'],
        proof_ctx: 'L\'adoration est l\'acte du fidèle (ce qu\'on fait). Le verset dit "pour Dieu" (destinataire), pas "en adorant Dieu" (action). L\'adoration viendra au verset 5.',
        axe1_verset: 'Le verset attribue la louange à Dieu. Le champ lexical est celui de l\'attribution, pas de la dévotion active. La particule li (pour) indique le destinataire, pas l\'action.',
        axe2_voisins: 'L\'adoration est mentionnée au verset 5. Le verset 2 attribue, le verset 5 adore. Les deux sont distincts.',
        axe3_sourate: 'La Fatiha sépare l\'attribution (v2) de l\'adoration (v5). Le verset 2 est dans la partie déclarative, pas dans la partie engagement.',
        axe4_coherence: 'Le Coran distingue l\'attribution (li-llahi) de l\'adoration (na\'budu). Les deux constructions ont des fonctions différentes.',
        axe5_frequence: 'L\'adoration est une action. Le verset pose une attribution, pas une action.',
      },
      'Détresse': { status: 'nul', senses: ['être perplexe', 'se lamenter'], proof_ctx: 'Le verset est une déclaration de louange, pas de détresse.' },
      'Refuge/Protection': { status: 'nul', senses: ['chercher refuge', 'protéger', 'demeurer'], proof_ctx: 'Le verset attribue la louange, il ne demande pas de refuge.' },
      'Domination': { status: 'nul', senses: ['asservir'], proof_ctx: 'Le verset parle de louange, pas de domination.' },
    }
  }
  const {error: e2} = await db.from('verse_word_analyses').insert({
    verse_id: VERSE_ID, word_key: 'alh', position: 3, sense_chosen: 'divinité', analysis_axes: alhAxes
  })
  console.log('  alh → Divinité → "divinité"' + (e2 ? ' ERREUR: '+e2.message : ' ✓'))

  // ── rbb (253) — rabbi — nom en idafa avec al-alamin ──
  console.log('>>> ÉTAPE 3 — rbb (rabbi, nom en idafa)')

  const {data: rbbConcepts} = await db.from('word_meanings').select('concept').eq('analysis_id', 253).not('concept','is',null)
  const rbbConceptNames = [...new Set(rbbConcepts.map(c => c.concept))]
  console.log('  Concepts en base: ' + rbbConceptNames.join(', '))

  const rbbAxes = {
    sense_chosen: 'seigneur',
    concept_chosen: 'Seigneurie/Autorité bienveillante',
    concepts: {
      'Seigneurie/Autorité bienveillante': {
        status: 'retenu',
        senses: ['seigneur', 'maître', 'possesseur', 'celui qui élève', 'celui qui entretient', 'celui qui nourrit', 'éducateur', 'gouverneur'],
        proof_ctx: 'Le sens retenu est "Seigneurie/Autorité bienveillante". Le mot rabbi est en idafa (annexion) avec al-alamin (les mondes). Le test de compatibilité : la réalité de ce sens peut-elle être rattachée aux mondes dans une relation d\'appartenance ? Oui — le Seigneur DES mondes, celui qui a autorité SUR la totalité de la création et qui l\'élève. La seigneurie est une réalité extérieure, permanente et relationnelle : elle sort du seigneur et atteint ce qu\'il gouverne. Distinction avec "Croissance/Augmentation" : la croissance est un processus physique neutre (quelque chose grandit), la seigneurie est une relation d\'autorité bienveillante (quelqu\'un fait grandir l\'autre). Le verset parle d\'une relation entre Dieu et les mondes, pas d\'un processus physique. Distinction avec "Usure/Commerce" : l\'usure est une augmentation financière injuste, la seigneurie est une autorité juste qui nourrit et élève.',
        axe1_verset: 'Le verset dit rabbi l-alamin (Seigneur des mondes). Le mot rabbi est le deuxième qualificatif de Dieu après la louange. Le champ lexical est celui de l\'autorité universelle et bienveillante : la seigneurie s\'étend à TOUS les mondes, pas à un groupe spécifique. L\'idafa relie le seigneur aux mondes dans une relation de responsabilité. Le pluriel "mondes" montre l\'étendue de cette seigneurie.',
        axe2_voisins: 'Le verset 1 nomme Dieu et Le qualifie de miséricordieux. Le verset 2 ajoute la louange et la seigneurie. Le verset 3 rappelle la miséricorde. Le verset 4 ajoute la maîtrise du Jour. La seigneurie s\'inscrit entre la miséricorde (v1) et la maîtrise (v4) : c\'est l\'autorité qui élève (v2), tempérée par la bonté (v1,3), et complétée par la responsabilité temporelle (v4).',
        axe3_sourate: 'La Fatiha décrit Dieu sous plusieurs facettes. La seigneurie est la première qualification active : Dieu n\'est pas seulement loué (v2a), Il est aussi celui qui élève et entretient toute la création (v2b). Ce qualificatif donne à la louange son fondement : on loue Dieu PARCE QU\'Il est le Seigneur des mondes.',
        axe4_coherence: 'Le Coran utilise rabb des milliers de fois pour Dieu. C\'est l\'un des mots les plus fréquents du texte. L\'expression rabbi l-alamin revient dans plusieurs sourates. L\'usage est constant : rabb désigne celui qui possède avec autorité et qui élève avec soin.',
        axe5_frequence: 'Le seigneur qui élève et entretient est le modèle de l\'autorité juste : diriger en nourrissant et en faisant grandir, pas en dominant ni en écrasant. La seigneurie est une responsabilité, pas un privilège. Pour la mission de justice et de civilisation, c\'est le modèle d\'autorité : élever l\'autre au lieu de l\'asservir.',
      },
      'Croissance/Augmentation': {
        status: 'probable',
        senses: ['augmenter', 'croître', 'grandir', 'faire grandir', 'élever un enfant'],
        proof_ctx: 'La croissance est le processus physique qui sous-tend la seigneurie : faire grandir quelque chose. Mais le verset utilise le nom rabb (celui qui fait grandir), pas le verbe rabba (faire grandir). La frontière philosophique : la croissance est un processus (temporel, physique), la seigneurie est une identité (permanente, relationnelle). Le verset dit ce que Dieu EST (Seigneur), pas ce qu\'Il FAIT (faire grandir).',
        axe1_verset: 'Le verset dit rabbi l-alamin. Le mot rabbi est un nom d\'agent (celui qui fait l\'action), pas un verbe (l\'action elle-même). Le champ lexical est celui de l\'identité, pas de l\'action. "Seigneur des mondes" identifie, "Celui qui fait grandir les mondes" raconte. Le verset identifie.',
        axe2_voisins: 'Les versets voisins qualifient Dieu par des noms (miséricordieux, maître), pas par des verbes d\'action. La progression est celle d\'un portrait, pas d\'un récit.',
        axe3_sourate: 'La Fatiha pose des identités et des qualités permanentes. La croissance est un processus temporel avec un début et une fin. La seigneurie est un état permanent.',
        axe4_coherence: 'Le Coran utilise le nom rabb (agent) dans cette formule, jamais le verbe rabba (action). La distinction est maintenue dans tout le texte.',
        axe5_frequence: 'La croissance est l\'action, la seigneurie est l\'identité de celui qui agit. Pour la mission de justice, il faut d\'abord reconnaître l\'identité (seigneur) avant d\'imiter l\'action (faire grandir).',
      },
      'Usure/Commerce': {
        status: 'nul',
        senses: ['usure', 'intérêt', 'augmentation financière'],
        proof_ctx: 'L\'usure est une augmentation financière injuste. Le verset parle de la relation entre Dieu et les mondes, pas de commerce.',
      },
      'Éminence/Colline': {
        status: 'nul',
        senses: ['colline', 'éminence', 'terrain élevé'],
        proof_ctx: 'Sens physique géographique. Le verset parle de seigneurie, pas de géographie.',
      },
      'Essoufflement': {
        status: 'nul',
        senses: ['essoufflement', 'à bout de souffle'],
        proof_ctx: 'État physique de fatigue. Aucun rapport avec le verset.',
      },
      'Divers': {
        status: 'nul',
        senses: ['colle', 'mélasse', 'confiture', 'réparer', 'rassembler'],
        proof_ctx: 'Sens concrets et isolés sans rapport avec la qualification divine du verset.',
      },
    }
  }
  const {error: e3} = await db.from('verse_word_analyses').insert({
    verse_id: VERSE_ID, word_key: 'rbb', position: 4, sense_chosen: 'seigneur', analysis_axes: rbbAxes
  })
  console.log('  rbb → Seigneurie/Autorité bienveillante → "seigneur"' + (e3 ? ' ERREUR: '+e3.message : ' ✓'))

  // ── elm (254) — al-alamin — nom défini pluriel ──
  console.log('>>> ÉTAPE 3 — elm (al-alamin, nom défini pluriel)')

  const {data: elmConcepts} = await db.from('word_meanings').select('concept').eq('analysis_id', 254).not('concept','is',null)
  const elmConceptNames = [...new Set(elmConcepts.map(c => c.concept))]
  console.log('  Concepts en base: ' + elmConceptNames.join(', '))

  const elmAxes = {
    sense_chosen: 'monde',
    concept_chosen: 'Monde/Création',
    concepts: {
      'Monde/Création': {
        status: 'retenu',
        senses: ['monde', 'univers', 'ensemble des créatures', 'les mondes'],
        proof_ctx: 'Le sens retenu est "Monde/Création". Le mot al-alamin est un nom défini pluriel avec l\'article al-. Le pluriel indique la totalité de la création. D\'après les sources étymologiques (Lane\'s Arabic-English Lexicon, Edward Lane, 1863), alam dérive de la racine "marquer" : le monde est ce par quoi on connaît le Créateur, car la création est la marque visible de Celui qui l\'a faite. Le test de compatibilité : un nom défini pluriel peut-il identifier les mondes comme une réalité connue ? Oui — les mondes sont une réalité universelle et identifiable. Distinction avec "Savoir/Connaissance" : le savoir est intérieur (dans l\'esprit), le monde est extérieur (dans la réalité). Le verset parle de la seigneurie sur la réalité extérieure.',
        axe1_verset: 'Le verset dit rabbi l-alamin (Seigneur des mondes). Le mot al-alamin est le complément de rabbi dans l\'idafa. Il dit SUR QUOI s\'étend la seigneurie : sur tous les mondes. Le champ lexical est celui de l\'universalité : la seigneurie ne se limite pas à un groupe, elle englobe tout. Le pluriel "mondes" indique la totalité sans exception.',
        axe2_voisins: 'Les versets voisins élargissent progressivement la description de Dieu : miséricordieux (v1,3) → Seigneur des mondes (v2) → Maître du Jour (v4). Le passage de la miséricorde aux mondes montre l\'extension spatiale de l\'autorité divine : tout ce qui existe est sous cette seigneurie.',
        axe3_sourate: 'La Fatiha pose Dieu comme Seigneur de tout ce qui existe, sans exception ni limite. Les mondes établissent l\'universalité de la seigneurie. Ce thème d\'universalité traverse toute la sourate : la louange est universelle, la miséricorde est universelle, la seigneurie est universelle.',
        axe4_coherence: 'Le Coran utilise alamin dans de nombreux passages pour l\'ensemble de la création. L\'expression rabbi l-alamin est récurrente et son sens est constant. Le Lane\'s note que alam dérive de la racine "marquer" : le monde est la marque visible du Créateur.',
        axe5_frequence: 'Les mondes incluent tous les êtres et toute la création. La seigneurie universelle de Dieu fonde la responsabilité universelle de la mission de justice : si Dieu est Seigneur de tout, la mission s\'étend à tout, pas seulement aux humains.',
      },
      'Savoir/Connaissance': {
        status: 'probable',
        senses: ['savoir', 'connaissance', 'science', 'certitude', 'connaître', 'prendre conscience'],
        proof_ctx: 'Le savoir est le sens verbal premier de la racine e-l-m. Le monde (alam) est un nom dérivé. Le verset utilise alamin (pluriel de alam = monde), pas ilm (savoir). La frontière philosophique : le savoir est intérieur (dans l\'esprit), le monde est extérieur (dans la réalité). Le lien étymologique est réel (le monde est ce par quoi on SAIT que le Créateur existe) mais le sens utilisé est "monde".',
        axe1_verset: 'Le verset dit rabbi l-alamin. Le mot est un complément d\'idafa avec rabb. "Seigneur du savoir" est grammaticalement possible mais le pluriel alamin (les mondes) est la forme de alam (monde), pas de ilm (savoir). Le champ lexical est celui de l\'autorité sur la création, pas de la connaissance.',
        axe2_voisins: 'Les versets voisins décrivent les attributs de Dieu dans sa relation avec la création, pas le savoir. Le contexte est celui de l\'autorité et de la bonté, pas de la connaissance.',
        axe3_sourate: 'La Fatiha pose des attributs relationnels de Dieu (comment Dieu est en relation avec la création), pas des attributs intellectuels (ce que Dieu sait). Le savoir est important mais ce n\'est pas le sujet de cette sourate.',
        axe4_coherence: 'Le Coran distingue alam (monde) de ilm (savoir). Les deux viennent de la même racine mais ont des sens distincts. Quand le Coran veut parler du savoir de Dieu, il utilise ilm ou alim, pas alam.',
        axe5_frequence: 'Le savoir est fondamental pour la mission de justice. Cependant, dans ce verset, c\'est le monde (ce qui est gouverné) qui est mentionné, pas le savoir (comment on gouverne).',
      },
      'Marque/Signe': {
        status: 'nul',
        senses: ['marquer', 'signe distinctif', 'drapeau', 'montagne', 'repère'],
        proof_ctx: 'Sens physiques de la racine (faire une marque). Le verset utilise alamin (mondes), pas alam (marque).',
      },
      'Enseignement': {
        status: 'nul',
        senses: ['enseigner', 'transmettre', 'informer', 'faire savoir'],
        proof_ctx: 'Sens verbal forme II (faire en sorte que l\'autre sache). Le verset utilise un nom pluriel (les mondes), pas un verbe d\'enseignement.',
      },
      'Divers': {
        status: 'nul',
        senses: ['savant', 'lettré', 'lèvre supérieure', 'fendu'],
        proof_ctx: 'Sens isolés sans rapport avec la seigneurie universelle du verset.',
      },
    }
  }
  const {error: e4} = await db.from('verse_word_analyses').insert({
    verse_id: VERSE_ID, word_key: 'elm', position: 5, sense_chosen: 'monde', analysis_axes: elmAxes
  })
  console.log('  elm → Monde/Création → "monde"' + (e4 ? ' ERREUR: '+e4.message : ' ✓'))

  // ═══════════════════════════════════════
  // ÉTAPE 4 — TRADUCTION
  // ═══════════════════════════════════════
  console.log('')
  console.log('>>> ÉTAPE 4 — TRADUCTION')

  const segments = [
    {fr:'la louange', pos:'nom', phon:'al-hamdu', arabic:'ٱلْحَمْدُ', word_key:'hmd', is_particle:false, sense_retenu:'louange', position:1},
    {fr:'pour', phon:'li', arabic:'لِ', word_key:null, is_particle:true, position:2},
    {fr:'Dieu', pos:'nom', phon:'allahi', arabic:'ٱللَّهِ', word_key:'alh', is_particle:false, sense_retenu:'divinité', position:3},
    {fr:'Seigneur', pos:'nom', phon:'rabbi', arabic:'رَبِّ', word_key:'rbb', is_particle:false, sense_retenu:'seigneur', position:4},
    {fr:'des mondes', pos:'nom', phon:'al-alamin', arabic:'ٱلْعَـٰلَمِينَ', word_key:'elm', is_particle:false, sense_retenu:'monde', position:5},
  ]

  const explanation = [
    '§DEMARCHE§',
    'Le mot **al-hamdu** est un nom défini au nominatif (le cas qui marque le sujet de la phrase). En arabe, quand une phrase commence par un nom et pas par un verbe, on appelle ça une phrase nominale (jumla ismiyya), et ça donne un sens de vérité permanente : la louange est pour Dieu, ça a toujours été et ça sera toujours.',
    'La particule **li** (pour) indique à qui la louange est destinée : elle revient à Dieu.',
    'Le mot **rabbi** est rattaché à **al-alamin** par une idafa (c\'est quand deux mots sont liés pour dire que le premier appartient au second, comme quand on dit "la porte de la maison"). Ici : le Seigneur des mondes. Le mot rabb vient d\'une racine qui signifie faire grandir, élever et entretenir.',
    'Le pluriel **alamin** (les mondes) montre que cette seigneurie ne concerne pas seulement les humains mais toute la création.',
    '§JUSTIFICATION§',
    '**louange** — Le sens retenu est "Louange/Éloge". Le mot "louange" est choisi car il capture l\'acte extérieur et inconditionnel d\'exprimer un éloge pour les qualités de quelqu\'un. L\'alternative "éloge" est écartée car c\'est un registre plus littéraire, moins courant au quotidien. L\'alternative "remerciement" est écartée car le remerciement est conditionnel (on remercie pour quelque chose de reçu), alors que la louange est inconditionnelle.',
    '**Dieu** — Le sens retenu est "Divinité". Allah est le nom propre de la Divinité, traduit par "Dieu" en français (règle des noms propres).',
    '**seigneur** — Le sens retenu est "Seigneurie/Autorité bienveillante". Le mot "seigneur" est choisi car il capture l\'autorité qui élève et entretient. L\'alternative "maître" est écartée car "maître" insiste sur le pouvoir de commander, alors que "seigneur" insiste sur la responsabilité de nourrir et faire grandir. L\'alternative "éducateur" est écartée car c\'est un registre trop moderne et spécifique.',
    '**mondes** — Le sens retenu est "Monde/Création". Le mot "mondes" est choisi car le pluriel arabe alamin indique la totalité de la création. L\'alternative "univers" est écartée car "univers" est au singulier et ne rend pas le pluriel arabe. L\'alternative "créatures" est écartée car elle se limite aux êtres vivants, alors que alamin englobe tout ce qui existe.',
  ].join('\n\n')

  const {error: e5} = await db.from('verse_analyses').update({
    translation_arab: 'La louange est pour Dieu, Seigneur des mondes.',
    translation_explanation: explanation,
    segments: segments,
  }).eq('verse_id', VERSE_ID)
  console.log('  Traduction : "La louange est pour Dieu, Seigneur des mondes."' + (e5 ? ' ERREUR: '+e5.message : ' ✓'))

  // Phrases du quotidien
  const daily = [
    {analysis_id:252, sense:'louange', arabic:'اَلْحَمْدُ لِلَّهِ', phon:'al-hamdu li-llahi', french:'La louange est pour Dieu'},
    {analysis_id:252, sense:'louange', arabic:'حَمِدْتُهُ عَلَى صَنِيعِهِ', phon:'hamidtuhu ala sanihi', french:'Je l\'ai loué pour son acte'},
    {analysis_id:252, sense:'louange', arabic:'هُوَ مَحْمُودٌ عِنْدَ النَّاسِ', phon:'huwa mahmud inda n-nas', french:'Il est loué chez les gens'},
    {analysis_id:253, sense:'seigneur', arabic:'رَبِّ ٱلْعَالَمِينَ', phon:'rabbi l-alamin', french:'Seigneur des mondes'},
    {analysis_id:253, sense:'seigneur', arabic:'رَبَّيْتُ وَلَدِي', phon:'rabbaytu waladi', french:'J\'ai élevé mon enfant'},
    {analysis_id:253, sense:'seigneur', arabic:'مَنْ رَبُّكَ؟', phon:'man rabbuka?', french:'Qui est ton seigneur ?'},
    {analysis_id:254, sense:'monde', arabic:'رَبِّ ٱلْعَالَمِينَ', phon:'rabbi l-alamin', french:'Seigneur des mondes'},
    {analysis_id:254, sense:'monde', arabic:'ٱلْعَالَمُ كَبِيرٌ', phon:'al-alamu kabir', french:'Le monde est grand'},
    {analysis_id:254, sense:'monde', arabic:'عَلَّمْتُهُ ٱلْقِرَاءَةَ', phon:'allamtuhu l-qiraata', french:'Je lui ai enseigné la lecture'},
  ]
  const {error: e6} = await db.from('word_daily').insert(daily)
  console.log('  ' + daily.length + ' phrases du quotidien insérées' + (e6 ? ' ERREUR: '+e6.message : ' ✓'))

  console.log('')
  console.log('VERSET 1:2 — TERMINÉ')
  console.log('  al-hamdu (hmd) → sens "Louange/Éloge" → mot français "louange"')
  console.log('  allahi (alh) → sens "Divinité" → mot français "divinité"')
  console.log('  rabbi (rbb) → sens "Seigneurie/Autorité bienveillante" → mot français "seigneur"')
  console.log('  al-alamin (elm) → sens "Monde/Création" → mot français "monde"')
  console.log('  Traduction : "La louange est pour Dieu, Seigneur des mondes."')
}

run().catch(e => { console.error('ERREUR FATALE:', e); process.exit(1) })
