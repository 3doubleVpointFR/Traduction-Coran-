const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 1228, total = 2321

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

  // 1. kff (كفف) — cesser, s'abstenir, paume, suffire
  r=await ins('kff',[
    {sense:'cesser',concept:'Arrêt/Abstention',description:"Acte de mettre fin à une action en cours. L'arrêt est un acte intérieur de la volonté qui retient — c'est directionnel vers soi-même. Cesser c'est retenir sa main et ne plus agir. C'est ponctuel dans la décision mais crée un état permanent d'inaction."},
    {sense:'s\'abstenir',concept:'Arrêt/Abstention',description:''},
    {sense:'retenir',concept:'Arrêt/Abstention',description:''},
    {sense:'paume de la main',concept:'Main/Contenance',description:"La face intérieure de la main qui saisit et retient. La paume est le creux permanent qui contient ce qu'on tient."},
    {sense:'suffire',concept:'Divers',description:'Ce qui comble le besoin — sens lié à la main qui contient assez.'},
  ]);log(r,'kff')

  // 2. xtw (خطو) — variante de khatw (déjà fait, skip probable)
  r=await ins('xtw',[
    {sense:'faire un pas',concept:'Marche/Progression',description:"Acte élémentaire du déplacement — avancer un pied après l'autre. Le pas est directionnel et ponctuel, chaque pas contribue à un mouvement permanent vers la destination."},
    {sense:'enjamber',concept:'Marche/Progression',description:''},
    {sense:'pas',concept:'Marche/Progression',description:''},
  ]);log(r,'xtw')

  // 3. zyn (زين) — embellir, ornement, beauté
  r=await ins('zyn',[
    {sense:'embellir',concept:'Beauté/Ornement',description:"Acte extérieur de rendre beau ce qui était ordinaire, d'ajouter de l'éclat. L'embellissement sort de celui qui orne et atteint ce qui est orné — c'est directionnel et transformateur. La beauté est un état permanent une fois créée — elle attire le regard et séduit l'âme."},
    {sense:'orner',concept:'Beauté/Ornement',description:''},
    {sense:'ornement',concept:'Beauté/Ornement',description:''},
    {sense:'beauté',concept:'Beauté/Ornement',description:''},
    {sense:'faire paraître beau',concept:'Séduction/Illusion',description:"Acte de présenter quelque chose sous un jour attrayant qui peut être trompeur. La séduction sort de celui qui embellit et atteint celui qui est séduit — c'est directionnel et peut être une illusion."},
  ]);log(r,'zyn')

  // 4. skh (سخر) — variante de sxr (déjà fait, skip probable)
  r=await ins('skh',[
    {sense:'se moquer',concept:'Moquerie/Dérision',description:"Acte extérieur de ridiculiser quelqu'un par le rire. La moquerie sort du moqueur et atteint le moqué — c'est directionnel et dégradant."},
    {sense:'asservir',concept:'Assujettissement',description:"Acte de mettre quelque chose au service sans rétribution. L'assujettissement est directionnel et permanent — ce qui est asservi sert sans pouvoir refuser."},
  ]);log(r,'skh')

  // 5. nḏr (نذر) — avertir, vœu, consacrer
  r=await ins('n\u1E0Fr',[
    {sense:'avertir',concept:'Avertissement/Menace',description:"Acte extérieur de prévenir quelqu'un d'un danger imminent. L'avertissement sort de l'avertisseur et atteint celui qui est averti — c'est directionnel et urgent. L'avertisseur est celui qui voit le danger avant les autres et le signale."},
    {sense:'mettre en garde',concept:'Avertissement/Menace',description:''},
    {sense:'avertisseur (nadhir)',concept:'Avertissement/Menace',description:''},
    {sense:'faire un vœu',concept:'Vœu/Consécration',description:"Acte intérieur de s'engager envers Dieu à accomplir quelque chose. Le vœu est un engagement ponctuel qui crée une obligation permanente — il lie celui qui le fait à sa promesse."},
    {sense:'consacrer',concept:'Vœu/Consécration',description:''},
  ]);log(r,'n\u1E0Fr')

  // 6. aḏn (أذن) — oreille, permettre, écouter, annoncer
  r=await ins('a\u1E0Fn',[
    {sense:'oreille',concept:'Écoute/Perception auditive',description:"Organe qui reçoit les sons et les transmet à l'esprit. L'oreille est le récepteur permanent de la parole — elle est la porte d'entrée du savoir par l'audition. Écouter c'est ouvrir son oreille à ce qui vient de l'extérieur."},
    {sense:'écouter',concept:'Écoute/Perception auditive',description:''},
    {sense:'permettre',concept:'Permission/Autorisation',description:"Acte de donner la liberté de faire quelque chose. La permission sort de celui qui autorise et atteint celui qui est autorisé — c'est directionnel et ouvre une porte qui était fermée."},
    {sense:'autoriser',concept:'Permission/Autorisation',description:''},
    {sense:'annoncer (adhan)',concept:'Annonce',description:"Acte d'élever la voix pour informer tous ceux qui entendent. L'annonce est multidirectionnelle — elle se répand dans toutes les directions pour atteindre toutes les oreilles."},
    {sense:'appel à la prière',concept:'Annonce',description:''},
  ]);log(r,'a\u1E0Fn')

  // 7. krh (كره) — détester, être répugnant, contraindre
  r=await ins('krh',[
    {sense:'détester',concept:'Aversion/Répugnance',description:"État intérieur de rejet profond face à ce qui déplaît. L'aversion est permanente chez celui qui la ressent — elle repousse ce qui est détesté. C'est un jugement négatif de l'âme qui refuse ce qu'elle trouve laid ou mauvais."},
    {sense:'trouver répugnant',concept:'Aversion/Répugnance',description:''},
    {sense:'haïr',concept:'Aversion/Répugnance',description:''},
    {sense:'contraindre',concept:'Contrainte/Force',description:"Acte extérieur de forcer quelqu'un à faire ce qu'il ne veut pas. La contrainte sort du contraignant et atteint le contraint — c'est directionnel et s'oppose à la volonté de l'autre."},
    {sense:'forcer',concept:'Contrainte/Force',description:''},
  ]);log(r,'krh')

  // 8. shrr (شرر) — mal, être mauvais, méchanceté
  r=await ins('shrr',[
    {sense:'mal',concept:'Mal/Méchanceté',description:"Ce qui nuit et détruit, l'opposé du bien. Le mal est un état permanent de ce qui est mauvais — il corrompt tout ce qu'il touche. Le mal peut être intérieur (intention mauvaise) ou extérieur (acte nuisible)."},
    {sense:'être mauvais',concept:'Mal/Méchanceté',description:''},
    {sense:'méchanceté',concept:'Mal/Méchanceté',description:''},
    {sense:'étincelle',concept:'Divers',description:'Petite particule de feu qui jaillit — sens concret lié au feu.'},
  ]);log(r,'shrr')

  // 9. zlzl (زلزل) — trembler, séisme, ébranler
  r=await ins('zlzl',[
    {sense:'trembler de terre',concept:'Séisme/Ébranlement',description:"Mouvement violent et soudain de la terre qui déstabilise tout ce qui est dessus. Le séisme est un événement ponctuel et dévastateur — il vient de la terre elle-même et atteint tout ce qui repose sur elle. L'ébranlement détruit les fondations et révèle la fragilité de ce qu'on croyait stable."},
    {sense:'séisme',concept:'Séisme/Ébranlement',description:''},
    {sense:'ébranler',concept:'Séisme/Ébranlement',description:''},
    {sense:'secouer violemment',concept:'Séisme/Ébranlement',description:''},
  ]);log(r,'zlzl')

  // 10. mty (متى) — quand, interrogation temporelle
  r=await ins('mty',[
    {sense:'quand',concept:'Interrogation temporelle',description:"Particule qui questionne sur le moment précis d'un événement. L'interrogation temporelle cherche à situer dans le temps — elle est directionnelle du présent vers le futur ou le passé. Quand demande la réponse du temps à l'impatience de celui qui attend."},
    {sense:'à quel moment',concept:'Interrogation temporelle',description:''},
  ]);log(r,'mty')

  console.log('\n=== Batch 164 terminé — '+done+'/2321 ===')
}
run().catch(e=>{console.error('ERR:',e);process.exit(1)})
