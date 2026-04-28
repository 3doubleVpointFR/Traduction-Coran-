const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 621, total = 2321

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

  // Skip entrées connues
  r = await ins("ma'", [{sense:'eau',concept:'Élément',description:"Skip."}])
  r = await ins("ns'", [{sense:'femmes',concept:'Féminin',description:"Skip."}])
  r = await ins("hy'", [{sense:'préparer',concept:'Préparation',description:"Skip."}])
  r = await ins("'ulk", [{sense:'message',concept:'Communication',description:"Skip."}])
  r = await ins("sw'", [{sense:'mal',concept:'Mal',description:"Skip."}])

  // 627. aana () — particule/pronom
  r = await ins('aana', [
    {sense:'moi',concept:'Pronom personnel',description:"Pronom de la première personne — anâ désigne celui qui parle. C'est directionnel vers soi-même. Je suis (anâ) votre Seigneur le plus haut, dit Pharaon dans son orgueil. Je suis Dieu, il n'y a de dieu que Moi. Le pronom affirme l'identité de celui qui se nomme."},
    {sense:'je',concept:'Pronom personnel',description:''},
  ])
  log(r,'aana',{'Pronom personnel':"Désigne celui qui parle. Je suis votre Seigneur (Pharaon). Affirme l'identité."})

  // 628. mwj (موج) — vague
  r = await ins('mwj', [
    {sense:'vague',concept:'Mouvement aquatique',description:"Ondulation de la surface de l'eau — la vague (mawj) est le mouvement de la mer agitée. C'est temporaire et répétitif. Une vague les recouvrit comme des ombres (du déluge). Les vagues comme des montagnes séparèrent Noé de son fils. La vague symbolise la force irrésistible du châtiment divin."},
    {sense:'flot',concept:'Mouvement aquatique',description:''},
    {sense:'ondulation',concept:'Mouvement aquatique',description:''},
  ])
  log(r,'mwj',{'Mouvement aquatique':"Ondulation de la mer. Vagues comme des montagnes. Force du châtiment."})

  // 629. mda (مذا) — quoi, que
  r = await ins('mda', [
    {sense:'quoi',concept:'Interrogation',description:"Pronom interrogatif pour les choses — mâdhâ demande la nature ou l'identité de quelque chose. Que dépensent-ils (mâdhâ yunfiqûna) ? Qu'est-ce que cela ? L'interrogation invite à réfléchir sur la réalité de ce dont on parle."},
    {sense:'que',concept:'Interrogation',description:''},
    {sense:'qu est-ce',concept:'Interrogation',description:''},
  ])
  log(r,'mda',{'Interrogation':"Demande la nature. Que dépensent-ils ? Invite à réfléchir."})

  // 630. kullama () — chaque fois que
  r = await ins('kullama', [
    {sense:'chaque fois que',concept:'Répétition temporelle',description:"Conjonction marquant la répétition — kullamâ introduit une action qui se reproduit. Chaque fois que (kullamâ) leur peau aura brûlé, Nous leur en donnerons une autre. Chaque fois qu'ils voudront en sortir, ils y seront ramenés. La répétition souligne le caractère incessant du châtiment ou de la récompense."},
    {sense:'à chaque fois',concept:'Répétition temporelle',description:''},
    {sense:'toutes les fois que',concept:'Répétition temporelle',description:''},
  ])
  log(r,'kullama',{'Répétition temporelle':"Action qui se reproduit. Chaque fois que leur peau aura brûlé..."})

  // 631. waed (وعد) — promesse
  r = await ins('waed', [
    {sense:'promesse',concept:'Engagement/Parole donnée',description:"Engagement de faire quelque chose dans le futur — la promesse (wa'd) de Dieu est certaine. C'est permanent comme engagement divin. La promesse de Dieu est vérité (haqq). Il ne manque jamais à Sa promesse. La promesse du Paradis aux croyants et de l'enfer aux mécréants sont inévitables."},
    {sense:'promettre',concept:'Engagement/Parole donnée',description:''},
    {sense:'rendez-vous',concept:'Engagement/Parole donnée',description:''},
  ])
  log(r,'waed',{'Engagement/Parole donnée':"Engagement futur. Promesse de Dieu est vérité. Jamais ne manque."})

  console.log('\n=== Batch 72 terminé — ' + done + '/2321 ===')
}
run().catch(e => { console.error('ERREUR:', e); process.exit(1) })
