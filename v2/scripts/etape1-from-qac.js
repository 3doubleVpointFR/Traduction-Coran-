// Étape 1 — Segmentation depuis le fichier QAC (zéro API, 100% stable)
// Parse le fichier quranic-corpus-morphology-0.4.txt et construit les segments
const fs = require('fs')
const path = require('path')
const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: path.join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)

const QAC_FILE = path.join(__dirname, '..', '..', 'data', 'raw', 'quranic-corpus-morphology-0.4.txt')
const FORCE = false // Skip les versets déjà traités

// ═══════════════════════════════════════
// BUCKWALTER → ARABE
// ═══════════════════════════════════════
const bw = {"'":"ء","<":"إ",">":"أ","&":"ؤ","}":"ئ","A":"ا","b":"ب","t":"ت","v":"ث","j":"ج","H":"ح","x":"خ","d":"د","*":"ذ","r":"ر","z":"ز","s":"س","$":"ش","S":"ص","D":"ض","T":"ط","Z":"ظ","E":"ع","g":"غ","f":"ف","q":"ق","k":"ك","l":"ل","m":"م","n":"ن","h":"ه","w":"و","y":"ي","p":"ة","F":"ً","N":"ٌ","K":"ٍ","a":"َ","u":"ُ","i":"ِ","~":"ّ","o":"ْ","`":"ٰ","{":"ٱ","^":"ٓ","#":"ٔ","_":"ـ",'"':"ٞ",",":"،",";":"؛","?":"؟","@":"۟","[":"۞"}

function bwToArabic(s) { return s.split('').map(c => bw[c] || c).join('') }

// ═══════════════════════════════════════
// BUCKWALTER ROOT → CLÉ RACINE
// ═══════════════════════════════════════
function rootToKey(bwRoot) {
  if (!bwRoot) return null
  // Mapping Buckwalter root vers clé utilisée dans word_analyses
  const map = {
    'Alh': 'alh', 'rHm': 'rhm', 'smw': 'smw', 'Hmd': 'hmd', 'rbb': 'rbb',
    'Elm': 'elm', 'mlk': 'mlk', 'ywm': 'ywm', 'dyn': 'dyn', 'Ebd': 'ebd',
    'Ewn': 'ewn', 'hdy': 'hdy', 'qwm': 'qwm', 'SrT': 'srt', 'nEm': 'nem',
    'Ely': 'ely', 'gyr': 'ghyr', 'gDb': 'ghdb', 'Dll': 'dll',
  }
  if (map[bwRoot]) return map[bwRoot]
  // Conversion générique Buckwalter → translittération simple
  return bwRoot.toLowerCase()
    .replace(/e/g, 'e').replace(/h/g, 'h').replace(/s/g, 's')
    .replace(/d/g, 'd').replace(/t/g, 't').replace(/z/g, 'z')
}

// ═══════════════════════════════════════
// POS TAG → TYPE (important/particle)
// ═══════════════════════════════════════
function getType(tag, features) {
  const particles = ['P', 'CONJ', 'DET', 'NEG', 'INTG', 'REL', 'VOC', 'ACC', 'CIRC', 'COND', 'RES', 'SUP', 'PREV', 'ANS', 'EXP', 'CERT', 'INC', 'SUR', 'RET', 'EXH', 'EXL', 'AMD', 'AVR']
  if (features.startsWith('PREFIX|') || features.startsWith('SUFFIX|')) return 'particle'
  if (particles.includes(tag)) return 'particle'
  if (tag === 'PRON') return 'particle' // Pronoms = particules (pas de racine à analyser)
  if (['N', 'V', 'ADJ', 'PN'].includes(tag)) return 'important'
  return 'particle'
}

