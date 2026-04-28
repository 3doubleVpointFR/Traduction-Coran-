'use client'

import { useState } from 'react'
import Link from 'next/link'

interface Surah {
  id: number
  name_ar: string
  name_latin: string
  name_fr: string
  verse_count: number
}

type ViewMode = 'list' | 'grid'

export default function SurahGrid({ surahs }: { surahs: Surah[] }) {
  const [search, setSearch] = useState('')
  const [view, setView] = useState<ViewMode>('list')

  const filtered = surahs.filter(s => {
    if (!search.trim()) return true
    const q = search.trim().toLowerCase()
    if (/^\d+$/.test(q)) return s.id.toString().startsWith(q)
    return (
      s.name_latin.toLowerCase().includes(q) ||
      s.name_fr.toLowerCase().includes(q) ||
      s.name_ar.includes(q)
    )
  })

  return (
    <div>
      {/* Search bar + view toggle */}
      <div className="mb-5 flex gap-3 items-center">
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Rechercher une sourate..."
          style={{
            flex: 1,
            padding: '12px 16px',
            borderRadius: '8px',
            border: '1px solid rgba(184,150,46,0.3)',
            background: '#FFFFFF',
            fontSize: '15px',
            color: '#1A1410',
            outline: 'none',
            fontFamily: "'Cormorant Garamond', serif",
            letterSpacing: '0.02em',
          }}
          onFocus={e => { e.currentTarget.style.borderColor = '#B8962E'; e.currentTarget.style.boxShadow = '0 0 0 2px rgba(184,150,46,0.12)' }}
          onBlur={e => { e.currentTarget.style.borderColor = 'rgba(184,150,46,0.3)'; e.currentTarget.style.boxShadow = 'none' }}
        />
        <div className="flex rounded-lg overflow-hidden" style={{ border: '1px solid rgba(184,150,46,0.3)' }}>
          <button
            onClick={() => setView('list')}
            style={{
              padding: '10px 12px',
              background: view === 'list' ? 'rgba(184,150,46,0.12)' : '#FFFFFF',
              border: 'none',
              cursor: 'pointer',
              color: view === 'list' ? '#B8962E' : '#9E9089',
              fontSize: '16px',
              lineHeight: 1,
            }}
            title="Vue liste"
          >
            ☰
          </button>
          <button
            onClick={() => setView('grid')}
            style={{
              padding: '10px 12px',
              background: view === 'grid' ? 'rgba(184,150,46,0.12)' : '#FFFFFF',
              border: 'none',
              borderLeft: '1px solid rgba(184,150,46,0.3)',
              cursor: 'pointer',
              color: view === 'grid' ? '#B8962E' : '#9E9089',
              fontSize: '16px',
              lineHeight: 1,
            }}
            title="Vue grille"
          >
            ▦
          </button>
        </div>
      </div>

      {/* Results count when searching */}
      {search.trim() && (
        <p className="mb-3" style={{ fontSize: '12px', color: '#9E9089' }}>
          {filtered.length} sourate{filtered.length > 1 ? 's' : ''} trouvée{filtered.length > 1 ? 's' : ''}
        </p>
      )}

      {/* ═══ LIST VIEW ═══ */}
      {view === 'list' && (
        <div className="rounded-lg overflow-hidden" style={{ border: '1px solid rgba(184,150,46,0.25)' }}>
          {filtered.map((s, i) => (
            <Link
              key={s.id}
              href={`/surah/${s.id}`}
              className="flex items-center gap-4 transition-colors cursor-pointer"
              style={{
                padding: '10px 16px',
                background: '#FFFFFF',
                borderBottom: i < filtered.length - 1 ? '1px solid rgba(184,150,46,0.12)' : 'none',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(184,150,46,0.04)' }}
              onMouseLeave={e => { e.currentTarget.style.background = '#FFFFFF' }}
            >
              {/* Numéro */}
              <span style={{
                width: '32px',
                fontSize: '16px',
                color: '#B8962E',
                fontWeight: 800,
                fontFamily: "'Cormorant Garamond', serif",
                textAlign: 'center',
                flexShrink: 0,
                WebkitTextStroke: '0.33px rgba(26,20,16,0.4)',
              }}>
                {s.id}
              </span>

              {/* Nom latin + français */}
              <div className="flex-1 min-w-0">
                <span style={{
                  fontSize: '15px',
                  fontWeight: 600,
                  color: '#1A1410',
                  fontFamily: "'Cormorant Garamond', serif",
                }}>
                  {s.name_latin}
                </span>
                <span style={{ color: '#9E9089', fontSize: '13px', marginLeft: '8px', fontStyle: 'italic' }}>
                  {s.name_fr}
                </span>
              </div>

              {/* Signes */}
              <span style={{ fontSize: '13px', color: '#6B5E52', flexShrink: 0, fontFamily: "'Cormorant Garamond', serif", fontWeight: 500 }}>
                {s.verse_count} <span style={{ fontSize: '11px', color: '#9E9089', letterSpacing: '0.03em' }}>signes</span>
              </span>

              {/* Arabe */}
              <span className="font-arabic" style={{ fontSize: '20px', color: '#B8962E', flexShrink: 0, width: '80px', textAlign: 'right' }}>
                {s.name_ar}
              </span>
            </Link>
          ))}
        </div>
      )}

      {/* ═══ GRID VIEW ═══ */}
      {view === 'grid' && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {filtered.map((s) => (
            <Link
              key={s.id}
              href={`/surah/${s.id}`}
              className="group rounded-lg cursor-pointer transition-colors"
              style={{
                background: '#FFFFFF',
                border: '1px solid rgba(184,150,46,0.25)',
                padding: '14px 12px 12px',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#B8962E'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(184,150,46,0.15)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(184,150,46,0.25)'; e.currentTarget.style.boxShadow = 'none' }}
            >
              <div className="flex items-center justify-between mb-2">
                <span style={{ fontSize: '14px', color: '#B8962E', fontWeight: 700, fontFamily: "'Cormorant Garamond', serif" }}>
                  {s.id}
                </span>
                <span style={{ fontSize: '10px', color: '#9E9089' }}>
                  {s.verse_count} signes
                </span>
              </div>
              <div className="text-right mb-2">
                <span className="font-arabic" style={{ fontSize: '22px', color: '#B8962E', lineHeight: 1.2 }}>
                  {s.name_ar}
                </span>
              </div>
              <div style={{ borderTop: '1px solid rgba(184,150,46,0.15)', paddingTop: '6px' }}>
                <p style={{ color: '#1A1410', fontSize: '13px', fontWeight: 600, fontFamily: "'Cormorant Garamond', serif" }}>
                  {s.name_latin}
                </p>
                <p style={{ color: '#9E9089', fontSize: '10px', fontStyle: 'italic' }}>
                  {s.name_fr}
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}

      {filtered.length === 0 && (
        <p className="text-center py-8" style={{ color: '#9E9089', fontSize: '14px', fontFamily: "'Cormorant Garamond', serif" }}>
          Aucune sourate trouvée
        </p>
      )}
    </div>
  )
}
