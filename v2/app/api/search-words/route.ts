import { NextRequest, NextResponse } from 'next/server'
import { getSupabaseAdmin } from '@/lib/supabase'

export const dynamic = 'force-dynamic'

// Normalise : lowercase, retire diacritiques latins et arabes, retire espaces/tirets
function normalize(s: string): string {
  if (!s) return ''
  return s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')       // diacritiques latins (é → e)
    .replace(/[ً-ٰٟ]/g, '') // diacritiques arabes
    .replace(/[\s\-_.]/g, '')              // espaces et séparateurs
    .replace(/[ʿʾʼʽ']/g, '')               // apostrophes arabes translittérées
}

export async function GET(req: NextRequest) {
  const q = (req.nextUrl.searchParams.get('q') || '').trim()
  if (!q) return NextResponse.json({ results: [] })

  const qNorm = normalize(q)
  if (!qNorm) return NextResponse.json({ results: [] })

  const db = getSupabaseAdmin()

  // Pagination : Supabase renvoie 1000 lignes max par requête
  async function fetchAll<T>(query: (from: number, to: number) => Promise<{ data: T[] | null }>): Promise<T[]> {
    const out: T[] = []
    const PAGE = 1000
    let from = 0
    for (;;) {
      const { data } = await query(from, from + PAGE - 1)
      if (!data || data.length === 0) break
      out.push(...data)
      if (data.length < PAGE) break
      from += PAGE
    }
    return out
  }

  const analyses = await fetchAll<{ id: number; word_key: string; root_ar: string | null; root_phon: string | null; root_meaning: string | null }>((f, t) =>
    db.from('word_analyses').select('id, word_key, root_ar, root_phon, root_meaning').range(f, t)
  )

  if (!analyses.length) return NextResponse.json({ results: [] })

  const meanings = await fetchAll<{ analysis_id: number; sense: string; sense_ar: string | null; concept: string | null; description: string | null }>((f, t) =>
    db.from('word_meanings').select('analysis_id, sense, sense_ar, concept, description').range(f, t)
  )

  // Grouper les sens par analysis_id
  const meaningsByAnalysis = new Map<number, Array<{ sense: string; sense_ar: string | null; concept: string | null; description: string | null }>>()
  for (const m of meanings) {
    if (!meaningsByAnalysis.has(m.analysis_id)) meaningsByAnalysis.set(m.analysis_id, [])
    meaningsByAnalysis.get(m.analysis_id)!.push({
      sense: m.sense,
      sense_ar: m.sense_ar,
      concept: m.concept,
      description: m.description,
    })
  }

  type Match = {
    word_key: string
    root_ar: string
    root_phon: string
    root_meaning: string | null
    matched_field: string
    matched_snippet: string
    score: number
  }

  const results: Match[] = []

  for (const a of analyses) {
    const rootArNorm = normalize(a.root_ar || '')
    const rootPhonNorm = normalize(a.root_phon || '')
    const rootMeaningNorm = normalize(a.root_meaning || '')
    const wordKeyNorm = normalize(a.word_key || '')

    let bestScore = 0
    let bestField = ''
    let bestSnippet = ''

    // Racine phonétique (ex: "d-r-b" ↔ "drb")
    if (rootPhonNorm && rootPhonNorm.includes(qNorm)) {
      const s = rootPhonNorm === qNorm ? 100 : rootPhonNorm.startsWith(qNorm) ? 90 : 70
      if (s > bestScore) { bestScore = s; bestField = 'racine phonétique'; bestSnippet = a.root_phon || '' }
    }

    // Racine arabe (avec ou sans diacritiques)
    if (rootArNorm && rootArNorm.includes(qNorm)) {
      const s = rootArNorm === qNorm ? 100 : 85
      if (s > bestScore) { bestScore = s; bestField = 'racine arabe'; bestSnippet = a.root_ar || '' }
    }

    // Clé de mot (word_key latin)
    if (wordKeyNorm && wordKeyNorm.includes(qNorm)) {
      const s = wordKeyNorm === qNorm ? 95 : 65
      if (s > bestScore) { bestScore = s; bestField = 'clé'; bestSnippet = a.word_key }
    }

    // Description de racine (français)
    if (rootMeaningNorm && rootMeaningNorm.includes(qNorm)) {
      if (bestScore < 60) {
        // Extraire un extrait autour du match
        const raw = a.root_meaning || ''
        const idxNorm = rootMeaningNorm.indexOf(qNorm)
        const ratio = idxNorm / rootMeaningNorm.length
        const rawIdx = Math.floor(ratio * raw.length)
        const start = Math.max(0, rawIdx - 30)
        const end = Math.min(raw.length, rawIdx + 60)
        bestScore = 55
        bestField = 'description racine'
        bestSnippet = (start > 0 ? '…' : '') + raw.slice(start, end) + (end < raw.length ? '…' : '')
      }
    }

    // Sens (français, arabe, concept)
    const senses = meaningsByAnalysis.get(a.id) || []
    for (const m of senses) {
      const senseNorm = normalize(m.sense)
      if (senseNorm && senseNorm.includes(qNorm)) {
        const s = senseNorm === qNorm ? 80 : senseNorm.startsWith(qNorm) ? 75 : 60
        if (s > bestScore) { bestScore = s; bestField = 'sens'; bestSnippet = m.sense }
      }
      const senseArNorm = normalize(m.sense_ar || '')
      if (senseArNorm && senseArNorm.includes(qNorm)) {
        const s = senseArNorm === qNorm ? 78 : 58
        if (s > bestScore) { bestScore = s; bestField = 'sens arabe'; bestSnippet = m.sense_ar || '' }
      }
      const conceptNorm = normalize(m.concept || '')
      if (conceptNorm && conceptNorm.includes(qNorm)) {
        const s = conceptNorm === qNorm ? 72 : 52
        if (s > bestScore) { bestScore = s; bestField = 'concept'; bestSnippet = m.concept || '' }
      }
    }

    if (bestScore > 0) {
      results.push({
        word_key: a.word_key,
        root_ar: a.root_ar || '',
        root_phon: a.root_phon || '',
        root_meaning: a.root_meaning,
        matched_field: bestField,
        matched_snippet: bestSnippet,
        score: bestScore,
      })
    }
  }

  results.sort((a, b) => b.score - a.score)

  return NextResponse.json({ results: results.slice(0, 50) })
}
