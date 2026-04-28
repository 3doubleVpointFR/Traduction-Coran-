import { getSupabaseAdmin } from './supabase'
import {
  tagVerse,
  analyzeEtymology,
  analyzeEtymologyBatch,
  selectRetainedSense,
  reconstructVerse,
  cleanArabicText,
  getModelName,
  PROMPT_VERSION,
  type TaggedSegment,
  type SenseDecision,
} from './llm'
import { buckwalterToPhonetic } from './utils'

// ═══════════════════════════════════════════════════════════════════════════════
// Key normalization — strip diacritics so GPT keys match Claude keys
// ═══════════════════════════════════════════════════════════════════════════════

function normalizeKey(key: string): string {
  return key
    .replace(/ḥ/g, 'h')
    .replace(/ʿ/g, 'e')
    .replace(/ʾ/g, 'a')
    .replace(/ḍ/g, 'd')
    .replace(/ṣ/g, 's')
    .replace(/ṭ/g, 't')
    .replace(/ẓ/g, 'z')
    .replace(/ġ/g, 'gh')
    .replace(/ā/g, 'a')
    .replace(/ī/g, 'i')
    .replace(/ū/g, 'u')
    .replace(/Ḥ/g, 'H')
    .replace(/Ṣ/g, 'S')
    .replace(/Ṭ/g, 'T')
}

// ═══════════════════════════════════════════════════════════════════════════════
// Logging helpers
// ═══════════════════════════════════════════════════════════════════════════════

function logHeader(step: number, title: string) {
  console.log('')
  console.log(`╔${'═'.repeat(68)}╗`)
  console.log(`║  ÉTAPE ${step}/4 — ${title.padEnd(55)}║`)
  console.log(`╚${'═'.repeat(68)}╝`)
}

function logSubHeader(label: string) {
  console.log(`\n┌─── ${label} ${'─'.repeat(Math.max(0, 60 - label.length))}┐`)
}

function logRow(key: string, value: string | number) {
  console.log(`│  ${key}: ${value}`)
}

function logEnd(message?: string) {
  if (message) console.log(`└─── ✓ ${message}`)
  else console.log(`└${'─'.repeat(68)}┘`)
}

// ═══════════════════════════════════════════════════════════════════════════════
// Job management
// ═══════════════════════════════════════════════════════════════════════════════

export async function createJob(type: string, targetKey: string): Promise<number> {
  const db = getSupabaseAdmin()
  const { data, error } = await db
    .from('analysis_jobs')
    .insert({ type, target_key: targetKey, status: 'pending', step_total: 4, step_current: 0 })
    .select('id')
    .single()

  if (error) throw new Error(`Failed to create job: ${error.message}`)
  return data.id
}

export async function updateJobStatus(id: number, status: string, error?: string) {
  const updates: Record<string, unknown> = { status }
  if (status === 'running') updates.started_at = new Date().toISOString()
  if (status === 'done' || status === 'failed') updates.completed_at = new Date().toISOString()
  if (error) updates.error = error

  // Use direct REST API call to avoid Supabase client caching issues
  const url = process.env.SUPABASE_URL
  const key = process.env.SUPABASE_SERVICE_KEY
  if (!url || !key) {
    console.error(`[updateJobStatus] Missing SUPABASE_URL or SUPABASE_SERVICE_KEY`)
    return
  }

  const res = await fetch(`${url}/rest/v1/analysis_jobs?id=eq.${id}`, {
    method: 'PATCH',
    headers: {
      'apikey': key,
      'Authorization': `Bearer ${key}`,
      'Content-Type': 'application/json',
      'Prefer': 'return=representation',
    },
    body: JSON.stringify(updates),
  })

  if (!res.ok) {
    console.error(`[updateJobStatus] ERREUR HTTP ${res.status} pour job #${id} → ${status}`)
  } else {
    const data = await res.json()
    const actual = data?.[0]?.status
    console.log(`[updateJobStatus] Job #${id} → ${status} ${actual === status ? '✓ (confirmé)' : `⚠ LU: ${actual}`}`)
  }
}

async function updateJobStep(id: number, step: number, stepName: string, detail: string) {
  const db = getSupabaseAdmin()
  const { error } = await db.from('analysis_jobs').update({
    step_current: step,
    step: stepName,
    step_detail: detail,
  }).eq('id', id)
  if (error) console.error(`[updateJobStep] ERREUR step ${step} pour job #${id}:`, error.message)
}

// ═══════════════════════════════════════════════════════════════════════════════
// PIPELINE v6 — 4 ÉTAPES
// ═══════════════════════════════════════════════════════════════════════════════

