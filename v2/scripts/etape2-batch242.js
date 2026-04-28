const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 2005, total = 2321

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

  r=await ins('\u00F0re',[{sense:'bras',concept:'Bras/Mesure',description:"Le membre supérieur du corps utilisé pour agir. Le bras est aussi une unité de mesure — la coudée."},{sense:'coudée',concept:'Bras/Mesure',description:''}]);log(r,'\u00F0re')

  r=await ins('esb',[{sense:'lien',concept:'Lien/Clan',description:"Ce qui unit un groupe de personnes par le sang ou la cause. Le asab est le lien clanique permanent — il crée la solidarité et la force du nombre."},{sense:'clan',concept:'Lien/Clan',description:''}]);log(r,'esb')

  r=await ins('hra',[{sense:'se hâter',concept:'Précipitation/Hâte',description:"Acte de se déplacer rapidement vers quelque chose. La hâte est directionnelle — elle pousse vers l'avant avec urgence."},{sense:'accourir',concept:'Précipitation/Hâte',description:''}]);log(r,'hra')

  r=await ins('dyf',[{sense:'hôte',concept:'Hospitalité/Accueil',description:"Celui qui est reçu chez un autre. L'hospitalité est un lien temporaire mais sacré — l'hôte est sous la protection de celui qui le reçoit."},{sense:'invité',concept:'Hospitalité/Accueil',description:''}]);log(r,'dyf')

  r=await ins('sjl',[{sense:'pierre cuite',concept:'Pierre/Châtiment',description:"Les pierres d'argile durcie utilisées comme châtiment divin. La pierre est permanente et destructrice — elle tombe du ciel et anéantit."},{sense:'registre',concept:'Divers',description:'Le livre dans lequel sont consignés les actes.'}]);log(r,'sjl')

  r=await ins('rht',[{sense:'groupe d\'hommes',concept:'Groupe/Clan',description:"Petit groupe de personnes unies. Le raht est un nombre restreint de personnes — entre trois et dix."},{sense:'clan',concept:'Groupe/Clan',description:''}]);log(r,'rht')

  r=await ins('fyn',[{sense:'où',concept:'Interrogation spatiale',description:"Particule qui demande le lieu. L'interrogation spatiale cherche la position — elle est directionnelle vers le lieu inconnu."},{sense:'en quel lieu',concept:'Interrogation spatiale',description:''}]);log(r,'fyn')

  r=await ins('wrd',[{sense:'arriver à l\'eau',concept:'Arrivée/Accès',description:"Acte de parvenir à un point d'eau ou à une destination. L'arrivée est directionnelle — elle aboutit au but. Le wird est l'accès à la source."},{sense:'entrer',concept:'Arrivée/Accès',description:''},{sense:'rose',concept:'Divers',description:'La fleur rouge — couleur de ce qui est frais.'}]);log(r,'wrd')

  r=await ins('rfd',[{sense:'aider',concept:'Aide/Renfort',description:"Acte de fournir un soutien. L'aide sort de l'aidant et atteint l'aidé — directionnelle."},{sense:'renforcer',concept:'Aide/Renfort',description:''}]);log(r,'rfd')

  r=await ins('shqy',[{sense:'être malheureux',concept:'Malheur/Damnation',description:"État de celui qui est voué à la souffrance. Le malheur est permanent chez le damné — il est l'opposé du bonheur. Le shaqi est celui dont la fin est la perdition."},{sense:'être damné',concept:'Malheur/Damnation',description:''}]);log(r,'shqy')

  console.log('\n=== Batch 242 terminé — '+done+'/2321 ===')
}
run().catch(e=>{console.error('ERR:',e);process.exit(1)})
