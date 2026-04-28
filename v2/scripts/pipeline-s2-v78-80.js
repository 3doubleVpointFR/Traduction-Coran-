const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// =====================================================
// PIPELINE SOURATE 2 — AL-BAQARAH — VERSETS 78 À 80
// verse_id=85 (2:78), verse_id=86 (2:79), verse_id=87 (2:80)
// =====================================================
// CRITICAL: concept names and senses are read from concepts JSON
// =====================================================

const verseData = {

  // =====================================================
  // VERSET 2:78
  // verse_id=85, analysis_id=444
  // "Et parmi eux il y a des illettrés qui ne connaissent pas le Livre
  //  sinon des souhaits, et ils ne font que supposer."
  // =====================================================
  78: {
    verse_id: 85,
    analysis_id: 444,
    translation_arab: "Et parmi eux il y a des illettres qui ne connaissent pas le Livre sinon des souhaits, et ils ne font que supposer.",
    full_translation: "Et parmi eux [il y a] des illettres qui ne connaissent le Livre que [sous forme de] souhaits, et ils ne font que supposer.",
    translation_explanation: `§DEMARCHE§
Ce verset decrit une categorie parmi les gens du Livre — les illettres qui n'ont pas acces au texte revele. Le mot **ummiyyuuna** est un nom masculin pluriel nominatif de la racine a-m-m. Le Lane's donne « unlettered, not knowing how to write or read, gentiles ». Le terme derive de umm (mere) — celui qui est reste dans l'etat de sa mere, sans instruction. Le verbe **ya'lamuuna** est un inaccompli 3MP de la racine '-l-m. Le Lane's donne « they know, they are aware ». Precede de la negation la, il indique l'ignorance du Livre. Le mot **al-kitaba** est un nom masculin singulier accusatif defini de la racine k-t-b. Le Lane's donne « the Book, the Scripture ». L'article defini designe le Livre revele — la Torah. Le mot **amaniyya** est un nom masculin pluriel accusatif de la racine m-n-y. Le Lane's donne « wishes, desires, vain hopes, things recited or read aloud without understanding ». Le Lane's precise que amaniyy peut designer ce qu'on recite sans comprendre — des paroles repetees mecaniquement. Le verbe **yazunnuuna** est un inaccompli 3MP de la racine z-n-n. Le Lane's donne « they suppose, they conjecture, they think without certainty ». Le verbe designe la supposition sans fondement, l'opinion non etayee par le savoir.

§JUSTIFICATION§
**illettres** — Le sens retenu est « communaute ». Le mot ummiyyuuna derive de la racine a-m-m qui couvre la communaute et la maternite. Le Lane's precise que ummiy designe celui qui est dans l'etat de sa mere — sans instruction. L'alternative « mere » est ecartee car le pluriel masculin avec le suffixe -iyyuuna designe un groupe de personnes, pas des meres.

**connaissent** — Le sens retenu est « savoir ». Le verbe ya'lamuuna designe la connaissance. L'alternative « mondes » est ecartee car le verbe a l'inaccompli 3MP designe l'acte de connaitre, pas les mondes.

**le Livre** — Le sens retenu est « livre ». Le mot al-kitaba avec l'article defini designe le Livre revele — la Torah. L'alternative « ecrire » est ecartee car le nom defini singulier designe l'objet, pas l'acte d'ecriture.

**souhaits** — Le sens retenu est « souhaiter ». Le mot amaniyya designe les souhaits ou les recitations mecaniques. L'alternative « sperme » est ecartee car le pluriel amaniyy dans ce contexte designe les desirs et les espoirs vains.

**supposer** — Le sens retenu est « supposer ». Le verbe yazunnuuna designe la supposition. Pas d'alternative pertinente — la racine z-n-n a un champ semantique homogene autour de la supposition.

§CRITIQUE§
**illettres vs ignorants** — Le mot ummiyyuuna designe specifiquement ceux qui ne savent ni lire ni ecrire — pas les ignorants en general. Le Lane's precise que le ummiy est celui qui ne sait pas ecrire, comme s'il etait reste dans l'etat ou sa mere l'a mis au monde. Cette precision est importante — le probleme n'est pas l'intelligence mais l'absence d'acces au texte ecrit.
**souhaits vs recitations** — Le mot amaniyy peut signifier a la fois « souhaits » et « choses recitees sans comprehension ». Le Lane's donne les deux sens. Les illettres ne connaissent le Livre que par ce qu'on leur en recite — ou par ce qu'ils en esperent. Les deux lectures sont complementaires.
**supposition vs certitude** — Le verbe yazunnuuna designe la pensee sans certitude. Le Coran oppose le zann (supposition) au 'ilm (savoir). Les illettres n'ont ni le savoir du Livre ni la capacite de le verifier — ils sont reduits a la supposition.`,
    segments: [
      { fr: "et parmi eux", phon: "wa-minhum", arabic: "وَمِنْهُمْ", is_particle: true, position: 0 },
      { fr: "des illettres", pos: "nom", phon: "ummiyyuuna", arabic: "أُمِّيُّونَ", word_key: "umm", is_particle: false, sense_retenu: "communauté", position: 1 },
      { fr: "ne", phon: "la", arabic: "لَا", is_particle: true, position: 2 },
      { fr: "connaissent", pos: "verbe", phon: "ya'lamuuna", arabic: "يَعْلَمُونَ", word_key: "elm", is_particle: false, sense_retenu: "savoir", position: 3 },
      { fr: "le Livre", pos: "nom", phon: "al-kitaba", arabic: "ٱلْكِتَٰبَ", word_key: "ktb", is_particle: false, sense_retenu: "livre", position: 4 },
      { fr: "sinon", phon: "illa", arabic: "إِلَّآ", is_particle: true, position: 5 },
      { fr: "des souhaits", pos: "nom", phon: "amaniyya", arabic: "أَمَانِYَّ", word_key: "mny", is_particle: false, sense_retenu: "souhaiter", position: 6 },
      { fr: "et ne", phon: "wa-in", arabic: "وَإِنْ", is_particle: true, position: 7 },
      { fr: "ils", phon: "hum", arabic: "هُمْ", is_particle: true, position: 8 },
      { fr: "que", phon: "illa", arabic: "إِلَّا", is_particle: true, position: 9 },
      { fr: "supposent", pos: "verbe", phon: "yazunnuuna", arabic: "يَظُنُّونَ", word_key: "znn", is_particle: false, sense_retenu: "supposer", position: 10 }
    ],
    words: [
      {
        word_key: "umm", position: 1, sense_chosen: "communauté",
        analysis_axes: {
          concept_chosen: "Communauté/Nation",
          sense_chosen: "communauté",
          concepts: {
            "Communauté/Nation": {
              status: "retenu",
              senses: ["communauté", "nation"],
              proof_ctx: "Le mot ummiyyuuna est un nom masculin pluriel nominatif de la racine a-m-m. Le Lane's donne « unlettered, illiterate, one who does not write ». Le Lane's precise que ummiy derive de umm (mere) — celui qui est reste dans l'etat de sa mere, sans instruction. Le suffixe -iyyuuna forme un adjectif de relation — ceux qui sont de la communaute illetree. Le concept de communaute est retenu car ummiy designe l'appartenance a un groupe defini par l'absence d'instruction.",
              axe1_verset: "Le mot ummiyyuuna ouvre la description d'un groupe specifique parmi les gens du Livre. Ce sont les illettres — ceux qui ne savent ni lire ni ecrire le Livre revele. Le verset precise que leur rapport au Livre se limite a des souhaits (amaniyy) et des suppositions (zann). L'illettrisme n'est pas un defaut moral en soi — c'est une condition qui empeche l'acces direct au texte.",
              axe2_voisins: "Le verset 77 rapportait les propos des gens du Livre qui cachent la verite. Ce verset 78 identifie un sous-groupe — les illettres qui ne connaissent pas le Livre. Le verset 79 denoncera ceux qui ecrivent le Livre de leurs mains — les lettres qui falsifient. La sourate oppose deux groupes fautifs — les illettres qui ne savent pas et les lettres qui falsifient.",
              axe3_sourate: "La racine a-m-m dans la sourate al-Baqarah porte le sens de communaute et de direction. En 2:128, Ibrahim demande que sa descendance soit une « communaute soumise » (ummatan muslimatan). En 2:134, « cette communaute (umma) est passee ». Le mot ummiy (illetre) est lie a la communaute — celui qui appartient a la masse sans instruction particuliere.",
              axe4_coherence: "La racine a-m-m apparait 120 fois dans le Coran sous diverses formes. Le mot ummiy apparait 6 fois dans le Coran — en 2:78, 3:20, 3:75, 7:157, 7:158 et 62:2. En 7:157-158, le Prophete Muhammad est decrit comme le prophete ummiy — l'illetre envoye aux illettres. Le terme ummiy est donc un qualificatif important dans le discours coranique.",
              axe5_frequence: "Pour la mission du khalifa, l'illettrisme n'est pas une excuse. Le khalifa doit chercher le savoir meme s'il ne sait pas lire — la connaissance passe aussi par l'ecoute et la reflexion. Les illettres du verset ne sont pas condamnes pour leur illettrisme mais pour leur supposition — ils remplacent le savoir par la conjecture."
            },
            "Maternité/Origine": {
              status: "probable",
              senses: ["mère", "être une mère pour", "origine, principe"],
              proof_ctx: "Le sens de maternite est le sens etymologique de a-m-m. Le mot ummiy derive de umm (mere) — celui qui est dans l'etat de sa mere. La maternite est l'arriere-plan semantique du mot — l'illetre est celui qui n'a pas depasse l'etat naturel de sa naissance."
            },
            "Direction/Intention": {
              status: "nul",
              senses: ["se diriger vers", "viser"],
              proof_ctx: "Le sens de direction est un autre aspect de a-m-m. Le contexte est la description d'un groupe de personnes (ummiyyuuna), pas une direction ou une intention."
            },
            "Guide/Modèle": {
              status: "nul",
              senses: ["guide (imam)", "diriger la prière"],
              proof_ctx: "Le sens de guide (imam) est un autre derive de a-m-m. Le contexte designe les illettres, pas les guides — les ummiyyuuna sont le contraire des imams."
            }
          }
        }
      },
      {
        word_key: "elm", position: 3, sense_chosen: "savoir",
        analysis_axes: {
          concept_chosen: "Savoir/Connaissance",
          sense_chosen: "savoir",
          concepts: {
            "Savoir/Connaissance": {
              status: "retenu",
              senses: ["science", "enseignement", "connaître", "être informé", "savoir", "certitude", "savant"],
              proof_ctx: "Le verbe ya'lamuuna est un inaccompli 3MP de la racine '-l-m. Le Lane's donne « they know, they have knowledge, they are cognizant ». Precede de la negation la, le verbe designe l'absence de connaissance. La racine '-l-m est l'une des plus importantes du Coran — elle designe le savoir certain par opposition a la supposition (zann).",
              axe1_verset: "Le verbe ya'lamuuna est precede de la negation la — ils ne savent pas le Livre. L'ignorance du Livre n'est pas une ignorance totale mais une ignorance specifique — ils ne connaissent pas le contenu reel du Livre revele. Le contraste entre la ya'lamuuna (ils ne savent pas) et yazunnuuna (ils supposent) structure le verset — le savoir est absent, la supposition le remplace.",
              axe2_voisins: "Le verset 77 evoquait ceux qui cachent la verite. Ce verset 78 evoque ceux qui ne la connaissent pas. Le verset 79 evoquera ceux qui la falsifient. La sourate decrit trois attitudes face au Livre — l'ignorance (v.78), la falsification (v.79) et la pretention mensongere (v.80). L'ignorance est la moins grave des trois.",
              axe3_sourate: "La racine '-l-m traverse toute la sourate al-Baqarah. En 2:13, « ils ne savent pas ». En 2:30, les anges disent « nous ne savons que ce que Tu nous as enseigne ». En 2:32, les anges reconnaissent les limites de leur savoir. La sourate oppose constamment le savoir a l'ignorance — le savoir vient de Dieu, l'ignorance vient du refus d'apprendre.",
              axe4_coherence: "La racine '-l-m apparait plus de 850 fois dans le Coran — c'est l'une des racines les plus frequentes. Le Coran valorise le savoir et condamne l'ignorance. En 39:9, « sont-ils egaux ceux qui savent et ceux qui ne savent pas ? ». Le verset oppose explicitement le savoir au zann — la certitude a la supposition.",
              axe5_frequence: "Pour la mission du khalifa, le savoir est la condition de l'action juste. Le khalifa qui ne sait pas doit apprendre — l'ignorance n'est pas une excuse pour la supposition. Les illettres du verset sont ceux qui ont renonce au savoir et se contentent de supposer."
            },
            "Monde/Création": {
              status: "nul",
              senses: ["les mondes", "univers", "monde", "ensemble des créatures"],
              proof_ctx: "Le sens de mondes ('alamin) est un autre derive de '-l-m. Le contexte utilise le verbe ya'lamuuna (savoir), pas le nom 'alamin (mondes). Le verbe a l'inaccompli 3MP designe l'acte de connaitre."
            },
            "Marque/Signe": {
              status: "nul",
              senses: ["marquer", "signe", "drapeau", "montagne", "repère", "étendard", "lèvre fendue"],
              proof_ctx: "Le sens de marque/signe est un autre aspect de '-l-m. Le contexte utilise le verbe ya'lamuuna au sens de connaitre, pas le nom 'alam au sens de signe ou repere."
            }
          }
        }
      },
      {
        word_key: "ktb", position: 4, sense_chosen: "livre",
        analysis_axes: {
          concept_chosen: "Livre/Écrit",
          sense_chosen: "livre",
          concepts: {
            "Livre/Écrit": {
              status: "retenu",
              senses: ["contrat de mariage", "contrat d'affranchissement", "écriture révélée", "livre", "registre", "contrat écrit"],
              proof_ctx: "Le mot al-kitaba est un nom masculin singulier accusatif defini de la racine k-t-b. Le Lane's donne « the Book, the Scripture, the revealed writing ». L'article defini (al-) designe un Livre specifique — la Torah revelee a Moise. Le mot kitab derive de kataba (ecrire) — le Livre est ce qui est ecrit, fixe, consigne. La Torah est le kitab par excellence dans le contexte des enfants d'Israel.",
              axe1_verset: "Le mot al-kitaba est l'objet de l'ignorance des illettres — ils ne connaissent pas le Livre. Le Livre est le referent absent — les illettres ne peuvent pas le lire et le remplacent par des souhaits et des suppositions. Le Livre revele est cense etre la source du savoir, mais les illettres n'y ont pas acces directement.",
              axe2_voisins: "Le verset 77 evoquait ceux qui cachent la verite du Livre. Ce verset 78 evoque ceux qui ne connaissent pas le Livre. Le verset 79 evoquera ceux qui ecrivent un autre livre (kitab) de leurs mains et le font passer pour le Livre de Dieu. La racine k-t-b apparait dans les trois versets avec des roles differents — le Livre authentique vs le livre falsifie.",
              axe3_sourate: "La racine k-t-b est centrale dans la sourate al-Baqarah. En 2:2, « ce Livre (al-kitab), nul doute en lui ». En 2:44, « vous ordonnez aux gens la piete et vous oubliez vos propres ames, alors que vous lisez le Livre ». La sourate montre que le Livre est un guide — mais seulement pour ceux qui le connaissent et le suivent sincerement.",
              axe4_coherence: "La racine k-t-b apparait environ 319 fois dans le Coran. Le mot kitab designe a la fois le Coran, la Torah, l'Evangile et les Ecritures en general. En 2:89, les gens du Livre avaient un Livre confirmant ce qui vient apres. Le Livre est le fil conducteur de la revelation — chaque communaute a recu un kitab.",
              axe5_frequence: "Pour la mission du khalifa, le Livre est la source de l'autorite et de la guidance. Le khalifa doit connaitre le Livre — pas se contenter de souhaits. Les illettres montrent l'echec de ceux qui n'ont pas acces au Livre et se contentent de suppositions."
            },
            "Écriture/Inscription": {
              status: "probable",
              senses: ["écrire", "dicter", "demander d'écrire", "écrire à quelqu'un", "s'inscrire", "copier un livre", "art de l'écriture", "scribe", "savant", "enseignant", "vendeur de livres", "école"],
              proof_ctx: "Le sens d'ecriture est le sens premier de k-t-b — ecrire, inscrire. Le Livre (kitab) est l'objet de l'ecriture. Le verset 79 utilisera le verbe yaktubuuna (ils ecrivent) — le sens d'ecriture sera au premier plan dans le verset suivant."
            }
          }
        }
      },
      {
        word_key: "mny", position: 6, sense_chosen: "souhaiter",
        analysis_axes: {
          concept_chosen: "Désir/Espérance",
          sense_chosen: "souhaiter",
          concepts: {
            "Désir/Espérance": {
              status: "retenu",
              senses: ["souhaiter", "désirer", "espérer"],
              proof_ctx: "Le mot amaniyya est un nom masculin pluriel accusatif de la racine m-n-y. Le Lane's donne « wishes, desires, vain hopes, things recited without understanding ». Le Lane's precise que tamannaa signifie souhaiter, desirer, esperer en vain. Le pluriel amaniyy designe les souhaits vains — des esperances sans fondement dans le savoir. Le Lane's ajoute le sens de « choses recitees sans comprehension » — les illettres repetent des paroles du Livre sans en comprendre le sens.",
              axe1_verset: "Le mot amaniyya est l'exception dans la negation — ils ne connaissent le Livre qu'a travers des souhaits. Les souhaits remplacent le savoir — au lieu de connaitre le contenu reel du Livre, les illettres n'en retiennent que ce qu'ils esperent. Le Livre est reduit a un objet de desir plutot qu'un guide de conduite. La construction illa amaniyya (sauf des souhaits) montre que les souhaits ne sont pas du savoir.",
              axe2_voisins: "Le verset 77 evoquait ceux qui cachent la verite. Ce verset 78 montre ceux qui la remplacent par des souhaits. Le verset 80 montrera un souhait specifique — « le feu ne nous touchera que des jours comptes ». La progression des versets montre comment les souhaits deviennent des pretentions de plus en plus audacieuses.",
              axe3_sourate: "La racine m-n-y dans la sourate al-Baqarah apparait en 2:78 (souhaits des illettres) et en 2:111 (leurs souhaits/pretentions). En 2:111, « ils dirent : n'entreront au Paradis que les juifs ou les chretiens — ce sont leurs souhaits (amaniyyuhum) ». La sourate montre que les souhaits sans fondement sont une constante de la desobeissance.",
              axe4_coherence: "La racine m-n-y apparait dans le Coran sous les formes tamannaa (souhaiter), amaniyy (souhaits) et maniyy (sperme). En 4:123, « ce n'est ni vos souhaits (amaniyyukum) ni les souhaits des gens du Livre ». Le Coran condamne les souhaits sans action — le souhait ne remplace ni le savoir ni l'action.",
              axe5_frequence: "Pour la mission du khalifa, les souhaits sans savoir sont une impasse. Le khalifa ne se contente pas de souhaiter — il agit sur la base du savoir. Les illettres qui remplacent le Livre par des souhaits echouent dans leur mission de depositaires de la revelation."
            },
            "Semence": {
              status: "nul",
              senses: ["sperme"],
              proof_ctx: "Le sens de semence (maniyy) est un autre sens de m-n-y. Le contexte est celui des souhaits (amaniyy) — le pluriel accusatif designe les desirs vains, pas la semence."
            }
          }
        }
      },
      {
        word_key: "znn", position: 10, sense_chosen: "supposer",
        analysis_axes: {
          concept_chosen: "Pensée/Supposition",
          sense_chosen: "supposer",
          concepts: {
            "Pensée/Supposition": {
              status: "retenu",
              senses: ["penser", "supposer", "croire", "soupçonner", "opinion"],
              proof_ctx: "Le verbe yazunnuuna est un inaccompli 3MP de la racine z-n-n. Le Lane's donne « they suppose, they think, they conjecture, they opine without certainty ». Le zann designe la pensee sans certitude — l'opinion fondee sur l'impression plutot que sur la preuve. Le Coran oppose systematiquement le zann (supposition) au 'ilm (savoir certain).",
              axe1_verset: "Le verbe yazunnuuna cloture le verset par la caractterisation definitive des illettres — ils ne font que supposer. La structure du verset est binaire — negation du savoir (la ya'lamuuna) suivie de l'affirmation de la supposition (yazunnuuna). Les illettres sont pris entre deux negatifs — pas de savoir et que de la supposition. Le in (wa-in hum illa) est une restriction — ils ne sont rien d'autre que des gens qui supposent.",
              axe2_voisins: "Le verset 77 evoquait la dissimulation deliberee. Ce verset 78 evoque la supposition par ignorance. Le verset 79 evoquera la falsification volontaire. La sourate distingue trois niveaux de faute — ignorer (v.78), falsifier (v.79) et pretendre (v.80). La supposition est la moins grave mais la plus repandue.",
              axe3_sourate: "La racine z-n-n dans la sourate al-Baqarah oppose la supposition au savoir. En 2:46, les pieux sont ceux qui pensent (yazunnuuna) qu'ils rencontreront leur Seigneur — ici le zann est positif, proche de la certitude. En 2:78, le zann est negatif — supposition sans fondement. Le Coran utilise zann dans les deux sens — conviction interieure ou supposition vaine.",
              axe4_coherence: "La racine z-n-n apparait 69 fois dans le Coran. En 10:36, « la supposition ne remplace en rien la verite ». En 49:12, « evitez beaucoup de suppositions — certaines suppositions sont un peche ». Le Coran est severe envers la supposition sans fondement — elle est source d'erreur et de peche.",
              axe5_frequence: "Pour la mission du khalifa, la supposition est l'ennemi du savoir. Le khalifa doit fonder ses actes sur le savoir, pas sur la supposition. Les illettres qui supposent au lieu de savoir montrent l'echec de la mission de connaissance — ils ont le Livre mais ne le connaissent pas."
            }
          }
        }
      }
    ]
  },

  // =====================================================
  // VERSET 2:79
  // verse_id=86, analysis_id=447
  // "Malheur donc a ceux qui ecrivent le livre de leurs mains puis disent :
  //  ceci vient d'aupres de Dieu — pour acheter avec cela un prix derisoire.
  //  Malheur a eux pour ce que leurs mains ont ecrit et malheur a eux
  //  pour ce qu'ils acquierent."
  // =====================================================
  79: {
    verse_id: 86,
    analysis_id: 447,
    translation_arab: "Malheur a ceux qui ecrivent le livre de leurs mains puis disent : ceci vient d'aupres de Dieu — pour acheter avec cela un prix derisoire. Malheur a eux pour ce que leurs mains ont ecrit et malheur a eux pour ce qu'ils acquierent.",
    full_translation: "Malheur donc a ceux qui ecrivent le livre de leurs [propres] mains puis disent : ceci [vient] d'aupres de Dieu — pour acheter avec cela un prix derisoire. Malheur a eux pour ce que leurs mains ont ecrit et malheur a eux pour ce qu'ils acquierent.",
    translation_explanation: `§DEMARCHE§
Ce verset denonce les falsificateurs du Livre — ceux qui ecrivent un texte de leurs propres mains et le font passer pour la parole de Dieu. Le mot **waylun** est un nom masculin nominatif indefini. Le Lane's donne « woe, perdition, destruction, punishment ». Le mot exprime la menace du chatiment divin. Le verbe **yaktubuuna** est un inaccompli 3MP de la racine k-t-b. Le Lane's donne « they write, they inscribe ». Le verbe designe l'acte physique d'ecriture — ces hommes fabriquent un texte. Le mot **al-kitaba** est un nom masculin singulier accusatif defini de la racine k-t-b. Le Lane's donne « the book, the scripture ». L'article defini est ironique — ils ecrivent « le livre » comme si c'etait le vrai Livre. Le mot **aydiihim** est un nom feminin pluriel genitif avec pronom 3MP de la racine y-d-y. Le Lane's donne « their hands ». Les mains sont l'instrument de la falsification — l'ecriture vient de leurs mains, pas de Dieu. Le verbe **yaquuluuna** est un inaccompli 3MP de la racine q-w-l. Le Lane's donne « they say ». Apres l'ecriture, la parole — ils pretendent que leur ecrit vient de Dieu. Le mot **'indi** est un nom genitif de la racine '-n-d. Le Lane's donne « near, with, from, in the presence of ». Le mot designe la proximite — « d'aupres de Dieu » signifie « de la part de Dieu ». Le mot **Allahi** est le nom de Dieu au genitif de la racine a-l-h. Le Lane's donne « God ». Le mot **thamanan** est un nom masculin singulier accusatif indefini de la racine th-m-n. Le Lane's donne « price, value, cost ». Le prix est ce qu'ils recoivent en echange de la falsification. Le mot **qalilan** est un adjectif masculin singulier accusatif indefini de la racine q-l-l. Le Lane's donne « small, little, few, paltry ». Le prix est qualifie de derisoire — la falsification rapporte peu. Le verbe **katabat** est un accompli 3FS de la racine k-t-b. Le Lane's donne « she/it wrote ». Le sujet feminin est aydii (mains) — « ce que leurs mains ont ecrit ». Le verbe **yaksibuuna** est un inaccompli 3MP de la racine k-s-b. Le Lane's donne « they earn, they acquire, they gain ». Le verbe designe le profit tire de la falsification.

§JUSTIFICATION§
**ecrivent** — Le sens retenu est « livre ». Le verbe yaktubuuna designe l'acte d'ecriture. L'alternative « prescrire » est ecartee car le contexte est l'ecriture physique d'un texte, pas un decret divin.

**le livre** — Le sens retenu est « livre ». Le mot al-kitaba designe le faux livre ecrit par les falsificateurs. L'alternative « decret » est ecartee car le contexte est un objet ecrit physique.

**disent** — Le sens retenu est « dire ». Le verbe yaquuluuna designe la pretention orale — ils disent que le texte vient de Dieu. Pas d'alternative pertinente.

**d'aupres de** — Le sens retenu est « aupres de ». Le mot 'indi designe la proximite — de la part de, d'aupres de. L'alternative « selon » est ecartee car le contexte est l'attribution d'une origine, pas une opinion.

**Dieu** — Le sens retenu est « Dieu ». Le mot Allahi est le nom propre de Dieu. Pas d'alternative pertinente.

**un prix** — Le sens retenu est « prix ». Le mot thamanan designe le prix d'achat. L'alternative « huit » est ecartee car le contexte est commercial, pas numerique.

**derisoire** — Le sens retenu est « peu ». Le mot qalilan designe la petitesse du prix. Pas d'alternative pertinente.

**ont ecrit** — Le sens retenu est « livre ». Le verbe katabat au feminin a pour sujet les mains (aydii). L'alternative « prescrire » est ecartee car le contexte est l'ecriture physique.

**acquierent** — Le sens retenu est « acquerir ». Le verbe yaksibuuna designe le gain tire de la falsification. Pas d'alternative pertinente.

§CRITIQUE§
**malheur triple** — Le mot waylun apparait trois fois dans le verset — une fois au debut et deux fois a la fin. Le triple malheur souligne la gravite de la falsification. La premiere mention menace les falsificateurs. La deuxieme les condamne pour l'acte d'ecriture. La troisieme les condamne pour le profit tire.
**ecrire de leurs mains** — L'expression « de leurs mains » insiste sur le caractere humain du texte — ce n'est pas une revelation mais une fabrication. Les mains sont mentionnees deux fois (positions 4 et 19) pour insister sur l'origine humaine.
**prix derisoire** — Le prix de la falsification est qualifie de « derisoire » (qalilan). Tout prix obtenu en echange de la falsification du Livre de Dieu est derisoire, meme s'il est materiellement eleve — car il coute le chatiment eternel.`,
    segments: [
      { fr: "malheur donc", phon: "fa-waylun", arabic: "فَوَيْلٌ", is_particle: true, position: 0 },
      { fr: "a ceux qui", phon: "li-lladhiina", arabic: "لِّلَّذِينَ", is_particle: true, position: 1 },
      { fr: "ecrivent", pos: "verbe", phon: "yaktubuuna", arabic: "يَكْتُبُونَ", word_key: "ktb", is_particle: false, sense_retenu: "livre", position: 2 },
      { fr: "le livre", pos: "nom", phon: "al-kitaba", arabic: "ٱلْكِتَٰبَ", word_key: "ktb", is_particle: false, sense_retenu: "livre", position: 3 },
      { fr: "de leurs mains", pos: "nom", phon: "bi-aydiihim", arabic: "بِأَيْدِيهِمْ", is_particle: true, position: 4 },
      { fr: "puis", phon: "thumma", arabic: "ثُمَّ", is_particle: true, position: 5 },
      { fr: "disent", pos: "verbe", phon: "yaquuluuna", arabic: "يَقُولُونَ", word_key: "qwl", is_particle: false, sense_retenu: "dire", position: 6 },
      { fr: "ceci", phon: "hadha", arabic: "هَٰذَا", is_particle: true, position: 7 },
      { fr: "d'aupres de", phon: "min", arabic: "مِنْ", is_particle: true, position: 8 },
      { fr: "aupres de", pos: "nom", phon: "'indi", arabic: "عِندِ", word_key: "end", is_particle: false, sense_retenu: "auprès de", position: 9 },
      { fr: "Dieu", pos: "nom", phon: "Allahi", arabic: "ٱللَّهِ", word_key: "alh", is_particle: false, sense_retenu: "Dieu", position: 10 },
      { fr: "pour acheter avec", phon: "li-yashtaruu bihi", arabic: "لِيَشْتَرُوا۟ بِهِ.", is_particle: true, position: 11 },
      { fr: "avec cela", phon: "bihi", arabic: "بِهِ.", is_particle: true, position: 12 },
      { fr: "un prix", pos: "nom", phon: "thamanan", arabic: "ثَمَنًا", word_key: "thmn", is_particle: false, sense_retenu: "prix", position: 13 },
      { fr: "derisoire", pos: "adjectif", phon: "qalilan", arabic: "قَلِيلًا", word_key: "qll", is_particle: false, sense_retenu: "peu", position: 14 },
      { fr: "malheur donc", phon: "fa-waylun", arabic: "فَوَيْلٌ", is_particle: true, position: 15 },
      { fr: "a eux", phon: "lahum", arabic: "لَّهُم", is_particle: true, position: 16 },
      { fr: "pour ce que", phon: "mimma", arabic: "مِّمَّا", is_particle: true, position: 17 },
      { fr: "ont ecrit", pos: "verbe", phon: "katabat", arabic: "كَتَبَتْ", word_key: "ktb", is_particle: false, sense_retenu: "livre", position: 18 },
      { fr: "leurs mains", pos: "nom", phon: "aydiihim", arabic: "أَيْدِيهِمْ", is_particle: true, position: 19 },
      { fr: "et malheur", phon: "wa-waylun", arabic: "وَوَيْلٌ", is_particle: true, position: 20 },
      { fr: "a eux", phon: "lahum", arabic: "لَّهُم", is_particle: true, position: 21 },
      { fr: "pour ce que", phon: "mimma", arabic: "مِّمَّا", is_particle: true, position: 22 },
      { fr: "ils acquierent", pos: "verbe", phon: "yaksibuuna", arabic: "يَكْسِبُونَ", word_key: "ksb", is_particle: false, sense_retenu: "acquérir", position: 23 }
    ],
    words: [
      {
        word_key: "ktb", position: 2, sense_chosen: "livre",
        analysis_axes: {
          concept_chosen: "Écriture/Inscription",
          sense_chosen: "livre",
          concepts: {
            "Écriture/Inscription": {
              status: "retenu",
              senses: ["écrire", "dicter", "demander d'écrire", "écrire à quelqu'un", "s'inscrire", "copier un livre", "art de l'écriture", "scribe", "savant", "enseignant", "vendeur de livres", "école"],
              proof_ctx: "Le verbe yaktubuuna est un inaccompli 3MP de la racine k-t-b. Le Lane's donne « they write, they inscribe, they compose ». Le verbe designe l'acte physique d'ecriture — ces hommes fabriquent un texte de leurs propres mains. Le concept d'ecriture est retenu car le verbe yaktubuuna (ils ecrivent) et katabat (elle a ecrit, en parlant de leurs mains) designent l'acte d'inscription, pas le livre en tant qu'objet.",
              axe1_verset: "Le verbe yaktubuuna est le premier acte denonce — ils ecrivent le livre de leurs mains. L'ecriture est ici un acte de falsification — ils fabriquent un texte et le font passer pour la parole de Dieu. La repetition de la racine k-t-b trois fois dans le verset (yaktubuuna, al-kitaba, katabat) souligne la centralite de l'ecriture dans le crime denonce. L'acte d'ecriture est normalement noble — ici il est perverti par la falsification.",
              axe2_voisins: "Le verset 78 decrivait les illettres qui ne connaissent pas le Livre. Ce verset 79 denonce les lettres qui falsifient le Livre. Le contraste est fort — les illettres ne savent pas, les lettres savent mais falsifient. Le verset 80 montrera le resultat de la falsification — des pretentions mensongeres sur la clemence de Dieu.",
              axe3_sourate: "La racine k-t-b est l'une des plus importantes de la sourate al-Baqarah. En 2:2, le Coran est al-kitab (le Livre). En 2:44, les gens du Livre « lisent le Livre ». En 2:79, ils ecrivent un faux livre. La sourate oppose le vrai Livre (revele par Dieu) au faux livre (ecrit par les mains des hommes).",
              axe4_coherence: "La racine k-t-b apparait environ 319 fois dans le Coran. L'acte d'ecriture (kataba) est mentionne dans plusieurs contextes — ecriture divine (Dieu a prescrit), ecriture prophetique (le Prophete faisait ecrire la revelation) et ecriture humaine. En 2:79, l'ecriture humaine s'oppose a l'ecriture divine — la main de l'homme remplace la parole de Dieu.",
              axe5_frequence: "Pour la mission du khalifa, l'ecriture est un acte de responsabilite. Le khalifa qui ecrit doit ecrire la verite. Les falsificateurs du verset trahissent la mission d'ecriture en substituant leurs mots a la parole de Dieu. La falsification est le contraire de la fidelite au Livre."
            },
            "Livre/Écrit": {
              status: "probable",
              senses: ["contrat de mariage", "contrat d'affranchissement", "écriture révélée", "livre", "registre", "contrat écrit"],
              proof_ctx: "Le mot al-kitaba (position 3) designe le livre en tant qu'objet — le faux livre ecrit par les falsificateurs. Le concept de Livre est probable car les deux occurrences nominales (al-kitaba position 3 et katabat position 18) portent aussi le sens de l'objet ecrit."
            }
          }
        }
      },
      {
        word_key: "qwl", position: 6, sense_chosen: "dire",
        analysis_axes: {
          concept_chosen: "Parole/Énonciation",
          sense_chosen: "dire",
          concepts: {
            "Parole/Énonciation": {
              status: "retenu",
              senses: ["parole", "discours", "parler", "dire", "affirmer"],
              proof_ctx: "Le verbe yaquuluuna est un inaccompli 3MP de la racine q-w-l. Le Lane's donne « they say, they declare, they claim ». Le verbe designe la pretention orale — apres avoir ecrit le faux livre, ils disent qu'il vient de Dieu. La parole ici est un instrument de mensonge — elle attribue a Dieu ce que les mains ont fabrique.",
              axe1_verset: "Le verbe yaquuluuna est le deuxieme acte denonce — apres l'ecriture vient la pretention. « Puis ils disent : ceci vient d'aupres de Dieu ». La conjonction thumma (puis) indique la sequence — d'abord l'ecriture, ensuite le mensonge oral. La parole sert de couverture a la falsification ecrite. Le crime est double — ecrire le faux et le presenter comme vrai.",
              axe2_voisins: "Le verset 78 decrivait les illettres qui supposent. Ce verset 79 montre les lettres qui mentent — ils ne supposent pas, ils savent ce qu'ils font. Le verset 80 montrera une autre pretention — « le feu ne nous touchera que des jours comptes ». La parole est l'instrument des deux crimes — la supposition et le mensonge.",
              axe3_sourate: "La racine q-w-l traverse toute la sourate al-Baqarah. En 2:8, « certains disent : nous croyons en Dieu et au Jour dernier — mais ils ne sont pas croyants ». En 2:11, « quand on leur dit ne semez pas la corruption, ils disent : nous ne sommes que des reformateurs ». La sourate montre que la parole peut servir le mensonge autant que la verite.",
              axe4_coherence: "La racine q-w-l est la plus frequente du Coran avec plus de 1700 occurrences. Le schema « ils disent... » (yaquuluuna) introduit souvent des pretentions fausses dans le Coran. En 5:18, « les juifs et les chretiens dirent : nous sommes les enfants de Dieu et Ses bien-aimes ». La parole sans preuve est une constante de la pretention humaine.",
              axe5_frequence: "Pour la mission du khalifa, la parole doit etre conforme a la verite. Le khalifa ne dit que ce qui est vrai — il ne fait pas passer le faux pour le vrai. Les falsificateurs qui disent « ceci vient de Dieu » trahissent la parole elle-meme."
            }
          }
        }
      },
      {
        word_key: "end", position: 9, sense_chosen: "auprès de",
        analysis_axes: {
          concept_chosen: "Proximité/Présence",
          sense_chosen: "auprès de",
          concepts: {
            "Proximité/Présence": {
              status: "retenu",
              senses: ["auprès de", "chez", "près de"],
              proof_ctx: "Le mot 'indi est un nom genitif de la racine '-n-d. Le Lane's donne « at, near, with, in the possession of, from ». Le mot designe la proximite — « d'aupres de Dieu » (min 'indi Allahi) signifie « venant de la part de Dieu, provenant de chez Dieu ». La construction min 'indi est une expression d'origine — ce qui vient de chez quelqu'un.",
              axe1_verset: "Le mot 'indi est au centre du mensonge — les falsificateurs pretendent que leur ecrit vient « d'aupres de Dieu ». La proximite divine est ici usurpee — ils s'approprient l'autorite de Dieu pour authentifier leur propre ecrit. La formule min 'indi Allahi (d'aupres de Dieu) est une revendication d'origine divine pour un produit humain.",
              axe2_voisins: "Le verset 78 evoquait les illettres qui ne connaissent pas le Livre. Ce verset 79 montre les lettres qui fabriquent un faux Livre et le presentent comme « venant d'aupres de Dieu ». Le verset 80 utilisera la meme formule 'inda Allahi pour la pretention d'un engagement divin — les deux pretentions sont mensongeres.",
              axe3_sourate: "La racine '-n-d dans la sourate al-Baqarah designe la proximite divine. En 2:54, « cela est mieux pour vous aupres de votre Createur ». En 2:110, « vous le retrouverez aupres de Dieu ». La sourate utilise 'inda Allahi pour ce qui a une realite aupres de Dieu — les falsificateurs utilisent cette formule pour un mensonge.",
              axe4_coherence: "La racine '-n-d apparait 200 fois dans le Coran. L'expression 'inda Allahi (aupres de Dieu) designe ce qui a une valeur reelle dans le jugement divin. En 3:169, « vivants aupres de leur Seigneur ». La proximite de Dieu est un privilege reel — la revendiquer pour un faux livre est une profanation.",
              axe5_frequence: "Pour la mission du khalifa, la proximite de Dieu est la source de l'autorite. Le khalifa ne s'attribue pas l'autorite divine — il la reconnait et s'y soumet. Les falsificateurs qui pretendent que leur ecrit vient d'aupres de Dieu usurpent l'autorite divine elle-meme."
            }
          }
        }
      },
      {
        word_key: "alh", position: 10, sense_chosen: "Dieu",
        analysis_axes: {
          concept_chosen: "Divinité",
          sense_chosen: "Dieu",
          concepts: {
            "Divinité": {
              status: "retenu",
              senses: ["divinité", "exclamation divine", "divinité (concept)", "théologie", "oui certes", "Dieu"],
              proof_ctx: "Le mot Allahi est le nom propre de Dieu au cas genitif de la racine a-l-h. Le Lane's donne « God, the one true God ». Le nom de Dieu est ici l'objet de l'usurpation — les falsificateurs attribuent leur ecrit a Dieu. Le nom d'Allah est utilise pour donner une autorite divine a un produit humain.",
              axe1_verset: "Le mot Allahi apparait dans la formule min 'indi Allahi — d'aupres de Dieu. Le nom de Dieu est utilise comme garantie d'authenticite pour un faux livre. L'invocation du nom de Dieu pour couvrir un mensonge est une forme grave de profanation. Le verset ne dit pas qu'ils mentionnent un faux dieu — ils mentionnent le vrai Dieu pour un faux livre.",
              axe2_voisins: "Le verset 78 ne mentionnait pas Dieu directement. Ce verset 79 invoque le nom de Dieu dans le contexte du mensonge. Le verset 80 invoquera aussi Dieu pour une pretention mensongere — « avez-vous pris un engagement aupres de Dieu ? ». Le nom de Dieu est utilise abusivement dans les deux versets.",
              axe3_sourate: "Le nom Allah traverse toute la sourate al-Baqarah. La sourate denonce ceux qui utilisent le nom de Dieu de maniere abusive. En 2:8, les hypocrites disent « nous croyons en Dieu » alors qu'ils ne croient pas. Le verset 79 montre un abus encore plus grave — attribuer a Dieu ce que les mains ont ecrit.",
              axe4_coherence: "Le nom Allah apparait plus de 2600 fois dans le Coran. L'invocation du nom de Dieu pour couvrir un mensonge est un crime repete dans le Coran. En 6:21, « qui est plus injuste que celui qui invente un mensonge contre Dieu ? ». La falsification du Livre est une forme d'invention de mensonge contre Dieu.",
              axe5_frequence: "Pour la mission du khalifa, le nom de Dieu est sacre. Le khalifa ne l'utilise pas pour couvrir ses propres productions. Les falsificateurs du verset souillent le nom de Dieu en l'associant a leurs ecrits humains — c'est une trahison de la confiance divine."
            }
          }
        }
      },
      {
        word_key: "thmn", position: 13, sense_chosen: "prix",
        analysis_axes: {
          concept_chosen: "Valeur/Prix",
          sense_chosen: "prix",
          concepts: {
            "Valeur/Prix": {
              status: "retenu",
              senses: ["prix", "valeur", "acheter", "vendre"],
              proof_ctx: "Le mot thamanan est un nom masculin singulier accusatif indefini de la racine th-m-n. Le Lane's donne « price, value, cost, compensation ». Le thaman designe ce que l'on recoit en echange d'un bien. Le prix ici est le benefice que les falsificateurs tirent de la falsification — un gain materiel obtenu en vendant la parole de Dieu.",
              axe1_verset: "Le mot thamanan est qualifie de qalilan (derisoire) — le prix de la falsification est insignifiant. La construction li-yashtaruu bihi thamanan qalilan (pour acheter avec cela un prix derisoire) montre que la falsification est motivee par le gain materiel. Le prix est doublement derisoire — derisoire en lui-meme et derisoire par rapport a ce qui est sacrifie (la verite divine).",
              axe2_voisins: "Le verset 78 decrivait l'ignorance des illettres. Ce verset 79 revele la motivation des falsificateurs — le gain materiel. Le verset 80 montrera une autre forme de gain — la pretention d'echapper au chatiment. Les falsificateurs vendent la parole de Dieu pour un profit temporaire.",
              axe3_sourate: "La racine th-m-n dans la sourate al-Baqarah est liee a la vente de la parole de Dieu. En 2:41, « n'achetez pas Mes signes pour un prix derisoire (thamanan qalilan) ». En 2:174, « ceux qui cachent ce que Dieu a fait descendre du Livre et l'achetent pour un prix derisoire ». La formule thamanan qalilan est recurrente — chaque fois que le Livre est vendu, le prix est derisoire.",
              axe4_coherence: "La racine th-m-n apparait 20 fois dans le Coran. La formule thamanan qalilan (prix derisoire) apparait 7 fois — toujours dans le contexte de la vente de la parole de Dieu ou de la verite. Le Coran insiste — aucun prix n'est suffisant pour compenser la perte de la verite divine.",
              axe5_frequence: "Pour la mission du khalifa, la verite divine n'a pas de prix. Le khalifa ne vend pas la parole de Dieu — il la transmet fidelement. Les falsificateurs qui echangent la verite divine contre un gain materiel trahissent la mission fondamentale de transmission de la revelation."
            },
            "Nombre": {
              status: "nul",
              senses: ["huit", "huitième"],
              proof_ctx: "Le sens numerique (huit) est un autre aspect de th-m-n. Le contexte est clairement commercial — thamanan qalilan designe un prix, pas le chiffre huit."
            }
          }
        }
      },
      {
        word_key: "qll", position: 14, sense_chosen: "peu",
        analysis_axes: {
          concept_chosen: "Quantité/Rareté",
          sense_chosen: "peu",
          concepts: {
            "Quantité/Rareté": {
              status: "retenu",
              senses: ["être peu", "diminuer", "peu nombreux", "rare"],
              proof_ctx: "Le mot qalilan est un adjectif masculin singulier accusatif indefini de la racine q-l-l. Le Lane's donne « little, small, few, paltry, insignificant ». Le mot qualifie le prix (thamanan qalilan) — un prix derisoire. L'adjectif souligne que le gain de la falsification est insignifiant par rapport a la perte.",
              axe1_verset: "Le mot qalilan qualifie le prix de la falsification — derisoire. La construction thamanan qalilan (un prix derisoire) est un jugement divin sur la valeur du gain des falsificateurs. Tout prix est derisoire quand il est obtenu en echange de la falsification de la parole de Dieu. Le qualificatif qalilan est un jugement de valeur absolu — pas relatif.",
              axe2_voisins: "Le verset 78 decrivait les illettres sans gain. Ce verset 79 montre les lettres qui gagnent un prix derisoire. Le contraste souligne que la falsification ne profite meme pas — le gain est si faible qu'il ne justifie pas le crime. Le verset 80 montrera une autre forme de pretention sans fondement.",
              axe3_sourate: "La racine q-l-l dans la sourate al-Baqarah qualifie souvent le gain de ceux qui vendent la parole de Dieu. En 2:41, « n'achetez pas Mes signes pour un prix derisoire ». En 2:174, meme formule. La sourate repete le qualificatif qalil pour souligner l'insignifiance du gain face a la gravite du crime.",
              axe4_coherence: "La racine q-l-l apparait environ 75 fois dans le Coran. Le qualificatif qalil est utilise pour decrire ce qui est insuffisant, insignifiant. En 9:9, « ils ont achete les signes de Dieu pour un prix derisoire ». Le Coran utilise qalil comme un verdict — le prix du mensonge est toujours derisoire.",
              axe5_frequence: "Pour la mission du khalifa, la quantite ne determine pas la valeur. Le khalifa ne sacrifie pas le precieux pour le derisoire. Les falsificateurs echangent le tresor divin contre un gain derisoire — c'est le mauvais commerce par excellence."
            }
          }
        }
      },
      {
        word_key: "ksb", position: 23, sense_chosen: "acquérir",
        analysis_axes: {
          concept_chosen: "Acquisition/Rétribution",
          sense_chosen: "acquérir",
          concepts: {
            "Acquisition/Rétribution": {
              status: "retenu",
              senses: ["gagner", "mériter", "acquérir"],
              proof_ctx: "Le verbe yaksibuuna est un inaccompli 3MP de la racine k-s-b. Le Lane's donne « they earn, they gain, they acquire, they merit ». Le verbe designe le gain obtenu par l'effort — le kasb est l'acquisition par le travail. Le Lane's precise que le kasb peut etre positif (gain licite) ou negatif (gain illicite). Ici le gain est illicite — il provient de la falsification du Livre.",
              axe1_verset: "Le verbe yaksibuuna cloture le verset par la troisieme condamnation — malheur a eux pour ce qu'ils acquierent. Le gain des falsificateurs est condamne doublement — une fois pour l'acte d'ecriture (katabat) et une fois pour le profit (yaksibuuna). L'acquisition est le motif du crime — ils falsifient pour gagner. Le verset enchaine les condamnations — ecriture, parole, acquisition.",
              axe2_voisins: "Le verset 78 decrivait l'ignorance sans gain. Ce verset 79 denonce le gain par la falsification. Le verset 80 montrera la pretention sans fondement — une autre forme de gain illusoire (pretention d'echapper au chatiment). La sourate montre que le gain illicite prend plusieurs formes — materiel (v.79) et spirituel (v.80).",
              axe3_sourate: "La racine k-s-b dans la sourate al-Baqarah designe l'acquisition des actes et de leurs consequences. En 2:81, « ceux qui ont acquis le mal (kasabat sayyiatan) ». En 2:134, « a elle ce qu'elle a acquis (kasabat) ». En 2:286, « elle a ce qu'elle a acquis et contre elle ce qu'elle a acquis ». La sourate montre que chaque ame porte ses acquisitions — bonnes ou mauvaises.",
              axe4_coherence: "La racine k-s-b apparait 67 fois dans le Coran. Le kasb est le mecanisme de retribution — chaque personne est retribuee pour ce qu'elle acquiert. En 2:281, « chaque ame sera payee pour ce qu'elle a acquis ». Le concept d'acquisition est au coeur de la justice divine — les falsificateurs seront retribues pour leur gain illicite.",
              axe5_frequence: "Pour la mission du khalifa, l'acquisition doit etre licite. Le khalifa n'acquiert que ce qui est conforme a la verite divine. Les falsificateurs qui acquierent par le mensonge accumulent un chatiment — leur gain terrestre est une perte eternelle."
            }
          }
        }
      }
    ]
  },

  // =====================================================
  // VERSET 2:80
  // verse_id=87, analysis_id=446
  // "Et ils dirent : le feu ne nous touchera que des jours comptes.
  //  Dis : avez-vous pris aupres de Dieu un engagement — Dieu ne manque
  //  jamais a Son engagement — ou bien dites-vous sur Dieu ce que vous
  //  ne savez pas ?"
  // =====================================================
  80: {
    verse_id: 87,
    analysis_id: 446,
    translation_arab: "Et ils dirent : le feu ne nous touchera que des jours comptes. Dis : avez-vous pris aupres de Dieu un engagement — Dieu ne manque jamais a Son engagement — ou bien dites-vous sur Dieu ce que vous ne savez pas ?",
    full_translation: "Et ils dirent : le feu ne nous touchera que [pendant] des jours comptes. Dis : avez-vous pris aupres de Dieu un engagement — [car] Dieu ne manque jamais a Son engagement — ou bien dites-vous sur Dieu ce que vous ne savez pas ?",
    translation_explanation: `§DEMARCHE§
Ce verset rapporte la pretention des gens du Livre que le chatiment du feu sera limite a quelques jours. Le verbe **qaaluu** est un accompli 3MP de la racine q-w-l. Le Lane's donne « they said ». Ce sont les gens du Livre qui parlent. Le verbe **tamassana** est un inaccompli 3FS de la racine m-s-s. Le Lane's donne « it touches us, it reaches us, it affects us ». Le verbe designe le contact physique — le feu les touchera. La negation lan (jamais) avec le subjonctif exprime une negation categorique du futur — le feu ne nous touchera jamais sauf quelques jours. Le mot **al-naaru** est un nom feminin singulier nominatif defini de la racine n-w-r. Le Lane's donne « the fire, hellfire ». Le feu designe le chatiment de l'au-dela. Le mot **ayyaaman** est un nom masculin pluriel accusatif indefini de la racine y-w-m. Le Lane's donne « days, a number of days ». Le pluriel indefini designe un nombre indetermine mais limite de jours. Le mot **ma'duudatan** est un participe passif feminin singulier accusatif de la racine '-d-d. Le Lane's donne « counted, numbered, limited in number ». Le participe passif signifie « comptees, denombrees » — un nombre fini et limite. Le verbe **qul** est un imperatif 2MS de la racine q-w-l. Le Lane's donne « say ». L'ordre s'adresse au Prophete — Dieu lui ordonne de repondre. Le verbe **ittakhadhtum** est un accompli 2MP forme VIII de la racine a-kh-dh. Le Lane's donne « you have taken, you have adopted, you have made ». La forme VIII (iftakhadha) signifie prendre pour soi, adopter. Le mot **'inda** est un nom de la racine '-n-d. Le Lane's donne « at, near, with, from ». Le mot designe la proximite — aupres de Dieu. Le mot **Allahi** est le nom de Dieu au genitif. Le mot **'ahdan** est un nom masculin singulier accusatif indefini de la racine '-h-d. Le Lane's donne « covenant, compact, promise, engagement ». Le 'ahd est l'engagement bilateral — la promesse faite et acceptee. Le verbe **yukhlifa** est un inaccompli 3MS forme IV de la racine kh-l-f. Le Lane's donne « He breaks, He fails to keep ». La forme IV (akhlafa) signifie manquer a une promesse. Precede de la negation lan, il affirme que Dieu ne manque jamais a Son engagement. Le mot **'ahdahu** est un nom avec pronom 3MS de la racine '-h-d. Le Lane's donne « His covenant, His promise ». Le pronom 3MS renvoie a Dieu — Son engagement. Le verbe **taquuluuna** est un inaccompli 2MP de la racine q-w-l. Le Lane's donne « you say ». Le verbe designe la parole des gens du Livre. Le verbe **ta'lamuuna** est un inaccompli 2MP de la racine '-l-m. Le Lane's donne « you know ». Precede de la negation la et de ma, le verbe designe l'ignorance — ce qu'ils ne savent pas.

§JUSTIFICATION§
**dirent** — Le sens retenu est « dire ». Le verbe qaaluu designe la parole des gens du Livre. Pas d'alternative pertinente.

**touchera** — Le sens retenu est « toucher ». Le verbe tamassana designe le contact physique du feu. L'alternative « affliger » est ecartee car le contexte est le contact physique (le feu touche), meme si le sens d'affliction est present en arriere-plan.

**le feu** — Le sens retenu est « feu ». Le mot al-naaru designe le feu de l'au-dela. L'alternative « lumiere » est ecartee car l'article defini al-naru avec le contexte du chatiment designe le feu infernal, pas la lumiere.

**des jours** — Le sens retenu est « jour ». Le mot ayyaaman au pluriel designe un nombre de jours. L'alternative « evenement » est ecartee car le contexte est la duree temporelle (jours comptes).

**comptes** — Le sens retenu est « compter ». Le mot ma'duudatan au participe passif feminin designe des jours denombres. L'alternative « preparer » est ecartee car le participe passif de '-d-d designe le denombrement, pas la preparation.

**dis** — Le sens retenu est « dire ». Le verbe qul a l'imperatif ordonne la reponse. Pas d'alternative pertinente.

**pris** — Le sens retenu est « prendre ». Le verbe ittakhadhtum forme VIII designe l'acte de prendre pour soi. Pas d'alternative pertinente.

**aupres de** — Le sens retenu est « aupres de ». Le mot 'inda designe la proximite. L'alternative « selon » est ecartee car le contexte est l'origine d'un engagement, pas une opinion.

**Dieu** — Le sens retenu est « Dieu ». Pas d'alternative pertinente.

**un engagement** — Le sens retenu est « engagement ». Le mot 'ahdan designe un pacte. L'alternative « epoque » est ecartee car le contexte est contractuel, pas temporel.

**manque a** — Le sens retenu est « succeder ». Le verbe yukhlifa forme IV precede de la negation signifie « ne pas manquer a ». L'alternative « differer » est ecartee car le contexte est la fidelite a un engagement.

**Son engagement** — Le sens retenu est « engagement ». Le mot 'ahdahu avec pronom 3MS designe l'engagement de Dieu. Meme justification.

**dites-vous** — Le sens retenu est « dire ». Le verbe taquuluuna designe la parole des interlocuteurs. Pas d'alternative pertinente.

**savez** — Le sens retenu est « savoir ». Le verbe ta'lamuuna precede de la negation designe l'ignorance. L'alternative « mondes » est ecartee car le verbe a l'inaccompli 2MP designe l'acte de connaitre.

§CRITIQUE§
**le feu ne nous touchera que des jours comptes** — Cette pretention est une forme d'arrogance spirituelle. Les gens du Livre croient que le chatiment du feu sera temporaire pour eux — quelques jours seulement. Cette croyance repose soit sur un engagement divin reel (auquel cas il faut le prouver) soit sur une invention (auquel cas c'est un mensonge).
**Dieu ne manque jamais a Son engagement** — L'incise est une affirmation de la fidelite divine. Si les gens du Livre avaient reellement un engagement de Dieu, Dieu le tiendrait. Mais la question rhetorique qui suit (« ou bien dites-vous... ») suggere qu'ils n'ont pas un tel engagement.
**dites-vous sur Dieu ce que vous ne savez pas** — La question rhetorique revele le verdict divin — ils disent sur Dieu ce qu'ils ne savent pas. Leur pretention n'est pas fondee sur un engagement divin mais sur une supposition. Le verset rejoint le verset 78 — la supposition (zann) remplace le savoir ('ilm).`,
    segments: [
      { fr: "et ils dirent", pos: "verbe", phon: "wa-qaaluu", arabic: "وَقَالُوا۟", word_key: "qwl", is_particle: false, sense_retenu: "dire", position: 0 },
      { fr: "jamais", phon: "lan", arabic: "لَن", is_particle: true, position: 1 },
      { fr: "nous touchera", pos: "verbe", phon: "tamassana", arabic: "تَمَسَّنَا", word_key: "mss", is_particle: false, sense_retenu: "toucher", position: 2 },
      { fr: "le feu", pos: "nom", phon: "al-naaru", arabic: "ٱلنَّارُ", word_key: "nwr", is_particle: false, sense_retenu: "feu", position: 3 },
      { fr: "sauf", phon: "illa", arabic: "إِلَّآ", is_particle: true, position: 4 },
      { fr: "des jours", pos: "nom", phon: "ayyaaman", arabic: "أَيَّامًا", word_key: "ywm", is_particle: false, sense_retenu: "jour", position: 5 },
      { fr: "comptes", pos: "adjectif", phon: "ma'duudatan", arabic: "مَّعْدُودَةً", word_key: "edd", is_particle: false, sense_retenu: "compter", position: 6 },
      { fr: "dis", pos: "verbe", phon: "qul", arabic: "قُلْ", word_key: "qwl", is_particle: false, sense_retenu: "dire", position: 7 },
      { fr: "avez-vous pris", pos: "verbe", phon: "ittakhadhtum", arabic: "أَتَّخَذْتُمْ", word_key: "akhz", is_particle: false, sense_retenu: "prendre", position: 8 },
      { fr: "aupres de", phon: "'inda", arabic: "عِندَ", word_key: "end", is_particle: false, sense_retenu: "auprès de", position: 9 },
      { fr: "Dieu", pos: "nom", phon: "Allahi", arabic: "ٱللَّهِ", word_key: "alh", is_particle: false, sense_retenu: "Dieu", position: 10 },
      { fr: "un engagement", pos: "nom", phon: "'ahdan", arabic: "عَهْدًا", word_key: "ehd", is_particle: false, sense_retenu: "engagement", position: 11 },
      { fr: "alors jamais", phon: "fa-lan", arabic: "فَلَن", is_particle: true, position: 12 },
      { fr: "ne manquera a", pos: "verbe", phon: "yukhlifa", arabic: "يُخْلِفَ", word_key: "xlf", is_particle: false, sense_retenu: "succéder", position: 13 },
      { fr: "Dieu", pos: "nom", phon: "Allahu", arabic: "ٱللَّهُ", word_key: "alh", is_particle: false, sense_retenu: "Dieu", position: 14 },
      { fr: "Son engagement", pos: "nom", phon: "'ahdahu", arabic: "عَهْدَهُ،ٓ", word_key: "ehd", is_particle: false, sense_retenu: "engagement", position: 15 },
      { fr: "ou bien", phon: "am", arabic: "أَمْ", is_particle: true, position: 16 },
      { fr: "dites-vous", pos: "verbe", phon: "taquuluuna", arabic: "تَقُولُونَ", word_key: "qwl", is_particle: false, sense_retenu: "dire", position: 17 },
      { fr: "sur", phon: "'ala", arabic: "عَلَY", is_particle: true, position: 18 },
      { fr: "Dieu", pos: "nom", phon: "Allahi", arabic: "ٱللَّهِ", word_key: "alh", is_particle: false, sense_retenu: "Dieu", position: 19 },
      { fr: "ce que", phon: "ma", arabic: "مَا", is_particle: true, position: 20 },
      { fr: "ne", phon: "la", arabic: "لَا", is_particle: true, position: 21 },
      { fr: "savez", pos: "verbe", phon: "ta'lamuuna", arabic: "تَعْلَمُونَ", word_key: "elm", is_particle: false, sense_retenu: "savoir", position: 22 }
    ],
    words: [
      {
        word_key: "qwl", position: 0, sense_chosen: "dire",
        analysis_axes: {
          concept_chosen: "Parole/Énonciation",
          sense_chosen: "dire",
          concepts: {
            "Parole/Énonciation": {
              status: "retenu",
              senses: ["parole", "discours", "parler", "dire", "affirmer"],
              proof_ctx: "Le verbe qaaluu est un accompli 3MP de la racine q-w-l. Le Lane's donne « they said, they declared ». Le verbe introduit la pretention des gens du Livre — ils affirment que le feu ne les touchera que quelques jours. La racine q-w-l porte ici la charge du mensonge — la parole sert a enoncer une pretention sans fondement.",
              axe1_verset: "Le verbe qaaluu ouvre le verset par la pretention. Le verset contient trois occurrences de q-w-l — qaaluu (ils dirent, position 0), qul (dis, position 7) et taquuluuna (vous dites, position 17). La premiere est la pretention des gens du Livre. La deuxieme est l'ordre divin au Prophete de repondre. La troisieme est la mise en question de leur parole. Les trois occurrences structurent le verset en accusation-reponse-verdict.",
              axe2_voisins: "Le verset 78 evoquait la supposition des illettres. Le verset 79 denonait la falsification des lettres. Ce verset 80 rapporte la pretention qui en resulte — les gens du Livre croient echapper au chatiment. La progression est logique — supposition, falsification, pretention. Le verset suivant (81) donnera le verdict divin.",
              axe3_sourate: "La racine q-w-l dans la sourate al-Baqarah structure les dialogues entre Dieu et les hommes. En 2:11, « quand on leur dit ne semez pas la corruption, ils disent... ». En 2:80, « ils dirent... Dis... dites-vous ? ». La sourate utilise les trois formes de q-w-l pour organiser le debat — pretention humaine, reponse divine, question rhetorique.",
              axe4_coherence: "La racine q-w-l est la plus frequente du Coran. La structure qaaluu... qul (ils dirent... dis) est un schema coranique recurrent pour refuter les pretentions humaines. En 2:111, « ils dirent : n'entreront au Paradis que les juifs ou les chretiens. Dis : apportez votre preuve ». Le meme schema est utilise ici — pretention suivie de demande de preuve.",
              axe5_frequence: "Pour la mission du khalifa, la parole engage. Le khalifa ne dit que ce qu'il sait — il ne pretend pas sans preuve. Les gens du Livre qui disent « le feu ne nous touchera que des jours comptes » pretendent sans preuve — ils disent sur Dieu ce qu'ils ne savent pas."
            }
          }
        }
      },
      {
        word_key: "mss", position: 2, sense_chosen: "toucher",
        analysis_axes: {
          concept_chosen: "Contact/Atteinte",
          sense_chosen: "toucher",
          concepts: {
            "Contact/Atteinte": {
              status: "retenu",
              senses: ["toucher", "atteindre", "affliger"],
              proof_ctx: "Le verbe tamassana est un inaccompli 3FS de la racine m-s-s. Le Lane's donne « it touches us, it reaches us, it comes into contact with us ». Le Lane's precise que massa designe le contact direct — toucher physiquement. Le sujet est al-naaru (le feu) — le feu touche. La negation lan (jamais) avec l'exception illa (sauf) limite le contact a des jours comptes.",
              axe1_verset: "Le verbe tamassana est au centre de la pretention — le feu ne les touchera que temporairement. Le verbe massa designe le contact physique direct — le feu comme chatiment concret. La negation categorique lan suivie de l'exception illa cree une pretention de limitation — le chatiment sera limite dans le temps. La pretention est audacieuse — affirmer connaitre la duree du chatiment divin.",
              axe2_voisins: "Le verset 78 evoquait la supposition. Le verset 79 denonait la falsification. Ce verset 80 montre la pretention qui en decoule — si le chatiment est temporaire, pourquoi craindre la falsification ? La pretention du chatiment limite est la justification implicite de la falsification du verset precedent.",
              axe3_sourate: "La racine m-s-s dans la sourate al-Baqarah apparait en 2:80 et en 2:214. En 2:214, « le malheur et l'adversite les ont touches (massathum) ». La sourate montre que le contact avec l'adversite est une epreuve — pretendre y echapper est une illusion.",
              axe4_coherence: "La racine m-s-s apparait 61 fois dans le Coran. Le verbe massa designe le contact physique — toucher, atteindre, affliger. En 3:24, « le feu ne nous touchera (tamassana al-naru) que des jours comptes ». La meme pretention est repetee en sourate 3 — les gens du Livre persistent dans cette croyance. En 2:275, celui qui mange l'usure est « comme celui que le diable touche (yatakhabbatuhu al-shaytanu mina al-massi) ».",
              axe5_frequence: "Pour la mission du khalifa, le contact avec l'epreuve est une realite. Le khalifa ne pretend pas echapper au chatiment — il cherche a l'eviter par l'obeissance. Les gens du Livre qui pretendent que le feu ne les touchera que quelques jours se bercent d'illusions."
            }
          }
        }
      },
      {
        word_key: "nwr", position: 3, sense_chosen: "feu",
        analysis_axes: {
          concept_chosen: "Lumière/Clarté",
          sense_chosen: "feu",
          concepts: {
            "Lumière/Clarté": {
              status: "retenu",
              senses: ["éclairer", "lumière", "feu", "guider par la lumière"],
              proof_ctx: "Le mot al-naaru est un nom feminin singulier nominatif defini de la racine n-w-r. Le Lane's donne « fire, flame, hellfire ». Le Lane's precise que nar designe le feu physique et par extension le feu de l'enfer. L'article defini (al-) designe un feu specifique — le feu du chatiment dans l'au-dela. La racine n-w-r couvre a la fois la lumiere (nuur) et le feu (naar) — les deux manifestations de l'energie lumineuse.",
              axe1_verset: "Le mot al-naaru est le sujet de la pretention — c'est le feu qui « ne touchera » les gens du Livre que temporairement. Le feu est le chatiment de l'au-dela — sa mention cree la gravite du propos. La pretention de limiter le contact avec le feu est une negation de la gravite du chatiment divin.",
              axe2_voisins: "Le verset 79 denonait la falsification avec un triple « malheur ». Ce verset 80 montre que les falsificateurs croient pouvoir echapper au chatiment. Le verset 81 donnera le verdict divin — ceux qui ont acquis le mal seront entoures par le feu. La reponse divine est directe — le feu les enveloppera, pas seulement les touchera.",
              axe3_sourate: "La racine n-w-r dans la sourate al-Baqarah porte les deux sens — lumiere et feu. En 2:17, les hypocrites allument un feu (istaw qada naaran) puis Dieu eteint leur lumiere (nuurihim). En 2:257, « Dieu est le protecteur de ceux qui croient — Il les fait sortir des tenebres vers la lumiere (al-nuur) ». Le feu et la lumiere sont les deux faces de la meme racine — le feu detruit, la lumiere guide.",
              axe4_coherence: "La racine n-w-r apparait 194 fois dans le Coran sous les formes naar (feu) et nuur (lumiere). Le feu (naar) est mentionne plus de 140 fois — principalement comme chatiment de l'au-dela. En 3:24, la meme pretention est rapportee — le feu ne nous touchera que des jours comptes. Le Coran refute cette pretention a chaque occurrence.",
              axe5_frequence: "Pour la mission du khalifa, le feu est l'avertissement ultime. Le khalifa prend au serieux le chatiment du feu — il ne le minimise pas. Les gens du Livre qui pretendent que le feu ne les touchera que temporairement ne prennent pas au serieux l'avertissement divin."
            }
          }
        }
      },
      {
        word_key: "ywm", position: 5, sense_chosen: "jour",
        analysis_axes: {
          concept_chosen: "Temps/Période",
          sense_chosen: "jour",
          concepts: {
            "Temps/Période": {
              status: "retenu",
              senses: ["jour", "journée", "temps", "période"],
              proof_ctx: "Le mot ayyaaman est un nom masculin pluriel accusatif indefini de la racine y-w-m. Le Lane's donne « days, some days, a number of days ». Le pluriel indefini (sans article) designe un nombre indetermine mais fini de jours. Le Lane's precise que le pluriel ayyaam est le pluriel de yawm (jour) utilise pour les petits nombres. Les gens du Livre pretendent que le chatiment sera temporaire — limite a quelques jours.",
              axe1_verset: "Le mot ayyaaman est l'objet de la limitation — le chatiment ne durera que des jours. Le pluriel indefini suivi du qualificatif ma'duudatan (comptes) renforce la limitation — ce ne sont pas des jours innombrables mais des jours comptes, finis, determines. La pretention est que le chatiment a une fin connue et proche.",
              axe2_voisins: "Le verset 79 denonait la falsification sans mentionner de temporalite. Ce verset 80 introduit la dimension temporelle — le chatiment sera limite dans le temps. Le verset 81 repondra sans mentionner de limite — « ceux-la sont les habitants du feu, ils y demeureront eternellement ». La reponse divine efface la limitation temporelle pretie par les gens du Livre.",
              axe3_sourate: "La racine y-w-m dans la sourate al-Baqarah designe des moments specifiques et des periodes. En 2:48, « craignez un jour (yawman) ou aucune ame ne pourra rien pour une autre ». En 2:85, « et au jour de la resurrection ». La sourate utilise yawm pour des moments decisifs — le jour du jugement n'est pas un jour parmi d'autres.",
              axe4_coherence: "La racine y-w-m apparait plus de 475 fois dans le Coran. Le mot yawm et ses pluriels designent des periodes de durees variables — du jour solaire a l'ere cosmique (50 000 ans en 70:4). En 3:24, « c'est parce qu'ils ont dit : le feu ne nous touchera que des jours comptes ». Le Coran rapporte et refute cette pretention dans plusieurs sourates.",
              axe5_frequence: "Pour la mission du khalifa, le temps est une realite divine. Le khalifa ne pretend pas connaitre la duree du chatiment divin — il s'en remet a la justice de Dieu. Les gens du Livre qui pretendent connaitre la duree du chatiment s'arrogent une connaissance divine."
            },
            "Événement/Moment marquant": {
              status: "nul",
              senses: ["bataille", "jour de combat", "jour marquant", "événement"],
              proof_ctx: "Le sens d'evenement marquant est un autre aspect de y-w-m. Le contexte utilise le pluriel ayyaam au sens de jours comptes — une duree temporelle, pas un evenement marquant."
            }
          }
        }
      },
      {
        word_key: "edd", position: 6, sense_chosen: "compter",
        analysis_axes: {
          concept_chosen: "Dénombrement/Calcul",
          sense_chosen: "compter",
          concepts: {
            "Dénombrement/Calcul": {
              status: "retenu",
              senses: ["compter", "dénombrer", "nombre", "énumérer ses qualités", "nombreux"],
              proof_ctx: "Le mot ma'duudatan est un participe passif feminin singulier accusatif de la racine '-d-d. Le Lane's donne « counted, numbered, limited in number, few ». Le participe passif (maf'uula) signifie « comptees » — ce qui a ete denombre. Le Lane's precise que ma'duud implique un nombre fini et limite. La racine '-d-d porte l'idee de denombrement — ce qui peut etre compte est necessairement fini.",
              axe1_verset: "Le mot ma'duudatan qualifie ayyaaman (jours) — des jours comptes. Le participe passif implique que le nombre est fini et connu — les gens du Livre pretendent connaitre la duree du chatiment. La qualification « comptes » renforce la pretention de finitude — ce ne sont pas des jours indefinis mais des jours determines, limites, finis.",
              axe2_voisins: "Le verset 79 ne mentionnait pas de limitation temporelle. Ce verset 80 introduit la pretention d'un chatiment limite. Le verset 81 repondra par l'eternite — « ils y demeureront eternellement (khaliduna) ». Le contraste entre « jours comptes » et « eternite » est le verdict divin contre la pretention humaine.",
              axe3_sourate: "La racine '-d-d dans la sourate al-Baqarah traite du denombrement et de la preparation. En 2:184, « des jours comptes (ayyaaman ma'duudatin) » designe la duree du jeune de Ramadan. Le meme mot est utilise pour le jeune (duree fixe et limitee) et pour le chatiment pretendu (duree pretendue limitee). Le Coran utilise le meme mot pour montrer la faussete de la pretention — le jeune a une duree fixee par Dieu, le chatiment aussi, mais les gens du Livre ne la connaissent pas.",
              axe4_coherence: "La racine '-d-d apparait environ 57 fois dans le Coran. Le participe ma'duud designe ce qui est fini et denombrable. En 3:24, « des jours comptes (ayyaamin ma'duudatin) » — la meme pretention. En 11:104, le chatiment est « pour un terme compte (li-ajalin ma'duudin) ». Le Coran utilise le denombrement pour distinguer le temporaire de l'eternel.",
              axe5_frequence: "Pour la mission du khalifa, le denombrement est un acte de connaissance. Le khalifa ne pretend pas connaitre ce qu'il ne sait pas — il ne compte pas ce qu'il ne peut pas compter. Les gens du Livre qui comptent les jours du chatiment pretendent connaitre l'inconnaissable."
            }
          }
        }
      },
      {
        word_key: "akhz", position: 8, sense_chosen: "prendre",
        analysis_axes: {
          concept_chosen: "Prise/Saisie",
          sense_chosen: "prendre",
          concepts: {
            "Prise/Saisie": {
              status: "retenu",
              senses: ["prendre", "saisir", "adopter"],
              proof_ctx: "Le verbe ittakhadhtum est un accompli 2MP forme VIII de la racine a-kh-dh. Le Lane's donne « you have taken for yourselves, you have adopted, you have made for yourselves ». La forme VIII (iftakhadha) est reflexive-appropriative — prendre pour soi, s'attribuer. Le Lane's precise que ittakhadha implique une prise deliberee et volontaire. La question est rhetorique — avez-vous pris un engagement aupres de Dieu ?",
              axe1_verset: "Le verbe ittakhadhtum est la premiere branche de l'alternative posee par Dieu — soit vous avez pris un engagement aupres de Dieu (auquel cas prouvez-le), soit vous dites sur Dieu ce que vous ne savez pas. La forme VIII souligne l'initiative personnelle — prendre un engagement implique un acte delibere de la part des deux parties.",
              axe2_voisins: "Le verset 79 denonait la falsification. Ce verset 80 questionne le fondement de la pretention — si les gens du Livre pretendent que le chatiment sera temporaire, ont-ils un engagement divin pour le prouver ? Le verset 81 donnera la reponse — non, ils n'ont pas un tel engagement.",
              axe3_sourate: "La racine a-kh-dh dans la sourate al-Baqarah traite de la prise et de la saisie. En 2:63, « nous avons pris votre engagement ». En 2:83, « nous avons pris l'engagement des enfants d'Israel ». En 2:84, « nous avons pris votre engagement ». La sourate rappelle les engagements reels que Dieu a pris avec les enfants d'Israel — aucun ne promet un chatiment temporaire.",
              axe4_coherence: "La racine a-kh-dh apparait 273 fois dans le Coran. Le verbe akhadha designe la prise sous toutes ses formes — prendre un objet, prendre un engagement, saisir un peuple (chatiment). En 7:172, Dieu a pris l'engagement de la descendance d'Adam. Le Coran distingue les engagements reels de Dieu des pretentions humaines.",
              axe5_frequence: "Pour la mission du khalifa, la prise d'engagement est un acte solennel. Le khalifa ne pretend pas avoir un engagement de Dieu qu'il n'a pas. Les gens du Livre sont mis au defi de prouver leur pretention — s'ils ont un engagement, qu'ils le montrent."
            },
            "Châtiment": {
              status: "nul",
              senses: ["punir", "reprocher"],
              proof_ctx: "Le sens de chatiment est un autre aspect de a-kh-dh. Le contexte utilise la forme VIII ittakhadhtum (avez-vous pris pour vous-memes) — c'est la prise deliberee d'un engagement, pas le chatiment divin."
            }
          }
        }
      },
      {
        word_key: "ehd", position: 11, sense_chosen: "engagement",
        analysis_axes: {
          concept_chosen: "Engagement/Promesse",
          sense_chosen: "engagement",
          concepts: {
            "Engagement/Promesse": {
              status: "retenu",
              senses: ["pacte", "engagement", "promesse", "confier"],
              proof_ctx: "Le mot 'ahdan est un nom masculin singulier accusatif indefini de la racine '-h-d. Le Lane's donne « covenant, compact, engagement, promise, contract ». Le Lane's precise que le 'ahd est un engagement bilateral — une promesse qui lie les deux parties. Le mot apparait deux fois dans le verset — 'ahdan (un engagement, position 11) et 'ahdahu (Son engagement, position 15).",
              axe1_verset: "Le mot 'ahdan est l'objet de la question — avez-vous pris un engagement aupres de Dieu ? La deuxieme occurrence 'ahdahu (Son engagement) affirme que Dieu ne manque jamais a Son engagement. Les deux occurrences se repondent — si un engagement existe, Dieu le tiendrait. La question implique qu'un tel engagement n'existe pas — les gens du Livre n'ont pas de promesse divine de chatiment temporaire.",
              axe2_voisins: "Le verset 79 denonait la falsification du Livre. Ce verset 80 questionne l'existence d'un engagement divin garantissant un chatiment temporaire. Le lien est direct — les falsificateurs ont peut-etre invente un faux engagement de Dieu dans le faux livre qu'ils ont ecrit de leurs mains. Le verset 81 repondra par la realite du chatiment eternel.",
              axe3_sourate: "La racine '-h-d dans la sourate al-Baqarah est centrale. En 2:27, « ceux qui rompent l'engagement ('ahd) de Dieu ». En 2:40, « respectez Mon engagement, Je respecterai votre engagement ». En 2:63, 2:83 et 2:84, les engagements pris avec les enfants d'Israel sont rappeles. La sourate montre que les engagements de Dieu sont reels et precis — aucun ne promet un chatiment temporaire.",
              axe4_coherence: "La racine '-h-d apparait 46 fois dans le Coran. Le 'ahd est un concept central de la relation entre Dieu et l'homme. En 3:76, « Dieu aime ceux qui respectent leur engagement ». En 13:20, « ceux qui respectent l'engagement de Dieu et ne rompent pas le pacte ». Le Coran affirme que Dieu tient Ses engagements — mais les gens du Livre doivent prouver qu'un tel engagement existe.",
              axe5_frequence: "Pour la mission du khalifa, l'engagement est la base de la relation avec Dieu. Le khalifa respecte les engagements reels et ne pretend pas en avoir de fictifs. Les gens du Livre qui pretendent avoir un engagement de chatiment temporaire sont mis au defi de le prouver — leur silence est un aveu."
            }
          }
        }
      },
      {
        word_key: "xlf", position: 13, sense_chosen: "succéder",
        analysis_axes: {
          concept_chosen: "Succession/Remplacement",
          sense_chosen: "succéder",
          concepts: {
            "Succession/Remplacement": {
              status: "retenu",
              senses: ["succéder", "remplacer", "successeur", "califat"],
              proof_ctx: "Le verbe yukhlifa est un inaccompli 3MS forme IV de la racine kh-l-f. Le Lane's donne « He breaks his promise, He fails to keep his word, He acts contrarily to his promise ». La forme IV (akhlafa) signifie « manquer a une promesse, ne pas tenir sa parole ». Le Lane's precise que akhlafa al-wa'da signifie ne pas tenir la promesse — aller a l'encontre de l'engagement. Le concept de succession est retenu car la rupture de promesse est l'acte de celui qui « laisse derriere » son engagement — il ne le suit pas.",
              axe1_verset: "Le verbe yukhlifa est precede de la negation categorique lan — Dieu ne manquera jamais a Son engagement. L'incise (fa-lan yukhlifa Allahu 'ahdahu) est une affirmation de la fidelite absolue de Dieu. Si les gens du Livre avaient reellement un engagement de chatiment temporaire, Dieu le tiendrait. L'incise prepare la conclusion — comme Dieu ne manque pas a Sa parole, la question est de savoir si un tel engagement existe.",
              axe2_voisins: "Le verset 79 denonait la falsification. Ce verset 80 affirme la fidelite de Dieu — en contraste avec l'infidelite des falsificateurs. Dieu ne manque jamais a Son engagement, tandis que les gens du Livre fabriquent de faux engagements. Le verset 81 donnera le verdict — les fauteurs de mal seront dans le feu eternellement.",
              axe3_sourate: "La racine kh-l-f dans la sourate al-Baqarah traite de la succession et de la rupture. En 2:30, Dieu etablit un khalifa (successeur) sur terre. En 2:80, Dieu ne manque pas a Son engagement (la yukhlifa). La sourate lie la succession (khilafa) a la fidelite — le khalifa est le successeur fidele, Dieu est le garant fidele. La racine couvre les deux faces — la succession fidele et la rupture infidele.",
              axe4_coherence: "La racine kh-l-f apparait environ 127 fois dans le Coran. La forme IV akhlafa (manquer a une promesse) est utilisee pour les humains et niee pour Dieu. En 3:9, « Dieu ne manque jamais a Sa promesse ». En 14:47, « ne crois pas que Dieu manquera a Sa promesse envers Ses messagers ». Le Coran affirme systematiquement la fidelite de Dieu a Ses engagements.",
              axe5_frequence: "Pour la mission du khalifa, la fidelite est la marque de Dieu. Le khalifa imite la fidelite divine en tenant ses propres engagements. Les gens du Livre qui pretendent un engagement de chatiment temporaire doivent savoir que Dieu tient Ses promesses — si une telle promesse existait, elle serait tenue."
            },
            "Différence/Opposition": {
              status: "nul",
              senses: ["différer", "contredire", "manquer à sa promesse"],
              proof_ctx: "Le sens de difference est un aspect de kh-l-f. Le verbe yukhlifa forme IV signifie specifiquement « manquer a une promesse » — la fidelite divine est affirmee par la negation lan. Le sens de « differer » est trop general pour ce contexte."
            }
          }
        }
      },
      {
        word_key: "alh", position: 10, sense_chosen: "Dieu",
        analysis_axes: {
          concept_chosen: "Divinité",
          sense_chosen: "Dieu",
          concepts: {
            "Divinité": {
              status: "retenu",
              senses: ["divinité", "exclamation divine", "divinité (concept)", "théologie", "oui certes", "Dieu"],
              proof_ctx: "Le mot Allahi est le nom propre de Dieu au cas genitif de la racine a-l-h. Le Lane's donne « God, the Supreme Being ». Le nom de Dieu apparait trois fois dans le verset — Allahi (position 10, genitif), Allahu (position 14, nominatif) et Allahi (position 19, genitif). La triple mention structure le verset — aupres de Dieu, Dieu ne manque pas, sur Dieu.",
              axe1_verset: "Le nom Allahi apparait trois fois dans le verset avec trois roles differents. En position 10, Dieu est la source de l'engagement pretendu — « aupres de Dieu ». En position 14, Dieu est le garant fidele — « Dieu ne manque jamais ». En position 19, Dieu est l'objet du mensonge — « sur Dieu ce que vous ne savez pas ». Les trois mentions progressent du possible au reel — engagement possible, fidelite reelle, mensonge reel.",
              axe2_voisins: "Le verset 79 invoquait le nom de Dieu pour un mensonge (« ceci vient d'aupres de Dieu »). Ce verset 80 invoque le nom de Dieu pour une pretention (un engagement divin fictif). Les deux versets denoncent l'utilisation abusive du nom de Dieu — les gens du Livre utilisent le nom de Dieu pour couvrir leurs propres inventions.",
              axe3_sourate: "Le nom Allah est le mot le plus frequent de la sourate al-Baqarah. La sourate oppose l'usage correct du nom de Dieu (invocation, adoration, soumission) a l'usage abusif (falsification, pretention, mensonge). Le verset 80 est un exemple d'usage abusif — invoquer le nom de Dieu pour une pretention sans fondement.",
              axe4_coherence: "Le nom Allah apparait plus de 2600 fois dans le Coran. La triple mention dans un meme verset est un procede d'intensification. Le nom de Dieu est le pivot du verset — tout tourne autour de la question de ce que Dieu a promis ou non. Le Coran utilise le nom de Dieu comme critere de verite — ce qui vient reellement de Dieu et ce qui Lui est attribue a tort.",
              axe5_frequence: "Pour la mission du khalifa, le nom de Dieu est la reference absolue. Le khalifa n'attribue a Dieu que ce qui vient de Dieu. Les gens du Livre qui disent sur Dieu ce qu'ils ne savent pas trahissent la relation de confiance avec Dieu."
            }
          }
        }
      },
      {
        word_key: "end", position: 9, sense_chosen: "auprès de",
        analysis_axes: {
          concept_chosen: "Proximité/Présence",
          sense_chosen: "auprès de",
          concepts: {
            "Proximité/Présence": {
              status: "retenu",
              senses: ["auprès de", "chez", "près de"],
              proof_ctx: "Le mot 'inda est un nom de la racine '-n-d. Le Lane's donne « at, near, with, in the possession of ». Le mot designe la proximite — « aupres de Dieu » ('inda Allahi) signifie dans la sphere divine, de la part de Dieu. La construction ittakhadhtum 'inda Allahi 'ahdan (avez-vous pris aupres de Dieu un engagement) questionne l'existence d'un accord entre les gens du Livre et Dieu.",
              axe1_verset: "Le mot 'inda situe l'engagement pretendu — aupres de Dieu. La question est de savoir si les gens du Livre ont un engagement « aupres de Dieu » — dans la sphere divine, venant de Dieu. La proximite de Dieu est le lieu de la verite — un engagement pris aupres de Dieu serait irrefutable. La question rhetorique implique que cet engagement n'existe pas.",
              axe2_voisins: "Le verset 79 utilisait min 'indi Allahi (d'aupres de Dieu) pour la pretention des falsificateurs — « ceci vient d'aupres de Dieu ». Ce verset 80 utilise 'inda Allahi pour la pretention d'un engagement. Les deux versets utilisent la meme construction pour des pretentions differentes mais complementaires — le faux livre et le faux engagement.",
              axe3_sourate: "La racine '-n-d dans la sourate al-Baqarah designe la proximite divine. En 2:110, « vous le retrouverez aupres de Dieu ('inda Allahi) ». En 2:186, « Je suis proche ». La sourate montre que ce qui est « aupres de Dieu » est reel et verifiable — les gens du Livre ne peuvent pas inventer un engagement qui serait « aupres de Dieu ».",
              axe4_coherence: "La racine '-n-d apparait 200 fois dans le Coran. L'expression 'inda Allahi designe ce qui est dans la connaissance et la decision divines. En 3:199, « ils ont leur recompense aupres de leur Seigneur ». La proximite de Dieu est le lieu de la verite ultime — rien de faux ne peut etre « aupres de Dieu ».",
              axe5_frequence: "Pour la mission du khalifa, la proximite de Dieu est le critere de verite. Le khalifa ne pretend pas avoir aupres de Dieu ce qu'il n'a pas. Les gens du Livre qui pretendent un engagement divin sont mis au defi de le prouver par la proximite divine elle-meme."
            }
          }
        }
      },
      {
        word_key: "elm", position: 22, sense_chosen: "savoir",
        analysis_axes: {
          concept_chosen: "Savoir/Connaissance",
          sense_chosen: "savoir",
          concepts: {
            "Savoir/Connaissance": {
              status: "retenu",
              senses: ["science", "enseignement", "connaître", "être informé", "savoir", "certitude", "savant"],
              proof_ctx: "Le verbe ta'lamuuna est un inaccompli 2MP de la racine '-l-m. Le Lane's donne « you know, you are aware ». Precede de la negation la et de la particule ma, le verbe designe l'ignorance — ce que vous ne savez pas. La construction taquuluuna 'ala Allahi ma la ta'lamuuna (vous dites sur Dieu ce que vous ne savez pas) est le verdict final du verset.",
              axe1_verset: "Le verbe ta'lamuuna cloture le verset par le verdict — ils disent sur Dieu ce qu'ils ne savent pas. Le verset revient au theme du verset 78 — le savoir absent et la supposition qui le remplace. La boucle est fermee — les illettres supposent (v.78), les lettres falsifient (v.79), et tous disent sur Dieu ce qu'ils ne savent pas (v.80). L'ignorance est la source de toutes les deviations.",
              axe2_voisins: "Le verset 78 utilisait la ya'lamuuna (ils ne savent pas) pour les illettres. Ce verset 80 utilise la ta'lamuuna (vous ne savez pas) pour tous les gens du Livre. Le passage de la troisieme personne (v.78) a la deuxieme personne (v.80) est une interpellation directe — le Coran s'adresse maintenant directement aux interlocuteurs.",
              axe3_sourate: "La racine '-l-m dans la sourate al-Baqarah est le fil conducteur de la relation avec la verite. En 2:13, « ils ne savent pas ». En 2:30, les anges reconnaissent les limites de leur savoir. En 2:78, les illettres ne savent pas. En 2:80, les gens du Livre ne savent pas ce qu'ils pretendent. La sourate montre que le savoir vient de Dieu — pretendre savoir ce que Dieu n'a pas enseigne est un mensonge.",
              axe4_coherence: "La racine '-l-m apparait plus de 850 fois dans le Coran. La formule « dire sur Dieu ce que l'on ne sait pas » est un crime grave. En 7:33, « dire sur Dieu ce que vous ne savez pas » est liste parmi les interdictions divines aux cotes du peche et de l'injustice. Le Coran place cette faute au meme niveau que les grands peches.",
              axe5_frequence: "Pour la mission du khalifa, le savoir est la condition de la parole. Le khalifa ne dit que ce qu'il sait — il ne parle pas sur Dieu sans fondement. Les gens du Livre qui disent sur Dieu ce qu'ils ne savent pas trahissent la mission de connaissance et de transmission fidelement."
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
  // umm (id=809) — communauté
  { analysis_id: 809, phrases: [
    { sense: "communauté", arabic: "كُنتُمْ خَيْرَ أُمَّةٍ أُخْرِجَتْ لِلنَّاسِ", phon: "kuntum khayra ummatin ukhrijat li-al-nasi", french: "Vous etes la meilleure communaute suscitee pour les gens." },
    { sense: "mère", arabic: "وَأَوْحَيْنَا إِلَى أُمِّ مُوسَى", phon: "wa-awhayna ila ummi Muusa", french: "Et Nous revelames a la mere de Moise." },
    { sense: "nation", arabic: "وَلِكُلِّ أُمَّةٍ رَسُولٌ", phon: "wa-li-kulli ummatin rasuulun", french: "Et chaque communaute a un messager." }
  ]},
  // elm (id=254) — savoir
  { analysis_id: 254, phrases: [
    { sense: "savoir", arabic: "وَقُلْ رَبِّ زِدْنِي عِلْمًا", phon: "wa-qul rabbi zidni 'ilman", french: "Et dis : Seigneur, augmente mon savoir." },
    { sense: "connaître", arabic: "وَاللَّهُ يَعْلَمُ وَأَنتُمْ لَا تَعْلَمُونَ", phon: "wa-Allahu ya'lamu wa-antum la ta'lamuuna", french: "Et Dieu sait et vous ne savez pas." },
    { sense: "savant", arabic: "إِنَّمَا يَخْشَى اللَّهَ مِنْ عِبَادِهِ العُلَمَاءُ", phon: "innama yakhsha Allaha min 'ibadihi al-'ulama'u", french: "Seuls les savants parmi Ses serviteurs craignent Dieu." }
  ]},
  // mny (id=608) — souhaiter
  { analysis_id: 608, phrases: [
    { sense: "souhaiter", arabic: "قُلْ إِنْ كَانَتْ لَكُمُ الدَّارُ الآخِرَةُ فَتَمَنَّوُا المَوْتَ", phon: "qul in kaanat lakumu al-daaru al-akhiratu fatamannaw al-mawta", french: "Dis : si la demeure derniere est a vous, souhaitez la mort." },
    { sense: "désirer", arabic: "وَلَا تَتَمَنَّوْا مَا فَضَّلَ اللَّهُ بِهِ بَعْضَكُمْ", phon: "wa-la tatamannaw ma faddala Allahu bihi ba'dakum", french: "Et ne desirez pas ce par quoi Dieu a favorise les uns sur les autres." },
    { sense: "espérer", arabic: "أَمَانِيُّهُمْ تِلْكَ", phon: "amaniyyuhum tilka", french: "Ce sont leurs souhaits." }
  ]},
  // znn (id=501) — supposer
  { analysis_id: 501, phrases: [
    { sense: "supposer", arabic: "إِنَّ الظَّنَّ لَا يُغْنِي مِنَ الحَقِّ شَيْئًا", phon: "inna al-zanna la yughni mina al-haqqi shay'an", french: "Certes la supposition ne remplace en rien la verite." },
    { sense: "penser", arabic: "الَّذِينَ يَظُنُّونَ أَنَّهُمْ مُلَاقُوا رَبِّهِمْ", phon: "alladhiina yazunnuuna annahum mulaaqu rabbihim", french: "Ceux qui pensent qu'ils rencontreront leur Seigneur." },
    { sense: "soupçonner", arabic: "اجْتَنِبُوا كَثِيرًا مِنَ الظَّنِّ", phon: "ijtanibuu kathiiran mina al-zanni", french: "Evitez beaucoup de soupcons." }
  ]},
  // mss (id=650) — toucher
  { analysis_id: 650, phrases: [
    { sense: "toucher", arabic: "لَنْ تَمَسَّنَا النَّارُ إِلَّا أَيَّامًا مَعْدُودَةً", phon: "lan tamassana al-naaru illa ayyaaman ma'duudatan", french: "Le feu ne nous touchera que des jours comptes." },
    { sense: "atteindre", arabic: "إِذَا مَسَّهُ الشَّرُّ جَزُوعًا", phon: "idha massahu al-sharru jazuu'an", french: "Quand le mal l'atteint, il se desespere." },
    { sense: "affliger", arabic: "وَإِذَا مَسَّهُ الخَيْرُ مَنُوعًا", phon: "wa-idha massahu al-khayru manuu'an", french: "Et quand le bien le touche, il le retient." }
  ]},
  // nwr (id=349) — lumiere/feu
  { analysis_id: 349, phrases: [
    { sense: "lumière", arabic: "اللَّهُ نُورُ السَّمَاوَاتِ وَالأَرْضِ", phon: "Allahu nuuru al-samawaati wa-al-ardi", french: "Dieu est la lumiere des cieux et de la terre." },
    { sense: "feu", arabic: "لَنْ تَمَسَّنَا النَّارُ إِلَّا أَيَّامًا مَعْدُودَةً", phon: "lan tamassana al-naaru illa ayyaaman ma'duudatan", french: "Le feu ne nous touchera que des jours comptes." },
    { sense: "guider par la lumière", arabic: "يُرِيدُونَ لِيُطْفِئُوا نُورَ اللَّهِ", phon: "yuriiduuna li-yutfi'uu nuura Allahi", french: "Ils veulent eteindre la lumiere de Dieu." }
  ]},
  // edd (id=377) — denombrement
  { analysis_id: 377, phrases: [
    { sense: "compter", arabic: "أَيَّامًا مَعْدُودَاتٍ", phon: "ayyaaman ma'duudaatin", french: "Des jours comptes." },
    { sense: "nombre", arabic: "وَأَحْصَى كُلَّ شَيْءٍ عَدَدًا", phon: "wa-ahsa kulla shay'in 'adadan", french: "Et Il a denombre toute chose en nombre." },
    { sense: "dénombrer", arabic: "وَإِنْ تَعُدُّوا نِعْمَةَ اللَّهِ لَا تُحْصُوهَا", phon: "wa-in ta'udduu ni'mata Allahi la tuhsuuha", french: "Et si vous denombrez les bienfaits de Dieu, vous ne les recenserez pas." }
  ]},
  // akhz (id=929) — prendre
  { analysis_id: 929, phrases: [
    { sense: "prendre", arabic: "خُذُوا مَا آتَيْنَاكُمْ بِقُوَّةٍ", phon: "khudhuu ma aataynaakum bi-quwwatin", french: "Prenez ce que Nous vous avons donne avec force." },
    { sense: "saisir", arabic: "وَكَذَلِكَ أَخْذُ رَبِّكَ إِذَا أَخَذَ القُرَى", phon: "wa-kadhalika akhdhu rabbika idha akhadha al-qura", french: "Ainsi est la prise de ton Seigneur quand Il saisit les cites." },
    { sense: "adopter", arabic: "أَتَّخَذْتُمْ عِنْدَ اللَّهِ عَهْدًا", phon: "attakhadhtum 'inda Allahi 'ahdan", french: "Avez-vous pris aupres de Dieu un engagement ?" }
  ]},
  // ehd (id=425) — engagement
  { analysis_id: 425, phrases: [
    { sense: "engagement", arabic: "أَوْفُوا بِعَهْدِي أُوفِ بِعَهْدِكُمْ", phon: "awfuu bi-'ahdi uufi bi-'ahdikum", french: "Respectez Mon engagement, Je respecterai votre engagement." },
    { sense: "promesse", arabic: "وَأَوْفُوا بِالعَهْدِ إِنَّ العَهْدَ كَانَ مَسْئُولًا", phon: "wa-awfuu bi-al-'ahdi inna al-'ahda kaana mas'uulan", french: "Et respectez la promesse — la promesse fera l'objet de question." },
    { sense: "pacte", arabic: "وَالَّذِينَ يَنقُضُونَ عَهْدَ اللَّهِ", phon: "wa-alladhiina yanquduuna 'ahda Allahi", french: "Et ceux qui rompent le pacte de Dieu." }
  ]},
  // xlf (id=436) — succession
  { analysis_id: 436, phrases: [
    { sense: "succéder", arabic: "إِنِّي جَاعِلٌ فِي الأَرْضِ خَلِيفَةً", phon: "inni ja'ilun fi al-ardi khaliifatan", french: "Je vais etablir sur terre un successeur." },
    { sense: "remplacer", arabic: "ثُمَّ جَعَلْنَاكُمْ خَلَائِفَ فِي الأَرْضِ", phon: "thumma ja'alnaakum khalaa'ifa fi al-ardi", french: "Puis Nous avons fait de vous des successeurs sur terre." },
    { sense: "manquer à sa promesse", arabic: "فَلَنْ يُخْلِفَ اللَّهُ عَهْدَهُ", phon: "fa-lan yukhlifa Allahu 'ahdahu", french: "Dieu ne manquera jamais a Son engagement." }
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
  return { okCount, errCount };
}

// =====================================================
// SYNC word_meanings
// =====================================================
async function syncWordMeanings() {
  console.log('\n=== SYNC word_meanings ===');

  const verseIds = [85, 86, 87];
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
  console.log('=== PIPELINE SOURATE 2 — AL-BAQARAH — VERSETS 78 A 80 ===\n');

  let totalOk = 0, totalErr = 0;

  for (let v = 78; v <= 80; v++) {
    const result = await processVerse(v);
    if (result) {
      totalOk += result.okCount;
      totalErr += result.errCount;
    }
  }

  await syncWordMeanings();
  await insertDailyPhrases();

  console.log(`\n=== PIPELINE V78-80 TERMINEE — TOTAL: ${totalOk} OK, ${totalErr} erreurs ===`);
}

main().catch(e => console.error('FATAL:', e));
