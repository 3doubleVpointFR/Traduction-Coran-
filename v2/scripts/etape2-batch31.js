const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 288, total = 2321

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

  // 289. eql (عقل) — raison, intelligence, lier
  r = await ins('eql', [
    {sense:'raison',concept:'Raison/Intelligence',description:"Faculté intérieure par laquelle l'homme distingue le vrai du faux et le bien du mal — la raison ('aql) est permanente comme capacité de l'âme. Elle lie les choses entre elles par des rapports logiques, d'où le lien avec 'lier'. La raison est ce qui retient l'homme de l'égarement comme le licol retient la bête. C'est un jugement qui précède l'action et la guide vers le juste."},
    {sense:'intelligence',concept:'Raison/Intelligence',description:''},
    {sense:'comprendre',concept:'Raison/Intelligence',description:''},
    {sense:'discernement',concept:'Raison/Intelligence',description:''},
    {sense:'lier',concept:'Lien/Entrave',description:"Acte de restreindre la liberté de mouvement — lier est directionnel de celui qui lie vers ce qui est lié. Le lien physique (corde) et le lien intellectuel (raisonnement) partagent l'idée de connexion qui maintient ensemble."},
    {sense:'entraver',concept:'Lien/Entrave',description:''},
  ])
  log(r,'eql',{'Raison/Intelligence':"Faculté intérieure de distinguer vrai et faux. Lie les choses par la logique. Retient de l'égarement.",'Lien/Entrave':"Restreindre par un lien. Connexion qui maintient ensemble."})

  // 290. ata (أتى) — venir, apporter
  r = await ins('ata', [
    {sense:'venir',concept:'Venue/Arrivée',description:"Acte de se déplacer vers un lieu ou une personne — venir est directionnel d'un point de départ vers une destination. C'est ponctuel dans l'arrivée mais le mouvement a une durée. Celui qui vient était absent et devient présent. Dieu fait venir Ses signes, Ses messagers, Son châtiment ou Sa miséricorde vers les hommes."},
    {sense:'arriver',concept:'Venue/Arrivée',description:''},
    {sense:'apporter',concept:'Venue/Arrivée',description:''},
    {sense:'accomplir',concept:'Action/Accomplissement',description:"Acte de faire ce qui doit être fait — accomplir est directionnel vers l'acte réalisé. C'est ponctuel dans la réalisation. Accomplir la prière, accomplir les rites."},
    {sense:'faire',concept:'Action/Accomplissement',description:''},
  ])
  log(r,'ata',{'Venue/Arrivée':"Se déplacer vers un lieu. Directionnel vers la destination. L'absent devient présent.",'Action/Accomplissement':"Faire ce qui doit être fait. Directionnel vers l'acte réalisé."})

  // 291. frq (فرق) — séparer, distinguer
  r = await ins('frq', [
    {sense:'séparer',concept:'Séparation/Distinction',description:"Acte de mettre à part ce qui était uni — la séparation est directionnelle, elle éloigne les parties l'une de l'autre. C'est ponctuel dans l'acte mais crée un état permanent de séparation. Le Furqân (Coran) est ce qui sépare le vrai du faux, la lumière des ténèbres. Séparer c'est créer de la clarté là où il y avait confusion."},
    {sense:'distinguer',concept:'Séparation/Distinction',description:''},
    {sense:'diviser',concept:'Séparation/Distinction',description:''},
    {sense:'Furqân',concept:'Séparation/Distinction',description:''},
    {sense:'groupe',concept:'Groupe/Partie',description:"Ensemble de personnes séparées du reste — le groupe (firqa) est une partie qui s'est distinguée de l'ensemble. C'est permanent comme identité collective."},
    {sense:'partie',concept:'Groupe/Partie',description:''},
  ])
  log(r,'frq',{'Séparation/Distinction':"Mettre à part ce qui était uni. Crée la clarté. Le Furqân sépare le vrai du faux.",'Groupe/Partie':"Ensemble distingué du reste. Identité collective permanente."})

  // 292. kwm (قوم) — peuple, se lever
  r = await ins('kwm', [
    {sense:'peuple',concept:'Communauté/Peuple',description:"Ensemble de personnes liées par une origine, une langue ou une destinée commune — le peuple (qawm) est permanent comme entité collective qui traverse le temps. C'est une réalité sociale qui dépasse les individus. Chaque peuple a reçu un messager dans sa langue. Le peuple est responsable collectivement de sa réponse à l'appel divin."},
    {sense:'tribu',concept:'Communauté/Peuple',description:''},
    {sense:'nation',concept:'Communauté/Peuple',description:''},
    {sense:'se lever',concept:'Lever/Station',description:"Acte de passer de la position assise ou couchée à la position debout — se lever est directionnel vers le haut. C'est ponctuel mais peut créer un état de station (qiyâm). Se lever pour prier, se lever pour agir. Le Jour de la Résurrection est le Jour où tous se lèveront."},
    {sense:'station debout',concept:'Lever/Station',description:''},
    {sense:'résurrection',concept:'Lever/Station',description:''},
  ])
  log(r,'kwm',{'Communauté/Peuple':"Ensemble lié par origine commune. Permanent comme entité collective. Responsable de sa réponse à l'appel.",'Lever/Station':"Passer à la position debout. Directionnel vers le haut. La Résurrection est le grand lever."})

  // 293. bhr (بحر) — mer
  r = await ins('bhr', [
    {sense:'mer',concept:'Mer/Étendue',description:"Grande étendue d'eau salée qui couvre une part immense de la terre — la mer est permanente et vaste, elle représente l'immensité et l'inconnu. Elle est extérieure et objective, source de vie (poissons, commerce) et de danger (noyade, tempête). La mer obéit à Dieu qui l'a fendue pour Moïse. Elle symbolise l'infini que l'homme ne peut épuiser."},
    {sense:'océan',concept:'Mer/Étendue',description:''},
    {sense:'fleuve',concept:'Mer/Étendue',description:''},
    {sense:'vaste',concept:'Mer/Étendue',description:''},
  ])
  log(r,'bhr',{'Mer/Étendue':"Grande étendue d'eau. Permanente et vaste. Source de vie et de danger. Symbole de l'infini."})

  // 294. njw (نجو) — sauver, échapper, confidence
  r = await ins('njw', [
    {sense:'sauver',concept:'Salut/Délivrance',description:"Acte de faire échapper quelqu'un à un danger ou à la perdition — sauver est directionnel de celui qui sauve vers celui qui est sauvé, et du danger vers la sécurité. C'est ponctuel dans l'acte mais définitif dans l'effet. Dieu sauve qui Il veut du châtiment, de la noyade, de l'égarement. Le salut est la délivrance ultime."},
    {sense:'délivrer',concept:'Salut/Délivrance',description:''},
    {sense:'échapper',concept:'Salut/Délivrance',description:''},
    {sense:'rescapé',concept:'Salut/Délivrance',description:''},
    {sense:'confidence',concept:'Secret/Aparté',description:"Parole échangée en secret entre quelques personnes — la confidence (najwâ) est directionnelle vers celui à qui on se confie, à l'exclusion des autres. C'est ponctuel mais crée une complicité."},
    {sense:'conversation secrète',concept:'Secret/Aparté',description:''},
  ])
  log(r,'njw',{'Salut/Délivrance':"Faire échapper au danger. Directionnel vers la sécurité. Ponctuel mais définitif.",'Secret/Aparté':"Parole échangée à l'exclusion des autres. Crée une complicité."})

  // 295. ghrq (غرق) — se noyer
  r = await ins('ghrq', [
    {sense:'se noyer',concept:'Noyade/Submersion',description:"Acte de périr submergé par l'eau sans pouvoir respirer — la noyade est le passage de la vie à la mort par l'eau. C'est ponctuel et irréversible. L'eau qui donne la vie peut aussi la reprendre. Pharaon s'est noyé quand la mer s'est refermée : l'arrogant a été englouti par ce qu'il méprisait. La noyade est l'image de la perdition totale."},
    {sense:'noyer',concept:'Noyade/Submersion',description:''},
    {sense:'submerger',concept:'Noyade/Submersion',description:''},
    {sense:'engloutir',concept:'Noyade/Submersion',description:''},
  ])
  log(r,'ghrq',{'Noyade/Submersion':"Périr submergé par l'eau. Ponctuel et irréversible. Image de la perdition totale."})

  // 296. al (آل) — famille, clan
  r = await ins('al', [
    {sense:'famille',concept:'Famille/Lignée',description:"Ensemble des personnes liées par le sang ou l'appartenance à une maison — la famille (âl) est permanente comme structure de transmission. Elle inclut les ancêtres et les descendants. Âl Ibrâhîm, Âl 'Imrân désignent les lignées spirituelles autant que charnelles. La famille est le premier cercle d'appartenance et de responsabilité."},
    {sense:'clan',concept:'Famille/Lignée',description:''},
    {sense:'lignée',concept:'Famille/Lignée',description:''},
    {sense:'maison',concept:'Famille/Lignée',description:''},
  ])
  log(r,'al',{'Famille/Lignée':"Ensemble lié par le sang. Permanent comme structure de transmission. Premier cercle d'appartenance."})

  // 297. fre (فرع) — Pharaon, branche
  r = await ins('fre', [
    {sense:'Pharaon',concept:'Tyrannie/Oppression',description:"Titre du roi d'Égypte, devenu symbole du tyran qui se prend pour dieu — Pharaon représente l'arrogance suprême de celui qui refuse de reconnaître une autorité au-dessus de lui. C'est permanent comme archétype du tyran. Pharaon a dit 'Je suis votre seigneur suprême' et a été englouti. Son sort est un avertissement pour tout orgueilleux."},
    {sense:'tyran',concept:'Tyrannie/Oppression',description:''},
    {sense:'branche',concept:'Ramification',description:"Partie qui se sépare du tronc principal — la branche est permanente comme structure de l'arbre. Elle s'étend vers l'extérieur et vers le haut. Par extension, les ramifications d'une affaire, les branches d'un savoir."},
  ])
  log(r,'fre',{'Tyrannie/Oppression':"Archétype du tyran qui se prend pour dieu. Arrogance suprême. Son sort est un avertissement.",'Ramification':"Partie qui s'étend du tronc. Structure permanente de croissance."})

  // 298. nzr (نظر) — regarder, contempler
  r = await ins('nzr', [
    {sense:'regarder',concept:'Regard/Contemplation',description:"Acte de diriger les yeux et l'attention vers quelque chose pour le percevoir — le regard est directionnel du voyant vers le vu. C'est ponctuel dans chaque acte mais peut devenir contemplation soutenue. Le regard peut être physique (voir avec les yeux) ou intellectuel (considérer, examiner). Regarder les signes de Dieu dans la création c'est cheminer vers la connaissance de Lui."},
    {sense:'voir',concept:'Regard/Contemplation',description:''},
    {sense:'contempler',concept:'Regard/Contemplation',description:''},
    {sense:'considérer',concept:'Regard/Contemplation',description:''},
    {sense:'attendre',concept:'Attente',description:"Acte de demeurer dans l'expectative de quelque chose qui doit venir — attendre est directionnel vers l'avenir. C'est un état qui dure jusqu'à l'arrivée de ce qui est attendu."},
    {sense:'délai',concept:'Attente',description:''},
  ])
  log(r,'nzr',{'Regard/Contemplation':"Diriger l'attention vers quelque chose. Physique ou intellectuel. Chemin vers la connaissance.",'Attente':"Demeurer dans l'expectative. Directionnel vers l'avenir."})

  console.log('\n=== Batch 31 terminé — ' + done + '/2321 ===')
}
run().catch(e => { console.error('ERREUR:', e); process.exit(1) })
