import { NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function GET(
  _req: Request,
  { params }: { params: { rootId: string } },
) {
  const rootId = Number(params.rootId)
  if (isNaN(rootId)) {
    return NextResponse.json({ error: 'Invalid rootId' }, { status: 400 })
  }

  // Racine principale
  const rootRaw = db
    .prepare('SELECT * FROM roots WHERE id = ?')
    .get(rootId) as { id: number; root: string; root_ascii: string | null; meaning_fr: string | null; occurrence_count: number } | undefined

  if (!rootRaw) {
    return NextResponse.json({ error: 'Root not found' }, { status: 404 })
  }

  const root = { ...rootRaw }

  // 10 premières occurrences avec contexte verset
  const rows = db.prepare(`
    SELECT
      ro.verse_id,
      v.surah_id,
      v.verse_number,
      v.text_uthmani,
      v.translation_fr,
      s.name_latin  AS surah_latin,
      s.name_arabic AS surah_arabic,
      m.form        AS morpheme_form,
      m.pos,
      m.lemma,
      w.position    AS word_position
    FROM root_occurrences ro
    JOIN morphemes m ON m.id = ro.morpheme_id
    JOIN words     w ON w.id = m.word_id
    JOIN verses    v ON v.id = ro.verse_id
    JOIN surahs    s ON s.id = ro.surah_id
    WHERE ro.root_id = ?
    ORDER BY ro.surah_id, v.verse_number
    LIMIT 10
  `).all(rootId) as {
    verse_id: number; surah_id: number; verse_number: number
    text_uthmani: string | null; translation_fr: string | null
    surah_latin: string; surah_arabic: string
    morpheme_form: string; pos: string; lemma: string | null
    word_position: number
  }[]

  const occurrences = rows.map(r => ({ ...r }))

  return NextResponse.json({ root, occurrences })
}
