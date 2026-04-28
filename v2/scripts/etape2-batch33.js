const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 308, total = 2321

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

  // 309. shfe (شفع) — intercéder, pair
  r = await ins('shfe', [
    {sense:'intercéder',concept:'Intercession',description:"Acte de parler en faveur de quelqu'un auprès d'une autorité — l'intercession (shafâ'a) est directionnelle de l'intercesseur vers l'autorité et en faveur du bénéficiaire. C'est ponctuel mais peut avoir un effet définitif. Nul n'intercède auprès de Dieu sans Sa permission. L'intercession du Prophète au Jour du Jugement est espérée par les croyants."},
    {sense:'médiation',concept:'Intercession',description:''},
    {sense:'pair',concept:'Parité/Couple',description:"Ce qui va par deux, l'opposé de l'impair — le pair est permanent comme qualité numérique. Le pair et l'impair sont des réalités complémentaires par lesquelles Dieu jure dans le Coran."},
    {sense:'double',concept:'Parité/Couple',description:''},
  ])
  log(r,'shfe',{'Intercession':"Parler en faveur de quelqu'un. Directionnelle vers l'autorité. Nécessite la permission divine.",'Parité/Couple':"Ce qui va par deux. Complémentaire de l'impair."})

  // 310. akhḏ (أخذ) — prendre (variante)
  r = await ins('akhḏ', [
    {sense:'prendre',concept:'Prise/Acquisition',description:"Acte de saisir quelque chose pour se l'approprier ou l'utiliser — prendre est directionnel vers ce qui est saisi. C'est ponctuel mais crée un nouvel état de possession ou d'usage. Dieu prend les âmes au moment de la mort. Prendre une décision c'est la saisir parmi les possibles."},
    {sense:'saisir',concept:'Prise/Acquisition',description:''},
    {sense:'recevoir',concept:'Prise/Acquisition',description:''},
    {sense:'punir',concept:'Prise/Acquisition',description:''},
  ])
  log(r,'akhḏ',{'Prise/Acquisition':"Saisir pour s'approprier. Directionnel vers ce qui est saisi. Crée un nouvel état."})

  // 311. aal (ءال) — instrument, signe
  r = await ins('aal', [
    {sense:'signe',concept:'Signe/Manifestation',description:"Ce qui indique autre chose que soi-même — le signe (âya) est permanent comme réalité signifiante qui pointe vers ce qu'elle représente. Les signes de Dieu sont dans la création et dans le Coran. Celui qui voit les signes et les comprend accède à la connaissance de Celui qui les a posés."},
    {sense:'miracle',concept:'Signe/Manifestation',description:''},
    {sense:'verset',concept:'Signe/Manifestation',description:''},
  ])
  log(r,'aal',{'Signe/Manifestation':"Ce qui indique autre chose que soi. Permanent comme réalité signifiante. Pointe vers le Créateur."})

  // 312. nsr (نصر) — aider, secourir
  r = await ins('nsr', [
    {sense:'secourir',concept:'Secours/Victoire',description:"Acte de venir en aide à quelqu'un dans le besoin ou la détresse — le secours (nasr) est directionnel de celui qui aide vers celui qui est aidé. C'est ponctuel dans l'acte mais peut être décisif. Le secours de Dieu (nasr Allah) est la victoire accordée à Ses alliés. Dieu est le Meilleur des secoureurs car Son aide est efficace et suffisante."},
    {sense:'aider',concept:'Secours/Victoire',description:''},
    {sense:'victoire',concept:'Secours/Victoire',description:''},
    {sense:'défendre',concept:'Secours/Victoire',description:''},
    {sense:'partisan',concept:'Alliance/Soutien',description:"Celui qui soutient une cause ou une personne — le partisan (nâsir) est permanent dans son engagement envers ce qu'il soutient."},
  ])
  log(r,'nsr',{'Secours/Victoire':"Venir en aide dans la détresse. Directionnel vers l'aidé. Le secours de Dieu est la vraie victoire.",'Alliance/Soutien':"Engagement permanent envers une cause."})

  // 313. swm (سوم) — marquer, faire paître
  r = await ins('swm', [
    {sense:'marquer',concept:'Marque/Signe',description:"Acte de mettre un signe distinctif sur quelque chose — marquer est directionnel vers ce qu'on distingue. C'est ponctuel mais crée un état permanent de distinction. Les anges marqués (musawwamîn) sont reconnaissables par leur signe."},
    {sense:'signe distinctif',concept:'Marque/Signe',description:''},
    {sense:'faire paître',concept:'Pâturage',description:"Acte de mener les bêtes au pâturage — faire paître est directionnel du berger vers le troupeau et vers l'herbe. Les bêtes qu'on laisse paître librement mangent ce que la terre produit."},
    {sense:'livrer au mal',concept:'Affliction',description:"Infliger un tourment continu — Pharaon faisait subir aux fils d'Israël le pire des tourments (yasûmûnahum)."},
  ])
  log(r,'swm',{'Marque/Signe':"Mettre un signe distinctif. Directionnel vers ce qu'on distingue.",'Pâturage':"Mener au pâturage. Du berger vers le troupeau.",'Affliction':"Infliger un tourment continu."})

  // 314. swa (سوء) — mal, mauvais
  r = await ins('swa', [
    {sense:'mal',concept:'Mal/Mauvais',description:"Ce qui cause du tort, qui est contraire au bien — le mal (sû') est permanent comme réalité opposée au bien. C'est un jugement de valeur sur ce qui nuit, dégrade ou corrompt. Le mal peut être moral (péché), physique (souffrance) ou métaphysique (le mal radical). Dieu n'est pas l'auteur du mal mais l'a permis comme épreuve."},
    {sense:'mauvais',concept:'Mal/Mauvais',description:''},
    {sense:'nuisible',concept:'Mal/Mauvais',description:''},
    {sense:'péché',concept:'Mal/Mauvais',description:''},
    {sense:'honte',concept:'Honte/Pudeur',description:"Ce qui cause la gêne quand il est exposé — les parties honteuses (saw'a) sont ce qu'on cache par pudeur. La nudité d'Adam et Ève leur est apparue après la faute."},
  ])
  log(r,'swa',{'Mal/Mauvais':"Ce qui cause du tort. Opposé au bien. Jugement de valeur sur ce qui nuit.",'Honte/Pudeur':"Ce qu'on cache par pudeur. La nudité révélée après la faute."})

  // 315. ḏbh (ذبح) — égorger, sacrifier
  r = await ins('ḏbh', [
    {sense:'égorger',concept:'Sacrifice/Immolation',description:"Acte de tuer un animal en lui tranchant la gorge — l'égorgement (dhabh) est directionnel de celui qui égorge vers l'animal. C'est ponctuel et irréversible. Le sacrifice rituel offre à Dieu une vie en reconnaissance de Ses bienfaits. Abraham a été prêt à sacrifier son fils par obéissance avant que Dieu ne le rachète par un bélier."},
    {sense:'sacrifier',concept:'Sacrifice/Immolation',description:''},
    {sense:'immoler',concept:'Sacrifice/Immolation',description:''},
    {sense:'victime',concept:'Sacrifice/Immolation',description:''},
  ])
  log(r,'ḏbh',{'Sacrifice/Immolation':"Tuer rituellement en tranchant la gorge. Ponctuel et irréversible. Offrir une vie à Dieu."})

  // 316. nsa (نسء) — femmes, retarder
  r = await ins('nsa', [
    {sense:'femmes',concept:'Féminin/Épouses',description:"Les êtres humains de sexe féminin — les femmes (nisâ') sont permanentes comme moitié de l'humanité. Elles sont les épouses, les mères, les filles. Le Coran leur consacre une sourate entière et définit leurs droits dans le mariage, l'héritage, le témoignage."},
    {sense:'épouses',concept:'Féminin/Épouses',description:''},
    {sense:'retarder',concept:'Report/Délai',description:"Repousser quelque chose à plus tard — retarder est directionnel vers l'avenir. Le report des mois sacrés (nasî') était une manipulation du calendrier que le Coran condamne."},
    {sense:'différer',concept:'Report/Délai',description:''},
  ])
  log(r,'nsa',{'Féminin/Épouses':"Les êtres de sexe féminin. Moitié de l'humanité. Droits définis par le Coran.",'Report/Délai':"Repousser à plus tard. Directionnel vers l'avenir."})

  // 317. ðlk (ذلك) — celui-là, cela
  r = await ins('ðlk', [
    {sense:'celui-là',concept:'Démonstratif éloigné',description:"Pronom qui désigne ce qui est distant dans l'espace, le temps ou le discours — celui-là pointe vers ce qui n'est pas immédiatement présent. C'est directionnel vers le loin. Dans le Coran, 'dhâlika' introduit souvent une conclusion ou une explication de ce qui précède."},
    {sense:'cela',concept:'Démonstratif éloigné',description:''},
    {sense:'ce',concept:'Démonstratif éloigné',description:''},
  ])
  log(r,'ðlk',{'Démonstratif éloigné':"Désigne ce qui est distant. Directionnel vers le loin. Introduit conclusions et explications."})

  // 318. blaa (بلا) — éprouver, affliction
  r = await ins('blaa', [
    {sense:'éprouver',concept:'Épreuve/Test',description:"Acte de soumettre quelqu'un à une situation difficile pour révéler sa vraie nature — l'épreuve (balâ') est directionnelle de Celui qui éprouve vers celui qui est éprouvé. C'est ponctuel dans l'événement mais révèle une réalité permanente du caractère. Dieu éprouve Ses serviteurs par le bien et par le mal pour distinguer les sincères des hypocrites."},
    {sense:'tester',concept:'Épreuve/Test',description:''},
    {sense:'affliction',concept:'Épreuve/Test',description:''},
    {sense:'malheur',concept:'Épreuve/Test',description:''},
    {sense:'user',concept:'Usure',description:"Rendre vieux par l'usage — ce qui s'use perd sa nouveauté et sa force avec le temps."},
  ])
  log(r,'blaa',{'Épreuve/Test':"Soumettre au difficile pour révéler la vraie nature. Distingue les sincères des hypocrites.",'Usure':"Perdre force et nouveauté avec le temps."})

  console.log('\n=== Batch 33 terminé — ' + done + '/2321 ===')
}
run().catch(e => { console.error('ERREUR:', e); process.exit(1) })
