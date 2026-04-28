'use client'

import { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/navigation'

// ─────────────────────────────────────────────────────────────────
// Tutoriel mobile : série de cartes plein écran (onboarding style)
// — Pas de surbrillance DOM, pas de scroll auto, juste des cartes
//   éducatives qui couvrent les mêmes notions que le tuto desktop.
// ─────────────────────────────────────────────────────────────────

interface Card {
  emoji: string
  title: string
  body: string
  highlight?: string  // mot/expression à mettre en valeur dans le body
  illustration?: 'meditation' | 'surah-list' | 'word-tap' | 'concepts' | 'retenu' | 'sections' | 'final'
}

const CARDS: Card[] = [
  {
    emoji: '✦',
    title: 'Un outil de méditation',
    body: "Plutôt qu'imposer une traduction figée, cet outil te montre tous les sens possibles de chaque mot du Coran à partir de sa racine arabe — pour que tu construises ton propre sens éclairé.",
    highlight: 'tous les sens possibles',
    illustration: 'meditation',
  },
  {
    emoji: '📖',
    title: 'Choisir une sourate',
    body: "Sur la page d'accueil, fais défiler ou cherche dans la liste des sourates explorables. Pour ce tour on prend la sourate 3 (Āl ʿImrān) — clique « Suivant » et tu y seras direct.",
    illustration: 'surah-list',
  },
  {
    emoji: '✦',
    title: 'Tape un mot du verset',
    body: "Chaque mot souligné est interactif. Tape dessus pour ouvrir un panneau d'analyse complet — racine, sens étymologiques, regroupements de sens, fréquences dans le Coran.",
    highlight: 'mot souligné',
    illustration: 'word-tap',
  },
  {
    emoji: '✦',
    title: 'Les regroupements de sens',
    body: "Les sens étymologiques sont groupés par concept (Divinité, Adoration, Refuge…). Tape sur un onglet pour voir les sens individuels qu'il contient. Les barres dorées montrent la fréquence de chaque concept dans tout le Coran.",
    highlight: 'fréquence dans tout le Coran',
    illustration: 'concepts',
  },
  {
    emoji: '✦',
    title: 'Retenu / Probable / Exclu',
    body: "Pour chaque verset, les regroupements sont classés selon 5 axes de cohérence : champ lexical, versets voisins, thème de la sourate, cohérence coranique d'ensemble, finalité du khalifa. Un seul est RETENU.",
    highlight: '5 axes de cohérence',
    illustration: 'retenu',
  },
  {
    emoji: '✦',
    title: 'Trois sections par verset',
    body: "Sous chaque verset, déplie les 3 sections : Démarche (analyse grammaticale), Justification (choix des mots), Critique (comparaison avec Hamidullah). À toi de juger ce qui te paraît le plus fidèle.",
    highlight: 'À toi de juger',
    illustration: 'sections',
  },
  {
    emoji: '✦',
    title: 'À toi de méditer',
    body: "Tu as toutes les clés. Explore les sourates analysées, suis ton intuition, construis ton propre sens. La traduction n'est jamais le dernier mot — c'est une invitation à raisonner.",
    highlight: "n'est jamais le dernier mot",
    illustration: 'final',
  },
]

// ─── Mini-maquettes (HTML/CSS) qui ressemblent à l'app ───
function Illustration({ kind }: { kind: Card['illustration'] }) {
  if (!kind) return null
  const cardStyle: React.CSSProperties = {
    background: '#FFFFFF',
    border: '1px solid rgba(184,150,46,0.3)',
    borderRadius: 10,
    boxShadow: '0 6px 20px rgba(184,150,46,0.15)',
    overflow: 'hidden',
    width: '100%',
    maxWidth: 280,
    margin: '0 auto',
    fontFamily: "'Cormorant Garamond', serif",
  }

  if (kind === 'meditation') {
    return (
      <div style={{ ...cardStyle, padding: '22px 16px', textAlign: 'center' as const }}>
        <div style={{ fontSize: 56, color: '#B8962E', lineHeight: 1, marginBottom: 8 }}>قُرْآناً</div>
        <div style={{ fontSize: 11, color: '#8A7428', letterSpacing: '0.18em', textTransform: 'uppercase' as const, fontWeight: 600 }}>
          UN CORAN ARAB
        </div>
        <div style={{ height: 1, width: 40, background: 'rgba(184,150,46,0.4)', margin: '10px auto' }} />
        <div style={{ fontSize: 10, color: '#9E9089', fontStyle: 'italic' as const }}>
          Une invitation à raisonner
        </div>
      </div>
    )
  }

  if (kind === 'surah-list') {
    const rows = [
      { n: 1, lat: 'Al-Fātiḥa', fr: "L'Ouverture", ar: 'الفاتحة' },
      { n: 2, lat: 'Al-Baqara', fr: 'La Vache', ar: 'البقرة' },
      { n: 3, lat: "Āl ʿImrān", fr: "La Famille d'Imran", ar: 'آل عمران', highlight: true },
    ]
    return (
      <div style={cardStyle}>
        {rows.map((r, i) => (
          <div
            key={r.n}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              padding: '10px 12px',
              background: r.highlight ? 'rgba(184,150,46,0.1)' : '#FFFFFF',
              borderBottom: i < rows.length - 1 ? '1px solid rgba(184,150,46,0.12)' : undefined,
              borderLeft: r.highlight ? '3px solid #B8962E' : '3px solid transparent',
            }}
          >
            <span style={{ width: 18, fontSize: 13, color: '#B8962E', fontWeight: 700, textAlign: 'center' as const }}>
              {r.n}
            </span>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 12, fontWeight: 600, color: '#1A1410' }}>{r.lat}</div>
              <div style={{ fontSize: 10, color: '#9E9089', fontStyle: 'italic' as const }}>{r.fr}</div>
            </div>
            <span style={{ fontSize: 14, color: '#B8962E' }}>{r.ar}</span>
          </div>
        ))}
      </div>
    )
  }

  if (kind === 'word-tap') {
    return (
      <div style={{ ...cardStyle, padding: '18px 14px' }}>
        <div style={{ textAlign: 'center' as const, fontSize: 22, color: '#B8962E', marginBottom: 14, lineHeight: 1.4, direction: 'rtl' as const }}>
          ٱللَّهُ لَآ إِلَـٰهَ
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 12, alignItems: 'flex-end' }}>
          {[
            { phon: 'allāhu', ar: 'الله', fr: 'Dieu', active: true },
            { phon: 'lā', ar: 'لا', fr: 'pas de', active: false },
            { phon: 'ilāha', ar: 'إلٰه', fr: 'divinité', active: false },
          ].map((w, i) => (
            <div key={i} style={{ textAlign: 'center' as const }}>
              <div style={{ fontSize: 8, fontStyle: 'italic' as const, color: w.active ? '#B8962E' : '#6B5E52', marginBottom: 2 }}>
                {w.phon}
              </div>
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  color: w.active ? '#B8962E' : '#1A1410',
                  paddingBottom: 3,
                  borderBottom: w.active ? '2px solid #B8962E' : '1.5px solid rgba(184,150,46,0.4)',
                  background: w.active ? 'rgba(184,150,46,0.12)' : 'transparent',
                  borderRadius: 3,
                  padding: '2px 6px',
                }}
              >
                {w.fr}
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center' as const, fontSize: 9, color: '#B8962E', marginTop: 10, fontStyle: 'italic' as const }}>
          ↑ tap pour analyser
        </div>
      </div>
    )
  }

  if (kind === 'concepts') {
    return (
      <div style={{ ...cardStyle, padding: '14px 14px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: 8, marginBottom: 12 }}>
          {['Adoration', 'Divinité', 'Détresse', 'Refuge'].map((c, i) => (
            <span
              key={c}
              style={{
                fontSize: 10,
                fontWeight: i === 1 ? 700 : 500,
                color: i === 1 ? '#B8962E' : '#1A1410',
                paddingBottom: 3,
                borderBottom: i === 1 ? '2.5px solid #B8962E' : '1.5px solid rgba(184,150,46,0.3)',
              }}
            >
              {c}
            </span>
          ))}
        </div>
        <div style={{ borderLeft: '3px solid #B8962E', paddingLeft: 8, marginTop: 6 }}>
          <div style={{ fontSize: 10, color: '#1A1410', fontWeight: 600 }}>
            Divinité <span style={{ color: '#B8962E', fontSize: 8 }}>RETENU</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 4 }}>
            <div style={{ flex: 1, height: 4, borderRadius: 2, background: 'rgba(184,150,46,0.2)', position: 'relative' as const }}>
              <div style={{ position: 'absolute' as const, inset: 0, background: '#B8962E', borderRadius: 2 }} />
            </div>
            <span style={{ fontSize: 8, color: '#B8962E', fontWeight: 700 }}>40/40</span>
          </div>
        </div>
      </div>
    )
  }

  if (kind === 'retenu') {
    const items = [
      { label: 'RETENU', color: '#B8962E', bg: 'rgba(184,150,46,0.1)', barW: '100%' },
      { label: 'PROBABLE', color: '#A89060', bg: 'rgba(184,150,46,0.05)', barW: '60%' },
      { label: 'EXCLU', color: '#9E9089', bg: '#FAFAFA', barW: '15%', faded: true },
    ]
    return (
      <div style={cardStyle}>
        {items.map((it, i) => (
          <div
            key={it.label}
            style={{
              padding: '10px 12px',
              background: it.bg,
              borderBottom: i < items.length - 1 ? '1px solid rgba(184,150,46,0.1)' : undefined,
              borderLeft: `3px solid ${it.color}`,
              opacity: it.faded ? 0.55 : 1,
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
              <span style={{ fontSize: 10, fontWeight: 700, color: '#1A1410' }}>
                Concept {i + 1}
                <span style={{ marginLeft: 6, fontSize: 8, color: it.color, letterSpacing: '0.05em' }}>
                  {it.label}
                </span>
              </span>
            </div>
            <div style={{ height: 3, borderRadius: 2, background: 'rgba(184,150,46,0.15)', position: 'relative' as const }}>
              <div style={{ position: 'absolute' as const, top: 0, left: 0, height: '100%', width: it.barW, background: it.color, borderRadius: 2 }} />
            </div>
          </div>
        ))}
      </div>
    )
  }

  if (kind === 'sections') {
    const sections = [
      { label: 'DÉMARCHE DE LA TRADUCTION' },
      { label: 'JUSTIFICATION DU CHOIX DES MOTS' },
      { label: 'CRITIQUE DES TRADUCTIONS CLASSIQUES' },
    ]
    return (
      <div style={cardStyle}>
        {sections.map((s, i) => (
          <div
            key={s.label}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              padding: '12px 14px',
              borderBottom: i < sections.length - 1 ? '1px solid rgba(184,150,46,0.12)' : undefined,
            }}
          >
            <span style={{ color: '#B8962E', fontSize: 9 }}>▸</span>
            <span style={{ fontSize: 9, fontWeight: 700, color: '#B8962E', letterSpacing: '0.08em', flex: 1 }}>
              {s.label}
            </span>
          </div>
        ))}
        <div style={{ padding: '8px 14px', background: 'rgba(184,150,46,0.04)', fontSize: 9, color: '#5A4E42', fontStyle: 'italic' as const, borderTop: '1px solid rgba(184,150,46,0.12)' }}>
          Hamidullah : « Allah! Pas de divinité que Lui... »
        </div>
      </div>
    )
  }

  if (kind === 'final') {
    return (
      <div style={{ ...cardStyle, padding: '24px 16px', textAlign: 'center' as const, background: 'linear-gradient(135deg, #FFFCF6 0%, #F3EDD8 100%)' }}>
        <div style={{ fontSize: 32, color: '#B8962E', marginBottom: 6 }}>✦</div>
        <div style={{ fontSize: 11, color: '#8A7428', letterSpacing: '0.15em', textTransform: 'uppercase' as const, fontWeight: 700, marginBottom: 8 }}>
          Bonne méditation
        </div>
        <div style={{ height: 1, width: 30, background: 'rgba(184,150,46,0.4)', margin: '8px auto' }} />
        <div style={{ fontSize: 10, color: '#9E9089', fontStyle: 'italic' as const, lineHeight: 1.5 }}>
          La traduction n'est jamais<br/>le dernier mot
        </div>
      </div>
    )
  }

  return null
}

