'use client'

import { useState, useCallback } from 'react'
import type { Word, Morpheme, Root } from '@/lib/db'
import { cn } from '@/lib/utils'
import { arabicToPhonetic, bwToPhonetic } from '@/lib/phonetics'
import { WORDS, type WordAnalysis } from '@/data/words-analysis'

// ── Mapping root_ascii (Buckwalter DB) → clé WORDS ───────────────────────────
const ROOT_TO_WORDS_KEY: Record<string, string> = {
  'ktb':  'kitab',
  'ryb':  'rayb',
  'Slw':  'salat',
  'Amn':  'iman',   '>mn': 'iman',
  'gyb':  'ghayb',
  'xlf':  'khalifa',
  'rbb':  'rabb',
  'hdy':  'huda',
  'wqy':  'muttaqin',
  'rzq':  'razaq',
  'nfq':  'yunfiq',
}

// ── Types ─────────────────────────────────────────────────────────────────────

interface MorphemeWithRoot extends Morpheme {
  root?: Root | null
}

interface RootOccurrence {
  verse_id: number; surah_id: number; verse_number: number
  text_uthmani: string | null; translation_fr: string | null
  surah_latin: string; surah_arabic: string
  morpheme_form: string; pos: string; lemma: string | null
  word_position: number
}

interface RootData {
  root: { id: number; root: string; root_ascii: string | null; meaning_fr: string | null; occurrence_count: number }
  occurrences: RootOccurrence[]
}

interface WordPanelProps {
  word:          Word | null
  morphemes:     MorphemeWithRoot[]
  loading?:      boolean
  /** Appelé quand l'utilisateur veut tester un sens (remplace le mot dans le verset) */
  onTestMeaning?: (wordId: number, testText: string) => void
}

// ── Couleurs POS ──────────────────────────────────────────────────────────────

const POS_COLORS: Record<string, string> = {
  V:    'bg-blue-100 text-blue-700 border-blue-200',
  N:    'bg-green-100 text-green-700 border-green-200',
  ADJ:  'bg-emerald-100 text-emerald-700 border-emerald-200',
  PRON: 'bg-purple-100 text-purple-700 border-purple-200',
  P:    'bg-orange-100 text-orange-700 border-orange-200',
  CONJ: 'bg-rose-100 text-rose-700 border-rose-200',
  DET:  'bg-yellow-100 text-yellow-700 border-yellow-200',
  REL:  'bg-indigo-100 text-indigo-700 border-indigo-200',
  ADV:  'bg-teal-100 text-teal-700 border-teal-200',
  PN:   'bg-pink-100 text-pink-700 border-pink-200',
  T:    'bg-gray-100 text-gray-600 border-gray-200',
  INL:  'bg-gray-100 text-gray-600 border-gray-200',
}

const POS_LABELS: Record<string, string> = {
  V: 'Verbe', N: 'Nom', ADJ: 'Adjectif', PRON: 'Pronom', P: 'Préposition',
  CONJ: 'Conjonction', DET: 'Déterminant', REL: 'Relatif', ADV: 'Adverbe',
  PN: 'Nom propre', T: 'Particule', INL: 'Lettres isolées',
}

function PosBadge({ pos }: { pos: string }) {
  const cls = POS_COLORS[pos] ?? 'bg-gray-100 text-gray-600 border-gray-200'
  return (
    <span className={`morph-badge border ${cls}`}>
      {POS_LABELS[pos] ?? pos}
    </span>
  )
}

// ── Dérive des "sens" depuis les données morphologiques ───────────────────────

interface Sense {
  status: 'retained' | 'possible' | 'excluded'
  label: string
  note: string
  phonetic: string
}

