const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// =====================================================
// PIPELINE SOURATE 2 — VERSETS 146, 147, 148
// V146: verse_id=153, analysis_id=508
// V147: verse_id=154, analysis_id=513
// V148: verse_id=155, analysis_id=515
// =====================================================

const verseData = {
  // =======================================================
  // VERSET 146
  // "Ceux a qui Nous avons donne le Livre le reconnaissent
  //  comme ils reconnaissent leurs fils. Et en verite un
  //  groupe d'entre eux cache la verite alors qu'ils savent."
  // =======================================================
  146: {
    verse_id: 153,
    analysis_id: 508,
    translation_arab: "Ceux a qui nous avons donne le Livre le reconnaissent comme ils reconnaissent leurs fils. Et en verite un groupe d'entre eux cache la verite alors qu'ils savent.",
    full_translation: "Ceux a qui Nous avons donne le Livre, le reconnaissent comme ils reconnaissent leurs enfants. Or une partie d'entre eux cache la verite, alors qu'ils la savent !",
    translation_explanation: `§DEMARCHE§
Le verset decrit la reconnaissance de la verite par ceux qui ont recu le Livre et la dissimulation deliberee d'un groupe parmi eux. Le verbe **ataynahu** est un accompli 1PL actif de la forme IV de la racine a-t-y avec pronom suffixe 3MP. Le Lane's donne pour la forme IV : donner, accorder. L'accompli indique que le don est acheve — le Livre leur a ete donne dans le passe. Le pronom suffixe « hum » precise les destinataires. Le sujet « Nous » est le pluriel de majeste divine — c'est Dieu qui donne le Livre. Le nom **al-kitaba** est un nom masculin singulier defini accusatif de la racine k-t-b. Le Lane's donne : livre, ecriture revelee. L'article defini (al-) marque que c'est LE Livre specifique — l'ecriture revelee qu'ils ont recue. Le verbe **ya'rifunahu** est un inaccompli 3MP actif de la forme I de la racine '-r-f avec pronom suffixe 3MS. Le Lane's donne : connaitre, reconnaitre, identifier. L'inaccompli indique que la reconnaissance est continue et actuelle — ils le reconnaissent en permanence. Le pronom suffixe « hu » renvoie au Prophete ou a la verite de la revelation. Reconnaitre c'est identifier quelque chose qu'on connait deja — ils n'ont pas besoin de preuve nouvelle car ils possedent deja la connaissance. La comparaison **kama** (comme) introduit l'intensite de cette reconnaissance. Le verbe **ya'rifuna** est le meme verbe sans pronom suffixe — ils reconnaissent. Le nom **abna'ahum** est un pluriel de la racine b-n-y avec pronom suffixe 3MP. Le Lane's donne : fils, enfants. Le pluriel abna' designe les fils. « Comme ils reconnaissent leurs fils » — la comparaison est saisissante car la reconnaissance d'un fils est la plus immediate et la plus certaine. Personne ne doute de l'identite de son propre fils. La particule emphatique **inna** (en verite, certes) ouvre la deuxieme partie du verset avec force — ce qui suit est affirme avec certitude. Le nom **fariqan** est un nom masculin singulier indefini accusatif de la racine f-r-q. Le Lane's donne : groupe, partie separee. Un groupe indefini (fariqan sans article) — pas tous, mais une partie d'entre eux. L'accusatif marque qu'il est le sujet de inna (inna + accusatif). Le verbe **layaktumuna** est un inaccompli 3MP actif de la racine k-t-m avec le lam emphatique (la- d'insistance). Le Lane's donne : cacher, taire, dissimuler. L'inaccompli avec le lam de inna marque que la dissimulation est en cours et continue — ils ne cessent de cacher. Le nom **al-haqqa** est un nom masculin singulier defini accusatif de la racine h-q-q. Le Lane's donne : verite, droit, realite. L'article defini (al-) marque que c'est LA verite specifique — la verite qu'ils connaissent et qu'ils cachent. Le pronom **hum** (ils/eux) est un pronom emphatique de rappel dans la phrase circumstancielle « wa-hum ya'lamuna » (alors qu'ils savent). Le verbe **ya'lamuna** est un inaccompli 3MP actif de la racine '-l-m. Le Lane's donne : savoir, connaitre. L'inaccompli indique un etat permanent — ils savent en permanence. La phrase circumstancielle « alors qu'ils savent » aggrave la dissimulation : ils cachent la verite en pleine connaissance de cause, pas par ignorance.

§JUSTIFICATION§
**avons donne** — Le sens retenu est « donner ». Le verbe atayna a la forme IV designe un don delibere. L'alternative « venir » est ecartee car la forme IV est causative — c'est faire venir, donc donner, pas simplement venir.

**le Livre** — Le sens retenu est « livre ». Le mot al-kitab designe l'ecriture revelee. L'alternative « prescrire » est ecartee car le mot est un nom defini, pas un verbe.

**reconnaissent** — Le sens retenu est « reconnaitre ». Le verbe ya'rifuna designe l'identification certaine de quelque chose de deja connu. L'alternative « coutume » est ecartee car le mot est un verbe, pas un nom. La reconnaissance est plus forte que la simple connaissance — elle implique l'identification immediate.

**fils** — Le sens retenu est « fils ». Le mot abna' est le pluriel de ibn (fils). L'alternative « construire » est ecartee car le contexte est la filiation, pas la construction. La comparaison avec les fils montre le degre maximal de certitude — on reconnait son fils sans hesiter.

**groupe** — Le sens retenu est « groupe ». Le mot fariqan designe une partie separee d'un ensemble. L'alternative « Discernement » est ecartee car le mot est un nom commun designant un sous-groupe, pas le Furqan.

**cache** — Le sens retenu est « cacher ». Le verbe yaktumuna designe la dissimulation deliberee. L'alternative « garder secret » est proche mais « cacher » est plus direct et plus courant en francais.

**la verite** — Le sens retenu est « verite ». Le mot al-haqq designe la realite objective. L'alternative « droit » est ecartee car le contexte est la connaissance dissimilee, pas un droit legal.

**savent** — Le sens retenu est « savoir ». Le verbe ya'lamuna designe le savoir permanent. L'alternative « enseigner » est ecartee car le verbe est a la forme I (savoir), pas a la forme II (enseigner).

§CRITIQUE§
Les traductions courantes donnent sensiblement le meme sens pour ce verset. Hamidullah traduit « le reconnaissent » sans preciser l'objet — nous gardons la meme ambiguite car le pronom « hu » peut renvoyer au Prophete ou a la verite de la revelation. La comparaison « comme ils reconnaissent leurs enfants » est unanimement traduite de la meme maniere. La seule nuance est que nous traduisons abna' par « fils » plutot que « enfants » car le mot arabe est masculin pluriel et designe specifiquement les fils. Hamidullah donne « enfants » qui est plus general. Notre traduction suit le texte arabe de plus pres.`,
    segments: [
      { fr: "ceux qui", phon: "alladhina", arabic: "\u0671\u0644\u0651\u064e\u0630\u0650\u064a\u0646\u064e", is_particle: true, position: 1 },
      { fr: "nous leur avons donne", pos: "verbe", phon: "ataynahum", arabic: "\u0621\u064e\u0627\u062a\u064e\u064a\u0652\u0646\u064e\u0640\u0670\u0647\u064f\u0645\u064f", word_key: "aty", is_particle: false, sense_retenu: "donner", position: 2 },
      { fr: "le Livre", pos: "nom", phon: "al-kitaba", arabic: "\u0671\u0644\u0652\u0643\u0650\u062a\u064e\u0640\u0670\u0628\u064e", word_key: "ktb", is_particle: false, sense_retenu: "livre", position: 3 },
      { fr: "le reconnaissent", pos: "verbe", phon: "ya'rifunahu", arabic: "\u064a\u064e\u0639\u0652\u0631\u0650\u0641\u064f\u0648\u0646\u064e\u0647\u064f\u06e5", word_key: "erf", is_particle: false, sense_retenu: "reconnaitre", position: 4 },
      { fr: "comme", phon: "kama", arabic: "\u0643\u064e\u0645\u064e\u0627", is_particle: true, position: 5 },
      { fr: "reconnaissent", pos: "verbe", phon: "ya'rifuna", arabic: "\u064a\u064e\u0639\u0652\u0631\u0650\u0641\u064f\u0648\u0646\u064e", word_key: "erf", is_particle: false, sense_retenu: "reconnaitre", position: 6 },
      { fr: "leurs fils", pos: "nom", phon: "abna'ahum", arabic: "\u0623\u064e\u0628\u0652\u0646\u064e\u0622\u0621\u064e\u0647\u064f\u0645\u0652", word_key: "bny", is_particle: false, sense_retenu: "fils", position: 7 },
      { fr: "et", phon: "wa", arabic: "\u0648\u064e", is_particle: true, position: 8 },
      { fr: "en verite", phon: "inna", arabic: "\u0625\u0650\u0646\u0651\u064e", is_particle: true, position: 9 },
      { fr: "un groupe", pos: "nom", phon: "fariqan", arabic: "\u0641\u064e\u0631\u0650\u064a\u0642\u064b\u0627", word_key: "frq", is_particle: false, sense_retenu: "groupe", position: 10 },
      { fr: "d'entre eux", phon: "minhum", arabic: "\u0645\u0650\u0651\u0646\u0652\u0647\u064f\u0645\u0652", is_particle: true, position: 11 },
      { fr: "cache", pos: "verbe", phon: "layaktumuna", arabic: "\u0644\u064e\u064a\u064e\u0643\u0652\u062a\u064f\u0645\u064f\u0648\u0646\u064e", word_key: "ktm", is_particle: false, sense_retenu: "cacher", position: 12 },
      { fr: "la verite", pos: "nom", phon: "al-haqqa", arabic: "\u0671\u0644\u0652\u062d\u064e\u0642\u0651\u064e", word_key: "hqq", is_particle: false, sense_retenu: "verite", position: 13 },
      { fr: "et", phon: "wa", arabic: "\u0648\u064e", is_particle: true, position: 14 },
      { fr: "ils", phon: "hum", arabic: "\u0647\u064f\u0645\u0652", is_particle: true, position: 15 },
      { fr: "savent", pos: "verbe", phon: "ya'lamuna", arabic: "\u064a\u064e\u0639\u0652\u0644\u064e\u0645\u064f\u0648\u0646\u064e", word_key: "elm", is_particle: false, sense_retenu: "savoir", position: 16 }
    ],
    words: [
      // aty pos=2
      {
        word_key: "aty", position: 2, sense_chosen: "donner",
        analysis_axes: {
          sense_chosen: "donner",
          concept_chosen: "Venue/Arrivée",
          concepts: {
            "Venue/Arrivée": {
              status: "retenu",
              senses: ["venir", "arriver", "apporter", "donner", "commettre"],
              proof_ctx: "Le verbe ataynahu est un accompli 1PL actif de la forme IV de la racine a-t-y avec pronom suffixe 3MP. Le Lane's donne : donner, accorder, apporter. La forme IV (af'ala) est causative — elle transforme « venir » en « faire venir vers », c'est-a-dire « donner ». L'accompli marque que le don est acheve et definitif. Le pronom suffixe « hum » precise les destinataires du don. Le sujet « Nous » (pluriel de majeste) indique que le don est divin. La distinction avec « detruire » (nul) est evidente : le contexte est un don de revelation, pas une destruction.",
              axe1_verset: "Le verbe ataynahu ouvre la proposition relative — ceux a qui Nous avons donne le Livre. Le don est la base de tout le verset : c'est parce qu'ils ont recu le Livre qu'ils reconnaissent la verite, et c'est malgre ce don qu'un groupe cache la verite. Le champ lexical du verset tourne autour de la connaissance (donner, reconnaitre, savoir) et de son contraire (cacher). Le don du Livre est le point de depart de cette tension entre connaissance et dissimulation.",
              axe2_voisins: "Le verset 145 affirmait que meme si le Prophete apportait tous les signes a ceux qui ont recu le Livre, ils ne suivraient pas sa direction. Le verset 146 montre pourquoi cette resistance est inexcusable : ils ont recu le Livre, ils reconnaissent la verite. Le verset 147 affirmera que la verite vient de ton Seigneur. Le don du Livre est un argument contre ceux qui cachent — ils ne peuvent pas pretendre l'ignorance car ils ont recu.",
              axe3_sourate: "La racine a-t-y au sens de donner (forme IV) est recurrente dans la sourate al-Baqarah. En 2:53, « Nous avons donne a Moussa le Livre et le Discernement ». En 2:87, « Nous avons donne a Moussa le Livre ». La sourate insiste sur la continuite du don divin — chaque communaute a recu un Livre, chaque don cree une responsabilite. Le don est un privilege qui engage le destinataire.",
              axe4_coherence: "L'expression « alladhina ataynahu al-kitab » (ceux a qui Nous avons donne le Livre) apparait environ 20 fois dans le Coran. En 6:20, « ceux a qui Nous avons donne le Livre le reconnaissent comme ils reconnaissent leurs fils » — un parallele quasi identique a 2:146. Cette expression est un identifiant coranique pour les communautes qui ont recu une revelation anterieure. Le don cree une categorie — celle des destinataires de la revelation.",
              axe5_frequence: "Pour la mission du khalifa, le don du Livre est le fondement de la mission. Recevoir le Livre c'est recevoir le mandat — la responsabilite de comprendre, de temoigner et de ne pas cacher. Le khalifa qui a recu ne peut pretendre ne pas savoir. Le don est un engagement bilateral : Dieu donne, le destinataire doit honorer ce don."
            },
            "Sens isolé/Détruire": {
              status: "nul",
              senses: ["détruire"],
              proof_ctx: "Le sens de destruction est hors sujet — le contexte est le don du Livre a une communaute, pas une destruction."
            }
          }
        }
      },
      // ktb pos=3
      {
        word_key: "ktb", position: 3, sense_chosen: "livre",
        analysis_axes: {
          sense_chosen: "livre",
          concept_chosen: "Livre/Écrit",
          concepts: {
            "Livre/Écrit": {
              status: "retenu",
              senses: ["livre", "écriture révélée", "registre", "contrat écrit", "contrat de mariage", "contrat d'affranchissement"],
              proof_ctx: "Le nom al-kitaba est un nom masculin singulier defini accusatif de la racine k-t-b. Le Lane's donne : livre, ecriture revelee, ecrit. L'article defini (al-) marque que c'est LE Livre specifique — pas n'importe quel ecrit mais l'ecriture revelee que cette communaute a recue. L'accusatif indique qu'il est le complement direct d'atayna (Nous avons donne). La distinction avec l'obligation (nul) est claire : le contexte est un objet de revelation donne, pas un decret impose.",
              axe1_verset: "Le mot al-kitab est l'objet du don — « ceux a qui Nous avons donne le Livre ». Le Livre est le support de la connaissance qui permet la reconnaissance. Le verset enchaine : ils ont recu le Livre → ils reconnaissent → mais un groupe cache. Le Livre est la source de leur savoir et donc de leur responsabilite. Cacher la verite quand on possede le Livre est une trahison du don.",
              axe2_voisins: "Le verset 144 parlait de la direction de la priere — tourne ton visage vers la Mosquee Sacree. Le verset 145 montrait que ceux qui ont recu le Livre ne suivent pas cette direction. Le verset 146 revele pourquoi c'est grave : ils reconnaissent pourtant la verite contenue dans leur propre Livre. Le Livre est la preuve interieure qui rend l'obstination inexcusable.",
              axe3_sourate: "Le mot al-kitab est un des mots les plus frequents de la sourate al-Baqarah. En 2:2, « ce Livre, nul doute en lui ». En 2:44, « vous qui lisez le Livre ». La sourate identifie les communautes par leur relation au Livre — ceux qui l'ont recu, ceux qui le lisent, ceux qui le suivent, ceux qui le cachent. Le verset 146 montre le cas extreme : recevoir le Livre et cacher sa verite.",
              axe4_coherence: "La racine k-t-b apparait environ 319 fois dans le Coran. L'expression « ceux a qui le Livre a ete donne » est un identifiant recurrent. En 3:19, « ceux a qui le Livre a ete donne n'ont diverge qu'apres que la science leur est venue ». Le Coran montre que la divergence et la dissimulation viennent apres la reception du Livre, pas avant — c'est un choix delibere, pas une ignorance.",
              axe5_frequence: "Pour la mission du khalifa, le Livre est l'outil de la mission. Le khalifa doit lire, comprendre et appliquer le Livre — pas le cacher ou le negliger. Recevoir le Livre et le cacher c'est trahir la mission. Le Livre est le guide permanent du khalifa."
            },
            "Écriture/Inscription": {
              status: "probable",
              senses: ["écrire", "dicter", "demander d'écrire", "écrire à quelqu'un", "s'inscrire", "copier un livre", "art de l'écriture", "scribe", "savant", "école", "enseignant", "vendeur de livres"],
              proof_ctx: "Le sens d'ecriture est un sens majeur de k-t-b — l'acte de tracer des signes. La distinction philosophique avec le Livre est que l'ecriture est l'acte (tracer), tandis que le Livre est le resultat (le support contenant le texte). Le verset parle du Livre comme objet recu et reconnu, pas de l'acte d'ecrire.",
              axe1_verset: "Le mot al-kitab pourrait theoriquement porter le sens d'ecriture. Mais le verset traite le kitab comme un objet donne et recu — on donne un livre, pas un acte d'ecrire. Le sens de livre-objet est plus coherent avec le verbe donner.",
              axe2_voisins: "Les versets voisins (144-148) traitent de la direction de la priere et de la verite reconnue. Le kitab est l'objet de reference qui contient cette verite. Le contexte est la possession et la reconnaissance, pas l'acte d'ecrire.",
              axe3_sourate: "La sourate utilise kitab principalement au sens de livre revele quand il est defini (al-kitab). Le sens d'ecriture apparait dans d'autres contextes comme 2:282 (contrats commerciaux).",
              axe4_coherence: "Quand kitab est defini et complement de atayna (donner), il designe toujours le Livre revele dans le Coran. Le sens d'ecriture est secondaire dans ce contexte.",
              axe5_frequence: "L'acte d'ecrire est un outil du khalifa mais dans ce verset c'est le Livre comme source de connaissance qui est en jeu."
            },
            "Obligation/Décret": {
              status: "nul",
              senses: ["prescrire", "rendre obligatoire", "juger", "décret divin", "prédestination"],
              proof_ctx: "Le sens de decret est hors sujet — le verset parle d'un Livre donne et reconnu, pas d'un decret impose."
            },
            "Assemblage/Couture": {
              status: "nul",
              senses: ["rassembler", "coudre", "attacher"],
              proof_ctx: "Le sens d'assemblage est le sens physique premier de k-t-b. Le contexte est le Livre revele, pas l'acte de coudre ou rassembler."
            }
          }
        }
      },
      // erf pos=4
      {
        word_key: "erf", position: 4, sense_chosen: "reconnaitre",
        analysis_axes: {
          sense_chosen: "reconnaitre",
          concept_chosen: "Connaissance/Reconnaissance",
          concepts: {
            "Connaissance/Reconnaissance": {
              status: "retenu",
              senses: ["connaître", "reconnaître", "bien reconnu", "coutume"],
              proof_ctx: "Le verbe ya'rifunahu est un inaccompli 3MP actif de la forme I de la racine '-r-f avec pronom suffixe 3MS. Le Lane's donne : connaitre, reconnaitre, identifier. La ma'rifa est la connaissance par identification — reconnaitre c'est retrouver ce qu'on connait deja. L'inaccompli indique que cette reconnaissance est continue et actuelle. Le pronom suffixe « hu » renvoie a l'objet reconnu (le Prophete ou la verite). La distinction entre 'arafa (reconnaitre) et 'alima (savoir) est que 'arafa implique une identification personnelle et immediate, tandis que 'alima est un savoir abstrait. Ils reconnaissent la verite comme quelque chose de familier, pas comme un savoir theorique.",
              axe1_verset: "Le verbe ya'rifunahu est le pivot du verset — il etablit que la reconnaissance est acquise et certaine. Le pronom « hu » introduit l'objet reconnu. La comparaison avec la reconnaissance des fils (kama ya'rifuna abna'ahum) intensifie le propos : la reconnaissance est du meme ordre que celle d'un pere envers ses propres fils. Le champ lexical du verset (donner, reconnaitre, fils, cacher, savoir) montre une tension entre la reconnaissance certaine et la dissimulation deliberee. Ils reconnaissent mais ils cachent.",
              axe2_voisins: "Le verset 145 montrait que ceux qui ont recu le Livre ne suivent pas la direction du Prophete. Le verset 146 explique pourquoi c'est grave : ils le reconnaissent pourtant. La reconnaissance rend le refus inexcusable. Le verset 147 affirmera que la verite vient du Seigneur — la reconnaissance humaine confirme la source divine.",
              axe3_sourate: "La racine '-r-f apparait rarement dans la sourate al-Baqarah — ce verset est une des rares occurrences. La raret de la racine rend son usage d'autant plus significatif. En 2:273, on retrouve « tu les reconnais a leur apparence ». La sourate utilise la reconnaissance pour souligner l'evidence — ce qui est reconnu ne peut etre nie de bonne foi.",
              axe4_coherence: "En 6:20, le meme enonce apparait : « ceux a qui Nous avons donne le Livre le reconnaissent comme ils reconnaissent leurs fils ». Cette repetition montre que la reconnaissance est un fait etabli et repete. Le Coran insiste sur la certitude de cette reconnaissance pour montrer que le rejet est un choix delibere, pas une erreur de jugement. En 47:30, « tu les reconnaitrais a leur ton » — la reconnaissance est une capacite naturelle et immediate.",
              axe5_frequence: "Pour la mission du khalifa, la reconnaissance est une responsabilite. Reconnaitre la verite oblige a agir en consequence. Le khalifa qui reconnait ne peut pas cacher — la reconnaissance engage. Cacher ce qu'on reconnait c'est trahir sa propre conscience et sa mission."
            }
          }
        }
      },
      // erf pos=6 (2nd occurrence — dans la comparaison)
      {
        word_key: "erf", position: 6, sense_chosen: "reconnaitre",
        analysis_axes: {
          sense_chosen: "reconnaitre",
          concept_chosen: "Connaissance/Reconnaissance",
          concepts: {
            "Connaissance/Reconnaissance": {
              status: "retenu",
              senses: ["connaître", "reconnaître", "bien reconnu", "coutume"],
              proof_ctx: "Deuxieme occurrence du verbe ya'rifuna dans le verset — ici sans pronom suffixe, dans la comparaison « comme ils reconnaissent leurs fils ». Le Lane's donne le meme sens : reconnaitre, identifier. Cette occurrence sert de terme de comparaison — la reconnaissance de la verite est comparee a la reconnaissance des fils. L'absence de pronom suffixe s'explique par le fait que l'objet (leurs fils) est exprime separement (abna'ahum). Memes sens et meme concept que la premiere occurrence.",
              axe1_verset: "Cette deuxieme occurrence introduit le terme de comparaison. La reconnaissance des fils est l'experience la plus immediate et la plus certaine — un pere reconnait son fils sans hesitation. Le verset utilise cette comparaison pour montrer que la reconnaissance de la verite est du meme degre de certitude. Le parallele cree une evidence : si tu reconnais ton fils sans douter, tu reconnais la verite sans douter non plus.",
              axe2_voisins: "La comparaison avec les fils renforce l'argument du verset 145 — ils ne suivent pas la direction du Prophete non pas par ignorance mais par choix delibere. La reconnaissance est aussi certaine que la reconnaissance parentale. Les versets voisins construisent un argument progressif : ils savent (145), ils reconnaissent comme leurs fils (146), la verite vient du Seigneur (147).",
              axe3_sourate: "La comparaison avec la reconnaissance des fils est unique dans la sourate al-Baqarah. Elle cree un moment d'intensite dans l'argumentation. La sourate utilise des comparaisons concretes pour ancrer la verite dans l'experience humaine — en 2:17, la parabole du feu ; en 2:19, la parabole de l'orage. La reconnaissance des fils est la comparaison la plus intime et la plus irrefutable.",
              axe4_coherence: "La comparaison « comme ils reconnaissent leurs fils » apparait aussi en 6:20. Sa repetition dans le Coran montre que cette image est un argument recurrent et definitif. En 6:20, le verset ajoute « ceux qui se sont perdus eux-memes, ceux-la ne croient pas ». La reconnaissance certaine suivie du refus est une forme de perte de soi — se nier soi-meme en niant l'evidence.",
              axe5_frequence: "Pour la mission du khalifa, la certitude de la reconnaissance est un rappel que la verite est accessible. Le khalifa n'a pas besoin de chercher la verite loin — elle est aussi evidente que son propre fils. La mission commence par la reconnaissance de l'evidence."
            }
          }
        }
      },
      // bny pos=7
      {
        word_key: "bny", position: 7, sense_chosen: "fils",
        analysis_axes: {
          sense_chosen: "fils",
          concept_chosen: "Filiation",
          concepts: {
            "Filiation": {
              status: "retenu",
              senses: ["fils"],
              proof_ctx: "Le mot abna'ahum est un pluriel masculin de la racine b-n-y avec pronom suffixe 3MP. Le Lane's donne : fils, enfants males. Le pluriel abna' est le pluriel brise de ibn (fils). Le pronom suffixe « hum » (leurs) rattache les fils a leurs peres. La filiation est une relation permanente et irrevocable — un fils reste un fils pour toujours. La reconnaissance d'un fils est immediate et instinctive, sans besoin de preuve. La distinction avec la construction (probable) est que le contexte est clairement la parentalite, pas l'architecture.",
              axe1_verset: "Le mot abna'ahum est l'objet de la comparaison — « comme ils reconnaissent leurs fils ». Les fils sont le terme de reference pour la certitude absolue. Le champ lexical du verset oppose la certitude (reconnaitre, fils, savoir) et la dissimulation (cacher, verite). Les fils sont l'ancre de la certitude — si la reconnaissance d'un fils est indubitable, la reconnaissance de la verite l'est aussi.",
              axe2_voisins: "Le verset 145 evoquait l'obstination des destinataires du Livre. Le verset 146 utilise la comparaison avec les fils pour montrer que cette obstination n'est pas de l'ignorance mais du deni. Le verset 147 confirmera la source divine de la verite. La mention des fils humanise l'argument — elle le rend accessible et irrefutable.",
              axe3_sourate: "La racine b-n-y au sens de filiation apparait dans la sourate al-Baqarah sous la forme « bani Isra'il » (fils d'Israel). En 2:40, « o fils d'Israel ». En 2:47, « o fils d'Israel, rappelez-vous Mon bienfait ». La filiation est un theme structurant — les fils d'Israel sont identifies par leur lignee et par les dons qu'ils ont recus. Le verset 146 utilise la filiation dans un sens different — la reconnaissance instinctive du pere envers son fils.",
              axe4_coherence: "La racine b-n-y au sens de fils apparait des centaines de fois dans le Coran. L'expression « fils d'Israel » (bani Isra'il) est l'une des plus frequentes. En 6:20, la meme comparaison est utilisee. La filiation est un lien naturel et indeniable — le Coran l'utilise comme argument pour l'evidence. Nier la verite quand on la reconnait comme son fils c'est nier la nature elle-meme.",
              axe5_frequence: "Pour la mission du khalifa, la filiation est un rappel de la responsabilite. Le fils herite de la mission du pere. Le khalifa est un fils dans la chaine de la transmission — il recoit et il transmet. Reconnaitre la verite comme son fils c'est l'assumer et la porter."
            },
            "Construction/Édification": {
              status: "probable",
              senses: ["construire", "bâtir", "édifier", "donner une maison"],
              proof_ctx: "Le sens de construction est un sens majeur de b-n-y — batir une structure. La distinction philosophique avec la filiation est que la construction est un acte exterieur volontaire, tandis que la filiation est une relation naturelle et permanente. Le verset parle de fils (abna') dans un contexte de reconnaissance parentale — il ne s'agit pas de construire un batiment mais de reconnaitre son propre fils.",
              axe1_verset: "Le mot abna' pourrait theoriquement etre lu comme « structures » ou « edifices ». Mais la comparaison « comme ils reconnaissent leurs abna' » ne fonctionne qu'avec le sens de fils — on reconnait ses fils, pas ses batiments, avec une certitude instinctive.",
              axe2_voisins: "Le contexte des versets 144-148 est la reconnaissance de la verite et la direction de la priere. Le batiment n'a pas de place dans cette argumentation — ce sont les personnes et les relations qui comptent.",
              axe3_sourate: "La sourate utilise b-n-y au sens de construction en 2:127 (Ibrahim et Ismail elevent les fondations de la Maison). Les deux sens coexistent dans la sourate mais le contexte determine le choix.",
              axe4_coherence: "En 6:20, le parallele exact confirme le sens de fils. Le Coran utilise systematiquement abna' au sens de fils quand le contexte est la parentalite.",
              axe5_frequence: "La construction est un acte du khalifa mais dans ce verset c'est la filiation et la reconnaissance qui sont en jeu."
            }
          }
        }
      },
      // frq pos=10
      {
        word_key: "frq", position: 10, sense_chosen: "groupe",
        analysis_axes: {
          sense_chosen: "groupe",
          concept_chosen: "Séparation/Distinction",
          concepts: {
            "Séparation/Distinction": {
              status: "retenu",
              senses: ["séparer", "distinguer", "diviser", "Furqân"],
              proof_ctx: "Le mot fariqan est un nom masculin singulier indefini accusatif de la racine f-r-q. Le Lane's donne : partie separee, groupe distinct. Le firiq est une fraction separee de l'ensemble — le mot porte en lui l'idee de separation. L'indefini (sans article) marque qu'il s'agit d'un groupe non specifie parmi eux. L'accusatif est du a inna (inna fariqan = en verite un groupe). La distinction avec le Furqan est que le mot est ici un nom commun designant un sous-groupe, pas le Discernement divin.",
              axe1_verset: "Le mot fariqan introduit les responsables de la dissimulation — pas tous ceux qui ont recu le Livre, mais un groupe parmi eux. Le verset est precis dans sa distinction : tous reconnaissent (ya'rifunahu, 3MP) mais seul un groupe (fariqan) cache. Le champ lexical oppose la totalite (ceux qui ont recu le Livre, tous reconnaissent) au groupe (un groupe cache). Cette precision montre que le Coran ne generalise pas — le reproche vise un sous-groupe specifique.",
              axe2_voisins: "Le verset 145 parlait de ceux qui ont recu le Livre au pluriel sans distinction. Le verset 146 introduit une nuance : tous reconnaissent mais un groupe seulement cache. Le verset 147 s'adressera au Prophete au singulier. La progression va du general (tous) au particulier (un groupe) au singulier (toi). Le groupe est le maillon coupable dans cette chaine.",
              axe3_sourate: "La racine f-r-q au sens de groupe/partie apparait plusieurs fois dans la sourate al-Baqarah. En 2:75, « un groupe parmi eux entendait la Parole de Dieu ». En 2:85, « un groupe parmi vous ». En 2:100, « un groupe parmi eux ». En 2:101, « un groupe parmi ceux qui ont recu le Livre ». La sourate utilise fariq pour identifier les sous-groupes responsables — la faute n'est pas collective mais le fait d'une fraction.",
              axe4_coherence: "La racine f-r-q apparait environ 72 fois dans le Coran. Le mot fariq designe regulierement une fraction qui s'ecarte de l'ensemble. En 3:23, « un groupe parmi eux se detourne ». Le Coran utilise fariq pour montrer que le rejet est un choix de groupe, pas une fatalite collective — il y a toujours des individus et des groupes qui font des choix differents.",
              axe5_frequence: "Pour la mission du khalifa, le fait qu'un groupe cache la verite montre que la dissimulation est un choix de certains, pas de tous. Le khalifa doit identifier les dissimulateurs sans generaliser — la justice exige de distinguer les responsables."
            },
            "Groupe/Partie": {
              status: "nul",
              senses: ["groupe", "partie"],
              proof_ctx: "Ce sens est englobe par le sens retenu de separation — le firiq est un groupe qui s'est separe, la separation est le fondement du groupement. Le concept de separation est plus large et plus precis."
            }
          }
        }
      },
      // ktm pos=12
      {
        word_key: "ktm", position: 12, sense_chosen: "cacher",
        analysis_axes: {
          sense_chosen: "cacher",
          concept_chosen: "Dissimulation/Secret",
          concepts: {
            "Dissimulation/Secret": {
              status: "retenu",
              senses: ["cacher", "taire", "dissimuler", "garder secret"],
              proof_ctx: "Le verbe layaktumuna est un inaccompli 3MP actif de la racine k-t-m avec le lam emphatique (la- de inna). Le Lane's donne : cacher, taire, dissimuler, garder secret. La dissimulation est un acte delibere — on cache volontairement ce que l'on connait. L'inaccompli avec le lam de inna marque que l'action est en cours, continue et certaine. La racine k-t-m porte l'idee de fermeture — katama c'est fermer, boucher, empecher de sortir. Ils ferment la verite pour qu'elle ne sorte pas, ils la gardent enfermee en eux-memes. Cette racine n'a qu'un seul concept retenu, le choix est immediat.",
              axe1_verset: "Le verbe yaktumuna est l'acte central de la deuxieme partie du verset — la dissimulation. Le verset oppose la reconnaissance (ya'rifunahu) et la dissimulation (yaktumuna). Ils reconnaissent mais ils cachent. L'objet de la dissimulation est la verite (al-haqq). Le champ lexical (reconnaitre, fils, cacher, verite, savoir) montre que la dissimulation est un acte conscient et delibere — ils savent ce qu'ils cachent.",
              axe2_voisins: "Le verset 42 avertissait : « ne confondez pas le vrai avec le faux et ne cachez pas la verite alors que vous savez ». Le verset 146 reprend exactement le meme reproche avec la meme structure : cacher la verite + alors qu'ils savent. Le verset 159 prononcera une malediction contre ceux qui cachent ce que Dieu a revele. La dissimulation est un theme recurrent et grave dans cette section de la sourate.",
              axe3_sourate: "La racine k-t-m apparait dans la sourate al-Baqarah dans un contexte de reproche. En 2:42, « ne cachez pas la verite alors que vous savez ». En 2:140, « qui est plus injuste que celui qui cache un temoignage qu'il a recu de Dieu ». En 2:159, « ceux qui cachent ce que Nous avons revele ». La sourate condamne la dissimulation comme un peche grave car elle prive les autres de la verite.",
              axe4_coherence: "La racine k-t-m apparait environ 37 fois dans le Coran. En 2:283, « ne cachez pas le temoignage ». En 3:71, « pourquoi habillez-vous le vrai de faux et cachez-vous la verite alors que vous savez ». Le Coran associe systematiquement la dissimulation au savoir — ceux qui cachent savent. La dissimulation est plus grave que l'ignorance car elle est deliberee.",
              axe5_frequence: "Pour la mission du khalifa, la dissimulation de la verite est une trahison de la mission. Le khalifa est charge de temoigner et de transmettre — cacher c'est trahir le mandat divin. La verite est faite pour etre manifestee, pas enfermee."
            }
          }
        }
      },
      // hqq pos=13
      {
        word_key: "hqq", position: 13, sense_chosen: "verite",
        analysis_axes: {
          sense_chosen: "verite",
          concept_chosen: "Vérité/Réalité",
          concepts: {
            "Vérité/Réalité": {
              status: "retenu",
              senses: ["être vrai", "vérité", "réalité", "droit"],
              proof_ctx: "Le nom al-haqqa est un nom masculin singulier defini accusatif de la racine h-q-q. Le Lane's donne : verite, realite, droit, ce qui est etabli et confirme. Le haqq est ce qui correspond a la realite objective — il existe independamment de celui qui le reconnait ou le nie. L'article defini (al-) marque que c'est LA verite specifique — la verite connue qu'ils cachent deliberement. L'accusatif indique qu'il est le complement direct de yaktumuna (ils cachent). La distinction avec l'obligation (nul) est que le contexte est la verite reconnue et dissimilee, pas un devoir impose.",
              axe1_verset: "Le mot al-haqq est l'objet de la dissimulation — c'est la verite que le groupe cache. Le verset construit une progression : ils ont recu le Livre → ils reconnaissent → un groupe cache la verite → alors qu'ils savent. La verite est au centre de cette tension — elle est connue, reconnue, mais cachee. Le haqq est l'enjeu du verset : la verite existe, elle est reconnue, mais elle est deliberement soustraite a la connaissance des autres.",
              axe2_voisins: "Le verset 42 utilisait deja al-haqq dans le meme contexte : « ne cachez pas la verite ». Le verset 147 ouvrira avec « la verite vient de ton Seigneur » — le haqq est a la fois l'objet cache (146) et la realite affirmee (147). Les versets 146-147 forment un diptyque : la verite cachee par les hommes / la verite affirmee par Dieu.",
              axe3_sourate: "La racine h-q-q est une racine structurante de la sourate al-Baqarah. En 2:26, « ils savent que c'est la verite venant de leur Seigneur ». En 2:42, « ne confondez pas le vrai avec le faux ». En 2:91, « alors que c'est la verite confirmant ce qui est avec eux ». La sourate oppose constamment la verite et sa dissimulation — le haqq est le critere de jugement.",
              axe4_coherence: "La racine h-q-q apparait environ 287 fois dans le Coran. Le haqq est un des attributs de Dieu — Il est al-Haqq (la Verite). En 22:6, « Dieu est la Verite ». La verite n'est pas une opinion mais une realite objective liee a Dieu Lui-meme. Cacher la verite c'est cacher quelque chose qui appartient a Dieu.",
              axe5_frequence: "Pour la mission du khalifa, la verite est le fondement de la mission. Le khalifa est charge de manifester la verite, pas de la cacher. La verite (al-haqq) est le critere de la mission — tout ce qui s'ecarte de la verite est un ecart de mission."
            },
            "Obligation/Nécessité": {
              status: "nul",
              senses: ["devoir", "mériter", "être obligatoire"],
              proof_ctx: "Le sens d'obligation est hors sujet — le contexte est la verite reconnue et cachee, pas un devoir impose."
            }
          }
        }
      },
      // elm pos=16
      {
        word_key: "elm", position: 16, sense_chosen: "savoir",
        analysis_axes: {
          sense_chosen: "savoir",
          concept_chosen: "Savoir/Connaissance",
          concepts: {
            "Savoir/Connaissance": {
              status: "retenu",
              senses: ["savoir", "connaître", "être informé", "certitude", "savant", "science", "enseignement"],
              proof_ctx: "Le verbe ya'lamuna est un inaccompli 3MP actif de la racine '-l-m. Le Lane's donne : savoir, connaitre, etre informe. L'inaccompli indique un etat permanent — ils savent en permanence, pas ponctuellement. La phrase circonstancielle « wa-hum ya'lamuna » (alors qu'ils savent) aggrave le reproche : la dissimulation est faite en pleine connaissance de cause. La distinction entre 'alima (savoir) et 'arafa (reconnaitre) est que 'alima est un savoir abstrait et global, tandis que 'arafa est une identification concrete. Le verset utilise les deux : ils reconnaissent ('arafa, identification) ET ils savent ('alima, savoir global).",
              axe1_verset: "Le verbe ya'lamuna ferme le verset avec la phrase circumstancielle « alors qu'ils savent ». Cette cloture est decisive — elle transforme la dissimulation en acte delibere. Sans ce « ils savent », la dissimulation pourrait etre excusee par l'ignorance. Avec « ils savent », elle devient un choix conscient. Le verset utilise deux verbes de connaissance : ya'rifuna (reconnaitre) et ya'lamuna (savoir) — la double attestation rend le reproche irrefutable.",
              axe2_voisins: "Le verset 42 contenait la meme formule : « ne cachez pas la verite alors que vous savez ». Le verset 146 reprend cette formule exacte. Le verset 145 montrait leur refus de suivre malgre les preuves. L'ensemble (145-146) montre que le refus et la dissimulation sont faits en connaissance de cause — le savoir est la preuve de la culpabilite.",
              axe3_sourate: "La racine '-l-m est la racine la plus frequente de la sourate al-Baqarah apres la racine alh. En 2:13, « ce sont eux les imbeciles mais ils ne savent pas ». En 2:30, « Je sais ce que vous ne savez pas ». En 2:77, « ne savent-ils pas que Dieu sait ce qu'ils cachent ? ». La sourate oppose le savoir de Dieu (total) au savoir des humains (partiel et parfois trahi).",
              axe4_coherence: "La racine '-l-m apparait environ 854 fois dans le Coran. La formule « wa-hum ya'lamuna » (alors qu'ils savent) est un refrain coranique qui apparait dans de nombreux versets de reproche. En 2:75, 2:146, 3:71 — la formule souligne que le reproche vise ceux qui savent et choisissent de cacher ou de desobir. Le savoir est une responsabilite — il rend le choix de la dissimulation inexcusable.",
              axe5_frequence: "Pour la mission du khalifa, le savoir engage. Savoir et ne pas agir c'est trahir la mission. Le khalifa est responsable de ce qu'il sait — la dissimulation deliberee du savoir est le pire des manquements a la mission."
            },
            "Monde/Création": {
              status: "nul",
              senses: ["monde", "les mondes", "ensemble des créatures", "univers"],
              proof_ctx: "Le sens de monde est hors sujet — le verbe ya'lamuna est un verbe de connaissance, pas un nom designant l'univers."
            },
            "Marque/Signe": {
              status: "nul",
              senses: ["marquer", "signe", "drapeau", "montagne", "repère", "étendard"],
              proof_ctx: "Le sens de marque est hors sujet — le verbe est « savoir », pas « marquer »."
            }
          }
        }
      }
    ]
  },

  // =======================================================
  // VERSET 147
  // "La verite vient de ton seigneur. Ne sois donc pas
  //  de ceux qui doutent."
  // =======================================================
  147: {
    verse_id: 154,
    analysis_id: 513,
    translation_arab: "La verite vient de ton seigneur. Ne sois donc pas de ceux qui doutent.",
    full_translation: "La verite vient de ton Seigneur. Ne sois donc pas de ceux qui doutent.",
    translation_explanation: `§DEMARCHE§
Le verset est une affirmation divine adressee au Prophete : la verite est etablie et vient de Dieu, il n'y a pas de place pour le doute. Le nom **al-haqqu** est un nom masculin singulier defini nominatif de la racine h-q-q. Le Lane's donne : verite, realite, ce qui est etabli. Le nominatif indique que la verite est le sujet de la phrase nominale — elle est l'acteur principal. L'article defini (al-) marque que c'est LA verite absolue, pas une verite parmi d'autres. La preposition **min** (de) indique l'origine — la verite provient de. Le nom **rabbika** est un nom masculin singulier de la racine r-b-b avec pronom suffixe 2MS (ka, ton). Le Lane's donne : seigneur, maitre, celui qui fait grandir et entretient. Le mot rabb designe l'autorite bienveillante. Le pronom « ka » (ton) s'adresse au Prophete directement — « ton seigneur » cree une relation personnelle et directe. La verite vient de ton seigneur a toi — c'est une confirmation personnelle. La particule **fa** (donc) introduit la consequence logique : puisque la verite vient de ton seigneur, donc ne doute pas. La negation **la** (ne pas) avec le verbe **takunanna** (sois) a l'apocopee energetique cree une interdiction forte. Le verbe takunanna est un inaccompli 2MS de la racine k-w-n avec le nun de l'energique. Le Lane's donne pour le verbe kana : etre, exister. L'energique (nun lourde) ajoute de l'insistance — « ne sois absolument pas ». La preposition **mina** (de, parmi) introduit la categorie dont il ne faut pas faire partie. Le participe actif **al-mumtarina** est un pluriel masculin defini genitif de la forme VIII de la racine m-r-y. Le Lane's donne pour la forme VIII : douter, etre dans l'incertitude, contester. Le mumtari est celui qui est dans le doute, l'hesitation. L'article defini (al-) et le genitif (apres mina) marquent une categorie — les douteurs sont un groupe defini et connu. Le Prophete est mis en garde de ne pas appartenir a cette categorie.

§JUSTIFICATION§
**la verite** — Le sens retenu est « verite ». Le mot al-haqq au nominatif est le sujet de la phrase — c'est la verite elle-meme qui est affirmee. L'alternative « droit » est ecartee car le contexte est l'affirmation de la verite face a la dissimulation du verset precedent.

**ton seigneur** — Le sens retenu est « seigneur ». Le mot rabbika designe l'autorite bienveillante qui s'adresse au Prophete. L'alternative « augmenter » est ecartee car le contexte est la relation de seigneurie, pas une augmentation.

**ne sois pas** — Le sens retenu est « etre ». Le verbe takunanna est le verbe d'existence kana a l'apocopee energetique avec negation. L'alternative « lieu » est ecartee car le mot est un verbe, pas un nom.

**ceux qui doutent** — Le sens retenu est « douter ». Le participe al-mumtarina de la forme VIII de m-r-y designe ceux qui sont dans le doute. L'alternative « passer » est ecartee car la racine m-r-y a la forme VIII porte specifiquement le sens de douter et contester, distinct du sens de « passer » qui releve de la forme I. Le doute est un etat d'hesitation qui empeche l'action — le Prophete doit en etre exempt.

§CRITIQUE§
Les traductions courantes sont unanimes sur le sens de ce verset court. Hamidullah donne « la verite vient de ton Seigneur. Ne sois donc pas de ceux qui doutent. » — notre traduction est identique dans sa structure et son sens. La seule observation est le ton energetique du verbe takunanna (avec le nun de l'energique) qui n'est pas rendu dans les traductions courantes. Ce nun ajoute de l'insistance — l'interdiction est appuyee, absolue. Notre traduction ne peut pas rendre cette nuance en francais courant sans alourdir la phrase.`,
    segments: [
      { fr: "la verite", pos: "nom", phon: "al-haqqu", arabic: "\u0671\u0644\u0652\u062d\u064e\u0642\u0651\u064f", word_key: "hqq", is_particle: false, sense_retenu: "verite", position: 1 },
      { fr: "de", phon: "min", arabic: "\u0645\u0650\u0646", is_particle: true, position: 2 },
      { fr: "ton seigneur", pos: "nom", phon: "rabbika", arabic: "\u0631\u0651\u064e\u0628\u0651\u0650\u0643\u064e", word_key: "rbb", is_particle: false, sense_retenu: "seigneur", position: 3 },
      { fr: "donc", phon: "fa", arabic: "\u0641\u064e", is_particle: true, position: 4 },
      { fr: "ne", phon: "la", arabic: "\u0644\u064e\u0627", is_particle: true, position: 5 },
      { fr: "sois pas", pos: "verbe", phon: "takunanna", arabic: "\u062a\u064e\u0643\u064f\u0648\u0646\u064e\u0646\u0651\u064e", word_key: "kwn", is_particle: false, sense_retenu: "etre", position: 6 },
      { fr: "de", phon: "mina", arabic: "\u0645\u0650\u0646\u064e", is_particle: true, position: 7 },
      { fr: "ceux qui doutent", pos: "participe_actif", phon: "al-mumtarina", arabic: "\u0671\u0644\u0652\u0645\u064f\u0645\u0652\u062a\u064e\u0631\u0650\u064a\u0646\u064e", word_key: "mry", is_particle: false, sense_retenu: "douter", position: 8 }
    ],
    words: [
      // hqq pos=1
      {
        word_key: "hqq", position: 1, sense_chosen: "verite",
        analysis_axes: {
          sense_chosen: "verite",
          concept_chosen: "Vérité/Réalité",
          concepts: {
            "Vérité/Réalité": {
              status: "retenu",
              senses: ["être vrai", "vérité", "réalité", "droit"],
              proof_ctx: "Le nom al-haqqu est un nom masculin singulier defini nominatif de la racine h-q-q. Le Lane's donne : verite, realite, ce qui est confirme et etabli. Le nominatif marque que la verite est le sujet de la phrase nominale — elle est affirmee comme une realite autonome. L'article defini (al-) indique que c'est LA verite absolue. La distinction avec l'obligation (nul) est que le contexte est l'affirmation de la verite comme source divine, pas un devoir impose.",
              axe1_verset: "Le mot al-haqq ouvre le verset en position sujet — la verite est la premiere realite affirmee. La phrase nominale « al-haqqu min rabbika » (la verite de ton seigneur) etablit la source de la verite : elle vient de Dieu, pas des hommes. Le verset enchaine : puisque la verite vient de Dieu, ne doute pas. Le champ lexical (verite, seigneur, douter) montre un mouvement de la certitude (verite) vers l'interdiction du doute — la certitude de la source annule tout doute.",
              axe2_voisins: "Le verset 146 montrait que ceux qui ont recu le Livre cachent la verite (al-haqq). Le verset 147 repond : la verite (al-haqq) vient de ton seigneur — meme si les hommes la cachent, sa source est divine et inalterable. Le verset 148 donnera un ordre d'action (rivalisez dans les bonnes oeuvres). L'ensemble forme une progression : la verite est cachee (146) / la verite est divine (147) / agissez (148).",
              axe3_sourate: "Le mot al-haqq apparait de nombreuses fois dans la sourate al-Baqarah. En 2:26, « ils savent que c'est la verite de leur Seigneur ». En 2:119, « Nous t'avons envoye avec la verite ». La sourate affirme la verite comme une constante divine face aux dissimulations humaines. Le verset 147 s'inscrit dans cette affirmation permanente.",
              axe4_coherence: "La racine h-q-q apparait environ 287 fois dans le Coran. L'expression « al-haqqu min rabbika » (la verite de ton seigneur) apparait aussi en 2:149, 3:60, 10:94. C'est une formule d'affirmation solennelle qui etablit la source divine de la verite. Le Coran repete cette formule pour ancrer la certitude.",
              axe5_frequence: "Pour la mission du khalifa, la verite divine est le fondement de la mission. La verite ne depend pas des hommes — elle vient de Dieu. Le khalifa peut s'appuyer sur cette certitude meme quand les hommes cachent ou nient. La source divine de la verite est la garantie de la mission."
            },
            "Obligation/Nécessité": {
              status: "nul",
              senses: ["devoir", "mériter", "être obligatoire"],
              proof_ctx: "Le sens d'obligation est hors sujet — le contexte est l'affirmation de la verite divine, pas un devoir impose."
            }
          }
        }
      },
      // rbb pos=3
      {
        word_key: "rbb", position: 3, sense_chosen: "seigneur",
        analysis_axes: {
          sense_chosen: "seigneur",
          concept_chosen: "Seigneurie/Autorité bienveillante",
          concepts: {
            "Seigneurie/Autorité bienveillante": {
              status: "retenu",
              senses: ["seigneur", "maître", "propriétaire", "celui qui élève", "celui qui entretient", "celui qui possède", "gouverner"],
              proof_ctx: "Le nom rabbika est un nom masculin singulier de la racine r-b-b au genitif avec pronom suffixe 2MS (ka, ton). Le Lane's donne : seigneur, maitre, celui qui fait grandir, celui qui entretient et prend soin. Le rabb est l'autorite bienveillante qui eleve, nourrit et gouverne. Le pronom « ka » (ton) cree une relation directe et personnelle — « ton seigneur » s'adresse au Prophete comme une confirmation intime. La distinction avec la croissance (probable) est que le contexte est la source de la verite, pas une augmentation physique.",
              axe1_verset: "Le mot rabbika est la source de la verite — « la verite de ton seigneur ». Le rabb est celui d'ou la verite emane. Le verset etablit un lien direct entre la verite et le seigneur : la verite n'est pas une opinion humaine, elle vient de l'autorite bienveillante qui gouverne. Le pronom « ton » personnalise la relation — Dieu s'adresse au Prophete comme son seigneur personnel, pas comme une autorite lointaine.",
              axe2_voisins: "Le verset 144 utilisait rabbika dans « Nous te voyons tourner ton visage vers le ciel. Nous te tournerons vers une direction qui te satisfait ». Le verset 147 reprend rabbika pour confirmer : la verite vient de cette meme autorite. Le verset 149 utilisera aussi « de ton seigneur ». La repetition de rabbika dans ces versets montre que la direction de la priere et la verite ont la meme source.",
              axe3_sourate: "Le mot rabb est un des mots les plus frequents de la sourate al-Baqarah. En 2:5, « ceux-la sont sur une guidance de leur seigneur ». En 2:30, « ton seigneur dit aux anges ». La sourate presente le rabb comme l'autorite qui guide, commande et prend soin. Le verset 147 s'inscrit dans ce schema — le seigneur est la source de la verite et de la guidance.",
              axe4_coherence: "La racine r-b-b apparait environ 970 fois dans le Coran. Le mot rabb est le deuxieme nom divin le plus frequent apres Allah. En 1:2, « louange a Dieu, seigneur des mondes ». Le rabb est l'autorite qui fait grandir et qui gouverne — la verite qui emane de lui porte cette autorite. L'expression « min rabbika » (de ton seigneur) confere a la verite une autorite irrecusable.",
              axe5_frequence: "Pour la mission du khalifa, le seigneur est le mandant de la mission. La verite vient de lui — elle porte son autorite. Le khalifa agit sous l'autorite de son seigneur, pas de sa propre autorite. La verite du seigneur est la boussole de la mission."
            },
            "Croissance/Augmentation": {
              status: "probable",
              senses: ["augmenter", "croître", "faire grandir", "nourrir", "développer"],
              proof_ctx: "Le sens de croissance est le sens premier de r-b-b — augmenter, faire grandir. La distinction philosophique avec la seigneurie est que la croissance est un processus physique, tandis que la seigneurie est une autorite relationnelle. Le verset parle de « ton seigneur » comme source de verite — le contexte est l'autorite et la source, pas la croissance physique. Cependant le lien est profond : le rabb fait grandir, il eleve — la seigneurie inclut la dimension de l'elevation.",
              axe1_verset: "Le mot rabbika pourrait theoriquement porter le sens de « celui qui te fait grandir ». La verite vient de celui qui te fait grandir — le sens est coherent mais secondaire. Le verset met l'accent sur la source de la verite, pas sur la croissance.",
              axe2_voisins: "Les versets voisins utilisent rabbika dans le contexte de la direction et de la verite — la seigneurie comme source d'autorite est le sens dominant.",
              axe3_sourate: "La sourate utilise rabb principalement au sens de seigneur-autorite, pas de croissance physique.",
              axe4_coherence: "Le Coran utilise rabb dans les deux sens selon le contexte. Quand rabb est suivi d'un pronom personnel et dans un contexte de revelation, c'est le sens de seigneur qui domine.",
              axe5_frequence: "La croissance est un aspect de la seigneurie — le seigneur fait grandir. Mais dans ce verset c'est la source de la verite qui est en jeu."
            },
            "Éducation/Accompagnement": {
              status: "nul",
              senses: ["élever un enfant", "éduquer", "former", "accompagner la croissance"],
              proof_ctx: "Le sens d'education est derive de la seigneurie — le rabb eleve et eduque. Le contexte est la source de la verite, pas l'education."
            }
          }
        }
      },
      // kwn pos=6
      {
        word_key: "kwn", position: 6, sense_chosen: "etre",
        analysis_axes: {
          sense_chosen: "etre",
          concept_chosen: "Être/Existence",
          concepts: {
            "Être/Existence": {
              status: "retenu",
              senses: ["être (verbe incomplet)", "venir à l'existence"],
              proof_ctx: "Le verbe takunanna est un inaccompli 2MS de la racine k-w-n a l'apocopee energetique (nun lourde) avec negation la. Le Lane's donne : etre, exister, devenir. Ici le verbe kana est incomplet — il sert de support grammatical pour l'interdiction « ne sois pas ». Le nun de l'energique ajoute de l'insistance — c'est une interdiction appuyee, presque un serment. La negation la + inaccompli apocopee + nun energetique = l'interdiction la plus forte possible. La distinction avec « lieu » (nul) est evidente : le mot est un verbe, pas un nom.",
              axe1_verset: "Le verbe takunanna est le support de l'interdiction — « ne sois pas de ceux qui doutent ». Le verbe etre est incomplet ici : il ne decrit pas une existence mais une appartenance a une categorie. L'interdiction est de ne pas ETRE (faire partie de) ceux qui doutent. Le champ lexical (verite, seigneur, douter) montre que l'interdiction est la consequence de l'affirmation : puisque la verite vient de ton seigneur, l'etre-douteur est interdit.",
              axe2_voisins: "Le verset 146 montrait ceux qui cachent la verite. Le verset 147 s'adresse au Prophete : ne sois pas de ceux qui doutent. L'interdiction implicite est : ne sois pas comme eux — ceux qui savent mais cachent. Le verset 148 donnera un ordre positif (rivalisez). La progression va de l'interdiction negative (ne sois pas) a l'ordre positif (rivalisez).",
              axe3_sourate: "Le verbe kana apparait de tres nombreuses fois dans la sourate al-Baqarah. En 2:143, « Dieu n'est pas tel qu'il laisserait perdre votre foi ». En 2:144, « tourne ton visage ». Le verbe kana est le support grammatical qui porte le temps et la negation dans les phrases complexes de la sourate.",
              axe4_coherence: "La racine k-w-n est la racine la plus frequente du Coran. Le verbe kana a l'energique avec negation (la takunanna) apparait dans plusieurs versets d'interdiction forte. En 6:35, « ne sois pas de ceux qui ignorent ». En 10:94, « ne sois pas de ceux qui doutent ». La formule est recurrente et marque une interdiction divine solennelle.",
              axe5_frequence: "Pour la mission du khalifa, l'interdiction de douter est un rappel de la certitude necessaire a la mission. Le khalifa ne peut pas douter de la verite qui vient de son seigneur — le doute paralyse la mission. L'etre du khalifa doit etre fonde sur la certitude."
            },
            "Humilité/Soumission": {
              status: "nul",
              senses: ["être humble soumis"],
              proof_ctx: "Le sens d'humilite est hors sujet — le verbe est le verbe incomplet « etre », pas un verbe d'humilite."
            },
            "Lieu/État": {
              status: "nul",
              senses: ["lieu", "état condition"],
              proof_ctx: "Le sens de lieu est hors sujet — le mot est un verbe d'existence, pas un nom de lieu."
            }
          }
        }
      },
      // mry pos=8
      {
        word_key: "mry", position: 8, sense_chosen: "douter",
        analysis_axes: {
          sense_chosen: "douter",
          concept_chosen: "Doute/Contestation",
          concepts: {
            "Doute/Contestation": {
              status: "retenu",
              senses: ["douter", "contester"],
              proof_ctx: "Le mot al-mumtarina est un participe actif pluriel masculin defini genitif de la forme VIII (ifta'ala) de la racine m-r-y. Le Lane's donne pour la forme VIII : douter, etre dans l'incertitude, contester la verite. Le mumtari est celui qui hesite et ne tranche pas — il reste dans le doute au lieu d'accepter la verite. La forme VIII (ifta'ala) marque l'interieur — le doute est un etat interieur d'hesitation. L'article defini (al-) fait des douteurs une categorie connue et definie. Le genitif suit la preposition mina (parmi). La distinction avec « passer » (sens de la forme I m-r-r) est evidente — la forme VIII de m-r-y est specifiquement le doute, pas le passage. Note : la racine dans les concepts est listee comme m-r-r mais le mot mumtari vient de m-r-y a la forme VIII.",
              axe1_verset: "Le mot al-mumtarina ferme le verset en definissant la categorie a eviter — ceux qui doutent. Le verset est structure en deux parties : affirmation (la verite de ton seigneur) et interdiction (ne sois pas des douteurs). Le doute est l'oppose de la certitude que procure la verite divine. Le Prophete est mis en garde contre cette categorie — le doute est incompatible avec la mission prophetique.",
              axe2_voisins: "Le verset 146 montrait ceux qui reconnaissent mais cachent. Le verset 147 avertit le Prophete de ne pas douter. Le verset 148 donnera un ordre d'action. La progression est : reconnaitre/cacher (146) → ne pas douter (147) → agir (148). Le doute est l'etape intermediaire entre la reconnaissance et l'inaction.",
              axe3_sourate: "La racine m-r-y au sens de doute apparait rarement dans la sourate al-Baqarah — ce verset est une des rares occurrences. La rarete du mot rend l'avertissement d'autant plus significatif. En 2:23, « si vous etes dans le doute au sujet de ce que Nous avons fait descendre ». La sourate traite le doute comme un obstacle a surmonter par la preuve.",
              axe4_coherence: "La forme VIII de m-r-y apparait environ 10 fois dans le Coran. En 10:94, « si tu es dans le doute au sujet de ce que Nous t'avons revele, interroge ceux qui lisent le Livre avant toi ». En 11:17, « ne sois pas dans le doute a son sujet ». Le Coran utilise cette forme pour designer le doute paralysant — celui qui empeche d'accepter la verite. L'avertissement est adresse au Prophete mais vise aussi les croyants par extension.",
              axe5_frequence: "Pour la mission du khalifa, le doute est l'ennemi de la mission. Le khalifa ne peut pas hesiter quand la verite est etablie. Le doute paralyse l'action et ouvre la porte a la dissimulation. La certitude est la condition de l'action — douter c'est s'arreter."
            }
          }
        }
      }
    ]
  },

  // =======================================================
  // VERSET 148
  // "Et a chacun une direction vers laquelle il se tourne.
  //  Rivalisez donc dans les bonnes oeuvres. Ou que vous
  //  soyez, Dieu vous amenera tous. En verite Dieu est sur
  //  chaque chose puissant."
  // =======================================================
  148: {
    verse_id: 155,
    analysis_id: 515,
    translation_arab: "Et a chacun une direction vers laquelle il se tourne. Rivalisez donc dans les bonnes oeuvres. Ou que vous soyez, Dieu vous amenera tous. En verite Dieu est sur chaque chose puissant.",
    full_translation: "A chacun une direction vers laquelle il se tourne. Rivalisez donc dans les bonnes oeuvres. Ou que vous soyez, Allah vous ramenera tous vers Lui, car Allah est, certes Omnipotent.",
    translation_explanation: `§DEMARCHE§
Le verset contient trois propositions liees : la diversite des directions, l'ordre de rivaliser dans le bien, et la promesse du rassemblement final. Le nom **kullin** est un nom masculin singulier indefini de la racine k-l-l au genitif (apres la preposition li). Le Lane's donne pour kull : totalite, chaque, tout. Le tanwin (in) marque l'indefini — « a chacun » sans specifier qui, ce qui rend l'enonce universel. Le nom **wijhatun** est un nom feminin singulier indefini nominatif de la racine w-j-h. Le Lane's donne : direction, orientation, cote vers lequel on se tourne. Le mot wijha est derive de wajh (visage, face) — la direction est « le cote vers lequel le visage se tourne ». Le nominatif marque que la direction est le sujet de la phrase — c'est elle qui existe, pas un verbe qui la cree. Le pronom **huwa** (il) est un pronom de rappel emphatique 3MS qui renvoie a « chacun ». Le participe actif **muwallihaa** est un participe actif masculin singulier de la forme II de la racine w-l-y avec pronom suffixe 3FS (ha, elle = la direction). Le Lane's donne pour la forme II (walla) : tourner vers, se diriger vers, donner l'autorite a. Le participe actif indique un etat permanent — il est celui qui se tourne vers elle. Le pronom « ha » (elle) renvoie a la direction (wijha, feminin). Le verbe **istabiqu** est un imperatif 2MP de la forme X de la racine s-b-q. Le Lane's donne pour la forme X : chercher a devancer, rivaliser, se presser vers. La forme X (istaf'ala) marque la recherche active — istabiq c'est chercher a etre le premier. L'imperatif pluriel s'adresse a tous les croyants. Le consequentiel fa (donc) lie l'ordre a ce qui precede : puisque chacun a une direction, donc rivalisez. Le nom **al-khayrati** est un nom feminin pluriel defini genitif de la racine kh-y-r. Le Lane's donne : biens, bonnes oeuvres, choses excellentes. Le pluriel (khayrat) marque la multiplicite des bonnes oeuvres. L'article defini (al-) marque que ce sont LES bonnes oeuvres connues — pas n'importe quoi, mais les oeuvres reconnues comme bonnes. L'adverbe interrogatif **ayna** est de la racine a-y-n. Le Lane's donne : ou, en quel lieu. Ici ayna + ma (ou que) introduit une condition de lieu — ou que vous soyez, quel que soit le lieu. Le verbe **takunu** est un inaccompli 2MP de la racine k-w-n. Le Lane's donne : etre. L'inaccompli apres ayna ma marque une condition — ou que vous soyez, dans quelque situation que vous soyez. Le verbe **ya'ti** est un inaccompli 3MS de la forme I de la racine a-t-y. Le Lane's donne : venir, amener. L'inaccompli marque l'avenir — Dieu amenera. Le verbe est transitif avec la preposition bi (avec, par) — ya'ti bikum = Il viendra avec vous = Il vous amenera. Le nom **Allahu** est le nom propre de la divinite au nominatif — Il est le sujet du verbe ya'ti. Le nom **jami'an** est un nom masculin singulier indefini accusatif de la racine j-m-'. Le Lane's donne : tous ensemble, collectivement. L'accusatif marque le hal (etat) — Il vous amenera tous ensemble, dans un etat de rassemblement. La particule **inna** (en verite) ouvre la derniere proposition avec emphase. Le nom **Allaha** est le nom propre au accusatif (complement de inna). L'expression **'ala kulli shay'in** (sur chaque chose) precise l'etendue du pouvoir divin — il couvre tout, sans exception. Le nom **shay'in** est un nom masculin singulier indefini de la racine sh-y-a. Le Lane's donne : chose, toute entite. L'indefini avec kull (chaque) cree une universalite totale — chaque chose sans exception. L'adjectif **qadirun** est un adjectif masculin singulier indefini nominatif de la racine q-d-r. Le Lane's donne : puissant, capable. Le qadir est celui qui a le pouvoir de faire — la puissance est la capacite de realiser. L'indefini nominatif est le khabar (attribut) de inna — Dieu est puissant.

§JUSTIFICATION§
**chacun** — Le sens retenu est « totalite ». Le mot kull au singulier indefini signifie « chaque » — l'universalite sans exception. L'alternative « emoussement » est ecartee car le contexte est l'universalite, pas la faiblesse.

**direction** — Le sens retenu est « direction ». Le mot wijha derive de wajh (visage) designe le cote vers lequel on se tourne. L'alternative « maniere » est ecartee car le contexte est la direction de la priere (qibla), pas une maniere de faire.

**se tourne** — Le sens retenu est « se diriger vers ». Le participe muwallihaa de la forme II de w-l-y designe celui qui se tourne vers une direction. L'alternative « protecteur » est ecartee car le mot est un participe actif de la forme II (tourner vers), pas un nom d'agent de la forme I (proteger).

**rivalisez** — Le sens retenu est « chercher a devancer ». Le verbe istabiqu a la forme X designe la competition active vers un objectif. L'alternative « preceder » est plus neutre — « rivaliser » rend mieux le sens competitif de la forme X.

**bonnes oeuvres** — Le sens retenu est « bien ». Le pluriel al-khayrat designe les bonnes oeuvres, les choses excellentes. L'alternative « meilleur » est le comparatif qui n'est pas en jeu ici — le mot est un pluriel qui designe les bonnes oeuvres en general.

**ou que** — Le sens retenu est « ou ». L'adverbe ayna designe le lieu interrogatif. Il n'y a pas d'alternative pertinente — ayna est univoque.

**amenera** — Le sens retenu est « venir/amener ». Le verbe ya'ti avec la preposition bi signifie amener. L'alternative « detruire » est ecartee car le contexte est le rassemblement, pas la destruction.

**Dieu** — Le sens retenu est « Dieu ». Le nom Allah est le nom propre de la divinite. Pas d'alternative pertinente.

**tous** — Le sens retenu est « rassembler ». Le mot jami'an signifie tous ensemble, collectivement. L'alternative « vendredi » est ecartee car le mot est un adverbe d'etat, pas un nom de jour.

**chose** — Le sens retenu est « chose ». Le mot shay' designe toute entite existante. L'alternative « vouloir » est ecartee car le mot est un nom (chose), pas un verbe (vouloir).

**puissant** — Le sens retenu est « puissant ». L'adjectif qadir designe celui qui a le pouvoir. L'alternative « mesurer » est ecartee car le mot est un adjectif qualificatif, pas un verbe d'action.

§CRITIQUE§
Les traductions courantes sont globalement concordantes pour ce verset. Hamidullah traduit muwallihaa par « vers laquelle il se tourne » — nous gardons la meme formulation. Pour fa-stabiqu, Hamidullah donne « rivalisez » — nous gardons ce choix car la forme X rend bien l'idee de competition active. Pour ya'ti bikum, Hamidullah donne « vous ramenera » qui implique un retour, alors que le verbe ata + bi signifie plus exactement « amener, venir avec ». Nous choisissons « amenera » qui est plus fidele au sens premier — Dieu amenera tous les hommes vers Lui, pas necessairement un retour. La nuance est minime et n'affecte pas le sens global.`,
    segments: [
      { fr: "et", phon: "wa", arabic: "\u0648\u064e", is_particle: true, position: 1 },
      { fr: "pour", phon: "li", arabic: "\u0644\u0650", is_particle: true, position: 2 },
      { fr: "chacun", pos: "nom", phon: "kullin", arabic: "\u0643\u064f\u0644\u0651\u064d", word_key: "kll", is_particle: false, sense_retenu: "chacun", position: 3 },
      { fr: "une direction", pos: "nom", phon: "wijhatun", arabic: "\u0648\u0650\u062c\u0652\u0647\u064e\u0629\u064c", word_key: "wjh", is_particle: false, sense_retenu: "direction", position: 4 },
      { fr: "il", pos: "pronom", phon: "huwa", arabic: "\u0647\u064f\u0648\u064e", word_key: "huwa", is_particle: false, sense_retenu: "il", position: 5 },
      { fr: "se tourne vers elle", pos: "participe_actif", phon: "muwallihaa", arabic: "\u0645\u064f\u0648\u064e\u0644\u0651\u0650\u064a\u0647\u064e\u0627", word_key: "wly", is_particle: false, sense_retenu: "se tourner vers", position: 6 },
      { fr: "donc", phon: "fa", arabic: "\u0641\u064e", is_particle: true, position: 7 },
      { fr: "rivalisez", pos: "verbe", phon: "istabiqu", arabic: "\u0671\u0633\u0652\u062a\u064e\u0628\u0650\u0642\u064f\u0648\u0627\u06df", word_key: "sbq", is_particle: false, sense_retenu: "rivaliser", position: 8 },
      { fr: "les bonnes oeuvres", pos: "nom", phon: "al-khayrati", arabic: "\u0671\u0644\u0652\u062e\u064e\u064a\u0652\u0631\u064e\u0640\u0670\u062a\u0650", word_key: "khyr", is_particle: false, sense_retenu: "bonnes oeuvres", position: 9 },
      { fr: "ou", pos: "adverbe", phon: "ayna", arabic: "\u0623\u064e\u064a\u0652\u0646\u064e", word_key: "ayn", is_particle: false, sense_retenu: "ou", position: 10 },
      { fr: "que", phon: "ma", arabic: "\u0645\u064e\u0627", is_particle: true, position: 11 },
      { fr: "vous soyez", pos: "verbe", phon: "takunu", arabic: "\u062a\u064e\u0643\u064f\u0648\u0646\u064f\u0648\u0627\u06df", word_key: "kwn", is_particle: false, sense_retenu: "etre", position: 12 },
      { fr: "amenera", pos: "verbe", phon: "ya'ti", arabic: "\u064a\u064e\u0623\u0652\u062a\u0650", word_key: "aty", is_particle: false, sense_retenu: "amener", position: 13 },
      { fr: "vous", phon: "bikum", arabic: "\u0628\u0650\u0643\u064f\u0645\u064f", is_particle: true, position: 14 },
      { fr: "Dieu", pos: "nom", phon: "Allahu", arabic: "\u0671\u0644\u0644\u0651\u064e\u0647\u064f", word_key: "llh", is_particle: false, sense_retenu: "Dieu", position: 15 },
      { fr: "tous", pos: "nom", phon: "jami'an", arabic: "\u062c\u064e\u0645\u0650\u064a\u0639\u064b\u0627", word_key: "jme", is_particle: false, sense_retenu: "tous ensemble", position: 16 },
      { fr: "en verite", phon: "inna", arabic: "\u0625\u0650\u0646\u0651\u064e", is_particle: true, position: 17 },
      { fr: "Dieu", pos: "nom", phon: "Allaha", arabic: "\u0671\u0644\u0644\u0651\u064e\u0647\u064e", word_key: "llh", is_particle: false, sense_retenu: "Dieu", position: 18 },
      { fr: "sur", phon: "'ala", arabic: "\u0639\u064e\u0644\u064e\u0649\u0670", is_particle: true, position: 19 },
      { fr: "chaque", phon: "kulli", arabic: "\u0643\u064f\u0644\u0651\u0650", is_particle: true, position: 20 },
      { fr: "chose", pos: "nom", phon: "shay'in", arabic: "\u0634\u064e\u0649\u0652\u0621\u064d", word_key: "shya", is_particle: false, sense_retenu: "chose", position: 21 },
      { fr: "puissant", pos: "adjectif", phon: "qadirun", arabic: "\u0642\u064e\u062f\u0650\u064a\u0631\u064c", word_key: "qdr", is_particle: false, sense_retenu: "puissant", position: 22 }
    ],
    words: [
      // kll pos=3
      {
        word_key: "kll", position: 3, sense_chosen: "chacun",
        analysis_axes: {
          sense_chosen: "chacun",
          concept_chosen: "Totalité",
          concepts: {
            "Totalité": {
              status: "retenu",
              senses: ["tout", "chaque", "totalité"],
              proof_ctx: "Le nom kullin est un nom masculin singulier indefini de la racine k-l-l au genitif (apres la preposition li). Le Lane's donne : totalite, chaque, tout, l'ensemble sans exception. Le kull au singulier indefini signifie « chaque un » — chacun pris individuellement. Le tanwin (in) marque l'indefini — l'enonce est universel, il couvre tous sans exception. La distinction avec l'emoussement (nul) est evidente : kull designe la totalite, pas la fatigue.",
              axe1_verset: "Le mot kullin ouvre le verset avec une universalite — « a chacun une direction ». Le verset pose un principe universel : chaque communaute, chaque individu a une direction. Le champ lexical du verset (chacun, direction, rivalisez, ou que, tous, chaque chose, puissant) est domine par l'universalite — chacun, tous, partout, chaque chose. Le verset est un appel a l'universalite face aux divisions. Le mot kull en est le point de depart.",
              axe2_voisins: "Le verset 146 parlait d'un groupe qui cache la verite. Le verset 147 affirmait la verite du seigneur. Le verset 148 elargit le propos a l'universel : a chacun une direction, rivalisez dans le bien. La progression va du particulier (un groupe) au personnel (ton seigneur) a l'universel (chacun). Le mot kull marque cette ouverture universelle.",
              axe3_sourate: "Le mot kull est un des mots les plus frequents de la sourate al-Baqarah. En 2:20, « Dieu est sur chaque chose puissant ». En 2:29, « Il a cree pour vous tout ce qui est sur terre ». La sourate utilise kull pour affirmer la totalite du pouvoir et de la creation divine. Le verset 148 conclut avec la meme formule que 2:20 — Dieu est sur chaque chose puissant.",
              axe4_coherence: "Le mot kull apparait environ 560 fois dans le Coran. L'expression « 'ala kulli shay'in qadir » (sur chaque chose puissant) est une des formules les plus recurrentes — elle apparait environ 45 fois. Le Coran utilise kull pour affirmer l'universalite du pouvoir divin et de la responsabilite humaine.",
              axe5_frequence: "Pour la mission du khalifa, la totalite est un rappel que la mission couvre tout. Chacun a une direction — le khalifa doit reconnaitre la diversite des voies tout en rivalisant dans le bien. La totalite du pouvoir divin est la garantie que la mission sera accomplie."
            },
            "Émoussement/Faiblesse": {
              status: "nul",
              senses: ["s'émousser", "être fatigué"],
              proof_ctx: "Le sens d'emoussement est hors sujet — le mot kull designe la totalite, pas la faiblesse ou la fatigue."
            }
          }
        }
      },
      // wjh pos=4
      {
        word_key: "wjh", position: 4, sense_chosen: "direction",
        analysis_axes: {
          sense_chosen: "direction",
          concept_chosen: "Visage/Direction",
          concepts: {
            "Visage/Direction": {
              status: "retenu",
              senses: ["visage", "face", "direction", "se diriger vers"],
              proof_ctx: "Le nom wijhatun est un nom feminin singulier indefini nominatif de la racine w-j-h. Le Lane's donne : direction, orientation, cote vers lequel on se tourne. Le mot wijha derive de wajh (visage, face) — la direction est le cote vers lequel le visage se tourne. Le nominatif marque que la direction est le sujet de la phrase existentielle (il y a une direction). L'indefini (sans article) marque que la direction n'est pas specifiee — chacun a SA direction. La distinction avec « maniere » (nul) est que le contexte est la direction de la priere, pas une facon de faire.",
              axe1_verset: "Le mot wijhatun est le sujet de la proposition — « a chacun une direction ». La direction est l'orientation fondamentale de chaque communaute ou individu. Le verset ne juge pas les directions — il les pose comme un fait avant d'ordonner la rivalite dans le bien. Le champ lexical (direction, se tourner, rivalisez, ou que, amener, tous) montre que la diversite des directions est un fait et que la reponse est la rivalite dans le bien, pas la dispute sur les directions.",
              axe2_voisins: "Les versets 144-145 traitaient de la qibla — la direction de la priere tournee vers la Mosquee Sacree. Le verset 148 elargit le propos : chacun a une direction. La direction de la priere est un cas particulier de ce principe general. La diversite des directions n'empeche pas la rivalite dans le bien — les deux coexistent.",
              axe3_sourate: "La racine w-j-h apparait dans la sourate al-Baqarah dans le contexte de la direction de la priere. En 2:144, « tourne ton visage vers la Mosquee Sacree ». En 2:115, « a Dieu appartiennent l'Orient et l'Occident, ou que vous vous tourniez la est le visage de Dieu ». La sourate explore la relation entre la direction physique et la realite spirituelle — la direction est un signe, pas une fin en soi.",
              axe4_coherence: "La racine w-j-h apparait environ 80 fois dans le Coran. Le mot wajh (visage) et ses derives sont utilises pour la direction de la priere, le visage de Dieu, et la direction morale. En 3:20, « j'ai soumis mon visage a Dieu ». Le Coran utilise le visage et la direction comme metaphore de l'engagement total — tourner son visage c'est orienter tout son etre.",
              axe5_frequence: "Pour la mission du khalifa, la direction est essentielle. Le khalifa doit avoir une direction claire — vers Dieu, vers le bien. La diversite des directions humaines n'annule pas la direction fondamentale de la mission. Rivaliser dans le bien est la bonne reponse a la diversite des directions."
            },
            "Sens isolé/Manière": {
              status: "nul",
              senses: ["manière"],
              proof_ctx: "Le sens de maniere est hors sujet — le contexte est la direction de la priere et l'orientation, pas une facon de faire."
            }
          }
        }
      },
      // wly pos=6
      {
        word_key: "wly", position: 6, sense_chosen: "se tourner vers",
        analysis_axes: {
          sense_chosen: "se tourner vers",
          concept_chosen: "Proximité/Protection",
          concepts: {
            "Proximité/Protection": {
              status: "retenu",
              senses: ["proche", "ami", "protecteur", "allié"],
              proof_ctx: "Le participe actif muwallihaa est un participe actif masculin singulier de la forme II (fa''ala) de la racine w-l-y avec pronom suffixe 3FS (ha). Le Lane's donne pour la forme II (walla) : tourner vers, se diriger vers, donner l'autorite a, mettre quelqu'un face a quelque chose. La forme II (fa''ala) intensifie l'action et la rend transitive — muwalli est celui qui tourne (quelque chose ou soi-meme) vers une direction. Le pronom « ha » (elle) renvoie a la direction (wijha, feminin). Le sens premier de w-l-y est la proximite — celui qui se tourne vers quelque chose s'en rapproche. Se tourner vers une direction c'est s'en faire le proche, s'y engager. La distinction avec « gouverner » (nul) est que le contexte est l'orientation, pas l'exercice du pouvoir.",
              axe1_verset: "Le mot muwallihaa qualifie « chacun » (huwa renvoie a kull) — chacun est celui qui se tourne vers sa direction. Le participe actif indique un etat permanent — il est constamment tourne vers elle. Le verset pose l'acte de se tourner comme un fait acquis avant d'ordonner la rivalite. Le champ lexical (direction, se tourner, rivalisez) montre que l'orientation est un point de depart, pas une fin en soi.",
              axe2_voisins: "Les versets 144-145 ordonnaient de tourner le visage vers la Mosquee Sacree. Le verset 148 generalise : chacun se tourne vers une direction. La forme II (walla) est plus active que la forme V (tawalla) — celui qui se tourne choisit activement sa direction. Les versets voisins montrent que la direction est un choix actif, pas une fatalite.",
              axe3_sourate: "La racine w-l-y apparait sous plusieurs formes dans la sourate al-Baqarah. En 2:107, « vous n'avez pas de protecteur (wali) ni de secoureur en dehors de Dieu ». En 2:120, « Dieu est le protecteur des croyants ». En 2:257, « Dieu est le protecteur de ceux qui croient ». La sourate utilise w-l-y dans les deux sens : proximite/protection et direction/orientation. Le verset 148 utilise le sens d'orientation active.",
              axe4_coherence: "La racine w-l-y apparait environ 233 fois dans le Coran. La forme II (walla) apparait dans le contexte de la direction de la priere en 2:144, 2:149, 2:150. Le Coran lie la direction physique a l'engagement spirituel — se tourner vers la Mosquee Sacree c'est se tourner vers Dieu. Le verset 148 generalise ce principe.",
              axe5_frequence: "Pour la mission du khalifa, se tourner vers la direction est l'acte fondamental de la mission. Le khalifa choisit activement sa direction — il ne la subit pas. Se tourner vers Dieu est l'acte premier de la mission."
            },
            "Autorité": {
              status: "nul",
              senses: ["gouverner"],
              proof_ctx: "Le sens de gouverner est hors sujet — le contexte est l'orientation vers une direction de priere, pas l'exercice du pouvoir."
            }
          }
        }
      },
      // sbq pos=8
      {
        word_key: "sbq", position: 8, sense_chosen: "rivaliser",
        analysis_axes: {
          sense_chosen: "rivaliser",
          concept_chosen: "Antériorité/Devancement",
          concepts: {
            "Antériorité/Devancement": {
              status: "retenu",
              senses: ["précéder", "devancer", "courir plus vite", "course"],
              proof_ctx: "Le verbe istabiqu est un imperatif 2MP de la forme X (istaf'ala) de la racine s-b-q. Le Lane's donne pour la forme X : chercher a devancer, rivaliser, se presser vers un objectif pour y arriver le premier. La forme X marque la recherche active — istabiq c'est chercher activement a etre le premier. Le sens premier de s-b-q est le devancement dans le temps ou l'espace — celui qui sabiq est en avance. La forme X transforme ce devancement en competition active. L'imperatif pluriel s'adresse a tous les croyants — c'est un ordre collectif. Le consequentiel fa (donc) lie l'ordre a ce qui precede : puisque chacun a une direction, donc rivalisez dans le bien au lieu de vous disputer sur les directions.",
              axe1_verset: "Le verbe istabiqu est l'ordre central du verset — c'est l'imperatif qui transforme le constat (chacun a une direction) en action (rivalisez dans le bien). Le complement al-khayrat (les bonnes oeuvres) precise l'objet de la rivalite — ce n'est pas une competition pour le pouvoir ou la suprematie mais pour le bien. Le champ lexical (direction, rivalisez, bonnes oeuvres, ou que, amenera, tous, puissant) montre que la rivalite dans le bien est la reponse a la diversite des directions. Au lieu de se disputer sur qui a la bonne direction, il faut rivaliser dans les bonnes oeuvres.",
              axe2_voisins: "Le verset 146 montrait la dissimulation de la verite. Le verset 147 interdisait le doute. Le verset 148 donne l'ordre positif : rivalisez dans le bien. La progression est : ne cachez pas → ne doutez pas → rivalisez dans le bien. Le verbe istabiqu est le premier ordre positif apres les interdictions — il ouvre un chemin d'action.",
              axe3_sourate: "La racine s-b-q apparait rarement dans la sourate al-Baqarah — ce verset est une des rares occurrences. La rarete rend l'ordre d'autant plus significatif. En 2:148, l'ordre de rivaliser est un tournant dans l'argumentation de la sourate — apres les reproches aux dissimulateurs, la sourate oriente vers l'action positive.",
              axe4_coherence: "La racine s-b-q apparait environ 36 fois dans le Coran. L'expression « fastabiqu al-khayrat » (rivalisez dans les bonnes oeuvres) apparait aussi en 5:48 dans un contexte similaire : « a chacun Nous avons donne une loi et une voie... rivalisez dans les bonnes oeuvres ». Le Coran utilise cette formule pour repondre a la diversite des communautes — la diversite n'est pas un obstacle mais une incitation a la rivalite dans le bien.",
              axe5_frequence: "Pour la mission du khalifa, la rivalite dans le bien est le mode d'action de la mission. Le khalifa ne rivalise pas pour le pouvoir ou la domination mais pour les bonnes oeuvres. La competition dans le bien est constructive — elle pousse chacun a faire mieux. Le khalifa doit etre parmi les premiers dans les bonnes oeuvres."
            }
          }
        }
      },
      // khyr pos=9
      {
        word_key: "khyr", position: 9, sense_chosen: "bonnes oeuvres",
        analysis_axes: {
          sense_chosen: "bonnes oeuvres",
          concept_chosen: "Bien/Excellence",
          concepts: {
            "Bien/Excellence": {
              status: "retenu",
              senses: ["bien", "meilleur", "bonté"],
              proof_ctx: "Le nom al-khayrati est un nom feminin pluriel defini genitif de la racine kh-y-r. Le Lane's donne : bien, bonte, ce qui est bon et preferable. Le pluriel khayrat designe les bonnes oeuvres, les choses excellentes — la multiplicite des biens. L'article defini (al-) marque que ce sont LES bonnes oeuvres reconnues, pas n'importe quelle action. Le genitif suit istabiqu (rivalisez dans les bonnes oeuvres). La distinction avec le comparatif « meilleur » est que le contexte est les bonnes oeuvres au pluriel, pas une comparaison entre deux choses.",
              axe1_verset: "Le mot al-khayrat est le complement d'istabiqu — c'est l'objet de la rivalite. Le verset ne demande pas de rivaliser dans la dispute ou la domination mais dans les bonnes oeuvres. Le champ lexical (rivalisez, bonnes oeuvres, Dieu, puissant) montre que les bonnes oeuvres sont le critere de la competition. La diversite des directions (kull wijha) est neutralisee par l'unite de l'objectif (al-khayrat).",
              axe2_voisins: "Le verset 146 montrait la dissimulation de la verite — un acte mauvais. Le verset 148 repond par l'ordre de rivaliser dans le bien — l'oppose de la dissimulation. Le bien (khayr) s'oppose au mal (katm al-haqq, cacher la verite). Les versets 146-148 forment un mouvement du mal (cacher) au bien (rivaliser dans les bonnes oeuvres).",
              axe3_sourate: "La racine kh-y-r apparait environ 20 fois dans la sourate al-Baqarah. En 2:110, « tout bien que vous faites, vous le trouverez aupres de Dieu ». En 2:184, « qui fait le bien volontairement, c'est mieux pour lui ». La sourate insiste sur les bonnes oeuvres comme moyen de merite — le bien est toujours recompense aupres de Dieu.",
              axe4_coherence: "La racine kh-y-r apparait environ 190 fois dans le Coran. L'expression « fastabiqu al-khayrat » (rivalisez dans les bonnes oeuvres) est un imperatif recurrent. En 5:48, le meme ordre apparait dans un contexte identique. Le Coran fait du bien (khayr) le critere de la reussite — pas la richesse, le pouvoir ou l'appartenance communautaire, mais les bonnes oeuvres.",
              axe5_frequence: "Pour la mission du khalifa, les bonnes oeuvres sont le contenu de la mission. Le khalifa est charge de faire le bien — c'est le critere de sa reussite. Rivaliser dans le bien c'est accomplir la mission avec excellence."
            }
          }
        }
      },
      // ayn pos=10
      {
        word_key: "ayn", position: 10, sense_chosen: "ou",
        analysis_axes: {
          sense_chosen: "ou",
          concept_chosen: "Lieu/Interrogation",
          concepts: {
            "Lieu/Interrogation": {
              status: "retenu",
              senses: ["où", "en quel lieu"],
              proof_ctx: "Le mot ayna est un adverbe interrogatif de lieu de la racine a-y-n. Le Lane's donne : ou, en quel lieu. Ici ayna + ma (ou que) forme une conjonction de condition — ou que vous soyez, quel que soit le lieu. L'adverbe ayna n'a qu'un seul sens attesté — il designe le lieu de maniere interrogative ou conditionnelle. Il n'y a pas d'alternative pertinente.",
              axe1_verset: "Le mot ayna introduit la condition de lieu — « ou que vous soyez ». Le verset affirme que le lieu n'est pas un obstacle au rassemblement divin. Le champ lexical (ou que, soyez, amenera, tous, puissant) montre que la puissance de Dieu transcende le lieu. Le lieu est neutralise par la puissance divine — ou que vous soyez, Dieu vous amenera.",
              axe2_voisins: "Le verset 115 affirmait « ou que vous vous tourniez, la est le visage de Dieu ». Le verset 148 reprend ce theme : ou que vous soyez, Dieu vous amenera. Les deux versets affirment que le lieu ne limite pas Dieu — Sa presence et Son pouvoir sont partout.",
              axe3_sourate: "L'adverbe ayna apparait dans la sourate al-Baqarah dans le contexte de l'omnipresence divine. En 2:115, « ou que vous vous tourniez ». En 2:148, « ou que vous soyez ». La sourate affirme que Dieu transcende le lieu — aucun endroit n'echappe a Son pouvoir.",
              axe4_coherence: "L'adverbe ayna + ma (ou que) apparait plusieurs fois dans le Coran. En 4:78, « ou que vous soyez, la mort vous atteindra ». En 26:146, la meme construction est utilisee. Le Coran utilise ayna ma pour affirmer l'universalite — aucun lieu n'echappe a la volonte divine.",
              axe5_frequence: "Pour la mission du khalifa, le lieu ne limite pas la mission. Ou que le khalifa se trouve, la mission continue et Dieu est present. Le lieu est une circonstance, pas une excuse."
            }
          }
        }
      },
      // kwn pos=12
      {
        word_key: "kwn", position: 12, sense_chosen: "etre",
        analysis_axes: {
          sense_chosen: "etre",
          concept_chosen: "Être/Existence",
          concepts: {
            "Être/Existence": {
              status: "retenu",
              senses: ["être (verbe incomplet)", "venir à l'existence"],
              proof_ctx: "Le verbe takunu est un inaccompli 2MP de la racine k-w-n. Le Lane's donne : etre, exister. Ici le verbe kana est complet — il signifie etre au sens d'exister dans un lieu. L'inaccompli apres ayna ma marque une condition — ou que vous existiez, dans quelque lieu que vous soyez. La distinction avec « lieu » (nul) est que le mot est un verbe d'existence, pas un nom. Meme racine que la position 6 du verset 147 mais avec un usage different : ici le verbe est complet (etre dans un lieu), la-bas il etait incomplet (ne sois pas de...).",
              axe1_verset: "Le verbe takunu est le support de la condition de lieu — « ou que vous soyez ». L'etre est ici l'existence dans un lieu — etre quelque part. Le verset affirme que l'etre dans un lieu ne limite pas le pouvoir de Dieu. Le champ lexical (ou que, soyez, amenera, Dieu, puissant) montre que l'existence humaine dans l'espace est soumise au pouvoir divin.",
              axe2_voisins: "Le verset 147 utilisait takunanna pour l'interdiction de douter. Le verset 148 utilise takunu pour la condition de lieu. Les deux usages du verbe kana montrent sa polyvalence — il peut etre incomplet (ne sois pas de ceux qui doutent) ou complet (ou que vous soyez). Le verbe kana est le support grammatical de l'argumentation.",
              axe3_sourate: "Le verbe kana est le verbe le plus frequent de la sourate al-Baqarah. Il apparait dans presque tous les contextes — narration, injonction, condition. Le verset 148 l'utilise dans une condition de lieu qui affirme l'omnipotence divine.",
              axe4_coherence: "La racine k-w-n est la racine la plus frequente du Coran. L'expression « ayna ma takunu » (ou que vous soyez) apparait en 4:78 dans un contexte similaire. Le Coran utilise cette construction pour affirmer que rien n'echappe au pouvoir de Dieu.",
              axe5_frequence: "Pour la mission du khalifa, l'etre dans un lieu est une condition de la mission. Le khalifa est quelque part — mais ce lieu ne definit pas les limites de sa mission. Dieu l'amenera ou qu'il soit."
            },
            "Humilité/Soumission": {
              status: "nul",
              senses: ["être humble soumis"],
              proof_ctx: "Le sens d'humilite est hors sujet — le verbe est le verbe complet « etre dans un lieu », pas un verbe d'humilite."
            },
            "Lieu/État": {
              status: "nul",
              senses: ["lieu", "état condition"],
              proof_ctx: "Le sens de lieu est hors sujet — le mot est un verbe d'existence, pas un nom de lieu."
            }
          }
        }
      },
      // aty pos=13
      {
        word_key: "aty", position: 13, sense_chosen: "amener",
        analysis_axes: {
          sense_chosen: "amener",
          concept_chosen: "Venue/Arrivée",
          concepts: {
            "Venue/Arrivée": {
              status: "retenu",
              senses: ["venir", "arriver", "apporter", "donner", "commettre"],
              proof_ctx: "Le verbe ya'ti est un inaccompli 3MS de la forme I de la racine a-t-y. Le Lane's donne : venir, arriver, amener. L'inaccompli indique l'avenir — Dieu amenera. Le verbe est transitif avec la preposition bi (avec) — ya'ti bikum signifie « Il viendra avec vous » c'est-a-dire « Il vous amenera ». Le sujet est Allah (Dieu). La distinction avec « detruire » (nul) est evidente : le contexte est le rassemblement, pas la destruction.",
              axe1_verset: "Le verbe ya'ti est l'action divine centrale de la troisieme proposition — Dieu amenera tous les hommes. Le complement « bikum » (avec vous) precise que Dieu amenera les destinataires. L'adverbe jami'an (tous) precise que personne ne sera laisse — tous seront amenes. Le champ lexical (ou que, soyez, amenera, Dieu, tous, puissant) montre que la venue divine est universelle et irresistible.",
              axe2_voisins: "Le verset 146 parlait de la reconnaissance de la verite. Le verset 147 affirmait la source divine. Le verset 148 conclut avec la promesse du rassemblement — Dieu amenera tous. Les versets 146-148 forment un mouvement : la verite reconnue → la verite affirmee → le rassemblement final. La venue de Dieu est la conclusion de ce mouvement.",
              axe3_sourate: "La racine a-t-y apparait de nombreuses fois dans la sourate al-Baqarah. En 2:145, « meme si tu apportais tous les signes ». En 2:146, « ceux a qui Nous avons donne ». Le verset 148 utilise ata au sens d'amener — Dieu amenera tous les hommes. La sourate montre que Dieu donne, envoie, et amenera — la venue est l'aboutissement du processus.",
              axe4_coherence: "La racine a-t-y apparait environ 264 fois dans le Coran. Le verbe ata + bi (amener) est frequent dans les contextes eschatologiques. En 2:148, la promesse de rassemblement est un theme eschatologique majeur. Le Coran affirme que Dieu amenera tous les humains pour le jugement — personne n'echappera.",
              axe5_frequence: "Pour la mission du khalifa, la venue divine est un rappel que la mission a un aboutissement. Dieu amenera tous — le khalifa doit agir en sachant que le rassemblement final aura lieu. La promesse du rassemblement donne un sens a la mission presente."
            },
            "Sens isolé/Détruire": {
              status: "nul",
              senses: ["détruire"],
              proof_ctx: "Le sens de destruction est hors sujet — le contexte est le rassemblement divin, pas la destruction."
            }
          }
        }
      },
      // llh pos=15
      {
        word_key: "llh", position: 15, sense_chosen: "Dieu",
        analysis_axes: {
          sense_chosen: "Dieu",
          concept_chosen: "Divinité",
          concepts: {
            "Divinité": {
              status: "retenu",
              senses: ["divinité", "dieu", "Dieu", "théologie"],
              proof_ctx: "Le nom Allahu est le nom propre de la divinite au nominatif — Il est le sujet du verbe ya'ti (amenera). Le Lane's donne : Dieu, la divinite unique, le seul vrai adoré. Le nominatif indique qu'Allah est l'agent du rassemblement — c'est Lui qui amenera tous les hommes. Le nom apparait deux fois dans le verset : une fois comme agent du rassemblement (Allahu ya'ti bikum) et une fois dans la formule finale (inna Allaha 'ala kulli shay'in qadir).",
              axe1_verset: "Le nom Allahu est le sujet du verbe amener — « Dieu vous amenera tous ». Dieu est l'agent du rassemblement eschatologique. Le verset affirme Sa puissance universelle (sur chaque chose puissant) comme garantie du rassemblement. Le champ lexical (Dieu, amenera, tous, puissant, chaque chose) montre que la puissance divine est le fondement de la promesse.",
              axe2_voisins: "Le verset 147 affirmait « la verite de ton seigneur ». Le verset 148 montre Dieu en action — Il amenera tous les hommes. La progression va de l'affirmation de la verite a l'action divine. Dieu n'est pas seulement la source de la verite — Il est aussi l'agent du rassemblement final.",
              axe3_sourate: "Le nom Allah est le mot le plus frequent de la sourate al-Baqarah. Il structure chaque passage. En 2:148, Allah est a la fois l'agent du rassemblement et le detenteur de la puissance universelle. La sourate montre que tout vient de Dieu, tout revient a Dieu.",
              axe4_coherence: "Le nom Allah apparait plus de 2600 fois dans le Coran. En 2:148, la double occurrence (sujet du verbe + sujet de inna) souligne que Dieu est a la fois l'agent et la puissance. La formule finale « inna Allaha 'ala kulli shay'in qadir » est une des plus recurrentes du Coran.",
              axe5_frequence: "Pour la mission du khalifa, Dieu est le mandant de la mission et la puissance qui la realise. Le khalifa agit sous l'autorite de Dieu et avec Sa puissance. Le rassemblement final est la garantie que la mission n'est pas vaine."
            },
            "Adoration/Culte": {
              status: "nul",
              senses: ["adorer", "servir", "se consacrer au culte"],
              proof_ctx: "Le mot est le nom propre Allah, pas un verbe d'adoration. Le contexte est l'action divine de rassemblement."
            },
            "Confusion/Perplexité": {
              status: "nul",
              senses: ["être confus"],
              proof_ctx: "Le sens de confusion est hors sujet — le mot est le nom propre de la divinite."
            }
          }
        }
      },
      // jme pos=16
      {
        word_key: "jme", position: 16, sense_chosen: "tous ensemble",
        analysis_axes: {
          sense_chosen: "tous ensemble",
          concept_chosen: "Rassemblement/Union",
          concepts: {
            "Rassemblement/Union": {
              status: "retenu",
              senses: ["rassembler", "réunir", "assembler", "unanimité", "vendredi", "totalité"],
              proof_ctx: "Le nom jami'an est un nom masculin singulier indefini accusatif de la racine j-m-'. Le Lane's donne : tous ensemble, collectivement, en groupe complet. Le mot jami' au accusatif est un hal (etat circonstanciel) — il decrit l'etat dans lequel Dieu les amenera : tous ensemble, sans exception. Le tanwin (an) marque l'indefini. L'accusatif marque la fonction de hal — c'est un etat, pas un objet. La distinction avec « vendredi » est que le contexte est le rassemblement de tous les hommes, pas un jour de la semaine.",
              axe1_verset: "Le mot jami'an qualifie le rassemblement — Dieu vous amenera TOUS ENSEMBLE. Le hal (etat) precise que personne ne sera laisse de cote. Le champ lexical (ou que, soyez, amenera, Dieu, tous, puissant) montre que le rassemblement est total et irresistible. La totalite de jami'an repond a la totalite de kullin (chacun) en debut de verset — chacun a une direction, mais Dieu les amenera tous ensemble.",
              axe2_voisins: "Le verset 146 parlait d'un groupe qui cache. Le verset 148 promet que tous seront amenes — y compris ceux qui cachent. Le rassemblement est le moment ou la dissimulation ne sera plus possible. Le verset 149 poursuivra avec la direction de la priere. L'ensemble montre que la diversite (des directions, des groupes) convergera vers l'unite (le rassemblement).",
              axe3_sourate: "La racine j-m-' apparait dans la sourate al-Baqarah dans des contextes de rassemblement. En 2:29, « Il a cree pour vous tout ce qui est sur terre, puis Il a jama'a vers le ciel ». En 2:203, « le jour du rassemblement ». La sourate annonce le rassemblement eschatologique comme une certitude.",
              axe4_coherence: "La racine j-m-' apparait environ 129 fois dans le Coran. Le mot jami'an (tous ensemble) est un adverbe recurrent. En 10:28, « le Jour ou Nous les rassemblerons tous ». En 36:32, « tous seront amenes devant Nous ». Le Coran insiste sur la totalite du rassemblement — aucun individu n'echappera.",
              axe5_frequence: "Pour la mission du khalifa, le rassemblement final est l'horizon de la mission. Le khalifa doit agir en sachant que tous seront reunis pour rendre compte. Le rassemblement donne un poids a chaque acte — rien ne sera perdu ou oublie."
            }
          }
        }
      },
      // llh pos=18 (2nd occurrence)
      {
        word_key: "llh", position: 18, sense_chosen: "Dieu",
        analysis_axes: {
          sense_chosen: "Dieu",
          concept_chosen: "Divinité",
          concepts: {
            "Divinité": {
              status: "retenu",
              senses: ["divinité", "dieu", "Dieu", "théologie"],
              proof_ctx: "Deuxieme occurrence d'Allah dans le verset — ici au accusatif comme complement de inna dans la formule finale « inna Allaha 'ala kulli shay'in qadir » (en verite Dieu est sur chaque chose puissant). Inna + accusatif + attribut forme une phrase emphatique de certitude. L'accusatif est du a inna. Memes analyses que pour la premiere occurrence en position 15.",
              axe1_verset: "Le nom Allaha dans la formule finale affirme la puissance divine comme garantie. La formule « inna Allaha 'ala kulli shay'in qadir » est la conclusion du verset — elle ancre toute la promesse (le rassemblement, l'amenee) dans la puissance universelle de Dieu. Le champ lexical (Dieu, chaque, chose, puissant) est un condensé de la toute-puissance.",
              axe2_voisins: "Le verset 148 conclut avec cette formule de puissance qui servira de transition vers le verset 149 — la puissance de Dieu garantit la direction de la priere et le rassemblement final.",
              axe3_sourate: "La formule « inna Allaha 'ala kulli shay'in qadir » apparait en 2:20, 2:106, 2:109, 2:148, 2:259, 2:284. Elle ponctue les passages cles de la sourate comme un refrain de certitude.",
              axe4_coherence: "Cette formule apparait environ 45 fois dans le Coran. Elle est un des refrains les plus recurrents et sert a clore les passages avec une affirmation de la toute-puissance divine.",
              axe5_frequence: "Pour la mission du khalifa, la toute-puissance de Dieu est la garantie de la mission. Rien n'est impossible pour Dieu — le khalifa peut compter sur cette puissance dans l'accomplissement de sa mission."
            }
          }
        }
      },
      // shya pos=21
      {
        word_key: "shya", position: 21, sense_chosen: "chose",
        analysis_axes: {
          sense_chosen: "chose",
          concept_chosen: "Chose/Existence",
          concepts: {
            "Chose/Existence": {
              status: "retenu",
              senses: ["chose"],
              proof_ctx: "Le nom shay'in est un nom masculin singulier indefini genitif de la racine sh-y-a. Le Lane's donne : chose, toute entite existante. Le mot shay' est le concept le plus general — il designe tout ce qui est. L'indefini avec kull (chaque) cree une universalite absolue — chaque chose, sans aucune exception. Le genitif suit kull (chaque chose). La distinction avec « vouloir » (concept « Volonte » retenu dans les concepts generaux) est que le mot est ici un nom (chose), pas un verbe (vouloir). Dans cette occurrence, le sens de chose est evident — « sur chaque chose puissant » parle de toute entite, pas de la volonte.",
              axe1_verset: "Le mot shay'in fait partie de la formule finale — « sur chaque chose puissant ». Le champ semantique de « chose » est le plus large possible — il englobe tout ce qui existe. La puissance de Dieu couvre chaque chose — rien n'echappe a Son pouvoir. Le verset affirme une universalite totale : chaque direction, chaque lieu, chaque personne, chaque chose.",
              axe2_voisins: "Le verset 148 conclut la section 146-148 avec l'affirmation de la puissance universelle. Le mot shay' dans cette formule elargit le propos au maximum — aucune chose n'est hors de portee de la puissance divine.",
              axe3_sourate: "La racine sh-y-a apparait de nombreuses fois dans la sourate al-Baqarah. L'expression « 'ala kulli shay'in qadir » est un refrain de la sourate (2:20, 2:106, 2:148). La sourate utilise shay' pour affirmer l'universalite du pouvoir divin.",
              axe4_coherence: "La racine sh-y-a apparait environ 519 fois dans le Coran. Le mot shay' est un des mots les plus frequents. L'expression « kulli shay'in » (chaque chose) affirme systematiquement l'universalite — chaque chose dans la creation est soumise a Dieu.",
              axe5_frequence: "Pour la mission du khalifa, chaque chose est dans le champ du pouvoir divin. Le khalifa ne doit considerer aucune chose comme hors de portee — Dieu est puissant sur chaque chose."
            },
            "Volonté": {
              status: "nul",
              senses: ["vouloir"],
              proof_ctx: "Le sens de vouloir est hors sujet dans cette occurrence — le mot est un nom (chose) dans la formule « sur chaque chose puissant », pas un verbe de volonte."
            }
          }
        }
      },
      // qdr pos=22
      {
        word_key: "qdr", position: 22, sense_chosen: "puissant",
        analysis_axes: {
          sense_chosen: "puissant",
          concept_chosen: "Puissance/Capacité",
          concepts: {
            "Puissance/Capacité": {
              status: "retenu",
              senses: ["pouvoir", "être capable"],
              proof_ctx: "L'adjectif qadirun est un adjectif masculin singulier indefini nominatif de la racine q-d-r. Le Lane's donne : puissant, capable, qui a le pouvoir de faire. Le qadir est celui qui possede la puissance d'agir — il peut realiser ce qu'il veut. L'indefini nominatif est le khabar (attribut) de inna dans la phrase « inna Allaha 'ala kulli shay'in qadir ». La distinction avec « mesurer » (nul) est que le contexte est la puissance d'action, pas la mesure ou le calcul.",
              axe1_verset: "Le mot qadirun ferme le verset avec la puissance divine — Dieu est puissant sur chaque chose. La puissance est la garantie de la promesse : Dieu peut amener tous les hommes ou qu'ils soient parce qu'Il est puissant. Le champ lexical (amenera, tous, Dieu, chaque chose, puissant) culmine avec qadir — c'est l'attribut qui rend tout le reste possible.",
              axe2_voisins: "Le verset 146 montrait l'impuissance morale de ceux qui cachent. Le verset 148 conclut avec la toute-puissance de Dieu. L'opposition est saisissante : les dissimulateurs sont moralement impuissants (ils cachent malgre leur savoir), Dieu est absolument puissant (sur chaque chose). La puissance divine est la reponse a l'impuissance humaine.",
              axe3_sourate: "La racine q-d-r au sens de puissance apparait frequemment dans la sourate al-Baqarah. En 2:20, « Dieu est sur chaque chose puissant ». En 2:106, meme formule. La sourate utilise qadir comme refrain pour ponctuer les passages avec l'affirmation de la toute-puissance.",
              axe4_coherence: "La racine q-d-r apparait environ 132 fois dans le Coran. L'adjectif qadir (puissant) est un des attributs divins les plus recurrents. La formule « 'ala kulli shay'in qadir » apparait environ 45 fois — c'est un des refrains les plus frequents du Coran. La repetition ancre la certitude de la puissance divine dans la conscience du croyant.",
              axe5_frequence: "Pour la mission du khalifa, la puissance de Dieu est la force de la mission. Le khalifa ne depend pas de sa propre puissance mais de celle de Dieu. Dieu est puissant sur chaque chose — le khalifa peut s'appuyer sur cette puissance pour accomplir sa mission."
            },
            "Mesure/Détermination": {
              status: "nul",
              senses: ["mesurer", "déterminer", "décréter", "destin", "valeur"],
              proof_ctx: "Le sens de mesure est hors sujet — le contexte est la puissance d'action de Dieu, pas la mesure ou le calcul. L'adjectif qadir designe la capacite, pas la determination."
            }
          }
        }
      }
    ]
  }
};

