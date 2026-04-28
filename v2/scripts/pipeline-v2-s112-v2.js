// Pipeline V2 — Sourate 112, Verset 2 — ٱللَّهُ ٱلصَّمَدُ
const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
const log = (msg) => console.log(msg)

async function run() {
  log('════════════════════════════════════════')
  log('  PIPELINE V2 — VERSET 112:2')
  log('  ٱللَّهُ ٱلصَّمَدُ')
  log('════════════════════════════════════════')
  log('')

  // ═══ ÉTAPE 2 ═══
  log('>>> ÉTAPE 2 — SENS ÉTYMOLOGIQUES')
  log('  [alh] SKIP — déjà analysé')

  // Créer racine smd
  let smdId
  const {data: existing} = await db.from('word_analyses').select('id').eq('word_key', 'smd')
  if (existing && existing.length > 0) {
    smdId = existing[0].id
  } else {
    const {data: created} = await db.from('word_analyses').insert({word_key: 'smd'}).select('id')
    smdId = created[0].id
  }
  log('  [smd] analysis_id=' + smdId + ' — 25 sens extraits → 5 concepts')

  const smdSenses = [
    // Se diriger vers/Recours
    {sense:'se diriger vers',sense_ar:'صَمَدَ',description:'Mouvement actif vers quelqu\'un ou quelque chose, action de se tourner vers une cible précise. C\'est un acte extérieur et directionnel qui sort de celui qui se dirige et atteint celui vers qui on se dirige.',display_order:1,concept:'Se diriger vers/Recours'},
    {sense:'faire face directement',sense_ar:'صَمَدَ',description:'Orienter son visage exactement vers quelque chose. Acte physique de direction, extérieur et intentionnel.',display_order:2,concept:'Se diriger vers/Recours'},
    {sense:'pointer vers',sense_ar:'صَمَدَ',description:'Indiquer une direction vers quelque chose. Acte extérieur de désignation.',display_order:3,concept:'Se diriger vers/Recours'},
    {sense:'bondir vers',sense_ar:'صَمَدَ',description:'Se précipiter vers quelqu\'un avec élan. Mouvement rapide et dirigé.',display_order:4,concept:'Se diriger vers/Recours'},
    {sense:'se tourner fréquemment vers',sense_ar:'صَمَّدَ',description:'Revenir régulièrement vers quelqu\'un, forme intensive. La répétition montre que ce n\'est pas ponctuel mais permanent.',display_order:5,concept:'Se diriger vers/Recours'},
    {sense:'seigneur vers qui on a recours',sense_ar:'صَمَد',description:'Celui vers qui on se dirige dans les moments difficiles, le chef sans qui rien ne se fait. C\'est un titre permanent qui décrit une réalité relationnelle : celui vers qui TOUT converge. Le Lane\'s précise : celui vers qui on a recours dans les difficultés, sans qui aucune affaire ne s\'accomplit. C\'est un acte dirigé vers l\'extérieur — les autres se tournent vers lui.',display_order:6,concept:'Se diriger vers/Recours'},
    {sense:'fréquemment sollicité',sense_ar:'مُصَمَّد',description:'Celui vers qui beaucoup de personnes se tournent régulièrement. La fréquence et le nombre confirment le caractère permanent et central.',display_order:7,concept:'Se diriger vers/Recours'},

    // Solidité/Plénitude
    {sense:'terrain élevé et dur',sense_ar:'صَمْد',description:'Sol surélevé, rugueux, résistant. Réalité physique extérieure de dureté et d\'élévation.',display_order:8,concept:'Solidité/Plénitude'},
    {sense:'solide (pas creux)',sense_ar:'صَمَد',description:'Plein, compact, sans vide intérieur. Réalité physique d\'intégrité complète — rien ne manque, rien n\'est creux.',display_order:9,concept:'Solidité/Plénitude'},
    {sense:'roche ancrée dans le sol',sense_ar:'صَمْدَة',description:'Pierre fermement enfoncée dans la terre, au niveau de la surface. Stabilité et ancrage.',display_order:10,concept:'Solidité/Plénitude'},
    {sense:'dur sans fragilité',sense_ar:'مُصَمَّد',description:'Dur au point de n\'avoir aucune souplesse ni fragilité. Résistance absolue.',display_order:11,concept:'Solidité/Plénitude'},
    {sense:'épais et proéminent',sense_ar:'مُصَوْمِد',description:'Haut, rugueux, qui dépasse. Réalité physique d\'imposance.',display_order:12,concept:'Solidité/Plénitude'},

    // Couvrir/Fermer
    {sense:'bouchon',sense_ar:'صِمَاد',description:'Ce qu\'on met pour fermer l\'ouverture d\'un récipient. Acte de couverture et de protection.',display_order:13,concept:'Couvrir/Fermer'},
    {sense:'tissu enroulé sur la tête',sense_ar:'صِمَاد',description:'Pièce de tissu qu\'on enroule autour de la tête sous le turban. Acte de couverture du corps.',display_order:14,concept:'Couvrir/Fermer'},
    {sense:'enrouler un tissu',sense_ar:'صَمَّدَ',description:'Action d\'enrouler un tissu autour de la tête. Acte physique de couverture.',display_order:15,concept:'Couvrir/Fermer'},
    {sense:'couvrir la bouche d\'un récipient',sense_ar:'صَمَدَ',description:'Mettre un bouchon sur un récipient. Acte physique de fermeture.',display_order:16,concept:'Couvrir/Fermer'},

    // Action physique
    {sense:'frapper avec un bâton',sense_ar:'صَمَدَ',description:'Acte physique violent et ponctuel dirigé vers l\'extérieur.',display_order:17,concept:'Action physique'},
    {sense:'ériger',sense_ar:'صَمَدَ',description:'Dresser quelque chose, le mettre debout. Acte physique de construction.',display_order:18,concept:'Action physique'},
    {sense:'brûler le visage (soleil)',sense_ar:'صَمَدَ',description:'L\'action du soleil qui frappe le visage. Acte physique extérieur subi.',display_order:19,concept:'Action physique'},
    {sense:'combattre',sense_ar:'صَامَدَ',description:'Lutter contre quelqu\'un, affronter. Acte physique réciproque.',display_order:20,concept:'Action physique'},

    // Divers
    {sense:'charger quelqu\'un d\'une affaire',sense_ar:'أَصْمَدَ',description:'Faire reposer une affaire sur quelqu\'un. Acte de délégation.',display_order:21,concept:'Divers'},
    {sense:'peuple sans métier',sense_ar:'صَمَد',description:'Gens qui n\'ont pas de commerce ni de moyen de subsistance.',display_order:22,concept:'Divers'},
    {sense:'chamelle qui n\'a pas conçu',sense_ar:'صَمْدَة',description:'Femelle couverte mais qui n\'est pas tombée enceinte.',display_order:23,concept:'Divers'},
    {sense:'idole',sense_ar:'صَمُود',description:'Une idole spécifique de la tribu de Aad. Nom propre.',display_order:24,concept:'Divers'},
    {sense:'chamelle endurante',sense_ar:'مِصْمَاد',description:'Chamelle qui supporte le froid et la sécheresse, continuant à donner du lait. Endurance et résistance.',display_order:25,concept:'Divers'},
  ]

  const toInsert = smdSenses.map(s => ({...s, analysis_id: smdId, meaning_type: 'etymology'}))
  const {error: insErr} = await db.from('word_meanings').insert(toInsert)
  if (insErr) log('  ERREUR insertion: ' + insErr.message)
  else log('  25 sens insérés en 5 concepts')

  const conceptDescs = {
    'Se diriger vers/Recours': 'Mouvement directionnel vers quelqu\'un qui est le point de convergence. C\'est un acte extérieur et relationnel : celui vers qui on se tourne est atteint par ce mouvement. Le Lane\'s décrit le samad comme "celui vers qui on a recours dans les difficultés, sans qui aucune affaire ne s\'accomplit". C\'est une réalité permanente et centralisatrice — tout converge vers un point unique.',
    'Solidité/Plénitude': 'Qualité physique d\'être plein, compact, sans creux ni vide intérieur. C\'est un état permanent et intrinsèque — la solidité est dans la nature même de la chose. La réalité est intérieure et statique : la chose est solide en elle-même, indépendamment des autres.',
    'Couvrir/Fermer': 'Acte physique de fermer, couvrir, protéger une ouverture. C\'est une action ponctuelle et extérieure — on ferme quelque chose.',
    'Action physique': 'Actes physiques divers (frapper, ériger, brûler, combattre). Actions ponctuelles dirigées vers l\'extérieur.',
    'Divers': 'Sens isolés sans champ sémantique cohérent (peuple sans métier, chamelle, idole, délégation).',
  }
  for (const [concept, desc] of Object.entries(conceptDescs)) {
    await db.from('word_meanings').update({description: desc}).eq('analysis_id', smdId).eq('concept', concept)
  }
  log('')

  // ═══ ÉTAPE 3 ═══
  log('>>> ÉTAPE 3 — ANALYSE DES CONCEPTS (verset 112:2)')
  log('')
  // Contexte : ٱللَّهُ ٱلصَّمَدُ — "Dieu, as-samad"
  // as-samad est un nom défini (avec al-) au nominatif, en position d'attribut

  const conceptAxes = {
    'Se diriger vers/Recours': {
      status: 'retenu',
      senses: ['se diriger vers','faire face directement','pointer vers','bondir vers','se tourner fréquemment vers','seigneur vers qui on a recours','fréquemment sollicité'],
      axe1_verset: 'Le verset dit "allahu s-samadu" (Dieu, as-samad). Le mot as-samad est en position d\'attribut : il qualifie Dieu. Le champ lexical est celui de la qualification divine après l\'identification du verset 1. Le concept de "celui vers qui on se tourne" est relationnel : il définit Dieu par sa relation avec tout le reste. Après avoir dit que Dieu est unique (v1), le verset 2 dit vers quoi cette unicité se manifeste : tout converge vers Lui.',
      axe2_voisins: 'Le verset 1 dit que Dieu est unique (ahad, indivisible). Le verset 2 ajoute un attribut relationnel : s\'Il est le seul point indivisible, c\'est vers Lui que tout se dirige. Les versets 3-4 nient l\'engendrement et l\'existence d\'un égal, ce qui renforce la centralité : pas de concurrent (v4), pas de dérivé (v3), donc tout converge vers Lui seul. Le concept de recours est la conséquence logique de l\'unicité.',
      axe3_sourate: 'Al-Ikhlas définit Dieu en quatre attributs. Après l\'unicité intrinsèque (v1), le verset 2 pose la dimension relationnelle : ce que Dieu est pour les autres. La sourate passe de l\'intérieur (nature indivisible) à l\'extérieur (tout converge vers Lui). Le concept de "celui vers qui on se tourne" est le pont entre l\'essence (v1) et les conséquences (v3-4).',
      axe4_coherence: 'Le mot as-samad n\'apparaît qu\'une seule fois dans tout le Coran. C\'est un mot unique pour un attribut unique. Le Lane\'s le définit comme "celui vers qui on a recours dans les difficultés, sans qui aucune affaire ne s\'accomplit". Cette définition est relationnelle et permanente, ce qui correspond à un attribut divin dans le Coran.',
      axe5_frequence: 'Celui vers qui tout converge est la référence ultime pour le khalifa. La mission de justice et de civilisation a un point de convergence unique qui ne peut pas être fragmenté. Si tout converge vers un seul point, la corruption (qui consiste à fragmenter l\'autorité) est structurellement combattue.',
      proof_ctx: 'Le concept de "se diriger vers/recours" décrit une réalité relationnelle permanente : celui vers qui tout converge, le point central sans qui rien ne s\'accomplit. Le Lane\'s (Lane\'s Arabic-English Lexicon, Edward Lane, 1863) définit le samad comme "celui vers qui on a recours dans les difficultés, sans qui aucune affaire ne s\'accomplit". Test de compatibilité philosophique : un nom défini avec al- peut-il identifier cette réalité comme connue et permanente ? Oui : le samad est un titre permanent, pas un acte ponctuel. Distinction avec "Solidité/Plénitude" : la solidité est intrinsèque (ce que la chose est en elle-même), le recours est relationnel (ce que la chose est pour les autres). Le verset 1 a déjà posé la nature intrinsèque (unique/indivisible), le verset 2 ajoute la dimension relationnelle (celui vers qui on se tourne). Les deux versets seraient redondants si le verset 2 parlait aussi d\'une qualité intrinsèque. Distinction avec "Couvrir/Fermer" et "Action physique" : sens physiques et ponctuels, incompatibles avec un titre divin permanent.',
    },
    'Solidité/Plénitude': {
      status: 'probable',
      senses: ['terrain élevé et dur','solide (pas creux)','roche ancrée dans le sol','dur sans fragilité','épais et proéminent'],
      axe1_verset: 'Le verset dit "allahu s-samadu". La solidité (plein, pas creux, compact) est une qualité intrinsèque. Le champ lexical est celui de la qualification divine. La solidité fonctionne comme attribut : "Dieu, le Solide" — c\'est-à-dire celui qui est plein, complet, sans manque intérieur. Cependant, la solidité est un concept physique (matière pleine vs matière creuse) qui s\'applique difficilement à un être non-matériel.',
      axe2_voisins: 'Le verset 1 a posé l\'unicité/indivisibilité (qualité intrinsèque). Si le verset 2 pose aussi une qualité intrinsèque (la solidité), les deux versets seraient dans le même registre. Les versets 3-4 nient des relations (engendrement, égalité), ce qui suggère que le verset 2 est aussi relationnel, pas intrinsèque.',
      axe3_sourate: 'La sourate définit Dieu. Si les versets 1 et 2 sont tous deux des qualités intrinsèques (unique + solide), la progression est faible. Si le verset 2 est relationnel (celui vers qui on se tourne), la progression est plus riche : essence (v1) → relation (v2) → négations (v3-4).',
      axe4_coherence: 'Le Coran ne décrit pas Dieu en termes de composition matérielle (plein, creux, compact). Les attributs divins dans le Coran sont moraux (miséricordieux), relationnels (seigneur) ou existentiels (vivant). La solidité physique serait une exception sans précédent.',
      axe5_frequence: 'La solidité physique ne donne pas de direction morale au khalifa. Celui vers qui on se tourne donne une direction.',
      proof_ctx: 'La solidité est une qualité physique intrinsèque (plein, pas creux). Le concept de recours est relationnel (celui vers qui on se tourne). Le verset 1 a déjà posé une qualité intrinsèque (l\'indivisibilité). Le verset 2 ajoute une dimension différente : si c\'est aussi intrinsèque, c\'est redondant. Si c\'est relationnel, c\'est complémentaire. Le Coran ne décrit pas Dieu en termes de composition matérielle.',
    },
    'Couvrir/Fermer': {
      status: 'nul',
      senses: ['bouchon','tissu enroulé sur la tête','enrouler un tissu','couvrir la bouche d\'un récipient'],
      proof_ctx: 'Sens physiques de fermeture et de couverture. Actes ponctuels sans rapport avec la qualification divine du verset.',
    },
    'Action physique': {
      status: 'nul',
      senses: ['frapper avec un bâton','ériger','brûler le visage (soleil)','combattre'],
      proof_ctx: 'Actions physiques ponctuelles (frapper, ériger, brûler, combattre). Sans rapport avec un attribut divin permanent.',
    },
    'Divers': {
      status: 'nul',
      senses: ['charger quelqu\'un d\'une affaire','peuple sans métier','chamelle qui n\'a pas conçu','idole','chamelle endurante'],
      proof_ctx: 'Sens isolés sans cohérence sémantique avec le contexte du verset.',
    },
  }

  for (const [concept, ax] of Object.entries(conceptAxes)) {
    const tag = ax.axe1_verset ? '(5 axes)' : '(proof_ctx seul)'
    log('  ' + concept + ' (' + ax.senses.length + ' sens) → ' + ax.status.toUpperCase() + ' ' + tag)
    await db.from('word_meanings').update({status: ax.status, proof_ctx: ax.proof_ctx}).eq('analysis_id', smdId).eq('concept', concept)
  }
  log('')

  // verse_word_analyses
  const vwaData = [
    {verse_id: 6223, word_key: 'alh', sense_chosen: 'divinité', position: 1},
    {verse_id: 6223, word_key: 'smd', sense_chosen: 'celui vers qui on se tourne', position: 2},
  ]
  const {error: vwaErr} = await db.from('verse_word_analyses').insert(vwaData)
  if (vwaErr) log('  ERREUR vwa: ' + vwaErr.message)

  // analysis_axes pour smd
  await db.from('verse_word_analyses').update({
    analysis_axes: { sense_chosen: 'celui vers qui on se tourne', concept_chosen: 'Se diriger vers/Recours', concepts: conceptAxes }
  }).eq('verse_id', 6223).eq('word_key', 'smd')

  // analysis_axes pour alh (contexte 112:2)
  await db.from('verse_word_analyses').update({
    analysis_axes: {
      sense_chosen: 'divinité', concept_chosen: 'Divinité',
      concepts: {
        'Divinité': { status: 'retenu', senses: ['divinité','Dieu','théologie'],
          proof_ctx: 'Le verset 112:2 dit "allahu s-samadu" (Dieu, celui vers qui on se tourne). Allah ouvre le verset comme sujet. Le contexte est celui de la qualification : on ne dit plus QUI est Dieu (v1) mais CE QU\'Il est (v2). La divinité est le concept que le nom Allah identifie.',
          axe1_verset: 'Le verset dit "allahu s-samadu". Allah est le sujet de la phrase nominale. Le champ lexical est celui de la qualification : après l\'identification (v1), on qualifie Dieu avec un attribut (as-samad). Le mot Allah relie les deux versets : même sujet, nouvel attribut.',
          axe2_voisins: 'Le verset 1 identifie Dieu comme unique. Le verset 2 ajoute un attribut relationnel. La progression va de l\'identité intrinsèque à la relation avec les autres. Allah est le fil conducteur.',
          axe3_sourate: 'La sourate répète Allah dans les versets 1 et 2 pour ancrer la définition. Le verset 2 est la deuxième face : après l\'unicité, la centralité.',
          axe4_coherence: 'Le Coran utilise Allah suivi d\'attributs dans de nombreuses formules. C\'est un modèle coranique classique.',
          axe5_frequence: 'La centralité de Dieu fonde la direction de la mission du khalifa : tout converge vers un seul point.',
        },
        'Adoration/Dévotion': { status: 'probable', senses: ['adorer','faire adorer','se dévouer au culte','diviniser'],
          proof_ctx: 'Adorer est le sens premier de la racine. Le verset qualifie Dieu, il ne parle pas d\'adoration. Le verset dit ce que Dieu EST, pas ce qu\'on FAIT envers Lui.',
        },
        'Refuge/Protection': { status: 'nul', senses: ['chercher refuge','protéger','demeurer'], proof_ctx: 'Le verset qualifie Dieu, pas une demande de refuge.' },
        'Détresse': { status: 'nul', senses: ['être perplexe','se lamenter'], proof_ctx: 'Le verset est déclaratif, pas une expression de détresse.' },
        'Domination': { status: 'nul', senses: ['asservir'], proof_ctx: 'Le verset identifie Dieu, pas d\'asservissement.' },
      }
    }
  }).eq('verse_id', 6223).eq('word_key', 'alh')

  log('  verse_word_analyses et analysis_axes insérés')
  log('')

  // ═══ ÉTAPE 4 ═══
  log('>>> ÉTAPE 4 — TRADUCTION')

  const translation_arab = 'Dieu, celui vers qui on se tourne.'
  const translation_explanation = [
    '§DEMARCHE§',
    'Le mot **allahu** est un nom propre au nominatif, sujet de la phrase nominale. En arabe, une phrase qui commence par un nom (et pas par un verbe) exprime une vérité permanente.',
    'Le mot **as-samadu** est un nom défini avec l\'article al- (l\'article qui identifie quelque chose de connu et précis), au nominatif, en position d\'attribut (la partie de la phrase qui dit ce qu\'est le sujet). C\'est un titre permanent.',
    '§JUSTIFICATION§',
    '**Dieu** — Le concept retenu est "Divinité". Allah est le nom propre de la Divinité, traduit par "Dieu" (règle des noms propres).',
    '**celui vers qui on se tourne** — Le concept retenu est "Se diriger vers/Recours". Cette expression est choisie car elle capture la dimension relationnelle et permanente du concept : le samad est le point de convergence vers lequel tout se dirige, sans qui rien ne s\'accomplit. Le Lane\'s (Lane\'s Arabic-English Lexicon, Edward Lane, 1863) le définit comme "celui vers qui on a recours dans les difficultés, sans qui aucune affaire ne s\'accomplit". Le mot "solide" (concept probable) est écarté car il décrit une qualité physique intrinsèque, alors que le verset 1 a déjà posé la qualité intrinsèque (unique). Le verset 2 ajoute la dimension relationnelle.',
  ].join('\n\n')

  const segments = [
    {fr:'Dieu',pos:'nom',phon:'allahu',arabic:'ٱللَّهُ',word_key:'alh',is_particle:false,sense_retenu:'divinité'},
    {fr:'celui vers qui on se tourne',pos:'nom',phon:'as-samadu',arabic:'ٱلصَّمَدُ',word_key:'smd',is_particle:false,sense_retenu:'celui vers qui on se tourne'},
  ]

  await db.from('verse_analyses').update({translation_arab, translation_explanation, segments}).eq('verse_id', 6223)
  log('  Traduction : "' + translation_arab + '"')

  // Daily
  const daily = [
    {analysis_id: smdId, sense: 'celui vers qui on se tourne', arabic: 'ٱللَّهُ ٱلصَّمَدُ', phon: 'allahu s-samad', french: 'Dieu, celui vers qui on se tourne'},
    {analysis_id: smdId, sense: 'celui vers qui on se tourne', arabic: 'صَمَدْتُ إِلَيْهِ', phon: 'samadtu ilayhi', french: 'Je me suis tourné vers lui'},
    {analysis_id: smdId, sense: 'celui vers qui on se tourne', arabic: 'هُوَ صَمَدُ القَوْمِ', phon: 'huwa samadu l-qawm', french: 'Il est celui vers qui le peuple se tourne'},
  ]
  const {error: dailyErr} = await db.from('word_daily').insert(daily)
  if (dailyErr) log('  ERREUR daily: ' + dailyErr.message)
  else log('  3 phrases du quotidien insérées')

  log('')
  log('════════════════════════════════════════')
  log('VERSET 112:2 — TERMINÉ')
  log('  alh → concept "Divinité" → mot français "Dieu"')
  log('  smd → concept "Se diriger vers/Recours" → mot français "celui vers qui on se tourne"')
  log('  Traduction : "Dieu, celui vers qui on se tourne."')
  log('════════════════════════════════════════')
}

run().catch(e => { console.error('ERREUR FATALE:', e); process.exit(1) })
