const {createClient} = require('@supabase/supabase-js');
const db = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

async function enrichRoot(aid, label, updates, newSenses) {
  console.log('\n=== ENRICHISSEMENT ' + label + ' (aid=' + aid + ') ===');

  // Read existing
  const {data:existing} = await db.from('word_meanings').select('id,concept,sense,display_order').eq('analysis_id', aid).order('display_order');
  console.log('Existant: ' + existing.length + ' sens');
  existing.forEach(s => console.log('  [' + s.concept + '] ' + s.sense));

  // Update descriptions if any
  for (const upd of updates) {
    const {error} = await db.from('word_meanings').update({description: upd.description}).eq('id', upd.id);
    console.log('Update id=' + upd.id + ':', error ? 'ERROR: '+error.message : 'OK');
  }

  // Insert new senses
  const maxOrder = Math.max(...existing.map(s => s.display_order), 0);
  const toInsert = newSenses.map((s, i) => ({...s, analysis_id: aid, display_order: maxOrder + 1 + i}));
  const {error:insErr} = await db.from('word_meanings').insert(toInsert);
  console.log('Insert:', insErr ? 'ERROR: '+insErr.message : toInsert.length + ' sens insérés OK');

  // Update analysis_step
  const {error:stepErr} = await db.from('word_analyses').update({analysis_step:'etymology'}).eq('id', aid);
  console.log('analysis_step → etymology:', stepErr ? 'ERROR: '+stepErr.message : 'OK');

  // Verify
  const {data:final} = await db.from('word_meanings').select('concept,sense').eq('analysis_id', aid).order('display_order');
  console.log('RÉSULTAT: ' + final.length + ' sens');
  let cur = '';
  final.forEach(s => { if(s.concept !== cur) { cur = s.concept; console.log('  [' + cur + ']'); } console.log('    - ' + s.sense); });
}

