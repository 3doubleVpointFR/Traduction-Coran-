/**
 * scripts/generate-semantics.ts
 * Génère automatiquement l'analyse sémantique de chaque racine prioritaire
 * en appelant l'API Anthropic (claude-sonnet-4-5).
 *
 * Sauvegarde les résultats dans la table `semantics` de la DB.
 *
 * Usage :
 *   npm run db:semantics
 *   ANTHROPIC_API_KEY=sk-ant-... npm run db:semantics
 *
 * Prérequis :
 *   npm install @anthropic-ai/sdk
 */

import { DatabaseSync } from 'node:sqlite'
import Anthropic from '@anthropic-ai/sdk'
import { join } from 'path'

const DB_FILE = join(process.cwd(), 'data', 'quran.db')

// 11 racines prioritaires (Buckwalter root_ascii)
const PRIORITY_ROOTS = ['ktb', 'ryb', 'hdy', 'wqy', 'Amn', 'gyb', 'Slw', 'rzq', 'nfq', 'xlf', 'rbb']

// ── Prompt système ─────────────────────────────────────────────────────────────

const SYSTEM_PROMPT = `Tu es un expert en linguistique arabe coranique et en exégèse islamique. \
Pour chaque racine arabe donnée, tu analyses ses sens dans le contexte coranique \
et produis une analyse sémantique structurée.

Tu dois retourner UNIQUEMENT un objet JSON valide (sans markdown, sans backticks) \
avec cette structure exacte :

{
  "root_phon": "phonétique de la racine (ex: k-t-b)",
  "root_meaning": "sens fondamental de la racine, formulation verbale d'action (15 mots max)",
  "retenu": "sens retenu principal dans le Coran (5 mots max)",
  "meanings": [
    {
      "s": "sens précis du mot",
      "st": "ok|maybe|no",
      "ref": "X:Y",
      "phon": "phonétique du verset exemple en translittération française",
      "tr": "traduction française du verset",
      "ctx": "explication du contexte et pourquoi ce sens s'applique ou non"
    }
  ],
  "occs": [
    {
      "before": {"ref": "X:Y", "ar": "texte arabe", "phon": "phonétique", "tr": "traduction française"},
      "main":   {"ref": "X:Y", "ar": "texte arabe", "phon": "phonétique", "tr": "traduction française"},
      "after":  {"ref": "X:Y", "ar": "texte arabe", "phon": "phonétique", "tr": "traduction française"}
    }
  ],
  "daily": [
    {"ar": "expression arabe courante", "phon": "phonétique", "fr": "traduction française"}
  ],
  "coh": "note de cohérence sémantique et implications théologiques (2-3 phrases)"
}

Règles impératives :
- "st" : "ok" = sens coranique confirmé et central, "maybe" = sens possible mais secondaire, "no" = sens à éviter car réducteur ou inexact
- Fournis 4-7 meanings couvrant la gamme sémantique, 3-5 occs (triades avant/principal/après en contexte narratif), 2-3 daily (expressions de la vie courante ou liturgique)
- Les phonétiques suivent la convention française : kh, dj, ch, gh, â, î, û, 'ayn = '
- Le sens "retenu" doit être novateur par rapport aux traductions classiques, en révélant la dimension d'action ou de processus de la racine
- Appuie-toi sur des références coraniques réelles et précises`

// ── Types ──────────────────────────────────────────────────────────────────────

interface RootRow {
  id: number
  root: string
  root_ascii: string
  meaning_fr: string | null
  occurrence_count: number
}

// ── Fonction principale ────────────────────────────────────────────────────────

async function generateSemantics(
  root: RootRow,
  client: Anthropic,
): Promise<object> {
  const prompt = `Analyse la racine arabe ${root.root} (translitération Buckwalter : ${root.root_ascii}).
Cette racine apparaît ${root.occurrence_count} fois dans le Coran.
Sens actuellement noté dans la base : ${root.meaning_fr ?? '(non renseigné)'}.

Produis l'analyse sémantique complète au format JSON demandé.`

  const response = await client.messages.create({
    model: 'claude-sonnet-4-5',
    max_tokens: 4096,
    system: SYSTEM_PROMPT,
    messages: [{ role: 'user', content: prompt }],
  })

  const textBlock = response.content.find(b => b.type === 'text')
  if (!textBlock || textBlock.type !== 'text') {
    throw new Error('Réponse sans bloc texte')
  }

  const raw = textBlock.text.trim()
  return JSON.parse(raw)
}

// ── Point d'entrée ─────────────────────────────────────────────────────────────

async function main() {
  const db = new DatabaseSync(DB_FILE)

  // Créer la table semantics si elle n'existe pas
  db.exec(`
    CREATE TABLE IF NOT EXISTS semantics (
      id           INTEGER PRIMARY KEY AUTOINCREMENT,
      root_id      INTEGER NOT NULL UNIQUE,
      data         TEXT    NOT NULL,
      generated_at TEXT    NOT NULL,
      FOREIGN KEY (root_id) REFERENCES roots(id)
    )
  `)

  // Récupérer les racines prioritaires
  const placeholders = PRIORITY_ROOTS.map(() => '?').join(',')
  const rows = db.prepare(`
    SELECT id, root, root_ascii, meaning_fr, occurrence_count
    FROM roots
    WHERE root_ascii IN (${placeholders})
    ORDER BY occurrence_count DESC
  `).all(...PRIORITY_ROOTS) as RootRow[]

  const roots = rows.map(r => ({ ...r }))

  console.log(`Racines trouvées en DB : ${roots.length} / ${PRIORITY_ROOTS.length}`)
  if (roots.length < PRIORITY_ROOTS.length) {
    const found = new Set(roots.map(r => r.root_ascii))
    const missing = PRIORITY_ROOTS.filter(r => !found.has(r))
    console.warn(`Racines manquantes : ${missing.join(', ')}`)
  }

  const client = new Anthropic()

  const insertStmt = db.prepare(`
    INSERT OR REPLACE INTO semantics (root_id, data, generated_at)
    VALUES (?, ?, ?)
  `)

  let ktbResult: object | null = null

  for (const root of roots) {
    console.log(`\n[${roots.indexOf(root) + 1}/${roots.length}] ${root.root} (${root.root_ascii}, ${root.occurrence_count} occ.)`)

    try {
      const data = await generateSemantics(root, client)
      const json = JSON.stringify(data)
      insertStmt.run(root.id, json, new Date().toISOString())
      console.log(`  ✓ Sauvegardé (${json.length} chars)`)

      if (root.root_ascii === 'ktb') ktbResult = data
    } catch (err) {
      console.error(`  ✗ Erreur :`, err instanceof Error ? err.message : err)
    }
  }

  console.log('\n── Rapport ────────────────────────────────────────────────────')
  const count = db.prepare('SELECT COUNT(*) as n FROM semantics').get() as { n: number }
  console.log(`Total en base : ${count.n} analyses sémantiques`)

  if (ktbResult) {
    console.log('\n── Résultat ktb (k-t-b) ──────────────────────────────────────')
    console.log(JSON.stringify(ktbResult, null, 2))
  }

  console.log('\nTerminé.')
}

main().catch(err => {
  console.error('Erreur fatale :', err)
  process.exit(1)
})
