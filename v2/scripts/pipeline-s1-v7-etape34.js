// Pipeline V2 — Sourate 1 Verset 7 — ÉTAPES 3+4
// صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ
const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
const VERSE_ID = 7

async function run() {
  console.log('============================================')
  console.log('  VERSET 1:7 — ÉTAPES 3+4')
  console.log('============================================')

  // ── srt (262) — sirata — nom en idafa ──
  console.log('\n>>> srt (sirata, nom en idafa avec alladhina)')
  await db.from('verse_word_analyses').insert({
    verse_id: VERSE_ID, word_key: 'srt', position: 1, sense_chosen: 'chemin',
    analysis_axes: {
      sense_chosen: 'chemin', concept_chosen: 'Chemin/Voie',
      concepts: {
        'Chemin/Voie': {
          status: 'retenu',
          senses: ['chemin', 'route', 'voie large'],
          proof_ctx: "Le sens retenu est \"Chemin/Voie\". Le mot sirata est en idafa avec alladhina (ceux qui). \"Chemin de ceux qui\" décrit un parcours emprunté par des personnes. Le chemin est une réalité extérieure, directionnelle et permanente — on l'emprunte, on le suit ou on le quitte. D'après les sources étymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), sirat désigne une voie large et dégagée. Le verset 6 demande \"guide-nous sur le droit chemin\", le verset 7 précise QUEL chemin : celui de ceux qui ont reçu les bienfaits. Distinction avec \"Divers\" (épée longue, pont de l'enfer) : ce sont des sens physiques spécifiques sans rapport avec le parcours de vie décrit dans le verset.",
          axe1_verset: "Le verset distingue trois groupes humains selon leur parcours. Le mot sirata prolonge directement le verset 6 qui demande la guidance sur le droit chemin. Le champ lexical tourne autour de la direction, des voies à suivre et des groupes qui les empruntent. Le chemin est le mot central du verset — il structure l'opposition entre les bienfaités, ceux qui ont subi la désapprobation et les égarés. Chaque groupe est défini par sa relation au chemin.",
          axe2_voisins: "Le verset 6 dit ihdina s-sirata l-mustaqim (guide-nous sur le droit chemin). Le verset 7 reprend le même mot sirat pour préciser de quel chemin il s'agit. La continuité entre les deux versets est directe : le verset 6 est la demande, le verset 7 est la précision. Le chemin demandé est celui des gens qui ont reçu les bienfaits, pas n'importe quel chemin.",
          axe3_sourate: "La Fatiha est la sourate d'ouverture du Coran. Elle pose les fondements de la relation entre l'humain et Dieu. Le chemin droit est le thème central des versets 6-7, le point d'aboutissement de toute la sourate. Tout converge vers cette demande de direction : la louange (v2), la miséricorde (v1,3), la maîtrise (v4), l'adoration et la demande d'aide (v5).",
          axe4_coherence: "Le Coran utilise le mot sirat des dizaines de fois, toujours dans le sens de voie ou chemin de guidance. L'expression as-sirat al-mustaqim (le chemin droit) est récurrente dans tout le Coran. Aucun verset ne contredit cette lecture. Le mot est systématiquement associé à la direction morale.",
          axe5_frequence: "Le chemin est la direction que l'être humain suit pour accomplir sa mission de justice et de civilisation. Sans chemin, pas de direction, pas de mission possible. Le verset montre que certains le suivent et d'autres non, ce qui implique le libre choix."
        },
        'Divers': {
          status: 'nul',
          senses: ['épée longue', 'pont de l\'enfer'],
          proof_ctx: "Sens physiques spécifiques (épée, pont) sans rapport avec le parcours de vie décrit dans le verset."
        }
      }
    }
  })
  console.log('  srt → Chemin/Voie → "chemin" ✓')

  // ── nem (264) — an'amta — verbe accompli forme IV ──
  console.log('\n>>> nem (an\'amta, verbe accompli forme IV)')
  await db.from('verse_word_analyses').insert({
    verse_id: VERSE_ID, word_key: 'nem', position: 3, sense_chosen: 'bienfait',
    analysis_axes: {
      sense_chosen: 'bienfait', concept_chosen: 'Bienfait/Faveur',
      concepts: {
        'Bienfait/Faveur': {
          status: 'retenu',
          senses: ['bienfait', 'faveur', 'bénédiction', 'richesse', 'propriété', 'accorder un bienfait'],
          proof_ctx: "Le sens retenu est \"Bienfait/Faveur\". Le mot an'amta est un verbe accompli forme IV (une forme qui ajoute l'idée de faire en sorte que l'autre reçoive). Le bienfait est un acte extérieur dirigé vers l'autre — celui qui accorde fait sortir quelque chose de lui vers celui qui reçoit. D'après les sources étymologiques, la racine n-'-m a pour sens physique premier la douceur. Le bienfait est ce qui adoucit la vie de celui qui le reçoit. Distinction avec \"Douceur/Aisance\" : la douceur est un état intérieur (comment on se sent), le bienfait est un acte extérieur (ce qu'on accorde à l'autre). La forme IV (an'ama) insiste sur l'acte d'accorder, pas sur l'état de douceur.",
          axe1_verset: "Le verset dit an'amta alayhim (Tu as accordé [Tes bienfaits] sur eux). Le mot est un verbe à la forme IV accompli avec le sujet \"Tu\" (Dieu). Le champ lexical est celui de l'attribution : Dieu accorde, des gens reçoivent. Le bienfait est l'objet de cette attribution — ce qui est accordé. Le verset oppose ce groupe (les bienfaités) à deux autres groupes négatifs.",
          axe2_voisins: "Le verset 6 demande la guidance sur le chemin droit. Le verset 7 précise : le chemin de ceux qui ont reçu les bienfaits. La guidance demandée au verset 6 est elle-même un bienfait. Les versets 1-4 décrivent les qualités de Dieu (miséricorde, seigneurie, maîtrise). Le bienfait est la manifestation concrète de ces qualités.",
          axe3_sourate: "La Fatiha va de la description de Dieu (v1-4) à l'engagement de l'humain (v5) à la demande de guidance (v6-7). Le bienfait est le résultat de la relation : Dieu est miséricordieux et seigneur, donc Il accorde des bienfaits. Le bienfait est la conséquence logique des attributs décrits dans les versets précédents.",
          axe4_coherence: "Le Coran utilise la racine n-'-m dans de nombreux passages pour décrire les bienfaits de Dieu. Le mot ni'ma (bienfait) est l'un des mots les plus fréquents du Coran. L'usage est constant : il désigne toujours ce que Dieu accorde à ses créatures.",
          axe5_frequence: "Le bienfait est ce que l'être humain reçoit pour accomplir sa mission. La guidance sur le chemin droit est elle-même un bienfait. Sans les bienfaits de Dieu (guidance, subsistance, savoir), la mission de justice et de civilisation serait impossible."
        },
        'Douceur/Aisance': {
          status: 'probable',
          senses: ['douceur', 'tendresse', 'aisance de vie', 'confort', 'délicatesse', 'fraîcheur', 'souplesse'],
          proof_ctx: "La douceur est un état intérieur de bien-être. Le bienfait est un acte extérieur d'attribution. Le verset utilise un verbe à la forme IV accompli (an'amta = Tu as accordé), ce qui décrit un acte achevé dirigé vers les autres. La forme IV insiste sur la causation : faire en sorte que l'autre reçoive. La douceur est le résultat ressenti par celui qui reçoit, le bienfait est l'acte de celui qui accorde. Le verset parle de l'acte de Dieu (accorder), pas du ressenti de ceux qui reçoivent.",
          axe1_verset: "Le verset dit an'amta (Tu as accordé) — c'est un verbe d'action, pas un adjectif de qualité. Le champ lexical est celui de l'attribution active, pas du confort passif. La douceur serait un état, le verset décrit un acte.",
          axe2_voisins: "Les versets voisins décrivent des actes de Dieu (miséricorde, guidance) et des actes de l'humain (adoration, demande). La douceur serait un état qui détonne dans cette série d'actes.",
          axe3_sourate: "La Fatiha est structurée autour d'actes (louer, régner, adorer, guider, accorder). La douceur est un état, pas un acte. Le registre est actif, pas contemplatif.",
          axe4_coherence: "Le Coran utilise an'ama à la forme IV pour l'acte d'accorder un bienfait. La douceur est décrite avec d'autres mots (na'im, na'ma).",
          axe5_frequence: "La douceur est un confort personnel. Le verset parle de ce que Dieu accorde pour la mission, pas du confort ressenti."
        },
        'Bétail/Animaux': {
          status: 'nul',
          senses: ['bétail', 'chameaux', 'vaches', 'moutons', 'autruche', 'étoiles'],
          proof_ctx: "Sens physiques (animaux d'élevage, astres) sans rapport avec la guidance et les bienfaits du verset."
        },
        'Affirmation': {
          status: 'nul',
          senses: ['oui', 'certes'],
          proof_ctx: "Particule d'affirmation. Le mot dans le verset est un verbe accompli forme IV, pas une particule."
        },
        'Divers': {
          status: 'nul',
          senses: ['excellent', 'superlatif', 'ostrich-related terms'],
          proof_ctx: "Sens isolés sans rapport avec le verset."
        }
      }
    }
  })
  console.log('  nem → Bienfait/Faveur → "bienfait" ✓')

  // ── ely (265) — alayhim — préposition ──
  console.log('\n>>> ely (alayhim, préposition)')
  const elyAxes = {
    sense_chosen: 'sur', concept_chosen: 'Sur/Au-dessus (préposition)',
    concepts: {
      'Sur/Au-dessus (préposition)': {
        status: 'retenu',
        senses: ['sur', 'au-dessus de', 'vers', 'pour', 'contre', 'en raison de', 'malgré', 'selon', 'à la charge de'],
        proof_ctx: "Le sens retenu est \"Sur/Au-dessus (préposition)\". Le mot alayhim est la préposition ala avec le pronom suffixe him (eux). Le Lane's donne de nombreux usages de cette préposition : sur, vers, pour, contre, malgré, selon. Dans le verset, alayhim suit an'amta (Tu as accordé) : \"Tu as accordé sur eux\" = \"Tu leur as accordé\". La préposition ala marque ici la direction du bienfait — de Dieu vers eux.",
        axe1_verset: "Le mot alayhim apparaît deux fois dans le verset : après an'amta (les bienfaités) et après al-maghdhubi (ceux qui ont subi la désapprobation). Dans les deux cas, la préposition marque la direction de l'acte — le bienfait tombe SUR eux, la désapprobation tombe SUR eux. Le champ lexical est directionnel.",
        axe2_voisins: "La préposition ala est un outil grammatical qui lie les mots du verset. Elle n'a pas de contenu sémantique propre au-delà de la direction. Les versets voisins ne changent pas son sens.",
        axe3_sourate: "La préposition est un outil structurel, pas un thème. Elle ne s'inscrit pas dans un thème mais dans la construction grammaticale.",
        axe4_coherence: "Le Coran utilise ala dans tous les sens listés par le Lane's. L'usage est constant et varie selon le contexte grammatical.",
        axe5_frequence: "La préposition est un outil grammatical neutre. Elle ne contribue pas directement à la mission mais structure la phrase."
      },
      'Hauteur/Domination': {
        status: 'nul',
        senses: ['être haut', 'dominer', 'surpasser', 'monter', 'éminent', 'noble', 'hautain'],
        proof_ctx: "Sens liés à la hauteur et à la domination. Le mot dans le verset est une préposition (ala + pronom), pas un verbe ou un nom."
      },
      'Lieu élevé': {
        status: 'nul',
        senses: ['sommet', 'étage supérieur', 'enclume', 'chamelle robuste', 'hyène', 'lion'],
        proof_ctx: "Sens physiques de lieux et objets élevés. Le mot est une préposition, pas un nom de lieu."
      },
      'Divers': {
        status: 'nul',
        senses: ['superscription', 'meubles', 'nourriture sucrée', 'flèche du jeu', 'lettres emphatiques'],
        proof_ctx: "Sens isolés sans rapport avec la préposition dans le verset."
      }
    }
  }
  await db.from('verse_word_analyses').insert({verse_id: VERSE_ID, word_key: 'ely', position: 4, sense_chosen: 'sur', analysis_axes: elyAxes})
  console.log('  ely (pos=4) → Sur/Au-dessus → "sur" ✓')
  await db.from('verse_word_analyses').insert({verse_id: VERSE_ID, word_key: 'ely', position: 7, sense_chosen: 'sur', analysis_axes: elyAxes})
  console.log('  ely (pos=7) → Sur/Au-dessus → "sur" ✓')

  // ── ghyr (266) — ghayri — nom en idafa ──
  console.log('\n>>> ghyr (ghayri, nom en idafa)')
  await db.from('verse_word_analyses').insert({
    verse_id: VERSE_ID, word_key: 'ghyr', position: 5, sense_chosen: 'sauf',
    analysis_axes: {
      sense_chosen: 'sauf', concept_chosen: 'Autre/Exclusion',
      concepts: {
        'Autre/Exclusion': {
          status: 'retenu',
          senses: ['autre', 'sauf', 'excepté', 'sans', 'pas', 'n\'est pas'],
          proof_ctx: "Le sens retenu est \"Autre/Exclusion\". Le mot ghayri est en position nominale dans le verset et fonctionne comme outil d'exclusion. Il sépare activement le deuxième groupe (les maghdhub) du premier (les bienfaités). D'après les sources étymologiques, ghayri dans ce contexte signifie \"autre que\" ou \"sauf\". L'exclusion est un acte actif et permanent — elle trace une frontière entre deux catégories. Distinction avec \"Changement/Altération\" : le changement est un processus dans le temps (quelque chose se transforme), l'exclusion est une catégorisation instantanée (quelque chose est séparé). Le verset catégorise, il ne raconte pas un changement. Distinction avec \"Jalousie/Protection\" : la jalousie est un état intérieur émotionnel, l'exclusion est un acte de séparation objectif.",
          axe1_verset: "Le verset oppose trois groupes : les bienfaités, les maghdhub et les égarés. Le mot ghayri est le pivot qui sépare le premier groupe des deux autres. Le champ lexical est celui de la catégorisation : on trace des frontières entre des groupes humains selon leur relation au chemin. Ghayri est l'outil de cette séparation.",
          axe2_voisins: "Le verset 6 demande le chemin droit. Le verset 7 précise : le chemin de ceux qui ont reçu les bienfaits, SAUF ceux qui ont subi la désapprobation et ceux qui s'égarent. La séparation est la réponse à la demande de précision : quel chemin exactement ? Pas n'importe lequel — celui-ci, sauf celui-là.",
          axe3_sourate: "La Fatiha se termine par une distinction entre les chemins. Cette distinction est le point d'aboutissement de toute la sourate. Après avoir identifié Dieu, loué, adoré et demandé, on précise la direction. Ghayri est l'outil de cette précision finale.",
          axe4_coherence: "Le Coran utilise ghayri dans de nombreux contextes d'exclusion. L'usage est constant : ghayri sépare une catégorie d'une autre. Le verset coranique cité par le Lane's est exactement ce verset (1:7).",
          axe5_frequence: "L'exclusion est un acte de discernement : savoir ce qu'il faut suivre ET ce qu'il faut éviter. Pour la mission de justice, le discernement entre le bon chemin et les mauvais est fondamental."
        },
        'Changement/Altération': {
          status: 'nul',
          senses: ['changer', 'altérer', 'échanger', 'être altéré', 'arracher les cheveux blancs'],
          proof_ctx: "Le changement est un processus dans le temps. Le verset catégorise des groupes, il ne raconte pas un changement d'état."
        },
        'Jalousie/Protection': {
          status: 'nul',
          senses: ['jalousie', 'très jaloux', 'plus jaloux que'],
          proof_ctx: "La jalousie est un état émotionnel intérieur. Le mot dans le verset est un outil de séparation grammaticale, pas un état émotionnel."
        },
        'Provision/Subsistance': {
          status: 'nul',
          senses: ['provision de blé', 'procurer des provisions', 'prix du sang'],
          proof_ctx: "Sens matériels sans rapport avec la fonction de séparation du mot dans le verset."
        },
        'Divers': {
          status: 'nul',
          senses: ['terre arrosée', 'mensonge', 'insigne des non-musulmans', 'langage propre'],
          proof_ctx: "Sens isolés sans rapport avec le verset."
        }
      }
    }
  })
  console.log('  ghyr → Autre/Exclusion → "sauf" ✓')

  // ── ghdb (267) — al-maghdhubi — participe passif défini ──
  console.log('\n>>> ghdb (al-maghdhubi, participe passif défini)')
  await db.from('verse_word_analyses').insert({
    verse_id: VERSE_ID, word_key: 'ghdb', position: 6, sense_chosen: 'désapprobation',
    analysis_axes: {
      sense_chosen: 'désapprobation', concept_chosen: 'Contraire de al-rida',
      concepts: {
        'Contraire de al-rida': {
          status: 'retenu',
          senses: ['colère', 'contraire de al-rida', 'excitation du sang', 'passion du mal', 'désir de vengeance', 'accès de colère', 'rendre en colère', 'se mettre mutuellement en colère', 'devenir en colère', 'rapidement en colère', 'faculté irascible', 'perturbé dans les relations'],
          proof_ctx: "Le sens retenu est \"Contraire de al-rida\". D'après les sources étymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), ghadhab est défini comme le contraire de al-rida. Le Lane's définit rida comme : satisfait, content, approuvé, aimé, consenti. Ce sens contient une dimension émotionnelle (excitation intérieure) et une dimension rationnelle (désapprobation de la conduite). Le mot al-maghdhubi est un participe passif (une forme qui dit que l'action est subie, pas faite). Le test de compatibilité philosophique : la réalité du sens sort-elle de celui qui l'émet et atteint-elle celui qui la reçoit ? La dimension émotionnelle (excitation du sang, colère) est un état intérieur qui reste chez celui qui le ressent — l'autre personne ne subit pas l'émotion elle-même. La dimension rationnelle (désapprobation de la conduite) est un jugement dirigé vers l'extérieur qui sort de celui qui juge et atteint celui qui est jugé. Le participe passif impose que la réalité soit dirigée vers l'extérieur. Seule la dimension rationnelle est compatible. Le Lane's confirme : pour le ghadhab divin, il écrit que c'est le fait de désapprouver la conduite de celui qui désobéit. Distinction avec \"Rupture/Séparation\" : la rupture met fin à la relation, le contraire de al-rida maintient la relation avec un jugement négatif. Le verset catégorise des groupes dans une relation existante, pas des groupes dont la relation est coupée.",
          axe1_verset: "Le verset oppose les bienfaités aux maghdhub et aux égarés. Le bienfait (an'amta) est un acte dirigé vers l'extérieur : Dieu accorde. Son contraire structurel devrait aussi être un acte dirigé vers l'extérieur. La désapprobation est un jugement extérieur. L'opposition bienfait/désapprobation est structurellement cohérente. Le mot al-maghdhubi est le pivot entre le groupe positif et le groupe négatif.",
          axe2_voisins: "Les versets 1 et 3 qualifient Dieu de miséricordieux. Le verset 7 introduit la désapprobation. La miséricorde est un acte positif de Dieu vers les humains, la désapprobation est un acte négatif. Les deux sont des actes relationnels, pas des émotions intérieures. La sourate reste dans un registre relationnel du début à la fin.",
          axe3_sourate: "La Fatiha pose des fondements relationnels. La désapprobation s'inscrit dans ce registre : c'est un acte entre deux parties. La sourate ne parle pas d'émotions intérieures mais de relations entre Dieu et les humains.",
          axe4_coherence: "Le Lane's écrit pour le ghadhab divin : c'est le fait de désapprouver la conduite de celui qui désobéit. Le Lane's distingue le ghadhab humain (excitation du sang) du ghadhab divin (désapprobation). Le Coran utilise le mot ghadhab dans plusieurs passages.",
          axe5_frequence: "La désapprobation est un jugement rationnel sur les actes, pas sur les personnes. Pour l'être humain dans sa mission de justice, c'est un avertissement : certains chemins ne sont pas conformes. Le jugement porte sur la conduite, pas sur l'être."
        },
        'Dureté/Matériau': {
          status: 'nul',
          senses: ['pierre dure', 'roche ronde', 'cuir épais', 'bouclier', 'vêtement de combat', 'peaux diverses', 'rougeur intense', 'épaisseur', 'lion', 'taureau'],
          proof_ctx: "Sens physiques (minéral, cuir, animaux, couleurs) sans rapport avec la catégorisation de groupes humains dans le verset."
        },
        'Rupture/Séparation': {
          status: 'peu_probable',
          senses: ['rompre avec quelqu\'un par colère'],
          proof_ctx: "La rupture est un acte ponctuel qui met fin à la relation. Le participe passif dans le verset décrit un état permanent dans une relation existante, pas la fin d'une relation. Le verset catégorise des groupes DANS une relation (ils sont dans le groupe des non-bienfaités), pas des groupes HORS de toute relation. La frontière philosophique avec le sens retenu : la rupture ferme la porte (c'est terminé), la désapprobation la laisse ouverte (le jugement existe mais la relation continue).",
          axe1_verset: "Le verset catégorise trois groupes dans une relation avec le chemin : les bienfaités, les maghdhub et les égarés. La rupture mettrait fin à toute relation. Si les maghdhub avaient subi une rupture, ils ne seraient plus dans aucune catégorie — mais le verset les classe. La désapprobation maintient la relation avec un jugement négatif.",
          axe2_voisins: "Les versets voisins posent un cadre de relations continues (miséricorde, seigneurie, guidance). La rupture couperait cette continuité. La sourate maintient un cadre relationnel permanent.",
          axe3_sourate: "La Fatiha est une prière, un dialogue entre l'humain et Dieu. La rupture mettrait fin au dialogue. La désapprobation permet au dialogue de continuer.",
          axe4_coherence: "Le Lane's donne ce sens de rupture pour la forme III (ghaadhaba), pas pour la forme I (ghadhiba). Le verset utilise le participe passif de la forme I.",
          axe5_frequence: "La rupture est définitive. Un avertissement (désapprobation) est plus cohérent avec une mission qui permet la correction."
        },
        'Maladie/Corps': {
          status: 'nul',
          senses: ['éminence', 'protubérance', 'motes dans l\'oeil', 'éruption cutanée', 'variole', 'partie anatomique'],
          proof_ctx: "Sens médicaux et anatomiques sans rapport avec la catégorisation morale du verset."
        },
        'Divers': {
          status: 'nul',
          senses: ['cent chameaux', 'serpent malveillant', 'mordre le mors', 'marmite qui bout', 'austère du regard', 'groupe de femmes'],
          proof_ctx: "Sens isolés (animaux, métaphores, apparence) sans rapport avec le verset."
        }
      }
    }
  })
  console.log('  ghdb → Contraire de al-rida → "désapprobation" ✓')

  // ── dll (268) — ad-dalliina — participe actif pluriel défini ──
  console.log('\n>>> dll (ad-dalliina, participe actif pluriel défini)')
  await db.from('verse_word_analyses').insert({
    verse_id: VERSE_ID, word_key: 'dll', position: 9, sense_chosen: 'égarement',
    analysis_axes: {
      sense_chosen: 'égarement', concept_chosen: 'Égarement/Déviation',
      concepts: {
        'Égarement/Déviation': {
          status: 'retenu',
          senses: ['s\'égarer', 'dévier du droit chemin', 'manquer le chemin', 'faire égarer', 'feindre l\'égarement', 'être confus', 'guide habile', 'cause d\'égarement', 'celui qui s\'égare souvent', 'égaré'],
          proof_ctx: "Le sens retenu est \"Égarement/Déviation\". Le mot ad-dalliina est un participe actif pluriel défini (une forme qui dit que l'action est faite activement et en continu par les personnes elles-mêmes). L'égarement est un mouvement actif de quitter le bon chemin. D'après les sources étymologiques, la racine d-l-l a pour sens premier \"perdre son chemin, dévier de la bonne direction\". Le participe actif impose que ce soit une action FAITE par les personnes, pas un état subi. L'égarement est actif : on quitte le chemin qu'on connaissait. Le verset mentionne explicitement le sirat (chemin) au verset 6, ce qui confirme que les dalliina sont ceux qui ont quitté ce chemin. Distinction avec \"Disparition/Perte\" : la disparition est un état physique (un objet perdu, une personne introuvable), l'égarement est un mouvement moral (quitter un chemin connu). Le participe actif indique un mouvement, pas un état. Distinction avec \"Oubli/Enterrement\" : l'oubli est un processus intérieur de la mémoire, l'égarement est un mouvement extérieur sur un chemin.",
          axe1_verset: "Le verset oppose les bienfaités aux maghdhub et aux dalliina. Les dalliina sont le troisième groupe — ceux qui ont activement quitté le chemin. Le mot ad-dalliina est en fin de verset et clôture l'opposition. Le champ lexical est celui du mouvement par rapport au chemin : suivre (bienfaités), subir un jugement (maghdhub), quitter (égarés).",
          axe2_voisins: "Le verset 6 mentionne le sirat al-mustaqim (le chemin droit). Le verset 7 précise qui NE suit PAS ce chemin : les maghdhub et les dalliina. La mention du chemin au verset 6 donne au mot dalliina son sens précis : ils ont quitté LE chemin, pas n'importe quel chemin.",
          axe3_sourate: "La Fatiha se termine par cette opposition entre ceux qui suivent le chemin et ceux qui l'ont quitté. L'égarement est le contraire de la guidance demandée au verset 6. Si le verset 6 demande \"guide-nous\", le verset 7 montre ce qui arrive quand on n'est pas guidé : l'égarement.",
          axe4_coherence: "Le Coran utilise la racine d-l-l des dizaines de fois pour l'égarement moral et spirituel. Le mot dalal (égarement) est le contraire de huda (guidance) dans le Coran. L'opposition guidance/égarement est l'un des thèmes les plus récurrents du texte.",
          axe5_frequence: "L'égarement est le risque que court l'être humain qui quitte le chemin de justice. Le verset montre que l'égarement est actif — on FAIT le choix de quitter le chemin. C'est un avertissement : la mission de justice nécessite de rester sur le chemin."
        },
        'Disparition/Perte': {
          status: 'probable',
          senses: ['disparaître', 'périr', 'être perdu', 'se perdre', 'faire périr', 'enterrer', 'cacher'],
          proof_ctx: "La disparition est un état physique — quelque chose n'est plus là. L'égarement est un mouvement — quelqu'un quitte un chemin. Le verset mentionne le sirat (chemin), ce qui implique un mouvement de déviation, pas une disparition. Le participe actif (dalliina) indique une action en cours : les personnes sont en train de s'égarer, pas en train de disparaître. La frontière philosophique : disparaître est passif (on n'est plus là), s'égarer est actif (on marche dans la mauvaise direction).",
          axe1_verset: "Le verset catégorise des groupes vivants dans des relations avec le chemin. La disparition enlèverait ces groupes de toute catégorie — on ne peut pas catégoriser quelqu'un qui a disparu. L'égarement les maintient dans le cadre du verset.",
          axe2_voisins: "Les versets voisins posent un cadre de relations vivantes. La disparition serait une fin, pas une relation. L'égarement est un mouvement qui maintient la relation avec le chemin (en négatif).",
          axe3_sourate: "La Fatiha est une prière adressée à des êtres vivants en relation avec Dieu. La disparition n'a pas sa place dans ce registre vivant.",
          axe4_coherence: "Le Coran distingue dall (s'égarer) de halaka (périr). Quand le Coran parle de disparition, il utilise d'autres mots.",
          axe5_frequence: "La disparition est un état final sans retour. L'égarement est un état dont on peut revenir — la guidance peut corriger l'égarement."
        },
        'Oubli/Enterrement': {
          status: 'peu_probable',
          senses: ['oublier', 'perdre le souvenir', 'enterrer', 'cacher un mort'],
          proof_ctx: "L'oubli est un processus intérieur de la mémoire — quelque chose s'efface dans l'esprit. L'égarement est un mouvement extérieur — quelqu'un quitte un chemin. Le participe actif dalliina indique un mouvement extérieur, pas un processus intérieur. La frontière philosophique : oublier est passif et intérieur (la mémoire efface), s'égarer est actif et extérieur (on quitte un chemin).",
          axe1_verset: "Le verset parle d'un chemin extérieur qu'on quitte, pas d'une information intérieure qu'on oublie. Le champ lexical est spatial (chemin, guidance, direction), pas mental (mémoire, souvenir).",
          axe2_voisins: "Les versets voisins parlent de direction et de chemin. L'oubli serait hors du registre spatial de la sourate.",
          axe3_sourate: "La Fatiha traite de direction et de guidance, pas de mémoire et d'oubli.",
          axe4_coherence: "Le Coran utilise nasiya pour l'oubli, pas dalla. Les deux racines ont des champs sémantiques distincts.",
          axe5_frequence: "L'oubli est involontaire. L'égarement, tel que décrit par le participe actif, implique un mouvement actif."
        },
        'Divers': {
          status: 'nul',
          senses: ['terre rugueuse', 'pierres', 'restes d\'eau', 'guide habile', 'fils illégitime', 'sang non vengé'],
          proof_ctx: "Sens isolés (géographie, parenté, droit) sans rapport avec la catégorisation morale du verset."
        }
      }
    }
  })
  console.log('  dll → Égarement/Déviation → "égarement" ✓')

  // ═══════════════════════════════════════
  // ÉTAPE 4 — TRADUCTION
  // ═══════════════════════════════════════
  console.log('\n>>> ÉTAPE 4 — TRADUCTION')

  const segments = [
    {fr:'le chemin', pos:'nom', phon:'sirata', arabic:'صِرَٰطَ', word_key:'srt', is_particle:false, sense_retenu:'chemin', position:1},
    {fr:'de ceux qui', phon:'alladhina', arabic:'ٱلَّذِينَ', word_key:null, is_particle:true, position:2},
    {fr:'Tu as accordé Tes bienfaits', pos:'verbe', phon:"an'amta", arabic:'أَنْعَمْتَ', word_key:'nem', is_particle:false, sense_retenu:'bienfait', position:3},
    {fr:'sur eux', phon:'alayhim', arabic:'عَلَيْهِمْ', word_key:'ely', is_particle:false, sense_retenu:'sur', position:4},
    {fr:'non pas', phon:'ghayri', arabic:'غَيْرِ', word_key:'ghyr', is_particle:false, sense_retenu:'sauf', position:5},
    {fr:'ceux qui ont subi la désapprobation', pos:'nom', phon:'al-maghdhubi', arabic:'ٱلْمَغْضُوبِ', word_key:'ghdb', is_particle:false, sense_retenu:'désapprobation', position:6},
    {fr:'sur eux', phon:'alayhim', arabic:'عَلَيْهِمْ', word_key:'ely', is_particle:false, sense_retenu:'sur', position:7},
    {fr:'et ne pas', phon:'wa-la', arabic:'وَلَا', word_key:null, is_particle:true, position:8},
    {fr:"ceux qui s'égarent", pos:'nom', phon:'ad-dallina', arabic:'ٱلضَّآلِّينَ', word_key:'dll', is_particle:false, sense_retenu:'égarement', position:9},
  ]

  const explanation = [
    '§DEMARCHE§',
    'Le mot **sirata** (chemin) est rattaché à **alladhina** (ceux qui) par une idafa (c\'est quand deux mots sont liés pour dire que le premier appartient au second). Le chemin des bienfaités.',
    "Le mot **an'amta** est un verbe accompli forme IV (une forme qui ajoute l'idée de \"accorder, faire en sorte que\"). **Tu as accordé** : l'acte est achevé et le bienfait a été donné.",
    'Le mot **ghayri** exclut le deuxième groupe du premier : non pas ceux-là.',
    "**Al-maghdhubi** est un participe passif (une forme du mot qui dit que l'action est subie, pas faite). D'après les sources étymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), ghadhab est défini comme le contraire de al-rida. Le participe passif impose que le sens soit dirigé vers l'extérieur pour pouvoir être subi. Le texte ne précise pas de qui vient cette désapprobation.",
    "**Ad-dalliina** est un participe actif pluriel (une forme qui dit que l'action est faite par les personnes elles-mêmes, pas subie). Les égarés sont ceux qui ont activement quitté le chemin droit demandé au verset 6.",
    '§JUSTIFICATION§',
    '**chemin** — Le sens retenu est "Chemin/Voie". Le mot "chemin" est choisi car il décrit un parcours qu\'on emprunte et qu\'on peut suivre ou quitter. L\'alternative "route" est écartée car elle est plus large et moins personnelle — on suit un chemin, on emprunte une route. L\'alternative "voie" est écartée car elle est plus abstraite — la voie peut être métaphorique, le chemin est concret et quotidien.',
    '**bienfait** — Le sens retenu est "Bienfait/Faveur". Le mot "bienfait" est choisi car il capture l\'acte extérieur d\'accorder quelque chose de bon. L\'alternative "faveur" est écartée car elle implique un traitement préférentiel (on favorise quelqu\'un par rapport à d\'autres), alors que le bienfait est simplement ce qui est bon. L\'alternative "grâce" est écartée car c\'est du vocabulaire religieux chrétien.',
    '**sauf** — Le sens retenu est "Autre/Exclusion". Le mot "sauf" est choisi car il exclut activement. L\'alternative "autre que" est écartée car elle constate passivement une différence, alors que "sauf" trace une frontière active.',
    "**désapprobation** — Le sens retenu est \"Contraire de al-rida\". Le mot \"désapprobation\" est choisi car c'est un jugement rationnel dirigé vers l'extérieur — il sort de celui qui juge et atteint celui qui est jugé. La dimension émotionnelle du sens (la colère, l'excitation intérieure) reste chez celui qui la ressent et ne peut pas être subie par l'autre. L'alternative \"rejet\" est écartée car le rejet met fin à la relation, alors que la désapprobation maintient la relation avec un jugement négatif.",
    "**égarement** — Le sens retenu est \"Égarement/Déviation\". Le mot \"égarement\" est choisi car il capture l'idée qu'il y avait un chemin connu et qu'on l'a quitté. L'alternative \"errance\" est écartée car l'errance implique qu'il n'y a jamais eu de chemin — on vagabonde dans le vide. L'alternative \"perdition\" est écartée car c'est du registre littéraire, pas du français courant.",
  ].join('\n\n')

  const {error: e5} = await db.from('verse_analyses').update({
    translation_arab: "Le chemin de ceux à qui Tu as accordé Tes bienfaits, non pas ceux qui ont subi la désapprobation, ni ceux qui s'égarent.",
    translation_explanation: explanation,
    segments: segments,
  }).eq('verse_id', VERSE_ID)
  console.log('  Traduction insérée' + (e5 ? ' ERREUR: '+e5.message : ' ✓'))

  // Phrases du quotidien
  const daily = [
    {analysis_id:262, sense:'chemin', arabic:'ٱهْدِنَا ٱلصِّرَاطَ', phon:'ihdina s-sirata', french:'Guide-nous sur le chemin'},
    {analysis_id:262, sense:'chemin', arabic:'صِرَاطُ ٱللَّهِ', phon:'siratu llahi', french:'Le chemin de Dieu'},
    {analysis_id:262, sense:'chemin', arabic:'ٱلصِّرَاطَ ٱلْمُسْتَقِيمَ', phon:'as-sirata l-mustaqim', french:'Le chemin droit'},
    {analysis_id:264, sense:'bienfait', arabic:'أَنْعَمَ ٱللَّهُ عَلَيْهِ', phon:"an'ama llahu alayhi", french:'Dieu lui a accordé Ses bienfaits'},
    {analysis_id:264, sense:'bienfait', arabic:'نِعْمَةُ ٱللَّهِ', phon:"ni'matu llahi", french:'Le bienfait de Dieu'},
    {analysis_id:264, sense:'bienfait', arabic:'مَا أَنْعَمَكَ', phon:"ma an'amaka", french:'Que tu es généreux'},
    {analysis_id:267, sense:'désapprobation', arabic:'غَضِبَ عَلَيْهِ', phon:'ghadhiba alayhi', french:"Il l'a désapprouvé"},
    {analysis_id:267, sense:'désapprobation', arabic:'لَا تَغْضَبْ', phon:'la taghdhab', french:'Ne te mets pas en colère'},
    {analysis_id:267, sense:'désapprobation', arabic:'ٱلْمَغْضُوبِ عَلَيْهِمْ', phon:'al-maghdhubi alayhim', french:'Ceux qui ont subi la désapprobation'},
    {analysis_id:268, sense:'égarement', arabic:'ضَلَّ عَنِ ٱلطَّرِيقِ', phon:"dalla 'ani t-tariqi", french:"Il s'est égaré du chemin"},
    {analysis_id:268, sense:'égarement', arabic:'لَا تَضِلُّوا', phon:'la tadillu', french:'Ne vous égarez pas'},
    {analysis_id:268, sense:'égarement', arabic:'مَنْ يَهْدِ ٱللَّهُ فَلَا مُضِلَّ لَهُ', phon:'man yahdi llahu fala mudilla lahu', french:'Celui que Dieu guide, personne ne peut l\'égarer'},
  ]
  const {error: e6} = await db.from('word_daily').insert(daily)
  console.log('  ' + daily.length + ' phrases du quotidien' + (e6 ? ' ERREUR: '+e6.message : ' ✓'))

  console.log('\n============================================')
  console.log('VERSET 1:7 — TERMINÉ')
  console.log('  sirata (srt) → sens "Chemin/Voie" → mot français "chemin"')
  console.log("  an'amta (nem) → sens \"Bienfait/Faveur\" → mot français \"bienfait\"")
  console.log('  alayhim (ely) → sens "Sur/Au-dessus" → mot français "sur"')
  console.log('  ghayri (ghyr) → sens "Autre/Exclusion" → mot français "sauf"')
  console.log('  al-maghdhubi (ghdb) → sens "Contraire de al-rida" → mot français "désapprobation"')
  console.log("  ad-dalliina (dll) → sens \"Égarement/Déviation\" → mot français \"égarement\"")
  console.log("  Traduction : \"Le chemin de ceux à qui Tu as accordé Tes bienfaits, non pas ceux qui ont subi la désapprobation, ni ceux qui s'égarent.\"")
  console.log('============================================')
}

run().catch(e => { console.error('ERREUR FATALE:', e); process.exit(1) })
