/**
 * scripts/import-qac-supabase.ts
 * Importe le Quranic Arabic Corpus (QAC) dans Supabase.
 *
 * Usage:
 *   npx tsx scripts/import-qac-supabase.ts
 *   npx tsx scripts/import-qac-supabase.ts --dry-run
 *   npx tsx scripts/import-qac-supabase.ts --surah 2
 *
 * Requires: .env.local with SUPABASE_URL and SUPABASE_SERVICE_KEY
 * Data file: ../data/raw/quranic-corpus-morphology-0.4.txt
 */

import { createClient } from '@supabase/supabase-js'
import fs from 'fs'
import path from 'path'
import readline from 'readline'
import dotenv from 'dotenv'

// Load .env.local
dotenv.config({ path: path.join(__dirname, '..', '.env.local') })

const QAC_PATH = path.join(__dirname, '..', '..', 'data', 'raw', 'quranic-corpus-morphology-0.4.txt')

const args = process.argv.slice(2)
const DRY_RUN = args.includes('--dry-run')
const ONLY_SURAH = (() => {
  const idx = args.indexOf('--surah')
  return idx !== -1 ? parseInt(args[idx + 1], 10) : null
})()

// ── Supabase client ──────────────────────────────────────────────────────────

function getDb() {
  const url = process.env.SUPABASE_URL
  const key = process.env.SUPABASE_SERVICE_KEY
  if (!url || !key) throw new Error('Missing SUPABASE_URL or SUPABASE_SERVICE_KEY in .env.local')
  return createClient(url, key)
}

// ── Buckwalter → arabe ──────────────────────────────────────────────────────

const BW: Record<string, string> = {
  "'": 'أ', '|': 'آ', '&': 'ؤ', '<': 'إ', '}': 'ئ',
  A: 'ا', b: 'ب', p: 'ة', t: 'ت', v: 'ث', j: 'ج',
  H: 'ح', x: 'خ', d: 'د', '*': 'ذ', r: 'ر', z: 'ز',
  s: 'س', $: 'ش', S: 'ص', D: 'ض', T: 'ط', Z: 'ظ',
  E: 'ع', g: 'غ', f: 'ف', q: 'ق', k: 'ك', l: 'ل',
  m: 'م', n: 'ن', h: 'ه', w: 'و', y: 'ي',
  F: 'ً', N: 'ٌ', K: 'ٍ', a: 'َ', u: 'ُ', i: 'ِ',
  '~': 'ّ', o: 'ْ', e: 'ة',
}

function bwToArabic(bw: string): string {
  return bw.split('').map(c => BW[c] ?? c).join('')
}

// ── Parsers ──────────────────────────────────────────────────────────────────

interface QacLocation { surah: number; verse: number; word: number; segment: number }

function parseLocation(raw: string): QacLocation {
  const m = raw.replace(/[()]/g, '').split(':').map(Number)
  return { surah: m[0], verse: m[1], word: m[2], segment: m[3] }
}

function parseFeatures(raw: string): Record<string, string> {
  const result: Record<string, string> = {}
  for (const token of raw.split('|')) {
    const sep = token.indexOf(':')
    if (sep === -1) result[token] = 'true'
    else result[token.slice(0, sep)] = token.slice(sep + 1)
  }
  return result
}

interface ParsedMorpheme {
  location: QacLocation
  form: string
  tag: string
  features: Record<string, string>
}

function parseLine(line: string): ParsedMorpheme | null {
  if (!line || line.startsWith('#')) return null
  const cols = line.split('\t')
  if (cols.length < 4) return null
  const location = parseLocation(cols[0])
  if (!Number.isInteger(location.surah) || location.surah < 1 || location.surah > 114) return null
  if (!Number.isInteger(location.verse) || location.verse < 1) return null
  return {
    location,
    form: cols[1].trim(),
    tag: cols[2].trim(),
    features: parseFeatures(cols[3].trim()),
  }
}

// ── Surah names ──────────────────────────────────────────────────────────────

