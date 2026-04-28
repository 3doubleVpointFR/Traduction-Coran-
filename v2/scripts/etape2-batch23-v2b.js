const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 212, total = 2321

async function ins(key, senses) {
  const {data: wa} = await db.from('word_analyses').select('id').eq('word_key', key).limit(1)
  if (!wa || !wa[0]) return null
  const {count} = await db.from('word_meanings').select('*',{count:'exact',head:true}).eq('analysis_id', wa[0].id).not('concept','is',null)
  if (count > 0) return null
  const {error} = await db.from('word_meanings').insert(senses.map((s,i) => ({...s, analysis_id: wa[0].id, meaning_type:'etymology', display_order:i+1})))
  if (error) { console.log('ERR '+key+': '+error.message); return null }
  return {senses, concepts: [...new Set(senses.map(s => s.concept))]}
}
function log(r, key) {
  if(r) {
    done++
    console.log('\n══════════════════════════════════════════════════════════════')
    console.log('['+done+'/'+total+'] '+key+' — '+r.senses.length+' sens → '+r.concepts.length+' concepts — reste '+(total-done))
    console.log('──────────────────────────────────────────────────────────────')
    r.senses.forEach(s => {
      console.log('• '+s.sense+' ['+s.concept+']')
      console.log('  '+s.description)
    })
  }
}

