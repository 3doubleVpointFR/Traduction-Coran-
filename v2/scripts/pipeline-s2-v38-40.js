const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// =====================================================
// PIPELINE SOURATE 2 — AL-BAQARAH — VERSETS 38 À 40
// verse_id=45 (2:38), verse_id=46 (2:39), verse_id=47 (2:40)
// =====================================================

const verseData = {

  // =====================================================
  // VERSET 2:38
  // verse_id=45, analysis_id=405
  // =====================================================
  38: {
    verse_id: 45,
    analysis_id: 405,
    translation_arab: "Nous avons dit : descendez tous de là. Si jamais une guidance vous parvient de Ma part, ceux qui suivent Ma guidance, nulle crainte sur eux et ils ne seront pas attristés.",
    full_translation: "Nous dîmes : descendez-en tous ! Si jamais une guidance de Ma part vous parvient, ceux qui auront suivi Ma guidance n'auront rien à craindre et ne seront point affligés.",
    translation_explanation: `§DEMARCHE§
Ce verset est la conclusion du recit d'Adam au Paradis. Le verbe **qulna** est un accompli 1ere personne pluriel de la racine q-w-l (Nous avons dit — le pluriel de majeste). Le Lane's donne « he said, spoke, uttered ». Le verbe **ihbituu** est un imperatif pluriel de la racine h-b-t. Le Lane's donne « he descended, went down from a higher to a lower place ». L'imperatif pluriel indique un ordre adresse a un groupe (Adam, Eve et Iblis). Le mot **jamii'an** est un hal (etat) de la racine j-m-e. Le Lane's donne « all, the whole, altogether ». C'est un accusatif adverbial qui precise que la descente concerne tout le monde sans exception. Le verbe **ya'tiyannakum** est un inaccompli energetique 3MS de la racine a-t-y avec un pronom 2MP. Le Lane's donne « he came, arrived ». La forme energetique (nun de renforcement) ajoute une nuance d'insistance et de certitude conditionnelle — si jamais une guidance vous parvient assurement. Le mot **hudan** est un nom indefini de la racine h-d-y au cas nominatif. Le Lane's donne « guidance, right direction ». Le verbe **tabica** est un accompli 3MS de la racine t-b-e. Le Lane's donne « he followed ». La racine porte l'idee de marcher derriere quelqu'un, de suivre ses pas. Le mot **khawfun** est un nom indefini de la racine kh-w-f au cas nominatif. Le Lane's donne « fear, dread ». Le verbe **yahzanuna** est un inaccompli 3MP de la racine h-z-n. Le Lane's donne « he was grieved, sad ».

§JUSTIFICATION§
**dit** — Le sens retenu est « Parole/Enonciation ». Le verbe qala designe l'acte de produire des mots. L'alternative « ordonner » est ecartee car trop specifique — le verbe dit simplement qu'une parole a ete prononcee.

**descendez** — Le sens retenu est « Descente/Chute ». Le verbe ihbituu designe le mouvement du haut vers le bas. L'alternative « degrader » est ecartee car le contexte parle d'un deplacement spatial (du Paradis vers la terre), pas d'une degradation morale.

**tous** — Le sens retenu est « Rassemblement/Union ». Le mot jamii'an designe la totalite du groupe. L'alternative « vendredi » est ecartee car hors contexte.

**parvient** — Le sens retenu est « Venue/Arrivee ». Le verbe ya'tiyannakum designe l'action d'arriver, de parvenir a quelqu'un. L'alternative « donner » est ecartee car le sujet est la guidance (qui vient), pas quelqu'un qui donne.

**guidance** — Le sens retenu est « Guidance/Direction ». Le mot hudan designe le fait de montrer le bon chemin. L'alternative « cadeau » est ecartee car la racine h-d-y a ici le sens spirituel de direction, pas le sens materiel de present.

**suivre** — Le sens retenu est « Scellement/Fermeture ». Le verbe tabica de la racine t-b-e signifie suivre, marcher derriere. La racine porte l'idee de mettre son pas dans le pas d'un autre, de s'attacher a quelque chose. L'alternative « sceller » est ecartee car le contexte parle de suivre la guidance.

**crainte** — Le sens retenu est « Crainte/Peur ». Le mot khawfun designe l'apprehension devant un danger. Pas d'alternative pertinente dans ce contexte.

**attristés** — Le sens retenu est « Tristesse/Affliction ». Le verbe yahzanuna designe l'etat d'etre triste. Pas d'alternative pertinente.

§CRITIQUE§
**descendez vs tombez** — Les traductions courantes donnent « descendez ». Le Lane's donne « he descended, went down ». « Tombez » impliquerait un mouvement involontaire, alors que ihbituu est un imperatif qui ordonne un deplacement volontaire. La descente est un acte ordonne, pas une chute subie.
**guidance vs direction** — Le mot hudan est traduit par « guidance » plutot que « direction » car il porte une dimension spirituelle absente du mot « direction ». La guidance implique un guide qui connait le chemin et le montre.
Les traductions courantes donnent sensiblement le meme sens pour le reste du verset.`,
    segments: [
      { fr: "Nous avons dit", pos: "verbe", phon: "qulna", arabic: "قُلْنَا", word_key: "qwl", is_particle: false, sense_retenu: "dire", position: 1 },
      { fr: "descendez", pos: "verbe", phon: "ihbituu", arabic: "ٱهْبِطُوا۟", word_key: "hbt", is_particle: false, sense_retenu: "descendre", position: 2 },
      { fr: "de là", phon: "minha", arabic: "مِنْهَا", is_particle: true, position: 3 },
      { fr: "tous", pos: "nom", phon: "jamii'an", arabic: "جَمِيعًا", word_key: "jme", is_particle: false, sense_retenu: "totalité", position: 4 },
      { fr: "si jamais", phon: "fa-imma", arabic: "فَإِمَّا", is_particle: true, position: 5 },
      { fr: "vous parvient", pos: "verbe", phon: "ya'tiyannakum", arabic: "يَأْتِيَنَّكُم", word_key: "aty", is_particle: false, sense_retenu: "parvenir", position: 6 },
      { fr: "de Ma part", phon: "minni", arabic: "مِّنِّY", is_particle: true, position: 7 },
      { fr: "une guidance", pos: "nom", phon: "hudan", arabic: "هُدًY", word_key: "hdy", is_particle: false, sense_retenu: "guidance", position: 8 },
      { fr: "celui qui", phon: "faman", arabic: "فَمَن", is_particle: true, position: 9 },
      { fr: "suit", pos: "verbe", phon: "tabica", arabic: "تَبِعَ", word_key: "tbe", is_particle: false, sense_retenu: "suivre", position: 10 },
      { fr: "Ma guidance", pos: "nom", phon: "hudaya", arabic: "هُدَاYَ", word_key: "hdy", is_particle: false, sense_retenu: "guidance", position: 11 },
      { fr: "nulle", phon: "fala", arabic: "فَلَا", is_particle: true, position: 12 },
      { fr: "crainte", pos: "nom", phon: "khawfun", arabic: "خَوْفٌ", word_key: "xwf", is_particle: false, sense_retenu: "crainte", position: 13 },
      { fr: "sur eux", phon: "'alayhim", arabic: "عَلَيْهِمْ", is_particle: true, position: 14 },
      { fr: "et ne", phon: "wala", arabic: "وَلَا", is_particle: true, position: 15 },
      { fr: "eux", phon: "hum", arabic: "هُمْ", is_particle: true, position: 16 },
      { fr: "seront attristés", pos: "verbe", phon: "yahzanuna", arabic: "يَحْزَنُونَ", word_key: "hzn", is_particle: false, sense_retenu: "être triste", position: 17 }
    ],
    words: [
      {
        word_key: "qwl", position: 1, sense_chosen: "dire",
        analysis_axes: {
          concept_chosen: "Parole/Énonciation",
          concepts: {
            "Parole/Énonciation": {
              status: "retenu",
              senses: ["dire", "parler", "parole", "discours", "affirmer"],
              proof_ctx: "Le verbe qulna est un accompli 1ere personne pluriel de la racine q-w-l. Le Lane's donne « he said, spoke, uttered ». Le pluriel de majeste (Nous) est utilise par Dieu pour exprimer Sa grandeur. La parole divine n'est pas un simple enonce — elle est acte createur, commandement qui s'execute. Quand Dieu dit « descendez », la descente s'accomplit. La parole divine est performative — dire c'est faire.",
              axe1_verset: "Le verbe qulna ouvre le verset et introduit le commandement divin. La structure est : Dieu dit, puis vient l'ordre (descendez), puis la condition (si une guidance vous parvient), puis la promesse (pas de crainte ni de tristesse). La parole divine encadre tout le verset — c'est elle qui contient la descente, la guidance, et la promesse. Le qulna rappelle que tout ce qui suit est parole de Dieu, non narration humaine. C'est l'autorite absolue qui parle.",
              axe2_voisins: "Le verset 36 racontait la faute d'Adam et Eve — le diable les fit trebucher. Le verset 37 racontait le repentir d'Adam et l'acceptation divine. Ce verset 38 est la consequence : Dieu prononce le decret de descente. La parole de Dieu ici n'est pas un chatiment mais un ordonnancement — Il dit « descendez » tout en promettant la guidance. Le qulna de ce verset repond au qulna du verset 35 (Nous avons dit : habite le jardin) — le meme Dieu qui installe est celui qui fait descendre.",
              axe3_sourate: "La sourate al-Baqarah utilise le verbe qala de maniere recurrente pour les paroles divines, les paroles des anges, et les paroles des humains. Le contraste entre la parole divine (verite et commandement) et les paroles humaines (mensonge et protestation) est un theme central. Ce qulna fait partie de la serie des ordres divins qui structurent le recit d'Adam : « habite » (v35), « descendez » (v36 et v38), « rappelez-vous » (v40).",
              axe4_coherence: "Le verbe qala est le plus frequent du Coran apres le nom Allah. Il introduit chaque echange, chaque commandement, chaque recit. La parole est le moyen premier de la relation entre Dieu et Sa creation. En 2:30, Dieu dit aux anges « Je vais placer un khalifa ». En 2:35, Dieu dit a Adam « habite le jardin ». En 2:38, Dieu dit « descendez ». Chaque parole divine marque une etape dans le recit de la mission humaine.",
              axe5_frequence: "Pour la mission du khalifa, la parole divine est le cadre de reference. Le khalifa agit dans le cadre de ce que Dieu a dit — pas selon ses propres paroles. Ce qulna etablit les conditions de la vie sur terre : la descente est reelle, mais la guidance est promise. Le khalifa sait que Dieu a parle et que Sa parole contient a la fois l'epreuve et la voie de sortie."
            },
            "Pensée/Avis": {
              status: "nul",
              senses: ["opinion", "avis", "doctrine"],
              proof_ctx: "La pensee est un sens secondaire de q-w-l (avoir une opinion). Le contexte utilise qulna comme acte de parole explicite, pas comme pensee interieure. Dieu dit, Il ne pense pas simplement."
            }
          }
        }
      },
      {
        word_key: "hbt", position: 2, sense_chosen: "descendre",
        analysis_axes: {
          concept_chosen: "Descente/Chute",
          concepts: {
            "Descente/Chute": {
              status: "retenu",
              senses: ["descendre", "faire descendre", "baisser", "tomber"],
              proof_ctx: "Le verbe ihbituu est un imperatif pluriel de la racine h-b-t. Le Lane's donne « he descended, went down from a higher to a lower place ». La racine porte l'idee du mouvement spatial du haut vers le bas. L'imperatif pluriel s'adresse au groupe (Adam, Eve, Iblis). La descente du Paradis vers la terre est un changement de lieu ontologique — passer de l'espace sacre a l'espace d'epreuve.",
              axe1_verset: "Le verbe ihbituu est l'ordre central du verset — c'est autour de cette descente que s'articule tout le reste. Descendez, mais si une guidance vient et que vous la suivez, pas de crainte. La descente n'est pas une condamnation definitive mais le debut d'une mission. L'adverbe jamii'an (tous) precise que personne n'est exempte de cette descente — ni Adam, ni Eve, ni Iblis. La descente est universelle et sans exception.",
              axe2_voisins: "Le verset 36 avait deja mentionne la descente (ihbituu) mais dans un contexte punitif apres la faute. Ce verset 38 reprend le meme verbe mais dans un contexte de reorganisation — Dieu ajoute la promesse de guidance. La repetition du verbe ihbituu entre les deux versets montre deux faces de la descente : la consequence de la faute (v36) et le plan divin avec ses conditions (v38). Le verset 37 entre les deux raconte le repentir, ce qui transforme la descente-punition en descente-mission.",
              axe3_sourate: "La descente est un theme structurant de la sourate al-Baqarah. Le Coran descend du ciel (2:2), la pluie descend du ciel (2:22), Adam descend du Paradis (2:36, 2:38). Chaque descente porte une finalite — la pluie fait pousser, le Coran guide, la descente d'Adam inaugure la mission humaine. La sourate commence par la revelation descendue et passe a l'humanite descendue — les deux descentes se repondent.",
              axe4_coherence: "La racine h-b-t apparait 8 fois dans le Coran, dont 4 dans la sourate al-Baqarah (2:36, 2:38, 2:61). En 2:61, Moise dit aux fils d'Israel « ihbituu misran » (descendez en Egypte) — la meme racine mais pour un autre deplacement. En 7:13 et 20:123, la descente est ordonnee a Iblis et a Adam dans des contextes paralleles. La racine est specialisee dans les descentes qui marquent un changement d'etat spirituel.",
              axe5_frequence: "Pour la mission du khalifa, la descente est le point de depart. Le khalifa ne commence pas dans le Paradis — il commence sur terre, apres la descente. Sa mission consiste a retrouver par l'effort ce qui a ete perdu par la descente. La descente cree le cadre de l'epreuve et de la responsabilite terrestre."
            },
            "Dégradation": {
              status: "nul",
              senses: ["dégrader"],
              proof_ctx: "La degradation est un sens derive de h-b-t (baisser en qualite). Le contexte parle d'un deplacement spatial (du Paradis vers la terre), pas d'une perte de valeur morale. L'ordre est un deplacement, pas une punition qui rabaisse."
            }
          }
        }
      },
      {
        word_key: "jme", position: 4, sense_chosen: "totalité",
        analysis_axes: {
          concept_chosen: "Rassemblement/Union",
          concepts: {
            "Rassemblement/Union": {
              status: "retenu",
              senses: ["rassembler", "réunir", "assembler", "contracter", "unanimité", "vendredi", "totalité"],
              proof_ctx: "Le mot jamii'an est un hal (accusatif adverbial d'etat) de la racine j-m-e. Le Lane's donne « all, the whole, altogether ». Le mot indique que l'ensemble du groupe est concerne — tous sans exception. C'est la totalite qui descend, pas une partie. Le hal precisant l'etat pendant l'action du verbe (descendez en etant tous ensemble), la nuance est que la descente est collective et simultanee.",
              axe1_verset: "Le mot jamii'an modifie l'imperatif ihbituu (descendez) — il precise que l'ordre s'adresse a tous sans exception. Personne ne reste dans le Paradis — ni Adam, ni Eve, ni Iblis. Cette totalite est importante car elle montre que la descente n'est pas un privilege ou une punition selective. C'est un evenement universel qui inaugure l'epreuve terrestre pour tous les etres concernes.",
              axe2_voisins: "Le verset 36 disait deja ihbituu (descendez) mais sans preciser jamii'an. Ce verset 38 ajoute « tous » — comme pour insister sur le caractere total et definitif de la descente. Le verset 37 a permis le pardon d'Adam, mais la descente n'est pas annulee pour autant. Le pardon ne supprime pas la descente — il la transforme en mission avec garantie de guidance.",
              axe3_sourate: "La racine j-m-e revient plusieurs fois dans la sourate. En 2:29, Dieu a cree pour vous ce qui est sur terre « jamii'an » (tout). En 2:148, « Dieu vous rassemblera tous ». Le rassemblement est un motif qui encadre l'histoire humaine — la descente collective et le rassemblement final. Ce qui a ete disperse par la descente sera rassemble au Jour du Jugement.",
              axe4_coherence: "La racine j-m-e est utilisee dans le Coran pour marquer la totalite et l'universalite. En 3:103, « accrochez-vous tous au cable de Dieu ». En 10:28, « le jour ou Nous les rassemblerons tous ». Le rassemblement est un acte divin qui contraste avec la dispersion humaine. Le jamii'an de 2:38 marque le debut de la dispersion — la descente totale depuis le Paradis.",
              axe5_frequence: "Pour la mission du khalifa, la totalite rappelle que tous les humains partagent la meme condition — descendus ensemble, eprouves ensemble. Le khalifa n'est pas un elu qui echappe a la descente. Il partage la condition commune et doit gerer la diversite qui decoule de cette descente collective."
            }
          }
        }
      },
      {
        word_key: "aty", position: 6, sense_chosen: "parvenir",
        analysis_axes: {
          concept_chosen: "Venue/Arrivée",
          concepts: {
            "Venue/Arrivée": {
              status: "retenu",
              senses: ["venir", "arriver", "apporter", "donner", "commettre"],
              proof_ctx: "Le verbe ya'tiyannakum est un inaccompli energetique 3MS de la racine a-t-y avec suffixe pronominal 2MP. Le Lane's donne « he came, arrived, approached ». La forme energetique (nun de renforcement) ajoute une insistance — si jamais une guidance vous parvient assurement. Le sujet est hudan (guidance) — c'est la guidance qui vient vers eux, pas eux qui vont vers la guidance. Le mouvement est du haut vers le bas, de Dieu vers les humains.",
              axe1_verset: "Le verbe ya'tiyannakum introduit la condition centrale du verset. La structure conditionnelle (imma ... fa) dit : si une guidance vous parvient, alors ceux qui la suivent n'auront rien a craindre. Le verbe precise que la guidance vient activement vers les humains — elle n'est pas quelque chose qu'il faut chercher dans l'obscurite. Dieu envoie la guidance et elle arrive. La responsabilite humaine commence apres l'arrivee de la guidance.",
              axe2_voisins: "Le verset 37 mentionnait que Dieu a enseigne des paroles a Adam (guidance par la parole). Ce verset 38 generalise : si une guidance vous parvient a tous. La guidance du verset 37 etait specifique a Adam — celle du verset 38 est promise a toute l'humanite descendue. Le passage du particulier (Adam) au general (vous) marque l'elargissement du plan divin.",
              axe3_sourate: "La sourate al-Baqarah s'ouvre en declarant que ce Livre est une guidance pour les pieux (2:2). La guidance qui vient est incarnee dans le Coran et les prophetes. Le verbe ya'tiyannakum de 2:38 est la promesse originelle que Dieu enverra toujours une guidance — le Coran en est l'accomplissement final.",
              axe4_coherence: "La racine a-t-y est l'une des plus frequentes du Coran (549 occ.). Elle decrit tout ce qui vient vers quelqu'un : la guidance, les signes, le chatiment, l'Heure. En 20:123, le passage parallele utilise le meme verbe dans le meme contexte : « si une guidance vous parvient de Ma part ». La promesse de guidance est inscrite dans le decret meme de la descente.",
              axe5_frequence: "Pour la mission du khalifa, la venue de la guidance est la garantie divine que le khalifa ne sera pas abandonne a lui-meme. Dieu a fait descendre et Dieu envoie la guidance — les deux actes sont lies. Le khalifa qui recoit la guidance a la responsabilite de la suivre, pas de la chercher par ses propres moyens."
            }
          }
        }
      },
      {
        word_key: "hdy", position: 8, sense_chosen: "guidance",
        analysis_axes: {
          concept_chosen: "Guidance/Direction",
          concepts: {
            "Guidance/Direction": {
              status: "retenu",
              senses: ["guider", "diriger vers la bonne voie", "montrer le chemin", "guidance", "se guider soi-même"],
              proof_ctx: "Le mot hudan est un nom indefini au cas nominatif de la racine h-d-y. Le Lane's donne « he directed aright, guided to the right way ». Le hudan est la direction droite, le chemin correct montre par quelqu'un qui le connait. L'indefini indique qu'il s'agit d'une guidance non encore specifiee — n'importe quelle guidance venue de Dieu. Le mot apparait deux fois dans le verset : hudan (une guidance) et hudaya (Ma guidance) — la premiere indefinie, la seconde possedee par Dieu.",
              axe1_verset: "Le mot hudan est le pivot du verset. La premiere occurrence (hudan) est le sujet de ya'tiyannakum — c'est la guidance qui vient. La seconde (hudaya) est l'objet de tabica — c'est la guidance qu'on suit. Le verset trace le parcours complet : la guidance arrive, puis on la suit, et la recompense est l'absence de crainte et de tristesse. Le verset montre que la guidance est un don qui vient d'en haut et que la responsabilite humaine est de la suivre.",
              axe2_voisins: "Le verset 37 racontait le repentir d'Adam grace aux paroles recues de Dieu — une forme de guidance specifique. Ce verset 38 generalise la promesse de guidance a toute l'humanite. Le verset 39 opposera ceux qui suivent la guidance a ceux qui rejettent et dementent les signes. La guidance est le fil conducteur qui separe les deux destins.",
              axe3_sourate: "La sourate al-Baqarah commence par « ce Livre est une guidance pour les pieux » (2:2). Le mot hudan apparait des les premiers versets et revient tout au long de la sourate. En 2:120, « dis : la guidance de Dieu est la vraie guidance ». En 2:185, « le mois ou le Coran a ete descendu comme guidance ». La guidance est le theme central de la sourate — la promesse de 2:38 en est le fondement historique.",
              axe4_coherence: "La racine h-d-y apparait 316 fois dans le Coran. C'est l'un des concepts les plus centraux. La guidance divine est opposee a l'egarement (dalal) dans de nombreux passages. En 7:178, « celui que Dieu guide est le bien guide ». En 20:123, le meme propos est repris : « si une guidance vous parvient de Ma part, celui qui suit Ma guidance ne s'egarera pas et ne sera pas malheureux ». Les deux passages se completent — l'un promet l'absence de crainte, l'autre l'absence d'egarement.",
              axe5_frequence: "Pour la mission du khalifa, la guidance est l'outil essentiel de sa mission. Le khalifa ne doit pas inventer le chemin — il doit suivre la guidance divine. La promesse de 2:38 est que cette guidance sera toujours disponible. Le khalifa qui suit la guidance accomplit sa mission ; celui qui la rejette echoue."
            },
            "Conduite/Comportement": {
              status: "nul",
              senses: ["conduite", "manière d'agir", "comportement calme"],
              proof_ctx: "La conduite est un sens secondaire de h-d-y. Le contexte parle explicitement de guidance divine (guidance venue de Ma part), pas d'un comportement humain observable."
            },
            "Don/Offrande": {
              status: "nul",
              senses: ["cadeau", "offrande", "sacrifice", "présent"],
              proof_ctx: "Le don est un sens de h-d-y (hadiyya = cadeau). Le contexte parle de guidance spirituelle, pas de cadeau materiel. Le hudan coranique est systematiquement la direction droite, pas un present."
            }
          }
        }
      },
      {
        word_key: "tbe", position: 10, sense_chosen: "suivre",
        analysis_axes: {
          concept_chosen: "Scellement/Fermeture",
          concepts: {
            "Scellement/Fermeture": {
              status: "retenu",
              senses: ["sceller", "marquer", "empreinte"],
              proof_ctx: "Le verbe tabica est un accompli 3MS de la racine t-b-e. Le Lane's donne « he followed, went after, pursued, walked behind ». La racine porte fondamentalement l'idee de marcher sur les traces de quelqu'un, de mettre son pas la ou un autre a mis le sien. C'est un acte directionnel et volontaire — on choisit de suivre. En contexte coranique, tabica al-huda signifie suivre la guidance, c'est-a-dire se conformer a la direction indiquee par Dieu.",
              axe1_verset: "Le verbe tabica est la cle de la condition du verset. Apres l'arrivee de la guidance (ya'tiyannakum), le verset specifie que c'est celui qui SUIT (tabica) cette guidance qui sera protege. La guidance seule ne suffit pas — il faut la suivre activement. Le verbe tabica implique un choix delibere et un effort continu. Ce n'est pas un acte ponctuel mais une adhesion soutenue — suivre implique marcher, perseverer, ne pas s'arreter.",
              axe2_voisins: "Le verset 37 montrait Adam recevant des paroles et se repentant — un acte ponctuel. Ce verset 38 demande de suivre la guidance — un acte continu. Le passage du repentir ponctuel au suivi continu marque la transition entre le Paradis (ou un seul repentir suffit) et la terre (ou il faut suivre jour apres jour). Le verset 39 montrera le contraire : ceux qui ne suivent pas mais rejettent et dementent.",
              axe3_sourate: "La racine t-b-e revient dans la sourate pour decrire differents types de suivi. En 2:145, « si tu suivais leurs passions ». En 2:166, les suiveurs desavoueront les suivis au Jour du Jugement. En 2:170, « nous suivons ce sur quoi nous avons trouve nos peres ». La sourate distingue le bon suivi (suivre la guidance de Dieu) du mauvais suivi (suivre les passions, suivre les ancetres aveuglement).",
              axe4_coherence: "La racine t-b-e est utilisee dans tout le Coran pour decrire l'adhesion volontaire a une voie. En 3:73, « ne suivez que ceux qui suivent votre religion ». En 7:157, « ceux qui le suivent (le Prophete) ». En 20:123, le passage parallele utilise ittaba'a (forme VIII = suivre avec insistance). Le suivi est toujours presente comme un choix moral qui engage l'avenir de la personne.",
              axe5_frequence: "Pour la mission du khalifa, le suivi de la guidance est l'acte fondamental. Le khalifa n'est pas un inventeur ni un createur de voie — il est un suiveur de la voie divine. Sa grandeur n'est pas dans l'originalite mais dans la fidelite. Suivre la guidance c'est accomplir la succession (khilafa) dans le cadre fixe par Dieu."
            },
            "Caractère inné": {
              status: "nul",
              senses: ["nature"],
              proof_ctx: "Le caractere inne (tab') est un sens de la racine t-b-e (nature, disposition). Le contexte utilise le verbe tabica dans son sens premier de suivre, pas dans le sens de nature innee."
            }
          }
        }
      },
      {
        word_key: "xwf", position: 13, sense_chosen: "crainte",
        analysis_axes: {
          concept_chosen: "Crainte/Peur",
          concepts: {
            "Crainte/Peur": {
              status: "retenu",
              senses: ["craindre", "peur", "appréhension"],
              proof_ctx: "Le mot khawfun est un nom indefini au cas nominatif de la racine kh-w-f. Le Lane's donne « fear, dread, fright ». Le khawf est l'apprehension devant un danger futur — c'est une emotion qui anticipe le mal. L'indefini avec la negation (la khawfun) signifie « nulle crainte, aucune espece de crainte ». La negation est totale — il n'y a absolument aucune crainte pour ceux qui suivent la guidance.",
              axe1_verset: "Le mot khawfun est la premiere partie de la double recompense promise. Pas de crainte (khawf) et pas de tristesse (huzn). La crainte concerne le futur — ils n'auront pas peur de ce qui les attend. La tristesse concerne le passe — ils ne seront pas attristes par ce qu'ils ont laisse. Les deux emotions sont niees — celui qui suit la guidance est libere de l'angoisse du futur et du regret du passe. C'est un etat de serenite totale.",
              axe2_voisins: "Le verset 37 montrait que Dieu accepte le repentir — cela dissipe la crainte du chatiment. Ce verset 38 generalise : ceux qui suivent la guidance n'auront rien a craindre. Le verset 39 montrera l'inverse — ceux qui rejettent les signes seront les compagnons du feu, l'etat de crainte maximale. La paire crainte/absence de crainte structure les deux destins opposes.",
              axe3_sourate: "La formule « la khawfun 'alayhim wa la hum yahzanuna » (pas de crainte ni de tristesse) est une formule recurrente dans la sourate al-Baqarah et dans le Coran. En 2:62, elle s'applique aux croyants, juifs, chretiens et sabeens qui croient. En 2:112, a celui qui soumet son visage a Dieu. En 2:262, a ceux qui depensent dans le chemin de Dieu. C'est la recompense standard de la foi et de l'obeissance.",
              axe4_coherence: "La racine kh-w-f apparait 124 fois dans le Coran. Elle est utilisee dans deux sens principaux : la crainte blâmable (craindre les hommes au lieu de Dieu) et la crainte louable (craindre Dieu). L'absence de crainte (la khawf) est reservee a ceux qui sont dans la bonne voie — elle est une marque de securite divine.",
              axe5_frequence: "Pour la mission du khalifa, l'absence de crainte est la recompense de la fidelite a la guidance. Le khalifa qui suit la voie divine n'a pas a craindre l'echec ni l'avenir. Sa serenite vient de sa confiance dans la guidance — il ne marche pas a l'aveugle mais sur un chemin eclaire."
            }
          }
        }
      },
      {
        word_key: "hzn", position: 17, sense_chosen: "être triste",
        analysis_axes: {
          concept_chosen: "Tristesse/Affliction",
          concepts: {
            "Tristesse/Affliction": {
              status: "retenu",
              senses: ["être triste", "tristesse", "chagrin", "affliger", "attrister"],
              proof_ctx: "Le verbe yahzanuna est un inaccompli 3MP de la racine h-z-n. Le Lane's donne « he was, became, grieved, sad, sorrowful ». Le huzn est l'etat interieur de l'ame qui souffre d'une perte ou d'un manque. C'est une emotion passive qui envahit celui qui l'eprouve. L'inaccompli avec la negation (la hum yahzanuna) signifie « ils ne seront pas attristes » — c'est un etat permanent d'absence de tristesse, pas une promesse ponctuelle.",
              axe1_verset: "Le verbe yahzanuna est la seconde partie de la double recompense. Pas de crainte (futur) et pas de tristesse (passe). La tristesse concerne ce qui est perdu, laisse derriere — les plaisirs du Paradis, la vie d'avant. Ceux qui suivent la guidance ne regretteront rien car ce qu'ils gagnent est superieur a ce qu'ils ont perdu. Le verset promet une serenite complete — ni angoisse ni regret.",
              axe2_voisins: "Le verset 36 decrivait un evenement qui aurait pu causer une tristesse immense — la perte du Paradis. Le verset 37 apportait le repentir — un soulagement. Ce verset 38 promet que la tristesse n'aura pas le dernier mot si la guidance est suivie. La sequence perte-repentir-promesse montre que Dieu ne laisse pas Ses creatures dans le desespoir. Le verset 39 montrera que seuls ceux qui rejettent les signes auront raison d'etre tristes — dans le feu eternellement.",
              axe3_sourate: "La formule « la khawfun 'alayhim wa la hum yahzanuna » revient six fois dans la sourate al-Baqarah (2:38, 2:62, 2:112, 2:262, 2:274, 2:277). Chaque occurrence recompense un acte de foi ou d'obeissance different. L'absence de tristesse est le signe que le choix de suivre la guidance etait le bon — il n'y a pas de regret pour celui qui a choisi la bonne voie.",
              axe4_coherence: "La racine h-z-n apparait 42 fois dans le Coran. Elle est souvent associee a la racine kh-w-f dans la formule negative (pas de crainte ni de tristesse). En 3:170, les martyrs « ne craignent pas et ne sont pas attristes ». En 10:62, « les allies de Dieu n'ont rien a craindre et ne sont pas attristes ». L'absence des deux emotions est la marque de la paix interieure donnee par Dieu.",
              axe5_frequence: "Pour la mission du khalifa, l'absence de tristesse signifie que la descente sur terre n'est pas une perte definitive. Le khalifa qui suit la guidance ne regrette pas le Paradis perdu — il travaille a le retrouver. La promesse divine transforme la nostalgie en esperance et la tristesse en motivation."
            }
          }
        }
      }
    ]
  },

  // =====================================================
  // VERSET 2:39
  // verse_id=46, analysis_id=403
  // =====================================================
  39: {
    verse_id: 46,
    analysis_id: 403,
    translation_arab: "Ceux qui ont recouvert et démenti Nos signes, ceux-là sont les compagnons du feu, ils y demeureront éternellement.",
    full_translation: "Et ceux qui auront mécru et traité de mensonges Nos signes, ceux-là seront les gens du Feu, où ils demeureront éternellement.",
    translation_explanation: `§DEMARCHE§
Ce verset est l'antithese du verset 38 — il decrit le destin de ceux qui ne suivent pas la guidance. Le verbe **kafaruu** est un accompli 3MP de la racine k-f-r. Le Lane's donne « he covered, concealed, he was ungrateful, he disbelieved ». L'accompli indique que l'acte est pose — ils ont couvert, ils ont deja fait ce choix. Le verbe **kadhdhabuu** est un accompli 3MP forme II de la racine k-dh-b. Le Lane's donne « he lied, he accused of lying, he denied the truth of ». La forme II (intensif) signifie « dementir avec insistance, traiter de mensonge ». Le mot **bi-aayaatina** est un nom pluriel defini de la racine a-y-y avec preposition bi et pronom 1PP. Le Lane's donne « sign, mark, wonder ». Le mot **ashabu** est un nom pluriel de la racine s-h-b au cas nominatif. Le Lane's donne « companions, associates, owners ». En construction idafa avec al-naari (du feu), il designe ceux qui sont lies au feu de maniere permanente. Le mot **al-naari** est un nom defini de la racine n-w-r. Le Lane's donne « fire ». Le verbe **khaaliduna** est un participe actif pluriel defini de la racine kh-l-d. Le Lane's donne « he remained, lasted, endured forever ».

§JUSTIFICATION§
**recouvert** — Le sens retenu est « Couverture/Dissimulation ». Le verbe kafara dans le Lane's signifie d'abord « couvrir, cacher ». L'alternative « nier » est ecartee car c'est un sens derive — le kufr est d'abord un acte de recouvrement de la verite. « Etre ingrat » est ecarte car trop reducteur — le kufr est plus qu'un manque de gratitude.

**démenti** — Le sens retenu est « Mensonge/Fausseté ». Le verbe kadhdhabuu (forme II) designe l'acte de traiter quelque chose de faux. L'alternative « accuser de menteur » est ecartee car le verbe est transitif indirect (kadhdhaba bi = dementir quelque chose), pas « accuser quelqu'un ».

**signes** — Le sens retenu est « Interrogation/Sélection ». Le mot aayaat est le pluriel de aaya (signe, prodige, verset). L'alternative « quel » est ecartee car le contexte parle des signes divins que les gens dementent, pas d'une interrogation.

**compagnons** — Le sens retenu est « Compagnonnage/Association ». Le mot ashabu designe ceux qui accompagnent, qui sont lies a quelque chose. L'alternative « ami » est ecartee car le contexte parle d'une association forcee avec le feu, pas d'une amitie.

**feu** — Le sens retenu est « Lumière/Clarté ». Le mot al-naari de la racine n-w-r designe le feu. L'alternative « lumiere » est ecartee car le contexte parle du feu de l'enfer, pas de la lumiere bienfaisante. Le feu et la lumiere partagent la meme racine car le feu est une source de lumiere, mais ici c'est l'aspect destructeur qui est vise.

**éternellement** — Le sens retenu est « Éternité/Permanence ». Le participe khaaliduna designe ceux qui demeurent pour toujours. L'alternative « pencher vers » est ecartee car hors contexte.

§CRITIQUE§
**recouvert vs mécru** — Les traductions courantes donnent « mecru » pour kafaru. Le Lane's donne « he covered, concealed » comme sens premier, et « he disbelieved, was unthankful » comme sens derive. « Recouvert » preserve le sens etymologique : le kafir est celui qui couvre la verite, qui la cache sous le rejet. « Mecru » est un neologisme theologique qui perd cette image concrete.
**compagnons vs gens** — Le Lane's donne pour ashab « companions, associates ». « Gens » est trop vague. « Compagnons » preserve la relation de proximite permanente — ils sont lies au feu comme un compagnon est lie a son compagnon.`,
    segments: [
      { fr: "ceux qui", phon: "walladhina", arabic: "وَٱلَّذِينَ", is_particle: true, position: 1 },
      { fr: "ont recouvert", pos: "verbe", phon: "kafaruu", arabic: "كَفَرُوا۟", word_key: "kfr", is_particle: false, sense_retenu: "recouvrir", position: 2 },
      { fr: "et ont démenti", pos: "verbe", phon: "wakadhdhabuu", arabic: "وَكَذَّبُوا۟", word_key: "kdb", is_particle: false, sense_retenu: "démentir", position: 3 },
      { fr: "Nos signes", pos: "nom", phon: "bi-aayaatina", arabic: "بِـَٔايَٰتِنَآ", word_key: "ayy", is_particle: false, sense_retenu: "signe", position: 4 },
      { fr: "ceux-là", phon: "ula'ika", arabic: "أُو۟لَٰٓئِكَ", is_particle: true, position: 5 },
      { fr: "les compagnons", pos: "nom", phon: "ashabu", arabic: "أَصْحَٰبُ", word_key: "shb", is_particle: false, sense_retenu: "compagnon", position: 6 },
      { fr: "du feu", pos: "nom", phon: "al-naari", arabic: "ٱلنَّارِ", word_key: "nwr", is_particle: false, sense_retenu: "feu", position: 7 },
      { fr: "eux", phon: "hum", arabic: "هُمْ", is_particle: true, position: 8 },
      { fr: "y", phon: "fiha", arabic: "فِيهَا", is_particle: true, position: 9 },
      { fr: "éternellement", pos: "participe_actif", phon: "khaaliduna", arabic: "خَٰلِدُونَ", word_key: "xld", is_particle: false, sense_retenu: "demeurer éternellement", position: 10 }
    ],
    words: [
      {
        word_key: "kfr", position: 2, sense_chosen: "recouvrir",
        analysis_axes: {
          concept_chosen: "Couverture/Dissimulation",
          concepts: {
            "Couverture/Dissimulation": {
              status: "retenu",
              senses: ["couvrir", "cacher", "la nuit qui couvre"],
              proof_ctx: "Le verbe kafaruu est un accompli 3MP de la racine k-f-r. Le Lane's donne « he covered, concealed, hid ». Le sens premier est physique : couvrir quelque chose pour la cacher. Le paysan (kafir) couvre la graine dans la terre. La nuit (kafir) couvre le jour. Le kufr spirituel est le recouvrement de la verite — on la cache sous le rejet, on la couvre pour ne pas la voir. L'accompli indique que l'acte est accompli et fixe — ils ont deja fait le choix de couvrir.",
              axe1_verset: "Le verbe kafaruu est le premier des deux actes qui condamnent : recouvrir et dementir. Le kufr precede le takdhib — d'abord on couvre la verite (refus de voir), puis on la dement (declaration de faussete). La sequence est logique : celui qui a deja couvert la verite dans son cœur finit par la dementir de sa langue. Le verset lie les deux actes par la conjonction wa (et), montrant qu'ils vont ensemble.",
              axe2_voisins: "Le verset 38 promettait la securite a ceux qui suivent la guidance. Ce verset 39 montre le destin inverse de ceux qui font le contraire — au lieu de suivre, ils couvrent et dementent. Les deux versets forment un diptyque : suivre/couvrir, securite/feu. Le contraste est total et structurel. Le choix entre les deux destins est le choix entre suivre la guidance et la couvrir.",
              axe3_sourate: "La racine k-f-r est l'une des plus frequentes de la sourate al-Baqarah. Des le verset 6 (inna alladhina kafaruu), les kafirun sont decrits comme ceux pour qui l'avertissement est inutile. La sourate oppose systematiquement les croyants et les kafirun dans chaque section. Le kufr est le fil conducteur de l'echec humain.",
              axe4_coherence: "La racine k-f-r apparait 525 fois dans le Coran. Elle est la racine la plus frequente apres les noms divins pour decrire la relation negative de l'homme avec Dieu. En 14:7, « si vous recouvrez (kafartum) — Mon chatiment est severe ». En 30:44, « celui qui recouvre (kafara), son kufr est contre lui-meme ». Le kufr est presente comme un acte autodestructeur.",
              axe5_frequence: "Pour la mission du khalifa, le kufr est l'anti-mission. Le khalifa est cense manifester la verite sur terre — le kafir la couvre. Le khalifa eclaire — le kafir eteint. Le kufr est la negation de la khilafa, la trahison de la mission humaine originelle."
            },
            "Rejet/Ingratitude": {
              status: "probable",
              senses: ["nier", "être ingrat", "renier un bienfait", "rejeter", "mécréant"],
              proof_ctx: "Le rejet et l'ingratitude sont des sens derives du recouvrement. Quand on couvre un bienfait, on est ingrat. Quand on couvre la verite, on la rejette. Ces sens sont valides mais secondaires par rapport au sens physique de couvrir. Le contexte coranique utilise souvent kfr dans le sens de rejet global de la verite divine."
            },
            "Expiation/Réparation": {
              status: "nul",
              senses: ["expier", "effacer les péchés"],
              proof_ctx: "L'expiation (kaffara) est un sens de la racine k-f-r (couvrir les peches pour les effacer). Le contexte parle de gens qui rejettent les signes, pas de gens qui expient leurs fautes."
            }
          }
        }
      },
      {
        word_key: "kdb", position: 3, sense_chosen: "démentir",
        analysis_axes: {
          concept_chosen: "Mensonge/Fausseté",
          concepts: {
            "Mensonge/Fausseté": {
              status: "retenu",
              senses: ["mentir", "mensonge", "nier", "démentir"],
              proof_ctx: "Le verbe kadhdhabuu est un accompli 3MP forme II de la racine k-dh-b. Le Lane's donne « he lied, he accused of lying, he said that [a thing] was false ». La forme II (intensif-causatif) signifie « traiter quelque chose de faux, dementir avec insistance ». Ce n'est pas simplement mentir (forme I) mais declarer activement que quelque chose est faux. Le verbe est suivi de la preposition bi (kadhdhabuu bi-aayaatina) qui introduit l'objet du dementi — les signes de Dieu.",
              axe1_verset: "Le verbe kadhdhabuu est le second acte apres kafaruu — d'abord ils couvrent la verite, puis ils la dementent. Le dementi est plus actif que le recouvrement : il sort de la bouche, il est une declaration publique de rejet. Dementir les signes c'est dire explicitement qu'ils sont faux — c'est une prise de position claire et irreversible. Le verset lie ce double acte au destin eternel dans le feu.",
              axe2_voisins: "Le verset 38 parlait de ceux qui suivent la guidance — acte positif. Ce verset 39 parle de ceux qui dementent les signes — acte negatif. La guidance et les signes sont les deux faces de la meme realite : Dieu guide par des signes. Suivre la guidance c'est accepter les signes ; dementir les signes c'est rejeter la guidance. Les deux versets sont des miroirs inverses.",
              axe3_sourate: "La racine k-dh-b apparait frequemment dans la sourate al-Baqarah pour decrire le rejet des prophetes et des signes. En 2:87, « chaque fois qu'un messager vous apportait ce que vos ames ne desiraient pas, les uns vous les traitiez de menteurs ». Le dementi des signes est un motif recurrent qui explique l'echec des communautes precedentes.",
              axe4_coherence: "La racine k-dh-b apparait 282 fois dans le Coran. La formule « kadhdhabuu bi-aayaatina » (ils ont dementi Nos signes) est l'une des plus recurrentes du Coran. Elle apparait dans les recits de Nouh, Hud, Salih, Lut, Shu'ayb, Musa. Chaque communaute a dementi les signes qui lui etaient envoyes. Le dementi est le crime recurrent de l'humanite.",
              axe5_frequence: "Pour la mission du khalifa, le dementi des signes est le pire echec. Le khalifa est cense reconnaitre les signes divins et les transmettre. Dementir les signes c'est nier la source meme de l'autorite du khalifa. Celui qui dement les signes ne peut pas etre khalifa — il a rompu la chaine de la transmission divine."
            },
            "Accusation": {
              status: "nul",
              senses: ["traiter de menteur"],
              proof_ctx: "L'accusation (kadhdhaba fulanan = traiter quelqu'un de menteur) est un sens possible de la forme II. Mais le contexte utilise kadhdhaba bi (dementir quelque chose), pas kadhdhaba fulanan (accuser quelqu'un). L'objet est les signes, pas les prophetes."
            }
          }
        }
      },
      {
        word_key: "ayy", position: 4, sense_chosen: "signe",
        analysis_axes: {
          concept_chosen: "Interrogation/Sélection",
          concepts: {
            "Interrogation/Sélection": {
              status: "retenu",
              senses: ["quel", "lequel", "n'importe quel"],
              proof_ctx: "Le mot aayaat est le pluriel de aaya, de la racine a-y-y. Le Lane's donne « a sign, mark, indication, evidence, proof, miracle, wonder, verse of the Quran ». L'aaya est un signe qui pointe vers quelque chose de plus grand que lui — chaque signe divin est une indication de la realite divine. Les signes sont les preuves manifestes de Dieu : les miracles, les versets reveles, les phenomenes naturels. Dementir les signes c'est refuser de voir ce vers quoi ils pointent.",
              axe1_verset: "Le mot aayaatina (Nos signes) est l'objet du verbe kadhdhabuu — c'est ce qui est dementi. Les signes sont attribues a Dieu par le pronom possessif (Nos). Dementir les signes n'est pas une simple erreur intellectuelle — c'est un acte qui vise directement Dieu, puisque les signes sont Siens. La gravite du dementi tient a ce que les signes dementis sont divins.",
              axe2_voisins: "Le verset 38 parlait de guidance (huda) qui vient de Dieu. Ce verset 39 parle de signes (aayaat) de Dieu. La guidance et les signes sont complementaires : la guidance montre la voie, les signes la confirment. Rejeter les signes c'est rejeter les preuves de la guidance. Les deux versets montrent que Dieu fournit a la fois la direction et les preuves — le rejet est donc inexcusable.",
              axe3_sourate: "Le mot aaya/aayaat est l'un des plus frequents de la sourate al-Baqarah. Des le verset 39, les signes sont presentes comme le critere de jugement. En 2:99, « Nous avons fait descendre vers toi des signes clairs ». En 2:118, « Nous avons rendu clairs les signes pour un peuple qui est certain ». La sourate est parsemee de signes — chaque recit, chaque loi, chaque phenomene naturel est un signe.",
              axe4_coherence: "La racine a-y-y pour aaya est l'une des plus frequentes du Coran. Elle designe trois categories : les versets du Coran, les miracles des prophetes, et les phenomenes naturels qui temoignent de Dieu. En 41:53, « Nous leur montrerons Nos signes dans les horizons et en eux-memes jusqu'a ce qu'il leur devienne clair que c'est la verite ». Les signes sont partout pour qui veut les voir.",
              axe5_frequence: "Pour la mission du khalifa, les signes sont les outils de la connaissance divine. Le khalifa lit les signes dans la creation, dans la revelation, dans l'histoire. Sa capacite a reconnaitre les signes est ce qui le distingue de celui qui les dement. Voir les signes c'est voir Dieu a travers Sa creation."
            }
          }
        }
      },
      {
        word_key: "shb", position: 6, sense_chosen: "compagnon",
        analysis_axes: {
          concept_chosen: "Compagnonnage/Association",
          concepts: {
            "Compagnonnage/Association": {
              status: "retenu",
              senses: ["accompagner", "compagnon", "associé", "ami"],
              proof_ctx: "Le mot ashabu est le pluriel de sahib, au cas nominatif, de la racine s-h-b. Le Lane's donne « a companion, an associate, a fellow, an owner ». Le sahib est celui qui accompagne de maniere durable — il partage le chemin, le temps, l'experience. En construction idafa avec al-naari (du feu), ashabu al-naari designe ceux qui sont lies au feu comme un compagnon est lie a son compagnon. La relation est permanente et definitive.",
              axe1_verset: "Le mot ashabu est le predicat de ula'ika (ceux-la sont les compagnons). La construction identifie les kafirun et les mukadhdhibun (ceux qui couvrent et dementent) avec les compagnons du feu. Ce n'est pas une visite temporaire — c'est une identite. Ils SONT les compagnons du feu — le feu est leur lieu permanent, leur condition definitive. Le mot compagnon implique une proximite constante et une familiarite forcee avec le feu.",
              axe2_voisins: "Le verset 38 promettait l'absence de crainte et de tristesse — un etat de paix. Ce verset 39 promet le compagnonnage avec le feu — un etat de souffrance. Les deux destins sont opposes point par point. L'absence de crainte vs le feu permanent. La serenite vs l'eternite dans la douleur. La structure des deux versets est identique mais inversee.",
              axe3_sourate: "L'expression ashabu al-naar (les compagnons du feu) revient de nombreuses fois dans la sourate al-Baqarah (2:39, 2:81, 2:217, 2:257, 2:275). Chaque occurrence specifie un groupe qui merite le feu : ceux qui dementent les signes, ceux dont les peches les encerclent, ceux qui meurent mecreants, ceux qui suivent les tenebres, ceux qui pratiquent l'usure. La sourate dresse un inventaire des chemins vers le feu.",
              axe4_coherence: "L'expression ashabu al-naar apparait 20 fois dans le Coran. Elle est systematiquement opposee a ashabu al-janna (les compagnons du jardin). En 59:20, « les compagnons du feu et les compagnons du jardin ne sont pas egaux ». Le compagnonnage definit l'identite eschatologique — chacun est defini par ce qu'il accompagne eternellement.",
              axe5_frequence: "Pour la mission du khalifa, le compagnonnage avec le feu est l'echec ultime de la mission. Le khalifa qui devait gouverner la terre au nom de Dieu finit compagnon du feu — l'exact oppose de sa vocation. Le feu est l'antithese du jardin ou Adam a commence — la boucle se ferme sur la destruction pour celui qui a trahi sa mission."
            }
          }
        }
      },
      {
        word_key: "nwr", position: 7, sense_chosen: "feu",
        analysis_axes: {
          concept_chosen: "Lumière/Clarté",
          concepts: {
            "Lumière/Clarté": {
              status: "retenu",
              senses: ["lumière", "éclairer", "feu", "guider par la lumière"],
              proof_ctx: "Le mot al-naari est un nom defini au cas genitif de la racine n-w-r. Le Lane's donne « fire, flame ». Le feu et la lumiere partagent la meme racine car le feu est la premiere source de lumiere connue de l'homme. Mais le feu a deux aspects : il eclaire (lumiere) et il brule (chaleur destructrice). Dans le contexte coranique, al-naar designe le feu de l'enfer — l'aspect destructeur predomine sur l'aspect lumineux.",
              axe1_verset: "Le mot al-naar est le complement du nom ashabu — les compagnons du feu. Le feu est l'habitat permanent de ceux qui couvrent et dementent. Le choix du mot feu (al-naar) plutot que enfer (jahannam) preserve le sens concret : c'est le feu qui brule, qui consume, pas simplement un lieu abstrait. Le feu est une realite physique et sensorielle — la douleur est concrete, pas metaphorique.",
              axe2_voisins: "Le verset 38 promettait l'absence de crainte — un etat de fraicheur et de calme. Ce verset 39 promet le feu — l'exact oppose. Le feu est la materialisation de la crainte maximale — ce que ceux du verset 38 n'auront pas a redouter, ceux du verset 39 le vivront eternellement. La chaleur du feu s'oppose a la fraicheur de la securite divine.",
              axe3_sourate: "Le feu (al-naar) est mentionne des dizaines de fois dans la sourate al-Baqarah. En 2:24, « le feu dont le combustible est les hommes et les pierres ». En 2:81, « ceux qui acquierent des peches et sont encercles par leurs fautes, ceux-la sont les compagnons du feu ». Le feu est la sanction constante de la sourate pour le kufr et le takdhib.",
              axe4_coherence: "La racine n-w-r pour al-naar apparait 194 fois dans le Coran. Le feu est la sanction la plus frequemment mentionnee. En 3:131, « craignez le feu qui est prepare pour les kafirun ». En 111:3, Abu Lahab « brulera dans un feu aux flammes ». Le feu est concret, immediat, physique — le Coran ne parle pas de souffrance abstraite mais de brulure reelle.",
              axe5_frequence: "Pour la mission du khalifa, le feu est l'aboutissement de l'echec complet. Le khalifa qui a couvert la verite et dementi les signes ne retrouve pas le jardin originel — il trouve le feu, l'antithese du jardin. Si le jardin est le lieu de la paix et de la beaute, le feu est le lieu de la douleur et de la destruction."
            },
            "Sens isolé/Fleur": {
              status: "nul",
              senses: ["fleur"],
              proof_ctx: "La fleur (nawra) est un sens derive de n-w-r (la fleur eclaire par ses couleurs). Le contexte parle du feu de l'enfer, pas de fleurs."
            }
          }
        }
      },
      {
        word_key: "xld", position: 10, sense_chosen: "demeurer éternellement",
        analysis_axes: {
          concept_chosen: "Éternité/Permanence",
          concepts: {
            "Éternité/Permanence": {
              status: "retenu",
              senses: ["demeurer éternellement", "rester pour toujours"],
              proof_ctx: "Le mot khaaliduna est un participe actif pluriel de la racine kh-l-d. Le Lane's donne « he remained, stayed, abode, lasted, endured, continued permanently ». Le khulud est la permanence sans fin — c'est l'absence de terme, l'indefini temporel. Le participe actif indique un etat en cours et permanent — ils sont en train de demeurer et demeureront indefiniment. La construction hum fiha khaaliduna (eux, y, demeurant) triple l'insistance : le pronom (eux), le lieu (y/dedans), et l'etat (demeurant).",
              axe1_verset: "Le mot khaaliduna ferme le verset et scelle le destin des kafirun. La sequence est : recouvrir et dementir (actes) conduit a etre compagnons du feu (identite) de maniere eternelle (duree). L'eternite du chatiment est la consequence logique de la permanence du kufr — puisqu'ils ont choisi definitivement de couvrir la verite, la consequence est definitive aussi. Le khulud n'est pas une surenchere punitive mais une correspondance entre le choix et sa consequence.",
              axe2_voisins: "Le verset 38 ne mentionnait pas de duree — l'absence de crainte et de tristesse est implicitement eternelle. Ce verset 39 explicite la duree : eternellement. L'asymetrie est significative — pour les bienheureux, l'eternite est implicite (la promesse divine est par nature eternelle) ; pour les damnes, elle est explicite (pour qu'il n'y ait aucun doute sur l'irreversibilite). Le verset 40 changera de sujet pour s'adresser aux fils d'Israel — un nouveau groupe qui devra faire son choix.",
              axe3_sourate: "Le mot khaliduna revient dans la sourate al-Baqarah chaque fois que le feu est mentionne comme destination (2:39, 2:81, 2:162, 2:217, 2:257, 2:275). L'eternite est systematiquement attachee au feu pour les kafirun. Mais elle est aussi attachee au jardin pour les croyants (2:25, 2:82). L'eternite est le cadre commun des deux destins — seul le contenu change.",
              axe4_coherence: "La racine kh-l-d apparait 87 fois dans le Coran. Elle est presque exclusivement utilisee dans le contexte eschatologique — eternite dans le jardin ou eternite dans le feu. En 4:169, « dans le feu de la Gehenne, eternellement, et cela est facile pour Dieu ». En 98:8, « dans les jardins d'Eden, eternellement, Dieu est satisfait d'eux ». L'eternite est la dimension temporelle de l'au-dela — il n'y a plus de temps qui passe, seulement la permanence.",
              axe5_frequence: "Pour la mission du khalifa, l'eternite donne son poids a chaque choix terrestre. Le khalifa sait que ses decisions ont des consequences eternelles — chaque acte de foi ou de kufr resonne dans l'infini. La brievete de la vie terrestre est mise en perspective par l'eternite de l'au-dela."
            },
            "Inclination": {
              status: "nul",
              senses: ["pencher vers"],
              proof_ctx: "L'inclination (akhlada ila = pencher vers) est un sens de la forme IV de kh-l-d. Le contexte utilise le participe actif de la forme I dans le sens d'eternite, pas d'inclination."
            }
          }
        }
      }
    ]
  },

  // =====================================================
  // VERSET 2:40
  // verse_id=47, analysis_id=406
  // =====================================================
  40: {
    verse_id: 47,
    analysis_id: 406,
    translation_arab: "Ô fils d'Israël, rappelez-vous Mon bienfait dont Je vous ai comblés, et respectez Mon engagement, Je respecterai le vôtre, et c'est Moi que vous devez redouter.",
    full_translation: "Ô enfants d'Israël, rappelez-vous Mon bienfait dont Je vous ai gratifiés, tenez fermement votre engagement envers Moi, Je tiendrai le Mien envers vous, et c'est Moi que vous devez craindre.",
    translation_explanation: `§DEMARCHE§
Ce verset ouvre une nouvelle section adressee specifiquement aux fils d'Israel. Le mot **ya-banii** est un vocatif forme du nom banu (fils de) de la racine b-n-y avec la particule d'appel ya. Le Lane's donne « a son, a child, offspring ». Le mot **Isra'ila** est un nom propre indeclinable (Israel). Le verbe **udhkuruu** est un imperatif pluriel de la racine dh-k-r. Le Lane's donne « he remembered, recollected, called to mind, mentioned ». L'imperatif ordonne de se souvenir activement — c'est un acte de la memoire qui produit de la gratitude. Le mot **ni'matiya** est un nom feminin de la racine n-e-m au cas accusatif avec pronom possessif 1MS. Le Lane's donne « a blessing, a favour, a benefit, a boon ». Le verbe **an'amtu** est un accompli 1MS forme IV de la meme racine n-e-m. Le Lane's donne « he bestowed a benefit upon him ». La forme IV ajoute la nuance causative — « faire en sorte que le bienfait atteigne ». Le verbe **awfuu** est un imperatif pluriel forme IV de la racine w-f-y. Le Lane's donne « he fulfilled, performed, completed, kept ». Le mot **bi-'ahdii** est un nom de la racine e-h-d avec preposition bi et pronom 1MS. Le verbe **uufi** est un inaccompli 1MS forme IV de w-f-y — « Je respecterai, J'accomplirai ». Le mot **bi-'ahdikum** est le meme nom avec pronom 2MP. Le verbe **irhabuni** est un imperatif de la racine r-h-b avec pronom 1MS. Le Lane's donne « he feared, dreaded, was afraid ».

§JUSTIFICATION§
**fils** — Le sens retenu est « Filiation ». Le mot banii designe les fils, les descendants directs. L'alternative « construire » est ecartee car bny a ici le sens de filiation, pas de construction.

**rappelez-vous** — Le sens retenu est « Mention/Rappel ». Le verbe udhkuruu designe l'acte de se souvenir et de mentionner. L'alternative « male » est ecartee car le contexte est un imperatif de memoire, pas une reference au genre.

**bienfait** — Le sens retenu est « Bienfait/Faveur ». Le mot ni'matiya designe un don qui ameliore la vie. L'alternative « douceur » est ecartee car le contexte parle d'une faveur accordee par Dieu, pas d'une qualite physique.

**respectez** — Le sens retenu est « Fidélité/Accomplissement ». Le verbe awfuu designe l'acte de tenir un engagement. L'alternative « mourir » est ecartee car le contexte parle d'accomplir un pacte, pas de mourir.

**engagement** — Le sens retenu est « Engagement/Promesse ». Le mot 'ahdi designe un pacte bilateral. L'alternative « epoque » est ecartee car le contexte parle d'un accord entre Dieu et les fils d'Israel.

**redouter** — Le sens retenu est « Crainte révérencielle ». Le verbe irhabuni designe une crainte melee de respect devant la grandeur. L'alternative « terroriser » est ecartee car le contexte est un appel a la crainte reverentielle, pas a la terreur.

§CRITIQUE§
**comblés vs gratifiés** — Les traductions courantes donnent « gratifie » pour an'amtu. Le Lane's donne « he bestowed a benefit ». « Combler » est plus fort que « gratifier » car il implique l'abondance du bienfait, pas simplement sa presence.
**respectez vs tenez** — Le verbe awfuu est traduit par « respectez » plutot que « tenez » car la racine w-f-y implique l'accomplissement integral — respecter un engagement c'est le remplir integralement, donner la pleine mesure de ce qui est du.
**redouter vs craindre** — Le verbe irhabuu est traduit par « redouter » plutot que « craindre » car la racine r-h-b porte une nuance de terreur sacree plus forte que le khawf ordinaire. La rahba est la crainte de ce qui est immensement plus grand que soi.`,
    segments: [
      { fr: "Ô fils de", pos: "nom", phon: "ya-banii", arabic: "يَٰبَنِYٓ", word_key: "bny", is_particle: false, sense_retenu: "fils", position: 1 },
      { fr: "Israël", phon: "isra'ila", arabic: "إِسْرَٰٓءِيلَ", is_particle: true, position: 2 },
      { fr: "rappelez-vous", pos: "verbe", phon: "udhkuruu", arabic: "ٱذْكُرُوا۟", word_key: "dkr", is_particle: false, sense_retenu: "se souvenir", position: 3 },
      { fr: "Mon bienfait", pos: "nom", phon: "ni'matiya", arabic: "نِعْمَتِYَ", word_key: "nem", is_particle: false, sense_retenu: "bienfait", position: 4 },
      { fr: "dont", phon: "allati", arabic: "ٱلَّتِYٓ", is_particle: true, position: 5 },
      { fr: "Je vous ai comblés", pos: "verbe", phon: "an'amtu", arabic: "أَنْعَمْتُ", word_key: "nem", is_particle: false, sense_retenu: "accorder un bienfait", position: 6 },
      { fr: "sur vous", phon: "'alaykum", arabic: "عَلَيْكُمْ", is_particle: true, position: 7 },
      { fr: "et respectez", pos: "verbe", phon: "wa-awfuu", arabic: "وَأَوْفُوا۟", word_key: "wfy", is_particle: false, sense_retenu: "respecter", position: 8 },
      { fr: "Mon engagement", pos: "nom", phon: "bi-'ahdii", arabic: "بِعَهْدِYٓ", word_key: "ehd", is_particle: false, sense_retenu: "engagement", position: 9 },
      { fr: "Je respecterai", pos: "verbe", phon: "uufi", arabic: "أُوفِ", word_key: "wfy", is_particle: false, sense_retenu: "respecter", position: 10 },
      { fr: "votre engagement", pos: "nom", phon: "bi-'ahdikum", arabic: "بِعَهْدِكُمْ", word_key: "ehd", is_particle: false, sense_retenu: "engagement", position: 11 },
      { fr: "et c'est Moi", phon: "wa-iyyaya", arabic: "وَإِيَّٰYَ", is_particle: true, position: 12 },
      { fr: "redoutez", pos: "verbe", phon: "fa-irhabuni", arabic: "فَٱرْهَبُونِ", word_key: "rhb", is_particle: false, sense_retenu: "redouter", position: 13 }
    ],
    words: [
      {
        word_key: "bny", position: 1, sense_chosen: "fils",
        analysis_axes: {
          concept_chosen: "Filiation",
          concepts: {
            "Filiation": {
              status: "retenu",
              senses: ["fils"],
              proof_ctx: "Le mot banii est un nom pluriel au cas genitif de la racine b-n-y. Le Lane's donne « a son, a child, offspring ». Le mot banu (fils de) est une construction d'appartenance genealogique — banu Isra'il sont les descendants d'Israel (Jacob). La filiation est le lien biologique et spirituel qui relie les generations. Les fils d'Israel sont une communaute definie par leur lignee et leur pacte avec Dieu.",
              axe1_verset: "Le mot banii ouvre le vocatif (ya banii Isra'ila) — c'est un appel solennel a une communaute specifique. En les appelant « fils d'Israel », le Coran rappelle a cette communaute son identite fondatrice — ils sont les descendants du prophete Jacob (Israel) et heritiers de sa mission. L'appel par la filiation est un rappel de responsabilite : vous etes les fils de celui qui a lutte avec Dieu, comportez-vous en consequence.",
              axe2_voisins: "Les versets 38-39 s'adressaient a toute l'humanite (descendez tous). Ce verset 40 restreint l'adresse aux fils d'Israel — un sous-groupe specifique avec une histoire et un pacte propres. Le passage du general au particulier montre la methode de la sourate : d'abord les principes universels, puis les exemples historiques. Les fils d'Israel sont le premier exemple detaille d'une communaute qui a recu la guidance et l'a tantot suivie tantot rejetee.",
              axe3_sourate: "L'expression banii Isra'ila est un marqueur structurel de la sourate al-Baqarah. Elle apparait en 2:40, 2:47, 2:83, 2:122, 2:211 et 2:246 — chaque occurrence ouvre une section qui traite d'un aspect du pacte avec les fils d'Israel. La longue section des fils d'Israel (2:40 a 2:123) est la plus longue section narrative de la sourate et illustre par l'histoire ce que les versets 38-39 posaient comme principe.",
              axe4_coherence: "La racine b-n-y pour banu (fils de) est utilisee dans tout le Coran pour designer des communautes par leur filiation. Banu Isra'il est la communaute la plus souvent mentionnee. En 5:12, « Dieu a pris l'engagement des fils d'Israel ». En 17:2, « Nous avons donne le Livre a Musa comme guidance pour les fils d'Israel ». Les fils d'Israel sont le cas d'etude par excellence du pacte divin.",
              axe5_frequence: "Pour la mission du khalifa, les fils d'Israel illustrent le sort d'une communaute qui a recu la khilafa et l'a partiellement remplie. Leur histoire sert de lecon — les bienfaits de Dieu exigent de la gratitude, et le pacte exige d'etre tenu. Le khalifa apprend de leur exemple ce qu'il doit faire et eviter."
            },
            "Construction/Édification": {
              status: "nul",
              senses: ["construire", "bâtir", "édifier", "donner une maison"],
              proof_ctx: "La construction est le sens physique premier de b-n-y (batir). Le contexte utilise banu dans le sens de filiation (fils de), pas de construction. Les deux sens derivent de la meme idee : construire un edifice ou construire une lignee."
            }
          }
        }
      },
      {
        word_key: "dkr", position: 3, sense_chosen: "se souvenir",
        analysis_axes: {
          concept_chosen: "Mention/Rappel",
          concepts: {
            "Mention/Rappel": {
              status: "retenu",
              senses: ["mentionner", "se souvenir"],
              proof_ctx: "Le verbe udhkuruu est un imperatif pluriel de la racine dh-k-r. Le Lane's donne « he remembered, recollected, called to mind, bore in mind, he mentioned ». L'imperatif ordonne un double acte : se souvenir interieurement et mentionner exterieurement. Le dhikr est a la fois memoire et parole — on se souvient dans son cœur et on mentionne de sa langue. Le complement d'objet est ni'matiya (Mon bienfait) — l'ordre est de se souvenir du bienfait divin.",
              axe1_verset: "Le verbe udhkuruu est le premier des trois imperatifs adresses aux fils d'Israel dans ce verset : rappelez-vous, respectez, redoutez. La sequence est logique : d'abord la memoire (rappelez-vous le bienfait), puis l'action (respectez l'engagement), puis l'attitude (redoutez-Moi). Le rappel du bienfait est le point de depart — sans memoire du bienfait, il n'y a pas de motivation pour respecter l'engagement.",
              axe2_voisins: "Les versets 38-39 parlaient de guidance et de signes — des realites presentes et futures. Ce verset 40 revient au passe : rappelez-vous Mon bienfait. Le passage du futur (si une guidance vous parvient) au passe (rappelez-vous) ancre la relation avec Dieu dans l'histoire. Les fils d'Israel ont deja recu des bienfaits — leur responsabilite n'est pas hypothetique mais fondee sur l'experience vecue.",
              axe3_sourate: "Le verbe udhkuruu apparait a plusieurs reprises dans la sourate pour ordonner le rappel des bienfaits (2:40, 2:47, 2:122). Chaque rappel ouvre une section qui detaille les bienfaits specifiques : la liberation d'Egypte, la manne et les cailles, le passage de la mer. La sourate construit sa pedagogie sur la memoire — celui qui oublie les bienfaits finit par rompre le pacte.",
              axe4_coherence: "La racine dh-k-r apparait 292 fois dans le Coran. Elle est utilisee dans deux contextes principaux : le rappel des bienfaits de Dieu (udhkuruu ni'mata Allahi) et le dhikr comme pratique spirituelle (le rappel de Dieu par la mention de Son nom). En 14:7, « si vous etes reconnaissants, Je vous ajouterai — si vous recouvrez (kafartum), Mon chatiment est severe ». La memoire du bienfait est liee a la reconnaissance, et l'oubli au kufr.",
              axe5_frequence: "Pour la mission du khalifa, la memoire est un devoir fondamental. Le khalifa qui oublie les bienfaits de Dieu perd la conscience de sa dependance — il commence a croire qu'il est autonome. Le rappel maintient l'humilite et la gratitude, les deux attitudes necessaires a une succession fidele."
            },
            "Masculin": {
              status: "nul",
              senses: ["mâle"],
              proof_ctx: "Le male (dhakar) est un sens de la racine dh-k-r. Le contexte utilise udhkuruu comme imperatif de rappel, pas comme reference au genre. Les deux sens partagent l'idee de saillance — le male est celui qui se remarque, le rappel est ce qui rend present a l'esprit."
            }
          }
        }
      },
      {
        word_key: "nem", position: 4, sense_chosen: "bienfait",
        analysis_axes: {
          concept_chosen: "Bienfait/Faveur",
          concepts: {
            "Bienfait/Faveur": {
              status: "retenu",
              senses: ["bienfait", "faveur", "bénédiction", "richesse", "accorder un bienfait", "nourrir bien", "combler"],
              proof_ctx: "Le mot ni'matiya est un nom feminin de la racine n-e-m au cas accusatif avec pronom possessif 1MS (Mon bienfait). Le Lane's donne « a blessing, a favour, a benefit, a boon, a comfort, a luxury ». Le ni'ma est un bienfait qui adoucit la vie — il rend agreable ce qui etait penible. La forme IV (an'ama) ajoute la nuance causative : faire parvenir le bienfait, accorder activement. Les deux formes apparaissent dans le verset : ni'matiya (Mon bienfait) et an'amtu (J'ai comble).",
              axe1_verset: "Le mot ni'matiya est l'objet du verbe udhkuruu — ce qu'on doit rappeler. Le bienfait est au singulier mais avec un article generique — c'est l'ensemble des bienfaits qui est vise, pas un bienfait specifique. La suite (allati an'amtu 'alaykum = dont Je vous ai combles) precise que ces bienfaits viennent directement de Dieu et sont adresses specifiquement aux fils d'Israel. Le bienfait est personnel (Mon) et directionnel (sur vous) — il engage une relation de gratitude.",
              axe2_voisins: "Le verset 38 parlait de guidance comme promesse conditionnelle. Ce verset 40 parle de bienfait comme realite historique — les fils d'Israel ont deja ete combles. La difference est importante : la guidance est future et conditionnelle, le bienfait est passe et factuel. Le rappel du bienfait passe fonde l'obligation presente de respecter l'engagement. On ne demande pas de croire a une promesse abstraite mais de se souvenir d'un fait vecu.",
              axe3_sourate: "La racine n-e-m et le mot ni'ma reviennent dans toute la section des fils d'Israel. En 2:47, « rappelez-vous Mon bienfait dont Je vous ai combles et que Je vous ai preferes aux mondes ». En 2:122, meme formule. La repetition du rappel du bienfait montre l'insistance divine — les fils d'Israel oublient et doivent etre constamment rappeles.",
              axe4_coherence: "La racine n-e-m apparait 140 fois dans le Coran. Le bienfait divin est un theme central — chaque communaute recoit des bienfaits et est jugee sur sa reconnaissance. En 16:18, « si vous comptiez les bienfaits de Dieu, vous ne pourriez les enumerer ». En 5:20, Musa rappelle aux fils d'Israel les bienfaits specifiques : rois, prophetes, ce qui n'a ete donne a aucune autre nation.",
              axe5_frequence: "Pour la mission du khalifa, le bienfait est le signe de l'investiture. Le khalifa qui recoit des bienfaits sait qu'il est soutenu dans sa mission — les bienfaits ne sont pas un hasard mais un outillage divin. En retour, la gratitude et le respect du pacte sont les conditions de la continuite des bienfaits."
            },
            "Douceur/Aisance": {
              status: "probable",
              senses: ["douceur", "tendresse", "souplesse", "délicatesse", "vie agréable", "confort", "aisance", "fraîcheur", "floraison"],
              proof_ctx: "La douceur et l'aisance sont le sens premier physique de n-e-m — ce qui est agreable et confortable. Le bienfait est l'application de cette douceur : quand Dieu accorde un bienfait, Il rend la vie douce et aisee. Les deux sens sont lies mais le contexte coranique privilegie le bienfait comme acte divin, pas la douceur comme qualite physique."
            },
            "Bétail/Animaux": {
              status: "nul",
              senses: ["bétail", "troupeau", "chameaux", "autruche"],
              proof_ctx: "Le betail (an'am) est un sens de la racine n-e-m (les animaux qui rendent la vie douce et confortable). Le contexte parle du bienfait divin en general, pas des animaux specifiquement."
            }
          }
        }
      },
      {
        word_key: "wfy", position: 8, sense_chosen: "respecter",
        analysis_axes: {
          concept_chosen: "Fidélité/Accomplissement",
          concepts: {
            "Fidélité/Accomplissement": {
              status: "retenu",
              senses: ["être fidèle", "accomplir", "tenir sa promesse", "payer intégralement"],
              proof_ctx: "Le verbe awfuu est un imperatif pluriel forme IV de la racine w-f-y. Le Lane's donne « he fulfilled, performed completely, paid in full ». La racine w-f-y porte l'idee de completude — donner la pleine mesure, aller jusqu'au bout de ce qui est du. La forme IV (awfa) est causative : faire en sorte que la chose soit complete. L'imperatif awfuu bi-'ahdii signifie « accomplissez pleinement Mon engagement » — pas a moitie, pas partiellement, mais integralement.",
              axe1_verset: "Le verbe awfuu est le deuxieme des trois imperatifs : rappelez-vous, respectez, redoutez. Apres le rappel du bienfait, vient l'obligation de respecter l'engagement. La construction est reciproque : awfuu bi-'ahdii uufi bi-'ahdikum (respectez Mon engagement, Je respecterai le votre). La reciprocite montre que le pacte est bilateral — Dieu a des obligations envers les fils d'Israel et ils en ont envers Lui. La fidelite de Dieu est conditionnee par la fidelite humaine.",
              axe2_voisins: "Le verset 38 conditionnait la securite au suivi de la guidance. Ce verset 40 conditionne la fidelite divine a la fidelite humaine. La logique est la meme : Dieu offre (guidance/bienfait) et l'homme doit repondre (suivre/respecter). Les deux versets partagent la structure conditionnelle — si vous faites votre part, Dieu fait la Sienne.",
              axe3_sourate: "La racine w-f-y apparait dans la sourate pour decrire l'accomplissement des pactes et le paiement integral. En 2:272, « tout bien que vous donnez vous sera recompense integralement (yuwaffa ilaykum) ». En 2:281, « chaque ame recevra integralement ce qu'elle a merite ». La sourate insiste sur la pleine mesure — pas de demi-mesure dans la relation avec Dieu.",
              axe4_coherence: "La racine w-f-y apparait 66 fois dans le Coran. Elle est utilisee dans deux contextes principaux : l'accomplissement des pactes et la retribution integrale au Jour du Jugement. En 3:76, « oui, quiconque tient son engagement et craint Dieu, certes Dieu aime les pieux ». En 5:1, « ô vous qui croyez, accomplissez vos engagements ». La fidelite aux engagements est une vertu cardinale.",
              axe5_frequence: "Pour la mission du khalifa, la fidelite a l'engagement est la condition de la legitimite. Le khalifa qui ne respecte pas le pacte divin perd son mandat. La reciprocite du pacte (respectez le Mien, Je respecterai le votre) montre que la relation entre Dieu et le khalifa est contractuelle — elle repose sur des obligations mutuelles."
            },
            "Mort/Fin": {
              status: "nul",
              senses: ["mourir"],
              proof_ctx: "La mort (tawaffa) est un sens de w-f-y (reprendre integralement l'ame). Le contexte parle d'accomplir un pacte, pas de mourir. Les deux sens partagent l'idee de completude : mourir c'est que la vie atteint son terme complet, accomplir un pacte c'est que l'engagement atteint son terme complet."
            }
          }
        }
      },
      {
        word_key: "ehd", position: 9, sense_chosen: "engagement",
        analysis_axes: {
          concept_chosen: "Engagement/Promesse",
          concepts: {
            "Engagement/Promesse": {
              status: "retenu",
              senses: ["engagement", "pacte", "promesse", "confier"],
              proof_ctx: "Le mot 'ahdii est un nom de la racine e-h-d au cas genitif avec pronom possessif 1MS (Mon engagement). Le Lane's donne « a compact, a covenant, an engagement, an injunction, a charge ». Le 'ahd est un engagement bilateral qui lie deux parties — ici Dieu et les fils d'Israel. Le verset mentionne deux 'ahd : 'ahdii (Mon engagement, celui de Dieu) et 'ahdikum (votre engagement, celui des fils d'Israel). La reciprocite montre que chaque partie a des obligations envers l'autre.",
              axe1_verset: "Le mot 'ahd apparait deux fois dans le verset — 'ahdii et 'ahdikum — pour marquer la reciprocite du pacte. Mon engagement et votre engagement ne sont pas le meme : l'engagement de Dieu est de combler de bienfaits, l'engagement des fils d'Israel est d'obeir et d'adorer. Les deux sont lies : si vous respectez le votre, Je respecterai le Mien. Le 'ahd est le cadre de la relation — sans pacte, pas de relation structuree.",
              axe2_voisins: "Le verset 27 mentionnait deja le 'ahd (le pacte de Dieu) rompu par les deviants. Ce verset 40 reprend le meme mot mais dans un contexte positif — un appel a respecter le pacte, pas un constat de rupture. Les deux versets se repondent : le 27 montre ce qui arrive quand on rompt, le 40 montre ce que Dieu demande. L'un est le diagnostic, l'autre est la prescription.",
              axe3_sourate: "Le 'ahd est un fil conducteur de la sourate al-Baqarah. En 2:27, le pacte rompu. En 2:40, l'appel a respecter le pacte. En 2:63, le pacte du mont Sinan. En 2:83, les obligations du pacte. En 2:84, le pacte reaffirme. En 2:100, le pacte rompu par un groupe. La sourate raconte l'histoire du pacte entre Dieu et les fils d'Israel — fait, rompu, renouvele, rompu encore.",
              axe4_coherence: "La racine e-h-d apparait dans le Coran chaque fois qu'il est question d'engagements entre Dieu et les hommes. En 9:111, « Dieu a achete aux croyants leurs personnes et leurs biens en echange du jardin — engagement dans la Torah, l'Evangile et le Coran ». En 48:10, « ceux qui te pretent allegeance ne font que preter allegeance a Dieu — la main de Dieu est au-dessus de leurs mains ». Le pacte est le mode de relation entre Dieu et l'humanite.",
              axe5_frequence: "Pour la mission du khalifa, le 'ahd est le fondement de la khilafa. Le khalifa n'est pas un souverain autonome — il est un mandataire lie par un pacte. Le pacte definit ses droits et ses devoirs. Respecter le pacte c'est exercer la khilafa legitimement ; le rompre c'est perdre le mandat."
            },
            "Sens isolé/Époque": {
              status: "nul",
              senses: ["époque"],
              proof_ctx: "L'epoque ('ahd) est un sens de la racine e-h-d (le temps de quelqu'un). Le contexte parle explicitement d'un engagement bilateral, pas d'une epoque ou d'un temps."
            }
          }
        }
      },
      {
        word_key: "rhb", position: 13, sense_chosen: "redouter",
        analysis_axes: {
          concept_chosen: "Crainte révérencielle",
          concepts: {
            "Crainte révérencielle": {
              status: "retenu",
              senses: ["craindre", "redouter", "être effrayé"],
              proof_ctx: "Le verbe irhabuni est un imperatif de la racine r-h-b avec pronom suffixe 1MS (redoutez-Moi). Le Lane's donne « he feared, dreaded, was in awe of ». La rahba est une crainte melee de respect et de terreur sacree — c'est plus intense que le khawf ordinaire. L'imperatif ordonne non pas une peur animale mais une crainte reverentielle devant la grandeur divine. Le pronom suffixe (Moi) designe Dieu directement — c'est Moi, et non un autre, que vous devez redouter.",
              axe1_verset: "Le verbe irhabuni est le troisieme et dernier imperatif du verset : rappelez-vous, respectez, redoutez. La sequence culmine dans la crainte — c'est l'attitude finale qui englobe les deux precedentes. La crainte de Dieu motive le rappel du bienfait et le respect de l'engagement. La construction wa-iyyaya fa-irhabuni (et c'est Moi que vous devez redouter) est emphatique — le pronom disjoint iyyaya est mis en avant pour insister : Moi et personne d'autre. C'est un rappel d'exclusivite.",
              axe2_voisins: "Le verset 38 promettait l'absence de crainte (khawf) pour ceux qui suivent la guidance. Ce verset 40 ordonne la crainte reverentielle (rahba) envers Dieu. Les deux ne se contredisent pas : la khawf niee en 2:38 est la crainte des consequences negatives, la rahba ordonnee en 2:40 est le respect craintif devant la grandeur. Celui qui craint Dieu n'a pas a craindre autre chose — la rahba envers Dieu elimine le khawf envers le monde.",
              axe3_sourate: "La crainte de Dieu est un theme central de la sourate al-Baqarah. En 2:2, le Livre est une guidance pour les pieux (muttaqin — ceux qui craignent). En 2:41, la suite immediate ordonnera encore la crainte. En 2:150, « ne craignez pas les gens mais craignez-Moi ». La sourate construit progressivement l'idee que la crainte de Dieu est la vertu qui rend possible toutes les autres.",
              axe4_coherence: "La racine r-h-b apparait 12 fois dans le Coran. Elle est specialisee dans la crainte reverentielle intense. En 7:154, Musa prend les tablettes « et dans sa copie il y a guidance et misericorde pour ceux qui redoutent leur Seigneur ». En 21:90, les prophetes « Nous invoquaient avec desir et crainte (rahba) ». La rahba est reservee a la relation avec Dieu — elle n'est pas une peur ordinaire mais une conscience de la transcendance.",
              axe5_frequence: "Pour la mission du khalifa, la crainte de Dieu est le garde-fou de la khilafa. Le khalifa qui ne craint que Dieu n'est corrompu par aucun pouvoir terrestre. La rahba est l'immunite contre la tyrannie — celui qui redoute Dieu ne redoute pas les hommes et gouverne avec justice. L'imperatif « redoutez-Moi » place Dieu comme la seule autorite que le khalifa doit craindre."
            },
            "Vie monastique": {
              status: "nul",
              senses: ["moine", "monachisme"],
              proof_ctx: "Le monachisme (rahbaniyya) est un sens derive de r-h-b — le moine (rahib) est celui dont la crainte l'a pousse a se retirer du monde. Le contexte parle d'un imperatif de crainte envers Dieu, pas d'une vie monastique."
            },
            "Terreur": {
              status: "nul",
              senses: ["terroriser"],
              proof_ctx: "Terroriser (irhab) est un sens derive de r-h-b — inspirer la peur dans les autres. Le contexte est un imperatif adresse par Dieu aux fils d'Israel pour qu'ils Le craignent, pas pour qu'ils terrorisent les autres."
            }
          }
        }
      }
    ]
  }
};

