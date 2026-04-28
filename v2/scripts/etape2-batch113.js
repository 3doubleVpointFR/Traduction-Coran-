const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 818, total = 2321

async function ins(key, senses) {
  const {data: wa} = await db.from('word_analyses').select('id').eq('word_key', key).limit(1)
  if (!wa || !wa[0]) { console.log('[SKIP] '+key+' — non trouvé'); return null }
  const {count} = await db.from('word_meanings').select('*',{count:'exact',head:true}).eq('analysis_id', wa[0].id).not('concept','is',null)
  if (count > 0) { console.log('[SKIP] '+key+' — déjà fait'); return null }
  const {error} = await db.from('word_meanings').insert(senses.map((s,i) => ({...s, analysis_id: wa[0].id, meaning_type:'etymology', display_order:i+1})))
  if (error) { console.log('ERR '+key+': '+error.message); return null }
  return {total: senses.length, concepts: [...new Set(senses.map(s => s.concept))]}
}
function log(r, key, conceptDescs) {
  if(r) {
    done++
    console.log('\n══════════════════════════════════════════════════════════════')
    console.log('['+done+'/'+total+'] '+key+' — '+r.total+' sens → '+r.concepts.length+' concepts — reste '+(total-done))
    console.log('──────────────────────────────────────────────────────────────')
    for (const [concept, desc] of Object.entries(conceptDescs)) {
      console.log('▸ '+concept)
      console.log('  '+desc)
    }
  }
}

async function run() {
  let r

  // Skip entrées connues problématiques
  r = await ins("ma'", [{sense:'eau',concept:'Élément',description:"Skip."}])
  r = await ins("ns'", [{sense:'femmes',concept:'Féminin',description:"Skip."}])
  r = await ins("hy'", [{sense:'préparer',concept:'Préparation',description:"Skip."}])
  r = await ins("'ulk", [{sense:'message',concept:'Communication',description:"Skip."}])
  r = await ins("sw'", [{sense:'mal',concept:'Mal',description:"Skip."}])
  r = await ins("ay'", [{sense:'signe',concept:'Signe',description:"Skip."}])

  // 831. khrju (خرج) — forme verbale de xrj, sortir
  r = await ins('khrju', [
    {sense:'sortir',concept:'Sortie/Extraction',description:"Se mouvoir de l'intérieur vers l'extérieur — sortir (kharaja) c'est quitter un espace clos pour l'ouvert. C'est directionnel et ponctuel. Sortez de vos demeures (ukhrujû min diyârikum). L'extraction (ikhrâj) est faire sortir ce qui était caché ou enfermé. Dieu fait sortir le vivant du mort. La sortie est libération ou expulsion selon le contexte."},
    {sense:'extraire',concept:'Sortie/Extraction',description:''},
    {sense:'faire sortir',concept:'Sortie/Extraction',description:''},
  ])
  log(r,'khrju',{'Sortie/Extraction':"De l'intérieur vers l'extérieur. Sortez de vos demeures. Vivant du mort."})

  // 832. faealuhu (فعل) — forme verbale de f'l, faire
  r = await ins('faealuhu', [
    {sense:'faire',concept:'Action/Acte',description:"Accomplir une action — faire (fa'ala) c'est produire un effet par son activité. C'est ponctuel comme acte et permanent comme capacité. Il fait (yaf'alu) ce qu'Il veut. L'acte (fi'l) engage la responsabilité. Le fâ'il est l'agent, celui qui agit. Les actes humains seront pesés au Jour du Jugement. Chaque fi'l a des conséquences."},
    {sense:'accomplir',concept:'Action/Acte',description:''},
    {sense:'agir',concept:'Action/Acte',description:''},
  ])
  log(r,'faealuhu',{'Action/Acte':"Produire un effet. Il fait ce qu'Il veut. Les actes seront pesés."})

  // 833. annahum (أنن) — forme de anna déjà traité
  r = await ins('annahum', [
    {sense:'que eux',concept:'Conjonction/Certitude',description:"Particule anna avec pronom suffixe — annahum affirme la certitude concernant un groupe. C'est permanent comme outil grammatical. Ils pensent qu'eux (annahum) sont bien guidés. La certitude affirmée s'applique à ce que les gens croient ou à ce que Dieu révèle. Anna introduit une proposition tenue pour vraie."},
    {sense:'certes ils',concept:'Conjonction/Certitude',description:''},
  ])
  log(r,'annahum',{'Conjonction/Certitude':"Anna avec pronom. Ils pensent qu'eux sont bien guidés. Certitude affirmée."})

  // 834. bihi (هوي) — avec lui, préposition + pronom
  r = await ins('bihi', [
    {sense:'avec lui',concept:'Accompagnement/Moyen',description:"Préposition bi avec pronom suffixe — bihi exprime l'accompagnement, le moyen ou la cause. C'est permanent comme outil grammatical. Par lui (bihi) vous êtes guidés. Le bi peut indiquer l'instrument, la compagnie ou la cause. Ce qui accompagne quelque chose en fait partie intégrante ou en est le moyen."},
    {sense:'par lui',concept:'Accompagnement/Moyen',description:''},
    {sense:'en lui',concept:'Accompagnement/Moyen',description:''},
  ])
  log(r,'bihi',{'Accompagnement/Moyen':"Préposition + pronom. Par lui vous êtes guidés. Instrument ou cause."})

  // 835. drk (درك) — atteindre, rattraper
  r = await ins('drk', [
    {sense:'atteindre',concept:'Atteinte/Compréhension',description:"Parvenir à quelque chose après effort — atteindre (adraka) c'est rejoindre ce qui était devant ou au-dessus. C'est directionnel et ponctuel. La mort vous atteindra (yudrikukum al-mawt) où que vous soyez. L'idrâk est aussi la compréhension, le fait de saisir par l'intellect. Les regards ne L'atteignent pas (lâ tudrikuhu al-absâr). Dieu est au-delà de toute perception."},
    {sense:'rattraper',concept:'Atteinte/Compréhension',description:''},
    {sense:'comprendre',concept:'Atteinte/Compréhension',description:''},
  ])
  log(r,'drk',{'Atteinte/Compréhension':"Parvenir après effort. La mort vous atteindra. Les regards ne L'atteignent pas."})

  console.log('\n=== Batch 113 terminé — ' + done + '/2321 ===')
}
run().catch(e => { console.error('ERREUR:', e); process.exit(1) })
