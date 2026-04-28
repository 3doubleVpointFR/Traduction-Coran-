/**
 * scripts/init-db.ts
 * Initialise (ou réinitialise) la base de données SQLite via node:sqlite.
 *
 * Usage :
 *   npx tsx scripts/init-db.ts           — crée si inexistante
 *   npx tsx scripts/init-db.ts --reset   — supprime et recrée
 */

import { DatabaseSync } from 'node:sqlite'
import fs from 'fs'
import path from 'path'

const DB_PATH     = path.join(process.cwd(), 'data', 'quran.db')
const SCHEMA_PATH = path.join(process.cwd(), 'data', 'schema.sql')

const reset = process.argv.includes('--reset')

if (reset && fs.existsSync(DB_PATH)) {
  fs.unlinkSync(DB_PATH)
  console.log('Base de données supprimée.')
}

const db = new DatabaseSync(DB_PATH)

db.exec('PRAGMA journal_mode = WAL')
db.exec('PRAGMA foreign_keys = OFF')  // OFF durant la création du schéma

const schema = fs.readFileSync(SCHEMA_PATH, 'utf-8')

// Découpe en instructions individuelles (gère les triggers multi-lignes)
// On sépare sur ";" uniquement hors des blocs BEGIN...END
const statements: string[] = []
let buffer = ''
let depth = 0

for (const line of schema.split('\n')) {
  const trimmed = line.trim()
  if (!trimmed || trimmed.startsWith('--')) continue

  buffer += line + '\n'

  // Détecter début/fin de bloc BEGIN...END (pour les triggers)
  if (/\bBEGIN\b/i.test(trimmed)) depth++
  if (/\bEND\b/i.test(trimmed))   depth--

  if (depth === 0 && trimmed.endsWith(';')) {
    const stmt = buffer.trim()
    if (stmt) statements.push(stmt)
    buffer = ''
  }
}

let ok = 0
let errors = 0

for (const stmt of statements) {
  try {
    db.exec(stmt)
    ok++
  } catch (e) {
    const msg = (e as Error).message
    // Ignorer "already exists" si --reset n'est pas passé
    if (!msg.includes('already exists')) {
      console.error('Erreur SQL :', msg)
      console.error('  →', stmt.slice(0, 100))
      errors++
    }
  }
}

db.exec('PRAGMA foreign_keys = ON')
db.close()

console.log(`Schéma initialisé : ${ok} instructions, ${errors} erreur(s).`)
console.log(`Base de données   : ${DB_PATH}`)
