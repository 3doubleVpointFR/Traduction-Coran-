const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 1248, total = 2321

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

  // 1. axw (أخو) — doublon possible de akhw (frère)
  r=await ins('axw',[
    {sense:'frère',concept:'Fraternité/Lien',description:"Celui qui partage le même parent ou le même lien d'appartenance. La fraternité est un lien permanent et horizontal entre égaux — le frère est celui qui est à côté de soi dans la même famille ou communauté."},
    {sense:'semblable',concept:'Fraternité/Lien',description:''},
    {sense:'ami',concept:'Fraternité/Lien',description:''},
  ]);log(r,'axw')

  // 2. ent (عنت) — être en difficulté, pécher, souffrir
  r=await ins('ent',[
    {sense:'être en difficulté',concept:'Difficulté/Souffrance',description:"État de celui qui fait face à une épreuve pénible et ne trouve pas de sortie facile. La difficulté est un poids intérieur qui pèse sur celui qui la subit — elle est permanente tant que l'obstacle demeure. Le enat est la gêne qui résulte du péché ou de la contrainte."},
    {sense:'souffrir',concept:'Difficulté/Souffrance',description:''},
    {sense:'pécher',concept:'Difficulté/Souffrance',description:''},
    {sense:'fornication',concept:'Divers',description:'Le péché de chair comme source de difficulté et de souffrance.'},
  ]);log(r,'ent')

  // 3. nkh (نكح) — mariage, union conjugale
  r=await ins('nkh',[
    {sense:'épouser',concept:'Mariage/Union',description:"Acte de contracter une union légitime entre un homme et une femme. Le mariage est bidirectionnel — il lie les deux époux l'un à l'autre. C'est un acte ponctuel (le contrat) qui crée un état permanent de lien conjugal."},
    {sense:'mariage',concept:'Mariage/Union',description:''},
    {sense:'union conjugale',concept:'Mariage/Union',description:''},
    {sense:'rapport intime',concept:'Mariage/Union',description:''},
  ]);log(r,'nkh')

  // 4. lgh (لغو) — parole vaine, futilité, serment involontaire
  r=await ins('lgh',[
    {sense:'parole vaine',concept:'Vanité/Futilité',description:"Parole qui n'a ni sens ni utilité, qui ne produit aucun effet positif. La vanité de la parole est un état permanent de ce qui est dit sans réflexion — elle sort du locuteur mais n'atteint rien de valable. Le laghw est le bruit de la parole sans substance."},
    {sense:'futilité',concept:'Vanité/Futilité',description:''},
    {sense:'serment involontaire',concept:'Vanité/Futilité',description:''},
    {sense:'absurdité',concept:'Vanité/Futilité',description:''},
  ]);log(r,'lgh')

  // 5. ymn (يمن) — droite, serment, bénédiction, prospérité
  r=await ins('ymn',[
    {sense:'droite',concept:'Droite/Serment',description:"Le côté droit, considéré comme le côté de la force et de la bénédiction. La droite est permanente dans sa position — elle est le côté noble. Le serment (yamiin) se fait avec la main droite, engageant toute la personne."},
    {sense:'serment',concept:'Droite/Serment',description:''},
    {sense:'main droite',concept:'Droite/Serment',description:''},
    {sense:'être béni',concept:'Bénédiction/Prospérité',description:"État de celui qui reçoit la grâce et la prospérité. La bénédiction est un don qui vient de l'extérieur (de Dieu) et atteint celui qui est béni — c'est directionnel et peut être permanent."},
    {sense:'prospérité',concept:'Bénédiction/Prospérité',description:''},
    {sense:'Yémen',concept:'Divers',description:'Le pays du sud — le côté droit quand on fait face à l\'est.'},
  ]);log(r,'ymn')

  // 6. hlm (حلم) — rêver, être clément, puberté, douceur
  r=await ins('hlm',[
    {sense:'rêver',concept:'Rêve/Songe',description:"Acte involontaire de percevoir des images et des scènes pendant le sommeil. Le rêve est intérieur — il vient à celui qui dort sans qu'il le contrôle. Le hulm est le rêve ordinaire, distinct de la vision prophétique."},
    {sense:'songe',concept:'Rêve/Songe',description:''},
    {sense:'être clément',concept:'Clémence/Retenue',description:"État intérieur de maîtrise de soi face à la provocation. La clémence est permanente chez le sage — c'est la capacité de ne pas réagir par la colère quand on en aurait le droit. Le halim est celui qui retient sa colère par raison."},
    {sense:'douceur',concept:'Clémence/Retenue',description:''},
    {sense:'puberté',concept:'Maturité',description:"L'âge où l'on atteint la capacité de raisonner et de rêver. La puberté est un seuil ponctuel qui crée un état permanent de maturité."},
  ]);log(r,'hlm')

  // 7. hrṯ (حرث) — labourer, cultiver, champ
  r=await ins('hr\u1E6F',[
    {sense:'labourer',concept:'Labour/Culture',description:"Acte extérieur de retourner la terre pour la préparer à la semence. Le labour sort du laboureur et atteint la terre — c'est directionnel et transformateur. Labourer c'est préparer le sol pour qu'il puisse donner ses fruits."},
    {sense:'cultiver',concept:'Labour/Culture',description:''},
    {sense:'champ (harth)',concept:'Labour/Culture',description:''},
    {sense:'récolte',concept:'Labour/Culture',description:''},
    {sense:'femme (métaphore)',concept:'Divers',description:'La femme comme champ — lieu de la semence et de la croissance de la vie.'},
  ]);log(r,'hr\u1E6F')

  // 8. nya (نيى) — variante de nyy (intention/cru, skip probable)
  r=await ins('nya',[
    {sense:'intention',concept:'Intention/Dessein',description:"Mouvement intérieur de la volonté vers un but. L'intention précède tout acte — elle est invisible et permanente tant que le but n'est pas atteint."},
    {sense:'cru',concept:'Divers',description:'Ce qui n\'a pas été transformé — l\'état brut et naturel.'},
  ]);log(r,'nya')

  // 9. nkm (نكم) — variante de nqm, se venger, châtier
  r=await ins('nkm',[
    {sense:'se venger',concept:'Vengeance/Châtiment',description:"Acte extérieur de rendre le mal pour le mal subi. La vengeance sort du vengeur et atteint celui qui a fait le tort — c'est directionnel et rétributif. La vengeance divine est un châtiment juste et mesuré, pas une émotion aveugle."},
    {sense:'châtier',concept:'Vengeance/Châtiment',description:''},
    {sense:'punir',concept:'Vengeance/Châtiment',description:''},
  ]);log(r,'nkm')

  // 10. tlq (طلق) — répudier, libérer, lâcher, accoucher
  r=await ins('tlq',[
    {sense:'répudier',concept:'Séparation/Libération',description:"Acte de rompre le lien conjugal par une parole de divorce. La répudiation sort de l'époux et atteint l'épouse — c'est directionnel et crée un état permanent de séparation. Le talaq libère les deux parties du lien qui les unissait."},
    {sense:'divorcer',concept:'Séparation/Libération',description:''},
    {sense:'libérer',concept:'Séparation/Libération',description:''},
    {sense:'lâcher',concept:'Séparation/Libération',description:''},
    {sense:'accoucher',concept:'Divers',description:'Le corps qui libère l\'enfant — sens lié à la délivrance.'},
  ]);log(r,'tlq')

  console.log('\n=== Batch 166 terminé — '+done+'/2321 ===')
}
run().catch(e=>{console.error('ERR:',e);process.exit(1)})
