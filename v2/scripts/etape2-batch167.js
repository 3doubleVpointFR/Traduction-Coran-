const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 1258, total = 2321

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

  // 1. rbs (ربص) — attendre, guetter, temporiser
  r=await ins('rbs',[
    {sense:'attendre',concept:'Attente/Guet',description:"Acte intérieur de patienter dans l'expectative de ce qui va venir. L'attente est un état permanent tant que l'événement attendu n'arrive pas — elle suspend l'action. Guetter c'est attendre avec vigilance, les yeux ouverts sur ce qui vient."},
    {sense:'guetter',concept:'Attente/Guet',description:''},
    {sense:'temporiser',concept:'Attente/Guet',description:''},
    {sense:'se retenir',concept:'Attente/Guet',description:''},
  ]);log(r,'rbs')

  // 2. fwa (فوء) — revenir, retourner (à l'épouse)
  r=await ins('fwa',[
    {sense:'revenir (à l\'épouse)',concept:'Retour/Reprise',description:"Acte de reprendre la vie conjugale après une séparation ou un serment d'abstinence. Le retour est directionnel — il ramène l'époux vers l'épouse. C'est un acte ponctuel qui rétablit un état permanent de vie commune."},
    {sense:'se rétracter',concept:'Retour/Reprise',description:''},
    {sense:'revenir sur sa décision',concept:'Retour/Reprise',description:''},
  ]);log(r,'fwa')

  // 3. alw (ألو) — manquer, négliger, épargner
  r=await ins('alw',[
    {sense:'ne pas manquer de',concept:'Persistance/Constance',description:"État de celui qui ne cesse jamais de faire quelque chose. La persistance est un état permanent de continuité — celui qui ne manque pas d'agir est constant dans son action."},
    {sense:'ne pas négliger',concept:'Persistance/Constance',description:''},
    {sense:'faire de son mieux',concept:'Persistance/Constance',description:''},
  ]);log(r,'alw')

  // 4. fawa (فوء) — variante de fwa
  r=await ins('fawa',[
    {sense:'revenir',concept:'Retour/Reprise',description:"Acte de reprendre ce qu'on avait quitté. Le retour est directionnel — il ramène vers le point de départ. C'est un mouvement de restauration."},
    {sense:'se rétracter',concept:'Retour/Reprise',description:''},
  ]);log(r,'fawa')

  // 5. kh-l-q (خلق) — créer, façonner (variante de khlaq)
  r=await ins('kh-l-q',[
    {sense:'créer',concept:'Création/Formation',description:"Acte de faire exister ce qui n'existait pas, de donner l'être à partir du néant. La création sort du Créateur et atteint la créature — c'est directionnel et transformateur. Créer c'est l'acte premier et suprême qui donne forme et vie."},
    {sense:'façonner',concept:'Création/Formation',description:''},
    {sense:'nature innée (khulq)',concept:'Nature/Caractère',description:"Ce qui est créé en l'être dès l'origine, sa disposition morale fondamentale. Le caractère est permanent — il est la création intérieure qui définit l'être."},
    {sense:'caractère',concept:'Nature/Caractère',description:''},
    {sense:'mesurer',concept:'Divers',description:'Déterminer les proportions avant de créer.'},
  ]);log(r,'kh-l-q')

  // 6. ewl (عول) — subvenir, entretenir, s'écarter, pleurer
  r=await ins('ewl',[
    {sense:'subvenir aux besoins',concept:'Entretien/Charge',description:"Acte extérieur de prendre en charge les besoins d'une personne qui dépend de soi. L'entretien sort du pourvoyeur et atteint celui qui est entretenu — c'est directionnel et permanent tant que la dépendance dure."},
    {sense:'entretenir',concept:'Entretien/Charge',description:''},
    {sense:'s\'écarter de la justice',concept:'Déviation/Injustice',description:"Acte de pencher vers un côté au détriment de l'équilibre. La déviation est un mouvement qui quitte le centre — elle est directionnelle vers l'excès."},
    {sense:'pleurer',concept:'Divers',description:'Crier de douleur — sens de lamentation.'},
  ]);log(r,'ewl')

  // 7. rawd (رود) — chercher, aller doucement (variante de ryd)
  r=await ins('rawd',[
    {sense:'chercher',concept:'Quête/Exploration',description:"Acte de se mettre en mouvement pour trouver ce que l'on veut. La quête est directionnelle — elle part du chercheur vers l'objet désiré. C'est un mouvement prudent et progressif."},
    {sense:'aller doucement',concept:'Quête/Exploration',description:''},
    {sense:'explorer',concept:'Quête/Exploration',description:''},
    {sense:'séduire',concept:'Divers',description:'Tenter de convaincre quelqu\'un — chercher à l\'amener vers soi.'},
  ]);log(r,'rawd')

  // 8. ðlw (ذلو) — être docile, humble (variante de dhly)
  r=await ins('\u00F0lw',[
    {sense:'être humble',concept:'Humilité/Soumission',description:"État intérieur de celui qui accepte sa position basse et ne résiste pas. L'humilité est permanente comme disposition — elle est l'acceptation de la petitesse devant ce qui est grand."},
    {sense:'être docile',concept:'Humilité/Soumission',description:''},
    {sense:'être soumis',concept:'Humilité/Soumission',description:''},
  ]);log(r,'\u00F0lw')

  // 9. ðwy (ذوي) — se faner, dépérir (variante de dh w y)
  r=await ins('\u00F0wy',[
    {sense:'se faner',concept:'Dépérissement/Déclin',description:"État de ce qui perd sa fraîcheur et sa vitalité progressivement. Le dépérissement est un processus lent et permanent — la plante qui se fane ne reverdit plus."},
    {sense:'dépérir',concept:'Dépérissement/Déclin',description:''},
  ]);log(r,'\u00F0wy')

  // 10. wa-tilka — particule + démonstratif
  r=await ins('wa-tilka',[
    {sense:'et celle-là',concept:'Conjonction+Démonstratif',description:"Combinaison de la conjonction de coordination et du démonstratif féminin lointain. Cette expression lie ce qui précède à ce qui est désigné au loin — elle crée une continuité dans le discours en pointant vers un objet éloigné."},
    {sense:'et ces (choses)',concept:'Conjonction+Démonstratif',description:''},
  ]);log(r,'wa-tilka')

  console.log('\n=== Batch 167 terminé — '+done+'/2321 ===')
}
run().catch(e=>{console.error('ERR:',e);process.exit(1)})
