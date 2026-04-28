import { NextRequest, NextResponse } from 'next/server'
import { createJob, runVerseAnalysisPipelinePasChere } from '@/lib/jobs'

export const dynamic = 'force-dynamic'

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { surah_id, verse_num } = body

  if (!surah_id || !verse_num) {
    return NextResponse.json(
      { error: 'Missing surah_id or verse_num' },
      { status: 400 }
    )
  }

  const targetKey = `${surah_id}:${verse_num}`

  try {
    const jobId = await createJob('verse_paschere', targetKey)

    // Fire-and-forget: pipeline runs in background, frontend polls /api/jobs/[id]
    runVerseAnalysisPipelinePasChere(jobId, surah_id, verse_num)
      .catch(err => console.error('[PipelinePasChere] Background error:', err))

    return NextResponse.json({ job_id: jobId, status: 'running', mode: 'pas_chere' })
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error'
    return NextResponse.json({ error: message, status: 'failed' }, { status: 500 })
  }
}
