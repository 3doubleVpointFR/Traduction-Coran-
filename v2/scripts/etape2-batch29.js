const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 268, total = 2321

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

  // 269. khw f (خوف) — craindre, peur
  r = await ins('khw f', [
    {sense:'craindre',concept:'Crainte/Peur',description:"État intérieur de l'âme qui anticipe un mal possible et s'en affecte — la crainte est une émotion qui naît face à ce qui menace. Elle est directionnelle : on craint quelque chose ou quelqu'un qui pourrait nous atteindre. C'est un état permanent comme disposition ou ponctuel comme réaction. La crainte de Dieu (taqwa) est différente : c'est un mélange de respect, d'amour et de conscience de Sa grandeur qui préserve du mal."},
    {sense:'peur',concept:'Crainte/Peur',description:''},
    {sense:'avoir peur',concept:'Crainte/Peur',description:''},
    {sense:'effrayer',concept:'Crainte/Peur',description:''},
    {sense:'danger',concept:'Menace/Danger',description:"Ce qui peut causer du tort si on s'en approche ou s'il nous atteint — le danger est extérieur et objectif, c'est une réalité qui menace indépendamment de notre perception. La crainte est la réponse subjective au danger perçu."},
  ])
  log(r,'khw f',{'Crainte/Peur':"État intérieur anticipant un mal. Directionnel vers ce qui menace. La crainte de Dieu est respect mêlé d'amour.",'Menace/Danger':"Réalité extérieure objective qui peut nuire."})

  // 270. hzn (حزن) — tristesse, chagrin
  r = await ins('hzn', [
    {sense:'être triste',concept:'Tristesse/Affliction',description:"État intérieur de l'âme qui souffre d'une perte ou d'un manque — la tristesse est une émotion passive qui envahit celui qui l'éprouve. Elle peut être ponctuelle (réaction à un événement) ou permanente (mélancolie). C'est un état qui intériorise la douleur, contrairement à la colère qui l'extériorise. Le chagrin légitime est accepté, mais le désespoir qui nie la miséricorde divine est blâmé."},
    {sense:'tristesse',concept:'Tristesse/Affliction',description:''},
    {sense:'chagrin',concept:'Tristesse/Affliction',description:''},
    {sense:'affliger',concept:'Tristesse/Affliction',description:''},
    {sense:'attrister',concept:'Tristesse/Affliction',description:''},
  ])
  log(r,'hzn',{'Tristesse/Affliction':"État intérieur passif de souffrance face à la perte. Ponctuel ou permanent. Intériorise la douleur."})

  // 271. isr (إسر) — lier, capturer, prisonnier
  r = await ins('isr', [
    {sense:'lier',concept:'Lien/Captivité',description:"Acte de restreindre la liberté de mouvement par une attache — lier est directionnel de celui qui lie vers celui qui est lié. C'est ponctuel dans l'acte mais crée un état permanent de captivité. Le lien peut être physique (chaîne) ou moral (engagement). Le prisonnier est celui dont la liberté a été ôtée par un autre."},
    {sense:'enchaîner',concept:'Lien/Captivité',description:''},
    {sense:'capturer',concept:'Lien/Captivité',description:''},
    {sense:'prisonnier',concept:'Lien/Captivité',description:''},
    {sense:'captif',concept:'Lien/Captivité',description:''},
  ])
  log(r,'isr',{'Lien/Captivité':"Acte directionnel de restreindre la liberté. Ponctuel mais crée un état permanent. Physique ou moral."})

  // 272. dhkr (ذكر) — se souvenir, mentionner, mâle
  r = await ins('dhkr', [
    {sense:'se souvenir',concept:'Mémoire/Rappel',description:"Acte intérieur de ramener à la conscience ce qui était absent — le souvenir est un mouvement de l'âme qui va chercher dans le passé pour le rendre présent. C'est directionnel du présent vers le passé. Le dhikr (rappel de Dieu) est l'acte de maintenir Dieu présent à la conscience, c'est la vie du cœur. L'oubli de Dieu est la mort spirituelle."},
    {sense:'rappeler',concept:'Mémoire/Rappel',description:''},
    {sense:'mentionner',concept:'Mémoire/Rappel',description:''},
    {sense:'mémoire',concept:'Mémoire/Rappel',description:''},
    {sense:'mâle',concept:'Masculin',description:"L'être de sexe masculin, celui qui engendre sans porter — le mâle est permanent dans sa nature. Dans la paire mâle/femelle, le mâle est le principe actif, la femelle le principe réceptif."},
  ])
  log(r,'dhkr',{'Mémoire/Rappel':"Ramener à la conscience ce qui était absent. Du présent vers le passé. Le dhikr maintient Dieu présent au cœur.",'Masculin':"Nature permanente du principe actif dans la paire."})

  // 273. lty (لتي) — celle qui (relatif féminin)
  r = await ins('lty', [
    {sense:'celle qui',concept:'Pronom relatif',description:"Pronom qui relie une proposition à un antécédent féminin — le relatif crée un lien grammatical permanent entre deux parties de l'énoncé. Il pointe vers ce qui a été mentionné et introduit une qualification. C'est un outil de la langue qui permet de construire des phrases complexes en subordonnant une idée à une autre."},
    {sense:'laquelle',concept:'Pronom relatif',description:''},
    {sense:'que',concept:'Pronom relatif',description:''},
  ])
  log(r,'lty',{'Pronom relatif':"Lien grammatical entre proposition et antécédent féminin. Introduit une qualification."})

  // 274. wfy (وفي) — être fidèle, accomplir pleinement
  r = await ins('wfy', [
    {sense:'être fidèle',concept:'Fidélité/Accomplissement',description:"État de celui qui tient ses engagements jusqu'au bout — la fidélité est permanente comme disposition du caractère. Elle est directionnelle vers celui envers qui on s'est engagé. Le wafa' est l'accomplissement complet de ce qui est dû : on donne la pleine mesure, on va jusqu'au terme. Dieu est le plus fidèle à Ses promesses."},
    {sense:'accomplir',concept:'Fidélité/Accomplissement',description:''},
    {sense:'tenir sa promesse',concept:'Fidélité/Accomplissement',description:''},
    {sense:'payer intégralement',concept:'Fidélité/Accomplissement',description:''},
    {sense:'mourir',concept:'Mort/Fin',description:"L'âme est reprise complètement — la mort est l'accomplissement du terme de la vie. C'est ponctuel et définitif. Dieu reprend les âmes à leur terme fixé."},
  ])
  log(r,'wfy',{'Fidélité/Accomplissement':"Tenir ses engagements jusqu'au bout. Directionnel vers celui à qui on doit. Donner la pleine mesure.",'Mort/Fin':"Accomplissement du terme. L'âme reprise complètement."})

  // 275. ywy (يوي) — abriter, se réfugier
  r = await ins('ywy', [
    {sense:'abriter',concept:'Refuge/Abri',description:"Acte de donner un lieu sûr à celui qui en a besoin — abriter est directionnel de celui qui offre l'abri vers celui qui le reçoit. C'est ponctuel dans l'acte mais peut créer un état permanent de protection. Le refuge est le lieu où l'on est à l'abri du danger, où l'on trouve sécurité et repos."},
    {sense:'se réfugier',concept:'Refuge/Abri',description:''},
    {sense:'recueillir',concept:'Refuge/Abri',description:''},
  ])
  log(r,'ywy',{'Refuge/Abri':"Donner un lieu sûr. Directionnel vers celui qui reçoit. Protection et repos."})

  // 276. rhb (رهب) — craindre, moine
  r = await ins('rhb', [
    {sense:'craindre',concept:'Crainte révérencielle',description:"État de l'âme saisie par la grandeur de ce qui la dépasse — cette crainte est plus proche de la terreur sacrée que de la peur ordinaire. Elle est directionnelle vers ce qui inspire le respect craintif. C'est un état qui peut devenir permanent chez celui qui vit dans la conscience du divin. La rahba est la crainte mêlée de respect devant la majesté."},
    {sense:'redouter',concept:'Crainte révérencielle',description:''},
    {sense:'être effrayé',concept:'Crainte révérencielle',description:''},
    {sense:'moine',concept:'Vie monastique',description:"Celui qui s'est retiré du monde par crainte de Dieu — le moine (rahib) est celui dont la crainte révérencielle l'a conduit à se consacrer entièrement à Dieu. C'est un état de vie permanent choisi par dévotion."},
    {sense:'monachisme',concept:'Vie monastique',description:''},
    {sense:'terroriser',concept:'Terreur',description:"Inspirer une peur intense — c'est directionnel et vise à paralyser l'autre par l'effroi. L'acte sort de celui qui terrorise et atteint celui qui est terrorisé."},
  ])
  log(r,'rhb',{'Crainte révérencielle':"Âme saisie par ce qui la dépasse. Terreur sacrée mêlée de respect. Conscience du divin.",'Vie monastique':"Retrait du monde par dévotion. État permanent de consécration.",'Terreur':"Inspirer l'effroi. Directionnel vers celui qu'on veut paralyser."})

  // 277. mek (معك) — frotter, mâcher
  r = await ins('mek', [
    {sense:'frotter',concept:'Friction/Mouvement',description:"Acte de passer une chose sur une autre avec pression — frotter est un mouvement répétitif qui use, nettoie ou mélange. C'est directionnel et physique, une action concrète sur la matière. La friction peut purifier (se frotter pour se laver) ou transformer (frotter pour broyer)."},
    {sense:'mâcher',concept:'Friction/Mouvement',description:''},
    {sense:'broyer',concept:'Friction/Mouvement',description:''},
  ])
  log(r,'mek',{'Friction/Mouvement':"Action répétitive de pression. Directionnel et physique. Peut purifier ou transformer."})

  // 278. ayat (آية) — signe (variante graphique)
  r = await ins('ayat', [
    {sense:'signe',concept:'Signe/Indication',description:"Ce qui montre autre chose que soi-même et appelle l'interprétation — le signe est permanent comme réalité signifiante. Il est directionnel vers ce qu'il signifie. Les signes de Dieu sont dans la création et dans la révélation. Celui qui a des yeux voit les signes ; celui qui est aveugle du cœur passe à côté. Le signe demande à être lu et compris."},
    {sense:'verset',concept:'Signe/Indication',description:''},
    {sense:'miracle',concept:'Signe/Indication',description:''},
    {sense:'preuve',concept:'Signe/Indication',description:''},
  ])
  log(r,'ayat',{'Signe/Indication':"Ce qui montre autre chose que soi. Permanent et directionnel. Demande interprétation."})

  console.log('\n=== Batch 29 terminé — ' + done + '/2321 ===')
}
run().catch(e => { console.error('ERREUR:', e); process.exit(1) })
