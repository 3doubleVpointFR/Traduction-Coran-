import { getSupabaseAdmin } from '@/lib/supabase'
import SurahGrid from '@/components/SurahGrid'
import TutorialModal from '@/components/TutorialModal'

export const dynamic = 'force-dynamic'
export const revalidate = 0
export const fetchCache = 'force-no-store'


const PIPELINE = [
  { step: 1, title: 'Identification', desc: 'Chaque mot est isolé : porteur de sens ou particule grammaticale', icon: '01' },
  { step: 2, title: 'Étymologie', desc: 'Tous les sens possibles de la racine sont rassemblés sans présupposé', icon: '02' },
  { step: 3, title: 'Analyse 5 axes', desc: 'Le sens le plus juste émerge du contexte, de la sourate, de la cohérence et de la finalité', icon: '03' },
  { step: 4, title: 'Reconstruction', desc: 'Une traduction est proposée — point de départ, pas point d\'arrivée', icon: '04' },
]

const AXES = [
  { num: 1, title: 'Champ lexical', desc: 'Les mots du verset sont-ils compatibles avec ce sens ?', highlight: false },
  { num: 2, title: 'Versets voisins', desc: 'Le contexte immédiat confirme-t-il ou contredit-il ?', highlight: false },
  { num: 3, title: 'Thème de la sourate', desc: "Ce sens s'inscrit-il dans le message global ?", highlight: false },
  { num: 4, title: 'Cohérence coranique', desc: 'Existe-t-il une contradiction avec un autre verset ?', highlight: false },
  { num: 5, title: 'Finalité du khalifa', desc: "Ce sens aide-t-il l'humain dans sa mission sur terre ?", highlight: true },
]

const TOOLS = [
  { icon: '◇', title: 'Étymologie pure', desc: 'Tous les sens étymologiques de chaque racine, depuis le Lane\'s Lexicon. Pas de filtres dogmatiques.' },
  { icon: '◈', title: 'Analyse mot-par-mot', desc: 'Clique sur n\'importe quel mot du verset pour voir son champ sémantique complet et le sens retenu en contexte.' },
  { icon: '◉', title: 'Justification transparente', desc: 'Chaque choix de traduction est expliqué — pourquoi ce sens, pas l\'autre. Tu peux refaire le raisonnement toi-même.' },
  { icon: '◊', title: 'Comparaison ouverte', desc: 'Notre traduction est mise en regard de Hamidullah. À toi de juger laquelle est la plus fidèle, ou de proposer la tienne.' },
]

const STEPS = [
  {
    num: '01',
    title: 'Choisis une sourate',
    desc: 'Sélectionne dans la grille en bas de page la sourate que tu veux explorer.',
  },
  {
    num: '02',
    title: 'Lis le verset arabe',
    desc: 'Sous le texte arabe, chaque mot est aligné avec sa phonétique et sa traduction française. Survole pour mieux voir la correspondance.',
  },
  {
    num: '03',
    title: 'Clique sur un mot',
    desc: 'Un panneau s\'ouvre à droite : tu y vois le sens retenu, tous les sens étymologiques de la racine, et l\'explication du choix pour ce verset précis.',
  },
  {
    num: '04',
    title: 'Déplie les sections',
    desc: 'Sous le verset, ouvre Démarche (analyse grammaticale), Justification (choix des mots) et Critique (comparaison avec Hamidullah).',
  },
  {
    num: '05',
    title: 'Forme ton propre sens',
    desc: 'Avec tous les éléments à disposition, tu peux suivre notre raisonnement, le contester, ou construire ta propre traduction.',
  },
]

async function getData() {
  const db = getSupabaseAdmin()
  const [versesAnalyzed, wordsAnalyzed, surahsRes] = await Promise.all([
    db.from('verse_analyses').select('id', { count: 'exact', head: true }).not('translation_arab', 'is', null),
    db.from('verse_word_analyses').select('id', { count: 'exact', head: true }),
    db.from('surahs').select('id, name_ar, name_latin, name_fr, verse_count').order('id'),
  ])

  // Récupère les surah_id qui possèdent au moins un verset analysé (translation_arab non-null).
  const doneSurahIds = new Set<number>()
  let offset = 0
  while (true) {
    const { data: chunk } = await db
      .from('verse_analyses')
      .select('verse_id, verses!inner(surah_id)')
      .not('translation_arab', 'is', null)
      .range(offset, offset + 999)
    if (!chunk || chunk.length === 0) break
    for (const row of chunk) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const sid = (row as any).verses?.surah_id
      if (sid) doneSurahIds.add(sid)
    }
    if (chunk.length < 1000) break
    offset += 1000
  }

  const allSurahs = surahsRes.data ?? []
  const surahs = allSurahs.filter(s => doneSurahIds.has(s.id))

  return {
    stats: {
      versesAnalyzed: versesAnalyzed.count ?? 0,
      wordsAnalyzed: wordsAnalyzed.count ?? 0,
      totalVerses: 6236,
    },
    surahs,
  }
}