interface Props {
  onClose: () => void
}

export default function MobileTutorial({ onClose }: Props) {
  const router = useRouter()
  const [step, setStep] = useState(0)
  const [direction, setDirection] = useState<'next' | 'prev'>('next')

  const isLast = step === CARDS.length - 1
  const card = CARDS[step]

  // Bloque le scroll du body pendant le tuto
  useEffect(() => {
    const original = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = original }
  }, [])

  const goNext = useCallback(() => {
    if (isLast) {
      // Termine le tuto. Si on n'est pas sur la home, redirige vers la home
      // pour que l'utilisateur tombe sur la liste des sourates explorables.
      // Si déjà sur la home, on scroll juste vers la grille des sourates.
      onClose()
      if (typeof window !== 'undefined') {
        if (window.location.pathname !== '/') {
          router.push('/')
        } else {
          // Scroll vers la grille des sourates après un court délai pour laisser le tuto se fermer
          setTimeout(() => {
            const grid = document.querySelector('[data-tour-surah-grid="1"]') as HTMLElement | null
            if (grid) grid.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }, 100)
        }
      }
      return
    }
    setDirection('next')
    setStep(s => s + 1)
  }, [isLast, onClose, router])

  const goPrev = () => {
    if (step === 0) return
    setDirection('prev')
    setStep(s => s - 1)
  }

  // Highlight d'expression dans le body (couleur or)
  const renderBody = (text: string, highlight?: string) => {
    if (!highlight) return text
    const idx = text.indexOf(highlight)
    if (idx === -1) return text
    return (
      <>
        {text.slice(0, idx)}
        <span style={{ color: '#B8962E', fontWeight: 600 }}>{highlight}</span>
        {text.slice(idx + highlight.length)}
      </>
    )
  }

  return (
    <div
      className="fixed inset-0 z-[200] flex flex-col"
      style={{
        background: 'linear-gradient(180deg, #FFFCF6 0%, #FAF7F2 100%)',
      }}
    >
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes mtSlideInRight {
          from { transform: translateX(40px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes mtSlideInLeft {
          from { transform: translateX(-40px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes mtFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .mt-card-next { animation: mtSlideInRight 0.32s cubic-bezier(0.32, 0.72, 0, 1); }
        .mt-card-prev { animation: mtSlideInLeft 0.32s cubic-bezier(0.32, 0.72, 0, 1); }
        .mt-fadein { animation: mtFadeIn 0.3s ease-out; }
        .mt-dot-pulse { animation: mtFadeIn 0.5s ease-out; }
      ` }} />

      {/* Header — step indicator + skip */}
      <div className="flex items-center justify-between px-5 pt-5 pb-3 mt-fadein">
        {/* Step dots */}
        <div className="flex items-center gap-1.5">
          {CARDS.map((_, i) => (
            <div
              key={i}
              className="rounded-full transition-all"
              style={{
                width: i === step ? 22 : 6,
                height: 5,
                background: i === step ? '#B8962E' : i < step ? 'rgba(184,150,46,0.5)' : 'rgba(184,150,46,0.2)',
              }}
            />
          ))}
        </div>

        {/* Skip button */}
        <button
          onClick={onClose}
          className="inline-flex items-center gap-1 rounded-full transition-colors"
          style={{
            padding: '4px 12px 4px 10px',
            background: 'transparent',
            border: '1px solid rgba(184,150,46,0.3)',
            color: '#9E9089',
            fontSize: '11px',
            letterSpacing: '0.08em',
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 600,
            textTransform: 'uppercase',
          }}
        >
          <span style={{ fontSize: '10px' }}>✕</span>
          <span>quitter</span>
        </button>
      </div>

      {/* Card content — slide animation on step change */}
      <div className="flex-1 flex flex-col items-center justify-center px-7 overflow-hidden">
        <div
          key={step}
          className={direction === 'next' ? 'mt-card-next' : 'mt-card-prev'}
          style={{ width: '100%', maxWidth: 460 }}
        >
          {/* Illustration mock-up de l'app */}
          {card.illustration && (
            <div className="mb-5">
              <Illustration kind={card.illustration} />
            </div>
          )}

          {/* Title */}
          <h2
            className="text-center mb-3"
            style={{
              color: '#1A1410',
              fontSize: '24px',
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 700,
              letterSpacing: '0.02em',
              lineHeight: 1.15,
            }}
          >
            {card.title}
          </h2>

          {/* Decorative separator */}
          <div
            className="mx-auto mb-4"
            style={{
              width: 40,
              height: 1,
              background: 'rgba(184,150,46,0.5)',
            }}
          />

          {/* Body */}
          <p
            className="text-center"
            style={{
              color: '#5A4E42',
              fontSize: '14.5px',
              lineHeight: 1.65,
              fontFamily: "'Cormorant Garamond', serif",
              letterSpacing: '0.01em',
            }}
          >
            {renderBody(card.body, card.highlight)}
          </p>
        </div>
      </div>

      {/* Bottom nav — prev / next */}
      <div className="flex items-center justify-between gap-3 px-5 pb-7 pt-4 mt-fadein">
        <button
          onClick={goPrev}
          disabled={step === 0}
          className="rounded-full transition-all"
          style={{
            padding: '11px 22px',
            border: '1px solid rgba(184,150,46,0.3)',
            color: step === 0 ? '#C8BCAD' : '#8A7428',
            cursor: step === 0 ? 'default' : 'pointer',
            background: 'transparent',
            fontSize: '13px',
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 600,
            letterSpacing: '0.05em',
            opacity: step === 0 ? 0.5 : 1,
          }}
        >
          ← Précédent
        </button>

        <button
          onClick={goNext}
          className="rounded-full transition-all"
          style={{
            padding: '12px 26px',
            background: 'linear-gradient(135deg, #C9A23A 0%, #B8962E 50%, #9E7E1F 100%)',
            color: '#FFFCF6',
            border: '1px solid rgba(158,126,31,0.6)',
            boxShadow: '0 4px 14px rgba(184,150,46,0.35)',
            fontSize: '14px',
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 700,
            letterSpacing: '0.05em',
            textShadow: '0 1px 1px rgba(80,55,10,0.25)',
          }}
        >
          {isLast ? 'Terminer ✦' : 'Suivant →'}
        </button>
      </div>
    </div>
  )
}
