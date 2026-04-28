const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 1667, total = 2321

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

  r=await ins("b'd",[
    {sense:'partie',concept:'Partie/Fragment',description:"Un morceau d'un tout plus grand. La partie est permanente dans son existence séparée — elle garde la trace du tout."},
    {sense:'certains',concept:'Partie/Fragment',description:''},
    {sense:'quelques-uns',concept:'Partie/Fragment',description:''},
  ]);log(r,"b'd")

  r=await ins('adhy',[
    {sense:'nuire',concept:'Nuisance/Souffrance',description:"Acte de causer du tort. La nuisance sort du nuisible et atteint le lésé — directionnel et peut être prolongé."},
    {sense:'gêne',concept:'Nuisance/Souffrance',description:''},
  ]);log(r,'adhy')

  r=await ins('mkn',[
    {sense:'rendre puissant',concept:'Établissement/Pouvoir',description:"Acte de donner à quelqu'un le pouvoir et les moyens de s'établir fermement. L'établissement sort de celui qui donne le pouvoir et atteint celui qui le reçoit — c'est directionnel et crée un état permanent de solidité et d'autorité."},
    {sense:'établir solidement',concept:'Établissement/Pouvoir',description:''},
    {sense:'pouvoir',concept:'Établissement/Pouvoir',description:''},
    {sense:'lieu (makan)',concept:'Divers',description:'L\'endroit où l\'on est établi — le lieu permanent.'},
  ]);log(r,'mkn')

  r=await ins('bwaa',[
    {sense:'revenir avec',concept:'Retour/Mérite',description:"Acte de retourner chargé d'un résultat. Le retour est directionnel — il ramène celui qui est parti avec ce qu'il a mérité."},
    {sense:'mériter',concept:'Retour/Mérite',description:''},
    {sense:'encourir la colère',concept:'Retour/Mérite',description:''},
  ]);log(r,'bwaa')

  r=await ins('wrth',[
    {sense:'hériter',concept:'Héritage/Succession',description:"Acte de recevoir ce qui appartenait à celui qui est parti ou mort. L'héritage sort du défunt et atteint l'héritier — c'est directionnel et crée un transfert permanent de propriété. L'héritage est la continuation du bien à travers les générations."},
    {sense:'héritage',concept:'Héritage/Succession',description:''},
    {sense:'léguer',concept:'Héritage/Succession',description:''},
  ]);log(r,'wrth')

  r=await ins('e\u0161r',[
    {sense:'dix',concept:'Nombre/Dizaine',description:"Le nombre dix, base du système décimal. Le dix est un nombre de complétude — il clôt un cycle et ouvre le suivant."},
    {sense:'dixième',concept:'Nombre/Dizaine',description:''},
    {sense:'tribu',concept:'Divers',description:'Le groupe social — les gens qui vivent ensemble.'},
  ]);log(r,'e\u0161r')

  r=await ins('esa',[
    {sense:'peut-être',concept:'Possibilité/Espoir',description:"Particule qui ouvre une possibilité sans certitude. Le asa exprime l'espoir que quelque chose se produise — c'est une ouverture vers l'avenir. Quand Dieu dit asa, c'est une promesse déguisée."},
    {sense:'il se peut que',concept:'Possibilité/Espoir',description:''},
  ]);log(r,'esa')

  r=await ins('qtm',[
    {sense:'obscurcir',concept:'Obscurité/Ténèbres',description:"Acte de rendre sombre ce qui était clair. L'obscurcissement est un voilement qui empêche de voir — il couvre la lumière et plonge dans les ténèbres."},
    {sense:'ténèbres',concept:'Obscurité/Ténèbres',description:''},
    {sense:'être sombre',concept:'Obscurité/Ténèbres',description:''},
  ]);log(r,'qtm')

  r=await ins('dh r w',[
    {sense:'disperser',concept:'Dispersion/Éparpillement',description:"Acte de répandre dans toutes les directions. Multidirectionnel et irréversible."},
    {sense:'progéniture',concept:'Descendance',description:"Les enfants qui se multiplient à travers les générations."},
  ]);log(r,'dh r w')

  r=await ins('hrd',[
    {sense:'inciter',concept:'Incitation/Exhortation',description:"Acte extérieur de pousser quelqu'un à agir avec force et détermination. L'incitation sort de celui qui pousse et atteint celui qui est poussé — c'est directionnel et mobilisateur. Le tahrid est l'exhortation au combat qui enflamme le courage."},
    {sense:'exhorter au combat',concept:'Incitation/Exhortation',description:''},
    {sense:'être sur le point de mourir',concept:'Divers',description:'État d\'extrême faiblesse — au bord de la fin.'},
  ]);log(r,'hrd')

  console.log('\n=== Batch 208 terminé — '+done+'/2321 ===')
}
run().catch(e=>{console.error('ERR:',e);process.exit(1)})