// =====================================================
// PROCESS VERSE
// =====================================================
async function processVerse(verseNum) {
  console.log(`\n=== VERSET 2:${verseNum} ===`);
  const data = verseData[verseNum];
  if (!data) { console.log('  Pas de donnees'); return; }

  let okCount = 0, errCount = 0;

  for (const word of data.words) {
    const { error: insertErr } = await supabase.from('verse_word_analyses').insert({
      verse_id: data.verse_id,
      word_key: word.word_key,
      position: word.position,
      sense_chosen: word.sense_chosen,
      analysis_axes: word.analysis_axes,
      model_used: 'claude-opus-4',
      prompt_version: 'v2-pipeline-maison'
    });

    if (insertErr) {
      console.error(`  ERREUR insertion vwa ${word.word_key}:`, insertErr.message);
      errCount++;
    } else {
      console.log(`  OK VWA ${word.word_key} pos=${word.position}`);
      okCount++;
    }
  }

  const { error: updateErr } = await supabase.from('verse_analyses').update({
    segments: data.segments,
    translation_arab: data.translation_arab,
    translation_explanation: data.translation_explanation,
    full_translation: data.full_translation
  }).eq('id', data.analysis_id);

  if (updateErr) {
    console.error(`  ERREUR update verse_analyses:`, updateErr.message);
    errCount++;
  } else {
    console.log(`  OK verse_analyses V${verseNum}`);
    okCount++;
  }

  console.log(`VERSET 2:${verseNum} — ${okCount} OK, ${errCount} erreurs`);
  return { okCount, errCount };
}

