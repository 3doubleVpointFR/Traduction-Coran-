const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 1608, total = 2321

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

  r=await ins('rhy',[
    {sense:'meule',concept:'Meule/Broyage',description:"Pierre ronde qui tourne pour broyer le grain. La meule est un instrument permanent de transformation — elle réduit le dur en poudre par la rotation. La guerre est comme la meule qui broie les combattants."},
    {sense:'broyer',concept:'Meule/Broyage',description:''},
  ]);log(r,'rhy')

  r=await ins('lhq',[
    {sense:'rejoindre',concept:'Jonction/Rattrapage',description:"Acte d'atteindre celui qui est devant en comblant la distance. La jonction est directionnelle — elle part de celui qui rattrape et atteint celui qui est devant. Rejoindre c'est éliminer l'écart qui séparait."},
    {sense:'rattraper',concept:'Jonction/Rattrapage',description:''},
    {sense:'atteindre',concept:'Jonction/Rattrapage',description:''},
  ]);log(r,'lhq')

  r=await ins('fwh',[
    {sense:'bouche',concept:'Bouche/Parole',description:"L'ouverture par laquelle sortent la parole et entrent la nourriture. La bouche est le lieu de la parole et de l'alimentation — permanente dans sa double fonction."},
    {sense:'orifice',concept:'Bouche/Parole',description:''},
  ]);log(r,'fwh')

  r=await ins('nq\u1E0F',[
    {sense:'sauver',concept:'Sauvetage/Délivrance',description:"Acte extérieur de tirer quelqu'un d'un danger mortel. Le sauvetage sort du sauveur et atteint celui qui est en péril — c'est directionnel et ponctuel. Sauver c'est arracher à la mort ou à la destruction celui qui était sur le point de périr."},
    {sense:'délivrer',concept:'Sauvetage/Délivrance',description:''},
    {sense:'secourir',concept:'Sauvetage/Délivrance',description:''},
  ]);log(r,'nq\u1E0F')

  r=await ins('mly',[
    {sense:'remplir',concept:'Plénitude/Remplissage',description:"Acte de combler un espace jusqu'à sa capacité maximale. Le remplissage est directionnel de l'extérieur vers l'intérieur — il crée un état de plénitude."},
    {sense:'être plein',concept:'Plénitude/Remplissage',description:''},
    {sense:'dicter',concept:'Divers',description:'Remplir la page de mots — sens d\'écrire sous dictée.'},
  ]);log(r,'mly')

  r=await ins('aalla',[
    {sense:'que ne pas',concept:'Interrogation/Exhortation',description:"Particule composée qui exhorte ou reproche. L'exhortation pousse l'autre à agir — c'est directionnel du locuteur vers l'interlocuteur. Alla combine l'interrogation et la négation pour créer un reproche doux."},
    {sense:'pourquoi ne pas',concept:'Interrogation/Exhortation',description:''},
  ]);log(r,'aalla')

  r=await ins('hzz',[
    {sense:'chance',concept:'Part/Chance',description:"Ce qui est attribué à chacun comme part de destin ou de bien. La chance est un lot permanent qui revient à celui à qui il est destiné — le hazz est la portion que chacun reçoit du sort."},
    {sense:'part',concept:'Part/Chance',description:''},
    {sense:'lot',concept:'Part/Chance',description:''},
  ]);log(r,'hzz')

  r=await ins('bkhl',[
    {sense:'être avare',concept:'Avarice/Rétention',description:"État intérieur de celui qui retient ce qu'il a et refuse de le partager malgré sa capacité. L'avarice est permanente chez l'avare — elle empêche la générosité et coupe le flux du bien vers les autres. L'avare est celui dont la main est fermée."},
    {sense:'avarice',concept:'Avarice/Rétention',description:''},
    {sense:'refuser de donner',concept:'Avarice/Rétention',description:''},
  ]);log(r,'bkhl')

  r=await ins('\u0161rr',[
    {sense:'mal',concept:'Mal/Méchanceté',description:"Ce qui nuit et détruit, l'opposé du bien. Le mal est permanent dans ce qui est mauvais — il corrompt tout ce qu'il touche."},
    {sense:'être mauvais',concept:'Mal/Méchanceté',description:''},
    {sense:'étincelle',concept:'Divers',description:'Particule de feu qui jaillit.'},
  ]);log(r,'\u0161rr')

  r=await ins('dhhr',[
    {sense:'dos',concept:'Dos/Apparence',description:"La partie postérieure du corps ou la face visible d'une chose. Le dos est permanent dans sa position — il est ce qui est tourné vers l'extérieur. Le dhahr est aussi le temps qui passe, le dos du destin."},
    {sense:'temps (dahr)',concept:'Temps/Destin',description:"La durée indéfinie qui s'écoule et emporte tout. Le temps est permanent et irréversible — il avance sans jamais revenir."},
    {sense:'apparaître',concept:'Divers',description:'Devenir visible — le dos de la chose qui se montre.'},
  ]);log(r,'dhhr')

  console.log('\n=== Batch 202 terminé — '+done+'/2321 ===')
}
run().catch(e=>{console.error('ERR:',e);process.exit(1)})
