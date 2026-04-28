const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// =====================================================
// PIPELINE SOURATE 2 — VERSETS 139-140
// V139: verse_id=146, analysis_id=505
// V140: verse_id=147, analysis_id=507
// =====================================================

const verseData = {
  139: {
    verse_id: 146,
    analysis_id: 505,
    translation_arab: "Dis : nous disputez-vous au sujet de Dieu, alors qu'il est notre seigneur et votre seigneur ? A nous nos actes et a vous vos actes ! Et nous, nous lui sommes devoues exclusivement.",
    full_translation: "Dis : \"Discutez-vous avec nous au sujet d'Allah, alors qu'Il est notre Seigneur et le votre ? A nous nos actions et a vous vos actions ! C'est a Lui que nous sommes devoues.\"",
    translation_explanation: `§DEMARCHE§
Le verset est un ordre de Dieu au Prophete de repondre a ceux qui disputent. Le verbe imperatif **qul** (dis) ouvre le verset comme un ordre divin adresse au Prophete. Le verbe **tuhaajjuunana** est un inaccompli 2MP de la forme III de la racine h-j-j avec pronom suffixe 1MP. Le Lane's donne pour la forme III : disputer, argumenter, opposer un argument a un autre. La forme III (mufa'ala) marque la reciprocite — ils disputent avec nous, le debat va dans les deux sens. L'inaccompli indique que cette dispute est en cours ou recurrente. Le pronom suffixe « na » indique qu'ils disputent avec nous (les croyants). La preposition **fi** (dans, au sujet de) introduit l'objet de la dispute : Dieu. La particule interrogative « a » (est-ce que) donne a la phrase un ton de reproche — c'est une question rhetorique qui denonce l'absurdite de la dispute. Le nom **Allahi** est le nom propre de la divinite au genitif. Ils disputent au sujet de Dieu — ils pretendent que Dieu est a eux seuls et non aux croyants. Le pronom **huwa** (il) est un pronom de rappel emphatique — il reprend Dieu et souligne Son identite. Le nom **rabbuna** est de la racine r-b-b avec pronom suffixe 1MP. Le Lane's donne : seigneur, maitre, celui qui fait grandir et qui entretient. Le mot rabb designe l'autorite bienveillante qui eleve et prend soin. Le pronom « na » (notre) indique que Dieu est notre seigneur a nous. Le nom **rabbukum** est le meme mot avec le pronom suffixe 2MP (votre). La repetition « notre seigneur et votre seigneur » montre que Dieu est le seigneur de tous — il n'appartient pas a un groupe particulier. Le nom **a'maluna** est un pluriel de la racine '-m-l avec pronom suffixe 1MP. Le Lane's donne : actes, actions, oeuvres. Les actes sont ce que chacun produit — chacun est responsable de ses propres actes. La preposition **lana** (pour nous) et **lakum** (pour vous) cree une separation nette : a nous nos actes, a vous vos actes. Chacun porte ses propres actions. Le nom **a'malukum** est le meme avec le pronom 2MP. La repetition marque la symetrie : chaque groupe est responsable de ses propres actes. Le pronom **nahnu** (nous) est un pronom emphatique 1MP qui insiste sur l'identite du groupe. La preposition **lahu** (a lui) indique la direction de la devotion — c'est a Dieu que la devotion est dirigee. Le participe actif **mukhlisuna** est de la forme IV de la racine kh-l-s. Le Lane's donne : etre pur, etre sincere, dedier exclusivement. La forme IV (af'ala) rend le sens causatif — mukhlisun est celui qui rend sa devotion pure, qui la dedie exclusivement. Le participe actif pluriel indique un etat permanent — ils sont constamment et exclusivement devoues a Dieu. La purete de la devotion (ikhlas) est l'absence de tout melange — pas d'associe, pas de partage, devotion entiere a Dieu seul.

§JUSTIFICATION§
**disputez-vous** — Le sens retenu est « disputer ». Le verbe tuhaajjuunana a la forme III designe une argumentation reciproque. L'alternative « pelerinage » est ecartee car le contexte est clairement un debat verbal, pas un voyage sacre. La question rhetorique (a-tuhaajjuunana) denonce l'absurdite de cette dispute.

**Dieu** — Le sens retenu est « Dieu ». Le nom Allah designe la divinite unique. L'alternative « adorer » est ecartee car le mot est un nom propre, pas un verbe.

**seigneur** — Le sens retenu est « seigneur ». Le mot rabb designe celui qui fait grandir et entretient. L'alternative « augmenter » est ecartee car le contexte est la relation de seigneurie entre Dieu et les humains, pas une augmentation quantitative. La repetition rabbuna/rabbukum montre que la seigneurie est universelle.

**actes** — Le sens retenu est « actes ». Le mot a'mal designe les oeuvres et actions de chacun. L'alternative « gouverneur » est ecartee car le mot est un pluriel de 'amal (acte), pas un titre. Chacun porte ses propres actes — la responsabilite est individuelle.

**devoues exclusivement** — Le sens retenu est « dedier exclusivement ». Le participe mukhlisuna designe ceux qui ont purifie leur devotion de tout melange. L'alternative « sauver » est ecartee car le contexte est la purete de la devotion, pas le sauvetage. L'ikhlas est la devotion sans associe.

§CRITIQUE§
Les traductions courantes traduisent tuhaajjuunana par « discutez-vous » (Hamidullah) ou « disputez-vous ». Nous retenons « disputez-vous » car le verbe a la forme III implique une opposition argumentative, pas une simple discussion. Pour mukhlisuna, Hamidullah donne « devoues » — nous ajoutons « exclusivement » pour rendre le sens de la forme IV qui implique la purete totale de la devotion, sans melange ni partage. Cette nuance est importante car le verset oppose justement l'exclusivite de la devotion a la pretention des disputeurs de s'approprier Dieu.`,
    segments: [
      { fr: "dis", phon: "qul", arabic: "\u0642\u064F\u0644\u0652", is_particle: true, position: 1 },
      { fr: "disputez-vous avec nous", pos: "verbe", phon: "atuhaajjuunanaa", arabic: "\u0623\u064E\u062A\u064F\u062D\u064E\u0622\u062C\u0651\u064F\u0648\u0646\u064E\u0646\u064E\u0627", word_key: "hjj", is_particle: false, sense_retenu: "disputer", position: 2 },
      { fr: "au sujet de", phon: "fii", arabic: "\u0641\u0650\u0649", is_particle: true, position: 3 },
      { fr: "Dieu", pos: "nom", phon: "allaahi", arabic: "\u0671\u0644\u0644\u0651\u064E\u0647\u0650", word_key: "alh", is_particle: false, sense_retenu: "Dieu", position: 4 },
      { fr: "et", phon: "wa", arabic: "\u0648\u064E", is_particle: true, position: 5 },
      { fr: "il", pos: "pronom", phon: "huwa", arabic: "\u0647\u064F\u0648\u064E", word_key: "huwa", is_particle: false, sense_retenu: "il", position: 6 },
      { fr: "notre seigneur", pos: "nom", phon: "rabbunaa", arabic: "\u0631\u064E\u0628\u0651\u064F\u0646\u064E\u0627", word_key: "rbb", is_particle: false, sense_retenu: "seigneur", position: 7 },
      { fr: "et", phon: "wa", arabic: "\u0648\u064E", is_particle: true, position: 8 },
      { fr: "votre seigneur", pos: "nom", phon: "rabbukum", arabic: "\u0631\u064E\u0628\u0651\u064F\u0643\u064F\u0645\u0652", word_key: "rbb", is_particle: false, sense_retenu: "seigneur", position: 9 },
      { fr: "et", phon: "wa", arabic: "\u0648\u064E", is_particle: true, position: 10 },
      { fr: "a nous", phon: "lanaa", arabic: "\u0644\u064E\u0646\u064E\u0622", is_particle: true, position: 11 },
      { fr: "nos actes", pos: "nom", phon: "a'maalunaa", arabic: "\u0623\u064E\u0639\u0652\u0645\u064E\u0640\u0670\u0644\u064F\u0646\u064E\u0627", word_key: "eml", is_particle: false, sense_retenu: "actes", position: 12 },
      { fr: "et", phon: "wa", arabic: "\u0648\u064E", is_particle: true, position: 13 },
      { fr: "a vous", phon: "lakum", arabic: "\u0644\u064E\u0643\u064F\u0645\u0652", is_particle: true, position: 14 },
      { fr: "vos actes", pos: "nom", phon: "a'maalukum", arabic: "\u0623\u064E\u0639\u0652\u0645\u064E\u0640\u0670\u0644\u064F\u0643\u064F\u0645\u0652", word_key: "eml", is_particle: false, sense_retenu: "actes", position: 15 },
      { fr: "et", phon: "wa", arabic: "\u0648\u064E", is_particle: true, position: 16 },
      { fr: "nous", pos: "pronom", phon: "nahnu", arabic: "\u0646\u064E\u062D\u0652\u0646\u064F", word_key: "nahnu", is_particle: false, sense_retenu: "nous", position: 17 },
      { fr: "a lui", phon: "lahu", arabic: "\u0644\u064E\u0647\u064F\u06E5", is_particle: true, position: 18 },
      { fr: "devoues exclusivement", pos: "participe_actif", phon: "mukhlisuna", arabic: "\u0645\u064F\u062E\u0652\u0644\u0650\u0635\u064F\u0648\u0646\u064E", word_key: "khls", is_particle: false, sense_retenu: "dedier exclusivement", position: 19 }
    ],
    words: [
      // hjj pos=2
      {
        word_key: "hjj", position: 2, sense_chosen: "disputer",
        analysis_axes: {
          sense_chosen: "disputer",
          concept_chosen: "Pèlerinage/Preuve",
          concepts: {
            "Pèlerinage/Preuve": {
              status: "retenu",
              senses: ["pelerinage", "argument", "preuve", "disputer"],
              proof_ctx: "Le verbe tuhaajjuunana est un inaccompli 2MP de la forme III (mufa'ala) de la racine h-j-j avec pronom suffixe 1MP (na). Le Lane's donne pour la forme III : disputer, argumenter, opposer un argument a quelqu'un. Le sens premier de la racine est le pelerinage (hajj), mais la forme III developpe le sens de l'argumentation reciproque — celui qui dispute avance ses preuves (hujja) face a l'autre. La preuve et la dispute sont liees : disputer c'est opposer ses preuves a celles de l'autre. Le contexte est clairement une dispute verbale au sujet de Dieu, pas un pelerinage.",
              axe1_verset: "Le verbe tuhaajjuunana est le mot central du verset — c'est l'acte reproche aux interlocuteurs. Le champ lexical du verset tourne autour de l'opposition : disputez-vous / notre seigneur et votre seigneur / nos actes et vos actes. La dispute est une tentative de s'approprier Dieu, de le revendiquer comme exclusif a un groupe. Le verset repond en montrant que Dieu est le seigneur de tous et que chacun est responsable de ses propres actes. La dispute est donc vaine car elle porte sur ce qui ne peut etre l'apanage d'un seul groupe.",
              axe2_voisins: "Le verset 138 posait la question de l'empreinte divine (sibghat Allah) — la teinture de Dieu est meilleure que toute appartenance communautaire. Le verset 139 enchaine logiquement : puisque la teinture de Dieu est la meilleure, pourquoi disputer au sujet de Dieu ? Le verset 140 poursuivra en demandant si les patriarches etaient juifs ou chretiens. L'ensemble montre que la dispute communautaire est vaine face a l'universalite de Dieu.",
              axe3_sourate: "La racine h-j-j apparait dans la sourate al-Baqarah dans le contexte des disputes avec les Gens du Livre. En 2:76, certains disent « ne leur parlez pas de ce que Dieu vous a revele pour qu'ils ne l'utilisent pas comme argument contre vous ». En 2:150, la direction de la priere est fixee « pour que les gens n'aient pas d'argument contre vous ». La sourate montre que les disputes sont un obstacle a la verite — elles portent sur la forme plutot que sur le fond.",
              axe4_coherence: "La racine h-j-j apparait environ 35 fois dans le Coran. En 3:65, « pourquoi disputez-vous au sujet d'Abraham alors que la Torah et l'Evangile n'ont ete reveles qu'apres lui ? ». En 42:16, « ceux qui disputent au sujet de Dieu apres qu'on Lui a repondu, leur argument est vain aupres de leur Seigneur ». Le Coran denonce systematiquement les disputes sectaires comme un egarement — la verite ne se tranche pas par la dispute mais par la preuve divine.",
              axe5_frequence: "Pour la mission du khalifa, la dispute au sujet de Dieu est un piege qui detourne de la mission. Le khalifa ne doit pas entrer dans les disputes sectaires qui cherchent a s'approprier Dieu. Sa mission est de reconnaitre que Dieu est le seigneur de tous et que chacun est responsable de ses actes. La dispute est sterile quand elle vise la possession exclusive de la verite divine."
            }
          }
        }
      },
      // alh pos=4
      {
        word_key: "alh", position: 4, sense_chosen: "Dieu",
        analysis_axes: {
          sense_chosen: "Dieu",
          concept_chosen: "Divinité",
          concepts: {
            "Divinité": {
              status: "retenu",
              senses: ["divinite", "dieu", "Dieu", "theologie"],
              proof_ctx: "Le nom Allahi est le nom propre de la divinite unique au genitif. Le Lane's donne : Dieu, la divinite qui merite l'adoration exclusive. Ici Allahi est l'objet de la dispute — ils disputent « au sujet de Dieu ». Le nom est au genitif apres la preposition fi (dans, au sujet de). La dispute porte sur la question de savoir a qui appartient Dieu — ce qui est absurde car Dieu est le seigneur de tous.",
              axe1_verset: "Le nom Allahi est l'enjeu central du verset. Toute la structure du verset tourne autour de Dieu : disputez-vous au sujet de Dieu / Il est notre seigneur et votre seigneur / nous Lui sommes devoues. Dieu est a la fois l'objet de la dispute et la reponse a la dispute. La reponse est que Dieu est le seigneur de tous, pas d'un groupe particulier. La devotion exclusive (ikhlas) est la bonne reponse a la dispute : au lieu de revendiquer Dieu, il faut se devouer a Lui.",
              axe2_voisins: "Le verset 138 mentionnait la teinture de Dieu (sibghat Allah) comme la meilleure des appartenances. Le verset 139 demande : pourquoi disputer au sujet de Dieu alors qu'Il est le seigneur de tous ? Le verset 140 demandera : pretendez-vous qu'Abraham etait juif ou chretien ? L'ensemble montre que Dieu transcende les etiquettes communautaires.",
              axe3_sourate: "Le nom Allah est le plus frequent de la sourate al-Baqarah. Il structure chaque passage comme le sujet central. En 2:139, Dieu est l'objet de la dispute entre les communautes. La sourate insiste sur le fait que Dieu est le Dieu de tous — pas d'un groupe exclusif.",
              axe4_coherence: "Le nom Allah apparait plus de 2600 fois dans le Coran. La dispute au sujet de Dieu est un theme recurrent — chaque communaute pretend avoir le monopole de la verite divine. Le Coran repond que Dieu est au-dessus des appartenances communautaires et que la devotion sincere est le seul critere.",
              axe5_frequence: "Pour la mission du khalifa, Dieu est le mandant de la mission. Disputer au sujet de Dieu c'est perdre de vue la mission elle-meme. Le khalifa doit reconnaitre que Dieu est le seigneur de tous et que la devotion exclusive est le vrai lien avec Dieu."
            },
            "Adoration/Culte": {
              status: "nul",
              senses: ["adorer", "servir", "se consacrer au culte"],
              proof_ctx: "Le mot est le nom propre Allah au genitif, pas un verbe d'adoration. Le contexte est la dispute au sujet de Dieu."
            },
            "Confusion/Perplexité": {
              status: "nul",
              senses: ["etre confus"],
              proof_ctx: "Le mot est le nom propre Allah, pas un etat de confusion."
            }
          }
        }
      },
      // rbb pos=7
      {
        word_key: "rbb", position: 7, sense_chosen: "seigneur",
        analysis_axes: {
          sense_chosen: "seigneur",
          concept_chosen: "Seigneurie/Autorité bienveillante",
          concepts: {
            "Seigneurie/Autorité bienveillante": {
              status: "retenu",
              senses: ["seigneur", "maitre"],
              proof_ctx: "Le mot rabbuna est un nom masculin singulier de la racine r-b-b avec pronom suffixe 1MP (na = notre). Le Lane's donne : seigneur, maitre, celui qui possede, eleve et entretient. Le rabb est celui qui fait grandir ce qui est sous sa responsabilite — c'est une autorite bienveillante. Le pronom « na » (notre) cree la relation : Dieu est notre seigneur. Le mot apparait deux fois dans le verset (rabbuna et rabbukum) pour montrer que la seigneurie est universelle — Dieu est le seigneur de tous, pas d'un seul groupe.",
              axe1_verset: "Le mot rabbuna est la reponse a la dispute : pourquoi disputer au sujet de Dieu alors qu'Il est notre seigneur ET votre seigneur ? La repetition rabb-una / rabb-ukum montre la symetrie — la seigneurie divine est la meme pour les deux groupes. Le champ lexical (Dieu, seigneur, actes, devoues) montre que la vraie reponse n'est pas dans la dispute mais dans la reconnaissance que Dieu est le seigneur de tous et que chacun est responsable de ses actes devant Lui.",
              axe2_voisins: "Le verset 131 rapportait qu'Abraham a dit « je me soumets au Seigneur des mondes ». Le verset 136 affirmait la croyance en ce qui a ete revele a tous les prophetes. Le verset 139 poursuit ce theme : Dieu est le seigneur commun a tous. La seigneurie divine ne se divise pas entre les communautes.",
              axe3_sourate: "La racine r-b-b est une des plus frequentes de la sourate al-Baqarah. En 2:21, « adorez votre Seigneur ». En 2:124, « le Seigneur d'Abraham l'eprouva ». La sourate montre que la seigneurie divine est le fondement de toutes les relations — le Seigneur possede, eleve, eprouve et recompense.",
              axe4_coherence: "La racine r-b-b apparait environ 970 fois dans le Coran. L'expression « Seigneur des mondes » (rabb al-'alamin) revient dans de nombreuses sourates. En 2:139, la seigneurie est rappelee pour montrer l'universalite — Dieu est le seigneur de tous les mondes et de toutes les communautes, sans exclusivite.",
              axe5_frequence: "Pour la mission du khalifa, la seigneurie de Dieu est le cadre de la mission. Le khalifa reconnait que Dieu est son seigneur — Celui qui le fait grandir, l'entretient et le guide. Cette seigneurie est partagee avec tous les autres humains. La mission du khalifa n'est pas de revendiquer Dieu mais de se soumettre a Sa seigneurie universelle."
            },
            "Croissance/Augmentation": {
              status: "probable",
              senses: ["augmenter", "croitre", "faire grandir", "nourrir", "developper", "exces", "colline", "eminence"],
              proof_ctx: "Le sens de croissance est le sens premier de la racine r-b-b — faire grandir, augmenter. Le seigneur est celui qui fait grandir. Le contexte est la relation de seigneurie, pas la croissance physique, mais le lien etymologique est direct."
            }
          }
        }
      },
      // rbb pos=9
      {
        word_key: "rbb", position: 9, sense_chosen: "seigneur",
        analysis_axes: {
          sense_chosen: "seigneur",
          concept_chosen: "Seigneurie/Autorité bienveillante",
          concepts: {
            "Seigneurie/Autorité bienveillante": {
              status: "retenu",
              senses: ["seigneur", "maitre"],
              proof_ctx: "Le mot rabbukum est le meme nom rabb avec le pronom suffixe 2MP (kum = votre). Le Lane's donne : seigneur, maitre. La repetition rabbuna/rabbukum est un procede rhetorique qui montre la symetrie : le meme seigneur pour les deux groupes. Dieu est le seigneur des croyants ET de ceux qui disputent — la seigneurie est indivisible.",
              axe1_verset: "Le mot rabbukum complete la paire rabbuna/rabbukum. Cette symetrie est la reponse a la dispute : si le meme Dieu est le seigneur des deux groupes, la dispute est vaine. Le verset passe ensuite aux actes (a'maluna/a'malukum) — la responsabilite est individuelle, pas communautaire. La seigneurie est commune, les actes sont propres a chacun.",
              axe2_voisins: "Le verset 131 rapportait la soumission d'Abraham au Seigneur des mondes. Le verset 133 rapportait la question de Jacob a ses fils : « qu'adorerez-vous apres moi ? » — ils repondirent « ton Dieu et le Dieu de tes peres ». Le verset 139 reprend ce theme : le Dieu des peres est aussi le votre — la seigneurie divine traverse les generations et les communautes.",
              axe3_sourate: "La sourate al-Baqarah utilise rabb avec differents pronoms pour montrer l'universalite : rabbuka (ton Seigneur, 2:30), rabbukum (votre Seigneur, 2:21), rabbuna (notre Seigneur, 2:127). La variation des pronoms montre que la seigneurie est la meme — seul le pronom change, pas le Seigneur.",
              axe4_coherence: "Le Coran utilise regulierement la paire rabbuna/rabbukum pour montrer que Dieu est le seigneur commun. En 3:64, « Dites : venez a une parole commune entre nous et vous — que nous n'adorions que Dieu ». L'universalite de la seigneurie est un argument contre le sectarisme.",
              axe5_frequence: "Pour la mission du khalifa, reconnaitre que Dieu est aussi le seigneur de ceux avec qui on dispute est un acte de justice. La mission n'est pas de revendiquer Dieu pour soi mais de reconnaitre que Sa seigneurie s'etend a tous. Le khalifa traite les autres comme des etres qui partagent le meme Seigneur."
            },
            "Croissance/Augmentation": {
              status: "probable",
              senses: ["augmenter", "croitre", "faire grandir", "nourrir", "developper", "exces", "colline", "eminence"],
              proof_ctx: "Meme remarque que pour rabbuna (pos=7) — le sens de croissance est le sens premier de la racine, le seigneur est celui qui fait grandir."
            }
          }
        }
      },
      // eml pos=12
      {
        word_key: "eml", position: 12, sense_chosen: "actes",
        analysis_axes: {
          sense_chosen: "actes",
          concept_chosen: "Action/Oeuvre",
          concepts: {
            "Action/Oeuvre": {
              status: "retenu",
              senses: ["travailler", "agir", "oeuvre", "acte", "ouvrier"],
              proof_ctx: "Le mot a'maluna est un pluriel brise de 'amal (acte) de la racine '-m-l avec pronom suffixe 1MP (na = nos). Le Lane's donne : acte, oeuvre, travail, ce qu'on produit par l'effort. Le pluriel a'mal designe l'ensemble des actes d'une personne — ses oeuvres bonnes et mauvaises. Le pronom « na » (nos) cree la responsabilite : ce sont NOS actes, pas ceux des autres. La preposition « lana » (a nous) renforce l'idee de propriete et de responsabilite individuelle.",
              axe1_verset: "Le mot a'maluna fait partie de la structure symetrique du verset : a nous nos actes / a vous vos actes. Cette symetrie separe les responsabilites — chacun porte ses propres actes. Le champ lexical (seigneur, actes, devoues) montre que devant le meme Seigneur, chacun est juge sur ses propres actes, pas sur ceux des autres. La dispute est vaine car ce sont les actes qui comptent, pas les pretentions communautaires.",
              axe2_voisins: "Le verset 134 disait deja « elle aura ce qu'elle a acquis et vous aurez ce que vous avez acquis ». Le verset 141 repettera la meme idee. Le verset 139 reprend ce principe : la responsabilite individuelle des actes. Les versets voisins insistent sur le fait que personne ne porte les actes d'un autre — ni en bien ni en mal.",
              axe3_sourate: "La racine '-m-l est frequente dans la sourate al-Baqarah. En 2:25, « ceux qui ont cru et fait les bonnes oeuvres ». En 2:82, « ceux qui ont cru et fait les bonnes oeuvres, ceux-la sont les gens du Paradis ». La sourate lie systematiquement la foi et les actes — la foi sans les actes est insuffisante, et les actes sont la responsabilite de chacun.",
              axe4_coherence: "La racine '-m-l apparait environ 360 fois dans le Coran. Le Coran insiste sur la responsabilite individuelle des actes. En 99:7-8, « celui qui fait un atome de bien le verra, et celui qui fait un atome de mal le verra ». Les actes sont le critere du jugement, pas l'appartenance communautaire.",
              axe5_frequence: "Pour la mission du khalifa, les actes sont le contenu de la mission. Le khalifa est juge sur ce qu'il fait, pas sur ce qu'il pretend etre. La responsabilite des actes est individuelle — chacun rend des comptes pour ses propres oeuvres. La mission se mesure en actes, pas en paroles."
            },
            "Sens isolé/Gouverneur": {
              status: "nul",
              senses: ["gouverneur"],
              proof_ctx: "Le mot est un pluriel de 'amal (acte), pas un titre. Le contexte est la responsabilite des actes."
            }
          }
        }
      },
      // eml pos=15
      {
        word_key: "eml", position: 15, sense_chosen: "actes",
        analysis_axes: {
          sense_chosen: "actes",
          concept_chosen: "Action/Oeuvre",
          concepts: {
            "Action/Oeuvre": {
              status: "retenu",
              senses: ["travailler", "agir", "oeuvre", "acte", "ouvrier"],
              proof_ctx: "Le mot a'malukum est le meme pluriel a'mal avec pronom suffixe 2MP (kum = vos). Le Lane's donne : actes, oeuvres. La repetition a'maluna / a'malukum cree la symetrie des responsabilites : chaque groupe est responsable de ses propres actes. La preposition « lakum » (a vous) confirme que les actes leur appartiennent — ils en portent la responsabilite.",
              axe1_verset: "Le mot a'malukum complete la paire symetrique a'maluna/a'malukum. Le verset est construit sur des paires : rabbuna/rabbukum, a'maluna/a'malukum. Puis la conclusion rompt la symetrie : « et NOUS, nous Lui sommes devoues exclusivement ». La derniere phrase marque la difference — pas dans le Seigneur (commun) ni dans les actes (propres a chacun), mais dans la devotion exclusive (ikhlas).",
              axe2_voisins: "Le verset 134 etablissait le principe : « elle aura ce qu'elle a acquis et vous aurez ce que vous avez acquis ». Le verset 139 reprend ce principe avec les « actes » au lieu des « acquisitions ». L'idee est la meme : personne ne porte la responsabilite des actes d'un autre.",
              axe3_sourate: "La sourate al-Baqarah etablit le lien entre foi et actes des le debut. En 2:2, le Livre est une guidance pour ceux qui « accomplissent la priere et depensent ». Les actes sont la manifestation visible de la foi. Le verset 139 confirme que la foi se mesure aux actes, pas aux pretentions.",
              axe4_coherence: "Le schema « a nous nos actes, a vous vos actes » se retrouve en 109:6, « a vous votre religion et a moi ma religion ». En 42:15, « a nous nos oeuvres et a vous vos oeuvres ». Ce schema coranique de separation des responsabilites est un argument de paix : chacun rend des comptes pour ses propres actes, la dispute est donc inutile.",
              axe5_frequence: "Pour la mission du khalifa, la responsabilite de l'autre ne lui incombe pas. Le khalifa est responsable de ses propres actes devant Dieu. Les actes des autres leur appartiennent. Cette separation des responsabilites est liberatrice — le khalifa se concentre sur ses propres oeuvres au lieu de juger celles des autres."
            },
            "Sens isolé/Gouverneur": {
              status: "nul",
              senses: ["gouverneur"],
              proof_ctx: "Le mot est un pluriel de 'amal (acte), pas un titre."
            }
          }
        }
      },
      // khls pos=19
      {
        word_key: "khls", position: 19, sense_chosen: "dedier exclusivement",
        analysis_axes: {
          sense_chosen: "dedier exclusivement",
          concept_chosen: "Pureté/Sincérité",
          concepts: {
            "Pureté/Sincérité": {
              status: "retenu",
              senses: ["etre pur", "etre sincere", "dedier exclusivement"],
              proof_ctx: "Le mot mukhlisuna est un participe actif pluriel masculin de la forme IV de la racine kh-l-s. Le Lane's donne : etre pur, etre sans melange, etre sincere, dedier exclusivement. La forme IV (af'ala) rend le sens causatif : mukhlisun est celui qui rend sa devotion pure, qui la debarrasse de tout melange. Le participe actif indique un etat permanent — ils sont constamment devoues. Le pronom « lahu » (a Lui) precise la direction de la devotion : c'est a Dieu exclusivement. L'ikhlas est l'absence de tout associe dans la devotion — c'est le contraire du shirk (association).",
              axe1_verset: "Le mot mukhlisuna est la conclusion du verset et sa pointe. Apres avoir montre la symetrie (meme seigneur, actes propres a chacun), le verset conclut par la difference decisive : « nous, nous Lui sommes devoues exclusivement ». L'ikhlas est ce qui distingue les croyants des disputeurs. Le champ lexical (seigneur, actes, devoues) montre que la devotion exclusive est la vraie reponse a la dispute — au lieu de s'approprier Dieu, il faut se devouer a Lui sans partage.",
              axe2_voisins: "Le verset 138 parlait de la teinture de Dieu (sibghat Allah) comme la meilleure appartenance. Le verset 139 conclut par l'ikhlas — la devotion pure est la teinture de Dieu. Le verset 140 montrera que les patriarches n'etaient ni juifs ni chretiens — ils etaient devoues a Dieu sans etiquette communautaire. L'ikhlas transcende les appartenances.",
              axe3_sourate: "La racine kh-l-s apparait dans la sourate al-Baqarah en 2:94, « si la Demeure derniere vous est reservee exclusivement (khalisatan) ». En 2:139, mukhlisuna designe la devotion exclusive a Dieu. La sourate oppose l'exclusivite pretendus (la Demeure est a nous seuls) et l'exclusivite veritable (la devotion est pour Dieu seul).",
              axe4_coherence: "La racine kh-l-s apparait environ 31 fois dans le Coran. En 39:3, « la religion pure appartient a Dieu ». En 98:5, « ils n'ont recu d'autre ordre que d'adorer Dieu en Lui vouant un culte exclusif (mukhlisina) ». L'ikhlas est un theme central du Coran — la devotion doit etre pure, sans melange, sans associe. La sourate 112 s'appelle justement « al-Ikhlas » (la purete).",
              axe5_frequence: "Pour la mission du khalifa, l'ikhlas est la qualite premiere de la mission. Le khalifa est devoue exclusivement a Dieu — sans partage, sans melange, sans associe. La purete de la devotion est ce qui donne sens a la mission. Sans ikhlas, les actes sont vides de sens. L'ikhlas est la teinture de Dieu qui colore toute la mission du khalifa."
            },
            "Extraction/Délivrance": {
              status: "nul",
              senses: ["sauver", "extraire", "parvenir a"],
              proof_ctx: "Le sens de sauvetage est hors contexte — le verset parle de devotion exclusive a Dieu, pas de sauvetage. Le mukhlisun est celui qui purifie sa devotion, pas celui qui sauve."
            }
          }
        }
      }
    ]
  },
  140: {
    verse_id: 147,
    analysis_id: 507,
    translation_arab: "Ou bien dites-vous qu'Abraham et Ismael et Isaac et Jacob et les tribus etaient des juifs ou des chretiens ? Dis : est-ce vous qui etes les plus savants, ou bien Dieu ? Et qui est plus injuste que celui qui a cache un temoignage qu'il detenait de Dieu ? Et Dieu n'est pas inattentif a ce que vous faites.",
    full_translation: "Ou dites-vous qu'Abraham, Ismael, Isaac et Jacob et les Tribus etaient Juifs ou Chretiens ? - Dis : \"Est-ce vous les plus savants ou Allah ?\" - Qui est plus injuste que celui qui cache un temoignage qu'il detient d'Allah ? Et Allah n'est pas inattentif a ce que vous faites.",
    translation_explanation: `§DEMARCHE§
Le verset se divise en trois parties : une question rhetorique sur les patriarches, une replique, et un avertissement. La particule **am** (ou bien, est-ce que) ouvre le verset avec une question alternative — elle enchaine sur le verset precedent. Le verbe **taquluna** est un inaccompli 2MP de la racine q-w-l. Le Lane's donne : dire, parler, affirmer. L'inaccompli indique que l'affirmation est en cours ou recurrente — ils disent et repetent. La particule **inna** (en verite) introduit le contenu de leur affirmation avec emphase. Le nom **Ibrahima** est le nom propre du patriarche Abraham, un nom etranger arabise qui ne se decline pas normalement. La racine b-r-h dans le Lane's donne : preuve claire, piete. Le nom **Isma'ila** est le nom propre d'Ismael, fils d'Abraham. La racine s-m-' donne : entendre, ecouter. Le nom signifie etymologiquement « Dieu a entendu ». Le nom **Ishaqa** est le nom propre d'Isaac, fils d'Abraham. Le nom **Ya'quba** est le nom propre de Jacob, fils d'Isaac. La racine '-q-b donne : succeder, venir apres, talon. Jacob est celui qui vient apres (le successeur). Le nom **al-asbata** est un pluriel de sibt, de la racine s-b-t. Le Lane's donne : tribu, branche d'un peuple, petit-fils. Les asbat sont les douze tribus d'Israel — les descendants de Jacob par ses douze fils. Le verbe **kanu** est un accompli 3MP de la racine k-w-n. Le Lane's donne : etre (verbe incomplet). L'accompli avec kana marque un etat passe — ils pretendent que les patriarches « etaient » juifs ou chretiens. Le nom **hudan** est un accusatif indefini de la racine h-w-d. Le Lane's donne : juifs, ceux qui reviennent a Dieu. L'accusatif marque l'attribut de kana — « ils etaient des juifs ». La particule **aw** (ou) propose l'alternative. Le nom **nasara** est un pluriel de la racine n-s-r. Le Lane's donne : chretiens, nazareens, ceux qui aident. Les nasara sont etymologiquement « ceux qui aident » ou « de Nazareth ». Le verbe **qul** est un imperatif 2MS de la racine q-w-l. C'est le deuxieme « dis » du passage — un ordre au Prophete de repondre. La particule interrogative **'a** (est-ce que) introduit une question rhetorique. Le pronom **antum** est un pronom emphatique 2MP. L'adjectif **a'lamu** est un elatif (comparatif/superlatif) de la racine '-l-m. Le Lane's donne : savoir, connaitre. A'lamu signifie « le plus savant ». La question rhetorique « est-ce vous les plus savants ou Dieu ? » est devastatrice — la reponse est evidente. Le nom **Allahu** est le nom propre au nominatif. La question oppose le savoir humain (pretentieux) au savoir divin (absolu). La particule **wa-man** (et qui) introduit la question rhetorique suivante. L'adjectif **azlamu** est un elatif de la racine z-l-m. Le Lane's donne : opprimer, etre injuste, placer quelque chose hors de sa place. A'zlamu signifie « le plus injuste ». La preposition **mimman** (de celui qui) introduit la comparaison. Le verbe **katama** est un accompli 3MS de la racine k-t-m. Le Lane's donne : cacher, taire, dissimuler. L'accompli indique un acte acheve — il a cache. Le nom **shahadatan** est un accusatif indefini de la racine sh-h-d. Le Lane's donne : temoignage, attestation, ce qu'on a vu et qu'on rapporte. Le nom **'indahu** est de la racine '-n-d avec pronom 3MS. Le Lane's donne : aupres de, chez. « Un temoignage qu'il detient de Dieu » — il a en sa possession un temoignage d'origine divine et il le cache. La preposition **min** (de) + **Allahi** precise l'origine du temoignage : il vient de Dieu. Le verbe **ta'maluna** est un inaccompli 2MP de la racine '-m-l. Le Lane's donne : agir, faire, oeuvrer. L'inaccompli indique que leurs actes sont en cours et continus. Le participe actif **bighāfilin** est de la racine gh-f-l avec la preposition bi. Le Lane's donne : etre inattentif, negliger, oublier. La negation « wa ma Allahu bighāfilin » signifie « et Dieu n'est pas inattentif ». La preposition bi renforce la negation. Le nom **'amma** est la preposition 'an (de) + ma (ce que). « De ce que vous faites » — Dieu n'est pas inattentif a leurs actes.

§JUSTIFICATION§
**dites-vous** — Le sens retenu est « dire ». Le verbe taquluna designe l'affirmation verbale. L'alternative « opinion » est ecartee car le contexte est une parole prononcee, pas un avis interieur.

**Abraham** — Nom propre du patriarche. Pas d'alternative pertinente.

**Ismael** — Nom propre du fils d'Abraham. La racine s-m-' (entendre) donne le sens etymologique « Dieu a entendu » mais le mot fonctionne comme nom propre.

**Isaac** — Nom propre du fils d'Abraham.

**Jacob** — Nom propre du fils d'Isaac. La racine '-q-b (succeder) donne le sens « celui qui vient apres ».

**tribus** — Le sens retenu est « tribus ». Le mot al-asbat designe les douze tribus d'Israel. L'alternative « sabbat/repos » est ecartee car le contexte est genealogique (les descendants de Jacob).

**etaient** — Le sens retenu est « etre ». Le verbe kanu est un verbe incomplet qui porte le temps passe. L'alternative « venir a l'existence » est ecartee car kana est ici incomplet (suivi d'un attribut : « etaient des juifs »).

**juifs** — Le sens retenu est « juifs ». Le mot hudan designe les adeptes du judaisme. L'alternative « retourner » est ecartee car le mot est un nom, pas un verbe.

**chretiens** — Le sens retenu est « chretiens ». Le mot nasara designe les adeptes du christianisme. L'alternative « secourir » est ecartee car le mot est un nom designant une communaute, pas un verbe.

**dis** — Le sens retenu est « dire ». Deuxieme imperatif qul du passage.

**les plus savants** — Le sens retenu est « le plus savant ». L'elatif a'lamu designe le superlatif du savoir. L'alternative « signe/marque » est ecartee car le mot est un comparatif, pas un nom.

**plus injuste** — Le sens retenu est « le plus injuste ». L'elatif azlamu designe le superlatif de l'injustice. L'alternative « obscurite » est ecartee car le contexte est l'injustice morale, pas les tenebres physiques.

**cache** — Le sens retenu est « cacher ». Le verbe katama designe la dissimulation deliberee. L'alternative « taire » est proche mais « cacher » est plus general — on cache un temoignage, on tait une parole.

**temoignage** — Le sens retenu est « temoignage ». Le nom shahada designe ce qu'on a vu et qu'on rapporte. L'alternative « martyr » est ecartee car le contexte est le temoignage cache, pas le martyre.

**detenait** — Le sens retenu est « aupres de ». Le mot 'indahu signifie « en sa possession, chez lui ». Le temoignage est « aupres de lui, de la part de Dieu ».

**inattentif** — Le sens retenu est « inattentif ». Le participe ghafil designe celui qui neglige ou n'est pas attentif. Le verset nie cette qualite pour Dieu : Dieu N'EST PAS inattentif. L'alternative « pardonner » est ecartee car la racine est gh-f-l (negliger), pas gh-f-r (pardonner).

**ce que** — Le mot 'amma est la preposition 'an + ma (ce que). Il introduit l'objet de l'attention divine : ce que vous faites.

**vous faites** — Le sens retenu est « agir/faire ». Le verbe ta'maluna designe les actes en cours. Meme racine que a'mal (actes) du verset 139.

§CRITIQUE§
Les traductions courantes rendent le meme sens. La seule nuance notable est le mot « tribus » pour al-asbat : Hamidullah traduit par « Tribus » avec majuscule, ce qui est correct car il s'agit des douze tribus d'Israel specifiquement. Pour bighāfilin, Hamidullah donne « inattentif » — nous retenons le meme mot. La question rhetorique « est-ce vous les plus savants ou Allah ? » est rendue de maniere identique par toutes les traductions. La force du verset tient dans la juxtaposition de la pretention humaine (attribuer une etiquette religieuse aux patriarches) et du savoir divin (Dieu sait mieux que vous ce qu'etaient les patriarches).`,
    segments: [
      { fr: "est-ce que", phon: "am", arabic: "\u0623\u064E\u0645\u0652", is_particle: true, position: 1 },
      { fr: "dites-vous", pos: "verbe", phon: "taquluna", arabic: "\u062A\u064E\u0642\u064F\u0648\u0644\u064F\u0648\u0646\u064E", word_key: "qwl", is_particle: false, sense_retenu: "dire", position: 2 },
      { fr: "en verite", phon: "inna", arabic: "\u0625\u0650\u0646\u0651\u064E", is_particle: true, position: 3 },
      { fr: "Abraham", pos: "nom", phon: "ibrahima", arabic: "\u0625\u0650\u0628\u0652\u0631\u064E\u0670\u0647\u0650\u06E8\u0645\u064E", word_key: "brh", is_particle: false, sense_retenu: "Abraham", position: 4 },
      { fr: "et", phon: "wa", arabic: "\u0648\u064E", is_particle: true, position: 5 },
      { fr: "Ismael", pos: "nom", phon: "isma'ila", arabic: "\u0625\u0650\u0633\u0652\u0645\u064E\u0640\u0670\u0639\u0650\u064A\u0644\u064E", word_key: "sme", is_particle: false, sense_retenu: "Ismael", position: 6 },
      { fr: "et", phon: "wa", arabic: "\u0648\u064E", is_particle: true, position: 7 },
      { fr: "Isaac", pos: "nom", phon: "ishaqa", arabic: "\u0625\u0650\u0633\u0652\u062D\u064E\u0640\u0670\u0642\u064E", word_key: "shq", is_particle: false, sense_retenu: "Isaac", position: 8 },
      { fr: "et", phon: "wa", arabic: "\u0648\u064E", is_particle: true, position: 9 },
      { fr: "Jacob", pos: "nom", phon: "ya'quba", arabic: "\u064A\u064E\u0639\u0652\u0642\u064F\u0648\u0628\u064E", word_key: "eqb", is_particle: false, sense_retenu: "Jacob", position: 10 },
      { fr: "et", phon: "wa", arabic: "\u0648\u064E", is_particle: true, position: 11 },
      { fr: "les tribus", pos: "nom", phon: "al-asbata", arabic: "\u0671\u0644\u0652\u0623\u064E\u0633\u0652\u0628\u064E\u0627\u0637\u064E", word_key: "sbt", is_particle: false, sense_retenu: "tribus", position: 12 },
      { fr: "etaient", pos: "verbe", phon: "kanu", arabic: "\u0643\u064E\u0627\u0646\u064F\u0648\u0627\u06DF", word_key: "kwn", is_particle: false, sense_retenu: "etre", position: 13 },
      { fr: "des juifs", pos: "nom", phon: "hudan", arabic: "\u0647\u064F\u0648\u062F\u064B\u0627", word_key: "hwd", is_particle: false, sense_retenu: "juifs", position: 14 },
      { fr: "ou", phon: "aw", arabic: "\u0623\u064E\u0648\u0652", is_particle: true, position: 15 },
      { fr: "des chretiens", pos: "nom", phon: "nasara", arabic: "\u0646\u064E\u0635\u064E\u0640\u0670\u0631\u064E\u0649\u0670", word_key: "nsr", is_particle: false, sense_retenu: "chretiens", position: 16 },
      { fr: "dis", pos: "verbe", phon: "qul", arabic: "\u0642\u064F\u0644\u0652", word_key: "qwl", is_particle: false, sense_retenu: "dire", position: 17 },
      { fr: "est-ce que", phon: "'a", arabic: "\u0621\u064E", is_particle: true, position: 18 },
      { fr: "vous", pos: "pronom", phon: "antum", arabic: "\u0623\u064E\u0646\u062A\u064F\u0645\u0652", word_key: "ant", is_particle: false, sense_retenu: "vous", position: 19 },
      { fr: "les plus savants", pos: "adjectif", phon: "a'lamu", arabic: "\u0623\u064E\u0639\u0652\u0644\u064E\u0645\u064F", word_key: "elm", is_particle: false, sense_retenu: "le plus savant", position: 20 },
      { fr: "ou bien", phon: "'ami", arabic: "\u0623\u064E\u0645\u0650", is_particle: true, position: 21 },
      { fr: "Dieu", phon: "Allahu", arabic: "\u0671\u0644\u0644\u0651\u064E\u0647\u064F", is_particle: true, position: 22 },
      { fr: "et qui", phon: "wa man", arabic: "\u0648\u064E\u0645\u064E\u0646", is_particle: true, position: 23 },
      { fr: "plus injuste", pos: "adjectif", phon: "azlamu", arabic: "\u0623\u064E\u0638\u0652\u0644\u064E\u0645\u064F", word_key: "zlm", is_particle: false, sense_retenu: "le plus injuste", position: 24 },
      { fr: "de celui qui", phon: "mimman", arabic: "\u0645\u0650\u0645\u0651\u064E\u0646", is_particle: true, position: 25 },
      { fr: "a cache", pos: "verbe", phon: "katama", arabic: "\u0643\u064E\u062A\u064E\u0645\u064E", word_key: "ktm", is_particle: false, sense_retenu: "cacher", position: 26 },
      { fr: "un temoignage", pos: "nom", phon: "shahadatan", arabic: "\u0634\u064E\u0647\u064E\u0640\u0670\u062F\u064E\u0629\u064B", word_key: "shhd", is_particle: false, sense_retenu: "temoignage", position: 27 },
      { fr: "aupres de lui", pos: "nom", phon: "'indahu", arabic: "\u0639\u0650\u0646\u062F\u064E\u0647\u064F\u06E5", word_key: "end", is_particle: false, sense_retenu: "aupres de", position: 28 },
      { fr: "de", phon: "mina", arabic: "\u0645\u0650\u0646\u064E", is_particle: true, position: 29 },
      { fr: "Dieu", phon: "Allahi", arabic: "\u0671\u0644\u0644\u0651\u064E\u0647\u0650", is_particle: true, position: 30 },
      { fr: "et ne pas", phon: "wa ma", arabic: "\u0648\u064E\u0645\u064E\u0627", is_particle: true, position: 31 },
      { fr: "Dieu", phon: "Allahu", arabic: "\u0671\u0644\u0644\u0651\u064E\u0647\u064F", is_particle: true, position: 32 },
      { fr: "inattentif", pos: "adjectif", phon: "bighāfilin", arabic: "\u0628\u0650\u063A\u064E\u0640\u0670\u0641\u0650\u0644\u064D", word_key: "ghf", is_particle: false, sense_retenu: "inattentif", position: 33 },
      { fr: "de ce que", pos: "nom", phon: "'amma", arabic: "\u0639\u064E\u0645\u0651\u064E\u0627", word_key: "emm", is_particle: false, sense_retenu: "ce que", position: 34 },
      { fr: "vous faites", pos: "verbe", phon: "ta'maluna", arabic: "\u062A\u064E\u0639\u0652\u0645\u064E\u0644\u064F\u0648\u0646\u064E", word_key: "eml", is_particle: false, sense_retenu: "agir", position: 35 }
    ],
    words: [
      // qwl pos=2
      {
        word_key: "qwl", position: 2, sense_chosen: "dire",
        analysis_axes: {
          sense_chosen: "dire",
          concept_chosen: "Parole/Énonciation",
          concepts: {
            "Parole/Énonciation": {
              status: "retenu",
              senses: ["dire", "parler", "parole", "discours", "affirmer"],
              proof_ctx: "Le verbe taquluna est un inaccompli 2MP de la forme I de la racine q-w-l. Le Lane's donne : dire, parler, affirmer, enoncer. L'inaccompli indique que l'affirmation est en cours ou habituelle — ils disent et repetent cette pretention. La particule am (ou bien) lie ce verset au precedent comme une alternative : non seulement ils disputent, mais en plus ils pretendent que les patriarches etaient juifs ou chretiens.",
              axe1_verset: "Le verbe taquluna introduit la pretention des interlocuteurs : ils affirment que les patriarches etaient juifs ou chretiens. Le champ lexical du verset oppose la parole humaine (dites-vous, dis) au savoir divin (Dieu est plus savant). La parole humaine qui pretend sans savoir est mise en face du savoir de Dieu qui connait la verite. Le verset reproche de dire ce qu'on ne sait pas.",
              axe2_voisins: "Le verset 139 ordonnait « dis » pour repondre a la dispute. Le verset 140 introduit un nouveau « dites-vous » pour une nouvelle pretention. Le verset 141 conclura par « on ne vous demande pas de comptes pour ce qu'ils faisaient ». Les versets 139-141 forment un bloc : dispute (139), pretention (140), conclusion (141).",
              axe3_sourate: "La racine q-w-l est la plus frequente de la sourate al-Baqarah — les dialogues et les « dis » structurent toute la sourate. En 2:80, « ils disent : le Feu ne nous touchera que quelques jours ». En 2:111, « ils disent : nul n'entrera au Paradis sauf... ». La sourate rapporte les pretentions des groupes et y repond systematiquement par « dis ».",
              axe4_coherence: "La racine q-w-l apparait plus de 1700 fois dans le Coran. Le schema « am taquluna » (ou bien dites-vous) est un procede rhetorique qui denonce une pretention infondee. Le Coran oppose regulierement ce que les gens disent a ce que Dieu sait.",
              axe5_frequence: "Pour la mission du khalifa, la parole engage. Dire ce qu'on ne sait pas est une injustice. Le khalifa doit mesurer ses paroles et ne pas pretendre ce qu'il ne sait pas. La parole est un acte — elle cree des realites et des responsabilites."
            },
            "Pensée/Avis": {
              status: "nul",
              senses: ["opinion", "avis", "doctrine"],
              proof_ctx: "Le contexte est une parole prononcee (taquluna = vous dites), pas un avis interieur."
            }
          }
        }
      },
      // brh pos=4
      {
        word_key: "brh", position: 4, sense_chosen: "Abraham",
        analysis_axes: {
          sense_chosen: "Abraham",
          concept_chosen: "Preuve/Piété",
          concepts: {
            "Preuve/Piété": {
              status: "retenu",
              senses: ["prouver", "etre pieux", "bonte"],
              proof_ctx: "Le nom Ibrahima est le nom propre du patriarche Abraham. La racine b-r-h dans le Lane's donne : preuve claire (burhan), piete (birr). Le nom Abraham est un nom etranger arabise qui ne se decline pas normalement — il prend le fatha a la place de la kasra au genitif. Abraham est le patriarche commun aux trois religions monotheistes. Le verset demande : pretendez-vous qu'il etait juif ou chretien ? La reponse implicite est non — il etait anterieur a ces denominations.",
              axe1_verset: "Le nom Ibrahima ouvre la liste des patriarches dont les interlocuteurs pretendent qu'ils etaient juifs ou chretiens. Abraham est le premier nomme car il est le fondateur — tous les autres descendent de lui. Le champ lexical (Abraham, Ismael, Isaac, Jacob, tribus) forme une genealogie complete. La question du verset est : ces patriarches appartenaient-ils a une denomination particuliere ? La reponse est qu'ils etaient anterieurs a ces denominations.",
              axe2_voisins: "Le verset 130 demandait « qui se detournerait de la religion d'Abraham sinon celui qui se rend insense ? ». Le verset 135 ordonnait : « suivez la religion d'Abraham ». Le verset 140 poursuit : pretendez-vous qu'Abraham etait juif ou chretien ? L'ensemble montre que la religion d'Abraham est anterieure et superieure aux denominations — elle est le monotheisme pur (hanifiyya).",
              axe3_sourate: "Abraham est mentionne environ 15 fois dans la sourate al-Baqarah. Il est le modele de la soumission (2:131), le batisseur de la Ka'ba (2:127), le pere du monotheisme (2:135). La sourate fait d'Abraham le point de reference qui transcende les appartenances communautaires. Revendiquer Abraham pour une seule communaute est contraire au message de la sourate.",
              axe4_coherence: "Le nom Ibrahim/Abraham apparait 69 fois dans le Coran. En 3:65-67, « Abraham n'etait ni juif ni chretien mais il etait un pur monotheiste (hanif) soumis (muslim) ». Le Coran repond explicitement a la question posee en 2:140 — Abraham n'appartenait a aucune denomination posterieure a lui.",
              axe5_frequence: "Pour la mission du khalifa, Abraham est le modele de la mission. Sa soumission a Dieu etait pure, sans etiquette communautaire. Le khalifa suit l'exemple d'Abraham en se devouant exclusivement a Dieu, sans s'enfermer dans une denomination. Abraham est le hanif — celui qui s'incline vers la verite pure."
            }
          }
        }
      },
      // sme pos=6
      {
        word_key: "sme", position: 6, sense_chosen: "Ismael",
        analysis_axes: {
          sense_chosen: "Ismael",
          concept_chosen: "Audition/Écoute",
          concepts: {
            "Audition/Écoute": {
              status: "retenu",
              senses: ["entendre", "ecouter", "ouie", "obeir", "exaucer"],
              proof_ctx: "Le nom Isma'ila est le nom propre du fils d'Abraham. La racine s-m-' dans le Lane's donne : entendre, ecouter, obeir. Le nom Ismael signifie etymologiquement « Dieu a entendu » — il porte en lui le sens de l'exaucement divin. Comme nom propre, il designe le fils aine d'Abraham par Hagar, ancetre des Arabes. Le verset l'inclut dans la liste des patriarches qui ne peuvent etre revendiques par une seule communaute.",
              axe1_verset: "Le nom Isma'ila est le deuxieme dans la genealogie apres Abraham. L'ordre est significatif : Abraham (le pere), Ismael (le fils par Hagar), Isaac (le fils par Sarah), Jacob (le petit-fils). Le verset cite les deux lignees — celle d'Ismael (les Arabes) et celle d'Isaac/Jacob (les Israelites) — pour montrer que les patriarches des deux lignees sont anterieurs aux denominations juive et chretienne.",
              axe2_voisins: "Le verset 127 rapportait qu'Abraham et Ismael elevaient les fondations de la Maison (Ka'ba). Le verset 133 rapportait la question de Jacob a ses fils. Le verset 136 ordonnait de croire en ce qui a ete revele a Abraham, Ismael, Isaac et Jacob. Le verset 140 utilise la meme liste pour refuter la pretention de s'approprier ces patriarches.",
              axe3_sourate: "Ismael est mentionne 5 fois dans la sourate al-Baqarah, toujours associe a Abraham. En 2:125, la Maison est un lieu de rassemblement et de surete. En 2:127, Abraham et Ismael elevent les fondations. En 2:133, Ismael est dans la liste des ancetres. La sourate presente Ismael comme co-fondateur de la Ka'ba avec Abraham, ce qui lie les Arabes au monotheisme originel.",
              axe4_coherence: "Le nom Ismael apparait 12 fois dans le Coran. En 6:86, il est cite parmi les prophetes. En 19:54, « il etait fidele a sa promesse, il etait un envoye, un prophete ». Le Coran eleve Ismael au rang de prophete — il n'est pas un simple ancetre tribal mais un porteur de la mission divine.",
              axe5_frequence: "Pour la mission du khalifa, Ismael est un modele d'obeissance. Son nom meme porte le sens de l'ecoute divine — Dieu a entendu. Le khalifa ecoute Dieu comme Ismael a ecoute son pere Abraham quand il lui a demande le sacrifice. L'ecoute est le fondement de la mission."
            },
            "Renommée/Bruit": {
              status: "nul",
              senses: ["reputation", "bruit", "faire entendre"],
              proof_ctx: "Le mot est un nom propre, pas un nom commun de reputation ou de bruit."
            }
          }
        }
      },
      // shq pos=8 — Isaac (nom propre, racine s-h-q ecrasement mais nom propre ici)
      {
        word_key: "shq", position: 8, sense_chosen: "Isaac",
        analysis_axes: {
          sense_chosen: "Isaac",
          concept_chosen: "Écrasement/Pulvérisation",
          concepts: {
            "Écrasement/Pulvérisation": {
              status: "nul",
              senses: ["ecraser", "broyer", "pulveriser"],
              proof_ctx: "Le nom Ishaqa est le nom propre du fils d'Abraham par Sarah. La racine s-h-q dans le Lane's donne : ecraser, broyer. Mais le mot fonctionne exclusivement comme nom propre dans le Coran — le sens d'ecrasement n'est pas actif. Isaac est le troisieme patriarche cite dans la genealogie du verset. Le sens « ecraser » est completement hors contexte — il s'agit d'un nom propre."
            }
          }
        }
      },
      // eqb pos=10 — Jacob
      {
        word_key: "eqb", position: 10, sense_chosen: "Jacob",
        analysis_axes: {
          sense_chosen: "Jacob",
          concept_chosen: "Succession/Conséquence",
          concepts: {
            "Succession/Conséquence": {
              status: "retenu",
              senses: ["succeder", "venir apres", "consequence", "alternance"],
              proof_ctx: "Le nom Ya'quba est le nom propre du fils d'Isaac, aussi appele Israel. La racine '-q-b dans le Lane's donne : succeder, venir apres, suivre les traces. Le nom Ya'qub porte etymologiquement le sens de « celui qui vient apres » — il succede a Isaac. Comme nom propre, il designe le patriarche dont les douze fils sont les ancetres des tribus d'Israel. Le verset l'inclut dans la liste des patriarches anterieurs aux denominations.",
              axe1_verset: "Le nom Ya'quba est le quatrieme dans la genealogie : Abraham → Ismael/Isaac → Jacob. Apres Jacob viennent « les tribus » (al-asbat) — ses douze fils. Le verset construit une genealogie complete pour montrer que toute cette lignee est anterieure aux denominations juive et chretienne. La succession Abraham-Ismael-Isaac-Jacob-tribus est un arbre genealogique commun que personne ne peut s'approprier.",
              axe2_voisins: "Le verset 132 rapportait la recommandation d'Abraham et de Jacob a leurs fils. Le verset 133 rapportait la question de Jacob a ses fils au moment de la mort. Le verset 136 ordonnait de croire en ce qui a ete revele a tous ces patriarches. Le verset 140 enchaine : comment pretendre qu'ils etaient juifs ou chretiens alors que ces denominations sont posterieures a eux ?",
              axe3_sourate: "Jacob est mentionne 8 fois dans la sourate al-Baqarah, souvent associe a Abraham et Isaac. En 2:132, « Abraham et Jacob recommanderent a leurs fils ». En 2:133, Jacob demande a ses fils ce qu'ils adoreront apres lui. La sourate presente Jacob comme un maillon de la chaine prophetique qui transmet le monotheisme pur.",
              axe4_coherence: "Le nom Ya'qub apparait 16 fois dans le Coran. En 3:93, « toute nourriture etait licite aux enfants d'Israel sauf ce qu'Israel (Jacob) s'etait lui-meme interdit ». En 12:6, Jacob est le pere de Joseph. Le Coran presente Jacob comme un prophete et un patriarche dont la religion etait la soumission a Dieu — pas le judaisme au sens denomina­tionnel.",
              axe5_frequence: "Pour la mission du khalifa, Jacob represente la transmission de la mission. Il a recommande a ses fils de mourir en soumis a Dieu (2:132). Le khalifa transmet la mission a la generation suivante — la succession est au coeur de sa responsabilite."
            },
            "Talon/Arrière": {
              status: "nul",
              senses: ["frapper le talon", "talon"],
              proof_ctx: "Le mot est un nom propre, pas un terme anatomique. Le sens de talon est le sens concret de la racine mais n'est pas actif dans ce contexte."
            },
            "Châtiment/Rétribution": {
              status: "nul",
              senses: ["punir", "chatiment"],
              proof_ctx: "Le mot est un nom propre, pas un terme de chatiment."
            },
            "Descendance": {
              status: "nul",
              senses: ["descendance", "posterite"],
              proof_ctx: "Le mot est un nom propre. Le sens de descendance est actif etymologiquement (Jacob est le successeur d'Isaac) mais le mot fonctionne comme nom propre."
            }
          }
        }
      },
      // sbt pos=12 — les tribus
      {
        word_key: "sbt", position: 12, sense_chosen: "tribus",
        analysis_axes: {
          sense_chosen: "tribus",
          concept_chosen: "Repos sacré/Jour saint",
          concepts: {
            "Repos sacré/Jour saint": {
              status: "retenu",
              senses: ["sabbat", "samedi", "repos"],
              proof_ctx: "Le mot al-asbata est un pluriel de sibt de la racine s-b-t. Le Lane's donne pour sibt : petit-fils, tribu, branche d'un peuple. Le sabbat (jour de repos) et le sibt (tribu/petit-fils) partagent la meme racine. Les asbat dans le contexte coranique designent les douze tribus d'Israel, les descendants de Jacob par ses douze fils. L'article defini al- (les) montre qu'il s'agit d'un groupe connu et specifique. Le sens de « sabbat/repos » est dans la meme racine mais n'est pas le sens actif ici — le contexte est genealogique.",
              axe1_verset: "Le mot al-asbata ferme la liste genealogique : Abraham, Ismael, Isaac, Jacob et les tribus. Les tribus sont la descendance collective de Jacob — les douze fils qui ont donne naissance aux douze tribus d'Israel. Le verset demande : ces ancetres etaient-ils juifs ou chretiens ? La reponse est non — le judaisme comme denomination est posterieur a Jacob et a ses tribus.",
              axe2_voisins: "Le verset 136 ordonnait « dites : nous croyons en ce qui a ete revele a Abraham, Ismael, Isaac, Jacob et les tribus ». Le verset 140 reprend la meme liste pour poser la question rhetorique. Les deux versets ont la meme structure genealogique — les patriarches et les tribus comme heritage commun, pas comme propriete d'une denomination.",
              axe3_sourate: "Le mot al-asbat apparait 3 fois dans la sourate al-Baqarah (2:136, 2:140 deux fois implicitement). Chaque occurrence l'associe aux patriarches comme partie de la chaine prophetique. La sourate presente les tribus comme les destinataires de la revelation antérieure — pas comme une denomination mais comme des branches d'un meme arbre.",
              axe4_coherence: "Le mot al-asbat apparait 5 fois dans le Coran. En 4:163, « Nous avons revele a Abraham, Ismael, Isaac, Jacob et les tribus ». En 7:160, Dieu divise les enfants d'Israel en douze tribus (asbatan). Le Coran presente les tribus comme des unites genealogiques qui ont recu la revelation — elles ne sont pas definies par une denomination mais par leur descendance et leur reception de la revelation.",
              axe5_frequence: "Pour la mission du khalifa, les tribus representent la diversite dans l'unite. Les douze fils de Jacob forment des tribus differentes mais partagent le meme ancetre et la meme mission. Le khalifa reconnait cette diversite sans la reduire a une denomination unique."
            }
          }
        }
      },
      // kwn pos=13 — etaient
      {
        word_key: "kwn", position: 13, sense_chosen: "etre",
        analysis_axes: {
          sense_chosen: "etre",
          concept_chosen: "Être/Existence",
          concepts: {
            "Être/Existence": {
              status: "retenu",
              senses: ["etre (verbe incomplet)", "venir a l'existence"],
              proof_ctx: "Le verbe kanu est un accompli 3MP de la racine k-w-n. Le Lane's donne : etre, exister. Kana incomplet est suivi d'un attribut et sert de support grammatical qui porte le temps passe. Ici kanu hudan (ils etaient des juifs) — kana porte le temps (passe) et hudan est l'attribut. Le verbe est ici purement grammatical — il n'exprime pas une venue a l'existence mais un etat passe attribue aux patriarches par les interlocuteurs.",
              axe1_verset: "Le verbe kanu est le pivot de la pretention : « ils etaient (kanu) des juifs ou des chretiens ». C'est le verbe qui porte l'accusation — les interlocuteurs attribuent aux patriarches une identite religieuse posterieure. La question rhetorique du verset denonce cette attribution anachronique. Le verbe etre au passe marque la pretention de projeter une realite presente sur le passe.",
              axe2_voisins: "Le verset 133 utilisait kana au singulier : « etiez-vous presents quand la mort se presenta a Jacob ? ». Le verset 140 utilise kanu au pluriel : « ils etaient des juifs ». Les deux versets utilisent kana pour interroger le passe — en 133 c'est un reproche (vous n'etiez pas la), en 140 c'est une denonciation (ils n'etaient pas ce que vous pretendez).",
              axe3_sourate: "Le verbe kana est un des plus frequents de la sourate al-Baqarah. Il porte le temps dans de nombreuses constructions. En 2:134, « c'etait un peuple qui a passe ». En 2:143, « Dieu n'allait pas (ma kana) faire perdre votre foi ». Le verbe kana structure le recit coranique en situant les evenements dans le temps.",
              axe4_coherence: "Le verbe kana apparait environ 1400 fois dans le Coran. C'est le verbe le plus courant pour situer un etat dans le passe. La construction kanu + attribut est standard pour decrire ce que quelqu'un etait — ici le Coran l'utilise dans une question rhetorique pour nier la pretention.",
              axe5_frequence: "Pour la mission du khalifa, le verbe etre au passe rappelle que les identites religieuses sont historiquement situees. Le khalifa ne projette pas les realites presentes sur le passe — il reconnait que les patriarches etaient soumis a Dieu avant les denominations. La mission transcende les etiquettes historiques."
            },
            "Humilité/Soumission": {
              status: "nul",
              senses: ["etre humble soumis"],
              proof_ctx: "Le verbe kana est ici un verbe incomplet suivi d'un attribut, pas un verbe de soumission."
            },
            "Lieu/État": {
              status: "nul",
              senses: ["lieu", "reste a ta place", "etat condition", "motif raison", "devenir comme"],
              proof_ctx: "Le verbe kana est ici incomplet — il porte le temps, pas un lieu ou un etat specifique."
            }
          }
        }
      },
      // hwd pos=14 — juifs
      {
        word_key: "hwd", position: 14, sense_chosen: "juifs",
        analysis_axes: {
          sense_chosen: "juifs",
          concept_chosen: "Judaïsme/Retour",
          concepts: {
            "Judaïsme/Retour": {
              status: "retenu",
              senses: ["juifs", "retourner", "prophete Hud"],
              proof_ctx: "Le mot hudan est un accusatif indefini de la racine h-w-d. Le Lane's donne : les juifs (yahud/hud), ceux qui sont revenus a Dieu (hada = retourner). L'accusatif indefini marque l'attribut de kana : « ils etaient des juifs ». Le mot hudan sans article designe une categorie : « des juifs » (pas « les juifs »). La racine porte le double sens de judaisme et de retour — les juifs sont etymologiquement « ceux qui retournent a Dieu ».",
              axe1_verset: "Le mot hudan est le premier terme de l'alternative : juifs ou chretiens. Le verset demande si les patriarches etaient des juifs — c'est-a-dire s'ils appartenaient a la denomination juive. La reponse implicite est non : le judaisme comme denomination est posterieur a Abraham, Isaac et Jacob. Les patriarches etaient soumis a Dieu (muslim) avant que le mot « juif » n'existe comme etiquette communautaire.",
              axe2_voisins: "Le verset 135 disait « soyez juifs ou chretiens, vous serez guides ». Le verset 140 enchaine : pretendez-vous que les patriarches etaient juifs ou chretiens ? Les versets 135-140 forment un bloc qui denonce la pretention de chaque groupe a s'approprier les patriarches. La reponse est que les patriarches n'etaient ni juifs ni chretiens mais hanif (monotheistes purs).",
              axe3_sourate: "La racine h-w-d apparait 10 fois dans la sourate al-Baqarah. En 2:62, « ceux qui ont cru, les juifs (alladhina hadu), les chretiens ». En 2:111, « nul n'entrera au Paradis sauf juif ou chretien ». La sourate met en scene les pretentions des juifs et des chretiens et y repond par le critere de la foi et des actes, pas de l'etiquette.",
              axe4_coherence: "La racine h-w-d apparait environ 26 fois dans le Coran. En 3:67, « Abraham n'etait ni juif ni chretien ». Le Coran repond explicitement a la pretention du verset 2:140 : les patriarches n'etaient pas juifs. Le judaisme est une denomination posterieure a eux.",
              axe5_frequence: "Pour la mission du khalifa, l'etiquette « juif » ou « chretien » ne definit pas la verite de la mission. Le khalifa reconnait que la verite est dans la soumission a Dieu, pas dans l'appartenance a une denomination. Les etiquettes sont posterieures a la verite originelle."
            }
          }
        }
      },
      // nsr pos=16 — chretiens
      {
        word_key: "nsr", position: 16, sense_chosen: "chretiens",
        analysis_axes: {
          sense_chosen: "chretiens",
          concept_chosen: "Secours/Victoire",
          concepts: {
            "Secours/Victoire": {
              status: "retenu",
              senses: ["secourir", "aider", "victoire", "defendre"],
              proof_ctx: "Le mot nasara est un pluriel de la racine n-s-r. Le Lane's donne : secourir, aider, defendre. Les nasara (chretiens) tirent leur nom soit de Nazareth (ville de Jesus), soit du verbe nasara (aider) — les auxiliaires de Jesus (ansar 'Isa). En 3:52, Jesus demande « qui sont mes auxiliaires (ansari) vers Dieu ? ». Les disciples repondent « nous sommes les auxiliaires de Dieu (ansar Allah) ». Les chretiens sont etymologiquement « ceux qui aident » ou « de Nazareth ».",
              axe1_verset: "Le mot nasara est le deuxieme terme de l'alternative : juifs ou chretiens. Le verset demande si les patriarches etaient chretiens — c'est-a-dire s'ils appartenaient a la denomination chretienne. La reponse est evidemment non : le christianisme est posterieur a Jesus, qui est lui-meme posterieur a Abraham, Isaac et Jacob de plusieurs siecles. L'anachronisme est encore plus flagrant que pour le judaisme.",
              axe2_voisins: "Le verset 135 posait la meme alternative : « soyez juifs ou chretiens ». Le verset 140 la reprend dans la question rhetorique. L'ensemble des versets 135-140 montre que les deux denominations pretendent au monopole de la verite et des patriarches, mais les patriarches sont anterieurs aux deux.",
              axe3_sourate: "Le mot nasara apparait 6 fois dans la sourate al-Baqarah. En 2:62, les chretiens sont mentionnes avec les juifs et les sabeens. En 2:111, « les juifs et les chretiens disent : nul n'entrera au Paradis sauf nous ». En 2:113, « les juifs disent que les chretiens n'ont rien, et les chretiens disent que les juifs n'ont rien ». La sourate montre les pretentions croisees des deux groupes.",
              axe4_coherence: "La racine n-s-r apparait environ 160 fois dans le Coran. En 5:14, Dieu prit l'engagement de ceux qui disent « nous sommes chretiens » mais ils ont oublie une partie du rappel. En 22:40, Dieu defend ceux qui ont ete expulses. Le sens de secours est le sens premier de la racine — les chretiens sont ceux qui ont aide/secouru la cause de Jesus.",
              axe5_frequence: "Pour la mission du khalifa, le christianisme comme denomination est une realite historique que le khalifa respecte mais ne considere pas comme la religion originelle. La religion originelle est la soumission a Dieu (islam au sens premier), pas une denomination posterieure. Le khalifa aide la verite la ou il la trouve, quel que soit le nom qu'on lui donne."
            },
            "Alliance/Soutien": {
              status: "nul",
              senses: ["partisan"],
              proof_ctx: "Le mot nasara designe ici les chretiens comme groupe religieux, pas des partisans au sens general."
            }
          }
        }
      },
      // qwl pos=17 — dis (imperatif)
      {
        word_key: "qwl", position: 17, sense_chosen: "dire",
        analysis_axes: {
          sense_chosen: "dire",
          concept_chosen: "Parole/Énonciation",
          concepts: {
            "Parole/Énonciation": {
              status: "retenu",
              senses: ["dire", "parler", "parole", "discours", "affirmer"],
              proof_ctx: "Le verbe qul est un imperatif 2MS de la forme I de la racine q-w-l. Le Lane's donne : dire, parler. C'est le deuxieme « dis » du passage (apres celui de 2:139). L'imperatif marque un ordre divin au Prophete de repondre. La reponse est une question rhetorique devastatrice : « est-ce vous les plus savants ou Dieu ? ».",
              axe1_verset: "Le mot qul separe la pretention des interlocuteurs de la reponse divine. La structure est : am taquluna... qul... — « ou bien dites-vous... dis... ». Le « dis » est l'arme rhetorique du Coran — il ordonne au Prophete de repondre par une question qui rend la pretention absurde. La question « est-ce vous les plus savants ou Dieu » ne laisse pas de place a la replique.",
              axe2_voisins: "Le verset 139 contenait deja un « qul » (dis). Le verset 140 en contient un deuxieme. Les deux « dis » forment une paire de reponses : en 139, la reponse porte sur la dispute (Dieu est notre seigneur et le votre) ; en 140, la reponse porte sur la pretention (Dieu est plus savant que vous).",
              axe3_sourate: "Le mot qul (dis) est un des mots les plus frequents de la sourate al-Baqarah. En 2:80, 2:91, 2:111, 2:135, 2:139, 2:140, 2:142 — chaque fois, Dieu ordonne au Prophete de repondre aux pretentions. Le qul est le moyen par lequel la revelation corrige les erreurs.",
              axe4_coherence: "L'imperatif qul apparait 332 fois dans le Coran. C'est le mot le plus frequent apres le nom de Dieu. Le Coran est fondamentalement un « dis » — un message que le Prophete doit transmettre. Chaque qul est une instruction divine de communiquer une verite aux interlocuteurs.",
              axe5_frequence: "Pour la mission du khalifa, le « dis » est un rappel que la verite doit etre communiquee. Le khalifa ne garde pas la verite pour lui — il la transmet quand Dieu l'ordonne. Le « dis » est l'acte fondamental de la mission prophetique que le khalifa doit perpetuer."
            },
            "Pensée/Avis": {
              status: "nul",
              senses: ["opinion", "avis", "doctrine"],
              proof_ctx: "Le mot est un imperatif verbal (dis !), pas un nom d'opinion."
            }
          }
        }
      },
      // elm pos=20 — les plus savants
      {
        word_key: "elm", position: 20, sense_chosen: "le plus savant",
        analysis_axes: {
          sense_chosen: "le plus savant",
          concept_chosen: "Savoir/Connaissance",
          concepts: {
            "Savoir/Connaissance": {
              status: "retenu",
              senses: ["savoir", "connaitre", "etre informe", "certitude", "savant", "science", "enseignement"],
              proof_ctx: "Le mot a'lamu est un elatif (comparatif/superlatif) de la racine '-l-m. Le Lane's donne : savoir, connaitre, etre informe. A'lamu signifie « le plus savant » — c'est le degre le plus eleve du savoir. La question rhetorique « est-ce vous les plus savants ou Dieu ? » oppose le savoir pretentieux des humains au savoir absolu de Dieu. La reponse est evidente : Dieu est le plus savant. Les humains pretendent savoir ce qu'etaient les patriarches, mais seul Dieu le sait vraiment.",
              axe1_verset: "Le mot a'lamu est le pivot de la question rhetorique qui constitue la reponse. La structure est : « est-ce VOUS les plus savants, ou bien DIEU ? ». L'elatif marque le superlatif — il n'y a pas de degre intermediaire. Le champ lexical du verset oppose la pretention (dites-vous, ils etaient) et le savoir (les plus savants, Dieu). La pretention sans savoir est injustice — d'ou la question suivante sur l'injustice de cacher un temoignage.",
              axe2_voisins: "Le verset 139 posait la question de la dispute au sujet de Dieu. Le verset 140 repond par une autre question : si vous disputez, est-ce vous ou Dieu qui savez ? Le verset 141 conclura par la responsabilite individuelle. Le savoir divin tranche les disputes — les pretentions humaines sont vaines face au savoir de Dieu.",
              axe3_sourate: "La racine '-l-m est une des plus frequentes de la sourate al-Baqarah. En 2:30, « Je sais ce que vous ne savez pas ». En 2:77, « ne savent-ils pas que Dieu sait ce qu'ils cachent ? ». La sourate oppose systematiquement le savoir divin (total, absolu) au savoir humain (partiel, pretentieux). Le verset 140 s'inscrit dans cette opposition.",
              axe4_coherence: "La racine '-l-m apparait environ 854 fois dans le Coran. L'expression « Allahu a'lam » (Dieu sait mieux) est une formule recurrente qui rappelle la superiorite du savoir divin. En 2:140, la question rhetorique utilise cette superiorite pour denoncer la pretention humaine.",
              axe5_frequence: "Pour la mission du khalifa, le savoir est un outil de la mission mais un outil limite. Le khalifa reconnait que Dieu sait mieux — il ne pretend pas detenir la verite absolue. La question « est-ce vous les plus savants ou Dieu ? » est un rappel permanent d'humilite epistemique."
            },
            "Marque/Signe": {
              status: "nul",
              senses: ["marquer", "signe", "drapeau"],
              proof_ctx: "Le mot est un elatif (comparatif) de savoir, pas un nom de signe ou de marque."
            }
          }
        }
      },
      // zlm pos=24 — plus injuste
      {
        word_key: "zlm", position: 24, sense_chosen: "le plus injuste",
        analysis_axes: {
          sense_chosen: "le plus injuste",
          concept_chosen: "Injustice/Oppression",
          concepts: {
            "Injustice/Oppression": {
              status: "retenu",
              senses: ["opprimer", "etre injuste", "injustice", "oppresseur"],
              proof_ctx: "Le mot azlamu est un elatif de la racine z-l-m. Le Lane's donne : opprimer, etre injuste, placer quelque chose hors de sa place. Azlamu signifie « le plus injuste ». La question rhetorique « qui est plus injuste que celui qui cache un temoignage ? » est une formule coranique qui designe le sommet de l'injustice. Cacher un temoignage de Dieu est l'acte le plus injuste parce qu'il prive les gens de la verite divine.",
              axe1_verset: "Le mot azlamu ouvre la deuxieme partie du verset — apres la question sur le savoir (qui sait mieux ?) vient la question sur l'injustice (qui est plus injuste ?). Le champ lexical passe du savoir a la justice : pretendre ce qu'on ne sait pas est une injustice, mais cacher ce qu'on sait est pire. L'injustice supreme est de detenir un temoignage de Dieu et de le cacher volontairement.",
              axe2_voisins: "Le verset 139 parlait de la dispute au sujet de Dieu. Le verset 140 passe a l'injustice de cacher la verite. Les versets 139-140 montrent deux degres : disputer sans savoir (139) et cacher en sachant (140). Cacher est pire que disputer car c'est une falsification deliberee.",
              axe3_sourate: "La formule « wa man azlamu min man... » (qui est plus injuste que celui qui...) apparait 4 fois dans la sourate al-Baqarah. En 2:114, « qui est plus injuste que celui qui empeche les mosquees de Dieu ». En 2:140, cacher un temoignage. La sourate utilise cette formule pour designer les sommets de l'injustice.",
              axe4_coherence: "La racine z-l-m apparait environ 315 fois dans le Coran. La formule « wa man azlamu » apparait 12 fois dans le Coran. En 6:21, « qui est plus injuste que celui qui forge un mensonge contre Dieu ». En 10:17, meme formule. Le Coran identifie systematiquement les actes les plus injustes : mentir contre Dieu, cacher Sa verite, empecher Ses mosquees.",
              axe5_frequence: "Pour la mission du khalifa, l'injustice supreme est de cacher la verite de Dieu. Le khalifa doit transmettre le temoignage divin, pas le cacher. Cacher ce qu'on sait de Dieu est le contraire de la mission — c'est la trahison de la mission."
            },
            "Obscurité/Ténèbres": {
              status: "probable",
              senses: ["obscurite", "tenebres"],
              proof_ctx: "Le sens d'obscurite est le sens physique de la racine z-l-m — les tenebres. Le lien avec l'injustice est etymologique : l'injustice est une obscurite qui empeche de voir la verite. Le contexte est l'injustice morale, pas les tenebres physiques, mais le lien est significatif."
            }
          }
        }
      },
      // ktm pos=26 — a cache
      {
        word_key: "ktm", position: 26, sense_chosen: "cacher",
        analysis_axes: {
          sense_chosen: "cacher",
          concept_chosen: "Dissimulation/Secret",
          concepts: {
            "Dissimulation/Secret": {
              status: "retenu",
              senses: ["cacher", "taire", "dissimuler", "garder secret"],
              proof_ctx: "Le verbe katama est un accompli 3MS de la forme I de la racine k-t-m. Le Lane's donne : cacher, taire, dissimuler, garder secret volontairement. L'accompli indique que l'acte de cacher a eu lieu — c'est un fait accompli. Le verbe est transitif : il a cache quelque chose (un temoignage). La dissimulation est volontaire et deliberee — c'est un choix de soustraire la verite a ceux qui ont le droit de la connaitre.",
              axe1_verset: "Le verbe katama est le coeur de l'accusation : cacher un temoignage de Dieu est l'acte le plus injuste. Le champ lexical (injuste, cacher, temoignage, Dieu) construit l'accusation complete : l'injustice est de cacher, l'objet cache est un temoignage, la source du temoignage est Dieu. Le verset lie la dissimulation a l'injustice supreme — cacher la verite divine est le pire des actes.",
              axe2_voisins: "Le verset 42 ordonnait « ne melangez pas le vrai avec le faux et ne cachez pas (taktumu) la verite alors que vous savez ». Le verset 140 reprend le meme theme : cacher un temoignage de Dieu. Le verset 146 dira « ceux a qui Nous avons donne le Livre le connaissent comme ils connaissent leurs fils ». Les versets du passage montrent que la connaissance existe mais qu'elle est cachee deliberement.",
              axe3_sourate: "La racine k-t-m apparait 6 fois dans la sourate al-Baqarah (2:33, 2:42, 2:140, 2:146, 2:159, 2:174). Chaque occurrence porte sur la dissimulation de la verite divine. En 2:159, « ceux qui cachent les preuves que Nous avons revelees — ceux-la, Dieu les maudit ». La sourate condamne sans ambiguite la dissimulation de la verite revelee.",
              axe4_coherence: "La racine k-t-m apparait environ 19 fois dans le Coran. En 2:283, « ne cachez pas le temoignage ». En 3:71, « pourquoi melez-vous le vrai au faux et cachez-vous la verite alors que vous savez ? ». Le Coran condamne systematiquement la dissimulation de la verite — c'est un peche majeur car il prive les gens de la guidance.",
              axe5_frequence: "Pour la mission du khalifa, cacher la verite est la negation de la mission. Le khalifa est celui qui transmet, pas celui qui cache. Detenir un temoignage de Dieu et le cacher est le contraire exact de la mission prophetique. La transparence est un devoir de la mission."
            }
          }
        }
      },
      // shhd pos=27 — temoignage
      {
        word_key: "shhd", position: 27, sense_chosen: "temoignage",
        analysis_axes: {
          sense_chosen: "temoignage",
          concept_chosen: "Témoignage/Présence",
          concepts: {
            "Témoignage/Présence": {
              status: "retenu",
              senses: ["temoigner", "voir", "etre present", "faire temoigner", "attester", "martyr"],
              proof_ctx: "Le nom shahadatan est un accusatif indefini feminin de la racine sh-h-d. Le Lane's donne : temoignage, attestation, ce qu'on a vu et qu'on rapporte. Le temoignage est un acte directionnel — il sort du temoin et atteint ceux qui ecoutent. L'indefini (shahadatan, sans article) marque qu'il s'agit d'un temoignage parmi d'autres — un temoignage specifique qu'ils detiennent de Dieu. Le temoignage est fonde sur la connaissance directe — ils savent que les patriarches n'etaient ni juifs ni chretiens mais ils cachent cette connaissance.",
              axe1_verset: "Le mot shahadatan est l'objet du verbe katama (cacher) — ils ont cache un temoignage. Le champ lexical (injuste, cacher, temoignage, aupres de lui, de Dieu) montre la gravite de l'acte : le temoignage vient de Dieu, il est en leur possession, et ils le cachent. La chaine est : Dieu → temoignage → detenteur → dissimulation. Chaque maillon aggrave l'injustice — plus la source est haute et plus la dissimulation est grave.",
              axe2_voisins: "Le verset 143 parlera de la communaute temoin (shuhadaa') — la communaute du milieu qui temoigne pour les gens. Le verset 140 montre le contraire : ceux qui cachent le temoignage au lieu de le porter. Les deux versets s'opposent : le bon temoin temoigne, le mauvais temoin cache.",
              axe3_sourate: "La racine sh-h-d apparait environ 20 fois dans la sourate al-Baqarah. En 2:143, la communaute est « temoin pour les gens ». En 2:185, ceux qui « sont temoins du mois (de Ramadan) doivent le jeuner ». En 2:282, « faites temoigner deux temoins ». La sourate insiste sur le temoignage comme devoir — cacher le temoignage est le contraire du devoir.",
              axe4_coherence: "La racine sh-h-d apparait environ 160 fois dans le Coran. En 2:283, « ne cachez pas le temoignage — celui qui le cache a le coeur coupable ». En 5:106, « temoignage entre vous quand la mort se presente ». Le temoignage est un pilier de la justice coranique — le cacher est un acte de corruption.",
              axe5_frequence: "Pour la mission du khalifa, le temoignage est le contenu de la mission. Le khalifa temoigne de la verite de Dieu devant les gens. Cacher le temoignage est la trahison ultime de la mission. Le khalifa est shahid (temoin) — il porte la verite et la transmet."
            }
          }
        }
      },
      // end pos=28 — aupres de lui
      {
        word_key: "end", position: 28, sense_chosen: "aupres de",
        analysis_axes: {
          sense_chosen: "aupres de",
          concept_chosen: "Proximité/Présence",
          concepts: {
            "Proximité/Présence": {
              status: "retenu",
              senses: ["aupres de", "chez", "pres de"],
              proof_ctx: "Le mot 'indahu est une preposition de la racine '-n-d avec pronom suffixe 3MS (hu = lui). Le Lane's donne : aupres de, chez, en la possession de. « Shahadatan 'indahu min Allahi » signifie « un temoignage qui est aupres de lui (en sa possession) et qui vient de Dieu ». Le mot 'inda marque la detention — le temoignage est chez lui, il le possede. Le pronom « hu » renvoie a « celui qui cache » — le dissimulateur detient le temoignage.",
              axe1_verset: "Le mot 'indahu situe le temoignage — il est en la possession du dissimulateur. Le champ lexical (cacher, temoignage, aupres de lui, de Dieu) montre que le dissimulateur a le temoignage CHEZ LUI — il ne l'ignore pas, il le connait et le cache. La detention aggrave la responsabilite : on ne peut cacher que ce qu'on possede. Le temoignage est « aupres de lui » ET « de Dieu » — double provenance qui double la gravite.",
              axe2_voisins: "Le verset 101 utilisait « min 'indi Allahi » (de chez Dieu) pour l'envoye. Le verset 140 utilise « 'indahu min Allahi » (aupres de lui de la part de Dieu) pour le temoignage. Les deux structures montrent que ce qui vient de chez Dieu a une autorite supreme — le rejeter ou le cacher est l'injustice supreme.",
              axe3_sourate: "La preposition 'inda apparait frequemment dans la sourate al-Baqarah. En 2:54, « c'est mieux aupres de votre Createur ». En 2:110, « vous trouverez aupres de Dieu ». Ce qui est « aupres de Dieu » a la plus haute valeur. Le temoignage qui est « aupres de lui de la part de Dieu » combine la detention humaine et l'origine divine.",
              axe4_coherence: "La racine '-n-d apparait environ 200 fois dans le Coran. L'expression « 'indahu » (aupres de lui, chez lui) marque la possession ou la proximite. En 2:140, elle marque que le dissimulateur possede le temoignage — il n'a pas l'excuse de l'ignorance.",
              axe5_frequence: "Pour la mission du khalifa, ce qui est « aupres de Dieu » est le fondement de la mission. Le khalifa porte un temoignage qui vient de Dieu — le cacher serait trahir la mission. La detention du temoignage cree la responsabilite de le transmettre."
            },
            "Opinion/Jugement": {
              status: "nul",
              senses: ["selon"],
              proof_ctx: "Le contexte est la detention d'un temoignage (il est chez lui), pas une opinion personnelle."
            }
          }
        }
      },
      // ghf pos=33 — inattentif
      {
        word_key: "ghf", position: 33, sense_chosen: "inattentif",
        analysis_axes: {
          sense_chosen: "inattentif",
          concept_chosen: "Pardon/Couverture",
          concepts: {
            "Pardon/Couverture": {
              status: "nul",
              senses: ["pardonner", "effacer", "couvrir"],
              proof_ctx: "Le mot bighāfilin est un participe actif de la racine gh-f-l (pas gh-f-r). Le Lane's donne pour gh-f-l : etre inattentif, negliger, oublier. La racine gh-f-r (pardonner) est une racine differente. Ici le contexte est l'inattention : « Dieu n'est PAS inattentif a ce que vous faites ». La negation (ma... bi) nie l'inattention — Dieu est pleinement attentif a tous les actes. Le sens de pardon (gh-f-r) est hors sujet car la racine est gh-f-l (negliger)."
            },
            "Protection": {
              status: "nul",
              senses: ["casque"],
              proof_ctx: "Le mot est de la racine gh-f-l (negliger), pas un objet de protection. Le contexte est la vigilance divine."
            }
          }
        }
      },
      // emm pos=34 — ce que (preposition 'an + ma)
      {
        word_key: "emm", position: 34, sense_chosen: "ce que",
        analysis_axes: {
          sense_chosen: "ce que",
          concept_chosen: "Généralité/Parenté",
          concepts: {
            "Généralité/Parenté": {
              status: "nul",
              senses: ["etre general", "oncle paternel", "general"],
              proof_ctx: "Le mot 'amma est la contraction de la preposition 'an (de, au sujet de) et du pronom relatif ma (ce que). Le Lane's donne pour '-m-m : etre general, oncle paternel. Mais ici le mot n'est pas de la racine '-m-m — c'est une contraction preposition+pronom qui signifie « de ce que ». Le contexte est : « Dieu n'est pas inattentif de ce que ('amma) vous faites ». Le sens de generalite ou d'oncle paternel est hors sujet."
            }
          }
        }
      },
      // eml pos=35 — vous faites
      {
        word_key: "eml", position: 35, sense_chosen: "agir",
        analysis_axes: {
          sense_chosen: "agir",
          concept_chosen: "Action/Oeuvre",
          concepts: {
            "Action/Oeuvre": {
              status: "retenu",
              senses: ["travailler", "agir", "oeuvre", "acte", "ouvrier"],
              proof_ctx: "Le verbe ta'maluna est un inaccompli 2MP de la forme I de la racine '-m-l. Le Lane's donne : travailler, agir, faire. L'inaccompli indique que les actes sont en cours — « ce que vous faites » designe les actions presentes et continues. La meme racine apparait en 2:139 sous forme nominale (a'maluna/a'malukum = nos actes/vos actes). Le verset 140 reprend cette racine sous forme verbale pour fermer le verset par un avertissement : Dieu n'est pas inattentif a ce que vous FAITES.",
              axe1_verset: "Le verbe ta'maluna ferme le verset par un avertissement. La structure du verset est : pretention (dites-vous que...) → reponse (Dieu sait mieux) → accusation (qui est plus injuste que celui qui cache) → avertissement (Dieu n'est pas inattentif a ce que vous faites). L'avertissement final rappelle que tous les actes — y compris la dissimulation du temoignage — sont sous le regard de Dieu.",
              axe2_voisins: "Le verset 139 separait les actes : nos actes et vos actes. Le verset 140 avertit : Dieu n'est pas inattentif a VOS actes. Le « vos actes » du verset 139 (responsabilite individuelle) se transforme en « ce que vous faites » du verset 140 (surveillance divine). La responsabilite est double : individuelle (a chacun ses actes) et divine (Dieu surveille tous les actes).",
              axe3_sourate: "La formule « wa ma Allahu bighāfilin 'amma ta'maluna » (Dieu n'est pas inattentif a ce que vous faites) apparait plusieurs fois dans la sourate al-Baqarah. En 2:74, en 2:85, en 2:140, en 2:149. C'est un refrain d'avertissement qui ponctue les passages sur la desobeissance et l'injustice. La repetition souligne que rien n'echappe a Dieu.",
              axe4_coherence: "La formule « Dieu n'est pas inattentif a ce que vous faites » apparait environ 14 fois dans le Coran. C'est un des refrains les plus recurrents. En 11:123, « Dieu n'est pas inattentif a ce que vous faites ». Le refrain rappelle la surveillance divine permanente — chaque acte est enregistre et sera juge.",
              axe5_frequence: "Pour la mission du khalifa, l'avertissement est un rappel que chaque acte compte. Le khalifa sait que Dieu surveille ses actes — cette conscience est le moteur de l'integrite. La surveillance divine n'est pas une menace mais un cadre : elle garantit que la mission sera evaluee justement."
            },
            "Sens isolé/Gouverneur": {
              status: "nul",
              senses: ["gouverneur"],
              proof_ctx: "Le mot est un verbe (vous faites), pas un titre de gouverneur."
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

  const verseIds = [146, 147];
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
  console.log('=== PIPELINE SOURATE 2 — VERSETS 139-140 ===\n');
  await processVerse(139);
  await processVerse(140);
  await syncWordMeanings();
  console.log('\n=== PIPELINE V139-140 TERMINEE ===');
}

main().catch(e => console.error('FATAL:', e));