const SURAH_NAMES: [string, string, string, string][] = [
  ['الفاتحة', 'Al-Fatiha', "L'Ouverture", 'mecquoise'],
  ['البقرة', 'Al-Baqara', 'La Vache', 'médinoise'],
  ['آل عمران', "Ali 'Imran", "La Famille d'Imran", 'médinoise'],
  ['النساء', 'An-Nisa', 'Les Femmes', 'médinoise'],
  ['المائدة', 'Al-Ma\'ida', 'La Table Servie', 'médinoise'],
  ['الأنعام', 'Al-An\'am', 'Les Bestiaux', 'mecquoise'],
  ['الأعراف', 'Al-A\'raf', 'Les Hauteurs', 'mecquoise'],
  ['الأنفال', 'Al-Anfal', 'Le Butin', 'médinoise'],
  ['التوبة', 'At-Tawba', 'Le Repentir', 'médinoise'],
  ['يونس', 'Yunus', 'Jonas', 'mecquoise'],
  ['هود', 'Hud', 'Houd', 'mecquoise'],
  ['يوسف', 'Yusuf', 'Joseph', 'mecquoise'],
  ['الرعد', 'Ar-Ra\'d', 'Le Tonnerre', 'médinoise'],
  ['إبراهيم', 'Ibrahim', 'Abraham', 'mecquoise'],
  ['الحجر', 'Al-Hijr', 'Al-Hijr', 'mecquoise'],
  ['النحل', 'An-Nahl', "L'Abeille", 'mecquoise'],
  ['الإسراء', 'Al-Isra', 'Le Voyage Nocturne', 'mecquoise'],
  ['الكهف', 'Al-Kahf', 'La Caverne', 'mecquoise'],
  ['مريم', 'Maryam', 'Marie', 'mecquoise'],
  ['طه', 'Ta-Ha', 'Ta-Ha', 'mecquoise'],
  ['الأنبياء', 'Al-Anbiya', 'Les Prophètes', 'mecquoise'],
  ['الحج', 'Al-Hajj', 'Le Pèlerinage', 'médinoise'],
  ['المؤمنون', 'Al-Mu\'minun', 'Les Croyants', 'mecquoise'],
  ['النور', 'An-Nur', 'La Lumière', 'médinoise'],
  ['الفرقان', 'Al-Furqan', 'Le Critère', 'mecquoise'],
  ['الشعراء', 'Ash-Shu\'ara', 'Les Poètes', 'mecquoise'],
  ['النمل', 'An-Naml', 'Les Fourmis', 'mecquoise'],
  ['القصص', 'Al-Qasas', 'Le Récit', 'mecquoise'],
  ['العنكبوت', 'Al-Ankabut', "L'Araignée", 'mecquoise'],
  ['الروم', 'Ar-Rum', 'Les Romains', 'mecquoise'],
  ['لقمان', 'Luqman', 'Luqman', 'mecquoise'],
  ['السجدة', 'As-Sajda', 'La Prosternation', 'mecquoise'],
  ['الأحزاب', 'Al-Ahzab', 'Les Coalisés', 'médinoise'],
  ['سبأ', 'Saba', 'Saba', 'mecquoise'],
  ['فاطر', 'Fatir', 'Le Créateur', 'mecquoise'],
  ['يس', 'Ya-Sin', 'Ya-Sin', 'mecquoise'],
  ['الصافات', 'As-Saffat', 'Les Rangés', 'mecquoise'],
  ['ص', 'Sad', 'Sad', 'mecquoise'],
  ['الزمر', 'Az-Zumar', 'Les Groupes', 'mecquoise'],
  ['غافر', 'Ghafir', 'Celui qui pardonne', 'mecquoise'],
  ['فصلت', 'Fussilat', 'Les versets détaillés', 'mecquoise'],
  ['الشورى', 'Ash-Shura', 'La Consultation', 'mecquoise'],
  ['الزخرف', 'Az-Zukhruf', "L'Ornement", 'mecquoise'],
  ['الدخان', 'Ad-Dukhan', 'La Fumée', 'mecquoise'],
  ['الجاثية', 'Al-Jathiya', "L'Agenouillée", 'mecquoise'],
  ['الأحقاف', 'Al-Ahqaf', 'Les Dunes', 'mecquoise'],
  ['محمد', 'Muhammad', 'Muhammad', 'médinoise'],
  ['الفتح', 'Al-Fath', 'La Victoire', 'médinoise'],
  ['الحجرات', 'Al-Hujurat', 'Les Appartements', 'médinoise'],
  ['ق', 'Qaf', 'Qaf', 'mecquoise'],
  ['الذاريات', 'Adh-Dhariyat', 'Qui Éparpillent', 'mecquoise'],
  ['الطور', 'At-Tur', 'Le Mont', 'mecquoise'],
  ['النجم', 'An-Najm', "L'Étoile", 'mecquoise'],
  ['القمر', 'Al-Qamar', 'La Lune', 'mecquoise'],
  ['الرحمن', 'Ar-Rahman', 'Le Tout Miséricordieux', 'médinoise'],
  ['الواقعة', 'Al-Waqi\'a', "L'Événement", 'mecquoise'],
  ['الحديد', 'Al-Hadid', 'Le Fer', 'médinoise'],
  ['المجادلة', 'Al-Mujadila', 'La Discussion', 'médinoise'],
  ['الحشر', 'Al-Hashr', "L'Exode", 'médinoise'],
  ['الممتحنة', 'Al-Mumtahina', "L'Éprouvée", 'médinoise'],
  ['الصف', 'As-Saff', 'Le Rang', 'médinoise'],
  ['الجمعة', 'Al-Jumu\'a', 'Le Vendredi', 'médinoise'],
  ['المنافقون', 'Al-Munafiqun', 'Les Hypocrites', 'médinoise'],
  ['التغابن', 'At-Taghabun', 'La Grande Perte', 'médinoise'],
  ['الطلاق', 'At-Talaq', 'Le Divorce', 'médinoise'],
  ['التحريم', 'At-Tahrim', "L'Interdiction", 'médinoise'],
  ['الملك', 'Al-Mulk', 'La Royauté', 'mecquoise'],
  ['القلم', 'Al-Qalam', 'La Plume', 'mecquoise'],
  ['الحاقة', 'Al-Haqqa', "L'Inévitable", 'mecquoise'],
  ['المعارج', 'Al-Ma\'arij', 'Les Voies d\'Ascension', 'mecquoise'],
  ['نوح', 'Nuh', 'Noé', 'mecquoise'],
  ['الجن', 'Al-Jinn', 'Les Djinns', 'mecquoise'],
  ['المزمل', 'Al-Muzzammil', "L'Enveloppé", 'mecquoise'],
  ['المدثر', 'Al-Muddaththir', 'Le Revêtu', 'mecquoise'],
  ['القيامة', 'Al-Qiyama', 'La Résurrection', 'mecquoise'],
  ['الإنسان', 'Al-Insan', "L'Homme", 'médinoise'],
  ['المرسلات', 'Al-Mursalat', 'Les Envoyés', 'mecquoise'],
  ['النبأ', 'An-Naba', 'La Nouvelle', 'mecquoise'],
  ['النازعات', 'An-Nazi\'at', 'Les Anges qui Arrachent', 'mecquoise'],
  ['عبس', 'Abasa', 'Il s\'est renfrogné', 'mecquoise'],
  ['التكوير', 'At-Takwir', "L'Obscurcissement", 'mecquoise'],
  ['الانفطار', 'Al-Infitar', 'La Rupture', 'mecquoise'],
  ['المطففين', 'Al-Mutaffifin', 'Les Fraudeurs', 'mecquoise'],
  ['الانشقاق', 'Al-Inshiqaq', 'La Déchirure', 'mecquoise'],
  ['البروج', 'Al-Buruj', 'Les Constellations', 'mecquoise'],
  ['الطارق', 'At-Tariq', "L'Astre Nocturne", 'mecquoise'],
  ['الأعلى', 'Al-A\'la', 'Le Très-Haut', 'mecquoise'],
  ['الغاشية', 'Al-Ghashiya', "L'Enveloppante", 'mecquoise'],
  ['الفجر', 'Al-Fajr', "L'Aube", 'mecquoise'],
  ['البلد', 'Al-Balad', 'La Cité', 'mecquoise'],
  ['الشمس', 'Ash-Shams', 'Le Soleil', 'mecquoise'],
  ['الليل', 'Al-Layl', 'La Nuit', 'mecquoise'],
  ['الضحى', 'Ad-Duha', 'Le Jour Montant', 'mecquoise'],
  ['الشرح', 'Ash-Sharh', "L'Ouverture de Poitrine", 'mecquoise'],
  ['التين', 'At-Tin', 'Le Figuier', 'mecquoise'],
  ['العلق', 'Al-Alaq', "L'Adhérence", 'mecquoise'],
  ['القدر', 'Al-Qadr', 'La Destinée', 'mecquoise'],
  ['البينة', 'Al-Bayyina', 'La Preuve', 'médinoise'],
  ['الزلزلة', 'Az-Zalzala', 'La Secousse', 'médinoise'],
  ['العاديات', 'Al-Adiyat', 'Les Coursiers', 'mecquoise'],
  ['القارعة', 'Al-Qari\'a', 'Le Fracas', 'mecquoise'],
  ['التكاثر', 'At-Takathur', 'La Course aux Richesses', 'mecquoise'],
  ['العصر', 'Al-Asr', "Le Temps", 'mecquoise'],
  ['الهمزة', 'Al-Humaza', 'Le Calomniateur', 'mecquoise'],
  ['الفيل', 'Al-Fil', "L'Éléphant", 'mecquoise'],
  ['قريش', 'Quraysh', 'Quraysh', 'mecquoise'],
  ['الماعون', 'Al-Ma\'un', "L'Ustensile", 'mecquoise'],
  ['الكوثر', 'Al-Kawthar', "L'Abondance", 'mecquoise'],
  ['الكافرون', 'Al-Kafirun', 'Les Mécréants', 'mecquoise'],
  ['النصر', 'An-Nasr', 'Le Secours', 'médinoise'],
  ['المسد', 'Al-Masad', 'Les Fibres', 'mecquoise'],
  ['الإخلاص', 'Al-Ikhlas', 'Le Monothéisme Pur', 'mecquoise'],
  ['الفلق', 'Al-Falaq', "L'Aube Naissante", 'mecquoise'],
  ['الناس', 'An-Nas', 'Les Hommes', 'mecquoise'],
]

