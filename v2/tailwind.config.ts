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
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        gold: {
          50:  '#FBF6E3',
          100: '#F3EDD8',
          200: '#E8DAA9',
          300: '#D8BE6E',
          400: '#C9A23A',
          500: '#B8962E',
          600: '#9E7E1F',
          700: '#8A7428',
          800: '#6E5C1F',
          900: '#4D4015',
        },
        parchment: {
          50:  '#FFFCF6',
          100: '#FAF7F2',
          200: '#F3ECDF',
          300: '#E8DCC4',
          400: '#D8C499',
        },
        ink: {
          900: '#1A1410',
          700: '#3D3228',
          600: '#5A4E42',
          500: '#6B5E52',
          400: '#8A7E72',
          300: '#A89C90',
          200: '#C9C0B5',
        },
      },
    },
  },
  plugins: [],
}

export default config
