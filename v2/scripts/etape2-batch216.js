const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 1746, total = 2321

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

  r=await ins('lima',[
    {sense:'pourquoi',concept:'Interrogation causale',description:"Particule qui demande la raison d'une chose. L'interrogation causale cherche le motif — elle est directionnelle vers la cause cachée."},
    {sense:'pour quelle raison',concept:'Interrogation causale',description:''},
  ]);log(r,'lima')

  r=await ins('lawla',[
    {sense:'si ce n\'était pas',concept:'Condition irréelle/Exhortation',description:"Particule qui exprime une condition dont l'absence a permis le résultat. Le lawla ouvre un monde hypothétique — si cette chose n'était pas, le résultat serait autre. C'est aussi une exhortation : pourquoi ne fais-tu pas ceci ?"},
    {sense:'pourquoi ne pas',concept:'Condition irréelle/Exhortation',description:''},
  ]);log(r,'lawla')

  r=await ins('liman',[
    {sense:'pour qui',concept:'Interrogation/Attribution',description:"Particule composée qui demande le destinataire. L'interrogation d'attribution cherche à qui revient la chose — directionnelle vers le bénéficiaire."},
    {sense:'à qui',concept:'Interrogation/Attribution',description:''},
  ]);log(r,'liman')

  r=await ins('wtl',[
    {sense:'périr',concept:'Destruction/Malédiction',description:"Particule d'imprécation qui souhaite la destruction. Le wayl est le malheur qui tombe sur celui qui le mérite — c'est directionnel et définitif."},
    {sense:'malheur à',concept:'Destruction/Malédiction',description:''},
  ]);log(r,'wtl')

  r=await ins('athr',[
    {sense:'trace',concept:'Trace/Empreinte',description:"La marque laissée par le passage de quelqu'un ou quelque chose. La trace est permanente — elle survit à ce qui l'a causée. L'athar est le signe visible d'une action passée qui permet de remonter à l'origine."},
    {sense:'empreinte',concept:'Trace/Empreinte',description:''},
    {sense:'relique',concept:'Trace/Empreinte',description:''},
    {sense:'préférer',concept:'Divers',description:'Mettre en avant — choisir en donnant la trace de sa préférence.'},
  ]);log(r,'athr')

  r=await ins('inn',[
    {sense:'certes',concept:'Certitude/Emphase',description:"Particule d'assertion forte. Le inna affirme avec conviction absolue ce qui suit."},
    {sense:'en vérité',concept:'Certitude/Emphase',description:''},
  ]);log(r,'inn')

  r=await ins('nas',[
    {sense:'gens',concept:'Humanité/Peuple',description:"L'ensemble des êtres humains. Les gens forment le collectif permanent de l'humanité — le tissu social dans lequel chaque individu existe."},
    {sense:'humanité',concept:'Humanité/Peuple',description:''},
    {sense:'peuple',concept:'Humanité/Peuple',description:''},
  ]);log(r,'nas')

  r=await ins('hmn',[
    {sense:'gardien',concept:'Gardiennage/Surveillance',description:"Celui qui veille sur ce qui lui est confié et le protège. Le muhaymin est le gardien permanent — il surveille et préserve avec autorité. C'est un attribut de domination bienveillante."},
    {sense:'protecteur',concept:'Gardiennage/Surveillance',description:''},
    {sense:'dominant',concept:'Gardiennage/Surveillance',description:''},
  ]);log(r,'hmn')

  r=await ins('shre',[
    {sense:'légiférer',concept:'Législation/Voie légale',description:"Acte de poser des lois et des règles pour guider la vie des gens. La législation sort du législateur et atteint les assujettis — c'est directionnel et crée un cadre permanent. La sharia est la voie tracée par Dieu pour organiser la vie humaine."},
    {sense:'voie légale (sharia)',concept:'Législation/Voie légale',description:''},
    {sense:'chemin',concept:'Législation/Voie légale',description:''},
  ]);log(r,'shre')

  r=await ins('\u1E2Blf',[
    {sense:'succéder',concept:'Succession/Remplacement',description:"Acte de prendre la place de celui qui est parti. La succession est directionnelle — le nouveau remplace l'ancien. C'est un mouvement permanent dans le temps."},
    {sense:'être derrière',concept:'Position/Arrière',description:"État de ce qui vient après dans l'espace. L'arrière est permanent dans sa position."},
    {sense:'califat',concept:'Succession/Remplacement',description:''},
  ]);log(r,'\u1E2Blf')

  console.log('\n=== Batch 216 terminé — '+done+'/2321 ===')
}
run().catch(e=>{console.error('ERR:',e);process.exit(1)})