export async function runVerseAnalysisPipeline(
  jobId: number,
  surahId: number,
  verseNum: number
) {
  const db = getSupabaseAdmin()
  const t0 = Date.now()

  try {
    await updateJobStatus(jobId, 'running')
    const verseRef = `${surahId}:${verseNum}`

    const { LLM_PROVIDER } = await import('./llm')
    const llmLabel = LLM_PROVIDER === 'claude' ? '🟣 Claude' : '🟢 GPT-4o'

    console.log('')
    console.log('╔══════════════════════════════════════════════════════════════════════╗')
    console.log(`║  PIPELINE v6 — Verset ${verseRef.padEnd(44)}║`)
    console.log(`║  Job #${jobId} — Prompt ${PROMPT_VERSION} — LLM: ${llmLabel.padEnd(30)}║`)
    console.log('╚══════════════════════════════════════════════════════════════════════╝')

    // Fetch verse
    const { data: verse, error: verseErr } = await db
      .from('verses')
      .select('id, surah_id, verse_num, arabic_text')
      .eq('surah_id', surahId)
      .eq('verse_num', verseNum)
      .single()

    if (verseErr || !verse) throw new Error(`Verse ${verseRef} not found`)

    const cleanedArabic = cleanArabicText(verse.arabic_text ?? '')
    console.log(`\nVerset: ${cleanedArabic}`)

    // Get surah name
    const { data: surahData } = await db
      .from('surahs')
      .select('name_fr, name_latin')
      .eq('id', surahId)
      .single()
    const surahName = surahData ? `${surahData.name_latin} (${surahData.name_fr})` : `Sourate ${surahId}`

    // ══════════════════════════════════════════════════════════════════════════
    // ÉTAPE 1 — TAG VERSE
    // ══════════════════════════════════════════════════════════════════════════
    logHeader(1, `TAG VERSE — ${surahName} — ${verseRef}`)
    await updateJobStep(jobId, 1, 'tagging', 'Identification des segments...')
    const t1 = Date.now()

    const { segments: rawSegments } = await tagVerse(verseRef, cleanedArabic)
    // Sort by position and deduplicate consecutive same arabic
    const sorted = [...rawSegments].sort((a, b) => (a.position ?? 0) - (b.position ?? 0))
    const taggedSegments = sorted.filter((s, i) => i === 0 || s.arabic !== sorted[i - 1].arabic)
    const importantWords = taggedSegments.filter(s => s.type === 'important')
    // Normalize word keys to strip diacritics (GPT uses ḥmd, Claude uses hmd)
    for (const w of importantWords) { if (w.key) w.key = normalizeKey(w.key) }
    const particles = taggedSegments.filter(s => s.type === 'particle')

    // Build phonetic reading of the verse with markers
    const phonReading = taggedSegments.map(s => {
      if (s.type === 'important') return `[${s.phon}]`
      return s.phon
    }).join(' ')
    console.log(`│  ${importantWords.length} mots importants, ${particles.length} particules`)
    console.log(`│`)
    console.log(`│  PHONÉTIQUE : ${phonReading}`)
    console.log(`│  (les [crochets] = mots importants analysés)`)
    console.log(`│`)
    console.log(`│  LECTURE DU VERSET (dans l'ordre) :`)
    console.log(`│  ${'─'.repeat(60)}`)
    for (const s of taggedSegments) {
      if (s.type === 'important') {
        console.log(`│`)
        console.log(`│  ${s.position}. ★ MOT IMPORTANT : ${s.arabic}  →  ${s.phon}  [${s.key}]`)
        console.log(`│     ┌─ FORME : ${s.pos ?? '?'} · ${s.gender ?? '?'} · ${s.number ?? '?'}`)
        console.log(`│     ├─ CAS : ${s.case_i18n ?? 'non déterminé'} · ${s.definite ? '✓ défini (al-)' : '○ indéfini'}${s.idafa ? ' · ✓ iḍāfa (annexion)' : ''}`)
        if (s.pos === 'verbe') {
          console.log(`│     ├─ VERBE : voix=${s.voice ?? '?'} · temps=${s.tense ?? '?'} · personne=${s.person ?? '?'} · forme=${s.verb_form ?? '?'}`)
        }
        if (s.preceded_by_negation) {
          console.log(`│     ├─ ⚠ NÉGATION : particule "${s.negation_particle}" gouverne ce mot`)
        }
        const ctx = [
          s.emphatic_inna ? '✓ emphase (inna)' : null,
          s.oath ? '✓ serment (wa-)' : null,
          s.consequential_fa ? '✓ conséquence (fa-)' : null,
          s.emphatic_pronoun ? '✓ emphase pronominale (huwa/hiya)' : null,
        ].filter(Boolean)
        if (ctx.length) console.log(`│     ├─ CONTEXTE : ${ctx.join(' · ')}`)
        const affixes = [
          s.prefix_particle ? `préfixe détaché: ${s.prefix_particle}` : null,
          s.suffix_pronoun ? `suffixe pronominal: ${s.suffix_pronoun}` : null,
        ].filter(Boolean)
        if (affixes.length) console.log(`│     ├─ AFFIXES : ${affixes.join(' · ')}`)
        console.log(`│     └─ RACINE : ${s.root}`)
      } else {
        console.log(`│  ${s.position}. · particule : ${s.arabic}  →  ${s.phon}  →  "${s.fr}"`)
      }
    }
    console.log(`│  ${'─'.repeat(60)}`)
    logEnd(`Étape 1 terminée en ${((Date.now() - t1) / 1000).toFixed(1)}s`)

    // ══════════════════════════════════════════════════════════════════════════
    // ÉTAPES 2-3 — PAR MOT IMPORTANT
    // ══════════════════════════════════════════════════════════════════════════
    const analyzedWords: { key: string; arabic: string; retenu: string; position: number; nonRetenus?: string[] }[] = []

    for (let wi = 0; wi < importantWords.length; wi++) {
      const word = importantWords[wi]
      const wordLabel = `${word.arabic} [${word.key}]`
      const wordNum = `(${wi + 1}/${importantWords.length})`
      const wordPosition = word.position ?? wi + 1

      console.log('')
      console.log(`┃  MOT ${wordNum}: ${wordLabel} pos=${wordPosition}`)

      // ── Skip words without key or root (pronouns like iyyāka misclassified as important) ──
      if (!word.key || !word.root) {
        console.log(`│  ⚠ Mot sans racine/clé — traité comme particule, skip étapes 2-3`)
        continue
      }

      // ── Check existing etymology ──
      const { data: existing } = await db
        .from('word_analyses')
        .select('id, analysis_step, prompt_version')
        .eq('word_key', word.key!)
        .single()

      let analysisId = existing?.id

      // ── Check if already analyzed for THIS verse + position ──
      const { data: existingVwa } = await db.from('verse_word_analyses')
        .select('sense_chosen')
        .eq('verse_id', verse.id)
        .eq('word_key', word.key!)
        .eq('position', wordPosition)
        .single()

      if (existingVwa) {
        console.log(`│  ✓ Sens déjà analysé pour ${word.key} en ${verseRef} position ${wordPosition} — skip`)
        const { data: allSenses } = await db.from('word_meanings')
          .select('sense').eq('analysis_id', analysisId!).eq('meaning_type', 'etymology')
        const nonRetenus = (allSenses ?? []).map(s => s.sense).filter(s => s !== existingVwa.sense_chosen)
        analyzedWords.push({ key: word.key!, arabic: word.arabic, retenu: existingVwa.sense_chosen ?? '', position: wordPosition, nonRetenus })
        continue
      }

      // ── ÉTAPE 2: ÉTYMOLOGIE (permanent, skip si existe) ──
      if (existing && existing.analysis_step) {
        // Log détaillé : afficher les sens et descriptions en base
        const { data: existingSenses } = await db.from('word_meanings')
          .select('sense, description').eq('analysis_id', existing.id).eq('meaning_type', 'etymology').order('display_order')
        console.log(`│  ✓ Étymologie réutilisée depuis DB pour ${word.key} (${(existingSenses ?? []).length} sens) :`)
        for (const s of (existingSenses ?? [])) {
          console.log(`│    • ${s.sense} — ${(s.description ?? '').substring(0, 80)}...`)
        }
      } else {
        logHeader(2, `ÉTYMOLOGIE — ${wordLabel} — ${verseRef}`)
        await updateJobStep(jobId, 2, 'etymology', `Étymologie de ${wordLabel} ${wordNum}`)
        const t2 = Date.now()

        const pos = word.pos ?? undefined
        console.log(`│  Mot: ${word.arabic} | Racine: ${word.root} | POS: ${pos ?? '?'}`)

        const etymResult = await analyzeEtymology(word.arabic, word.root!, verseRef, pos, {
          voice: word.voice,
          tense: word.tense,
          preceded_by_negation: word.preceded_by_negation,
          negation_particle: word.negation_particle,
          definite: word.definite,
        })

        // Count total occurrences of this root in the Coran (QAC)
        // Normalize: remove spaces + hamza variants → plain alif for matching
        const rootNoSpaces = (word.root ?? '').replace(/\s+/g, '').replace(/[أإآٱ]/g, 'ا')
        const { count: qacCount } = await db
          .from('words')
          .select('id', { count: 'exact', head: true })
          .eq('root', rootNoSpaces)
        const totalOcc = qacCount ?? 0
        console.log(`│  📊 ${totalOcc} occurrences de la racine "${rootNoSpaces}" dans le Coran`)

        const { data: inserted, error: insertErr } = await db
          .from('word_analyses')
          .upsert({
            word_key: word.key!,
            root_ar: word.root!,
            root_phon: etymResult.root_phon,
            root_meaning: etymResult.root_meaning,
            total_occurrences: totalOcc,
            model_used: getModelName(),
            prompt_version: PROMPT_VERSION,
            analysis_step: 'senses_done',
          }, { onConflict: 'word_key' })
          .select('id')
          .single()

        if (insertErr) throw new Error(`Failed to insert analysis: ${insertErr.message}`)
        analysisId = inserted.id

        // Delete old meanings
        await db.from('word_meanings').delete().eq('analysis_id', analysisId)

        // Insert etymology senses
        if (etymResult.senses?.length) {
          await db.from('word_meanings').insert(
            etymResult.senses.map((s, i) => ({
              analysis_id: analysisId!,
              meaning_type: 'etymology',
              sense: s.sense,
              sense_ar: s.sense_ar,
              description: s.description,
              display_order: i,
            }))
          )
        }

        // Insert daily phrases — SKIP if phrases already exist for this root
        const { count: existingDaily } = await db.from('word_daily').select('*', { count: 'exact', head: true }).eq('analysis_id', analysisId)
        if ((existingDaily ?? 0) > 0) {
          console.log(`    [SKIP] ${existingDaily} daily phrases already exist for analysis_id=${analysisId}`)
        } else if (etymResult.daily?.length) {
          await db.from('word_daily').insert(
            etymResult.daily.map(d => ({
              analysis_id: analysisId!,
              arabic: d.ar,
              phon: d.phon,
              french: d.fr,
            }))
          )
        }

        console.log(`│  ✓ ${etymResult.senses?.length ?? 0} sens trouvés :`)
        for (const s of etymResult.senses ?? []) {
          console.log(`│     · ${s.sense} (${s.sense_ar}) — ${s.description?.substring(0, 80) ?? ''}`)
        }
        if (etymResult.daily?.length) {
          console.log(`│  📝 Expressions du quotidien :`)
          for (const d of etymResult.daily) {
            console.log(`│     · ${d.phon} — ${d.fr}`)
          }
        }
        logEnd(`Étape 2 terminée en ${((Date.now() - t2) / 1000).toFixed(1)}s`)
      }

      // ── ÉTAPE 3: SÉLECTION DU SENS ──
      logHeader(3, `SÉLECTION SENS — ${wordLabel} — ${verseRef} — mot ${wi + 1}/${importantWords.length}`)
      await updateJobStep(jobId, 3, 'selecting', `Sélection du sens ${wi + 1}/${importantWords.length} : ${wordLabel}`)
      const t3 = Date.now()

      const { data: etymSenses } = await db
        .from('word_meanings')
        .select('id, sense, sense_ar, description')
        .eq('analysis_id', analysisId!)
        .eq('meaning_type', 'etymology')
        .order('display_order')

      const { data: waData } = await db.from('word_analyses').select('root_phon').eq('id', analysisId!).single()
      const rootPhon = waData?.root_phon ?? word.key ?? ''

      console.log(`│  Sens à analyser : ${(etymSenses ?? []).map(s => s.sense).join(', ')}`)
      console.log(`│  Verset : ${verseRef} | Sourate : ${surahName}`)

      // Log des infos grammaticales du mot
      const gramTraits: string[] = []
      if (word.pos) gramTraits.push(`forme=${word.pos}`)
      if (word.gender) gramTraits.push(`genre=${word.gender}`)
      if (word.number) gramTraits.push(`nombre=${word.number}`)
      if (word.definite) gramTraits.push('DÉFINI (al-)')
      if (word.voice) gramTraits.push(`voix=${word.voice}`)
      if (word.tense) gramTraits.push(`temps=${word.tense}`)
      if (word.person) gramTraits.push(`personne=${word.person}`)
      if (word.preceded_by_negation) gramTraits.push(`NÉGATION (${word.negation_particle || '?'})`)
      if (word.idafa) gramTraits.push('idafa')
      if (word.emphatic_inna) gramTraits.push('emphase (inna)')
      if (word.oath) gramTraits.push('serment')
      if (word.suffix_pronoun) gramTraits.push(`suffixe=${word.suffix_pronoun}`)
      console.log(`│  Caractéristiques : ${gramTraits.length > 0 ? gramTraits.join(' | ') : 'aucune'}`)

      // Log de la structure du verset
      console.log(`│  Structure du verset envoyée à Claude :`)
      taggedSegments
        .sort((a: any, b: any) => (a.position ?? 0) - (b.position ?? 0))
        .forEach((seg: any) => {
          const isTarget = (seg.word_key === word.key || seg.key === word.key)
          if (seg.type === 'particle' || (!seg.word_key && !seg.key)) {
            console.log(`│    ${seg.position}. [PARTICULE] ${seg.phon} → "${seg.fr || ''}"`)
          } else {
            const traits: string[] = []
            if (seg.pos) traits.push(seg.pos)
            if (seg.voice) traits.push(seg.voice)
            if (seg.tense) traits.push(seg.tense)
            if (seg.preceded_by_negation) traits.push(`NÉG:${seg.negation_particle || 'oui'}`)
            if (seg.definite) traits.push('al-')
            const info = traits.length > 0 ? ` [${traits.join(', ')}]` : ''
            const marker = isTarget ? ' ← ANALYSÉ' : ''
            console.log(`│    ${seg.position}. [MOT CLÉ] ${seg.phon} (${seg.word_key || seg.key})${info}${marker}`)
          }
        })

      // Construire la structure complète du verset pour l'étape 3
      const verseStructure = taggedSegments.map((seg: any) => ({
        position: seg.position,
        type: seg.type ?? (seg.word_key ? 'important' : 'particle'),
        arabic: seg.arabic,
        phon: seg.phon,
        fr: seg.fr,
        word_key: seg.word_key ?? seg.key,
        pos: seg.pos,
        gender: seg.gender,
        number: seg.number,
        case_i18n: seg.case_i18n,
        definite: seg.definite,
        idafa: seg.idafa,
        voice: seg.voice,
        tense: seg.tense,
        person: seg.person,
        verb_form: seg.verb_form,
        preceded_by_negation: seg.preceded_by_negation,
        negation_particle: seg.negation_particle,
        emphatic_inna: seg.emphatic_inna,
        oath: seg.oath,
        consequential_fa: seg.consequential_fa,
        emphatic_pronoun: seg.emphatic_pronoun,
        prefix_particle: seg.prefix_particle,
        suffix_pronoun: seg.suffix_pronoun,
      }))

      const result = await selectRetainedSense(
        word.arabic,
        word.phon ?? word.key ?? '',
        word.root!,
        rootPhon,
        (etymSenses ?? []).map(s => ({
          sense: s.sense,
          sense_ar: s.sense_ar ?? '',
          description: s.description ?? '',
        })),
        verseRef,
        cleanedArabic,
        surahName,
        {
          pos: word.pos,
          preceded_by_negation: word.preceded_by_negation,
          negation_particle: word.negation_particle,
          definite: word.definite,
        },
        verseStructure,
      )

      // Validate retenu
      const senseNames = (etymSenses ?? []).map(s => s.sense)
      let validRetenu = result.retenu
      if (!senseNames.includes(validRetenu)) {
        const match = senseNames.find(s => s.toLowerCase() === validRetenu.toLowerCase())
        if (match) {
          validRetenu = match
        } else {
          const retenuDecision = result.senses.find(d => d.classification === 'retenu')
          if (retenuDecision && senseNames.includes(retenuDecision.sense)) {
            validRetenu = retenuDecision.sense
          } else {
            validRetenu = senseNames[0] ?? validRetenu
          }
          console.log(`│  ⚠ retenu "${result.retenu}" ne matche aucun sens → corrigé en "${validRetenu}"`)
        }
      }

      console.log(`│  ★ SENS RETENU: "${validRetenu}"`)
      console.log(`│`)
      for (const d of result.senses) {
        const icon = d.classification === 'retenu' ? '★' : d.classification === 'probable' ? '◆' : d.classification === 'peu_probable' ? '◇' : '✗'
        console.log(`│  ${icon} ${d.sense} [${d.classification}]`)
        if (d.resume) {
          console.log(`│    Résumé: ${d.resume.substring(0, 120)}`)
        }
        if (d.axes) {
          const axes = d.axes as Record<string, string>
          if (axes.axe1_champ_lexical) console.log(`│    Axe 1 (verset): ${axes.axe1_champ_lexical.substring(0, 100)}`)
          if (axes.axe2_versets_voisins) console.log(`│    Axe 2 (voisins): ${axes.axe2_versets_voisins.substring(0, 100)}`)
          if (axes.axe3_theme_sourate) console.log(`│    Axe 3 (sourate): ${axes.axe3_theme_sourate.substring(0, 100)}`)
          if (axes.axe4_coherence_coranique) console.log(`│    Axe 4 (cohérence): ${axes.axe4_coherence_coranique.substring(0, 100)}`)
          if (axes.axe5_finalite_khalifa) console.log(`│    Axe 5 (khalīfa): ${axes.axe5_finalite_khalifa.substring(0, 100)}`)
        }
        console.log(`│`)
      }

      // Update retenu global — only if first occurrence of this word in the verse
      // (avoid overwriting "engendrer" with "naître" for wld appearing twice)
      const isFirstOccurrence = !analyzedWords.some(w => w.key === word.key)
      if (isFirstOccurrence) {
        await db.from('word_analyses').update({
          retenu: validRetenu,
          analysis_step: 'sense_selected',
        }).eq('id', analysisId!)
      } else {
        await db.from('word_analyses').update({
          analysis_step: 'sense_selected',
        }).eq('id', analysisId!)
      }

      // Store in verse_word_analyses (keyed by verse_id + word_key + position)
      await db.from('verse_word_analyses')
        .delete()
        .eq('verse_id', verse.id)
        .eq('word_key', word.key!)
        .eq('position', wordPosition)

      const retenuDecision = result.senses.find(d => d.sense === validRetenu)

      await db.from('verse_word_analyses').insert({
        verse_id: verse.id,
        word_key: word.key!,
        root: word.root!,
        position: wordPosition,
        sense_chosen: validRetenu,
        analysis_axes: retenuDecision?.axes ?? null,
        reason: retenuDecision?.resume ?? '',
        model_used: getModelName(),
        prompt_version: PROMPT_VERSION,
      })

      // Update word_meanings with classification + axes + resume
      for (const decision of result.senses) {
        // Map classification to old status for UI compat
        const status = decision.classification === 'retenu' ? 'ok'
          : decision.classification === 'probable' ? 'maybe'
          : 'no'

        await db.from('word_meanings').update({
          status: decision.classification || status,
          proof_ctx: decision.resume ?? '',
          axe1_verset: decision.axes?.axe1_champ_lexical ?? '',
          axe2_voisins: decision.axes?.axe2_versets_voisins ?? '',
          axe3_sourate: decision.axes?.axe3_theme_sourate ?? '',
          axe4_coherence: decision.axes?.axe4_coherence_coranique ?? '',
          axe5_frequence: decision.axes?.axe5_finalite_khalifa ?? '',
        }).eq('analysis_id', analysisId!).eq('sense', decision.sense)
      }

      // Build proof from verse_word_analyses (server-side)
      const rootNorm = (word.root ?? '').replace(/\s+/g, '')
      for (const decision of result.senses) {
        const { data: proofEntry } = await db
          .from('verse_word_analyses')
          .select('verse_id')
          .eq('word_key', word.key!)
          .eq('sense_chosen', decision.sense)
          .neq('verse_id', verse.id)
          .limit(1)

        if (proofEntry && proofEntry.length > 0) {
          const proofVerseId = proofEntry[0].verse_id
          const { data: proofVerse } = await db
            .from('verses')
            .select('surah_id, verse_num')
            .eq('id', proofVerseId)
            .single()

          if (proofVerse) {
            const proofRef = `${proofVerse.surah_id}:${proofVerse.verse_num}`
            const { data: proofWords } = await db
              .from('words')
              .select('transliteration, root')
              .eq('verse_id', proofVerseId)
              .order('position')

            const proofPhon = (proofWords ?? []).map(w => {
              const t = buckwalterToPhonetic(w.transliteration || '')
              const isRoot = (w.root ?? '').replace(/\s+/g, '') === rootNorm
              return isRoot ? `**${t.toUpperCase()}**` : t
            }).filter(Boolean).join(' ')

            await db.from('word_meanings').update({
              proof_ref: proofRef,
              proof_phon: proofPhon,
            }).eq('analysis_id', analysisId!).eq('sense', decision.sense)
          }
        }
      }

      logEnd(`Étape 3 terminée en ${((Date.now() - t3) / 1000).toFixed(1)}s`)

      // Collect non-retenus for reconstruction
      const nonRetenus = senseNames.filter(s => s !== validRetenu)
      analyzedWords.push({ key: word.key!, arabic: word.arabic, retenu: validRetenu, position: wordPosition, nonRetenus })
    }

    // ══════════════════════════════════════════════════════════════════════════
    // ÉTAPE 4 — RECONSTRUCTION DU VERSET
    // ══════════════════════════════════════════════════════════════════════════
    logHeader(4, `RECONSTRUCTION — ${verseRef}`)
    await updateJobStep(jobId, 4, 'reconstructing', 'Reconstruction du verset...')
    const t4 = Date.now()

    logSubHeader('Segments envoyés à l\'étape 4')
    for (const s of taggedSegments) {
      if (s.type === 'particle') {
        // Check if this particle will be absorbed
        const isNeg = ['lam', 'lā', 'lan', 'mā', 'laysa'].includes(s.phon?.toLowerCase() ?? '')
        const nextImportant = taggedSegments.find(ts => ts.type === 'important' && (ts.position ?? 0) > (s.position ?? 0) && ts.preceded_by_negation)
        const absorbed = isNeg && nextImportant
        if (absorbed) {
          console.log(`│    ⊘ ${s.arabic} (${s.phon}) → ABSORBÉE dans le verbe "${nextImportant.arabic}"`)
        } else {
          console.log(`│    · ${s.arabic} (${s.phon}) → "${s.fr}"`)
        }
      } else {
        const w = analyzedWords.find(aw => aw.key === s.key)
        console.log(`│`)
        console.log(`│    ★ ${s.arabic} (${s.phon}) [${s.key}]`)
        console.log(`│      ┌─ FORME : ${s.pos ?? '?'} · ${s.gender ?? '-'} · ${s.number ?? '-'}`)
        console.log(`│      ├─ CAS : ${s.case_i18n ?? '-'} · ${s.definite ? '✓ défini' : '○ indéfini'}${s.idafa ? ' · ✓ iḍāfa' : ''}`)
        if (s.pos === 'verbe') {
          console.log(`│      ├─ VERBE : voix=${s.voice ?? '-'} · temps=${s.tense ?? '-'} · pers=${s.person ?? '-'} · forme=${s.verb_form ?? '-'}`)
        }
        if (s.preceded_by_negation) {
          console.log(`│      ├─ ⚠ NÉGATION : ${s.negation_particle ?? '?'}`)
        }
        const ctx = [
          s.emphatic_inna ? 'inna' : null,
          s.oath ? 'serment' : null,
          s.consequential_fa ? 'fa-' : null,
          s.emphatic_pronoun ? 'emphase' : null,
        ].filter(Boolean)
        if (ctx.length) console.log(`│      ├─ CONTEXTE : ${ctx.join(' · ')}`)
        if (s.prefix_particle) console.log(`│      ├─ PRÉFIXE : ${s.prefix_particle}`)
        if (s.suffix_pronoun) console.log(`│      ├─ SUFFIXE : ${s.suffix_pronoun}`)
        console.log(`│      ├─ sens retenu: "${w?.retenu ?? '?'}"`)
        if (w?.nonRetenus?.length) console.log(`│      └─ sens interdits: [${w.nonRetenus.join(', ')}]`)
        else console.log(`│      └─`)
      }
    }

    let reconResult = await reconstructVerse(
      verseRef, cleanedArabic, analyzedWords, taggedSegments
    )

    let translationArab = reconResult.translation_arab || ''

    // ── Vérification : la traduction Arab ne doit pas contenir un sens non retenu ──
    const allNonRetenus = analyzedWords.flatMap(w => w.nonRetenus ?? [])
    console.log(`│  Vérification Arab — sens interdits : [${allNonRetenus.join(', ')}]`)
    const foundForbidden = allNonRetenus.filter(nr =>
      translationArab.toLowerCase().split(/\s+/).some(word =>
        word.replace(/[.,;:!?'"]/g, '').toLowerCase() === nr.toLowerCase()
      )
    )

    if (foundForbidden.length > 0) {
      console.log(`│  ⚠ Traduction Arab contient des sens non retenus : ${foundForbidden.join(', ')}`)
      console.log(`│  → Relance avec correction...`)

      const { getOpenAI } = await import('./llm')
      const openai = getOpenAI()
      const correctionResponse = await openai.chat.completions.create({
        model: 'gpt-4o',
        temperature: 0,
        response_format: { type: 'json_object' },
        messages: [
          {
            role: 'system',
            content: `Tu as produit cette traduction Arab : "${translationArab}"

ERREUR DÉTECTÉE : tu as utilisé le(s) mot(s) "${foundForbidden.join(', ')}" qui correspond(ent) à un sens NON RETENU de la liste étymologique.

Règle : la traduction Arab ne doit JAMAIS contenir un mot qui est un sens non retenu. Reformule en utilisant le sens retenu ou un synonyme qui n'est pas dans la liste des sens.

Sens retenus : ${analyzedWords.map(w => `${w.key} = "${w.retenu}"`).join(', ')}
Sens interdits : ${allNonRetenus.join(', ')}

Réponds en JSON : { "translation_arab": "la traduction corrigée" }`
          },
          { role: 'user', content: 'Corrige la traduction Arab.' }
        ]
      })

      try {
        const correction = JSON.parse(correctionResponse.choices[0]?.message?.content ?? '{}')
        if (correction.translation_arab) {
          translationArab = correction.translation_arab
          console.log(`│  ✓ Traduction corrigée : ${translationArab}`)
        }
      } catch { /* keep original if parse fails */ }
    }

    // SOURCE DE VÉRITÉ : taggedSegments de l'étape 1
    // On part des segments de l'étape 1 (qui contient TOUTES les particules + mots importants)
    // et on enrichit les mots importants avec le fr de l'étape 4

    // Build lookup: étape 4 retourne des segments avec fr pour les mots importants
    // On les matche par arabic text dans l'ordre
    const step4ImportantSegments = reconResult.segments.filter(s => s.type === 'important' || s.sense_retenu)
    let step4Idx = 0

    const finalSegments = taggedSegments.map(ts => {
      if (ts.type === 'particle') {
        // Particule — utilise le fr de l'étape 1 directement
        return {
          arabic: ts.arabic,
          phon: ts.phon ?? '',
          fr: ts.fr ?? '',
          word_key: null,
          is_particle: true,
        }
      }

      // Mot important — cherche le fr correspondant dans l'étape 4
      let fr = ''
      let senseRetenu = ''
      while (step4Idx < step4ImportantSegments.length) {
        const s4 = step4ImportantSegments[step4Idx]
        step4Idx++
        if (s4.arabic === ts.arabic) {
          const s4Any = s4 as unknown as Record<string, string>
          fr = s4.fr || s4Any.fr_arab || s4Any.fr_meditational || ''
          senseRetenu = s4.sense_retenu || ''
          break
        }
      }

      // Fallback: utilise le sens retenu de analyzedWords
      if (!senseRetenu) {
        const aw = analyzedWords.find(w => w.key === ts.key)
        senseRetenu = aw?.retenu ?? ''
      }

      return {
        arabic: ts.arabic,
        phon: ts.phon ?? '',
        fr: fr || senseRetenu,
        word_key: ts.key ?? null,
        is_particle: false,
        sense_retenu: senseRetenu,
        pos: ts.pos,
        voice: ts.voice,
        position: ts.position ?? undefined,
      }
    })

    const translationExplanation = reconResult.translation_explanation || ''

    await db.from('verse_analyses').upsert({
      verse_id: verse.id,
      segments: finalSegments,
      full_translation: translationArab,
      translation_arab: translationArab,
      translation_explanation: translationExplanation,
      model_used: getModelName(),
      prompt_version: PROMPT_VERSION,
    }, { onConflict: 'verse_id' })

    logSubHeader('Transformations sens → mot conjugué')
    for (const seg of reconResult.segments) {
      const segAny2 = seg as unknown as Record<string, string>
      if (seg.type === 'important' && segAny2.transformation) {
        console.log(`│  ★ ${seg.arabic} : ${segAny2.transformation}`)
      }
    }
    if (translationExplanation) {
      logSubHeader('Démarche de la traduction')
      console.log(`│  ${translationExplanation.substring(0, 300)}`)
    }
    const translationMed = reconResult.translation_meditational || ''
    logSubHeader('Traductions')
    if (translationMed) console.log(`│  Méditationnelle : ${translationMed}`)
    console.log(`│  Arab            : ${translationArab}`)
    logSubHeader('Segments finaux')
    for (const seg of finalSegments) {
      const tag = seg.is_particle ? '·' : '★'
      console.log(`│  ${tag} ${seg.arabic}  →  ${seg.phon}  →  "${seg.fr}"  [${seg.word_key ?? '-'}]`)
    }
    logEnd(`Étape 4 terminée en ${((Date.now() - t4) / 1000).toFixed(1)}s`)

    // ══════════════════════════════════════════════════════════════════════════
    // FIN
    // ══════════════════════════════════════════════════════════════════════════
    try {
      await updateJobStatus(jobId, 'done')
      console.log(`│  ✓ Job #${jobId} marqué comme terminé`)
    } catch (e) {
      console.error(`│  ⚠ Erreur mise à jour job status:`, e)
    }
    const totalTime = ((Date.now() - t0) / 1000).toFixed(1)

    console.log('')
    console.log('╔══════════════════════════════════════════════════════════════════════╗')
    console.log(`║  ✓ PIPELINE TERMINÉ — ${verseRef.padEnd(47)}║`)
    console.log(`║  ${analyzedWords.length} mots analysés — ${totalTime}s total${' '.repeat(Math.max(0, 40 - totalTime.length))}║`)
    console.log('╚══════════════════════════════════════════════════════════════════════╝')

    return { success: true, wordsAnalyzed: analyzedWords.length }
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error'
    console.error(`[Pipeline] Error: ${message}`)
    await updateJobStatus(jobId, 'failed', message)
    throw err
  }
}

// ═══════════════════════════════════════════════════════════════════════════════
// PIPELINE PAS CHERE — Etape 2 en batch, etape 3 mot par mot
// ═══════════════════════════════════════════════════════════════════════════════

export async function runVerseAnalysisPipelinePasChere(
  jobId: number,
  surahId: number,
  verseNum: number
) {
  const db = getSupabaseAdmin()
  const t0 = Date.now()

  try {
    await updateJobStatus(jobId, 'running')
    const verseRef = `${surahId}:${verseNum}`

    const { LLM_PROVIDER } = await import('./llm')
    const llmLabel = LLM_PROVIDER === 'claude' ? '🟣 Claude' : '🟢 GPT-4o'

    console.log('')
    console.log('╔══════════════════════════════════════════════════════════════════════╗')
    console.log(`║  PIPELINE PAS CHERE v6 — Verset ${verseRef.padEnd(35)}║`)
    console.log(`║  Job #${jobId} — Prompt ${PROMPT_VERSION} — LLM: ${llmLabel.padEnd(30)}║`)
    console.log('╚══════════════════════════════════════════════════════════════════════╝')

    const { data: verse, error: verseErr } = await db
      .from('verses')
      .select('id, surah_id, verse_num, arabic_text')
      .eq('surah_id', surahId)
      .eq('verse_num', verseNum)
      .single()

    if (verseErr || !verse) throw new Error(`Verse ${verseRef} not found`)

    const cleanedArabic = cleanArabicText(verse.arabic_text ?? '')
    console.log(`\nVerset: ${cleanedArabic}`)

    const { data: surahData } = await db
      .from('surahs')
      .select('name_fr, name_latin')
      .eq('id', surahId)
      .single()
    const surahName = surahData ? `${surahData.name_latin} (${surahData.name_fr})` : `Sourate ${surahId}`

    // ETAPE 1 — TAG VERSE
    logHeader(1, `TAG VERSE — ${surahName} — ${verseRef}`)
    await updateJobStep(jobId, 1, 'tagging', 'Identification des segments...')
    const t1 = Date.now()

    const { segments: rawSegments } = await tagVerse(verseRef, cleanedArabic)
    const sorted = [...rawSegments].sort((a, b) => (a.position ?? 0) - (b.position ?? 0))
    const taggedSegments = sorted.filter((s, i) => i === 0 || s.arabic !== sorted[i - 1].arabic)
    const importantWords = taggedSegments.filter(s => s.type === 'important')
    // Normalize word keys to strip diacritics (GPT uses ḥmd, Claude uses hmd)
    for (const w of importantWords) { if (w.key) w.key = normalizeKey(w.key) }
    const particles = taggedSegments.filter(s => s.type === 'particle')

    console.log(`│  ${importantWords.length} mots importants, ${particles.length} particules`)
    for (const s of taggedSegments) {
      if (s.type === 'important') {
        console.log(`│  ${s.position}. ★ ${s.arabic}  →  ${s.phon}  [${s.key}]`)
      } else {
        console.log(`│  ${s.position}. · ${s.arabic}  →  ${s.phon}  →  "${s.fr}"`)
      }
    }
    logEnd(`Etape 1 terminee en ${((Date.now() - t1) / 1000).toFixed(1)}s`)

    // ETAPE 2 BATCH — ETYMOLOGIE EN 1 SEUL APPEL
    const wordsNeedingEtym: { arabic: string; root: string; key: string }[] = []

    for (const word of importantWords) {
      if (!word.key || !word.root) continue
      const { data: existing } = await db
        .from('word_analyses')
        .select('id, analysis_step')
        .eq('word_key', word.key!)
        .single()
      if (existing && existing.analysis_step) {
        // Log détaillé : afficher les sens et descriptions en base
        const { data: senses } = await db.from('word_meanings')
          .select('sense, description').eq('analysis_id', existing.id).eq('meaning_type', 'etymology').order('display_order')
        console.log(`│  ✓ Etymologie deja en base pour ${word.key} (${(senses ?? []).length} sens) :`)
        for (const s of (senses ?? [])) {
          console.log(`│    • ${s.sense} — ${(s.description ?? '').substring(0, 80)}...`)
        }
      } else {
        wordsNeedingEtym.push({ arabic: word.arabic, root: word.root!, key: word.key! })
      }
    }

    if (wordsNeedingEtym.length > 0) {
      logHeader(2, `ETYMOLOGIE BATCH — ${wordsNeedingEtym.length} racines — ${verseRef}`)
      await updateJobStep(jobId, 2, 'etymology_batch', `Etymologie batch de ${wordsNeedingEtym.length} racines`)
      const t2 = Date.now()

      let batchResults = await analyzeEtymologyBatch(wordsNeedingEtym, verseRef)
      if (!Array.isArray(batchResults)) {
        const raw = batchResults as any
        batchResults = raw.roots || raw.results || raw.data || (Object.values(raw).find((v: any) => Array.isArray(v)) as any) || [raw]
        console.log(`│  Resultat batch normalise — ${(batchResults as any[]).length} racines`)
      }

      for (const w of wordsNeedingEtym) {
        const etymResult = batchResults.find(r => r.root === w.root)
        if (!etymResult) { console.log(`│  ⚠ Pas de resultat pour ${w.key}`); continue }

        const rootNoSpaces = w.root.replace(/\s+/g, '').replace(/[أإآٱ]/g, 'ا')
        const { count: qacCount } = await db
          .from('words').select('id', { count: 'exact', head: true }).eq('root', rootNoSpaces)
        const totalOcc = qacCount ?? 0

        const { data: inserted, error: insertErr } = await db
          .from('word_analyses')
          .upsert({
            word_key: w.key, root_ar: w.root, root_phon: etymResult.root_phon,
            root_meaning: etymResult.root_meaning, total_occurrences: totalOcc,
            model_used: getModelName(), prompt_version: PROMPT_VERSION, analysis_step: 'senses_done',
          }, { onConflict: 'word_key' })
          .select('id').single()

        if (insertErr) throw new Error(`Failed to insert: ${insertErr.message}`)

        await db.from('word_meanings').delete().eq('analysis_id', inserted.id)
        if (etymResult.senses?.length) {
          await db.from('word_meanings').insert(
            etymResult.senses.map((s: any, i: number) => ({
              analysis_id: inserted.id, meaning_type: 'etymology',
              sense: s.sense, sense_ar: s.sense_ar, description: s.description, display_order: i,
            }))
          )
        }

        // Insert daily phrases — SKIP if already exist
        const { count: existingDailyNew } = await db.from('word_daily').select('*', { count: 'exact', head: true }).eq('analysis_id', inserted.id)
        if ((existingDailyNew ?? 0) > 0) {
          console.log(`│  [SKIP] daily phrases already exist for ${w.key}`)
        } else if (etymResult.daily?.length) {
          await db.from('word_daily').insert(
            etymResult.daily.map((d: any) => ({ analysis_id: inserted.id, arabic: d.ar, phon: d.phon, french: d.fr }))
          )
        }

        console.log(`│  ✓ ${w.key} : ${etymResult.senses?.length ?? 0} sens — ${totalOcc} occ.`)
      }

      logEnd(`Etape 2 BATCH terminee en ${((Date.now() - t2) / 1000).toFixed(1)}s`)
    } else {
      console.log(`│  ✓ Toutes les etymologies deja en base`)
    }

    // ETAPE 3 — SELECTION DU SENS (mot par mot)
    const analyzedWords: { key: string; arabic: string; retenu: string; position: number; nonRetenus?: string[] }[] = []

    const verseStructure = taggedSegments.map((seg: any) => ({
      position: seg.position,
      type: seg.type ?? (seg.word_key ? 'important' : 'particle'),
      arabic: seg.arabic, phon: seg.phon, fr: seg.fr,
      word_key: seg.word_key ?? seg.key, pos: seg.pos,
      gender: seg.gender, number: seg.number, case_i18n: seg.case_i18n,
      definite: seg.definite, idafa: seg.idafa, voice: seg.voice,
      tense: seg.tense, person: seg.person, verb_form: seg.verb_form,
      preceded_by_negation: seg.preceded_by_negation, negation_particle: seg.negation_particle,
      emphatic_inna: seg.emphatic_inna, oath: seg.oath,
      consequential_fa: seg.consequential_fa, emphatic_pronoun: seg.emphatic_pronoun,
      prefix_particle: seg.prefix_particle, suffix_pronoun: seg.suffix_pronoun,
    }))

    for (let wi = 0; wi < importantWords.length; wi++) {
      const word = importantWords[wi]
      const wordLabel = `${word.arabic} [${word.key}]`
      const wordPosition = word.position ?? wi + 1

      if (!word.key || !word.root) { console.log(`│  ⚠ Mot sans racine — skip`); continue }

      const { data: wa } = await db.from('word_analyses').select('id').eq('word_key', word.key!).single()
      if (!wa) { console.log(`│  ⚠ Pas d analyse pour ${word.key}`); continue }
      const analysisId = wa.id

      const { data: existingVwa } = await db.from('verse_word_analyses')
        .select('sense_chosen').eq('verse_id', verse.id).eq('word_key', word.key!).eq('position', wordPosition).single()

      if (existingVwa) {
        const { data: allSenses } = await db.from('word_meanings')
          .select('sense').eq('analysis_id', analysisId).eq('meaning_type', 'etymology')
        const nonRetenus = (allSenses ?? []).map(s => s.sense).filter(s => s !== existingVwa.sense_chosen)
        analyzedWords.push({ key: word.key!, arabic: word.arabic, retenu: existingVwa.sense_chosen ?? '', position: wordPosition, nonRetenus })
        console.log(`│  ✓ ${word.key} deja analyse — skip`)
        continue
      }

      logHeader(3, `SELECTION SENS — ${wordLabel} — ${verseRef} — mot ${wi + 1}/${importantWords.length}`)
      await updateJobStep(jobId, 3, 'selecting', `Selection ${wi + 1}/${importantWords.length} : ${wordLabel}`)
      const t3 = Date.now()

      const { data: etymSenses } = await db.from('word_meanings')
        .select('id, sense, sense_ar, description').eq('analysis_id', analysisId).eq('meaning_type', 'etymology').order('display_order')

      const { data: waData } = await db.from('word_analyses').select('root_phon').eq('id', analysisId).single()
      const rootPhon = waData?.root_phon ?? word.key ?? ''

      console.log(`│  Sens : ${(etymSenses ?? []).map(s => s.sense).join(', ')}`)

      const result = await selectRetainedSense(
        word.arabic, word.phon ?? word.key ?? '', word.root!, rootPhon,
        (etymSenses ?? []).map(s => ({ sense: s.sense, sense_ar: s.sense_ar ?? '', description: s.description ?? '' })),
        verseRef, cleanedArabic, surahName,
        { pos: word.pos, preceded_by_negation: word.preceded_by_negation, negation_particle: word.negation_particle, definite: word.definite },
        verseStructure,
      )

      const senseNames = (etymSenses ?? []).map(s => s.sense)
      let validRetenu = result.retenu
      if (!senseNames.includes(validRetenu)) {
        const match = senseNames.find(s => s.toLowerCase() === validRetenu.toLowerCase())
        if (match) { validRetenu = match }
        else {
          const rd = result.senses.find(d => d.classification === 'retenu')
          validRetenu = (rd && senseNames.includes(rd.sense)) ? rd.sense : senseNames[0] ?? validRetenu
          console.log(`│  ⚠ retenu "${result.retenu}" corrige en "${validRetenu}"`)
        }
      }

      console.log(`│  ★ SENS RETENU: "${validRetenu}"`)
      for (const d of result.senses) {
        const icon = d.classification === 'retenu' ? '★' : d.classification === 'probable' ? '◆' : d.classification === 'peu_probable' ? '◇' : '✗'
        console.log(`│  ${icon} ${d.sense} [${d.classification}]`)
      }

      const isFirstOcc = !analyzedWords.some(w => w.key === word.key)
      if (isFirstOcc) {
        await db.from('word_analyses').update({ retenu: validRetenu, analysis_step: 'sense_selected' }).eq('id', analysisId)
      } else {
        await db.from('word_analyses').update({ analysis_step: 'sense_selected' }).eq('id', analysisId)
      }

      await db.from('verse_word_analyses').delete().eq('verse_id', verse.id).eq('word_key', word.key!).eq('position', wordPosition)
      const retenuDecision = result.senses.find(d => d.sense === validRetenu)
      await db.from('verse_word_analyses').insert({
        verse_id: verse.id, word_key: word.key!, root: word.root!, position: wordPosition,
        sense_chosen: validRetenu, analysis_axes: retenuDecision?.axes ?? null,
        reason: retenuDecision?.resume ?? '', model_used: getModelName(), prompt_version: PROMPT_VERSION,
      })

      for (const decision of result.senses) {
        const status = decision.classification === 'retenu' ? 'ok' : decision.classification === 'probable' ? 'maybe' : 'no'
        await db.from('word_meanings').update({
          status: decision.classification || status, proof_ctx: decision.resume ?? '',
          axe1_verset: decision.axes?.axe1_champ_lexical ?? '', axe2_voisins: decision.axes?.axe2_versets_voisins ?? '',
          axe3_sourate: decision.axes?.axe3_theme_sourate ?? '', axe4_coherence: decision.axes?.axe4_coherence_coranique ?? '',
          axe5_frequence: decision.axes?.axe5_finalite_khalifa ?? '',
        }).eq('analysis_id', analysisId).eq('sense', decision.sense)
      }

      logEnd(`Etape 3 terminee en ${((Date.now() - t3) / 1000).toFixed(1)}s`)
      const nonRetenus = senseNames.filter(s => s !== validRetenu)
      analyzedWords.push({ key: word.key!, arabic: word.arabic, retenu: validRetenu, position: wordPosition, nonRetenus })
    }

    // ETAPE 4 — RECONSTRUCTION
    logHeader(4, `RECONSTRUCTION — ${verseRef}`)
    await updateJobStep(jobId, 4, 'reconstructing', 'Reconstruction du verset...')
    const t4 = Date.now()

    logSubHeader('Segments envoyes a l etape 4')
    for (const s of taggedSegments) {
      if (s.type === 'particle') {
        console.log(`│    · ${s.arabic} (${s.phon}) → "${s.fr}"`)
      } else {
        const w = analyzedWords.find(aw => aw.key === s.key)
        console.log(`│    ★ ${s.arabic} (${s.phon}) [${s.key}] — retenu: "${w?.retenu ?? '?'}"`)
      }
    }

    let reconResult = await reconstructVerse(verseRef, cleanedArabic, analyzedWords, taggedSegments)
    let translationArab = reconResult.translation_arab || ''

    const allNonRetenus = analyzedWords.flatMap(w => w.nonRetenus ?? [])
    const foundForbidden = allNonRetenus.filter(nr =>
      translationArab.toLowerCase().split(/\s+/).some(word =>
        word.replace(/[.,;:!?'"]/g, '').toLowerCase() === nr.toLowerCase()
      )
    )

    if (foundForbidden.length > 0) {
      console.log(`│  ⚠ Sens non retenus detectes : ${foundForbidden.join(', ')} → correction...`)
      const { getOpenAI } = await import('./llm')
      const openai = getOpenAI()
      const correctionResponse = await openai.chat.completions.create({
        model: 'gpt-4o', temperature: 0, response_format: { type: 'json_object' },
        messages: [
          { role: 'system', content: `Tu as produit cette traduction Arab : "${translationArab}"\nERREUR : tu as utilise "${foundForbidden.join(', ')}" qui est un sens NON RETENU.\nSens retenus : ${analyzedWords.map(w => `${w.key} = "${w.retenu}"`).join(', ')}\nSens interdits : ${allNonRetenus.join(', ')}\nReponds en JSON : { "translation_arab": "la traduction corrigee" }` },
          { role: 'user', content: 'Corrige la traduction Arab.' }
        ]
      })
      try {
        const correction = JSON.parse(correctionResponse.choices[0]?.message?.content ?? '{}')
        if (correction.translation_arab) { translationArab = correction.translation_arab; console.log(`│  ✓ Corrige : ${translationArab}`) }
      } catch { /* keep original */ }
    }

    const step4ImportantSegments = reconResult.segments.filter(s => s.type === 'important' || s.sense_retenu)
    let step4Idx = 0
    const finalSegments = taggedSegments.map(ts => {
      if (ts.type === 'particle') {
        return { arabic: ts.arabic, phon: ts.phon ?? '', fr: ts.fr ?? '', word_key: null, is_particle: true }
      }
      let fr = '', senseRetenu = ''
      while (step4Idx < step4ImportantSegments.length) {
        const s4 = step4ImportantSegments[step4Idx]; step4Idx++
        if (s4.arabic === ts.arabic) {
          const s4Any = s4 as unknown as Record<string, string>
          fr = s4.fr || s4Any.fr_arab || s4Any.fr_meditational || ''
          senseRetenu = s4.sense_retenu || ''; break
        }
      }
      if (!senseRetenu) { const aw = analyzedWords.find(w => w.key === ts.key); senseRetenu = aw?.retenu ?? '' }
      return {
        arabic: ts.arabic, phon: ts.phon ?? '', fr: fr || senseRetenu,
        word_key: ts.key ?? null, is_particle: false, sense_retenu: senseRetenu,
        pos: ts.pos, voice: ts.voice, position: ts.position ?? undefined,
      }
    })

    const translationExplanation = reconResult.translation_explanation || ''
    await db.from('verse_analyses').upsert({
      verse_id: verse.id, segments: finalSegments, full_translation: translationArab,
      translation_arab: translationArab, translation_explanation: translationExplanation,
      model_used: getModelName(), prompt_version: PROMPT_VERSION,
    }, { onConflict: 'verse_id' })

    const translationMed = reconResult.translation_meditational || ''
    logSubHeader('Traductions')
    if (translationMed) console.log(`│  Meditationnelle : ${translationMed}`)
    console.log(`│  Arab            : ${translationArab}`)
    logSubHeader('Segments finaux')
    for (const seg of finalSegments) {
      const tag = seg.is_particle ? '·' : '★'
      console.log(`│  ${tag} ${seg.arabic}  →  ${seg.phon}  →  "${seg.fr}"  [${seg.word_key ?? '-'}]`)
    }
    logEnd(`Etape 4 terminee en ${((Date.now() - t4) / 1000).toFixed(1)}s`)

    await updateJobStatus(jobId, 'done')
    const totalTime = ((Date.now() - t0) / 1000).toFixed(1)

    console.log('')
    console.log('╔══════════════════════════════════════════════════════════════════════╗')
    console.log(`║  ✓ PIPELINE PAS CHERE TERMINEE — ${verseRef.padEnd(35)}║`)
    console.log(`║  ${analyzedWords.length} mots — ${totalTime}s — etape 2 en batch${' '.repeat(Math.max(0, 31 - totalTime.length))}║`)
    console.log('╚══════════════════════════════════════════════════════════════════════╝')

    return { success: true, wordsAnalyzed: analyzedWords.length }
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error'
    console.error(`[PipelinePasChere] Error: ${message}`)
    await updateJobStatus(jobId, 'failed', message)
    throw err
  }
}
