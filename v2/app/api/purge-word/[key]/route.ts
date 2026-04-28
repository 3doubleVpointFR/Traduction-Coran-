import { NextRequest, NextResponse } from 'next/server'
import { getSupabaseAdmin } from '@/lib/supabase'

export const dynamic = 'force-dynamic'

export async function DELETE(
  _req: NextRequest,
  { params }: { params: { key: string } }
) {
  const wordKey = params.key
  const db = getSupabaseAdmin()

  // Find ALL word analyses for this key (handle duplicates)
  const { data: analyses, error: findErr } = await db
    .from('word_analyses')
    .select('id')
    .eq('word_key', wordKey)

  if (findErr || !analyses || analyses.length === 0) {
    return NextResponse.json({ error: 'Not found', detail: findErr?.message }, { status: 404 })
  }

  const ids = analyses.map(a => a.id)
  const results: Record<string, unknown> = { ids_found: ids }

  // Delete dependents for ALL matching IDs
  for (const id of ids) {
    await db.from('word_meanings').delete().eq('analysis_id', id)
    await db.from('word_occurrences').delete().eq('analysis_id', id)
    await db.from('word_daily').delete().eq('analysis_id', id)
  }

  // Delete all analysis rows
  const { error: delErr } = await db.from('word_analyses').delete().in('id', ids)
  results.delete_error = delErr?.message

  // Verify
  const { data: check } = await db.from('word_analyses').select('id').eq('word_key', wordKey)
  results.remaining = check?.length ?? 0

  return NextResponse.json({ purged: wordKey, results })
}
