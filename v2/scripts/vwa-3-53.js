const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

async function run() {
  const verse_id = 346; // verse 3:53

  // Delete existing VWA for this verse
  const { error: delErr } = await db.from('verse_word_analyses').delete().eq('verse_id', verse_id);
  if (delErr) { console.log('Delete error:', delErr); return; }
  console.log('Cleared existing VWA');

  const vwas = [
    // 1. rbb (rabbana)
    {
      verse_id,
      word_key: 'rbb',
      position: 1,
      sense_chosen: 'celui qui entretient',
      analysis_axes: {
        sense_chosen: 'celui qui entretient',
        concept_chosen: 'Seigneurie/Autorité bienveillante',
        concepts: {
          'Seigneurie/Autorité bienveillante': {
            status: 'retenu',
            senses: ['seigneur', 'maître', 'propriétaire', 'celui qui élève', 'celui qui entretient', 'celui qui possède', 'gouverner'],
            proof_ctx: "Les disciples s'adressent directement a Dieu par un vocatif — ils appellent Celui qui detient l'autorite permanente sur eux et les eleve. Le sens d'autorite bienveillante est le plus precis car le vocatif rabbana implique une relation de dependance et de soin : celui a qui on s'adresse est le maitre qui prend soin de ce qu'il possede. Contrairement au sens d'education, le vocatif ici n'insiste pas sur le processus pedagogique mais sur la position d'autorite."
          },
          'Éducation/Accompagnement': {
            status: 'probable',
            senses: ['élever un enfant', 'éduquer', 'former', 'accompagner la croissance'],
            proof_ctx: "Le sens d'education est coherent car Dieu est celui qui accompagne la croissance de ses serviteurs. Mais dans ce contexte de declaration de foi, les disciples ne s'adressent pas a un educateur — ils s'adressent a Celui qui detient l'autorite sur eux et a qui ils rendent des comptes."
          },
          'Croissance/Augmentation': {
            status: 'peu_probable',
            senses: ['augmenter', 'croître', 'faire grandir', 'nourrir', 'développer', 'excès', 'colline', 'éminence'],
            proof_ctx: "Le sens d'augmentation physique ne correspond pas a un vocatif adresse a Dieu. On n'appelle pas Dieu « notre augmentation »."
          },
          'Commerce/Usure': {
            status: 'nul',
            senses: ['usure', 'augmentation de dette', 'intérêt'],
            proof_ctx: "Aucun rapport avec le contexte d'invocation."
          },
          'Souffle/Vent': { status: 'nul', senses: ['essoufflement'], proof_ctx: "Hors sujet." },
          'Sens isolé/Fixer': { status: 'nul', senses: ['fixer'], proof_ctx: "Hors sujet." },
          'Sens isolé/Rassembler': { status: 'nul', senses: ['rassembler'], proof_ctx: "Hors sujet." },
          'Sens isolé/Groupe': { status: 'nul', senses: ['groupe'], proof_ctx: "Hors sujet." },
          'Sens isolé/Confiture': { status: 'nul', senses: ['confiture'], proof_ctx: "Hors sujet." }
        }
      }
    },

    // 2. amn (amanna)
    {
      verse_id,
      word_key: 'amn',
      position: 2,
      sense_chosen: 'faire confiance',
      analysis_axes: {
        sense_chosen: 'faire confiance',
        concept_chosen: 'Sécurité/Confiance',
        concepts: {
          'Sécurité/Confiance': {
            status: 'retenu',
            senses: ['être en sécurité', 'se sentir en sécurité', 'faire confiance', 'confier', 'fidèle', 'lieu sûr'],
            proof_ctx: "La forme IV de la racine a-m-n avec la preposition bi signifie etymologiquement « accorder sa confiance a ». Les disciples declarent qu'ils ont accorde leur confiance a ce que Dieu a fait descendre. Le sens de securite/confiance est le sens premier de la racine — la confiance est l'etat de celui qui se sent en securite aupres de quelqu'un ou de quelque chose. Contrairement au sens de foi/adhesion qui est une extension devenue conventionnelle, la confiance est l'acte concret de se remettre a quelqu'un."
          },
          'Foi/Adhésion': {
            status: 'probable',
            senses: ['croire', 'avoir la foi', 'accepter comme vrai', 'croyant', 'confirmer'],
            proof_ctx: "Le sens de croire est coherent avec le contexte — les disciples declarent leur adhesion. Mais le sens de foi est une extension du sens premier de securite/confiance. La forme IV + bi donne etymologiquement « accorder la confiance a » plutot que simplement « croire en »."
          },
          'Garantie/Protection': {
            status: 'peu_probable',
            senses: ['protéger', 'accorder la sécurité'],
            proof_ctx: "Les disciples ne sont pas en position de proteger ou d'accorder la securite — ils sont les recepteurs, pas les donneurs de protection dans ce contexte."
          },
          'Sens isolé/Amen': {
            status: 'nul',
            senses: ['amen'],
            proof_ctx: "Hors sujet dans ce contexte verbal."
          }
        }
      }
    },

    // 3. nzl (anzalta)
    {
      verse_id,
      word_key: 'nzl',
      position: 5,
      sense_chosen: 'faire descendre',
      analysis_axes: {
        sense_chosen: 'faire descendre',
        concept_chosen: 'Descente/Révélation',
        concepts: {
          'Descente/Révélation': {
            status: 'retenu',
            senses: ['descendre', 'faire descendre', 'révéler', "envoyer d'en haut", 'pluie qui descend'],
            proof_ctx: "La forme IV anzala a l'accompli signifie « Tu as fait descendre ». L'acte est acheve — Dieu a deja fait descendre ce en quoi les disciples accordent leur confiance. Le mouvement est du haut vers le bas, de la source divine vers les recepteurs. Le sens de « faire descendre » est le sens premier, sans presupposer la nature de ce qui est descendu."
          },
          'Halte/Séjour': {
            status: 'nul',
            senses: ["s'installer", 'faire halte', 'hôte', 'lieu de descente'],
            proof_ctx: "Le sujet est Dieu a la 2eme personne — Dieu ne fait pas halte. Ce sens est hors sujet."
          },
          'Sens isolé/Rang': {
            status: 'nul',
            senses: ['rang'],
            proof_ctx: "Hors sujet."
          }
        }
      }
    },

    // 4. tba (ittaba'na)
    {
      verse_id,
      word_key: 'tba',
      position: 7,
      sense_chosen: 'suivre',
      analysis_axes: {
        sense_chosen: 'suivre',
        concept_chosen: 'Suivre/Accompagner',
        concepts: {
          'Suivre/Accompagner': {
            status: 'retenu',
            senses: ['suivre', 'accompagner', 'disciple', 'imiter'],
            proof_ctx: "La forme VIII ittaba'a a l'accompli signifie « nous avons activement suivi ». Les disciples declarent avoir suivi le messager — ils se sont mis dans son sillage de maniere volontaire et continue. La forme VIII ajoute l'idee d'un engagement personnel : ils se sont eux-memes mis a suivre. Contrairement au sens de rattraper, ils ne comblent pas un ecart mais marchent dans la voie du messager."
          },
          'Rattraper/Atteindre': {
            status: 'peu_probable',
            senses: ['rattraper', 'rejoindre', 'suivre les traces'],
            proof_ctx: "Le contexte n'implique pas que les disciples etaient en retard et ont rattrape le messager. Ils declarent un suivi actif et volontaire, pas une course pour rejoindre."
          },
          'Succession/Continuité': {
            status: 'peu_probable',
            senses: ['enchaîner', 'consécutif', 'bien exécuté'],
            proof_ctx: "Le sens de succession implique un enchainement automatique sans agent conscient. Les disciples sont des agents actifs qui choisissent de suivre."
          },
          'Réclamation/Réparation': {
            status: 'nul',
            senses: ['poursuivre en justice', 'réclamer', 'conséquence'],
            proof_ctx: "Les disciples ne poursuivent pas le messager en justice."
          },
          'Dépendance/Sujétion': {
            status: 'nul',
            senses: ['serviteur', 'ombre'],
            proof_ctx: "Le contexte presente les disciples comme des acteurs volontaires, pas des dependants passifs."
          }
        }
      }
    },

    // 5. rsl (ar-rasula)
    {
      verse_id,
      word_key: 'rsl',
      position: 8,
      sense_chosen: 'messager',
      analysis_axes: {
        sense_chosen: 'messager',
        concept_chosen: 'Messager/Porteur',
        concepts: {
          'Messager/Porteur': {
            status: 'retenu',
            senses: ['messager', 'envoye'],
            proof_ctx: "Le mot ar-rasul avec l'article defini designe un messager precis et connu — dans le contexte des versets 48-52, il s'agit de celui que Dieu a envoye aux Fils d'Israel. Le messager est defini par sa relation a l'envoyeur : il porte et transmet ce qui lui a ete confie. L'article defini montre que le messager est identifie et connu de l'auditoire."
          },
          'Envoi/Transmission': {
            status: 'probable',
            senses: ['envoyer', 'envoyer un messager', 'echanger des messages', 'message'],
            proof_ctx: "Le sens d'envoi est la racine du mot rasul, mais ici le mot designe la personne envoyee, pas l'acte d'envoyer. Le sens Messager/Porteur est plus precis pour ce nom."
          },
          'Lacher/Liberer': { status: 'nul', senses: ['lacher', 'liberer', 'lancer'], proof_ctx: "Hors sujet — le mot designe une personne, pas l'acte de lacher." },
          'Douceur/Aisance': { status: 'nul', senses: ["etre facile dans l'allure", 'agir avec douceur et calme', 'reciter posement'], proof_ctx: "Hors sujet pour le nom rasul." },
          'Pendaison/Relachement': { status: 'nul', senses: ['cheveux pendants et lisses', 'pendre'], proof_ctx: "Hors sujet." },
          'Troupeau/Groupe': { status: 'nul', senses: ['troupeau de chameaux', 'groupe de personnes'], proof_ctx: "Hors sujet." },
          'Pluie/Eau': { status: 'nul', senses: ['pluie envoyee'], proof_ctx: "Hors sujet." }
        }
      }
    },

    // 6. ktb (uktubna)
    {
      verse_id,
      word_key: 'ktb',
      position: 10,
      sense_chosen: 'écrire',
      analysis_axes: {
        sense_chosen: 'écrire',
        concept_chosen: 'Écriture/Inscription',
        concepts: {
          'Écriture/Inscription': {
            status: 'retenu',
            senses: ['écrire', 'dicter', "demander d'écrire", "écrire à quelqu'un", "s'inscrire", 'copier un livre', "art de l'écriture", 'scribe', 'savant', 'école', 'enseignant', 'vendeur de livres'],
            proof_ctx: "L'imperatif uktub avec le pronom suffixe na signifie « inscris-nous » ou « ecris-nous ». Les disciples demandent a Dieu de les inscrire — de les enregistrer par ecrit — parmi les temoins. L'acte d'ecrire est concret et permanent : ce qui est ecrit reste. La demande est que leur temoignage soit consigne definitivement. Contrairement au sens d'obligation/decret, il ne s'agit pas de prescrire mais d'enregistrer."
          },
          'Obligation/Décret': {
            status: 'probable',
            senses: ['prescrire', 'rendre obligatoire', 'juger', 'décret divin', 'prédestination'],
            proof_ctx: "Le sens de decret est coherent — les disciples pourraient demander a Dieu de decreter leur appartenance aux temoins. Mais le verbe a l'imperatif avec ma'a (avec) oriente vers l'inscription dans un groupe, pas vers un decret d'obligation."
          },
          'Livre/Écrit': {
            status: 'peu_probable',
            senses: ['livre', 'écriture révélée', 'registre', 'contrat écrit', 'contrat de mariage', "contrat d'affranchissement"],
            proof_ctx: "Le verbe est a l'imperatif — il designe l'acte, pas le support. Le livre est le resultat, pas l'action demandee."
          },
          'Assemblage/Couture': { status: 'nul', senses: ['rassembler', 'coudre', 'attacher', 'fermer la vulve', "lier l'outre", 'se ceindre', 'collecter', 'préparer les troupes', 'armée'], proof_ctx: "Hors sujet dans ce contexte d'invocation." },
          'Souffle/Vent': { status: 'nul', senses: ['rétention urinaire'], proof_ctx: "Hors sujet." },
          'Sens isolé/Constipation': { status: 'nul', senses: ['constipation'], proof_ctx: "Hors sujet." },
          'Sens isolé/Flèche': { status: 'nul', senses: ["flèche d'entraînement"], proof_ctx: "Hors sujet." },
          'Sens isolé/Gonflé': { status: 'nul', senses: ['gonflé et plein'], proof_ctx: "Hors sujet." }
        }
      }
    },

    // 7. shhd (ash-shahideen)
    {
      verse_id,
      word_key: 'shhd',
      position: 12,
      sense_chosen: 'témoigner',
      analysis_axes: {
        sense_chosen: 'témoigner',
        concept_chosen: 'Témoignage/Déclaration',
        concepts: {
          'Témoignage/Déclaration': {
            status: 'retenu',
            senses: ['témoigner', "déclarer ce que l'on sait", 'attester', 'donner une information décisive'],
            proof_ctx: "Le participe actif pluriel defini ash-shahideen designe « ceux qui temoignent activement ». Le participe actif implique une action continue et volontaire — les temoins sont ceux qui declarent activement ce qu'ils savent et ce qu'ils ont vu. Les disciples demandent a etre inscrits parmi ceux qui portent temoignage. Contrairement au sens de simple presence, le participe actif implique une action dirigee vers l'exterieur — le temoin ne se contente pas d'etre la, il parle et declare."
          },
          'Présence/Constatation': {
            status: 'probable',
            senses: ['être présent', 'voir de ses propres yeux', 'assister à'],
            proof_ctx: "Le sens de presence est lie au temoignage — on ne peut temoigner que de ce a quoi on a assiste. Mais le participe actif ash-shahideen insiste sur l'acte de declarer, pas simplement sur le fait d'etre present."
          },
          'Connaissance/Reconnaissance': {
            status: 'probable',
            senses: ['savoir et reconnaître', 'reconnaître'],
            proof_ctx: "La connaissance est un prealable au temoignage — on temoigne de ce qu'on sait. Mais ash-shahideen designe ceux qui expriment cette connaissance, pas ceux qui la detiennent en silence."
          },
          'Serment/Engagement': {
            status: 'peu_probable',
            senses: ['jurer', 'prêter serment'],
            proof_ctx: "Le contexte n'est pas celui d'un serment formel. Les disciples declarent leur foi et demandent a etre enregistres comme temoins, pas comme jureurs."
          },
          'Prise à témoin': {
            status: 'peu_probable',
            senses: ['prendre comme témoin', 'faire témoigner'],
            proof_ctx: "La forme ici est le participe actif, pas la forme IV. Les temoins agissent d'eux-memes, ils ne sont pas « faits temoins » par quelqu'un d'autre."
          },
          'Martyre/Sacrifice': {
            status: 'peu_probable',
            senses: ['martyr', "celui qui est tué dans la voie de Dieu"],
            proof_ctx: "Le sens de martyr est une extension du sens de temoin. Le contexte ne parle pas de sacrifice ou de mort mais de temoignage actif."
          },
          'Miel/Substance': {
            status: 'nul',
            senses: ['miel dans la cire', 'rayon de miel'],
            proof_ctx: "Hors sujet."
          }
        }
      }
    }
  ];

  const { data, error } = await db.from('verse_word_analyses').insert(vwas).select('id, word_key');
  if (error) console.log('Insert error:', JSON.stringify(error));
  else {
    console.log('Inserted', data.length, 'VWA entries:');
    data.forEach(d => console.log(' ', d.id, d.word_key));
  }
}

run().catch(console.error);
