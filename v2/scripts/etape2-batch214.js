const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 1725, total = 2321

async function ins(key, senses) {
  const {data: wa} = await db.from('word_analyses').select('id').eq('word_key', key).limit(1)
  if (!wa || !wa[0]) { console.log('SKIP '+key+': not found'); return null }
  const {count} = await db.from('word_meanings').select('*',{count:'exact',head:true}).eq('analysis_id', wa[0].id).not('concept','is',null)
  if (count > 0) { console.log('SKIP '+key+': already done'); done++; return null }
  const {error} = await db.from('word_meanings').insert(senses.map((s,i) => ({...s, analysis_id: wa[0].id, meaning_type:'etymology', display_order:i+1})))
  if (error) { console.log('ERR '+key+': '+error.message); return null }
  return {total: senses.length, concepts: [...new Set(senses.map(s => s.concept))]}
}
function log(r, key) { if(r){done++;const c=r.concepts;console.log('['+done+'/'+total+'] '+key+' — '+r.total+' sens → '+c.length+' concepts ('+c.join(', ')+') — reste '+(total-done))} }

async function run() {
  let r

  // eḍb already done, skip
  console.log('SKIP eḍb: already done (3rd time)')

  r=await ins('lyh',[
    {sense:'vers lui',concept:'Direction/Orientation',description:"Préposition indiquant la direction vers une personne ou une chose. La direction est permanente tant que le mouvement continue."},
    {sense:'en sa direction',concept:'Direction/Orientation',description:''},
  ]);log(r,'lyh')

  r=await ins('bhth',[
    {sense:'chercher',concept:'Recherche/Investigation',description:"Acte de fouiller pour trouver ce qui est caché. La recherche est directionnelle — elle part du chercheur vers ce qui est cherché. Chercher c'est creuser la surface pour atteindre ce qui est en profondeur."},
    {sense:'investiguer',concept:'Recherche/Investigation',description:''},
    {sense:'fouiller la terre',concept:'Recherche/Investigation',description:''},
  ]);log(r,'bhth')

  r=await ins('ejz',[
    {sense:'être incapable',concept:'Incapacité/Impuissance',description:"État de celui qui ne peut pas accomplir ce qui est demandé. L'incapacité est un état permanent de celui qui manque de moyens — elle est le contraire de la puissance. Le ajiz est celui dont les forces sont insuffisantes."},
    {sense:'être impuissant',concept:'Incapacité/Impuissance',description:''},
    {sense:'faiblesse',concept:'Incapacité/Impuissance',description:''},
  ]);log(r,'ejz')

  r=await ins('ndm',[
    {sense:'regretter',concept:'Regret/Remords',description:"État intérieur de douleur face à ce qu'on a fait de mal. Le regret est permanent dans l'âme tant que la faute n'est pas réparée — il est le poids de la conscience qui se reproche ses actes."},
    {sense:'remords',concept:'Regret/Remords',description:''},
    {sense:'se repentir',concept:'Regret/Remords',description:''},
  ]);log(r,'ndm')

  r=await ins('nfy',[
    {sense:'exiler',concept:'Exil/Bannissement',description:"Acte d'expulser quelqu'un de sa terre et de le forcer à vivre ailleurs. L'exil sort de l'autorité et atteint le banni — c'est directionnel et crée un état permanent de séparation d'avec la patrie."},
    {sense:'bannir',concept:'Exil/Bannissement',description:''},
    {sense:'nier',concept:'Négation',description:"Acte de refuser la réalité de quelque chose. La négation est un acte rationnel qui rejette ce qui est affirmé."},
  ]);log(r,'nfy')

  r=await ins('kzy',[
    {sense:'être humilié',concept:'Humiliation/Honte',description:"État de celui qui est rabaissé et perd sa dignité. L'humiliation vient de l'extérieur et atteint celui qui la subit."},
    {sense:'honte',concept:'Humiliation/Honte',description:''},
  ]);log(r,'kzy')

  r=await ins('kanm',[
    {sense:'comme si',concept:'Comparaison/Similitude',description:"Particule qui établit une ressemblance hypothétique entre deux réalités. Le kaanna crée un monde d'apparence — il fait voir une chose comme si elle était une autre. C'est un outil rationnel d'illustration."},
    {sense:'on dirait que',concept:'Comparaison/Similitude',description:''},
  ]);log(r,'kanm')

  r=await ins('srq',[
    {sense:'voler',concept:'Vol/Larcin',description:"Acte de prendre en secret ce qui appartient à un autre. Le vol sort du voleur et dépouille la victime — c'est directionnel et clandestin. Voler c'est s'emparer de ce qui ne nous appartient pas en trompant la vigilance du propriétaire."},
    {sense:'dérober',concept:'Vol/Larcin',description:''},
    {sense:'voleur',concept:'Vol/Larcin',description:''},
  ]);log(r,'srq')

  r=await ins('lmk',[
    {sense:'pour toi',concept:'Attribution/Destination',description:"Préposition et pronom indiquant l'appartenance à l'interlocuteur. Directionnel vers celui à qui on s'adresse."},
    {sense:'à toi',concept:'Attribution/Destination',description:''},
  ]);log(r,'lmk')

  console.log('\n=== Batch 214 terminé — '+done+'/2321 ===')
}
run().catch(e=>{console.error('ERR:',e);process.exit(1)})
