'use client'

import { useState, useId } from 'react'
import Link from 'next/link'

interface Surah {
  id: number
  name_ar: string
  name_latin: string
  name_fr: string
  verse_count: number
  validated_count: number
}

export default function SurahGrid({ surahs }: { surahs: Surah[] }) {
  const [search, setSearch] = useState('')
  const [showAll, setShowAll] = useState(false)
  const [loadingId, setLoadingId] = useState<number | null>(null)
  const searchId = useId()

  const isSearching = !!search.trim()

  const matchesSearch = (s: Surah) => {
    if (!isSearching) return true
    const q = search.trim().toLowerCase()
    if (/^\d+$/.test(q)) return s.id.toString().startsWith(q)
    return (
      s.name_latin.toLowerCase().includes(q) ||
      s.name_fr.toLowerCase().includes(q) ||
      s.name_ar.includes(q)
    )
  }

  // Quand on cherche, afficher toutes les sourates qui matchent (peu importe showAll).
  // Sinon, afficher uniquement les sourates commencées (validated_count > 0) sauf si showAll est activé.
  const visible = surahs.filter(s => {
    if (!matchesSearch(s)) return false
    if (isSearching || showAll) return true
    return s.validated_count > 0
  })

  const hiddenCount = surahs.filter(s => s.validated_count === 0).length
  const filtered = visible

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
              onClick={() => setLoadingId(s.id)}
              className={`surah-row flex items-center gap-3 sm:gap-4 transition-colors cursor-pointer relative${loadingId === s.id ? ' surah-row-loading' : ''}`}
              style={{
                padding: '14px 16px',
                background: '#FFFFFF',
                borderBottom: i < filtered.length - 1 ? '1px solid rgba(184,150,46,0.1)' : 'none',
              }}
            >
              {/* Numéro — élégant en italique Cormorant */}
              <span className="surah-num" style={{
                width: '34px',
                fontSize: 'clamp(18px, 4.5vw, 20px)',
                color: '#8A7428',
                fontWeight: 600,
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: 'italic',
                textAlign: 'center',
                flexShrink: 0,
                letterSpacing: '0.02em',
                display: 'inline-block',
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

              {/* Progression — versets validés ★ / total signes */}
              <div
                aria-label={`${s.validated_count} verset${s.validated_count > 1 ? 's' : ''} validé${s.validated_count > 1 ? 's' : ''} sur ${s.verse_count}`}
                style={{
                  flexShrink: 0,
                  width: 'clamp(80px, 20vw, 110px)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                  gap: '4px',
                }}
              >
                {/* Ratio chiffré */}
                <span
                  style={{
                    fontSize: '12.5px',
                    color: '#6B5E52',
                    fontFamily: "'Cormorant Garamond', serif",
                    fontWeight: 500,
                    letterSpacing: '0.02em',
                    lineHeight: 1,
                    whiteSpace: 'nowrap',
                  }}
                >
                  {s.validated_count > 0 && (
                    <span style={{ color: '#B8962E', fontStyle: 'italic', marginRight: '3px' }}>
                      {s.validated_count}
                    </span>
                  )}
                  {s.validated_count > 0 && (
                    <span style={{ color: '#8A7E72', margin: '0 2px' }}>/</span>
                  )}
                  <span>{s.verse_count}</span>
                  <span style={{ fontSize: '11px', color: '#8A7E72', letterSpacing: '0.04em', marginLeft: '4px' }}>
                    signes
                  </span>
                </span>
                {/* Barre de progression — palette or, plus visible */}
                <div
                  style={{
                    width: '100%',
                    height: '6px',
                    background: 'rgba(184,150,46,0.18)',
                    borderRadius: '3px',
                    overflow: 'hidden',
                    position: 'relative',
                    boxShadow: 'inset 0 1px 1px rgba(120,90,30,0.08)',
                    border: '1px solid rgba(184,150,46,0.18)',
                  }}
                >
                  <div
                    style={{
                      width: `${Math.min(100, (s.validated_count / Math.max(1, s.verse_count)) * 100)}%`,
                      height: '100%',
                      background: s.validated_count >= s.verse_count
                        ? 'linear-gradient(90deg, #B8962E 0%, #D4AF3F 50%, #B8962E 100%)'
                        : 'linear-gradient(90deg, #B8962E 0%, #D4AF3F 100%)',
                      borderRadius: '2px',
                      transition: 'width 0.3s ease',
                      boxShadow: s.validated_count > 0 ? '0 0 4px rgba(184,150,46,0.45)' : 'none',
                    }}
                  />
                </div>
              </div>

              {/* Arabe */}
              <span className="font-arabic surah-ar" lang="ar" dir="rtl" style={{ fontSize: 'clamp(20px, 5.5vw, 22px)', color: '#B8962E', flexShrink: 0, width: 'clamp(70px, 22vw, 90px)', textAlign: 'right', lineHeight: 1.4, display: 'inline-block' }}>
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

      {/* Toggle « Voir les autres sourates » — visible seulement quand on n'est pas en recherche */}
      {!isSearching && hiddenCount > 0 && (
        <div className="text-center mt-5">
          <button
            type="button"
            onClick={() => setShowAll(v => !v)}
            className="surah-toggle"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              color: '#8A7428',
              fontSize: '14px',
              fontStyle: 'italic',
              letterSpacing: '0.04em',
              padding: '10px 22px',
              background: '#FFFFFF',
              border: '1px solid rgba(184,150,46,0.28)',
              borderRadius: '999px',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              boxShadow: '0 1px 2px rgba(184,150,46,0.06)',
            }}
            aria-expanded={showAll}
          >
            {showAll
              ? '↑ Replier — n\'afficher que les sourates commencées'
              : `Voir les ${hiddenCount} autres sourates ↓`}
          </button>
        </div>
      )}

      <style jsx>{`
        .surah-search:focus,
        .surah-search:focus-visible {
          border-color: #B8962E !important;
          box-shadow: 0 0 0 3px rgba(184, 150, 46, 0.15), 0 1px 3px rgba(184, 150, 46, 0.1) !important;
          outline: none !important;
        }
        .surah-toggle:hover {
          background: #FFFCF6 !important;
          border-color: rgba(184, 150, 46, 0.5) !important;
          color: #B8962E !important;
          box-shadow: 0 2px 6px rgba(184, 150, 46, 0.12) !important;
        }
        .surah-toggle:active {
          transform: translateY(1px);
        }
      `}</style>
    </div>
  )
}
