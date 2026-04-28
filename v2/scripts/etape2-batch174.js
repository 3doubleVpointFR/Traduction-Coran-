const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 1328, total = 2321

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

  // 1. bye (بيع) — vendre, acheter, allégeance
  r=await ins('bye',[
    {sense:'vendre',concept:'Vente/Transaction',description:"Acte extérieur d'échanger un bien contre un prix. La vente est bidirectionnelle — le vendeur donne le bien et reçoit le prix. C'est un acte ponctuel qui crée un transfert permanent de propriété."},
    {sense:'acheter',concept:'Vente/Transaction',description:''},
    {sense:'conclure un marché',concept:'Vente/Transaction',description:''},
    {sense:'allégeance (bayaa)',concept:'Serment/Engagement',description:"Acte de tendre la main pour sceller un pacte d'obéissance. L'allégeance sort de celui qui prête serment et atteint le chef — c'est directionnel et engageant."},
  ]);log(r,'bye')

  // 2. khll (خلل) — être ami intime, percer, intervalle
  r=await ins('khll',[
    {sense:'être ami intime (khalil)',concept:'Amitié intime',description:"État de proximité si profonde entre deux êtres que l'un pénètre l'essence de l'autre. L'amitié intime est permanente et intérieure — le khalil est celui dont l'amour a pénétré les fibres de l'être. C'est un lien qui va au-delà de la surface."},
    {sense:'ami intime',concept:'Amitié intime',description:''},
    {sense:'percer',concept:'Pénétration/Intervalle',description:"Acte de traverser une surface pour créer un passage. La pénétration est directionnelle — elle va de l'extérieur vers l'intérieur. Percer c'est créer un intervalle dans ce qui était compact."},
    {sense:'intervalle',concept:'Pénétration/Intervalle',description:''},
    {sense:'défaut',concept:'Divers',description:'La faille dans ce qui semblait solide — l\'intervalle comme faiblesse.'},
  ]);log(r,'khll')

  // 3. tbw (تبو) — se repentir, revenir vers Dieu
  r=await ins('tbw',[
    {sense:'se repentir',concept:'Repentir/Retour',description:"Acte intérieur de revenir vers Dieu après s'être éloigné par le péché. Le repentir est un mouvement de l'âme qui se retourne — c'est directionnel vers Dieu et ponctuel dans la décision mais transforme l'être de façon permanente. Se repentir c'est rebrousser chemin et retrouver la voie droite."},
    {sense:'revenir vers Dieu',concept:'Repentir/Retour',description:''},
    {sense:'accepter le repentir',concept:'Repentir/Retour',description:''},
  ]);log(r,'tbw')

  // 4. hyh (هيه → هيهات) — loin, impossible, hélas
  r=await ins('hyh',[
    {sense:'loin (hayhat)',concept:'Éloignement/Impossibilité',description:"Exclamation qui exprime l'impossibilité absolue ou l'éloignement définitif de quelque chose. L'impossibilité est un état permanent — ce qui est hayhat ne peut plus être atteint. C'est un jugement rationnel sur l'irréalisable."},
    {sense:'impossible',concept:'Éloignement/Impossibilité',description:''},
    {sense:'jamais',concept:'Éloignement/Impossibilité',description:''},
  ]);log(r,'hyh')

  // 5. tghw (طغو) — transgresser (variante de tghyn)
  r=await ins('tghw',[
    {sense:'transgresser',concept:'Transgression/Excès',description:"Acte de dépasser les limites fixées, d'aller au-delà de ce qui est permis. La transgression sort du transgresseur et franchit la frontière — c'est directionnel et peut devenir un état permanent chez le tyran."},
    {sense:'tyranniser',concept:'Transgression/Excès',description:''},
    {sense:'déborder',concept:'Transgression/Excès',description:''},
  ]);log(r,'tghw')

  // 6. ghwy (غوي) — s'égarer, séduire, errer
  r=await ins('ghwy',[
    {sense:'s\'égarer',concept:'Égarement/Séduction',description:"État de celui qui a quitté le droit chemin et ne sait plus où il va. L'égarement est un état intérieur permanent tant que la guidance n'est pas retrouvée — il est l'opposé de la droiture. Le ghawiy est celui qui suit ses passions au lieu de la raison."},
    {sense:'séduire (vers le mal)',concept:'Égarement/Séduction',description:''},
    {sense:'errer',concept:'Égarement/Séduction',description:''},
    {sense:'être déçu',concept:'Divers',description:'État de celui qui a été trompé par de fausses promesses.'},
  ]);log(r,'ghwy')

  // 7. erw (عرو → عروة) — anse, prise solide
  r=await ins('erw',[
    {sense:'anse (urwa)',concept:'Prise/Attachement',description:"La partie solide d'un objet à laquelle on s'accroche. L'anse est permanente dans sa fonction — elle offre une prise ferme à celui qui la saisit. L'anse la plus solide est celle qui ne se casse jamais."},
    {sense:'prise solide',concept:'Prise/Attachement',description:''},
    {sense:'lien indéfectible',concept:'Prise/Attachement',description:''},
  ]);log(r,'erw')

  // 8. fsm (فصم) — briser, rompre
  r=await ins('fsm',[
    {sense:'briser',concept:'Rupture/Brisure',description:"Acte de casser ce qui était entier en le séparant avec force. La brisure est un événement ponctuel mais crée un état permanent de séparation — ce qui est brisé ne retrouve pas facilement son intégrité. L'infisam est la rupture de ce qui semblait solide."},
    {sense:'rompre',concept:'Rupture/Brisure',description:''},
    {sense:'se briser',concept:'Rupture/Brisure',description:''},
  ]);log(r,'fsm')

  // 9. laha () — particule de négation
  r=await ins('laha',[
    {sense:'pour elle',concept:'Attribution/Destination',description:"Préposition et pronom qui indiquent que quelque chose est destiné à une entité féminine. L'attribution est directionnelle — elle va de la chose vers celle à qui elle est destinée."},
    {sense:'à elle',concept:'Attribution/Destination',description:''},
  ]);log(r,'laha')

  // 10. shms (شمس) — soleil
  r=await ins('shms',[
    {sense:'soleil',concept:'Lumière/Astre',description:"L'astre qui éclaire le jour et donne chaleur et vie à la terre. Le soleil est permanent dans sa course — il se lève et se couche dans un cycle qui ne s'arrête pas. Le soleil est la source visible de lumière qui rend le monde perceptible."},
    {sense:'jour ensoleillé',concept:'Lumière/Astre',description:''},
    {sense:'être rétif (cheval au soleil)',concept:'Divers',description:'Animal qui refuse d\'avancer — sens concret dérivé.'},
  ]);log(r,'shms')

  console.log('\n=== Batch 174 terminé — '+done+'/2321 ===')
}
run().catch(e=>{console.error('ERR:',e);process.exit(1)})
