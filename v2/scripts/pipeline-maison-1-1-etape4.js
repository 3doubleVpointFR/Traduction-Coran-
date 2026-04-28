// Pipeline Maison — Verset 1:1 — ÉTAPE 4 — Traduction + démarche + daily
const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)

async function run() {
  console.log('════════════════════════════════════════')
  console.log('  ÉTAPE 4 — VERSET 1:1 — TRADUCTION')
  console.log('════════════════════════════════════════')
  console.log('')

  // Segments d'affichage
  const segments = [
    { fr: 'au', phon: 'bi', arabic: '\u0628\u0650', word_key: null, is_particle: true, position: 1 },
    { fr: 'nom', pos: 'nom', phon: 'ismi', arabic: '\u0671\u0633\u0652\u0645\u0650', word_key: 'smw', is_particle: false, sense_retenu: 'nom', position: 2 },
    { fr: 'de Dieu', pos: 'nom', phon: 'allahi', arabic: '\u0671\u0644\u0644\u0651\u064E\u0647\u0650', word_key: 'alh', is_particle: false, sense_retenu: 'divinit\u00e9', position: 3 },
    { fr: 'le Tout-Mis\u00e9ricordieux', pos: 'adjectif', phon: 'ar-rahmani', arabic: '\u0671\u0644\u0631\u0651\u064E\u062D\u0652\u0645\u064E\u0640\u0670\u0646\u0650', word_key: 'rhm', is_particle: false, sense_retenu: 'mis\u00e9ricorde', position: 4 },
    { fr: 'le Mis\u00e9ricordieux', pos: 'adjectif', phon: 'ar-rahimi', arabic: '\u0671\u0644\u0631\u0651\u064E\u062D\u0650\u064A\u0645\u0650', word_key: 'rhm', is_particle: false, sense_retenu: 'mis\u00e9ricorde', position: 5 },
  ]

  // Traduction
  const translation_arab = "Au nom de Dieu, le Tout-Mis\u00e9ricordieux, le Mis\u00e9ricordieux."

  // Démarche explicative
  const translation_explanation = "La particule bi (au/avec) introduit le mot ism (nom), qui est rattach\u00e9 \u00e0 Allah par ce qu'on appelle en arabe une idafa (c'est quand deux mots sont li\u00e9s pour dire que le premier appartient ou est li\u00e9 au second, comme quand on dit \"la porte de la maison\"). Ici : le nom de Dieu. Ensemble, bi-smi llahi forme \"au nom de Dieu\", une formule qui place tout ce qui suit sous l'autorit\u00e9 et l'identit\u00e9 de Dieu. Le mot ism vient d'une racine qui couvre la hauteur, le ciel et le nom. Ici c'est le sens de \"nom\" qui est retenu car la construction bi-smi est une formule d'identification : on dit au nom de qui on agit. Les deux mots ar-rahman et ar-rahim qualifient Dieu. Ils viennent de la m\u00eame racine (r-h-m, qui a pour sens physique premier l'ut\u00e9rus, le lieu o\u00f9 la vie se forme dans la douceur et la protection). Ar-rahman est construit sur un mod\u00e8le (qu'on appelle en arabe un wazn, c'est comme un moule qui donne une forme particuli\u00e8re au mot) qui exprime le plus haut degr\u00e9 possible, comme si la mis\u00e9ricorde d\u00e9bordait de partout. C'est pour \u00e7a qu'on traduit \"le Tout-Mis\u00e9ricordieux\". Ar-rahim est construit sur un mod\u00e8le qui exprime une qualit\u00e9 permanente, qui ne s'arr\u00eate jamais, un trait de caract\u00e8re constant. C'est pour \u00e7a qu'on traduit \"le Mis\u00e9ricordieux\" (sans \"Tout\"). Dans la traduction, Allah est rendu par \"Dieu\" (r\u00e8gle des noms propres). Le mot \"divinit\u00e9\" (sens \u00e9tymologique retenu de la racine a-l-h) est le concept — ce qui re\u00e7oit l'adoration — et \"Dieu\" est le nom propre utilis\u00e9 en fran\u00e7ais."

  // Mise à jour verse_analyses
  const { error: vaErr } = await db.from('verse_analyses').update({
    translation_arab,
    translation_explanation,
    segments,
  }).eq('verse_id', 1)

  if (vaErr) console.log('  ERREUR verse_analyses: ' + vaErr.message)
  else console.log('  verse_analyses mis \u00e0 jour')
  console.log('  Traduction : "' + translation_arab + '"')
  console.log('')

  // Phrases du quotidien (3 par sens retenu)
  console.log('>>> Phrases du quotidien')
  const daily = [
    // smw → nom
    { analysis_id: 249, sense: 'nom', arabic: '\u0645\u064E\u0627 \u0671\u0633\u0652\u0645\u064F\u0643\u064E\u061F', phon: 'ma ismuka?', french: 'Quel est ton nom ?' },
    { analysis_id: 249, sense: 'nom', arabic: '\u0633\u064E\u0645\u0651\u064E\u064A\u0652\u062A\u064F \u0671\u0628\u0652\u0646\u0650\u064A \u0623\u064E\u062D\u0652\u0645\u064E\u062F\u064E', phon: 'sammaytu ibni ahmad', french: "J'ai nomm\u00e9 mon fils Ahmad" },
    { analysis_id: 249, sense: 'nom', arabic: '\u0628\u0650\u0633\u0652\u0645\u0650 \u0671\u0644\u0644\u0651\u064E\u0647\u0650', phon: 'bi-smi llahi', french: 'Au nom de Dieu' },
    // alh → divinité
    { analysis_id: 250, sense: 'divinit\u00e9', arabic: '\u0644\u064E\u0627 \u0625\u0650\u0644\u0640\u0670\u0647\u064E \u0625\u0650\u0644\u0651\u064E\u0627 \u0671\u0644\u0644\u0651\u064E\u0647\u064F', phon: 'la ilaha illa llah', french: "Il n'y a de divinit\u00e9 que Dieu" },
    { analysis_id: 250, sense: 'divinit\u00e9', arabic: '\u0647\u064F\u0648\u064E \u0625\u0650\u0644\u0640\u0670\u0647\u064F \u0671\u0644\u0646\u0651\u064E\u0627\u0633\u0650', phon: 'huwa ilahu n-nas', french: 'Il est la divinit\u00e9 des gens' },
    { analysis_id: 250, sense: 'divinit\u00e9', arabic: '\u0645\u064E\u0646\u0652 \u0625\u0650\u0644\u0640\u0670\u0647\u064F\u0643\u064F\u0645\u0652\u061F', phon: 'man ilahukum?', french: 'Qui est votre divinit\u00e9 ?' },
    // rhm → miséricorde
    { analysis_id: 251, sense: 'mis\u00e9ricorde', arabic: '\u064A\u064E\u0631\u0652\u062D\u064E\u0645\u064F\u0643\u064E \u0671\u0644\u0644\u0651\u064E\u0647\u064F', phon: 'yarhamuka llah', french: 'Que Dieu te fasse mis\u00e9ricorde' },
    { analysis_id: 251, sense: 'mis\u00e9ricorde', arabic: '\u0671\u0644\u0652\u0623\u064F\u0645\u0651\u064F \u0623\u064E\u0631\u0652\u062D\u064E\u0645\u064F \u0671\u0644\u0646\u0651\u064E\u0627\u0633\u0650', phon: 'al-ummu arhamu n-nas', french: 'La m\u00e8re est la plus mis\u00e9ricordieuse des gens' },
    { analysis_id: 251, sense: 'mis\u00e9ricorde', arabic: '\u0635\u0650\u0644\u064E\u0629\u064F \u0671\u0644\u0631\u0651\u064E\u062D\u0650\u0645\u0650 \u0648\u064E\u0627\u062C\u0650\u0628\u064E\u0629\u0651', phon: 'silatu r-rahimi wajiba', french: 'Maintenir les liens de parent\u00e9 est obligatoire' },
  ]

  const { error: dailyErr } = await db.from('word_daily').insert(daily)
  if (dailyErr) console.log('  ERREUR word_daily: ' + dailyErr.message)
  else console.log('  ' + daily.length + ' phrases du quotidien ins\u00e9r\u00e9es')

  console.log('')
  console.log('════════════════════════════════════════')
  console.log('  VERSET 1:1 — TERMIN\u00c9')
  console.log('  smw → nom (RETENU)')
  console.log('  alh → divinit\u00e9 (RETENU)')
  console.log('  rhm → mis\u00e9ricorde (RETENU)')
  console.log('  Traduction : "' + translation_arab + '"')
  console.log('════════════════════════════════════════')
}

run().catch(e => { console.error('ERREUR FATALE:', e); process.exit(1) })
