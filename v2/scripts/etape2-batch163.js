const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 1218, total = 2321

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

  // 1. qwn (قون) — obéir pieusement, être dévot
  r=await ins('qwn',[
    {sense:'être dévot',concept:'Dévotion/Obéissance',description:"État permanent de soumission pieuse à Dieu par la prière et l'adoration continue. La dévotion est intérieure — elle reste dans celui qui prie et se manifeste par l'acte de se tenir debout devant Dieu. Le qanut est celui dont l'obéissance est devenue sa nature."},
    {sense:'obéir humblement',concept:'Dévotion/Obéissance',description:''},
    {sense:'se tenir en prière',concept:'Dévotion/Obéissance',description:''},
  ]);log(r,'qwn')

  // 2. nsb (نصب) — dresser, fatiguer, idole, effort
  r=await ins('nsb',[
    {sense:'dresser',concept:'Érection/Installation',description:"Acte extérieur de placer quelque chose en position verticale et stable. L'érection sort de celui qui dresse et atteint ce qui est dressé — c'est directionnel vers le haut. Ce qui est dressé est visible et permanent."},
    {sense:'installer',concept:'Érection/Installation',description:''},
    {sense:'idole (nusub)',concept:'Érection/Installation',description:''},
    {sense:'être fatigué',concept:'Fatigue/Peine',description:"État intérieur d'épuisement après un effort. La fatigue reste dans celui qui la ressent — c'est un état qui résulte du labeur et qui demande du repos."},
    {sense:'peine',concept:'Fatigue/Peine',description:''},
    {sense:'effort',concept:'Fatigue/Peine',description:''},
  ]);log(r,'nsb')

  // 3. sre (سرع) — être rapide, se hâter, empressement
  r=await ins('sre',[
    {sense:'être rapide',concept:'Vitesse/Empressement',description:"État de ce qui se déplace ou agit sans délai. La rapidité est un mouvement vers l'avant sans hésitation — c'est directionnel et ponctuel dans chaque acte mais peut être permanent comme caractère. Se hâter c'est vouloir atteindre le but avant tous les autres."},
    {sense:'se hâter',concept:'Vitesse/Empressement',description:''},
    {sense:'s\'empresser',concept:'Vitesse/Empressement',description:''},
    {sense:'accélérer',concept:'Vitesse/Empressement',description:''},
  ]);log(r,'sre')

  // 4. ejb (عجب) — s'étonner, être merveilleux, admirer
  r=await ins('ejb',[
    {sense:'s\'étonner',concept:'Étonnement/Émerveillement',description:"État intérieur de surprise face à ce qui dépasse l'habitude ou la compréhension. L'étonnement reste dans celui qui le ressent — il est la réaction de l'esprit face à l'inattendu. L'émerveillement est un étonnement positif devant ce qui est beau ou grand."},
    {sense:'être émerveillé',concept:'Étonnement/Émerveillement',description:''},
    {sense:'admirer',concept:'Étonnement/Émerveillement',description:''},
    {sense:'chose étonnante',concept:'Étonnement/Émerveillement',description:''},
    {sense:'vanité (auto-admiration)',concept:'Vanité/Orgueil',description:"État intérieur de celui qui s'admire lui-même au point de se croire supérieur. La vanité est un émerveillement mal dirigé — tourné vers soi au lieu d'être tourné vers Dieu. C'est permanent chez l'orgueilleux."},
  ]);log(r,'ejb')

  // 5. ald (ألد) — être hostile, querelleur, obstiné
  r=await ins('ald',[
    {sense:'être hostile',concept:'Hostilité/Obstination',description:"État de celui qui s'oppose avec acharnement et ne cède jamais. L'hostilité est directionnelle — elle sort de l'hostile et atteint celui qu'il combat. C'est un état permanent chez celui dont le caractère est la querelle. L'obstiné est celui dont l'argumentation ne vise pas la vérité mais la victoire."},
    {sense:'être querelleur',concept:'Hostilité/Obstination',description:''},
    {sense:'être obstiné',concept:'Hostilité/Obstination',description:''},
  ]);log(r,'ald')

  // 6. ksm (خصم) — adversaire, disputer, trancher
  r=await ins('ksm',[
    {sense:'adversaire',concept:'Adversité/Litige',description:"Celui qui se tient face à l'autre dans un conflit ou un procès. L'adversité est bidirectionnelle — les deux parties s'opposent mutuellement. Le litige est permanent tant que le jugement n'a pas tranché."},
    {sense:'disputer',concept:'Adversité/Litige',description:''},
    {sense:'plaider',concept:'Adversité/Litige',description:''},
    {sense:'trancher (une affaire)',concept:'Adversité/Litige',description:''},
    {sense:'vaincre dans une dispute',concept:'Adversité/Litige',description:''},
  ]);log(r,'ksm')

  // 7. hshr (حشر) — rassembler, réunir, résurrection
  r=await ins('hshr',[
    {sense:'rassembler',concept:'Rassemblement/Résurrection',description:"Acte extérieur de réunir en un lieu ce qui était dispersé. Le rassemblement sort de celui qui rassemble et atteint tous ceux qui sont réunis — c'est multidirectionnel (de partout vers un seul point). Le hashr est le grand rassemblement du Jour Dernier où tous les êtres sont réunis."},
    {sense:'réunir',concept:'Rassemblement/Résurrection',description:''},
    {sense:'résurrection (hashr)',concept:'Rassemblement/Résurrection',description:''},
    {sense:'expulser',concept:'Expulsion',description:"Acte de forcer quelqu'un à quitter un lieu. L'expulsion est directionnelle — elle sort du lieu et pousse le chassé vers l'extérieur."},
  ]);log(r,'hshr')

  // 8. nsl (نسل) — descendance, progéniture, sortir rapidement
  r=await ins('nsl',[
    {sense:'descendance',concept:'Descendance/Progéniture',description:"Les enfants et les générations qui prolongent la lignée. La descendance est permanente et croissante — elle est la continuation de la vie à travers le temps. Le nasl est ce qui sort du parent pour devenir un être à part entière."},
    {sense:'progéniture',concept:'Descendance/Progéniture',description:''},
    {sense:'engendrer',concept:'Descendance/Progéniture',description:''},
    {sense:'sortir rapidement',concept:'Sortie/Mouvement',description:"Acte de quitter un lieu avec rapidité. La sortie est directionnelle de l'intérieur vers l'extérieur — ponctuelle et décisive."},
    {sense:'se dépêcher',concept:'Sortie/Mouvement',description:''},
  ]);log(r,'nsl')

  // 9. jhn (جهن) — Géhenne, fournaise
  r=await ins('jhn',[
    {sense:'Géhenne (jahannam)',concept:'Enfer/Châtiment',description:"Le lieu du châtiment éternel dans l'au-delà, la fournaise qui consume les damnés. La Géhenne est permanente — elle est le séjour final de ceux qui ont rejeté la vérité. C'est un lieu qui brûle sans jamais s'éteindre."},
    {sense:'enfer',concept:'Enfer/Châtiment',description:''},
    {sense:'fournaise',concept:'Enfer/Châtiment',description:''},
  ]);log(r,'jhn')

  // 10. mhd (مهد) — préparer, berceau, aplanir
  r=await ins('mhd',[
    {sense:'préparer',concept:'Préparation/Aplanissement',description:"Acte extérieur de rendre quelque chose prêt et facile d'accès. La préparation sort de celui qui prépare et atteint ce qui est préparé — c'est directionnel et crée un état de disponibilité. Aplanir c'est préparer le terrain pour que l'autre puisse s'y installer."},
    {sense:'aplanir',concept:'Préparation/Aplanissement',description:''},
    {sense:'étendre',concept:'Préparation/Aplanissement',description:''},
    {sense:'berceau',concept:'Berceau/Couche',description:"Le lit de l'enfant, l'espace doux et protégé où il repose. Le berceau est permanent dans sa fonction de protection — il est le premier lieu de repos de la vie."},
    {sense:'couche',concept:'Berceau/Couche',description:''},
  ]);log(r,'mhd')

  console.log('\n=== Batch 163 terminé — '+done+'/2321 ===')
}
run().catch(e=>{console.error('ERR:',e);process.exit(1)})
