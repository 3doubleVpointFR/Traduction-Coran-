const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 892, total = 2321

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
  r = await ins("m a a", [{sense:'eau',concept:'Élément',description:"Skip."}])

  // 910. sh'b (شعب) — peuple, tribu
  r = await ins("sh'b", [
    {sense:'peuple',concept:'Communauté/Division',description:"Grand groupe humain partageant une origine — le peuple (sha'b) est une grande division humaine. C'est permanent comme structure sociale. Nous vous avons faits peuples (shu'ûban) et tribus. La diversité des peuples est voulue par Dieu pour que les hommes se connaissent. Les shu'ûb et les qabâ'il sont les grandes et petites divisions. L'appartenance ethnique ne détermine pas la valeur : le plus noble est le plus pieux."},
    {sense:'tribu',concept:'Communauté/Division',description:''},
    {sense:'nation',concept:'Communauté/Division',description:''},
  ])
  log(r,"sh'b",{'Communauté/Division':"Grand groupe humain. Peuples et tribus pour se connaître. Le plus noble est le plus pieux."})

  // 911. bdhr (بذر) — gaspiller, semer
  r = await ins('bdhr', [
    {sense:'gaspiller',concept:'Dilapidation/Semailles',description:"Dépenser de manière excessive et inutile — gaspiller (badhdhara) c'est disperser ses biens sans raison. C'est ponctuel comme acte mais ses effets sont permanents. Ne gaspille pas (lâ tubadhdhir) en gaspillage. Les gaspilleurs (mubadhdirûn) sont les frères des démons. Le tabdhîr est le contraire de la modération. On peut aussi semer (badhr), disperser les graines. Le gaspillage est une semaille stérile."},
    {sense:'semer',concept:'Dilapidation/Semailles',description:''},
    {sense:'disperser',concept:'Dilapidation/Semailles',description:''},
  ])
  log(r,'bdhr',{'Dilapidation/Semailles':"Dépenser sans raison. Ne gaspille pas. Les gaspilleurs frères des démons."})

  // 912. zny (زني) — fornication, adultère
  r = await ins('zny', [
    {sense:'fornication',concept:'Transgression sexuelle',description:"Relation sexuelle hors mariage — la zinâ est l'acte illicite entre non-époux. C'est ponctuel comme acte et grave comme péché. N'approchez pas la fornication (al-zinâ). L'interdiction est si forte qu'on ne doit même pas s'en approcher. Le zânî et la zâniya reçoivent la peine légale. La zinâ détruit les lignages, les familles, la confiance sociale. C'est un péché majeur qui appelle repentir sincère."},
    {sense:'adultère',concept:'Transgression sexuelle',description:''},
  ])
  log(r,'zny',{'Transgression sexuelle':"Relation hors mariage. N'approchez pas la zinâ. Péché majeur, repentir nécessaire."})

  // 913. lbṯ (لبث) — rester, demeurer
  r = await ins('lbṯ', [
    {sense:'rester',concept:'Séjour/Durée',description:"Demeurer en un lieu — rester (labitha) c'est prolonger son séjour. C'est permanent comme état. Ils restèrent (labithû) dans leur caverne trois cents ans. Le labth est la durée du séjour. Combien de temps êtes-vous restés ? Le temps semble différent selon qu'on est dans ce monde ou l'autre. Au Jour du Jugement, on pensera n'être resté qu'un jour ou une partie de jour."},
    {sense:'demeurer',concept:'Séjour/Durée',description:''},
    {sense:'séjourner',concept:'Séjour/Durée',description:''},
  ])
  log(r,'lbṯ',{'Séjour/Durée':"Prolonger son séjour. Trois cents ans dans la caverne. Perception du temps relative."})

  // 914. ngd (نغض) — hocher, secouer la tête
  r = await ins('ngd', [
    {sense:'hocher',concept:'Mouvement/Dérision',description:"Secouer la tête en signe de désapprobation — hocher (yungidu) exprime le rejet ou la moquerie. C'est ponctuel et expressif. Ils hochent (yunghidûna) la tête vers toi. Les mécréants se moquent du Prophète par ce geste. Le mouvement de tête est langage corporel de mépris. Leur dérision se retournera contre eux au Jour où ils ne pourront plus hocher la tête."},
    {sense:'secouer',concept:'Mouvement/Dérision',description:''},
    {sense:'rejeter',concept:'Mouvement/Dérision',description:''},
  ])
  log(r,'ngd',{'Mouvement/Dérision':"Secouer la tête. Ils hochent vers toi en moquerie. Dérision qui se retourne."})

  console.log('\n=== Batch 128 terminé — ' + done + '/2321 ===')
}
run().catch(e => { console.error('ERREUR:', e); process.exit(1) })
