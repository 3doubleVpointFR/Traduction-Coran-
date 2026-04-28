const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 901, total = 2321

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
  r = await ins("sh'b", [{sense:'peuple',concept:'Communauté',description:"Skip."}])

  // 920. adn (أذن) — oreille, permission
  r = await ins('adn', [
    {sense:'oreille',concept:'Audition/Permission',description:"Organe de l'ouïe et acte d'autoriser — l'oreille (udhun) capte les sons et l'idhn est la permission. C'est permanent comme organe et ponctuel comme autorisation. Des oreilles (âdhânun) qui entendent. L'écoute vraie mène à l'obéissance. L'idhn divin est la permission qui rend les choses possibles. Rien n'advient sans l'idhn d'Allah. L'adhân est l'appel à la prière."},
    {sense:'permission',concept:'Audition/Permission',description:''},
    {sense:'autorisation',concept:'Audition/Permission',description:''},
  ])
  log(r,'adn',{'Audition/Permission':"Oreille qui capte. Rien sans idhn d'Allah. L'adhân appelle."})

  // 921. nbḏ (نبذ) — rejeter, délaisser
  r = await ins('nbḏ', [
    {sense:'rejeter',concept:'Rejet/Abandon',description:"Écarter avec dédain — rejeter (nabadha) c'est se débarrasser de quelque chose. C'est ponctuel et méprisant. Un groupe des Gens du Livre a rejeté (nabadha) le Livre de Dieu. Le rejet du Livre est le rejet de la guidance. Le manbûdh est le rejeté, l'exclu. Rejeter la vérité c'est s'exclure soi-même de la miséricorde."},
    {sense:'délaisser',concept:'Rejet/Abandon',description:''},
    {sense:'jeter',concept:'Rejet/Abandon',description:''},
  ])
  log(r,'nbḏ',{'Rejet/Abandon':"Écarter avec dédain. Ils ont rejeté le Livre. S'exclure de la miséricorde."})

  // 922. thwb (ثوب) — vêtement, récompense
  r = await ins('thwb', [
    {sense:'vêtement',concept:'Vêtement/Rétribution',description:"Ce qui couvre le corps et ce qui revient comme rétribution — le vêtement (thawb) habille et protège. C'est permanent comme objet. Purifie tes vêtements (thiyâbaka). La pureté vestimentaire accompagne la pureté spirituelle. Le thawâb est la récompense, ce qui 'revient' pour les bonnes actions. Vêtement et récompense partagent l'idée de ce qui enveloppe et couvre l'être."},
    {sense:'récompense',concept:'Vêtement/Rétribution',description:''},
    {sense:'revenir',concept:'Vêtement/Rétribution',description:''},
  ])
  log(r,'thwb',{'Vêtement/Rétribution':"Ce qui couvre. Purifie tes vêtements. Le thawâb: récompense qui revient."})

  // 923. khyr (خير) — bien, meilleur
  r = await ins('khyr', [
    {sense:'bien',concept:'Bien/Excellence',description:"Ce qui est bon et préférable — le bien (khayr) s'oppose au mal (sharr). C'est permanent comme valeur. Faites le bien (al-khayr) afin que vous réussissiez. Le khayr englobe tout ce qui est bénéfique. Le comparatif khayr min (meilleur que) établit une hiérarchie de valeurs. Le khayrât sont les bonnes actions. Rivaliser dans le khayr est encouragé. Dieu guide vers le meilleur."},
    {sense:'meilleur',concept:'Bien/Excellence',description:''},
    {sense:'bonté',concept:'Bien/Excellence',description:''},
  ])
  log(r,'khyr',{'Bien/Excellence':"Ce qui est bon. Faites le bien. Rivaliser dans le khayr."})

  // 924. ren (رعن) — stupidité, sottise
  r = await ins('ren', [
    {sense:'stupidité',concept:'Sottise/Moquerie',description:"Manque de discernement mêlé de moquerie — râ'inâ fut détourné par les moqueurs en un mot de dérision. Ne dites pas râ'inâ mais dites unzurnâ. Les juifs détournaient ce mot en insulte. La sottise (ru'ûna) est le manque d'intelligence qui mène à la moquerie de ce qui est sacré. Les mots peuvent être retournés contre leur sens premier."},
    {sense:'moquerie',concept:'Sottise/Moquerie',description:''},
  ])
  log(r,'ren',{'Sottise/Moquerie':"Manque de discernement. Ne dites pas râ'inâ. Mots détournés en insulte."})

  console.log('\n=== Batch 130 terminé — ' + done + '/2321 ===')
}
run().catch(e => { console.error('ERREUR:', e); process.exit(1) })
