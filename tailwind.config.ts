import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        arabic: ['Scheherazade New', 'Noto Naskh Arabic', 'serif'],
        latin: ['var(--font-geist-sans)', 'sans-serif'],
      },
      colors: {
        gold: {
          50:  '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        parchment: {
          50:  '#fdfaf3',
          100: '#faf3e0',
          200: '#f5e6c0',
          300: '#efd49a',
          400: '#e8bf6e',
        },
      },
      direction: {
        rtl: 'rtl',
        ltr: 'ltr',
      },
    },
  },
  plugins: [],
}

export default config
