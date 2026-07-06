import { NextRequest, NextResponse } from 'next/server'
import { getSupabaseAdmin } from '@/lib/supabase'

export const dynamic = 'force-dynamic'

// Normalise : lowercase, retire diacritiques latins et arabes, unifie lettres arabes proches
function normalize(s: string): string {
  if (!s) return ''
  return s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')       // diacritiques latins (é → e)
    .replace(/[ً-ٰٟ]/g, '') // diacritiques arabes
    .replace(/[أإآٱ]/g, 'ا')            // alifs modifiés → alif simple
    .replace(/ى/g, 'ي')                    // alif maqsura → yaa
    .replace(/ة/g, 'ه')                    // taa marbuta → haa
    .replace(/ؤ/g, 'و')                    // waw + hamza → waw
    .replace(/ئ/g, 'ي')                    // yaa + hamza → yaa
    .replace(/[\s\-_.]/g, '')              // espaces et séparateurs
    .replace(/[ʿʾʼʽ']/g, '')               // apostrophes translittérées
}

// Buckwalter → lettres latines. F=fatḥatan, K=kasratan, N=ḍammatan, Y=alef maqṣūra,
// A=alif, w=wāw, ` = ā long, ~=shadda, {}<>|=alifs, etc. On les strip ou on convertit.
function normalizeBuckwalter(s: string): string {
  if (!s) return ''
  return s
    .toLowerCase()
    // Voyelles brèves de fin (tanwīn/case marker)
    .replace(/[fkn]/g, 'a')  // F/K/N → a (approximation phonétique)
    // Lettres longues et diacritiques
    .replace(/[`~^]/g, '')   // shadda, sukun, marqueurs
    .replace(/[{}<>|]/g, 'a')
    .replace(/y/g, 'y')      // alef maqṣūra → y
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[\s\-_.]/g, '')
    .replace(/[ʿʾʼʽ']/g, '')
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

  // 2) Sens + richesse par racine
  const allMeanings = await fetchAll<{ analysis_id: number; sense: string; sense_ar: string | null; concept: string | null }>((f, t) =>
    db.from('word_meanings').select('analysis_id, sense, sense_ar, concept').range(f, t)
  )
  const richness = new Map<number, number>()
  const meaningsByAnalysis = new Map<number, Array<{ sense: string; sense_ar: string | null; concept: string | null }>>()
  for (const m of allMeanings) {
    richness.set(m.analysis_id, (richness.get(m.analysis_id) || 0) + 1)
    if (!meaningsByAnalysis.has(m.analysis_id)) meaningsByAnalysis.set(m.analysis_id, [])
    meaningsByAnalysis.get(m.analysis_id)!.push({ sense: m.sense, sense_ar: m.sense_ar, concept: m.concept })
  }

  // 2bis) Racines réellement utilisées dans un verset analysé (verse_word_analyses)
  const usedInVerses = await fetchAll<{ word_key: string }>((f, t) =>
    db.from('verse_word_analyses').select('word_key').range(f, t)
  )
  const usedKeys = new Set<string>()
  for (const v of usedInVerses) if (v.word_key) usedKeys.add(v.word_key)

  // Prédicat : une racine est « vraiment analysée » si utilisée dans un verset
  // OU si elle contient au moins 5 sens (racine enrichie mais pas encore rencontrée en verset)
  const isReallyAnalyzed = (a: { id: number; word_key: string }) =>
    usedKeys.has(a.word_key) || (richness.get(a.id) || 0) >= 5

  // 3) Mots du Coran matchant la requête (formes réelles → racine)
  //    Filtre serré + filtre large (préfixe 3 chars) pour attraper les formes fléchies
  //    avec case markers (hudan → hudFY nécessite un match par préfixe)
  const qPrefix = qNorm.slice(0, 3)
  const [directRes, prefixRes] = await Promise.all([
    db.from('words').select('root, transliteration, arabic').or(`transliteration.ilike.%${qNorm}%,arabic.ilike.%${q}%`).limit(200),
    qPrefix.length >= 3 ? db.from('words').select('root, transliteration, arabic').ilike('transliteration', `%${qPrefix}%`).limit(400) : Promise.resolve({ data: [] }),
  ])
  const directWords = [...(directRes.data || []), ...(prefixRes.data || [])]

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

  // Distance max autorisée selon longueur (tolérance faible pour queries courtes)
  const maxDist = qNorm.length <= 3 ? 0 : qNorm.length <= 5 ? 1 : 2

  // Squelette consonantique — pour capturer les patterns du type « iman » → « amn »
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
    // Levenshtein fuzzy — pour tolérer voyelles ajoutées/oubliées (allah → alh, alah → alh)
    if (maxDist > 0 && rootPhonNorm && rootPhonNorm.length >= 2) {
      const d = levenshtein(qNorm, rootPhonNorm, maxDist)
      if (d <= maxDist) {
        const s = d === 0 ? 100 : d === 1 ? 82 : 72
        push(a, 'racine', a.root_phon || '', s)
        continue
      }
    }
    if (maxDist > 0 && wordKeyNorm && wordKeyNorm.length >= 2) {
      const d = levenshtein(qNorm, wordKeyNorm, maxDist)
      if (d <= maxDist) {
        const s = d === 0 ? 96 : d === 1 ? 78 : 68
        push(a, 'racine', a.word_key, s)
        continue
      }
    }
  }

  // 5) Match via formes coraniques : chaque mot trouvé pointe vers sa racine
  //    On normalise avec Buckwalter en plus (hudFY → huday) pour capter des queries comme « hudan »
  for (const w of directWords || []) {
    const rootKey = (w.root || '').replace(/\s+/g, '')
    if (!rootKey) continue
    const a = analysisByRootAr.get(rootKey)
    if (!a) continue
    const translitNorm = normalize(w.transliteration || '')
    const translitBk = normalizeBuckwalter(w.transliteration || '')
    const arabicNorm = normalize(w.arabic || '')
    if (translitNorm && translitNorm.includes(qNorm)) {
      push(a, 'mot du Coran', w.transliteration || '', translitNorm === qNorm ? 92 : 76)
    } else if (translitBk && translitBk.includes(qNorm)) {
      push(a, 'mot du Coran', w.transliteration || '', translitBk === qNorm ? 88 : 76)
    } else if (arabicNorm && arabicNorm.includes(qNorm)) {
      push(a, 'mot du Coran', w.arabic || '', 74)
    } else if (translitBk) {
      // Tolérance plus large sur les formes fléchies (case markers arabes ajoutent 1-2 lettres)
      const capBk = Math.max(2, maxDist)
      const d = levenshtein(qNorm, translitBk, capBk)
      if (d <= capBk) push(a, 'mot du Coran', w.transliteration || '', d === 0 ? 84 : d === 1 ? 78 : 70)
    }
  }

  // 5bis) Match via sens (français, arabe, concept)
  //       Le sens doit MATCHER de façon exacte ou prefix — évite le bruit (« roi » dans « protéger »)
  for (const a of analyses) {
    const senses = meaningsByAnalysis.get(a.id) || []
    for (const m of senses) {
      const senseNorm = normalize(m.sense)
      if (senseNorm && (senseNorm === qNorm || senseNorm.startsWith(qNorm + ' ') || senseNorm.startsWith(qNorm))) {
        const s = senseNorm === qNorm ? 90 : senseNorm.startsWith(qNorm + ' ') ? 82 : 76
        push(a, 'sens', m.sense, s)
      } else if (senseNorm && qNorm.length >= 4 && senseNorm.includes(qNorm)) {
        push(a, 'sens', m.sense, 68)
      }
      const senseArNorm = normalize(m.sense_ar || '')
      if (senseArNorm && senseArNorm === qNorm) {
        push(a, 'sens arabe', m.sense_ar || '', 82)
      }
      const conceptNorm = normalize(m.concept || '')
      if (conceptNorm && (conceptNorm === qNorm || conceptNorm.startsWith(qNorm))) {
        push(a, 'concept', m.concept || '', conceptNorm === qNorm ? 80 : 72)
      }
    }
  }

  // 6bis) Fallback squelette consonantique — ne cible QUE les vraies racines riches
  //       (rich >= 4) pour éviter le bruit des stubs. Capture les patterns arabes
  //       où la voyelle initiale du mot n'est pas dans la racine (« iman » → amn).
  if (qSkel.length >= 2) {
    for (const a of analyses) {
      if (scores.has(a.word_key)) continue
      const rich = richness.get(a.id) || 0
      if (rich < 4) continue   // racines pauvres écartées pour éviter le bruit
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

  // Filtre final : ne garder que les racines réellement analysées
  // (utilisées dans un verset OU contenant au moins 5 sens)
  const analysisByKey = new Map<string, typeof analyses[number]>()
  for (const a of analyses) analysisByKey.set(a.word_key, a)

  // Seuil minimal + tri
  const MIN_SCORE = 68
  const sorted = [...scores.values()]
    .filter(m => m.score >= MIN_SCORE)
    .filter(m => m.root_ar && m.root_ar.trim().length > 0)   // écarte les entrées sans racine arabe
    .filter(m => {
      const a = analysisByKey.get(m.word_key)
      return a ? isReallyAnalyzed(a) : false
    })
    .sort((a, b) => b.score - a.score || b._rich - a._rich)

  // Déduplication : une seule entrée par racine arabe (normalisée sans espaces)
  // On garde la plus riche/mieux scorée, sinon on aurait 5 variantes de a-l-h pour « allah »
  const seen = new Set<string>()
  const deduped: typeof sorted = []
  for (const m of sorted) {
    const key = m.root_ar.replace(/\s+/g, '')
    if (seen.has(key)) continue
    seen.add(key)
    deduped.push(m)
    if (deduped.length >= 8) break
  }

  const results = deduped.map(({ _rich, ...rest }) => rest)  // eslint-disable-line @typescript-eslint/no-unused-vars

  return NextResponse.json({ results })
}