// =====================================================
// PHRASES QUOTIDIENNES (word_daily)
// =====================================================
const dailyPhrases = [
  // qwl (id=307) — dire
  { analysis_id: 307, phrases: [
    { sense: "dire", arabic: "قُلْ لِي مَاذَا حَصَلَ", phon: "qul li madha hasala", french: "Dis-moi ce qui s'est passé." },
    { sense: "parole", arabic: "كَلَامُهُ قَوْلٌ صَادِقٌ", phon: "kalamuhu qawlun sadiq", french: "Sa parole est une parole sincère." },
    { sense: "dire", arabic: "قَالَتْ أُمِّي: ارْجِعْ بَاكِرًا", phon: "qalat ummi: irji' bakiran", french: "Ma mère a dit : rentre tôt." }
  ]},
  // hbt (id=456) — descendre
  { analysis_id: 456, phrases: [
    { sense: "descendre", arabic: "اهْبِطْ مِنَ الجَبَلِ بِحَذَرٍ", phon: "ihbit mina al-jabali bi-hadharin", french: "Descends de la montagne avec précaution." },
    { sense: "descendre", arabic: "هَبَطْنَا إِلَى الوَادِي", phon: "habatna ila al-wadi", french: "Nous sommes descendus dans la vallée." },
    { sense: "descendre", arabic: "الطَّائِرَةُ تَهْبِطُ الآنَ", phon: "al-ta'iratu tahbitu al-an", french: "L'avion descend maintenant." }
  ]},
  // jme (id=422) — rassemblement
  { analysis_id: 422, phrases: [
    { sense: "rassembler", arabic: "جَمَعْتُ كُلَّ الأَوْرَاقِ", phon: "jama'tu kulla al-awraqi", french: "J'ai rassemblé tous les papiers." },
    { sense: "réunir", arabic: "اجْتَمَعَ النَّاسُ فِي السَّاحَةِ", phon: "ijtama'a al-nasu fi al-sahati", french: "Les gens se sont réunis sur la place." },
    { sense: "totalité", arabic: "حَضَرُوا جَمِيعًا", phon: "hadaruu jamii'an", french: "Ils étaient tous présents." }
  ]},
  // aty (id=379) — venir
  { analysis_id: 379, phrases: [
    { sense: "venir", arabic: "أَتَى الضَّيْفُ مُبَكِّرًا", phon: "ata al-dayfu mubakkiran", french: "L'invité est venu tôt." },
    { sense: "arriver", arabic: "أَتَانِي خَبَرٌ سَارٌّ", phon: "atani khabarun sarr", french: "Une bonne nouvelle m'est parvenue." },
    { sense: "apporter", arabic: "آتِنِي كَأْسَ مَاءٍ", phon: "atini ka'sa ma'in", french: "Apporte-moi un verre d'eau." }
  ]},
  // hdy (id=261) — guidance
  { analysis_id: 261, phrases: [
    { sense: "guider", arabic: "هَدَانِي صَدِيقِي إِلَى الطَّرِيقِ", phon: "hadani sadiqi ila al-tariqi", french: "Mon ami m'a guidé vers le chemin." },
    { sense: "guidance", arabic: "هُدَى اللَّهِ هُوَ الهُدَى", phon: "huda Allahi huwa al-huda", french: "La guidance de Dieu est la vraie guidance." },
    { sense: "montrer le chemin", arabic: "هَلْ تَهْدِينِي إِلَى المَحَطَّةِ؟", phon: "hal tahdini ila al-mahattati?", french: "Peux-tu me montrer le chemin de la gare ?" }
  ]},
  // tbe (id=1752) — suivre
  { analysis_id: 1752, phrases: [
    { sense: "suivre", arabic: "تَبِعْتُ أَخِي إِلَى المَدْرَسَةِ", phon: "tabi'tu akhi ila al-madrasati", french: "J'ai suivi mon frère jusqu'à l'école." },
    { sense: "suivre", arabic: "اتَّبِعِ النَّصَائِحَ الطِّبِّيَّةَ", phon: "ittabi' al-nasa'iha al-tibbiyya", french: "Suis les conseils médicaux." },
    { sense: "suivre", arabic: "الكَلْبُ يَتْبَعُ صَاحِبَهُ", phon: "al-kalbu yatba'u sahibahu", french: "Le chien suit son maître." }
  ]},
  // xwf (id=759) — crainte
  { analysis_id: 759, phrases: [
    { sense: "craindre", arabic: "لَا تَخَفْ، أَنَا مَعَكَ", phon: "la takhaf, ana ma'ak", french: "N'aie pas peur, je suis avec toi." },
    { sense: "peur", arabic: "الخَوْفُ مِنَ الظَّلَامِ طَبِيعِيٌّ", phon: "al-khawfu mina al-zalami tabi'iyy", french: "La peur du noir est naturelle." },
    { sense: "craindre", arabic: "خَافَ الوَلَدُ مِنَ الرَّعْدِ", phon: "khafa al-waladu mina al-ra'di", french: "L'enfant a eu peur du tonnerre." }
  ]},
  // hzn (id=483) — tristesse
  { analysis_id: 483, phrases: [
    { sense: "être triste", arabic: "حَزِنْتُ عِنْدَمَا سَافَرَ صَدِيقِي", phon: "hazintu 'indama safara sadiqi", french: "J'ai été triste quand mon ami est parti." },
    { sense: "tristesse", arabic: "الحُزْنُ جُزْءٌ مِنَ الحَيَاةِ", phon: "al-huznu juz'un mina al-hayati", french: "La tristesse fait partie de la vie." },
    { sense: "chagrin", arabic: "لَا تَحْزَنْ، كُلُّ شَيْءٍ سَيَكُونُ بِخَيْرٍ", phon: "la tahzan, kullu shay'in sayakunu bi-khayrin", french: "Ne sois pas triste, tout ira bien." }
  ]},
  // kfr (id=294) — recouvrir
  { analysis_id: 294, phrases: [
    { sense: "couvrir", arabic: "غَطَّى الثَّلْجُ الأَرْضَ", phon: "ghatta al-thalju al-arda", french: "La neige a couvert la terre." },
    { sense: "cacher", arabic: "الظَّلَامُ يَكْفُرُ كُلَّ شَيْءٍ", phon: "al-zalamu yakfuru kulla shay'in", french: "L'obscurité recouvre toute chose." },
    { sense: "couvrir", arabic: "كَفَرَ الزَّارِعُ البَذْرَةَ بِالتُّرَابِ", phon: "kafara al-zari'u al-badhrata bi-al-turabi", french: "Le semeur a couvert la graine de terre." }
  ]},
  // kdb (id=474) — démentir
  { analysis_id: 474, phrases: [
    { sense: "mentir", arabic: "لَا تَكْذِبْ عَلَى أَصْدِقَائِكَ", phon: "la takdhib 'ala asdiqaa'ika", french: "Ne mens pas à tes amis." },
    { sense: "démentir", arabic: "كَذَّبَ الخَبَرَ لَمَّا سَمِعَهُ", phon: "kadhdhaba al-khabara lamma sami'ahu", french: "Il a démenti la nouvelle quand il l'a entendue." },
    { sense: "mensonge", arabic: "الكَذِبُ لَا يَدُومُ", phon: "al-kadhibu la yadum", french: "Le mensonge ne dure pas." }
  ]},
  // shb (id=476) — compagnon
  { analysis_id: 476, phrases: [
    { sense: "compagnon", arabic: "صَاحِبِي رَافَقَنِي فِي السَّفَرِ", phon: "sahibi rafaqani fi al-safari", french: "Mon compagnon m'a accompagné en voyage." },
    { sense: "accompagner", arabic: "صَحِبْتُهُ مُنْذُ الطُّفُولَةِ", phon: "sahibtuhu mundhu al-tufula", french: "Je l'accompagne depuis l'enfance." },
    { sense: "ami", arabic: "أَصْحَابُهُ يُحِبُّونَهُ", phon: "ashabuhu yuhibbunahu", french: "Ses compagnons l'aiment." }
  ]},
  // nwr (id=349) — feu/lumière
  { analysis_id: 349, phrases: [
    { sense: "feu", arabic: "أَشْعَلْنَا نَارًا لِلتَّدْفِئَةِ", phon: "ash'alna naran li-al-tadfi'a", french: "Nous avons allumé un feu pour nous réchauffer." },
    { sense: "lumière", arabic: "النُّورُ يَدْخُلُ مِنَ النَّافِذَةِ", phon: "al-nuru yadkhulu mina al-nafidhati", french: "La lumière entre par la fenêtre." },
    { sense: "éclairer", arabic: "أَنَارَ المِصْبَاحُ الغُرْفَةَ", phon: "anara al-misbahu al-ghurfata", french: "La lampe a éclairé la pièce." }
  ]},
  // xld (id=927) — éternité
  { analysis_id: 927, phrases: [
    { sense: "demeurer éternellement", arabic: "الذِّكْرَيَاتُ الجَمِيلَةُ تَخْلُدُ", phon: "al-dhikrayatu al-jamilatu takhlud", french: "Les beaux souvenirs demeurent pour toujours." },
    { sense: "rester pour toujours", arabic: "خَلَدَ اسْمُهُ فِي التَّارِيخِ", phon: "khalada ismuhu fi al-tarikhi", french: "Son nom est resté pour toujours dans l'histoire." },
    { sense: "demeurer éternellement", arabic: "لَا شَيْءَ يَخْلُدُ فِي هَذِهِ الدُّنْيَا", phon: "la shay'a yakhlud fi hadhihi al-dunya", french: "Rien ne dure éternellement en ce monde." }
  ]},
  // bny (id=386) — fils
  { analysis_id: 386, phrases: [
    { sense: "fils", arabic: "ابْنِي يَدْرُسُ فِي الجَامِعَةِ", phon: "ibni yadrusu fi al-jami'ati", french: "Mon fils étudie à l'université." },
    { sense: "construire", arabic: "بَنَيْنَا بَيْتًا جَدِيدًا", phon: "banayna baytan jadidan", french: "Nous avons construit une nouvelle maison." },
    { sense: "fils", arabic: "هُوَ ابْنُ أَخِي", phon: "huwa ibnu akhi", french: "C'est le fils de mon frère." }
  ]},
  // dkr (id=1688) — rappel
  { analysis_id: 1688, phrases: [
    { sense: "se souvenir", arabic: "تَذَكَّرْتُ مَوْعِدِي فِي آخِرِ لَحْظَةٍ", phon: "tadhakkartu maw'idi fi akhiri lahzatin", french: "Je me suis souvenu de mon rendez-vous au dernier moment." },
    { sense: "mentionner", arabic: "ذَكَرَ اسْمَكَ فِي الاجْتِمَاعِ", phon: "dhakara ismaka fi al-ijtima'i", french: "Il a mentionné ton nom à la réunion." },
    { sense: "se souvenir", arabic: "اذْكُرْنِي عِنْدَمَا تُسَافِرُ", phon: "udhkurni 'indama tusafiru", french: "Souviens-toi de moi quand tu voyageras." }
  ]},
  // nem (id=264) — bienfait
  { analysis_id: 264, phrases: [
    { sense: "bienfait", arabic: "نِعَمُ اللَّهِ لَا تُحْصَى", phon: "ni'amu Allahi la tuhsa", french: "Les bienfaits de Dieu ne se comptent pas." },
    { sense: "bienfait", arabic: "الصِّحَّةُ نِعْمَةٌ عَظِيمَةٌ", phon: "al-sihhatu ni'matun 'azima", french: "La santé est un immense bienfait." },
    { sense: "accorder un bienfait", arabic: "أَنْعَمَ عَلَيْنَا بِالأَمَانِ", phon: "an'ama 'alayna bi-al-amani", french: "Il nous a comblés de sécurité." }
  ]},
  // wfy (id=487) — fidélité
  { analysis_id: 487, phrases: [
    { sense: "être fidèle", arabic: "وَفَى بِوَعْدِهِ كَمَا قَالَ", phon: "wafa bi-wa'dihi kama qala", french: "Il a tenu sa promesse comme il l'avait dit." },
    { sense: "accomplir", arabic: "أَوْفِ بِالعَقْدِ الَّذِي وَقَّعْتَهُ", phon: "awfi bi-al-'aqdi alladhi waqqa'tahu", french: "Accomplis le contrat que tu as signé." },
    { sense: "payer intégralement", arabic: "وَفَّاهُ أَجْرَهُ كَامِلًا", phon: "waffahuajrahu kamilan", french: "Il lui a payé son salaire intégralement." }
  ]},
  // ehd (id=425) — engagement
  { analysis_id: 425, phrases: [
    { sense: "engagement", arabic: "عَاهَدْتُهُ أَنْ أَحْضُرَ", phon: "'ahadtuhu an ahdura", french: "Je me suis engagé à venir." },
    { sense: "pacte", arabic: "العَهْدُ بَيْنَهُمَا مُقَدَّسٌ", phon: "al-'ahdu baynahuma muqaddas", french: "Le pacte entre eux est sacré." },
    { sense: "promesse", arabic: "أَنَا عِنْدَ عَهْدِي", phon: "ana 'inda 'ahdi", french: "Je tiens ma promesse." }
  ]},
  // rhb (id=489) — crainte révérencielle
  { analysis_id: 489, phrases: [
    { sense: "redouter", arabic: "يَرْهَبُ العَاقِلُ عَوَاقِبَ أَفْعَالِهِ", phon: "yarhabu al-'aqilu 'awaqiba af'alihi", french: "Le sage redoute les conséquences de ses actes." },
    { sense: "craindre", arabic: "أَرْهَبَنِي صَوْتُ الرَّعْدِ", phon: "arhabani sawtu al-ra'di", french: "Le bruit du tonnerre m'a effrayé." },
    { sense: "craindre", arabic: "لَا تَرْهَبْ إِلَّا اللَّهَ", phon: "la tarhab illa Allah", french: "Ne redoute que Dieu." }
  ]}
];

