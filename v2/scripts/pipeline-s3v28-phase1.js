const {createClient} = require('@supabase/supabase-js');
const Database = require('better-sqlite3');
const db = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);
const lane = new Database('lanes_data/lexicon.sqlite');

async function enrichRoot(aid, label, updates, newSenses) {
  console.log('\n=== ENRICHISSEMENT ' + label + ' (aid=' + aid + ') ===');
  const {data:existing} = await db.from('word_meanings').select('id,concept,sense,display_order').eq('analysis_id', aid).order('display_order');
  console.log('Existant: ' + existing.length + ' sens');
  existing.forEach(s => console.log('  [' + s.concept + '] ' + s.sense));

  for (const upd of updates) {
    const {error} = await db.from('word_meanings').update({description: upd.description}).eq('id', upd.id);
    console.log('Update id=' + upd.id + ':', error ? 'ERROR: '+error.message : 'OK');
  }

  const maxOrder = Math.max(...existing.map(s => s.display_order), 0);
  const toInsert = newSenses.map((s, i) => ({...s, analysis_id: aid, display_order: maxOrder + 1 + i}));
  if (toInsert.length > 0) {
    const {error:insErr} = await db.from('word_meanings').insert(toInsert);
    console.log('Insert:', insErr ? 'ERROR: '+insErr.message : toInsert.length + ' sens insérés OK');
  }

  const {error:stepErr} = await db.from('word_analyses').update({analysis_step:'etymology'}).eq('id', aid);
  console.log('analysis_step → etymology:', stepErr ? 'ERROR: '+stepErr.message : 'OK');

  const {data:final} = await db.from('word_meanings').select('concept,sense').eq('analysis_id', aid).order('display_order');
  console.log('RÉSULTAT: ' + final.length + ' sens');
  let cur = '';
  final.forEach(s => { if(s.concept !== cur) { cur = s.concept; console.log('  [' + cur + ']'); } console.log('    - ' + s.sense); });
  return final.length;
}

