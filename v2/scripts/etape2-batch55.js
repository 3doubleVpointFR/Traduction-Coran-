const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 515, total = 2321

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

  // Skip ma' et ns'
  r = await ins("ma'", [{sense:'eau',concept:'Élément',description:"Skip."}])
  r = await ins("ns'", [{sense:'femmes',concept:'Féminin',description:"Skip."}])

  // 518. alf (ألف) — mille, unir
  r = await ins('alf', [
    {sense:'mille',concept:'Nombre/Multitude',description:"Le nombre 1000, symbole d'une grande quantité — mille (alf) représente une multitude. C'est permanent comme valeur numérique. La nuit du Destin vaut mieux que mille mois. Un jour auprès de ton Seigneur est comme mille ans de ce que vous comptez. Le nombre exprime l'immensité relative."},
    {sense:'millier',concept:'Nombre/Multitude',description:''},
    {sense:'unir',concept:'Union/Réconciliation',description:"Rassembler ce qui était séparé — unir (allafa) c'est créer l'harmonie entre les parties. Dieu a uni vos cœurs et vous êtes devenus frères par Sa grâce."},
    {sense:'familier',concept:'Habitude',description:"Ce à quoi on est accoutumé — le familier (ma'lûf) est ce qu'on connaît bien par habitude."},
  ])
  log(r,'alf',{'Nombre/Multitude':"1000, grande quantité. La nuit du Destin vaut mieux que mille mois.",'Union/Réconciliation':"Créer l'harmonie. Dieu a uni vos cœurs.",'Habitude':"Ce qu'on connaît par habitude."})

  // 519. xwd (خوض) — patauger, discourir
  r = await ins('xwd', [
    {sense:'patauger',concept:'Immersion/Engagement superficiel',description:"Avancer dans l'eau peu profonde — patauger (khâda) est directionnel à travers le liquide. C'est l'image de celui qui s'engage dans quelque chose sans aller au fond. Ceux qui discourent (yakhûdûna) dans Nos versets, détourne-toi d'eux. Discourir vainement c'est patauger dans les mots sans en atteindre le sens profond."},
    {sense:'discourir vainement',concept:'Immersion/Engagement superficiel',description:''},
    {sense:'se lancer dans',concept:'Immersion/Engagement superficiel',description:''},
  ])
  log(r,'xwd',{'Immersion/Engagement superficiel':"S'engager sans profondeur. Discourir vainement. Patauger dans les mots."})

  // 520. ntm (نوت) — pousser, croître
  r = await ins('ntm', [
    {sense:'pousser',concept:'Croissance/Végétation',description:"Sortir de terre et grandir — pousser (nabata/yunbitu) est le mouvement de la graine vers la lumière. C'est directionnel de bas en haut. Nous avons fait pousser pour lui un arbre de courge. La croissance végétale est signe de la puissance divine qui fait jaillir la vie."},
    {sense:'faire croître',concept:'Croissance/Végétation',description:''},
    {sense:'végétation',concept:'Croissance/Végétation',description:''},
  ])
  log(r,'ntm',{'Croissance/Végétation':"Sortir de terre. Un arbre de courge pour Jonas. Signe de puissance."})

  // 521. ain (عين) — œil, source
  r = await ins('ain', [
    {sense:'œil',concept:'Vision/Perception',description:"Organe de la vue — l'œil ('ayn) est permanent comme partie du corps qui perçoit le monde visible. Les yeux sont les fenêtres de l'âme. L'œil voit mais c'est le cœur qui comprend. Sous Nos yeux signifie sous Notre regard protecteur."},
    {sense:'regard',concept:'Vision/Perception',description:''},
    {sense:'source',concept:'Eau jaillissante',description:"Point d'où jaillit l'eau — la source ('ayn) est l'origine de l'eau vive. Dans le Paradis, des sources coulent. L'eau de source est pure et vivifiante."},
    {sense:'essence',concept:'Identité',description:"La réalité même de quelque chose — l'essence ('ayn) est ce qu'une chose est en elle-même."},
  ])
  log(r,'ain',{'Vision/Perception':"Organe de la vue. L'œil voit, le cœur comprend. Sous Nos yeux.",'Eau jaillissante':"Point d'où jaillit l'eau. Sources du Paradis.",'Identité':"La réalité même. Ce qu'une chose est."})

  // 522. ghlw (غلو) — exagérer, excès
  r = await ins('ghlw', [
    {sense:'exagérer',concept:'Excès/Dépassement',description:"Dépasser la juste mesure — l'excès (ghuluww) est l'opposé de l'équilibre. C'est directionnel au-delà de la limite permise. N'exagérez pas dans votre religion ! L'excès en religion est interdit car il mène à l'égarement. Le juste milieu est la voie du Coran."},
    {sense:'excès',concept:'Excès/Dépassement',description:''},
    {sense:'outrepasser',concept:'Excès/Dépassement',description:''},
  ])
  log(r,'ghlw',{'Excès/Dépassement':"Dépasser la mesure. N'exagérez pas dans votre religion ! Le juste milieu."})

  // 523. s m w (سمو) — ciel, nom
  r = await ins('s m w', [
    {sense:'ciel',concept:'Hauteur/Élévation',description:"Ce qui est au-dessus de la terre — le ciel (samâ') est permanent comme voûte céleste. Il y a sept cieux superposés. Le ciel sans fissure témoigne de la perfection de la création. Lever les yeux vers le ciel c'est se tourner vers le Transcendant."},
    {sense:'cieux',concept:'Hauteur/Élévation',description:''},
    {sense:'élever',concept:'Hauteur/Élévation',description:''},
    {sense:'nom',concept:'Désignation',description:"Ce par quoi on désigne une chose — le nom (ism) identifie et distingue. Dieu a enseigné à Adam tous les noms. Les plus beaux noms (al-asmâ' al-husnâ) appartiennent à Dieu."},
  ])
  log(r,'s m w',{'Hauteur/Élévation':"Au-dessus de la terre. Sept cieux. Perfection de la création.",'Désignation':"Ce par quoi on désigne. Les plus beaux noms appartiennent à Dieu."})

  // 524. m r r (مرر) — passer, amer
  r = await ins('m r r', [
    {sense:'passer',concept:'Transit/Traversée',description:"Se déplacer d'un point à un autre sans s'arrêter — passer (marra) est directionnel à travers l'espace ou le temps. C'est ponctuel dans le mouvement. Ils passent auprès d'eux matin et soir. Le passage rappelle la nature éphémère de la vie terrestre."},
    {sense:'traverser',concept:'Transit/Traversée',description:''},
    {sense:'amer',concept:'Saveur désagréable',description:"Goût contraire au sucré qui repousse — l'amertume (marâra) est une sensation intérieure désagréable. L'amer est difficile à avaler, comme les épreuves sont difficiles à endurer."},
    {sense:'fois',concept:'Répétition',description:"Occurrence d'un événement — une fois (marra) marque la répétition dans le temps."},
  ])
  log(r,'m r r',{'Transit/Traversée':"Se déplacer sans s'arrêter. Rappelle la nature éphémère.",'Saveur désagréable':"L'amertume est difficile comme les épreuves.",'Répétition':"Occurrence d'un événement."})

  // 525. haaa (هاء) — voici, particule
  r = await ins('haaa', [
    {sense:'voici',concept:'Démonstration/Présentation',description:"Particule servant à attirer l'attention sur ce qui suit — hâ est un présentatif qui montre et désigne. C'est directionnel vers ce qu'on veut faire voir. Hâ antum : vous voici ! La particule introduit une réalité qu'on met sous les yeux de l'interlocuteur."},
    {sense:'ici',concept:'Démonstration/Présentation',description:''},
    {sense:'tiens',concept:'Démonstration/Présentation',description:''},
  ])
  log(r,'haaa',{'Démonstration/Présentation':"Attirer l'attention. Hâ antum: vous voici !"})

  console.log('\n=== Batch 55 terminé — ' + done + '/2321 ===')
}
run().catch(e => { console.error('ERREUR:', e); process.exit(1) })