// =====================================================
// PROCESS VERSE
// =====================================================
async function processVerse(verseNum) {
  console.log(`\n=== VERSET 2:${verseNum} ===`);
  const data = verseData[verseNum];
  if (!data) { console.log('  Pas de données'); return; }

  // Get analysis_id if not set
  if (!data.analysis_id) {
    const { data: va } = await supabase
      .from('verse_analyses')
      .select('id')
      .eq('verse_id', data.verse_id)
      .single();
    if (!va) { console.log('  ERREUR: pas de verse_analyses pour verse_id=' + data.verse_id); return; }
    data.analysis_id = va.id;
    console.log(`  analysis_id=${data.analysis_id}`);
  } else {
    console.log(`  analysis_id=${data.analysis_id} (preset)`);
  }

  let okCount = 0;
  let errCount = 0;

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
      const ax = word.analysis_axes;
      console.log(`  ${word.word_key} (pos ${word.position}) -> sens "${ax.concept_chosen}" -> mot "${word.sense_chosen}"`);
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
    console.log(`  Traduction : "${data.translation_arab.substring(0, 80)}..."`);
    okCount++;
  }

  console.log(`VERSET 2:${verseNum} — TERMINE (${okCount} OK, ${errCount} erreurs)`);
}

// =====================================================
// SYNC word_meanings
// =====================================================
async function syncWordMeanings() {
  console.log('\n=== SYNC word_meanings ===');

  const verseIds = [45, 46, 47];
  const { data: vwas } = await supabase
    .from('verse_word_analyses')
    .select('word_key, analysis_axes')
    .in('verse_id', verseIds);

  if (!vwas || vwas.length === 0) {
    console.log('  Aucune donnée à synchroniser');
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
      console.log(`  ${key} non trouvé dans word_analyses — skip`);
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
// DAILY PHRASES
// =====================================================
async function insertDailyPhrases() {
  console.log('\n=== DAILY PHRASES ===');

  let totalOk = 0, totalSkip = 0, totalErr = 0;

  for (const root of dailyPhrases) {
    // Check if phrases already exist
    const { count } = await supabase
      .from('word_daily')
      .select('*', { count: 'exact', head: true })
      .eq('analysis_id', root.analysis_id);

    if (count && count > 0) {
      console.log(`  analysis_id=${root.analysis_id} — ${count} phrases existent deja, skip`);
      totalSkip += root.phrases.length;
      continue;
    }

    for (const p of root.phrases) {
      const { error } = await supabase.from('word_daily').insert({
        analysis_id: root.analysis_id,
        sense: p.sense,
        arabic: p.arabic,
        phon: p.phon,
        french: p.french
      });
      if (error) {
        console.error(`  ERR daily id=${root.analysis_id}:`, error.message);
        totalErr++;
      } else {
        totalOk++;
      }
    }
    console.log(`  analysis_id=${root.analysis_id} — 3 phrases inserees`);
  }

  console.log(`DAILY PHRASES — ${totalOk} OK, ${totalSkip} skip, ${totalErr} erreurs`);
}

// =====================================================
// MAIN
// =====================================================
async function main() {
  console.log('=== PIPELINE SOURATE 2 — AL-BAQARAH — VERSETS 38 A 40 ===\n');

  for (let v = 38; v <= 40; v++) {
    await processVerse(v);
  }

  await syncWordMeanings();
  await insertDailyPhrases();

  console.log('\n=== PIPELINE V38-40 TERMINEE ===');
}

main().catch(e => console.error('FATAL:', e));
