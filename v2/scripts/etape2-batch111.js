const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 808, total = 2321

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

  // 821. ghmr (غمر) — submerger, plonger
  r = await ins('ghmr', [
    {sense:'submerger',concept:'Immersion/Profondeur',description:"Recouvrir entièrement d'eau — submerger (ghamara) c'est noyer sous le flot. C'est directionnel vers le bas et l'engloutissement. Les affres (ghamarât) de la mort. L'agonie est comme une submersion de l'âme. Le ghamr est la profondeur où l'on perd pied. Être submergé par les soucis, par les épreuves, c'est être englouti par ce qui dépasse."},
    {sense:'plonger',concept:'Immersion/Profondeur',description:''},
    {sense:'affres',concept:'Immersion/Profondeur',description:''},
  ])
  log(r,'ghmr',{'Immersion/Profondeur':"Recouvrir d'eau. Les affres de la mort. Englouti par ce qui dépasse."})

  // 822. zyt (زيت) — huile d'olive
  r = await ins('zyt', [
    {sense:'huile d\'olive',concept:'Onction/Bienfait',description:"Extrait du fruit de l'olivier — l'huile (zayt) est tirée de l'olive, fruit béni. C'est permanent comme produit. Un olivier béni (mubâraka) dont l'huile (zaytuhâ) brillerait presque sans feu. L'huile d'olive est nourriture, lumière et onction. Zaytûn est l'olivier, arbre méditerranéen symbole de paix et de bénédiction."},
    {sense:'olive',concept:'Onction/Bienfait',description:''},
    {sense:'olivier',concept:'Onction/Bienfait',description:''},
  ])
  log(r,'zyt',{'Onction/Bienfait':"Extrait de l'olive. Olivier béni. Huile qui brillerait presque."})

  // 823. ajal (أجل) — terme, délai
  r = await ins('ajal', [
    {sense:'terme',concept:'Échéance/Destin',description:"Moment fixé pour la fin — le terme (ajal) est l'échéance fixée par Dieu. C'est permanent comme décret. Quand leur terme (ajaluhum) vient, ils ne peuvent ni le retarder ni l'avancer. Chaque âme a un ajal, un moment de mort fixé. L'ajal musamma est le terme nommé, connu de Dieu seul. Le délai accordé a une fin inéluctable."},
    {sense:'délai',concept:'Échéance/Destin',description:''},
    {sense:'échéance',concept:'Échéance/Destin',description:''},
  ])
  log(r,'ajal',{'Échéance/Destin':"Moment fixé. Quand leur terme vient. Chaque âme a un ajal."})

  // 824. hyb (هيب) — craindre, respect
  r = await ins('hyb', [
    {sense:'craindre',concept:'Révérence/Crainte',description:"Éprouver du respect mêlé de crainte — la hayba est la crainte révérencielle, le respect qui fait trembler. C'est intérieur. Il les craignit (fa-awjasa minhum khîfatan). La hayba est la majesté qui inspire le respect, l'autorité qui impose sans violence. Celui qui a la hayba est redouté et respecté. Dieu est digne de la plus grande hayba."},
    {sense:'respect',concept:'Révérence/Crainte',description:''},
    {sense:'majesté',concept:'Révérence/Crainte',description:''},
  ])
  log(r,'hyb',{'Révérence/Crainte':"Respect mêlé de crainte. Majesté qui inspire. Digne de la plus grande hayba."})

  // 825. nshr (نشر) — répandre, ressusciter
  r = await ins('nshr', [
    {sense:'répandre',concept:'Diffusion/Résurrection',description:"Étendre ce qui était replié — répandre (nashara) c'est déployer, diffuser. C'est directionnel vers l'extérieur. C'est Lui qui répand (yanshuru) Sa miséricorde. Le nashr est aussi la résurrection, le fait de ranimer les morts. Dieu ressuscite (yunshiru) les morts. Le jour du jugement est yawm an-nushûr, jour où tous seront répandus hors de leurs tombes."},
    {sense:'déployer',concept:'Diffusion/Résurrection',description:''},
    {sense:'ressusciter',concept:'Diffusion/Résurrection',description:''},
  ])
  log(r,'nshr',{'Diffusion/Résurrection':"Étendre ce qui était replié. Il répand Sa miséricorde. Jour du nushûr."})

  console.log('\n=== Batch 111 terminé — ' + done + '/2321 ===')
}
run().catch(e => { console.error('ERREUR:', e); process.exit(1) })
