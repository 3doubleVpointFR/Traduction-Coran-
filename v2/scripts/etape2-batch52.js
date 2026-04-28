const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 491, total = 2321

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

  // Skip ma' and ns' (déjà faits)
  r = await ins("ma'", [{sense:'eau',concept:'Élément',description:"Skip."}])
  r = await ins("ns'", [{sense:'femmes',concept:'Féminin',description:"Skip."}])

  // 494. zma (ظمأ) — soif
  r = await ins('zma', [
    {sense:'soif',concept:'Manque/Désir',description:"Besoin impérieux de boire — la soif (zama') est un état intérieur de privation d'eau. C'est temporaire mais peut être mortelle si elle dure. Les assoiffés (zam'ân) cherchent l'eau comme le croyant cherche Dieu. Le mirage trompe l'assoiffé : il croit voir de l'eau mais ne trouve rien."},
    {sense:'assoiffé',concept:'Manque/Désir',description:''},
    {sense:'désirer ardemment',concept:'Manque/Désir',description:''},
  ])
  log(r,'zma',{'Manque/Désir':"Besoin impérieux. Peut être mortel. Le mirage trompe l'assoiffé."})

  // 495. dwwa (ضوء) — lumière
  r = await ins('dwwa', [
    {sense:'lumière',concept:'Éclat/Illumination',description:"Ce qui éclaire et permet de voir — la lumière (daw'/diyâ') est permanente comme phénomène et qualité de ce qui brille. La lumière du soleil éclaire le jour. Dieu est la Lumière des cieux et de la terre. La lumière révèle ce qui était dans les ténèbres, elle guide et montre le chemin."},
    {sense:'éclat',concept:'Éclat/Illumination',description:''},
    {sense:'clarté',concept:'Éclat/Illumination',description:''},
    {sense:'illuminer',concept:'Éclat/Illumination',description:''},
  ])
  log(r,'dwwa',{'Éclat/Illumination':"Permet de voir. Dieu est la Lumière. Révèle et guide."})

  // 496. rfe (رفع) — lever, élever
  r = await ins('rfe', [
    {sense:'lever',concept:'Élévation/Exaltation',description:"Porter vers le haut ce qui était en bas — lever (rafa'a) est directionnel de bas en haut. C'est ponctuel dans l'acte mais peut créer un état permanent d'élévation. Dieu a élevé le ciel sans piliers visibles. Il élève qui Il veut en degré. Élever la voix, les mains, le regard vers Dieu."},
    {sense:'élever',concept:'Élévation/Exaltation',description:''},
    {sense:'hausser',concept:'Élévation/Exaltation',description:''},
    {sense:'exalter',concept:'Élévation/Exaltation',description:''},
    {sense:'enlever',concept:'Suppression',description:"Retirer, faire disparaître — Dieu a enlevé Jésus vers Lui. Le fardeau est enlevé de celui qui est pardonné."},
  ])
  log(r,'rfe',{'Élévation/Exaltation':"De bas en haut. Dieu élève le ciel. Il élève qui Il veut.",'Suppression':"Retirer. Jésus élevé vers Dieu. Le fardeau enlevé."})

  // 497. alyhm (يلي) — à eux, sur eux
  r = await ins('alyhm', [
    {sense:'à eux',concept:'Pronom/Direction',description:"Préposition combinée avec le pronom de troisième personne pluriel — 'alayhim' indique ce qui est sur eux ou contre eux. C'est directionnel vers le groupe dont on parle. Sur eux la malédiction, sur eux le châtiment. La responsabilité pèse sur eux."},
    {sense:'sur eux',concept:'Pronom/Direction',description:''},
    {sense:'contre eux',concept:'Pronom/Direction',description:''},
  ])
  log(r,'alyhm',{'Pronom/Direction':"Sur eux ou contre eux. La responsabilité pèse sur eux."})

  // 498. std (صطد) — chasser
  r = await ins('std', [
    {sense:'chasser',concept:'Chasse/Capture',description:"Poursuivre des animaux pour les capturer — la chasse (sayd) est directionnelle vers la proie. C'est ponctuel dans l'acte mais peut être un mode de vie. Le gibier de la mer vous est permis mais la chasse terrestre est interdite en état de sacralisation. La chasse exige habileté et patience."},
    {sense:'capturer',concept:'Chasse/Capture',description:''},
    {sense:'gibier',concept:'Chasse/Capture',description:''},
  ])
  log(r,'std',{'Chasse/Capture':"Poursuivre pour capturer. Gibier de mer permis. Interdit en sacralisation."})

  // 499. f y a (فيء) — ombre, butin
  r = await ins('f y a', [
    {sense:'ombre',concept:'Ombre/Retour',description:"Zone de fraîcheur où le soleil ne frappe pas — l'ombre (fay') est le refuge contre la chaleur. Les ombres se prosternent devant Dieu matin et soir. L'ombre revient vers son point d'origine quand le soleil décline."},
    {sense:'butin',concept:'Ombre/Retour',description:''},
    {sense:'revenir',concept:'Retour',description:"Retourner vers le point de départ — le butin (fay') est ce qui revient aux musulmans sans combat. Dieu fait revenir à qui Il veut."},
  ])
  log(r,'f y a',{'Ombre/Retour':"Refuge contre la chaleur. Les ombres se prosternent.",'Retour':"Revenir à l'origine. Le butin revient sans combat."})

  // 500. khalaq (خلق) — créer
  r = await ins('khalaq', [
    {sense:'créer',concept:'Création/Origination',description:"Faire exister ce qui n'existait pas — créer (khalaqa) est l'acte divin par excellence. C'est directionnel de Dieu vers Sa création. Dieu est al-Khâliq, le Créateur de toute chose. Il crée ce qu'Il veut et choisit. La création témoigne de la puissance et de la sagesse du Créateur. Celui qui crée est-Il semblable à celui qui ne crée pas ?"},
    {sense:'façonner',concept:'Création/Origination',description:''},
    {sense:'caractère',concept:'Nature innée',description:"La disposition naturelle — le caractère (khuluq) est la nature façonnée par Dieu. Tu es certes d'un caractère immense (dit à Muhammad)."},
    {sense:'mesurer',concept:'Mesure',description:"Déterminer les proportions — créer inclut l'idée de mesure précise. Dieu a créé toute chose et lui a donné sa juste mesure."},
  ])
  log(r,'khalaq',{'Création/Origination':"Faire exister. Acte divin par excellence. Celui qui crée est-Il comme celui qui ne crée pas?",'Nature innée':"Caractère façonné. Muhammad d'un caractère immense.",'Mesure':"Donner les justes proportions."})

  // 501. dh r (ذهر) — dos
  r = await ins('dh r', [
    {sense:'dos',concept:'Corps/Soutien',description:"Partie postérieure du corps — le dos (zahr) est permanent comme partie du corps qui soutient et porte. Dieu a tiré de leurs reins (zuhûrihim) la descendance d'Adam. Le dos peut aussi être ce qu'on présente en se détournant : tourner le dos c'est rejeter."},
    {sense:'reins',concept:'Corps/Soutien',description:''},
    {sense:'surface',concept:'Extérieur',description:"La partie visible et extérieure — le dos de la terre est sa surface. Vous cheminez sur son dos."},
  ])
  log(r,'dh r',{'Corps/Soutien':"Partie qui porte. Descendance tirée des reins. Tourner le dos = rejeter.",'Extérieur':"Surface visible. Le dos de la terre."})

  console.log('\n=== Batch 52 terminé — ' + done + '/2321 ===')
}
run().catch(e => { console.error('ERREUR:', e); process.exit(1) })
