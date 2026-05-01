'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { createPortal } from 'react-dom'
import { useRouter } from 'next/navigation'

export default function TutorialModal() {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  const triggerRef = useRef<HTMLButtonElement | null>(null)
  const dialogRef = useRef<HTMLDivElement | null>(null)
  const firstFocusRef = useRef<HTMLButtonElement | null>(null)

  useEffect(() => {
    setMounted(true)
    router.prefetch('/surah/3')
  }, [router])

  const close = useCallback(() => {
    setOpen(false)
    // Retour du focus sur le bouton déclencheur
    setTimeout(() => triggerRef.current?.focus(), 0)
  }, [])

  // Gestion Escape + focus trap
  useEffect(() => {
    if (!open) return

    // Focus initial dans la modale
    firstFocusRef.current?.focus()

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        close()
        return
      }
      if (e.key === 'Tab' && dialogRef.current) {
        const focusables = dialogRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        )
        if (focusables.length === 0) return
        const first = focusables[0]
        const last = focusables[focusables.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [open, close])

  const startTour = () => {
    router.prefetch('/surah/3')
    localStorage.setItem('tuto-active', '1')
    localStorage.setItem('tuto-step', '0')
    setOpen(false)
    // Step 1 cible la grille des sourates (présente uniquement sur /).
    // Si on est sur une sourate, on revient à la home — TutorialGuide
    // détectera le changement de pathname et activera le tutoriel.
    if (typeof window !== 'undefined' && window.location.pathname !== '/') {
      router.push('/')
    } else {
      window.dispatchEvent(new Event('tuto-changed'))
    }
  }

  return (
    <>
      <button
        ref={triggerRef}
        onClick={() => setOpen(true)}
        className="tuto-cta-btn inline-flex items-center justify-center gap-2.5 rounded-full transition-all"
        style={{
          padding: '8px 24px',
          minWidth: '195px',
          fontSize: '14px',
          fontFamily: "'Cormorant Garamond', serif",
          fontWeight: 700,
          letterSpacing: '0.05em',
          background: 'linear-gradient(135deg, #C9A23A 0%, #B8962E 55%, #9E7E1F 100%)',
          color: '#FFFCF6',
          border: '1px solid rgba(158,126,31,0.5)',
          boxShadow: '0 2px 8px rgba(184,150,46,0.3), 0 1px 2px rgba(184,150,46,0.15)',
          textShadow: '0 1px 1px rgba(80,55,10,0.25)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <span aria-hidden="true" className="tuto-cta-star" style={{ fontSize: '15px', opacity: 0.95, display: 'inline-block', position: 'relative', zIndex: 1 }}>✦</span>
        <span style={{ position: 'relative', zIndex: 1 }}>Visite guidée</span>
        <span aria-hidden="true" className="tuto-cta-arrow" style={{ fontSize: '14px', marginLeft: '1px', display: 'inline-block', position: 'relative', zIndex: 1 }}>→</span>
      </button>

      {/* CSS du bouton + modal migrée vers globals.css : avec <style jsx>,
          les media queries s'injectaient au mount JS, ce qui causait un flash
          de "bouton qui grandit pendant 1s" au F5 mobile (les overrides mobile
          n'étaient pas encore appliqués pendant le SSR initial). */}

      {open && mounted && createPortal(
        <div
          className="tuto-modal-overlay fixed inset-0 z-50 overflow-y-auto"
          style={{ background: 'rgba(26, 20, 16, 0.55)', backdropFilter: 'blur(2px)', WebkitBackdropFilter: 'blur(2px)' }}
          onClick={close}
          role="presentation"
        >
          <div className="min-h-full flex items-center justify-center p-4">
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="tuto-title"
            aria-describedby="tuto-desc"
            className="tuto-modal-card relative w-full overflow-hidden my-auto"
            style={{
              maxWidth: 'min(440px, calc(100vw - 32px))',
              background: 'linear-gradient(135deg, #FFFCF6 0%, #FAF7F2 65%, #F5EFE3 100%)',
              border: '1px solid rgba(184,150,46,0.32)',
              borderRadius: '20px',
              boxShadow: '0 18px 50px rgba(120,90,30,0.20), 0 4px 14px rgba(120,90,30,0.10), inset 0 1px 0 rgba(255,255,255,0.6)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Bandeau or décoratif en haut */}
            <div
              aria-hidden="true"
              className="absolute"
              style={{
                top: 0,
                left: 0,
                right: 0,
                height: '3px',
                background: 'linear-gradient(to right, transparent 0%, #C9A23A 25%, #B8962E 50%, #C9A23A 75%, transparent 100%)',
                opacity: 0.9,
              }}
            />

            <button
              ref={firstFocusRef}
              onClick={close}
              aria-label="Fermer la fenêtre"
              className="tuto-modal-close absolute inline-flex items-center gap-1 rounded-full"
              style={{
                top: '12px',
                right: '12px',
                color: '#8A7E72',
                fontSize: '11px',
                letterSpacing: '0.06em',
                padding: '6px 12px',
                minHeight: '32px',
                background: 'transparent',
                border: '1px solid rgba(184,150,46,0.22)',
                cursor: 'pointer',
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 600,
                textTransform: 'uppercase',
              }}
            >
              fermer <span aria-hidden="true" style={{ fontSize: '11px' }}>✕</span>
            </button>

            <div className="px-5 sm:px-8 pt-14 pb-6 sm:pb-7 text-center">
              {/* ✦ décoratif en filigrane */}
              <div
                aria-hidden="true"
                className="flex items-center justify-center gap-3 mb-2"
                style={{ color: '#B8962E' }}
              >
                <div className="h-px" style={{ width: '36px', background: 'rgba(184,150,46,0.4)' }} />
                <span style={{ fontSize: '20px', lineHeight: 1, opacity: 0.95 }}>✦</span>
                <div className="h-px" style={{ width: '36px', background: 'rgba(184,150,46,0.4)' }} />
              </div>

              <h3
                id="tuto-title"
                style={{
                  color: '#1A1410',
                  fontSize: 'clamp(1.4rem, 4.5vw, 1.7rem)',
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 600,
                  letterSpacing: '0.04em',
                  lineHeight: 1.2,
                  margin: '0 0 10px 0',
                }}
              >
                Visite guidée
              </h3>

              <p
                id="tuto-desc"
                className="mx-auto"
                style={{
                  color: '#5A4E42',
                  lineHeight: 1.6,
                  fontSize: 'clamp(0.9rem, 2.2vw, 0.97rem)',
                  maxWidth: '24rem',
                  margin: '0 auto 1.5rem',
                }}
              >
                Je vais t&apos;emmener directement sur une sourate et te montrer pas à pas comment méditer un verset.
              </p>

              {/* "Au programme" — petit panneau dans le panneau */}
              <div
                className="rounded-xl p-4 sm:p-5 mb-5 text-left"
                style={{
                  background: 'rgba(255,253,247,0.55)',
                  border: '1px solid rgba(184,150,46,0.22)',
                  boxShadow: '0 1px 2px rgba(120,90,30,0.04), inset 0 1px 0 rgba(255,255,255,0.5)',
                }}
              >
                <div
                  className="flex items-center gap-2 mb-3"
                  style={{ color: '#8A7428' }}
                >
                  <span aria-hidden="true" style={{ fontSize: '11px', opacity: 0.8 }}>✦</span>
                  <span
                    className="uppercase"
                    style={{
                      fontSize: '10.5px',
                      letterSpacing: '0.18em',
                      fontWeight: 700,
                      fontFamily: "'Cormorant Garamond', serif",
                    }}
                  >
                    Au programme
                  </span>
                  <div className="flex-1 h-px ml-1" style={{ background: 'rgba(184,150,46,0.25)' }} />
                </div>
                <ul className="space-y-2" style={{ color: '#3D3228', fontSize: 'clamp(12.5px, 3vw, 13.5px)', lineHeight: 1.5 }}>
                  {[
                    'Choisir une sourate',
                    'Voir un verset aligné mot à mot',
                    'Cliquer sur un mot pour l\'analyser',
                    'Lire le panneau étymologique',
                    'Comprendre retenu / probable / exclu',
                    'Comparer avec la traduction Hamidullah',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span aria-hidden="true" style={{ color: '#B8962E', fontSize: '14px', lineHeight: 1.4, flexShrink: 0, marginTop: '1px' }}>◇</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div
                  className="italic mt-3.5 pt-3"
                  style={{
                    color: '#6B5E52',
                    fontSize: '11.5px',
                    borderTop: '1px solid rgba(184,150,46,0.15)',
                  }}
                >
                  Tu peux quitter à tout moment.
                </div>
              </div>

              <div className="flex items-center justify-center gap-3 flex-wrap">
                <button
                  onClick={close}
                  className="tuto-modal-btn-secondary rounded-full transition-all"
                  style={{
                    border: '1px solid rgba(184,150,46,0.35)',
                    color: '#6B5E52',
                    background: 'rgba(255,253,247,0.5)',
                    padding: '11px 22px',
                    fontSize: '13px',
                    minHeight: '44px',
                    cursor: 'pointer',
                    fontFamily: "'Cormorant Garamond', serif",
                    fontWeight: 600,
                    letterSpacing: '0.04em',
                  }}
                >
                  Plus tard
                </button>
                <button
                  onClick={startTour}
                  className="tuto-modal-btn-primary rounded-full font-semibold transition-all"
                  style={{
                    background: 'linear-gradient(135deg, #C9A23A 0%, #B8962E 55%, #9E7E1F 100%)',
                    color: '#FFFCF6',
                    letterSpacing: '0.05em',
                    padding: '11px 24px',
                    fontSize: '13px',
                    minHeight: '44px',
                    border: '1px solid rgba(158,126,31,0.4)',
                    cursor: 'pointer',
                    fontFamily: "'Cormorant Garamond', serif",
                    boxShadow: '0 2px 8px rgba(184,150,46,0.3), 0 1px 2px rgba(184,150,46,0.15)',
                    textShadow: '0 1px 1px rgba(80,55,10,0.25)',
                  }}
                >
                  C&apos;est parti <span aria-hidden="true">✦</span>
                </button>
              </div>
            </div>
          </div>
          </div>
        </div>,
        document.body
      )}
    </>
  )
}
