'use client'

import React, { useState, useEffect, useRef } from 'react'
import { cn, cleanArabicText } from '@/lib/utils'
import type { JobProgress } from './SurahView'

interface Verse {
  id: number
  surah_id: number
  verse_num: number
  arabic_text: string
  verification_done?: boolean
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
  // Particule absorbée par un verbe (ʿalā après « endurer ») : `fr` reste le mot de la traduction qui la porte (outils,
  // surlignage), `litteral` est son mot propre (« sur »), montré dans la bande et en tête de sa carte (2026-10-12).
  litteral?: string
}

interface VerseAnalysis {
  segments: Segment[]
  full_translation?: string
  translation_arab?: string
  translation_explanation?: string
  summary_short?: string
  summary_long?: string
  surah_conclusion?: string
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
  // Toggles d'affichage par verset (override local du global)
  const [verseHideArabic, setVerseHideArabic] = useState(false)
  const [verseHidePhon, setVerseHidePhon] = useState(false)
  const [verseHideSections, setVerseHideSections] = useState(false)
  // Résumé court : par défaut entièrement visible, bouton "Réduire" pour le replier après lecture
  const [resumeExpanded, setResumeExpanded] = useState(true)
  // Note contextuelle (ancienne intro MACRO/MICRO/ITALIQUE) : repliée par défaut
  const [noteExpanded, setNoteExpanded] = useState(false)
  // Segment actif — highlight bidirectionnel entre le rendu segmenté et la trad française éloquente.
  // Identifié par son index dans segments[] (unique) : seul le segment cliqué est en surbrillance,
  // et seule l'occurrence correspondante dans translation_arab est soulignée (basée sur le compte
  // d'occurrences du même fr avant cet index dans segments[]).
  const [activeSegmentIdx, setActiveSegmentIdx] = useState<number | null>(null)
  const segments = analysis?.segments

  // Résumé court (3-4 phrases) — nouveau champ dédié
  const summaryShort = (analysis?.summary_short || '').trim()
  // Note contextuelle longue (ancien MACRO/MICRO/ITALIQUE) — nouveau champ dédié
  const summaryLong = (analysis?.summary_long || '').trim()

  // Fallback rétrocompatible : si summary_short est vide mais qu'une vieille intro
  // est encore dans §DEMARCHE§ (versets pas encore migrés), l'extraire pour l'afficher.
  let demarcheIntro = summaryLong
  if (!demarcheIntro) {
    const explText = analysis?.translation_explanation || ''
    if (explText.includes('§DEMARCHE§')) {
      const parts = explText.split(/§(DEMARCHE|JUSTIFICATION|CRITIQUE|FINALITE)§/)
      for (let i = 0; i < parts.length; i++) {
        if (parts[i] === 'DEMARCHE') {
          const dem = (parts[i + 1] || '').trim()
          let firstMark = dem.indexOf('\n\n**')
          if (firstMark < 0) firstMark = dem.indexOf(' **')
          if (firstMark > 0) demarcheIntro = dem.substring(0, firstMark).trim()
        }
      }
    }
  }

