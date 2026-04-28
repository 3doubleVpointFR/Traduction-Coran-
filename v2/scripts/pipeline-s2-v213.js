const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// =====================================================
// PIPELINE SOURATE 2 — VERSET 213
// verse_id=220, analysis_id=579
// "kana al-nasu ummatan wahidatan fa-ba'atha Allahu al-nabiyyina
//  mubashshirina wa-mundhirina wa-anzala ma'ahum al-kitaba bi-al-haqqi
//  li-yahkuma bayna al-nasi fima ikhtalafuu fihi
//  wa-ma ikhtalafu fihi illa alladhina utuhu min ba'di ma ja'atahum al-bayyinatu
//  baghyan baynahum fa-hada Allahu alladhina amanu li-ma ikhtalafuu fihi
//  min al-haqqi bi-idhnihi wa-Allahu yahdi man yasha'u ila siratin mustaqimin"
// =====================================================

const verseData = {
  213: {
    verse_id: 220,
    analysis_id: 579,
    translation_arab: "Les gens formaient une seule communaute. Dieu a envoye les prophetes — annonciateurs et avertisseurs — et a fait descendre avec eux le Livre selon la verite pour juger entre les gens dans ce ou ils divergeaient. Et seuls divergerent ceux a qui il fut apporte, apres que les preuves leur furent venues, par transgression entre eux. Dieu a alors guide les croyants vers ce qu'ils avaient diverge de la verite, avec Sa permission. Dieu guide qui Il veut vers un chemin droit.",
    full_translation: "Les gens formaient (a l'origine) une seule communaute (croyante). Puis, (apres leurs divergences,) Allah envoya des prophetes comme annonciateurs et avertisseurs; et Il fit descendre avec eux le Livre contenant la verite, pour regler parmi les gens leurs divergences. Mais, ce sont ceux-la memes a qui il avait ete apporte, qui se mirent a en disputer, apres que les preuves leur furent venues, par esprit de rivalite! Puis Allah, de par Sa Grace, guida ceux qui crurent vers cette Verite sur laquelle les autres disputaient. Et Allah guide qui Il veut vers le chemin droit.",
    translation_explanation: `§DEMARCHE§
Le verset 213 est un verset de theologie de l'histoire — il explique pourquoi les prophetes ont ete envoyes et comment les divergences sont nees. La structure est narrative : etat initial (communaute unie) → probleme (divergences) → solution divine (prophetes + Livre) → complication (divergences internes par transgression) → resolution (guidance divine pour les croyants).

Le verbe **kana** est un accompli 3MS de la racine k-w-n (verbe d'etat : etre/exister). « kana al-nasu ummatan wahidatan » = les gens etaient une seule communaute. L'accompli marque un etat passe revolu — les gens ETAIENT une communaute unique, ils ne le sont plus (la divergence est venue). C'est un rappel de l'unite originelle perdue.

Le nom **al-nasu** est un nom defini nominatif de la racine n-w-s. Le Lane's donne : les gens, les humains, le peuple, l'humanite. Le defini al-nas designe l'humanite en general — pas un groupe specifique mais tous les humains.

Le nom **ummatan** est un accusatif indefini de la racine a-m-m. Le Lane's donne : communaute, nation, groupe uni par un lien commun, guide/modele, direction. L'umma est une communaute structuree par un lien — croyance commune, origine commune, direction commune.

L'adjectif **wahidatan** est un accusatif indefini feminin de la racine w-h-d. Le Lane's donne : un, unique, seul, indivisible. Wahida = une seule — le chiffre un applique a l'umma. L'unite originelle des gens est le point de depart de l'histoire.

Le verbe **ba'atha** est un accompli 3MS de la racine b-'-th. Le Lane's donne : envoyer, susciter, reveiller, ressusciter, lever, mettre en mouvement. Le ba'th est l'envoi actif — Dieu envoie les prophetes comme il envoie un messager. L'accompli marque l'action divine historique comme accomplie.

Le nom **al-nabiyyina** est un nom defini accusatif pluriel de la racine n-b-'. Le Lane's donne : prophete, annonciateur, celui qui annonce les nouvelles divines. Le nabi est celui qui annonce — sa fonction est la communication de l'information divine. L'article al- definit l'ensemble des prophetes comme categorie connue.

Le participe **mubashshirina** est un pluriel masculin de la racine b-sh-r (Form II participatif actif). Le Lane's donne : annonciateur de bonnes nouvelles, porteur de joie. Le mubash-shir apporte la bonne nouvelle — il est l'annonciateur de la recompense et du salut pour ceux qui suivent.

Le participe **mundhirina** est un pluriel masculin de la racine n-dh-r (Form IV participatif actif). Le Lane's donne : avertisseur, celui qui met en garde. Le mundhir est celui qui previent du danger — il est l'avertisseur du chatiment pour ceux qui refusent.

Le verbe **anzala** est un accompli 3MS de la racine n-z-l (Form IV). Le Lane's donne en Form IV : faire descendre, envoyer d'en haut, reveler. L'inzal est la descente deliberee d'en haut vers le bas — la revelation qui descend du divin vers l'humain.

Le nom **al-kitaba** est un nom defini accusatif de la racine k-t-b. Le Lane's donne : ecrit, livre, lettre, texte, inscription. Le Kitab est le Livre — la revelation ecrite qui accompagne les prophetes.

Le nom **al-haqqi** est un nom defini genitif de la racine h-q-q. Le Lane's donne : verite, realite, ce qui est etabli avec certitude. Le haqq est la verite dans son sens le plus fort — non pas seulement ce qui est vrai mais ce qui est reellement existant, ce qui ne peut pas etre nie.

Le verbe **li-yahkuma** est un subjonctif 3MS de la racine h-k-m (Form I). Le Lane's donne : juger, decider, exercer l'autorite. La construction li-yahkuma (pour qu'il juge) est la finalite de la descente du Livre — le Livre est envoye POUR JUGER. Le sujet de yahkuma est le Livre (al-kitab, pronom implicite).

La racine **khlf** du verbe **ikhtalafuu** : accompli 3MP de la racine kh-l-f (Form VIII). Le Lane's donne : diverger, differ, etre en desaccord, se succeder. L'ikhtilaf est la divergence — les gens ne s'accordent plus sur une meme direction.

Le participe **utuhu** est un accompli passif 3MP + suffixe 3MS (utu = donnes, lui = le Livre) de la racine a-t-y. Ce sont ceux a qui le Livre a ete apporte qui ont diverge — non pas ceux qui ne l'avaient pas, mais ceux qui l'avaient recu.

Le nom **baghyan** est un accusatif indefini de la racine b-gh-y. Le Lane's donne : transgression, injustice, exces, depasser les limites. Le baghy est la transgression des limites — aller au-dela de ce qui est permis. La divergence par baghy est une divergence motivee par la transgression (pouvoir, jalousie, rivalite), pas par l'ignorance.

Le verbe **fa-hada** est un accompli 3MS de la racine h-d-y. Le Lane's donne : guider, montrer la direction, conduire vers le but. La hidaya est la guidance divine — Dieu guide vers la verite.

Le nom **bi-idhnihi** : bi (preposition : avec/par) + idhn (permission, autorisation) + hi (suffixe : sa). « Avec Sa permission » = bi-idhnihi. Le idhn est l'autorisation divine — la guidance se fait avec la permission/autorisation de Dieu.

Le nom **siratin** est un nom indefini genitif de la racine s-r-t. Le Lane's donne : chemin, voie, route. Le sirat est le chemin — la direction a suivre.

L'adjectif **mustaqimin** est un adjectif indefini genitif de la racine q-w-m (Form X participatif actif). Le Lane's donne : droit, rectiligne, qui se tient droit. Mustaqim = droit, ce qui va en ligne directe vers son but.

§JUSTIFICATION§
**communaute** — « umma » est traduit par « communaute » car c'est un groupe structure par un lien commun. L'alternative « nation » (Hamidullah) est possible mais moins precise — une nation implique une dimension politique/territoriale que le mot umma n'a pas necessairement.

**seule** — « wahida » est traduit par « seule » car c'est l'adjectif numerique « une ». L'alternative « unique » est aussi valide.

**a envoye** — « ba'atha » est traduit par « a envoye » car c'est le sens actif d'envoi/mission. L'alternative « suscita » capture la dimension de mise en mouvement mais est moins naturelle.

**prophetes** — « al-nabiyyina » est traduit par « prophetes » car c'est la traduction etablie. L'alternative « annonciateurs » (sens etymologique) serait trop proche de « mubashshirina ».

**annonciateurs** — « mubashshirina » est traduit par « annonciateurs » car c'est leur fonction: annoncer la bonne nouvelle. L'alternative « evangelistes » est trop specifiquement chretienne.

**avertisseurs** — « mundhirina » est traduit par « avertisseurs » car c'est leur fonction: avertir du danger. L'alternative « prophetes de malheur » est pejoratif.

**a fait descendre** — « anzala » est traduit par « a fait descendre » car la Form IV signifie causer la descente. L'alternative « a revele » (Hamidullah) est une interpretation theologique; « fait descendre » est plus literal et neutre.

**pour juger** — « li-yahkuma » = la finalite est le jugement. « Pour regler » (Hamidullah) affaiblit — yahkuma est bien juger/trancher, pas seulement regler.

**transgression** — « baghyan » est traduit par « transgression » car le baghy est fondamentalement le depassement des limites etablies. L'alternative « esprit de rivalite » (Hamidullah) est une interpretation — le texte dit juste « transgression entre eux ».

**avec Sa permission** — « bi-idhnihi » est traduit par « avec Sa permission » car l'idhn est l'autorisation, pas la grace. L'alternative « par Sa grace » (Hamidullah) est une interpretation — idhn = permission/autorisation, pas grace (rahma ou ni'ma).

§CRITIQUE§
Hamidullah traduit « bi-idhnihi » par « de par Sa Grace ». Mais l'idhn en arabe signifie litteralement la permission ou l'autorisation — c'est l'acte de permettre quelque chose. Le Lane's donne : permission, autorisation, consentement, ordre. Ce n'est pas la grace (rahma) ni le bienfait (ni'ma) — c'est l'autorisation. La guidance des croyants s'est faite « avec la permission de Dieu » — Dieu a autorise cette guidance, l'a permise, l'a ordonnee. Traduire par « grace » efface la dimension d'autorisation active pour une notion plus passive de faveur divine. Cette distinction compte : la guidance divine n'est pas seulement une faveur accordee passivement mais un acte autorise et voulu.

Hamidullah traduit « baghyan baynahum » par « par esprit de rivalite ». Le texte dit « baghyan » (transgression, injustice, exces). L'esprit de rivalite est une interpretation du motif de la transgression — mais le texte ne specifie pas le motif psychologique, il dit simplement que c'etait par transgression. En ajoutant « esprit de », Hamidullah psychologise ce qui est presente comme un acte moral (transgression des limites).`,
    segments: [
      { fr: "Etaient", pos: "verbe", phon: "kana", arabic: "كَانَ", is_particle: true, position: 0 },
      { fr: "les gens", pos: "nom", phon: "al-nasu", arabic: "ٱلنَّاسُ", word_key: "nws", is_particle: false, sense_retenu: "humanite/peuple", position: 1 },
      { fr: "une seule", pos: "adj", phon: "wahidatan", arabic: "وَٰحِدَةً", word_key: "whd", is_particle: false, sense_retenu: "unicite/unite", position: 2 },
      { fr: "communaute", pos: "nom", phon: "ummatan", arabic: "أُمَّةً", word_key: "umm", is_particle: false, sense_retenu: "communaute/nation", position: 3 },
      { fr: "alors Dieu a envoye", pos: "verbe", phon: "fa-ba'atha Allahu", arabic: "فَبَعَثَ ٱللَّهُ", word_key: "beth", is_particle: false, sense_retenu: "envoi/mission", position: 4 },
      { fr: "les prophetes", pos: "nom", phon: "al-nabiyyina", arabic: "ٱلنَّبِيِّـۧنَ", word_key: "nby", is_particle: false, sense_retenu: "prophetie/annonce", position: 5 },
      { fr: "annonciateurs", pos: "part", phon: "mubashshirina", arabic: "مُبَشِّرِينَ", word_key: "bshr", is_particle: false, sense_retenu: "annonce/rejouissance", position: 6 },
      { fr: "et avertisseurs", pos: "part", phon: "wa-mundhirina", arabic: "وَمُنذِرِينَ", word_key: "ndhr", is_particle: false, sense_retenu: "avertissement/mise en garde", position: 7 },
      { fr: "et a fait descendre", pos: "verbe", phon: "wa-anzala", arabic: "وَأَنزَلَ", word_key: "nzl", is_particle: false, sense_retenu: "descente/revelation", position: 8 },
      { fr: "avec eux", phon: "ma'ahum", arabic: "مَعَهُمُ", is_particle: true, position: 9 },
      { fr: "le Livre", pos: "nom", phon: "al-kitaba", arabic: "ٱلْكِتَـٰبَ", word_key: "ktb", is_particle: false, sense_retenu: "livre/ecrit", position: 10 },
      { fr: "selon la verite", pos: "nom", phon: "bi-al-haqqi", arabic: "بِٱلْحَقِّ", word_key: "hqq", is_particle: false, sense_retenu: "verite/realite", position: 11 },
      { fr: "pour qu'il juge", pos: "verbe", phon: "li-yahkuma", arabic: "لِيَحْكُمَ", word_key: "hkm", is_particle: false, sense_retenu: "jugement/decision", position: 12 },
      { fr: "entre les gens", phon: "bayna al-nasi", arabic: "بَيْنَ ٱلنَّاسِ", is_particle: true, position: 13 },
      { fr: "dans ce ou ils divergeaient", pos: "verbe", phon: "fima ikhtalafuu fihi", arabic: "فِيمَا ٱخْتَلَفُوا۟ فِيهِ", word_key: "khlf", is_particle: false, sense_retenu: "succession/difference", position: 14 },
      { fr: "Et seuls divergerent en lui", phon: "wa-ma ikhtalafu fihi illa", arabic: "وَمَا ٱخْتَلَفَ فِيهِ إِلَّا", is_particle: true, position: 15 },
      { fr: "ceux a qui il fut apporte", pos: "verbe", phon: "alladhina utuhu", arabic: "ٱلَّذِينَ أُوتُوهُ", word_key: "aty", is_particle: false, sense_retenu: "apporter/donner", position: 16 },
      { fr: "apres que vinrent a eux les preuves", pos: "nom", phon: "min ba'di ma ja'atahum al-bayyinatu", arabic: "مِنۢ بَعْدِ مَا جَآءَتْهُمُ ٱلْبَيِّنَـٰتُ", word_key: "byn", is_particle: false, sense_retenu: "clarte/evidence", position: 17 },
      { fr: "par transgression entre eux", pos: "nom", phon: "baghyan baynahum", arabic: "بَغْيًۢا بَيْنَهُمْ", word_key: "bghy", is_particle: false, sense_retenu: "transgression/injustice", position: 18 },
      { fr: "Dieu a guide les croyants", pos: "verbe", phon: "fa-hada Allahu alladhina amanu", arabic: "فَهَدَى ٱللَّهُ ٱلَّذِينَ ءَامَنُوا۟", word_key: "hdy", is_particle: false, sense_retenu: "guidance/direction", position: 19 },
      { fr: "vers ce dont ils avaient diverge de la verite", phon: "li-ma ikhtalafuu fihi min al-haqqi", arabic: "لِمَا ٱخْتَلَفُوا۟ فِيهِ مِنَ ٱلْحَقِّ", is_particle: true, position: 20 },
      { fr: "avec Sa permission", pos: "nom", phon: "bi-idhnihi", arabic: "بِإِذْنِهِۦ", word_key: "adhn", is_particle: false, sense_retenu: "permission/autorisation", position: 21 },
      { fr: "Et Dieu guide qui Il veut", pos: "verbe", phon: "wa-Allahu yahdi man yasha'u", arabic: "وَٱللَّهُ يَهْدِى مَن يَشَآءُ", word_key: "hdy", is_particle: false, sense_retenu: "guidance/direction", position: 22 },
      { fr: "vers un chemin droit", pos: "nom", phon: "ila siratin mustaqimin", arabic: "إِلَىٰ صِرَٰطٍ مُّسْتَقِيمٍ", word_key: "sbl", is_particle: false, sense_retenu: "voie/direction", position: 23 }
    ],
    vwa: [
      {
        word_key: "nws",
        position: 1,
        sense_chosen: "humanite/peuple",
        analysis_axes: {
          sense_chosen: "humanite/peuple",
          concept_chosen: "Humanite/Peuple",
          concepts: {
            "Humanite/Peuple": {
              status: "retenu",
              senses: ["gens", "humanite", "peuple", "les humains"],
              proof_ctx: "Le nom al-nasu est un nom defini nominatif de la racine n-w-s. Le Lane's donne : gens, humains, peuple, l'humanite dans son ensemble. Le defini al-nas designe l'humanite en general — pas un groupe specifique mais tous les humains. Au nominatif, al-nas est le sujet de kana (etaient) — c'est l'humanite qui etait une seule communaute.",
              axe1_verset: "L'humanite (al-nas) est le sujet de l'histoire racontee dans le verset. Le champ lexical (communaute, prophetes, Livre, divergence, guidance) montre que c'est l'humanite entiere qui est concernee — pas un peuple particulier mais tous les hommes. L'histoire de l'unite puis de la divergence est l'histoire de l'humanite universelle.",
              axe2_voisins: "Le verset 211 interpellait les Fils d'Israel (bani isra'ila). Le verset 213 elargit a l'humanite entiere (al-nas). La sequence montre un mouvement du particulier (Fils d'Israel) a l'universel (humanite). Les Fils d'Israel sont un exemple dans l'histoire universelle de l'humanite qui reçoit les signes et diverge.",
              axe3_sourate: "La racine n-w-s et le mot al-nas sont tres frequents dans la sourate al-Baqarah. La sourate s'adresse a l'humanite (ya ayyuha al-nas — O humanite) et raconte l'histoire de l'humanite avec les prophetes. Le mot al-nas est le destinataire universel de la guidance.",
              axe4_coherence: "La racine n-w-s apparait environ 241 fois dans le Coran. Al-nas est l'une des designations les plus frequentes de l'humanite. La derniere sourate du Coran (Al-Nas, Sourate 114) porte ce nom. Le Coran s'adresse a l'humanite tout entiere — pas a un peuple elu mais a toute la creation humaine.",
              axe5_frequence: "Pour la mission du khalifa, l'humanite (al-nas) est la communaute qu'il sert. Le khalifa n'est pas khalifa d'un groupe ethnique ou national mais de l'humanite — sa mission est universelle. Le verset 213 rappelle que la guidance divine s'adresse a toute l'humanite, et la mission du khalifa suit le meme perimetre."
            }
          }
        }
      },
      {
        word_key: "whd",
        position: 2,
        sense_chosen: "unicite/unite",
        analysis_axes: {
          sense_chosen: "unicite/unite",
          concept_chosen: "Unicite/Unite",
          concepts: {
            "Unicite/Unite": {
              status: "retenu",
              senses: ["un", "unique", "seul", "indivisible", "unite"],
              proof_ctx: "Le mot wahidatan est un adjectif accusatif indefini feminin de la racine w-h-d. Le Lane's donne : un, unique, seul, indivisible, sans equivalent. La wahda est l'unite — l'etat d'etre un seul. Dans le contexte, l'humanite etait « ummatan wahidatan » = une seule communaute. L'unite est l'etat initial avant la divergence.",
              axe1_verset: "L'unite (wahida) de la communaute originelle est le point de reference de toute l'histoire du verset. La divergence est une rupture de cette unite. Le Livre est envoye pour juger dans ce ou ils ont diverge — pour restaurer ou maintenir l'unite. La guidance finale (fa-hada Allahu) reconduit les croyants vers la verite de ce ou ils avaient diverge — vers l'unite originelle.",
              axe2_voisins: "Le verset 213 presente l'unite originelle comme l'etat paradisiaque de l'humanite. La divergence (ikhtilaf) est la chute de cette unite. Les prophetes et le Livre sont envoyes pour traiter cette chute — pas pour creer quelque chose de nouveau mais pour restaurer l'unite perdue.",
              axe3_sourate: "La racine w-h-d est centrale dans le Coran pour l'unicite divine (tawhid) et l'unite humaine. En 2:213, l'humanite etait une seule communaute — c'est le modele de l'unite. En 2:163, Dieu est un seul Dieu (Ilahun wahidun). L'unite divine (tawhid) et l'unite humaine (umma wahida) sont liees dans le projet coranique.",
              axe4_coherence: "La racine w-h-d apparait environ 64 fois dans le Coran. L'unite (wahda) est un concept fondamental — l'unite divine (tawhid) est le principe theologique central, et l'unite humaine (umma wahida) en est la contrepartie sociale et historique. La divergence est toujours presentee comme une rupture regrettable d'une unite anterieure.",
              axe5_frequence: "Pour la mission du khalifa, l'unite est l'horizon de la mission. Le khalifa travaille a restaurer l'unite — entre les croyants, entre les hommes. La wahda (unite) est le projet civilisationnel du khalifa, pas la division. La divergence est un echec a corriger, l'unite est le succes a viser."
            }
          }
        }
      },
      {
        word_key: "umm",
        position: 3,
        sense_chosen: "communaute/nation",
        analysis_axes: {
          sense_chosen: "communaute/nation",
          concept_chosen: "Communaute/Nation",
          concepts: {
            "Communaute/Nation": {
              status: "retenu",
              senses: ["communaute", "nation", "groupe uni", "peuple partageant un lien commun"],
              proof_ctx: "Le nom ummatan est un accusatif indefini de la racine a-m-m. Le Lane's donne : communaute, nation, groupe d'hommes unis par une religion commune ou un lien commun, guide/imam, direction vers laquelle on se tourne, temps/periode. L'umma est fondamentalement le groupe structuré par un lien commun — croyance, origine, direction. L'accusatif le place comme predicat de kana (les gens etaient [une] communaute).",
              axe1_verset: "La communaute (umma) est l'unite structurelle de l'humanite dans son etat originel. Une seule communaute (ummatan wahidatan) — tous les humains partageaient le meme lien. La divergence (ikhtilaf) a rompu cette structure communautaire. Les prophetes sont envoyes pour restaurer l'ordre communautaire.",
              axe2_voisins: "L'umma de 2:213 (communaute unie) sera contrastee avec les divergences qui suivent. La sequence montre que l'umma est un ideal fragile — elle peut se briser par la transgression. Le khalifa doit maintenir l'umma, l'empecher de se diviser.",
              axe3_sourate: "La racine a-m-m et le mot umma sont frequents dans la sourate al-Baqarah. En 2:128, Abraham prie pour une umma soumise. En 2:134, 141, chaque umma aura ses propres actes. En 2:143, les croyants sont une umma modele. La sourate construit une theologie de l'umma comme projet divin.",
              axe4_coherence: "La racine a-m-m apparait environ 52 fois dans le Coran pour le sens d'umma. L'umma est le projet social du Coran — non pas l'individu isole mais la communaute organisee autour d'un lien divin. L'umma wahida de 2:213 est le modele originel; l'umma du Prophete est la tentative de restauration.",
              axe5_frequence: "Pour la mission du khalifa, l'umma est l'objet de sa mission. Le khalifa gouverne une umma — une communaute structuree par un lien divin. Sa mission est de maintenir et de developper cette communaute. L'umma wahida (unite) est l'horizon vers lequel la mission tend."
            },
            "Direction/Intention": {
              status: "nul",
              senses: ["direction", "intention", "se diriger vers"],
              proof_ctx: "Le sens de direction/intention est atteste pour la racine a-m-m (amm = se diriger vers). Mais dans la construction « ummatan wahidatan », c'est le sens de communaute qui est actif — le mot umma designe le groupe, pas la direction. Le contexte confirme: les gens etaient [un groupe = communaute], pas [une direction]."
            }
          }
        }
      },
      {
        word_key: "beth",
        position: 4,
        sense_chosen: "envoi/mission",
        analysis_axes: {
          sense_chosen: "envoi/mission",
          concept_chosen: "Resurrection/Envoi",
          concepts: {
            "Resurrection/Envoi": {
              status: "retenu",
              senses: ["envoyer", "susciter", "mettre en mouvement", "ressusciter", "reveiller"],
              proof_ctx: "Le verbe ba'atha est un accompli 3MS de la racine b-'-th. Le Lane's donne : envoyer, susciter, mettre en mouvement, exciter, reveiller, ressusciter. Le ba'th est l'acte de susciter et d'envoyer — mettre quelqu'un en mouvement depuis un etat de repos vers une mission. Dieu ba'atha les prophetes = Dieu les a suscites et envoyes. L'accompli marque l'action historique comme accomplie.",
              axe1_verset: "L'envoi des prophetes (ba'atha al-nabiyyina) est la reponse divine a la divergence de l'humanite. Apres le constat de la divergence vient la solution : Dieu envoie. Le ba'th implique un acte divin d'initiative — c'est Dieu qui met les prophetes en mouvement, ils ne sont pas venus d'eux-memes.",
              axe2_voisins: "Le verset 211 rappelait les signes donnes aux Fils d'Israel. Le verset 213 dit que ces signes sont venus avec les prophetes envoyes par Dieu. L'envoi (ba'th) des prophetes est le mecanisme de la transmission des signes. La sequence prophetes → Livre → jugement est le schema de la guidance divine.",
              axe3_sourate: "La racine b-'-th apparait dans la sourate al-Baqarah principalement pour la resurrection (ba'th = envoi/resurrection). En 2:56, Dieu ressuscite les Fils d'Israel. En 2:213, Dieu envoie les prophetes. En 2:259, la resurrection d'un mort. La racine lie l'envoi des prophetes et la resurrection des morts — deux manifestations du meme pouvoir divin de mettre en mouvement.",
              axe4_coherence: "La racine b-'-th apparait environ 67 fois dans le Coran. La double dimension envoi/resurrection est fondamentale — Dieu envoie les prophetes dans la vie et ressuscitera les morts. L'envoi des prophetes est une forme d'eveil de l'humanite — une resurrection spirituelle avant la resurrection physique.",
              axe5_frequence: "Pour la mission du khalifa, l'envoi (ba'th) rappelle que sa mission vient de Dieu. Le khalifa est suscite, envoye — il ne s'est pas designe lui-meme. Cette conscience de la mission comme envoi divin fonde l'autorite du khalifa mais aussi son humilite — il n'est que l'envoye, pas la source."
            }
          }
        }
      },
      {
        word_key: "nby",
        position: 5,
        sense_chosen: "prophetie/annonce",
        analysis_axes: {
          sense_chosen: "prophetie/annonce",
          concept_chosen: "Prophetie/Annonce",
          concepts: {
            "Prophetie/Annonce": {
              status: "retenu",
              senses: ["prophete", "annonciateur", "celui qui annonce les nouvelles divines", "prophecie"],
              proof_ctx: "Le nom al-nabiyyina est un nom defini accusatif pluriel de la racine n-b-'. Le Lane's donne : nabi = prophete, annonciateur, celui qui informe des nouvelles divines. La racine n-b-' signifie informer, annoncer, rapporter une nouvelle. Le nabi est celui qui relaie les informations divines — son role est la communication. Le pluriel al-nabiyyuna designe l'ensemble des prophetes comme categorie historique.",
              axe1_verset: "Les prophetes (al-nabiyyuna) sont les agents de l'envoi divin. Ils ont deux fonctions explicitement mentionnees : mubashshirina (annonciateurs) et mundhirina (avertisseurs). Leur envoi est la reponse a la divergence humaine. Le Livre est envoye avec eux — prophetes et Livre sont lies.",
              axe2_voisins: "Le verset 211 mentionnait les signes clairs (bayyinat) donnes aux Fils d'Israel. Le verset 213 dit que ces signes venaient avec les prophetes. La sequence signes → prophetes → Livre montre que la revelation divine est toujours mediee — Dieu envoie des intermediaires humains (prophetes) avec des supports ecrits (Livre).",
              axe3_sourate: "La racine n-b-' et le mot nabi/nabiyy sont frequents dans la sourate al-Baqarah. En 2:61, les prophetes sont tue — l'ingratitude envers les prophetes est un motif recurrent. En 2:87, 91, les Fils d'Israel rejetaient les prophetes. Les prophetes de 2:213 sont les memes victimes de 2:87, 91.",
              axe4_coherence: "La racine n-b-' apparait environ 75 fois dans le Coran pour le sens de prophete. Les prophetes sont les intermediaires entre Dieu et l'humanite — ils recoivent la revelation et la transmettent. Le Coran presente la prophetie comme une institution divine necessaire pour maintenir la guidance.",
              axe5_frequence: "Pour la mission du khalifa, les prophetes sont les modeles. Le khalifa continue dans la ligne des prophetes — pas en recevant de nouvelles revelations (la prophetie est close) mais en appliquant les enseignements des prophetes dans le gouvernement. Les prophetes ont pose le cadre, le khalifa le met en oeuvre."
            }
          }
        }
      },
      {
        word_key: "bshr",
        position: 6,
        sense_chosen: "annonce/rejouissance",
        analysis_axes: {
          sense_chosen: "annonce/rejouissance",
          concept_chosen: "Annonce/Rejouissance",
          concepts: {
            "Annonce/Rejouissance": {
              status: "retenu",
              senses: ["annoncer la bonne nouvelle", "porteur de joie", "eveil de la joie"],
              proof_ctx: "Le participe mubashshirina est un pluriel masculin accusatif de la racine b-sh-r (Form II participatif actif). Le Lane's donne : annoncer une bonne nouvelle, apporter une nouvelle qui fait changer la couleur du visage de joie (bushara), porteur de bonnes nouvelles. Le mubashshir est l'annonciateur de la bonne nouvelle — il annonce la recompense pour ceux qui suivent.",
              axe1_verset: "Les prophetes sont annonciateurs (mubashshirina) et avertisseurs (mundhirina) — les deux fonctions sont complementaires. L'annonce de la bonne nouvelle pour les suivants et l'avertissement pour les refusants constituent ensemble la mission prophetique complete. Le mubashir active l'esperance, le mundhir active la prudence.",
              axe2_voisins: "Le verset 212 mentionnait ceux qui croient et seront recompenses (au-dessus au Jour du Relevement). Le verset 213 dit que les prophetes etaient annonciateurs — ils annonçaient cette recompense. La bonne nouvelle des prophetes correspond au renversement eschatologique de 2:212.",
              axe3_sourate: "La racine b-sh-r apparait frequemment dans la sourate al-Baqarah. En 2:25, les croyants qui font le bien sont annonces de jardins. En 2:97, Gabriel est mentionne comme celui qui a apporte la revelation. Les annonciateurs (mubashshirun) de 2:213 sont les prophetes qui ont transmis la bonne nouvelle de la recompense.",
              axe4_coherence: "La racine b-sh-r apparait environ 123 fois dans le Coran. La bonne nouvelle (bushra) est un element essentiel de la mission prophetique — les prophetes n'ont pas seulement averti mais aussi annonce la recompense. Le Coran presente la revelation comme une bonne nouvelle (bushra) pour les croyants.",
              axe5_frequence: "Pour la mission du khalifa, annoncer la bonne nouvelle est une responsabilite. Le khalifa ne doit pas etre seulement un avertisseur — il doit aussi annoncer les bonnes nouvelles, motiver par l'esperance autant qu'avertir par la prudence. L'equilibre bonne nouvelle/avertissement est le modele prophetique que le khalifa continue."
            }
          }
        }
      },
      {
        word_key: "ndhr",
        position: 7,
        sense_chosen: "avertissement/mise en garde",
        analysis_axes: {
          sense_chosen: "avertissement/mise en garde",
          concept_chosen: "Avertissement/Mise en garde",
          concepts: {
            "Avertissement/Mise en garde": {
              status: "retenu",
              senses: ["avertir", "mettre en garde", "prevenir", "alerter"],
              proof_ctx: "Le participe mundhirina est un pluriel masculin accusatif de la racine n-dh-r (Form IV participatif actif). Le Lane's donne : avertir, mettre en garde contre un danger, prevenir, alerter. Le mundhir est celui qui avertit — il informe du danger pour que l'autre puisse se proteger. Complementaire du mubashshir (annonciateur de bonne nouvelle), le mundhir previent du chatiment pour ceux qui refusent.",
              axe1_verset: "Les prophetes sont avertisseurs (mundhirina) en complement de leur fonction d'annonciateurs. L'avertissement est la face negative de la mission — annonce de la recompense pour les suivants, avertissement du chatiment pour les refusants. Les deux faces sont necessaires pour que la mission soit complete.",
              axe2_voisins: "Le verset 211 concluait avec la severite de Dieu en retribution (shadidu al-'iqab). Le verset 213 dit que les prophetes etaient avertisseurs — ils avertissaient de cette retribution. L'avertissement des prophetes correspond a la retribution de 2:211.",
              axe3_sourate: "La racine n-dh-r est frequente dans la sourate al-Baqarah pour l'avertissement prophétique. En 2:119, Muhammad est envoye comme annonciateur et avertisseur (bashiran wa-nadhiran). La sourate maintient la tension entre la bonne nouvelle et l'avertissement comme les deux faces de la mission divine.",
              axe4_coherence: "La racine n-dh-r apparait environ 130 fois dans le Coran. L'avertissement (indhur) est une fonction prophetique essentielle. Le Coran presente les prophetes comme ceux qui avertissent — Muhammad est souvent decrit comme nadhir (avertisseur). L'avertissement est un acte d'amour — on n'avertit que ceux dont on se soucie.",
              axe5_frequence: "Pour la mission du khalifa, l'avertissement est une obligation. Le khalifa ne peut pas se taire devant les fautes et les dangers — il doit avertir, meme si c'est impopulaire. L'indhur est le courage de dire la verite desagreable pour le bien de la communaute."
            }
          }
        }
      },
      {
        word_key: "nzl",
        position: 8,
        sense_chosen: "descente/revelation",
        analysis_axes: {
          sense_chosen: "descente/revelation",
          concept_chosen: "Descente/Revelation",
          concepts: {
            "Descente/Revelation": {
              status: "retenu",
              senses: ["faire descendre", "envoyer d'en haut", "reveler", "descendre"],
              proof_ctx: "Le verbe anzala est un accompli 3MS de la racine n-z-l (Form IV). Le Lane's donne : faire descendre, envoyer d'en haut vers le bas. La Form IV (anzala) est causative — Dieu FAIT descendre, il cause la descente. Le nuzul est la descente depuis un lieu eleve vers le bas — dans le contexte de la revelation, c'est la descente du divin vers l'humain. L'accompli marque l'action historique comme accomplie.",
              axe1_verset: "La descente du Livre (anzala al-kitab) est parallele a l'envoi des prophetes (ba'atha al-nabiyyina). Les deux actions sont les deux dimensions de la transmission divine : les hommes (prophetes) et le texte (Livre). La descente « avec eux » (ma'ahum) lie le Livre aux prophetes — le Livre accompagne les prophetes, il n'est pas envoye separe.",
              axe2_voisins: "Le verset 210 mentionnait la venue de Dieu dans des nuages. Le verset 213 parle de la descente du Livre. La racine n-z-l dans les deux versets lie la venue divine (eschatologique) et la descente de la revelation (historique).",
              axe3_sourate: "La racine n-z-l est tres frequente dans la sourate al-Baqarah pour la descente du Coran et des revelations anterieures. En 2:4, ceux qui croient en ce qui a ete descend sur toi (unzila 'alayka) et ce qui a ete descend avant toi. La descente de la revelation est un motif fondamental de la sourate.",
              axe4_coherence: "La racine n-z-l apparait environ 293 fois dans le Coran. La Form IV (anzala) avec Dieu comme sujet est la formule standard pour la revelation divine. Le Coran lui-meme est presente comme « nazzalnahu » (descend) — la revelation est une descente.",
              axe5_frequence: "Pour la mission du khalifa, la revelation descend — elle vient d'en haut. Le khalifa ne genere pas sa propre loi mais applique ce qui a ete descend. La direction de la revelation (d'en haut vers le bas) indique la hierarchie de l'autorite — Dieu au-dessus, le Livre comme transmission, le khalifa comme executant."
            }
          }
        }
      },
      {
        word_key: "ktb",
        position: 10,
        sense_chosen: "livre/ecrit",
        analysis_axes: {
          sense_chosen: "livre/ecrit",
          concept_chosen: "Livre/Ecrit",
          concepts: {
            "Livre/Ecrit": {
              status: "retenu",
              senses: ["livre", "ecrit", "texte", "ecriture", "lettre", "inscription"],
              proof_ctx: "Le nom al-kitaba est un nom defini accusatif de la racine k-t-b. Le Lane's donne : ecrit, livre, lettre, texte, inscription. Le kitab est fondamentalement ce qui est ecrit — le support textuel de la revelation. Al-Kitab (avec article defini) dans le Coran designe la revelation divine sous forme ecrite — le Livre dans son sens absolu.",
              axe1_verset: "Le Livre (al-kitab) est l'instrument de jugement envoye avec les prophetes. Sa finalite est de juger (li-yahkuma) entre les gens dans leurs divergences. Le Livre est a la fois un texte (ecrit) et un criterium (qui tranche). La descente avec la verite (bi-al-haqqi) qualifie le Livre : il descend conforme a la verite.",
              axe2_voisins: "Les prophetes (nabiyyun) et le Livre (kitab) sont les deux instruments de la guidance divine. L'envoi des prophetes et la descente du Livre sont deux actions paralleles et complementaires. Le Livre sans prophete serait incomprehensible; le prophete sans Livre serait sans texte de reference.",
              axe3_sourate: "Al-Kitab est un terme central de la sourate al-Baqarah. Des le verset 2:2, le Coran est presente comme « le Livre » par excellence. En 2:213, le Livre est l'instrument du jugement divin. La sourate construit le Livre comme la reference absolue pour trancher les divergences.",
              axe4_coherence: "La racine k-t-b apparait environ 319 fois dans le Coran. Al-Kitab est un terme technique pour la revelation divine ecrite. Le Coran se designe lui-meme comme Kitab — le Livre. Les revelations anterieures (Torah, Evangile) sont aussi des Kutub (Livres). Le kitab est la forme permanente de la guidance.",
              axe5_frequence: "Pour la mission du khalifa, le Livre est la reference ultime. Le khalifa ne peut gouverner qu'a partir du Livre — ses decisions doivent etre conformes au Livre descend avec la verite. La gouvernance khalifale est une gouvernance livrique — elle s'appuie sur le texte revelé, pas sur le caprice."
            },
            "Obligation/Decret": {
              status: "peu_probable",
              senses: ["obligation", "decret", "prescription", "ce qui est prescrit"],
              proof_ctx: "Le sens d'obligation/prescription est atteste pour la racine k-t-b (kutiba = il a ete prescrit, en 2:183 par exemple). Mais ici le mot est al-kitab (le livre), pas kutiba (prescrit). La forme nominale kitab dans ce contexte designe le Livre revelé, pas une prescription abstraite. Le contexte (descend avec les prophetes, pour juger) confirme le sens de Livre.",
              axe1_verset: "Le Livre est descend pour juger — c'est un instrument textuel, pas une prescription abstraite.",
              axe2_voisins: "Les prophetes emportent le Livre avec eux — c'est un texte qu'ils portent, pas une obligation abstraite.",
              axe3_sourate: "Al-Kitab dans la sourate al-Baqarah designe systematiquement le texte revelé, pas une obligation.",
              axe4_coherence: "Dans le Coran, al-Kitab designe le Livre; la prescription est exprimee par kutiba (passif de k-t-b, sans article).",
              axe5_frequence: "Le khalifa governe par le Livre, pas par une obligation abstraite sans texte de reference."
            }
          }
        }
      },
      {
        word_key: "hqq",
        position: 11,
        sense_chosen: "verite/realite",
        analysis_axes: {
          sense_chosen: "verite/realite",
          concept_chosen: "Verite/Realite",
          concepts: {
            "Verite/Realite": {
              status: "retenu",
              senses: ["verite", "realite", "ce qui est etabli", "certitude", "droit", "juste"],
              proof_ctx: "Le nom al-haqqi est un nom defini genitif de la racine h-q-q. Le Lane's donne : ce qui est etabli avec certitude, verite, realite, droit, juste, ce qui correspond a la realite. Le haqq est la verite dans son sens le plus fort — non pas seulement une opinion vraie mais la realite en elle-meme, ce qui ne peut pas etre nie. La construction « bi-al-haqqi » (avec la verite/selon la verite) qualifie la descente du Livre.",
              axe1_verset: "Le Livre descend « selon la verite » (bi-al-haqqi). La verite n'est pas seulement le contenu du Livre mais sa nature — le Livre est conforme a la realite, il dit ce qui est. La verite (haqq) est aussi la direction vers laquelle les croyants sont guides (li-ma ikhtalafuu fihi min al-haqqi — vers ce dont ils avaient diverge de la verite).",
              axe2_voisins: "Le verset 211 mentionnait les signes clairs (bayyinat). Le verset 213 parle de la verite (haqq) comme la reference de la guidance. Signes clairs (bayyinat) et verite (haqq) sont deux faces de la meme realite divine — les signes manifestent la verite.",
              axe3_sourate: "La racine h-q-q est tres frequente dans la sourate al-Baqarah. Le haqq est la reference centrale — le Livre est descend avec le haqq, les croyants sont guides vers le haqq, la guidance est vers le haqq. La sourate construit le haqq comme l'enjeu de toute l'histoire humaine.",
              axe4_coherence: "La racine h-q-q apparait environ 287 fois dans le Coran. Le haqq est la verite dans son sens ontologique — ce qui est reellement vrai, ce qui correspond a la structure de la realite. Le Coran se presente lui-meme comme le haqq — ce qui est vrai et reel.",
              axe5_frequence: "Pour la mission du khalifa, le haqq est l'orientation de la mission. Le khalifa gouverne pour la verite (haqq), pas pour ses interets personnels. Sa mission est de faire prevaloir le haqq dans le monde — justice, verite, realite contre mensonge, injustice, illusion."
            }
          }
        }
      },
      {
        word_key: "hkm",
        position: 12,
        sense_chosen: "jugement/decision",
        analysis_axes: {
          sense_chosen: "jugement/decision",
          concept_chosen: "Jugement/Decision",
          concepts: {
            "Jugement/Decision": {
              status: "retenu",
              senses: ["juger", "trancher", "decider", "exercer l'autorite judiciaire", "regir"],
              proof_ctx: "Le verbe li-yahkuma est un subjonctif 3MS de la racine h-k-m (Form I). Le Lane's donne : juger, trancher une affaire, exercer l'autorite, decider avec autorite. Le hukm est le jugement — l'acte de trancher entre deux positions. La construction li-yahkuma (pour qu'il juge) est la finalite de la descente du Livre — le Livre est envoye POUR JUGER. Le sujet implicite de yahkuma est le Livre (al-kitab).",
              axe1_verset: "Le jugement (li-yahkuma) est la finalite explicite du Livre — il est envoye pour juger les divergences. La finalite exprime par « li » + subjonctif montre que le Livre a un but pratique et social : trancher les conflits. Le jugement se fait « entre les gens » (bayna al-nasi) — il est intersubjectif, entre humains, pas seulement interieur.",
              axe2_voisins: "Le verset 2:210 mentionnait que l'affaire serait tranchee (qudhiya al-amr — la racine q-d-y). Le verset 213 dit que le Livre juge (yahkuma — la racine h-k-m). Les deux racines (q-d-y et h-k-m) partagent le sens de jugement mais avec des nuances : q-d-y est plus definif et eschatologique, h-k-m est plus autoriteaire et legislatif.",
              axe3_sourate: "La racine h-k-m est centrale dans la sourate al-Baqarah. En 2:32 (les anges disent : Tu es l'Omniscient, le Sage — al-'Alim al-Hakim). En 2:109, 129, etc. La sagesse (hikma) et le jugement (hukm) sont lies dans la racine — le juge sage est celui qui tranche avec sagesse.",
              axe4_coherence: "La racine h-k-m apparait environ 210 fois dans le Coran. Al-Hakim (le Sage/Juge) est un attribut divin frequent. Le hukm (jugement/loi) est le principe organisateur de la societe — celui qui juge (hakim) est celui qui tient l'autorite.",
              axe5_frequence: "Pour la mission du khalifa, le jugement (hukm) est sa fonction principale. Le khalifa juge — il tranche les conflits, il applique le Livre comme referentiel du jugement. La sourate rappelle que le Livre a ete envoye pour cette finalite : juger entre les gens. Le khalifa est l'executant de cette finalite."
            },
            "Sagesse": {
              status: "probable",
              senses: ["sagesse", "prudence", "wisdom", "discernement"],
              proof_ctx: "Le sens de sagesse est atteste pour h-k-m — al-Hakim = le Sage, al-hikma = la sagesse. La sagesse et le jugement sont lies dans la racine. Mais dans « li-yahkuma bayna al-nasi » (pour juger entre les gens), c'est la fonction de jugement/decision qui est explicitement active, pas la sagesse abstracte.",
              axe1_verset: "Le jugement dans le verset est specifiquement un acte de trancher les divergences — fonction juridique et non simple sagesse contemplative.",
              axe2_voisins: "Les divergences (ikhtilaf) necessitent un arbitre qui tranche — c'est le role juridique, pas simplement la sagesse.",
              axe3_sourate: "La sourate utilise h-k-m dans les deux dimensions (jugement et sagesse) mais ici le contexte juridique est dominant.",
              axe4_coherence: "Yahkuma bayna al-nasi est une formule juridique dans le Coran — juger entre les gens est la fonction du cadi, du juge.",
              axe5_frequence: "Le khalifa doit etre sage (hikma) dans ses jugements (hukm) — les deux dimensions sont necessaires pour une bonne gouvernance."
            }
          }
        }
      },
      {
        word_key: "khlf",
        position: 14,
        sense_chosen: "succession/difference",
        analysis_axes: {
          sense_chosen: "succession/difference",
          concept_chosen: "Succession/Difference",
          concepts: {
            "Succession/Difference": {
              status: "retenu",
              senses: ["diverger", "differ", "succeder", "etre en desaccord", "difference"],
              proof_ctx: "Le verbe ikhtalafuu est un accompli 3MP de la racine kh-l-f (Form VIII). Le Lane's donne : diverger, differ, succeder, etre differents, ne pas s'accorder. La Form VIII reflexive (ikhtalafu) exprime la divergence mutuelle — ils ont diverge les uns vis-a-vis des autres. La racine kh-l-f designe fondamentalement ce qui est derriere, ce qui vient apres, le successeur. L'ikhtilaf est la divergence par le fait de suivre des directions differentes.",
              axe1_verset: "La divergence (ikhtilaf) est a la fois la cause de l'envoi des prophetes (pour juger dans leur divergence) et le resultat de la transgression (ceux a qui le Livre fut apporte ont diverge). La meme racine est utilisee trois fois dans le verset pour marquer les trois etapes de la divergence : l'etat de divergence que le Livre doit traiter, la divergence post-reception des preuves, et la divergence vers laquelle les croyants sont guides (dans la verite).",
              axe2_voisins: "Le verset 212 montrait la division entre kafirs et mu'mins. Le verset 213 explique l'histoire de cette division — les gens etaient un, ont diverge, les prophetes sont envoyes pour traiter la divergence. La sequence historique explique la situation de 2:212.",
              axe3_sourate: "La racine kh-l-f est frequente dans la sourate al-Baqarah. Le khalif (successeur, vicaire — 2:30) est de la meme racine — celui qui succede, qui vient apres. La divergence (ikhtilaf) et la succession (khilafa) partagent la meme racine — tirer dans des directions differentes. La sourate construit un dialogue entre succession (khalifa comme projet divin) et divergence (ikhtilaf comme echec humain).",
              axe4_coherence: "La racine kh-l-f apparait environ 127 fois dans le Coran. L'ikhtilaf (divergence) est presente comme un probleme a traiter — les prophetes sont envoyes pour en traiter, le Livre est pour y tranche. La guidance divine vise a reunifier ce qui s'est divise.",
              axe5_frequence: "Pour la mission du khalifa, gerer la divergence (ikhtilaf) est une fonction centrale. La divergence est inevitable dans la communaute humaine — le khalifa n'essaie pas de l'eliminer mais de la traiter par le jugement (hukm) conforme au Livre. Sa mission est de transformer la divergence destructrice en pluralite productive."
            }
          }
        }
      },
      {
        word_key: "bghy",
        position: 18,
        sense_chosen: "transgression/injustice",
        analysis_axes: {
          sense_chosen: "transgression/injustice",
          concept_chosen: "Transgression/Injustice",
          concepts: {
            "Transgression/Injustice": {
              status: "retenu",
              senses: ["transgression", "injustice", "exces", "depasser les limites", "oppression"],
              proof_ctx: "Le nom baghyan est un accusatif indefini de la racine b-gh-y. Le Lane's donne : transgression, injustice, exces, oppression, depasser les limites, rechercher avec exces. Le baghy est fondamentalement le fait de depasser les limites permises — une transgression des frontieres etablies. La construction « baghyan baynahum » (transgression entre eux) marque que la divergence post-reception n'est pas due a l'ignorance mais a la transgression mutuelle — des motivations de pouvoir, de rivalite, d'orgueil.",
              axe1_verset: "La transgression (baghy) est la cause de la divergence parmi ceux qui ont recu le Livre. Ce n'est pas l'ignorance qui produit cette divergence — ils ont recu les preuves claires (bayyinat). C'est la transgression (baghy) — motivations de domination, de rivalite — qui a produit la divergence parmi ceux qui savent. La transgression post-reception est plus grave que l'ignorance pre-reception.",
              axe2_voisins: "Le verset 2:211 mentionnait le changement du bienfait (yubaddil ni'mata) apres sa reception. Le verset 213 parle de la transgression (baghy) apres la reception des preuves. Les deux motifs sont paralleles : changer le bienfait (211) = transgresser apres les preuves (213). La transgression deliberee post-reception est le motif recurrent.",
              axe3_sourate: "La racine b-gh-y apparait dans la sourate al-Baqarah en 2:90, 173, 213. En 2:90, ceux qui nient sont dans la transgression. En 2:173, la transgression est permise dans la necessite extreme. En 2:213, la divergence est due a la transgression. La sourate presente le baghy comme la source des troubles sociaux.",
              axe4_coherence: "La racine b-gh-y apparait environ 87 fois dans le Coran. Le baghy est toujours delibere et condamne — c'est un choix de depasser les limites, pas un accident. Le Coran le distingue de l'erreur involontaire (khata') qui est traited differemment.",
              axe5_frequence: "Pour la mission du khalifa, identifier la transgression (baghy) comme source des divergences sociales est crucial. Les conflits dans la communaute ne viennent pas toujours de l'ignorance — parfois ils viennent du baghy (rivalite, pouvoir, orgueil). Le khalifa doit traiter les causes profondes, pas seulement les symptomes."
            }
          }
        }
      },
      {
        word_key: "hdy",
        position: 19,
        sense_chosen: "guidance/direction",
        analysis_axes: {
          sense_chosen: "guidance/direction",
          concept_chosen: "Guidance/Direction",
          concepts: {
            "Guidance/Direction": {
              status: "retenu",
              senses: ["guider", "montrer la direction", "conduire vers le but", "orientation"],
              proof_ctx: "Le verbe fa-hada est un accompli 3MS de la racine h-d-y. Le Lane's donne : guider, montrer la direction, conduire vers le but, orienter. La hidaya est la guidance divine — Dieu guide vers la verite. L'accompli marque l'action historique comme accomplie — Dieu a guide les croyants. Le sujet est Dieu (Allahu).",
              axe1_verset: "La guidance (hada) est la reponse divine a la transgression et la divergence. Apres le constat de la transgression, Dieu guide les croyants vers la verite dont ils avaient diverge. La guidance est specifique : vers « ce dont ils avaient diverge de la verite » — pas une guidance generale mais une correction de la divergence specifique.",
              axe2_voisins: "Les versets 211-212 montraient le probleme : signes ignores, bienfait change, vie terrestre embellissante, moquerie. Le verset 213 donne la solution : guidance divine vers la verite. La sequence probleme → solution est le mouvement du passage.",
              axe3_sourate: "La racine h-d-y est une des racines les plus importantes de la sourate al-Baqarah. Des le verset 2:2, le Coran est guidance (huda). En 2:5, 16, 53, 97, etc. La guidance est le theme central de la sourate — Dieu guide, le Coran guide, les prophetes guident.",
              axe4_coherence: "La racine h-d-y apparait environ 316 fois dans le Coran. La hidaya (guidance) est l'un des concepts centraux du Coran. Dieu est al-Hadi (le Guide). La guidance est toujours presente comme un don que Dieu accorde — on ne se guide pas soi-meme, on est guide.",
              axe5_frequence: "Pour la mission du khalifa, etre guide et guider est la vocation fondamentale. Le khalifa est guide par Dieu (recepteur de hidaya) et guide les autres (transmetteur de hidaya). La chaine de guidance — Dieu → Livre → prophetes → croyants → humanite — est la structure de sa mission."
            }
          }
        }
      },
      {
        word_key: "adhn",
        position: 21,
        sense_chosen: "permission/autorisation",
        analysis_axes: {
          sense_chosen: "permission/autorisation",
          concept_chosen: "Permission/Autorisation",
          concepts: {
            "Permission/Autorisation": {
              status: "retenu",
              senses: ["permission", "autorisation", "consentement", "ordre", "permettre"],
              proof_ctx: "Le nom bi-idhnihi est compose de la preposition bi (avec/par) + idhn (permission, autorisation) + hi (son). Le Lane's donne : permission, autorisation, consentement, ordre, decret. L'idhn est l'acte d'autoriser — permettre quelque chose qui ne pourrait pas se faire sans cette autorisation. « Bi-idhnihi » = avec Sa permission, par Son autorisation. La guidance divine se fait avec la permission/autorisation de Dieu.",
              axe1_verset: "La permission divine (bi-idhnihi) qualifie la guidance des croyants — ils sont guides avec la permission de Dieu. Cela signifie que la guidance n'est pas automatique ni universelle — elle est accordee par permission divine a ceux qui croient. La permission est un acte actif de Dieu qui permet la guidance.",
              axe2_voisins: "Le verset 212 mentionnait que Dieu pourvoit qui Il veut (man yasha'u). La permission (idhn) de 213 est parallele a la volonte (masha'a) de 212 — Dieu accorde sa provision selon sa volonte, il accorde sa guidance selon sa permission. Les deux expressions marquent la sovereignty divine sur le don.",
              axe3_sourate: "La racine a-dh-n (idhn = permission) apparait dans la sourate al-Baqarah en 2:97, 102, 213, 251, 255. En 2:97, Gabriel descend la revelation avec la permission de Dieu (bi-idhni Allah). En 2:255 (Ayat al-Kursi), personne n'intercede sauf avec Sa permission. La permission divine est le cadre de toute action dans l'univers.",
              axe4_coherence: "La racine a-dh-n apparait environ 97 fois dans le Coran. Le concept d'idhn (permission/autorisation) est fondamental pour la theologie coranique — rien ne se passe sans la permission divine. Cette doctrine de la permission divine (izn) affirme que Dieu controle et autorise chaque evenement significatif.",
              axe5_frequence: "Pour la mission du khalifa, agir « avec la permission de Dieu » est le cadre theologique de l'action. Le khalifa agit dans les limites de ce que Dieu a permis — le Livre et la Sunna definissent les limites de l'autorisation. L'action khalifale est une action dans le perimetre de la permission divine."
            }
          }
        }
      },
      {
        word_key: "sbl",
        position: 23,
        sense_chosen: "voie/direction",
        analysis_axes: {
          sense_chosen: "voie/direction",
          concept_chosen: "Voie/Direction",
          concepts: {
            "Voie/Direction": {
              status: "retenu",
              senses: ["voie", "chemin", "direction", "route", "passage"],
              proof_ctx: "Le nom siratin est un nom indefini genitif de la racine s-r-t (ou parfois rattache a s-l-t). Le Lane's donne : chemin, voie, route, passage. La sirat est le chemin qui conduit vers un but — la voie a suivre pour atteindre la destination. L'adjectif mustaqim (droit) qualifie la sirat — un chemin droit, qui va directement vers son but sans detours.",
              axe1_verset: "Le chemin droit (sirat mustaqim) est la destination de la guidance divine. Dieu guide vers un chemin droit — c'est la finalite de la guidance. Le chemin droit est la direction de vie qui conduit vers Dieu. L'indefini « siratin mustaqimin » (un chemin droit, sans article) indique que c'est un chemin parmi d'autres possibles, mais le chemin vers lequel Dieu guide.",
              axe2_voisins: "Le verset 212 mentionnait la superiorite des premunies au Jour du Relevement. Le verset 213 clot sur la guidance vers le chemin droit — c'est le chemin qui mene a cette superiorite eschatologique.",
              axe3_sourate: "La formule « sirat mustaqim » est recurrente dans le Coran. Des le debut de la Sourate al-Fatiha (1:6), les croyants demandent a etre guides vers le « sirat al-mustaqim » (le chemin droit). La sourate al-Baqarah developpee ce qui constitue ce chemin.",
              axe4_coherence: "La racine s-r-t apparait environ 45 fois dans le Coran. Le sirat mustaqim est l'expression standard pour la voie juste. Le Coran presente la vie humaine comme un cheminement — la question est de savoir sur quel chemin on marche.",
              axe5_frequence: "Pour la mission du khalifa, le chemin droit est l'orientation fondamentale. Le khalifa marche sur le sirat mustaqim et y guide les autres. Sa mission est un cheminement collectif — emmener la communaute sur la voie droite qui conduit vers Dieu."
            }
          }
        }
      }
    ],
    daily_phrases: []
  }
};

async function main() {
  const data = verseData[213];

  // 1. Update verse_analyses
  const { error: veErr } = await supabase.from('verse_analyses').update({
    translation_arab: data.translation_arab,
    full_translation: data.full_translation,
    translation_explanation: data.translation_explanation,
    segments: data.segments
  }).eq('id', data.analysis_id);
  if (veErr) { console.error('verse_analyses ERROR:', veErr.message); return; }
  console.log('verse_analyses updated (V213)');

  // 2. Insert VWA
  for (const word of data.vwa) {
    const { error: vwaErr } = await supabase.from('verse_word_analyses').insert({
      verse_id: data.verse_id,
      word_key: word.word_key,
      position: word.position,
      sense_chosen: word.sense_chosen,
      analysis_axes: word.analysis_axes
    });
    if (vwaErr) console.error('VWA ERROR ' + word.word_key + ':', vwaErr.message);
    else console.log('  VWA OK: ' + word.word_key + ' pos=' + word.position + ' → ' + word.sense_chosen);
  }

  console.log('\n✅ V213 TERMINE');
}
main().catch(console.error);
