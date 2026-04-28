const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// =====================================================
// PIPELINE SOURATE 2 — AL-BAQARAH — VERSETS 41 À 43
// verse_id=48 (2:41), verse_id=49 (2:42), verse_id=50 (2:43)
// =====================================================

const verseData = {

  // =====================================================
  // VERSET 2:41
  // verse_id=48, analysis_id=407
  // Croyez en ce que J'ai fait descendre, confirmant ce qui est avec vous,
  // ne soyez pas les premiers a le recouvrir, ne vendez pas Mes signes
  // pour un prix derisoire, et prenez conscience de Moi.
  // =====================================================
  41: {
    verse_id: 48,
    analysis_id: 407,
    translation_arab: "Croyez en ce que J'ai fait descendre, confirmant ce qui est avec vous, ne soyez pas les premiers a le recouvrir, ne vendez pas Mes signes pour un prix derisoire, et c'est Moi dont vous devez vous premunir.",
    full_translation: "Et croyez a ce que J'ai fait descendre, en confirmation de ce qui est avec vous, et ne soyez pas les premiers a le mecroire. Ne troquez pas Mes signes a vil prix. Et c'est Moi que vous devez craindre.",
    translation_explanation: `§DEMARCHE§
Ce verset poursuit l'adresse aux fils d'Israel en leur demandant de croire en la revelation confirmant la leur. Le verbe **aaminuu** est un imperatif pluriel forme IV de la racine a-m-n. Le Lane's donne « he believed, he was or became safe, secure ». La forme IV (af'ala) ajoute la nuance de faire entrer dans la securite — croire c'est entrer dans la securite par l'adhesion. Le verbe **anzaltu** est un accompli 1ere personne singulier forme IV de la racine n-z-l. Le Lane's donne « he sent down, he revealed ». La forme IV designe l'acte de faire descendre — c'est Dieu qui fait descendre la revelation. Le mot **musaddiqan** est un participe actif forme II de la racine s-d-q au cas accusatif (hal). Le Lane's donne « he confirmed, he declared true, he verified ». Le participe actif indique que ce qui est descendu est en train de confirmer activement ce qui precede. Le verbe **takuunuu** est un inaccompli 2MP de la racine k-w-n avec la negation la. Le Lane's donne « he was, he became ». La negation + inaccompli = prohibition (ne soyez pas). Le mot **awwala** est un nom au cas accusatif de la racine a-w-l. Le Lane's donne « first, former ». L'attribut de takuunuu — ne soyez pas les premiers. Le mot **kaafirin** est un participe actif genitif singulier de la racine k-f-r. Le Lane's donne « he covered, he disbelieved ». Le verbe **tashtaruu** est un inaccompli 2MP forme VIII de la racine sh-r-y avec negation la. Le Lane's donne « he bought, he sold, he exchanged ». La forme VIII (iftarala) porte l'idee de l'echange — acheter ou vendre en echangeant une chose contre une autre. Le mot **aayaatii** est un nom pluriel de la racine a-y-t avec pronom 1S. Le Lane's donne « sign, mark, proof, miracle, verse ». Le mot **thamanan** est un nom accusatif de la racine th-m-n. Le Lane's donne « price, value ». Le mot **qaliilan** est un adjectif accusatif de la racine q-l-l. Le Lane's donne « little, few, small in amount ». Le verbe **ittaquuni** est un imperatif 2MP forme VIII de la racine w-q-y avec pronom 1S. Le Lane's donne « he guarded, protected, preserved, feared God ». La forme VIII (ifta'ala) porte l'idee de se premunir soi-meme — prendre ses precautions contre le danger.

§JUSTIFICATION§
**croyez** — Le sens retenu est « Securite/Confiance ». Le verbe aaminuu de la racine a-m-n porte l'idee de se mettre en securite par l'adhesion. L'alternative « proteger » est ecartee car le contexte demande un acte d'adhesion interieure, pas un acte de protection exterieure.

**fait descendre** — Le sens retenu est « Descente/Revelation ». Le verbe anzaltu designe l'acte divin de faire descendre la revelation. L'alternative « s'installer » est ecartee car le sujet est Dieu qui envoie d'en haut, pas quelqu'un qui fait halte.

**confirmant** — Le sens retenu est « Verite/Sincerite ». Le participe musaddiqan designe l'acte de confirmer la verite de ce qui precede. L'alternative « aumone » est ecartee car le contexte parle de confirmation textuelle, pas de don materiel.

**soyez** — Le sens retenu est « Etre/Existence ». Le verbe takuunuu sert de support grammatical a la prohibition. Il porte la negation et le temps sans decrire une realite en soi.

**premiers** — Le sens retenu est « Anteriorite ». Le mot awwala designe celui qui est premier dans l'ordre chronologique. L'alternative « retourner » est ecartee car le contexte parle d'une precedence, pas d'un retour.

**recouvrir** — Le sens retenu est « Couverture/Dissimulation ». Le participe kaafirin de la racine k-f-r designe celui qui couvre la verite. L'alternative « ingratitude » est ecartee car le sens premier est le recouvrement.

**vendez** — Le sens retenu est « Echange/Transaction ». Le verbe tashtaruu de la racine sh-r-y designe l'acte d'echanger une chose contre une autre. L'alternative « sacrifice » est ecartee car le contexte parle d'un echange commercial de signes contre un prix.

**signes** — Le sens retenu est « Signe/Preuve ». Le mot aayaatii designe les signes divins — versets, miracles, preuves. L'alternative « verset » est incluse dans le sens plus large de signe.

**prix** — Le sens retenu est « Valeur/Prix ». Le mot thamanan designe ce qui est donne en echange. L'alternative « huit » est ecartee car le contexte parle de valeur marchande.

**derisoire** — Le sens retenu est « Quantite/Rarete ». Le mot qaliilan designe une petite quantite, un prix insignifiant. L'alternative « porter » est ecartee car le contexte parle de la faiblesse du prix.

**premunissez-vous** — Le sens retenu est « Protection/Preservation ». Le verbe ittaquuni de la racine w-q-y designe l'acte de se premunir, de prendre ses precautions contre le danger divin. L'alternative « bouclier » est ecartee car le contexte parle d'une attitude interieure, pas d'un objet.

§CRITIQUE§
**croyez vs ayez la foi** — Les traductions courantes donnent « croyez ». Le Lane's donne pour la forme IV de a-m-n « he believed, he trusted ». La racine porte d'abord le sens de securite — croire c'est entrer dans un espace de securite. « Ayez la foi » serait aussi possible mais plus abstrait.
**vendez vs troquez** — Le Lane's donne pour la forme VIII de sh-r-y « he bought, he sold ». Le Coran utilise ici la forme VIII avec la preposition bi, ce qui donne « echanger X contre Y ». « Troquer » est plus precis que « vendre » car il s'agit d'un echange (les signes contre un prix), pas d'une simple vente. Nous gardons « vendez » pour la clarte.
**premunissez-vous vs craignez** — Le Lane's donne pour ittaqa « he guarded himself, he was cautious, he feared God ». « Se premunir » preserve le sens etymologique de w-q-y (se proteger), tandis que « craindre » perd cette nuance active de precaution.`,
    segments: [
      { fr: "et croyez", pos: "verbe", phon: "wa-aaminuu", arabic: "وَءَامِنُوا۟", word_key: "amn", is_particle: false, sense_retenu: "se mettre en securite", position: 1 },
      { fr: "en ce que", phon: "bima", arabic: "بِمَآ", is_particle: true, position: 2 },
      { fr: "J'ai fait descendre", pos: "verbe", phon: "anzaltu", arabic: "أَنزَلْتُ", word_key: "nzl", is_particle: false, sense_retenu: "faire descendre", position: 3 },
      { fr: "confirmant", pos: "nom", phon: "musaddiqan", arabic: "مُصَدِّقًا", word_key: "sdq", is_particle: false, sense_retenu: "confirmer", position: 4 },
      { fr: "ce qui", phon: "lima", arabic: "لِّمَا", is_particle: true, position: 5 },
      { fr: "est avec vous", phon: "ma'akum", arabic: "مَعَكُمْ", is_particle: true, position: 6 },
      { fr: "et ne", phon: "wala", arabic: "وَلَا", is_particle: true, position: 7 },
      { fr: "soyez", pos: "verbe", phon: "takuunuu", arabic: "تَكُونُوٓا۟", word_key: "kwn", is_particle: false, sense_retenu: "etre", position: 8 },
      { fr: "les premiers a", pos: "nom", phon: "awwala", arabic: "أَوَّلَ", word_key: "awl", is_particle: false, sense_retenu: "premier", position: 9 },
      { fr: "le recouvrir", pos: "nom", phon: "kaafirin", arabic: "كَافِرٍ]", word_key: "kfr", is_particle: false, sense_retenu: "recouvrir", position: 10 },
      { fr: "de cela", phon: "bihi", arabic: "بِهِ.", is_particle: true, position: 11 },
      { fr: "et ne", phon: "wala", arabic: "وَلَا", is_particle: true, position: 12 },
      { fr: "vendez", pos: "verbe", phon: "tashtaruu", arabic: "تَشْتَرُوا۟", word_key: "shry", is_particle: false, sense_retenu: "echanger", position: 13 },
      { fr: "Mes signes", pos: "nom", phon: "bi-aayaatii", arabic: "بِـَٔايَٰتِY", word_key: "ayt", is_particle: false, sense_retenu: "signe", position: 14 },
      { fr: "pour un prix", pos: "nom", phon: "thamanan", arabic: "ثَمَنًا", word_key: "thmn", is_particle: false, sense_retenu: "prix", position: 15 },
      { fr: "derisoire", pos: "adjectif", phon: "qaliilan", arabic: "قَلِيلًا", word_key: "qll", is_particle: false, sense_retenu: "peu", position: 16 },
      { fr: "et c'est Moi", phon: "wa-iyyaya", arabic: "وَإِيَّٰYَ", is_particle: true, position: 17 },
      { fr: "premunissez-vous", pos: "verbe", phon: "fattaquuni", arabic: "فَٱتَّقُونِ", word_key: "wqy", is_particle: false, sense_retenu: "se premunir", position: 18 }
    ],
    words: [
      {
        word_key: "amn", position: 1, sense_chosen: "se mettre en securite",
        analysis_axes: {
          concept_chosen: "Sécurité/Confiance",
          concepts: {
            "Sécurité/Confiance": {
              status: "retenu",
              senses: ["être en sécurité", "se sentir en sécurité", "faire confiance", "confier", "fidèle", "lieu sûr"],
              proof_ctx: "Le verbe aaminuu est un imperatif pluriel forme IV de la racine a-m-n. Le Lane's donne « he believed, he was or became safe, secure, free from fear ». La forme IV (af'ala) a une valeur causative-entrative — entrer dans un etat de securite. Croire (aamana) c'est fondamentalement se mettre en securite en acceptant comme vrai. L'imperatif s'adresse aux fils d'Israel — on leur ordonne d'entrer dans la securite en adherant a ce qui a ete fait descendre.",
              axe1_verset: "Le verbe aaminuu ouvre le verset et donne le premier commandement. La structure est : croyez en ce que J'ai fait descendre, confirmant ce qui est avec vous. L'ordre de croire est lie a la continuite — ce qui descend maintenant confirme ce qu'ils ont deja. La foi demandee n'est pas un saut dans l'inconnu mais une adhesion a ce qui prolonge leur propre tradition. Le verset enchaîne ensuite trois prohibitions : ne soyez pas les premiers a recouvrir, ne vendez pas Mes signes, et un ordre final : premunissez-vous de Moi.",
              axe2_voisins: "Le verset 40 demandait aux fils d'Israel de se souvenir du bienfait et de respecter l'engagement. Ce verset 41 precise le contenu de l'engagement : croire en la nouvelle revelation. Le passage du rappel general (v40) a l'injonction specifique (v41) montre une pedagogie progressive. Le verset 42 interdira de meler la verite au faux — une consequence de la foi demandee ici. Croire d'abord, puis ne pas corrompre ce en quoi on croit.",
              axe3_sourate: "La racine a-m-n est omnipresente dans la sourate al-Baqarah. Des le verset 3, les pieux sont ceux « qui croient a l'invisible ». En 2:13, on leur dit « croyez comme les gens ont cru » et ils repondent « croirons-nous comme les sots ont cru ? ». La foi est le premier critere de distinction entre les groupes humains dans cette sourate. Ce verset 41 applique ce critere aux fils d'Israel.",
              axe4_coherence: "La racine a-m-n apparait 879 fois dans le Coran — c'est l'une des plus frequentes. L'imperatif aaminuu revient dans de nombreux contextes pour ordonner la foi. En 4:136, « croyez en Dieu, en Son messager, au Livre qu'Il a fait descendre ». En 57:28, « croyez en Dieu et en Son messager ». L'ordre de croire est le commandement fondamental du Coran, repete a chaque communaute.",
              axe5_frequence: "Pour la mission du khalifa, la foi est le fondement de tout. Le khalifa qui ne croit pas en la revelation ne peut pas accomplir sa mission — il agit a l'aveugle. La foi de ce verset est specifiquement demandee aux fils d'Israel qui avaient deja une revelation : accepter la nouvelle ne detruit pas l'ancienne, elle la confirme."
            },
            "Foi/Adhésion": {
              status: "probable",
              senses: ["croire", "avoir la foi", "accepter comme vrai", "croyant", "confirmer"],
              proof_ctx: "La foi est un sens derive de la securite. Quand on croit, on entre dans la securite de la certitude. Le sens de foi est le plus courant dans l'usage coranique de la forme IV, mais le sens fondamental de la racine reste la securite. Le contexte ici peut supporter les deux lectures : se mettre en securite par l'adhesion, ou simplement croire."
            },
            "Garantie/Protection": {
              status: "nul",
              senses: ["accorder la sécurité", "protéger"],
              proof_ctx: "La protection (amana) est un sens de la racine a-m-n (donner l'aman, la securite). Le contexte utilise la forme IV imperative qui signifie croire/adherer, pas donner la securite. Ce sont les fils d'Israel qui doivent croire, pas proteger."
            }
          }
        }
      },
      {
        word_key: "nzl", position: 3, sense_chosen: "faire descendre",
        analysis_axes: {
          concept_chosen: "Descente/Révélation",
          concepts: {
            "Descente/Révélation": {
              status: "retenu",
              senses: ["pluie qui descend", "descendre", "faire descendre", "révéler", "envoyer d'en haut"],
              proof_ctx: "Le verbe anzaltu est un accompli 1ere personne singulier forme IV de la racine n-z-l. Le Lane's donne « he sent down, he caused to descend, he revealed ». La forme IV (af'ala) est causative — Dieu fait descendre. L'accompli indique que l'acte est deja realise — la revelation est deja descendue. Le pronom 1S (J'ai fait descendre) attribue l'acte directement a Dieu, pas a un intermediaire.",
              axe1_verset: "Le verbe anzaltu est le pivot de la premiere injonction — croyez en ce que J'ai fait descendre. L'objet de la foi est specifie : c'est ce que Dieu a fait descendre, c'est-a-dire la revelation (le Coran ou la revelation faite a Muhammad). Le verset enchaine avec musaddiqan (confirmant) — ce qui est descendu confirme ce qui est deja avec eux (la Torah). La descente n'est pas une rupture mais une continuite confirmative.",
              axe2_voisins: "Le verset 40 parlait du bienfait divin en general. Ce verset 41 precise que le bienfait actuel est la revelation descendue. La descente de la revelation est le bienfait le plus grand car elle contient la guidance. Le verset 42 enchainera sur la falsification — ceux qui corrompent ce qui est descendu trahissent le bienfait de la descente.",
              axe3_sourate: "La sourate al-Baqarah s'ouvre en declarant « ce Livre, pas de doute en lui » (2:2). La descente du Livre est le point de depart de la sourate. En 2:4, les pieux croient en ce qui a ete fait descendre vers toi (Muhammad) et en ce qui a ete fait descendre avant toi. Ce verset 41 reprend exactement ce theme mais l'adresse aux fils d'Israel : croyez en ce qui a ete fait descendre, confirmant ce que vous avez.",
              axe4_coherence: "La racine n-z-l apparait 293 fois dans le Coran. Elle est la racine principale pour decrire la revelation. En 3:3, « Il a fait descendre sur toi le Livre avec la verite, confirmant ce qui est avant lui ». En 5:48, « Nous avons fait descendre vers toi le Livre avec la verite, confirmant ce qui est entre ses mains ». La formule « anzalna musaddiqan lima » est un motif recurrent qui lie la revelation nouvelle a l'ancienne.",
              axe5_frequence: "Pour la mission du khalifa, la descente de la revelation est l'equipement divin. Le khalifa ne peut accomplir sa mission sans revelation — il a besoin de la guidance descendue du ciel. La descente confirme que Dieu n'abandonne pas Ses creatures a elles-memes mais leur fournit continuellement les outils de la reussite."
            },
            "Halte/Séjour": {
              status: "nul",
              senses: ["s'installer", "faire halte", "hôte", "lieu de descente"],
              proof_ctx: "La halte est un sens de la forme I de n-z-l (nazala = s'arreter dans un lieu). Le contexte utilise la forme IV (anzala = faire descendre) avec Dieu comme sujet — il s'agit de revelation, pas d'installation."
            }
          }
        }
      },
      {
        word_key: "sdq", position: 4, sense_chosen: "confirmer",
        analysis_axes: {
          concept_chosen: "Vérité/Sincérité",
          concepts: {
            "Vérité/Sincérité": {
              status: "retenu",
              senses: ["dire vrai", "vrai", "sincère", "confirmer"],
              proof_ctx: "Le mot musaddiqan est un participe actif forme II au cas accusatif (hal) de la racine s-d-q. Le Lane's donne « he confirmed, he declared true, he verified ». La forme II (fa''ala) est intensive — confirmer avec insistance, declarer la verite de quelque chose. Le participe actif indique un etat actif — ce qui est descendu est en train de confirmer activement. Le hal (accusatif adverbial) signifie « en tant que confirmant, dans l'etat de confirmer ».",
              axe1_verset: "Le mot musaddiqan est la cle de l'argumentation du verset. Ce qui est fait descendre confirme ce qui est avec eux — il n'y a donc aucune raison de le rejeter. La confirmation (tasdiq) signifie que la nouvelle revelation dit la meme verite que l'ancienne, sous une forme renouvelee. L'argument est : si vous croyez en la Torah, vous devez croire en ce qui la confirme. Le rejet de la confirmation est une contradiction interne.",
              axe2_voisins: "Le verset 40 parlait de l'engagement bilateral (respectez Mon engagement, Je respecterai le votre). Ce verset 41 montre que Dieu a respecte Son engagement en envoyant une revelation qui confirme la precedente. La balle est dans le camp des fils d'Israel : Dieu a rempli Sa part (envoyer une revelation confirmative), a eux de remplir la leur (y croire).",
              axe3_sourate: "Le motif de la confirmation (tasdiq) est central dans la sourate al-Baqarah. En 2:89, « quand leur est venu un Livre de la part de Dieu, confirmant ce qu'ils avaient, et alors qu'avant ils demandaient la victoire sur les mecreants — quand leur est venu ce qu'ils connaissaient, ils l'ont recouvert ». La sourate revient sans cesse sur cette contradiction : ils attendaient la confirmation et quand elle est venue, ils l'ont rejetee.",
              axe4_coherence: "La racine s-d-q apparait 155 fois dans le Coran. Le participe musaddiq est utilise specifiquement pour decrire la relation entre les revelations successives. En 3:3, « il a fait descendre le Livre, confirmant ce qui est avant lui ». En 5:46, Jesus est envoye « confirmant ce qui est entre ses mains de la Torah ». Chaque revelation confirme la precedente dans une chaine de verite continue.",
              axe5_frequence: "Pour la mission du khalifa, la confirmation signifie que la verite est une et continue. Le khalifa ne rompt pas avec le passe — il le confirme et le prolonge. La mission n'est pas de creer du nouveau mais de confirmer l'eternel dans chaque epoque."
            },
            "Don/Aumône": {
              status: "nul",
              senses: ["aumône", "dot"],
              proof_ctx: "L'aumone (sadaqa) est un sens de la racine s-d-q. Le contexte utilise musaddiqan comme participe forme II dans le sens de confirmer, pas dans le sens de donner l'aumone. L'aumone est un don sincere — le lien avec la racine est la sincerite, mais le sens ici est la confirmation."
            }
          }
        }
      },
      {
        word_key: "kwn", position: 8, sense_chosen: "etre",
        analysis_axes: {
          concept_chosen: "Être/Existence",
          concepts: {
            "Être/Existence": {
              status: "retenu",
              senses: ["être (verbe incomplet)", "venir à l'existence"],
              proof_ctx: "Le verbe takuunuu est un inaccompli 2MP de la racine k-w-n. Le Lane's donne « he was, he became, he existed ». Ici le verbe est utilise comme verbe incomplet (naaqis) — il porte le temps et la negation sans decrire une existence. La structure « la takuunuu awwala kaafirin » signifie « ne soyez pas les premiers a recouvrir ». Le verbe sert de support grammatical a l'attribut (awwala kaafirin).",
              axe1_verset: "Le verbe takuunuu avec la negation la introduit la premiere prohibition du verset. La structure « ne soyez pas les premiers a recouvrir » utilise le verbe etre comme copule — il relie le sujet (vous) a l'attribut (les premiers a recouvrir). Le verbe ici n'a pas de contenu semantique propre — il porte simplement la negation prohibitive et le temps inaccompli. L'enjeu est dans l'attribut (awwala kaafirin), pas dans le verbe etre lui-meme.",
              axe2_voisins: "Le verset 40 utilisait des imperatifs directs (rappelez-vous, respectez, redoutez). Ce verset 41 utilise une prohibition complexe (ne soyez pas les premiers). Le passage de l'imperatif positif a la prohibition negative montre deux faces de l'engagement : ce qu'il faut faire (v40) et ce qu'il ne faut pas faire (v41). Le verbe etre sert de support a cette prohibition.",
              axe3_sourate: "Le verbe kana/yakuunu est le verbe le plus frequent de la sourate al-Baqarah et du Coran entier. Il sert de copule dans d'innombrables constructions. Sa frequence temoigne de son role structurel dans la langue arabe — il n'ajoute pas de sens mais porte le temps et la modalite.",
              axe4_coherence: "La racine k-w-n apparait 1390 fois dans le Coran. C'est de loin la racine la plus frequente. Elle est utilisee dans deux sens principaux : le verbe incomplet (copule) et le verbe complet (exister, venir a l'existence). En 2:117, « quand Il decide une chose, Il lui dit 'sois' (kun) et elle est ». Le kun createur est le sens complet — la chose vient a l'existence. En 2:41, le sens est incomplet — le verbe sert de support.",
              axe5_frequence: "Pour la mission du khalifa, le verbe etre dans sa forme prohibitive (ne soyez pas) rappelle que le khalifa a le choix de son identite. Il peut etre le premier a recouvrir ou le premier a croire. Le verbe etre ouvre l'espace du choix ontologique — ce que vous etes depend de ce que vous choisissez d'etre."
            },
            "Lieu/État": {
              status: "nul",
              senses: ["devenir comme", "lieu", "reste à ta place", "état condition", "motif raison"],
              proof_ctx: "Le lieu et l'etat sont des sens secondaires de k-w-n. Le contexte utilise le verbe comme copule prohibitive, pas dans le sens de lieu ou d'etat autonome."
            }
          }
        }
      },
      {
        word_key: "awl", position: 9, sense_chosen: "premier",
        analysis_axes: {
          concept_chosen: "Retour/Origine",
          concepts: {
            "Retour/Origine": {
              status: "retenu",
              senses: ["retourner", "faire retourner", "aboutissement", "interpréter"],
              proof_ctx: "Le mot awwala est un nom au cas accusatif de la racine a-w-l. Le Lane's donne « first, foremost, former, beginning ». Le mot awwal designe ce qui est premier dans un ordre, ce qui vient en tete. La racine a-w-l porte l'idee de retour a l'origine — le premier est celui qui est a l'origine, au commencement. En construction avec kaafirin (genitif), awwala kaafirin signifie « le premier de ceux qui couvrent ». L'accusatif indique que c'est l'attribut du verbe takuunuu.",
              axe1_verset: "Le mot awwala est l'attribut central de la prohibition « ne soyez pas les premiers a le recouvrir ». L'interdiction ne porte pas simplement sur le kufr mais sur le fait d'etre LES PREMIERS a recouvrir. Cela implique que d'autres pourraient suivre — mais etre les premiers est encore plus grave car cela ouvre la voie au rejet. Les fils d'Israel, en tant que premiers destinataires de la revelation, ont une responsabilite particuliere : s'ils rejettent en premier, d'autres suivront leur exemple.",
              axe2_voisins: "Le verset 40 rappelait la preseance des fils d'Israel (rappelez-vous Mon bienfait). Ce verset 41 montre l'envers de cette preseance : etre les premiers peut signifier etre les premiers a croire ou les premiers a recouvrir. La preseance est une responsabilite, pas un privilege. Le verset 42 enchainera sur une autre forme de trahison (meler le vrai au faux), montrant que la preseance se perd par la corruption.",
              axe3_sourate: "Le theme de la preseance revient dans la sourate al-Baqarah pour les fils d'Israel. En 2:47, « Je vous ai preferes aux mondes ». En 2:122, meme formule. Mais cette preference est conditionnelle — elle s'accompagne de responsabilites. Etre les premiers destinataires de la revelation implique etre les premiers a y repondre, pas les premiers a la rejeter.",
              axe4_coherence: "La racine a-w-l apparait 170 fois dans le Coran. Le mot awwal est utilise pour marquer la precedence chronologique ou la priorite. En 3:96, « la premiere maison etablie pour les gens est celle de Bakka ». En 9:108, « une mosquee fondee sur la piete des le premier jour ». La priorite dans le bien est valorisee — la priorite dans le rejet est condamnee.",
              axe5_frequence: "Pour la mission du khalifa, la notion de premier rappelle que chaque communaute a une responsabilite proportionnelle a sa preseance. Le khalifa qui a recu la connaissance en premier doit etre le premier a agir en consequence. Etre le premier a recouvrir est la pire trahison de la preseance."
            },
            "Famille/Appartenance": {
              status: "nul",
              senses: ["famille", "parenté"],
              proof_ctx: "La famille (aalu) est un sens de la racine a-w-l (les proches). Le contexte utilise awwala dans le sens de premier, pas de famille. Les deux sens derivent de l'idee d'origine mais divergent en application."
            }
          }
        }
      },
      {
        word_key: "kfr", position: 10, sense_chosen: "recouvrir",
        analysis_axes: {
          concept_chosen: "Couverture/Dissimulation",
          concepts: {
            "Couverture/Dissimulation": {
              status: "retenu",
              senses: ["couvrir", "cacher", "la nuit qui couvre"],
              proof_ctx: "Le mot kaafirin est un participe actif genitif singulier de la racine k-f-r. Le Lane's donne « he covered, concealed, hid ». Le kafir est celui qui couvre la verite — il la cache sous le rejet. Le genitif est regi par awwala (le premier des recouvrants). Le participe actif indique un etat en cours — celui qui est en train de recouvrir. Le singulier en annexion avec awwala donne une valeur de superlatif : les premiers de cette categorie.",
              axe1_verset: "Le mot kaafirin est l'element le plus grave de la prohibition. Ne soyez pas les premiers recouvrants — c'est-a-dire ne soyez pas ceux qui couvrent la verite de la revelation confirmative. Le kufr ici est specifique : c'est le recouvrement de ce qui confirme leur propre tradition. Ils couvrent ce qui devrait les conforter. L'absurdite du geste est soulignee par le fait que la revelation les confirme — ils couvrent leur propre confirmation.",
              axe2_voisins: "Le verset 39 parlait de ceux qui couvrent et dementent les signes (kafaruu wa kadhdhabuu). Ce verset 41 reprend la racine k-f-r mais dans un contexte specifique : les fils d'Israel qui couvrent la revelation confirmative. Le kufr general du verset 39 devient le kufr specifique du verset 41. Le verset 42 enchainera avec une autre forme de dissimulation : meler le vrai au faux (talbisuu al-haqqa bil-baatili).",
              axe3_sourate: "La racine k-f-r dans la section des fils d'Israel (2:40-123) prend une coloration particuliere : ce n'est pas le kufr de l'ignorant mais celui du savant qui sait et qui couvre quand meme. En 2:89, « quand leur est venu ce qu'ils connaissaient, ils l'ont couvert ». Le kufr des fils d'Israel est aggrave par leur connaissance prealable.",
              axe4_coherence: "La racine k-f-r apparait 525 fois dans le Coran. En 2:41, l'expression awwala kaafirin est unique — elle n'apparait qu'ici. Cette unicite souligne la gravite particuliere de l'accusation : etre le premier a recouvrir parmi les gens du Livre est un cas distinct du kufr ordinaire. C'est un kufr de trahison, pas d'ignorance.",
              axe5_frequence: "Pour la mission du khalifa, le kufr du savant est le pire echec. Le khalifa qui connait la verite et la couvre trahit doublement : il trahit Dieu et il trahit ceux qui comptaient sur lui pour transmettre. Le verset avertit que la connaissance sans foi est pire que l'ignorance."
            },
            "Rejet/Ingratitude": {
              status: "probable",
              senses: ["nier", "être ingrat", "renier un bienfait", "rejeter", "mécréant"],
              proof_ctx: "Le rejet est un sens derive du recouvrement. L'ingratitude est le recouvrement des bienfaits recus. Le contexte supporte ce sens car les fils d'Israel recouvrent la revelation qui confirme la leur — c'est une forme d'ingratitude."
            }
          }
        }
      },
      {
        word_key: "shry", position: 13, sense_chosen: "echanger",
        analysis_axes: {
          concept_chosen: "Échange/Transaction",
          concepts: {
            "Échange/Transaction": {
              status: "retenu",
              senses: ["acheter", "vendre", "échanger"],
              proof_ctx: "Le verbe tashtaruu est un inaccompli 2MP forme VIII de la racine sh-r-y. Le Lane's donne « he bought, he purchased, he sold, he exchanged ». La forme VIII (ifta'ala) porte l'idee de l'echange bilateral — acheter ou vendre en donnant une chose contre une autre. La construction tashtaruu bi-aayaatii thamanan qaliilan signifie « vous echangez Mes signes contre un prix derisoire ». Les signes sont la marchandise vendue, le prix derisoire est ce qui est recu en retour.",
              axe1_verset: "Le verbe tashtaruu est au cœur de la deuxieme prohibition : ne vendez pas Mes signes pour un prix derisoire. L'echange denonce est celui ou les signes divins sont brades — echanges contre des avantages materiels insignifiants. Ceux qui modifient la revelation pour plaire aux puissants ou pour gagner de l'argent vendent les signes. Le « prix derisoire » (thamanan qaliilan) souligne le desequilibre absurde : les signes divins valent infiniment plus que tout prix terrestre.",
              axe2_voisins: "Le verset 40 demandait de respecter l'engagement. Le verset 41 montre une forme de rupture de l'engagement : vendre les signes pour un prix derisoire. Celui qui vend les signes a rompu le pacte — il a echange la guidance divine contre un profit temporaire. Le verset 42 enchainera avec une autre forme de corruption : meler le vrai au faux, ce qui est une maniere de vendre la verite.",
              axe3_sourate: "L'expression « la tashtaruu bi-aayaatii thamanan qaliilan » est repetee en 2:41 et 2:174. En 2:174, elle vise ceux qui cachent ce que Dieu a fait descendre du Livre et l'echangent contre un prix derisoire. En 2:79, ceux qui ecrivent le Livre de leurs propres mains puis disent « ceci vient de Dieu » pour l'echanger contre un prix derisoire. La sourate revient plusieurs fois sur cette transaction frauduleuse.",
              axe4_coherence: "La racine sh-r-y est utilisee dans le Coran pour decrire les echanges desavantageux et les bons echanges. En 2:207, « il y a parmi les gens celui qui vend sa personne pour la satisfaction de Dieu » — un bon echange. En 9:111, « Dieu a achete aux croyants leurs personnes et leurs biens contre le Jardin ». L'echange est un theme coranique majeur : chaque choix est un echange entre le temporel et l'eternel.",
              axe5_frequence: "Pour la mission du khalifa, la vente des signes est la corruption de la mission. Le khalifa qui echange la verite divine contre un gain materiel a trahi sa vocation. Le prix est toujours derisoire car aucun profit terrestre ne vaut les signes divins. La mission du khalifa est de transmettre les signes, pas de les monnayer."
            },
            "Sacrifice/Don de soi": {
              status: "nul",
              senses: ["se vendre (sacrifier sa vie)"],
              proof_ctx: "Le sacrifice de soi (shara nafsahu) est un sens de la racine sh-r-y. Le contexte parle d'un echange commercial (vendre les signes contre un prix), pas d'un sacrifice personnel."
            }
          }
        }
      },
      {
        word_key: "ayt", position: 14, sense_chosen: "signe",
        analysis_axes: {
          concept_chosen: "Signe/Preuve",
          concepts: {
            "Signe/Preuve": {
              status: "retenu",
              senses: ["signe", "miracle", "preuve"],
              proof_ctx: "Le mot aayaatii est un nom pluriel au cas genitif de la racine a-y-t avec pronom possessif 1S (Mes signes). Le Lane's donne « a sign, mark, indication, evidence, proof, miracle, wonder, verse of the Quran ». Le signe est ce qui montre au-dela de lui-meme — il pointe vers une realite plus grande. Le pronom possessif « Mes » attribue les signes a Dieu directement. La preposition bi (bi-aayaatii) introduit les signes comme la chose echangee — c'est le « prix » symbolique de la transaction.",
              axe1_verset: "Le mot aayaatii est l'objet de la transaction interdite — ce qu'on ne doit pas vendre. Les signes de Dieu sont presentes comme ayant une valeur incommensurable — les echanger contre un prix derisoire est une aberration. Le pronom « Mes » (de Dieu) ajoute la gravite : ce ne sont pas des signes quelconques mais les signes de Dieu Lui-meme. Vendre les signes de Dieu c'est trafiquer le sacre.",
              axe2_voisins: "Le verset 39 parlait de ceux qui dementent « Nos signes » (aayaatina). Ce verset 41 parle de ceux qui vendent « Mes signes » (aayaatii). Le passage du pluriel de majeste (Nos) au singulier divin (Mes) est une intensification — la relation est plus directe et personnelle. Les signes sont un patrimoine divin que l'homme n'a pas le droit de monnayer.",
              axe3_sourate: "Le mot aaya/aayaat est l'un des plus recurrents de la sourate al-Baqarah. Il designe tantot les versets du Coran, tantot les miracles des prophetes, tantot les phenomenes naturels. En 2:41, le contexte vise les versets de la revelation que les gens du Livre echangent contre des avantages materiels — ils alterent le texte sacre pour plaire aux puissants.",
              axe4_coherence: "La racine a-y-t est distincte de a-y-y (quel). En 2:41, c'est bien a-y-t (signe/preuve) qui est visee, pas a-y-y (interrogation). Les signes divins dans le Coran sont les preuves de la verite divine offertes a l'homme — les rejeter ou les vendre c'est rejeter les preuves memes de Dieu.",
              axe5_frequence: "Pour la mission du khalifa, les signes sont les outils de la mission. Le khalifa doit les lire, les transmettre, les proteger. Vendre les signes c'est detruire les outils memes de la succession divine. Le khalifa qui vend les signes ne peut plus accomplir sa mission."
            },
            "Révélation/Parole": {
              status: "probable",
              senses: ["verset"],
              proof_ctx: "Le verset (aaya) est une unite de la revelation — un signe verbal. Le contexte peut viser specifiquement les versets de la Torah ou du Coran que les gens du Livre alterent ou cachent pour un profit. Les deux sens (signe et verset) ne sont pas contradictoires mais le sens de signe est plus englobant."
            }
          }
        }
      },
      {
        word_key: "thmn", position: 15, sense_chosen: "prix",
        analysis_axes: {
          concept_chosen: "Valeur/Prix",
          concepts: {
            "Valeur/Prix": {
              status: "retenu",
              senses: ["prix", "valeur", "acheter", "vendre"],
              proof_ctx: "Le mot thamanan est un nom au cas accusatif de la racine th-m-n. Le Lane's donne « a price, a compensation, an equivalent ». Le thaman est ce qui est donne en echange d'une marchandise — il est l'equivalent declare d'une chose. L'accusatif indique le complement du verbe tashtaruu — le prix recu en echange des signes vendus.",
              axe1_verset: "Le mot thamanan complete la structure de la transaction interdite : ne vendez pas Mes signes pour un prix derisoire. Le prix est qualifie de qaliilan (derisoire, insignifiant). La juxtaposition « prix derisoire » souligne l'absurdite de la transaction : on echange l'infini (les signes de Dieu) contre le negligeable (un gain terrestre). Le verset ne dit pas que les signes pourraient etre vendus pour un bon prix — il dit que tout prix est derisoire face aux signes divins.",
              axe2_voisins: "Le verset 40 parlait de l'engagement bilateral et de la reciprocite. Ce verset 41 montre une reciprocite corrompue : au lieu de respecter l'engagement et recevoir la recompense divine, ils echangent les signes contre un prix terrestre. La transaction est une trahison de la reciprocite sacree — ils choisissent un echange horizontal (homme-argent) au lieu de l'echange vertical (homme-Dieu).",
              axe3_sourate: "L'expression « thamanan qaliilan » (prix derisoire) revient plusieurs fois dans la sourate. En 2:79, ceux qui ecrivent le Livre de leurs mains pour l'echanger « contre un prix derisoire ». En 2:174, ceux qui cachent ce que Dieu a fait descendre « pour un prix derisoire ». Le prix derisoire est le symbole de la corruption des gens du Livre qui sacrifient le sacre pour le profane.",
              axe4_coherence: "La racine th-m-n apparait 19 fois dans le Coran. Elle est utilisee principalement dans le contexte de la vente des signes divins. En 3:77, « ceux qui echangent le pacte de Dieu et leurs serments contre un prix derisoire, ceux-la n'auront aucune part dans l'au-dela ». Le prix derisoire est systematiquement lie a la perte de l'au-dela.",
              axe5_frequence: "Pour la mission du khalifa, le prix derisoire represente toute compensation terrestre offerte en echange de la trahison de la mission. Le khalifa doit resister a la tentation de monnayer la verite — aucun prix terrestre ne vaut la perte de la mission eternelle."
            },
            "Nombre": {
              status: "nul",
              senses: ["huit", "huitième"],
              proof_ctx: "Le nombre huit (thamaniya) est un sens de la racine th-m-n. Le contexte parle de prix (thaman), pas du chiffre huit. Les deux sens partagent peut-etre l'idee de valeur (le huit comme valeur numerique) mais divergent totalement en application."
            }
          }
        }
      },
      {
        word_key: "qll", position: 16, sense_chosen: "peu",
        analysis_axes: {
          concept_chosen: "Quantité/Rareté",
          concepts: {
            "Quantité/Rareté": {
              status: "retenu",
              senses: ["être peu", "diminuer", "peu nombreux", "rare"],
              proof_ctx: "Le mot qaliilan est un adjectif au cas accusatif de la racine q-l-l. Le Lane's donne « little, few, small in amount or number ». L'adjectif qualifie thamanan (prix) — un prix petit, derisoire, insignifiant. L'accusatif est en accord avec le nom qu'il qualifie (thamanan qaliilan). La petitesse du prix souligne le contraste avec la grandeur des signes.",
              axe1_verset: "Le mot qaliilan ferme la deuxieme prohibition du verset et lui donne sa force. Ce n'est pas simplement « ne vendez pas Mes signes pour un prix » mais « pour un prix DERISOIRE ». L'adjectif transforme la prohibition en accusation d'absurdite — ils echangent des tresors divins contre des miettes. Le derisoire du prix revele le derisoire de leur intelligence : ils ne savent meme pas evaluer ce qu'ils vendent.",
              axe2_voisins: "Le verset 40 parlait du bienfait divin immense (ni'matiya). Ce verset 41 parle d'un prix derisoire (thamanan qaliilan). Le contraste entre l'immense bienfait et le prix derisoire montre le desequilibre du choix des fils d'Israel : ils renoncent a l'immense pour obtenir le derisoire. Le verset 42 enchainera avec le melange du vrai et du faux — une autre forme de sous-evaluation de la verite.",
              axe3_sourate: "L'expression thamanan qaliilan revient en 2:41, 2:79, 2:174 dans la sourate. Chaque fois, elle qualifie le profit obtenu par ceux qui trahissent la revelation. Le prix est toujours qualifie de derisoire car tout ce qui est terrestre est derisoire compare a l'eternel. La sourate martele cette idee pour montrer l'absurdite du choix materialiste.",
              axe4_coherence: "La racine q-l-l apparait 76 fois dans le Coran. En 9:38, « la jouissance de la vie d'ici-bas n'est que peu de chose (qaliil) face a l'au-dela ». En 4:155, ils n'ont « que peu de foi ». Le peu est toujours ce qui est insuffisant — insuffisant pour justifier la transaction, insuffisant pour compenser la perte de l'au-dela.",
              axe5_frequence: "Pour la mission du khalifa, le peu est l'ennemi de la mission. Le khalifa qui se contente de peu (un petit gain, un petit confort) au lieu de viser le grand (la recompense divine) a perdu le sens des proportions. La mission exige de voir grand — le peu est le piege du materialisme."
            }
          }
        }
      },
      {
        word_key: "wqy", position: 18, sense_chosen: "se premunir",
        analysis_axes: {
          concept_chosen: "Protection/Préservation",
          concepts: {
            "Protection/Préservation": {
              status: "retenu",
              senses: ["protéger", "préserver", "craindre", "piété", "se prémunir", "éviter"],
              proof_ctx: "Le verbe ittaquuni est un imperatif 2MP forme VIII de la racine w-q-y avec pronom suffixe 1S (premunissez-vous de Moi). Le Lane's donne « he guarded himself, he was cautious, he feared, he was pious ». La forme VIII (ifta'ala) est reflexive — se proteger soi-meme, prendre ses propres precautions. La taqwa est l'acte de se premunir du chatiment divin en obeissant a Ses commandements. Le pronom « Moi » fait de Dieu l'objet de la taqwa — c'est de Dieu qu'il faut se premunir.",
              axe1_verset: "Le verbe ittaquuni ferme le verset par un ordre final : premunissez-vous de Moi. La sequence du verset est : croyez, ne soyez pas les premiers a recouvrir, ne vendez pas Mes signes, et premunissez-vous de Moi. Le dernier ordre resume les trois precedents — celui qui se premunit de Dieu croit, ne recouvre pas, et ne vend pas les signes. La taqwa est l'attitude globale qui englobe toutes les injonctions precedentes.",
              axe2_voisins: "Le verset 40 se terminait par « fa-irhabuuni » (redoutez-Moi). Ce verset 41 se termine par « fa-ittaquuni » (premunissez-vous de Moi). Les deux ordres finaux sont proches mais distincts : la rahba (v40) est la crainte reverentielle, la taqwa (v41) est la precaution active. La progression va du sentiment (redouter) a l'action (se premunir). La taqwa est la rahba mise en pratique.",
              axe3_sourate: "La racine w-q-y est fondamentale dans la sourate al-Baqarah. Des le verset 2, le Livre est « une guidance pour les muttaqiin » (ceux qui se premunissent). En 2:21, « adorez votre Seigneur pour que vous vous premunissiez ». En 2:63, « prenez ce que Nous vous avons donne avec force, et rappelez-vous ce qu'il contient, pour que vous vous premunissiez ». La taqwa est le fil conducteur de la sourate.",
              axe4_coherence: "La racine w-q-y apparait 258 fois dans le Coran. La taqwa est le concept moral le plus central du Coran — c'est la qualite qui distingue les meilleurs aupres de Dieu. En 49:13, « le plus noble d'entre vous aupres de Dieu est le plus pieux (atqaakum) ». La taqwa n'est pas la peur passive mais la vigilance active qui evite le mal et recherche le bien.",
              axe5_frequence: "Pour la mission du khalifa, la taqwa est l'armure de la mission. Le khalifa qui se premunit de Dieu est protege contre les tentations (vendre les signes, recouvrir la verite). La taqwa est la condition de la reussite de la khilafa — sans elle, le khalifa est vulnerable a toutes les corruptions."
            }
          }
        }
      }
    ]
  },

  // =====================================================
  // VERSET 2:42
  // verse_id=49, analysis_id=411
  // Ne revetez pas la verite du faux, ne cachez pas la verite
  // alors que vous savez.
  // =====================================================
  42: {
    verse_id: 49,
    analysis_id: 411,
    translation_arab: "Ne revetez pas la verite du faux, et ne cachez pas la verite alors que vous savez.",
    full_translation: "Et ne melangez pas le vrai avec le faux. Ne cachez pas la verite alors que vous savez.",
    translation_explanation: `§DEMARCHE§
Ce verset contient deux prohibitions adressees aux fils d'Israel. Le verbe **talbisuu** est un inaccompli 2MP de la racine l-b-s avec la negation la. Le Lane's donne « he put on a garment, he clothed, he confused, he rendered obscure ». Le verbe a deux sens principaux : vetir (habiller quelque chose) et confondre (rendre obscur par le melange). Ici le sens est « ne revetez pas la verite du faux » — ne couvrez pas la verite avec le vetement du faux. Le mot **al-haqqa** est un nom defini au cas accusatif de la racine h-q-q. Le Lane's donne « truth, reality, right, what is right, what is true ». Le haqq est la verite objective qui existe independamment de celui qui la reconnaît. Le mot **bil-baatili** est un nom defini au cas genitif de la racine b-t-l avec preposition bi. Le Lane's donne « false, vain, null, void, futile ». Le baatil est l'oppose du haqq — ce qui n'a pas de realite, ce qui est vain et sans fondement. Le verbe **taktumuu** est un inaccompli 2MP de la racine k-t-m avec la negation. Le Lane's donne « he concealed, he hid, he suppressed, he kept secret ». Cacher est un acte volontaire de soustraction de la connaissance. Le verbe **ta'lamuuna** est un inaccompli 2MP de la racine e-l-m. Le Lane's donne « he knew, he learned, he was cognizant of ». Le savoir est l'etat interieur de la certitude — ils savent et ils cachent quand meme.

§JUSTIFICATION§
**revetez** — Le sens retenu est « Confusion/Melange ». Le verbe talbisuu de la racine l-b-s porte l'idee de couvrir une chose par une autre. L'alternative « vetir » est ecartee car le contexte ne parle pas d'habits mais de recouvrement de la verite par le faux. Les deux sens partagent l'image du vetement : on habille la verite du vetement du faux.

**verite** — Le sens retenu est « Verite/Realite ». Le mot al-haqq designe la realite objective. L'alternative « devoir » est ecartee car le contexte parle de la verite comme contenu cognitif a proteger, pas comme obligation.

**faux** — Le sens retenu est « Vanite/Nullite ». Le mot al-baatil designe ce qui est sans realite, sans fondement. L'alternative « annuler » est ecartee car le contexte utilise le nom (le faux), pas le verbe (annuler).

**cachez** — Le sens retenu est « Dissimulation/Secret ». Le verbe taktumuu designe l'acte volontaire de cacher la verite. Pas d'alternative pertinente — la racine k-t-m n'a qu'un concept.

**savez** — Le sens retenu est « Savoir/Connaissance ». Le verbe ta'lamuuna designe l'etat de celui qui sait. L'alternative « monde » est ecartee car le contexte parle du savoir des fils d'Israel, pas de la creation.

§CRITIQUE§
**revetez vs melangez** — Les traductions courantes donnent « ne melangez pas ». Le Lane's donne pour labasa « he confused, he made things obscure ». Le sens premier de l-b-s est « vetir, habiller » — on habille la verite du faux comme on habille un corps d'un vetement. « Revetir » preserve cette image concrete de recouvrement que « melanger » perd. Le faux est le vetement qui cache la verite — pas un ingredient qui se melange a elle.
**faux vs mensonge** — Le Lane's donne pour batil « vain, false, null ». Le batil n'est pas le mensonge (kadhib) mais le vain, ce qui est sans fondement. « Faux » est preferable a « mensonge » car le batil peut etre non-intentionnel (une croyance fausse) tandis que le mensonge est toujours intentionnel.`,
    segments: [
      { fr: "et ne", phon: "wala", arabic: "وَلَا", is_particle: true, position: 1 },
      { fr: "revetez", pos: "verbe", phon: "talbisuu", arabic: "تَلْبِسُوا۟", word_key: "lbs", is_particle: false, sense_retenu: "revetir", position: 2 },
      { fr: "la verite", pos: "nom", phon: "al-haqqa", arabic: "ٱلْحَقَّ", word_key: "hqq", is_particle: false, sense_retenu: "verite", position: 3 },
      { fr: "du faux", pos: "nom", phon: "bil-baatili", arabic: "بِٱلْبَٰطِلِ", word_key: "btl", is_particle: false, sense_retenu: "faux", position: 4 },
      { fr: "et ne cachez pas", pos: "verbe", phon: "wa-taktumuu", arabic: "وَتَكْتُمُوا۟", word_key: "ktm", is_particle: false, sense_retenu: "cacher", position: 5 },
      { fr: "la verite", pos: "nom", phon: "al-haqqa", arabic: "ٱلْحَقَّ", word_key: "hqq", is_particle: false, sense_retenu: "verite", position: 6 },
      { fr: "alors que vous", phon: "wa-antum", arabic: "وَأَنتُمْ", is_particle: true, position: 7 },
      { fr: "savez", pos: "verbe", phon: "ta'lamuuna", arabic: "تَعْلَمُونَ", word_key: "elm", is_particle: false, sense_retenu: "savoir", position: 8 }
    ],
    words: [
      {
        word_key: "lbs", position: 2, sense_chosen: "revetir",
        analysis_axes: {
          concept_chosen: "Confusion/Mélange",
          concepts: {
            "Confusion/Mélange": {
              status: "retenu",
              senses: ["confondre", "obscurcir"],
              proof_ctx: "Le verbe talbisuu est un inaccompli 2MP de la racine l-b-s. Le Lane's donne « he confused, rendered things obscure, confounded, mixed ». La racine l-b-s porte fondamentalement l'idee de couvrir — vetir un corps ou vetir la verite de faux. Quand on habille la verite du faux, on la rend meconnaissable — on confond les deux au point qu'on ne distingue plus le vrai du faux. Le verbe est ici avec la preposition bi (talbisuu al-haqqa bil-baatili) — vous revetez la verite du/par le faux.",
              axe1_verset: "Le verbe talbisuu est la premiere prohibition du verset. La structure « ne revetez pas la verite du faux » utilise l'image du vetement : le faux est le vetement dont on couvre la verite. La verite est la (al-haqqa) mais elle est cachee sous une couche de faux (bil-baatili). La deuxieme prohibition (ne cachez pas la verite) est une reformulation : revetir de faux et cacher sont deux faces du meme acte — rendre la verite inaccessible.",
              axe2_voisins: "Le verset 41 interdisait de vendre les signes et d'etre les premiers a recouvrir. Ce verset 42 precise comment se fait le recouvrement : en revetant la verite du faux et en la cachant. Le kufr du verset 41 (recouvrir) se concretise dans le talbis du verset 42 (habiller de faux). Le verset 43 enchainera avec l'alternative positive : au lieu de corrompre, etablissez la priere, donnez la zakat, inclinez-vous.",
              axe3_sourate: "La racine l-b-s apparait rarement dans la sourate mais le theme du melange vrai-faux est central. En 2:78, les illettres parmi les fils d'Israel « ne connaissent du Livre que des faux espoirs ». En 2:79, ceux qui ecrivent le Livre de leurs mains et disent « ceci vient de Dieu » — une forme de talbis (habiller le faux du vetement du sacre). La corruption textuelle est une forme de talbis.",
              axe4_coherence: "La racine l-b-s apparait 23 fois dans le Coran. En 6:82, « ceux qui croient et ne revetent pas (yalbisuu) leur foi d'injustice ». En 6:9, « Nous aurions reve quelqu'un de semblable et Nous leur aurions rendu confus (labbasna) ce qu'ils rendent confus ». Le talbis est un acte de confusion deliberee qui brouille les frontieres entre le vrai et le faux.",
              axe5_frequence: "Pour la mission du khalifa, le talbis est la corruption la plus subtile. Le khalifa qui revet la verite du faux ne la detruit pas ouvertement — il la rend meconnaissable. C'est pire que le kufr ouvert car le talbis trompe meme les sinceres. La clarte et la distinction vrai-faux sont des devoirs du khalifa."
            },
            "Vêtement/Revêtement": {
              status: "probable",
              senses: ["vêtir", "habiller", "revêtir", "vêtement"],
              proof_ctx: "Le vetement est le sens premier de l-b-s (habiller un corps). Le contexte utilise la metaphore du vetement appliquee a la verite — on vetit la verite du faux comme on vetit un corps. Le sens de confusion derive du sens de vetement : confondre c'est habiller une chose des apparences d'une autre."
            }
          }
        }
      },
      {
        word_key: "hqq", position: 3, sense_chosen: "verite",
        analysis_axes: {
          concept_chosen: "Vérité/Réalité",
          concepts: {
            "Vérité/Réalité": {
              status: "retenu",
              senses: ["être vrai", "vérité", "réalité", "droit"],
              proof_ctx: "Le mot al-haqqa est un nom defini au cas accusatif de la racine h-q-q. Le Lane's donne « truth, reality, right, that which is just, what is true, what is obligatory, certain ». Le haqq est la realite telle qu'elle est — pas telle qu'on voudrait qu'elle soit. C'est une verite objective et permanente qui existe independamment de celui qui la reconnaît. L'article defini (al-) indique la verite connue, identifiable — pas une verite vague mais LA verite que les fils d'Israel connaissent.",
              axe1_verset: "Le mot al-haqqa apparait deux fois dans ce verset court — une fois comme objet du talbis (ne revetez pas LA VERITE du faux) et une fois comme objet du katm (ne cachez pas LA VERITE). La repetition insiste : la verite est doublement attaquee, par le deguisement et par la dissimulation. Les deux actes visent le meme objet (la verite) mais par des moyens differents. Le talbis la deforme, le katm la cache.",
              axe2_voisins: "Le verset 41 parlait de signes (aayaat) et de kufr (recouvrement). Ce verset 42 precise que l'objet recouvert est la verite (al-haqq) et que le moyen est le faux (al-baatil). La progression du verset 41 au 42 va du general au specifique : du recouvrement en general au revetement de la verite par le faux en particulier. Le verset 43 proposera l'alternative positive.",
              axe3_sourate: "Le mot haqq est un mot-cle de la sourate al-Baqarah. En 2:26, « ils savent que c'est la verite (al-haqq) venant de leur Seigneur ». En 2:42 et 2:146, la verite est ce que les fils d'Israel connaissent et cachent. En 2:91, « ils le couvrent alors qu'il confirme ce qu'ils ont ». La sourate revient sans cesse sur la contradiction : ils connaissent la verite et la cachent ou la recouvrent.",
              axe4_coherence: "La racine h-q-q apparait 287 fois dans le Coran. Le haqq est l'un des noms de Dieu et l'un des attributs de Sa revelation. En 10:32, « tel est Dieu, votre Seigneur, le Vrai (al-Haqq) ». En 17:81, « dis : la verite est venue et le faux a disparu — le faux etait voue a disparaitre ». La verite et le faux sont en opposition permanente dans le Coran — la verite finit toujours par vaincre.",
              axe5_frequence: "Pour la mission du khalifa, la verite est le contenu de la mission. Le khalifa transmet la verite, la protege, la rend accessible. Revetir la verite du faux ou la cacher sont les deux formes de trahison de la mission. La clarte dans la transmission de la verite est un devoir absolu du khalifa."
            },
            "Obligation/Nécessité": {
              status: "nul",
              senses: ["devoir", "mériter", "être obligatoire"],
              proof_ctx: "L'obligation (haqq 'ala = devoir pour) est un sens de la racine h-q-q. Le contexte utilise al-haqq dans le sens de verite (opposee au baatil/faux), pas dans le sens d'obligation. L'opposition haqq/baatil est une opposition epistemique (vrai/faux), pas deontique (devoir/non-devoir)."
            }
          }
        }
      },
      {
        word_key: "btl", position: 4, sense_chosen: "faux",
        analysis_axes: {
          concept_chosen: "Vanité/Nullité",
          concepts: {
            "Vanité/Nullité": {
              status: "retenu",
              senses: ["être vain", "faux", "nul"],
              proof_ctx: "Le mot al-baatili est un nom defini au cas genitif de la racine b-t-l. Le Lane's donne « false, vain, null, void, futile, worthless ». Le baatil est ce qui n'a pas de realite — c'est l'oppose du haqq. Le faux n'a pas de fondement propre, il n'existe que par imitation ou corruption du vrai. L'article defini (al-) indique le faux connu — pas un faux vague mais LE faux que les fils d'Israel utilisent pour couvrir la verite.",
              axe1_verset: "Le mot al-baatili est l'instrument de la corruption dans la premiere prohibition. On habille la verite DU FAUX — le faux est le vetement, la verite est le corps cache sous ce vetement. Le faux n'a pas d'existence autonome — il n'existe que comme parasitage de la verite. Revetir la verite du faux c'est donner au faux l'apparence de la verite, lui emprunter sa credibilite. C'est une forme de contrefacon spirituelle.",
              axe2_voisins: "Le verset 41 parlait de kufr (recouvrement) et de vente des signes. Ce verset 42 precise le moyen : le baatil (le faux) est l'instrument du recouvrement. Le faux est ce qui est substitue a la verite ou superpose sur elle. Le verset 43 proposera les pratiques qui eliminent le faux : la priere, la zakat, l'inclinaison avec ceux qui s'inclinent.",
              axe3_sourate: "La racine b-t-l apparait dans la sourate en opposition au haqq. En 2:42, l'opposition haqq/baatil est explicite. L'ensemble de la sourate est structure par cette opposition : ceux qui suivent la verite et ceux qui suivent le faux, ceux qui croient et ceux qui couvrent. Le baatil est la tentation permanente qui guette les detenteurs de la verite.",
              axe4_coherence: "La racine b-t-l apparait 36 fois dans le Coran. En 17:81, « la verite est venue et le faux a disparu — le faux est voue a disparaitre (inna al-baatila kana zahuuqan) ». Le faux est par nature ephemere — il n'a pas de fondement et finit par s'effondrer. En 2:42, les fils d'Israel tentent de maintenir le faux en le revetant de verite — mais cette strategie est vouee a l'echec.",
              axe5_frequence: "Pour la mission du khalifa, le faux est l'ennemi de la mission. Le khalifa doit identifier le faux et le separer de la verite — pas les melanger. La separation du vrai et du faux est une tache permanente du khalifa, car le faux se renouvelle sans cesse sous de nouvelles formes."
            },
            "Annulation": {
              status: "nul",
              senses: ["annuler", "invalider"],
              proof_ctx: "L'annulation (abtala = rendre nul) est un sens de la forme IV de b-t-l. Le contexte utilise le nom al-baatil (le faux, le vain), pas le verbe (annuler). L'annulation est l'effet du faux — ce qui est faux annule ce qui est vrai quand il le recouvre."
            }
          }
        }
      },
      {
        word_key: "ktm", position: 5, sense_chosen: "cacher",
        analysis_axes: {
          concept_chosen: "Dissimulation/Secret",
          concepts: {
            "Dissimulation/Secret": {
              status: "retenu",
              senses: ["cacher", "taire", "dissimuler", "garder secret"],
              proof_ctx: "Le verbe taktumuu est un inaccompli 2MP de la racine k-t-m avec negation. Le Lane's donne « he concealed, he hid, he suppressed, he kept secret ». Le katm est l'acte volontaire de soustraire une information a ceux qui ont le droit de la connaitre. C'est un peche de la parole — on retient ce qu'on devrait dire. Le verbe est suivi de al-haqqa (la verite) — ils cachent la verite a ceux qui la cherchent.",
              axe1_verset: "Le verbe taktumuu est la deuxieme prohibition du verset, parallele a la premiere (talbisuu). La premiere interdit de deguiser la verite (la revetir du faux), la deuxieme interdit de la cacher (la dissimuler completement). Les deux actes sont complementaires : on peut soit deguiser la verite (elle est la mais meconnaissable), soit la supprimer (elle n'est plus la du tout). Le verset interdit les deux strategies de corruption. La precision finale « alors que vous savez » aggrave la faute : ils cachent sciemment.",
              axe2_voisins: "Le verset 41 interdisait de vendre les signes. Ce verset 42 interdit de cacher la verite. Vendre et cacher sont lies : celui qui vend les signes pour un profit cache la verite aux gens. Le verset 43 proposera l'alternative : au lieu de cacher, priez, donnez, inclinez-vous — des actes de manifestation publique de la foi, l'oppose de la dissimulation.",
              axe3_sourate: "La racine k-t-m revient dans la sourate pour accuser les fils d'Israel de cacher la verite. En 2:146, « ceux a qui Nous avons donne le Livre le connaissent comme ils connaissent leurs fils, et un groupe d'entre eux cache la verite alors qu'ils savent ». En 2:159, « ceux qui cachent ce que Nous avons fait descendre comme preuves et guidance — ceux-la, Dieu les maudit ». La dissimulation de la verite est un peche grave et recurrent dans cette sourate.",
              axe4_coherence: "La racine k-t-m apparait 21 fois dans le Coran. Elle est principalement utilisee dans le contexte des gens du Livre qui cachent les signes et la verite. En 3:71, « pourquoi revetez-vous la verite du faux et cachez-vous la verite alors que vous savez ». Ce verset 3:71 reprend mot pour mot 2:42 — la repetition montre la gravite du reproche.",
              axe5_frequence: "Pour la mission du khalifa, la dissimulation est la negation de la mission. Le khalifa est cense transmettre, pas cacher. Cacher la verite c'est priver les gens de la guidance et les laisser dans l'egarement. Le khalifa qui cache la verite est pire que celui qui l'ignore — il sait et il tait."
            }
          }
        }
      },
      {
        word_key: "elm", position: 8, sense_chosen: "savoir",
        analysis_axes: {
          concept_chosen: "Savoir/Connaissance",
          concepts: {
            "Savoir/Connaissance": {
              status: "retenu",
              senses: ["savoir", "certitude", "savant", "science", "enseignement", "connaître", "être informé"],
              proof_ctx: "Le verbe ta'lamuuna est un inaccompli 2MP de la racine e-l-m. Le Lane's donne « he knew, he learned, he was cognizant of, he was aware ». Le 'ilm est la certitude interieure fondee sur des preuves — ce n'est pas une simple opinion mais un savoir etabli. L'inaccompli indique un etat continu — ils savent (de maniere permanente). La proposition « wa-antum ta'lamuuna » (alors que vous savez) est une circonstancielle qui aggrave la faute : ils ne cachent pas par ignorance mais par choix delibere.",
              axe1_verset: "Le verbe ta'lamuuna ferme le verset et donne son poids a toute la prohibition. Le « alors que vous savez » transforme la dissimulation de la verite en crime delibere. S'ils ne savaient pas, on pourrait les excuser d'ignorance. Mais ils savent — leur savoir rend leur dissimulation inexcusable. Le verset construit une gradation : revetir la verite du faux (corruption active) + cacher la verite (suppression passive) + alors que vous savez (aggravation par la conscience).",
              axe2_voisins: "Le verset 41 accusait les fils d'Israel de vendre les signes et d'etre les premiers a recouvrir. Ce verset 42 ajoute le detail crucial : ils savent ce qu'ils font. Le verset 40 leur demandait de se souvenir du bienfait — le savoir du verset 42 confirme qu'ils se souviennent mais choisissent de cacher. Le verset 43 leur proposera des actes concrets pour sortir de cette corruption consciente.",
              axe3_sourate: "Le savoir des fils d'Israel est un theme recurrent de la sourate al-Baqarah. En 2:75, « un groupe d'entre eux entendait la parole de Dieu puis la deformait apres l'avoir comprise, en toute connaissance ». En 2:146, « ils le connaissent comme ils connaissent leurs fils ». La sourate insiste sur le fait que le probleme des fils d'Israel n'est pas le manque de savoir mais le refus de suivre ce qu'ils savent.",
              axe4_coherence: "La racine e-l-m apparait 854 fois dans le Coran — c'est l'une des plus frequentes. Le savoir est valorise dans le Coran (« dis : sont-ils egaux, ceux qui savent et ceux qui ne savent pas ? » 39:9). Mais le savoir sans action est condamne — en 2:44, « ordonnez-vous la piete aux gens tout en vous oubliant vous-memes, alors que vous recitez le Livre ? Ne raisonnez-vous pas ? ». Le savoir impose une responsabilite.",
              axe5_frequence: "Pour la mission du khalifa, le savoir est un outil et une responsabilite. Le khalifa qui sait a le devoir de transmettre et d'agir en consequence. Le savoir sans action est une trahison — il fait du khalifa un temoin muet de la verite qu'il refuse de partager."
            },
            "Monde/Création": {
              status: "nul",
              senses: ["les mondes", "ensemble des créatures", "univers", "monde"],
              proof_ctx: "Le monde ('aalam) est un sens de la racine e-l-m. Le contexte utilise ta'lamuuna comme verbe de connaissance, pas comme reference au monde. Les deux sens partagent l'idee que le monde est un signe (marque) qui mene a la connaissance."
            }
          }
        }
      }
    ]
  },

  // =====================================================
  // VERSET 2:43
  // verse_id=50, analysis_id=410
  // Etablissez la priere, donnez l'impot de purification,
  // et inclinez-vous avec ceux qui s'inclinent.
  // =====================================================
  43: {
    verse_id: 50,
    analysis_id: 410,
    translation_arab: "Etablissez la priere, donnez l'impot de purification, et inclinez-vous avec ceux qui s'inclinent.",
    full_translation: "Et accomplissez la priere, acquittez la Zakat, et inclinez-vous avec ceux qui s'inclinent.",
    translation_explanation: `§DEMARCHE§
Ce verset donne trois ordres positifs aux fils d'Israel apres les prohibitions des versets 41-42. Le verbe **aqiimuu** est un imperatif 2MP forme IV de la racine q-w-m. Le Lane's donne « he stood, he rose, he set up, he established, he performed ». La forme IV (aqaama) signifie « faire se dresser, etablir » — etablir la priere c'est la faire se tenir debout, lui donner sa pleine mesure. Le mot **al-salaata** est un nom feminin defini au cas accusatif de la racine s-l-w. Le Lane's donne « prayer, supplication, the act of praying ». La salat est la priere rituelle — l'acte structure de se tourner vers Dieu par des paroles et des gestes. Le verbe **aatuu** est un imperatif 2MP forme IV de la racine a-t-y. Le Lane's donne « he gave, he brought ». La forme IV (aata) signifie « donner, remettre ». Le mot **al-zakaata** est un nom feminin defini au cas accusatif de la racine z-k-w. Le Lane's donne « purity, alms, the legal charity ». La zakat est l'impot de purification — le don qui purifie les biens. Le verbe **irka'uu** est un imperatif 2MP de la racine r-k-e. Le Lane's donne « he bowed, he bent his body ». Le ruku' est l'inclinaison dans la priere — courber le dos en signe de soumission. Le mot **al-raaki'iina** est un participe actif pluriel defini de la meme racine r-k-e au cas genitif. Le Lane's donne « those who bow ». Les raaki'un sont ceux qui s'inclinent — la communaute des priants.

§JUSTIFICATION§
**etablissez** — Le sens retenu est « Verticalite/Droiture ». Le verbe aqiimuu de la racine q-w-m porte l'idee de faire se dresser, d'etablir solidement. L'alternative « peuple » est ecartee car le contexte utilise la forme IV verbale (etablir), pas le nom (peuple).

**priere** — Le sens retenu est « Priere/Invocation ». Le mot al-salaata designe la priere rituelle. L'alternative « proximite » est ecartee car le contexte parle de l'acte rituel structure, pas de la proximite en soi.

**donnez** — Le sens retenu est « Venue/Arrivee ». Le verbe aatuu de la racine a-t-y en forme IV signifie donner, faire parvenir. L'alternative « venir » est ecartee car la forme IV est causative (faire venir = donner), pas la forme I (venir).

**impot de purification** — Le sens retenu est « Purification/Croissance ». Le mot al-zakaata designe l'aumone legale qui purifie les biens. L'alternative n'existe pas — la racine z-k-w n'a qu'un concept.

**inclinez-vous** — Le sens retenu est « Inclinaison/Priere ». Le verbe irka'uu designe l'acte de s'incliner dans la priere. L'alternative n'existe pas — la racine r-k-e n'a qu'un concept.

§CRITIQUE§
**etablissez vs accomplissez** — Les traductions courantes donnent « accomplissez » pour aqiimuu. Le Lane's donne « he established, he set up, he performed ». « Etablir » est plus precis que « accomplir » car aqaama porte l'idee de faire se dresser — la priere doit etre dressee, maintenue debout, pas simplement accomplie mecaniquement. Etablir implique la regularite, la constance, la pleine mesure.
**impot de purification vs Zakat** — Le mot zakat signifie a la fois purification et croissance. « Impot de purification » traduit les deux dimensions : c'est un prelevement obligatoire (impot) qui purifie les biens de celui qui donne et les fait croitre spirituellement. « Zakat » seul est un emprunt qui ne traduit rien.
**inclinez-vous vs prosternez-vous** — Le Lane's donne pour raka'a « he bowed, he bent his body in the middle ». Le ruku' est l'inclinaison (courber le dos), distincte du sujud (prosternation front au sol). « Inclinez-vous » est la traduction correcte du ruku'.`,
    segments: [
      { fr: "et etablissez", pos: "verbe", phon: "wa-aqiimuu", arabic: "وَأَقِيمُوا۟", word_key: "qwm", is_particle: false, sense_retenu: "etablir", position: 1 },
      { fr: "la priere", pos: "nom", phon: "al-salaata", arabic: "ٱلصَّلَوٰةَ", word_key: "slw", is_particle: false, sense_retenu: "priere rituelle", position: 2 },
      { fr: "et donnez", pos: "verbe", phon: "wa-aatuu", arabic: "وَءَاتُوا۟", word_key: "aty", is_particle: false, sense_retenu: "donner", position: 3 },
      { fr: "l'impot de purification", pos: "nom", phon: "al-zakaata", arabic: "ٱلزَّكَوٰةَ", word_key: "zkw", is_particle: false, sense_retenu: "purification", position: 4 },
      { fr: "et inclinez-vous", pos: "verbe", phon: "wa-irka'uu", arabic: "وَٱرْكَعُوا۟", word_key: "rke", is_particle: false, sense_retenu: "s'incliner", position: 5 },
      { fr: "avec", phon: "ma'a", arabic: "مَعَ", is_particle: true, position: 6 },
      { fr: "ceux qui s'inclinent", pos: "nom", phon: "al-raaki'iina", arabic: "ٱلرَّٰكِعِينَ", word_key: "rke", is_particle: false, sense_retenu: "ceux qui s'inclinent", position: 7 }
    ],
    words: [
      {
        word_key: "qwm", position: 1, sense_chosen: "etablir",
        analysis_axes: {
          concept_chosen: "Verticalité/Droiture",
          concepts: {
            "Verticalité/Droiture": {
              status: "retenu",
              senses: ["se lever", "se dresser", "droit", "rectitude", "redresser", "corriger", "se tenir debout"],
              proof_ctx: "Le verbe aqiimuu est un imperatif 2MP forme IV de la racine q-w-m. Le Lane's donne « he stood up, he rose, he set upright, he established, he maintained ». La forme IV (aqaama) est causative — faire se dresser, faire se tenir debout. Aqaama al-salata signifie faire se dresser la priere — lui donner sa pleine stature, la maintenir debout par la regularite et la sincerite. L'imperatif ordonne un acte continu, pas ponctuel.",
              axe1_verset: "Le verbe aqiimuu ouvre le verset avec le premier des trois ordres positifs. Apres les prohibitions des versets 41-42 (ne recouvrez pas, ne vendez pas, ne revetez pas, ne cachez pas), ce verset donne l'alternative constructive : etablissez, donnez, inclinez-vous. La priere est le premier acte demande — c'est l'acte fondateur de la relation avec Dieu. Etablir la priere (pas simplement la faire) implique la regularite, la ponctualite, le recueillement et la pleine mesure des conditions.",
              axe2_voisins: "Les versets 41-42 interdisaient des actes de corruption (recouvrir, vendre les signes, meler vrai et faux, cacher la verite). Ce verset 43 propose les remedes : la priere connecte a Dieu, la zakat purifie les biens, l'inclinaison integre a la communaute. Les trois ordres repondent aux trois corruptions : la priere combat le kufr, la zakat combat la vente des signes, l'inclinaison communautaire combat l'isolement dans la dissimulation.",
              axe3_sourate: "L'expression aqiimuu al-salata est l'un des ordres les plus recurrents de la sourate al-Baqarah. En 2:3, les pieux sont ceux qui « etablissent la priere ». En 2:83, « etablissez la priere et donnez la zakat ». En 2:110, « etablissez la priere et donnez la zakat ». La paire priere-zakat est un motif structurel de la sourate — la priere pour la relation verticale avec Dieu, la zakat pour la relation horizontale avec les hommes.",
              axe4_coherence: "La racine q-w-m apparait 660 fois dans le Coran. Le verbe aqaama al-salata est la formule standard pour ordonner la priere — il apparait des dizaines de fois. En 11:114, « etablis la priere aux deux extremites du jour ». En 17:78, « etablis la priere au declin du soleil jusqu'a l'obscurite de la nuit ». L'etablissement de la priere est un commandement universel adresse a tous les croyants, ici specifiquement aux fils d'Israel.",
              axe5_frequence: "Pour la mission du khalifa, la priere est le lien vital avec le Mandataire. Le khalifa qui n'etablit pas la priere coupe le lien avec Celui qui l'a mandate. Etablir la priere c'est renouveler quotidiennement l'engagement de la khilafa — chaque priere est un rappel de la mission et de sa Source."
            },
            "Peuple/Communauté": {
              status: "nul",
              senses: ["peuple", "communauté", "tribu", "nation", "groupe"],
              proof_ctx: "Le peuple (qawm) est un nom de la racine q-w-m. Le contexte utilise le verbe forme IV (aqaama = etablir), pas le nom (qawm = peuple). Les deux derivent de l'idee de se tenir debout — un peuple est un groupe qui se tient ensemble, etablir c'est faire se tenir debout."
            }
          }
        }
      },
      {
        word_key: "slw", position: 2, sense_chosen: "priere rituelle",
        analysis_axes: {
          concept_chosen: "Prière/Invocation",
          concepts: {
            "Prière/Invocation": {
              status: "retenu",
              senses: ["prier", "prière rituelle", "invoquer", "bénir", "lieu de prière"],
              proof_ctx: "Le mot al-salaata est un nom feminin defini au cas accusatif de la racine s-l-w. Le Lane's donne « prayer, supplication, the ritual prayer, the salat ». La salat est l'acte structure de se tourner vers Dieu par des paroles, des postures et une intention. Elle combine le corps (debout, incline, prosterne), la parole (recitation) et le cœur (intention). L'article defini (al-) indique LA priere connue — pas n'importe quelle invocation mais la priere rituelle prescrite.",
              axe1_verset: "Le mot al-salaata est le complement d'objet du verbe aqiimuu — ce qu'il faut etablir. La priere est le premier des trois actes ordonnes dans ce verset. Sa position premiere montre sa priorite — avant la zakat (don materiel) et avant l'inclinaison communautaire (integration sociale), il faut la connexion avec Dieu. La priere est le fondement sur lequel les autres actes s'appuient.",
              axe2_voisins: "Les versets 41-42 decrivaient des corruptions intellectuelles et morales (recouvrir, deguiser, cacher). Ce verset 43 propose la priere comme premier remede. La priere reconnecte a Dieu celui qui s'en est eloigne par la corruption. Quand on se tient devant Dieu dans la priere, on ne peut pas en meme temps revetir la verite du faux — la priere exige la sincerite.",
              axe3_sourate: "Le mot salat/salata est l'un des plus frequents de la sourate al-Baqarah. En 2:3, les pieux « etablissent la priere ». En 2:45, « cherchez secours dans la patience et la priere ». En 2:153, « cherchez secours dans la patience et la priere ». En 2:238, « preservez les prieres et la priere mediane ». La priere est le fil conducteur de la vie du croyant dans cette sourate.",
              axe4_coherence: "La racine s-l-w apparait 99 fois dans le Coran. La salat est le deuxieme pilier de l'Islam et l'acte le plus frequemment ordonne dans le Coran. En 29:45, « la priere preserve de la turpitude et du blamable ». La priere n'est pas un simple rituel — elle est une protection active contre le mal. L'ordre de prier adresse aux fils d'Israel montre que la priere est un commandement universel, pas specifique a une communaute.",
              axe5_frequence: "Pour la mission du khalifa, la priere est l'audience quotidienne avec le Roi. Le khalifa qui prie se presente devant Dieu pour recevoir ses instructions et renouveler son engagement. Sans priere, le khalifa est un mandataire qui ne consulte jamais son Mandataire."
            },
            "Proximité/Attachement": {
              status: "nul",
              senses: ["suivre de près"],
              proof_ctx: "La proximite est un sens secondaire de s-l-w (suivre de pres, etre proche). Le contexte utilise le nom al-salat dans son sens premier de priere rituelle, pas dans le sens de proximite physique. Les deux sens sont lies — la priere est un acte de proximite avec Dieu."
            }
          }
        }
      },
      {
        word_key: "aty", position: 3, sense_chosen: "donner",
        analysis_axes: {
          concept_chosen: "Venue/Arrivée",
          concepts: {
            "Venue/Arrivée": {
              status: "retenu",
              senses: ["venir", "arriver", "apporter", "donner", "commettre"],
              proof_ctx: "Le verbe aatuu est un imperatif 2MP forme IV de la racine a-t-y. Le Lane's donne « he gave, he brought, he conferred, he bestowed ». La forme IV (aata) est causative — faire venir = donner, apporter, remettre. L'imperatif ordonne de donner la zakat — de la faire parvenir a ses destinataires. Le sens de « donner » derive de « faire venir » : donner c'est faire venir quelque chose vers celui qui le recoit.",
              axe1_verset: "Le verbe aatuu est le deuxieme des trois ordres du verset. Apres l'etablissement de la priere (relation verticale), le don de la zakat (relation horizontale). La structure est ternaire : priere (Dieu), zakat (les pauvres), inclinaison (la communaute). Les trois ordres couvrent les trois dimensions de la vie du croyant : le spirituel, le social, et le communautaire.",
              axe2_voisins: "Le verset 41 interdisait de vendre les signes pour un prix derisoire (une transaction corrompue). Ce verset 43 ordonne de donner la zakat (une transaction purifiante). L'opposition est frappante : au lieu de vendre le sacre pour un profit, donnez vos biens pour purifier. La zakat est l'antidote de la vente des signes — on purifie ses biens en les partageant au lieu de les corrompre en vendant le sacre.",
              axe3_sourate: "L'expression aatuu al-zakata est recurrente dans la sourate al-Baqarah. En 2:43, 2:83, 2:110, 2:177, 2:277 — elle revient cinq fois. Chaque occurrence accompagne l'etablissement de la priere, formant la paire priere-zakat qui structure les obligations du croyant. La sourate consacre aussi des passages entiers aux depenses (2:261-274).",
              axe4_coherence: "La racine a-t-y apparait 549 fois dans le Coran. La forme IV (aata) est utilisee pour decrire les dons de Dieu aux hommes et les dons des hommes aux necessiteux. En 2:177, « il a donne les biens, malgre son amour pour eux, aux proches, orphelins, necessiteux ». Donner est un acte fondamental du Coran — la generosite est la marque du croyant.",
              axe5_frequence: "Pour la mission du khalifa, le don est le deversement des bienfaits recus. Le khalifa recoit de Dieu et donne aux creatures — il est un canal de distribution, pas un point d'accumulation. Donner la zakat c'est accomplir la redistribution qui fait partie de la mission."
            }
          }
        }
      },
      {
        word_key: "zkw", position: 4, sense_chosen: "purification",
        analysis_axes: {
          concept_chosen: "Purification/Croissance",
          concepts: {
            "Purification/Croissance": {
              status: "retenu",
              senses: ["purifier", "aumône légale", "croître", "être pur", "prospérer"],
              proof_ctx: "Le mot al-zakaata est un nom feminin defini au cas accusatif de la racine z-k-w. Le Lane's donne « purity, the act of purifying, the obligatory charity, increase, growth ». La zakat porte deux sens fondamentaux : purifier et faire croitre. Donner la zakat purifie les biens de celui qui donne (enleve la souillure de l'accumulation) et fait croitre ce qui reste (Dieu benissant le bien partage). L'article defini (al-) indique la zakat connue — le prelevement legal obligatoire.",
              axe1_verset: "Le mot al-zakaata est le complement du verbe aatuu — ce qu'il faut donner. La zakat est le deuxieme acte ordonne apres la priere. La paire priere-zakat forme le socle des obligations : la priere purifie l'ame, la zakat purifie les biens. Ensemble, elles couvrent l'interiorite (ame) et l'exteriorite (biens). Le verset construit une pedagogie d'integration : priez (individuel), donnez (social), inclinez-vous avec les autres (communautaire).",
              axe2_voisins: "Le verset 41 accusait les fils d'Israel de vendre les signes pour un prix derisoire. Ce verset 43 ordonne de donner la zakat — l'exact oppose. Vendre les signes est une transaction corrompue qui enrichit illegitimement. Donner la zakat est une transaction purifiante qui enrichit legitimement. Les deux gestes impliquent de l'argent mais dans des directions opposees : vers soi (vendre les signes) ou vers les autres (donner la zakat).",
              axe3_sourate: "Le mot zakat apparait dans la sourate al-Baqarah chaque fois que les obligations du croyant sont resumees. En 2:43, 2:83, 2:110, 2:177, 2:277. La sourate consacre aussi de longs passages a la charite volontaire (sadaqat) en plus de la zakat obligatoire. En 2:261, « ceux qui depensent leurs biens dans le chemin de Dieu sont comme un grain qui produit sept epis ». La depense dans le chemin de Dieu est un investissement a rendement exponentiel.",
              axe4_coherence: "La racine z-k-w apparait 59 fois dans le Coran. La zakat est le troisieme pilier de l'Islam. En 9:103, « prends de leurs biens une aumone qui les purifie et les fait croitre ». Le double sens de purification et de croissance est constant — la zakat ne diminue pas les biens mais les purifie et les fait prosperer spirituellement.",
              axe5_frequence: "Pour la mission du khalifa, la zakat est l'outil de redistribution de la justice sociale. Le khalifa administre les biens de la terre — la zakat garantit que les biens circulent et ne stagnent pas chez les riches. La purification des biens par le partage est une dimension essentielle de la gestion khalifale."
            }
          }
        }
      },
      {
        word_key: "rke", position: 5, sense_chosen: "s'incliner",
        analysis_axes: {
          concept_chosen: "Inclinaison/Prière",
          concepts: {
            "Inclinaison/Prière": {
              status: "retenu",
              senses: ["s'incliner", "génuflexion", "rukû'"],
              proof_ctx: "Le verbe irka'uu est un imperatif 2MP de la racine r-k-e. Le Lane's donne « he bowed, he bent his body, he inclined, he lowered himself ». Le ruku' est l'inclinaison du haut du corps — courber le dos, mains sur les genoux, en signe de soumission a Dieu. C'est un pilier de la priere rituelle. L'imperatif ordonne l'inclinaison et la precision « ma'a al-raaki'iina » (avec ceux qui s'inclinent) ajoute la dimension communautaire — s'incliner non pas seul mais avec la communaute des priants.",
              axe1_verset: "Le verbe irka'uu est le troisieme et dernier ordre du verset. Apres la priere (relation avec Dieu) et la zakat (relation avec les necessiteux), l'inclinaison avec ceux qui s'inclinent ajoute la dimension communautaire. Le « avec » (ma'a) est la cle : il ne suffit pas de s'incliner seul, il faut rejoindre la communaute. L'ordre implique l'integration a un groupe de croyants — pas l'isolement dans une piete individuelle mais la participation a la priere collective.",
              axe2_voisins: "Les versets 41-42 decrivaient des actes de dissimulation et de corruption individuels (cacher la verite, revetir le vrai du faux). Ce verset 43 oppose a cette individualite corrompue l'integration communautaire. S'incliner avec ceux qui s'inclinent c'est rejoindre les rangs de ceux qui obeissent — quitter l'isolement du corrupteur pour la transparence de la communaute.",
              axe3_sourate: "La racine r-k-e apparait rarement dans la sourate (13 occ. dans le Coran) mais chaque occurrence est significative. Le ruku' represente la soumission corporelle a Dieu — le corps s'incline comme le cœur devrait s'incliner. En 2:43, l'expression « irka'uu ma'a al-raaki'iina » est unique et porte une charge communautaire forte — rejoignez ceux qui prient, integrez-vous a la communaute.",
              axe4_coherence: "La racine r-k-e apparait 13 fois dans le Coran. En 3:43, « Maryam, recueille-toi devant ton Seigneur, prosterne-toi et incline-toi avec ceux qui s'inclinent ». La meme formule est utilisee pour Maryam et pour les fils d'Israel — l'inclinaison communautaire est un commandement universel. En 22:77, « inclinez-vous, prosternez-vous, adorez votre Seigneur et faites le bien ». L'inclinaison est un acte d'adoration qui precede la prosternation.",
              axe5_frequence: "Pour la mission du khalifa, l'inclinaison communautaire rappelle que la mission n'est pas solitaire. Le khalifa s'incline avec ceux qui s'inclinent — il fait partie de la communaute des obeissants, pas au-dessus d'elle. L'inclinaison est un acte d'humilite qui replace le khalifa dans le rang des serviteurs."
            }
          }
        }
      }
    ]
  }
};

