import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import Link from 'next/link'
import './globals.css'
import TutorialGuide from '@/components/TutorialGuide'
import TutorialModal from '@/components/TutorialModal'
import DisplaySettings from '@/components/DisplaySettings'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const jetbrains = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  title: "Un Coran Arab · Une traduction éloquente du Coran",
  description: "Une traduction éloquente du Coran — chaque mot traduit depuis le texte, sans aucune source externe",
  openGraph: {
    title: "Un Coran Arab",
    description: "Une traduction eloquente du Coran",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Scheherazade+New:wght@400;700&family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.variable} ${jetbrains.variable} font-sans`}>
        <a href="#main" className="skip-link">Aller au contenu</a>
        <header
          className="sticky top-0 z-40"
          style={{
            background: '#FFFFFF',
            boxShadow: '0 1px 2px rgba(61,50,40,0.04), 0 4px 12px -8px rgba(184,150,46,0.18)',
          }}
        >
          {/* min-height fixe : empêche le header de grossir quand la police
              Cormorant Garamond charge en différé (fallback serif plus haut →
              header gros 1s → shrink). Le min-height absorbe le swap. */}
          <div
            className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 sm:py-4 flex items-center justify-between"
            style={{ minHeight: 'clamp(56px, 8vw, 72px)' }}
          >
            <Link
              href="/"
              title="Cliquer pour revenir à l'accueil"
              className="logo-link group inline-flex items-center gap-2.5 sm:gap-3.5 cursor-pointer transition-opacity duration-300 hover:opacity-90"
              aria-label="Retour à l'accueil — Un Coran Arab"
            >
              <span
                className="font-arabic"
                lang="ar"
                style={{ fontSize: 'clamp(16px, 2.4vw, 19px)', color: '#B8962E', lineHeight: 1 }}
              >
                قُرْآناً عَرَبِيًّا
              </span>
              <span
                aria-hidden="true"
                className="transition-transform duration-500 ease-out group-hover:rotate-180"
                style={{ color: '#B8962E', fontSize: '8px', display: 'inline-block' }}
              >
                ✦
              </span>
              <span
                className="logo-text-latin"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 'clamp(11px, 1.6vw, 14px)',
                  color: '#3D3228',
                  letterSpacing: '0.18em',
                  fontWeight: 500,
                  lineHeight: 1,
                }}
              >
                UN CORAN ARAB
              </span>
            </Link>
            <div className="flex items-center gap-2 sm:gap-2.5">
              <DisplaySettings />
              <TutorialModal />
            </div>
          </div>
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-0 right-0 h-px pointer-events-none"
            style={{
              background:
                'linear-gradient(90deg, transparent 0%, rgba(184,150,46,0.35) 20%, rgba(184,150,46,0.55) 50%, rgba(184,150,46,0.35) 80%, transparent 100%)',
            }}
          />
        </header>
        <main id="main" className="max-w-7xl mx-auto px-4 pt-2 pb-6">
          {children}
        </main>
        <TutorialGuide />
      </body>
    </html>
  )
}
