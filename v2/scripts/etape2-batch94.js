const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 727, total = 2321

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

  // 735. hyw (حيي) — vivre, vie
  r = await ins('hyw', [
    {sense:'vivre',concept:'Vie/Animation',description:"Être animé et conscient — vivre (hayiya/yahyâ) est l'état de ce qui n'est pas mort. C'est permanent comme condition d'existence. Dieu fait vivre (yuhyî) et fait mourir. La hayât est la vie, l'opposé de la mort (mawt). Al-Hayy (le Vivant) est un des noms de Dieu, Celui qui possède la vie parfaite et éternelle. La vie terrestre est éphémère, la vie de l'au-delà est vraie."},
    {sense:'vie',concept:'Vie/Animation',description:''},
    {sense:'vivant',concept:'Vie/Animation',description:''},
  ])
  log(r,'hyw',{'Vie/Animation':"Être animé. Dieu fait vivre et mourir. Al-Hayy: vie éternelle."})

  // 736. rdd (ردد) — rendre, renvoyer, rejeter
  r = await ins('rdd', [
    {sense:'rendre',concept:'Retour/Rejet',description:"Faire revenir à l'origine — rendre (radda) est directionnel vers le point de départ. C'est ponctuel comme action. Rendez-les (ruddûhum) à Dieu et au Messager. Le radd est le renvoi, le rejet, la réfutation. Rejeter la vérité c'est la renvoyer d'où elle vient. Celui qui meurt est rendu (yuraddu) à Dieu. Le murtadd est l'apostat, celui qui revient sur ses pas."},
    {sense:'renvoyer',concept:'Retour/Rejet',description:''},
    {sense:'rejeter',concept:'Retour/Rejet',description:''},
    {sense:'réfuter',concept:'Retour/Rejet',description:''},
  ])
  log(r,'rdd',{'Retour/Rejet':"Faire revenir. Rendez à Dieu et au Messager. Murtadd: apostat."})

  // 737. shdd (شدد) — variante de šdd déjà traité
  r = await ins('shdd', [
    {sense:'serrer',concept:'Force',description:"Skip si déjà fait comme šdd."},
  ])

  // 738. lma (لما) — quand, lorsque
  r = await ins('lma', [
    {sense:'quand',concept:'Temps/Négation',description:"Conjonction temporelle ou de négation — lammâ introduit un moment passé ou exprime une négation emphatique. Quand (lammâ) ils virent la vérité. Lammâ peut aussi signifier pas encore dans certains contextes. La conjonction lie deux événements dans une relation de temporalité ou de condition. C'est le moment précis où quelque chose se produit."},
    {sense:'lorsque',concept:'Temps/Négation',description:''},
    {sense:'pas encore',concept:'Temps/Négation',description:''},
  ])
  log(r,'lma',{'Temps/Négation':"Conjonction temporelle. Quand ils virent la vérité. Moment précis."})

  // 739. kshy (خشي) — variante de ḫšy
  r = await ins('kshy', [
    {sense:'craindre',concept:'Crainte',description:"Skip si déjà fait comme ḫšy."},
  ])

  // 740. glf (غلف) — envelopper, incirconcis
  r = await ins('glf', [
    {sense:'envelopper',concept:'Enveloppe/Fermeture',description:"Mettre une couverture autour — envelopper (ghallafa) c'est recouvrir d'une gaine. Le ghilâf est l'étui, le fourreau. Nos cœurs sont enveloppés (ghulf), disent-ils, c'est-à-dire fermés, incapables de recevoir. L'aghlab est l'incirconcis au sens propre, mais le cœur ghalf est celui qui refuse la guidance, scellé dans son enveloppe."},
    {sense:'étui',concept:'Enveloppe/Fermeture',description:''},
    {sense:'cœur fermé',concept:'Enveloppe/Fermeture',description:''},
  ])
  log(r,'glf',{'Enveloppe/Fermeture':"Recouvrir d'une gaine. Cœurs enveloppés, fermés. Incapable de recevoir."})

  console.log('\n=== Batch 94 terminé — ' + done + '/2321 ===')
}
run().catch(e => { console.error('ERREUR:', e); process.exit(1) })
