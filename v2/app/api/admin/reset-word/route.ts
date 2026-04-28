import { NextRequest, NextResponse } from 'next/server'
import { getSupabaseAdmin } from '@/lib/supabase'

export async function POST(req: NextRequest) {
  const { word_key, verse_id } = await req.json()
  const db = getSupabaseAdmin()

  const results: string[] = []

  if (word_key) {
    // Delete word analysis and all related data (cascade)
    const { data: analysis } = await db
      .from('word_analyses')
      .select('id')
      .eq('word_key', word_key)
      .single()

    if (analysis) {
      const r1 = await db.from('word_meanings').delete().eq('analysis_id', analysis.id)
      const r2 = await db.from('word_occurrences').delete().eq('analysis_id', analysis.id)
      const r3 = await db.from('word_daily').delete().eq('analysis_id', analysis.id)
      const r4 = await db.from('word_analyses').delete().eq('id', analysis.id)
      const errors = [r1, r2, r3, r4].filter(r => r.error).map(r => r.error?.message)
      results.push(`Deleted analysis for word_key=${word_key}` + (errors.length ? ` ERRORS: ${errors.join(', ')}` : ''))
    } else {
      results.push(`No analysis found for word_key=${word_key}`)
    }
  }

  if (verse_id) {
    const rv = await db.from('verse_analyses').delete().eq('verse_id', verse_id)
    results.push(`Deleted verse_analysis for verse_id=${verse_id}` + (rv.error ? ` ERROR: ${rv.error.message}` : ''))
  }

  return NextResponse.json({ results })
}