// =====================================================
// DAILY PHRASES
// =====================================================
const dailyPhrases = [
  // shry (id=871) — echange
  { analysis_id: 871, phrases: [
    { sense: "acheter", arabic: "اشْتَرَيْتُ كِتَابًا جَدِيدًا مِنَ المَكْتَبَةِ", phon: "ishtaraytu kitaban jadidan mina al-maktaba", french: "J'ai achete un nouveau livre a la librairie." },
    { sense: "vendre", arabic: "لَا تَشْتَرِ بِدِينِكَ دُنْيَا غَيْرِكَ", phon: "la tashtari bi-dinika dunya ghayrika", french: "Ne vends pas ta religion pour le profit d'un autre." },
    { sense: "échanger", arabic: "اشْتَرَوُا الضَّلَالَةَ بِالهُدَى", phon: "ishtarawu al-dalalata bil-huda", french: "Ils ont echange la guidance contre l'egarement." }
  ]},
  // ayt (id=475) — signe
  { analysis_id: 475, phrases: [
    { sense: "signe", arabic: "فِي خَلْقِ السَّمَاوَاتِ وَالأَرْضِ آيَاتٌ", phon: "fi khalqi al-samawati wal-ardi ayat", french: "Dans la creation des cieux et de la terre il y a des signes." },
    { sense: "miracle", arabic: "أَظْهَرَ اللَّهُ آيَةً عَظِيمَةً", phon: "azhara Allahu ayatan 'azima", french: "Dieu a manifeste un miracle grandiose." },
    { sense: "preuve", arabic: "هَذِهِ آيَةٌ وَاضِحَةٌ عَلَى صِدْقِهِ", phon: "hadhihi ayatun wadihah 'ala sidqihi", french: "Ceci est une preuve claire de sa sincerite." }
  ]},
  // thmn (id=492) — prix
  { analysis_id: 492, phrases: [
    { sense: "prix", arabic: "مَا ثَمَنُ هَذَا الكِتَابِ؟", phon: "ma thamanu hadha al-kitab?", french: "Quel est le prix de ce livre ?" },
    { sense: "valeur", arabic: "الصِّدْقُ لَا يُقَدَّرُ بِثَمَنٍ", phon: "al-sidqu la yuqaddaru bi-thamanin", french: "La sincerite n'a pas de prix." },
    { sense: "acheter", arabic: "ثَمَّنَ البَائِعُ السِّلْعَةَ غَالِيًا", phon: "thammana al-ba'i'u al-sil'ata ghaliyan", french: "Le vendeur a fixe un prix eleve pour la marchandise." }
  ]},
  // lbs (id=506) — confusion/vetement
  { analysis_id: 506, phrases: [
    { sense: "vêtir", arabic: "لَبِسَ ثَوْبًا جَدِيدًا لِلْعِيدِ", phon: "labisa thawban jadidan lil-'id", french: "Il a mis un habit neuf pour la fete." },
    { sense: "confondre", arabic: "لَبَّسُوا عَلَى النَّاسِ أَمْرَهُمْ", phon: "labbasuu 'ala al-nasi amrahum", french: "Ils ont seme la confusion parmi les gens sur leur affaire." },
    { sense: "revêtir", arabic: "لَبِسَتِ الأَرْضُ حُلَّةً خَضْرَاءَ", phon: "labisati al-ardu hullatan khadra'", french: "La terre a revetu un habit vert." }
  ]},
  // btl (id=507) — vanite
  { analysis_id: 507, phrases: [
    { sense: "faux", arabic: "قَوْلُهُ بَاطِلٌ لَا أَسَاسَ لَهُ", phon: "qawluhu batilun la asasa lahu", french: "Sa parole est fausse, sans fondement." },
    { sense: "être vain", arabic: "بَطَلَ سِحْرُهُمْ أَمَامَ الحَقِّ", phon: "batala sihruhum amama al-haqq", french: "Leur sorcellerie est devenue vaine face a la verite." },
    { sense: "nul", arabic: "العَقْدُ بَاطِلٌ لِأَنَّهُ بُنِيَ عَلَى غِشٍّ", phon: "al-'aqdu batilun li-annahu buniya 'ala ghishsh", french: "Le contrat est nul car il est fonde sur la tromperie." }
  ]},
  // ktm (id=471) — dissimulation
  { analysis_id: 471, phrases: [
    { sense: "cacher", arabic: "كَتَمَ الشَّاهِدُ الحَقِيقَةَ", phon: "katama al-shahidu al-haqiqa", french: "Le temoin a cache la verite." },
    { sense: "taire", arabic: "لَا تَكْتُمْ مَا فِي قَلْبِكَ", phon: "la taktum ma fi qalbika", french: "Ne tais pas ce qui est dans ton coeur." },
    { sense: "dissimuler", arabic: "كَتَمَ مَرَضَهُ عَنْ أَهْلِهِ", phon: "katama maradahu 'an ahlihi", french: "Il a dissimule sa maladie a sa famille." }
  ]},
  // qwm (id=263) — verticalite
  { analysis_id: 263, phrases: [
    { sense: "se lever", arabic: "قَامَ الخَطِيبُ لِيُلْقِيَ كَلِمَتَهُ", phon: "qama al-khatibu li-yulqiya kalimatahu", french: "L'orateur s'est leve pour prononcer son discours." },
    { sense: "établir", arabic: "أَقَامُوا العَدْلَ فِي الأَرْضِ", phon: "aqamuu al-'adla fi al-ard", french: "Ils ont etabli la justice sur terre." },
    { sense: "rectitude", arabic: "الاسْتِقَامَةُ عَلَى الطَّرِيقِ أَهَمُّ شَيْءٍ", phon: "al-istiqamatu 'ala al-tariqi ahammu shay'", french: "La rectitude sur le chemin est la chose la plus importante." }
  ]},
  // slw (id=283) — priere
  { analysis_id: 283, phrases: [
    { sense: "prier", arabic: "صَلَّى الفَجْرَ فِي وَقْتِهِ", phon: "salla al-fajra fi waqtihi", french: "Il a prie l'aube a son heure." },
    { sense: "prière rituelle", arabic: "الصَّلَاةُ عِمَادُ الدِّينِ", phon: "al-salatu 'imadu al-din", french: "La priere est le pilier de la religion." },
    { sense: "invoquer", arabic: "صَلَّى عَلَى النَّبِيِّ عِنْدَ ذِكْرِهِ", phon: "salla 'ala al-nabiyyi 'inda dhikrihi", french: "Il a invoque la benediction sur le Prophete en le mentionnant." }
  ]},
  // zkw (id=504) — purification
  { analysis_id: 504, phrases: [
    { sense: "purifier", arabic: "زَكَّى نَفْسَهُ بِالعِبَادَةِ", phon: "zakka nafsahu bil-'ibada", french: "Il a purifie son ame par l'adoration." },
    { sense: "aumône légale", arabic: "أَخْرَجَ زَكَاةَ مَالِهِ", phon: "akhraja zakata malihi", french: "Il a acquitte la zakat de ses biens." },
    { sense: "croître", arabic: "يُزَكِّي اللَّهُ مَنْ يَشَاءُ", phon: "yuzakki Allahu man yasha'u", french: "Dieu purifie et fait croitre qui Il veut." }
  ]},
  // rke (id=792) — inclinaison
  { analysis_id: 792, phrases: [
    { sense: "s'incliner", arabic: "رَكَعَ فِي صَلَاتِهِ بِخُشُوعٍ", phon: "raka'a fi salatihi bi-khushu'", french: "Il s'est incline dans sa priere avec recueillement." },
    { sense: "génuflexion", arabic: "أَطَالَ الرُّكُوعَ وَالسُّجُودَ", phon: "atala al-ruku'a wal-sujud", french: "Il a prolonge l'inclinaison et la prosternation." },
    { sense: "s'incliner", arabic: "ارْكَعُوا مَعَ الرَّاكِعِينَ", phon: "irka'uu ma'a al-raaki'iina", french: "Inclinez-vous avec ceux qui s'inclinent." }
  ]}
];