// =====================================================
// SYNC word_meanings
// =====================================================
async function syncWordMeanings() {
  console.log('\n=== SYNC word_meanings ===');

  const verseIds = [153, 154, 155];
  const { data: vwas } = await supabase
    .from('verse_word_analyses')
    .select('word_key, analysis_axes')
    .in('verse_id', verseIds);

  if (!vwas || vwas.length === 0) {
    console.log('  Aucune donnee a synchroniser');
    return;
  }

  const processed = new Set();
  for (const vwa of vwas) {
    const axes = vwa.analysis_axes;
    if (!axes || !axes.concepts) continue;

    const key = vwa.word_key;
    if (processed.has(key)) continue;
    processed.add(key);

    const { data: wa } = await supabase
      .from('word_analyses')
      .select('id')
      .eq('word_key', key)
      .single();

    if (!wa) {
      console.log(`  ${key} non trouve dans word_analyses — skip`);
      continue;
    }

    for (const [conceptName, conceptData] of Object.entries(axes.concepts)) {
      const { error } = await supabase.from('word_meanings')
        .update({
          status: conceptData.status,
          proof_ctx: conceptData.proof_ctx || null,
          axe1_verset: conceptData.axe1_verset || null,
          axe2_voisins: conceptData.axe2_voisins || null,
          axe3_sourate: conceptData.axe3_sourate || null,
          axe4_coherence: conceptData.axe4_coherence || null,
          axe5_frequence: conceptData.axe5_frequence || null
        })
        .eq('analysis_id', wa.id)
        .eq('concept', conceptName);

      if (error) {
        console.error(`  ERREUR sync ${key}/${conceptName}:`, error.message);
      }
    }
    console.log(`  ${key} -> synced`);
  }
}

// =====================================================
// MAIN
// =====================================================
async function main() {
  console.log('=== PIPELINE SOURATE 2 — VERSETS 146, 147, 148 ===\n');
  await processVerse(146);
  await processVerse(147);
  await processVerse(148);
  await syncWordMeanings();
  console.log('\n=== PIPELINE V146-148 TERMINEE ===');
}

main().catch(e => console.error('FATAL:', e));
