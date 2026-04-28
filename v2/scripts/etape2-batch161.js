const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 1198, total = 2321

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

  // 1. xwn (خون) — trahir, être infidèle, diminuer
  r=await ins('xwn',[
    {sense:'trahir',concept:'Trahison/Infidélité',description:"Acte extérieur de rompre la confiance de celui qui s'est fié à vous. La trahison sort du traître et atteint celui qui est trahi — c'est directionnel et destructeur. La trahison est ponctuelle dans l'acte mais brise un lien de confiance de façon permanente."},
    {sense:'être infidèle',concept:'Trahison/Infidélité',description:''},
    {sense:'tromper la confiance',concept:'Trahison/Infidélité',description:''},
    {sense:'diminuer',concept:'Diminution',description:"Acte de retirer secrètement une partie de ce qui était confié. La diminution est un vol caché — un manquement au dépôt de confiance."},
  ]);log(r,'xwn')

  // 2. ḫyt (خيط) — fil, ligne, aube
  r=await ins('\u1E2Byt',[
    {sense:'fil',concept:'Fil/Ligne',description:"Ce qui est fin, continu et s'étend en longueur. Le fil est un lien permanent entre deux points — il relie et trace une direction. Le fil de l'aube est la première ligne de lumière qui sépare la nuit du jour."},
    {sense:'ligne',concept:'Fil/Ligne',description:''},
    {sense:'fil de l\'aube (khayt al-fajr)',concept:'Fil/Ligne',description:''},
    {sense:'coudre',concept:'Divers',description:'Assembler avec un fil — relier les morceaux.'},
  ]);log(r,'\u1E2Byt')

  // 3. byd (بيض) — être blanc, œuf, jour clair
  r=await ins('byd',[
    {sense:'être blanc',concept:'Blancheur/Clarté',description:"État de ce qui reflète toute la lumière sans en absorber aucune. La blancheur est permanente dans ce qui la possède — elle est le signe de la pureté et de la clarté. Le blanc est la couleur de l'absence de souillure."},
    {sense:'blancheur',concept:'Blancheur/Clarté',description:''},
    {sense:'œuf',concept:'Œuf/Protection',description:"Enveloppe qui contient et protège la vie naissante. L'œuf est un contenant permanent qui garde en sécurité ce qui est fragile — il protège le germe de vie."},
    {sense:'jours blancs (pleines lunes)',concept:'Blancheur/Clarté',description:''},
  ]);log(r,'byd')

  // 4. swd (سود) — être noir, chef, maître
  r=await ins('swd',[
    {sense:'être noir',concept:'Noirceur/Obscurité',description:"État de ce qui absorbe toute la lumière. La noirceur est permanente dans ce qui la possède — elle est l'absence de clarté, l'opposé du blanc. Au figuré, le noir est le signe du malheur ou de la tristesse."},
    {sense:'noirceur',concept:'Noirceur/Obscurité',description:''},
    {sense:'être chef',concept:'Prééminence/Maîtrise',description:"État de celui qui est au-dessus des autres par son rang et son autorité. La maîtrise est un état permanent chez le chef — il est le sayyid, celui que les autres reconnaissent comme supérieur."},
    {sense:'maître (sayyid)',concept:'Prééminence/Maîtrise',description:''},
  ]);log(r,'swd')

  // 5. hdd (حدد) — limiter, délimiter, interdire, fer
  r=await ins('hdd',[
    {sense:'limiter',concept:'Limite/Frontière',description:"Acte de fixer une borne au-delà de laquelle on ne peut aller. La limite est permanente — elle sépare le permis de l'interdit, le dedans du dehors. Les hudud sont les frontières que Dieu a posées et que l'homme ne doit pas franchir."},
    {sense:'délimiter',concept:'Limite/Frontière',description:''},
    {sense:'frontières (hudud)',concept:'Limite/Frontière',description:''},
    {sense:'fer (hadid)',concept:'Fer/Dureté',description:"Métal dur et résistant qu'on forge pour en faire des outils et des armes. Le fer est permanent dans sa dureté — il tranche et sépare. Le fer est la matière de la limite physique."},
    {sense:'être tranchant',concept:'Fer/Dureté',description:''},
    {sense:'interdire',concept:'Divers',description:'Poser une limite que l\'on ne doit pas franchir.'},
  ]);log(r,'hdd')

  // 6. kḏl (كذل) — de même, ainsi, comme cela
  r=await ins('k\u1E0Fl',[
    {sense:'de même',concept:'Similitude/Référence',description:"Particule composée qui renvoie à ce qui a été dit ou fait auparavant. La référence crée un lien entre deux situations — elle dit que ceci est comme cela. C'est un acte rationnel de comparaison qui établit une continuité."},
    {sense:'ainsi',concept:'Similitude/Référence',description:''},
    {sense:'comme cela',concept:'Similitude/Référence',description:''},
  ]);log(r,'k\u1E0Fl')

  // 7. nhy (نهي) — interdire, empêcher, intelligence
  r=await ins('nhy',[
    {sense:'interdire',concept:'Interdiction/Empêchement',description:"Acte extérieur de poser un interdit sur une action. L'interdiction sort de celui qui interdit et atteint celui qui est interdit — c'est directionnel et crée une barrière permanente. Interdire c'est fermer une porte que l'autre voulait franchir."},
    {sense:'empêcher',concept:'Interdiction/Empêchement',description:''},
    {sense:'défendre',concept:'Interdiction/Empêchement',description:''},
    {sense:'intelligence (nuha)',concept:'Intelligence/Discernement',description:"Faculté qui interdit à l'homme de faire ce qui est insensé. L'intelligence est intérieure et permanente — elle est le frein naturel qui empêche l'excès. Les gens de nuha sont ceux dont l'intelligence les retient du mal."},
    {sense:'atteindre son terme',concept:'Divers',description:'Parvenir à la fin — là où ça s\'arrête.'},
  ]);log(r,'nhy')

  // 8. thqf (ثقف) — trouver, rencontrer, être habile
  r=await ins('thqf',[
    {sense:'trouver',concept:'Rencontre/Découverte',description:"Acte de tomber sur quelqu'un ou quelque chose, souvent de façon inattendue. La rencontre est directionnelle — on tombe sur ce qu'on cherchait ou ce qu'on ne cherchait pas. C'est ponctuel et décisif."},
    {sense:'rencontrer',concept:'Rencontre/Découverte',description:''},
    {sense:'être habile',concept:'Habileté',description:"État de celui qui maîtrise un art ou une compétence avec finesse. L'habileté est intérieure et permanente — elle est le fruit de la pratique et du talent."},
    {sense:'saisir',concept:'Rencontre/Découverte',description:''},
  ]);log(r,'thqf')

  // 9. fih (فيه) — en lui, dans cela
  r=await ins('fih',[
    {sense:'en lui',concept:'Contenu/Intériorité',description:"Préposition et pronom qui indiquent que quelque chose est à l'intérieur de quelque chose d'autre. L'intériorité est un état permanent de ce qui contient — ce qui est en lui fait partie de son essence."},
    {sense:'dans cela',concept:'Contenu/Intériorité',description:''},
    {sense:'à son sujet',concept:'Contenu/Intériorité',description:''},
  ]);log(r,'fih')

  // 10. hlk (هلك) — périr, détruire, être perdu
  r=await ins('hlk',[
    {sense:'périr',concept:'Destruction/Anéantissement',description:"Acte ou état de cesser d'exister, d'être anéanti. La destruction est un événement ponctuel qui crée un état permanent de non-existence. Périr c'est être emporté définitivement — ce qui périt ne revient pas."},
    {sense:'être détruit',concept:'Destruction/Anéantissement',description:''},
    {sense:'être perdu',concept:'Destruction/Anéantissement',description:''},
    {sense:'faire périr',concept:'Destruction/Anéantissement',description:''},
    {sense:'gaspiller',concept:'Divers',description:'Dépenser en pure perte — faire périr ses biens.'},
  ]);log(r,'hlk')

  console.log('\n=== Batch 161 terminé — '+done+'/2321 ===')
}
run().catch(e=>{console.error('ERR:',e);process.exit(1)})
