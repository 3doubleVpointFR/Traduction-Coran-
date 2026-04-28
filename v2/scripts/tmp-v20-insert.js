const {createClient} = require('@supabase/supabase-js');
const db = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

(async()=>{

  // =============================================
  // PARTIE 1: Ajouter sens manquants à wly (aid=599)
  // Concept "Éloignement/Détournement" — 3 sens
  // display_order à partir de 6 (5 existent déjà)
  // =============================================
  console.log('=== PARTIE 1: AJOUT SENS wly (aid=599) ===');

  // Check if already exists
  const {data:existingWly} = await db.from('word_meanings').select('id').eq('analysis_id',599).eq('concept','Éloignement/Détournement');
  if(existingWly && existingWly.length > 0) {
    console.log('wly: concept Éloignement/Détournement déjà présent (' + existingWly.length + ' sens) → SKIP');
  } else {

  const wlySenses = [
    {analysis_id:599, concept:'Éloignement/Détournement', sense:'se détourner', description:"Acte de retrait volontaire : la Forme V (tawallā) de la racine wly signifie retirer sa propre proximité, tourner le dos. C'est le mouvement inverse de l'alliance — au lieu de se rapprocher, on s'éloigne. L'éloignement part de soi et affecte la relation à l'autre.", meaning_type:'etymology', display_order:6},
    {analysis_id:599, concept:'Éloignement/Détournement', sense:'s\'éloigner', description:'Prendre de la distance par rapport à quelqu\'un ou quelque chose, se retirer.', meaning_type:'etymology', display_order:7},
    {analysis_id:599, concept:'Éloignement/Détournement', sense:'tourner le dos', description:'Se retourner physiquement ou moralement, refuser de faire face.', meaning_type:'etymology', display_order:8},
  ];

  const {error:e1} = await db.from('word_meanings').insert(wlySenses);
  if(e1) { console.log('ERROR inserting wly senses:', e1.message); return; }
  console.log('wly: 3 sens ajoutés (concept Éloignement/Détournement, display_order 6-8)');

  // Vérification
  const {count:wlyCount} = await db.from('word_meanings').select('*',{count:'exact',head:true}).eq('analysis_id',599);
  console.log('wly total sens maintenant: ' + wlyCount);

  } // end if wly not exists

  // =============================================
  // PARTIE 2: Insérer 14 VWA dans verse_word_analyses
  // verse_analysis_id=672, verse 3:20
  // =============================================
  console.log('\n=== PARTIE 2: INSERTION 14 VWA (va=672) ===');

  const VERSE_ID = 313; // verse_id for 3:20

  // D'abord supprimer les VWA existants pour verse_id=313 (s'il y en a)
  const {data:existingVwa} = await db.from('verse_word_analyses').select('id').eq('verse_id',VERSE_ID);
  if(existingVwa && existingVwa.length > 0) {
    const {error:delErr} = await db.from('verse_word_analyses').delete().eq('verse_id',VERSE_ID);
    if(delErr) { console.log('ERROR deleting existing VWA:', delErr.message); return; }
    console.log('Supprimé ' + existingVwa.length + ' VWA existants');
  }

  const vwas = [
    // 1. hjj pos=3 — disputé
    {
      verse_id:VERSE_ID, word_key:'hjj', position:3,
      sense_chosen:'disputé',
      analysis_axes: {
        sense_chosen:'disputé', concept_chosen:'Argumentation/Dispute',
        concepts: {
          'Direction/Destination': {status:'nul', senses:['se rendre vers','visiter','visiter fréquemment'], proof_ctx:"Le verset n'implique aucun déplacement physique ; il s'agit d'une opposition argumentative, pas d'un voyage."},
          'Argumentation/Dispute': {status:'retenu', senses:['disputer','argumenter','preuve','vaincre par l\'argument','plaider'], proof_ctx:"La Forme III (muḥājja) implique une interaction mutuelle — deux parties qui s'opposent par des preuves. Le suffixe -ka (toi) confirme que c'est une dispute dirigée vers le destinataire, ce qui correspond au sens d'argumentation, pas de déplacement physique."},
          'Sondage/Médecine': {status:'nul', senses:['sonder','traiter une fracture','raser'], proof_ctx:"Aucun contexte médical n'est présent dans ce verset."},
          'Retrait/Hésitation': {status:'nul', senses:['se retirer','rester sur place','retenir en soi'], proof_ctx:"Le verbe est à la Forme III active avec un complément d'objet, ce qui indique une action dirigée, pas un retrait."},
          'Anatomie/Temps': {status:'nul', senses:['os de l\'orbite','année'], proof_ctx:"Sens physiques sans rapport avec le contexte."}
        }
      }
    },
    // 2. qwl pos=5 — dis
    {
      verse_id:VERSE_ID, word_key:'qwl', position:5,
      sense_chosen:'dis',
      analysis_axes: {
        sense_chosen:'dis', concept_chosen:'Parole/Énonciation',
        concepts: {
          'Parole/Énonciation': {status:'retenu', senses:['dire','parole','parler','discours','affirmer'], proof_ctx:"Impératif direct qui ordonne d'énoncer une parole. Le sens de parole est le seul applicable à un ordre de communication."},
          'Pensée/Avis': {status:'peu_probable', senses:['avis','opinion','doctrine'], proof_ctx:"Un impératif ne demande pas de penser intérieurement mais de prononcer extérieurement."},
          'Corps/Anatomie': {status:'nul', senses:['troupeau'], proof_ctx:"Sans rapport."},
          'Sens isolé/Puissance': {status:'nul', senses:['puissance'], proof_ctx:"Sans rapport."}
        }
      }
    },
    // 3. slm pos=6 — remis
    {
      verse_id:VERSE_ID, word_key:'slm', position:6,
      sense_chosen:'remis',
      analysis_axes: {
        sense_chosen:'remis', concept_chosen:'Paix/Soumission',
        concepts: {
          'Paix/Soumission': {status:'retenu', senses:['paix','islam','salut','soumission'], proof_ctx:"La Forme IV aslama signifie remettre entièrement. Avec 'mon visage à Dieu', le sens est celui d'une remise volontaire et totale de son être. Le sens post-islamique 'embrasser l'islam' est une extension tardive — le sens primaire est la remise/livraison, pas l'adhésion confessionnelle."},
          'Intégrité/Santé': {status:'peu_probable', senses:['sain et sauf'], proof_ctx:"'J'ai rendu sain mon visage à Dieu' ne forme pas une expression naturelle. L'intégrité physique n'est pas remise à quelqu'un."}
        }
      }
    },
    // 4. wjh pos=7 — visage
    {
      verse_id:VERSE_ID, word_key:'wjh', position:7,
      sense_chosen:'visage',
      analysis_axes: {
        sense_chosen:'visage', concept_chosen:'Visage/Direction',
        concepts: {
          'Visage/Direction': {status:'retenu', senses:['visage','face','direction','se diriger vers'], proof_ctx:"Avec 'remettre X à Dieu', c'est l'identité entière qui est remise — le visage est ce qui identifie la personne. La direction serait trop abstraite dans cette construction."},
          'Sens isolé/Noble': {status:'nul', senses:['noble'], proof_ctx:"Le contexte n'est pas celui de la noblesse."},
          'Sens isolé/Manière': {status:'nul', senses:['manière'], proof_ctx:"La construction avec 'remettre' exclut le sens de manière."}
        }
      }
    },
    // 5. tba pos=10 — suivi
    {
      verse_id:VERSE_ID, word_key:'tba', position:10,
      sense_chosen:'suivi',
      analysis_axes: {
        sense_chosen:'suivi', concept_chosen:'Suivre/Accompagner',
        concepts: {
          'Suivre/Accompagner': {status:'retenu', senses:['suivre','accompagner','disciple','imiter'], proof_ctx:"La Forme VIII ittabaʿa ajoute l'effort personnel : celui qui suit fait le choix actif de suivre. Le suffixe -nī (moi) confirme un suivi volontaire du locuteur, pas un rattrapage ni une poursuite en justice."},
          'Rattraper/Atteindre': {status:'probable', senses:['rattraper','rejoindre','suivre les traces'], proof_ctx:"Rattraper implique de combler un écart, alors qu'ici le suivi est continu et volontaire, sans notion de retard à combler."},
          'Succession/Continuité': {status:'nul', senses:['enchaîner','consécutif','bien exécuté'], proof_ctx:"Il s'agit du suivi d'une personne, pas d'une séquence d'événements."},
          'Réclamation/Réparation': {status:'nul', senses:['poursuivre en justice','réclamer','conséquence'], proof_ctx:"Aucun contexte de réclamation ou de dette."},
          'Dépendance/Sujétion': {status:'peu_probable', senses:['serviteur','ombre'], proof_ctx:"La Forme VIII marque l'initiative personnelle, ce qui contredit la passivité de la dépendance."}
        }
      }
    },
    // 6. aty pos=13 — donner
    {
      verse_id:VERSE_ID, word_key:'aty', position:13,
      sense_chosen:'donner',
      analysis_axes: {
        sense_chosen:'donner', concept_chosen:'Venue/Arrivée',
        concepts: {
          'Venue/Arrivée': {status:'retenu', senses:['donner','venir','arriver','apporter','commettre'], proof_ctx:"La Forme IV passive ūtū signifie 'il leur a été donné'. Le sens de donner au passif est le seul qui s'applique."},
          'Sens isolé/Détruire': {status:'nul', senses:['détruire'], proof_ctx:"Aucun contexte de destruction."}
        }
      }
    },
    // 7. ktb pos=14 — livre
    {
      verse_id:VERSE_ID, word_key:'ktb', position:14,
      sense_chosen:'livre',
      analysis_axes: {
        sense_chosen:'livre', concept_chosen:'Livre/Écrit',
        concepts: {
          'Livre/Écrit': {status:'retenu', senses:['livre','registre','écriture révélée','contrat écrit'], proof_ctx:"Le kitāb défini par al- désigne un écrit connu et identifié. Le contexte d'opposition avec les ummiyyīn confirme le sens d'écrit."},
          'Écriture/Inscription': {status:'probable', senses:['écrire','scribe','art de l\'écriture'], proof_ctx:"L'écriture est l'acte d'écrire, le livre est le résultat. 'Ceux qui ont reçu' appelle le résultat (le livre), pas l'acte."},
          'Obligation/Décret': {status:'peu_probable', senses:['prescrire','décret divin','rendre obligatoire'], proof_ctx:"Le contexte n'est pas celui d'un décret mais d'un document donné à un groupe."},
          'Assemblage/Couture': {status:'nul', senses:['coudre','rassembler','attacher'], proof_ctx:"Sens physique premier sans rapport avec le contexte."}
        }
      }
    },
    // 8. amy pos=15 — sans Écriture
    {
      verse_id:VERSE_ID, word_key:'amy', position:15,
      sense_chosen:'sans Écriture',
      analysis_axes: {
        sense_chosen:'sans Écriture', concept_chosen:'Sans Écriture révélée',
        concepts: {
          'État naturel/Originel': {status:'probable', senses:['dans l\'état originel','maternel','non instruit'], proof_ctx:"L'état naturel est le sens étymologique premier (comme sa mère l'a mis au monde), mais le contexte d'opposition avec le kitāb oriente vers le sens plus spécifique de 'sans écriture révélée'."},
          'Illettré/Non-écrivant': {status:'probable', senses:['illettré','ne sachant pas écrire','ne sachant pas lire'], proof_ctx:"L'incapacité à lire/écrire est une conséquence de l'état originel, mais le verset parle de groupes définis par leur rapport à l'écrit, pas de compétences individuelles."},
          'Sans Écriture révélée': {status:'retenu', senses:['sans Écriture','gentil'], proof_ctx:"Les ummiyyīn sont en opposition directe avec 'ceux qui ont reçu l'écrit'. Cette opposition définit leur identité par l'absence de livre révélé, pas par une incapacité individuelle. Le Lane's confirme : terme utilisé par les détenteurs d'écriture pour désigner ceux qui n'en ont pas."},
          'Appartenance nationale': {status:'peu_probable', senses:['Arabe','du commun'], proof_ctx:"Le sens d'Arabe est trop spécifique — le verset s'adresse à des groupes définis par leur rapport à l'écrit, pas par leur ethnie."}
        }
      }
    },
    // 9. hdy pos=21 — se guider soi-même
    {
      verse_id:VERSE_ID, word_key:'hdy', position:21,
      sense_chosen:'se guider soi-même',
      analysis_axes: {
        sense_chosen:'se guider soi-même', concept_chosen:'Guidance/Direction',
        concepts: {
          'Guidance/Direction': {status:'retenu', senses:['guider','guidance','se guider soi-même','diriger vers la bonne voie','montrer le chemin'], proof_ctx:"La Forme VIII ihtadā marque l'effort personnel de se guider. 'Ils se sont guidés' est le résultat de leur remise à Dieu — une conséquence intérieure, pas un don ou une conduite extérieure."},
          'Conduite/Comportement': {status:'probable', senses:['conduite','manière d\'agir','comportement calme'], proof_ctx:"La conduite décrit un comportement observable, alors qu'ici c'est le fait de trouver la direction juste par soi-même qui est décrit."},
          'Don/Offrande': {status:'nul', senses:['cadeau','sacrifice','offrande','présent'], proof_ctx:"Aucun contexte de don ou d'offrande."},
          'Parenté/Famille': {status:'nul', senses:['conduire une mariée'], proof_ctx:"Sans rapport."},
          'Sens isolé/Repentance': {status:'nul', senses:['repentance'], proof_ctx:"Le contexte n'est pas celui du repentir."}
        }
      }
    },
    // 10. wly pos=24 — se détourner
    {
      verse_id:VERSE_ID, word_key:'wly', position:24,
      sense_chosen:'se détourner',
      analysis_axes: {
        sense_chosen:'se détourner', concept_chosen:'Éloignement/Détournement',
        concepts: {
          'Proximité/Protection': {status:'probable', senses:['proche','ami','protecteur','allié'], proof_ctx:"La proximité est le sens positif de la racine wly, mais ici la Forme V exprime le mouvement inverse : retirer sa propre proximité, s'éloigner."},
          'Autorité': {status:'nul', senses:['gouverner'], proof_ctx:"Aucun contexte de gouvernance."},
          'Éloignement/Détournement': {status:'retenu', senses:['se détourner','s\'éloigner','tourner le dos'], proof_ctx:"La Forme V tawallā, réflexive de la racine wly (proximité), signifie retirer sa propre proximité — tourner le dos. C'est l'opposé de la remise (aslama) : au lieu de se rapprocher, ils s'éloignent."}
        }
      }
    },
    // 11. blgh pos=28 — transmettre un message
    {
      verse_id:VERSE_ID, word_key:'blgh', position:28,
      sense_chosen:'transmettre un message',
      analysis_axes: {
        sense_chosen:'transmettre un message', concept_chosen:'Transmission/Communication',
        concepts: {
          'Atteinte/Accomplissement': {status:'probable', senses:['atteindre','parvenir à','atteindre la maturité'], proof_ctx:"Atteindre décrit le fait d'arriver, mais ici c'est la fonction de faire parvenir le message qui est décrite, pas le fait d'arriver quelque part."},
          'Transmission/Communication': {status:'retenu', senses:['communiquer','transmettre un message'], proof_ctx:"Le balāgh est l'acte de faire parvenir un message. 'Sur toi n'est que la transmission' — la responsabilité se limite à faire parvenir, pas à contraindre l'acceptation."},
          'Sens isolé/Être': {status:'nul', senses:['être éloquent'], proof_ctx:"L'éloquence n'est pas le sujet du verset."}
        }
      }
    },
    // 12. llh pos=30 — Dieu
    {
      verse_id:VERSE_ID, word_key:'llh', position:30,
      sense_chosen:'Dieu',
      analysis_axes: {
        sense_chosen:'Dieu', concept_chosen:'Divinité',
        concepts: {
          'Divinité': {status:'retenu', senses:['Dieu','dieu','divinité','théologie'], proof_ctx:"Nom propre Dieu. Le contexte affirme l'attribut de clairvoyance de Dieu envers les serviteurs."},
          'Adoration/Culte': {status:'nul', senses:['adorer','servir','se consacrer au culte'], proof_ctx:"Le mot ici est le nom propre Dieu, pas l'acte d'adorer."},
          'Asservissement': {status:'nul', senses:['réduire en esclavage'], proof_ctx:"Sans rapport."},
          'Confusion/Perplexité': {status:'nul', senses:['être confus'], proof_ctx:"Sans rapport."}
        }
      }
    },
    // 13. bsr pos=31 — clairvoyance
    {
      verse_id:VERSE_ID, word_key:'bsr', position:31,
      sense_chosen:'clairvoyance',
      analysis_axes: {
        sense_chosen:'clairvoyance', concept_chosen:'Vision/Perception',
        concepts: {
          'Vision/Perception': {status:'retenu', senses:['voir','vue','regarder','clairvoyance','comprendre','preuve visible'], proof_ctx:"Baṣīr, forme intensive (faʿīl), indique une capacité permanente de perception en profondeur. 'Dieu est clairvoyant des serviteurs' — il voit en profondeur, pas seulement les apparences."},
          'Corps/Anatomie': {status:'nul', senses:['peau'], proof_ctx:"Le sens de peau n'a aucun rapport avec le contexte."},
          'Sens isolé/Miroir': {status:'nul', senses:['miroir'], proof_ctx:"Sans rapport."}
        }
      }
    },
    // 14. ebd pos=32 — serviteur
    {
      verse_id:VERSE_ID, word_key:'ebd', position:32,
      sense_chosen:'serviteur',
      analysis_axes: {
        sense_chosen:'serviteur', concept_chosen:'Servitude/Esclavage',
        concepts: {
          'Servitude/Esclavage': {status:'retenu', senses:['esclave','serviteur','être humain','asservir','aplanir un chemin','rendre soumis'], proof_ctx:"Le pluriel ʿibād désigne les êtres humains dans leur rapport naturel à Dieu. Différent de ʿabīd (esclaves par contrainte), ʿibād a une connotation de dignité dans la servitude par nature."},
          'Adoration/Dévotion': {status:'probable', senses:['adoration','servir','adorer','dévotion','se dévouer','vouer un culte'], proof_ctx:"L'adoration est un acte actif de la personne, alors que ʿibād décrit le statut de tous les êtres humains vis-à-vis de Dieu, pas seulement ceux qui adorent."},
          'Sens isolé/Mépriser': {status:'nul', senses:['mépriser'], proof_ctx:"Sans rapport."},
          'Sens isolé/Être': {status:'nul', senses:['être en colère'], proof_ctx:"Sans rapport."},
          'Sens isolé/Colérique': {status:'nul', senses:['colérique'], proof_ctx:"Sans rapport."}
        }
      }
    }
  ];

  const {data:insVwa, error:e2} = await db.from('verse_word_analyses').insert(vwas).select('id,word_key,position');
  if(e2) { console.log('ERROR inserting VWA:', e2.message); return; }
  console.log('VWA insérés: ' + insVwa.length);
  insVwa.forEach(v => console.log('  pos=' + v.position + ' wk=' + v.word_key));

  // =============================================
  // PARTIE 3: Mettre à jour les segments dans VA 672
  // =============================================
  console.log('\n=== PARTIE 3: MISE À JOUR SEGMENTS VA 672 ===');

  const {data:va, error:e3a} = await db.from('verse_analyses').select('segments').eq('id',672).single();
  if(e3a) { console.log('ERROR fetching VA 672:', e3a.message); return; }

  const segs = va.segments;

  // Mapping des mots importants: position → {fr, sense_retenu}
  const importantMap = {
    3:  {fr:'disputent', sense_retenu:'disputer'},
    5:  {fr:'dis', sense_retenu:'dire'},
    6:  {fr:'remis', sense_retenu:'soumission'},
    7:  {fr:'visage', sense_retenu:'visage'},
    10: {fr:'suivi', sense_retenu:'suivre'},
    13: {fr:'reçu', sense_retenu:'donner'},
    14: {fr:"l'écrit", sense_retenu:'livre'},
    15: {fr:'sans écriture', sense_retenu:'sans Écriture'},
    16: {fr:'remis', sense_retenu:'soumission'},
    19: {fr:'remettent', sense_retenu:'soumission'},
    21: {fr:'guidés', sense_retenu:'se guider soi-même'},
    24: {fr:'détournent', sense_retenu:'se détourner'},
    28: {fr:'transmission', sense_retenu:'transmettre un message'},
    30: {fr:'Dieu', sense_retenu:'Dieu'},
    31: {fr:'clairvoyant', sense_retenu:'clairvoyance'},
    32: {fr:'serviteurs', sense_retenu:'serviteur'},
  };

  let updatedCount = 0;
  for(const seg of segs) {
    const pos = seg.position;
    if(importantMap[pos]) {
      // Mot important
      seg.is_particle = false;
      seg.fr = importantMap[pos].fr;
      seg.sense_retenu = importantMap[pos].sense_retenu;
      updatedCount++;
    } else {
      // Particule
      seg.is_particle = true;
    }
  }
  console.log('Segments mis à jour: ' + updatedCount + ' mots importants, ' + (segs.length - updatedCount) + ' particules');

  const {error:e3b} = await db.from('verse_analyses').update({segments: segs}).eq('id',672);
  if(e3b) { console.log('ERROR updating segments:', e3b.message); return; }
  console.log('Segments sauvegardés dans VA 672');

  // =============================================
  // PARTIE 4: Mettre à jour VA 672
  // =============================================
  console.log('\n=== PARTIE 4: MISE À JOUR VA 672 ===');

  const translation_explanation = "§DEMARCHE§\n\nCe verset poursuit le thème de la dispute après le verset 19 qui déclarait que le devoir auprès de Dieu est la remise entière. Ici, le texte donne la conduite à tenir face aux opposants : déclarer sa remise totale à Dieu et inviter tous — possesseurs de l'écrit et gens sans écriture — à faire de même.\n\n**Ḥājjūka** (disputent) est une Forme III (mufa'ala) de la racine ḥ-j-j, au passé, troisième personne du pluriel. La Forme III indique une action réciproque — deux parties qui s'opposent mutuellement. Le Lane's donne comme sens premier : « il a contesté avec lui par un argument, une preuve, un plaidoyer ». Le suffixe -ka (toi) montre que la dispute est dirigée vers le destinataire du message.\n\n**Qul** (dis) est un impératif de la racine q-w-l. Ordre simple et direct d'énoncer une parole.\n\n**Aslamtu** (j'ai remis) est une Forme IV (af'ala) de la racine s-l-m, au passé, première personne. La Forme IV apporte l'idée de « faire parvenir entièrement, remettre ». Le Lane's donne comme sens premier de salima : être sain, intact, intègre. La Forme IV aslama signifie donc « remettre entièrement, livrer intégralement ». Le mot est construit avec wajhīya (mon visage) et li-llāhi (à Dieu) : « j'ai remis entièrement mon visage à Dieu ». Le sens post-islamique « embrasser l'islam » est une extension tardive à écarter.\n\n**Wajhīya** (mon visage) est un nom de la racine w-j-h avec un pronom possessif de première personne. Le Lane's donne : face, direction, manière. Le visage est ce qui identifie la personne — remettre son visage signifie remettre son identité entière, tout ce qui fait qui on est.\n\n**Ittabaʿanī** (m'a suivi) est une Forme VIII (ifta'ala) de la racine t-b-', au passé. La Forme VIII ajoute l'idée d'effort personnel : ce n'est pas suivre passivement mais choisir activement de suivre. Le Lane's donne : « il alla derrière lui, il suivit sa trace ». Le suffixe -nī (moi) indique que le suivi est dirigé vers le locuteur.\n\n**Ūtū** (ont reçu) est une Forme IV passive de la racine '-t-y. Le Lane's donne pour la Forme IV : donner, accorder. Au passif : avoir reçu, s'être vu donner. « Ceux qui ont reçu l'écrit » = ceux à qui l'écrit a été donné.\n\n**Al-kitāba** (l'écrit) est un nom défini de la racine k-t-b. Le Lane's donne comme sens premier de kataba : coudre, assembler. Le kitāb est ce qui est assemblé par écrit — un document, un livre. L'article al- indique un écrit connu et identifié.\n\n**Al-ummiyyīna** (ceux sans écriture) est un adjectif pluriel défini de la racine '-m-y, nisba de umma (nation). Le Lane's précise : « celui qui n'a pas de livre révélé », terme utilisé par les détenteurs d'écriture pour désigner ceux qui n'en ont pas. Le terme est mis en opposition directe avec « ceux qui ont reçu l'écrit », ce qui confirme le sens de « sans écriture révélée ».\n\n**A-aslamtum** (avez-vous remis ?) est la même Forme IV que aslamtu mais avec le hamza interrogatif et la deuxième personne du pluriel. La question est posée aux deux groupes.\n\n**Ihtadaw** (se sont guidés) est une Forme VIII de la racine h-d-y, au passé. Le Lane's donne : guidance, direction, montrer le chemin. La Forme VIII ajoute l'effort personnel : « se guider soi-même, trouver par soi-même la bonne direction ». Si les gens remettent leur être à Dieu, le résultat est qu'ils se sont eux-mêmes guidés.\n\n**Tawallaw** (se détournent) est une Forme V de la racine w-l-y, au passé. La racine wly porte l'idée de proximité et d'alliance. La Forme V (tafa''ala), réflexive, signifie ici « retirer sa propre proximité, tourner le dos ». C'est l'opposé de la remise : au lieu de se rapprocher, ils s'éloignent.\n\n**Al-balāghu** (la transmission) est un nom défini de la racine b-l-gh. Le Lane's donne : atteindre, parvenir à, communiquer, transmettre un message. Le balāgh est l'acte de faire parvenir le message. « Sur toi n'incombe que la transmission » = la seule responsabilité est de faire parvenir le message.\n\n**Baṣīrun** (clairvoyant) est un adjectif intensif (faʿīl) de la racine b-ṣ-r. Le Lane's donne : voir, vue, regarder, clairvoyance, comprendre. La forme faʿīl indique une capacité permanente et intense — Dieu voit en permanence et en profondeur.\n\n**Al-ʿibādi** (les serviteurs) est un nom pluriel défini de la racine '-b-d. Le Lane's donne : esclave, serviteur, être humain. Le pluriel ʿibād (différent de ʿabīd) désigne les serviteurs par nature — les êtres humains dans leur relation à Dieu.\n\n§JUSTIFICATION§\n\n**disputent** — Le sens retenu est « Argumentation/Dispute ». Le mot « disputer » est choisi car la Forme III (interaction mutuelle) implique un échange d'arguments entre deux parties. L'alternative « se rendre vers » est écartée car elle n'implique pas d'interaction mutuelle. L'alternative « sonder » est écartée car physique et unidirectionnelle.\n\n**dis** — Le sens retenu est « Parole/Énonciation ». Le mot « dire » est choisi car c'est un impératif simple et direct.\n\n**remis** — Le sens retenu est « Paix/Soumission ». Le mot « remettre » est choisi car il capture l'idée de la Forme IV : livrer entièrement, faire parvenir intégralement. L'alternative « soumis » est écartée car elle porte une connotation de contrainte absente du texte arabe — aslama est un acte volontaire de remise. L'alternative « paix » est écartée car le contexte n'est pas celui de la cessation d'un conflit.\n\n**visage** — Le sens retenu est « Visage/Direction ». Le mot « visage » est choisi car c'est le sens physique premier. L'alternative « direction » est écartée car avec la construction « remettre X à Dieu », c'est l'identité qui est remise, pas une direction abstraite.\n\n**suivi** — Le sens retenu est « Suivre/Accompagner ». Le mot « suivi » est choisi car la Forme VIII marque un choix actif de suivre. L'alternative « rattraper » est écartée car il ne s'agit pas de combler un écart.\n\n**reçu** — Le sens retenu est « Venue/Arrivée ». Le mot « reçu » est choisi car ūtū est la Forme IV passive.\n\n**l'écrit** — Le sens retenu est « Livre/Écrit ». Le mot « écrit » est choisi car le kitāb au sens premier est ce qui est assemblé par écrit. L'alternative « obligation » est écartée car le contexte oppose l'écrit aux illettrés.\n\n**sans écriture** — Le sens retenu est « Sans Écriture révélée ». L'expression « sans écriture » est choisie car les ummiyyūn sont définis par opposition directe à « ceux qui ont reçu l'écrit ». L'alternative « illettrés » est écartée car elle porte un jugement de valeur sur la capacité individuelle.\n\n**guidés** — Le sens retenu est « Guidance/Direction ». Le mot « guidés » est choisi car la Forme VIII (se guider soi-même) indique que la guidance résulte de leur propre remise. L'alternative « conduite » est écartée car elle décrit un comportement, pas une direction trouvée.\n\n**détournent** — Le sens retenu est « Éloignement/Détournement ». Le mot « se détourner » est choisi car la Forme V de wly signifie retirer sa propre proximité. L'alternative « protecteur » est écartée car le contexte est celui du refus.\n\n**transmission** — Le sens retenu est « Transmission/Communication ». Le mot « transmission » est choisi car le balāgh est l'acte de faire parvenir le message. L'alternative « atteindre » est écartée car elle décrit le fait d'arriver, pas de faire parvenir.\n\n**Dieu** — Le sens retenu est « Divinité ». Choix direct.\n\n**clairvoyant** — Le sens retenu est « Vision/Perception ». Le mot « clairvoyant » est choisi car la forme faʿīl exprime une capacité permanente de voir en profondeur.\n\n**serviteurs** — Le sens retenu est « Servitude/Esclavage ». Le mot « serviteurs » est choisi car ʿibād désigne les êtres humains dans leur relation de service à Dieu. L'alternative « esclaves » est écartée car ʿibād a une connotation honorable.\n\n§CRITIQUE§\n\nLe mot clé qui change le sens global est **aslama**. Les traductions courantes donnent « se soumettre à Dieu » ou « embrasser l'islam ». Ce choix vient de l'usage post-islamique de la racine s-l-m, où aslama est devenu synonyme de « devenir musulman ». Ça transforme le verset en une invitation à adopter une religion spécifique, alors que l'étymologie dit « remettre entièrement son visage (son identité) à Dieu ». La nuance est importante : remettre est un acte volontaire de don total, tandis que « se soumettre » implique une contrainte. De même, la question « avez-vous embrassé l'Islam ? » devient « avez-vous remis ? » — une question sur l'engagement personnel, pas sur l'appartenance confessionnelle.\n\nLe mot **ummiyyīn** est aussi significatif. Les traductions donnent « illettrés » — un terme qui porte un jugement de valeur. Notre choix « sans écriture » est plus neutre et colle au sens du Lane's : ceux qui n'ont pas de livre révélé, par opposition à ceux qui en ont un.";

  const {error:e4} = await db.from('verse_analyses').update({
    validated: true,
    translation_arab: "S'ils te disputent, alors dis : « J'ai remis mon visage à Dieu — et celui qui m'a suivi. » Et dis à ceux qui ont reçu l'écrit et à ceux sans écriture : « Avez-vous remis ? » S'ils remettent, ils se sont guidés. Et s'ils se détournent, sur toi n'incombe que la transmission. Et Dieu est clairvoyant envers les serviteurs.",
    full_translation: "Si donc ils te disputent, dis : « Je me suis soumis à Allah, moi et ceux qui m'ont suivi. » Et dis à ceux à qui le Livre a été donné, ainsi qu'aux illettrés : « Avez-vous embrassé l'Islam ? » S'ils embrassent l'Islam, ils seront bien guidés. Et s'ils se détournent… il ne t'incombe que de transmettre le message. Allah est, certes, Clairvoyant sur Ses serviteurs.",
    translation_explanation: translation_explanation
  }).eq('id',672);

  if(e4) { console.log('ERROR updating VA 672:', e4.message); return; }
  console.log('VA 672 mis à jour: validated=true, traductions + explication');

  // =============================================
  // PARTIE 5: Insérer word_daily pour tba, amy, blgh
  // =============================================
  console.log('\n=== PARTIE 5: INSERTION WORD_DAILY ===');

  // tba (aid=729), sense="suivre"
  const tbaDaily = [
    {analysis_id:729, sense:'suivre', arabic:'أنا أتبعك', phon:'Anā attabiʿuka', french:'Je te suis (quand tu accompagnes quelqu\'un)'},
    {analysis_id:729, sense:'suivre', arabic:'اتبع الطريق', phon:'Ittabiʿ aṭ-ṭarīq', french:'Suis le chemin (pour donner des directions)'},
    {analysis_id:729, sense:'suivre', arabic:'تبعني الطفل', phon:'Tabiʿanī aṭ-ṭiflu', french:'L\'enfant m\'a suivi'},
  ];

  for(const p of tbaDaily) {
    const {data:ex} = await db.from('word_daily').select('id').eq('analysis_id',p.analysis_id).eq('french',p.french);
    if(ex && ex.length > 0) { console.log('  tba SKIP: ' + p.french.substring(0,40)); continue; }
    const {error} = await db.from('word_daily').insert(p);
    if(error) console.log('  tba ERROR: ' + error.message);
    else console.log('  tba OK: ' + p.french.substring(0,50));
  }

  // amy (aid=645), sense="sans Écriture"
  const amyDaily = [
    {analysis_id:645, sense:'sans Écriture', arabic:'هل هو أمّي؟', phon:'Hal huwa ummiyy?', french:'Est-il illettré ? (pour demander si quelqu\'un sait lire)'},
    {analysis_id:645, sense:'sans Écriture', arabic:'كان أمّيًا', phon:'Kāna ummiyyan', french:'Il était illettré'},
    {analysis_id:645, sense:'sans Écriture', arabic:'تعلّم القراءة بعد أن كان أمّيًا', phon:'Taʿallama al-qirāʾa baʿda an kāna ummiyyan', french:'Il a appris à lire après avoir été illettré'},
  ];

  for(const p of amyDaily) {
    const {data:ex} = await db.from('word_daily').select('id').eq('analysis_id',p.analysis_id).eq('french',p.french);
    if(ex && ex.length > 0) { console.log('  amy SKIP: ' + p.french.substring(0,40)); continue; }
    const {error} = await db.from('word_daily').insert(p);
    if(error) console.log('  amy ERROR: ' + error.message);
    else console.log('  amy OK: ' + p.french.substring(0,50));
  }

  // blgh (aid=987), sense="transmettre un message"
  const blghDaily = [
    {analysis_id:987, sense:'transmettre un message', arabic:'بلّغه السلام', phon:'Ballighu as-salām', french:'Transmets-lui les salutations'},
    {analysis_id:987, sense:'transmettre un message', arabic:'بلغ الخبر', phon:'Balagha al-khabar', french:'La nouvelle est parvenue'},
    {analysis_id:987, sense:'transmettre un message', arabic:'هل بلّغت الرسالة؟', phon:'Hal ballaghta ar-risāla?', french:'As-tu transmis le message ?'},
  ];

  for(const p of blghDaily) {
    const {data:ex} = await db.from('word_daily').select('id').eq('analysis_id',p.analysis_id).eq('french',p.french);
    if(ex && ex.length > 0) { console.log('  blgh SKIP: ' + p.french.substring(0,40)); continue; }
    const {error} = await db.from('word_daily').insert(p);
    if(error) console.log('  blgh ERROR: ' + error.message);
    else console.log('  blgh OK: ' + p.french.substring(0,50));
  }

  // =============================================
  // VÉRIFICATION FINALE
  // =============================================
  console.log('\n=== VÉRIFICATION FINALE ===');

  // Check VWA count
  const {data:finalVwa} = await db.from('verse_word_analyses').select('id,word_key,position,sense_chosen').eq('verse_id',VERSE_ID).order('position');
  console.log('VWA pour va=672: ' + (finalVwa ? finalVwa.length : 0));
  if(finalVwa) finalVwa.forEach(v => console.log('  pos=' + v.position + ' ' + v.word_key + ' → ' + v.sense_chosen));

  // Check VA validated
  const {data:finalVa} = await db.from('verse_analyses').select('validated,translation_arab').eq('id',672).single();
  console.log('\nVA 672 validated: ' + finalVa.validated);
  console.log('Traduction: ' + finalVa.translation_arab.substring(0,80) + '...');

  // Check word_daily counts
  for(const [key, aid] of [['tba',729],['amy',645],['blgh',987]]) {
    const {count} = await db.from('word_daily').select('*',{count:'exact',head:true}).eq('analysis_id',aid);
    console.log(key + ' word_daily: ' + count + ' phrases');
  }

  // Check wly senses
  const {data:wlySensesCheck} = await db.from('word_meanings').select('concept,sense').eq('analysis_id',599).order('display_order');
  console.log('\nwly sens (' + wlySensesCheck.length + '):');
  wlySensesCheck.forEach(s => console.log('  [' + s.concept + '] ' + s.sense));

  console.log('\n=== TOUT EST FAIT ===');
})();
