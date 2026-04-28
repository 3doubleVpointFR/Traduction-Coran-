const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 1278, total = 2321

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

  // 1. rda (رضع) — allaiter, téter, nourrir au sein
  r=await ins('rda',[
    {sense:'allaiter',concept:'Allaitement/Nourriture',description:"Acte extérieur de donner le sein à un nourrisson pour le nourrir. L'allaitement sort de la mère et atteint l'enfant — c'est directionnel et crée un lien permanent de parenté de lait. Allaiter c'est donner la vie après la naissance par la nourriture."},
    {sense:'téter',concept:'Allaitement/Nourriture',description:''},
    {sense:'nourrir au sein',concept:'Allaitement/Nourriture',description:''},
    {sense:'nourrice',concept:'Allaitement/Nourriture',description:''},
  ]);log(r,'rda')

  // 2. an () — particule que/de
  r=await ins('an',[
    {sense:'que',concept:'Subordination/Lien',description:"Particule qui introduit une proposition subordonnée et la lie à la principale. Le an crée un pont entre deux idées — il subordonne l'une à l'autre. C'est un outil rationnel de construction de la pensée complexe."},
    {sense:'de',concept:'Subordination/Lien',description:''},
    {sense:'pour que',concept:'Subordination/Lien',description:''},
  ]);log(r,'an')

  // 3. zrw (ذرو) — variante dispersion/progéniture
  r=await ins('zrw',[
    {sense:'disperser',concept:'Dispersion/Éparpillement',description:"Acte de répandre dans toutes les directions. La dispersion est multidirectionnelle et souvent irréversible."},
    {sense:'progéniture',concept:'Descendance/Multiplication',description:"Les enfants qui se multiplient à travers les générations — la vie qui se répand dans le temps."},
    {sense:'atome',concept:'Petitesse/Infime',description:"La plus petite chose perceptible — le grain de poussière emporté par le vent."},
  ]);log(r,'zrw')

  // 4. hfz (حفظ) — garder, préserver, mémoriser, protéger
  r=await ins('hfz',[
    {sense:'garder',concept:'Préservation/Protection',description:"Acte extérieur de maintenir quelque chose en sécurité et en bon état. La préservation sort du gardien et atteint ce qui est gardé — c'est directionnel et permanent tant que le gardien veille. Garder c'est empêcher la perte, la corruption et l'oubli."},
    {sense:'préserver',concept:'Préservation/Protection',description:''},
    {sense:'protéger',concept:'Préservation/Protection',description:''},
    {sense:'mémoriser',concept:'Mémorisation',description:"Acte intérieur de graver dans la mémoire pour ne pas oublier. La mémorisation est un acte ponctuel qui crée un état permanent de savoir — ce qui est mémorisé reste accessible dans l'esprit."},
    {sense:'surveiller',concept:'Préservation/Protection',description:''},
  ]);log(r,'hfz')

  // 5. wse (وسع) — être vaste, contenir, englober
  r=await ins('wse',[
    {sense:'être vaste',concept:'Vastitude/Ampleur',description:"État de ce qui s'étend largement et peut contenir beaucoup. La vastitude est permanente dans ce qui est vaste — elle est la capacité d'accueillir sans être rempli. Le vaste contient sans être contraint."},
    {sense:'contenir',concept:'Vastitude/Ampleur',description:''},
    {sense:'englober',concept:'Vastitude/Ampleur',description:''},
    {sense:'aisance',concept:'Vastitude/Ampleur',description:''},
    {sense:'élargir',concept:'Divers',description:'Rendre plus vaste — acte d\'expansion.'},
  ]);log(r,'wse')

  // 6. qtr (قتر) — être avare, économiser, mesurer
  r=await ins('qtr',[
    {sense:'être avare',concept:'Avarice/Parcimonie',description:"État intérieur de celui qui retient ce qu'il a et refuse de le partager. L'avarice est permanente chez l'avare — elle empêche la générosité. C'est une rétention excessive qui dépasse la simple économie pour devenir une privation de l'autre."},
    {sense:'être parcimonieux',concept:'Avarice/Parcimonie',description:''},
    {sense:'restreindre la dépense',concept:'Avarice/Parcimonie',description:''},
  ]);log(r,'qtr')

  // 7. khff (خفف) — variante de xff (léger, skip probable)
  r=await ins('khff',[
    {sense:'être léger',concept:'Légèreté/Allègement',description:"État de ce qui pèse peu et se déplace facilement. La légèreté est l'opposé du poids — elle libère de ce qui tire vers le bas. Ce qui est léger monte et avance sans effort."},
    {sense:'alléger',concept:'Légèreté/Allègement',description:''},
    {sense:'se hâter',concept:'Vitesse',description:"Agir rapidement sans traîner. La hâte est liée à la légèreté — celui qui est léger est rapide."},
  ]);log(r,'khff')

  // 8. rkb (ركب) — monter, chevaucher, composer, embarquer
  r=await ins('rkb',[
    {sense:'monter',concept:'Montée/Chevauchée',description:"Acte de s'élever sur un animal ou un véhicule pour se déplacer. La montée est directionnelle vers le haut — celui qui monte se place au-dessus de sa monture. Chevaucher c'est dominer ce qui porte et diriger le mouvement."},
    {sense:'chevaucher',concept:'Montée/Chevauchée',description:''},
    {sense:'embarquer',concept:'Montée/Chevauchée',description:''},
    {sense:'composer',concept:'Composition/Assemblage',description:"Acte de combiner des éléments pour en faire un tout fonctionnel. La composition unit les parties — c'est un acte extérieur qui crée de la complexité à partir de la simplicité."},
    {sense:'genoux',concept:'Divers',description:'L\'articulation sur laquelle on monte — sens physique.'},
  ]);log(r,'rkb')

  // 9. mam (مام) — variante de umm (imam, mère)
  r=await ins('mam',[
    {sense:'guide (imam)',concept:'Guide/Direction',description:"Celui qui se tient devant et que les autres suivent. Le guide est directionnel — il pointe la direction et les autres marchent derrière lui. C'est un rôle permanent tant que dure l'autorité."},
    {sense:'devant',concept:'Guide/Direction',description:''},
    {sense:'modèle',concept:'Guide/Direction',description:''},
  ]);log(r,'mam')

  // 10. nsf (نصف) — moitié, milieu, être juste
  r=await ins('nsf',[
    {sense:'moitié',concept:'Division/Moitié',description:"La part exacte qui résulte du partage en deux parties égales. La moitié est la mesure de l'équilibre — elle donne à chacun la même part. Diviser en deux c'est créer une justice mathématique."},
    {sense:'milieu',concept:'Division/Moitié',description:''},
    {sense:'être juste',concept:'Justice/Équité',description:"État de celui qui donne à chacun ce qui lui revient sans pencher d'un côté. La justice est un état intérieur permanent de l'âme équitable — elle se manifeste dans le partage et le jugement."},
    {sense:'équité',concept:'Justice/Équité',description:''},
  ]);log(r,'nsf')

  console.log('\n=== Batch 169 terminé — '+done+'/2321 ===')
}
run().catch(e=>{console.error('ERR:',e);process.exit(1)})
