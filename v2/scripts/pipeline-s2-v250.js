const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

const verseData = {
  250: {
    verse_id: 257,
    analysis_id: 617,
    translation_arab: "wa-lamma barazuu li-jaluta wa-junudihi qaluu rabbana afrigh 'alayna sabran wa-thabbit aqdamana wa-nsurna 'ala l-qawmi l-kafirin",
    full_translation: "Et quand ils firent face à Goliath et à ses troupes, ils dirent : 'Notre Seigneur ! Répands sur nous l'endurance, affermis nos pas et donne-nous la victoire sur le peuple des mécréants.'",
    translation_explanation: `§DEMARCHE§
Le verset 2:250 est la prière des croyants au moment de faire face à Goliath — un moment de haute tension dramatique qui suit immédiatement le découragement de la majorité (v.249). Là où les faibles disaient "nous n'avons pas la force", les croyants répondent par une supplication tripartite d'une précision remarquable. La démarche traductive consiste à rendre chaque terme de cette prière dans sa plénitude sémantique.

Le verbe barazuu (racine brz) est rendu par "firent face" plutôt que "se montrèrent" ou "sortirent" car le sens militaire de baraza est précisément d'avancer en face-à-face, de se placer vis-à-vis de l'ennemi — c'est l'instant du début du combat. La préposition li (pour/devant) indique la direction du face-à-face : li-jaluta wa-junudihi = devant Goliath et ses troupes.

La supplication comprend trois demandes ordonnées selon une logique de combat : d'abord l'endurance intérieure (sabr), ensuite la stabilité physique (thabbit aqdamana), enfin la victoire finale (unsurna). Cet ordre est militairement et spirituellement cohérent : on ne peut pas tenir debout (aqdama) sans avoir d'abord la force intérieure (sabr), et on ne peut pas vaincre (nasr) sans d'abord tenir debout. La prière suit l'ordre naturel de la bataille.

Le verbe afrigh (racine frg, Form IV impératif) est rendu par "répands" plutôt que "verse" ou "accorde" car afrigh porte l'image d'un déversement abondant — le mot ghurfa (gorgée) du verset précédent partage la même image de contenance et d'écoulement. "Répandre l'endurance sur nous" capture à la fois la générosité de la demande et l'image physique du déversement de la grâce divine.

Le verbe thabbit (racine thbt, Form II impératif) est rendu par "affermis" — qui rend le sens de consolidation active que porte la Form II : non pas simplement "sois stable" mais "rends stable, consolide". Aqdama (pl. de qadam = pieds, pas) est traduit par "nos pas" plutôt que "nos pieds" car l'enjeu militaire est la stabilité dans le mouvement du combat, non l'anatomie.

Le verbe unsurna (racine nsr, Form I impératif) est rendu par "donne-nous la victoire" plutôt que "aide-nous" car dans le contexte militaire immédiat, nusrat désigne spécifiquement la victoire militaire, le secours efficace qui aboutit à la défaite de l'ennemi.
§JUSTIFICATION§
"Firent face" pour barazuu li : baraza en contexte militaire désigne l'action d'avancer face à l'ennemi, de se placer en position de combat frontal — Lane atteste ce sens (to come forth, to present oneself, to face the enemy). "Répands sur nous" pour afrigh 'alayna : la préposition 'ala (sur) associée à afrigh (verser sur) crée l'image d'un déversement céleste — la grâce tombe d'en haut, comme une pluie d'endurance. "L'endurance" pour sabran : sabr (accusatif, objet de afrigh) est traduit par endurance plutôt que patience car dans un contexte de combat imminent, sabr désigne la résistance active — tenir sous la pression — plutôt que la simple attente passive. "Affermis nos pas" pour thabbit aqdamana : thabbit (Form II = rendre ferme, consolider) + aqdamana (nos pas/pieds) = consolide notre position de combat, empêche notre recul. La Form II exprime une action causative : Allah rend nos pas fermes. "Donne-nous la victoire" pour unsurna : nsr en contexte militaire = victoire, secours décisif — non pas une simple aide marginale mais la victoire complète sur l'ennemi. "Les mécréants" pour al-kafirin : kfr = être ingrat, nier ; kafir = celui qui cache la vérité, nie les bienfaits divins ; traduit par "mécréants" qui est le terme consacré en français pour kafir.
§CRITIQUE§
La traduction de Hamidullah (1959) rend ce verset ainsi : "Et quand ils se présentèrent contre Goliath et ses troupes, ils dirent : 'Seigneur, répands sur nous la patience, raffermis nos pieds et donne-nous la victoire sur le peuple mécréant.'" Elle est globalement fidèle mais mérite quelques commentaires. Premièrement, "se présentèrent contre" pour barazuu li est correct mais un peu vague — "firent face à" rend mieux l'image militaire du face-à-face (baraza = avancer en vis-à-vis). Deuxièmement, "la patience" pour sabran est acceptable mais dans ce contexte de combat immédiat, "l'endurance" est préférable : il ne s'agit pas d'attendre avec patience mais de tenir sous la pression, de résister — une nuance active que sabr porte mieux dans le contexte de la bataille. Troisièmement, "raffermis nos pieds" pour thabbit aqdamana : "nos pieds" pour aqdama est littéralement correct mais "nos pas" est légèrement préférable car aqdama dans le contexte militaire désigne la position et le mouvement des combattants (tenir sa position, ne pas reculer) plus que l'anatomie des pieds. Quatrièmement, "le peuple mécréant" pour al-qawmi al-kafirin est correct mais "le peuple des mécréants" (avec article défini sur kafirin) rend mieux la structure arabe qui présente deux groupes nominaux distincts (al-qawm + al-kafirin). Notre traduction conserve ces nuances en restant dans un registre littéraire naturel.`,
    segments: [
      { position: 1, text_arab: "وَلَمَّا", translation: "Et quand", phonetic: "wa-lamma", grammar_type: "particle" },
      { position: 2, text_arab: "بَرَزُوا۟", translation: "ils firent face", phonetic: "barazuu", grammar_type: "verb", root_key: "brz" },
      { position: 3, text_arab: "لِجَالُوتَ", translation: "à Goliath", phonetic: "li-jaluta", grammar_type: "particle" },
      { position: 4, text_arab: "وَجُنُودِهِۦ", translation: "et à ses troupes", phonetic: "wa-junudihi", grammar_type: "noun", root_key: "jnd" },
      { position: 5, text_arab: "قَالُوا۟", translation: "ils dirent", phonetic: "qaluu", grammar_type: "verb" },
      { position: 6, text_arab: "رَبَّنَآ", translation: "Notre Seigneur !", phonetic: "rabbana", grammar_type: "particle" },
      { position: 7, text_arab: "أَفْرِغْ", translation: "répands", phonetic: "afrigh", grammar_type: "verb", root_key: "frg" },
      { position: 8, text_arab: "عَلَيْنَا", translation: "sur nous", phonetic: "'alayna", grammar_type: "particle" },
      { position: 9, text_arab: "صَبْرًا", translation: "l'endurance", phonetic: "sabran", grammar_type: "noun", root_key: "sbr" },
      { position: 10, text_arab: "وَثَبِّتْ", translation: "et affermis", phonetic: "wa-thabbit", grammar_type: "verb", root_key: "thbt" },
      { position: 11, text_arab: "أَقْدَامَنَا", translation: "nos pas", phonetic: "aqdamana", grammar_type: "noun", root_key: "qdm" },
      { position: 12, text_arab: "وَٱنصُرْنَا", translation: "et donne-nous la victoire", phonetic: "wa-nsurna", grammar_type: "verb", root_key: "nsr" },
      { position: 13, text_arab: "عَلَى", translation: "sur", phonetic: "'ala", grammar_type: "particle" },
      { position: 14, text_arab: "ٱلْقَوْمِ", translation: "le peuple de", phonetic: "al-qawmi", grammar_type: "noun", root_key: "qwm" },
      { position: 15, text_arab: "ٱلْكَـٰفِرِينَ", translation: "les mécréants", phonetic: "al-kafirin", grammar_type: "noun", root_key: "kfr" }
    ],
    vwa: [
      {
        word_key: "brz",
        position: 2,
        sense_chosen: "faire face, avancer en vis-à-vis de l'ennemi (face-à-face militaire)",
        analysis_axes: {
          sense_chosen: "faire face, avancer en vis-à-vis de l'ennemi (face-à-face militaire)",
          concept_chosen: "FaceAFace/CombatMilitaire",
          concepts: {
            "FaceAFace/CombatMilitaire": {
              status: "retenu",
              senses: ["se montrer, faire saillie (sens premier)", "avancer en face-à-face militaire", "baraza li = se placer devant, faire face à", "entrer dans l'espace visible et confrontationnel de l'ennemi"],
              proof_ctx: "Lane's Lexicon: b-r-z = to become apparent, to come forth, to emerge; baraza = he came out, he presented himself; baraza li-l-qital = he came out to fight, he faced the enemy in single combat or open battle. The military sense emphasizes the deliberate advance toward the adversary.",
              axe1_verset: "Dans ce verset, barazuu li-jaluta wa-junudihi (ils firent face à Goliath et ses troupes) est l'instant charnière du récit : après l'épreuve du fleuve, après le découragement des faibles, après l'encouragement des croyants convaincus, voici le moment du face-à-face réel. Baraza li exprime un avancement délibéré et courageux — on ne subit pas la confrontation, on se place intentionnellement en face de l'ennemi. C'est un acte de volonté.",
              axe2_voisins: "Barazuu (pos=2) est immédiatement suivi de la prière qaluu rabbana (pos=5-6) : le face-à-face physique avec l'ennemi déclenche le face-à-face spirituel avec Allah. Cette structure narrative — affronter l'ennemi puis se tourner vers Allah — est la séquence du croyant : l'action humaine précède la supplication, la supplication suit l'engagement. La prière n'est pas une fuite devant le combat mais une ressource dans le combat.",
              axe3_sourate: "La racine brz dans Al-Baqara est rare mais significative. L'idée de se montrer, de sortir de sa réserve pour affronter ce qui doit l'être, résonne avec la thématique du jihad développée aux versets 190-195 et 244-246. Les vrais croyants ne se cachent pas — ils avancent. Cette avancée courageuse (baraza) est la suite logique de leur traversée du fleuve (jawaza) : ils ont d'abord traversé l'épreuve, maintenant ils font face à l'ennemi.",
              axe4_coherence: "La cohérence entre baraza et la prière qui suit est théologiquement importante : les croyants ne font pas confiance à leur propre force pour vaincre (ils savent qu'ils sont peu nombreux), mais ils avancent quand même parce qu'ils ont confiance en Allah. Baraza est ainsi un acte de foi autant qu'un acte militaire : s'avancer face à une armée supérieure en se sachant soutenu par Allah. La prière n'est pas un signe de faiblesse mais de lucidité.",
              axe5_frequence: "La racine brz dans le Coran couvre plusieurs domaines : apparaître (v.14:21 les hommes se montrent devant Allah au Jugement), s'avancer en combat singulier (v.3:166 la rencontre des deux armées), se révéler (v.82:4 quand ce qui est dans les poitrines sera révélé). Le sens militaire de baraza est l'un des sens les plus attestés et les plus dramatiques de cette racine dans le corpus coranique."
            }
          }
        }
      },
      {
        word_key: "frg",
        position: 7,
        sense_chosen: "répandre, déverser en abondance (grâce divine versée d'en haut)",
        analysis_axes: {
          sense_chosen: "répandre, déverser en abondance (grâce divine versée d'en haut)",
          concept_chosen: "Deversement/GraceDivine",
          concepts: {
            "Deversement/GraceDivine": {
              status: "retenu",
              senses: ["vider, déverser (sens premier)", "répandre en abondance (Form IV afrigh)", "afrigh 'alayna = verse sur nous du haut", "déversement total d'une qualité spirituelle"],
              proof_ctx: "Lane's Lexicon: f-r-gh = to be empty, to become free; Form IV afrigh = to pour out, to pour over, to empty out (upon someone); afrigh 'alayna sabran = pour out upon us patience/endurance. The image is of a vessel emptied over someone — total, generous outpouring.",
              axe1_verset: "Dans ce verset, afrigh (Form IV impératif) + 'alayna (sur nous) + sabran (endurance) crée une image saisissante : Allah est invité à vider un vase d'endurance sur les croyants, à les inonder de patience comme d'une pluie. La Form IV (causative) insiste sur le rôle actif d'Allah : c'est Lui qui répand, c'est Lui qui donne. L'endurance n'est pas une qualité humaine que les croyants cultivent seuls — c'est un don divin qu'ils demandent.",
              axe2_voisins: "Afrigh 'alayna sabran est la première des trois demandes de la prière. Elle est la plus urgente car elle concerne l'état intérieur : avant de pouvoir tenir (thabbit aqdamana) et vaincre (unsurna), il faut d'abord être rempli d'endurance. L'ordre des trois demandes suit une logique de préparation intérieure avant l'action extérieure. Afrigh est ainsi la demande fondatrice des deux suivantes.",
              axe3_sourate: "La métaphore du déversement divin de qualités spirituelles est présente dans Al-Baqara sous différentes formes. Allah envoie la guidance (v.2), le secours (v.286), la paix. La prière de ces croyants en pleine bataille est l'une des plus belles supplications du Coran car elle est précise, urgente et tripartite. La racine frg dans ce sens de déversement de grâce est rare mais particulièrement expressive.",
              axe4_coherence: "La cohérence entre afrigh (répandre sur) et l'endurance demandée est que le sabr n'est pas simplement une attitude mentale mais une force qui s'éprouve physiquement dans le combat. Les croyants demandent à être littéralement couverts, inondés de cette force intérieure pour résister à la pression du combat. Cette image d'un déversement sur le corps est cohérente avec l'expérience du soldat qui a besoin d'une énergie qui le dépasse lui-même.",
              axe5_frequence: "La racine frg dans le Coran couvre à la fois l'idée de vide (farigh = libre, vidé, v.28:10 le coeur de la mère de Moïse qui se vida) et de déversement (afrigh, ici). Cette double polarité sémantique est intéressante : la Form IV crée un mouvement de transfert du vide (vider un contenant) vers un autre (remplir quelqu'un). La prière demande à Allah de Se vider de Son infinie endurance pour en remplir les croyants — image théologiquement audacieuse et poétiquement forte."
            }
          }
        }
      },
      {
        word_key: "sbr",
        position: 9,
        sense_chosen: "endurance, patience active sous la pression du combat",
        analysis_axes: {
          sense_chosen: "endurance, patience active sous la pression du combat",
          concept_chosen: "Endurance/PatientsCombat",
          concepts: {
            "Endurance/PatientsCombat": {
              status: "retenu",
              senses: ["retenir, contenir (sens premier)", "endurer, résister activement", "sabran (accusatif) = l'endurance comme don demandé", "qualité de résistance sous pression militaire et spirituelle"],
              proof_ctx: "Lane's Lexicon: s-b-r = to restrain, to hold back (oneself); sabara = he restrained himself, he bore patiently; sabr = the restraint of oneself under affliction; sabr in battle = steadfastness, courage to hold one's ground under assault.",
              axe1_verset: "Dans ce verset, sabran est l'objet de afrigh (répands l'endurance sur nous) — c'est le premier don demandé à Allah avant la bataille. Dans le contexte militaire immédiat, sabr désigne l'endurance au combat : la capacité de tenir sous les coups, de ne pas fuir, de résister à la peur. Ce n'est pas la patience tranquille de celui qui attend — c'est la résistance active de celui qui combat contre la tentation de fuir.",
              axe2_voisins: "Sabran (pos=9) est en écho direct avec al-sabirin de la fin du verset 249 (pos=63) : le v.249 se terminait par 'Allah est avec les patients', et le v.250 commence (après baraza) par la demande de cette même patience. Le verset 250 est ainsi la mise en oeuvre concrète de la leçon du verset 249 : les croyants demandent à recevoir la qualité (sabr) que le v.249 avait identifiée comme la condition de la présence divine.",
              axe3_sourate: "La racine sbr est centrale dans Al-Baqara comme dans tout le Coran. V.153 : 'Cherchez l'aide d'Allah par la patience et la prière.' V.155-157 : les patients qui disent 'nous sommes à Allah et à Lui nous retournons' sont ceux qui reçoivent la bénédiction divine. La patience est présentée dans toute la sourate comme la vertu qui transforme l'épreuve en victoire. Le v.250 concrétise cette promesse en la formulant comme une demande directe avant le combat.",
              axe4_coherence: "Le fait de demander l'endurance avant la force physique ou la victoire révèle la profondeur théologique de cette prière : les croyants savent que la victoire externe (nasr) n'est possible que si la victoire interne (sabr sur la peur, sur la tentation de fuir) est d'abord acquise. La cohérence de la prière est psychologiquement et spirituellement juste : sans endurance, même une armée forte peut s'effondrer au premier choc.",
              axe5_frequence: "Sabr et ses dérivés (sabirun, sabara, istabara, masabara) sont parmi les mots les plus fréquents du Coran avec environ 90 occurrences. La seule sourate Al-Baqara contient de nombreuses occurrences de cette racine (v.45, v.153, v.155, v.177, v.249, v.250, v.286). La fréquence exceptionnelle de sbr dans le Coran en fait l'une des vertus cardinales de l'islam — avec la prière (salat), la patience est la resource principale recommandée pour traverser les épreuves."
            }
          }
        }
      },
      {
        word_key: "thbt",
        position: 10,
        sense_chosen: "affermir, rendre ferme et stable (consolider la position de combat)",
        analysis_axes: {
          sense_chosen: "affermir, rendre ferme et stable (consolider la position de combat)",
          concept_chosen: "Fermete/StabilitePosition",
          concepts: {
            "Fermete/StabilitePosition": {
              status: "retenu",
              senses: ["être ferme, stable (Form I thabata)", "rendre ferme, consolider (Form II thabbit)", "thabbit aqdamana = affermis nos pas/consolide notre position", "stabilité physique et militaire dans le feu du combat"],
              proof_ctx: "Lane's Lexicon: th-b-t = to be firm, to be fixed, to be established; Form II thabata = to make firm, to fix, to stabilize; thabbit = make firm! (imperative Form II); thabbit aqdamana = make firm our feet/steps, i.e. do not let us retreat or slip. The Form II expresses causative action: Allah causes the firmness.",
              axe1_verset: "Dans ce verset, thabbit aqdamana est la deuxième des trois demandes. Après l'endurance intérieure (sabr), les croyants demandent la stabilité physique dans le combat : que leurs pas ne vacillent pas, que leurs pieds ne reculent pas. La Form II (thabbit = rendre ferme) est causative : c'est Allah qui doit provoquer cette fermeté — ce n'est pas la détermination humaine seule qui peut tenir sous la pression d'une armée supérieure.",
              axe2_voisins: "Thabbit aqdamana (pos=10-11) est la demande centrale de la prière, encadrée par sabran (endurance intérieure, pos=9) et unsurna (victoire, pos=12). Cette position médiane reflète son rôle de transition entre l'état intérieur et le résultat externe : l'endurance (sabr) permet de rester ferme (thabbit), et la fermeté permet la victoire (nasr). La prière des croyants exprime une vision cohérente de la causalité spirituelle du combat.",
              axe3_sourate: "La thématique de la fermeté dans la foi et dans le combat est présente dans Al-Baqara (v.250) et dans d'autres sourates traitant du combat (v.3:147 : 'Notre Seigneur, affermis nos pas'). La demande de thabbit aqdamana est proche de v.3:147 — ce qui suggère qu'il s'agit d'une formule de prière établie dans la tradition des croyants en guerre. La fermeté des pas est une métaphore militaire pour la résistance au recul et la persévérance dans le combat.",
              axe4_coherence: "La Form II (thabbit) est théologiquement significative : dans la prière coranique, c'est toujours Allah qui affermit, jamais l'homme seul. Cela est cohérent avec la vision coranique de la toute-puissance divine dans le combat — les croyants se battent, mais c'est Allah qui tient leurs pieds. Cette dépendance totale n'est pas une passivité mais une foi active : on avance (baraza), on combat, mais on reconnaît que la stabilité vient d'Allah.",
              axe5_frequence: "La racine thbt dans le Coran couvre la fermeté physique (pieds, position) et la fermeté spirituelle (foi, coeur). V.14:27 : Allah affermit les croyants par la parole ferme (al-qawl al-thabit) dans cette vie et dans l'au-delà. V.3:147 : la prière de thabbit aqdamana en contexte de combat. La Form II thabbit est spécifiquement une demande de renforcement actif par Allah — elle apparaît dans des contextes de grande vulnérabilité où seul Allah peut stabiliser ce qui menace de vaciller."
            }
          }
        }
      },
      {
        word_key: "qdm",
        position: 11,
        sense_chosen: "les pas, les pieds (position de combat, avance militaire)",
        analysis_axes: {
          sense_chosen: "les pas, les pieds (position de combat, avance militaire)",
          concept_chosen: "Pas/PositionCombat",
          concepts: {
            "Pas/PositionCombat": {
              status: "retenu",
              senses: ["précéder, être en avant (sens verbal)", "qadam = pied, pas (nom)", "aqdama = pieds, pas (pluriel)", "position avancée, stabilité dans le mouvement militaire"],
              proof_ctx: "Lane's Lexicon: q-d-m = to precede, to go before; qadam = the foot (of a person); aqdama (pl.) = feet; in military context: thabbit aqdamana = make firm our feet/steps = do not let us retreat, maintain our forward position. The root carries a sense of precedence and advance.",
              axe1_verset: "Dans ce verset, aqdamana (nos pas/pieds) est l'objet de thabbit (affermis). Dans le contexte du combat contre Goliath, la demande d'affermir les pas est une demande de maintenir la position, de ne pas reculer sous l'assaut ennemi. Les pieds (aqdama) sont la métonymie de la position du soldat : si ses pieds tiennent, il ne fuit pas. La demande est à la fois physique (ne pas trébucher) et militaire (ne pas battre en retraite).",
              axe2_voisins: "Aqdamana (pos=11) suit thabbit (pos=10) dans une construction verbe + objet qui exprime une demande précise et concrète. La combinaison thabbit + aqdamana est une formule-type de la prière de combat dans le Coran (v.3:147). Le pluriel aqdama (pieds) désigne l'ensemble du groupe combattant — c'est une demande collective de stabilité, non individuelle. Tous les croyants demandent ensemble que leurs positions soient tenues.",
              axe3_sourate: "La métaphore des pieds pour la position et la stabilité dans le combat est également présente en v.8:11 (Allah fit descendre l'eau du ciel pour vous purifier et affermir vos pas avec elle lors de la bataille de Badr). Cette récurrence confirme que thabbit aqdamana est une formule de prière militaire associée aux grandes batailles décisives. Al-Baqara pose ici la formule (v.250) que le v.8 d'Al-Anfal rappellera dans le contexte de Badr.",
              axe4_coherence: "La racine qdm (précéder, être en avant) donne à aqdama (pieds) une nuance de mouvement vers l'avant — les pieds sont les organes de l'avance, du mouvement progressif vers l'ennemi. Demander que ces pieds soient affermis (thabbit), c'est demander que l'élan en avant soit maintenu, que la progression vers l'ennemi ne soit pas brisée par la peur ou la fatigue. La cohérence entre la racine qdm (avancer) et thabbit (affermir) est parfaite.",
              axe5_frequence: "La racine qdm dans le Coran couvre plusieurs domaines : les pieds physiques (v.2:250, v.5:6 ablutions), la position avancée (v.57:12 la lumière marchant devant les croyants), la précédence temporelle (qadam = pied, mais aussi 'avant' dans certains contextes). Le pluriel aqdama est spécifiquement militaire dans la plupart de ses occurrences coraniques. La demande de stabiliser les pieds est une des rares images corporelles utilisées dans la prière coranique."
            }
          }
        }
      },
      {
        word_key: "nsr",
        position: 12,
        sense_chosen: "accorder la victoire, secourir de manière décisive",
        analysis_axes: {
          sense_chosen: "accorder la victoire, secourir de manière décisive",
          concept_chosen: "Victoire/SecoursDecisif",
          concepts: {
            "Victoire/SecoursDecisif": {
              status: "retenu",
              senses: ["aider, secourir (sens premier)", "donner la victoire (sens militaire fort)", "unsurna = aide-nous, donne-nous la victoire", "nasr = aide divine qui aboutit à la défaite de l'ennemi"],
              proof_ctx: "Lane's Lexicon: n-s-r = to aid, to assist, to render victorious; nasara = he aided, he gave victory; unsur = give victory! help! (imperative Form I); nasr Allah = the aid/victory of Allah. In military contexts, nasr designates decisive, effective aid that results in the enemy's defeat.",
              axe1_verset: "Dans ce verset, wa-nsurna 'ala l-qawmi l-kafirin (et donne-nous la victoire sur le peuple des mécréants) est la demande conclusive et la plus directement militaire des trois. Après l'endurance intérieure (sabr) et la stabilité physique (thabbit aqdamana), les croyants demandent le résultat : la victoire. Unsurna est un impératif à la première personne du pluriel — c'est une demande collective urgente dans un moment de vie ou de mort.",
              axe2_voisins: "La préposition 'ala (sur) après unsurna indique l'objet de la victoire : une victoire sur quelqu'un, contre quelqu'un — pas simplement une aide générale. Unsurna 'ala = fais que nous l'emportons sur. Cette construction est plus précise que simplement 'aide-nous' : elle désigne une victoire directionnelle contre un adversaire identifié (al-qawm al-kafirin). La demande est ciblée, militairement précise.",
              axe3_sourate: "La racine nsr est parmi les plus importantes d'Al-Baqara dans ses sections sur le combat et la foi. V.214 : 'quand viendra l'aide d'Allah (nasr Allah) ?' V.244 : combattez dans la voie d'Allah, Allah est Celui qui entend et qui sait. V.249 : la victoire de la petite troupe sur la grande bi-idhni llahi. V.250 : demande directe de nasr. La sourate construit une théologie de la victoire divine qui culmine dans la demande de ce verset.",
              axe4_coherence: "La cohérence entre les trois demandes (sabr, thabbit aqdamana, nasr) est celle d'une progression logique : endurance > stabilité > victoire. Allah est invité à intervenir à chaque étape, de l'état intérieur au résultat externe. Cette vision est cohérente avec la théologie coranique de l'agir humain et divin : les croyants agissent (baraza) mais c'est Allah qui donne l'endurance, la stabilité et la victoire. La dépendance vis-à-vis d'Allah est totale sans être passive.",
              axe5_frequence: "La racine nsr est l'une des plus fréquentes du Coran dans les contextes militaires et de foi (environ 160 occurrences). Nasr Allah (la victoire d'Allah) est une formule qui apparaît dans plusieurs sourates (v.61:13, v.110:1). Les dérivés nasir (allié, secoureur), mansur (aidé, victorieux), ansar (les Auxiliaires de Médine) font de nsr une racine à la fois théologique et historique fondamentale dans l'islam. La demande unsurna est ainsi une invocation de la puissance divine la plus centrale."
            }
          }
        }
      },
      {
        word_key: "kfr",
        position: 15,
        sense_chosen: "les mécréants, ceux qui nient et recouvrent la vérité",
        analysis_axes: {
          sense_chosen: "les mécréants, ceux qui nient et recouvrent la vérité",
          concept_chosen: "Mecreance/Ingratitude",
          concepts: {
            "Mecreance/Ingratitude": {
              status: "retenu",
              senses: ["être ingrat, nier les bienfaits (sens premier)", "recouvrir la vérité, cacher", "kafir = celui qui nie Allah et Ses signes", "al-kafirin = les mécréants (pl. déterminé)"],
              proof_ctx: "Lane's Lexicon: k-f-r = to cover, to conceal; kafara = he was ungrateful, he disbelieved, he covered (the truth); kafir = one who disbelieves, one who is ungrateful; al-kafirin (pl. def.) = the disbelievers, the ungrateful. The root implies active concealment of truth and ingratitude for divine gifts.",
              axe1_verset: "Dans ce verset, al-qawmi al-kafirin (le peuple des mécréants) est la cible de la demande de victoire. La qualification des adversaires comme mécréants (kafirin) n'est pas une simple étiquette ennemie mais une définition théologique : ils sont ceux qui recouvrent (k-f-r = couvrir) la vérité divine, qui nient les signes d'Allah. La victoire demandée sur eux est donc à la fois militaire et symbolique : une victoire de la vérité sur le recouvrement.",
              axe2_voisins: "Al-qawmi l-kafirin (pos=14-15) est précédé de 'ala (sur) qui marque la direction de la victoire. La structure unsurna 'ala l-qawmi l-kafirin est une formule complète : victoire + préposition directionnelle + objet désigné. L'identification des adversaires comme kafirin à la toute fin de la prière est théologiquement signifiante : la bataille n'est pas simplement entre deux armées mais entre deux orientations face à Allah — la foi et la mécréance.",
              axe3_sourate: "La racine kfr est l'une des racines les plus fréquentes d'Al-Baqara. La sourate distingue constamment entre al-ladhina amanuu (les croyants) et al-ladhina kafaruu (les mécréants). Cette opposition fondamentale structure l'ensemble de la sourate depuis les premiers versets (v.6 : ceux qui ont mécru, il leur est égal d'être avertis ou non). La prière du v.250 reprend cette dichotomie fondamentale de la sourate en la transposant sur le champ de bataille.",
              axe4_coherence: "La cohérence entre la demande de victoire (nsr) et la qualification des adversaires (al-kafirin) est que la victoire demandée est non seulement humainement souhaitable mais théologiquement justifiée : c'est une victoire de la foi sur l'incroyance. Les croyants ne demandent pas la victoire pour s'enrichir ou dominer — ils la demandent dans le cadre du combat pour Allah contre ceux qui nient Ses signes. Cette dimension théologique de la victoire est centrale dans la vision coranique du jihad.",
              axe5_frequence: "La racine kfr avec ses dérivés (kafir, kufr, kafara, yakfur, al-kafirin) est parmi les plus fréquentes du Coran. Dans Al-Baqara seule, elle apparaît des dizaines de fois. Le terme al-kafirin est presque toujours utilisé dans des contextes d'opposition et de victoire de la foi sur l'incroyance. La prière finale du v.250 contre al-kafirin est ainsi une formule d'une grande cohérence avec l'ensemble de la sourate qui oppose sans cesse foi et mécréance."
            }
          }
        }
      }
    ],
    daily_phrases: []
  }
};

async function main() {
  const data = verseData[250];
  const { error: veErr } = await supabase.from('verse_analyses').update({
    translation_arab: data.translation_arab,
    full_translation: data.full_translation,
    translation_explanation: data.translation_explanation,
    segments: data.segments
  }).eq('id', data.analysis_id);
  if (veErr) { console.error('verse_analyses ERROR:', veErr.message); return; }
  console.log('verse_analyses updated (V250)');

  for (const word of data.vwa) {
    const { error: vwaErr } = await supabase.from('verse_word_analyses').insert({
      verse_id: data.verse_id,
      word_key: word.word_key,
      position: word.position,
      sense_chosen: word.sense_chosen,
      analysis_axes: word.analysis_axes
    });
    if (vwaErr) console.error('VWA ERROR ' + word.word_key + ':', vwaErr.message);
    else console.log('  VWA OK: ' + word.word_key + ' pos=' + word.position);
  }
  console.log('DONE V250 TERMINE');
}
main().catch(console.error);
