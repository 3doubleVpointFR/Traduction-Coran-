const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
let done = 348, total = 2321

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

  // 349. sda (صدع) — fendre, proclamer
  r = await ins('sda', [
    {sense:'fendre',concept:'Fissure/Rupture',description:"Acte de séparer ce qui était joint en créant une ouverture — fendre (sad') est directionnel à travers la matière qui se divise. C'est ponctuel dans l'acte mais crée un état permanent de division. La fissure révèle l'intérieur de ce qui était fermé. La terre se fend pour laisser sortir les plantes, le cœur se fend de douleur."},
    {sense:'fissure',concept:'Fissure/Rupture',description:''},
    {sense:'proclamer',concept:'Proclamation/Manifestation',description:"Acte d'annoncer publiquement ce qui était tu — proclamer est directionnel vers ceux qui entendent. L'ordre de proclamer (fasda' bimâ tu'mar) est donné au Prophète : faire sortir la vérité au grand jour, la rendre publique. La proclamation fend le silence comme la fissure fend la pierre."},
    {sense:'déclarer',concept:'Proclamation/Manifestation',description:''},
  ])
  log(r,'sda',{'Fissure/Rupture':"Séparer ce qui était joint. Directionnel à travers la matière. Révèle l'intérieur.",'Proclamation/Manifestation':"Annoncer publiquement. Faire sortir la vérité. Fend le silence."})

  // 350. ghl f (غلف) — enveloppe, fourreau
  r = await ins('ghl f', [
    {sense:'enveloppe',concept:'Couverture/Protection',description:"Ce qui recouvre et protège quelque chose de l'extérieur — l'enveloppe (ghilâf) est permanente comme couche protectrice qui cache et préserve ce qu'elle contient. Les cœurs enveloppés (ghulf) sont ceux qui sont fermés, couverts d'un voile qui empêche la guidance d'y pénétrer. L'enveloppe peut protéger mais aussi emprisonner."},
    {sense:'fourreau',concept:'Couverture/Protection',description:''},
    {sense:'voile sur le cœur',concept:'Couverture/Protection',description:''},
    {sense:'cœurs enveloppés',concept:'Fermeture spirituelle',description:"État de ceux dont le cœur est scellé contre la vérité — les cœurs enveloppés (qulûbunâ ghulf) ne reçoivent pas la guidance. C'est permanent comme disposition spirituelle négative. Un jugement sur l'état intérieur de ceux qui refusent d'entendre."},
  ])
  log(r,'ghl f',{'Couverture/Protection':"Ce qui recouvre de l'extérieur. Cache et préserve. Peut aussi emprisonner.",'Fermeture spirituelle':"Cœurs scellés contre la vérité. Refus permanent d'entendre."})

  // 351. fty (فتي) — jeune homme, avis juridique
  r = await ins('fty', [
    {sense:'jeune homme',concept:'Jeunesse/Vigueur',description:"Celui qui est dans la fleur de l'âge, plein de force et d'élan — le jeune homme (fatâ) est dans un état de vigueur et de potentiel. C'est une période temporaire de la vie où l'énergie est à son maximum. Les jeunes gens de la Caverne (fityân) ont choisi Dieu dans leur jeunesse. Abraham jeune (fatâ) a brisé les idoles."},
    {sense:'serviteur',concept:'Jeunesse/Vigueur',description:''},
    {sense:'esclave',concept:'Jeunesse/Vigueur',description:''},
    {sense:'avis juridique',concept:'Consultation/Décision',description:"Réponse donnée à une question de droit ou de religion — la fatwa est directionnelle de celui qui sait vers celui qui interroge. C'est ponctuel dans l'acte de répondre mais peut établir une règle. Donner un avis c'est trancher une question par la connaissance."},
    {sense:'consulter',concept:'Consultation/Décision',description:''},
  ])
  log(r,'fty',{'Jeunesse/Vigueur':"Fleur de l'âge, plein de force. État temporaire de potentiel maximum. Les jeunes choisissent Dieu.",'Consultation/Décision':"Réponse à une question juridique. Directionnel vers le questionneur. Trancher par la connaissance."})

  // 352. wfq (وفق) — réussir, accorder
  r = await ins('wfq', [
    {sense:'réussir',concept:'Réussite/Concordance',description:"Atteindre le but visé, voir ses efforts couronnés de succès — la réussite (tawfîq) est le résultat d'une concordance entre l'effort et l'aide divine. C'est ponctuel comme aboutissement mais fruit d'un processus. Le tawfîq est de Dieu seul : c'est Lui qui fait coïncider les causes et les effets pour que le serviteur réussisse dans le bien."},
    {sense:'accorder',concept:'Réussite/Concordance',description:''},
    {sense:'conformer',concept:'Réussite/Concordance',description:''},
    {sense:'concorder',concept:'Réussite/Concordance',description:''},
    {sense:'assistance divine',concept:'Réussite/Concordance',description:''},
  ])
  log(r,'wfq',{'Réussite/Concordance':"Atteindre le but. Concordance effort-aide divine. Le tawfîq vient de Dieu seul."})

  // 353. ḫyl (خيل) — chevaux, imaginer
  r = await ins('ḫyl', [
    {sense:'chevaux',concept:'Équidés/Puissance',description:"Animaux nobles utilisés pour la guerre et le prestige — les chevaux (khayl) sont permanents comme catégorie animale associée à la force et à la noblesse. Ils sont créés pour la beauté et pour le combat. Les chevaux sont un signe de la puissance de Dieu et une bénédiction pour l'homme. Leur galop est le tonnerre de la guerre."},
    {sense:'cavalerie',concept:'Équidés/Puissance',description:''},
    {sense:'imaginer',concept:'Imagination/Apparence',description:"Se représenter mentalement ce qui n'est pas présent — l'imagination (khayâl) est intérieure comme faculté de l'esprit. Elle peut être créatrice ou trompeuse. Les sorciers firent imaginer (yukhayyal) que leurs cordes se mouvaient : l'illusion n'est pas la réalité."},
    {sense:'sembler',concept:'Imagination/Apparence',description:''},
    {sense:'illusion',concept:'Imagination/Apparence',description:''},
  ])
  log(r,'ḫyl',{'Équidés/Puissance':"Animaux nobles de guerre. Associés à force et noblesse. Signe de puissance divine.",'Imagination/Apparence':"Représentation mentale. Intérieure à l'esprit. Peut être trompeuse."})

  // 354. arsl (أرسل) — envoyer
  r = await ins('arsl', [
    {sense:'envoyer',concept:'Mission/Envoi',description:"Acte de faire partir quelqu'un ou quelque chose vers une destination — envoyer (arsala) est directionnel de l'envoyeur vers le destinataire. C'est ponctuel dans l'acte d'envoi mais peut créer une mission permanente. Dieu envoie (arsala) les prophètes vers les peuples. L'envoi divin est un acte de miséricorde qui porte le message de guidance."},
    {sense:'dépêcher',concept:'Mission/Envoi',description:''},
    {sense:'messager',concept:'Mission/Envoi',description:''},
    {sense:'lâcher',concept:'Libération',description:"Laisser aller librement — lâcher est directionnel vers l'extérieur. Les vents sont envoyés (mursalât) librement à travers le monde."},
  ])
  log(r,'arsl',{'Mission/Envoi':"Faire partir vers une destination. Directionnel. Dieu envoie les prophètes par miséricorde.",'Libération':"Laisser aller librement. Les vents envoyés à travers le monde."})

  // 355. bxl (بخل) — être avare
  r = await ins('bxl', [
    {sense:'être avare',concept:'Avarice/Rétention',description:"Refuser de donner ce qu'on possède, retenir par attachement excessif — l'avarice (bukhl) est un état intérieur permanent de fermeture de la main et du cœur. C'est un jugement de valeur négatif sur celui qui refuse de partager. L'avare retient ce que Dieu lui a donné comme s'il en était le propriétaire absolu, oubliant qu'il n'est que dépositaire."},
    {sense:'avarice',concept:'Avarice/Rétention',description:''},
    {sense:'parcimonie',concept:'Avarice/Rétention',description:''},
    {sense:'retenir',concept:'Avarice/Rétention',description:''},
  ])
  log(r,'bxl',{'Avarice/Rétention':"Refuser de donner. Fermeture de la main et du cœur. L'avare oublie qu'il est dépositaire."})

  // 356. sama (سمو) — s'élever, ciel
  r = await ins('sama', [
    {sense:"s'élever",concept:'Élévation/Hauteur',description:"Mouvement vers le haut, passage du bas vers le haut — s'élever (samâ) est directionnel vers le ciel. C'est un mouvement qui peut être physique ou spirituel. Ce qui s'élève quitte le bas pour atteindre le haut. L'âme qui s'élève aspire aux hauteurs célestes, elle ne se contente pas du terrestre."},
    {sense:'monter',concept:'Élévation/Hauteur',description:''},
    {sense:'ciel',concept:'Ciel/Voûte',description:"L'espace au-dessus de la terre — le ciel (samâ') est permanent comme réalité cosmique qui couvre la terre. Les sept cieux sont étagés au-dessus de nous. Le ciel est le lieu de la transcendance, là où montent les actes et d'où descendent les décrets."},
    {sense:'voûte céleste',concept:'Ciel/Voûte',description:''},
    {sense:'haut',concept:'Élévation/Hauteur',description:''},
  ])
  log(r,'sama',{'Élévation/Hauteur':"Mouvement vers le haut. Physique ou spirituel. L'âme aspire aux hauteurs.",'Ciel/Voûte':"Espace au-dessus de la terre. Les sept cieux. Lieu de transcendance."})

  // 357. ð k r (ذكر) — rappeler, mâle
  r = await ins('ð k r', [
    {sense:'rappeler',concept:'Rappel/Mémoire',description:"Acte de faire revenir à la conscience ce qui était oublié — le rappel (dhikr) est directionnel vers celui qu'on rappelle et vers ce qui est rappelé. C'est ponctuel dans l'acte mais devrait être permanent comme pratique. Le dhikr de Dieu est le cœur de l'adoration : se souvenir de Lui constamment, garder Sa présence à l'esprit. Les cœurs s'apaisent par le rappel de Dieu."},
    {sense:'mentionner',concept:'Rappel/Mémoire',description:''},
    {sense:'invoquer',concept:'Rappel/Mémoire',description:''},
    {sense:'mémoire',concept:'Rappel/Mémoire',description:''},
    {sense:'mâle',concept:'Masculinité',description:"L'être de sexe masculin — le mâle (dhakar) est permanent comme catégorie biologique complémentaire de la femelle. La création en paires (mâle et femelle) est un signe divin."},
  ])
  log(r,'ð k r',{'Rappel/Mémoire':"Faire revenir à la conscience. Le dhikr de Dieu apaise les cœurs. Devrait être permanent.",'Masculinité':"Être de sexe masculin. Complémentaire de la femelle. Création en paires."})

  // 358. dhalika — celui-là
  r = await ins('dhalika', [
    {sense:'celui-là',concept:'Démonstration/Distance',description:"Pronom démonstratif qui pointe vers ce qui est éloigné dans l'espace ou le discours — dhâlika désigne ce qui n'est pas immédiatement présent, ce qui est distant. C'est directionnel vers le lointain. Dans le Coran, il introduit souvent une conclusion ou désigne solennellement ce qui vient d'être mentionné : 'Dhâlika al-kitâb' — ce Livre-là, celui dont il a été question."},
    {sense:'cela',concept:'Démonstration/Distance',description:''},
    {sense:'ce',concept:'Démonstration/Distance',description:''},
    {sense:'voilà',concept:'Démonstration/Distance',description:''},
  ])
  log(r,'dhalika',{'Démonstration/Distance':"Pointe vers le distant. Introduit conclusions. Désigne solennellement."})

  console.log('\n=== Batch 37 terminé — ' + done + '/2321 ===')
}
run().catch(e => { console.error('ERREUR:', e); process.exit(1) })
