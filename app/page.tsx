import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 text-center">
      <h1 className="quran-text-lg mb-4">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Analyse Coranique</h2>
      <p className="text-gray-500 mb-12 max-w-xl mx-auto">
        Exploration morphologique, thématique et linguistique du Coran —
        alimenté par le Quranic Arabic Corpus.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
        <Link
          href="/surah/1"
          className="side-panel p-6 hover:shadow-md transition-shadow group"
        >
          <div className="text-gold-600 text-3xl mb-2 font-arabic" dir="rtl">الفاتحة</div>
          <div className="font-medium text-gray-800 group-hover:text-gold-700">Al-Fatiha</div>
          <div className="text-sm text-gray-400 mt-1">Sourate 1 · 7 versets</div>
        </Link>

        <Link
          href="/surah/2"
          className="side-panel p-6 hover:shadow-md transition-shadow group"
        >
          <div className="text-gold-600 text-3xl mb-2 font-arabic" dir="rtl">البقرة</div>
          <div className="font-medium text-gray-800 group-hover:text-gold-700">Al-Baqara</div>
          <div className="text-sm text-gray-400 mt-1">Sourate 2 · 286 versets</div>
        </Link>

        <Link
          href="/roots"
          className="side-panel p-6 hover:shadow-md transition-shadow group"
        >
          <div className="text-gold-600 text-3xl mb-2 font-arabic" dir="rtl">ك·ت·ب</div>
          <div className="font-medium text-gray-800 group-hover:text-gold-700">Index des racines</div>
          <div className="text-sm text-gray-400 mt-1">Exploration morphologique</div>
        </Link>
      </div>
    </div>
  )
}
