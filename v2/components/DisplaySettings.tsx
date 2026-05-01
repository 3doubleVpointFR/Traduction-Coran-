'use client'

import { useState, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

const STORAGE_KEY = 'display-settings-v1'

interface Settings {
  hideArabic: boolean
  hidePhon: boolean
  hideSections: boolean
  compactMode: boolean
}

const defaultSettings: Settings = {
  hideArabic: false,
  hidePhon: false,
  hideSections: false,
  compactMode: false,
}

export default function DisplaySettings() {
  const [open, setOpen] = useState(false)
  const [settings, setSettings] = useState<Settings>(defaultSettings)
  const [hydrated, setHydrated] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [popoverPos, setPopoverPos] = useState<{ top: number; left: number; width: number } | null>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const popoverRef = useRef<HTMLDivElement>(null)

  // mounted = portal target prêt
  useEffect(() => { setMounted(true) }, [])

  // Recalcule la position du popover (fixed, viewport-anchored) au open ou resize
  useEffect(() => {
    if (!open || !buttonRef.current) {
      setPopoverPos(null)
      return
    }
    const computePos = () => {
      const btn = buttonRef.current
      if (!btn) return
      const rect = btn.getBoundingClientRect()
      const vpW = window.innerWidth
      const margin = 12
      const desiredW = Math.min(290, vpW - margin * 2)
      // Aligne le bord droit du popover sur le bord droit du bouton (ouvre vers la gauche)
      let left = rect.right - desiredW
      // Clamp pour rester dans le viewport
      left = Math.max(margin, Math.min(left, vpW - desiredW - margin))
      setPopoverPos({ top: rect.bottom + 10, left, width: desiredW })
    }
    computePos()
    window.addEventListener('resize', computePos)
    window.addEventListener('scroll', computePos, { passive: true })
    return () => {
      window.removeEventListener('resize', computePos)
      window.removeEventListener('scroll', computePos)
    }
  }, [open])

  // Lecture localStorage au mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored) {
        const parsed = JSON.parse(stored)
        setSettings({ ...defaultSettings, ...parsed })
      }
    } catch { /* ignore parse errors */ }
    setHydrated(true)
  }, [])

  // Application des classes sur <body> + persistance
  useEffect(() => {
    if (!hydrated) return
    const body = document.body
    body.classList.toggle('hide-arabic', settings.hideArabic || settings.compactMode)
    body.classList.toggle('hide-phon', settings.hidePhon || settings.compactMode)
    body.classList.toggle('hide-sections', settings.hideSections || settings.compactMode)
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(settings))
    } catch { /* ignore quota errors */ }
  }, [settings, hydrated])

  // Fermeture sur Escape ou clic extérieur
  useEffect(() => {
    if (!open) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    const handleClick = (e: MouseEvent) => {
      const target = e.target as Node
      if (
        popoverRef.current && !popoverRef.current.contains(target) &&
        buttonRef.current && !buttonRef.current.contains(target)
      ) {
        setOpen(false)
      }
    }
    window.addEventListener('keydown', handleKey)
    document.addEventListener('mousedown', handleClick)
    return () => {
      window.removeEventListener('keydown', handleKey)
      document.removeEventListener('mousedown', handleClick)
    }
  }, [open])

  const toggle = (key: keyof Settings) => {
    // Sur mobile, désactive l'animation pendant le toggle pour éviter le
    // tremblement (200+ éléments qui animent simultanément = trop lourd).
    if (typeof window !== 'undefined' && window.matchMedia('(max-width: 768px)').matches) {
      document.body.classList.add('js-no-anim')
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          document.body.classList.remove('js-no-anim')
        })
      })
    }
    setSettings(prev => ({ ...prev, [key]: !prev[key] }))
  }

  return (
    <div className="relative">
      <button
        ref={buttonRef}
        onClick={() => setOpen(o => !o)}
        aria-label="Personnaliser l'affichage"
        title="Personnaliser l'affichage"
        data-tour-display-btn="1"
        className="display-settings-btn inline-flex items-center justify-center"
        style={{
          width: '34px',
          height: '34px',
          borderRadius: '50%',
          border: '1px solid rgba(184,150,46,0.35)',
          background: '#FFFFFF',
          color: '#B8962E',
          cursor: 'pointer',
          fontSize: '15px',
          lineHeight: 1,
          boxShadow: '0 1px 2px rgba(184,150,46,0.08)',
          transition: 'background 200ms ease, border-color 200ms ease, box-shadow 200ms ease',
        }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <line x1="4" y1="6" x2="20" y2="6" />
          <line x1="4" y1="12" x2="14" y2="12" />
          <line x1="4" y1="18" x2="18" y2="18" />
        </svg>
      </button>

      {open && mounted && popoverPos && createPortal(
        <div
          ref={popoverRef}
          role="dialog"
          aria-label="Paramètres d'affichage"
          data-tour-display-popover="1"
          className="display-settings-popover"
          style={{
            position: 'fixed',
            top: `${popoverPos.top}px`,
            left: `${popoverPos.left}px`,
            width: `${popoverPos.width}px`,
            background: 'linear-gradient(180deg, #FFFCF6 0%, #FAF7F2 100%)',
            border: '1px solid rgba(184,150,46,0.32)',
            borderRadius: '14px',
            boxShadow: '0 16px 38px rgba(120,90,30,0.18), 0 4px 12px rgba(120,90,30,0.10), inset 0 1px 0 rgba(255,255,255,0.5)',
            padding: '0',
            zIndex: 60,
            overflow: 'hidden',
          }}
        >
          {/* Bandeau or top — signature visuelle */}
          <div
            aria-hidden="true"
            style={{
              height: '3px',
              background: 'linear-gradient(to right, transparent 0%, #C9A23A 25%, #B8962E 50%, #C9A23A 75%, transparent 100%)',
              opacity: 0.85,
            }}
          />

          {/* En-tête : ✦ AFFICHAGE */}
          <div
            className="flex items-center gap-2"
            style={{
              padding: '14px 18px 6px 18px',
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: 'italic',
              color: '#8A7428',
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
            }}
          >
            <span aria-hidden="true" style={{ fontSize: '11px' }}>✦</span>
            Affichage
          </div>

          <div style={{ padding: '4px 8px 8px 8px' }}>
            <SettingRow
              label="Texte arabe"
              checked={!settings.hideArabic}
              disabled={settings.compactMode}
              onChange={() => toggle('hideArabic')}
            />
            <SettingRow
              label="Phonétique"
              checked={!settings.hidePhon}
              disabled={settings.compactMode}
              onChange={() => toggle('hidePhon')}
            />
            <SettingRow
              label="Sections explicatives"
              checked={!settings.hideSections}
              disabled={settings.compactMode}
              onChange={() => toggle('hideSections')}
            />
          </div>

          {/* Séparateur or */}
          <div
            aria-hidden="true"
            style={{
              margin: '4px 18px',
              height: '1px',
              background: 'linear-gradient(to right, transparent, rgba(184,150,46,0.3), transparent)',
            }}
          />

          <div style={{ padding: '4px 8px 12px 8px' }}>
            <SettingRow
              label="Mode lecture compact"
              caption="Cache arabe + phonétique + sections"
              checked={settings.compactMode}
              onChange={() => toggle('compactMode')}
              compact
            />
          </div>

          {/* Bandeau or bas */}
          <div
            aria-hidden="true"
            style={{
              height: '2px',
              background: 'linear-gradient(to right, transparent 0%, rgba(184,150,46,0.45) 30%, rgba(184,150,46,0.7) 50%, rgba(184,150,46,0.45) 70%, transparent 100%)',
              opacity: 0.8,
            }}
          />
        </div>,
        document.body
      )}
    </div>
  )
}

