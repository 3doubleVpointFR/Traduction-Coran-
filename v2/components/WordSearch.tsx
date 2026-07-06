'use client'

import { useState, useEffect, useId, useRef } from 'react'
import { createPortal } from 'react-dom'
import Link from 'next/link'

type Result = {
  word_key: string
  root_ar: string
  root_phon: string
  root_meaning: string | null
  matched_field: string
  matched_snippet: string
  score: number
}

export default function WordSearch() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<Result[]>([])
  const [loading, setLoading] = useState(false)
  const [open, setOpen] = useState(false)
  const [pos, setPos] = useState<{ left: number; top: number; width: number } | null>(null)
  const [mounted, setMounted] = useState(false)
  const searchId = useId()
  const wrapperRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => { setMounted(true) }, [])

  const updatePos = () => {
    const el = inputRef.current
    if (!el) return
    const r = el.getBoundingClientRect()
    setPos({ left: r.left, top: r.bottom + 6, width: r.width })
  }

  useEffect(() => {
    if (!open) return
    updatePos()
    window.addEventListener('scroll', updatePos, true)
    window.addEventListener('resize', updatePos)
    return () => {
      window.removeEventListener('scroll', updatePos, true)
      window.removeEventListener('resize', updatePos)
    }
  }, [open])

  useEffect(() => {
    const q = query.trim()
    if (q.length < 2) {
      setResults([])
      setLoading(false)
      return
    }
    setLoading(true)
    const t = setTimeout(async () => {
      try {
        const res = await fetch(`/api/search-words?q=${encodeURIComponent(q)}`)
        if (res.ok) {
          const data = await res.json()
          setResults(data.results || [])
        }
      } catch {
        setResults([])
      } finally {
        setLoading(false)
      }
    }, 200)
    return () => clearTimeout(t)
  }, [query])

  // Ferme la liste au clic extérieur (wrapper OU dropdown portalée)
  useEffect(() => {
    const h = (e: MouseEvent) => {
      const t = e.target as Node
      if (wrapperRef.current?.contains(t)) return
      if (dropdownRef.current?.contains(t)) return
      setOpen(false)
    }
    document.addEventListener('mousedown', h)
    return () => document.removeEventListener('mousedown', h)
  }, [])

  const isSearching = query.trim().length >= 2

  return (
    <div ref={wrapperRef} className="relative">
      <label htmlFor={searchId} className="sr-only">Rechercher un mot ou une racine</label>
      <div className="relative">
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
          ref={inputRef}
          type="search"
          value={query}
          onChange={e => { setQuery(e.target.value); setOpen(true) }}
          onFocus={() => setOpen(true)}
          placeholder="Rechercher un mot ou une racine (français, arabe, phonétique)…"
          aria-label="Rechercher un mot ou une racine"
          className="w-full word-search"
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

      {/* Dropdown résultats — via portal pour ignorer les contextes d'empilement parents */}
      {mounted && open && isSearching && pos && createPortal(
        <div
          ref={dropdownRef}
          className="rounded-xl overflow-hidden"
          style={{
            position: 'fixed',
            left: pos.left,
            top: pos.top,
            width: pos.width,
            background: '#FFFFFF',
            border: '1px solid rgba(184,150,46,0.28)',
            boxShadow: '0 4px 20px rgba(120,90,30,0.12), 0 2px 6px rgba(120,90,30,0.06)',
            zIndex: 9999,
            maxHeight: '440px',
            overflowY: 'auto',
          }}
        >
          {loading && (
            <div className="text-center py-6" style={{ color: '#6B5E52', fontSize: '13.5px', fontStyle: 'italic', fontFamily: "'Cormorant Garamond', serif" }}>
              <span className="inline-block w-4 h-4 border-2 rounded-full animate-spin mr-2 align-middle" style={{ borderColor: 'rgba(184,150,46,0.3)', borderTopColor: '#B8962E' }} />
              Recherche…
            </div>
          )}
          {!loading && results.length === 0 && (
            <p className="text-center py-6" style={{ color: '#6B5E52', fontSize: '14px', fontStyle: 'italic', fontFamily: "'Cormorant Garamond', serif" }}>
              Aucun mot ni racine correspondant
            </p>
          )}
          {!loading && results.length > 0 && (
            <>
              <p className="px-4 pt-3 pb-2" style={{ fontSize: '12px', color: '#8A7E72', letterSpacing: '0.04em', textTransform: 'uppercase', fontWeight: 600 }}>
                {results.length} résultat{results.length > 1 ? 's' : ''}
              </p>
              <ul className="list-none p-0 m-0">
                {results.map((r, i) => (
                  <li key={r.word_key} className="m-0">
                    <Link
                      href={`/word/${r.word_key}`}
                      onClick={() => setOpen(false)}
                      className="word-result-row block px-4 py-3 transition-colors"
                      style={{
                        borderTop: i > 0 ? '1px solid rgba(184,150,46,0.1)' : 'none',
                        textDecoration: 'none',
                      }}
                    >
                      <div className="flex items-baseline gap-3">
                        <span
                          className="font-arabic"
                          lang="ar"
                          dir="rtl"
                          style={{ fontSize: '22px', color: '#B8962E', lineHeight: 1, minWidth: '75px' }}
                        >
                          {r.root_ar}
                        </span>
                        <span
                          style={{
                            fontSize: '15px',
                            fontWeight: 600,
                            color: '#1A1410',
                            fontFamily: "'Cormorant Garamond', serif",
                            letterSpacing: '0.02em',
                          }}
                        >
                          {r.root_phon || r.word_key}
                        </span>
                        <span
                          className="ml-auto"
                          style={{
                            fontSize: '10.5px',
                            color: '#B8962E',
                            letterSpacing: '0.06em',
                            textTransform: 'uppercase',
                            fontWeight: 600,
                            fontStyle: 'italic',
                            flexShrink: 0,
                          }}
                        >
                          {r.matched_field}
                        </span>
                      </div>
                      {r.matched_snippet && (r.matched_field === 'mot du Coran' || r.matched_field === 'description') && (
                        <p style={{ fontSize: '13px', color: '#6B5E52', marginTop: '4px', fontStyle: 'italic', fontFamily: "'Cormorant Garamond', serif" }}>
                          « {r.matched_snippet} »
                        </p>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>,
        document.body
      )}

      <style jsx>{`
        .word-search:focus,
        .word-search:focus-visible {
          border-color: #B8962E !important;
          box-shadow: 0 0 0 3px rgba(184, 150, 46, 0.15), 0 1px 3px rgba(184, 150, 46, 0.1) !important;
          outline: none !important;
        }
        .word-result-row:hover {
          background: #FDFAF3 !important;
        }
      `}</style>
    </div>
  )
}
