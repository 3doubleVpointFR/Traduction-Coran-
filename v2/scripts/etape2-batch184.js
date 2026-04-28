const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 1428, total = 2321

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

  // 1. hiya (هيء) — elle (pronom féminin)
  r=await ins('hiya',[
    {sense:'elle',concept:'Pronom/Troisième personne féminin',description:"Pronom qui désigne l'absente féminine. Le pronom pointe vers celle qui n'est pas présente — c'est directionnel vers l'absent féminin."},
    {sense:'c\'est elle',concept:'Pronom/Troisième personne féminin',description:''},
  ]);log(r,'hiya')

  // 2. klf (كلف) — charger, imposer, coûter, être attaché
  r=await ins('klf',[
    {sense:'charger quelqu\'un',concept:'Charge/Obligation',description:"Acte extérieur d'imposer une tâche ou un fardeau à quelqu'un. La charge sort de celui qui impose et atteint celui qui est chargé — c'est directionnel et crée une obligation permanente. Charger c'est mettre sur les épaules de l'autre une responsabilité."},
    {sense:'imposer',concept:'Charge/Obligation',description:''},
    {sense:'coûter',concept:'Charge/Obligation',description:''},
    {sense:'être attaché à',concept:'Attachement',description:"État intérieur de celui qui est lié affectivement à quelque chose. L'attachement est permanent et difficile à rompre."},
  ]);log(r,'klf')

  // 3. kama () — comme (particule de comparaison)
  r=await ins('kama',[
    {sense:'comme',concept:'Comparaison',description:"Particule qui établit un parallèle entre deux situations. La comparaison crée un pont entre le connu et l'inconnu — c'est un outil rationnel d'explication par analogie."},
    {sense:'de même que',concept:'Comparaison',description:''},
  ]);log(r,'kama')

  // 4. eala () — sur, au-dessus de (préposition)
  r=await ins('eala',[
    {sense:'sur',concept:'Supériorité/Domination spatiale',description:"Préposition qui indique la position au-dessus ou la domination. Être sur quelque chose c'est le surplomber — c'est directionnel du haut vers le bas. La position supérieure implique le pouvoir et la responsabilité."},
    {sense:'au-dessus de',concept:'Supériorité/Domination spatiale',description:''},
    {sense:'contre',concept:'Supériorité/Domination spatiale',description:''},
    {sense:'à la charge de',concept:'Supériorité/Domination spatiale',description:''},
  ]);log(r,'eala')

  // 5. bh (هو) — variante pronom (skip probable)
  r=await ins('bh',[
    {sense:'en lui',concept:'Pronom/Référence',description:"Préposition et pronom qui réfèrent à un masculin absent. La référence pointe vers celui dont on parle — c'est directionnel vers l'absent."},
    {sense:'par lui',concept:'Pronom/Référence',description:''},
  ]);log(r,'bh')

  // 6. enn (عنن) — à propos de, au sujet de
  r=await ins('enn',[
    {sense:'à propos de',concept:'Sujet/Thème',description:"Préposition qui indique le sujet dont on parle. Le sujet est ce autour de quoi tourne le discours — il est le centre permanent de l'attention dans la parole."},
    {sense:'au sujet de',concept:'Sujet/Thème',description:''},
    {sense:'de la part de',concept:'Provenance',description:"Indication de la source d'une information ou d'un acte. La provenance est directionnelle — elle part de l'émetteur."},
  ]);log(r,'enn')

  // 7. aanta () — tu (pronom, variante de ant)
  r=await ins('aanta',[
    {sense:'tu',concept:'Pronom/Deuxième personne',description:"Pronom qui désigne l'interlocuteur direct. Le tu crée une relation directionnelle entre le locuteur et celui à qui il parle — c'est l'adresse qui reconnaît l'autre comme présent."},
    {sense:'toi',concept:'Pronom/Deuxième personne',description:''},
  ]);log(r,'aanta')

  // 8. khfy (خفي) — variante de xfy/khf (cacher)
  r=await ins('khfy',[
    {sense:'cacher',concept:'Dissimulation/Secret',description:"Acte de rendre invisible ce qui existait. La dissimulation crée un état permanent d'invisibilité — ce qui est caché est soustrait au regard."},
    {sense:'être secret',concept:'Dissimulation/Secret',description:''},
    {sense:'être invisible',concept:'Dissimulation/Secret',description:''},
  ]);log(r,'khfy')

  // 9. samw (سمو) — être élevé, ciel, hauteur
  r=await ins('samw',[
    {sense:'être élevé',concept:'Élévation/Ciel',description:"État de ce qui est en haut, au-dessus de tout le reste. L'élévation est permanente dans ce qui est haut — le ciel est l'espace au-dessus de la terre qui n'a pas de limite visible. Le sama est ce qui s'élève au-dessus de la tête de l'homme."},
    {sense:'ciel',concept:'Élévation/Ciel',description:''},
    {sense:'hauteur',concept:'Élévation/Ciel',description:''},
    {sense:'s\'élever',concept:'Élévation/Ciel',description:''},
  ]);log(r,'samw')

  // 10. twra (توری → تورية) — Torah, Livre de Moïse
  r=await ins('twra',[
    {sense:'Torah',concept:'Livre révélé',description:"Le Livre sacré révélé à Moïse contenant la loi divine pour les enfants d'Israël. La Torah est permanente comme texte révélé — elle est la guidance divine sous forme de loi écrite."},
    {sense:'Livre de Moïse',concept:'Livre révélé',description:''},
  ]);log(r,'twra')

  console.log('\n=== Batch 184 terminé — '+done+'/2321 ===')
}
run().catch(e=>{console.error('ERR:',e);process.exit(1)})
