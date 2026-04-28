const {createClient} = require('@supabase/supabase-js');
const db = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

(async()=>{
  // =============================================
  // 1. ENRICHIR hjj (aid=637) — ح ج ج — 4 sens → ~15 sens
  // =============================================
  console.log('=== ENRICHISSEMENT hjj (aid=637) ===');

  // Delete old senses (none used by VWA)
  const {error:e1} = await db.from('word_meanings').delete().eq('analysis_id', 637);
  if(e1) { console.log('ERROR deleting hjj:', e1.message); return; }

  const hjjSenses = [
    // Concept: Direction/Destination
    {analysis_id:637, concept:'Direction/Destination', sense:'se rendre vers', description:"Acte extérieur directionnel : on quitte un lieu pour rejoindre un but, une personne ou un endroit. Le ḥajj au sens premier est ce mouvement volontaire de déplacement vers une destination. Le Lane's donne qaṣada (se diriger vers) comme synonyme premier.", meaning_type:'etymology', display_order:1},
    {analysis_id:637, concept:'Direction/Destination', sense:'visiter', description:'Aller voir quelqu\'un, se rendre chez lui.', meaning_type:'etymology', display_order:2},
    {analysis_id:637, concept:'Direction/Destination', sense:'visiter fréquemment', description:'Se rendre à plusieurs reprises chez quelqu\'un ou vers un lieu.', meaning_type:'etymology', display_order:3},
    // Concept: Argumentation/Dispute
    {analysis_id:637, concept:'Argumentation/Dispute', sense:'disputer', description:"Acte extérieur bidirectionnel entre deux parties : échange d'arguments où chacun avance ses preuves pour convaincre l'autre. La dispute (ḥijāj) est dirigée vers l'adversaire et vise à établir une vérité par la confrontation d'arguments. C'est un acte rationnel, pas émotionnel.", meaning_type:'etymology', display_order:4},
    {analysis_id:637, concept:'Argumentation/Dispute', sense:'argumenter', description:'Avancer des preuves et des raisonnements pour soutenir une position.', meaning_type:'etymology', display_order:5},
    {analysis_id:637, concept:'Argumentation/Dispute', sense:'preuve', description:'Argument, témoignage ou évidence apportée pour étayer une position.', meaning_type:'etymology', display_order:6},
    {analysis_id:637, concept:'Argumentation/Dispute', sense:'vaincre par l\'argument', description:'L\'emporter dans une dispute grâce à la force de ses preuves.', meaning_type:'etymology', display_order:7},
    {analysis_id:637, concept:'Argumentation/Dispute', sense:'plaider', description:'Défendre une cause dans un procès ou un litige.', meaning_type:'etymology', display_order:8},
    // Concept: Sondage/Médecine
    {analysis_id:637, concept:'Sondage/Médecine', sense:'sonder', description:"Acte physique directionnel et ponctuel : pénétrer une blessure ou une fracture avec un instrument (miḥjāj) pour l'examiner ou la soigner. Le praticien va vers l'intérieur de la blessure pour évaluer la profondeur.", meaning_type:'etymology', display_order:9},
    {analysis_id:637, concept:'Sondage/Médecine', sense:'traiter une fracture', description:'Soigner médicalement une fracture de la tête.', meaning_type:'etymology', display_order:10},
    {analysis_id:637, concept:'Sondage/Médecine', sense:'raser', description:'Raser la tête, acte physique lié à la fin du traitement ou du pèlerinage.', meaning_type:'etymology', display_order:11},
    // Concept: Retrait/Hésitation
    {analysis_id:637, concept:'Retrait/Hésitation', sense:'se retirer', description:"État intérieur (peur, incapacité) qui se manifeste par l'immobilité ou le recul. Opposé du mouvement vers un but : au lieu d'avancer, la personne recule ou s'arrête. Le Lane's donne : reculer par peur ou manque de capacité.", meaning_type:'etymology', display_order:12},
    {analysis_id:637, concept:'Retrait/Hésitation', sense:'rester sur place', description:'Demeurer dans un lieu sans le quitter, rester immobile.', meaning_type:'etymology', display_order:13},
    {analysis_id:637, concept:'Retrait/Hésitation', sense:'retenir en soi', description:'Garder pour soi ce qu\'on pense, ne pas exprimer.', meaning_type:'etymology', display_order:14},
    // Concept: Anatomie/Temps
    {analysis_id:637, concept:'Anatomie/Temps', sense:'os de l\'orbite', description:"Sens physique isolé : l'os autour de l'œil (ḥijāj), structure osseuse qui entoure et protège l'organe de la vision.", meaning_type:'etymology', display_order:15},
    {analysis_id:637, concept:'Anatomie/Temps', sense:'année', description:'Mesure du temps (ḥijja), une année complète.', meaning_type:'etymology', display_order:16},
  ];

  const {error:e1b} = await db.from('word_meanings').insert(hjjSenses);
  if(e1b) console.log('ERROR inserting hjj:', e1b.message);
  else console.log('hjj: ' + hjjSenses.length + ' sens insérés → 5 concepts');

  // =============================================
  // 2. ENRICHIR tba (aid=729) — ت ب ع — 3 sens → ~14 sens
  // =============================================
  console.log('\n=== ENRICHISSEMENT tba (aid=729) ===');

  const {error:e2} = await db.from('word_meanings').delete().eq('analysis_id', 729);
  if(e2) { console.log('ERROR deleting tba:', e2.message); return; }

  const tbaSenses = [
    // Concept: Suivre/Accompagner
    {analysis_id:729, concept:'Suivre/Accompagner', sense:'suivre', description:"Acte extérieur directionnel continu : on se déplace dans le sillage de celui qu'on suit. Le mouvement est volontaire et orienté vers l'autre. Le Lane's donne : marcher derrière quelqu'un, aller après lui. La Forme VIII ittabaʿa renforce l'effort personnel de suivre.", meaning_type:'etymology', display_order:1},
    {analysis_id:729, concept:'Suivre/Accompagner', sense:'accompagner', description:'Aller avec quelqu\'un après qu\'il est passé devant soi.', meaning_type:'etymology', display_order:2},
    {analysis_id:729, concept:'Suivre/Accompagner', sense:'disciple', description:'Celui qui suit un maître ou un guide.', meaning_type:'etymology', display_order:3},
    {analysis_id:729, concept:'Suivre/Accompagner', sense:'imiter', description:'Reproduire le comportement de quelqu\'un qu\'on suit.', meaning_type:'etymology', display_order:4},
    // Concept: Rattraper/Atteindre
    {analysis_id:729, concept:'Rattraper/Atteindre', sense:'rattraper', description:"Acte extérieur ponctuel et directionnel : le mouvement vise à combler l'écart entre soi et quelqu'un parti avant. Le Lane's donne : je les ai rattrapés alors qu'ils étaient partis avant moi. Le but est d'arriver au même point que la cible.", meaning_type:'etymology', display_order:5},
    {analysis_id:729, concept:'Rattraper/Atteindre', sense:'rejoindre', description:'Arriver jusqu\'à quelqu\'un pour se retrouver ensemble.', meaning_type:'etymology', display_order:6},
    {analysis_id:729, concept:'Rattraper/Atteindre', sense:'suivre les traces', description:'Suivre les pas de quelqu\'un, chercher en suivant sa piste.', meaning_type:'etymology', display_order:7},
    // Concept: Succession/Continuité
    {analysis_id:729, concept:'Succession/Continuité', sense:'enchaîner', description:"Processus continu non directionnel : les éléments se suivent dans un ordre naturel sans qu'un acteur suive un autre. Le Lane's donne : faire se succéder les choses l'une après l'autre, ininterrompu dans sa progression. C'est l'idée de continuité.", meaning_type:'etymology', display_order:8},
    {analysis_id:729, concept:'Succession/Continuité', sense:'consécutif', description:'Qui se suit sans interruption, l\'un après l\'autre.', meaning_type:'etymology', display_order:9},
    {analysis_id:729, concept:'Succession/Continuité', sense:'bien exécuté', description:'Chose faite avec soin, exécutée solidement et sans défaut.', meaning_type:'etymology', display_order:10},
    // Concept: Réclamation/Réparation
    {analysis_id:729, concept:'Réclamation/Réparation', sense:'poursuivre en justice', description:"Acte extérieur directionnel : on va vers l'autre pour obtenir ce qui est dû. Le Lane's donne : celui qui poursuit pour un droit ou pour le prix du sang. C'est une poursuite orientée vers la réparation d'un tort.", meaning_type:'etymology', display_order:11},
    {analysis_id:729, concept:'Réclamation/Réparation', sense:'réclamer', description:'Demander réparation, exiger ce qui est dû.', meaning_type:'etymology', display_order:12},
    {analysis_id:729, concept:'Réclamation/Réparation', sense:'conséquence', description:'Résultat qui suit un acte, responsabilité découlant d\'une action.', meaning_type:'etymology', display_order:13},
    // Concept: Dépendance/Sujétion
    {analysis_id:729, concept:'Dépendance/Sujétion', sense:'serviteur', description:"État de dépendance : l'élément qui suit n'a pas d'autonomie propre, il est défini par sa relation à celui qu'il suit. Le Lane's cite les serviteurs, les dépendants, et l'ombre qui suit le soleil — des entités dont l'existence même dépend d'un autre.", meaning_type:'etymology', display_order:14},
    {analysis_id:729, concept:'Dépendance/Sujétion', sense:'ombre', description:'L\'ombre qui suit le soleil, métaphore de la dépendance.', meaning_type:'etymology', display_order:15},
  ];

  const {error:e2b} = await db.from('word_meanings').insert(tbaSenses);
  if(e2b) console.log('ERROR inserting tba:', e2b.message);
  else console.log('tba: ' + tbaSenses.length + ' sens insérés → 5 concepts');

  // =============================================
  // 3. ENRICHIR amy (aid=645) — أ م ي — 3 sens → ~10 sens
  // =============================================
  console.log('\n=== ENRICHISSEMENT amy (aid=645) ===');

  const {error:e3} = await db.from('word_meanings').delete().eq('analysis_id', 645);
  if(e3) { console.log('ERROR deleting amy:', e3.message); return; }

  const amySenses = [
    // Concept: État naturel/Originel
    {analysis_id:645, concept:'État naturel/Originel', sense:'dans l\'état originel', description:"État intérieur permanent : la personne est dans la condition d'origine, comme sa mère (umm) l'a mise au monde, sans avoir acquis de savoir par l'apprentissage. Le Lane's donne : dans la condition naturelle de sa nation, n'ayant pas appris l'écriture. C'est l'absence de transformation par l'éducation.", meaning_type:'etymology', display_order:1},
    {analysis_id:645, concept:'État naturel/Originel', sense:'maternel', description:'Relatif à la mère (umm), à l\'état dans lequel la mère a mis au monde.', meaning_type:'etymology', display_order:2},
    {analysis_id:645, concept:'État naturel/Originel', sense:'non instruit', description:'Qui n\'a pas reçu d\'instruction, resté dans son état naturel.', meaning_type:'etymology', display_order:3},
    // Concept: Illettré/Non-écrivant
    {analysis_id:645, concept:'Illettré/Non-écrivant', sense:'illettré', description:"État extérieur observable : la personne ne maîtrise pas l'art de l'écriture ou de la lecture. Le Lane's donne : celui qui ne sait pas écrire, ou qui n'écrit pas bien. C'est une description factuelle d'une compétence absente, pas un jugement de valeur.", meaning_type:'etymology', display_order:4},
    {analysis_id:645, concept:'Illettré/Non-écrivant', sense:'ne sachant pas écrire', description:'Qui n\'a pas appris l\'art de l\'écriture.', meaning_type:'etymology', display_order:5},
    {analysis_id:645, concept:'Illettré/Non-écrivant', sense:'ne sachant pas lire', description:'Qui ne maîtrise pas la lecture.', meaning_type:'etymology', display_order:6},
    // Concept: Sans Écriture révélée
    {analysis_id:645, concept:'Sans Écriture révélée', sense:'sans Écriture', description:"Condition culturelle/spirituelle : celui qui n'a pas reçu d'écriture révélée. Le Lane's donne : un gentil, selon ceux qui possèdent une écriture révélée. C'est un terme relationnel — le ummī est défini par rapport à ceux qui ont le livre.", meaning_type:'etymology', display_order:7},
    {analysis_id:645, concept:'Sans Écriture révélée', sense:'gentil', description:'Sens propre du nisba de umma : celui qui appartient à une nation sans livre révélé.', meaning_type:'etymology', display_order:8},
    // Concept: Appartenance nationale
    {analysis_id:645, concept:'Appartenance nationale', sense:'Arabe', description:"Identité collective : le ummī désigne un Arabe, car la nation (umma) des Arabes ne connaissait pas l'écriture. Le Lane's donne : la plupart des Arabes étaient ainsi. C'est un qualificatif ethnique qui décrit un peuple entier.", meaning_type:'etymology', display_order:9},
    {analysis_id:645, concept:'Appartenance nationale', sense:'du commun', description:'Personne vulgaire, du peuple, sans culture particulière.', meaning_type:'etymology', display_order:10},
  ];

  const {error:e3b} = await db.from('word_meanings').insert(amySenses);
  if(e3b) console.log('ERROR inserting amy:', e3b.message);
  else console.log('amy: ' + amySenses.length + ' sens insérés → 4 concepts');

  // =============================================
  // 4. Fix tagger segments in VA 672
  // =============================================
  console.log('\n=== FIX TAGGER SEGMENTS VA 672 ===');
  const {data:va} = await db.from('verse_analyses').select('segments').eq('id',672).single();
  let segs = va.segments;

  // Fix pos=13: ūtū key=awt → key=aty, root=أ و ت → root=أ ت ي
  const s13 = segs.find(s => s.position === 13);
  if(s13) { s13.key = 'aty'; s13.root = 'أ ت ي'; console.log('pos=13 fixed: awt→aty'); }

  // Fix pos=21: ihtadaw key=htd root=ه ت د → key=hdy root=ه د ي
  const s21 = segs.find(s => s.position === 21);
  if(s21) { s21.key = 'hdy'; s21.root = 'ه د ي'; console.log('pos=21 fixed: htd→hdy'); }

  // Fix pos=32: al-ʿibādi particle → important with key=ebd
  const s32 = segs.find(s => s.position === 32);
  if(s32) {
    s32.type = 'important';
    s32.key = 'ebd';
    s32.root = 'ع ب د';
    s32.pos = 'nom';
    s32.phon = 'al-ʿibādi';
    delete s32.fr;
    console.log('pos=32 fixed: particle→important (ebd)');
  }

  const {error:e4} = await db.from('verse_analyses').update({segments: segs}).eq('id',672);
  if(e4) console.log('ERROR fixing segments:', e4.message);
  else console.log('Segments mis à jour');

  console.log('\n=== DONE ===');
})();
