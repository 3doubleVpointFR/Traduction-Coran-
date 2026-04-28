const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 1348, total = 2321

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

  // 1. kursy (كرسي) — trône, siège, fondement du savoir
  r=await ins('kursy',[
    {sense:'trône (kursi)',concept:'Trône/Autorité',description:"Le siège du pouvoir suprême qui symbolise l'étendue de la souveraineté. Le trône est permanent dans sa fonction — il représente l'autorité absolue de celui qui s'y assoit. Le kursi d'Allah englobe les cieux et la terre."},
    {sense:'siège',concept:'Trône/Autorité',description:''},
    {sense:'fondement du savoir',concept:'Divers',description:'La base sur laquelle repose la connaissance — le siège du savoir.'},
  ]);log(r,'kursy')

  // 2. awd (أود) — peser, courber, fatiguer
  r=await ins('awd',[
    {sense:'peser',concept:'Poids/Charge',description:"État de ce qui exerce une pression par sa masse. Le poids est permanent dans ce qui est lourd — il fatigue celui qui le porte. La charge pèse sur celui qui la supporte et teste sa résistance."},
    {sense:'courber sous le poids',concept:'Poids/Charge',description:''},
    {sense:'fatiguer',concept:'Poids/Charge',description:''},
  ]);log(r,'awd')

  // 3. khwy (خوي) — être vide, s'effondrer, tomber
  r=await ins('khwy',[
    {sense:'être vide',concept:'Vacuité/Effondrement',description:"État de ce qui a perdu son contenu et sa structure. La vacuité est un état permanent de ce qui n'a plus rien à l'intérieur — quand les murs s'effondrent, le bâtiment devient vide. L'effondrement est le résultat de la perte de soutien."},
    {sense:'s\'effondrer',concept:'Vacuité/Effondrement',description:''},
    {sense:'être en ruine',concept:'Vacuité/Effondrement',description:''},
    {sense:'avoir faim',concept:'Divers',description:'Le ventre vide — la vacuité du corps.'},
  ]);log(r,'khwy')

  // 4. ersh (عرش) — trône divin, toit, treille
  r=await ins('ersh',[
    {sense:'trône divin (arsh)',concept:'Trône suprême',description:"Le trône de Dieu qui surplombe toute la création. Le arsh est le lieu le plus élevé de l'univers — il est permanent et symbolise la souveraineté totale de Dieu sur tout ce qui existe. Le arsh est au-dessus du kursi."},
    {sense:'trône',concept:'Trône suprême',description:''},
    {sense:'toit',concept:'Couverture/Structure',description:"La partie supérieure qui couvre et protège ce qui est en dessous. Le toit est permanent dans sa position — il est la structure qui sépare l'intérieur de l'extérieur."},
    {sense:'treille',concept:'Couverture/Structure',description:''},
  ]);log(r,'ersh')

  // 5. ewm (عوم) — année, an
  r=await ins('ewm',[
    {sense:'année',concept:'Temps/Cycle annuel',description:"Unité de mesure du temps correspondant à un cycle complet des saisons. L'année est un cycle permanent qui se répète — elle mesure le passage du temps par la récurrence des mêmes événements."},
    {sense:'an',concept:'Temps/Cycle annuel',description:''},
  ]);log(r,'ewm')

  // 6. lbth (لبث) — rester, demeurer, tarder
  r=await ins('lbth',[
    {sense:'rester',concept:'Séjour/Attente',description:"État de celui qui demeure en un lieu sans en bouger. Le séjour est permanent tant que la personne ne part pas — elle est fixée dans le temps et l'espace. Rester c'est ne pas partir, c'est l'immobilité choisie ou subie."},
    {sense:'demeurer',concept:'Séjour/Attente',description:''},
    {sense:'tarder',concept:'Séjour/Attente',description:''},
    {sense:'durée de séjour',concept:'Séjour/Attente',description:''},
  ]);log(r,'lbth')

  // 7. hmr (حمر) — âne, être rouge, stupide
  r=await ins('hmr',[
    {sense:'âne',concept:'Âne/Bête de somme',description:"Animal domestique connu pour sa capacité à porter de lourdes charges. L'âne est un porteur permanent — il porte sans comprendre ce qu'il porte. Dans le Coran, l'âne qui porte des livres est le symbole de celui qui a le savoir sans le comprendre."},
    {sense:'être rouge',concept:'Rougeur/Couleur',description:"État de ce qui a la couleur du sang ou du feu. La rougeur est permanente dans ce qui est naturellement rouge — elle attire le regard."},
    {sense:'rouge',concept:'Rougeur/Couleur',description:''},
  ]);log(r,'hmr')

  // 8. kyf (كيف) — comment, de quelle manière
  r=await ins('kyf',[
    {sense:'comment',concept:'Interrogation modale',description:"Particule qui questionne sur la manière dont quelque chose se fait ou se produit. Le comment cherche le mode opératoire — c'est une interrogation rationnelle qui veut comprendre le mécanisme et le processus."},
    {sense:'de quelle manière',concept:'Interrogation modale',description:''},
  ]);log(r,'kyf')

  // 9. nshz (نشز) — se lever, désobéir (époux), rébellion conjugale
  r=await ins('nshz',[
    {sense:'se lever',concept:'Élévation/Rébellion',description:"Acte de se dresser au-dessus de sa position normale, de sortir du cadre établi. L'élévation peut être positive (se lever par respect) ou négative (se rebeller). Le nushuz est la rébellion conjugale — l'élévation de l'un des époux contre l'autre."},
    {sense:'désobéir (dans le couple)',concept:'Élévation/Rébellion',description:''},
    {sense:'se rebeller',concept:'Élévation/Rébellion',description:''},
    {sense:'terrain élevé',concept:'Divers',description:'Sol qui s\'élève au-dessus du niveau normal.'},
  ]);log(r,'nshz')

  // 10. ksw (كسو) — vêtir, habiller, recouvrir
  r=await ins('ksw',[
    {sense:'vêtir',concept:'Vêtement/Couverture',description:"Acte extérieur de couvrir le corps avec un habit pour le protéger et le cacher. Le vêtement sort de celui qui habille et atteint celui qui est habillé — c'est directionnel et crée un état permanent de couverture. Vêtir c'est donner dignité et protection."},
    {sense:'habiller',concept:'Vêtement/Couverture',description:''},
    {sense:'recouvrir',concept:'Vêtement/Couverture',description:''},
    {sense:'revêtir les os de chair',concept:'Vêtement/Couverture',description:''},
  ]);log(r,'ksw')

  console.log('\n=== Batch 176 terminé — '+done+'/2321 ===')
}
run().catch(e=>{console.error('ERR:',e);process.exit(1)})
