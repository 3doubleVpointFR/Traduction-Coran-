const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 1518, total = 2321

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

  // 1. rbn (ربن) — rabbin, seigneurial, éducateur
  r=await ins('rbn',[
    {sense:'rabbin (rabbani)',concept:'Éducation/Autorité religieuse',description:"Celui qui enseigne et guide par sa connaissance de Dieu et de sa loi. Le rabbani est un éducateur permanent — il forme les gens par la science et la pratique. C'est celui qui s'est consacré au savoir divin."},
    {sense:'éducateur religieux',concept:'Éducation/Autorité religieuse',description:''},
    {sense:'seigneurial',concept:'Éducation/Autorité religieuse',description:''},
  ]);log(r,'rbn')

  // 2. drs (درس) — étudier, effacer, apprendre
  r=await ins('drs',[
    {sense:'étudier',concept:'Étude/Apprentissage',description:"Acte de se consacrer à la lecture et à l'assimilation d'un savoir. L'étude est un mouvement intérieur de l'esprit vers la connaissance — elle est directionnelle du texte vers l'esprit. Étudier c'est frotter l'esprit contre le texte jusqu'à ce que le sens pénètre."},
    {sense:'apprendre',concept:'Étude/Apprentissage',description:''},
    {sense:'lire et relire',concept:'Étude/Apprentissage',description:''},
    {sense:'effacer (traces)',concept:'Effacement',description:"Processus de disparition des traces par le temps et l'usage. L'effacement est permanent — ce qui est effacé ne revient plus."},
  ]);log(r,'drs')

  // 3. ghr (غرر) — variante tromperie (skip probable)
  r=await ins('ghr',[
    {sense:'tromper',concept:'Tromperie/Illusion',description:"Acte de donner une fausse impression. La tromperie sort du trompeur et atteint le trompé — directionnel et destructeur."},
    {sense:'duper',concept:'Tromperie/Illusion',description:''},
    {sense:'être trompé',concept:'Tromperie/Illusion',description:''},
  ]);log(r,'ghr')

  // 4. zdd (زدد → زاد) — augmenter, ajouter, surplus
  r=await ins('zdd',[
    {sense:'augmenter',concept:'Augmentation/Surplus',description:"Acte d'ajouter quelque chose à ce qui existe déjà pour le rendre plus grand. L'augmentation est directionnelle vers le plus — elle enrichit et élargit. Ce qui augmente grandit au-delà de sa mesure initiale."},
    {sense:'ajouter',concept:'Augmentation/Surplus',description:''},
    {sense:'surplus',concept:'Augmentation/Surplus',description:''},
  ]);log(r,'zdd')

  // 5. hwn (هون) — être facile, être méprisé, humiliation
  r=await ins('hwn',[
    {sense:'être facile',concept:'Facilité/Légèreté',description:"État de ce qui ne demande pas d'effort. La facilité est un état permanent de ce qui est simple — elle rend accessible ce qui semblait difficile."},
    {sense:'humiliation',concept:'Humiliation/Mépris',description:"État de celui qui est rabaissé et privé de dignité. L'humiliation vient de l'extérieur et atteint celui qui est humilié — c'est directionnel et dégradant. Le hawan est l'abaissement qui ôte tout honneur."},
    {sense:'être méprisé',concept:'Humiliation/Mépris',description:''},
  ]);log(r,'hwn')

  // 6. hðr (حذر) — se méfier, être prudent, craindre
  r=await ins('h\u00F0r',[
    {sense:'se méfier',concept:'Prudence/Méfiance',description:"État intérieur d'alerte face à un danger possible. La prudence est permanente chez celui qui est vigilant — elle est la capacité de prévoir le mal et de l'éviter. Se méfier c'est garder les yeux ouverts sur ce qui menace."},
    {sense:'être prudent',concept:'Prudence/Méfiance',description:''},
    {sense:'craindre',concept:'Prudence/Méfiance',description:''},
    {sense:'prendre garde',concept:'Prudence/Méfiance',description:''},
  ]);log(r,'h\u00F0r')

  // 7. bi () — préposition "par, avec, en"
  r=await ins('bi',[
    {sense:'par',concept:'Instrument/Moyen',description:"Préposition qui indique le moyen, l'instrument ou la cause. Le bi lie l'acte à son moyen — c'est le pont entre l'agent et son outil. C'est par quelque chose qu'on accomplit l'acte."},
    {sense:'avec',concept:'Instrument/Moyen',description:''},
    {sense:'en',concept:'Instrument/Moyen',description:''},
  ]);log(r,'bi')

  // 8. lahum () — à eux (préposition + pronom)
  r=await ins('lahum',[
    {sense:'à eux',concept:'Attribution/Possession',description:"Préposition et pronom qui indiquent l'appartenance au groupe masculin absent. L'attribution est directionnelle vers ceux à qui la chose est destinée."},
    {sense:'pour eux',concept:'Attribution/Possession',description:''},
  ]);log(r,'lahum')

  // 9. wda (وضع) — variante de wde (poser, skip probable)
  r=await ins('wda',[
    {sense:'poser',concept:'Dépôt/Placement',description:"Acte de mettre quelque chose en place. Le placement est directionnel du haut vers le bas — on pose ce qu'on portait."},
    {sense:'accoucher',concept:'Dépôt/Placement',description:''},
    {sense:'établir',concept:'Dépôt/Placement',description:''},
  ]);log(r,'wda')

  // 10. bkk (بكك) — Bakkah (La Mecque), foule
  r=await ins('bkk',[
    {sense:'Bakkah (La Mecque)',concept:'Lieu sacré',description:"Ancien nom de La Mecque, le lieu le plus sacré de l'islam où se trouve la Kaaba. Bakkah est un lieu permanent et inchangeable — il est le centre du monde pour les croyants, le point vers lequel tous se tournent."},
    {sense:'briser les cous (foule)',concept:'Lieu sacré',description:''},
  ]);log(r,'bkk')

  console.log('\n=== Batch 193 terminé — '+done+'/2321 ===')
}
run().catch(e=>{console.error('ERR:',e);process.exit(1)})
