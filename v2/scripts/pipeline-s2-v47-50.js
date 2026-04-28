const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// =====================================================
// PIPELINE SOURATE 2 — AL-BAQARAH — VERSETS 47 À 50
// verse_id=54 (2:47), verse_id=55 (2:48), verse_id=56 (2:49), verse_id=57 (2:50)
// =====================================================
// CRITICAL: concept names and senses are read from DB
// Word key corrections: ax -> akhḏ (id=534), e -> eḏb (id=309)
// =====================================================

const verseData = {

  // =====================================================
  // VERSET 2:47
  // verse_id=54, analysis_id=414
  // "O enfants d'Israel, rappelez-vous Mon bienfait dont Je vous ai combles
  //  et que Je vous ai distingues par-dessus les mondes"
  // =====================================================
  47: {
    verse_id: 54,
    analysis_id: 414,
    translation_arab: "O enfants d'Israel, rappelez-vous Mon bienfait dont Je vous ai combles et que Je vous ai distingues par-dessus les mondes.",
    full_translation: "O enfants d'Israel, rappelez-vous Mon bienfait dont Je vous ai combles et [rappelez-vous] que Je vous ai preferes a tous les peuples.",
    translation_explanation: `§DEMARCHE§
Ce verset ouvre la section adressee directement aux enfants d'Israel. Le mot **bani** est un pluriel de ibn de la racine b-n-y. Le Lane's donne « son, child ». La filiation est ici collective — les enfants d'Israel designent le peuple descendant de Jacob (Israel). Le verbe **udhkuruu** est un imperatif pluriel de la racine dh-k-r. Le Lane's donne « he remembered, recollected, bore in mind ». L'imperatif est un ordre de rappel — Dieu ordonne aux enfants d'Israel de se souvenir. Le mot **ni'mati** est un nom feminin singulier de la racine n-e-m avec pronom possessif 1S. Le Lane's donne « benefit, favour, blessing ». Le bienfait est attribue a Dieu (Mon bienfait) — c'est une faveur divine specifique. Le verbe **an'amtu** est un accompli 1S forme IV de la racine n-e-m. Le Lane's donne « he conferred a benefit upon him ». La forme IV (causatif) signifie « faire en sorte que quelqu'un jouisse d'un bienfait ». Le verbe **faddaltukum** est un accompli 1S forme II de la racine f-d-l avec pronom 2MP. Le Lane's donne « he preferred, favoured, gave superiority ». La forme II (intensif) signifie « distinguer fortement, preferer ». Le mot **al-'aalamina** est un nom pluriel defini de la racine e-l-m. Le Lane's donne « the worlds, all created beings ». Les mondes designent l'ensemble des creatures — la preference divine s'exerce sur la totalite de la creation.

§JUSTIFICATION§
**enfants** — Le sens retenu est « fils ». Le mot bani designe les descendants directs par le sang. L'alternative « construire » est ecartee car le contexte parle d'une filiation genealogique, pas d'un acte de construction.

**rappelez-vous** — Le sens retenu est « se souvenir ». Le verbe udhkuruu de la racine dh-k-r signifie rappeler a la memoire. L'imperatif ordonne un effort actif de memoire. L'alternative « mentionner » est ecartee car le contexte demande un acte interieur de souvenir, pas un acte de parole.

**bienfait** — Le sens retenu est « bienfait ». Le mot ni'ma designe une faveur divine concrete. L'alternative « douceur » est ecartee car trop vague — le contexte parle d'un bienfait specifique, pas d'un etat general.

**combles** — Le sens retenu est « accorder un bienfait ». Le verbe an'amtu forme IV signifie combler de bienfaits. Pas d'alternative pertinente dans ce contexte.

**distingues** — Le sens retenu est « etre superieur ». Le verbe faddala forme II signifie preferer, donner la superiorite. L'alternative « surplus » est ecartee car le contexte parle d'une distinction entre les peuples, pas d'un reste materiel.

**mondes** — Le sens retenu est « les mondes ». Le mot al-'aalamina designe l'ensemble des creatures. L'alternative « savoir » est ecartee car ici le mot est utilise dans son sens de « mondes, peuples ».

§CRITIQUE§
**rappelez-vous vs souvenez-vous** — Les deux traductions sont equivalentes. « Rappelez-vous » ajoute la nuance de faire revenir a la memoire ce qui a ete oublie, ce qui correspond au contexte ou les enfants d'Israel sont accuses d'oublier les bienfaits.
**combles vs gratifies** — Le Lane's donne « he conferred a benefit upon him ». « Combles » est plus fort que « gratifies » — il implique une plenitude dans le don.
**distingues vs preferes** — Le Lane's donne pour faddala « he preferred, favoured ». « Distingues » preserve la nuance de separation — ils sont mis a part, separes du reste des mondes par cette faveur.`,
    segments: [
      { fr: "O enfants", pos: "nom", phon: "ya bani", arabic: "يَٰبَنِىٓ", word_key: "bny", is_particle: false, sense_retenu: "fils", position: 1 },
      { fr: "d'Israel", phon: "isra'ila", arabic: "إِسْرَٰٓءِيلَ", is_particle: true, position: 2 },
      { fr: "rappelez-vous", pos: "verbe", phon: "udhkuruu", arabic: "ٱذْكُرُوا۟", word_key: "dkr", is_particle: false, sense_retenu: "se souvenir", position: 3 },
      { fr: "Mon bienfait", pos: "nom", phon: "ni'matiya", arabic: "نِعْمَتِىَ", word_key: "nem", is_particle: false, sense_retenu: "bienfait", position: 4 },
      { fr: "dont", phon: "allati", arabic: "ٱلَّتِىٓ", is_particle: true, position: 5 },
      { fr: "Je vous ai combles", pos: "verbe", phon: "an'amtu", arabic: "أَنْعَمْتُ", word_key: "nem", is_particle: false, sense_retenu: "accorder un bienfait", position: 6 },
      { fr: "sur vous", phon: "'alaykum", arabic: "عَلَيْكُمْ", is_particle: true, position: 7 },
      { fr: "et que Je", phon: "wa-anni", arabic: "وَأَنِّى", is_particle: true, position: 8 },
      { fr: "vous ai distingues", pos: "verbe", phon: "faddaltukum", arabic: "فَضَّلْتُكُمْ", word_key: "fdl", is_particle: false, sense_retenu: "distinguer", position: 9 },
      { fr: "par-dessus", phon: "'ala", arabic: "عَلَى", is_particle: true, position: 10 },
      { fr: "les mondes", pos: "nom", phon: "al-'aalamina", arabic: "ٱلْعَٰلَمِينَ", word_key: "elm", is_particle: false, sense_retenu: "les mondes", position: 11 }
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
              proof_ctx: "Le mot bani est le pluriel de ibn, de la racine b-n-y. Le Lane's donne « son, child, descendant ». En construction idafa avec Israel (bani Isra'il), il designe les descendants collectifs de Jacob. Le fils est ce qui est construit a partir du pere — la filiation est une construction biologique. L'usage coranique de bani Isra'il est toujours collectif, designant le peuple entier comme une unite genealogique.",
              axe1_verset: "Le mot bani ouvre le verset par une apostrophe directe (ya bani Isra'il). C'est un appel qui identifie les destinataires par leur filiation — ils sont les fils d'Israel, heritiers d'une lignee specifique. L'identification par la filiation rappelle que les bienfaits divins ont ete accordes a leurs ancetres et que ces descendants portent la memoire de ces bienfaits. Le verset lie la filiation au devoir de memoire — parce que vous etes fils d'Israel, rappelez-vous.",
              axe2_voisins: "Les versets precedents (2:40-46) s'adressaient deja aux enfants d'Israel avec le meme appel (ya bani Isra'il) en 2:40. Ce verset 47 reprend le meme appel pour ouvrir une nouvelle section qui va detailler les bienfaits specifiques : la delivrance de Pharaon (v49), la traversee de la mer (v50), le pardon apres le veau d'or (v54). L'appel par la filiation introduit chaque serie de bienfaits rappeles.",
              axe3_sourate: "La sourate al-Baqarah utilise l'expression bani Isra'il comme un marqueur structurel. Chaque apostrophe ouvre un bloc thematique : 2:40 (rappel general), 2:47 (bienfaits specifiques), et les sections suivantes. La filiation est le lien qui unit toutes ces sections — c'est parce qu'ils sont fils d'Israel que ces rappels les concernent directement.",
              axe4_coherence: "La racine b-n-y apparait 184 fois dans le Coran. Le sens de fils domine largement, surtout dans les expressions bani Isra'il (26 occ.) et bani Adam (7 occ.). Le fils est toujours presente comme celui qui herite — il herite des bienfaits et des responsabilites de ses peres. En 5:12, Dieu prend un engagement avec les enfants d'Israel. En 17:2, le Livre est donne a Moise pour les enfants d'Israel.",
              axe5_frequence: "Pour la mission du khalifa, la filiation rappelle que le khalifa herite d'une mission ancestrale. Les enfants d'Israel sont khalifas sur terre avec une mission specifique — recevoir et transmettre la guidance. Leur filiation les lie a cette mission comme un fils est lie a l'heritage de son pere."
            },
            "Construction/Édification": {
              status: "nul",
              senses: ["construire", "bâtir", "édifier", "donner une maison"],
              proof_ctx: "Le sens de construction est le sens premier de b-n-y (batir une structure). Le contexte utilise bani dans son sens de filiation (fils), pas de construction. Ya bani Isra'il signifie « O fils d'Israel », pas « O bâtisseurs d'Israel »."
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
              proof_ctx: "Le mot ni'matiya est un nom feminin singulier de la racine n-e-m au cas genitif avec pronom possessif 1S. Le Lane's donne « benefit, favour, blessing, boon ». La ni'ma est un bienfait concret accorde par quelqu'un a quelqu'un d'autre. Le pronom possessif (Mon bienfait) attribue le bienfait a Dieu — c'est une faveur divine, pas un accident du sort. Le singulier avec l'article possessif peut indiquer un bienfait global qui englobe tous les bienfaits particuliers.",
              axe1_verset: "Le mot ni'matiya est l'objet du verbe udhkuruu (rappelez-vous). Dieu ordonne de se souvenir de Son bienfait. Le bienfait est ensuite precise par deux propositions : « dont Je vous ai combles » (an'amtu 'alaykum) et « que Je vous ai distingues » (faddaltukum). Le bienfait global se decompose en deux aspects : le don actif de faveurs et la distinction par-dessus les autres. Le bienfait est a la fois materiel et honorifique.",
              axe2_voisins: "Le verset 2:40 ordonnait deja aux enfants d'Israel de se souvenir du bienfait divin (udhkuruu ni'matiya). Ce verset 47 reprend exactement le meme rappel mais ajoute la distinction par-dessus les mondes. La repetition montre l'insistance divine — les enfants d'Israel oublient et doivent etre constamment rappeles. Le bienfait est le fil conducteur de toute la section.",
              axe3_sourate: "La racine n-e-m revient frequemment dans la sourate pour designer les faveurs divines. En 2:211, « combien de signes clairs Nous leur avons donnes ! celui qui substitue le bienfait de Dieu apres qu'il lui est parvenu... ». Le bienfait est toujours presente comme un don qui appelle la gratitude — l'ingratitude face au bienfait est le reproche central adresse aux enfants d'Israel.",
              axe4_coherence: "La racine n-e-m apparait 140 fois dans le Coran. Le bienfait divin (ni'ma) est un theme transversal — Dieu est celui qui comble de bienfaits (al-Mun'im). En 14:34, « si vous comptez les bienfaits de Dieu, vous ne pourrez les denombrer ». En 16:18 le meme message est repris. Le bienfait est innombrable et merite une gratitude permanente.",
              axe5_frequence: "Pour la mission du khalifa, le bienfait est la condition de la mission. Le khalifa recoit des bienfaits (capacites, guidance, autorite) et doit les reconnaitre et les utiliser correctement. Oublier le bienfait c'est oublier la source de sa mission. Les enfants d'Israel ont recu des bienfaits immenses et leur echec vient de l'oubli de ces bienfaits."
            },
            "Douceur/Aisance": {
              status: "probable",
              senses: ["tendresse", "douceur", "floraison", "souplesse", "délicatesse", "vie agréable", "confort", "aisance", "fraîcheur"],
              proof_ctx: "La douceur est le sens physique premier de n-e-m — ce qui est agreable au toucher et a la vie. Le contexte utilise ni'ma dans son sens de faveur divine specifique, pas de douceur physique. La douceur est la qualite du bienfait (le bienfait est doux), pas le bienfait lui-meme."
            }
          }
        }
      },
      {
        word_key: "fdl", position: 9, sense_chosen: "distinguer",
        analysis_axes: {
          concept_chosen: "Excellence/Faveur",
          concepts: {
            "Excellence/Faveur": {
              status: "retenu",
              senses: ["être supérieur", "grâce", "faveur", "mérite"],
              proof_ctx: "Le verbe faddaltukum est un accompli 1S forme II de la racine f-d-l avec pronom 2MP. Le Lane's donne « he preferred, gave superiority, favoured ». La forme II (intensif) renforce l'idee de preference — ce n'est pas une legere distinction mais une preference marquee. Le sujet est Dieu (Je) et l'objet les enfants d'Israel (vous). La preference s'exerce « sur les mondes » ('ala al-'aalamina) — c'est une superiorite relative a un moment donne de l'histoire.",
              axe1_verset: "Le verbe faddaltukum est la seconde precision du bienfait divin. Apres « Je vous ai combles » vient « Je vous ai distingues ». La distinction est un acte de separation — Dieu separe les enfants d'Israel du reste des mondes en les elevant au-dessus. Cette preference n'est pas meritee (aucun merite n'est mentionne) mais gratuite — c'est un pur acte de faveur divine. Le verset rappelle cette faveur pour provoquer la gratitude.",
              axe2_voisins: "Le verset 2:40 rappelait le pacte ('ahd) entre Dieu et les enfants d'Israel. Ce verset 47 rappelle la faveur et la distinction. La sequence pacte-faveur-distinction montre que les enfants d'Israel ont recu une position privilegiee. Les versets suivants (48-50) montreront les bienfaits concrets : protection au Jour du Jugement, delivrance de Pharaon, traversee de la mer.",
              axe3_sourate: "La racine f-d-l revient dans la sourate pour decrire les differences de rang. En 2:253, « ces messagers, Nous en avons distingue certains par-dessus d'autres ». La distinction est un acte divin qui cree une hierarchie — certains peuples et certains prophetes recoivent un rang superieur. La sourate montre que cette distinction implique une responsabilite accrue.",
              axe4_coherence: "La racine f-d-l apparait 104 fois dans le Coran. En 17:70, « Nous avons honore les enfants d'Adam et les avons distingues ». En 2:47, c'est les enfants d'Israel qui sont distingues. La distinction divine n'est pas arbitraire — elle est liee a une mission. Le peuple distingue recoit plus de bienfaits mais aussi plus d'epreuves et de responsabilites.",
              axe5_frequence: "Pour la mission du khalifa, la distinction est le corollaire de la mission. Le khalifa est distingue par Dieu non pour sa superiorite intrinseque mais pour sa mission. Les enfants d'Israel ont ete distingues pour porter la Torah et la guidance — leur distinction est fonctionnelle, pas ontologique. Quand ils trahissent la mission, la distinction les condamne au lieu de les sauver."
            },
            "Reste/Surplus": {
              status: "nul",
              senses: ["surplus", "reste"],
              proof_ctx: "Le surplus est le sens concret de f-d-l (ce qui reste apres avoir pris le necessaire). Le contexte utilise faddala dans son sens de « preferer, distinguer » (forme II), pas dans le sens de « rester en surplus ». Dieu distingue les enfants d'Israel, Il ne leur donne pas un reste."
            }
          }
        }
      },
      {
        word_key: "elm", position: 11, sense_chosen: "les mondes",
        analysis_axes: {
          concept_chosen: "Monde/Création",
          concepts: {
            "Monde/Création": {
              status: "retenu",
              senses: ["les mondes", "ensemble des créatures", "univers", "monde"],
              proof_ctx: "Le mot al-'aalamina est un nom pluriel defini au cas genitif de la racine e-l-m. Le Lane's donne « the worlds, the beings of the universe, all created beings ». Le pluriel masculin sain (-ina) est utilise car les mondes sont traites comme des etres doues de raison. Le Lane's lie le mot a la racine « marquer, connaitre » : le monde est le signe par lequel on connait le Createur. Ici, les mondes designent les autres peuples contemporains des enfants d'Israel.",
              axe1_verset: "Le mot al-'aalamina est le complement de faddaltukum (Je vous ai distingues par-dessus les mondes). Les mondes sont le terme de comparaison — les enfants d'Israel sont distingues par rapport a l'ensemble des autres peuples et creatures. L'utilisation du pluriel defini montre que la distinction est absolue : pas seulement par-dessus certains peuples mais par-dessus tous les mondes.",
              axe2_voisins: "Le verset 2:40 ne mentionnait pas la distinction par-dessus les mondes. Ce verset 47 ajoute cette precision qui eleve les enfants d'Israel au sommet de la hierarchie des peuples. Les versets suivants montreront en quoi cette distinction se manifestait : les miracles de Moise, la delivrance de Pharaon, les signes dans le desert. Les mondes sont les temoins de cette faveur divine.",
              axe3_sourate: "Le mot al-'aalamina apparait dans la sourate al-Baqarah des le verset 2:131 (rabb al-'aalamina, Seigneur des mondes). La sourate utilise ce mot pour rappeler que Dieu est le maitre de tous les mondes et qu'Il choisit qui Il veut parmi eux. En 2:251, David tue Goliath et Dieu accorde la royaute — la distinction divine a des consequences historiques concretes.",
              axe4_coherence: "La racine e-l-m pour 'aalam (monde) apparait frequemment dans le Coran, surtout dans la formule rabb al-'aalamina (Seigneur des mondes) repetee dans la Fatiha et ailleurs. En 3:33, Dieu a elu Adam, Nouh, la famille d'Ibrahim et la famille d'Imran par-dessus les mondes. L'election divine suit une logique de mission — chaque elu est un khalifa parmi les mondes.",
              axe5_frequence: "Pour la mission du khalifa, les mondes sont le cadre de la mission. Le khalifa est distingue parmi les mondes — il est choisi pour une fonction au sein de la creation. Les mondes ne sont pas un decor passif mais des temoins actifs de la mission du khalifa. La distinction par-dessus les mondes est un honneur et une charge."
            },
            "Savoir/Connaissance": {
              status: "retenu",
              senses: ["savoir", "certitude", "savant", "science", "enseignement", "connaître", "être informé"],
              proof_ctx: "Le savoir est un autre sens majeur de e-l-m. Le contexte utilise al-'aalamina dans son sens de « mondes, peuples » (complement de faddaltukum 'ala), pas dans le sens de « savants » ou « connaissance ». La forme du mot (pluriel masculin sain defini avec l'article al-) et sa position syntaxique confirment le sens de « mondes »."
            }
          }
        }
      }
    ]
  },

  // =====================================================
  // VERSET 2:48
  // verse_id=55, analysis_id=416
  // "Premunissez-vous contre un jour ou nulle ame ne suffira a une autre en rien,
  //  ou nulle intercession ne sera acceptee d'elle, ou nulle rancon ne sera prise d'elle,
  //  et ou ils ne seront pas secourus"
  // =====================================================
  48: {
    verse_id: 55,
    analysis_id: 416,
    translation_arab: "Premunissez-vous contre un jour ou nulle ame ne suffira a une autre en rien, ou nulle intercession ne sera acceptee d'elle, ou nulle rancon ne sera prise d'elle, et ou ils ne seront pas secourus.",
    full_translation: "Et redoutez le jour ou nulle ame ne suffira en quoi que ce soit a une autre, ou nulle intercession ne sera acceptee de sa part, ou nulle rancon ne sera prise, et ou ils ne seront point secourus.",
    translation_explanation: `§DEMARCHE§
Ce verset avertit les enfants d'Israel contre un jour redoutable — le Jour du Jugement. Le verbe **ittaquu** est un imperatif pluriel forme VIII de la racine w-q-y. Le Lane's donne « he was cautious, guarded, protected himself ». La forme VIII signifie « se premunir soi-meme, se proteger ». Le mot **yawman** est un nom accusatif indefini de la racine y-w-m. Le Lane's donne « day, time, period ». L'accusatif indefini rend le jour indetermine — un jour (non specifie mais connu de tous). Le verbe **tajzi** est un inaccompli 3FS de la racine j-z-y precede de la negation la. Le Lane's donne « it sufficed, availed, served ». La negation rend le verbe absolu — aucune ame ne suffira a une autre. Le mot **nafsun** est un nom feminin singulier indefini de la racine n-f-s. Le Lane's donne « soul, self, person ». L'indefini avec la negation (la tajzi nafsun) signifie « aucune ame, quelle qu'elle soit ». Le verbe **yuqbalu** est un inaccompli passif 3MS de la racine q-b-l. Le Lane's donne « it was accepted ». Le passif montre que l'intercession est soumise au jugement divin — elle n'est pas acceptee par Dieu. Le mot **shafa'atun** est un nom feminin singulier indefini de la racine sh-f-e. Le Lane's donne « intercession, mediation ». Le verbe **yu'khadhu** est un inaccompli passif 3MS de la racine a-kh-dh. Le Lane's donne « it was taken ». Le mot **'adlun** est un nom masculin singulier indefini de la racine e-d-l. Le Lane's donne « ransom, equivalent, justice ». Le verbe **yunsaruna** est un inaccompli passif 3MP de la racine n-s-r. Le Lane's donne « they were helped, aided, assisted ».

§JUSTIFICATION§
**premunissez-vous** — Le sens retenu est « se premunir ». Le verbe ittaquu forme VIII signifie se proteger soi-meme contre un danger. L'alternative « craindre » est ecartee car trop passif — ittaquu implique une action concrete de protection, pas simplement un sentiment de peur.

**jour** — Le sens retenu est « jour ». Le mot yawman designe une unite de temps. L'alternative « evenement marquant » est ecartee car le contexte designe un jour precis (le Jour du Jugement), pas un evenement vague.

**suffira** — Le sens retenu est « suffire ». Le verbe tajzi signifie rendre service, suffire a la place de quelqu'un. L'alternative « retribuer » est ecartee car le contexte parle d'une ame qui ne peut pas aider une autre, pas d'une retribution divine.

**ame** — Le sens retenu est « ame ». Le mot nafs designe l'etre dans sa totalite, la personne. L'alternative « souffle » est ecartee car le contexte parle de personnes qui ne peuvent pas s'aider, pas d'un souffle physique.

**acceptee** — Le sens retenu est « accepter ». Le verbe yuqbalu au passif signifie « etre agree, etre accepte ». L'alternative « se tourner vers » est ecartee car le passif indique une reception, pas un mouvement.

**rancon** — Le sens retenu est « rancon ». Le mot 'adl dans ce contexte signifie l'equivalent donne en echange pour racheter quelqu'un. L'alternative « justice » est ecartee car le contexte parle de prise de rancon, pas d'exercice de justice.

**secourus** — Le sens retenu est « secourir ». Le verbe yunsaruna au passif signifie « recevoir du secours ». Pas d'alternative pertinente dans ce contexte.

§CRITIQUE§
**premunissez-vous vs redoutez** — Les traductions courantes donnent « redoutez » pour ittaquu. Le Lane's donne « he guarded, protected himself ». « Premunissez-vous » preserve le sens actif de protection — ce n'est pas simplement avoir peur mais prendre des mesures de defense. Le taqwa est une armure contre le mal, pas un sentiment passif.
**rancon vs compensation** — Le Lane's donne « ransom, equivalent » pour 'adl dans ce contexte. « Rancon » est plus precis que « compensation » car il s'agit de racheter une ame au Jour du Jugement, comme on rachete un captif.
**suffira vs profitera** — Le Lane's donne « it availed, sufficed ». « Suffira » est plus precis — aucune ame ne sera suffisante pour en remplacer une autre. « Profitera » est trop vague.`,
    segments: [
      { fr: "premunissez-vous", pos: "verbe", phon: "ittaquu", arabic: "وَٱتَّقُوا۟", word_key: "wqy", is_particle: false, sense_retenu: "se premunir", position: 1 },
      { fr: "contre un jour", pos: "nom", phon: "yawman", arabic: "يَوْمًا", word_key: "ywm", is_particle: false, sense_retenu: "jour", position: 2 },
      { fr: "ou ne", phon: "la", arabic: "لَّا", is_particle: true, position: 3 },
      { fr: "suffira", pos: "verbe", phon: "tajzi", arabic: "تَجْزِى", word_key: "jzy", is_particle: false, sense_retenu: "suffire", position: 4 },
      { fr: "une ame", pos: "nom", phon: "nafsun", arabic: "نَفْسٌ", word_key: "nfs", is_particle: false, sense_retenu: "ame", position: 5 },
      { fr: "pour", phon: "'an", arabic: "عَن", is_particle: true, position: 6 },
      { fr: "une autre ame", pos: "nom", phon: "nafsin", arabic: "نَّفْسٍ", word_key: "nfs", is_particle: false, sense_retenu: "ame", position: 7 },
      { fr: "en rien", phon: "shay'an", arabic: "شَيْـًٔا", is_particle: true, position: 8 },
      { fr: "et ne", phon: "wa-la", arabic: "وَلَا", is_particle: true, position: 9 },
      { fr: "sera acceptee", pos: "verbe", phon: "yuqbalu", arabic: "يُقْبَلُ", word_key: "qbl", is_particle: false, sense_retenu: "accepter", position: 10 },
      { fr: "d'elle", phon: "minha", arabic: "مِنْهَا", is_particle: true, position: 11 },
      { fr: "une intercession", phon: "shafa'atun", arabic: "شَفَٰعَةٌ", is_particle: true, position: 12 },
      { fr: "et ne", phon: "wa-la", arabic: "وَلَا", is_particle: true, position: 13 },
      { fr: "sera prise", pos: "verbe", phon: "yu'khadhu", arabic: "يُؤْخَذُ", word_key: "akhḏ", is_particle: false, sense_retenu: "prendre", position: 14 },
      { fr: "d'elle", phon: "minha", arabic: "مِنْهَا", is_particle: true, position: 15 },
      { fr: "une rancon", pos: "nom", phon: "'adlun", arabic: "عَدْلٌ", word_key: "edl", is_particle: false, sense_retenu: "rancon", position: 16 },
      { fr: "et ne", phon: "wa-la", arabic: "وَلَا", is_particle: true, position: 17 },
      { fr: "eux", phon: "hum", arabic: "هُمْ", is_particle: true, position: 18 },
      { fr: "seront secourus", pos: "verbe", phon: "yunsaruna", arabic: "يُنصَرُونَ", word_key: "nsr", is_particle: false, sense_retenu: "secourir", position: 19 }
    ],
    words: [
      {
        word_key: "wqy", position: 1, sense_chosen: "se prémunir",
        analysis_axes: {
          concept_chosen: "Protection/Préservation",
          concepts: {
            "Protection/Préservation": {
              status: "retenu",
              senses: ["protéger", "préserver", "craindre", "piété", "se prémunir", "éviter"],
              proof_ctx: "Le verbe ittaquu est un imperatif pluriel forme VIII de la racine w-q-y. Le Lane's donne « he was cautious, he guarded himself, he protected himself, he feared ». La forme VIII (reflexif) signifie « se proteger soi-meme, prendre ses precautions ». Le taqwa est la disposition interieure qui se manifeste par la prudence exterieure — celui qui a le taqwa prend des mesures actives pour eviter le danger. L'objet du taqwa ici est « un jour » — ils doivent se proteger contre ce jour terrible.",
              axe1_verset: "Le verbe ittaquu ouvre le verset par un imperatif d'urgence. L'ordre est precis : premunissez-vous contre un jour (yawman). Le reste du verset decrit pourquoi ce jour est redoutable — quatre negations successives detaillent l'impossibilite de tout secours : pas de substitution entre ames, pas d'intercession acceptee, pas de rancon prise, pas de secours. Le taqwa est la seule protection avant ce jour — apres, plus rien ne protege.",
              axe2_voisins: "Le verset 47 rappelait les bienfaits et la distinction divine. Ce verset 48 avertit du Jour du Jugement. La sequence est bienfait-avertissement : Dieu rappelle ce qu'Il a donne puis avertit de ce qui attend ceux qui oublient. Le passage du rappel du passe a l'avertissement du futur cree une tension pedagogique — le bienfait appelle la gratitude et la crainte.",
              axe3_sourate: "La racine w-q-y est fondamentale dans la sourate al-Baqarah. Le mot muttaqin (ceux qui se premunissent) apparait des le verset 2:2. La sourate decrit le Coran comme « guidance pour les muttaqin ». Le taqwa est la disposition spirituelle qui traverse toute la sourate — c'est la qualite premiere requise pour recevoir la guidance.",
              axe4_coherence: "La racine w-q-y apparait 258 fois dans le Coran. Le taqwa est le concept moral le plus frequemment mentionne. En 3:102, « craignez Dieu de la crainte qui Lui est due ». En 49:13, « le plus noble d'entre vous aupres de Dieu est le plus pieux (atqakum) ». Le taqwa est le critere de valeur supreme dans l'ethique coranique.",
              axe5_frequence: "Pour la mission du khalifa, le taqwa est la condition de reussite. Le khalifa qui se premunit contre le mal accomplit sa mission. Le khalifa qui neglige le taqwa echoue. Les enfants d'Israel sont avertis parce que leur distinction (verset 47) ne les protegera pas au Jour du Jugement si le taqwa est absent."
            }
          }
        }
      },
      {
        word_key: "ywm", position: 2, sense_chosen: "jour",
        analysis_axes: {
          concept_chosen: "Temps/Période",
          concepts: {
            "Temps/Période": {
              status: "retenu",
              senses: ["jour", "journée", "temps", "période"],
              proof_ctx: "Le mot yawman est un nom accusatif indefini masculin de la racine y-w-m. Le Lane's donne « day, time, period ». L'accusatif indefini (yawman, pas al-yawma) designe un jour non encore identifie — un jour particulier que tous connaissent mais qui n'est pas nomme explicitement ici. Le Jour du Jugement est designe sans article, ce qui renforce son caractere redoutable et indefini.",
              axe1_verset: "Le mot yawman est l'objet du verbe ittaquu — c'est ce contre quoi il faut se premunir. Le verset decrit ce jour par quatre propositions negatives : nulle ame ne suffira, nulle intercession, nulle rancon, nul secours. Le jour est defini par ce qui ne s'y produit pas — c'est un jour de solitude absolue ou chaque ame est seule face a ses actes. Le jour est l'horizon d'avertissement qui motive le taqwa.",
              axe2_voisins: "Le verset 47 parlait du passe (les bienfaits accordes). Ce verset 48 projette dans le futur (le Jour du Jugement). La sequence passe-futur est pedagogique — rappelez-vous ce qui a ete donne, puis craignez ce qui vient. Le verset 49 retournera au passe (la delivrance de Pharaon). L'alternance entre passe et futur maintient les enfants d'Israel entre gratitude et vigilance.",
              axe3_sourate: "Le mot yawm apparait tres frequemment dans la sourate al-Baqarah. En 2:8, certains pretendent croire « en Dieu et au Jour Dernier ». En 2:62, ceux qui croient, juifs, chretiens et sabeens qui croient « en Dieu et au Jour Dernier » sont sauves. Le Jour est le point de convergence de toute la sourate — chaque acte est juge a la lumiere de ce Jour.",
              axe4_coherence: "La racine y-w-m apparait 405 fois dans le Coran. C'est l'un des mots les plus frequents. Le Jour du Jugement est designe par de nombreuses appellations : yawm al-qiyama (Jour de la Resurrection), yawm al-din (Jour de la Retribution), yawm al-hisab (Jour du Compte). Chaque nom eclaire un aspect du Jour. En 82:19, « le jour ou nulle ame ne pourra rien pour une autre ame » — formule presque identique a 2:48.",
              axe5_frequence: "Pour la mission du khalifa, le Jour est l'horizon de reddition des comptes. Le khalifa sait que sa mission sera evaluee ce Jour-la. Les enfants d'Israel doivent se rappeler que leur distinction ne les exempte pas du Jugement — chaque ame sera jugee individuellement, sans intercession ni rancon."
            },
            "Événement/Moment marquant": {
              status: "probable",
              senses: ["bataille", "jour de combat", "jour marquant", "événement"],
              proof_ctx: "Le sens d'evenement marquant est un sens secondaire de y-w-m. Le contexte precise un jour ou nulle ame ne suffira a une autre — c'est clairement le Jour du Jugement, pas un jour de bataille humaine. Le contexte eschatologique est confirme par les quatre negations qui decrivent l'impossibilite de tout secours."
            }
          }
        }
      },
      {
        word_key: "jzy", position: 4, sense_chosen: "suffire",
        analysis_axes: {
          concept_chosen: "Rétribution/Justice",
          concepts: {
            "Rétribution/Justice": {
              status: "retenu",
              senses: ["rétribuer", "récompenser", "punir"],
              proof_ctx: "Le verbe tajzi est un inaccompli 3FS de la racine j-z-y precede de la negation la. Le Lane's donne « it availed, sufficed, served in place of ». Le sens ici est « suffire, etre utile a la place de » — aucune ame ne sera utile a une autre en quoi que ce soit. La racine j-z-y porte l'idee de rendre un equivalent, de compenser — ici l'equivalent est impossible, la compensation est nulle.",
              axe1_verset: "Le verbe tajzi est la premiere des quatre negations qui decrivent le Jour. La structure est : pas de substitution (tajzi), pas d'intercession (yuqbalu), pas de rancon (yu'khadhu), pas de secours (yunsaruna). Chaque negation ferme une porte de salut potentiel. La premiere porte fermee est la solidarite entre ames — ce jour-la, chacun est seul.",
              axe2_voisins: "Le verset 47 rappelait la distinction collective des enfants d'Israel. Ce verset 48 affirme que cette distinction collective ne fonctionnera pas au Jour du Jugement — chaque ame sera jugee individuellement. La solidarite tribale qui protegeait les enfants d'Israel dans ce monde n'aura aucune valeur dans l'autre.",
              axe3_sourate: "La racine j-z-y apparait dans la sourate pour exprimer la retribution divine. En 2:123, un verset presque identique reprend les memes negations. En 2:281, « craignez le jour ou vous serez ramenes a Dieu, puis chaque ame sera retribuee selon ce qu'elle a acquis ». La retribution individuelle est un theme central de la sourate.",
              axe4_coherence: "La racine j-z-y apparait 118 fois dans le Coran. Le sens de « suffire a la place de » (jaza 'an) est specifique a quelques versets eschatologiques (2:48, 2:123, 31:33). Dans la majorite des occurrences, la racine porte le sens de retribuer (jaza bi). Les deux sens sont lies — celui qui retribue donne l'equivalent de l'acte, et celui qui suffit remplace un autre. Au Jour du Jugement, aucun remplacement n'est possible.",
              axe5_frequence: "Pour la mission du khalifa, l'impossibilite de substitution rappelle la responsabilite individuelle. Le khalifa ne peut pas deleguer sa responsabilite a un autre — chaque ame rend compte pour elle-meme. La mission est personnelle et non transferable."
            },
            "Suffisance": {
              status: "nul",
              senses: ["suffire"],
              proof_ctx: "Le sens de suffisance est un sous-sens de la retribution. Ici le verbe tajzi est utilise dans ce sens precis (suffire a la place de), mais le concept englobant reste la retribution/justice. La suffisance est l'aspect ponctuel du sens, la retribution est le cadre global."
            }
          }
        }
      },
      {
        word_key: "nfs", position: 5, sense_chosen: "âme",
        analysis_axes: {
          concept_chosen: "Âme/Être",
          concepts: {
            "Âme/Être": {
              status: "retenu",
              senses: ["âme", "personne", "esprit", "désir", "soi-même"],
              proof_ctx: "Le mot nafsun est un nom feminin singulier indefini au cas nominatif de la racine n-f-s. Le Lane's donne « soul, spirit, mind, self, person ». Le nafs designe l'etre dans sa totalite — la personne en tant qu'entite individuelle responsable. L'indefini avec la negation (la tajzi nafsun) signifie « aucune ame, quelle qu'elle soit, sans exception ». Le mot apparait deux fois : nafsun (sujet) et nafsin (complement) — une ame pour une autre ame.",
              axe1_verset: "Le mot nafs est le sujet et l'objet de la premiere negation. L'ame qui tente d'aider (nafsun, sujet) ne pourra rien pour l'ame en danger (nafsin, complement). La repetition du mot nafs dans les deux positions grammaticales cree un parallelisme — les deux ames sont identiques dans leur impuissance. Le verset affirme l'isolement radical de chaque ame au Jour du Jugement.",
              axe2_voisins: "Le verset 47 s'adressait a un collectif (enfants d'Israel). Ce verset 48 passe a l'individuel (nulle ame). Le passage du collectif a l'individuel est significatif — la solidarite du peuple ne fonctionnera pas au Jour du Jugement. Chaque Israelite sera seul face a ses actes, quelle que soit l'appartenance tribale.",
              axe3_sourate: "Le mot nafs est l'un des plus frequents de la sourate al-Baqarah. En 2:233, « nulle ame ne sera chargee au-dela de sa capacite ». En 2:281, « chaque ame sera retribuee selon ce qu'elle a acquis ». La sourate insiste sur la responsabilite individuelle de l'ame — chaque ame est comptable de ses actes.",
              axe4_coherence: "La racine n-f-s apparait 298 fois dans le Coran. L'ame (nafs) est le concept central de l'anthropologie coranique. En 91:7, « par l'ame et Celui qui l'a equilibree ». En 12:53, « l'ame ordonne le mal ». L'ame a des tendances contradictoires et c'est elle qui sera jugee. Le Coran distingue trois niveaux d'ame : l'ame incitatrice au mal, l'ame blameuse, l'ame apaisee.",
              axe5_frequence: "Pour la mission du khalifa, l'ame est le lieu de la mission. Le khalifa doit d'abord governar son ame avant de gerer la terre. L'ame qui se premunit (taqwa) reussit ; l'ame qui se laisse aller echoue. L'isolement de l'ame au Jour du Jugement rappelle que la mission est d'abord un combat interieur."
            }
          }
        }
      },
      {
        word_key: "qbl", position: 10, sense_chosen: "accepter",
        analysis_axes: {
          concept_chosen: "Réception/Accueil",
          concepts: {
            "Réception/Accueil": {
              status: "retenu",
              senses: ["recevoir", "accepter", "agréer"],
              proof_ctx: "Le verbe yuqbalu est un inaccompli passif 3MS de la racine q-b-l. Le Lane's donne « it was accepted, received, approved ». Le passif indique que l'intercession est soumise a un jugement — elle est presentee mais n'est pas acceptee. Le sens de « accepter » est directement lie a « recevoir favorablement ». L'acceptation implique un accueil positif qui est ici nie — Dieu n'agrée pas l'intercession ce jour-la.",
              axe1_verset: "Le verbe yuqbalu est la deuxieme negation du verset. Apres « nulle ame ne suffira », voici « nulle intercession ne sera acceptee ». L'intercession (shafa'a) est le fait qu'un tiers intercede pour quelqu'un aupres du juge. Le verset affirme que cette intercession ne sera pas receue favorablement — le juge (Dieu) refuse toute mediation. La porte de l'intercession est fermee.",
              axe2_voisins: "Les versets precedents rappelaient les bienfaits de Dieu envers les enfants d'Israel. Ce verset ferme la porte de l'intercession au Jour du Jugement. Les enfants d'Israel qui comptent sur l'intercession de leurs prophetes ou de leurs ancetres sont avertis — cette intercession ne sera pas acceptee si les actes ne sont pas la.",
              axe3_sourate: "La racine q-b-l dans la sourate al-Baqarah porte surtout le sens de direction (qibla) et d'acceptation. En 2:127, Abraham construit la Kaaba et dit « accepte de nous (taqabbal minna) ». L'acceptation divine est conditionnelle — Dieu accepte les bonnes actions mais refuse l'intercession au Jour du Jugement pour les impies.",
              axe4_coherence: "La racine q-b-l apparait 294 fois dans le Coran. Le sens d'acceptation est present dans les contextes de priere et d'offrande. En 5:27, Dieu accepte de l'un des deux fils d'Adam et pas de l'autre. L'acceptation divine est toujours selective — Dieu accepte qui Il veut et refuse qui Il veut. Au Jour du Jugement, cette selection est definitive.",
              axe5_frequence: "Pour la mission du khalifa, l'acceptation est le critere de reussite. Le khalifa dont les actes sont acceptes par Dieu a reussi sa mission. Celui dont les actes sont refuses a echoue. L'intercession ne peut pas compenser les actes manquants — le khalifa doit agir lui-meme."
            },
            "Antériorité/Passé": {
              status: "nul",
              senses: ["avant", "auparavant", "ancien", "devant"],
              proof_ctx: "L'anteriorite est un sens de q-b-l (qabl = avant). Le contexte utilise le verbe yuqbalu (etre accepte) au passif, pas le nom qabl (avant). Le sens temporel est ecarte par la forme verbale."
            }
          }
        }
      },
      {
        word_key: "edl", position: 16, sense_chosen: "rançon",
        analysis_axes: {
          concept_chosen: "Justice/Équité",
          concepts: {
            "Justice/Équité": {
              status: "retenu",
              senses: ["être juste", "justice", "équité", "rançon", "équivalent"],
              proof_ctx: "Le mot 'adlun est un nom masculin singulier indefini au cas nominatif de la racine e-d-l. Le Lane's donne « ransom, compensation, equivalent ; justice, equity ». Dans ce contexte precis, 'adl signifie « rancon, equivalent donne en echange pour racheter quelqu'un ». Le Lane's precise que 'adl dans le contexte du Jugement est « what is given as a ransom ». L'indefini avec la negation (la yu'khadhu minha 'adlun) signifie « nulle rancon ne sera prise d'elle ».",
              axe1_verset: "Le mot 'adlun est la troisieme porte fermee. Apres la substitution et l'intercession, voici la rancon. La rancon est un paiement donne pour liberer quelqu'un — au Jour du Jugement, aucun paiement ne pourra racheter l'ame condamnee. Meme si l'on offrait la terre entiere en or, la rancon ne serait pas acceptee. Les quatre negations forment un systeme clos — aucune voie de salut exterieure n'existe.",
              axe2_voisins: "Le verset 47 rappelait les bienfaits materiels et honorifiques donnes aux enfants d'Israel. Ce verset 48 affirme que ces bienfaits ne pourront pas servir de rancon au Jour du Jugement. La richesse et le statut qui distinguaient les enfants d'Israel dans ce monde seront sans valeur dans l'autre.",
              axe3_sourate: "La racine e-d-l dans la sourate al-Baqarah porte les deux sens de justice et d'equivalence. En 2:282, les temoins doivent etre justes ('adl). En 2:48, 'adl est la rancon. Les deux sens sont lies : la rancon est l'equivalent juste qui rachete, et la justice est l'equilibre des comptes. Au Jour du Jugement, aucun equilibre materiel ne compense le desequilibre moral.",
              axe4_coherence: "La racine e-d-l apparait 28 fois dans le Coran. En 5:95, la rancon (jaza') pour le gibier sacre est un equivalent ('adl). En 6:70, « si elle offrait toute espece de rancon ('adl), elle ne serait pas acceptee ». Le Coran est coherent — au Jour du Jugement, nulle rancon ne rachete. La rancon fonctionne dans ce monde (droit penal) mais pas dans l'autre.",
              axe5_frequence: "Pour la mission du khalifa, l'impossibilite de la rancon rappelle que les comptes se reglent par les actes, pas par l'argent. Le khalifa ne peut pas acheter son salut — il doit le meriter par ses actes. La distinction des enfants d'Israel ne les rachete pas au Jour du Jugement."
            }
          }
        }
      },
      {
        word_key: "nsr", position: 19, sense_chosen: "secourir",
        analysis_axes: {
          concept_chosen: "Secours/Victoire",
          concepts: {
            "Secours/Victoire": {
              status: "retenu",
              senses: ["aider", "victoire", "défendre", "secourir"],
              proof_ctx: "Le verbe yunsaruna est un inaccompli passif 3MP de la racine n-s-r. Le Lane's donne « they were helped, aided, assisted, succoured ». Le passif indique que le secours vient de l'exterieur — ils ne seront pas secourus par quiconque. Le pluriel (3MP) s'applique aux enfants d'Israel collectivement. Le secours est la quatrieme et derniere porte fermee — apres la substitution, l'intercession et la rancon, meme le secours direct est impossible.",
              axe1_verset: "Le verbe yunsaruna cloture la serie des quatre negations. La derniere porte fermee est la plus globale — ils ne seront pas secourus, point final. Le secours est l'aide la plus fondamentale, sans condition ni mecanisme — simplement etre aide. Meme cette aide basique est niee. La conclusion est que rien ni personne ne peut aider au Jour du Jugement sauf les actes de la personne elle-meme.",
              axe2_voisins: "Le verset 47 rappelait que Dieu a distingue les enfants d'Israel. Ce verset 48 se termine par l'affirmation qu'ils ne seront pas secourus. La distinction passee ne garantit pas le secours futur. Le secours de Dieu dans l'histoire (delivrance de Pharaon, versets 49-50) ne se reproduira pas automatiquement au Jour du Jugement.",
              axe3_sourate: "La racine n-s-r est importante dans la sourate al-Baqarah. En 2:214, « quand viendra le secours de Dieu ? Le secours de Dieu est proche ». En 2:250, « secours-nous contre le peuple injuste ». Le secours divin est promis aux croyants dans ce monde mais refuse aux impies au Jour du Jugement.",
              axe4_coherence: "La racine n-s-r apparait 158 fois dans le Coran. Le secours divin (nasr) est un theme central — Dieu secourt qui Il veut. En 110:1, « quand vient le secours de Dieu et la victoire ». Mais en 2:48, le secours est nie pour le Jour du Jugement. La coherence est que le secours divin dans ce monde est conditionne par la foi et les actes — au Jour du Jugement, les comptes sont rendus.",
              axe5_frequence: "Pour la mission du khalifa, le secours est lie a la fidelite. Le khalifa fidele recoit le secours divin ; celui qui trahit est abandonne. Les enfants d'Israel qui ne se premunissent pas ne seront pas secourus — le secours n'est pas automatique."
            },
            "Alliance/Soutien": {
              status: "nul",
              senses: ["partisan"],
              proof_ctx: "Le sens d'alliance est secondaire de n-s-r. Le contexte utilise le passif yunsaruna (ils ne seront pas secourus), pas le nom nasir (partisan, allie). Le verset parle du secours en general, pas d'une alliance specifique."
            }
          }
        }
      }
    ]
  },

  // =====================================================
  // VERSET 2:49
  // verse_id=56, analysis_id=417
  // "Nous vous avons sauves des gens de Pharaon qui vous infligeaient
  //  le pire supplice, egorgeaient vos fils et laissaient vivre vos femmes.
  //  En cela il y avait une epreuve immense de votre Seigneur."
  // =====================================================
  49: {
    verse_id: 56,
    analysis_id: 417,
    translation_arab: "Nous vous avons sauves des gens de Pharaon qui vous infligeaient le pire supplice, egorgeaient vos fils et laissaient vivre vos femmes. En cela il y avait une epreuve immense de votre Seigneur.",
    full_translation: "Et [rappelez-vous] lorsque Nous vous sauvames des gens de Pharaon qui vous infligeaient le pire chatiment, egorgeant vos fils et epargnant vos femmes. C'etait la une grande epreuve de la part de votre Seigneur.",
    translation_explanation: `§DEMARCHE§
Ce verset rappelle la delivrance des enfants d'Israel de l'oppression de Pharaon. Le verbe **najjaynakum** est un accompli 1PP forme II de la racine n-j-w avec pronom 2MP. Le Lane's donne « he saved, delivered, rescued ». La forme II (intensif) renforce l'idee de delivrance — ce n'est pas un simple sauvetage mais une delivrance complete et definitive. Le mot **aali** est un nom de la racine a-w-l. Le Lane's donne « family, people, followers, kinsfolk ». Les gens de Pharaon designent sa cour, ses soldats et ses partisans. Le verbe **yasumunakum** est un inaccompli 3MP de la racine s-w-m avec pronom 2MP. Le Lane's donne « he imposed upon him, he afflicted him ». La racine porte l'idee d'infliger un traitement continu. Le mot **su'a** est un nom masculin de la racine s-w-a'. Le Lane's donne « evil, bad, worst ». Le mot **al-'adhabi** est un nom masculin defini de la racine e-dh-b. Le Lane's donne « punishment, torment, chastisement ». Le verbe **yudhabbihuuna** est un inaccompli 3MP forme II de la racine dh-b-h. Le Lane's donne « he slaughtered, killed ». La forme II (intensif) implique un egorgement methodique et repete. Le mot **abnaa'akum** est un pluriel de ibn de la racine b-n-y avec pronom 2MP. Le verbe **yastahyuuna** est un inaccompli 3MP forme X de la racine h-y-y. Le Lane's donne « he spared alive, he let live ». La forme X signifie « demander la vie de, laisser en vie ». Le mot **nisaa'akum** est un pluriel de femme avec pronom 2MP. Le mot **balaa'un** est un nom masculin indefini de la racine b-l-w. Le Lane's donne « trial, test, affliction ». Le mot **rabbikum** est le nom rabb de la racine r-b-b avec pronom 2MP. Le Lane's donne « lord, master, sustainer ». Le mot **'azimun** est un adjectif de la racine e-z-m. Le Lane's donne « great, immense, mighty ».

§JUSTIFICATION§
**sauves** — Le sens retenu est « sauver ». Le verbe najja forme II signifie delivrer d'un danger. Pas d'alternative pertinente — le contexte est clairement un sauvetage.

**gens** — Le sens retenu est « famille/appartenance ». Le mot aal designe les proches, l'entourage. L'alternative « retour » est ecartee car le contexte parle des gens de Pharaon, pas d'un retour.

**infligeaient** — Le sens retenu est « livrer au mal ». Le verbe yasumunakum signifie imposer un traitement penible de maniere continue. L'alternative « marquer » est ecartee car le contexte parle d'une affliction, pas d'une marque.

**pire** — Le sens retenu est « mal ». Le mot su'a signifie le pire, le plus mauvais. Pas d'alternative pertinente.

**supplice** — Le sens retenu est « supplice ». Le mot al-'adhab designe le chatiment, la punition. L'alternative « doux » est ecartee car hors contexte.

**egorgeaient** — Le sens retenu est le verbe yudhabbihuuna de la racine dh-b-h qui signifie egorger. Pas de mot alternatif.

**fils** — Le sens retenu est « fils ». Le mot abnaa' est le pluriel de ibn. Meme racine que bani Isra'il mais au cas accusatif.

**laissaient vivre** — Le sens retenu est « laisser en vie ». Le verbe yastahyuuna forme X signifie demander la vie de, epargner. L'alternative « avoir la pudeur » est ecartee car le contexte parle de laisser en vie, pas de pudeur.

**femmes** — Le mot nisaa' designe les femmes. C'est un nom collectif.

**epreuve** — Le sens retenu est « epreuve ». Le mot balaa' signifie test, epreuve. L'alternative « usure » est ecartee car le contexte parle d'un test divin, pas d'une degradation.

**Seigneur** — Le sens retenu est « seigneur ». Le mot rabb designe celui qui possede, gouverne et eleve. Pas d'alternative pertinente.

**immense** — Le sens retenu est « immense ». Le mot 'azim designe ce qui est grand en taille ou en importance. Pas d'alternative pertinente.

§CRITIQUE§
**sauves vs delivres** — Le Lane's donne pour najja « he saved, delivered ». Les deux traductions sont equivalentes. « Sauves » est plus direct et concret.
**infligeaient vs faisaient subir** — Le Lane's donne pour yasumunakum « they were imposing upon you ». « Infligeaient » est plus precis — il implique un acte delibere de faire souffrir.
**supplice vs chatiment** — Le Lane's donne « punishment, torment ». « Supplice » est plus fort que « chatiment » car il implique une souffrance prolongee et extreme, ce qui correspond au contexte (egorgement des fils).
**laissaient vivre vs epargnaient** — Le Lane's donne pour yastahyuuna « they let live ». « Laissaient vivre » est plus litteral. « Epargnaient » implique un acte de misericorde qui n'existe pas chez Pharaon — les femmes etaient gardees en vie pour l'esclavage, pas par bonte.`,
    segments: [
      { fr: "et lorsque", phon: "wa-idh", arabic: "وَإِذْ", is_particle: true, position: 1 },
      { fr: "Nous vous avons sauves", pos: "verbe", phon: "najjaynakum", arabic: "نَجَّيْنَٰكُم", word_key: "njw", is_particle: false, sense_retenu: "sauver", position: 2 },
      { fr: "des", phon: "min", arabic: "مِّنْ", is_particle: true, position: 3 },
      { fr: "gens de", pos: "nom", phon: "aali", arabic: "ءَالِ", word_key: "awl", is_particle: false, sense_retenu: "famille", position: 4 },
      { fr: "Pharaon", phon: "fir'awna", arabic: "فِرْعَوْنَ", is_particle: true, position: 5 },
      { fr: "qui vous infligeaient", pos: "verbe", phon: "yasumunakum", arabic: "يَسُومُونَكُمْ", word_key: "swm", is_particle: false, sense_retenu: "livrer au mal", position: 6 },
      { fr: "le pire", pos: "nom", phon: "su'a", arabic: "سُوٓءَ", word_key: "swa", is_particle: false, sense_retenu: "mal", position: 7 },
      { fr: "supplice", pos: "nom", phon: "al-'adhabi", arabic: "ٱلْعَذَابِ", word_key: "eḏb", is_particle: false, sense_retenu: "supplice", position: 8 },
      { fr: "egorgeaient", pos: "verbe", phon: "yudhabbihuuna", arabic: "يُذَبِّحُونَ", word_key: "dbh", is_particle: false, sense_retenu: "egorger", position: 9 },
      { fr: "vos fils", pos: "nom", phon: "abnaa'akum", arabic: "أَبْنَآءَكُمْ", word_key: "bny", is_particle: false, sense_retenu: "fils", position: 10 },
      { fr: "et laissaient vivre", pos: "verbe", phon: "yastahyuuna", arabic: "وَيَسْتَحْيُونَ", word_key: "hyy", is_particle: false, sense_retenu: "laisser vivre", position: 11 },
      { fr: "vos femmes", pos: "nom", phon: "nisaa'akum", arabic: "نِسَآءَكُمْ", word_key: "nsw", is_particle: false, sense_retenu: "femmes", position: 12 },
      { fr: "et en", phon: "wa-fi", arabic: "وَفِى", is_particle: true, position: 13 },
      { fr: "cela", phon: "dhalikum", arabic: "ذَٰلِكُم", is_particle: true, position: 14 },
      { fr: "une epreuve", pos: "nom", phon: "balaa'un", arabic: "بَلَآءٌ", word_key: "blw", is_particle: false, sense_retenu: "epreuve", position: 15 },
      { fr: "de", phon: "min", arabic: "مِّن", is_particle: true, position: 16 },
      { fr: "votre Seigneur", pos: "nom", phon: "rabbikum", arabic: "رَّبِّكُمْ", word_key: "rbb", is_particle: false, sense_retenu: "seigneur", position: 17 },
      { fr: "immense", pos: "adjectif", phon: "'azimun", arabic: "عَظِيمٌ", word_key: "ezm", is_particle: false, sense_retenu: "immense", position: 18 }
    ],
    words: [
      {
        word_key: "njw", position: 2, sense_chosen: "sauver",
        analysis_axes: {
          concept_chosen: "Salut/Délivrance",
          concepts: {
            "Salut/Délivrance": {
              status: "retenu",
              senses: ["sauver", "délivrer", "échapper", "rescapé"],
              proof_ctx: "Le verbe najjaynakum est un accompli 1PP forme II de la racine n-j-w avec pronom 2MP. Le Lane's donne « he saved, delivered, rescued from destruction or perdition ». La forme II (intensif-causatif) renforce l'idee de delivrance — Dieu a activement fait echapper les enfants d'Israel au danger. Le pronom 1PP (Nous) est le pluriel de majeste divin. La delivrance est un acte divin direct et definitif.",
              axe1_verset: "Le verbe najjaynakum ouvre la partie narrative du verset. Dieu rappelle l'acte salvateur fondateur : la delivrance des gens de Pharaon. Le reste du verset decrit en quoi consistait le danger (supplice, egorgement des fils, asservissement des femmes). La delivrance est le bienfait concret que les enfants d'Israel doivent se rappeler. Sans cette delivrance, le peuple d'Israel n'existerait pas.",
              axe2_voisins: "Le verset 47 rappelait les bienfaits en general. Le verset 48 avertissait du Jour du Jugement. Ce verset 49 donne le premier bienfait concret : la delivrance de Pharaon. La sequence rappel-avertissement-preuve est pedagogique — Dieu enumere les preuves de Sa faveur pour montrer que l'ingratitude est inexcusable.",
              axe3_sourate: "La racine n-j-w apparait dans la sourate al-Baqarah dans ce contexte de delivrance des enfants d'Israel. La delivrance est un theme structurant — Dieu delivre ceux qui Le suivent et abandonne ceux qui Le rejettent. La sourate oppose la delivrance des croyants et le chatiment des rebelles.",
              axe4_coherence: "La racine n-j-w apparait 84 fois dans le Coran. La delivrance divine est un motif recurrent dans les recits prophetiques. En 7:141, « Nous vous avons delivres des gens de Pharaon ». En 10:73, Nouh est sauve du deluge. En 21:71, Ibrahim est sauve du feu. Chaque prophete est sauve par Dieu — la delivrance est le signe de l'election divine.",
              axe5_frequence: "Pour la mission du khalifa, la delivrance est le signe que Dieu soutient Sa mission. Le khalifa qui est fidele est delivre des dangers. Les enfants d'Israel ont ete delivres parce qu'ils etaient choisis — mais la delivrance passee ne garantit pas la protection future si la fidelite est absente."
            },
            "Secret/Aparté": {
              status: "nul",
              senses: ["confidence", "conversation secrète"],
              proof_ctx: "Le secret (najwa) est un sens de la racine n-j-w. Le contexte utilise najja (sauver, forme II), pas najwa (conversation secrete). Le sens de delivrance est clairement indique par le contexte (delivrance de Pharaon)."
            }
          }
        }
      },
      {
        word_key: "awl", position: 4, sense_chosen: "famille",
        analysis_axes: {
          concept_chosen: "Famille/Appartenance",
          concepts: {
            "Famille/Appartenance": {
              status: "retenu",
              senses: ["famille", "parenté"],
              proof_ctx: "Le mot aali est un nom de la racine a-w-l au cas genitif en construction idafa avec Fir'awna. Le Lane's donne « family, people, followers, household ». Les aal de Pharaon sont sa famille, sa cour, ses partisans — l'ensemble de ceux qui lui sont lies par le sang ou par l'obeissance. Le mot est plus large que « famille » au sens strict : il inclut tous les proches et les soutiens.",
              axe1_verset: "Le mot aali Fir'awna (gens de Pharaon) designe les oppresseurs dont les enfants d'Israel ont ete delivres. Le verset ne dit pas « Pharaon » seul mais « les gens de Pharaon » — l'oppression etait collective, exercee par tout le systeme pharaonique. Le mot aali elargit la responsabilite de l'oppression a toute la structure de pouvoir, pas au seul individu.",
              axe2_voisins: "Le verset 48 parlait du Jour du Jugement ou nulle ame ne suffira a une autre. Ce verset 49 montre le contraste — dans ce monde, les gens de Pharaon agissaient collectivement pour opprimer. Mais au Jour du Jugement, cette solidarite dans le mal sera brisee. L'opposition entre l'action collective des gens de Pharaon et l'isolement individuel du Jugement est pedagogique.",
              axe3_sourate: "L'expression aali Fir'awna apparait dans la sourate al-Baqarah uniquement dans ce passage (2:49-50). La sourate utilise Pharaon et ses gens comme archetype de l'oppression. Le Pharaon represente le pouvoir tyrannique qui refuse la guidance divine et persecute les croyants.",
              axe4_coherence: "La racine a-w-l pour aal apparait dans plusieurs recits prophetiques. En 3:11, « comme les gens de Pharaon et ceux qui les ont precedes ». En 8:52, « comme les gens de Pharaon ». En 40:45-46, les gens de Pharaon sont enveloppes par le chatiment. Les aal de Pharaon sont systematiquement presentes comme un ensemble solidaire dans le mal.",
              axe5_frequence: "Pour la mission du khalifa, les gens de Pharaon representent l'anti-mission. Le pouvoir de Pharaon est l'inverse du khalifa — il opprime au lieu de gerer, il detruit au lieu de construire. La delivrance des enfants d'Israel des gens de Pharaon est la delivrance de la tyrannie pour permettre la mission."
            },
            "Retour/Origine": {
              status: "nul",
              senses: ["retourner", "faire retourner", "aboutissement", "interpréter"],
              proof_ctx: "Le retour est un sens de a-w-l (ta'wil = interpretation, retour au sens premier). Le contexte utilise aal dans son sens de « famille, gens de » — en construction idafa avec Fir'awna, le sens est clairement « les gens de Pharaon »."
            }
          }
        }
      },
      {
        word_key: "swm", position: 6, sense_chosen: "livrer au mal",
        analysis_axes: {
          concept_chosen: "Affliction",
          concepts: {
            "Affliction": {
              status: "retenu",
              senses: ["livrer au mal"],
              proof_ctx: "Le verbe yasumunakum est un inaccompli 3MP de la racine s-w-m avec pronom 2MP. Le Lane's donne « he imposed upon him, he subjected him to evil treatment, he afflicted him continuously ». La racine porte l'idee d'un traitement continu et penible — les gens de Pharaon infligeaient un tourment permanent aux enfants d'Israel. L'inaccompli indique la duree et la repetition de l'affliction.",
              axe1_verset: "Le verbe yasumunakum introduit la description de l'oppression. L'affliction est detaillee en deux actes precis : egorger les fils et laisser vivre les femmes. Le verbe englobe ces deux actes dans un traitement global — l'affliction est systematique et organisee. Le pire supplice (su'a al-'adhabi) qualifie la nature extreme de cette affliction.",
              axe2_voisins: "Le verset 48 avertissait du Jugement futur. Ce verset 49 rappelle l'oppression passee. Le contraste est entre la solitude du Jugement (v48) et la solidarite dans l'oppression (v49). Les enfants d'Israel ont souffert collectivement sous Pharaon mais seront juges individuellement au Jour du Jugement.",
              axe3_sourate: "La racine s-w-m dans la sourate al-Baqarah apparait dans ce contexte de l'oppression pharaonique. La sourate utilise ce verbe specifique pour decrire un traitement systematique et continu — pas un acte ponctuel mais une politique d'oppression. Le verbe ne revient pas souvent dans le Coran, ce qui renforce son impact quand il apparait.",
              axe4_coherence: "La racine s-w-m apparait 15 fois dans le Coran. En 7:141, le meme verset est repris : « ils vous infligeaient le pire supplice ». En 14:6, Moise rappelle le meme evenement. La constance du verbe yasumuna dans tous les recits de la delivrance montre que l'affliction etait le trait distinctif de l'oppression pharaonique.",
              axe5_frequence: "Pour la mission du khalifa, l'affliction infligee par Pharaon est l'archetype de l'oppression que le khalifa doit combattre. Le khalifa est celui qui protege les opprimes, pas celui qui les opprime. La delivrance des enfants d'Israel est le modele de l'action divine qui soutient le khalifa fidele contre les oppresseurs."
            },
            "Marque/Signe": {
              status: "nul",
              senses: ["marquer", "signe distinctif"],
              proof_ctx: "Le sens de marque est un sens de s-w-m (sawwama = marquer). Le contexte utilise yasumuna dans le sens d'infliger un mal continu, pas de marquer un signe distinctif."
            }
          }
        }
      },
      {
        word_key: "swa", position: 7, sense_chosen: "mal",
        analysis_axes: {
          concept_chosen: "Mal/Mauvais",
          concepts: {
            "Mal/Mauvais": {
              status: "retenu",
              senses: ["mal", "mauvais", "nuisible", "péché"],
              proof_ctx: "Le mot su'a est un nom masculin au cas accusatif de la racine s-w-a'. Le Lane's donne « evil, ill, what is bad, the worst ». En construction idafa avec al-'adhabi (su'a al-'adhabi), il signifie « le pire du supplice, la plus mauvaise forme de chatiment ». Le su' est le degre extreme du mal — c'est le superlatif de la mauvaisite.",
              axe1_verset: "Le mot su'a qualifie l'intensite de l'affliction. Les gens de Pharaon ne faisaient pas subir un chatiment ordinaire mais « le pire du supplice ». Le superlatif montre que l'oppression etait au degre maximum — egorger les fils et asservir les femmes est le summum de la cruaute. Le mal est qualifie par son objet ('adhab = supplice), ce qui precise qu'il s'agit d'un mal inflige, pas d'un mal moral.",
              axe2_voisins: "Le verset 48 utilisait le mot 'adl (rancon) et nafs (ame) pour decrire l'impuissance au Jour du Jugement. Ce verset 49 utilise su' et 'adhab pour decrire la souffrance historique. Le passage du futur eschatologique au passe historique montre que les deux situations sont reliees — la delivrance passee devrait motiver le taqwa present.",
              axe3_sourate: "La racine s-w-a' dans la sourate al-Baqarah apparait aussi en 2:81 (« ceux qui ont acquis le mal ») et 2:169 (« il vous ordonne le mal »). Le mal est toujours presente comme l'oppose du bien, comme ce qui degrade et detruit. L'oppression de Pharaon est le mal a son degre extreme.",
              axe4_coherence: "La racine s-w-a' apparait 25 fois dans le Coran. L'expression su'a al-'adhab est specifique aux recits de Pharaon et de l'enfer. En 7:141 et 14:6, la meme expression decrit l'oppression pharaonique. En 16:26 et 39:25, elle decrit le chatiment divin. Le pire supplice est celui qui combine intensite, duree et cruaute.",
              axe5_frequence: "Pour la mission du khalifa, le mal est ce que le khalifa doit combattre et prevenir. L'oppression de Pharaon est le degre extreme du mal que le khalifa est mandate pour empecher. La delivrance est le signe que Dieu intervient quand le mal atteint son paroxysme."
            }
          }
        }
      },
      {
        word_key: "blw", position: 15, sense_chosen: "épreuve",
        analysis_axes: {
          concept_chosen: "Épreuve/Test",
          concepts: {
            "Épreuve/Test": {
              status: "retenu",
              senses: ["éprouver", "tester", "affliction"],
              proof_ctx: "Le mot balaa'un est un nom masculin singulier indefini de la racine b-l-w. Le Lane's donne « trial, test, affliction, tribulation ». Le balaa' est un test qui revele la vraie nature de l'eprouve — il separe le patient de l'impatient, le fidele du rebelle. Le balaa' peut etre par le mal (epreuve de souffrance) ou par le bien (epreuve de richesse). Ici, l'epreuve est par le mal — l'oppression de Pharaon.",
              axe1_verset: "Le mot balaa'un cloture le verset en donnant le sens de l'oppression. L'oppression de Pharaon n'etait pas un accident de l'histoire mais « une epreuve immense de votre Seigneur ». L'epreuve est attribuee a Dieu (de votre Seigneur) — Dieu a permis cette souffrance comme test. L'adjectif 'azim (immense) qualifie la magnitude de l'epreuve. Le verset transforme la souffrance en sens — ce n'est pas un mal absurde mais un test divin.",
              axe2_voisins: "Le verset 48 avertissait du Jour du Jugement. Ce verset 49 rappelle que l'epreuve a deja eu lieu dans l'histoire. L'epreuve historique (Pharaon) prefigure l'epreuve eschatologique (le Jugement). Les enfants d'Israel qui ont survecu a l'epreuve de Pharaon doivent se preparer a l'epreuve du Jugement.",
              axe3_sourate: "La racine b-l-w dans la sourate al-Baqarah apparait en 2:124 (Ibrahim est eprouve par des paroles). En 2:155, « Nous vous eprouverons par la peur, la faim, la perte de biens ». L'epreuve est un mecanisme divin qui traverse toute la sourate — chaque communaute est eprouvee pour reveler sa foi.",
              axe4_coherence: "La racine b-l-w apparait 38 fois dans le Coran. En 67:2, « Il a cree la mort et la vie pour vous eprouver ». L'epreuve est le cadre de la vie humaine — toute l'existence est un test. En 21:35, « Nous vous eprouverons par le mal et le bien comme tentation ». L'epreuve est universelle et permanente.",
              axe5_frequence: "Pour la mission du khalifa, l'epreuve est le cadre de la mission. Le khalifa est teste par les difficultes et par les faveurs. L'epreuve de Pharaon a teste la patience et la foi des enfants d'Israel — ceux qui ont patiente ont ete delivres. L'epreuve immense appelle une patience immense."
            },
            "Usure": {
              status: "nul",
              senses: ["user"],
              proof_ctx: "L'usure est un sens secondaire de b-l-w (user par le temps). Le contexte parle clairement d'une epreuve divine (balaa' min rabbikum), pas d'un processus de degradation physique."
            }
          }
        }
      },
      {
        word_key: "rbb", position: 17, sense_chosen: "seigneur",
        analysis_axes: {
          concept_chosen: "Seigneurie/Autorité bienveillante",
          concepts: {
            "Seigneurie/Autorité bienveillante": {
              status: "retenu",
              senses: ["celui qui possède", "seigneur", "maître", "gouverner", "propriétaire", "celui qui élève", "celui qui entretient"],
              proof_ctx: "Le mot rabbikum est le nom rabb au cas genitif de la racine r-b-b avec pronom possessif 2MP (votre). Le Lane's donne « lord, master, owner, sustainer, nourisher ». Le rabb est celui qui possede, gouverne et fait grandir. L'ajout du pronom possessif (votre Seigneur) personnalise la relation — c'est votre Seigneur a vous, enfants d'Israel.",
              axe1_verset: "Le mot rabbikum apparait dans la derniere proposition du verset (une epreuve immense de votre Seigneur). L'epreuve est attribuee au Seigneur — c'est Lui qui l'a permise ou ordonnee. L'attribution a rabbikum (votre Seigneur) rappelle que celui qui eprouve est le meme qui delivre. Le Seigneur qui permet la souffrance est aussi le Seigneur qui sauve. La seigneurie inclut les deux actes — l'epreuve et la delivrance.",
              axe2_voisins: "Le verset 47 mentionnait la distinction par-dessus les mondes. Ce verset 49 mentionne l'epreuve de « votre Seigneur ». La distinction et l'epreuve viennent du meme Seigneur — celui qui distingue est celui qui eprouve. Les bienfaits et les epreuves sont les deux faces de la seigneurie divine.",
              axe3_sourate: "Le mot rabb est l'un des plus frequents de la sourate al-Baqarah. En 2:21, « adorez votre Seigneur qui vous a crees ». En 2:131, « je me soumets au Seigneur des mondes ». La seigneurie est le cadre de toute la relation entre Dieu et les humains dans la sourate.",
              axe4_coherence: "La racine r-b-b apparait 980 fois dans le Coran. Le mot rabb est le mot le plus frequent pour designer Dieu apres le nom Allah. En 1:2, « louange a Dieu, Seigneur des mondes ». La seigneurie divine est universelle (Seigneur des mondes) et particuliere (votre Seigneur). Le rabb est celui qui eleve et fait grandir — Sa seigneurie est une autorite bienveillante.",
              axe5_frequence: "Pour la mission du khalifa, la seigneurie divine est la source de l'autorite du khalifa. Le khalifa gouverne au nom du Seigneur — il est le representant de l'autorite divine sur terre. La reconnaissance de la seigneurie (rabbikum) est le fondement de la mission."
            },
            "Croissance/Augmentation": {
              status: "probable",
              senses: ["développer", "augmenter", "croître", "excès", "colline", "éminence", "faire grandir", "nourrir"],
              proof_ctx: "La croissance est le sens premier de r-b-b (rabba = faire grandir, nourrir). Le contexte utilise rabb dans son sens de « seigneur, maitre » — la seigneurie est derivee de la croissance car le seigneur est celui qui fait grandir ses sujets."
            }
          }
        }
      },
      {
        word_key: "ezm", position: 18, sense_chosen: "immense",
        analysis_axes: {
          concept_chosen: "Grandeur/Importance",
          concepts: {
            "Grandeur/Importance": {
              status: "retenu",
              senses: ["être grand", "magnifier", "grandir", "immense"],
              proof_ctx: "Le mot 'azimun est un adjectif masculin singulier indefini au cas nominatif de la racine e-z-m. Le Lane's donne « great, mighty, huge, immense, formidable ». L'adjectif qualifie le nom balaa' (epreuve) — l'epreuve est qualifiee d'immense. L'indefini ajoute une nuance d'indetermination — une epreuve immense (dont on ne peut mesurer la grandeur exacte).",
              axe1_verset: "Le mot 'azimun est le dernier mot du verset et qualifie l'epreuve. La grandeur de l'epreuve est proportionnelle a la grandeur de la delivrance — une epreuve immense merite une gratitude immense. Le verset se termine sur cette note de grandeur qui doit frapper l'esprit des enfants d'Israel — ce qu'ils ont vecu n'etait pas ordinaire.",
              axe2_voisins: "Le verset 47 mentionnait la distinction par-dessus les mondes (grandeur de la faveur). Ce verset 49 mentionne l'epreuve immense (grandeur de l'epreuve). La grandeur qualifie les deux — la faveur et l'epreuve sont toutes deux immenses. Le peuple distingue recoit des epreuves a la mesure de sa distinction.",
              axe3_sourate: "La racine e-z-m dans la sourate al-Baqarah qualifie plusieurs realites. En 2:7, un chatiment immense. En 2:105, une faveur immense. En 2:114, un destin immense. La grandeur qualifie aussi bien le positif que le negatif — Dieu est grand dans Ses bienfaits et grand dans Ses epreuves.",
              axe4_coherence: "La racine e-z-m apparait 128 fois dans le Coran. L'expression 'adhab 'azim (chatiment immense) est l'une des plus frequentes. L'expression balaa' 'azim (epreuve immense) est plus rare et specifique aux recits de Pharaon. La grandeur de l'epreuve souligne la grandeur du Seigneur qui eprouve — seul un Seigneur immense peut imposer une epreuve immense.",
              axe5_frequence: "Pour la mission du khalifa, la grandeur de l'epreuve est proportionnelle a la grandeur de la mission. Le khalifa qui recoit une mission immense recoit une epreuve immense. Les enfants d'Israel, distingues par-dessus les mondes, ont subi une epreuve a la mesure de leur distinction."
            }
          }
        }
      }
    ]
  },

  // =====================================================
  // VERSET 2:50
  // verse_id=57, analysis_id=413
  // "Nous avons fendu la mer pour vous, Nous vous avons sauves
  //  et Nous avons noye les gens de Pharaon tandis que vous regardiez."
  // =====================================================
  50: {
    verse_id: 57,
    analysis_id: 413,
    translation_arab: "Nous avons fendu la mer pour vous, Nous vous avons sauves et Nous avons noye les gens de Pharaon tandis que vous regardiez.",
    full_translation: "Et [rappelez-vous] lorsque Nous separames la mer pour vous, et Nous vous sauvames, et Nous noyames les gens de Pharaon pendant que vous regardiez.",
    translation_explanation: `§DEMARCHE§
Ce verset decrit la traversee de la mer Rouge — l'un des miracles les plus spectaculaires de l'histoire des enfants d'Israel. Le verbe **faraqna** est un accompli 1PP de la racine f-r-q. Le Lane's donne « he separated, divided, parted, split ». Le verbe decrit l'acte divin de fendre la mer en deux parties pour ouvrir un passage. Le mot **al-bahra** est un nom defini masculin accusatif de la racine b-h-r. Le Lane's donne « sea, great body of water ». Le verbe **anjaynakum** est un accompli 1PP forme IV de la racine n-j-w avec pronom 2MP. Le Lane's donne « he saved, delivered ». La forme IV (causatif) signifie « faire echapper, sauver activement ». Le verbe **aghraqna** est un accompli 1PP forme IV de la racine gh-r-q. Le Lane's donne « he drowned, submerged ». La forme IV (causatif) signifie « faire noyer ». Le mot **aala** est un nom de la racine a-w-l au cas accusatif. Le Lane's donne « family, people, followers ». Le verbe **tanzuruna** est un inaccompli 2MP de la racine n-z-r. Le Lane's donne « you were looking, watching ».

§JUSTIFICATION§
**fendu** — Le sens retenu est « separer ». Le verbe faraqna signifie separer, diviser. L'alternative « groupe » est ecartee car le contexte decrit un acte de separation physique de la mer, pas la formation d'un groupe.

**mer** — Le sens retenu est « mer ». Le mot al-bahr designe une grande etendue d'eau. Pas d'alternative pertinente.

**sauves** — Le sens retenu est « sauver ». Le verbe anjaynakum forme IV signifie faire echapper. Meme racine que najjaynakum du verset 49 mais en forme IV au lieu de forme II.

**noye** — Le sens retenu est « noyer ». Le verbe aghraqna forme IV signifie faire noyer. L'alternative « enfoncer » est ecartee car le contexte parle clairement de noyade dans la mer.

**gens de** — Le sens retenu est « famille ». Le mot aal designe les proches et partisans. Meme analyse que le verset 49.

**regardiez** — Le sens retenu est « regarder ». Le verbe tanzuruna signifie observer, contempler. L'alternative « attendre » est ecartee car le contexte decrit un temoignage visuel — les enfants d'Israel voyaient la noyade de Pharaon.

§CRITIQUE§
**fendu vs separe** — Le Lane's donne « he separated, divided, parted ». « Fendu » est plus concret et physique — il evoque l'image de la mer qui s'ouvre comme un mur. « Separe » est plus abstrait. « Fendu » correspond mieux a l'image coranique de la mer qui s'ouvre en deux parts.
**tandis que vous regardiez** — Cette proposition circonstancielle (hal) est importante : les enfants d'Israel ont vu la noyade de leurs oppresseurs. Ils sont temoins du chatiment divin. Le regard fait d'eux des temoins directs de la puissance divine.`,
    segments: [
      { fr: "et lorsque", phon: "wa-idh", arabic: "وَإِذْ", is_particle: true, position: 1 },
      { fr: "Nous avons fendu", pos: "verbe", phon: "faraqna", arabic: "فَرَقْنَا", word_key: "frq", is_particle: false, sense_retenu: "separer", position: 2 },
      { fr: "pour vous", phon: "bikum", arabic: "بِكُمُ", is_particle: true, position: 3 },
      { fr: "la mer", pos: "nom", phon: "al-bahra", arabic: "ٱلْبَحْرَ", word_key: "bhr", is_particle: false, sense_retenu: "mer", position: 4 },
      { fr: "Nous vous avons sauves", pos: "verbe", phon: "anjaynakum", arabic: "فَأَنجَيْنَٰكُمْ", word_key: "njw", is_particle: false, sense_retenu: "sauver", position: 5 },
      { fr: "et avons noye", pos: "verbe", phon: "aghraqna", arabic: "وَأَغْرَقْنَآ", word_key: "grq", is_particle: false, sense_retenu: "noyer", position: 6 },
      { fr: "les gens de", pos: "nom", phon: "aala", arabic: "ءَالَ", word_key: "awl", is_particle: false, sense_retenu: "famille", position: 7 },
      { fr: "Pharaon", phon: "fir'awna", arabic: "فِرْعَوْنَ", is_particle: true, position: 8 },
      { fr: "tandis que vous", phon: "wa-antum", arabic: "وَأَنتُمْ", is_particle: true, position: 9 },
      { fr: "regardiez", pos: "verbe", phon: "tanzuruna", arabic: "تَنظُرُونَ", word_key: "nzr", is_particle: false, sense_retenu: "regarder", position: 10 }
    ],
    words: [
      {
        word_key: "frq", position: 2, sense_chosen: "séparer",
        analysis_axes: {
          concept_chosen: "Séparation/Distinction",
          concepts: {
            "Séparation/Distinction": {
              status: "retenu",
              senses: ["séparer", "distinguer", "diviser", "Furqân"],
              proof_ctx: "Le verbe faraqna est un accompli 1PP de la racine f-r-q. Le Lane's donne « he separated, divided, parted, made a distinction between ». Le verbe decrit l'acte physique de fendre la mer en deux parties pour ouvrir un passage aux enfants d'Israel. La separation est directionnelle — elle cree deux cotes a partir d'un tout. Le sujet est Dieu (Nous), ce qui fait de la separation un acte divin direct et miraculeux.",
              axe1_verset: "Le verbe faraqna ouvre la narration du miracle de la mer. La separation de la mer est le premier des trois actes divins du verset : fendre (faraqna), sauver (anjaynakum), noyer (aghraqna). La sequence est logique — d'abord la mer s'ouvre, puis les enfants d'Israel passent, puis les poursuivants sont noyes. La separation est l'acte fondateur qui rend possible la delivrance et le chatiment.",
              axe2_voisins: "Le verset 49 decrivait l'oppression de Pharaon (le probleme). Ce verset 50 decrit la solution divine — la separation de la mer. Le passage du probleme a la solution montre la puissance divine qui transforme l'obstacle (la mer) en moyen de salut. La mer qui bloquait la fuite devient le chemin de la delivrance et l'instrument de la destruction des poursuivants.",
              axe3_sourate: "La racine f-r-q dans la sourate al-Baqarah apparait aussi dans le mot Furqan (2:53, 2:185). Le Furqan est « ce qui separe le vrai du faux » — c'est le Coran ou la Torah qui distingue. La separation physique de la mer et la separation intellectuelle du vrai et du faux partagent la meme racine — separer c'est creer de la clarte.",
              axe4_coherence: "La racine f-r-q apparait 72 fois dans le Coran. En 26:63, « Nous avons revele a Moise : frappe la mer de ton baton. Et elle se fendit (infalaqa) ». En 20:77, « Nous avons revele a Moise : fais voyager Mes serviteurs la nuit et fraie-leur un chemin a sec dans la mer ». Les recits sont concordants — la mer est fendue par un acte divin pour sauver les croyants.",
              axe5_frequence: "Pour la mission du khalifa, la separation est un acte de clarte. Le khalifa separe le vrai du faux, le juste de l'injuste. La separation de la mer est l'image physique de cette mission — creer un passage a travers le chaos pour que les fideles puissent avancer."
            },
            "Groupe/Partie": {
              status: "nul",
              senses: ["groupe", "partie"],
              proof_ctx: "Le sens de groupe (firqa) est un sens de f-r-q. Le contexte utilise le verbe faraqna (nous avons separe) dans son sens d'action physique, pas le nom firqa (groupe). Le verset decrit la separation de la mer, pas la formation d'un groupe."
            }
          }
        }
      },
      {
        word_key: "bhr", position: 4, sense_chosen: "mer",
        analysis_axes: {
          concept_chosen: "Mer/Étendue",
          concepts: {
            "Mer/Étendue": {
              status: "retenu",
              senses: ["mer", "océan", "fleuve", "vaste"],
              proof_ctx: "Le mot al-bahra est un nom defini masculin accusatif de la racine b-h-r. Le Lane's donne « sea, large body of water, ocean ». Le bahr est une etendue d'eau si vaste qu'on ne peut en voir les limites. L'article defini (al-bahr) designe la mer connue — la mer Rouge (ou la mer des Roseaux dans la tradition). La mer est un obstacle naturel infranchissable pour l'homme — sa separation est le signe ultime de la puissance divine.",
              axe1_verset: "Le mot al-bahra est l'objet du verbe faraqna — c'est la mer qui est fendue. La mer est l'obstacle qui se dresse entre les enfants d'Israel et la liberte. La mer est aussi l'instrument de la destruction de Pharaon — ce qui sauve les uns noie les autres. La mer joue un double role dans le verset : passage pour les opprimes, tombe pour les oppresseurs.",
              axe2_voisins: "Le verset 49 decrivait l'oppression sur terre (egorger, asservir). Ce verset 50 transporte le recit a la mer — le passage de la terre a la mer marque le passage de l'oppression a la delivrance. La mer est la frontiere entre l'esclavage et la liberte. Traverser la mer c'est passer d'un etat a un autre.",
              axe3_sourate: "La racine b-h-r dans la sourate al-Baqarah apparait dans ce contexte de miracle. La sourate n'utilise pas souvent le mot mer — quand il apparait, c'est pour decrire un acte de puissance divine qui defie les lois naturelles.",
              axe4_coherence: "La racine b-h-r apparait 42 fois dans le Coran. La mer est un element recurrent dans les recits prophetiques. En 7:138, les enfants d'Israel traversent la mer. En 10:90, Pharaon se noie dans la mer. En 26:63, la mer se fend en deux murs. La mer est toujours l'espace ou Dieu manifeste Sa puissance — ce qui est impossible pour l'homme est facile pour Dieu.",
              axe5_frequence: "Pour la mission du khalifa, la mer represente les obstacles apparemment insurmontables. Le khalifa fidele peut compter sur Dieu pour ouvrir des chemins la ou tout semble ferme. La mer fendue est la promesse que les obstacles seront leves pour celui qui suit la guidance."
            }
          }
        }
      },
      {
        word_key: "grq", position: 6, sense_chosen: "noyer",
        analysis_axes: {
          concept_chosen: "Noyade/Submersion",
          concepts: {
            "Noyade/Submersion": {
              status: "retenu",
              senses: ["noyer", "se noyer", "submerger", "être englouti"],
              proof_ctx: "Le verbe aghraqna est un accompli 1PP forme IV de la racine gh-r-q. Le Lane's donne « he drowned him, he submerged him, he caused him to sink ». La forme IV (causatif) signifie « faire noyer, faire submerger ». Le sujet est Dieu (Nous) et l'objet les gens de Pharaon. La noyade est un acte divin direct et punitif — Dieu fait noyer les oppresseurs dans la mer qu'Il a Lui-meme fendue.",
              axe1_verset: "Le verbe aghraqna est le troisieme acte divin du verset apres fendre et sauver. La sequence fendre-sauver-noyer montre l'ordre des evenements : la mer s'ouvre, les enfants d'Israel passent, la mer se referme sur les poursuivants. Le meme acte (la separation de la mer) produit deux resultats opposes : salut pour les opprimes, mort pour les oppresseurs. La noyade est la justice divine qui retablit l'equilibre.",
              axe2_voisins: "Le verset 49 decrivait l'oppression de Pharaon. Ce verset 50 decrit son chatiment — la noyade. L'oppresseur qui infligeait le pire supplice subit lui-meme une mort violente. La noyade est la reponse divine a l'oppression — elle est proportionnelle et definitive.",
              axe3_sourate: "La racine gh-r-q dans la sourate al-Baqarah n'apparait que dans ce verset. La noyade de Pharaon est un evenement unique et marquant qui sert de lecon pour toute la sourate — ceux qui s'opposent a Dieu sont detruits.",
              axe4_coherence: "La racine gh-r-q apparait 23 fois dans le Coran. La noyade est le chatiment de deux communautes majeures : le peuple de Nouh (deluge) et les gens de Pharaon (mer). En 17:103, « Nous les noyames tous ». En 25:37, « le peuple de Nouh, quand ils dementirent les messagers, Nous les noyames ». La noyade est le chatiment des communautes qui rejettent la guidance.",
              axe5_frequence: "Pour la mission du khalifa, la noyade des oppresseurs est le signe que Dieu finit toujours par retablir la justice. Le khalifa opprime doit patienter car les oppresseurs seront detruits. La noyade de Pharaon est la garantie historique que l'oppression ne dure pas eternellement."
            },
            "Pénétration/Profondeur": {
              status: "nul",
              senses: ["enfoncer (flèche)", "être plongé dans"],
              proof_ctx: "La penetration est un sens secondaire de gh-r-q. Le contexte utilise aghraqna dans son sens de « faire noyer » (forme IV causatif), pas de « faire penetrer ». La noyade implique la submersion totale, pas une simple penetration."
            }
          }
        }
      },
      {
        word_key: "nzr", position: 10, sense_chosen: "regarder",
        analysis_axes: {
          concept_chosen: "Regard/Contemplation",
          concepts: {
            "Regard/Contemplation": {
              status: "retenu",
              senses: ["regarder", "voir", "contempler", "considérer"],
              proof_ctx: "Le verbe tanzuruna est un inaccompli 2MP de la racine n-z-r. Le Lane's donne « you were looking, watching, beholding ». L'inaccompli dans une proposition circonstancielle (hal) decrit une action simultanee — tandis que vous regardiez. Le regard est un temoignage direct — les enfants d'Israel ont vu de leurs propres yeux la noyade de Pharaon. Le regard fait d'eux des temoins oculaires du chatiment divin.",
              axe1_verset: "Le verbe tanzuruna cloture le verset par une proposition circonstancielle (wa-antum tanzuruna = tandis que vous regardiez). Le regard transforme les enfants d'Israel en temoins. Ils ne sont pas seulement sauves — ils voient le chatiment de leurs oppresseurs. Le regard est un element pedagogique — voir la noyade de Pharaon devrait graver dans leur memoire la puissance de Dieu et la futilite de l'oppression.",
              axe2_voisins: "Le verset 49 decrivait l'oppression subie passivement. Ce verset 50 les place comme temoins actifs de la justice divine. Le passage de la passivite (etre opprime) a l'observation active (regarder le chatiment) marque la liberation — ils ne sont plus victimes mais temoins de la victoire divine.",
              axe3_sourate: "La racine n-z-r dans la sourate al-Baqarah apparait dans d'autres contextes. En 2:104, « ne dites pas ra'ina mais dites unzurna (regardez-nous) ». Le regard est un acte de perception qui revele la realite — regarder les signes de Dieu c'est commencer a les comprendre.",
              axe4_coherence: "La racine n-z-r apparait 129 fois dans le Coran. En 7:143, Moise dit « montre-Toi que je Te regarde (anzur ilayka) ». En 75:23, « vers leur Seigneur elles regarderont (nazira) ». Le regard est l'acte de perception le plus direct — il met en face de la realite. Les enfants d'Israel ont ete mis face a la realite du chatiment divin par le regard.",
              axe5_frequence: "Pour la mission du khalifa, le regard est un moyen de connaissance. Le khalifa qui regarde les signes de Dieu dans la creation et dans l'histoire enrichit sa comprehension de la mission. Les enfants d'Israel qui ont regarde la noyade de Pharaon avaient une raison supplementaire de croire et d'obeir — ils ont vu de leurs yeux."
            },
            "Attente": {
              status: "nul",
              senses: ["attendre", "délai"],
              proof_ctx: "L'attente (intizar) est un sens de n-z-r. Le contexte utilise tanzuruna dans son sens de « regarder, observer » (proposition circumstancielle hal), pas d'attendre. Ils regardaient la noyade en temps reel, pas attendaient un evenement futur."
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
  // bny (id=386) — fils
  { analysis_id: 386, phrases: [
    { sense: "fils", arabic: "بَنِي يُحِبُّ اللَّعِبَ فِي الحَدِيقَةِ", phon: "baniya yuhibbu al-la'iba fi al-hadiqa", french: "Mon fils aime jouer dans le jardin." },
    { sense: "fils", arabic: "بَنَيْنَا بَيْتًا جَدِيدًا", phon: "banayna baytan jadidan", french: "Nous avons construit une nouvelle maison." },
    { sense: "fils", arabic: "أَبْنَاؤُنَا أَمَانَةٌ فِي أَعْنَاقِنَا", phon: "abna'una amanatun fi a'naqina", french: "Nos fils sont un depot de confiance sur nos epaules." }
  ]},
  // nem (id=264) — bienfait (check if already exists)
  { analysis_id: 264, phrases: [
    { sense: "bienfait", arabic: "نِعَمُ اللَّهِ لَا تُحْصَى", phon: "ni'amu Allahi la tuhsa", french: "Les bienfaits de Dieu ne se comptent pas." },
    { sense: "bienfait", arabic: "الصِّحَّةُ نِعْمَةٌ عَظِيمَةٌ", phon: "al-sihhatu ni'matun 'azima", french: "La sante est un immense bienfait." },
    { sense: "accorder un bienfait", arabic: "أَنْعَمَ عَلَيْنَا بِالأَمَانِ", phon: "an'ama 'alayna bi-al-amani", french: "Il nous a combles de securite." }
  ]},
  // fdl (id=524) — excellence
  { analysis_id: 524, phrases: [
    { sense: "faveur", arabic: "فَضْلُ اللَّهِ عَلَى عِبَادِهِ عَظِيمٌ", phon: "fadlu Allahi 'ala 'ibadihi 'azim", french: "La faveur de Dieu envers Ses serviteurs est immense." },
    { sense: "être supérieur", arabic: "فَضَّلَهُ عَلَى غَيْرِهِ بِعِلْمِهِ", phon: "faddalahu 'ala ghayrihi bi-'ilmihi", french: "Il l'a distingue des autres par son savoir." },
    { sense: "mérite", arabic: "لِكُلِّ ذِي فَضْلٍ فَضْلُهُ", phon: "li-kulli dhi fadlin fadluhu", french: "Chaque meritant a son merite." }
  ]},
  // wqy (id=277) — protection
  { analysis_id: 277, phrases: [
    { sense: "se prémunir", arabic: "اتَّقِ اللَّهَ حَيْثُمَا كُنْتَ", phon: "ittaqi Allaha haythuma kunta", french: "Premuns-toi envers Dieu ou que tu sois." },
    { sense: "protéger", arabic: "وَقَاهُ اللَّهُ شَرَّ ذَلِكَ اليَوْمِ", phon: "waqahu Allahu sharra dhalika al-yawmi", french: "Dieu l'a protege du mal de ce jour." },
    { sense: "piété", arabic: "التَّقْوَى خَيْرُ زَادٍ", phon: "al-taqwa khayru zadin", french: "La piete est la meilleure provision." }
  ]},
  // ywm (id=257) — jour
  { analysis_id: 257, phrases: [
    { sense: "jour", arabic: "كُلُّ يَوْمٍ جَدِيدٌ فِيهِ فُرْصَةٌ", phon: "kullu yawmin jadidun fihi fursa", french: "Chaque nouveau jour contient une opportunite." },
    { sense: "jour", arabic: "يَوْمُ الجُمُعَةِ خَيْرُ يَوْمٍ", phon: "yawmu al-jumu'ati khayru yawmin", french: "Le vendredi est le meilleur des jours." },
    { sense: "période", arabic: "سَأُنْجِزُ العَمَلَ فِي يَوْمَيْنِ", phon: "sa-unjizu al-'amala fi yawmayni", french: "Je terminerai le travail en deux jours." }
  ]},
  // jzy (id=531) — retribution
  { analysis_id: 531, phrases: [
    { sense: "rétribuer", arabic: "جَزَاهُ اللَّهُ خَيْرًا عَلَى عَمَلِهِ", phon: "jazahu Allahu khayran 'ala 'amalihi", french: "Dieu l'a retribue en bien pour son oeuvre." },
    { sense: "récompenser", arabic: "مَنْ يَعْمَلْ خَيْرًا يُجْزَ بِهِ", phon: "man ya'mal khayran yujza bihi", french: "Celui qui fait le bien en sera recompense." },
    { sense: "suffire", arabic: "لَنْ يَجْزِيَ عَنْكَ أَحَدٌ", phon: "lan yajziya 'anka ahad", french: "Personne ne suffira a ta place." }
  ]},
  // nfs (id=298) — ame
  { analysis_id: 298, phrases: [
    { sense: "âme", arabic: "كُلُّ نَفْسٍ ذَائِقَةُ المَوْتِ", phon: "kullu nafsin dha'iqatu al-mawti", french: "Toute ame goutera la mort." },
    { sense: "soi-même", arabic: "حَاسِبْ نَفْسَكَ قَبْلَ أَنْ تُحَاسَبَ", phon: "hasib nafsaka qabla an tuhasaba", french: "Demande des comptes a toi-meme avant qu'on te les demande." },
    { sense: "personne", arabic: "لَا تُكَلَّفُ نَفْسٌ إِلَّا وُسْعَهَا", phon: "la tukallafu nafsun illa wus'aha", french: "Nulle personne n'est chargee au-dela de sa capacite." }
  ]},
  // njw (id=518) — salut
  { analysis_id: 518, phrases: [
    { sense: "sauver", arabic: "نَجَّاهُ اللَّهُ مِنَ الخَطَرِ", phon: "najjahu Allahu mina al-khatari", french: "Dieu l'a sauve du danger." },
    { sense: "délivrer", arabic: "أَنْجَانَا اللَّهُ بِفَضْلِهِ", phon: "anjana Allahu bi-fadlihi", french: "Dieu nous a delivres par Sa grace." },
    { sense: "échapper", arabic: "نَجَا مِنَ الغَرَقِ بِأُعْجُوبَةٍ", phon: "naja mina al-gharaqi bi-u'juba", french: "Il a echappe a la noyade par miracle." }
  ]},
  // frq (id=515) — separation
  { analysis_id: 515, phrases: [
    { sense: "séparer", arabic: "فَرَقَ بَيْنَ الحَقِّ وَالبَاطِلِ", phon: "faraqa bayna al-haqqi wa-al-batili", french: "Il a separe le vrai du faux." },
    { sense: "distinguer", arabic: "الفُرْقَانُ يُفَرِّقُ بَيْنَ النُّورِ وَالظُّلْمَةِ", phon: "al-furqanu yufarriqu bayna al-nuri wa-al-zulma", french: "Le Discernement distingue la lumiere des tenebres." },
    { sense: "diviser", arabic: "فَرَّقُوا دِينَهُمْ وَكَانُوا شِيَعًا", phon: "farraquu dinahum wa-kanuu shiya'an", french: "Ils ont divise leur religion et sont devenus des sectes." }
  ]},
  // bhr (id=517) — mer
  { analysis_id: 517, phrases: [
    { sense: "mer", arabic: "البَحْرُ وَاسِعٌ لَا حُدُودَ لَهُ", phon: "al-bahru wasi'un la hududa lahu", french: "La mer est vaste, sans limites." },
    { sense: "mer", arabic: "رَكِبْنَا البَحْرَ فِي سَفِينَةٍ كَبِيرَةٍ", phon: "rakibna al-bahra fi safinatin kabira", french: "Nous avons traverse la mer dans un grand navire." },
    { sense: "fleuve", arabic: "بَحْرُ النِّيلِ يَجْرِي عَبْرَ مِصْرَ", phon: "bahru al-nili yajri 'abra Misra", french: "Le fleuve du Nil coule a travers l'Egypte." }
  ]},
  // grq (id=858) — noyade
  { analysis_id: 858, phrases: [
    { sense: "noyer", arabic: "أَغْرَقَ اللَّهُ فِرْعَوْنَ فِي البَحْرِ", phon: "aghraqa Allahu Fir'awna fi al-bahri", french: "Dieu a noye Pharaon dans la mer." },
    { sense: "se noyer", arabic: "كَادَ يَغْرَقُ لَوْلَا أَنْ أَنْقَذُوهُ", phon: "kada yaghraqu lawla an anqadhuhu", french: "Il a failli se noyer si on ne l'avait pas sauve." },
    { sense: "submerger", arabic: "أَغْرَقَتِ الأَمْطَارُ الحُقُولَ", phon: "aghraqati al-amtaru al-huqula", french: "Les pluies ont submerge les champs." }
  ]},
  // nzr (id=522) — regard
  { analysis_id: 522, phrases: [
    { sense: "regarder", arabic: "اُنْظُرْ إِلَى السَّمَاءِ وَتَفَكَّرْ", phon: "unzur ila al-sama'i wa-tafakkar", french: "Regarde le ciel et reflechis." },
    { sense: "contempler", arabic: "نَظَرْتُ إِلَى الجَبَلِ طَوِيلًا", phon: "nazartu ila al-jabali tawilan", french: "J'ai contemple la montagne longuement." },
    { sense: "considérer", arabic: "اُنْظُرُوا كَيْفَ ضَرَبَ الأَمْثَالَ", phon: "unzuruu kayfa daraba al-amthala", french: "Considerez comment Il a donne les exemples." }
  ]},
  // blw (id=918) — epreuve
  { analysis_id: 918, phrases: [
    { sense: "éprouver", arabic: "ابْتَلَاهُ اللَّهُ بِالصَّبْرِ", phon: "ibtalahu Allahu bi-al-sabri", french: "Dieu l'a eprouve par la patience." },
    { sense: "tester", arabic: "البَلَاءُ يَكْشِفُ مَعَادِنَ الرِّجَالِ", phon: "al-bala'u yakshifu ma'adina al-rijali", french: "L'epreuve revele la trempe des hommes." },
    { sense: "affliction", arabic: "صَبَرَ عَلَى البَلَاءِ حَتَّى فَرَّجَ اللَّهُ", phon: "sabara 'ala al-bala'i hatta farraja Allahu", french: "Il a endure l'affliction jusqu'a ce que Dieu le soulage." }
  ]},
  // rbb (id=253) — seigneur
  { analysis_id: 253, phrases: [
    { sense: "seigneur", arabic: "رَبِّ اغْفِرْ لِي وَلِوَالِدَيَّ", phon: "rabbi ighfir li wa-li-walidayya", french: "Seigneur, pardonne-moi ainsi qu'a mes parents." },
    { sense: "seigneur", arabic: "الحَمْدُ لِلَّهِ رَبِّ العَالَمِينَ", phon: "al-hamdu li-Allahi rabbi al-'alamina", french: "Louange a Dieu, Seigneur des mondes." },
    { sense: "celui qui élève", arabic: "رَبَّى وَلَدَهُ عَلَى الأَخْلَاقِ", phon: "rabba waladahu 'ala al-akhlaq", french: "Il a eleve son enfant dans les bonnes manieres." }
  ]},
  // ezm (id=310) — grandeur
  { analysis_id: 310, phrases: [
    { sense: "immense", arabic: "هَذَا أَمْرٌ عَظِيمٌ لَا يُسْتَهَانُ بِهِ", phon: "hadha amrun 'azimun la yustahanu bihi", french: "C'est une affaire immense qu'on ne doit pas prendre a la legere." },
    { sense: "être grand", arabic: "عَظُمَ الأَمْرُ حَتَّى عَجَزُوا عَنْهُ", phon: "'azuma al-amru hatta 'ajazuu 'anhu", french: "L'affaire est devenue si grande qu'ils en furent incapables." },
    { sense: "magnifier", arabic: "عَظِّمْ شَعَائِرَ اللَّهِ", phon: "'azzim sha'a'ira Allahi", french: "Magnifie les rites de Dieu." }
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

  const verseIds = [54, 55, 56, 57];
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
  console.log('=== PIPELINE SOURATE 2 — AL-BAQARAH — VERSETS 47 A 50 ===\n');

  let totalOk = 0, totalErr = 0;

  for (let v = 47; v <= 50; v++) {
    const result = await processVerse(v);
    if (result) {
      totalOk += result.okCount;
      totalErr += result.errCount;
    }
  }

  await syncWordMeanings();
  await insertDailyPhrases();

  console.log(`\n=== PIPELINE V47-50 TERMINEE — TOTAL: ${totalOk} OK, ${totalErr} erreurs ===`);
}

main().catch(e => console.error('FATAL:', e));
