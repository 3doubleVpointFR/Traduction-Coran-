import { NextRequest, NextResponse } from 'next/server'
import { getSupabaseAdmin } from '@/lib/supabase'

export const dynamic = 'force-dynamic'

export async function GET(
  req: NextRequest,
  { params }: { params: { key: string } }
) {
  const wordKey = params.key
  const db = getSupabaseAdmin()

  // Optional query params for occurrence-specific data
  const verseId = req.nextUrl.searchParams.get('verse_id')
  const position = req.nextUrl.searchParams.get('position')

  // Get word analysis
  const { data: analysis, error } = await db
    .from('word_analyses')
    .select('*')
    .eq('word_key', wordKey)
    .single()

  if (error || !analysis) {
    return NextResponse.json({ error: 'Word not found' }, { status: 404 })
  }

  // Get QAC root count, meanings, daily, and verse_word_analyses counts in parallel
  const rootNorm = (analysis.root_ar ?? '').replace(/\s+/g, '')
  const [meaningsRes, dailyRes, vwaRes, qacCountRes] = await Promise.all([
    db.from('word_meanings')
      .select('*')
      .eq('analysis_id', analysis.id)
      .order('display_order'),
    db.from('word_daily')
      .select('*')
      .eq('analysis_id', analysis.id),
    db.from('verse_word_analyses')
      .select('sense_chosen, analysis_axes, verse_id, verses!inner(surah_id, verse_num)')
      .eq('word_key', wordKey),
    db.from('words')
      .select('id', { count: 'exact', head: true })
      .eq('root', rootNorm),
  ])

  // Fetch occurrence-specific VWA entry if verse_id + position provided
  let occurrenceData: { occurrence_retenu: string; occurrence_axes: unknown; occurrence_reason: string } | null = null
  if (verseId && position) {
    const { data: specificVwa } = await db
      .from('verse_word_analyses')
      .select('sense_chosen, analysis_axes, reason')
      .eq('verse_id', parseInt(verseId))
      .eq('word_key', wordKey)
      .eq('position', parseInt(position))
      .single()

    if (specificVwa) {
      occurrenceData = {
        occurrence_retenu: specificVwa.sense_chosen,
        occurrence_axes: specificVwa.analysis_axes,
        occurrence_reason: specificVwa.reason,
      }
    }
  }

  const allMeanings = meaningsRes.data ?? []
  // Include all meaning types (etymology + quranic enrichments from Lane's)
  const etymology = allMeanings.filter((m: Record<string, unknown>) => m.meaning_type === 'etymology' || m.meaning_type === 'quranic')

  // Build analysis counts + refs from verse_word_analyses
  const vwaEntries = vwaRes.data ?? []
  const totalAnalyzed = vwaEntries.length
  const senseCounts: Record<string, number> = {}
  const senseRefs: Record<string, string[]> = {}
  const conceptCounts: Record<string, number> = {}
  const conceptRefs: Record<string, string[]> = {}
  for (const entry of vwaEntries) {
    const sense = entry.sense_chosen
    senseCounts[sense] = (senseCounts[sense] || 0) + 1
    const v = entry.verses as unknown as { surah_id: number; verse_num: number }
    const ref = `${v.surah_id}:${v.verse_num}`
    if (!senseRefs[sense]) senseRefs[sense] = []
    if (!senseRefs[sense].includes(ref)) senseRefs[sense].push(ref)
    // Count by concept_chosen from analysis_axes
    const axes = entry.analysis_axes as Record<string, unknown> | null
    if (axes && axes.concept_chosen) {
      const concept = axes.concept_chosen as string
      conceptCounts[concept] = (conceptCounts[concept] || 0) + 1
      if (!conceptRefs[concept]) conceptRefs[concept] = []
      if (!conceptRefs[concept].includes(ref)) conceptRefs[concept].push(ref)
    }
  }

  return NextResponse.json({
    ...analysis,
    etymology,
    daily: dailyRes.data ?? [],
    analysis_counts: {
      total_analyzed: totalAnalyzed,
      total_qac: qacCountRes.count ?? analysis.total_occurrences ?? 0,
      by_sense: senseCounts,
      refs_by_sense: senseRefs,
      by_concept: conceptCounts,
      refs_by_concept: conceptRefs,
    },
    // Occurrence-specific data when verse_id + position provided
    ...occurrenceData,
  })
}
