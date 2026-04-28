/**
 * VALIDATEUR PIPELINE V2 — à lancer après chaque insertion de sourate
 * Usage:
 *   node scripts/validate-pipeline.js 3         → toute la sourate 3
 *   node scripts/validate-pipeline.js 3 1       → juste V1
 *   node scripts/validate-pipeline.js 3 1-10    → V1 à V10
 *
 * Vérifie automatiquement toutes les règles V3 de la pipeline maison.
 * Intègre les leçons de l'audit du 11/04/2026 (573 bugs sourate 2).
 */

const { createClient } = require('@supabase/supabase-js')
const db = createClient('https://gwtgftosscjupxxsubev.supabase.co', process.env.SUPABASE_SERVICE_KEY)

const surahId = parseInt(process.argv[2])
if (!surahId) {
  console.log('Usage: node scripts/validate-pipeline.js [surah_id] [verse_range]')
  console.log('  node scripts/validate-pipeline.js 3         → toute la sourate')
  console.log('  node scripts/validate-pipeline.js 3 1       → juste V1')
  console.log('  node scripts/validate-pipeline.js 3 1-10    → V1 à V10')
  process.exit(1)
}

// Parse optional verse range
let verseMin = null, verseMax = null
if (process.argv[3]) {
  const range = process.argv[3]
  if (range.includes('-')) {
    const parts = range.split('-')
    verseMin = parseInt(parts[0])
    verseMax = parseInt(parts[1])
  } else {
    verseMin = parseInt(range)
    verseMax = verseMin
  }
}

let errors = 0
let warnings = 0
let checks = 0

function err(msg) { console.log('❌ ' + msg); errors++ }
function warn(msg) { console.log('⚠️  ' + msg); warnings++ }
function ok(msg) { console.log('✅ ' + msg) }
function section(n, title) { checks++; console.log('\n--- ' + n + '. ' + title + ' ---') }

async function fetchAll(table, select, filter) {
  let all = [], offset = 0
  while (true) {
    let q = db.from(table).select(select).range(offset, offset + 999)
    if (filter) q = filter(q)
    const { data } = await q
    if (!data || data.length === 0) break
    all = all.concat(data)
    if (data.length < 1000) break
    offset += 1000
  }
  return all
}

