const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 1598, total = 2321

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

  r=await ins('lzy',[
    {sense:'plaisir',concept:'Plaisir/Jouissance',description:"État intérieur de satisfaction face à ce qui est agréable. Le plaisir est permanent au paradis et éphémère en ce monde."},
    {sense:'délice',concept:'Plaisir/Jouissance',description:''},
  ]);log(r,'lzy')

  r=await ins('bka',[
    {sense:'Bakkah (La Mecque)',concept:'Lieu sacré',description:"Ancien nom de La Mecque, le lieu le plus sacré de l'islam. Bakkah est un lieu permanent et inchangeable — le centre du monde pour les croyants."},
    {sense:'foule qui se bouscule',concept:'Lieu sacré',description:''},
  ]);log(r,'bka')

  r=await ins('fzz',[
    {sense:'être dur',concept:'Dureté/Rudesse',description:"État de celui dont le caractère est rude et repoussant. La dureté est un état intérieur permanent qui éloigne les gens — le fazz est celui dont la rudesse repousse ceux qui l'approchent. C'est l'opposé de la douceur."},
    {sense:'être rude',concept:'Dureté/Rudesse',description:''},
    {sense:'grossièreté',concept:'Dureté/Rudesse',description:''},
  ]);log(r,'fzz')

  r=await ins('ghlz',[
    {sense:'être dur de cœur',concept:'Dureté/Sévérité',description:"État intérieur de celui dont le cœur est fermé à la compassion. La dureté du cœur est permanente chez celui qui ne s'adoucit pas — elle empêche la miséricorde de pénétrer. Le ghaliz est sévère et inflexible."},
    {sense:'sévérité',concept:'Dureté/Sévérité',description:''},
    {sense:'être épais',concept:'Divers',description:'Sens physique de ce qui est gros et massif.'},
  ]);log(r,'ghlz')

  r=await ins('\u0161wr',[
    {sense:'consulter',concept:'Consultation/Conseil',description:"Acte de demander l'avis des autres avant de prendre une décision. La consultation sort du décideur et atteint les conseillers — c'est bidirectionnel et crée un processus collectif de décision. La shura est la délibération qui précède l'action."},
    {sense:'délibérer',concept:'Consultation/Conseil',description:''},
    {sense:'conseil (shura)',concept:'Consultation/Conseil',description:''},
    {sense:'montrer',concept:'Divers',description:'Extraire et montrer — le miel extrait de la ruche.'},
  ]);log(r,'\u0161wr')

  r=await ins('ghzw',[
    {sense:'faire la guerre',concept:'Expédition/Combat',description:"Acte de partir en campagne militaire contre un ennemi. L'expédition sort des combattants et se dirige vers l'ennemi — c'est directionnel et ponctuel. Le ghazw est la sortie armée pour défendre ou conquérir."},
    {sense:'expédition militaire',concept:'Expédition/Combat',description:''},
    {sense:'combattre',concept:'Expédition/Combat',description:''},
  ]);log(r,'ghzw')

  r=await ins('dh lk',[
    {sense:'celui-là',concept:'Démonstratif/Distance',description:"Pronom qui désigne ce qui est éloigné. Le démonstratif de distance pointe vers le lointain."},
    {sense:'cela',concept:'Démonstratif/Distance',description:''},
  ]);log(r,'dh lk')

  r=await ins('bwae',[
    {sense:'revenir',concept:'Retour/Mérite',description:"Acte de retourner avec un résultat. Le retour est directionnel — il ramène celui qui est parti avec ce qu'il a acquis. Le bawa est le fait de mériter un résultat, bon ou mauvais, comme retour de ses actes."},
    {sense:'mériter',concept:'Retour/Mérite',description:''},
    {sense:'encourir',concept:'Retour/Mérite',description:''},
  ]);log(r,'bwae')

  r=await ins('skht',[
    {sense:'être en colère',concept:'Courroux/Mécontentement',description:"État de désapprobation intense face à ce qui déplaît. Le sakhat est le mécontentement divin face à la désobéissance — c'est un jugement rationnel de rejet, pas une émotion aveugle. Il est directionnel de celui qui est mécontent vers celui qui a fauté."},
    {sense:'mécontentement',concept:'Courroux/Mécontentement',description:''},
    {sense:'courroux',concept:'Courroux/Mécontentement',description:''},
  ]);log(r,'skht')

  r=await ins('dre',[
    {sense:'armure',concept:'Protection/Cuirasse',description:"Vêtement de métal qui protège le corps au combat. L'armure est une protection extérieure permanente tant qu'on la porte — elle sort du forgeron et atteint le guerrier pour le garder des coups."},
    {sense:'cuirasse',concept:'Protection/Cuirasse',description:''},
    {sense:'chemise de mailles',concept:'Protection/Cuirasse',description:''},
  ]);log(r,'dre')

  console.log('\n=== Batch 201 terminé — '+done+'/2321 ===')
}
run().catch(e=>{console.error('ERR:',e);process.exit(1)})
