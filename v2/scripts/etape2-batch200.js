const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 1588, total = 2321

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

  // 1. nze (نزع) — variante arrachement
  r=await ins('nze',[
    {sense:'arracher',concept:'Arrachement/Extraction',description:"Acte de retirer par la force ce qui était en place. L'arrachement sort de celui qui arrache et atteint ce qui est arraché — directionnel et violent."},
    {sense:'retirer',concept:'Arrachement/Extraction',description:''},
    {sense:'ôter',concept:'Arrachement/Extraction',description:''},
  ]);log(r,'nze')

  // 2. minhum (من + هم) — d'eux (variante)
  r=await ins('minhum',[
    {sense:'d\'eux',concept:'Provenance/Partitivité',description:"Préposition et pronom indiquant l'origine à partir d'un groupe. La provenance est directionnelle — elle part du groupe vers ce qui en sort."},
    {sense:'parmi eux',concept:'Provenance/Partitivité',description:''},
  ]);log(r,'minhum')

  // 3. qlw (قول) — variante parole
  r=await ins('qlw',[
    {sense:'dire',concept:'Parole/Énonciation',description:"Acte fondamental d'exprimer par des mots ce qui est dans l'esprit. La parole sort du locuteur et atteint l'auditeur — c'est directionnel et transformateur."},
    {sense:'parole',concept:'Parole/Énonciation',description:''},
  ]);log(r,'qlw')

  // 4. ewk (عوك) — variante, possiblement retour
  r=await ins('ewk',[
    {sense:'retourner',concept:'Retour',description:"Acte de revenir vers le point de départ. Le retour est directionnel — il ramène d'où l'on est parti."},
    {sense:'revenir',concept:'Retour',description:''},
  ]);log(r,'ewk')

  // 5. ghm (غمم) — couvrir, voiler, angoisse, nuage
  r=await ins('ghm',[
    {sense:'couvrir',concept:'Couverture/Angoisse',description:"Acte de recouvrir quelque chose pour l'obscurcir. La couverture enveloppe et empêche de voir — l'angoisse est le nuage qui couvre le cœur et l'empêche de voir clair. Le ghamm est l'état de celui dont l'âme est couverte de soucis."},
    {sense:'angoisse',concept:'Couverture/Angoisse',description:''},
    {sense:'nuage',concept:'Couverture/Angoisse',description:''},
    {sense:'tristesse',concept:'Couverture/Angoisse',description:''},
  ]);log(r,'ghm')

  // 6. nes (نعس) — somnoler, être somnolent
  r=await ins('nes',[
    {sense:'somnoler',concept:'Somnolence/Assoupissement',description:"État intermédiaire entre la veille et le sommeil où la conscience s'affaiblit. La somnolence est un état temporaire de relâchement — elle baisse la garde et prépare au sommeil. Le nuass est le début du lâcher-prise."},
    {sense:'être somnolent',concept:'Somnolence/Assoupissement',description:''},
    {sense:'s\'assoupir',concept:'Somnolence/Assoupissement',description:''},
  ]);log(r,'nes')

  // 7. awlak (أول) — variante "ceux-là" ou "premiers"
  r=await ins('awlak',[
    {sense:'ceux-là',concept:'Démonstratif/Désignation',description:"Pronom démonstratif pluriel qui désigne un groupe éloigné ou un ensemble de personnes. La désignation est directionnelle vers le groupe visé."},
    {sense:'ces gens',concept:'Démonstratif/Désignation',description:''},
  ]);log(r,'awlak')

  // 8. mtt (متت) — variante possiblement "quand"
  r=await ins('mtt',[
    {sense:'quand',concept:'Interrogation temporelle',description:"Particule qui questionne sur le moment. L'interrogation temporelle cherche à situer dans le temps."},
    {sense:'à quel moment',concept:'Interrogation temporelle',description:''},
  ]);log(r,'mtt')

  // 9. jma (جمع) — rassembler, réunir, totalité
  r=await ins('jma',[
    {sense:'rassembler',concept:'Rassemblement/Union',description:"Acte extérieur de réunir en un seul lieu ou un seul ensemble ce qui était dispersé. Le rassemblement sort de celui qui rassemble et atteint tous ceux qui sont réunis — c'est multidirectionnel vers un point central. Le jama est l'unification de ce qui était séparé."},
    {sense:'réunir',concept:'Rassemblement/Union',description:''},
    {sense:'totalité (jamia)',concept:'Rassemblement/Union',description:''},
    {sense:'vendredi (yawm al-jumua)',concept:'Divers',description:'Le jour du rassemblement de la communauté pour la prière.'},
  ]);log(r,'jma')

  // 10. khdl (خذل) — abandonner, laisser tomber
  r=await ins('khdl',[
    {sense:'abandonner',concept:'Abandon/Lâchage',description:"Acte de retirer son soutien à celui qui en avait besoin au moment critique. L'abandon sort de celui qui lâche et atteint celui qui est laissé — c'est directionnel et dévastateur. Être abandonné c'est se retrouver seul face au danger sans allié."},
    {sense:'laisser tomber',concept:'Abandon/Lâchage',description:''},
    {sense:'ne pas soutenir',concept:'Abandon/Lâchage',description:''},
  ]);log(r,'khdl')

  console.log('\n=== Batch 200 terminé — '+done+'/2321 ===')
}
run().catch(e=>{console.error('ERR:',e);process.exit(1)})
