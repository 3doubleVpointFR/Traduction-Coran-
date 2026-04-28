const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 1388, total = 2321

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

  // 1. hrq (حرق) — brûler, incendier, consumer
  r=await ins('hrq',[
    {sense:'brûler',concept:'Combustion/Feu',description:"Acte de consumer par le feu, de transformer la matière en cendres. Le feu sort de la source et atteint ce qui brûle — c'est directionnel et destructeur. La combustion est un processus irréversible qui transforme de façon permanente."},
    {sense:'incendier',concept:'Combustion/Feu',description:''},
    {sense:'consumer',concept:'Combustion/Feu',description:''},
    {sense:'grincer des dents',concept:'Divers',description:'Frotter les dents l\'une contre l\'autre — comme le frottement qui produit le feu.'},
  ]);log(r,'hrq')

  // 2. snw (سنو) — année, saison
  r=await ins('snw',[
    {sense:'année',concept:'Temps/Cycle',description:"Unité de temps correspondant à un cycle complet. L'année est un cycle permanent qui se répète — elle mesure le passage du temps et le retour des saisons."},
    {sense:'saison',concept:'Temps/Cycle',description:''},
  ]);log(r,'snw')

  // 3. alladhi () — celui qui (pronom relatif)
  r=await ins('alladhi',[
    {sense:'celui qui',concept:'Pronom relatif',description:"Pronom qui relie deux propositions en désignant une personne ou une chose déjà mentionnée. Le pronom relatif crée un lien permanent entre l'antécédent et ce qui le qualifie."},
    {sense:'ceux qui',concept:'Pronom relatif',description:''},
    {sense:'ce qui',concept:'Pronom relatif',description:''},
  ]);log(r,'alladhi')

  // 4. bayna () — entre, parmi, au milieu
  r=await ins('bayna',[
    {sense:'entre',concept:'Intervalle/Séparation',description:"Préposition qui indique l'espace qui sépare et relie deux éléments. L'intervalle est l'espace permanent entre deux points — il est à la fois séparation et connexion. Être entre c'est être au milieu des deux, dans l'espace de transition."},
    {sense:'parmi',concept:'Intervalle/Séparation',description:''},
    {sense:'au milieu de',concept:'Intervalle/Séparation',description:''},
  ]);log(r,'bayna')

  // 5. wa-huwa () — et lui, et il
  r=await ins('wa-huwa',[
    {sense:'et lui',concept:'Conjonction+Pronom',description:"Combinaison de la conjonction et du pronom masculin absent. Cette expression crée une continuité dans le discours en ajoutant un sujet nouveau — elle lie ce qui précède à un nouvel acteur."},
    {sense:'et il',concept:'Conjonction+Pronom',description:''},
  ]);log(r,'wa-huwa')

  // 6. xfy (خفي) — cacher, être invisible, secret
  r=await ins('xfy',[
    {sense:'cacher',concept:'Dissimulation/Secret',description:"Acte de rendre invisible ce qui existait au grand jour. La dissimulation sort de celui qui cache et atteint ce qui est caché — c'est directionnel et crée un état d'invisibilité. Le secret est ce qui est soustrait au regard permanent des autres."},
    {sense:'être caché',concept:'Dissimulation/Secret',description:''},
    {sense:'être secret',concept:'Dissimulation/Secret',description:''},
    {sense:'être invisible',concept:'Dissimulation/Secret',description:''},
  ]);log(r,'xfy')

  // 7. hw y (هوي) — variante de h w y (désir, skip probable)
  r=await ins('hw y',[
    {sense:'désirer',concept:'Désir/Passion',description:"Mouvement intérieur de l'âme vers ce qui l'attire sans contrôle rationnel. Le désir tire l'être vers le bas — il est directionnel de l'intérieur vers l'objet convoité."},
    {sense:'passion',concept:'Désir/Passion',description:''},
    {sense:'tomber',concept:'Chute',description:"Mouvement du haut vers le bas sous l'effet de la gravité. La chute emporte celui qui tombe."},
  ]);log(r,'hw y')

  // 8. kh y r (خير) — être bon, bien, meilleur, choisir
  r=await ins('kh y r',[
    {sense:'être bon',concept:'Bien/Bonté',description:"État de ce qui est bénéfique et conforme à la vertu. Le bien est un état permanent de ce qui est bon — il profite à celui qui le fait et à celui qui le reçoit. Le khayr est le bien absolu, l'opposé du mal."},
    {sense:'bien',concept:'Bien/Bonté',description:''},
    {sense:'meilleur',concept:'Bien/Bonté',description:''},
    {sense:'choisir',concept:'Choix/Préférence',description:"Acte rationnel de sélectionner le meilleur. Le choix est directionnel — il part de celui qui choisit vers ce qui est élu comme le meilleur."},
    {sense:'préférer',concept:'Choix/Préférence',description:''},
  ]);log(r,'kh y r')

  // 9. dh y (ذهي → ذهب) — aller, partir, or
  r=await ins('dh y',[
    {sense:'aller',concept:'Départ/Mouvement',description:"Acte de se mettre en mouvement pour quitter un lieu. Le départ est directionnel — il va d'ici vers ailleurs. C'est un mouvement ponctuel qui crée une absence permanente."},
    {sense:'partir',concept:'Départ/Mouvement',description:''},
    {sense:'disparaître',concept:'Départ/Mouvement',description:''},
    {sense:'or (dhahab)',concept:'Métal précieux',description:"Le métal jaune et brillant qui ne se corrode pas. L'or est permanent dans sa pureté — il ne rouille pas et conserve sa valeur à travers le temps."},
  ]);log(r,'dh y')

  // 10. h s r (حصر) — assiéger, confiner, être bloqué
  r=await ins('h s r',[
    {sense:'assiéger',concept:'Siège/Confinement',description:"Acte extérieur d'entourer un lieu pour empêcher toute entrée et sortie. Le siège est multidirectionnel — il vient de partout et enferme celui qui est assiégé. C'est un état permanent tant que le siège dure."},
    {sense:'confiner',concept:'Siège/Confinement',description:''},
    {sense:'être bloqué',concept:'Siège/Confinement',description:''},
    {sense:'être empêché',concept:'Siège/Confinement',description:''},
  ]);log(r,'h s r')

  console.log('\n=== Batch 180 terminé — '+done+'/2321 ===')
}
run().catch(e=>{console.error('ERR:',e);process.exit(1)})
