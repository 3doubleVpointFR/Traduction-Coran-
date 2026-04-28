const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 1676, total = 2321

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

  r=await ins("b\u2019d",[
    {sense:'partie',concept:'Partie/Fragment',description:"Un morceau d'un tout. La partie garde la trace du tout dont elle vient."},
    {sense:'certains',concept:'Partie/Fragment',description:''},
  ]);log(r,"b\u2019d")

  // Try alternate key
  const {data: bcheck} = await db.from('word_analyses').select('id,word_key').like('word_key','b%d').eq('root_ar','ب ع ض').limit(1)
  if (bcheck && bcheck[0]) {
    console.log('Found b-d variant: ' + bcheck[0].word_key)
    r=await ins(bcheck[0].word_key,[
      {sense:'partie',concept:'Partie/Fragment',description:"Un morceau d'un tout. La partie garde la trace du tout dont elle vient."},
      {sense:'certains',concept:'Partie/Fragment',description:''},
    ]);log(r,bcheck[0].word_key)
  }

  r=await ins('qwt',[
    {sense:'nourriture',concept:'Subsistance/Alimentation',description:"Ce qui maintient le corps en vie et lui donne sa force. La nourriture est la source permanente de l'énergie vitale — sans elle le corps s'affaiblit et meurt. Le qut est le minimum vital dont l'homme a besoin."},
    {sense:'subsistance',concept:'Subsistance/Alimentation',description:''},
    {sense:'force',concept:'Subsistance/Alimentation',description:''},
  ]);log(r,'qwt')

  r=await ins('shtn',[
    {sense:'diable',concept:'Égarement/Rébellion',description:"L'être éloigné de la miséricorde qui pousse les autres à s'éloigner aussi. Le shaytan est permanent dans sa rébellion — son action est directionnelle vers ses victimes."},
    {sense:'être rebelle',concept:'Égarement/Rébellion',description:''},
  ]);log(r,'shtn')

  r=await ins('kwl',[
    {sense:'nourrir',concept:'Subsistance/Entretien',description:"Acte de fournir la nourriture à quelqu'un. L'entretien sort du pourvoyeur et atteint celui qui est nourri — c'est directionnel et vital."},
    {sense:'prendre en charge',concept:'Subsistance/Entretien',description:''},
    {sense:'représentant',concept:'Divers',description:'Celui qui est chargé des affaires d\'un autre.'},
  ]);log(r,'kwl')

  r=await ins('fyt',[
    {sense:'groupe',concept:'Groupe/Faction',description:"Ensemble de personnes unies par un but commun. Le groupe agit comme un seul corps."},
    {sense:'troupe',concept:'Groupe/Faction',description:''},
  ]);log(r,'fyt')

  r=await ins('rks',[
    {sense:'renverser',concept:'Renversement/Régression',description:"Acte de retourner quelqu'un à son état antérieur de perdition. Le renversement sort de la cause et atteint celui qui est renversé — c'est directionnel et punitif. Être renvoyé en arrière c'est perdre tout ce qu'on avait gagné."},
    {sense:'faire régresser',concept:'Renversement/Régression',description:''},
    {sense:'retourner (au mal)',concept:'Renversement/Régression',description:''},
  ]);log(r,'rks')

  r=await ins('wxd',[
    {sense:'prendre',concept:'Prise/Saisie',description:"Acte de s'emparer de quelque chose. La prise sort de celui qui prend et atteint ce qui est pris — directionnel et ponctuel."},
    {sense:'punir',concept:'Châtiment',description:"Acte de saisir quelqu'un pour le punir — la prise de force qui châtie."},
  ]);log(r,'wxd')

  r=await ins('flm',[
    {sense:'alors ne pas',concept:'Négation/Interrogation rhétorique',description:"Particule composée qui pose une question rhétorique avec étonnement. Le afalam exprime la surprise face à celui qui ne comprend pas malgré les signes — c'est une exhortation déguisée en question."},
    {sense:'est-ce que ne pas',concept:'Négation/Interrogation rhétorique',description:''},
  ]);log(r,'flm')

  r=await ins('ayyh',[
    {sense:'ô (vocatif emphatique)',concept:'Appel/Interpellation',description:"Particule vocative emphatique qui attire l'attention avec force. L'interpellation est directionnelle et insistante — ayyuha désigne celui qui est appelé avec emphase."},
    {sense:'vous (interpellation)',concept:'Appel/Interpellation',description:''},
  ]);log(r,'ayyh')

  r=await ins('inna',[
    {sense:'certes',concept:'Certitude/Emphase',description:"Particule qui renforce l'assertion et pose une vérité avec conviction absolue. Le inna affirme avec force — c'est un acte rationnel de déclaration qui ne laisse pas de place au doute."},
    {sense:'en vérité',concept:'Certitude/Emphase',description:''},
  ]);log(r,'inna')

  console.log('\n=== Batch 209 terminé — '+done+'/2321 ===')
}
run().catch(e=>{console.error('ERR:',e);process.exit(1)})
