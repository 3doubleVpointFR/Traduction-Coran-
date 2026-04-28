
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
        console.log(`│  ✓ Etymologie deja en base pour ${word.key}`)
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
        const { count: existingDailyP2 } = await db.from('word_daily').select('*', { count: 'exact', head: true }).eq('analysis_id', inserted.id)
        if ((existingDailyP2 ?? 0) > 0) {
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