  return (
    <div id={`verse-${verse.surah_id}-${verse.verse_num}`} data-tour-verse-num={verse.verse_num} className={`verse-card rounded-lg p-5${verseHideArabic ? ' verse-hide-arabic' : ''}${verseHidePhon ? ' verse-hide-phon' : ''}${verseHideSections ? ' verse-hide-sections' : ''}`} style={{ background: '#FFFFFF', border: '1px solid rgba(184,150,46,0.3)', boxShadow: '0 2px 12px rgba(184,150,46,0.12)', marginBottom: '16px', scrollMarginTop: '70px' }}>
      {/* Verse header */}
      <div className="flex items-center justify-between mb-4 gap-2">
        <span className="verse-header-label" style={{ color: '#3D3228', fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, letterSpacing: '0.05em', whiteSpace: 'nowrap' }}>
          <span aria-hidden="true" style={{ color: '#B8962E', fontSize: '12px', marginRight: '6px', opacity: 0.85 }}>✦</span>
          Sourate {verse.surah_id}, Signe {verse.verse_num}
          {verse.verification_done && (
            <span
              aria-label="Vérifié — prêt pour prod"
              title="Verset vérifié (cohérence + proof_ctx + relecture francophone) — prêt pour prod"
              style={{
                color: '#B8962E',
                fontSize: '11px',
                marginLeft: '8px',
                opacity: 1,
                fontWeight: 700,
              }}
            >
              ★
            </span>
          )}
        </span>

        {/* Toggles d'affichage par verset — visibles seulement si analysé */}
        {analysis && (
          <div data-tour-verse-toggles={verse.verse_num === 2 ? '1' : undefined} className="flex items-center gap-1 sm:gap-1.5 flex-shrink-0" aria-label="Afficher / cacher pour ce verset">
            <VerseToggle label="Arabe" active={!verseHideArabic} onToggle={() => setVerseHideArabic(v => !v)} />
            <VerseToggle label="Phon" active={!verseHidePhon} onToggle={() => setVerseHidePhon(v => !v)} />
            <VerseToggle label="Sections" active={!verseHideSections} onToggle={() => setVerseHideSections(v => !v)} />
          </div>
        )}
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

      {/* Helper inline pour rendre les paragraphes avec **bold** et *italic* */}
      {(() => {
        const renderParagraphs = (text: string) => {
          const paragraphs = text.split('\n\n').filter(s => s.trim())
          return paragraphs.map((para, i) => {
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
          })
        }

        return (
          <>
            {/* Résumé court — affiché par défaut, repliable */}
            {summaryShort && (
              <div
                data-tour-summary="1"
                className="resume-box"
                style={{
                  margin: '0 0 12px 0',
                  background: 'rgba(184,150,46,0.13)',
                  border: '1px solid rgba(184,150,46,0.32)',
                  borderLeft: '5px solid rgba(184,150,46,0.85)',
                  borderRadius: '0 10px 10px 0',
                  color: '#1A1410',
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 500,
                  boxShadow: '0 2px 6px rgba(120,90,30,0.10), inset 0 1px 0 rgba(255,255,255,0.4)',
                }}
              >
                <div
                  className="italic uppercase resume-label"
                  style={{
                    letterSpacing: '0.16em',
                    color: '#8A7428',
                    fontWeight: 700,
                    fontFamily: "'Cormorant Garamond', serif",
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                  }}
                >
                  <span aria-hidden="true">✦</span>
                  Résumé
                </div>
                <div className={`resume-content${resumeExpanded ? '' : ' is-collapsed'}`}>
                  {renderParagraphs(summaryShort)}
                </div>
                <button
                  type="button"
                  onClick={() => setResumeExpanded(e => !e)}
                  className="resume-toggle-btn"
                  aria-expanded={resumeExpanded}
                >
                  {resumeExpanded ? 'Réduire ↑' : 'Voir le résumé ↓'}
                </button>
              </div>
            )}

            {/* Note contextuelle longue — repliée par défaut */}
            {demarcheIntro && (
              <div
                data-tour-note="1"
                className="note-box"
                style={{
                  margin: '0 0 14px 0',
                  background: 'rgba(180,165,120,0.10)',
                  border: '1px solid rgba(180,165,120,0.30)',
                  borderLeft: '4px solid rgba(180,165,120,0.65)',
                  borderRadius: '0 10px 10px 0',
                  color: '#1A1410',
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 500,
                  boxShadow: '0 1px 4px rgba(120,90,30,0.06), inset 0 1px 0 rgba(255,255,255,0.3)',
                }}
              >
                <button
                  type="button"
                  onClick={() => setNoteExpanded(e => !e)}
                  aria-expanded={noteExpanded}
                  className="note-toggle-header"
                  style={{
                    width: '100%',
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '8px',
                    padding: '8px 14px',
                    textAlign: 'left',
                    color: '#7A6A38',
                    fontFamily: "'Cormorant Garamond', serif",
                    fontWeight: 700,
                    fontSize: '12px',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                  }}
                >
                  <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <span aria-hidden="true" style={{ color: '#A8902E', fontSize: '11px' }}>✦</span>
                    Note contextuelle
                  </span>
                  <span aria-hidden="true" style={{ fontSize: '11px', opacity: 0.85, transition: 'transform 0.2s ease', transform: noteExpanded ? 'rotate(180deg)' : 'rotate(0deg)' }}>▾</span>
                </button>
                {noteExpanded && (
                  <div style={{ padding: '0 14px 12px 14px', borderTop: '1px dashed rgba(180,165,120,0.30)' }}>
                    {renderParagraphs(demarcheIntro)}
                  </div>
                )}
              </div>
            )}
          </>
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
        <div className="wf-words-grid mt-4 pt-4" style={{ borderTop: '1px solid rgba(184,150,46,0.3)' }}>
          <div className="flex flex-wrap gap-x-4 gap-y-2 justify-center items-end">
            {segments.map((seg, i) => {
              const isKey = !seg.is_particle && seg.word_key
              const isActive = activeWordKey !== null && activeWordKey === `${seg.word_key}:${i}`
              const isSegHighlighted = activeSegmentIdx !== null && activeSegmentIdx === i

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
                      setActiveSegmentIdx(prev => prev === i ? null : i)
                    }}
                  >
                    <span className="wf-phon italic text-center" style={{ fontSize: '11px', color: isActive || isSegHighlighted ? '#B8962E' : '#6B5E52', lineHeight: 1.2, marginBottom: '2px' }}>
                      {seg.phon}
                    </span>
                    <span
                      className="text-center"
                      style={{
                        color: isActive || isSegHighlighted ? '#B8962E' : '#1A1410',
                        fontSize: '16px',
                        fontWeight: 600,
                        whiteSpace: 'nowrap',
                        paddingBottom: '4px',
                        borderBottom: isActive || isSegHighlighted ? '3px solid #B8962E' : '2px solid rgba(184,150,46,0.6)',
                        transition: 'color 0.2s ease, border-color 0.2s ease',
                      }}
                    >
                      {pillLabel}
                    </span>
                  </div>
                )
              }

              return (
                <div
                  key={i}
                  className="flex flex-col items-center cursor-pointer"
                  style={{ padding: '2px 2px' }}
                  onClick={() => setActiveSegmentIdx(prev => prev === i ? null : i)}
                >
                  <span className="wf-phon italic text-center" style={{ fontSize: '11px', color: isSegHighlighted ? '#B8962E' : '#6B5E52', lineHeight: 1.2, marginBottom: '2px' }}>
                    {seg.phon}
                  </span>
                  <span
                    className="text-center"
                    style={{
                      color: isSegHighlighted ? '#B8962E' : '#6B5E52',
                      fontSize: '14px',
                      whiteSpace: 'nowrap',
                      paddingBottom: '6px',
                      borderBottom: isSegHighlighted ? '2px solid #B8962E' : 'none',
                      transition: 'color 0.2s ease, border-color 0.2s ease',
                    }}
                  >
                    {seg.litteral || seg.fr}
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
          // Strip §DEMARCHE§ intro (already extracted to summary_long) — keep only **word** paragraphs.
          // Cas 1 : déjà migré → dem commence directement par '**' (rien à stripper).
          // Cas 2 : legacy non migré → il y a une intro avant le premier **word**, on la coupe.
          if (sectionMap['DEMARCHE']) {
            const dem = sectionMap['DEMARCHE']
            if (!dem.startsWith('**')) {
              // Legacy : il y a une intro à stripper
              const firstMark = dem.indexOf('\n\n**')
              if (firstMark > 0) {
                sectionMap['DEMARCHE'] = dem.substring(firstMark).trim()
              } else {
                // Pas de paragraphe **mot** : rien à afficher
                sectionMap['DEMARCHE'] = ''
              }
            }
            // Sinon (cas 1, migré) : on garde dem tel quel
          }

          const renderChunk = (text: string, accentColor: string, baseKey: string) => {
            // Split par deux motifs :
            //  1) *italique*    → phon arabe en §DEMARCHE§ (*wa-*, *mādhā*), ou sens
            //                     écrits en italique dans §JUSTIFICATION§/§CRITIQUE§ (rare)
            //  2) « citation »  → mots/sens/phrases cités
            // Rendu — la couleur est celle de la section (accentColor), pour cohérence
            // avec les titres en gras :
            //   · §DEMARCHE§       → or   #B8962E (phon en jaune)
            //   · §JUSTIFICATION§  → teal #1A5F5F (sens retenu / citations)
            //   · §CRITIQUE§       → brun #8B4513 (citations Notre/Hamidullah)
            const parts = text.split(/(\*[^*]+\*|«[^»]+»)/g)
            return parts.map((part: string, i: number) => {
              if (part.startsWith('*') && part.endsWith('*') && !part.startsWith('**')) {
                return <span key={baseKey + '-i' + i} style={{ fontStyle: 'italic', color: accentColor, fontWeight: 500, opacity: 0.9 }}>{part.slice(1, -1)}</span>
              }
              if (part.startsWith('«') && part.endsWith('»')) {
                return <span key={baseKey + '-q' + i} style={{ fontStyle: 'italic', color: accentColor, fontWeight: 600 }}>{part}</span>
              }
              return <span key={baseKey + '-t' + i}>{part}</span>
            })
          }

          // Démarche découpée (forme du 2026-10-11) : un bloc par mot, avec en tête « **phon** (fr) »,
          // puis « Nature : a · b », « Découpage : na · [ʿ] · [b] · u · [d] · u » (crochets = lettre de la
          // racine), des lignes « - morceau — explication » et une clôture « Ce que cela donne : … ».
          // Un paragraphe sans ces lignes garde l'affichage en texte (anciens versets).
          const DEM_ROOT = '#1A5F5F'
          const DEM_ADD = '#8A6D1F'
          const isStructured = (p: string) => /\n(Nature|Découpage) :/.test('\n' + p)
          const demChip = (txt: string, root: boolean, key: string, small?: boolean) => (
            <span key={key} style={{ display: 'inline-block', padding: small ? '1px 9px' : '3px 11px', borderRadius: '8px', fontSize: small ? '12px' : '14px', fontWeight: 600, lineHeight: 1.6, color: root ? DEM_ROOT : DEM_ADD, background: root ? 'rgba(26,95,95,0.09)' : 'rgba(184,150,46,0.13)', border: `1px solid ${root ? 'rgba(26,95,95,0.45)' : 'rgba(184,150,46,0.5)'}` }}>{txt}</span>
          )
          const renderStructured = (paragraph: string, accentColor: string, j: number, used: Set<number>) => {
            const lines = paragraph.split('\n').map((l: string) => l.trim()).filter((l: string) => l)
            const head = lines[0].match(/^\*\*(.+?)\*\*\s*\((.+?)\)\s*(.*)$/)
            const phon = head ? head[1] : ''
            const fr = head ? head[2] : ''
            const tail = head ? head[3] : lines[0]
            let arabic = ''
            let litteral = ''
            if (segments && phon) {
              const idx = segments.findIndex((s, i) => !used.has(i) && s.phon === phon)
              if (idx >= 0) { used.add(idx); arabic = segments[idx].arabic || ''; litteral = segments[idx].litteral || '' }
            }
            const nature: string[] = []
            const pieces: { txt: string; root: boolean }[] = []
            const rows: { label: string; text: string }[] = []
            const closings: { label: string; text: string }[] = []
            const others: string[] = []
            for (const l of lines.slice(1)) {
              if (l.startsWith('Nature :')) { nature.push(...l.slice(8).split('·').map((x: string) => x.trim()).filter(Boolean)); continue }
              if (l.startsWith('Découpage :')) {
                for (const x of l.slice(11).split('·').map((y: string) => y.trim()).filter(Boolean)) { const m = x.match(/^\[(.+)\]$/); pieces.push({ txt: m ? m[1] : x, root: !!m }) }
                continue
              }
              const row = l.match(/^[-·]\s+(.+?)\s+—\s+(.*)$/)
              if (row) { rows.push({ label: row[1], text: row[2] }); continue }
              const clo = l.match(/^([^:«»]{2,60}) : (.*)$/)
              if (clo) closings.push({ label: clo[1], text: clo[2] }); else others.push(l)
            }
            return (
              <div key={j} style={{ background: '#FFFFFF', border: '1px solid rgba(184,150,46,0.3)', borderRadius: '12px', padding: '14px 18px', marginBottom: '14px', fontSize: '14px', lineHeight: 1.6, color: '#3D3228' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', flexWrap: 'wrap', marginBottom: '8px' }}>
                  {arabic && <span dir="rtl" className="font-arabic" style={{ fontSize: '26px', color: '#3D3228', lineHeight: 1.3 }}>{arabic}</span>}
                  <span style={{ fontStyle: 'italic', color: accentColor, fontWeight: 600, fontSize: '15px' }}>{phon}</span>
                  <span style={{ color: '#3D3228', fontWeight: 700, fontSize: '15px' }}>{litteral || fr}</span>
                  {tail && <span>{renderChunk(tail, accentColor, j + '-tail')}</span>}
                </div>
                {nature.length > 0 && (
                  <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '10px' }}>
                    {nature.map((n: string, i: number) => <span key={i} style={{ fontSize: '12.5px', padding: '2px 10px', borderRadius: '12px', background: 'rgba(184,150,46,0.07)', color: '#6B5B45', border: '1px solid rgba(184,150,46,0.3)', lineHeight: 1.6 }}>{n}</span>)}
                  </div>
                )}
                {pieces.length > 0 && (
                  <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', alignItems: 'center', marginBottom: '10px' }}>
                    {pieces.map((p, i) => demChip(p.txt, p.root, 'c' + i))}
                  </div>
                )}
                {rows.length > 0 && (
                  <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 76px) minmax(0, 1fr)', columnGap: '12px', rowGap: '5px', marginBottom: '10px' }}>
                    {rows.map((r, i) => (
                      <React.Fragment key={i}>
                        <span style={{ color: DEM_ADD, fontWeight: 600 }}>{r.label}</span>
                        <span>{renderChunk(r.text, accentColor, j + '-r' + i)}</span>
                      </React.Fragment>
                    ))}
                  </div>
                )}
                {closings.map((c, i) => (
                  <p key={'k' + i} style={{ margin: 0, paddingTop: '8px', borderTop: '1px solid rgba(184,150,46,0.25)' }}>
                    <span style={{ color: accentColor, fontWeight: 700 }}>{c.label} : </span>{renderChunk(c.text, accentColor, j + '-c' + i)}
                  </p>
                ))}
                {others.map((o: string, i: number) => <p key={'o' + i} style={{ margin: 0 }}>{renderChunk(o, accentColor, j + '-o' + i)}</p>)}
              </div>
            )
          }

          // Justification en cartes (forme du 2026-10-12) : « **fr** — pourquoi », « Sens retenu : X », puis une ligne par rendu
          // possible (« Retenu : », « Autre sens attesté : », « Choix de Hamidullah : », « Autre tournure : », « Sens absent de la racine : »),
          // chacune « : « rendu » — raison », puis « Hamidullah : … ». Un paragraphe sans ligne « Retenu : » garde l'affichage en texte.
          const isJustifStructured = (p: string) => /\nRetenu :/.test('\n' + p)
          const JKIND: Record<string, { bg: string; fg: string; bd: string }> = {
            'Retenu': { bg: 'rgba(26,95,95,0.09)', fg: '#1A5F5F', bd: 'rgba(26,95,95,0.45)' },
            'Autre sens attesté': { bg: 'rgba(184,150,46,0.13)', fg: '#8A6D1F', bd: 'rgba(184,150,46,0.5)' },
            'Choix de Hamidullah': { bg: 'rgba(139,69,19,0.09)', fg: '#8B4513', bd: 'rgba(139,69,19,0.4)' },
            'Autre tournure': { bg: 'rgba(90,78,66,0.07)', fg: '#5A4E42', bd: 'rgba(90,78,66,0.3)' },
            'Sens absent de la racine': { bg: 'rgba(90,78,66,0.07)', fg: '#5A4E42', bd: 'rgba(90,78,66,0.3)' },
          }
          const jChip = (txt: string, kind: string, key: string, small?: boolean) => {
            const c = JKIND[kind] || JKIND['Autre tournure']
            return <span key={key} style={{ display: 'inline-block', padding: small ? '1px 9px' : '2px 10px', borderRadius: '8px', fontSize: small ? '12px' : '13.5px', fontWeight: 600, lineHeight: 1.6, color: c.fg, background: c.bg, border: `1px solid ${c.bd}`, maxWidth: '100%' }}>{txt}</span>
          }
          const renderJustifStructured = (paragraph: string, accentColor: string, j: number, used: Set<number>) => {
            const lines = paragraph.split('\n').map((l: string) => l.trim()).filter((l: string) => l)
            const head = lines[0].match(/^\*\*(.+?)\*\*\s*—\s*(.*)$/)
            const fr = head ? head[1] : lines[0].replace(/\*\*/g, '')
            const why = head ? head[2] : ''
            let phon = ''
            if (segments) {
              const idx = segments.findIndex((s, i) => !used.has(i) && s.fr === fr)
              if (idx >= 0) { used.add(idx); phon = segments[idx].phon || '' }
            }
            let sens = ''
            const rows: { kind: string; cand: string; why: string }[] = []
            const foot: string[] = []
            for (const l of lines.slice(1)) {
              if (l.startsWith('Sens retenu :')) { sens = l.slice(13).trim(); continue }
              const m = l.match(/^(Retenu|Autre sens attesté|Choix de Hamidullah|Autre tournure|Sens absent de la racine) : (.*)$/)
              if (m) { const parts = m[2].split(' — '); rows.push({ kind: m[1], cand: parts[0].replace(/\.$/, ''), why: parts.slice(1).join(' — ') }); continue }
              foot.push(l)
            }
            return (
              <div key={j} style={{ background: '#FFFFFF', border: '1px solid rgba(26,95,95,0.25)', borderRadius: '12px', padding: '14px 18px', marginBottom: '14px', fontSize: '14px', lineHeight: 1.6, color: '#3D3228' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', flexWrap: 'wrap', marginBottom: '6px' }}>
                  <span style={{ color: accentColor, fontWeight: 700, fontSize: '15px' }}>{fr}</span>
                  {phon && <span style={{ fontStyle: 'italic', color: '#6B5B45', fontSize: '13.5px' }}>{phon}</span>}
                  {sens && <span style={{ fontSize: '12px', padding: '2px 10px', borderRadius: '12px', background: 'rgba(26,95,95,0.06)', color: '#1A5F5F', border: '1px solid rgba(26,95,95,0.3)', lineHeight: 1.6 }}>sens retenu : {sens}</span>}
                </div>
                {why && <p style={{ margin: '0 0 10px' }}>{renderChunk(why, accentColor, j + '-w')}</p>}
                {rows.length > 0 && (
                  <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 200px) minmax(0, 1fr)', columnGap: '12px', rowGap: '7px', marginBottom: '8px', alignItems: 'start' }}>
                    {rows.map((r, i) => (
                      <React.Fragment key={i}>
                        <span>{jChip(r.cand, r.kind, 'c' + i)}{r.kind === 'Retenu' && <span style={{ fontSize: '11px', color: '#8A8176', marginLeft: '6px' }}>retenu</span>}</span>
                        <span>{renderChunk(r.why, accentColor, j + '-r' + i)}</span>
                      </React.Fragment>
                    ))}
                  </div>
                )}
                {foot.map((f: string, i: number) => <p key={'f' + i} style={{ margin: 0, paddingTop: '8px', borderTop: '1px solid rgba(26,95,95,0.2)', fontSize: '13px', color: '#6B5B45' }}>{renderChunk(f, accentColor, j + '-f' + i)}</p>)}
              </div>
            )
          }

          // Critique en carte (forme du 2026-10-12) : les deux lignes « **Notre traduction :** » et « **Hamidullah :** »,
          // puis un paragraphe par écart « Écart : « mot de Hamidullah » / « le nôtre » — raison », et « Pour le reste : … ».
          const isCritiqueStructured = (paras: string[]) => paras.some((p: string) => p.startsWith('Écart :'))
          const HAM = { bg: 'rgba(139,69,19,0.09)', fg: '#8B4513', bd: 'rgba(139,69,19,0.4)' }
          const NOUS = { bg: 'rgba(26,95,95,0.09)', fg: '#1A5F5F', bd: 'rgba(26,95,95,0.45)' }
          const cChip = (txt: string, c: { bg: string; fg: string; bd: string }, key: string, small?: boolean) => (
            <span key={key} style={{ display: 'inline-block', padding: small ? '1px 9px' : '2px 10px', borderRadius: '8px', fontSize: small ? '12px' : '13.5px', fontWeight: 600, lineHeight: 1.6, color: c.fg, background: c.bg, border: `1px solid ${c.bd}`, maxWidth: '100%' }}>{txt}</span>
          )
          const renderCritiqueStructured = (paras: string[], accentColor: string) => {
            let nous = '', ham = ''
            const rows: { h: string; n: string; why: string }[] = []
            const foot: string[] = []
            const others: string[] = []
            for (const p of paras) {
              for (const l of p.split('\n').map((x: string) => x.trim()).filter((x: string) => x)) {
                const mn = l.match(/^\*\*Notre traduction :\*\*\s*(.*)$/); if (mn) { nous = mn[1]; continue }
                const mh = l.match(/^\*\*Hamidullah :\*\*\s*(.*)$/); if (mh) { ham = mh[1]; continue }
                const me = l.match(/^Écart : (.+?) \/ (.+?) — (.*)$/); if (me) { rows.push({ h: me[1], n: me[2], why: me[3] }); continue }
                if (l.startsWith('Pour le reste :')) { foot.push(l); continue }
                others.push(l)
              }
            }
            const strip = (s: string) => s.replace(/^«\s*/, '').replace(/\s*»$/, '')
            return (
              <div style={{ background: '#FFFFFF', border: '1px solid rgba(139,69,19,0.22)', borderRadius: '12px', padding: '14px 18px', fontSize: '14px', lineHeight: 1.6, color: '#3D3228' }}>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '10px', fontSize: '11px', color: '#6B5B45' }}>
                  {cChip('Hamidullah', HAM, 'lc-h', true)}{cChip('notre traduction', NOUS, 'lc-n', true)}
                  <span>les deux traductions en entier, puis une ligne par écart : son mot, le nôtre, et pourquoi</span>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 118px) minmax(0, 1fr)', columnGap: '12px', rowGap: '6px', marginBottom: '12px', alignItems: 'start' }}>
                  <span>{cChip('Hamidullah', HAM, 'h-h', true)}</span><span>{renderChunk(ham, accentColor, 'ham')}</span>
                  <span>{cChip('notre traduction', NOUS, 'h-n', true)}</span><span>{renderChunk(nous, accentColor, 'nous')}</span>
                </div>
                {rows.map((r, i) => (
                  <div key={i} style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 230px) minmax(0, 1fr)', columnGap: '12px', alignItems: 'start', paddingTop: '8px', marginBottom: '8px', borderTop: '1px solid rgba(139,69,19,0.18)' }}>
                    <span style={{ display: 'flex', flexDirection: 'column', gap: '4px', alignItems: 'flex-start' }}>{cChip(strip(r.h), HAM, 'rh' + i)}{cChip(strip(r.n), NOUS, 'rn' + i)}</span>
                    <span>{renderChunk(r.why, accentColor, 'rw' + i)}</span>
                  </div>
                ))}
                {others.map((o: string, i: number) => <p key={'o' + i} style={{ margin: '0 0 6px' }}>{renderChunk(o, accentColor, 'co' + i)}</p>)}
                {foot.map((f: string, i: number) => <p key={'f' + i} style={{ margin: 0, paddingTop: '8px', borderTop: '1px solid rgba(139,69,19,0.18)', fontSize: '13px', color: '#6B5B45' }}>{renderChunk(f, accentColor, 'cf' + i)}</p>)}
              </div>
            )
          }

          const renderContent = (content: string, accentColor: string) => {
            const paras = content.split('\n\n').filter((s: string) => s.trim())
            if (isCritiqueStructured(paras)) {
              return (
                <div className="section-unfold" style={{ padding: '12px 18px', borderLeft: `4px solid ${accentColor}`, borderRadius: '0 10px 10px 0', background: `${accentColor}0A`, fontSize: '12.5px', lineHeight: 1.85, color: '#5A4E42', marginTop: '6px', boxShadow: '0 1px 3px rgba(184,150,46,0.05)' }}>
                  {renderCritiqueStructured(paras, accentColor)}
                </div>
              )
            }
            const structured = paras.some((p: string) => isStructured(p))
            const structuredJ = paras.some((p: string) => isJustifStructured(p))
            const used = new Set<number>()
            return (
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
                {structured && (
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px', fontSize: '11px', color: '#6B5B45' }}>
                    {demChip('racine', true, 'lg-r')}
                    {demChip("ce qui s'ajoute", false, 'lg-a')}
                    <span>le sens est dans les lettres de la racine ; les voyelles et ce qui s'ajoute font la forme du mot, pas son sens</span>
                  </div>
                )}
                {structuredJ && (
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '8px', fontSize: '11px', color: '#6B5B45' }}>
                    {jChip('retenu', 'Retenu', 'lj-r', true)}
                    {jChip('autre sens attesté de la racine', 'Autre sens attesté', 'lj-a', true)}
                    {jChip('choix de Hamidullah', 'Choix de Hamidullah', 'lj-h', true)}
                    {jChip("autre tournure, ou sens que la racine n'a pas", 'Autre tournure', 'lj-t', true)}
                    <span>pour chaque mot : le rendu retenu, puis chaque autre rendu possible et pourquoi il est écarté</span>
                  </div>
                )}
                {paras.map((paragraph: string, j: number) => {
                  if (isJustifStructured(paragraph)) return renderJustifStructured(paragraph, accentColor, j, used)
                  if (isStructured(paragraph)) return renderStructured(paragraph, accentColor, j, used)
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
          }

          const sections = [
            { key: 'DEMARCHE', label: 'Démarche de la traduction', color: '#B8962E', show: showDemarche, toggle: () => setShowDemarche(!showDemarche) },
            { key: 'JUSTIFICATION', label: 'Justification du choix des mots', color: '#1A5F5F', show: showJustification, toggle: () => setShowJustification(!showJustification) },
            { key: 'CRITIQUE', label: 'Critique des traductions classiques', color: '#8B4513', show: showCritique, toggle: () => setShowCritique(!showCritique) },
          ]

          return (
            <div data-tour-sections="1" className="mt-3 pt-2" style={{ borderTop: '1px solid rgba(184,150,46,0.3)' }}>
              {/* Wrapper interne pour le trick grid-template-rows : permet à
                  l'animation de pliage de s'adapter à la hauteur RÉELLE du
                  contenu (au lieu de transitionner depuis un max-height
                  généreux qui crée un effet "rien... puis collapse rapide"). */}
              <div className="sections-inner">
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
                    {/* Wrapper TOUJOURS monté (avec is-closed quand caché) →
                        anime DANS LES DEUX SENS (déplier ET plier) avec blur
                        fade. Sinon le && unmounte la div instantanément et il
                        n'y a pas de transition au pliage. */}
                    <div
                      className={`section-fold-wrap${sec.show ? '' : ' is-closed'}`}
                      aria-hidden={!sec.show}
                    >
                      {renderContent(sectionMap[sec.key], sec.color)}
                    </div>
                  </div>
                )
              })}
              </div>
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
              {(() => {
                const trad = analysis.translation_arab || ''
                if (activeSegmentIdx === null || !segments) return trad
                const activeSeg = segments[activeSegmentIdx]
                if (!activeSeg || !activeSeg.fr) return trad
                // Pattern V24 négation : segment.fr = "pas X" (ordre arabe) mais trad française = "ne X pas".
                // Si fr commence par "pas ", chercher le mot après "pas" et matcher son occurrence entre "ne" et "pas".
                let searchFr = activeSeg.fr
                const negMatch = /^pas\s+(.+)$/.exec(activeSeg.fr)
                if (negMatch) searchFr = negMatch[1]
                // Compter les segments précédents dont le fr contient searchFr comme sous-chaîne.
                // Un fr court (ex: "associe") est sinon faussement compté comme 1ère occurrence alors
                // qu'un fr précédent plus long (ex: "on associe") contient déjà une occurrence de "associe"
                // dans la trad. On additionne toutes les sous-occurrences pour aligner sur ce que retourne le split.
                const targetOccurrence = segments.slice(0, activeSegmentIdx).reduce((count, s) => {
                  if (!s.fr) return count
                  if (s.fr === activeSeg.fr) return count + 1
                  return count + (s.fr.split(searchFr).length - 1)
                }, 0)
                const escaped = searchFr.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
                const parts = trad.split(new RegExp(`(${escaped})`, 'g'))
                // Mot partagé par deux segments voisins (kāna + verbe : « mentaient » / « mentaient ») : si l'occurrence visée n'existe pas dans la trad, surligner la dernière existante (2026-09-30).
                const totalOcc = parts.filter(p => p === searchFr).length
                const wantedOcc = totalOcc > 0 ? Math.min(targetOccurrence, totalOcc - 1) : targetOccurrence
                let seenCount = 0
                return parts.map((part, idx) => {
                  if (part === searchFr) {
                    const isTargetOcc = seenCount === wantedOcc
                    seenCount++
                    if (isTargetOcc) {
                      return <span key={idx} style={{ color: '#B8962E', borderBottom: '2px solid #B8962E', paddingBottom: '2px' }}>{part}</span>
                    }
                  }
                  return <React.Fragment key={idx}>{part}</React.Fragment>
                })
              })()}
            </p>
          </div>
        </div>
      )}

      {/* Encart Conclusion de sourate — même style que Résumé, uniquement sur le dernier verset qui a le champ rempli */}
      {analysis?.surah_conclusion && (
        <div
          className="resume-box"
          style={{
            margin: '18px 0 0 0',
            background: 'rgba(184,150,46,0.13)',
            border: '1px solid rgba(184,150,46,0.32)',
            borderLeft: '5px solid rgba(184,150,46,0.85)',
            borderRadius: '0 10px 10px 0',
            color: '#1A1410',
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 500,
            boxShadow: '0 2px 6px rgba(120,90,30,0.10), inset 0 1px 0 rgba(255,255,255,0.4)',
          }}
        >
          <div
            className="italic uppercase resume-label"
            style={{
              letterSpacing: '0.16em',
              color: '#8A7428',
              fontWeight: 700,
              fontFamily: "'Cormorant Garamond', serif",
              display: 'flex',
              alignItems: 'center',
              gap: '5px',
            }}
          >
            <span aria-hidden="true">✦</span>
            Conclusion de la sourate
          </div>
          <div
            className="resume-content"
            dangerouslySetInnerHTML={{
              __html: analysis.surah_conclusion
                .replace(/\*\*(.+?)\*\*/g, '<strong style="color:#8A7428;font-weight:700">$1</strong>')
                .replace(/\n\n/g, '</p><p style="margin-top:10px">')
                .replace(/^/, '<p>')
                .replace(/$/, '</p>'),
            }}
          />
        </div>
      )}
    </div>
  )
}

