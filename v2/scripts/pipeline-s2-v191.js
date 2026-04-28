const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// =====================================================
// PIPELINE SOURATE 2 — VERSET 191
// verse_id=198, analysis_id=558
// "Et tuez-les, ou que vous les rencontriez; et chassez-les
//  d'ou ils vous ont chasses : la fitna est plus grave que
//  le meurtre. Mais ne les combattez pas pres de la Mosquee
//  sacree avant qu'ils ne vous y aient combattus. S'ils vous
//  y combattent, tuez-les donc. Telle est la retribution
//  des rejetants."
// Regles du combat, fitna pire que le meurtre, limites
// =====================================================

const verseData = {
  191: {
    verse_id: 198,
    analysis_id: 558,
    translation_arab: "Et tuez-les, ou que vous les rencontriez; et chassez-les d'ou ils vous ont fait sortir : la mise a l'epreuve est plus intense que le meurtre. Mais ne les combattez pas pres de la Mosquee sacree avant qu'ils ne vous y aient combattus. S'ils vous y combattent, tuez-les donc. Telle est la retribution des rejetants.",
    full_translation: "Et tuez-les, ou que vous les rencontriez; et chassez-les d'ou ils vous ont chasses : l'association est plus grave que le meurtre. Mais ne les combattez pas pres de la Mosquee sacree avant qu'ils ne vous y aient combattus. S'ils vous y combattent, tuez-les donc. Telle est la retribution des mecreants.",
    translation_explanation: `§DEMARCHE§
Le verset detaille les regles d'engagement du combat autorise en 2:190. Il commence par une serie d'imperatifs et de conditions qui encadrent l'usage de la force. Le verbe **uqtuluhum** est un imperatif 2MP forme I de la racine q-t-l avec pronom suffixe 3MP. Le Lane's donne : tuer, mettre a mort, oter la vie, faire mourir, combattre jusqu'a la mort. La forme I de q-t-l designe l'acte de tuer — contrairement a la forme III (qatala = combattre mutuellement) utilisee en 2:190, la forme I est unilaterale. L'imperatif est conditionne par le verset precedent (2:190) qui limite le combat a ceux qui vous combattent d'abord. Le pronom suffixe -hum (les) renvoie aux agresseurs mentionnes en 2:190. La particule **haythu** (ou que) est une particule de lieu indetermine — elle generalise le lieu sans restriction geographique. Le verbe **thaqiftumuhum** est un accompli 2MP de la racine th-q-f avec pronom suffixe 3MP. Le Lane's donne : rencontrer, trouver, saisir, atteindre, etre habile, etre adroit, maitriser. Le verbe thaqifa signifie trouver quelqu'un et l'atteindre — le rencontrer de maniere a pouvoir agir. L'accompli dans un contexte conditionnel (haythu thaqiftumuhum = partout ou vous les rencontrez) exprime une condition generale, pas un evenement passe. Le verbe **akhrijuhum** est un imperatif 2MP forme IV de la racine kh-r-j avec pronom suffixe 3MP. Le Lane's donne : sortir, faire sortir, expulser, chasser, extraire, exterioriser. La forme IV (af'ala) est causative — faire sortir, c'est-a-dire chasser, expulser. L'imperatif ordonne de chasser les agresseurs du territoire. Le verbe **akhrajukum** est un accompli 3MP forme IV de la racine kh-r-j avec pronom suffixe 2MP. Le Lane's donne les memes sens — ici c'est l'action passee des agresseurs qui ont chasse les croyants de leur territoire. L'accompli marque un evenement acheve — ils vous ont DEJA fait sortir. La reciprocite est posee : ils vous ont chasses, donc chassez-les. Le nom **al-fitnatu** est un nom defini feminin singulier de la racine f-t-n. Le Lane's donne : epreuve, tentation, mise a l'epreuve par le feu, persecution, trouble, desordre, discorde, ce qui detourne, seduction, affliction. Le sens premier est l'epreuve du feu — fondre l'or pour le purifier, mettre a l'epreuve par le feu pour reveler la vraie nature. L'article al- definit la fitna comme LA realite connue — la mise a l'epreuve, la persecution, le trouble. L'adjectif **ashaddu** est un elatif (comparatif/superlatif) de la racine sh-d-d. Le Lane's donne : fort, intense, violent, severe, dur, rigoureux, vehement. L'elatif marque la superiorite — la fitna est PLUS intense, plus grave que le meurtre. Le nom **al-qatli** est un nom defini masculin singulier de la racine q-t-l. Le Lane's donne : meurtre, fait de tuer, mise a mort, acte de donner la mort. Le nom est au genitif apres min (de/que) — la fitna est plus grave que le meurtre. Le meurtre est un acte ponctuel qui met fin a la vie physique ; la fitna est une epreuve qui corrompt la foi et l'ordre social de maniere durable. Le verbe **tuqatiluhum** est un inaccompli 2MP forme III de q-t-l avec pronom suffixe 3MP et negation la. L'interdiction « la tuqatiluhum » (ne les combattez pas) limite le combat pres de la Mosquee sacree. La forme III (reciprocite) est de retour — il s'agit de combat mutuel, pas de meurtre unilateral. Le nom **al-masjidi** est un nom defini masculin singulier de la racine s-j-d. Le Lane's donne : lieu de prosternation, mosquee, lieu d'adoration, endroit ou l'on se prosterne. Le masjid est le lieu ou l'on fait le sujud (prosternation) — c'est un nom de lieu (ism makan) derive du verbe sajada. L'adjectif **al-harami** est un adjectif defini de la racine h-r-m. Le Lane's donne : sacre, interdit, inviolable, protege, ce qu'on ne peut pas toucher, ce qui est mis hors d'atteinte. Le haram est ce qui est interdit d'acces ou d'usage — l'inviolabilite. La Mosquee sacree (al-masjid al-haram) est le lieu de prosternation inviolable — la Kaaba et son enceinte a La Mecque. Le verbe **yuqatilukum** est un inaccompli 3MP forme III de q-t-l avec pronom suffixe 2MP. La condition « hatta yuqatilukum fihi » (jusqu'a ce qu'ils vous y combattent) pose la limite : ne pas initier le combat pres de la Mosquee sacree, sauf si eux le font d'abord. Le verbe **qatalukum** est un accompli 3MP forme III de q-t-l avec pronom suffixe 2MP. La condition « fa-in qatalukum » (s'ils vous combattent) reprend la meme racine a l'accompli — si l'agression se produit effectivement. Le verbe **fa-qtuluhum** est un imperatif 2MP forme I de q-t-l avec pronom suffixe 3MP, precede de fa (alors, donc). Si les agresseurs violent le caractere sacre du lieu en y combattant les croyants, la reponse autorisee est de les tuer. Le mot **kadhalika** (ainsi, de meme, telle est) est un adverbe demonstratif qui introduit la conclusion. Le nom **jaza'u** est un nom nominatif de la racine j-z-y. Le Lane's donne : retribution, recompense, ce qu'on rend en echange d'un acte, compensation, ce qui est du en retour. Le jaza' est neutre — il peut etre positif (recompense) ou negatif (chatiment). Ici la retribution est la consequence du rejet — ceux qui rejettent et agressent recoivent la retribution de leurs actes. Le nom **al-kafirina** est un participe actif pluriel defini de la racine k-f-r. Le Lane's donne : couvrir, cacher, dissimuler, rejeter, nier, etre ingrat, recouvrir la verite. Le kafir est celui qui couvre, qui recouvre — il recouvre la verite par le rejet. Le participe actif marque une action continue — le rejetant est celui qui rejette activement et continuellement. L'article al- et le pluriel designent une categorie connue : LES rejetants.

§JUSTIFICATION§
**tuez-les** (positions 2, 27) — Le sens retenu est « Meurtre/Combat ». Le verbe uqtuluhum est un imperatif forme I de q-t-l qui designe l'acte de tuer. L'alternative « combattre mutuellement » (forme III) est ecartee car la forme I est unilaterale — tuer, pas combattre. Le mot « tuer » est choisi car il traduit exactement la forme I sans l'adoucir.

**vous les rencontrez** — Le sens retenu est « Rencontre/Decouverte ». Le verbe thaqiftumuhum designe le fait de trouver, rencontrer, atteindre quelqu'un. L'alternative « Habilete » est ecartee car le contexte est le combat — on rencontre l'ennemi, on ne fait pas preuve d'adresse artisanale. Le mot « rencontrer » est choisi car il traduit l'idee de trouver l'ennemi face a face.

**chassez-les** — Le sens retenu est « Sortie/Exteriorisation ». Le verbe akhrijuhum est un imperatif forme IV de kh-r-j — faire sortir, expulser. L'alternative « sortir » (forme I, intransitif) est ecartee car la forme IV est causative — faire sortir, pas sortir soi-meme. Le mot « chasser » est choisi car il capture la force de l'expulsion imposee.

**ils vous ont fait sortir** — Le sens retenu est « Sortie/Exteriorisation ». Le verbe akhrajukum est un accompli forme IV — ils vous ont fait sortir. Meme racine et meme forme que le mot precedent mais a l'accompli. Le mot « fait sortir » est choisi pour la reciprocite — ils vous ont fait sortir, donc faites-les sortir.

**la mise a l'epreuve** — Le sens retenu est « Epreuve/Tentation ». Le nom al-fitnatu designe la mise a l'epreuve, la persecution, le trouble. L'alternative « seduction/tentation » est ecartee car le contexte est le combat et la persecution — la fitna ici est la persecution qui met a l'epreuve la foi des croyants, pas une seduction amoureuse. Le mot « mise a l'epreuve » est choisi car il rend le sens premier de la racine (eprouver par le feu) sans l'interpreter comme « association » (shirk) ou « idolatrie » comme le font les traductions courantes.

**plus intense** — Le sens retenu est « Force ». L'elatif ashaddu exprime le comparatif de superiorite. L'alternative « severite » est ecartee car l'elatif compare deux realites (fitna vs meurtre) en termes d'intensite, pas de severite morale. Le mot « intense » est choisi car il capture la force brute de la comparaison — la fitna est plus forte, plus grave, plus destructrice que le meurtre.

**le meurtre** — Le sens retenu est « Meurtre/Combat ». Le nom al-qatli designe le fait de tuer, le meurtre. Le mot est au defini (al-) — LE meurtre, l'acte de tuer en general.

**ne les combattez pas** — Le sens retenu est « Meurtre/Combat ». Le verbe tuqatiluhum est un inaccompli forme III — combattre mutuellement. La forme III est reciproque contrairement a la forme I. Le mot « combattre » est choisi pour distinguer la forme III (combat mutuel) de la forme I (tuer).

**la Mosquee** — Le sens retenu est « Prosternation/Adoration ». Le nom al-masjidi est le lieu de prosternation. Le mot « Mosquee » est un emprunt de l'arabe masjid — lieu ou l'on se prosterne.

**sacree** — Le sens retenu est « Interdiction/Sacre ». L'adjectif al-harami designe ce qui est interdit, inviolable, sacre. Le mot « sacree » est choisi car il capture l'idee d'inviolabilite du lieu.

**ils vous combattent** (positions 21, 25) — Le sens retenu est « Meurtre/Combat ». Les verbes yuqatilukum et qatalukum sont des formes III de q-t-l — combat mutuel. La difference est le temps : inaccompli (yuqatilukum = jusqu'a ce qu'ils vous combattent) vs accompli (qatalukum = s'ils vous ont combattus).

**retribution** — Le sens retenu est « Retribution/Justice ». Le nom jaza'u designe ce qu'on rend en echange d'un acte. L'alternative « recompense » est ecartee car le contexte est negatif — la retribution est ici la consequence du rejet et de l'agression. Le mot « retribution » est choisi car il est neutre et designe la consequence exacte d'un acte, sans connotation de « chatiment » (qui est un ajout interpretatif).

**les rejetants** — Le sens retenu est « Rejet/Ingratitude ». Le participe actif al-kafirina designe ceux qui rejettent activement. L'alternative « Couverture/Dissimulation » est ecartee car le contexte est le combat contre des agresseurs qui rejettent la foi et persecutent les croyants — le rejet est l'acte principal. Le mot « rejetants » est choisi car il traduit le participe actif (ceux qui FONT l'action de rejeter) sans utiliser « mecreants » (vocabulaire religieux charge) ni « infideles » (vocabulaire chretien).

§CRITIQUE§
**fitna vs association** — Les traductions courantes rendent « al-fitna » par « l'association » (Hamidullah) ou « la persecution » (Blachere). Le mot « association » (shirk) est une interpretation exegetique — les exegetes classiques ont compris que la fitna ici designe le shirk (le fait d'associer d'autres divinites a Dieu). Mais le texte dit al-fitna, pas al-shirk. La racine f-t-n signifie « eprouver par le feu, mettre a l'epreuve, tenter, persecuter ». Le texte dit litteralement que la mise a l'epreuve (persecution, trouble, discorde) est plus grave que le meurtre — le sens est plus large que la seule « association ». Le choix de « association » reduit la portee du verset a une seule dimension theologique, alors que la fitna englobe toute forme de persecution et de trouble qui met a l'epreuve la foi et l'ordre social.

**mecreants vs rejetants** — Les traductions courantes donnent « mecreants » ou « infideles » pour al-kafirina. Le mot « mecreant » vient du francais medieval et porte une charge pejorative et religieuse specifiquement chretienne. La racine k-f-r signifie « couvrir, cacher, rejeter » — le kafir est celui qui recouvre la verite par le rejet, pas un « incroyant » au sens chretien du terme. Le mot « rejetants » traduit le participe actif (ceux qui rejettent) et laisse le lecteur comprendre la nature de l'acte sans le biais du vocabulaire religieux medieval.`,
    segments: [
      { fr: "et", phon: "wa", arabic: "\u0648\u064e", is_particle: true, position: 0 },
      { fr: "tuez-les", pos: "verbe", phon: "uqtuluhum", arabic: "\u0671\u0642\u0652\u062a\u064f\u0644\u064f\u0648\u0647\u064f\u0645\u0652", word_key: "qtl", is_particle: false, sense_retenu: "tuer", position: 1 },
      { fr: "ou que", phon: "haythu", arabic: "\u062d\u064e\u064a\u0652\u062b\u064f", is_particle: true, position: 2 },
      { fr: "vous les rencontrez", pos: "verbe", phon: "thaqiftumuhum", arabic: "\u062b\u064e\u0642\u0650\u0641\u0652\u062a\u064f\u0645\u064f\u0648\u0647\u064f\u0645\u0652", word_key: "thqf", is_particle: false, sense_retenu: "rencontrer", position: 3 },
      { fr: "et", phon: "wa", arabic: "\u0648\u064e", is_particle: true, position: 4 },
      { fr: "chassez-les", pos: "verbe", phon: "akhrijuhum", arabic: "\u0623\u064e\u062e\u0652\u0631\u0650\u062c\u064f\u0648\u0647\u064f\u0645", word_key: "khrj", is_particle: false, sense_retenu: "faire sortir", position: 5 },
      { fr: "d'ou", phon: "min haythu", arabic: "\u0645\u0650\u0651\u0646\u0652 \u062d\u064e\u064a\u0652\u062b\u064f", is_particle: true, position: 6 },
      { fr: "ils vous ont fait sortir", pos: "verbe", phon: "akhrajukum", arabic: "\u0623\u064e\u062e\u0652\u0631\u064e\u062c\u064f\u0648\u0643\u064f\u0645\u0652", word_key: "khrj", is_particle: false, sense_retenu: "faire sortir", position: 7 },
      { fr: "et", phon: "wa", arabic: "\u0648\u064e", is_particle: true, position: 8 },
      { fr: "la mise a l'epreuve", pos: "nom", phon: "al-fitnatu", arabic: "\u0671\u0644\u0652\u0641\u0650\u062a\u0652\u0646\u064e\u0629\u064f", word_key: "ftn", is_particle: false, sense_retenu: "mise a l'epreuve", position: 9 },
      { fr: "plus intense", pos: "adjectif", phon: "ashaddu", arabic: "\u0623\u064e\u0634\u064e\u062f\u0651\u064f", word_key: "shdd", is_particle: false, sense_retenu: "intense", position: 10 },
      { fr: "que", phon: "min", arabic: "\u0645\u0650\u0646\u064e", is_particle: true, position: 11 },
      { fr: "le meurtre", pos: "nom", phon: "al-qatli", arabic: "\u0671\u0644\u0652\u0642\u064e\u062a\u0652\u0644\u0650", word_key: "qtl", is_particle: false, sense_retenu: "meurtre", position: 12 },
      { fr: "et ne", phon: "wa-la", arabic: "\u0648\u064e\u0644\u064e\u0627", is_particle: true, position: 13 },
      { fr: "les combattez pas", pos: "verbe", phon: "tuqatiluhum", arabic: "\u062a\u064f\u0642\u064e\u0640\u0670\u062a\u0650\u0644\u064f\u0648\u0647\u064f\u0645\u0652", word_key: "qtl", is_particle: false, sense_retenu: "combattre", position: 14 },
      { fr: "pres de", phon: "'inda", arabic: "\u0639\u0650\u0646\u062f\u064e", is_particle: true, position: 15 },
      { fr: "la Mosquee", pos: "nom", phon: "al-masjidi", arabic: "\u0671\u0644\u0652\u0645\u064e\u0633\u0652\u062c\u0650\u062f\u0650", word_key: "sjd", is_particle: false, sense_retenu: "lieu de prosternation", position: 16 },
      { fr: "sacree", pos: "adjectif", phon: "al-harami", arabic: "\u0671\u0644\u0652\u062d\u064e\u0631\u064e\u0627\u0645\u0650", word_key: "hrm", is_particle: false, sense_retenu: "sacre/inviolable", position: 17 },
      { fr: "jusqu'a ce que", phon: "hatta", arabic: "\u062d\u064e\u062a\u0651\u064e\u0649\u0670", is_particle: true, position: 18 },
      { fr: "ils vous combattent", pos: "verbe", phon: "yuqatilukum", arabic: "\u064a\u064f\u0642\u064e\u0640\u0670\u062a\u0650\u0644\u064f\u0648\u0643\u064f\u0645\u0652", word_key: "qtl", is_particle: false, sense_retenu: "combattre", position: 19 },
      { fr: "dans ce lieu", phon: "fihi", arabic: "\u0641\u0650\u064a\u0647\u0650", is_particle: true, position: 20 },
      { fr: "et si", phon: "fa-in", arabic: "\u0641\u064e\u0625\u0650\u0646", is_particle: true, position: 21 },
      { fr: "ils vous combattent", pos: "verbe", phon: "qatalukum", arabic: "\u0642\u064e\u0640\u0670\u062a\u064e\u0644\u064f\u0648\u0643\u064f\u0645\u0652", word_key: "qtl", is_particle: false, sense_retenu: "combattre", position: 22 },
      { fr: "alors", phon: "fa", arabic: "\u0641\u064e", is_particle: true, position: 23 },
      { fr: "tuez-les", pos: "verbe", phon: "fa-qtuluhum", arabic: "\u0641\u064e\u0671\u0642\u0652\u062a\u064f\u0644\u064f\u0648\u0647\u064f\u0645\u0652", word_key: "qtl", is_particle: false, sense_retenu: "tuer", position: 24 },
      { fr: "telle est", phon: "kadhalika", arabic: "\u0643\u064e\u0630\u064e\u0670\u0644\u0650\u0643\u064e", is_particle: true, position: 25 },
      { fr: "la retribution", pos: "nom", phon: "jaza'u", arabic: "\u062c\u064e\u0632\u064e\u0622\u0621\u064f", word_key: "jzy", is_particle: false, sense_retenu: "retribution", position: 26 },
      { fr: "des rejetants", pos: "nom", phon: "al-kafirina", arabic: "\u0671\u0644\u0652\u0643\u064e\u0640\u0670\u0641\u0650\u0631\u0650\u064a\u0646\u064e", word_key: "kfr", is_particle: false, sense_retenu: "rejetants", position: 27 }
    ],
    words: [
      // qtl pos=1 — imperatif forme I "tuez-les" (1ere occurrence)
      {
        word_key: "qtl", position: 1, sense_chosen: "tuer",
        analysis_axes: {
          sense_chosen: "tuer",
          concept_chosen: "Meurtre/Combat",
          concepts: {
            "Meurtre/Combat": {
              status: "retenu",
              senses: ["tuer", "mettre a mort", "combattre", "lutter", "oter la vie", "faire mourir"],
              proof_ctx: "Le verbe uqtuluhum est un imperatif 2MP forme I de la racine q-t-l avec pronom suffixe 3MP. Le Lane's donne : tuer, mettre a mort, oter la vie, combattre, faire mourir. La forme I de q-t-l est unilaterale — elle designe l'acte de tuer, pas le combat reciproque (forme III). L'imperatif ordonne de tuer les agresseurs mentionnes en 2:190. Le concept de meurtre/combat couvre l'acte de donner la mort — c'est un acte exterieur, directionnel et definitif. L'acte sort de celui qui tue et atteint celui qui est tue. Le meurtre est l'acte physique ultime — il met fin a l'existence de l'autre de maniere irreversible. La condition posee en 2:190 (ceux qui vous combattent d'abord) encadre strictement cet imperatif : il ne s'agit pas d'un ordre de tuer sans conditions, mais d'une reponse a une agression.",
              axe1_verset: "Le verbe uqtuluhum ouvre le verset en posant la regle d'engagement la plus directe : tuer les agresseurs ou que vous les rencontriez. Le champ lexical du verset (rencontrer, chasser, faire sortir, fitna, meurtre, combattre, Mosquee sacree, retribution, rejetants) est entierement tourne vers le combat et ses regles. La forme I (tuer) est utilisee pour les cas ou l'ennemi est a portee et que les conditions de 2:190 sont remplies. Le verset fait alterner entre la forme I (tuer — unilateral) et la forme III (combattre — reciproque) pour distinguer deux types d'action : l'acte de tuer quand l'ennemi est vaincu, et le combat mutuel quand les deux camps s'affrontent.",
              axe2_voisins: "Le verset 2:190 autorisait le combat defensif avec la forme III (qatilu = combattez mutuellement). Le verset 2:191 passe a la forme I (uqtulu = tuez) pour detailler les consequences du combat. La sequence 2:190-191 montre une escalade reglementee : d'abord le combat reciproque (forme III, 2:190), puis la mise a mort si l'ennemi est rencontre (forme I, 2:191). Le verset 2:192 ajoutera la condition d'arret : « s'ils cessent, Dieu est pardonneur ». La sequence complete pose un cadre : combat defensif → mise a mort des agresseurs → cessez-le-feu si l'ennemi arrete.",
              axe3_sourate: "La racine q-t-l est extremement frequente dans la sourate al-Baqarah, surtout dans cette section legislative (2:178-195). En 2:178, le qatl est le meurtre qui declenche le talion. En 2:190, la forme III (qatilu) autorise le combat. En 2:191, la forme I (uqtulu) ordonne de tuer les agresseurs sous conditions. La sourate construit une legislation complete autour de la vie et de la mort : quand on peut tuer, quand on doit combattre, quand on doit s'arreter. Le qatl n'est jamais libre — il est toujours encadre par des conditions strictes.",
              axe4_coherence: "La racine q-t-l apparait environ 170 fois dans le Coran. En 5:32, « quiconque tue une ame sans raison, c'est comme s'il avait tue l'humanite entiere ». En 6:151, « ne tuez pas l'ame que Dieu a rendue sacree, sauf en droit ». Le Coran pose le principe general de l'interdiction de tuer, puis enumere les exceptions legales : le talion (2:178), la defense (2:190-191), la justice (5:33). Le verset 2:191 est une exception reglementee, pas un permis de tuer generalise — le Coran limite severement le droit de tuer et condamne le meurtre gratuit.",
              axe5_frequence: "Pour la mission du khalifa, tuer est l'acte le plus grave et le plus encadre. Le khalifa n'a pas le droit de tuer sans raison — la vie humaine est sacree (6:151). Mais quand des agresseurs persecutent les croyants et les chassent de leurs terres, le khalifa a le devoir de les affronter. Tuer dans la voie de Dieu n'est pas un plaisir mais une necessite defensive — le khalifa tue pour empecher la corruption sur terre, pas pour satisfaire une vengeance. La condition de 2:190 reste le cadre absolu."
            }
          }
        }
      },
      // thqf pos=3 — accompli "vous les rencontrez"
      {
        word_key: "thqf", position: 3, sense_chosen: "rencontrer",
        analysis_axes: {
          sense_chosen: "rencontrer",
          concept_chosen: "Rencontre/D\u00e9couverte",
          concepts: {
            "Rencontre/D\u00e9couverte": {
              status: "retenu",
              senses: ["rencontrer", "trouver", "atteindre", "saisir", "decouvrir", "tomber sur"],
              proof_ctx: "Le verbe thaqiftumuhum est un accompli 2MP de la racine th-q-f avec pronom suffixe 3MP. Le Lane's donne : rencontrer, trouver, saisir, atteindre, decouvrir quelqu'un, tomber sur. Le sens de rencontre porte l'idee de trouver l'ennemi et de l'atteindre — c'est une rencontre qui permet l'action, pas une rencontre passive ou fortuite. La rencontre est un acte exterieur et directionnel — on rencontre quelqu'un dans un lieu et a un moment precis. Dans le contexte du combat, thaqifa signifie rencontrer l'ennemi de maniere a pouvoir engager l'action. L'accompli dans une construction conditionnelle (haythu thaqiftumuhum) exprime une condition generale — partout ou vous les trouvez, chaque fois que la rencontre se produit. La distinction avec le sens d'habilete est nette : le contexte est le combat, pas l'artisanat.",
              axe1_verset: "Le verbe thaqiftumuhum qualifie la condition du tuer : tuer ou que vous les rencontriez. Le champ lexical (tuer, chasser, faire sortir, combat, Mosquee sacree) montre que la rencontre est une rencontre de combat — trouver l'ennemi sur le terrain. La particule haythu (ou que) generalise le lieu de la rencontre — il n'y a pas de restriction geographique (sauf la Mosquee sacree, mentionnee ensuite comme exception). La rencontre est le moment charniere entre la recherche et l'action — on cherche l'ennemi, on le trouve (thaqifa), on agit (uqtulu). Le verbe lie le lieu au combat.",
              axe2_voisins: "Le verset 2:190 posait le principe du combat defensif sans preciser le lieu. Le verset 2:191 ajoute la dimension spatiale : ou que vous les rencontriez. Puis le verset pose l'exception de la Mosquee sacree — ne pas combattre pres d'elle sauf si l'ennemi attaque en premier. La sequence montre que le lieu du combat est generalise (partout ou la rencontre se produit) puis restreint (pas pres de la Mosquee sacree). Le verbe thaqifa marque le moment ou l'ennemi est localise et atteint.",
              axe3_sourate: "La racine th-q-f est rare dans le Coran — elle apparait principalement dans les versets de combat. En 2:191 et en 4:91, « prenez-les et tuez-les ou que vous les trouviez (thaqiftumuhum) ». La sourate al-Baqarah utilise thaqifa pour decrire la rencontre avec l'ennemi sur le champ de bataille. Le mot est specifiquement lie au contexte militaire — trouver l'ennemi et l'atteindre. La rarete de la racine montre que cette situation est exceptionnelle, pas ordinaire.",
              axe4_coherence: "La racine th-q-f apparait environ 5 fois dans le Coran. En 4:91, « s'ils ne se retirent pas, prenez-les et tuez-les ou que vous les trouviez ». En 8:57, « si tu les rencontres dans la guerre, disperse ceux qui sont derriere eux ». En 33:61, « ou qu'on les trouve (thuqifu), ils seront pris et tues ». Le Coran utilise th-q-f exclusivement dans le contexte du combat — la racine est un terme militaire qui designe le fait de localiser et d'atteindre l'ennemi. La constance de l'usage confirme le sens de « rencontrer/trouver dans le combat ».",
              axe5_frequence: "Pour la mission du khalifa, la rencontre avec l'ennemi est le moment ou la mission de defense se concretise. Le khalifa ne cherche pas le combat mais quand les agresseurs violent la paix et persecutent les croyants, la rencontre avec l'ennemi est inevitable. Thaqifa marque le passage de l'intention a l'action — on a cherche l'ennemi (ou il s'est presente), on l'a trouve, maintenant il faut agir. La mission du khalifa est de prevenir la corruption, et la rencontre avec l'agresseur est le moment decisif."
            },
            "Habilet\u00e9": {
              status: "probable",
              senses: ["etre habile", "etre adroit", "maitriser un art", "etre expert", "dexterite"],
              proof_ctx: "Le sens d'habilete est bien atteste dans le Lane's pour la racine th-q-f — le thaqf est l'habilete, l'adresse, la maitrise d'un art ou d'une technique. Le thaqif est celui qui est adroit et habile. Mais le contexte du verset est le combat : la construction « haythu thaqiftumuhum » (ou que vous les rencontriez) est une expression militaire qui designe le fait de trouver l'ennemi, pas de faire preuve d'habilete. La distinction philosophique est que l'habilete est une qualite interieure et permanente de la personne (etre adroit), tandis que la rencontre est un evenement exterieur et ponctuel (trouver quelqu'un a un lieu precis). Le pronom suffixe -hum (les) confirme le sens de rencontre — on rencontre des personnes, on ne fait pas preuve d'habilete a des personnes. Le contexte combat + pronom suffixe + particule de lieu (haythu) convergent vers la rencontre, pas l'habilete."
            }
          }
        }
      },
      // khrj pos=5 — imperatif forme IV "chassez-les"
      {
        word_key: "khrj", position: 5, sense_chosen: "faire sortir",
        analysis_axes: {
          sense_chosen: "faire sortir",
          concept_chosen: "Sortie/Ext\u00e9riorisation",
          concepts: {
            "Sortie/Ext\u00e9riorisation": {
              status: "retenu",
              senses: ["sortir", "faire sortir", "expulser", "chasser", "extraire", "exterioriser", "apparaitre"],
              proof_ctx: "Le verbe akhrijuhum est un imperatif 2MP forme IV de la racine kh-r-j avec pronom suffixe 3MP. Le Lane's donne : sortir, faire sortir, expulser, chasser, extraire, exterioriser, apparaitre, se montrer. La forme IV (if'al) est causative — akhraja signifie « faire sortir », pas « sortir soi-meme ». La sortie est un mouvement de l'interieur vers l'exterieur — on quitte un espace ferme pour un espace ouvert. La sortie causative (faire sortir) est un acte de force — on impose a l'autre de quitter son lieu. L'imperatif ordonne de chasser les agresseurs de l'endroit ou ils se trouvent, en reciprocite de ce qu'ils ont fait aux croyants (akhrajukum). Le concept de sortie est directionnel et irreversible dans ce contexte — les agresseurs sont expulses de leur position.",
              axe1_verset: "Le verbe akhrijuhum est le deuxieme imperatif du verset apres uqtuluhum (tuez-les). Le champ lexical (tuer, rencontrer, chasser, faire sortir, fitna, meurtre) montre que l'expulsion est une mesure complementaire au combat. Le verset juxtapose deux actions : tuer et chasser. L'expulsion est moins grave que le meurtre mais tout aussi decisive — elle prive l'ennemi de son territoire. La construction « akhrijuhum min haythu akhrajukum » (chassez-les d'ou ils vous ont chasses) pose le principe de reciprocite : ce qu'ils vous ont fait, faites-le leur.",
              axe2_voisins: "Le verset 2:190 autorisait le combat defensif. Le verset 2:191 ajoute l'expulsion comme action legitime. La sequence montre que le combat defensif ne se limite pas a l'affrontement physique — il inclut la reconquete du territoire perdu. Les agresseurs ont chasse les croyants (akhrajukum), donc les croyants ont le droit de les chasser en retour (akhrijuhum). Le verset 2:192 ajoutera la possibilite de cessez-le-feu. La legislation militaire est complete : combat, meurtre, expulsion, cessez-le-feu.",
              axe3_sourate: "La racine kh-r-j est frequente dans la sourate al-Baqarah. En 2:167, les mecreants « ne sortiront pas du feu ». En 2:217, « en faire sortir ses habitants (ikhraj) est plus grave aupres de Dieu ». En 2:240, la veuve « sort ». La sourate utilise kh-r-j pour les mouvements de sortie dans tous les contextes — sortie du feu, expulsion d'une ville, depart d'une veuve. En 2:191, la sortie est forcee — l'expulsion est un acte de guerre impose par les agresseurs et retourne contre eux.",
              axe4_coherence: "La racine kh-r-j apparait environ 183 fois dans le Coran. En 2:217, « en faire sortir les habitants du Masjid al-Haram est plus grave que le meurtre ». En 59:2, « Il est Celui qui a fait sortir (akhraja) ceux qui ont rejete parmi les Gens du Livre de leurs demeures ». En 60:1, « ils vous ont fait sortir (akhrajukum) parce que vous croyez en Dieu ». Le Coran lie l'expulsion des croyants a la persecution religieuse — les croyants ont ete chasses de La Mecque a cause de leur foi. Le verset 2:191 autorise la reciprocite de cette expulsion.",
              axe5_frequence: "Pour la mission du khalifa, l'expulsion de l'agresseur est un acte de restauration de l'ordre. Le khalifa a ete chasse de son territoire par des agresseurs — la reconquete n'est pas une vengeance mais un retablissement de la justice. Chasser l'agresseur d'ou il a chasse les croyants restaure l'equilibre rompu par l'agression initiale. La mission du khalifa inclut la defense du territoire — non par expansionnisme mais par resistance a l'injustice de l'expulsion."
            }
          }
        }
      },
      // khrj pos=7 — accompli forme IV "ils vous ont fait sortir"
      {
        word_key: "khrj", position: 7, sense_chosen: "faire sortir",
        analysis_axes: {
          sense_chosen: "faire sortir",
          concept_chosen: "Sortie/Ext\u00e9riorisation",
          concepts: {
            "Sortie/Ext\u00e9riorisation": {
              status: "retenu",
              senses: ["sortir", "faire sortir", "expulser", "chasser", "extraire", "exterioriser", "apparaitre"],
              proof_ctx: "Le verbe akhrajukum est un accompli 3MP forme IV de la racine kh-r-j avec pronom suffixe 2MP. Le Lane's donne les memes sens que pour akhrijuhum. L'accompli marque un evenement acheve — ils vous ont DEJA fait sortir. C'est un fait historique que le verset rappelle : les agresseurs ont expulse les croyants de leur territoire. L'accompli contraste avec l'imperatif akhrijuhum — eux l'ont fait (accompli, c'est acheve), maintenant vous faites-le en retour (imperatif, c'est un ordre). Le verbe est a la forme IV causative — ils ne sont pas sortis eux-memes, ils ont FAIT sortir les croyants par la force.",
              axe1_verset: "Le verbe akhrajukum justifie l'imperatif akhrijuhum. Le champ lexical (tuer, rencontrer, chasser, fitna, meurtre, combattre) montre que l'expulsion passee est la cause de la reponse presente. Le verset etablit un lien de causalite directe : PARCE QU'ils vous ont fait sortir, chassez-les. La construction « min haythu akhrajukum » (d'ou ils vous ont chasses) localise l'expulsion — il s'agit d'un lieu precis (La Mecque et ses environs). L'accompli ancre l'action dans l'histoire — l'expulsion a eu lieu, c'est un fait, pas une hypothese.",
              axe2_voisins: "Le verset 2:190 autorisait le combat contre ceux qui vous combattent. Le verset 2:191 ajoute la justification historique : ils vous ont fait sortir. La sequence montre que le combat defensif n'est pas abstrait — il repond a des injustices concretes et documentees. L'expulsion des croyants de La Mecque est l'injustice fondatrice qui justifie le combat defensif. Le verset 2:217 reviendra sur ce point : « en faire sortir ses habitants est plus grave que le meurtre ».",
              axe3_sourate: "La sourate al-Baqarah mentionne l'expulsion des croyants a plusieurs reprises. En 2:85, « puis vous vous expulsez les uns les autres ». En 2:191, les agresseurs ont expulse les croyants. En 2:217, l'expulsion du Masjid al-Haram est declaree plus grave que le meurtre. La sourate construit un dossier juridique contre les agresseurs : ils ont expulse les croyants, ils les ont persecutes, donc le combat defensif est autorise. L'accompli akhrajukum est une piece a conviction.",
              axe4_coherence: "Le Coran mentionne l'expulsion des croyants dans de nombreuses sourates. En 22:40, « ceux qui ont ete expulses de leurs demeures sans droit, uniquement parce qu'ils ont dit : notre Seigneur est Dieu ». En 60:1, « ceux qui vous ont fait sortir et le Messager parce que vous croyez en Dieu votre Seigneur ». Le Coran lie l'expulsion a la persecution religieuse — les croyants ont ete chasses non pour des crimes mais pour leur foi. L'accompli akhrajukum dans 2:191 s'inscrit dans ce recit coranique de l'injustice subie.",
              axe5_frequence: "Pour la mission du khalifa, l'expulsion subie est l'injustice fondatrice qui active le devoir de defense. Le khalifa ne combat pas par choix mais parce qu'il a ete chasse de chez lui. L'accompli marque que l'injustice est un fait — pas une possibility mais une realite vecue. La mission du khalifa est de retablir la justice la ou elle a ete violee, et l'expulsion est la violation la plus concrete du droit de vivre en paix sur sa terre."
            }
          }
        }
      },
      // ftn pos=9 — nom defini "la fitna"
      {
        word_key: "ftn", position: 9, sense_chosen: "mise a l'epreuve",
        analysis_axes: {
          sense_chosen: "mise a l'epreuve",
          concept_chosen: "\u00c9preuve/Tentation",
          concepts: {
            "\u00c9preuve/Tentation": {
              status: "retenu",
              senses: ["epreuve", "tentation", "mise a l'epreuve par le feu", "persecution", "trouble", "discorde", "seduction", "affliction", "fondre l'or"],
              proof_ctx: "Le nom al-fitnatu est un nom defini feminin singulier de la racine f-t-n. Le Lane's donne : epreuve, tentation, mise a l'epreuve par le feu (fondre l'or pour le purifier et reveler ses impuretes), persecution, trouble, discorde, ce qui detourne de la droiture, seduction, affliction, tourment. Le sens premier est physique — la fitna du forgeron qui fond l'or dans le feu pour reveler s'il est pur ou impur. De ce sens physique decoulent tous les sens abstraits : mettre quelqu'un a l'epreuve pour reveler sa vraie nature, le persecuter pour le faire flechir, le seduire pour le detourner. La fitna est un processus qui revele — elle ne cree pas la faiblesse, elle la met en lumiere. L'article al- definit la fitna comme LA realite connue de tous — la persecution, le trouble, l'epreuve. La fitna est plus qu'un acte ponctuel — c'est un processus destructeur qui corrompt l'ordre social et met en danger la foi et la paix.",
              axe1_verset: "Le mot al-fitnatu est au centre de l'affirmation-cle du verset : « la fitna est plus intense que le meurtre ». Le champ lexical (tuer, chasser, faire sortir, combattre, meurtre, retribution) montre que la fitna est comparee au meurtre en termes de gravite. Le verset ne dit pas que le meurtre est anodin — il dit que la fitna est PIRE. La fitna detruit de l'interieur (la foi, l'ordre social, la paix) tandis que le meurtre detruit de l'exterieur (la vie physique). Le fait que la fitna soit declaree plus grave que le meurtre justifie le combat defensif : si les agresseurs commettent la fitna (persecution, trouble), les combattre et meme les tuer est autorise car la fitna qu'ils causent est pire que la mort qu'ils subissent.",
              axe2_voisins: "Le verset 2:190 autorisait le combat defensif. Le verset 2:191 justifie cette autorisation par la gravite de la fitna. La fitna est la raison d'etre du combat : les croyants ne combattent pas pour tuer mais pour mettre fin a la fitna. Le verset 2:193 le confirmera : « combattez-les jusqu'a ce qu'il n'y ait plus de fitna ». La sequence 2:190-193 pose la fitna comme la cause du combat et sa cessation comme le but du combat. La fitna est l'ennemi veritable — les combattants ne sont que ses instruments.",
              axe3_sourate: "La racine f-t-n apparait dans la sourate al-Baqarah a plusieurs reprises. En 2:102, la fitna des anges de Babylone (Harut et Marut). En 2:191, la fitna est declaree pire que le meurtre. En 2:193, le combat continue jusqu'a la fin de la fitna. En 2:217, la fitna est a nouveau declaree plus grave que le meurtre. La sourate utilise la fitna comme un concept central qui justifie le combat defensif — la fitna est le desordre ultime que le khalifa doit combattre.",
              axe4_coherence: "La racine f-t-n apparait environ 60 fois dans le Coran. En 8:28, « vos biens et vos enfants sont une fitna ». En 8:39, « combattez-les jusqu'a ce qu'il n'y ait plus de fitna ». En 29:2, « les gens pensent-ils qu'on les laissera dire nous croyons sans qu'ils soient mis a l'epreuve (yuftanuna) ». Le Coran utilise la fitna dans tous ses sens — l'epreuve divine, la persecution humaine, la tentation des biens, le trouble social. Le sens commun est la mise a l'epreuve qui revele la verite — que ce soit Dieu qui eprouve les croyants ou les persecuteurs qui tourmentent les croyants.",
              axe5_frequence: "Pour la mission du khalifa, la fitna est l'ennemi supreme de la mission. Le khalifa a pour mission de prevenir la corruption et l'injustice sur terre — la fitna est la forme ultime de cette corruption. La fitna detruit l'ordre social de l'interieur en persecutant les croyants, en semant le trouble, en detournant les gens de la verite. La declaration « la fitna est plus grave que le meurtre » montre que le desordre social et spirituel est pire que la mort physique. Le khalifa combat pour eliminer la fitna, pas pour eliminer des personnes."
            }
          }
        }
      },
      // shdd pos=10 — elatif "plus intense"
      {
        word_key: "shdd", position: 10, sense_chosen: "intense",
        analysis_axes: {
          sense_chosen: "intense",
          concept_chosen: "Force",
          concepts: {
            "Force": {
              status: "retenu",
              senses: ["fort", "intense", "violent", "severe", "dur", "rigoureux", "vehement", "puissant", "solide"],
              proof_ctx: "L'adjectif ashaddu est un elatif (comparatif de superiorite) de la racine sh-d-d. Le Lane's donne : fort, intense, violent, severe, dur, rigoureux, vehement, solide, serre, tendu. Le shidda est la force, l'intensite, la durete — c'est l'oppose de la faiblesse et de la douceur. L'elatif ashaddu marque le degre superieur — plus intense, plus fort, plus grave. Le concept de force couvre l'intensite dans tous ses aspects — la force physique, la severite morale, la violence du phenomene. L'elatif est un outil de comparaison qui met en balance deux realites (fitna vs meurtre) et declare l'une superieure a l'autre en intensite. La force est une qualite mesurable et comparative — elle permet de hierarchiser les maux.",
              axe1_verset: "Le mot ashaddu est le lien comparatif entre la fitna et le meurtre. Le champ lexical (fitna, meurtre, tuer, combattre, chasser) montre que le verset compare deux maux : la persecution et le meurtre. L'elatif ashaddu tranche : la fitna est pire. Cette hierarchisation est fondamentale pour la legislation du combat — elle justifie l'usage de la force letale contre ceux qui commettent la fitna. Si la fitna etait moins grave que le meurtre, tuer les persecuteurs serait disproportionne. Mais puisque la fitna est PLUS grave, le combat est une reponse proportionnee a un mal superieur.",
              axe2_voisins: "Le verset 2:190 posait le cadre du combat defensif. Le verset 2:191 fournit la justification morale : la fitna est plus intense (ashaddu) que le meurtre. La sequence montre que le Coran ne se contente pas d'autoriser le combat — il l'explique et le justifie. Le combat est autorise PARCE QUE la fitna est pire que la mort. Le verset 2:192 ajoutera la possibilite d'arret — si les agresseurs cessent, Dieu pardonne. La justification par l'elatif ashaddu est le pivot argumentatif de toute la section.",
              axe3_sourate: "La racine sh-d-d apparait dans la sourate al-Baqarah en plusieurs endroits. En 2:74, les coeurs « sont devenus durs (ashaddu qaswatan) » — plus durs que la pierre. En 2:165, les croyants « sont plus intenses (ashaddu) dans l'amour de Dieu ». En 2:191, la fitna est « plus intense » que le meurtre. La sourate utilise l'elatif ashaddu pour comparer des realites et etablir des hierarchies — la durete des coeurs, l'intensite de l'amour, la gravite de la fitna. Chaque comparaison sert un argument.",
              axe4_coherence: "La racine sh-d-d apparait environ 105 fois dans le Coran. En 2:85, « un chatiment plus severe (ashaddu) ». En 4:84, « Dieu est plus intense (ashaddu) en force et plus intense en chatiment ». En 41:15, les Aad « qui est plus fort (ashaddu) que nous en force ? ». Le Coran utilise ashaddu pour comparer les forces et les intensites — c'est un outil argumentatif qui permet de hierarchiser les realites. En 2:191, l'elatif sert a hierarchiser les maux : la fitna depasse le meurtre en gravite.",
              axe5_frequence: "Pour la mission du khalifa, la hierarchisation des maux est essentielle. Le khalifa doit savoir quel mal est le plus grave pour allouer ses efforts correctement. Le verset enseigne que la fitna (persecution, trouble, desordre) est un mal plus grave que le meurtre physique. Le khalifa combat donc la fitna en priorite — non pas parce que le meurtre est acceptable, mais parce que la fitna produit un mal plus profond et plus durable. La force de la comparaison (ashaddu) oriente l'action du khalifa vers la racine du mal."
            }
          }
        }
      },
      // qtl pos=12 — nom defini "le meurtre"
      {
        word_key: "qtl", position: 12, sense_chosen: "meurtre",
        analysis_axes: {
          sense_chosen: "meurtre",
          concept_chosen: "Meurtre/Combat",
          concepts: {
            "Meurtre/Combat": {
              status: "retenu",
              senses: ["tuer", "mettre a mort", "combattre", "lutter", "oter la vie", "faire mourir", "meurtre"],
              proof_ctx: "Le nom al-qatli est un nom defini masculin singulier de la racine q-t-l au genitif apres min (que). Le Lane's donne : meurtre, fait de tuer, mise a mort, acte de donner la mort. Le qatl est le masdar (nom verbal) de la forme I — l'acte de tuer pris comme concept. L'article al- definit le meurtre comme LE meurtre en general — pas un meurtre particulier mais l'acte de tuer dans l'absolu. Le meurtre est un acte exterieur, unilateral et irreversible — il met fin a la vie d'un autre de maniere definitive. La forme grammaticale (nom defini au genitif) fait du meurtre le second terme de la comparaison avec la fitna — la fitna est plus grave que LE meurtre, pas qu'un meurtre particulier.",
              axe1_verset: "Le mot al-qatli est le second terme de la comparaison « al-fitnatu ashaddu min al-qatli ». Le champ lexical (tuer, combattre, fitna, retribution) montre que le meurtre est mis en balance avec la fitna. Le verset ne minimise pas le meurtre — il reconnait sa gravite mais declare la fitna plus grave encore. Le meurtre physique est un acte ponctuel qui met fin a une vie ; la fitna est un processus continu qui corrompt une societe entiere. Le nom defini (al-qatl) generalise — c'est le meurtre comme categorie, pas un acte isole.",
              axe2_voisins: "Le verset 2:178 traitait du meurtre (qatl) dans le cadre du talion. Le verset 2:191 compare le meurtre a la fitna. La sequence montre que la sourate place le meurtre dans un cadre hierarchique : le meurtre est grave (il merite le talion, 2:178), mais la fitna est pire (2:191). Le Coran ne banalise pas le meurtre — il reconnait sa gravite tout en la relativisant par rapport a un mal plus grand. Les versets 190-193 montrent que le but du combat n'est pas le meurtre mais la fin de la fitna.",
              axe3_sourate: "La racine q-t-l sous forme de nom (al-qatl) apparait dans la sourate al-Baqarah en 2:178 (le talion) et en 2:191 (la comparaison avec la fitna). La sourate traite le meurtre comme un fait juridique a reglementer, pas comme un tabou absolu. Le talion encadre le meurtre entre individus ; les regles du combat encadrent le meurtre dans la guerre. Dans tous les cas, le qatl est soumis a des conditions strictes — jamais libre, toujours encadre.",
              axe4_coherence: "Le Coran traite le meurtre avec une gravite constante. En 5:32, « quiconque tue une ame sans raison, c'est comme s'il avait tue l'humanite entiere ». En 17:33, « ne tuez pas l'ame que Dieu a rendue sacree, sauf en droit ». Le verset 2:191 ne contredit pas ces principes — il les complete en hierarchisant les maux. La fitna est pire que le meurtre non parce que le meurtre est acceptable, mais parce que la fitna produit un mal plus large et plus profond que la mort d'un individu.",
              axe5_frequence: "Pour la mission du khalifa, le meurtre est le mal le plus visible mais pas le pire. Le khalifa doit comprendre que la corruption sociale (fitna) est plus destructrice que le meurtre individuel. Un meurtre tue une personne ; la fitna peut corrompre une societe entiere. La hierarchisation du verset oriente l'action du khalifa : combattre la fitna est plus urgent que punir le meurtre, car la fitna est la source de tous les maux — y compris du meurtre lui-meme."
            }
          }
        }
      },
      // qtl pos=14 — inaccompli forme III "ne les combattez pas"
      {
        word_key: "qtl", position: 14, sense_chosen: "combattre",
        analysis_axes: {
          sense_chosen: "combattre",
          concept_chosen: "Meurtre/Combat",
          concepts: {
            "Meurtre/Combat": {
              status: "retenu",
              senses: ["tuer", "mettre a mort", "combattre", "lutter", "oter la vie", "faire mourir"],
              proof_ctx: "Le verbe tuqatiluhum est un inaccompli 2MP forme III de la racine q-t-l avec pronom suffixe 3MP, precede de la negation la. Le Lane's donne : combattre, lutter mutuellement, faire la guerre, s'engager dans un combat reciproque. La forme III (mufa'ala) marque la reciprocite — combattre mutuellement, pas tuer unilateralement. La negation la + inaccompli forme une interdiction : ne les combattez pas. L'interdiction est spatiale — ne les combattez pas PRES DE la Mosquee sacree. La forme III contraste avec la forme I utilisee ailleurs dans le verset : combattre (forme III, reciproque) vs tuer (forme I, unilateral). Le verset alterne entre les deux formes pour distinguer les types d'action.",
              axe1_verset: "Le verbe tuqatiluhum introduit l'exception de la Mosquee sacree. Le champ lexical (Mosquee sacree, combattre, jusqu'a ce que) montre que le combat est interdit dans un lieu precis tant que l'ennemi ne l'initie pas. L'interdiction de combattre pres de la Mosquee sacree respecte l'inviolabilite du lieu — le haram est un espace protege ou la violence est interdite. La condition « hatta yuqatilukum fihi » (jusqu'a ce qu'ils vous y combattent) est la seule exception qui leve l'interdiction. Le verset montre que meme en temps de guerre, certains lieux sont proteges.",
              axe2_voisins: "Le verset 2:190 utilisait la forme III (qatilu = combattez) pour l'autorisation generale du combat. Le verset 2:191 utilise la meme forme III (tuqatiluhum = ne les combattez pas) pour l'interdiction locale. La sequence montre la precision de la legislation coranique : le combat est autorise en general (2:190) mais interdit pres de la Mosquee sacree (2:191), sauf si l'ennemi attaque en premier. Les regles ne sont pas contradictoires mais complementaires — elles affinent le cadre d'action.",
              axe3_sourate: "La sourate al-Baqarah utilise la forme III de q-t-l a de multiples reprises dans cette section (2:190, 191, 193, 216, 244, 246). Chaque occurrence pose une regle ou une condition du combat. La forme III est le terme technique du combat mutuel — elle designe l'engagement reciproque entre deux camps. L'interdiction tuqatiluhum pres de la Mosquee sacree montre que la sourate distingue les lieux sacres des lieux profanes — meme dans la guerre.",
              axe4_coherence: "Le Coran mentionne l'inviolabilite du Masjid al-Haram dans de nombreux versets. En 2:217, le combat dans le mois sacre est « un grand peche ». En 5:2, « ne violez pas les rites sacres de Dieu, ni le mois sacre, ni les offrandes ». En 9:28, « les associateurs ne s'approcheront plus du Masjid al-Haram ». Le Coran protege la Mosquee sacree de la violence — le verset 2:191 s'inscrit dans cette protection en interdisant le combat a proximite, sauf en cas de legitime defense sur place.",
              axe5_frequence: "Pour la mission du khalifa, la protection des lieux sacres est une obligation. Le khalifa ne combat pas partout de la meme maniere — les lieux sacres imposent des regles specifiques. L'interdiction de combattre pres de la Mosquee sacree montre que la mission du khalifa n'est pas la guerre totale mais la justice mesuree. Meme en defendant la verite, le khalifa respecte les limites posees par Dieu. La moderation dans le combat est un signe de la vraie piete."
            }
          }
        }
      },
      // sjd pos=16 — nom defini "la Mosquee"
      {
        word_key: "sjd", position: 16, sense_chosen: "lieu de prosternation",
        analysis_axes: {
          sense_chosen: "lieu de prosternation",
          concept_chosen: "Prosternation/Adoration",
          concepts: {
            "Prosternation/Adoration": {
              status: "retenu",
              senses: ["se prosterner", "s'incliner", "adorer", "lieu de prosternation", "mosquee", "soumission physique"],
              proof_ctx: "Le nom al-masjidi est un nom defini masculin singulier de la racine s-j-d, de la forme maf'il (nom de lieu). Le Lane's donne : se prosterner, s'incliner jusqu'a terre, poser le front au sol, adorer par la prosternation, se soumettre physiquement. Le masjid est le lieu ou l'on fait le sujud — la prosternation face contre terre. Le sujud est l'acte physique ultime de soumission — le corps entier s'abaisse, le front touche le sol, la personne est dans la position la plus basse possible devant Dieu. Le masjid est l'espace consacre a cet acte. L'article al- definit la Mosquee comme LA mosquee connue — le Masjid al-Haram de La Mecque. Le nom de lieu (masjid) tire sa signification de l'acte qui s'y pratique — c'est par la prosternation que le lieu est defini.",
              axe1_verset: "Le mot al-masjidi est le lieu protege ou le combat est interdit. Le champ lexical (combattre, sacree, jusqu'a ce que, retribution) montre que la Mosquee est un espace d'exception dans les regles du combat. Le verset juxtapose la violence (tuer, combattre) et le sacre (Mosquee sacree) pour montrer que meme la guerre a des limites. Le lieu de prosternation est par definition un lieu de paix — on ne combat pas la ou l'on se prosterne. L'interdiction de combattre pres de la Mosquee sacree protege la fonction premiere du lieu : la prosternation et l'adoration.",
              axe2_voisins: "Le verset 2:187 mentionnait les nuits passees dans les mosquees (i'tikaf). Le verset 2:191 protege la Mosquee sacree de la violence. Le verset 2:196 mentionnera le pelerinage au Masjid al-Haram. La sequence montre que la sourate al-Baqarah construit autour du Masjid al-Haram un ensemble de regles — le culte (2:187), la protection (2:191), le pelerinage (2:196). Le Masjid al-Haram est le centre physique et spirituel de la legislation coranique dans cette sourate.",
              axe3_sourate: "La racine s-j-d est tres frequente dans la sourate al-Baqarah. En 2:34, « prosternez-vous devant Adam ». En 2:58, « entrez par la porte en vous prosternant ». En 2:125, « purifiez Ma Maison pour ceux qui tournent, qui y sejournent, qui s'inclinent et se prosternent ». En 2:144, la qibla est orientee vers le Masjid al-Haram. En 2:191, le Masjid al-Haram est protege du combat. La sourate lie la prosternation a la soumission, et le Masjid al-Haram est le centre physique de cette soumission.",
              axe4_coherence: "La racine s-j-d apparait environ 92 fois dans le Coran. En 17:1, « du Masjid al-Haram au Masjid al-Aqsa ». En 22:40, « si Dieu ne repoussait pas les gens les uns par les autres, des ermitages, des eglises, des synagogues et des mosquees ou le nom de Dieu est beaucoup invoque seraient detruits ». Le Coran protege les lieux de culte — le verset 2:191 s'inscrit dans cette protection en interdisant le combat pres du Masjid al-Haram. La prosternation est un acte sacre qui sanctifie le lieu.",
              axe5_frequence: "Pour la mission du khalifa, le lieu de prosternation est le coeur de la mission spirituelle. Le khalifa ne se prosterne pas seulement dans les mosquees — mais la mosquee est le symbole de la soumission a Dieu. Proteger la Mosquee sacree du combat montre que la mission du khalifa distingue le spirituel du militaire — meme en guerre, les lieux de culte sont preserves. La prosternation rappelle au khalifa sa position devant Dieu : humble, soumis, conscient de ses limites."
            }
          }
        }
      },
      // hrm pos=17 — adjectif defini "sacree"
      {
        word_key: "hrm", position: 17, sense_chosen: "sacre/inviolable",
        analysis_axes: {
          sense_chosen: "sacre/inviolable",
          concept_chosen: "Interdiction/Sacr\u00e9",
          concepts: {
            "Interdiction/Sacr\u00e9": {
              status: "retenu",
              senses: ["interdit", "sacre", "inviolable", "protege", "mis hors d'atteinte", "illicite", "ce qu'on ne peut pas toucher"],
              proof_ctx: "L'adjectif al-harami est un adjectif defini de la racine h-r-m. Le Lane's donne : interdit, sacre, inviolable, protege, mis hors d'atteinte, illicite, ce qu'on ne peut pas toucher ou violer. Le haram est ce qui est place sous protection divine — toucher au haram est une transgression. Le sens premier est l'interdiction — quelque chose est rendu inaccessible, mis hors d'atteinte, protege contre toute violation. Le sacre est l'aspect positif de l'interdiction — ce qui est sacre est interdit a la violation parce qu'il a une valeur superieure. Le Masjid al-Haram est le lieu de prosternation inviolable — sa sacralite interdit la violence en son sein. L'article al- definit le haram comme LE sacre connu — l'enceinte de La Mecque et de la Kaaba.",
              axe1_verset: "Le mot al-harami qualifie la Mosquee en la rendant inviolable. Le champ lexical (combattre, Mosquee, jusqu'a ce que) montre que la sacralite du lieu est la raison de l'interdiction du combat. Le haram n'est pas une qualite abstraite — c'est une interdiction concrete : on ne combat pas dans l'espace sacre. Le verset juxtapose la violence (tuer, combattre) et le sacre (haram) pour montrer leur incompatibilite. La condition « jusqu'a ce qu'ils vous y combattent » montre que seule la violation du haram par l'ennemi peut lever l'interdiction — la sacralite est la regle, le combat l'exception.",
              axe2_voisins: "Le verset 2:189 parlait des ahilla (croissants de lune) et du hajj — le contexte du sacre. Le verset 2:190 posait le cadre du combat. Le verset 2:191 lie les deux : le combat est autorise mais le sacre est protege. La sequence montre que la legislation coranique ne separe pas le spirituel du legal — les regles du combat integrent les regles du sacre. Le verset 2:194 developpera cette idee : « le mois sacre pour le mois sacre, les choses sacrees sont soumises a la reciprocite ».",
              axe3_sourate: "La racine h-r-m apparait frequemment dans la sourate al-Baqarah. En 2:85, « vous vous expulsez mutuellement de vos demeures ». En 2:173, « Il vous a seulement interdit (harrama) la bete morte, le sang ». En 2:194, « le mois sacre (al-haram) pour le mois sacre ». En 2:196, le hajj au Masjid al-Haram. La sourate utilise h-r-m pour l'interdiction alimentaire, l'interdiction temporelle (mois sacre) et l'interdiction spatiale (Mosquee sacree). Le haram est un concept multidimensionnel qui structure la vie du croyant.",
              axe4_coherence: "La racine h-r-m apparait environ 83 fois dans le Coran. En 5:1, « ne rendez pas licite les rites sacres de Dieu ». En 5:2, « ne violez pas les choses sacrees de Dieu ». En 9:36, « quatre d'entre eux sont sacres ». Le Coran construit un systeme de sacralite qui protege des lieux (Masjid al-Haram), des temps (mois sacres) et des actes (rites du pelerinage). Le verset 2:191 applique cette sacralite au contexte du combat — meme la guerre respecte le sacre.",
              axe5_frequence: "Pour la mission du khalifa, le sacre est la limite ultime de l'action. Le khalifa combat pour la justice mais il ne viole pas le sacre. Le Masjid al-Haram est le symbole de cette limite — meme en guerre, certains espaces sont inviolables. La mission du khalifa inclut la protection du sacre : non seulement il ne viole pas les lieux sacres, mais il les defend contre ceux qui voudraient les violer. Le sacre est le cadre qui empeche le combat de devenir barbarie."
            }
          }
        }
      },
      // qtl pos=19 — inaccompli forme III "ils vous combattent" (condition hatta)
      {
        word_key: "qtl", position: 19, sense_chosen: "combattre",
        analysis_axes: {
          sense_chosen: "combattre",
          concept_chosen: "Meurtre/Combat",
          concepts: {
            "Meurtre/Combat": {
              status: "retenu",
              senses: ["tuer", "mettre a mort", "combattre", "lutter", "oter la vie", "faire mourir"],
              proof_ctx: "Le verbe yuqatilukum est un inaccompli 3MP forme III de la racine q-t-l avec pronom suffixe 2MP, dans une proposition introduite par hatta (jusqu'a ce que). Le Lane's donne : combattre, lutter mutuellement, s'engager dans un combat reciproque. La forme III marque la reciprocite du combat. L'inaccompli apres hatta (jusqu'a ce que) exprime une eventualite future — le combat n'a pas encore eu lieu mais pourrait se produire. La condition pose la limite temporelle de l'interdiction : ne les combattez pas pres de la Mosquee sacree JUSQU'A CE QU'ILS vous y combattent. L'initiative de la violence doit venir de l'ennemi, pas des croyants.",
              axe1_verset: "Le verbe yuqatilukum pose la condition qui leve l'interdiction de combattre pres de la Mosquee sacree. Le champ lexical (combattre, Mosquee sacree, jusqu'a ce que) montre que l'initiative de l'ennemi est le seul facteur qui autorise le combat dans l'espace sacre. Le pronom fihi (dans ce lieu) ancre la condition dans l'espace sacre — c'est specifiquement dans la Mosquee sacree que l'ennemi doit attaquer pour lever l'interdiction. Le verset pose une regle de proportionnalite : si l'ennemi viole le sacre en premier, la reponse est autorisee dans le meme espace.",
              axe2_voisins: "Le verset 2:190 posait le principe de reciprocite (combattez ceux qui vous combattent). Le verset 2:191 applique ce principe a l'espace sacre : combattez-les dans la Mosquee sacree SEULEMENT s'ils y combattent d'abord. La reciprocite est le fil conducteur de toute la section — chaque action autorisee est une reponse a une action de l'ennemi. Le verset 2:194 generalisera ce principe : « quiconque vous agresse, agressez-le de la meme maniere ».",
              axe3_sourate: "La forme III de q-t-l avec pronom suffixe (yuqatilukum) est utilisee a travers la section de combat de la sourate (2:190-193). Chaque occurrence definit une condition ou une regle. En 2:190, ceux qui vous combattent sont les cibles legales. En 2:191, ils doivent combattre dans la Mosquee sacree pour que la reponse y soit autorisee. La sourate construit un systeme de conditions cumulatives qui limitent le droit de combattre.",
              axe4_coherence: "Le Coran mentionne le combat dans les lieux sacres avec une extreme prudence. En 2:217, le combat dans le mois sacre est « un grand peche, mais en faire sortir les gens (du Masjid al-Haram) est plus grave ». Le Coran reconnait la tension entre l'inviolabilite du sacre et la necessite du combat defensif — il la resout par la condition : le combat dans le sacre n'est autorise que si l'ennemi l'initie. La sacralite est la regle, le combat defensif l'exception necessaire.",
              axe5_frequence: "Pour la mission du khalifa, attendre que l'ennemi attaque en premier est un signe de maitrise et de justice. Le khalifa ne provoque pas la violence — il la subit et y repond. La condition « jusqu'a ce qu'ils vous combattent » montre que la patience est une vertu militaire — le khalifa attend, se retient, ne viole pas le sacre, et ne combat que quand l'ennemi lui-meme viole les regles. Cette retenue est la marque de la mission divine du khalifa."
            }
          }
        }
      },
      // qtl pos=22 — accompli forme III "s'ils vous combattent"
      {
        word_key: "qtl", position: 22, sense_chosen: "combattre",
        analysis_axes: {
          sense_chosen: "combattre",
          concept_chosen: "Meurtre/Combat",
          concepts: {
            "Meurtre/Combat": {
              status: "retenu",
              senses: ["tuer", "mettre a mort", "combattre", "lutter", "oter la vie", "faire mourir"],
              proof_ctx: "Le verbe qatalukum est un accompli 3MP forme III de la racine q-t-l avec pronom suffixe 2MP, dans une proposition conditionnelle introduite par fa-in (et si). Le Lane's donne : combattre, lutter mutuellement, s'engager dans un combat reciproque. L'accompli dans une proposition conditionnelle introduite par in exprime une hypothese — si l'evenement se produit. La forme III marque la reciprocite du combat. Ce verbe transforme l'eventualite du verbe precedent (yuqatilukum, inaccompli = s'ils vous combattent un jour) en condition concrete (qatalukum, accompli = s'ils vous ont effectivement combattus). Le passage de l'inaccompli a l'accompli montre la progression : l'eventualite se realise.",
              axe1_verset: "Le verbe qatalukum est la condition qui declenche la reponse finale : « s'ils vous combattent, tuez-les donc ». Le champ lexical (combattre, tuer, retribution) montre que cette condition est la derniere etape de l'escalade reglementee. Le verset a pose trois conditions cumulatives : (1) ils sont des agresseurs (2:190), (2) ils attaquent pres de la Mosquee sacree, (3) le combat a effectivement lieu (qatalukum). Seulement alors la reponse fatale (uqtuluhum) est autorisee. L'accompli dans la condition marque la certitude — l'agression s'est produite, c'est un fait.",
              axe2_voisins: "Le verset 2:190 autorisait le combat defensif. Le verset 2:191 detaille les conditions d'escalade : rencontrer → chasser → ne pas combattre dans le sacre → sauf s'ils combattent en premier → alors les tuer. La progression est logique et restrictive — chaque etape ajoute une condition avant d'autoriser l'etape suivante. Le verset 2:192 completera le schema en ajoutant la desescalade : si l'ennemi arrete, arretez aussi. L'accompli qatalukum est le verrou final avant la reponse letale.",
              axe3_sourate: "La sourate al-Baqarah utilise la racine q-t-l dans de multiples formes grammaticales pour construire un code du combat complet. La forme III a l'accompli (qatalukum) marque l'agression realisee — le combat a eu lieu, l'ennemi a viole le sacre. Ce passage de l'eventualite a la realite justifie la reponse letale qui suit (fa-qtuluhum). La sourate montre que la reponse letale n'est autorisee qu'apres la violation effective — pas sur une simple menace.",
              axe4_coherence: "Le Coran conditionne systematiquement la reponse letale a l'agression effective. En 9:13, « ne combattrez-vous pas des gens qui ont viole leurs serments et resolu de chasser le Messager et qui ont commence les premiers contre vous ? ». Le Coran insiste sur le fait que les croyants n'ont pas initie les hostilites — ils repondent a une agression reelle. L'accompli qatalukum dans 2:191 s'inscrit dans cette logique : l'ennemi a agi, maintenant la reponse est autorisee.",
              axe5_frequence: "Pour la mission du khalifa, la reponse proportionnee a l'agression effective est le fondement de la justice militaire. Le khalifa ne tue pas sur une hypothese mais sur un fait : l'ennemi a combattu (accompli), donc la reponse est justifiee. Cette rigueur dans la condition empeche les guerres preventives et les violences anticipees — le khalifa attend la preuve de l'agression avant de repondre. La justice du khalifa est reactive, pas proactive."
            }
          }
        }
      },
      // qtl pos=24 — imperatif forme I "tuez-les" (2eme occurrence)
      {
        word_key: "qtl", position: 24, sense_chosen: "tuer",
        analysis_axes: {
          sense_chosen: "tuer",
          concept_chosen: "Meurtre/Combat",
          concepts: {
            "Meurtre/Combat": {
              status: "retenu",
              senses: ["tuer", "mettre a mort", "combattre", "lutter", "oter la vie", "faire mourir"],
              proof_ctx: "Le verbe fa-qtuluhum est un imperatif 2MP forme I de la racine q-t-l avec pronom suffixe 3MP, precede de fa (consequence logique = alors, donc). Le Lane's donne : tuer, mettre a mort, oter la vie. La forme I est unilaterale — tuer, pas combattre. Le fa (alors) marque la consequence directe de la condition precedente : SI ils vous combattent (qatalukum), ALORS tuez-les (fa-qtuluhum). C'est le meme imperatif qu'en position 1 (uqtuluhum) mais dans un contexte different — ici c'est la reponse a une agression specifique dans la Mosquee sacree, pas la regle generale. La sequence condition-consequence est complete : si + accompli → fa + imperatif.",
              axe1_verset: "Le verbe fa-qtuluhum est la reponse autorisee a la violation du sacre par l'ennemi. Le champ lexical (combattre, Mosquee sacree, s'ils vous combattent, alors) montre que ce deuxieme imperatif est plus restrictif que le premier (uqtuluhum, position 1). Le premier est general (tuez-les ou que vous les rencontriez), le second est specifique (tuez-les s'ils vous combattent dans la Mosquee sacree). La repetition de l'imperatif forme I dans deux contextes differents montre que la forme I est reservee a la reponse directe a l'agression — elle est la reponse ultime quand toutes les conditions sont remplies.",
              axe2_voisins: "Le verset 2:191 construit une escalade : tuez-les (general) → ne combattez pas pres de la Mosquee → sauf s'ils combattent → alors tuez-les (specifique). La sequence est un modele de legislation progressive — chaque regle est affinee par la suivante. Le verset 2:192 introduira la desescalade : « s'ils cessent, Dieu est pardonneur et misericordieux ». Le fa-qtuluhum est le point culminant de l'escalade avant la possibilite de paix. La legislation complete est : combat defensif → escalade conditionnelle → reponse letale → desescalade si l'ennemi cesse.",
              axe3_sourate: "La sourate al-Baqarah utilise la racine q-t-l a la forme I imperative deux fois dans le meme verset (positions 1 et 24). La repetition montre l'insistance du verset sur la reponse letale comme consequence des conditions remplies. La premiere occurrence est la regle generale du combat defensif, la seconde est la regle specifique de la Mosquee sacree. La sourate construit un droit de la guerre complet ou chaque situation a ses propres regles.",
              axe4_coherence: "Le Coran conditionne toujours la reponse letale a des conditions strictes. En 2:191, les conditions sont : (1) etre des agresseurs (2:190), (2) avoir expulse les croyants, (3) commettre la fitna, (4) attaquer dans la Mosquee sacree. La reponse letale n'est autorisee qu'apres cette accumulation de conditions. Le Coran ne donne pas un permis de tuer generalise — il pose des conditions si strictes que la reponse letale est toujours un dernier recours. La coherence coranique est dans la restriction, pas dans la permission.",
              axe5_frequence: "Pour la mission du khalifa, la reponse letale est le dernier recours quand toutes les autres options ont echoue. Le khalifa ne tue pas par choix mais par necessite defensive — quand l'ennemi viole le sacre et attaque dans le lieu de prosternation, la reponse est la seule option restante. Le fa (alors, donc) marque la logique de la consequence — ce n'est pas de la vengeance mais de la justice causale. Le khalifa agit par devoir, pas par desir."
            }
          }
        }
      },
      // jzy pos=26 — nom "retribution"
      {
        word_key: "jzy", position: 26, sense_chosen: "retribution",
        analysis_axes: {
          sense_chosen: "retribution",
          concept_chosen: "R\u00e9tribution/Justice",
          concepts: {
            "R\u00e9tribution/Justice": {
              status: "retenu",
              senses: ["retribution", "recompense", "compensation", "ce qui est du en retour", "rendre la pareille", "payer"],
              proof_ctx: "Le nom jaza'u est un nom nominatif de la racine j-z-y. Le Lane's donne : retribution, recompense, compensation, ce qu'on rend en echange d'un acte, paiement, ce qui est du en retour, rendre la pareille. Le jaza' est neutre — il peut etre positif (recompense pour le bien) ou negatif (consequence pour le mal). Le concept est celui d'un echange proportionnel — chaque acte recoit son equivalent en retour. La retribution est un acte exterieur et directionnel — elle sort de celui qui retribue et atteint celui qui est retribue. Elle est liee a la justice car elle rend a chacun ce qui lui est du. Dans le verset, la retribution est la consequence du rejet et de l'agression — les rejetants recoivent la retribution de leurs actes sous forme de combat defensif et de mort.",
              axe1_verset: "Le mot jaza'u conclut le verset en qualifiant tout ce qui precede (tuer, chasser, combattre) comme la retribution des rejetants. Le champ lexical (tuer, chasser, fitna, meurtre, combattre, rejetants) montre que la retribution est la consequence logique des actes des agresseurs. Le verset ne presente pas le combat comme une agression mais comme une retribution — les croyants ne font que rendre aux agresseurs ce qu'ils ont fait. La construction « kadhalika jaza'u al-kafirina » (telle est la retribution des rejetants) generalise — ce n'est pas un cas particulier mais une regle universelle.",
              axe2_voisins: "Le verset 2:190 posait le cadre du combat. Le verset 2:191 conclut par la retribution. La sequence montre que le combat defensif n'est pas une vengeance mais une retribution — chaque acte recoit sa consequence proportionnelle. Le verset 2:192 ajoutera que si l'ennemi cesse, la retribution cesse aussi (« Dieu est pardonneur »). La retribution n'est pas definitive — elle peut etre suspendue par le pardon si l'agression cesse. La legislation est a la fois ferme (retribution pour les agresseurs) et misericordieuse (pardon pour ceux qui cessent).",
              axe3_sourate: "La racine j-z-y apparait dans la sourate al-Baqarah en plusieurs endroits. En 2:123, « aucune ame ne sera retribuee pour une autre ». En 2:191, la retribution des rejetants. En 2:196, la retribution de la violation du pelerinage. La sourate utilise j-z-y dans les deux sens — la retribution positive et negative — pour montrer que chaque acte a sa consequence. Le jaza' est la loi de causalite morale du Coran.",
              axe4_coherence: "La racine j-z-y apparait environ 117 fois dans le Coran. En 3:145, « Nous retribuerons les reconnaissants ». En 6:160, « celui qui vient avec un bien recoit dix fois autant ». En 9:95, « Dieu les retribuera pour ce qu'ils ont acquis ». En 76:12, « Il les retribue pour leur patience ». Le Coran presente la retribution comme une loi universelle — chaque acte est retribue en proportion, que ce soit en bien ou en mal. Le verset 2:191 applique cette loi aux rejetants agresseurs.",
              axe5_frequence: "Pour la mission du khalifa, la retribution est le mecanisme de justice que le khalifa met en oeuvre. Le khalifa ne punit pas par plaisir — il applique la retribution comme une loi naturelle. Les agresseurs recoivent la consequence de leurs actes, pas une punition arbitraire. La retribution est proportionnelle : qui combat est combattu, qui tue est tue, qui chasse est chasse. Le khalifa est l'instrument de cette justice proportionnelle — il retribue chaque acte par son equivalent."
            }
          }
        }
      },
      // kfr pos=27 — participe actif pluriel "les rejetants"
      {
        word_key: "kfr", position: 27, sense_chosen: "rejetants",
        analysis_axes: {
          sense_chosen: "rejetants",
          concept_chosen: "Rejet/Ingratitude",
          concepts: {
            "Rejet/Ingratitude": {
              status: "retenu",
              senses: ["rejeter", "nier", "etre ingrat", "refuser la verite", "denier les bienfaits", "recouvrir"],
              proof_ctx: "Le nom al-kafirina est un participe actif pluriel defini de la racine k-f-r. Le Lane's donne : couvrir, cacher, dissimuler, rejeter, nier, etre ingrat, recouvrir la verite, recouvrir les bienfaits par l'ingratitude. Le kafir est celui qui recouvre — il met un couvercle sur la verite, il la cache, il la rejete. Le participe actif marque une action continue et volontaire — le rejetant est celui qui rejette activement et de maniere habituelle, pas quelqu'un qui doute ponctuellement. L'article al- et le pluriel designent une categorie connue : LES rejetants, ceux qui par leur rejet actif ont merite la retribution. Le rejet est un acte exterieur et volontaire — il sort de celui qui rejette et concerne la verite qu'il refuse d'accepter.",
              axe1_verset: "Le mot al-kafirina ferme le verset en identifiant ceux qui recoivent la retribution. Le champ lexical (tuer, chasser, fitna, meurtre, combattre, retribution) montre que les rejetants sont les agresseurs du verset — ceux qui ont chasse les croyants, commis la fitna et viole le sacre. Le participe actif montre que leur rejet est une action permanente — ils ne rejettent pas par accident mais par conviction. La retribution est donc proportionnee a un acte delibere et continu. Le verset ne parle pas de tous les non-croyants mais specifiquement de ceux qui rejettent ET agressent.",
              axe2_voisins: "Le verset 2:190 parlait de « ceux qui vous combattent ». Le verset 2:191 les identifie comme « les rejetants ». La sequence montre que les agresseurs sont des rejetants — leur agression est motivee par leur rejet de la verite. Le verset 2:192 ajoutera la possibilite de pardon si l'ennemi cesse — le rejet n'est pas irremediable. Le verset 2:193 completera le cadre en definissant le but du combat : la fin de la fitna, pas l'extermination des rejetants.",
              axe3_sourate: "La racine k-f-r est l'une des plus frequentes dans la sourate al-Baqarah. En 2:6, « ceux qui rejettent (kafaruh), que tu les avertisses ou non ». En 2:19, « Dieu cerne les rejetants ». En 2:24, « le feu dont le combustible est les hommes et les pierres, prepare pour les rejetants ». En 2:161, « ceux qui rejettent et meurent dans le rejet ». En 2:191, la retribution des rejetants est le combat defensif. La sourate construit un portrait des rejetants a travers de multiples angles — leur aveuglement, leur chatiment, leur retribution.",
              axe4_coherence: "La racine k-f-r apparait environ 525 fois dans le Coran. Le Coran presente le kufr comme l'acte de recouvrir la verite — pas simplement l'ignorance mais le rejet actif et delibere. En 2:256, « pas de contrainte dans la religion » — le rejet est un choix libre mais qui a des consequences. En 109:6, « a vous votre religion, a moi la mienne ». Le Coran distingue le rejet pacifique (qui est un droit) du rejet agressif (qui merite la retribution). Le verset 2:191 parle specifiquement des rejetants agresseurs, pas de tous les rejetants.",
              axe5_frequence: "Pour la mission du khalifa, les rejetants agresseurs sont l'obstacle principal a la mission de justice. Le khalifa ne persecute pas les rejetants pacifiques — le Coran interdit la contrainte en religion (2:256). Mais les rejetants qui agressent, chassent et commettent la fitna sont les ennemis de l'ordre social juste que le khalifa doit etablir. La retribution des rejetants agresseurs est un acte de defense, pas de persecution — le khalifa protege la paix sociale contre ceux qui la detruisent par leur rejet violent."
            },
            "Couverture/Dissimulation": {
              status: "probable",
              senses: ["couvrir", "cacher", "dissimuler", "recouvrir", "mettre un voile sur", "enterrer"],
              proof_ctx: "Le sens de couverture est le sens premier et physique de la racine k-f-r — couvrir, recouvrir, cacher sous un voile. Le Lane's donne : le kafir au sens physique est le laboureur qui recouvre la graine de terre. Le kaffar est celui qui recouvre completement. De ce sens physique decoule le sens abstrait de rejet — celui qui rejette la verite la « recouvre », la cache, la dissimule. La distinction philosophique est que la couverture est un acte physique passif (poser un voile sur quelque chose), tandis que le rejet est un acte intellectuel actif (refuser volontairement la verite). Le contexte du verset est le combat contre des agresseurs — le participe actif al-kafirina designe des personnes qui agissent (rejettent), pas des personnes qui couvrent passivement. Le rejet actif est plus adapte que la couverture passive au contexte d'agression militaire."
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

  // Check if VWA already exists for this verse
  const { data: existingVwa } = await supabase
    .from('verse_word_analyses')
    .select('id')
    .eq('verse_id', data.verse_id)
    .limit(1);

  if (existingVwa && existingVwa.length > 0) {
    console.log(`  VWA deja existant pour verse_id=${data.verse_id} — SKIP`);
    return;
  }

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

  const verseIds = [198];
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
  console.log('=== PIPELINE SOURATE 2 — VERSET 191 ===\n');
  await processVerse(191);
  await syncWordMeanings();
  console.log('\n=== PIPELINE V191 TERMINEE ===');
}

main().catch(e => console.error('FATAL:', e));
