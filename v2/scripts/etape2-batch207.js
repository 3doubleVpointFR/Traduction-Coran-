const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 1658, total = 2321

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

  r=await ins('\u1E0Fww',[
    {sense:'possesseurs',concept:'Possession/Attribut',description:"Ceux qui détiennent une qualité ou un bien. La possession est un état permanent de celui qui a."},
    {sense:'détenteurs',concept:'Possession/Attribut',description:''},
  ]);log(r,'\u1E0Fww')

  r=await ins('lhn',[
    {sense:'à elles',concept:'Attribution/Destination féminine',description:"Préposition et pronom qui indiquent l'appartenance au groupe féminin. L'attribution est directionnelle vers celles à qui la chose est destinée."},
    {sense:'pour elles',concept:'Attribution/Destination féminine',description:''},
  ]);log(r,'lhn')

  r=await ins("b'd",[
    {sense:'partie',concept:'Partie/Fragment',description:"Un morceau d'un tout plus grand. La partie est permanente dans son existence séparée — elle garde la trace du tout dont elle vient."},
    {sense:'certains',concept:'Partie/Fragment',description:''},
    {sense:'quelques-uns',concept:'Partie/Fragment',description:''},
  ]);log(r,"b'd")

  r=await ins('dje',[
    {sense:'se coucher',concept:'Couchage/Repos',description:"Acte de s'allonger pour dormir ou se reposer. Le couchage est un mouvement vers le bas et l'horizontale — c'est le passage de l'activité au repos. Le madja est le lit, le lieu où l'on se couche."},
    {sense:'lit',concept:'Couchage/Repos',description:''},
    {sense:'côté (du corps)',concept:'Couchage/Repos',description:''},
  ]);log(r,'dje')

  r=await ins('anthy',[
    {sense:'femelle',concept:'Féminin/Femelle',description:"Le genre qui porte et donne la vie. Le féminin est permanent dans l'être."},
    {sense:'féminin',concept:'Féminin/Femelle',description:''},
  ]);log(r,'anthy')

  r=await ins('sds',[
    {sense:'six',concept:'Nombre/Quantité',description:"Le nombre six, quantité fixe. Le six est un nombre de complétude — les cieux et la terre ont été créés en six jours."},
    {sense:'sixième',concept:'Nombre/Quantité',description:''},
  ]);log(r,'sds')

  r=await ins('abw',[
    {sense:'père',concept:'Parenté/Paternité',description:"Celui qui engendre et dont on descend. Le père est l'origine permanente de la lignée — la paternité crée un lien indéfectible."},
    {sense:'ancêtre',concept:'Parenté/Paternité',description:''},
  ]);log(r,'abw')

  r=await ins('abn',[
    {sense:'fils',concept:'Filiation/Descendance',description:"Celui qui est engendré par le père. Le fils est le prolongement permanent de la lignée — il porte le nom et continue l'héritage de celui qui l'a engendré."},
    {sense:'enfant',concept:'Filiation/Descendance',description:''},
  ]);log(r,'abn')

  r=await ins('drw',[
    {sense:'repousser',concept:'Repoussement/Défense',description:"Acte d'éloigner par la force ce qui s'approche. Le repoussement est directionnel — il sort du défenseur et atteint l'agresseur. Repousser c'est protéger en éloignant le danger."},
    {sense:'défendre',concept:'Repoussement/Défense',description:''},
  ]);log(r,'drw')

  r=await ins('ayyhm',[
    {sense:'lequel d\'entre eux',concept:'Interrogation/Choix',description:"Pronom interrogatif qui demande d'identifier une personne dans un groupe. L'interrogation de choix est directionnelle vers le groupe — elle demande de sélectionner un individu parmi plusieurs."},
    {sense:'quel d\'entre eux',concept:'Interrogation/Choix',description:''},
  ]);log(r,'ayyhm')

  console.log('\n=== Batch 207 terminé — '+done+'/2321 ===')
}
run().catch(e=>{console.error('ERR:',e);process.exit(1)})
