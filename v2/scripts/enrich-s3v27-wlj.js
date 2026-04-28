const {createClient} = require('@supabase/supabase-js');
const Database = require('better-sqlite3');
const db = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

const AID = 1246; // wlj analysis_id

(async()=>{
  // =============================================
  // 1. Vérifier Lane's SQLite
  // =============================================
  console.log('=== LANE\'S pour wlj (و ل ج) ===\n');
  const lane = new Database('lanes_data/lexicon.sqlite');
  const rootRow = lane.prepare("SELECT id, word FROM root WHERE word = 'ولج'").get();
  if (!rootRow) { console.log('Racine non trouvée !'); return; }
  const entries = lane.prepare("SELECT word, xml FROM entry WHERE root = ?").all(rootRow.word);
  console.log('Entrées Lane\'s: ' + entries.length);
  entries.forEach(e => {
    const text = e.xml.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    console.log('\n--- ' + e.word + ' ---');
    console.log(text.substring(0, 200));
  });
  lane.close();

  // =============================================
  // 2. Lire les sens existants
  // =============================================
  console.log('\n\n=== SENS EXISTANTS ===');
  const {data:existing} = await db.from('word_meanings').select('id,concept,sense,display_order,description').eq('analysis_id', AID).order('display_order');
  existing.forEach(s => console.log('  id=' + s.id + ' order=' + s.display_order + ' [' + s.concept + '] ' + s.sense));

  // =============================================
  // 3. Mettre à jour la description du concept existant
  // =============================================
  console.log('\n=== UPDATE description existante ===');
  const {error:upErr} = await db.from('word_meanings').update({
    description: "Acte directionnel de passer de l'extérieur vers l'intérieur. L'entrée est un mouvement qui traverse une frontière — le dehors devient le dedans. C'est un passage qui transforme la relation spatiale entre deux réalités. Quand c'est la nuit qui entre dans le jour, c'est un envahissement progressif d'un état par l'autre."
  }).eq('id', existing[0].id);
  console.log('Update id=' + existing[0].id + ':', upErr ? 'ERROR: '+upErr.message : 'OK');

  // =============================================
  // 4. Insérer les nouveaux sens
  // =============================================
  console.log('\n=== INSERT nouveaux sens ===');
  const maxOrder = Math.max(...existing.map(s => s.display_order));
  const newSenses = [
    // Enrichir Entrée/Pénétration (sens manquants de forme IV)
    {analysis_id:AID, concept:'Entrée/Pénétration', sense:'faire entrer', display_order:maxOrder+1,
     description:"Forme IV (awlaja) : faire passer quelque chose de l'extérieur vers l'intérieur. C'est l'acte causatif — celui qui fait entrer provoque le passage d'une chose dans une autre."},
    {analysis_id:AID, concept:'Entrée/Pénétration', sense:'insérer', display_order:maxOrder+2,
     description:"Placer une chose à l'intérieur d'une autre. L'insertion est un placement actif et précis."},
    {analysis_id:AID, concept:'Entrée/Pénétration', sense:'introduire', display_order:maxOrder+3,
     description:"Faire passer vers l'intérieur. L'introduction est l'acte initial qui amorce la présence à l'intérieur."},
    {analysis_id:AID, concept:'Entrée/Pénétration', sense:'enfoncer', display_order:maxOrder+4,
     description:"Faire pénétrer en profondeur. L'enfoncement est une entrée qui va au-delà de la surface."},

    // Nouveau concept : Abri/Refuge
    {analysis_id:AID, concept:'Abri/Refuge', sense:'caverne', display_order:maxOrder+5,
     description:"Espace naturel fermé qui protège de l'extérieur. La walajah est un creux dans la montagne ou la vallée — un lieu où l'on entre pour se mettre à couvert. L'abri est un dedans qui protège du dehors, une extension spatiale de l'idée d'entrée."},
    {analysis_id:AID, concept:'Abri/Refuge', sense:'abri', display_order:maxOrder+6,
     description:"Lieu protégé où l'on se réfugie."},
    {analysis_id:AID, concept:'Abri/Refuge', sense:'repaire', display_order:maxOrder+7,
     description:"Cachette d'un animal sauvage (tawlaj). Le repaire est le lieu où la bête entre pour se cacher."},
    {analysis_id:AID, concept:'Abri/Refuge', sense:'recoin de vallée', display_order:maxOrder+8,
     description:"Coude ou repli dans une vallée (walajah) — un creux naturel qui forme un abri."},

    // Nouveau concept : Intrusion/Infiltration
    {analysis_id:AID, concept:'Intrusion/Infiltration', sense:'intrus', display_order:maxOrder+9,
     description:"Personne qui entre dans un groupe sans lui appartenir. La walījah est celui qui s'insère dans un cercle dont il n'est pas originaire. L'intrusion est une entrée non légitime — la personne traverse une frontière sociale qu'elle n'est pas supposée franchir."},
    {analysis_id:AID, concept:'Intrusion/Infiltration', sense:'étranger introduit', display_order:maxOrder+10,
     description:"Personne extérieure admise dans un cercle. C'est le walījah — celui qui vient du dehors et qui est intégré."},
    {analysis_id:AID, concept:'Intrusion/Infiltration', sense:'ami intime', display_order:maxOrder+11,
     description:"Personne qui entre dans l'intimité d'un autre. Le walījah est aussi le confident — celui à qui on ouvre sa porte intérieure."},

    // Nouveau concept : Maladie/Douleur
    {analysis_id:AID, concept:'Maladie/Douleur', sense:'maladie du ventre', display_order:maxOrder+12,
     description:"La wālijah est une douleur qui entre dans le corps — elle pénètre de l'extérieur vers l'intérieur. La maladie est vue comme une chose qui s'introduit dans l'organisme, ce qui rejoint le sens premier d'entrée."},
    {analysis_id:AID, concept:'Maladie/Douleur', sense:'douleur des dents', display_order:maxOrder+13,
     description:"Douleur qui pénètre les dents. Le Lane's donne wālijah comme une douleur des dents."},

    // Nouveau concept : Lieu d'entrée
    {analysis_id:AID, concept:"Lieu d'entrée", sense:'entrée', display_order:maxOrder+14,
     description:"Le mawlij est l'endroit par où l'on entre — le lieu de passage de l'extérieur vers l'intérieur. C'est le point spatial où l'acte d'entrée se produit."},
    {analysis_id:AID, concept:"Lieu d'entrée", sense:'passage', display_order:maxOrder+15,
     description:"Espace étroit qui permet de passer d'un côté à l'autre."},
  ];

  const {error:insErr} = await db.from('word_meanings').insert(newSenses);
  console.log('Insert:', insErr ? 'ERROR: '+insErr.message : newSenses.length + ' sens insérés OK');

  // =============================================
  // 5. Mettre à jour analysis_step
  // =============================================
  const {error:stepErr} = await db.from('word_analyses').update({analysis_step:'etymology'}).eq('id', AID);
  console.log('analysis_step:', stepErr ? 'ERROR: '+stepErr.message : 'OK → etymology');

  // =============================================
  // 6. Vérifier le résultat final
  // =============================================
  const {data:final} = await db.from('word_meanings').select('concept,sense').eq('analysis_id', AID).order('display_order');
  console.log('\n=== RÉSULTAT FINAL: ' + final.length + ' sens ===');
  let cur = '';
  final.forEach(s => {
    if(s.concept !== cur) { cur = s.concept; console.log('\n[' + cur + ']'); }
    console.log('  - ' + s.sense);
  });

  // 7. Vérifier word_daily
  const {count} = await db.from('word_daily').select('*',{count:'exact',head:true}).eq('analysis_id', AID);
  console.log('\n=== WORD_DAILY: ' + (count > 0 ? count + ' phrases existantes' : 'AUCUNE — à insérer dans le pipeline') + ' ===');
})();
