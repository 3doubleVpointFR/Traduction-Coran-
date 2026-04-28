import { NextResponse } from 'next/server'
import { db } from '@/lib/db'
import type { Morpheme, Root } from '@/lib/db'

export async function GET(
  _req: Request,
  { params }: { params: { wordId: string } },
) {
  const wordId = Number(params.wordId)
  if (isNaN(wordId)) {
    return NextResponse.json({ error: 'Invalid wordId' }, { status: 400 })
  }

  const morphemes = db
    .prepare('SELECT * FROM morphemes WHERE word_id = ? ORDER BY segment_index')
    .all(wordId) as Morpheme[]

  const withRoot = morphemes.map(m => {
    const base = { ...m }  // spread pour casser le null prototype
    if (!m.root_id) return { ...base, root: null }
    const rootRaw = db.prepare('SELECT * FROM roots WHERE id = ?').get(m.root_id) as Root | undefined
    const root = rootRaw ? { ...rootRaw } : null
    return { ...base, root }
  })

  return NextResponse.json(withRoot)
}
