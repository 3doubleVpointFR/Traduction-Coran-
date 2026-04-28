const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// =====================================================
// PIPELINE SOURATE 2 — VERSET 145
// verse_id=152, analysis_id=510
// "Et meme si tu apportais a ceux a qui le Livre a ete
//  donne toutes les preuves, ils ne suivraient pas ta
//  direction. Et tu ne suis pas leur direction. Et eux-memes
//  ne suivent pas la direction les uns des autres. Si tu
//  suivais leurs passions apres ce qui t'est venu comme
//  savoir, tu serais alors parmi les injustes."
// =====================================================

const verseData = {
  145: {
    verse_id: 152,
    analysis_id: 510,
    translation_arab: "Et meme si tu apportais a ceux a qui le Livre a ete donne toutes les preuves, ils ne suivraient pas ta direction. Et tu ne suis pas leur direction. Et certains d'entre eux ne suivent pas la direction de certains autres. Et si tu suivais leurs passions apres ce qui t'est venu comme savoir, tu serais alors parmi les injustes.",
    full_translation: "Certes, meme si tu apportais toutes les preuves a ceux a qui le Livre fut donne, ils ne suivraient pas ta direction de priere. Et toi, tu ne suis pas leur direction de priere. Et les uns ne suivent pas la direction de priere des autres. Or, si tu suivais leurs passions apres ce qui t'est parvenu comme science, tu serais certes du nombre des injustes.",
    translation_explanation: `§DEMARCHE§
Le verset presente quatre propositions distinctes qui structurent le rapport entre le Prophete et les gens du Livre au sujet de la qibla. Le verbe **atayta** est un accompli 2MS de la racine a-t-y. Le Lane's donne : venir, apporter. Ici la forme II (a-t-y) avec le pronom « ta » (tu) signifie « tu as apporte » — l'accompli dans une construction conditionnelle (la-in) marque une hypothese realisable mais dont le resultat est rejete. Le sens est « meme si tu apportais ». Le verbe passif **utu** est un accompli passif 3MP de la racine a-w-t. Le Lane's donne : donner, accorder. « Ceux a qui le Livre a ete donne » — le passif indique que la reception du Livre est un don divin, pas une acquisition humaine. Le nom **al-kitaba** est un nom masculin singulier defini accusatif de la racine k-t-b. Le Lane's donne : livre, ecriture revelee. L'article defini (al-) identifie LE Livre connu — les ecritures revelees. Le nom **kulli** est un nom masculin singulier de la racine k-l-l. Le Lane's donne : tout, chaque, totalite. Kulli ayatin signifie « toute preuve » sans exception — la totalite des arguments possibles. Le nom **ayatin** est un nom feminin singulier indefini de la racine a-y-h. Le Lane's donne : signe, preuve, verset. Le signe est ce qui rend visible et manifeste. Ici au singulier avec « kulli », il prend le sens distributif : chaque signe individuellement, et donc tous les signes. Le verbe **tabia** est un accompli 3MP de la racine t-b-a. Le Lane's donne : suivre, marcher derriere, imiter. Le suivi est un mouvement directionnel — on va dans la direction de celui qu'on suit. L'accompli avec la negation (ma tabi'u) indique un refus categorique. Le nom **qiblataka** est un nom feminin singulier defini de la racine q-b-l avec pronom possessif 2MS. Le Lane's donne : direction vers laquelle on se tourne, qibla. La qibla est la direction de la priere — c'est l'orientation physique et spirituelle. Le possessif « ka » (ta) rattache cette direction au Prophete : « ta direction ». La deuxieme proposition inverse les roles : « wa-ma anta bi-tabi'in qiblatahum » — et tu n'es pas un suiveur de leur direction. Le participe actif **tabi'in** au genitif avec la preposition « bi » de negation renforce le refus. Le pronom **anta** (toi, tu) isole le Prophete et affirme sa position distincte. La troisieme proposition etend le refus aux groupes entre eux : « wa-ma ba'duhum bi-tabi'in qiblata ba'din » — certains d'entre eux ne suivent pas la direction de certains autres. Le nom **ba'duhum** est un nom de la racine b-'-d avec pronom 3MP. Le Lane's donne : partie, certains. Cela montre que les gens du Livre ne sont pas unanimes entre eux — ils ont des directions differentes. Le verbe **ittaba'ta** est un accompli 8e forme (iftaa'la) de la racine t-b-a avec pronom 2MS. Le Lane's donne : suivre deliberement. La 8e forme intensifie l'acte de suivre — c'est un suivi choisi et volontaire. L'accompli dans la conditionnelle « wa-la-ini » (et si) marque l'hypothese. Le nom **ahwa'ahum** est un pluriel brise de la racine h-w-y avec pronom 3MP. Le Lane's donne : passion, desir, penchant de l'ame. Les passions (ahwa') sont les inclinations de l'ame qui detournent de la raison et de la verite. Le possessif « hum » (leurs) rattache ces passions aux gens du Livre. Le nom **ba'di** est de la racine b-'-d. Le Lane's donne : apres. Ici « min ba'di ma ja'aka » signifie « apres ce qui t'est venu ». Le sens temporel d'apres est un sens secondaire de la racine qui signifie fondamentalement « partie » — ce qui vient apres est la partie qui suit. Le verbe **ja'aka** est un accompli 3MS de la racine j-y-a avec pronom 2MS. Le Lane's donne : venir, arriver. « Ce qui t'est venu » designe le savoir revele. Le nom **al-'ilmi** est un nom masculin singulier defini genitif de la racine '-l-m. Le Lane's donne : savoir, connaissance, science. L'article defini (al-) designe LE savoir specifique — la revelation. Le savoir est oppose aux passions : le savoir est la realite objective, les passions sont les penchants subjectifs. Le nom **az-zalimina** est un participe actif pluriel masculin defini accusatif de la racine z-l-m. Le Lane's donne : etre injuste, opprimer, placer hors de sa place. L'injuste est celui qui met les choses la ou elles ne doivent pas etre. Suivre les passions apres avoir recu le savoir c'est placer les passions a la place du savoir — c'est l'injustice fondamentale.

§JUSTIFICATION§
**apportais** — Le sens retenu est « apporter ». Le verbe atayta designe l'acte d'amener quelque chose a quelqu'un. L'alternative « venir » est ecartee car le verbe est ici transitif — il apporte des preuves (objet direct).

**donne** — Le sens retenu est « donner ». Le passif utu designe la reception passive du Livre. L'alternative « venir » est ecartee car le verbe est au passif — ils ont recu, ils n'ont pas acquis.

**le Livre** — Le sens retenu est « livre ». Le mot al-kitab designe l'ecriture revelee. L'alternative « ecrire » est ecartee car le mot est un nom defini, pas un verbe.

**toutes** — Le sens retenu est « tout ». Le mot kulli quantifie sans exception — meme toutes les preuves ne suffiraient pas. L'alternative « fardeau » est ecartee car le contexte est la quantification, pas la charge.

**preuves** — Le sens retenu est « signe/preuve ». Le mot ayatin designe ce qui manifeste la verite. L'alternative n'existe pas dans les concepts — la racine a-y-h n'est pas attestee dans le Lane's sous cette forme, mais le sens coranique de signe/verset est bien etabli.

**suivraient** — Le sens retenu est « suivre ». Le verbe tabi'u designe le suivi directionnel. L'alternative « imiter » est ecartee car le contexte est le suivi d'une direction de priere, pas l'imitation d'un comportement.

**direction** — Le sens retenu est « direction ». Le mot qiblata designe la direction de la priere. L'alternative « recevoir » est ecartee car le contexte est l'orientation, pas la reception. Le concept « Orientation/Direction » est retenu comme probable dans les concepts, mais c'est bien le sens actif dans ce verset ou qibla est explicitement la direction de priere.

**suiveur** — Le sens retenu est « suivre ». Deuxieme occurrence de la racine t-b-a sous forme de participe actif au genitif. Le Prophete n'est pas un suiveur de leur direction.

**direction** — Deuxieme occurrence de q-b-l — « leur direction » (qiblatahum). Meme analyse que la premiere occurrence.

**certains** — Le sens retenu est « partie ». Le mot ba'duhum designe une fraction du groupe. L'alternative « moustique » est ecartee — ce sens isole n'est pas pertinent.

**suiveur** — Troisieme occurrence de t-b-a — les uns ne suivent pas les autres. Meme sens de « suivre ».

**direction** — Troisieme occurrence de q-b-l — « la direction de certains autres ». Meme analyse.

**certains** — Deuxieme occurrence de b-'-d — « de certains autres ». Meme sens de partie.

**suivais** — Quatrieme occurrence de t-b-a sous la 8e forme (ittaba'ta). Le suivi volontaire et delibere. L'intensification de la forme VIII marque que ce serait un choix conscient.

**passions** — Le sens retenu est « passion/desir ». Le mot ahwa' designe les penchants de l'ame. L'alternative « tomber » est ecartee car le contexte est les inclinations subjectives, pas la chute physique.

**apres** — Troisieme occurrence de b-'-d — sens temporel « apres ». Le mot ba'di avec la preposition min designe la posteriorite temporelle. L'alternative « partie » est le sens premier mais ici le contexte temporel impose « apres ».

**venu** — Le sens retenu est « venir ». Le verbe ja'aka designe l'arrivee du savoir. L'alternative « apporter » est ecartee car le sujet est le savoir qui vient, pas une personne qui apporte.

**savoir** — Le sens retenu est « savoir ». Le mot al-'ilm designe la connaissance revelee. L'alternative « monde » est ecartee car le contexte est le savoir oppose aux passions.

**injustes** — Le sens retenu est « injuste ». Le mot az-zalimina designe ceux qui placent les choses hors de leur place. L'alternative « obscurite » est ecartee car le mot est un participe actif designant des personnes, pas un etat.

§CRITIQUE§
Les traductions courantes rendent ce verset de maniere similaire. La principale difference est le mot « qibla » que Hamidullah traduit par « direction » et que d'autres traducteurs laissent tel quel. Nous choisissons « direction » car c'est le sens etymologique de la racine q-b-l (se tourner vers, faire face) et que le mot qibla en francais est un emprunt technique qui ne rend pas la signification profonde. L'autre point notable est « ahwa' » (passions) — certaines traductions donnent « desirs » mais « passions » est plus precis car le mot designe des inclinations qui dominent la raison, pas de simples envies. Le verset est remarquable par sa structure en quatre propositions qui couvrent toutes les combinaisons possibles : eux ne te suivent pas, tu ne les suis pas, ils ne se suivent pas entre eux, et si tu les suivais tu serais injuste. Cette exhaustivite montre que la direction du Prophete est autonome et ne depend d'aucun compromis.`,
    segments: [
      { fr: "et meme si", phon: "wa-la-in", arabic: "\u0648\u064e\u0644\u064e\u0626\u0650\u0646\u0652", is_particle: true, position: 0 },
      { fr: "tu apportais", pos: "verbe", phon: "atayta", arabic: "\u0623\u064e\u062a\u064e\u064a\u0652\u062a\u064e", word_key: "aty", is_particle: false, sense_retenu: "apporter", position: 1 },
      { fr: "ceux qui", phon: "alladhina", arabic: "\u0671\u0644\u0651\u064e\u0630\u0650\u064a\u0646\u064e", is_particle: true, position: 2 },
      { fr: "ont recu", pos: "verbe", phon: "utu", arabic: "\u0623\u064f\u0648\u062a\u064f\u0648\u0627\u06df", word_key: "awt", is_particle: false, sense_retenu: "donner", position: 3 },
      { fr: "le Livre", pos: "nom", phon: "al-kitaba", arabic: "\u0671\u0644\u0652\u0643\u0650\u062a\u064e\u0640\u0628\u064e", word_key: "ktb", is_particle: false, sense_retenu: "livre", position: 4 },
      { fr: "toutes", pos: "nom", phon: "kulli", arabic: "\u0643\u064f\u0644\u0651\u064e", word_key: "kll", is_particle: false, sense_retenu: "tout", position: 5 },
      { fr: "les preuves", pos: "nom", phon: "ayatin", arabic: "\u0622\u064a\u064e\u0629\u064d", word_key: "ayh", is_particle: false, sense_retenu: "signe", position: 6 },
      { fr: "ne", phon: "ma", arabic: "\u0645\u064e\u0627", is_particle: true, position: 7 },
      { fr: "suivraient", pos: "verbe", phon: "tabi'u", arabic: "\u062a\u064e\u0628\u0650\u0639\u064f\u0648\u0627\u06df", word_key: "tba", is_particle: false, sense_retenu: "suivre", position: 8 },
      { fr: "ta direction", pos: "nom", phon: "qiblataka", arabic: "\u0642\u0650\u0628\u0652\u0644\u064e\u062a\u064e\u0643\u064e", word_key: "qbl", is_particle: false, sense_retenu: "direction", position: 9 },
      { fr: "et ne", phon: "wa-ma", arabic: "\u0648\u064e\u0645\u064e\u0627", is_particle: true, position: 10 },
      { fr: "toi", phon: "anta", arabic: "\u0623\u064e\u0646\u062a\u064e", is_particle: true, position: 11 },
      { fr: "suiveur de", pos: "nom", phon: "bitabi'in", arabic: "\u0628\u0650\u062a\u064e\u0627\u0628\u0650\u0639\u064d", word_key: "tba", is_particle: false, sense_retenu: "suivre", position: 12 },
      { fr: "leur direction", pos: "nom", phon: "qiblatahum", arabic: "\u0642\u0650\u0628\u0652\u0644\u064e\u062a\u0650\u0647\u0650\u0645\u0652", word_key: "qbl", is_particle: false, sense_retenu: "direction", position: 13 },
      { fr: "et ne", phon: "wa-ma", arabic: "\u0648\u064e\u0645\u064e\u0627", is_particle: true, position: 14 },
      { fr: "certains d'entre eux", pos: "nom", phon: "ba'duhum", arabic: "\u0628\u064e\u0639\u0652\u0636\u064f\u0647\u064f\u0645", word_key: "bed", is_particle: false, sense_retenu: "partie", position: 15 },
      { fr: "suiveur de", pos: "nom", phon: "bitabi'in", arabic: "\u0628\u0650\u062a\u064e\u0627\u0628\u0650\u0639\u064d", word_key: "tba", is_particle: false, sense_retenu: "suivre", position: 16 },
      { fr: "la direction de", pos: "nom", phon: "qiblata", arabic: "\u0642\u0650\u0628\u0652\u0644\u064e\u0629\u064e", word_key: "qbl", is_particle: false, sense_retenu: "direction", position: 17 },
      { fr: "certains autres", pos: "nom", phon: "ba'din", arabic: "\u0628\u064e\u0639\u0652\u0636\u064d", word_key: "bed", is_particle: false, sense_retenu: "partie", position: 18 },
      { fr: "et si tu", pos: "verbe", phon: "wa-la-ini ittaba'ta", arabic: "\u0648\u064e\u0644\u064e\u0626\u0650\u0646\u0650 \u0671\u062a\u0651\u064e\u0628\u064e\u0639\u0652\u062a\u064e", word_key: "tba", is_particle: false, sense_retenu: "suivre", position: 19 },
      { fr: "leurs passions", pos: "nom", phon: "ahwa'ahum", arabic: "\u0623\u064e\u0647\u0652\u0648\u064e\u0622\u0621\u064e\u0647\u064f\u0645", word_key: "hwy", is_particle: false, sense_retenu: "passion", position: 20 },
      { fr: "apres", pos: "nom", phon: "min ba'di", arabic: "\u0645\u0650\u0646\u06e2 \u0628\u064e\u0639\u0652\u062f\u0650", word_key: "bed", is_particle: false, sense_retenu: "apres", position: 21 },
      { fr: "ce qui", phon: "ma", arabic: "\u0645\u064e\u0627", is_particle: true, position: 22 },
      { fr: "t'est venu", pos: "verbe", phon: "ja'aka", arabic: "\u062c\u064e\u0627\u0653\u0621\u064e\u0643\u064e", word_key: "jya", is_particle: false, sense_retenu: "venir", position: 23 },
      { fr: "le savoir", pos: "nom", phon: "mina al-'ilmi", arabic: "\u0645\u0650\u0646\u064e \u0671\u0644\u0652\u0639\u0650\u0644\u0652\u0645\u0650", word_key: "elm", is_particle: false, sense_retenu: "savoir", position: 24 },
      { fr: "certes tu serais", phon: "innaka idhan", arabic: "\u0625\u0650\u0646\u0651\u064e\u0643\u064e \u0625\u0650\u0630\u064b\u0627", is_particle: true, position: 25 },
      { fr: "parmi", phon: "la-mina", arabic: "\u0644\u064e\u0645\u0650\u0646\u064e", is_particle: true, position: 26 },
      { fr: "les injustes", pos: "nom", phon: "az-zalimina", arabic: "\u0671\u0644\u0638\u0651\u064e\u0640\u0644\u0650\u0645\u0650\u064a\u0646\u064e", word_key: "zlm", is_particle: false, sense_retenu: "injuste", position: 27 }
    ],
    words: [
      // aty pos=1
      {
        word_key: "aty", position: 1, sense_chosen: "apporter",
        analysis_axes: {
          sense_chosen: "apporter",
          concept_chosen: "Venue/Arrivée",
          concepts: {
            "Venue/Arrivée": {
              status: "retenu",
              senses: ["venir", "arriver", "apporter", "donner", "commettre"],
              proof_ctx: "Le verbe atayta est un accompli 2MS de la racine a-t-y. Le Lane's donne : venir, arriver, apporter. L'accompli dans une construction conditionnelle (la-in) exprime une hypothese dont le resultat est connu d'avance comme negatif. Le sens « apporter » est retenu car le verbe est ici transitif avec un complement d'objet direct (kulli ayatin, toutes les preuves) et un complement indirect (alladhina utu al-kitaba, ceux a qui le Livre a ete donne). On apporte quelque chose a quelqu'un. La distinction avec « venir » est que « venir » est intransitif — on vient vers quelqu'un mais on apporte quelque chose a quelqu'un.",
              axe1_verset: "Le verbe atayta ouvre la construction conditionnelle du verset : « meme si tu apportais ». Le champ lexical du verset tourne autour du suivi et de la direction (suivre, direction, passions, savoir). L'acte d'apporter des preuves est le point de depart — c'est l'effort maximal du Prophete. Le verset montre que meme cet effort maximal (toutes les preuves) ne suffirait pas a changer la direction des gens du Livre. L'apport est total mais le resultat est nul.",
              axe2_voisins: "Le verset 144 venait d'etablir le changement de qibla — le Prophete tourne son visage vers la Mosquee sacree. Le verset 145 enchaine en montrant que les gens du Livre ne suivront pas cette nouvelle direction, quelles que soient les preuves apportees. Le verset 146 ajoutera qu'ils connaissent pourtant la verite comme ils connaissent leurs propres enfants. L'apport de preuves est inutile face a un refus delibere.",
              axe3_sourate: "La racine a-t-y dans la sourate al-Baqarah apparait sous de nombreuses formes. En 2:23, Dieu demande d'apporter une sourate semblable. En 2:106, Dieu apporte mieux ou equivalent. En 2:143, les gens du Livre reconnaissent la verite. Le verset 145 s'inscrit dans ce theme de la preuve et de la reception — apporter des preuves est un acte recurrent, et le refus est tout aussi recurrent.",
              axe4_coherence: "La racine a-t-y apparait environ 549 fois dans le Coran. Le schema « meme si tu apportais toutes les preuves » est un motif coranique de l'impossibilite de convaincre certains. En 6:25, « meme si on leur apportait tout signe ils ne croiraient pas ». En 10:97, « meme si leur venaient tous les signes ». Le Coran montre que la conviction ne vient pas de la quantite de preuves mais de la disposition du coeur.",
              axe5_frequence: "Pour la mission du khalifa, l'apport de preuves est un devoir mais le resultat n'est pas garanti. Le khalifa doit apporter la verite sans se decourager par le refus. L'effort de transmission est la mission — la reception ne depend pas du transmetteur. Le verset libere le Prophete de la responsabilite de convaincre et le charge seulement de transmettre."
            },
            "Sens isolé/Détruire": {
              status: "nul",
              senses: ["detruire"],
              proof_ctx: "Le sens de destruction est hors sujet — le verbe decrit l'acte d'apporter des preuves, pas de detruire."
            }
          }
        }
      },
      // awt pos=3
      {
        word_key: "awt", position: 3, sense_chosen: "donner",
        analysis_axes: {
          sense_chosen: "donner",
          concept_chosen: "Refuge/Protection",
          concepts: {
            "Refuge/Protection": {
              status: "retenu",
              senses: ["se refugier", "abriter", "refuge"],
              proof_ctx: "Le verbe utu est un accompli passif 3MP de la racine a-w-t. Le Lane's donne pour cette racine : donner refuge, abriter. Cependant, dans le Coran, la forme passive utu est systematiquement utilisee dans l'expression « ceux a qui le Livre a ete donne » (alladhina utu al-kitaba) avec le sens de « donner/accorder ». Le passif indique que le Livre leur a ete accorde par Dieu — ils sont les depositaires d'un don divin. Le sens retenu « donner » est l'usage coranique specifique de cette racine au passif dans ce contexte precis."
            }
          }
        }
      },
      // ktb pos=4
      {
        word_key: "ktb", position: 4, sense_chosen: "livre",
        analysis_axes: {
          sense_chosen: "livre",
          concept_chosen: "Livre/Écrit",
          concepts: {
            "Livre/Écrit": {
              status: "retenu",
              senses: ["livre", "ecriture revelee", "registre", "contrat ecrit", "contrat de mariage", "contrat d'affranchissement"],
              proof_ctx: "Le mot al-kitaba est un nom masculin singulier defini accusatif de la racine k-t-b. Le Lane's donne : livre, ecrit, ecriture revelee. L'article defini (al-) identifie LE Livre connu — les ecritures revelees anterieures (Torah, Evangile). Le Livre est l'objet du don divin — « ceux a qui le Livre a ete donne ». Le contexte est la qibla — les depositaires du Livre ont leur propre direction de priere qui differe de celle du Prophete.",
              axe1_verset: "Le mot al-kitab qualifie les destinataires du verset — ce sont ceux qui possedent deja une ecriture revelee. Le Livre est un privilege qui implique une responsabilite. Le verset montre que meme les depositaires d'un Livre revele refusent de suivre une nouvelle direction. Le champ lexical (preuves, direction, savoir) montre que le Livre est la reference initiale — mais ses depositaires s'en detournent au profit de leurs passions.",
              axe2_voisins: "Le verset 144 ordonnait de tourner le visage vers la Mosquee sacree. Le verset 145 precise que les gens du Livre ne suivront pas cette direction malgre les preuves. Le verset 146 ajoutera qu'ils connaissent cette verite. Les versets dessinent un portrait coherent : les gens du Livre savent, possedent le Livre, mais refusent la direction nouvelle.",
              axe3_sourate: "La racine k-t-b est structurante dans la sourate al-Baqarah. En 2:2, « ce Livre, nul doute en lui ». En 2:44, « vous qui lisez le Livre ». En 2:101, un groupe parmi ceux qui ont recu le Livre a jete le Livre de Dieu derriere leurs dos. Le verset 145 continue ce theme — les depositaires du Livre sont interpelles sur leur coherence.",
              axe4_coherence: "L'expression « alladhina utu al-kitaba » apparait environ 50 fois dans le Coran. Elle designe systematiquement les communautes possedant une revelation anterieure. Le Coran les traite comme des partenaires dans la verite — ils partagent le meme Dieu et les memes principes, mais leurs directions divergent. Le Livre est le terrain commun qui rend le desaccord d'autant plus significatif.",
              axe5_frequence: "Pour la mission du khalifa, le Livre est le guide commun. Les depositaires du Livre ont recu la mission avant les autres — leur refus de la direction nouvelle ne diminue pas la verite de cette direction. Le khalifa doit connaitre le contenu des Livres pour dialoguer avec leurs depositaires, tout en maintenant sa propre direction."
            },
            "Écriture/Inscription": {
              status: "probable",
              senses: ["ecrire", "dicter", "demander d'ecrire", "ecrire a quelqu'un", "s'inscrire", "copier un livre", "art de l'ecriture", "scribe", "savant", "ecole", "enseignant", "vendeur de livres"],
              proof_ctx: "Le sens d'ecriture est le sens actif de k-t-b — l'acte de tracer des signes. La distinction avec le Livre est que l'ecriture est l'acte et le Livre est le resultat. Le verset traite le kitab comme un objet recu (utu al-kitaba), pas comme un acte d'ecriture.",
              axe1_verset: "Le mot al-kitab est ici un nom designant le support contenant la revelation, pas l'acte d'ecrire. On ne dit pas « ceux a qui l'ecriture a ete donnee » dans le sens de « l'acte d'ecrire » — on dit « ceux a qui le Livre a ete donne » dans le sens du contenu revele.",
              axe2_voisins: "Les versets voisins traitent de la direction de priere — le Livre est mentionne comme reference identitaire des groupes, pas comme acte d'ecriture. Le contexte ne porte pas sur l'activite scribale.",
              axe3_sourate: "La sourate utilise kitab tantot au sens de Livre revele (majoritaire) tantot au sens de contrat ecrit (2:282). Ici c'est clairement le Livre revele.",
              axe4_coherence: "Dans l'expression « utu al-kitab », le kitab est toujours le Livre revele dans le Coran. Le sens d'ecriture n'est jamais actif dans cette construction fixe.",
              axe5_frequence: "Le Livre comme guide est la priorite du khalifa — l'ecriture comme acte est un outil secondaire dans ce contexte."
            },
            "Obligation/Décret": {
              status: "nul",
              senses: ["prescrire", "rendre obligatoire", "juger", "decret divin", "predestination"],
              proof_ctx: "Le sens de decret est hors sujet — le mot designe le Livre comme objet de revelation, pas un decret divin."
            },
            "Assemblage/Couture": {
              status: "nul",
              senses: ["rassembler", "coudre"],
              proof_ctx: "Le sens d'assemblage est un sens physique premier de k-t-b. Le contexte est le Livre revele, pas l'acte de rassembler."
            }
          }
        }
      },
      // kll pos=5
      {
        word_key: "kll", position: 5, sense_chosen: "tout",
        analysis_axes: {
          sense_chosen: "tout",
          concept_chosen: "Totalité",
          concepts: {
            "Totalité": {
              status: "retenu",
              senses: ["tout", "chaque", "totalite"],
              proof_ctx: "Le mot kulli est un nom masculin singulier de la racine k-l-l au genitif. Le Lane's donne : tout, chaque, totalite. Le mot kulli suivi de ayatin forme une construction d'annexion (idafa) signifiant « toute preuve / chaque preuve ». C'est un quantificateur universel — il ne laisse aucune exception. Le verset dit que TOUTES les preuves sans exception ne suffiraient pas. Cette totalite renforce l'impossibilite du resultat — ce n'est pas une question de quantite mais de disposition.",
              axe1_verset: "Le mot kulli amplifie l'hypothese du verset — ce n'est pas « si tu apportais une preuve » mais « si tu apportais TOUTES les preuves ». Le champ lexical (apporter, preuves, direction, passions, savoir) montre que le verset couvre l'ensemble des possibilites. La totalite des preuves face a la totalite du refus — le contraste est maximal. Le verset ferme la porte a tout espoir de convaincre par la preuve seule.",
              axe2_voisins: "Le verset 144 ordonnait un changement de direction — simple et direct. Le verset 145 montre que meme toutes les preuves ne suffisent pas. Le verset 146 expliquera pourquoi — ils connaissent la verite mais la cachent. La totalite des preuves est inutile face a la dissimulation volontaire.",
              axe3_sourate: "La racine k-l-l apparait frequemment dans la sourate al-Baqarah comme quantificateur. En 2:20, « Dieu a pouvoir sur toute chose ». En 2:29, « Il a cree pour vous tout ce qui est sur terre ». La totalite est un theme structurant — Dieu a tout pouvoir, tout cree, tout sait, mais les hommes refusent meme face a tout.",
              axe4_coherence: "Le mot kull apparait environ 600 fois dans le Coran. L'expression « kulli ayatin » (toute preuve) est un motif d'exhaustivite — en 6:25, « meme si leur venait tout signe ». En 30:58, « meme si tu leur apportais tout signe ». Le Coran repete que la totalite des preuves ne force pas la croyance — la foi est un choix, pas une deduction.",
              axe5_frequence: "Pour la mission du khalifa, la totalite des preuves n'est pas la garantie du succes. Le khalifa apporte tout ce qu'il peut mais ne peut forcer personne. La totalite de l'effort est la mission — la totalite du resultat ne depend pas de lui."
            },
            "Émoussement/Faiblesse": {
              status: "nul",
              senses: ["s'emousser", "etre fatigue"],
              proof_ctx: "Le sens d'emoussement est hors sujet — le mot est un quantificateur universel (tout, chaque), pas un adjectif de faiblesse."
            },
            "Charge/Dépendance": {
              status: "nul",
              senses: ["fardeau", "personne a charge"],
              proof_ctx: "Le sens de charge est hors sujet — le contexte est la quantification totale, pas le poids."
            }
          }
        }
      },
      // ayh pos=6
      {
        word_key: "ayh", position: 6, sense_chosen: "signe",
        analysis_axes: {
          sense_chosen: "signe",
          concept_chosen: "Non trouvé",
          concepts: {
            "Non trouvé": {
              status: null,
              senses: ["non trouve"],
              proof_ctx: "Le mot ayatin est un nom feminin singulier indefini. La racine a-y-h n'est pas attestee dans le Lane's sous cette forme. Cependant, le sens coranique de « signe, preuve, verset » est bien etabli. Le mot aya designe ce qui rend visible et manifeste une verite. Ici avec kulli (tout), il forme « toute preuve » — chaque signe individuel pris dans sa totalite. Le mot est au singulier indefini apres kull pour exprimer la distribution : chaque preuve une par une, et donc toutes."
            }
          }
        }
      },
      // tba pos=8 (1ere occurrence — "ils ne suivraient pas")
      {
        word_key: "tba", position: 8, sense_chosen: "suivre",
        analysis_axes: {
          sense_chosen: "suivre",
          concept_chosen: "Suivisme/Obéissance",
          concepts: {
            "Suivisme/Obéissance": {
              status: null,
              senses: ["suivre", "imiter", "disciple"],
              proof_ctx: "Le verbe tabi'u est un accompli 3MP de la racine t-b-a. Le Lane's donne : suivre, marcher derriere, imiter. Le suivi est un mouvement directionnel — on va dans la direction de celui qu'on suit. La negation « ma tabi'u » exprime un refus categorique : ils ne suivraient pas. Cette premiere occurrence etablit le refus fondamental — les gens du Livre ne prendront pas la direction du Prophete, quelles que soient les preuves.",
              axe1_verset: "Le verbe tabi'u est le pivot du verset — les quatre propositions tournent autour du suivi et du non-suivi. Cette premiere occurrence etablit le refus : meme avec toutes les preuves, ils ne suivraient pas ta direction. Le champ lexical (apporter, preuves, direction) montre que le suivi est l'enjeu central du verset. Le refus de suivre n'est pas du a un manque de preuves mais a un choix delibere.",
              axe2_voisins: "Le verset 144 ordonnait le changement de qibla. Le verset 145 montre que ce changement ne sera pas suivi par les gens du Livre. Le verset 146 expliquera qu'ils connaissent pourtant la verite. Le refus de suivre est donc un refus conscient — ils savent mais ne veulent pas suivre.",
              axe3_sourate: "La racine t-b-a apparait dans la sourate al-Baqarah dans le contexte du suivi et de l'egarement. En 2:38, « quiconque suit Ma guidance n'aura pas de crainte ». En 2:120, « si tu suis leurs passions apres ce qui t'est venu comme savoir ». Le verset 145 reprend exactement cette structure — suivre la guidance ou suivre les passions sont les deux seules options.",
              axe4_coherence: "La racine t-b-a apparait environ 172 fois dans le Coran. Le Coran oppose systematiquement deux types de suivi : suivre la guidance divine (positif) et suivre les passions ou Satan (negatif). En 2:145, les quatre occurrences de la racine explorent toutes les facettes du non-suivi : ils ne te suivent pas, tu ne les suis pas, ils ne se suivent pas entre eux, et si tu les suivais tu serais injuste.",
              axe5_frequence: "Pour la mission du khalifa, le suivi est la question fondamentale. Qui suit-on ? Le khalifa doit suivre la guidance divine et ne pas suivre les passions. Le verset montre que le suivi des passions est l'antithese de la mission — c'est l'injustice meme."
            }
          }
        }
      },
      // qbl pos=9 (1ere occurrence — "ta direction")
      {
        word_key: "qbl", position: 9, sense_chosen: "direction",
        analysis_axes: {
          sense_chosen: "direction",
          concept_chosen: "Orientation/Direction",
          concepts: {
            "Orientation/Direction": {
              status: "probable",
              senses: ["se tourner vers", "faire face", "venir vers"],
              proof_ctx: "Le mot qiblataka est un nom feminin singulier de la racine q-b-l avec pronom possessif 2MS (ka). Le Lane's donne pour qibla : la direction vers laquelle on se tourne pour prier. La racine q-b-l porte le sens fondamental de « faire face, se tourner vers ». La qibla est l'application concrete de cette orientation — c'est la direction physique et spirituelle de la priere. Le possessif « ka » (ta) rattache cette direction au Prophete : « ta direction ».",
              axe1_verset: "Le mot qiblataka est l'objet du non-suivi : ils ne suivraient pas TA direction. Le verset oppose la direction du Prophete (qiblataka) a la direction des gens du Livre (qiblatahum) puis a la direction des uns par rapport aux autres (qiblata ba'din). Trois directions differentes qui ne se rejoignent pas. Le champ lexical du suivi et de la direction montre que l'orientation est le theme central du verset.",
              axe2_voisins: "Le verset 142 posait la question : « qu'est-ce qui les a detournes de leur direction ? ». Le verset 143 montrait le changement de qibla comme epreuve. Le verset 144 ordonnait de tourner le visage vers la Mosquee sacree. Le verset 145 constate que les gens du Livre ne suivront pas cette direction. Les versets 142-145 forment un bloc coherent sur la qibla.",
              axe3_sourate: "La racine q-b-l dans la sourate al-Baqarah est concentree dans le passage de la qibla (2:142-150). Ce passage est un moment charniere de la sourate — le changement de direction de priere marque l'autonomie de la communaute du Prophete par rapport aux communautes anterieures. La qibla est un marqueur d'identite spirituelle.",
              axe4_coherence: "La racine q-b-l apparait environ 128 fois dans le Coran sous divers sens (recevoir, avant, direction). Le sens de qibla est specifique au contexte de la priere. En 2:115, « a Dieu appartient l'orient et l'occident, ou que vous vous tourniez la est le visage de Dieu ». La direction de priere est un signe, pas la source — Dieu est au-dela de toute direction.",
              axe5_frequence: "Pour la mission du khalifa, la direction de priere est le symbole de la mission. Avoir une direction c'est avoir un objectif clair. Le khalifa qui suit sa direction ne se laisse pas devier par les directions des autres. La qibla est l'ancrage — la stabilite face aux passions changeantes."
            },
            "Réception/Accueil": {
              status: "retenu",
              senses: ["recevoir", "accepter", "agreer"],
              proof_ctx: "Le sens de reception est un sens majeur de q-b-l — recevoir ce qui vient vers soi. Mais dans ce verset, le mot qibla est un nom specifique designant la direction de priere, pas l'acte de recevoir. Le concept est retenu pour la racine dans sa globalite mais n'est pas actif dans ce verset.",
              axe1_verset: "Le mot qibla dans ce verset ne porte pas le sens de reception — il designe exclusivement la direction de priere. La reception impliquerait un objet recu, mais la qibla est une orientation, pas un objet.",
              axe2_voisins: "Les versets voisins (142-148) sont tous centres sur la direction de priere, pas sur la reception. Le sens de reception n'est pas actif dans ce passage.",
              axe3_sourate: "La sourate utilise q-b-l dans les deux sens selon le contexte. Dans le passage de la qibla (142-150), c'est toujours la direction. Ailleurs, le sens de recevoir/accepter peut etre actif.",
              axe4_coherence: "Le mot qibla dans le Coran designe toujours la direction de priere. Le sens de reception est porte par d'autres formes de la racine (taqabbala, qabila).",
              axe5_frequence: "La reception est un aspect de la mission du khalifa, mais dans ce verset c'est la direction qui est en jeu."
            },
            "Antériorité/Passé": {
              status: "nul",
              senses: ["avant", "auparavant", "ancien", "devant"],
              proof_ctx: "Le sens d'anteriorite n'est pas actif dans ce verset — le mot qibla designe la direction de priere, pas le passe."
            }
          }
        }
      },
      // tba pos=12 (2e occurrence — "tu ne suis pas")
      {
        word_key: "tba", position: 12, sense_chosen: "suivre",
        analysis_axes: {
          sense_chosen: "suivre",
          concept_chosen: "Suivisme/Obéissance",
          concepts: {
            "Suivisme/Obéissance": {
              status: null,
              senses: ["suivre", "imiter", "disciple"],
              proof_ctx: "Le mot bitabi'in est un participe actif au genitif indefini de la racine t-b-a avec la preposition « bi » de negation. Le Lane's donne : suiveur, celui qui suit. Le participe actif au genitif avec « ma anta bi-tabi'in » forme une negation emphatique : « tu n'es pas un suiveur de ». Cette construction est plus forte que la simple negation verbale — elle nie la qualite meme de suiveur au Prophete. Le Prophete n'est pas defini comme suiveur de leur direction.",
              axe1_verset: "Cette deuxieme occurrence inverse la premiere : si eux ne suivent pas ta direction, toi non plus tu ne suis pas la leur. Le verset etablit une symetrie de non-suivi. Le Prophete ne fait pas de compromis — il ne suit pas leur direction pour les amadouer. La separation est reciproque et definitive.",
              axe2_voisins: "Le verset 120 disait deja : « ni les juifs ni les chretiens ne seront satisfaits de toi tant que tu ne suivras pas leur religion ». Le verset 145 confirme cette separation — le Prophete ne suit pas leur direction. Le theme du non-compromis traverse les versets 120-145.",
              axe3_sourate: "La sourate al-Baqarah insiste sur l'autonomie de la communaute du Prophete. En 2:135, « suivez la religion d'Ibrahim ». En 2:143, « Nous avons fait de vous une communaute du juste milieu ». Le non-suivi de la direction des gens du Livre n'est pas un rejet mais une affirmation d'independance spirituelle.",
              axe4_coherence: "Le Coran affirme en plusieurs endroits que le Prophete ne suit pas les passions ou les directions des autres. En 6:56, « dis : il m'a ete interdit d'adorer ceux que vous invoquez en dehors de Dieu ». Le non-suivi est un principe prophetique constant.",
              axe5_frequence: "Pour la mission du khalifa, ne pas suivre les directions erronees est aussi important que suivre la bonne direction. Le khalifa doit avoir la fermete de ne pas se laisser entrainer. Le non-suivi est un acte de fidelite a la mission."
            }
          }
        }
      },
      // qbl pos=13 (2e occurrence — "leur direction")
      {
        word_key: "qbl", position: 13, sense_chosen: "direction",
        analysis_axes: {
          sense_chosen: "direction",
          concept_chosen: "Orientation/Direction",
          concepts: {
            "Orientation/Direction": {
              status: "probable",
              senses: ["se tourner vers", "faire face", "venir vers"],
              proof_ctx: "Deuxieme occurrence de qibla dans le verset — ici « qiblatahum » (leur direction) avec pronom possessif 3MP. Le Lane's donne : direction vers laquelle on se tourne. Le possessif « hum » (leur) rattache cette direction aux gens du Livre. La meme racine q-b-l avec un possessif different cree le contraste : ta direction (qiblataka) vs leur direction (qiblatahum). Deux directions opposees, deux identites distinctes.",
              axe1_verset: "Le mot qiblatahum s'oppose a qiblataka de la premiere proposition. Le verset construit une opposition binaire : ta direction / leur direction. Le Prophete ne suit pas leur direction — la reciprocite du non-suivi est complete. Le champ lexical du verset montre que chaque groupe a sa propre direction et qu'aucun ne suit celle de l'autre.",
              axe2_voisins: "Le verset 142 demandait : « qu'est-ce qui les a detournes de leur direction qu'ils avaient ? ». Leur direction ancienne (qiblatahum) est distincte de la nouvelle direction du Prophete. Les versets dessinent un paysage de directions multiples et incompatibles.",
              axe3_sourate: "Le passage de la qibla (2:142-150) explore la multiplicite des directions. Chaque communaute a sa direction — la sourate montre que Dieu a voulu cette diversite pour eprouver les hommes (2:148, « a chacun une direction vers laquelle il se tourne »).",
              axe4_coherence: "Le Coran reconnait la pluralite des directions de priere. En 2:148, « a chacun une direction ». La diversite des qibla est un fait — ce qui compte c'est de rivaliser dans les bonnes oeuvres, pas de se disputer sur les directions.",
              axe5_frequence: "Pour la mission du khalifa, reconnaitre que d'autres ont leur propre direction ne diminue pas la sienne. Le khalifa suit sa direction sans imposer ni se soumettre — il est autonome dans sa mission."
            },
            "Réception/Accueil": {
              status: "retenu",
              senses: ["recevoir", "accepter", "agreer"],
              proof_ctx: "Meme analyse que la premiere occurrence — le sens de reception est retenu pour la racine mais n'est pas actif dans ce verset ou qibla designe la direction de priere."
            },
            "Antériorité/Passé": {
              status: "nul",
              senses: ["avant", "auparavant", "ancien", "devant"],
              proof_ctx: "Le sens d'anteriorite n'est pas actif ici — le mot designe la direction de priere des gens du Livre."
            }
          }
        }
      },
      // bed pos=15 (1ere occurrence — "certains d'entre eux")
      {
        word_key: "bed", position: 15, sense_chosen: "partie",
        analysis_axes: {
          sense_chosen: "partie",
          concept_chosen: "Partie/Division",
          concepts: {
            "Partie/Division": {
              status: "retenu",
              senses: ["une partie", "certains", "diviser en parties"],
              proof_ctx: "Le mot ba'duhum est un nom masculin singulier de la racine b-'-d avec pronom suffixe 3MP. Le Lane's donne : partie, certains, quelques-uns. Ba'd designe une fraction d'un ensemble — pas la totalite mais une portion. Ici « ba'duhum » (certains d'entre eux) montre que meme au sein des gens du Livre, il n'y a pas d'unanimite sur la direction. Chaque sous-groupe a sa propre qibla. Le mot oppose une partie a une autre partie (ba'd... ba'd).",
              axe1_verset: "Le mot ba'duhum apparait dans la troisieme proposition : les uns ne suivent pas la direction des autres. Le verset montre trois niveaux de desaccord : eux vs le Prophete, le Prophete vs eux, eux vs eux-memes. Le troisieme niveau est le plus revelateur — meme entre eux ils ne s'accordent pas. Le champ lexical (suivre, direction) montre que le desaccord est structurel, pas ponctuel.",
              axe2_voisins: "Le verset 113 disait : « les juifs ont dit les chretiens ne tiennent sur rien, et les chretiens ont dit les juifs ne tiennent sur rien ». Le verset 145 confirme ce desaccord interne — ils ne se suivent pas les uns les autres. Les communautes du Livre sont divisees entre elles.",
              axe3_sourate: "La racine b-'-d est utilisee dans la sourate pour decrire les divisions internes. En 2:85, « vous tuez certains d'entre vous ». En 2:253, « certains d'entre eux Il les a eleves en degres ». La sourate montre que la division est un phenomene humain recurrent — meme les depositaires du meme Livre se divisent.",
              axe4_coherence: "La construction ba'd... ba'd (les uns... les autres) apparait dans le Coran pour decrire les relations internes aux groupes. En 3:64, « que certains d'entre nous ne prennent pas certains autres comme seigneurs ». Le Coran montre que les communautes ne sont pas monolithiques — elles sont traversees de divisions internes.",
              axe5_frequence: "Pour la mission du khalifa, savoir que meme les communautes du Livre sont divisees entre elles est un enseignement. La division n'est pas une fatalite mais un signe de l'eloignement de la verite. Le khalifa doit chercher l'unite par la verite, pas par le compromis."
            }
          }
        }
      },
      // tba pos=16 (3e occurrence — "les uns ne suivent pas les autres")
      {
        word_key: "tba", position: 16, sense_chosen: "suivre",
        analysis_axes: {
          sense_chosen: "suivre",
          concept_chosen: "Suivisme/Obéissance",
          concepts: {
            "Suivisme/Obéissance": {
              status: null,
              senses: ["suivre", "imiter", "disciple"],
              proof_ctx: "Troisieme occurrence de tabi'in (participe actif au genitif) avec la meme construction de negation « ma ba'duhum bi-tabi'in ». Le Lane's donne : suiveur, celui qui suit. Cette troisieme occurrence etend le non-suivi aux relations internes des gens du Livre — les uns ne suivent pas la direction des autres. Le desaccord n'est pas seulement entre le Prophete et eux, mais aussi entre eux-memes.",
              axe1_verset: "Cette troisieme occurrence complete le tableau : non seulement ils ne suivent pas le Prophete et le Prophete ne les suit pas, mais en plus ils ne se suivent pas entre eux. Le verset montre une fragmentation totale — aucune direction commune ne les unit. La repetition du meme participe (tabi'in) dans la meme construction negative souligne la symetrie du refus.",
              axe2_voisins: "Le verset 113 montrait le desaccord mutuel entre juifs et chretiens. Le verset 145 confirme que ce desaccord s'etend a la qibla — ils n'ont pas la meme direction de priere. Le verset 148 conclura : « a chacun une direction vers laquelle il se tourne ». La pluralite des directions est un fait accepte.",
              axe3_sourate: "La sourate al-Baqarah traite longuement des divisions entre les communautes du Livre. Le suivi est le critere de cohesion — quand un groupe ne suit pas la meme direction, il se fragmente. Le verset 145 montre que cette fragmentation est interne, pas seulement externe.",
              axe4_coherence: "Le Coran mentionne les divisions internes des communautes du Livre dans plusieurs sourates. En 42:14, « ils ne se sont divises qu'apres que le savoir leur soit venu ». La division est un choix, pas une fatalite — elle resulte des passions, pas de l'ignorance.",
              axe5_frequence: "Pour la mission du khalifa, la fragmentation des communautes est un avertissement. Ne pas suivre une direction commune mene a l'eclatement. Le khalifa doit maintenir l'unite de la direction pour eviter la division."
            }
          }
        }
      },
      // qbl pos=17 (3e occurrence — "la direction de certains autres")
      {
        word_key: "qbl", position: 17, sense_chosen: "direction",
        analysis_axes: {
          sense_chosen: "direction",
          concept_chosen: "Orientation/Direction",
          concepts: {
            "Orientation/Direction": {
              status: "probable",
              senses: ["se tourner vers", "faire face", "venir vers"],
              proof_ctx: "Troisieme occurrence de qibla dans le verset — ici « qiblata ba'din » (la direction de certains autres). Le mot est au singulier defini construit (idafa avec ba'din). Cette troisieme occurrence montre que la qibla n'est pas seulement divisee entre le Prophete et les gens du Livre, mais aussi a l'interieur meme des gens du Livre. Chaque sous-groupe a sa propre direction — la fragmentation est totale.",
              axe1_verset: "Le mot qiblata ba'din ferme la troisieme proposition du verset. Les trois occurrences de qibla dessinent un triangle de desaccord : ta direction, leur direction, la direction de certains autres. Aucune convergence n'est possible par la negociation — le seul critere valide est le savoir divin, pas le compromis humain.",
              axe2_voisins: "Le verset 148 conclura : « a chacun une direction vers laquelle il se tourne, rivalise donc dans les bonnes oeuvres ». La pluralite des directions est un fait que le Coran accepte — l'important n'est pas l'uniformite de la direction mais la qualite des actes.",
              axe3_sourate: "Le passage 142-150 est le passage de la qibla dans la sourate. La repetition du mot qibla dans ces versets en fait un mot-cle du passage. Le verset 145 concentre trois occurrences a lui seul — un record qui souligne l'importance de la direction dans ce contexte.",
              axe4_coherence: "La multiplicite des directions de priere est un fait historique que le Coran reconnait. Les juifs se tournent vers Jerusalem, les chretiens n'ont pas de qibla fixe, les musulmans se tournent vers la Ka'ba. Le Coran ne nie pas cette diversite mais affirme que chaque direction est un signe, pas un absolu.",
              axe5_frequence: "Pour la mission du khalifa, la multiplicite des directions est un test. Le khalifa doit choisir sa direction et s'y tenir sans etre perturbe par la multiplicite des autres directions. La fermete dans la direction est la condition de la mission."
            },
            "Réception/Accueil": {
              status: "retenu",
              senses: ["recevoir", "accepter", "agreer"],
              proof_ctx: "Meme analyse que les occurrences precedentes — le sens de reception est retenu pour la racine globalement mais n'est pas actif dans le contexte de la qibla."
            },
            "Antériorité/Passé": {
              status: "nul",
              senses: ["avant", "auparavant", "ancien", "devant"],
              proof_ctx: "Le sens d'anteriorite n'est pas actif ici — le mot designe la direction de priere d'un sous-groupe."
            }
          }
        }
      },
      // bed pos=18 (2e occurrence — "certains autres")
      {
        word_key: "bed", position: 18, sense_chosen: "partie",
        analysis_axes: {
          sense_chosen: "partie",
          concept_chosen: "Partie/Division",
          concepts: {
            "Partie/Division": {
              status: "retenu",
              senses: ["une partie", "certains", "diviser en parties"],
              proof_ctx: "Deuxieme occurrence de ba'd dans le verset — ici « ba'din » (certains, au genitif indefini sans pronom). Le Lane's donne : partie, certains. Cette deuxieme occurrence est le complement de la premiere : ba'duhum (certains d'entre eux) ne suit pas la qibla de ba'din (certains autres). La construction ba'd... ba'd est un idiome arabe pour « les uns... les autres ». Elle montre la division interne reciproque.",
              axe1_verset: "Le mot ba'din ferme la troisieme proposition en designant l'autre partie du desaccord interne. Si ba'duhum est le sujet (les uns), ba'din est le complement (les autres). Le verset montre que la division est bilaterale — les uns ne suivent pas les autres ET les autres ne suivent pas les uns. C'est un desaccord mutuel et symetrique.",
              axe2_voisins: "Le verset 113 utilisait la meme structure reciproque : « les juifs ont dit... et les chretiens ont dit... ». La reciprocite du desaccord est un theme recurrent des versets voisins. Le verset 145 applique ce desaccord a la question specifique de la qibla.",
              axe3_sourate: "La sourate utilise la construction ba'd... ba'd pour montrer les divisions internes. En 2:253, « certains d'entre eux se sont combattus ». La division est un resultat de l'eloignement de la verite — quand chaque groupe suit ses propres passions, il se separe des autres.",
              axe4_coherence: "La construction ba'd... ba'd est un outil coranique pour decrire les divisions reciproques. En 6:65, « Il peut vous couvrir de divisions et faire gouter a certains d'entre vous la violence de certains autres ». La division est une consequence du refus de suivre la verite commune.",
              axe5_frequence: "Pour la mission du khalifa, la division reciproque est un avertissement. Quand chaque partie suit sa propre direction sans reference a la verite, la fragmentation est inevitable. Le khalifa doit etre l'agent de l'unite autour de la verite, pas de l'uniformite forcee."
            }
          }
        }
      },
      // tba pos=19 (4e occurrence — "si tu suivais")
      {
        word_key: "tba", position: 19, sense_chosen: "suivre",
        analysis_axes: {
          sense_chosen: "suivre",
          concept_chosen: "Suivisme/Obéissance",
          concepts: {
            "Suivisme/Obéissance": {
              status: null,
              senses: ["suivre", "imiter", "disciple"],
              proof_ctx: "Le verbe ittaba'ta est un accompli 8e forme (iftaa'la) 2MS de la racine t-b-a. Le Lane's donne : suivre deliberement, choisir de suivre. La 8e forme intensifie l'acte — c'est un suivi choisi, volontaire et delibere. L'accompli dans la conditionnelle « la-ini » (si) exprime une hypothese dont la consequence est grave. Cette quatrieme occurrence change le sujet — ce n'est plus « eux » qui ne suivent pas, c'est « toi » qui pourrait suivre. L'avertissement vise le Prophete lui-meme.",
              axe1_verset: "Cette quatrieme occurrence est l'avertissement final du verset. Apres avoir montre que les gens du Livre ne suivent pas et ne se suivent pas entre eux, le verset se tourne vers le Prophete : si TOI tu suivais leurs passions. Le champ lexical change — l'objet du suivi n'est plus la direction (qibla) mais les passions (ahwa'). Suivre la direction est neutre, suivre les passions est condamne. Le verset oppose la direction (ordre objectif) aux passions (desordre subjectif).",
              axe2_voisins: "Le verset 120 contenait deja la meme menace : « si tu suis leurs passions apres ce qui t'est venu comme guidance, tu n'auras ni protecteur ni defenseur contre Dieu ». Le verset 145 reprend cette structure avec « savoir » au lieu de « guidance ». La repetition montre l'importance de l'avertissement — c'est un refrain de la sourate.",
              axe3_sourate: "La sourate al-Baqarah avertit le Prophete a plusieurs reprises contre le suivi des passions : en 2:120, 2:145. Ces avertissements ne signifient pas que le Prophete etait tente — ils etablissent un principe general pour tous les croyants. Si meme le Prophete serait injuste en suivant les passions, a plus forte raison les autres.",
              axe4_coherence: "Le schema « si tu suivais leurs passions apres le savoir/la guidance » apparait dans plusieurs sourates. En 6:56, en 10:15, en 13:37. C'est un motif coranique recurrent qui lie le suivi des passions a l'injustice et a l'egarement. Le Coran pose le savoir comme le critere — suivre les passions APRES le savoir est l'injustice fondamentale.",
              axe5_frequence: "Pour la mission du khalifa, l'avertissement est clair : suivre les passions apres avoir recu le savoir est la pire trahison de la mission. Le khalifa a recu le savoir — il est donc doublement responsable. Le suivi delibere (forme VIII) des passions est un choix conscient qui engage la responsabilite. L'ignorance peut etre excusee, le suivi delibere des passions ne l'est pas."
            }
          }
        }
      },
      // hwy pos=20
      {
        word_key: "hwy", position: 20, sense_chosen: "passion",
        analysis_axes: {
          sense_chosen: "passion",
          concept_chosen: "Passion/Désir",
          concepts: {
            "Passion/Désir": {
              status: "retenu",
              senses: ["desir", "passion"],
              proof_ctx: "Le mot ahwa'ahum est un pluriel brise (ahwa') de la racine h-w-y avec pronom suffixe 3MP. Le Lane's donne : penchant de l'ame, desir, inclination, passion. Le pluriel indique des passions multiples — pas un seul desir mais un ensemble d'inclinations subjectives. Le pronom « hum » (leurs) rattache ces passions aux gens du Livre. La racine h-w-y porte l'idee de chute — la passion fait tomber l'ame de la raison vers le bas. Les passions sont opposees au savoir (al-'ilm) dans la meme phrase — suivre les passions c'est tourner le dos au savoir.",
              axe1_verset: "Le mot ahwa'ahum est l'objet du suivi condamne — si tu suivais LEURS PASSIONS. Le verset oppose clairement deux objets de suivi : la direction (qibla, ordre objectif, structure) et les passions (ahwa', desordre subjectif, chaos). Les trois premieres propositions parlent de direction, la quatrieme parle de passions. Le changement d'objet est le tournant du verset — il montre que refuser de suivre la direction du Prophete revient a suivre ses passions.",
              axe2_voisins: "Le verset 120 contenait la meme mise en garde : « si tu suis leurs passions ». Le verset 170 reprochera aux gens du Livre de suivre ce que faisaient leurs peres. Le theme des passions comme guide alternatif a la revelation est un fil conducteur de la sourate.",
              axe3_sourate: "La racine h-w-y apparait dans la sourate al-Baqarah en 2:87, 2:120, 2:145 — toujours dans le contexte des passions des gens du Livre qui s'opposent a la revelation. La sourate montre que les passions sont le moteur du rejet — ce n'est pas l'ignorance qui fait rejeter la verite, ce sont les passions.",
              axe4_coherence: "La racine h-w-y apparait environ 38 fois dans le Coran. Le pluriel ahwa' est toujours pejoratif — les passions egarent, detournent, aveuglent. En 45:23, « as-tu vu celui qui a pris sa passion pour divinite ? ». Le Coran presente les passions comme l'antithese du savoir et de la guidance.",
              axe5_frequence: "Pour la mission du khalifa, les passions sont l'ennemi interieur de la mission. Le khalifa doit connaitre ses propres passions pour ne pas les suivre. Suivre les passions apres le savoir est l'injustice — le khalifa doit choisir le savoir contre ses inclinations quand elles s'opposent."
            },
            "Chute/Descente": {
              status: "nul",
              senses: ["tomber", "faire tomber"],
              proof_ctx: "Le sens de chute physique est hors sujet — le mot designe les passions de l'ame, pas un mouvement physique. Cependant, l'etymologie de la racine (chuter) eclaire le sens : les passions font « chuter » l'ame."
            }
          }
        }
      },
      // bed pos=21 (3e occurrence — "apres")
      {
        word_key: "bed", position: 21, sense_chosen: "apres",
        analysis_axes: {
          sense_chosen: "apres",
          concept_chosen: "Partie/Division",
          concepts: {
            "Partie/Division": {
              status: "retenu",
              senses: ["une partie", "certains", "diviser en parties"],
              proof_ctx: "Troisieme occurrence de la racine b-'-d — ici « ba'di » avec la preposition min forme « min ba'di » (apres). Le Lane's donne : partie, separation, apres. Le sens temporel « apres » derive du sens spatial de « separation » — ce qui vient apres est la partie qui suit dans le temps. Le sens premier est « partie/separation » et le sens temporel en decoule. Ici « min ba'di ma ja'aka mina al-'ilmi » (apres ce qui t'est venu comme savoir) marque la posteriorite temporelle. Le savoir est venu d'abord — suivre les passions APRES ce savoir est l'injustice.",
              axe1_verset: "Le mot ba'di marque un seuil temporel decisif : APRES le savoir. Le verset oppose l'avant et l'apres — avant le savoir, on peut plaider l'ignorance ; apres le savoir, suivre les passions est inexcusable. Le champ lexical (suivre, passions, savoir, injustes) montre que la responsabilite est liee au savoir — celui qui sait est plus responsable que celui qui ignore.",
              axe2_voisins: "Le verset 120 utilisait la meme construction : « apres ce qui t'est venu comme guidance ». Le verset 145 remplace « guidance » par « savoir ». Les deux sont equivalents — la guidance est le savoir applique. L'apres marque le point de non-retour — une fois le savoir recu, la responsabilite est engagee.",
              axe3_sourate: "La sourate al-Baqarah utilise « min ba'di » pour marquer les tournants. En 2:52, « puis Nous vous avons pardonne apres cela ». En 2:75, « ils la falsifient apres l'avoir comprise ». La posteriorite temporelle est toujours liee a une responsabilite accrue.",
              axe4_coherence: "L'expression « min ba'di ma ja'aka » est un refrain coranique. En 3:61, en 42:14. Le savoir recu cree une obligation — ce qui vient apres le savoir est juge plus severement. Le Coran lie la connaissance a la responsabilite.",
              axe5_frequence: "Pour la mission du khalifa, l'apres est le temps de la responsabilite. Le khalifa a recu le savoir — il est dans l'apres. Tout ce qu'il fait apres le savoir est juge a l'aune de ce savoir. L'ignorance deliberee apres le savoir est pire que l'ignorance tout court."
            }
          }
        }
      },
      // jya pos=23
      {
        word_key: "jya", position: 23, sense_chosen: "venir",
        analysis_axes: {
          sense_chosen: "venir",
          concept_chosen: "Venue",
          concepts: {
            "Venue": {
              status: "retenu",
              senses: ["venir"],
              proof_ctx: "Le verbe ja'aka est un accompli 3MS de la racine j-y-a avec pronom suffixe 2MS. Le Lane's donne : venir, arriver. L'accompli marque que l'evenement est acheve — le savoir est deja venu, c'est un fait accompli. Le pronom « ka » (toi, te) indique que le savoir est venu vers le Prophete specifiquement. Le sujet implicite est « ma » (ce qui) — « ce qui t'est venu comme savoir ». La venue du savoir est un evenement passe et definitif qui engage la responsabilite.",
              axe1_verset: "Le verbe ja'aka situe le savoir comme un evenement acheve — le savoir est deja la, il est venu. Le champ lexical (apres, savoir, passions) montre que la venue du savoir cree un avant et un apres. Avant la venue du savoir, les passions pouvaient etre excusees. Apres la venue du savoir, suivre les passions est une injustice. La venue est le point de basculement.",
              axe2_voisins: "Le verset 120 contenait « apres ce qui t'est venu comme guidance ». Le verset 145 remplace guidance par savoir. Les deux verbes de venue (ja'a) marquent le meme seuil : le moment ou la verite arrive rend le refus inexcusable.",
              axe3_sourate: "La racine j-y-a apparait frequemment dans la sourate pour marquer les arrivees decisives. En 2:87, « quand leur vint un envoye ». En 2:92, « Moussa est venu avec les signes clairs ». En 2:101, « quand leur vint un envoye de chez Dieu ». Chaque venue est une occasion — la manquer c'est manquer sa chance.",
              axe4_coherence: "La racine j-y-a apparait environ 278 fois dans le Coran. Le schema « apres ce qui t'est venu » est un motif coranique de responsabilite — la venue du savoir cree l'obligation. En 3:61, « quiconque te dispute apres ce qui t'est venu comme savoir ». La venue du savoir est le critere du jugement.",
              axe5_frequence: "Pour la mission du khalifa, la venue du savoir est le commencement de la mission. Le savoir vient — le khalifa ne le cherche pas seul, il le recoit. Mais une fois recu, il est responsable de ce qu'il en fait. La venue du savoir est un don qui engage."
            }
          }
        }
      },
      // elm pos=24
      {
        word_key: "elm", position: 24, sense_chosen: "savoir",
        analysis_axes: {
          sense_chosen: "savoir",
          concept_chosen: "Savoir/Connaissance",
          concepts: {
            "Savoir/Connaissance": {
              status: "retenu",
              senses: ["savoir", "connaitre", "etre informe", "certitude", "savant", "science", "enseignement"],
              proof_ctx: "Le mot al-'ilmi est un nom masculin singulier defini au genitif de la racine '-l-m. Le Lane's donne : savoir, connaissance, science. L'article defini (al-) designe LE savoir specifique — la revelation et la connaissance divine qui l'accompagne. Le mot est au genitif apres « mina » (comme/parmi) : « ce qui t'est venu comme savoir » (min al-'ilm). Le savoir est oppose aux passions dans la meme phrase — le savoir est la realite objective, les passions sont les penchants subjectifs. Suivre les passions apres le savoir c'est choisir le subjectif contre l'objectif.",
              axe1_verset: "Le mot al-'ilm est le dernier element avant la consequence (tu serais parmi les injustes). Le savoir est le critere qui rend le suivi des passions injuste. Sans savoir, on peut plaider l'ignorance. Avec le savoir, le suivi des passions est un choix delibere et coupable. Le champ lexical du verset oppose direction/savoir (positif) a passions/injustice (negatif). Le savoir est du cote de la direction — les passions sont du cote de l'injustice.",
              axe2_voisins: "Le verset 146 ajoutera que les gens du Livre « le reconnaissent comme ils reconnaissent leurs enfants ». Leur savoir est aussi certain que la reconnaissance de leurs propres enfants. Le savoir n'est pas un doute — c'est une certitude. Le verset 145 prepare cette revelation en etablissant que le savoir est deja venu.",
              axe3_sourate: "La racine '-l-m est la plus frequente de la sourate al-Baqarah apres le nom Allah. En 2:30, « Je sais ce que vous ne savez pas ». En 2:32, « nous ne savons que ce que Tu nous as enseigne ». La sourate oppose le savoir de Dieu (total) au savoir humain (partiel mais suffisant pour la responsabilite). Le verset 145 montre que le savoir recu suffit a engager la responsabilite.",
              axe4_coherence: "La racine '-l-m apparait environ 854 fois dans le Coran. Le schema « apres le savoir » est un motif de responsabilite accrue. En 42:14, « ils ne se sont divises qu'apres que le savoir leur soit venu, par jalousie entre eux ». Le Coran lie la division au rejet du savoir au profit des passions. Le savoir devrait unir — ce sont les passions qui divisent.",
              axe5_frequence: "Pour la mission du khalifa, le savoir est le fondement de la mission. Le khalifa a recu le savoir — il est le depositaire d'une connaissance qui l'oblige. Suivre les passions apres le savoir est la definition meme de l'injustice selon le Coran. Le khalifa doit privilegier le savoir sur les passions dans chaque decision."
            },
            "Monde/Création": {
              status: "nul",
              senses: ["monde", "les mondes", "ensemble des creatures", "univers"],
              proof_ctx: "Le sens de monde est hors sujet — le mot al-'ilm est un nom de connaissance, pas un nom designant l'univers. Le contexte oppose le savoir aux passions."
            },
            "Marque/Signe": {
              status: "nul",
              senses: ["marquer", "signe", "drapeau", "montagne", "repere", "etendard", "levre fendue"],
              proof_ctx: "Le sens de signe/marque est hors sujet — le mot est al-'ilm (le savoir), pas une marque ou un signe physique."
            }
          }
        }
      },
      // zlm pos=27
      {
        word_key: "zlm", position: 27, sense_chosen: "injuste",
        analysis_axes: {
          sense_chosen: "injuste",
          concept_chosen: "Injustice/Oppression",
          concepts: {
            "Injustice/Oppression": {
              status: "retenu",
              senses: ["opprimer", "etre injuste", "injustice", "oppresseur"],
              proof_ctx: "Le mot az-zalimina est un participe actif pluriel masculin defini accusatif de la racine z-l-m. Le Lane's donne : etre injuste, opprimer, placer quelque chose hors de sa place. L'injuste (zalim) est celui qui met les choses la ou elles ne doivent pas etre — il place le faux a la place du vrai, les passions a la place du savoir. L'article defini (al-) et le pluriel montrent qu'il s'agit d'une categorie connue et permanente : LES injustes. Le Prophete serait compte parmi cette categorie s'il suivait les passions apres le savoir.",
              axe1_verset: "Le mot az-zalimina ferme le verset avec la consequence ultime : « tu serais parmi les injustes ». Le champ lexical du verset culmine ici — tout le verset construit un argument vers cette conclusion. Les preuves, la direction, le suivi, les passions, le savoir — tout mene a cette alternative : suivre le savoir (direction) ou suivre les passions (injustice). L'injustice est le resultat du mauvais choix.",
              axe2_voisins: "Le verset 140 avertissait : « qui est plus injuste que celui qui cache un temoignage qu'il tient de Dieu ? ». Le verset 145 elargit la definition : est injuste aussi celui qui suit les passions apres le savoir. Les versets voisins construisent un portrait de l'injustice comme choix delibere contre la verite connue.",
              axe3_sourate: "La racine z-l-m est une des plus frequentes de la sourate al-Baqarah. En 2:35, « vous seriez du nombre des injustes ». En 2:51, « et vous etiez des injustes ». En 2:124, « Mon engagement n'atteint pas les injustes ». La sourate lie l'injustice a l'exclusion de l'engagement divin — l'injuste se coupe de la mission.",
              axe4_coherence: "La racine z-l-m apparait environ 315 fois dans le Coran. L'expression « tu serais parmi les injustes » apparait en 2:145 et en 2:120 (variante). Le Coran utilise cette formule comme avertissement supreme — etre compte parmi les injustes c'est perdre la protection divine. En 11:113, « ne vous penchez pas vers les injustes, sinon le Feu vous touchera ».",
              axe5_frequence: "Pour la mission du khalifa, l'injustice est la fin de la mission. Le khalifa qui devient injuste — en placant les passions au-dessus du savoir — perd son mandat. L'injustice est le contraire exact de la mission du khalifa qui est de placer chaque chose a sa juste place. Suivre les passions apres le savoir c'est le desordre fondamental — l'antithese de la lieutenance."
            },
            "Obscurité/Ténèbres": {
              status: "probable",
              senses: ["obscurite", "tenebres"],
              proof_ctx: "Le sens d'obscurite est un sens lie a z-l-m — les tenebres (zulmat) sont le domaine de l'injustice. La distinction philosophique est que l'injustice est un acte (placer hors de sa place) et les tenebres sont un etat (absence de lumiere). Le verset parle d'injustes (personnes), pas de tenebres (etat). Cependant, le lien etymologique est significatif : l'injuste vit dans les tenebres du choix errone.",
              axe1_verset: "Le mot az-zalimina designe ici des personnes (les injustes), pas un etat (les tenebres). Mais l'implication est claire : etre parmi les injustes c'est etre dans les tenebres. Le verset oppose implicitement la lumiere du savoir aux tenebres de l'injustice.",
              axe2_voisins: "Le verset 257 dira : « Dieu fait sortir ceux qui croient des tenebres vers la lumiere, et ceux qui dissimulent font sortir de la lumiere vers les tenebres ». L'injustice et les tenebres sont liees dans la sourate.",
              axe3_sourate: "La sourate al-Baqarah utilise z-l-m dans les deux sens (injustice et tenebres) selon le contexte. En 2:17-20, les tenebres physiques. En 2:35, l'injustice morale. Les deux sens se completent.",
              axe4_coherence: "Le Coran lie systematiquement l'injustice aux tenebres. En 2:257, le passage des tenebres a la lumiere est le passage de l'injustice a la justice. Les deux sens de z-l-m convergent.",
              axe5_frequence: "L'injustice plonge le khalifa dans les tenebres — il perd la vision claire de sa mission. Le savoir est la lumiere, les passions sont les tenebres."
            },
            "Souffle/Vent": {
              status: "nul",
              senses: ["se faire du tort"],
              proof_ctx: "Le sens reflexif « se faire du tort » est un sens derive de l'injustice mais n'est pas le sens actif ici — le verset parle d'injustes au pluriel defini, pas de tort reflexif."
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

  const verseIds = [152];
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
  console.log('=== PIPELINE SOURATE 2 — VERSET 145 ===\n');
  await processVerse(145);
  await syncWordMeanings();
  console.log('\n=== PIPELINE V145 TERMINEE ===');
}

main().catch(e => console.error('FATAL:', e));
