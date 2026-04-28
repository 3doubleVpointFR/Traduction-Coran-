const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 699, total = 2321

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

  // 705. šdd (شدد) — serrer, force, sévérité
  r = await ins('šdd', [
    {sense:'serrer',concept:'Force/Intensité',description:"Rendre ferme et fort — serrer (shadda) est l'action de renforcer, de rendre plus intense. C'est directionnel vers la solidité. Nous avons affermi (shadadnâ) leur cœur. La shidda est la force, l'intensité, la rigueur. Le shadîd est ce qui est intense : châtiment sévère (shadîd al-'iqâb), froid intense. L'intensité peut être positive (force) ou négative (sévérité)."},
    {sense:'force',concept:'Force/Intensité',description:''},
    {sense:'sévérité',concept:'Force/Intensité',description:''},
    {sense:'intensité',concept:'Force/Intensité',description:''},
  ])
  log(r,'šdd',{'Force/Intensité':"Renforcer. Nous avons affermi leur cœur. Châtiment sévère."})

  // 706. šqq (شقق) — fendre, dissension
  r = await ins('šqq', [
    {sense:'fendre',concept:'Fission/Dissension',description:"Séparer en deux parties — fendre (shaqqa) est l'action de diviser ce qui était uni. C'est ponctuel et violent. Nous avons fendu (shaqaqnâ) la terre de fissures. La shiqâq est la dissension, la division entre les gens. Le mushâqq est celui qui s'oppose et crée la division. La fissure dans la terre ou dans la communauté est signe de rupture."},
    {sense:'fissure',concept:'Fission/Dissension',description:''},
    {sense:'dissension',concept:'Fission/Dissension',description:''},
    {sense:'opposition',concept:'Fission/Dissension',description:''},
  ])
  log(r,'šqq',{'Fission/Dissension':"Diviser ce qui était uni. Fissures dans la terre. Division et opposition."})

  // 707. ḫšy (خشي) — craindre avec révérence
  r = await ins('ḫšy', [
    {sense:'craindre',concept:'Crainte révérencielle',description:"Peur mêlée de respect et de vénération — la khashya est la crainte de celui qui connaît la grandeur de ce qu'il craint. C'est intérieur et profond. Seuls craignent (yakhshâ) Dieu parmi Ses serviteurs les savants. La khashya est supérieure à la simple peur (khawf) car elle implique la connaissance. Craindre Dieu c'est Le connaître et mesurer Sa puissance."},
    {sense:'révérer',concept:'Crainte révérencielle',description:''},
    {sense:'appréhender',concept:'Crainte révérencielle',description:''},
  ])
  log(r,'ḫšy',{'Crainte révérencielle':"Peur mêlée de respect. Seuls craignent Dieu les savants. Connaissance de Sa grandeur."})

  // 708. ghfl (غفل) — être insouciant, négliger
  r = await ins('ghfl', [
    {sense:'être insouciant',concept:'Insouciance/Négligence',description:"Ne pas prêter attention à ce qui importe — la ghafla est l'état de celui qui oublie ou ignore ce qu'il devrait garder à l'esprit. C'est intérieur comme état mental. Ne sois pas parmi les insouciants (ghâfilîn). L'insouciance est le voile sur le cœur qui empêche de voir les signes. Le ghâfil est distrait de l'essentiel par le superflu."},
    {sense:'négliger',concept:'Insouciance/Négligence',description:''},
    {sense:'oublier',concept:'Insouciance/Négligence',description:''},
  ])
  log(r,'ghfl',{'Insouciance/Négligence':"Ne pas prêter attention. Ne sois pas insouciant. Voile sur le cœur."})

  // 709. emm (عمم) — être général, oncle paternel
  r = await ins('emm', [
    {sense:'être général',concept:'Généralité/Parenté',description:"Ce qui englobe un ensemble — le 'âmm est ce qui est général, qui concerne tout le monde. C'est permanent comme caractéristique. L'oncle paternel ('amm) est le frère du père, lien de parenté proche. Vos oncles paternels ('a'mâm). La généralité ('umûm) s'oppose à la particularité (khusûs). Le 'âmm dans le Coran est ce qui s'adresse à tous."},
    {sense:'oncle paternel',concept:'Généralité/Parenté',description:''},
    {sense:'général',concept:'Généralité/Parenté',description:''},
  ])
  log(r,'emm',{'Généralité/Parenté':"Ce qui englobe. Vos oncles paternels. Général versus particulier."})

  console.log('\n=== Batch 88 terminé — ' + done + '/2321 ===')
}
run().catch(e => { console.error('ERREUR:', e); process.exit(1) })
