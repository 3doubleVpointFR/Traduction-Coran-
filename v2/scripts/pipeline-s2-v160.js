const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// =====================================================
// PIPELINE SOURATE 2 — VERSET 160
// verse_id=167, analysis_id=528
// "Sauf ceux qui se sont repentis, ont corrige et ont
//  explique. Ceux-la, Je reviens vers eux. Et Je suis
//  Celui qui revient sans cesse, le Misericordieux."
// Exception aux maudits du v159 — repentir + correction
// + explication = pardon divin
// =====================================================

const verseData = {
  160: {
    verse_id: 167,
    analysis_id: 528,
    translation_arab: "Sauf ceux qui sont revenus, ont corrige et ont rendu clair. Ceux-la, Je reviens vers eux. Et Je suis Celui qui revient sans cesse, le Misericordieux.",
    full_translation: "Sauf ceux qui se sont repentis, ont ameliore et ont explicite clairement. Ceux-la, J'accueille leur repentir. Je suis l'Accueillant au repentir, le Misericordieux.",
    translation_explanation: `§DEMARCHE§
Le verset fait exception au verset 159 qui maudit ceux qui dissimulent les signes clairs. Trois conditions sont posees pour lever la malediction : revenir (taba), corriger (aslaha), rendre clair (bayyana). Le verbe **tabu** est un accompli 3MP de la racine t-w-b. Le Lane's donne : revenir, se retourner, revenir sur ses pas. La racine porte fondamentalement le sens de retour — on quitte un etat pour revenir a un autre. L'accompli marque que le retour est un fait acheve — ils sont effectivement revenus. La forme I indique un mouvement simple et volontaire — ils sont revenus d'eux-memes. Le verbe **aslahu** est un accompli 3MP de la forme IV de la racine s-l-h. Le Lane's donne : etre bon, etre en bon etat ; forme IV : remettre en bon etat, corriger, reformer. La forme IV (af'ala) est causative — ils ont CAUSE la rectitude, ils ont RENDU bon ce qui etait corrompu. L'accompli marque que la correction est achevee — ils ne se contentent pas de promettre, ils ont effectivement corrige. Le verbe **bayyanu** est un accompli 3MP de la forme II de la racine b-y-n. Le Lane's donne : etre clair, etre evident ; forme II : rendre clair, expliquer, montrer clairement. La forme II (fa''ala) est intensive et factitive — ils ont RENDU CLAIR ce qu'ils avaient dissimule. C'est l'oppose exact du crime du verset 159 : la-bas ils dissimulaient (yaktumuna), ici ils rendent clair (bayyanu). L'accompli marque que l'explication est achevee — ils ont effectivement montre ce qu'ils cachaient. Le pronom demonstratif **ula'ika** (ceux-la) est un demonstratif d'eloignement qui designe avec emphase les repentis — il les distingue nettement du groupe des maudits. Le verbe **atubu** est un inaccompli 1S de la racine t-w-b. Le Lane's donne : revenir. Quand le sujet est Dieu, le sens est « Je reviens vers eux » — Dieu se retourne vers ceux qui se sont retournes vers Lui. L'inaccompli marque une action continue et renouvelee — Dieu revient vers eux de maniere permanente. La preposition **'alayhim** (sur eux, vers eux) indique la direction du retour divin — Dieu revient vers les repentis. Le pronom **ana** (Je/Moi) est un pronom personnel 1S independant qui porte l'emphase — c'est MOI qui suis le Tawwab, c'est MOI qui suis le Rahim. L'emphase souligne que ces attributs sont propres a Dieu. Le nom **at-tawwabu** est un nom de forme intensive (fa''al) de la racine t-w-b avec l'article defini. Le Lane's donne : celui qui revient sans cesse, celui qui revient constamment. La forme intensive fa''al indique la repetition et la constance — Dieu ne revient pas une seule fois mais sans cesse, chaque fois que quelqu'un revient vers Lui. L'article defini « al- » marque que cet attribut est unique — il est LE Tawwab, le seul qui revient constamment. Le nom **ar-rahimu** est un adjectif de la racine r-h-m avec l'article defini. Le Lane's donne : misericordieux, compatissant, celui qui fait misericorde. Le rahim est celui dont la misericorde se manifeste en actes — c'est la misericorde effective qui touche les creatures. L'article defini marque l'unicite de cet attribut dans sa perfection.

§JUSTIFICATION§
**sont revenus** — Le sens retenu est « revenir ». Le verbe tabu designe l'acte de revenir — les repentis sont revenus de leur etat de dissimulation vers l'etat de droiture. L'alternative « se repentir » est ecartee car c'est une interpretation theologique du mot — la racine t-w-b porte d'abord le sens physique de retour, et le repentir est un retour vers Dieu. Nous gardons « revenir » pour rester au plus pres de la racine.

**ont corrige** — Le sens retenu est « corriger ». Le verbe aslahu a la forme IV designe l'acte de remettre en bon etat. L'alternative « etre bon » est ecartee car la forme IV est causative — ils ne sont pas bons, ils rendent bon ce qui etait corrompu. « Corriger » rend cette causalite.

**ont rendu clair** — Le sens retenu est « rendre clair ». Le verbe bayyanu a la forme II designe l'acte de montrer clairement ce qui etait cache. L'alternative « separer » est ecartee car la forme II de b-y-n porte specifiquement le sens de rendre clair, expliquer — c'est l'oppose de dissimuler (yaktumuna du v159).

**Je reviens** — Le sens retenu est « revenir ». Le verbe atubu avec Dieu comme sujet designe le retour divin vers ceux qui sont revenus. L'alternative « accepter le repentir » est ecartee car c'est une paraphrase interpretative — le texte dit « Je reviens vers eux », pas « J'accepte leur repentir ». Le retour est reciproque : ils reviennent vers Dieu, Dieu revient vers eux.

**vers eux** — La preposition 'ala avec le pronom suffixe 3MP designe la direction du retour divin. Dieu revient vers les repentis — la direction est descendante, de Dieu vers les creatures.

**Celui qui revient sans cesse** — Le sens retenu est « revenir constamment ». Le nom at-tawwab est une forme intensive (fa''al) qui marque la repetition — Dieu revient sans cesse, chaque fois que quelqu'un revient vers Lui. L'alternative « Celui qui pardonne » est ecartee car c'est une interpretation — la racine dit « revenir », pas « pardonner ». La forme intensive dit que ce retour est constant et inlassable.

**le Misericordieux** — Le sens retenu est « misericordieux ». Le nom ar-rahim designe celui dont la misericorde est effective et permanente. L'alternative « compassion maternelle » est ecartee car le contexte est un attribut divin defini, pas une description physique.

§CRITIQUE§
Les traductions courantes traduisent tabu par « se sont repentis » et atubu par « J'accueille/accepte le repentir ». Ces traductions interpretent le retour comme un repentir — ce qui est correct sur le plan theologique mais pas sur le plan etymologique. La racine t-w-b signifie revenir, et le texte joue sur la reciprocite : eux reviennent (tabu) et Dieu revient (atubu). Cette reciprocite est perdue quand on traduit par « se repentir » et « accepter le repentir » car ces deux mots n'ont pas la meme racine en francais. Notre traduction preserve cette reciprocite en gardant « revenir » pour les deux occurrences. Le nom tawwab est souvent traduit par « Celui qui accepte le repentir » — nous preferons « Celui qui revient sans cesse » car la forme intensive fa''al porte le sens de repetition, pas d'acceptation. Hamidullah donne « l'Accueillant au repentir » — c'est elegant mais interpretatif. Notre traduction est plus proche de la racine.`,
    segments: [
      { fr: "sauf", phon: "illa", arabic: "\u0625\u0650\u0644\u0651\u064e\u0627", is_particle: true, position: 0 },
      { fr: "ceux qui", phon: "alladhina", arabic: "\u0671\u0644\u0651\u064e\u0630\u0650\u064a\u0646\u064e", is_particle: true, position: 1 },
      { fr: "sont revenus", pos: "verbe", phon: "tabu", arabic: "\u062a\u064e\u0627\u0628\u064f\u0648\u0627\u06df", word_key: "twb", is_particle: false, sense_retenu: "revenir", position: 2 },
      { fr: "ont corrige", pos: "verbe", phon: "aslahu", arabic: "\u0648\u064e\u0623\u064e\u0635\u0652\u0644\u064e\u062d\u064f\u0648\u0627\u06df", word_key: "slh", is_particle: false, sense_retenu: "corriger", position: 3 },
      { fr: "et ont rendu clair", pos: "verbe", phon: "bayyanu", arabic: "\u0648\u064e\u0628\u064e\u064a\u0651\u064e\u0646\u064f\u0648\u0627\u06df", word_key: "byn", is_particle: false, sense_retenu: "rendre clair", position: 4 },
      { fr: "ceux-la", phon: "ula'ika", arabic: "\u0641\u064e\u0623\u064f\u0648\u06df\u0644\u064e\u0640\u0670\u0653\u0626\u0650\u0643\u064e", is_particle: true, position: 5 },
      { fr: "Je reviens", pos: "verbe", phon: "atubu", arabic: "\u0623\u064e\u062a\u064f\u0648\u0628\u064f", word_key: "twb", is_particle: false, sense_retenu: "revenir", position: 6 },
      { fr: "vers eux", phon: "'alayhim", arabic: "\u0639\u064e\u0644\u064e\u064a\u0652\u0647\u0650\u0645\u0652", is_particle: true, position: 7 },
      { fr: "et Je suis", phon: "wa-ana", arabic: "\u0648\u064e\u0623\u064e\u0646\u064e\u0627", is_particle: true, position: 8 },
      { fr: "Celui qui revient sans cesse", pos: "nom", phon: "at-tawwabu", arabic: "\u0671\u0644\u062a\u0651\u064e\u0648\u0651\u064e\u0627\u0628\u064f", word_key: "twb", is_particle: false, sense_retenu: "revenir sans cesse", position: 9 },
      { fr: "le Misericordieux", pos: "nom", phon: "ar-rahimu", arabic: "\u0671\u0644\u0631\u0651\u064e\u062d\u0650\u064a\u0645\u064f", word_key: "rhm", is_particle: false, sense_retenu: "misericordieux", position: 10 }
    ],
    words: [
      // twb pos=2 (1ere occurrence : accompli 3MP humain « sont revenus »)
      {
        word_key: "twb", position: 2, sense_chosen: "revenir",
        analysis_axes: {
          sense_chosen: "revenir",
          concept_chosen: "Retour",
          concepts: {
            "Retour": {
              status: "retenu",
              senses: ["revenir", "se repentir", "accepter le repentir", "repentir"],
              proof_ctx: "Le verbe tabu est un accompli 3MP de la racine t-w-b. Le Lane's donne : revenir, se retourner, retourner a un etat anterieur. La racine porte fondamentalement le sens de retour — un mouvement directionnel ou l'on quitte un etat pour en rejoindre un autre. Ici le sujet est humain (ceux qui) et l'accompli marque que le retour est un fait acheve. Ils sont revenus de leur etat de dissimulation (verset 159 : yaktumuna) vers l'etat de droiture. Le retour est volontaire et delibere — ce n'est pas un accident mais un choix. La distinction avec le retour divin (pos=6 et pos=9) est que le sujet est humain et que le mouvement est ascendant (vers Dieu).",
              axe1_verset: "Le verbe tabu ouvre la triple condition d'exception : revenir + corriger + rendre clair. Le retour est la premiere etape — sans retour, pas de correction ni d'explication. Le champ lexical du verset est construit sur la reciprocite : les humains reviennent (tabu), Dieu revient (atubu), Dieu est Celui qui revient sans cesse (tawwab). Le retour humain est la condition qui declenche le retour divin. La racine t-w-b apparait trois fois dans le verset — cette triple occurrence structure tout le verset autour du concept de retour.",
              axe2_voisins: "Le verset 159 maudit ceux qui dissimulent les signes clairs apres que Dieu les a rendus clairs. Le verset 160 pose l'exception : ceux qui reviennent de cet etat de dissimulation echappent a la malediction. Le retour est le premier pas vers la sortie de la malediction — il faut d'abord revenir avant de pouvoir corriger et expliquer. Le verset 161 reviendra sur ceux qui meurent en etat de dissimulation — ceux qui ne reviennent pas.",
              axe3_sourate: "La racine t-w-b est structurante dans la sourate al-Baqarah. En 2:37, Adam recoit des mots de Dieu « et Dieu revint vers lui ». En 2:54, Moussa ordonne a son peuple de « revenir vers votre Createur ». En 2:128, Ibrahim demande a Dieu de « revenir vers nous ». Le verset 160 s'inscrit dans cette chaine de retours — chaque episode de la sourate montre que le retour est la solution apres la faute.",
              axe4_coherence: "La racine t-w-b apparait environ 87 fois dans le Coran. Le schema « illa alladhina tabu » (sauf ceux qui sont revenus) est un refrain coranique — en 3:89, 4:146, 5:34, 24:5. Chaque fois, le retour est la condition premiere de l'exception a la sanction. Le Coran montre que le retour est toujours possible tant que l'on est vivant — la porte du retour n'est jamais fermee.",
              axe5_frequence: "Pour la mission du khalifa, le retour est la capacite de se corriger. Le khalifa n'est pas infaillible — il peut s'egarer, dissimuler, faillir. Mais la porte du retour reste ouverte. Le retour est le premier acte de la mission retrouvee : reconnaitre l'erreur et faire le chemin inverse. La mission n'exige pas la perfection mais la capacite de revenir quand on a devie."
            }
          }
        }
      },
      // slh pos=3
      {
        word_key: "slh", position: 3, sense_chosen: "corriger",
        analysis_axes: {
          sense_chosen: "corriger",
          concept_chosen: "Bonté/Rectitude",
          concepts: {
            "Bonté/Rectitude": {
              status: "retenu",
              senses: ["être bon", "rectitude", "réparer", "réconcilier", "oeuvre bonne", "vertueux", "réformer"],
              proof_ctx: "Le verbe aslahu est un accompli 3MP de la forme IV de la racine s-l-h. Le Lane's donne : etre bon, etre integre, etre en bon etat ; forme IV : rendre bon, corriger, reformer, remettre en etat. La forme IV (af'ala) est causative — le sujet cause la rectitude, il rend bon ce qui etait mauvais. Ici l'accompli marque que la correction est achevee — les repentis n'ont pas seulement promis de corriger, ils ont effectivement corrige. La correction est la deuxieme condition apres le retour : revenir ne suffit pas, il faut aussi reparer le dommage cause.",
              axe1_verset: "Le verbe aslahu est la deuxieme condition de la triple exception. Le champ lexical du verset est structure en trois etapes : revenir (tabu) → corriger (aslahu) → rendre clair (bayyanu). La correction est l'etape intermediaire — apres avoir reconnu l'erreur (retour), il faut reparer les degats (correction) avant de rendre publique la verite (explication). Le verbe est a la forme IV causative : ils CAUSENT la rectitude, ils FONT en sorte que ce qui etait tordu redevienne droit.",
              axe2_voisins: "Le verset 159 denoncait la dissimulation des signes clairs. Le verset 160 montre que la correction repare cette dissimulation. Corriger ici signifie remettre en etat ce qui a ete deforme — les repentis ne se contentent pas de revenir, ils reparent le dommage que leur dissimulation a cause aux gens. Le verset 161 montrera que ceux qui ne corrigent pas restent sous la malediction.",
              axe3_sourate: "La racine s-l-h apparait regulierement dans la sourate al-Baqarah. En 2:11, les hypocrites disent « nous ne faisons que corriger (muslihuna) ». En 2:182, celui qui corrige (aslaha) entre des heritiers est pardonne. Le verset 160 place la correction comme condition du pardon — corriger est l'acte qui transforme le retour interieur en realite exterieure.",
              axe4_coherence: "La racine s-l-h apparait environ 180 fois dans le Coran. Le duo « tabu wa-aslahu » (sont revenus et ont corrige) est un refrain coranique — en 4:146, 5:39, 6:54, 7:35. Le Coran associe systematiquement le retour et la correction car le retour sans correction est incomplet. La correction est la preuve materielle du retour — elle montre que le changement est reel.",
              axe5_frequence: "Pour la mission du khalifa, la correction est l'acte concret de la mission. Le khalifa ne se contente pas de reconnaitre l'erreur — il repare. Corriger c'est remettre chaque chose a sa place, c'est restaurer l'ordre juste. La correction est le travail quotidien du khalifa : voir ce qui est de travers et le redresser. La mission n'est pas contemplative mais active."
            },
            "Sens isolé/Paix": {
              status: "nul",
              senses: ["paix"],
              proof_ctx: "Le sens de paix est un usage specifique de s-l-h. Le contexte est la correction active (forme IV causative), pas l'etat de paix."
            }
          }
        }
      },
      // byn pos=4
      {
        word_key: "byn", position: 4, sense_chosen: "rendre clair",
        analysis_axes: {
          sense_chosen: "rendre clair",
          concept_chosen: "Clarté/Évidence",
          concepts: {
            "Clarté/Évidence": {
              status: "retenu",
              senses: ["être clair", "expliquer", "évident", "preuve"],
              proof_ctx: "Le verbe bayyanu est un accompli 3MP de la forme II de la racine b-y-n. Le Lane's donne : etre clair, etre evident ; forme II : rendre clair, expliquer, montrer de maniere evidente, expliciter. La forme II (fa''ala) est intensive et factitive — ils ont RENDU CLAIR ce qui etait cache. C'est l'oppose direct du verbe yaktumuna (ils dissimulent) du verset 159. Le crime etait la dissimulation, la reparation est l'explication. L'accompli marque que l'explication est achevee — ils ont effectivement montre ce qu'ils cachaient. La distinction avec le sens de separation est que la forme II de b-y-n porte specifiquement le sens de rendre clair, pas de separer.",
              axe1_verset: "Le verbe bayyanu est la troisieme et derniere condition de l'exception. Le champ lexical du verset construit une progression : revenir (interieur) → corriger (exterieur) → rendre clair (public). L'explication est l'etape finale — apres avoir reconnu l'erreur et repare le dommage, il faut rendre publique la verite qu'on dissimulait. Le verbe bayyanu fait echo direct au verset 159 ou Dieu a « rendu clair » (bayyannahu) les signes pour les gens — les repentis doivent faire la meme chose que Dieu avait faite.",
              axe2_voisins: "Le verset 159 accusait ceux qui dissimulent (yaktumuna) ce que Dieu a fait descendre comme guidance et signes clairs apres que Dieu les a rendus clairs (bayyannahu) pour les gens. Le verset 160 demande aux repentis de faire l'inverse : rendre clair (bayyanu) ce qu'ils avaient dissimule. La symetrie est parfaite : dissimuler = crime, rendre clair = reparation. Le verbe bayyanu ferme la boucle ouverte par yaktumuna.",
              axe3_sourate: "La racine b-y-n dans le sens de clarte apparait dans les passages de la sourate al-Baqarah lies a la revelation. En 2:99, « Nous avons fait descendre vers toi des signes clairs (bayyinat) ». En 2:159, Dieu a rendu clair (bayyannahu). En 2:160, les repentis rendent clair (bayyanu). La sourate montre que la clarte est un devoir partage : Dieu rend clair par la revelation, et les savants doivent rendre clair par la transmission fidele.",
              axe4_coherence: "La racine b-y-n apparait environ 523 fois dans le Coran. La forme II bayyana (rendre clair) est utilisee pour decrire l'acte d'expliciter la verite. En 3:187, Dieu a pris l'engagement de ceux qui ont recu le Livre de le rendre clair (la-tubayyinunnahu) et de ne pas le dissimuler (la taktumunahu). Le Coran oppose systematiquement bayyanu (rendre clair) et katamu (dissimuler) — ce sont les deux faces de la meme piece.",
              axe5_frequence: "Pour la mission du khalifa, rendre clair est l'aboutissement de la mission. Le khalifa ne garde pas la verite pour lui — il la montre, l'explique, la rend accessible. Dissimuler la verite est une trahison de la mission. Rendre clair est un acte de service — on ne rend pas clair pour soi mais pour les autres. La mission du khalifa est une mission de clarte, pas de mystere."
            },
            "Séparation/Distance": {
              status: "nul",
              senses: ["séparer", "entre", "quitter"],
              proof_ctx: "Le sens de separation est un sens fondamental de b-y-n mais la forme II (bayyana) porte specifiquement le sens de rendre clair, expliquer. Le contexte est l'explication de ce qui etait dissimule, pas la separation de deux choses."
            }
          }
        }
      },
      // twb pos=6 (2e occurrence : inaccompli 1S divin « Je reviens »)
      {
        word_key: "twb", position: 6, sense_chosen: "revenir",
        analysis_axes: {
          sense_chosen: "revenir",
          concept_chosen: "Retour",
          concepts: {
            "Retour": {
              status: "retenu",
              senses: ["revenir", "se repentir", "accepter le repentir", "repentir"],
              proof_ctx: "Le verbe atubu est un inaccompli 1S de la racine t-w-b. Le Lane's donne : revenir, se retourner. Quand le sujet est Dieu et que le complement est 'ala (vers/sur), le sens est que Dieu revient vers la personne — Il se retourne vers elle avec bienveillance. L'inaccompli marque une action continue et renouvelee — le retour divin n'est pas ponctuel mais permanent. La distinction avec le retour humain (pos=2) est triple : le sujet est Dieu (pas l'homme), le temps est inaccompli (pas accompli), et la direction est descendante (vers les creatures, pas vers Dieu).",
              axe1_verset: "Le verbe atubu est la reponse divine a la triple condition humaine : puisqu'ils sont revenus, ont corrige et ont rendu clair, MOI Je reviens vers eux. Le champ lexical du verset construit une reciprocite parfaite : retour humain (tabu) → retour divin (atubu). L'inaccompli marque que le retour divin est une promesse permanente — chaque fois qu'un humain revient, Dieu revient vers lui. La preposition 'alayhim (vers eux) precise la direction du retour : Dieu se tourne vers les repentis.",
              axe2_voisins: "Le verset 159 maudissait les dissimulateurs. Le verset 160 montre que la malediction n'est pas irreversible — le retour divin annule la malediction pour ceux qui remplissent les conditions. Le verset 161 montrera que ceux qui meurent en etat de dissimulation sans revenir restent sous la malediction. Le retour divin du verset 160 est le pivot entre la malediction du v159 et la condamnation du v161.",
              axe3_sourate: "Le retour divin est un theme recurrent dans la sourate al-Baqarah. En 2:37, « fa-taba 'alayhi » (Il revint vers lui) apres qu'Adam eut recu les mots de Dieu. En 2:54, « fa-taba 'alaykum » (Il revint vers vous) apres le repentir du peuple de Moussa. En 2:160, « atubu 'alayhim » (Je reviens vers eux) pour les repentis du verset 159. La sourate montre un schema constant : faute humaine → retour humain → retour divin.",
              axe4_coherence: "La racine t-w-b avec Dieu comme sujet et 'ala comme preposition apparait environ 28 fois dans le Coran. En 9:117, « thumma taba 'alayhim » (puis Il revint vers eux). En 33:73, « li-yatuba Allahu 'ala » (afin que Dieu revienne vers). Le schema est constant : Dieu revient vers ceux qui reviennent vers Lui. Le Coran ne presente jamais le retour divin comme un pardon condescendant mais comme un mouvement reciproque — Dieu va vers ceux qui vont vers Lui.",
              axe5_frequence: "Pour la mission du khalifa, le retour divin est la garantie que la mission n'est jamais perdue. Le khalifa qui s'egare peut toujours revenir, et Dieu reviendra vers lui. Cette reciprocite est le fondement de l'espoir dans la mission — l'erreur n'est pas fatale tant que le retour est possible. Le retour divin montre que Dieu n'abandonne pas Ses khalifas meme quand ils faillissent."
            }
          }
        }
      },
      // twb pos=9 (3e occurrence : nom intensif defini « Celui qui revient sans cesse »)
      {
        word_key: "twb", position: 9, sense_chosen: "revenir sans cesse",
        analysis_axes: {
          sense_chosen: "revenir sans cesse",
          concept_chosen: "Retour",
          concepts: {
            "Retour": {
              status: "retenu",
              senses: ["revenir", "se repentir", "accepter le repentir", "repentir"],
              proof_ctx: "Le nom at-tawwabu est un nom de forme intensive fa''al de la racine t-w-b avec l'article defini. Le Lane's donne : celui qui revient beaucoup, celui qui revient constamment, celui qui ne cesse de revenir. La forme fa''al est une forme d'intensite et de repetition — elle ne designe pas un acte unique mais une habitude, une constante. L'article defini « al- » marque l'unicite et l'excellence — Il est LE Tawwab, pas un tawwab parmi d'autres. La distinction avec le verbe atubu (pos=6) est que le nom decrit un ATTRIBUT PERMANENT de Dieu, alors que le verbe decrit un ACTE ponctuel. Dieu revient (atubu) dans ce cas precis, et Il est par nature Celui qui revient sans cesse (at-tawwab) dans l'absolu.",
              axe1_verset: "Le nom at-tawwabu est le point culminant de la triple occurrence de la racine t-w-b dans le verset. La progression est : retour humain (tabu, accompli) → retour divin ponctuel (atubu, inaccompli) → attribut divin permanent (at-tawwab, nom). Le verset monte en intensite : un acte humain acheve, une reponse divine continue, un attribut divin eternel. Le nom at-tawwab revele que le retour divin n'est pas une concession exceptionnelle mais une constante de la nature divine — Dieu est TOUJOURS en train de revenir vers ceux qui reviennent.",
              axe2_voisins: "Le verset 159 presentait Dieu comme Celui qui maudit les dissimulateurs. Le verset 160 presente Dieu comme at-Tawwab ar-Rahim — Celui qui revient sans cesse et le Misericordieux. Ces deux attributs montrent que la malediction n'est pas le dernier mot de Dieu — Son attribut permanent est le retour, pas la malediction. Le verset 161 montrera que la malediction permanente ne touche que ceux qui refusent de revenir.",
              axe3_sourate: "Le nom at-Tawwab apparait dans la sourate al-Baqarah en 2:37 (« Il est le Tawwab le Rahim »), en 2:54 (« Il est le Tawwab le Rahim »), et en 2:128 (Ibrahim demande « reviens vers nous, Tu es le Tawwab le Rahim »). Le duo Tawwab-Rahim est un refrain de la sourate al-Baqarah — il ferme les episodes de retour apres la faute. Le verset 160 reprend ce meme duo pour fermer l'episode de la dissimulation.",
              axe4_coherence: "Le nom at-Tawwab apparait 11 fois dans le Coran, toujours comme attribut divin. En 4:64, « ils auraient trouve Dieu Tawwab Rahim ». En 49:12, « Dieu est Tawwab Rahim ». Le duo Tawwab-Rahim est la combinaison la plus frequente — le retour divin est toujours accompagne de misericorde. Le Coran montre que Dieu ne revient pas vers les creatures avec durete mais avec tendresse. Le Tawwab est aussi le Rahim.",
              axe5_frequence: "Pour la mission du khalifa, l'attribut at-Tawwab est le fondement de l'espoir. Le khalifa sait que Dieu revient sans cesse — il n'y a pas de point de non-retour dans la mission. Meme apres la faute la plus grave (dissimuler la verite divine), le retour reste possible parce que Dieu est par nature Celui qui revient. La mission du khalifa s'appuie sur cette certitude : Dieu ne se lasse pas de revenir vers ceux qui reviennent vers Lui."
            }
          }
        }
      },
      // rhm pos=10
      {
        word_key: "rhm", position: 10, sense_chosen: "misericordieux",
        analysis_axes: {
          sense_chosen: "misericordieux",
          concept_chosen: "Miséricorde/Tendresse",
          concepts: {
            "Miséricorde/Tendresse": {
              status: "retenu",
              senses: ["miséricorde", "pardon", "traiter avec compassion", "dire \"que Dieu te fasse miséricorde\"", "se forcer à la compassion", "miséricorde réciproque", "demander la miséricorde", "le Compatissant", "plus miséricordieux", "objet de miséricorde", "traité avec beaucoup de compassion"],
              proof_ctx: "Le nom ar-rahimu est un adjectif de forme fa'il de la racine r-h-m avec l'article defini. Le Lane's donne : misericordieux, compatissant, celui qui fait misericorde effectivement. Le rahim est celui dont la misericorde se traduit en actes concrets — c'est la misericorde active et effective qui touche les creatures. L'article defini « al- » marque l'unicite dans la perfection — Il est LE Misericordieux. La distinction avec ar-Rahman est que le Rahman designe la misericorde englobante et universelle, tandis que le Rahim designe la misericorde specifique et effective qui atteint ceux qui la meritent. Ici ar-Rahim est couple avec at-Tawwab — la misericorde accompagne le retour.",
              axe1_verset: "Le nom ar-rahimu ferme le verset en couplet avec at-tawwabu. Le champ lexical du verset est construit sur la reciprocite (retour humain → retour divin) et la misericorde vient sceller cette reciprocite. La progression est : condition humaine (revenir + corriger + rendre clair) → reponse divine (Je reviens vers eux) → nature divine (Tawwab + Rahim). La misericorde n'est pas une simple emotion mais l'aboutissement de tout le processus — les repentis retrouvent la misericorde divine parce qu'ils ont rempli les conditions.",
              axe2_voisins: "Le verset 159 lancait la malediction de Dieu, des anges et des gens. Le verset 160 remplace la malediction par la misericorde pour ceux qui reviennent. Le contraste est maximal : malediction (v159) vs misericorde (v160). Le verset 161 montrera que ceux qui refusent de revenir restent sous la malediction eternelle — la misericorde du v160 est reservee aux repentis.",
              axe3_sourate: "Le duo Tawwab-Rahim est un refrain de la sourate al-Baqarah. En 2:37, apres la faute d'Adam, « Il est le Tawwab le Rahim ». En 2:54, apres le veau d'or, « Il est le Tawwab le Rahim ». En 2:128, Ibrahim demande « reviens vers nous, Tu es le Tawwab le Rahim ». En 2:160, apres la dissimulation, « Je suis le Tawwab le Rahim ». La sourate utilise ce duo pour marquer la fin des episodes de faute et de retour — la misericorde ferme chaque cycle.",
              axe4_coherence: "La racine r-h-m apparait environ 339 fois dans le Coran. Le nom ar-Rahim apparait comme attribut divin dans la basmala (au debut de chaque sourate) et dans de nombreux versets. En 2:163, « votre Dieu est un Dieu unique, il n'y a de divinite que Lui, le Rahman le Rahim ». Le Coran presente la misericorde comme l'attribut fondamental de Dieu — elle precede la colere et depasse la punition.",
              axe5_frequence: "Pour la mission du khalifa, la misericorde divine est le filet de securite de la mission. Le khalifa qui faiblit sait que Dieu est ar-Rahim — la misericorde divine est effective et permanente. La mission n'est pas menee dans la terreur mais dans la confiance en la misericorde. Le khalifa doit aussi etre misericordieux envers les creatures — la mission de representation de Dieu sur terre inclut la representation de Sa misericorde."
            },
            "Utérus/Reproduction": {
              status: "nul",
              senses: ["utérus", "vulve", "maladie de l'utérus", "utérus gonflé", "chamelle malade post-partum", "sortie de l'utérus"],
              proof_ctx: "Le sens physique de l'uterus est l'origine etymologique de la racine r-h-m — la matrice est le lieu de la protection et de la tendresse originelle. Le contexte est un attribut divin (ar-Rahim), pas une realite anatomique."
            },
            "Parenté/Lien familial": {
              status: "nul",
              senses: ["lien de parenté", "parents par les femmes", "parent interdit au mariage", "sentiment de parenté", "connecté par parenté"],
              proof_ctx: "Le sens de parente est une extension de la racine r-h-m — les liens de parente (rahim/arham) derivent de la matrice commune. Le contexte est un attribut divin, pas un lien familial."
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

  const verseIds = [167];
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
  console.log('=== PIPELINE SOURATE 2 — VERSET 160 ===\n');
  await processVerse(160);
  await syncWordMeanings();
  console.log('\n=== PIPELINE V160 TERMINEE ===');
}

main().catch(e => console.error('FATAL:', e));
