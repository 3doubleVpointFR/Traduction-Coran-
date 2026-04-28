const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 545, total = 2321

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

  // Skip ma', ns', hy'
  r = await ins("ma'", [{sense:'eau',concept:'Élément',description:"Skip."}])
  r = await ins("ns'", [{sense:'femmes',concept:'Féminin',description:"Skip."}])
  r = await ins("hy'", [{sense:'préparer',concept:'Préparation',description:"Skip."}])

  // 549. khr (خري) — bien, meilleur
  r = await ins('khr', [
    {sense:'bien',concept:'Bien/Bonté',description:"Ce qui est profitable et bénéfique — le bien (khayr) est permanent comme qualité morale et ontologique. C'est le contraire du mal. Si tu vois un bien, c'est de Dieu. Le bien peut être matériel ou spirituel. Faire le bien est commandé, le mal interdit. Le meilleur (khayr) est celui qui dépasse les autres en qualité."},
    {sense:'meilleur',concept:'Bien/Bonté',description:''},
    {sense:'bon',concept:'Bien/Bonté',description:''},
    {sense:'choisir',concept:'Choix/Préférence',description:"Prendre le meilleur parmi plusieurs options — choisir (ikhtâra) c'est opter pour le bien. Dieu choisit qui Il veut parmi Ses serviteurs."},
  ])
  log(r,'khr',{'Bien/Bonté':"Profitable et bénéfique. Si tu vois un bien, c'est de Dieu.",'Choix/Préférence':"Opter pour le bien. Dieu choisit qui Il veut."})

  // 550. wqf (وقف) — s'arrêter
  r = await ins('wqf', [
    {sense:"s'arrêter",concept:'Arrêt/Station',description:"Cesser d'avancer, rester en place — s'arrêter (waqafa) est le contraire du mouvement. C'est ponctuel dans l'acte initial mais peut devenir un état. Arrêtez-les (qifûhum) car ils seront interrogés ! L'arrêt devant Dieu au Jour du Jugement est inévitable. Se tenir debout devant le Juge suprême."},
    {sense:'station',concept:'Arrêt/Station',description:''},
    {sense:'immobiliser',concept:'Arrêt/Station',description:''},
  ])
  log(r,'wqf',{'Arrêt/Station':"Cesser d'avancer. Arrêtez-les, ils seront interrogés ! Debout devant le Juge."})

  // 551. jla (جلى) — révéler, manifester
  r = await ins('jla', [
    {sense:'révéler',concept:'Manifestation/Clarté',description:"Faire apparaître ce qui était caché — révéler (jalâ/tajallâ) c'est rendre visible et clair. C'est directionnel de l'intérieur vers l'extérieur. Quand son Seigneur Se manifesta (tajallâ) à la montagne, Il la réduisit en poussière. La théophanie est un dévoilement qui dépasse la capacité de la création."},
    {sense:'manifester',concept:'Manifestation/Clarté',description:''},
    {sense:'clarifier',concept:'Manifestation/Clarté',description:''},
    {sense:'brillant',concept:'Manifestation/Clarté',description:''},
  ])
  log(r,'jla',{'Manifestation/Clarté':"Faire apparaître le caché. Quand Dieu Se manifesta à la montagne..."})

  // 552. taa (طأء) — marcher, errer
  r = await ins('taa', [
    {sense:'marcher',concept:'Marche/Erreur',description:"Se déplacer à pied — marcher implique un parcours. Errer c'est marcher sans direction claire. Celui qui erre s'écarte du chemin droit. Le Coran guide ceux qui marchaient dans les ténèbres vers la lumière."},
    {sense:'errer',concept:'Marche/Erreur',description:''},
    {sense:'pécher',concept:'Marche/Erreur',description:''},
  ])
  log(r,'taa',{'Marche/Erreur':"Se déplacer. Errer c'est s'écarter du chemin droit."})

  // 553. a-dh-n (أذن) — oreille, permettre
  r = await ins('a-dh-n', [
    {sense:'oreille',concept:'Audition/Réception',description:"Organe de l'ouïe — l'oreille (udhun) est permanente comme partie du corps qui reçoit les sons. Dans leurs oreilles il y a une surdité. L'oreille est la porte par laquelle entre la parole divine. Qui a des oreilles pour entendre, qu'il entende !"},
    {sense:'écouter',concept:'Audition/Réception',description:''},
    {sense:'permettre',concept:'Permission',description:"Autoriser, donner le droit — permettre (adhina) c'est lever l'interdit. Nul intercesseur sans Sa permission. La permission divine est nécessaire pour toute action valide."},
    {sense:'appeler à la prière',concept:'Appel',description:"L'adhân est l'appel qui convoque les croyants à la prière."},
  ])
  log(r,'a-dh-n',{'Audition/Réception':"Organe de l'ouïe. Porte de la parole divine.",'Permission':"Lever l'interdit. Nul intercesseur sans permission.",'Appel':"L'adhân convoque à la prière."})

  // 554. ean (عن) — de, à propos de
  r = await ins('ean', [
    {sense:'de',concept:'Provenance/Éloignement',description:"Préposition marquant la séparation ou l'origine — 'an indique d'où vient quelque chose ou de quoi on s'éloigne. C'est directionnel depuis un point. Détournez-vous d'eux ! Se détourner de quelqu'un c'est s'en éloigner. La préposition marque aussi le sujet dont on parle : à propos de."},
    {sense:'à propos de',concept:'Provenance/Éloignement',description:''},
    {sense:'loin de',concept:'Provenance/Éloignement',description:''},
  ])
  log(r,'ean',{'Provenance/Éloignement':"Marque la séparation. Détournez-vous d'eux ! D'où vient, de quoi on parle."})

  // 555. 'ulk (ألك) — message, manger
  r = await ins("'ulk", [
    {sense:'message',concept:'Communication/Envoi',description:"Ce qui est transmis d'une personne à une autre — le message est porté par un messager. Les anges sont les messagers (malâ'ika) entre Dieu et les hommes. La communication divine passe par des intermédiaires choisis qui portent fidèlement la parole."},
    {sense:'ange',concept:'Communication/Envoi',description:''},
    {sense:'messager',concept:'Communication/Envoi',description:''},
  ])
  log(r,"'ulk",{'Communication/Envoi':"Transmis par un messager. Les anges portent le message divin."})

  console.log('\n=== Batch 59 terminé — ' + done + '/2321 ===')
}
run().catch(e => { console.error('ERREUR:', e); process.exit(1) })
