import { NextRequest, NextResponse } from 'next/server'
import { getSupabaseAdmin } from '@/lib/supabase'
import { cleanArabicText } from '@/lib/utils'

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

  const { data: verse } = await db
    .from('verses')
    .select('id, surah_id, verse_num, arabic_text')
    .eq('surah_id', surahId)
    .eq('verse_num', verseNum)
    .single()

  if (!verse) {
    return NextResponse.json({ error: 'Verse not found' }, { status: 404 })
  }

  // Check if this verse has been analyzed (has segments with phon/fr)
  const { data: analysis } = await db
    .from('verse_analyses')
    .select('segments, full_translation')
    .eq('verse_id', verse.id)
    .single()

  let phon = ''
  let fr = ''

  if (analysis?.segments && Array.isArray(analysis.segments)) {
    // Build phonetic and french from analyzed segments
    phon = analysis.segments.map((s: { phon?: string }) => s.phon || '').filter(Boolean).join(' ')
    fr = analysis.full_translation || ''
  }

  return NextResponse.json({
    ref: `${surahId}:${verseNum}`,
    arabic: cleanArabicText(verse.arabic_text ?? ''),
    phon: phon || undefined,
    fr: fr || undefined,
  })
}