// =====================================================
// PROCESS VERSE
// =====================================================
async function processVerse(verseNum) {
  console.log(`\n=== VERSET 2:${verseNum} ===`);
  const data = verseData[verseNum];
  if (!data) { console.log('  Pas de donnees'); return; }

  console.log(`  analysis_id=${data.analysis_id} (preset)`);

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
      console.log(`  OK VWA ${word.word_key} v${data.verse_id}`);
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
    console.log(`  OK verse V${verseNum}`);
    okCount++;
  }

  console.log(`VERSET 2:${verseNum} — TERMINE (${okCount} OK, ${errCount} erreurs)`);
  return { ok: okCount, err: errCount };
}

// =====================================================
// SYNC word_meanings
// =====================================================
async function syncWordMeanings() {
  console.log('\n=== SYNC word_meanings ===');

  const verseIds = [48, 49, 50];
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
// DAILY PHRASES
// =====================================================
async function insertDailyPhrases() {
  console.log('\n=== DAILY PHRASES ===');

  let totalOk = 0, totalSkip = 0, totalErr = 0;

  for (const root of dailyPhrases) {
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
  console.log('=== PIPELINE SOURATE 2 — AL-BAQARAH — VERSETS 41 A 43 ===\n');

  let totalOk = 0, totalErr = 0;

  for (let v = 41; v <= 43; v++) {
    const result = await processVerse(v);
    if (result) {
      totalOk += result.ok;
      totalErr += result.err;
    }
  }

  await syncWordMeanings();
  await insertDailyPhrases();

  console.log(`\n=== PIPELINE V41-43 TERMINEE — TOTAL: ${totalOk} OK, ${totalErr} erreurs ===`);
}

main().catch(e => console.error('FATAL:', e));
