const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

const verseData = {
  251: {
    verse_id: 258,
    analysis_id: 618,
    translation_arab: "fa-hazamuuhum bi-idhni llahi wa-qatala dawuudu jaluuta wa-aataahu llahu l-mulka wa-l-hikmata wa-'allamahu mimma yashaa'u wa-lawlaa daf'u llahi l-naasa ba'dahum bi-ba'din la-fasadati l-ardu wa-lakinna llaha dhuu fadlin 'ala l-'aalamiin",
    full_translation: "Et ils les mirent en déroute avec la permission de Dieu. David tua Goliath, et Dieu lui donna la royauté et la sagesse, et lui enseigna ce qu'Il voulut. Et si Dieu ne repoussait pas certains hommes par d'autres, la terre serait corrompue. Mais Dieu est plein de bienfaits envers les mondes.",
    translation_explanation: `§DEMARCHE§
Le verset 2:251 est la conclusion du récit de David et Goliath (versets 248-251). Il fonctionne en deux temps distincts : d'abord la narration du résultat militaire et de la récompense divine accordée à David, ensuite l'énoncé d'un principe théologique universel sur l'ordre du monde. La démarche traductive consiste à rendre chaque segment avec sa précision sémantique propre.

La première partie (fa-hazamuuhum bi-idhni llahi wa-qatala dawuudu jaluuta) est narrative et directe. Le verbe hazama (Form I) est rendu par "mirent en déroute" plutôt que "vainquirent" car hazama désigne spécifiquement la défaite qui provoque la fuite — l'ennemi est non seulement battu mais dispersé. Bi-idhni llahi ("avec la permission de Dieu") maintient la causalité divine comme cadre de la victoire humaine. Qatala Dawuudu Jaluuta est rendu littéralement : "David tua Goliath" — le nom propre arabe Dawuud est traduit par sa forme française David, Jaluut par Goliath.

La deuxième partie (wa-aataahu llahu l-mulka wa-l-hikmata wa-'allamahu mimma yashaa'u) décrit la récompense divine accordée à David. Aata (Form IV = donner, accorder) est rendu par "donna". Al-mulku (la royauté, la souveraineté) est traduit par "la royauté" plutôt que "le pouvoir" ou "le règne" car mulk désigne spécifiquement l'autorité souveraine de gouverner, la royauté institutionnelle. Al-hikmatu (la sagesse, la capacité de gouverner avec discernement) est traduit par "la sagesse" — terme français qui couvre à la fois la dimension philosophique et la capacité pratique de gouverner avec justesse. 'Allamahu (Form II = enseigner à) est rendu par "lui enseigna" — la Form II causative exprime qu'Allah fait acquérir le savoir, et non pas simplement qu'Il "savait avec lui". Mimma yashaa'u = "ce qu'Il voulut" (littéral), rendu ainsi pour maintenir la dimension de volonté divine.

La troisième partie (wa-lawlaa daf'u llahi l-naasa ba'dahum bi-ba'din la-fasadati l-ardu) est le principe théologique du contrepoids. Daf'u (masdar de dafa'a = repousser) est rendu par "ne repoussait pas" dans la construction conditionnelle. Ba'dahum bi-ba'din ("certains d'entre eux par d'autres") est rendu par "certains hommes par d'autres" — cette formule exprime la loi divine du contrepoids : Dieu utilise les hommes eux-mêmes pour maintenir l'équilibre de la société. La-fasadati l-ardu (condition au passé hypothétique) est rendu par "la terre serait corrompue" — formule conditionnelle claire.

La quatrième partie (wa-lakinna llaha dhuu fadlin 'ala l-'aalamiin) est la conclusion affirmative. Dhuu fadlin = "possesseur de grâce/bienfait" est rendu par "plein de bienfaits" — formule naturelle en français qui capture la plénitude de la grâce divine. 'Ala l-'aalamiin = "envers les mondes" (tous les êtres, toutes les créatures).
§JUSTIFICATION§
"Mirent en déroute" pour hazamuuhum : la racine hzm désigne la défaite qui provoque la dispersion et la fuite — Lane atteste hazama = he routed, he put to flight, he defeated (with dispersal). "Avec la permission de Dieu" pour bi-idhni llahi : idhn = permission, autorisation divine ; cette formule est identique à celle du verset 249 (bi-idhni llahi une petite troupe peut vaincre une grande). "David tua Goliath" pour qatala Dawuudu Jaluuta : qatala = il tua (sens strict, Form I) ; Dawuud = David (prophète) ; Jaluut = Goliath (le géant philistin du récit biblique). "La royauté" pour al-mulka : mulk = le pouvoir royal, la souveraineté, l'autorité de régner — Lane atteste mulk = possession, property, kingship, sovereignty. "La sagesse" pour al-hikmata : hikma = le jugement juste, la sagesse pratique de gouverner ; dans le contexte davidique, c'est la capacité de gouverner et de rendre justice avec discernement. "Lui enseigna" pour 'allamahu : Form II de 'alima = faire acquérir le savoir à quelqu'un (causatif) ; 'allamahu mimma yashaa'u = Allah lui enseigna ce qu'Il voulut (sans préciser le contenu, ce qui ouvre sur les arts, la forge, la psalmodie selon la tradition). "Ne repoussait pas" pour lawlaa daf'u : lawlaa = si ce n'était, si l'on n'avait pas ; daf'u (masdar) = l'action de repousser. "Certains hommes par d'autres" pour ba'dahum bi-ba'din : ba'd = une partie, certains ; la préposition bi exprime le moyen (repousser au moyen de) — la formule est la loi du contrepoids. "Serait corrompue" pour la-fasadati : fsd = se corrompre, périr moralement et physiquement ; la-fasadati = alors elle se serait corrompue (apodose conditionnelle). "Plein de bienfaits" pour dhuu fadlin : dhuu = possesseur de, plein de ; fadl = grâce, bienfait, générosité supérieure ; 'ala l-'aalamiin = envers toutes les créatures du monde.
§CRITIQUE§
La traduction de Hamidullah (1959) rend ce verset ainsi : "Et ils les défirent, par la permission d'Allah, et David tua Goliath ; et Allah lui donna la royauté et la sagesse, et lui enseigna ce qu'Il voulait. Et sans la défense d'Allah des gens les uns par les autres, la terre aurait certainement été pleine de désordre. Mais Allah est Détenteur de grâce envers les mondes." Cette traduction mérite plusieurs commentaires. Premièrement, "défirent" pour hazamuuhum est correct mais moins précis que "mirent en déroute" qui rend mieux le sens de dispersion et de fuite propre à hazama. Deuxièmement, "la défense d'Allah des gens les uns par les autres" pour daf'u llahi l-naasa ba'dahum bi-ba'din est une traduction acceptable mais "le fait que Dieu repousse certains hommes par d'autres" est plus proche du masdar nominalisé daf'u — qui exprime l'action divine de repousser comme principe universel. Troisièmement, "sans que... la terre aurait certainement été pleine de désordre" pour lawlaa... la-fasadati l-ardu est correct dans la structure conditionnelle mais "corrompue" pour fasadat est plus précis que "pleine de désordre" — fsd désigne une corruption organique, une pourriture, pas seulement un désordre. Quatrièmement, "Détenteur de grâce" pour dhuu fadlin est littéralement exact mais "plein de bienfaits" est plus naturel en français courant. Dans l'ensemble, notre traduction cherche à maintenir la précision sémantique des racines arabes tout en produisant un texte fluide et naturel en français contemporain.`,
    segments: [
      { position: 1, text_arab: "فَهَزَمُوهُم", translation: "Et ils les mirent en déroute", phonetic: "fa-hazamuuhum", grammar_type: "verb", root_key: "hzm" },
      { position: 2, text_arab: "بِإِذْنِ", translation: "avec la permission", phonetic: "bi-idhni", grammar_type: "particle" },
      { position: 3, text_arab: "ٱللَّهِ", translation: "de Dieu", phonetic: "llahi", grammar_type: "noun" },
      { position: 4, text_arab: "وَقَتَلَ", translation: "et tua", phonetic: "wa-qatala", grammar_type: "verb", root_key: "qtl" },
      { position: 5, text_arab: "دَاوُۥدُ", translation: "David", phonetic: "dawuudu", grammar_type: "noun" },
      { position: 6, text_arab: "جَالُوتَ", translation: "Goliath", phonetic: "jaluuta", grammar_type: "noun" },
      { position: 7, text_arab: "وَءَاتَىٰهُ", translation: "et lui donna", phonetic: "wa-aataahu", grammar_type: "verb" },
      { position: 8, text_arab: "ٱللَّهُ", translation: "Dieu", phonetic: "llahu", grammar_type: "noun" },
      { position: 9, text_arab: "ٱلْمُلْكَ", translation: "la royauté", phonetic: "al-mulka", grammar_type: "noun", root_key: "mlk" },
      { position: 10, text_arab: "وَٱلْحِكْمَةَ", translation: "et la sagesse", phonetic: "wa-l-hikmata", grammar_type: "noun", root_key: "hkm" },
      { position: 11, text_arab: "وَعَلَّمَهُۥ", translation: "et lui enseigna", phonetic: "wa-'allamahu", grammar_type: "verb", root_key: "elm" },
      { position: 12, text_arab: "مِمَّا", translation: "ce que", phonetic: "mimma", grammar_type: "particle" },
      { position: 13, text_arab: "يَشَآءُ", translation: "Il voulut", phonetic: "yashaa'u", grammar_type: "verb" },
      { position: 14, text_arab: "ۗ", translation: "", phonetic: "", grammar_type: "particle" },
      { position: 15, text_arab: "وَلَوْلَا", translation: "Et si... ne", phonetic: "wa-lawlaa", grammar_type: "particle" },
      { position: 16, text_arab: "دَفْعُ", translation: "le fait de repousser", phonetic: "daf'u", grammar_type: "noun", root_key: "dfe" },
      { position: 17, text_arab: "ٱللَّهِ", translation: "de Dieu", phonetic: "llahi", grammar_type: "noun" },
      { position: 18, text_arab: "ٱلنَّاسَ", translation: "les hommes", phonetic: "al-naasa", grammar_type: "noun" },
      { position: 19, text_arab: "بَعْضَهُم", translation: "certains d'entre eux", phonetic: "ba'dahum", grammar_type: "noun" },
      { position: 20, text_arab: "بِبَعْضٍ", translation: "par d'autres", phonetic: "bi-ba'din", grammar_type: "noun" },
      { position: 21, text_arab: "لَّفَسَدَتِ", translation: "la terre serait corrompue", phonetic: "la-fasadati", grammar_type: "verb", root_key: "fsd" },
      { position: 22, text_arab: "ٱلْأَرْضُ", translation: "la terre", phonetic: "al-ardu", grammar_type: "noun" },
      { position: 23, text_arab: "وَلَـٰكِنَّ", translation: "Mais", phonetic: "wa-lakinna", grammar_type: "particle" },
      { position: 24, text_arab: "ٱللَّهَ", translation: "Dieu", phonetic: "llaha", grammar_type: "noun" },
      { position: 25, text_arab: "ذُو", translation: "est plein de", phonetic: "dhuu", grammar_type: "particle" },
      { position: 26, text_arab: "فَضْلٍ", translation: "bienfaits", phonetic: "fadlin", grammar_type: "noun", root_key: "fdl" },
      { position: 27, text_arab: "عَلَى", translation: "envers", phonetic: "'ala", grammar_type: "particle" },
      { position: 28, text_arab: "ٱلْعَـٰلَمِينَ", translation: "les mondes", phonetic: "al-'aalamiin", grammar_type: "noun" }
    ],
    vwa: [
      {
        word_key: "hzm",
        position: 1,
        sense_chosen: "mettre en déroute, disperser l'ennemi par la défaite (victoire qui provoque la fuite)",
        analysis_axes: {
          sense_chosen: "mettre en déroute, disperser l'ennemi par la défaite (victoire qui provoque la fuite)",
          concept_chosen: "Deroute/VictoireDisperante",
          concepts: {
            "Deroute/VictoireDisperante": {
              status: "retenu",
              senses: ["briser en éclats, faire voler en morceaux (sens premier)", "défaire, mettre en déroute (sens militaire)", "hazamahum = il les a mis en déroute/dispersés", "hizmat = fuite, débandade après la défaite"],
              proof_ctx: "Lane's Lexicon: h-z-m = to break, to crush, to strike so as to scatter; hazama = he routed, he put to flight, he defeated (causing dispersal); hazamahum = he routed them; hizmat = flight, defeat, rout. The military sense emphasizes that the defeat causes the enemy to flee and scatter, not merely to be stopped.",
              axe1_verset: "Dans ce verset, fa-hazamuuhum bi-idhni llahi ouvre la conclusion du récit en un coup de baguette narrative : la petite troupe éprouvée, qui a traversé le fleuve, qui a prié avant le combat, l'emporte maintenant sur l'armée de Goliath. Le préfixe fa (alors, et ainsi) marque la conséquence immédiate de la prière et de la foi. Hazamuuhum n'est pas simplement 'ils vainquirent' mais 'ils les mirent en déroute' — la victoire est totale, l'armée ennemie se disperse.",
              axe2_voisins: "Hazamuuhum (pos=1) est immédiatement qualifié par bi-idhni llahi (pos=2-3) : la mise en déroute ne s'explique pas par la supériorité militaire de la petite troupe (que le v.249 avait présentée comme très inférieure en nombre) mais par la permission divine. Cette juxtaposition immédiate — déroute + permission divine — est théologiquement centrale : c'est la démonstration par les faits de la leçon du v.249. Puis wa-qatala dawuudu jaluuta (pos=4-6) précise l'aspect décisif : David tua Goliath personnellement.",
              axe3_sourate: "La racine hzm dans Al-Baqara est rare — elle n'apparaît qu'ici au verset 251. Mais la thématique de la victoire divine des faibles sur les forts est centrale dans cette section de la sourate (versets 243-251). Le contraste entre les bi-idhni llahi du v.249 (une petite troupe peut vaincre une grande par la permission divine) et le fa-hazamuuhum bi-idhni llahi du v.251 est la démonstration concrète de ce principe : ce qui était dit comme leçon au v.249 devient réalité narrative au v.251.",
              axe4_coherence: "La cohérence entre la mise en déroute (hzm) et la permission divine (idhn) est fondamentale dans la vision coranique du combat. Les croyants ne peuvent pas mettre en déroute une armée supérieure par leurs propres forces — c'est la permission divine qui transforme la défaite probable en victoire réelle. Cette cohérence explique pourquoi les croyants ont prié avant le combat (v.250) : ils savaient que la victoire ne viendrait pas de leur force mais de la grâce divine. Le fa-hazamuuhum est la réponse divine à la prière du v.250.",
              axe5_frequence: "La racine hzm dans le Coran est peu fréquente mais ses occurrences sont toutes militaires ou liées à la défaite spirituelle. V.3:111 : wa-in yuqatiluukum yuwalluu kum al-adbar (s'ils vous combattent ils tourneront le dos) — image de la déroute. V.8:12 : 'je vais jeter l'effroi dans les coeurs des incrédules'. La rareté de hzm dans le Coran renforce la force de son occurrence unique dans Al-Baqara : c'est le mot précis pour la défaite totale qui disperse l'ennemi, réservé à ce moment culminant du récit davidique."
            }
          }
        }
      },
      {
        word_key: "qtl",
        position: 4,
        sense_chosen: "tuer, ôter la vie à (acte individuel décisif de David sur Goliath)",
        analysis_axes: {
          sense_chosen: "tuer, ôter la vie à (acte individuel décisif de David sur Goliath)",
          concept_chosen: "Meurtre/ActeDecisif",
          concepts: {
            "Meurtre/ActeDecisif": {
              status: "retenu",
              senses: ["tuer, faire mourir (sens premier Form I)", "combattre, lutter (sens élargi)", "qatala Dawuudu Jaluuta = David tua Goliath (acte singulier)", "mort physique d'un individu par l'action directe d'un autre"],
              proof_ctx: "Lane's Lexicon: q-t-l = to kill, to slay, to put to death; qatala = he killed, he slew (Form I, direct action); qatala Dawuudu Jaluuta = David slew Goliath. Form I qatala is the strict sense of killing (taking a life), distinct from Form III qaatala = to fight, to combat (reciprocal). Here the Form I confirms the single, decisive act of killing.",
              axe1_verset: "Dans ce verset, wa-qatala dawuudu jaluuta (et David tua Goliath) est la scène centrale du récit, rendue en trois mots arabes d'une sobriété saisissante. Le verbe qatala (Form I) est au sens strict : tuer, ôter la vie — pas simplement blesser ou combattre. La mention des deux noms propres (Dawuud et Jaluut) personnalise l'événement : ce n'est pas une armée qui écrase une autre, c'est un homme nommé David qui tue personnellement le chef ennemi nommé Goliath.",
              axe2_voisins: "Wa-qatala dawuudu jaluuta (pos=4-6) suit immédiatement fa-hazamuuhum (pos=1) : d'abord la déroute collective de l'armée, ensuite l'acte individuel décisif — David qui tue Goliath. Cette séquence narrative est militairement et dramatiquement cohérente : la déroute crée le chaos, et c'est dans ce chaos que David affronte et tue Goliath. Puis vient la récompense divine (wa-aataahu llahu, pos=7-8) : tuer Goliath ouvre sur le don de la royauté.",
              axe3_sourate: "La racine qtl est l'une des plus fréquentes d'Al-Baqara dans ses sections sur le combat (v.190, 191, 193, 216, 244, 246, 251). Le verset 251 est le seul dans toute la sourate où qtl désigne un meurtre individuel identifié par des noms propres. Toutes les autres occurrences de qtl en Al-Baqara concernent le combat collectif ou la mort anonyme. L'individualisation de qatala dawuudu jaluuta lui donne un statut exceptionnel dans la sourate.",
              axe4_coherence: "La cohérence entre qatala (tuer Goliath) et aataahu l-mulka wa-l-hikmata (lui donna la royauté et la sagesse) est que l'acte de tuer Goliath est la condition et la justification de la récompense royale. David ne reçoit pas la royauté par héritage ou par naissance mais par l'acte courageux de tuer le chef ennemi. Cette logique est à la fois narrative (cause-effet) et théologique (Dieu récompense l'action courageuse accomplie dans Sa voie).",
              axe5_frequence: "La racine qtl est parmi les plus fréquentes du Coran avec des dizaines d'occurrences et une grande diversité de formes (Form I qatala = tuer, Form III qaatala = combattre, Form VI taqaatala = se combattre mutuellement, Form X istaqtala = chercher la mort). Dans Al-Baqara, qtl structure la réflexion éthique sur la violence légitime et illégitimée (v.190-195 les règles du combat, v.217 le combat dans le mois sacré). L'occurrence du v.251 est remarquable car elle est la seule à nommer les deux protagonistes."
            }
          }
        }
      },
      {
        word_key: "mlk",
        position: 9,
        sense_chosen: "la royauté, l'autorité souveraine de régner (don divin accordé à David)",
        analysis_axes: {
          sense_chosen: "la royauté, l'autorité souveraine de régner (don divin accordé à David)",
          concept_chosen: "Royaute/SouveraineteAccordee",
          concepts: {
            "Royaute/SouveraineteAccordee": {
              status: "retenu",
              senses: ["posséder, avoir en propre (sens verbal)", "mulk = la royauté, la souveraineté, le pouvoir de régner", "atahu l-mulk = Il lui donna la royauté", "autorité institutionnelle de gouverner un peuple"],
              proof_ctx: "Lane's Lexicon: m-l-k = to possess, to own, to have power over; mulk = possession, property, sovereignty, kingship, dominion; aata al-mulk = he gave the kingship/sovereignty. The term mulk designates the highest form of human authority — the right and power to reign over a people or territory, given here directly by God.",
              axe1_verset: "Dans ce verset, wa-aataahu llahu l-mulka wa-l-hikmata (et Dieu lui donna la royauté et la sagesse) est la récompense divine accordée à David après sa victoire sur Goliath. Al-mulku est l'autorité souveraine de régner — non pas simplement la richesse ou le prestige militaire, mais le pouvoir institutionnel de gouverner. Dieu donne la royauté directement (aata = donner, Form IV) : c'est une royauté par désignation divine, non par héritage humain.",
              axe2_voisins: "Al-mulka (pos=9) est immédiatement suivi de wa-l-hikmata (pos=10) : royauté et sagesse sont les deux dons accordés ensemble. Cette juxtaposition est théologiquement significative : la royauté sans la sagesse serait tyrannique, la sagesse sans la royauté serait stérile. Dieu donne les deux simultanément — Il crée un roi sage, un gouvernant discernant. Le troisième don est wa-'allamahu (pos=11) : l'enseignement de tout ce qu'Allah voulut ajouter.",
              axe3_sourate: "La racine mlk dans Al-Baqara désigne l'autorité politique divine à plusieurs niveaux : v.247 (Dieu donne le royaume à qui Il veut), v.251 (Dieu donne la royauté à David), v.255 (Dieu possède tout ce qui est dans les cieux et la terre). Cette récurrence de mlk dans la sourate construit une théologie politique cohérente : tout pouvoir humain vient de Dieu et Dieu en est le véritable possesseur. La royauté de David n'est pas une exception — elle illustre la règle générale.",
              axe4_coherence: "La cohérence entre la victoire militaire (qatala jaluuta, pos=4-6) et la royauté accordée (al-mulka, pos=9) est narrative et théologique : David mérite la royauté parce qu'il a fait ce que la royauté exige — protéger le peuple des ennemis. Mais la royauté lui est donnée par Dieu, pas simplement gagnée par lui : même sa victoire militaire était bi-idhni llahi (pos=2-3). La causalité divine enveloppe l'ensemble de la séquence.",
              axe5_frequence: "La racine mlk est l'une des plus importantes du Coran : malik (roi), mulk (royauté), malakut (royaume céleste), malak (ange — être céleste au service du Roi divin). Dans Al-Baqara, mulk apparaît à des moments charnières : v.247 (royauté de Saul accordée contre l'avis des chefs), v.251 (royauté de David accordée après sa victoire), v.255 (Dieu comme Roi de tout). Ces trois occurrences dessinent la doctrine coranique de la royauté : toujours divine dans son origine, parfois accordée à l'homme méritant."
            }
          }
        }
      },
      {
        word_key: "hkm",
        position: 10,
        sense_chosen: "la sagesse pratique, la capacité de gouverner et juger avec discernement",
        analysis_axes: {
          sense_chosen: "la sagesse pratique, la capacité de gouverner et juger avec discernement",
          concept_chosen: "Sagesse/GouvernanceDiscernante",
          concepts: {
            "Sagesse/GouvernanceDiscernante": {
              status: "retenu",
              senses: ["trancher un différend, décider avec autorité (sens premier)", "gouverner, juger avec justesse", "hikma = la sagesse pratique, le discernement de gouvernant", "capacité de rendre des décisions justes et bienfaisantes"],
              proof_ctx: "Lane's Lexicon: h-k-m = to prevent, to restrain from wrong; hakama = he judged, he decided, he governed; hikma = wisdom, the quality of judging rightly; wisdom in action, not merely theoretical knowledge. In the Davidic context, hikma = the practical wisdom of a king who rules with justice and discernment.",
              axe1_verset: "Dans ce verset, wa-l-hikmata (et la sagesse) est le deuxième des trois dons accordés à David. La hikma dans le contexte royal davidique désigne la sagesse pratique de gouverner : la capacité de juger les conflits avec justice, de prendre les bonnes décisions pour le peuple, de distinguer le droit du tort. Ce n'est pas la sagesse philosophique théorique mais la sagesse en acte d'un roi et juge. La hikma complète ainsi la royauté (mulk) — elle en est la qualité intérieure.",
              axe2_voisins: "Wa-l-hikmata (pos=10) est précédé de l-mulka (pos=9) et suivi de wa-'allamahu mimma yashaa'u (pos=11-13). La progression des trois dons est significative : royauté (autorité externe), sagesse (qualité intérieure de gouvernance), enseignement divin (savoir supplémentaire selon la volonté d'Allah). Cette progression va de l'extérieur vers l'intérieur — d'abord l'autorité, puis la qualité morale, puis le savoir particulier accordé selon la volonté divine.",
              axe3_sourate: "La racine hkm dans Al-Baqara couvre plusieurs dimensions : la gouvernance divine (v.32 : 'Tu es le Sage, l'Omniscient'), le jugement humain (v.188 : ne mangez pas vos biens par la corruption pour en soumettre une partie aux juges), la sagesse prophetique (v.129, 151 : 'Il leur enseignera le Livre et la sagesse'). La hikma accordée à David au v.251 est donc dans la continuité de la sagesse prophetique — David est à la fois roi et prophet, et sa sagesse est de gouvernant autant que de voyant.",
              axe4_coherence: "La cohérence entre hikma (sagesse) et mulk (royauté) est que l'autorité sans la sagesse produit la tyrannie. Dieu donne les deux ensemble pour créer un roi juste. Cette association du pouvoir et de la sagesse est un ideal coranique récurrent (v.2:129, v.3:81, v.4:54). Dans le cas de David, la hikma inclut ses Psaumes (Zabur) et sa capacité de rendre des jugements que la tradition islamique décrira comme exemplaires. La sagesse est l'âme de la royauté.",
              axe5_frequence: "La racine hkm est l'une des plus fréquentes et des plus importantes du Coran : hakam (juge), hakim (sage, épithète divine), hikma (sagesse), hukm (jugement, décision). Dans Al-Baqara seule, Al-Hakim apparaît de nombreuses fois comme attribut divin. La hikma accordée à David au v.251 est l'une des rares occurrences où cette qualité divine est transmise à un homme — ce qui souligne l'exceptionnalité du statut de David dans la tradition coranique comme roi-prophète-sage."
            }
          }
        }
      },
      {
        word_key: "dfe",
        position: 16,
        sense_chosen: "repousser, contrebalancer (principe divin du contrepoids humain)",
        analysis_axes: {
          sense_chosen: "repousser, contrebalancer (principe divin du contrepoids humain)",
          concept_chosen: "Contrepoids/EquilibreDivin",
          concepts: {
            "Contrepoids/EquilibreDivin": {
              status: "retenu",
              senses: ["pousser, chasser, repousser (sens premier)", "repousser en contrebalancant une force par une autre", "daf'u llahi l-naasa ba'dahum bi-ba'din = le fait que Dieu repousse les hommes certains par d'autres", "principe universel de l'equilibre social par opposition des forces humaines"],
              proof_ctx: "Lane's Lexicon: d-f-' = to push, to repel, to drive back; dafa'a = he pushed, he repelled, he drove back; daf' = the act of pushing/repelling (masdar); daf'u Allahi l-nasa ba'dahum bi-ba'din = God's repelling of people some of them by others = the divine principle of human counterbalance. The nominalized masdar daf'u expresses the action as a general principle.",
              axe1_verset: "Dans ce verset, wa-lawlaa daf'u llahi l-naasa ba'dahum bi-ba'din (et si Dieu ne repoussait pas certains hommes par d'autres) est l'énoncé d'un principe théologique universel qui transcende le récit de David. Daf'u (masdar nominalisé) exprime l'action de repousser comme principe permanent, non comme acte ponctuel. La formule ba'dahum bi-ba'din (certains d'entre eux par d'autres) révèle la mécanique divine : Dieu utilise les hommes eux-mêmes comme instrument de leur équilibre mutuel.",
              axe2_voisins: "Daf'u (pos=16) est encadré par lawlaa (si... ne, pos=15) qui ouvre la conditionnelle, et par l-naasa ba'dahum bi-ba'din (pos=18-20) qui précise l'objet et le mécanisme. La conséquence — la-fasadati l-ardu (pos=21-22) — montre ce qui arriverait sans ce daf'u divin : la corruption généralisée de la terre. Le daf'u est ainsi présenté comme la condition de la paix et de l'ordre mondial. Sans ce contrepoids actif, le monde périrait.",
              axe3_sourate: "Le principe du daf'u (contrepoids divin) est énoncé ici pour la première fois dans Al-Baqara mais il résonne avec plusieurs thématiques de la sourate : la permission du combat défensif (v.190-191 : combattez ceux qui vous combattent), la justification de la guerre sainte (v.216 : le combat vous est prescrit même si vous le détestez), la loi du talion (v.178-179). Tous ces passages expriment la même logique : Dieu permet, voire ordonne, l'opposition humaine pour maintenir l'équilibre du monde.",
              axe4_coherence: "La cohérence entre le récit de David (victoire sur Goliath) et le principe théologique du daf'u est que le récit illustre le principe : David a repoussé Goliath (ba'd par ba'd) par la permission divine, empêchant ainsi la corruption de la terre par la tyrannie de Goliath. La narration historique (verset 248-251) devient ainsi l'exemple concret du principe universel énoncé à la fin du verset. Le récit sert la théologie, et la théologie éclaire le récit.",
              axe5_frequence: "La racine dfe dans le Coran exprime deux dimensions complémentaires : repousser l'ennemi (v.22:39-40 : permission de combattre ceux qui vous ont été injustes) et repousser le mal par le bien (v.41:34 : repousse le mal par ce qui est meilleur). Le v.251 est l'occurrence la plus philosophique et universelle de cette racine dans le Coran — elle n'exprime plus un acte ponctuel mais le principe permanent de l'équilibre divin du monde par opposition des forces humaines."
            }
          }
        }
      },
      {
        word_key: "fsd",
        position: 21,
        sense_chosen: "se corrompre, périr moralement et physiquement (pourriture organique du monde)",
        analysis_axes: {
          sense_chosen: "se corrompre, périr moralement et physiquement (pourriture organique du monde)",
          concept_chosen: "Corruption/PourrissementTerre",
          concepts: {
            "Corruption/PourrissementTerre": {
              status: "retenu",
              senses: ["se gâter, pourrir (sens premier — aliments, matière)", "se corrompre moralement, périr", "la-fasadati l-ardu = la terre se serait corrompue (apodose conditionnelle)", "destruction generalisee de l'ordre moral et physique du monde"],
              proof_ctx: "Lane's Lexicon: f-s-d = to be corrupt, to be bad, to decay; fasada = it became corrupt, it decayed, it perished; fasad = corruption, decay, disorder, moral ruin; la-fasadati l-ardu = the earth would have certainly become corrupt/ruined. The root covers both physical decay (food rotting) and moral corruption (societal breakdown).",
              axe1_verset: "Dans ce verset, la-fasadati l-ardu (la terre serait corrompue) est l'apodose de la conditionnelle ouverte par wa-lawlaa (si... ne). La forme la-fasadati est une réponse conditionnelle au passé hypothétique : si le daf'u divin n'avait pas existé, la terre aurait été corrompue (et est toujours en train de l'être sans ce principe). Al-ardu (la terre) désigne ici le monde humain dans sa totalité — la société, la civilisation, l'ordre moral et physique que Dieu maintient par le principe du contrepoids.",
              axe2_voisins: "La-fasadati l-ardu (pos=21-22) est la conséquence catastrophique de l'absence de daf'u (pos=16). La structure est : si pas de daf'u alors fasad — sans le contrepoids divin, le monde se corrompt inévitablement. Puis wa-lakinna llaha dhuu fadlin (pos=23-26) inverse la perspective de manière positive : la réalité est que Dieu est plein de bienfaits. Le fasad hypothétique est contrebalancé par le fadl réel — nouvelle occurrence du thème du contrepoids à l'échelle rhétorique.",
              axe3_sourate: "La racine fsd dans Al-Baqara est remarquablement fréquente et theologique : v.11-12 (les hypocrites qui répandent le fasad sur terre en prétendant réformer), v.27 (ceux qui coupent ce qu'Allah a ordonné d'unir et répandent le fasad), v.60 (ne répandez pas le fasad sur la terre), v.205 (celui qui gouverne pour détruire et répandre le fasad). Le v.251 donne au fasad sa dimension la plus universelle : sans le daf'u divin, TOUTE la terre serait dans cet état de corruption que les versets précédents décrivent localement.",
              axe4_coherence: "La cohérence entre fsd (corruption) et daf'u (contrepoids) est que le mal tend naturellement à s'étendre si rien ne le contrebalance. La loi divine du daf'u est précisément la réponse à cette tendance entroplique du mal à se propager et corrompre. Le v.251 énonce ainsi une loi morale universelle : l'ordre du monde exige l'opposition active — laisser le mal agir sans contrepoids conduit inévitablement au fasad total. Cette logique justifie théologiquement le combat (jihad) comme service rendu à l'ordre divin.",
              axe5_frequence: "La racine fsd avec ses dérivés (fasad, mufsiduun, afsada, fasada) est l'une des plus importantes d'Al-Baqara pour comprendre la vision coranique du mal social. Les mufsiduun (ceux qui répandent la corruption) sont présentés comme les antagonistes par excellence de la foi et de l'ordre divin dans la sourate. Le v.251 est l'aboutissement logique de cette thématique : sans le contrepoids divin, la terre entière serait corrompue — ce qui donne rétrospectivement son sens ultime à tous les avertissements contre le fasad dans la sourate."
            }
          }
        }
      },
      {
        word_key: "fdl",
        position: 26,
        sense_chosen: "bienfait, grâce généreuse accordée au-delà du mérite (don divin surabondant)",
        analysis_axes: {
          sense_chosen: "bienfait, grâce généreuse accordée au-delà du mérite (don divin surabondant)",
          concept_chosen: "Grace/BienfaitDivin",
          concepts: {
            "Grace/BienfaitDivin": {
              status: "retenu",
              senses: ["excéder, être supérieur (sens verbal fadala)", "fadl = ce qui excède, la grâce au-delà du dû", "dhuu fadlin = possesseur de grâce, plein de bienfaits", "générosité divine qui dépasse le mérite humain et bénéficie aux mondes entiers"],
              proof_ctx: "Lane's Lexicon: f-d-l = to exceed, to surpass, to be abundant; fadl = superabundance, excess (in a good sense), grace, bounty, generosity; dhu fadl = possessor of bounty/grace, one who is full of generosity; fadl Allah = the grace/bounty of God. The root carries the sense of something given beyond what is owed — unmerited generosity.",
              axe1_verset: "Dans ce verset, wa-lakinna llaha dhuu fadlin 'ala l-'aalamiin (mais Dieu est plein de bienfaits envers les mondes) est la conclusion du verset et de l'ensemble de la section narrative (versets 248-251). Après la victoire, après la récompense de David, après l'énoncé du principe du contrepoids, la sourate conclut sur la grâce divine universelle. Dhuu fadlin = possesseur de bienfait/grâce — ce n'est pas seulement qu'Il agit avec grâce, c'est qu'Il est intrinsèquement porteur de grâce.",
              axe2_voisins: "Dhuu fadlin (pos=25-26) suit wa-lakinna (pos=23) qui introduit le retournement positif après la conditionnelle négative (si... la terre serait corrompue). La structure rhétorique est : menace conditionnelle (fasad hypothétique) -> réalité affirmée (fadl divin). Le fadl divin est la réponse positive à la question implicite 'pourquoi le monde n'est-il pas corrompu ?' — parce que Dieu est plein de bienfaits et maintient Son ordre par le daf'u. Le fadl et le daf'u sont les deux facettes de la même providence divine.",
              axe3_sourate: "La racine fdl dans Al-Baqara est fréquente et centrale : v.64 (sans le fadl d'Allah et Sa miséricorde vous auriez été parmi les perdants), v.105 (Dieu accorde Son fadl à qui Il veut), v.198 (cherchez le fadl d'Allah lors du pèlerinage), v.237 (n'oubliez pas le fadl entre vous). Le v.251 donne au fadl sa portée la plus universelle : 'ala l-'aalamiin = sur tous les mondes, toutes les créatures. Ce n'est plus un fadl accordé aux croyants seuls mais à l'ensemble de la création.",
              axe4_coherence: "La cohérence entre fadl (bienfait divin) et l'ensemble du récit de David est que la victoire de la petite troupe, le meurtre de Goliath, le don de la royauté et de la sagesse, le principe du contrepoids — tout cela est une manifestation du fadl divin 'sur les mondes'. La conclusion du récit par la grâce universelle transforme l'anecdote historique (David et Goliath) en illustration du principe théologique général : Dieu est plein de bienfaits pour tous, et c'est pourquoi le monde ne s'est pas encore corrompu.",
              axe5_frequence: "La racine fdl avec ses dérivés (fadl, afdaliyya, tafdil, mufaddal) est l'une des plus importantes pour la théologie coranique de la grâce. Elle se distingue de rahma (miséricorde, qui répond à la détresse) et de ni'ma (bienfait particulier) par son sens d'excédent, de surabondance gratuite — Dieu donne au-delà de ce qui est dû, au-delà du mérite. Le dhuu fadlin 'ala l-'aalamiin final est une formule de clôture majestueuse qui replace le récit davidique dans la perspective de la générosité divine universelle."
            }
          }
        }
      }
    ],
    daily_phrases: []
  }
};

async function main() {
  const data = verseData[251];
  const { error: veErr } = await supabase.from('verse_analyses').update({
    translation_arab: data.translation_arab,
    full_translation: data.full_translation,
    translation_explanation: data.translation_explanation,
    segments: data.segments
  }).eq('id', data.analysis_id);
  if (veErr) { console.error('verse_analyses ERROR:', veErr.message); return; }
  console.log('verse_analyses updated (V251)');

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
  console.log('DONE V251 TERMINE');
}
main().catch(console.error);
