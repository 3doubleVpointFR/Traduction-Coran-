const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// =====================================================
// PIPELINE SOURATE 2 — AL-BAQARAH — VERSETS 65 A 67
// verse_id=72 (2:65), verse_id=73 (2:66), verse_id=74 (2:67)
// =====================================================
// CRITICAL: concept names and senses are read from DB (concepts JSON)
// =====================================================

const verseData = {

  // =====================================================
  // VERSET 2:65
  // verse_id=72, analysis_id=430
  // "Vous avez certainement connu ceux parmi vous qui ont transgresse
  //  concernant le sabbat. Nous leur avons dit : soyez des singes meprises."
  // =====================================================
  65: {
    verse_id: 72,
    analysis_id: 430,
    translation_arab: "Et vous avez certainement connu ceux parmi vous qui ont transgresse concernant le sabbat. Nous leur avons dit : soyez des singes meprises.",
    full_translation: "Et vous avez certainement su [l'histoire de] ceux parmi vous qui ont transgresse [les regles] du sabbat. Nous leur avons alors dit : soyez des singes repousses [et meprises].",
    translation_explanation: `§DEMARCHE§
Ce verset rappelle aux enfants d'Israel l'episode des transgresseurs du sabbat. La particule introductive **wa-laqad** (et certainement) est une formule d'insistance qui interpelle directement les interlocuteurs — vous le savez certainement. Le verbe **'alimtum** est un accompli 2MP de la racine e-l-m. Le Lane's donne « he knew, he was cognizant of, he was aware ». L'accompli avec le pronom 2MP interpelle directement le peuple — vous avez su, vous avez eu connaissance de cet evenement. Le pronom relatif **alladhina** introduit le groupe des transgresseurs. Le verbe **i'tadaw** est un accompli 3MP forme VIII de la racine e-d-w. Le Lane's donne « he transgressed, exceeded the bounds, committed an act of hostility ». La forme VIII (ifta'ala) indique une action reflexive et deliberee — ils se sont eux-memes mis dans la transgression. La preposition **minkum** (parmi vous) souligne que les transgresseurs font partie de la communaute — ce n'est pas un peuple exterieur mais des membres du groupe. La preposition **fi** suivie de **al-sabti** situe la transgression dans le contexte du sabbat. Le mot **al-sabti** est un nom masculin singulier defini genitif de la racine s-b-t. Le Lane's donne « sabbath, the seventh day, Saturday, rest ». Le sabbat est le jour de repos sacre impose aux enfants d'Israel — toute activite y est interdite. Le verbe **qulna** est un accompli 1P de la racine q-w-l. Le Lane's donne « he said, spoke, uttered ». Le pluriel de majeste divin (Nous avons dit) introduit la sentence. Le verbe **kunuu** est un imperatif 2MP de la racine k-w-n. Le Lane's donne « he was, he became, he existed ». L'imperatif ordonne un devenir — soyez, devenez. Le mot **qiradatan** est un nom masculin pluriel accusatif de la racine q-r-d. Le Lane's donne « apes, monkeys ». Le pluriel brise designe l'espece simienne dans son ensemble. Le mot **khasi'ina** est un participe actif pluriel accusatif de la racine kh-s-a. Le Lane's donne « driven away with contempt, despised, humiliated, abased ». Le participe qualifie les singes — non pas de simples singes mais des singes repousses, rejetes avec mepris.

§JUSTIFICATION§
**connu** — Le sens retenu est « savoir ». Le verbe 'alimtum designe une connaissance acquise d'un evenement passe. L'alternative « monde » est ecartee car la forme verbale (accompli 2MP) designe l'acte de connaitre, pas l'ensemble des creatures.

**transgresse** — Le sens retenu est « transgresser ». Le verbe i'tadaw forme VIII designe le depassement delibere des limites. L'alternative « courir » est ecartee car la forme VIII oriente vers l'exces et l'hostilite, pas le mouvement physique.

**sabbat** — Le sens retenu est « sabbat ». Le mot al-sabti designe le jour de repos hebdomadaire sacre. Pas d'alternative pertinente — le mot est specifique a cette institution.

**dit** — Le sens retenu est « dire ». Le verbe qulna est la parole divine qui prononce la sentence. Pas d'alternative pertinente dans ce contexte de discours direct.

**soyez** — Le sens retenu est « etre ». Le verbe kunuu a l'imperatif ordonne un changement d'etat. L'alternative « exister » est ecartee car l'imperatif ici designe un devenir, pas une simple existence.

**singes** — Le sens retenu est « singe ». Le mot qiradatan designe les primates. Pas d'alternative pertinente — le mot est specifique a l'animal.

**meprises** — Le sens retenu est « repousser ». Le participe khasi'ina qualifie l'etat de rejet et de mepris. Pas d'alternative pertinente dans ce contexte de chatiment.

§CRITIQUE§
**connu vs su** — Le Lane's donne « he knew, was cognizant ». « Connu » et « su » sont des synonymes proches. « Connu » est prefere car il implique une connaissance directe et personnelle de l'evenement, tandis que « su » serait plus abstrait.
**transgresse vs depasse les limites** — Le Lane's donne « he transgressed, exceeded the bounds ». « Transgresse » est plus concis que « depasse les limites » et preserve le sens juridique de la violation d'un interdit sacre.
**meprises vs repousses** — Le Lane's donne « driven away with contempt, despised ». « Meprises » est prefere car il combine le rejet et le mepris en un seul mot, correspondant bien a l'etat de degradation decrit.`,
    segments: [
      { fr: "et certainement", phon: "wa-laqad", arabic: "\u0648\u064E\u0644\u064E\u0642\u064E\u062F\u0652", is_particle: true, position: 0 },
      { fr: "vous avez connu", pos: "verbe", phon: "'alimtum", arabic: "\u0639\u064E\u0644\u0650\u0645\u0652\u062A\u064F\u0645\u064F", word_key: "elm", is_particle: false, sense_retenu: "savoir", position: 1 },
      { fr: "ceux qui", phon: "alladhina", arabic: "\u0671\u0644\u0651\u064E\u0630\u0650\u064A\u0646\u064E", is_particle: true, position: 2 },
      { fr: "ont transgresse", pos: "verbe", phon: "i'tadaw", arabic: "\u0671\u0639\u0652\u062A\u064E\u062F\u064E\u0648\u0652\u0627\u06DF", word_key: "edw", is_particle: false, sense_retenu: "transgresser", position: 3 },
      { fr: "parmi vous", phon: "minkum", arabic: "\u0645\u0650\u0646\u0643\u064F\u0645\u0652", is_particle: true, position: 4 },
      { fr: "concernant", phon: "fi", arabic: "\u0641\u0650\u064A", is_particle: true, position: 5 },
      { fr: "le sabbat", pos: "nom", phon: "al-sabti", arabic: "\u0671\u0644\u0633\u0651\u064E\u0628\u0652\u062A\u0650", word_key: "sbt", is_particle: false, sense_retenu: "sabbat", position: 6 },
      { fr: "Nous leur avons dit", pos: "verbe", phon: "fa-qulna", arabic: "\u0641\u064E\u0642\u064F\u0644\u0652\u0646\u064E\u0627", word_key: "qwl", is_particle: false, sense_retenu: "dire", position: 7 },
      { fr: "a eux", phon: "lahum", arabic: "\u0644\u064E\u0647\u064F\u0645\u0652", is_particle: true, position: 8 },
      { fr: "soyez", pos: "verbe", phon: "kunuu", arabic: "\u0643\u064F\u0648\u0646\u064F\u0648\u0627\u06DF", word_key: "knw", is_particle: false, sense_retenu: "etre", position: 9 },
      { fr: "des singes", pos: "nom", phon: "qiradatan", arabic: "\u0642\u0650\u0631\u064E\u062F\u064E\u0629\u064B", word_key: "qrd", is_particle: false, sense_retenu: "singe", position: 10 },
      { fr: "meprises", pos: "adjectif", phon: "khasi'ina", arabic: "\u062E\u064E\u0670\u0633\u0650\u0640\u0650\u0654\u064A\u0646\u064E", word_key: "ksa", is_particle: false, sense_retenu: "repousser", position: 11 }
    ],
    words: [
      {
        word_key: "elm", position: 1, sense_chosen: "savoir",
        analysis_axes: {
          concept_chosen: "Savoir/Connaissance",
          sense_chosen: "savoir",
          concepts: {
            "Savoir/Connaissance": {
              status: "retenu",
              senses: ["science", "enseignement", "conna\u00eetre", "\u00eatre inform\u00e9", "savoir", "certitude", "savant"],
              proof_ctx: "Le verbe 'alimtum est un accompli 2MP de la racine e-l-m. Le Lane's donne « he knew, he was cognizant of, he had knowledge ». L'accompli avec le suffixe 2MP interpelle directement les enfants d'Israel — ils sont pris a temoin de leur propre histoire. Le savoir ici est une connaissance factuelle d'un evenement historique vecu par la communaute. La particule laqad renforce la certitude de ce savoir.",
              axe1_verset: "Le verbe 'alimtum ouvre le verset en prenant les enfants d'Israel a temoin. Vous avez connu — vous ne pouvez pas nier cet evenement. Le savoir porte sur la transgression du sabbat et le chatiment qui s'ensuivit. Le verset interpelle la memoire collective — ce savoir est partage par toute la communaute. La connaissance de la punition devrait servir de dissuasion pour les generations suivantes.",
              axe2_voisins: "Le verset 64 rappelait le pacte de Dieu et la faveur accordee. Ce verset 65 montre la consequence de la transgression malgre le pacte — ceux qui transgressent le sabbat sont transformes en singes. La sequence pacte-transgression-chatiment est le schema narratif de toute cette section. Le verset 66 annoncera que ce chatiment est un exemple pour les contemporains et les generations futures.",
              axe3_sourate: "La racine e-l-m est l'une des plus frequentes de la sourate al-Baqarah. En 2:30-33, les anges reconnaissent ne pas savoir ce que Dieu sait, et Adam recoit l'enseignement des noms. Le savoir est central dans la sourate — il distingue celui qui obeit de celui qui transgresse. Les enfants d'Israel savent et pourtant certains transgressent.",
              axe4_coherence: "La racine e-l-m apparait plus de 850 fois dans le Coran. Le savoir est une responsabilite — celui qui sait est davantage tenu de rendre des comptes. En 7:163-166, le recit detaille des transgresseurs du sabbat montre qu'ils savaient l'interdiction et l'ont volontairement violee. Le savoir sans obeissance aggrave la faute.",
              axe5_frequence: "Pour la mission du khalifa, le savoir est un outil et une responsabilite. Le khalifa qui connait les regles et les transgresse est doublement fautif. Les enfants d'Israel savaient l'interdiction du sabbat — leur transgression est d'autant plus grave qu'elle est commise en connaissance de cause."
            },
            "Monde/Cr\u00e9ation": {
              status: "nul",
              senses: ["les mondes", "ensemble des cr\u00e9atures", "univers", "monde"],
              proof_ctx: "Le concept de monde/creation est lie a la racine e-l-m dans d'autres contextes (al-'alamin = les mondes). Ici la forme verbale 'alimtum (vous avez connu) est clairement un acte cognitif, pas une reference a la creation."
            },
            "Marque/Signe": {
              status: "nul",
              senses: ["marquer", "signe", "drapeau", "montagne", "rep\u00e8re", "\u00e9tendard", "l\u00e8vre fendue"],
              proof_ctx: "Le signe/marque est un sens derive de la racine e-l-m ('alam = signe, drapeau). Ici la forme verbale designe l'acte de connaitre un evenement passe, pas un repere physique ou visuel."
            }
          }
        }
      },
      {
        word_key: "edw", position: 3, sense_chosen: "transgresser",
        analysis_axes: {
          concept_chosen: "Transgression/Exc\u00e8s",
          sense_chosen: "transgresser",
          concepts: {
            "Transgression/Exc\u00e8s": {
              status: "probable",
              senses: ["transgresser", "injustice"],
              proof_ctx: "Le verbe i'tadaw est un accompli 3MP forme VIII de la racine e-d-w. Le Lane's donne « he transgressed, exceeded the proper bounds, committed an act of aggression ». La forme VIII (ifta'ala) ajoute une dimension reflexive — ils se sont eux-memes mis dans la transgression. Le depassement des limites est delibere et conscient. Le sabbat avait des regles claires que ces transgresseurs ont volontairement violees.",
              axe1_verset: "Le verbe i'tadaw decrit l'acte central du verset — la transgression du sabbat. Le verbe est au pluriel (3MP) — un groupe a transgresse, pas un individu isole. La preposition minkum (parmi vous) souligne que ces transgresseurs font partie de la communaute. La transgression est le motif direct du chatiment — c'est parce qu'ils ont transgresse qu'ils sont transformes en singes.",
              axe2_voisins: "Le verset 64 rappelait la faveur divine et le pacte. Ce verset 65 montre que malgre la faveur, certains ont transgresse. La transgression est un acte de rebellion contre le pacte — les transgresseurs ont recu les bienfaits mais refuse les obligations. Le verset 66 montrera que cette transgression sert d'exemple pour tous.",
              axe3_sourate: "La racine e-d-w dans la sourate al-Baqarah designe les actes d'hostilite et de depassement des limites. En 2:190, « ne transgressez pas, Dieu n'aime pas les transgresseurs ». En 2:229, les limites de Dieu (hudud) ne doivent pas etre transgressees. La sourate etablit que la transgression est un depassement des limites divines qui entraine le chatiment.",
              axe4_coherence: "La racine e-d-w apparait 106 fois dans le Coran. En 7:163, le recit detaille montre que les transgresseurs du sabbat pechaient en allant a la peche le samedi. En 4:154, le sabbat est rappele comme une obligation sacree. La transgression du sabbat est un cas exemplaire de violation deliberee d'un interdit divin clairement enonce.",
              axe5_frequence: "Pour la mission du khalifa, la transgression est l'echec de la mission. Le khalifa qui transgresse les limites divines a failli a sa responsabilite. Les transgresseurs du sabbat avaient recu une mission claire (respecter le jour de repos) et l'ont violee. Le chatiment (transformation en singes) montre la gravite de la transgression du pacte."
            },
            "Hostilit\u00e9/Inimiti\u00e9": {
              status: "retenu",
              senses: ["ennemi", "hostilit\u00e9", "agression"],
              proof_ctx: "L'hostilite est le sens premier de la racine e-d-w (ennemi, hostilite). Ici la forme VIII i'tadaw oriente vers le depassement des limites (transgression) plutot que l'inimitie entre personnes. Le contexte est la violation d'un interdit sacre, pas un conflit interpersonnel.",
              axe1_verset: "Le verbe i'tadaw dans ce verset designe la violation du sabbat. Bien que la racine e-d-w puisse designer l'hostilite entre personnes, ici la transgression est dirigee contre un commandement divin. L'hostilite implicite est envers l'ordre de Dieu — les transgresseurs sont hostiles aux limites sacrees imposees. Le chatiment montre que cette hostilite envers les regles divines a des consequences severes.",
              axe2_voisins: "Dans les versets precedents, les enfants d'Israel ont recu des bienfaits et un pacte. L'hostilite de certains se manifeste par la transgression de ce pacte. L'hostilite n'est pas envers d'autres humains mais envers les limites divines. Le verset 66 montre que le chatiment de cette hostilite sert d'avertissement pour tous.",
              axe3_sourate: "La racine e-d-w dans la sourate couvre un spectre large : de l'hostilite interpersonnelle (2:193 — combattez ceux qui vous combattent) a la transgression des limites (2:229 — limites de Dieu). L'hostilite envers les commandements divins est aussi grave que l'hostilite entre les hommes. La sourate montre que toute forme d'hostilite hors du cadre permis est condamnable.",
              axe4_coherence: "La racine e-d-w apparait dans des contextes varies : l'ennemi (aduww), l'agression ('udwan), la transgression (i'tida'). En 5:87, « ne transgressez pas — Dieu n'aime pas les transgresseurs ». La transgression et l'hostilite partagent un noyau semantique commun — le depassement des limites etablies. Qu'on agresse une personne ou qu'on viole un interdit, on depasse les bornes.",
              axe5_frequence: "Pour la mission du khalifa, l'hostilite aux commandements est un echec fondamental. Le khalifa qui se montre hostile aux regles de sa mission se disqualifie. Les transgresseurs du sabbat ont manifeste une hostilite aux limites divines qui les a reduits au rang de singes — la degradation morale se manifeste physiquement."
            },
            "Course/Vitesse": {
              status: "nul",
              senses: ["courir"],
              proof_ctx: "La course est un sens de la racine e-d-w ('ada = courir). Ici la forme VIII i'tadaw est clairement dans le registre de la transgression morale, pas du mouvement physique. Le contexte du sabbat et du chatiment exclut le sens de courir."
            }
          }
        }
      },
      {
        word_key: "sbt", position: 6, sense_chosen: "sabbat",
        analysis_axes: {
          concept_chosen: "Repos sacr\u00e9/Jour saint",
          sense_chosen: "sabbat",
          concepts: {
            "Repos sacr\u00e9/Jour saint": {
              status: "retenu",
              senses: ["sabbat", "samedi", "repos"],
              proof_ctx: "Le mot al-sabti est un nom masculin singulier defini genitif de la racine s-b-t. Le Lane's donne « the seventh day of the week, Saturday, the sabbath, rest, cessation from work ». Le sabbat est l'institution du repos hebdomadaire sacre — toute activite economique y est interdite pour les enfants d'Israel. L'article defini (al-) indique l'institution connue, pas un jour quelconque.",
              axe1_verset: "Le mot al-sabti est le cadre de la transgression. Ce n'est pas n'importe quelle violation mais la violation du jour sacre. Le sabbat etait une obligation centrale du pacte avec les enfants d'Israel — le respecter demontrait l'obeissance, le violer demontrait la rebellion. La transgression du sabbat est specifiquement mentionnee pour montrer la gravite — on ne viole pas un jour que Dieu a declare sacre.",
              axe2_voisins: "Le verset 64 rappelait le pacte et les obligations. Le sabbat fait partie de ces obligations — c'est un jour de repos impose par le pacte. La mention du sabbat relie ce verset au pacte precedent. Le verset 66 montrera que la violation du sabbat a des consequences exemplaires.",
              axe3_sourate: "La racine s-b-t apparait dans la sourate al-Baqarah uniquement dans ce contexte de transgression. Le sabbat est mentionne comme une epreuve — les enfants d'Israel devaient s'abstenir de pecher le samedi, mais les poissons venaient en abondance ce jour-la (7:163). Le sabbat est donc un test de fidelite au pacte.",
              axe4_coherence: "La racine s-b-t apparait 9 fois dans le Coran. En 7:163, le recit detaille montre que les poissons venaient le jour du sabbat et disparaissaient les autres jours — une epreuve deliberee. En 4:47 et 4:154, le sabbat est rappele comme une obligation serieuse. Le Coran presente le sabbat comme un test dont la violation entraine un chatiment exemplaire.",
              axe5_frequence: "Pour la mission du khalifa, le sabbat represente les limites sacrees de la mission. Le khalifa doit respecter les bornes que Dieu a fixees, meme lorsque la tentation est forte. Les transgresseurs du sabbat ont cede a la tentation (les poissons du samedi) et ont perdu leur dignite humaine."
            }
          }
        }
      },
      {
        word_key: "qwl", position: 7, sense_chosen: "dire",
        analysis_axes: {
          concept_chosen: "Parole/\u00c9nonciation",
          sense_chosen: "dire",
          concepts: {
            "Parole/\u00c9nonciation": {
              status: "retenu",
              senses: ["parole", "discours", "parler", "dire", "affirmer"],
              proof_ctx: "Le verbe qulna est un accompli 1P de la racine q-w-l. Le Lane's donne « he said, spoke, uttered ». Le pluriel de majeste (Nous avons dit) introduit la sentence divine. La parole divine ici est un decret de chatiment — elle ne se contente pas de constater mais transforme la realite des transgresseurs.",
              axe1_verset: "Le verbe qulna introduit la sentence divine : soyez des singes. La parole de Dieu est ici performative — elle ne decrit pas une situation mais la cree. Le fa- prefixe (fa-qulna) indique la consequence : parce qu'ils ont transgresse, alors Nous leur avons dit. La parole divine est la reponse directe a la transgression. Le contenu de cette parole (kunuu qiradatan khasi'ina) est une condamnation a la degradation.",
              axe2_voisins: "Dans le verset 58, qulna introduisait un ordre bienveillant (entrez dans la cite). Ici en 65, qulna introduit une sentence punitive (soyez des singes). La meme formule (Nous avons dit) sert a la fois pour la grace et le chatiment — la parole divine couvre tout le spectre. Le contraste entre les deux emplois montre que la parole divine s'adapte a la conduite des destinataires.",
              axe3_sourate: "La racine q-w-l est la plus frequente de la sourate al-Baqarah. La parole divine structure toute la narration — chaque episode est introduit par « Nous avons dit » ou une variante. La sourate montre que la parole de Dieu est l'instrument par lequel se manifeste la grace et la justice. En 2:65, la parole divine manifeste la justice punitive.",
              axe4_coherence: "La racine q-w-l apparait plus de 1700 fois dans le Coran. La formule qulna (Nous avons dit) est recurrente pour les decrets divins. En 7:166, le verset parallele rapporte la meme sentence. La parole de Dieu est creative — « Sois et c'est » (kun fa-yakun). Ici « soyez des singes » est un acte createur de chatiment.",
              axe5_frequence: "Pour la mission du khalifa, la parole divine est l'autorite supreme. Le khalifa ne peut contredire ce que Dieu a dit. La sentence « soyez des singes » montre que la parole divine a le pouvoir de degrader ceux qui transgressent — le khalifa qui oublie cette autorite risque le meme sort."
            },
            "Pens\u00e9e/Avis": {
              status: "nul",
              senses: ["avis", "doctrine", "opinion"],
              proof_ctx: "L'avis/opinion est un sens derive de q-w-l. Ici qulna est un acte de parole directe (discours direct : soyez des singes), pas l'expression d'une opinion ou d'une doctrine."
            }
          }
        }
      },
      {
        word_key: "knw", position: 9, sense_chosen: "etre",
        analysis_axes: {
          concept_chosen: "Existence/Devenir",
          sense_chosen: "etre",
          concepts: {
            "Existence/Devenir": {
              status: "retenu",
              senses: ["\u00eatre", "exister", "devenir"],
              proof_ctx: "Le verbe kunuu est un imperatif 2MP de la racine k-w-n. Le Lane's donne « he was, he became, he existed, he came into being ». L'imperatif kunuu ordonne un devenir — pas simplement exister mais devenir autre chose. Le passage de l'etat humain a l'etat simien est un acte de creation negative — Dieu qui a cree l'homme peut le degrader.",
              axe1_verset: "Le verbe kunuu est l'imperatif du chatiment. Dieu ordonne aux transgresseurs de devenir des singes. L'imperatif est performatif — il ne donne pas un choix mais impose une transformation. Le verbe kana/yakunu est le verbe de l'etre et du devenir dans le Coran — quand Dieu dit « sois » (kun), la chose est. Ici l'imperatif pluriel (kunuu) transforme un groupe entier.",
              axe2_voisins: "Dans le verset 58, kunuu n'apparait pas mais l'ordre etait d'entrer et de dire hitta. Ici l'ordre est devenu un chatiment — au lieu de devenir des serviteurs purifies, ils deviennent des singes. Le contraste entre le devenir offert (entrez dans la cite) et le devenir impose (soyez des singes) montre la consequence de la desobeissance.",
              axe3_sourate: "La racine k-w-n est parmi les plus frequentes de la sourate. En 2:117, « quand Il decide une chose, Il dit sois (kun) et elle est (fa-yakun) ». Le verbe kun est le verbe de la creation divine. En 2:65, kunuu est le verbe de la degradation divine — le meme pouvoir createur peut elever ou abaisser.",
              axe4_coherence: "La racine k-w-n apparait plus de 1350 fois dans le Coran. Le verbe kana est le plus frequent apres qala. La formule kun fa-yakun (sois et c'est) apparait 8 fois dans le Coran. En 2:65, kunuu est une variante collective de cette formule creatrice — le pouvoir divin transforme les etres a volonte.",
              axe5_frequence: "Pour la mission du khalifa, le devenir est la trajectoire de la mission. Le khalifa peut devenir meilleur par l'obeissance ou etre degrade par la transgression. Les transgresseurs du sabbat illustrent le devenir negatif — de l'etat humain a l'etat simien. La mission du khalifa est de devenir meilleur, pas de regresser."
            }
          }
        }
      },
      {
        word_key: "qrd", position: 10, sense_chosen: "singe",
        analysis_axes: {
          concept_chosen: "Animal/Ch\u00e2timent",
          sense_chosen: "singe",
          concepts: {
            "Animal/Ch\u00e2timent": {
              status: "retenu",
              senses: ["singe", "primate"],
              proof_ctx: "Le mot qiradatan est un nom masculin pluriel accusatif de la racine q-r-d. Le Lane's donne « apes, monkeys ». Le pluriel qirada est un pluriel brise de qird. Le singe dans le Coran est toujours associe au chatiment — c'est un etat de degradation. Le singe imite sans comprendre, il ressemble a l'homme sans en avoir la dignite. La transformation en singe est la perte de la dignite humaine.",
              axe1_verset: "Le mot qiradatan est le contenu du chatiment — ce que les transgresseurs deviennent. Le singe est l'animal qui ressemble le plus a l'homme physiquement mais en est le plus eloigne spirituellement. La transformation en singe n'est pas un changement d'apparence mais une degradation ontologique — les transgresseurs perdent leur statut d'etre humain. L'ajout de khasi'ina (meprises) renforce la degradation — non pas des singes nobles mais des singes rejetes.",
              axe2_voisins: "Le verset 64 rappelait la faveur divine. Le passage de la faveur au chatiment de singe montre l'ampleur de la chute. Ceux qui etaient favorises sont devenus les plus degrades. Le verset 66 montrera que ce chatiment est un exemple pour les generations futures — la transformation en singes sert d'avertissement.",
              axe3_sourate: "La racine q-r-d n'apparait dans la sourate qu'en 2:65. Le singe est un hapax dans al-Baqarah — sa mention unique renforce son caractere exceptionnel et marque les esprits. La sourate utilise ce chatiment extreme pour illustrer la gravite de la transgression du sabbat.",
              axe4_coherence: "La racine q-r-d apparait 3 fois dans le Coran : 2:65, 5:60 et 7:166. Dans les trois cas, le singe est associe au chatiment divin. En 5:60, « ceux que Dieu a maudits et transformes en singes et en porcs ». En 7:166, « soyez des singes meprises ». Le singe est systematiquement un signe de degradation dans le Coran.",
              axe5_frequence: "Pour la mission du khalifa, le singe represente l'echec total de la mission. Le khalifa transforme en singe a perdu sa dignite d'etre humain — il ne peut plus exercer aucune mission. La transformation en singe est l'antithese absolue du khalifa — celui qui devait gerer la terre est reduit a un animal qui imite sans comprendre."
            }
          }
        }
      },
      {
        word_key: "ksa", position: 11, sense_chosen: "repousser",
        analysis_axes: {
          concept_chosen: "Rejet/M\u00e9pris",
          sense_chosen: "repousser",
          concepts: {
            "Rejet/M\u00e9pris": {
              status: "retenu",
              senses: ["repousser", "m\u00e9priser", "rejeter"],
              proof_ctx: "Le mot khasi'ina est un participe actif pluriel accusatif de la racine kh-s-a. Le Lane's donne « driven away with contempt, despised, humiliated, made to retreat in a state of ignominy ». Le participe actif qualifie l'etat permanent des transgresseurs — ils ne sont pas temporairement rejetes mais perpetuellement meprises. Le rejet est total — eloignes de la grace divine et de la societe humaine.",
              axe1_verset: "Le mot khasi'ina qualifie qiradatan — non pas de simples singes mais des singes meprises et rejetes. Le cumul singe + meprise indique une double degradation : la perte de la forme humaine et la perte de tout statut social. Le participe en position finale du verset est le dernier mot — il imprime l'image du rejet total dans l'esprit du lecteur.",
              axe2_voisins: "Le verset 64 montrait la faveur (grace et misericorde). Le passage a khasi'ina (meprises) est le renversement complet — de la faveur au mepris. Ceux qui etaient l'objet de la grace deviennent l'objet du rejet. Le verset 66 montrera que ce mepris sert de lecon pour les pieuses.",
              axe3_sourate: "La racine kh-s-a est rare dans la sourate. Le mepris divin est reserve aux cas les plus graves — la transgression deliberee du sabbat merite non seulement le chatiment mais le rejet total. La sourate montre que Dieu repousse avec mepris ceux qui violent deliberement ses limites sacrees.",
              axe4_coherence: "La racine kh-s-a apparait 5 fois dans le Coran. En 23:108, « restez-y repousses et ne M'adressez pas la parole ». En 67:4, le regard revient « repousse et fatigue ». Le mepris divin est un eloignement definitif — celui qui est khasi' est exclu de la proximite divine. En 7:166, le meme mot khasi'ina qualifie les singes.",
              axe5_frequence: "Pour la mission du khalifa, le mepris divin est la sanction ultime. Le khalifa rejete par Dieu a perdu toute sa mission et sa dignite. Les transgresseurs du sabbat sont repousses avec mepris — ils ne sont plus dignes de la mission ni meme de la forme humaine. Le rejet est l'antithese de l'election."
            }
          }
        }
      }
    ]
  },

  // =====================================================
  // VERSET 2:66
  // verse_id=73, analysis_id=428
  // "Nous en avons fait un chatiment exemplaire pour ceux de leur temps
  //  et ceux apres eux, et une exhortation pour les pieux."
  // =====================================================
  66: {
    verse_id: 73,
    analysis_id: 428,
    translation_arab: "Nous en avons fait un chatiment exemplaire pour ce qui est entre ses mains et ce qui est derriere elle, et une exhortation pour les pieux.",
    full_translation: "Nous en avons fait un chatiment exemplaire pour [les gens de] leur epoque et [ceux qui vinrent] apres eux, et une exhortation pour ceux qui se premunissent [contre le mal].",
    translation_explanation: `§DEMARCHE§
Ce verset decrit la finalite du chatiment des transgresseurs du sabbat. Le verbe **ja'alnaha** est un accompli 1P de la racine j-e-l avec pronom suffixe 3FS. Le Lane's donne « he made, rendered, appointed, placed, constituted ». Le prefixe fa- indique la consequence du verset precedent — alors Nous l'avons fait. Le pronom -ha renvoie a la punition (la transformation en singes). Le mot **nakalan** est un nom masculin accusatif indefini de la racine n-k-l. Le Lane's donne « an exemplary punishment, a warning example, a deterrent ». Le chatiment exemplaire sert de dissuasion — il montre aux autres ce qui arrive aux transgresseurs. L'expression **li-ma bayna yadayha** signifie litteralement « pour ce qui est entre ses mains ». Le mot **bayna** est un adverbe de la racine b-y-n. Le Lane's donne « between, among, in the midst of ». Le mot **yadayha** est un duel de la racine y-d-y avec pronom 3FS. Le Lane's donne « two hands, power, what is before, what is in front ». L'expression « entre ses mains » designe ce qui est present, ce qui est devant — les contemporains de la transgression. L'expression **wa-ma khalfaha** (et ce qui est derriere elle) designe ce qui vient apres — les generations futures. Le mot **khalfaha** est un nom de la racine kh-l-f avec pronom 3FS. Le Lane's donne « behind, after, what comes after ». Le chatiment est exemplaire pour le present et l'avenir. Le mot **maw'izatan** est un nom feminin singulier accusatif de la racine w-e-z. Le Lane's donne « admonition, exhortation, warning, counsel ». L'exhortation est une lecon morale tiree de l'evenement. Le mot **al-muttaqina** est un participe actif pluriel defini accusatif forme VIII de la racine w-q-y. Le Lane's donne « those who guard themselves, who are pious, who fear God, who take precaution ». Les pieux sont ceux qui se premunissent contre le mal — ils tirent la lecon du chatiment.

§JUSTIFICATION§
**avons fait** — Le sens retenu est « faire ». Le verbe ja'alnaha signifie constituer, etablir. L'alternative « recompense » est ecartee car le contexte est un chatiment, pas une recompense — Dieu constitue la punition en exemple.

**chatiment exemplaire** — Le sens retenu est « chatiment ». Le mot nakalan designe une punition qui sert d'exemple. L'alternative « entraves » est ecartee car le contexte parle d'une punition morale destinee a dissuader, pas de chaines physiques.

**entre ses mains** — Le sens retenu est « main ». Le mot yadayha au duel designe « ce qui est devant » — les contemporains. L'alternative « pouvoir » est ecartee car l'expression idiomatique « entre ses mains » designe la proximite temporelle, pas l'autorite.

**derriere elle** — Le sens retenu est « succeder ». Le mot khalfaha designe ce qui vient apres. L'alternative « contredire » est ecartee car l'adverbe de lieu khalfa designe la position arriere, donc temporellement ce qui suit.

**exhortation** — Le sens retenu est « exhorter ». Le mot maw'izatan designe un conseil moral tire d'un evenement. Pas d'alternative pertinente — le mot est specifique a l'admonition.

**pieux** — Le sens retenu est « se premunir ». Le participe al-muttaqina designe ceux qui se gardent du mal. L'alternative « bouclier » est ecartee car le participe forme VIII designe un agent qui se protege moralement, pas un objet de protection physique.

§CRITIQUE§
**chatiment exemplaire vs punition dissuasive** — Le Lane's donne « exemplary punishment, a warning by which others are deterred ». « Chatiment exemplaire » est prefere car il combine la punition et la valeur d'exemple en une seule expression. « Punition dissuasive » serait acceptable mais moins idiomatique.
**entre ses mains vs contemporains** — L'expression arabe « ma bayna yadayha » est une expression idiomatique qui designe ce qui est present/devant. La traduction litterale « entre ses mains » est preservee pour sa valeur stylistique, avec l'explication « les contemporains » en traduction explicative.
**pieux vs ceux qui se premunissent** — Le Lane's donne « those who guard themselves against evil ». « Pieux » est plus concis que « ceux qui se premunissent ». Le concept de taqwa est plus large que la piete — il inclut la vigilance active contre le mal.`,
    segments: [
      { fr: "Nous en avons fait", pos: "verbe", phon: "fa-ja'alnaha", arabic: "\u0641\u064E\u062C\u064E\u0639\u064E\u0644\u0652\u0646\u064E\u0670\u0647\u064E\u0627", word_key: "jel", is_particle: false, sense_retenu: "faire", position: 0 },
      { fr: "un chatiment exemplaire", pos: "nom", phon: "nakalan", arabic: "\u0646\u064E\u0643\u064E\u0670\u0644\u064B\u0627", word_key: "nkl", is_particle: false, sense_retenu: "ch\u00e2timent", position: 1 },
      { fr: "pour ce qui", phon: "li-ma", arabic: "\u0644\u0650\u0651\u0645\u064E\u0627", is_particle: true, position: 2 },
      { fr: "entre", pos: "nom", phon: "bayna", arabic: "\u0628\u064E\u064A\u0652\u0646\u064E", word_key: "byn", is_particle: false, sense_retenu: "entre", position: 3 },
      { fr: "ses mains", pos: "nom", phon: "yadayha", arabic: "\u064A\u064E\u062F\u064E\u064A\u0652\u0647\u064E\u0627", word_key: "ydy", is_particle: false, sense_retenu: "main", position: 4 },
      { fr: "et ce qui", phon: "wa-ma", arabic: "\u0648\u064E\u0645\u064E\u0627", is_particle: true, position: 5 },
      { fr: "est derriere elle", pos: "nom", phon: "khalfaha", arabic: "\u062E\u064E\u0644\u0652\u0641\u064E\u0647\u064E\u0627", word_key: "xlf", is_particle: false, sense_retenu: "succ\u00e9der", position: 6 },
      { fr: "et une exhortation", pos: "nom", phon: "wa-maw'izatan", arabic: "\u0648\u064E\u0645\u064E\u0648\u0652\u0639\u0650\u0638\u064E\u0629\u064B", word_key: "wez", is_particle: false, sense_retenu: "exhorter", position: 7 },
      { fr: "pour les pieux", pos: "nom", phon: "li-l-muttaqina", arabic: "\u0644\u0650\u0651\u0644\u0652\u0645\u064F\u062A\u0651\u064E\u0642\u0650\u064A\u0646\u064E", word_key: "wqy", is_particle: false, sense_retenu: "se pr\u00e9munir", position: 8 }
    ],
    words: [
      {
        word_key: "jel", position: 0, sense_chosen: "faire",
        analysis_axes: {
          concept_chosen: "Action/R\u00e9alisation",
          sense_chosen: "faire",
          concepts: {
            "Action/R\u00e9alisation": {
              status: "retenu",
              senses: ["rendre", "faire", "placer", "commencer \u00e0", "\u00e9tablir", "cr\u00e9er"],
              proof_ctx: "Le verbe ja'alnaha est un accompli 1P avec pronom suffixe 3FS de la racine j-e-l. Le Lane's donne « he made, constituted, rendered, appointed ». Le verbe ja'ala est un verbe de transformation — il ne cree pas ex nihilo mais transforme une chose en autre chose. Le pronom -ha (elle) renvoie a la punition des transgresseurs. Dieu transforme cette punition en exemple.",
              axe1_verset: "Le verbe ja'alnaha est le verbe principal du verset — il decrit ce que Dieu a fait de la punition. La punition n'est pas un simple chatiment mais est constituee en exemple (nakalan). Le verbe ja'ala prend deux complements : le pronom -ha (la punition) et nakalan (chatiment exemplaire). La transformation est double : pour les contemporains et pour les generations futures. L'exhortation (maw'iza) est une troisieme finalite — le chatiment sert de lecon aux pieux.",
              axe2_voisins: "Le verset 65 decrivait le chatiment (soyez des singes). Ce verset 66 explique la finalite de ce chatiment — il est fait pour servir d'exemple. Le passage du chatiment a sa finalite montre que Dieu ne punit pas par vengeance mais par pedagegie. Le verset 67 changera de sujet avec l'episode de la vache — mais la lecon du chatiment reste en toile de fond.",
              axe3_sourate: "La racine j-e-l est frequente dans la sourate al-Baqarah. En 2:22, « Celui qui a fait pour vous la terre un tapis ». En 2:30, « Je vais placer sur terre un khalifa ». Le verbe ja'ala est le verbe de l'amenagement divin — Dieu dispose les choses selon un ordre. Ici Dieu dispose le chatiment comme un exemple.",
              axe4_coherence: "La racine j-e-l apparait 346 fois dans le Coran. Le verbe ja'ala est le deuxieme verbe le plus frequent apres qala. Il designe l'acte d'amenager, de constituer, de rendre. En 5:60, « ceux que Dieu a maudits et dont Il a fait (ja'ala) des singes et des porcs ». Le verbe ja'ala est systematiquement utilise pour les transformations divines.",
              axe5_frequence: "Pour la mission du khalifa, l'acte de faire/constituer est central. Le khalifa est celui qui est constitue (ju'ila) sur terre pour gerer. Dieu constitue le chatiment en exemple tout comme Il constitue le khalifa en gerant. Chaque acte divin a une finalite — le chatiment sert d'avertissement pour que le khalifa ne transgresse pas."
            },
            "Sens isol\u00e9/R\u00e9compense": {
              status: "nul",
              senses: ["r\u00e9compense"],
              proof_ctx: "La recompense est un sens de j-e-l dans d'autres contextes (ju'l = recompense, salaire). Ici le verbe ja'ala a le sens de constituer/etablir, et l'objet est un chatiment exemplaire (nakalan), pas une recompense."
            }
          }
        }
      },
      {
        word_key: "nkl", position: 1, sense_chosen: "ch\u00e2timent",
        analysis_axes: {
          concept_chosen: "Punition exemplaire",
          sense_chosen: "ch\u00e2timent",
          concepts: {
            "Punition exemplaire": {
              status: "retenu",
              senses: ["ch\u00e2timent", "exemple dissuasif"],
              proof_ctx: "Le mot nakalan est un nom masculin accusatif indefini de la racine n-k-l. Le Lane's donne « an exemplary punishment, a punishment by which one is deterred, a warning example ». Le nakal est specifiquement une punition qui sert de lecon — elle n'est pas seulement punitive mais pedagogique. Le mot est au singulier indefini — un chatiment exemplaire parmi les chatiments possibles.",
              axe1_verset: "Le mot nakalan definit la nature du chatiment. Ce n'est pas une punition privee mais un exemple public — tout le monde doit en tirer une lecon. Le chatiment est fait pour ceux qui sont presents (bayna yadayha) et ceux qui viendront apres (khalfaha). La publicite du chatiment est deliberee — Dieu veut que la transgression et sa consequence soient connues de tous.",
              axe2_voisins: "Le verset 65 decrivait la transformation en singes. Ce verset 66 explique que cette transformation est un nakal — un chatiment qui doit faire peur. La sequence chatiment-exemple est pedagogique — Dieu punit pour dissuader. Le verset 67 ouvrira un nouveau recit (la vache) mais la lecon du nakal reste active.",
              axe3_sourate: "La racine n-k-l est rare dans la sourate al-Baqarah (une seule occurrence). Le chatiment exemplaire est mentionne une fois pour marquer les esprits. La rarete du mot renforce son impact — ce type de punition est exceptionnel et reserve aux cas les plus graves de transgression.",
              axe4_coherence: "La racine n-k-l apparait 13 fois dans le Coran. En 79:25, « Dieu le saisit du chatiment exemplaire de l'Au-dela et de ce monde ». En 73:12, « Nous avons des entraves et un feu ardent ». Le nakal est toujours un chatiment severe destine a servir d'avertissement. Le Coran utilise les chatiments passes pour dissuader les generations presentes.",
              axe5_frequence: "Pour la mission du khalifa, le chatiment exemplaire est un avertissement. Le khalifa doit connaitre les chatiments passes pour eviter de les subir. Le nakal du sabbat montre que la transgression des limites sacrees entraine une degradation publique et exemplaire — le khalifa qui transgresse sera expose en exemple."
            },
            "Liens/Cha\u00eenes": {
              status: "nul",
              senses: ["entraves"],
              proof_ctx: "Les entraves (ankal) sont un sens de la racine n-k-l (liens, chaines). Ici nakalan est au singulier et le contexte parle d'un chatiment moral et exemplaire, pas de chaines physiques. Le chatiment des singes n'implique pas d'entraves materielles."
            }
          }
        }
      },
      {
        word_key: "byn", position: 3, sense_chosen: "entre",
        analysis_axes: {
          concept_chosen: "S\u00e9paration/Distance",
          sense_chosen: "entre",
          concepts: {
            "S\u00e9paration/Distance": {
              status: "retenu",
              senses: ["s\u00e9parer", "entre", "quitter"],
              proof_ctx: "Le mot bayna est un adverbe/preposition de la racine b-y-n. Le Lane's donne « between, among, in the midst of, in the interval between ». L'expression bayna yadayha signifie litteralement « entre ses mains » — c'est une expression idiomatique pour « devant elle, ce qui la precede, ce qui est present ». Le bayna marque la position intermediaire — ce qui se situe dans l'espace-temps de l'evenement.",
              axe1_verset: "Le mot bayna fait partie de l'expression li-ma bayna yadayha (pour ce qui est entre ses mains). Cette expression designe les contemporains de la punition — ceux qui ont vecu a cette epoque et ont ete temoins du chatiment. L'opposition avec ma khalfaha (ce qui est derriere elle = les generations futures) cree une couverture temporelle totale. Le chatiment est exemplaire pour tous les temps.",
              axe2_voisins: "L'expression bayna yadayha en 2:66 situe le chatiment dans son contexte temporel. Les versets precedents (63-65) etablissaient les faits (pacte, transgression, chatiment). Ce verset 66 en tire la lecon — le chatiment sert pour ceux qui etaient presents et ceux qui viendront. La dimension temporelle donne au chatiment une portee universelle.",
              axe3_sourate: "La racine b-y-n dans la sourate designe la clarte et la separation. En 2:68, « une vache ni vieille ni jeune, entre les deux » (bayna dhalika). En 2:213, Dieu a fait descendre le Livre « pour juger entre les gens ». Le bayna marque toujours un espace intermediaire — physique, temporel ou conceptuel.",
              axe4_coherence: "La racine b-y-n apparait plus de 520 fois dans le Coran. L'expression bayna yadayhi/ha est frequente pour designer ce qui est present ou devant. En 2:255, « Il sait ce qui est entre leurs mains et ce qui est derriere eux ». L'expression couvre la totalite du temps — passe, present et futur.",
              axe5_frequence: "Pour la mission du khalifa, l'espace « entre » est le lieu de la mission. Le khalifa se situe entre le passe (les lecons) et le futur (la responsabilite). Le chatiment est fait pour que le khalifa apprenne des erreurs passees et evite de les reproduire. La position intermediaire est la position de l'apprentissage."
            },
            "Clart\u00e9/\u00c9vidence": {
              status: "nul",
              senses: ["\u00eatre clair", "expliquer", "\u00e9vident", "preuve"],
              proof_ctx: "La clarte est un sens important de b-y-n (bayyana = rendre clair). Ici bayna est utilise comme preposition spatiale/temporelle (entre ses mains), pas dans le sens de rendre evident ou de prouver."
            }
          }
        }
      },
      {
        word_key: "ydy", position: 4, sense_chosen: "main",
        analysis_axes: {
          concept_chosen: "Action/Pouvoir",
          sense_chosen: "main",
          concepts: {
            "Action/Pouvoir": {
              status: "retenu",
              senses: ["pouvoir", "bienfait", "main"],
              proof_ctx: "Le mot yadayha est un duel de la racine y-d-y avec pronom suffixe 3FS. Le Lane's donne « two hands, power, might, authority, what is in front of ». Le duel (deux mains) est utilise dans l'expression idiomatique « entre ses mains » pour designer la presence immediate, ce qui est devant. La main symbolise la proximite et le pouvoir d'action — ce qui est entre les mains est sous le controle direct.",
              axe1_verset: "Le mot yadayha fait partie de l'expression bayna yadayha (entre ses mains). La main au duel designe la portee immediate — les contemporains qui ont vu le chatiment de leurs propres yeux. L'expression est imagee — la punition est « entre les mains » de son epoque, elle est presente et tangible. Le contraste avec khalfaha (derriere elle) oppose la presence immediate (les mains) a l'absence (l'arriere).",
              axe2_voisins: "L'expression bayna yadayha en 2:66 designe l'epoque de la punition. Les versets precedents racontaient l'evenement — ce verset en montre la portee. Les « mains » de la punition designent son emprise immediate sur les temoins. La portee s'etend ensuite a l'avenir (khalfaha).",
              axe3_sourate: "La racine y-d-y dans la sourate designe la main et le pouvoir. En 2:237, « a moins qu'elles ne pardonnent ou que celui dans la main de qui est le noeud du mariage ne pardonne ». La main symbolise l'autorite et la prise en charge. Ici les « mains » de la punition designent son emprise directe sur les contemporains.",
              axe4_coherence: "La racine y-d-y apparait plus de 120 fois dans le Coran. L'expression bayna yadayhi/ha est un idiome frequent. En 2:255, « Il sait ce qui est entre leurs mains et ce qui est derriere eux ». En 36:12, « ce qu'ils ont envoye devant eux ». Les « mains » dans ces expressions designent toujours ce qui est present, immediat, sous controle.",
              axe5_frequence: "Pour la mission du khalifa, les « mains » representent la capacite d'action. Ce qui est entre les mains du khalifa est sa responsabilite immediate. Les contemporains du chatiment avaient entre leurs mains la lecon a tirer. Le khalifa a entre ses mains les exemples du passe pour guider son action."
            },
            "Ant\u00e9riorit\u00e9": {
              status: "nul",
              senses: ["devant"],
              proof_ctx: "L'anteriorite (devant) est un sens derive de y-d-y. Ici le duel yadayha est utilise dans l'expression idiomatique bayna yadayha qui designe la presence/proximite, pas simplement la position spatiale devant."
            }
          }
        }
      },
      {
        word_key: "xlf", position: 6, sense_chosen: "succ\u00e9der",
        analysis_axes: {
          concept_chosen: "Succession/Remplacement",
          sense_chosen: "succ\u00e9der",
          concepts: {
            "Succession/Remplacement": {
              status: "retenu",
              senses: ["succ\u00e9der", "remplacer", "successeur", "califat"],
              proof_ctx: "Le mot khalfaha est un nom masculin genitif avec pronom suffixe 3FS de la racine kh-l-f. Le Lane's donne « behind, after, what comes after, the rear ». Le mot khalfa designe la position arriere dans l'espace et le temps — ce qui vient apres, ce qui succede. Le pronom -ha renvoie a la punition. L'expression ma khalfaha designe ce qui vient apres la punition — les generations futures qui heritent de cette lecon.",
              axe1_verset: "Le mot khalfaha complete l'expression temporelle du verset. Apres bayna yadayha (les contemporains), khalfaha designe les successeurs — ceux qui viendront apres. Le chatiment est fait pour les deux groupes — les temoins et les heritiers. La couverture temporelle totale (present + futur) montre que le chatiment est un avertissement permanent.",
              axe2_voisins: "Le verset 65 decrivait le chatiment au present. Ce verset 66 etend sa portee au futur par khalfaha. La succession est le mecanisme de transmission — chaque generation succede a la precedente et herite de ses lecons. Les versets 67-71 (episode de la vache) montreront une nouvelle generation qui doit tirer les lecons du passe.",
              axe3_sourate: "La racine kh-l-f est significative dans la sourate al-Baqarah. En 2:30, Dieu place un khalifa (de la meme racine) sur terre. Le khalifa est celui qui succede, qui vient apres. En 2:66, ma khalfaha designe ceux qui succedent aux transgresseurs. La succession implique la responsabilite de tirer les lecons du passe.",
              axe4_coherence: "La racine kh-l-f apparait 127 fois dans le Coran. En 7:169, « des successeurs leur ont succede qui ont herite le Livre ». En 19:59, « des successeurs leur ont succede qui ont delaisse la priere ». La succession peut etre positive ou negative — les successeurs peuvent tirer la lecon ou reproduire les erreurs.",
              axe5_frequence: "Pour la mission du khalifa, la succession est le coeur meme de la mission. Le khalifa est le successeur — celui qui vient apres et prend la releve. Le chatiment du sabbat est fait pour les successeurs (khalfaha) afin qu'ils ne repetent pas la transgression. Le khalifa doit connaitre l'histoire pour ne pas la repeter."
            },
            "Diff\u00e9rence/Opposition": {
              status: "nul",
              senses: ["diff\u00e9rer", "contredire", "manquer \u00e0 sa promesse"],
              proof_ctx: "La difference/opposition est un sens de kh-l-f (khalafa = contredire, ikhtilaf = divergence). Ici khalfaha est un adverbe de lieu/temps (derriere elle) designant la succession temporelle, pas un acte de contradiction."
            }
          }
        }
      },
      {
        word_key: "wez", position: 7, sense_chosen: "exhorter",
        analysis_axes: {
          concept_chosen: "Exhortation/Conseil",
          sense_chosen: "exhorter",
          concepts: {
            "Exhortation/Conseil": {
              status: "retenu",
              senses: ["exhorter", "pr\u00eacher", "conseiller", "sermon"],
              proof_ctx: "Le mot maw'izatan est un nom feminin singulier accusatif indefini de la racine w-e-z. Le Lane's donne « admonition, exhortation, warning, counsel, preaching ». Le maw'iza est une lecon morale — pas une information neutre mais un conseil destine a changer le comportement. Le mot est au singulier indefini — une exhortation parmi les exhortations possibles que Dieu offre aux hommes.",
              axe1_verset: "Le mot maw'izatan est le troisieme complement de ja'alnaha — le chatiment est fait en tant que nakal (chatiment exemplaire) et en tant que maw'iza (exhortation). Le nakal est pour tous (contemporains et successeurs), la maw'iza est specifiquement pour les muttaqin (les pieux). La distinction montre deux niveaux de reception : le chatiment effraie tout le monde, mais seuls les pieux en tirent une lecon morale.",
              axe2_voisins: "Le verset 65 decrivait le chatiment brut (soyez des singes). Ce verset 66 en tire deux lecons : un exemple dissuasif (nakal) et une exhortation (maw'iza). Le passage du chatiment a la lecon montre que Dieu ne punit pas gratuitement — chaque chatiment a une finalite pedagogique. Le verset 67 ouvrira un nouveau recit avec de nouvelles lecons.",
              axe3_sourate: "La racine w-e-z dans la sourate al-Baqarah apparait aussi en 2:231 et 2:232 (l'exhortation dans le contexte du divorce). L'exhortation est un outil de guidance — Dieu exhorte par les recits, les chatiments et les lois. La sourate utilise les recits des enfants d'Israel comme exhortation pour la communaute du Prophete.",
              axe4_coherence: "La racine w-e-z apparait 25 fois dans le Coran. En 3:138, « ceci est un expose pour les gens et une exhortation pour les pieux ». En 10:57, « une exhortation de votre Seigneur et une guerison pour ce qui est dans les poitrines ». L'exhortation est toujours liee aux pieux — seuls ceux qui craignent Dieu profitent des lecons.",
              axe5_frequence: "Pour la mission du khalifa, l'exhortation est l'outil de rappel. Le khalifa doit etre receptif aux exhortations — les recits des peuples passes sont des maw'iza destinees a guider sa mission. Le chatiment du sabbat est une exhortation pour que le khalifa respecte les limites sacrees."
            }
          }
        }
      },
      {
        word_key: "wqy", position: 8, sense_chosen: "se pr\u00e9munir",
        analysis_axes: {
          concept_chosen: "Protection/Pr\u00e9servation",
          sense_chosen: "se pr\u00e9munir",
          concepts: {
            "Protection/Pr\u00e9servation": {
              status: "retenu",
              senses: ["prot\u00e9ger", "pr\u00e9server", "craindre", "pi\u00e9t\u00e9", "se pr\u00e9munir", "\u00e9viter"],
              proof_ctx: "Le mot al-muttaqina est un participe actif pluriel defini accusatif forme VIII de la racine w-q-y. Le Lane's donne « those who guard themselves against evil, who are pious, who take precaution against sin ». La forme VIII (ittaqa) ajoute une dimension reflexive — se proteger soi-meme. Le participe actif designe un agent en acte continu de protection. L'article defini (al-) identifie un groupe connu — les pieux reconnus comme tels.",
              axe1_verset: "Le mot al-muttaqina cloture le verset en identifiant les destinataires de l'exhortation. Le chatiment est un nakal pour tous mais une maw'iza pour les muttaqin seulement. La distinction est significative — tous voient le chatiment mais seuls les pieux en tirent la lecon. Le pieux est celui qui se premunit activement contre le mal — il voit le chatiment et ajuste son comportement.",
              axe2_voisins: "Le verset 65 decrivait les transgresseurs. Ce verset 66 termine par les pieux — l'oppose des transgresseurs. La sourate oppose deux groupes : ceux qui transgressent et sont chaties, et ceux qui se premunissent et tirent la lecon. Le verset 67 introduira Moise et son peuple — les pieux et les transgresseurs coexistent dans la meme communaute.",
              axe3_sourate: "La racine w-q-y est fondamentale dans la sourate al-Baqarah. En 2:2, « une guidance pour les muttaqin ». En 2:197, « premunissez-vous, car la meilleure provision est la taqwa ». La taqwa est le critere de distinction — elle determine qui profite de la guidance et de l'exhortation. La sourate s'ouvre et se cloture par la mention des muttaqin.",
              axe4_coherence: "La racine w-q-y apparait 258 fois dans le Coran. Le concept de taqwa est central dans l'ethique coranique. En 49:13, « le plus noble d'entre vous est le plus pieux ». En 3:138, l'exhortation est « pour les muttaqin ». Le Coran destine ses lecons aux pieux — ceux qui se premunissent activement contre le mal sont les seuls a profiter des avertissements.",
              axe5_frequence: "Pour la mission du khalifa, la taqwa est la qualite essentielle. Le khalifa muttaqi est celui qui se premunit contre la transgression en tirant les lecons du passe. Les chatiments exemplaires du sabbat sont une maw'iza pour le khalifa pieux — ils lui montrent les consequences de la desobeissance pour qu'il evite de tomber dans le meme piege."
            }
          }
        }
      }
    ]
  },

  // =====================================================
  // VERSET 2:67
  // verse_id=74, analysis_id=436
  // "Et lorsque Moise dit a son peuple : Dieu vous ordonne d'immoler
  //  une vache. Ils dirent : te moques-tu de nous ? Il dit : je cherche
  //  refuge aupres de Dieu contre le fait d'etre parmi les ignorants."
  // =====================================================
  67: {
    verse_id: 74,
    analysis_id: 436,
    translation_arab: "Et lorsque Moise dit a son peuple : Dieu vous ordonne d'immoler une vache. Ils dirent : nous prends-tu en derision ? Il dit : je cherche refuge aupres de Dieu contre le fait d'etre parmi les ignorants.",
    full_translation: "Et [rappelez] lorsque Moise dit a son peuple : Dieu vous ordonne d'immoler une vache. Ils dirent : nous prends-tu en derision ? Il dit : je cherche refuge aupres de Dieu contre le fait d'etre [compte] parmi les ignorants.",
    translation_explanation: `§DEMARCHE§
Ce verset ouvre le celebre recit de la vache (al-Baqarah) qui donne son nom a la sourate. La particule **wa-idh** (et lorsque) est une formule de rappel qui introduit un nouveau recit. Le verbe **qala** est un accompli 3MS de la racine q-w-l. Le Lane's donne « he said, spoke, uttered ». Moise prend la parole pour transmettre un ordre divin a son peuple. Le mot **Musa** est le nom propre du prophete Moise. Le mot **li-qawmihi** comprend le nom **qawm** au cas genitif avec pronom suffixe 3MS de la racine q-w-m. Le Lane's donne « people, community, nation, tribe ». Le peuple de Moise est les enfants d'Israel. La particule **inna** est une particule d'emphase qui renforce l'affirmation. Le nom **Allaha** est le nom propre de Dieu au cas accusatif de la racine a-l-h. Le Lane's donne « God, the one true God ». Le verbe **ya'murukum** est un inaccompli 3MS avec pronom suffixe 2MP de la racine a-m-r. Le Lane's donne « he commanded, ordered, enjoined ». L'inaccompli indique que l'ordre est en cours — Dieu ordonne presentement. La particule **an** suivie du verbe **tadhbahuu** (que vous immoliez) forme le complement de l'ordre. Le mot **baqaratan** est un nom feminin singulier accusatif indefini de la racine b-q-r. Le Lane's donne « cow, bovine, ox ». La vache est un animal domestique de grande valeur — l'immolation d'une vache est un sacrifice couteux. Le verbe **qaluu** est un accompli 3MP de la racine q-w-l. Les enfants d'Israel repondent a Moise. Le verbe **a-tattakhidhuna** est un inaccompli 2MS forme VIII avec pronom suffixe 1P et particule interrogative de la racine a-kh-dh. Le Lane's donne « do you take us, do you make us ». La question est incredule — ils ne croient pas que l'ordre est serieux. Le mot **huzuwan** est un nom masculin singulier accusatif de la racine h-z-a. Le Lane's donne « mockery, derision, jest, ridicule ». Le peuple accuse Moise de se moquer d'eux. Le verbe **qala** (3MS) est la reponse de Moise. Le verbe **a'udhu** est un inaccompli 1S de la racine e-w-dh. Le Lane's donne « I seek refuge, I take shelter, I have recourse to ». Moise cherche refuge aupres de Dieu contre l'accusation de moquerie. Le nom **bi-Allahi** est le nom de Dieu au genitif precede de la preposition bi. La particule **an** suivie de **akuna** (inaccompli 1S subjonctif de k-w-n) forme le complement. Le mot **al-jahilina** est un participe actif pluriel defini genitif de la racine j-h-l. Le Lane's donne « the ignorant, those who act ignorantly, those devoid of knowledge ». Les ignorants sont ceux qui se moquent des ordres divins — la moquerie est une forme d'ignorance.

§JUSTIFICATION§
**dit** — Le sens retenu est « dire ». Le verbe qala introduit la parole de Moise a son peuple. Pas d'alternative pertinente dans ce contexte de discours direct.

**peuple** — Le sens retenu est « peuple ». Le mot qawmihi designe la communaute de Moise. L'alternative « se lever » est ecartee car le mot est un nom (pas un verbe) et le pronom possessif (son peuple) confirme le sens de communaute.

**Dieu** — Le sens retenu est « Dieu ». Le nom Allah est le nom propre de la divinite. Pas d'alternative pertinente.

**ordonne** — Le sens retenu est « commander ». Le verbe ya'murukum designe un ordre divin transmis par le prophete. L'alternative « consulter » est ecartee car le contexte est un imperatif divin transmis par un prophete, pas une consultation.

**vache** — Le sens retenu est « vache ». Le mot baqaratan designe un bovin femelle. L'alternative « ouvrir/fendre » est ecartee car le mot est un nom d'animal specifique, pas un acte de fendre.

**derision** — Le sens retenu est « se moquer ». Le mot huzuwan designe la moquerie. L'alternative « briser » est ecartee car le contexte est une accusation de moquerie, pas une action physique.

**refuge** — Le sens retenu est « se refugier ». Le verbe a'udhu designe l'acte de chercher protection aupres de Dieu. Pas d'alternative pertinente — le verbe est specifique a la demande de protection divine.

**ignorants** — Le sens retenu est « ignorer ». Le participe al-jahilina designe ceux qui agissent par ignorance. L'alternative « etre impetueux » est ecartee car le contexte oppose la moquerie (signe d'ignorance) a la gravite du prophete.

§CRITIQUE§
**peuple vs communaute** — Le Lane's donne « people, community, nation ». « Peuple » est plus naturel en francais que « communaute » pour qawm. « Communaute » impliquerait une organisation formelle, tandis que « peuple » designe un groupe lie par l'identite.
**ordonne vs commande** — Le Lane's donne « he commanded, ordered ». « Ordonne » est prefere a « commande » car il est plus courant en francais. Les deux sont synonymes mais « ordonner » est plus fluide.
**derision vs moquerie** — Le Lane's donne « mockery, derision, ridicule ». « Derision » et « moquerie » sont interchangeables. « Derision » est prefere pour sa concision.
**ignorants vs insenses** — Le Lane's donne « the ignorant, those who act ignorantly ». « Ignorants » est plus precis que « insenses ». La jahiliyya est l'etat d'ignorance — les jahilun sont ceux qui ne savent pas et agissent en consequence.`,
    segments: [
      { fr: "et lorsque", phon: "wa-idh", arabic: "\u0648\u064E\u0625\u0650\u0630\u0652", is_particle: true, position: 0 },
      { fr: "dit", pos: "verbe", phon: "qala", arabic: "\u0642\u064E\u0627\u0644\u064E", word_key: "qwl", is_particle: false, sense_retenu: "dire", position: 1 },
      { fr: "Moise", phon: "Musa", arabic: "\u0645\u064F\u0648\u0633\u064E\u0649\u0670", is_particle: true, position: 2 },
      { fr: "a son peuple", pos: "nom", phon: "li-qawmihi", arabic: "\u0644\u0650\u0642\u064E\u0648\u0652\u0645\u0650\u0647\u0650\u06D2", word_key: "qwm", is_particle: false, sense_retenu: "peuple", position: 3 },
      { fr: "certes", phon: "inna", arabic: "\u0625\u0650\u0646\u0651\u064E", is_particle: true, position: 4 },
      { fr: "Dieu", pos: "nom", phon: "Allaha", arabic: "\u0671\u0644\u0644\u0651\u064E\u0647\u064E", word_key: "alh", is_particle: false, sense_retenu: "Dieu", position: 5 },
      { fr: "vous ordonne", pos: "verbe", phon: "ya'murukum", arabic: "\u064A\u064E\u0623\u0652\u0645\u064F\u0631\u064F\u0643\u064F\u0645\u0652", word_key: "amr", is_particle: false, sense_retenu: "commander", position: 6 },
      { fr: "que", phon: "an", arabic: "\u0623\u064E\u0646", is_particle: true, position: 7 },
      { fr: "vous immoliez", phon: "tadhbahuu", arabic: "\u062A\u064E\u0630\u0652\u0628\u064E\u062D\u064F\u0648\u0627\u06DF", is_particle: true, position: 8 },
      { fr: "une vache", pos: "nom", phon: "baqaratan", arabic: "\u0628\u064E\u0642\u064E\u0631\u064E\u0629\u064B", word_key: "bqr", is_particle: false, sense_retenu: "vache", position: 9 },
      { fr: "ils dirent", pos: "verbe", phon: "qaluu", arabic: "\u0642\u064E\u0627\u0644\u064F\u0648\u0653\u0627\u06DF", word_key: "qwl", is_particle: false, sense_retenu: "dire", position: 10 },
      { fr: "nous prends-tu en", pos: "verbe", phon: "a-tattakhidhuna", arabic: "\u0623\u064E\u062A\u064E\u062A\u0651\u064E\u062E\u0650\u0630\u064F\u0646\u064E\u0627", word_key: "akhz", is_particle: false, sense_retenu: "prendre", position: 11 },
      { fr: "derision", pos: "nom", phon: "huzuwan", arabic: "\u0647\u064F\u0632\u064F\u0648\u064B\u0627", word_key: "hza", is_particle: false, sense_retenu: "se moquer", position: 12 },
      { fr: "il dit", pos: "verbe", phon: "qala", arabic: "\u0642\u064E\u0627\u0644\u064E", word_key: "qwl", is_particle: false, sense_retenu: "dire", position: 13 },
      { fr: "je cherche refuge", pos: "verbe", phon: "a'udhu", arabic: "\u0623\u064E\u0639\u064F\u0648\u0630\u064F", word_key: "ew", is_particle: false, sense_retenu: "se r\u00e9fugier", position: 14 },
      { fr: "aupres de Dieu", pos: "nom", phon: "bi-Allahi", arabic: "\u0628\u0650\u0671\u0644\u0644\u0651\u064E\u0647\u0650", word_key: "alh", is_particle: false, sense_retenu: "Dieu", position: 15 },
      { fr: "que", phon: "an", arabic: "\u0623\u064E\u0646\u0652", is_particle: true, position: 16 },
      { fr: "je sois", pos: "verbe", phon: "akuna", arabic: "\u0623\u064E\u0643\u064F\u0648\u0646\u064E", word_key: "knw", is_particle: false, sense_retenu: "etre", position: 17 },
      { fr: "parmi", phon: "mina", arabic: "\u0645\u0650\u0646\u064E", is_particle: true, position: 18 },
      { fr: "les ignorants", pos: "nom", phon: "al-jahilina", arabic: "\u0671\u0644\u0652\u062C\u064E\u0670\u0647\u0650\u0644\u0650\u064A\u0646\u064E", word_key: "j h l", is_particle: false, sense_retenu: "ignorer", position: 19 }
    ],
    words: [
      {
        word_key: "qwl", position: 1, sense_chosen: "dire",
        analysis_axes: {
          concept_chosen: "Parole/\u00c9nonciation",
          sense_chosen: "dire",
          concepts: {
            "Parole/\u00c9nonciation": {
              status: "retenu",
              senses: ["parole", "discours", "parler", "dire", "affirmer"],
              proof_ctx: "Le verbe qala est un accompli 3MS de la racine q-w-l. Le Lane's donne « he said, spoke, uttered ». Moise dit a son peuple — il transmet un ordre divin. La parole de Moise est une parole prophetique — elle vehicule l'autorite divine. Ce verset contient trois occurrences de qala : Moise dit, ils dirent, il dit — la structure est un echange dialogique.",
              axe1_verset: "Le verbe qala ouvre le verset et structure tout le dialogue. Premiere occurrence : Moise dit (transmission de l'ordre). Deuxieme occurrence : ils dirent (reaction du peuple). Troisieme occurrence : il dit (reponse de Moise). Le verset est entierement construit sur la parole — l'enjeu est la reception de l'ordre divin. La parole de Moise transmet l'ordre, la parole du peuple le conteste, la parole de Moise le defend.",
              axe2_voisins: "Le verset 66 parlait du chatiment exemplaire. Ce verset 67 ouvre un nouveau recit avec un nouveau dialogue. La transition est marquee par wa-idh qala (et lorsque dit). Le recit de la vache (67-71) est un dialogue progressif — le peuple pose des questions et Moise repond. Chaque verset contient au moins une occurrence de qala.",
              axe3_sourate: "La racine q-w-l est la plus frequente de la sourate al-Baqarah et ce verset en contient trois occurrences. Le recit de la vache est le dialogue le plus developpe de la sourate — la parole y est le vehicule de la tension entre le prophete et son peuple. La sourate al-Baqarah tire son nom de la vache mentionnee dans cette parole.",
              axe4_coherence: "La racine q-w-l apparait plus de 1700 fois dans le Coran. Les dialogues entre prophetes et leurs peuples sont la trame narrative du Coran. Le schema qala/qaluu (il dit/ils dirent) se repete dans tous les recits prophetiques. En 7:127-129, un dialogue semblable oppose Moise a Pharaon. Le prophete dit la verite et le peuple resiste.",
              axe5_frequence: "Pour la mission du khalifa, la parole est l'instrument de transmission de la mission. Le prophete transmet l'ordre divin par la parole — le khalifa le recoit par la meme parole. Le dialogue de 2:67 montre que la parole divine est souvent contestee — le khalifa doit perseverer dans la transmission malgre la resistance."
            },
            "Pens\u00e9e/Avis": {
              status: "nul",
              senses: ["avis", "doctrine", "opinion"],
              proof_ctx: "L'avis/opinion est un sens derive de q-w-l. Ici qala est un acte de parole directe (discours direct prophetique), pas l'expression d'une opinion personnelle de Moise."
            }
          }
        }
      },
      {
        word_key: "qwm", position: 3, sense_chosen: "peuple",
        analysis_axes: {
          concept_chosen: "Peuple/Communaut\u00e9",
          sense_chosen: "peuple",
          concepts: {
            "Peuple/Communaut\u00e9": {
              status: "retenu",
              senses: ["peuple", "communaut\u00e9", "nation", "tribu", "groupe"],
              proof_ctx: "Le mot qawmihi est un nom masculin singulier genitif avec pronom suffixe 3MS de la racine q-w-m. Le Lane's donne « people, community, nation, a man's people or kinsfolk ». Le qawm est le groupe auquel on appartient par les liens du sang et de l'identite. Le pronom possessif (son peuple) lie le prophete a sa communaute — Moise est lie aux enfants d'Israel.",
              axe1_verset: "Le mot qawmihi identifie les destinataires de l'ordre. L'expression li-qawmihi (a son peuple) montre que Moise s'adresse a sa propre communaute. L'ordre d'immoler une vache est donne au peuple dans son ensemble. La reaction du peuple (te moques-tu de nous ?) montre leur incrédulite collective. Le peuple reagit comme un groupe — la question est au pluriel (qaluu).",
              axe2_voisins: "Les versets precedents (63-66) rappelaient les chatiments passes. Ce verset 67 ouvre un nouveau recit en s'adressant au meme peuple. Le qawm de Moise est le sujet constant de cette section — chaque recit les met a l'epreuve. Le peuple est a la fois le destinataire de la grace et le sujet de la transgression.",
              axe3_sourate: "La racine q-w-m est parmi les plus frequentes de la sourate. En 2:54, « O mon peuple (ya-qawmi) ». En 2:60, chaque tribu (shu'b/qawm) avait son point d'eau. Le peuple est l'unite de base de la narration — les recits coraniques s'adressent aux peuples plus qu'aux individus. La responsabilite est collective.",
              axe4_coherence: "La racine q-w-m apparait plus de 660 fois dans le Coran. Le mot qawm designe systematiquement la communaute a laquelle un prophete est envoye. En 7:138, « le peuple de Moise ». En 11:50, « le peuple de Hud ». Chaque prophete a son qawm — la relation prophete-peuple est le cadre de la guidance divine.",
              axe5_frequence: "Pour la mission du khalifa, le peuple est l'objet de la mission. Le khalifa est responsable de son peuple — il doit le guider et le gerer. Moise s'adresse a son peuple pour transmettre l'ordre divin — le khalifa fait de meme. La resistance du peuple est un defi constant que le khalifa doit surmonter."
            },
            "Verticalit\u00e9/Droiture": {
              status: "probable",
              senses: ["se lever", "droit", "rectitude", "redresser", "se dresser", "corriger", "se tenir debout"],
              proof_ctx: "La verticalite est un sens important de q-w-m (qama = se lever, mustaqim = droit). Ici qawmihi est un nom collectif designant le peuple, pas un verbe de mouvement. Cependant le lien etymologique existe — le qawm est celui qui se leve ensemble, qui se tient debout collectivement.",
              axe1_verset: "Le mot qawm dans ce verset designe le peuple de Moise. Bien que le sens premier ici soit communautaire, le lien avec la verticalite est sous-jacent — un qawm est un groupe qui se tient debout ensemble. Le peuple de Moise est appele a se dresser pour obeir a l'ordre divin. Leur refus (te moques-tu ?) est un refus de se dresser pour l'obeissance.",
              axe2_voisins: "Les versets precedents montraient les consequences de la transgression. Le peuple de Moise est appele a la droiture — se lever pour obeir plutot que resister. La verticalite morale est le contraire de la degradation en singes du verset 65. Le peuple est appele a se tenir droit face a l'ordre divin.",
              axe3_sourate: "La racine q-w-m dans la sourate couvre la verticalite morale (al-mustaqim, le chemin droit en 2:142), la station debout (qiyam), et le peuple (qawm). Ces sens convergent — un peuple droit est un peuple qui se tient debout dans l'obeissance. La sourate lie la qualite du peuple a sa droiture morale.",
              axe4_coherence: "La racine q-w-m dans le Coran designe aussi bien le peuple que la droiture. En 1:6, « le chemin droit » (al-sirat al-mustaqim). En 2:238, « tenez-vous debout devant Dieu en devots ». Le lien entre le peuple et la droiture est etymologique et conceptuel — un vrai peuple est celui qui se tient droit.",
              axe5_frequence: "Pour la mission du khalifa, la verticalite est la posture de la mission. Le khalifa se tient debout pour accomplir sa mission. Le peuple de Moise est appele a la verticalite morale — se dresser pour obeir a l'ordre d'immoler la vache, au lieu de se courber dans l'incredulite."
            },
            "Gestion/Administration": {
              status: "nul",
              senses: ["g\u00e9rer", "administrer", "prendre en charge", "diriger", "veiller sur"],
              proof_ctx: "La gestion est un sens derive de q-w-m (qayyim = gerant). Ici qawmihi est clairement le peuple de Moise — le sens communautaire est premier et non le sens administratif."
            }
          }
        }
      },
      {
        word_key: "alh", position: 5, sense_chosen: "Dieu",
        analysis_axes: {
          concept_chosen: "Divinit\u00e9",
          sense_chosen: "Dieu",
          concepts: {
            "Divinit\u00e9": {
              status: "retenu",
              senses: ["oui certes", "divinit\u00e9", "exclamation divine", "divinit\u00e9 (concept)", "th\u00e9ologie", "Dieu"],
              proof_ctx: "Le nom Allaha est le nom propre de Dieu au cas accusatif de la racine a-l-h. Le Lane's donne « God, the one true God, the Supreme Being ». Le nom Allah est le nom propre qui designe l'etre divin unique dans la tradition islamique. Le cas accusatif est regi par inna (certes Dieu). Le nom apparait deux fois dans le verset — comme sujet de l'ordre (Dieu ordonne) et comme objet du refuge (aupres de Dieu).",
              axe1_verset: "Le nom Allah structure le verset en deux poles. Premierement : Dieu ordonne (inna Allaha ya'murukum) — Dieu est la source de l'ordre. Deuxiemement : je cherche refuge aupres de Dieu (a'udhu bi-Allahi) — Dieu est le refuge du prophete. Le verset montre Dieu dans deux roles : l'autorite qui ordonne et le protecteur qui accueille. Moise se situe entre Dieu qui ordonne et le peuple qui conteste.",
              axe2_voisins: "Les versets precedents montraient Dieu punissant les transgresseurs. Ce verset 67 montre Dieu ordonnant un sacrifice. La transition est significative — Dieu passe du chatiment a l'epreuve. L'ordre d'immoler une vache est un test d'obeissance. Dieu teste son peuple par des ordres precis.",
              axe3_sourate: "Le nom Allah est le plus frequent de la sourate al-Baqarah. La sourate presente Dieu dans toutes ses dimensions : createur, legislateur, juge, protecteur, guide. En 2:67, Dieu est a la fois celui qui ordonne le sacrifice et celui aupres de qui Moise cherche refuge. La sourate montre que toute autorite et toute protection emanent de Dieu.",
              axe4_coherence: "Le nom Allah apparait plus de 2600 fois dans le Coran. C'est le mot le plus frequent du texte sacre. Dieu est le sujet ultime de chaque verset — meme quand d'autres agents agissent, c'est la volonte divine qui les meut. En 2:67, l'ordre d'immoler vient de Dieu, pas de Moise — le prophete n'est que le transmetteur.",
              axe5_frequence: "Pour la mission du khalifa, Dieu est le mandataire supreme. Le khalifa recoit sa mission de Dieu — comme le peuple de Moise recoit l'ordre d'immoler de Dieu. Le refuge aupres de Dieu est la protection du khalifa contre les accusations et les resistances."
            },
            "D\u00e9tresse": {
              status: "nul",
              senses: ["\u00eatre perplexe", "se lamenter"],
              proof_ctx: "La detresse est un sens derive de a-l-h (aliha = etre perplexe). Ici Allah est le nom propre de Dieu, pas un etat de detresse."
            }
          }
        }
      },
      {
        word_key: "amr", position: 6, sense_chosen: "commander",
        analysis_axes: {
          concept_chosen: "Commandement/Autorit\u00e9",
          sense_chosen: "commander",
          concepts: {
            "Commandement/Autorit\u00e9": {
              status: "retenu",
              senses: ["commander", "nommer gouverneur", "ordonner"],
              proof_ctx: "Le verbe ya'murukum est un inaccompli 3MS avec pronom suffixe 2MP de la racine a-m-r. Le Lane's donne « he commanded, ordered, enjoined, directed ». L'inaccompli indique que l'ordre est en cours — Dieu est en train de vous ordonner. Le pronom suffixe -kum (vous) rend l'ordre direct et personnel — c'est vous qui etes concernes. Le sujet est Allaha (Dieu) — l'autorite de l'ordre est divine.",
              axe1_verset: "Le verbe ya'murukum est le coeur de la transmission prophetique. Moise ne dit pas « j'ordonne » mais « Dieu ordonne ». La source de l'autorite est divine, pas humaine. L'objet de l'ordre est precis — immoler une vache. La precision de l'ordre sera le sujet des versets suivants (quelle vache ? de quelle couleur ?). Le peuple reagit a l'ordre par l'incredulite — la resistance a l'ordre divin est le theme central.",
              axe2_voisins: "Le verset 63 rappelait le pacte. Le verset 65 rappelait le chatiment des transgresseurs du sabbat. Ce verset 67 donne un nouvel ordre divin. La sequence pacte-chatiment-ordre est pedagogique — apres avoir rappele les consequences de la desobeissance, un nouvel ordre est donne. Le peuple devrait obeir sans questionner, mais il resiste.",
              axe3_sourate: "La racine a-m-r dans la sourate couvre le commandement divin et la consultation. En 2:27, « ce que Dieu a ordonne de joindre ». En 2:44, « ordonnez-vous aux gens la bonte alors que vous vous oubliez vous-memes ? ». Le commandement divin est une constante — Dieu ordonne et attend l'obeissance. La sourate montre que la resistance a l'ordre est une forme de transgression.",
              axe4_coherence: "La racine a-m-r apparait 247 fois dans le Coran. L'ordre divin (amr) est la source de toute legislation coranique. En 7:77, le peuple de Salih transgresse l'ordre de leur Seigneur. En 18:50, Iblis refuse l'ordre de se prosterner. La resistance a l'ordre divin est un theme recurrent — les peuples et les individus sont constamment testes par les ordres divins.",
              axe5_frequence: "Pour la mission du khalifa, le commandement divin est la source de la mission. Le khalifa recoit des ordres et doit les executer. L'ordre d'immoler la vache est un test d'obeissance — le peuple qui questionne et retarde montre sa faiblesse face au commandement. Le khalifa exemplaire est celui qui obeit immediatement."
            },
            "Consultation": {
              status: "nul",
              senses: ["consulter"],
              proof_ctx: "La consultation (mu'amara, shura) est un sens derive de a-m-r. Ici ya'murukum est clairement un ordre (3MS sujet Dieu), pas une consultation — Dieu ordonne, il ne consulte pas."
            }
          }
        }
      },
      {
        word_key: "bqr", position: 9, sense_chosen: "vache",
        analysis_axes: {
          concept_chosen: "B\u00e9tail/Animal",
          sense_chosen: "vache",
          concepts: {
            "B\u00e9tail/Animal": {
              status: "retenu",
              senses: ["vache", "boeuf"],
              proof_ctx: "Le mot baqaratan est un nom feminin singulier accusatif indefini de la racine b-q-r. Le Lane's donne « a cow, an ox, a bovine animal ». La baqara est la femelle du bovin — une vache. Le ta' marbuta confirme le feminin. L'indefini (une vache, pas la vache) laisse le choix ouvert — n'importe quelle vache pourrait convenir. Cette imprecision initiale sera l'objet des versets suivants ou le peuple demande des precisions.",
              axe1_verset: "Le mot baqaratan est l'objet de l'ordre divin — c'est ce qui doit etre immole. La vache est un animal de grande valeur dans les societes agropastorales — l'immolation d'une vache est un sacrifice significatif. L'indefini (une vache) montre que l'ordre initial est simple et non contraignant. C'est le peuple qui compliquera l'affaire en demandant des precisions excessives dans les versets suivants.",
              axe2_voisins: "Les versets precedents parlaient de chatiment. Ce verset 67 introduit un ordre de sacrifice. La transition du chatiment au sacrifice montre un changement de registre — de la punition a l'epreuve. La vache est l'objet de l'epreuve — le peuple doit prouver son obeissance en immolant un animal de valeur. Les versets 68-71 montreront que le peuple echoue a cette epreuve par ses tergiversations.",
              axe3_sourate: "La racine b-q-r est le nom meme de la sourate — al-Baqarah (la Vache). Ce verset 67 est le premier ou la vache est mentionnee. La sourate tire son nom de cet animal qui est au coeur du recit le plus significatif — l'epreuve de l'obeissance. Le fait que la plus longue sourate du Coran soit nommee d'apres une vache souligne l'importance de cet episode.",
              axe4_coherence: "La racine b-q-r apparait 9 fois dans le Coran, toutes dans le contexte des bovins. En 6:144, les bovins sont mentionnes parmi les animaux licites. En 12:43-46, les vaches apparaissent dans le reve de Pharaon interprete par Yusuf. La vache est un animal symboliquement charge — elle represente la richesse, la subsistance et le sacrifice.",
              axe5_frequence: "Pour la mission du khalifa, la vache represente l'epreuve de l'obeissance. Le khalifa est teste par des ordres qui peuvent sembler etranges ou couteux. L'immolation de la vache est un sacrifice — le khalifa doit accepter de sacrifier ses biens et ses habitudes pour obeir a l'ordre divin."
            },
            "Ouverture/Fente": {
              status: "nul",
              senses: ["ouvrir", "fendre"],
              proof_ctx: "Le sens d'ouvrir/fendre (baqara = fendre) est le sens etymologique de la racine b-q-r. Ici baqaratan est clairement le nom de l'animal (une vache), pas un acte de fendre. Le contexte de sacrifice exclut le sens d'ouverture."
            }
          }
        }
      },
      {
        word_key: "hza", position: 12, sense_chosen: "se moquer",
        analysis_axes: {
          concept_chosen: "Moquerie/D\u00e9rision",
          sense_chosen: "se moquer",
          concepts: {
            "Moquerie/D\u00e9rision": {
              status: "retenu",
              senses: ["se moquer", "railler", "ridiculiser", "celui dont on se moque", "moqueur"],
              proof_ctx: "Le mot huzuwan est un nom masculin singulier accusatif de la racine h-z-a. Le Lane's donne « mockery, derision, ridicule, jest ». Le mot designe l'acte de se moquer — traiter quelque chose comme une plaisanterie. L'accusatif fonctionne comme complement d'objet de tattakhidhuna — nous prends-tu comme (objet de) derision. Le peuple accuse Moise de les tourner en ridicule.",
              axe1_verset: "Le mot huzuwan est la reaction du peuple a l'ordre. Au lieu d'obeir, ils accusent Moise de moquerie. L'accusation est grave — un prophete qui se moque de son peuple trahit sa mission. Moise repond en cherchant refuge aupres de Dieu contre l'ignorance. La moquerie est assimilee a l'ignorance — se moquer des ordres divins est une forme d'ignorance. Le verset oppose la moquerie du peuple au serieux du prophete.",
              axe2_voisins: "Le verset 65 montrait le chatiment des transgresseurs. Ce verset 67 montre une autre forme de resistance — la moquerie. La moquerie est plus subtile que la transgression directe — elle delegitime l'ordre sans le violer ouvertement. Les versets suivants montreront que le peuple continue a resister par des questions excessives plutot que par la moquerie directe.",
              axe3_sourate: "La racine h-z-a dans la sourate al-Baqarah revient en 2:231 (ne prenez pas les versets de Dieu en derision). La moquerie des ordres divins est un theme de la sourate — elle est l'attitude opposee a la taqwa. Ceux qui se moquent ne tirent pas de lecon des chatiments exemplaires. La sourate condamne la derision comme une forme de kufr.",
              axe4_coherence: "La racine h-z-a apparait 33 fois dans le Coran. En 6:10, « on s'est moque des messagers avant toi ». En 18:56, « ils prennent Mes signes et ce dont on les avertit en derision ». La moquerie est une attitude recurrente des peuples face aux prophetes. Le Coran avertit que ceux qui se moquent seront eux-memes l'objet du chatiment.",
              axe5_frequence: "Pour la mission du khalifa, la moquerie est un obstacle a la mission. Le khalifa qui se moque des ordres divins ou qui subit la moquerie de son peuple est mis a l'epreuve. La reponse de Moise (je cherche refuge aupres de Dieu) est le modele — face a la moquerie, le prophete/khalifa se refugie en Dieu."
            },
            "Sens isol\u00e9/Briser": {
              status: "nul",
              senses: ["briser"],
              proof_ctx: "Le sens de briser est un sens rare de h-z-a. Ici huzuwan est clairement dans le registre de la moquerie (contexte dialogique d'accusation), pas de la destruction physique."
            }
          }
        }
      },
      {
        word_key: "ew", position: 14, sense_chosen: "se r\u00e9fugier",
        analysis_axes: {
          concept_chosen: "Refuge/Protection",
          sense_chosen: "se r\u00e9fugier",
          concepts: {
            "Refuge/Protection": {
              status: "retenu",
              senses: ["se r\u00e9fugier", "demander protection", "chercher refuge"],
              proof_ctx: "Le verbe a'udhu est un inaccompli 1S de la racine e-w-dh. Le Lane's donne « I seek refuge, I take shelter, I have recourse for protection ». Le verbe est a la premiere personne (je) — Moise parle en son nom. L'inaccompli indique un acte present et continu — je suis en train de chercher refuge. La preposition bi (aupres de) introduit l'objet du refuge — Dieu. Moise ne cherche pas refuge aupres des hommes mais aupres de Dieu.",
              axe1_verset: "Le verbe a'udhu est la reponse de Moise a l'accusation de moquerie. Au lieu de se defendre par des arguments humains, il se refugie en Dieu. La formule a'udhu bi-Allahi est une formule de protection prophetique — elle invoque Dieu comme temoin et protecteur. L'objet du refuge est « d'etre parmi les ignorants » — Moise refuse d'etre associe a l'ignorance. Se moquer des ordres divins est de l'ignorance.",
              axe2_voisins: "Le verset 65 montrait Dieu punissant les transgresseurs. Ce verset 67 montre Moise cherchant refuge en Dieu contre l'accusation d'ignorance. Le prophete se situe entre Dieu et le peuple — il recoit l'ordre d'en haut et fait face a la resistance d'en bas. Le refuge en Dieu est la strategie du prophete face a la contestation.",
              axe3_sourate: "La racine e-w-dh est rare dans la sourate al-Baqarah. Le recours a Dieu est implicite dans toute la sourate mais rarement formule avec a'udhu. La formule est plus frequente dans les courtes sourates (113, 114 : a'udhu bi-rabbi). La mention dans al-Baqarah souligne la gravite de la situation — Moise a besoin du refuge divin face a l'insolence de son peuple.",
              axe4_coherence: "La racine e-w-dh apparait 17 fois dans le Coran. En 113:1, « dis : je cherche refuge aupres du Seigneur de l'aube ». En 114:1, « dis : je cherche refuge aupres du Seigneur des hommes ». En 19:18, Marie dit « je cherche refuge aupres du Misericordieux ». La formule a'udhu est utilisee dans les moments de vulnerability — le croyant se tourne vers Dieu quand il est menace.",
              axe5_frequence: "Pour la mission du khalifa, le refuge en Dieu est la protection ultime. Le khalifa face a la contestation de son peuple doit se refugier en Dieu. La formule a'udhu bi-Allahi est un modele — face a l'accusation injuste, le khalifa ne riposte pas mais cherche la protection divine. Le refuge est une force, pas une faiblesse."
            }
          }
        }
      },
      {
        word_key: "knw", position: 17, sense_chosen: "etre",
        analysis_axes: {
          concept_chosen: "Existence/Devenir",
          sense_chosen: "etre",
          concepts: {
            "Existence/Devenir": {
              status: "retenu",
              senses: ["\u00eatre", "exister", "devenir"],
              proof_ctx: "Le verbe akuna est un inaccompli 1S subjonctif de la racine k-w-n. Le Lane's donne « I be, I become, I exist ». Le subjonctif est regi par an (que je sois) — c'est une possibilite rejetee. Moise refuse de devenir un ignorant. Le verbe kana ici designe l'etat potentiel — il cherche refuge contre la possibilite d'etre compte parmi les ignorants.",
              axe1_verset: "Le verbe akuna fait partie de la conclusion de Moise : je cherche refuge aupres de Dieu contre le fait d'etre parmi les ignorants. Le verbe au subjonctif exprime une hypothese rejetee — Moise refuse categoriquement d'etre associe aux ignorants. L'etre ici est un statut — etre parmi les ignorants signifie partager leur etat d'ignorance. La moquerie est de l'ignorance et Moise refuse d'en faire partie.",
              axe2_voisins: "Dans le verset 65, kunuu (soyez) etait un imperatif de chatiment (soyez des singes). Ici akuna (que je sois) est une hypothese rejetee (je refuse d'etre un ignorant). Le contraste est frappant — les transgresseurs sont condamnes a etre des singes, tandis que Moise refuse d'etre un ignorant. L'etre est un devenir choisi ou impose.",
              axe3_sourate: "La racine k-w-n dans la sourate couvre l'existence et le devenir. En 2:117, kun fa-yakun (sois et c'est) est le verbe de la creation divine. En 2:65, kunuu est le verbe du chatiment. En 2:67, akuna est le verbe du refus — Moise refuse de devenir ignorant. Le verbe kana traverse tous les registres de la sourate.",
              axe4_coherence: "La racine k-w-n est l'une des plus frequentes du Coran. Le verbe kana/yakunu couvre l'existence, le devenir et l'etat. En 11:46, Noe demande a Dieu « que je sois parmi les ignorants ? ». Le parallele avec 2:67 est significatif — les prophetes refusent systematiquement l'ignorance. L'etre du prophete est defini par le savoir, pas l'ignorance.",
              axe5_frequence: "Pour la mission du khalifa, l'etre est le fondement de la mission. Le khalifa doit etre savant, pas ignorant. Le refus de Moise d'etre parmi les ignorants est un modele pour le khalifa — la mission exige le savoir et le serieux, pas l'ignorance et la moquerie."
            }
          }
        }
      },
      {
        word_key: "j h l", position: 19, sense_chosen: "ignorer",
        analysis_axes: {
          concept_chosen: "Ignorance/M\u00e9connaissance",
          sense_chosen: "ignorer",
          concepts: {
            "Ignorance/M\u00e9connaissance": {
              status: "retenu",
              senses: ["ignorer", "\u00eatre ignorant", "agir par ignorance"],
              proof_ctx: "Le mot al-jahilina est un participe actif pluriel defini genitif de la racine j-h-l. Le Lane's donne « the ignorant, those who are ignorant, those who act foolishly or ignorantly ». Le participe actif designe un agent en etat continu d'ignorance. L'article defini (al-) identifie un groupe connu — les ignorants en tant que categorie morale. L'ignorance ici n'est pas l'absence de savoir mais l'attitude de celui qui refuse de prendre les choses au serieux.",
              axe1_verset: "Le mot al-jahilina cloture le verset en definissant ce que Moise refuse d'etre. L'ignorance est le contraire de la prophetie — le prophete sait et transmet, l'ignorant se moque et refuse. La moquerie (huzuw) est assimilee a l'ignorance (jahl) — se moquer des ordres divins est le signe de l'ignorance. Le verset oppose deux categories : les prophetes qui transmettent serieusement et les ignorants qui se moquent.",
              axe2_voisins: "Le verset 65 montrait les transgresseurs transformes en singes — une forme de degradation. Ce verset 67 montre l'ignorance comme une autre forme de degradation morale. La transgression et l'ignorance sont liees — on transgresse parce qu'on ignore la gravite de l'ordre. L'ignorant est celui qui ne tire pas de lecon du chatiment exemplaire (verset 66).",
              axe3_sourate: "La racine j-h-l dans la sourate al-Baqarah apparait aussi en 2:273 (l'ignorant les croit riches). L'ignorance dans la sourate est une meconnaissance volontaire — on refuse de voir la verite plutot que de ne pas avoir acces a l'information. Les enfants d'Israel qui accusent Moise de moquerie sont des ignorants qui refusent de reconnaitre la gravite de l'ordre divin.",
              axe4_coherence: "La racine j-h-l apparait 24 fois dans le Coran. En 6:35, « ne sois pas parmi les ignorants ». En 39:64, « dites-vous de servir autre que Dieu, o ignorants ? ». L'ignorance dans le Coran est toujours une ignorance morale — elle est le refus de reconnaitre la verite divine. La jahiliyya (l'ere de l'ignorance pre-islamique) est l'etat de ceux qui vivent sans guidance divine.",
              axe5_frequence: "Pour la mission du khalifa, l'ignorance est l'antithese de la mission. Le khalifa doit connaitre et appliquer — l'ignorance le disqualifie. La reponse de Moise (je cherche refuge contre l'ignorance) est le modele — le khalifa doit activement combattre l'ignorance en lui-meme et dans son peuple."
            },
            "Sens isol\u00e9/\u00catre": {
              status: "nul",
              senses: ["\u00eatre imp\u00e9tueux"],
              proof_ctx: "L'impetuosite est un sens derive de j-h-l (jahila = etre impetueux, fougueux). Ici al-jahilina est clairement dans le registre de l'ignorance morale (oppose a la sagesse prophetique), pas de l'impetuosite physique."
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
  // sbt (id=601) — sabbat
  { analysis_id: 601, phrases: [
    { sense: "sabbat", arabic: "\u0627\u0644\u0633\u0651\u064E\u0628\u0652\u062A\u064F \u064A\u064E\u0648\u0652\u0645\u064F \u0631\u064E\u0627\u062D\u064E\u0629\u064D \u0648\u064E\u0639\u0650\u0628\u064E\u0627\u062F\u064E\u0629\u064D", phon: "al-sabtu yawmu rahatin wa-'ibadatin", french: "Le sabbat est un jour de repos et d'adoration." },
    { sense: "samedi", arabic: "\u064A\u064E\u0648\u0652\u0645\u064F \u0627\u0644\u0633\u0651\u064E\u0628\u0652\u062A\u0650 \u0633\u064E\u0627\u0628\u0650\u0639\u064F \u0627\u0644\u0623\u064E\u064A\u0651\u064E\u0627\u0645\u0650", phon: "yawmu al-sabti sabi'u al-ayyami", french: "Le jour du sabbat est le septieme des jours." },
    { sense: "repos", arabic: "\u0633\u064E\u0628\u064E\u062A\u064E \u0627\u0644\u0631\u0651\u064E\u062C\u064F\u0644\u064F \u0641\u064E\u0646\u064E\u0627\u0645\u064E", phon: "sabata al-rajulu fa-nama", french: "L'homme s'est repose et a dormi." }
  ]},
  // qrd (id=602) — singe
  { analysis_id: 602, phrases: [
    { sense: "singe", arabic: "\u0643\u064F\u0648\u0646\u064F\u0648\u0627 \u0642\u0650\u0631\u064E\u062F\u064E\u0629\u064B \u062E\u064E\u0627\u0633\u0650\u0626\u0650\u064A\u0646\u064E", phon: "kunuu qiradatan khasi'ina", french: "Soyez des singes meprises." },
    { sense: "primate", arabic: "\u0627\u0644\u0642\u0650\u0631\u0652\u062F\u064F \u064A\u064F\u0642\u064E\u0644\u0651\u0650\u062F\u064F \u0648\u064E\u0644\u064E\u0627 \u064A\u064E\u0641\u0652\u0647\u064E\u0645\u064F", phon: "al-qirdu yuqallidu wa-la yafhamu", french: "Le singe imite mais ne comprend pas." },
    { sense: "singe", arabic: "\u0645\u064E\u0633\u064E\u062E\u064E\u0647\u064F\u0645\u064F \u0627\u0644\u0644\u0651\u064E\u0647\u064F \u0642\u0650\u0631\u064E\u062F\u064E\u0629\u064B \u0648\u064E\u062E\u064E\u0646\u064E\u0627\u0632\u0650\u064A\u0631\u064E", phon: "masakahumul-Lahu qiradatan wa-khanazira", french: "Dieu les a transformes en singes et en porcs." }
  ]},
  // ksa (id=603) — mepris
  { analysis_id: 603, phrases: [
    { sense: "repousser", arabic: "\u062E\u064E\u0633\u064E\u0623\u064E \u0627\u0644\u0643\u064E\u0644\u0652\u0628\u064E \u0641\u064E\u0627\u0646\u0652\u0635\u064E\u0631\u064E\u0641\u064E", phon: "khasa'a al-kalba fa-insarafa", french: "Il a repousse le chien et celui-ci est parti." },
    { sense: "mépriser", arabic: "\u062E\u064E\u0633\u0650\u0626\u064F\u0648\u0627 \u0641\u0650\u064A\u0647\u064E\u0627 \u0648\u064E\u0644\u064E\u0627 \u062A\u064F\u0643\u064E\u0644\u0651\u0650\u0645\u064F\u0648\u0646\u0650", phon: "ikhsa'uu fiha wa-la tukallimuni", french: "Restez-y meprises et ne M'adressez pas la parole." },
    { sense: "rejeter", arabic: "\u064A\u064E\u0646\u0642\u064E\u0644\u0650\u0628\u064F \u0625\u0650\u0644\u064E\u064A\u0652\u0643\u064E \u0627\u0644\u0628\u064E\u0635\u064E\u0631\u064F \u062E\u064E\u0627\u0633\u0650\u0626\u064B\u0627", phon: "yanqalibu ilayka al-basaru khasi'an", french: "Le regard te revient rejete [et fatigue]." }
  ]},
  // nkl (id=595) — chatiment exemplaire
  { analysis_id: 595, phrases: [
    { sense: "châtiment", arabic: "\u0623\u064E\u062E\u064E\u0630\u064E\u0647\u064F \u0627\u0644\u0644\u0651\u064E\u0647\u064F \u0646\u064E\u0643\u064E\u0627\u0644\u064E \u0627\u0644\u0622\u062E\u0650\u0631\u064E\u0629\u0650 \u0648\u064E\u0627\u0644\u0623\u064F\u0648\u0644\u064E\u0649", phon: "akhadhahu Allahu nakala al-akhirati wa-al-ula", french: "Dieu le saisit du chatiment de l'Au-dela et de ce monde." },
    { sense: "exemple dissuasif", arabic: "\u062C\u064E\u0639\u064E\u0644\u0652\u0646\u064E\u0627\u0647\u064E\u0627 \u0646\u064E\u0643\u064E\u0627\u0644\u064B\u0627 \u0644\u0650\u0645\u064E\u0627 \u0628\u064E\u064A\u0652\u0646\u064E \u064A\u064E\u062F\u064E\u064A\u0652\u0647\u064E\u0627", phon: "ja'alnaha nakalan li-ma bayna yadayha", french: "Nous en avons fait un exemple dissuasif pour leur temps." },
    { sense: "entraves", arabic: "\u0625\u0650\u0646\u0651\u064E \u0644\u064E\u062F\u064E\u064A\u0652\u0646\u064E\u0627 \u0623\u064E\u0646\u0643\u064E\u0627\u0644\u064B\u0627 \u0648\u064E\u062C\u064E\u062D\u0650\u064A\u0645\u064B\u0627", phon: "inna ladayna ankalan wa-jahiman", french: "Nous avons des entraves et un feu ardent." }
  ]},
  // wez (id=598) — exhortation
  { analysis_id: 598, phrases: [
    { sense: "exhorter", arabic: "\u0639\u0650\u0638\u0652 \u0627\u0644\u0646\u0651\u064E\u0627\u0633\u064E \u0628\u0650\u0627\u0644\u062D\u0650\u0643\u0652\u0645\u064E\u0629\u0650 \u0648\u064E\u0627\u0644\u0645\u064E\u0648\u0652\u0639\u0650\u0638\u064E\u0629\u0650", phon: "'iz al-nasa bi-al-hikmati wa-al-maw'izati", french: "Exhorte les gens avec sagesse et bonne exhortation." },
    { sense: "sermon", arabic: "\u062E\u064E\u0637\u064E\u0628\u064E \u0627\u0644\u0625\u0650\u0645\u064E\u0627\u0645\u064F \u0645\u064E\u0648\u0652\u0639\u0650\u0638\u064E\u0629\u064B \u0628\u064E\u0644\u0650\u064A\u063A\u064E\u0629\u064B", phon: "khataba al-imamu maw'izatan baligatan", french: "L'imam a donne un sermon eloquent." },
    { sense: "conseiller", arabic: "\u064A\u064E\u0639\u0650\u0638\u064F\u0643\u064F\u0645\u064F \u0627\u0644\u0644\u0651\u064E\u0647\u064F \u0644\u064E\u0639\u064E\u0644\u0651\u064E\u0643\u064F\u0645\u0652 \u062A\u064E\u0630\u064E\u0643\u0651\u064E\u0631\u064F\u0648\u0646\u064E", phon: "ya'izukumu Allahu la'allakum tadhakkaruna", french: "Dieu vous conseille afin que vous vous rappeliez." }
  ]},
  // bqr (id=611) — vache
  { analysis_id: 611, phrases: [
    { sense: "vache", arabic: "\u0625\u0650\u0646\u0651\u064E \u0627\u0644\u0644\u0651\u064E\u0647\u064E \u064A\u064E\u0623\u0652\u0645\u064F\u0631\u064F\u0643\u064F\u0645\u0652 \u0623\u064E\u0646 \u062A\u064E\u0630\u0652\u0628\u064E\u062D\u064F\u0648\u0627 \u0628\u064E\u0642\u064E\u0631\u064E\u0629\u064B", phon: "inna Allaha ya'murukum an tadhbahuu baqaratan", french: "Dieu vous ordonne d'immoler une vache." },
    { sense: "boeuf", arabic: "\u0633\u064E\u0628\u0652\u0639\u064F \u0628\u064E\u0642\u064E\u0631\u064E\u0627\u062A\u064D \u0633\u0650\u0645\u064E\u0627\u0646\u064D", phon: "sab'u baqaratin simanin", french: "Sept vaches grasses." },
    { sense: "vache", arabic: "\u0628\u064E\u0642\u064E\u0631\u064E\u0629\u064C \u0635\u064E\u0641\u0652\u0631\u064E\u0627\u0621\u064F \u0641\u064E\u0627\u0642\u0650\u0639\u064C \u0644\u0651\u064E\u0648\u0652\u0646\u064F\u0647\u064E\u0627", phon: "baqaratun safra'u faqi'un lawnuha", french: "Une vache jaune, eclatante de couleur." }
  ]},
  // hza (id=320) — moquerie
  { analysis_id: 320, phrases: [
    { sense: "se moquer", arabic: "\u0627\u0644\u0651\u064E\u0630\u0650\u064A\u0646\u064E \u064A\u064E\u062A\u0651\u064E\u062E\u0650\u0630\u064F\u0648\u0646\u064E \u062F\u0650\u064A\u0646\u064E\u0647\u064F\u0645\u0652 \u0647\u064F\u0632\u064F\u0648\u064B\u0627", phon: "alladhina yattakhidhuna dinahum huzuwan", french: "Ceux qui prennent leur religion en derision." },
    { sense: "railler", arabic: "\u0648\u064E\u0625\u0650\u0630\u064E\u0627 \u0631\u064E\u0623\u064E\u0648\u0652\u0643\u064E \u0625\u0650\u0646 \u064A\u064E\u062A\u0651\u064E\u062E\u0650\u0630\u064F\u0648\u0646\u064E\u0643\u064E \u0625\u0650\u0644\u0651\u064E\u0627 \u0647\u064F\u0632\u064F\u0648\u064B\u0627", phon: "wa-idha ra'awka in yattakhidhunaka illa huzuwan", french: "Et quand ils te voient, ils ne font que te railler." },
    { sense: "moqueur", arabic: "\u0627\u0633\u0652\u062A\u064F\u0647\u0652\u0632\u0650\u0626\u064E \u0628\u0650\u0631\u064F\u0633\u064F\u0644\u064D \u0645\u0650\u0651\u0646 \u0642\u064E\u0628\u0652\u0644\u0650\u0647\u0650\u0645\u0652", phon: "istuhzi'a bi-rusulin min qablihim", french: "On s'est moque des messagers avant eux." }
  ]},
  // ew (id=2579) — refuge
  { analysis_id: 2579, phrases: [
    { sense: "se réfugier", arabic: "\u0623\u064E\u0639\u064F\u0648\u0630\u064F \u0628\u0650\u0627\u0644\u0644\u0651\u064E\u0647\u0650 \u0645\u0650\u0646\u064E \u0627\u0644\u0634\u0651\u064E\u064A\u0652\u0637\u064E\u0627\u0646\u0650 \u0627\u0644\u0631\u0651\u064E\u062C\u0650\u064A\u0645\u0650", phon: "a'udhu bi-Allahi mina al-shaytani al-rajimi", french: "Je cherche refuge aupres de Dieu contre Satan le lapide." },
    { sense: "demander protection", arabic: "\u0642\u064F\u0644\u0652 \u0623\u064E\u0639\u064F\u0648\u0630\u064F \u0628\u0650\u0631\u064E\u0628\u0651\u0650 \u0627\u0644\u0641\u064E\u0644\u064E\u0642\u0650", phon: "qul a'udhu bi-rabbi al-falaqi", french: "Dis : je cherche protection aupres du Seigneur de l'aube." },
    { sense: "chercher refuge", arabic: "\u0642\u064F\u0644\u0652 \u0623\u064E\u0639\u064F\u0648\u0630\u064F \u0628\u0650\u0631\u064E\u0628\u0651\u0650 \u0627\u0644\u0646\u0651\u064E\u0627\u0633\u0650", phon: "qul a'udhu bi-rabbi al-nasi", french: "Dis : je cherche refuge aupres du Seigneur des hommes." }
  ]},
  // j h l (id=1184) — ignorance
  { analysis_id: 1184, phrases: [
    { sense: "ignorer", arabic: "\u0623\u064E\u0639\u064F\u0648\u0630\u064F \u0628\u0650\u0627\u0644\u0644\u0651\u064E\u0647\u0650 \u0623\u064E\u0646\u0652 \u0623\u064E\u0643\u064F\u0648\u0646\u064E \u0645\u0650\u0646\u064E \u0627\u0644\u062C\u064E\u0627\u0647\u0650\u0644\u0650\u064A\u0646\u064E", phon: "a'udhu bi-Allahi an akuna mina al-jahilina", french: "Je cherche refuge aupres de Dieu contre le fait d'etre parmi les ignorants." },
    { sense: "être ignorant", arabic: "\u0623\u064E\u0641\u064E\u0623\u064E\u0645\u0650\u0646\u064E \u0623\u064E\u0647\u0652\u0644\u064F \u0627\u0644\u0642\u064F\u0631\u064E\u0649 \u0623\u064E\u0646 \u064A\u064E\u0623\u0652\u062A\u0650\u064A\u064E\u0647\u064F\u0645\u0652 \u0628\u064E\u0623\u0652\u0633\u064F\u0646\u064E\u0627", phon: "afa-amina ahlu al-qura an ya'tiyahum ba'suna", french: "Les gens des cites se croient-ils a l'abri de Notre chatiment ?" },
    { sense: "agir par ignorance", arabic: "\u0625\u0650\u0646\u0651\u064E\u0645\u064E\u0627 \u0627\u0644\u062A\u0651\u064E\u0648\u0652\u0628\u064E\u0629\u064F \u0644\u0650\u0644\u0651\u064E\u0630\u0650\u064A\u0646\u064E \u064A\u064E\u0639\u0652\u0645\u064E\u0644\u064F\u0648\u0646\u064E \u0627\u0644\u0633\u0651\u064F\u0648\u0621\u064E \u0628\u0650\u062C\u064E\u0647\u064E\u0627\u0644\u064E\u0629\u064D", phon: "innama al-tawbatu lilladhina ya'maluna al-su'a bi-jahalatin", french: "Le repentir est pour ceux qui font le mal par ignorance." }
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

  const verseIds = [72, 73, 74];
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
  console.log('=== PIPELINE SOURATE 2 — AL-BAQARAH — VERSETS 65 A 67 ===\n');

  let totalOk = 0, totalErr = 0;

  for (let v = 65; v <= 67; v++) {
    const result = await processVerse(v);
    if (result) {
      totalOk += result.okCount;
      totalErr += result.errCount;
    }
  }

  await syncWordMeanings();
  await insertDailyPhrases();

  console.log(`\n=== PIPELINE V65-67 TERMINEE — TOTAL: ${totalOk} OK, ${totalErr} erreurs ===`);
}

main().catch(e => console.error('FATAL:', e));
