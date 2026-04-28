const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 1318, total = 2321

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

  // 1. fah (فئة) — groupe, troupe, faction
  r=await ins('fah',[
    {sense:'groupe',concept:'Groupe/Faction',description:"Ensemble de personnes unies par un but ou une cause commune. Le groupe est un corps collectif permanent tant que ses membres restent ensemble — il agit comme une seule entité face aux autres."},
    {sense:'troupe',concept:'Groupe/Faction',description:''},
    {sense:'faction',concept:'Groupe/Faction',description:''},
  ]);log(r,'fah')

  // 2. ghlb (غلب) — vaincre, dominer, l'emporter
  r=await ins('ghlb',[
    {sense:'vaincre',concept:'Victoire/Domination',description:"Acte extérieur de triompher sur un adversaire par la force ou la supériorité. La victoire sort du vainqueur et s'impose au vaincu — c'est directionnel et décisif. Vaincre c'est imposer sa volonté sur celle de l'autre."},
    {sense:'dominer',concept:'Victoire/Domination',description:''},
    {sense:'l\'emporter',concept:'Victoire/Domination',description:''},
    {sense:'surmonter',concept:'Victoire/Domination',description:''},
  ]);log(r,'ghlb')

  // 3. brz (برز) — apparaître, sortir au grand jour, se montrer
  r=await ins('brz',[
    {sense:'apparaître',concept:'Apparition/Manifestation',description:"Acte de sortir de l'invisible vers le visible, de se montrer au grand jour. L'apparition est directionnelle de l'intérieur vers l'extérieur — c'est le passage du caché au manifeste. Ce qui apparaît ne peut plus être ignoré."},
    {sense:'sortir au grand jour',concept:'Apparition/Manifestation',description:''},
    {sense:'se montrer',concept:'Apparition/Manifestation',description:''},
    {sense:'s\'avancer pour combattre',concept:'Confrontation',description:"Acte de sortir des rangs pour affronter l'ennemi en face à face. La confrontation est bidirectionnelle — les deux adversaires s'avancent l'un vers l'autre."},
  ]);log(r,'brz')

  // 4. jlw (جلو) — révéler, montrer clairement, polir
  r=await ins('jlw',[
    {sense:'révéler',concept:'Révélation/Clarification',description:"Acte de rendre visible et clair ce qui était caché ou obscur. La révélation sort de la source de lumière et atteint ce qui était dans l'ombre — c'est directionnel et transformateur. Révéler c'est ôter le voile pour montrer la réalité."},
    {sense:'montrer clairement',concept:'Révélation/Clarification',description:''},
    {sense:'polir',concept:'Révélation/Clarification',description:''},
    {sense:'expulser',concept:'Divers',description:'Faire sortir d\'un lieu — sens de dévoilement spatial.'},
  ]);log(r,'jlw')

  // 5. frgh (فرغ) — variante de frg (être vide, se libérer)
  r=await ins('frgh',[
    {sense:'être vide',concept:'Vacuité/Libération',description:"État de ce qui ne contient plus rien. La vacuité est un état permanent — l'espace libre attend d'être rempli à nouveau."},
    {sense:'se libérer',concept:'Vacuité/Libération',description:''},
    {sense:'verser',concept:'Versement',description:"Acte de faire couler du haut vers le bas. Le versement est directionnel et ponctuel."},
  ]);log(r,'frgh')

  // 6. thbt (ثبت) — être ferme, stable, constant, confirmer
  r=await ins('thbt',[
    {sense:'être ferme',concept:'Fermeté/Stabilité',description:"État de ce qui ne bouge pas et ne vacille pas sous la pression. La fermeté est intérieure et permanente — elle est la qualité de ce qui résiste aux épreuves sans fléchir. Le ferme est celui que rien n'ébranle."},
    {sense:'être stable',concept:'Fermeté/Stabilité',description:''},
    {sense:'être constant',concept:'Fermeté/Stabilité',description:''},
    {sense:'confirmer',concept:'Confirmation/Preuve',description:"Acte de rendre certain ce qui était douteux. La confirmation sort de la preuve et atteint l'esprit de celui qui doute — c'est directionnel et crée une certitude permanente."},
    {sense:'affermir',concept:'Fermeté/Stabilité',description:''},
  ]);log(r,'thbt')

  // 7. hzm (هزم) — vaincre, mettre en déroute
  r=await ins('hzm',[
    {sense:'mettre en déroute',concept:'Défaite/Déroute',description:"Acte extérieur de disperser l'ennemi par la force, de le faire fuir en désordre. La déroute sort du vainqueur et frappe le vaincu — c'est directionnel et dévastateur. La défaite est ponctuelle dans le combat mais ses conséquences sont durables."},
    {sense:'vaincre',concept:'Défaite/Déroute',description:''},
    {sense:'écraser',concept:'Défaite/Déroute',description:''},
  ]);log(r,'hzm')

  // 8. dwd (دود → داود) — David (nom propre)
  r=await ins('dwd',[
    {sense:'David (nom propre)',concept:'Nom propre',description:"Nom du prophète-roi qui a vaincu Goliath et reçu le Zabour (Psaumes). C'est un nom propre permanent — David est le modèle du roi juste et du serviteur de Dieu."},
  ]);log(r,'dwd')

  // 9. dfe (دفع) — repousser, payer, défendre
  r=await ins('dfe',[
    {sense:'repousser',concept:'Repoussement/Défense',description:"Acte extérieur d'éloigner par la force ce qui s'approche de façon indésirable. Le repoussement sort de celui qui repousse et atteint ce qui est repoussé — c'est directionnel et protecteur. Repousser c'est empêcher le mal d'arriver."},
    {sense:'défendre',concept:'Repoussement/Défense',description:''},
    {sense:'payer',concept:'Repoussement/Défense',description:''},
    {sense:'éloigner',concept:'Repoussement/Défense',description:''},
  ]);log(r,'dfe')

  // 10. fadl (فضل) — être supérieur, excéder, grâce, faveur
  r=await ins('fadl',[
    {sense:'être supérieur',concept:'Supériorité/Grâce',description:"État de ce qui dépasse les autres en qualité ou en quantité. La supériorité est un état permanent chez celui qui excelle — elle est le surplus de bien qui distingue. Le fadl de Dieu est la grâce qui dépasse ce que l'on mérite."},
    {sense:'excéder',concept:'Supériorité/Grâce',description:''},
    {sense:'grâce divine',concept:'Supériorité/Grâce',description:''},
    {sense:'faveur',concept:'Supériorité/Grâce',description:''},
    {sense:'reste',concept:'Divers',description:'Ce qui dépasse et reste après la distribution.'},
  ]);log(r,'fadl')

  console.log('\n=== Batch 173 terminé — '+done+'/2321 ===')
}
run().catch(e=>{console.error('ERR:',e);process.exit(1)})
