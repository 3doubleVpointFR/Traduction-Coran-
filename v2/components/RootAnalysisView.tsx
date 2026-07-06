'use client'

import { useState } from 'react'

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

  // Grouper les sens par concept
  const conceptMap = new Map<string, Meaning[]>()
  for (const m of meanings) {
    const c = m.concept || 'Sans concept'
    if (!conceptMap.has(c)) conceptMap.set(c, [])
    conceptMap.get(c)!.push(m)
  }

  const conceptEntries = [...conceptMap.entries()]

  // Concept le plus retenu (si présent en analyses)
  let mainConcept: string | null = null
  let mainCount = 0
  for (const [c, n] of Object.entries(conceptCounts)) {
    if (n > mainCount) { mainCount = n; mainConcept = c }
  }

  const [openConcept, setOpenConcept] = useState<string | null>(mainConcept || (conceptEntries[0]?.[0] || null))
  const [expandedSense, setExpandedSense] = useState<Set<number>>(new Set())

  const toggleSense = (id: number) => {
    setExpandedSense(prev => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id); else next.add(id)
      return next
    })
  }

  return (
    <article className="space-y-6">
      {/* Header racine */}
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
              <span style={{ fontSize: '20px', color: '#B8962E', fontWeight: 700, fontFamily: "'Cormorant Garamond', serif" }}>{totalQac}</span>
              <span style={{ fontSize: '14.5px', color: '#3D3228', fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic' }}>
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

        {analysis.root_meaning && (
          <p
            style={{
              marginTop: '18px',
              fontSize: '14.5px',
              color: '#4A3F35',
              lineHeight: 1.65,
              fontFamily: "'Cormorant Garamond', serif",
              paddingTop: '14px',
              borderTop: '1px solid rgba(184,150,46,0.16)',
            }}
          >
            {analysis.root_meaning}
          </p>
        )}
      </header>

      {/* Onglets Concepts */}
      {conceptEntries.length > 0 && (
        <section aria-labelledby="concepts-heading">
          <div className="flex items-center gap-3 mb-4">
            <h2
              id="concepts-heading"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                color: '#1A1410',
                fontSize: 'clamp(18px, 4vw, 22px)',
                letterSpacing: '0.03em',
                fontWeight: 600,
                margin: 0,
              }}
            >
              Champs sémantiques
            </h2>
            <span style={{ fontSize: '12.5px', color: '#8A7428', letterSpacing: '0.06em', fontStyle: 'italic', fontFamily: "'Cormorant Garamond', serif" }}>
              {conceptEntries.length} concept{conceptEntries.length > 1 ? 's' : ''}
            </span>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap gap-2 mb-4">
            {conceptEntries.map(([concept, ms]) => {
              const isActive = openConcept === concept
              const nRef = refsByConcept[concept]?.length || 0
              return (
                <button
                  key={concept}
                  type="button"
                  onClick={() => setOpenConcept(concept)}
                  className="concept-tab"
                  style={{
                    padding: '8px 14px',
                    borderRadius: '999px',
                    border: isActive ? '1px solid #B8962E' : '1px solid rgba(184,150,46,0.28)',
                    background: isActive ? '#FDF6E4' : '#FFFFFF',
                    color: isActive ? '#B8962E' : '#3D3228',
                    fontSize: '13px',
                    fontWeight: isActive ? 700 : 500,
                    fontFamily: "'Cormorant Garamond', serif",
                    letterSpacing: '0.02em',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  <span>{concept}</span>
                  <span style={{ fontSize: '11px', color: isActive ? '#B8962E' : '#8A7E72', fontStyle: 'italic', opacity: 0.85 }}>
                    {ms.length}
                    {nRef > 0 && ` · ${nRef} versets`}
                  </span>
                </button>
              )
            })}
          </div>

          {/* Contenu du concept ouvert */}
          {openConcept && conceptMap.has(openConcept) && (
            <div
              className="rounded-xl p-4 sm:p-5"
              style={{
                background: '#FFFFFF',
                border: '1px solid rgba(184,150,46,0.18)',
                boxShadow: '0 1px 3px rgba(120,90,30,0.04)',
              }}
            >
              {(() => {
                const list = conceptMap.get(openConcept)!
                const description = list.find(m => m.description)?.description
                return (
                  <>
                    {description && (
                      <p
                        style={{
                          fontSize: '13.5px',
                          color: '#4A3F35',
                          lineHeight: 1.65,
                          margin: '0 0 14px 0',
                          paddingBottom: '12px',
                          borderBottom: '1px dashed rgba(184,150,46,0.24)',
                          fontStyle: 'italic',
                          fontFamily: "'Cormorant Garamond', serif",
                        }}
                      >
                        {description}
                      </p>
                    )}
                    <ul className="list-none p-0 m-0 space-y-2">
                      {list.map(m => {
                        const nOcc = senseCounts[m.sense] || 0
                        const refs = refsBySense[m.sense] || []
                        const isOpen = expandedSense.has(m.id)
                        return (
                          <li key={m.id} className="m-0">
                            <button
                              type="button"
                              onClick={() => refs.length > 0 && toggleSense(m.id)}
                              disabled={refs.length === 0}
                              className="w-full text-left flex items-baseline gap-2.5 py-1.5"
                              style={{
                                background: 'transparent',
                                border: 'none',
                                cursor: refs.length > 0 ? 'pointer' : 'default',
                                padding: '4px 0',
                              }}
                            >
                              <span
                                aria-hidden="true"
                                style={{
                                  color: '#B8962E',
                                  fontSize: '11px',
                                  opacity: refs.length > 0 ? 1 : 0.3,
                                  transform: isOpen ? 'rotate(90deg)' : 'rotate(0)',
                                  transition: 'transform 0.15s ease',
                                  display: 'inline-block',
                                  width: '10px',
                                }}
                              >
                                ▸
                              </span>
                              <span
                                style={{
                                  fontSize: '15px',
                                  color: '#1A1410',
                                  fontWeight: 500,
                                  fontFamily: "'Cormorant Garamond', serif",
                                  letterSpacing: '0.01em',
                                }}
                              >
                                {m.sense}
                              </span>
                              {m.sense_ar && (
                                <span
                                  className="font-arabic"
                                  lang="ar"
                                  dir="rtl"
                                  style={{ fontSize: '15px', color: '#B8962E', marginLeft: '4px' }}
                                >
                                  {m.sense_ar}
                                </span>
                              )}
                              {nOcc > 0 && (
                                <span
                                  className="ml-auto"
                                  style={{
                                    fontSize: '11.5px',
                                    color: '#8A7428',
                                    fontStyle: 'italic',
                                    fontFamily: "'Cormorant Garamond', serif",
                                    flexShrink: 0,
                                  }}
                                >
                                  {nOcc} occ.
                                </span>
                              )}
                            </button>
                            {isOpen && refs.length > 0 && (
                              <div
                                className="ml-6 mt-1 mb-2 flex flex-wrap gap-1.5"
                                style={{ paddingBottom: '6px' }}
                              >
                                {refs.map(ref => {
                                  const [surah, verse] = ref.split(':')
                                  return (
                                    <a
                                      key={ref}
                                      href={`/surah/${surah}#v${verse}`}
                                      className="verse-chip"
                                      style={{
                                        fontSize: '11.5px',
                                        color: '#8A7428',
                                        background: '#FDF6E4',
                                        border: '1px solid rgba(184,150,46,0.28)',
                                        borderRadius: '4px',
                                        padding: '2px 7px',
                                        letterSpacing: '0.02em',
                                        fontFamily: "'Cormorant Garamond', serif",
                                        textDecoration: 'none',
                                        transition: 'all 0.15s ease',
                                      }}
                                    >
                                      {ref}
                                    </a>
                                  )
                                })}
                              </div>
                            )}
                          </li>
                        )
                      })}
                    </ul>
                  </>
                )
              })()}
            </div>
          )}
        </section>
      )}

      {/* Phrases du quotidien */}
      {daily.length > 0 && (
        <section aria-labelledby="daily-heading">
          <div className="flex items-center gap-3 mb-4">
            <h2
              id="daily-heading"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                color: '#1A1410',
                fontSize: 'clamp(18px, 4vw, 22px)',
                letterSpacing: '0.03em',
                fontWeight: 600,
                margin: 0,
              }}
            >
              Phrases du quotidien
            </h2>
            <span style={{ fontSize: '12.5px', color: '#8A7428', letterSpacing: '0.06em', fontStyle: 'italic', fontFamily: "'Cormorant Garamond', serif" }}>
              {daily.length}
            </span>
          </div>

          <ul className="list-none p-0 m-0 space-y-3">
            {(() => {
              // Grouper par sens
              const bySense = new Map<string, Daily[]>()
              for (const d of daily) {
                if (!bySense.has(d.sense)) bySense.set(d.sense, [])
                bySense.get(d.sense)!.push(d)
              }
              return [...bySense.entries()].map(([sense, list]) => (
                <li
                  key={sense}
                  className="rounded-xl p-4"
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid rgba(184,150,46,0.18)',
                    boxShadow: '0 1px 3px rgba(120,90,30,0.04)',
                  }}
                >
                  <div className="flex items-baseline gap-2 mb-2.5">
                    <span
                      aria-hidden="true"
                      style={{ color: '#B8962E', fontSize: '10px', opacity: 0.85 }}
                    >
                      ✦
                    </span>
                    <span
                      style={{
                        fontSize: '11px',
                        color: '#B8962E',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        fontWeight: 700,
                      }}
                    >
                      Sens : {sense}
                    </span>
                  </div>
                  <ul className="list-none p-0 m-0 space-y-2">
                    {list.map(d => (
                      <li key={d.id} className="m-0">
                        <p
                          style={{
                            fontSize: '13.5px',
                            color: '#4A3F35',
                            lineHeight: 1.6,
                            margin: 0,
                            fontStyle: 'italic',
                            fontFamily: "'Cormorant Garamond', serif",
                          }}
                        >
                          « {d.french} »
                        </p>
                      </li>
                    ))}
                  </ul>
                </li>
              ))
            })()}
          </ul>
        </section>
      )}

      <style jsx>{`
        .concept-tab:hover {
          background: #FDF6E4 !important;
          border-color: rgba(184,150,46,0.5) !important;
        }
        .verse-chip:hover {
          background: #F9E8B6 !important;
          color: #B8962E !important;
        }
      `}</style>
    </article>
  )
}
