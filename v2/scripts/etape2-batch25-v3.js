const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 227, total = 2321

async function ins(key, senses) {
  const {data: wa} = await db.from('word_analyses').select('id').eq('word_key', key).limit(1)
  if (!wa || !wa[0]) { console.log('[SKIP] '+key+' — non trouvé'); return null }
  const {count} = await db.from('word_meanings').select('*',{count:'exact',head:true}).eq('analysis_id', wa[0].id).not('concept','is',null)
  if (count > 0) { console.log('[SKIP] '+key+' — déjà fait'); return null }
  const {error} = await db.from('word_meanings').insert(senses.map((s,i) => ({...s, analysis_id: wa[0].id, meaning_type:'etymology', display_order:i+1})))
  if (error) { console.log('ERR '+key+': '+error.message); return null }
  return {total: senses.length, concepts: [...new Set(senses.map(s => s.concept))]}
}
function log(r, key, conceptDescs) {
  if(r) {
    done++
    console.log('\n══════════════════════════════════════════════════════════════')
    console.log('['+done+'/'+total+'] '+key+' — '+r.total+' sens → '+r.concepts.length+' concepts — reste '+(total-done))
    console.log('──────────────────────────────────────────────────────────────')
    for (const [concept, desc] of Object.entries(conceptDescs)) {
      console.log('▸ '+concept)
      console.log('  '+desc)
    }
  }
}

