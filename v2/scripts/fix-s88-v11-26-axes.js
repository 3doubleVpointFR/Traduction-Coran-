// Fix script: add missing 5-axis analyses for S88 v11-26 VWA entries
// These entries have concepts with status but NO axes (axe1 through axe5).
require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');
const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

// Each fix: { verse_id, word_key, concept_name, axes }
const fixes = [
  // ============================================================
  // 1. lghw (v11 = 5978) — Vanité/Futilité — retenu (single concept)
  // ============================================================
  {
    verse_id: 5978, word_key: 'lghw', concept: 'Vanite/Futilite',
    axes: {
      axe1_verset: "Le champ lexical du verset 11 est celui du silence et de la purete sonore — dans le jardin, aucune parole vaine n'est entendue. Le mot laghiya (parole vaine) est l'objet nie par la negation la tasma'u (tu n'entends pas). Le verset contraste avec les elements physiques presents dans le jardin : la source coulante du verset 12, les lits eleves du verset 13. Ici, ce n'est pas un objet concret qui est decrit mais une absence — l'absence de toute futilite verbale. Cette absence est significative car elle definit le jardin non seulement par ce qu'il contient mais aussi par ce qu'il exclut. La purete du lieu se manifeste dans le registre sonore autant que dans le registre materiel.",
      axe2_voisins: "Le verset 10 introduit le jardin eleve (janna 'aliya) comme cadre spatial. Le verset 11 en donne la premiere qualite : l'absence de parole vaine. Le verset 12 enchaine avec la presence d'une source coulante — on passe de l'absence du negatif a la presence du positif. Le jardin est donc decrit par un double mouvement : ce qui en est exclu (la futilite) et ce qui s'y trouve (la source, les lits, les gobelets). Cette alternance entre negation et affirmation est un procede rhetorique qui renforce l'image de perfection du lieu. Le verset 11 fonctionne comme une transition entre la presentation generale du jardin et l'enumeration de ses elements concrets.",
      axe3_sourate: "La sourate al-Ghashiya oppose deux destins : le chatiment des versets 2 a 7 (visages humilies, feu, source bouillante) et la recompense des versets 8 a 16 (visages radieux, jardin, source, lits). L'absence de parole vaine au verset 11 participe a la description de la recompense en soulignant la purete du lieu. Le contraste est frappant : les damnes boivent a une source bouillante (v5), les recompenses profitent d'une source coulante (v12) dans un lieu sans futilite (v11). La purete sonore du jardin est un element de la recompense au meme titre que les elements materiels. Ce verset renforce la symetrie structurelle de la sourate entre chatiment et recompense.",
      axe4_coherence: "Le Coran mentionne l'absence de parole vaine au paradis dans plusieurs passages. En 56:25, les habitants du paradis n'y entendent ni laghw ni ta'thim — ni futilite ni peche. En 52:23, il est dit la laghw fiha — pas de futilite en elle. En 78:35, la meme formule revient avec la laghw wa la kizzab — ni futilite ni mensonge. Cette coherence coranique montre que l'absence de parole vaine est une caracteristique constante et essentielle du paradis. Le mot laghw et ses derives apparaissent dans ces contextes comme marqueurs de la purete paradisiaque. La sourate 88 s'inscrit dans cette tradition coranique en confirmant que le jardin est un lieu ou seule la parole vraie est prononcee.",
      axe5_frequence: "La mission du khalifa inclut la construction d'une civilisation ou la parole a de la valeur et du poids. L'absence de futilite dans le jardin represente l'ideal vers lequel le khalifa doit tendre dans sa gestion de la communaute. La racine l-gh-w designe dans le Coran tout ce qui est vain et sans substance — le bavardage, la parole creuse, l'engagement sterile. En 23:3, les croyants sont ceux qui se detournent du laghw — cette qualite est mentionnee juste apres la priere, montrant son importance. En 25:72, les serviteurs du Misericordieux passent a cote du laghw avec dignite. Le khalifa doit comprendre que la purete du discours est une condition de la reussite de la mission — un lieu sans futilite est un lieu ou la verite peut circuler librement."
    }
  },

  // ============================================================
  // 2. jry (v12 = 5979) — Compétition — peu_probable
  // ============================================================
  {
    verse_id: 5979, word_key: 'jry', concept: 'Competition',
    axes: {
      axe1_verset: "Le verset 12 decrit une source coulante ('aynun jariya). Le mot jariya est un participe actif feminin de la racine j-r-y signifiant couler, s'ecouler. Le sens de competition (rivaliser, courir les uns contre les autres) ne correspond pas a la description d'une source d'eau. La source est un element passif et plaisant du decor paradisiaque, et rien dans le verset n'evoque une rivalite ou un affrontement. Le champ lexical est celui de l'eau et de l'abondance, pas de la confrontation. La competition impliquerait une tension qui est absente de ce contexte de repos et de satisfaction.",
      axe2_voisins: "Les versets voisins decrivent des elements du jardin paradisiaque : l'absence de parole vaine (v11), des lits eleves (v13), des gobelets poses (v14), des coussins alignes (v15), des tapis etales (v16). Tous ces elements sont passifs et agreables — ils composent un decor de confort et de repos. La competition, qui implique effort et confrontation, serait en rupture totale avec cette enumeration paisible. Les elements du jardin se completent dans une harmonie statique, pas dans une dynamique de rivalite. Le verset 12 s'insere dans cette liste d'elements concrets et materiels qui composent le jardin ideal.",
      axe3_sourate: "La section paradisiaque de la sourate al-Ghashiya (v8-16) ne contient aucun theme de competition ou de rivalite. Le ton est celui de la satisfaction et du repos apres l'effort (v9 : satisfait de son effort). La source coulante participe a ce tableau de recompense paisible. La competition serait en contradiction avec l'esprit de cette section qui celebre la paix et le contentement. La sourate oppose chatiment (effort sans repos) et recompense (repos apres effort) — la competition n'a sa place dans aucun des deux tableaux de cette facon.",
      axe4_coherence: "Le Coran utilise la racine j-r-y principalement pour decrire les rivieres qui coulent sous les jardins paradisiaques. En 2:25, tajri min tahtiha al-anhar — des rivieres coulent sous eux. En 3:15, la meme formule revient pour decrire les jardins promis. En 85:11, les jardins sous lesquels coulent les rivieres. L'usage coranique de j-r-y dans le contexte paradisiaque est systematiquement lie a l'ecoulement de l'eau, jamais a la competition entre les habitants. La coherence coranique confirme que jariya dans ce verset designe le flux de la source, pas une rivalite quelconque.",
      axe5_frequence: "La competition ne sert pas la mission du khalifa dans ce contexte paradisiaque. Le jardin est le lieu de la recompense finale ou l'effort est termine et la satisfaction est acquise. La competition presuppose un enjeu non resolu, un classement a etablir — or le paradis est le lieu ou les comptes sont deja regles. La racine j-r-y dans le Coran est massivement utilisee pour l'ecoulement des eaux, et ce sens est celui qui sert le tableau de la recompense. La competition serait une projection terrestre inappropriee dans un contexte ou la paix est l'etat permanent."
    }
  },

  // ============================================================
  // 3. srr (v13 = 5980) — Joie/Plaisir — peu_probable
  // ============================================================
  {
    verse_id: 5980, word_key: 'srr', concept: 'Joie/Plaisir',
    axes: {
      axe1_verset: "Le verset 13 mentionne sururun marfu'a — des lits eleves. Le mot surur est le pluriel de sarir qui designe un lit, une couche, un trone. Le sens de joie (surur avec damma initiale, signifiant plaisir) repose sur une vocalisation differente du meme squelette consonantique. Le verset decrit un objet physique concret — un meuble — accompagne de l'adjectif marfu'a (eleve, sureleve). La joie est un sentiment abstrait qui ne peut pas etre qualifie d'eleve au sens physique. Le champ lexical est celui du mobilier et de l'amenagement, pas des emotions.",
      axe2_voisins: "Le verset 13 est entoure d'elements physiques concrets : la source coulante du verset 12, les gobelets poses du verset 14, les coussins alignes du verset 15, les tapis etales du verset 16. Tous ces elements sont des objets materiels du decor paradisiaque. La joie serait le seul element abstrait dans cette enumeration d'objets concrets, ce qui briserait la coherence de la liste. Chaque element est accompagne d'un adjectif physique (coulante, eleves, poses, alignes, etales) qui decrit une disposition spatiale — la joie ne peut pas etre disposee de cette maniere.",
      axe3_sourate: "La sourate al-Ghashiya decrit le paradis a travers des objets tangibles et non des sentiments. La satisfaction est mentionnee au verset 9 (satisfait de son effort) mais comme un etat du visage, pas comme un objet dans le jardin. Les versets 12 a 16 forment une liste d'inventaire du jardin : source, lits, gobelets, coussins, tapis. Inserer un sentiment abstrait au milieu de cette liste romprait la logique descriptive de la sourate. La joie peut etre une consequence de la presence de ces objets, mais elle n'est pas l'un des objets enumeres.",
      axe4_coherence: "Le Coran utilise surur (pluriel de sarir, lits/couches) dans plusieurs descriptions du paradis. En 15:47, les habitants du paradis sont sur des surur (couches) face a face. En 37:44, ils sont sur des surur face a face egalement. En 56:15, ils sont sur des surur ornees d'or et de pierres. Dans tous ces passages, surur est un objet physique sur lequel les gens s'assoient ou s'allongent, jamais un sentiment. La coherence coranique est claire : surur dans le contexte paradisiaque designe systematiquement du mobilier.",
      axe5_frequence: "Les lits et les couches representent le confort et la civilisation — le khalifa amenage la terre et fournit a ses habitants les conditions du repos. La joie est un resultat, pas un moyen : on ne fournit pas de la joie comme on fournit des meubles. Le khalifa construit, amenage, dispose — son action se traduit en objets concrets qui permettent ensuite le bien-etre. La confusion entre le meuble (sarir/surur) et le sentiment (surur/joie) est etymologique mais pas contextuelle — le verset parle d'amenagement, pas d'emotion. Le paradis recompense le khalifa avec des objets qui symbolisent la reussite de sa mission civilisatrice."
    }
  },

  // ============================================================
  // 4. smw (v18 = 5985) — Hauteur/Élévation — probable
  // ============================================================
  {
    verse_id: 5985, word_key: 'smw', concept: 'Hauteur/Elevation',
    axes: {
      axe1_verset: "Le verset 18 demande « ne regardent-ils pas le ciel, comment il a ete eleve ? ». Le mot al-sama' designe specifiquement le ciel comme objet concret — la voute celeste au-dessus de la terre. Le sens de hauteur/elevation est trop abstrait pour ce contexte : le verset enumere des creations concretes a observer (chameaux, ciel, montagnes, terre). La hauteur est une propriete, pas un objet. On ne regarde pas « la hauteur » comme on regarde le ciel — la hauteur est ce que l'on constate en regardant le ciel. Le verbe yunzuru (ils regardent) exige un objet visible et concret, pas une qualite abstraite.",
      axe2_voisins: "Le verset 17 demande de regarder les chameaux (comment ils ont ete crees), le verset 19 les montagnes (comment elles ont ete dressees), le verset 20 la terre (comment elle a ete etendue). Les quatre versets 17 a 20 enumerent quatre creations concretes et observables : chameaux, ciel, montagnes, terre. La hauteur ne serait pas une creation au meme titre que les trois autres — c'est une propriete du ciel, pas une creation en soi. L'enumeration exige quatre elements de meme nature : des objets crees que l'on peut observer directement.",
      axe3_sourate: "La sourate al-Ghashiya passe des descriptions du chatiment et de la recompense a des questions rhetoriques sur la creation. Les versets 17-20 invitent a l'observation directe du monde naturel comme preuve de la puissance divine. Cette observation porte sur des choses concretes — des creations tangibles que tout le monde peut voir. La hauteur comme qualite abstraite ne s'inscrit pas dans cette demarche d'observation empirique. La sourate veut que l'auditeur leve les yeux vers le ciel, pas qu'il reflechisse a la notion de hauteur.",
      axe4_coherence: "Le Coran utilise al-sama' specifiquement pour designer le ciel dans la tres grande majorite de ses occurrences. En 2:22, le ciel est un edifice (bina'an). En 67:3, Dieu a cree sept cieux superposes. En 50:6, les hommes sont invites a regarder le ciel au-dessus d'eux. La racine s-m-w signifie etre eleve, mais le nom sama' designe specifiquement le ciel comme objet concret. La distinction est importante : la racine porte l'idee de hauteur, mais le nom derive a acquis un sens specifique (le ciel) qui depasse la simple notion de hauteur.",
      axe5_frequence: "Le ciel comme creation concrete illustre l'ordre divin et la puissance creatrice — c'est un signe visible que le khalifa peut contempler quotidiennement. La hauteur comme qualite abstraite n'enseigne rien sur la creation. Le khalifa est invite a observer le monde pour en tirer des lecons — il observe des objets (le ciel, la terre, les montagnes), pas des proprietes isolees. La distinction entre le ciel (objet) et la hauteur (propriete) est celle entre l'observation concrete et la reflexion abstraite — le verset appelle a la premiere.",
      distinction: "Le ciel est un objet concret (ce qui couvre au-dessus), la hauteur est une qualite abstraite. Le verset enumere des creations concretes (chameaux, ciel, montagnes, terre) — la hauteur n'est pas une creation, c'est une propriete."
    }
  },

  // ============================================================
  // 5. jbl (v19 = 5986) — Création/Nature — peu_probable
  // ============================================================
  {
    verse_id: 5986, word_key: 'jbl', concept: 'Creation/Nature',
    axes: {
      axe1_verset: "Le verset 19 demande « et les montagnes, comment elles ont ete dressees ». Le mot al-jibal est le pluriel de jabal qui designe specifiquement une montagne. Le sens de creation/nature (jibilla = nature innee, creation originelle) est un derive different de la meme racine. Le verset parle de montagnes concretes que l'on peut voir et observer, pas du concept abstrait de creation ou de nature innee. Le verbe nusibat (elles ont ete dressees) s'applique a des objets physiques plantes dans le sol, pas a une nature abstraite.",
      axe2_voisins: "Les versets 17 a 20 forment une serie de quatre questions rhetoriques portant chacune sur un element concret de la creation : les chameaux (v17), le ciel (v18), les montagnes (v19), la terre (v20). La creation/nature comme concept abstrait briserait cette enumeration d'elements physiques observables. Chaque element est accompagne d'un verbe passif decrivant l'acte divin : crees, eleve, dressees, etendue. Le concept de creation/nature ne peut pas etre « dresse » comme une montagne — le verbe nusibat exige un objet physique.",
      axe3_sourate: "La sourate al-Ghashiya invite a l'observation du monde naturel apres avoir decrit le chatiment et la recompense. Les montagnes sont un element du paysage quotidien que l'auditeur peut voir — elles constituent un signe visible de la puissance divine. La notion abstraite de creation ou de nature innee (jibilla) n'est pas observable de la meme maniere. La sourate progresse du particulier (chameaux) au cosmique (ciel) puis revient au terrestre (montagnes, terre) — chaque element est ancre dans le reel visible.",
      axe4_coherence: "Le Coran utilise al-jibal pour les montagnes dans de tres nombreux passages. En 78:7, les montagnes sont des piquets (awtadan). En 27:88, les montagnes passent comme des nuages — elles sont des objets physiques. En 21:31, les montagnes sont des ancres (rawasiya) pour la terre. Le mot jibilla apparait en 26:184 dans un sens completement different (la creation des premiers). La coherence coranique montre que jibal dans ce type de verset designe toujours les montagnes physiques, jamais la nature innee ou la creation abstraite.",
      axe5_frequence: "Les montagnes comme reperes physiques servent la mission du khalifa en fournissant des points de reference stables dans le paysage. Le khalifa amenage la terre et utilise les montagnes comme ancres et limites naturelles. Le concept abstrait de nature/creation ne fournit pas ce service concret. La racine j-b-l dans le Coran est massivement utilisee pour les montagnes dans les contextes de questions rhetoriques sur la creation. En 88:19, la question « comment elles ont ete dressees » invite a voir dans les montagnes un signe de puissance — pas a reflechir sur le concept de creation."
    }
  },

  // ============================================================
  // 6. stH (v20 = 5987) — Surface/Toit — probable
  // ============================================================
  {
    verse_id: 5987, word_key: 'stH', concept: 'Surface/Toit',
    axes: {
      axe1_verset: "Le verset 20 demande « et la terre, comment elle a ete etendue ». Le verbe sutihat est un passif accompli de la racine s-t-h signifiant etendre, aplanir, deployer. Le sens de surface/toit designe le resultat de l'action (l'etat plat), tandis que le verset interroge sur l'action elle-meme (comment elle a ete etendue). La question porte sur le processus de creation, pas sur l'etat final. Le passif accompli sutihat met l'accent sur l'acte subi par la terre — elle a ete etendue par un agent divin — et non sur son etat resultant de surface plane.",
      axe2_voisins: "Les versets 17 a 20 utilisent tous des verbes passifs interrogeant sur l'acte de creation : khuliqat (elles ont ete creees), rufi'at (il a ete eleve), nusibat (elles ont ete dressees), sutihat (elle a ete etendue). Chaque verbe decrit une action divine, pas un etat statique. Les quatre verbes sont au passif accompli, marquant des actes acheves mais interroges dans leur modalite (kayfa — comment). Le sens de surface/toit decrirait un etat resultant, en rupture avec les trois autres verbes qui decrivent des actes. La coherence interne de la serie exige un sens dynamique, pas statique.",
      axe3_sourate: "La sourate al-Ghashiya invite a la contemplation des actes creatifs divins, pas a la constatation d'etats. Les questions rhetoriques des versets 17-20 sont concues pour provoquer l'emerveillement devant la puissance creatrice. L'extension de la terre est un acte grandiose — deployer la surface terrestre pour la rendre habitable. Le sens de surface/toit reduit cette grandeur a un simple constat d'etat plat. La sourate veut susciter la reflexion sur le comment de la creation, pas sur le quoi de l'etat actuel.",
      axe4_coherence: "Le Coran en 91:6 dit « wal-ardi wa ma tahaha » — la terre et ce qui l'a etendue. Le verbe taha de la racine t-h-w est utilise comme synonyme de s-t-h pour decrire l'acte d'etendre la terre. En 79:30, « wal-arda ba'da dhalika dahaha » — la terre apres cela, Il l'a etendue. Ces passages paralleles confirment que l'interet coranique est dans l'acte d'extension, pas dans le resultat. En 51:48, « wal-arda farashnaha » — la terre, Nous l'avons etalee — encore une fois l'acte, pas l'etat.",
      axe5_frequence: "L'acte d'etendre la terre est une lecon sur la puissance divine pour le khalifa — Dieu a prepare le sol pour que le khalifa puisse y vivre et accomplir sa mission. La surface comme etat ne transmet pas cette lecon de preparation divine active. Le khalifa doit comprendre que la terre habitable n'est pas un hasard mais le resultat d'un acte divin delibere d'extension et d'amenagement. La distinction entre l'acte (etendre) et l'etat (surface plate) est celle entre la puissance creatrice et le simple constat physique.",
      distinction: "L'extension est l'acte (etendre, deployer), la surface est le resultat (l'etat plat). Le verbe passif accompli sutihat interroge l'acte subi (elle a ete etendue), pas l'etat resultant."
    }
  },

  // ============================================================
  // 7. lys (v22 = 5989) — Négation/Non-existence — retenu (single concept)
  // ============================================================
  {
    verse_id: 5989, word_key: 'lys', concept: 'Negation/Non-existence',
    axes: {
      axe1_verset: "Le mot lasta (tu n'es pas) est un verbe de negation absolue qui nie une qualite du sujet. Dans le verset 22, lasta nie que le Prophete soit un musaytir (dominateur). La negation definit le role prophetique par ce qu'il n'est pas — une delimitation par exclusion. Le champ lexical est celui de l'autorite et de ses limites : rappeler oui, dominer non. La negation lasta est categorique et permanente — ce n'est pas une negation temporaire mais une negation de nature. Le Prophete n'a jamais ete et ne sera jamais un dominateur sur les gens.",
      axe2_voisins: "Le verset 21 dit « rappelle, tu n'es qu'un rappeleur » — definition positive du role. Le verset 22 dit « tu n'es pas sur eux un dominateur » — definition negative du meme role. Les deux versets forment une paire complementaire : inclusion (rappeleur) et exclusion (pas dominateur). Le verset 23 enchaine avec l'exception (sauf celui qui se detourne et dissimule) — la negation du verset 22 est donc le pivot entre la mission et ses limites. Cette structure inclusion-exclusion-exception est un procede coranique pour delimiter precisement le champ d'action prophetique.",
      axe3_sourate: "La sourate al-Ghashiya progresse en trois temps : description des destins (v1-16), contemplation de la creation (v17-20), role du Prophete (v21-26). La negation du verset 22 se situe dans la troisieme section ou la sourate definit la responsabilite prophetique. Apres avoir montre les consequences (chatiment et recompense) et les preuves (creation), la sourate precise que le Prophete ne peut que rappeler — il ne peut pas forcer. La negation est donc le gardien de la liberte humaine dans l'economie de la sourate.",
      axe4_coherence: "Le Coran utilise laysa dans de nombreux contextes de negation absolue. En 88:22, laysa nie la domination prophetique. En 42:48, le Prophete n'est qu'un transmetteur. En 6:107, si Dieu avait voulu, ils n'auraient pas associe — le libre arbitre est protege par la negation de la coercition. En 50:45, le Prophete n'est pas un tyran sur eux. La coherence coranique montre que la negation de la domination prophetique est un theme recurrent qui protege la liberte de choix des destinataires du message.",
      axe5_frequence: "Le khalifa doit connaitre les limites de son autorite. La negation lasta etablit la frontiere entre rappeler et dominer — le khalifa rappelle, informe, transmet, mais ne contraint pas. Cette limite est fondamentale pour la mission : un khalifa qui domine trahit sa mission de rappeleur. La negation protege autant le destinataire que le messager — elle libere le Prophete de la responsabilite des choix des autres. Le khalifa qui comprend cette negation agit avec humilite et confie le resultat a Dieu."
    }
  },

  // ============================================================
  // 8. kfr (v23 = 5990) — Rejet/Ingratitude — probable
  // ============================================================
  {
    verse_id: 5990, word_key: 'kfr', concept: 'Rejet/Ingratitude',
    axes: {
      axe1_verset: "Le verset 23 decrit deux actes : tawalla (se detourner) et kafara (dissimuler/rejeter). Si kafara porte le sens de rejet, il forme avec tawalla une paire de refus actif — se detourner puis rejeter. Le champ lexical est celui de l'opposition deliberee au message. Le verset identifie l'exception a la regle du verset 22 — ceux qui echappent au simple rappel sont ceux qui se detournent activement et rejettent. Le rejet est ici un acte conscient et volontaire, pas un simple etat d'ignorance.",
      axe2_voisins: "Le verset 22 dit que le Prophete n'est pas un dominateur. Le verset 23 introduit l'exception : sauf celui qui se detourne et kafara. Le verset 24 donne la consequence : Dieu le chatie du plus grand chatiment. La sequence est logique : le rappel est offert (v21), la domination est niee (v22), l'exception est notee (v23), la consequence suit (v24). Le rejet au verset 23 est donc le declencheur de la consequence du verset 24 — celui qui rejette activement s'expose au chatiment divin.",
      axe3_sourate: "La sourate al-Ghashiya se termine par un avertissement apres avoir presente les preuves de la creation et defini le role prophetique. Le rejet mentionne au verset 23 est la reponse negative possible aux questions rhetoriques des versets 17-20. Celui qui observe les chameaux, le ciel, les montagnes et la terre sans en tirer de lecon est celui qui se detourne et rejette. Le rejet ferme la boucle de la sourate : la couverture (ghashiya) du debut atteint ceux qui rejettent le message malgre les preuves.",
      axe4_coherence: "Le Coran utilise kafara dans les deux sens de dissimuler et de rejeter. En 80:17, qutila al-insan ma akfarahu — maudit soit l'homme, combien il est ingrat. En 2:6, inna alladhina kafaru — ceux qui ont recouvert/rejete. En 76:3, soit reconnaissant soit recouvrant. La racine k-f-r oscille entre la couverture (sens physique premier) et le rejet (extension metaphorique). Dans le contexte de 88:23, ou kafara est associe a tawalla (se detourner), le sens de rejet est renforce par la paire — se detourner implique un mouvement d'eloignement actif.",
      axe5_frequence: "Le rejet de la verite est l'antithese de la mission du khalifa. Le khalifa est celui qui recoit, accepte et transmet la connaissance divine — le rejet est l'echec total de cette mission. La distinction entre la dissimulation (couvrir la verite) et le rejet (nier la verite) est subtile mais importante. La dissimulation garde la verite intacte sous le voile, le rejet la nie totalement. Dans les deux cas, le khalifa qui se detourne et dissimule ou rejette trahit la confiance divine qui lui a confie la gestion de la terre.",
      distinction: "La dissimulation est l'acte physique premier (couvrir), le rejet est l'extension metaphorique (nier). Le verset associe kafara a tawalla (se detourner). Se detourner + dissimuler forme une paire d'eloignement, tandis que se detourner + rejeter forme une paire de refus actif. La dissimulation est plus fondamentale etymologiquement — le rejet en decoule."
    }
  },

  // ============================================================
  // 9. eðb (v24 = 5991) — Châtiment — retenu (single concept)
  // ============================================================
  {
    verse_id: 5991, word_key: 'e\u00f0b', concept: 'Chatiment',
    axes: {
      axe1_verset: "Le verset 24 contient le verbe yu'adhdhibuhu (Il le chatie) a la forme II de l'inaccompli, indiquant une action intensive et repetee. Le verset nomme Dieu comme agent, le chatiment comme action, et le degre comme le plus grand (al-akbar). Le champ lexical est celui du jugement divin et de la consequence des actes. Le chatiment est presente comme une reponse directe au detournement et a la dissimulation du verset 23. L'emploi de la forme II (intensive) souligne la severite de la consequence.",
      axe2_voisins: "Le verset 23 decrit la faute (se detourner et dissimuler), le verset 24 en donne la consequence immediate (le chatiment le plus grand). Le verset 25 enchaine avec le retour vers Dieu (vers Nous est leur retour). La sequence est celle d'un jugement complet : faute, consequence, destination finale. Le chatiment du verset 24 est le pivot entre l'acte humain et la souverainete divine. Cette progression faute-chatiment-retour structure la cloture de la sourate de maniere definitive.",
      axe3_sourate: "La sourate al-Ghashiya oppose depuis le debut recompense et chatiment. Les versets 2 a 7 decrivaient le chatiment des visages humilies (feu, source bouillante, nourriture amere). Le verset 24 reprend ce theme a la cloture de la sourate avec le chatiment le plus grand. La boucle est fermee : la sourate ouvre sur le chatiment, montre la recompense, pose les preuves de la creation, definit le role prophetique, et revient au chatiment pour ceux qui rejettent. Le chatiment est le fil conducteur qui donne a la sourate sa tension narrative.",
      axe4_coherence: "Le Coran utilise la racine ayn-dhal-ba dans de nombreux contextes de consequence des actes. En 3:56, ceux qui ont recouvert seront chaties d'un chatiment severe. En 4:56, chaque fois que leurs peaux seront consumees, elles seront remplacees pour qu'ils goutent le chatiment. En 29:23, ceux qui recouvert les signes de Dieu et la rencontre avec Lui — ceux-la desespereront de la misericorde et auront un chatiment douloureux. La coherence coranique confirme que le chatiment est la consequence constante du rejet delibere des signes divins.",
      axe5_frequence: "Le chatiment est la consequence de l'echec de la mission du khalifa. Le khalifa qui se detourne de sa responsabilite et dissimule la verite subit les consequences de ses choix. La racine '-dh-b porte l'idee de douceur retiree — le chatiment est la perte du bien-etre qui etait possible. Le khalifa doit comprendre que la mission n'est pas sans enjeu : le rappel est une responsabilite, et le detournement a des consequences proportionnelles a la gravite du refus. Le chatiment le plus grand (al-akbar) est reserve a ceux dont le refus est le plus delibere."
    }
  },

  // ============================================================
  // 10. awb (v25 = 5992) — Retour/Repentir — retenu (single concept)
  // ============================================================
  {
    verse_id: 5992, word_key: 'awb', concept: 'Retour/Repentir',
    axes: {
      axe1_verset: "Le verset 25 est une declaration divine directe : « vers Nous est leur retour ». Le mot iyabahum (leur retour) est derive de la racine a-w-b qui designe le mouvement de retour vers un point d'origine. Le champ lexical est celui de la destination finale et de la souverainete divine. Le retour est presente comme un fait ineluctable, pas comme un choix — ilayна (vers Nous) est mis en tete pour l'emphase. La construction nominale (inna ilayna iyabahum) renforce le caractere definitif et certain de ce retour.",
      axe2_voisins: "Le verset 24 mentionne le chatiment le plus grand, le verset 25 affirme le retour vers Dieu, le verset 26 conclut avec le compte (hisabahum). La sequence est chatiment-retour-compte : les trois elements du jugement final. Le retour du verset 25 est le mouvement qui amene au lieu du compte — c'est le deplacement vers la juridiction divine. Cette trilogie ferme la sourate sur une note d'autorite divine absolue : Dieu chatie, les creatures reviennent, et Dieu fait le compte.",
      axe3_sourate: "La sourate al-Ghashiya se termine par une affirmation de la souverainete divine sur le destin des creatures. Apres avoir presente la couverture (v1), les deux destins (v2-16), les preuves de la creation (v17-20), le role prophetique (v21-22), et l'avertissement (v23-24), la sourate conclut par le retour vers Dieu et le compte. Le retour est la cloture logique de tout le discours : quelle que soit la reponse de l'homme au rappel, il reviendra vers Dieu. Cette conclusion donne a l'ensemble de la sourate son poids eschatologique.",
      axe4_coherence: "Le Coran affirme le retour vers Dieu dans de nombreux passages. En 2:28, « c'est vers Lui que vous serez ramenes ». En 3:55, « vers Moi est votre retour ». En 6:60, « c'est vers Lui votre retour puis Il vous informera ». En 96:8, « inna ila rabbika al-ruj'a » — vers ton Seigneur est le retour. La racine a-w-b est utilisee specifiquement en 88:25 mais le concept de retour vers Dieu est l'un des themes les plus constants du Coran. Le iyab est le retour definitif dont nul ne peut echapper.",
      axe5_frequence: "Le khalifa doit savoir que sa mission a une fin et qu'il reviendra rendre compte de sa gestion. Le retour vers Dieu est la cloture de la mission terrestre — tout ce que le khalifa a fait sera passe en revue. La racine a-w-b porte l'idee d'un retour au point de depart, d'un mouvement circulaire qui ramene a l'origine. Le khalifa est sorti de Dieu (creation) et revient vers Dieu (jugement). Ce retour donne a la vie terrestre son sens : elle est un passage, pas une fin. Le khalifa qui comprend le retour agit avec la conscience que chaque acte sera evalue."
    }
  }
];

