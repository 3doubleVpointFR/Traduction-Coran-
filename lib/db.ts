/**
 * lib/db.ts
 * Singleton node:sqlite (module natif Node.js 22+) pour Next.js App Router.
 * Utiliser UNIQUEMENT côté serveur (Server Components, Route Handlers).
 */

import { DatabaseSync, StatementSync } from 'node:sqlite'
import path from 'path'

const DB_PATH = path.join(process.cwd(), 'data', 'quran.db')

declare global {
  // eslint-disable-next-line no-var
  var __db: DatabaseSync | undefined
}

function openDb(): DatabaseSync {
  const db = new DatabaseSync(DB_PATH)
  db.exec('PRAGMA journal_mode = WAL')
  db.exec('PRAGMA foreign_keys = ON')
  db.exec('PRAGMA synchronous = NORMAL')
  return db
}

export const db: DatabaseSync =
  process.env.NODE_ENV === 'development'
    ? (globalThis.__db ??= openDb())
    : openDb()

// ── Helper : cache des statements préparés ──────────────────────────────────
const _cache = new Map<string, StatementSync>()
function q(sql: string): StatementSync {
  let s = _cache.get(sql)
  if (!s) { s = db.prepare(sql); _cache.set(sql, s) }
  return s
}

// ── Types TS alignés sur le schéma ──────────────────────────────────────────

export interface Surah {
  id:           number
  name_arabic:  string
  name_latin:   string
  name_french:  string | null
  revelation:   'mecquoise' | 'médinoise' | null
  order_rev:    number | null
  verse_count:  number
  juz_start:    number | null
  page_mushaf:  number | null
}

export interface Verse {
  id:             number
  surah_id:       number
  verse_number:   number
  text_arabic:    string
  text_uthmani:   string | null
  text_simple:    string | null
  translation_fr: string | null
  translation_en: string | null
  juz:            number | null
  hizb:           number | null
  page_mushaf:    number | null
  sajda:          0 | 1
}

export interface Word {
  id:               number
  verse_id:         number
  position:         number
  form:             string
  form_simple:      string | null
  transliteration:  string | null
  translation_fr:   string | null
  translation_en:   string | null
}

export interface Root {
  id:               number
  root:             string
  root_ascii:       string | null
  meaning_fr:       string | null
  meaning_en:       string | null
  occurrence_count: number
}

export interface Morpheme {
  id:             number
  word_id:        number
  segment_index:  number
  qac_location:   string | null
  form:           string
  pos:            string
  pos_label_fr:   string | null
  features:       string | null
  root_id:        number | null
  lemma:          string | null
  lemma_ascii:    string | null
  verb_form:      string | null
  aspect:         string | null
  voice:          string | null
  mood:           string | null
  person:         string | null
  gender:         string | null
  number_gram:    string | null
  case_gram:      string | null
  state:          string | null
}

// ── Requêtes prêtes à l'emploi ──────────────────────────────────────────────

export const queries = {
  allSurahs: () =>
    q('SELECT * FROM surahs ORDER BY id').all() as Surah[],

  surahById: (id: number) =>
    q('SELECT * FROM surahs WHERE id = ?').get(id) as Surah | undefined,

  versesBySurah: (surahId: number) =>
    q('SELECT * FROM verses WHERE surah_id = ? ORDER BY verse_number').all(surahId) as Verse[],

  verseByRef: (surahId: number, verseNum: number) =>
    q('SELECT * FROM verses WHERE surah_id = ? AND verse_number = ?').get(surahId, verseNum) as Verse | undefined,

  wordsByVerse: (verseId: number) =>
    q('SELECT * FROM words WHERE verse_id = ? ORDER BY position').all(verseId) as Word[],

  wordsBySurah: (surahId: number) =>
    q(`SELECT w.* FROM words w
       JOIN verses v ON v.id = w.verse_id
       WHERE v.surah_id = ?
       ORDER BY v.verse_number, w.position`).all(surahId) as (Word & { verse_id: number })[],

  morphemesByWord: (wordId: number) =>
    q('SELECT * FROM morphemes WHERE word_id = ? ORDER BY segment_index').all(wordId) as Morpheme[],

  morphemesWithRootByWord: (wordId: number) =>
    q(`SELECT m.*, r.root AS root_arabic, r.root_ascii, r.meaning_fr AS root_meaning_fr,
              r.occurrence_count AS root_occurrences
       FROM morphemes m LEFT JOIN roots r ON r.id = m.root_id
       WHERE m.word_id = ? ORDER BY m.segment_index`).all(wordId) as (Morpheme & {
      root_arabic: string | null; root_ascii: string | null
      root_meaning_fr: string | null; root_occurrences: number | null
    })[],

  rootByAscii: (ascii: string) =>
    q('SELECT * FROM roots WHERE root_ascii = ?').get(ascii) as Root | undefined,

  searchRoots: (pattern: string) =>
    q(`SELECT * FROM roots WHERE root LIKE ? OR root_ascii LIKE ?
       ORDER BY occurrence_count DESC LIMIT 20`).all(pattern, pattern) as Root[],

  rootOccurrences: (rootId: number) =>
    q(`SELECT DISTINCT ro.surah_id, ro.verse_id, v.verse_number
       FROM root_occurrences ro JOIN verses v ON v.id = ro.verse_id
       WHERE ro.root_id = ? ORDER BY ro.surah_id, v.verse_number`).all(rootId) as {
      surah_id: number; verse_id: number; verse_number: number
    }[],

  relatedVerses: (verseId: number) =>
    q(`SELECT target_id, relation_type, weight, note
       FROM verse_relations WHERE source_id = ? ORDER BY weight DESC`).all(verseId) as {
      target_id: number; relation_type: string; weight: number; note: string | null
    }[],

  searchTranslation: (pattern: string) =>
    q(`SELECT v.*, s.name_latin AS surah_latin
       FROM verses v JOIN surahs s ON s.id = v.surah_id
       WHERE v.translation_fr LIKE ? OR v.translation_en LIKE ?
       ORDER BY v.surah_id, v.verse_number LIMIT 50`).all(pattern, pattern) as (Verse & { surah_latin: string })[],
}