function deriveSenses(morphemes: MorphemeWithRoot[]): Sense[] {
  const senses: Sense[] = []

  for (const m of morphemes) {
    const root = m.root
    if (!root?.meaning_fr) continue

    const phonetic = m.lemma_ascii ? bwToPhonetic(m.lemma_ascii) : arabicToPhonetic(m.lemma ?? '')

    senses.push({
      status: 'retained',
      label: root.meaning_fr,
      phonetic,
      note: `${POS_LABELS[m.pos] ?? m.pos}${m.lemma ? ` — lemme ${m.lemma}` : ''}`,
    })

    // Dérivations alternatives selon POS
    if (m.pos === 'V') {
      senses.push({
        status: 'possible',
        label: `Participe actif de ${root.meaning_fr}`,
        phonetic,
        note: 'Forme participiale active (فَاعِل)',
      })
    } else if (m.pos === 'N') {
      senses.push({
        status: 'possible',
        label: `Lieu / instrument de ${root.meaning_fr}`,
        phonetic,
        note: 'Nom de lieu ou d\'instrument (مَفْعَل)',
      })
    }
  }

  // Si aucune racine connue, afficher une entrée neutre
  if (senses.length === 0 && morphemes.length > 0) {
    senses.push({
      status: 'excluded',
      label: '(Sens non répertorié)',
      phonetic: '',
      note: 'Particule, pronom ou connecteur sans racine lexicale',
    })
  }

  return senses
}

// ── Bloc occurrence ───────────────────────────────────────────────────────────

function OccurrenceRow({ occ }: { occ: RootOccurrence }) {
  const [expanded, setExpanded] = useState(false)
  const ref = `${occ.surah_latin} ${occ.verse_number}`

  return (
    <button
      className="w-full text-left p-2 rounded-lg hover:bg-parchment-100 transition-colors"
      onClick={() => setExpanded(e => !e)}
    >
      <div className="flex items-start justify-between gap-2">
        <span className="text-xs font-medium text-gold-700 shrink-0">{ref}</span>
        <span
          className="text-sm font-arabic text-gray-700 text-right leading-snug"
          dir="rtl"
          style={{ fontFamily: 'var(--font-arabic)' }}
        >
          {/* Met en valeur le morphème dans le verset */}
          {occ.morpheme_form}
        </span>
      </div>
      {expanded && occ.translation_fr && (
        <p className="text-xs text-gray-500 mt-1 leading-relaxed text-left">
          {occ.translation_fr.slice(0, 120)}{occ.translation_fr.length > 120 ? '…' : ''}
        </p>
      )}
    </button>
  )
}

// ── Composant principal ───────────────────────────────────────────────────────