// Petit pill avec label + switch (style identique au popover global)
function VerseToggle({ label, active, onToggle }: { label: string; active: boolean; onToggle: () => void }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={active}
      title={`${active ? 'Cacher' : 'Afficher'} : ${label}`}
      className="verse-toggle inline-flex items-center gap-1 sm:gap-2"
      style={{
        background: 'transparent',
        border: '1px solid rgba(184,150,46,0.22)',
        borderRadius: '999px',
        cursor: 'pointer',
        fontFamily: "'Cormorant Garamond', serif",
        fontWeight: 500,
        color: active ? '#5A4E42' : '#9E9089',
        letterSpacing: '0.03em',
        transition: 'background 200ms ease, border-color 200ms ease, color 200ms ease',
      }}
    >
      <span style={{ whiteSpace: 'nowrap' }}>{label}</span>
      <span
        aria-hidden="true"
        style={{
          width: '24px',
          height: '14px',
          borderRadius: '7px',
          background: active ? 'linear-gradient(135deg, #C9A23A, #B8962E)' : 'rgba(184,150,46,0.20)',
          position: 'relative',
          flexShrink: 0,
          display: 'inline-block',
          transition: 'background 320ms cubic-bezier(0.16, 1, 0.3, 1)',
          boxShadow: active ? 'inset 0 1px 0 rgba(255,255,255,0.25)' : 'inset 0 1px 2px rgba(120,90,30,0.06)',
        }}
      >
        <span
          style={{
            position: 'absolute',
            top: '2px',
            left: '2px',
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            background: '#FFFFFF',
            transform: active ? 'translateX(10px)' : 'translateX(0)',
            transition: 'transform 380ms cubic-bezier(0.34, 1.4, 0.64, 1)',
            boxShadow: '0 1px 2px rgba(0,0,0,0.18)',
            willChange: 'transform',
          }}
        />
      </span>
    </button>
  )
}
