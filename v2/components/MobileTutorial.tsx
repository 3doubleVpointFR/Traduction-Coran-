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
}

const CARDS: Card[] = [
  {
    emoji: '✦',
    title: 'Un outil de méditation',
    body: "Plutôt qu'imposer une traduction figée, cet outil te montre tous les sens possibles de chaque mot du Coran à partir de sa racine arabe — pour que tu construises ton propre sens éclairé.",
    highlight: 'tous les sens possibles',
  },
  {
    emoji: '📖',
    title: 'Choisir une sourate',
    body: "Sur la page d'accueil, fais défiler ou cherche dans la liste des sourates explorables. Pour ce tour on prend la sourate 3 (Āl ʿImrān) — clique « Suivant » et tu y seras direct.",
  },
  {
    emoji: '✦',
    title: 'Tape un mot du verset',
    body: "Chaque mot souligné est interactif. Tape dessus pour ouvrir un panneau d'analyse complet — racine, sens étymologiques, regroupements de sens, fréquences dans le Coran.",
    highlight: 'mot souligné',
  },
  {
    emoji: '✦',
    title: 'Les regroupements de sens',
    body: "Les sens étymologiques sont groupés par concept (Divinité, Adoration, Refuge…). Tape sur un onglet pour voir les sens individuels qu'il contient. Les barres dorées montrent la fréquence de chaque concept dans tout le Coran.",
    highlight: 'fréquence dans tout le Coran',
  },
  {
    emoji: '✦',
    title: 'Retenu / Probable / Exclu',
    body: "Pour chaque verset, les regroupements sont classés selon 5 axes de cohérence : champ lexical, versets voisins, thème de la sourate, cohérence coranique d'ensemble, finalité du khalifa. Un seul est RETENU.",
    highlight: '5 axes de cohérence',
  },
  {
    emoji: '✦',
    title: 'Trois sections par verset',
    body: "Sous chaque verset, déplie les 3 sections : Démarche (analyse grammaticale), Justification (choix des mots), Critique (comparaison avec Hamidullah). À toi de juger ce qui te paraît le plus fidèle.",
    highlight: 'À toi de juger',
  },
  {
    emoji: '✦',
    title: 'À toi de méditer',
    body: "Tu as toutes les clés. Explore les sourates analysées, suis ton intuition, construis ton propre sens. La traduction n'est jamais le dernier mot — c'est une invitation à raisonner.",
    highlight: "n'est jamais le dernier mot",
  },
]

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
      // Termine le tuto et navigue vers la sourate 3 si pas déjà là
      onClose()
      if (typeof window !== 'undefined' && window.location.pathname !== '/surah/3') {
        router.push('/surah/3')
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
          {/* Big emoji or symbol */}
          <div
            className="text-center mb-5"
            style={{
              fontSize: '56px',
              color: '#B8962E',
              lineHeight: 1,
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            {card.emoji}
          </div>

          {/* Title */}
          <h2
            className="text-center mb-5"
            style={{
              color: '#1A1410',
              fontSize: '28px',
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
            className="mx-auto mb-6"
            style={{
              width: 50,
              height: 1,
              background: 'rgba(184,150,46,0.5)',
            }}
          />

          {/* Body */}
          <p
            className="text-center"
            style={{
              color: '#5A4E42',
              fontSize: '15.5px',
              lineHeight: 1.7,
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
