'use client'

import { useState, useCallback, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import VersePanel from './VersePanel'
import WordPanel from './WordPanel'

interface Surah {
  id: number
  name_ar: string
  name_fr: string
  name_latin: string
  verse_count: number
  revelation: string
}

interface Verse {
  id: number
  surah_id: number
  verse_num: number
  arabic_text: string
}

interface Word {
  id: number
  verse_id: number
  position: number
  arabic: string
  root: string
  transliteration: string
  pos_tag: string
}

interface SyncSegment {
  arabic?: string
  phon: string
  fr: string
  word_key: string | null
  is_particle: boolean
  position?: number
}

interface VerseAnalysis {
  id: number
  verse_id: number
  segments: SyncSegment[]
  full_translation?: string
  translation_arab?: string
}

interface WordAnalysis {
  word_key: string
  root_ar: string
  root_phon: string
  root_meaning: string
  retenu: string
  total_occurrences: number
  etymology: { id: number; sense: string; sense_ar?: string; description: string; status?: string; occ_count?: number; occ_refs?: string[]; proof_ref?: string; proof_phon?: string; proof_tr?: string; proof_ctx?: string }[]
  quranic_meanings: { id: number; sense: string; occ_count: number; occ_refs: string[]; proof_ref: string; proof_phon: string; proof_tr: string; proof_ctx: string; status?: string }[]
  occurrences: { id: number; before_ref: string; before_ar: string; before_phon: string; before_tr: string; main_ref: string; main_ar: string; main_phon: string; main_tr: string; after_ref: string; after_ar: string; after_phon: string; after_tr: string }[]
  daily: { id: number; arabic: string; phon: string; french: string }[]
  analysis_counts: { total_analyzed: number; total_qac: number; by_sense: Record<string, number> }
  occurrence_retenu?: string
  occurrence_axes?: Record<string, string> | null
  occurrence_reason?: string
}

export interface JobProgress {
  step: number
  total: number
  label: string
  detail: string
}

interface Props {
  surah: Surah
  verses: Verse[]
  wordsByVerse: Record<number, Word[]>
  analysesByVerse: Record<number, VerseAnalysis | unknown>
}

export default function SurahView({ surah, verses, wordsByVerse, analysesByVerse }: Props) {
  const router = useRouter()
  const [activeWordKey, setActiveWordKey] = useState<string | null>(null)
  const [wordAnalysis, setWordAnalysis] = useState<WordAnalysis | null>(null)
  const [loadingWord, setLoadingWord] = useState(false)
  const [analyzingVerse, setAnalyzingVerse] = useState<number | null>(null)
  const [jobProgress, setJobProgress] = useState<JobProgress | null>(null)
  const [verseAnalyses, setVerseAnalyses] = useState<Record<number, VerseAnalysis>>(
    analysesByVerse as Record<number, VerseAnalysis>
  )
  const pollRef = useRef<ReturnType<typeof setInterval> | null>(null)

  // Force fresh data from server on mount (bypass Next.js router cache)
  useEffect(() => {
    router.refresh()
  }, [router])

  const handleWordClick = useCallback(async (wordKey: string, activeId?: string, senseRetenu?: string, verseId?: number, position?: number) => {
    const newActiveId = activeId ?? wordKey
    // Set active ID for highlighting (unique per segment)
    setActiveWordKey(newActiveId)
    // Load word data using the base word_key, with optional verse_id+position for occurrence-specific data
    setLoadingWord(true)
    try {
      let url = `/api/word/${wordKey}?_t=${Date.now()}`
      if (verseId != null && position != null) {
        url += `&verse_id=${verseId}&position=${position}`
      }
      const res = await fetch(url)
      if (res.ok) {
        const data = await res.json()
        // Use occurrence-specific retenu from verse_word_analyses if available,
        // otherwise fall back to the segment's sense_retenu
        if (data.occurrence_retenu) {
          data.retenu = data.occurrence_retenu
        } else if (senseRetenu) {
          data.retenu = senseRetenu
        }
        // Replace axes of ALL senses with verse-specific axes if available
        if (data.occurrence_axes && data.etymology) {
          const occ = data.occurrence_axes as Record<string, unknown>
          const concepts = (occ.concepts || {}) as Record<string, Record<string, unknown>>
          const senses = (occ.senses || {}) as Record<string, Record<string, string>>
          if (Object.keys(concepts).length > 0) {
            // V2 format: analysis_axes.concepts = { "Concept": { proof_ctx, axe1..5, status, senses: [...] } }
            // Pass concept_chosen to WordPanel
            data.concept_chosen = occ.concept_chosen as string || null
            console.log('[DEBUG] concept_chosen set to:', data.concept_chosen, 'from occ:', occ.concept_chosen)
            // Inject concept axes into each sense that belongs to that concept
            data.etymology = data.etymology.map((m: Record<string, unknown>) => {
              const senseConcept = m.concept as string
              if (senseConcept && concepts[senseConcept]) {
                const cAxes = concepts[senseConcept] as Record<string, string>
                return {
                  ...m,
                  status: cAxes.status || m.status,
                  proof_ctx: cAxes.proof_ctx || m.proof_ctx,
                  axe1_verset: cAxes.axe1_verset || m.axe1_verset,
                  axe2_voisins: cAxes.axe2_voisins || m.axe2_voisins,
                  axe3_sourate: cAxes.axe3_sourate || m.axe3_sourate,
                  axe4_coherence: cAxes.axe4_coherence || m.axe4_coherence,
                  axe5_frequence: cAxes.axe5_frequence || m.axe5_frequence,
                }
              }
              return m
            })
          } else if (Object.keys(senses).length > 0) {
            // V1 format: analysis_axes.senses = { "sens1": { proof_ctx, axe1..5, status }, "sens2": ... }
            data.etymology = data.etymology.map((m: Record<string, unknown>) => {
              const senseAxes = senses[m.sense as string]
              if (senseAxes) {
                return {
                  ...m,
                  status: senseAxes.status || m.status,
                  proof_ctx: senseAxes.proof_ctx || m.proof_ctx,
                  axe1_verset: senseAxes.axe1_verset || m.axe1_verset,
                  axe2_voisins: senseAxes.axe2_voisins || m.axe2_voisins,
                  axe3_sourate: senseAxes.axe3_sourate || m.axe3_sourate,
                  axe4_coherence: senseAxes.axe4_coherence || m.axe4_coherence,
                  axe5_frequence: senseAxes.axe5_frequence || m.axe5_frequence,
                }
              }
              return m
            })
          } else {
            // Old format: analysis_axes = { proof_ctx, axe1..5 } (only retenu sense)
            const axes = occ as Record<string, string>
            data.etymology = data.etymology.map((m: Record<string, unknown>) => {
              if (m.sense === data.retenu) {
                return {
                  ...m,
                  proof_ctx: axes.proof_ctx || m.proof_ctx,
                  axe1_verset: axes.axe1_verset || m.axe1_verset,
                  axe2_voisins: axes.axe2_voisins || m.axe2_voisins,
                  axe3_sourate: axes.axe3_sourate || m.axe3_sourate,
                  axe4_coherence: axes.axe4_coherence || m.axe4_coherence,
                  axe5_frequence: axes.axe5_frequence || m.axe5_frequence,
                }
              }
              return m
            })
          }
        }
        setWordAnalysis(data)
      } else {
        setWordAnalysis(null)
      }
    } catch {
      setWordAnalysis(null)
    } finally {
      setLoadingWord(false)
    }
  }, [])

  const handleAnalyzeVerse = useCallback(async (verseId: number, surahId: number, verseNum: number) => {
    setAnalyzingVerse(verseId)
    setJobProgress(null)

    try {
      const res = await fetch('/api/analyze/verse', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ surah_id: surahId, verse_num: verseNum }),
      })

      if (!res.ok) {
        const err = await res.json()
        console.error('Analysis launch failed:', err.error)
        setAnalyzingVerse(null)
        return
      }

      const { job_id } = await res.json()

      // Poll every 2 seconds
      pollRef.current = setInterval(async () => {
        try {
          const pollRes = await fetch(`/api/jobs/${job_id}`)
          const job = await pollRes.json()

          setJobProgress({
            step: job.step_current ?? 0,
            total: job.step_total ?? 6,
            label: job.step ?? '',
            detail: job.step_detail ?? '',
          })

          if (job.status === 'done' || job.status === 'failed') {
            if (pollRef.current) clearInterval(pollRef.current)
            pollRef.current = null

            if (job.status === 'done') {
              const verseRes = await fetch(`/api/verse/${surahId}/${verseNum}?_t=${Date.now()}`)
              const verseData = await verseRes.json()
              if (verseData.analysis) {
                setVerseAnalyses(prev => ({ ...prev, [verseId]: verseData.analysis }))
              }
            }

            setAnalyzingVerse(null)
            setJobProgress(null)
          }
        } catch (err) {
          console.error('Poll error:', err)
        }
      }, 10000)
    } catch (err) {
      console.error('Failed to analyze verse:', err)
      setAnalyzingVerse(null)
    }
  }, [])

  const handleClosePanel = useCallback(() => {
    setActiveWordKey(null)
    setWordAnalysis(null)
  }, [])

  // Lock body scroll quand le bottom sheet mobile est ouvert
  useEffect(() => {
    if (activeWordKey) {
      // Seulement si on est en mode mobile (< lg = < 1024px)
      const isMobile = window.matchMedia('(max-width: 1023px)').matches
      if (isMobile) {
        const original = document.body.style.overflow
        document.body.style.overflow = 'hidden'
        return () => { document.body.style.overflow = original }
      }
    }
  }, [activeWordKey])

  return (
    <div>
      {/* Surah header — compact */}
      <div className="text-center pb-3 mb-4">
        <h1 className="font-arabic text-5xl" style={{ color: '#B8962E' }}>{surah.name_ar}</h1>
        <div className="flex items-center justify-center gap-2 mt-2">
          <span className="uppercase tracking-wider" style={{ fontFamily: "'Cormorant Garamond', serif", color: '#1A1410', letterSpacing: '0.08em', fontSize: '18px' }}>
            {surah.name_latin}
          </span>
          <span style={{ color: 'rgba(184,150,46,0.4)', fontSize: '18px' }}>·</span>
          <span style={{ color: '#6B5E52', fontSize: '18px' }}>{surah.name_fr}</span>
        </div>
        {surah.id !== 1 && surah.id !== 9 && (
          <p className="font-arabic text-xl mt-2" dir="rtl" style={{ color: '#9E9089' }}>
            بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ
          </p>
        )}
      </div>

      {/* Grid: verses + panel (aligned) */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_minmax(320px,520px)] gap-6">
      {/* Left column: verses */}
      <div className="space-y-4">
        {/* Verse list */}
        {verses.map((verse) => (
          <VersePanel
            key={verse.id}
            verse={verse}
            words={wordsByVerse[verse.id] ?? []}
            analysis={verseAnalyses[verse.id] as VerseAnalysis | undefined}
            isAnalyzing={analyzingVerse === verse.id}
            jobProgress={analyzingVerse === verse.id ? jobProgress : null}
            activeWordKey={activeWordKey}
            onWordClick={handleWordClick}
            onAnalyze={() => handleAnalyzeVerse(verse.id, verse.surah_id, verse.verse_num)}
          />
        ))}
      </div>

      {/* Right column: word panel — DESKTOP UNIQUEMENT (≥ 1024px) */}
      <div className="hidden lg:block lg:sticky lg:top-[68px] lg:self-start lg:max-h-[calc(100vh-80px)] lg:overflow-y-auto rounded-lg" style={{ border: '1px solid rgba(184,150,46,0.3)', boxShadow: '0 2px 12px rgba(184,150,46,0.12)' }}>
        {activeWordKey ? (
          <WordPanel
            analysis={wordAnalysis}
            loading={loadingWord}
            activeWordKey={activeWordKey}
            onClose={handleClosePanel}
          />
        ) : (
          <div className="side-panel flex flex-col items-center px-8 text-center" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
            <div className="font-arabic mb-6" style={{ fontSize: '70px', color: 'rgba(184,150,46,0.35)', lineHeight: 1 }}>ع</div>
            <h3 className="mb-3" style={{ color: '#1A1410', fontSize: '18px', fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
              Analyse lexicale
            </h3>
            <p style={{ color: '#6B5E52', fontSize: '14px', lineHeight: '1.7', maxWidth: '320px' }}>
              Cliquez sur un <strong style={{ color: '#1A1410' }}>mot souligné</strong> dans un verset pour explorer :
            </p>
            <ul className="mt-4 text-left space-y-2" style={{ color: '#6B5E52', fontSize: '13px' }}>
              <li className="flex items-start gap-2">
                <span style={{ color: '#B8962E', fontSize: '16px', lineHeight: 1 }}>&#9672;</span>
                <span>La racine arabe et ses sens étymologiques</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: '#B8962E', fontSize: '16px', lineHeight: 1 }}>&#9672;</span>
                <span>5 éclairages pour comprendre chaque sens</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: '#B8962E', fontSize: '16px', lineHeight: 1 }}>&#9672;</span>
                <span>La justification du sens retenu</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: '#B8962E', fontSize: '16px', lineHeight: 1 }}>&#9672;</span>
                <span>Les occurrences dans le Coran</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: '#B8962E', fontSize: '16px', lineHeight: 1 }}>&#9672;</span>
                <span>Expressions du quotidien avec le mot</span>
              </li>
            </ul>
            <div className="mt-8 flex items-center gap-3" style={{ color: '#B8962E', fontSize: '11px', letterSpacing: '0.1em' }}>
              <span style={{ width: '30px', height: '1px', background: 'rgba(184,150,46,0.6)', display: 'inline-block' }} />
              <span>SÉLECTIONNEZ UN MOT</span>
              <span style={{ width: '30px', height: '1px', background: 'rgba(184,150,46,0.6)', display: 'inline-block' }} />
            </div>
          </div>
        )}
      </div>
    </div>

    {/* ═══ MOBILE BOTTOM SHEET (< 1024px) ═══ */}
    {activeWordKey && (
      <div className="lg:hidden fixed inset-0 z-[60]">
        {/* Animation keyframes injectées localement */}
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes sheetSlideUp {
            from { transform: translateY(100%); }
            to { transform: translateY(0); }
          }
          @keyframes backdropFadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          .word-sheet-backdrop { animation: backdropFadeIn 0.25s ease-out; }
          .word-sheet { animation: sheetSlideUp 0.3s cubic-bezier(0.32, 0.72, 0, 1); }
        ` }} />

        {/* Backdrop */}
        <div
          className="word-sheet-backdrop absolute inset-0"
          style={{ background: 'rgba(26, 20, 16, 0.55)', backdropFilter: 'blur(2px)' }}
          onClick={handleClosePanel}
        />

        {/* Sheet */}
        <div
          className="word-sheet absolute left-0 right-0 bottom-0 flex flex-col"
          style={{
            background: '#FFFFFF',
            height: '88vh',
            borderTopLeftRadius: '20px',
            borderTopRightRadius: '20px',
            boxShadow: '0 -8px 32px rgba(0,0,0,0.18)',
            border: '1px solid rgba(184,150,46,0.3)',
            borderBottom: 'none',
          }}
        >
          {/* Drag handle (visuel uniquement pour l'instant) */}
          <div
            className="flex justify-center pt-2.5 pb-1.5 flex-shrink-0"
            style={{
              background: '#FFFFFF',
              borderTopLeftRadius: '20px',
              borderTopRightRadius: '20px',
            }}
          >
            <div style={{
              width: 44,
              height: 4,
              borderRadius: 2,
              background: 'rgba(184,150,46,0.35)',
            }} />
          </div>

          {/* Contenu scrollable du WordPanel */}
          <div className="flex-1 overflow-y-auto overscroll-contain">
            <WordPanel
              analysis={wordAnalysis}
              loading={loadingWord}
              activeWordKey={activeWordKey}
              onClose={handleClosePanel}
            />
          </div>
        </div>
      </div>
    )}
    </div>
  )
}