async function run() {
  const rangeLabel = verseMin ? (verseMin === verseMax ? ' V' + verseMin : ' V' + verseMin + '-' + verseMax) : ''
  console.log('╔══════════════════════════════════════════════════╗')
  console.log('║  VALIDATION PIPELINE V2 — SOURATE ' + surahId + rangeLabel + '             ║')
  console.log('╚══════════════════════════════════════════════════╝\n')

  // Get verses
  let versesQuery = db.from('verses').select('id,verse_num,arabic_text').eq('surah_id', surahId)
  if (verseMin) versesQuery = versesQuery.gte('verse_num', verseMin)
  if (verseMax) versesQuery = versesQuery.lte('verse_num', verseMax)
  let { data: verses } = await versesQuery.order('verse_num')
  if (!verses || !verses.length) { err('Sourate ' + surahId + rangeLabel + ' non trouvée'); return }
  const vids = verses.map(v => v.id)
  console.log('Versets: ' + verses.length + ' (verse_id ' + vids[0] + '-' + vids[vids.length - 1] + ')\n')

  // Load all data upfront
  const allVwa = await fetchAll('verse_word_analyses', 'id,verse_id,word_key,sense_chosen,analysis_axes,position,reason', q => q.in('verse_id', vids))
  const allVa = await fetchAll('verse_analyses', 'id,verse_id,segments,full_translation,translation_arab,translation_explanation', q => q.in('verse_id', vids))
  const allWords = await fetchAll('words', 'verse_id,position,arabic,root,transliteration,pos_tag', q => q.in('verse_id', vids))

  // Build lookups
  const vaByVid = {}; allVa.forEach(v => vaByVid[v.verse_id] = v)
  const vwaByVid = {}; allVwa.forEach(v => { if (!vwaByVid[v.verse_id]) vwaByVid[v.verse_id] = []; vwaByVid[v.verse_id].push(v) })
  const wordsByVid = {}; allWords.forEach(w => { if (!wordsByVid[w.verse_id]) wordsByVid[w.verse_id] = []; wordsByVid[w.verse_id].push(w) })

  // Collect all word_keys for batch lookups
  const allKeys = [...new Set(allVwa.map(v => v.word_key).filter(Boolean))]

  // Load word_analyses for all keys
  const waByKey = {}
  for (const key of allKeys) {
    const { data } = await db.from('word_analyses').select('id,word_key,root_ar,total_occurrences').eq('word_key', key).limit(1)
    if (data && data[0]) waByKey[key] = data[0]
  }

  // Load word_meanings for all analysis_ids
  const wmByAnalysisId = {}
  const analysisIds = [...new Set(Object.values(waByKey).map(w => w.id))]
  for (const aid of analysisIds) {
    const { data } = await db.from('word_meanings').select('concept,sense,description').eq('analysis_id', aid).not('concept', 'is', null)
    wmByAnalysisId[aid] = data || []
  }

  // ================================================================
  // FILTRAGE : ne valider que les versets effectivement analysés
  // (translation_arab non-null = verset traité par la pipeline maison)
  // ================================================================
  const startedVerses = verses.filter(v => {
    const va = vaByVid[v.id]
    return va && va.translation_arab && va.translation_arab.trim().length > 0
  })
  const skippedCount = verses.length - startedVerses.length
  if (skippedCount > 0) {
    console.log('\nℹ️  ' + skippedCount + ' verset(s) non encore analysé(s) — exclu(s) de la validation')
    console.log('   (versets sans translation_arab — état "not_started")\n')
  }
  // Remplacer la liste verses pour la suite par les seuls versets démarrés
  const verses_full = verses
  verses = startedVerses

  // ================================================================
  // 1. VERSE_ANALYSES COMPLÈTES (sur les versets démarrés uniquement)
  // ================================================================
  section(1, 'Complétude des verse_analyses (versets démarrés)')
  let vaOk = true
  for (const v of verses) {
    const va = vaByVid[v.id]
    if (!va) { err('V' + v.verse_num + ': aucune verse_analysis'); vaOk = false; continue }
    if (!va.translation_arab) { err('V' + v.verse_num + ': translation_arab vide'); vaOk = false }
    if (!va.segments || !va.segments.length) { err('V' + v.verse_num + ': segments vides'); vaOk = false }
    if (!va.translation_explanation) { err('V' + v.verse_num + ': translation_explanation vide'); vaOk = false }
    if (!va.full_translation) { warn('V' + v.verse_num + ': full_translation (Hamidullah) manquante') }
  }
  if (vaOk) ok('Toutes les verse_analyses sont complètes (' + verses.length + ' versets)')

  // ================================================================
  // 2. VWA POUR CHAQUE MOT IMPORTANT
  // ================================================================
  section(2, 'VWA pour chaque mot important')
  let vwaOk = true
  for (const v of verses) {
    const va = vaByVid[v.id]
    if (!va || !va.segments) continue
    const importantSegs = va.segments.filter(s => !s.is_particle && s.word_key)
    const vwaList = vwaByVid[v.id] || []

    for (const seg of importantSegs) {
      const matchingVwa = vwaList.find(w => w.word_key === seg.word_key && (!seg.position || w.position === seg.position))
      if (!matchingVwa) {
        err('V' + v.verse_num + ' ' + seg.word_key + ' pos=' + seg.position + ': pas de VWA correspondante')
        vwaOk = false
      }
    }
  }
  if (vwaOk) ok('Chaque mot important a une VWA (' + allVwa.length + ' entrées)')

  // ================================================================
  // 3. CONCEPT_CHOSEN MATCHE WORD_MEANINGS
  // ================================================================
  section(3, 'concept_chosen vs word_meanings')
  let conceptOk = true
  for (const vwa of allVwa) {
    const axes = vwa.analysis_axes
    if (!axes) { err('V' + vwa.verse_id + ' ' + vwa.word_key + ': analysis_axes manquant'); conceptOk = false; continue }
    if (!axes.concept_chosen) { err('V' + vwa.verse_id + ' ' + vwa.word_key + ': concept_chosen manquant'); conceptOk = false; continue }

    const wa = waByKey[vwa.word_key]
    if (!wa) { err('word_key "' + vwa.word_key + '" non trouvé dans word_analyses'); conceptOk = false; continue }

    const wm = wmByAnalysisId[wa.id] || []
    const wmConcepts = [...new Set(wm.map(x => x.concept))]

    if (!wmConcepts.includes(axes.concept_chosen)) {
      err('V' + vwa.verse_id + ' ' + vwa.word_key + ': concept_chosen="' + axes.concept_chosen + '" PAS dans word_meanings: [' + wmConcepts.join(', ') + ']')
      conceptOk = false
    }
  }
  if (conceptOk) ok('Tous les concept_chosen matchent word_meanings')

  // ================================================================
  // 4. CONCEPT RETENU COHÉRENT DANS ANALYSIS_AXES
  // ================================================================
  section(4, 'Cohérence concept retenu dans analysis_axes.concepts')
  let retenuOk = true
  for (const vwa of allVwa) {
    const axes = vwa.analysis_axes
    if (!axes || !axes.concepts) continue

    // Check: le concept_chosen a bien status "retenu"
    const chosenData = axes.concepts[axes.concept_chosen]
    if (!chosenData) {
      err('V' + vwa.verse_id + ' ' + vwa.word_key + ': concept_chosen="' + axes.concept_chosen + '" absent de concepts{}')
      retenuOk = false
    } else if (chosenData.status !== 'retenu') {
      err('V' + vwa.verse_id + ' ' + vwa.word_key + ': concept_chosen="' + axes.concept_chosen + '" a status="' + chosenData.status + '" au lieu de "retenu"')
      retenuOk = false
    }

    // Check: un seul concept a status "retenu"
    let retenuCount = 0
    for (const [name, data] of Object.entries(axes.concepts)) {
      if (data.status === 'retenu') retenuCount++
      // Check: chaque concept a un proof_ctx
      if (!data.proof_ctx) {
        err('V' + vwa.verse_id + ' ' + vwa.word_key + '/' + name + ': proof_ctx manquant')
        retenuOk = false
      }
      // Check: chaque concept a une liste de senses
      if (!data.senses || !data.senses.length) {
        warn('V' + vwa.verse_id + ' ' + vwa.word_key + '/' + name + ': liste senses vide')
      }
      // Check: statut valide
      if (!['retenu', 'probable', 'peu_probable', 'nul'].includes(data.status)) {
        err('V' + vwa.verse_id + ' ' + vwa.word_key + '/' + name + ': status invalide "' + data.status + '"')
        retenuOk = false
      }
    }
    if (retenuCount === 0) {
      err('V' + vwa.verse_id + ' ' + vwa.word_key + ': aucun concept avec status "retenu"')
      retenuOk = false
    } else if (retenuCount > 1) {
      err('V' + vwa.verse_id + ' ' + vwa.word_key + ': ' + retenuCount + ' concepts avec status "retenu" (doit être 1)')
      retenuOk = false
    }
  }
  if (retenuOk) ok('Cohérence concept retenu OK pour toutes les VWA')

  // ================================================================
  // 5. SENSE_RETENU DANS SEGMENTS = UN SENS DU CONCEPT RETENU
  // ================================================================
  section(5, 'sense_retenu des segments vs word_meanings')
  let srOk = true
  for (const v of verses) {
    const va = vaByVid[v.id]
    if (!va || !va.segments) continue
    for (const seg of va.segments) {
      if (seg.is_particle || !seg.word_key || !seg.sense_retenu) continue
      const wa = waByKey[seg.word_key]
      if (!wa) continue
      const wm = wmByAnalysisId[wa.id] || []
      const allSenses = wm.map(x => (x.sense || '').toLowerCase())
      const sr = seg.sense_retenu.toLowerCase()
      if (!allSenses.includes(sr)) {
        const partial = allSenses.some(s => s.includes(sr) || sr.includes(s))
        if (!partial) {
          err('V' + v.verse_num + ' ' + seg.word_key + ': sense_retenu="' + seg.sense_retenu + '" pas dans word_meanings')
          srOk = false
        }
      }
    }
  }
  if (srOk) ok('Tous les sense_retenu matchent un sens dans word_meanings')

  // ================================================================
  // 6. SENSE_CHOSEN VWA = SENSE_RETENU SEGMENT
  // ================================================================
  section(6, 'Cohérence sense_chosen (VWA) vs sense_retenu (segment)')
  let syncOk = true
  for (const v of verses) {
    const va = vaByVid[v.id]
    const vwaList = vwaByVid[v.id] || []
    if (!va || !va.segments) continue
    for (const seg of va.segments) {
      if (seg.is_particle || !seg.word_key || !seg.sense_retenu) continue
      const matchingVwa = vwaList.find(w => w.word_key === seg.word_key && (!seg.position || w.position === seg.position))
      if (!matchingVwa) continue
      if (matchingVwa.sense_chosen && matchingVwa.sense_chosen.toLowerCase() !== seg.sense_retenu.toLowerCase()) {
        err('V' + v.verse_num + ' ' + seg.word_key + ': VWA.sense_chosen="' + matchingVwa.sense_chosen + '" ≠ segment.sense_retenu="' + seg.sense_retenu + '"')
        syncOk = false
      }
    }
  }
  if (syncOk) ok('sense_chosen et sense_retenu synchronisés')

  // ================================================================
  // 7. SEGMENTS — POSITION + WORD_KEY POUR MOTS IMPORTANTS
  // (Bug audit: word_key=null + is_particle=undefined = mot invisible)
  // ================================================================
  section(7, 'Segments: position, word_key, is_particle définis')
  let segOk = true
  for (const v of verses) {
    const va = vaByVid[v.id]
    if (!va || !va.segments) continue
    const words = wordsByVid[v.id] || []
    const rootWords = words.filter(w => w.root && w.root.trim() !== '')

    for (let i = 0; i < va.segments.length; i++) {
      const seg = va.segments[i]
      // Check: position is defined
      if (seg.position === undefined || seg.position === null) {
        warn('V' + v.verse_num + ' seg' + i + ' "' + (seg.phon || '') + '": position manquante')
      }
      // Check: is_particle is explicitly set (not undefined)
      if (seg.is_particle === undefined) {
        err('V' + v.verse_num + ' seg' + i + ' "' + (seg.phon || '') + '": is_particle=undefined (doit être true ou false)')
        segOk = false
      }
      // Check: non-particle without word_key = mot invisible (bug audit)
      if (seg.is_particle === false && !seg.word_key) {
        // Check if this word has a root (= should be important)
        const matchingWord = words.find(w => w.position === seg.position)
        if (matchingWord && matchingWord.root) {
          err('V' + v.verse_num + ' seg' + i + ' "' + (seg.phon || '') + '": is_particle=false + word_key=null (mot invisible!) — racine: ' + matchingWord.root)
          segOk = false
        }
      }
    }

    // Check: all root words from QAC should appear as important segments
    for (const rw of rootWords) {
      const hasSeg = va.segments.some(s => s.position === rw.position && !s.is_particle && s.word_key)
      if (!hasSeg) {
        // Don't error on pronouns/prepositions that QAC marks with roots
        const minorPOS = ['PRON', 'P', 'CONJ', 'DET', 'INTG', 'CERT', 'RES', 'SUP', 'VOC', 'NEG', 'PREV', 'ANS']
        if (!minorPOS.includes(rw.pos_tag)) {
          warn('V' + v.verse_num + ' pos=' + rw.position + ' "' + (rw.transliteration || '') + '" (racine ' + rw.root + '): pas de segment important correspondant')
        }
      }
    }
  }
  if (segOk) ok('Segments correctement structurés')

  // ================================================================
  // 8. §DEMARCHE§ + §JUSTIFICATION§ + §CRITIQUE§ PRÉSENTS
  // ================================================================
  section(8, 'Structure §DEMARCHE§ / §JUSTIFICATION§ / §CRITIQUE§')
  let structOk = true
  for (const v of verses) {
    const va = vaByVid[v.id]
    if (!va || !va.translation_explanation) continue
    const te = va.translation_explanation
    if (!te.includes('§DEMARCHE§')) { err('V' + v.verse_num + ': §DEMARCHE§ manquant'); structOk = false }
    if (!te.includes('§JUSTIFICATION§')) { err('V' + v.verse_num + ': §JUSTIFICATION§ manquant'); structOk = false }
    if (!te.includes('§CRITIQUE§')) { err('V' + v.verse_num + ': §CRITIQUE§ manquant'); structOk = false }
  }
  if (structOk) ok('§DEMARCHE§, §JUSTIFICATION§ et §CRITIQUE§ présents dans tous les versets')

  // ================================================================
  // 9. PAS DE MOT "CONCEPT" DANS LES TEXTES VISIBLES
  // ================================================================
  section(9, 'Mot "concept" dans les textes visibles')
  let conceptLeakOk = true
  for (const v of verses) {
    const va = vaByVid[v.id]
    if (!va) continue
    if (va.translation_explanation && /\bconcept\b/i.test(va.translation_explanation)) {
      err('V' + v.verse_num + ': mot "concept" dans translation_explanation')
      conceptLeakOk = false
    }
    if (va.translation_arab && /\bconcept\b/i.test(va.translation_arab)) {
      err('V' + v.verse_num + ': mot "concept" dans translation_arab')
      conceptLeakOk = false
    }
  }
  // Vérifier aussi dans proof_ctx des VWA
  for (const vwa of allVwa) {
    if (!vwa.analysis_axes || !vwa.analysis_axes.concepts) continue
    for (const [name, data] of Object.entries(vwa.analysis_axes.concepts)) {
      if (data.proof_ctx && /\bconcept\b/i.test(data.proof_ctx)) {
        err('V' + vwa.verse_id + ' ' + vwa.word_key + '/' + name + ': mot "concept" dans proof_ctx')
        conceptLeakOk = false
      }
    }
  }
  if (conceptLeakOk) ok('Aucun mot "concept" dans les textes visibles')

  // ================================================================
  // 10. PAS D'EXÉGÈSE NON JUSTIFIÉE
  // ================================================================
  section(10, 'Vérification exégèse')
  const exegesisWords = [
    'commentateur', 'tafsir', 'exégèse', 'exégète',
    'tradition dit', 'savants disent', 'selon les', 'interprètes',
    "d'après les commentaires", 'unanimement', 'consensus'
  ]
  const contextualWords = ['sorcellerie', 'sorcière', 'magie', 'envoûtement', 'ensorceler']
  let exOk = true
  for (const v of verses) {
    const va = vaByVid[v.id]
    const vwaList = vwaByVid[v.id] || []

    // Check VWA axes
    for (const vwa of vwaList) {
      const json = JSON.stringify(vwa.analysis_axes || {}).toLowerCase()
      for (const w of exegesisWords) {
        if (json.includes(w.toLowerCase())) { err('V' + v.verse_num + ' ' + vwa.word_key + ' axes: mot d\'exégèse "' + w + '"'); exOk = false }
      }
      for (const w of contextualWords) {
        if (json.includes(w.toLowerCase())) { warn('V' + v.verse_num + ' ' + vwa.word_key + ' axes: "' + w + '" — vérifier si le texte le mentionne') }
      }
    }
    // Check translation_explanation
    if (va && va.translation_explanation) {
      const t = va.translation_explanation.toLowerCase()
      for (const w of exegesisWords) {
        if (t.includes(w.toLowerCase())) { err('V' + v.verse_num + ' démarche: mot d\'exégèse "' + w + '"'); exOk = false }
      }
      for (const w of contextualWords) {
        if (t.includes(w.toLowerCase())) { warn('V' + v.verse_num + ' démarche: "' + w + '" — vérifier si le texte le mentionne') }
      }
    }
  }
  if (exOk) ok('Aucun mot d\'exégèse trouvé')

  // ================================================================
  // 11. PAS D'ANGLAIS DANS LES PROOF_CTX / AXES
  // ================================================================
  section(11, 'Anglais dans les proof_ctx')
  const engPatterns = [/\bthe\s+[a-z]/i, /\band\s+[a-z]/i, /\bwhich\b/i, /\bthat\s+is\b/i, /\bfrom\s+[a-z]/i, /\bwith\s+[a-z]/i, /\bhas\s+been\b/i, /\bhave\s+been\b/i, /\bwas\s+[a-z]/i, /\bbeing\b/i, /\bhe\s+said\b/i, /\bhe\s+who\b/i, /\bthey\s+[a-z]/i, /\bit\s+is\b/i, /\bof\s+the\b/i, /\bto\s+be\b/i]
  let engOk = true
  for (const vwa of allVwa) {
    if (!vwa.analysis_axes || !vwa.analysis_axes.concepts) continue
    for (const [name, data] of Object.entries(vwa.analysis_axes.concepts)) {
      const texts = [data.proof_ctx].filter(Boolean)
      for (const t of texts) {
        for (const pat of engPatterns) {
          if (pat.test(t)) {
            const match = t.match(pat)
            err('V' + vwa.verse_id + ' ' + vwa.word_key + '/' + name + ': anglais détecté "' + (match ? match[0] : '') + '"')
            engOk = false
            break
          }
        }
      }
    }
  }
  if (engOk) ok('Pas d\'anglais détecté dans les données')

  // ================================================================
  // 12. PHRASES DU QUOTIDIEN POUR CHAQUE RACINE
  // ================================================================
  section(12, 'Phrases du quotidien')
  let dailyOk = true
  for (const key of allKeys) {
    const wa = waByKey[key]
    if (!wa) continue
    const { data: daily } = await db.from('word_daily').select('id').eq('analysis_id', wa.id)
    if (!daily || daily.length === 0) {
      err(key + ': aucune phrase du quotidien')
      dailyOk = false
    } else if (daily.length < 3) {
      warn(key + ': seulement ' + daily.length + ' phrase(s) (3 recommandées)')
    }
  }
  if (dailyOk) ok('Toutes les racines ont des phrases du quotidien')

  // ================================================================
  // 13. OCCURRENCES DES RACINES ≠ 0
  // ================================================================
  section(13, 'Occurrences des racines')
  let occOk = true
  for (const key of allKeys) {
    const wa = waByKey[key]
    if (!wa) continue
    if ((wa.total_occurrences === 0 || wa.total_occurrences === null) && wa.root_ar) {
      err(key + ' (' + wa.root_ar + '): total_occurrences = 0 — vérifier via corpus.quran.com')
      occOk = false
    }
  }
  if (occOk) ok('Toutes les racines ont total_occurrences > 0')

  // ================================================================
  // 14. PAS D'ANTHROPOMORPHISME
  // ================================================================
  section(14, 'Anthropomorphisme')
  const anthropoWords = ['colère de dieu', 'fureur de dieu', 'dieu est en colère', 'dieu se met en colère', 'courroux de dieu', 'rage de dieu', 'rancœur de dieu', 'rancune de dieu', 'vengeance de dieu']
  let anthropoOk = true
  for (const v of verses) {
    const va = vaByVid[v.id]
    if (!va) continue
    const allText = ((va.translation_arab || '') + ' ' + (va.translation_explanation || '')).toLowerCase()
    for (const aw of anthropoWords) {
      if (allText.includes(aw)) {
        err('V' + v.verse_num + ': anthropomorphisme détecté "' + aw + '"')
        anthropoOk = false
      }
    }
    // Check VWA proof_ctx too
    const vwaList = vwaByVid[v.id] || []
    for (const vwa of vwaList) {
      if (!vwa.analysis_axes || !vwa.analysis_axes.concepts) continue
      for (const [name, data] of Object.entries(vwa.analysis_axes.concepts)) {
        if (data.proof_ctx) {
          const p = data.proof_ctx.toLowerCase()
          for (const aw of anthropoWords) {
            if (p.includes(aw)) { err('V' + v.verse_num + ' ' + vwa.word_key + '/' + name + ': anthropomorphisme "' + aw + '" dans proof_ctx'); anthropoOk = false }
          }
        }
      }
    }
  }
  if (anthropoOk) ok('Aucun anthropomorphisme détecté')

  // ================================================================
  // 15. VWA CONTEXTE = BON VERSET (Bug audit: mlk V107 parlait de V98)
  // ================================================================
  section(15, 'VWA contexte = bon verset')
  let ctxOk = true
  for (const v of verses) {
    const va = vaByVid[v.id]
    const vwaList = vwaByVid[v.id] || []
    if (!va || !va.segments) continue

    // Get arabic words from this verse
    const verseArabicWords = (wordsByVid[v.id] || []).map(w => w.arabic).filter(Boolean)

    for (const vwa of vwaList) {
      if (!vwa.analysis_axes || !vwa.analysis_axes.concepts) continue
      const retenuConcept = vwa.analysis_axes.concepts[vwa.analysis_axes.concept_chosen]
      if (!retenuConcept || !retenuConcept.proof_ctx) continue

      // Check if proof_ctx references other verse numbers that don't exist in the sourate context
      const verseRefs = retenuConcept.proof_ctx.match(/verset\s+(\d+)/gi)
      if (verseRefs) {
        for (const ref of verseRefs) {
          const num = parseInt(ref.match(/\d+/)[0])
          // If it mentions a verse number from sourate 2 range but we're not in sourate 2
          if (surahId !== 2 && num >= 1 && num <= 286) {
            // Could be a reference to another sourate, not necessarily wrong
            // But flag if it mentions verse numbers way outside this sourate
            if (num > verses.length * 2) {
              warn('V' + v.verse_num + ' ' + vwa.word_key + ': proof_ctx mentionne "' + ref + '" — vérifier que c\'est le bon contexte')
            }
          }
        }
      }
    }
  }
  if (ctxOk) ok('Contexte des VWA semble cohérent')

  // ================================================================
  // 16. POSITIONS DÉCALÉES (phon segment ≠ translitération mot)
  // ================================================================
  section(16, 'Positions décalées (phon vs translitération)')
  let posOk = true
  let posIssues = 0
  for (const v of verses) {
    const va = vaByVid[v.id]
    const words = wordsByVid[v.id] || []
    if (!va || !va.segments) continue

    for (const seg of va.segments) {
      if (!seg.position) continue
      const word = words.find(w => w.position === seg.position)
      if (!word || !word.transliteration) continue

      const segPhon = (seg.phon || '').toLowerCase().replace(/[^a-z]/g, '')
      const wordTr = (word.transliteration || '').toLowerCase().replace(/[^a-z]/g, '')
      if (segPhon.length < 3 || wordTr.length < 3) continue

      const match = segPhon.substring(0, 3) === wordTr.substring(0, 3) ||
        segPhon.includes(wordTr.substring(0, 3)) ||
        wordTr.includes(segPhon.substring(0, 3))
      if (!match) {
        posIssues++
        if (posIssues <= 10) {
          warn('V' + v.verse_num + ' pos=' + seg.position + ': seg.phon="' + seg.phon + '" ≠ word.tr="' + word.transliteration + '" (key=' + (seg.word_key || 'null') + ')')
        }
      }
    }
  }
  if (posIssues > 10) warn('... et ' + (posIssues - 10) + ' autres positions suspectes')
  if (posIssues === 0) ok('Aucune position décalée détectée')
  else warn(posIssues + ' position(s) suspecte(s) au total')

  // ================================================================
  // 17. VOCABULAIRE RELIGIEUX CHRÉTIEN
  // ================================================================
  section(17, 'Vocabulaire religieux chrétien')
  const christianWords = ['grâce divine', 'péché originel', 'rédemption', 'salut éternel', 'châtiment divin', 'la grâce', 'pécheur', 'absolution', 'saint-esprit', 'trinité']
  let chretOk = true
  for (const v of verses) {
    const va = vaByVid[v.id]
    if (!va) continue
    const allText = ((va.translation_arab || '') + ' ' + (va.translation_explanation || '')).toLowerCase()
    for (const cw of christianWords) {
      if (allText.includes(cw)) {
        warn('V' + v.verse_num + ': vocabulaire chrétien "' + cw + '" — vérifier si c\'est justifié')
      }
    }
  }
  if (chretOk) ok('Pas de vocabulaire religieux chrétien problématique')

  // ================================================================
  // 18. RÉSUMÉ PAR VERSET (pour vérification manuelle)
  // ================================================================
  section(18, 'Résumé par verset (vérification manuelle)')
  const { data: surah } = await db.from('surahs').select('name_fr').eq('id', surahId).single()
  const surahName = surah ? surah.name_fr : 'Inconnue'
  console.log('  Sourate: ' + surahName + '\n')

  for (const v of verses) {
    const va = vaByVid[v.id]
    const vwaList = vwaByVid[v.id] || []
    if (!vwaList.length && !va) continue

    const senses = vwaList.map(w => w.word_key + '="' + (w.sense_chosen || '?') + '"').join(', ')
    console.log('  V' + v.verse_num + ': ' + senses)
    if (va && va.translation_arab) console.log('    → ' + va.translation_arab)
  }
  console.log('\n  ℹ️  Vérifier manuellement la cohérence des sens retenus avec le thème de "' + surahName + '"')

  // ================================================================
  // 19. RICHESSE DES RACINES (étape 2 complète ?)
  // ================================================================
  section(19, 'Richesse des racines (étape 2 complète ?)')
  let richOk = true
  for (const key of allKeys) {
    const wa = waByKey[key]
    if (!wa) continue
    const wm = wmByAnalysisId[wa.id] || []
    const uniqueConcepts = [...new Set(wm.map(x => x.concept))]
    const totalSenses = wm.length
    const occ = wa.total_occurrences || 0

    // Check: analysis_step still "tagged"
    const { data: fullWa } = await db.from('word_analyses').select('analysis_step').eq('id', wa.id).single()
    const step = fullWa ? fullWa.analysis_step : '?'

    let suspect = false
    if (totalSenses < 5) { suspect = true }

    if (suspect) {
      warn(key + ' (occ=' + occ + '): étape 2 suspecte — seulement ' + totalSenses + ' sens (minimum 5 quand possible)')
      richOk = false
    }
  }
  if (richOk) ok('Toutes les racines ont une étape 2 suffisamment riche')

  // ================================================================
  // 20. PHRASE D'INTRODUCTION DANS LA §DEMARCHE§
  // (Résumé du verset + lien avec le verset précédent)
  // ================================================================
  section(20, 'Phrase d\'introduction dans la §DEMARCHE§')
  let introOk = true
  for (const v of verses) {
    const va = vaByVid[v.id]
    if (!va || !va.translation_explanation) continue
    const te = va.translation_explanation
    const demarcheStart = te.indexOf('§DEMARCHE§')
    if (demarcheStart === -1) continue
    const afterDemarche = te.substring(demarcheStart + 10).trim()
    // The demarche should NOT start directly with ** (bold word analysis)
    // It should start with a contextual sentence linking to previous verse(s)
    if (afterDemarche.startsWith('**')) {
      warn('V' + v.verse_num + ': §DEMARCHE§ commence directement par l\'analyse d\'un mot — il manque la phrase d\'introduction (résumé + lien verset précédent)')
      introOk = false
    }
  }
  if (introOk) ok('Toutes les §DEMARCHE§ ont une phrase d\'introduction')

  // ================================================================
  // 21. UN MOT PAR PARAGRAPHE DANS LA §DEMARCHE§
  // ================================================================
  section(21, 'Un mot par paragraphe dans la §DEMARCHE§')
  let paraOk = true
  for (const v of verses) {
    const va = vaByVid[v.id]
    if (!va || !va.translation_explanation) continue
    const te = va.translation_explanation
    const demStart = te.indexOf('§DEMARCHE§')
    const justStart = te.indexOf('§JUSTIFICATION§')
    if (demStart === -1 || justStart === -1) continue
    const demarche = te.substring(demStart + 10, justStart).trim()
    // Split into paragraphs (separated by double newlines)
    const paras = demarche.split(/\n\n+/).filter(p => p.trim().length > 0)
    for (const para of paras) {
      // Count bold words (**word**) that start a paragraph — these are word analyses
      const boldStarts = para.match(/\*\*[^*]+\*\*/g) || []
      // Filter: only count bold words that are at start of sentences (after newline or start)
      const boldAtStart = boldStarts.filter(b => {
        const idx = para.indexOf(b)
        return idx === 0 || para[idx - 1] === '\n'
      })
      if (boldAtStart.length >= 2) {
        // Check if they look like two different word analyses (not just one word referencing another)
        const words = boldAtStart.map(b => b.replace(/\*\*/g, ''))
        // Only warn if both bold words start sentences (= likely two word analyses in same paragraph)
        const sentenceStarters = boldStarts.filter(b => {
          const idx = para.indexOf(b)
          return idx === 0 || (idx > 0 && /[\n.]/.test(para[idx - 1]))
        })
        if (sentenceStarters.length >= 2) {
          const preview = words.slice(0, 2).join(' + ')
          warn('V' + v.verse_num + ': 2 mots analysés dans le même paragraphe (' + preview + ') — séparer en paragraphes distincts')
          paraOk = false
        }
      }
    }
  }
  if (paraOk) ok('Chaque mot a son propre paragraphe dans la §DEMARCHE§')

  // ================================================================
  // 22. DÉTECTION DE SENS POST-ISLAMIQUES
  // ================================================================
  section(22, 'Détection de sens post-islamiques potentiels')
  const postIslamicWarnings = {
    'dyn': {sense: 'religion', warn: 'dīn: "religion" est un sens post-islamique — vérifier si le contexte le justifie (sens primaire = obéissance/dette)'},
    'slm': {sense: 'islam', warn: 'slm: "islam" comme label confessionnel est post-islamique — vérifier si "remise entière" est plus adapté'},
    'kfr': {sense: 'mécréant', warn: 'kfr: "mécréant" est un sens post-islamique — vérifier si "rejeter/couvrir" est plus adapté'},
    'mnfq': {sense: 'hypocrite', warn: 'mnfq: "hypocrite" est un sens post-islamique — vérifier si le sens étymologique est plus adapté'}
  }
  let postIsOk = true
  for (const vwa of allVwa) {
    const pi = postIslamicWarnings[vwa.word_key]
    if (pi && vwa.sense_chosen && vwa.sense_chosen.toLowerCase() === pi.sense) {
      warn('V' + vwa.verse_id + ' ' + pi.warn)
      postIsOk = false
    }
  }
  if (postIsOk) ok('Aucun sens post-islamique suspect détecté')

  // ================================================================
  // 23. ARABE DANS translation_arab (doit être en français, pas arabe ni translittération)
  // ================================================================
  section(23, 'Arabe dans translation_arab')
  let arabOk = true
  for (const v of verses) {
    const va = vaByVid[v.id]
    if (!va || !va.translation_arab) continue
    // Skip V1 (Alif-Lam-Mim type verses)
    if (va.translation_arab.length < 20) continue
    const ta = va.translation_arab
    // (A) Check for Arabic unicode chars
    const arabicRatio = (ta.match(/[\u0600-\u06FF]/g) || []).length / ta.length
    if (arabicRatio > 0.3) {
      err('V' + v.verse_num + ': translation_arab contient du texte arabe unicode au lieu du français (' + Math.round(arabicRatio * 100) + '% arabe)')
      arabOk = false
      continue
    }
    // (B) Check for Arabic transliteration (phonétique latine avec diacritiques ā/ī/ū/ʿ/ʾ/etc.)
    // Comptage de mots français courants vs marqueurs de translittération
    const frenchCommon = /\b(le|la|les|de|du|des|un|une|et|que|qui|est|sont|pour|dans|avec|sur|ce|ces|il|ils|elle|nous|vous|ou|mais|si|ne|pas|au|aux|à|en|leur|leurs|son|sa|ses|par)\b/gi
    const transMarkers = /\b(wa-|al-|bi-|fī|li-|ilā|min|ʿalā|yā|lā|alladh|kalim|ahla|rabbi|ibrāhīm|yahūd|naṣrān|musliman|mushrikīn|allāhu|allāha)\b/g
    const frenchMatches = (ta.match(frenchCommon) || []).length
    const transMatches = (ta.match(transMarkers) || []).length
    if (transMatches >= 3 && frenchMatches < 3) {
      err('V' + v.verse_num + ': translation_arab semble contenir de la translittération arabe au lieu du français (' + transMatches + ' marqueurs arabes vs ' + frenchMatches + ' mots français courants)')
      arabOk = false
    }
  }
  if (arabOk) ok('Toutes les translation_arab sont en français')

  // ================================================================
  // 24. PAS DE "position X" DANS translation_explanation
  // ================================================================
  section(24, 'Mot "position" dans translation_explanation')
  let posWordOk = true
  for (const v of verses) {
    const va = vaByVid[v.id]
    if (!va || !va.translation_explanation) continue
    const posMatches = va.translation_explanation.match(/position\s+\d+/gi)
    if (posMatches) {
      err('V' + v.verse_num + ': "' + posMatches[0] + '" trouvé dans translation_explanation (' + posMatches.length + ' occurrence(s))')
      posWordOk = false
    }
  }
  if (posWordOk) ok('Aucun "position X" dans les textes visibles')

  // ================================================================
  // 25. §CRITIQUE§ format — doit contenir **vs** ou "sensiblement"
  // ================================================================
  section(25, 'Format §CRITIQUE§ (comparaisons avec traductions courantes)')
  let critFormatOk = true
  for (const v of verses) {
    const va = vaByVid[v.id]
    if (!va || !va.translation_explanation) continue
    const critStart = va.translation_explanation.indexOf('§CRITIQUE§')
    if (critStart < 0) continue
    const critique = va.translation_explanation.substring(critStart + 10).trim()
    // Skip very short critiques or verses with same translation
    if (critique.length < 50) continue
    const hasVs = /\bvs\b/i.test(critique)
    const hasSensiblement = /sensiblement/i.test(critique)
    if (!hasVs && !hasSensiblement) {
      warn('V' + v.verse_num + ': §CRITIQUE§ ne contient ni "vs" ni "sensiblement le même sens" — vérifier le format **notre_mot vs mot_courant**')
      critFormatOk = false
    }
    // Check that "vs" points use bold format
    if (hasVs) {
      const vsMatches = critique.match(/\*\*[^*]+vs[^*]+\*\*/g)
      if (!vsMatches) {
        warn('V' + v.verse_num + ': §CRITIQUE§ contient "vs" mais pas au format **xxx vs yyy** en gras')
        critFormatOk = false
      }
    }
  }
  if (critFormatOk) ok('Toutes les §CRITIQUE§ ont le bon format')

  // ================================================================
  // 26. Ordre d'apparition des différences dans §CRITIQUE§
  //     Les **X vs Y** doivent suivre l'ordre des mots dans la traduction
  // ================================================================
  section(26, 'Ordre d\'apparition des différences dans §CRITIQUE§')
  let critOrderOk = true
  for (const v of verses) {
    const va = vaByVid[v.id]
    if (!va || !va.translation_explanation || !va.translation_arab) continue
    const critStart = va.translation_explanation.indexOf('§CRITIQUE§')
    if (critStart < 0) continue
    const critique = va.translation_explanation.substring(critStart + 10)
    const vsMatches = [...critique.matchAll(/\*\*([^*]+?)\s+vs\s+[^*]+?\*\*/g)]
    if (vsMatches.length < 2) continue // pas d'ordre à vérifier si moins de 2
    const ourTrad = va.translation_arab.toLowerCase()
    const positions = []
    for (const m of vsMatches) {
      const ourWord = m[1].trim().toLowerCase()
      // chercher la première occurrence du mot dans notre traduction
      const pos = ourTrad.indexOf(ourWord)
      positions.push({ word: ourWord, pos })
    }
    // vérifier l'ordre croissant (ignorer les -1 = mot non trouvé)
    const foundPositions = positions.filter(p => p.pos >= 0)
    let isOrdered = true
    for (let i = 1; i < foundPositions.length; i++) {
      if (foundPositions[i].pos < foundPositions[i-1].pos) {
        isOrdered = false
        break
      }
    }
    if (!isOrdered) {
      warn('V' + v.verse_num + ': §CRITIQUE§ différences pas dans l\'ordre d\'apparition. Trouvé : ' +
        foundPositions.map(p => '"' + p.word + '"(' + p.pos + ')').join(' → '))
      critOrderOk = false
    }
  }
  if (critOrderOk) ok('Différences §CRITIQUE§ dans l\'ordre d\'apparition')

  // ================================================================
  // 27. full_translation ne doit PAS contenir "(Hamidullah, S..)" ou autre référence source
  // ================================================================
  section(27, 'full_translation propre (pas de référence source)')
  let fullTradCleanOk = true
  for (const v of verses) {
    const va = vaByVid[v.id]
    if (!va || !va.full_translation) continue
    // Patterns à détecter : (Hamidullah...), (Source...), [Hamidullah...], S3:V..., etc.
    if (/\((?:Hamidullah|Source|Réf|Ref|Traduction)/i.test(va.full_translation)) {
      err('V' + v.verse_num + ': full_translation contient une référence source (ex: "(Hamidullah, ...)") — à nettoyer')
      fullTradCleanOk = false
    }
    if (/S\d+\s*:\s*V\d+/i.test(va.full_translation)) {
      err('V' + v.verse_num + ': full_translation contient une référence verset (ex: "S3:V67") — à nettoyer')
      fullTradCleanOk = false
    }
  }
  if (fullTradCleanOk) ok('Aucun full_translation ne contient de référence source')

  // ================================================================
  // 28. Segments : schéma complet (fr, pos, phon, arabic, word_key, is_particle, sense_retenu, position)
  //     + aucun fr vide + champs requis présents
  // ================================================================
  section(28, 'Segments : schéma complet et fr non-vide')
  let segSchemaOk = true
  const requiredFields = ['fr', 'pos', 'phon', 'arabic', 'is_particle', 'position']
  for (const v of verses) {
    const va = vaByVid[v.id]
    if (!va || !va.segments) continue
    const segs = typeof va.segments === 'string' ? JSON.parse(va.segments) : va.segments
    if (!Array.isArray(segs) || segs.length === 0) continue
    // Vérifier champs requis sur le premier segment (tous doivent avoir les mêmes champs)
    const missingFields = requiredFields.filter(f => !(f in segs[0]))
    if (missingFields.length > 0) {
      err('V' + v.verse_num + ': segments manquent les champs: ' + missingFields.join(', '))
      segSchemaOk = false
    }
    // Vérifier que arabic existe (et pas "ar" qui serait l'ancien schéma)
    if ('ar' in segs[0] && !('arabic' in segs[0])) {
      err('V' + v.verse_num + ': segments utilisent "ar" au lieu de "arabic" (ancien schéma)')
      segSchemaOk = false
    }
    // Vérifier qu'aucun segment NON-PARTICULE n'a fr vide
    // (les particules peuvent avoir fr vide légitimement si absorbées dans segments adjacents)
    const emptyFrNonParticle = segs.filter(s => (!s.fr || s.fr === '') && !s.is_particle).map(s => 'pos=' + (s.position || s.pos) + '(phon=' + s.phon + ')')
    if (emptyFrNonParticle.length > 0) {
      err('V' + v.verse_num + ': segments non-particule avec fr vide: ' + emptyFrNonParticle.join(', '))
      segSchemaOk = false
    }
    // Particules avec fr vide : info seulement (pas même warning)
    const emptyFrParticle = segs.filter(s => (!s.fr || s.fr === '') && s.is_particle).length
    // (silencieux — particules absorbées OK)
  }
  if (segSchemaOk) ok('Tous les segments ont le schéma complet')

  // ================================================================
  // 29. VWA analysis_axes doit être au format V3 (avec concepts object)
  //     Détecte l'ancien format V2 (axe1_forme, axe2_voisins, etc.)
  // ================================================================
  section(29, 'VWA analysis_axes au format V3')
  let v3Ok = true
  for (const vwa of allVwa) {
    if (!vwa.analysis_axes) continue
    const axes = typeof vwa.analysis_axes === 'string' ? JSON.parse(vwa.analysis_axes) : vwa.analysis_axes
    if (!axes.concepts) {
      const v = verses.find(x => x.id === vwa.verse_id)
      const vnum = v ? v.verse_num : vwa.verse_id
      err('V' + vnum + ' ' + vwa.word_key + ': analysis_axes en ancien format V2 (axe1_forme, axe2_voisins...) — doit être V3 (avec concepts object)')
      v3Ok = false
    }
  }
  if (v3Ok) ok('Tous les VWA au format V3')

  // ================================================================
  // 30. segments.sense_retenu doit être rempli pour les mots non-particule
  //     quand le segment a un word_key + correspondant à un VWA
  // ================================================================
  section(30, 'segments.sense_retenu rempli pour mots non-particule avec word_key')
  let senseFilledOk = true
  for (const v of verses) {
    const va = vaByVid[v.id]
    if (!va || !va.segments) continue
    const segs = typeof va.segments === 'string' ? JSON.parse(va.segments) : va.segments
    const vwaForVerse = allVwa.filter(vw => vw.verse_id === v.id)
    const vwaByPos = Object.fromEntries(vwaForVerse.map(vw => [vw.position, vw.sense_chosen]))
    const problematicSegs = []
    for (const s of segs) {
      if (s.is_particle) continue
      if (!s.word_key) continue // noms propres (Abraham, Thora, etc.) sans word_key : OK
      if (!s.sense_retenu && vwaByPos[s.position]) {
        problematicSegs.push('pos=' + s.position + ' "' + s.fr + '" (VWA sense_chosen=' + vwaByPos[s.position] + ')')
      }
    }
    if (problematicSegs.length > 0) {
      err('V' + v.verse_num + ': ' + problematicSegs.length + ' segment(s) avec word_key mais sense_retenu null : ' + problematicSegs.join(' | '))
      senseFilledOk = false
    }
  }
  if (senseFilledOk) ok('Tous les segments non-particule avec word_key ont sense_retenu')

  // ================================================================
  // 31. VWA sense_chosen doit exister dans word_meanings avec meaning_type='etymology' ou 'quranic'
  //     (sinon l'API word panel ne le retourne pas → UI casse)
  // ================================================================
  section(31, 'VWA sense_chosen accessible via API (meaning_type etymology/quranic)')
  let apiAccessOk = true
  for (const vwa of allVwa) {
    if (!vwa.sense_chosen) continue
    // Get word_analyses for this key, then check the sense's meaning_type
    const { data: wa } = await db.from('word_analyses').select('id').eq('word_key', vwa.word_key).maybeSingle()
    if (!wa) continue
    const { data: wm } = await db.from('word_meanings').select('sense, meaning_type').eq('analysis_id', wa.id).eq('sense', vwa.sense_chosen)
    if (!wm || wm.length === 0) continue // already caught by check 5
    const accessible = wm.some(m => m.meaning_type === 'etymology' || m.meaning_type === 'quranic')
    if (!accessible) {
      const v = verses.find(x => x.id === vwa.verse_id)
      const vnum = v ? v.verse_num : vwa.verse_id
      const types = wm.map(m => m.meaning_type).join(', ')
      err('V' + vnum + ' ' + vwa.word_key + ' sense "' + vwa.sense_chosen + '" a meaning_type=' + types + ' (doit être etymology ou quranic pour être accessible par l\'UI)')
      apiAccessOk = false
    }
  }
  if (apiAccessOk) ok('Tous les sense_chosen des VWA sont accessibles via l\'API (meaning_type etymology/quranic)')

  // ================================================================
  // 32. §CRITIQUE§ couvre toutes les différences vs Hamidullah
  //     Si notre_mot n'apparaît pas dans full_translation (Hamidullah),
  //     il doit être mentionné dans §CRITIQUE§.
  // ================================================================
  section(32, 'Couverture §CRITIQUE§ — toutes les différences vs Hamidullah listées')
  // Helper: normalise sans accents pour comparer
  function norm(s) {
    return (s || '').toLowerCase()
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .replace(/['']/g, "'")
      .replace(/[^a-z0-9\s']/g, ' ')
      .trim()
  }
  // Convention universelle : Allah → Dieu — difference toujours présente, ne pas flaguer
  const CONVENTION_KEYS = ['alh', 'llh']
  let critCoverOk = true
  for (const v of verses) {
    const va = vaByVid[v.id]
    if (!va || !va.translation_arab || !va.full_translation || !va.translation_explanation) continue
    const critStart = va.translation_explanation.indexOf('§CRITIQUE§')
    if (critStart < 0) continue
    const critique = norm(va.translation_explanation.substring(critStart + 10))
    const hamid = norm(va.full_translation)
    const segs = typeof va.segments === 'string' ? JSON.parse(va.segments) : (va.segments || [])
    for (const seg of segs) {
      if (seg.is_particle || !seg.word_key || !seg.fr) continue
      if (CONVENTION_KEYS.includes(seg.word_key)) continue // Allah→Dieu : convention universelle
      const frNorm = norm(seg.fr)
      // Garder les parties de 4+ chars (ignore déterminants, "de", etc.)
      const parts = frNorm.split(/[\s'-]+/).filter(p => p.length >= 4)
      if (parts.length === 0) continue
      // Si aucune partie de notre mot n'est dans Hamidullah → différence
      const appearsInHamid = parts.some(p => hamid.includes(p))
      if (!appearsInHamid) {
        // Doit être mentionné dans §CRITIQUE§
        const appearsInCritique = parts.some(p => critique.includes(p))
        if (!appearsInCritique) {
          err('V' + v.verse_num + ' ' + seg.word_key + ': "' + seg.fr + '" absent de Hamidullah mais non mentionné dans §CRITIQUE§ — ajouter une entrée **' + seg.fr + ' vs "..."**')
          critCoverOk = false
        }
      }
    }
  }
  if (critCoverOk) ok('§CRITIQUE§ couvre toutes les différences détectées vs Hamidullah')

  // ================================================================
  // 33. translation_arab : pas de phonétique Buckwalter ou translittération arabe
  // ================================================================
  section(33, 'translation_arab en français (pas phonétique latine)')
  let phonOk = true
  for (const v of verses) {
    const va = vaByVid[v.id]
    if (!va || !va.translation_arab) continue
    const t = va.translation_arab
    // Indicateurs de phonétique : présence de mots arabes-translit typiques
    const phonMarkers = (t.match(/\b(kana|allah|allaha|alladhi|alladhina|inna|annahu|qul|huwa|hum|fa-[a-z]|wa-[a-z]|bi-[a-z]|li-[a-z]|al-[a-z])\b/gi) || []).length
    const frMarkers = (t.match(/\b(le|la|les|de|des|que|qui|est|dans|pour|avec|une)\b/gi) || []).length
    if (phonMarkers > 5 || (phonMarkers > 2 && frMarkers < phonMarkers)) {
      err('V' + v.verse_num + ': translation_arab semble être en phonétique arabe (' + phonMarkers + ' marqueurs) au lieu de français — régénérer')
      phonOk = false
    }
  }
  if (phonOk) ok('Toutes les translation_arab sont en français')

  // ================================================================
  // 34. proof_ctx : pas de dump de cohérence coranique globale (réflexion interne)
  // ================================================================
  section(34, 'proof_ctx sans dump de cohérence coranique globale')
  let coherenceOk = true
  for (const vwa of allVwa) {
    const concepts = vwa.analysis_axes?.concepts || {}
    for (const [name, body] of Object.entries(concepts)) {
      const ctx = body.proof_ctx || ''
      // Détecter les phrases types "La racine X apparaît N fois dans le Coran"
      if (/\bracine\s+[a-zʾʿ-]+\s+(?:pour\s+le\s+sens\s+de\s+\w+\s+)?apparait\s+(?:environ\s+)?\d+\s+fois\s+dans\s+le\s+coran/i.test(ctx) ||
          /\b\d+\s+occurrences?\s+dans\s+le\s+coran\b/i.test(ctx) ||
          /\*\*Cohérence coranique\*\*\s*:/i.test(ctx)) {
        err('V' + vwa.verse_id + ' ' + vwa.word_key + ' concept "' + name + '": proof_ctx contient un dump de cohérence coranique globale — la cohérence est une réflexion INTERNE, pas affichée')
        coherenceOk = false
      }
    }
  }
  if (coherenceOk) ok('Aucun proof_ctx ne dump de cohérence coranique globale')

  // ================================================================
  // 35. §CRITIQUE§ : pas de fausses critiques sur la grammaire (rection verbale)
  // ================================================================
  section(35, '§CRITIQUE§ sans fausses critiques grammaticales (rection verbale)')
  let grammarOk = true
  const FALSE_GRAMMAR_PATTERNS = [
    /préposition\s+bi-[^.]*(?:instrument|moyen|instrumental)/i,
    /préposition\s+ʿalā[^.]*(?:instrument|moyen|locatif)/i,
    /(?:bi-|li-|ʿalā)\s*\([^)]*\)\s+marque\s+l[''](?:instrument|moyen|locatif)/i,
    /la perte de la préposition (?:bi-|li-)/i,
  ]
  for (const v of verses) {
    const va = vaByVid[v.id]
    if (!va || !va.translation_explanation) continue
    const critIdx = va.translation_explanation.indexOf('§CRITIQUE§')
    if (critIdx < 0) continue
    const crit = va.translation_explanation.slice(critIdx)
    for (const pat of FALSE_GRAMMAR_PATTERNS) {
      if (pat.test(crit)) {
        err('V' + v.verse_num + ': §CRITIQUE§ contient une fausse critique grammaticale (rection verbale traitée comme marqueur sémantique) — supprimer')
        grammarOk = false
        break
      }
    }
  }
  if (grammarOk) ok('Aucune fausse critique grammaticale détectée')

  // ================================================================
  // 36. Standardisation malak/rasūl (mlk → ange, rsl → messager)
  // ================================================================
  section(36, 'malak/rasūl : mlk traduit "ange", rsl traduit "messager"')
  let mlkRslOk = true
  for (const vwa of allVwa) {
    const sc = vwa.sense_chosen || vwa.analysis_axes?.sense_chosen || ''
    if (vwa.word_key === 'mlk' && /messager/i.test(sc) && !/messag(?:e|ères?)/.test(sc)) {
      // Exception : si c'est dans un contexte spécifique (V26 où mlk = règne), skip
      if (sc === 'messager' || sc === 'messagers') {
        err('V' + vwa.verse_id + ' mlk : sense_chosen="' + sc + '" — devrait être "ange/anges" pour distinguer du rasūl. Voir Q 22:75')
        mlkRslOk = false
      }
    }
    if (vwa.word_key === 'rsl' && /\bange\b/i.test(sc)) {
      err('V' + vwa.verse_id + ' rsl : sense_chosen="' + sc + '" — devrait être "messager" (humain envoyé), pas "ange" (créature céleste = mlk)')
      mlkRslOk = false
    }
  }
  if (mlkRslOk) ok('mlk/rsl correctement distingués (ange vs messager)')

  // ================================================================
  // RÉSUMÉ FINAL
  // ================================================================
  console.log('\n╔══════════════════════════════════════════════════╗')
  console.log('║  RÉSUMÉ VALIDATION SOURATE ' + surahId + '                    ║')
  console.log('╚══════════════════════════════════════════════════╝')
  console.log('  Checks effectués : ' + checks)
  console.log('  Erreurs          : ' + errors)
  console.log('  Avertissements   : ' + warnings)
  console.log('')
  if (errors === 0 && warnings === 0) {
    console.log('  🎉 SOURATE PARFAITE — 0 erreur, 0 avertissement')
  } else if (errors === 0) {
    console.log('  ✅ SOURATE VALIDÉE — ' + warnings + ' avertissement(s) à vérifier manuellement')
  } else {
    console.log('  🚨 ' + errors + ' ERREUR(S) À CORRIGER avant validation')
  }
}

run().catch(e => { console.error('FATAL:', e); process.exit(1) })
