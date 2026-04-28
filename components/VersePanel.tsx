'use client'

import { useState } from 'react'
import type { Verse, Word } from '@/lib/db'
import { cn } from '@/lib/utils'
import { arabicToPhonetic, shortPhonetic } from '@/lib/phonetics'

interface VersePanelProps {
  verse:         Verse
  words:         Word[]
  surahName:     string
  onWordSelect?: (word: Word | null) => void
  activeWordId?: number | null
  /** Mots dont le sens est temporairement remplacé pour test */
  testedWords?:  Record<number, string>
}

/**
 * VersePanel — affichage en 3 couches :
 *   1. Phonétique au-dessus de chaque token (RTL)
 *   2. Texte arabe Uthmani, mot par mot cliquable (RTL)
 *   3. Traduction française en dessous
 */
export function VersePanel({
  verse,
  words,
  surahName,
  onWordSelect,
  activeWordId,
  testedWords = {},
}: VersePanelProps) {
  const [showTranslation, setShowTranslation] = useState(true)

  const ref = `${surahName} · ${verse.verse_number}`

  // Décide si un mot porte une racine trilitère (heuristique : form > 2 chars
  // et pas une préposition courante) — affiné dès que les morphèmes sont chargés
  function isKeyWord(w: Word) {
    if (!w.form) return false
    const stripped = w.form.replace(/[\u064B-\u065F\u0670]/g, '')
    return stripped.length > 2
  }

  return (
    <article id={`verse-${verse.id}`} className="side-panel">

      {/* ── En-tête ── */}
      <header className="panel-header">
        <div className="flex items-center gap-2">
          <span className="text-xs font-medium text-gold-700 bg-gold-50 border border-gold-200
                           rounded px-2 py-0.5">
            {verse.verse_number}
          </span>
          <span className="text-sm text-gray-500">{ref}</span>
        </div>
        <div className="flex items-center gap-2">
          {verse.juz && (
            <span className="morph-badge bg-parchment-100 text-gray-400">Juz {verse.juz}</span>
          )}
          {verse.sajda === 1 && (
            <span className="morph-badge bg-green-50 text-green-600 border border-green-200">
              ۩ Sajda
            </span>
          )}
          <button
            onClick={() => setShowTranslation(v => !v)}
            className="text-xs text-gray-400 hover:text-gold-600 transition-colors"
          >
            {showTranslation ? 'Masquer trad.' : 'Afficher trad.'}
          </button>
        </div>
      </header>

      {/* ── Corps : tokens arabes + phonétiques ── */}
      <div className="px-5 pt-5 pb-3" dir="rtl">
        {words.length > 0 ? (
          <div className="flex flex-wrap gap-x-3 gap-y-4 justify-end items-end">
            {words.filter(w => w.form && w.form.trim() && !/^[\u0600-\u060F\u06D6-\u06ED\s]+$/.test(w.form)).map(word => {
              const ph = shortPhonetic(arabicToPhonetic(word.form), 14)
              const key = isKeyWord(word)
              const isActive = activeWordId === word.id

              return (
                <div
                  key={word.id}
                  className="flex flex-col items-center gap-0.5 cursor-pointer group"
                  onClick={() => onWordSelect?.(isActive ? null : word)}
                >
                  {/* Phonétique au-dessus */}
                  <span
                    className={cn(
                      'text-[10px] leading-tight tracking-wide font-mono transition-colors',
                      isActive
                        ? 'text-gold-600'
                        : key
                        ? 'text-sky-400'
                        : 'text-gray-300',
                      'group-hover:text-gold-500',
                    )}
                  >
                    {ph || '\u00A0'}
                  </span>

                  {/* Mot arabe */}
                  <span
                    className={cn(
                      'font-arabic text-2xl leading-none transition-all rounded px-1 py-0.5',
                      isActive
                        ? 'bg-gold-200 text-gold-900 ring-1 ring-gold-400'
                        : key
                        ? 'text-gray-800 hover:bg-gold-100 hover:text-gold-900'
                        : 'text-gray-400 hover:bg-parchment-100 hover:text-gray-700',
                    )}
                    style={{ fontFamily: 'var(--font-arabic)' }}
                    title={word.translation_fr ?? undefined}
                  >
                    {word.form}
                  </span>
                </div>
              )
            })}
          </div>
        ) : (
          /* Fallback texte brut */
          <p
            className="quran-text leading-loose"
            style={{ fontFamily: 'var(--font-arabic)' }}
          >
            {verse.text_uthmani ?? verse.text_arabic}
          </p>
        )}
      </div>

      {/* ── Traduction française ── */}
      {showTranslation && verse.translation_fr && (
        <div className="px-5 pb-4 pt-2 border-t border-parchment-200">
          <p className="text-sm text-gray-600 leading-relaxed">
            <span className="text-[10px] text-gray-300 uppercase tracking-widest mr-1.5
                             font-medium">
              FR
            </span>
            {verse.translation_fr}
          </p>
        </div>
      )}
    </article>
  )
}
