const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 1118, total = 2321

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

  // 1. y h d (يهد) — guider, juif, judaïsme, se repentir
  r=await ins('y h d',[
    {sense:'juif',concept:'Judaïsme/Peuple',description:"Celui qui appartient au peuple d'Israël et suit la religion de Moïse. Le judaïsme est une identité permanente qui lie un peuple à une alliance et à une terre. C'est à la fois une appartenance religieuse et ethnique."},
    {sense:'judaïsme',concept:'Judaïsme/Peuple',description:''},
    {sense:'se repentir',concept:'Repentir/Retour',description:"Acte intérieur de revenir vers Dieu après s'être éloigné. Le repentir est un mouvement de l'âme qui se retourne — c'est directionnel vers Dieu et ponctuel dans l'acte mais transforme l'être de façon permanente."},
    {sense:'revenir à Dieu',concept:'Repentir/Retour',description:''},
  ]);log(r,'y h d')

  // 2. n s r (نصر) — secourir, aider, victoire
  r=await ins('n s r',[
    {sense:'secourir',concept:'Secours/Victoire',description:"Acte extérieur de venir en aide à celui qui est en difficulté contre un adversaire. Le secours sort du secoureur et atteint le secouru — c'est directionnel et ponctuel. Secourir c'est faire pencher la balance en faveur de celui qui était faible."},
    {sense:'aider à vaincre',concept:'Secours/Victoire',description:''},
    {sense:'victoire',concept:'Secours/Victoire',description:''},
    {sense:'rendre victorieux',concept:'Secours/Victoire',description:''},
    {sense:'chrétiens (nasara)',concept:'Divers',description:'Les partisans de Jésus — ceux qui l\'ont secouru et aidé.'},
  ]);log(r,'n s r')

  // 3. t b e (تبع) — suivre, poursuivre, succession
  r=await ins('t b e',[
    {sense:'suivre',concept:'Suivi/Poursuite',description:"Acte de marcher derrière quelqu'un ou de se conformer à son exemple. Le suivi est directionnel — il part du suiveur et se dirige vers celui qui est suivi. C'est un mouvement permanent tant que le suiveur ne dévie pas. Suivre c'est accepter la direction d'un autre."},
    {sense:'poursuivre',concept:'Suivi/Poursuite',description:''},
    {sense:'imiter',concept:'Suivi/Poursuite',description:''},
    {sense:'faire suivre',concept:'Suivi/Poursuite',description:''},
    {sense:'successeur',concept:'Succession',description:"Celui qui vient après et prend la suite. La succession est l'enchaînement temporel — chaque chose laisse place à ce qui la suit. C'est permanent dans le cycle."},
    {sense:'partisan',concept:'Succession',description:''},
  ]);log(r,'t b e')

  // 4. m l l (ملل) — religion, voie, s'ennuyer, dicter
  r=await ins('m l l',[
    {sense:'religion (milla)',concept:'Religion/Voie',description:"Système de croyance et de pratique qu'on adopte et qu'on suit comme chemin de vie. La milla est une voie permanente qui oriente toute l'existence — elle est ce qu'on professe et ce qui guide. C'est un cadre rationnel de vie, pas un simple sentiment."},
    {sense:'voie',concept:'Religion/Voie',description:''},
    {sense:'dicter',concept:'Dictée/Écriture',description:"Acte extérieur de prononcer des mots pour qu'un autre les écrive. La dictée sort du dicteur et atteint le scribe — c'est directionnel. Dicter c'est transmettre la parole pour qu'elle devienne écrit permanent."},
    {sense:'s\'ennuyer',concept:'Lassitude',description:"État intérieur de fatigue face à la répétition, perte d'intérêt. La lassitude est un état qui s'installe quand la chose dure trop — elle reste dans celui qui la ressent."},
    {sense:'se lasser',concept:'Lassitude',description:''},
  ]);log(r,'m l l')

  // 5. q w l (قول) — dire, parole, opinion
  r=await ins('q w l',[
    {sense:'dire',concept:'Parole/Énonciation',description:"Acte fondamental d'exprimer par des mots ce qui est dans l'esprit. La parole sort du locuteur et atteint l'auditeur — c'est l'acte directionnel par excellence de la communication. Dire c'est transformer la pensée intérieure en réalité extérieure partagée."},
    {sense:'parler',concept:'Parole/Énonciation',description:''},
    {sense:'parole',concept:'Parole/Énonciation',description:''},
    {sense:'énoncer',concept:'Parole/Énonciation',description:''},
    {sense:'opinion',concept:'Avis/Doctrine',description:"Position intellectuelle qu'on exprime sur un sujet. L'opinion est un jugement rationnel qui peut être partagé ou contesté — elle est intérieure dans sa formation et extérieure dans son expression."},
    {sense:'doctrine',concept:'Avis/Doctrine',description:''},
  ]);log(r,'q w l')

  // 6. h d y (هدي) — guider, guidance, offrir un cadeau
  r=await ins('h d y',[
    {sense:'guider',concept:'Guidance/Direction',description:"Acte extérieur de montrer le chemin à celui qui ne le connaît pas. La guidance sort du guide et atteint le guidé — c'est directionnel et transformateur. Guider c'est éclairer le chemin pour que l'autre puisse avancer par lui-même. La guidance peut être ponctuelle ou permanente."},
    {sense:'montrer le chemin',concept:'Guidance/Direction',description:''},
    {sense:'guidance (huda)',concept:'Guidance/Direction',description:''},
    {sense:'être guidé',concept:'Guidance/Direction',description:''},
    {sense:'offrir en cadeau',concept:'Don/Offrande',description:"Acte extérieur de donner quelque chose de précieux sans rien attendre en retour. Le don sort du donneur et atteint le receveur — c'est directionnel et généreux."},
    {sense:'offrande sacrificielle',concept:'Don/Offrande',description:''},
  ]);log(r,'h d y')

  // 7. a l h (اله) — divinité, adorer, être perplexe
  r=await ins('a l h',[
    {sense:'divinité (ilah)',concept:'Divinité/Adoration',description:"L'être vers lequel se dirigent l'adoration et la soumission totale. La divinité est permanente et absolue — elle est ce vers quoi tout converge. L'ilah est celui qu'on adore, celui vers qui se tournent les cœurs et les prières."},
    {sense:'Dieu (Allah)',concept:'Divinité/Adoration',description:''},
    {sense:'adorer',concept:'Divinité/Adoration',description:''},
    {sense:'être perplexe',concept:'Stupeur/Égarement',description:"État intérieur de celui qui ne sait plus où se tourner, frappé par l'ampleur de ce qui le dépasse. La perplexité est un état temporaire d'immobilisation de l'esprit face à l'incompréhensible."},
    {sense:'chercher refuge',concept:'Divers',description:'Se tourner vers un protecteur — lié au sens d\'adoration comme recherche de sécurité.'},
  ]);log(r,'a l h')

  // 8. h w y (هوي) — désirer, tomber, air, passion
  r=await ins('h w y',[
    {sense:'désirer',concept:'Désir/Passion',description:"Mouvement intérieur de l'âme vers ce qui l'attire, souvent sans contrôle rationnel. Le désir est un état qui tire l'être vers le bas — il est directionnel de l'intérieur vers l'objet convoité. La passion est permanente tant que l'objet du désir est présent. Le hawa est l'inclination aveugle."},
    {sense:'passion',concept:'Désir/Passion',description:''},
    {sense:'penchant',concept:'Désir/Passion',description:''},
    {sense:'tomber',concept:'Chute/Descente',description:"Mouvement involontaire du haut vers le bas sous l'effet de la gravité. La chute est directionnelle et ponctuelle — elle emporte celui qui tombe. Tomber c'est perdre sa position élevée."},
    {sense:'descendre',concept:'Chute/Descente',description:''},
    {sense:'air',concept:'Divers',description:'L\'espace entre ciel et terre — le vide dans lequel on tombe.'},
  ]);log(r,'h w y')

  // 9. dh w y (ذوي) — se faner, dépérir
  r=await ins('dh w y',[
    {sense:'se faner',concept:'Dépérissement/Déclin',description:"État de ce qui perd sa vitalité et sa fraîcheur progressivement. Le dépérissement est un processus lent et permanent — la plante qui se fane ne reverdit plus. C'est un mouvement intérieur de la vie qui se retire."},
    {sense:'dépérir',concept:'Dépérissement/Déclin',description:''},
    {sense:'sécher',concept:'Dépérissement/Déclin',description:''},
  ]);log(r,'dh w y')

  // 10. j y a (جيء) — venir, apporter, arriver
  r=await ins('j y a',[
    {sense:'venir',concept:'Venue/Arrivée',description:"Acte de se déplacer vers le lieu où se trouve l'interlocuteur. La venue est directionnelle — elle part de l'absent et atteint le lieu de présence. C'est ponctuel dans l'acte mais transforme la situation par la présence nouvelle. Venir c'est combler une absence."},
    {sense:'arriver',concept:'Venue/Arrivée',description:''},
    {sense:'apporter',concept:'Venue/Arrivée',description:''},
    {sense:'produire',concept:'Venue/Arrivée',description:''},
    {sense:'commettre',concept:'Divers',description:'Faire une action — sens dérivé de faire venir un acte à l\'existence.'},
  ]);log(r,'j y a')

  console.log('\n=== Batch 153 terminé — '+done+'/2321 ===')
}
run().catch(e=>{console.error('ERR:',e);process.exit(1)})
