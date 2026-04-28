const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 774, total = 2321

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

  // 786. ezb (عزب) — être loin, célibataire
  r = await ins('ezb', [
    {sense:'être loin',concept:'Éloignement/Solitude',description:"S'absenter, être séparé — 'azaba c'est être éloigné, absent. Le 'azab est aussi le célibataire, celui qui est sans conjoint. Rien ne Lui échappe ('azaba 'anhu) du poids d'un atome. Dieu connaît tout, rien ne Lui est caché ni éloigné. Ce qui est loin est absent de la conscience mais jamais de la science divine."},
    {sense:'échapper',concept:'Éloignement/Solitude',description:''},
    {sense:'célibataire',concept:'Éloignement/Solitude',description:''},
  ])
  log(r,'ezb',{'Éloignement/Solitude':"Être absent, séparé. Rien ne Lui échappe. Dieu connaît tout."})

  // 787. jew (جوع) — faim
  r = await ins('jew', [
    {sense:'faim',concept:'Privation/Besoin',description:"Besoin de nourriture — la faim (jû') est la sensation du manque de nourriture. C'est intérieur et ponctuel mais peut devenir chronique. Nous les éprouverons par la peur et la faim (al-jû'). La faim est une épreuve qui teste la patience. Quraysh fut préservé de la faim et de la peur. Le jâ'i' est celui qui a faim."},
    {sense:'affamé',concept:'Privation/Besoin',description:''},
    {sense:'famine',concept:'Privation/Besoin',description:''},
  ])
  log(r,'jew',{'Privation/Besoin':"Besoin de nourriture. Par la peur et la faim. Épreuve de patience."})

  // 788. qsy (قصى) — être éloigné, extrême
  r = await ins('qsy', [
    {sense:'être éloigné',concept:'Distance/Extrémité',description:"Se trouver loin — qasâ/yaqsâ c'est être à distance. L'aqsâ est le plus éloigné. La mosquée al-Aqsâ (la plus éloignée) est celle de Jérusalem, destination du voyage nocturne. Le qâsî est ce qui est aux confins, à l'extrémité. S'éloigner c'est se tenir à distance de ce qui est proche, parfois par sagesse, parfois par fuite."},
    {sense:'lointain',concept:'Distance/Extrémité',description:''},
    {sense:'extrême',concept:'Distance/Extrémité',description:''},
  ])
  log(r,'qsy',{'Distance/Extrémité':"Être à distance. Al-Aqsâ: la plus éloignée. Aux confins."})

  // 789. wdd (ودد) — aimer, affection
  r = await ins('wdd', [
    {sense:'aimer',concept:'Amour/Affection',description:"Éprouver de l'affection pour quelqu'un — aimer (wadda/yawaddu) est l'inclination du cœur vers l'aimé. C'est intérieur et peut être permanent. Dieu est le Très-Affectueux (al-Wadûd). Le wudd est l'amour tendre, l'affection sincère. Ils voudraient (yawaddûna) que vous mécroiyez. Le souhait (widâd) est l'expression du désir intérieur."},
    {sense:'affection',concept:'Amour/Affection',description:''},
    {sense:'souhaiter',concept:'Amour/Affection',description:''},
  ])
  log(r,'wdd',{'Amour/Affection':"Inclination du cœur. Al-Wadûd. Amour tendre et sincère."})

  // 790. jld (جلد) — peau, fouetter
  r = await ins('jld', [
    {sense:'peau',concept:'Enveloppe/Châtiment',description:"Revêtement externe du corps — la peau (jild) est ce qui enveloppe la chair. C'est permanent comme organe. Leurs peaux témoigneront (shahadat julûduhum) contre eux. La peau est aussi le lieu du châtiment : fouettez (ijlidû) le fornicateur de cent coups. Le jald est la flagellation, le châtiment corporel qui atteint la peau."},
    {sense:'fouetter',concept:'Enveloppe/Châtiment',description:''},
    {sense:'flagellation',concept:'Enveloppe/Châtiment',description:''},
  ])
  log(r,'jld',{'Enveloppe/Châtiment':"Revêtement du corps. Leurs peaux témoigneront. Fouettez de cent coups."})

  console.log('\n=== Batch 104 terminé — ' + done + '/2321 ===')
}
run().catch(e => { console.error('ERREUR:', e); process.exit(1) })
