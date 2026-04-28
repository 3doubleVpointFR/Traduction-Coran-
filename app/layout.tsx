import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const mono = JetBrains_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Analyse Coranique',
  description: "Application d'analyse morphologique et thématique du Coran",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" dir="ltr">
      <head>
        {/* Scheherazade New — police arabe haute qualité (SIL Open Font License) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Scheherazade+New:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.variable} ${mono.variable} antialiased`}>
        <div className="min-h-screen flex flex-col">
          <header className="border-b border-parchment-300 bg-white/80 backdrop-blur-sm sticky top-0 z-40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center gap-4">
              <span className="font-semibold text-gray-900 tracking-tight">تحليل القرآن</span>
              <span className="text-gray-400 text-sm">Analyse Coranique</span>
            </div>
          </header>
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  )
}
