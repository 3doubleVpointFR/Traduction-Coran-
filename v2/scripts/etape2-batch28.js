const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 258, total = 2321

async function ins(key, senses) {
  const {data: wa} = await db.from('word_analyses').select('id').eq('word_key', key).limit(1)
  if (!wa || !wa[0]) { console.log('[SKIP] '+key+' — non trouvé'); return null }
  const {count} = await db.from('word_meanings').select('*',{count:'exact',head:true}).eq('analysis_id', wa[0].id).not('concept','is',null)
  if (count > 0) { console.log('[SKIP] '+key+' — déjà fait'); return null }
  const {error} = await db.from('word_meanings').insert(senses.map((s,i) => ({...s, analysis_id: wa[0].id, meaning_type:'etymology', display_order:i+1})))
  if (error) { console.log('ERR '+key+': '+error.message); return null }
  return {total: senses.length, concepts: [...new Set(senses.map(s => s.concept))]}
}
function log(r, key, conceptDescs) {
  if(r) {
    done++
    console.log('\n══════════════════════════════════════════════════════════════')
    console.log('['+done+'/'+total+'] '+key+' — '+r.total+' sens → '+r.concepts.length+' concepts — reste '+(total-done))
    console.log('──────────────────────────────────────────────────────────────')
    for (const [concept, desc] of Object.entries(conceptDescs)) {
      console.log('▸ '+concept)
      console.log('  '+desc)
    }
  }
}

