const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 679, total = 2321

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

  // 685. hly (حلي) — parure, bijou
  r = await ins('hly', [
    {sense:'parure',concept:'Ornement/Embellissement',description:"Ce qui embellit et décore — la parure (hilya/huliy) est l'ornement dont on se pare pour être beau. C'est extérieur et visible. Des parures (hilya) que vous portez. L'or et l'argent deviennent parure quand ils ornent le corps. La parure est aussi métaphorique : le beau discours peut être huliy al-kalâm, parure de la parole."},
    {sense:'bijou',concept:'Ornement/Embellissement',description:''},
    {sense:'ornement',concept:'Ornement/Embellissement',description:''},
  ])
  log(r,'hly',{'Ornement/Embellissement':"Ce qui embellit. Des parures que vous portez. Extérieur et visible."})

  // 686. khwr (خور) — mugir, être faible
  r = await ins('khwr', [
    {sense:'mugir',concept:'Faiblesse/Plainte',description:"Cri de l'animal ou faiblesse de caractère — mugir (khâra) est le cri sourd de la vache. Le veau (qui mugissait) (khuwâr) qu'ils adorèrent était une statue avec un son. C'est ponctuel comme bruit. La khawra est aussi la faiblesse, la lâcheté de celui qui fléchit sous l'épreuve. Le mugissement est plainte de l'impuissant."},
    {sense:'veau mugissant',concept:'Faiblesse/Plainte',description:''},
    {sense:'faiblesse',concept:'Faiblesse/Plainte',description:''},
  ])
  log(r,'khwr',{'Faiblesse/Plainte':"Cri sourd. Le veau mugissant qu'ils adorèrent. Faiblesse de l'impuissant."})

  // 687. skt (سكت) — se taire, silence
  r = await ins('skt', [
    {sense:'se taire',concept:'Silence/Apaisement',description:"Cesser de parler ou de se manifester — se taire (sakata) est l'arrêt de la parole ou du bruit. C'est ponctuel comme action mais peut devenir permanent. Quand la colère de Moïse se fut apaisée (sakata). Le silence qui suit la colère est l'apaisement intérieur. Sakta est aussi la pause dans la récitation, le moment de respiration entre les versets."},
    {sense:'silence',concept:'Silence/Apaisement',description:''},
    {sense:'apaiser',concept:'Silence/Apaisement',description:''},
  ])
  log(r,'skt',{'Silence/Apaisement':"Cesser de parler. Quand la colère se fut apaisée. Pause et respiration."})

  // 688. zxrf (زخرف) — ornement, dorure
  r = await ins('zxrf', [
    {sense:'ornement',concept:'Parure/Illusion',description:"Décoration luxueuse qui peut tromper — l'ornement (zukhruf) est ce qui brille et attire l'œil. C'est extérieur et souvent trompeur. Les paroles enjolivées (zukhruf al-qawl) que les démons inspirent. La zukhruf de la terre est sa parure végétale éphémère. L'ornement peut être vrai (l'or) ou faux (le clinquant qui imite), d'où l'idée d'illusion."},
    {sense:'dorure',concept:'Parure/Illusion',description:''},
    {sense:'faux brillant',concept:'Parure/Illusion',description:''},
  ])
  log(r,'zxrf',{'Parure/Illusion':"Ce qui brille. Paroles enjolivées des démons. Peut être vrai ou trompeur."})

  // 689. gwš (غوش) — couvrir, évanouissement
  r = await ins('gwš', [
    {sense:'couvrir',concept:'Voile/Inconscience',description:"Recouvrir et obscurcir — couvrir (ghâsha/yaghshâ) est directionnel vers ce qu'on cache. L'évanouissement (ghashya) est quand l'obscurité couvre la conscience. La mort vient avec ses affres (ghamarât). Ce qui couvre prive de lumière et de connaissance. Le ghishâwa sur les yeux est le voile qui empêche de voir la vérité."},
    {sense:'évanouissement',concept:'Voile/Inconscience',description:''},
    {sense:'voiler',concept:'Voile/Inconscience',description:''},
  ])
  log(r,'gwš',{'Voile/Inconscience':"Recouvrir et obscurcir. La mort avec ses affres. Voile qui empêche de voir."})

  console.log('\n=== Batch 84 terminé — ' + done + '/2321 ===')
}
run().catch(e => { console.error('ERREUR:', e); process.exit(1) })
