const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 828, total = 2321

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

  // 841. antm (نفس) — vous, forme pronominale
  r = await ins('antm', [
    {sense:'vous',concept:'Pronom/Interlocution',description:"Pronom de la deuxième personne du pluriel — antum désigne ceux à qui l'on s'adresse. C'est permanent comme outil grammatical. Vous (antum) êtes les meilleurs de toutes les communautés. L'interpellation directe crée une relation entre locuteur et interlocuteurs. Quand Dieu dit antum, Il s'adresse directement aux croyants, créant intimité et responsabilité."},
    {sense:'vous êtes',concept:'Pronom/Interlocution',description:''},
  ])
  log(r,'antm',{'Pronom/Interlocution':"Deuxième personne pluriel. Vous êtes les meilleurs. Interpellation directe."})

  // 842. wsf (وصف) — décrire, qualifier
  r = await ins('wsf', [
    {sense:'décrire',concept:'Description/Qualification',description:"Énoncer les qualités de quelque chose — décrire (wasafa) c'est donner une image par les mots. C'est permanent comme activité intellectuelle. Ce qu'ils décrivent (mâ yasifûna) est mensonge. Les descriptions humaines de Dieu sont souvent inadéquates. Seul Dieu Se connaît vraiment. Le wasf humain reste limité, partiel, incapable de saisir la réalité divine."},
    {sense:'qualifier',concept:'Description/Qualification',description:''},
    {sense:'attribut',concept:'Description/Qualification',description:''},
  ])
  log(r,'wsf',{'Description/Qualification':"Énoncer les qualités. Ce qu'ils décrivent est mensonge. Descriptions limitées."})

  // 843. khdr (خضر) — vert, verdure
  r = await ins('khdr', [
    {sense:'vert',concept:'Verdure/Vie',description:"Couleur de la végétation fraîche — le vert (akhdar) est la couleur de la vie végétale. C'est permanent comme attribut naturel. Des vêtements verts (khudr) de satin. Le vert est la couleur du Paradis, de la fraîcheur et de la vie. Al-Khadir, le verdoyant, est le serviteur de Dieu aux connaissances mystérieuses. Le vert symbolise la vie qui persiste au-delà de la mort."},
    {sense:'verdure',concept:'Verdure/Vie',description:''},
    {sense:'fraîcheur',concept:'Verdure/Vie',description:''},
  ])
  log(r,'khdr',{'Verdure/Vie':"Couleur de la vie. Vêtements verts au Paradis. Al-Khadir le verdoyant."})

  // 844. meh (معه) — avec lui
  r = await ins('meh', [
    {sense:'avec lui',concept:'Accompagnement/Présence',description:"Préposition ma'a avec pronom suffixe — ma'ahu exprime la compagnie, l'accompagnement. C'est permanent comme outil grammatical. Ceux qui sont avec lui (ma'ahu) sont durs envers les mécréants. L'accompagnement implique solidarité et partage du chemin. Être avec le Prophète c'est partager sa mission, ses épreuves et sa récompense."},
    {sense:'en sa compagnie',concept:'Accompagnement/Présence',description:''},
  ])
  log(r,'meh',{'Accompagnement/Présence':"Préposition + pronom. Ceux qui sont avec lui. Solidarité du chemin."})

  // 845. aafala () — forme verbale
  r = await ins('aafala', [
    {sense:'faire',concept:'Action',description:"Skip si forme verbale non reconnue."},
  ])

  // 846. draa (ذرأ) — semer, créer
  r = await ins('draa', [
    {sense:'semer',concept:'Création/Dispersion',description:"Répandre des graines ou des créatures — semer (dhara'a) c'est disperser pour faire croître. C'est ponctuel comme acte et permanent comme effet. Il vous a semés (dhara'akum) sur la terre. La création est un ensemencement divin, une dispersion de vie. La dhurriyya est la progéniture, ce qui est semé par la reproduction. Chaque être est une graine de Dieu."},
    {sense:'créer',concept:'Création/Dispersion',description:''},
    {sense:'progéniture',concept:'Création/Dispersion',description:''},
  ])
  log(r,'draa',{'Création/Dispersion':"Répandre pour faire croître. Il vous a semés sur la terre. Chaque être est graine divine."})

  console.log('\n=== Batch 115 terminé — ' + done + '/2321 ===')
}
run().catch(e => { console.error('ERREUR:', e); process.exit(1) })
