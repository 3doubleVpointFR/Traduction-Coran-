import { NextRequest, NextResponse } from 'next/server'
import { getSupabaseAdmin } from '@/lib/supabase'
import { analyzeWord, PROMPT_VERSION } from '@/lib/llm'

export const maxDuration = 60

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { arabic, root, key, verse_ref } = body

  if (!arabic || !root || !key) {
    return NextResponse.json(
      { error: 'Missing arabic, root, or key' },
      { status: 400 }
    )
  }

  const db = getSupabaseAdmin()

  // Check if already analyzed
  const { data: existing } = await db
    .from('word_analyses')
    .select('id')
    .eq('word_key', key)
    .single()

  if (existing) {
    return NextResponse.json({ status: 'already_exists', word_key: key })
  }

  try {
    // Get root occurrences from QAC data
    const { data: words } = await db
      .from('words')
      .select('arabic, verse_id')
      .eq('root', root)
      .limit(50)

    const verseIds = Array.from(new Set(words?.map(w => w.verse_id) ?? []))
    const { data: verses } = verseIds.length
      ? await db.from('verses').select('id, surah_id, verse_num, arabic_text').in('id', verseIds)
      : { data: [] }

    const verseMap = new Map(verses?.map(v => [v.id, v]) ?? [])
    const occurrences = words?.map(w => {
      const v = verseMap.get(w.verse_id)
      return { ref: v ? `${v.surah_id}:${v.verse_num}` : '?', word: w.arabic, verse: v?.arabic_text ?? '' }
    }) ?? []

    const analysis = await analyzeWord(arabic, root, verse_ref || '?', JSON.stringify(occurrences))

    // Insert into DB
    const { data: inserted } = await db
      .from('word_analyses')
      .insert({
        word_key: key,
        root_ar: root,
        root_phon: analysis.root_phon,
        root_meaning: analysis.root_meaning,
        retenu: analysis.retenu,
        model_used: 'gpt-4o',
        prompt_version: PROMPT_VERSION,
      })
      .select('id')
      .single()

    if (!inserted) throw new Error('Insert failed')

    // Insert meanings, occurrences, daily
    if (analysis.meanings?.length) {
      await db.from('word_meanings').insert(
        analysis.meanings.map((m, i) => ({
          analysis_id: inserted.id, sense: m.sense, status: m.status,
          proof_ref: m.proof_ref, proof_phon: m.proof_phon,
          proof_tr: m.proof_tr, proof_ctx: m.proof_ctx, display_order: i,
        }))
      )
    }

    if (analysis.occurrences?.length) {
      await db.from('word_occurrences').insert(
        analysis.occurrences.map(o => ({
          analysis_id: inserted.id,
          before_ref: o.before.ref, before_ar: o.before.ar, before_phon: o.before.phon, before_tr: o.before.tr,
          main_ref: o.main.ref, main_ar: o.main.ar, main_phon: o.main.phon, main_tr: o.main.tr,
          after_ref: o.after.ref, after_ar: o.after.ar, after_phon: o.after.phon, after_tr: o.after.tr,
        }))
      )
    }

    if (analysis.daily?.length) {
      await db.from('word_daily').insert(
        analysis.daily.map(d => ({ analysis_id: inserted.id, arabic: d.ar, phon: d.phon, french: d.fr }))
      )
    }

    return NextResponse.json({ status: 'created', word_key: key })
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
