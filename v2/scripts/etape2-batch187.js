const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 1458, total = 2321

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

  // 1. na (نو) — variante de nna (intention) ou particule
  r=await ins('na',[
    {sense:'nous (pronom)',concept:'Pronom/Première personne',description:"Pronom inclusif qui unit le locuteur à d'autres. Le nous crée une communauté de parole — c'est un lien permanent tant que le groupe existe."},
    {sense:'notre',concept:'Pronom/Première personne',description:''},
  ]);log(r,'na')

  // 2. qst (قسط) — être juste, équité, balance
  r=await ins('qst',[
    {sense:'être juste',concept:'Justice/Équité',description:"État de celui qui donne à chacun exactement ce qui lui revient, sans excès ni manque. La justice est un état intérieur de rectitude — elle est permanente chez le juste et se manifeste dans chaque acte. Le qist est la balance exacte qui ne penche d'aucun côté."},
    {sense:'équité',concept:'Justice/Équité',description:''},
    {sense:'balance',concept:'Justice/Équité',description:''},
    {sense:'être injuste (qasata)',concept:'Divers',description:'Sens inverse selon la forme verbale — s\'écarter de la justice.'},
  ]);log(r,'qst')

  // 3. xbt (خبط) — variante de kbt (frapper au hasard)
  r=await ins('xbt',[
    {sense:'frapper au hasard',concept:'Confusion/Aveuglement',description:"Acte de celui qui agit sans voir. La confusion est un mouvement désordonné — celui qui est atteint marche comme un aveugle."},
    {sense:'tâtonner',concept:'Confusion/Aveuglement',description:''},
  ]);log(r,'xbt')

  // 4. ghrr (غرر) — tromper, duper, orgueil, être trompé
  r=await ins('ghrr',[
    {sense:'tromper',concept:'Tromperie/Illusion',description:"Acte extérieur de donner une fausse impression pour induire en erreur. La tromperie sort du trompeur et atteint le trompé — c'est directionnel et destructeur. L'illusion fait voir ce qui n'est pas comme s'il était. Le ghurur est la séduction trompeuse de ce monde."},
    {sense:'duper',concept:'Tromperie/Illusion',description:''},
    {sense:'être orgueilleux',concept:'Tromperie/Illusion',description:''},
    {sense:'être trompé',concept:'Tromperie/Illusion',description:''},
  ]);log(r,'ghrr')

  // 5. ftr (فتر) — créer originellement, fendre, nature
  r=await ins('ftr',[
    {sense:'créer originellement',concept:'Création originelle/Nature',description:"Acte de faire exister pour la première fois, de fendre le néant pour en faire sortir l'être. La fitra est la création première — l'état naturel dans lequel Dieu a créé l'homme. C'est un acte unique et fondateur qui établit la nature permanente de chaque être."},
    {sense:'nature originelle (fitra)',concept:'Création originelle/Nature',description:''},
    {sense:'fendre',concept:'Création originelle/Nature',description:''},
    {sense:'s\'affaiblir',concept:'Affaiblissement',description:"État de ce qui perd sa force progressivement. L'affaiblissement est un processus qui réduit la vigueur — il est temporaire ou permanent selon la cause."},
  ]);log(r,'ftr')

  // 6. hm m (همم) — se soucier, projet, résolution
  r=await ins('hm m',[
    {sense:'se soucier',concept:'Souci/Résolution',description:"État intérieur de préoccupation face à une situation qui demande action. Le souci est un poids mental permanent tant que le problème n'est pas résolu — il mobilise l'esprit et pousse à la résolution."},
    {sense:'avoir l\'intention',concept:'Souci/Résolution',description:''},
    {sense:'être sur le point de',concept:'Souci/Résolution',description:''},
    {sense:'souci',concept:'Souci/Résolution',description:''},
  ]);log(r,'hm m')

  // 7. sdr (صدر) — poitrine, sortir, source, émettre
  r=await ins('sdr',[
    {sense:'poitrine',concept:'Poitrine/Intériorité',description:"La partie avant du torse qui contient le cœur et les poumons. La poitrine est le siège des émotions et des secrets — ce qui est dans le sadr est caché du monde. L'ouverture de la poitrine (sharh as-sadr) est l'élargissement de l'âme."},
    {sense:'cœur (intérieur)',concept:'Poitrine/Intériorité',description:''},
    {sense:'sortir',concept:'Émission/Sortie',description:"Acte de quitter l'intérieur pour aller vers l'extérieur. La sortie est directionnelle — elle va du dedans vers le dehors."},
    {sense:'émettre',concept:'Émission/Sortie',description:''},
    {sense:'source (début)',concept:'Divers',description:'Le point d\'où les choses partent — la poitrine comme début.'},
  ]);log(r,'sdr')

  // 8. wlj (ولج) — entrer, pénétrer
  r=await ins('wlj',[
    {sense:'entrer',concept:'Entrée/Pénétration',description:"Acte de passer de l'extérieur vers l'intérieur. L'entrée est directionnelle — elle va du dehors vers le dedans. Entrer c'est franchir le seuil qui sépare deux espaces."},
    {sense:'pénétrer',concept:'Entrée/Pénétration',description:''},
    {sense:'s\'introduire',concept:'Entrée/Pénétration',description:''},
  ]);log(r,'wlj')

  // 9. llhm (لهم → لهم) — pronom "à eux"
  r=await ins('llhm',[
    {sense:'à eux',concept:'Attribution/Possession',description:"Préposition et pronom qui indiquent l'appartenance au groupe absent. L'attribution est directionnelle — elle va de la chose vers ceux à qui elle est destinée."},
    {sense:'pour eux',concept:'Attribution/Possession',description:''},
  ]);log(r,'llhm')

  // 10. nza (نزع) — arracher, retirer, ôter
  r=await ins('nza',[
    {sense:'arracher',concept:'Arrachement/Extraction',description:"Acte extérieur de retirer par la force ce qui était en place. L'arrachement sort de celui qui arrache et atteint ce qui est arraché — c'est directionnel et violent. Arracher c'est séparer par la force ce qui était attaché."},
    {sense:'retirer',concept:'Arrachement/Extraction',description:''},
    {sense:'ôter',concept:'Arrachement/Extraction',description:''},
    {sense:'tenter (l\'âme)',concept:'Divers',description:'Le shaytan qui arrache l\'homme de sa sérénité.'},
  ]);log(r,'nza')

  console.log('\n=== Batch 187 terminé — '+done+'/2321 ===')
}
run().catch(e=>{console.error('ERR:',e);process.exit(1)})
