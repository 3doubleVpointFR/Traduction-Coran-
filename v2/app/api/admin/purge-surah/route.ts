import { NextRequest, NextResponse } from 'next/server'
import { getSupabaseAdmin } from '@/lib/supabase'

export const dynamic = 'force-dynamic'

export async function POST(req: NextRequest) {
  const { surah_id } = await req.json()
  if (!surah_id) return NextResponse.json({ error: 'Missing surah_id' }, { status: 400 })

  const db = getSupabaseAdmin()
  const results: string[] = []

  // Get all verse IDs for this surah
  const { data: verses } = await db
    .from('verses')
    .select('id, verse_num')
    .eq('surah_id', surah_id)
    .order('verse_num')

  if (!verses || verses.length === 0) {
    return NextResponse.json({ error: 'No verses found' }, { status: 404 })
  }

  const verseIds = verses.map(v => v.id)

  // 1. Delete verse_word_analyses for all verses
  const { error: e1, count: c1 } = await db
    .from('verse_word_analyses')
    .delete({ count: 'exact' })
    .in('verse_id', verseIds)
  results.push(`verse_word_analyses: ${c1 ?? 0} deleted${e1 ? ` ERROR: ${e1.message}` : ''}`)

  // 2. Delete verse_analyses for all verses
  const { error: e2, count: c2 } = await db
    .from('verse_analyses')
    .delete({ count: 'exact' })
    .in('verse_id', verseIds)
  results.push(`verse_analyses: ${c2 ?? 0} deleted${e2 ? ` ERROR: ${e2.message}` : ''}`)

  // 3. Get all word_keys used in these verses (from verse_word_analyses already deleted, so get from word_analyses)
  // Instead, get word_keys from word_analyses that belong to words in this surah
  const { data: wordAnalyses } = await db
    .from('word_analyses')
    .select('id, word_key')
    .like('word_key', `${surah_id}:%`)

  if (wordAnalyses && wordAnalyses.length > 0) {
    const analysisIds = wordAnalyses.map(w => w.id)

    // Delete word_meanings
    const { error: e3, count: c3 } = await db
      .from('word_meanings')
      .delete({ count: 'exact' })
      .in('analysis_id', analysisIds)
    results.push(`word_meanings: ${c3 ?? 0} deleted${e3 ? ` ERROR: ${e3.message}` : ''}`)

    // Delete word_occurrences
    const { error: e4, count: c4 } = await db
      .from('word_occurrences')
      .delete({ count: 'exact' })
      .in('analysis_id', analysisIds)
    results.push(`word_occurrences: ${c4 ?? 0} deleted${e4 ? ` ERROR: ${e4.message}` : ''}`)

    // Delete word_daily
    const { error: e5, count: c5 } = await db
      .from('word_daily')
      .delete({ count: 'exact' })
      .in('analysis_id', analysisIds)
    results.push(`word_daily: ${c5 ?? 0} deleted${e5 ? ` ERROR: ${e5.message}` : ''}`)

    // Delete word_analyses
    const { error: e6, count: c6 } = await db
      .from('word_analyses')
      .delete({ count: 'exact' })
      .in('id', analysisIds)
    results.push(`word_analyses: ${c6 ?? 0} deleted${e6 ? ` ERROR: ${e6.message}` : ''}`)
  } else {
    results.push('No word_analyses found for this surah')
  }

  return NextResponse.json({ surah_id, verses: verseIds.length, results })
}
