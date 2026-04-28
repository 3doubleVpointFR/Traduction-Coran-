const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 1734, total = 2321

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

  console.log('SKIP eḍb: already done (4th time)')

  r=await ins('hy',[
    {sense:'elle',concept:'Pronom/Féminin',description:"Pronom de la troisième personne féminine. Désigne l'absente dans le discours."},
  ]);log(r,'hy')

  r=await ins('sht',[
    {sense:'gain illicite',concept:'Illicite/Corruption',description:"Revenu obtenu par des moyens interdits — la corruption du juge, le prix du faux témoignage. Le suht est le gain qui détruit la dignité de celui qui le prend. C'est un revenu permanent dans sa souillure."},
    {sense:'corruption',concept:'Illicite/Corruption',description:''},
    {sense:'destruction',concept:'Illicite/Corruption',description:''},
  ]);log(r,'sht')

  r=await ins('anf',[
    {sense:'nez',concept:'Nez/Orgueil',description:"L'organe du visage qui s'avance en premier. Le nez symbolise l'honneur et l'orgueil — celui dont le nez est dans la poussière est humilié. Le anf est ce qui est en avant, le premier, le soi-même."},
    {sense:'soi-même',concept:'Nez/Orgueil',description:''},
    {sense:'orgueil',concept:'Nez/Orgueil',description:''},
  ]);log(r,'anf')

  r=await ins('a\u00F0n',[
    {sense:'oreille',concept:'Écoute/Permission',description:"Organe qui reçoit les sons. L'oreille est la porte du savoir par l'audition."},
    {sense:'permettre',concept:'Écoute/Permission',description:''},
    {sense:'appel à la prière',concept:'Écoute/Permission',description:''},
  ]);log(r,'a\u00F0n')

  r=await ins('jrh',[
    {sense:'blesser',concept:'Blessure/Acquisition',description:"Acte extérieur d'ouvrir la chair par un instrument tranchant. La blessure sort du blesseur et atteint le blessé — directionnelle et douloureuse."},
    {sense:'acquérir',concept:'Blessure/Acquisition',description:''},
    {sense:'gagner (jawarih)',concept:'Blessure/Acquisition',description:''},
  ]);log(r,'jrh')

  r=await ins('fahuwa',[
    {sense:'alors il est',concept:'Conséquence/Pronom',description:"Particule de conséquence suivie du pronom masculin. Lie un résultat à ce qui précède en désignant le sujet."},
  ]);log(r,'fahuwa')

  r=await ins('aulaaika',[
    {sense:'ceux-là',concept:'Démonstratif/Distance pluriel',description:"Pronom démonstratif qui désigne un groupe éloigné. La désignation est directionnelle vers le groupe distant — ceux-là sont séparés de celui qui parle."},
  ]);log(r,'aulaaika')

  r=await ins('hbr',[
    {sense:'savant religieux',concept:'Savoir/Érudition',description:"Celui qui possède une connaissance profonde des textes sacrés. Le hibr est le savant dont le savoir est permanent et reconnu — il est la référence de sa communauté en matière religieuse."},
    {sense:'encre',concept:'Écriture',description:"Substance qui fixe la parole sur le papier. L'encre est le moyen permanent de la mémoire écrite."},
    {sense:'réjouir',concept:'Divers',description:'Rendre heureux — sens de faire briller le visage.'},
  ]);log(r,'hbr')

  r=await ins('hdth',[
    {sense:'parler',concept:'Narration/Récit',description:"Acte de raconter un événement ou une histoire. La narration sort du narrateur et atteint l'auditeur — directionnelle et informatrice. Le hadith est la parole transmise."},
    {sense:'raconter',concept:'Narration/Récit',description:''},
    {sense:'événement nouveau',concept:'Nouveauté',description:"Ce qui arrive et n'existait pas avant. La nouveauté est ponctuelle dans son apparition mais crée un état permanent."},
    {sense:'nouveau',concept:'Nouveauté',description:''},
  ]);log(r,'hdth')

  console.log('\n=== Batch 215 terminé — '+done+'/2321 ===')
}
run().catch(e=>{console.error('ERR:',e);process.exit(1)})
