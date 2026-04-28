import { NextResponse } from 'next/server'
import { db } from '@/lib/db'
import type { Verse } from '@/lib/db'

interface Relation {
  target_id:     number
  relation_type: string
  weight:        number
  note:          string | null
}

export async function GET(
  _req: Request,
  { params }: { params: { verseId: string } },
) {
  const verseId = Number(params.verseId)
  if (isNaN(verseId)) {
    return NextResponse.json({ error: 'Invalid verseId' }, { status: 400 })
  }

  const relations = db
    .prepare(`SELECT target_id, relation_type, weight, note
              FROM verse_relations WHERE source_id = ? ORDER BY weight DESC`)
    .all(verseId) as Relation[]

  const enriched = relations.map(rel => {
    const rawVerse = db
      .prepare(`SELECT v.*, s.name_latin AS surah_latin
                FROM verses v JOIN surahs s ON s.id = v.surah_id
                WHERE v.id = ?`)
      .get(rel.target_id) as (Verse & { surah_latin: string }) | undefined
    const target_verse = rawVerse ? { ...rawVerse } : undefined
    return { ...rel, target_verse }
  })

  return NextResponse.json(enriched)
}