async function run() {
  let r

  // xlf (خلف) — être derrière, succéder, remplacer
  r=await ins('xlf',[
    {sense:'être derrière',concept:'Position/Arrière',description:"État de ce qui vient après dans l'espace. L'arrière est la position opposée à l'avant — c'est un état spatial permanent tant qu'on ne bouge pas. Être derrière c'est être dans le sillage, dans l'ombre, dans la suite de ce qui précède."},
    {sense:'succéder',concept:'Succession/Remplacement',description:"Acte de venir après quelqu'un dans le temps. La succession sort de celui qui succède et atteint la position de celui qui était avant — c'est directionnel temporel. C'est ponctuel dans le moment de succession mais crée un état permanent de successeur."},
    {sense:'remplacer',concept:'Succession/Remplacement',description:"Acte de prendre la place d'un autre. Le remplacement est directionnel : le remplaçant prend la place du remplacé. C'est un acte ponctuel qui crée un nouvel état. Remplacer suppose que l'autre n'est plus là ou n'est plus capable."},
    {sense:'laisser derrière',concept:'Position/Arrière',description:"Acte de ne pas emmener avec soi en avançant. Laisser derrière sort de celui qui avance et affecte ce qui reste — c'est directionnel. Ce qui est laissé derrière ne participe plus au mouvement, il est abandonné à sa position."},
    {sense:'différer',concept:'Différence/Opposition',description:"État de ne pas être semblable. Différer c'est être autre — c'est un état permanent de la chose qui la distingue. La différence est relationnelle : on diffère de quelque chose. C'est un jugement rationnel de comparaison."},
    {sense:'contredire',concept:'Différence/Opposition',description:"Acte de dire le contraire de ce qui a été dit. La contradiction sort de celui qui contredit et atteint ce qui a été affirmé — c'est directionnel et ponctuel. Contredire c'est s'opposer par la parole, créer une différence de discours."},
    {sense:'manquer à sa promesse',concept:'Différence/Opposition',description:"Acte de ne pas tenir ce qu'on a dit qu'on ferait. Manquer à sa promesse est une différence entre la parole passée et l'action présente — c'est une trahison de soi-même. L'acte sort vers celui à qui on avait promis."},
    {sense:'successeur',concept:'Succession/Remplacement',description:"Celui qui vient après dans une fonction ou une lignée. Le successeur est un état permanent de la personne — c'est sa relation à celui qui l'a précédé. Le calife est le successeur par excellence."},
    {sense:'califat',concept:'Succession/Remplacement',description:"Fonction de celui qui succède au Prophète. Le califat est une institution de succession — c'est un état permanent de la communauté qui transmet l'autorité de génération en génération."},
  ]);log(r,'xlf')

  // man (من) — qui, de, parmi
  r=await ins('man',[
    {sense:'qui',concept:'Interrogation/Identité',description:"Pronom interrogatif pour les personnes. Le qui cherche l'identité de quelqu'un — c'est une question qui sort du questionneur vers l'inconnu. C'est ponctuel dans la question mais vise une réponse permanente : l'identité."},
    {sense:'celui qui',concept:'Relatif',description:"Pronom relatif désignant une personne. Celui qui établit une relation entre une personne et une qualité ou une action. C'est un lien grammatical permanent dans la phrase qui définit de qui on parle."},
    {sense:'de',concept:'Origine/Provenance',description:"Préposition d'origine spatiale ou causale. Le de indique le point de départ — d'où vient quelque chose, de quoi est fait quelque chose. C'est directionnel vers l'arrière, vers la source. C'est permanent comme relation d'origine."},
    {sense:'parmi',concept:'Partie/Extraction',description:"Préposition partitive qui extrait d'un ensemble. Parmi indique qu'on prend dans un tout — c'est un mouvement de l'ensemble vers la partie. C'est ponctuel dans l'extraction mais définit une appartenance."},
    {sense:'quelqu\'un',concept:'Indéfini',description:"Pronom indéfini désignant une personne non spécifiée. Quelqu'un ne dit pas qui — c'est l'identité en suspens, la personne sans visage. C'est un état d'indétermination qui attend d'être rempli."},
  ]);log(r,'man')

  // sfk (سفك) — verser, répandre (sang)
  r=await ins('sfk',[
    {sense:'verser',concept:'Écoulement/Effusion',description:"Acte de faire couler un liquide d'un récipient. Verser est un mouvement du haut vers le bas — il sort de celui qui verse et atteint ce qui reçoit le liquide. C'est directionnel et ponctuel. Le liquide passe de contenu à répandu."},
    {sense:'répandre',concept:'Écoulement/Effusion',description:"Acte de faire sortir en dispersant. Répandre étend ce qui était concentré — c'est un mouvement de l'intérieur vers l'extérieur dans toutes les directions. C'est ponctuel dans l'acte mais peut créer un état permanent (ce qui est répandu reste répandu)."},
    {sense:'faire couler le sang',concept:'Violence/Sang',description:"Acte de blesser jusqu'au sang. Faire couler le sang sort de l'agresseur et atteint la victime dans sa chair — c'est directionnel et violent. Le sang qui coule est le signe de la vie atteinte, de l'intégrité rompue."},
    {sense:'effusion de sang',concept:'Violence/Sang',description:"Résultat de l'acte violent : le sang répandu. L'effusion est l'état du sang sorti du corps — c'est permanent une fois versé. L'effusion de sang est la trace visible de la violence, le prix payé en vie."},
    {sense:'éloquence',concept:'Divers',description:"Parole qui coule abondamment et avec force. L'éloquence est un écoulement de mots — le discours sort de l'orateur et atteint l'auditoire. Comme le sang, la parole éloquente jaillit et se répand. Sens métaphorique de l'effusion."},
  ]);log(r,'sfk')

  // dmw (دمو → دم) — sang, parenté
  r=await ins('dmw',[
    {sense:'sang',concept:'Sang/Vie',description:"Liquide vital qui circule dans le corps. Le sang est la vie liquide — il est intérieur tant qu'il reste dans le corps, il devient signe de mort quand il sort. C'est permanent comme substance vitale. Le sang porte la vie et transmet la lignée."},
    {sense:'saigner',concept:'Sang/Vie',description:"Acte de perdre du sang par une blessure. Saigner est un mouvement de l'intérieur vers l'extérieur — c'est la vie qui s'échappe. C'est directionnel et peut être ponctuel (blessure légère) ou mortel (hémorragie)."},
    {sense:'ensanglanté',concept:'Sang/Vie',description:"État de ce qui est couvert de sang. L'ensanglanté porte la trace du sang versé — c'est un état visible qui témoigne de la violence ou du sacrifice. C'est permanent tant que le sang n'est pas lavé."},
    {sense:'parenté par le sang',concept:'Parenté/Lignée',description:"Lien familial par l'ascendance commune. Le sang unit les générations — on est du même sang que ses parents et ses enfants. C'est un lien permanent et indéfectible : le sang ne ment pas, on ne choisit pas sa famille."},
    {sense:'prix du sang',concept:'Compensation',description:"Ce qui est dû pour le sang versé. Le prix du sang est la compensation de la vie prise — c'est directionnel du meurtrier vers la famille de la victime. La vie a un prix, et ce prix est dû quand elle est ôtée."},
  ]);log(r,'dmw')

  // sbh (سبح) — nager, glorifier, flotter
  r=await ins('sbh',[
    {sense:'nager',concept:'Mouvement/Flottement',description:"Acte de se déplacer dans l'eau par ses propres mouvements. Nager est un mouvement fluide — le corps avance dans un milieu qui le porte. C'est directionnel et continu. Le nageur est entre deux mondes : ni coulé ni émergé."},
    {sense:'flotter',concept:'Mouvement/Flottement',description:"État de ce qui reste à la surface sans couler. Flotter c'est être porté par le milieu — c'est un état passif permanent tant que les conditions durent. Ce qui flotte ne s'enfonce pas mais ne s'élève pas non plus."},
    {sense:'voyager rapidement',concept:'Mouvement/Flottement',description:"Acte de se déplacer vite et loin. Le voyage rapide est comme une nage dans l'espace — on traverse sans s'arrêter. C'est directionnel et continu. Les astres nagent dans le ciel."},
    {sense:'glorifier',concept:'Glorification/Louange',description:"Acte de proclamer la grandeur et la perfection de Dieu. La glorification sort de celui qui glorifie et monte vers Dieu — c'est directionnel vers le haut. C'est un acte de parole qui peut être ponctuel (une invocation) ou permanent (état du croyant)."},
    {sense:'louer',concept:'Glorification/Louange',description:"Acte de dire le bien et la grandeur. La louange sort vers l'extérieur — elle atteint celui qui est loué et l'élève aux yeux de ceux qui entendent. C'est directionnel et peut être sincère ou flatteuse."},
    {sense:'prier',concept:'Glorification/Louange',description:"Acte rituel de s'adresser à Dieu. La prière est une glorification structurée — elle sort du prieur vers Dieu selon des formes prescrites. C'est ponctuel dans chaque prière mais permanent comme obligation."},
    {sense:'subhana',concept:'Glorification/Louange',description:"Formule de glorification : gloire à Dieu. Subhana est l'exclamation qui reconnaît la perfection divine — elle sort du croyant vers Dieu pour Le déclarer au-dessus de tout défaut. C'est ponctuel mais répété sans cesse."},
  ]);log(r,'sbh')

  console.log('\n=== Batch 23 v2b terminé — '+done+'/2321 ===')
}
run().catch(e=>{console.error('ERR:',e);process.exit(1)})
