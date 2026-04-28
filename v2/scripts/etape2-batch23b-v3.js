const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 212, total = 2321

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

  // 213. xlf (خلف) — être derrière, succéder, remplacer
  r = await ins('xlf', [
    {sense:'être derrière',concept:'Position/Arrière',description:"État spatial de ce qui vient après dans l'espace ou le temps. L'arrière est la position opposée à l'avant — c'est permanent tant qu'on ne bouge pas. Être derrière c'est être dans le sillage, dans l'ombre, dans la suite de ce qui précède. C'est un état relationnel : on est toujours derrière quelque chose."},
    {sense:'laisser derrière',concept:'Position/Arrière',description:''},
    {sense:'succéder',concept:'Succession/Remplacement',description:"Acte de venir après quelqu'un dans le temps ou la fonction. La succession sort de celui qui succède et atteint la position de celui qui était avant — c'est directionnel et temporel. C'est ponctuel dans le moment de succession mais crée un état permanent de successeur. Le calife est celui qui succède."},
    {sense:'remplacer',concept:'Succession/Remplacement',description:''},
    {sense:'successeur',concept:'Succession/Remplacement',description:''},
    {sense:'califat',concept:'Succession/Remplacement',description:''},
    {sense:'différer',concept:'Différence/Opposition',description:"État de ne pas être semblable ou conforme. Différer c'est être autre — c'est un jugement rationnel de comparaison qui constate l'écart. La différence est permanente tant que les choses ne changent pas. Différer de sa promesse c'est ne pas la tenir."},
    {sense:'contredire',concept:'Différence/Opposition',description:''},
    {sense:'manquer à sa promesse',concept:'Différence/Opposition',description:''},
  ])
  log(r,'xlf',{'Position/Arrière':"État spatial permanent de ce qui vient après. Relationnel — on est derrière quelque chose. Dans le sillage, dans la suite.",'Succession/Remplacement':"Acte directionnel de venir après quelqu'un. Ponctuel mais crée un état permanent. Le calife succède.",'Différence/Opposition':"État de ne pas être conforme. Jugement rationnel de comparaison. L'écart entre ce qui devait être et ce qui est."})

  // 214. man (من) — qui, de, parmi
  r = await ins('man', [
    {sense:'qui',concept:'Interrogation/Identité',description:"Pronom interrogatif qui cherche l'identité d'une personne. La question sort du questionneur vers l'inconnu — c'est directionnel et ponctuel. Le qui demande le nom, le visage, l'être particulier derrière l'anonymat. C'est un acte rationnel de reconnaissance."},
    {sense:'celui qui',concept:'Relatif',description:"Pronom relatif qui désigne une personne par sa qualité ou son action. Celui qui établit un lien définitoire entre un être et ce qui le caractérise. C'est un état permanent de la relation grammaticale qui identifie de qui on parle."},
    {sense:'de',concept:'Origine/Provenance',description:"Préposition qui indique le point de départ spatial, temporel ou causal. Le de marque l'origine — d'où vient quelque chose, de quoi est fait quelque chose. C'est directionnel vers l'arrière, vers la source. Connaître l'origine c'est connaître la nature."},
    {sense:'parmi',concept:'Partie/Extraction',description:"Préposition partitive qui extrait un élément d'un ensemble. Parmi indique qu'on prend dans un tout — c'est directionnel du groupe vers l'individu. C'est ponctuel dans l'extraction mais définit une appartenance au groupe d'origine."},
    {sense:'quelqu\'un',concept:'Indéfini',description:"Pronom indéfini qui désigne une personne sans la nommer. Quelqu'un est l'identité en suspens — la personne existe mais son visage reste caché. C'est un état d'indétermination qui attend d'être levé par la connaissance."},
  ])
  log(r,'man',{'Interrogation/Identité':"Question directionnelle vers l'inconnu. Cherche le nom, le visage. Acte rationnel de reconnaissance.",'Relatif':"Lien définitoire permanent entre un être et sa qualité. Identifie de qui on parle.",'Origine/Provenance':"Direction vers la source. Connaître l'origine c'est connaître la nature.",'Partie/Extraction':"Mouvement du groupe vers l'individu. Appartenance au tout.",'Indéfini':"Identité en suspens. Existe mais reste anonyme."})

  // 215. sfk (سفك) — verser, répandre (sang)
  r = await ins('sfk', [
    {sense:'verser',concept:'Écoulement/Effusion',description:"Acte de faire couler un liquide hors de son contenant. Verser est un mouvement directionnel du haut vers le bas, de l'intérieur vers l'extérieur — il sort de celui qui verse et fait passer le liquide d'un état contenu à un état répandu. C'est ponctuel dans l'acte mais le résultat demeure."},
    {sense:'répandre',concept:'Écoulement/Effusion',description:''},
    {sense:'faire couler le sang',concept:'Violence/Sang',description:"Acte de blesser jusqu'à l'effusion du liquide vital. Faire couler le sang sort de l'agresseur et atteint la victime dans sa chair — c'est directionnel et violent. Le sang qui coule est le signe de la vie atteinte, de l'intégrité rompue. C'est un acte ponctuel aux conséquences graves."},
    {sense:'effusion de sang',concept:'Violence/Sang',description:''},
    {sense:'éloquence',concept:'Divers',description:"Sens métaphorique : la parole qui coule abondamment comme le sang jaillit. L'éloquent verse ses mots avec force et fluidité."},
  ])
  log(r,'sfk',{'Écoulement/Effusion':"Mouvement directionnel du dedans vers le dehors. Faire passer de contenu à répandu. Ponctuel dans l'acte.",'Violence/Sang':"Acte directionnel de l'agresseur vers la victime. Le sang qui coule marque la vie atteinte.",'Divers':"Sens métaphorique isolé."})

  // 216. dmw (دمو → دم) — sang, parenté
  r = await ins('dmw', [
    {sense:'sang',concept:'Sang/Vie',description:"Liquide vital qui circule dans le corps et porte la vie. Le sang est intérieur tant qu'il reste dans le corps — il devient signe de mort ou de blessure quand il sort. C'est permanent comme substance vitale. Le sang porte la vie, transmet la lignée, symbolise le sacrifice. Verser le sang c'est toucher à la vie même."},
    {sense:'saigner',concept:'Sang/Vie',description:''},
    {sense:'ensanglanté',concept:'Sang/Vie',description:''},
    {sense:'parenté par le sang',concept:'Parenté/Lignée',description:"Lien familial qui unit ceux qui partagent le même sang, la même origine. La parenté par le sang est permanente et indéfectible — on ne choisit pas ses parents, on ne peut défaire ce lien. C'est un état d'appartenance à une chaîne de générations, un jugement rationnel sur l'origine commune."},
    {sense:'prix du sang',concept:'Compensation',description:"Ce qui est dû pour compenser le sang versé. Le prix du sang va du meurtrier vers la famille de la victime — c'est directionnel et obligatoire. La vie a un prix, et ce prix est exigé quand elle est ôtée injustement. C'est la justice du sang."},
  ])
  log(r,'dmw',{'Sang/Vie':"Liquide vital intérieur qui porte la vie. Permanent comme substance. Devient signe de mort quand il sort.",'Parenté/Lignée':"Lien permanent et indéfectible par l'origine commune. On ne choisit pas son sang.",'Compensation':"Direction du coupable vers la victime. Le prix à payer pour le sang versé."})

  // 217. sbh (سبح) — nager, glorifier, flotter
  r = await ins('sbh', [
    {sense:'nager',concept:'Mouvement/Flottement',description:"Acte de se déplacer dans un milieu fluide (eau ou air) par ses propres mouvements. Nager est directionnel — le nageur avance dans un élément qui le porte et le résiste à la fois. C'est un mouvement continu et fluide. Le nageur évolue entre deux mondes, ni englouti ni émergé. Les astres nagent dans le ciel."},
    {sense:'flotter',concept:'Mouvement/Flottement',description:''},
    {sense:'voyager rapidement',concept:'Mouvement/Flottement',description:''},
    {sense:'glorifier',concept:'Glorification/Louange',description:"Acte de proclamer la transcendance et la perfection de Dieu. La glorification sort de celui qui glorifie et monte vers Dieu — c'est directionnel vers le haut. C'est un mouvement de l'âme qui reconnaît que Dieu est au-dessus de tout défaut. Subhan Allah : Dieu est exempt de toute imperfection."},
    {sense:'louer',concept:'Glorification/Louange',description:''},
    {sense:'prier',concept:'Glorification/Louange',description:''},
    {sense:'subhana',concept:'Glorification/Louange',description:''},
  ])
  log(r,'sbh',{'Mouvement/Flottement':"Déplacement fluide dans un milieu porteur. Directionnel et continu. Entre deux mondes, ni englouti ni émergé.",'Glorification/Louange':"Acte directionnel vers le haut qui proclame la transcendance divine. L'âme reconnaît Dieu au-dessus de tout défaut."})

  console.log('\n=== Batch 23b v3 terminé — ' + done + '/2321 ===')
}
run().catch(e => { console.error('ERREUR:', e); process.exit(1) })