interface SettingRowProps {
  label: string
  caption?: string
  checked: boolean
  disabled?: boolean
  onChange: () => void
  compact?: boolean
}

function SettingRow({ label, caption, checked, disabled = false, onChange, compact = false }: SettingRowProps) {
  return (
    <button
      type="button"
      onClick={() => { if (!disabled) onChange() }}
      disabled={disabled}
      className="settings-row flex items-center justify-between w-full text-left"
      style={{
        padding: '8px 10px',
        background: 'transparent',
        border: 'none',
        borderRadius: '8px',
        cursor: disabled ? 'default' : 'pointer',
        opacity: disabled ? 0.4 : 1,
        transition: 'background 180ms ease',
      }}
    >
      <div className="flex flex-col">
        <span style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: compact ? '13.5px' : '13px',
          fontWeight: compact ? 600 : 500,
          color: '#1A1410',
          letterSpacing: '0.01em',
        }}>
          {label}
        </span>
        {caption && (
          <span className="italic" style={{
            fontSize: '11px',
            color: '#8A7E72',
            fontFamily: "'Cormorant Garamond', serif",
            marginTop: '1px',
          }}>
            {caption}
          </span>
        )}
      </div>
      <span
        aria-hidden="true"
        className="settings-switch"
        style={{
          width: '34px',
          height: '20px',
          borderRadius: '10px',
          background: checked ? 'linear-gradient(135deg, #C9A23A, #B8962E)' : 'rgba(184,150,46,0.18)',
          position: 'relative',
          flexShrink: 0,
          transition: 'background 320ms cubic-bezier(0.16, 1, 0.3, 1)',
          boxShadow: checked ? 'inset 0 1px 0 rgba(255,255,255,0.25)' : 'inset 0 1px 2px rgba(120,90,30,0.08)',
        }}
      >
        <span
          style={{
            position: 'absolute',
            top: '2px',
            left: '2px',
            width: '16px',
            height: '16px',
            borderRadius: '50%',
            background: '#FFFFFF',
            transform: checked ? 'translateX(14px)' : 'translateX(0)',
            transition: 'transform 380ms cubic-bezier(0.34, 1.4, 0.64, 1)',
            boxShadow: '0 1px 2px rgba(0,0,0,0.20)',
            willChange: 'transform',
          }}
        />
      </span>
    </button>
  )
}
