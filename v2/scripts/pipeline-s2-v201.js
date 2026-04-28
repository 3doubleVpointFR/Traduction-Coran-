const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// =====================================================
// PIPELINE SOURATE 2 — VERSET 201
// verse_id=208, analysis_id=566
// "Et parmi eux celui qui dit: notre Seigneur, accorde-nous
//  dans l'ici-bas une belle chose et dans l'au-dela une belle
//  chose et protege-nous du chatiment du feu."
// Invocation complete (ici-bas + au-dela + protection du feu)
// vs invocation bornee du V200
// =====================================================

const verseData = {
  201: {
    verse_id: 208,
    analysis_id: 566,
    translation_arab: "Et parmi eux celui qui dit : notre Seigneur, accorde-nous dans l'ici-bas une belle chose et dans l'au-dela une belle chose et protege-nous du chatiment du feu.",
    full_translation: "Et il est des gens qui disent: «Seigneur ! Accorde-nous belle part ici-bas, et belle part aussi dans l'au-delà; et protège-nous du châtiment du Feu!»",
    translation_explanation: `§DEMARCHE§
Le verset 2:201 est le pendant positif du verset 2:200. Il presente la deuxieme categorie de pelerins — ceux dont l'invocation est complete parce qu'elle couvre trois dimensions : le bien dans l'ici-bas, le bien dans l'au-dela, et la protection contre le chatiment du feu. La structure est parallele a celle de 2:200 (meme ouverture « wa-minhum man yaqulu rabbana atina ») mais le contenu est radicalement different par l'ajout de l'au-dela et de la protection.

Le pronom **minhum** (parmi eux) renvoie aux « gens » (al-nas) mentionnes en 2:200. La particule « wa » (et) introduit la deuxieme categorie en parallele avec la premiere. La construction « wa-minhum man yaqulu » (et parmi eux celui qui dit) est identique a « fa-mina al-nasi man yaqulu » de 2:200, ce qui cree un parallele delibere entre les deux categories.

Le verbe **yaqulu** est un inaccompli 3MS de la racine q-w-l. Le Lane's donne : dire, enoncer, prononcer, parler, declarer. L'inaccompli marque l'habitude — il dit habituellement, il a coutume de dire cette invocation. Le singulier « man yaqulu » designe l'individu-type de cette categorie.

Le nom **rabbana** est un nom avec suffixe 1MP de la racine r-b-b. Le Lane's donne : seigneur, maitre, celui qui eleve, celui qui fait croitre, educateur, proprietaire. L'invocation « rabbana » est identique a celle de 2:200 — les deux categories reconnaissent Dieu comme Seigneur. La difference n'est pas dans la reconnaissance de l'autorite divine mais dans l'etendue de la demande.

Le verbe **atina** est un imperatif Form IV de la racine a-t-y avec suffixe 1MP. Le Lane's donne pour la Form IV : donner, accorder, octroyer, faire parvenir. La Form I (ata = venir) est transformee par la Form IV en causatif : « faire venir vers nous » = « nous accorder ». L'imperatif est une demande directe et insistante.

Le nom **al-dunya** est un nom defini feminin singulier de la racine d-n-w. Le Lane's donne : proche, inferieur, le plus bas, le monde d'ici-bas, la vie terrestre. Le mot al-dunya est un superlatif feminin de adna (le plus proche). La preposition fi (dans) indique que la demande porte sur ce qui se trouve dans l'ici-bas. Contrairement a 2:200 ou la demande s'arretait la, ici elle se poursuit.

Le nom **hasanatan** est un adjectif indefini feminin accusatif de la racine h-s-n. Le Lane's donne : beau, bon, excellent, agreable, ce qui est bien. Le mot hasana est le feminin de hasan — une belle chose, un bien, une bonte. L'indefini (hasanatan, pas al-hasana) laisse le bien non specifie — toute forme de bien est incluse. L'accusatif marque le complement d'objet de atina — accorde-nous une belle chose. Ce mot est absent de 2:200 ou la demande etait vague et sans complement — ici la demande est precisee : pas n'importe quoi, mais une belle chose.

Le nom **al-akhirati** est un nom defini feminin singulier de la racine a-kh-r. Le Lane's donne : dernier, suivant, posterieur, la vie derniere, l'au-dela, la demeure finale. Le mot al-akhira est le feminin de akhir (dernier). La construction « wa-fi al-akhirati hasanatan » (et dans l'au-dela une belle chose) est le complement qui manquait en 2:200. La repetition de hasanatan dans les deux domaines (dunya et akhira) montre que la demande est equilibree — le croyant veut le bien partout.

Le verbe **qina** est un imperatif avec suffixe 1MP de la racine w-q-y. Le Lane's donne : proteger, preserver, mettre a l'abri, eviter, se premunir. L'imperatif « qi-na » (protege-nous) est une demande de protection — le croyant ne se contente pas de demander le bien, il demande aussi d'etre protege du mal. La racine w-q-y porte l'idee de placer un ecran entre soi et le danger — le wiqaya est le bouclier qui empeche le mal d'atteindre.

Le nom **adhaba** est un nom accusatif de la racine e-dh-b en construction d'annexion (idafa). Le Lane's donne : chatiment, peine, punition, tourment. Le edhab est la peine infligee pour une faute — il est douloureux par nature. L'accusatif marque le complement d'objet de qina — protege-nous DU chatiment. Le chatiment est specifie par l'idafa qui suit.

Le nom **al-nari** est un nom defini genitif singulier de la racine n-w-r. Le Lane's donne : feu, lumiere, eclat. Le nar est le feu — dans le contexte eschatologique, il designe le feu de l'enfer, la demeure de chatiment. L'article al- definit le feu comme LE feu connu, celui de l'au-dela. Le genitif marque la possession dans l'idafa : le chatiment DU feu — le chatiment qui appartient au feu, qui se passe dans le feu.

§JUSTIFICATION§
**dit** — Le sens retenu est « dire/enoncer ». Le verbe yaqulu a l'inaccompli designe l'habitude de dire. Le verbe qala est le verbe de parole le plus general — il dit, il enonce. L'alternative « opiner » est ecartee car le contexte est celui d'une invocation adressee a Dieu, pas d'une opinion privee.

**notre Seigneur** — Le sens retenu est « seigneur/celui qui eleve ». Le mot rabbana est une invocation directe qui mobilise la relation de dependance envers Dieu comme autorite bienveillante. L'alternative « celui qui fait croitre » au sens biologique est ecartee car l'invocation active la relation d'autorite et de supplication, pas la croissance physique.

**accorde-nous** — Le sens retenu est « accorder/donner ». Le verbe atina est une Form IV de a-t-y qui signifie « faire parvenir, donner ». L'alternative « venir » (Form I) est ecartee car la Form IV transforme le sens en causatif. La demande est directe et imperative : « fais parvenir vers nous ».

**l'ici-bas** — Le sens retenu est « le monde d'ici-bas/le plus proche ». Le mot al-dunya designe la vie terrestre, le monde le plus accessible et le plus immediat. Contrairement a 2:200 ou l'ici-bas etait le seul domaine de la demande, ici il est le premier d'une demande double.

**une belle chose** — Le sens retenu est « beaute/bonte ». Le mot hasanatan designe ce qui est beau et bon sans specification — toute forme de bien. Le Coran ne precise pas quel bien est demande, ce qui elargit la demande a tout ce qui est hasana (bon, beau, excellent). L'alternative « excellence morale » (ihsan) est ecartee car hasanatan est un adjectif substantive au feminin indefini qui designe une chose bonne, pas un comportement moral.

**l'au-dela** — Le sens retenu est « la vie derniere/l'au-dela ». Le mot al-akhirati designe la demeure finale. C'est l'ajout decisif qui distingue l'invocation de 2:201 de celle de 2:200. Demander dans l'au-dela, c'est montrer qu'on ne limite pas sa vision au terrestre.

**protege-nous** — Le sens retenu est « proteger/preserver ». Le verbe qina est un imperatif de la racine w-q-y qui porte l'idee de mettre un ecran protecteur entre soi et le danger. L'alternative « craindre » (taqwa) est ecartee car ici la Form I imperative avec suffixe 1MP designe une demande de protection DE Dieu vers nous, pas une crainte de nous vers Dieu. C'est Dieu qui protege, pas les gens qui craignent.

**le chatiment de** — Le sens retenu est « chatiment/peine ». Le mot adhaba designe la punition douloureuse. L'alternative « eau douce » (adhb = doux, en parlant de l'eau) est ecartee car le contexte eschatologique et la construction avec « al-nar » (le feu) imposent le sens de chatiment. On ne demande pas protection contre « la douceur du feu ».

**le feu** — Le sens retenu est « feu ». Le mot al-nari designe le feu dans son sens de source de chaleur destructrice. La racine n-w-r couvre la lumiere et le feu — le feu est la lumiere dans sa dimension destructrice et brulante. L'alternative « lumiere/eclairage » est ecartee car le contexte (chatiment, protection) impose le feu comme danger dont on cherche refuge, pas comme lumiere qui guide.

§CRITIQUE§
Les traductions courantes rendent ce verset de maniere globalement fidele. Hamidullah traduit hasanatan par « belle part » — le mot « part » est un ajout interpretatif absent du texte arabe. Le texte dit simplement « une belle chose » (hasanatan) sans preciser la nature du bien demande. L'ajout de « part » oriente la lecture vers une portion de recompense, alors que hasanatan est plus large — c'est tout ce qui est beau et bon. Certains traducteurs ajoutent « aussi » dans « belle part aussi dans l'au-dela » — ce « aussi » est justifie par la structure parallele mais n'est pas dans le texte arabe. Le point central du verset est le contraste avec 2:200 : la meme invocation (rabbana atina) mene a des demandes radicalement differentes. Le verset 2:200 demande dans l'ici-bas seulement et n'obtient rien dans l'au-dela ; le verset 2:201 demande dans les deux mondes ET ajoute la protection contre le feu. La troisieme demande (wa-qina adhaba al-nar) est souvent negligee dans les commentaires — elle montre que la demande equilibree ne se limite pas a vouloir le bien mais inclut aussi la demande d'etre protege du mal. Le croyant complet veut le bien ET refuse le mal.`,
    segments: [
      { fr: "et", phon: "wa", arabic: "\u0648\u064e", is_particle: true, position: 0 },
      { fr: "parmi eux", phon: "minhum", arabic: "\u0645\u0650\u0646\u0652\u0647\u064f\u0645", is_particle: true, position: 1 },
      { fr: "celui qui", phon: "man", arabic: "\u0645\u0651\u064e\u0646", is_particle: true, position: 2 },
      { fr: "dit", pos: "verbe", phon: "yaqulu", arabic: "\u064a\u064e\u0642\u064f\u0648\u0644\u064f", word_key: "qwl", is_particle: false, sense_retenu: "dire", position: 3 },
      { fr: "notre Seigneur", pos: "nom", phon: "rabbana", arabic: "\u0631\u064e\u0628\u0651\u064e\u0646\u064e\u0627\u0653", word_key: "rbb", is_particle: false, sense_retenu: "seigneur/celui qui eleve", position: 4 },
      { fr: "accorde-nous", pos: "verbe", phon: "atina", arabic: "\u0621\u064e\u0627\u062a\u0650\u0646\u064e\u0627", word_key: "aty", is_particle: false, sense_retenu: "accorder", position: 5 },
      { fr: "dans", phon: "fi", arabic: "\u0641\u0650\u0649", is_particle: true, position: 6 },
      { fr: "l'ici-bas", pos: "nom", phon: "al-dunya", arabic: "\u0671\u0644\u062f\u0651\u064f\u0646\u0652\u064a\u064e\u0627", word_key: "dnw", is_particle: false, sense_retenu: "ici-bas", position: 7 },
      { fr: "une belle chose", pos: "adjectif", phon: "hasanatan", arabic: "\u062d\u064e\u0633\u064e\u0646\u064e\u0629\u064b", word_key: "hsn", is_particle: false, sense_retenu: "beaute/bonte", position: 8 },
      { fr: "et", phon: "wa", arabic: "\u0648\u064e", is_particle: true, position: 9 },
      { fr: "dans", phon: "fi", arabic: "\u0641\u0650\u0649", is_particle: true, position: 10 },
      { fr: "l'au-dela", pos: "nom", phon: "al-akhirati", arabic: "\u0671\u0644\u0652\u0640\u064e\u0654\u0627\u062e\u0650\u0631\u064e\u0629\u0650", word_key: "akhr", is_particle: false, sense_retenu: "au-dela", position: 11 },
      { fr: "une belle chose", pos: "adjectif", phon: "hasanatan", arabic: "\u062d\u064e\u0633\u064e\u0646\u064e\u0629\u064b", word_key: "hsn", is_particle: false, sense_retenu: "beaute/bonte", position: 12 },
      { fr: "et", phon: "wa", arabic: "\u0648\u064e", is_particle: true, position: 13 },
      { fr: "protege-nous", pos: "verbe", phon: "qina", arabic: "\u0642\u0650\u0646\u064e\u0627", word_key: "wqy", is_particle: false, sense_retenu: "proteger", position: 14 },
      { fr: "le chatiment de", pos: "nom", phon: "adhaba", arabic: "\u0639\u064e\u0630\u064e\u0627\u0628\u064e", word_key: "edhb", is_particle: false, sense_retenu: "chatiment", position: 15 },
      { fr: "le feu", pos: "nom", phon: "al-nari", arabic: "\u0671\u0644\u0646\u0651\u064e\u0627\u0631\u0650", word_key: "nwr", is_particle: false, sense_retenu: "feu", position: 16 }
    ],
    words: [
      // qwl pos=3
      {
        word_key: "qwl", position: 3, sense_chosen: "dire",
        analysis_axes: {
          sense_chosen: "dire",
          concept_chosen: "Parole/Enonciation",
          concepts: {
            "Parole/Enonciation": {
              status: "retenu",
              senses: ["dire", "parler", "parole", "discours", "affirmer"],
              proof_ctx: "Le verbe yaqulu est un inaccompli 3MS de la racine q-w-l. Le Lane's donne : dire, enoncer, prononcer, parler, declarer, affirmer. Le qawl est l'acte de produire une parole articulee — c'est un acte exterieur et communicatif. L'inaccompli marque l'habitude — il dit habituellement, il a coutume de dire. La parole revelee par yaqulu est une invocation (rabbana atina fi al-dunya hasanatan wa-fi al-akhirati hasanatan wa-qina adhaba al-nar) — c'est une demande complete adressee a Dieu. Le verbe introduit le discours direct de cette deuxieme categorie de gens, celle qui se distingue par la completude de sa demande. La distinction philosophique avec le sens « Pensee/Avis » est que le qawl est un acte exterieur de parole, tandis que l'opinion est un jugement interieur. Ici le verbe introduit une invocation prononcee a voix haute devant Dieu, pas une reflexion privee.",
              axe1_verset: "Le verbe yaqulu introduit la parole de la deuxieme categorie de gens. Le champ lexical (Seigneur, accorder, ici-bas, belle chose, au-dela, proteger, chatiment, feu) montre que la parole est une invocation complete et equilibree. Le verset utilise le verbe « dire » (qala) pour introduire le discours direct — la parole est le vehicule de la demande. L'inaccompli marque l'habitude — ces gens DISENT toujours cette invocation, elle fait partie de leur pratique constante. Le parallele avec 2:200 (meme verbe yaqulu) cree un contraste par le contenu : la meme forme de parole, mais un contenu radicalement different.",
              axe2_voisins: "Le verset 2:200 utilisait la meme structure « man yaqulu rabbana atina » pour introduire la premiere categorie — ceux qui demandent uniquement dans l'ici-bas. Le verset 2:201 reprend la meme structure pour introduire la deuxieme categorie. La repetition de yaqulu cree un parallele delibere : deux types de parole, deux types de demande, deux resultats differents. Le verset 2:202 completera en montrant que « ceux-la auront leur part de ce qu'ils auront acquis ». La parole de 2:201 mene a la recompense, celle de 2:200 mene a la privation.",
              axe3_sourate: "La racine q-w-l est la racine la plus frequente de la sourate al-Baqarah avec environ 1722 occurrences dans le Coran. En 2:8, « ils disent : nous croyons ». En 2:11, « ils disent : nous sommes des reformateurs ». En 2:200, « il dit : Seigneur, accorde-nous dans l'ici-bas ». En 2:201, « il dit : Seigneur, accorde-nous dans l'ici-bas une belle chose et dans l'au-dela une belle chose ». La sourate utilise qala/yaqulu comme revelateur des convictions — ce que les gens disent revele leur profondeur spirituelle.",
              axe4_coherence: "La racine q-w-l apparait environ 1722 fois dans le Coran. Le verbe qala/yaqulu est le verbe de parole universel — il introduit les paroles de Dieu, des prophetes, des croyants et des incredules. Le Coran rapporte les paroles pour les evaluer. Le verset 2:201 rapporte la parole de ceux qui demandent dans les deux mondes pour montrer que leur invocation est la bonne. La parole est jugee par son contenu, pas par sa forme.",
              axe5_frequence: "Pour la mission du khalifa, la parole est un outil fondamental. Le khalifa dit, il enonce, il proclame — sa parole est un acte qui engage. Le verset 2:201 montre que la bonne parole est celle qui embrasse les deux dimensions — l'ici-bas et l'au-dela. Le khalifa dont la parole ne couvre que le terrestre est incomplet. Le khalifa modele est celui dont la parole reflete une vision complete de la realite."
            },
            "Pensee/Avis": {
              status: "nul",
              senses: ["opinion", "avis", "doctrine"],
              proof_ctx: "Le sens d'opinion ou d'avis est un sens atteste de q-w-l dans le Lane's. Mais dans ce verset, yaqulu introduit un discours direct adresse a Dieu (rabbana atina) — c'est une invocation verbale, pas une opinion interieure. On ne dit pas « il opine : notre Seigneur, accorde-nous ». Le contexte de la supplication impose le sens de parole prononcee."
            },
            "Sens isole/Puissance": {
              status: "nul",
              senses: ["puissance"],
              proof_ctx: "Le sens de puissance est un sens isole et concret qui n'a aucun rapport avec le contexte d'invocation du verset. Le verbe yaqulu a l'inaccompli introduit une parole habituelle, pas une manifestation de puissance."
            },
            "Corps/Anatomie": {
              status: "nul",
              senses: ["troupeau"],
              proof_ctx: "Le sens de troupeau est un sens isole et concret totalement hors contexte. Le verbe yaqulu introduit une parole humaine adressee a Dieu — aucun lien avec les animaux."
            }
          }
        }
      },
      // rbb pos=4
      {
        word_key: "rbb", position: 4, sense_chosen: "seigneur/celui qui eleve",
        analysis_axes: {
          sense_chosen: "seigneur/celui qui eleve",
          concept_chosen: "Seigneurie/Autorite bienveillante",
          concepts: {
            "Seigneurie/Autorite bienveillante": {
              status: "retenu",
              senses: ["seigneur", "maitre", "proprietaire", "celui qui eleve", "celui qui entretient", "celui qui possede", "gouverner"],
              proof_ctx: "Le nom rabbana est un nom avec suffixe 1MP de la racine r-b-b. Le Lane's donne : seigneur, maitre, possesseur, celui qui eleve, celui qui fait croitre, educateur, celui qui prend en charge. Le rabb est l'autorite qui eleve — il n'est pas seulement un possesseur mais un educateur qui fait grandir celui dont il a la charge. La rububiyya est a la fois une autorite et une bienveillance — le rabb domine parce qu'il sait mieux et il eleve parce qu'il veut le bien. Le suffixe « notre » (na) marque la relation personnelle — « notre Seigneur » est une invocation intime. La distinction philosophique avec la « Croissance/Augmentation » est que la seigneurie est une relation d'autorite entre un maitre et ce qu'il gouverne, tandis que la croissance est un processus physique d'augmentation. L'invocation « rabbana » mobilise la dependance et la supplication, pas le phenomene biologique de croissance. La distinction avec « Education/Accompagnement » est que l'education est un processus methodique de formation, tandis que la seigneurie est une position d'autorite globale — le rabb est plus qu'un educateur, il est le maitre absolu.",
              axe1_verset: "Le mot rabbana ouvre l'invocation de la deuxieme categorie de gens. Le champ lexical (dire, accorder, ici-bas, belle chose, au-dela, proteger, chatiment, feu) montre que ces gens s'adressent a Dieu comme Seigneur pour une demande complete. L'invocation « rabbana » est identique a celle de 2:200 — les deux categories reconnaissent Dieu comme Seigneur. La difference est dans ce qui suit : en 2:200, la demande est limitee a l'ici-bas ; en 2:201, la demande couvre les deux mondes et la protection. Le rabb est invoque comme celui qui a le pouvoir d'accorder dans les deux dimensions.",
              axe2_voisins: "Le verset 2:200 utilisait la meme invocation « rabbana » pour la premiere categorie. Le parallele montre que la reconnaissance de l'autorite divine est partagee par les deux categories — le probleme de 2:200 n'etait pas la reconnaissance du rabb mais l'etroitesse de la demande. Le verset 2:202 completera en montrant que ceux de 2:201 auront leur part — le rabb accorde a ceux qui demandent dans les deux mondes. Les versets 2:127-128 ou Abraham invoque « rabbana » pour la construction de la Ka'ba montrent que l'invocation modele couvre les dimensions terrestres et eternelles.",
              axe3_sourate: "La racine r-b-b est omnipresente dans la sourate al-Baqarah avec environ 980 occurrences dans le Coran. En 2:131, « je me soumets au Seigneur des mondes ». En 2:127-128, Abraham invoque rabbana pour des demandes spirituelles et eternelles. En 2:200-201, deux categories de gens invoquent rabbana avec des contenus differents. La sourate montre que la qualite de l'invocation ne depend pas de la forme (tous disent rabbana) mais du contenu — ce qu'on demande au rabb revele ce qu'on comprend de Sa rububiyya.",
              axe4_coherence: "La racine r-b-b apparait environ 980 fois dans le Coran. L'invocation « rabbana » est la formule standard de supplication. En 3:8-9, les croyants disent « rabbana, ne devie pas nos coeurs apres nous avoir guides ». En 3:16, « rabbana, nous avons cru, pardonne-nous nos fautes ». En 2:201, rabbana introduit une demande equilibree. Le Coran montre que l'invocation du rabb est un acte de reconnaissance de la dependance totale — on demande au rabb parce qu'on depend de Lui pour tout.",
              axe5_frequence: "Pour la mission du khalifa, le rabb est la source et la finalite de la mission. Le khalifa reconnait Dieu comme Seigneur et Lui demande le bien dans les deux mondes. L'invocation de 2:201 est le modele du khalifa — une demande complete qui ne neglige ni l'ici-bas ni l'au-dela ni la protection contre le mal. Le khalifa dont l'invocation est complete est celui dont la mission est complete."
            },
            "Croissance/Augmentation": {
              status: "probable",
              senses: ["augmenter", "croitre", "faire grandir", "nourrir", "developper", "exces", "colline", "eminence"],
              proof_ctx: "Le sens de croissance et d'augmentation est un sens fondamental de la racine r-b-b dans le Lane's. Le rabba est faire croitre, augmenter, developper. Le rabb est etymologiquement « celui qui fait croitre ». Mais dans le verset 2:201, le mot rabbana est une forme d'invocation directe qui active le sens de seigneurie — quand on dit « rabbana », on s'adresse a une autorite, pas a un agent de croissance biologique. La distinction philosophique est que la croissance est un processus naturel et graduel (une plante croit), tandis que la seigneurie est une relation d'autorite et de dependance entre un maitre et ses charges. L'invocation « rabbana atina » (notre Seigneur, accorde-nous) mobilise la relation de dependance — on s'adresse a celui dont on depend pour recevoir, pas a celui qui fait pousser les plantes.",
              axe1_verset: "Le mot rabbana dans le contexte de l'invocation s'inscrit dans une demande d'autorite — accorde-nous, protege-nous. Le champ lexical (accorder, belle chose, proteger, chatiment) est celui de la supplication a une autorite, pas de la croissance naturelle. Le rabb est invoque comme celui qui a le pouvoir de donner et de proteger.",
              axe2_voisins: "Les versets 2:200-202 forment une unite sur les invocations des pelerins. L'invocation rabbana est adressee a Dieu comme autorite qui accorde et qui protege. Le contexte du pelerinage (rites, invocation, demande) est celui de la relation maitre-serviteur, pas de la croissance biologique.",
              axe3_sourate: "La racine r-b-b dans la sourate al-Baqarah est utilisee principalement pour la seigneurie divine — rabbi al-alamin (Seigneur des mondes), rabbana (notre Seigneur). Le sens de croissance reste sous-jacent mais n'est jamais le sens principal dans les invocations directes.",
              axe4_coherence: "Dans le Coran, l'invocation rabbana active systematiquement le sens de seigneurie et de dependance, pas de croissance physique. Les 980 occurrences montrent que le rabb est l'autorite supreme a laquelle on s'adresse pour demander aide et protection.",
              axe5_frequence: "Pour la mission du khalifa, la croissance est un element de la rububiyya — le rabb fait croitre ses charges. Mais dans l'invocation, le khalifa s'adresse au rabb comme autorite bienveillante, pas comme agent de croissance."
            },
            "Education/Accompagnement": {
              status: "probable",
              senses: ["elever un enfant", "eduquer", "former", "accompagner la croissance"],
              proof_ctx: "Le sens d'education et d'accompagnement est un sens derive de la racine r-b-b dans le Lane's. La tarbiya (education) vient de rabb — eduquer c'est faire croitre de maniere ordonnee. Mais dans le verset 2:201, le mot rabbana est une invocation de supplication — on s'adresse a Dieu pour demander des biens et une protection, pas pour etre eduque. La distinction philosophique est que l'education est un processus long et methodique de formation (l'educateur forme l'eleve progressivement), tandis que la seigneurie est une position d'autorite globale qui inclut le pouvoir d'accorder et de proteger. Le contexte « atina... wa-qina » (accorde-nous... et protege-nous) active la dimension d'autorite qui accorde et protege, pas celle d'educateur qui forme.",
              axe1_verset: "Le mot rabbana dans le contexte de « accorde-nous dans l'ici-bas une belle chose et dans l'au-dela une belle chose et protege-nous du chatiment du feu » mobilise l'autorite qui accorde et qui protege. Le champ lexical n'est pas celui de l'education mais de la supplication et de la protection.",
              axe2_voisins: "Les versets 2:200-202 distinguent les categories de pelerins par la qualite de leurs demandes, pas par leur processus d'education. L'invocation rabbana est un acte de supplication ponctuel, pas un processus educatif continu.",
              axe3_sourate: "La sourate al-Baqarah utilise les invocations rabbana pour des demandes ponctuelles (accorder, pardonner, proteger), pas pour des processus d'education. En 2:128, Abraham dit « rabbana, fais de nous des soumis a Toi » — c'est une demande d'autorite, pas une demande d'education.",
              axe4_coherence: "Dans le Coran, les invocations rabbana sont des demandes adressees a l'autorite divine pour obtenir un resultat precis (pardon, aide, protection). Le sens d'education est sous-jacent dans la rububiyya mais n'est pas le sens active dans les invocations directes.",
              axe5_frequence: "Pour la mission du khalifa, l'education est une dimension de la rububiyya — le rabb eduque ses charges. Mais dans l'invocation, le khalifa s'adresse au rabb comme autorite supplicatee, pas comme educateur."
            },
            "Commerce/Usure": {
              status: "nul",
              senses: ["usure", "augmentation de dette", "interet"],
              proof_ctx: "Le sens d'usure est un sens derive de l'augmentation dans le domaine financier. Le mot rabbana dans une invocation n'a aucun rapport avec les transactions financieres ou l'augmentation de dette. Le contexte est celui de la supplication a Dieu, pas du commerce."
            },
            "Souffle/Vent": {
              status: "nul",
              senses: ["essoufflement"],
              proof_ctx: "Le sens d'essoufflement est un sens isole et concret sans rapport avec le contexte d'invocation. Le mot rabbana est un appel a Dieu, pas une reference au souffle."
            },
            "Sens isole/Fixer": {
              status: "nul",
              senses: ["fixer"],
              proof_ctx: "Sens isole sans rapport avec le contexte de supplication. Le mot rabbana est une invocation, pas un acte de fixation."
            },
            "Sens isole/Rassembler": {
              status: "nul",
              senses: ["rassembler"],
              proof_ctx: "Sens isole sans rapport avec le contexte. L'invocation rabbana ne mobilise pas le sens de rassemblement."
            },
            "Sens isole/Groupe": {
              status: "nul",
              senses: ["groupe"],
              proof_ctx: "Sens isole sans rapport avec le contexte d'invocation individuelle."
            },
            "Sens isole/Confiture": {
              status: "nul",
              senses: ["confiture"],
              proof_ctx: "Sens isole totalement hors contexte."
            }
          }
        }
      },
      // aty pos=5
      {
        word_key: "aty", position: 5, sense_chosen: "accorder",
        analysis_axes: {
          sense_chosen: "accorder",
          concept_chosen: "Venue/Arrivee",
          concepts: {
            "Venue/Arrivee": {
              status: "retenu",
              senses: ["venir", "arriver", "apporter", "donner", "commettre"],
              proof_ctx: "Le verbe atina est un imperatif Form IV de la racine a-t-y avec suffixe 1MP (na = nous). Le Lane's donne pour la Form I (ata) : venir, arriver, se presenter, parvenir. La Form IV (ata) transforme le sens intransitif en causatif : « faire venir vers nous » = « apporter, donner, accorder, faire parvenir ». Le Lane's donne pour la Form IV : donner, accorder, octroyer, faire parvenir quelque chose a quelqu'un. L'imperatif atina est une demande directe — celui qui demande veut que quelque chose lui parvienne. La Form IV est un acte de don — l'autorite fait parvenir le bien au demandeur. Le suffixe na (nous) fait du demandeur le beneficiaire. Le sens de « venue/arrivee » est le sens de base de la racine, et la Form IV le transforme en « faire venir vers nous » = « accorder ». Il n'y a qu'un seul concept principal dans cette racine, et le sens causatif de la Form IV est directement derive du sens de venue.",
              axe1_verset: "Le verbe atina est la demande centrale de l'invocation. Le champ lexical (Seigneur, ici-bas, belle chose, au-dela, proteger, chatiment, feu) montre que la demande est triple : un bien dans l'ici-bas, un bien dans l'au-dela, et la protection. Le verbe atina est utilise pour les deux premieres demandes (accorde-nous dans l'ici-bas une belle chose et dans l'au-dela une belle chose). La Form IV implique que Dieu est l'agent du don — Il fait parvenir le bien vers les demandeurs. La difference avec 2:200 est le complement : en 2:200, atina n'avait pas de complement specifie (accorde-nous dans l'ici-bas) ; en 2:201, hasanatan specifie ce qui est demande.",
              axe2_voisins: "Le verset 2:200 utilisait le meme verbe atina mais avec une demande limitee a l'ici-bas sans complement. Le verset 2:201 reprend atina avec un double complement (hasanatan dans l'ici-bas ET hasanatan dans l'au-dela). Le parallele montre que le verbe est le meme — c'est le contenu de la demande qui fait la difference. Le verset 2:202 montrera que ceux de 2:201 auront leur part de ce qu'ils auront acquis — le don de Dieu (ita') est proportionnel a la completude de la demande.",
              axe3_sourate: "La racine a-t-y apparait dans la sourate al-Baqarah en de nombreuses occurrences (environ 549 dans le Coran). En 2:23, « fa-tu bi-suratin » (apportez une sourate). En 2:106, « na'ti bi-khayrin minha » (Nous apportons mieux qu'elle). En 2:200-201, atina est une demande de don adressee a Dieu. La sourate utilise a-t-y pour le don divin (ce que Dieu accorde) et pour le defi humain (ce que les hommes doivent apporter). En 2:201, c'est Dieu qui est sollicite pour accorder dans les deux mondes.",
              axe4_coherence: "La racine a-t-y apparait environ 549 fois dans le Coran. La Form IV ata (accorder) est frequente dans les invocations. En 20:114, « rabbi zidni ilman » (Seigneur, augmente-moi en savoir) utilise un autre verbe mais le schema est le meme — demander a Dieu d'accorder quelque chose. Le Coran montre que la demande a Dieu est un acte legitime — ce qui est juge n'est pas le fait de demander mais la completude et l'equilibre de la demande.",
              axe5_frequence: "Pour la mission du khalifa, la demande (atina) est un acte de dependance consciente. Le khalifa sait qu'il ne peut pas tout par lui-meme — il demande a Dieu de lui accorder ce dont il a besoin dans les deux dimensions. Le verset 2:201 montre la demande modele du khalifa : complete, equilibree, couvrant l'ici-bas et l'au-dela et la protection contre le mal."
            },
            "Sens isole/Detruire": {
              status: "nul",
              senses: ["detruire"],
              proof_ctx: "Le sens de destruction est un sens isole et concret. Dans le verset, atina est une demande d'obtention de bienfaits, pas une demande de destruction. Le contexte de supplication positive (accorde-nous une belle chose) exclut totalement le sens destructif."
            }
          }
        }
      },
      // dnw pos=7
      {
        word_key: "dnw", position: 7, sense_chosen: "ici-bas",
        analysis_axes: {
          sense_chosen: "ici-bas",
          concept_chosen: "Proximite/Monde d'ici-bas",
          concepts: {
            "Proximite/Monde d'ici-bas": {
              status: "retenu",
              senses: ["etre proche", "proche", "ici-bas", "approcher"],
              proof_ctx: "Le nom al-dunya est un nom defini feminin singulier de la racine d-n-w. Le Lane's donne : proche, bas, inferieur, le plus proche, le plus bas. Le mot al-dunya est un superlatif feminin de adna — « la plus proche » ou « la plus basse ». Le monde d'ici-bas est appele dunya parce qu'il est le plus proche (le plus immediat, le plus accessible) par opposition a l'au-dela qui est lointain. L'article al- definit l'ici-bas comme une realite connue et determinee. La preposition fi (dans) indique que la demande porte sur ce qui se trouve dans l'ici-bas. Il n'y a qu'un seul concept dans cette racine — la proximite qui englobe a la fois le sens physique (etre proche) et le sens technique coranique (le monde d'ici-bas). Le contexte de l'invocation impose le sens de « monde d'ici-bas » — la vie terrestre dans laquelle on demande une belle chose.",
              axe1_verset: "Le mot al-dunya est le premier lieu de la demande equilibree. Le champ lexical (Seigneur, accorder, belle chose, au-dela, proteger, chatiment, feu) montre que l'ici-bas n'est plus le seul lieu de la demande comme en 2:200. En 2:201, l'ici-bas est le premier des deux domaines — il est suivi de l'au-dela. La demande dans l'ici-bas n'est pas critiquee — elle est completee par la demande dans l'au-dela. Le verset montre que demander dans l'ici-bas est legitime quand c'est accompagne d'une vision qui embrasse aussi l'au-dela.",
              axe2_voisins: "Le verset 2:200 critiquait ceux qui demandaient uniquement dans l'ici-bas. Le verset 2:201 rehabilite la demande dans l'ici-bas en la completant par l'au-dela. La juxtaposition des deux versets montre que l'ici-bas n'est pas mauvais en soi — c'est l'exclusivite de la demande terrestre qui est critiquee. Le verset 2:201 pose un modele equilibre : demander dans l'ici-bas ET dans l'au-dela. Les versets voisins construisent une vision equilibree des deux mondes.",
              axe3_sourate: "La racine d-n-w apparait dans la sourate al-Baqarah en de nombreuses occurrences. En 2:85, « la disgrace dans la vie d'ici-bas ». En 2:86, « ceux qui ont achete la vie d'ici-bas au prix de l'au-dela ». En 2:200, l'ici-bas est l'objet exclusif d'une demande critiquee. En 2:201, l'ici-bas est le premier terme d'une demande equilibree et louee. La sourate montre que la valeur de l'ici-bas depend de la place qu'on lui accorde — un element parmi d'autres, ou le tout.",
              axe4_coherence: "La racine d-n-w apparait environ 133 fois dans le Coran. En 28:77, « recherche la demeure derniere par ce que Dieu t'a accorde et n'oublie pas ta part de l'ici-bas ». Le Coran ne condamne pas l'ici-bas mais condamne celui qui s'y limite au detriment de l'au-dela. Le verset 2:201 illustre cette position equilibree — demander le bien dans l'ici-bas est conforme a la vision coranique quand c'est accompagne de la demande pour l'au-dela.",
              axe5_frequence: "Pour la mission du khalifa, l'ici-bas est le terrain de la mission. Le khalifa vit et agit dans l'ici-bas — il ne fuit pas le monde terrestre. Mais il ne s'y enferme pas non plus. Le verset 2:201 montre le modele du khalifa : demander le bien dans l'ici-bas (mission terrestre) ET dans l'au-dela (dimension eternelle de la mission) ET la protection contre le chatiment (conscience du danger)."
            }
          }
        }
      },
      // hsn pos=8 (premiere occurrence)
      {
        word_key: "hsn", position: 8, sense_chosen: "beaute/bonte",
        analysis_axes: {
          sense_chosen: "beaute/bonte",
          concept_chosen: "Beaute/Bonte",
          concepts: {
            "Beaute/Bonte": {
              status: "retenu",
              senses: ["etre beau", "bon", "excellent"],
              proof_ctx: "Le nom hasanatan est un adjectif indefini feminin accusatif de la racine h-s-n. Le Lane's donne : beau, bon, excellent, agreable, ce qui est bien, ce qui plait. Le husn est la beaute et la bonte reunies — ce qui est beau est bon et ce qui est bon est beau dans la vision arabe. La hasana (feminin) est une chose belle et bonne — un bienfait, un bien, un avantage. L'indefini (hasanatan, pas al-hasana) laisse le bien non specifie — toute forme de beaute et de bonte est incluse. L'accusatif marque le complement d'objet de atina — accorde-nous UNE BELLE CHOSE dans l'ici-bas. La distinction philosophique avec l'« Excellence morale » (ihsan) est que la beaute/bonte est un etat de la chose elle-meme (la chose est belle/bonne), tandis que l'excellence morale est un comportement du sujet (le sujet agit avec excellence). Hasanatan qualifie ce qui est demande (une chose belle), pas le comportement du demandeur.",
              axe1_verset: "Le mot hasanatan est le complement de atina dans l'ici-bas — c'est ce qui est demande. Le champ lexical (Seigneur, accorder, ici-bas, au-dela, proteger, chatiment, feu) montre que le bien demande est oppose au chatiment du feu. Le verset construit un contraste : le bien (hasana) d'un cote, le chatiment (adhab) de l'autre. La demande est double positivement (une belle chose ici-bas, une belle chose dans l'au-dela) et negative (proteger du chatiment). Le mot hasanatan est absent de 2:200 — en 2:200, la demande « atina fi al-dunya » n'avait pas de complement, ce qui montrait une demande vague et non qualifiee. En 2:201, la demande est qualifiee : pas n'importe quoi, mais une BELLE chose.",
              axe2_voisins: "Le verset 2:200 ne contenait pas le mot hasanatan — la demande de la premiere categorie etait vague et sans complement. Le verset 2:201 ajoute hasanatan comme qualificatif de ce qui est demande — c'est un bien specifie, pas une demande aveugle. Le parallele entre les deux versets montre que la qualite de la demande se mesure a la precision et a l'etendue : demander une belle chose dans deux mondes est superieur a demander vaguement dans un seul monde.",
              axe3_sourate: "La racine h-s-n apparait dans la sourate al-Baqarah en plusieurs contextes (environ 194 occurrences dans le Coran). En 2:83, « wa-qulu li-l-nasi husnan » (parlez aux gens avec bonte). En 2:112, « man aslama wajhahu li-Llahi wa-huwa muhsinun » (celui qui soumet son visage a Dieu en etant bienfaisant). En 2:201, hasanatan designe le bien demande dans l'ici-bas et l'au-dela. La sourate utilise h-s-n pour la bonte dans la parole, la bonte dans l'action et la bonte demandee a Dieu.",
              axe4_coherence: "La racine h-s-n apparait environ 194 fois dans le Coran. Le mot hasana (au feminin) est utilise comme nom pour designer un bien, un bienfait, un avantage. En 4:40, « Dieu ne lese pas d'un atome ; s'il y a une bonne action (hasana), Il la multiplie ». En 7:156, « Ma misericorde embrasse toute chose ». Le Coran utilise hasana comme terme general pour tout ce qui est bon et beau — le verset 2:201 demande ce bien general sans le limiter a un type specifique.",
              axe5_frequence: "Pour la mission du khalifa, la belle chose (hasana) est l'objectif de la mission dans l'ici-bas. Le khalifa ne demande pas n'importe quoi — il demande le beau et le bon, ce qui est conforme a la bonte divine. Le verset 2:201 montre que la mission du khalifa vise le bien dans les deux mondes — pas n'importe quel bien, mais une hasana, quelque chose de beau et de bon en soi."
            },
            "Excellence morale": {
              status: "probable",
              senses: ["bien faire", "bienfaisance"],
              proof_ctx: "Le sens d'excellence morale (ihsan) est un sens atteste de la racine h-s-n dans le Lane's. L'ihsan est le degre supreme de la foi — agir comme si on voyait Dieu. Mais dans le verset, hasanatan est un adjectif substantive au feminin indefini accusatif qui designe une CHOSE belle et bonne, pas un COMPORTEMENT d'excellence morale. La distinction philosophique est que la beaute/bonte qualifie l'objet demande (la chose est belle), tandis que l'excellence morale qualifie le comportement du sujet (le sujet fait bien). En 2:201, on demande a Dieu d'accorder une belle chose (hasanatan), pas d'accorder l'excellence morale — c'est l'objet du don qui est qualifie de beau, pas le sujet qui le demande.",
              axe1_verset: "Le mot hasanatan dans le contexte « atina fi al-dunya hasanatan » est le complement d'objet — c'est la chose demandee. Le contexte de demande d'un objet (une belle chose) oriente vers la beaute/bonte de la chose demandee, pas vers l'excellence morale du demandeur.",
              axe2_voisins: "Le parallele avec 2:200 montre que l'ajout de hasanatan qualifie la demande elle-meme — en 2:200, pas de complement, en 2:201, une belle chose. Le mot designe ce que Dieu accorde, pas ce que le demandeur fait.",
              axe3_sourate: "En 2:83, husnan qualifie la parole (parler avec bonte). En 2:201, hasanatan qualifie ce qui est demande. La sourate utilise h-s-n pour qualifier des objets (parole bonne, chose belle) et des comportements (muhsin, bienfaisant) — ici c'est l'objet qui est qualifie.",
              axe4_coherence: "En 4:40, hasana designe une bonne action. En 2:201, hasanatan designe un bien demande a Dieu. Le Coran utilise hasana tantot pour les actions (bonnes oeuvres) tantot pour les choses (biens accordes). Le contexte de supplication a Dieu oriente vers le bien accorde plutot que vers l'action morale.",
              axe5_frequence: "Pour la mission du khalifa, l'excellence morale est un objectif important mais hasanatan en 2:201 designe le bien accorde par Dieu, pas l'excellence du comportement humain."
            }
          }
        }
      },
      // akhr pos=11
      {
        word_key: "akhr", position: 11, sense_chosen: "au-dela",
        analysis_axes: {
          sense_chosen: "au-dela",
          concept_chosen: "Alterite/Delai",
          concepts: {
            "Alterite/Delai": {
              status: "retenu",
              senses: ["autre", "dernier", "retarder", "au-dela"],
              proof_ctx: "Le nom al-akhirati est un nom defini feminin singulier genitif de la racine a-kh-r. Le Lane's donne : dernier, suivant, posterieur, final, ultime, la vie derniere, l'au-dela, autre, different, retarder. Le akhir est ce qui vient apres — la posteriorite marque la position dans la sequence temporelle. Le feminin al-akhira (la derniere) designe la vie qui vient apres la vie d'ici-bas — c'est la demeure finale, celle qui ne sera suivie d'aucune autre. L'article al- definit l'au-dela comme une realite connue et determinee. Le concept d'Alterite/Delai couvre l'ensemble des sens de la racine : l'autre (ce qui est different), le dernier (ce qui vient en fin), le retard (ce qui est repousse), et l'au-dela (la vie derniere). Le sens « au-dela » active la dimension de posteriorite temporelle et d'alterite — l'au-dela est l'AUTRE vie, celle qui vient APRES.",
              axe1_verset: "Le mot al-akhirati est le deuxieme lieu de la demande equilibree. Le champ lexical (Seigneur, accorder, ici-bas, belle chose, proteger, chatiment, feu) montre que l'au-dela est le complement indispensable de l'ici-bas. La structure « fi al-dunya hasanatan wa-fi al-akhirati hasanatan » cree un parallele parfait — meme preposition (fi), meme complement (hasanatan), deux lieux differents (dunya et akhira). L'au-dela est le lieu qui manquait en 2:200 — son ajout transforme une demande deficiente en demande modele. Le verset place l'au-dela a egalite avec l'ici-bas — le meme bien est demande dans les deux.",
              axe2_voisins: "Le verset 2:200 se terminait par « il n'a dans l'au-dela aucune part » — la privation dans l'au-dela etait la consequence de ne pas l'avoir demande. Le verset 2:201 integre l'au-dela dans la demande — ceux qui demandent dans l'au-dela y recevront. Le verset 2:202 completera : « ceux-la auront leur part de ce qu'ils auront acquis ». La sequence 200-201-202 montre que l'au-dela repond a ceux qui le cherchent et se refuse a ceux qui l'ignorent.",
              axe3_sourate: "La racine a-kh-r apparait dans la sourate al-Baqarah en de nombreuses occurrences (environ 250 dans le Coran). En 2:4, les croyants « croient en l'au-dela ». En 2:86, « ceux qui ont achete la vie d'ici-bas au prix de l'au-dela ». En 2:102, « aucune part dans l'au-dela ». En 2:200, « aucune part dans l'au-dela ». En 2:201, l'au-dela est integree dans la demande positive. La sourate construit l'au-dela comme le critere de distinction entre les categories de croyants.",
              axe4_coherence: "La racine a-kh-r apparait environ 250 fois dans le Coran. L'au-dela est presentee comme « meilleure et plus durable » (87:17), comme la « vraie vie » (29:64), comme la demeure finale (40:39). Le Coran ne presente jamais l'au-dela comme optionnelle. Le verset 2:201 montre la demande modele — celle qui inclut l'au-dela comme lieu ou l'on veut recevoir le bien de Dieu.",
              axe5_frequence: "Pour la mission du khalifa, l'au-dela est l'horizon ultime de la mission. Le khalifa travaille pour les deux mondes — ses actions dans l'ici-bas ont des consequences dans l'au-dela. Le verset 2:201 montre que le khalifa modele demande le bien dans l'au-dela — il ne se contente pas de la reussite terrestre mais vise aussi la recompense eternelle."
            }
          }
        }
      },
      // hsn pos=12 (deuxieme occurrence, meme racine)
      {
        word_key: "hsn", position: 12, sense_chosen: "beaute/bonte",
        analysis_axes: {
          sense_chosen: "beaute/bonte",
          concept_chosen: "Beaute/Bonte",
          concepts: {
            "Beaute/Bonte": {
              status: "retenu",
              senses: ["etre beau", "bon", "excellent"],
              proof_ctx: "Le nom hasanatan est la deuxieme occurrence du meme mot dans le verset — adjectif indefini feminin accusatif de la racine h-s-n. Le Lane's donne : beau, bon, excellent, agreable. Cette deuxieme occurrence qualifie ce qui est demande dans l'au-dela — « wa-fi al-akhirati hasanatan » (et dans l'au-dela une belle chose). La repetition du meme mot dans les deux domaines (dunya et akhira) cree un parallele parfait — le croyant demande le MEME type de bien dans les DEUX mondes. L'indefini laisse le bien non specifie dans l'au-dela aussi — toute forme de bien eternel est incluse (paradis, satisfaction divine, proximite de Dieu). La distinction avec l'excellence morale reste la meme que pour la premiere occurrence : hasanatan qualifie la chose demandee, pas le comportement du demandeur.",
              axe1_verset: "Le mot hasanatan en position 12 est le complement de atina dans l'au-dela. Le champ lexical (ici-bas, belle chose, proteger, chatiment, feu) montre que la belle chose dans l'au-dela est l'antithese du chatiment du feu. Le verset oppose le bien (hasana dans les deux mondes) au mal (adhab al-nar). La repetition de hasanatan cree une insistance — le bien est demande deux fois, dans deux domaines, par les memes mots. La symetrie grammaticale renforce l'equilibre de la demande.",
              axe2_voisins: "Le verset 2:200 ne contenait aucune occurrence de hasanatan — la demande de la premiere categorie etait vague. Le verset 2:201 contient deux occurrences — la demande de la deuxieme categorie est precise et doublee. Le doublement de hasanatan montre que la demande est equilibree et complete. Le verset 2:202 confirmera que ces gens « auront leur part de ce qu'ils auront acquis » — la precision de la demande mene a une reponse proportionnelle.",
              axe3_sourate: "La racine h-s-n dans la sourate al-Baqarah couvre les dimensions de la bonte dans la parole (2:83), dans l'action (2:112) et dans la demande a Dieu (2:201). Le verset 2:201 utilise hasanatan deux fois pour montrer que la bonte divine est demandee dans les deux mondes — la sourate construit une vision complete de la bonte qui couvre l'ici-bas et l'au-dela.",
              axe4_coherence: "La racine h-s-n apparait environ 194 fois dans le Coran. La repetition de hasanatan dans le meme verset pour deux domaines differents (dunya et akhira) est specifique a 2:201. Le Coran utilise hasana comme terme general pour le bien — dans 2:201, ce bien general est demande dans les deux dimensions de la realite, ce qui en fait la demande la plus complete possible.",
              axe5_frequence: "Pour la mission du khalifa, la belle chose dans l'au-dela est la recompense eternelle de la mission. Le khalifa ne travaille pas seulement pour le bien terrestre — il vise aussi le bien eternel. Le verset 2:201 montre que la mission complete est celle qui produit le bien dans les deux mondes."
            },
            "Excellence morale": {
              status: "probable",
              senses: ["bien faire", "bienfaisance"],
              proof_ctx: "Le sens d'excellence morale reste un sens atteste de h-s-n mais dans le verset, hasanatan qualifie la chose demandee a Dieu dans l'au-dela, pas un comportement humain. La distinction philosophique est la meme que pour la premiere occurrence : beaute/bonte qualifie l'objet demande (une chose belle et bonne dans l'au-dela), tandis que l'excellence morale qualifie le comportement du sujet. En 2:201, on demande a Dieu une chose belle dans l'au-dela — la recompense eternelle, le paradis, la satisfaction divine — pas l'excellence morale du demandeur.",
              axe1_verset: "Le mot hasanatan en position 12 est le complement d'objet dans l'au-dela — c'est la chose demandee, pas le comportement du demandeur. Le parallele avec la premiere occurrence (ici-bas hasanatan) confirme que c'est l'objet du don divin qui est qualifie.",
              axe2_voisins: "Le parallele entre les deux hasanatan (ici-bas et au-dela) montre une symetrie dans la nature de ce qui est demande — une chose belle dans les deux cas. Le comportement du demandeur n'est pas le sujet de la demande.",
              axe3_sourate: "La sourate al-Baqarah distingue entre hasana (bien, chose bonne) et ihsan (excellence morale). En 2:201, c'est la hasana qui est demandee, pas l'ihsan.",
              axe4_coherence: "Le Coran utilise hasana pour les biens accordes par Dieu (recompenses, bienfaits) et ihsan pour l'excellence du comportement humain. Le contexte de supplication oriente vers le bien accorde.",
              axe5_frequence: "Pour la mission du khalifa, la belle chose dans l'au-dela est le fruit de la mission, pas le comportement pendant la mission."
            }
          }
        }
      },
      // wqy pos=14
      {
        word_key: "wqy", position: 14, sense_chosen: "proteger",
        analysis_axes: {
          sense_chosen: "proteger",
          concept_chosen: "Protection/Preservation",
          concepts: {
            "Protection/Preservation": {
              status: "retenu",
              senses: ["proteger", "preserver", "craindre", "piete", "se premunir", "eviter"],
              proof_ctx: "Le verbe qina est un imperatif avec suffixe 1MP de la racine w-q-y. Le Lane's donne : proteger, preserver, mettre a l'abri, eviter, se premunir, craindre. La wiqaya est le bouclier, l'ecran qui empeche le mal d'atteindre. Le verbe qa (imperatif de waqa) avec le suffixe na (nous) signifie « protege-nous » — c'est une demande directe de protection adressee a Dieu. La Form I imperative avec suffixe 1MP active le sens de protection DE Dieu vers nous — c'est Dieu qui est l'agent de la protection, et les demandeurs sont les beneficiaires. Le wiqaya est un acte de mise a l'abri — placer un ecran entre le danger et celui qui est protege. Le danger specifie ici est le chatiment du feu (adhab al-nar). La distinction philosophique avec le sens « craindre/piete » (taqwa, Form VIII) est que la protection (Form I) est un acte divin vers l'homme (Dieu protege l'homme), tandis que la crainte/taqwa (Form VIII) est un acte humain vers Dieu (l'homme se premunit en craignant Dieu). Ici c'est la Form I imperative — la demande est que DIEU protege, pas que l'homme craigne.",
              axe1_verset: "Le verbe qina est la troisieme et derniere demande de l'invocation. Le champ lexical (Seigneur, accorder, ici-bas, belle chose, au-dela, chatiment, feu) montre que la protection est le complement des deux demandes positives. La structure est : (1) accorde-nous un bien ici-bas, (2) accorde-nous un bien dans l'au-dela, (3) protege-nous du chatiment du feu. Les deux premieres demandes sont positives (obtenir le bien), la troisieme est negative (eviter le mal). La completude de l'invocation vient de cette double dimension : vouloir le bien ET refuser le mal.",
              axe2_voisins: "Le verset 2:200 ne contenait aucune demande de protection — la premiere categorie ne demandait ni l'au-dela ni la protection. Le verset 2:201 ajoute la protection comme troisieme element. Le verset 2:203 utilisera la meme racine w-q-y dans « li-mani ittaqa » (pour celui qui se premunit) — la Form VIII cette fois, pour le comportement humain de precaution. La sequence 2:201-203 montre les deux faces de w-q-y : la protection divine (qi-na) et la precaution humaine (ittaqa).",
              axe3_sourate: "La racine w-q-y apparait dans la sourate al-Baqarah en de nombreuses occurrences (environ 258 dans le Coran). En 2:21, « la'allakum tattaqun » (peut-etre vous premuniriez-vous). En 2:194, « ittaqu Allaha » (premunissez-vous contre Dieu). En 2:201, qina est une demande de protection divine. La sourate utilise w-q-y dans ses deux dimensions : la taqwa humaine (se premunir, craindre) et la wiqaya divine (etre protege par Dieu). Le verset 2:201 active la dimension divine — c'est Dieu qui est sollicite pour proteger.",
              axe4_coherence: "La racine w-q-y apparait environ 258 fois dans le Coran. La demande « qi-na adhaba al-nar » (protege-nous du chatiment du feu) se retrouve en 3:16 et en 3:191. En 3:191, « rabbana ma khalaqta hadha batilan subhanaka fa-qi-na adhaba al-nar » (notre Seigneur, Tu n'as pas cree ceci en vain, gloire a Toi, protege-nous du chatiment du feu). Le Coran fait de la demande de protection contre le feu un element recurrent des invocations modeles.",
              axe5_frequence: "Pour la mission du khalifa, la protection est la dimension defensive de la mission. Le khalifa ne se contente pas de construire le bien — il demande aussi la protection contre le mal. Le verset 2:201 montre que le khalifa modele est conscient du danger (le feu) et demande a Dieu de l'en proteger. La mission complete inclut la construction du bien et la protection contre le mal."
            },
            "Sens isole/Bouclier": {
              status: "nul",
              senses: ["bouclier"],
              proof_ctx: "Le sens de bouclier est un sens concret et isole. Dans le verset, qina est un verbe imperatif signifiant « protege-nous », pas un nom designant un bouclier physique. Le bouclier est une metaphore de la protection — le wiqaya est comme un bouclier — mais le mot dans le verset est un verbe, pas un nom d'objet."
            }
          }
        }
      },
      // edhb pos=15
      {
        word_key: "edhb", position: 15, sense_chosen: "chatiment",
        analysis_axes: {
          sense_chosen: "chatiment",
          concept_chosen: "Chatiment/Douceur",
          concepts: {
            "Chatiment/Douceur": {
              status: "retenu",
              senses: ["chatier", "peine", "eau douce"],
              proof_ctx: "Le nom adhaba est un nom accusatif singulier de la racine e-dh-b en construction d'annexion (idafa) avec al-nar. Le Lane's donne : chatiment, peine, punition, tourment, mais aussi — de maniere apparemment paradoxale — eau douce, agreable. Le concept « Chatiment/Douceur » reunit ces sens sous une meme racine parce que le Lane's lie etymologiquement le chatiment a l'idee d'empecher le retour (man'u al-'awd) : on chatierait quelqu'un pour l'empecher de recidiver, et l'eau douce serait celle qui empeche la soif de revenir. Le edhab est la peine infligee pour une faute — il est douloureux par nature. L'accusatif marque le complement d'objet de qina — protege-nous DU chatiment. La construction d'annexion (adhab al-nar) specifie le chatiment : c'est celui du feu, le chatiment qui se deroule dans le feu de l'au-dela. Il n'y a qu'un seul concept dans cette racine — le chatiment et la douceur sont deux faces de la meme racine. Dans ce verset, le contexte eschatologique (proteger, feu) impose clairement le sens de chatiment.",
              axe1_verset: "Le mot adhaba est le mal dont on demande protection. Le champ lexical (Seigneur, accorder, belle chose, ici-bas, au-dela, proteger, feu) montre que le chatiment du feu est l'antithese de la belle chose. Le verset construit un contraste : hasana (belle chose) dans les deux mondes vs adhab al-nar (chatiment du feu). La demande de protection contre le chatiment complete les demandes positives — le croyant veut le bien ET refuse le mal. Le chatiment est specifie par l'idafa comme etant celui du feu — pas n'importe quel chatiment mais LE chatiment ultime.",
              axe2_voisins: "Le verset 2:200 ne mentionnait pas le chatiment — la premiere categorie ne demandait ni l'au-dela ni la protection. Le verset 2:201 ajoute la demande de protection contre le chatiment du feu comme troisieme element. Le verset 2:196 mentionnait un chatiment (fa-ma istaysara min al-hady) dans le contexte des rites. Le contexte du pelerinage inclut la conscience du chatiment — le pelerin qui accomplit les rites demande aussi la protection eschatologique.",
              axe3_sourate: "La racine e-dh-b apparait dans la sourate al-Baqarah en de nombreuses occurrences (environ 373 dans le Coran). En 2:7, « wa-lahum adhabun azimun » (un chatiment immense). En 2:10, « adhabun alimun » (un chatiment douloureux). En 2:85, « ashaddal-adhabi » (le plus severe des chatiments). En 2:201, le chatiment est ce dont on demande protection. La sourate utilise le chatiment comme avertissement recurrent — le verset 2:201 montre la reponse du croyant face a cet avertissement : demander la protection.",
              axe4_coherence: "La racine e-dh-b apparait environ 373 fois dans le Coran. Le chatiment coranique est de plusieurs types : chatiment de l'ici-bas (2:85), chatiment du feu (2:201, 3:16), chatiment douloureux (2:10, 2:174). La demande « qi-na adhaba al-nar » est une formule recurrente dans les invocations coraniques (2:201, 3:16, 3:191). Le Coran fait de la conscience du chatiment un element essentiel de la foi — le croyant ne nie pas le chatiment mais demande a en etre protege.",
              axe5_frequence: "Pour la mission du khalifa, le chatiment est la consequence de l'echec de la mission. Le khalifa qui ne remplit pas sa mission s'expose au chatiment — non par vengeance divine mais par coherence : celui qui recoit une responsabilite et ne l'assume pas porte les consequences de son manquement. Demander la protection contre le chatiment est un acte de lucidite — le khalifa sait que la mission est serieuse et que l'echec a des consequences."
            }
          }
        }
      },
      // nwr pos=16
      {
        word_key: "nwr", position: 16, sense_chosen: "feu",
        analysis_axes: {
          sense_chosen: "feu",
          concept_chosen: "Lumiere/Clarte",
          concepts: {
            "Lumiere/Clarte": {
              status: "retenu",
              senses: ["lumiere", "eclairer", "feu", "guider par la lumiere"],
              proof_ctx: "Le nom al-nari est un nom defini genitif singulier de la racine n-w-r. Le Lane's donne : lumiere, eclat, feu, eclairer, guider par la lumiere. La racine n-w-r couvre le champ semantique de ce qui brille et eclaire — la lumiere (nur) et le feu (nar) sont deux manifestations de la meme realite physique : ce qui emet de la lumiere et de la chaleur. Le nar (feu) est la lumiere dans sa dimension destructrice et brulante — il eclaire mais il brule aussi. Le concept « Lumiere/Clarte » englobe le feu parce que le feu est fondamentalement une source de lumiere — le Lane's range le feu (nar) sous la meme racine que la lumiere (nur). L'article al- definit le feu comme LE feu connu — dans le contexte eschatologique, c'est le feu de l'enfer, la demeure de chatiment. Le genitif marque la possession dans l'idafa : le chatiment DU feu. La distinction philosophique : le feu est la lumiere dans sa face destructrice — la meme realite (ce qui brille) a deux faces, l'une qui guide (lumiere) et l'autre qui detruit (feu). Le contexte (chatiment, protection) active la face destructrice.",
              axe1_verset: "Le mot al-nari est le dernier mot du verset — le point culminant de la demande de protection. Le champ lexical (Seigneur, accorder, belle chose, ici-bas, au-dela, proteger, chatiment) montre que le feu est le danger ultime dont on demande protection. Le verset oppose le bien (hasana) au feu (nar) — la belle chose est ce qu'on veut, le feu est ce qu'on fuit. La construction adhab al-nar (chatiment du feu) combine deux mots de danger — le chatiment et le feu — pour maximiser l'horreur de ce dont on cherche refuge. Le feu est le lieu du chatiment — c'est dans le feu que se deroule la peine.",
              axe2_voisins: "Le verset 2:200 ne mentionnait pas le feu — la premiere categorie de gens ne demandait pas de protection. Le verset 2:201 ajoute le feu comme le danger specifique dont on demande protection. Le verset 2:167 evoquait « la nari » (le feu) comme la destination des associateurs. Le verset 2:175 utilisait « al-nar » pour ceux qui achetent l'egarement. Le contexte de la sourate montre que le feu est la menace recurrente dont les croyants cherchent refuge — le verset 2:201 montre la reponse correcte : demander la protection a Dieu.",
              axe3_sourate: "La racine n-w-r apparait dans la sourate al-Baqarah en de nombreuses occurrences (environ 194 dans le Coran). En 2:17, « dhahaba Allahu bi-nurihim » (Dieu emporta leur lumiere) — ici nur (lumiere). En 2:167, « la nari » (le feu). En 2:174-175, « al-nar » (le feu). En 2:201, al-nar est le feu dont on demande protection. La sourate utilise n-w-r dans ses deux faces : la lumiere (nur) que Dieu donne ou retire, et le feu (nar) dont on cherche refuge. Les deux sont des manifestations de la meme racine.",
              axe4_coherence: "La racine n-w-r apparait environ 194 fois dans le Coran. Le feu (nar) est mentionne de maniere recurrente comme la destination de ceux qui refusent la guidance. En 3:191, la meme invocation « qi-na adhaba al-nar ». En 14:50, « vestes de goudron et le feu couvrant leurs visages ». Le Coran fait du feu la menace centrale de l'eschatologie — le croyant le connait et demande a Dieu de l'en proteger. La demande de protection contre le feu est un acte de foi — on demande protection contre ce qu'on croit reel.",
              axe5_frequence: "Pour la mission du khalifa, le feu est la consequence ultime de l'echec. Le khalifa qui echoue dans sa mission — qui ne remplit pas les obligations de justice et de rappel — s'expose a la demeure de feu. Le verset 2:201 montre que le khalifa conscient demande la protection contre cette consequence. La conscience du feu est un moteur de la mission — on travaille pour le bien parce qu'on veut eviter le feu."
            },
            "Sens isole/Fleur": {
              status: "nul",
              senses: ["fleur"],
              proof_ctx: "Le sens de fleur est un sens isole et concret (nawwar = fleur, floraison). Dans le verset, al-nari designe le feu dans un contexte de chatiment eschatologique — aucun rapport avec les fleurs. La construction adhab al-nar (chatiment du feu) exclut totalement le sens de floraison."
            },
            "Sens isole/Fuir": {
              status: "nul",
              senses: ["fuir"],
              proof_ctx: "Le sens de fuir est un sens isole et concret (istanara = prendre la fuite). Dans le verset, al-nari est un nom defini au genitif designant le feu — pas un verbe de mouvement. Le contexte de chatiment impose le feu comme lieu de peine, pas comme acte de fuite."
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

  const verseIds = [208];
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
  console.log('=== PIPELINE SOURATE 2 — VERSET 201 ===\n');
  await processVerse(201);
  await syncWordMeanings();
  console.log('\n=== PIPELINE V201 TERMINEE ===');
}

main().catch(e => console.error('FATAL:', e));
