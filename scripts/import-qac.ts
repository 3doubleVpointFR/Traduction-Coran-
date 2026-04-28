/**
 * scripts/import-qac.ts
 * =====================
 * Importe le Quranic Arabic Corpus (QAC) dans la base SQLite via node:sqlite.
 *
 * FORMAT QAC (quranic-corpus.org — fichier quranic-corpus-morphology-0.4.txt)
 * Colonnes séparées par TAB :
 *   [0] LOCATION   "surah:verse:word:segment"  ex. (2:5:3:1)
 *   [1] FORM       forme arabe du morphème     ex. وَ
 *   [2] TAG        catégorie QAC               ex. PREFIX|CONJ
 *   [3] FEATURES   traits morphologiques       ex. STEM|POS:V|LEM:kataba|ROOT:ktb|...
 *
 * PRÉREQUIS :
 *   Fichier :  data/raw/quranic-corpus-morphology-0.4.txt
 *   Commande : npm run db:init  (avant le premier import)
 *
 * OPTIONS :
 *   --surah N     n'importe que la sourate N (débogage)
 *   --dry-run     affiche stats sans écrire en DB
 */

import { DatabaseSync, StatementSync } from 'node:sqlite'
import fs from 'fs'
import path from 'path'
import readline from 'readline'

// ── Configuration ─────────────────────────────────────────────────────────────
const DB_PATH  = path.join(process.cwd(), 'data', 'quran.db')
const QAC_PATH = path.join(process.cwd(), 'data', 'raw', 'quranic-corpus-morphology-0.4.txt')

const args      = process.argv.slice(2)
const DRY_RUN   = args.includes('--dry-run')
const ONLY_SURAH = (() => {
  const idx = args.indexOf('--surah')
  return idx !== -1 ? parseInt(args[idx + 1], 10) : null
})()

// ── Types ─────────────────────────────────────────────────────────────────────
interface QacLocation { surah: number; verse: number; word: number; segment: number }
interface ParsedMorpheme {
  location: QacLocation
  form:     string
  tag:      string
  features: Record<string, string>
}

// ── POS mapping QAC → libellé français ────────────────────────────────────────
const POS_FR: Record<string, string> = {
  V: 'Verbe', N: 'Nom', ADJ: 'Adjectif', PRON: 'Pronom', P: 'Préposition',
  CONJ: 'Conjonction', DET: 'Déterminant', REL: 'Relatif', T: 'Particule temporelle',
  INL: 'Lettres isolées', PN: 'Nom propre', ADV: 'Adverbe',
  INTG: 'Interrogatif', NEG: 'Négation', COND: 'Conditionnel',
  FUT: 'Futur', EXP: 'Exhortatif', VOC: 'Vocatif',
}

