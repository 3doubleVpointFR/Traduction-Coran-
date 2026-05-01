'use client'

import { useState, useId } from 'react'
import Link from 'next/link'

interface Surah {
  id: number
  name_ar: string
  name_latin: string
  name_fr: string
  verse_count: number
}

export default function SurahGrid({ surahs }: { surahs: Surah[] }) {
  const [search, setSearch] = useState('')
  const searchId = useId()

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
      {/* Search bar — sticky pour rester visible quand on scrolle 114 sourates */}
      <div
        className="surah-search-bar mb-6"
        style={{
          position: 'sticky',
          top: '60px',
          zIndex: 30,
          paddingTop: '6px',
          paddingBottom: '6px',
          background: 'linear-gradient(to bottom, #FDFAF3 0%, #FDFAF3 70%, rgba(253,250,243,0) 100%)',
        }}
      >
        <label htmlFor={searchId} className="sr-only">Rechercher une sourate</label>
        <div className="relative">
          {/* Icône loupe */}
          <span
            aria-hidden="true"
            className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none"
            style={{ color: '#B8962E', opacity: 0.7 }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="7" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </span>
          <input
            id={searchId}
            type="search"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Rechercher une sourate..."
            aria-label="Rechercher une sourate"
            className="w-full surah-search"
            style={{
              minHeight: '50px',
              padding: '14px 18px 14px 46px',
              borderRadius: '12px',
              border: '1px solid rgba(184,150,46,0.28)',
              background: '#FFFFFF',
              fontSize: '15.5px',
              color: '#1A1410',
              outline: 'none',
              fontFamily: "'Cormorant Garamond', serif",
              letterSpacing: '0.02em',
              boxShadow: '0 1px 2px rgba(184,150,46,0.04)',
              transition: 'all 0.2s ease',
            }}
          />
        </div>
      </div>

      {/* Results count when searching */}
      {search.trim() && (
        <p role="status" aria-live="polite" className="mb-3" style={{ fontSize: '13px', color: '#6B5E52', fontStyle: 'italic' }}>
          {filtered.length} sourate{filtered.length > 1 ? 's' : ''} trouvée{filtered.length > 1 ? 's' : ''}
        </p>
      )}

      {/* ═══ LIST VIEW (seule vue désormais) ═══ */}
      <ul
        className="rounded-xl overflow-hidden list-none p-0 m-0"
        style={{
          background: '#FFFFFF',
          border: '1px solid rgba(184,150,46,0.18)',
          boxShadow: '0 1px 3px rgba(120,90,30,0.04), 0 4px 14px rgba(120,90,30,0.04)',
        }}
      >
        {filtered.map((s, i) => (
          <li key={s.id} className="m-0">
            <Link
              href={`/surah/${s.id}`}
              className="surah-row flex items-center gap-3 sm:gap-4 transition-colors cursor-pointer relative"
              style={{
                padding: '14px 16px',
                background: '#FFFFFF',
                borderBottom: i < filtered.length - 1 ? '1px solid rgba(184,150,46,0.1)' : 'none',
              }}
            >
              {/* Numéro — élégant en italique Cormorant */}
              <span style={{
                width: '34px',
                fontSize: 'clamp(18px, 4.5vw, 20px)',
                color: '#8A7428',
                fontWeight: 600,
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: 'italic',
                textAlign: 'center',
                flexShrink: 0,
                letterSpacing: '0.02em',
              }}>
                {s.id}
              </span>

              {/* Nom latin + français */}
              <div className="flex-1 min-w-0">
                <span style={{
                  fontSize: 'clamp(15px, 4vw, 16px)',
                  fontWeight: 600,
                  color: '#1A1410',
                  fontFamily: "'Cormorant Garamond', serif",
                  letterSpacing: '0.01em',
                }}>
                  {s.name_latin}
                </span>
                <span className="hidden sm:inline" style={{ color: '#6B5E52', fontSize: '13.5px', marginLeft: '10px', fontStyle: 'italic' }}>
                  {s.name_fr}
                </span>
              </div>

              {/* Signes */}
              <span style={{ fontSize: '13px', color: '#6B5E52', flexShrink: 0, fontFamily: "'Cormorant Garamond', serif", fontWeight: 500 }}>
                {s.verse_count} <span style={{ fontSize: '11.5px', color: '#8A7E72', letterSpacing: '0.04em' }}>signes</span>
              </span>

              {/* Arabe */}
              <span className="font-arabic" lang="ar" dir="rtl" style={{ fontSize: 'clamp(20px, 5.5vw, 22px)', color: '#B8962E', flexShrink: 0, width: 'clamp(70px, 22vw, 90px)', textAlign: 'right', lineHeight: 1.4 }}>
                {s.name_ar}
              </span>
            </Link>
          </li>
        ))}
      </ul>

      {filtered.length === 0 && (
        <p className="text-center py-10" style={{ color: '#6B5E52', fontSize: '14.5px', fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic' }}>
          Aucune sourate trouvée
        </p>
      )}

      <style jsx>{`
        .surah-search:focus,
        .surah-search:focus-visible {
          border-color: #B8962E !important;
          box-shadow: 0 0 0 3px rgba(184, 150, 46, 0.15), 0 1px 3px rgba(184, 150, 46, 0.1) !important;
          outline: none !important;
        }
        .surah-row:hover,
        .surah-row:focus-visible {
          background: linear-gradient(to right, rgba(184, 150, 46, 0.07), rgba(184, 150, 46, 0.03)) !important;
        }
      `}</style>
    </div>
  )
}
