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
    .replace(/ء/g, 'ا')                    // hamza isolé → alif
    .replace(/ى/g, 'ي')                    // alif maqsura → yaa
    .replace(/ة/g, 'ه')                    // taa marbuta → haa
    .replace(/ؤ/g, 'و')                    // waw + hamza → waw
    .replace(/ئ/g, 'ي')                    // yaa + hamza → yaa
    .replace(/[\s\-_.]/g, '')              // espaces et séparateurs
    .replace(/[ʿʾʼʽ']/g, '')               // apostrophes translittérées
}

// Buckwalter → lettres latines. Case-sensitive (H=ح, h=ه ; $=ش ; x=خ ; etc.)
// On mappe AVANT le lowercase pour préserver la distinction.
function normalizeBuckwalter(s: string): string {
  if (!s) return ''
  return s
    // Consonnes Buckwalter uppercase → digraphes latins (avant lowercase)
    .replace(/\$/g, 'sh')      // ش
    .replace(/H/g, 'h')        // ح (emphatic h)
    .replace(/x/g, 'kh')       // خ
    .replace(/v/g, 'th')       // ث
    .replace(/\*/g, 'dh')      // ذ
    .replace(/g/g, 'gh')       // غ
    .replace(/S/g, 's')        // ص
    .replace(/D/g, 'd')        // ض
    .replace(/T/g, 't')        // ط
    .replace(/Z/g, 'z')        // ظ
    .replace(/E/g, 'a')        // ع (approximation)
    .replace(/q/g, 'q')
    // Voyelles brèves de fin (tanwīn / case markers)
    .replace(/[FKN]/g, 'a')    // fatḥatan, kasratan, ḍammatan
    .replace(/Y/g, 'y')        // alef maqṣūra (le lowercase suivant l'ignorerait)
    .replace(/A/g, 'a')        // alif
    .replace(/w/g, 'w')        // wāw (déjà OK)
    // Diacritiques et marqueurs
    .replace(/[`~^]/g, '')     // shadda, sukun, longueurs
    .replace(/[{}<>|]/g, 'a')  // alifs modifiés
    .toLowerCase()
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

// Nettoie une transliteration Buckwalter pour l'affichage humain :
// « {EotabiruW » → « iʿtabirū », « musotaboSiriyn » → « mustabsirīn »
function prettifyBuckwalter(s: string): string {
  if (!s) return ''
  return s
    // Voyelles longues
    .replace(/A/g, 'ā')       // alif long
    .replace(/Y/g, 'ā')       // alif maqsūra → ā
    .replace(/w`/g, 'ū')      // waw + ā = ū long
    .replace(/y`/g, 'ī')      // ya + ā = ī long
    // Consonnes emphatiques et digraphes
    .replace(/\$/g, 'sh')
    .replace(/H/g, 'ḥ')
    .replace(/x/g, 'kh')
    .replace(/v/g, 'th')
    .replace(/\*/g, 'dh')
    .replace(/g/g, 'gh')
    .replace(/S/g, 'ṣ')
    .replace(/D/g, 'ḍ')
    .replace(/T/g, 'ṭ')
    .replace(/Z/g, 'ẓ')
    .replace(/E/g, 'ʿ')       // ʿayn
    // Case markers finaux (fatḥatan/kasratan/ḍammatan)
    .replace(/F/g, 'an')
    .replace(/K/g, 'in')
    .replace(/N/g, 'un')
    // Hamza et alifs modifiés
    .replace(/[{}<>|]/g, 'a')
    .replace(/[`~^]/g, '')    // shadda, sukun, marqueurs
    .replace(/W/g, 'ū')       // waw isolé en fin de forme verbale (approximation)
    .replace(/p/g, 'a')       // taa marbuta
    .replace(/o/g, '')        // sukun explicite
    .replace(/'/g, 'ʾ')       // hamza
    .toLowerCase()
    .replace(/\s+/g, ' ')
    .trim()
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

  // 2bis) Traductions RÉELLEMENT CHOISIES dans les versets analysés
  //       Source #1 : verse_word_analyses.sense_chosen (le sens retenu au niveau A)
  //       Source #2 : verse_analyses.segments[].fr (le mot français mis dans la traduction)
  const chosenSenses = await fetchAll<{ word_key: string; sense_chosen: string | null; verse_id: number; verses: { surah_id: number; verse_num: number } | null }>((f, t) =>
    db.from('verse_word_analyses').select('word_key, sense_chosen, verse_id, verses!inner(surah_id, verse_num)').range(f, t)
  )
  const usedKeys = new Set<string>()
  // Map: expression normalisée → Map<word_key, { count, refs: string[] }>
  type ChosenEntry = { count: number; refs: string[] }
  const chosenIndex = new Map<string, Map<string, ChosenEntry>>()
  const addChosen = (expr: string | null | undefined, word_key: string, ref: string | null = null) => {
    if (!expr || !word_key) return
    const rawTrim = expr.trim()
    if (!rawTrim) return
    const addOne = (key: string) => {
      if (!key || key.length < 2) return
      if (!chosenIndex.has(key)) chosenIndex.set(key, new Map())
      const wk = chosenIndex.get(key)!
      const entry = wk.get(word_key) || { count: 0, refs: [] }
      entry.count += 1
      if (ref && entry.refs.length < 6 && !entry.refs.includes(ref)) entry.refs.push(ref)
      wk.set(word_key, entry)
    }
    // Expression complète normalisée (« faire entrer »)
    addOne(normalize(rawTrim))
    // Chaque token individuel du sens (split AVANT normalize pour préserver les mots)
    const tokens = rawTrim.split(/\s+/).filter(t => t.length >= 2)
    for (const tok of tokens) {
      const ntok = normalize(tok)
      addOne(ntok)
    }
  }
  for (const v of chosenSenses) {
    if (!v.word_key) continue
    usedKeys.add(v.word_key)
    const ref = v.verses ? `${v.verses.surah_id}:${v.verses.verse_num}` : null
    addChosen(v.sense_chosen, v.word_key, ref)
  }

  // Segments : parcourir tous les verse_analyses.segments[] et indexer fr → word_key
  const segRows = await fetchAll<{ verse_id: number; verses: { surah_id: number; verse_num: number } | null; segments: Array<{ fr?: string; word_key?: string | null }> | null }>((f, t) =>
    db.from('verse_analyses').select('verse_id, verses!inner(surah_id, verse_num), segments').range(f, t)
  )
  for (const row of segRows) {
    const segs = row.segments || []
    const ref = row.verses ? `${row.verses.surah_id}:${row.verses.verse_num}` : null
    for (const s of segs) {
      if (!s || !s.word_key || !s.fr) continue
      const cleanFr = s.fr.replace(/^[«»"'\s(,]+|[«»"'\s.,;:!?)]+$/g, '').trim()
      addChosen(cleanFr, s.word_key, ref)
    }
  }

  // Racines arabes utilisées : si hšr a été utilisée en verset, alors hshr
  // (même root_ar) l'est aussi implicitement (doublon d'entrée dans word_analyses)
  const usedRootArs = new Set<string>()
  for (const a of analyses) {
    if (usedKeys.has(a.word_key) && a.root_ar) {
      usedRootArs.add(a.root_ar.replace(/\s+/g, ''))
    }
  }

  // Prédicat : une racine est « vraiment analysée » si :
  // - utilisée dans un verset (word_key en VWA)
  // - OU partage sa racine arabe avec une racine utilisée (doublons)
  // - OU contient au moins 5 sens (enrichie manuellement)
  const isReallyAnalyzed = (a: { id: number; word_key: string; root_ar?: string | null }) => {
    if (usedKeys.has(a.word_key)) return true
    if ((richness.get(a.id) || 0) >= 5) return true
    const rootKey = (a.root_ar || '').replace(/\s+/g, '')
    if (rootKey && usedRootArs.has(rootKey)) return true
    return false
  }

  // 3) Mots du Coran matchant la requête (formes réelles → racine)
  //    a) filtre serré sur transliteration
  //    b) filtre large avec préfixe 3 chars (formes fléchies)
  //    c) match Arabe avec wildcards entre lettres pour ignorer les diacritiques
  //       (ex: query « سيئة » → pattern %س%ي%ئ%ة% matche « ٱلسَّيِّئَةَ »)
  const qPrefix = qNorm.slice(0, 3)
  const isArabicQuery = /[؀-ۿ]/.test(q)
  // Pour les queries arabes, on garde uniquement les consonnes fortes dans le pattern :
  // les ا/و/ي peuvent être remplacés par des dagger-alef ٰ ou d'autres diacritiques
  // dans le Coran. Ex: « صالح » → pattern « %ص%ل%ح% » matche « ٱلصَّٰلِحَٰتِ ».
  const arabicPattern = isArabicQuery
    ? '%' + q.replace(/\s+/g, '').split('').filter(c => !/[اويٱأإآىة]/.test(c)).join('%') + '%'
    : `%${q}%`
  const [directRes, prefixRes] = await Promise.all([
    db.from('words').select('root, transliteration, arabic').or(`transliteration.ilike.%${qNorm}%,arabic.ilike.${arabicPattern}`).limit(200),
    qPrefix.length >= 3 ? db.from('words').select('root, transliteration, arabic').ilike('transliteration', `%${qPrefix}%`).limit(400) : Promise.resolve({ data: [] }),
  ])
  const directWords = [...(directRes.data || []), ...(prefixRes.data || [])]

  // Aplatit une racine arabe pour matcher les variantes hamza/alif entre
  // word_analyses.root_ar (« س و ء ») et words.root (« سوا »)
  const flattenRoot = (s: string): string => (s || '')
    .replace(/\s+/g, '')
    .replace(/[أإآٱ]/g, 'ا')
    .replace(/ء/g, 'ا')
    .replace(/ى/g, 'ي')
    .replace(/ة/g, 'ه')

  const analysisByRootAr = new Map<string, typeof analyses[number]>()
  const analysisByKeyLite = new Map<string, typeof analyses[number]>()
  for (const a of analyses) {
    const raw = (a.root_ar || '').replace(/\s+/g, '')
    const flat = flattenRoot(a.root_ar || '')
    // Indexe les deux variantes pour que .get() par la variante words.root fonctionne
    if (raw) analysisByRootAr.set(raw, a)
    if (flat && flat !== raw) analysisByRootAr.set(flat, a)
    analysisByKeyLite.set(a.word_key, a)
  }

  type Match = {
    word_key: string
    root_ar: string
    root_phon: string
    root_meaning: string | null
    matched_field: string
    matched_snippet: string
    concepts: string[]        // concepts du sens (pour aider à identifier la racine)
    translations: string[]    // traductions françaises rencontrées pour cette racine
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
        concepts: [],
        translations: [],
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
  // Détecte les queries qui ont une correspondance exacte de traduction française
  // (ex: « bon » → une racine a été traduite « bon » quelque part).
  // Dans ce cas on skip le matching phonétique/Buckwalter qui génère du bruit
  // (« bon » matche « {bon » = ٱبْن = ibn = fils, faux positif).
  const hasExactFrTraduction = !isArabicQuery && chosenIndex.has(qNorm) && (chosenIndex.get(qNorm)!.size > 0)
  const looksFrench = hasExactFrTraduction

  for (const w of directWords || []) {
    const rootKey = (w.root || '').replace(/\s+/g, '')
    if (!rootKey) continue
    const a = analysisByRootAr.get(rootKey)
    if (!a) continue
    const translitNorm = normalize(w.transliteration || '')
    const translitBk = normalizeBuckwalter(w.transliteration || '')
    const arabicNorm = normalize(w.arabic || '')
    // Version consonantique — le Coran remplace souvent ا par le dagger-alef ٰ
    // qui disparaît au normalize, donc « صالح » ne matche pas via arabicNorm direct.
    const stripWeak = (s: string) => s.replace(/[اويى]/g, '')
    const qCons = stripWeak(qNorm)
    const arabicCons = stripWeak(arabicNorm)
    // Query française courte : on skip le matching Buckwalter (bruit fréquent : {bon → ibn)
    if (looksFrench) continue
    if (translitNorm && translitNorm.includes(qNorm)) {
      push(a, 'phonétique', prettifyBuckwalter(w.transliteration || ''), translitNorm === qNorm ? 92 : 76)
    } else if (translitBk && translitBk.includes(qNorm)) {
      push(a, 'phonétique', prettifyBuckwalter(w.transliteration || ''), translitBk === qNorm ? 88 : 76)
    } else if (arabicNorm && arabicNorm.includes(qNorm)) {
      push(a, 'phonétique', prettifyBuckwalter(w.transliteration || w.arabic || ''), 74)
    } else if (qCons.length >= 3 && arabicCons && arabicCons.includes(qCons)) {
      push(a, 'phonétique', prettifyBuckwalter(w.transliteration || w.arabic || ''), 74)
    } else if (translitBk) {
      const capBk = Math.max(2, maxDist)
      const d = levenshtein(qNorm, translitBk, capBk)
      if (d <= capBk) push(a, 'phonétique', prettifyBuckwalter(w.transliteration || ''), d === 0 ? 84 : d === 1 ? 78 : 70)
    }
  }

  // 5bis) Match via traductions RÉELLEMENT choisies (sense_chosen + segments[].fr)
  //       Le snippet contient les refs de versets réels au lieu de "utilisée dans le Coran"
  const chosenExactHits = new Set<string>()
  for (const [nk, wkMap] of chosenIndex.entries()) {
    let matched = false
    let score = 0
    // Match uniquement exact ou en tête (évite « dieu » qui matche dans « dieuneleurparlerapas »)
    if (nk === qNorm) { matched = true; score = 100 }
    else if (nk.startsWith(qNorm + ' ')) { matched = true; score = 88 }
    else if (qNorm.length >= 4 && nk.startsWith(qNorm)) { matched = true; score = 78 }
    if (!matched) continue
    for (const [wk, entry] of wkMap.entries()) {
      const a = analysisByKeyLite.get(wk)
      if (!a) continue
      // Bonus proportionnel au nombre d'occurrences
      const occBonus = Math.min(15, Math.floor(Math.log2(entry.count + 1) * 2.5))
      // Pénalité pour les traductions à 1 seule occurrence (anomalies de données)
      const rarityPenalty = entry.count === 1 ? 12 : entry.count === 2 ? 5 : 0
      const refsList = entry.refs.slice(0, 5).join(', ')
      const snippet = refsList || nk
      push(a, 'traduction', snippet, score + occBonus - rarityPenalty)
      chosenExactHits.add(wk)
    }
  }

  // 5ter) Fallback sens définis (word_meanings.sense) + concepts (word_meanings.concept)
  //       Rank plus bas car ce n'est qu'une possibilité, pas une traduction effective
  for (const a of analyses) {
    if (chosenExactHits.has(a.word_key)) continue
    const senses = meaningsByAnalysis.get(a.id) || []
    for (const m of senses) {
      const senseNorm = normalize(m.sense)
      if (senseNorm === qNorm) {
        push(a, 'sens possible', m.sense, 74)
      }
      const senseArNorm = normalize(m.sense_ar || '')
      if (senseArNorm && senseArNorm === qNorm) {
        push(a, 'sens arabe', m.sense_ar || '', 74)
      }
      const conceptNorm = normalize(m.concept || '')
      // Concept : match exact, préfixe strict, ou substring pour queries longues (4+)
      if (conceptNorm) {
        if (conceptNorm === qNorm) {
          push(a, 'concept', m.concept || '', 80)
        } else if (qNorm.length >= 4 && (conceptNorm.startsWith(qNorm) || conceptNorm.startsWith(qNorm + '/') || conceptNorm.startsWith(qNorm + ' '))) {
          push(a, 'concept', m.concept || '', 74)
        } else if (qNorm.length >= 5 && conceptNorm.includes('/' + qNorm)) {
          push(a, 'concept', m.concept || '', 72)
        }
      }
    }
  }

  // 6bis) Fallback squelette consonantique — pour les patterns arabes
  //       (« iman » → amn, « tuhsharuna » → hshr).
  //       Désactivé pour les queries qui ressemblent à des mots français
  //       (« bon » skel « bn » matcherait bny, ce qui est du bruit).
  if (qSkel.length >= 2 && !looksFrench) {
    for (const a of analyses) {
      if (scores.has(a.word_key)) continue
      const rich = richness.get(a.id) || 0
      if (rich < 4) continue   // racines pauvres écartées pour éviter le bruit
      const rootPhonSkel = normalize(a.root_phon || '').replace(/[aeiouy]/g, '').replace(/(.)\1+/g, '$1')
      const wordKeySkel = normalize(a.word_key || '').replace(/[aeiouy]/g, '').replace(/(.)\1+/g, '$1')

      // Match exact du squelette
      if (rootPhonSkel === qSkel && rootPhonSkel.length >= 2) {
        push(a, 'racine', a.root_phon || '', 76)
        continue
      }
      if (wordKeySkel === qSkel && wordKeySkel.length >= 2) {
        push(a, 'racine', a.word_key, 72)
        continue
      }
      // Substring : la racine apparaît dans le squelette de la query.
      // Score proportionnel à la longueur de la racine matchée : hshr (4) > shr (3).
      // Bonus supplémentaire si la racine occupe une grande part de la query.
      if (rootPhonSkel.length >= 3 && qSkel.includes(rootPhonSkel)) {
        const coverage = rootPhonSkel.length / qSkel.length
        const base = 70 + rootPhonSkel.length * 3 + Math.round(coverage * 8)
        push(a, 'racine', a.root_phon || '', Math.min(94, base))
        continue
      }
      if (wordKeySkel.length >= 3 && qSkel.includes(wordKeySkel)) {
        const coverage = wordKeySkel.length / qSkel.length
        const base = 68 + wordKeySkel.length * 3 + Math.round(coverage * 8)
        push(a, 'racine', a.word_key, Math.min(90, base))
        continue
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

  // Seuil minimal + tri
  const MIN_SCORE = 68
  // Détection d'une racine « dominante » pour cette traduction (count >= 20 = mot très fréquent)
  // Quand une racine écrase largement, on écarte les traductions à 1 seule occurrence (bruit)
  let hasDominantTraduction = false
  for (const [nk, wkMap] of chosenIndex.entries()) {
    if (nk !== qNorm) continue
    for (const entry of wkMap.values()) {
      if (entry.count >= 20) { hasDominantTraduction = true; break }
    }
    if (hasDominantTraduction) break
  }

  // Compte d'occurrences pour chaque word_key sur la traduction exactement recherchée
  const countByWk = new Map<string, number>()
  if (chosenIndex.has(qNorm)) {
    for (const [wk, entry] of chosenIndex.get(qNorm)!.entries()) countByWk.set(wk, entry.count)
  }

  const sorted = [...scores.values()]
    .filter(m => m.score >= MIN_SCORE)
    .filter(m => m.root_ar && m.root_ar.trim().length > 0)
    .filter(m => {
      const a = analysisByKeyLite.get(m.word_key)
      return a ? isReallyAnalyzed(a) : false
    })
    // Écarte les traductions rares (count=1) quand une racine dominante existe déjà
    .filter(m => {
      if (!hasDominantTraduction) return true
      if (m.matched_field !== 'traduction') return true
      const count = countByWk.get(m.word_key) || 0
      return count >= 3
    })
    .sort((a, b) => b.score - a.score || b._rich - a._rich)

  // Déduplication multi-passes :
  // 1) Par racine arabe (lettres triées) : yhd = h-d-y = permutation → collapse
  // 2) Par sens ou concept identique : si deux racines matchent via le même sens/concept,
  //    on ne garde que la plus riche (les stubs comme yhd/htd disparaissent au profit de h-d-y)
  const seenSorted = new Set<string>()
  const seenSnippet = new Map<string, number>()   // snippet → best score
  const deduped: typeof sorted = []
  for (const m of sorted) {
    // Clé par lettres triées (permutations collapse)
    const letters = m.root_ar.replace(/\s+/g, '').split('').sort().join('')
    if (seenSorted.has(letters)) continue

    // Pour sens/concept/sens arabe : dédup par snippet identique
    // (les concepts sont des identifiants uniques ; deux racines ne peuvent pas avoir « exactement le même concept »)
    if (m.matched_field === 'sens' || m.matched_field === 'concept' || m.matched_field === 'sens arabe') {
      const snippetKey = m.matched_field + '::' + m.matched_snippet.toLowerCase().trim()
      if (seenSnippet.has(snippetKey)) continue
      seenSnippet.set(snippetKey, m.score)
    }

    seenSorted.add(letters)
    deduped.push(m)
    if (deduped.length >= 8) break
  }

  // Enrichit chaque résultat avec les concepts de la racine + les traductions rencontrées
  const results = deduped.map(({ _rich, ...rest }) => {  // eslint-disable-line @typescript-eslint/no-unused-vars
    const a = analysisByKeyLite.get(rest.word_key)
    // Concepts uniques de la racine (préserve l'ordre d'apparition)
    const concepts: string[] = []
    if (a) {
      const seen = new Set<string>()
      for (const m of meaningsByAnalysis.get(a.id) || []) {
        if (m.concept && !seen.has(m.concept)) {
          seen.add(m.concept)
          concepts.push(m.concept)
        }
      }
    }
    // Traductions françaises effectivement utilisées pour cette racine
    const trSet = new Set<string>()
    if (a) {
      const senses = meaningsByAnalysis.get(a.id) || []
      // On collecte les sens qui ont vraiment été choisis
      for (const [nk, wkMap] of chosenIndex.entries()) {
        if (!wkMap.has(rest.word_key)) continue
        // On ne veut que les expressions complètes (pas les tokens split)
        // Un token est complet s'il correspond à un sens listé OU s'il s'agit du sense_chosen complet
        if (senses.some(s => normalize(s.sense) === nk)) {
          const sense = senses.find(s => normalize(s.sense) === nk)?.sense
          if (sense) trSet.add(sense)
        }
      }
    }
    return { ...rest, concepts: concepts.slice(0, 6), translations: [...trSet].slice(0, 8) }
  })

  return NextResponse.json({ results })
}
