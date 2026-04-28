const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 1816, total = 2321

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

  r=await ins('dan',[
    {sense:'brebis',concept:'Bétail/Ovin',description:"Mouton femelle dont on tire la laine et la viande. La brebis est un animal domestique permanent dans son utilité — elle nourrit et habille."},
    {sense:'mouton',concept:'Bétail/Ovin',description:''},
  ]);log(r,'dan')

  r=await ins('mez',[
    {sense:'chèvre',concept:'Bétail/Caprin',description:"Animal domestique dont on tire le lait et la viande. La chèvre est permanente dans son utilité — elle vit dans les terrains difficiles."},
  ]);log(r,'mez')

  r=await ins('shml',[
    {sense:'envelopper',concept:'Englobement/Totalité',description:"Acte de couvrir de tous les côtés. L'englobement est multidirectionnel — il ne laisse rien dehors. Ce qui est enveloppé est contenu dans sa totalité."},
    {sense:'inclure',concept:'Englobement/Totalité',description:''},
    {sense:'gauche (shimaal)',concept:'Divers',description:'Le côté gauche — opposé au côté droit.'},
  ]);log(r,'shml')

  r=await ins('zrae',[
    {sense:'semer',concept:'Semence/Agriculture',description:"Acte de mettre la graine en terre pour qu'elle pousse. La semence est directionnelle — elle va de la main vers la terre. Semer c'est investir dans l'avenir avec patience — le résultat est permanent une fois la récolte venue."},
    {sense:'culture',concept:'Semence/Agriculture',description:''},
    {sense:'récolte',concept:'Semence/Agriculture',description:''},
  ]);log(r,'zrae')

  r=await ins('bghl',[
    {sense:'mulet',concept:'Animal/Transport',description:"Animal hybride né du croisement de l'âne et du cheval, utilisé pour le transport. Le mulet est permanent dans sa force et son endurance — il porte sans se fatiguer."},
  ]);log(r,'bghl')

  r=await ins('zfr',[
    {sense:'ongle',concept:'Griffe/Ongle',description:"L'excroissance dure au bout des doigts. L'ongle est permanent dans sa croissance — il griffe et gratte. L'ongle est ce qui accroche et retient."},
    {sense:'griffe',concept:'Griffe/Ongle',description:''},
  ]);log(r,'zfr')

  r=await ins('shhm',[
    {sense:'graisse',concept:'Graisse/Corps gras',description:"Substance molle et grasse présente dans le corps animal. La graisse est permanente dans ce qui en contient — elle nourrit et protège du froid."},
    {sense:'suif',concept:'Graisse/Corps gras',description:''},
  ]);log(r,'shhm')

  r=await ins('khlt',[
    {sense:'mélanger',concept:'Mélange/Mixtion',description:"Acte de combiner des éléments différents. Le mélange unit ce qui était séparé — bidirectionnel et permanent."},
    {sense:'mêler',concept:'Mélange/Mixtion',description:''},
    {sense:'fréquenter',concept:'Divers',description:'Se mêler aux gens.'},
  ]);log(r,'khlt')

  r=await ins('srk',[
    {sense:'associer',concept:'Association/Partenariat',description:"Acte de mettre deux choses ou deux êtres sur un pied d'égalité dans une même fonction. L'association est bidirectionnelle — elle unit deux parts. Le shirk est l'acte d'associer un autre à Dieu dans l'adoration — le péché suprême qui brise l'unicité divine."},
    {sense:'partenariat',concept:'Association/Partenariat',description:''},
    {sense:'polythéisme (shirk)',concept:'Association/Partenariat',description:''},
  ]);log(r,'srk')

  r=await ins('nwt',[
    {sense:'noyau de datte',concept:'Noyau/Graine',description:"La partie dure au centre du fruit. Le noyau est permanent et résistant — il protège le germe de vie future."},
    {sense:'point minuscule (naqir)',concept:'Petitesse',description:"Le point minuscule sur le dos du noyau de datte. Symbole de l'infime, de ce qui est négligeable."},
  ]);log(r,'nwt')

  console.log('\n=== Batch 223 terminé — '+done+'/2321 ===')
}
run().catch(e=>{console.error('ERR:',e);process.exit(1)})
