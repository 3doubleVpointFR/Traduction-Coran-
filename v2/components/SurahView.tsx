'use client'

import { useState, useCallback, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import VersePanel from './VersePanel'
import WordPanel from './WordPanel'

// ═══════════════════════════════════════════════════════════════
// Mobile Bottom Sheet — drag pour fermer
// ═══════════════════════════════════════════════════════════════
function MobileSheet({
  onClose,
  analysis,
  loading,
  activeWordKey,
}: {
  onClose: () => void
  analysis: WordAnalysis | null
  loading: boolean
  activeWordKey: string
}) {
  const [dragY, setDragY] = useState(0)         // px tirés vers le bas
  const startYRef = useRef<number | null>(null)
  const [closing, setClosing] = useState(false)

  const onTouchStart = (e: React.TouchEvent) => {
    startYRef.current = e.touches[0].clientY
  }
  const onTouchMove = (e: React.TouchEvent) => {
    if (startYRef.current === null) return
    const delta = e.touches[0].clientY - startYRef.current
    if (delta > 0) setDragY(delta) // ne suivre que vers le bas
  }
  const onTouchEnd = () => {
    if (dragY > 120) {
      // Threshold dépassé → fermeture animée
      setClosing(true)
      setTimeout(onClose, 220)
    } else {
      setDragY(0) // snap-back
    }
    startYRef.current = null
  }

  return (
    <div className="lg:hidden fixed inset-0 z-[60]">
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes sheetSlideUp {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }
        @keyframes sheetSlideDown {
          to { transform: translateY(100%); }
        }
        @keyframes backdropFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes backdropFadeOut {
          to { opacity: 0; }
        }
      ` }} />

      {/* Backdrop */}
      <div
        className="absolute inset-0"
        style={{
          background: 'rgba(26, 20, 16, 0.55)',
          backdropFilter: 'blur(2px)',
          animation: closing ? 'backdropFadeOut 0.22s ease-out forwards' : 'backdropFadeIn 0.25s ease-out',
          opacity: dragY > 0 ? Math.max(0.2, 1 - dragY / 400) : undefined,
        }}
        onClick={() => { setClosing(true); setTimeout(onClose, 220) }}
      />

      {/* Sheet */}
      <div
        className="absolute left-0 right-0 bottom-0 flex flex-col"
        style={{
          background: '#FFFFFF',
          // dvh = dynamic viewport height : s'adapte automatiquement quand la barre
          // URL apparaît/disparaît sur mobile. Fallback en vh + max calculé en pixels.
          height: 'min(88dvh, calc(100vh - 50px))',
          maxHeight: 'calc(100vh - 50px)',
          borderTopLeftRadius: '20px',
          borderTopRightRadius: '20px',
          boxShadow: '0 -8px 32px rgba(0,0,0,0.18)',
          border: '1px solid rgba(184,150,46,0.3)',
          borderBottom: 'none',
          transform: dragY > 0 ? `translateY(${dragY}px)` : undefined,
          transition: dragY === 0 ? 'transform 0.25s cubic-bezier(0.32, 0.72, 0, 1)' : 'none',
          animation: closing
            ? 'sheetSlideDown 0.22s cubic-bezier(0.32, 0.72, 0, 1) forwards'
            : (dragY === 0 ? 'sheetSlideUp 0.3s cubic-bezier(0.32, 0.72, 0, 1)' : undefined),
        }}
      >
        {/* Drag handle — la zone tactile pour tirer la feuille */}
        <div
          className="flex justify-center pt-2.5 pb-2 flex-shrink-0 cursor-grab"
          style={{
            background: '#FFFFFF',
            borderTopLeftRadius: '20px',
            borderTopRightRadius: '20px',
            touchAction: 'none', // empêche scroll vertical pendant le drag
          }}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div style={{
            width: 44,
            height: 4,
            borderRadius: 2,
            background: dragY > 0 ? '#B8962E' : 'rgba(184,150,46,0.35)',
            transition: 'background 0.2s',
          }} />
        </div>

        {/* Contenu scrollable */}
        <div className="flex-1 overflow-y-auto overscroll-contain">
          <WordPanel
            analysis={analysis}
            loading={loading}
            activeWordKey={activeWordKey}
            onClose={onClose}
          />
        </div>
      </div>
    </div>
  )
}


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
      {/* Surah header — compact, raffiné, cohérent avec la home */}
      <header className="surah-header text-center pt-4 pb-4 mb-5">
        <h1
          className="font-arabic"
          lang="ar"
          dir="rtl"
          style={{
            color: '#B8962E',
            fontSize: 'clamp(2rem, 4vw, 2.75rem)',
            lineHeight: 1.1,
            margin: 0,
            textShadow: '0 1px 0 rgba(184,150,46,0.06)',
          }}
        >
          {surah.name_ar}
        </h1>

        {/* Ornement décoratif — signature visuelle cohérente avec le hero d'accueil */}
        <div
          aria-hidden="true"
          className="flex items-center justify-center gap-4 mt-3 mb-3 mx-auto"
          style={{ maxWidth: '300px' }}
        >
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(184,150,46,0.45))' }} />
          <span style={{ color: '#B8962E', fontSize: '11px', lineHeight: 1, opacity: 0.85 }}>✦</span>
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(to left, transparent, rgba(184,150,46,0.45))' }} />
        </div>

        <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
          <span
            className="uppercase"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              color: '#1A1410',
              letterSpacing: '0.12em',
              fontSize: 'clamp(15px, 2vw, 18px)',
              fontWeight: 600,
            }}
          >
            {surah.name_latin}
          </span>
          <span aria-hidden="true" style={{ color: 'rgba(184,150,46,0.5)', fontSize: '14px' }}>·</span>
          <span
            className="italic"
            style={{
              color: '#6B5E52',
              fontSize: 'clamp(14px, 2vw, 17px)',
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            {surah.name_fr}
          </span>
        </div>

        {surah.id !== 1 && surah.id !== 9 && (
          <p
            className="font-arabic mt-4"
            lang="ar"
            dir="rtl"
            style={{
              color: '#8A7E72',
              fontSize: 'clamp(18px, 2.5vw, 22px)',
              lineHeight: 1.6,
              opacity: 0.85,
              margin: '16px 0 0 0',
            }}
          >
            بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ
          </p>
        )}

        <style dangerouslySetInnerHTML={{ __html: `
          .surah-header {
            animation: surahHeaderIn 380ms cubic-bezier(0.16, 1, 0.3, 1) both;
          }
          @keyframes surahHeaderIn {
            from { opacity: 0; transform: translateY(-6px); }
            to   { opacity: 1; transform: translateY(0); }
          }
          @media (prefers-reduced-motion: reduce) {
            .surah-header { animation: none !important; }
          }
        ` }} />
      </header>

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
      <div
        data-tour-word-panel="1"
        className="word-panel-wrapper hidden lg:block lg:sticky lg:top-[68px] lg:self-start lg:max-h-[calc(100vh-80px)] lg:overflow-y-auto relative"
        style={{
          background: '#FFFFFF',
          border: '1px solid rgba(184,150,46,0.25)',
          borderRadius: '18px',
          boxShadow: '0 12px 32px rgba(120,90,30,0.08), 0 2px 8px rgba(120,90,30,0.05)',
        }}
      >
        {/* Bandeau or décoratif en haut — signature visuelle */}
        <div
          aria-hidden="true"
          style={{
            position: 'sticky',
            top: 0,
            left: 0,
            right: 0,
            height: '3px',
            background: 'linear-gradient(to right, transparent 0%, #C9A23A 25%, #B8962E 50%, #C9A23A 75%, transparent 100%)',
            opacity: 0.85,
            zIndex: 2,
            borderTopLeftRadius: '18px',
            borderTopRightRadius: '18px',
          }}
        />

        {activeWordKey ? (
          <div key={activeWordKey} className="word-panel-content">
            <WordPanel
              analysis={wordAnalysis}
              loading={loadingWord}
              activeWordKey={activeWordKey}
              onClose={handleClosePanel}
            />
          </div>
        ) : (
          <div className="word-panel-placeholder side-panel flex flex-col items-center px-8 text-center" style={{ paddingTop: '64px', paddingBottom: '72px', background: 'transparent', border: 'none', boxShadow: 'none' }}>
            {/* Calligraphie ʿayn en filigrane */}
            <div
              className="font-arabic mb-5"
              lang="ar"
              dir="rtl"
              aria-hidden="true"
              style={{
                fontSize: '92px',
                color: 'rgba(184,150,46,0.32)',
                lineHeight: 1,
                textShadow: '0 1px 0 rgba(255,255,255,0.4)',
              }}
            >
              ع
            </div>

            {/* Ornement fin sous la lettre */}
            <div
              aria-hidden="true"
              className="flex items-center justify-center gap-2 mb-5"
              style={{ color: '#B8962E', opacity: 0.5 }}
            >
              <div className="h-px" style={{ width: '28px', background: 'rgba(184,150,46,0.4)' }} />
              <span style={{ fontSize: '10px' }}>✦</span>
              <div className="h-px" style={{ width: '28px', background: 'rgba(184,150,46,0.4)' }} />
            </div>

            <h3
              className="mb-3"
              style={{
                color: '#1A1410',
                fontSize: '20px',
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 600,
                letterSpacing: '0.04em',
              }}
            >
              Analyse lexicale
            </h3>

            <p
              className="mb-5"
              style={{
                color: '#5A4E42',
                fontSize: '14px',
                lineHeight: 1.7,
                maxWidth: '300px',
              }}
            >
              Clique sur un <span className="font-semibold" style={{ color: '#8A7428' }}>mot souligné</span> d&apos;un verset pour ouvrir son analyse complète.
            </p>

            <ul className="text-left space-y-2.5" style={{ color: '#5A4E42', fontSize: '13px', maxWidth: '300px' }}>
              {[
                'La racine arabe et ses sens étymologiques',
                '5 éclairages pour comprendre chaque sens',
                'La justification du sens retenu',
                'Les occurrences dans le Coran',
                'Expressions du quotidien avec le mot',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span aria-hidden="true" style={{ color: '#B8962E', fontSize: '14px', lineHeight: 1.4, flexShrink: 0, marginTop: '1px' }}>◇</span>
                  <span style={{ lineHeight: 1.55 }}>{item}</span>
                </li>
              ))}
            </ul>

            <div
              className="mt-7 inline-flex items-center gap-3"
              style={{
                color: '#8A7428',
                fontSize: '10.5px',
                letterSpacing: '0.18em',
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 700,
                textTransform: 'uppercase',
              }}
            >
              <span style={{ width: '28px', height: '1px', background: 'rgba(184,150,46,0.5)', display: 'inline-block' }} />
              <span>Sélectionne un mot</span>
              <span style={{ width: '28px', height: '1px', background: 'rgba(184,150,46,0.5)', display: 'inline-block' }} />
            </div>
          </div>
        )}

        <style dangerouslySetInnerHTML={{ __html: `
          .word-panel-content {
            animation: wpFade 280ms cubic-bezier(0.16, 1, 0.3, 1) both;
          }
          .word-panel-placeholder {
            animation: wpFade 320ms ease-out both;
          }
          @keyframes wpFade {
            from { opacity: 0; transform: translateY(4px); }
            to   { opacity: 1; transform: translateY(0); }
          }
          @media (prefers-reduced-motion: reduce) {
            .word-panel-content,
            .word-panel-placeholder {
              animation: none !important;
            }
          }
        ` }} />
      </div>
    </div>

    {/* ═══ MOBILE BOTTOM SHEET (< 1024px) ═══ */}
    {activeWordKey && (
      <MobileSheet
        onClose={handleClosePanel}
        analysis={wordAnalysis}
        loading={loadingWord}
        activeWordKey={activeWordKey}
      />
    )}
    </div>
  )
}