// ═══════════════════════════════════════
// FEATURES → 24 CARACTÉRISTIQUES
// ═══════════════════════════════════════
function parseFeatures(features, tag) {
  const f = features.split('|')
  const result = {
    pos: null, gender: null, number: null, case_i18n: null,
    definite: false, idafa: false, voice: null, tense: null,
    person: null, verb_form: null, preceded_by_negation: false,
    negation_particle: null, emphatic_inna: false, oath: false,
    consequential_fa: false, emphatic_pronoun: false,
    prefix_particle: null, suffix_pronoun: null
  }

  // POS
  if (['N', 'PN'].includes(tag)) result.pos = 'nom'
  else if (tag === 'V') result.pos = 'verbe'
  else if (tag === 'ADJ') result.pos = 'adjectif'

  for (const part of f) {
    // Gender
    if (part === 'M' || part === 'MS' || part === 'MP' || part === 'MD') result.gender = 'masculin'
    if (part === 'F' || part === 'FS' || part === 'FP' || part === 'FD') result.gender = 'féminin'
    // Number
    if (part === 'MS' || part === 'FS' || part.endsWith('S') && part.length === 2) result.number = 'singulier'
    if (part === 'MP' || part === 'FP' || part.endsWith('P') && part.length === 2) result.number = 'pluriel'
    if (part === 'MD' || part === 'FD' || part.endsWith('D') && part.length === 2) result.number = 'duel'
    // Case
    if (part === 'NOM') result.case_i18n = 'nominatif'
    if (part === 'GEN') result.case_i18n = 'génitif'
    if (part === 'ACC') result.case_i18n = 'accusatif'
    // Tense
    if (part === 'PERF') result.tense = 'accompli'
    if (part === 'IMPF') result.tense = 'inaccompli'
    if (part === 'IMPV') result.tense = 'impératif'
    // Voice
    if (part === 'ACT') result.voice = 'actif'
    if (part === 'PASS') result.voice = 'passif'
    // Person
    if (part === '1S' || part === '1P' || part === '1D') result.person = '1ère'
    if (part === '1P') result.person = '1ère'
    if (part.startsWith('2')) result.person = '2ème'
    if (part.startsWith('3')) result.person = '3ème'
    // Verb form
    const formMatch = part.match(/^\(([IVX]+)\)$/)
    if (formMatch) result.verb_form = formMatch[1]
    // Participle
    if (part === 'PCPL') {
      // Le voice a été mis avant, on sait si c'est actif ou passif
    }
    // INDEF
    if (part === 'INDEF') result.definite = false
  }

  // Definite : si le mot a un prefix Al+
  if (features.includes('PREFIX|Al+') || features.includes('Al+')) result.definite = true

  // Person from combined tags like 1P, 2MS, 3FS etc
  const personMatch = features.match(/\b([123])[MF]?[SPD]\b/)
  if (personMatch) {
    if (personMatch[1] === '1') result.person = '1ère'
    if (personMatch[1] === '2') result.person = '2ème'
    if (personMatch[1] === '3') result.person = '3ème'
  }

  return result
}

// ═══════════════════════════════════════
// PARSE LE FICHIER QAC
// ═══════════════════════════════════════
function parseQAC() {
  const raw = fs.readFileSync(QAC_FILE, 'utf8')
  const lines = raw.split('\n').filter(l => l.trim() && !l.startsWith('#') && !l.startsWith('LOCATION'))

  // Regrouper les segments par mot (surah:verse:word)
  const words = {} // clé = "surah:verse:word", valeur = array de segments

  for (const line of lines) {
    const [location, form, tag, features] = line.split('\t')
    if (!location) continue
    const match = location.match(/\((\d+):(\d+):(\d+):(\d+)\)/)
    if (!match) continue
    const [, surah, verse, word, segment] = match.map(Number)
    const key = `${surah}:${verse}:${word}`
    if (!words[key]) words[key] = []
    words[key].push({ surah, verse, word, segment, form, tag, features: features || '' })
  }

  return words
}

