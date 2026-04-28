const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

async function run() {
  const verseId = 347;

  const vwaEntries = [
    // Position 2: makaruu (mkr) - they plotted
    {
      verse_id: verseId,
      word_key: 'mkr',
      root: 'م ك ر',
      position: 2,
      sense_chosen: 'comploter',
      analysis_axes: JSON.stringify({
        concept_chosen: 'Ruse/Stratagème',
        concepts: {
          'Ruse/Stratagème': {
            status: 'retenu',
            senses: ['ruser', 'comploter', 'stratagème', 'plan secret', 'tromper', 'circonvenir', 'machiner'],
            proof_ctx: "Le verbe est à l'accompli troisième personne du pluriel (une action achevée faite par un groupe). Le contexte des versets 52-53 montre que des gens ont pris position contre Jésus \u2014 ce groupe a agi secrètement contre lui. La ruse est un acte dirigé vers l'extérieur, elle sort de ceux qui l'exercent et atteint celui qui est visé. Un verbe accompli peut-il exprimer une ruse achevée ? Oui \u2014 « ils ont comploté » est une expression naturelle. La ruse se distingue de l'habileté par son caractère secret et hostile, et de la rétribution par le fait qu'elle est initiée par des humains contre un autre humain, pas une réponse proportionnelle."
          },
          'Habileté/Gestion': {
            status: 'peu_probable',
            senses: ['gérer habilement', 'manoeuvrer avec adresse', 'expédient'],
            proof_ctx: "L'habileté est neutre \u2014 elle ne suppose ni hostilité ni secret. Or le contexte montre une opposition à Jésus (V52 : quand il a senti la couverture/kufr de leur part). L'action est hostile, pas neutre, ce qui élimine ce sens."
          },
          'Stratégie militaire': {
            status: 'peu_probable',
            senses: ['stratégie de guerre', 'manoeuvre tactique'],
            proof_ctx: "Le contexte n'est pas un champ de bataille mais une situation de tension entre un messager et ceux qui le rejettent. Il n'y a pas de conflit armé décrit."
          },
          'Rétribution/Compensation': {
            status: 'nul',
            senses: ['rétribuer', 'accorder un répit', 'prendre graduellement'],
            proof_ctx: "La rétribution est une réponse divine à un tort. Les sujets ici sont humains, pas Dieu \u2014 la rétribution ne s'applique pas."
          },
          'Tromperie réciproque': {
            status: 'peu_probable',
            senses: ['se tromper mutuellement', 'ruser mutuellement'],
            proof_ctx: "La forme du verbe est simple (forme I), pas mutuelle (forme VI). L'action est unilatérale : ils complotent contre Jésus."
          }
        }
      })
    },
    // Position 4: makara Allah (mkr) - God responded
    {
      verse_id: verseId,
      word_key: 'mkr',
      root: 'م ك ر',
      position: 4,
      sense_chosen: 'stratagème',
      analysis_axes: JSON.stringify({
        concept_chosen: 'Ruse/Stratagème',
        concepts: {
          'Ruse/Stratagème': {
            status: 'retenu',
            senses: ['ruser', 'comploter', 'stratagème', 'plan secret', 'tromper', 'circonvenir', 'machiner'],
            proof_ctx: "Le texte utilise le même verbe (makara) pour Dieu que pour le groupe qui a comploté. Le parallélisme est délibéré : le Coran met les deux actions en miroir. Dieu répond au même niveau que leur action. Choisir un sens différent pour Dieu reviendrait à interpréter au-delà de ce que le texte dit. Le verbe est à l'accompli (action achevée) \u2014 Dieu a mis en oeuvre son stratagème en réponse à leur complot. La ruse de Dieu se distingue de la leur par le qualificatif du verset : khayru al-mākirīn (le meilleur de ceux qui font le makr). La supériorité est dans le degré, pas dans la nature de l'acte. Le sens « stratagème » est retenu plutôt que « comploter » car le stratagème est plus neutre \u2014 il désigne le plan lui-même sans la connotation exclusivement négative du complot."
          },
          'Rétribution/Compensation': {
            status: 'probable',
            senses: ['rétribuer', 'accorder un répit', 'prendre graduellement'],
            proof_ctx: "D'après les sources étymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), quand Dieu est le sujet de makara, le sens peut être « rétribuer pour la ruse » ou « accorder un répit puis mener vers les conséquences ». Ce sens est attesté mais c'est une interprétation théologique \u2014 le texte ne dit pas que Dieu rétribue, il dit que Dieu a fait du makr. Le parallélisme avec le verbe précédent (makarū) suggère le même type d'action."
          },
          'Habileté/Gestion': {
            status: 'probable',
            senses: ['gérer habilement', 'manoeuvrer avec adresse', 'expédient'],
            proof_ctx: "L'habileté dans la gestion est une lecture possible : Dieu gère la situation avec une maîtrise parfaite. Mais ce sens efface le parallélisme voulu par le texte entre le makr humain et le makr divin. Le texte ne dit pas que Dieu « gère », il dit que Dieu « fait du makr » \u2014 le même mot exactement."
          },
          'Stratégie militaire': {
            status: 'nul',
            senses: ['stratégie de guerre', 'manoeuvre tactique'],
            proof_ctx: "Le contexte n'est pas militaire."
          },
          'Tromperie réciproque': {
            status: 'nul',
            senses: ['se tromper mutuellement', 'ruser mutuellement'],
            proof_ctx: "La forme est simple (forme I), pas mutuelle (forme VI)."
          }
        }
      })
    },
    // Position 5: allaahu (alh) - God (subject of makara)
    {
      verse_id: verseId,
      word_key: 'alh',
      root: 'ا ل ه',
      position: 5,
      sense_chosen: 'divinité',
      analysis_axes: JSON.stringify({
        concept_chosen: 'Divinité',
        concepts: {
          'Divinité': {
            status: 'retenu',
            senses: ['divinité', 'divinité (concept)', 'Dieu', 'théologie', 'exclamation divine', 'oui certes'],
            proof_ctx: "Allah est le nom propre de la Divinité, sujet du verbe makara. Il identifie l'agent de l'action. Le mot est au nominatif (sujet). La divinité est l'identité de Dieu, pas une action ni un état \u2014 c'est un nom propre qui désigne une réalité connue et définie."
          },
          'Adoration/Dévotion': {
            status: 'nul',
            senses: ['adorer', 'faire adorer', 'se dévouer au culte', 'diviniser'],
            proof_ctx: "Le mot est un nom propre en position de sujet, pas un verbe d'action. Il identifie, il ne décrit pas un acte d'adoration."
          },
          'Détresse': { status: 'nul', senses: ['être perplexe', 'se lamenter'], proof_ctx: 'Hors sujet.' },
          'Refuge/Protection': { status: 'nul', senses: ['chercher refuge', 'protéger', 'demeurer'], proof_ctx: 'Hors sujet.' },
          'Domination': { status: 'nul', senses: ['asservir'], proof_ctx: 'Hors sujet.' }
        }
      })
    },
    // Position 7: allaahu (alh) - God (subject of khayru)
    {
      verse_id: verseId,
      word_key: 'alh',
      root: 'ا ل ه',
      position: 7,
      sense_chosen: 'divinité',
      analysis_axes: JSON.stringify({
        concept_chosen: 'Divinité',
        concepts: {
          'Divinité': {
            status: 'retenu',
            senses: ['divinité', 'divinité (concept)', 'Dieu', 'théologie', 'exclamation divine', 'oui certes'],
            proof_ctx: "Allah est le nom propre de la Divinité, sujet de la phrase nominale « Allāhu khayru al-mākirīn ». La phrase attribue une qualité (être le meilleur de ceux qui font le makr) au sujet (Dieu). Le mot identifie de qui on parle."
          },
          'Adoration/Dévotion': {
            status: 'nul',
            senses: ['adorer', 'faire adorer', 'se dévouer au culte', 'diviniser'],
            proof_ctx: "Position de sujet nominal, pas d'acte d'adoration."
          },
          'Détresse': { status: 'nul', senses: ['être perplexe', 'se lamenter'], proof_ctx: 'Hors sujet.' },
          'Refuge/Protection': { status: 'nul', senses: ['chercher refuge', 'protéger', 'demeurer'], proof_ctx: 'Hors sujet.' },
          'Domination': { status: 'nul', senses: ['asservir'], proof_ctx: 'Hors sujet.' }
        }
      })
    },
    // Position 8: khayru (khyr) - best
    {
      verse_id: verseId,
      word_key: 'khyr',
      root: 'خ ي ر',
      position: 8,
      sense_chosen: 'meilleur',
      analysis_axes: JSON.stringify({
        concept_chosen: 'Supériorité',
        concepts: {
          'Supériorité': {
            status: 'retenu',
            senses: ['meilleur', 'supérieur'],
            proof_ctx: "Le mot khayru est en position de prédicat dans la phrase nominale « Allāhu khayru al-mākirīn » \u2014 il attribue la qualité de supériorité à Dieu parmi ceux qui font le makr. La construction « khayru + génitif pluriel » est le superlatif arabe (élatif). Le test de compatibilité : un nom indéfini au nominatif peut-il exprimer la supériorité dans une construction comparative ? Oui \u2014 « le meilleur de » est l'expression naturelle de l'élatif. La supériorité se distingue du bien/bonté par la comparaison : « meilleur » implique un classement, « bon » est absolu. Ici, Dieu n'est pas simplement « bon » \u2014 il est « le meilleur » dans une catégorie précise (les mākirīn)."
          },
          'Bien/Excellence': {
            status: 'probable',
            senses: ['bien', 'meilleur', 'bonté'],
            proof_ctx: "Le bien au sens général est cohérent mais ne rend pas la dimension comparative de la construction élatif + génitif. Le verset ne dit pas que Dieu est « bon » en général, il dit qu'il est « le meilleur » dans une catégorie spécifique."
          },
          'Bien/Bonté': {
            status: 'peu_probable',
            senses: ['vertueux', 'bien (moral ou physique)', 'bon', 'bienfait'],
            proof_ctx: "La bonté est une qualité générale. La construction du verset est comparative (élatif + génitif), pas qualificative générale. « Le bienfait des stratèges » ne se dit pas."
          },
          'Choix/Préférence': {
            status: 'nul',
            senses: ['choisir', 'préférer', 'sélectionner'],
            proof_ctx: "Le verset n'exprime pas un choix mais une supériorité. La forme grammaticale est un nom, pas un verbe d'action."
          },
          'Générosité/Noblesse': {
            status: 'nul',
            senses: ['noble', 'généreux'],
            proof_ctx: "La noblesse et la générosité sont hors du champ lexical de ce verset qui parle de stratégie et de réponse."
          }
        }
      })
    },
    // Position 9: al-maakiriin (mkr) - the plotters
    {
      verse_id: verseId,
      word_key: 'mkr',
      root: 'م ك ر',
      position: 9,
      sense_chosen: 'ruser',
      analysis_axes: JSON.stringify({
        concept_chosen: 'Ruse/Stratagème',
        concepts: {
          'Ruse/Stratagème': {
            status: 'retenu',
            senses: ['ruser', 'comploter', 'stratagème', 'plan secret', 'tromper', 'circonvenir', 'machiner'],
            proof_ctx: "Le mot est un participe actif pluriel défini avec l'article al- (ceux qui font activement et de manière continue le makr). La construction « khayru al-mākirīn » crée une catégorie : tous ceux qui pratiquent le makr. Le participe actif identifie une qualité permanente de celui qui la porte \u2014 « ceux qui rusent » est une expression naturelle. Le contexte inclut à la fois les humains (qui ont comploté contre Jésus) et Dieu (qui a répondu). Le mot les englobe tous dans la même catégorie, et Dieu en est le meilleur."
          },
          'Habileté/Gestion': {
            status: 'probable',
            senses: ['gérer habilement', 'manoeuvrer avec adresse', 'expédient'],
            proof_ctx: "Le participe actif pourrait désigner « ceux qui gèrent habilement ». Mais le parallélisme avec les deux occurrences précédentes de makara (complot humain et réponse divine) montre que le même registre est maintenu. « Les stratèges » serait trop neutre pour le contexte."
          },
          'Rétribution/Compensation': {
            status: 'nul',
            senses: ['rétribuer', 'accorder un répit', 'prendre graduellement'],
            proof_ctx: "Le mot est un participe actif qui décrit ceux qui font le makr \u2014 il catégorise les acteurs, il ne décrit pas un processus de rétribution."
          },
          'Stratégie militaire': {
            status: 'nul',
            senses: ['stratégie de guerre', 'manoeuvre tactique'],
            proof_ctx: "Le contexte n'est pas militaire."
          },
          'Tromperie réciproque': {
            status: 'nul',
            senses: ['se tromper mutuellement', 'ruser mutuellement'],
            proof_ctx: "Forme I, pas forme VI."
          }
        }
      })
    }
  ];

  const { data: inserted, error } = await db.from('verse_word_analyses').insert(vwaEntries).select('id, word_key, position, sense_chosen');
  if (error) {
    console.log('INSERT ERROR:', JSON.stringify(error));
  } else {
    console.log('Inserted', inserted.length, 'VWA entries');
    for (const v of inserted) {
      console.log('  id=' + v.id + ' ' + v.word_key + ' pos=' + v.position + ' sense=' + v.sense_chosen);
    }
  }

  // Log format
  console.log('\n[MKR] 17 sens -> 5 concepts');
  console.log('  Ruse/Stratagème (7 sens) -> RETENU : "Complot humain (pos 2), stratagème divin (pos 4), catégorie de ceux qui rusent (pos 9)"');
  console.log('  Habileté/Gestion (3 sens) -> PEU PROBABLE/PROBABLE : "Neutre, efface le parallélisme voulu par le texte"');
  console.log('  Stratégie militaire (2 sens) -> PEU PROBABLE/NUL : "Contexte non militaire"');
  console.log('  Rétribution/Compensation (3 sens) -> PROBABLE/NUL : "Interprétation théologique, le texte dit makr pas rétribution"');
  console.log('  Tromperie réciproque (2 sens) -> PEU PROBABLE/NUL : "Forme I pas forme VI"');

  console.log('\n[ALH] 16 sens -> 5 concepts');
  console.log('  Divinité (6 sens) -> RETENU : "Nom propre, sujet du verbe"');
  console.log('  Adoration/Dévotion (4 sens) -> NUL');
  console.log('  Détresse (2 sens) -> NUL');
  console.log('  Refuge/Protection (3 sens) -> NUL');
  console.log('  Domination (1 sens) -> NUL');

  console.log('\n[KHYR] 14 sens -> 5 concepts');
  console.log('  Supériorité (2 sens) -> RETENU : "Élatif + génitif = superlatif, le meilleur de"');
  console.log('  Bien/Excellence (3 sens) -> PROBABLE : "Sens général, pas comparatif"');
  console.log('  Bien/Bonté (4 sens) -> PEU PROBABLE : "Qualité générale, pas comparative"');
  console.log('  Choix/Préférence (3 sens) -> NUL');
  console.log('  Générosité/Noblesse (2 sens) -> NUL');
}

run().catch(console.error);