async function run() {
  let r

  // 228. kbr (كبر) — être grand, s'enorgueillir, vieillir
  r = await ins('kbr', [
    {sense:'être grand',concept:'Grandeur/Importance',description:"État de ce qui dépasse la mesure ordinaire en taille, valeur ou importance — c'est un jugement rationnel permanent qui évalue par comparaison. La grandeur est intérieure à l'être qui la possède : le grand contient plus, pèse plus, occupe plus d'espace physique ou moral que le petit. Cette grandeur peut être vraie quand elle correspond à la réalité (Dieu est véritablement le Plus Grand) ou fausse quand elle est usurpée (l'orgueilleux se croit grand sans l'être). La grandeur vraie impose le respect ; la grandeur fausse appelle le châtiment."},
    {sense:'grandir',concept:'Grandeur/Importance',description:''},
    {sense:'être important',concept:'Grandeur/Importance',description:''},
    {sense:'magnifier',concept:'Grandeur/Importance',description:''},
    {sense:'s\'enorgueillir',concept:'Orgueil/Arrogance',description:"État intérieur permanent de celui qui s'attribue une grandeur qu'il n'a pas ou qu'il exagère — c'est une disposition de l'âme qui se gonfle au-delà de sa mesure réelle. L'orgueil est un jugement faux sur soi-même qui se manifeste extérieurement par le mépris des autres et le refus de reconnaître ce qui est au-dessus de soi. C'est le péché d'Iblis qui s'est cru trop grand pour se prosterner devant Adam. L'orgueilleux vit dans l'illusion de sa propre importance et cette illusion le coupe de la réalité et de la vérité."},
    {sense:'orgueil',concept:'Orgueil/Arrogance',description:''},
    {sense:'vieillir',concept:'Âge/Ancienneté',description:"Mouvement progressif et irréversible dans le temps par lequel un être accumule les années vécues — c'est directionnel vers l'avant, vers la mort qui attend. Vieillir est grandir en durée, mais c'est aussi s'approcher de la fin, perdre en force ce qu'on gagne en expérience. Le vieux est celui qui a vécu longtemps, qui est grand en âge, et cette ancienneté peut lui conférer sagesse et autorité. L'aîné précède les cadets non par mérite mais par le seul fait d'être né avant."},
    {sense:'aîné',concept:'Âge/Ancienneté',description:''},
  ])
  log(r,'kbr',{'Grandeur/Importance':"État permanent qui dépasse la mesure ordinaire. Jugement rationnel de comparaison. La grandeur vraie ou fausse — Dieu est le Plus Grand, l'orgueilleux usurpe.",'Orgueil/Arrogance':"État intérieur de fausse grandeur qui se gonfle au-delà de sa mesure. Jugement faux sur soi. Le péché d'Iblis.",'Âge/Ancienneté':"Mouvement directionnel irréversible dans le temps vers la fin. Grandir en durée, s'approcher de la mort."})

  // 229. zll (زلل) — glisser, faillir
  r = await ins('zll', [
    {sense:'glisser',concept:'Glissement/Erreur',description:"Mouvement involontaire et soudain par lequel on perd son appui stable et on dévie de sa trajectoire — le pied échappe, on perd le sol sous soi sans l'avoir voulu. C'est ponctuel et accidentel, causé par une faiblesse momentanée ou une circonstance extérieure. Au sens moral, le glissement est la faute par faiblesse plutôt que par malice : on dévie du droit chemin non pas en le rejetant consciemment mais en perdant prise. La faute par glissement est pardonnable car elle ne procède pas d'un rejet de la vérité mais d'un moment de fragilité humaine."},
    {sense:'trébucher',concept:'Glissement/Erreur',description:''},
    {sense:'commettre une faute',concept:'Glissement/Erreur',description:''},
    {sense:'faillir',concept:'Glissement/Erreur',description:''},
    {sense:'erreur',concept:'Glissement/Erreur',description:''},
    {sense:'pur et coulant',concept:'Divers',description:"Sens physique positif isolé : la fluidité de ce qui coule sans obstacle."},
  ])
  log(r,'zll',{'Glissement/Erreur':"Mouvement involontaire soudain de perte d'appui. Ponctuel et accidentel par faiblesse. La faute pardonnable qui ne procède pas du rejet conscient de la vérité.",'Divers':"Sens physique isolé."})

  // 230. shytn (شيطن) — Satan, diable
  r = await ins('shytn', [
    {sense:'Satan',concept:'Diable/Ennemi',description:"L'adversaire absolu qui s'est définitivement placé en opposition à Dieu et qui œuvre à égarer les hommes — c'est l'être de rébellion permanente dont l'hostilité est un état définitif, non une circonstance passagère. Son action est directionnelle : elle sort de lui vers les hommes qu'il cherche à détourner du droit chemin par le chuchotement, la suggestion et la tromperie. Satan ne force pas mais séduit, il ne contraint pas mais fait miroiter le faux sous les apparences du désirable. Il est l'ennemi déclaré de l'homme depuis qu'il a refusé de se prosterner devant Adam par orgueil."},
    {sense:'diable',concept:'Diable/Ennemi',description:''},
    {sense:'rebelle',concept:'Diable/Ennemi',description:''},
    {sense:'s\'éloigner',concept:'Éloignement/Égarement',description:"Mouvement directionnel par lequel on met de la distance avec la vérité, le bien ou Dieu — c'est aller vers le loin, quitter ce qui était proche et sûr pour ce qui est distant et incertain. L'éloignement peut être progressif (on s'écarte peu à peu) ou brutal (la rupture). Le péché éloigne de Dieu parce qu'il crée une distance morale entre le pécheur et son Seigneur. L'éloignement est le contraire du rapprochement que la foi et l'obéissance produisent."},
    {sense:'être brûlé',concept:'Châtiment',description:"État de ce qui est consumé par le feu comme punition de la rébellion — c'est le sort permanent du diable et de ceux qui le suivent dans la désobéissance. Le feu est le châtiment qui correspond à la nature de la faute : celui qui s'est enflammé d'orgueil est consumé par les flammes. Les étoiles filantes brûlent les diables qui tentent d'espionner les secrets du ciel. Le châtiment par le feu est définitif et sans retour."},
  ])
  log(r,'shytn',{'Diable/Ennemi':"Être de rébellion permanente en opposition définitive à Dieu. Action directionnelle vers les hommes pour les égarer par suggestion.",'Éloignement/Égarement':"Mouvement directionnel vers le loin, loin de Dieu. Le péché crée la distance morale.",'Châtiment':"État permanent de punition par le feu. Le sort définitif du rebelle consumé."})

  // 231. lna (لنا) — pour nous
  r = await ins('lna', [
    {sense:'pour nous',concept:'Attribution/Possession',description:"Préposition composée qui désigne le groupe parlant comme destinataire ou possesseur de ce qui est donné ou attribué — c'est directionnel vers le nous, le cercle de ceux qui parlent ensemble. L'attribution établit un lien de propriété ou de destination entre quelque chose et le groupe : ce qui est pour nous nous appartient ou nous est destiné. Cette attribution peut être ponctuelle (un don reçu) ou permanente (une possession établie). Le nous définit une appartenance commune qui reçoit ensemble."},
    {sense:'à nous',concept:'Attribution/Possession',description:''},
    {sense:'nous avons',concept:'Attribution/Possession',description:''},
  ])
  log(r,'lna',{'Attribution/Possession':"Direction vers le nous comme destinataire. Établit le lien de propriété ou de destination. Le groupe qui parle reçoit ensemble."})

  // 232. khrj (خرج) — sortir, extraire
  r = await ins('khrj', [
    {sense:'sortir',concept:'Sortie/Extériorisation',description:"Mouvement directionnel par lequel quelque chose passe de l'intérieur vers l'extérieur, de l'espace clos vers l'espace ouvert — c'est ponctuel dans l'acte mais peut marquer un changement d'état permanent. Sortir c'est quitter le caché pour le visible, le contenu pour le répandu, le privé pour le public. Ce qui sort se manifeste, apparaît, devient accessible à ceux qui sont dehors. Dieu fait sortir le vivant du mort et le mort du vivant."},
    {sense:'faire sortir',concept:'Sortie/Extériorisation',description:''},
    {sense:'extraire',concept:'Extraction',description:"Acte de tirer de l'intérieur ce qui y était enfoui ou contenu, de révéler ce qui était caché — c'est directionnel de l'intérieur vers l'extérieur avec un effort particulier. L'extraction demande une action qui va chercher au fond pour ramener à la surface : le minerai de la mine, le sens du texte, la vérité du cœur. Extraire c'est faire passer du potentiel à l'actuel, du latent au manifeste."},
    {sense:'expulser',concept:'Expulsion',description:"Acte de forcer la sortie de quelqu'un ou quelque chose contre sa volonté — c'est directionnel et violent, imposé par une autorité ou une force supérieure. Celui qui est expulsé ne voulait pas partir : il est chassé, rejeté, mis dehors. Adam et Ève ont été expulsés du Paradis pour leur désobéissance. L'expulsion est ponctuelle dans l'acte mais définitive dans ses conséquences — on ne revient pas facilement d'où l'on a été chassé."},
    {sense:'production',concept:'Divers',description:"Ce qui sort du travail comme résultat."},
    {sense:'tribut',concept:'Divers',description:"Ce qui sort vers le pouvoir comme impôt dû."},
  ])
  log(r,'khrj',{'Sortie/Extériorisation':"Mouvement directionnel du dedans vers le dehors. Quitter le caché pour le visible. Dieu fait sortir le vivant du mort.",'Extraction':"Tirer de l'intérieur avec effort pour révéler. Du potentiel à l'actuel.",'Expulsion':"Sortie forcée contre la volonté. Directionnel et définitif. Adam chassé du Paradis.",'Divers':"Sens dérivés."})

  // 233. hbt (هبط) — descendre
  r = await ins('hbt', [
    {sense:'descendre',concept:'Descente/Chute',description:"Mouvement directionnel du haut vers le bas, de ce qui est élevé vers ce qui est plus bas — c'est le contraire de monter, le mouvement vers la terre plutôt que vers le ciel. La descente est ponctuelle dans l'acte mais peut marquer un changement d'état permanent. Adam et Ève sont descendus du Paradis vers la terre : ce fut une chute spirituelle autant que spatiale. La révélation descend du ciel vers les hommes : c'est une grâce qui s'abaisse vers ceux qui sont en bas."},
    {sense:'faire descendre',concept:'Descente/Chute',description:''},
    {sense:'baisser',concept:'Descente/Chute',description:''},
    {sense:'tomber',concept:'Descente/Chute',description:''},
    {sense:'dégrader',concept:'Dégradation',description:"Acte de faire baisser la qualité, le rang ou la valeur de quelque chose ou quelqu'un — c'est une descente qui atteint l'être dans sa dignité ou son excellence. La dégradation est directionnelle vers le pire : ce qui était élevé devient bas, ce qui était noble devient vil. C'est un jugement rationnel sur la perte de qualité. La dégradation peut être subie (l'usure du temps) ou infligée (la punition qui rabaisse)."},
  ])
  log(r,'hbt',{'Descente/Chute':"Mouvement directionnel du haut vers le bas. Adam descend du Paradis. La révélation descend vers les hommes.",'Dégradation':"Descente de valeur ou de rang vers le pire. Perte de dignité ou d'excellence."})

  // 234. edw (عدو) — ennemi, courir, transgresser
  r = await ins('edw', [
    {sense:'ennemi',concept:'Hostilité/Inimitié',description:"Celui qui veut du mal et agit pour nuire — l'ennemi est en état permanent d'opposition hostile, sa relation est définie par le désir de vaincre ou de détruire l'autre. L'inimitié est directionnelle : elle sort de l'ennemi et vise sa cible. L'ennemi n'est pas simplement différent ou distant, il est activement opposé. Le diable est déclaré ennemi manifeste de l'homme dans le Coran, car son but est de le perdre."},
    {sense:'hostilité',concept:'Hostilité/Inimitié',description:''},
    {sense:'agression',concept:'Hostilité/Inimitié',description:''},
    {sense:'courir',concept:'Course/Vitesse',description:"Mouvement rapide et directionnel vers un but qui dépasse la marche normale — courir c'est aller vite, avec effort et intensité. La course est ponctuelle mais peut être soutenue. On court vers ce qu'on veut atteindre ou contre ce qu'on veut fuir. La course implique l'urgence, la poursuite, la hâte d'arriver quelque part."},
    {sense:'transgresser',concept:'Transgression/Excès',description:"Acte de dépasser les limites fixées par la loi, la morale ou l'autorité légitime — c'est aller au-delà de ce qui est permis, franchir la ligne qui sépare le licite de l'interdit. La transgression est directionnelle vers le trop, vers l'excès. Le transgresseur ne respecte pas les bornes, il prend ce qui ne lui revient pas, il fait ce qui lui est défendu. La transgression est un acte ponctuel mais grave qui rompt l'ordre juste."},
    {sense:'injustice',concept:'Transgression/Excès',description:''},
  ])
  log(r,'edw',{'Hostilité/Inimitié':"État permanent d'opposition hostile. Directionnel vers la cible. Le diable ennemi déclaré de l'homme.",'Course/Vitesse':"Mouvement rapide directionnel vers un but. L'urgence de la poursuite.",'Transgression/Excès':"Acte de franchir les limites vers l'interdit. Dépasser ce qui est permis. Rompre l'ordre juste."})

  // 235. lkm (لكم) — pour vous
  r = await ins('lkm', [
    {sense:'pour vous',concept:'Attribution/Possession',description:"Préposition composée qui désigne le groupe à qui l'on parle comme destinataire de ce qui est donné ou attribué — c'est directionnel vers l'interlocuteur, vers le vous qui écoute. L'attribution établit que quelque chose appartient ou est destiné à ceux à qui l'on s'adresse. Ce qui est pour vous vous revient de droit ou par don. Cette formule crée un lien entre le locuteur qui donne ou reconnaît et les destinataires qui reçoivent."},
    {sense:'à vous',concept:'Attribution/Possession',description:''},
    {sense:'vous avez',concept:'Attribution/Possession',description:''},
  ])
  log(r,'lkm',{'Attribution/Possession':"Direction vers les interlocuteurs comme destinataires. Ce qui est pour vous vous revient de droit ou par don."})

  // 236. qrr (قرر) — être stable, froid, établir
  r = await ins('qrr', [
    {sense:'être stable',concept:'Stabilité/Établissement',description:"État permanent de ce qui ne bouge pas, qui reste solidement en place sans vaciller — c'est le contraire de l'instabilité, de l'errance, de l'agitation. Ce qui est stable peut servir de fondement, supporter ce qu'on pose dessus, durer dans le temps. La stabilité est intérieure à la chose stable : elle tient par elle-même. S'établir c'est passer de l'errance à la stabilité, trouver sa place et y demeurer."},
    {sense:'s\'établir',concept:'Stabilité/Établissement',description:''},
    {sense:'être froid',concept:'Froid/Fraîcheur',description:"État de basse température qui contraste avec la chaleur — le froid peut apaiser (la fraîcheur qui soulage), conserver (le froid qui préserve) ou durcir (le gel qui fige). L'œil se rafraîchit de joie (qurrat 'ayn) quand il voit ce qui le comble. Le froid est un état physique qui peut devenir métaphore du calme, de la sérénité, du soulagement après l'ardeur."},
    {sense:'rafraîchir',concept:'Froid/Fraîcheur',description:''},
    {sense:'avouer',concept:'Aveu/Reconnaissance',description:"Acte de parole par lequel on reconnaît la vérité qu'on avait cachée ou niée — l'aveu est directionnel, il sort de celui qui avoue vers celui qui reçoit l'aveu. Avouer c'est stabiliser la parole sur le réel, fixer ce qui était flottant entre le vrai et le faux. L'aveu met fin au doute et à la dissimulation. C'est un acte ponctuel qui peut libérer ou condamner selon ce qui est avoué."},
    {sense:'décider',concept:'Décision',description:"Acte de fixer un choix de manière stable et définitive, de trancher entre les options — après la décision, on ne vacille plus, le choix est fait. C'est ponctuel dans l'acte mais permanent dans l'engagement qui en découle. Décider c'est établir une direction, poser un fondement pour l'action future. La décision ferme les possibles pour ouvrir un chemin."},
  ])
  log(r,'qrr',{'Stabilité/Établissement':"État permanent de ce qui reste en place sans vaciller. Fondement qui peut supporter. Passer de l'errance à la fixité.",'Froid/Fraîcheur':"État de basse température qui peut apaiser ou conserver. L'œil rafraîchi par la joie.",'Aveu/Reconnaissance':"Acte directionnel de reconnaître le vrai qu'on cachait. Stabiliser la parole sur le réel.",'Décision':"Acte ponctuel qui fixe un choix stable. Fermer les possibles pour ouvrir un chemin."})

  // 237. mte (متع) — jouir, faire profiter
  r = await ins('mte', [
    {sense:'jouir',concept:'Jouissance/Profit',description:"Acte intérieur de tirer du plaisir, de l'avantage ou du bien de ce qu'on possède ou de ce qui nous est donné — jouir c'est expérimenter le bon, goûter ce qui satisfait, bénéficier de ce qui est à disposition. C'est ponctuel dans l'acte de jouissance mais peut s'étendre sur la durée si le bien demeure. La jouissance est la récompense de celui qui a, le fruit de la possession ou du don reçu."},
    {sense:'faire profiter',concept:'Jouissance/Profit',description:''},
    {sense:'bien temporel',concept:'Bien/Provision',description:"Ce dont on profite un temps avant de le perdre, ce qui passe et s'épuise contrairement à ce qui demeure — le bien temporel est la jouissance d'ici-bas, celle qui a une fin. La vie terrestre elle-même est un bien temporel : on en jouit un temps puis elle s'achève. Le Coran oppose souvent le bien temporel (mata') au bien permanent de l'au-delà pour rappeler que ce monde passe."},
    {sense:'provision',concept:'Bien/Provision',description:''},
    {sense:'prolonger',concept:'Durée/Extension',description:"Acte de repousser la fin, d'étendre dans le temps ce qui allait s'achever — prolonger est directionnel vers l'avenir, il donne plus de durée à ce qui en avait moins. C'est ponctuel dans l'acte mais allonge la période de jouissance ou d'existence. Dieu prolonge la vie de qui Il veut et abrège celle d'autres. La prolongation est un sursis accordé."},
  ])
  log(r,'mte',{'Jouissance/Profit':"Expérience intérieure du bien, du plaisir de ce qu'on a. Goûter ce qui satisfait.",'Bien/Provision':"Ce qui passe et s'épuise, le temporel face à l'éternel. La vie d'ici-bas comme bien qui finit.",'Durée/Extension':"Acte de repousser la fin vers l'avenir. Donner plus de durée. Le sursis accordé."})

  console.log('\n=== Batch 25 v3 terminé — ' + done + '/2321 ===')
}
run().catch(e => { console.error('ERREUR:', e); process.exit(1) })