async function main() {
  console.log('=== FIX S88 v11-26 — AJOUT AXES MANQUANTS ===\n');

  let ok = 0, err = 0;

  for (const fix of fixes) {
    const { verse_id, word_key, concept, axes } = fix;
    console.log(`--- verse_id=${verse_id}  word_key=${word_key}  concept=${concept} ---`);

    // 1. Fetch existing VWA
    const { data: rows, error: fetchErr } = await sb
      .from('verse_word_analyses')
      .select('id, analysis_axes')
      .eq('verse_id', verse_id)
      .eq('word_key', word_key);

    if (fetchErr || !rows || rows.length === 0) {
      console.log(`  ERR: VWA not found for verse_id=${verse_id} word_key=${word_key} (${fetchErr?.message || 'no rows'})`);
      err++;
      continue;
    }

    const vwa = rows[0];
    const aa = vwa.analysis_axes || {};
    const concepts = aa.concepts || {};

    if (!concepts[concept]) {
      console.log(`  ERR: concept "${concept}" not found in analysis_axes.concepts — available: ${Object.keys(concepts).join(', ')}`);
      err++;
      continue;
    }

    // 2. Patch the axes into the concept
    const c = concepts[concept];
    c.axe1_verset = axes.axe1_verset;
    c.axe2_voisins = axes.axe2_voisins;
    c.axe3_sourate = axes.axe3_sourate;
    c.axe4_coherence = axes.axe4_coherence;
    c.axe5_frequence = axes.axe5_frequence;
    if (axes.distinction) c.distinction = axes.distinction;

    concepts[concept] = c;
    aa.concepts = concepts;

    // 3. Update
    const { error: updateErr } = await sb
      .from('verse_word_analyses')
      .update({ analysis_axes: aa })
      .eq('id', vwa.id);

    if (updateErr) {
      console.log(`  ERR update id=${vwa.id}: ${updateErr.message}`);
      err++;
    } else {
      console.log(`  ✓ VWA id=${vwa.id} patched — concept "${concept}" now has 5 axes`);
      ok++;
    }
  }

  console.log(`\n=== DONE: ${ok} patched, ${err} errors ===`);
}

main().catch(e => { console.error(e); process.exit(1); });
