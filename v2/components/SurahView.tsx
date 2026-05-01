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
  // Refs pour manipulation DOM directe (PAS de React state pendant le drag,
  // sinon re-render à 60fps = saccade). On utilise refs + style.transform.
  const startYRef = useRef<number | null>(null)
  const lastDeltaRef = useRef<number>(0)
  const sheetRef = useRef<HTMLDivElement | null>(null)
  const backdropRef = useRef<HTMLDivElement | null>(null)

  const closeAnimated = () => {
    if (sheetRef.current) {
      sheetRef.current.style.transition = 'transform 220ms cubic-bezier(0.32, 0.72, 0, 1)'
      sheetRef.current.style.transform = 'translateY(100%)'
    }
    if (backdropRef.current) {
      backdropRef.current.style.transition = 'opacity 220ms ease-out'
      backdropRef.current.style.opacity = '0'
    }
    setTimeout(onClose, 220)
  }

  const onTouchStart = (e: React.TouchEvent) => {
    startYRef.current = e.touches[0].clientY
    lastDeltaRef.current = 0
    // Désactive transition + animation entrance pour suivre le doigt sans lag
    if (sheetRef.current) {
      sheetRef.current.style.transition = 'none'
      sheetRef.current.style.animation = 'none'
    }
    if (backdropRef.current) {
      backdropRef.current.style.transition = 'none'
    }
  }
  const onTouchMove = (e: React.TouchEvent) => {
    if (startYRef.current === null) return
    const delta = e.touches[0].clientY - startYRef.current
    if (delta > 0) {
      lastDeltaRef.current = delta
      // Direct DOM — aucun re-render React
      if (sheetRef.current) {
        sheetRef.current.style.transform = `translateY(${delta}px)`
      }
      if (backdropRef.current) {
        backdropRef.current.style.opacity = String(Math.max(0.2, 1 - delta / 400))
      }
    }
  }
  const onTouchEnd = () => {
    const delta = lastDeltaRef.current
    if (delta > 120) {
      closeAnimated()
    } else {
      // Snap-back smooth
      if (sheetRef.current) {
        sheetRef.current.style.transition = 'transform 240ms cubic-bezier(0.32, 0.72, 0, 1)'
        sheetRef.current.style.transform = 'translateY(0)'
      }
      if (backdropRef.current) {
        backdropRef.current.style.transition = 'opacity 240ms ease-out'
        backdropRef.current.style.opacity = ''
      }
    }
    startYRef.current = null
    lastDeltaRef.current = 0
  }

  return (
    <div className="lg:hidden fixed inset-0 z-[60]">
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes sheetSlideUp {
          from { transform: translateY(100%); opacity: 0.6; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes sheetSlideDown {
          to { transform: translateY(100%); opacity: 0.6; }
        }
        @keyframes backdropFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes backdropFadeOut {
          to { opacity: 0; }
        }
        @keyframes sheetHandlePulse {
          0%, 100% { transform: scaleX(1); opacity: 1; }
          50% { transform: scaleX(1.18); opacity: 0.7; }
        }
        .sheet-handle-bar {
          animation: sheetHandlePulse 2.4s ease-in-out infinite;
          animation-delay: 1s;
          transform-origin: center;
        }
        @media (prefers-reduced-motion: reduce) {
          .sheet-handle-bar {
            animation: none !important;
          }
        }
      ` }} />

      {/* Backdrop */}
      <div
        ref={backdropRef}
        className="absolute inset-0"
        style={{
          background: 'rgba(26, 20, 16, 0.55)',
          backdropFilter: 'blur(2px)',
          animation: 'backdropFadeIn 0.25s ease-out',
        }}
        onClick={closeAnimated}
      />

      {/* Sheet */}
      <div
        ref={sheetRef}
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
          animation: 'sheetSlideUp 0.3s cubic-bezier(0.32, 0.72, 0, 1)',
          willChange: 'transform',
        }}
      >
        {/* Drag handle — la zone tactile pour tirer la feuille */}
        <div
          className="relative flex justify-center pt-2.5 pb-2 flex-shrink-0 cursor-grab"
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
          {/* Bandeau or décoratif en haut — signature visuelle cohérente */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '2.5px',
              background: 'linear-gradient(to right, transparent 0%, #C9A23A 25%, #B8962E 50%, #C9A23A 75%, transparent 100%)',
              opacity: 0.85,
              borderTopLeftRadius: '20px',
              borderTopRightRadius: '20px',
              pointerEvents: 'none',
            }}
          />
          <div
            className="sheet-handle-bar"
            style={{
              width: 44,
              height: 4,
              borderRadius: 2,
              background: 'rgba(184,150,46,0.4)',
              transition: 'background 0.2s',
            }}
          />
        </div>

        {/* Contenu scrollable — optimisations mobile (scroll fluide sans bounce janky) */}
        <div
          className="flex-1 overflow-y-auto"
          style={{
            WebkitOverflowScrolling: 'touch',
            contain: 'layout paint',
            overscrollBehavior: 'none', // désactive complètement le bounce qui lague
            touchAction: 'pan-y',
          }}
        >
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


// Pagination mobile : numéros de pages cliquables, style minimaliste moderne
function Pagination({ current, total, onChange, delayMs }: { current: number; total: number; onChange: (page: number) => void; delayMs?: number }) {
  const pages: (number | 'ellipsis')[] = []
  const showAround = 1
  const start = Math.max(2, current - showAround)
  const end = Math.min(total - 1, current + showAround)
  pages.push(1)
  if (start > 2) pages.push('ellipsis')
  for (let i = start; i <= end; i++) pages.push(i)
  if (end < total - 1) pages.push('ellipsis')
  if (total > 1) pages.push(total)

  return (
    <div
      className="surah-pagination page-section-anim flex flex-col items-center gap-1.5 py-3"
      style={delayMs != null ? { animationDelay: `${delayMs}ms` } : undefined}
    >
      {/* Indicateur "Page X sur Y" en italique Cormorant */}
      <p
        className="italic"
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: '11px',
          color: '#8A7E72',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          margin: 0,
          lineHeight: 1,
        }}
      >
        Page <strong style={{ color: '#B8962E', fontWeight: 700, fontStyle: 'normal' }}>{current}</strong> sur {total}
      </p>

      {/* Boutons pages avec ellipses */}
      <div className="flex items-center gap-0.5 flex-wrap justify-center">
        <button
          type="button"
          onClick={() => current > 1 && onChange(current - 1)}
          disabled={current === 1}
          aria-label="Page précédente"
          className="surah-page-arrow"
        >
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        {pages.map((p, i) =>
          p === 'ellipsis' ? (
            <span
              key={`e-${i}`}
              className="surah-page-ellipsis"
              aria-hidden="true"
            >
              …
            </span>
          ) : (
            <button
              key={p}
              type="button"
              onClick={() => onChange(p)}
              aria-label={`Page ${p}`}
              aria-current={p === current ? 'page' : undefined}
              className={`surah-page-num${p === current ? ' is-active' : ''}`}
            >
              {p}
            </button>
          )
        )}
        <button
          type="button"
          onClick={() => current < total && onChange(current + 1)}
          disabled={current === total}
          aria-label="Page suivante"
          className="surah-page-arrow"
        >
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
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

// Convertit un entier en chiffres romains (max 114 → CXIV)
function toRoman(n: number): string {
  const map: Array<[number, string]> = [
    [100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'],
    [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I'],
  ]
  let r = ''
  for (const [v, s] of map) {
    while (n >= v) { r += s; n -= v }
  }
  return r
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
  currentPage: number
  totalPages: number
  pageSize: number
  allDoneVerseNums: number[]
}

export default function SurahView({ surah, verses, wordsByVerse, analysesByVerse, currentPage, totalPages, pageSize, allDoneVerseNums }: Props) {
  const router = useRouter()
  const [activeWordKey, setActiveWordKey] = useState<string | null>(null)
  const [wordAnalysis, setWordAnalysis] = useState<WordAnalysis | null>(null)
  const [loadingWord, setLoadingWord] = useState(false)
  const [analyzingVerse, setAnalyzingVerse] = useState<number | null>(null)
  const [jobProgress, setJobProgress] = useState<JobProgress | null>(null)
  const [jumpInput, setJumpInput] = useState('')

  // Helper : scroll smooth + flash or sur un verset déjà rendu dans le DOM
  const HEADER_GAP = 70
  const scrollAndFlash = (n: number) => {
    const tryScroll = (attempt = 0) => {
      const el = document.getElementById(`verse-${surah.id}-${n}`) as HTMLElement | null
      if (el) {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            const rect = el.getBoundingClientRect()
            const targetY = Math.max(0, window.scrollY + rect.top - HEADER_GAP)
            window.scrollTo({ top: targetY, behavior: 'smooth' })
            el.classList.add('verse-jump-flash')
            setTimeout(() => el.classList.remove('verse-jump-flash'), 1500)
            // Correction après le smooth scroll
            setTimeout(() => {
              const r = el.getBoundingClientRect()
              if (Math.abs(r.top - HEADER_GAP) > 6) {
                const ty = Math.max(0, window.scrollY + r.top - HEADER_GAP)
                window.scrollTo({ top: ty, behavior: 'auto' })
              }
            }, 750)
          })
        })
        return
      }
      if (attempt < 30) {
        setTimeout(() => tryScroll(attempt + 1), 50)
      }
    }
    tryScroll()
  }

  // Sur changement de page : si hash → scroll vers verset (verse jumper).
  // Sinon (clic pagination) → scroll fluide vers le top.
  // On utilise scroll: false sur router.push pour éviter le saut brutal de Next.js.
  useEffect(() => {
    if (typeof window === 'undefined') return
    const hash = window.location.hash
    if (hash && hash.startsWith(`#verse-${surah.id}-`)) {
      const verseNum = parseInt(hash.replace(`#verse-${surah.id}-`, ''), 10)
      if (Number.isFinite(verseNum)) {
        scrollAndFlash(verseNum)
        window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}`)
      }
      return
    }
    // Pas de hash → scroll fluide vers le top (pagination classique).
    window.scrollTo({ top: 0, behavior: 'smooth' })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage])

  // Saute vers le verset {n} : si sur même page → scroll. Sinon, navigue à la
  // bonne page (URL change → server fetch → useEffect ci-dessus scrolle).
  const jumpToVerse = (n: number) => {
    if (!Number.isFinite(n) || n < 1 || n > surah.verse_count) return
    const idxInDone = allDoneVerseNums.indexOf(n)
    if (idxInDone === -1) return // verset non analysé, ignore
    const targetPage = Math.floor(idxInDone / pageSize) + 1
    if (targetPage !== currentPage) {
      // Navigue à la page cible avec hash → server fetch → effet scroll
      router.push(`/surah/${surah.id}?page=${targetPage}#verse-${surah.id}-${n}`)
      return
    }
    // Même page : scroll direct
    scrollAndFlash(n)
  }
  const [verseAnalyses, setVerseAnalyses] = useState<Record<number, VerseAnalysis>>(
    analysesByVerse as Record<number, VerseAnalysis>
  )
  const pollRef = useRef<ReturnType<typeof setInterval> | null>(null)

  // Sync state avec les props quand on change de page (?page=N).
  // Sans ça, useState garde les analyses de la page de mount initial et
  // les versets des pages suivantes apparaissent comme non-traduits
  // (avec le bouton "Traduire ce signe").
  useEffect(() => {
    setVerseAnalyses(analysesByVerse as Record<number, VerseAnalysis>)
  }, [analysesByVerse])

  // Note : on NE fait PAS router.refresh() au mount. La page utilise déjà
  // force-dynamic + revalidate=0, donc chaque navigation refetch côté serveur.
  // Un router.refresh() au mount déclenchait un second cycle render → skeleton →
  // animation au F5, qui coupait l'animation initiale du titre.

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

  // Filet de sécurité : au mount de la page sourate, on s'assure que le body
  // est bien scrollable (au cas où un composant précédent aurait laissé overflow:hidden).
  useEffect(() => {
    document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [])

  // Lock body scroll quand le bottom sheet mobile est ouvert.
  // Important : la cleanup remet TOUJOURS overflow='' pour éviter qu'un autre
  // composant qui aurait verrouillé entre-temps laisse le body bloqué.
  useEffect(() => {
    if (activeWordKey) {
      // Seulement si on est en mode mobile (< lg = < 1024px)
      const isMobile = window.matchMedia('(max-width: 1023px)').matches
      if (isMobile) {
        document.body.style.overflow = 'hidden'
        return () => { document.body.style.overflow = '' }
      }
    }
  }, [activeWordKey])

  return (
    <div>
      {/* Surah header — compact, raffiné, cohérent avec la home */}
      <header className="surah-header text-center pt-4 pb-4 mb-5">
        {/* Petit préfixe "Sourate III" en italique Cormorant or */}
        <p
          className="surah-num italic"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            color: '#8A7428',
            fontSize: '11.5px',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            fontWeight: 600,
            margin: '0 0 8px 0',
            lineHeight: 1,
          }}
        >
          Sourate {toRoman(surah.id)}
        </p>

        {/* Nom arabe encadré par les parenthèses ornées coraniques ﴾ ﴿ */}
        <h1
          className="surah-title font-arabic inline-flex items-center justify-center"
          lang="ar"
          dir="rtl"
          style={{
            color: '#B8962E',
            fontSize: 'clamp(2rem, 4vw, 2.75rem)',
            lineHeight: 1.1,
            margin: 0,
            textShadow: '0 1px 0 rgba(184,150,46,0.06)',
            gap: '0.4em',
          }}
        >
          <span aria-hidden="true" style={{ color: '#B8962E', fontSize: '0.85em', opacity: 0.85, fontWeight: 400 }}>﴾</span>
          <span>{surah.name_ar}</span>
          <span aria-hidden="true" style={{ color: '#B8962E', fontSize: '0.85em', opacity: 0.85, fontWeight: 400 }}>﴿</span>
        </h1>

        {/* Ornement décoratif — signature visuelle cohérente avec le hero d'accueil */}
        <div
          aria-hidden="true"
          className="surah-ornament flex items-center justify-center gap-4 mt-3 mb-3 mx-auto"
          style={{ maxWidth: '300px' }}
        >
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(184,150,46,0.45))' }} />
          <span className="surah-ornament-star" style={{ color: '#B8962E', fontSize: '11px', lineHeight: 1, display: 'inline-block' }}>✦</span>
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(to left, transparent, rgba(184,150,46,0.45))' }} />
        </div>

        <div className="surah-meta flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
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

        {/* Métadonnées : nombre de signes */}
        {surah.verse_count > 0 && (
          <p
            className="surah-meta-info italic"
            style={{
              color: '#8A7E72',
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '12px',
              letterSpacing: '0.05em',
              margin: '6px 0 0 0',
              lineHeight: 1,
            }}
          >
            {surah.verse_count} signe{surah.verse_count > 1 ? 's' : ''}
          </p>
        )}

        {/* Saut rapide vers un verset — utile sur les sourates longues (10+ versets) */}
        {surah.verse_count > 10 && (
          <form
            className="surah-meta-info verse-jumper inline-flex items-center mt-3 mx-auto"
            onSubmit={(e) => {
              e.preventDefault()
              const n = parseInt(jumpInput, 10)
              if (Number.isFinite(n)) {
                jumpToVerse(n)
                setJumpInput('')
              }
            }}
            style={{
              background: '#FFFFFF',
              border: '1px solid rgba(184,150,46,0.35)',
              borderRadius: '999px',
              padding: '3px 4px 3px 14px',
              boxShadow: '0 1px 3px rgba(184,150,46,0.08), inset 0 1px 0 rgba(255,255,255,0.5)',
              gap: '8px',
              transition: 'border-color 220ms ease, box-shadow 220ms ease',
            }}
          >
            <label
              htmlFor="verse-jump-input"
              style={{
                color: '#8A7E72',
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: 'italic',
                fontSize: '12.5px',
                letterSpacing: '0.04em',
                whiteSpace: 'nowrap',
              }}
            >
              Aller au signe
            </label>
            <input
              id="verse-jump-input"
              type="number"
              inputMode="numeric"
              min={1}
              max={surah.verse_count}
              value={jumpInput}
              onChange={(e) => setJumpInput(e.target.value)}
              placeholder={`1–${surah.verse_count}`}
              style={{
                width: '64px',
                padding: '4px 0',
                border: 'none',
                background: 'transparent',
                fontSize: '13.5px',
                color: '#1A1410',
                textAlign: 'center',
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 600,
                outline: 'none',
              }}
            />
            <button
              type="submit"
              aria-label="Aller au verset"
              className="verse-jumper-btn"
              style={{
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                border: '1px solid rgba(158,126,31,0.4)',
                background: 'linear-gradient(135deg, #C9A23A 0%, #B8962E 55%, #9E7E1F 100%)',
                color: '#FFFCF6',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '14px',
                fontWeight: 700,
                lineHeight: 1,
                flexShrink: 0,
                boxShadow: '0 2px 6px rgba(184,150,46,0.35), inset 0 1px 0 rgba(255,255,255,0.25)',
                textShadow: '0 1px 1px rgba(80,55,10,0.25)',
                transition: 'transform 200ms ease, box-shadow 200ms ease',
              }}
            >
              →
            </button>
          </form>
        )}

        {surah.id !== 1 && surah.id !== 9 && (
          <p
            className="surah-bismillah font-arabic mt-4"
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
          @keyframes surahFadeUp {
            from { opacity: 0; transform: translateY(6px); }
            to   { opacity: 1; transform: translateY(0); }
          }
          @keyframes surahStarSpin {
            from { transform: rotate(-720deg) scale(0.4); opacity: 0; }
            to   { transform: rotate(0deg) scale(1); opacity: 0.85; }
          }
          .surah-num       { animation: surahFadeUp 600ms cubic-bezier(0.16, 1, 0.3, 1)   0ms both; }
          .surah-title     { animation: surahFadeUp 600ms cubic-bezier(0.16, 1, 0.3, 1)  80ms both; }
          .surah-ornament  { animation: surahFadeUp 600ms cubic-bezier(0.16, 1, 0.3, 1) 220ms both; }
          .surah-meta      { animation: surahFadeUp 600ms cubic-bezier(0.16, 1, 0.3, 1) 360ms both; }
          .surah-meta-info { animation: surahFadeUp 600ms cubic-bezier(0.16, 1, 0.3, 1) 420ms both; }
          .surah-bismillah { animation: surahFadeUp 600ms cubic-bezier(0.16, 1, 0.3, 1) 540ms both; }
          .surah-ornament-star {
            animation: surahStarSpin 1300ms cubic-bezier(0.16, 1, 0.3, 1) 240ms both;
            transform-origin: center;
          }
          @media (prefers-reduced-motion: reduce) {
            .surah-num, .surah-title, .surah-ornament, .surah-meta, .surah-meta-info, .surah-bismillah, .surah-ornament-star {
              animation: none !important;
            }
          }
        ` }} />
      </header>

      {/* Pagination en HAUT — hors du grid pour être centrée full-width comme
          le titre de la sourate, et pour ne pas décaler verset 1 vs panneau droit. */}
      {totalPages > 1 && (
        <Pagination
          current={currentPage}
          total={totalPages}
          delayMs={600}
          onChange={(p) => {
            router.push(`/surah/${surah.id}?page=${p}`, { scroll: false })
          }}
        />
      )}

      {/* Grid: verses + panel (aligned).
          lg:min-h sur la grille → garantit que la rangée a une hauteur suffisante
          pour que le panneau droit (sticky) reste collé au scroll même sur les
          sourates avec peu de versets. */}
      <div className="page-section-anim grid grid-cols-1 lg:grid-cols-[1fr_minmax(320px,520px)] gap-6 lg:min-h-[calc(100vh-90px)]" style={{ animationDelay: '650ms' }}>
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
        className="word-panel-wrapper hidden lg:block lg:sticky lg:top-[84px] lg:self-start lg:max-h-[calc(100vh-96px)] lg:overflow-y-auto relative"
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

    {/* Pagination en BAS — hors du grid pour être centrée full-width. */}
    {totalPages > 1 && (
      <Pagination
        current={currentPage}
        total={totalPages}
        delayMs={750}
        onChange={(p) => {
          router.push(`/surah/${surah.id}?page=${p}`, { scroll: false })
        }}
      />
    )}

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
