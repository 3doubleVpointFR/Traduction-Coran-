const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

const verseData = {
  253: {
    verse_id: 260,
    analysis_id: 620,
    full_translation: "Ces Messagers, Nous en avons favorisé certains par rapport à d'autres : il en est à qui Dieu a parlé ; et Il en a élevé d'autres en dignité. À Jésus, fils de Marie, Nous avons apporté les preuves et Nous l'avons fortifié par l'Esprit Saint. Si Dieu l'avait voulu, les peuples suivants ne se seraient pas entretués après que les preuves leur furent parvenues ; mais ils se disputèrent : les uns crurent et les autres mécrurent. Si Dieu l'avait voulu, ils ne se seraient pas entre-tués. Mais Dieu fait ce qu'Il veut.",
    translation_arab: "Ces messagers, Nous en avons distingué certains parmi d'autres : il en est parmi eux à qui Dieu a parlé, et Il en a élevé certains en rang. Nous avons accordé à Jésus fils de Marie les preuves manifestes et Nous l'avons soutenu par l'Esprit de Sainteté. Si Dieu avait voulu, ceux qui vinrent après eux ne se seraient pas entretués après que les preuves manifestes leur furent parvenues. Mais ils divergèrent : il en est qui crurent et d'autres qui nièrent. Si Dieu avait voulu, ils ne se seraient pas entretués. Mais Dieu fait ce qu'Il veut.",
    translation_explanation: `§DEMARCHE§
Le verset 2:253 constitue un bilan théologique de la diversité prophétique et de son rapport à la volonté divine. Deux mouvements principaux structurent la démarche traductive : premièrement, rendre la hiérarchie entre les envoyés sans aplatir les distinctions que le texte établit avec soin ; deuxièmement, restituer le paradoxe de la volonté divine tel que le verset le formule — Dieu aurait pu empêcher les guerres entre croyants, Il ne l'a pas fait, et c'est Son choix souverain.

Pour "tilka r-rusulu faddalna ba'dahum 'ala ba'd" (ces messagers, Nous en avons distingué certains parmi d'autres), la Form II faddala signifie établir une supériorité active, une distinction qualitative. L'expression ba'dahum 'ala ba'd (certains d'eux sur d'autres) est rendue par "certains parmi d'autres" — formule qui exprime la hiérarchie relative sans impliquer que les moins distingués sont inférieurs en valeur absolue. "Distingué" est préféré à "favorisé" car faddala porte l'idée d'une différenciation active par excellence.

Pour "min-hum man kallama llahu" (parmi eux, il en est à qui Dieu a parlé), le parfait kallama (Form II) désigne un acte de parole directe et sans intermédiaire. La tradition identifie Moïse dans ce titre de Kalim Allah. Le passé composé "a parlé" rend l'accompli arabe — fait accompli aux conséquences présentes.

Pour "wa-rafa'a ba'dahum darajatin" (Il en a élevé certains en rang), rafa'a + darajatin : l'élévation est un mouvement actif vers le haut, et "rang" rend mieux que "degrés" le sens de position dans une hiérarchie.

Pour "wa-atayna 'isa bna maryama l-bayyinati wa-ayyaydnahu bi-ruhi l-qudusi" (Nous avons accordé à Jésus fils de Marie les preuves manifestes et Nous l'avons soutenu par l'Esprit de Sainteté), "accordé" pour atayna (atiyna = Nous avons donné) est préféré à "apporté" car ata/yu'ti désigne un don accordé, une attribution. "Soutenu" pour ayyaydnahu rend la Form IV ayyada qui est causative et active — non pas simplement "fortifié" mais "accorder un soutien puissant". "Esprit de Sainteté" pour ruhi l-qudusi rend l'état construit arabe plus fidèlement que "Esprit Saint" — l'esprit est qualifié par la sainteté/pureté (qudus).

La double formule conditionnelle wa-law sha'a llahu ma qtatalu (Si Dieu avait voulu, ils ne se seraient pas entretués) est rendue en français par le conditionnel passé — condition irréelle du passé. "Divergèrent" pour ikhtalafuu et "nièrent" pour kafara sont préférés à des termes confessionnels.
§JUSTIFICATION§
"Distingué certains parmi d'autres" pour faddalna ba'dahum 'ala ba'd : Lane's Lexicon atteste pour f-d-l la Form II faddala = to prefer, to give preference to, to make to excel. La Form II est intensive et active : non pas simplement "avoir de l'excellence" mais "rendre excellent, distinguer activement". Ba'dahum 'ala ba'd = certains sur d'autres = comparaison distributive. "A parlé" pour kallama llahu : k-l-m Form II kallama = to speak to directly, to address in speech — parole directe sans intermédiaire, qui distingue Moïse (Kalim Allah). "Élevé en rang" pour rafa'a darajatin : r-f-' = to raise, to lift up ; darajatin = accusatif de spécification, degré, rang. "Accordé" pour atayna : '-t-y Form IV ata = to come, to bring ; Form IV ata = to give, to grant. "Soutenu" pour ayyaydnahu : '-y-d Form IV ayyada = to strengthen, to support vigorously — causatif qui exprime un soutien actif donné à autrui. "Preuves manifestes" pour al-bayyinati : b-y-n bayyina = ce qui est clair et distinct par soi-même. "Esprit de Sainteté" pour ruhi l-qudusi : r-w-H ruh = souffle, esprit, principe vital ; q-d-s qudus = sainteté, pureté. "Divergèrent" pour ikhtalafuu : kh-l-f Form VIII ikhtilaf = différer, être en désaccord. "Nièrent" pour kafaru : k-f-r = couvrir, dissimuler, nier. "Dieu fait ce qu'Il veut" pour yaf'alu ma yurid : inaccompli à valeur gnomique, vérité générale permanente.
§CRITIQUE§
La traduction de Hamidullah présente ce verset ainsi : "Ces Messagers, Nous en avons favorisé certains par rapport à d'autres : il en est à qui Dieu a parlé ; et Il en a élevé d'autres en dignité. À Jésus, fils de Marie, Nous avons apporté les preuves et Nous l'avons fortifié par l'Esprit Saint. Si Dieu l'avait voulu, les peuples suivants ne se seraient pas entretués après que les preuves leur furent parvenues ; mais ils se disputèrent : les uns crurent et les autres mécrurent. Si Dieu l'avait voulu, ils ne se seraient pas entre-tués. Mais Dieu fait ce qu'Il veut."

Plusieurs observations critiques méritent d'être formulées. Premièrement, "favorisé" pour faddalna est correct mais affaiblit la dimension active de la Form II faddala qui établit une distinction qualitative — notre "distingué" rend mieux l'idée d'une hiérarchie établie par excellence. Deuxièmement, "apporté les preuves" pour atayna l-bayyinati : ata/yu'ti désigne un don accordé plutôt qu'un apport — "accordé" est plus fidèle à la structure de don divin. Troisièmement, "fortifié par l'Esprit Saint" pour ayyaydnahu bi-ruhi l-qudusi : "soutenu" rend mieux ayyada (Form IV = accorder un soutien actif) que "fortifié" qui désigne un état résultant. "Esprit de Sainteté" est plus littéral que "Esprit Saint" qui est un terme emprunté à la théologie chrétienne. Quatrièmement, "mécrurent" est un néologisme peu élégant — "nièrent" rend mieux la dynamique active de kfr (couvrir, dissimuler). Cinquièmement, "ils se disputèrent" pour ikhtalafuu est une traduction approximative — ikhtalafuu (Form VIII réciproque de khlf) désigne une divergence profonde d'opinion, pas simplement une querelle de surface.`,
    segments: [
      { position: 1, text_arab: "تِلْكَ", translation: "Ces", phonetic: "tilka", grammar_type: "particle", is_particle: true },
      { position: 2, text_arab: "ٱلرُّسُلُ", translation: "messagers", phonetic: "ar-rusulu", grammar_type: "noun", is_particle: false, word_key: "rsl" },
      { position: 3, text_arab: "فَضَّلْنَا", translation: "Nous avons distingué", phonetic: "faddalna", grammar_type: "verb", is_particle: false, word_key: "fdl" },
      { position: 4, text_arab: "بَعْضَهُمْ", translation: "certains d'eux", phonetic: "ba'dahum", grammar_type: "noun", is_particle: false, word_key: "bed" },
      { position: 5, text_arab: "عَلَىٰ", translation: "sur", phonetic: "'ala", grammar_type: "particle", is_particle: true },
      { position: 6, text_arab: "بَعْضٍ", translation: "d'autres", phonetic: "ba'd", grammar_type: "noun", is_particle: false, word_key: "bed" },
      { position: 7, text_arab: "مِّنْهُم", translation: "parmi eux", phonetic: "min-hum", grammar_type: "particle", is_particle: true },
      { position: 8, text_arab: "مَّن", translation: "il en est", phonetic: "man", grammar_type: "particle", is_particle: true },
      { position: 9, text_arab: "كَلَّمَ", translation: "a parlé à", phonetic: "kallama", grammar_type: "verb", is_particle: false, word_key: "klm" },
      { position: 10, text_arab: "ٱللَّهُ", translation: "Dieu", phonetic: "allahu", grammar_type: "noun", is_particle: true },
      { position: 11, text_arab: "وَرَفَعَ", translation: "et Il en a élevé", phonetic: "wa-rafa'a", grammar_type: "verb", is_particle: false, word_key: "rfe" },
      { position: 12, text_arab: "بَعْضَهُمْ", translation: "certains d'eux", phonetic: "ba'dahum", grammar_type: "noun", is_particle: false, word_key: "bed" },
      { position: 13, text_arab: "دَرَجَـٰتٍ", translation: "en rang", phonetic: "darajatin", grammar_type: "noun", is_particle: false, word_key: "drj" },
      { position: 14, text_arab: "وَءَاتَيْنَا", translation: "et Nous avons accordé", phonetic: "wa-atayna", grammar_type: "verb", is_particle: false, word_key: "aty" },
      { position: 15, text_arab: "عِيسَى", translation: "à Jésus", phonetic: "'isa", grammar_type: "noun", is_particle: true },
      { position: 16, text_arab: "ٱبْنَ", translation: "fils de", phonetic: "bna", grammar_type: "noun", is_particle: false, word_key: "bni" },
      { position: 17, text_arab: "مَرْيَمَ", translation: "Marie", phonetic: "maryama", grammar_type: "noun", is_particle: true },
      { position: 18, text_arab: "ٱلْبَيِّنَـٰتِ", translation: "les preuves manifestes", phonetic: "al-bayyinati", grammar_type: "noun", is_particle: false, word_key: "byn" },
      { position: 19, text_arab: "وَأَيَّدْنَـٰهُ", translation: "et Nous l'avons soutenu", phonetic: "wa-ayyaydnahu", grammar_type: "verb", is_particle: false, word_key: "ayd" },
      { position: 20, text_arab: "بِرُوحِ", translation: "par l'Esprit", phonetic: "bi-ruhi", grammar_type: "noun", is_particle: false, word_key: "rwH" },
      { position: 21, text_arab: "ٱلْقُدُسِ", translation: "de Sainteté", phonetic: "al-qudusi", grammar_type: "noun", is_particle: false, word_key: "qds" },
      { position: 22, text_arab: "وَلَوْ", translation: "Et si", phonetic: "wa-law", grammar_type: "particle", is_particle: true },
      { position: 23, text_arab: "شَآءَ", translation: "avait voulu", phonetic: "sha'a", grammar_type: "verb", is_particle: true },
      { position: 24, text_arab: "ٱللَّهُ", translation: "Dieu", phonetic: "allahu", grammar_type: "noun", is_particle: true },
      { position: 25, text_arab: "مَا", translation: "ne ... pas", phonetic: "ma", grammar_type: "particle", is_particle: true },
      { position: 26, text_arab: "ٱقْتَتَلَ", translation: "se seraient entretués", phonetic: "iqtatala", grammar_type: "verb", is_particle: false, word_key: "qtl" },
      { position: 27, text_arab: "ٱلَّذِينَ", translation: "ceux", phonetic: "alladhina", grammar_type: "particle", is_particle: true },
      { position: 28, text_arab: "مِن", translation: "de", phonetic: "min", grammar_type: "particle", is_particle: true },
      { position: 29, text_arab: "بَعْدِهِم", translation: "après eux", phonetic: "ba'dihim", grammar_type: "noun", is_particle: true },
      { position: 30, text_arab: "مِّن", translation: "de", phonetic: "min", grammar_type: "particle", is_particle: true },
      { position: 31, text_arab: "بَعْدِ", translation: "après", phonetic: "ba'di", grammar_type: "noun", is_particle: true },
      { position: 32, text_arab: "مَا", translation: "ce que", phonetic: "ma", grammar_type: "particle", is_particle: true },
      { position: 33, text_arab: "جَآءَتْهُمُ", translation: "leur furent parvenues", phonetic: "ja'at-humu", grammar_type: "verb", is_particle: false, word_key: "jaa" },
      { position: 34, text_arab: "ٱلْبَيِّنَـٰتُ", translation: "les preuves manifestes", phonetic: "al-bayyinatu", grammar_type: "noun", is_particle: false, word_key: "byn" },
      { position: 35, text_arab: "وَلَـٰكِنِ", translation: "Mais", phonetic: "wa-lakini", grammar_type: "particle", is_particle: true },
      { position: 36, text_arab: "ٱخْتَلَفُوا۟", translation: "ils divergèrent", phonetic: "ikhtalafuu", grammar_type: "verb", is_particle: false, word_key: "xlf" },
      { position: 37, text_arab: "فَمِنْهُم", translation: "il en est parmi eux", phonetic: "fa-min-hum", grammar_type: "particle", is_particle: true },
      { position: 38, text_arab: "مَّن", translation: "qui", phonetic: "man", grammar_type: "particle", is_particle: true },
      { position: 39, text_arab: "ءَامَنَ", translation: "crurent", phonetic: "amana", grammar_type: "verb", is_particle: false, word_key: "amn" },
      { position: 40, text_arab: "وَمِنْهُم", translation: "et d'autres", phonetic: "wa-min-hum", grammar_type: "particle", is_particle: true },
      { position: 41, text_arab: "مَّن", translation: "qui", phonetic: "man", grammar_type: "particle", is_particle: true },
      { position: 42, text_arab: "كَفَرَ", translation: "nièrent", phonetic: "kafara", grammar_type: "verb", is_particle: false, word_key: "kfr" },
      { position: 43, text_arab: "وَلَوْ", translation: "Et si", phonetic: "wa-law", grammar_type: "particle", is_particle: true },
      { position: 44, text_arab: "شَآءَ", translation: "avait voulu", phonetic: "sha'a", grammar_type: "verb", is_particle: true },
      { position: 45, text_arab: "ٱللَّهُ", translation: "Dieu", phonetic: "allahu", grammar_type: "noun", is_particle: true },
      { position: 46, text_arab: "مَا", translation: "ne ... pas", phonetic: "ma", grammar_type: "particle", is_particle: true },
      { position: 47, text_arab: "ٱقْتَتَلُوا۟", translation: "ils ne se seraient pas entretués", phonetic: "iqtataluuu", grammar_type: "verb", is_particle: true },
      { position: 48, text_arab: "وَلَـٰكِنَّ", translation: "Mais", phonetic: "wa-lakinna", grammar_type: "particle", is_particle: true },
      { position: 49, text_arab: "ٱللَّهَ", translation: "Dieu", phonetic: "allaha", grammar_type: "noun", is_particle: true },
      { position: 50, text_arab: "يَفْعَلُ", translation: "fait", phonetic: "yaf'alu", grammar_type: "verb", is_particle: false, word_key: "fel" },
      { position: 51, text_arab: "مَا", translation: "ce qu'", phonetic: "ma", grammar_type: "particle", is_particle: true },
      { position: 52, text_arab: "يُرِيدُ", translation: "Il veut", phonetic: "yurid", grammar_type: "verb", is_particle: false, word_key: "rwd" }
    ],
    vwa: [
      {
        word_key: "fdl",
        position: 3,
        sense_chosen: "distinguer activement, établir une supériorité par excellence (hiérarchie qualitative entre messagers)",
        analysis_axes: {
          sense_chosen: "distinguer activement, établir une supériorité par excellence (hiérarchie qualitative entre messagers)",
          concept_chosen: "Distinction/Superiorite",
          concepts: {
            "Distinction/Superiorite": {
              status: "retenu",
              senses: [
                "excéder, dépasser en qualité (sens premier de fadala, Form I)",
                "Form II faddala = rendre supérieur, distinguer activement par excellence",
                "fadl = ce qui excède, le surplus, l'excellence, la grâce accordée",
                "faddalna ba'dahum 'ala ba'd = Nous avons distingué certains d'eux sur d'autres (hiérarchie relative)"
              ],
              proof_ctx: "Lane's Lexicon: f-d-l = to exceed, to surpass in quality; Form II faddala = to prefer, to make to excel over another, to give preference to; fadl = excellence, superiority, surplus, grace. The Form II is intensive and causative: not 'having surplus' but 'making superior, actively distinguishing'. The verse uses faddalna (1PP divine) with ba'dahum 'ala ba'd (some over others) — a relative hierarchy, not an absolute judgment.",
              axe1_verset: "Dans le verset 2:253, faddalna (Form II, première personne du pluriel divin) est l'acte par lequel Dieu établit activement la hiérarchie prophétique. Ce n'est pas une constatation passive mais une action divine intentionnelle. La Form II intensive — par opposition à la Form I fadala (être supérieur naturellement) — insiste sur le caractère actif et délibéré de cette distinction. Le sujet divin (Nous = Dieu) revendique explicitement cette hiérarchisation comme Son oeuvre. La formule ba'dahum 'ala ba'd (certains sur d'autres) est une expression distributive qui indique une gradation complexe, non une simple division binaire entre supérieurs et inférieurs.",
              axe2_voisins: "Faddalna (pos=3) est encadré par ar-rusulu (pos=2, les messagers au pluriel défini) et ba'dahum 'ala ba'd (pos=4-6, certains sur d'autres). La structure syntaxique est celle d'une proposition topicalisée : 'ces messagers — Nous en avons distingué certains'. Le thème (les messagers dans leur unité) est posé avant la distinction qui intervient en leur sein. Cette structure — unité d'abord, différenciation ensuite — préserve la commune appartenance de tous les prophètes à la mission divine, tout en établissant une gradation entre eux. Suit ensuite la mention des deux modes principaux de distinction : la parole divine directe et l'élévation en rangs.",
              axe3_sourate: "La notion de fadl divin traverse toute la sourate Al-Baqara comme fil conducteur théologique. En 2:47 et 2:122, Dieu dit avoir distingué les Fils d'Israël parmi les mondes — fadl collectif à un peuple. En 2:253, le fadl s'applique à l'intérieur du corps prophétique lui-même. Cette gradation du fadl — des peuples aux prophètes — montre que la différenciation divine est un principe universel qui s'applique à tous les niveaux de l'existence. Le fadl n'est pas égalitaire : c'est précisément sa nature de distinguer, d'accorder plus à certains qu'à d'autres selon la sagesse divine.",
              axe4_coherence: "La cohérence profonde entre faddalna (distinguer) et la thématique finale du verset (Dieu fait ce qu'Il veut) est celle de la liberté souveraine divine. Si Dieu a distingué les prophètes entre eux, c'est l'exercice de Sa volonté souveraine — comme Il fait ce qu'Il veut (yaf'alu ma yurid) en ne prévenant pas les guerres entre croyants. La distinction entre prophètes et le non-empêchement des guerres communautaires relèvent du même principe : Dieu organise les choses selon Sa sagesse, sans que les humains puissent en imposer les critères. La hiérarchie prophétique est voulue ; les divisions communautaires sont permises.",
              axe5_frequence: "La racine f-d-l est présente dans le Coran avec ses dérivés sous de nombreuses formes : fadl (excellence, grâce), faddala (Form II, distinguer, préférer), al-fadl al-'azim (la grâce immense), fadilan (supérieur). Dans Al-Baqara seule, on compte plus d'une dizaine d'occurrences. Le fadl divin est un concept théologique central qui désigne la grâce différenciée que Dieu accorde selon Sa volonté — ni méritée ni prévisible par les critères humains. La Form II faddala dans 2:253 est l'expression la plus explicite de cette hiérarchisation active voulue par Dieu."
            },
            "Surplus/Excedent": {
              status: "peu_probable",
              senses: [
                "fadl = ce qui reste, ce qui dépasse la quantité nécessaire",
                "surplus, excédent par rapport à un montant de référence"
              ],
              proof_ctx: "Lane's Lexicon atteste fadl = surplus, remainder, what is left over. Ce sens est réel pour la racine mais ne correspond pas au verbe faddala Form II employé ici, qui désigne une action comparative entre sujets et non un excédent quantitatif.",
              axe1_verset: "Le sens de surplus ou d'excédent ne s'applique pas au verbe faddalna dans ce contexte. Faddala est une Form II verbale qui exprime une action comparative (rendre supérieur l'un par rapport à l'autre) et non la désignation d'un excédent quantitatif. La grammaire du verset — avec la structure ba'dahum 'ala ba'd — confirme une comparaison relative, non un comptage de surplus.",
              axe2_voisins: "La construction syntaxique faddalna ba'dahum 'ala ba'd (Nous avons distingué certains sur d'autres) est incompatible avec le sens de surplus. Le rapport ba'd... 'ala ba'd est toujours un rapport de comparaison hiérarchique dans le Coran, jamais un rapport de quantité ou d'excédent.",
              axe3_sourate: "Dans Al-Baqara, le mot fadl apparaît fréquemment dans des contextes de grâce divine ou de distinction honorifique (2:47, 2:105, 2:212), jamais avec le sens d'excédent quantitatif qui relèverait d'un contexte commercial ou arithmétique.",
              axe4_coherence: "Le contexte prophétique et théologique du verset 2:253 exclut entièrement une lecture quantitative ou mercantile de fadl. Les messagers ne sont pas distingués par un surplus de biens ou de ressources mais par des qualités spirituelles et des modes de relation avec Dieu.",
              axe5_frequence: "Le sens de surplus ou d'excédent pour fadl est attesté dans des contextes économiques et matériels du Coran (2:219 sur l'aumône : ce qui dépasse les besoins). Mais dans les contextes de différenciation prophétique ou divine, fadl/faddala désigne toujours l'excellence qualitative, la grâce supérieure, jamais un excédent quantitatif."
            }
          }
        }
      },
      {
        word_key: "klm",
        position: 9,
        sense_chosen: "parler à directement, s'adresser de vive voix sans intermédiaire (parole divine directe à Moïse)",
        analysis_axes: {
          sense_chosen: "parler à directement, s'adresser de vive voix sans intermédiaire (parole divine directe à Moïse)",
          concept_chosen: "Parole/AdresseDivecte",
          concepts: {
            "Parole/AdresseDivecte": {
              status: "retenu",
              senses: [
                "blesser physiquement (sens premier de kalama, Form I — une blessure qui marque)",
                "parler à, adresser la parole directement (Form II kallama)",
                "kallama Allahu = Dieu lui a parlé directement, sans intermédiaire",
                "titre théologique : Kalim Allah = celui à qui Dieu a parlé (Moïse)"
              ],
              proof_ctx: "Lane's Lexicon: k-l-m = to wound (primary sense); kalam = speech (as something that marks, cuts through); Form II kallama = to speak to, to address in speech; kallama Allahu Muusa = God spoke to Moses directly. The Form II kallama here designates an unmediated divine address — distinct from revelation through the angel Gabriel. The title Kalim Allah (one to whom God spoke) is the theological designation of Moses in Islamic tradition.",
              axe1_verset: "Dans le verset 2:253, la formule man kallama llahu (celui à qui Dieu a parlé) est le premier critère de distinction parmi les messagers. La construction grammaticale est remarquable : c'est Dieu qui est sujet du verbe (c'est Dieu qui a parlé, pas le prophète qui a reçu), ce qui met en relief l'initiative divine dans cette communication directe. Le parfait kallama désigne un fait accompli et établi — une parole divine qui a eu lieu une fois pour toutes et dont les effets persistent. Cette désignation implicite de Moïse comme destinataire de la parole directe de Dieu est l'une des trois modalités de la révélation divine.",
              axe2_voisins: "Kallama llahu (pos=9-10) est immédiatement suivi de wa-rafa'a ba'dahum darajatin (pos=11-13) — deux formes de distinction divine juxtaposées. La parole directe de Dieu est un mode de relation unique, différent de l'élévation en rangs. Le verset construit ainsi une cartographie des faveurs prophétiques : chaque mode de distinction révèle une face différente de la relation Dieu-prophète. La parole directe (kallama) contraste avec la révélation par l'intermédiaire de Gabriel — c'est l'intimité verbale directe avec Dieu.",
              axe3_sourate: "La parole divine directe à Moïse est un thème récurrent dans Al-Baqara. Les versets 2:51-54 narrent Moïse au mont Sinaï, là où il reçoit les Tables. La mention brève de man kallama llahu en 2:253 est une référence condensée à ce récit moïsaïque développé plus tôt dans la sourate. Cette économie narrative — une simple formule pour rappeler toute une histoire — est caractéristique du style coranique qui suppose la connaissance du contexte. Le titre Kalim Allah est confirmé ailleurs dans le Coran.",
              axe4_coherence: "La cohérence entre la parole directe de Dieu à Moïse et la thématique des querelles entre communautés est tragiquement paradoxale. La communauté qui a reçu la Torah — Loi directement dictée par Dieu à travers Moïse qui lui parlait directement — est précisément l'une de celles qui divergèrent et se disputèrent après la venue des preuves. La proximité divine extrême que constitue la parole directe n'a pas préservé la communauté de la division. Cela renforce la thèse du verset sur la souveraineté de la volonté divine : même la parole directe de Dieu ne contraint pas la liberté humaine de diverger.",
              axe5_frequence: "La racine k-l-m dans le sens de parole (kalam, kalima, kallama) est fondamentale dans le Coran. La désignation de Moïse comme Kalim Allah est confirmée en 4:164 (wa-kallama Allahu Muusa taklima). Cette parole directe à Moïse est l'une des trois modalités de la révélation divine énumérées en 42:51 : par révélation, derrière un voile, ou par l'envoi d'un messager angélique. La parole directe sans voile ni intermédiaire est la forme la plus intime et la plus remarquable de la communication divine."
            },
            "Blessure/Marque": {
              status: "nul",
              senses: [
                "kalama = blesser physiquement (sens premier de la racine k-l-m)",
                "kelm = blessure, plaie"
              ],
              proof_ctx: "Lane's Lexicon atteste le sens premier de k-l-m = to wound, to make an incision. La parole (kalam) serait etymologiquement liée a la blessure — ce qui marque. Ce sens est réel pour la racine mais inapplicable dans le contexte du verset 2:253 où le sujet est Dieu et l'objet est un prophète.",
              axe1_verset: "Le sens de blessure est absolument inapplicable au verset 2:253. Le sujet du verbe kallama est Dieu (Allahu) et le contexte est celui des distinctions entre messagers. Il n'y a aucun contexte de blessure physique ou métaphorique dans ce passage.",
              axe2_voisins: "Ni le contexte immédiat (hiérarchie prophétique) ni le contexte élargi (Jésus, l'Esprit de Sainteté, les preuves manifestes) ne permettent une lecture du verbe kallama dans le sens de blesser. Le sens de parole directe est le seul cohérent avec l'ensemble du passage.",
              axe3_sourate: "Dans Al-Baqara, la racine k-l-m apparaît exclusivement dans des contextes de communication verbale (parole, discours, message). Le sens de blessure physique, attesté dans d'autres contextes arabes classiques, est absent de l'usage coranique de cette sourate.",
              axe4_coherence: "Un sens de blessure serait incohérent avec la thématique théologique du verset qui porte sur les distinctions honorifiques entre prophètes — aucune d'elles ne relève d'un rapport de blessure ou de violence physique.",
              axe5_frequence: "Le sens de blessure pour k-l-m est rare dans le Coran où la racine est presque exclusivement utilisée dans le sens de parole, discours, mot. Le terme kalam (parole) et ses dérivés sont parmi les mots les plus importants du vocabulaire islamique de la révélation et de la théologie."
            }
          }
        }
      },
      {
        word_key: "rfe",
        position: 11,
        sense_chosen: "élever activement, hisser à un niveau supérieur de rang (mouvement vertical vers le haut)",
        analysis_axes: {
          sense_chosen: "élever activement, hisser à un niveau supérieur de rang (mouvement vertical vers le haut)",
          concept_chosen: "Elevation/Exhaussement",
          concepts: {
            "Elevation/Exhaussement": {
              status: "retenu",
              senses: [
                "lever physiquement, hisser (sens premier de rafa'a — mouvement vers le haut)",
                "élever au sens spirituel et statutaire, exalter",
                "wa-rafa'a ba'dahum darajatin = Il en a élevé certains d'un/des rangs",
                "darajatin = accusatif de spécification de l'ampleur de l'élévation (rang, degré, échelon)"
              ],
              proof_ctx: "Lane's Lexicon: r-f-' = to raise, to lift up (physically first — raising a load, lifting a voice); rafa'a = he raised, he elevated; rafa'a darajatin = he elevated in degrees/ranks. The verb expresses an active upward movement — the process of elevating, not merely the static state of being high. Darajat (plural of daraja = step, degree) used as tamyiz specifies the measure of the elevation.",
              axe1_verset: "Dans le verset 2:253, wa-rafa'a ba'dahum darajatin est la deuxième forme de distinction entre messagers, après la parole directe de Dieu à Moïse. Rafa'a exprime un mouvement actif vers le haut — ce n'est pas simplement un état de hauteur mais le processus même de l'élévation. Le complément darajatin (accusatif de spécification) indique la mesure de l'élévation : plusieurs rangs ou degrés sur une échelle hiérarchique. Cette image verticale contraste avec la distinction horizontale de la parole directe — deux géographies différentes de la faveur divine.",
              axe2_voisins: "Rafa'a ba'dahum darajatin (pos=11-13) complète le tableau de la diversité prophétique : après le critère qualitatif de la parole directe (kallama), voici le critère à la fois qualitatif et quantitatif des degrés d'élévation. La hiérarchie prophétique est donc doublement dimensionnée : le mode de relation avec Dieu (parole directe vs. révélation ordinaire) et le niveau d'élévation (darajat = échelons multiples). Cette double dimension — qualité du lien et quantité de l'élévation — révèle la richesse de la différenciation divine entre ses envoyés.",
              axe3_sourate: "La notion d'élévation divine (rafa'a) est présente dans Al-Baqara notamment en 2:228 (les hommes ont un degré de plus que les femmes dans certains droits) et en 2:212 (Dieu élève qui Il veut au-dessus des autres). La racine r-f-' associée à daraja est la combinaison prophétique par excellence. Dans le Coran plus large, Idriss est élevé en un lieu élevé (rafa'ahu makanan 'aliyyan, 19:57), et Dieu élève la mention du Prophète (rafa'na laka dhikraka, 94:4). L'élévation divine est toujours un acte de grâce distinctive.",
              axe4_coherence: "La cohérence entre l'élévation de certains prophètes en rangs (rafa'a darajatin) et la formule finale du verset yaf'alu ma yurid (Dieu fait ce qu'Il veut) est profonde et cohérente. Si Dieu a élevé certains prophètes au-dessus d'autres selon Sa volonté souveraine, c'est bien parce qu'Il fait ce qu'Il veut sans devoir de justification. La même liberté souveraine s'exprime dans le non-empêchement des guerres entre croyants. Élévation prophétique et non-intervention dans les guerres communautaires partagent le même fondement théologique : la volonté divine souveraine.",
              axe5_frequence: "La racine r-f-' est fréquente dans le Coran avec des applications multiples : élévation physique des fondations (2:127, Abraham élève les fondations de la Maison), élévation du rang des croyants vertueux, élévation de la mention du Prophète. Le verbe rafa'a dans le contexte prophétique est toujours un acte de grâce divine distinctive — Dieu ne se contente pas de constater une supériorité, Il la crée en élevant activement. Cette dynamique active du rafa'a (processus d'élévation) est distincte de la simple hauteur statique."
            },
            "Exaltation/Dignite": {
              status: "probable",
              senses: [
                "exalter, honorer publiquement",
                "élévation au sens de dignité, de statut honorifique"
              ],
              proof_ctx: "Lane's Lexicon atteste rafa'a dans le sens d'honorer, d'exalter, de mentionner favorablement. Rafa'a darajatan = élever la dignité de quelqu'un. Ce sens est proche du sens retenu mais insiste sur le résultat (dignité accordée) plutôt que sur le processus (élévation active).",
              axe1_verset: "Exaltation et dignité sont des interprétations légitimes de rafa'a darajatin. Cependant, rafa'a exprime prioritairement un mouvement actif vers le haut (le processus) plutôt qu'un état résultant de dignité. Le sens retenu — élévation/exhaussement — rend mieux cette dynamique du mouvement ascendant.",
              axe2_voisins: "Dans le contexte du verset 2:253 où la hiérarchie prophétique est établie par des actes divins (faddalna, kallama, rafa'a, atayna, ayyaydnahu), le sens de processus actif (élévation) est plus cohérent avec la série d'actions divines que le sens d'état résultant (dignité).",
              axe3_sourate: "Dans Al-Baqara, rafa'a est employé avec une dimension d'action physique ou spirituelle active. La dignité (karama) est un concept différent dans le vocabulaire coranique. L'usage de darajatin (rangs, degrés) après rafa'a confirme une élévation mesurable et graduée, plutôt qu'une dignité abstraite.",
              axe4_coherence: "Le concept d'exaltation ou de dignité reste secondaire par rapport à celui d'élévation active. La dignité est un état — l'élévation est un acte. Dans un verset qui liste des actes divins envers les prophètes (distinguer, parler à, élever, accorder, soutenir), le sens actif d'élévation est préférable.",
              axe5_frequence: "La racine r-f-' dans le sens d'honorer ou d'exalter est attestée dans le Coran (94:4 : Nous avons élevé ta mention), mais le sens dominant est celui du mouvement ascendant physique ou statutaire. Exaltation peut être une traduction acceptable mais perd la dimension du mouvement vers le haut que porte rafa'a."
            }
          }
        }
      },
      {
        word_key: "byn",
        position: 18,
        sense_chosen: "preuves manifestes, signes clairs et évidents par eux-mêmes (ce qui se distingue sans ambiguïté)",
        analysis_axes: {
          sense_chosen: "preuves manifestes, signes clairs et évidents par eux-mêmes (ce qui se distingue sans ambiguïté)",
          concept_chosen: "Preuves/Manifestation",
          concepts: {
            "Preuves/Manifestation": {
              status: "retenu",
              senses: [
                "être entre, séparer, se distinguer (sens premier de bana/bayyana)",
                "être clair, être évident, se manifester",
                "bayyina = ce qui est évident par soi-même, preuve manifeste",
                "al-bayyinat = les preuves claires, les signes manifestes (pluriel défini) donnés aux prophètes"
              ],
              proof_ctx: "Lane's Lexicon: b-y-n = to be clear, to be manifest, to be distinct, to be between; bayyina = a clear proof, a manifest sign, an evident demonstration that is clear in itself; al-bayyinat = the clear proofs, the manifest signs — designating the miracles and revelations given to prophets as self-evident demonstrations of divine mission. The root sense of separation/distinction (bayyin = what stands apart clearly) underlies the meaning.",
              axe1_verset: "Dans le verset 2:253, wa-atayna 'isa bna maryama l-bayyinati (Nous avons accordé à Jésus fils de Marie les preuves manifestes) présente les miracles de Jésus comme des bayyinat — des signes dont la clarté est intrinsèque, pas seulement relative à ceux qui les voient. Les miracles de Jésus (guérison des aveugles, résurrection des morts selon la tradition) sont qualifiés de bayyinat parce qu'ils se distinguent clairement des phénomènes ordinaires, sans laisser de doute raisonnable sur leur origine divine. La bayyina est autosuffisante dans sa démonstration.",
              axe2_voisins: "Al-bayyinati (pos=18) accordée à Jésus est mise en écho avec al-bayyinatu (pos=34) qui est parvenue aux communautés qui se sont ensuite disputées. Ce parallélisme lexical interne au verset est saisissant : les mêmes preuves manifestes sont données aux prophètes et transmises aux communautés — et malgré cette clarté, les hommes divergent. La bayyina est le critère de responsabilité morale : après l'avoir reçue, aucune excuse d'ignorance n'est valable. La clarté des signes n'empêche pas l'obscurcissement humain volontaire.",
              axe3_sourate: "La racine b-y-n et ses dérivés (bayyina, bayyinat, tabayyana, mubayyin) sont très fréquents dans Al-Baqara. Les bayyinat sont données aux prophètes comme preuves de mission (2:87, 2:92, 2:211, 2:253). Dans 2:92, Moïse est venu avec les bayyinat et les Israélites ont quand même adoré le veau d'or. Ce précédent moïsaïque rend encore plus frappante la mention des bayyinat données à Jésus au 2:253 — l'histoire se répète : les preuves sont données, la divergence suit.",
              axe4_coherence: "La cohérence entre les bayyinat données à Jésus (pos=18) et celles qui sont parvenues aux communautés (pos=34) structure la logique du verset : Dieu donne les preuves manifestes aux prophètes, les prophètes les transmettent aux communautés, les communautés reçoivent ces preuves et divergent quand même. La bayyina fonctionne donc comme argument divin et comme critère de responsabilité humaine : les communautés qui divergent après avoir reçu les bayyinat sont pleinement responsables de leur divergence.",
              axe5_frequence: "La racine b-y-n dans le sens de bayyina est fondamentale dans le vocabulaire coranique de la révélation et de la responsabilité morale. La bayyina est l'argument divin irréfutable : Dieu ne laisse pas les hommes sans preuve claire. Dans le Coran, la bayyina est reçue par les prophètes (comme Jésus ici), transmise aux peuples, et devient le critère du jugement eschatologique. Ceux qui ont reçu la bayyina et l'ont ignorée ne peuvent plaider l'ignorance."
            },
            "Separation/Distance": {
              status: "peu_probable",
              senses: [
                "bana = être entre, séparer, s'éloigner",
                "bayn = l'intervalle, la séparation entre deux choses"
              ],
              proof_ctx: "Lane's Lexicon atteste b-y-n dans le sens premier de séparation, d'espace entre deux choses. Ce sens physique est réel pour la racine mais correspond au nom bayn (intervalle, séparation) et non au nom bayyina (preuve manifeste).",
              axe1_verset: "Le sens de séparation ou de distance ne s'applique pas à bayyina dans le verset 2:253. Bayyina est un nom d'état/qualité — ce qui est évident, ce qui se distingue clairement — pas un substantif désignant un espace physique entre deux objets. La forme bayyina est distincte de bayn (intervalle).",
              axe2_voisins: "Dans le contexte de l'accord des bayyinat à Jésus (atayna 'isa l-bayyinati), il s'agit clairement de signes ou de preuves données à un prophète — pas d'une séparation ou d'une distance physique. Le complément du verbe atayna (donner) ne peut être une séparation.",
              axe3_sourate: "Dans toutes les occurrences de bayyina/bayyinat dans Al-Baqara, le sens est invariablement celui de preuve claire, de signe manifeste, de démonstration évidente. Le sens de séparation physique, propre à bayn ou bayan, ne se retrouve pas dans l'usage de bayyina dans cette sourate.",
              axe4_coherence: "Un sens de séparation serait incohérent avec le contexte de dons accordés à Jésus comme prophète. Les bayyinat sont des dons (atayna), des capacités accordées par Dieu pour attester la mission prophétique — pas des espaces physiques ou des distances.",
              axe5_frequence: "La racine b-y-n a effectivement deux branches sémantiques principales dans l'arabe classique : la séparation/distance (bayn, tabayyana) et la clarté/manifestation (bayyina, bayan, mubayyin). Dans le Coran, bayyina est presque exclusivement dans le sens de clarté et de preuve manifeste. Le sens de séparation appartient à d'autres dérivés de la même racine."
            }
          }
        }
      },
      {
        word_key: "ayd",
        position: 19,
        sense_chosen: "soutenir activement, renforcer par un appui puissant (soutien divin accordé à Jésus)",
        analysis_axes: {
          sense_chosen: "soutenir activement, renforcer par un appui puissant (soutien divin accordé à Jésus)",
          concept_chosen: "Soutien/Renforcement",
          concepts: {
            "Soutien/Renforcement": {
              status: "retenu",
              senses: [
                "avoir de la force dans les bras, être puissant (sens premier de '-y-d)",
                "Form IV ayyada = accorder de la force à, soutenir activement, renforcer",
                "ayyaydnahu bi-ruhi l-qudusi = Nous l'avons soutenu par l'Esprit de Sainteté",
                "soutien actif dirigé vers l'extérieur : Dieu renforce Jésus par l'Esprit"
              ],
              proof_ctx: "Lane's Lexicon: '-y-d = to have strength in the arms, to be powerful; Form IV ayyada = to strengthen, to fortify, to support vigorously, to back up; ayyaydnahu = We supported him, We gave him strength. The Form IV is causative: not 'having strength' but 'giving strength to another, actively supporting'. The phrase bi-ruhi l-qudusi (by the Spirit of Holiness) indicates the instrument of this divine support.",
              axe1_verset: "Dans le verset 2:253, wa-ayyaydnahu bi-ruhi l-qudusi (Nous l'avons soutenu par l'Esprit de Sainteté) décrit la relation spécifique entre Dieu et Jésus. La Form IV ayyada est causative et active : non pas 'être fort' mais 'accorder une force, soutenir activement de l'extérieur'. Le sujet implicite est Dieu (Nous = pluriel de majesté), et l'objet est Jésus (hu = le). L'Esprit de Sainteté est l'instrument (bi = par/avec) de ce soutien divin. Cette forme causative indique un don actif de Dieu vers Jésus, une aide puissante extérieure.",
              axe2_voisins: "Ayyaydnahu (pos=19) suit directement atayna l-bayyinati (pos=14-18) — deux dons divins à Jésus en parallèle : les preuves manifestes et le soutien par l'Esprit. Ces deux dons sont complémentaires : les bayyinat sont les signes extérieurs de la mission, et le soutien par l'Esprit est la force intérieure ou divine qui permet à Jésus de produire ces signes. La Form IV de ayyada insiste sur le caractère actif et extérieur de ce soutien — Dieu n'est pas simplement présent, Il accorde une force réelle.",
              axe3_sourate: "La racine '-y-d dans le sens de soutien divin n'apparaît que peu de fois dans Al-Baqara mais la notion de soutien et d'aide divine est présente sous d'autres formes (nasr, ta'yid, 'aun). La Form IV ayyada est notable car elle exprime un soutien spécifiquement actif et directionnel — Dieu donne le soutien à Jésus, non à travers des circonstances favorables, mais par un moyen précis : l'Esprit de Sainteté. Cette précision instrumentale (bi-ruhi l-qudusi) est unique dans la description de la relation divine-prophétique.",
              axe4_coherence: "La cohérence entre ayyaydnahu (soutien) et bi-ruhi l-qudusi (Esprit de Sainteté) est que l'Esprit est l'instrument du soutien divin. Ce n'est pas Jésus qui possède cet Esprit par nature — c'est Dieu qui lui a accordé ce soutien par l'intermédiaire de cet Esprit. Cette lecture évite l'identification entre Jésus et l'Esprit (anthropomorphisme à rebours) et maintient la distinction entre le soutenu (Jésus) et le soutien accordé (l'Esprit par Dieu). La Form IV causative de ayyada renforce cette lecture.",
              axe5_frequence: "La racine '-y-d avec ayyada (Form IV) est utilisée dans le Coran principalement dans des contextes de soutien divin à des prophètes ou à des croyants. La notion d'appui puissant donné par Dieu est un thème récurrent — Dieu envoie des armées invisibles (3:124-125), soutient les croyants par Son aide (nasr). La Form IV ayyada est le terme technique de ce soutien actif et délibéré que Dieu accorde à ceux qu'Il choisit."
            },
            "Force/Puissance": {
              status: "probable",
              senses: [
                "ayyd = force, puissance (état d'être fort)",
                "ayyad = qui a de la force, puissant"
              ],
              proof_ctx: "Lane's Lexicon atteste '-y-d dans le sens de force, de puissance physique ou spirituelle. Le nom ayd/ayyd = force, puissance. Ce sens est réel mais correspond plutôt au nom (état) qu'au verbe causatif (action de donner la force).",
              axe1_verset: "Le sens de force ou de puissance comme état est un sens adjacent au sens retenu mais moins précis. Le verbe ayyaydnahu (Form IV accompli, première personne du pluriel) indique un acte — donner la force — et non un état de force. La Form IV est causative, ce qui indique le transfert actif de force, pas la possession d'une force.",
              axe2_voisins: "La construction ayyaydnahu bi (Nous l'avons soutenu par...) indique clairement un acte directionnel avec un instrument — Dieu donne la force à Jésus par l'Esprit. C'est le processus de renforcement, non l'état de puissance, qui est décrit.",
              axe3_sourate: "Dans le contexte de la hiérarchie prophétique et des dons divins (atayna, ayyaydnahu), le sens d'acte de soutien actif est plus cohérent que le sens statique de puissance. Les autres verbes du même passage (faddalna, kallama, rafa'a, atayna) sont tous des actes divins actifs.",
              axe4_coherence: "Force et puissance comme états décrivent le résultat du soutien divin, pas l'acte lui-même. Dans un verset qui liste des actes divins accomplis envers les prophètes, le sens actif (soutenir, renforcer) est préférable au sens statique (force, puissance).",
              axe5_frequence: "La racine '-y-d dans le Coran est presque exclusivement utilisée sous la Form IV ayyada (acte de soutenir) dans des contextes de soutien divin. Le nom ayd (force) est moins fréquent dans les contextes prophétiques. Le sens d'acte de soutien actif est dominant dans l'usage coranique de cette racine."
            }
          }
        }
      },
      {
        word_key: "rwH",
        position: 20,
        sense_chosen: "esprit, principe vital divin (force spirituelle invisible qui anime et guide)",
        analysis_axes: {
          sense_chosen: "esprit, principe vital divin (force spirituelle invisible qui anime et guide)",
          concept_chosen: "Esprit/PrincipeVital",
          concepts: {
            "Esprit/PrincipeVital": {
              status: "retenu",
              senses: [
                "souffle d'air, vent doux, brise (sens premier physique de ruh)",
                "esprit, âme, principe vital (ce qui anime les êtres vivants)",
                "repos, aisance, miséricorde (sens élargi de rawh)",
                "ruhi l-qudusi = l'Esprit de Sainteté/Pureté — force spirituelle divine accordée à Jésus"
              ],
              proof_ctx: "Lane's Lexicon: r-w-H = breath of wind, gentle breeze (physical first); ruh = spirit, soul, animating principle of life; rawh = rest, ease, mercy. In Quranic usage, ruh designates the divine animating force (4:171 ruh min Allah, spirit from God; 2:87 ruhi l-qudus, Spirit of Holiness). Here ruhi l-qudusi = the Spirit of Holiness/Purity — a divine spiritual force granted to Jesus, not a mere breath of air.",
              axe1_verset: "Dans le verset 2:253, bi-ruhi l-qudusi (par l'Esprit de Sainteté) désigne la force ou le moyen par lequel Dieu a soutenu Jésus. Le ruh ici n'est pas un souffle physique mais un principe spirituel divin — une force invisible que Dieu accorde à Jésus pour le soutenir dans sa mission. La construction ruh + qudus (état construit : l'Esprit de la Sainteté) indique une entité spirituelle qualifiée par la pureté divine. Cette entité n'est pas identifiée à Jésus lui-même mais est accordée à Jésus par Dieu comme instrument de soutien.",
              axe2_voisins: "Ruhi l-qudusi (pos=20-21) est l'instrument du soutien accordé par ayyaydnahu (pos=19). La structure bi-ruhi l-qudusi (par l'Esprit de Sainteté) indique un moyen, un instrument — Dieu soutient Jésus par le biais de cet Esprit. Le ruh est donc distinct de Jésus (c'est l'instrument du soutien) et distinct de Dieu (c'est ce que Dieu utilise pour soutenir). Cette position intermédiaire de l'Esprit comme instrument divin est théologiquement importante pour éviter à la fois l'identification de l'Esprit à Jésus et son identification à Dieu.",
              axe3_sourate: "La mention de ruhi l-qudus en 2:253 renvoie directement à 2:87 (Nous avons donné à Jésus fils de Marie les preuves manifestes et Nous l'avons soutenu par l'Esprit de Sainteté). Le verset 2:253 reprend presque mot pour mot 2:87, créant un écho délibéré au sein de la sourate. Cette répétition souligne l'importance du thème : le ruh al-qudus est la marque distinctive de la mission de Jésus dans Al-Baqara. Ailleurs dans le Coran, le ruh désigne le principe vital accordé à l'homme (32:9) et la force divine dans la révélation (42:52).",
              axe4_coherence: "La cohérence entre ruh (esprit/principe vital) et qudus (sainteté/pureté) est celle d'une force spirituelle qualifiée par la pureté divine. L'Esprit de Sainteté n'est pas un esprit parmi d'autres — sa qualité de qudus (pureté radicale) indique qu'il émane de la sphère divine. Accorder à Jésus le soutien par cet Esprit de Sainteté le distingue des autres prophètes qui ont reçu d'autres types de soutien. C'est une marque distinctive spéciale de la relation de Dieu avec Jésus dans le Coran.",
              axe5_frequence: "La racine r-w-H est présente dans le Coran dans de nombreux contextes : le ruh comme principe vital humain (15:29, 32:9), le ruh comme moyen de révélation (42:52), le ruhi l-qudus comme soutien accordé à Jésus (2:87, 2:253, 5:110). La polyvalence de cette racine — du souffle physique à la force spirituelle divine — illustre la richesse du vocabulaire coranique. Dans les contextes prophétiques et divins, ruh désigne invariablement une force spirituelle d'origine divine, jamais un simple souffle d'air physique."
            },
            "Souffle/Air": {
              status: "peu_probable",
              senses: [
                "ruh = souffle d'air, brise, vent doux",
                "sens physique premier de la racine r-w-H"
              ],
              proof_ctx: "Lane's Lexicon atteste r-w-H dans le sens premier physique de souffle de vent, brise, air en mouvement. Ce sens est réel pour la racine mais inapplicable dans le contexte du verset 2:253 où l'Esprit est accordé à Jésus comme soutien prophétique.",
              axe1_verset: "Le sens de souffle d'air ou de brise physique est incompatible avec le contexte du verset 2:253. Un souffle de vent ne peut être l'instrument du soutien divin accordé à un prophète dans l'exercice de sa mission. La formule ayyaydnahu bi-ruhi l-qudusi (Nous l'avons soutenu par l'Esprit de Sainteté) exige un sens spirituel.",
              axe2_voisins: "Le qualificatif qudus (sainteté, pureté) adjoint à ruh exclut tout sens purement physique. Al-qudus désigne la sphère du saint, du pur, du divin — incompatible avec un simple souffle d'air. La combinaison ruhi l-qudusi ne peut désigner qu'une entité spirituelle de nature divine.",
              axe3_sourate: "Dans toutes les occurrences de ruh dans Al-Baqara et dans le reste du Coran, le contexte est toujours spirituel ou divin lorsque ruh est accompagné de qudus ou d'une référence divine. Le sens physique de souffle s'applique uniquement à des contextes naturels (vent, respiration).",
              axe4_coherence: "Un souffle d'air physique comme instrument du soutien divin à Jésus serait incohérent avec l'ensemble du verset qui décrit des distinctions spirituelles et théologiques entre les prophètes. Le ruh al-qudus est une désignation d'une entité spirituelle divine, non d'un phénomène atmosphérique.",
              axe5_frequence: "Dans le Coran, ruh avec le sens de souffle physique est rare et toujours dans des contextes naturels ou de création. Dans les contextes prophétiques et divins — qui sont les contextes du ruhi l-qudus — ruh désigne invariablement une force spirituelle d'origine divine. Le sens physique est la racine historique mais pas l'usage coranique pertinent ici."
            }
          }
        }
      },
      {
        word_key: "xlf",
        position: 36,
        sense_chosen: "diverger, être en désaccord profond (division interne d'une communauté après la réception des preuves)",
        analysis_axes: {
          sense_chosen: "diverger, être en désaccord profond (division interne d'une communauté après la réception des preuves)",
          concept_chosen: "Divergence/DivisionApresPreuves",
          concepts: {
            "Divergence/DivisionApresPreuves": {
              status: "retenu",
              senses: [
                "rester derrière, succéder à (sens premier de khalafa — être celui qui vient après)",
                "différer de, être différent de quelqu'un",
                "Form VIII ikhtilaf = se trouver en désaccord mutuel, diverger entre soi",
                "ikhtalafuu = ils ont divergé entre eux (Form VIII réciproque — divergence interne au groupe)"
              ],
              proof_ctx: "Lane's Lexicon: kh-l-f = to be behind, to succeed, to come after; to differ from; Form VIII ikhtilaf = to differ among themselves, to be at variance, to disagree, to be in dispute with one another — the Form VIII expresses reflexive or reciprocal action. Ikhtalafuu = they fell into disagreement among themselves after having the same proofs. The form emphasizes internal division, not external opposition.",
              axe1_verset: "Dans le verset 2:253, wa-lakini khtalafuu (Mais ils divergèrent) est le pivot dramatique du verset. C'est le fait humain fondamental qui explique les guerres entre croyants. La structure argumentative est précise : Dieu aurait pu empêcher les guerres (law sha'a llahu) — mais les hommes ont divergé (khtalafuu) — et certains crurent tandis que d'autres nièrent. La divergence humaine est le maillon central de la chaîne causale. Elle n'est pas attribuée à Dieu mais aux hommes eux-mêmes, même si Dieu aurait pu l'empêcher.",
              axe2_voisins: "Ikhtalafuu (pos=36) est introduit par wa-lakini (Mais, pos=35) — adversatif fort qui marque le pivot : les preuves sont venues (fa-min-ba'di ma ja'at-humu l-bayyinatu, pos=32-34) et pourtant... divergence. Suit immédiatement la description de cette divergence : certains crurent (amana, pos=39) et d'autres nièrent (kafara, pos=42). La Form VIII réciproque est parfaitement choisie : la divergence est interne au groupe qui a reçu les mêmes preuves — c'est une fracture entre semblables, non une opposition entre étrangers.",
              axe3_sourate: "Le thème de l'ikhtilaf (divergence, désaccord) est central dans Al-Baqara qui narre les divisions entre les communautés religieuses ayant reçu des révélations. En 2:113, les Juifs disent que les Chrétiens ne sont rien et vice-versa. En 2:145, ils ne suivront pas la direction de l'autre. En 2:176, ceux qui cachent le Livre sont dans un schisme profond. Le verset 2:253 offre la synthèse théologique de ces divergences : elles sont humaines, elles surviennent après la réception des preuves claires, et elles auraient pu être évitées si Dieu l'avait voulu.",
              axe4_coherence: "La cohérence entre ikhtalafuu (ils divergèrent) et la double formule wa-law sha'a llahu (Si Dieu avait voulu, x2) est la clé théologique du verset. Dieu aurait pu empêcher la divergence et donc les guerres — mais Il ne l'a pas fait. La divergence humaine est réelle (les hommes ont effectivement divergé, khtalafuu) et permise (Dieu aurait pu l'empêcher mais ne l'a pas fait). Cette tension entre liberté humaine et souveraineté divine est le grand paradoxe que le verset formule avec précision.",
              axe5_frequence: "La racine kh-l-f avec ses dérivés (khalafa, ikhtilaf, mukhtalif, khilafa) est très fréquente dans le Coran. L'ikhtilaf est souvent présenté comme la source principale des malheurs des communautés religieuses. En 3:105, le Coran avertit : ne soyez pas comme ceux qui divergèrent (ikhtalafuu) après que les preuves claires leur furent venues. Ce verset de la Famille d'Imran fait écho direct au 2:253 — même vocabulaire, même structure, même avertissement eschatologique sur les conséquences de la divergence."
            },
            "Succession/Heritage": {
              status: "peu_probable",
              senses: [
                "khalafa = succéder à, venir après quelqu'un",
                "khilafa = succession, califat (sens politique-religieux)"
              ],
              proof_ctx: "Lane's Lexicon atteste kh-l-f dans le sens premier de rester derrière, de succéder à. Khalafa = il a succédé à, il est venu après. Ce sens est le sens premier de la racine mais ce n'est pas la forme utilisée ici — ikhtilaf (Form VIII) n'est pas la succession mais le désaccord.",
              axe1_verset: "La Form VIII ikhtilaf ne désigne pas la succession (khalafa, Form I) mais le désaccord mutuel. Les deux sens sont issus de la même racine mais de formes verbales différentes avec des sens distincts. Ikhtalafuu = ils ont divergé entre eux, pas ils se sont succédé les uns aux autres.",
              axe2_voisins: "Le contexte du verset — les conflits et guerres entre communautés après la réception des preuves — exige un sens de désaccord ou de conflit, pas de succession chronologique. La Form VIII avec sa dimension réciproque confirme que c'est un désaccord interne, pas une succession temporelle.",
              axe3_sourate: "Dans Al-Baqara, lorsque la racine kh-l-f est utilisée dans le sens de succession (2:30 : Je vais établir un lieutenant sur la terre — khalifa = successeur), la forme est différente. Ikhtilaf est toujours dans le sens de désaccord, de divergence dans cette sourate.",
              axe4_coherence: "Un sens de succession serait incohérent avec la logique du verset. La structure 'Dieu aurait pu empêcher — mais ils divergèrent' exige un sens de désaccord actif, pas de simple succession temporelle. Les guerres naissent de désaccords, pas de successions.",
              axe5_frequence: "La racine kh-l-f a deux branches sémantiques principales dans le Coran : la succession (khalifa, khilafa) et le désaccord (ikhtilaf, mukhtalifun). Ces deux branches sont clairement distinctes dans l'usage coranique. La Form VIII ikhtilaf appartient invariablement à la branche du désaccord et de la divergence."
            }
          }
        }
      }
    ],
    daily_phrases: []
  }
};

async function main() {
  const data = verseData[253];

  // Delete existing VWAs for this verse to avoid duplicates
  const { error: delErr } = await supabase
    .from('verse_word_analyses')
    .delete()
    .eq('verse_id', data.verse_id);
  if (delErr) console.warn('DELETE VWA warning:', delErr.message);
  else console.log('Existing VWAs deleted for verse_id=' + data.verse_id);

  const { error: veErr } = await supabase.from('verse_analyses').update({
    translation_arab: data.translation_arab,
    full_translation: data.full_translation,
    translation_explanation: data.translation_explanation,
    segments: data.segments
  }).eq('id', data.analysis_id);
  if (veErr) { console.error('verse_analyses ERROR:', veErr.message); return; }
  console.log('verse_analyses updated (V253)');

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
  console.log('DONE V253 TERMINE');
}
main().catch(console.error);
