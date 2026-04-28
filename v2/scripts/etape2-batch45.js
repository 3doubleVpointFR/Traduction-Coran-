const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 428, total = 2321

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

  // 429. ayb (أيب) — revenir
  r = await ins('ayb', [
    {sense:'revenir',concept:'Retour/Repentir',description:"Acte de retourner d'où l'on vient ou vers ce qu'on avait quitté — revenir (âba/iyâb) est directionnel vers l'origine ou le point de départ. C'est ponctuel dans l'acte mais peut être permanent comme disposition du repentant. Le retour à Dieu (al-ma'âb) est la destination finale de tous. Celui qui revient sans cesse vers Dieu est l'awwâb."},
    {sense:'retourner',concept:'Retour/Repentir',description:''},
    {sense:'se repentir',concept:'Retour/Repentir',description:''},
    {sense:'destination finale',concept:'Retour/Repentir',description:''},
  ])
  log(r,'ayb',{'Retour/Repentir':"Retourner vers l'origine. Le retour à Dieu est la destination finale."})

  // 430. mad (مأد) — secouer, bercer
  r = await ins('mad', [
    {sense:'secouer',concept:'Mouvement/Oscillation',description:"Agiter de côté et d'autre — secouer le tronc du palmier pour en faire tomber les dattes fraîches. Le mouvement est directionnel dans les deux sens, une oscillation qui produit un effet. Secouer c'est mettre en mouvement pour obtenir quelque chose."},
    {sense:'agiter',concept:'Mouvement/Oscillation',description:''},
    {sense:'tronc',concept:'Mouvement/Oscillation',description:''},
  ])
  log(r,'mad',{'Mouvement/Oscillation':"Agiter de côté et d'autre. Secouer le palmier pour les dattes."})

  // 431. theb (ثعب) — serpent
  r = await ins('theb', [
    {sense:'serpent',concept:'Animal/Transformation',description:"Reptile sans pattes qui rampe sur le sol — le serpent (thu'bân) est permanent comme espèce animale. Le bâton de Moïse se transforma en serpent évident devant Pharaon, signe de la puissance divine qui transforme les réalités. Le serpent est à la fois signe et épreuve."},
    {sense:'couleuvre',concept:'Animal/Transformation',description:''},
  ])
  log(r,'theb',{'Animal/Transformation':"Reptile rampant. Le bâton de Moïse transformé. Signe de puissance divine."})

  // 432. jrd (جرد) — sauterelles
  r = await ins('jrd', [
    {sense:'sauterelles',concept:'Fléau/Nuisible',description:"Insectes qui se déplacent en essaims et dévorent les cultures — les sauterelles (jarâd) sont un fléau envoyé sur l'Égypte de Pharaon. C'est ponctuel comme calamité mais dévastateur dans ses effets. Les sauterelles symbolisent la multitude destructrice, la faim qui dévore tout sur son passage."},
    {sense:'essaim',concept:'Fléau/Nuisible',description:''},
    {sense:'invasion',concept:'Fléau/Nuisible',description:''},
  ])
  log(r,'jrd',{'Fléau/Nuisible':"Insectes dévorant les cultures. Fléau sur l'Égypte. Multitude destructrice."})

  // 433. dmm (دمم) — sang
  r = await ins('dmm', [
    {sense:'sang',concept:'Vie/Interdit',description:"Liquide rouge qui circule dans le corps et porte la vie — le sang (dam) est permanent comme substance vitale. Il est interdit à la consommation car il représente la vie elle-même. Le sang versé injustement crie vers le ciel. Le premier sang versé fut celui d'Abel par Caïn, inaugurant le meurtre dans l'humanité."},
    {sense:'hémoglobine',concept:'Vie/Interdit',description:''},
    {sense:'parenté',concept:'Vie/Interdit',description:''},
  ])
  log(r,'dmm',{'Vie/Interdit':"Liquide vital. Interdit alimentaire. Le sang versé crie vers le ciel."})

  // 434. hawl (هول) — effrayer
  r = await ins('hawl', [
    {sense:'effrayer',concept:'Terreur/Effroi',description:"Causer une peur intense et soudaine — l'effroi (hawl) est un choc émotionnel qui saisit face au terrible. C'est ponctuel dans le choc mais peut laisser des traces durables. Les terreurs (ahwâl) du Jour du Jugement saisiront les gens quand ils verront ce qu'ils avaient nié."},
    {sense:'terrifier',concept:'Terreur/Effroi',description:''},
    {sense:'terreur',concept:'Terreur/Effroi',description:''},
    {sense:'horrible',concept:'Terreur/Effroi',description:''},
  ])
  log(r,'hawl',{'Terreur/Effroi':"Peur intense et soudaine. Les terreurs du Jour du Jugement."})

  // 435. yaa (يأى) — désespérer
  r = await ins('yaa', [
    {sense:'désespérer',concept:'Désespoir/Abandon',description:"Perdre tout espoir, considérer quelque chose comme impossible — le désespoir (ya's) est un état intérieur d'abandon de l'espérance. C'est permanent comme disposition qui ferme l'horizon du possible. Ne désespérez pas de la miséricorde de Dieu : seuls les mécréants désespèrent de l'esprit de Dieu."},
    {sense:'perdre espoir',concept:'Désespoir/Abandon',description:''},
    {sense:'abandonner',concept:'Désespoir/Abandon',description:''},
  ])
  log(r,'yaa',{'Désespoir/Abandon':"Perdre tout espoir. Seuls les mécréants désespèrent de Dieu."})

  // 436. ghrm (غرم) — dette, perte
  r = await ins('ghrm', [
    {sense:'dette',concept:'Obligation/Perte',description:"Ce qu'on doit à quelqu'un, obligation de payer — la dette (ghurm/gharâma) est une obligation relationnelle envers le créancier. C'est permanent tant qu'elle n'est pas acquittée. Le châtiment de l'enfer est une perte permanente (gharâm) pour ceux qui y entrent : ils ont perdu dans le commerce avec Dieu."},
    {sense:'amende',concept:'Obligation/Perte',description:''},
    {sense:'perte',concept:'Obligation/Perte',description:''},
    {sense:'calamité',concept:'Obligation/Perte',description:''},
  ])
  log(r,'ghrm',{'Obligation/Perte':"Ce qu'on doit. L'enfer comme perte permanente. Commerce perdu avec Dieu."})

  // 437. xsm (خصم) — disputer, adversaire
  r = await ins('xsm', [
    {sense:'disputer',concept:'Conflit/Adversité',description:"S'opposer à quelqu'un par la parole ou les actes — la dispute (khusûma/khisâm) est directionnelle contre l'adversaire. C'est ponctuel dans chaque confrontation mais peut être permanent comme état d'hostilité. L'homme est le plus disputeur des êtres. Les adversaires (khasmân) qui se présentent devant David pour être jugés."},
    {sense:'adversaire',concept:'Conflit/Adversité',description:''},
    {sense:'quereller',concept:'Conflit/Adversité',description:''},
    {sense:'plaider',concept:'Conflit/Adversité',description:''},
  ])
  log(r,'xsm',{'Conflit/Adversité':"S'opposer par parole ou actes. L'homme est le plus disputeur."})

  // 438. ma' (موء) — eau
  r = await ins("ma'", [
    {sense:'eau',concept:'Élément vital',description:"Substance liquide essentielle à la vie — l'eau (mâ') est permanente comme élément fondamental de la création. C'est de l'eau que Dieu a créé tout être vivant. L'eau descend du ciel et fait reverdir la terre morte. Elle est source de vie, de purification, de fertilité. Sans eau, pas de vie possible."},
    {sense:'liquide',concept:'Élément vital',description:''},
    {sense:'pluie',concept:'Élément vital',description:''},
  ])
  log(r,"ma'",{'Élément vital':"Substance essentielle. Tout être vivant créé d'eau. Source de vie et purification."})

  console.log('\n=== Batch 45 terminé — ' + done + '/2321 ===')
}
run().catch(e => { console.error('ERREUR:', e); process.exit(1) })