(async()=>{
  // =============================================
  // 1. ENRICHIR hðr (aid=1304, 4 sens → ~19 sens)
  // =============================================
  // Existing: [Prudence/Méfiance] se méfier, être prudent, craindre, prendre garde
  // Need to find first sense id for description update
  const {data:hdrExisting} = await db.from('word_meanings').select('id,sense').eq('analysis_id', 1304).order('display_order');
  const hdrFirstId = hdrExisting[0].id;

  await enrichRoot(1304, 'hðr (ح ذ ر)', [
    {id: hdrFirstId, description: "État intérieur de vigilance face à un danger potentiel. La prudence est une disposition permanente de l'esprit qui anticipe le risque et prépare la réponse. Elle reste chez celui qui la ressent — c'est un état de veille, pas un acte dirigé vers l'extérieur. Le Lane's donne ḥadhira : « il était prudent, vigilant, sur ses gardes, dans un état de préparation »."}
  ], [
    // Enrichir Prudence/Méfiance
    {concept:'Prudence/Méfiance', sense:'être vigilant',     description:"Être en état d'alerte constante face au danger."},
    {concept:'Prudence/Méfiance', sense:'être sur ses gardes', description:"Se tenir prêt à réagir face à une menace."},
    {concept:'Prudence/Méfiance', sense:'précaution',         description:"Disposition prudente avant d'agir."},

    // Avertissement/Mise en garde (Form II taḥdhīr — CRUCIAL pour ce verset)
    {concept:'Avertissement/Mise en garde', sense:'mettre en garde', description:"Acte extérieur dirigé vers autrui pour le rendre vigilant face à un danger. La mise en garde SORT de celui qui avertit et ATTEINT celui qui est averti — c'est un transfert de vigilance. Le Lane's donne la forme II ḥadhdhara : « il l'a mis en garde, il l'a rendu prudent, il lui a fait craindre ». Contrairement à la prudence qui reste intérieure, la mise en garde est un acte de communication."},
    {concept:'Avertissement/Mise en garde', sense:'avertir',          description:"Informer quelqu'un d'un danger à venir."},
    {concept:'Avertissement/Mise en garde', sense:'prévenir',         description:"Alerter quelqu'un avant que le danger ne survienne."},
    {concept:'Avertissement/Mise en garde', sense:'faire craindre',   description:"Provoquer chez l'autre un état de vigilance par la parole."},

    // Danger/Calamité
    {concept:'Danger/Calamité', sense:'chose crainte',    description:"Ce qui est redouté, ce contre quoi on se prémunit. Le maḥdhūr est l'objet de la prudence — la chose dont on a peur. Le danger est la réalité extérieure qui justifie l'état de vigilance intérieure."},
    {concept:'Danger/Calamité', sense:'calamité',         description:"Événement grave et redouté. Le Lane's donne maḥdhūrah : une calamité que l'on craint."},
    {concept:'Danger/Calamité', sense:'guerre',           description:"Le Lane's inclut la guerre parmi les maḥdhūrāt — les choses craintes."},
    {concept:'Danger/Calamité', sense:'attaque hostile',  description:"Incursion soudaine qui prend par surprise."},

    // Terrain/Rugosité
    {concept:'Terrain/Rugosité', sense:'sol rugueux',         description:"Le Lane's donne ḥidhriyah : terrain accidenté et dur. Extension physique de la racine — ce qui est âpre et demande de la prudence pour s'y engager."},
    {concept:'Terrain/Rugosité', sense:'sommet de montagne',  description:"Partie haute et rugueuse d'un relief."},

    // Fausseté/Vanité
    {concept:'Fausseté/Vanité', sense:'ce qui est faux', description:"Le Lane's donne al-ḥudhurrā : ce qui est vain, faux, sans fondement. Sens isolé de cette racine."},
    {concept:'Fausseté/Vanité', sense:'vain',             description:"Sans valeur ni substance."},
  ]);

  // =============================================
  // 2. ENRICHIR syr (aid=796, 3 sens → ~15 sens)
  // =============================================
  // Existing: [Devenir/Destination] devenir, destination, aboutir
  const {data:syrExisting} = await db.from('word_meanings').select('id,sense').eq('analysis_id', 796).order('display_order');
  const syrFirstId = syrExisting[0].id;

  await enrichRoot(796, 'syr (ص ي ر)', [
    {id: syrFirstId, description: "Processus de passage d'un état à un autre. Le devenir est un mouvement intérieur de transformation — ce qui était une chose se transforme en une autre. Le Lane's donne ṣāra : « il a atteint l'état de telle chose, il est devenu telle chose ». C'est un passage directionnel d'un point de départ vers un point d'arrivée existentiel."}
  ], [
    // Enrichir Devenir/Destination
    {concept:'Devenir/Destination', sense:'se transformer',  description:"Changer de nature ou d'état."},
    {concept:'Devenir/Destination', sense:'évoluer',         description:"Progresser vers un nouvel état."},
    {concept:'Devenir/Destination', sense:'faire devenir',   description:"Forme II (ṣayyara) : amener quelqu'un ou quelque chose à un nouvel état. C'est le causatif du devenir."},
    {concept:'Devenir/Destination', sense:'fin',             description:"Le Lane's donne ṣīr : l'état ultime, la conclusion, l'aboutissement d'une chose."},
    {concept:'Devenir/Destination', sense:'résultat',        description:"Ce à quoi on parvient au terme d'un processus."},
    {concept:'Devenir/Destination', sense:'issue',           description:"Le dénouement d'une situation, ce vers quoi elle mène."},

    // Enclos/Habitat
    {concept:'Enclos/Habitat', sense:'enclos pour bétail', description:"Le Lane's donne ṣīrah : un espace clos construit de bois et de pierres pour les moutons et les vaches. L'enclos est un espace délimité vers lequel on rassemble — extension spatiale de l'idée de destination."},
    {concept:'Enclos/Habitat', sense:'parc',               description:"Espace fermé pour rassembler les animaux."},

    // Jugement/Intelligence
    {concept:'Jugement/Intelligence', sense:'jugement final', description:"Le Lane's donne ṣayyūr : le jugement ou l'opinion à laquelle on parvient finalement. C'est la destination intellectuelle — le point d'arrivée de la réflexion."},
    {concept:'Jugement/Intelligence', sense:'opinion',        description:"Ce à quoi on aboutit après réflexion."},
    {concept:'Jugement/Intelligence', sense:'intelligence',   description:"Capacité de parvenir à un jugement. Le Lane's donne : « il n'a ni première ni dernière idée » (mā lahu ṣayyūr)."},

    // Séjour/Sépulture
    {concept:'Séjour/Sépulture', sense:'lieu de séjour', description:"Le Lane's donne ṣāʾir : celui qui reste, qui séjourne dans un lieu. Le maṣīr est aussi un bon lieu de séjour. Le séjour est l'aboutissement spatial — le lieu où l'on finit par rester."},
    {concept:'Séjour/Sépulture', sense:'tombe',          description:"Le Lane's donne ṣayyir : la tombe. La sépulture est la destination finale du corps."},
  ]);

  console.log('\n========================================');
  console.log('ENRICHISSEMENT TERMINÉ');
  console.log('========================================');
})();
