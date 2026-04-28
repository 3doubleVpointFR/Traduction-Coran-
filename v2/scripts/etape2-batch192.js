const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 1508, total = 2321

async function ins(key, senses) {
  const {data: wa} = await db.from('word_analyses').select('id').eq('word_key', key).limit(1)
  if (!wa || !wa[0]) { console.log('SKIP '+key+': not found'); return null }
  const {count} = await db.from('word_meanings').select('*',{count:'exact',head:true}).eq('analysis_id', wa[0].id).not('concept','is',null)
  if (count > 0) { console.log('SKIP '+key+': already done'); done++; return null }
  const {error} = await db.from('word_meanings').insert(senses.map((s,i) => ({...s, analysis_id: wa[0].id, meaning_type:'etymology', display_order:i+1})))
  if (error) { console.log('ERR '+key+': '+error.message); return null }
  return {total: senses.length, concepts: [...new Set(senses.map(s => s.concept))]}
}
function log(r, key) { if(r){done++;const c=r.concepts;console.log('['+done+'/'+total+'] '+key+' — '+r.total+' sens → '+c.length+' concepts ('+c.join(', ')+') — reste '+(total-done))} }

async function run() {
  let r

  // 1. ldh (لذي) — variante plaisir (skip probable)
  r=await ins('ldh',[
    {sense:'plaisir',concept:'Plaisir/Jouissance',description:"État intérieur de satisfaction face à ce qui est agréable. Le plaisir est permanent au paradis et éphémère en ce monde."},
    {sense:'délice',concept:'Plaisir/Jouissance',description:''},
  ]);log(r,'ldh')

  // 2. hel (هعل) — variante, probablement particule/expression
  r=await ins('hel',[
    {sense:'est-ce que',concept:'Interrogation',description:"Particule qui ouvre une question fermée attendant une réponse par oui ou non. L'interrogation est un acte rationnel qui cherche à confirmer ou infirmer — elle est directionnelle du questionneur vers la réponse."},
    {sense:'certes (hal)',concept:'Interrogation',description:''},
  ]);log(r,'hel')

  // 3. qntṛ (قنطر) — quintar, grande quantité, trésor
  r=await ins('qnt\u1E5B',[
    {sense:'grande quantité (qintar)',concept:'Richesse/Abondance',description:"Mesure de poids très importante représentant une fortune considérable. Le quintar est permanent dans sa valeur — il symbolise l'accumulation massive de richesses. C'est la quantité qui dépasse le besoin ordinaire."},
    {sense:'trésor',concept:'Richesse/Abondance',description:''},
    {sense:'fortune',concept:'Richesse/Abondance',description:''},
  ]);log(r,'qnt\u1E5B')

  // 4. khyl (خيل) — variante de khl (cheval, skip probable)
  r=await ins('khyl',[
    {sense:'cheval',concept:'Cheval/Cavalerie',description:"Animal noble et rapide. Le cheval symbolise la force, la vitesse et la noblesse — il porte son cavalier au combat."},
    {sense:'cavalerie',concept:'Cheval/Cavalerie',description:''},
    {sense:'imaginer',concept:'Imagination/Apparence',description:"Acte de se représenter ce qui n'est pas. L'imagination peut tromper en faisant paraître réel ce qui ne l'est pas."},
  ]);log(r,'khyl')

  // 5. khts (خصص) — être spécifique, réserver, privilégier
  r=await ins('khts',[
    {sense:'être spécifique',concept:'Spécificité/Réservation',description:"État de ce qui est propre à un seul et ne se partage pas avec les autres. La spécificité est permanente dans ce qui est réservé — elle distingue et isole du commun. Réserver c'est mettre à part pour un usage exclusif."},
    {sense:'réserver',concept:'Spécificité/Réservation',description:''},
    {sense:'privilégier',concept:'Spécificité/Réservation',description:''},
  ]);log(r,'khts')

  // 6. qntr (قنطر) — variante quintar
  r=await ins('qntr',[
    {sense:'quintar',concept:'Richesse/Abondance',description:"Mesure de grande quantité de richesse. Le quintar représente une fortune considérable — c'est l'accumulation massive."},
    {sense:'grande quantité',concept:'Richesse/Abondance',description:''},
  ]);log(r,'qntr')

  // 7. dwm (دوم) — durer, être permanent, continuer
  r=await ins('dwm',[
    {sense:'durer',concept:'Permanence/Continuité',description:"État de ce qui ne s'arrête pas et continue dans le temps. La permanence est l'état fondamental de ce qui persiste — elle est l'absence de fin et de changement. Ce qui dure traverse le temps sans se corrompre."},
    {sense:'être permanent',concept:'Permanence/Continuité',description:''},
    {sense:'continuer',concept:'Permanence/Continuité',description:''},
    {sense:'toujours',concept:'Permanence/Continuité',description:''},
  ]);log(r,'dwm')

  // 8. kðb (كذب) — variante mentir
  r=await ins('k\u00F0b',[
    {sense:'mentir',concept:'Mensonge/Fausseté',description:"Acte de dire ce qui est contraire à la réalité. Le mensonge sort du menteur et atteint celui qui l'écoute — directionnel et trompeur."},
    {sense:'démentir',concept:'Déni/Rejet',description:"Acte de déclarer faux ce que quelqu'un affirme. Le déni rejette la parole de l'autre."},
  ]);log(r,'k\u00F0b')

  // 9. ḏwr (ذور) — variante dispersion
  r=await ins('\u1E0Fwr',[
    {sense:'disperser',concept:'Dispersion/Éparpillement',description:"Acte de répandre dans toutes les directions. Multidirectionnel et irréversible."},
    {sense:'progéniture',concept:'Descendance',description:"Les enfants qui se multiplient à travers les générations."},
    {sense:'atome',concept:'Petitesse',description:"La plus petite chose perceptible."},
  ]);log(r,'\u1E0Fwr')

  // 10. lsn (لسن) — langue, langage, éloquence
  r=await ins('lsn',[
    {sense:'langue',concept:'Langue/Parole',description:"L'organe de la parole et le système de communication d'un peuple. La langue est permanente dans sa fonction — elle est le moyen par lequel la pensée devient parole et le moyen par lequel les gens se comprennent. Chaque peuple a sa langue qui porte sa culture."},
    {sense:'langage',concept:'Langue/Parole',description:''},
    {sense:'éloquence',concept:'Langue/Parole',description:''},
    {sense:'parole',concept:'Langue/Parole',description:''},
  ]);log(r,'lsn')

  console.log('\n=== Batch 192 terminé — '+done+'/2321 ===')
}
run().catch(e=>{console.error('ERR:',e);process.exit(1)})
