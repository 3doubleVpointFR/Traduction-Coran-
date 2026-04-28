import { NextRequest, NextResponse } from 'next/server'
import { getSupabaseAdmin } from '@/lib/supabase'

export async function GET(req: NextRequest) {
  const key = req.nextUrl.searchParams.get('key') ?? 'ktb'
  const db = getSupabaseAdmin()

  // Try select without .single() to see all rows
  const { data: all, error: allErr } = await db
    .from('word_analyses')
    .select('id, word_key, retenu')
    .eq('word_key', key)

  // Try .single()
  const { data: single, error: singleErr } = await db
    .from('word_analyses')
    .select('id')
    .eq('word_key', key)
    .single()

  return NextResponse.json({
    all_rows: all,
    all_error: allErr?.message,
    single_row: single,
    single_error: singleErr?.message,
  })
}
