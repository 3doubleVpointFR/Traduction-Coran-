/**
 * scripts/import-translations.ts
 * Importe la traduction française Hamidullah depuis tanzil.net (fr.hamidullah.txt)
 * Format Tanzil : lignes "surah|verse|texte_traduit" (# = commentaire)
 *
 * Peuple :
 *   - verses.translation_fr
 *
 * Usage : npm run db:translations
 *   → place fr.hamidullah.txt dans data/raw/ avant de lancer
 */

import { readFileSync } from 'fs'
import { join } from 'path'
import { DatabaseSync } from 'node:sqlite'

const RAW_FILE = join(process.cwd(), 'data', 'raw', 'fr.hamidullah.txt')
const DB_FILE  = join(process.cwd(), 'data', 'quran.db')

const db = new DatabaseSync(DB_FILE)

const updateTranslation = db.prepare(`
  UPDATE verses
  SET translation_fr = ?
  WHERE surah_id = ? AND verse_number = ?
`)

const raw = readFileSync(RAW_FILE, 'utf-8')
const lines = raw.split('\n')

let count   = 0
let skipped = 0

db.exec('BEGIN')

try {
  for (const rawLine of lines) {
    const line = rawLine.trim()
    if (!line || line.startsWith('#')) continue

    const parts = line.split('|')
    if (parts.length < 3) { skipped++; continue }

    const surah       = parseInt(parts[0], 10)
    const verse       = parseInt(parts[1], 10)
    const translation = parts.slice(2).join('|').trim()

    if (isNaN(surah) || isNaN(verse) || !translation) { skipped++; continue }

    const changed = updateTranslation.run(translation, surah, verse)
    if ((changed as any).changes > 0) count++
    else skipped++
  }

  db.exec('COMMIT')
  console.log(`✓ Traduction française importée`)
  console.log(`  ${count} versets mis à jour`)
  if (skipped) console.log(`  ${skipped} lignes ignorées (versets non trouvés ou mal formés)`)

  // Vérification rapide : S2 V1-5
  const check = db.prepare(`
    SELECT surah_id, verse_number, text_uthmani, translation_fr
    FROM verses
    WHERE surah_id = 2 AND verse_number <= 5
    ORDER BY verse_number
  `).all()

  console.log('\n── Sourate 2, versets 1-5 ──')
  for (const row of check as any[]) {
    const r = { ...row }
    console.log(`\n  ${r.surah_id}:${r.verse_number}`)
    console.log(`  AR : ${r.text_uthmani ?? '(vide — lancez db:text d\'abord)'}`)
    console.log(`  FR : ${r.translation_fr ?? '(vide)'}`)
  }

} catch (err) {
  db.exec('ROLLBACK')
  console.error('Erreur — rollback effectué')
  throw err
}
