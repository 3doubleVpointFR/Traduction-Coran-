const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 328, total = 2321

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

  // 329. bra (برأ) — créer, être innocent
  r = await ins('bra', [
    {sense:'créer',concept:'Création/Origination',description:"Acte de faire exister ce qui n'existait pas — la création (bar') est directionnelle du Créateur vers la créature. C'est ponctuel dans l'acte mais permanent dans l'effet. Dieu est al-Bâri', Celui qui crée du néant, qui donne forme à ce qui n'avait pas de forme. Créer est l'acte souverain par excellence."},
    {sense:'façonner',concept:'Création/Origination',description:''},
    {sense:'être innocent',concept:'Innocence/Pureté',description:"État de celui qui est libre de toute faute ou accusation — l'innocent (barî') est pur de ce dont on l'accuse. C'est un état permanent qui peut être reconnu ou méconnu. Se désavouer (tabarru') c'est se déclarer innocent d'une association."},
    {sense:'se désavouer',concept:'Innocence/Pureté',description:''},
  ])
  log(r,'bra',{'Création/Origination':"Faire exister du néant. Directionnel du Créateur à la créature. Acte souverain.",'Innocence/Pureté':"Être libre de toute faute. État permanent. Se déclarer pur d'une association."})

  // 330. qtl (قتل) — tuer
  r = await ins('qtl', [
    {sense:'tuer',concept:'Meurtre/Combat',description:"Acte de faire cesser la vie d'un être — tuer est directionnel de celui qui tue vers celui qui est tué. C'est ponctuel et irréversible. Le meurtre de l'innocent est un crime majeur : tuer une âme sans droit c'est comme tuer l'humanité entière. Mais le combat (qitâl) pour la cause de Dieu peut être licite voire obligatoire."},
    {sense:'assassiner',concept:'Meurtre/Combat',description:''},
    {sense:'combattre',concept:'Meurtre/Combat',description:''},
    {sense:'meurtre',concept:'Meurtre/Combat',description:''},
    {sense:'combat',concept:'Meurtre/Combat',description:''},
  ])
  log(r,'qtl',{'Meurtre/Combat':"Faire cesser la vie. Directionnel vers la victime. Le meurtre innocent est crime majeur, le combat peut être licite."})

  // 331. ḫyr (خير) — bien, meilleur
  r = await ins('ḫyr', [
    {sense:'bien',concept:'Bien/Excellence',description:"Ce qui est bénéfique, ce qui correspond à la vraie nature des choses — le bien (khayr) est permanent comme réalité opposée au mal. C'est un jugement de valeur sur ce qui est conforme à l'ordre voulu par Dieu. Dieu est la source de tout bien. Le croyant recherche le bien et fuit le mal."},
    {sense:'meilleur',concept:'Bien/Excellence',description:''},
    {sense:'bon',concept:'Bien/Excellence',description:''},
    {sense:'choisir',concept:'Choix/Préférence',description:"Acte de préférer une chose à une autre — choisir est directionnel vers ce qu'on préfère. Dieu choisit qui Il veut pour Sa mission. Choisir le bien c'est exercer sa liberté dans le bon sens."},
    {sense:'préférer',concept:'Choix/Préférence',description:''},
  ])
  log(r,'ḫyr',{'Bien/Excellence':"Ce qui est bénéfique et conforme à l'ordre divin. Opposé au mal. Source en Dieu.",'Choix/Préférence':"Préférer une chose. Directionnel vers ce qu'on choisit. Dieu choisit qui Il veut."})

  // 332. hatta (حتى) — jusqu'à
  r = await ins('hatta', [
    {sense:'jusqu\'à',concept:'Limite/Terme',description:"Préposition qui indique le point final d'un mouvement ou d'un état — jusqu'à est directionnel vers le terme qu'on atteint. Il marque la fin d'une durée ou d'une extension spatiale. Jusqu'à implique que quelque chose continue puis s'arrête ou change à un moment précis."},
    {sense:'pour que',concept:'Limite/Terme',description:''},
    {sense:'afin que',concept:'Limite/Terme',description:''},
  ])
  log(r,'hatta',{'Limite/Terme':"Point final d'un mouvement. Directionnel vers le terme. Marque la fin ou le changement."})

  // 333. antum (أنتم) — vous
  r = await ins('antum', [
    {sense:'vous',concept:'Pronom personnel',description:"Pronom de la deuxième personne du pluriel masculin — vous désigne le groupe auquel on s'adresse. C'est relationnel et directionnel vers les interlocuteurs. Vous s'oppose à nous (le groupe qui parle) et à eux (le groupe dont on parle sans s'y adresser)."},
    {sense:'vous êtes',concept:'Pronom personnel',description:''},
  ])
  log(r,'antum',{'Pronom personnel':"Groupe auquel on s'adresse. Relationnel et directionnel vers les interlocuteurs."})

  // 334. ghmm (غمم) — chagriner, nuages
  r = await ins('ghmm', [
    {sense:'chagriner',concept:'Affliction/Couverture',description:"Acte de causer du souci ou de la tristesse — chagriner est directionnel vers celui qu'on attriste. Le chagrin (ghamm) couvre le cœur comme le nuage couvre le ciel. C'est une émotion qui envahit et obscurcit la joie."},
    {sense:'attrister',concept:'Affliction/Couverture',description:''},
    {sense:'souci',concept:'Affliction/Couverture',description:''},
    {sense:'nuages',concept:'Affliction/Couverture',description:''},
    {sense:'couvrir',concept:'Affliction/Couverture',description:''},
  ])
  log(r,'ghmm',{'Affliction/Couverture':"Causer du souci qui couvre le cœur. Comme le nuage qui couvre le ciel. Obscurcit la joie."})

  // 335. mnn (منن) — accorder une faveur, rappeler un bienfait
  r = await ins('mnn', [
    {sense:'accorder une faveur',concept:'Faveur/Rappel',description:"Acte de donner un bienfait par grâce — la faveur (minna) est directionnelle du bienfaiteur vers le bénéficiaire. C'est ponctuel mais peut être rappelé. Dieu accorde Ses faveurs à qui Il veut. Rappeler ses bienfaits aux autres (mann) peut être blâmable car cela diminue le don."},
    {sense:'bienfait',concept:'Faveur/Rappel',description:''},
    {sense:'gratifier',concept:'Faveur/Rappel',description:''},
    {sense:'rappeler un bienfait',concept:'Faveur/Rappel',description:''},
  ])
  log(r,'mnn',{'Faveur/Rappel':"Donner un bienfait par grâce. Directionnel vers le bénéficiaire. Rappeler ses dons peut être blâmable."})

  // 336. bdl (بدل) — changer, remplacer
  r = await ins('bdl', [
    {sense:'changer',concept:'Changement/Substitution',description:"Acte de mettre une chose à la place d'une autre — le changement (tabdîl) est directionnel de l'ancien vers le nouveau. C'est ponctuel dans l'acte mais crée un nouvel état. Dieu peut changer les mauvaises actions en bonnes pour celui qui se repent. Changer la parole de Dieu est impossible car elle est immuable."},
    {sense:'remplacer',concept:'Changement/Substitution',description:''},
    {sense:'substituer',concept:'Changement/Substitution',description:''},
    {sense:'échange',concept:'Changement/Substitution',description:''},
  ])
  log(r,'bdl',{'Changement/Substitution':"Mettre une chose à la place d'une autre. De l'ancien vers le nouveau. La parole divine est immuable."})

  // 337. klw (كلو) — tout, totalité
  r = await ins('klw', [
    {sense:'tout',concept:'Totalité/Universalité',description:"Ce qui englobe l'ensemble sans exception — le tout (kull) est permanent comme concept d'exhaustivité. C'est un jugement qui embrasse tous les éléments d'un ensemble. Tout homme goûtera la mort, toute âme retournera à Dieu. Le tout s'oppose à la partie."},
    {sense:'chaque',concept:'Totalité/Universalité',description:''},
    {sense:'totalité',concept:'Totalité/Universalité',description:''},
    {sense:'entier',concept:'Totalité/Universalité',description:''},
  ])
  log(r,'klw',{'Totalité/Universalité':"Englober l'ensemble sans exception. Jugement d'exhaustivité. S'oppose à la partie."})

  // 338. tyb (طيب) — être bon, pur
  r = await ins('tyb', [
    {sense:'être bon',concept:'Bonté/Pureté',description:"État de ce qui est agréable, pur et conforme à sa nature — le bon (tayyib) est permanent comme qualité intrinsèque. C'est un jugement de valeur sur ce qui est sain, licite et plaisant. Les bonnes choses (tayyibât) sont licites, les mauvaises sont interdites. La parole bonne est comme un arbre bon dont la racine est ferme et la ramure dans le ciel."},
    {sense:'pur',concept:'Bonté/Pureté',description:''},
    {sense:'licite',concept:'Bonté/Pureté',description:''},
    {sense:'agréable',concept:'Bonté/Pureté',description:''},
    {sense:'parfum',concept:'Bonté/Pureté',description:''},
  ])
  log(r,'tyb',{'Bonté/Pureté':"Ce qui est agréable, pur et licite. Qualité intrinsèque. La bonne parole comme l'arbre bon."})

  console.log('\n=== Batch 35 terminé — ' + done + '/2321 ===')
}
run().catch(e => { console.error('ERREUR:', e); process.exit(1) })
