'use client'

import React, { useState } from 'react'
import { cn, cleanArabicText } from '@/lib/utils'
import type { JobProgress } from './SurahView'

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

interface Segment {
  arabic?: string
  phon: string
  fr: string
  word_key: string | null
  is_particle: boolean
  position?: number
}

interface VerseAnalysis {
  segments: Segment[]
  full_translation?: string
  translation_arab?: string
  translation_explanation?: string
}

interface Props {
  verse: Verse
  words: Word[]
  analysis?: VerseAnalysis
  isAnalyzing: boolean
  jobProgress: JobProgress | null
  activeWordKey: string | null
  onWordClick: (wordKey: string, activeId?: string, senseRetenu?: string, verseId?: number, position?: number) => void
  onAnalyze: () => void
}

const STEP_LABELS: Record<string, string> = {
  tagging: 'Identification',
  tagged: 'Identification',
  etymology: 'Étymologie',
  occurrences: 'Occurrences',
  classifying: 'Classification',
  selecting: 'Sélection',
  reconstructing: 'Reconstruction',
}

export default function VersePanel({
  verse,
  words,
  analysis,
  isAnalyzing,
  jobProgress,
  activeWordKey,
  onWordClick,
  onAnalyze,
}: Props) {
  const [showDemarche, setShowDemarche] = useState(false)
  const [showJustification, setShowJustification] = useState(false)
  const [showCritique, setShowCritique] = useState(false)
  const [showExplanation, setShowExplanation] = useState(false)
  const segments = analysis?.segments

  // Extract §DEMARCHE§ intro paragraph (résumé) to display under the verse header.
  // The intro is everything in §DEMARCHE§ before the first **word** paragraph.
  let demarcheIntro = ''
  const explText = analysis?.translation_explanation || ''
  if (explText.includes('§DEMARCHE§')) {
    const parts = explText.split(/§(DEMARCHE|JUSTIFICATION|CRITIQUE|FINALITE)§/)
    for (let i = 0; i < parts.length; i++) {
      if (parts[i] === 'DEMARCHE') {
        const dem = (parts[i + 1] || '').trim()
        // Try double-newline + ** first (standard format)
        let firstMark = dem.indexOf('\n\n**')
        // Fallback : if no double-newline, look for ` **` (space + bold) which is
        // typically where a word analysis starts even without proper line breaks
        if (firstMark < 0) firstMark = dem.indexOf(' **')
        if (firstMark > 0) {
          demarcheIntro = dem.substring(0, firstMark).trim()
        } else {
          // Last fallback : take the first sentence (up to first period followed by space+capital)
          const sentenceMatch = dem.match(/^[^.!?]{20,}[.!?](?=\s)/)
          if (sentenceMatch) demarcheIntro = sentenceMatch[0].trim()
        }
      }
    }
  }

  return (
    <div id={`verse-${verse.surah_id}-${verse.verse_num}`} data-tour-verse-num={verse.verse_num} className="verse-card rounded-lg p-5" style={{ background: '#FFFFFF', border: '1px solid rgba(184,150,46,0.3)', boxShadow: '0 2px 12px rgba(184,150,46,0.12)', marginBottom: '16px', scrollMarginTop: '110px' }}>
      {/* Verse header */}
      <div className="flex items-center justify-between mb-4">
        <span style={{ fontSize: '16px', color: '#3D3228', fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, letterSpacing: '0.05em' }}>
          <span aria-hidden="true" style={{ color: '#B8962E', fontSize: '12px', marginRight: '6px', opacity: 0.85 }}>✦</span>
          Sourate {verse.surah_id}, Signe {verse.verse_num}
        </span>
        {!analysis && !isAnalyzing && (
          <button
            onClick={onAnalyze}
            className="verse-translate-btn inline-flex items-center gap-1.5 rounded-full"
            style={{
              fontSize: '11px',
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase' as const,
              padding: '7px 18px',
              border: '1px solid rgba(158,126,31,0.5)',
              color: '#FFFCF6',
              background: 'linear-gradient(135deg, #C9A23A 0%, #B8962E 55%, #9E7E1F 100%)',
              boxShadow: '0 2px 8px rgba(184,150,46,0.3), 0 1px 2px rgba(184,150,46,0.15)',
              textShadow: '0 1px 1px rgba(80,55,10,0.25)',
              cursor: 'pointer',
            }}
          >
            <span aria-hidden="true" style={{ fontSize: '11px', opacity: 0.95 }}>✦</span>
            Traduire ce signe
          </button>
        )}
        {isAnalyzing && !jobProgress && (
          <span className="text-xs flex items-center gap-1" style={{ color: '#B8962E' }}>
            <span className="animate-spin inline-block w-3 h-3 border-2 rounded-full" style={{ borderColor: 'rgba(184,150,46,0.3)', borderTopColor: '#B8962E' }} />
            Lancement...
          </span>
        )}
      </div>

      {/* Résumé du verset (intro de §DEMARCHE§) */}
      {demarcheIntro && (() => {
        const paragraphs = demarcheIntro.split('\n\n').filter(s => s.trim())
        return (
          <div
            data-tour-summary="1"
            style={{
              margin: '0 0 14px 0',
              padding: '14px 18px',
              background: 'rgba(184,150,46,0.13)',
              border: '1px solid rgba(184,150,46,0.32)',
              borderLeft: '5px solid rgba(184,150,46,0.85)',
              borderRadius: '0 10px 10px 0',
              fontSize: '17px',
              lineHeight: 1.55,
              color: '#1A1410',
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 500,
              boxShadow: '0 2px 6px rgba(120,90,30,0.10), inset 0 1px 0 rgba(255,255,255,0.4)',
            }}
          >
            <div
              className="italic uppercase"
              style={{
                fontSize: '9.5px',
                letterSpacing: '0.16em',
                color: '#8A7428',
                fontWeight: 700,
                fontFamily: "'Cormorant Garamond', serif",
                marginBottom: '6px',
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
              }}
            >
              <span aria-hidden="true">✦</span>
              Résumé
            </div>
            {paragraphs.map((para, i) => {
              // Process **bold** then *italic* inside each paragraph.
              const boldChunks = para.split(/(\*\*[^*]+\*\*)/g)
              return (
                <p key={i} style={{ marginBottom: i < paragraphs.length - 1 ? '6px' : 0, fontStyle: 'italic' }}>
                  {boldChunks.map((chunk, k) => {
                    if (chunk.startsWith('**') && chunk.endsWith('**')) {
                      return (
                        <span key={k} style={{ color: '#B8962E', fontWeight: 700, fontStyle: 'normal' }}>
                          {chunk.slice(2, -2)}
                        </span>
                      )
                    }
                    // *italic* nested inside (single asterisks) — render in lighter accent.
                    const italicParts = chunk.split(/(\*[^*]+\*)/g)
                    return italicParts.map((part, m) => {
                      if (part.startsWith('*') && part.endsWith('*') && !part.startsWith('**')) {
                        return (
                          <span key={`${k}-${m}`} style={{ color: '#8B6914', fontWeight: 500 }}>
                            {part.slice(1, -1)}
                          </span>
                        )
                      }
                      return <React.Fragment key={`${k}-${m}`}>{part}</React.Fragment>
                    })
                  })}
                </p>
              )
            })}
          </div>
        )
      })()}

      {/* Progress bar during analysis */}
      {isAnalyzing && jobProgress && (
        <div className="mb-3 space-y-1.5">
          <div className="flex items-center gap-2">
            <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-colors duration-500"
                style={{ width: `${(jobProgress.step / jobProgress.total) * 100}%`, background: '#B8962E' }}
              />
            </div>
            <span className="text-[10px] tabular-nums" style={{ color: '#6B5E52' }}>
              {jobProgress.step}/{jobProgress.total}
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="animate-spin inline-block w-3 h-3 border-2 rounded-full" style={{ borderColor: 'rgba(184,150,46,0.3)', borderTopColor: '#B8962E' }} />
            <span className="text-[10px]" style={{ color: '#6B5E52' }}>
              {STEP_LABELS[jobProgress.label] ?? jobProgress.label}
            </span>
          </div>
          {jobProgress.detail && (
            <p className="text-[10px] truncate" style={{ color: '#6B5E52' }}>{jobProgress.detail}</p>
          )}
        </div>
      )}

      {/* Arabic text */}
      <div className="quran-text text-center mb-4" dir="rtl">
        {verse.arabic_text ? cleanArabicText(verse.arabic_text) : (
          <span className="text-gray-300 text-base">Texte arabe non disponible</span>
        )}
      </div>

      {/* Synchronized reading — aligned grid */}
      {segments && segments.length > 0 && (
        <div className="mt-4 pt-4" style={{ borderTop: '1px solid rgba(184,150,46,0.3)' }}>
          <div className="flex flex-wrap gap-x-4 gap-y-2 justify-center items-end">
            {segments.map((seg, i) => {
              const isKey = !seg.is_particle && seg.word_key
              const isActive = activeWordKey !== null && activeWordKey === `${seg.word_key}:${i}`

              if (isKey) {
                const segSense = (seg as unknown as Record<string, unknown>).sense_retenu as string | undefined
                const pillLabel = segSense || seg.fr
                return (
                  <div
                    key={i}
                    data-tour-word-key={seg.word_key}
                    data-tour-word-index={i}
                    className="flex flex-col items-center cursor-pointer group"
                    style={{ padding: '2px 4px', transition: 'color 0.2s ease, border-color 0.2s ease' }}
                    onClick={() => {
                      const segSenseVal = (seg as unknown as Record<string, unknown>).sense_retenu as string | undefined
                      const segPosition = (seg as unknown as Record<string, unknown>).position as number | undefined
                      seg.word_key && onWordClick(seg.word_key, `${seg.word_key}:${i}`, segSenseVal, verse.id, segPosition)
                    }}
                  >
                    <span className="italic text-center" style={{ fontSize: '11px', color: isActive ? '#B8962E' : '#6B5E52', lineHeight: 1.2, marginBottom: '2px' }}>
                      {seg.phon}
                    </span>
                    <span
                      className="text-center"
                      style={{
                        color: isActive ? '#B8962E' : '#1A1410',
                        fontSize: '16px',
                        fontWeight: 600,
                        whiteSpace: 'nowrap',
                        paddingBottom: '4px',
                        borderBottom: isActive ? '3px solid #B8962E' : '2px solid rgba(184,150,46,0.6)',
                        transition: 'color 0.2s ease, border-color 0.2s ease',
                      }}
                    >
                      {pillLabel}
                    </span>
                  </div>
                )
              }

              return (
                <div key={i} className="flex flex-col items-center" style={{ padding: '2px 2px' }}>
                  <span className="italic text-center" style={{ fontSize: '11px', color: '#6B5E52', lineHeight: 1.2, marginBottom: '2px' }}>
                    {seg.phon}
                  </span>
                  <span className="text-center" style={{ color: '#6B5E52', fontSize: '14px', whiteSpace: 'nowrap', paddingBottom: '6px' }}>
                    {seg.fr}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      )}

      {/* Démarche / Justification / Critique — 3 encarts dépliables indépendants */}
      {analysis?.translation_explanation && (() => {
        const text = analysis.translation_explanation
        const hasSections = text.includes('§DEMARCHE§') || text.includes('§JUSTIFICATION§')

        if (hasSections) {
          const sectionMap: Record<string, string> = {}
          // Split sur les 4 sections : on inclut FINALITE pour qu'elle soit isolée
          // et n'apparaisse pas dans CRITIQUE (mais on n'affiche pas son contenu ici,
          // FINALITE est déjà affichée sous le résumé en haut)
          const parts = text.split(/§(DEMARCHE|JUSTIFICATION|CRITIQUE|FINALITE)§/)
          for (let i = 0; i < parts.length; i++) {
            if (parts[i] === 'DEMARCHE' || parts[i] === 'JUSTIFICATION' || parts[i] === 'CRITIQUE') {
              sectionMap[parts[i]] = (parts[i + 1] || '').trim()
            }
            // FINALITE : ignoré ici, déjà rendu en haut
          }
          // Strip §DEMARCHE§ intro (already displayed under the header) — keep only **word** paragraphs.
          if (sectionMap['DEMARCHE']) {
            const dem = sectionMap['DEMARCHE']
            const firstMark = dem.indexOf('\n\n**')
            if (firstMark > 0) {
              sectionMap['DEMARCHE'] = dem.substring(firstMark).trim()
            } else if (dem.startsWith('**') === false) {
              // Pas de paragraphe **mot** : tout le contenu était l'intro, rien à afficher dans la section.
              sectionMap['DEMARCHE'] = ''
            }
          }

          const renderChunk = (text: string, accentColor: string, baseKey: string) => {
            // Split by italic *word* (single asterisks, not double)
            const parts = text.split(/(\*[^*]+\*)/g)
            return parts.map((part: string, i: number) => {
              if (part.startsWith('*') && part.endsWith('*') && !part.startsWith('**')) {
                return <span key={baseKey + '-i' + i} style={{ fontStyle: 'italic', color: accentColor, fontWeight: 500, opacity: 0.85 }}>{part.slice(1, -1)}</span>
              }
              return <span key={baseKey + '-t' + i}>{part}</span>
            })
          }

          const renderContent = (content: string, accentColor: string) => (
            <div className="section-unfold" style={{
              padding: '12px 18px',
              borderLeft: `4px solid ${accentColor}`,
              borderRadius: '0 10px 10px 0',
              background: `${accentColor}0A`,
              fontSize: '12.5px',
              lineHeight: 1.85,
              color: '#5A4E42',
              marginTop: '6px',
              boxShadow: '0 1px 3px rgba(184,150,46,0.05)',
            }}>
              {content.split('\n\n').filter((s: string) => s.trim()).map((paragraph: string, j: number) => {
                const chunks = paragraph.split(/(\*\*[^*]+\*\*)/g)
                return (
                  <p key={j} style={{ marginBottom: '8px' }}>
                    {chunks.map((chunk: string, k: number) => {
                      if (chunk.startsWith('**') && chunk.endsWith('**')) {
                        return <span key={k} style={{ color: accentColor, fontWeight: 700 }}>{chunk.slice(2, -2)}</span>
                      }
                      return <React.Fragment key={k}>{renderChunk(chunk, accentColor, j + '-' + k)}</React.Fragment>
                    })}
                  </p>
                )
              })}
            </div>
          )

          const sections = [
            { key: 'DEMARCHE', label: 'Démarche de la traduction', color: '#B8962E', show: showDemarche, toggle: () => setShowDemarche(!showDemarche) },
            { key: 'JUSTIFICATION', label: 'Justification du choix des mots', color: '#1A5F5F', show: showJustification, toggle: () => setShowJustification(!showJustification) },
            { key: 'CRITIQUE', label: 'Critique des traductions classiques', color: '#8B4513', show: showCritique, toggle: () => setShowCritique(!showCritique) },
          ]

          return (
            <div data-tour-sections="1" className="mt-3 pt-2" style={{ borderTop: '1px solid rgba(184,150,46,0.3)' }}>
              {sections.map((sec, idx) => {
                if (!sectionMap[sec.key]) return null
                const roman = ['I', 'II', 'III'][idx] || ''
                return (
                  <div key={sec.key} className="mb-2 sm:mb-3.5">
                    <button
                      className="verse-section-btn flex items-center gap-2 w-full text-left"
                      style={{
                        padding: '6px 10px',
                        cursor: 'pointer',
                        background: 'none',
                        border: 'none',
                        borderRadius: '6px',
                        ['--section-hover-bg' as string]: `${sec.color}1A`,
                      }}
                      onClick={sec.toggle}
                    >
                      <span className={`smooth-chevron${sec.show ? ' is-open' : ''}`} style={{ color: sec.color, fontSize: '11px' }}>▸</span>
                      {roman && (
                        <span style={{
                          color: sec.color,
                          fontSize: '11.5px',
                          fontFamily: "'Cormorant Garamond', serif",
                          fontStyle: 'italic',
                          fontWeight: 700,
                          letterSpacing: '0.04em',
                          opacity: 0.85,
                        }}>
                          {roman}
                          <span className="hidden sm:inline"> —</span>
                        </span>
                      )}
                      <span style={{ fontSize: '12px', fontWeight: 600, color: sec.color, letterSpacing: '0.16em', textTransform: 'uppercase' as const, fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic' }}>
                        {sec.label}
                      </span>
                      <span aria-hidden="true" className="hidden sm:block flex-1 h-px" style={{
                        background: `linear-gradient(to right, ${sec.color}40, transparent)`,
                        minWidth: '24px',
                        marginLeft: '4px',
                      }} />
                    </button>
                    {sec.show && renderContent(sectionMap[sec.key], sec.color)}
                  </div>
                )
              })}
            </div>
          )
        }

        // Fallback: ancien format sans sections
        return (
          <div className="mt-3 pt-2" style={{ borderTop: '1px solid rgba(184,150,46,0.3)' }}>
            <button
              className="verse-section-btn flex items-center gap-1.5 w-full text-left"
              style={{
                padding: '6px 10px',
                cursor: 'pointer',
                background: 'none',
                border: 'none',
                borderRadius: '6px',
              }}
              onClick={() => setShowExplanation(!showExplanation)}
            >
              <span className={`smooth-chevron${showExplanation ? ' is-open' : ''}`} style={{ color: '#B8962E', fontSize: '10px' }}>▸</span>
              <span aria-hidden="true" style={{ color: '#B8962E', fontSize: '10px', opacity: 0.7 }}>✦</span>
              <span style={{ fontSize: '10px', fontWeight: 600, color: '#3D3228', letterSpacing: '0.08em', textTransform: 'uppercase' as const }}>
                Démarche de la traduction
              </span>
            </button>
            {showExplanation && (
              <div className="section-unfold" style={{
                marginTop: '6px',
                padding: '12px 18px',
                borderLeft: '4px solid rgba(184,150,46,0.6)',
                borderRadius: '0 10px 10px 0',
                background: 'rgba(184,150,46,0.06)',
                fontSize: '12.5px',
                lineHeight: 1.85,
                color: '#5A4E42',
                boxShadow: '0 1px 3px rgba(184,150,46,0.05)',
              }}>
                {text
                  .split(/(?<=\.)\s+/)
                  .filter((s: string) => s.trim())
                  .map((sentence: string, i: number) => {
                    const chunks = sentence.split(/(\*\*[^*]+\*\*)/g)
                    return (
                      <p key={i} style={{ marginBottom: '6px' }}>
                        {chunks.map((chunk: string, k: number) => {
                          if (chunk.startsWith('**') && chunk.endsWith('**')) {
                            return <span key={k} style={{ color: '#B8962E', fontWeight: 700 }}>{chunk.slice(2, -2)}</span>
                          }
                          return <span key={k}>{chunk}</span>
                        })}
                      </p>
                    )
                  })}
              </div>
            )}
          </div>
        )
      })()}

      {/* Translations */}
      {(analysis?.translation_arab || analysis?.full_translation) && (
        <div data-tour-translations="1" className="mt-3 pt-3" style={{ borderTop: '1px solid rgba(184,150,46,0.3)' }}>
          {/* Traduction classique (Hamidullah) */}
          {analysis?.full_translation && analysis?.translation_arab && (
            <div className="text-center">
              <span className="uppercase block mb-1" style={{ fontSize: '10px', letterSpacing: '0.12em' }}>
                <span aria-hidden="true" style={{ color: '#9A8E82', marginRight: '5px', opacity: 0.85 }}>✦</span>
                <span style={{ color: '#6B5E52', fontWeight: 600 }}>Traduction courante</span>
                <span style={{ color: '#9A8E82' }}> · Hamidullah</span>
              </span>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '18px', fontWeight: 400, color: '#6B5E52', fontStyle: 'italic' }}>
                {analysis.full_translation}
              </p>
            </div>
          )}
          {/* Mini-ornement ✦ entre les deux traductions — sépare visuellement les deux propositions */}
          {analysis?.full_translation && analysis?.translation_arab && (
            <div
              aria-hidden="true"
              className="flex items-center justify-center gap-2.5 my-2 mx-auto"
              style={{ maxWidth: '100px' }}
            >
              <div className="flex-1 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(184,150,46,0.4))' }} />
              <span style={{ color: '#B8962E', fontSize: '9px', lineHeight: 1, opacity: 0.85 }}>✦</span>
              <div className="flex-1 h-px" style={{ background: 'linear-gradient(to left, transparent, rgba(184,150,46,0.4))' }} />
            </div>
          )}
          {/* Arab — notre traduction */}
          <div className="text-center">
            <span className="uppercase block mb-1" style={{ fontSize: '10px', letterSpacing: '0.12em' }}>
              <span aria-hidden="true" style={{ color: '#B8962E', marginRight: '5px', opacity: 0.85 }}>✦</span>
              <span style={{ color: '#B8962E', fontWeight: 600 }}>Arab</span>
              <span style={{ color: '#6B5E52' }}> · Une traduction éloquente</span>
            </span>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '18px', fontWeight: 600, color: '#1A1410' }}>
              {analysis.translation_arab}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