// ═══════════════════════════════════════
// CONSTRUIRE LES SEGMENTS PAR VERSET
// ═══════════════════════════════════════
function buildVerseSegments(words, surahId, verseNum) {
  const segments = []
  const verseWords = {}

  // Collecter les mots de ce verset
  for (const [key, segs] of Object.entries(words)) {
    const [s, v] = key.split(':').map(Number)
    if (s === surahId && v === verseNum) {
      verseWords[key] = segs
    }
  }

  // Trier par position du mot
  const sortedKeys = Object.keys(verseWords).sort((a, b) => {
    const [, , wa] = a.split(':').map(Number)
    const [, , wb] = b.split(':').map(Number)
    return wa - wb
  })

  let prevIsNeg = false

  for (const key of sortedKeys) {
    const segs = verseWords[key]
    const [, , wordPos] = key.split(':').map(Number)

    // Reconstituer le mot complet
    let fullArabic = ''
    let root = null
    let rootKey = null
    let mainTag = null
    let mainFeatures = ''
    let phon = ''
    let hasDet = false
    let suffixPron = null
    let prefixParticle = null

    for (const seg of segs) {
      fullArabic += bwToArabic(seg.form)
      if (seg.features.startsWith('PREFIX|')) {
        if (seg.form === '{l' || seg.form === '{lo') hasDet = true
        if (['bi', 'li', 'la', 'ka', 'sa', 'wa', 'fa'].includes(seg.form.replace('+', ''))) {
          prefixParticle = seg.form.replace('+', '')
        }
        continue
      }
      if (seg.features.startsWith('SUFFIX|')) {
        const pronMatch = seg.features.match(/PRON:(\w+)/)
        if (pronMatch) suffixPron = pronMatch[1]
        continue
      }
      // C'est le STEM
      mainTag = seg.tag
      mainFeatures = seg.features
      phon = seg.form
      const rootMatch = seg.features.match(/ROOT:(\w+)/)
      if (rootMatch) {
        root = rootMatch[1]
        rootKey = rootToKey(root)
      }
    }

    const type = getType(mainTag || segs[0].tag, mainFeatures || segs[0].features)
    const chars = parseFeatures(mainFeatures, mainTag)

    // Definite from Al prefix
    if (hasDet) chars.definite = true

    // Suffix pronoun
    if (suffixPron) chars.suffix_pronoun = suffixPron

    // Prefix particle
    if (prefixParticle) chars.prefix_particle = prefixParticle

    // Preceded by negation (check previous segment)
    if (prevIsNeg) chars.preceded_by_negation = true

    // Check if this word IS a negation (for next word)
    const isNeg = mainTag === 'NEG' || (segs[0] && segs[0].tag === 'NEG') ||
                  ['laA', 'lam', 'lan', 'maA'].includes(phon)
    prevIsNeg = isNeg

    // Emphatic inna
    if (mainTag === 'ACC' && phon.includes('<in~')) chars.emphatic_inna = true

    const segment = {
      position: wordPos,
      type,
      arabic: fullArabic,
      phon: bwToArabic(phon), // On garde la translittération arabe pour l'instant
      root: root ? bwToArabic(root.split('').join(' ')) : null,
      key: rootKey,
      ...chars,
    }

    // Nettoyer les null
    for (const k of Object.keys(segment)) {
      if (segment[k] === null || segment[k] === false) delete segment[k]
    }

    segments.push(segment)
  }

  return segments
}

// ═══════════════════════════════════════
// IDAFA DETECTION (post-processing)
// ═══════════════════════════════════════
function detectIdafa(segments) {
  for (let i = 0; i < segments.length - 1; i++) {
    const curr = segments[i]
    const next = segments[i + 1]
    // Idafa : nom suivi d'un nom/pronom au génitif, et le premier n'a pas l'article
    if (curr.pos === 'nom' && !curr.definite &&
        (next.pos === 'nom' || next.type === 'particle') &&
        next.case_i18n === 'génitif') {
      curr.idafa = true
    }
  }
}

