import { NextResponse } from 'next/server'
import { getSupabaseAdmin } from '@/lib/supabase'

export const dynamic = 'force-dynamic'

export async function GET() {
  const db = getSupabaseAdmin()

  const { data, error } = await db
    .from('word_analyses')
    .select('id, word_key, root_ar, root_phon, retenu, model_used, prompt_version, generated_at, validated')
    .order('generated_at', { ascending: false })

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ words: data ?? [], count: data?.length ?? 0 })
}
