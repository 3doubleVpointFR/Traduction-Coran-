'use client'

import { useState, useCallback } from 'react'
import type { Surah, Verse, Word, Morpheme, Root } from '@/lib/db'
import { VersePanel } from './VersePanel'
import { WordPanel } from './WordPanel'
import { CoherenceEngine, type VerseRelation } from './CoherenceEngine'

interface SurahViewProps {
  surah:        Surah
  verses:       Verse[]
  wordsByVerse: Record<number, Word[]>
}

interface MorphemeWithRoot extends Morpheme {
  root?: Root | null
}

export function SurahView({ surah, verses, wordsByVerse }: SurahViewProps) {
  const [activeWord,    setActiveWord]    = useState<Word | null>(null)
  const [morphemes,     setMorphemes]     = useState<MorphemeWithRoot[]>([])
  const [relations,     setRelations]     = useState<VerseRelation[]>([])
  const [activeVerseId, setActiveVerseId] = useState<number | null>(null)
  const [loadingMorph,  setLoadingMorph]  = useState(false)
  // testedMeaning[wordId] = texte de remplacement testé
  const [testedWords, setTestedWords] = useState<Record<number, string>>({})

  const handleWordSelect = useCallback(async (word: Word | null) => {
    setActiveWord(word)
    if (!word) { setMorphemes([]); return }

    setLoadingMorph(true)
    try {
      const res = await fetch(`/api/morphemes/${word.id}`)
      if (res.ok) setMorphemes(await res.json())
    } finally {
      setLoadingMorph(false)
    }
  }, [])

  const handleVerseClick = useCallback(async (verseId: number) => {
    setActiveVerseId(verseId)
    const res = await fetch(`/api/relations/${verseId}`)
    if (res.ok) setRelations(await res.json())
  }, [])

  const handleTestMeaning = useCallback((wordId: number, text: string) => {
    setTestedWords(prev => ({ ...prev, [wordId]: text }))
  }, [])

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">

      {/* ── En-tête sourate ── */}
      <div className="text-center mb-10">
        <div
          className="text-5xl leading-loose text-gold-700 mb-1"
          dir="rtl"
          style={{ fontFamily: 'var(--font-arabic)' }}
        >
          {surah.name_arabic}
        </div>
        <div className="text-2xl font-semibold text-gray-700 mt-1">{surah.name_latin}</div>
        {surah.name_french && (
          <div className="text-sm text-gray-400 mt-0.5">{surah.name_french}</div>
        )}
        <div className="flex justify-center gap-3 mt-3">
          <span className="morph-badge bg-parchment-100 text-gray-500">
            {surah.verse_count} versets
          </span>
          {surah.revelation && (
            <span className="morph-badge bg-parchment-100 text-gray-500 capitalize">
              {surah.revelation}
            </span>
          )}
        </div>
      </div>

      {/* ── Bismillah ── */}
      {surah.id !== 9 && (
        <div
          className="text-center text-3xl text-gray-600 mb-10 leading-loose"
          dir="rtl"
          style={{ fontFamily: 'var(--font-arabic)' }}
        >
          بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ
        </div>
      )}

      {/* ── Layout ── */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-6 items-start">

        {/* Colonne versets */}
        <div className="space-y-5">
          {verses.map(verse => (
            <div
              key={verse.id}
              onClick={() => handleVerseClick(verse.id)}
              className={
                activeVerseId === verse.id
                  ? 'ring-2 ring-gold-300 ring-offset-1 rounded-xl'
                  : ''
              }
            >
              <VersePanel
                verse={verse}
                words={wordsByVerse[verse.id] ?? []}
                surahName={surah.name_latin}
                onWordSelect={handleWordSelect}
                activeWordId={activeWord?.id ?? null}
                testedWords={testedWords}
              />
            </div>
          ))}
        </div>

        {/* Colonne analyse — sticky */}
        <div className="space-y-4 lg:sticky lg:top-20 lg:self-start max-h-[calc(100vh-6rem)] overflow-y-auto">
          <WordPanel
            word={activeWord}
            morphemes={loadingMorph ? [] : morphemes}
            loading={loadingMorph}
            onTestMeaning={handleTestMeaning}
          />
          {activeVerseId && (
            <CoherenceEngine
              verseId={activeVerseId}
              relations={relations}
              onNavigate={id =>
                document.getElementById(`verse-${id}`)?.scrollIntoView({
                  behavior: 'smooth', block: 'center',
                })
              }
            />
          )}
        </div>
      </div>
    </div>
  )
}
