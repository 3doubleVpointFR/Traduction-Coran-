const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 227, total = 2321

async function ins(key, senses) {
  const {data: wa} = await db.from('word_analyses').select('id').eq('word_key', key).limit(1)
  if (!wa || !wa[0]) return null
  const {count} = await db.from('word_meanings').select('*',{count:'exact',head:true}).eq('analysis_id', wa[0].id).not('concept','is',null)
  if (count > 0) return null
  const {error} = await db.from('word_meanings').insert(senses.map((s,i) => ({...s, analysis_id: wa[0].id, meaning_type:'etymology', display_order:i+1})))
  if (error) { console.log('ERR '+key+': '+error.message); return null }
  return {senses, concepts: [...new Set(senses.map(s => s.concept))]}
}
function log(r, key) {
  if(r) {
    done++
    console.log('\n══════════════════════════════════════════════════════════════')
    console.log('['+done+'/'+total+'] '+key+' — '+r.senses.length+' sens → '+r.concepts.length+' concepts — reste '+(total-done))
    console.log('──────────────────────────────────────────────────────────────')
    r.senses.forEach(s => {
      console.log('• '+s.sense+' ['+s.concept+']')
      console.log('  '+s.description)
    })
  }
}

async function run() {
  let r

  // kbr (كبر) — être grand, s'enorgueillir, vieillir
  r=await ins('kbr',[
    {sense:'être grand',concept:'Grandeur/Importance',description:"État de ce qui dépasse la mesure ordinaire en taille, valeur ou importance. La grandeur est un état permanent de la chose — elle se distingue de ce qui est petit ou ordinaire. C'est un jugement rationnel de comparaison. Le grand occupe plus d'espace, physique ou moral."},
    {sense:'grandir',concept:'Grandeur/Importance',description:"Acte de devenir plus grand dans le temps. Grandir est un mouvement intérieur vers le haut et vers le plus — c'est progressif et continu. L'enfant grandit en taille, l'âme grandit en sagesse. Grandir c'est s'approcher de sa pleine mesure."},
    {sense:'être important',concept:'Grandeur/Importance',description:"État de ce qui a du poids et de l'influence. L'importance est une grandeur de valeur — ce qui est important compte, pèse dans la balance. C'est un état qui peut être permanent (la chose est importante par nature) ou contextuel (importante ici et maintenant)."},
    {sense:'s\'enorgueillir',concept:'Orgueil/Arrogance',description:"Acte de se considérer comme grand alors qu'on ne l'est pas ou pas autant. L'orgueil est intérieur — c'est une fausse grandeur que l'on s'attribue. L'orgueilleux se gonfle au-delà de sa réalité. C'est le péché d'Iblis qui s'est cru trop grand pour se prosterner."},
    {sense:'orgueil',concept:'Orgueil/Arrogance',description:"État de celui qui se croit supérieur aux autres. L'orgueil est un état intérieur permanent chez celui qui en souffre — il fausse le regard sur soi et sur les autres. L'orgueilleux ne voit pas sa propre petitesse."},
    {sense:'vieillir',concept:'Âge/Ancienneté',description:"Acte de prendre de l'âge, de grandir en temps vécu. Vieillir est un mouvement dans le temps — on accumule les années. C'est progressif et irréversible. Vieillir c'est grandir vers la fin, s'approcher de la mort en s'éloignant de la naissance."},
    {sense:'aîné',concept:'Âge/Ancienneté',description:"Celui qui est plus grand en âge dans une fratrie ou un groupe. L'aîné est un état permanent relatif — on est aîné par rapport aux plus jeunes. L'aîné a grandi avant, il précède dans le temps."},
    {sense:'magnifier',concept:'Glorification',description:"Acte de proclamer la grandeur de quelqu'un, surtout de Dieu. Magnifier c'est dire grand ce qui est grand — la parole reconnaît et élève. C'est directionnel vers ce qui est magnifié. Allahu Akbar : Dieu est le plus grand."},
  ]);log(r,'kbr')

  // zll (زلل) — glisser, faillir
  r=await ins('zll',[
    {sense:'glisser',concept:'Glissement/Erreur',description:"Acte de perdre l'appui et de tomber involontairement. Le glissement est un mouvement non contrôlé — le pied échappe, le corps suit. C'est ponctuel et soudain. Glisser c'est perdre le sol stable sous ses pieds."},
    {sense:'trébucher',concept:'Glissement/Erreur',description:"Acte de perdre l'équilibre sans nécessairement tomber. Trébucher est une chute évitée de justesse — le corps vacille mais se rattrape. C'est ponctuel et accidentel. Le trébuchement est un glissement rattrapé."},
    {sense:'commettre une faute',concept:'Glissement/Erreur',description:"Acte de s'écarter du droit chemin moral. La faute est un glissement moral — on dévie de ce qu'on devait faire. C'est ponctuel dans l'acte mais peut laisser une trace permanente. La faute est un glissement de l'âme."},
    {sense:'faillir',concept:'Glissement/Erreur',description:"Acte de manquer à son devoir ou de presque échouer. Faillir c'est glisser moralement — on n'a pas tenu ce qu'on devait tenir. C'est ponctuel et peut être pardonné si le repentir suit. Faillir c'est être humain."},
    {sense:'erreur',concept:'Glissement/Erreur',description:"État de celui qui s'est écarté du vrai ou du bien. L'erreur est le résultat du glissement — on s'est trompé, on est dans le faux. C'est un état qui peut être corrigé par la prise de conscience et le retour."},
    {sense:'pur et coulant',concept:'Divers',description:"Qualité de ce qui coule sans obstacle, comme l'eau pure. Le coulant est un état du liquide — il glisse sans résistance. C'est le sens physique positif du glissement : la fluidité sans entrave."},
  ]);log(r,'zll')

  // shytn (شيطن) — Satan, diable
  r=await ins('shytn',[
    {sense:'Satan',concept:'Diable/Ennemi',description:"L'adversaire par excellence, celui qui s'oppose à Dieu et aux hommes. Satan est un être permanent de rébellion — il a refusé et continue de refuser. C'est l'ennemi qui égare, qui détourne du droit chemin. Son nom vient de sa fonction : il éloigne de Dieu."},
    {sense:'diable',concept:'Diable/Ennemi',description:"Être maléfique qui pousse au mal et au péché. Le diable est permanent dans son hostilité — il chuchote, il suggère, il tente. C'est un être dont l'action sort vers les hommes pour les égarer. Le diable est celui qui divise."},
    {sense:'s\'éloigner',concept:'Éloignement/Égarement',description:"Acte de s'écarter de la vérité ou du bien. S'éloigner est le mouvement contraire du rapprochement — on met de la distance avec Dieu ou avec le droit. C'est directionnel vers le loin. Le péché éloigne de Dieu."},
    {sense:'être brûlé',concept:'Châtiment',description:"État de ce qui est consumé par le feu. Être brûlé est le châtiment du diable et de ceux qui le suivent — le feu est la rétribution de la rébellion. C'est permanent dans l'enfer. Les étoiles filantes brûlent les diables qui espionnent."},
    {sense:'rebelle',concept:'Diable/Ennemi',description:"Celui qui refuse l'obéissance due. Le rebelle s'oppose à l'autorité légitime — c'est un état permanent de désobéissance. Le diable est le rebelle originel : il a refusé de se prosterner devant Adam."},
  ]);log(r,'shytn')

  // lna (لنا) — pour nous
  r=await ins('lna',[
    {sense:'pour nous',concept:'Attribution/Possession',description:"Préposition composée indiquant que quelque chose est destiné au groupe qui parle. Pour nous sort de l'allocuteur vers le groupe — c'est directionnel et désigne le bénéficiaire. C'est ponctuel dans l'énoncé mais peut exprimer une possession permanente."},
    {sense:'à nous',concept:'Attribution/Possession',description:"Expression de possession collective. À nous marque l'appartenance au groupe — c'est un état permanent de ce qui est possédé. Ce qui est à nous n'est pas aux autres."},
    {sense:'nous avons',concept:'Attribution/Possession',description:"Expression de la possession actuelle par le groupe. Nous avons indique ce qui est présentement en notre possession — c'est un état qui peut être permanent ou temporaire. Avoir c'est tenir, posséder, disposer."},
  ]);log(r,'lna')

  // khrj (خرج) — sortir, extraire
  r=await ins('khrj',[
    {sense:'sortir',concept:'Sortie/Extériorisation',description:"Acte de passer de l'intérieur vers l'extérieur. Sortir est un mouvement directionnel vers le dehors — il sort de celui ou de ce qui contient vers l'espace ouvert. C'est ponctuel dans l'acte. Sortir c'est quitter un espace clos pour un espace libre."},
    {sense:'faire sortir',concept:'Sortie/Extériorisation',description:"Acte de provoquer la sortie de quelqu'un ou quelque chose. Faire sortir est directionnel — l'agent agit sur ce qui est dedans pour le mettre dehors. C'est un acte de pouvoir qui déplace. Dieu fait sortir le vivant du mort."},
    {sense:'extraire',concept:'Extraction',description:"Acte de tirer de l'intérieur ce qui y était enfoui ou contenu. Extraire sort ce qui était caché — le minerai de la terre, le sens du texte. C'est directionnel et ponctuel. L'extraction révèle ce qui était invisible."},
    {sense:'expulser',concept:'Expulsion',description:"Acte de forcer la sortie avec violence ou autorité. L'expulsion est une sortie imposée — celui qui est expulsé ne voulait pas partir. C'est directionnel et brutal. Adam a été expulsé du Paradis."},
    {sense:'production',concept:'Production/Résultat',description:"Ce qui sort du travail ou de la terre. La production est le résultat de l'extraction — ce qu'on a fait sortir. C'est un état de ce qui a été produit. La terre produit ses fruits."},
    {sense:'tribut',concept:'Divers',description:"Ce qui sort vers le pouvoir comme impôt ou taxe. Le tribut est une extraction fiscale — il sort des sujets vers le souverain. C'est directionnel et périodique."},
  ]);log(r,'khrj')

  // hbt (هبط) — descendre
  r=await ins('hbt',[
    {sense:'descendre',concept:'Descente/Chute',description:"Acte d'aller du haut vers le bas. Descendre est le mouvement contraire de monter — il est directionnel vers le bas. C'est ponctuel dans l'acte. Descendre c'est perdre de l'altitude, s'abaisser dans l'espace. Adam est descendu du Paradis sur terre."},
    {sense:'faire descendre',concept:'Descente/Chute',description:"Acte de provoquer la descente de quelqu'un ou quelque chose. Faire descendre est directionnel vers le bas — l'agent cause le mouvement descendant. Dieu fait descendre la pluie et la révélation."},
    {sense:'baisser',concept:'Descente/Chute',description:"Acte de réduire le niveau ou la hauteur. Baisser est une descente mesurée — on descend d'un degré, d'un cran. C'est ponctuel et peut être volontaire ou subi. Baisser le regard, baisser le prix."},
    {sense:'tomber',concept:'Descente/Chute',description:"Acte de descendre rapidement et sans contrôle. Tomber est une descente soudaine — on perd l'appui et on s'écrase. C'est ponctuel et souvent violent. La chute est une descente qui fait mal."},
    {sense:'dégrader',concept:'Dégradation',description:"Acte de faire baisser la qualité ou le rang. Dégrader est une descente de valeur — ce qui était élevé devient bas. C'est directionnel vers le pire. La dégradation est une chute morale ou matérielle."},
  ]);log(r,'hbt')

  // edw (عدو) — ennemi, courir, transgresser
  r=await ins('edw',[
    {sense:'ennemi',concept:'Hostilité/Inimitié',description:"Celui qui veut du mal et agit contre. L'ennemi est un état permanent de la relation — il est opposé, hostile, dangereux. L'ennemi vise à nuire, à détruire, à vaincre. C'est la relation négative par excellence entre deux parties."},
    {sense:'hostilité',concept:'Hostilité/Inimitié',description:"État d'opposition active contre quelqu'un. L'hostilité est intérieure comme disposition et extérieure comme action — elle anime l'ennemi. C'est permanent tant que dure le conflit. L'hostile attaque ou se prépare à attaquer."},
    {sense:'courir',concept:'Course/Vitesse',description:"Acte de se déplacer rapidement sur ses jambes. Courir est un mouvement directionnel vers un but — on court vers ou contre quelque chose. C'est ponctuel et intense. Courir c'est aller vite, dépasser le pas normal."},
    {sense:'transgresser',concept:'Transgression/Excès',description:"Acte de dépasser les limites fixées par la loi ou la morale. Transgresser sort du permis vers l'interdit — c'est directionnel vers le trop. C'est ponctuel dans l'acte mais grave dans les conséquences. Le transgresseur va au-delà de ce qui lui est autorisé."},
    {sense:'injustice',concept:'Transgression/Excès',description:"Acte ou état de dépasser le droit d'autrui. L'injustice est une transgression du juste — on prend ce qui n'est pas à soi, on donne moins que ce qui est dû. C'est un état qui appelle réparation."},
    {sense:'agression',concept:'Hostilité/Inimitié',description:"Acte d'attaquer le premier sans provocation légitime. L'agression est l'hostilité en acte — elle sort de l'agresseur vers la victime. C'est directionnel et ponctuel. L'agresseur franchit la ligne de la paix."},
  ]);log(r,'edw')

  // lkm (لكم) — pour vous
  r=await ins('lkm',[
    {sense:'pour vous',concept:'Attribution/Possession',description:"Préposition composée indiquant que quelque chose est destiné au groupe auquel on s'adresse. Pour vous sort du locuteur vers les allocutaires — c'est directionnel et désigne les bénéficiaires. Ce qui est pour vous vous est destiné."},
    {sense:'à vous',concept:'Attribution/Possession',description:"Expression de possession collective du groupe adressé. À vous marque l'appartenance à ceux à qui on parle — c'est un état permanent de ce qui leur appartient. Ce qui est à vous n'est pas à d'autres."},
    {sense:'vous avez',concept:'Attribution/Possession',description:"Expression de la possession actuelle par le groupe adressé. Vous avez indique ce qui est présentement en leur possession — c'est un état qui peut être permanent ou temporaire."},
  ]);log(r,'lkm')

  // qrr (قرر) — être stable, froid, établir
  r=await ins('qrr',[
    {sense:'être stable',concept:'Stabilité/Établissement',description:"État de ce qui ne bouge pas et reste en place. La stabilité est un état permanent de la chose — elle est fixée, assise, immobile. C'est le contraire de l'instabilité. Ce qui est stable peut supporter sans vaciller."},
    {sense:'s\'établir',concept:'Stabilité/Établissement',description:"Acte de se fixer en place durablement. S'établir est un mouvement qui aboutit à un état stable — c'est ponctuel dans l'installation mais permanent dans le résultat. S'établir c'est trouver sa place et y rester."},
    {sense:'être froid',concept:'Froid/Fraîcheur',description:"État de basse température. Le froid est un état permanent ou temporaire de la chose — c'est l'absence de chaleur. Le froid apaise, le froid conserve, le froid peut aussi brûler."},
    {sense:'rafraîchir',concept:'Froid/Fraîcheur',description:"Acte de rendre frais ce qui était chaud. Rafraîchir est directionnel — la fraîcheur passe à ce qui est rafraîchi. C'est ponctuel et bienfaisant. L'œil se rafraîchit de joie (qurrat 'ayn)."},
    {sense:'avouer',concept:'Aveu/Reconnaissance',description:"Acte de reconnaître la vérité de ce qu'on avait caché ou nié. Avouer est directionnel — la parole sort vers l'autre pour établir la vérité. L'aveu stabilise la parole sur le vrai, il fixe ce qui était flottant."},
    {sense:'décider',concept:'Décision',description:"Acte de fixer un choix de manière stable. Décider établit une position ferme — après la décision, on ne vacille plus. C'est ponctuel dans l'acte mais permanent dans l'engagement."},
  ]);log(r,'qrr')

  // mte (متع) — jouir, faire profiter
  r=await ins('mte',[
    {sense:'jouir',concept:'Jouissance/Profit',description:"Acte de tirer du plaisir ou de l'avantage de quelque chose. Jouir est intérieur — c'est l'expérience du bien reçu. C'est ponctuel dans l'acte de jouissance mais peut viser des biens durables. Jouir c'est profiter, goûter, bénéficier."},
    {sense:'faire profiter',concept:'Jouissance/Profit',description:"Acte de donner la jouissance ou l'avantage à quelqu'un. Faire profiter est directionnel — le donneur transmet le bien au receveur. C'est un acte de générosité qui sort vers l'autre. Dieu fait profiter les hommes de la vie."},
    {sense:'bien temporel',concept:'Bien/Provision',description:"Ce dont on profite un temps avant de le perdre. Le bien temporel est passager — il est là puis il part. C'est un état de possession temporaire. La vie d'ici-bas est un bien temporel qui s'épuise."},
    {sense:'provision',concept:'Bien/Provision',description:"Ce qui permet de subsister et d'avancer. La provision est un bien qui soutient — elle est accumulée pour être consommée. C'est un état de ce qui est mis de côté pour plus tard. On fait provision pour le voyage."},
    {sense:'prolonger',concept:'Durée/Extension',description:"Acte d'étendre dans le temps la durée de quelque chose. Prolonger fait durer ce qui allait finir — c'est directionnel vers l'avenir. C'est ponctuel dans l'acte mais étend la durée. Dieu prolonge la vie de qui Il veut."},
  ]);log(r,'mte')

  console.log('\n=== Batch 25 v2 terminé — '+done+'/2321 ===')
}
run().catch(e=>{console.error('ERR:',e);process.exit(1)})
