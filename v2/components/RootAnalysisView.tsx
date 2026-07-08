'use client'

import { useState, useMemo, useEffect } from 'react'
import { createPortal } from 'react-dom'

type Meaning = {
  id: number
  sense: string
  sense_ar: string | null
  concept: string | null
  description: string | null
  proof_phon: string | null
  proof_ref: string | null
  proof_tr: string | null
  display_order: number
  meaning_type: string | null
}

type Daily = {
  id: number
  sense: string
  arabic: string | null
  phon: string | null
  french: string | null
}

type Props = {
  data: {
    analysis: {
      id: number
      word_key: string
      root_ar: string
      root_phon: string
      root_meaning: string | null
      retenu: string | null
      etymological_concept: string | null
    }
    meanings: Meaning[]
    daily: Daily[]
    totalQac: number
    totalAnalyzed: number
    refsBySense: Record<string, string[]>
    refsByConcept: Record<string, string[]>
    senseCounts: Record<string, number>
    conceptCounts: Record<string, number>
  }
}

export default function RootAnalysisView({ data }: Props) {
  const { analysis, meanings, daily, totalQac, totalAnalyzed, refsBySense, refsByConcept, senseCounts, conceptCounts } = data

  // Grouper les sens par concept (ordre stable = display_order de word_meanings)
  const conceptGroups = useMemo(() => {
    const m = new Map<string, Meaning[]>()
    for (const s of meanings) {
      const c = s.concept || 'Sans concept'
      if (!m.has(c)) m.set(c, [])
      m.get(c)!.push(s)
    }
    // Trier les concepts par occurrences décroissantes puis alphabétique
    return [...m.entries()].sort(([nA, sA], [nB, sB]) => {
      const cA = conceptCounts[nA] || 0
      const cB = conceptCounts[nB] || 0
      if (cA !== cB) return cB - cA
      return nA.localeCompare(nB, 'fr')
    })
  }, [meanings, conceptCounts])

  const [activeTab, setActiveTab] = useState<string>(conceptGroups[0]?.[0] || '')
  const [expandedBlocks, setExpandedBlocks] = useState<Set<string>>(() => new Set([conceptGroups[0]?.[0] || '']))
  const [hoveredConcept, setHoveredConcept] = useState<string | null>(null)
  const [tooltipPos, setTooltipPos] = useState<{ left: number; top: number; width: number } | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => { setMounted(true) }, [])

  const toggleBlock = (name: string) => {
    setExpandedBlocks(prev => {
      const next = new Set(prev)
      if (next.has(name)) next.delete(name); else next.add(name)
      return next
    })
  }

  return (
    <article className="space-y-6">
      {/* ═══ HEADER RACINE ═══ */}
      <header
        className="rounded-2xl p-5 sm:p-6"
        style={{
          background: '#FFFFFF',
          border: '1px solid rgba(184,150,46,0.22)',
          boxShadow: '0 1px 3px rgba(120,90,30,0.04), 0 4px 14px rgba(120,90,30,0.04)',
        }}
      >
        <div className="flex items-baseline gap-4 flex-wrap">
          <span
            className="font-arabic"
            lang="ar"
            dir="rtl"
            style={{ fontSize: 'clamp(44px, 12vw, 60px)', color: '#B8962E', lineHeight: 1, fontWeight: 400 }}
          >
            {analysis.root_ar}
          </span>
          <div>
            <div
              style={{
                fontSize: 'clamp(22px, 5vw, 30px)',
                fontWeight: 600,
                color: '#1A1410',
                fontFamily: "'Cormorant Garamond', serif",
                letterSpacing: '0.02em',
                lineHeight: 1.1,
              }}
            >
              {analysis.root_phon || analysis.word_key}
            </div>
            <div className="flex items-baseline gap-1.5 mt-1.5">
              <span style={{ fontSize: '18px', color: '#B8962E', fontWeight: 700, fontFamily: "'Cormorant Garamond', serif" }}>{totalQac}</span>
              <span style={{ fontSize: '15px', color: '#3D3228', fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic' }}>
                occurrence{totalQac > 1 ? 's' : ''} dans le Coran
              </span>
              {totalAnalyzed > 0 && (
                <>
                  <span style={{ color: '#8A7E72', margin: '0 6px' }}>·</span>
                  <span style={{ fontSize: '14px', color: '#8A7428', fontFamily: "'Cormorant Garamond', serif" }}>
                    {totalAnalyzed} analysée{totalAnalyzed > 1 ? 's' : ''}
                  </span>
                </>
              )}
            </div>
          </div>
        </div>

        {/* ═══ ONGLETS CONCEPTS ═══ */}
        {conceptGroups.length > 0 && (
          <div className="flex flex-wrap gap-x-3 gap-y-2 justify-start items-end mt-4" style={{ paddingTop: '14px', borderTop: '1px solid rgba(184,150,46,0.16)' }}>
            {conceptGroups.map(([name, ss]) => {
              const isActive = activeTab === name
              const nRefs = refsByConcept[name]?.length || 0
              return (
                <button
                  key={name}
                  type="button"
                  onClick={() => { setActiveTab(name); setExpandedBlocks(new Set([name])) }}
                  onMouseEnter={e => {
                    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect()
                    const vpW = window.innerWidth
                    const desiredW = 280
                    let left = rect.left
                    if (left + desiredW + 12 > vpW) left = Math.max(12, vpW - desiredW - 12)
                    setTooltipPos({ left, top: rect.bottom + 6, width: desiredW })
                    setHoveredConcept(name)
                  }}
                  onMouseLeave={() => setHoveredConcept(null)}
                  className="concept-tab-btn"
                  style={{
                    padding: '2px 0',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                >
                  <span
                    style={{
                      color: isActive ? '#B8962E' : '#1A1410',
                      fontSize: isActive ? '14px' : '13px',
                      fontWeight: isActive ? 700 : 500,
                      whiteSpace: 'nowrap',
                      paddingBottom: '4px',
                      borderBottom: isActive ? '3px solid #B8962E' : '2px solid rgba(184,150,46,0.4)',
                      display: 'inline-block',
                    }}
                  >
                    {name}
                    {analysis.etymological_concept === name && (
                      <span
                        title="Sens étymologique premier de la racine (d'après Lane's) — les autres sens en dérivent"
                        style={{
                          fontSize: '9px',
                          color: '#B8962E',
                          fontStyle: 'italic',
                          marginLeft: '5px',
                          fontWeight: 700,
                          letterSpacing: '0.05em',
                          textTransform: 'uppercase',
                        }}
                      >
                        ✦ sens premier
                      </span>
                    )}
                    {nRefs > 0 && (
                      <span style={{ fontSize: '10px', color: '#8A7E72', fontStyle: 'italic', marginLeft: '5px' }}>
                        {nRefs}{isActive ? ` versets` : ''}
                      </span>
                    )}
                  </span>
                </button>
              )
            })}
          </div>
        )}
      </header>

      {/* ═══ SENS ÉTYMOLOGIQUES ═══ */}
      {conceptGroups.length > 0 && (
        <section
          aria-labelledby="senses-heading"
          className="rounded-2xl p-5 sm:p-6"
          style={{
            background: '#FFFFFF',
            border: '1px solid rgba(184,150,46,0.22)',
            boxShadow: '0 1px 3px rgba(120,90,30,0.04), 0 4px 14px rgba(120,90,30,0.04)',
          }}
        >
          <h2
            id="senses-heading"
            className="uppercase mb-3"
            style={{
              fontSize: '11px',
              letterSpacing: '0.1em',
              color: '#3D3228',
              fontWeight: 700,
            }}
          >
            Sens étymologiques
            {totalAnalyzed > 0 && (
              <span style={{ color: '#B8962E', fontWeight: 600, marginLeft: '6px' }}>
                · {totalAnalyzed} verset{totalAnalyzed > 1 ? 's' : ''} analysé{totalAnalyzed > 1 ? 's' : ''}
              </span>
            )}
          </h2>

          <div className="space-y-3">
            {conceptGroups.map(([conceptName, conceptSenses]) => {
              const isExpanded = expandedBlocks.has(conceptName)
              const conceptOcc = conceptCounts[conceptName] || 0
              const pct = totalAnalyzed > 0 ? Math.round((conceptOcc / totalAnalyzed) * 100) : 0
              const refs = refsByConcept[conceptName] || []
              const sortedRefs = [...refs].sort((a, b) => {
                const [sa, va] = a.split(':').map(Number)
                const [sb, vb] = b.split(':').map(Number)
                return sa - sb || va - vb
              })

              return (
                <div
                  key={conceptName}
                  className="pl-3"
                  style={{
                    borderLeft: `3px solid ${conceptOcc > 0 ? '#B8962E' : '#C8BCAD'}`,
                  }}
                >
                  {/* Header cliquable */}
                  <button
                    onClick={() => toggleBlock(conceptName)}
                    className="flex items-center gap-1.5 flex-wrap cursor-pointer text-left w-full"
                    style={{
                      background: 'none',
                      border: 'none',
                      padding: '4px 0',
                      borderRadius: '4px',
                      transition: 'background 0.15s',
                    }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(184,150,46,0.05)' }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'none' }}
                  >
                    <span
                      aria-hidden="true"
                      style={{
                        color: '#B8962E',
                        fontSize: '12px',
                        marginRight: '2px',
                        transition: 'transform 0.2s',
                        transform: isExpanded ? 'rotate(90deg)' : 'rotate(0deg)',
                        display: 'inline-block',
                        lineHeight: 1,
                      }}
                    >
                      ▸
                    </span>
                    <span style={{ fontSize: '15px', fontWeight: 600, color: '#1A1410' }}>{conceptName}</span>
                    <span style={{ fontSize: '10px', color: '#9E9089' }}>
                      ({conceptSenses.length} sens)
                    </span>
                    {analysis.etymological_concept === conceptName && (
                      <span
                        title="Sens étymologique premier de la racine (d'après Lane's) — les autres sens en dérivent"
                        style={{
                          fontSize: '9px',
                          color: '#B8962E',
                          fontStyle: 'italic',
                          fontWeight: 700,
                          letterSpacing: '0.05em',
                          textTransform: 'uppercase',
                          marginLeft: '4px',
                        }}
                      >
                        ✦ sens premier
                      </span>
                    )}
                  </button>

                  {/* Barre de progression */}
                  {totalAnalyzed > 0 ? (
                    <div className="flex items-center gap-2 mt-1">
                      <div
                        className="flex-1 h-1 rounded-full overflow-hidden"
                        style={{ background: '#E8DFCC' }}
                      >
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: `${pct}%`,
                            background: conceptOcc > 0 ? '#B8962E' : 'transparent',
                            transition: 'width 0.4s ease',
                          }}
                        />
                      </div>
                      <span
                        className="text-[10px] shrink-0 px-1.5 py-0.5 tabular-nums"
                        style={{
                          color: conceptOcc > 0 ? '#B8962E' : '#9E9089',
                          fontWeight: conceptOcc > 0 ? 600 : 400,
                        }}
                      >
                        {conceptOcc}/{totalAnalyzed} ({pct}%)
                      </span>
                    </div>
                  ) : (
                    <span className="text-[10px] mt-0.5 inline-block" style={{ color: '#9E9089' }}>
                      en attente d&apos;analyses
                    </span>
                  )}

                  {/* Contenu déplié */}
                  {isExpanded && (
                    <div className="mt-3 space-y-3" style={{ paddingBottom: '10px' }}>
                      {/* Refs versets cliquables */}
                      {sortedRefs.length > 0 && (
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <span style={{ fontSize: '10px', color: '#9E9089', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                            versets ·
                          </span>
                          {sortedRefs.map((ref, i) => (
                            <a
                              key={i}
                              href={`/surah/${ref.split(':')[0]}#verse-${ref.replace(':', '-')}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="verse-ref"
                              style={{
                                fontSize: '12px',
                                color: '#B8962E',
                                fontWeight: 600,
                                textDecoration: 'none',
                                padding: '1px 6px',
                                borderRadius: '4px',
                                background: 'rgba(184,150,46,0.08)',
                                transition: 'background 0.15s ease',
                              }}
                            >
                              {ref}
                            </a>
                          ))}
                        </div>
                      )}

                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </section>
      )}

      {/* ═══ EXPRESSIONS DU QUOTIDIEN ═══ */}
      {daily.length > 0 && (
        <section
          aria-labelledby="daily-heading"
          className="rounded-2xl p-5 sm:p-6"
          style={{
            background: '#FFFFFF',
            border: '1px solid rgba(184,150,46,0.22)',
            boxShadow: '0 1px 3px rgba(120,90,30,0.04), 0 4px 14px rgba(120,90,30,0.04)',
          }}
        >
          <h2
            id="daily-heading"
            className="uppercase mb-3"
            style={{
              fontSize: '11px',
              letterSpacing: '0.1em',
              color: '#3D3228',
              fontWeight: 700,
            }}
          >
            Expressions du quotidien
            <span style={{ color: '#B8962E', fontWeight: 600, marginLeft: '6px' }}>· {daily.length}</span>
          </h2>

          <ul className="list-none p-0 m-0 space-y-3">
            {daily.map(d => (
              <li key={d.id} className="m-0" style={{ paddingBottom: '10px', borderBottom: '1px dashed rgba(184,150,46,0.14)' }}>
                <div className="flex items-baseline gap-2">
                  {d.phon && (
                    <span style={{ fontSize: '11px', color: '#8A7E72', fontStyle: 'italic', fontFamily: "'Cormorant Garamond', serif", flexShrink: 0 }}>
                      {d.phon}
                    </span>
                  )}
                  {d.arabic && (
                    <span
                      className="font-arabic ml-auto"
                      lang="ar"
                      dir="rtl"
                      style={{ fontSize: '15px', color: '#B8962E' }}
                    >
                      {d.arabic}
                    </span>
                  )}
                </div>
                <p
                  style={{
                    fontSize: '13.5px',
                    color: '#4A3F35',
                    lineHeight: 1.6,
                    margin: '3px 0 0 0',
                    fontFamily: "'Cormorant Garamond', serif",
                  }}
                >
                  {d.french}
                </p>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Tooltip concept (hover) — via portal pour dépasser tout overflow parent */}
      {mounted && hoveredConcept && tooltipPos && createPortal(
        <div
          style={{
            position: 'fixed',
            left: tooltipPos.left,
            top: tooltipPos.top,
            width: tooltipPos.width,
            background: '#FDFAF3',
            border: '1px solid rgba(184,150,46,0.35)',
            borderRadius: '10px',
            boxShadow: '0 4px 20px rgba(120,90,30,0.12), 0 2px 6px rgba(120,90,30,0.06)',
            padding: '12px 14px',
            zIndex: 9999,
            pointerEvents: 'none',
          }}
        >
          {(() => {
            const list = conceptGroups.find(([n]) => n === hoveredConcept)?.[1] || []
            return (
              <>
                <div
                  className="uppercase"
                  style={{
                    fontSize: '11px',
                    letterSpacing: '0.08em',
                    color: '#B8962E',
                    fontWeight: 700,
                    marginBottom: '8px',
                  }}
                >
                  <span aria-hidden="true" style={{ marginRight: '4px' }}>✦</span>
                  {hoveredConcept}
                  <span style={{ color: '#8A7E72', fontWeight: 500, fontStyle: 'italic', marginLeft: '6px', textTransform: 'none', letterSpacing: 'normal' }}>
                    {list.length} sens
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {list.map(s => (
                    <span
                      key={s.id}
                      style={{
                        fontSize: '12px',
                        color: '#4A3F35',
                        background: '#FFFFFF',
                        border: '1px solid rgba(184,150,46,0.28)',
                        borderRadius: '999px',
                        padding: '3px 9px',
                        whiteSpace: 'nowrap',
                        fontFamily: "'Cormorant Garamond', serif",
                      }}
                    >
                      <span aria-hidden="true" style={{ color: '#B8962E', opacity: 0.7, marginRight: '4px', fontSize: '10px' }}>▸</span>
                      {s.sense}
                    </span>
                  ))}
                </div>
              </>
            )
          })()}
        </div>,
        document.body
      )}

      <style jsx>{`
        .verse-ref:hover {
          background: rgba(184, 150, 46, 0.18) !important;
        }
        .concept-tab-btn:hover span {
          color: #B8962E !important;
        }
      `}</style>
    </article>
  )
}
