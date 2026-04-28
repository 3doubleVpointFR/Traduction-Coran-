const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 1038, total = 2321

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

  // 1. k (ك) — particule de comparaison
  r=await ins('k',[
    {sense:'comme',concept:'Comparaison/Similitude',description:"Mise en rapport de deux réalités pour éclairer l'une par l'autre. La comparaison est un acte rationnel et directionnel — elle part du connu vers l'inconnu, du visible vers l'invisible. Elle crée un pont entre deux mondes sans les fusionner."},
    {sense:'tel que',concept:'Comparaison/Similitude',description:''},
    {sense:'semblable à',concept:'Comparaison/Similitude',description:''},
  ]);log(r,'k')

  // 2. hnf (حنف) — incliner, être hanif (monothéiste pur), pied bot
  r=await ins('hnf',[
    {sense:'s\'incliner vers la vérité',concept:'Inclinaison/Droiture',description:"Mouvement intérieur de l'âme qui se tourne vers la vérité en se détournant de l'erreur. L'inclinaison est un état permanent chez celui qui l'adopte — c'est une orientation fondamentale de l'être, pas un acte ponctuel. Le hanif est celui dont l'âme penche naturellement vers le vrai."},
    {sense:'être monothéiste pur (hanif)',concept:'Inclinaison/Droiture',description:''},
    {sense:'se détourner du faux',concept:'Inclinaison/Droiture',description:''},
    {sense:'pied bot',concept:'Déviation/Courbure',description:"Difformité physique où le pied dévie de sa position naturelle. La déviation est un état permanent du corps — le pied est tourné vers l'intérieur ou l'extérieur. C'est le sens concret originel dont dérive le sens abstrait d'inclination."},
    {sense:'être tordu',concept:'Déviation/Courbure',description:''},
  ]);log(r,'hnf')

  // 3. wsy (وصي) — recommander, faire un testament, enjoindre
  r=await ins('wsy',[
    {sense:'recommander',concept:'Recommandation/Injonction',description:"Transmission d'une parole importante de celui qui sait vers celui qui doit agir. La recommandation sort du recommandant et atteint le recommandé — c'est directionnel et chargé de responsabilité. Elle peut être ponctuelle dans l'énoncé mais crée une obligation permanente."},
    {sense:'enjoindre',concept:'Recommandation/Injonction',description:''},
    {sense:'faire un testament',concept:'Recommandation/Injonction',description:''},
    {sense:'charger quelqu\'un d\'une mission',concept:'Recommandation/Injonction',description:''},
    {sense:'lier ensemble',concept:'Liaison/Connexion',description:"Acte de joindre deux choses l'une à l'autre pour qu'elles ne se séparent pas. La liaison crée un état permanent de connexion — elle unit ce qui était séparé."},
    {sense:'terre fertile continue',concept:'Liaison/Connexion',description:''},
  ]);log(r,'wsy')

  // 4. eqb (عقب) — talon, succéder, punir, conséquence
  r=await ins('eqb',[
    {sense:'frapper le talon',concept:'Talon/Arrière',description:"La partie la plus basse et la plus reculée du pied, ce sur quoi on s'appuie et ce qui touche le sol en dernier quand on avance. Le talon est l'arrière du mouvement — il est permanent dans le corps et symbolise ce qui vient après."},
    {sense:'talon',concept:'Talon/Arrière',description:''},
    {sense:'succéder',concept:'Succession/Conséquence',description:"Mouvement de ce qui vient après dans le temps, le remplacement du précédent par le suivant. La succession est directionnelle et permanente — chaque chose laisse place à ce qui la suit. C'est un ordre temporel qui lie la cause à l'effet."},
    {sense:'venir après',concept:'Succession/Conséquence',description:''},
    {sense:'conséquence',concept:'Succession/Conséquence',description:''},
    {sense:'alternance',concept:'Succession/Conséquence',description:''},
    {sense:'punir',concept:'Châtiment/Rétribution',description:"Acte extérieur d'infliger une peine à celui qui a fauté. Le châtiment sort du punisseur et atteint le puni — c'est directionnel et ponctuel. La punition est la conséquence qui suit la faute, le talon qui frappe après le pas."},
    {sense:'châtiment',concept:'Châtiment/Rétribution',description:''},
    {sense:'descendance',concept:'Descendance',description:"Les enfants qui viennent après les parents, la suite de la lignée. La descendance est la succession biologique — permanente et directionnelle du parent vers l'enfant."},
    {sense:'postérité',concept:'Descendance',description:''},
  ]);log(r,'eqb')

  // 5. hdr (حضر) — être présent, assister, venir
  r=await ins('hdr',[
    {sense:'être présent',concept:'Présence/Témoignage',description:"État de celui qui est là, dans le lieu et le moment. La présence est un état qui lie la personne à l'endroit — elle est permanente tant que la personne reste. Être présent c'est être disponible et témoin de ce qui se passe."},
    {sense:'assister à',concept:'Présence/Témoignage',description:''},
    {sense:'venir',concept:'Présence/Témoignage',description:''},
    {sense:'se présenter',concept:'Présence/Témoignage',description:''},
    {sense:'zone habitée (hadar)',concept:'Sédentarité/Civilisation',description:"Le lieu où les gens résident de façon permanente, par opposition au désert. La sédentarité est un état de stabilité — c'est l'installation durable en un lieu qui crée la civilisation et la communauté."},
    {sense:'sédentaire (vs. nomade)',concept:'Sédentarité/Civilisation',description:''},
    {sense:'mort (la mort se présente)',concept:'Divers',description:'La mort comme arrivée, comme présence soudaine.'},
  ]);log(r,'hdr')

  // 6. abaa (أبى) — refuser, dédaigner (doublon possible de aby)
  r=await ins('abaa',[
    {sense:'refuser',concept:'Refus/Rejet',description:"Acte de volonté qui repousse ce qui est proposé ou commandé. Le refus sort de celui qui refuse et repousse ce qui vient — c'est directionnel et ponctuel. Refuser c'est dire non avec la volonté, fermer la porte à ce qu'on ne veut pas accepter."},
    {sense:'rejeter',concept:'Refus/Rejet',description:''},
    {sense:'dédaigner',concept:'Refus/Rejet',description:''},
    {sense:'s\'abstenir',concept:'Refus/Rejet',description:''},
  ]);log(r,'abaa')

  // 7. eysa (عيسى) — nom propre (Jésus)
  r=await ins('eysa',[
    {sense:'Jésus (nom propre)',concept:'Nom propre',description:"Nom du prophète Issa/Jésus fils de Marie. C'est un nom propre permanent et inchangeable qui désigne une personne historique précise."},
    {sense:'blancheur tirant sur le roux',concept:'Blancheur/Couleur',description:"Teinte claire mêlée de roux, couleur de chameau. La blancheur est un état permanent de la surface — elle caractérise ce qui la porte de façon visible et durable."},
  ]);log(r,'eysa')

  // 8. ha (ها) — particule d'attention
  r=await ins('ha',[
    {sense:'voici',concept:'Attention/Présentation',description:"Particule qui attire l'attention sur ce qui va être montré. L'appel à l'attention sort du locuteur et atteint l'auditeur — c'est directionnel et ponctuel. Voici ouvre les yeux de l'autre sur ce qu'il n'avait pas vu."},
    {sense:'prenez',concept:'Attention/Présentation',description:''},
    {sense:'tenez',concept:'Attention/Présentation',description:''},
  ]);log(r,'ha')

  // 9. sbg (صبغ) — teindre, colorer, baptiser, immersion
  r=await ins('sbg',[
    {sense:'teindre',concept:'Teinture/Immersion',description:"Acte extérieur de plonger quelque chose dans un liquide pour en changer la couleur de façon permanente. La teinture sort de la matière colorante et atteint ce qui est teint — c'est directionnel et transformateur. Ce qui est teint ne revient pas à sa couleur d'origine."},
    {sense:'colorer',concept:'Teinture/Immersion',description:''},
    {sense:'tremper',concept:'Teinture/Immersion',description:''},
    {sense:'baptiser',concept:'Teinture/Immersion',description:''},
    {sense:'empreinte divine (sibgha)',concept:'Empreinte/Nature',description:"La marque que Dieu laisse sur sa création, la nature originelle qui colore l'être. L'empreinte est permanente et intérieure — elle fait partie de ce qui est marqué. La sibgha d'Allah est la teinture divine qui colore la nature humaine."},
    {sense:'religion',concept:'Empreinte/Nature',description:''},
    {sense:'être ample (vêtement)',concept:'Divers',description:'Vêtement qui recouvre complètement — lié à l\'idée d\'immersion totale.'},
  ]);log(r,'sbg')

  // 10. nahnu (نحن) — pronom nous
  r=await ins('nahnu',[
    {sense:'nous',concept:'Pronom/Collectif',description:"Pronom de la première personne du pluriel qui unit le locuteur à d'autres dans un même groupe. Le nous crée une communauté de parole — c'est un acte permanent tant que le groupe existe. Dire nous c'est inclure l'autre dans sa propre sphère."},
    {sense:'nous (exclusif)',concept:'Pronom/Collectif',description:''},
    {sense:'nous (inclusif)',concept:'Pronom/Collectif',description:''},
  ]);log(r,'nahnu')

  console.log('\n=== Batch 145 terminé — '+done+'/2321 ===')
}
run().catch(e=>{console.error('ERR:',e);process.exit(1)})
