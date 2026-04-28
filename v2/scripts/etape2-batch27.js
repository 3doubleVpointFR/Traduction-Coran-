const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 247, total = 2321

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

  // 248. llh (الله) — Dieu, divinité
  r = await ins('llh', [
    {sense:'Dieu',concept:'Divinité/Adoration',description:"L'Être suprême qui existe nécessairement par Lui-même et possède tous les attributs de perfection — Dieu est la réalité ultime vers laquelle tend toute adoration véritable. C'est permanent et transcendant : Dieu est éternel, sans commencement ni fin, au-delà du temps et de l'espace qu'Il a créés. L'adoration est l'acte par lequel la créature reconnaît la grandeur absolue du Créateur."},
    {sense:'divinité',concept:'Divinité/Adoration',description:''},
    {sense:'adorer',concept:'Divinité/Adoration',description:''},
    {sense:'être confus',concept:'Perplexité',description:"État intérieur de trouble et d'égarement de celui qui cherche sans trouver — la confusion est permanente tant qu'on n'a pas trouvé la direction. Celui qui cherche Dieu sans Le trouver est plongé dans la perplexité."},
  ])
  log(r,'llh',{'Divinité/Adoration':"L'Être suprême éternel vers qui tend toute adoration. Permanent et transcendant. Le Créateur reconnu par la créature.",'Perplexité':"État intérieur de trouble de celui qui cherche sans trouver."})

  // 249. thlk (ذلك) — celui-là, cela
  r = await ins('thlk', [
    {sense:'celui-là',concept:'Démonstratif/Distance',description:"Pronom démonstratif qui désigne ce qui est éloigné du locuteur — celui-là pointe vers une réalité distante, absente ou mentionnée précédemment. C'est directionnel vers le loin, contrairement à celui-ci qui pointe vers le proche. Le démonstratif éloigné crée une distance entre le locuteur et ce qu'il désigne."},
    {sense:'cela',concept:'Démonstratif/Distance',description:''},
    {sense:'ce',concept:'Démonstratif/Distance',description:''},
  ])
  log(r,'thlk',{'Démonstratif/Distance':"Désigner ce qui est éloigné ou absent. Directionnel vers le loin. Créer une distance avec ce qu'on montre."})

  // 250. alk (ألك) — message, ange
  r = await ins('alk', [
    {sense:'message',concept:'Message/Envoi',description:"Communication envoyée d'une personne à une autre à travers un intermédiaire — le message sort de l'émetteur et atteint le destinataire par le messager. C'est directionnel et ponctuel dans l'envoi mais le contenu peut avoir une portée permanente. L'ange est le messager par excellence qui porte la révélation de Dieu aux hommes."},
    {sense:'messager',concept:'Message/Envoi',description:''},
    {sense:'ange',concept:'Message/Envoi',description:''},
    {sense:'mâcher',concept:'Mastication',description:"Acte physique de broyer avec les dents — la mastication est un mouvement répétitif et concret qui transforme ce qui est dur en assimilable."},
  ])
  log(r,'alk',{'Message/Envoi':"Communication directionnelle à travers un intermédiaire. L'ange messager divin.",'Mastication':"Broyer avec les dents."})

  // 251. hmm (همم) — intention, souci
  r = await ins('hmm', [
    {sense:'avoir l\'intention',concept:'Intention/Résolution',description:"Acte intérieur de diriger sa volonté vers un objectif avant de passer à l'action — l'intention est le mouvement premier de l'âme qui précède le geste. C'est ponctuel dans la formation mais peut devenir permanent comme disposition. L'acte sera jugé selon l'intention qui l'a précédé."},
    {sense:'désirer',concept:'Intention/Résolution',description:''},
    {sense:'résolution',concept:'Intention/Résolution',description:''},
    {sense:'chagriner',concept:'Souci/Inquiétude',description:"Causer de la tristesse ou de l'inquiétude à quelqu'un — le chagrin vient d'une cause et atteint celui qui le subit. C'est une émotion passive qui préoccupe l'esprit et empêche le repos."},
    {sense:'souci',concept:'Souci/Inquiétude',description:''},
    {sense:'aspirer',concept:'Aspiration/Noblesse',description:"Élan intérieur vers ce qui est élevé et noble — aspirer c'est tendre vers le haut, désirer ce qui dépasse l'ordinaire. Celui qui aspire à la grandeur refuse la médiocrité."},
  ])
  log(r,'hmm',{'Intention/Résolution':"Acte intérieur qui précède l'action. L'acte sera jugé selon l'intention.",'Souci/Inquiétude':"Émotion passive qui préoccupe.",'Aspiration/Noblesse':"Élan vers ce qui est élevé."})

  console.log('[SKIP] dhyy — racine non trouvée')

  // 253. ghyb (غيب) — invisible, absent
  r = await ins('ghyb', [
    {sense:'invisible',concept:'Invisible/Caché',description:"Ce qui échappe à la perception des sens et de la raison ordinaire — l'invisible (ghayb) est le domaine de ce qui est caché aux hommes mais connu de Dieu seul. C'est permanent : le futur, les anges, le paradis sont du ghayb. Croire au ghayb est le premier attribut des croyants dans le Coran."},
    {sense:'absent',concept:'Invisible/Caché',description:''},
    {sense:'caché',concept:'Invisible/Caché',description:''},
    {sense:'cacher',concept:'Dissimulation',description:"Acte de soustraire quelque chose à la vue ou à la connaissance — cacher est directionnel, on cache quelque chose à quelqu'un. On cache par pudeur, prudence ou tromperie."},
    {sense:'médire',concept:'Médisance',description:"Parler de quelqu'un en son absence en disant ce qui lui déplairait — la médisance atteint l'absent qui ne peut se défendre. Le Coran compare le médisant à celui qui mange la chair de son frère mort."},
  ])
  log(r,'ghyb',{'Invisible/Caché':"Domaine connu de Dieu seul. Le futur, les anges.",'Dissimulation':"Soustraire à la vue.",'Médisance':"Mal parler de l'absent."})

  console.log('[SKIP] dhhy — doublon')

  // 255. ma (ما) — quoi, négation
  r = await ins('ma', [
    {sense:'quoi',concept:'Interrogation/Relatif',description:"Pronom interrogatif ou relatif qui porte sur les choses — quoi demande l'identité de ce dont on parle, ce que établit un lien avec ce qui précède. C'est un outil grammatical qui structure la question ou la relative."},
    {sense:'ce que',concept:'Interrogation/Relatif',description:''},
    {sense:'ne pas',concept:'Négation',description:"Particule de négation qui nie l'existence ou l'action — le ma négatif rejette ce qui est affirmé. C'est ponctuel dans l'énoncé mais peut exprimer une négation permanente."},
  ])
  log(r,'ma',{'Interrogation/Relatif':"Pronom pour les choses.",'Négation':"Nie l'existence ou l'action."})

  console.log('[SKIP] lyk — particule grammaticale')

  // 257. ndhr (نذر) — avertir, vœu
  r = await ins('ndhr', [
    {sense:'avertir',concept:'Avertissement/Mise en garde',description:"Acte de prévenir quelqu'un d'un danger ou d'un châtiment à venir — l'avertissement sort de celui qui avertit et atteint celui qui est averti. Le prophète est un avertisseur (nadhîr) envoyé pour prévenir les hommes du châtiment s'ils persistent dans le mal."},
    {sense:'mettre en garde',concept:'Avertissement/Mise en garde',description:''},
    {sense:'avertisseur',concept:'Avertissement/Mise en garde',description:''},
    {sense:'vouer',concept:'Vœu/Consécration',description:"Acte de s'engager envers Dieu à accomplir quelque chose — le vœu (nadhr) est directionnel vers Dieu, c'est une promesse sacrée qui lie celui qui fait le vœu. Le vœu doit être tenu car il engage devant Dieu."},
    {sense:'vœu',concept:'Vœu/Consécration',description:''},
  ])
  log(r,'ndhr',{'Avertissement/Mise en garde':"Prévenir du danger. Du prophète vers les hommes.",'Vœu/Consécration':"Promesse sacrée qui oblige."})

  console.log('\n=== Batch 27 terminé — ' + done + '/2321 ===')
}
run().catch(e => { console.error('ERREUR:', e); process.exit(1) })
