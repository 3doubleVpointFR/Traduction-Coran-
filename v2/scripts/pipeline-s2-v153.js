const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// =====================================================
// PIPELINE SOURATE 2 — VERSET 153
// verse_id=160, analysis_id=518
// "O vous qui avez cru, cherchez secours dans la patience
//  et la priere. Dieu est avec les endurants."
// Ouverture de la section sur l'epreuve et la patience
// (culmine aux versets 155-157)
// =====================================================

const verseData = {
  153: {
    verse_id: 160,
    analysis_id: 518,
    translation_arab: "O vous qui avez cru, cherchez secours dans la patience et la priere. Dieu est avec les endurants.",
    full_translation: "O les croyants ! Cherchez secours dans l'endurance et la Salat. Car Allah est avec les endurants.",
    translation_explanation: `§DEMARCHE§
Le verset s'ouvre par un appel direct aux croyants : « ya ayyuha alladhina amanu » (o vous qui avez cru). Cette formule d'interpellation est un vocatif qui cible specifiquement ceux qui ont la foi — elle exclut les non-croyants. Le pronom relatif « alladhina » (ceux qui) fonctionne comme un qualificatif : ce n'est pas « vous tous » mais « vous qui possedez cette qualite specifique — la foi ». Le verbe **amanu** est un accompli 3MP de la racine a-m-n. Le Lane's donne : croire, faire confiance, se sentir en securite. L'accompli indique que la croyance est un fait etabli — ils ont deja cru. La forme IV (afala → amana) ajoute le sens de rendre sur, rendre vrai pour soi — croire c'est accepter comme vrai et s'en remettre a ce qui est cru. Le verbe **ista'inu** est un imperatif 2MP de la forme X (istaf'ala) de la racine '-w-n. Le Lane's donne : demander l'aide, chercher le secours, solliciter l'assistance. La forme X ajoute le sens de demande — ce n'est pas recevoir l'aide passivement mais la chercher activement. L'imperatif marque un ordre divin direct — cherchez secours. Le verbe est transitif par la preposition « bi » (par/dans) — cherchez secours PAR la patience et la priere. Le nom **as-sabri** est un nom masculin singulier defini au genitif de la racine s-b-r. Le Lane's donne : patience, endurance, retenue, capacite de supporter sans flechir. Le sabr est l'acte interieur de se retenir face a l'epreuve — ne pas ceder sous la pression. L'article defini « al » marque que c'est LA patience en general, le concept entier, pas une patience particuliere. Le genitif est regi par la preposition « bi » — par la patience. Le nom **as-salati** est un nom feminin singulier defini au genitif de la racine s-l-w. Le Lane's donne : priere, invocation, acte de se tourner vers Dieu. La salat est l'acte exterieur structure de se tourner vers Dieu — elle est la colonne vertebrale de la pratique. L'article defini « al » marque le concept general de priere. Le genitif est coordonne a as-sabri par la conjonction « wa » — par la patience ET la priere. Les deux moyens sont complementaires : la patience est interieure, la priere est exterieure. Le nom **Allaha** est le nom propre de la divinite a l'accusatif. Le Lane's donne : Dieu, la divinite unique. L'accusatif marque que Allah est le sujet de la phrase nominale « inna Allaha ma'a as-sabirina » (certes Dieu est avec les endurants). La particule « inna » renforce l'affirmation — c'est une certitude, pas une possibilite. La preposition **ma'a** est une preposition de la racine m-'-y. Le Lane's donne : avec, en compagnie de. Ma'a exprime la compagnie et le soutien — Dieu est AVEC les endurants, pas simplement a cote d'eux. Cette preposition cree un lien de proximite et d'assistance. Le nom **as-sabirina** est un participe actif pluriel masculin defini a l'accusatif de la racine s-b-r. Le Lane's donne : les endurants, ceux qui patientent. Le participe actif marque un etat continu — ce ne sont pas ceux qui ont patiente une fois mais ceux qui sont dans un etat permanent de patience. L'article defini « al » marque la categorie : LES endurants, tous ceux qui pratiquent la patience. L'accusatif est regi par « ma'a ». La racine s-b-r apparait deux fois dans le verset — d'abord comme nom abstrait (as-sabr = la patience) puis comme participe actif (as-sabirina = les endurants). Le premier usage designe le moyen (cherchez secours par la patience), le second designe les personnes qui pratiquent ce moyen (Dieu est avec les endurants). Cette double occurrence montre que la patience n'est pas un concept abstrait mais une pratique incarnee par des personnes.

§JUSTIFICATION§
**cru** — Le sens retenu est « croire ». Le verbe amanu designe l'acte d'adherer a la verite et de s'y fier. L'alternative « etre en securite » est ecartee car le contexte est l'interpellation des croyants (ya ayyuha alladhina amanu), pas un etat de securite physique.

**cherchez secours** — Le sens retenu est « demander l'aide ». Le verbe ista'inu est a la forme X qui ajoute le sens de chercher activement. L'alternative « aider » (forme I) est ecartee car la forme X est une demande, pas un don d'aide. L'alternative « s'entraider » est ecartee car la forme VI n'est pas utilisee ici.

**la patience** — Le sens retenu est « patience ». Le nom as-sabri designe l'endurance face a l'epreuve. L'alternative « emprisonner » est ecartee car le mot est un nom abstrait defini, pas un verbe d'action physique. Le sens de « retenir » est inclus dans la patience — patienter c'est se retenir.

**la priere** — Le sens retenu est « priere ». Le nom as-salati designe l'acte structure de se tourner vers Dieu. L'alternative « suivre de pres » est ecartee car le contexte est un acte de culte, pas un acte de poursuite. L'alternative « lieu de priere » est ecartee car le mot designe l'acte, pas le lieu.

**Dieu** — Le sens retenu est « Dieu ». Le nom Allaha est le nom propre de la divinite unique. L'alternative « adorer » est ecartee car le mot est un nom propre, pas un verbe.

**les endurants** — Le sens retenu est « ceux qui patientent ». Le participe actif as-sabirina designe les personnes en etat permanent de patience. L'alternative « sommet de montagne » est ecartee car le contexte est humain et spirituel, pas geographique.

§CRITIQUE§
Les traductions courantes rendent ce verset de facon quasi identique. Hamidullah donne « l'endurance et la Salat » la ou nous donnons « la patience et la priere ». Le mot « endurance » est un synonyme acceptable mais « patience » est plus courant en francais et rend mieux le sens de sabr qui est d'abord la capacite de supporter sans flechir, pas la performance physique que « endurance » peut evoquer. Hamidullah garde le mot arabe « Salat » (transcrit) la ou nous donnons « priere » — notre choix de traduire est coherent avec le principe de rendre chaque mot en francais courant.`,
    segments: [
      { fr: "o", phon: "ya", arabic: "\u064a\u064e\u0640\u0623\u064e\u064a\u0651\u064f\u0647\u064e\u0627", is_particle: true, position: 0 },
      { fr: "vous qui", phon: "ayyuha alladhina", arabic: "\u0671\u0644\u0651\u064e\u0630\u0650\u064a\u0646\u064e", is_particle: true, position: 1 },
      { fr: "avez cru", pos: "verbe", phon: "amanu", arabic: "\u0621\u064e\u0627\u0645\u064e\u0646\u064f\u0648\u0627\u06df", word_key: "amn", is_particle: false, sense_retenu: "croire", position: 2 },
      { fr: "cherchez secours", pos: "verbe", phon: "ista'inu", arabic: "\u0671\u0633\u0652\u062a\u064e\u0639\u0650\u064a\u0646\u064f\u0648\u0627\u06df", word_key: "ewn", is_particle: false, sense_retenu: "demander l'aide", position: 3 },
      { fr: "dans", phon: "bi", arabic: "\u0628\u0650", is_particle: true, position: 4 },
      { fr: "la patience", pos: "nom", phon: "as-sabri", arabic: "\u0671\u0644\u0635\u0651\u064e\u0628\u0652\u0631\u0650", word_key: "sbr", is_particle: false, sense_retenu: "patience", position: 5 },
      { fr: "et", phon: "wa", arabic: "\u0648\u064e", is_particle: true, position: 6 },
      { fr: "la priere", pos: "nom", phon: "as-salati", arabic: "\u0671\u0644\u0635\u0651\u064e\u0644\u064e\u0648\u0640\u0629\u0650", word_key: "slw", is_particle: false, sense_retenu: "priere", position: 7 },
      { fr: "certes", phon: "inna", arabic: "\u0625\u0650\u0646\u0651\u064e", is_particle: true, position: 8 },
      { fr: "Dieu", pos: "nom", phon: "Allaha", arabic: "\u0671\u0644\u0644\u0651\u064e\u0647\u064e", word_key: "llh", is_particle: false, sense_retenu: "Dieu", position: 9 },
      { fr: "avec", phon: "ma'a", arabic: "\u0645\u064e\u0639\u064e", is_particle: true, position: 10 },
      { fr: "les endurants", pos: "nom", phon: "as-sabirina", arabic: "\u0671\u0644\u0635\u0651\u064e\u0640\u0628\u0650\u0631\u0650\u064a\u0646\u064e", word_key: "sbr", is_particle: false, sense_retenu: "endurant", position: 11 }
    ],
    words: [
      // amn pos=2
      {
        word_key: "amn", position: 2, sense_chosen: "croire",
        analysis_axes: {
          sense_chosen: "croire",
          concept_chosen: "Foi/Adhésion",
          concepts: {
            "Foi/Adhésion": {
              status: "retenu",
              senses: ["croire", "avoir la foi", "accepter comme vrai", "croyant", "confirmer"],
              proof_ctx: "Le verbe amanu est un accompli 3MP de la racine a-m-n. Le Lane's donne : croire, avoir la foi, accepter comme vrai, se sentir en securite. La forme IV (af'ala) ajoute le sens de rendre vrai pour soi — croire c'est accepter interieurement la verite d'une chose. L'accompli marque que la croyance est un fait etabli — ces gens ont deja cru, ils sont dans l'etat de foi. Le contexte est l'interpellation « ya ayyuha alladhina amanu » (o vous qui avez cru) qui est la formule coranique standard pour s'adresser aux croyants. La distinction avec la securite (nul) est que le verbe est dans un appel aux croyants, pas dans un contexte de protection physique.",
              axe1_verset: "Le verbe amanu ouvre l'interpellation et definit les destinataires de l'ordre qui suit : ce sont ceux qui ont cru. Le champ lexical du verset (patience, priere, Dieu, endurants) montre que l'ordre est adresse a des gens qui ont deja la foi — ce n'est pas un appel a croire mais un appel a agir en tant que croyants. La foi est le prealable, la patience et la priere sont les outils, la compagnie de Dieu est la recompense.",
              axe2_voisins: "Le verset 152 disait « souvenez-vous de Moi, Je me souviendrai de vous ». Le verset 153 enchaine avec un nouvel appel aux croyants — apres le souvenir de Dieu, la patience et la priere. Le verset 154 interdira de dire « morts » de ceux qui sont tues dans le chemin de Dieu. Les versets 152-157 forment une sequence sur l'attitude du croyant face a l'epreuve : souvenir (152) → patience/priere (153) → interdiction de dire morts (154) → epreuve (155) → parole des endurants (156) → benediction (157).",
              axe3_sourate: "L'expression « ya ayyuha alladhina amanu » apparait de nombreuses fois dans la sourate al-Baqarah. En 2:104, « o vous qui avez cru, ne dites pas ra'ina ». En 2:153, « o vous qui avez cru, cherchez secours ». En 2:178, « o vous qui avez cru, le talion vous est prescrit ». Chaque appel introduit un ordre specifique pour les croyants — la sourate construit progressivement le code de conduite du croyant.",
              axe4_coherence: "La racine a-m-n apparait environ 879 fois dans le Coran. L'expression « alladhina amanu » (ceux qui ont cru) est la designation la plus frequente des croyants dans le Coran. En 2:153, la foi est le prealable a l'endurance — seuls ceux qui croient sont appeles a patienter de cette maniere, car la patience sans foi est simple resistance, tandis que la patience avec foi est un acte de confiance en Dieu.",
              axe5_frequence: "Pour la mission du khalifa, la foi est le fondement de la mission. Le khalifa est d'abord un croyant — sa mission decoule de sa croyance. L'appel « o vous qui avez cru » lui rappelle que toutes les instructions qui suivent sont pour ceux qui ont accepte le mandat divin. La foi n'est pas un sentiment vague mais un engagement ferme qui conditionne l'acces aux outils de la mission (patience, priere)."
            },
            "Sécurité/Confiance": {
              status: "nul",
              senses: ["être en sécurité", "se sentir en sécurité", "faire confiance", "confier", "fidèle", "lieu sûr"],
              proof_ctx: "Le sens de securite est un sens de base de la racine a-m-n — etre en securite, se sentir protege. Le contexte est l'interpellation des croyants, pas une situation de securite physique. Le verbe est a la forme IV (amana = croire), pas a la forme I (amina = etre en securite)."
            },
            "Garantie/Protection": {
              status: "nul",
              senses: ["protéger", "accorder la sécurité"],
              proof_ctx: "Le sens de protection est un acte exterieur de donner une garantie. Le verbe amanu est ici un acte interieur de foi, pas un acte exterieur de protection."
            }
          }
        }
      },
      // ewn pos=3
      {
        word_key: "ewn", position: 3, sense_chosen: "demander l'aide",
        analysis_axes: {
          sense_chosen: "demander l'aide",
          concept_chosen: "Demande d'aide",
          concepts: {
            "Demande d'aide": {
              status: "retenu",
              senses: ["demander l'aide", "chercher le secours", "solliciter l'assistance"],
              proof_ctx: "Le verbe ista'inu est un imperatif 2MP de la forme X (istaf'ala) de la racine '-w-n. Le Lane's donne : demander l'aide, chercher le secours, solliciter l'assistance. La forme X est la forme de demande — elle transforme le sens de base « aide » en « demander l'aide ». L'imperatif marque un ordre divin direct. Le verbe est suivi de la preposition « bi » (par/dans) qui introduit le moyen par lequel on cherche le secours : la patience et la priere. La distinction avec l'aide simple (nul) est que la forme X est une demande active, pas une reception passive. La distinction avec l'entraide (nul) est que la forme VI n'est pas utilisee — il ne s'agit pas de s'aider mutuellement mais de demander le secours de Dieu.",
              axe1_verset: "Le verbe ista'inu est le verbe principal de l'ordre donne aux croyants. Le champ lexical (patience, priere, Dieu, endurants) montre que le secours est cherche PAR la patience et la priere — ce ne sont pas les objets du secours mais les moyens. On ne demande pas secours a la patience mais on cherche secours PAR la patience. La patience et la priere sont les instruments par lesquels le croyant accede au secours divin.",
              axe2_voisins: "Le verset 45 de la meme sourate disait : « Cherchez secours dans la patience et la priere, et certes elle est difficile sauf pour les humbles ». Le verset 153 reprend la meme formule mais dans un contexte different — le verset 45 s'adressait aux Enfants d'Israel, le verset 153 s'adresse aux croyants. La repetition montre que le moyen est universel : quelle que soit l'epoque, la patience et la priere sont les outils du secours.",
              axe3_sourate: "La racine '-w-n apparait dans la sourate al-Baqarah dans le contexte de l'aide et du secours. En 2:45, la meme formule « ista'inu bi-s-sabri wa-s-salat ». En 2:153, la repetition avec un destinataire different. La sourate montre que le secours par la patience et la priere est un principe fondamental repete pour differents groupes de destinataires.",
              axe4_coherence: "La racine '-w-n apparait environ 55 fois dans le Coran. La forme X (ista'ana = demander l'aide) apparait specifiquement en 2:45, 2:153 et dans la Fatiha (1:5 : iyyaka nasta'in = c'est Toi dont nous cherchons le secours). Le verset 153 est lie a la Fatiha — la demande de secours de la Fatiha trouve ici sa methode concrete : par la patience et la priere.",
              axe5_frequence: "Pour la mission du khalifa, la demande d'aide est un acte d'humilite essentiel. Le khalifa ne peut pas accomplir sa mission seul — il a besoin du secours divin. La forme X (demander) montre que le secours n'est pas automatique mais demande un effort actif. Les outils du secours (patience et priere) sont accessibles a tous — ils ne demandent ni richesse ni pouvoir mais constance et devotion."
            },
            "Aide/Assistance": {
              status: "nul",
              senses: ["aide", "secours", "assistance", "soutien", "aider", "prêter secours"],
              proof_ctx: "Le sens d'aide simple est le sens de base de la racine '-w-n. Le verbe est a la forme X (ista'ana = demander l'aide), pas a la forme I ('ana = aider). Le contexte est une demande active de secours, pas une reception passive d'aide."
            },
            "Entraide/Réciprocité": {
              status: "nul",
              senses: ["s'entraider", "aide réciproque", "coopération"],
              proof_ctx: "Le sens d'entraide est un acte reciproque de la forme VI (ta'awana). Le verbe est a la forme X (ista'ana), pas a la forme VI — il s'agit de demander le secours, pas de cooperer mutuellement."
            }
          }
        }
      },
      // sbr pos=5 (1ere occurrence : « la patience »)
      {
        word_key: "sbr", position: 5, sense_chosen: "patience",
        analysis_axes: {
          sense_chosen: "patience",
          concept_chosen: "Patience/Endurance",
          concepts: {
            "Patience/Endurance": {
              status: "retenu",
              senses: ["patienter", "endurer", "patience", "retenir"],
              proof_ctx: "Le nom as-sabri est un nom masculin singulier defini au genitif de la racine s-b-r. Le Lane's donne : patience, endurance, retenue, capacite de supporter sans flechir, se retenir. Le sabr est l'acte interieur de maintenir sa position face a l'epreuve — ne pas ceder, ne pas fuir, ne pas se plaindre. L'article defini « al » marque le concept entier de patience — pas une patience particuliere mais LA patience comme vertu permanente. Le genitif est regi par la preposition « bi » (par la patience). La distinction avec l'emprisonnement (nul) est que le mot est un nom abstrait moral, pas un acte physique de detention.",
              axe1_verset: "Le nom as-sabri est le premier des deux moyens prescrits pour chercher le secours : la patience et la priere. Le champ lexical (croire, chercher secours, priere, Dieu, endurants) montre que la patience est un outil spirituel, pas une simple attente passive. La patience precede la priere dans l'enumeration — elle est le fondement interieur sur lequel la priere exterieure s'appuie. Le verset se ferme par « les endurants » (as-sabirina), creant une inclusion : la patience ouvre et ferme le verset.",
              axe2_voisins: "Le verset 155 detaillera les epreuves : « Nous vous eprouverons par la peur, la faim, la diminution des biens, des personnes et des recoltes ». Le verset 153 prepare cette annonce — il donne l'outil avant de decrire l'epreuve. C'est un acte de misericorde : Dieu equipe les croyants avant de les tester. Le verset 156 donnera la reponse des endurants : « A Dieu nous sommes et vers Lui nous retournons ».",
              axe3_sourate: "La racine s-b-r apparait dans la sourate al-Baqarah dans le contexte de l'epreuve et de la recompense. En 2:45, « cherchez secours dans la patience et la priere ». En 2:155, « annonce la bonne nouvelle aux endurants ». En 2:177, « les endurants dans l'adversite et le malheur ». La sourate trace un arc de patience : outil (153) → epreuve (155) → bonne nouvelle (155) → description (177).",
              axe4_coherence: "La racine s-b-r apparait environ 103 fois dans le Coran. Le sabr est une des vertus les plus louees — en 39:10, « les endurants recevront leur recompense sans compte ». En 3:200, « patientez, rivalisez de patience ». Le Coran fait de la patience un pilier de la vie spirituelle — elle est la condition pour traverser l'epreuve sans perdre la foi.",
              axe5_frequence: "Pour la mission du khalifa, la patience est le premier outil de la mission. La mission est longue et difficile — elle demande de la constance face aux obstacles. Le khalifa qui manque de patience abandonne sa mission au premier echec. La patience n'est pas l'inaction mais la perseverance active — continuer malgre les difficultes, maintenir le cap malgre les vents contraires."
            },
            "Sens isolé/Emprisonner": {
              status: "nul",
              senses: ["emprisonner"],
              proof_ctx: "Le sens d'emprisonner est un usage concret de s-b-r — retenir physiquement quelqu'un. Le contexte est la patience morale, pas la detention physique."
            }
          }
        }
      },
      // slw pos=7
      {
        word_key: "slw", position: 7, sense_chosen: "priere",
        analysis_axes: {
          sense_chosen: "priere",
          concept_chosen: "Prière/Invocation",
          concepts: {
            "Prière/Invocation": {
              status: "retenu",
              senses: ["prier", "prière rituelle", "invoquer", "bénir", "lieu de prière"],
              proof_ctx: "Le nom as-salati est un nom feminin singulier defini au genitif de la racine s-l-w. Le Lane's donne : priere, invocation, acte de se tourner vers Dieu par des paroles et des gestes. La salat est l'acte exterieur structure de se tourner vers Dieu — elle comprend la station debout, l'inclination, la prosternation et les paroles sacrees. L'article defini « al » marque le concept general de priere — pas une priere particuliere mais LA priere comme institution. Le genitif est coordonne a as-sabri par « wa » — par la patience ET la priere. La distinction avec « suivre de pres » (nul) est que le contexte est un acte de culte, pas un acte de poursuite.",
              axe1_verset: "Le nom as-salati est le second des deux moyens prescrits : la patience et la priere. Le champ lexical (croire, chercher secours, patience, Dieu, endurants) montre que la priere complete la patience — la patience est interieure (endurer), la priere est exterieure (se tourner vers Dieu). Les deux forment un binome complet : l'ame qui endure et le corps qui prie. Le verset ne dit pas « cherchez secours dans la patience OU la priere » mais « dans la patience ET la priere » — les deux sont necessaires ensemble.",
              axe2_voisins: "Le verset 45 de la meme sourate utilisait la meme paire (sabr + salat) mais ajoutait : « et certes elle est difficile sauf pour les humbles ». Le verset 153 ne mentionne pas la difficulte — il donne l'ordre sans attenuer. Le verset 238 dira : « Soyez assidus aux prieres et a la priere mediane ». La sourate construit un ensemble coherent autour de la priere : outil de secours (153) → assiduite (238).",
              axe3_sourate: "La racine s-l-w apparait dans la sourate al-Baqarah dans le contexte de la pratique rituelle. En 2:3, « ceux qui accomplissent la priere ». En 2:43, « accomplissez la priere et donnez la zakat ». En 2:45, « cherchez secours dans la patience et la priere ». En 2:153, la repetition. La sourate fait de la priere un pilier constant — elle revient a chaque etape de l'instruction divine.",
              axe4_coherence: "La racine s-l-w apparait environ 99 fois dans le Coran. La salat est le deuxieme pilier de l'islam et l'acte le plus frequemment mentionne avec la zakat. En 29:45, « la priere preserve de la turpitude et du blamable ». Le Coran montre que la priere n'est pas un simple rituel mais un outil de transformation — elle protege et soutient celui qui la pratique.",
              axe5_frequence: "Pour la mission du khalifa, la priere est l'outil de connexion avec le Mandant. Le khalifa qui prie maintient sa connexion avec Dieu — il recoit ses instructions et son soutien par la priere. Abandonner la priere c'est couper la ligne de communication avec Celui qui a donne la mission. La priere structure le temps et oriente la vie — elle est le rythme de la mission."
            },
            "Proximité/Attachement": {
              status: "nul",
              senses: ["suivre de près"],
              proof_ctx: "Le sens de proximite est un sens secondaire de s-l-w. Le contexte est l'acte de priere, pas un acte de poursuite ou de rapprochement physique."
            }
          }
        }
      },
      // llh pos=9
      {
        word_key: "llh", position: 9, sense_chosen: "Dieu",
        analysis_axes: {
          sense_chosen: "Dieu",
          concept_chosen: "Divinité",
          concepts: {
            "Divinité": {
              status: "retenu",
              senses: ["divinité", "dieu", "Dieu", "théologie"],
              proof_ctx: "Le nom Allaha est le nom propre de la divinite unique a l'accusatif. Le Lane's donne : Dieu, l'etre qui existe necessairement par Lui-meme, comprenant tous les attributs de perfection. Ici Allaha est le sujet de la phrase nominale « inna Allaha ma'a as-sabirina » (certes Dieu est avec les endurants). L'accusatif est regi par la particule de certitude « inna ». Le nom est dans une position d'affirmation renforcee : certes Dieu est avec les endurants — ce n'est pas une possibilite mais une certitude divine. La distinction avec l'adoration (nul) est que le mot est le nom propre, pas un verbe d'adoration.",
              axe1_verset: "Le nom Allaha est le sujet de la seconde partie du verset : apres l'ordre (cherchez secours par la patience et la priere), la justification (certes Dieu est avec les endurants). Le champ lexical (croire, chercher secours, patience, priere, endurants) montre que Dieu est le garant de l'efficacite des outils prescrits — la patience et la priere fonctionnent PARCE QUE Dieu est avec ceux qui les pratiquent. Le verset n'est pas une simple exhortation mais une promesse divine : patientez et priez, car Je suis avec vous.",
              axe2_voisins: "Le verset 152 disait « souvenez-vous de Moi, Je me souviendrai de vous ». Le verset 153 continue avec « Dieu est avec les endurants ». Les deux versets promettent la reciprocite divine : si vous vous souvenez, Dieu se souvient ; si vous patientez, Dieu est avec vous. Le verset 157 conclura la section par « ceux-la sont les guides ».",
              axe3_sourate: "Le nom Allah est le mot le plus frequent de la sourate al-Baqarah. Il structure chaque passage et chaque injonction. En 2:153, Dieu est le garant de la patience — Il est avec les endurants. La sourate montre constamment que Dieu n'abandonne pas ceux qui Lui obeissent — Sa compagnie est la recompense de la patience.",
              axe4_coherence: "Le nom Allah apparait plus de 2600 fois dans le Coran. L'expression « inna Allaha ma'a » (certes Dieu est avec) apparait dans plusieurs versets. En 8:46, « Dieu est avec les endurants ». En 29:69, « Dieu est avec les bienfaisants ». Le Coran repete ce schema pour montrer que la compagnie de Dieu est conditionnelle — elle est avec ceux qui pratiquent les vertus prescrites.",
              axe5_frequence: "Pour la mission du khalifa, Dieu est le Mandant et le soutien de la mission. La promesse « Dieu est avec les endurants » signifie que le khalifa qui patiente n'est jamais seul — le Mandant est avec lui. Cette compagnie divine est la source de force dans l'epreuve. Le khalifa qui sait que Dieu est avec lui ne craint rien et ne desespere pas."
            },
            "Adoration/Culte": {
              status: "nul",
              senses: ["adorer", "servir", "se consacrer au culte"],
              proof_ctx: "Le sens d'adoration est un acte de devotion. Le mot Allaha est ici le nom propre dans une phrase nominale (Dieu est avec les endurants), pas un verbe d'adoration."
            },
            "Confusion/Perplexité": {
              status: "nul",
              senses: ["être confus"],
              proof_ctx: "Le sens de confusion est un etat interieur de trouble. Le mot est le nom propre Allah dans un contexte de compagnie et de soutien divin."
            }
          }
        }
      },
      // sbr pos=11 (2e occurrence : « les endurants »)
      {
        word_key: "sbr", position: 11, sense_chosen: "endurant",
        analysis_axes: {
          sense_chosen: "endurant",
          concept_chosen: "Patience/Endurance",
          concepts: {
            "Patience/Endurance": {
              status: "retenu",
              senses: ["patienter", "endurer", "patience", "retenir"],
              proof_ctx: "Le nom as-sabirina est un participe actif pluriel masculin defini a l'accusatif de la racine s-b-r. Le Lane's donne : les endurants, ceux qui patientent, ceux qui se retiennent. Le participe actif marque un etat continu — les sabirina ne sont pas ceux qui ont patiente une fois mais ceux qui vivent dans un etat permanent de patience. L'article defini « al » marque la categorie entiere : LES endurants, tous ceux qui pratiquent la patience. L'accusatif est regi par la preposition « ma'a ». C'est la deuxieme occurrence de la racine s-b-r dans le verset — la premiere (as-sabr) designait le concept abstrait, la seconde (as-sabirina) designe les personnes qui l'incarnent.",
              axe1_verset: "Le mot as-sabirina ferme le verset et cree une inclusion avec as-sabri qui l'ouvrait. Le champ lexical (croire, chercher secours, patience, priere, Dieu) converge vers cette conclusion : Dieu est avec les endurants. Le passage du concept (la patience) aux personnes (les endurants) montre que la patience n'existe pas dans l'abstrait — elle n'existe que chez ceux qui la pratiquent. Le verset dit : utilisez la patience comme outil, car Dieu accompagne ceux qui la vivent.",
              axe2_voisins: "Le verset 155 dira « annonce la bonne nouvelle aux endurants (as-sabirina) ». Le meme mot revient — ceux avec qui Dieu est (153) sont ceux qui recoivent la bonne nouvelle (155). Le verset 177 decrira « les endurants dans l'adversite et le malheur et au moment du combat ». La sourate precise progressivement qui sont les endurants et dans quelles circonstances ils patientent.",
              axe3_sourate: "La racine s-b-r apparait dans la sourate al-Baqarah avec une frequence notable. En 2:45, « cherchez secours dans la patience ». En 2:153, double occurrence. En 2:155, « annonce la bonne nouvelle aux endurants ». En 2:177, « les endurants dans l'adversite ». En 2:249, « Dieu est avec les endurants ». Cette derniere occurrence (2:249) reprend exactement la formule de 2:153, montrant que le principe est repete dans des contextes differents (epreuve individuelle en 153, bataille en 249).",
              axe4_coherence: "Le participe actif sabirina apparait environ 22 fois dans le Coran. En 3:146, « Dieu aime les endurants ». En 8:46, « Dieu est avec les endurants ». En 39:10, « les endurants recevront leur recompense sans compte ». Le Coran fait des endurants une categorie privilegiee — ils recoivent la compagnie de Dieu, Son amour et une recompense sans limite.",
              axe5_frequence: "Pour la mission du khalifa, etre parmi les endurants est la condition pour avoir Dieu comme compagnon de mission. Le khalifa qui endure les difficultes de sa mission sans flechir est assure de la compagnie divine. Cette compagnie n'est pas metaphorique — elle est le soutien reel qui permet de traverser les epreuves. Le khalifa endurant n'echoue pas car il n'est jamais seul dans sa mission."
            },
            "Sens isolé/Emprisonner": {
              status: "nul",
              senses: ["emprisonner"],
              proof_ctx: "Le sens d'emprisonner est un usage concret de s-b-r. Le contexte est les personnes qui pratiquent la patience, pas des geoliers."
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

  const verseIds = [160];
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
  console.log('=== PIPELINE SOURATE 2 — VERSET 153 ===\n');
  await processVerse(153);
  await syncWordMeanings();
  console.log('\n=== PIPELINE V153 TERMINEE ===');
}

main().catch(e => console.error('FATAL:', e));
