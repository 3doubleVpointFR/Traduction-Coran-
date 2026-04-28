import { NextRequest, NextResponse } from 'next/server'
import { getSupabaseAdmin } from '@/lib/supabase'

export async function GET(req: NextRequest) {
  const root = req.nextUrl.searchParams.get('root') ?? ''
  const db = getSupabaseAdmin()

  // Count words with this root
  const { count, error } = await db
    .from('words')
    .select('id', { count: 'exact', head: true })
    .eq('root', root)

  // Also check with spaces removed
  const normalizedRoot = root.replace(/\s+/g, '')
  const { count: countNorm } = await db
    .from('words')
    .select('id', { count: 'exact', head: true })
    .eq('root', normalizedRoot)

  // Sample a few roots to see format
  const { data: sample } = await db
    .from('words')
    .select('root')
    .neq('root', '')
    .limit(5)

  return NextResponse.json({
    query_root: root,
    normalized_root: normalizedRoot,
    count_exact: count,
    count_normalized: countNorm,
    sample_roots: sample?.map(s => s.root),
    error: error?.message,
  })
}
