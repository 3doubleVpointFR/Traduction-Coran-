const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 1578, total = 2321

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

  // 1. ya (ياي → يا) — ô (vocatif)
  r=await ins('ya',[
    {sense:'ô (vocatif)',concept:'Appel/Vocatif',description:"Particule d'interpellation qui attire l'attention de celui à qui on s'adresse. Le ya ouvre le dialogue en désignant l'interlocuteur — c'est directionnel du locuteur vers l'appelé."},
    {sense:'particule d\'appel',concept:'Appel/Vocatif',description:''},
  ]);log(r,'ya')

  // 2. kyn (كين) — être, exister, devenir
  r=await ins('kyn',[
    {sense:'être',concept:'Existence/Devenir',description:"L'état fondamental de ce qui existe. L'existence est permanente tant que l'être dure — c'est l'état premier qui précède toute qualité. Kun (sois) est le commandement divin qui fait passer du néant à l'être."},
    {sense:'exister',concept:'Existence/Devenir',description:''},
    {sense:'devenir',concept:'Existence/Devenir',description:''},
    {sense:'être (passé)',concept:'Existence/Devenir',description:''},
  ]);log(r,'kyn')

  // 3. whn (وهن) — être faible, s'affaiblir, fragilité
  r=await ins('whn',[
    {sense:'être faible',concept:'Faiblesse/Fragilité',description:"État de ce qui manque de résistance et de solidité. La faiblesse est un état intérieur qui affecte la capacité d'agir — elle rend l'être vulnérable face aux épreuves. Le wahn est l'état de celui dont les forces s'amenuisent."},
    {sense:'s\'affaiblir',concept:'Faiblesse/Fragilité',description:''},
    {sense:'fragilité',concept:'Faiblesse/Fragilité',description:''},
  ]);log(r,'whn')

  // 4. reb (رعب) — terrifier, effrayer, remplir de peur
  r=await ins('reb',[
    {sense:'terrifier',concept:'Terreur/Effroi',description:"Acte de provoquer une peur intense et paralysante. La terreur sort de la source effrayante et atteint celui qui est terrorisé — c'est directionnel et envahissant. Le rub est la peur qui pénètre le cœur et le remplit entièrement."},
    {sense:'effrayer',concept:'Terreur/Effroi',description:''},
    {sense:'remplir de peur',concept:'Terreur/Effroi',description:''},
  ]);log(r,'reb')

  // 5. slt (سلط) — dominer, avoir pouvoir sur, autorité
  r=await ins('slt',[
    {sense:'dominer',concept:'Domination/Autorité',description:"État de celui qui a le pouvoir sur les autres et les contrôle. La domination sort du dominant et atteint le dominé — c'est directionnel et peut être permanent. Le sultan est l'autorité qui s'impose par la force ou le droit."},
    {sense:'avoir pouvoir sur',concept:'Domination/Autorité',description:''},
    {sense:'autorité (sultan)',concept:'Domination/Autorité',description:''},
    {sense:'preuve (sultan)',concept:'Divers',description:'L\'argument qui donne autorité — la preuve comme pouvoir intellectuel.'},
  ]);log(r,'slt')

  // 6. thwy (ثوي) — résider, demeurer, mourir
  r=await ins('thwy',[
    {sense:'résider',concept:'Résidence/Séjour',description:"État de celui qui s'installe en un lieu et y demeure. La résidence est un état permanent d'installation — celui qui réside a choisi son lieu et s'y fixe."},
    {sense:'demeurer',concept:'Résidence/Séjour',description:''},
    {sense:'mourir',concept:'Divers',description:'Le dernier séjour — la résidence définitive.'},
  ]);log(r,'thwy')

  // 7. sed (صعد) — monter, s'élever, gravir
  r=await ins('sed',[
    {sense:'monter',concept:'Ascension/Élévation',description:"Acte de se déplacer vers le haut, de quitter le niveau bas pour atteindre le niveau haut. L'ascension est directionnelle vers le haut — elle demande un effort contre la gravité. Monter c'est s'élever au-dessus de sa condition."},
    {sense:'s\'élever',concept:'Ascension/Élévation',description:''},
    {sense:'gravir',concept:'Ascension/Élévation',description:''},
    {sense:'pente (saoud)',concept:'Divers',description:'Le terrain qui monte — la pente difficile à gravir.'},
  ]);log(r,'sed')

  // 8. kyl (كيل) — mesurer, peser, volume
  r=await ins('kyl',[
    {sense:'mesurer',concept:'Mesure/Pesée',description:"Acte de déterminer la quantité exacte de quelque chose par un instrument. La mesure est un acte rationnel de justice — elle donne à chacun exactement ce qui lui revient. Le kayl est le volume mesuré qui ne ment pas."},
    {sense:'peser',concept:'Mesure/Pesée',description:''},
    {sense:'volume',concept:'Mesure/Pesée',description:''},
  ]);log(r,'kyl')

  // 9. fwt (فوت) — échapper, manquer, passer
  r=await ins('fwt',[
    {sense:'échapper',concept:'Échappement/Perte',description:"Acte de ce qui quitte la portée et ne peut plus être rattrapé. L'échappement est directionnel — ce qui échappe s'éloigne de celui qui veut le saisir. Ce qui fawata est parti définitivement."},
    {sense:'manquer',concept:'Échappement/Perte',description:''},
    {sense:'passer (occasion)',concept:'Échappement/Perte',description:''},
  ]);log(r,'fwt')

  // 10. fshl (فشل) — variante de fsh (échouer)
  r=await ins('fshl',[
    {sense:'échouer',concept:'Échec/Faiblesse',description:"État de celui qui n'atteint pas son but. L'échec est le résultat de la faiblesse qui empêche d'aboutir."},
    {sense:'faiblir',concept:'Échec/Faiblesse',description:''},
    {sense:'se disperser',concept:'Échec/Faiblesse',description:''},
  ]);log(r,'fshl')

  console.log('\n=== Batch 199 terminé — '+done+'/2321 ===')
}
run().catch(e=>{console.error('ERR:',e);process.exit(1)})
