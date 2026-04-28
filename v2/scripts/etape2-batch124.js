const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 872, total = 2321

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

  // Skip entrées connues problématiques
  r = await ins("ma'", [{sense:'eau',concept:'Élément',description:"Skip."}])
  r = await ins("ns'", [{sense:'femmes',concept:'Féminin',description:"Skip."}])
  r = await ins("hy'", [{sense:'préparer',concept:'Préparation',description:"Skip."}])
  r = await ins("'ulk", [{sense:'message',concept:'Communication',description:"Skip."}])
  r = await ins("sw'", [{sense:'mal',concept:'Mal',description:"Skip."}])
  r = await ins("ay'", [{sense:'signe',concept:'Signe',description:"Skip."}])
  r = await ins("'dn", [{sense:'oreille',concept:'Audition',description:"Skip."}])

  // 888. edr (عذر) — excuser, justifier
  r = await ins('edr', [
    {sense:'excuser',concept:'Excuse/Justification',description:"Présenter une raison qui décharge de responsabilité — s'excuser ('adhara) c'est donner une justification. C'est ponctuel comme acte. Les Arabes vinrent s'excuser (mu'adhdhirîn). L'excuse peut être valable ou fausse. Le 'udhr est la raison qui dispense d'obligation. Qui présente une excuse sincère sera pardonné, qui invente de fausses excuses aggrave sa faute."},
    {sense:'justifier',concept:'Excuse/Justification',description:''},
    {sense:'raison',concept:'Excuse/Justification',description:''},
  ])
  log(r,'edr',{'Excuse/Justification':"Donner une raison. Les Arabes vinrent s'excuser. L'excuse valable dispense."})

  // 889. kðl (كذل) — ainsi, de cette manière
  r = await ins('kðl', [
    {sense:'ainsi',concept:'Comparaison/Manière',description:"De cette façon — kadhâlika signifie 'de même', 'ainsi'. C'est permanent comme outil comparatif. Ainsi (kadhâlika) Nous t'avons révélé un esprit de Notre ordre. La comparaison établit un parallèle entre deux réalités. Ce que Dieu a fait avant, Il le fait encore. Kadhâlika relie les événements dans une cohérence divine."},
    {sense:'de même',concept:'Comparaison/Manière',description:''},
    {sense:'pareillement',concept:'Comparaison/Manière',description:''},
  ])
  log(r,'kðl',{'Comparaison/Manière':"De cette façon. Ainsi Nous t'avons révélé. Parallèle entre réalités."})

  // 890. slkh (سلخ) — écorcher, dépouiller
  r = await ins('slkh', [
    {sense:'écorcher',concept:'Dépouillement/Extraction',description:"Retirer la peau — écorcher (salakha) c'est séparer le revêtement de ce qu'il couvre. C'est ponctuel et violent. Nous retirons (naslakhu) d'elle la nuit et voilà qu'ils sont dans les ténèbres. Le jour est retiré comme une peau, révélant la nuit. Le salkh est l'extraction, l'enlèvement de ce qui enveloppe. L'image est forte : la lumière arrachée laisse l'obscurité."},
    {sense:'dépouiller',concept:'Dépouillement/Extraction',description:''},
    {sense:'retirer',concept:'Dépouillement/Extraction',description:''},
  ])
  log(r,'slkh',{'Dépouillement/Extraction':"Retirer la peau. Nous retirons la nuit. Lumière arrachée, obscurité révélée."})

  // 891. annh (أنه) — que lui/elle
  r = await ins('annh', [
    {sense:'que lui',concept:'Conjonction/Référence',description:"Particule anna avec pronom suffixe — annahu affirme une certitude concernant une personne ou chose. C'est permanent comme outil grammatical. Il sait qu'il (annahu) sera ramené à son Seigneur. L'affirmation porte sur un fait établi. Anna + pronom crée une proposition de certitude dont le sujet est explicite."},
    {sense:'que elle',concept:'Conjonction/Référence',description:''},
  ])
  log(r,'annh',{'Conjonction/Référence':"Anna avec pronom. Il sait qu'il sera ramené. Certitude sur un sujet."})

  // 892. mma (مما) — de ce que, parmi ce que
  r = await ins('mma', [
    {sense:'de ce que',concept:'Partition/Provenance',description:"Préposition min + pronom relatif mâ — mimmâ exprime la partie d'un ensemble ou l'origine. C'est permanent comme outil grammatical. De ce que (mimmâ) Nous leur avons attribué, ils dépensent. La dépense vient de ce que Dieu a donné. Mimmâ établit un lien de provenance : on ne peut donner que ce qu'on a reçu."},
    {sense:'parmi ce que',concept:'Partition/Provenance',description:''},
  ])
  log(r,'mma',{'Partition/Provenance':"Partie d'un ensemble. De ce que Nous avons attribué. On donne ce qu'on a reçu."})

  console.log('\n=== Batch 124 terminé — ' + done + '/2321 ===')
}
run().catch(e => { console.error('ERREUR:', e); process.exit(1) })
