const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 1148, total = 2321

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

  // 1. thm (ثمر) — fruit, produit, résultat
  r=await ins('thm',[
    {sense:'fruit',concept:'Fruit/Produit',description:"Ce que l'arbre ou la terre produit après un cycle de croissance. Le fruit est le résultat permanent d'un processus — il est ce qui naît de la patience et du soin. Le fruit est la récompense visible du travail invisible des racines."},
    {sense:'produit',concept:'Fruit/Produit',description:''},
    {sense:'résultat',concept:'Fruit/Produit',description:''},
    {sense:'richesse (thamara)',concept:'Fruit/Produit',description:''},
    {sense:'fructifier',concept:'Fruit/Produit',description:''},
  ]);log(r,'thm')

  // 2. sfw (صفو) — être pur, être clair, choisir, élite
  r=await ins('sfw',[
    {sense:'être pur',concept:'Pureté/Clarté',description:"État de ce qui est sans mélange ni impureté, limpide et transparent. La pureté est un état intérieur permanent — ce qui est pur ne contient que son essence. La clarté permet de voir à travers sans obstruction."},
    {sense:'être clair',concept:'Pureté/Clarté',description:''},
    {sense:'être limpide',concept:'Pureté/Clarté',description:''},
    {sense:'choisir',concept:'Élection/Choix',description:"Acte de sélectionner le meilleur parmi un ensemble. Le choix est directionnel — il part de celui qui choisit vers ce qui est élu. Choisir c'est purifier en séparant le bon du reste."},
    {sense:'élire',concept:'Élection/Choix',description:''},
    {sense:'élu (safiy)',concept:'Élection/Choix',description:''},
  ]);log(r,'sfw')

  // 3. jnh (جنح) — pencher, incliner, aile, côté
  r=await ins('jnh',[
    {sense:'pencher',concept:'Inclinaison/Penchant',description:"Mouvement de ce qui quitte la verticalité pour aller vers un côté. L'inclinaison est directionnelle — elle part du centre et va vers le côté. C'est un état qui peut être ponctuel (se pencher) ou permanent (avoir un penchant)."},
    {sense:'incliner vers',concept:'Inclinaison/Penchant',description:''},
    {sense:'aile',concept:'Aile/Côté',description:"Partie latérale du corps d'un oiseau qui lui permet de voler. L'aile est un côté qui s'étend — elle est permanente dans le corps et symbolise la protection (abaisser l'aile = être humble et protecteur)."},
    {sense:'côté',concept:'Aile/Côté',description:''},
    {sense:'péché (junah)',concept:'Divers',description:'Ce vers quoi on penche par faiblesse — la déviation du droit chemin.'},
  ]);log(r,'jnh')

  // 4. twe (طوع) — obéir, se soumettre volontairement
  r=await ins('twe',[
    {sense:'obéir',concept:'Obéissance/Soumission volontaire',description:"Acte de se conformer à un ordre par choix et non par contrainte. L'obéissance volontaire sort de celui qui obéit et répond à celui qui commande — c'est directionnel et rationnel. C'est un acte permanent de la volonté qui se soumet librement à une autorité reconnue."},
    {sense:'se soumettre volontairement',concept:'Obéissance/Soumission volontaire',description:''},
    {sense:'consentir',concept:'Obéissance/Soumission volontaire',description:''},
    {sense:'être capable',concept:'Capacité/Pouvoir',description:"État de celui qui a les moyens d'accomplir une chose. La capacité est intérieure et permanente — elle est le pouvoir latent qui attend d'être exercé."},
    {sense:'pouvoir',concept:'Capacité/Pouvoir',description:''},
  ]);log(r,'twe')

  // 5. baed (بعد) — être loin, après, éloignement
  r=await ins('baed',[
    {sense:'être loin',concept:'Éloignement/Distance',description:"État de séparation spatiale ou temporelle entre deux choses. La distance est permanente tant que rien ne la comble — elle est l'espace qui sépare et isole. Ce qui est loin est hors de portée et d'influence."},
    {sense:'éloignement',concept:'Éloignement/Distance',description:''},
    {sense:'après',concept:'Postériorité',description:"Position dans le temps qui suit un autre événement. L'après est directionnel — il pointe vers ce qui vient plus tard. Après est le contraire d'avant, c'est ce qui succède."},
    {sense:'ensuite',concept:'Postériorité',description:''},
    {sense:'périr',concept:'Divers',description:'Sens figuré de l\'éloignement ultime — celui qui périt est éloigné définitivement.'},
  ]);log(r,'baed')

  // 6. xld (خلد) — demeurer éternellement (variante)
  r=await ins('xld',[
    {sense:'demeurer éternellement',concept:'Éternité/Permanence',description:"État de ce qui ne finit jamais et ne change pas. L'éternité est l'absence totale de fin — c'est la permanence absolue. Demeurer éternellement c'est être soustrait au temps et à la mort."},
    {sense:'rester pour toujours',concept:'Éternité/Permanence',description:''},
    {sense:'pencher vers',concept:'Inclination',description:"Mouvement intérieur de l'âme vers ce qui attire. L'inclination est directionnelle et peut devenir permanente."},
  ]);log(r,'xld')

  // 7. xff (خفف) — être léger, alléger, diminuer
  r=await ins('xff',[
    {sense:'être léger',concept:'Légèreté/Allègement',description:"État de ce qui pèse peu et se déplace facilement. La légèreté est l'opposé du poids — elle est permanente dans ce qui est léger. Ce qui est léger monte, se libère de ce qui tire vers le bas."},
    {sense:'alléger',concept:'Légèreté/Allègement',description:''},
    {sense:'diminuer un fardeau',concept:'Légèreté/Allègement',description:''},
    {sense:'être rapide',concept:'Vitesse/Empressement',description:"État de ce qui se déplace vite, sans délai. La rapidité est liée à la légèreté — ce qui est léger est rapide. L'empressement est la rapidité dans la réponse."},
    {sense:'se hâter',concept:'Vitesse/Empressement',description:''},
  ]);log(r,'xff')

  // 8. akhz (أخذ) — prendre, saisir (variante de khdd)
  r=await ins('akhz',[
    {sense:'prendre',concept:'Prise/Saisie',description:"Acte extérieur de s'emparer de quelque chose. La prise sort de celui qui prend et atteint ce qui est pris — c'est directionnel et ponctuel. Prendre c'est transférer de l'extérieur vers soi."},
    {sense:'saisir',concept:'Prise/Saisie',description:''},
    {sense:'adopter',concept:'Prise/Saisie',description:''},
    {sense:'punir',concept:'Châtiment',description:"Acte extérieur de saisir quelqu'un pour le punir. Le châtiment est une prise de force — il sort du punisseur et atteint le puni."},
    {sense:'reprocher',concept:'Châtiment',description:''},
  ]);log(r,'akhz')

  // 9. hbb (حبب) — aimer, graine, corde
  r=await ins('hbb',[
    {sense:'aimer',concept:'Amour/Affection',description:"État intérieur d'attachement profond à quelqu'un ou quelque chose. L'amour est permanent dans l'âme de celui qui aime — il reste en lui et oriente toute son existence. L'amour est un état qui peut être rationnel (choix) ou passionnel (émotion)."},
    {sense:'affection',concept:'Amour/Affection',description:''},
    {sense:'préférer',concept:'Amour/Affection',description:''},
    {sense:'graine',concept:'Graine/Semence',description:"La petite chose qui contient en elle la vie future. La graine est permanente dans son potentiel — elle porte en elle tout l'arbre à venir. La graine est le début de tout ce qui pousse."},
    {sense:'grain',concept:'Graine/Semence',description:''},
    {sense:'corde',concept:'Lien',description:"Ce qui attache et lie deux choses ensemble. La corde est un lien permanent qui maintient la connexion — le hablallah est la corde de Dieu qui relie l'homme au divin."},
  ]);log(r,'hbb')

  // 10. flk (فلك) — orbite, navire, sphère
  r=await ins('flk',[
    {sense:'orbite',concept:'Orbite/Rotation',description:"Trajectoire circulaire permanente que suit un astre dans l'espace. L'orbite est un mouvement perpétuel qui revient toujours au même point — c'est un cycle sans début ni fin. Chaque astre nage dans son orbite."},
    {sense:'sphère céleste',concept:'Orbite/Rotation',description:''},
    {sense:'rotation',concept:'Orbite/Rotation',description:''},
    {sense:'navire',concept:'Navigation/Vaisseau',description:"Embarcation qui traverse la mer en portant ses passagers. Le navire est un véhicule qui se déplace sur l'eau — il est directionnel et porte. Le navire de Noé est l'arche du salut."},
    {sense:'arche',concept:'Navigation/Vaisseau',description:''},
  ]);log(r,'flk')

  console.log('\n=== Batch 156 terminé — '+done+'/2321 ===')
}
run().catch(e=>{console.error('ERR:',e);process.exit(1)})
