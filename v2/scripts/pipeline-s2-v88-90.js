const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// =====================================================
// PIPELINE SOURATE 2 — AL-BAQARAH — VERSETS 88 A 90
// verse_id=95 (2:88), verse_id=96 (2:89), verse_id=97 (2:90)
// =====================================================
// CRITICAL: concept names and senses are read from concepts JSON
// =====================================================

const verseData = {

  // =====================================================
  // VERSET 2:88
  // verse_id=95, analysis_id=453
  // "Et ils dirent : Nos coeurs sont enveloppes. Non ! Dieu les a
  //  maudits a cause de leur rejet, alors peu croient-ils."
  // =====================================================
  88: {
    verse_id: 95,
    analysis_id: 453,
    translation_arab: "Et ils dirent : Nos coeurs sont enveloppes. Non ! Dieu les a maudits a cause de leur rejet, alors peu croient-ils.",
    full_translation: "Et ils dirent : Nos coeurs sont enveloppes. Mais non ! Dieu les a maudits a cause de leur dissimulation [de la verite], alors combien peu [est-ce qu']ils croient.",
    translation_explanation: `§DEMARCHE§
Ce verset rapporte la pretention des enfants d'Israel que leurs coeurs seraient couverts et incapables de recevoir le message, puis la refutation divine. Le verbe **qaluu** est un accompli 3MP de la racine q-w-l. Le Lane's donne « they said, they spoke ». Ils enoncent une affirmation fausse pour justifier leur refus d'ecouter. Le nom **quluubuna** est un pluriel brise de qalb avec pronom 1P de la racine q-l-b. Le Lane's donne « our hearts ». Le coeur dans la vision coranique est le siege de la comprehension et de la foi. Le nom **ghulfun** est un pluriel de aghlafu de la racine gh-l-f. Le Lane's donne « covered, sheathed, uncircumcised (of the heart), wrapped in a covering ». Ils pretendent que leurs coeurs sont dans des enveloppes qui empechent la comprehension. La particule **bal** est une particule de rectification. Le Lane's donne « nay, but rather ». Dieu refute leur pretention — ce n'est pas un defaut de leurs coeurs mais une malediction meritee. Le verbe **la'anahum** est un accompli 3MS avec pronom 3MP de la racine l-'-n. Le Lane's donne « He cursed them, He removed them from His mercy ». La malediction est l'exclusion de la misericorde divine. Le nom **Allahu** est le nom propre de la divinite de la racine a-l-h. Le Lane's donne « God, the One True God ». Dieu est le sujet de la malediction — c'est un acte divin, pas humain. Le nom **bikufrihim** est un nom masculin singulier avec preposition bi et pronom 3MP de la racine k-f-r. Le Lane's donne « because of their covering/rejection ». La cause de la malediction est leur dissimulation de la verite. Le mot **qalilan** est un nom masculin singulier accusatif de la racine q-l-l. Le Lane's donne « little, few, seldom ». Le peu de foi est le resultat de la malediction. Le verbe **yu'minuuna** est un inaccompli 3MP de la racine a-m-n. Le Lane's donne « they believe ». La foi est ce qui leur manque — le rejet les a prives de la capacite de croire.

§JUSTIFICATION§
**dirent** — Le sens retenu est « dire ». Le verbe qaluu introduit la pretention des enfants d'Israel. L'alternative « avis » est ecartee car le contexte est une affirmation publique, pas une opinion interieure.

**coeurs** — Le sens retenu est « coeur ». Le mot quluubuna designe le siege de la comprehension spirituelle. L'alternative « retourner » est ecartee car le mot est ici un nom au pluriel avec pronom possessif, pas un verbe.

**enveloppes** — Le sens retenu est « enveloppe ». Le mot ghulfun designe des coeurs recouverts d'une enveloppe qui les rend impermeables au message. L'alternative « fourreau » est ecartee car le contexte est spirituel, pas materiel.

**maudit** — Le sens retenu est « maudire ». Le verbe la'anahum designe l'exclusion de la misericorde divine. C'est le seul concept disponible pour cette racine.

**Dieu** — Le sens retenu est « Dieu ». Le nom Allah designe la divinite unique. L'alternative « adorer » est ecartee car le mot est ici un nom propre, pas un verbe.

**rejet** — Le sens retenu est « couvrir ». Le mot kufrihim designe l'acte de couvrir la verite, de la dissimuler. L'alternative « expier » est ecartee car le contexte est celui de la cause de la malediction, pas de la reparation.

**peu** — Le sens retenu est « etre peu ». Le mot qalilan indique la rarete de la foi parmi eux. C'est le seul concept retenu pour cette racine.

**croient** — Le sens retenu est « croire ». Le verbe yu'minuuna designe la foi. L'alternative « securite » est ecartee car le contexte est celui de la croyance, pas de la protection.

§CRITIQUE§
**coeurs enveloppes vs malediction** — Les enfants d'Israel pretendent que leurs coeurs sont naturellement enveloppes, comme pour se decharger de toute responsabilite. Dieu refute cette excuse — le probleme n'est pas un defaut de naissance mais une malediction resultant de leur propre rejet. La particule bal (mais non) marque la rupture entre la fausse excuse et la realite.
**dissimulation comme cause** — Le mot kufrihim est traduit par « leur rejet » mais la racine k-f-r porte d'abord le sens de « couvrir ». La dissimulation de la verite est la cause premiere de la malediction — ils couvrent ce qu'ils savent etre vrai.`,
    segments: [
      { fr: "et ils dirent", pos: "verbe", phon: "wa-qaluu", arabic: "وَقَالُوا۟", word_key: "qwl", is_particle: false, sense_retenu: "dire", position: 0 },
      { fr: "nos coeurs", pos: "nom", phon: "quluubuna", arabic: "قُلُوبُنَا", word_key: "qlb", is_particle: false, sense_retenu: "coeur", position: 1 },
      { fr: "enveloppes", pos: "nom", phon: "ghulfun", arabic: "غُلْفٌ۞", word_key: "ghl f", is_particle: false, sense_retenu: "enveloppe", position: 2 },
      { fr: "mais non", phon: "bal", arabic: "بَل", is_particle: true, position: 3 },
      { fr: "les a maudits", pos: "verbe", phon: "la'anahum", arabic: "لَّعَنَهُمُ", word_key: "len", is_particle: false, sense_retenu: "maudire", position: 4 },
      { fr: "Dieu", pos: "nom", phon: "Allahu", arabic: "ٱللَّهُ", word_key: "alh", is_particle: false, sense_retenu: "Dieu", position: 5 },
      { fr: "a cause de leur rejet", pos: "nom", phon: "bikufrihim", arabic: "بِكُفْرِهِمْ", word_key: "kfr", is_particle: false, sense_retenu: "couvrir", position: 6 },
      { fr: "alors peu", pos: "nom", phon: "fa-qalilan", arabic: "فَقَلِيلًا", word_key: "qll", is_particle: false, sense_retenu: "etre peu", position: 7 },
      { fr: "ce que", phon: "ma", arabic: "مَّا", is_particle: true, position: 8 },
      { fr: "ils croient", pos: "verbe", phon: "yu'minuuna", arabic: "يُؤْمِنُونَ", word_key: "amn", is_particle: false, sense_retenu: "croire", position: 9 }
    ],
    words: [
      {
        word_key: "qwl", position: 0, sense_chosen: "dire",
        analysis_axes: {
          concept_chosen: "Parole/Énonciation",
          concepts: {
            "Parole/Énonciation": {
              status: "retenu",
              senses: ["parole", "discours", "parler", "dire", "affirmer"],
              proof_ctx: "Le verbe qaluu est un accompli 3MP de la racine q-w-l. Le Lane's donne « they said, they spoke ». Les enfants d'Israel enoncent une pretention sur l'etat de leurs coeurs. Qaluu introduit leur excuse — c'est une parole defensive qui vise a rejeter la responsabilite de leur incredulite.",
              axe1_verset: "Le verbe qaluu ouvre le verset par la pretention du peuple. Ils affirment que leurs coeurs sont enveloppes — incapables de recevoir le message. La parole est ici un instrument de defense — ils parlent pour se justifier, pas pour communiquer. Dieu refute leur parole par bal (mais non), montrant que leur affirmation est fausse. La parole mensonge est immediatement contredite par la parole divine.",
              axe2_voisins: "Le verset 87 rappelait les prophetes envoyes et l'arrogance des enfants d'Israel qui en ont tue certains. Ce verset 88 enchaine avec leur excuse — nos coeurs sont enveloppes. Le verset 89 montrera que meme lorsque ce qu'ils attendaient est venu, ils l'ont rejete. La progression montre l'escalade du rejet : arrogance, excuse, puis rejet delibere.",
              axe3_sourate: "La racine q-w-l structure les dialogues de la sourate al-Baqarah. En 2:80, ils disent que le Feu ne les touchera que quelques jours. En 2:88, ils disent que leurs coeurs sont enveloppes. La sourate accumule les paroles fausses des enfants d'Israel — chaque pretention est refutee par Dieu.",
              axe4_coherence: "La racine q-w-l est la plus frequente du Coran avec plus de 1700 occurrences. Le schema qaluu... bal (ils dirent... mais non) est un procede coranique de refutation. Dieu rapporte la parole fausse puis la corrige. En 2:111, en 2:135, le meme schema apparait — pretention suivie de refutation.",
              axe5_frequence: "Pour la mission du khalifa, la parole doit etre vraie. Les enfants d'Israel utilisent la parole pour se cacher derriere de fausses excuses. Le khalifa qui ment sur ses capacites (« mon coeur ne peut pas comprendre ») trahit sa mission. La parole du khalifa doit etre un engagement, pas une echappatoire."
            },
            "Pensée/Avis": {
              status: "nul",
              senses: ["avis", "doctrine", "opinion"],
              proof_ctx: "Le contexte est une parole prononcee publiquement (ils dirent), pas une reflexion interieure. Le verbe qaluu designe l'acte de parler, pas de penser."
            }
          }
        }
      },
      {
        word_key: "qlb", position: 1, sense_chosen: "coeur",
        analysis_axes: {
          concept_chosen: "Coeur/Centre",
          concepts: {
            "Coeur/Centre": {
              status: "retenu",
              senses: ["coeur", "esprit", "intelligence", "milieu"],
              proof_ctx: "Le mot quluubuna est un pluriel brise de qalb avec pronom 1P de la racine q-l-b. Le Lane's donne « our hearts, the seat of understanding and faith ». Le coeur dans le Coran est le siege de la comprehension, de la foi et de la volonte. Les enfants d'Israel pretendent que leurs coeurs sont dans des enveloppes — ils accusent l'organe de comprehension d'etre defectueux.",
              axe1_verset: "Le mot quluubuna est l'objet de la pretention — nos coeurs sont enveloppes. Le pluriel avec pronom possessif (nos) montre qu'ils parlent au nom du groupe entier. Le coeur est presente comme passif et defectueux — enveloppe, incapable de recevoir. Dieu refute cette excuse en attribuant la cause a la malediction resultant de leur propre rejet. Le coeur n'est pas defectueux par nature — c'est leur choix qui l'a scelle.",
              axe2_voisins: "Le verset 87 evoquait l'arrogance face aux prophetes. Ce verset 88 presente l'excuse du coeur enveloppe. Le verset 89 montrera le rejet delibere malgre la reconnaissance. La progression passe de l'arrogance a l'excuse puis au rejet conscient — le coeur est implique a chaque etape.",
              axe3_sourate: "La racine q-l-b apparait 19 fois dans la sourate al-Baqarah. En 2:7, « Dieu a scelle leurs coeurs ». En 2:10, « dans leurs coeurs il y a une maladie ». En 2:74, « vos coeurs se sont endurcis apres cela ». La sourate montre que l'etat du coeur est le reflet des choix — le coeur s'endurcit ou s'enveloppe a cause du rejet, pas par defaut.",
              axe4_coherence: "La racine q-l-b apparait 168 fois dans le Coran. Le coeur est le centre de la personne — il comprend, croit, doute, se durcit. En 47:24, « Ne meditent-ils pas le Coran, ou y a-t-il des verrous sur leurs coeurs ? ». Le coeur verrouille ou enveloppe est un theme recurrent — toujours lie au choix humain.",
              axe5_frequence: "Pour la mission du khalifa, le coeur est l'organe de la mission. Le khalifa dont le coeur est ouvert recoit la guidance. Les enfants d'Israel pretendent que leurs coeurs sont fermes — c'est un refus de la mission. Le khalifa ne peut pas accuser son coeur pour echapper a sa responsabilite."
            },
            "Retournement/Changement": {
              status: "probable",
              senses: ["retourner", "renverser", "revenir", "transformer", "changer d'état"],
              proof_ctx: "Le sens premier de q-l-b est retourner, renverser. Le coeur (qalb) est ainsi nomme car il se retourne et change d'etat. Ici le mot est au sens de coeur — l'organe qui se retourne entre la foi et le rejet."
            }
          }
        }
      },
      {
        word_key: "ghl f", position: 2, sense_chosen: "enveloppe",
        analysis_axes: {
          concept_chosen: "Couverture/Protection",
          concepts: {
            "Couverture/Protection": {
              status: "retenu",
              senses: ["enveloppe", "fourreau", "voile sur le cœur"],
              proof_ctx: "Le mot ghulfun est un pluriel de aghlafu de la racine gh-l-f. Le Lane's donne « covered, enwrapped, having a covering upon it (said of the heart), uncircumcised ». Le pluriel ghulf designe des coeurs enveloppes dans un fourreau — comme une epee dans son etui, le coeur est dans une enveloppe qui empeche la reception du message.",
              axe1_verset: "Le mot ghulfun est l'attribut des coeurs — nos coeurs sont enveloppes. C'est la pretention centrale du verset que Dieu refute par bal. Les enfants d'Israel disent que l'enveloppe sur leurs coeurs est un fait naturel qui les empeche de comprendre. Dieu repond que la cause est la malediction resultant de leur propre rejet. L'enveloppe est un symptome, pas une excuse.",
              axe2_voisins: "Le verset 87 montrait l'arrogance envers les prophetes. Ce verset 88 ajoute l'excuse de l'incapacite. Le verset 89 revelera que leur rejet est conscient — ils reconnaissent la verite puis la rejettent. L'excuse des coeurs enveloppes est contredite par la reconnaissance mentionnee au verset 89.",
              axe3_sourate: "La racine gh-l-f n'apparait qu'une fois dans la sourate al-Baqarah, dans ce verset. Le theme des coeurs fermes traverse la sourate — en 2:7 les coeurs sont scelles, en 2:74 ils sont durs comme la pierre. Le ghulf (enveloppe) est une variante du meme theme : le coeur qui refuse la verite.",
              axe4_coherence: "La racine gh-l-f apparait 2 fois dans le Coran — en 2:88 et en 4:155. En 4:155, les enfants d'Israel repetent la meme excuse « nos coeurs sont enveloppes ». La repetition montre que c'est une excuse recurrente — un argument faux utilise a plusieurs reprises pour justifier le rejet.",
              axe5_frequence: "Pour la mission du khalifa, l'enveloppe sur le coeur est un obstacle volontaire. Le khalifa ne peut pas pretendre que son coeur est incapable de recevoir la verite. L'excuse de l'incapacite est la pire forme de rejet — elle nie la responsabilite. Le khalifa doit garder son coeur ouvert et receptif."
            },
            "Fermeture spirituelle": {
              status: "nul",
              senses: ["cœurs enveloppés"],
              proof_ctx: "Ce concept recoupe le concept de Couverture/Protection. Le mot ghulfun designe l'enveloppe materielle qui couvre le coeur, pas un etat spirituel abstrait. Le sens physique (couverture) est premier."
            }
          }
        }
      },
      {
        word_key: "len", position: 4, sense_chosen: "maudire",
        analysis_axes: {
          concept_chosen: "Malédiction/Exclusion",
          concepts: {
            "Malédiction/Exclusion": {
              status: "retenu",
              senses: ["maudire", "malédiction", "maudit"],
              proof_ctx: "Le verbe la'anahum est un accompli 3MS avec pronom 3MP de la racine l-'-n. Le Lane's donne « He cursed them, He drove them away from His mercy, He excluded them from good ». La malediction divine est l'exclusion de la misericorde — c'est un eloignement, pas une punition physique. Le pronom suffixe -hum (eux) designe les enfants d'Israel qui pretendaient avoir les coeurs enveloppes.",
              axe1_verset: "Le verbe la'anahum est la reponse divine a la pretention des coeurs enveloppes. Apres bal (mais non), Dieu revele la vraie cause — ce n'est pas un defaut de coeur mais une malediction. La malediction resulte de leur kufr (dissimulation/rejet). La structure est causale : la malediction est la consequence du rejet, et le peu de foi est la consequence de la malediction.",
              axe2_voisins: "Le verset 87 evoquait le meurtre des prophetes. Ce verset 88 annonce la malediction comme consequence. Le verset 89 reprendra le terme la'na sous forme nominale (la'natu Allahi) — la malediction de Dieu sur les rejeteurs. La malediction est un fil conducteur entre les versets 88 et 89.",
              axe3_sourate: "La racine l-'-n dans la sourate al-Baqarah traite de l'exclusion divine. En 2:89, « la malediction de Dieu est sur les rejeteurs ». En 2:159, « ceux qui cachent ce que Nous avons fait descendre — ceux-la, Dieu les maudit ». La sourate lie la malediction a la dissimulation de la verite.",
              axe4_coherence: "La racine l-'-n apparait 41 fois dans le Coran. La malediction divine est toujours liee a un acte de rejet conscient — ce n'est jamais arbitraire. En 7:44, les gens du paradis maudissent les injustes. La malediction est le resultat logique de l'eloignement volontaire de la verite.",
              axe5_frequence: "Pour la mission du khalifa, la malediction est la consequence ultime du rejet de la mission. Le khalifa qui rejette la verite s'exclut de la misericorde. L'exclusion n'est pas une punition arbitraire — c'est le resultat naturel du choix de couvrir la verite."
            }
          }
        }
      },
      {
        word_key: "alh", position: 5, sense_chosen: "Dieu",
        analysis_axes: {
          concept_chosen: "Divinité",
          concepts: {
            "Divinité": {
              status: "retenu",
              senses: ["divinité", "exclamation divine", "divinité (concept)", "théologie", "oui certes", "Dieu"],
              proof_ctx: "Le nom Allahu est le nom propre de la divinite de la racine a-l-h. Le Lane's donne « God, the One True God, the sole deity ». Allah est le sujet de la malediction — c'est Dieu qui maudit, pas un agent humain. Le nominatif (Allahu) indique qu'Il est l'agent de l'action de maudire."
            },
            "Détresse": {
              status: "nul",
              senses: ["être perplexe", "se lamenter"],
              proof_ctx: "Le sens de detresse est un sens marginal de a-l-h. Le contexte est le nom propre de Dieu, pas un etat emotionnel."
            }
          }
        }
      },
      {
        word_key: "kfr", position: 6, sense_chosen: "couvrir",
        analysis_axes: {
          concept_chosen: "Couverture/Dissimulation",
          concepts: {
            "Couverture/Dissimulation": {
              status: "retenu",
              senses: ["la nuit qui couvre", "cacher", "couvrir"],
              proof_ctx: "Le mot kufrihim est un nom masculin singulier genitif avec pronom 3MP de la racine k-f-r. Le Lane's donne « their covering, their concealment, their rejection ». Le mot est introduit par la preposition bi (a cause de) — la dissimulation est la cause de la malediction. La racine k-f-r porte d'abord le sens de couvrir — couvrir la verite, la dissimuler, la cacher.",
              axe1_verset: "Le mot bikufrihim est la cause de la malediction — Dieu les a maudits a cause de leur dissimulation. La preposition bi indique la causalite directe. La dissimulation est le choix actif de couvrir la verite — ce n'est pas de l'ignorance mais un acte delibere. Le verset oppose la pretention passive (coeurs enveloppes) a la cause active (dissimulation choisie).",
              axe2_voisins: "Le verset 87 mentionnait l'arrogance et le meurtre des prophetes. Ce verset 88 attribue la malediction a la dissimulation. Le verset 89 reprendra k-f-r trois fois — les rejeteurs qui cherchaient la victoire puis ont rejete ce qu'ils reconnaissaient. La dissimulation est le fil rouge de ces versets.",
              axe3_sourate: "La racine k-f-r est l'une des plus frequentes de la sourate al-Baqarah. En 2:6, « ceux qui ont dissimule — les avertir ou ne pas les avertir est egal ». En 2:85, « celui qui fait cela — sa retribution est l'humiliation ». La sourate montre que la dissimulation est un choix conscient qui entraine des consequences.",
              axe4_coherence: "La racine k-f-r apparait plus de 500 fois dans le Coran. Le sens premier est couvrir — le kafir est celui qui couvre la verite. En 57:20, le cultivateur (kuffar) couvre la graine de terre — meme racine. La dissimulation est l'acte fondamental de rejet — couvrir ce qui devrait etre visible.",
              axe5_frequence: "Pour la mission du khalifa, la dissimulation est le contraire de la mission. Le khalifa est charge de rendre visible la verite — le kafir la couvre. La malediction resulte de l'inversion de la mission — couvrir au lieu de reveler."
            },
            "Rejet/Ingratitude": {
              status: "probable",
              senses: ["être ingrat", "nier", "renier un bienfait", "rejeter", "mécréant"],
              proof_ctx: "Le sens de rejet et d'ingratitude est un sens derive de k-f-r. Le rejet est la consequence de la dissimulation — celui qui couvre la verite finit par la rejeter. Le mot kufrihim porte les deux sens en arriere-plan."
            }
          }
        }
      },
      {
        word_key: "qll", position: 7, sense_chosen: "etre peu",
        analysis_axes: {
          concept_chosen: "Quantité/Rareté",
          concepts: {
            "Quantité/Rareté": {
              status: "retenu",
              senses: ["être peu", "diminuer", "peu nombreux", "rare"],
              proof_ctx: "Le mot qalilan est un nom masculin singulier accusatif de la racine q-l-l. Le Lane's donne « little, few, slight, seldom ». L'accusatif qalilan fonctionne ici comme un adverbe de quantite — « combien peu croient-ils ». La particule fa lie ce resultat a la malediction — peu croient parce qu'ils ont ete maudits.",
              axe1_verset: "Le mot qalilan est la consequence de la malediction. La structure du verset est causale : pretention fausse (coeurs enveloppes), refutation (malediction a cause du rejet), consequence (peu de foi). Le peu de foi n'est pas un accident — c'est le resultat d'un choix de dissimulation. La particule fa (donc, alors) marque la consequence logique.",
              axe2_voisins: "Le verset 87 montrait l'arrogance face aux prophetes. Ce verset 88 conclut par le peu de foi. Le verset 89 montrera le mecanisme precis — ils reconnaissent la verite puis la rejettent. Le « peu » de ce verset sera explique par le « rejet delibere » du verset 89.",
              axe3_sourate: "La racine q-l-l dans la sourate al-Baqarah designe la rarete et le peu. En 2:41, « ne vendez pas Mes signes pour un prix derisoire (qalil) ». En 2:83, les gens se detournent « sauf un petit nombre (qalil) ». La sourate montre que le peu est lie au choix de sous-evaluer la verite.",
              axe4_coherence: "La racine q-l-l apparait 63 fois dans le Coran. Le peu designe souvent la foi, les croyants, ou la valeur accordee aux signes divins. En 9:9, « ils ont vendu les signes de Dieu pour un prix derisoire ». Le peu est un diagnostic — il mesure l'ecart entre ce qui est du et ce qui est donne.",
              axe5_frequence: "Pour la mission du khalifa, le peu de foi est un echec de la mission. Le khalifa qui croit peu ou qui sous-evalue les signes divins ne remplit pas son role. La rarete de la foi parmi les enfants d'Israel est le symptome de leur echec collectif."
            }
          }
        }
      },
      {
        word_key: "amn", position: 9, sense_chosen: "croire",
        analysis_axes: {
          concept_chosen: "Foi/Adhésion",
          concepts: {
            "Foi/Adhésion": {
              status: "retenu",
              senses: ["croyant", "confirmer", "accepter comme vrai", "croire", "avoir la foi"],
              proof_ctx: "Le verbe yu'minuuna est un inaccompli 3MP de la racine a-m-n. Le Lane's donne « they believe, they have faith, they hold to be true ». La forme IV (af'ala) du verbe amana signifie « rendre sur, confirmer, avoir la foi ». Le pronom suffixe 3MP designe les enfants d'Israel. L'inaccompli indique un etat continu — ils ne croient pas de maniere persistante.",
              axe1_verset: "Le verbe yu'minuuna cloture le verset par le diagnostic — peu croient. La foi est ce qui manque aux enfants d'Israel. Le verset oppose la pretention (coeurs enveloppes) a la realite (malediction pour cause de dissimulation). La consequence est le peu de foi — la malediction prive de la capacite de croire pleinement.",
              axe2_voisins: "Le verset 87 montrait l'arrogance et la violence. Ce verset 88 conclut par le peu de foi. Le verset 89 ajoutera que cette incredulite persiste meme quand ils reconnaissent la verite. La foi est le critere central — son absence explique tous les comportements decrits.",
              axe3_sourate: "La racine a-m-n est centrale dans la sourate al-Baqarah. En 2:3-4, les pieux sont definis par la foi. En 2:6, les rejeteurs ne croient pas qu'on les avertisse ou non. En 2:75-76, certains croyaient puis deformaient la verite. La foi est le fil conducteur qui separe les groupes dans la sourate.",
              axe4_coherence: "La racine a-m-n apparait 879 fois dans le Coran. La foi (iman) est le critere fondamental de distinction entre les humains dans le Coran. Le verbe amana forme IV porte le sens de « rendre sur » — croire c'est considerer comme sur, fiable, vrai. L'incredulite est l'inverse — considerer comme non fiable.",
              axe5_frequence: "Pour la mission du khalifa, la foi est la condition de la mission. Le khalifa croit en sa mission et en Celui qui l'a envoye. Les enfants d'Israel dont la foi est rare ne peuvent pas remplir leur role de temoins de la verite."
            },
            "Sécurité/Confiance": {
              status: "probable",
              senses: ["faire confiance", "être en sécurité", "confier", "fidèle", "lieu sûr", "se sentir en sécurité"],
              proof_ctx: "Le sens premier de a-m-n est la securite et la confiance. Croire c'est faire confiance — la foi est un acte de confiance envers Dieu. Les enfants d'Israel manquent de confiance en Dieu, ce qui se manifeste par leur peu de foi."
            }
          }
        }
      }
    ]
  },

  // =====================================================
  // VERSET 2:89
  // verse_id=96, analysis_id=454
  // "Et lorsqu'un Livre leur vint de la part de Dieu, confirmant ce
  //  qu'ils avaient, alors qu'ils cherchaient auparavant la victoire
  //  sur les rejeteurs — lorsque leur vint ce qu'ils reconnaissaient,
  //  ils le rejetèrent. La malédiction de Dieu est sur les rejeteurs."
  // =====================================================
  89: {
    verse_id: 96,
    analysis_id: 454,
    translation_arab: "Et lorsqu'un Livre leur vint de la part de Dieu, confirmant ce qu'ils avaient, alors qu'ils cherchaient auparavant la victoire sur les rejeteurs — lorsque leur vint ce qu'ils reconnaissaient, ils le rejeterent. La malediction de Dieu est sur les rejeteurs.",
    full_translation: "Et lorsqu'un Livre leur vint de la part de Dieu, confirmant ce qu'ils avaient [deja], alors qu'ils etaient auparavant a chercher la victoire sur ceux qui dissimulaient — lorsque leur vint ce qu'ils reconnaissaient, ils le dissimulerent. Alors la malediction de Dieu [est] sur ceux qui dissimulent.",
    translation_explanation: `§DEMARCHE§
Ce verset decrit le paradoxe des enfants d'Israel qui attendaient le Livre confirmatif puis l'ont rejete lorsqu'il est arrive. La particule **lamma** avec le verbe **ja'ahum** est un accompli 3MS avec pronom 3MP de la racine j-y-a. Le Lane's donne « it/he came to them ». Le Livre est venu a eux — c'est un evenement passe. Le nom **kitabun** est un nom masculin singulier nominatif indefini de la racine k-t-b. Le Lane's donne « a book, a scripture, a written document ». Le tanwin indefini (kitabun) n'empeche pas l'identification — il s'agit du Coran. Le mot **'indi** est un nom de la racine '-n-d. Le Lane's donne « from the presence of, from ». Le Livre vient de la part de Dieu — son origine est divine. Le nom **Allahi** est le nom propre de la divinite au genitif de la racine a-l-h. Le Lane's donne « God ». L'adjectif **musaddiqun** est un participe actif forme II nominatif de la racine s-d-q. Le Lane's donne « confirming, corroborating, attesting the truth of ». La forme II (taf'il) est un intensif — le Livre confirme pleinement. Le verbe **kanuu** est un accompli 3MP de la racine k-w-n. Le Lane's donne « they were, they used to be ». L'accompli indique un etat passe — ils etaient ainsi auparavant. Le nom **qablu** est un nom de la racine q-b-l. Le Lane's donne « before, formerly ». Min qablu signifie « auparavant ». Le verbe **yastaftihuna** est un inaccompli 3MP forme X de la racine f-t-h. Le Lane's donne « they sought victory, they sought aid, they invoked triumph ». La forme X (istaf'ala) signifie « chercher, demander » — ils cherchaient la victoire sur les rejeteurs en invoquant le prophete a venir. Le verbe **kafaruu** (premiere occurrence) est un accompli 3MP de la racine k-f-r. Le Lane's donne « they covered, they rejected ». Designe ceux qui dissimulaient la verite. Le verbe **ja'ahum** (seconde occurrence) est un accompli 3MS avec pronom 3MP de la racine j-y-a. Le Lane's donne « there came to them ». Deuxieme venue — ce qu'ils reconnaissaient est venu. Le verbe **'arafuu** est un accompli 3MP de la racine '-r-f. Le Lane's donne « they knew, they recognized ». La reconnaissance implique une connaissance prealable — ils savaient ce que c'etait. Le verbe **kafaruu** (seconde occurrence) est un accompli 3MP de la racine k-f-r. Le Lane's donne « they rejected, they covered ». Malgre la reconnaissance, ils ont dissimule. Le nom **la'natu** est un nom feminin singulier nominatif de la racine l-'-n. Le Lane's donne « curse, exclusion from mercy ». La malediction est la consequence du rejet. Le nom **Allahi** au genitif indique que la malediction vient de Dieu. Le nom **al-kafirina** est un participe actif pluriel defini de la racine k-f-r. Le Lane's donne « those who cover, those who reject ». Designe ceux qui dissimulent de maniere persistante.

§JUSTIFICATION§
**vint** — Le sens retenu est « venir ». Le verbe ja'ahum designe l'arrivee du Livre. C'est le seul sens de la racine j-y-a.

**Livre** — Le sens retenu est « livre ». Le mot kitabun designe l'ecriture revelee. L'alternative « prescrire » est ecartee car le mot est un nom au nominatif singulier, pas un verbe.

**aupres de** — Le sens retenu est « aupres de ». Le mot 'indi localise l'origine du Livre. L'alternative « opinion » est ecartee car le contexte est spatial (de la part de).

**Dieu** — Le sens retenu est « Dieu ». Le nom Allah designe la divinite unique.

**confirmant** — Le sens retenu est « confirmer ». Le participe musaddiqun designe la confirmation de la verite. L'alternative « don » est ecartee car le mot est un participe actif, pas un nom d'action.

**etaient** — Le sens retenu est « etre ». Le verbe kanuu indique l'etat passe. C'est le seul concept retenu pour cette racine.

**avant** — Le sens retenu est « avant ». Le mot qablu avec min signifie « auparavant ». L'alternative « recevoir » est ecartee car le mot est ici un adverbe de temps, pas un verbe de reception.

**rejeteurs** — Le sens retenu est « couvrir ». Le mot kafaruu designe ceux qui dissimulent la verite. L'alternative « expier » est ecartee car le contexte est le rejet, pas la reparation.

**reconnurent** — Le sens retenu est « connaitre ». Le verbe 'arafuu designe la reconnaissance de ce qui est connu. L'alternative « coutume » est ecartee car le contexte est celui de la connaissance, pas de l'usage.

**malediction** — Le sens retenu est « malediction ». Le nom la'natu designe l'exclusion de la misericorde. C'est le seul concept pour cette racine.

§CRITIQUE§
**reconnaissance puis rejet** — Le paradoxe central du verset est que les enfants d'Israel reconnaissaient la verite (ma 'arafuu) puis la rejetaient (kafaruu bihi). Ce n'est pas de l'ignorance mais un rejet delibere de ce qu'on sait etre vrai. Le verbe 'arafuu implique une connaissance prealable et une identification certaine.
**victoire invoquee puis refusee** — Ils cherchaient la victoire (yastaftihuna) sur les rejeteurs en invoquant le prophete a venir. Quand ce prophete est venu, ils l'ont rejete. L'outil de leur victoire escomptee est devenu l'objet de leur rejet.`,
    segments: [
      { fr: "et lorsque", phon: "wa-lamma", arabic: "وَلَمَّا", is_particle: true, position: 0 },
      { fr: "leur vint", pos: "verbe", phon: "ja'ahum", arabic: "جَآءَهُمْ", word_key: "jya", is_particle: false, sense_retenu: "venir", position: 1 },
      { fr: "un Livre", pos: "nom", phon: "kitabun", arabic: "كِتَٰبٌ", word_key: "ktb", is_particle: false, sense_retenu: "livre", position: 2 },
      { fr: "de la part de", phon: "min", arabic: "مِّنْ", is_particle: true, position: 3 },
      { fr: "aupres de", pos: "nom", phon: "'indi", arabic: "عِندِ", word_key: "end", is_particle: false, sense_retenu: "aupres de", position: 4 },
      { fr: "Dieu", pos: "nom", phon: "Allahi", arabic: "ٱللَّهِ", word_key: "alh", is_particle: false, sense_retenu: "Dieu", position: 5 },
      { fr: "confirmant", pos: "adjectif", phon: "musaddiqun", arabic: "مُصَدِّقٌ", word_key: "sdq", is_particle: false, sense_retenu: "confirmer", position: 6 },
      { fr: "ce que", phon: "li-ma", arabic: "لِّمَا", is_particle: true, position: 7 },
      { fr: "ils avaient", phon: "ma'ahum", arabic: "مَعَهُمْ", is_particle: true, position: 8 },
      { fr: "et ils etaient", pos: "verbe", phon: "wa-kanuu", arabic: "وَكَانُوا۟", word_key: "knw", is_particle: false, sense_retenu: "etre", position: 9 },
      { fr: "de", phon: "min", arabic: "مِن", is_particle: true, position: 10 },
      { fr: "avant", pos: "nom", phon: "qablu", arabic: "قَبْلُ", word_key: "qbl", is_particle: false, sense_retenu: "avant", position: 11 },
      { fr: "cherchant la victoire", pos: "verbe", phon: "yastaftihuna", arabic: "يَسْتَفْتِحُونَ", is_particle: true, position: 12 },
      { fr: "sur", phon: "'ala", arabic: "عَلَY", is_particle: true, position: 13 },
      { fr: "ceux qui", phon: "alladhina", arabic: "ٱلَّذِينَ", is_particle: true, position: 14 },
      { fr: "rejetaient", pos: "verbe", phon: "kafaruu", arabic: "كَفَرُوا۟", word_key: "kfr", is_particle: false, sense_retenu: "couvrir", position: 15 },
      { fr: "et lorsque", phon: "fa-lamma", arabic: "فَلَمَّا", is_particle: true, position: 16 },
      { fr: "leur vint", pos: "verbe", phon: "ja'ahum", arabic: "جَآءَهُم", word_key: "jya", is_particle: false, sense_retenu: "venir", position: 17 },
      { fr: "ce que", phon: "ma", arabic: "مَّا", is_particle: true, position: 18 },
      { fr: "ils reconnaissaient", pos: "verbe", phon: "'arafuu", arabic: "عَرَفُوا۟", word_key: "e r f", is_particle: false, sense_retenu: "connaitre", position: 19 },
      { fr: "ils le rejeterent", pos: "verbe", phon: "kafaruu", arabic: "كَفَرُوا۟", word_key: "kfr", is_particle: false, sense_retenu: "couvrir", position: 20 },
      { fr: "de lui", phon: "bihi", arabic: "بِهِ.", is_particle: true, position: 21 },
      { fr: "la malediction", pos: "nom", phon: "fa-la'natu", arabic: "فَلَعْنَةُ", word_key: "len", is_particle: false, sense_retenu: "malediction", position: 22 },
      { fr: "de Dieu", pos: "nom", phon: "Allahi", arabic: "ٱللَّهِ", word_key: "alh", is_particle: false, sense_retenu: "Dieu", position: 23 },
      { fr: "sur", phon: "'ala", arabic: "عَلَY", is_particle: true, position: 24 },
      { fr: "les rejeteurs", pos: "nom", phon: "al-kafirina", arabic: "ٱلْكَٰفِرِينَ", word_key: "kfr", is_particle: false, sense_retenu: "couvrir", position: 25 }
    ],
    words: [
      {
        word_key: "jya", position: 1, sense_chosen: "venir",
        analysis_axes: {
          concept_chosen: "Venue",
          concepts: {
            "Venue": {
              status: "retenu",
              senses: ["venir"],
              proof_ctx: "Le verbe ja'ahum est un accompli 3MS avec pronom 3MP de la racine j-y-a. Le Lane's donne « it came to them, he came to them ». Le Livre est venu a eux — la venue est un acte divin d'envoi. Le pronom suffixe -hum montre que les destinataires sont les enfants d'Israel. Le verbe j-y-a designe la venue physique et la survenue d'un evenement.",
              axe1_verset: "Le verbe ja'ahum apparait deux fois dans le verset — une fois pour la venue du Livre et une fois pour la venue de ce qu'ils reconnaissaient. La double occurrence structure le verset en deux temps : la premiere venue apporte le Livre, la seconde venue rend inexcusable le rejet. La repetition souligne que la verite est venue a eux — ils n'avaient pas besoin de la chercher.",
              axe2_voisins: "Le verset 88 montrait la pretention des coeurs enveloppes. Ce verset 89 montre que la verite est venue quand meme — l'enveloppe n'a pas empeche la venue du Livre. Le verset 90 montrera les consequences du rejet. La venue est le premier moment du drame — la verite arrive, ils la reconnaissent, puis la rejettent.",
              axe3_sourate: "La racine j-y-a dans la sourate al-Baqarah designe l'arrivee des signes et des revelations. En 2:87, « Nous avons donne a Moise le Livre et envoye apres lui des messagers ». En 2:92, « Moise vous est venu avec les preuves claires ». La sourate montre que les signes sont venus de maniere repetee — le rejet n'est pas du a un manque de signes.",
              axe4_coherence: "La racine j-y-a apparait 278 fois dans le Coran. La venue designe l'arrivee des messagers, des livres, des signes et du Jour dernier. En 6:5, « il leur vint des nouvelles de ce dont ils se moquaient ». La venue est toujours un moment de verite — ce qui vient exige une reponse.",
              axe5_frequence: "Pour la mission du khalifa, la venue de la verite est le debut de la responsabilite. Le khalifa a qui la verite est venue ne peut pas pretendre l'ignorance. Les enfants d'Israel a qui le Livre est venu sont responsables de leur reponse a cette venue."
            }
          }
        }
      },
      {
        word_key: "ktb", position: 2, sense_chosen: "livre",
        analysis_axes: {
          concept_chosen: "Livre/Écrit",
          concepts: {
            "Livre/Écrit": {
              status: "retenu",
              senses: ["contrat de mariage", "contrat d'affranchissement", "écriture révélée", "livre", "registre", "contrat écrit"],
              proof_ctx: "Le mot kitabun est un nom masculin singulier nominatif indefini de la racine k-t-b. Le Lane's donne « a book, a scripture, a written revelation ». Le tanwin nominatif (kitabun) presente le Livre comme sujet de la venue. Le kitab designe ici le Coran — l'ecriture revelee qui confirme les Ecritures precedentes.",
              axe1_verset: "Le mot kitabun est le sujet du verbe ja'ahum — un Livre leur est venu. Le Livre est qualifie de musaddiqun (confirmant) — il confirme ce qu'ils avaient deja. Le paradoxe est que le Livre qu'ils attendaient et qui confirmait le leur est devenu l'objet de leur rejet. Le Livre est a la fois confirmatif et rejete.",
              axe2_voisins: "Le verset 87 mentionnait le Livre donne a Moise. Ce verset 89 mentionne le Livre venu de Dieu (le Coran) qui confirme ce qu'ils avaient. La continuite des Livres est un argument contre le rejet — si le nouveau confirme l'ancien, le rejeter c'est rejeter l'ancien aussi.",
              axe3_sourate: "La racine k-t-b est centrale dans la sourate al-Baqarah. En 2:2, « Ce Livre (al-kitab), nul doute en lui ». En 2:44, « vous lisez le Livre (al-kitab) et vous ne raisonnez pas ? ». La sourate montre que le Livre est a la fois un don et un test — il revele la verite et expose le rejet.",
              axe4_coherence: "La racine k-t-b apparait 319 fois dans le Coran. Le kitab designe l'ecriture revelee dans toutes ses formes — Torah, Evangile, Coran. Le Coran se presente comme le confirmateur final. En 3:3, « Il a fait descendre le Livre avec la verite, confirmant ce qui le precedait ». La chaine des Livres est une preuve de coherence divine.",
              axe5_frequence: "Pour la mission du khalifa, le Livre est l'instrument de la guidance. Le khalifa recoit le Livre et agit en consequence. Les enfants d'Israel qui avaient le Livre et qui ont rejete le Livre confirmatif ont trahi leur mission de gardiens de la revelation."
            },
            "Écriture/Inscription": {
              status: "probable",
              senses: ["écrire", "dicter", "copier un livre", "art de l'écriture", "scribe", "école", "demander d'écrire", "écrire à quelqu'un", "s'inscrire", "savant", "enseignant", "vendeur de livres"],
              proof_ctx: "Le sens d'ecriture est le sens premier de k-t-b — l'acte d'ecrire. Le Livre est le resultat de l'ecriture divine — ce qui est ecrit, prescrit, consigne. Le lien entre l'ecriture et le livre est direct."
            }
          }
        }
      },
      {
        word_key: "end", position: 4, sense_chosen: "aupres de",
        analysis_axes: {
          concept_chosen: "Proximité/Présence",
          concepts: {
            "Proximité/Présence": {
              status: "retenu",
              senses: ["auprès de", "chez", "près de"],
              proof_ctx: "Le mot 'indi est un nom de la racine '-n-d. Le Lane's donne « at, with, from the presence of ». La construction min 'indi Allahi signifie « de la part de Dieu, de la presence de Dieu ». Le Livre vient de la proximite de Dieu — son origine est divine et directe.",
              axe1_verset: "Le mot 'indi precise l'origine du Livre — de la part de Dieu. La construction min 'indi (de la part de) souligne l'origine divine directe. Le Livre n'est pas une invention humaine — il vient de la presence meme de Dieu. Cette precision rend le rejet encore plus grave — rejeter un Livre venu de Dieu est plus grave que rejeter un livre humain.",
              axe2_voisins: "Le verset 87 mentionnait les prophetes envoyes par Dieu. Ce verset 89 precise que le Livre vient de la part de Dieu. La source divine est reitereee pour souligner l'autorite du Livre. Le rejet d'un envoi divin est un affront a Dieu directement.",
              axe3_sourate: "La racine '-n-d dans la sourate al-Baqarah designe la proximite et la provenance. En 2:79, certains ecrivent le Livre « de leurs mains » puis disent « cela vient de la part de Dieu (min 'indi Allahi) ». Le verset 89 utilise la meme expression pour le vrai Livre — la sourate oppose le faux (ecrit par les hommes pretendant venir de Dieu) au vrai (venant reellement de Dieu).",
              axe4_coherence: "La racine '-n-d apparait 199 fois dans le Coran. L'expression min 'indi Allahi est recurrente pour designer ce qui vient de Dieu. En 3:78, certains deforment le Livre puis disent que c'est de la part de Dieu. La provenance divine est le critere d'autorite — ce qui vient de Dieu est vrai.",
              axe5_frequence: "Pour la mission du khalifa, la provenance divine est la source de l'autorite. Le khalifa recoit ce qui vient de la part de Dieu et l'applique. Rejeter ce qui vient de la proximite de Dieu est rejeter la source meme de la mission."
            }
          }
        }
      },
      {
        word_key: "alh", position: 5, sense_chosen: "Dieu",
        analysis_axes: {
          concept_chosen: "Divinité",
          concepts: {
            "Divinité": {
              status: "retenu",
              senses: ["divinité", "exclamation divine", "divinité (concept)", "théologie", "oui certes", "Dieu"],
              proof_ctx: "Le nom Allahi est le nom propre de la divinite au genitif de la racine a-l-h. Le Lane's donne « God ». Allah est le complement de 'indi — le Livre vient de la part de Dieu. Le genitif marque l'appartenance et l'origine."
            },
            "Détresse": {
              status: "nul",
              senses: ["être perplexe", "se lamenter"],
              proof_ctx: "Le sens de detresse est un sens marginal de a-l-h. Le contexte est clairement le nom propre de Dieu au genitif."
            }
          }
        }
      },
      {
        word_key: "sdq", position: 6, sense_chosen: "confirmer",
        analysis_axes: {
          concept_chosen: "Vérité/Sincérité",
          concepts: {
            "Vérité/Sincérité": {
              status: "retenu",
              senses: ["dire vrai", "vrai", "sincère", "confirmer"],
              proof_ctx: "Le mot musaddiqun est un participe actif forme II nominatif de la racine s-d-q. Le Lane's donne « confirming, corroborating, attesting as true ». La forme II (saddaqa) signifie « confirmer la verite de quelque chose ». Le participe actif montre que le Livre confirme activement — il n'est pas passif mais confirmateur.",
              axe1_verset: "Le mot musaddiqun qualifie le Livre — un Livre confirmant ce qu'ils avaient. La confirmation est l'argument central — le Coran ne contredit pas la Torah mais la confirme. Ce fait rend le rejet inexcusable — on ne rejette pas ce qui confirme ce qu'on possede deja. La confirmation est le pont entre l'ancien et le nouveau.",
              axe2_voisins: "Le verset 87 mentionnait le Livre de Moise. Ce verset 89 montre que le nouveau Livre confirme l'ancien. Le verset 90 montrera les consequences du rejet. La confirmation etablit la continuite prophetique — rejeter le Coran c'est rejeter la Torah qu'il confirme.",
              axe3_sourate: "La racine s-d-q dans la sourate al-Baqarah traite de la verite et de la confirmation. En 2:41, « croyez en ce que J'ai fait descendre, confirmant (musaddiqan) ce que vous avez ». En 2:91, « Croyez en ce que Dieu a fait descendre. Ils dirent : Nous croyons en ce qui a ete fait descendre sur nous ». La sourate montre que la confirmation est reciproque — chaque Livre confirme le precedent.",
              axe4_coherence: "La racine s-d-q apparait 155 fois dans le Coran. Le concept de confirmation (tasdiq) est fondamental — le Coran se definit comme musaddiq (confirmateur) des Ecritures precedentes. En 5:48, « Nous t'avons fait descendre le Livre avec la verite, confirmant ce qui le precedait ». La confirmation est la preuve de l'unite divine.",
              axe5_frequence: "Pour la mission du khalifa, la confirmation est la continuite de la verite. Le khalifa reconnait que la verite est une chaine continue — chaque revelation confirme la precedente. Rejeter le maillon suivant c'est briser la chaine entiere."
            }
          }
        }
      },
      {
        word_key: "knw", position: 9, sense_chosen: "etre",
        analysis_axes: {
          concept_chosen: "Existence/Devenir",
          concepts: {
            "Existence/Devenir": {
              status: "retenu",
              senses: ["être", "devenir", "exister"],
              proof_ctx: "Le verbe kanuu est un accompli 3MP de la racine k-w-n. Le Lane's donne « they were, they used to be ». L'accompli avec l'inaccompli yastaftihuna forme une construction de continuite dans le passe — ils etaient (constamment) a chercher la victoire. Le verbe kana situe l'action dans le passe et donne le contexte historique.",
              axe1_verset: "Le verbe kanuu introduit le contexte passe — ils etaient auparavant a chercher la victoire sur les rejeteurs. La construction kanuu + inaccompli indique une action repetee dans le passe. Le contraste est entre ce qu'ils faisaient avant (chercher la victoire) et ce qu'ils font maintenant (rejeter). Le verbe kana etablit la rupture temporelle qui rend le rejet paradoxal.",
              axe2_voisins: "Le verset 88 montrait leur pretention presente (coeurs enveloppes). Ce verset 89 revele leur comportement passe (chercher la victoire par la prophetie a venir). Le verset 90 montrera les consequences. Le contraste passe/present est central — ils etaient croyants en attente, ils sont devenus rejeteurs.",
              axe3_sourate: "La racine k-w-n dans la sourate al-Baqarah situe les etats et les transformations. En 2:34, « Sois — et il est (kun fa-yakun) ». En 2:75, « un groupe d'entre eux entendait la parole de Dieu puis la deformait ». La sourate montre les transformations — de l'etat initial a l'etat final.",
              axe4_coherence: "La racine k-w-n apparait plus de 1300 fois dans le Coran. Le verbe kana est le verbe d'etat par excellence — il situe les etres dans le temps. La construction kanuu + inaccompli est un procede narratif pour decrire les habitudes passees. Le Coran utilise kana pour montrer que les gens changent — pour le meilleur ou pour le pire.",
              axe5_frequence: "Pour la mission du khalifa, l'etre dans le temps est le cadre de la mission. Le khalifa est dans un etat transitoire — il etait, il est, il sera. Les enfants d'Israel etaient dans l'attente puis sont passes au rejet — leur etre a change de direction."
            }
          }
        }
      },
      {
        word_key: "qbl", position: 11, sense_chosen: "avant",
        analysis_axes: {
          concept_chosen: "Antériorité/Passé",
          concepts: {
            "Antériorité/Passé": {
              status: "retenu",
              senses: ["avant", "auparavant", "ancien", "devant"],
              proof_ctx: "Le mot qablu est un nom de la racine q-b-l. Le Lane's donne « before, formerly, previously ». La construction min qablu signifie « auparavant, precedemment ». Le mot situe l'action dans le temps passe — ils cherchaient la victoire avant la venue du Livre. Le sens d'anteriorite est clairement temporel dans ce contexte.",
              axe1_verset: "Le mot qablu situe le comportement dans le passe — avant la venue du Livre, ils cherchaient la victoire sur les rejeteurs en invoquant le prophete a venir. Le « avant » cree le contraste avec le « apres » implicite — apres la venue, ils ont rejete. L'anteriorite rend le rejet paradoxal — ce qu'ils attendaient est venu et ils l'ont rejete.",
              axe2_voisins: "Le verset 88 presentait le present (pretention des coeurs enveloppes). Ce verset 89 revele le passe (attente et recherche de victoire) et le resultat (rejet). Le mot qablu est la charniere temporelle qui montre le changement d'attitude.",
              axe3_sourate: "La racine q-b-l dans la sourate al-Baqarah traite de l'anteriorite et de la direction. En 2:142, la qibla (direction de priere) est un derive de la meme racine. En 2:176, « ce que Dieu a fait descendre du Livre ». Le sens d'anteriorite situe les evenements dans la chronologie de la revelation.",
              axe4_coherence: "La racine q-b-l apparait 64 fois dans le Coran. Le sens d'anteriorite (qabla, min qablu) est frequent pour situer les evenements. En 14:9, « ne vous est-il pas parvenu la nouvelle de ceux qui etaient avant vous ? ». Le Coran utilise l'anteriorite pour etablir des precedents et tirer des lecons.",
              axe5_frequence: "Pour la mission du khalifa, l'anteriorite est la memoire de la mission. Le khalifa connait ce qui s'est passe avant — les precedents, les erreurs, les reussites. Les enfants d'Israel qui oublient ce qu'ils faisaient avant (chercher la victoire) trahissent leur propre histoire."
            },
            "Réception/Accueil": {
              status: "nul",
              senses: ["recevoir", "accepter", "agréer"],
              proof_ctx: "Le sens de reception est un autre aspect de q-b-l. Ici le mot qablu est utilise comme adverbe de temps (avant), pas comme verbe de reception. La construction min qablu est clairement temporelle."
            }
          }
        }
      },
      {
        word_key: "kfr", position: 15, sense_chosen: "couvrir",
        analysis_axes: {
          concept_chosen: "Couverture/Dissimulation",
          concepts: {
            "Couverture/Dissimulation": {
              status: "retenu",
              senses: ["la nuit qui couvre", "cacher", "couvrir"],
              proof_ctx: "Le verbe kafaruu est un accompli 3MP de la racine k-f-r. Le Lane's donne « they covered, they concealed, they rejected ». Dans ce verset, k-f-r apparait trois fois : kafaruu (ceux sur qui ils cherchaient la victoire, position 15), kafaruu bihi (ils le rejeterent, position 20), et al-kafirina (les rejeteurs, position 25). La triple occurrence montre l'escalade de la dissimulation.",
              axe1_verset: "Le verbe kafaruu a la position 15 designe ceux sur qui les enfants d'Israel cherchaient la victoire — les « dissimulateurs » arabes. A la position 20, kafaruu bihi designe l'acte de rejet du Livre par les enfants d'Israel eux-memes. A la position 25, al-kafirina est le verdict final — la malediction est sur les dissimulateurs. La progression montre que les enfants d'Israel deviennent ce qu'ils combattaient.",
              axe2_voisins: "Le verset 88 contenait bikufrihim (a cause de leur dissimulation). Ce verset 89 triple l'occurrence de k-f-r. Le verset 90 ajoutera encore deux occurrences. La densite de k-f-r dans ces versets montre que la dissimulation est le theme central.",
              axe3_sourate: "La racine k-f-r est la plus presente de la sourate al-Baqarah avec plus de 40 occurrences. La sourate oppose systematiquement les croyants et les dissimulateurs. En 2:6-7, les dissimulateurs sont decrits — « Dieu a scelle leurs coeurs ». Le scellement est la consequence de la dissimulation persistante.",
              axe4_coherence: "La racine k-f-r apparait plus de 500 fois dans le Coran. La dissimulation est l'acte fondamental d'opposition a la verite. Le kafir est d'abord celui qui couvre — la graine dans la terre (57:20), la verite sous le mensonge. La triple occurrence dans un seul verset est significative — elle montre l'omnipresence du rejet.",
              axe5_frequence: "Pour la mission du khalifa, la dissimulation est l'antithese de la mission. Le khalifa revele, le kafir couvre. Les enfants d'Israel qui etaient charges de reveler la verite sont devenus ceux qui la couvrent — l'inversion totale de la mission."
            },
            "Rejet/Ingratitude": {
              status: "probable",
              senses: ["être ingrat", "nier", "renier un bienfait", "rejeter", "mécréant"],
              proof_ctx: "Le rejet est la manifestation concrete de la dissimulation. Kafaruu bihi (ils le rejeterent) est l'acte visible de la dissimulation interieure. L'ingratitude — nier un bienfait recu — est l'aspect moral du rejet."
            }
          }
        }
      },
      {
        word_key: "e r f", position: 19, sense_chosen: "connaitre",
        analysis_axes: {
          concept_chosen: "Connaissance/Reconnaissance",
          concepts: {
            "Connaissance/Reconnaissance": {
              status: "retenu",
              senses: ["connaître", "reconnaître"],
              proof_ctx: "Le verbe 'arafuu est un accompli 3MP de la racine '-r-f. Le Lane's donne « they knew, they recognized, they were acquainted with ». La reconnaissance implique une connaissance prealable — on ne reconnait que ce qu'on connait deja. Les enfants d'Israel reconnaissaient le Livre car il correspondait a ce qui etait annonce dans leurs Ecritures.",
              axe1_verset: "Le verbe 'arafuu est le tournant du verset — lorsque leur vint ce qu'ils reconnaissaient, ils le rejeterent. La reconnaissance (ma'rifa) precede le rejet (kufr). Cela prouve que le rejet n'est pas du a l'ignorance mais a un choix delibere. Le verbe 'arafuu implique une identification certaine — ils savaient exactement ce que c'etait.",
              axe2_voisins: "Le verset 88 montrait la pretention d'incapacite (coeurs enveloppes). Ce verset 89 detruit cette excuse — s'ils reconnaissent, leurs coeurs ne sont pas enveloppes. Le verset 90 montrera que le rejet est motive par l'envie, pas par l'ignorance. La reconnaissance prouve la capacite et aggrave le rejet.",
              axe3_sourate: "La racine '-r-f dans la sourate al-Baqarah traite de la connaissance et du bien reconnu (ma'ruf). En 2:146, « ceux a qui Nous avons donne le Livre le reconnaissent (ya'rifunahu) comme ils reconnaissent leurs propres fils ». La sourate montre que la reconnaissance est acquise — le rejet est un choix contre la connaissance.",
              axe4_coherence: "La racine '-r-f apparait 71 fois dans le Coran. Le mot ma'ruf (le bien reconnu) est le standard moral coranique — ce qui est reconnu comme bien par tous. Le verbe 'arafa designe la connaissance par experience et reconnaissance. En 47:6, Dieu fera reconnaitre aux croyants le Paradis. La reconnaissance est un signe de verite.",
              axe5_frequence: "Pour la mission du khalifa, la reconnaissance est le devoir de temoignage. Le khalifa reconnait la verite et temoigne en sa faveur. Les enfants d'Israel qui reconnaissent puis rejettent trahissent le temoignage — ils savent et nient ce qu'ils savent."
            },
            "Convention/Usage": {
              status: "nul",
              senses: ["coutume (urf)", "le bien reconnu (maaruf)"],
              proof_ctx: "Le sens de convention et d'usage est un sens derive de '-r-f. Ici le verbe 'arafuu designe la connaissance et la reconnaissance, pas la coutume. Le contexte est celui de la reconnaissance d'un Livre prophetique."
            }
          }
        }
      },
      {
        word_key: "len", position: 22, sense_chosen: "malediction",
        analysis_axes: {
          concept_chosen: "Malédiction/Exclusion",
          concepts: {
            "Malédiction/Exclusion": {
              status: "retenu",
              senses: ["maudire", "malédiction", "maudit"],
              proof_ctx: "Le nom la'natu est un nom feminin singulier nominatif de la racine l-'-n. Le Lane's donne « curse, imprecation, removal from mercy ». Le nom la'na designe la malediction comme etat — l'exclusion de la misericorde divine. La construction la'natu Allahi (la malediction de Dieu) est le verdict divin sur les rejeteurs.",
              axe1_verset: "Le nom la'natu cloture le verset par le verdict — la malediction de Dieu est sur les rejeteurs. Apres la description du paradoxe (reconnaissance puis rejet), la conclusion est la malediction. La particule fa (donc, alors) lie la malediction au rejet precedent — c'est une consequence logique, pas un acte arbitraire.",
              axe2_voisins: "Le verset 88 utilisait le verbe la'anahum (Il les a maudits). Ce verset 89 utilise le nom la'natu (la malediction). Le passage du verbe au nom generalise — ce n'est plus un acte ponctuel mais un etat permanent. La malediction de Dieu est sur les rejeteurs en general, pas seulement sur un groupe specifique.",
              axe3_sourate: "La racine l-'-n dans la sourate al-Baqarah marque l'exclusion de la misericorde. En 2:88-89, la malediction est liee au rejet. En 2:159, « ceux qui cachent — Dieu les maudit et les maudissent ceux qui maudissent ». La malediction est toujours une consequence du rejet et de la dissimulation.",
              axe4_coherence: "La racine l-'-n apparait 41 fois dans le Coran. La malediction divine est reservee aux cas les plus graves — rejet de la verite, meurtre des prophetes, corruption. En 4:47, « avant que Nous n'effacions des visages — ou que Nous ne les maudissions ». La malediction est le dernier recours divin contre le rejet persistant.",
              axe5_frequence: "Pour la mission du khalifa, la malediction est l'exclusion de la mission. Le khalifa maudit perd sa fonction — il est exclu de la misericorde qui nourrit la mission. L'exclusion est le resultat du rejet delibere de la verite."
            }
          }
        }
      }
    ]
  },

  // =====================================================
  // VERSET 2:90
  // verse_id=97, analysis_id=455
  // "Miserable est ce pour quoi ils ont vendu leurs ames — rejeter
  //  ce que Dieu a fait descendre, par envie que Dieu fasse descendre
  //  de Sa grace sur qui Il veut parmi Ses serviteurs. Ils ont encouru
  //  colere sur colere. Et pour les rejeteurs un chatiment humiliant."
  // =====================================================
  90: {
    verse_id: 97,
    analysis_id: 455,
    translation_arab: "Miserable est ce pour quoi ils ont vendu leurs ames — rejeter ce que Dieu a fait descendre, par envie que Dieu fasse descendre de Sa grace sur qui Il veut parmi Ses serviteurs. Ils ont encouru colere sur colere. Et pour les rejeteurs un chatiment humiliant.",
    full_translation: "Miserable [est le prix] pour lequel ils ont vendu leurs ames — qu'ils dissimulent ce que Dieu a fait descendre, par transgression [envieuse] que Dieu fasse descendre de Sa grace sur qui Il veut parmi Ses serviteurs. Ils se sont attire colere sur colere. Et pour ceux qui dissimulent, un chatiment humiliant.",
    translation_explanation: `§DEMARCHE§
Ce verset decrit la cause profonde du rejet et ses consequences. Le verbe **bi'sa** est un accompli de blam de la racine b-a-s. Le Lane's donne « wretched is, evil is, vile is ». Le verbe de blame ouvre le verset par un jugement — ce qu'ils ont fait est miserable. Le nom **anfusahum** est un pluriel de nafs avec pronom 3MP de la racine n-f-s. Le Lane's donne « their selves, their souls ». L'ame est l'objet de la vente — ils ont vendu la chose la plus precieuse qu'ils possedent. Le verbe **yakfuruu** est un inaccompli 3MP de la racine k-f-r. Le Lane's donne « they disbelieve, they cover, they reject ». L'inaccompli indique une action continue — ils dissimulent de maniere persistante. Le verbe **anzala** est un accompli 3MS forme IV de la racine n-z-l. Le Lane's donne « He sent down, He revealed ». La forme IV (af'ala) signifie faire descendre — c'est Dieu qui fait descendre la revelation. Le nom **Allahu** est le nom propre de la divinite de la racine a-l-h. Le Lane's donne « God ». Dieu est le sujet de la descente. Le nom **baghyan** est un masdar accusatif de la racine b-gh-y. Le Lane's donne « transgression, envy, insolent wrongdoing ». L'accusatif est un maf'ul li-ajlihi (complement de cause) — par envie, par transgression envieuse. Le verbe **yunazzila** est un inaccompli 3MS forme II subjonctif de la racine n-z-l. Le Lane's donne « He sends down ». La forme II (fa''ala) est intensive — Dieu fait descendre abondamment. Le nom **fadlihi** est un nom masculin singulier genitif avec pronom 3MS de la racine f-d-l. Le Lane's donne « His bounty, His grace, His favor ». La grace est ce que Dieu accorde a qui Il veut. Le nom **'ibadihi** est un pluriel de 'abd avec pronom 3MS de la racine '-b-d. Le Lane's donne « His servants ». Les serviteurs sont les destinataires de la grace. Le verbe **ba'uu** est un accompli 3MP de la racine b-w-a. Le Lane's donne « they incurred, they returned with, they deserved ». L'accompli indique un resultat acquis — ils se sont attire la colere. Le nom **bi-ghadabin** est un nom masculin singulier genitif indefini avec preposition bi de la racine gh-d-b. Le Lane's donne « wrath, anger, indignation ». La premiere colere. Le nom **ghadabin** (seconde occurrence) est le meme mot sans preposition — colere sur colere. Le redoublement indique l'accumulation. Le nom **al-kafirina** est un participe actif pluriel defini de la racine k-f-r. Le Lane's donne « those who cover, those who reject ». Le nom **muhinun** est un participe actif singulier de la racine h-w-n. Le Lane's donne « humiliating, degrading, abasing ». Le chatiment humilie — il ne se contente pas de punir, il degrade.

§JUSTIFICATION§
**miserable** — Le sens retenu est « malheur ». Le verbe bi'sa designe le blame et la misere. L'alternative « force » est ecartee car le contexte est celui du blame, pas de la puissance.

**ames** — Le sens retenu est « ame ». Le mot anfusahum designe leurs propres personnes. L'alternative « souffle » est ecartee car le contexte est celui de la vente de soi-meme, pas de la respiration.

**dissimulent** — Le sens retenu est « couvrir ». Le verbe yakfuruu designe la dissimulation persistante. L'alternative « expier » est ecartee car le contexte est le rejet, pas la reparation.

**fait descendre** — Le sens retenu est « faire descendre ». Le verbe anzala designe la revelation descendue de Dieu. L'alternative « halte » est ecartee car le contexte est la descente de la revelation.

**Dieu** — Le sens retenu est « Dieu ». Le nom Allah designe la divinite unique.

**envie** — Le sens retenu est « transgression ». Le mot baghyan designe la transgression envieuse. L'alternative « chercher » est ecartee car le masdar designe l'etat de transgression, pas l'acte de recherche.

**grace** — Le sens retenu est « faveur ». Le mot fadlihi designe la grace de Dieu. L'alternative « surplus » est ecartee car le contexte est celui du don divin, pas du reste.

**serviteurs** — Le sens retenu est « adorer ». Le mot 'ibadihi designe ceux qui adorent et servent Dieu. L'alternative « asservir » est ecartee car le contexte est celui de la devotion, pas de l'esclavage.

**se sont attire** — Le sens retenu est « retourner ». Le verbe ba'uu designe le retour merite — ils se sont attire ce qu'ils meritent. C'est le seul concept pour cette racine.

**colere** — Le sens retenu est « colere ». Le mot ghadabin designe la colere divine. L'alternative « durete » est ecartee car le contexte est clairement celui de la colere.

**humiliant** — Le sens retenu est « humiliation ». Le mot muhinun designe un chatiment qui humilie. L'alternative « facilite » est ecartee car le contexte est celui de la degradation, pas de la legerete.

§CRITIQUE§
**colere sur colere** — L'expression bi-ghadabin 'ala ghadabin (colere sur colere) indique une accumulation. Les commentateurs divergent sur les deux coleres — la premiere pour avoir rejete la Torah et la seconde pour avoir rejete le Coran, ou la premiere pour le veau d'or et la seconde pour le rejet du prophete. L'essentiel est l'accumulation — le rejet repete accumule les consequences.
**envie comme cause** — Le mot baghyan revele la motivation profonde du rejet — l'envie que Dieu envoie Sa grace a qui Il veut parmi Ses serviteurs. Le rejet n'est pas intellectuel mais emotionnel — ils envient que le prophete ne soit pas issu d'eux. La transgression envieuse est la cause premiere du rejet.`,
    segments: [
      { fr: "miserable est", pos: "verbe", phon: "bi'sama", arabic: "بِئْسَمَا", word_key: "bas", is_particle: false, sense_retenu: "malheur", position: 0 },
      { fr: "ils vendirent", phon: "ishtaraw", arabic: "ٱشْتَرَوْا۟", is_particle: true, position: 1 },
      { fr: "pour", phon: "bihi", arabic: "بِهِ.ٓ", is_particle: true, position: 2 },
      { fr: "leurs ames", pos: "nom", phon: "anfusahum", arabic: "أَنفُسَهُمْ", word_key: "nfs", is_particle: false, sense_retenu: "ame", position: 3 },
      { fr: "que", phon: "an", arabic: "أَن", is_particle: true, position: 4 },
      { fr: "ils dissimulent", pos: "verbe", phon: "yakfuruu", arabic: "يَكْفُرُوا۟", word_key: "kfr", is_particle: false, sense_retenu: "couvrir", position: 5 },
      { fr: "ce que", phon: "bi-ma", arabic: "بِمَآ", is_particle: true, position: 6 },
      { fr: "a fait descendre", pos: "verbe", phon: "anzala", arabic: "أَنزَلَ", word_key: "nzl", is_particle: false, sense_retenu: "faire descendre", position: 7 },
      { fr: "Dieu", pos: "nom", phon: "Allahu", arabic: "ٱللَّهُ", word_key: "alh", is_particle: false, sense_retenu: "Dieu", position: 8 },
      { fr: "par envie", pos: "nom", phon: "baghyan", arabic: "بَغْيًا", word_key: "bghy", is_particle: false, sense_retenu: "transgression", position: 9 },
      { fr: "que", phon: "an", arabic: "أَن", is_particle: true, position: 10 },
      { fr: "fasse descendre", pos: "verbe", phon: "yunazzila", arabic: "يُنَزِّلَ", word_key: "nzl", is_particle: false, sense_retenu: "faire descendre", position: 11 },
      { fr: "Dieu", pos: "nom", phon: "Allahu", arabic: "ٱللَّهُ", word_key: "alh", is_particle: false, sense_retenu: "Dieu", position: 12 },
      { fr: "de", phon: "min", arabic: "مِن", is_particle: true, position: 13 },
      { fr: "Sa grace", pos: "nom", phon: "fadlihi", arabic: "فَضْلِهِ.", word_key: "fdl", is_particle: false, sense_retenu: "faveur", position: 14 },
      { fr: "sur", phon: "'ala", arabic: "عَلَYٰ", is_particle: true, position: 15 },
      { fr: "qui", phon: "man", arabic: "مَن", is_particle: true, position: 16 },
      { fr: "Il veut", phon: "yasha'u", arabic: "يَشَآءُ", is_particle: true, position: 17 },
      { fr: "parmi", phon: "min", arabic: "مِنْ", is_particle: true, position: 18 },
      { fr: "Ses serviteurs", pos: "nom", phon: "'ibadihi", arabic: "عِبَادِهِ.", word_key: "ebd", is_particle: false, sense_retenu: "adorer", position: 19 },
      { fr: "ils se sont attire", pos: "verbe", phon: "fa-ba'uu", arabic: "فَبَآءُو", word_key: "bwa", is_particle: false, sense_retenu: "retourner", position: 20 },
      { fr: "une colere", pos: "nom", phon: "bi-ghadabin", arabic: "بِغَضَبٍ", word_key: "ghdb", is_particle: false, sense_retenu: "colere", position: 21 },
      { fr: "sur", phon: "'ala", arabic: "عَلَYٰ", is_particle: true, position: 22 },
      { fr: "une colere", pos: "nom", phon: "ghadabin", arabic: "غَضَبٍ", word_key: "ghdb", is_particle: false, sense_retenu: "colere", position: 23 },
      { fr: "et pour les rejeteurs", pos: "nom", phon: "wa-li-l-kafirina", arabic: "وَلِلْكَٰفِرِينَ", word_key: "kfr", is_particle: false, sense_retenu: "couvrir", position: 24 },
      { fr: "un chatiment", phon: "'adhabun", arabic: "عَذَابٌ", is_particle: true, position: 25 },
      { fr: "humiliant", pos: "adjectif", phon: "muhinun", arabic: "مُّهِينٌ", word_key: "hwn", is_particle: false, sense_retenu: "humiliation", position: 26 }
    ],
    words: [
      {
        word_key: "bas", position: 0, sense_chosen: "malheur",
        analysis_axes: {
          concept_chosen: "Puissance/Malheur",
          concepts: {
            "Puissance/Malheur": {
              status: "retenu",
              senses: ["force", "malheur", "châtiment"],
              proof_ctx: "Le verbe bi'sa est un accompli de blame de la racine b-a-s. Le Lane's donne « wretched is, evil is, vile is what ». La forme bi'sa est un verbe de blame (fi'l dhamm) — il exprime le jugement negatif le plus fort. La racine b-a-s porte les sens de puissance et de malheur — le malheur est la consequence de la puissance retournee contre soi.",
              axe1_verset: "Le verbe bi'sa ouvre le verset par un jugement divin — miserable est ce pour quoi ils ont vendu leurs ames. Le blame porte sur la transaction — echanger la verite contre le rejet est une vente a perte. Le verbe de blame est suivi du complement « ce pour quoi ils ont vendu leurs ames » — la vente est l'image de l'echange desastreux.",
              axe2_voisins: "Le verset 88 montrait la pretention des coeurs enveloppes. Le verset 89 montrait le rejet delibere. Ce verset 90 revele la cause (l'envie) et prononce le verdict (miserable). La progression passe de l'excuse au rejet puis au jugement — chaque verset aggrave la situation.",
              axe3_sourate: "La racine b-a-s dans la sourate al-Baqarah designe la misere et la force. En 2:177, « ceux qui sont patients dans la misere (al-ba'sa) ». La sourate montre que la misere peut etre subie avec patience (les croyants) ou causee par le rejet (les dissimulateurs). Le malheur du verset 90 est auto-inflige.",
              axe4_coherence: "La racine b-a-s apparait 67 fois dans le Coran. Le verbe bi'sa est utilise pour les jugements les plus severes. En 3:187, bi'sa est utilise pour ceux qui vendent le Livre a vil prix. En 18:50, bi'sa est utilise pour blamer ceux qui prennent le diable comme allie. Le blame divin par bi'sa est reserve aux cas les plus graves.",
              axe5_frequence: "Pour la mission du khalifa, le blame par bi'sa est l'echec le plus grave. Le khalifa qui vend sa mission pour un prix derisoire merite le blame le plus severe. La misere est le resultat de l'inversion des valeurs — echanger le precieux contre le vil."
            }
          }
        }
      },
      {
        word_key: "nfs", position: 3, sense_chosen: "ame",
        analysis_axes: {
          concept_chosen: "Âme/Être",
          concepts: {
            "Âme/Être": {
              status: "retenu",
              senses: ["désir", "âme", "personne", "esprit", "soi-même"],
              proof_ctx: "Le mot anfusahum est un pluriel de nafs avec pronom 3MP de la racine n-f-s. Le Lane's donne « their selves, their souls, their persons ». Le pluriel anfus designe les ames au sens de personnes entieres — ce qu'ils ont vendu c'est eux-memes. La vente de l'ame est la pire des transactions — echanger soi-meme contre un benefice illusoire.",
              axe1_verset: "Le mot anfusahum est l'objet de la vente — ils ont vendu leurs ames. La construction ishtaraw bihi anfusahum (ils ont vendu pour cela leurs ames) montre que l'ame est le prix paye. Le commerce est inverse — au lieu d'acheter avec de l'argent, ils vendent ce qui n'a pas de prix. L'ame vendue pour le rejet est la pire des transactions.",
              axe2_voisins: "Le verset 88 accusait les coeurs. Le verset 89 montrait le rejet. Ce verset 90 implique l'ame entiere — ce n'est plus seulement le coeur qui est affecte mais la personne entiere. La progression passe du coeur a l'ame — de la pretention a la vente de soi.",
              axe3_sourate: "La racine n-f-s dans la sourate al-Baqarah traite de l'ame et de la responsabilite. En 2:48, « aucune ame ne sera retribuee pour une autre ». En 2:72, « vous vous etes accuses mutuellement d'une ame ». La sourate montre que chaque ame est responsable d'elle-meme — vendre son ame est un acte individuel.",
              axe4_coherence: "La racine n-f-s apparait 295 fois dans le Coran. L'ame (nafs) est le siege de la responsabilite, du desir et du choix. En 91:7-10, le Coran affirme que l'ame peut etre purifiee ou corrompue. En 12:53, « l'ame est certes instigatrice du mal ». L'ame est le champ de bataille entre la verite et le rejet.",
              axe5_frequence: "Pour la mission du khalifa, l'ame est le sujet de la mission. Le khalifa engage son ame dans la mission — il ne la vend pas pour un prix derisoire. La vente de l'ame est l'abandon total de la mission."
            }
          }
        }
      },
      {
        word_key: "kfr", position: 5, sense_chosen: "couvrir",
        analysis_axes: {
          concept_chosen: "Couverture/Dissimulation",
          concepts: {
            "Couverture/Dissimulation": {
              status: "retenu",
              senses: ["la nuit qui couvre", "cacher", "couvrir"],
              proof_ctx: "Le verbe yakfuruu est un inaccompli 3MP de la racine k-f-r. Le Lane's donne « they cover, they conceal, they reject ». L'inaccompli indique une action continue et persistante — ils ne cessent de dissimuler. Le verbe est ici l'explication de ce qu'ils ont « achete » pour leurs ames — la dissimulation de ce que Dieu a fait descendre.",
              axe1_verset: "Le verbe yakfuruu explicite la vente — ce pour quoi ils ont vendu leurs ames c'est la dissimulation de la revelation. La construction an yakfuruu (qu'ils dissimulent) est le prix de la transaction. L'inaccompli montre que la dissimulation est continue — ce n'est pas un acte ponctuel mais un etat permanent. La vente de l'ame pour la dissimulation est le comble de la perte.",
              axe2_voisins: "Le verset 88 contenait kufrihim (leur dissimulation). Le verset 89 triplait k-f-r. Ce verset 90 continue avec deux occurrences supplementaires. L'accumulation de k-f-r dans les versets 88-90 montre que la dissimulation est le theme unificateur de ce passage.",
              axe3_sourate: "La racine k-f-r traverse toute la sourate al-Baqarah. La dissimulation est le peche fondamental — couvrir la verite que l'on connait. En 2:42, « ne couvrez (talbisuu) pas la verite du mensonge et ne cachez (taktumuu) pas la verite ». La sourate utilise plusieurs racines pour decrire l'acte de cacher la verite.",
              axe4_coherence: "La racine k-f-r est omnipresente dans le Coran. La dissimulation est le premier acte de rejet — avant de rejeter ouvertement, on couvre d'abord interieurement. Le kafir est celui qui a choisi de couvrir ce qu'il sait etre vrai. L'inaccompli yakfuruu montre la persistance de ce choix.",
              axe5_frequence: "Pour la mission du khalifa, la dissimulation est l'antithese de la revelation. Le khalifa est charge de reveler — le dissimuler est l'inverse exact de sa mission. Vendre son ame pour dissimuler c'est acheter l'echec au prix le plus eleve."
            },
            "Rejet/Ingratitude": {
              status: "probable",
              senses: ["être ingrat", "nier", "renier un bienfait", "rejeter", "mécréant"],
              proof_ctx: "Le rejet et l'ingratitude sont les manifestations visibles de la dissimulation. Dissimuler ce que Dieu a fait descendre c'est rejeter Son bienfait et nier Sa grace."
            }
          }
        }
      },
      {
        word_key: "nzl", position: 7, sense_chosen: "faire descendre",
        analysis_axes: {
          concept_chosen: "Descente/Révélation",
          concepts: {
            "Descente/Révélation": {
              status: "retenu",
              senses: ["pluie qui descend", "descendre", "faire descendre", "révéler", "envoyer d'en haut"],
              proof_ctx: "Le verbe anzala est un accompli 3MS forme IV de la racine n-z-l. Le Lane's donne « He sent down, He caused to descend, He revealed ». La forme IV (af'ala) est causative — faire descendre. Le sujet est Dieu (Allahu) — c'est Dieu qui fait descendre la revelation. La descente est le mouvement vertical du divin vers l'humain.",
              axe1_verset: "Le verbe anzala designe ce que Dieu a fait descendre — la revelation. Les enfants d'Israel dissimulent ce que Dieu a fait descendre — ils couvrent la revelation divine. Le verbe n-z-l apparait deux fois dans le verset : anzala (accompli, ce que Dieu a fait descendre) et yunazzila (inaccompli, que Dieu fasse descendre). La double occurrence oppose le fait accompli et le processus continu.",
              axe2_voisins: "Le verset 89 mentionnait le Livre venu de Dieu. Ce verset 90 precise que ce qui est rejete est ce que Dieu a fait descendre. Le verset suivant continuera le theme de la revelation rejetee. La descente est le don divin que les enfants d'Israel refusent.",
              axe3_sourate: "La racine n-z-l dans la sourate al-Baqarah est omnipresente. En 2:2, « Nous avons fait descendre (anzalna) vers toi le Livre ». En 2:4, « ce qui a ete fait descendre vers toi et avant toi ». La sourate situe la revelation comme un mouvement descendant — du ciel vers la terre, de Dieu vers les humains.",
              axe4_coherence: "La racine n-z-l apparait 293 fois dans le Coran. La descente est le mode de transmission de la revelation. En 97:1, « Nous l'avons fait descendre dans la nuit du destin ». En 25:1, « Beni est Celui qui a fait descendre le Discernement ». La descente est un acte de grace — Dieu descend vers les humains, pas l'inverse.",
              axe5_frequence: "Pour la mission du khalifa, la descente est la reception de la guidance. Le khalifa recoit ce qui descend et l'applique. Dissimuler ce qui a ete fait descendre c'est bloquer le canal de la revelation — empecher la guidance d'atteindre sa destination."
            },
            "Halte/Séjour": {
              status: "nul",
              senses: ["s'installer", "faire halte", "hôte", "lieu de descente"],
              proof_ctx: "Le sens de halte est le sens premier de n-z-l — descendre pour faire halte. Le contexte est la descente de la revelation, pas l'installation dans un lieu. Le verbe anzala forme IV est specifiquement causatif — faire descendre d'en haut."
            }
          }
        }
      },
      {
        word_key: "alh", position: 8, sense_chosen: "Dieu",
        analysis_axes: {
          concept_chosen: "Divinité",
          concepts: {
            "Divinité": {
              status: "retenu",
              senses: ["divinité", "exclamation divine", "divinité (concept)", "théologie", "oui certes", "Dieu"],
              proof_ctx: "Le nom Allahu est le nom propre de la divinite de la racine a-l-h. Le Lane's donne « God ». Allah apparait deux fois dans ce verset — comme sujet de anzala (Il a fait descendre) et de yunazzila (Il fait descendre). Dieu est la source de la revelation et de la grace."
            },
            "Détresse": {
              status: "nul",
              senses: ["être perplexe", "se lamenter"],
              proof_ctx: "Le sens de detresse est un sens marginal. Le contexte est le nom propre de Dieu."
            }
          }
        }
      },
      {
        word_key: "bghy", position: 9, sense_chosen: "transgression",
        analysis_axes: {
          concept_chosen: "Transgression/Injustice",
          concepts: {
            "Transgression/Injustice": {
              status: "retenu",
              senses: ["transgresser", "oppression", "injustice"],
              proof_ctx: "Le mot baghyan est un masdar accusatif de la racine b-gh-y. Le Lane's donne « transgression, wrong, insolence, envious wrongdoing, exceeding the proper bounds ». Le masdar accusatif fonctionne comme complement de cause — par transgression. La racine b-gh-y porte l'idee de depasser les bornes, de transgresser par envie ou par insolence.",
              axe1_verset: "Le mot baghyan revele la cause profonde du rejet — la transgression envieuse. Ils n'ont pas rejete par ignorance ou par doute mais par envie que Dieu fasse descendre Sa grace sur qui Il veut. La transgression est le depassement des bornes — envier le choix divin c'est contester la souverainete de Dieu. Le baghyan est la motivation cachee derriere le rejet apparent.",
              axe2_voisins: "Le verset 88 montrait la fausse excuse (coeurs enveloppes). Le verset 89 montrait le paradoxe (reconnaissance puis rejet). Ce verset 90 revele la vraie cause — l'envie transgressive. La progression demonte les couches du rejet : excuse, paradoxe, motivation reelle.",
              axe3_sourate: "La racine b-gh-y dans la sourate al-Baqarah traite de la transgression. En 2:173, « celui qui est contraint sans transgression (baghy) ni exces ». La sourate oppose la transgression a la contrainte — la transgression est un choix, pas une necessite. Le baghyan du verset 90 est un choix delibere de transgresser.",
              axe4_coherence: "La racine b-gh-y apparait 57 fois dans le Coran. La transgression est le depassement des limites fixees par Dieu. En 42:14, les gens du Livre « ne se sont divises qu'apres que la science leur est venue, par transgression (baghyan) entre eux ». Le schema est recurrent — la transgression survient apres la connaissance, pas avant.",
              axe5_frequence: "Pour la mission du khalifa, la transgression est le rejet de la souverainete divine. Le khalifa accepte que Dieu donne Sa grace a qui Il veut. Envier le choix divin c'est rejeter le principe meme de la souverainete — le fondement de la mission du khalifa."
            },
            "Recherche/Quête": {
              status: "nul",
              senses: ["chercher", "désirer"],
              proof_ctx: "Le sens de recherche est un sens de b-gh-y — chercher, desirer. Ici le masdar baghyan porte le sens de transgression envieuse, pas de recherche neutre. Le contexte est pejoratif — la transgression, pas la quete."
            }
          }
        }
      },
      {
        word_key: "fdl", position: 14, sense_chosen: "faveur",
        analysis_axes: {
          concept_chosen: "Excellence/Faveur",
          concepts: {
            "Excellence/Faveur": {
              status: "retenu",
              senses: ["être supérieur", "grâce", "faveur", "mérite"],
              proof_ctx: "Le mot fadlihi est un nom masculin singulier genitif avec pronom 3MS de la racine f-d-l. Le Lane's donne « His bounty, His grace, His favor, His excellence ». Le fadl est le don divin gratuit — ce que Dieu accorde par Sa grace, non par obligation. Le pronom 3MS renvoie a Dieu — c'est Sa grace qu'Il distribue comme Il veut.",
              axe1_verset: "Le mot fadlihi est l'objet de l'envie — ils envient que Dieu fasse descendre de Sa grace sur qui Il veut. La grace divine est souveraine — Dieu la donne a qui Il veut parmi Ses serviteurs. Envier la distribution de la grace c'est contester la souverainete divine. Le fadl est ce qui distingue les elus — c'est un don, pas un du.",
              axe2_voisins: "Le verset 89 montrait le rejet du Livre confirmatif. Ce verset 90 revele que l'envie de la grace divine est la cause du rejet. Le Livre est un fadl (grace) que Dieu a accorde a un autre peuple — l'envie de ce fadl motive le rejet.",
              axe3_sourate: "La racine f-d-l dans la sourate al-Baqarah traite de l'excellence et de la faveur. En 2:47, « Je vous ai favorises (faddaltukum) sur les mondes ». En 2:253, « Nous avons favorise (faddalna) certains messagers sur d'autres ». La sourate montre que la faveur divine est hierarchique — Dieu favorise qui Il veut.",
              axe4_coherence: "La racine f-d-l apparait 104 fois dans le Coran. Le fadl est le don gratuit de Dieu — la grace, la bonte, l'excellence. En 3:74, « Dieu est detenteur de la grace immense ». En 57:29, « la grace est dans la main de Dieu, Il la donne a qui Il veut ». La grace est souveraine — personne ne peut l'exiger.",
              axe5_frequence: "Pour la mission du khalifa, la grace est le don qui rend la mission possible. Le khalifa recoit la grace de Dieu et l'utilise pour sa mission. Envier la grace accordee a autrui c'est meconnaitre que la grace est suffisante pour chacun."
            },
            "Reste/Surplus": {
              status: "nul",
              senses: ["surplus", "reste"],
              proof_ctx: "Le sens de surplus et de reste est un sens premier de f-d-l. Le fadl est ce qui depasse, ce qui est en plus. Le contexte est celui de la grace divine — le surplus que Dieu accorde gratuitement."
            }
          }
        }
      },
      {
        word_key: "ebd", position: 19, sense_chosen: "adorer",
        analysis_axes: {
          concept_chosen: "Adoration/Dévotion",
          concepts: {
            "Adoration/Dévotion": {
              status: "retenu",
              senses: ["vouer un culte", "se dévouer", "servir", "adorer", "adoration", "dévotion"],
              proof_ctx: "Le mot 'ibadihi est un pluriel de 'abd avec pronom 3MS de la racine '-b-d. Le Lane's donne « His servants, His worshippers, His devotees ». Le pluriel 'ibad designe les serviteurs de Dieu — ceux qui Lui vouent un culte. Le pronom 3MS renvoie a Dieu — Ses serviteurs. La grace est distribuee parmi les serviteurs de Dieu.",
              axe1_verset: "Le mot 'ibadihi est le complement de la grace — Dieu fait descendre Sa grace sur qui Il veut parmi Ses serviteurs. Les serviteurs sont le cercle des destinataires possibles de la grace. L'envie porte sur le choix de Dieu parmi Ses propres serviteurs — les enfants d'Israel envient que d'autres serviteurs soient choisis.",
              axe2_voisins: "Le verset 89 montrait le rejet du Livre. Ce verset 90 revele que l'envie porte sur la distribution de la grace parmi les serviteurs. Les enfants d'Israel se consideraient les seuls dignes de la grace — voir d'autres serviteurs choisis les a pousses au rejet.",
              axe3_sourate: "La racine '-b-d dans la sourate al-Baqarah est fondamentale. En 2:21, « Adorez ('ubuduu) votre Seigneur ». En 2:83, « vous n'adorerez ('abduu) que Dieu ». La sourate definit l'adoration comme le rapport fondamental entre l'humain et Dieu. Les serviteurs de Dieu sont ceux qui reconnaissent ce rapport.",
              axe4_coherence: "La racine '-b-d apparait 275 fois dans le Coran. L'adoration est le but de la creation — en 51:56, « Je n'ai cree les djinns et les humains que pour qu'ils M'adorent ». Le serviteur ('abd) est celui qui a accepte sa fonction — adorer et servir. La grace est accordee aux serviteurs sinceres.",
              axe5_frequence: "Pour la mission du khalifa, l'adoration est la mission elle-meme. Le khalifa est un serviteur de Dieu — il adore et sert. Les enfants d'Israel qui envient d'autres serviteurs oublient que tous les serviteurs partagent la meme mission."
            },
            "Servitude/Esclavage": {
              status: "peu_probable",
              senses: ["être humain", "asservir", "aplanir un chemin", "serviteur", "rendre soumis", "esclave"],
              proof_ctx: "Le sens de servitude est lie a l'adoration. Le 'abd est celui qui se soumet — la soumission peut etre forcee (esclavage) ou volontaire (adoration). Ici le contexte est celui de la devotion volontaire — les serviteurs de Dieu sont ceux qui Le servent par choix."
            }
          }
        }
      },
      {
        word_key: "bwa", position: 20, sense_chosen: "retourner",
        analysis_axes: {
          concept_chosen: "Retour/Mérite",
          concepts: {
            "Retour/Mérite": {
              status: "retenu",
              senses: ["retourner", "mériter", "établir"],
              proof_ctx: "Le verbe ba'uu est un accompli 3MP de la racine b-w-a. Le Lane's donne « they returned, they incurred, they deserved, they brought upon themselves ». Le verbe b-w-a designe le retour avec un merite — on revient charge de ce qu'on a merite. L'accompli indique un fait accompli — ils se sont deja attire la colere.",
              axe1_verset: "Le verbe ba'uu est le resultat du rejet — ils se sont attire colere sur colere. La construction ba'uu bi-ghadabin (ils sont revenus avec une colere) montre que la colere est le « bagage » de leur retour. Le doublement ghadabin 'ala ghadabin (colere sur colere) indique l'accumulation — chaque rejet ajoute une colere supplementaire.",
              axe2_voisins: "Le verset 88 annoncait la malediction. Le verset 89 annoncait la malediction sur les rejeteurs. Ce verset 90 ajoute la colere sur colere. La progression montre l'aggravation des consequences — malediction, puis malediction divine, puis colere accumulee.",
              axe3_sourate: "La racine b-w-a dans la sourate al-Baqarah traite du retour merite. En 2:61, « ils se sont attire (ba'uu) la colere de Dieu ». La meme expression ba'uu bi-ghadabin apparait dans les deux versets — l'histoire se repete. La sourate montre que les memes actes produisent les memes consequences.",
              axe4_coherence: "La racine b-w-a apparait 8 fois dans le Coran. Le verbe ba'a designe le retour charge d'un merite (positif ou negatif). En 3:162, « il s'est attire (ba'a) la colere de Dieu ». En 8:16, « il s'est attire (ba'a) la colere de Dieu ». Le retour avec la colere est une consequence recurrente du rejet.",
              axe5_frequence: "Pour la mission du khalifa, le retour est la reddition des comptes. Le khalifa revient charge de ses actes — bons ou mauvais. S'attirer la colere divine c'est revenir avec le pire des bagages."
            }
          }
        }
      },
      {
        word_key: "ghdb", position: 21, sense_chosen: "colere",
        analysis_axes: {
          concept_chosen: "Contraire de al-rida",
          concepts: {
            "Contraire de al-rida": {
              status: "retenu",
              senses: ["être en colère", "contraire de al-rida", "se mettre mutuellement en colère", "excitation du sang du cœur", "accès de colère", "en colère rapidement", "rendre en colère", "devenir en colère progressivement", "objet de colère", "faculté irascible", "perturbé dans les relations", "colère"],
              proof_ctx: "Le mot ghadabin est un nom masculin singulier genitif indefini de la racine gh-d-b. Le Lane's donne « wrath, anger, indignation, the contrary of satisfaction (rida) ». Le ghadab est le contraire de la satisfaction (rida) — c'est l'insatisfaction divine face au rejet. La colere divine n'est pas emotionnelle mais consequentielle — elle est le resultat logique du rejet.",
              axe1_verset: "Le mot ghadabin apparait deux fois — colere sur colere. Le doublement indique l'accumulation des coleres. La premiere colere est liee a un premier rejet, la seconde a un second rejet. La construction bi-ghadabin 'ala ghadabin (avec colere sur colere) montre que chaque rejet ajoute une couche de colere. L'accumulation est le resultat de la persistance dans le rejet.",
              axe2_voisins: "Le verset 88 annoncait la malediction. Le verset 89 annoncait la malediction sur les rejeteurs. Ce verset 90 specifie que la consequence est la colere accumulee. La colere est plus specifique que la malediction — elle est le mecanisme par lequel l'exclusion se manifeste.",
              axe3_sourate: "La racine gh-d-b dans la sourate al-Baqarah traite de la colere divine. En 2:61, « ils se sont attire la colere (ghadab) de Dieu ». En 2:90, la meme colere est doublee. La sourate 1 demande d'eviter « le chemin de ceux qui ont encouru la colere (al-maghdubi) ». Le lien entre la Fatiha et ce passage est direct.",
              axe4_coherence: "La racine gh-d-b apparait 24 fois dans le Coran. La colere divine est toujours une consequence du rejet — elle n'est jamais arbitraire. En 20:81, « Ma colere s'abat, et celui sur qui Ma colere s'abat est perdu ». La colere divine est un seuil — au-dela duquel la perte est certaine.",
              axe5_frequence: "Pour la mission du khalifa, la colere divine est la consequence de l'echec. Le khalifa qui persiste dans le rejet accumule les coleres. Le doublement ghadabin 'ala ghadabin est un avertissement — la persistance dans le rejet aggrave les consequences."
            },
            "Dureté/Matériau": {
              status: "nul",
              senses: ["bouclier en cuir", "vêtement de combat", "peau de chèvre", "peau de poisson", "peau de tête", "peau entre les cornes", "rougeur intense", "épais", "lion", "taureau", "cent chameaux", "éminence", "cuir épais", "roche ronde", "pierre dure"],
              proof_ctx: "Les sens materiels de gh-d-b sont des sens secondaires lies a la durete et a l'intensite. Le contexte est clairement celui de la colere divine, pas d'un materiau."
            }
          }
        }
      },
      {
        word_key: "hwn", position: 26, sense_chosen: "humiliation",
        analysis_axes: {
          concept_chosen: "Humiliation/Mépris",
          concepts: {
            "Humiliation/Mépris": {
              status: "retenu",
              senses: ["humiliation", "être méprisé"],
              proof_ctx: "Le mot muhinun est un participe actif singulier de la racine h-w-n. Le Lane's donne « humiliating, degrading, abasing, that which renders vile ». Le participe actif muhin qualifie le chatiment — c'est un chatiment qui humilie activement. La racine h-w-n porte le sens de rabaissement et de mepris — le chatiment ne se contente pas de punir, il degrade.",
              axe1_verset: "Le mot muhinun qualifie le chatiment final — un chatiment humiliant pour les rejeteurs. L'humiliation est la consequence ultime du rejet. Le chatiment n'est pas seulement douloureux mais degradant — il rabaisse ceux qui se croyaient au-dessus des autres. L'humiliation est le retournement de l'arrogance — ceux qui meprisaient la verite sont meprises par le chatiment.",
              axe2_voisins: "Le verset 88 annoncait la malediction. Le verset 89 prononcait la malediction sur les rejeteurs. Ce verset 90 conclut par le chatiment humiliant. La progression passe de la malediction a la colere puis au chatiment — chaque etape aggrave la consequence.",
              axe3_sourate: "La racine h-w-n dans la sourate al-Baqarah traite de l'humiliation. En 2:85, « la retribution de celui qui fait cela est l'humiliation (khizy) dans la vie d'ici-bas ». La sourate montre que l'humiliation est une retribution proportionnelle — ceux qui se sont eleves par le rejet sont rabaisses par le chatiment.",
              axe4_coherence: "La racine h-w-n apparait 23 fois dans le Coran. Le chatiment muhin (humiliant) est associe aux cas les plus graves de rejet. En 4:14, « celui qui desobeit — un chatiment humiliant ». En 22:57, « un chatiment humiliant ». L'expression 'adhabun muhin est une formule recurrente pour le chatiment des rejeteurs obstines.",
              axe5_frequence: "Pour la mission du khalifa, l'humiliation est le contraire de l'honneur de la mission. Le khalifa honore sa mission — le rejeteur est humilie. L'humiliation du chatiment est proportionnelle a l'arrogance du rejet."
            },
            "Facilité/Légèreté": {
              status: "nul",
              senses: ["être facile"],
              proof_ctx: "Le sens de facilite est un sens de h-w-n — etre facile, leger. Le contexte est celui du chatiment — le sens est l'humiliation, pas la facilite. Le participe muhin est pejoratif — il degrade, pas il facilite."
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
  // ghl f (id=1577) — enveloppe
  { analysis_id: 1577, phrases: [
    { sense: "enveloppe", arabic: "قُلُوبُنَا غُلْفٌ", phon: "quluubuna ghulfun", french: "Nos coeurs sont enveloppes." },
    { sense: "fourreau", arabic: "غِلَافُ السَّيْفِ", phon: "ghilaf al-sayf", french: "Le fourreau de l'epee." },
    { sense: "voile sur le cœur", arabic: "وَقَالُوا قُلُوبُنَا فِي أَكِنَّةٍ", phon: "wa-qaluu quluubuna fi akinnatin", french: "Et ils dirent : nos coeurs sont dans des enveloppes." }
  ]},
  // len (id=680) — malediction
  { analysis_id: 680, phrases: [
    { sense: "maudire", arabic: "لَعَنَهُمُ اللَّهُ بِكُفْرِهِمْ", phon: "la'anahumu Allahu bikufrihim", french: "Dieu les a maudits a cause de leur rejet." },
    { sense: "malédiction", arabic: "فَلَعْنَةُ اللَّهِ عَلَى الْكَافِرِينَ", phon: "fa-la'natu Allahi 'ala al-kafirina", french: "La malediction de Dieu est sur les rejeteurs." },
    { sense: "maudit", arabic: "أُولَئِكَ يَلْعَنُهُمُ اللَّهُ وَيَلْعَنُهُمُ اللَّاعِنُونَ", phon: "ula'ika yal'anuhumu Allahu wa-yal'anuhumu al-la'inuna", french: "Ceux-la, Dieu les maudit et les maudissent les maudisseurs." }
  ]},
  // e r f (id=1187) — connaissance
  { analysis_id: 1187, phrases: [
    { sense: "connaître", arabic: "عَرَفُوا مَا كَانُوا بِهِ يَكْفُرُونَ", phon: "'arafuu ma kanuu bihi yakfuruna", french: "Ils reconnurent ce qu'ils rejetaient." },
    { sense: "reconnaître", arabic: "يَعْرِفُونَهُ كَمَا يَعْرِفُونَ أَبْنَاءَهُمْ", phon: "ya'rifunahu kama ya'rifuna abna'ahum", french: "Ils le reconnaissent comme ils reconnaissent leurs propres fils." },
    { sense: "le bien reconnu", arabic: "وَأْمُرْ بِالْمَعْرُوفِ", phon: "wa'mur bi-l-ma'rufi", french: "Et ordonne le bien reconnu." }
  ]},
  // bas (id=713) — malheur
  { analysis_id: 713, phrases: [
    { sense: "malheur", arabic: "بِئْسَمَا اشْتَرَوْا بِهِ أَنْفُسَهُمْ", phon: "bi'sama ishtaraw bihi anfusahum", french: "Miserable est ce pour quoi ils ont vendu leurs ames." },
    { sense: "force", arabic: "بَأْسُهُمْ بَيْنَهُمْ شَدِيدٌ", phon: "ba'suhum baynahum shadidun", french: "Leur puissance entre eux est intense." },
    { sense: "châtiment", arabic: "فَإِذَا جَاءَ بَأْسُنَا", phon: "fa-idha ja'a ba'suna", french: "Lorsque Notre chatiment arrive." }
  ]},
  // bghy (id=950) — transgression
  { analysis_id: 950, phrases: [
    { sense: "transgression", arabic: "بَغْيًا أَنْ يُنَزِّلَ اللَّهُ مِنْ فَضْلِهِ", phon: "baghyan an yunazzila Allahu min fadlihi", french: "Par transgression envieuse que Dieu fasse descendre de Sa grace." },
    { sense: "oppression", arabic: "إِنَّ اللَّهَ لَا يُحِبُّ الْمُعْتَدِينَ", phon: "inna Allaha la yuhibbu al-mu'tadina", french: "Certes Dieu n'aime pas les transgresseurs." },
    { sense: "injustice", arabic: "وَالَّذِينَ إِذَا أَصَابَهُمُ الْبَغْيُ هُمْ يَنْتَصِرُونَ", phon: "wa-lladhina idha asabahumu al-baghyu hum yantasiruna", french: "Et ceux qui, lorsque la transgression les atteint, se defendent." }
  ]},
  // bwa (id=684) — retour
  { analysis_id: 684, phrases: [
    { sense: "retourner", arabic: "فَبَاءُوا بِغَضَبٍ عَلَى غَضَبٍ", phon: "fa-ba'uu bi-ghadabin 'ala ghadabin", french: "Ils se sont attire colere sur colere." },
    { sense: "mériter", arabic: "فَقَدْ بَاءَ بِغَضَبٍ مِنَ اللَّهِ", phon: "faqad ba'a bi-ghadabin mina Allahi", french: "Il s'est certes attire une colere de Dieu." },
    { sense: "établir", arabic: "وَبَوَّأْنَا لِإِبْرَاهِيمَ مَكَانَ الْبَيْتِ", phon: "wa-bawwa'na li-ibrahima makana al-bayti", french: "Et Nous avons etabli pour Ibrahim l'emplacement de la Maison." }
  ]},
  // hwn (id=1303) — humiliation
  { analysis_id: 1303, phrases: [
    { sense: "humiliation", arabic: "وَلِلْكَافِرِينَ عَذَابٌ مُهِينٌ", phon: "wa-li-l-kafirina 'adhabun muhinun", french: "Et pour les rejeteurs un chatiment humiliant." },
    { sense: "être méprisé", arabic: "وَمَنْ يُهِنِ اللَّهُ فَمَا لَهُ مِنْ مُكْرِمٍ", phon: "wa-man yuhini Allahu fama lahu min mukrimin", french: "Et celui que Dieu humilie, nul ne peut l'honorer." },
    { sense: "facile", arabic: "وَهُوَ أَهْوَنُ عَلَيْهِ", phon: "wa-huwa ahwanu 'alayhi", french: "Et c'est plus facile pour Lui." }
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

  const verseIds = [95, 96, 97];
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
  console.log('=== PIPELINE SOURATE 2 — AL-BAQARAH — VERSETS 88 A 90 ===\n');

  let totalOk = 0, totalErr = 0;

  for (let v = 88; v <= 90; v++) {
    const result = await processVerse(v);
    if (result) {
      totalOk += result.okCount;
      totalErr += result.errCount;
    }
  }

  await syncWordMeanings();
  await insertDailyPhrases();

  console.log(`\n=== PIPELINE V88-90 TERMINEE — TOTAL: ${totalOk} OK, ${totalErr} erreurs ===`);
}

main().catch(e => console.error('FATAL:', e));
