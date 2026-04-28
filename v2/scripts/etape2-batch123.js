const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 867, total = 2321

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
  r = await ins("'dn", [{sense:'oreille',concept:'Audition',description:"Skip."}])

  // 883. m l k (ملك) — posséder, royaume, ange
  r = await ins('m l k', [
    {sense:'posséder',concept:'Souveraineté/Possession',description:"Avoir autorité sur quelque chose — posséder (malaka) c'est avoir le mulk, le pouvoir et la propriété. C'est permanent comme attribut royal. À Lui appartient le royaume (al-mulk) des cieux et de la terre. Al-Malik est le Roi, al-Mâlik le Possesseur. Le malak (ange) est aussi de cette racine : messager du Souverain. Toute souveraineté humaine est déléguée par le Roi absolu."},
    {sense:'royaume',concept:'Souveraineté/Possession',description:''},
    {sense:'ange',concept:'Souveraineté/Possession',description:''},
  ])
  log(r,'m l k',{'Souveraineté/Possession':"Avoir autorité. À Lui le royaume. Al-Malik le Roi, malak l'ange."})

  // 884. wdae (ودع) — laisser, abandonner
  r = await ins('wdae', [
    {sense:'laisser',concept:'Abandon/Dépôt',description:"Cesser de s'occuper de quelque chose — laisser (wada'a) c'est abandonner ou confier. C'est ponctuel comme acte. Ton Seigneur ne t'a pas abandonné (mâ wadda'aka). Le Prophète n'est pas délaissé par Dieu. Le wadî'a est le dépôt confié, ce qu'on laisse en garde. Laisser peut être négatif (abandon) ou positif (confier à qui de droit)."},
    {sense:'abandonner',concept:'Abandon/Dépôt',description:''},
    {sense:'déposer',concept:'Abandon/Dépôt',description:''},
  ])
  log(r,'wdae',{'Abandon/Dépôt':"Cesser de s'occuper. Ton Seigneur ne t'a pas abandonné. Dépôt confié."})

  // 885. njm (نجم) — étoile, astre
  r = await ins('njm', [
    {sense:'étoile',concept:'Astre/Guidance',description:"Corps céleste lumineux — l'étoile (najm) guide dans la nuit. C'est permanent comme réalité cosmique. Par l'étoile (al-najm) quand elle décline. Les étoiles sont signes pour la navigation et rappels de la grandeur du Créateur. Le najm est aussi la portion révélée du Coran, descendue graduellement (nujûman). Les astres et la révélation sont tous deux guidance dans les ténèbres."},
    {sense:'astre',concept:'Astre/Guidance',description:''},
    {sense:'portion',concept:'Astre/Guidance',description:''},
  ])
  log(r,'njm',{'Astre/Guidance':"Corps céleste lumineux. Par l'étoile quand elle décline. Guidance dans les ténèbres."})

  // 886. dhw t (ذوت) — essence, possesseur (variante)
  r = await ins('dhw t', [
    {sense:'possesseur de',concept:'Possession/Attribut',description:"Celui ou celle qui détient une qualité — dhû/dhât désigne le possesseur d'un attribut. C'est permanent comme outil grammatical. Détenteur (dhû) de puissance. L'arbre dhât al-shawk, celui aux épines. La formule relie une entité à sa qualité caractéristique. Dieu est Dhû l-Jalâl wa l-Ikrâm, Possesseur de majesté et de générosité."},
    {sense:'détenteur',concept:'Possession/Attribut',description:''},
    {sense:'celui qui a',concept:'Possession/Attribut',description:''},
  ])
  log(r,'dhw t',{'Possession/Attribut':"Possesseur d'une qualité. Dhû l-Jalâl. L'arbre aux épines."})

  // 887. qnw (قنو) — acquérir, grappe
  r = await ins('qnw', [
    {sense:'acquérir',concept:'Acquisition/Richesse',description:"Obtenir et conserver — acquérir (qanâ) c'est faire sien ce qu'on n'avait pas. C'est ponctuel comme acte et permanent comme possession. Il a enrichi (aqnâ) et fait acquérir. Dieu donne la richesse et la capacité d'acquérir. Le qinw est la grappe de dattes, richesse du palmier. L'acquisition doit mener à la gratitude, non à l'avarice."},
    {sense:'enrichir',concept:'Acquisition/Richesse',description:''},
    {sense:'grappe',concept:'Acquisition/Richesse',description:''},
  ])
  log(r,'qnw',{'Acquisition/Richesse':"Obtenir et conserver. Il a enrichi. Grappe de dattes, richesse du palmier."})

  console.log('\n=== Batch 123 terminé — ' + done + '/2321 ===')
}
run().catch(e => { console.error('ERREUR:', e); process.exit(1) })
