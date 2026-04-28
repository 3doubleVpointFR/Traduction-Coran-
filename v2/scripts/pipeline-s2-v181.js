const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// =====================================================
// PIPELINE SOURATE 2 — VERSET 181
// verse_id=188, analysis_id=548
// "Quiconque le modifie apres l'avoir entendu, la faute
//  ne retombe que sur ceux qui le modifient. Certes,
//  Dieu est Audient, Connaissant."
// Protection du testament, responsabilite des falsificateurs
// =====================================================

const verseData = {
  181: {
    verse_id: 188,
    analysis_id: 548,
    translation_arab: "Quiconque le modifie apres l'avoir entendu, la faute ne retombe que sur ceux qui le modifient. Certes, Dieu est Audient, Connaissant.",
    full_translation: "Quiconque altere le testament apres l'avoir entendu, le peche n'est que sur ceux qui l'alterent. Certes, Dieu est Audient, Omniscient.",
    translation_explanation: `§DEMARCHE§
Le verset protege le testament prescrit au verset precedent (2:180) en posant la responsabilite penale de celui qui le modifie. Le verbe **baddala** est un accompli 3MS forme II de la racine b-d-l. Le Lane's donne : changer, remplacer, substituer, mettre une chose a la place d'une autre, alterer. La forme II (fa''ala) marque l'intensite et la deliberation — baddala n'est pas un changement accidentel mais une substitution volontaire et complete. Le pronom suffixe -hu (le) renvoie au testament (al-wasiyya) du verset precedent. Le changement ici est un acte de falsification : on prend le testament du mort et on le remplace par autre chose. La particule **fa-man** (quiconque) ouvre une phrase conditionnelle universelle — quel que soit celui qui modifie le testament, il est concerne par la sanction. Le verbe **sami'a** est un accompli 3MS de la racine s-m-'. Le Lane's donne : entendre, ecouter, percevoir par l'ouie, preter l'oreille, comprendre ce qu'on entend. Le pronom suffixe -hu renvoie au testament. L'audition du testament est la condition de la responsabilite : celui qui modifie le testament l'a d'abord entendu, il sait ce que le mort a dit, et il choisit deliberement de le changer. La particule **ba'dama** (apres que) marque la succession temporelle — le changement survient APRES l'audition. Le nom **ithmuhu** est un nom masculin singulier de la racine a-th-m avec pronom suffixe 3MS. Le Lane's donne : peche, faute, transgression, acte qui merite un chatiment, manquement a un devoir. Le ithm est un peche grave — ce n'est pas une erreur legere mais une transgression qui merite une sanction divine. Le pronom suffixe -hu (son peche / sa faute) lie le peche au testament : la faute est celle de la falsification. La particule **fa-innama** (certes seulement) combine la particule de consequence (fa-) avec la particule de restriction (innama) — le peche est UNIQUEMENT sur ceux qui modifient, pas sur le testateur ni sur les beneficiaires. La preposition **'ala** (sur) fait peser le peche comme un fardeau sur les falsificateurs. Le nom relatif **alladhina** (ceux qui) introduit le groupe des falsificateurs comme une categorie identifiee. Le verbe **yubaddilunahu** est un inaccompli 3MP forme II de la racine b-d-l avec pronom suffixe 3MS. Le Lane's donne les memes sens que baddala ci-dessus. L'inaccompli ici a valeur de present general — ceux qui modifient (habituellement, en general). Le pluriel montre que la falsification peut etre un acte collectif — plusieurs personnes conspirrent pour changer le testament. La particule **inna** (certes) ouvre une phrase nominale emphatique qui affirme les attributs divins. Le nom **Allah** est le nom propre de la divinite, de la racine a-l-h. Le Lane's donne : Dieu, la divinite unique, Celui qui est adore. Le nom est mentionne pour rappeler que Dieu est le garant du testament — la falsification n'echappe pas a Sa connaissance. Le nom **sami'** est un adjectif masculin singulier de la racine s-m-'. Le Lane's donne : celui qui entend, l'Audient, celui qui percoit tous les sons et toutes les paroles. L'attribut sami' fait echo au verbe sami'a du debut du verset — Dieu entend le testament comme les temoins l'entendent, mais Son audition est absolue et parfaite. Le nom **'alim** est un adjectif masculin singulier de la racine '-l-m. Le Lane's donne : celui qui sait, le Connaissant, celui qui possede la connaissance de toute chose. L'attribut 'alim complete sami' — Dieu entend ET sait. Il entend le testament original et Il sait qui l'a modifie. La paire sami'-'alim ferme le verset en rappelant que rien n'echappe a Dieu.

§JUSTIFICATION§
**le modifie** (baddala) — Le sens retenu est « changer/substituer ». Le verbe baddala forme II marque un changement delibere et complet. L'alternative « remplacer » au sens neutre est ecartee car le contexte est pejoratif — il s'agit d'une falsification du testament.

**l'avoir entendu** (sami'a) — Le sens retenu est « entendre/ecouter ». Le verbe sami'a designe la perception auditive du testament. L'alternative « obeir » (sens derive de s-m-') est ecartee car le contexte est celui de l'audition du testament, pas de l'obeissance a un ordre.

**la faute** (ithmuhu) — Le sens retenu est « peche/faute/transgression ». Le nom ithm designe un peche grave qui merite un chatiment. L'alternative « retard/lenteur » est ecartee car le contexte est penalement charge — la faute est une transgression, pas un simple retard.

**le modifient** (yubaddilunahu) — Meme racine et meme sens que baddala ci-dessus. L'inaccompli marque la generalite — tous ceux qui modifient, en tout temps.

**Dieu** (Allah) — Le sens retenu est « divinite unique ». Nom propre sans alternative dans ce contexte.

**Audient** (sami') — Le sens retenu est « Celui qui entend tout ». L'attribut divin fait echo a l'audition humaine du verset — les temoins entendent le testament, mais Dieu entend tout. L'alternative « obeissant » est ecartee car l'attribut divin sami' designe la perception absolue, pas l'obeissance.

**Connaissant** ('alim) — Le sens retenu est « Celui qui sait tout ». L'attribut divin complete l'Audient — Dieu sait qui a modifie le testament. L'alternative « savant » au sens academique est ecartee car 'alim comme attribut divin designe une connaissance totale et omnisciente, pas une erudition.

§CRITIQUE§
Les traductions courantes rendent « baddala » par « altere » ou « modifie ». Hamidullah utilise « altere » qui porte une connotation plus negative que « modifie ». Notre traduction choisit « modifie » car le verbe baddala est neutre dans sa forme — c'est le contexte qui le rend negatif. Le mot « ithm » est rendu par « peche » par Hamidullah et par « faute » dans notre traduction — « faute » est plus juridique et correspond mieux au contexte legislatif. Hamidullah traduit « 'alim » par « Omniscient » tandis que nous utilisons « Connaissant » — notre choix est plus fidele a la racine '-l-m qui designe le savoir, sans le prefixe « omni- » qui est une inference theologique mais pas une traduction directe du mot arabe.`,
    segments: [
      { fr: "quiconque", phon: "fa-man", arabic: "\u0641\u064e\u0645\u064e\u0646", is_particle: true, position: 1 },
      { fr: "le modifie", pos: "verbe", phon: "baddala-hu", arabic: "\u0628\u064e\u062f\u0651\u064e\u0644\u064e\u0647\u064f", word_key: "bdl", is_particle: false, sense_retenu: "changer/substituer", position: 2 },
      { fr: "apres l'avoir", phon: "ba'dama", arabic: "\u0628\u064e\u0639\u0652\u062f\u064e\u0645\u064e\u0627", is_particle: true, position: 3 },
      { fr: "entendu", pos: "verbe", phon: "sami'a-hu", arabic: "\u0633\u064e\u0645\u0650\u0639\u064e\u0647\u064f", word_key: "sme", is_particle: false, sense_retenu: "entendre", position: 4 },
      { fr: "certes seulement", phon: "fa-innama", arabic: "\u0641\u064e\u0625\u0650\u0646\u0651\u064e\u0645\u064e\u0627\u0653", is_particle: true, position: 5 },
      { fr: "sa faute", pos: "nom", phon: "ithmu-hu", arabic: "\u0625\u0650\u062b\u0652\u0645\u064f\u0647\u064f", word_key: "athm", is_particle: false, sense_retenu: "peche/faute", position: 6 },
      { fr: "sur", phon: "'ala", arabic: "\u0639\u064e\u0644\u064e\u0649", is_particle: true, position: 7 },
      { fr: "ceux qui", phon: "alladhina", arabic: "\u0671\u0644\u0651\u064e\u0630\u0650\u064a\u0646\u064e", is_particle: true, position: 8 },
      { fr: "le modifient", pos: "verbe", phon: "yubaddiluna-hu", arabic: "\u064a\u064f\u0628\u064e\u062f\u0651\u0650\u0644\u064f\u0648\u0646\u064e\u0647\u064f", word_key: "bdl", is_particle: false, sense_retenu: "changer/substituer", position: 9 },
      { fr: "certes", phon: "inna", arabic: "\u0625\u0650\u0646\u0651\u064e", is_particle: true, position: 10 },
      { fr: "Dieu", pos: "nom", phon: "Allah", arabic: "\u0671\u0644\u0644\u0651\u064e\u0647\u064e", word_key: "alh", is_particle: false, sense_retenu: "divinite", position: 11 },
      { fr: "Audient", pos: "nom", phon: "sami'", arabic: "\u0633\u064e\u0645\u0650\u064a\u0639\u064c", word_key: "sme", is_particle: false, sense_retenu: "Audient", position: 12 },
      { fr: "Connaissant", pos: "nom", phon: "'alim", arabic: "\u0639\u064e\u0644\u0650\u064a\u0645\u064c", word_key: "elm", is_particle: false, sense_retenu: "Connaissant", position: 13 }
    ],
    words: [
      // bdl pos=2
      {
        word_key: "bdl", position: 2, sense_chosen: "changer/substituer",
        analysis_axes: {
          sense_chosen: "changer/substituer",
          concept_chosen: "Changement/Substitution",
          concepts: {
            "Changement/Substitution": {
              status: "retenu",
              senses: ["changer", "remplacer", "substituer", "alterer", "mettre une chose a la place d'une autre"],
              proof_ctx: "Le verbe baddala est un accompli 3MS forme II de la racine b-d-l. Le Lane's donne : changer, remplacer, substituer, mettre une chose a la place d'une autre, alterer, transformer. La forme II (fa''ala) marque l'intensite et la deliberation — baddala n'est pas un changement accidentel mais une substitution volontaire et complete. Le pronom suffixe -hu renvoie au testament (al-wasiyya) du verset precedent. La substitution est un acte de falsification : on prend la parole du mort et on la remplace par autre chose. Le changement presuppose un etat original et un etat modifie — celui qui change detruit l'original pour imposer sa propre version.",
              axe1_verset: "Le verbe baddala ouvre la phrase conditionnelle du verset — « quiconque le modifie ». Le champ lexical (entendre, faute, modifier, Dieu, Audient, Connaissant) tourne autour de la falsification du testament et de ses consequences. Le pronom -hu (le) renvoie au testament du verset 2:180, creant un lien grammatical direct entre les deux versets. La forme II insiste sur la deliberation : celui qui modifie le testament ne le fait pas par erreur mais par choix. Le verset pose que le changement delibere du testament est un peche — la volonte du mort est sacree et inviolable.",
              axe2_voisins: "Le verset 2:180 prescrivait le testament en faveur des parents et des proches. Le verset 2:181 protege ce testament contre la falsification. Le verset 2:182 traitera du cas ou le testateur lui-meme commet une injustice dans son testament. Les trois versets forment un bloc legislatif complet : l'obligation (180), la protection (181), la rectification (182). Le verbe baddala est la charniere de ce bloc — il designe l'acte qui menace l'integrite du testament.",
              axe3_sourate: "La racine b-d-l apparait dans la sourate al-Baqarah en 2:59 ou ceux qui ont commis l'injustice « ont change (baddala) la parole » qui leur avait ete dite, et en 2:211 ou il est question de ceux qui « changent (yubaddil) la grace de Dieu ». Le motif du changement/falsification est recurrent dans la sourate : les Fils d'Israel changent la parole de Dieu, les falsificateurs changent le testament. La sourate met en parallele la falsification du texte sacre et la falsification du testament — les deux sont des transgressions graves.",
              axe4_coherence: "La racine b-d-l apparait environ 44 fois dans le Coran. En 7:162, les injustes « ont change (baddala) la parole par une autre ». En 14:28, ceux qui « ont change (baddalu) la grace de Dieu en ingratitude ». En 25:70, Dieu « change (yubaddilu) leurs mauvaises actions en bonnes ». Le Coran utilise b-d-l pour les changements negatifs (falsification, ingratitude) et positifs (transformation divine). Dans le verset 2:181, le changement est negatif — c'est une falsification humaine qui s'oppose a la volonte du mort et a la prescription divine.",
              axe5_frequence: "Pour la mission du khalifa, le changement du testament est une trahison de la mission. Le khalifa est charge de maintenir l'ordre et la justice — falsifier le testament d'un mort detruit l'ordre successoral voulu par le mourant et prescrit par Dieu. Le khalifa qui modifie un testament corrompt la chaine de transmission des biens et viole la confiance sacree du mourant. La mission du khalifa est de preserver l'integrite des actes juridiques, pas de les falsifier pour son propre interet."
            }
          }
        }
      },
      // sme pos=4
      {
        word_key: "sme", position: 4, sense_chosen: "entendre",
        analysis_axes: {
          sense_chosen: "entendre",
          concept_chosen: "Audition/Écoute",
          concepts: {
            "Audition/Écoute": {
              status: "retenu",
              senses: ["entendre", "ecouter", "percevoir par l'ouie", "preter l'oreille", "comprendre ce qu'on entend"],
              proof_ctx: "Le verbe sami'a est un accompli 3MS de la racine s-m-'. Le Lane's donne : entendre, ecouter, percevoir par l'ouie, preter l'oreille, obeir (par extension). Le pronom suffixe -hu renvoie au testament. L'audition du testament est un acte juridique — entendre le testament c'est en devenir temoin et garant. Celui qui entend le testament connait la volonte du mort et assume la responsabilite de la respecter. L'ouie est le sens de la reception — elle capte la parole du mourant et l'inscrit dans la memoire du temoin. L'audition cree l'obligation : celui qui a entendu ne peut plus pretendre ignorer.",
              axe1_verset: "Le verbe sami'a est la condition de la responsabilite dans le verset. Le champ lexical (modifier, entendre, faute, modifier) montre que l'audition precede et conditionne la faute. La sequence « ba'dama sami'ahu » (apres l'avoir entendu) indique que la modification est aggravee par le fait que le falsificateur savait ce que disait le testament. Le verset pose un principe juridique : la connaissance cree la responsabilite — celui qui entend et modifie est plus coupable que celui qui ne savait pas. L'audition transforme l'ignorant en temoin et le temoin en responsable.",
              axe2_voisins: "Le verset 2:180 prescrivait le testament sans mentionner l'audition. Le verset 2:181 ajoute la dimension de l'audition — le testament doit etre entendu par des temoins qui en deviennent garants. Cette progression montre que le testament n'est pas un acte solitaire mais communautaire : le mourant parle, les temoins entendent, et la modification par ceux qui ont entendu est une trahison de la confiance. Le bloc 180-182 construit un systeme de garanties autour du testament.",
              axe3_sourate: "La racine s-m-' est tres frequente dans la sourate al-Baqarah. En 2:75, certains « entendent la parole de Dieu puis la modifient (yuharrifunahu) apres l'avoir comprise ». En 2:93, les Fils d'Israel disent « nous avons entendu et nous avons desobei (sami'na wa-'asayna) ». Le motif de l'audition suivie de la transgression est central dans la sourate — entendre et ne pas obeir, entendre et modifier, sont des formes de trahison. Le verset 2:181 s'inscrit dans ce schema : entendre le testament puis le modifier est une transgression.",
              axe4_coherence: "La racine s-m-' apparait environ 185 fois dans le Coran. Le nom divin al-Sami' (l'Audient) apparait dans de nombreux versets (2:127, 2:137, 2:181, 2:224, 2:244, 2:256). L'audition divine est absolue et totale — Dieu entend tout, y compris ce qui est cache et ce qui est modifie. Le Coran oppose l'audition humaine (partielle, faillible, parfois malhonnete) a l'audition divine (totale, infaillible, garante de justice). Dans le verset 2:181, la mention de sami' comme attribut divin rappelle que Dieu a entendu le testament original.",
              axe5_frequence: "Pour la mission du khalifa, l'audition est le fondement de la responsabilite. Le khalifa ecoute la parole divine et la transmet fidelement — modifier ce qu'on a entendu est une trahison de la mission. L'audition du testament est un acte de confiance : le mourant confie sa derniere volonte a ceux qui l'entourent, et le khalifa fidele respecte cette confiance. La mission du khalifa exige l'integrite entre ce qu'on entend et ce qu'on transmet — pas de falsification, pas de distorsion, pas de substitution."
            }
          }
        }
      },
      // athm pos=6
      {
        word_key: "athm", position: 6, sense_chosen: "peche/faute",
        analysis_axes: {
          sense_chosen: "peche/faute",
          concept_chosen: "Péché/Faute",
          concepts: {
            "Péché/Faute": {
              status: "retenu",
              senses: ["peche", "faute", "transgression", "acte qui merite un chatiment", "manquement grave"],
              proof_ctx: "Le nom ithmuhu est un nom masculin singulier de la racine a-th-m (alif-tha-mim) avec pronom suffixe 3MS. Le Lane's donne : peche, faute, transgression, acte qui merite un chatiment, manquement a un devoir divin ou moral. Le ithm est un peche grave qui s'oppose a la justice et a l'ordre — ce n'est pas une erreur legere mais une transgression deliberee qui appelle une sanction. Le pronom suffixe -hu (son peche / la faute de cela) lie le peche a l'acte de falsification. Le ithm porte une charge morale lourde : celui qui commet un ithm se place en dehors de l'ordre juste voulu par Dieu. Le mot designe le poids moral de la transgression — un fardeau qui pese sur celui qui le commet.",
              axe1_verset: "Le mot ithmuhu est le pivot du verset — c'est la consequence de la modification du testament. Le champ lexical (modifier, entendre, faute, modifier, Dieu, Audient, Connaissant) montre que le peche est la sanction naturelle de la falsification. La particule « fa-innama » (certes seulement) restreint le peche aux seuls falsificateurs — ni le testateur ni les beneficiaires ne portent la faute. Le pronom suffixe -hu renvoie au changement lui-meme : c'est « sa faute » au sens de « la faute de cet acte ». Le verset decharge le mort et les beneficiaires et charge uniquement les falsificateurs.",
              axe2_voisins: "Le verset 2:180 parlait de devoir (haqqan) et de premunition (muttaqin). Le verset 2:181 introduit le peche (ithm) comme contrepartie negative — celui qui ne respecte pas le devoir commet un peche. Le verset 2:182 disculpera le mediateur qui corrige un testament injuste — « pas de peche (ithm) sur lui ». Les versets 180-182 construisent un systeme d'equilibre : le devoir (180), le peche pour la falsification (181), l'absence de peche pour la correction juste (182).",
              axe3_sourate: "La racine a-th-m apparait dans la sourate al-Baqarah en 2:85 (« vous commettez le peche, ithm ») et en 2:173 (« celui qui est contraint — pas de peche, ithm, sur lui »). En 2:181, le ithm est sur les falsificateurs du testament. En 2:182, le ithm est absent pour le mediateur qui corrige. La sourate utilise ithm pour poser les limites de la transgression — certains actes sont des peches, d'autres ne le sont pas. Le ithm est le marqueur de la frontiere entre le licite et l'illicite.",
              axe4_coherence: "La racine a-th-m apparait environ 48 fois dans le Coran. En 4:112, « celui qui commet un peche (ithm) puis en accuse un innocent a porte une calomnie et un peche manifeste ». En 5:2, « ne vous entraidez pas dans le peche (ithm) et la transgression ». En 7:33, le peche (ithm) est interdit par Dieu. Le Coran fait du ithm une categorie juridique et morale — c'est l'acte qui viole l'ordre divin et merite un chatiment. Le ithm est toujours associe a la responsabilite individuelle — chacun porte son propre peche.",
              axe5_frequence: "Pour la mission du khalifa, le peche est l'echec de la mission. Le khalifa est charge de maintenir l'ordre et la justice — commettre un ithm c'est trahir cette mission. La falsification du testament est un peche parce qu'elle detruit l'ordre successoral juste et cree l'injustice dans la communaute. Le khalifa qui commet un ithm corrompt la societe au lieu de la preserver. Le verset rappelle que le peche a un porteur precis — la responsabilite n'est pas collective mais individuelle."
            },
            "Retard/Lenteur": {
              status: "probable",
              senses: ["etre lent", "tarder", "retarder", "rester en arriere"],
              proof_ctx: "Le Lane's mentionne un sens secondaire de la racine a-th-m lie a la lenteur et au retard — le chameau athim est celui qui est lent, qui traine. Ce sens est derive de l'idee que le peche retarde l'homme sur le chemin du bien — celui qui peche est en retard sur ceux qui obeissent. Mais dans le contexte du verset, le sens juridique de peche/faute est clairement dominant : la phrase « innama ithmuhu 'ala alladhina yubaddilunahu » (sa faute est seulement sur ceux qui le modifient) est une declaration de responsabilite penale, pas une observation sur la lenteur. Le sens de retard est etymologiquement lie au peche mais ne fonctionne pas dans ce contexte legislatif."
            }
          }
        }
      },
      // bdl pos=9
      {
        word_key: "bdl", position: 9, sense_chosen: "changer/substituer",
        analysis_axes: {
          sense_chosen: "changer/substituer",
          concept_chosen: "Changement/Substitution",
          concepts: {
            "Changement/Substitution": {
              status: "retenu",
              senses: ["changer", "remplacer", "substituer", "alterer", "mettre une chose a la place d'une autre"],
              proof_ctx: "Le verbe yubaddilunahu est un inaccompli 3MP forme II de la racine b-d-l avec pronom suffixe 3MS. Le Lane's donne : changer, remplacer, substituer, alterer. L'inaccompli marque ici une valeur de present general — ceux qui modifient habituellement, en tout temps. Le pluriel (yubaddiluna) montre que la falsification peut etre un acte collectif — plusieurs personnes qui conspirent pour changer le testament d'un mort. Le pronom suffixe -hu renvoie au testament. L'inaccompli contraste avec l'accompli baddala du debut du verset : l'accompli pose le cas individuel (quiconque le modifie), l'inaccompli designe la categorie generale (ceux qui modifient).",
              axe1_verset: "Le verbe yubaddilunahu reprend le theme du changement pose par baddala au debut du verset. Le champ lexical (modifier, entendre, faute, modifier, Dieu, Audient, Connaissant) encadre le verset par la repetition de b-d-l — le changement ouvre et ferme la phrase conditionnelle. La repetition insiste sur l'identite entre l'acte (baddala) et les acteurs (yubaddilunahu) : ceux qui font l'acte portent la faute. Le pluriel elargit la responsabilite a tous les complices, pas seulement a l'instigateur. L'inaccompli generalise la regle au-dela du cas particulier.",
              axe2_voisins: "Le verset 2:180 prescrivait le testament de maniere positive. Le verset 2:181 le protege en designant nommement les coupables — « ceux qui le modifient ». Le verset 2:182 distinguera la modification illegitime (ithm) de la correction legitime (islah). La repetition de b-d-l dans le verset 181 prepare la distinction du verset 182 : tout changement n'est pas un peche, mais le changement malhonnete l'est.",
              axe3_sourate: "La repetition de la racine b-d-l dans un meme verset est remarquable dans la sourate al-Baqarah. En 2:59, la racine apparait aussi dans un contexte de falsification de la parole divine. La sourate utilise cette repetition pour marteler l'interdiction — le changement du testament est nomme deux fois pour qu'aucun doute ne subsiste sur l'identite de l'acte et de ses auteurs. La sourate construit un parallele entre la falsification de la parole de Dieu et la falsification du testament.",
              axe4_coherence: "La racine b-d-l a l'inaccompli apparait dans le Coran dans des contextes de changement habituel ou general. En 14:28, « ceux qui ont change (baddalu) la grace de Dieu en ingratitude ». En 33:23, « ils n'ont rien change (baddalu tabdilan) ». Le Coran utilise l'inaccompli et l'accompli de b-d-l pour couvrir le changement ponctuel et le changement habituel. Dans le verset 2:181, la combinaison des deux formes couvre tout — le cas individuel et la pratique generale.",
              axe5_frequence: "Pour la mission du khalifa, la falsification collective est une corruption de l'ordre social. Le khalifa est responsable non seulement de ses propres actes mais de l'integrite des institutions communautaires. Quand un groupe modifie un testament, c'est l'institution meme du testament qui est menacee. Le khalifa doit veiller a ce que les testaments soient respectes car ils sont le prolongement de la justice divine dans les affaires humaines. La falsification collective est plus grave que la falsification individuelle car elle corrompt la communaute entiere."
            }
          }
        }
      },
      // alh pos=11
      {
        word_key: "alh", position: 11, sense_chosen: "divinite",
        analysis_axes: {
          sense_chosen: "divinite",
          concept_chosen: "Divinité",
          concepts: {
            "Divinité": {
              status: "retenu",
              senses: ["Dieu", "divinite unique", "Celui qui est adore", "la divinite supreme"],
              proof_ctx: "Le nom Allah est le nom propre de la divinite, de la racine a-l-h. Le Lane's donne : Dieu, la divinite unique, Celui qui est adore, Celui a qui revient toute adoration. Le nom est al-ilah (la divinite) contracte en Allah — l'article defini marque l'unicite absolue. Allah est le Dieu unique, pas un dieu parmi d'autres. Le nom apparait dans le verset pour rappeler que Dieu est le garant ultime du testament — la falsification du testament n'echappe pas a Sa connaissance. La mention de Dieu apres la declaration de responsabilite penale rappelle que la justice humaine est doublee d'une justice divine.",
              axe1_verset: "Le nom Allah ouvre la derniere partie du verset — la declaration des attributs divins. Le champ lexical (modifier, entendre, faute, Dieu, Audient, Connaissant) montre que Dieu est le garant de tout ce qui precede. La mention de Dieu apres « inna » (certes) donne a la phrase une force emphatique — il ne s'agit pas d'une observation mais d'une affirmation solennelle. Dieu est nomme pour rappeler aux falsificateurs que leur acte n'echappe pas a la surveillance divine. Le verset passe du juridique humain au theologique : la faute humaine est connue de Dieu.",
              axe2_voisins: "Le verset 2:180 se terminait par « un devoir pour ceux qui se premunissent ». Le verset 2:181 se termine par « Dieu est Audient, Connaissant ». La progression est significative : du devoir humain a la surveillance divine. Le verset 2:182 mentionnera « Dieu est Pardonneur, Misericordieux » pour le mediateur qui corrige. Les attributs divins changent selon le contexte : Audient et Connaissant pour les falsificateurs, Pardonneur et Misericordieux pour les correcteurs.",
              axe3_sourate: "Le nom Allah apparait plus de 280 fois dans la sourate al-Baqarah. Chaque mention rappelle la presence divine dans les affaires humaines. En 2:181, Dieu est mentionne dans un contexte legislatif — Il est le legislateur et le garant de la loi. La sourate construit une theologie juridique ou Dieu prescrit, observe et juge. Les falsificateurs du testament sont sous le regard de Dieu qui entend et sait.",
              axe4_coherence: "Le nom Allah est le mot le plus frequent du Coran — il apparait environ 2700 fois. Chaque mention rappelle que Dieu est l'autorite supreme derriere toute legislation, toute morale et tout jugement. La paire « inna Allaha sami'un 'alim » (Dieu est Audient, Connaissant) est une formule recurrente qui apparait dans de nombreux versets legislatifs et ethiques. Le Coran rappelle systematiquement que les actes humains sont connus de Dieu — rien n'echappe a Son audition et a Sa connaissance.",
              axe5_frequence: "Pour la mission du khalifa, Dieu est le mandataire de la mission. Le khalifa agit au nom de Dieu — il est Son representant sur terre. La mention de Dieu dans le verset rappelle que la falsification du testament n'est pas seulement un crime contre les hommes mais une desobeissance envers Dieu. Le khalifa qui triche avec le testament triche avec Dieu. La mission du khalifa exige la transparence et l'honnetete car Dieu voit et sait tout ce que le khalifa fait."
            }
          }
        }
      },
      // sme pos=12
      {
        word_key: "sme", position: 12, sense_chosen: "Audient",
        analysis_axes: {
          sense_chosen: "Audient",
          concept_chosen: "Audition/Écoute",
          concepts: {
            "Audition/Écoute": {
              status: "retenu",
              senses: ["entendre", "ecouter", "percevoir par l'ouie", "l'Audient", "Celui qui entend tout"],
              proof_ctx: "Le nom sami'un est un adjectif masculin singulier indefini de la racine s-m-'. Le Lane's donne : celui qui entend, l'Audient, celui qui percoit tous les sons et toutes les paroles. Comme attribut divin, sami' designe l'audition absolue et parfaite — Dieu entend toute parole, toute pensee, tout murmure. L'attribut sami' fait echo au verbe sami'a du debut du verset — les temoins ont entendu le testament, mais Dieu aussi l'a entendu. L'audition divine est qualitativement differente de l'audition humaine : elle est totale, infaillible et eternelle. Rien n'echappe a l'ouie de Dieu.",
              axe1_verset: "L'attribut sami' ferme le verset avec 'alim — les deux attributs rappellent que Dieu est le temoin ultime. Le champ lexical (modifier, entendre, faute, Dieu, Audient, Connaissant) cree un echo entre sami'a (entendre humain) et sami' (Audient divin). Le verset commence par l'audition humaine du testament et se termine par l'Audition divine — Dieu a entendu le testament original avant les temoins et Il sait si quelqu'un l'a modifie. La paire sami'-'alim couvre deux dimensions de la surveillance divine : l'audition (ce qui est dit) et la connaissance (ce qui est fait).",
              axe2_voisins: "Le verset 2:180 ne mentionnait pas d'attribut divin — il se terminait par les muttaqin. Le verset 2:181 se termine par sami'-'alim. Le verset 2:182 se terminera par ghafur-rahim. Les trois paires d'attributs correspondent a trois situations : l'obligation (pas d'attribut, mais la taqwa), la falsification (Audient et Connaissant — Dieu surveille), la correction (Pardonneur et Misericordieux — Dieu pardonne). Les attributs divins sont choisis en fonction du contexte moral de chaque verset.",
              axe3_sourate: "La racine s-m-' sous la forme sami' comme attribut divin apparait en 2:127 (« Tu es l'Audient, le Connaissant »), en 2:137 (« Il est l'Audient, le Connaissant »), en 2:181 (« Dieu est Audient, Connaissant »), en 2:224 (« Dieu est Audient, Connaissant »), en 2:227 (« Dieu est Audient, Connaissant »). La paire sami'-'alim est une formule recurrente dans la sourate al-Baqarah — elle marque les versets ou Dieu observe les actes des hommes. La sourate utilise cette paire pour rappeler la surveillance divine dans les contextes juridiques et moraux.",
              axe4_coherence: "L'attribut divin al-Sami' apparait environ 45 fois dans le Coran, le plus souvent en paire avec al-'Alim ou al-Basir. La paire sami'-'alim (Audient-Connaissant) apparait dans des contextes ou les hommes pourraient croire que leurs actes sont caches — Dieu rappelle qu'Il entend et sait. En 8:17, « Dieu est Audient, Connaissant » apres un evenement de bataille. En 41:36, « Il est l'Audient, le Connaissant » apres l'injonction de se refugier en Dieu. La paire est un rappel constant de l'omniscience divine.",
              axe5_frequence: "Pour la mission du khalifa, l'Audition divine est la garantie de la mission. Le khalifa sait que Dieu entend tout — chaque parole, chaque testament, chaque falsification. Cette conscience de l'Audition divine pousse le khalifa a l'integrite : il ne peut rien cacher a Celui qui entend tout. La mission du khalifa est encadree par la surveillance divine — l'Audient est le garant que les testaments seront respectes et que les falsificateurs seront juges."
            }
          }
        }
      },
      // elm pos=13
      {
        word_key: "elm", position: 13, sense_chosen: "Connaissant",
        analysis_axes: {
          sense_chosen: "Connaissant",
          concept_chosen: "Savoir/Connaissance",
          concepts: {
            "Savoir/Connaissance": {
              status: "retenu",
              senses: ["savoir", "connaitre", "connaissance", "le Connaissant", "Celui qui sait tout"],
              proof_ctx: "Le nom 'alimun est un adjectif masculin singulier indefini de la racine '-l-m. Le Lane's donne : celui qui sait, le Connaissant, celui qui possede la connaissance de toute chose, le savant. Comme attribut divin, 'alim designe la connaissance absolue et totale — Dieu sait tout ce qui est, tout ce qui a ete et tout ce qui sera. L'attribut 'alim complete sami' — Dieu ne se contente pas d'entendre, Il sait. L'audition capte l'information sonore, la connaissance comprend la totalite de la realite. La connaissance divine est ontologique — elle n'est pas acquise par l'apprentissage mais inherente a l'essence divine.",
              axe1_verset: "L'attribut 'alim ferme le verset en complement de sami'. Le champ lexical (modifier, entendre, faute, Dieu, Audient, Connaissant) culmine dans les deux attributs divins. La paire sami'-'alim couvre deux dimensions : Dieu entend le testament et Il sait qui l'a modifie. Le verset se termine sur cette double affirmation pour couper court a toute illusion d'impunite — les falsificateurs ne peuvent ni se cacher de l'Audition divine ni echapper a Sa Connaissance. L'attribut 'alim ajoute la dimension de la comprehension totale : Dieu ne se contente pas d'entendre, Il comprend les intentions et les actes.",
              axe2_voisins: "Le verset 2:180 se terminait par les muttaqin — ceux qui se premunissent. Le verset 2:181 se termine par sami'-'alim — les attributs de surveillance. Le verset 2:182 se terminera par ghafur-rahim — les attributs de misericorde. La progression montre que Dieu est a la fois surveillant (181) et misericordieux (182) — Il punit les falsificateurs et pardonne aux correcteurs. L'attribut 'alim est specifique au contexte de la falsification : Dieu SAIT qui a modifie le testament.",
              axe3_sourate: "La racine '-l-m est l'une des plus frequentes de la sourate al-Baqarah. En 2:29, « Il est de toute chose Connaissant ('alim) ». En 2:32, « Tu es le Connaissant ('alim), le Sage ». En 2:181, 'alim qualifie Dieu dans un contexte juridique. La sourate utilise '-l-m pour la connaissance divine (absolue) et humaine (limitee). L'opposition entre la connaissance humaine (les temoins qui ont entendu le testament) et la connaissance divine (Dieu qui sait tout) est au coeur de ce verset.",
              axe4_coherence: "L'attribut divin al-'Alim apparait environ 157 fois dans le Coran. Il est souvent associe a d'autres attributs : sami'-'alim (Audient-Connaissant), 'alim-hakim (Connaissant-Sage), 'alim-khabir (Connaissant-Informe). Chaque paire souligne un aspect different de la connaissance divine. La paire sami'-'alim insiste sur la connaissance qui vient de l'observation — Dieu entend et sait. Le Coran pose la connaissance divine comme la base de la justice — Dieu juge parce qu'Il sait, et Il sait parce qu'Il entend et voit.",
              axe5_frequence: "Pour la mission du khalifa, la Connaissance divine est le cadre de la responsabilite. Le khalifa sait que Dieu sait — cette conscience l'empeche de tricher, de falsifier, de corrompre. La mission du khalifa exige la transparence parce que rien n'est cache a Dieu. Le khalifa qui falsifie un testament oublie que Dieu est 'alim — il agit comme si personne ne savait, alors que le Connaissant sait tout. La Connaissance divine est le fondement de la justice cosmique qui encadre la mission du khalifa sur terre."
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

  const verseIds = [188];
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
  console.log('=== PIPELINE SOURATE 2 — VERSET 181 ===\n');
  await processVerse(181);
  await syncWordMeanings();
  console.log('\n=== PIPELINE V181 TERMINEE ===');
}

main().catch(e => console.error('FATAL:', e));
