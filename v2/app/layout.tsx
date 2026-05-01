import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import Link from 'next/link'
import './globals.css'
import TutorialGuide from '@/components/TutorialGuide'

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
        <header className="sticky top-0 z-40" style={{ background: '#FFFFFF', borderBottom: '1px solid rgba(184,150,46,0.2)' }}>
          <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 transition-colors cursor-pointer hover:text-gold-700" aria-label="Retour à l'accueil — Un Coran Arab">
              <span className="font-arabic" lang="ar" style={{ fontSize: '18px', color: '#B8962E' }}>قُرْآناً عَرَبِيًّا</span>
              <span aria-hidden="true" style={{ color: '#B8962E', fontSize: '8px' }}>✦</span>
              <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '14px', color: '#3D3228', letterSpacing: '0.15em', fontWeight: 500 }}>
                UN CORAN ARAB
              </span>
            </Link>
          </div>
        </header>
        <main id="main" className="max-w-7xl mx-auto px-4 pt-2 pb-6">
          {children}
        </main>
        <TutorialGuide />
      </body>
    </html>
  )
}
