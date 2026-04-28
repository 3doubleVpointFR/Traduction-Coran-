const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// =====================================================
// PIPELINE SOURATE 2 — VERSET 146
// verse_id=153, analysis_id=508
// "Ceux a qui Nous avons donne le Livre le reconnaissent
//  comme ils reconnaissent leurs propres fils. Mais un
//  groupe d'entre eux cache la verite alors qu'ils savent."
// =====================================================

const verseData = {
  146: {
    verse_id: 153,
    analysis_id: 508,
    translation_arab: "Ceux a qui Nous avons donne le Livre le reconnaissent comme ils reconnaissent leurs fils. Un groupe d'entre eux cache la verite alors qu'ils savent.",
    full_translation: "Ceux a qui Nous avons donne le Livre, le reconnaissent comme ils reconnaissent leurs enfants. Or une partie d'entre eux cache la verite, alors qu'ils la savent !",
    translation_explanation: `§DEMARCHE§
Le verset compare deux types de reconnaissance pour souligner l'evidence de la verite cachee. Le pronom relatif **alladhina** introduit le groupe designe : ceux qui ont recu le Livre. Le verbe **ataynahum** est un accompli 1PL de la racine a-t-y avec pronom suffixe 3MP. Le Lane's donne : donner, apporter, venir. L'accompli indique que le don est acheve — le Livre leur a ete donne dans le passe. Le pronom « na » (Nous) designe le locuteur divin, et « hum » les destinataires. Le nom **al-kitaba** est un nom defini de la racine k-t-b. Le Lane's donne : livre, ecrit, ecriture revelee. L'article defini « al- » indique qu'il s'agit du Livre specifique, l'ecriture revelee connue des destinataires. Le verbe **ya'rifunahu** est un inaccompli 3MP de la racine '-r-f avec pronom suffixe 3MS. Le Lane's donne : connaitre, reconnaitre, identifier. L'inaccompli indique une action presente et continue — ils le reconnaissent maintenant et continuent de le reconnaitre. Le pronom suffixe « hu » renvoie au Prophete ou a la qibla selon les commentateurs. La reconnaissance ('irfan) est une connaissance par identification — on reconnait ce qu'on a deja connu ou ce dont on a les signes. Le verbe **ya'rifuna** est repete sans pronom suffixe, cette fois avec l'objet compare : « comme ils reconnaissent leurs fils ». La repetition du meme verbe cree un parallele direct : la reconnaissance du Prophete est aussi certaine que la reconnaissance de ses propres enfants. Le nom **abna'ahum** est un pluriel brise de « ibn » de la racine b-n-y avec pronom suffixe 3MP. Le Lane's donne : fils, enfant, descendant. Le fils est ce qu'un pere reconnait de maniere instinctive et certaine — le pere connait son fils par nature. La comparaison est donc : ils reconnaissent la verite avec la meme certitude qu'un pere reconnait son enfant. Le nom **fariqan** est un nom masculin singulier indefini accusatif de la racine f-r-q. Le Lane's donne : partie separee, groupe distinct. L'accusatif le place comme sujet d'une phrase nominale — un groupe d'entre eux. L'indefini souligne qu'il s'agit d'une fraction, pas de la totalite. Le verbe **layaktumuna** est un inaccompli 3MP de la racine k-t-m avec la particule d'insistance « la- ». Le Lane's donne : cacher, dissimuler, taire. L'inaccompli avec « la- » emphatique indique une action presente, certaine et continue — ils cachent deliberement et avec insistance. Le nom **al-haqqa** est un nom defini accusatif de la racine h-q-q. Le Lane's donne : verite, realite, droit. L'article defini « al- » indique la verite specifique, connue — celle qu'ils reconnaissent mais cachent. Le verbe **ya'lamuna** est un inaccompli 3MP de la racine '-l-m. Le Lane's donne : savoir, connaitre. L'inaccompli indique un etat permanent — ils savent. Le verset se conclut sur ce mot pour insister : le cache n'est pas par ignorance mais par savoir. Ils savent et malgre cela ils cachent.

§JUSTIFICATION§
**donne** — Le sens retenu est « donner ». Le verbe atayna decrit le don du Livre par Dieu aux destinataires. L'alternative « venir » est ecartee car le verbe est ici transitif avec deux complements (nous leur avons donne le Livre), pas intransitif.

**le Livre** — Le sens retenu est « livre ». Le mot al-kitab designe l'ecriture revelee donnee aux gens du Livre. L'alternative « prescrire » est ecartee car le mot est un nom defini, pas un verbe.

**reconnaissent** — Le sens retenu est « reconnaitre ». Le verbe ya'rifuna designe l'acte de reconnaitre par identification — ils identifient la verite comme ils identifient leurs fils. L'alternative « coutume » est ecartee car le verbe est a la forme I dans le sens de connaitre/identifier.

**fils** — Le sens retenu est « fils ». Le mot abna'ahum designe les fils, les enfants. L'alternative « construire » est ecartee car le mot est un pluriel nominal designant la descendance, pas un verbe.

**groupe** — Le sens retenu est « groupe ». Le mot fariqan designe une partie separee de l'ensemble. L'alternative « Furqan » est ecartee car le mot est un nom commun designant un sous-groupe, pas le Discernement.

**cache** — Le sens retenu est « cacher ». Le verbe yaktumuna designe l'acte delibere de dissimuler la verite. Aucune alternative a ecarter — la racine k-t-m n'a qu'un seul champ semantique (dissimulation).

**la verite** — Le sens retenu est « verite ». Le nom al-haqq designe la verite objective et connue qu'ils cachent. L'alternative « devoir/obligation » est ecartee car le contexte est la verite reconnue puis cachee, pas une obligation.

**savent** — Le sens retenu est « savoir ». Le verbe ya'lamuna designe le savoir — ils savent la verite mais la cachent. L'alternative « marque/signe » est ecartee car le verbe est a la forme I, sens de connaitre.

§CRITIQUE§
La traduction Hamidullah donne « enfants » la ou nous donnons « fils ». Le mot abna' est le pluriel de ibn (fils), pas de walad (enfant au sens large). La nuance est faible en francais mais en arabe abna' designe specifiquement les fils males. Hamidullah utilise « Or une partie » la ou nous donnons « un groupe ». Les deux rendent fariqan de maniere equivalente. Hamidullah ajoute « la » apres « savent » (« alors qu'ils la savent ») ce qui explicite le complement — notre traduction laisse le verbe absolu (« ils savent ») comme dans le texte arabe. La difference est stylistique, pas semantique.`,
    segments: [
      { fr: "ceux qui", phon: "alladhina", arabic: "\u0671\u0644\u0651\u064e\u0630\u0650\u064a\u0646\u064e", is_particle: true, position: 0 },
      { fr: "Nous leur avons donne", pos: "verbe", phon: "ataynamum", arabic: "\u0622\u062a\u064e\u064a\u0652\u0646\u064e\u0640\u0647\u064f\u0645\u064f", word_key: "aty", is_particle: false, sense_retenu: "donner", position: 1 },
      { fr: "le Livre", pos: "nom", phon: "al-kitaba", arabic: "\u0671\u0644\u0652\u0643\u0650\u062a\u064e\u0640\u0628\u064e", word_key: "ktb", is_particle: false, sense_retenu: "livre", position: 2 },
      { fr: "le reconnaissent", pos: "verbe", phon: "ya'rifunahu", arabic: "\u064a\u064e\u0639\u0652\u0631\u0650\u0641\u064f\u0648\u0646\u064e\u0647\u064f", word_key: "erf", is_particle: false, sense_retenu: "reconnaitre", position: 3 },
      { fr: "comme", phon: "kama", arabic: "\u0643\u064e\u0645\u064e\u0627", is_particle: true, position: 4 },
      { fr: "ils reconnaissent", pos: "verbe", phon: "ya'rifuna", arabic: "\u064a\u064e\u0639\u0652\u0631\u0650\u0641\u064f\u0648\u0646\u064e", word_key: "erf", is_particle: false, sense_retenu: "reconnaitre", position: 5 },
      { fr: "leurs fils", pos: "nom", phon: "abna'ahum", arabic: "\u0623\u064e\u0628\u0652\u0646\u064e\u0627\u0621\u064e\u0647\u064f\u0645\u0652", word_key: "bny", is_particle: false, sense_retenu: "fils", position: 6 },
      { fr: "et certes", phon: "wa-inna", arabic: "\u0648\u064e\u0625\u0650\u0646\u0651\u064e", is_particle: true, position: 7 },
      { fr: "un groupe", pos: "nom", phon: "fariqan", arabic: "\u0641\u064e\u0631\u0650\u064a\u0642\u064b\u0627", word_key: "frq", is_particle: false, sense_retenu: "groupe", position: 8 },
      { fr: "d'entre eux", phon: "minhum", arabic: "\u0645\u0650\u0646\u0652\u0647\u064f\u0645\u0652", is_particle: true, position: 9 },
      { fr: "certes cachent", pos: "verbe", phon: "layaktumuna", arabic: "\u0644\u064e\u064a\u064e\u0643\u0652\u062a\u064f\u0645\u064f\u0648\u0646\u064e", word_key: "ktm", is_particle: false, sense_retenu: "cacher", position: 10 },
      { fr: "la verite", pos: "nom", phon: "al-haqqa", arabic: "\u0671\u0644\u0652\u062d\u064e\u0642\u0651\u064e", word_key: "hqq", is_particle: false, sense_retenu: "verite", position: 11 },
      { fr: "et eux", phon: "wa-hum", arabic: "\u0648\u064e\u0647\u064f\u0645\u0652", is_particle: true, position: 12 },
      { fr: "savent", pos: "verbe", phon: "ya'lamuna", arabic: "\u064a\u064e\u0639\u0652\u0644\u064e\u0645\u064f\u0648\u0646\u064e", word_key: "elm", is_particle: false, sense_retenu: "savoir", position: 13 }
    ],
    words: [
      // aty pos=1
      {
        word_key: "aty", position: 1, sense_chosen: "donner",
        analysis_axes: {
          sense_chosen: "donner",
          concept_chosen: "Venue/Arrivée",
          concepts: {
            "Venue/Arrivée": {
              status: "retenu",
              senses: ["venir", "arriver", "apporter", "donner", "commettre"],
              proof_ctx: "Le verbe ataynamum est un accompli 1PL de la racine a-t-y avec pronom suffixe 3MP. Le Lane's donne : venir, arriver, apporter, donner. Le sens de donner est une extension du sens d'apporter — on vient avec quelque chose et on le transmet. Ici le sujet est Nous (Dieu) et l'objet est le Livre. L'accompli indique que le don est acheve dans le passe. Le choix du sens « donner » est impose par la syntaxe : le verbe a deux complements (leur + le Livre), ce qui oriente vers le sens transitif de transmission.",
              axe1_verset: "Le verbe ataynamum ouvre la proposition relative qui identifie le groupe designe : « ceux a qui Nous avons donne le Livre ». Le don du Livre est la premiere donnee du verset — il etablit que ces gens ont recu la connaissance. Le champ lexical du verset (Livre, reconnaitre, fils, verite, savoir) tourne autour de la connaissance et de la certitude. Le don du Livre est le fondement de cette connaissance — c'est parce qu'ils ont recu le Livre qu'ils reconnaissent la verite.",
              axe2_voisins: "Le verset 145 parlait de la direction de priere (qibla) et de la connaissance que les gens du Livre en ont. Le verset 146 enchaine en precisant que cette connaissance est aussi certaine que la reconnaissance de leurs propres fils. Le verset 147 declarera que la verite vient de leur Seigneur. Le don du Livre dans le verset 146 est le fondement qui rend inexcusable le fait de cacher la verite.",
              axe3_sourate: "La racine a-t-y est omnipresente dans la sourate al-Baqarah pour decrire les dons divins. En 2:53, « Nous avons donne a Moussa le Livre et le Discernement ». En 2:87, « Nous avons donne a Moussa le Livre ». En 2:136, les prophetes ont recu la revelation. Le verset 146 s'inscrit dans cette serie de dons — le Livre est le don fondamental que Dieu accorde aux communautes successives.",
              axe4_coherence: "La racine a-t-y apparait environ 550 fois dans le Coran. Le schema « atayna + objet + le Livre » est un refrain coranique frequent — en 2:53, 2:87, 6:89, 28:43. Le Coran insiste sur le fait que le Livre est un don divin, pas une acquisition humaine. Ceux qui l'ont recu ont une responsabilite accrue — ils ne peuvent pas pretendre ignorer.",
              axe5_frequence: "Pour la mission du khalifa, le don du Livre est l'equipement de la mission. Le khalifa recoit les ecritures pour les lire, les comprendre et les appliquer. Le don implique la responsabilite — recevoir le Livre sans le mettre en pratique ou en cachant son contenu est une trahison de la mission. Le verset montre que le don divin appelle la reconnaissance, pas la dissimulation."
            },
            "Sens isolé/Détruire": {
              status: "nul",
              senses: ["detruire"],
              proof_ctx: "Le sens de destruction est hors sujet — le verbe decrit un don (Nous leur avons donne le Livre), pas un acte de destruction."
            }
          }
        }
      },
      // ktb pos=2
      {
        word_key: "ktb", position: 2, sense_chosen: "livre",
        analysis_axes: {
          sense_chosen: "livre",
          concept_chosen: "Livre/Écrit",
          concepts: {
            "Livre/Écrit": {
              status: "retenu",
              senses: ["livre", "ecriture revelee", "registre", "contrat ecrit", "contrat de mariage", "contrat d'affranchissement"],
              proof_ctx: "Le nom al-kitaba est un nom defini accusatif de la racine k-t-b. Le Lane's donne : livre, ecrit, ecriture revelee, registre. L'article defini « al- » indique qu'il s'agit du Livre connu, l'ecriture revelee specifique (Torah, Evangile). Le kitab est le support qui contient la revelation — c'est l'objet materiel ou conceptuel qui conserve la parole divine. La distinction avec le sens d'obligation (nul) est claire : le contexte est la reception d'un ecrit revele, pas un decret.",
              axe1_verset: "Le mot al-kitaba est l'objet du don (Nous leur avons donne le Livre). Le Livre est ce qui donne aux destinataires leur connaissance — c'est parce qu'ils ont le Livre qu'ils reconnaissent la verite. Le champ lexical (donner, reconnaitre, verite, savoir) montre que le Livre est la source de la reconnaissance. Le verset etablit un lien de causalite : avoir le Livre → reconnaitre la verite → mais un groupe cache cette verite.",
              axe2_voisins: "Le verset 144 parlait de la qibla et de la connaissance des gens du Livre. Le verset 145 montrait que meme si on leur apportait tous les signes, ils ne suivraient pas la qibla du Prophete. Le verset 146 precise la nature de leur savoir : ils reconnaissent la verite du Livre comme ils reconnaissent leurs fils. Le Livre est le lien entre les versets — c'est par le Livre qu'ils savent.",
              axe3_sourate: "La racine k-t-b est structurante dans la sourate al-Baqarah. En 2:2, le Livre est « celui dans lequel il n'y a pas de doute ». En 2:44, le reproche est fait a ceux qui ordonnent le bien et oublient le Livre. En 2:101, un groupe jette le Livre derriere son dos. Le verset 146 montre un autre aspect : ils ont le Livre, ils le connaissent, mais ils cachent son contenu au lieu de le transmettre.",
              axe4_coherence: "La racine k-t-b apparait environ 319 fois dans le Coran. Le Livre (al-kitab) est un concept central qui designe tantot le Coran, tantot la Torah, tantot l'Evangile, tantot le registre des actes. En 2:146, le Livre est l'ecriture revelee aux gens du Livre — c'est le support qui contient les signes de la verite qu'ils reconnaissent mais cachent.",
              axe5_frequence: "Pour la mission du khalifa, le Livre est le manuel de la mission. Le khalifa recoit le Livre pour le lire, le comprendre et le transmettre. Cacher le contenu du Livre est une trahison de la mission — le Livre est fait pour etre partage, pas dissimule. Le verset montre que posseder le Livre sans le partager est un manquement grave."
            },
            "Écriture/Inscription": {
              status: "probable",
              senses: ["ecrire", "dicter", "demander d'ecrire", "ecrire a quelqu'un", "s'inscrire", "copier un livre", "art de l'ecriture", "scribe", "savant", "ecole", "enseignant", "vendeur de livres"],
              proof_ctx: "Le sens d'ecriture est le fondement du sens de livre — le livre est le resultat de l'acte d'ecrire. Le Lane's confirme que la racine k-t-b porte d'abord le sens de tracer des signes ecrits. Ici le mot est un nom (al-kitab), pas un verbe, mais il derive de l'acte d'ecrire. Le sens d'ecriture reste pertinent comme arriere-plan etymologique.",
              axe1_verset: "Le mot al-kitab est un nom derive de l'acte d'ecrire. Dans le verset, il designe l'ecriture revelee, le resultat de l'acte d'ecrire divin. Le champ lexical inclut la reconnaissance et le savoir — le Livre est un ecrit qui transmet le savoir. L'ecriture est le fondement du Livre : sans acte d'ecrire, pas de livre. Le verset suppose que le Livre a ete ecrit puis transmis.",
              axe2_voisins: "Les versets voisins (144-148) traitent de la qibla et de la connaissance que les gens du Livre en ont. L'ecriture est le medium par lequel cette connaissance a ete conservee et transmise. Sans l'acte d'ecrire, la revelation serait orale et plus facile a nier ou a deformer. L'ecriture fixe et rend permanente la verite.",
              axe3_sourate: "La racine k-t-b dans la sourate al-Baqarah couvre tout le spectre : ecrire un contrat (2:282), prescrire le jeune (2:183), le Livre revele (2:2). L'ecriture est l'acte fondateur qui produit le Livre, le contrat, le decret. Le verset 146 utilise le resultat (le Livre) mais l'acte d'ecrire est implicite dans l'existence meme du Livre.",
              axe4_coherence: "La racine k-t-b dans le Coran lie systematiquement l'ecriture a la permanence — ce qui est ecrit dure, ce qui est oral s'oublie. En 52:2-3, le Coran jure par « un Livre trace (mastur), sur un parchemin deploye ». L'ecriture est la garantie de la transmission fidele. Les gens du Livre sont appeles ainsi parce qu'ils ont recu un ecrit, pas seulement une parole orale.",
              axe5_frequence: "Pour la mission du khalifa, l'ecriture est un outil de la mission. Le khalifa doit non seulement lire mais aussi ecrire — consigner, transmettre, preserver. L'acte d'ecrire transforme le savoir ephemere en savoir permanent. La mission du khalifa inclut la preservation de l'ecrit, pas seulement sa reception."
            },
            "Obligation/Décret": {
              status: "nul",
              senses: ["prescrire", "rendre obligatoire", "juger", "decret divin", "predestination"],
              proof_ctx: "Le sens de decret est hors sujet — le mot al-kitab ici designe l'ecriture revelee donnee aux gens du Livre, pas un decret ou une prescription."
            },
            "Assemblage/Couture": {
              status: "nul",
              senses: ["rassembler", "coudre", "attacher", "fermer la vulve", "lier l'outre", "se ceindre", "collecter", "preparer les troupes", "armee"],
              proof_ctx: "Le sens de couture ou d'assemblage est hors sujet — le mot est le Livre, l'ecriture revelee, pas un acte de couture ou de rassemblement physique."
            }
          }
        }
      },
      // erf pos=3 (ya'rifunahu)
      {
        word_key: "erf", position: 3, sense_chosen: "reconnaitre",
        analysis_axes: {
          sense_chosen: "reconnaitre",
          concept_chosen: "Connaissance/Reconnaissance",
          concepts: {
            "Connaissance/Reconnaissance": {
              status: "retenu",
              senses: ["connaitre", "reconnaitre", "bien reconnu", "coutume"],
              proof_ctx: "Le verbe ya'rifunahu est un inaccompli 3MP de la racine '-r-f avec pronom suffixe 3MS. Le Lane's donne : connaitre, reconnaitre, identifier, discerner. La ma'rifa est la connaissance par identification — on reconnait ce qu'on a deja vu ou dont on a les signes distinctifs. Ici le pronom « hu » renvoie au Prophete ou a la verite de la qibla. L'inaccompli marque une action presente et continue : ils le reconnaissent maintenant et continuent de le reconnaitre. La distinction avec le sens de « coutume » est que le verbe est a l'actif — ils reconnaissent activement, ce n'est pas une coutume passive.",
              axe1_verset: "Le verbe ya'rifunahu est le pivot du verset — il etablit le fait de la reconnaissance. Le verset construit un parallele : ils le reconnaissent (ya'rifunahu) comme ils reconnaissent (ya'rifuna) leurs fils. La double occurrence du meme verbe cree une equivalence de certitude. Le champ lexical (Livre, reconnaitre, fils, verite, savoir) montre que la reconnaissance est au coeur du verset. Le scandale n'est pas l'ignorance mais le fait de reconnaitre et de cacher malgre tout.",
              axe2_voisins: "Le verset 145 affirmait que les gens du Livre savent que la qibla du Prophete est vraie. Le verset 146 precise la nature de ce savoir : c'est une reconnaissance aussi certaine que celle d'un pere pour son fils. Le verset 147 declarera que la verite vient du Seigneur. La reconnaissance dans le verset 146 est le pont entre le savoir (145) et la verite (147).",
              axe3_sourate: "La racine '-r-f apparait dans la sourate al-Baqarah dans le contexte de la connaissance et de la reconnaissance. Le ma'ruf (le bien reconnu) est mentionne en 2:178, 2:228, 2:233 comme norme de conduite. Le verset 146 utilise le verbe dans son sens premier — reconnaitre par identification. La sourate lie la reconnaissance a la responsabilite : reconnaitre le vrai impose d'agir en consequence.",
              axe4_coherence: "La racine '-r-f apparait environ 71 fois dans le Coran. En 6:20, « ceux a qui Nous avons donne le Livre le reconnaissent comme ils reconnaissent leurs fils » — le meme verset presque mot pour mot. En 47:6, Dieu « leur fera reconnaitre » le Paradis. Le Coran utilise cette racine pour la connaissance par identification directe et certaine, pas par raisonnement indirect.",
              axe5_frequence: "Pour la mission du khalifa, la reconnaissance est un devoir de la mission. Le khalifa doit reconnaitre la verite la ou elle se trouve — la nier apres l'avoir reconnue est la pire forme de trahison. Le verset montre que la reconnaissance sans action (cacher la verite) est un echec de la mission. Reconnaitre oblige a transmettre."
            }
          }
        }
      },
      // erf pos=5 (ya'rifuna)
      {
        word_key: "erf", position: 5, sense_chosen: "reconnaitre",
        analysis_axes: {
          sense_chosen: "reconnaitre",
          concept_chosen: "Connaissance/Reconnaissance",
          concepts: {
            "Connaissance/Reconnaissance": {
              status: "retenu",
              senses: ["connaitre", "reconnaitre", "bien reconnu", "coutume"],
              proof_ctx: "Le verbe ya'rifuna est un inaccompli 3MP de la racine '-r-f sans pronom suffixe. Le Lane's donne : connaitre, reconnaitre, identifier. Ce second emploi du verbe sert de comparant — « comme ils reconnaissent leurs fils ». La reconnaissance des fils est instinctive et indubitable — un pere reconnait son fils sans hesitation. Le verbe est le meme que dans la premiere partie du parallele, ce qui cree l'equivalence : la reconnaissance de la verite est du meme ordre que la reconnaissance des fils.",
              axe1_verset: "Le verbe ya'rifuna est la deuxieme occurrence du meme verbe dans le verset, cette fois sans pronom suffixe et avec un objet different (abna'ahum, leurs fils). Le parallele est complet : verbe identique, sujets identiques (les gens du Livre), seul l'objet change. Le verset dit : la certitude qu'ils ont de la verite est la meme que celle qu'ils ont de leurs fils. La repetition du verbe rend la comparaison incontestable.",
              axe2_voisins: "Le verset 145 etablissait le savoir des gens du Livre. Le verset 146 precise ce savoir par une comparaison — la reconnaissance des fils est le comparant le plus fort possible. Personne ne doute de reconnaitre son propre fils. Le verset 147 enchainera : ne sois pas parmi les sceptiques. La reconnaissance certaine dans le verset 146 prepare l'injonction du verset 147.",
              axe3_sourate: "La racine '-r-f dans la sourate al-Baqarah est liee au ma'ruf — le bien reconnu. La sourate etablit que la verite est reconnaissable, identifiable. Le verset 146 pousse cette logique au maximum : la verite est aussi reconnaissable qu'un fils. La sourate montre que le probleme n'est pas la difficulte de reconnaitre mais le choix delibere de cacher apres avoir reconnu.",
              axe4_coherence: "La racine '-r-f dans le Coran lie la connaissance a l'identification. En 2:273, « tu les reconnaitra (ta'rifuhum) a leur marque ». En 7:46, les gens du A'raf « reconnaissent chacun a sa marque ». Le verbe ya'rif est toujours une connaissance directe et certaine, pas une supposition. Le Coran utilise cette racine quand il veut insister sur la certitude de la connaissance.",
              axe5_frequence: "Pour la mission du khalifa, la comparaison avec la reconnaissance des fils montre que la verite divine est reconnaissable de maniere naturelle et certaine. Le khalifa n'a pas a chercher la verite dans l'obscurite — elle est aussi claire que le visage de son propre fils. Le probleme n'est pas de trouver la verite mais d'accepter de la suivre."
            }
          }
        }
      },
      // bny pos=6
      {
        word_key: "bny", position: 6, sense_chosen: "fils",
        analysis_axes: {
          sense_chosen: "fils",
          concept_chosen: "Filiation",
          concepts: {
            "Filiation": {
              status: "retenu",
              senses: ["fils"],
              proof_ctx: "Le mot abna'ahum est un pluriel brise de ibn (fils) de la racine b-n-y avec pronom suffixe 3MP. Le Lane's donne : fils, enfant, descendant. Le ibn est celui qui est construit (bana) a partir du pere — la filiation est une construction biologique. Le pluriel abna' designe les fils au pluriel. Le pronom « hum » renvoie aux gens du Livre. La reconnaissance des fils est le comparant — un pere reconnait son fils avec une certitude absolue, sans hesitation ni doute.",
              axe1_verset: "Le mot abna'ahum est le comparant de la reconnaissance — la certitude de reconnaitre la verite est comparee a la certitude de reconnaitre ses fils. Le choix du fils (pas de la maison ou de la route) est delibere : le fils est ce qu'un pere connait le mieux au monde. Le champ lexical (reconnaitre, fils, verite, savoir) montre que le verset parle de certitude intime et indubitable. La filiation est le lien le plus fort et le plus certain.",
              axe2_voisins: "Le verset 145 montrait le savoir des gens du Livre sur la qibla. Le verset 146 illustre ce savoir par la comparaison avec la filiation — la plus intime des connaissances. Le verset 147 declarera la verite venant du Seigneur. La filiation dans le verset 146 sert a montrer l'absurdite de la dissimulation : on ne peut pas nier connaitre son fils, on ne devrait pas pouvoir cacher une verite aussi certaine.",
              axe3_sourate: "La racine b-n-y dans la sourate al-Baqarah apparait dans le contexte des fils d'Israel (bani Isra'il). En 2:40, 2:47, 2:122, Dieu s'adresse aux fils d'Israel. Le verset 146 utilise abna' dans un contexte different — les fils biologiques comme mesure de certitude. La sourate lie la filiation a l'identite : les fils d'Israel sont definis par leur filiation, et la filiation est le comparant de la certitude.",
              axe4_coherence: "La racine b-n-y apparait environ 171 fois dans le Coran. La majorite des usages concernent les fils d'Israel ou les fils d'Adam. En 6:20, le meme parallele apparait : « ils le reconnaissent comme ils reconnaissent leurs fils ». Le Coran utilise la filiation comme mesure ultime de certitude — rien n'est plus certain pour un pere que de reconnaitre son fils.",
              axe5_frequence: "Pour la mission du khalifa, la filiation rappelle la responsabilite intergenerationnelle. Le khalifa est le fils d'Adam charge d'une mission. La comparaison avec les fils montre que la verite divine est aussi evidente que l'existence de sa propre descendance. La mission du khalifa inclut la transmission a ses fils — cacher la verite c'est priver sa descendance de la guidance."
            },
            "Construction/Édification": {
              status: "probable",
              senses: ["construire", "batir", "edifier", "donner une maison"],
              proof_ctx: "Le sens de construire est le fondement etymologique de la racine b-n-y. Le Lane's donne : construire, batir, edifier. Le fils (ibn) est celui qui est « construit » a partir du pere. Dans le verset 146, le mot est abna' (fils), pas un verbe de construction. Mais l'arriere-plan etymologique montre que la filiation est une forme de construction — le pere construit sa descendance. Ce sens reste en arriere-plan sans etre le sens actif du verset.",
              axe1_verset: "Le mot abna' est un nom pluriel, pas un verbe de construction. Cependant l'arriere-plan de construction est present : les fils sont le resultat d'une « construction » biologique et sociale. Le verset ne parle pas de batir mais de reconnaitre — les fils sont l'objet de la reconnaissance, pas de la construction. Le sens de construction est etymologique mais pas contextuel.",
              axe2_voisins: "Les versets voisins traitent de la qibla et de la connaissance — pas de construction physique. Le sens de construire reste dans l'etymologie sans etre active par le contexte. Cependant en 2:127, Ibrahim et Ismail elevent les fondations de la Maison — la construction et la filiation sont liees dans le recit abrahamique de la sourate.",
              axe3_sourate: "La racine b-n-y dans la sourate al-Baqarah apparait dans deux champs : la filiation (bani Isra'il) et la construction (2:127, les fondations de la Ka'ba). Le verset 146 est dans le champ de la filiation. Mais la sourate montre que les deux sens sont lies : Ibrahim construit la Ka'ba avec son fils Ismail — construction physique et filiation s'unissent.",
              axe4_coherence: "La racine b-n-y dans le Coran lie construction et filiation de maniere recurrente. En 37:102, le fils d'Ibrahim est le « garcon » que le pere a « construit » par sa priere. En 66:11, l'epouse de Pharaon demande que Dieu lui construise une maison au Paradis. Le Coran associe les deux sens : la famille est une construction, la construction est un acte familial.",
              axe5_frequence: "Pour la mission du khalifa, la construction est un volet de la mission. Le khalifa construit la civilisation comme il construit sa famille. La filiation et la construction sont deux faces de la meme mission : transmettre et edifier. Le fils est le premier edifice du pere, la civilisation est l'edifice collectif."
            }
          }
        }
      },
      // frq pos=8
      {
        word_key: "frq", position: 8, sense_chosen: "groupe",
        analysis_axes: {
          sense_chosen: "groupe",
          concept_chosen: "Séparation/Distinction",
          concepts: {
            "Séparation/Distinction": {
              status: "retenu",
              senses: ["separer", "distinguer", "diviser", "Furqan"],
              proof_ctx: "Le mot fariqan est un nom masculin singulier indefini accusatif de la racine f-r-q. Le Lane's donne : partie separee, groupe distinct, fraction d'un ensemble. Le firiq est une partie qui s'est detachee du tout — il porte en lui l'idee de separation. Ici « fariqan minhum » (un groupe d'entre eux) precise que seule une fraction cache la verite, pas la totalite. L'indefini et l'accusatif marquent que ce groupe est une partie non specifiee du tout. La distinction avec le sens de Furqan est que le mot est ici un nom concret designant un sous-groupe, pas le Discernement divin.",
              axe1_verset: "Le mot fariqan est le sujet du verbe yaktumuna (cachent). Le verset precise que le cache est le fait d'un groupe, pas de tous les gens du Livre. Le champ lexical (reconnaitre, fils, groupe, cacher, verite, savoir) montre deux attitudes : la reconnaissance (tous) et la dissimulation (un groupe). Le verset separe les responsables des innocents — pas tous sont coupables de dissimulation.",
              axe2_voisins: "Le verset 145 parlait des gens du Livre en general. Le verset 146 distingue un groupe parmi eux — ceux qui cachent la verite. Le verset 147 s'adresse au Prophete pour le rassurer : la verite vient de ton Seigneur. La distinction entre « tous » et « un groupe » dans le verset 146 montre la precision du texte — le blame vise un sous-groupe, pas l'ensemble.",
              axe3_sourate: "La racine f-r-q est recurrente dans la sourate al-Baqarah. En 2:53, le Furqan est le Discernement. En 2:101, un groupe (fariqun) jette le Livre derriere son dos. En 2:146, un groupe (fariqan) cache la verite. La sourate montre que le groupe dissident est un phenomene recurrent — a chaque epoque, une fraction rejette ou cache la verite tandis que d'autres l'acceptent.",
              axe4_coherence: "La racine f-r-q apparait environ 72 fois dans le Coran. Le mot fariq designe systematiquement une fraction — en 2:85, 2:87, 2:101, 3:23, 3:78. Le Coran ne generalise jamais le blame a l'ensemble du peuple — il distingue toujours un groupe specifique. Cette precision est un trait distinctif du discours coranique qui evite la condamnation collective.",
              axe5_frequence: "Pour la mission du khalifa, le fait que seul un groupe cache la verite montre que la resistance a la mission n'est pas universelle. Le khalifa doit savoir que sa mission trouvera des allies parmi les gens du Livre — tous ne sont pas contre lui. La separation entre ceux qui cachent et ceux qui reconnaissent est un fait permanent dans toute communaute."
            },
            "Groupe/Partie": {
              status: "nul",
              senses: ["groupe", "partie"],
              proof_ctx: "Ce sens est englobe par le sens retenu de separation — le firiq est un groupe qui s'est separe de l'ensemble. Le concept de separation est premier et le concept de groupe en decoule. Le groupe n'existe comme tel que parce qu'il s'est separe du tout."
            }
          }
        }
      },
      // ktm pos=10
      {
        word_key: "ktm", position: 10, sense_chosen: "cacher",
        analysis_axes: {
          sense_chosen: "cacher",
          concept_chosen: "Dissimulation/Secret",
          concepts: {
            "Dissimulation/Secret": {
              status: "retenu",
              senses: ["cacher", "taire", "dissimuler", "garder secret"],
              proof_ctx: "Le verbe layaktumuna est un inaccompli 3MP de la racine k-t-m avec la particule d'insistance « la- ». Le Lane's donne : cacher, dissimuler, taire, garder secret. Le katm est l'acte delibere de soustraire une information a la connaissance d'autrui. La particule « la- » insiste sur la realite et la continuite de l'acte : ils cachent vraiment et continuent de cacher. Le complement direct est al-haqqa (la verite) — ils ne cachent pas n'importe quoi mais la verite meme. La racine k-t-m n'a qu'un seul champ semantique dans le Coran (dissimulation), ce qui rend le choix immediat.",
              axe1_verset: "Le verbe layaktumuna est l'action blame dans le verset — cacher la verite apres l'avoir reconnue. Le verset construit une progression : don du Livre → reconnaissance certaine → dissimulation deliberee. Le « la- » emphatique insiste : ils cachent vraiment, ce n'est pas un soupcon. Le champ lexical (reconnaitre, fils, cacher, verite, savoir) montre le contraste entre ce qu'ils savent et ce qu'ils font — ils savent mais cachent.",
              axe2_voisins: "Le verset 145 montrait que les gens du Livre ne suivraient pas la qibla du Prophete malgre leur savoir. Le verset 146 precise que non seulement ils ne suivent pas mais ils cachent activement la verite. Le verset 147 declarera la verite venant du Seigneur. La dissimulation dans le verset 146 est la cause du probleme : si la verite etait transmise au lieu d'etre cachee, les gens pourraient suivre la bonne direction.",
              axe3_sourate: "La racine k-t-m apparait dans la sourate al-Baqarah a plusieurs reprises dans le contexte de la dissimulation des ecritures. En 2:42, « ne melangez pas le vrai au faux et ne cachez pas (taktumu) la verite ». En 2:140, « qui est plus injuste que celui qui cache un temoignage ? ». Le verset 146 s'inscrit dans ce theme recurrent de la dissimulation deliberee des ecritures par un groupe de leurs detenteurs.",
              axe4_coherence: "La racine k-t-m apparait environ 18 fois dans le Coran. En 2:42, 2:140, 2:146, 2:159, 2:174, 3:71 — la majorite des occurrences concernent la dissimulation de la verite par les gens du Livre. Le Coran traite la dissimulation de la verite comme un peche grave — en 2:159, « ceux qui cachent ce que Nous avons fait descendre, ceux-la, Dieu les maudit ». Le katm est une faute specifique et gravissime.",
              axe5_frequence: "Pour la mission du khalifa, la dissimulation est l'antithese de la mission. Le khalifa est charge de transmettre la verite, pas de la cacher. Le verset montre que cacher la verite en toute connaissance de cause est la pire forme de trahison de la mission. La mission du khalifa est la transparence — tout ce qui est su doit etre dit, tout ce qui est reconnu doit etre partage."
            }
          }
        }
      },
      // hqq pos=11
      {
        word_key: "hqq", position: 11, sense_chosen: "verite",
        analysis_axes: {
          sense_chosen: "verite",
          concept_chosen: "Vérité/Réalité",
          concepts: {
            "Vérité/Réalité": {
              status: "retenu",
              senses: ["etre vrai", "verite", "realite", "droit"],
              proof_ctx: "Le nom al-haqqa est un nom defini accusatif de la racine h-q-q. Le Lane's donne : verite, realite, droit, ce qui est juste et vrai. Le haqq est l'etat objectif de ce qui correspond a la realite — il existe independamment de la volonte humaine. L'article defini « al- » indique la verite specifique et connue — celle que les gens du Livre reconnaissent. L'accusatif marque le complement direct du verbe yaktumuna (ils cachent la verite). La distinction avec le sens d'obligation (nul) est claire : le contexte est la verite reconnue et cachee, pas un devoir a accomplir.",
              axe1_verset: "Le mot al-haqqa est le complement direct du verbe yaktumuna — c'est l'objet de la dissimulation. Le verset dit : ils cachent LA verite (avec article defini) — pas n'importe quelle verite mais la verite specifique qu'ils ont reconnue comme on reconnait ses fils. Le champ lexical (Livre, reconnaitre, cacher, savoir) montre que la verite est au centre du verset : elle est donnee (le Livre), reconnue (ya'rifuna), cachee (yaktumuna) et sue (ya'lamuna). La verite traverse tout le verset.",
              axe2_voisins: "Le verset 144 evoquait la bonne direction de la qibla. Le verset 145 affirmait le savoir des gens du Livre. Le verset 146 identifie l'objet exact de ce savoir : la verite (al-haqq). Le verset 147 declarera : « la verite vient de ton Seigneur ». La verite est le fil conducteur des versets 144-147 — elle est la qibla, le savoir, l'objet de la dissimulation et la source divine.",
              axe3_sourate: "La racine h-q-q est fondamentale dans la sourate al-Baqarah. En 2:26, « ils savent que c'est la verite ». En 2:42, « ne cachez pas la verite ». En 2:91, « alors qu'il confirme ce qui est avec eux ». En 2:109, « apres que la verite leur est devenue claire ». Le verset 146 s'inscrit dans cette insistance sur la verite et son evidence — la sourate montre que la verite est claire et accessible, le probleme est la dissimulation.",
              axe4_coherence: "La racine h-q-q apparait environ 287 fois dans le Coran. Le Coran se definit lui-meme comme al-haqq (la verite). En 10:94, le doute est leve pour ceux qui cherchent. En 17:81, « la verite est venue et le faux a disparu ». Le haqq est un attribut divin (al-Haqq, le Vrai) et une realite objective que le Coran transmet. Cacher le haqq c'est cacher Dieu Lui-meme.",
              axe5_frequence: "Pour la mission du khalifa, la verite est l'objet de la mission. Le khalifa est charge de transmettre le haqq — la verite objective. Cacher la verite c'est trahir la mission fondamentale. Le verset montre que la verite existe objectivement (al-haqq avec l'article) — elle n'est pas une construction humaine mais une realite divine. La mission du khalifa est de la rendre visible, pas de la cacher."
            },
            "Obligation/Nécessité": {
              status: "nul",
              senses: ["devoir", "meriter", "etre obligatoire"],
              proof_ctx: "Le sens d'obligation est hors sujet — le mot al-haqq ici designe la verite qu'ils cachent, pas un devoir ou une necessite a accomplir."
            },
            "Sens isolé/Se": {
              status: "nul",
              senses: ["se realiser"],
              proof_ctx: "Le sens de realisation est hors sujet — le mot est un nom defini accusatif (la verite), pas un verbe reflexif."
            },
            "Sens isolé/Vérifier": {
              status: "nul",
              senses: ["verifier"],
              proof_ctx: "Le sens de verification est hors sujet — le mot est le nom « la verite » en position d'objet direct, pas un verbe de verification."
            }
          }
        }
      },
      // elm pos=13
      {
        word_key: "elm", position: 13, sense_chosen: "savoir",
        analysis_axes: {
          sense_chosen: "savoir",
          concept_chosen: "Savoir/Connaissance",
          concepts: {
            "Savoir/Connaissance": {
              status: "retenu",
              senses: ["savoir", "connaitre", "etre informe", "certitude", "savant", "science", "enseignement"],
              proof_ctx: "Le verbe ya'lamuna est un inaccompli 3MP de la racine '-l-m. Le Lane's donne : savoir, connaitre, etre informe. Le 'ilm est la connaissance certaine et fondee — pas un soupcon mais un savoir reel. L'inaccompli indique un etat permanent : ils savent. Le verset se termine par ce mot pour insister : la dissimulation n'est pas par ignorance mais par savoir. Le contexte separe clairement le sens de savoir (retenu) du sens de monde (nul) : le verbe ya'lamuna est un verbe d'action mentale, pas un nom designant l'univers.",
              axe1_verset: "Le verbe ya'lamuna ferme le verset sur une note de condamnation : ils cachent la verite « alors qu'ils savent ». Le « wa-hum ya'lamuna » (alors qu'ils savent) est une circonstancielle d'etat qui aggrave le blame — cacher par ignorance serait moins grave, cacher en sachant est inexcusable. Le champ lexical du verset (Livre, reconnaitre, fils, cacher, verite) converge vers ce dernier mot : ils savent tout cela et pourtant ils cachent.",
              axe2_voisins: "Le verset 145 affirmait que les gens du Livre « savent » (ya'lamuna) — le meme verbe. Le verset 146 repete ce verbe en fin de verset pour confirmer : oui, ils savent. Le verset 147 declarera la verite et interdira le doute. Les versets 145-147 forment un bloc sur le savoir, la certitude et l'interdiction du doute. Le savoir est la constante — il ne fait aucun doute qu'ils savent.",
              axe3_sourate: "La racine '-l-m est la plus frequente de la sourate al-Baqarah apres le nom d'Allah. En 2:13, « mais ils ne savent pas ». En 2:22, « ne donnez pas d'egaux a Dieu alors que vous savez ». En 2:42, « ne cachez pas la verite alors que vous savez ». Le verset 146 reprend exactement ce schema : cacher + verite + savoir. La sourate condamne specifiquement ceux qui savent mais agissent contre leur savoir.",
              axe4_coherence: "La racine '-l-m apparait environ 854 fois dans le Coran — c'est l'une des racines les plus frequentes. Le Coran valorise le savoir au plus haut point — en 39:9, « sont-ils egaux ceux qui savent et ceux qui ne savent pas ? ». Mais le savoir sans action est condamne — en 2:44, « ordonnez-vous la bonte aux gens tout en vous oubliant vous-memes ? ». Le savoir oblige a l'action coherente.",
              axe5_frequence: "Pour la mission du khalifa, le savoir est l'outil premier de la mission. Le khalifa doit savoir pour agir. Le verset montre que savoir sans transmettre est un echec de la mission — le savoir n'est pas une fin en soi mais un moyen d'agir et de transmettre. La mission du khalifa requiert le savoir et l'action coherente avec ce savoir. Savoir et cacher est la pire forme de trahison."
            },
            "Marque/Signe": {
              status: "nul",
              senses: ["marquer", "signe", "drapeau", "montagne", "repere", "etendard", "levre fendue"],
              proof_ctx: "Le sens de marque/signe est hors sujet — le mot ya'lamuna est un verbe (ils savent), pas un nom designant un signe ou un repere. La racine '-l-m a bien le sens de marque mais ici le verbe est clairement dans le champ du savoir."
            },
            "Monde/Création": {
              status: "nul",
              senses: ["monde", "les mondes", "ensemble des creatures", "univers"],
              proof_ctx: "Le sens de monde est hors sujet — le mot ya'lamuna est un verbe (ils savent), pas un nom designant l'univers. Le mot 'alamin (les mondes) est un nom pluriel distinct du verbe ya'lamuna."
            }
          }
        }
      }
    ]
  }
};

// =====================================================
// INSERTION VWA + UPDATE verse_analyses
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

  const verseIds = [153];
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
  console.log('=== PIPELINE SOURATE 2 — VERSET 146 ===\n');
  await processVerse(146);
  await syncWordMeanings();
  console.log('\n=== PIPELINE V146 TERMINEE ===');
}

main().catch(e => console.error('FATAL:', e));
