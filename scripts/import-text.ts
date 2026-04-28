/**
 * scripts/import-text.ts
 * Importe le texte arabe Uthmani depuis tanzil.net (quran-uthmani.txt)
 * Format Tanzil : lignes "surah|verse|texte_arabe" (# = commentaire)
 *
 * Peuple :
 *   - verses.text_uthmani  (texte complet avec voyellation Uthmani)
 *   - verses.text_simple   (même texte sans diacritiques)
 *   - words.form           (token arabe par position dans le verset)
 *
 * Usage : npm run db:text
 *   → place quran-uthmani.txt dans data/raw/ avant de lancer
 */

import { readFileSync } from 'fs'
import { join } from 'path'
import { DatabaseSync } from 'node:sqlite'

const RAW_FILE = join(process.cwd(), 'data', 'raw', 'quran-uthmani.txt')
const DB_FILE  = join(process.cwd(), 'data', 'quran.db')

// ──────────────────────────────────────────────
// Supprime les diacritiques arabes (harakât, etc.)
// ──────────────────────────────────────────────
function stripDiacritics(text: string): string {
  return text
    // Harakât standards : fatha, damma, kasra, sukun, shadda, tanwin…
    .replace(/[\u064B-\u065F]/g, '')
    // Superscript Alef
    .replace(/\u0670/g, '')
    // Petits signes hauts
    .replace(/[\u06D6-\u06DC]/g, '')
    .replace(/[\u06DF-\u06E4]/g, '')
    .replace(/[\u06E7-\u06E8]/g, '')
    .replace(/[\u06EA-\u06ED]/g, '')
}

// ──────────────────────────────────────────────
// Main
// ──────────────────────────────────────────────
const db = new DatabaseSync(DB_FILE)

const updateVerse = db.prepare(`
  UPDATE verses
  SET text_uthmani = ?, text_simple = ?
  WHERE surah_id = ? AND verse_number = ?
`)

const updateWordForm = db.prepare(`
  UPDATE words
  SET form = ?, form_simple = ?
  WHERE verse_id = ? AND position = ?
`)

const getVerseId = db.prepare(`
  SELECT id FROM verses WHERE surah_id = ? AND verse_number = ?
`)

const raw = readFileSync(RAW_FILE, 'utf-8')
const lines = raw.split('\n')

let verseCount = 0
let wordCount  = 0
let skipped    = 0

db.exec('BEGIN')

try {
  for (const rawLine of lines) {
    const line = rawLine.trim()
    if (!line || line.startsWith('#')) continue

    const parts = line.split('|')
    if (parts.length < 3) { skipped++; continue }

    const surah = parseInt(parts[0], 10)
    const verse = parseInt(parts[1], 10)
    const text  = parts.slice(2).join('|').trim()   // au cas où | serait dans le texte

    if (isNaN(surah) || isNaN(verse) || !text) { skipped++; continue }

    const simple = stripDiacritics(text)

    updateVerse.run(text, simple, surah, verse)
    verseCount++

    // Récupérer l'id du verset pour mettre à jour les mots
    const row = getVerseId.get(surah, verse) as { id: number } | undefined
    if (!row) continue

    const verseId = row.id
    // Tanzil sépare les tokens par espace simple — correspond aux positions QAC
    const tokens = text.split(' ').filter(t => t.length > 0)

    for (let i = 0; i < tokens.length; i++) {
      const position  = i + 1       // QAC est 1-based
      const form      = tokens[i]
      const formSimple = stripDiacritics(form)
      const changed = updateWordForm.run(form, formSimple, verseId, position)
      if ((changed as any).changes > 0) wordCount++
    }
  }

  db.exec('COMMIT')
  console.log(`✓ Texte arabe importé`)
  console.log(`  ${verseCount} versets mis à jour`)
  console.log(`  ${wordCount} mots mis à jour`)
  if (skipped) console.log(`  ${skipped} lignes ignorées`)

  // Vérification rapide : S2 V1-5
  const check = db.prepare(`
    SELECT v.surah_id, v.verse_number, v.text_uthmani,
           GROUP_CONCAT(w.form, ' ') AS words_form
    FROM verses v
    LEFT JOIN words w ON w.verse_id = v.id
    WHERE v.surah_id = 2 AND v.verse_number <= 5
    GROUP BY v.id
    ORDER BY v.verse_number
  `).all()

  console.log('\n── Sourate 2, versets 1-5 (texte Uthmani) ──')
  for (const row of check as any[]) {
    const r = { ...row }
    console.log(`  ${r.surah_id}:${r.verse_number} | ${r.text_uthmani ?? '(vide)'}`)
  }

} catch (err) {
  db.exec('ROLLBACK')
  console.error('Erreur — rollback effectué')
  throw err
}
