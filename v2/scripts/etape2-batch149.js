const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 1078, total = 2321

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

  // 1. eny (عني) — signifier, vouloir dire, se soucier de, peiner
  r=await ins('eny',[
    {sense:'signifier',concept:'Signification/Sens',description:"Ce que les mots portent comme réalité derrière leur forme. La signification est intérieure au mot et permanente — elle est ce que le locuteur veut faire comprendre. Le sens est le contenu invisible que la parole transporte."},
    {sense:'vouloir dire',concept:'Signification/Sens',description:''},
    {sense:'concerner',concept:'Signification/Sens',description:''},
    {sense:'se soucier de',concept:'Souci/Peine',description:"État intérieur de préoccupation pour quelque chose ou quelqu'un. Le souci est un poids qui reste dans celui qui le porte — il est permanent tant que la cause demeure. Le souci fatigue l'âme et oriente l'attention."},
    {sense:'peiner',concept:'Souci/Peine',description:''},
    {sense:'souffrir',concept:'Souci/Peine',description:''},
  ]);log(r,'eny')

  // 2. mtae (متع) — jouir, profiter, provision, durée
  r=await ins('mtae',[
    {sense:'jouir',concept:'Jouissance/Profit',description:"Expérience intérieure du bien, du plaisir de ce qu'on a ou de ce qu'on reçoit. La jouissance est un état qui lie celui qui jouit à l'objet de sa jouissance — elle est temporaire par nature car tout bien d'ici-bas finit. Profiter c'est goûter ce qui passe."},
    {sense:'profiter',concept:'Jouissance/Profit',description:''},
    {sense:'faire profiter',concept:'Jouissance/Profit',description:''},
    {sense:'provision',concept:'Bien/Provision',description:"Ce qui est donné pour subvenir aux besoins pendant un temps limité. La provision est temporelle — elle s'épuise. C'est le bien matériel qui accompagne le voyageur sur sa route."},
    {sense:'bien temporel',concept:'Bien/Provision',description:''},
    {sense:'prolonger',concept:'Durée/Extension',description:"Acte de repousser la fin, de donner plus de temps. L'extension est directionnelle vers l'avenir — elle allonge ce qui devait s'arrêter. Le sursis est un délai accordé avant l'échéance."},
    {sense:'sursis',concept:'Durée/Extension',description:''},
  ]);log(r,'mtae')

  // 3. kdhb (كذب) — mentir, démentir, fausseté
  r=await ins('kdhb',[
    {sense:'mentir',concept:'Mensonge/Fausseté',description:"Acte extérieur de dire ce qui est contraire à la réalité en le sachant. Le mensonge sort du menteur et atteint celui qui l'écoute — c'est directionnel et trompeur. Le mensonge est ponctuel dans l'acte mais corrompt la confiance de façon permanente."},
    {sense:'dire le faux',concept:'Mensonge/Fausseté',description:''},
    {sense:'fausseté',concept:'Mensonge/Fausseté',description:''},
    {sense:'démentir',concept:'Déni/Rejet',description:"Acte extérieur de déclarer faux ce que quelqu'un dit être vrai. Le déni sort de celui qui dément et atteint celui qui est démenti — c'est directionnel et confrontationnel. Démentir c'est refuser la vérité de l'autre."},
    {sense:'nier',concept:'Déni/Rejet',description:''},
    {sense:'traiter de menteur',concept:'Déni/Rejet',description:''},
  ]);log(r,'kdhb')

  // 4. wy (وي) — particule d'exclamation, malheur
  r=await ins('wy',[
    {sense:'malheur à',concept:'Exclamation/Malheur',description:"Cri qui exprime la détresse ou la menace d'un châtiment. L'exclamation de malheur sort du locuteur et désigne celui qui est visé — c'est directionnel et chargé d'émotion. C'est un avertissement ponctuel qui annonce une conséquence permanente."},
    {sense:'hélas',concept:'Exclamation/Malheur',description:''},
    {sense:'gare à',concept:'Exclamation/Malheur',description:''},
  ]);log(r,'wy')

  // 5. laty (لي → لات) — particule de négation temporelle
  r=await ins('laty',[
    {sense:'ce n\'est pas le moment',concept:'Négation temporelle',description:"Particule qui nie la possibilité d'un acte dans le temps présent. La négation temporelle dit que le moment est passé ou n'est pas encore venu — elle est liée au temps et non à la chose elle-même. C'est un jugement rationnel sur l'inadéquation du moment."},
    {sense:'il n\'y a plus (de temps pour)',concept:'Négation temporelle',description:''},
  ]);log(r,'laty')

  // 6. ny (ني) — pronom suffixe première personne
  r=await ins('ny',[
    {sense:'me',concept:'Pronom/Première personne',description:"Suffixe qui renvoie au locuteur lui-même comme objet de l'action. Le pronom de première personne est permanent dans l'identité — il désigne toujours le même être. Me c'est moi qui reçois l'action, la cible vers laquelle l'acte se dirige."},
    {sense:'moi',concept:'Pronom/Première personne',description:''},
  ]);log(r,'ny')

  // 7. grq (غرق) — noyer, submerger, être englouti
  r=await ins('grq',[
    {sense:'noyer',concept:'Noyade/Submersion',description:"Acte ou état d'être englouti par l'eau au point de ne plus pouvoir respirer. La noyade est un mouvement de l'extérieur vers l'intérieur — l'eau envahit celui qui se noie. C'est ponctuel et souvent irréversible. Être submergé c'est disparaître sous ce qui vous dépasse."},
    {sense:'se noyer',concept:'Noyade/Submersion',description:''},
    {sense:'submerger',concept:'Noyade/Submersion',description:''},
    {sense:'être englouti',concept:'Noyade/Submersion',description:''},
    {sense:'enfoncer (flèche)',concept:'Pénétration/Profondeur',description:"Acte de faire entrer profondément dans quelque chose. La pénétration est directionnelle — elle va de la surface vers la profondeur. C'est un mouvement ponctuel qui crée un état de profondeur."},
    {sense:'être plongé dans',concept:'Pénétration/Profondeur',description:''},
  ]);log(r,'grq')

  // 8. bla (بلا) — éprouver, tester, affliction, user
  r=await ins('bla',[
    {sense:'éprouver',concept:'Épreuve/Test',description:"Acte extérieur de mettre quelqu'un à l'épreuve pour révéler sa vraie nature. L'épreuve sort de celui qui éprouve et atteint celui qui est éprouvé — c'est directionnel et transformateur. L'épreuve est ponctuelle mais révèle un caractère permanent."},
    {sense:'tester',concept:'Épreuve/Test',description:''},
    {sense:'affliction',concept:'Épreuve/Test',description:''},
    {sense:'bienfait (épreuve par le bien)',concept:'Épreuve/Test',description:''},
    {sense:'user',concept:'Usure/Vieillissement',description:"État de ce qui se dégrade avec le temps et l'usage. L'usure est un processus lent et permanent — elle transforme le neuf en vieux, le solide en fragile."},
    {sense:'vieillir',concept:'Usure/Vieillissement',description:''},
  ]);log(r,'bla')

  // 9. maw (موي) — variante de mwy (mort) ou eau
  r=await ins('maw',[
    {sense:'eau',concept:'Eau/Liquide',description:"Substance liquide fondamentale source de toute vie. L'eau est permanente dans sa nature — elle coule, purifie et fait vivre. Sans eau rien ne pousse ni ne survit."},
    {sense:'liquide',concept:'Eau/Liquide',description:''},
  ]);log(r,'maw')

  // 10. dhwr (ذور) — disperser, saupoudrer, atome
  r=await ins('dhwr',[
    {sense:'disperser',concept:'Dispersion/Éparpillement',description:"Acte extérieur de répandre dans toutes les directions ce qui était rassemblé. La dispersion sort de celui qui disperse et atteint ce qui est dispersé — c'est multidirectionnel et souvent irréversible. Ce qui est dispersé au vent ne se rassemble plus."},
    {sense:'répandre',concept:'Dispersion/Éparpillement',description:''},
    {sense:'vanner',concept:'Dispersion/Éparpillement',description:''},
    {sense:'progéniture',concept:'Descendance/Multiplication',description:"Les enfants et les générations qui se multiplient et se répandent. La descendance est la dispersion de la vie à travers le temps — permanente et toujours croissante."},
    {sense:'atome',concept:'Petitesse/Infime',description:"La plus petite chose perceptible, le grain de poussière. L'atome est ce qui est dispersé — infime et léger, emporté par le moindre souffle."},
  ]);log(r,'dhwr')

  console.log('\n=== Batch 149 terminé — '+done+'/2321 ===')
}
run().catch(e=>{console.error('ERR:',e);process.exit(1)})