(async()=>{
  // =============================================
  // 0. FIX SEGMENTS — awliyāʾ → important, hum → particle
  // =============================================
  console.log('=== CORRECTION DES SEGMENTS ===');
  const {data:va} = await db.from('verse_analyses').select('segments').eq('id', 680).single();
  const segs = [...va.segments];

  // Fix pos=5 (index 4): awliyāʾa → important
  segs[4] = {
    key: 'wly',
    pos: 'nom',
    oath: false,
    phon: 'awliyāʾa',
    root: 'و ل ي',
    type: 'important',
    idafa: false,
    tense: null,
    voice: null,
    arabic: 'أَوْلِيَآءَ',
    gender: 'masculin',
    number: 'pluriel',
    person: null,
    definite: false,
    position: 5,
    case_i18n: 'accusatif',
    verb_form: null,
    emphatic_inna: false,
    suffix_pronoun: null,
    prefix_particle: null,
    consequential_fa: false,
    emphatic_pronoun: false,
    negation_particle: null,
    preceded_by_negation: false
  };
  console.log('pos=5 awliyāʾa → IMPORTANT (key=wly)');

  // Fix pos=21 (index 20): hum → particle
  segs[20] = {
    fr: 'eux',
    phon: 'hum',
    type: 'particle',
    arabic: 'هُمْ',
    position: 21
  };
  console.log('pos=21 hum → PARTICLE (fr=eux)');

  const {error:segErr} = await db.from('verse_analyses').update({segments: segs}).eq('id', 680);
  console.log('Segments mis à jour:', segErr ? 'ERROR: '+segErr.message : 'OK');

  // =============================================
  // 1. ENRICHIR اخذ akhdh (aid=529, 5 sens → ~21 sens)
  // =============================================
  // Vérification Lane's
  console.log('\n=== LANE\'S pour اخذ ===');
  const akhdhRoot = lane.prepare("SELECT word FROM root WHERE word = 'اخذ'").get();
  const akhdhEntries = lane.prepare("SELECT word, xml FROM entry WHERE root = ?").all(akhdhRoot.word);
  console.log(akhdhEntries.length + ' entrées Lane\'s trouvées');

  await enrichRoot(529, 'akhdh (أ خ ذ)', [
    // Update descriptions of concept leads
    {id: 5764, description: "Acte physique de se saisir d'une chose ou d'une personne par la main ou par la force. La prise est un mouvement directionnel — celui qui prend va VERS la chose prise et l'amène VERS lui. C'est un acte extérieur, ponctuel et actif. Le Lane's donne akhadha : « il a pris, saisi, pris avec la main »."},
    {id: 5767, description: "Forme VIII ittakhadha : acte de prendre quelque chose POUR SOI, de se l'approprier comme sien. L'adoption est une prise réfléchie et volontaire — on ne saisit pas par hasard, on choisit délibérément. C'est la dimension intérieure de la prise : le choix personnel qui transforme un élément extérieur en partie de soi. Le Lane's donne ittakhadha : « il s'est pris pour lui-même, il a adopté »."},
    {id: 5768, description: "Saisir quelqu'un pour le punir. Le châtiment est une prise dirigée contre une personne — on saisit le coupable comme on saisit un objet, mais le but est la sanction. Le Lane's donne akhadha : « il l'a puni, châtié ». C'est un acte extérieur qui sort de celui qui punit et atteint celui qui est puni."}
  ], [
    // Prise/Saisie — enrichir
    {concept:'Prise/Saisie', sense:'empoigner', meaning_type:'etymology',
     description:"Prendre fermement avec la main, serrer dans la poigne."},
    {concept:'Prise/Saisie', sense:'retirer', meaning_type:'etymology',
     description:"Enlever une chose de son emplacement, la prendre en l'éloignant."},
    {concept:'Prise/Saisie', sense:'attraper', meaning_type:'etymology',
     description:"Saisir ce qui bouge ou ce qui s'échappe."},

    // Adoption/Choix — enrichir
    {concept:'Adoption/Choix', sense:'choisir pour soi', meaning_type:'etymology',
     description:"Sélectionner délibérément parmi plusieurs options. Le choix est la face intérieure de la prise."},
    {concept:'Adoption/Choix', sense:'prendre pour ami', meaning_type:'etymology',
     description:"Forme VIII : se prendre quelqu'un comme proche, l'intégrer dans son cercle."},
    {concept:'Adoption/Choix', sense:'prendre comme demeure', meaning_type:'etymology',
     description:"S'établir dans un lieu en le choisissant pour soi. Le Lane's donne : « ittakhadha manzilan »."},
    {concept:'Adoption/Choix', sense:'établir', meaning_type:'etymology',
     description:"Fixer quelque chose dans un état choisi, l'installer de manière durable."},

    // Châtiment — enrichir
    {concept:'Châtiment', sense:'punir', meaning_type:'etymology',
     description:"Infliger une peine à quelqu'un qui a commis une faute."},
    {concept:'Châtiment', sense:'faire rendre des comptes', meaning_type:'etymology',
     description:"Forme III muʾākhadha : demander des comptes, appeler à la responsabilité. C'est la prise appliquée au domaine moral."},

    // Captivité (nouveau concept)
    {concept:'Captivité', sense:'captif', meaning_type:'etymology',
     description:"Personne prise et retenue. Le captif est celui qui a subi la prise — il est devenu l'objet de la saisie et ne peut plus s'en libérer. Le Lane's donne akhīdh : « captif, prisonnier ». C'est le résultat durable de l'acte de prise sur une personne."},
    {concept:'Captivité', sense:'prisonnier', meaning_type:'etymology',
     description:"Celui qui est retenu après avoir été saisi."},
    {concept:'Captivité', sense:'pris de force', meaning_type:'etymology',
     description:"Ce qui est arraché contre la volonté de son possesseur. Le Lane's donne akhīdha : « chose prise par la force »."},

    // Enchantement/Fascination (nouveau concept)
    {concept:'Enchantement/Fascination', sense:'ensorceler', meaning_type:'etymology',
     description:"Forme II : captiver et retenir par un moyen invisible. L'enchantement est une prise non physique — la personne est saisie non par la main mais par un sortilège ou un charme. Le Lane's donne akhkhadhat-hu : « elle l'a captivé et retenu par une sorte d'enchantement, en particulier pour le retenir loin d'autres femmes ». C'est la prise qui passe par l'invisible."},
    {concept:'Enchantement/Fascination', sense:'fasciner', meaning_type:'etymology',
     description:"Captiver l'attention de manière irrésistible, comme si l'on était pris."},
    {concept:'Enchantement/Fascination', sense:'retenir par charme', meaning_type:'etymology',
     description:"Empêcher quelqu'un de partir par un attrait invisible."},

    // Terrain/Eau (nouveau concept)
    {concept:'Terrain/Eau', sense:'bassin d\'eau', meaning_type:'etymology',
     description:"Extension spatiale de la prise. Le bassin (ikhādh) est un lieu qui « prend » l'eau de pluie et la retient. Le Lane's donne : « une mare laissée par un torrent ». L'eau est captée et conservée par le terrain — le sol saisit l'eau comme la main saisit un objet."},
    {concept:'Terrain/Eau', sense:'terre appropriée', meaning_type:'etymology',
     description:"Territoire qu'un homme prend pour lui-même. Le Lane's donne ikhādha : « terre qu'un homme prend pour lui et met en culture »."},
  ]);

  // =============================================
  // 2. ENRICHIR شيأ shya (aid=369, 5 sens → ~15 sens)
  // =============================================
  console.log('\n=== LANE\'S pour شيأ ===');
  const shyaRoot = lane.prepare("SELECT word FROM root WHERE word = 'شيأ'").get();
  const shyaEntries = lane.prepare("SELECT word, xml FROM entry WHERE root = ?").all(shyaRoot.word);
  console.log(shyaEntries.length + ' entrées Lane\'s trouvées');

  await enrichRoot(369, 'shya (ش ي أ)', [
    // Update descriptions
    {id: 4549, description: "Toute réalité qui existe ou qui peut exister, toute entité dont on peut dire quelque chose. La chose est le niveau le plus fondamental de l'être — c'est ce qui peut être connu et ce dont on peut énoncer un attribut. Le Lane's donne shayʾ : « ce qui peut être connu, ce dont on peut prédiquer quelque chose ». C'est un nom pour tout ce qui a été fait exister, qu'il s'agisse d'un accident ou d'une substance."},
    {id: 4551, description: "Acte intérieur de diriger sa volonté vers un objet. Le vouloir est le mouvement de l'âme qui se porte vers une chose et la désire. C'est une force intérieure qui précède l'action — celui qui veut n'agit pas encore, mais il a déjà choisi sa direction. Le Lane's donne shāʾa-hu : « il l'a voulu, souhaité, désiré »."}
  ], [
    // Chose/Existence — enrichir
    {concept:'Chose/Existence', sense:'entité', meaning_type:'etymology',
     description:"Réalité distincte qui possède une existence propre."},
    {concept:'Chose/Existence', sense:'existence', meaning_type:'etymology',
     description:"Le fait d'être, d'avoir été fait exister. Le Lane's précise que shayʾ dénote l'existence."},

    // Volonté — enrichir
    {concept:'Volonté', sense:'désirer', meaning_type:'etymology',
     description:"Porter son désir vers une chose que l'on veut obtenir."},
    {concept:'Volonté', sense:'souhaiter', meaning_type:'etymology',
     description:"Exprimer un vouloir orienté vers un résultat espéré."},
    {concept:'Volonté', sense:'volonté', meaning_type:'etymology',
     description:"La faculté elle-même de vouloir. Le Lane's donne mashīʾa et shīʾa comme noms de la volonté."},

    // Incitation/Contrainte (nouveau concept)
    {concept:'Incitation/Contrainte', sense:'inciter', meaning_type:'etymology',
     description:"Forme II shayyaʾa : pousser quelqu'un à faire une chose, le mettre en mouvement vers l'action. L'incitation est un acte extérieur qui sort de celui qui incite et atteint celui qui est poussé à agir. Le Lane's donne : « je l'ai incité à faire la chose »."},
    {concept:'Incitation/Contrainte', sense:'contraindre', meaning_type:'etymology',
     description:"Forme IV ashāʾa : forcer quelqu'un à se réfugier vers quelque chose. Le Lane's donne : « il l'a contraint à avoir recours à cela ». C'est la volonté imposée de l'extérieur."},

    // Laideur/Difformité (nouveau concept)
    {concept:'Laideur/Difformité', sense:'rendre laid', meaning_type:'etymology',
     description:"Forme II shayyaʾa : rendre le visage ou la forme disgracieux. Le Lane's donne : « Dieu a rendu son visage laid ». C'est une transformation extérieure qui altère l'apparence — le contraire de l'harmonie dans la forme. C'est un sens isolé et rare de cette racine."},
    {concept:'Laideur/Difformité', sense:'mal formé', meaning_type:'etymology',
     description:"Incongru, mal constitué dans sa forme. Le Lane's donne mushayyaʾ : « incongru, disgracieux dans sa constitution »."},

    // Apaisement (nouveau concept)
    {concept:'Apaisement', sense:'apaiser sa colère', meaning_type:'etymology',
     description:"Forme V tashayyaʾa : voir sa colère se calmer. C'est un état intérieur de retour au repos après une agitation. Le Lane's donne : « sa colère s'est apaisée ». Sens isolé et rare, lié à l'idée que la volonté agitée retourne au calme."},
  ]);

  // =============================================
  // 3. ENRICHIR ولى wly (aid=599, 8 sens → ~22 sens)
  // =============================================
  console.log('\n=== LANE\'S pour ولى ===');
  const wlyRoot = lane.prepare("SELECT word FROM root WHERE word = 'ولى'").get();
  const wlyEntries = lane.prepare("SELECT word, xml FROM entry WHERE root = ?").all(wlyRoot.word);
  console.log(wlyEntries.length + ' entrées Lane\'s trouvées');

  await enrichRoot(599, 'wly (و ل ي)', [
    // Update descriptions des concepts existants
    {id: 6828, description: "Être dans une relation de proximité immédiate avec quelqu'un — si proche qu'il n'y a rien entre les deux. Le waliyy est celui qui est adjacent, qui touche directement. De cette proximité spatiale naît la protection : celui qui est juste à côté protège naturellement. Et de la protection naît l'alliance : celui qui protège est un allié. Le Lane's donne waliyy : « celui qui gère les affaires d'un autre, son tuteur, son patron, son protecteur ». C'est un lien fondé sur la proximité réelle, pas sur un contrat."},
    {id: 6832, description: "Exercer l'autorité sur quelqu'un ou quelque chose, en avoir la charge et la responsabilité. Le wālī est celui qui commande, administre, gouverne. C'est un acte extérieur et permanent — celui qui gouverne exerce son pouvoir de façon continue sur ceux qui sont sous sa charge. Le Lane's donne waliya ʿalayhi : « il a exercé le commandement sur cela, il l'a administré »."},
    {id: 12841, description: "Tourner le dos et partir, s'éloigner de quelqu'un ou de quelque chose. Le détournement est le contraire de la proximité — celui qui se détourne brise la relation de walāya. C'est un acte volontaire de rupture. Le Lane's donne wallā : « il s'est détourné, il a tourné le dos »."}
  ], [
    // Proximité/Alliance — enrichir (renommer Proximité/Protection → Proximité/Alliance)
    {concept:'Proximité/Protection', sense:'tuteur', meaning_type:'etymology',
     description:"Celui qui gère les affaires d'un orphelin ou d'une personne sous sa charge."},
    {concept:'Proximité/Protection', sense:'patron', meaning_type:'etymology',
     description:"Le mawlā : le maître qui protège, ou l'affranchi qui est sous la protection de son ancien maître."},
    {concept:'Proximité/Protection', sense:'héritier', meaning_type:'etymology',
     description:"Celui qui recueille les biens d'un mort en vertu de sa proximité. Le waliyy du mort est son héritier."},
    {concept:'Proximité/Protection', sense:'parent', meaning_type:'etymology',
     description:"Le cousin paternel ou tout parent proche. Le Lane's donne mawlā : « fils d'un oncle paternel »."},
    {concept:'Proximité/Protection', sense:'affranchi', meaning_type:'etymology',
     description:"Esclave libéré qui reste sous la protection de son ancien maître. Le lien de walāʾ perdure après l'affranchissement."},

    // Autorité — enrichir
    {concept:'Autorité', sense:'administrer', meaning_type:'etymology',
     description:"Gérer les affaires d'un territoire ou d'une charge."},
    {concept:'Autorité', sense:'régir', meaning_type:'etymology',
     description:"Exercer le pouvoir de direction et de contrôle."},
    {concept:'Autorité', sense:'préfet', meaning_type:'etymology',
     description:"Le wālī : celui qui détient l'autorité sur une province ou un territoire."},
    {concept:'Autorité', sense:'prendre en charge', meaning_type:'etymology',
     description:"Forme V tawallā amran : assumer la responsabilité d'une affaire, la prendre sur soi."},
    {concept:'Autorité', sense:'maîtriser', meaning_type:'etymology',
     description:"Forme X istawlā ʿalā : prendre le contrôle, avoir la mainmise sur quelque chose. Le Lane's donne : « il a maîtrisé, il a pris le dessus »."},

    // Éloignement/Détournement — déjà 3 sens, ajouter 1
    {concept:'Éloignement/Détournement', sense:'fuir', meaning_type:'etymology',
     description:"Forme II wallā hāriban : tourner le dos en fuyant. Le Lane's donne : « il est parti en fuyant »."},

    // Succession/Consécution (nouveau concept)
    {concept:'Succession/Consécution', sense:'suivre', meaning_type:'etymology',
     description:"Être dans une position immédiatement après un autre, sans interruption. La succession est la proximité dans le temps — les éléments se suivent comme deux personnes marchent côte à côte. Le Lane's donne wālā : « il a fait se succéder les choses, il les a rendues consécutives ». C'est un acte qui crée une continuité."},
    {concept:'Succession/Consécution', sense:'être adjacent', meaning_type:'etymology',
     description:"Se trouver juste à côté, sans rien entre les deux. Le Lane's donne wālāhu : « il était adjacent, contigu »."},
    {concept:'Succession/Consécution', sense:'consécutif', meaning_type:'etymology',
     description:"Qui suit immédiatement sans interruption."},

    // Bienfaisance/Don (nouveau concept)
    {concept:'Bienfaisance/Don', sense:'accorder un bienfait', meaning_type:'etymology',
     description:"Forme IV awlā maʿrūfan : faire du bien à quelqu'un, lui conférer un bienfait. C'est un acte extérieur qui sort de celui qui donne et atteint celui qui reçoit. Le Lane's donne : « il lui a accordé un bienfait, comme s'il l'avait fait adhérer à lui en étant près de lui ». Le don est une extension de la proximité — on fait du bien à celui qui est proche."},
    {concept:'Bienfaisance/Don', sense:'infliger', meaning_type:'etymology',
     description:"Forme IV awlāhu dhullan : faire subir à quelqu'un (un abaissement, une peine). C'est le versant négatif du même acte — rapprocher quelqu'un d'un état, qu'il soit bon ou mauvais."},

    // Droit/Mérite (nouveau concept)
    {concept:'Droit/Mérite', sense:'être plus digne de', meaning_type:'etymology',
     description:"Awlā bi : avoir plus de droit, être plus méritant, plus apte. C'est le comparatif de waliyy — celui qui est LE PLUS proche d'une chose est celui qui la mérite le plus. Le droit naît de la proximité. Le Lane's donne : « untel est plus digne de telle chose, il y a un droit plus fort ». C'est un jugement de priorité fondé sur la relation de proximité."},
    {concept:'Droit/Mérite', sense:'avoir droit', meaning_type:'etymology',
     description:"Posséder un titre légitime sur une chose en vertu de sa relation de proximité."},
  ]);

  lane.close();

  console.log('\n========================================');
  console.log('PHASE 1 TERMINÉE — Segments + 3 racines enrichies');
  console.log('========================================');
})();