// ── Buckwalter → arabe ────────────────────────────────────────────────────────
const BW: Record<string, string> = {
  "'": 'أ', '|': 'آ', '&': 'ؤ', '<': 'إ', '}': 'ئ',
  A: 'ا', b: 'ب', p: 'ت', t: 'ث', v: 'ث', j: 'ج',
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

// ── Parsers ───────────────────────────────────────────────────────────────────
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

function parseLine(line: string): ParsedMorpheme | null {
  if (!line || line.startsWith('#')) return null
  const cols = line.split('\t')
  if (cols.length < 4) return null
  const location = parseLocation(cols[0])
  // Valider la location — ignorer les lignes non conformes (headers, métadonnées)
  if (!Number.isInteger(location.surah) || location.surah < 1 || location.surah > 114) return null
  if (!Number.isInteger(location.verse) || location.verse < 1) return null
  return {
    location,
    form:     cols[1].trim(),
    tag:      cols[2].trim(),
    features: parseFeatures(cols[3].trim()),
  }
}

function getPos(features: Record<string, string>, tag: string): string {
  if (features['POS']) return features['POS']
  if (tag.startsWith('PREFIX')) return 'PREFIX'
  if (tag.startsWith('SUFFIX')) return 'SUFFIX'
  return 'UNK'
}

function buildFeaturesJson(f: Record<string, string>): string {
  const keep = ['ASP', 'VOX', 'MOOD', 'SP', 'GEN', 'NUM', 'CASE', 'STATE', 'FORM']
  const out: Record<string, string> = {}
  for (const k of keep) if (f[k]) out[k] = f[k]
  return JSON.stringify(out)
}

// ── Noms des 114 sourates ─────────────────────────────────────────────────────
const SURAH_NAMES: Record<number, [string, string]> = {
  1:['الفاتحة','Al-Fatiha'],2:['البقرة','Al-Baqara'],3:['آل عمران','Al-Imran'],
  4:['النساء','An-Nisa'],5:['المائدة','Al-Maida'],6:['الأنعام','Al-Anam'],
  7:['الأعراف','Al-Araf'],8:['الأنفال','Al-Anfal'],9:['التوبة','At-Tawba'],
  10:['يونس','Yunus'],11:['هود','Hud'],12:['يوسف','Yusuf'],13:['الرعد','Ar-Rad'],
  14:['إبراهيم','Ibrahim'],15:['الحجر','Al-Hijr'],16:['النحل','An-Nahl'],
  17:['الإسراء','Al-Isra'],18:['الكهف','Al-Kahf'],19:['مريم','Maryam'],
  20:['طه','Ta-Ha'],21:['الأنبياء','Al-Anbiya'],22:['الحج','Al-Hajj'],
  23:['المؤمنون','Al-Muminun'],24:['النور','An-Nur'],25:['الفرقان','Al-Furqan'],
  26:['الشعراء','Ash-Shuara'],27:['النمل','An-Naml'],28:['القصص','Al-Qasas'],
  29:['العنكبوت','Al-Ankabut'],30:['الروم','Ar-Rum'],31:['لقمان','Luqman'],
  32:['السجدة','As-Sajda'],33:['الأحزاب','Al-Ahzab'],34:['سبأ','Saba'],
  35:['فاطر','Fatir'],36:['يس','Ya-Sin'],37:['الصافات','As-Saffat'],38:['ص','Sad'],
  39:['الزمر','Az-Zumar'],40:['غافر','Ghafir'],41:['فصلت','Fussilat'],
  42:['الشورى','Ash-Shura'],43:['الزخرف','Az-Zukhruf'],44:['الدخان','Ad-Dukhan'],
  45:['الجاثية','Al-Jathiya'],46:['الأحقاف','Al-Ahqaf'],47:['محمد','Muhammad'],
  48:['الفتح','Al-Fath'],49:['الحجرات','Al-Hujurat'],50:['ق','Qaf'],
  51:['الذاريات','Adh-Dhariyat'],52:['الطور','At-Tur'],53:['النجم','An-Najm'],
  54:['القمر','Al-Qamar'],55:['الرحمن','Ar-Rahman'],56:['الواقعة','Al-Waqia'],
  57:['الحديد','Al-Hadid'],58:['المجادلة','Al-Mujadila'],59:['الحشر','Al-Hashr'],
  60:['الممتحنة','Al-Mumtahana'],61:['الصف','As-Saf'],62:['الجمعة','Al-Jumua'],
  63:['المنافقون','Al-Munafiqun'],64:['التغابن','At-Taghabun'],65:['الطلاق','At-Talaq'],
  66:['التحريم','At-Tahrim'],67:['الملك','Al-Mulk'],68:['القلم','Al-Qalam'],
  69:['الحاقة','Al-Haqqa'],70:['المعارج','Al-Maarij'],71:['نوح','Nuh'],
  72:['الجن','Al-Jinn'],73:['المزمل','Al-Muzzammil'],74:['المدثر','Al-Muddaththir'],
  75:['القيامة','Al-Qiyama'],76:['الإنسان','Al-Insan'],77:['المرسلات','Al-Mursalat'],
  78:['النبأ','An-Naba'],79:['النازعات','An-Naziat'],80:['عبس','Abasa'],
  81:['التكوير','At-Takwir'],82:['الانفطار','Al-Infitar'],83:['المطففين','Al-Mutaffifin'],
  84:['الانشقاق','Al-Inshiqaq'],85:['البروج','Al-Buruj'],86:['الطارق','At-Tariq'],
  87:['الأعلى','Al-Ala'],88:['الغاشية','Al-Ghashiya'],89:['الفجر','Al-Fajr'],
  90:['البلد','Al-Balad'],91:['الشمس','Ash-Shams'],92:['الليل','Al-Layl'],
  93:['الضحى','Ad-Duha'],94:['الشرح','Ash-Sharh'],95:['التين','At-Tin'],
  96:['العلق','Al-Alaq'],97:['القدر','Al-Qadr'],98:['البينة','Al-Bayyina'],
  99:['الزلزلة','Az-Zalzala'],100:['العاديات','Al-Adiyat'],101:['القارعة','Al-Qaria'],
  102:['التكاثر','At-Takathur'],103:['العصر','Al-Asr'],104:['الهمزة','Al-Humaza'],
  105:['الفيل','Al-Fil'],106:['قريش','Quraysh'],107:['الماعون','Al-Maun'],
  108:['الكوثر','Al-Kawthar'],109:['الكافرون','Al-Kafirun'],110:['النصر','An-Nasr'],
  111:['المسد','Al-Masad'],112:['الإخلاص','Al-Ikhlas'],113:['الفلق','Al-Falaq'],
  114:['الناس','An-Nas'],
}
function getSurahName(n: number) {
  const e = SURAH_NAMES[n]
  return e ? { arabic: e[0], latin: e[1] } : { arabic: `سورة ${n}`, latin: `Surah ${n}` }
}

// ── Import principal ──────────────────────────────────────────────────────────
async function main() {
  if (!fs.existsSync(QAC_PATH)) {
    console.error(`\nFichier QAC introuvable : ${QAC_PATH}`)
    console.error('Téléchargez quranic-corpus-morphology-0.4.txt et placez-le dans data/raw/')
    process.exit(1)
  }
  if (!fs.existsSync(DB_PATH)) {
    console.error('Base de données introuvable. Lancez : npm run db:init')
    process.exit(1)
  }

  console.log(`Import QAC → ${DB_PATH}`)
  if (DRY_RUN)    console.log('  Mode DRY-RUN')
  if (ONLY_SURAH) console.log(`  Filtrage sourate ${ONLY_SURAH}`)

  const db = new DatabaseSync(DB_PATH)
  db.exec('PRAGMA foreign_keys = OFF')
  db.exec('PRAGMA journal_mode = WAL')
  db.exec('PRAGMA synchronous = OFF')   // Vitesse maximale pour l'import

  // ── Prepared statements ───────────────────────────────────────────────────
  const stmts = DRY_RUN ? null : {
    upsertSurah: db.prepare(
      `INSERT OR IGNORE INTO surahs(id, name_arabic, name_latin, verse_count) VALUES (?,?,?,0)`
    ),
    upsertVerse: db.prepare(
      `INSERT OR IGNORE INTO verses(surah_id, verse_number, text_arabic, text_uthmani) VALUES (?,?,'','')`
    ),
    getVerseId: db.prepare(
      `SELECT id FROM verses WHERE surah_id = ? AND verse_number = ?`
    ),
    upsertWord: db.prepare(
      `INSERT OR IGNORE INTO words(verse_id, position, form) VALUES (?,?,'')`
    ),
    getWordId: db.prepare(
      `SELECT id FROM words WHERE verse_id = ? AND position = ?`
    ),
    upsertRoot: db.prepare(
      `INSERT OR IGNORE INTO roots(root, root_ascii) VALUES (?,?)`
    ),
    getRootId: db.prepare(
      `SELECT id FROM roots WHERE root_ascii = ?`
    ),
    insertMorpheme: db.prepare(`
      INSERT OR IGNORE INTO morphemes(
        word_id, segment_index, qac_location, form, pos, pos_label_fr, features,
        root_id, lemma, lemma_ascii, verb_form,
        aspect, voice, mood, person, gender, number_gram, case_gram, state
      ) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)
    `),
  } as Record<string, StatementSync>

  // ── Lecture ligne par ligne ───────────────────────────────────────────────
  const rl = readline.createInterface({
    input: fs.createReadStream(QAC_PATH, { encoding: 'utf-8' }),
    crlfDelay: Infinity,
  })

  let lineCount      = 0
  let morphemeCount  = 0
  let rootsInserted  = 0
  let errorCount     = 0
  let currentSurah   = -1
  let batch: ParsedMorpheme[] = []

  // Flush d'un batch (une sourate) en transaction
  function flushBatch(morphemes: ParsedMorpheme[]) {
    if (!stmts || morphemes.length === 0) return
    db.exec('BEGIN')
    try {
      for (const m of morphemes) {
        const { location: loc, form, tag, features } = m
        const qacLoc = `${loc.surah}:${loc.verse}:${loc.word}:${loc.segment}`

        // 1. Sourate
        const sn = getSurahName(loc.surah)
        stmts.upsertSurah.run(loc.surah, sn.arabic, sn.latin)

        // 2. Verset
        stmts.upsertVerse.run(loc.surah, loc.verse)
        const verseRow = stmts.getVerseId.get(loc.surah, loc.verse) as { id: number } | undefined
        if (!verseRow) continue
        const verse_id = verseRow.id

        // 3. Mot
        stmts.upsertWord.run(verse_id, loc.word)
        const wordRow = stmts.getWordId.get(verse_id, loc.word) as { id: number } | undefined
        if (!wordRow) continue
        const word_id = wordRow.id

        // 4. Racine
        let root_id: number | null = null
        if (features['ROOT']) {
          const rootAscii  = features['ROOT']
          const rootArabic = bwToArabic(rootAscii)
          stmts.upsertRoot.run(rootArabic, rootAscii)
          const rootRow = stmts.getRootId.get(rootAscii) as { id: number } | undefined
          if (rootRow) { root_id = rootRow.id; rootsInserted++ }
        }

        // 5. Morphème
        const pos        = getPos(features, tag)
        const lemmaAscii = features['LEM'] ?? null
        const lemma      = lemmaAscii ? bwToArabic(lemmaAscii) : null

        stmts.insertMorpheme.run(
          word_id, loc.segment, qacLoc, form, pos,
          POS_FR[pos] ?? pos,
          buildFeaturesJson(features),
          root_id, lemma, lemmaAscii,
          features['FORM']  ?? null,
          features['ASP']   ?? null,
          features['VOX']   ?? null,
          features['MOOD']  ?? null,
          features['SP']    ?? null,
          features['GEN']   ?? null,
          features['NUM']   ?? null,
          features['CASE']  ?? null,
          features['STATE'] ?? null,
        )

        // 6. (root_occurrences peuplé en post-traitement via SQL — voir ci-dessous)

        morphemeCount++
      }
      db.exec('COMMIT')
    } catch (e) {
      db.exec('ROLLBACK')
      console.error(`\nErreur flush sourate ${morphemes[0]?.location.surah}:`, (e as Error).message)
      errorCount++
    }
  }

  for await (const line of rl) {
    lineCount++
    const parsed = parseLine(line)
    if (!parsed) continue
    if (ONLY_SURAH && parsed.location.surah !== ONLY_SURAH) continue

    if (parsed.location.surah !== currentSurah) {
      flushBatch(batch)
      batch = []
      currentSurah = parsed.location.surah
      process.stdout.write(`\r  Sourate ${currentSurah}/114 (${morphemeCount.toLocaleString()} morphèmes)…`)
    }
    batch.push(parsed)
  }

  // Dernier batch
  flushBatch(batch)

  // Post-traitement : root_occurrences et compteurs
  if (!DRY_RUN) {
    process.stdout.write('\n  Post-traitement : root_occurrences…')
    db.exec(`
      INSERT OR IGNORE INTO root_occurrences(root_id, morpheme_id, verse_id, surah_id)
      SELECT m.root_id, m.id, w.verse_id, v.surah_id
      FROM morphemes m
      JOIN words  w ON w.id = m.word_id
      JOIN verses v ON v.id = w.verse_id
      WHERE m.root_id IS NOT NULL
    `)
    process.stdout.write(' ✓\n  Post-traitement : verse_count…')
    db.exec(`
      UPDATE surahs SET verse_count = (
        SELECT COUNT(*) FROM verses WHERE surah_id = surahs.id
      )
    `)
    process.stdout.write(' ✓\n')
    db.exec('PRAGMA foreign_keys = ON')
  }

  db.close()

  console.log(`\n\nImport terminé :`)
  console.log(`  Lignes lues     : ${lineCount.toLocaleString()}`)
  console.log(`  Morphèmes       : ${morphemeCount.toLocaleString()}`)
  console.log(`  Racines         : ${rootsInserted.toLocaleString()} (avec doublons)`)
  console.log(`  Erreurs         : ${errorCount}`)
  console.log(`\nBase : ${DB_PATH}`)
}

main().catch(e => { console.error('Erreur fatale:', e); process.exit(1) })
