const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 1695, total = 2321

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

  // b'd — try with unicode smart quote
  r=await ins("b\u2018d",[
    {sense:'partie',concept:'Partie/Fragment',description:"Un morceau d'un tout. La partie est permanente dans son existence séparée."},
    {sense:'certains',concept:'Partie/Fragment',description:''},
  ]);log(r,"b\u2018d")

  r=await ins('qsr',[
    {sense:'être court',concept:'Raccourcissement/Limitation',description:"État de ce qui n'atteint pas la mesure complète. La brièveté est un état permanent de ce qui manque de longueur — elle limite la portée et réduit l'étendue. Au figuré, le qasr est l'incapacité d'atteindre le but."},
    {sense:'raccourcir',concept:'Raccourcissement/Limitation',description:''},
    {sense:'confiner',concept:'Raccourcissement/Limitation',description:''},
    {sense:'palais (qasr)',concept:'Édifice/Forteresse',description:"Bâtiment fortifié et imposant. Le palais est permanent dans sa structure — il abrite le pouvoir et protège ses habitants."},
  ]);log(r,'qsr')

  r=await ins('wra',[
    {sense:'derrière',concept:'Arrière/Au-delà',description:"Ce qui est après ou derrière. L'arrière est ce qui n'est pas visible de face — il est permanent dans sa position. Le wara peut signifier ce qui est au-delà du visible."},
    {sense:'au-delà',concept:'Arrière/Au-delà',description:''},
    {sense:'descendance',concept:'Divers',description:'Ce qui vient après — les enfants comme suite.'},
  ]);log(r,'wra')

  r=await ins('khry',[
    {sense:'sortir (déchet)',concept:'Sortie/Excrétion',description:"Acte d'expulser ce qui est inutile ou nuisible du corps. L'excrétion est directionnelle de l'intérieur vers l'extérieur — elle évacue ce dont le corps n'a plus besoin."},
    {sense:'dépenser',concept:'Sortie/Excrétion',description:''},
  ]);log(r,'khry')

  r=await ins('kh\u1E0F',[
    {sense:'prendre',concept:'Prise/Saisie',description:"Acte de s'emparer de quelque chose. La prise est directionnelle — elle sort de celui qui prend et atteint ce qui est pris."},
    {sense:'saisir',concept:'Prise/Saisie',description:''},
  ]);log(r,'kh\u1E0F')

  r=await ins('rmy',[
    {sense:'lancer',concept:'Lancement/Jet',description:"Acte extérieur de projeter quelque chose avec force vers une cible. Le lancement sort du lanceur et atteint la cible — c'est directionnel et ponctuel. Lancer c'est envoyer avec la volonté d'atteindre."},
    {sense:'jeter',concept:'Lancement/Jet',description:''},
    {sense:'accuser',concept:'Lancement/Jet',description:''},
    {sense:'tirer (flèche)',concept:'Lancement/Jet',description:''},
  ]);log(r,'rmy')

  r=await ins('kh dh dh',[
    {sense:'prendre',concept:'Prise/Saisie',description:"Acte de s'emparer — directionnel du preneur vers le pris."},
    {sense:'punir',concept:'Châtiment',description:"Saisir pour punir — la prise de force."},
  ]);log(r,'kh dh dh')

  r=await ins('btk',[
    {sense:'couper',concept:'Mutilation/Coupure',description:"Acte de trancher une partie du corps. La mutilation est directionnelle et irréversible — elle sort du bourreau et atteint la victime. Couper les oreilles du bétail est un acte de marquage et de corruption."},
    {sense:'mutiler',concept:'Mutilation/Coupure',description:''},
  ]);log(r,'btk')

  r=await ins('hys',[
    {sense:'dévier',concept:'Déviation/Échappement',description:"Acte de s'écarter de la direction prévue. La déviation est un mouvement latéral qui évite l'obstacle ou fuit le danger — c'est directionnel vers le côté."},
    {sense:'esquiver',concept:'Déviation/Échappement',description:''},
    {sense:'s\'écarter',concept:'Déviation/Échappement',description:''},
  ]);log(r,'hys')

  r=await ins('elq',[
    {sense:'s\'accrocher',concept:'Accrochage/Attachement',description:"Acte de se fixer à quelque chose et de ne pas le lâcher. L'accrochage est directionnel — il part de celui qui s'accroche vers ce à quoi il se fixe. Le alaq est le caillot de sang qui s'accroche à la paroi de l'utérus — le début de la vie."},
    {sense:'caillot de sang (alaq)',concept:'Accrochage/Attachement',description:''},
    {sense:'s\'attacher',concept:'Accrochage/Attachement',description:''},
    {sense:'suspendre',concept:'Divers',description:'Accrocher quelque chose en hauteur.'},
  ]);log(r,'elq')

  console.log('\n=== Batch 211 terminé — '+done+'/2321 ===')
}
run().catch(e=>{console.error('ERR:',e);process.exit(1)})
