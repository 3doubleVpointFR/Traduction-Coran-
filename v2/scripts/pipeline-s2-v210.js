const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// =====================================================
// PIPELINE SOURATE 2 — VERSET 210
// verse_id=217, analysis_id=576
// "hal yanẓuruna illa an ya'tiyahumu Allahu fi ẓulalin
//  mina al-ghamami wa-al-mala'ikatu wa-qudiya al-amru
//  wa-ila Allahi turja'u al-umuru"
// Question rhetorique apres l'avertissement du V209.
// Attendent-ils que Dieu vienne dans des ombres de nuages
// avec les anges, que l'affaire soit tranchee ? Tout retourne a Dieu.
// =====================================================

const verseData = {
  210: {
    verse_id: 217,
    analysis_id: 576,
    translation_arab: "Attendent-ils autre chose que Dieu leur vienne dans des ombres de nuages, et les anges, et que l'affaire soit tranchee ? Et vers Dieu sont ramenees les affaires.",
    full_translation: "Qu'attendent-ils sinon qu'Allah leur vienne dans l'ombre des nuees, ainsi que les Anges, et que leur sort soit regle? Et c'est a Allah que toute chose est ramenee.",
    translation_explanation: `§DEMARCHE§
Le verset est une question rhetorique qui fait suite a l'avertissement du verset 209. Apres avoir demande « si vous glissez apres que les preuves vous soient parvenues », le texte enchaine avec une question : qu'attendent-ils donc ? La question « hal yanẓuruna illa » (attendent-ils sinon que) implique que les destinataires temporisent, qu'ils retardent leur engagement comme s'ils attendaient un evenement spectaculaire. Le verset repond a cette attente par une image saisissante : la venue de Dieu dans des ombres de nuages, accompagnee des anges, et le reglement definitif de l'affaire.

Le verbe **yanẓuruna** est un inaccompli 3MP de la racine n-ẓ-r. Le Lane's donne : regarder, voir, contempler, considerer, attendre, observer. L'inaccompli marque l'habitude ou la continuation — ils attendent, ils sont dans l'expectative. La construction « hal yanẓuruna illa » (attendent-ils sinon que) est une question rhetorique negative : ils n'attendent rien d'autre que... Le sens d'attente est active par la construction avec « illa » — ce n'est pas un regard contemplatif mais une attente de quelque chose qui doit arriver. Le verbe nazara avec la particule illa dans le Coran designe systematiquement l'attente d'un evenement futur redoute.

Le verbe **ya'tiyahumu** est un subjonctif 3MS avec suffixe 3MP de la racine a-t-y. Le Lane's donne : venir, arriver, se presenter, parvenir, apporter. Le subjonctif est regi par « an » — que Dieu leur vienne. Le suffixe « hum » (eux) fait des destinataires l'objet de la venue — Dieu vient VERS EUX, pas eux qui vont vers Dieu. La venue de Dieu est presentee comme un evenement futur que les temporisateurs semblent attendre. Le texte dit que Dieu vient — il ne precise pas le mode de cette venue, ni s'il faut la comprendre de maniere figuree ou autrement. Le texte decrit ce qui arrivera, pas comment l'interpreter.

Le nom **Allahu** est le nom propre de Dieu au nominatif, sujet du verbe ya'tiya. Le Lane's rattache la racine a-l-h a la divinite, l'adoration, la perplexite devant la grandeur. Dieu est le sujet de la venue — c'est Lui qui vient, pas un envoye ou un representant. Le nominatif marque Dieu comme l'agent actif de la venue. La mention de Dieu comme sujet de « venir » est frappante par son caractere direct.

Le nom **ẓulalin** est un pluriel indefini genitif de la racine ẓ-l-l. Le Lane's donne : ombre, ombrage, abri, canopee, ce qui couvre du soleil, couverture. Le ẓull (singulier ẓulla) est l'ombre projetee par un objet — c'est la zone d'abri sous ce qui couvre. Le pluriel ẓulal designe des ombres multiples, des canopees, des couvertures. La preposition « fi » (dans) situe la venue de Dieu DANS ces ombres — les ombres sont le cadre ou la circonstance de la venue. L'indefini (ẓulalin, pas al-ẓulal) laisse ces ombres indeterminees — ce sont des ombres, pas les ombres connues.

Le nom **al-ghamami** est un nom defini genitif de la racine gh-m-m. Le Lane's donne : nuages, nuees, ce qui couvre et cache le ciel, chagrin, affliction, couverture. Le ghamam est le nuage qui couvre — il partage avec le chagrin (ghamm) l'idee de couverture et d'opacite. La construction « min al-ghamami » (de/parmi les nuages) precise la matiere des ombres — les ombres sont faites de nuages, ou proviennent des nuages. Les nuages couvrent le ciel comme le chagrin couvre le coeur — le sens physique (couverture celeste) et le sens emotionnel (couverture de l'ame) partagent la meme racine.

Le nom **al-mala'ikatu** est un nom defini nominatif pluriel de la racine m-l-k. Le Lane's rattache le sens d'ange a la racine par l'idee de message et d'envoi. Les anges sont les etres qui transmettent — ils sont les messagers. Le nominatif marque les anges comme un sujet coordonne — ils accompagnent la venue de Dieu. La mention des anges ajoute a la solennite de la scene : Dieu ne vient pas seul, les anges sont la. L'article al- definit les anges comme une categorie connue — les anges que tout le monde connait.

Le verbe **quḍiya** est un accompli passif 3MS de la racine q-ḍ-y. Le Lane's donne : juger, trancher, decreter, accomplir, achever, mener a terme. Le passif « quḍiya » (est tranchee/est decretee) supprime l'agent — l'affaire EST tranchee, on ne dit pas par qui (meme si le contexte indique clairement que c'est Dieu qui tranche). Le passif est un procede rhetorique qui met l'accent sur le resultat (l'affaire est tranchee) plutot que sur l'agent (qui la tranche). L'accompli marque l'action comme achevee — l'affaire est tranchee une fois pour toutes, c'est definitif et irrevocable.

Le nom **al-amru** est un nom defini nominatif singulier de la racine a-m-r. Le Lane's donne : affaire, chose, commandement, ordre, ce qui necessite une action ou une decision. L'amr est l'affaire au sens large — une realite qui exige un reglement. L'article al- definit l'affaire comme LA grande affaire, celle qui est connue et redoutee — le jugement final, le reglement definitif. La construction « quḍiya al-amru » (l'affaire est tranchee) est une formule coranique recurrente pour designer le reglement definitif d'une situation.

Le nom **Allahi** est le nom propre de Dieu au genitif, regi par la preposition « ila » (vers). La construction « wa-ila Allahi » (et vers Dieu) introduit la direction du retour — toutes les affaires sont ramenees VERS Dieu. Dieu est la destination finale de toutes les affaires. Le genitif marque la relation directionnelle — les affaires vont vers Dieu, pas ailleurs.

Le verbe **turja'u** est un inaccompli passif 3FS de la racine r-j-'. Le Lane's donne : retourner, revenir, reverter, faire revenir, renvoyer, ramener. Le passif « turja'u » (sont ramenees) supprime l'agent — les affaires SONT ramenees, on ne dit pas qui les ramene. Comme pour quḍiya, le passif met l'accent sur le processus (le retour) plutot que sur l'agent (Dieu). L'inaccompli marque la permanence — les affaires sont constamment ramenees a Dieu, c'est un processus continu et ineluctable. Le verbe est au feminin singulier car il s'accorde avec al-umuru (pluriel non-humain).

Le nom **al-umuru** est un nom defini nominatif pluriel de la racine a-m-r. Le Lane's donne : affaires, choses, commandements, realites. Le pluriel al-umur designe TOUTES les affaires — pas une affaire en particulier mais l'ensemble des affaires et des realites. L'article al- et le pluriel creent une generalisation totale : TOUTES LES affaires sont ramenees a Dieu. La difference avec al-amr (singulier, position 14) est significative : al-amr designe L'affaire (le reglement du sort des temporisateurs), al-umur designe LES affaires (toutes les realites sans exception).

Les deux passifs du verset (quḍiya et turja'u) sont significatifs. En supprimant l'agent, le texte cree un effet d'impersonalite qui renforce l'autorite divine — les choses arrivent comme par necessite, sans qu'il soit besoin de nommer l'auteur. Le passif est aussi un procede de majesté — l'agent est trop grand pour etre mentionne comme un simple acteur parmi d'autres.

§JUSTIFICATION§
**attendent** — Le sens retenu est « attendre ». Le verbe yanẓuruna dans la construction « hal yanẓuruna illa » active le sens d'attente, pas de regard. L'alternative « regarder/contempler » est ecartee car la construction avec « illa an » (sinon que) impose le sens d'attente — « ils n'attendent sinon que ». Le Lane's atteste les deux sens (regarder et attendre), mais le contexte syntaxique tranche en faveur de l'attente.

**leur vienne** — Le sens retenu est « venir/arriver ». Le verbe ya'tiyahumu designe la venue de Dieu vers les destinataires. L'alternative « accorder/donner » (Form IV) est ecartee car le verbe est ici en Form I (ya'tiya, pas yu'tiya) — c'est la venue directe, pas le don. Le sujet est Dieu et le mouvement est directionnel : Dieu vient vers eux.

**Dieu** (position 5) — Le nom propre de la divinite, traduit par « Dieu » selon la convention du projet. Sujet de la venue.

**des ombres** — Le sens retenu est « ombre/ombrage/canopee ». Le mot ẓulalin designe les ombres ou les canopees. L'alternative « protection/abri » est ecartee car le contexte n'est pas celui d'un abri protecteur — les ombres de nuages accompagnent la venue de Dieu comme un cadre solennel, pas comme une protection offerte aux destinataires. Le ẓull est l'ombre projetee — ce qui couvre par-dessus.

**les nuages** — Le sens retenu est « nuages/nuees ». Le mot al-ghamami designe les nuages. L'alternative « chagrin/affliction » (ghamm) est ecartee car le contexte est physique et visuel — il s'agit de nuages reels qui projettent des ombres. La racine gh-m-m relie le nuage au chagrin par l'idee de couverture (le nuage couvre le ciel, le chagrin couvre le coeur), mais dans ce verset c'est le sens physique qui est actif.

**les anges** — Le sens retenu est « ange/messager ». Le mot al-mala'ikatu designe les anges. L'alternative « roi/possesseur » est ecartee car le mot mala'ika est la forme specifique pour les anges dans le Coran — c'est un terme technique qui designe les etres spirituels messagers, distinct de malik (roi) ou mulk (royaume).

**est tranchee** — Le sens retenu est « trancher/decreter ». Le verbe quḍiya au passif designe le reglement definitif. L'alternative « accomplir/achever » est ecartee car l'objet est al-amr (l'affaire/le commandement) — on « tranche » une affaire, on « acheve » un travail. Le contexte du jugement final active le sens juridique de q-ḍ-y : trancher, statuer definitivement.

**l'affaire** (position 14) — Le sens retenu est « affaire/commandement ». Le mot al-amru au singulier defini designe L'affaire par excellence — le reglement du sort. L'alternative « chose » est trop vague. L'article al- specifie : c'est LA grande affaire, celle qui est en jeu depuis le debut du passage.

**Dieu** (position 17) — Le nom propre de la divinite, traduit par « Dieu ». Destination du retour des affaires.

**sont ramenees** — Le sens retenu est « ramener/faire revenir ». Le verbe turja'u au passif designe le retour de toutes les affaires vers Dieu. L'alternative « repeter/repondre » est ecartee car la preposition « ila » (vers) impose le sens de retour directionnel — les affaires reviennent VERS Dieu, elles ne sont pas repetees. Le passif supprime l'agent et met l'accent sur l'ineluctabilite du retour.

**les affaires** (position 19) — Le sens retenu est « affaires/choses ». Le mot al-umuru au pluriel defini designe TOUTES les affaires. L'alternative « commandements » est ecartee car le contexte est celui du retour universel — toutes les realites et les affaires retournent a Dieu, pas seulement les commandements. Le pluriel generalise : tout revient a Dieu.

§CRITIQUE§
Hamidullah traduit « que leur sort soit regle » pour « wa-quḍiya al-amru ». Le texte arabe dit « al-amr » (l'affaire, le commandement), pas « leur sort ». Le mot « sort » (destin, fortune) n'est pas dans le texte — c'est une interpretation qui restreint al-amr a la destinee des personnes, alors que le mot designe l'affaire en general, la grande affaire du jugement. Le possessif « leur » est aussi un ajout — le texte dit « l'affaire », pas « leur affaire ». Cette traduction oriente le lecteur vers une lecture personnalisee (le sort de chacun) alors que le texte presente un evenement cosmique et general (l'affaire EST tranchee, point final). La formule « quḍiya al-amru » est impersonnelle et universelle — elle ne parle pas du sort de tel ou tel groupe mais du reglement definitif de toute l'affaire de la creation. L'ajout de « leur sort » est un choix interpretatif qui reduit la portee du texte.`,
    segments: [
      { fr: "est-ce que", phon: "hal", arabic: "\u0647\u064e\u0644\u0652", is_particle: true, position: 0 },
      { fr: "ils attendent", pos: "verbe", phon: "yanẓuruna", arabic: "\u064a\u064e\u0646\u0638\u064f\u0631\u064f\u0648\u0646\u064e", word_key: "nzr", is_particle: false, sense_retenu: "attendre", position: 1 },
      { fr: "sinon que", phon: "illa", arabic: "\u0625\u0650\u0644\u0651\u064e\u0627\u06d2", is_particle: true, position: 2 },
      { fr: "que", phon: "an", arabic: "\u0623\u064e\u0646", is_particle: true, position: 3 },
      { fr: "leur vienne", pos: "verbe", phon: "ya'tiyahumu", arabic: "\u064a\u064e\u0623\u0652\u062a\u0650\u064a\u064e\u0647\u064f\u0645\u064f", word_key: "aty", is_particle: false, sense_retenu: "venir", position: 4 },
      { fr: "Dieu", pos: "nom", phon: "Allahu", arabic: "\u0671\u0644\u0644\u0651\u064e\u0647\u064f", word_key: "alh", is_particle: false, sense_retenu: "Dieu", position: 5 },
      { fr: "dans", phon: "fi", arabic: "\u0641\u0650\u0649", is_particle: true, position: 6 },
      { fr: "des ombres", pos: "nom", phon: "ẓulalin", arabic: "\u0638\u064f\u0644\u064e\u0644\u064d", word_key: "z l l", is_particle: false, sense_retenu: "ombres/canopees", position: 7 },
      { fr: "de", phon: "mina", arabic: "\u0645\u0651\u0650\u0646\u064e", is_particle: true, position: 8 },
      { fr: "les nuages", pos: "nom", phon: "al-ghamami", arabic: "\u0671\u0644\u0652\u063a\u064e\u0645\u064e\u0627\u0645\u0650", word_key: "ghmm", is_particle: false, sense_retenu: "nuages", position: 9 },
      { fr: "et", phon: "wa", arabic: "\u0648\u064e", is_particle: true, position: 10 },
      { fr: "les anges", pos: "nom", phon: "al-mala'ikatu", arabic: "\u0671\u0644\u0652\u0645\u064e\u0644\u064e\u0640\u0670\u06e3\u0626\u0650\u0643\u064e\u0629\u064f", word_key: "mlk", is_particle: false, sense_retenu: "anges", position: 11 },
      { fr: "et", phon: "wa", arabic: "\u0648\u064e", is_particle: true, position: 12 },
      { fr: "est tranchee", pos: "verbe", phon: "quḍiya", arabic: "\u0642\u064f\u0636\u0650\u0649\u064e", word_key: "qdy", is_particle: false, sense_retenu: "trancher/decreter", position: 13 },
      { fr: "l'affaire", pos: "nom", phon: "al-amru", arabic: "\u0671\u0644\u0652\u0623\u064e\u0645\u0652\u0631\u064f", word_key: "amr", is_particle: false, sense_retenu: "affaire", position: 14 },
      { fr: "et", phon: "wa", arabic: "\u0648\u064e", is_particle: true, position: 15 },
      { fr: "vers", phon: "ila", arabic: "\u0625\u0650\u0644\u064e\u0649", is_particle: true, position: 16 },
      { fr: "Dieu", pos: "nom", phon: "Allahi", arabic: "\u0671\u0644\u0644\u0651\u064e\u0647\u0650", word_key: "alh", is_particle: false, sense_retenu: "Dieu", position: 17 },
      { fr: "sont ramenees", pos: "verbe", phon: "turja'u", arabic: "\u062a\u064f\u0631\u0652\u062c\u064e\u0639\u064f", word_key: "rje", is_particle: false, sense_retenu: "ramener/faire revenir", position: 18 },
      { fr: "les affaires", pos: "nom", phon: "al-umuru", arabic: "\u0671\u0644\u0652\u0623\u064f\u0645\u064f\u0648\u0631\u064f", word_key: "amr", is_particle: false, sense_retenu: "affaires", position: 19 }
    ],
    words: [
      // nzr pos=1
      {
        word_key: "nzr", position: 1, sense_chosen: "attendre",
        analysis_axes: {
          sense_chosen: "attendre",
          concept_chosen: "Attente",
          concepts: {
            "Attente": {
              status: "retenu",
              senses: ["attendre", "delai", "expectative"],
              proof_ctx: "Le verbe yanẓuruna est un inaccompli 3MP de la racine n-ẓ-r. Le Lane's donne : regarder, voir, contempler, considerer, attendre, observer, guetter. Le nazara peut signifier regarder (diriger son regard vers) ou attendre (rester dans l'expectative de quelque chose). La construction « hal yanẓuruna illa an » (attendent-ils sinon que) impose le sens d'attente — le verbe est suivi de « illa an » + subjonctif, ce qui designe l'objet de l'attente, pas l'objet du regard. Le Lane's atteste ce sens : « he waited, or expected ». L'attente est un etat directionnel vers l'avenir — celui qui attend est tourne vers ce qui doit arriver. L'inaccompli marque la continuite de cet etat — ils sont en train d'attendre, ils persistent dans l'attente. La question rhetorique « hal » donne a l'attente une teinte de reproche : qu'attendez-vous donc ?",
              axe1_verset: "Le verbe yanẓuruna ouvre le verset apres la particule interrogative hal. Le champ lexical (venir, Dieu, ombres, nuages, anges, affaire tranchee, retour) montre que l'attente porte sur des evenements eschatologiques majeurs. La question rhetorique implique que les temporisateurs n'ont plus rien a attendre sauf le jugement lui-meme. Le verbe est au pluriel 3MP — ce sont « eux » qui attendent, ceux qui ont ete avertis au verset 209 mais qui n'ont pas repondu. L'attente est presentee comme absurde : puisque les preuves sont deja venues, que reste-t-il a attendre sinon le chatiment ?",
              axe2_voisins: "Le verset 2:209 contenait un avertissement conditionnel : « si vous glissez apres que les preuves vous soient parvenues ». Le verset 2:210 enchaine avec une question qui interpelle ceux qui, malgre les preuves, restent dans l'expectative. Le verbe yanẓuruna cree un pont entre l'avertissement et sa consequence — ceux qui n'ecoutent pas l'avertissement finissent par attendre le jugement. Le verset suivant (2:211) demandera aux Fils d'Israel combien de signes clairs leur sont parvenus — la meme logique d'accumulation des preuves ignorees.",
              axe3_sourate: "La racine n-ẓ-r apparait dans la sourate al-Baqarah en 2:50 (« et vous regardiez »), en 2:104 (« unẓurna — regarde-nous/accorde-nous un delai »), et en 2:210 avec le sens d'attente. La sourate utilise n-ẓ-r dans ses deux registres — le regard et l'attente. En 2:104, le mot est ambigu (regarde-nous ou accorde-nous un delai), en 2:210 le sens est clairement l'attente. La sourate construit une tension entre le regard (signe d'attention) et l'attente (signe de temporisation).",
              axe4_coherence: "La racine n-ẓ-r apparait environ 129 fois dans le Coran. La construction « hal yanẓuruna illa » se retrouve en 6:158 (« attendent-ils sinon que les anges viennent a eux »), en 16:33 (« attendent-ils sinon que les anges viennent »), et en 35:43 (meme construction). Le Coran utilise cette formule comme un reproche recurrent : ceux qui rejettent les signes n'attendent plus que le chatiment final. L'attente est paradoxale — ils n'attendent pas consciemment le chatiment, mais c'est tout ce qui leur reste.",
              axe5_frequence: "Pour la mission du khalifa, l'attente est le piege de la passivite. Le khalifa ne doit pas etre de ceux qui attendent — il doit agir des que les preuves sont claires. L'attente passive face aux signes divins est une forme de refus deguise. Le verset interpelle le khalifa : les preuves sont la, n'attends pas le jour ou il sera trop tard."
            },
            "Regard/Contemplation": {
              status: "probable",
              senses: ["regarder", "voir", "contempler", "considerer"],
              proof_ctx: "Le sens de regard est le sens premier de la racine n-ẓ-r dans le Lane's. Regarder c'est diriger ses yeux et son attention vers quelque chose. Mais dans le verset 2:210, la construction « hal yanẓuruna illa an » impose le sens d'attente — la particule d'exception « illa » suivie de « an » + subjonctif designe l'objet de l'attente, pas l'objet du regard. On ne dit pas « regardent-ils sinon que Dieu vienne » — on dit « attendent-ils sinon que Dieu vienne ». La distinction philosophique est que le regard est un acte directionnel de perception (on regarde quelque chose qui est la), tandis que l'attente est un etat directionnel vers l'avenir (on attend quelque chose qui n'est pas encore la). Le contexte est futur (la venue de Dieu, le reglement de l'affaire), ce qui confirme l'attente et non le regard."
            }
          }
        }
      },
      // aty pos=4
      {
        word_key: "aty", position: 4, sense_chosen: "venir",
        analysis_axes: {
          sense_chosen: "venir",
          concept_chosen: "Venue/Arrivee",
          concepts: {
            "Venue/Arrivee": {
              status: "retenu",
              senses: ["venir", "arriver", "se presenter", "parvenir", "apporter", "donner", "accorder"],
              proof_ctx: "Le verbe ya'tiyahumu est un subjonctif 3MS avec suffixe 3MP de la racine a-t-y. Le Lane's donne pour la Form I : venir, arriver, se presenter, parvenir. Le verbe est en Form I (ya'tiya) et non Form IV (yu'tiya = accorder/donner) — c'est donc la venue directe, le mouvement de quelqu'un vers un lieu ou des personnes. Le subjonctif est regi par « an » — que Dieu vienne. Le suffixe « hum » (eux) fait des destinataires l'objet indirect de la venue — Dieu vient a eux, vers eux. La venue est l'acte de se deplacer vers un point — c'est directionnel et ponctuel. Le texte decrit la venue de Dieu sans qualifier la nature de cette venue — le verbe ya'tiya decrit le mouvement, le texte ne precise pas comment comprendre ce mouvement applique a Dieu.",
              axe1_verset: "Le verbe ya'tiyahumu est l'evenement central de ce que les temporisateurs attendent. Le champ lexical (attendre, Dieu, ombres, nuages, anges, affaire tranchee) montre que la venue est l'evenement culminant. Le sujet de la venue est Dieu (Allahu) — c'est Lui qui vient, pas un intermediaire. Le suffixe 3MP (hum) designe les temporisateurs — la venue est dirigee vers eux. La preposition « fi ẓulalin min al-ghamami » (dans des ombres de nuages) donne le cadre de la venue — un cadre majestueux et solennel. La venue est suivie de la mention des anges et du reglement de l'affaire — c'est une scene de jugement.",
              axe2_voisins: "Le verset 2:209 mentionnait les preuves claires (al-bayyinat) qui sont venues aux destinataires. Le verset 2:210 passe des preuves a la venue de Dieu Lui-meme — si les preuves ne suffisent pas, alors c'est Dieu qui viendra en personne. La gradation est frappante : preuves → venue de Dieu. Le verset 2:211 demandera combien de signes sont venus — la meme racine a-t-y revient pour les signes qui sont « venus a eux ». La sequence montre une accumulation : signes, preuves, et finalement la venue divine.",
              axe3_sourate: "La racine a-t-y apparait frequemment dans la sourate al-Baqarah. En 2:23, « fa-tu bi-suratin » (apportez une sourate). En 2:145, « wa-la-in atayta » (meme si tu apportes). En 2:200, « atina fi al-dunya » (accorde-nous dans l'ici-bas, Form IV). En 2:210, ya'tiyahumu est en Form I (venir), distinct de la Form IV (accorder). La sourate utilise a-t-y dans ses deux formes principales — la venue (Form I) et le don (Form IV) — pour des realites differentes.",
              axe4_coherence: "La racine a-t-y apparait environ 549 fois dans le Coran. La construction « an ya'tiyahumu Allahu » (que Dieu leur vienne) se retrouve dans des contextes similaires de jugement et d'avertissement. En 6:158, « hal yanẓuruna illa an ta'tiyahumu al-mala'ikatu aw ya'tiya rabbuka » (attendent-ils sinon que les anges leur viennent ou que ton Seigneur vienne). Le Coran utilise la venue de Dieu comme l'evenement ultime apres lequel il n'y a plus de delai. Le verbe ya'tiya est simple et direct — il decrit la venue sans la qualifier.",
              axe5_frequence: "Pour la mission du khalifa, la venue de Dieu est l'horizon qui donne urgence a la mission. Le khalifa sait que Dieu viendra — cette certitude donne a chaque action une gravite particuliere. L'attente passive est un luxe que le khalifa ne peut pas se permettre — la venue de Dieu signifie que le temps est compte et que chaque instant doit etre utilise pour la mission."
            }
          }
        }
      },
      // alh pos=5
      {
        word_key: "alh", position: 5, sense_chosen: "Dieu",
        analysis_axes: {
          sense_chosen: "Dieu",
          concept_chosen: "Divinite",
          concepts: {
            "Divinite": {
              status: "retenu",
              senses: ["Dieu", "divinite", "celui qui est adore", "celui devant qui on est perplexe"],
              proof_ctx: "Le nom Allahu est le nom propre de Dieu au nominatif, sujet du verbe ya'tiya. Le Lane's rattache la racine a-l-h a l'adoration, la perplexite devant la grandeur, la recherche de refuge. Le nom Allah designe la divinite unique dans le Coran — la realite supreme vers laquelle se tourne toute adoration. Le nominatif marque Dieu comme le sujet actif de la venue — c'est Dieu qui vient, il est l'agent. La mention de Dieu comme sujet de « venir » dans des ombres de nuages avec les anges cree une scene de majeste et d'autorite absolue.",
              axe1_verset: "Le mot Allahu est le sujet grammatical du verbe ya'tiya et le sujet thematique du verset. Le champ lexical (attente, venue, ombres, nuages, anges, affaire tranchee, retour) gravite autour de Dieu — c'est Lui qui vient, c'est son affaire qui est tranchee, c'est vers Lui que tout retourne. Le verset est entierement centre sur Dieu : Il est le sujet de la venue (position 5) et la destination du retour (position 17). Le debut et la fin du verset sont un arc qui va de Dieu a Dieu.",
              axe2_voisins: "Le verset 2:209 mentionnait Dieu comme « Puissant et Sage » ('aziz hakim). Le verset 2:210 passe de la description de Dieu par ses attributs a la description de son action — Dieu vient. Le verset 2:211 demandera aux Fils d'Israel combien de signes de Dieu leur sont parvenus. La sequence montre Dieu sous trois angles : ses attributs (209), sa venue (210), ses signes (211).",
              axe3_sourate: "Le nom Allah est le mot le plus frequent de la sourate al-Baqarah. En 2:210, Dieu est a la fois le sujet de la venue et la destination du retour — le verset montre que Dieu est l'alpha et l'omega, le debut et la fin de toute chose. La sourate construit la relation avec Dieu comme omnipresente et omnidirectionnelle — Dieu vient vers les hommes et les affaires retournent vers Dieu.",
              axe4_coherence: "Le nom Allah apparait environ 2699 fois dans le Coran. La mention de Dieu comme sujet de la venue est rare et frappante — elle apparait dans des contextes eschatologiques majeurs (2:210, 89:22). Le Coran reserve cette formulation pour les moments les plus solennels. La plupart du temps, ce sont les anges ou les signes qui viennent — quand le texte dit que Dieu vient, c'est l'evenement ultime.",
              axe5_frequence: "Pour la mission du khalifa, Dieu est la source et la destination de la mission. Le khalifa sait que Dieu viendra et que tout retournera vers Lui — cette double certitude cadre la mission entre un debut (Dieu ordonne) et une fin (Dieu juge). Le verset rappelle au khalifa que la temporisation est une impasse — Dieu viendra, que le khalifa soit pret ou non."
            }
          }
        }
      },
      // z l l pos=7
      {
        word_key: "z l l", position: 7, sense_chosen: "ombres/canopees",
        analysis_axes: {
          sense_chosen: "ombres/canopees",
          concept_chosen: "Ombre/Protection",
          concepts: {
            "Ombre/Protection": {
              status: "retenu",
              senses: ["ombrager", "ombre", "abri", "fraicheur", "canopee", "couverture"],
              proof_ctx: "Le nom ẓulalin est un pluriel indefini genitif de la racine ẓ-l-l. Le Lane's donne : ombre, ombrage, canopee, couverture, abri du soleil, ce qui projette une ombre. Le ẓull est l'ombre projetee par un objet qui couvre — c'est la zone d'abri, la fraicheur sous ce qui fait ecran au soleil. Le pluriel ẓulal (ou ẓulul) designe des ombres multiples, des canopees. La preposition « fi » (dans) situe la venue de Dieu DANS ces ombres — les ombres ne sont pas un effet secondaire mais le cadre meme de la venue. Le nom est indefini (ẓulalin, pas al-ẓulal) — les ombres ne sont pas predefinies ni connues, elles sont indeterminees et mysterieuses. La construction « ẓulalin min al-ghamami » (des ombres de/parmi les nuages) precise l'origine des ombres : elles viennent des nuages, elles sont formees par les nuages.",
              axe1_verset: "Le mot ẓulalin est le decor de la venue divine. Le champ lexical (Dieu, venir, nuages, anges, affaire) montre que les ombres font partie d'une scene de majeste. Les ombres de nuages evoquent une couverture celeste, une voute qui descend — le ciel se couvre d'ombres quand Dieu vient. Le mot est au pluriel pour multiplier l'image — pas une seule ombre mais des ombres, des couches de couverture. L'indefini ajoute au mystere — ce sont des ombres qu'on n'a jamais vues, des ombres d'un genre nouveau.",
              axe2_voisins: "Le verset 2:57 mentionne le meme mot dans un contexte different : « wa-ẓallalna 'alaykum al-ghamama » (Nous vous avons ombrage du nuage). En 2:57, l'ombrage est un bienfait accorde aux Fils d'Israel dans le desert. En 2:210, les ombres de nuages accompagnent la venue de Dieu pour le jugement. Le meme decor (ombres de nuages) sert deux scenes opposees : un bienfait passe et un jugement futur. La sourate cree un echo entre les deux occurrences — les nuages qui protegent et les nuages qui annoncent.",
              axe3_sourate: "La racine ẓ-l-l apparait dans la sourate al-Baqarah en 2:57 (Dieu ombrage les Fils d'Israel du nuage) et en 2:210 (Dieu vient dans des ombres de nuages). En 2:57, l'ombre est un don protecteur ; en 2:210, l'ombre est le cadre du jugement. La sourate utilise la meme racine pour deux tonalites differentes — la protection et la majeste. Les ombres de nuages sont un motif recurrent qui lie la bienveillance divine (abri) et l'autorite divine (venue pour le jugement).",
              axe4_coherence: "La racine ẓ-l-l apparait environ 33 fois dans le Coran. En 7:171, « wa-idh nataqna al-jabala fawqahum ka-annahu ẓullatun » (quand Nous avons souleve la montagne au-dessus d'eux comme une canopee). En 56:30, « wa-ẓillin mamdudin » (une ombre etendue — description du paradis). Le Coran utilise ẓ-l-l pour des couvertures celestes de nature diverse — la montagne soulevee, les nuages protecteurs, l'ombre paradisiaque. En 2:210, les ombres de nuages sont le cadre de la theophanie — la couverture celeste accompagne la manifestation divine.",
              axe5_frequence: "Pour la mission du khalifa, les ombres representent la couverture divine. Le khalifa vit sous l'ombre de la volonte de Dieu — il est couvert par l'autorite divine qui le mandate. Mais le verset 2:210 montre que cette ombre peut aussi etre celle du jugement — le khalifa qui temporise finira par voir l'ombre du jugement se deployer au-dessus de lui. L'ombre protege le fidele et avertit le negligent."
            }
          }
        }
      },
      // ghmm pos=9
      {
        word_key: "ghmm", position: 9, sense_chosen: "nuages",
        analysis_axes: {
          sense_chosen: "nuages",
          concept_chosen: "Affliction/Couverture",
          concepts: {
            "Affliction/Couverture": {
              status: "retenu",
              senses: ["chagriner", "attrister", "souci", "nuages", "couvrir"],
              proof_ctx: "Le nom al-ghamami est un nom defini genitif de la racine gh-m-m. Le Lane's donne : nuage, nuee, ce qui couvre le ciel, ce qui cache et enveloppe. Le ghamam est le nuage qui couvre le ciel — il fait ecran entre le soleil et la terre, il cache et il enveloppe. La racine gh-m-m partage avec le chagrin (ghamm) l'idee fondamentale de couverture : le nuage couvre le ciel, le chagrin couvre le coeur. Le ghamm est ce qui enveloppe l'ame et l'empeche de voir clairement — c'est l'oppression interieure. Le ghamam est ce qui enveloppe le ciel et empeche la lumiere de passer — c'est la couverture celeste. Le Lane's lie les deux sens par la meme idee de couverture et d'occultation. L'article al- definit les nuages comme connus — ce sont les nuages familiers du ciel, pas des nuages mystiques.",
              axe1_verset: "Le mot al-ghamami precise la nature des ombres — les ombres sont de nuages (min al-ghamami). Le champ lexical (Dieu, ombres, anges, affaire tranchee) montre que les nuages font partie de la scene eschatologique. Les nuages sont le support des ombres et le cadre de la venue divine. La couverture des nuages cree un effet d'opacite et de mystere — on ne voit pas a travers les nuages, ce qui vient est cache jusqu'a ce qu'il se revele. L'article al- definit les nuages comme une realite connue — pas des nuages surnaturels mais les nuages du ciel, rendus solennels par le contexte divin.",
              axe2_voisins: "Le verset 2:57 mentionnait « al-ghamama » (le nuage, singulier) que Dieu a fait ombrager les Fils d'Israel. En 2:210, c'est al-ghamam (le nuage collectif) qui accompagne la venue de Dieu. L'echo entre 2:57 et 2:210 montre la dualite du nuage dans la sourate — bienfait protecteur pour les obeissants et cadre du jugement pour les temporisateurs. Le meme element naturel (le nuage) sert deux scenes opposees.",
              axe3_sourate: "La racine gh-m-m apparait dans la sourate al-Baqarah en 2:57 et en 2:210 — uniquement dans le contexte des nuages. La sourate n'utilise pas le sens de chagrin (ghamm) pour cette racine — c'est le sens physique (nuages) qui est actif. Mais le lien semantique entre la couverture celeste et la couverture emotionnelle reste pertinent : les nuages qui couvrent le ciel sont comme le chagrin qui couvre le coeur de ceux qui seront juges.",
              axe4_coherence: "La racine gh-m-m apparait environ 11 fois dans le Coran, principalement pour les nuages. En 7:160, « wa-ẓallalna 'alayhim al-ghamama » (Nous les avons ombrages du nuage). En 2:57, la meme construction. Le ghamam est le nuage qui couvre et protege — dans le contexte de l'exode des Fils d'Israel, il est un bienfait. En 2:210, le ghamam change de registre — il accompagne la venue divine pour le jugement. Le Coran montre que les elements naturels ont une polyvalence — le meme nuage peut proteger ou annoncer.",
              axe5_frequence: "Pour la mission du khalifa, les nuages symbolisent la couverture divine qui enveloppe la mission. Le khalifa vit sous la nuee divine — il est enveloppe par la volonte de Dieu qui le couvre et le dirige. Mais les nuages sont aussi le signe que la vue n'est pas totale — le khalifa ne voit pas tout, il vit sous une couverture qui le guide sans tout lui reveler. Le verset rappelle que sous les nuages du jugement, tout sera revele."
            }
          }
        }
      },
      // mlk pos=11
      {
        word_key: "mlk", position: 11, sense_chosen: "anges",
        analysis_axes: {
          sense_chosen: "anges",
          concept_chosen: "Ange/Messager",
          concepts: {
            "Ange/Messager": {
              status: "retenu",
              senses: ["ange", "messager", "message"],
              proof_ctx: "Le nom al-mala'ikatu est un nom defini nominatif pluriel de la racine m-l-k. Le Lane's donne pour mala'ika : anges, etres spirituels messagers. Le mot mala'ika est le pluriel de malak (ange), que le Lane's rattache a la racine m-l-k par l'idee de message et d'envoi. Les anges sont les etres qui transmettent la communication divine — ils sont les messagers par excellence. Le nominatif marque les anges comme un sujet coordonne avec Dieu (Allahu) — ils accompagnent la venue de Dieu, ils sont presents dans la meme scene. L'article al- definit les anges comme une categorie connue et identifiable — les anges que les interlocuteurs connaissent par les enseignements anterieurs.",
              axe1_verset: "Le mot al-mala'ikatu est coordonne avec la venue de Dieu — les anges font partie de la scene eschatologique. Le champ lexical (Dieu, ombres, nuages, affaire tranchee) montre que les anges ajoutent a la solennite de la venue. La coordination par « wa » (et) met les anges au meme plan grammatical que la venue de Dieu — ils viennent aussi, ils sont presents. Le nominatif les place comme sujets — les anges ne sont pas des objets passifs mais des acteurs presents dans la scene. La mention des anges apres Dieu et les ombres de nuages cree un crescendo : venue de Dieu → cadre (ombres de nuages) → accompagnateurs (les anges) → resultat (l'affaire est tranchee).",
              axe2_voisins: "Le verset 2:209 ne mentionnait pas les anges. Le verset 2:210 introduit les anges comme accompagnateurs de la venue divine. Le verset 2:211 parlera des signes clairs (bayyinat) — la sequence montre une progression du plus spectaculaire au plus concret : anges → signes. Les versets 2:30-34 racontaient la creation d'Adam et l'ordre aux anges de se prosterner — les anges de 2:210 sont les memes etres qui ont assiste a la creation et qui assisteront au jugement. La sourate cree un arc narratif entre la creation et le jugement, et les anges sont presents aux deux extremes.",
              axe3_sourate: "La racine m-l-k dans la sourate al-Baqarah apparait dans de multiples contextes. En 2:30-34, les anges discutent avec Dieu de la creation d'Adam. En 2:97-98, Jibril (Gabriel) est mentionne comme ange revelateur. En 2:102, les anges Harut et Marut enseignent la sorcellerie. En 2:161, la malediction des anges. En 2:210, les anges accompagnent la venue divine. La sourate construit les anges comme des acteurs omnipresents — ils participent a la creation, a la revelation, a l'enseignement et au jugement.",
              axe4_coherence: "La racine m-l-k pour le sens d'ange apparait environ 88 fois dans le Coran. Les anges accompagnent les evenements majeurs — la creation (2:30), la revelation (2:97), le jugement (2:210), la mort (6:61, 32:11). Le Coran presente les anges comme les executeurs de la volonte divine — ils viennent avec Dieu pour le jugement, ils prennent les ames a la mort, ils transmettent la revelation. Leur presence dans 2:210 confirme le caractere eschatologique de la scene.",
              axe5_frequence: "Pour la mission du khalifa, les anges sont les agents de Dieu qui encadrent la mission. Le khalifa sait que les anges sont presents — ils ne sont pas visibles mais ils agissent. Le verset 2:210 montre que les anges seront presents au jugement final — le khalifa sera juge en leur presence. Cette conscience de la presence angelique donne a la mission une dimension de surveillance bienveillante et d'accompagnement divin."
            },
            "Possession/Autorite": {
              status: "nul",
              senses: ["posseder", "maitre", "propriete"],
              proof_ctx: "Le sens de possession est un sens central de la racine m-l-k dans le Lane's. Le mulk est la possession, le malik est le possesseur. Mais le mot dans le verset est al-mala'ika (les anges), pas al-mulk (la possession) ou al-malik (le roi). Le mot mala'ika est un terme technique coranique pour les anges — il est clairement distinct des autres derivations de m-l-k. Le contexte confirme : les anges accompagnent la venue de Dieu pour le jugement, ils ne possedent rien et ne regnent sur rien dans cette scene."
            }
          }
        }
      },
      // qdy pos=13
      {
        word_key: "qdy", position: 13, sense_chosen: "trancher/decreter",
        analysis_axes: {
          sense_chosen: "trancher/decreter",
          concept_chosen: "Jugement/Decret",
          concepts: {
            "Jugement/Decret": {
              status: "retenu",
              senses: ["juger", "trancher", "decreter", "accomplir", "achever", "mener a terme", "decider"],
              proof_ctx: "Le verbe quḍiya est un accompli passif 3MS de la racine q-ḍ-y. Le Lane's donne : juger, trancher une affaire, decreter, accomplir, achever, mener a son terme, decider definitivement, prononcer un jugement. Le qaḍa' est un acte de finalisation definitive — il tranche et met fin a toute ambiguite. L'accompli marque l'action comme faite et achevee — l'affaire EST tranchee, c'est un fait accompli. Le passif « quḍiya » supprime l'agent : on ne dit pas QUI tranche, meme si le contexte indique clairement que c'est Dieu. Ce passif est un procede rhetorique de majeste — l'agent est si grand qu'il n'a pas besoin d'etre nomme. Le resultat est mis en avant : l'affaire est tranchee, point final. La construction « quḍiya al-amru » est une formule coranique pour le reglement definitif.",
              axe1_verset: "Le verbe quḍiya marque le resultat de la venue divine — Dieu vient, les anges sont la, et l'affaire est tranchee. Le champ lexical (attendre, venir, Dieu, ombres, anges, affaire, retour) montre que le reglement est l'aboutissement de la scene. Le passif cree un effet d'inevitabilite — l'affaire n'est pas tranchee par la volonte de quelqu'un mais par la force des choses, par la necessite divine. Le verbe est l'avant-dernier evenement de la sequence : venue → ombres → anges → affaire tranchee → retour a Dieu. C'est le moment ou tout est decide, ou il n'y a plus de recours.",
              axe2_voisins: "Le verset 2:200 utilisait la meme racine q-ḍ-y dans un sens different : « idha qadaytum manasikakum » (quand vous aurez acheve vos rites). En 2:200, l'actif « qadaytum » (vous avez acheve) designe l'accomplissement humain des rites. En 2:210, le passif « quḍiya » (est tranchee) designe le reglement divin de l'affaire. La sourate utilise la meme racine pour l'action humaine (achever) et l'action divine (trancher) — le parallele montre que Dieu tranche comme l'homme acheve, mais a un niveau cosmique et definitif.",
              axe3_sourate: "La racine q-ḍ-y apparait dans la sourate al-Baqarah en 2:117 (« idha qaḍa amran » — quand Il decide une chose), en 2:200 (accomplir les rites) et en 2:210 (l'affaire est tranchee). La sourate montre trois facettes de q-ḍ-y : le decret divin createur (2:117), l'accomplissement humain rituel (2:200) et le reglement eschatologique (2:210). Chaque usage monte en gravite — de la creation au rite au jugement final.",
              axe4_coherence: "La racine q-ḍ-y apparait environ 63 fois dans le Coran. La formule « quḍiya al-amru » apparait en 2:210, en 11:44 (apres le deluge — « wa-quḍiya al-amru wa-istawat 'ala al-judiyyi » — l'affaire fut tranchee et l'arche s'installa sur le Judi), en 12:41 (« quḍiya al-amru alladhi fihi tastaftiyani » — l'affaire au sujet de laquelle vous me consultiez est tranchee). Le Coran utilise cette formule pour les moments de non-retour — une fois que « quḍiya al-amru », il n'y a plus de recours ni de delai.",
              axe5_frequence: "Pour la mission du khalifa, le reglement de l'affaire est le rappel que toute chose a une fin. Le khalifa prend des decisions et tranche — son qaḍa' est une image de la capacite divine de trancher. Mais le verset 2:210 rappelle que le qaḍa' ultime appartient a Dieu — le khalifa tranche dans le temporel, Dieu tranche dans l'absolu. Le passif rappelle au khalifa que ses propres affaires seront tranchees un jour sans qu'il ait son mot a dire."
            }
          }
        }
      },
      // amr pos=14 (singulier: l'affaire)
      {
        word_key: "amr", position: 14, sense_chosen: "affaire",
        analysis_axes: {
          sense_chosen: "affaire",
          concept_chosen: "Affaire/Chose",
          concepts: {
            "Affaire/Chose": {
              status: "retenu",
              senses: ["affaire", "chose", "realite a traiter", "ce qui necessite une decision"],
              proof_ctx: "Le nom al-amru est un nom defini nominatif singulier de la racine a-m-r. Le Lane's donne : affaire, chose, commandement, ordre, ce qui occupe, ce qui necessite une action ou une decision. L'amr est la realite qui exige un reglement — ce n'est pas un simple objet mais une situation qui demande qu'on statue. L'article al- definit l'affaire comme LA grande affaire — pas n'importe quelle affaire mais celle qui est en jeu, celle dont il est question depuis le debut. Le singulier designe une affaire unique et capitale — le reglement du sort des temporisateurs, le jugement definitif. Le nominatif marque al-amru comme le sujet passif de quḍiya — l'affaire est ce qui est tranche.",
              axe1_verset: "Le mot al-amru est le complement de quḍiya — l'affaire qui est tranchee. Le champ lexical (Dieu, ombres, nuages, anges, retour) montre que l'affaire est le reglement cosmique qui accompagne la venue divine. Le singulier (al-amr) contraste avec le pluriel (al-umur) en fin de verset — L'affaire (le jugement) est tranchee, puis TOUTES les affaires sont ramenees a Dieu. Le passage du singulier au pluriel generalise : d'abord l'affaire specifique est reglee, puis toutes les affaires sans exception retournent a Dieu.",
              axe2_voisins: "Le verset 2:117 utilisait la meme construction : « idha qaḍa amran » (quand Il decide une chose). En 2:117, l'amr est la chose a creer ; en 2:210, l'amr est l'affaire a trancher. Le parallele montre que le meme Dieu qui decide la creation decide le jugement. Le verset 2:209 mentionnait les preuves claires — l'amr de 2:210 est le resultat du refus de ces preuves : puisque les preuves n'ont pas ete acceptees, l'affaire sera tranchee autrement.",
              axe3_sourate: "La racine a-m-r apparait dans la sourate al-Baqarah dans de multiples contextes. En 2:27 (« ma ya'muru bihi » — ce qu'Il ordonne). En 2:67 (« inna Allaha ya'murukum » — Dieu vous ordonne). En 2:117 (« idha qaḍa amran »). En 2:210, l'amr est l'affaire tranchee. La sourate utilise a-m-r pour le commandement divin (ce que Dieu ordonne) et pour l'affaire divine (ce que Dieu tranche) — les deux sens sont lies car commander c'est aussi decider.",
              axe4_coherence: "La racine a-m-r apparait environ 248 fois dans le Coran. Le sens d'affaire (amr) est frequent dans les contextes de decret divin. En 11:44, « wa-quḍiya al-amru » apres le deluge. En 19:21, « wa-kana amran maqḍiyyan » (c'etait une affaire decidee). Le Coran utilise al-amr pour les decisions divines irrevocables — une fois que l'amr est qaḍa (tranche/decide), il n'y a plus de retour possible.",
              axe5_frequence: "Pour la mission du khalifa, l'amr est la mission elle-meme. Le khalifa est charge d'une affaire — l'etablissement de la justice et la prevention de la corruption. Mais le verset 2:210 rappelle que l'amr ultime appartient a Dieu — l'affaire du khalifa est subordonnee a l'affaire de Dieu. Le singulier al-amr montre que toute la diversite des affaires humaines se ramene a une seule affaire : le jugement divin."
            },
            "Commandement/Autorite": {
              status: "probable",
              senses: ["ordonner", "commander", "nommer gouverneur"],
              proof_ctx: "Le sens de commandement est un sens fondamental de la racine a-m-r dans le Lane's. Amara signifie ordonner, commander. Mais dans le verset, le mot al-amr est l'objet du passif quḍiya (est tranche) — on ne « tranche » pas un commandement, on « tranche » une affaire. Le Lane's distingue amr au sens de « ordre/commandement » (ce que quelqu'un prescrit) et amr au sens de « affaire/chose » (ce qui doit etre regle). La construction « quḍiya al-amru » impose le sens d'affaire — l'affaire est tranchee, pas le commandement est tranche. Le contexte eschatologique confirme : c'est une affaire cosmique qui est reglee, pas un commandement qui est emis."
            }
          }
        }
      },
      // alh pos=17 (genitif, destination du retour)
      {
        word_key: "alh", position: 17, sense_chosen: "Dieu",
        analysis_axes: {
          sense_chosen: "Dieu",
          concept_chosen: "Divinite",
          concepts: {
            "Divinite": {
              status: "retenu",
              senses: ["Dieu", "divinite", "celui qui est adore", "celui devant qui on est perplexe"],
              proof_ctx: "Le nom Allahi est le nom propre de Dieu au genitif, regi par la preposition « ila » (vers). Le Lane's rattache la racine a-l-h a l'adoration, la perplexite devant la grandeur. La construction « wa-ila Allahi turja'u al-umuru » (et vers Dieu sont ramenees les affaires) fait de Dieu la destination finale de toutes les affaires. Le genitif marque la direction — vers Dieu, pas ailleurs. Cette deuxieme mention de Dieu dans le verset ferme l'arc ouvert par la premiere (position 5) : Dieu vient (position 5) et tout retourne a Dieu (position 17). Dieu est a la fois l'agent de la venue et la destination du retour.",
              axe1_verset: "Le mot Allahi en fin de verset ferme la structure circulaire : Dieu vient vers eux (ya'tiyahumu Allahu) et les affaires retournent vers Dieu (ila Allahi turja'u). Le champ lexical (attente, venue, ombres, anges, affaire, retour) montre que tout converge vers Dieu. La preposition « ila » (vers) cree un mouvement de retour — les affaires partent de Dieu (il les ordonne) et reviennent a Dieu (il les juge). Dieu est le point de depart et le point d'arrivee de tout.",
              axe2_voisins: "Le verset 2:209 qualifiait Dieu de « Puissant et Sage » ('aziz hakim). Le verset 2:210 Le montre comme celui vers qui tout retourne. La progression 209-210 va des attributs de Dieu (puissance, sagesse) a son role cosmique (destination de toutes les affaires). La sagesse de Dieu (2:209) se manifeste dans le fait que toutes les affaires Lui sont ramenees — rien n'echappe a son jugement.",
              axe3_sourate: "Le nom Allah en position de destination (ila Allahi) se retrouve en 2:46 (« ilayhi raji'una » — vers Lui vous retournerez) et en 2:281 (« yawma turja'una fihi ila Allahi » — le jour ou vous serez ramenes a Dieu). La sourate repete le theme du retour a Dieu comme une constante — quel que soit le sujet traite, le rappel du retour a Dieu conclut la reflexion. En 2:210, ce retour est generalise a TOUTES les affaires, pas seulement aux personnes.",
              axe4_coherence: "La construction « ila Allahi turja'u al-umuru » (vers Dieu sont ramenees les affaires) apparait mot pour mot en 3:109, 8:44, 22:76, 35:4 et 57:5. C'est une formule coranique recurrente qui affirme la souverainete finale de Dieu sur toutes les realites. Le Coran repete cette formule dans des contextes varies pour rappeler que rien n'echappe au retour vers Dieu — les affaires politiques, spirituelles, personnelles et cosmiques reviennent toutes a Lui.",
              axe5_frequence: "Pour la mission du khalifa, le retour a Dieu est l'horizon ultime. Le khalifa sait que toutes ses affaires, ses decisions, ses actes retourneront a Dieu pour etre juges. Cette certitude du retour donne a chaque decision du khalifa une gravite permanente — rien n'est perdu, rien n'est oublie, tout retourne a Dieu."
            }
          }
        }
      },
      // rje pos=18
      {
        word_key: "rje", position: 18, sense_chosen: "ramener/faire revenir",
        analysis_axes: {
          sense_chosen: "ramener/faire revenir",
          concept_chosen: "Retour/Reversion",
          concepts: {
            "Retour/Reversion": {
              status: "retenu",
              senses: ["retourner", "revenir", "reverter", "faire revenir", "renvoyer", "ramener"],
              proof_ctx: "Le verbe turja'u est un inaccompli passif 3FS de la racine r-j-'. Le Lane's donne : retourner, revenir, reverter, faire revenir, renvoyer, ramener. Le ruju' est le retour a l'origine — le mouvement circulaire qui ramene au point de depart. Le passif « turja'u » (sont ramenees) supprime l'agent : les affaires SONT ramenees, on ne dit pas par qui. Comme pour quḍiya, le passif met l'accent sur le processus et le resultat, pas sur l'agent. L'inaccompli marque la permanence et la continuite — les affaires sont CONSTAMMENT ramenees a Dieu, c'est un processus ininterrompu et ineluctable. Le feminin singulier s'accorde avec al-umuru (pluriel non-humain, accord au feminin singulier en arabe). La preposition « ila » (vers) donne la direction du retour — vers Dieu.",
              axe1_verset: "Le verbe turja'u est la conclusion du verset — apres la venue de Dieu, les ombres, les anges et le reglement de l'affaire, le verset conclut sur le retour universel. Le champ lexical (Dieu, affaire, retour) montre que le retour est le dernier mot — tout se termine par le retour a Dieu. Le passif cree un parallele avec quḍiya — les deux passifs du verset suppriment l'agent et mettent l'accent sur les processus : l'affaire est tranchee (passif), les affaires sont ramenees (passif). La double suppression de l'agent renforce l'autorite divine — Dieu est si evidemment l'agent qu'il n'a pas besoin d'etre nomme.",
              axe2_voisins: "Le verset 2:46 mentionnait « ilayhi raji'una » (vers Lui vous etes ceux qui retournent). Le verset 2:210 passe du retour des personnes au retour des affaires — ce ne sont pas seulement les gens qui retournent a Dieu, ce sont TOUTES les affaires. La generalisation est totale : personnes et affaires, tout retourne a Dieu. Le verset 2:281 reprendra le meme theme : « le jour ou vous serez ramenes a Dieu ». La sourate encadre tout son contenu par le rappel du retour.",
              axe3_sourate: "La racine r-j-' apparait dans la sourate al-Baqarah en 2:28 (« ilayhi turja'una » — vers Lui vous serez ramenes), en 2:46 (« ilayhi raji'una »), en 2:210 (turja'u al-umuru) et en 2:281 (turja'una fih ila Allahi). La sourate construit le retour a Dieu comme une verite omnipresente — elle apparait au debut, au milieu et a la fin de la sourate. Le retour n'est pas une menace mais une realite ontologique — tout vient de Dieu et tout retourne a Dieu.",
              axe4_coherence: "La racine r-j-' apparait environ 104 fois dans le Coran. Le retour a Dieu (ruju' ila Allah) est un theme majeur. En 3:109, « wa-ila Allahi turja'u al-umuru » (la meme formule qu'en 2:210). En 6:36, « wa-ila Allahi yurja'una ». En 36:83, « ilayhi turja'una ». Le Coran fait du retour a Dieu la conclusion de toute reflexion — quel que soit le sujet, le retour a Dieu en est la verite finale.",
              axe5_frequence: "Pour la mission du khalifa, le retour est la reddition des comptes. Le khalifa sait que toutes ses affaires retourneront a Dieu — chaque decision, chaque acte, chaque omission sera ramenee devant le juge ultime. Le retour n'est pas seulement le retour physique de la mort mais le retour comptable de la mission — tout ce que le khalifa a fait sera examine. Cette conscience du retour est le garde-fou permanent contre l'abus de pouvoir."
            },
            "Pluie/Renouvellement": {
              status: "nul",
              senses: ["pluie"],
              proof_ctx: "Le sens de pluie est un sens atteste de la racine r-j-' dans le Lane's — la pluie est un retour de l'eau du ciel vers la terre. Mais dans le verset, le verbe turja'u a pour sujet al-umuru (les affaires) et pour destination « ila Allahi » (vers Dieu) — il ne s'agit pas de pluie mais du retour des affaires vers Dieu. Le contexte est eschatologique et juridique, pas meteorologique."
            }
          }
        }
      },
      // amr pos=19 (pluriel: les affaires)
      {
        word_key: "amr", position: 19, sense_chosen: "affaires",
        analysis_axes: {
          sense_chosen: "affaires",
          concept_chosen: "Affaire/Chose",
          concepts: {
            "Affaire/Chose": {
              status: "retenu",
              senses: ["affaire", "chose", "realite", "ce qui est a traiter"],
              proof_ctx: "Le nom al-umuru est un nom defini nominatif pluriel de la racine a-m-r. Le Lane's donne : affaires, choses, commandements, realites, ce qui necessite une action. Le pluriel al-umur designe TOUTES les affaires sans exception — c'est une generalisation totale. L'article al- et le pluriel creent une universalite : pas certaines affaires mais TOUTES les affaires. Le nominatif marque al-umuru comme le sujet de turja'u (sont ramenees) — les affaires sont ce qui est ramene vers Dieu. La difference avec al-amr (singulier, position 14) est importante : al-amr est L'affaire unique et capitale (le jugement), al-umur est TOUTES les affaires (toutes les realites). Le passage du singulier au pluriel generalise le propos — d'abord l'affaire specifique est reglee, puis toutes les affaires retournent a Dieu.",
              axe1_verset: "Le mot al-umuru est le dernier mot du verset et porte la generalisation finale. Le champ lexical (Dieu, retour, affaires) montre que la conclusion du verset est universelle : TOUT retourne a Dieu, pas seulement l'affaire specifique du jugement. Le pluriel cree un elargissement progressif — de l'attente specifique (position 1) a la venue specifique (position 4) a l'affaire specifique (position 14) a TOUTES les affaires (position 19). Le verset va du particulier au general, de l'evenement specifique a la verite universelle.",
              axe2_voisins: "Le verset 2:209 mentionnait les preuves claires et la puissance de Dieu. Le verset 2:210 conclut par le retour de toutes les affaires a Dieu. La sequence 209-210 va de l'avertissement a la conclusion universelle : meme si vous glissez (209), toutes les affaires retournent a Dieu (210) — il n'y a pas d'echappatoire. Le pluriel al-umur englobe les affaires de ceux qui ont repondu et de ceux qui ont temporise — tout le monde est concerne.",
              axe3_sourate: "La racine a-m-r dans la sourate al-Baqarah apparait au singulier (amr) et au pluriel (umur). Le singulier designe souvent le commandement divin ou l'affaire unique a trancher. Le pluriel designe l'ensemble des realites qui retournent a Dieu. En 2:210, les deux formes apparaissent dans le meme verset — le singulier pour le reglement specifique et le pluriel pour le retour universel. La sourate montre que Dieu gere a la fois les affaires individuelles et les affaires universelles.",
              axe4_coherence: "Le pluriel al-umur avec « ila Allahi turja'u » apparait en 2:210, 3:109, 8:44, 22:76, 35:4 et 57:5. C'est une formule coranique fixe qui affirme le retour universel de toutes les affaires a Dieu. Le Coran ne fait pas d'exception — toutes les affaires, sans distinction, retournent a Dieu. Le pluriel est inclusif et absolu — les affaires petites et grandes, visibles et cachees, humaines et cosmiques.",
              axe5_frequence: "Pour la mission du khalifa, les affaires sont la matiere de la mission. Le khalifa gere des affaires — juridiques, sociales, politiques. Mais le verset 2:210 rappelle que toutes ces affaires retourneront a Dieu. Le khalifa n'est pas le proprietaire des affaires qu'il gere — il est le gerant temporaire d'affaires qui appartiennent a Dieu et qui Lui seront rendues. Cette conscience transforme la gestion en responsabilite et la responsabilite en reddition des comptes."
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

  const verseIds = [217];
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
  console.log('=== PIPELINE SOURATE 2 — VERSET 210 ===\n');
  await processVerse(210);
  await syncWordMeanings();
  console.log('\n=== PIPELINE V210 TERMINEE ===');
}

main().catch(e => console.error('FATAL:', e));
