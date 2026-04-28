const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 1098, total = 2321

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

  // 1. ghd (غضب) — être en colère, désapprouver, sévérité
  r=await ins('ghd',[
    {sense:'être en colère',concept:'Colère/Émotion',description:"État intérieur d'irritation intense face à ce qui est inacceptable. La colère est une émotion qui reste dans celui qui la ressent — elle ne sort pas de lui et n'atteint pas directement l'autre. C'est un bouillonnement ponctuel qui peut devenir permanent s'il se transforme en rancœur."},
    {sense:'être irrité',concept:'Colère/Émotion',description:''},
    {sense:'s\'emporter',concept:'Colère/Émotion',description:''},
    {sense:'désapprouver',concept:'Désapprobation/Jugement',description:"Acte rationnel de juger négativement une action ou une situation. La désapprobation sort de celui qui juge et atteint celui qui est jugé — c'est directionnel et rationnel, pas émotionnel. C'est un verdict de l'esprit, pas un emportement du cœur."},
    {sense:'être sévère',concept:'Désapprobation/Jugement',description:''},
    {sense:'châtier',concept:'Désapprobation/Jugement',description:''},
  ]);log(r,'ghd')

  // 2. khdd (خذذ) — prendre, saisir, adopter
  r=await ins('khdd',[
    {sense:'prendre',concept:'Prise/Saisie',description:"Acte extérieur de s'emparer de quelque chose et de le faire sien. La prise sort de celui qui prend et atteint ce qui est pris — c'est directionnel et ponctuel. Prendre c'est transférer de l'extérieur vers soi, c'est l'acte fondamental de l'acquisition."},
    {sense:'saisir',concept:'Prise/Saisie',description:''},
    {sense:'adopter',concept:'Prise/Saisie',description:''},
    {sense:'commencer',concept:'Prise/Saisie',description:''},
    {sense:'reprocher',concept:'Reproche/Blâme',description:"Acte extérieur d'adresser un blâme à quelqu'un pour sa faute. Le reproche sort du blâmeur et atteint le blâmé — c'est directionnel et ponctuel. Reprocher c'est prendre quelqu'un à partie pour ce qu'il a fait."},
    {sense:'punir',concept:'Reproche/Blâme',description:''},
  ]);log(r,'khdd')

  // 3. qwh (قوة) — être fort, pouvoir, puissance, nourriture
  r=await ins('qwh',[
    {sense:'être fort',concept:'Force/Puissance',description:"État de celui qui possède la capacité d'agir et de résister. La force est intérieure et permanente chez celui qui la possède — elle peut se manifester vers l'extérieur quand elle s'exerce. La puissance est la force en potentiel, prête à être déployée."},
    {sense:'puissance',concept:'Force/Puissance',description:''},
    {sense:'capacité',concept:'Force/Puissance',description:''},
    {sense:'renforcer',concept:'Force/Puissance',description:''},
    {sense:'nourriture',concept:'Subsistance',description:"Ce qui alimente le corps et lui donne sa force. La nourriture est la source de la force physique — elle vient de l'extérieur et nourrit l'intérieur. Sans nourriture la force s'épuise."},
  ]);log(r,'qwh')

  // 4. in () — particule conditionnelle
  r=await ins('in',[
    {sense:'si',concept:'Condition/Hypothèse',description:"Particule qui ouvre une possibilité non encore réalisée. La condition suspend la certitude — elle crée un monde possible qui dépend d'un autre événement. Le si lie deux réalités dans un rapport de cause à effet potentiel."},
    {sense:'si jamais',concept:'Condition/Hypothèse',description:''},
    {sense:'que (négation)',concept:'Condition/Hypothèse',description:''},
  ]);log(r,'in')

  // 5. bbl (ببل) — Babylone
  r=await ins('bbl',[
    {sense:'Babylone',concept:'Lieu/Civilisation',description:"Ancienne cité mésopotamienne, lieu de la magie et de la déchéance. Babylone est un nom propre permanent qui désigne un lieu historique précis — dans le Coran, elle est le cadre de l'épreuve de la sorcellerie et de la tentation."},
    {sense:'lieu de la sorcellerie',concept:'Lieu/Civilisation',description:''},
  ]);log(r,'bbl')

  // 6. hrw (هرو → هر) — couler, verser, Harout (ange)
  r=await ins('hrw',[
    {sense:'Harout (nom propre)',concept:'Nom propre',description:"Nom de l'un des deux anges envoyés à Babylone comme épreuve. C'est un nom propre permanent et inchangeable."},
    {sense:'couler',concept:'Écoulement',description:"Mouvement d'un liquide qui descend et se répand. L'écoulement est directionnel du haut vers le bas — il est permanent tant que la source dure."},
    {sense:'verser',concept:'Écoulement',description:''},
  ]);log(r,'hrw')

  // 7. mrw (مرو → مروة) — Marwa, pierre, virilité
  r=await ins('mrw',[
    {sense:'Marwa (nom propre)',concept:'Nom propre/Lieu',description:"Nom de l'une des deux collines du rituel du pèlerinage à La Mecque. C'est un lieu sacré permanent lié aux rites du hajj."},
    {sense:'pierre dure',concept:'Pierre/Solidité',description:"Roche blanche et dure dont on tire le feu. La pierre est permanente et résistante — elle est le symbole de la solidité et de ce qui endure."},
    {sense:'silex',concept:'Pierre/Solidité',description:''},
    {sense:'virilité',concept:'Divers',description:'Qualité masculine de courage et de force — sens dérivé de la dureté de la pierre.'},
  ]);log(r,'mrw')

  // 8. ftn (فتن) — éprouver, tenter, séduire, discorde
  r=await ins('ftn',[
    {sense:'éprouver',concept:'Épreuve/Tentation',description:"Acte de soumettre quelqu'un à un test qui révèle sa vraie nature, comme on éprouve l'or par le feu. L'épreuve sort de celui qui éprouve et atteint celui qui est éprouvé — c'est directionnel et transformateur. La fitna est le creuset qui sépare le pur de l'impur."},
    {sense:'tenter',concept:'Épreuve/Tentation',description:''},
    {sense:'séduire',concept:'Épreuve/Tentation',description:''},
    {sense:'fondre l\'or (purifier par le feu)',concept:'Épreuve/Tentation',description:''},
    {sense:'discorde',concept:'Désordre/Persécution',description:"État de trouble et de division dans une communauté. La discorde sort de ceux qui la sèment et atteint toute la communauté — c'est multidirectionnel et peut devenir permanent si rien ne l'arrête."},
    {sense:'persécution',concept:'Désordre/Persécution',description:''},
    {sense:'châtiment par le feu',concept:'Désordre/Persécution',description:''},
  ]);log(r,'ftn')

  // 9. hma (هما) — pronom duel, eux deux
  r=await ins('hma',[
    {sense:'eux deux',concept:'Pronom/Duel',description:"Pronom qui désigne exactement deux personnes absentes. Le duel crée une paire — ni un seul ni un groupe, mais exactement deux êtres liés. C'est un pronom permanent dans sa fonction de désignation."},
    {sense:'elles deux',concept:'Pronom/Duel',description:''},
  ]);log(r,'hma')

  // 10. mra (مرأ) — homme, femme, digestion, être sain
  r=await ins('mra',[
    {sense:'homme (imru\')',concept:'Personne/Individu',description:"L'être humain individuel, une personne singulière avec son identité propre. La personne est permanente dans son individualité — chaque humain est un être unique et irremplaçable."},
    {sense:'femme (imra\'a)',concept:'Personne/Individu',description:''},
    {sense:'être sain',concept:'Santé/Bienfaisance',description:"État de ce qui nourrit bien et ne cause pas de mal. La santé est un état intérieur de bon fonctionnement — ce qui est sain profite au corps et à l'âme sans nuire."},
    {sense:'être digeste',concept:'Santé/Bienfaisance',description:''},
    {sense:'être bienfaisant',concept:'Santé/Bienfaisance',description:''},
  ]);log(r,'mra')

  console.log('\n=== Batch 151 terminé — '+done+'/2321 ===')
}
run().catch(e=>{console.error('ERR:',e);process.exit(1)})
