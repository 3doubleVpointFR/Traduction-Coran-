const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 1268, total = 2321

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

  // 1. ajl (أجل) — terme, délai, échéance, à cause de
  r=await ins('ajl',[
    {sense:'terme',concept:'Terme/Échéance',description:"Le moment fixé par avance où quelque chose prend fin. Le terme est permanent dans sa fixation — il ne change pas une fois décrété. L'échéance est la ligne d'arrivée du temps accordé."},
    {sense:'délai',concept:'Terme/Échéance',description:''},
    {sense:'échéance',concept:'Terme/Échéance',description:''},
    {sense:'à cause de',concept:'Causalité',description:"Particule qui indique la raison d'une action. La causalité lie un acte à son motif — c'est directionnel de la cause vers l'effet."},
    {sense:'oui (ajal)',concept:'Divers',description:'Particule d\'affirmation — oui, certes.'},
  ]);log(r,'ajl')

  // 2. amsk (أمسك) — retenir, saisir, s'abstenir
  r=await ins('amsk',[
    {sense:'retenir',concept:'Rétention/Saisie',description:"Acte de garder en main ce qu'on a et de ne pas le lâcher. La rétention sort de celui qui retient et s'exerce sur ce qui est retenu — c'est directionnel et peut être permanent. Retenir c'est empêcher la sortie, garder ce qui pourrait partir."},
    {sense:'saisir',concept:'Rétention/Saisie',description:''},
    {sense:'s\'abstenir',concept:'Rétention/Saisie',description:''},
    {sense:'garder (une épouse)',concept:'Rétention/Saisie',description:''},
  ]);log(r,'amsk')

  // 3. srh (سرح) — laisser aller, libérer, paître
  r=await ins('srh',[
    {sense:'laisser aller',concept:'Libération/Renvoi',description:"Acte de relâcher ce qu'on retenait, de laisser partir en liberté. La libération sort de celui qui libère et atteint celui qui est libéré — c'est directionnel et ponctuel. Laisser aller c'est ouvrir la main et permettre le départ."},
    {sense:'libérer (une épouse)',concept:'Libération/Renvoi',description:''},
    {sense:'renvoyer avec bonté',concept:'Libération/Renvoi',description:''},
    {sense:'paître',concept:'Divers',description:'Laisser le bétail aller librement au pâturage.'},
  ]);log(r,'srh')

  // 4. qad () — particule d'accomplissement
  r=await ins('qad',[
    {sense:'certes (accompli)',concept:'Accomplissement/Certitude',description:"Particule qui confirme qu'un acte a bien été accompli ou est sur le point de l'être. Le qad transforme le possible en réalisé — il pose une certitude sur l'achèvement. C'est un marqueur temporel qui fixe l'événement dans le passé accompli."},
    {sense:'déjà',concept:'Accomplissement/Certitude',description:''},
    {sense:'peut-être (avec inaccompli)',concept:'Accomplissement/Certitude',description:''},
  ]);log(r,'qad')

  // 5. ðkr (ذكر) — mentionner, se souvenir, rappel, mâle
  r=await ins('\u00F0kr',[
    {sense:'mentionner',concept:'Mention/Rappel',description:"Acte extérieur de prononcer le nom de quelqu'un ou de quelque chose pour le rendre présent dans les esprits. La mention sort du locuteur et atteint les auditeurs — c'est directionnel. Le dhikr est le rappel permanent de Dieu par la langue et le cœur."},
    {sense:'se souvenir',concept:'Mention/Rappel',description:''},
    {sense:'rappel (dhikr)',concept:'Mention/Rappel',description:''},
    {sense:'mâle',concept:'Masculin/Mâle',description:"Le genre qui féconde et engendre activement. Le mâle est permanent dans sa nature — il est le principe actif de la génération."},
    {sense:'masculin',concept:'Masculin/Mâle',description:''},
  ]);log(r,'\u00F0kr')

  // 6. aanna () — particule de certitude/que
  r=await ins('aanna',[
    {sense:'que (certitude)',concept:'Certitude/Assertion',description:"Particule qui introduit une proposition avec force de certitude. Le anna affirme avec conviction ce qui suit — c'est un acte rationnel de déclaration qui pose une vérité indiscutable."},
    {sense:'certes',concept:'Certitude/Assertion',description:''},
  ]);log(r,'aanna')

  // 7. msk (مسك) — tenir, saisir, musc, retenir
  r=await ins('msk',[
    {sense:'tenir',concept:'Saisie/Rétention',description:"Acte de garder quelque chose dans sa main ou sous son contrôle. La saisie est directionnelle — elle part de celui qui tient et s'exerce sur ce qui est tenu. Tenir c'est ne pas lâcher, maintenir en place de façon permanente."},
    {sense:'saisir',concept:'Saisie/Rétention',description:''},
    {sense:'retenir',concept:'Saisie/Rétention',description:''},
    {sense:'musc',concept:'Parfum',description:"Substance odorante précieuse et permanente. Le musc est le parfum le plus noble — il persiste longtemps et s'attache à ce qu'il touche."},
  ]);log(r,'msk')

  // 8. ḫwf (خوف) — craindre, avoir peur
  r=await ins('\u1E2Bwf',[
    {sense:'craindre',concept:'Crainte/Peur',description:"État intérieur d'appréhension face à un danger réel ou perçu. La crainte reste dans celui qui la ressent — c'est un état qui peut être ponctuel (un sursaut) ou permanent (une anxiété). La peur est un signal intérieur qui avertit du danger et pousse à l'évitement."},
    {sense:'avoir peur',concept:'Crainte/Peur',description:''},
    {sense:'redouter',concept:'Crainte/Peur',description:''},
    {sense:'faire peur',concept:'Crainte/Peur',description:''},
  ]);log(r,'\u1E2Bwf')

  // 9. ḫft (خفت) — baisser la voix, murmurer, mourir
  r=await ins('\u1E2Bft',[
    {sense:'baisser la voix',concept:'Discrétion/Silence',description:"Acte de réduire le volume de sa parole pour ne pas être entendu de tous. La discrétion est un choix intérieur qui contrôle ce qui sort — c'est directionnel vers l'intérieur. Baisser la voix c'est retenir sa parole entre soi et l'interlocuteur."},
    {sense:'murmurer',concept:'Discrétion/Silence',description:''},
    {sense:'parler bas',concept:'Discrétion/Silence',description:''},
    {sense:'mourir',concept:'Divers',description:'S\'éteindre — la voix qui baisse jusqu\'au silence définitif.'},
  ]);log(r,'\u1E2Bft')

  // 10. lla (لوي) — tordre, détourner, insister
  r=await ins('lla',[
    {sense:'tordre',concept:'Torsion/Détournement',description:"Acte extérieur de faire changer de direction par la force, de courber ce qui était droit. La torsion sort de celui qui tord et atteint ce qui est tordu — c'est directionnel et déforme. Tordre la langue c'est déformer la parole."},
    {sense:'détourner',concept:'Torsion/Détournement',description:''},
    {sense:'tordre la langue',concept:'Torsion/Détournement',description:''},
    {sense:'insister',concept:'Divers',description:'Revenir sans cesse sur la même demande — lié à la torsion répétée.'},
  ]);log(r,'lla')

  console.log('\n=== Batch 168 terminé — '+done+'/2321 ===')
}
run().catch(e=>{console.error('ERR:',e);process.exit(1)})
