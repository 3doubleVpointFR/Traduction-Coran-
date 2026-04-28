import { NextRequest, NextResponse } from 'next/server'
import { getSupabaseAdmin } from '@/lib/supabase'

export const dynamic = 'force-dynamic'

export async function GET(
  _req: NextRequest,
  { params }: { params: { surah: string; verse: string } }
) {
  const surahId = parseInt(params.surah)
  const verseNum = parseInt(params.verse)

  if (isNaN(surahId) || isNaN(verseNum)) {
    return NextResponse.json({ error: 'Invalid parameters' }, { status: 400 })
  }

  const db = getSupabaseAdmin()

  // Get verse
  const { data: verse, error: verseErr } = await db
    .from('verses')
    .select('*')
    .eq('surah_id', surahId)
    .eq('verse_num', verseNum)
    .single()

  if (verseErr || !verse) {
    return NextResponse.json({ error: 'Verse not found' }, { status: 404 })
  }

  // Get words for this verse
  const { data: words } = await db
    .from('words')
    .select('*')
    .eq('verse_id', verse.id)
    .order('position')

  // Get verse analysis if available
  const { data: analysis } = await db
    .from('verse_analyses')
    .select('*')
    .eq('verse_id', verse.id)
    .single()

  return NextResponse.json({
    verse,
    words: words ?? [],
    analysis: analysis ?? null,
  })
}
