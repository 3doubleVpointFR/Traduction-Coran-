const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 1975, total = 2321

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

  r=await ins('lmz',[{sense:'critiquer en secret',concept:'Médisance/Calomnie',description:"Acte de parler en mal de quelqu'un en son absence ou par des signes. La médisance est directionnelle et cachée — elle sort du médisant et atteint le visé sans qu'il le sache."},{sense:'calomnier',concept:'Médisance/Calomnie',description:''}]);log(r,'lmz')

  r=await ins('a l f',[{sense:'mille',concept:'Nombre/Grande quantité',description:"Le nombre mille — symbole de la grande quantité. Le alf est un nombre de puissance et de multiplicité."},{sense:'être familier',concept:'Familiarité/Union',description:"État de proximité et d'habitude entre les gens. L'alliance unit les cœurs — directionnel et créateur de lien."},{sense:'unir les cœurs',concept:'Familiarité/Union',description:''}]);log(r,'a l f')

  r=await ins('ghr m',[{sense:'dette',concept:'Dette/Amende',description:"Ce que l'on doit payer obligatoirement. La dette est permanente tant qu'elle n'est pas remboursée — elle pèse sur celui qui la porte."},{sense:'amende',concept:'Dette/Amende',description:''},{sense:'être passionné',concept:'Divers',description:'Être collé à quelque chose — sens d\'attachement excessif.'}]);log(r,'ghr m')

  r=await ins('shrh',[{sense:'ouvrir (la poitrine)',concept:'Ouverture/Expansion',description:"Acte d'élargir ce qui était serré. L'ouverture de la poitrine est l'expansion de l'âme — elle libère de l'angoisse et fait entrer la lumière. Le sharh est l'élargissement qui rend capable de recevoir."},{sense:'expliquer',concept:'Ouverture/Expansion',description:''},{sense:'élargir',concept:'Ouverture/Expansion',description:''}]);log(r,'shrh')

  r=await ins('wfk t',[{sense:'accompagner',concept:'Compagnie/Assistance',description:"Acte d'être aux côtés de quelqu'un pour l'aider. La compagnie est permanente tant que le lien dure."},{sense:'réussir',concept:'Divers',description:'Être guidé vers le succès — sens de réussite divine.'}]);log(r,'wfk t')

  r=await ins('nnw',[{sense:'intention',concept:'Intention/Dessein',description:"Mouvement intérieur de la volonté vers un but. L'intention précède tout acte."},{sense:'se diriger vers',concept:'Intention/Dessein',description:''}]);log(r,'nnw')

  r=await ins('qbr',[{sense:'tombe',concept:'Tombe/Sépulture',description:"Le lieu où le corps du mort est enterré. La tombe est permanente — elle est le dernier séjour du corps en ce monde. Le qabr est le passage entre la vie d'ici-bas et l'au-delà."},{sense:'enterrer',concept:'Tombe/Sépulture',description:''}]);log(r,'qbr')

  r=await ins('rdl',[{sense:'être vil',concept:'Vilenie/Mépris',description:"État de ce qui est de la plus basse qualité. La vilenie est permanente dans ce qui est méprisable — l'ardhâl sont les plus bas des gens."},{sense:'méprisable',concept:'Vilenie/Mépris',description:''}]);log(r,'rdl')

  r=await ins('zdr',[{sense:'mépriser',concept:'Mépris/Dédain',description:"Acte de considérer quelqu'un comme sans valeur. Le mépris sort du méprisant et rabaisse le méprisé — directionnel et humiliant."},{sense:'dédaigner',concept:'Mépris/Dédain',description:''}]);log(r,'zdr')

  r=await ins('sna',[{sense:'fabriquer',concept:'Fabrication/Art',description:"Acte de créer un objet par un travail habile. La fabrication sort de l'artisan et produit l'œuvre — directionnelle et permanente dans le résultat. Le sun est le travail bien fait."},{sense:'faire',concept:'Fabrication/Art',description:''},{sense:'art',concept:'Fabrication/Art',description:''}]);log(r,'sna')

  console.log('\n=== Batch 239 terminé — '+done+'/2321 ===')
}
run().catch(e=>{console.error('ERR:',e);process.exit(1)})
