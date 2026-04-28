'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function TutorialModal() {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [seen, setSeen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setSeen(localStorage.getItem('tuto-seen') === '1')
    // Détection mobile : on cache le bouton du tutoriel sur petit écran
    // (le tutoriel guide est conçu pour desktop avec hovers, panneau latéral, etc.)
    const mq = window.matchMedia('(max-width: 1023px)')
    const update = () => setIsMobile(mq.matches)
    update()
    mq.addEventListener('change', update)
    // Prefetch /surah/3 dès le mount pour que la nav du tutoriel soit instantanée
    router.prefetch('/surah/3')
    return () => mq.removeEventListener('change', update)
  }, [router])

  // Sur mobile : bouton caché (le tutoriel n'est pas adapté pour l'instant)
  if (isMobile) return null

  const startTour = () => {
    // S'assure que /surah/3 est prêt avant la nav (no-op si déjà prefetché)
    router.prefetch('/surah/3')
    localStorage.setItem('tuto-active', '1')
    localStorage.setItem('tuto-step', '0')
    setOpen(false)
    // Notifie TutorialGuide qui écoute cet event
    window.dispatchEvent(new Event('tuto-changed'))
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="tuto-cta-btn inline-flex items-center gap-2 rounded-full transition-all"
        style={{
          padding: '11px 22px',
          fontSize: '14px',
          fontFamily: "'Cormorant Garamond', serif",
          fontWeight: 700,
          letterSpacing: '0.06em',
          background: 'linear-gradient(135deg, #C9A23A 0%, #B8962E 50%, #9E7E1F 100%)',
          color: '#FFFCF6',
          border: '1px solid rgba(158,126,31,0.6)',
          boxShadow: '0 4px 14px rgba(184,150,46,0.45), 0 0 0 4px rgba(184,150,46,0.12)',
          textShadow: '0 1px 1px rgba(80,55,10,0.3)',
        }}
      >
        <span style={{ fontSize: '16px' }}>✦</span>
        {seen ? 'Refaire la visite guidée' : 'Faire la visite guidée (1 min)'}
        <span style={{ fontSize: '14px', marginLeft: '2px' }}>→</span>
      </button>

      <style jsx>{`
        .tuto-cta-btn {
          animation: tutoPulse 2.4s ease-in-out infinite;
        }
        .tuto-cta-btn:hover {
          transform: translateY(-1px) scale(1.02);
          box-shadow: 0 6px 20px rgba(184, 150, 46, 0.6), 0 0 0 6px rgba(184, 150, 46, 0.18) !important;
          animation-play-state: paused;
        }
        @keyframes tutoPulse {
          0%, 100% {
            box-shadow: 0 4px 14px rgba(184, 150, 46, 0.45), 0 0 0 4px rgba(184, 150, 46, 0.12);
          }
          50% {
            box-shadow: 0 4px 18px rgba(184, 150, 46, 0.6), 0 0 0 8px rgba(184, 150, 46, 0.22);
          }
        }
      `}</style>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: 'rgba(26, 20, 16, 0.6)' }}
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-full max-w-md rounded-2xl shadow-2xl overflow-hidden"
            style={{ background: '#FFFCF6', border: '1px solid rgba(184,150,46,0.3)' }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-4 transition-colors hover:opacity-70"
              style={{ color: '#9E9089', fontSize: '11px', letterSpacing: '0.05em' }}
            >
              fermer ✕
            </button>

            <div className="p-7 pt-10 text-center">
              <div className="text-2xl mb-2" style={{ color: '#B8962E' }}>✦</div>
              <h3 className="font-semibold mb-3" style={{ color: '#1A1410', fontSize: '20px', fontFamily: "'Cormorant Garamond', serif", letterSpacing: '0.05em' }}>
                Visite guidée
              </h3>
              <p className="text-sm mb-5" style={{ color: '#5A4E42', lineHeight: 1.6 }}>
                Je vais t&apos;emmener directement sur une sourate et te montrer pas à pas comment méditer un verset.
              </p>

              <div className="rounded-lg p-4 mb-5 text-left" style={{ background: '#FAF7F2', border: '1px solid rgba(184,150,46,0.2)' }}>
                <div className="text-[10px] uppercase tracking-widest mb-2" style={{ color: '#B8962E' }}>Au programme</div>
                <ul className="space-y-1.5 text-xs" style={{ color: '#5A4E42' }}>
                  <li>• Choisir une sourate</li>
                  <li>• Voir un verset aligné mot à mot</li>
                  <li>• Cliquer sur un mot pour l&apos;analyser</li>
                  <li>• Lire le panneau étymologique</li>
                  <li>• Survoler les regroupements de sens</li>
                  <li>• Lire la barre de fréquence du regroupement</li>
                  <li>• Comprendre la phrase récap de l&apos;analyse</li>
                  <li>• Naviguer vers d&apos;autres versets cités</li>
                  <li>• Comprendre retenu / probable / exclu</li>
                  <li>• Déplier les sections explicatives</li>
                  <li>• Comparer avec la traduction Hamidullah</li>
                </ul>
                <div className="text-[10px] italic mt-3" style={{ color: '#9E9089' }}>
                  ✕ Tu peux quitter à tout moment
                </div>
              </div>

              <div className="flex items-center justify-center gap-3">
                <button
                  onClick={() => setOpen(false)}
                  className="text-xs px-4 py-2 rounded-full transition-colors"
                  style={{
                    border: '1px solid rgba(184,150,46,0.3)',
                    color: '#8A7428',
                    background: 'transparent',
                  }}
                >
                  Plus tard
                </button>
                <button
                  onClick={startTour}
                  className="text-xs px-5 py-2 rounded-full transition-colors hover:shadow-md font-semibold"
                  style={{
                    background: '#B8962E',
                    color: '#FFFCF6',
                    letterSpacing: '0.05em',
                  }}
                >
                  C&apos;est parti ✦
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
