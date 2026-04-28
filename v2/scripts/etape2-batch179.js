const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 1378, total = 2321

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

  // 1. sld (صلد) — être dur, lisse, avare
  r=await ins('sld',[
    {sense:'être dur',concept:'Dureté/Stérilité',description:"État de ce qui est compact et ne laisse rien pénétrer. La dureté est permanente dans la pierre — elle repousse l'eau et ne permet pas à la vie de s'installer. Le roc dur est stérile car rien n'y prend racine."},
    {sense:'être lisse',concept:'Dureté/Stérilité',description:''},
    {sense:'être stérile (terre)',concept:'Dureté/Stérilité',description:''},
    {sense:'être avare',concept:'Divers',description:'L\'avare dont le cœur est dur comme la pierre.'},
  ]);log(r,'sld')

  // 2. fq r (فقر) — être pauvre, avoir besoin, manquer
  r=await ins('fq r',[
    {sense:'être pauvre',concept:'Pauvreté/Besoin',description:"État de celui qui manque de ce qui est nécessaire et dépend des autres pour survivre. La pauvreté est un état permanent de manque — le pauvre est celui qui a besoin et ne peut se suffire. Le faqir est celui dont la colonne est brisée par le manque."},
    {sense:'avoir besoin',concept:'Pauvreté/Besoin',description:''},
    {sense:'manquer',concept:'Pauvreté/Besoin',description:''},
    {sense:'nécessiteux',concept:'Pauvreté/Besoin',description:''},
  ]);log(r,'fq r')

  // 3. ymm (يمم) — se diriger vers, tayammum, viser
  r=await ins('ymm',[
    {sense:'se diriger vers',concept:'Direction/Orientation',description:"Acte de tourner son visage et son corps vers un but précis. L'orientation est directionnelle — elle part de celui qui se dirige et pointe vers la destination. C'est un acte de volonté qui fixe le cap."},
    {sense:'viser',concept:'Direction/Orientation',description:''},
    {sense:'ablution sèche (tayammum)',concept:'Purification',description:"Acte rituel de se purifier avec la terre quand l'eau manque. Le tayammum est directionnel vers la terre — c'est la purification par l'élément originel de la création."},
  ]);log(r,'ymm')

  // 4. khbth (خبث) — être mauvais, impur, vil
  r=await ins('khbth',[
    {sense:'être mauvais',concept:'Impureté/Vilenie',description:"État de ce qui est corrompu dans sa nature et nuisible dans ses effets. L'impureté est un état permanent de ce qui est mauvais — le khabith est l'opposé du tayyib (pur et bon). Ce qui est vil repousse et dégrade tout ce qu'il touche."},
    {sense:'être impur',concept:'Impureté/Vilenie',description:''},
    {sense:'être vil',concept:'Impureté/Vilenie',description:''},
    {sense:'chose mauvaise',concept:'Impureté/Vilenie',description:''},
  ]);log(r,'khbth')

  // 5. ghmd (غمض) — fermer les yeux, ignorer, obscur
  r=await ins('ghmd',[
    {sense:'fermer les yeux',concept:'Occultation/Ignorance',description:"Acte de refuser de voir ce qui est devant soi. L'occultation est un voilement volontaire — elle part de celui qui ferme les yeux et refuse la réalité. Fermer les yeux c'est choisir de ne pas savoir."},
    {sense:'ignorer volontairement',concept:'Occultation/Ignorance',description:''},
    {sense:'être obscur',concept:'Occultation/Ignorance',description:''},
  ]);log(r,'ghmd')

  // 6. rbw (ربو) — croître, augmenter, usure, élever
  r=await ins('rbw',[
    {sense:'croître',concept:'Croissance/Augmentation',description:"Mouvement de ce qui grandit et prend de l'ampleur. La croissance est directionnelle vers le haut et le plus — elle est un processus permanent tant que la source de vie demeure. Croître c'est s'élever au-dessus de son état initial."},
    {sense:'augmenter',concept:'Croissance/Augmentation',description:''},
    {sense:'élever (un enfant)',concept:'Croissance/Augmentation',description:''},
    {sense:'usure (riba)',concept:'Usure/Intérêt',description:"L'augmentation illégitime de l'argent par le prêt à intérêt. L'usure est une croissance artificielle et injuste — elle fait grandir l'argent sans travail réel. Le riba est l'opposé de la sadaqa (aumône)."},
    {sense:'intérêt financier',concept:'Usure/Intérêt',description:''},
  ]);log(r,'rbw')

  // 7. tll (طلل) — rosée légère, colline, être agréable
  r=await ins('tll',[
    {sense:'rosée légère',concept:'Pluie fine/Douceur',description:"La bruine douce qui mouille à peine la surface de la terre. La rosée est un bienfait léger et délicat — elle ne ravage pas comme l'averse mais nourrit en douceur. C'est le minimum de pluie qui suffit à faire vivre."},
    {sense:'bruine',concept:'Pluie fine/Douceur',description:''},
    {sense:'colline (tall)',concept:'Élévation',description:"Petite hauteur de terre qui dépasse le niveau du sol. La colline est une élévation douce et permanente du terrain."},
  ]);log(r,'tll')

  // 8. nkhl (نخل) — palmier dattier
  r=await ins('nkhl',[
    {sense:'palmier dattier',concept:'Arbre/Provision',description:"L'arbre qui donne les dattes, source permanente de nourriture dans le désert. Le palmier est un arbre stable et enraciné — il résiste à la chaleur et donne ses fruits avec régularité. Le palmier est le symbole de la patience et de la générosité."},
    {sense:'dattier',concept:'Arbre/Provision',description:''},
    {sense:'tamiser',concept:'Divers',description:'Acte de séparer le fin du grossier — lié au tronc fin du palmier.'},
  ]);log(r,'nkhl')

  // 9. enb (عنب) — raisin, vigne
  r=await ins('enb',[
    {sense:'raisin',concept:'Fruit/Vigne',description:"Le fruit de la vigne, sucré et abondant. Le raisin est un fruit permanent de la saison — il est le symbole de l'abondance terrestre et du bienfait divin. La vigne donne son fruit en grappes généreuses."},
    {sense:'vigne',concept:'Fruit/Vigne',description:''},
  ]);log(r,'enb')

  // 10. ðrw (ذرو) — variante dispersion
  r=await ins('\u00F0rw',[
    {sense:'disperser',concept:'Dispersion/Éparpillement',description:"Acte de répandre dans toutes les directions. La dispersion est multidirectionnelle et irréversible."},
    {sense:'progéniture',concept:'Descendance/Multiplication',description:"Les enfants qui se multiplient à travers les générations."},
    {sense:'atome',concept:'Petitesse/Infime',description:"La plus petite chose perceptible — le grain de poussière."},
  ]);log(r,'\u00F0rw')

  console.log('\n=== Batch 179 terminé — '+done+'/2321 ===')
}
run().catch(e=>{console.error('ERR:',e);process.exit(1)})
