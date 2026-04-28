const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 1048, total = 2321

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

  // 1. khls (خلص) — être pur, sincère, sauver, extraire
  r=await ins('khls',[
    {sense:'être pur',concept:'Pureté/Sincérité',description:"État de ce qui est débarrassé de tout mélange et de toute altération. La pureté est intérieure et permanente — elle caractérise l'essence même de ce qui est pur. Ce qui est pur ne contient que lui-même, sans intrusion ni corruption."},
    {sense:'être sincère',concept:'Pureté/Sincérité',description:''},
    {sense:'dédier exclusivement',concept:'Pureté/Sincérité',description:''},
    {sense:'sauver',concept:'Extraction/Délivrance',description:"Acte extérieur de tirer quelqu'un d'un danger ou d'un mélange néfaste. La délivrance sort du sauveur et atteint le sauvé — c'est directionnel et ponctuel. Sauver c'est extraire le pur de l'impur, séparer ce qui doit être préservé."},
    {sense:'extraire',concept:'Extraction/Délivrance',description:''},
    {sense:'parvenir à',concept:'Extraction/Délivrance',description:''},
  ]);log(r,'khls')

  // 2. kfy (كفي) — suffire, protéger, épargner
  r=await ins('kfy',[
    {sense:'suffire',concept:'Suffisance/Protection',description:"État de ce qui comble entièrement le besoin sans qu'il faille chercher ailleurs. La suffisance est permanente tant que la source demeure — elle protège de la nécessité. Ce qui suffit remplit et couvre, il n'y a plus de manque."},
    {sense:'protéger contre',concept:'Suffisance/Protection',description:''},
    {sense:'épargner un mal',concept:'Suffisance/Protection',description:''},
    {sense:'être compétent',concept:'Suffisance/Protection',description:''},
    {sense:'rendre suffisant',concept:'Divers',description:'Acte de faire en sorte que quelque chose comble le besoin.'},
  ]);log(r,'kfy')

  // 3. qwed (قعد) — s'asseoir, rester, s'abstenir
  r=await ins('qwed',[
    {sense:'s\'asseoir',concept:'Position assise/Immobilité',description:"Acte de prendre une position basse et stable, l'opposé de se lever et d'agir. L'assise est un état qui fixe la personne dans un lieu — c'est permanent tant qu'on reste assis. S'asseoir c'est choisir l'immobilité, renoncer au mouvement."},
    {sense:'rester',concept:'Position assise/Immobilité',description:''},
    {sense:'s\'abstenir d\'agir',concept:'Position assise/Immobilité',description:''},
    {sense:'ne pas combattre',concept:'Position assise/Immobilité',description:''},
    {sense:'fondation (qaida)',concept:'Base/Fondation',description:"Ce sur quoi repose une structure, le socle qui porte tout l'édifice. La fondation est permanente et invisible sous ce qu'elle soutient — elle est la base stable qui permet à ce qui est au-dessus d'exister."},
    {sense:'base',concept:'Base/Fondation',description:''},
    {sense:'femme ménopausée (qaida)',concept:'Divers',description:'Femme qui ne porte plus — assise par rapport à la fertilité.'},
  ]);log(r,'qwed')

  // 4. abrh (أبر) — aiguille, guêpe, Ibrahim variante
  r=await ins('abrh',[
    {sense:'Abraham (variante dialectale)',concept:'Nom propre',description:"Variante du nom du prophète Ibrahim. C'est un nom propre permanent qui désigne une personne historique précise."},
    {sense:'aiguille',concept:'Piqûre/Pointe',description:"Objet fin et pointu qui perce et traverse. La piqûre est directionnelle — elle va de la pointe vers ce qui est percé. C'est ponctuel dans l'acte mais laisse un trou permanent."},
    {sense:'dard de guêpe',concept:'Piqûre/Pointe',description:''},
    {sense:'féconder un palmier',concept:'Fécondation',description:"Acte extérieur d'introduire le pollen dans la fleur femelle pour produire des fruits. La fécondation sort de celui qui l'accomplit et atteint l'arbre — c'est directionnel et crée un état de fertilité."},
  ]);log(r,'abrh')

  // 5. ank (أنك) — plomb, étain
  r=await ins('ank',[
    {sense:'plomb',concept:'Métal/Matière',description:"Métal lourd et dense, mou et malléable. Le plomb est permanent dans sa nature — il est ce qui pèse, ce qui alourdit, ce qui descend par sa propre masse."},
    {sense:'étain',concept:'Métal/Matière',description:''},
  ]);log(r,'ank')

  // 6. xlw (خلو) — être vide, être seul, passer (temps), laisser
  r=await ins('xlw',[
    {sense:'être vide',concept:'Vacuité/Solitude',description:"État de ce qui ne contient rien ni personne. La vacuité est un état intérieur et permanent tant que rien ne vient la remplir. L'espace vide attend d'être occupé — il est potentiel pur."},
    {sense:'être seul',concept:'Vacuité/Solitude',description:''},
    {sense:'être libre de',concept:'Vacuité/Solitude',description:''},
    {sense:'passer (temps révolu)',concept:'Passage/Passé',description:"Mouvement du temps qui s'écoule et ne revient pas. Ce qui est passé est définitivement parti — c'est directionnel et irréversible. Les peuples passés sont ceux qui ont traversé le temps et disparu."},
    {sense:'les générations passées',concept:'Passage/Passé',description:''},
    {sense:'laisser',concept:'Abandon',description:"Acte extérieur de ne pas retenir, de permettre à l'autre d'être libre. L'abandon sort de celui qui laisse et atteint ce qui est laissé — c'est directionnel et ponctuel."},
    {sense:'libérer',concept:'Abandon',description:''},
  ]);log(r,'xlw')

  // 7. lhy (لهي/لهو) — se divertir, oublier, se détourner
  r=await ins('lhy',[
    {sense:'se divertir',concept:'Divertissement/Oubli',description:"Acte intérieur de se détourner de ce qui est sérieux pour s'occuper de ce qui distrait. Le divertissement est un mouvement de l'attention qui quitte l'essentiel pour le futile — c'est directionnel et peut être ponctuel ou devenir permanent si l'habitude s'installe."},
    {sense:'jouer',concept:'Divertissement/Oubli',description:''},
    {sense:'oublier',concept:'Divertissement/Oubli',description:''},
    {sense:'se détourner de',concept:'Divertissement/Oubli',description:''},
    {sense:'être négligent',concept:'Divertissement/Oubli',description:''},
  ]);log(r,'lhy')

  // 8. mwy (موت) — mourir, être mort, être inerte
  r=await ins('mwy',[
    {sense:'mourir',concept:'Mort/Inertie',description:"Passage de l'état de vie à l'état de non-vie, cessation permanente des fonctions vitales. La mort est un événement ponctuel qui crée un état permanent — elle atteint celui qui meurt de l'extérieur ou de l'intérieur. C'est l'opposé absolu de la vie."},
    {sense:'être mort',concept:'Mort/Inertie',description:''},
    {sense:'terre morte',concept:'Mort/Inertie',description:''},
    {sense:'être inerte',concept:'Mort/Inertie',description:''},
    {sense:'faire mourir',concept:'Meurtre/Destruction',description:"Acte extérieur de causer la mort d'un être vivant. Le meurtre sort du tueur et atteint la victime — c'est directionnel, ponctuel et irréversible."},
  ]);log(r,'mwy')

  // 9. lh (له) — insister, coller, être opiniâtre
  r=await ins('lh',[
    {sense:'insister',concept:'Insistance/Persistance',description:"Acte de revenir sans cesse sur la même demande ou la même action sans relâcher. L'insistance sort de celui qui insiste et atteint celui qui est pressé — c'est directionnel et prolongé. L'opiniâtre ne lâche pas."},
    {sense:'être opiniâtre',concept:'Insistance/Persistance',description:''},
    {sense:'pleuvoir sans cesse',concept:'Insistance/Persistance',description:''},
    {sense:'coller (paupières)',concept:'Adhérence',description:"État physique de deux surfaces qui restent jointes. L'adhérence est un contact permanent qui empêche la séparation."},
    {sense:'rester fixe en un lieu',concept:'Adhérence',description:''},
  ]);log(r,'lh')

  // 10. dhn (ذون → دهن) — oindre, huile, hypocrisie
  r=await ins('dhn',[
    {sense:'oindre',concept:'Onction/Enduction',description:"Acte extérieur d'appliquer un corps gras sur une surface pour l'adoucir ou la protéger. L'onction sort de celui qui oint et atteint ce qui est oint — c'est directionnel et laisse un effet durable. L'huile pénètre et transforme ce qu'elle touche."},
    {sense:'huile',concept:'Onction/Enduction',description:''},
    {sense:'graisser',concept:'Onction/Enduction',description:''},
    {sense:'flatter',concept:'Hypocrisie/Dissimulation',description:"Acte extérieur de montrer une surface lisse et agréable qui cache la vérité. L'hypocrisie est un enduisage moral — on couvre la réalité d'une couche de douceur trompeuse. C'est directionnel et calculé."},
    {sense:'dissimuler',concept:'Hypocrisie/Dissimulation',description:''},
    {sense:'pluie légère',concept:'Divers',description:'Pluie fine qui mouille à peine la surface — comme un léger enduit.'},
  ]);log(r,'dhn')

  console.log('\n=== Batch 146 terminé — '+done+'/2321 ===')
}
run().catch(e=>{console.error('ERR:',e);process.exit(1)})