export default async function HomePage() {
  const { stats, surahs } = await getData()
  const pct = Math.round((stats.versesAnalyzed / stats.totalVerses) * 100)

  return (
    <div className="space-y-7 pb-20">
      {/* ═══ HERO ═══ */}
      <section className="text-center pt-4">
        <h1 className="font-semibold" style={{ fontFamily: "'Cormorant Garamond', serif", color: '#B8962E', fontSize: '2.8rem', letterSpacing: '0.15em' }}>
          UN CORAN ARAB
        </h1>
        <div className="flex items-center justify-center gap-4 mt-2 mb-1" style={{ maxWidth: '280px', margin: '8px auto' }}>
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(184,150,46,0.4))' }} />
          <span style={{ color: '#B8962E', fontSize: '14px', lineHeight: 1 }}>✦</span>
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(to left, transparent, rgba(184,150,46,0.4))' }} />
        </div>
        <p style={{ fontFamily: "'Cormorant Garamond', serif", color: '#6B5E52', fontSize: '15.4px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase' as const }}>
          Un outil de méditation du Coran
        </p>
      </section>

      {/* ═══ MANIFESTE ═══ */}
      <section className="max-w-3xl mx-auto text-center space-y-3 pt-2">
        <p className="text-sm" style={{ color: '#1A1410', lineHeight: 1.7 }}>
          Ce site n&apos;est pas une traduction de plus.
        </p>
        <p className="text-sm max-w-xl mx-auto" style={{ color: '#5A4E42', lineHeight: 1.7, fontSize: '13.5px' }}>
          C&apos;est un <span className="font-semibold" style={{ color: '#8A7428' }}>outil de méditation</span> qui te permet d&apos;explorer
          le Coran <span className="italic">mot par mot, racine par racine</span>, depuis l&apos;étymologie pure jusqu&apos;au sens contextuel.
          La traduction qu&apos;on propose n&apos;est qu&apos;un point de départ — un raisonnement transparent que tu peux
          suivre, contester, ou refaire à ta manière.
        </p>
        <div className="pt-2">
          <TutorialModal />
        </div>
      </section>

      {/* ═══ KHALĪFA ═══ */}
      <section className="max-w-3xl mx-auto text-center space-y-2 pt-3">
        <p className="font-arabic text-xl md:text-2xl text-gold-700 leading-relaxed" dir="rtl">
          إِنِّى جَاعِلٌ فِى ٱلْأَرْضِ خَلِيفَةً
        </p>
        <p className="italic" style={{ color: '#6B5E52', fontSize: '14px' }}>
          &laquo; Je vais établir sur la terre un représentant &raquo; — sourate 2, signe 30
        </p>
        <p className="text-xs text-gray-600 max-w-xl mx-auto leading-relaxed">
          Le Coran a donné à l&apos;être humain une mission :{' '}
          <span className="font-semibold text-gold-700">
            être khalifa de Dieu sur terre — vivifier la terre, établir la justice, réaliser son adoration
          </span>.
          Chaque sens est éclairé à la lumière de cette finalité.
        </p>
      </section>

      {/* ═══ OUTILS / À TOI DE MÉDITER ═══ */}
      <section className="max-w-4xl mx-auto pt-3">
        <div className="flex items-center gap-4 mb-5">
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(184,150,46,0.3))' }} />
          <h2 className="text-sm font-semibold uppercase tracking-widest text-center" style={{ color: '#8A7428', fontFamily: "'Cormorant Garamond', serif", fontSize: '17px', letterSpacing: '0.2em', fontWeight: 600 }}>
            À toi de méditer
          </h2>
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(to left, transparent, rgba(184,150,46,0.3))' }} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {TOOLS.map((tool) => (
            <div
              key={tool.title}
              className="rounded-xl p-4 transition-colors hover:shadow-md"
              style={{
                background: '#FAF7F2',
                border: '1px solid rgba(184,150,46,0.2)',
              }}
            >
              <div className="flex items-start gap-3">
                <span style={{ color: '#B8962E', fontSize: '20px', lineHeight: 1 }}>{tool.icon}</span>
                <div>
                  <h3 className="font-semibold" style={{ color: '#1A1410', fontSize: '13px' }}>{tool.title}</h3>
                  <p style={{ fontSize: '11.5px', lineHeight: 1.55, marginTop: '4px', color: '#6B5E52' }}>{tool.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs italic text-center mt-4" style={{ color: '#9E9089', fontSize: '11px' }}>
          Si notre traduction ne te convainc pas, tu as toutes les pièces pour proposer la tienne.
        </p>
      </section>

      {/* ═══ PIPELINE ═══ */}
      <section className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-5">
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(184,150,46,0.3))' }} />
          <h2 className="text-sm font-semibold uppercase tracking-widest text-center" style={{ color: '#8A7428', fontFamily: "'Cormorant Garamond', serif", fontSize: '17px', letterSpacing: '0.2em', fontWeight: 600 }}>
            Comment chaque verset est analysé
          </h2>
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(to left, transparent, rgba(184,150,46,0.3))' }} />
        </div>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-center gap-2 md:gap-0">
          {PIPELINE.map((p, i) => (
            <div key={p.step} className="flex items-center">
              <div className="text-center px-3">
                <h3 className="font-semibold text-gray-800" style={{ fontSize: '13px' }}>{p.title}</h3>
                <p className="text-gray-400 leading-relaxed mt-0.5" style={{ fontSize: '11px' }}>{p.desc}</p>
              </div>
              {i < PIPELINE.length - 1 && (
                <span className="hidden md:block text-lg font-light" style={{ color: '#B8962E' }}>→</span>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ═══ 5 AXES ═══ */}
      <section className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-5">
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(184,150,46,0.3))' }} />
          <h2 className="text-sm font-semibold uppercase tracking-widest text-center" style={{ color: '#8A7428', fontFamily: "'Cormorant Garamond', serif", fontSize: '17px', letterSpacing: '0.2em', fontWeight: 600 }}>
            5 éclairages pour méditer un sens
          </h2>
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(to left, transparent, rgba(184,150,46,0.3))' }} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 items-stretch">
          {AXES.map((axe) => (
            <div
              key={axe.num}
              className="rounded-xl p-4 flex flex-col transition-colors hover:shadow-md cursor-default"
              style={{
                background: axe.highlight ? '#F3EDD8' : '#FAF7F2',
                border: `1px solid rgba(184,150,46,${axe.highlight ? '0.4' : '0.2'})`,
              }}
            >
              <span className="font-light" style={{ color: '#B8962E', fontSize: '2rem', lineHeight: 1 }}>{axe.num}</span>
              <h3 className="font-semibold mt-1" style={{ color: '#1A1410', fontSize: '13px' }}>{axe.title}</h3>
              <p style={{ fontSize: '11px', lineHeight: 1.5, marginTop: '3px', color: '#6B5E52' }}>{axe.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ PROGRESSION ═══ */}
      <section className="max-w-3xl mx-auto text-center space-y-6">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
          Progression de l&apos;exploration
        </h2>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <p className="text-4xl font-bold text-gray-800">{stats.versesAnalyzed}</p>
            <p className="text-sm text-gray-500">versets analysés</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-gray-800">{stats.wordsAnalyzed}</p>
            <p className="text-sm text-gray-500">mots étymologiés</p>
          </div>
        </div>
        <div className="space-y-2">
          <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-gold-500 rounded-full transition-colors"
              style={{ width: `${Math.max(1, pct)}%` }}
            />
          </div>
          <p className="text-xs text-gray-400">
            {stats.versesAnalyzed} / {stats.totalVerses} versets ({pct}%)
          </p>
        </div>
      </section>

      {/* ═══ SOURATES ═══ */}
      <section className="max-w-4xl mx-auto" data-tour-surah-grid="1">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-2">
          Sourates explorables
        </h2>
        <p className="text-xs italic mb-6" style={{ color: '#9E9089' }}>
          Choisis une sourate pour commencer ton exploration
        </p>
        <SurahGrid surahs={surahs} />
      </section>

      {/* ═══ FOOTER ═══ */}
      <section className="max-w-2xl mx-auto text-center border-t border-parchment-200 pt-8">
        <p className="text-xs" style={{ color: '#9E9089', lineHeight: 1.6 }}>
          Un Coran Arab · Outil de méditation et d&apos;analyse étymologique du Coran
        </p>
        <p className="text-xs italic mt-1" style={{ color: '#B8B0A6', fontSize: '10.5px' }}>
          La traduction proposée n&apos;est jamais le dernier mot — c&apos;est une invitation à raisonner.
        </p>
      </section>
    </div>
  )
}
