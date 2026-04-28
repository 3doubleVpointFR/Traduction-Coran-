const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 1438, total = 2321

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

  // 1. njl (نجل) — Évangile, descendance, engendrer
  r=await ins('njl',[
    {sense:'Évangile (injil)',concept:'Livre révélé',description:"Le Livre sacré révélé à Jésus contenant la bonne nouvelle et la guidance. L'Évangile est permanent comme texte révélé — il éclaire ceux qui le suivent."},
    {sense:'descendance',concept:'Descendance/Origine',description:"Les enfants et la lignée. La descendance est permanente — elle prolonge la vie de l'ancêtre à travers les générations."},
    {sense:'engendrer',concept:'Descendance/Origine',description:''},
  ]);log(r,'njl')

  // 2. nqm (نقم) — se venger, punir, châtier
  r=await ins('nqm',[
    {sense:'se venger',concept:'Vengeance/Châtiment',description:"Acte extérieur de rendre le mal pour le mal. La vengeance sort du vengeur et atteint celui qui a commis le tort — c'est directionnel et rétributif. La vengeance divine est un châtiment juste et mesuré."},
    {sense:'punir',concept:'Vengeance/Châtiment',description:''},
    {sense:'châtier',concept:'Vengeance/Châtiment',description:''},
    {sense:'détester un acte',concept:'Divers',description:'La répulsion face au mal commis — ce qui motive la vengeance.'},
  ]);log(r,'nqm')

  // 3. zygh (زيغ) — dévier, s'écarter, pencher
  r=await ins('zygh',[
    {sense:'dévier',concept:'Déviation/Égarement',description:"Mouvement qui quitte la ligne droite pour aller vers un côté. La déviation est directionnelle — elle part du centre et s'éloigne vers un extrême. Le cœur qui dévie (zaygh) est celui qui penche vers le doute au lieu de la certitude."},
    {sense:'s\'écarter de la vérité',concept:'Déviation/Égarement',description:''},
    {sense:'pencher',concept:'Déviation/Égarement',description:''},
  ]);log(r,'zygh')

  // 4. nrw (نور) — lumière, éclairer
  r=await ins('nrw',[
    {sense:'lumière',concept:'Lumière/Éclairage',description:"Ce qui rend visible ce qui était dans l'obscurité. La lumière est directionnelle — elle sort de sa source et atteint tout ce qu'elle touche. La lumière divine est la guidance qui éclaire les cœurs et les esprits."},
    {sense:'éclairer',concept:'Lumière/Éclairage',description:''},
    {sense:'feu',concept:'Lumière/Éclairage',description:''},
    {sense:'illuminer',concept:'Lumière/Éclairage',description:''},
  ]);log(r,'nrw')

  // 5. ldn (لدن) — auprès de, chez, de la part de
  r=await ins('ldn',[
    {sense:'auprès de',concept:'Proximité/Source',description:"Préposition qui indique la proximité immédiate ou l'origine directe de quelque chose. Ladun exprime une proximité plus intime que inda — c'est ce qui vient directement de la source, sans intermédiaire."},
    {sense:'chez',concept:'Proximité/Source',description:''},
    {sense:'de la part de (Dieu)',concept:'Proximité/Source',description:''},
  ]);log(r,'ldn')

  // 6. whb (وهب) — donner gratuitement, offrir
  r=await ins('whb',[
    {sense:'donner gratuitement',concept:'Don gratuit/Grâce',description:"Acte extérieur de donner sans rien attendre en retour. Le don gratuit sort du donneur et atteint le receveur — c'est directionnel et désintéressé. La hiba est le don pur, motivé par la générosité et non par l'échange."},
    {sense:'offrir',concept:'Don gratuit/Grâce',description:''},
    {sense:'accorder (Dieu qui donne)',concept:'Don gratuit/Grâce',description:''},
  ]);log(r,'whb')

  // 7. kbth (خبث) — variante de khbth (impur, skip probable)
  r=await ins('kbth',[
    {sense:'être mauvais',concept:'Impureté/Vilenie',description:"État de ce qui est corrompu et nuisible. L'impureté est permanente dans ce qui est mauvais — le khabith repousse et dégrade."},
    {sense:'être impur',concept:'Impureté/Vilenie',description:''},
    {sense:'chose mauvaise',concept:'Impureté/Vilenie',description:''},
  ]);log(r,'kbth')

  // 8. rskh (رسخ) — être enraciné, être ferme dans le savoir
  r=await ins('rskh',[
    {sense:'être enraciné',concept:'Enracinement/Profondeur',description:"État de ce qui est planté profondément et ne peut être arraché. L'enracinement est permanent — celui qui est enraciné dans le savoir ne vacille pas face aux doutes. Les rassikhun sont ceux dont la connaissance a des racines profondes."},
    {sense:'être ferme dans le savoir',concept:'Enracinement/Profondeur',description:''},
    {sense:'être profondément ancré',concept:'Enracinement/Profondeur',description:''},
  ]);log(r,'rskh')

  // 9. dab (دأب) — persévérer, habitude, coutume
  r=await ins('dab',[
    {sense:'persévérer',concept:'Persévérance/Habitude',description:"Acte de continuer sans relâche dans une direction. La persévérance est un état permanent de celui qui ne s'arrête pas — elle est la répétition constante du même effort. Le daab est la coutume qui dure par la force de la répétition."},
    {sense:'habitude',concept:'Persévérance/Habitude',description:''},
    {sense:'coutume',concept:'Persévérance/Habitude',description:''},
    {sense:'état permanent',concept:'Persévérance/Habitude',description:''},
  ]);log(r,'dab')

  // 10. kzb (كذب) — variante de kdhb (mentir, skip probable)
  r=await ins('kzb',[
    {sense:'mentir',concept:'Mensonge/Fausseté',description:"Acte de dire ce qui est contraire à la réalité. Le mensonge sort du menteur et atteint l'auditeur — c'est directionnel et trompeur."},
    {sense:'démentir',concept:'Déni/Rejet',description:"Acte de déclarer faux ce que quelqu'un dit être vrai. Le déni sort de celui qui dément et rejette la parole de l'autre."},
  ]);log(r,'kzb')

  console.log('\n=== Batch 185 terminé — '+done+'/2321 ===')
}
run().catch(e=>{console.error('ERR:',e);process.exit(1)})