export function WordPanel({ word, morphemes, loading, onTestMeaning }: WordPanelProps) {

  const [rootData, setRootData]         = useState<RootData | null>(null)
  const [loadingOcc, setLoadingOcc]     = useState(false)
  const [testedMeaning, setTestedMeaning] = useState<string | null>(null)
  const [activeTab, setActiveTab]       = useState<'sens'|'morph'|'occ'>('sens')

  // Reset si mot change
  const prevWordId = word?.id
  if (prevWordId !== word?.id) {
    setRootData(null)
    setTestedMeaning(null)
    setActiveTab('sens')
  }

  const loadOccurrences = useCallback(async (rootId: number) => {
    if (loadingOcc) return
    setLoadingOcc(true)
    try {
      const res = await fetch(`/api/root-occurrences/${rootId}`)
      if (res.ok) {
        const data: RootData = await res.json()
        setRootData(data)
      }
    } finally {
      setLoadingOcc(false)
    }
  }, [loadingOcc])

  // ── État vide ──
  if (!word) {
    return (
      <div className="side-panel flex flex-col items-center justify-center h-56 gap-3
                       text-center select-none">
        <span className="text-3xl opacity-20" style={{ fontFamily: 'var(--font-arabic)' }}>
          ا
        </span>
        <p className="text-sm text-gray-300">Cliquez sur un mot pour l&apos;analyser</p>
      </div>
    )
  }

  if (loading) {
    return (
      <div className="side-panel flex items-center justify-center h-32">
        <div className="text-sm text-gray-400 animate-pulse">Chargement…</div>
      </div>
    )
  }

  // Racine principale (premier morphème avec root)
  const mainRoot = morphemes.find(m => m.root)?.root ?? null
  const wordPhonetic = arabicToPhonetic(word.form)

  // Données sémantiques WORDS (prioritaires sur la DB)
  const wordsKey  = mainRoot?.root_ascii ? ROOT_TO_WORDS_KEY[mainRoot.root_ascii] ?? null : null
  const wordsData: WordAnalysis | null = wordsKey ? (WORDS[wordsKey] ?? null) : null

  // Senses depuis DB (fallback si pas dans WORDS)
  const senses = wordsData ? [] : deriveSenses(morphemes)
  const retainedSense = senses.find(s => s.status === 'retained')
  const altSenses     = senses.filter(s => s.status !== 'retained')

  const STATUS_ICON: Record<string, string> = {
    retained: '✦',
    possible: '◆',
    excluded: '✗',
  }
  const STATUS_COLOR: Record<string, string> = {
    retained: 'text-emerald-600',
    possible: 'text-blue-500',
    excluded: 'text-gray-400',
  }

  return (
    <div className="side-panel flex flex-col">

      {/* ── En-tête : mot + phonétique + racine ── */}
      <header className="px-5 pt-5 pb-4 border-b border-parchment-200">
        <div className="flex items-end gap-4 mb-3" dir="rtl">
          <span
            className="font-arabic text-5xl text-gray-800 leading-none"
            style={{ fontFamily: 'var(--font-arabic)' }}
          >
            {word.form}
          </span>
          <div className="flex flex-col gap-0.5 text-left" dir="ltr">
            <span className="text-base font-mono text-sky-600 tracking-wide">
              {wordPhonetic}
            </span>
            <span className="text-xs text-gray-400">position {word.position}</span>
          </div>
        </div>

        {/* Racine */}
        {mainRoot && (
          <button
            className="flex items-center gap-2 group"
            onClick={() => {
              if (!rootData) loadOccurrences(mainRoot.id)
              setActiveTab('occ')
            }}
          >
            <span className="text-xs text-gray-400">Racine</span>
            <span
              className="font-arabic text-xl text-gold-600 group-hover:text-gold-800
                         border-b border-dashed border-gold-300 leading-none"
              dir="rtl"
              style={{ fontFamily: 'var(--font-arabic)' }}
            >
              {mainRoot.root}
            </span>
            {mainRoot.root_ascii && (
              <span className="text-xs text-gray-400 font-mono">
                ({bwToPhonetic(mainRoot.root_ascii)})
              </span>
            )}
            <span className="text-xs text-gray-300 group-hover:text-gold-400 ml-auto">
              {mainRoot.occurrence_count} occ.
            </span>
          </button>
        )}
      </header>

      {/* ── Onglets ── */}
      <div className="flex border-b border-gray-100">
        {(['sens', 'morph', 'occ'] as const).map(tab => (
          <button
            key={tab}
            onClick={() => {
              setActiveTab(tab)
              if (tab === 'occ' && mainRoot && !rootData) loadOccurrences(mainRoot.id)
            }}
            className={cn(
              'flex-1 py-2 text-xs font-medium transition-colors',
              activeTab === tab
                ? 'text-gold-700 border-b-2 border-gold-500 bg-gold-50'
                : 'text-gray-400 hover:text-gray-600',
            )}
          >
            {tab === 'sens' && 'Sens'}
            {tab === 'morph' && 'Morphologie'}
            {tab === 'occ' && (
              <>Occurrences
                {mainRoot && (
                  <span className="ml-1 text-[9px] text-gray-400">
                    ({mainRoot.occurrence_count})
                  </span>
                )}
              </>
            )}
          </button>
        ))}
      </div>

      {/* ── Onglet SENS ── */}
      {activeTab === 'sens' && (
        <div className="flex-1 overflow-y-auto">

          {/* ── Mode WORDS (données manuelles enrichies) ── */}
          {wordsData ? (
            <div className="px-4 pt-4 space-y-3">

              {/* Sens retenu */}
              <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-lg">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <div className="flex items-center gap-1.5">
                    <span className="text-emerald-500 text-sm font-bold">✦</span>
                    <span className="text-sm font-semibold text-emerald-700">Sens retenu</span>
                  </div>
                  {testedMeaning && (
                    <button
                      className="text-xs text-emerald-600 hover:text-emerald-800 flex items-center gap-1"
                      onClick={() => {
                        setTestedMeaning(null)
                        onTestMeaning?.(word.id, word.form)
                      }}
                    >
                      ↺ Rétablir
                    </button>
                  )}
                </div>
                <p className="text-sm text-emerald-800 font-medium">{wordsData.retenu_display}</p>
                <p className="text-xs text-emerald-600 mt-1 italic">{wordsData.root_meaning}</p>
              </div>

              {/* Sens alternatifs */}
              <div className="space-y-2">
                <p className="text-[10px] uppercase tracking-widest text-gray-400 font-medium">
                  Analyse des sens ({wordsData.meanings.length})
                </p>
                {wordsData.meanings.map((m, i) => {
                  const stIcon  = m.st === 'ok' ? '✦' : m.st === 'maybe' ? '◆' : '✗'
                  const stColor = m.st === 'ok' ? 'text-emerald-500' : m.st === 'maybe' ? 'text-blue-400' : 'text-gray-300'
                  return (
                    <div
                      key={i}
                      className="flex items-start gap-2 p-2.5 rounded-lg border border-gray-100
                                 hover:border-gray-200 hover:bg-gray-50 transition-colors"
                    >
                      <span className={cn('text-sm mt-0.5 shrink-0', stColor)}>{stIcon}</span>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-gray-700">{m.s}</p>
                        <p className="text-xs text-gray-400 font-mono mt-0.5">{m.phon}</p>
                        <p className="text-xs text-gray-500 mt-0.5">{m.tr}</p>
                        <p className="text-[10px] text-gray-400 mt-1 italic">{m.ctx}</p>
                      </div>
                      {m.st !== 'no' && (
                        <button
                          className="shrink-0 text-[10px] text-blue-400 hover:text-blue-600
                                     border border-blue-200 rounded px-1.5 py-0.5 transition-colors"
                          onClick={() => {
                            setTestedMeaning(m.s)
                            onTestMeaning?.(word.id, m.s)
                          }}
                          title="Tester ce sens dans la traduction"
                        >
                          ▶ Tester
                        </button>
                      )}
                    </div>
                  )
                })}
              </div>

              {/* Cohérence */}
              {wordsData.coh && (
                <div className="p-3 bg-parchment-50 border border-parchment-200 rounded-lg">
                  <p className="text-[10px] uppercase tracking-widest text-gray-400 font-medium mb-1">
                    Note de cohérence
                  </p>
                  <p className="text-xs text-gray-600 leading-relaxed">{wordsData.coh}</p>
                </div>
              )}

              {/* Phrases quotidiennes */}
              {wordsData.daily.length > 0 && (
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-gray-400 font-medium mb-2">
                    Expressions courantes
                  </p>
                  <div className="space-y-2">
                    {wordsData.daily.map((d, i) => (
                      <div key={i} className="p-2.5 bg-sky-50 border border-sky-100 rounded-lg">
                        <div className="flex items-baseline justify-between gap-2 mb-1">
                          <span
                            className="text-lg text-gray-700 leading-none"
                            dir="rtl"
                            style={{ fontFamily: 'var(--font-arabic)' }}
                          >
                            {d.ar}
                          </span>
                          <span className="text-xs text-sky-500 font-mono shrink-0">{d.phon}</span>
                        </div>
                        <p className="text-xs text-gray-500">{d.fr}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>
          ) : (
            /* ── Mode DB (fallback morphologique) ── */
            <>
              {retainedSense && (
                <div className="mx-4 mt-4 p-3 bg-emerald-50 border border-emerald-200 rounded-lg">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <div className="flex items-center gap-1.5">
                      <span className="text-emerald-500 text-sm font-bold">✦</span>
                      <span className="text-sm font-semibold text-emerald-700">Sens retenu</span>
                    </div>
                    {testedMeaning && (
                      <button
                        className="text-xs text-emerald-600 hover:text-emerald-800 flex items-center gap-1"
                        onClick={() => {
                          setTestedMeaning(null)
                          onTestMeaning?.(word.id, word.form)
                        }}
                      >
                        ↺ Rétablir
                      </button>
                    )}
                  </div>
                  <p className="text-sm text-emerald-800 font-medium">{retainedSense.label}</p>
                  {retainedSense.phonetic && (
                    <p className="text-xs text-emerald-500 font-mono mt-0.5">{retainedSense.phonetic}</p>
                  )}
                  <p className="text-xs text-emerald-600 mt-1">{retainedSense.note}</p>
                </div>
              )}

              {altSenses.length > 0 && (
                <div className="mx-4 mt-3 space-y-2">
                  <p className="text-[10px] uppercase tracking-widest text-gray-400 font-medium">
                    Autres sens
                  </p>
                  {altSenses.map((s, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2 p-2.5 rounded-lg border border-gray-100
                                 hover:border-gray-200 hover:bg-gray-50 transition-colors"
                    >
                      <span className={cn('text-sm mt-0.5 shrink-0', STATUS_COLOR[s.status])}>
                        {STATUS_ICON[s.status]}
                      </span>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-gray-700">{s.label}</p>
                        {s.phonetic && (
                          <p className="text-xs text-gray-400 font-mono">{s.phonetic}</p>
                        )}
                        <p className="text-xs text-gray-400 mt-0.5">{s.note}</p>
                      </div>
                      {s.status !== 'excluded' && (
                        <button
                          className="shrink-0 text-[10px] text-blue-400 hover:text-blue-600
                                     border border-blue-200 rounded px-1.5 py-0.5 transition-colors"
                          onClick={() => {
                            setTestedMeaning(s.label)
                            onTestMeaning?.(word.id, s.label)
                          }}
                          title="Tester ce sens dans la traduction"
                        >
                          ▶ Tester
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {senses.length === 0 && (
                <p className="text-sm text-gray-300 text-center py-6">
                  Aucune information sémantique disponible.
                </p>
              )}
            </>
          )}

          <div className="h-4" />
        </div>
      )}

      {/* ── Onglet MORPHOLOGIE ── */}
      {activeTab === 'morph' && (
        <div className="flex-1 overflow-y-auto divide-y divide-gray-50">
          {morphemes.length === 0 && (
            <p className="text-sm text-gray-300 text-center py-6">Aucun morphème.</p>
          )}
          {morphemes.map((m, i) => {
            const features = m.features ? (() => { try { return JSON.parse(m.features!) } catch { return {} } })() : {}
            return (
              <div key={m.id} className="px-5 py-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-300 tabular-nums w-4">{i + 1}</span>
                    <span
                      className="text-xl text-gray-800"
                      dir="rtl"
                      style={{ fontFamily: 'var(--font-arabic)' }}
                    >
                      {m.form}
                    </span>
                    <span className="text-xs text-gray-400 font-mono">
                      {arabicToPhonetic(m.form)}
                    </span>
                  </div>
                  <PosBadge pos={m.pos} />
                </div>

                {m.root && (
                  <div className="flex items-center gap-2 mb-1.5 text-sm">
                    <span className="text-gray-400 text-xs">Racine</span>
                    <span
                      className="text-gold-600 text-base"
                      dir="rtl"
                      style={{ fontFamily: 'var(--font-arabic)' }}
                    >
                      {m.root.root}
                    </span>
                    {m.root.meaning_fr && (
                      <span className="text-gray-500 text-xs italic">{m.root.meaning_fr}</span>
                    )}
                  </div>
                )}

                {m.lemma && (
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-gray-400 text-xs">Lemme</span>
                    <span dir="rtl" style={{ fontFamily: 'var(--font-arabic)' }}
                          className="text-gray-700 text-sm">
                      {m.lemma}
                    </span>
                    {m.lemma_ascii && (
                      <span className="text-gray-400 text-xs font-mono">
                        {bwToPhonetic(m.lemma_ascii)}
                      </span>
                    )}
                  </div>
                )}

                {/* Traits */}
                <div className="grid grid-cols-2 gap-x-4 ml-4 mt-1">
                  {[
                    ['Aspect',  m.aspect],
                    ['Voix',    m.voice],
                    ['Mode',    m.mood],
                    ['Forme',   m.verb_form],
                    ['Genre',   m.gender],
                    ['Nombre',  m.number_gram],
                    ['Personne',m.person],
                    ['Cas',     m.case_gram],
                    ['État',    m.state],
                  ].filter(([, v]) => v).map(([label, value]) => (
                    <div key={label as string} className="flex justify-between text-xs py-0.5">
                      <span className="text-gray-400">{label}</span>
                      <span className="text-gray-700 font-medium">{value}</span>
                    </div>
                  ))}
                  {Object.entries(features)
                    .filter(([k]) => !['ASP','VOX','MOOD','SP','GEN','NUM','CASE','STATE','FORM'].includes(k))
                    .map(([k, v]) => (
                      <div key={k} className="flex justify-between text-xs py-0.5">
                        <span className="text-gray-400">{k}</span>
                        <span className="text-gray-700 font-medium">{String(v)}</span>
                      </div>
                    ))}
                </div>
              </div>
            )
          })}
        </div>
      )}

      {/* ── Onglet OCCURRENCES ── */}
      {activeTab === 'occ' && (
        <div className="flex-1 overflow-y-auto">

          {/* Occurrences WORDS (triades contextuelles) */}
          {wordsData && wordsData.occs.length > 0 && (
            <div className="px-3 pt-3">
              <p className="text-[10px] uppercase tracking-widest text-gray-400 px-2 mb-2 font-medium">
                Contextes clés ({wordsData.occs.length} versets)
              </p>
              <div className="space-y-3">
                {wordsData.occs.map((occ, i) => (
                  <div key={i} className="rounded-lg border border-parchment-200 overflow-hidden">
                    {/* Verset avant */}
                    <div className="px-3 py-1.5 bg-gray-50 border-b border-parchment-100">
                      <span className="text-[9px] text-gray-300 font-mono mr-1">{occ.before.ref}</span>
                      <span className="text-xs text-gray-400">{occ.before.tr}</span>
                    </div>
                    {/* Verset principal */}
                    <div className="px-3 py-2 bg-white">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <span className="text-xs font-medium text-gold-600 shrink-0">{occ.main.ref}</span>
                        <span
                          className="text-sm font-arabic text-gray-800 text-right leading-relaxed"
                          dir="rtl"
                          style={{ fontFamily: 'var(--font-arabic)' }}
                        >
                          {occ.main.ar}
                        </span>
                      </div>
                      <p className="text-xs text-sky-500 font-mono">{occ.main.phon}</p>
                      <p className="text-xs text-gray-600 mt-0.5 font-medium">{occ.main.tr}</p>
                    </div>
                    {/* Verset après */}
                    <div className="px-3 py-1.5 bg-gray-50 border-t border-parchment-100">
                      <span className="text-[9px] text-gray-300 font-mono mr-1">{occ.after.ref}</span>
                      <span className="text-xs text-gray-400">{occ.after.tr}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="h-3" />
            </div>
          )}

          {/* Occurrences DB */}
          {loadingOcc && (
            <div className="flex items-center justify-center py-8">
              <span className="text-sm text-gray-400 animate-pulse">Chargement des occurrences…</span>
            </div>
          )}

          {!loadingOcc && !mainRoot && (
            <p className="text-sm text-gray-300 text-center py-6">
              Pas de racine — particule ou pronom.
            </p>
          )}

          {!loadingOcc && mainRoot && !rootData && (
            <div className="flex flex-col items-center gap-3 py-8">
              <p className="text-sm text-gray-400">
                {mainRoot.occurrence_count} occurrence{mainRoot.occurrence_count > 1 ? 's' : ''} dans le Coran
              </p>
              <button
                className="text-sm text-gold-600 hover:text-gold-800 border border-gold-300
                           hover:border-gold-500 rounded-lg px-4 py-2 transition-colors"
                onClick={() => loadOccurrences(mainRoot.id)}
              >
                Charger toutes les occurrences
              </button>
            </div>
          )}

          {!loadingOcc && rootData && (
            <div className="px-3 py-2">
              <p className="text-[10px] uppercase tracking-widest text-gray-400 px-2 mb-2 font-medium">
                {rootData.occurrences.length} premières occurrences sur {rootData.root.occurrence_count}
              </p>
              <div className="space-y-1">
                {rootData.occurrences.map((occ, i) => (
                  <OccurrenceRow key={i} occ={occ} />
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
