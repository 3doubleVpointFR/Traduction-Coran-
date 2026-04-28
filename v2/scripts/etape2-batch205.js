const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 1638, total = 2321

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

  r=await ins('kha\u0283\u0295',[
    {sense:'être humble devant Dieu',concept:'Humilité/Recueillement',description:"État intérieur de soumission mêlée de crainte révérencielle. Le khushu est un recueillement permanent du cœur qui se manifeste dans le corps — la voix baisse, le regard se baisse, le corps s'immobilise. C'est l'état de celui qui est en présence du Très-Grand."},
    {sense:'se recueillir',concept:'Humilité/Recueillement',description:''},
    {sense:'baisser la voix',concept:'Humilité/Recueillement',description:''},
  ]);log(r,'kha\u0283\u0295')

  r=await ins('aaya',[
    {sense:'signe',concept:'Signe/Miracle',description:"Ce qui pointe vers une réalité plus grande que lui-même, ce qui indique et fait réfléchir. Le signe est permanent dans sa fonction — il rend visible l'invisible. L'aya est le verset du Coran, le miracle du prophète, et tout phénomène qui pointe vers Dieu."},
    {sense:'verset',concept:'Signe/Miracle',description:''},
    {sense:'miracle',concept:'Signe/Miracle',description:''},
    {sense:'preuve',concept:'Signe/Miracle',description:''},
  ]);log(r,'aaya')

  r=await ins('nar',[
    {sense:'feu',concept:'Feu/Enfer',description:"Élément qui brûle et consume ce qu'il touche. Le feu est directionnel — il sort de sa source et atteint ce qui est combustible. Le feu est permanent tant qu'il est alimenté. Le nar est l'Enfer, le feu éternel qui consume les damnés."},
    {sense:'enfer',concept:'Feu/Enfer',description:''},
    {sense:'flamme',concept:'Feu/Enfer',description:''},
  ]);log(r,'nar')

  r=await ins('nhl',[
    {sense:'don (mahr)',concept:'Don/Cadeau nuptial',description:"Ce qui est donné librement comme cadeau de mariage. Le don nuptial sort de l'époux et atteint l'épouse — c'est directionnel et créateur de lien."},
    {sense:'abeille',concept:'Abeille/Production',description:"Insecte qui produit le miel par un travail organisé. L'abeille est un symbole permanent d'organisation et de bienfaisance — elle prend du nectar et produit de la guérison."},
    {sense:'palmier (nakhla)',concept:'Divers',description:'Le palmier dattier — l\'arbre nourricier du désert.'},
  ]);log(r,'nhl')

  r=await ins('tbb',[
    {sense:'être bon',concept:'Bonté/Pureté',description:"État de ce qui est agréable, sain et conforme à la nature. La bonté est permanente dans ce qui est tayyib — elle est la qualité de ce qui nourrit sans nuire. Le tayyib est le pur, le bon, l'agréable — l'opposé du khabith (impur)."},
    {sense:'être pur',concept:'Bonté/Pureté',description:''},
    {sense:'être agréable',concept:'Bonté/Pureté',description:''},
    {sense:'nourriture licite',concept:'Bonté/Pureté',description:''},
  ]);log(r,'tbb')

  r=await ins('hna',[
    {sense:'être agréable',concept:'Agrément/Bienfaisance',description:"État de ce qui procure du plaisir sans nuire. L'agrément est permanent dans ce qui est bienfaisant — il nourrit et réjouit sans conséquence négative. Le hani est le repas qui descend bien."},
    {sense:'digeste',concept:'Agrément/Bienfaisance',description:''},
    {sense:'féliciter',concept:'Divers',description:'Exprimer sa joie pour le bonheur de l\'autre.'},
  ]);log(r,'hna')

  r=await ins('kb\u1E6F',[
    {sense:'être impur',concept:'Impureté/Vilenie',description:"État de ce qui est corrompu et nuisible. L'impureté est permanente dans ce qui est mauvais — le khabith repousse et dégrade."},
    {sense:'être mauvais',concept:'Impureté/Vilenie',description:''},
  ]);log(r,'kb\u1E6F')

  r=await ins('hwb',[
    {sense:'péché',concept:'Péché/Faute grave',description:"Acte qui constitue une transgression majeure devant Dieu. Le hub est un péché grave dont les conséquences pèsent lourdement sur l'âme — il est permanent tant qu'il n'est pas expié."},
    {sense:'faute grave',concept:'Péché/Faute grave',description:''},
  ]);log(r,'hwb')

  r=await ins('alla',[
    {sense:'que ne pas',concept:'Exhortation/Reproche',description:"Particule qui exhorte ou reproche. L'exhortation pousse l'autre à agir — directionnelle du locuteur vers l'interlocuteur."},
    {sense:'pourquoi ne pas',concept:'Exhortation/Reproche',description:''},
  ]);log(r,'alla')

  r=await ins('rbe',[
    {sense:'quatre',concept:'Nombre/Quaternité',description:"Le nombre qui symbolise la complétude terrestre — quatre directions, quatre saisons. Le quatre est un nombre de stabilité et de fondation permanente."},
    {sense:'quatrième',concept:'Nombre/Quaternité',description:''},
    {sense:'quart',concept:'Nombre/Quaternité',description:''},
  ]);log(r,'rbe')

  console.log('\n=== Batch 205 terminé — '+done+'/2321 ===')
}
run().catch(e=>{console.error('ERR:',e);process.exit(1)})
