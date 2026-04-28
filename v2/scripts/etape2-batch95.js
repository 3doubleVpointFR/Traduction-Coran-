const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 731, total = 2321

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

  // 740. len (لعن) — maudire
  r = await ins('len', [
    {sense:'maudire',concept:'Malédiction/Exclusion',description:"Éloigner de la miséricorde divine — maudire (la'ana) c'est exclure de la grâce de Dieu. C'est permanent comme état. Dieu les a maudits (la'anahum Allâh). La la'na est l'éloignement définitif de la rahma. Le maudit (mal'ûn) est banni de la proximité divine. Iblîs est le maudit par excellence. La malédiction est l'opposé de la bénédiction (baraka)."},
    {sense:'malédiction',concept:'Malédiction/Exclusion',description:''},
    {sense:'maudit',concept:'Malédiction/Exclusion',description:''},
  ])
  log(r,'len',{'Malédiction/Exclusion':"Éloigner de la miséricorde. Dieu les a maudits. Iblîs le maudit."})

  // 741. sya (سيء) — variante de sy' déjà traité
  r = await ins('sya', [
    {sense:'mal',concept:'Mal',description:"Skip si déjà fait comme sy'."},
  ])

  // 742. erf (عرف) — connaître, reconnaître
  r = await ins('erf', [
    {sense:'connaître',concept:'Connaissance/Reconnaissance',description:"Avoir la science de quelque chose — connaître ('arafa) c'est distinguer et identifier. C'est intérieur comme acquisition mentale. Le ma'rûf est le bien reconnu, ce que la raison et la religion approuvent. Tu les reconnaîtras (ta'rifuhum) à leur marque. L'al-'urf est la coutume, ce qui est reconnu comme bon. Ma'rifa est la connaissance, 'irfân est la gnose spirituelle."},
    {sense:'reconnaître',concept:'Connaissance/Reconnaissance',description:''},
    {sense:'bien reconnu',concept:'Connaissance/Reconnaissance',description:''},
    {sense:'coutume',concept:'Connaissance/Reconnaissance',description:''},
  ])
  log(r,'erf',{'Connaissance/Reconnaissance':"Distinguer et identifier. Le ma'rûf: bien approuvé. Tu les reconnaîtras."})

  // 743. bgh (بغي) — chercher, transgresser
  r = await ins('bgh', [
    {sense:'chercher',concept:'Quête/Transgression',description:"Désirer ardemment et parfois dépasser les limites — chercher (baghâ/yabghî) peut être positif (chercher le bien) ou négatif (transgresser). Le baghy est l'injustice, l'oppression, le dépassement des limites. La baghîy est la prostituée qui s'est égarée. Les baghy les uns sur les autres. Chercher devient transgression quand on ne respecte plus les limites fixées par Dieu."},
    {sense:'transgresser',concept:'Quête/Transgression',description:''},
    {sense:'opprimer',concept:'Quête/Transgression',description:''},
    {sense:'désirer',concept:'Quête/Transgression',description:''},
  ])
  log(r,'bgh',{'Quête/Transgression':"Désirer, parfois dépasser. Le baghy: injustice. Chercher sans limites."})

  // 744. bwa (بوء) — retourner, mériter
  r = await ins('bwa', [
    {sense:'retourner',concept:'Retour/Mérite',description:"Revenir à un lieu ou recevoir ce qu'on mérite — bâ'a c'est retourner ou être rétribué. Ils sont revenus (bâ'û) avec la colère de Dieu. Le mubawwa' est le lieu où l'on s'établit. Mériter la colère c'est y retourner comme à sa demeure. L'abwa'a est le fait de faire mériter, de rendre digne d'une récompense ou d'un châtiment."},
    {sense:'mériter',concept:'Retour/Mérite',description:''},
    {sense:'établir',concept:'Retour/Mérite',description:''},
  ])
  log(r,'bwa',{'Retour/Mérite':"Revenir ou recevoir. Revenus avec la colère de Dieu. Lieu d'établissement."})

  // 745. hwa (هوي) — désirer, passion
  r = await ins('hwa', [
    {sense:'désirer',concept:'Passion/Chute',description:"Inclination de l'âme vers ce qu'elle aime — le hawâ est la passion, le désir qui entraîne. C'est intérieur et souvent blâmable. N'as-tu pas vu celui qui prend sa passion (hawâhu) pour divinité ? Le hawâ est l'inclination irrationnelle, opposée à la guidance. Celui qui suit son hawâ s'égare. Tomber (hawâ) c'est aussi chuter, comme la passion fait chuter dans l'égarement."},
    {sense:'passion',concept:'Passion/Chute',description:''},
    {sense:'tomber',concept:'Passion/Chute',description:''},
  ])
  log(r,'hwa',{'Passion/Chute':"Inclination de l'âme. Prendre sa passion pour divinité. Chute dans l'égarement."})

  console.log('\n=== Batch 95 terminé — ' + done + '/2321 ===')
}
run().catch(e => { console.error('ERREUR:', e); process.exit(1) })
