import { NextRequest, NextResponse } from 'next/server'
import { getSupabaseAdmin } from '@/lib/supabase'

export const dynamic = 'force-dynamic'

// Normalise : lowercase, retire diacritiques latins et arabes, retire séparateurs
function normalize(s: string): string {
  if (!s) return ''
  return s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')       // diacritiques latins (é → e)
    .replace(/[ً-ٰٟ]/g, '') // diacritiques arabes
    .replace(/[\s\-_.]/g, '')              // espaces et séparateurs
    .replace(/[ʿʾʼʽ']/g, '')               // apostrophes translittérées
}

// Levenshtein distance avec cutoff (retourne cap+1 si distance dépasse)
function levenshtein(a: string, b: string, cap: number = 3): number {
  const m = a.length, n = b.length
  if (Math.abs(m - n) > cap) return cap + 1
  if (m === 0) return n
  if (n === 0) return m
  let prev = new Array(n + 1)
  let curr = new Array(n + 1)
  for (let j = 0; j <= n; j++) prev[j] = j
  for (let i = 1; i <= m; i++) {
    curr[0] = i
    let rowMin = i
    for (let j = 1; j <= n; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1
      curr[j] = Math.min(prev[j] + 1, curr[j - 1] + 1, prev[j - 1] + cost)
      if (curr[j] < rowMin) rowMin = curr[j]
    }
    if (rowMin > cap) return cap + 1
    ;[prev, curr] = [curr, prev]
  }
  return prev[n]
}

// Pagination Supabase (limite de 1000 par requête)
async function fetchAll<T>(fn: (from: number, to: number) => Promise<{ data: T[] | null }>): Promise<T[]> {
  const out: T[] = []
  const PAGE = 1000
  let from = 0
  for (;;) {
    const { data } = await fn(from, from + PAGE - 1)
    if (!data || data.length === 0) break
    out.push(...data)
    if (data.length < PAGE) break
    from += PAGE
  }
  return out
}

export async function GET(req: NextRequest) {
  const q = (req.nextUrl.searchParams.get('q') || '').trim()
  if (!q) return NextResponse.json({ results: [] })

  const qNorm = normalize(q)
  if (!qNorm) return NextResponse.json({ results: [] })

  const db = getSupabaseAdmin()

  // 1) Charger toutes les racines
  const analyses = await fetchAll<{ id: number; word_key: string; root_ar: string | null; root_phon: string | null; root_meaning: string | null }>((f, t) =>
    db.from('word_analyses').select('id, word_key, root_ar, root_phon, root_meaning').range(f, t)
  )
  if (!analyses.length) return NextResponse.json({ results: [] })

  // 2) Richesse par racine (nombre de sens) — sert de bonus de ranking
  const meaningCounts = await fetchAll<{ analysis_id: number }>((f, t) =>
    db.from('word_meanings').select('analysis_id').range(f, t)
  )
  const richness = new Map<number, number>()
  for (const m of meaningCounts) richness.set(m.analysis_id, (richness.get(m.analysis_id) || 0) + 1)

  // 3) Mots du Coran matchant la requête (formes réelles → racine)
  const { data: directWords } = await db
    .from('words')
    .select('root, transliteration, arabic')
    .or(`transliteration.ilike.%${qNorm}%,arabic.ilike.%${q}%`)
    .limit(300)

  const analysisByRootAr = new Map<string, typeof analyses[number]>()
  for (const a of analyses) {
    const key = (a.root_ar || '').replace(/\s+/g, '')
    if (key) analysisByRootAr.set(key, a)
  }

  type Match = {
    word_key: string
    root_ar: string
    root_phon: string
    root_meaning: string | null
    matched_field: string
    matched_snippet: string
    score: number
    _rich: number
  }

  const scores = new Map<string, Match>()

  const push = (a: typeof analyses[number], field: string, snippet: string, score: number) => {
    const rich = richness.get(a.id) || 0
    // Bonus de richesse : les racines avec beaucoup de sens sont plus probablement le bon choix
    const richBonus = Math.min(8, Math.floor(rich / 2))
    // Bonus « racine triliterale » : les vraies racines ont typiquement 3 lettres consonantiques
    const phonLen = normalize(a.root_phon || '').length
    const keyLen = normalize(a.word_key || '').length
    const shortest = Math.min(phonLen || 99, keyLen || 99)
    const trilBonus = shortest === 3 ? 4 : shortest === 4 ? 2 : 0
    const finalScore = score + richBonus + trilBonus
    const existing = scores.get(a.word_key)
    if (!existing || finalScore > existing.score) {
      scores.set(a.word_key, {
        word_key: a.word_key,
        root_ar: a.root_ar || '',
        root_phon: a.root_phon || '',
        root_meaning: a.root_meaning,
        matched_field: field,
        matched_snippet: snippet,
        score: finalScore,
        _rich: rich,
      })
    }
  }

  // Distance max autorisée selon longueur (queries courtes = tolérance faible)
  const maxDist = qNorm.length <= 3 ? 0 : qNorm.length <= 5 ? 1 : 2

  // Squelette consonantique — utilisé UNIQUEMENT si aucun match direct/Lev :
  // ex. « iman » → skel « mn », « amn » → skel « mn » (match)
  const qSkel = qNorm.replace(/[aeiouy]/g, '').replace(/(.)\1+/g, '$1')

  // 4) Match direct + Levenshtein sur racines
  for (const a of analyses) {
    const rootArNorm = normalize(a.root_ar || '')
    const rootPhonNorm = normalize(a.root_phon || '')
    const wordKeyNorm = normalize(a.word_key || '')

    // Racine arabe — direct substring
    if (rootArNorm && rootArNorm.includes(qNorm)) {
      push(a, 'racine arabe', a.root_ar || '', rootArNorm === qNorm ? 100 : 88)
      continue
    }
    // Racine phonétique — direct substring
    if (rootPhonNorm && rootPhonNorm.includes(qNorm)) {
      const s = rootPhonNorm === qNorm ? 100
              : rootPhonNorm.startsWith(qNorm) ? 92
              : rootPhonNorm.endsWith(qNorm) ? 78
              : 70   // milieu (ex: « iman » dans « liman ») — signal faible
      push(a, 'racine', a.root_phon || '', s)
      continue
    }
    // Clé du mot — direct substring
    if (wordKeyNorm && wordKeyNorm.includes(qNorm)) {
      const s = wordKeyNorm === qNorm ? 96
              : wordKeyNorm.startsWith(qNorm) ? 82
              : 66  // milieu
      push(a, 'racine', a.word_key, s)
      continue
    }
    // Levenshtein fuzzy — pour tolérer voyelles ajoutées/oubliées (alah → alh, nissa → nsw)
    if (maxDist > 0 && rootPhonNorm && rootPhonNorm.length >= 2) {
      const d = levenshtein(qNorm, rootPhonNorm, maxDist)
      if (d <= maxDist) {
        const s = d === 0 ? 100 : d === 1 ? 82 : 68
        push(a, 'racine', a.root_phon || '', s)
        continue
      }
    }
    if (maxDist > 0 && wordKeyNorm && wordKeyNorm.length >= 2) {
      const d = levenshtein(qNorm, wordKeyNorm, maxDist)
      if (d <= maxDist) {
        const s = d === 0 ? 96 : d === 1 ? 78 : 64
        push(a, 'racine', a.word_key, s)
        continue
      }
    }
  }

  // 5) Match via formes coraniques : chaque mot trouvé pointe vers sa racine
  for (const w of directWords || []) {
    const rootKey = (w.root || '').replace(/\s+/g, '')
    if (!rootKey) continue
    const a = analysisByRootAr.get(rootKey)
    if (!a) continue
    const translitNorm = normalize(w.transliteration || '')
    const arabicNorm = normalize(w.arabic || '')
    if (translitNorm && translitNorm.includes(qNorm)) {
      push(a, 'mot du Coran', w.transliteration || '', translitNorm === qNorm ? 92 : 74)
    } else if (arabicNorm && arabicNorm.includes(qNorm)) {
      push(a, 'mot du Coran', w.arabic || '', 72)
    }
  }

  // 6bis) Fallback squelette consonantique — pour capturer les cas comme « iman » → amn
  //       Applique uniquement une égalité stricte du squelette pour éviter le bruit,
  //       avec bonus fort de richesse. Le tri final poussera les racines réelles au top.
  if (scores.size < 5 && qSkel.length >= 2) {
    for (const a of analyses) {
      if (scores.has(a.word_key)) continue
      const rootPhonSkel = normalize(a.root_phon || '').replace(/[aeiouy]/g, '').replace(/(.)\1+/g, '$1')
      const wordKeySkel = normalize(a.word_key || '').replace(/[aeiouy]/g, '').replace(/(.)\1+/g, '$1')
      if (rootPhonSkel === qSkel && rootPhonSkel.length >= 2) {
        push(a, 'racine', a.root_phon || '', 76)
      } else if (wordKeySkel === qSkel && wordKeySkel.length >= 2) {
        push(a, 'racine', a.word_key, 72)
      }
    }
  }

  // 7) Fallback description si vraiment rien de solide
  if (scores.size < 3) {
    for (const a of analyses) {
      if (scores.has(a.word_key)) continue
      const rmNorm = normalize(a.root_meaning || '')
      if (rmNorm && rmNorm.includes(qNorm)) {
        const raw = a.root_meaning || ''
        const idxNorm = rmNorm.indexOf(qNorm)
        const rawIdx = Math.floor((idxNorm / rmNorm.length) * raw.length)
        const start = Math.max(0, rawIdx - 30)
        const end = Math.min(raw.length, rawIdx + 60)
        const snippet = (start > 0 ? '…' : '') + raw.slice(start, end) + (end < raw.length ? '…' : '')
        push(a, 'description', snippet, 40)
      }
    }
  }

  // Seuil minimal + limite finale
  const MIN_SCORE = 62
  const results = [...scores.values()]
    .filter(m => m.score >= MIN_SCORE)
    .sort((a, b) => b.score - a.score || b._rich - a._rich)
    .slice(0, 15)
    .map(({ _rich, ...rest }) => rest)  // eslint-disable-line @typescript-eslint/no-unused-vars

  return NextResponse.json({ results })
}
