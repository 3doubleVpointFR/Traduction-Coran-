const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 1288, total = 2321

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

  // 1. ḏwy (ذوي) — se faner (variante, probablement skip)
  r=await ins('\u1E0Fwy',[
    {sense:'se faner',concept:'Dépérissement/Déclin',description:"État de ce qui perd sa fraîcheur progressivement. Le dépérissement est lent et permanent — la plante qui se fane ne reverdit plus."},
    {sense:'dépérir',concept:'Dépérissement/Déclin',description:''},
  ]);log(r,'\u1E0Fwy')

  // 2. eqd (عقد) — nouer, contracter, ferme résolution
  r=await ins('eqd',[
    {sense:'nouer',concept:'Nœud/Contrat',description:"Acte extérieur de lier deux choses ensemble de façon ferme. Le nœud sort de celui qui noue et atteint ce qui est noué — c'est directionnel et crée un lien permanent. Le contrat est un nœud entre deux volontés qui s'engagent mutuellement."},
    {sense:'contracter',concept:'Nœud/Contrat',description:''},
    {sense:'pacte',concept:'Nœud/Contrat',description:''},
    {sense:'résolution ferme',concept:'Détermination',description:"État intérieur de celui qui a pris une décision irrévocable. La résolution est un nœud de la volonté — une fois noué, on ne revient plus en arrière."},
    {sense:'nœud de magie',concept:'Divers',description:'L\'acte de nouer des nœuds à des fins de sorcellerie.'},
  ]);log(r,'eqd')

  // 3. ḏly (ذلي) — être humble (variante de dhly, probablement skip)
  r=await ins('\u1E0Fly',[
    {sense:'être humble',concept:'Humilité/Soumission',description:"État intérieur de celui qui reconnaît sa petitesse. L'humilité est permanente comme disposition — elle est l'abaissement volontaire devant ce qui est plus grand que soi."},
    {sense:'être soumis',concept:'Humilité/Soumission',description:''},
    {sense:'être docile',concept:'Humilité/Soumission',description:''},
  ]);log(r,'\u1E0Fly')

  // 4. knn (كنن) — cacher, protéger, abriter
  r=await ins('knn',[
    {sense:'cacher',concept:'Protection/Voilement',description:"Acte de mettre à l'abri du regard et du danger. La protection par le voilement sort du protecteur et atteint ce qui est caché — c'est directionnel et crée un état permanent de sécurité. Cacher c'est envelopper de soin ce qui est précieux."},
    {sense:'protéger',concept:'Protection/Voilement',description:''},
    {sense:'abriter',concept:'Protection/Voilement',description:''},
    {sense:'être caché (maknun)',concept:'Protection/Voilement',description:''},
  ]);log(r,'knn')

  // 5. khtb (خطب) — affaire grave, discours, demander en mariage
  r=await ins('khtb',[
    {sense:'affaire grave',concept:'Affaire grave/Discours',description:"Événement important qui nécessite qu'on en parle et qu'on le traite. L'affaire grave sort de la situation et atteint ceux qui doivent la résoudre — c'est un appel qui mobilise l'attention et l'action."},
    {sense:'discours',concept:'Affaire grave/Discours',description:''},
    {sense:'prêche',concept:'Affaire grave/Discours',description:''},
    {sense:'demander en mariage',concept:'Demande/Proposition',description:"Acte extérieur de proposer le mariage à quelqu'un. La demande sort du prétendant et atteint la femme ou sa famille — c'est directionnel et engageant."},
    {sense:'fiancer',concept:'Demande/Proposition',description:''},
  ]);log(r,'khtb')

  // 6. dhww (ذوو) — possesseurs, détenteurs
  r=await ins('dhww',[
    {sense:'possesseurs',concept:'Possession/Attribut',description:"Ceux qui détiennent une qualité ou un bien. La possession est un état permanent de celui qui a — elle lie le possesseur à ce qu'il possède. Les dhawu sont ceux qui se caractérisent par un attribut."},
    {sense:'détenteurs',concept:'Possession/Attribut',description:''},
    {sense:'gens de (dhu)',concept:'Possession/Attribut',description:''},
  ]);log(r,'dhww')

  // 7. dhru (ذرو) — variante dispersion
  r=await ins('dhru',[
    {sense:'disperser',concept:'Dispersion/Éparpillement',description:"Acte de répandre dans toutes les directions. La dispersion est multidirectionnelle et irréversible."},
    {sense:'progéniture',concept:'Descendance/Multiplication',description:"Les enfants qui se multiplient et se répandent à travers les générations."},
    {sense:'atome',concept:'Petitesse/Infime',description:"La plus petite chose perceptible — le grain de poussière."},
  ]);log(r,'dhru')

  // 8. dwy (ذوي) — variante se faner
  r=await ins('dwy',[
    {sense:'se faner',concept:'Dépérissement/Déclin',description:"État de ce qui perd sa vitalité et sa fraîcheur progressivement. Le dépérissement est lent et permanent."},
    {sense:'dépérir',concept:'Dépérissement/Déclin',description:''},
  ]);log(r,'dwy')

  // 9. def (ضعف) — être faible, faiblesse, multiplier
  r=await ins('def',[
    {sense:'être faible',concept:'Faiblesse/Fragilité',description:"État de celui qui manque de force et de résistance. La faiblesse est intérieure et permanente tant que la force n'est pas retrouvée — elle rend vulnérable et incapable d'agir. Le faible est celui qui ne peut pas se défendre ni porter de fardeau."},
    {sense:'faiblesse',concept:'Faiblesse/Fragilité',description:''},
    {sense:'affaiblir',concept:'Faiblesse/Fragilité',description:''},
    {sense:'multiplier',concept:'Multiplication/Double',description:"Acte d'augmenter une quantité en la répétant. La multiplication est un acte extérieur qui crée de l'abondance à partir de ce qui est — elle double, triple et augmente."},
    {sense:'double',concept:'Multiplication/Double',description:''},
  ]);log(r,'def')

  // 10. qbd (قبض) — saisir, prendre, contracter, resserrer
  r=await ins('qbd',[
    {sense:'saisir',concept:'Saisie/Contraction',description:"Acte extérieur de refermer la main sur quelque chose pour le prendre. La saisie est directionnelle — elle part de la main et atteint ce qui est saisi. C'est l'acte de fermeture qui retient et contracte. Le qabd est l'opposé du bast (expansion)."},
    {sense:'prendre',concept:'Saisie/Contraction',description:''},
    {sense:'contracter',concept:'Saisie/Contraction',description:''},
    {sense:'resserrer',concept:'Saisie/Contraction',description:''},
    {sense:'retirer (l\'âme)',concept:'Divers',description:'Dieu qui saisit l\'âme au moment de la mort.'},
  ]);log(r,'qbd')

  console.log('\n=== Batch 170 terminé — '+done+'/2321 ===')
}
run().catch(e=>{console.error('ERR:',e);process.exit(1)})