// Known verse counts per surah
const VERSE_COUNTS = [
  7, 286, 200, 176, 120, 165, 206, 75, 129, 109,
  123, 111, 43, 52, 99, 128, 111, 110, 98, 135,
  112, 78, 118, 64, 77, 227, 93, 88, 69, 60,
  34, 30, 73, 54, 45, 83, 182, 88, 75, 85,
  54, 53, 89, 59, 37, 35, 38, 29, 18, 45,
  60, 49, 62, 55, 78, 96, 29, 22, 24, 13,
  14, 11, 11, 18, 12, 12, 30, 52, 52, 44,
  28, 28, 20, 56, 40, 31, 50, 40, 46, 42,
  29, 19, 36, 25, 22, 17, 19, 26, 30, 20,
  15, 21, 11, 8, 8, 19, 5, 8, 8, 11,
  11, 8, 3, 9, 5, 4, 7, 3, 6, 3,
  5, 4, 5, 6,
]

// ── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  console.log('=== Import QAC → Supabase ===')

  if (!fs.existsSync(QAC_PATH)) {
    console.error(`Fichier QAC introuvable : ${QAC_PATH}`)
    console.error('Placez quranic-corpus-morphology-0.4.txt dans data/raw/')
    process.exit(1)
  }

  if (DRY_RUN) console.log('[DRY RUN] Aucune écriture en base.')

  const db = getDb()

  // 1. Insert surahs
  console.log('\n1. Insertion des sourates...')
  if (!DRY_RUN) {
    const surahs = SURAH_NAMES.map(([ar, lat, fr, rev], i) => ({
      id: i + 1,
      name_ar: ar,
      name_latin: lat,
      name_fr: fr,
      revelation: rev,
      verse_count: VERSE_COUNTS[i],
    }))

    const { error } = await db.from('surahs').upsert(surahs, { onConflict: 'id' })
    if (error) console.error('Erreur surahs:', error.message)
    else console.log(`  ${surahs.length} sourates insérées.`)
  }

  // 2. Parse QAC file and collect data
  console.log('\n2. Parsing du fichier QAC...')

  const versesMap = new Map<string, { surah_id: number; verse_num: number }>()
  const wordsMap = new Map<string, { verse_key: string; position: number; root: string; transliteration: string; pos_tag: string; forms: string[] }>()

  const rl = readline.createInterface({
    input: fs.createReadStream(QAC_PATH, 'utf-8'),
    crlfDelay: Infinity,
  })

  let lineCount = 0
  let errorCount = 0

  for await (const line of rl) {
    lineCount++
    const m = parseLine(line)
    if (!m) continue

    const { surah, verse, word } = m.location
    if (ONLY_SURAH && surah !== ONLY_SURAH) continue

    // Track verse
    const verseKey = `${surah}:${verse}`
    if (!versesMap.has(verseKey)) {
      versesMap.set(verseKey, { surah_id: surah, verse_num: verse })
    }

    // Track word (aggregate morpheme forms)
    const wordKey = `${surah}:${verse}:${word}`
    if (!wordsMap.has(wordKey)) {
      wordsMap.set(wordKey, {
        verse_key: verseKey,
        position: word,
        root: '',
        transliteration: '',
        pos_tag: '',
        forms: [],
      })
    }

    const wordEntry = wordsMap.get(wordKey)!
    wordEntry.forms.push(m.form)

    // Extract root from features
    if (m.features.ROOT && !wordEntry.root) {
      wordEntry.root = bwToArabic(m.features.ROOT)
    }

    // Extract POS
    if (m.features.POS && !wordEntry.pos_tag) {
      wordEntry.pos_tag = m.features.POS
    }

    // Extract lemma as transliteration
    if (m.features.LEM && !wordEntry.transliteration) {
      wordEntry.transliteration = m.features.LEM
    }
  }

  console.log(`  ${lineCount} lignes parsées, ${versesMap.size} versets, ${wordsMap.size} mots`)

  if (DRY_RUN) {
    console.log('\n[DRY RUN] Terminé.')
    return
  }

  // 3. Insert verses in batches
  console.log('\n3. Insertion des versets...')
  const versesArr = Array.from(versesMap.entries()).map(([, v]) => ({
    surah_id: v.surah_id,
    verse_num: v.verse_num,
    arabic_text: '',
  }))

  // Insert in batches of 500
  for (let i = 0; i < versesArr.length; i += 500) {
    const batch = versesArr.slice(i, i + 500)
    const { error } = await db.from('verses').upsert(batch, {
      onConflict: 'surah_id,verse_num',
    })
    if (error) {
      console.error(`  Erreur batch versets ${i}:`, error.message)
      errorCount++
    }
  }
  console.log(`  ${versesArr.length} versets insérés.`)

  // 4. Fetch verse IDs mapping
  console.log('\n4. Récupération des IDs de versets...')
  const verseIdMap = new Map<string, number>()

  // Fetch all verses (paginated — Supabase limits to 1000 per query)
  let offset = 0
  const pageSize = 1000
  while (true) {
    const { data: page } = await db.from('verses').select('id, surah_id, verse_num').range(offset, offset + pageSize - 1)
    if (!page || page.length === 0) break
    for (const v of page) {
      verseIdMap.set(`${v.surah_id}:${v.verse_num}`, v.id)
    }
    offset += page.length
    if (page.length < pageSize) break
  }
  console.log(`  ${verseIdMap.size} versets mappés.`)

  // 5. Insert words in batches
  console.log('\n5. Insertion des mots...')
  const wordsArr = Array.from(wordsMap.entries()).map(([, w]) => {
    const verseId = verseIdMap.get(w.verse_key)
    return {
      verse_id: verseId,
      position: w.position,
      arabic: w.forms.join(''),
      root: w.root,
      transliteration: w.transliteration,
      pos_tag: w.pos_tag,
    }
  }).filter(w => w.verse_id != null)

  for (let i = 0; i < wordsArr.length; i += 500) {
    const batch = wordsArr.slice(i, i + 500)
    const { error } = await db.from('words').insert(batch)
    if (error) {
      console.error(`  Erreur batch mots ${i}:`, error.message)
      errorCount++
    }
    if (i % 5000 === 0) process.stdout.write(`  ${i}/${wordsArr.length}\r`)
  }
  console.log(`  ${wordsArr.length} mots insérés.`)

  console.log(`\n=== Import terminé (${errorCount} erreurs) ===`)
}

main().catch(console.error)