async function run() {
  let r

  // 259. ktm (كتم) — cacher, taire
  r = await ins('ktm', [
    {sense:'cacher',concept:'Dissimulation/Secret',description:"Acte de soustraire quelque chose à la connaissance d'autrui — cacher est directionnel, on cache quelque chose à quelqu'un. C'est un acte volontaire qui maintient dans l'ignorance celui à qui on cache. Cacher la vérité est un péché quand la vérité devait être dite. Le secret peut être légitime (protéger) ou illégitime (tromper)."},
    {sense:'taire',concept:'Dissimulation/Secret',description:''},
    {sense:'dissimuler',concept:'Dissimulation/Secret',description:''},
    {sense:'garder secret',concept:'Dissimulation/Secret',description:''},
  ])
  log(r,'ktm',{'Dissimulation/Secret':"Soustraire à la connaissance d'autrui. Directionnel. Maintenir dans l'ignorance. Peut être légitime ou non."})

  // 260. shyn — Satan (variante)
  r = await ins('shyn', [
    {sense:'Satan',concept:'Diable/Ennemi',description:"L'adversaire qui s'oppose à Dieu et égare les hommes — Satan est permanent dans son hostilité et sa rébellion. Son action est directionnelle vers les hommes pour les détourner du droit chemin. Il est l'ennemi déclaré depuis qu'il a refusé de se prosterner."},
    {sense:'diable',concept:'Diable/Ennemi',description:''},
  ])
  log(r,'shyn',{'Diable/Ennemi':"Adversaire permanent en rébellion. Action directionnelle vers les hommes pour les égarer."})

  // 261. lmm (لمم) — rassembler, péché léger
  r = await ins('lmm', [
    {sense:'rassembler',concept:'Rassemblement/Collection',description:"Acte de réunir ce qui était dispersé en un même lieu ou ensemble — rassembler est directionnel de la périphérie vers le centre. C'est ponctuel dans l'acte mais crée un état de réunion. Rassembler les hommes, rassembler les pensées, rassembler les forces."},
    {sense:'collecter',concept:'Rassemblement/Collection',description:''},
    {sense:'péché léger',concept:'Faute/Péché',description:"Faute mineure qui n'atteint pas la gravité des grands péchés — le péché léger est ponctuel et pardonnable par l'évitement des grands péchés. C'est une déviation légère qui n'engage pas l'âme dans la perdition."},
  ])
  log(r,'lmm',{'Rassemblement/Collection':"Réunir ce qui était dispersé. Du dispersé vers l'ensemble.",'Faute/Péché':"Faute mineure pardonnable. Déviation légère."})

  // 262. kdb (كذب) — mentir
  r = await ins('kdb', [
    {sense:'mentir',concept:'Mensonge/Fausseté',description:"Acte de dire ce que l'on sait être faux — le mensonge sort du menteur et atteint celui qui est trompé. C'est directionnel et intentionnel : on ment sciemment. Le mensonge est l'opposé de la vérité, il déforme la réalité par la parole. Mentir à Dieu ou sur Dieu est parmi les pires fautes."},
    {sense:'mensonge',concept:'Mensonge/Fausseté',description:''},
    {sense:'nier',concept:'Mensonge/Fausseté',description:''},
    {sense:'démentir',concept:'Mensonge/Fausseté',description:''},
    {sense:'traiter de menteur',concept:'Accusation',description:"Acte d'accuser quelqu'un de mentir — l'accusation est directionnelle vers celui qu'on accuse. Les prophètes ont été traités de menteurs par leurs peuples. Accuser de mensonge celui qui dit vrai est une grave injustice."},
  ])
  log(r,'kdb',{'Mensonge/Fausseté':"Dire ce qu'on sait être faux. Directionnel et intentionnel. Opposé de la vérité.",'Accusation':"Accuser de mentir. Directionnel vers l'accusé."})

  // 263. ayt (آية) — signe, verset
  r = await ins('ayt', [
    {sense:'signe',concept:'Signe/Preuve',description:"Ce qui montre ou indique autre chose que soi — le signe est permanent comme réalité signifiante et directionnel vers ce qu'il signifie. Les signes de Dieu dans la création pointent vers le Créateur. Le signe demande à être lu, interprété, compris. Ne pas voir les signes c'est être aveugle du cœur."},
    {sense:'miracle',concept:'Signe/Preuve',description:''},
    {sense:'preuve',concept:'Signe/Preuve',description:''},
    {sense:'verset',concept:'Révélation/Parole',description:"Unité de sens dans le texte révélé — le verset est un signe verbal qui porte un message divin. C'est permanent comme texte sacré. Chaque verset est une parole de Dieu adressée aux hommes, à méditer et à suivre."},
  ])
  log(r,'ayt',{'Signe/Preuve':"Ce qui montre autre chose que soi. Permanent et directionnel. Demande à être lu.",'Révélation/Parole':"Unité de sens du texte révélé. Parole divine permanente."})

  // 264. shb (صحب) — accompagner
  r = await ins('shb', [
    {sense:'accompagner',concept:'Compagnonnage/Association',description:"Acte de cheminer avec quelqu'un, d'être avec lui dans son parcours — accompagner est directionnel (on accompagne quelqu'un vers quelque part) et implique présence et durée. Le compagnon partage le chemin, les épreuves et les joies. Les Compagnons du Prophète sont ceux qui l'ont accompagné."},
    {sense:'compagnon',concept:'Compagnonnage/Association',description:''},
    {sense:'associé',concept:'Compagnonnage/Association',description:''},
    {sense:'ami',concept:'Compagnonnage/Association',description:''},
  ])
  log(r,'shb',{'Compagnonnage/Association':"Cheminer avec quelqu'un. Directionnel et durable. Partager le chemin."})

  // 265. hum (هم) — eux
  r = await ins('hum', [
    {sense:'eux',concept:'Pronom/Référence',description:"Pronom personnel de troisième personne du pluriel masculin — eux désigne un groupe dont on parle sans s'y adresser. C'est une référence permanente dans l'énoncé à des personnes absentes de l'échange direct. Eux s'oppose à nous (le groupe qui parle) et à vous (le groupe auquel on parle)."},
    {sense:'ils',concept:'Pronom/Référence',description:''},
    {sense:'leur',concept:'Pronom/Référence',description:''},
  ])
  log(r,'hum',{'Pronom/Référence':"Désigne un groupe dont on parle. Référence à l'absent de l'échange."})

  // 266. klm (كلم) — parler, blesser
  r = await ins('klm', [
    {sense:'parler',concept:'Parole/Discours',description:"Acte d'exprimer sa pensée par des mots — parler est directionnel, la parole sort du locuteur vers l'auditeur. C'est ponctuel dans chaque énoncé mais permanent comme capacité. La parole distingue l'homme, elle transmet le sens, elle peut guérir ou blesser. Dieu a parlé à Moïse directement."},
    {sense:'parole',concept:'Parole/Discours',description:''},
    {sense:'mot',concept:'Parole/Discours',description:''},
    {sense:'blesser',concept:'Blessure',description:"Acte de causer une plaie physique ou morale — blesser est directionnel de l'agent vers la victime. C'est ponctuel mais peut laisser une trace durable. La parole peut blesser comme une arme."},
    {sense:'blessure',concept:'Blessure',description:''},
  ])
  log(r,'klm',{'Parole/Discours':"Exprimer sa pensée par des mots. Directionnel vers l'auditeur. Peut guérir ou blesser.",'Blessure':"Causer une plaie. Directionnel vers la victime. Ponctuel mais peut marquer."})

  // 267. nwy (نوى) — avoir l'intention, noyau
  r = await ins('nwy', [
    {sense:'avoir l\'intention',concept:'Intention/But',description:"Acte intérieur de se proposer un but avant d'agir — l'intention précède l'action et lui donne son sens moral. C'est ponctuel dans la formation mais oriente tout ce qui suit. L'intention est le noyau de l'acte, ce qui est au centre et qui détermine la valeur. Les actes valent par les intentions."},
    {sense:'se proposer',concept:'Intention/But',description:''},
    {sense:'noyau',concept:'Centre/Essence',description:"Le cœur dur d'un fruit qui contient la graine — le noyau est permanent et central, c'est ce qui reste quand on a enlevé la chair. Par extension, le noyau est l'essentiel, ce autour de quoi tout s'organise. L'intention est le noyau de l'acte."},
    {sense:'datte',concept:'Divers',description:"Fruit du palmier dont le noyau est typique."},
  ])
  log(r,'nwy',{'Intention/But':"Acte intérieur qui précède et donne sens à l'action. Les actes valent par les intentions.",'Centre/Essence':"Le cœur permanent autour duquel tout s'organise.",'Divers':"Sens concret."})

  // 268. tbae (تبع) — suivre
  r = await ins('tbae', [
    {sense:'suivre',concept:'Suite/Succession',description:"Acte de venir après quelqu'un ou quelque chose et d'aller dans la même direction — suivre est directionnel, on suit quelqu'un vers où il va. C'est permanent tant qu'on continue de suivre. Suivre peut être spatial (marcher derrière), temporel (venir après) ou moral (obéir, imiter). Suivre le Prophète c'est prendre son exemple comme guide."},
    {sense:'poursuivre',concept:'Suite/Succession',description:''},
    {sense:'successeur',concept:'Suite/Succession',description:''},
    {sense:'partisan',concept:'Suite/Succession',description:''},
    {sense:'conséquence',concept:'Résultat/Effet',description:"Ce qui suit comme effet d'une cause — la conséquence vient après l'acte et en découle. C'est directionnel de la cause vers l'effet. Chaque acte a ses conséquences qui le suivent."},
  ])
  log(r,'tbae',{'Suite/Succession':"Venir après et aller dans la même direction. Directionnel. Suivre un guide.",'Résultat/Effet':"Ce qui découle comme effet de la cause."})

  console.log('\n=== Batch 28 terminé — ' + done + '/2321 ===')
}
run().catch(e => { console.error('ERREUR:', e); process.exit(1) })