// ═══════════════════════════════════════
// EXÉCUTION PRINCIPALE
// ═══════════════════════════════════════
async function run() {
  console.log('════════════════════════════════════════════════════')
  console.log('  ÉTAPE 1 — SEGMENTATION DEPUIS QAC (zéro API)')
  console.log('════════════════════════════════════════════════════')
  console.log('')

  console.log('Parsing du fichier QAC...')
  const words = parseQAC()
  const totalWords = Object.keys(words).length
  console.log('  ' + totalWords + ' mots parsés')
  console.log('')

  // Récupérer les sourates
  const { data: surahs } = await db.from('surahs').select('id, name_fr, verse_count').order('id')
  if (!surahs) { console.log('ERREUR: pas de sourates en base'); return }

  // Récupérer les verse_ids (pagination car > 1000 rows)
  let verses = []
  let from = 0
  while (true) {
    const { data, error } = await db.from('verses').select('id, surah_id, verse_num').order('id').range(from, from + 999)
    if (error) { console.log('ERREUR verses:', error.message); return }
    if (!data || data.length === 0) break
    verses = verses.concat(data)
    from += 1000
    if (data.length < 1000) break
  }
  if (verses.length === 0) { console.log('ERREUR: pas de versets en base'); return }
  console.log('  ' + verses.length + ' versets récupérés')

  // Map verse_id
  const verseMap = {}
  for (const v of verses) {
    verseMap[`${v.surah_id}:${v.verse_num}`] = v.id
  }

  // Vérifier quels versets sont déjà faits
  let doneIds = new Set()
  if (!FORCE) {
    const { data: done } = await db.from('verse_analyses')
      .select('verse_id')
      .not('segments_step1', 'is', null)
    if (done) doneIds = new Set(done.map(d => d.verse_id))
  }
  console.log('Versets déjà faits (segments_step1): ' + doneIds.size)
  console.log('')

  let totalProcessed = 0
  let totalSkipped = 0
  let totalImportant = 0
  let totalParticles = 0
  const newRoots = new Set()

  // Récupérer les racines existantes
  const { data: existingRoots } = await db.from('word_analyses').select('word_key')
  const existingRootKeys = new Set((existingRoots || []).map(r => r.word_key))

  for (const surah of surahs) {
    const surahStart = Date.now()
    let surahSkipped = 0
    let surahProcessed = 0
    let surahImportant = 0
    let surahParticles = 0
    let surahNewRoots = 0
    const batch = []

    for (let v = 1; v <= surah.verse_count; v++) {
      const verseId = verseMap[`${surah.id}:${v}`]
      if (!verseId) continue

      if (doneIds.has(verseId)) {
        surahSkipped++
        continue
      }

      const segments = buildVerseSegments(words, surah.id, v)
      detectIdafa(segments)

      const imp = segments.filter(s => s.type === 'important').length
      const part = segments.filter(s => s.type === 'particle').length
      surahImportant += imp
      surahParticles += part

      // Créer les word_analyses pour les nouvelles racines
      for (const seg of segments) {
        if (seg.type === 'important' && seg.key && !existingRootKeys.has(seg.key)) {
          existingRootKeys.add(seg.key)
          newRoots.add(seg.key)
          surahNewRoots++
          await db.from('word_analyses').insert({
            word_key: seg.key,
            arabic_root: seg.root,
            surah_id: surah.id,
            verse_num: v,
          })
        }
      }

      // Upsert verse_analyses avec segments_step1
      const { data: existing } = await db.from('verse_analyses')
        .select('id').eq('verse_id', verseId)
      if (existing && existing.length > 0) {
        await db.from('verse_analyses').update({ segments_step1: segments }).eq('verse_id', verseId)
      } else {
        await db.from('verse_analyses').insert({ verse_id: verseId, segments_step1: segments })
      }

      surahProcessed++
    }

    totalProcessed += surahProcessed
    totalSkipped += surahSkipped
    totalImportant += surahImportant
    totalParticles += surahParticles

    const elapsed = ((Date.now() - surahStart) / 1000).toFixed(1)

    if (surahSkipped === surah.verse_count) {
      console.log('=== SOURATE ' + surah.id + '/114 — ' + surah.name_fr + ' — ' + surah.verse_count + ' versets ===')
      console.log('  ✓ Tous les ' + surah.verse_count + ' versets déjà faits — skip')
    } else {
      console.log('=== SOURATE ' + surah.id + '/114 — ' + surah.name_fr + ' — ' + surah.verse_count + ' versets ===')
      if (surahSkipped > 0) console.log('  ' + surahSkipped + ' versets déjà faits')
      console.log('  ✓ ' + surahProcessed + ' versets traités — ' + surahImportant + 'i+' + surahParticles + 'p — ' + surahNewRoots + ' nouvelles racines — ' + elapsed + 's')
    }
  }

  console.log('')
  console.log('════════════════════════════════════════════════════')
  console.log('  TERMINÉ')
  console.log('  ' + totalProcessed + ' versets traités')
  console.log('  ' + totalSkipped + ' versets skippés')
  console.log('  ' + totalImportant + ' mots importants + ' + totalParticles + ' particules')
  console.log('  ' + newRoots.size + ' nouvelles racines créées')
  console.log('════════════════════════════════════════════════════')
}

run().catch(e => { console.error('ERREUR FATALE:', e); process.exit(1) })
