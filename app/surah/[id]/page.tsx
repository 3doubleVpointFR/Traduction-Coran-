/**
 * app/surah/[id]/page.tsx
 * Page d'analyse d'une sourate complète.
 * Server Component — lit la DB directement via node:sqlite.
 */

import { notFound } from 'next/navigation'
import { db } from '@/lib/db'
import type { Surah, Verse, Word } from '@/lib/db'
import { SurahView } from '@/components/SurahView'

interface PageProps {
  params: { id: string }
}

export async function generateMetadata({ params }: PageProps) {
  const surah = db.prepare('SELECT * FROM surahs WHERE id = ?').get(Number(params.id)) as Surah | undefined
  if (!surah) return { title: 'Sourate introuvable' }
  return {
    title: `${surah.name_latin} (${surah.name_arabic}) — Analyse Coranique`,
  }
}

export default function SurahPage({ params }: PageProps) {
  const surahId = Number(params.id)
  if (isNaN(surahId) || surahId < 1 || surahId > 114) notFound()

  const surah = db.prepare('SELECT * FROM surahs WHERE id = ?').get(surahId) as Surah | undefined

  if (!surah) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-16 text-center">
        <p className="text-gray-500 mb-4">Base de données non initialisée.</p>
        <code className="text-sm bg-gray-100 px-3 py-1 rounded">
          npm run db:init &amp;&amp; npm run db:import
        </code>
      </div>
    )
  }

  const verses = db
    .prepare('SELECT * FROM verses WHERE surah_id = ? ORDER BY verse_number')
    .all(surahId) as Verse[]

  const wordsRows = db
    .prepare(`
      SELECT w.* FROM words w
      JOIN verses v ON v.id = w.verse_id
      WHERE v.surah_id = ?
      ORDER BY v.verse_number, w.position
    `)
    .all(surahId) as (Word & { verse_id: number })[]

  const wordsByVerse = new Map<number, Word[]>()
  for (const w of wordsRows) {
    const list = wordsByVerse.get(w.verse_id) ?? []
    list.push(w)
    wordsByVerse.set(w.verse_id, list)
  }

  // node:sqlite retourne des objets à prototype null — les convertir en plain objects
  // avant de les passer au Client Component SurahView
  const plain = <T,>(x: T): T => JSON.parse(JSON.stringify(x))

  return (
    <SurahView
      surah={plain(surah)}
      verses={plain(verses)}
      wordsByVerse={plain(Object.fromEntries(wordsByVerse))}
    />
  )
}
