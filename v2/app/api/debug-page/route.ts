import { NextRequest, NextResponse } from 'next/server'
import { getSupabaseAdmin } from '@/lib/supabase'

export const dynamic = 'force-dynamic'

export async function GET(req: NextRequest) {
  const surahId = parseInt(req.nextUrl.searchParams.get('surah') ?? '2')
  const db = getSupabaseAdmin()

  // Same logic as page.tsx
  const { data: verses } = await db
    .from('verses')
    .select('id, verse_num')
    .eq('surah_id', surahId)
    .order('verse_num')

  const verseIds = verses?.map(v => v.id) ?? []

  // Chunked verse_analyses query (same as page)
  const analysesByVerse: Record<number, { verse_id: number; id: number }> = {}
  for (let i = 0; i < verseIds.length; i += 100) {
    const chunk = verseIds.slice(i, i + 100)
    const { data: analyses, error } = await db
      .from('verse_analyses')
      .select('id, verse_id')
      .in('verse_id', chunk)

    if (error) {
      return NextResponse.json({ error: error.message, chunk_start: i })
    }

    for (const a of analyses ?? []) {
      analysesByVerse[a.verse_id] = a
    }
  }

  return NextResponse.json({
    totalVerses: verseIds.length,
    firstVerseIds: verseIds.slice(0, 5),
    analysesFound: Object.keys(analysesByVerse).length,
    analysesKeys: Object.keys(analysesByVerse),
    verse9: analysesByVerse[9] ?? 'not found',
  })
}
