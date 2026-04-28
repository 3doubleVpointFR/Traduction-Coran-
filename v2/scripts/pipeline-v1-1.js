// Pipeline Maison — Verset 1:1 — بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ
// Source : Lane's Arabic-English Lexicon (Edward Lane, 1863)
// Règles : rules_pipeline_maison.md
const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
const log = (msg) => console.log(msg)

async function run() {

log('============================================')
log('  PIPELINE MAISON — VERSET 1:1')
log('============================================')
log('')
log('>>> ÉTAPE 1 — déjà exécutée via LLM')
log('  1. [PARTICULE] bi -> "avec"')
log('  2. [IMPORTANT] ismi (smw) — nom, génitif, idafa')
log('  3. [IMPORTANT] allahi (alh) — nom, génitif, DÉFINI')
log('  4. [IMPORTANT] ar-rahmani (rhm) — adjectif, génitif, DÉFINI')
log('  5. [IMPORTANT] ar-rahimi (rhm) — adjectif, génitif, DÉFINI')
log('  Racines uniques : smw, alh, rhm')
log('')

// ═══ ÉTAPE 2 ═══
log('>>> ÉTAPE 2 — SENS ÉTYMOLOGIQUES')
log('')

const roots = {
  smw: { id: 249, senses: [
    { sense: 'être haut', sense_ar: 'سَمَا', description: 'Être élevé, haut, en position haute. Sens physique premier de la racine : ce qui se dresse vers le haut, qui dépasse en hauteur.', display_order: 1 },
    { sense: 'ciel', sense_ar: 'سَمَاء', description: 'La voûte céleste, le toit du monde, ce qui est au-dessus de la terre. Aussi : tout ce qui sert de toit ou de couverture au-dessus de quelque chose.', display_order: 2 },
    { sense: 'pluie', sense_ar: 'سَمَاء', description: 'L\'eau qui tombe du ciel, la bonne pluie. Extension du sens de ciel : ce qui vient d\'en haut.', display_order: 3 },
    { sense: 'nom', sense_ar: 'اِسْم', description: 'Désignation ou appellation d\'une chose. Ce par quoi on identifie et on distingue quelque chose des autres.', display_order: 4 },
    { sense: 'nommer', sense_ar: 'سَمَّى', description: 'Donner un nom à quelqu\'un ou quelque chose. Aussi : prononcer le nom de Dieu sur quelque chose (nourriture, animal sacrifié).', display_order: 5 },
    { sense: 'noble', sense_ar: 'سَامٍ', description: 'Celui qui est haut en rang, élevé en dignité. Extension abstraite de la hauteur physique vers la noblesse sociale.', display_order: 6 },
    { sense: 'aspirer', sense_ar: 'سَمَا', description: 'Tendre vers le haut, avoir l\'ambition d\'atteindre des choses élevées. L\'oeil ou l\'esprit qui se lève vers quelque chose.', display_order: 7 },
    { sense: 'surpasser', sense_ar: 'سَمَا', description: 'Dépasser en nombre ou en rang. Aller au-delà d\'une certaine mesure.', display_order: 8 },
    { sense: 'apparence', sense_ar: 'سَمَاوَة', description: 'La forme ou la figure que l\'on voit de loin. L\'aspect extérieur de quelque chose.', display_order: 9 },
    { sense: 'chasser', sense_ar: 'سَمَا', description: 'Poursuivre le gibier, chasser les animaux sauvages. Sens attesté dans le Lane\'s.', display_order: 10 },
  ]},
  alh: { id: 250, senses: [
    { sense: 'adorer', sense_ar: 'أَلَهَ', description: 'Servir, vouer un culte, se dévouer à quelqu\'un ou quelque chose. Le Lane\'s donne : "he served, worshipped, or adored". Sens premier de la racine.', display_order: 1 },
    { sense: 'divinité', sense_ar: 'إِلٰه', description: 'Objet d\'adoration, ce vers quoi on se tourne avec dévotion. Tout ce qui est adoré, qu\'il soit légitime ou non.', display_order: 2 },
    { sense: 'être perplexe', sense_ar: 'أَلِهَ', description: 'Être confondu, désorienté, incapable de voir la bonne direction. L\'état de celui qui ne sait plus où aller.', display_order: 3 },
    { sense: 'se lamenter', sense_ar: 'أَلِهَ', description: 'Manifester une détresse véhémente, une agitation intense de chagrin. Le bouleversement intérieur qui déborde.', display_order: 4 },
    { sense: 'chercher refuge', sense_ar: 'أَلَهَ', description: 'Se tourner vers quelqu\'un pour demander protection, chercher un abri ou un secours.', display_order: 5 },
    { sense: 'demeurer', sense_ar: 'أَلَهَ', description: 'Rester, séjourner, habiter dans un lieu. S\'installer quelque part.', display_order: 6 },
    { sense: 'protéger', sense_ar: 'أَلَهَ', description: 'Accorder un refuge, préserver, sauver du mal. L\'acte de celui qui protège.', display_order: 7 },
    { sense: 'serpent', sense_ar: 'إِلَاهَة', description: 'Le grand serpent. Objet d\'adoration dans l\'Arabie ancienne.', display_order: 8 },
    { sense: 'soleil', sense_ar: 'إِلَاهَة', description: 'Le soleil, appelé ainsi car il était adoré. Extension du sens de divinité vers l\'objet céleste vénéré.', display_order: 9 },
    { sense: 'lune', sense_ar: 'إِلَاهَة', description: 'La nouvelle lune (hilal). Autre objet céleste vénéré.', display_order: 10 },
  ]},
  rhm: { id: 251, senses: [
    { sense: 'miséricorde', sense_ar: 'رَحْمَة', description: 'Tendresse du coeur, inclination qui pousse à accorder faveur et bienfaisance. Le mouvement intérieur qui pousse à faire du bien à l\'autre.', display_order: 1 },
    { sense: 'pardonner', sense_ar: 'رَحِمَ', description: 'Accorder le pardon, excuser une faute. L\'acte de celui qui efface l\'erreur de l\'autre.', display_order: 2 },
    { sense: 'utérus', sense_ar: 'رَحِم', description: 'L\'organe maternel, la matrice, le lieu d\'origine du jeune dans le ventre. Sens physique premier de la racine : le lieu où la vie se forme.', display_order: 3 },
    { sense: 'lien de parenté', sense_ar: 'رَحِم', description: 'La relation de sang, les liens de famille, la connexion par la naissance. Extension de l\'utérus : ceux qui partagent la même matrice sont liés.', display_order: 4 },
    { sense: 'pluie', sense_ar: 'رَحْمَة', description: 'La pluie comme manifestation concrète de la miséricorde. L\'eau qui tombe du ciel et nourrit la terre et ses habitants.', display_order: 5 },
    { sense: 'subsistance', sense_ar: 'رَحْمَة', description: 'Les moyens de vivre, ce qui nourrit et fait vivre. Extension de la miséricorde vers le concret : ce dont on a besoin pour survivre.', display_order: 6 },
    { sense: 'abondance', sense_ar: 'رَحْمَة', description: 'La profusion d\'herbage et de biens nécessaires à la vie. Quand la miséricorde se manifeste par la générosité de la terre.', display_order: 7 },
    { sense: 'révérer', sense_ar: 'اِحْتَرَمَ', description: 'Tenir en respect, honorer, traiter avec révérence. Forme VIII de la racine : le respect profond envers quelqu\'un.', display_order: 8 },
  ]},
}

let totalSenses = 0
for (const [key, root] of Object.entries(roots)) {
  const senses = root.senses.map(s => ({...s, analysis_id: root.id, meaning_type: 'etymology'}))
  const {error} = await db.from('word_meanings').insert(senses)
  if (error) { log('  ERREUR ' + key + ': ' + error.message); continue }
  totalSenses += senses.length
  log('  [' + key + '] ' + senses.length + ' sens insérés')
  for (const s of senses) log('    ' + s.display_order + '. ' + s.sense + ' — ' + s.description.substring(0, 70) + '...')
  log('')
}
log('  TOTAL : ' + totalSenses + ' sens pour ' + Object.keys(roots).length + ' racines')
log('')

// ═══ ÉTAPE 3 ═══
log('>>> ÉTAPE 3 — ANALYSE DES SENS')
log('  Compatibilité grammaticale :')
log('  smw (ismi) = nom en idafa -> test : "[sens] de Dieu"')
log('  alh = nom défini -> test : "le/la [sens]"')
log('  rhm (ar-rahmani) = adjectif défini -> test : "le [sens]"')
log('')

const axes = {
  smw: {
    nom: {
      status: 'retenu',
      axe1_verset: 'Le verset est la formule d\'ouverture "bi-smi llahi" (au nom de Dieu). Le champ lexical est celui de l\'invocation et de l\'identification. "Nom" est le mot qui identifie et désigne : dire "au nom de Dieu" c\'est placer ce qui suit sous l\'identité et l\'autorité de Dieu. C\'est le sens qui structure toute la formule.',
      axe2_voisins: 'Le verset 1 ouvre la sourate et le Coran tout entier. Les versets suivants qualifient Dieu (Seigneur des mondes, le Miséricordieux). Le "nom" est ce qui introduit cette qualification : d\'abord on nomme, ensuite on décrit.',
      axe3_sourate: 'La Fatiha est la sourate d\'ouverture. Commencer par "au nom de" c\'est poser le cadre : tout ce qui suit est dit au nom de Dieu. C\'est une formule d\'autorité et de bénédiction qui ouvre le texte.',
      axe4_coherence: 'Le Coran utilise "bi-smi llahi" comme formule d\'ouverture au début de presque chaque sourate. L\'usage est constant et univoque : c\'est toujours le nom, jamais la hauteur ou le ciel.',
      axe5_frequence: 'Nommer est l\'acte fondamental qui permet au khalifa de connaître et d\'identifier. Sans nom, pas d\'identité, pas de relation. Commencer par le nom de Dieu c\'est reconnaître Son identité avant d\'agir.',
      proof_ctx: '"Nom" est le sens qui structure la formule d\'ouverture "bi-smi llahi" (au nom de Dieu). Test de compatibilité grammaticale : le mot est en idafa (annexion) avec Allah. "Nom de Dieu" fonctionne parfaitement. "Hauteur de Dieu" ou "ciel de Dieu" ne fonctionnent pas dans cette construction. Le Coran utilise cette formule au début de presque chaque sourate, toujours dans le sens de "nom". Distinction avec "nommer" : "nommer" est l\'action verbale, "nom" est le résultat. Le verset utilise le nom (ism), pas le verbe (samma).',
    },
    'être haut': { status: 'nul', proof_ctx: 'Sens physique premier de la racine. Mais "bi-smi" est une construction figée en arabe qui signifie "au nom de". "À la hauteur de Dieu" ne fonctionne pas.' },
    ciel: { status: 'nul', proof_ctx: 'Le ciel est une extension de la hauteur. "Au ciel de Dieu" ne fonctionne pas dans la construction bi-smi.' },
    pluie: { status: 'nul', proof_ctx: 'La pluie vient du ciel. "À la pluie de Dieu" n\'a pas de sens dans cette construction.' },
    nommer: {
      status: 'probable',
      axe1_verset: 'Nommer est l\'action de donner un nom. Le verset utilise le résultat (ism = le nom), pas l\'action (samma = nommer). Cependant, le lien entre les deux est direct.',
      axe2_voisins: 'Compatible avec les versets voisins qui nomment et qualifient Dieu.',
      axe3_sourate: 'Compatible avec le thème d\'ouverture.',
      axe4_coherence: 'Le Coran utilise samma (nommer) et ism (nom) distinctement. Ici c\'est ism.',
      axe5_frequence: 'Nommer est l\'acte qui permet de connaître. Compatible avec la mission du khalifa.',
      proof_ctx: '"Nommer" est l\'action verbale dont "nom" est le résultat. Le verset utilise le nom (ism), pas le verbe (samma). Les deux sont liés mais le verset choisit le résultat, pas l\'action.',
    },
    noble: { status: 'nul', proof_ctx: 'Extension abstraite de la hauteur. "Au noble de Dieu" ne fonctionne pas dans la construction bi-smi.' },
    aspirer: { status: 'nul', proof_ctx: 'Tendre vers le haut. "À l\'aspiration de Dieu" n\'a pas de sens ici.' },
    surpasser: { status: 'nul', proof_ctx: 'Dépasser en rang. "Au surpassement de Dieu" ne fonctionne pas.' },
    apparence: { status: 'nul', proof_ctx: 'La forme vue de loin. "À l\'apparence de Dieu" ne fonctionne pas.' },
    chasser: { status: 'nul', proof_ctx: 'Poursuivre le gibier. Aucun rapport avec le verset.' },
  },
  alh: {
    'divinité': {
      status: 'retenu',
      axe1_verset: 'Le verset invoque Dieu par Son nom (Allah). Le champ lexical est celui de l\'identité divine. "Divinité" est ce qui est adoré, l\'objet de dévotion. Allah est le nom propre qui désigne la Divinité par excellence. Dans le verset, "divinité" est le concept que le nom Allah identifie.',
      axe2_voisins: 'Les versets suivants qualifient cette divinité : Seigneur des mondes (v2), le Miséricordieux (v3), Maître du Jour du Jugement (v4). Le verset 1 la nomme, les suivants la décrivent.',
      axe3_sourate: 'La Fatiha pose la relation entre l\'humain et la Divinité. Nommer la Divinité en premier est le fondement de cette relation.',
      axe4_coherence: 'Le Coran utilise "Allah" comme nom propre de la Divinité des milliers de fois. Le mot ilah (divinité) est le concept dont Allah est le nom propre.',
      axe5_frequence: 'Reconnaître la Divinité est le fondement de la mission du khalifa. Sans cette reconnaissance, pas de cadre pour la justice ni la civilisation. La dignité humaine est accordée par cette Divinité.',
      proof_ctx: '"Divinité" est l\'objet d\'adoration, le concept dont Allah est le nom propre. Test de compatibilité grammaticale : le mot est défini (avec al-). "La Divinité" fonctionne naturellement. Le Coran utilise ilah pour le concept général et Allah pour le nom propre. Distinction avec "adorer" : adorer est l\'action du fidèle, la divinité est l\'objet de cette action. Le verset nomme l\'objet (Allah = la Divinité), pas l\'action d\'adorer.',
    },
    adorer: {
      status: 'probable',
      axe1_verset: 'Adorer est le sens premier de la racine. Cependant, le verset nomme Dieu, il ne décrit pas l\'acte d\'adorer. L\'adoration viendra au verset 5 (iyyaka nabudu).',
      axe2_voisins: 'L\'adoration est mentionnée explicitement au verset 5. Le verset 1 nomme, le verset 5 adore.',
      axe3_sourate: 'Compatible mais le verset 1 est une formule d\'identification, pas d\'adoration.',
      axe4_coherence: 'Le Coran distingue le nom Allah (l\'identité) de l\'acte d\'adorer (ibada).',
      axe5_frequence: 'Adorer est une action du khalifa, pas l\'identité de Dieu.',
      proof_ctx: '"Adorer" est le sens premier de la racine mais c\'est l\'action du fidèle, pas l\'identité de Dieu. Le verset nomme Dieu (nom propre Allah), il ne décrit pas l\'action d\'adorer. L\'adoration viendra au verset 5.',
    },
    'être perplexe': { status: 'nul', proof_ctx: 'État de confusion. Le verset est une formule d\'invocation claire, pas de confusion.' },
    'se lamenter': { status: 'nul', proof_ctx: 'Détresse véhémente. Le verset est une ouverture sereine, pas une lamentation.' },
    'chercher refuge': {
      status: 'peu_probable',
      axe1_verset: 'Chercher refuge est un sens de la racine. Cependant, la formule "bi-smi llahi" n\'est pas une demande de refuge mais une invocation d\'autorité.',
      axe2_voisins: 'Les versets voisins qualifient Dieu (miséricorde, seigneurie), pas le besoin de refuge.',
      axe3_sourate: 'La sourate pose une relation de louange et de demande, pas de refuge.',
      axe4_coherence: 'Le Coran utilise d\'autres formules pour le refuge (audhu billahi).',
      axe5_frequence: 'Chercher refuge est une action du khalifa, pas l\'identité de Dieu dans ce verset.',
      proof_ctx: 'Chercher refuge est un sens attesté de la racine. Mais la formule "bi-smi llahi" est une invocation d\'autorité, pas une demande de refuge. Le Coran utilise d\'autres formules pour le refuge (audhu billahi).',
    },
    demeurer: { status: 'nul', proof_ctx: 'Rester dans un lieu. Aucun rapport avec la formule d\'invocation du verset.' },
    'protéger': { status: 'nul', proof_ctx: 'Accorder un refuge. C\'est une action de Dieu, pas Son identité dans ce verset.' },
    serpent: { status: 'nul', proof_ctx: 'Objet d\'adoration ancienne. Hors contexte coranique.' },
    soleil: { status: 'nul', proof_ctx: 'Objet céleste vénéré. Hors contexte.' },
    lune: { status: 'nul', proof_ctx: 'Nouvelle lune. Hors contexte.' },
  },
  rhm: {
    'miséricorde': {
      status: 'retenu',
      axe1_verset: 'Le verset qualifie Dieu avec deux mots de la même racine : ar-rahman et ar-rahim. Les deux viennent de la miséricorde (rahma). Le champ lexical est celui de la tendresse, de la bonté et de la bienveillance. La miséricorde est le sens central qui unit les deux qualificatifs.',
      axe2_voisins: 'Le verset 3 répète ar-rahman ar-rahim, renforçant la miséricorde comme thème dominant de l\'ouverture. La miséricorde est le premier attribut que la Fatiha associe à Dieu, avant même la seigneurie (v2) ou la royauté (v4).',
      axe3_sourate: 'La Fatiha s\'ouvre et se rappelle la miséricorde comme fondement de la relation avec Dieu. C\'est le premier attribut mentionné et il est répété deux fois (v1 et v3), ce qui montre son importance.',
      axe4_coherence: 'Le Coran utilise rahman et rahim des centaines de fois pour décrire Dieu. "Bi-smi llahi r-rahmani r-rahim" est la formule d\'ouverture de 113 sourates sur 114. Usage constant et central.',
      axe5_frequence: 'La miséricorde est le fondement de la relation entre le khalifa et les autres êtres humains. C\'est par la miséricorde que la dignité humaine est préservée. Sans miséricorde, la justice devient tyrannie.',
      proof_ctx: '"Miséricorde" est le sens central de la racine r-h-m, la tendresse du coeur qui pousse à faire du bien. Les deux mots ar-rahman et ar-rahim sont construits sur des modèles différents (wazn, c\'est comme des moules qui donnent une forme particulière au mot). Ar-rahman suit un modèle qui exprime le plus haut degré possible, comme si la miséricorde débordait de partout. Ar-rahim suit un modèle qui exprime une qualité permanente qui ne s\'arrête jamais. Distinction avec "pardonner" : le pardon est un acte ponctuel, la miséricorde est un état permanent. La miséricorde englobe le pardon mais le dépasse. Distinction avec "utérus" : l\'utérus est le sens physique premier (le lieu où la vie se forme dans la douceur). La miséricorde est l\'extension de cette douceur protectrice vers le domaine moral.',
    },
    pardonner: {
      status: 'probable',
      axe1_verset: 'Le pardon est un acte de miséricorde. Dans le verset, les deux qualificatifs décrivent un état permanent, pas un acte ponctuel.',
      axe2_voisins: 'Le pardon est compatible avec le thème de la sourate mais c\'est un acte, pas un état.',
      axe3_sourate: 'La sourate décrit des qualités permanentes de Dieu, pas des actes ponctuels.',
      axe4_coherence: 'Le Coran utilise d\'autres mots pour le pardon (ghafara). Rahma est la miséricorde globale.',
      axe5_frequence: 'Le pardon est un acte du khalifa. La miséricorde est la disposition qui le rend possible.',
      proof_ctx: 'Le pardon est un acte ponctuel : on pardonne une faute précise. La miséricorde est un état permanent : une disposition du coeur qui pousse à faire du bien en continu. Le verset décrit des qualités permanentes de Dieu (adjectifs définis), pas des actes ponctuels.',
    },
    'utérus': {
      status: 'peu_probable',
      axe1_verset: 'L\'utérus est le sens physique premier de la racine. Mais le verset qualifie Dieu avec des adjectifs, pas des noms physiques.',
      axe2_voisins: 'Les versets voisins décrivent des qualités morales, pas des organes.',
      axe3_sourate: 'La sourate traite de la relation spirituelle, pas d\'anatomie.',
      axe4_coherence: 'Le Coran n\'utilise pas rahman ou rahim dans le sens d\'utérus. Ce sont des adjectifs de qualité.',
      axe5_frequence: 'L\'utérus est le lieu physique de la protection première. C\'est l\'origine de la miséricorde : la douceur protectrice de la mère pour son enfant. Mais le verset utilise l\'extension morale, pas le sens physique.',
      proof_ctx: 'L\'utérus est le sens physique premier : le lieu où la vie se forme dans la douceur et la protection. La miséricorde est l\'extension de cette douceur protectrice vers le domaine moral. Le verset utilise des adjectifs (rahman, rahim), pas le nom physique (rahim = utérus).',
    },
    'lien de parenté': {
      status: 'peu_probable',
      axe1_verset: 'Le lien de parenté est l\'extension de l\'utérus : ceux qui partagent la même matrice sont liés. Mais le verset qualifie Dieu, pas les relations humaines.',
      axe2_voisins: 'Les versets ne parlent pas de parenté.',
      axe3_sourate: 'La sourate traite de la relation avec Dieu, pas des liens familiaux.',
      axe4_coherence: 'Le Coran utilise rahim (utérus/parenté) distinctement de rahman/rahim (qualités de miséricorde).',
      axe5_frequence: 'Les liens de parenté sont importants pour le khalifa mais ce n\'est pas le sujet du verset.',
      proof_ctx: 'Le lien de parenté vient de l\'utérus (ceux qui partagent la même matrice). Mais le verset utilise des adjectifs qui qualifient Dieu, pas des noms qui décrivent des relations humaines.',
    },
    pluie: { status: 'nul', proof_ctx: 'La pluie comme manifestation concrète de la miséricorde. Mais le verset utilise des adjectifs, pas des noms concrets.' },
    subsistance: { status: 'nul', proof_ctx: 'Les moyens de vivre. Extension trop concrète pour des adjectifs qui qualifient Dieu.' },
    abondance: { status: 'nul', proof_ctx: 'Profusion de biens. Extension trop matérielle pour ce contexte.' },
    'révérer': { status: 'nul', proof_ctx: 'Tenir en respect (forme VIII). Le verset utilise des adjectifs de forme I, pas la forme VIII.' },
  },
}

let updatedCount = 0
for (const [rootKey, rootAxes] of Object.entries(axes)) {
  log('  [' + rootKey + ']')
  const {data: meanings} = await db.from('word_meanings')
    .select('id, sense').eq('analysis_id', roots[rootKey].id).order('display_order')
  for (const m of meanings) {
    const axeData = rootAxes[m.sense]
    if (!axeData) { log('    ' + m.sense + ' : pas de données'); continue }
    const upd = { status: axeData.status, proof_ctx: axeData.proof_ctx }
    if (axeData.axe1_verset) upd.axe1_verset = axeData.axe1_verset
    if (axeData.axe2_voisins) upd.axe2_voisins = axeData.axe2_voisins
    if (axeData.axe3_sourate) upd.axe3_sourate = axeData.axe3_sourate
    if (axeData.axe4_coherence) upd.axe4_coherence = axeData.axe4_coherence
    if (axeData.axe5_frequence) upd.axe5_frequence = axeData.axe5_frequence
    const {error} = await db.from('word_meanings').update(upd).eq('id', m.id)
    if (error) { log('    ERREUR ' + m.sense + ': ' + error.message); continue }
    const hasAxes = axeData.axe1_verset ? ' (5 axes)' : ''
    log('    ' + m.sense + ' -> ' + axeData.status.toUpperCase() + hasAxes)
    updatedCount++
  }
  log('')
}
log('  ' + updatedCount + ' sens mis à jour')

const vwa = [
  {verse_id:1,word_key:'smw',sense_chosen:'nom',position:2},
  {verse_id:1,word_key:'alh',sense_chosen:'divinité',position:3},
  {verse_id:1,word_key:'rhm',sense_chosen:'miséricorde',position:4},
  {verse_id:1,word_key:'rhm',sense_chosen:'miséricorde',position:5},
]
const {error: vwaErr} = await db.from('verse_word_analyses').insert(vwa)
if (vwaErr) log('  ERREUR vwa: ' + vwaErr.message)
else log('  ' + vwa.length + ' verse_word_analyses insérés')
log('')

log('  RÉSUMÉ :')
log('  smw -> nom (RETENU) | nommer (PROBABLE)')
log('  alh -> divinité (RETENU) | adorer (PROBABLE) | chercher refuge (PEU PROBABLE)')
log('  rhm -> miséricorde (RETENU) | pardonner (PROBABLE) | utérus, lien de parenté (PEU PROBABLE)')
log('')

// ═══ ÉTAPE 4 ═══
log('>>> ÉTAPE 4 — TRADUCTION')
log('')

const va = {
  verse_id: 1,
  translation_arab: "Au nom de Dieu, le Tout-Miséricordieux, le Miséricordieux.",
  translation_explanation: "La particule bi (avec/au) introduit le nom (ism) qui est rattaché à Allah, ensemble ils forment bi-smi llahi, \"au nom de Dieu\". C'est une formule d'ouverture qui place tout ce qui suit sous l'autorité de Dieu. Les deux mots ar-rahman et ar-rahim qualifient Dieu. Ils viennent de la même racine (r-h-m, qui a pour sens physique premier l'utérus, le lieu où la vie se forme dans la douceur et la protection). Ar-rahman est construit sur un modèle (qu'on appelle en arabe un wazn, c'est comme un moule qui donne une forme particulière au mot) qui exprime le plus haut degré possible, comme si la miséricorde débordait de partout. C'est pour ça qu'on traduit \"le Tout-Miséricordieux\". Ar-rahim est construit sur un modèle qui exprime une qualité permanente, qui ne s'arrête jamais, un trait de caractère constant. C'est pour ça qu'on traduit \"le Miséricordieux\" (sans \"Tout\"). Dans la traduction, Allah est rendu par \"Dieu\" (règle des noms propres). Le mot \"divinité\" (sens étymologique retenu) est le concept, \"Dieu\" est le nom propre utilisé en français.",
  segments: [
    {fr:"au",phon:"bi",arabic:"بِ",word_key:null,is_particle:true},
    {fr:"nom",pos:"nom",phon:"ismi",arabic:"ٱسْمِ",word_key:"smw",is_particle:false,sense_retenu:"nom"},
    {fr:"de Dieu",pos:"nom",phon:"allahi",arabic:"ٱللَّهِ",word_key:"alh",is_particle:false,sense_retenu:"divinité"},
    {fr:"le Tout-Miséricordieux",pos:"adjectif",phon:"ar-rahmani",arabic:"ٱلرَّحْمَـٰنِ",word_key:"rhm",is_particle:false,sense_retenu:"miséricorde"},
    {fr:"le Miséricordieux",pos:"adjectif",phon:"ar-rahimi",arabic:"ٱلرَّحِيمِ",word_key:"rhm",is_particle:false,sense_retenu:"miséricorde"},
  ]
}
const {error: vaErr} = await db.from('verse_analyses').insert(va)
if (vaErr) log('  ERREUR: ' + vaErr.message)
else log('  Traduction + segments + démarche insérés')

const daily = [
  {analysis_id:249,sense:'nom',arabic:'مَا ٱسْمُكَ؟',phon:'ma ismuka?',french:'Quel est ton nom ?'},
  {analysis_id:249,sense:'nom',arabic:'سَمَّيْتُ ٱبْنِي أَحْمَدَ',phon:'sammaytou ibni ahmad',french:"J'ai nommé mon fils Ahmad"},
  {analysis_id:249,sense:'nom',arabic:'بِسْمِ ٱللَّهِ',phon:'bi-smi llahi',french:'Au nom de Dieu'},
  {analysis_id:250,sense:'divinité',arabic:'لَا إِلٰهَ إِلَّا ٱللَّهُ',phon:'la ilaha illa llah',french:'Il n\'y a de divinité que Dieu'},
  {analysis_id:250,sense:'divinité',arabic:'هُوَ إِلٰهُ ٱلنَّاسِ',phon:'huwa ilahu n-nas',french:'Il est la divinité des gens'},
  {analysis_id:250,sense:'divinité',arabic:'مَنْ إِلٰهُكُمْ؟',phon:'man ilahukum?',french:'Qui est votre divinité ?'},
  {analysis_id:251,sense:'miséricorde',arabic:'يَرْحَمُكَ ٱللَّهُ',phon:'yarhamuka llah',french:'Que Dieu te fasse miséricorde'},
  {analysis_id:251,sense:'miséricorde',arabic:'ٱلْأُمُّ أَرْحَمُ ٱلنَّاسِ',phon:'al-ummu arhamu n-nas',french:'La mère est la plus miséricordieuse des gens'},
  {analysis_id:251,sense:'miséricorde',arabic:'صِلَةُ ٱلرَّحِمِ وَاجِبَةٌ',phon:'silatu r-rahimi wajiba',french:'Maintenir les liens de parenté est obligatoire'},
]
const {error: dailyErr} = await db.from('word_daily').insert(daily)
if (dailyErr) log('  ERREUR daily: ' + dailyErr.message)
else log('  ' + daily.length + ' phrases du quotidien insérées')

log('')
log('  TRADUCTION : "' + va.translation_arab + '"')
log('')
log('============================================')
log('  PIPELINE MAISON — VERSET 1:1 — TERMINÉ')
log('============================================')
}

run().catch(e => { console.error('ERREUR FATALE:', e); process.exit(1) })
