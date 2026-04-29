'use client'

import { useState, useCallback, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { cn } from '@/lib/utils'

/**
 * Mini parseur markdown pour les proof_ctx :
 * - `**texte**` → gras
 * - `*texte*` → italique
 * - `` `texte` `` → code (sans police monospace, juste accent doré)
 * - `\n\n` → nouveau paragraphe
 * - `\n` → saut de ligne simple
 *
 * Renvoie du JSX, pas du HTML brut, donc sécurisé contre injection.
 */
function renderMarkdown(text: string): React.ReactNode {
  if (!text) return null
  const paragraphs = text.split(/\n\s*\n/)
  return paragraphs.map((para, pi) => {
    // Tokenize : code → bold → italic
    const nodes: React.ReactNode[] = []
    let remaining = para
    let key = 0

    const consume = (re: RegExp, wrap: (inner: React.ReactNode, k: number) => React.ReactNode) => {
      const next: React.ReactNode[] = []
      for (const node of nodes.length ? nodes : [remaining]) {
        if (typeof node !== 'string') { next.push(node); continue }
        let lastIdx = 0
        let m: RegExpExecArray | null
        const localRe = new RegExp(re.source, re.flags)
        while ((m = localRe.exec(node)) !== null) {
          if (m.index > lastIdx) next.push(node.slice(lastIdx, m.index))
          next.push(wrap(consumeInner(m[1]), key++))
          lastIdx = m.index + m[0].length
        }
        if (lastIdx < node.length) next.push(node.slice(lastIdx))
      }
      nodes.length = 0
      nodes.push(...next)
    }

    const consumeInner = (s: string): React.ReactNode => {
      // Apply nested italic + code in inner text of bold
      const parts: React.ReactNode[] = []
      const innerRe = /\*([^*\n]+?)\*|`([^`\n]+?)`/g
      let lastIdx = 0
      let m: RegExpExecArray | null
      while ((m = innerRe.exec(s)) !== null) {
        if (m.index > lastIdx) parts.push(s.slice(lastIdx, m.index))
        if (m[1] !== undefined) parts.push(<em key={key++}>{m[1]}</em>)
        else if (m[2] !== undefined) parts.push(<code key={key++} style={{ color: '#9C7C2E', fontFamily: 'inherit', fontWeight: 600, fontStyle: 'italic' }}>{m[2]}</code>)
        lastIdx = m.index + m[0].length
      }
      if (lastIdx < s.length) parts.push(s.slice(lastIdx))
      return parts.length === 1 ? parts[0] : <>{parts}</>
    }

    // 1. Code spans first (to protect their content)
    consume(/`([^`\n]+?)`/g, (inner, k) => <code key={k} style={{ color: '#9C7C2E', fontFamily: 'inherit', fontWeight: 600, fontStyle: 'italic' }}>{inner}</code>)
    // 2. Bold + italic combined (***X***) — must come before bold and italic
    consume(/\*\*\*([^*\n]+?)\*\*\*/g, (inner, k) => <strong key={k}><em>{inner}</em></strong>)
    // 3. Bold (with possible italic inside)
    consume(/\*\*([^*\n]+?)\*\*/g, (inner, k) => <strong key={k}>{inner}</strong>)
    // 4. Italic (remaining single asterisks)
    consume(/\*([^*\n]+?)\*/g, (inner, k) => <em key={k}>{inner}</em>)

    // Handle single \n inside paragraph as <br/>
    const finalNodes: React.ReactNode[] = []
    nodes.forEach((n, ni) => {
      if (typeof n === 'string') {
        const lines = n.split('\n')
        lines.forEach((line, li) => {
          if (li > 0) finalNodes.push(<br key={`br-${pi}-${ni}-${li}`} />)
          if (line) finalNodes.push(line)
        })
      } else {
        finalNodes.push(n)
      }
    })

    return <p key={pi} style={{ margin: pi === 0 ? 0 : '0.6em 0 0 0' }}>{finalNodes}</p>
  })
}

interface EtymologyEntry {
  id: number
  sense: string
  sense_ar?: string
  description: string
  status?: string
  concept?: string
  score?: number
  score_reason?: string
  occ_count?: number
  occ_refs?: string[]
  proof_ref?: string
  proof_phon?: string
  proof_tr?: string
  proof_ctx?: string
  axe1_verset?: string
  axe2_voisins?: string
  axe3_sourate?: string
  axe4_coherence?: string
  axe5_frequence?: string
  axe6_finalite?: string
}

interface Daily {
  id: number
  arabic: string
  phon: string
  french: string
}

interface AnalysisCounts {
  total_analyzed: number
  total_qac: number
  by_sense: Record<string, number>
  refs_by_sense?: Record<string, string[]>
  by_concept?: Record<string, number>
  refs_by_concept?: Record<string, string[]>
}

interface WordAnalysis {
  word_key: string
  root_ar: string
  root_phon: string
  root_meaning: string
  retenu: string
  total_occurrences: number
  etymology: EtymologyEntry[]
  daily: Daily[]
  analysis_counts: AnalysisCounts
  // Occurrence-specific data (when verse_id + position were provided)
  occurrence_retenu?: string
  occurrence_axes?: Record<string, string> | null
  concept_chosen?: string | null
  occurrence_reason?: string
}

interface VerseText {
  ref: string
  arabic: string
  phon?: string
  fr?: string
}

interface Props {
  analysis: WordAnalysis | null
  loading: boolean
  activeWordKey: string
  onClose: () => void
}


function RefsToggle({ label, refs, meaningId, expandedRef, onClickRef }: {
  label: string
  refs: string[]
  meaningId: number
  expandedRef: { meaningId: number; ref: string; data: VerseText | null; loading: boolean } | null
  onClickRef: (meaningId: number, ref: string) => void
}) {
  const [open, setOpen] = useState(false)
  const uniqueRefs = Array.from(new Set(refs))
  return (
    <div className="border-l pl-2 mt-1" style={{ borderColor: 'rgba(184,150,46,0.3)' }}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 text-[10px] w-full text-left"
        style={{ color: '#6B5E52' }}
      >
        <span>{open ? '▾' : '▸'}</span>
        <span className="font-medium">{label}</span>
      </button>
      {open && (
        <div className="mt-1 pl-3">
          <div className="flex flex-wrap gap-1">
            {uniqueRefs.slice(0, 100).map((ref) => (
              <button
                key={ref}
                onClick={() => onClickRef(meaningId, ref)}
                className={cn(
                  'text-[10px] px-1.5 py-0.5 rounded transition-colors',
                  expandedRef?.meaningId === meaningId && expandedRef?.ref === ref
                    ? 'bg-gold-200 text-gold-800'
                    : 'bg-parchment-100 hover:bg-gold-100 hover:text-gold-700'
                )}
                style={!(expandedRef?.meaningId === meaningId && expandedRef?.ref === ref) ? { color: '#6B5E52' } : {}}
              >
                {ref}
              </button>
            ))}
            {uniqueRefs.length > 100 && (
              <span className="text-[10px] px-1" style={{ color: '#9E9089' }}>+{uniqueRefs.length - 100} de plus</span>
            )}
          </div>
          {expandedRef?.meaningId === meaningId && expandedRef.ref && (
            <div className="mt-2 p-2 rounded border text-xs space-y-1" style={{ background: '#FDFAF3', borderColor: 'rgba(184,150,46,0.4)' }}>
              {expandedRef.loading ? (
                <span style={{ color: '#9E9089' }}>Chargement...</span>
              ) : expandedRef.data ? (
                <>
                  <p className="font-arabic text-sm" dir="rtl" style={{ color: '#1A1410' }}>
                    {expandedRef.data.arabic}
                  </p>
                  {expandedRef.data.phon && (
                    <p className="italic" style={{ color: '#6B5E52' }}>{expandedRef.data.phon}</p>
                  )}
                  {expandedRef.data.fr && (
                    <p style={{ color: '#3D3228' }}>{expandedRef.data.fr}</p>
                  )}
                </>
              ) : (
                <span style={{ color: '#9E9089' }}>Verset non trouvé</span>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

function highlightPhonetic(text: string) {
  return text.replace(/'([^']+)'/g, '<em style="color:#B8962E;font-style:italic">$1</em>')
}

function InsightToggle({ label, content }: { label: string; content?: string }) {
  const [open, setOpen] = useState(false)
  if (!content) return null
  return (
    <div style={{ borderBottom: '1px solid rgba(184,150,46,0.3)' }}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 w-full text-left"
        style={{
          fontSize: '12px',
          fontWeight: 600,
          color: '#3D3228',
          padding: '8px 0',
          background: open ? '#FDFAF3' : 'transparent',
          borderRadius: open ? '4px' : '0',
          paddingLeft: open ? '8px' : '0',
          paddingRight: open ? '8px' : '0',
        }}
      >
        <span style={{ color: '#B8962E' }}>{open ? '▾' : '▸'}</span>
        <span>{label}</span>
      </button>
      {open && (
        <div style={{ marginLeft: '8px', borderLeft: '3px solid rgba(184,150,46,0.4)', paddingLeft: '12px' }}>
          <p
            style={{ fontSize: '13px', color: '#4A3F35', lineHeight: 1.7, padding: '6px 0 10px 0' }}
            dangerouslySetInnerHTML={{ __html: highlightPhonetic(content) }}
          />
        </div>
      )}
    </div>
  )
}

export default function WordPanel({
  analysis,
  loading,
  activeWordKey,
  onClose,
}: Props) {
  const [expandedMeanings, setExpandedMeanings] = useState<Set<number>>(new Set())
  const [expandedRefs, setExpandedRefs] = useState<Record<string, boolean>>({})
  const [expandedRef, setExpandedRef] = useState<{ meaningId: number; ref: string; data: VerseText | null; loading: boolean } | null>(null)
  // Tooltip concept actif (utile pour mobile où il n'y a pas de hover)
  const [openTooltip, setOpenTooltip] = useState<string | null>(null)
  // Position fixe du tooltip mobile (calculée au tap pour éviter les problèmes
  // de positionnement absolute dans les containers transformés/scrollés)
  const [tooltipPos, setTooltipPos] = useState<{ left: number; top: number; width: number } | null>(null)
  // Ferme le tooltip quand on clique en dehors
  useEffect(() => {
    if (!openTooltip) return
    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (!target.closest('[data-concept-tab]')) setOpenTooltip(null)
    }
    document.addEventListener('click', handler)
    return () => document.removeEventListener('click', handler)
  }, [openTooltip])

  const handleToggleRefs = useCallback((meaningId: number) => {
    setExpandedMeanings(prev => {
      const next = new Set(prev)
      if (next.has(meaningId)) next.delete(meaningId)
      else next.add(meaningId)
      return next
    })
    setExpandedRef(null)
  }, [])

  const handleClickRef = useCallback(async (meaningId: number, ref: string) => {
    if (expandedRef?.meaningId === meaningId && expandedRef?.ref === ref) {
      setExpandedRef(null)
      return
    }
    setExpandedRef({ meaningId, ref, data: null, loading: true })
    try {
      const [surah, verse] = ref.split(':')
      const res = await fetch(`/api/verse-text/${surah}/${verse}`)
      if (res.ok) {
        const data = await res.json()
        setExpandedRef({ meaningId, ref, data, loading: false })
      } else {
        setExpandedRef({ meaningId, ref, data: null, loading: false })
      }
    } catch {
      setExpandedRef({ meaningId, ref, data: null, loading: false })
    }
  }, [expandedRef])

  if (loading) {
    return (
      <div className="side-panel">
        <div className="flex items-center justify-center py-12">
          <span className="animate-spin inline-block w-6 h-6 border-2 rounded-full" style={{ borderColor: 'rgba(184,150,46,0.3)', borderTopColor: '#B8962E' }} />
        </div>
      </div>
    )
  }

  if (!analysis) {
    return (
      <div className="side-panel">
        <div className="text-center py-8 text-sm" style={{ color: '#6B5E52' }}>
          Mot non encore analysé.
          <br />Lancez la traduction du signe pour générer les données.
        </div>
      </div>
    )
  }

  const counts = analysis.analysis_counts ?? { total_analyzed: 0, total_qac: 0, by_sense: {} }
  const totalQac = counts.total_qac || analysis.total_occurrences || 0
  const totalAnalyzed = counts.total_analyzed
  const senses = analysis.etymology ?? []

  // Fix: prioritize concept_chosen from occurrence-specific axes (verse_word_analyses)
  // over word_analyses.retenu which may be null for newer sourates
  const occAxes = analysis.occurrence_axes as Record<string, unknown> | null | undefined
  if (occAxes?.concept_chosen && !analysis.concept_chosen) {
    analysis = { ...analysis, concept_chosen: occAxes.concept_chosen as string }
  }
  if (analysis.occurrence_retenu && !analysis.retenu) {
    analysis = { ...analysis, retenu: analysis.occurrence_retenu }
  }

  return (
    <div data-tour-word-panel="1" className="side-panel space-y-4">
      {/* Header */}
      <div className="space-y-3">
        {/* Racine + close */}
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-baseline gap-3" style={{ marginTop: '6px' }}>
              <span className="font-arabic" style={{ fontSize: '36px', color: '#B8962E', lineHeight: 1 }}>{analysis.root_ar}</span>
              <span style={{ fontSize: '20px', fontWeight: 600, color: '#1A1410', fontFamily: "'Cormorant Garamond', serif" }}>{analysis.root_phon}</span>
            </div>
            <div className="flex items-center gap-1.5 mt-1.5">
              <span style={{ fontSize: '18px', color: '#B8962E', fontWeight: 700, fontFamily: "'Cormorant Garamond', serif" }}>{totalQac}</span>
              <span style={{ fontSize: '17px', color: '#3D3228', fontWeight: 500, fontFamily: "'Cormorant Garamond', serif" }}>occurrence{totalQac > 1 ? 's' : ''} dans le Coran</span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-lg leading-none hover:opacity-60 transition-opacity mt-1"
            style={{ color: '#9E9089' }}
          >
            ✕
          </button>
        </div>

        {/* Sens retenu */}
        <div className="flex items-center gap-3 py-2" style={{ borderBottom: '1px solid rgba(184,150,46,0.3)' }}>
          <div style={{ width: '4px', height: '36px', borderRadius: '2px', background: '#B8962E' }} />
          <div>
            <span style={{ fontSize: '10px', letterSpacing: '0.1em', color: '#B8962E', fontWeight: 600, textTransform: 'uppercase' as const }}>Sens retenu</span>
            <div style={{ fontSize: '22px', fontWeight: 700, color: '#1A1410', fontFamily: "'Cormorant Garamond', serif", letterSpacing: '0.05em', lineHeight: 1.2 }}>{analysis.concept_chosen || analysis.retenu}</div>
          </div>
        </div>

        {/* Liste des concepts avec tooltip */}
        {(() => {
          // Grouper les sens par concept
          const hasConcepts = senses.some(s => s.concept)
          if (hasConcepts) {
            const conceptMap = new Map<string, string[]>()
            const conceptRetenu = new Map<string, boolean>()
            for (const s of senses) {
              const c = s.concept || 'Sans concept'
              if (!conceptMap.has(c)) conceptMap.set(c, [])
              conceptMap.get(c)!.push(s.sense)
              if (analysis.concept_chosen && c === analysis.concept_chosen) {
                conceptRetenu.set(c, true)
              } else if (!analysis.concept_chosen && s.sense === analysis.retenu) {
                conceptRetenu.set(c, true)
              }
            }
            return (
              <div className="flex flex-wrap gap-x-3 gap-y-2 justify-start items-end" style={{ marginTop: '8px' }}>
                {[...conceptMap.entries()].map(([concept, conceptSenses], i) => {
                  const isActive = conceptRetenu.has(concept)
                  const isOpen = openTooltip === concept
                  return (
                    <div
                      key={i}
                      data-tour-concept-tab={isActive ? '1' : undefined}
                      data-concept-tab="1"
                      className="relative group"
                      style={{ padding: '2px 0', cursor: 'pointer' }}
                      onMouseEnter={(e) => {
                        // Sur desktop seulement : positionne le tooltip via portal au hover
                        const vpW = typeof window !== 'undefined' ? window.innerWidth : 1024
                        if (vpW < 1024) return // mobile : ignoré, on garde le tap
                        const rect = e.currentTarget.getBoundingClientRect()
                        const SIDE_MARGIN = 12
                        const desiredW = 280
                        // Aligne la tooltip sur le bord gauche de l'onglet,
                        // mais clamp à droite pour ne pas dépasser le viewport
                        let left = rect.left
                        if (left + desiredW + SIDE_MARGIN > vpW) {
                          left = Math.max(SIDE_MARGIN, vpW - desiredW - SIDE_MARGIN)
                        }
                        setTooltipPos({ left, top: rect.bottom + 4, width: desiredW })
                        setOpenTooltip(concept)
                      }}
                      onMouseLeave={(e) => {
                        const vpW = typeof window !== 'undefined' ? window.innerWidth : 1024
                        if (vpW < 1024) return
                        // Vérifie que la souris n'est pas passée sur le tooltip lui-même
                        const related = e.relatedTarget as Node | null
                        if (related && (related as HTMLElement).closest?.('[data-concept-tooltip-portal="1"]')) return
                        setOpenTooltip(null)
                        setTooltipPos(null)
                      }}
                      onClick={(e) => {
                        e.stopPropagation()
                        const vpW = typeof window !== 'undefined' ? window.innerWidth : 1024
                        const isMobile = vpW < 1024
                        if (!isMobile) return // desktop : géré par hover
                        // Mobile tap : si on referme le même → close
                        if (openTooltip === concept) {
                          setOpenTooltip(null)
                          setTooltipPos(null)
                          return
                        }
                        const rect = e.currentTarget.getBoundingClientRect()
                        const SIDE_MARGIN = 12
                        const desiredW = Math.min(280, vpW - SIDE_MARGIN * 2)
                        const tabCenter = rect.left + rect.width / 2
                        let left = tabCenter - desiredW / 2
                        left = Math.max(SIDE_MARGIN, Math.min(left, vpW - desiredW - SIDE_MARGIN))
                        setTooltipPos({
                          left,
                          top: rect.bottom + 6,
                          width: desiredW,
                        })
                        setOpenTooltip(concept)
                      }}
                    >
                      <span
                        className="text-center"
                        style={{
                          color: isActive ? '#B8962E' : '#1A1410',
                          fontSize: isActive ? '14px' : '13px',
                          fontWeight: isActive ? 700 : 500,
                          whiteSpace: 'nowrap',
                          paddingBottom: '4px',
                          borderBottom: isActive ? '3px solid #B8962E' : '2px solid rgba(184,150,46,0.4)',
                        }}
                      >
                        {concept}
                      </span>
                      {/* Tooltip desktop fallback (au cas où le portal ne se monte pas) — caché */}
                      <div className="hidden">
                        <div style={{ fontSize: '11px', fontWeight: 700, color: '#B8962E', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px' }}>
                          {concept} ({conceptSenses.length} sens)
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {conceptSenses.map((s, j) => (
                            <span key={j} style={{
                              fontSize: '11px',
                              color: '#6B5D4F',
                              fontWeight: 400,
                              background: 'rgba(0,0,0,0.04)',
                              padding: '1px 6px',
                              borderRadius: '4px',
                            }}>
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Tooltip via portal (desktop hover + mobile tap) en position fixed dans
                          document.body — échappe au container parent + s'adapte au viewport */}
                      {isOpen && tooltipPos && typeof document !== 'undefined' && createPortal(
                        <div
                          data-tour-concept-tooltip={isActive ? '1' : undefined}
                          data-concept-tooltip-portal="1"
                          className="fixed bg-white border border-amber-200 rounded-lg p-3"
                          style={{
                            left: tooltipPos.left,
                            top: tooltipPos.top,
                            width: tooltipPos.width,
                            zIndex: 100,
                            boxShadow: '0 8px 24px rgba(0,0,0,0.22)',
                          }}
                          onMouseLeave={() => {
                            const vpW = typeof window !== 'undefined' ? window.innerWidth : 1024
                            if (vpW >= 1024) { setOpenTooltip(null); setTooltipPos(null) }
                          }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <div style={{ fontSize: '11px', fontWeight: 700, color: '#B8962E', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px' }}>
                            {concept} ({conceptSenses.length} sens)
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {conceptSenses.map((s, j) => (
                              <span key={j} style={{
                                fontSize: '11px',
                                color: '#6B5D4F',
                                fontWeight: 400,
                                background: 'rgba(0,0,0,0.04)',
                                padding: '1px 6px',
                                borderRadius: '4px',
                              }}>
                                {s}
                              </span>
                            ))}
                          </div>
                        </div>,
                        document.body
                      )}
                    </div>
                  )
                })}
              </div>
            )
          }
          // Fallback: pas de concepts, afficher les sens individuels comme avant
          return (
            <div className="flex flex-wrap gap-x-4 gap-y-1 justify-start items-end" style={{ marginTop: '8px' }}>
              {(senses.length > 0 ? senses.map(s => s.sense) : []).map((s, i) => {
                const isActive = s.trim() === analysis.retenu
                return (
                  <div key={i} className="flex flex-col items-center" style={{ padding: '2px 0' }}>
                    <span
                      className="text-center"
                      style={{
                        color: isActive ? '#B8962E' : '#1A1410',
                        fontSize: isActive ? '14px' : '13px',
                        fontWeight: isActive ? 700 : 500,
                        whiteSpace: 'nowrap',
                        paddingBottom: '4px',
                        borderBottom: isActive ? '3px solid #B8962E' : '2px solid rgba(184,150,46,0.4)',
                      }}
                    >
                      {s.trim()}
                    </span>
                  </div>
                )
              })}
            </div>
          )
        })()}
      </div>

      {/* ═══ SENS ÉTYMOLOGIQUES ═══ */}
      {senses.length > 0 && (
        <div>
          <h4 className="uppercase mb-2" style={{ fontSize: '11px', letterSpacing: '0.1em', color: '#3D3228', fontWeight: 700 }}>
            {totalAnalyzed === 0
              ? 'Sens étymologiques'
              : <><span>Sens étymologiques</span> <span style={{ color: '#B8962E', fontWeight: 600 }}>· {totalAnalyzed} verset{totalAnalyzed > 1 ? 's' : ''} analysé{totalAnalyzed > 1 ? 's' : ''}</span></>}
          </h4>
          <div className="space-y-3">
            {(() => {
              // Grouper par concept si disponible
              const hasConcepts = senses.some(s => s.concept)
              if (hasConcepts) {
                // Construire les groupes de concepts
                const conceptGroups = new Map<string, typeof senses>()
                for (const s of senses) {
                  const c = s.concept || 'Sans concept'
                  if (!conceptGroups.has(c)) conceptGroups.set(c, [])
                  conceptGroups.get(c)!.push(s)
                }
                // Trier : retenu → probable → peu_probable → exclu, puis occurrences
                const statusOrder: Record<string, number> = { retenu: 0, probable: 1, ok: 1, maybe: 1, peu_probable: 2, nul: 3 }
                const sorted = [...conceptGroups.entries()].sort(([cA, sensesA], [cB, sensesB]) => {
                  // Déterminer le statut du concept
                  const getConceptStatus = (name: string, ss: typeof senses) => {
                    if (analysis.concept_chosen) {
                      if (name === analysis.concept_chosen) return 'retenu'
                      const raw = ss[0]?.status || 'nul'
                      return raw === 'retenu' ? 'probable' : raw
                    }
                    if (ss.some(s => s.sense === analysis.retenu)) return 'retenu'
                    const statuses = ss.map(s => s.status || 'nul')
                    if (statuses.includes('retenu')) return 'retenu'
                    if (statuses.includes('probable') || statuses.includes('ok') || statuses.includes('maybe')) return 'probable'
                    if (statuses.includes('peu_probable')) return 'peu_probable'
                    return 'nul'
                  }
                  const aStatus = getConceptStatus(cA, sensesA)
                  const bStatus = getConceptStatus(cB, sensesB)
                  const aOrder = statusOrder[aStatus] ?? 3
                  const bOrder = statusOrder[bStatus] ?? 3
                  if (aOrder !== bOrder) return aOrder - bOrder
                  // Puis par nombre d'occurrences (by_concept ou fallback by_sense)
                  const aCount = counts.by_concept?.[cA] ?? sensesA.reduce((sum, s) => sum + (counts.by_sense[s.sense] ?? 0), 0)
                  const bCount = counts.by_concept?.[cB] ?? sensesB.reduce((sum, s) => sum + (counts.by_sense[s.sense] ?? 0), 0)
                  return bCount - aCount
                })
                return sorted.map(([conceptName, conceptSenses]) => {
                  const conceptHasRetenu = analysis.concept_chosen ? conceptName === analysis.concept_chosen : conceptSenses.some(s => s.sense === analysis.retenu)
                  const conceptIsExpanded = expandedMeanings.has(conceptSenses[0]?.id ?? 0)
                  // Determine concept status from concept_chosen or from individual senses
                  let conceptStatus: string
                  if (analysis.concept_chosen) {
                    if (conceptName === analysis.concept_chosen) {
                      conceptStatus = 'retenu'
                    } else {
                      // Down-grade les autres "retenu" globaux à "probable" : un seul concept peut être retenu pour un verset donné
                      const raw = conceptSenses[0]?.status || 'nul'
                      conceptStatus = raw === 'retenu' ? 'probable' : raw
                    }
                  } else {
                    const conceptStatuses = conceptSenses.map(s => {
                      if (s.sense === analysis.retenu) return 'retenu'
                      const raw = s.status || 'nul'
                      return raw === 'retenu' ? 'probable' : raw
                    })
                    conceptStatus = conceptStatuses.includes('retenu') ? 'retenu'
                      : conceptStatuses.includes('probable') || conceptStatuses.includes('ok') || conceptStatuses.includes('maybe') ? 'probable'
                      : conceptStatuses.includes('peu_probable') ? 'peu_probable'
                      : 'nul'
                  }

                  const borderColors: Record<string, string> = {
                    retenu: '#B8962E', probable: '#1A5F5F', peu_probable: '#C8BCAD', nul: '#D4A9A9',
                  }
                  const borderColor = borderColors[conceptStatus] || borderColors.nul
                  const tagMap: Record<string, { color: string; label: string }> = {
                    retenu: { color: '#B8962E', label: 'retenu' },
                    probable: { color: '#1A5F5F', label: 'probable' },
                    peu_probable: { color: '#9E9089', label: 'peu probable' },
                    nul: { color: '#B07070', label: 'exclu' },
                  }
                  const tag = tagMap[conceptStatus] || tagMap.nul

                  // Occurrences count for the whole concept — use by_concept if available
                  const conceptOccCount = counts.by_concept?.[conceptName] ?? conceptSenses.reduce((sum, s) => sum + (counts.by_sense[s.sense] ?? 0), 0)
                  const conceptPct = totalAnalyzed > 0 ? Math.round((conceptOccCount / totalAnalyzed) * 100) : 0

                  // Get proof_ctx from the retenu sense or best sense
                  const bestSense = conceptSenses.find(s => s.sense === analysis.retenu) || conceptSenses.find(s => s.status === 'retenu') || conceptSenses[0]

                  return (
                    <div key={conceptName} data-tour-concept-block={conceptStatus} className="pl-3" style={{ borderLeft: `3px solid ${borderColor}` }}>
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex-1 min-w-0">
                          <button
                            className="flex items-center gap-1.5 flex-wrap cursor-pointer text-left w-full group"
                            style={{ background: 'none', border: 'none', padding: '4px 0', borderRadius: '4px', transition: 'background 0.15s' }}
                            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(184,150,46,0.05)' }}
                            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'none' }}
                            onClick={() => handleToggleRefs(conceptSenses[0]?.id ?? 0)}
                          >
                            <span style={{ color: '#B8962E', fontSize: '12px', marginRight: '2px', transition: 'transform 0.2s', transform: conceptIsExpanded ? 'rotate(90deg)' : 'rotate(0deg)', display: 'inline-block', lineHeight: 1, fontFamily: 'Arial, sans-serif' }}>{'▸'}</span>
                            <span style={{ fontSize: '15px', fontWeight: 600, color: '#1A1410' }}>{conceptName}</span>
                            <span style={{ fontSize: '10px', fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase' as const, color: tag.color, fontStyle: 'italic' }}>{tag.label}</span>
                            <span style={{ fontSize: '10px', color: '#9E9089' }}>({conceptSenses.length} sens)</span>
                            <span style={{ color: '#B8962E', fontSize: '10px', marginLeft: '2px' }}>{conceptIsExpanded ? '▾' : '▸'}</span>
                          </button>

                          {totalAnalyzed > 0 ? (
                            <div data-tour-concept-bar={conceptStatus === 'retenu' ? '1' : undefined} className="flex items-center gap-2 mt-1">
                              <div className="flex-1 h-1 rounded-full overflow-hidden" style={{ background: '#E8DFCC' }}>
                                <div className="h-full rounded-full" style={{ width: `${conceptPct}%`, background: conceptHasRetenu ? '#B8962E' : '#7A2E2E' }} />
                              </div>
                              <span className="text-[10px] shrink-0 px-1.5 py-0.5 tabular-nums" style={{ color: conceptOccCount > 0 ? '#B8962E' : '#9E9089', fontWeight: conceptOccCount > 0 ? 600 : 400 }}>
                                {conceptOccCount}/{totalAnalyzed} ({conceptPct}%)
                              </span>
                            </div>
                          ) : (
                            <span className="text-[10px] mt-0.5 inline-block" style={{ color: '#9E9089' }}>en attente d&apos;analyses</span>
                          )}
                        </div>
                      </div>

                      {/* Contenu déplié du concept */}
                      {conceptIsExpanded && (
                        <div className="mt-2 text-xs space-y-2">
                          {/* Refs cliquables des versets — EN HAUT */}
                          {(() => {
                            // Use refs_by_concept if available, otherwise aggregate from refs_by_sense
                            const allRefs2: string[] = counts.refs_by_concept?.[conceptName]
                              ? [...counts.refs_by_concept[conceptName]]
                              : (() => {
                                  const refs: string[] = []
                                  for (const s of conceptSenses) {
                                    const senseRefs = counts.refs_by_sense?.[s.sense] || []
                                    for (const r of senseRefs) { if (!refs.includes(r)) refs.push(r) }
                                  }
                                  return refs
                                })()
                            if (allRefs2.length === 0) return null
                            const sorted2 = [...allRefs2].sort((a, b) => {
                              const [sa, va] = a.split(':').map(Number)
                              const [sb, vb] = b.split(':').map(Number)
                              return sa - sb || va - vb
                            })
                            return (
                              <div data-tour-verses-list={conceptStatus === 'retenu' ? '1' : undefined} className="flex items-center gap-1.5 flex-wrap" style={{ marginBottom: '6px' }}>
                                <span style={{ fontSize: '10px', color: '#9E9089', fontWeight: 600, textTransform: 'uppercase' as const, letterSpacing: '0.08em' }}>versets ·</span>
                                {sorted2.map((ref, ri) => {
                                  const [surahId, verseNum] = ref.split(':')
                                  return (
                                    <a
                                      key={ri}
                                      href={`/surah/${surahId}#verse-${surahId}-${verseNum}`}
                                      target="_blank"
                                      style={{ fontSize: '12px', color: '#B8962E', fontWeight: 600, textDecoration: 'none', padding: '1px 6px', borderRadius: '4px', background: 'rgba(184,150,46,0.08)' }}
                                      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(184,150,46,0.18)' }}
                                      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(184,150,46,0.08)' }}
                                    >{ref}</a>
                                  )
                                })}
                              </div>
                            )
                          })()}

                          {/* Proof_ctx et axes du concept — depuis le VWA du verset cliqué (occurrence_axes), PAS depuis word_meanings */}
                          {(() => {
                            const occConcepts = (occAxes as Record<string, unknown> | null)?.concepts as Record<string, Record<string, unknown>> | undefined
                            const vwaConcept = occConcepts?.[conceptName]
                            const proofText = (vwaConcept?.proof_ctx as string) || bestSense?.proof_ctx
                            const axeSource = vwaConcept || {}
                            const a1 = axeSource.axe1_verset as string | undefined
                            const a2 = axeSource.axe2_voisins as string | undefined
                            const a3 = axeSource.axe3_sourate as string | undefined
                            const a4 = axeSource.axe4_coherence as string | undefined
                            const a5 = (axeSource.axe5_frequence || axeSource.axe6_finalite) as string | undefined
                            return (
                              <>
                                {proofText && (
                                  <div data-tour-proof-ctx={conceptStatus === 'retenu' ? '1' : undefined} className="rounded" style={{
                                    color: '#1A1410',
                                    background: conceptHasRetenu ? '#FDF6E8' : conceptStatus === 'probable' ? '#E8F5F0' : '#F5F5F5',
                                    borderLeft: `4px solid ${borderColor}`,
                                    border: `1px solid ${borderColor}33`,
                                    borderLeftWidth: '4px',
                                    padding: '12px 14px',
                                    lineHeight: 1.55,
                                  }}>{renderMarkdown(proofText)}</div>
                                )}
                                {(a1 || a2 || a3 || a4 || a5) && (
                                  <div className="space-y-1 mt-1">
                                    <InsightToggle label="Verset lui-même" content={a1} />
                                    <InsightToggle label="Versets voisins" content={a2?.replace(/^\[[^\]]+\]\s*/, '')} />
                                    <InsightToggle label="Thème de la sourate" content={a3} />
                                    <InsightToggle label="Cohérence coranique" content={a4} />
                                    <InsightToggle label="Finalité du khalīfa" content={a5} />
                                  </div>
                                )}
                              </>
                            )
                          })()}

                        </div>
                      )}
                    </div>
                  )
                })
              }
              // Fallback: pas de concepts, afficher les sens individuels
              return [...senses].sort((a, b) => {
              // Retenu en premier
              const aRetenu = a.sense === analysis.retenu ? 1 : 0
              const bRetenu = b.sense === analysis.retenu ? 1 : 0
              if (aRetenu !== bRetenu) return bRetenu - aRetenu
              // Puis par occurrences décroissantes
              const aCount = counts.by_sense[a.sense] ?? 0
              const bCount = counts.by_sense[b.sense] ?? 0
              return bCount - aCount
            }).map((m) => {
              const isExpanded = expandedMeanings.has(m.id)
              const senseCount = counts.by_sense[m.sense] ?? 0
              const pct = totalAnalyzed > 0 ? Math.round((senseCount / totalAnalyzed) * 100) : 0

              const isRetenu = m.sense === analysis.retenu
              // Si un sens a le statut "retenu" dans word_meanings mais n'est PAS le sens retenu
              // pour ce verset, on l'affiche comme "probable" (il est retenu ailleurs, pas ici)
              const rawStatus = m.status || 'nul'
              const classif = isRetenu ? 'retenu' : (rawStatus === 'retenu' || rawStatus === 'ok' ? 'probable' : rawStatus)
              const icon = isRetenu || classif === 'ok' || classif === 'retenu'
                ? { color: '#1A5F5F', bg: '#1A5F5F' }
                : classif === 'maybe' || classif === 'probable'
                  ? { color: '#B8962E', bg: '#B8962E' }
                  : classif === 'peu_probable'
                    ? { color: '#9E9089', bg: 'transparent' }
                    : { color: '#7A2E2E', bg: 'transparent' }
              const boxStyle = isRetenu || classif === 'ok' || classif === 'retenu'
                ? { bg: '#E8F5F0', border: '#1A5F5F', borderFull: 'rgba(26,95,95,0.3)' }
                : classif === 'maybe' || classif === 'probable'
                  ? { bg: '#FDF6E8', border: '#B8962E', borderFull: 'rgba(184,150,46,0.3)' }
                  : classif === 'peu_probable'
                    ? { bg: '#F5F5F5', border: '#9E9089', borderFull: 'rgba(156,144,137,0.3)' }
                    : { bg: '#FDF0F0', border: '#7A2E2E', borderFull: 'rgba(122,46,46,0.3)' }

              const borderColors: Record<string, string> = {
                retenu: '#B8962E', ok: '#B8962E',
                probable: '#1A5F5F', maybe: '#1A5F5F',
                peu_probable: '#C8BCAD',
                nul: '#D4A9A9', no: '#D4A9A9',
              }
              const senseClassif = isRetenu ? 'retenu' : classif
              const borderColor = borderColors[senseClassif] || borderColors.nul

              return (
                <div key={m.id} className="pl-3" style={{ borderLeft: `3px solid ${borderColor}` }}>
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1 min-w-0">
                      <button
                        className="flex items-center gap-1.5 flex-wrap cursor-pointer text-left w-full group"
                        style={{ background: 'none', border: 'none', padding: '4px 0', borderRadius: '4px', transition: 'background 0.15s' }}
                        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(184,150,46,0.05)' }}
                        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'none' }}
                        onClick={() => handleToggleRefs(m.id)}
                      >
                        <span style={{ color: '#B8962E', fontSize: '12px', marginRight: '2px', transition: 'transform 0.2s', transform: isExpanded ? 'rotate(90deg)' : 'rotate(0deg)', display: 'inline-block', lineHeight: 1, fontFamily: 'Arial, sans-serif' }}>{'▸'}</span>
                        <span style={{ fontSize: '15px', fontWeight: 600, color: '#1A1410' }}>{m.sense}</span>
                        {(() => {
                          const tagClassif = isRetenu ? 'retenu' : classif
                          const tagMap: Record<string, { color: string; label: string }> = {
                            retenu: { color: '#B8962E', label: 'retenu' },
                            ok: { color: '#B8962E', label: 'retenu' },
                            probable: { color: '#1A5F5F', label: 'probable' },
                            maybe: { color: '#1A5F5F', label: 'probable' },
                            peu_probable: { color: '#9E9089', label: 'peu probable' },
                            nul: { color: '#B07070', label: 'exclu' },
                            no: { color: '#B07070', label: 'exclu' },
                          }
                          const t = tagMap[tagClassif] || tagMap.nul
                          return (
                            <span style={{
                              fontSize: '10px',
                              fontWeight: 500,
                              letterSpacing: '0.06em',
                              textTransform: 'uppercase' as const,
                              color: t.color,
                              fontStyle: 'italic',
                            }}>
                              {t.label}
                            </span>
                          )
                        })()}
                        <span style={{ color: '#B8962E', fontSize: '10px', marginLeft: '2px' }}>{isExpanded ? '▾' : '▸'}</span>
                      </button>

                      {totalAnalyzed > 0 ? (
                        <div className="flex items-center gap-2 mt-1">
                          <div className="flex-1 h-1 rounded-full overflow-hidden" style={{ background: '#E8DFCC' }}>
                            <div
                              className="h-full rounded-full"
                              style={{
                                width: `${pct}%`,
                                background: isRetenu ? '#B8962E' : m.status === 'maybe' ? '#B8962E' : '#7A2E2E',
                              }}
                            />
                          </div>
                          <span
                            className="text-[10px] shrink-0 px-1.5 py-0.5 tabular-nums"
                            style={{
                              color: senseCount > 0 ? '#B8962E' : '#9E9089',
                              fontWeight: senseCount > 0 ? 600 : 400,
                            }}
                          >
                            {senseCount}/{totalAnalyzed} ({pct}%)
                          </span>
                        </div>
                      ) : (
                        <span className="text-[10px] mt-0.5 inline-block" style={{ color: '#9E9089' }}>en attente d'analyses</span>
                      )}
                    </div>
                  </div>

                  {/* Proof + axes (expanded) */}
                  {isExpanded && (
                    <div className="mt-2 text-xs space-y-2">
                      {/* Verse refs for this sense */}
                      {(() => {
                        const rawRefs = counts.refs_by_sense?.[m.sense] ?? []
                        if (rawRefs.length === 0) return null
                        const refs = [...rawRefs].sort((a, b) => {
                          const [sa, va] = a.split(':').map(Number)
                          const [sb, vb] = b.split(':').map(Number)
                          return sa - sb || va - vb
                        })
                        const MAX_REFS = 10
                        const visible = refs.slice(0, MAX_REFS)
                        const hidden = refs.slice(MAX_REFS)
                        const [showAll, setShowAll] = [expandedRefs[`refs_${m.id}`] ?? false, (v: boolean) => setExpandedRefs(prev => ({ ...prev, [`refs_${m.id}`]: v }))]
                        const displayed = showAll ? refs : visible
                        return (
                          <div className="flex items-center gap-1.5 flex-wrap">
                            <span style={{ fontSize: '10px', color: '#9E9089', letterSpacing: '0.08em', textTransform: 'uppercase' as const, fontWeight: 500 }}>versets</span>
                            <span style={{ color: 'rgba(184,150,46,0.4)' }}>·</span>
                            <span style={{ fontSize: '12.5px', fontWeight: 700, letterSpacing: '0.03em' }}>
                              {displayed.map((ref, ri) => {
                                const [surahId, verseNum] = ref.split(':')
                                return (
                                  <span key={ri}>
                                    <a
                                      href={`/surah/${surahId}#verse-${surahId}-${verseNum}`}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      style={{ color: '#B8962E', textDecoration: 'none', cursor: 'pointer', borderBottom: '1px dashed rgba(184,150,46,0.5)', paddingBottom: '1px' }}
                                      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderBottom = '1px solid #B8962E' }}
                                      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderBottom = '1px dashed rgba(184,150,46,0.5)' }}
                                    >
                                      {ref}
                                    </a>
                                    {ri < displayed.length - 1 && <span style={{ color: '#C8BCAD', margin: '0 6px' }}>|</span>}
                                  </span>
                                )
                              })}
                            </span>
                            {hidden.length > 0 && !showAll && (
                              <button
                                onClick={(e) => { e.stopPropagation(); setShowAll(true) }}
                                style={{ fontSize: '10px', color: '#B8962E', fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer', padding: '0 4px' }}
                              >
                                +{hidden.length} autres
                              </button>
                            )}
                          </div>
                        )
                      })()}

                      {/* Justification — NE PAS afficher les axes de word_meanings ici,
                          les axes sont par verset et viennent du VWA (section concept ci-dessus) */}
                    </div>
                  )}
                </div>
              )
            })
            })()}
          </div>
        </div>
      )}

      {/* Daily expressions */}
      {analysis.daily?.length > 0 && (() => {
        // Normalize function: strip diacritics, hamza, apostrophes
        const normalize = (s: string) => s.toLowerCase()
          .replace(/[ʿʾ''`]/g, '')
          .replace(/ā/g, 'a').replace(/ī/g, 'i').replace(/ū/g, 'u')
          .replace(/ṣ/g, 's').replace(/ḍ/g, 'd').replace(/ṭ/g, 't')
          .replace(/ẓ/g, 'z').replace(/ḥ/g, 'h').replace(/ġ/g, 'g')
          .replace(/š/g, 'sh').replace(/ḫ/g, 'kh')
          .replace(/[-\s]/g, '')

        // Use word_key as root consonants (most reliable: "ahd", "qwl", "smd")
        const rootKey = normalize(analysis.word_key || analysis.root_phon || '')

        // Check if root consonants appear in order within a word
        // Strip vowels from the word first, then check if root letters are consecutive
        const stripVowels = (s: string) => s.replace(/[aeiou]/g, '')

        const containsRootInOrder = (word: string, root: string): boolean => {
          if (root.length < 2 || word.length < root.length) return false
          // Strip vowels from both and check if root consonants appear consecutively
          const wordConsonants = stripVowels(word)
          const rootConsonants = stripVowels(root)
          return wordConsonants.includes(rootConsonants)
        }

        // All senses of this root (for French highlighting)
        const allSenseWords = senses.map(s => s.sense.toLowerCase().split(/[\s,]+/)).flat().filter(w => w.length >= 3)
        // Also add the retenu
        if (analysis.retenu) allSenseWords.push(...analysis.retenu.toLowerCase().split(/[\s,]+/).filter(w => w.length >= 3))
        const uniqueSenseWords = [...new Set(allSenseWords)]

        const highlightFrench = (text: string) => {
          if (uniqueSenseWords.length === 0) return text
          const words = text.split(/(\s+)/)
          return words.map((w, i) => {
            if (/^\s+$/.test(w)) return <span key={i}>{w}</span>
            const wLower = w.toLowerCase().replace(/[.,;:!?'"()]/g, '')
            if (wLower.length >= 3 && uniqueSenseWords.some(sw => wLower.includes(sw) || sw.includes(wLower))) {
              return <span key={i} style={{ color: '#B8962E', fontWeight: 600 }}>{w}</span>
            }
            return <span key={i}>{w}</span>
          })
        }

        const highlightPhon = (text: string) => {
          if (!text || !rootKey || rootKey.length < 2) return text
          const words = text.split(/(\s+)/)
          return words.map((w, i) => {
            if (/^\s+$/.test(w)) return <span key={i}>{w}</span>
            const wNorm = normalize(w)
            if (wNorm.length >= 3 && containsRootInOrder(wNorm, rootKey)) {
              return <span key={i} style={{ color: '#B8962E', fontWeight: 600 }}>{w}</span>
            }
            return <span key={i}>{w}</span>
          })
        }

        return (
          <div>
            <h4 className="uppercase mb-3" style={{ fontSize: '11px', letterSpacing: '0.1em', color: '#3D3228', fontWeight: 700 }}>
              Expressions du quotidien
            </h4>
            <div>
              {analysis.daily.map((d, idx) => (
                <div
                  key={d.id}
                  style={{
                    padding: '8px 0',
                    borderBottom: idx < analysis.daily.length - 1 ? '1px solid rgba(184,150,46,0.1)' : 'none',
                  }}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <p className="italic" style={{ fontSize: '12px', color: '#6B5E52', lineHeight: 1.6 }}>
                        {highlightPhon(d.phon)}
                      </p>
                      <p style={{ fontSize: '13px', color: '#3D3228', lineHeight: 1.6 }}>
                        {highlightFrench(d.french)}
                      </p>
                    </div>
                    {d.arabic && (
                      <span className="font-arabic shrink-0" dir="rtl" style={{ fontSize: '15px', color: '#B8962E', lineHeight: 1.8 }}>
                        {d.arabic}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )
      })()}
    </div>
  )
}
