const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 636, total = 2321

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

  // 642. ḵwl (خول) — donner pouvoir, oncle
  r = await ins('ḵwl', [
    {sense:'donner pouvoir',concept:'Don/Autorité',description:"Accorder une faveur ou un pouvoir — donner (khawwala) c'est transmettre un bienfait ou une autorité. Lorsque Dieu lui a donné (khawwalahu) un fils parfait, ils Lui associèrent des partenaires. Le don de Dieu appelle la reconnaissance, non l'associationnisme."},
    {sense:'accorder',concept:'Don/Autorité',description:''},
    {sense:'oncle maternel',concept:'Parenté',description:"Le frère de la mère — le khâl est un parent proche qui a des droits et des devoirs."},
  ])
  log(r,'ḵwl',{'Don/Autorité':"Accorder un bienfait. Dieu lui donna un fils. Don appelle reconnaissance.",'Parenté':"Oncle maternel. Parent proche."})

  // 643. kšy (خشي) — craindre, redouter
  r = await ins('kšy', [
    {sense:'craindre',concept:'Crainte révérencielle',description:"Éprouver une peur mêlée de respect — la crainte (khashya) est un sentiment intérieur de révérence devant ce qui est grand et puissant. Les savants sont ceux qui craignent (yakhshâ) Dieu parmi Ses serviteurs. La vraie crainte de Dieu est celle des connaissants, proportionnelle à leur connaissance de Sa majesté."},
    {sense:'redouter',concept:'Crainte révérencielle',description:''},
    {sense:'révérer',concept:'Crainte révérencielle',description:''},
  ])
  log(r,'kšy',{'Crainte révérencielle':"Peur mêlée de respect. Les savants craignent Dieu. Proportionnelle à la connaissance."})

  // 644. dhwt (ذوت) — soi-même, essence
  r = await ins('dhwt', [
    {sense:'soi-même',concept:'Identité/Essence',description:"La personne elle-même, son être propre — dhât désigne l'essence d'une chose, ce qu'elle est en elle-même. Il connaît les secrets des poitrines et ce qui est en elles-mêmes (dhât as-sudûr). Ce qui est en soi est le plus intime, connu de Dieu seul."},
    {sense:'essence',concept:'Identité/Essence',description:''},
    {sense:'possesseur de',concept:'Attribution',description:"Celui/celle qui possède une qualité — dhû (masc.), dhât (fém.) introduit une attribution."},
  ])
  log(r,'dhwt',{'Identité/Essence':"L'être propre. Ce qui est dans les poitrines. Le plus intime.",'Attribution':"Possesseur de qualité."})

  // 645. shna (شنأ) — haïr
  r = await ins('shna', [
    {sense:'haïr',concept:'Haine/Aversion',description:"Éprouver un profond rejet envers quelqu'un — la haine (shan'ân) est un sentiment intérieur d'aversion. Que la haine d'un peuple (shanâ'ânu qawmin) ne vous pousse pas à être injustes ! La haine ne doit pas détourner de la justice. Le musulman doit être juste même envers ceux qu'il n'aime pas."},
    {sense:'détester',concept:'Haine/Aversion',description:''},
    {sense:'aversion',concept:'Haine/Aversion',description:''},
  ])
  log(r,'shna',{'Haine/Aversion':"Profond rejet. Que la haine ne rende pas injuste ! Juste même envers l'ennemi."})

  // 646. trd (طرد) — chasser, expulser
  r = await ins('trd', [
    {sense:'chasser',concept:'Expulsion/Rejet',description:"Faire partir de force, éloigner — chasser (tarada) est directionnel vers l'extérieur. C'est ponctuel dans l'acte mais crée un état de séparation. Ne chasse pas (lâ tatrud) ceux qui invoquent leur Seigneur matin et soir ! Le Prophète ne doit pas repousser les croyants pauvres pour plaire aux riches."},
    {sense:'expulser',concept:'Expulsion/Rejet',description:''},
    {sense:'repousser',concept:'Expulsion/Rejet',description:''},
  ])
  log(r,'trd',{'Expulsion/Rejet':"Faire partir de force. Ne chasse pas ceux qui invoquent ! Ne pas repousser les pauvres."})

  console.log('\n=== Batch 75 terminé — ' + done + '/2321 ===')
}
run().catch(e => { console.error('ERREUR:', e); process.exit(1) })
