import { NextRequest, NextResponse } from 'next/server'
import { getSupabaseAdmin } from '@/lib/supabase'

export const dynamic = 'force-dynamic'

export async function GET(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  const surahId = parseInt(params.id)
  if (isNaN(surahId) || surahId < 1 || surahId > 114) {
    return NextResponse.json({ error: 'Invalid surah ID' }, { status: 400 })
  }

  const db = getSupabaseAdmin()

  const { data: surah, error: surahErr } = await db
    .from('surahs')
    .select('*')
    .eq('id', surahId)
    .single()

  if (surahErr || !surah) {
    return NextResponse.json({ error: 'Surah not found' }, { status: 404 })
  }

  const { data: verses } = await db
    .from('verses')
    .select('*')
    .eq('surah_id', surahId)
    .order('verse_num')

  // Check which verses have analyses + which are verified
  const verseIds = verses?.map(v => v.id) ?? []
  const { data: analyses } = verseIds.length
    ? await db
        .from('verse_analyses')
        .select('verse_id, verification_done')
        .in('verse_id', verseIds)
    : { data: [] }

  const analyzedVerseIds = new Set(analyses?.map(a => a.verse_id) ?? [])
  const verifiedVerseIds = new Set(
    (analyses ?? []).filter((a: { verification_done?: boolean }) => a.verification_done === true).map(a => a.verse_id)
  )

  const enrichedVerses = verses?.map(v => ({
    ...v,
    has_analysis: analyzedVerseIds.has(v.id),
    verification_done: verifiedVerseIds.has(v.id),
  }))

  return NextResponse.json({ surah, verses: enrichedVerses })
}
