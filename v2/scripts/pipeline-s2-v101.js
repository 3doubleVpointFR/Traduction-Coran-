const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// =====================================================
// PIPELINE SOURATE 2 — VERSET 101
// verse_id=108, analysis_id=467
// "Et quand leur vint un messager de chez Dieu, confirmant
//  ce qui etait avec eux, un groupe de ceux a qui le Livre
//  avait ete donne jeta le Livre de Dieu derriere leurs dos
//  comme s'ils ne savaient pas."
// =====================================================

const verseData = {
  101: {
    verse_id: 108,
    analysis_id: 467,
    translation_arab: "Et quand leur vint un envoye de chez Dieu, confirmant ce qui etait avec eux, un groupe parmi ceux a qui le Livre avait ete donne jeta le Livre de Dieu derriere leurs dos, comme s'ils ne savaient pas.",
    full_translation: "Et quand leur vint un messager d'Allah confirmant ce qu'il y avait deja avec eux, certains a qui le Livre avait ete donne, jeterent le Livre d'Allah derriere leur dos comme s'ils ne savaient pas !",
    translation_explanation: `§DEMARCHE§
Le verset decrit un evenement passe : l'arrivee d'un envoye de Dieu et la reaction d'un groupe qui rejette le Livre. Le verbe **ja'ahum** est un accompli 3MS de la racine j-y-a avec pronom suffixe 3MP. Le Lane's donne : venir, arriver. L'accompli indique un evenement acheve — l'arrivee a eu lieu. Le pronom suffixe « hum » indique que l'envoye est venu vers eux specifiquement. Le nom **rasulun** est un nom masculin singulier indefini de la racine r-s-l. Le Lane's donne : envoye, messager, celui qui est envoye. Le fait qu'il soit indefini (sans article) marque qu'un envoye est venu — pas n'importe quel envoye connu, mais un envoye parmi les envoyes de Dieu. La preposition **min 'indi** (de chez, de la part de) rattache l'envoye a Dieu — il vient de Sa proximite, de Sa presence. Le nom **Allahi** est le nom propre de la divinite au genitif. Le participe actif **musaddiqun** est de la forme II de la racine s-d-q. Le Lane's donne : confirmer, declarer vrai. La forme II (fa''ala) intensifie l'action — il ne dit pas juste vrai, il confirme activement. Le participe actif indique que cette confirmation est une action continue et active de l'envoye. La preposition **li-ma** (pour ce qui) + **ma'ahum** (avec eux) precise l'objet de la confirmation : ce qui etait deja avec eux (leurs ecritures anterieures). Le verbe **nabadha** est un accompli 3MS de la racine n-b-dh. Le Lane's donne : jeter, rejeter, rompre un pacte. L'accompli indique que le rejet a eu lieu — c'est un acte acheve. Le nom **fariqun** est un nom masculin singulier indefini de la racine f-r-q. Le Lane's donne : groupe, partie separee. Un groupe (pas tous) parmi ceux qui ont recu le Livre — le texte precise que le rejet n'est pas unanime. Le verbe passif **utu** est un accompli passif 3MP de la racine a-t-y. Le Lane's donne : recevoir, se voir donner. Le passif indique que le Livre leur a ete donne — ils ne l'ont pas acquis par eux-memes. Le nom **al-kitaba** (le Livre) apparait deux fois — une fois comme objet du don (ceux qui ont recu le Livre) et une fois comme objet du rejet (ils ont jete le Livre de Dieu). Cette repetition montre l'ironie : ils rejettent ce qu'ils ont recu. Le nom **wara'a** est de la racine w-r-y. Le Lane's donne : derriere, ce qui est cache. Jeter derriere le dos signifie rejeter completement, mettre hors de vue. Le nom **zuhurihim** est un pluriel de la racine z-h-r avec pronom 3MP. Le Lane's donne : dos, partie posterieure. Le dos est la partie invisible — jeter derriere les dos c'est mettre dans la zone qu'on ne voit pas. Le verbe **ya'lamuna** est un inaccompli 3MP de la racine '-l-m. Le Lane's donne : savoir, connaitre. L'inaccompli avec la negation (la ya'lamuna) dans une comparaison (ka-annahum) cree une similitude : « comme s'ils ne savaient pas ». Le texte ne dit pas qu'ils ne savent pas — il dit qu'ils agissent COMME s'ils ne savaient pas. Ils savent mais font semblant de ne pas savoir.

§JUSTIFICATION§
**vint** — Le sens retenu est « venir ». Le verbe ja'a decrit l'arrivee de l'envoye. L'alternative « apporter » est ecartee car le verbe est intransitif ici — l'envoye vient, il n'apporte pas un objet specifique dans cette proposition.

**envoye** — Le sens retenu est « envoyer/messager ». Le mot « envoye » est choisi car il preserve l'idee d'envoi actif — quelqu'un qui a ete envoye par un autre. L'alternative « messager » est ecartee car en francais courant « messager » evoque davantage le porteur d'un message ponctuel, alors que « envoye » designe la personne mandatee dans sa fonction permanente.

**de chez** — Le sens retenu est « proximite/presence ». La preposition 'inda designe la proximite. « De chez Dieu » rend l'idee que l'envoye vient de la presence divine.

**Dieu** — Le sens retenu est « divinite ». Allah est le nom propre de la divinite unique.

**confirmant** — Le sens retenu est « confirmer/dire vrai ». Le mot « confirmant » est choisi car le participe actif musaddiq designe celui qui confirme activement et en continu. L'alternative « sincere » est ecartee car le contexte est la confirmation d'ecritures anterieures, pas la sincerite d'une personne.

**jeta** — Le sens retenu est « jeter/rejeter ». Le mot « jeta » est choisi pour le francais courant. L'alternative « rompre un pacte » est ecartee car l'objet direct est le Livre, pas un pacte.

**groupe** — Le sens retenu est « separation/distinction ». Le mot firiq designe une partie separee d'un ensemble plus large. « Groupe » est choisi car c'est le mot le plus courant. L'alternative « diviser » est ecartee car le mot est un nom, pas un verbe.

**avait ete donne** — Le sens retenu est « venir/apporter ». Le passif utu signifie qu'ils ont recu passivement le Livre. L'alternative « detruire » est ecartee car le contexte est un don.

**le Livre** — Le sens retenu est « livre/ecrit ». Le mot al-kitab designe l'ecriture revelee. L'alternative « prescrire » est ecartee car le mot est un nom defini, pas un verbe.

**derriere** — Le sens retenu est « position cachee ». Wara'a designe ce qui est hors de vue. « Derriere » est le mot le plus naturel.

**dos** — Le sens retenu est « manifestation/dos ». Le mot zuhur (pluriel de zahr) designe les dos. Jeter derriere les dos = rejeter completement en mettant hors de vue.

**savaient** — Le sens retenu est « savoir/connaissance ». Le verbe ya'lamuna designe le savoir. « Savaient » est le mot le plus naturel. L'alternative « enseigner » est ecartee car le verbe est a la forme I, pas a la forme II.

§CRITIQUE§
Les traductions courantes donnent sensiblement le meme sens pour ce verset. La seule difference notable est le mot « messager » utilise par Hamidullah la ou nous donnons « envoye ». Les deux mots sont proches — « messager » vient du vocabulaire religieux traditionnel, « envoye » est plus neutre et plus proche de l'etymologie de la racine r-s-l qui porte d'abord le sens d'envoyer, pas de porter un message. Cette difference ne change pas le sens global du verset.`,
    segments: [
      { fr: "et quand", phon: "wa-lamma", arabic: "\u0648\u064e\u0644\u064e\u0645\u0651\u064e\u0627", is_particle: true, position: 0 },
      { fr: "leur vint", pos: "verbe", phon: "ja'ahum", arabic: "\u062c\u064e\u0622\u0621\u064e\u0647\u064f\u0645\u0652", word_key: "jya", is_particle: false, sense_retenu: "venir", position: 1 },
      { fr: "un envoye", pos: "nom", phon: "rasulun", arabic: "\u0631\u064e\u0633\u064f\u0648\u0644\u064c", word_key: "rsl", is_particle: false, sense_retenu: "envoyer", position: 2 },
      { fr: "de", phon: "min", arabic: "\u0645\u0650\u0651\u0646\u0652", is_particle: true, position: 3 },
      { fr: "chez", pos: "nom", phon: "'indi", arabic: "\u0639\u0650\u0646\u062f\u0650", word_key: "end", is_particle: false, sense_retenu: "aupres de", position: 4 },
      { fr: "Dieu", pos: "nom", phon: "Allahi", arabic: "\u0671\u0644\u0644\u0651\u064e\u0647\u0650", word_key: "alh", is_particle: false, sense_retenu: "Dieu", position: 5 },
      { fr: "confirmant", pos: "adjectif", phon: "musaddiqun", arabic: "\u0645\u064f\u0635\u064e\u062f\u0651\u0650\u0642\u064c", word_key: "sdq", is_particle: false, sense_retenu: "confirmer", position: 6 },
      { fr: "ce qui", phon: "li-ma", arabic: "\u0644\u0650\u0651\u0645\u064e\u0627", is_particle: true, position: 7 },
      { fr: "avec eux", phon: "ma'ahum", arabic: "\u0645\u064e\u0639\u064e\u0647\u064f\u0645\u0652", is_particle: true, position: 8 },
      { fr: "jeta", pos: "verbe", phon: "nabadha", arabic: "\u0646\u064e\u0628\u064e\u0630\u064e", word_key: "nbdh", is_particle: false, sense_retenu: "jeter", position: 9 },
      { fr: "un groupe", pos: "nom", phon: "fariqun", arabic: "\u0641\u064e\u0631\u0650\u064a\u0642\u064c", word_key: "frq", is_particle: false, sense_retenu: "groupe", position: 10 },
      { fr: "de", phon: "mina", arabic: "\u0645\u0650\u0651\u0646\u064e", is_particle: true, position: 11 },
      { fr: "ceux qui", phon: "alladhina", arabic: "\u0671\u0644\u0651\u064e\u0630\u0650\u064a\u0646\u064e", is_particle: true, position: 12 },
      { fr: "ont recu", pos: "verbe", phon: "utu", arabic: "\u0623\u064f\u0648\u062a\u064f\u0648\u0627\u06df", word_key: "aty", is_particle: false, sense_retenu: "donner", position: 13 },
      { fr: "le Livre", pos: "nom", phon: "al-kitaba", arabic: "\u0671\u0644\u0652\u0643\u0650\u062a\u064e\u0640\u0628\u064e", word_key: "ktb", is_particle: false, sense_retenu: "livre", position: 14 },
      { fr: "le Livre", pos: "nom", phon: "kitaba", arabic: "\u0643\u0650\u062a\u064e\u0640\u0628\u064e", word_key: "ktb", is_particle: false, sense_retenu: "livre", position: 15 },
      { fr: "de Dieu", pos: "nom", phon: "Allahi", arabic: "\u0671\u0644\u0644\u0651\u064e\u0647\u0650", word_key: "alh", is_particle: false, sense_retenu: "Dieu", position: 16 },
      { fr: "derriere", phon: "wara'a", arabic: "\u0648\u064e\u0631\u064e\u0622\u0621\u064e", word_key: "wry", is_particle: false, sense_retenu: "derriere", position: 17 },
      { fr: "leurs dos", pos: "nom", phon: "zuhurihim", arabic: "\u0638\u064f\u0647\u064f\u0648\u0631\u0650\u0647\u0650\u0645\u0652", word_key: "zhr", is_particle: false, sense_retenu: "dos", position: 18 },
      { fr: "comme si", phon: "ka-annahum", arabic: "\u0643\u064e\u0623\u064e\u0646\u0651\u064e\u0647\u064f\u0645\u0652", is_particle: true, position: 19 },
      { fr: "ils ne", phon: "la", arabic: "\u0644\u064e\u0627", is_particle: true, position: 20 },
      { fr: "savaient pas", pos: "verbe", phon: "ya'lamuna", arabic: "\u064a\u064e\u0639\u0652\u0644\u064e\u0645\u064f\u0648\u0646\u064e", word_key: "elm", is_particle: false, sense_retenu: "savoir", position: 21 }
    ],
    words: [
      // jya pos=1
      {
        word_key: "jya", position: 1, sense_chosen: "venir",
        analysis_axes: {
          sense_chosen: "venir",
          concept_chosen: "Venue",
          concepts: {
            "Venue": {
              status: "retenu",
              senses: ["venir"],
              proof_ctx: "Le verbe ja'ahum est un accompli 3MS de la racine j-y-a. Le Lane's donne : venir, arriver. La venue est un mouvement directionnel — quelqu'un ou quelque chose arrive vers un destinataire. Ici l'envoye vient vers eux (hum). L'accompli marque que l'evenement est acheve. Cette racine n'a qu'un seul sens actif dans le Coran, ce qui rend le choix immediat.",
              axe1_verset: "Le verbe ja'ahum ouvre le verset en posant l'evenement declencheur : l'arrivee d'un envoye de Dieu. Cette arrivee est la cause de tout ce qui suit — la confirmation, le rejet, le jet du Livre. Le champ lexical du verset tourne autour de la transmission (envoye, confirmer, Livre) et du rejet (jeter, derriere, dos). La venue de l'envoye est le point de depart de ce double mouvement : reception et rejet.",
              axe2_voisins: "Le verset 100 traitait de la rupture des engagements — chaque fois qu'ils s'engagent, un groupe rompt. Le verset 101 enchaine avec une nouvelle venue : malgre les ruptures, Dieu envoie encore un envoye. Le verset 102 montrera ce que ce groupe a suivi a la place. La venue marque un renouvellement de l'occasion — Dieu ne cesse d'envoyer meme apres les ruptures.",
              axe3_sourate: "La sourate al-Baqarah est structuree autour de la chaine des envoyes et de la reaction des peuples. En 2:87, Dieu a donne a Moussa le Livre et envoye des messagers apres lui. En 2:92, Moussa est venu avec les signes clairs. Le verset 101 s'inscrit dans cette serie de venues successives — chaque venue est une occasion de croire ou de rejeter.",
              axe4_coherence: "La racine j-y-a apparait environ 278 fois dans le Coran. Le schema « quand leur vint un envoye » est recurrent — en 3:81, 3:184, 5:19, 35:25. Le Coran repete ce schema pour montrer que la venue des envoyes est une constante divine et que le rejet est un choix humain recurrent. La venue est toujours suivie d'une reaction — acceptation ou rejet.",
              axe5_frequence: "Pour la mission du khalifa, la venue de l'envoye est un rappel de la mission. L'envoye apporte la confirmation de ce qui existait deja — il ne vient pas avec quelque chose de nouveau mais valide ce qui etait la. Le khalifa doit accueillir la venue de la verite au lieu de la rejeter. La venue est une occasion — la rejeter c'est manquer sa mission."
            }
          }
        }
      },
      // rsl pos=2
      {
        word_key: "rsl", position: 2, sense_chosen: "envoyer",
        analysis_axes: {
          sense_chosen: "envoyer",
          concept_chosen: "Envoi/Message",
          concepts: {
            "Envoi/Message": {
              status: "retenu",
              senses: ["envoyer", "liberer", "messager", "message"],
              proof_ctx: "Le mot rasulun est un nom masculin singulier indefini de la racine r-s-l. Le Lane's donne : envoyer, liberer, celui qui est envoye. Le sens d'envoi est un acte directionnel — l'envoye part d'un expediteur et atteint un destinataire. Ici l'envoye vient de chez Dieu (min 'indi Allah). L'indefini (rasulun sans article) marque qu'il s'agit d'un envoye parmi d'autres, pas un envoye specifique nomme. La distinction avec le sens de « pluie » (nul) est evidente : le contexte est la transmission d'un message, pas la meteorologie.",
              axe1_verset: "Le mot rasulun est l'agent principal du verset — c'est lui qui vient et qui confirme. Le champ lexical du verset (venir, confirmer, Livre, Dieu) tourne autour de la transmission divine. L'envoye est le porteur de cette transmission. Le verset construit une chaine : Dieu → envoye → confirmation → ce qui etait avec eux. L'envoye est le lien entre Dieu et les destinataires.",
              axe2_voisins: "Le verset 97 mentionnait Djibril comme celui qui a fait descendre la revelation. Le verset 98 parlait d'hostilite envers les anges et les messagers. Le verset 101 precise maintenant qu'un envoye est venu confirmer — l'envoi est un fait accompli. Les versets voisins forment un ensemble sur la transmission et sa reception.",
              axe3_sourate: "La racine r-s-l est une racine structurante de la sourate al-Baqarah. En 2:87, Dieu a donne a Moussa le Livre et envoye des messagers apres lui. En 2:119, le Prophete est envoye avec la verite. La sourate insiste sur la continuite de l'envoi divin — les envoyes se succedent pour confirmer le meme message.",
              axe4_coherence: "La racine r-s-l apparait environ 513 fois dans le Coran. Les envoyes (rusul) sont un pilier de la foi coranique — croire aux envoyes fait partie des articles de foi en 2:285. En 2:101, le mot rasul est au singulier indefini — un envoye parmi les envoyes. Le Coran montre que chaque epoque recoit son envoye pour confirmer le message.",
              axe5_frequence: "Pour la mission du khalifa, les envoyes sont les guides de la mission. L'envoye vient confirmer ce qui existait deja — il valide la verite ancienne et la renouvelle. Le khalifa doit reconnaitre les envoyes comme les porteurs de la mission divine. Rejeter l'envoye c'est rejeter le mandat meme de la mission humaine."
            },
            "Eau/Liquide": {
              status: "nul",
              senses: ["pluie"],
              proof_ctx: "Le sens de pluie est un usage physique de r-s-l — l'eau envoyee du ciel. Le contexte est la venue d'un envoye de Dieu, pas de la meteorologie."
            }
          }
        }
      },
      // end pos=4
      {
        word_key: "end", position: 4, sense_chosen: "aupres de",
        analysis_axes: {
          sense_chosen: "aupres de",
          concept_chosen: "Proximité/Présence",
          concepts: {
            "Proximité/Présence": {
              status: "retenu",
              senses: ["aupres de", "chez", "pres de"],
              proof_ctx: "Le mot 'indi est une preposition de la racine '-n-d. Le Lane's donne : aupres de, chez, pres de. La proximite est une relation spatiale ou relationnelle permanente — etre aupres de quelqu'un c'est etre dans son espace. Ici « min 'indi Allahi » signifie que l'envoye vient de la presence de Dieu, de Son espace. La distinction avec « selon » (nul) est claire : le verset parle d'un lieu d'origine (d'ou vient l'envoye), pas d'une opinion.",
              axe1_verset: "Le mot 'indi situe l'origine de l'envoye — il vient de chez Dieu. La preposition min (de) + 'indi (chez) cree l'expression « de chez Dieu ». Le champ lexical (envoye, Dieu, confirmer, Livre) montre que la provenance divine de l'envoye est essentielle : ce n'est pas un envoye humain autoproclamme, c'est un envoye qui vient de la presence divine.",
              axe2_voisins: "Le verset 97 disait que Djibril a fait descendre la revelation sur le coeur du Prophete. Le verset 101 precise que l'envoye vient de chez Dieu — la meme source. Les versets 97-101 tracent le chemin de la transmission : de Dieu → par Djibril → a l'envoye → vers les destinataires.",
              axe3_sourate: "La preposition 'inda apparait frequemment dans la sourate al-Baqarah avec Dieu comme complement. En 2:54, « c'est mieux aupres de votre Createur ». En 2:62, « ils auront leur recompense aupres de leur Seigneur ». La sourate utilise 'inda pour situer les realites de valeur : ce qui est aupres de Dieu est de valeur superieure.",
              axe4_coherence: "La racine '-n-d apparait environ 200 fois dans le Coran. L'expression « min 'indi Allah » (de chez Dieu) apparait dans plusieurs versets pour marquer l'origine divine de quelque chose. En 3:163, « des degres aupres de Dieu ». Ce qui vient de chez Dieu porte l'autorite divine — la provenance garantit l'authenticite.",
              axe5_frequence: "Pour la mission du khalifa, ce qui vient de chez Dieu est le fondement de la mission. L'envoye vient de la presence divine — il porte l'autorite de sa source. Le khalifa doit reconnaitre cette autorite et ne pas la rejeter. Ce qui est aupres de Dieu est meilleur et plus durable que ce qui est aupres des hommes."
            },
            "Opinion/Jugement": {
              status: "nul",
              senses: ["selon"],
              proof_ctx: "Le sens d'opinion (selon moi, d'apres moi) est un usage subjectif de '-n-d. Le contexte est la provenance spatiale de l'envoye (il vient de chez Dieu), pas une opinion."
            }
          }
        }
      },
      // alh pos=5
      {
        word_key: "alh", position: 5, sense_chosen: "Dieu",
        analysis_axes: {
          sense_chosen: "Dieu",
          concept_chosen: "Divinité",
          concepts: {
            "Divinité": {
              status: "retenu",
              senses: ["divinite (concept)", "Dieu", "theologie", "divinite", "exclamation divine", "oui certes"],
              proof_ctx: "Le nom Allahi est le nom propre de la divinite au genitif. Le Lane's donne : Dieu, la divinite unique. Ici Allah est la source de l'envoye — l'envoye vient de chez Dieu. Le nom apparait deux fois dans le verset : une fois comme source de l'envoye (min 'indi Allahi) et une fois comme possesseur du Livre (kitaba Allahi). Dieu est a la fois l'expediteur de l'envoye et le proprietaire du Livre rejete.",
              axe1_verset: "Le nom Allahi apparait deux fois dans le verset, structurant les deux poles : Dieu envoie et Dieu possede le Livre. L'envoye vient de chez Dieu (source) et le Livre rejete est le Livre de Dieu (propriete). Rejeter le Livre de Dieu c'est rejeter Dieu Lui-meme. Le champ lexical montre que Dieu est au centre — Il est la source et le proprietaire de ce qui est rejete.",
              axe2_voisins: "Le verset 98 declarait que Dieu est ennemi des dissimulateurs. Le verset 100 montrait la rupture des engagements. Le verset 101 montre que malgre l'hostilite et les ruptures, Dieu continue d'envoyer. La presence de Dieu comme source montre Sa constance face a l'inconstance humaine.",
              axe3_sourate: "Le nom Allah est le mot le plus frequent de la sourate al-Baqarah. Il structure chaque passage — Dieu est le sujet principal, l'auteur de chaque action majeure. En 2:101, Dieu est a la fois l'origine de l'envoye et le proprietaire du Livre. La sourate montre que tout vient de Dieu et retourne a Dieu.",
              axe4_coherence: "Le nom Allah apparait plus de 2600 fois dans le Coran. En 2:101, la double occurrence souligne que le rejet vise directement Dieu — pas seulement l'envoye ou le Livre. Le Coran lie systematiquement le rejet des envoyes au rejet de Dieu Lui-meme.",
              axe5_frequence: "Pour la mission du khalifa, Dieu est le mandant de la mission. L'envoye vient de chez Dieu pour rappeler la mission. Rejeter le Livre de Dieu c'est rejeter les instructions de la mission. Le khalifa ne peut accomplir sa mission sans reconnaitre la source divine de ses instructions."
            },
            "Détresse": {
              status: "nul",
              senses: ["etre perplexe", "se lamenter"],
              proof_ctx: "Le mot est le nom propre Allah, pas un verbe de detresse. Le contexte est la source divine de l'envoye."
            },
            "Domination": {
              status: "nul",
              senses: ["asservir"],
              proof_ctx: "Le sens de domination est hors sujet — le mot est le nom propre Allah dans un contexte de provenance."
            },
            "Adoration/Dévotion": {
              status: "nul",
              senses: ["diviniser", "adorer", "faire adorer", "se devouer au culte"],
              proof_ctx: "Le mot est le nom propre Allah, pas un verbe d'adoration. Le contexte est la source de l'envoye."
            },
            "Refuge/Protection": {
              status: "nul",
              senses: ["demeurer", "proteger", "chercher refuge"],
              proof_ctx: "Le sens de refuge est hors sujet — le contexte est la provenance divine de l'envoye."
            }
          }
        }
      },
      // sdq pos=6
      {
        word_key: "sdq", position: 6, sense_chosen: "confirmer",
        analysis_axes: {
          sense_chosen: "confirmer",
          concept_chosen: "Vérité/Sincérité",
          concepts: {
            "Vérité/Sincérité": {
              status: "retenu",
              senses: ["vrai", "sincere", "dire vrai", "confirmer"],
              proof_ctx: "Le mot musaddiqun est un participe actif de la forme II de la racine s-d-q. Le Lane's donne : confirmer, declarer vrai, tenir pour veridique. La forme II intensifie l'action — musaddiq est celui qui confirme activement. Le participe actif indique une action continue et deliberee. La confirmation porte sur « ce qui etait avec eux » (li-ma ma'ahum) — l'envoye valide leurs ecritures anterieures. La distinction avec le don/aumone (nul) est claire : le contexte est la verite, pas la charite.",
              axe1_verset: "Le mot musaddiqun qualifie l'envoye — il est celui qui confirme. L'objet de la confirmation est « ce qui etait avec eux » — leurs ecritures. Le champ lexical (envoye, Livre, Dieu) montre que la confirmation est le lien entre l'ancien et le nouveau. L'envoye ne vient pas abolir mais valider. Le verset montre l'ironie : il confirme leur propre Livre, et pourtant ils le rejettent.",
              axe2_voisins: "Le verset 89 disait « un Livre de la part de Dieu confirmant ce qui est avec eux ». Le verset 91 reprochait : « pourquoi tuez-vous les prophetes de Dieu ? ». Le verset 101 reprend le theme de la confirmation — la confirmation est un pont entre l'ancien et le nouveau, mais le groupe rejette ce pont.",
              axe3_sourate: "La racine s-d-q apparait dans la sourate al-Baqarah dans le contexte de la confirmation des ecritures. En 2:41, « confirmant ce qui est avec vous ». En 2:89, « un Livre confirmant ce qui est avec eux ». La sourate insiste sur la continuite — chaque revelation confirme la precedente.",
              axe4_coherence: "La racine s-d-q apparait environ 155 fois dans le Coran. Le schema « musaddiqun li-ma ma'ahum/ma'akum » (confirmant ce qui est avec eux/vous) est un refrain coranique. En 3:3, « Il a fait descendre le Livre confirmant ce qui le precedait ». Le Coran se presente comme une confirmation, pas une rupture.",
              axe5_frequence: "Pour la mission du khalifa, la confirmation est un outil de la mission. L'envoye confirme — il valide la verite ancienne et la renouvelle. Le khalifa doit confirmer la verite la ou il la trouve, pas la rejeter par orgueil ou par ignorance. La confirmation est un acte de justice envers la verite."
            },
            "Don/Aumône": {
              status: "nul",
              senses: ["aumone", "dot"],
              proof_ctx: "Le sens de charite est hors sujet — le mot est un participe actif qualifiant l'envoye comme celui qui confirme, pas celui qui donne l'aumone."
            }
          }
        }
      },
      // nbdh pos=9
      {
        word_key: "nbdh", position: 9, sense_chosen: "jeter",
        analysis_axes: {
          sense_chosen: "jeter",
          concept_chosen: "Rejet/Abandon",
          concepts: {
            "Rejet/Abandon": {
              status: "retenu",
              senses: ["jeter", "rejeter", "rompre un pacte"],
              proof_ctx: "Le verbe nabadha est un accompli 3MS de la racine n-b-dh. Le Lane's donne : jeter, lancer loin de soi, rejeter avec mepris. Le rejet est un acte directionnel — on eloigne ce qu'on ne veut plus. L'accompli marque que l'acte est acheve. L'objet du rejet est le Livre de Dieu — jeter le Livre derriere le dos est une image de rejet total. Cette racine n'a qu'un seul sens retenu, le choix est immediat.",
              axe1_verset: "Le verbe nabadha est l'action centrale du verset — c'est l'acte de rejet qui donne son sens a tout le passage. Le sujet est « un groupe » (fariqun) — pas tous, mais une partie. L'objet est le Livre de Dieu (kitaba Allahi). Le complement de lieu est « derriere leurs dos » (wara'a zuhurihim). Le verset construit une image concrete et saisissante : jeter le Livre de Dieu derriere le dos comme un objet sans valeur.",
              axe2_voisins: "Le verset 100 parlait de la rupture des engagements. Le verset 101 montre une forme encore plus grave de rupture — non seulement ils rompent, mais ils jettent le Livre. Le verset 102 montrera ce qu'ils ont suivi a la place du Livre. La progression est : rompre → jeter → suivre autre chose.",
              axe3_sourate: "La racine n-b-dh apparait rarement dans le Coran — elle marque un rejet violent et meprisant. Dans la sourate al-Baqarah, ce verset est le seul usage. Le geste de jeter derriere le dos est propre a ce passage et montre le degre de mepris du groupe envers le Livre de Dieu.",
              axe4_coherence: "La racine n-b-dh apparait en 8:58 (« jette-leur [le pacte] de maniere egale ») et en 3:187 (« ils le jeterent derriere leurs dos »). Le Coran utilise cette racine pour decrire le rejet meprisant des engagements et des ecritures. Le geste de jeter derriere le dos est un idiome coranique pour le rejet total.",
              axe5_frequence: "Pour la mission du khalifa, jeter le Livre de Dieu est l'antithese de la mission. Le khalifa est charge de lire, comprendre et appliquer les ecritures. Jeter le Livre derriere le dos c'est trahir la mission fondamentale. Le rejet n'est pas passif — c'est un acte delibere de mepris envers la source de la mission."
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
              senses: ["separer", "distinguer", "diviser", "Furqan"],
              proof_ctx: "Le mot fariqun est un nom masculin singulier indefini de la racine f-r-q. Le Lane's donne : partie separee, groupe distinct. Le firiq est une partie qui s'est separee de l'ensemble — le mot porte en lui l'idee de separation. Ici « fariqun min alladhina utu al-kitaba » (un groupe parmi ceux qui ont recu le Livre) precise que ce n'est pas la totalite mais une fraction. Le texte est precis : tous n'ont pas rejete, seul un groupe l'a fait. La distinction avec le sens de « Furqan » est que le mot est ici un nom designant un sous-ensemble, pas le Discernement.",
              axe1_verset: "Le mot fariqun est le sujet du verbe nabadha (jeta). Le verset precise que le rejet n'est pas unanime — c'est un groupe, une fraction separee. Le champ lexical (ceux qui ont recu le Livre, un groupe parmi eux) montre que le texte distingue les responsables : pas tous les destinataires mais une partie specifique. Cette precision est importante — le Coran ne generalise pas le rejet.",
              axe2_voisins: "Le verset 100 utilisait « aktharuhum » (la plupart d'entre eux) pour la rupture des engagements. Le verset 101 utilise « fariqun » (un groupe) pour le rejet du Livre. La distinction entre « la plupart » et « un groupe » montre que le Coran nuance — le rejet est le fait d'un groupe specifique, pas necessairement de la majorite.",
              axe3_sourate: "La racine f-r-q apparait dans la sourate al-Baqarah sous ses differents sens. En 2:53, le Furqan (Discernement). En 2:136, la separation entre les prophetes est interdite. Le verset 101 utilise firiq pour designer un sous-groupe — la sourate montre que la separation est parfois geographique (peuples), parfois intellectuelle (ceux qui rejettent vs ceux qui acceptent).",
              axe4_coherence: "La racine f-r-q apparait environ 72 fois dans le Coran. Le mot fariq designe souvent une fraction des destinataires — en 2:85, « un groupe parmi vous ». En 3:23, « un groupe parmi eux se detourne ». Le Coran utilise fariq pour montrer que le rejet est un choix de groupe, pas une fatalite collective.",
              axe5_frequence: "Pour la mission du khalifa, le fait qu'un groupe rejette montre que la mission n'est pas unanimement acceptee. Le khalifa doit savoir que la verite rencontrera de l'opposition — mais cette opposition est le fait d'un groupe, pas de tous. La mission continue malgre le rejet d'une fraction."
            },
            "Groupe/Partie": {
              status: "nul",
              senses: ["groupe", "partie"],
              proof_ctx: "Ce sens est englobé par le sens retenu de separation — le firiq est un groupe qui s'est separe, la separation est le fondement du groupement."
            }
          }
        }
      },
      // aty pos=13
      {
        word_key: "aty", position: 13, sense_chosen: "donner",
        analysis_axes: {
          sense_chosen: "donner",
          concept_chosen: "Venue/Arrivée",
          concepts: {
            "Venue/Arrivée": {
              status: "retenu",
              senses: ["apporter", "donner", "arriver", "venir", "commettre"],
              proof_ctx: "Le verbe utu est un accompli passif 3MP de la racine a-t-y. Le Lane's donne : donner, apporter, accorder. Le passif indique que le Livre leur a ete donne — ils ne l'ont pas acquis par eux-memes, il leur est venu de l'exterieur. L'accompli marque que le don est acheve. La distinction avec « detruire » (nul) est evidente : le contexte est un don, pas une destruction.",
              axe1_verset: "Le verbe utu qualifie ceux qui ont recu le Livre — « alladhina utu al-kitaba » (ceux a qui le Livre a ete donne). Le passif souligne que le Livre est un don divin, pas une acquisition humaine. Le verset montre l'ironie : ceux a qui le Livre a ete donne sont les memes qui le jettent derriere leurs dos. Ils rejettent ce qu'ils n'ont pas merite par eux-memes.",
              axe2_voisins: "Le verset 87 mentionnait « Nous avons donne a Moussa le Livre ». Le verset 101 reprend le meme schema — le Livre a ete donne. Les versets 87-101 montrent une constante : Dieu donne, les destinataires rejettent. Le don est un acte de generosite divine, le rejet est un choix humain.",
              axe3_sourate: "La racine a-t-y au passif (utu) est une expression recurrente de la sourate al-Baqarah. En 2:144, « ceux a qui le Livre a ete donne ». En 2:145, « meme si tu apportais a ceux a qui le Livre a ete donne toutes les preuves ». La sourate identifie un groupe specifique par leur reception du Livre — un privilege qui cree une responsabilite.",
              axe4_coherence: "L'expression « alladhina utu al-kitaba » (ceux a qui le Livre a ete donne) apparait environ 50 fois dans le Coran. Elle designe systematiquement les communautes qui ont recu une revelation anterieure. Le passif souligne que la reception est un don, pas un droit — ce qui rend le rejet d'autant plus grave.",
              axe5_frequence: "Pour la mission du khalifa, recevoir le Livre est le debut de la mission. Le don divin n'est pas gratuit — il engage le destinataire. Rejeter ce don c'est trahir la confiance accordee. Le khalifa doit honorer ce qu'il a recu en le lisant, le comprenant et l'appliquant."
            },
            "Sens isolé/Détruire": {
              status: "nul",
              senses: ["detruire"],
              proof_ctx: "Le sens de destruction est hors sujet — le contexte est le don du Livre, pas sa destruction."
            }
          }
        }
      },
      // ktb pos=14
      {
        word_key: "ktb", position: 14, sense_chosen: "livre",
        analysis_axes: {
          sense_chosen: "livre",
          concept_chosen: "Livre/Écrit",
          concepts: {
            "Livre/Écrit": {
              status: "retenu",
              senses: ["contrat de mariage", "contrat d'affranchissement", "ecriture revelee", "livre", "registre", "contrat ecrit"],
              proof_ctx: "Le mot al-kitaba est un nom masculin singulier defini accusatif de la racine k-t-b. Le Lane's donne : livre, ecrit, ecriture revelee. L'article defini (al-) marque que c'est LE Livre connu — l'ecriture revelee specifique. Le mot apparait deux fois dans le verset : « ceux a qui le Livre a ete donne » et « le Livre de Dieu ». La premiere occurrence designe le Livre recu, la seconde le Livre rejete — c'est le meme Livre, ce qui rend le rejet d'autant plus absurde. La distinction avec l'ecriture (probable) est que le contexte designe le Livre comme objet de revelation, pas l'acte d'ecrire.",
              axe1_verset: "Le mot al-kitab apparait deux fois dans le verset, structurant le double mouvement : reception et rejet. Ceux a qui le Livre a ete donne (utu al-kitaba) jettent le Livre de Dieu (kitaba Allahi). Le champ lexical (envoye, confirmer, Dieu) montre que le Livre est l'objet central — c'est lui qui est donne, confirme, et rejete. Le verset tourne autour du Livre comme pivot.",
              axe2_voisins: "Le verset 89 mentionnait « un Livre de la part de Dieu ». Le verset 97 parlait de la revelation descendue par Djibril. Le verset 101 montre que le Livre est a la fois l'objet du don et du rejet. Les versets voisins construisent une tension entre la valeur du Livre et le mepris dont il est l'objet.",
              axe3_sourate: "La racine k-t-b est une des racines les plus importantes de la sourate al-Baqarah. En 2:2, « Ce Livre, nul doute en lui ». En 2:44, « vous qui lisez le Livre ». La sourate est elle-meme un Livre qui parle du Livre. Le verset 101 s'inscrit dans ce theme central — le Livre est le fil conducteur de la sourate.",
              axe4_coherence: "La racine k-t-b apparait environ 319 fois dans le Coran. Le mot kitab designe a la fois le Coran, la Torah, l'Evangile et les ecritures en general. En 2:101, le Livre designe a la fois les ecritures anterieures (que l'envoye confirme) et le Livre de Dieu (que le groupe rejette). Le Coran presente les ecritures comme un continuum.",
              axe5_frequence: "Pour la mission du khalifa, le Livre est le guide de la mission. Jeter le Livre derriere le dos c'est abandonner le guide. Le khalifa doit garder le Livre devant lui — le lire, le comprendre, l'appliquer. Le Livre n'est pas un objet decoratif mais un outil de mission."
            },
            "Écriture/Inscription": {
              status: "probable",
              senses: ["ecrire", "dicter", "copier un livre", "art de l'ecriture", "scribe", "s'inscrire", "savant", "enseignant", "vendeur de livres", "ecole", "demander d'ecrire", "ecrire a quelqu'un"],
              proof_ctx: "Le sens d'ecriture est un sens majeur de k-t-b — l'acte d'ecrire et de transcrire. La distinction philosophique avec le Livre est que l'ecriture est l'acte (tracer des signes), tandis que le Livre est le resultat (le support qui contient le texte). Le verset parle du Livre comme objet — « le Livre de Dieu » qu'on jette — pas de l'acte d'ecrire. Le mot est un nom defini (al-kitab), pas un verbe ou un nom d'action.",
              axe1_verset: "Le mot al-kitaba pourrait theoriquement porter le sens d'ecriture au sens large. Mais le verset traite le kitab comme un objet concret qu'on jette derriere le dos. On ne jette pas un acte d'ecriture — on jette un livre. Le sens de livre-objet est plus coherent avec le geste physique decrit.",
              axe2_voisins: "Le verset 89 parlait d'un « Livre de la part de Dieu ». Le contexte des versets voisins traite le kitab comme un objet de revelation — pas comme un acte d'ecrire. Le sens de livre est confirme par le contexte.",
              axe3_sourate: "La sourate al-Baqarah utilise kitab principalement au sens de livre-objet de revelation. En 2:2, « ce Livre, nul doute en lui ». Le sens d'ecriture (acte) apparait dans d'autres contextes (2:282, les contrats).",
              axe4_coherence: "Le Coran utilise kitab dans les deux sens selon le contexte. Quand kitab est defini (al-kitab), il designe generalement le Livre revele. Quand il est indefini ou dans un contexte juridique, il peut designer un ecrit ou un contrat.",
              axe5_frequence: "L'ecriture comme acte est un outil du khalifa — mais dans ce verset, c'est le Livre comme guide qui est en jeu, pas l'acte d'ecrire."
            },
            "Obligation/Décret": {
              status: "nul",
              senses: ["prescrire", "decret divin", "predestination", "rendre obligatoire", "juger"],
              proof_ctx: "Le sens de decret est hors sujet — le verset parle du Livre comme objet de revelation, pas d'un decret ou d'une prescription."
            },
            "Assemblage/Couture": {
              status: "nul",
              senses: ["rassembler", "coudre", "attacher"],
              proof_ctx: "Le sens d'assemblage est un sens physique premier de k-t-b. Le contexte est le Livre revele, pas l'acte de rassembler."
            }
          }
        }
      },
      // alh pos=16 (2nd occurrence)
      {
        word_key: "alh", position: 16, sense_chosen: "Dieu",
        analysis_axes: {
          sense_chosen: "Dieu",
          concept_chosen: "Divinité",
          concepts: {
            "Divinité": {
              status: "retenu",
              senses: ["divinite (concept)", "Dieu", "theologie", "divinite", "exclamation divine", "oui certes"],
              proof_ctx: "Deuxieme occurrence d'Allah dans le verset — ici au genitif dans l'expression « kitaba Allahi » (le Livre de Dieu). L'idafa (construction possessive) rattache le Livre a Dieu comme proprietaire. Jeter le Livre de Dieu c'est rejeter la propriete de Dieu — un acte qui vise directement l'autorite divine. Memes analyses que pour la premiere occurrence en position 5.",
              axe1_verset: "Le nom Allahi qualifie le Livre — c'est le Livre de Dieu. L'idafa cree un lien de propriete : le Livre appartient a Dieu. Jeter le Livre de Dieu derriere le dos c'est mepriser la propriete divine. Le verset utilise cette deuxieme occurrence pour montrer que le rejet n'est pas un acte anodin — c'est un rejet de Dieu Lui-meme a travers Son Livre.",
              axe2_voisins: "Les versets 97-99 parlaient de la revelation de Dieu et de Ses signes clairs. Le verset 101 montre que meme le Livre de Dieu — Sa propriete — est rejete. La progression montre que le rejet s'etend a tout ce qui vient de Dieu.",
              axe3_sourate: "L'expression « kitab Allah » (Livre de Dieu) apparait plusieurs fois dans la sourate. En 2:101, elle souligne l'origine divine du Livre rejete. La sourate insiste sur le fait que le Livre vient de Dieu — le rejeter c'est rejeter Dieu.",
              axe4_coherence: "L'expression « kitab Allah » apparait dans le Coran pour designer les ecritures revelees comme propriete divine. En 3:23, « on les invite vers le Livre de Dieu pour qu'il juge entre eux ». Le Livre de Dieu est l'autorite supreme — le rejeter c'est rejeter l'autorite.",
              axe5_frequence: "Pour la mission du khalifa, le Livre de Dieu est le mandat de la mission. Jeter le mandat derriere le dos c'est abandonner la mission. Le khalifa doit garder le Livre de Dieu comme reference permanente."
            }
          }
        }
      },
      // wry pos=17
      {
        word_key: "wry", position: 17, sense_chosen: "derriere",
        analysis_axes: {
          sense_chosen: "derriere",
          concept_chosen: "Position cachée",
          concepts: {
            "Position cachée": {
              status: "retenu",
              senses: ["derriere"],
              proof_ctx: "Le mot wara'a est un adverbe de lieu de la racine w-r-y. Le Lane's donne : derriere, ce qui est hors de vue. Wara'a designe ce qui se trouve de l'autre cote, dans la zone invisible. Ici « wara'a zuhurihim » (derriere leurs dos) cree une image de rejet total — le Livre est place dans la zone qu'on ne voit pas. La distinction avec la dissimulation (nul) est que le sens ici est spatial (derriere), pas actif (cacher).",
              axe1_verset: "Le mot wara'a complete le geste de rejet — jeter derriere les dos. L'expression « wara'a zuhurihim » est une image concrete : le Livre est place dans la zone invisible, derriere le corps. Le champ lexical du verset (jeter, derriere, dos) construit une image de mepris physique. Le Livre n'est pas simplement refuse — il est eloigne dans la zone qu'on ne regarde pas.",
              axe2_voisins: "Le verset 100 parlait de rupture d'engagement. Le verset 101 montre que le rejet va plus loin — non seulement ils rompent, mais ils jettent derriere eux. Le geste de jeter derriere implique qu'ils avancent dans une direction opposee au Livre.",
              axe3_sourate: "L'expression « wara'a zuhurihim » est specifique a ce verset dans la sourate. Elle cree une image forte qui contraste avec les passages ou le Livre est devant les yeux (2:2 « ce Livre, nul doute en lui »). Le Livre devrait etre devant, mais ils le mettent derriere.",
              axe4_coherence: "L'expression « jeter derriere les dos » apparait aussi en 3:187 — « ceux a qui le Livre a ete donne le jeterent derriere leurs dos ». Le Coran utilise cette expression idiomatique pour le rejet meprisant des ecritures. C'est un geste symbolique de negation totale.",
              axe5_frequence: "Pour la mission du khalifa, mettre le Livre derriere le dos c'est tourner le dos a la mission. Le khalifa doit garder le Livre devant lui — dans son champ de vision, dans sa conscience. Ce qui est derriere le dos est oublie et neglige."
            },
            "Dissimulation": {
              status: "nul",
              senses: ["enterrer", "cacher", "dissimuler"],
              proof_ctx: "Le sens de dissimulation active est hors sujet — le mot est ici un adverbe de lieu (derriere), pas un verbe de dissimulation."
            }
          }
        }
      },
      // zhr pos=18
      {
        word_key: "zhr", position: 18, sense_chosen: "dos",
        analysis_axes: {
          sense_chosen: "dos",
          concept_chosen: "Manifestation/Dos",
          concepts: {
            "Manifestation/Dos": {
              status: "retenu",
              senses: ["apparaitre", "dos", "manifeste", "prevaloir"],
              proof_ctx: "Le mot zuhurihim est un pluriel masculin de la racine z-h-r avec pronom suffixe 3MP. Le Lane's donne : dos, partie posterieure, ce qui est derriere. Le dos (zahr) est la partie du corps qu'on ne voit pas — c'est la face cachee de la personne. Le pluriel (zuhur) avec le possessif (him, leurs) precise que ce sont leurs propres dos. L'expression « wara'a zuhurihim » (derriere leurs dos) combine deux mots de la zone invisible pour creer une image de rejet total et definitif.",
              axe1_verset: "Le mot zuhurihim complete l'image du rejet — derriere leurs dos. Le dos est la partie du corps opposee au visage — ce qu'on met derriere le dos est ce qu'on refuse de regarder. Le verset oppose implicitement le visage (la direction de l'attention) et le dos (la direction du rejet). Le Livre devrait etre devant leurs yeux mais il est derriere leurs dos.",
              axe2_voisins: "Le verset 100 parlait de rupture. Le verset 101 image cette rupture par un geste physique — jeter derriere le dos. Le verset 102 montrera ce qu'ils regardent a la place (ce que les demons racontent). La direction du regard est le theme implicite : ils tournent le dos au Livre et font face a autre chose.",
              axe3_sourate: "La racine z-h-r porte le double sens de manifestation (ce qui apparait) et de dos (la partie posterieure). Dans ce verset, c'est le sens de dos qui domine. La sourate al-Baqarah oppose le manifeste et le cache — en 2:33, Dieu connait le manifeste et le cache. Mettre le Livre derriere le dos c'est le placer dans le cache.",
              axe4_coherence: "En 3:187, la meme expression « jeterent derriere leurs dos » est utilisee. Le Coran associe le geste de jeter derriere le dos au rejet des ecritures. Le dos est un symbole coranique de ce qu'on refuse de voir et de ce qu'on neglige.",
              axe5_frequence: "Pour la mission du khalifa, le dos represente la negligence. Mettre le Livre derriere le dos c'est negliger la source de la mission. Le khalifa doit faire face au Livre — le garder dans son champ de vision permanent."
            }
          }
        }
      },
      // elm pos=21
      {
        word_key: "elm", position: 21, sense_chosen: "savoir",
        analysis_axes: {
          sense_chosen: "savoir",
          concept_chosen: "Savoir/Connaissance",
          concepts: {
            "Savoir/Connaissance": {
              status: "retenu",
              senses: ["science", "certitude", "enseignement", "connaitre", "etre informe", "savoir", "savant"],
              proof_ctx: "Le verbe ya'lamuna est un inaccompli 3MP de la racine '-l-m. Le Lane's donne : savoir, connaitre, etre informe. L'inaccompli avec la negation (la ya'lamuna) dans une comparaison (ka-annahum, comme s'ils) cree une similitude : ils agissent COMME s'ils ne savaient pas. Le texte ne dit pas qu'ils ne savent pas — il dit qu'ils font semblant. Le savoir est une realite interieure permanente — ils possedent le savoir mais agissent comme s'ils ne le possedaient pas. La distinction avec le monde/creation (nul) est claire : le contexte est le savoir, pas l'univers.",
              axe1_verset: "Le verbe ya'lamuna ferme le verset avec une comparaison : « comme s'ils ne savaient pas ». Le champ lexical (Livre, confirmation, envoye) montre que le savoir est present — ils connaissent le Livre, ils savent que l'envoye confirme. Mais ils agissent comme des ignorants. Le verset oppose le savoir reel (ils savent) et le comportement apparent (ils agissent comme s'ils ne savaient pas). L'ironie est au coeur du verset.",
              axe2_voisins: "Le verset 102 se terminera par « s'ils savaient ! » (law kanu ya'lamun). Le verset 103 aussi : « s'ils savaient ! ». La repetition de « savoir » dans les versets voisins montre que le theme du savoir et de l'ignorance deliberee est central dans ce passage.",
              axe3_sourate: "La racine '-l-m est une des plus frequentes de la sourate al-Baqarah. En 2:13, « ce sont eux les imbeciles mais ils ne savent pas ». En 2:30, « Je sais ce que vous ne savez pas ». La sourate oppose le savoir de Dieu (total) au savoir des humains (partiel et souvent refuse).",
              axe4_coherence: "La racine '-l-m apparait environ 854 fois dans le Coran. Le theme du savoir feint (savoir mais agir comme si on ne savait pas) est recurrent. En 2:75, « un groupe parmi eux entendait la Parole de Dieu puis la falsifiait apres l'avoir comprise ». Le Coran insiste sur le fait que le rejet n'est pas du a l'ignorance mais au choix.",
              axe5_frequence: "Pour la mission du khalifa, le savoir est l'outil de la mission. Savoir et agir comme si on ne savait pas est une trahison de la mission. Le khalifa est responsable de ce qu'il sait — ignorer deliberement c'est manquer a sa responsabilite. Le savoir engage."
            },
            "Monde/Création": {
              status: "nul",
              senses: ["univers", "monde", "ensemble des creatures", "les mondes"],
              proof_ctx: "Le sens de monde est hors sujet — le verbe ya'lamuna est un verbe de connaissance, pas un nom designant l'univers."
            },
            "Marque/Signe": {
              status: "nul",
              senses: ["levre fendue", "marquer", "signe", "drapeau", "montagne", "repere", "etendard"],
              proof_ctx: "Le sens de signe/marque est hors sujet — le verbe est « savoir », pas « marquer »."
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

  const verseIds = [108];
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
  console.log('=== PIPELINE SOURATE 2 — VERSET 101 ===\n');
  await processVerse(101);
  await syncWordMeanings();
  console.log('\n=== PIPELINE V101 TERMINEE ===');
}

main().catch(e => console.error('FATAL:', e));
