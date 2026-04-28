const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// =====================================================
// PIPELINE SOURATE 2 — VERSET 203
// verse_id=210, analysis_id=570
// "Et invoquez Dieu pendant des jours comptes.
//  Quiconque se hate en deux jours, aucune faute sur lui.
//  Et quiconque retarde, aucune faute sur lui —
//  pour celui qui se premunit. Et premunissez-vous de Dieu.
//  Et sachez que c'est vers Lui que vous serez rassembles."
// Jours de tashreeq, flexibilite hajj, taqwa, rassemblement final
// =====================================================

const verseData = {
  203: {
    verse_id: 210,
    analysis_id: 570,
    translation_arab: "Et invoquez Dieu pendant des jours comptes. Quiconque se hate en deux jours, aucune faute sur lui. Et quiconque retarde, aucune faute sur lui — pour celui qui se premunit. Et premunissez-vous de Dieu. Et sachez que c'est vers Lui que vous serez rassembles.",
    full_translation: "Et invoquez Allah pendant un nombre de jours determines. Quiconque se hate en deux jours ne commet aucun peche, et quiconque retarde ne commet aucun peche pour celui qui craint [Allah]. Et craignez Allah. Et sachez que c'est vers Lui que vous serez rassembles.",
    translation_explanation: `§DEMARCHE§
Le verset se divise en quatre mouvements. Le premier est un ordre collectif : invoquer Dieu pendant des jours comptes (les jours de tashreeq). Le deuxieme pose une flexibilite : celui qui part en deux jours n'a aucune faute, celui qui reste trois jours non plus. Le troisieme pose la condition de cette absence de faute : c'est pour celui qui se premunit (ittaqa). Le quatrieme conclut par un double imperatif : premunissez-vous de Dieu, et sachez que vous serez rassembles vers Lui.

Le verbe **udhkuru** est un imperatif 2MP de la racine dh-k-r. Le Lane's donne : se souvenir, rappeler, mentionner, invoquer, evoquer, garder en memoire. L'imperatif est un ordre direct adresse a l'ensemble des pelerins — invoquez, rappelez-vous de Dieu. Le dhikr est un acte de memoire active et volontaire — pas un souvenir qui remonte seul mais un rappel intentionnel. L'objet du dhikr est Dieu (Allaha) — l'invocation est centree sur Dieu seul pendant ces jours specifiques. Ce verbe reprend le meme imperatif que 2:200, prolongeant l'obligation du dhikr au-dela des rites dans les jours qui suivent.

Le nom **Allaha** est le nom propre de Dieu a l'accusatif, complement d'objet du verbe udhkuru. Le Lane's rattache la racine a-l-h a l'adoration, la perplexite devant la grandeur, la recherche de refuge. Dieu est l'objet du rappel — c'est Lui qui doit etre invoque pendant les jours comptes. Le nom est a l'accusatif comme complement direct du verbe.

Le nom **ayyamin** est un pluriel indefini genitif de la racine y-w-m. Le Lane's donne : jour, journee, temps, periode. Le pluriel ayyam designe des jours au sens propre — des periodes de vingt-quatre heures. L'indefini (ayyamin, pas al-ayyam) laisse les jours non specifies dans le texte meme, mais le contexte du pelerinage et la qualification « comptes » (ma'dudat) les identifie comme les jours de tashreeq (11, 12, 13 de dhul-hijja). La preposition fi (pendant) indique que le dhikr couvre la duree de ces jours — il ne s'agit pas d'un moment ponctuel mais d'une invocation continue pendant des jours entiers.

Le mot **ma'dudatin** est un participe passif feminin pluriel de la racine e-d-d. Le Lane's donne : compter, denombrer, enumerer, nombrer. Le participe passif ma'dud signifie « compte, denombre, determine en nombre ». Le feminin pluriel s'accorde avec ayyam (jours, grammaticalement feminin pluriel en arabe). Les jours « comptes » sont des jours dont le nombre est fixe et connu — ils ne sont pas indefinis mais determines. Le Lane's distingue ma'dudat (comptes, en nombre reduit et determine) de ma'lumat (connus, identifies par leur nom). Les « jours comptes » sont peu nombreux et delimites — c'est une periode breve et definie.

Le verbe **ta'ajjala** est un accompli Form V 3MS de la racine e-j-l. Le Lane's donne : se hater, se precipiter, vouloir obtenir quelque chose avant son temps, s'empresser. La Form V (ta-fa''ala) indique la reflexivite — il s'est hate lui-meme, il a choisi de se presser. L'accompli marque l'action comme un choix fait — celui qui a decide de se hater. Le sujet est « man » (quiconque) — toute personne qui choisit de partir au bout de deux jours. La hate ici n'est pas negative — c'est un choix legitime de raccourcir le sejour.

Le nom **yawmayni** est un duel genitif de la racine y-w-m. Le Lane's donne : jour, journee. Le duel marque exactement deux — deux jours, ni plus ni moins. La preposition fi (en) indique la duree du sejour raccourci. Les « deux jours » sont les deux premiers jours de tashreeq (11 et 12 de dhul-hijja) — celui qui part apres deux jours au lieu de trois a choisi la hate.

Le nom **ithma** est un nom accusatif indefini de la racine a-th-m. Le Lane's donne : peche, faute, crime, delit, transgression, culpabilite, acte qui devie de ce qui est juste. Le ithm est un acte qui sort du droit chemin — c'est une deviation volontaire de ce qui est correct. La construction « fa-la ithma 'alayhi » (pas de faute sur lui) est une negation de genre (la + nom accusatif indefini) qui nie toute existence de faute — il n'y a aucune faute, pas la moindre, sur celui qui se hate. La preposition 'alayhi (sur lui) montre que la faute est un fardeau qui pese sur celui qui la commet — ici, ce fardeau est absent. Le texte repete cette meme construction pour celui qui retarde, montrant la symetrie parfaite des deux options.

Le verbe **ta'akhkhara** est un accompli Form V 3MS de la racine a-kh-r. Le Lane's donne : etre dernier, retarder, reporter, venir apres, trainer. La Form V (ta-fa''ala) indique la reflexivite — il s'est retarde lui-meme, il a choisi de rester. L'accompli marque l'action comme un choix fait. Le sens actif dans ce verset est « retarder son depart » — celui qui choisit de rester trois jours au lieu de deux. La racine a-kh-r couvre a la fois l'au-dela (al-akhira) et le retard (ta'akhkhur) — ici c'est le sens temporel de retard qui est actif.

Le verbe **ittaqa** est un accompli Form VIII 3MS de la racine w-q-y. Le Lane's donne : se proteger, se premunir, craindre, eviter le danger, se garder de. La Form VIII (ifta'ala) indique la reflexivite intensive — il s'est premuni lui-meme, il a pris la taqwa pour lui. L'accompli marque l'action comme une realite accomplie. Le contexte « li-mani ittaqa » (pour celui qui se premunit) pose la condition de l'absence de faute — la flexibilite (partir en deux ou trois jours) est reservee a celui qui a la taqwa. Sans taqwa, la flexibilite perd son sens. La taqwa est le cadre qui rend les deux options equivalentes.

Le verbe **ittaqu** est un imperatif Form VIII 2MP de la racine w-q-y. Le Lane's donne les memes sens que ci-dessus. L'imperatif transforme la taqwa de condition (ittaqa, 3MS) en ordre (ittaqu, 2MP) — apres avoir pose la condition, le verset ordonne la taqwa directement. La transition du « il » au « vous » est significative : la taqwa n'est pas seulement une condition theorique mais un ordre pratique adresse a tous.

Le nom **Allaha** (seconde occurrence) est le meme nom propre de Dieu a l'accusatif, complement d'objet du verbe ittaqu. La construction « ittaqu Allaha » (premunissez-vous de Dieu) fait de Dieu a la fois la source de la protection et l'objet de la crainte reverencielle. Se premunir de Dieu, c'est se proteger de Son chatiment en obeissant a Ses ordres.

Le verbe **i'lamu** est un imperatif 2MP de la racine e-l-m. Le Lane's donne : savoir, connaitre, etre informe, avoir la certitude, comprendre. L'imperatif est un ordre de savoir — sachez, soyez certains, ne soyez pas dans l'ignorance. Le savoir demande est une certitude interieure — pas une information neutre mais une conviction profonde. L'objet du savoir est « annakum ilayhi tuhsharuna » (que vous serez rassembles vers Lui) — l'objet de la certitude est le rassemblement final.

Le verbe **tuhsharuna** est un inaccompli passif 2MP de la racine h-sh-r. Le Lane's donne : rassembler, reunir, regrouper, conduire ensemble vers un lieu. Le hashr est l'acte de rassembler des elements disperses en un seul point. Le passif (tuhsharuna = vous serez rassembles) montre que les etres humains ne se rassemblent pas d'eux-memes — ils sont rassembles par une force superieure. L'inaccompli marque l'avenir — vous SEREZ rassembles, ce n'est pas encore fait mais c'est certain. La preposition ilayhi (vers Lui) centre le rassemblement sur Dieu — le point de convergence final est Dieu Lui-meme. Le verset se termine sur cette certitude eschatologique : toutes les flexibilites du pelerinage s'inscrivent dans un horizon plus grand — le rassemblement final vers Dieu.

§JUSTIFICATION§
**invoquez** — Le sens retenu est « rappeler/invoquer ». Le verbe udhkuru est un imperatif qui ordonne le rappel actif de Dieu pendant les jours de tashreeq. L'alternative « mentionner » au sens neutre est ecartee car le contexte exige une invocation intense et continue pendant des jours entiers, pas une simple mention en passant.

**Dieu** (premiere occurrence) — Le nom propre de la divinite, traduit par « Dieu » selon la convention du projet. Objet du verbe invoquer.

**des jours** — Le sens retenu est « jour/periode temporelle ». Le mot ayyamin designe des jours au sens propre. L'alternative « evenement » est ecartee car le pluriel indefini suivi de « comptes » indique une duree numerique, pas des evenements marques.

**comptes** — Le sens retenu est « compter/denombrer ». Le participe passif ma'dudatin qualifie les jours comme « comptes, determines en nombre ». L'alternative « prepares » est ecartee car le contexte de jours determines impose le sens de denombrement, pas de preparation.

**se hate** — Le sens retenu est « se hater/se presser ». Le verbe ta'ajjala designe le choix de raccourcir le sejour. L'alternative « veau (d'or) » est un homonyme sans rapport avec le contexte.

**deux jours** — Le sens retenu est « jour (duel) ». Le mot yawmayni designe exactement deux jours — les deux premiers jours de tashreeq. Aucune alternative pertinente.

**faute** — Le sens retenu est « faute/peche ». Le mot ithma designe un acte qui devie du juste. L'alternative « chatiment/consequence » est ecartee car la construction « la ithma 'alayhi » (aucune faute sur lui) nie la faute elle-meme, pas sa consequence — c'est l'acte qui est nie, pas sa punition.

**retarde** — Le sens retenu est « retarder/rester plus longtemps ». Le verbe ta'akhkhara designe le choix de rester trois jours. L'alternative « au-dela (akhira) » est ecartee car la Form V active le sens temporel de retard, pas le sens eschatologique.

**se premunit** — Le sens retenu est « se premunir/se proteger ». Le verbe ittaqa designe la taqwa — la protection de soi par l'obeissance a Dieu. L'alternative « bouclier » au sens concret est ecartee car le verbe decrit un etat spirituel, pas un objet physique.

**premunissez-vous** — Meme racine que ci-dessus, a l'imperatif 2MP. L'ordre est collectif — tous doivent se premunir.

**Dieu** (seconde occurrence) — Objet du verbe « premunissez-vous ». Meme traduction.

**sachez** — Le sens retenu est « savoir/avoir la certitude ». Le verbe i'lamu est un imperatif qui ordonne la certitude. L'alternative « marquer/signe » est ecartee car le verbe est a la Form I avec un complement propositionnel (annakum...) qui impose le sens de savoir.

**vous serez rassembles** — Le sens retenu est « rassembler/reunir ». Le verbe tuhsharuna au passif designe le rassemblement eschatologique. L'alternative « expulser » est ecartee car le rassemblement vers Dieu (ilayhi) implique une convergence, pas une expulsion.

§CRITIQUE§
Les traductions courantes rendent ce verset de maniere globalement fidele. Le point notable est la traduction de « li-mani ittaqa » (pour celui qui se premunit). Hamidullah traduit « pour celui qui craint [Allah] », ajoutant « Allah » entre crochets. Le texte arabe ne mentionne pas Dieu dans cette proposition — il dit simplement « pour celui qui ittaqa » (se premunit). L'ajout de « Allah » est une interpretation. Le verbe ittaqa signifie « se premunir, se proteger » — la taqwa est d'abord une attitude de protection de soi par la vigilance, pas seulement une crainte de Dieu. La construction « li-mani ittaqa » peut s'appliquer a toute personne qui prend ses precautions spirituelles, sans nommer explicitement l'objet de la taqwa. Par ailleurs, le mot « peche » pour ithm est une traduction chargee — ithm dans le Lane's est plus large que « peche » au sens chretien : c'est une faute, une deviation, un acte qui sort du juste. La traduction par « faute » est plus fidele au champ semantique de la racine a-th-m. Enfin, la construction parallele « fa-la ithma 'alayhi... wa-man ta'akhkhara fa-la ithma 'alayhi » montre une symetrie parfaite que les traductions ne rendent pas toujours — le texte dit exactement la meme chose pour les deux options, soulignant leur equivalence totale.`,
    segments: [
      { fr: "et", phon: "wa", arabic: "\u0648\u064e", is_particle: true, position: 0 },
      { fr: "invoquez", pos: "verbe", phon: "udhkuru", arabic: "\u0671\u0630\u0652\u0643\u064f\u0631\u064f\u0648\u0627\u06df", word_key: "dhkr", is_particle: false, sense_retenu: "invoquer", position: 1 },
      { fr: "Dieu", pos: "nom", phon: "Allaha", arabic: "\u0671\u0644\u0644\u0651\u064e\u0647\u064e", word_key: "alh", is_particle: false, sense_retenu: "Dieu", position: 2 },
      { fr: "pendant", phon: "fi", arabic: "\u0641\u0650\u0649\u06d3", is_particle: true, position: 3 },
      { fr: "des jours", pos: "nom", phon: "ayyamin", arabic: "\u0623\u064e\u064a\u0651\u064e\u0627\u0645\u064d", word_key: "ywm", is_particle: false, sense_retenu: "jours", position: 4 },
      { fr: "comptes", pos: "adjectif", phon: "ma'dudatin", arabic: "\u0645\u0651\u064e\u0639\u0652\u062f\u064f\u0648\u062f\u064e\u0640\u0670\u062a\u064d", word_key: "edd", is_particle: false, sense_retenu: "comptes/determines", position: 5 },
      { fr: "et quiconque", phon: "fa-man", arabic: "\u0641\u064e\u0645\u064e\u0646", is_particle: true, position: 6 },
      { fr: "se hate", pos: "verbe", phon: "ta'ajjala", arabic: "\u062a\u064e\u0639\u064e\u062c\u0651\u064e\u0644\u064e", word_key: "ejl", is_particle: false, sense_retenu: "se hater", position: 7 },
      { fr: "en", phon: "fi", arabic: "\u0641\u0650\u0649", is_particle: true, position: 8 },
      { fr: "deux jours", pos: "nom", phon: "yawmayni", arabic: "\u064a\u064e\u0648\u0652\u0645\u064e\u064a\u0652\u0646\u0650", word_key: "ywm", is_particle: false, sense_retenu: "deux jours", position: 9 },
      { fr: "alors pas de", phon: "fa-la", arabic: "\u0641\u064e\u0644\u064e\u0627\u06d3", is_particle: true, position: 10 },
      { fr: "faute", pos: "nom", phon: "ithma", arabic: "\u0625\u0650\u062b\u0652\u0645\u064e", word_key: "athm", is_particle: false, sense_retenu: "faute", position: 11 },
      { fr: "sur lui", phon: "'alayhi", arabic: "\u0639\u064e\u0644\u064e\u064a\u0652\u0647\u0650", is_particle: true, position: 12 },
      { fr: "et quiconque", phon: "wa-man", arabic: "\u0648\u064e\u0645\u064e\u0646", is_particle: true, position: 13 },
      { fr: "retarde", pos: "verbe", phon: "ta'akhkhara", arabic: "\u062a\u064e\u0623\u064e\u062e\u0651\u064e\u0631\u064e", word_key: "akhr", is_particle: false, sense_retenu: "retarder", position: 14 },
      { fr: "alors pas de", phon: "fa-la", arabic: "\u0641\u064e\u0644\u064e\u0627\u06d3", is_particle: true, position: 15 },
      { fr: "faute", pos: "nom", phon: "ithma", arabic: "\u0625\u0650\u062b\u0652\u0645\u064e", word_key: "athm", is_particle: false, sense_retenu: "faute", position: 16 },
      { fr: "sur lui", phon: "'alayhi", arabic: "\u0639\u064e\u0644\u064e\u064a\u0652\u0647\u0650", is_particle: true, position: 17 },
      { fr: "pour celui qui", phon: "li-mani", arabic: "\u0644\u0650\u0645\u064e\u0646\u0650", is_particle: true, position: 18 },
      { fr: "se premunit", pos: "verbe", phon: "ittaqa", arabic: "\u0671\u062a\u0651\u064e\u0642\u064e\u0649\u0640\u0670", word_key: "wqy", is_particle: false, sense_retenu: "se premunir", position: 19 },
      { fr: "et", phon: "wa", arabic: "\u0648\u064e", is_particle: true, position: 20 },
      { fr: "premunissez-vous", pos: "verbe", phon: "ittaqu", arabic: "\u0671\u062a\u0651\u064e\u0642\u064f\u0648\u0627\u06df", word_key: "wqy", is_particle: false, sense_retenu: "se premunir", position: 21 },
      { fr: "Dieu", pos: "nom", phon: "Allaha", arabic: "\u0671\u0644\u0644\u0651\u064e\u0647\u064e", word_key: "alh", is_particle: false, sense_retenu: "Dieu", position: 22 },
      { fr: "et", phon: "wa", arabic: "\u0648\u064e", is_particle: true, position: 23 },
      { fr: "sachez", pos: "verbe", phon: "i'lamu", arabic: "\u0671\u0639\u0652\u0644\u064e\u0645\u064f\u0648\u06d3\u0627\u06df", word_key: "elm", is_particle: false, sense_retenu: "savoir", position: 24 },
      { fr: "que vous", phon: "annakum", arabic: "\u0623\u064e\u0646\u0651\u064e\u0643\u064f\u0645\u0652", is_particle: true, position: 25 },
      { fr: "vers Lui", phon: "ilayhi", arabic: "\u0625\u0650\u0644\u064e\u064a\u0652\u0647\u0650", is_particle: true, position: 26 },
      { fr: "vous serez rassembles", pos: "verbe", phon: "tuhsharuna", arabic: "\u062a\u064f\u062d\u0652\u0634\u064e\u0631\u064f\u0648\u0646\u064e", word_key: "hšr", is_particle: false, sense_retenu: "rassembler", position: 27 }
    ],
    words: [
      // dhkr pos=1 (imperatif 2MP "invoquez")
      {
        word_key: "dhkr", position: 1, sense_chosen: "invoquer",
        analysis_axes: {
          sense_chosen: "invoquer",
          concept_chosen: "Memoire/Rappel",
          concepts: {
            "Memoire/Rappel": {
              status: "retenu",
              senses: ["se souvenir", "rappeler", "mentionner", "invoquer", "evoquer", "garder en memoire", "faire mention"],
              proof_ctx: "Le verbe udhkuru est un imperatif 2MP de la racine dh-k-r. Le Lane's donne : se souvenir, rappeler, mentionner, invoquer, evoquer, garder en memoire. Le dhikr est un acte de memoire active — ce n'est pas un souvenir passif qui remonte seul mais un rappel volontaire et dirige vers son objet. C'est un acte interieur (la conscience qui se tourne) qui se manifeste a l'exterieur (par la parole ou le coeur). Le dhikr de Dieu est l'acte de ramener Dieu dans sa conscience, de Le mentionner, de L'invoquer. L'imperatif donne a cet acte le statut d'un ordre — invoquez, pas « si vous le souhaitez ». Le dhikr est l'oppose du nisyan (oubli) — invoquer Dieu c'est refuser de L'oublier. La distinction avec la simple « mention » est que le dhikr implique un engagement interieur — on ne mentionne pas Dieu comme on mentionne un objet, on Le rappelle avec tout son etre.",
              axe1_verset: "Le verbe udhkuru ouvre le verset comme un ordre direct. Le champ lexical (Dieu, jours, comptes, faute, se premunir, savoir, rassembler) montre que le dhikr est le cadre general dans lequel s'inscrivent les jours de tashreeq. Les jours comptes ne sont pas des jours quelconques — ce sont des jours de dhikr. L'imperatif pluriel s'adresse a tous les pelerins sans exception. Le verset place le dhikr avant la question de la duree (deux ou trois jours) — l'essentiel est le rappel, pas la duree du sejour. Le dhikr est le contenu, les jours sont le contenant.",
              axe2_voisins: "Le verset 2:200 contenait le meme imperatif udhkuru (invoquez Dieu) dans le contexte post-rituel avec la comparaison des peres. Le verset 2:203 reprend le meme ordre dans un contexte different — les jours comptes de Mina. La sequence 200-203 montre que le dhikr est l'activite permanente du pelerinage : apres les rites (200), pendant les jours de tashreeq (203). Le dhikr n'est pas ponctuel mais continu — il couvre toutes les phases du pelerinage et au-dela.",
              axe3_sourate: "La racine dh-k-r est un leitmotiv de la sourate al-Baqarah. En 2:40, « rappelez-vous Mon bienfait ». En 2:152, « rappelez-vous Moi, Je Me rappellerai de vous ». En 2:200, le dhikr intense apres les rites. En 2:203, le dhikr pendant les jours comptes. La sourate construit le dhikr comme une obligation omnipresente — pas un moment specifique mais un etat permanent que le croyant doit maintenir. Chaque occurrence ajoute un contexte nouveau pour le meme acte.",
              axe4_coherence: "La racine dh-k-r apparait environ 292 fois dans le Coran. En 33:41, « rappelez Dieu d'un rappel abondant (dhikran kathiran) ». En 73:8, « rappelle le nom de ton Seigneur ». En 62:10, « rappelez Dieu abondamment ». Le Coran fait du dhikr le pilier de la vie spirituelle — il n'est pas limite a un temps ou un lieu. Le verset 2:203 inscrit le dhikr dans un cadre temporel precis (jours comptes) mais l'imperatif final (ittaqu, i'lamu) montre que la conscience de Dieu depasse ces jours.",
              axe5_frequence: "Pour la mission du khalifa, le dhikr pendant les jours comptes montre que la mission a des temps forts. Le khalifa ne rappelle pas Dieu de maniere uniforme — il y a des periodes d'intensite accrue, comme les jours de tashreeq. Mais ces periodes ne sont que des concentres de ce qui doit etre permanent. Le khalifa qui rappelle Dieu pendant les jours comptes apprend a Le rappeler en tout temps. Les jours comptes sont un entrainement au dhikr continu."
            },
            "Masculin": {
              status: "nul",
              senses: ["male", "masculin"],
              proof_ctx: "Le sens de masculinite est un sens atteste pour la racine dh-k-r (dhakar = male). Mais le verbe udhkuru est un imperatif du dhikr (rappel/invocation), pas une reference au sexe masculin. La forme verbale, le contexte (invoquer Dieu pendant des jours) et la construction syntaxique excluent completement ce sens."
            }
          }
        }
      },
      // alh pos=2 (accusatif "Dieu")
      {
        word_key: "alh", position: 2, sense_chosen: "Dieu",
        analysis_axes: {
          sense_chosen: "Dieu",
          concept_chosen: "Divinite",
          concepts: {
            "Divinite": {
              status: "retenu",
              senses: ["Dieu", "divinite", "celui qui est adore", "celui devant qui on est perplexe"],
              proof_ctx: "Le nom Allaha est le nom propre de Dieu a l'accusatif, complement d'objet du verbe udhkuru. Le Lane's rattache la racine a-l-h a l'adoration, la perplexite devant la grandeur, la recherche de refuge. Le nom Allah designe la divinite unique — la realite supreme vers laquelle se tourne toute adoration. L'accusatif marque que Dieu est l'objet du rappel — c'est Lui qu'il faut invoquer pendant les jours comptes. La mention de Dieu comme objet du dhikr centre l'invocation sur la divinite elle-meme, pas sur les bienfaits ou les demandes particulieres.",
              axe1_verset: "Le mot Allaha est l'objet direct du verbe udhkuru — invoquez DIEU. Le champ lexical (invoquer, jours comptes, faute, se premunir, savoir, rassembler) montre que Dieu est le centre du verset. Toutes les dispositions pratiques (duree du sejour, absence de faute) s'inscrivent dans le cadre du rappel de Dieu. Le verset commence par Dieu (objet du dhikr) et finit par Dieu (vers Lui vous serez rassembles) — Dieu encadre le verset du debut a la fin.",
              axe2_voisins: "Le verset 2:200 faisait de Dieu l'objet du dhikr post-rituel. Le verset 2:203 reprend le meme schema — Dieu est l'objet du dhikr pendant les jours comptes. La sequence montre la continuite : les rites finissent, les jours de tashreeq commencent, mais l'objet du rappel reste le meme — Dieu. Les versets 200-203 construisent un arc ou Dieu est le fil conducteur de toute l'experience du pelerinage.",
              axe3_sourate: "Le nom Allah est le mot le plus frequent de la sourate al-Baqarah. Il apparait dans chaque registre : legislatif, narratif, exhortatif. En 2:203, Dieu est l'objet du dhikr et de la taqwa, et la destination du rassemblement. La sourate construit la relation avec Dieu comme omnipresente — dans les rites, apres les rites, pendant les jours comptes, et au-dela dans le rassemblement final.",
              axe4_coherence: "Le nom Allah apparait environ 2699 fois dans le Coran. La mention de Dieu comme objet du dhikr et de la taqwa est une constante coranique. Le verset 2:203 combine les deux — invoquez Dieu et premunissez-vous de Dieu — montrant que le dhikr et la taqwa sont les deux faces d'une meme orientation vers Dieu.",
              axe5_frequence: "Pour la mission du khalifa, Dieu est la source et la finalite de la mission. Le verset 2:203 encadre toute l'action du pelerinage par Dieu — le debut (dhikr) et la fin (hashr vers Lui). Le khalifa qui garde Dieu au debut et a la fin de ses actions maintient l'orientation correcte de sa mission."
            }
          }
        }
      },
      // ywm pos=4 (nom pluriel indefini genitif "des jours")
      {
        word_key: "ywm", position: 4, sense_chosen: "jours",
        analysis_axes: {
          sense_chosen: "jours",
          concept_chosen: "Temps/Periode",
          concepts: {
            "Temps/Periode": {
              status: "retenu",
              senses: ["jour", "journee", "temps", "periode"],
              proof_ctx: "Le nom ayyamin est un pluriel indefini genitif de la racine y-w-m. Le Lane's donne : jour, journee, temps, periode, unite temporelle. Le yawm est l'unite fondamentale du temps vecu — un cycle complet de jour et de nuit. Le pluriel ayyam designe plusieurs jours. L'indefini (ayyamin, pas al-ayyam) laisse les jours sans identification dans le texte meme — c'est la qualification « comptes » (ma'dudat) qui les determine. Le temps ici est un temps mesurable et limite — pas le temps abstrait mais des jours concrets et denombrables. La distinction avec « evenement » est que le yawm ici est une duree, pas un fait marquant — ce sont des jours pendant lesquels on invoque, pas des evenements qui arrivent.",
              axe1_verset: "Le mot ayyamin est le cadre temporel du dhikr — invoquez Dieu PENDANT des jours comptes. Le champ lexical (invoquer, Dieu, comptes, se hater, deux jours, retarder) montre que les jours sont le support temporel de l'invocation et du sejour. Le verset organise le temps du pelerinage : des jours comptes, avec la flexibilite de deux ou trois jours. Les jours ne sont pas une fin en soi — ils sont le cadre du dhikr. Le pluriel montre qu'il ne s'agit pas d'un seul jour mais de plusieurs — une periode continue de rappel.",
              axe2_voisins: "Le verset 2:184 mentionnait « des jours comptes (ayyaman ma'dudat) » pour le jeune du Ramadan. Le verset 2:203 reprend la meme expression pour les jours de tashreeq. La sourate utilise « jours comptes » comme formule recurrente pour designer des periodes delimitees d'obligation — le jeune et le dhikr du pelerinage partagent cette structure de jours determines. Le parallele montre que les obligations religieuses ont des temps fixes, pas arbitraires.",
              axe3_sourate: "La racine y-w-m est extremement frequente dans la sourate al-Baqarah. En 2:8, « le Jour dernier ». En 2:48, « le Jour ou aucune ame ne sera utile a une autre ». En 2:184, « des jours comptes » (jeune). En 2:203, « des jours comptes » (tashreeq). La sourate utilise le yawm a la fois pour le temps present (jours d'obligation) et le temps eschatologique (Jour dernier). Le verset 2:203 combine les deux par sa structure — des jours comptes maintenant, et le rassemblement vers Dieu a la fin.",
              axe4_coherence: "La racine y-w-m apparait environ 405 fois dans le Coran. Le Coran utilise le yawm pour les obligations temporelles (jours de jeune, jours de tashreeq) et pour les evenements eschatologiques (Jour de la Resurrection, Jour du Compte). Le verset 2:203 inscrit les jours du pelerinage dans un temps mesure et limite — c'est l'oppose du Jour du Jugement qui est immense et sans mesure humaine.",
              axe5_frequence: "Pour la mission du khalifa, les jours comptes montrent que la mission a des echeances. Le khalifa ne travaille pas dans un temps infini — il a des jours determines pour accomplir ses obligations. Les jours comptes enseignent la discipline du temps — chaque jour compte, aucun ne doit etre gaspille. Le khalifa qui sait que ses jours sont comptes agit avec urgence et determination."
            },
            "Evenement/Moment marquant": {
              status: "peu_probable",
              senses: ["evenement", "bataille", "jour de combat", "jour marquant"],
              proof_ctx: "Le sens d'evenement ou de moment marquant est un sens atteste de y-w-m dans le Lane's — « les jours des Arabes (ayyam al-'arab) » designent les batailles et les evenements memorables. Mais dans le verset 2:203, les « jours comptes » sont des periodes temporelles determinees en nombre, pas des evenements marquants. La qualification ma'dudat (comptes, denombrables) impose le sens de duree mesurable. La distinction philosophique est que l'evenement est un fait qualitatif (il se passe quelque chose de memorable), tandis que la duree est un cadre quantitatif (un nombre de jours). Les jours de tashreeq sont un cadre temporel pour le dhikr, pas des evenements en soi."
            }
          }
        }
      },
      // edd pos=5 (participe passif feminin pluriel "comptes")
      {
        word_key: "edd", position: 5, sense_chosen: "comptes/determines",
        analysis_axes: {
          sense_chosen: "comptes/determines",
          concept_chosen: "Denombrement/Calcul",
          concepts: {
            "Denombrement/Calcul": {
              status: "retenu",
              senses: ["compter", "denombrer", "nombre", "enumerer", "nombreux"],
              proof_ctx: "Le mot ma'dudatin est un participe passif feminin pluriel de la racine e-d-d. Le Lane's donne : compter, denombrer, enumerer, nombrer, preparer, etre determine en nombre. Le participe passif ma'dud signifie « qui a ete compte, dont le nombre est determine ». Le feminin pluriel s'accorde avec ayyam (jours). Les jours « comptes » sont des jours dont le nombre est fixe et connu d'avance — ils ne sont pas indefinis mais delimites. Le denombrement est un acte objectif et rationnel — on ne compte pas selon l'impression mais selon le chiffre exact. Le Lane's distingue ma'dudat (comptes, peu nombreux et determines) de ma'lumat (connus, identifies par leur nom) — en 2:203 les jours sont « comptes » (denombres), en 22:28 ils sont « connus » (identifies). Cette distinction montre que ma'dudat insiste sur la quantite limitee.",
              axe1_verset: "Le mot ma'dudatin qualifie les jours pendant lesquels le dhikr est ordonne. Le champ lexical (invoquer, Dieu, jours, se hater, deux jours, retarder) montre que le caractere « compte » des jours est lie a la flexibilite du sejour — les jours sont comptes parce qu'ils sont deux ou trois, pas plus. Le participe passif montre que c'est Dieu qui a compte ces jours — les pelerins ne fixent pas la duree eux-memes, elle est predeterminee. Le verset pose un cadre temporel precis dans lequel la liberte du pelerin s'exerce (deux ou trois jours).",
              axe2_voisins: "Le verset 2:184 utilisait la meme expression « ayyaman ma'dudatin » (des jours comptes) pour le jeune du Ramadan. En 2:184, les jours comptes sont les jours de jeune, avec des dispenses pour le voyageur et le malade. En 2:203, les jours comptes sont les jours de tashreeq, avec la flexibilite de deux ou trois jours. Le parallele montre que le Coran utilise « jours comptes » pour des obligations temporaires avec une certaine souplesse — le nombre est fixe mais il y a de la flexibilite dans l'application.",
              axe3_sourate: "La racine e-d-d apparait dans la sourate al-Baqarah en 2:80 (« le feu ne nous touchera que des jours comptes — ayyaman ma'dudata ») et en 2:184 (« des jours comptes — ayyaman ma'dudatin »). En 2:80, les incroyants pensent que leur chatiment sera de courte duree — les « jours comptes » expriment leur illusion de brievete. En 2:184, les jours comptes sont une realite positive — une obligation limitee dans le temps. En 2:203, les jours comptes sont les jours de tashreeq — une duree precise et courte.",
              axe4_coherence: "La racine e-d-d apparait environ 57 fois dans le Coran. En 3:200, « et comptez (wa-rabitu) ». En 19:94, « Il les a comptes et denombres un a un ». Le Coran utilise le denombrement pour marquer la precision divine — Dieu compte tout, rien ne Lui echappe. Les jours « comptes » du verset 2:203 sont fixes par Dieu avec une precision qui n'admet pas l'approximation — ce sont exactement ces jours-la, ni plus ni moins (avec la flexibilite de deux ou trois).",
              axe5_frequence: "Pour la mission du khalifa, le denombrement montre que la mission est structuree. Le khalifa ne vit pas dans le flou — ses obligations sont comptees, delimitees, precises. Les jours comptes du pelerinage enseignent la rigueur dans la gestion du temps. Le khalifa qui compte ses jours planifie sa mission avec exactitude."
            },
            "Preparation": {
              status: "peu_probable",
              senses: ["preparer", "equiper"],
              proof_ctx: "Le sens de preparation est atteste dans le Lane's pour la racine e-d-d (a'adda = preparer, rendre pret). Mais dans le verset, le mot ma'dudatin est un participe passif qui qualifie des jours — on dit « des jours comptes » (determines en nombre), pas « des jours prepares ». La distinction philosophique est que le denombrement determine la quantite (combien de jours), tandis que la preparation determine la qualite (prets pour quoi). Le contexte de la duree du sejour (deux ou trois jours) impose le sens quantitatif de denombrement, pas le sens qualitatif de preparation."
            }
          }
        }
      },
      // ejl pos=7 (accompli Form V 3MS "se hate")
      {
        word_key: "ejl", position: 7, sense_chosen: "se hater",
        analysis_axes: {
          sense_chosen: "se hater",
          concept_chosen: "Hate/Precipitation",
          concepts: {
            "Hate/Precipitation": {
              status: "retenu",
              senses: ["se hater", "presser", "precipiter", "s'empresser", "vouloir avant le temps"],
              proof_ctx: "Le verbe ta'ajjala est un accompli Form V 3MS de la racine e-j-l. Le Lane's donne : se hater, se precipiter, vouloir obtenir quelque chose avant son temps, s'empresser, devancer l'echeance. La Form V (ta-fa''ala) indique la reflexivite — le sujet s'est hate lui-meme, il a choisi activement de se presser. La hate est un acte directionnel — on se hate vers quelque chose ou pour quelque chose. Dans le verset, la hate est le choix de partir au bout de deux jours au lieu de trois — ce n'est pas une hate negative (precipitation) mais un choix legitime. Le Lane's montre que la racine e-j-l couvre un spectre allant de la hate negative (precipiter sans reflexion) a la hate neutre (choisir le plus rapide) — ici c'est le sens neutre qui est actif.",
              axe1_verset: "Le verbe ta'ajjala introduit la premiere option du pelerin. Le champ lexical (jours comptes, deux jours, faute, retarder) montre que la hate est l'une des deux options legitimes. Le verset ne juge pas la hate — il la pose comme une possibilite sans faute. La construction « fa-man ta'ajjala fi yawmayni fa-la ithma 'alayhi » (quiconque se hate en deux jours, aucune faute sur lui) explicite que la hate n'entraine aucune consequence negative. Le verbe a l'accompli marque un choix fait et assume — celui qui s'est hate a pris sa decision.",
              axe2_voisins: "Les versets 2:196-202 detaillaient les rites du pelerinage et les invocations. Le verset 2:203 traite de la duree du sejour post-rituel — une question pratique apres les questions spirituelles. La transition montre que le pelerinage combine le spirituel (dhikr, invocation) et le pratique (combien de jours rester). La hate de 2:203 n'est pas la precipitation blâmable mentionnee en d'autres endroits du Coran — c'est une option organisationnelle.",
              axe3_sourate: "La racine e-j-l apparait dans la sourate al-Baqarah en 2:51 (« quand Moise s'absenta quarante nuits, vous avez pris le veau apres lui — 'ijl ») et en 2:203 (ta'ajjala = se hater). En 2:51, le 'ijl est le veau d'or — un homonyme de la racine e-j-l lie a la precipitation et a l'impatience. En 2:203, la hate est positive ou neutre. La sourate montre les deux faces de la racine — la precipitation blâmable (veau d'or) et la hate permise (quitter Mina en deux jours).",
              axe4_coherence: "La racine e-j-l apparait environ 47 fois dans le Coran. En 17:11, « l'homme invoque le mal avec la meme hate qu'il invoque le bien — l'homme est precipite (ajul) ». En 21:37, « l'homme est cree de precipitation (min 'ajal) ». Le Coran presente la hate comme un trait humain fondamental — l'homme est naturellement precipite. Le verset 2:203 canalise cette precipitation dans un cadre legitime — au lieu de blâmer la hate, il l'autorise dans un contexte ou elle ne cause aucun tort.",
              axe5_frequence: "Pour la mission du khalifa, la hate du verset 2:203 montre que la rapidite n'est pas toujours un defaut. Le khalifa qui agit vite dans un cadre legitime ne commet aucune faute. La flexibilite entre deux et trois jours enseigne au khalifa que certaines obligations admettent plusieurs rythmes — l'essentiel est la taqwa, pas la duree. Le khalifa qui se hate avec taqwa vaut celui qui prend son temps avec taqwa."
            },
            "Idolatrie": {
              status: "nul",
              senses: ["veau"],
              proof_ctx: "Le sens de « veau » (al-'ijl) est un homonyme de la racine e-j-l dans le Coran, designe specifiquement le veau d'or adore par les fils d'Israel. Mais le verbe ta'ajjala en Form V signifie « se hater » — la forme verbale, le contexte et la construction syntaxique excluent completement le sens de veau. On ne dit pas « quiconque se veau en deux jours »."
            }
          }
        }
      },
      // ywm pos=9 (duel genitif "deux jours")
      {
        word_key: "ywm", position: 9, sense_chosen: "deux jours",
        analysis_axes: {
          sense_chosen: "deux jours",
          concept_chosen: "Temps/Periode",
          concepts: {
            "Temps/Periode": {
              status: "retenu",
              senses: ["jour", "journee", "temps", "periode"],
              proof_ctx: "Le nom yawmayni est un duel genitif de la racine y-w-m. Le Lane's donne : jour, journee, unite temporelle. Le duel grammatical (yawmayn) designe exactement deux jours — la precision est maximale. Le genitif est gouverne par la preposition fi (en/pendant). Les « deux jours » sont les deux premiers jours de tashreeq (11 et 12 de dhul-hijja). Le duel est la forme arabe la plus precise — il ne dit pas « quelques jours » mais « exactement deux ». Cette precision s'inscrit dans le theme des « jours comptes » (ma'dudat) — les jours sont comptes, et ici on en compte exactement deux.",
              axe1_verset: "Le mot yawmayni precise la duree de la hate — se hater en DEUX jours, pas un, pas trois. Le champ lexical (jours comptes, se hater, faute, retarder) montre que les deux jours sont l'option courte du sejour a Mina. Le duel s'oppose implicitement au troisieme jour (celui de ta'akhkhur) — deux ou trois jours, telle est l'alternative. Le verset pose un choix binaire dans la duree, mais les deux options sont equivalentes en termes de faute (aucune dans les deux cas).",
              axe2_voisins: "Le verset 2:196 mentionnait des durees precises pour le jeune compensatoire (« trois jours pendant le pelerinage et sept a votre retour »). Le verset 2:203 utilise la meme precision numerique pour la duree du sejour. La sourate structure le pelerinage par des nombres precis — sacrifices, jours de jeune, jours de tashreeq. Le pelerin vit dans un cadre numeriquement defini.",
              axe3_sourate: "La racine y-w-m au duel (yawmayn) est rare dans la sourate al-Baqarah. En 2:203, le duel precise l'option courte du sejour. L'utilisation du duel montre la precision coranique — le texte ne laisse pas de flou sur la duree. Deux jours signifie deux jours, pas « environ deux jours » ou « quelques jours ».",
              axe4_coherence: "Le duel yawmayn apparait en plusieurs endroits du Coran. En 41:9, « en deux jours (fi yawmayni) Il crea la terre ». En 41:12, « en deux jours (fi yawmayni) Il decreta sept cieux ». Le Coran utilise le duel pour des durees precises et significatives — deux jours est un temps suffisant pour accomplir quelque chose de grand (la creation) ou de simple (quitter Mina).",
              axe5_frequence: "Pour la mission du khalifa, les deux jours montrent que meme les obligations courtes suffisent quand elles sont faites avec taqwa. Le khalifa n'est pas juge par la duree de ses efforts mais par leur qualite. Deux jours avec taqwa valent trois jours avec taqwa — le critere n'est pas le temps mais la conscience de Dieu."
            }
          }
        }
      },
      // athm pos=11 (nom accusatif indefini "faute" - premiere occurrence)
      {
        word_key: "athm", position: 11, sense_chosen: "faute",
        analysis_axes: {
          sense_chosen: "faute",
          concept_chosen: "Faute/Peche",
          concepts: {
            "Faute/Peche": {
              status: "retenu",
              senses: ["pecher", "commettre une faute", "crime", "delit", "transgression"],
              proof_ctx: "Le nom ithma est un nom accusatif indefini de la racine a-th-m. Le Lane's donne : pecher, commettre une faute, un crime, un delit, une transgression ; ithm = peche, faute, crime, culpabilite, acte qui devie de ce qui est juste et droit ; athim = pecheur, coupable ; ta'aththama = s'abstenir du peche ; atham/uthum = chatiment du peche. La faute est un acte qui devie de ce qui est juste et droit. C'est un acte exterieur et volontaire — celui qui commet une faute a agi contre ce qu'il savait etre correct. La faute implique une responsabilite personnelle et une consequence. La construction « fa-la ithma 'alayhi » (aucune faute sur lui) est une negation de genre — elle nie toute existence de faute, pas seulement une faute particuliere mais toute faute en general. La preposition 'alayhi (sur lui) montre que la faute est concue comme un poids qui pese sur celui qui la commet — ici ce poids est absent.",
              axe1_verset: "Le mot ithma est le pivot du verset — c'est l'enjeu de la flexibilite entre deux et trois jours. Le champ lexical (se hater, deux jours, retarder, se premunir) montre que la question est : y a-t-il une faute a partir tot ou a rester tard ? La reponse est non dans les deux cas. Le mot ithm apparait deux fois dans le verset (positions 11 et 16), une fois pour chaque option, creant une symetrie parfaite. Cette repetition souligne que les deux options sont egales — aucune n'est fautive. La negation la ithma (aucune faute) libere le pelerin de tout scrupule.",
              axe2_voisins: "Les versets 2:196-202 traitaient des obligations du pelerinage avec des regles precises. Le verset 2:203 introduit la notion de faute pour la nier — contrairement aux obligations strictes (sacrifice obligatoire, circumambulations), la duree du sejour a Mina n'est pas une obligation rigide. La transition montre que le pelerinage combine des obligations fixes (ou la faute est possible) et des flexibilites (ou la faute est niee).",
              axe3_sourate: "La racine a-th-m apparait dans la sourate al-Baqarah en 2:85 (« peche — ithm »), 2:173 (« pas de faute — la ithma »), 2:182 (« pas de peche — la ithma »), et 2:203. En 2:173, la meme construction « la ithma 'alayhi » est utilisee pour celui qui mange du haram par necessite — pas de faute sur lui. En 2:203, la meme construction nie la faute pour celui qui part en deux ou trois jours. La sourate utilise « la ithma » comme formule de dispense — elle libere du poids de la faute dans des situations specifiques.",
              axe4_coherence: "La racine a-th-m apparait environ 48 fois dans le Coran. En 4:112, « wa-man yaksib ithman fa-innama yaksbihu 'ala nafsihi » (celui qui acquiert une faute ne l'acquiert que contre lui-meme). En 5:2, « ne vous entr'aidez pas dans le peche (ithm) et l'agression ». Le Coran presente le ithm comme un fardeau personnel — la faute pese sur celui qui la commet, et personne d'autre ne la porte. Le verset 2:203 dit que ce fardeau n'existe pas pour le pelerin qui choisit entre deux et trois jours — il est libre de cette charge.",
              axe5_frequence: "Pour la mission du khalifa, l'absence de faute dans la flexibilite montre que la mission admet des variations. Le khalifa n'est pas enferme dans un seul mode d'action — il peut choisir entre plusieurs approches sans commettre de faute, a condition de maintenir la taqwa. La flexibilite sans faute enseigne la liberte dans l'obeissance — on obeit a Dieu avec une marge de manoeuvre."
            },
            "Chatiment/Consequence": {
              status: "probable",
              senses: ["punition du peche", "retribution", "consequence"],
              proof_ctx: "Le sens de chatiment et de consequence de la faute est un sens atteste de la racine a-th-m dans le Lane's. Le atham et le uthum designent le chatiment du peche — la consequence qui frappe le fautif. Mais dans le verset, la construction « la ithma 'alayhi » nie la faute elle-meme, pas sa consequence. La distinction philosophique est que la faute est l'acte qui devie du juste (c'est l'action fautive elle-meme), tandis que le chatiment est ce qui arrive apres la faute (c'est la consequence). Le verset dit « aucune faute sur lui » — il nie l'existence de la faute, pas l'existence d'un chatiment. Si la faute n'existe pas, son chatiment n'a pas lieu d'etre. Le sens premier est la faute-acte, pas la faute-consequence."
            },
            "Culpabilite/Remords": {
              status: "peu_probable",
              senses: ["se sentir coupable", "regret", "remords"],
              proof_ctx: "Le sens de culpabilite interieure est un sens derive de la racine a-th-m. Le ta'aththum est l'acte de s'abstenir du peche par conscience de sa gravite. Mais dans le verset, ithm est utilise dans une negation objective (« aucune faute sur lui ») — il ne s'agit pas d'un sentiment interieur de culpabilite mais d'une realite objective de faute ou d'absence de faute. La distinction philosophique est que la culpabilite est un etat interieur qui reste chez celui qui la ressent, tandis que la faute est un acte exterieur qui peut etre constate objectivement. Le verset nie la faute objective, pas le sentiment de culpabilite — la question n'est pas « se sent-il coupable ? » mais « a-t-il fauté ? »."
            },
            "Sens isole/Lenteur": {
              status: "nul",
              senses: ["etre lent", "retarde"],
              proof_ctx: "Le sens de lenteur est un sens marginal et rare de la racine a-th-m dans le Lane's. Ce sens n'est pas pertinent ici — la lenteur est traitee par le verbe ta'akhkhara (racine a-kh-r), pas par ithm. Le mot ithm dans ce verset est clairement un nom designant la faute, pas un etat de lenteur."
            }
          }
        }
      },
      // akhr pos=14 (accompli Form V 3MS "retarde")
      {
        word_key: "akhr", position: 14, sense_chosen: "retarder",
        analysis_axes: {
          sense_chosen: "retarder",
          concept_chosen: "Alterite/Delai",
          concepts: {
            "Alterite/Delai": {
              status: "retenu",
              senses: ["autre", "dernier", "retarder", "au-dela", "reporter", "venir apres", "postposer"],
              proof_ctx: "Le verbe ta'akhkhara est un accompli Form V 3MS de la racine a-kh-r. Le Lane's donne : etre dernier, venir apres, retarder, reporter, trainer, rester en arriere, prendre du retard. La racine a-kh-r couvre le champ de la posteriorite — ce qui vient apres dans le temps ou dans l'espace. La Form V (ta-fa''ala) indique la reflexivite — il s'est retarde lui-meme, il a choisi de rester. La posteriorite est un fait directionnel — on est en arriere par rapport a un point de reference. Dans le verset, ta'akhkhara designe le choix de rester un troisieme jour a Mina au lieu de partir apres deux jours. Le verbe s'oppose directement a ta'ajjala (se hater) — les deux verbes forment un couple antithetique : hate vs retard. La distinction avec le sens d'au-dela (al-akhira) est que la Form V active le sens temporel de retard (decaler dans le temps), pas le sens eschatologique (la vie apres la mort).",
              axe1_verset: "Le verbe ta'akhkhara introduit la seconde option du pelerin — rester un jour de plus. Le champ lexical (se hater, deux jours, faute, se premunir) montre que le retard est le symetrique de la hate. Le verset construit un parallele parfait : « fa-man ta'ajjala... fa-la ithma / wa-man ta'akhkhara... fa-la ithma » — les deux options sont traitees de maniere identique. Le verbe a l'accompli marque un choix fait et assume — celui qui s'est retarde a pris sa decision.",
              axe2_voisins: "Le verset 2:200 utilisait la racine a-kh-r dans le mot al-akhirati (l'au-dela) — ceux qui ne demandent que l'ici-bas n'auront aucune part dans l'au-dela. Le verset 2:203 utilise la meme racine pour un sens different — retarder son depart. La proximite des deux usages dans la meme sourate montre la polyvalence de la racine a-kh-r — la posteriorite peut etre temporelle (retarder) ou eschatologique (l'au-dela).",
              axe3_sourate: "La racine a-kh-r apparait dans la sourate al-Baqarah en de nombreuses occurrences. En 2:4, croire en l'au-dela (al-akhira). En 2:86, acheter l'ici-bas au prix de l'au-dela. En 2:200, aucune part dans l'au-dela. En 2:203, retarder son depart (ta'akhkhara). La sourate utilise la racine pour les deux dimensions — l'au-dela comme realite eschatologique et le retard comme choix temporel. Le verset 2:203 est un des rares endroits ou la racine est utilisee dans son sens temporel pur.",
              axe4_coherence: "La racine a-kh-r apparait environ 250 fois dans le Coran, principalement pour l'au-dela (al-akhira). La Form V ta'akhkhara (retarder) est moins frequente. En 75:13, « on informera l'homme de ce qu'il a avance et retarde (ma qaddama wa akhkhara) ». En 14:42, « ne les retarde que pour un jour (li-yawmin) ». Le Coran utilise le retard comme un choix temporel qui peut etre neutre (2:203) ou lourd de consequences (14:42). Dans 2:203, le retard est explicitement sans faute.",
              axe5_frequence: "Pour la mission du khalifa, le retard choisi du verset 2:203 montre que prendre son temps n'est pas un defaut. Le khalifa qui choisit de rester plus longtemps dans une obligation ne commet aucune faute — au contraire, il fait preuve de patience et de perseverance. L'essentiel est la taqwa, pas la vitesse. Le khalifa apprend que la hate et le retard sont equivalents quand l'intention est droite."
            }
          }
        }
      },
      // athm pos=16 (nom accusatif indefini "faute" - seconde occurrence)
      {
        word_key: "athm", position: 16, sense_chosen: "faute",
        analysis_axes: {
          sense_chosen: "faute",
          concept_chosen: "Faute/Peche",
          concepts: {
            "Faute/Peche": {
              status: "retenu",
              senses: ["pecher", "commettre une faute", "crime", "delit", "transgression"],
              proof_ctx: "Le nom ithma est la seconde occurrence du meme mot a la meme racine a-th-m dans le verset. Le Lane's donne les memes sens : peche, faute, crime, transgression, acte qui devie du juste. Cette seconde occurrence complete la symetrie du verset : apres « aucune faute sur lui » pour celui qui se hate, le verset repete « aucune faute sur lui » pour celui qui retarde. La repetition n'est pas une redondance — elle est necessaire pour expliciter que les DEUX options sont sans faute. Si le verset n'avait mentionne l'absence de faute que pour une seule option, on aurait pu inferer que l'autre etait fautive. La double negation ferme toute echappatoire au scrupule.",
              axe1_verset: "Le second ithma cree un miroir parfait avec le premier. Le verset pose : hate → aucune faute / retard → aucune faute. La symetrie est le message central — les deux options sont absolument equivalentes en termes de faute. La preposition 'alayhi (sur lui) est repetee aussi — le fardeau de la faute est nie pour les deux sujets. Le verset refuse toute hierarchie entre les deux options — ni la hate ni le retard n'est preferable en termes de jugement moral.",
              axe2_voisins: "Les versets 2:196-202 posaient des obligations avec des consequences (sacrifice obligatoire, jeune compensatoire). Le verset 2:203 est un moment de liberation — dans un contexte d'obligations strictes, il affirme une flexibilite sans faute. La double negation de la faute contraste avec les obligations strictes des versets precedents. Le pelerinage n'est pas que contrainte — il y a aussi de la liberte.",
              axe3_sourate: "La repetition du mot ithm dans le meme verset est rare dans la sourate al-Baqarah. En 2:85, ithm apparait une fois. En 2:173, la ithma apparait une fois. En 2:203, la ithma apparait deux fois — une pour chaque option. Cette double occurrence est unique dans le contexte du pelerinage et souligne le caractere exceptionnel de la flexibilite accordee.",
              axe4_coherence: "La double negation de la faute dans le Coran est un procede stylistique fort. Le Coran nie generalement la faute une seule fois pour une situation donnee. En 2:203, la double negation montre que le texte anticipe le doute — le pelerin pourrait se demander si l'une des deux options est meilleure. Le texte tranche : les deux sont egales, aucune faute dans les deux cas.",
              axe5_frequence: "Pour la mission du khalifa, la double absence de faute enseigne l'equanimite. Le khalifa ne doit pas juger ceux qui choisissent differemment de lui dans les domaines de flexibilite. Ce qui est sans faute ne doit pas etre critique — la taqwa est le seul critere, pas la duree ou la methode."
            },
            "Chatiment/Consequence": {
              status: "probable",
              senses: ["punition du peche", "retribution", "consequence"],
              proof_ctx: "Meme analyse que pour la premiere occurrence. Le sens de chatiment est sous-jacent au sens de faute — qui nie la faute nie aussi son chatiment. Mais le verset nie l'acte fautif lui-meme, pas sa consequence. La faute est le sens premier dans cette construction syntaxique."
            },
            "Culpabilite/Remords": {
              status: "peu_probable",
              senses: ["se sentir coupable", "regret", "remords"],
              proof_ctx: "Meme analyse que pour la premiere occurrence. La negation objective « la ithma 'alayhi » nie la faute objective, pas le sentiment subjectif de culpabilite."
            },
            "Sens isole/Lenteur": {
              status: "nul",
              senses: ["etre lent", "retarde"],
              proof_ctx: "Meme analyse que pour la premiere occurrence. Le sens de lenteur est hors sujet dans cette construction syntaxique."
            }
          }
        }
      },
      // wqy pos=19 (accompli Form VIII 3MS "se premunit")
      {
        word_key: "wqy", position: 19, sense_chosen: "se premunir",
        analysis_axes: {
          sense_chosen: "se premunir",
          concept_chosen: "Protection/Preservation",
          concepts: {
            "Protection/Preservation": {
              status: "retenu",
              senses: ["proteger", "preserver", "craindre", "piete", "se premunir", "eviter"],
              proof_ctx: "Le verbe ittaqa est un accompli Form VIII 3MS de la racine w-q-y. Le Lane's donne : proteger, preserver, mettre a l'abri, craindre, eviter le danger, se garder de, se premunir. La Form VIII (ifta'ala) indique la reflexivite intensive — il s'est premuni lui-meme, il a pris la taqwa pour son propre compte. La taqwa est un acte de protection de soi par la vigilance spirituelle — celui qui ittaqa se met a l'abri du danger en evitant ce qui peut lui nuire. La racine w-q-y part de l'idee physique de protection (le bouclier, wiqaya) et s'eleve au sens spirituel (la piete comme bouclier interieur). L'accompli marque la taqwa comme un etat accompli — celui qui se premunit a deja pris ses precautions. La construction « li-mani ittaqa » (pour celui qui se premunit) est une condition — l'absence de faute n'est garantie que pour celui qui a la taqwa.",
              axe1_verset: "Le verbe ittaqa est la condition centrale du verset. Le champ lexical (invoquer, Dieu, faute, se hater, retarder) montre que la taqwa est le cadre qui rend la flexibilite legitime. Sans taqwa, les deux options (hate ou retard) perdent leur equivalence — c'est la taqwa qui les rend egales. Le verset pose que la liberte de choix est reservee a celui qui se premunit — la flexibilite n'est pas anarchique mais conditionnee par la conscience de Dieu. La taqwa est le denominateur commun qui valide les deux options.",
              axe2_voisins: "Le verset 2:197 mentionnait la taqwa dans le contexte du pelerinage (« et prenez vos provisions — la meilleure provision est la taqwa »). Le verset 2:203 reprend la taqwa comme condition de l'absence de faute. La sequence montre que la taqwa est le fil conducteur du pelerinage — elle est la provision du voyage (2:197) et la condition de la flexibilite (2:203). Le pelerinage est une ecole de taqwa.",
              axe3_sourate: "La racine w-q-y est tres frequente dans la sourate al-Baqarah. En 2:2, le Coran est « un guide pour les muttaqin (ceux qui se premunissent) ». En 2:21, « peut-etre vous premunissez-vous (la'allakum tattaqun) ». En 2:197, « la meilleure provision est la taqwa ». En 2:203, la taqwa conditionne l'absence de faute. La sourate construit la taqwa comme la qualite fondamentale du croyant — elle precede, accompagne et conditionne toutes les obligations.",
              axe4_coherence: "La racine w-q-y apparait environ 258 fois dans le Coran. En 3:102, « premunissez-vous de Dieu comme il faut se premunir de Lui (ittaqu Allaha haqqa tuqatihi) ». En 64:16, « premunissez-vous de Dieu autant que vous le pouvez ». Le Coran presente la taqwa comme une obligation modulable — on se premunit selon sa capacite. Le verset 2:203 montre que la taqwa est aussi une condition d'autorisation — certaines flexibilites ne sont ouvertes qu'a celui qui a la taqwa.",
              axe5_frequence: "Pour la mission du khalifa, la taqwa est la condition de la liberte d'action. Le khalifa qui se premunit de Dieu peut choisir entre plusieurs options sans commettre de faute. La taqwa n'est pas une contrainte — c'est la condition de la liberte. Le khalifa sans taqwa n'a pas la meme latitude — ses choix peuvent etre fautifs. La taqwa est le bouclier qui protege le khalifa dans l'exercice de sa mission."
            },
            "Sens isole/Bouclier": {
              status: "nul",
              senses: ["bouclier"],
              proof_ctx: "Le sens concret de bouclier est l'etymologie de la racine w-q-y — la wiqaya est la protection physique. Mais le verbe ittaqa en Form VIII est un verbe d'etat spirituel — se premunir interieurement, pas porter un bouclier physique. Le contexte (« pour celui qui se premunit ») exclut le sens materiel de bouclier."
            }
          }
        }
      },
      // wqy pos=21 (imperatif Form VIII 2MP "premunissez-vous")
      {
        word_key: "wqy", position: 21, sense_chosen: "se premunir",
        analysis_axes: {
          sense_chosen: "se premunir",
          concept_chosen: "Protection/Preservation",
          concepts: {
            "Protection/Preservation": {
              status: "retenu",
              senses: ["proteger", "preserver", "craindre", "piete", "se premunir", "eviter"],
              proof_ctx: "Le verbe ittaqu est un imperatif Form VIII 2MP de la racine w-q-y. Le Lane's donne les memes sens que pour ittaqa ci-dessus : proteger, preserver, se premunir, craindre. L'imperatif transforme la taqwa de condition theorique en ordre direct. La transition du 3MS (ittaqa — il se premunit) au 2MP (ittaqu — premunissez-vous) est significative : le verset passe de la description (celui qui se premunit) a l'injonction (premunissez-vous). La Form VIII imperative est la forme standard de l'ordre de taqwa dans le Coran. Le complement d'objet Allaha (Dieu) precise l'objet de la taqwa — premunissez-vous DE Dieu, c'est-a-dire protegez-vous de Son chatiment en obeissant a Ses ordres.",
              axe1_verset: "Le verbe ittaqu passe de la condition a l'ordre. Le champ lexical (invoquer, Dieu, faute, savoir, rassembler) montre que la taqwa est l'ordre transitionnel entre la flexibilite du sejour et la certitude du rassemblement final. Le verset a trois imperatifs : udhkuru (invoquez), ittaqu (premunissez-vous), i'lamu (sachez) — trois ordres qui couvrent le rappel, la protection et le savoir. La taqwa est au centre de cette triade — elle lie le dhikr au savoir.",
              axe2_voisins: "Le verset 2:196 ordonnait « ittaqu Allaha » (premunissez-vous de Dieu) dans le contexte des rites du sacrifice. Le verset 2:203 repete le meme ordre dans le contexte des jours de tashreeq. La repetition de « ittaqu Allaha » dans la section du pelerinage (2:196-203) montre que cette injonction est le refrain du pelerinage — l'ordre revient regulierement comme un rappel constant.",
              axe3_sourate: "La construction « ittaqu Allaha » (premunissez-vous de Dieu) apparait en 2:194, 2:196, 2:203, 2:223, 2:278, 2:282. La sourate al-Baqarah utilise cette construction comme un imperatif recurrent — chaque section legislative se termine ou se ponctue par cet ordre. En 2:203, l'ordre arrive apres la flexibilite du sejour et avant le rappel du rassemblement final — la taqwa est le pont entre la pratique terrestre et la realite eschatologique.",
              axe4_coherence: "La construction « ittaqu Allaha » est l'une des plus frequentes du Coran. En 3:102, 5:7, 8:1, 59:18, 65:1 — le Coran ordonne la taqwa de Dieu dans tous les contextes de la vie. L'ordre est universel et intemporel. Le verset 2:203 inscrit cet ordre universel dans le contexte specifique du pelerinage — la taqwa n'est pas seulement une obligation generale, elle est aussi une obligation specifique du pelerin.",
              axe5_frequence: "Pour la mission du khalifa, l'ordre « ittaqu Allaha » est l'ordre fondamental. Le khalifa se premunit de Dieu dans toutes ses actions — c'est sa protection contre l'erreur et l'injustice. L'imperatif montre que la taqwa n'est pas optionnelle — elle est ordonnee. Le khalifa qui ne se premunit pas de Dieu est expose au danger de l'echec de sa mission."
            }
          }
        }
      },
      // alh pos=22 (accusatif "Dieu" - seconde occurrence)
      {
        word_key: "alh", position: 22, sense_chosen: "Dieu",
        analysis_axes: {
          sense_chosen: "Dieu",
          concept_chosen: "Divinite",
          concepts: {
            "Divinite": {
              status: "retenu",
              senses: ["Dieu", "divinite", "celui qui est adore", "celui devant qui on est perplexe"],
              proof_ctx: "Le nom Allaha est la seconde occurrence du nom propre de Dieu dans le verset, a l'accusatif comme complement d'objet du verbe ittaqu (premunissez-vous). Le Lane's rattache la racine a-l-h a l'adoration, la perplexite devant la grandeur, la recherche de refuge. Dieu est ici l'objet de la taqwa — premunissez-vous DE Dieu. Cette construction fait de Dieu a la fois la source de la protection (c'est en obeissant a Dieu qu'on se protege) et l'objet de la crainte reverencielle (c'est Dieu dont on craint le chatiment). La double mention de Dieu dans le verset (objet du dhikr en position 2, objet de la taqwa en position 22) montre que Dieu est le centre absolu — on L'invoque et on se premunit de Lui.",
              axe1_verset: "Le second Allaha complete la structure du verset. Le premier Allaha est l'objet du dhikr (invoquez Dieu), le second est l'objet de la taqwa (premunissez-vous de Dieu). Le verset pose deux relations avec Dieu : le rappel et la protection. Le dhikr est l'acte positif (se tourner vers Dieu), la taqwa est l'acte protecteur (se garder de Son chatiment). Les deux sont complementaires et necessaires.",
              axe2_voisins: "Les versets 2:196 et 2:200 mentionnaient aussi Dieu comme objet du dhikr et de la taqwa. Le verset 2:203 reprend ces deux mentions en les condensant dans un seul verset. La section du pelerinage (2:196-203) se referme sur les memes themes avec lesquels elle a commence — Dieu est le premier et le dernier mot du pelerinage.",
              axe3_sourate: "Le nom Allah est omnipresent dans la sourate al-Baqarah. Sa double occurrence en 2:203 rappelle que le pelerinage est centré sur Dieu — on invoque Dieu et on se premunit de Dieu. La sourate ne laisse aucun espace ou Dieu serait absent.",
              axe4_coherence: "Le nom Allah apparait environ 2699 fois dans le Coran. Sa mention comme objet de la taqwa est constante. Le verset 2:203 s'inscrit dans cette constance — Dieu est toujours l'objet premier de la taqwa.",
              axe5_frequence: "Pour la mission du khalifa, la double mention de Dieu (dhikr et taqwa) montre que la mission est a la fois un rappel et une protection. Le khalifa rappelle Dieu (dhikr) et se premunit de Dieu (taqwa) — les deux actes sont inseparables dans l'exercice de la mission."
            }
          }
        }
      },
      // elm pos=24 (imperatif 2MP "sachez")
      {
        word_key: "elm", position: 24, sense_chosen: "savoir",
        analysis_axes: {
          sense_chosen: "savoir",
          concept_chosen: "Savoir/Connaissance",
          concepts: {
            "Savoir/Connaissance": {
              status: "retenu",
              senses: ["savoir", "connaitre", "etre informe", "certitude", "savant", "science", "enseignement"],
              proof_ctx: "Le verbe i'lamu est un imperatif 2MP de la racine e-l-m. Le Lane's donne : savoir, connaitre, etre informe, avoir la certitude, comprendre, discerner. Le 'ilm est la connaissance certaine qui distingue le vrai du faux — ce n'est pas une opinion ou une supposition mais une certitude interieure. L'imperatif i'lamu est un ordre de savoir — pas « apprenez » (processus) mais « sachez » (resultat). Le verbe ordonne un etat de certitude, pas un processus d'apprentissage. L'objet du savoir est « annakum ilayhi tuhsharuna » (que vous serez rassembles vers Lui) — l'objet de la certitude est le rassemblement eschatologique. Le Lane's distingue le 'ilm (savoir certain) du zann (supposition) — le verset demande le 'ilm, pas le zann.",
              axe1_verset: "Le verbe i'lamu est le troisieme et dernier imperatif du verset, apres udhkuru (invoquez) et ittaqu (premunissez-vous). Le champ lexical (invoquer, Dieu, faute, se premunir, rassembler) montre que le savoir est l'aboutissement de la triade : rappel → protection → certitude. Le verset progresse de l'acte (invoquez), a l'attitude (premunissez-vous), a la connaissance (sachez). Le savoir est le sommet de la progression — c'est la certitude qui donne sens aux deux premiers ordres. On invoque et on se premunit PARCE QU'on sait que le rassemblement vers Dieu est certain.",
              axe2_voisins: "Les versets 2:196-202 traitaient des obligations pratiques du pelerinage. Le verset 2:203 conclut la section par un savoir — sachez que vous serez rassembles vers Dieu. La conclusion n'est pas une obligation supplementaire mais un rappel de verite — toutes les obligations du pelerinage s'inscrivent dans un horizon eschatologique. Le pelerin doit savoir pourquoi il accomplit ces rites — pour se preparer au rassemblement final.",
              axe3_sourate: "La racine e-l-m est extremement frequente dans la sourate al-Baqarah. En 2:13, « ne savent-ils pas que ce sont eux les corrupteurs ? ». En 2:30, « je sais ce que vous ne savez pas ». En 2:77, « ne savent-ils pas que Dieu sait ce qu'ils cachent ? ». En 2:203, « sachez que vous serez rassembles vers Lui ». La sourate construit le savoir comme le fondement de la foi — croire c'est savoir, pas supposer.",
              axe4_coherence: "La racine e-l-m apparait environ 854 fois dans le Coran. La construction « i'lamu anna » (sachez que) est frequente : en 2:209, 2:223, 2:231, 2:267, 8:24, 8:40. Le Coran utilise cette construction pour introduire des certitudes que les interlocuteurs doivent integrer — ce ne sont pas des suggestions mais des faits a connaitre. Le verset 2:203 utilise cette meme construction pour le rassemblement eschatologique — c'est un fait, pas une hypothese.",
              axe5_frequence: "Pour la mission du khalifa, le savoir est le fondement de l'action. Le khalifa sait qu'il sera rassemble vers Dieu — cette certitude oriente toutes ses actions. Le khalifa qui ne sait pas (ou qui doute) agit sans horizon, sans finalite. L'ordre « sachez » transforme la certitude eschatologique en moteur de l'action presente. Le khalifa agit ici-bas en sachant qu'il sera rassemble."
            },
            "Marque/Signe": {
              status: "peu_probable",
              senses: ["marquer", "signe", "drapeau", "repere"],
              proof_ctx: "Le sens de marque et de signe est un sens atteste de la racine e-l-m dans le Lane's. Le 'alam est le signe, le drapeau, le repere — ce qui est visible et reconnaissable. Mais le verbe i'lamu est un imperatif de la Form I qui signifie « savoir », pas « marquer ». La distinction philosophique est que le savoir est un etat interieur de certitude (on sait dans sa conscience), tandis que la marque est un fait exterieur de visibilite (on marque pour que les autres voient). Le contexte (sachez que vous serez rassembles) impose le sens interieur de certitude — on demande aux interlocuteurs de savoir, pas de marquer quelque chose."
            }
          }
        }
      },
      // hšr pos=27 (inaccompli passif 2MP "vous serez rassembles")
      {
        word_key: "hšr", position: 27, sense_chosen: "rassembler",
        analysis_axes: {
          sense_chosen: "rassembler",
          concept_chosen: "Rassemblement/Resurrection",
          concepts: {
            "Rassemblement/Resurrection": {
              status: "retenu",
              senses: ["rassembler", "reunir", "resurrection", "regrouper"],
              proof_ctx: "Le verbe tuhsharuna est un inaccompli passif 2MP de la racine h-sh-r. Le Lane's donne : rassembler, reunir, regrouper, conduire ensemble vers un lieu, amener au lieu du jugement, ressusciter pour le rassemblement. Le hashr est l'acte de rassembler des elements disperses en un seul point — c'est un mouvement de la peripherie vers le centre. Le passif (tuhsharuna = vous SEREZ rassembles) montre que les etres humains ne se rassemblent pas d'eux-memes — ils sont rassembles par une force superieure (Dieu). L'inaccompli marque l'avenir — le rassemblement n'a pas encore eu lieu mais il est certain. La preposition ilayhi (vers Lui) identifie le point de convergence — Dieu est le centre vers lequel tous seront rassembles. Le hashr est l'acte eschatologique par excellence — le rassemblement de tous les etres pour le jugement.",
              axe1_verset: "Le verbe tuhsharuna cloture le verset comme un horizon final. Le champ lexical (invoquer, Dieu, jours, faute, se premunir, savoir) montre que le rassemblement est la perspective ultime qui donne sens a tout le reste. Le verset commence par le dhikr (invoquez Dieu) et finit par le hashr (vous serez rassembles vers Lui) — le dhikr est la preparation, le hashr est la destination. Les jours comptes du pelerinage sont une micro-repetition du temps de la vie — limite, compte, et se terminant par le rassemblement vers Dieu.",
              axe2_voisins: "Les versets 2:196-202 traitaient des rites pratiques du pelerinage. Le verset 2:203 conclut en ouvrant sur l'eschatologie — le pelerinage n'est pas une fin en soi mais une preparation au rassemblement final. La transition du pratique (jours comptes, choix du sejour) au cosmique (rassemblement vers Dieu) montre que le pelerinage est un microcosme de la vie entiere — on accomplit des rites, on choisit, et finalement on est rassemble vers Dieu.",
              axe3_sourate: "La racine h-sh-r apparait dans la sourate al-Baqarah en 2:203 (« vous serez rassembles vers Lui »). C'est une des rares occurrences de cette racine dans la sourate, ce qui lui donne un poids particulier. Le rassemblement est la conclusion de la section du pelerinage — la sourate place le hashr comme l'horizon qui cloture les obligations rituelles.",
              axe4_coherence: "La racine h-sh-r apparait environ 43 fois dans le Coran. En 6:38, « ils seront rassembles vers leur Seigneur (ila rabbihim yuhsharun) ». En 81:5, « quand les betes sauvages seront rassemblees (hushirat) ». En 50:44, « le Jour ou la terre se fendra... c'est un rassemblement facile pour Nous (hashrun 'alayna yasir) ». Le Coran presente le hashr comme un evenement universel et inevitable — tous les etres, humains et animaux, seront rassembles. Le verset 2:203 inscrit les pelerins dans cet horizon universel — vous qui etes rassembles a Mina serez rassembles vers Dieu.",
              axe5_frequence: "Pour la mission du khalifa, le rassemblement est le terme de la mission. Le khalifa sait qu'il sera rassemble vers Dieu pour rendre des comptes. Cette certitude transforme chaque action en preparation au jugement. Le khalifa qui sait qu'il sera rassemble agit avec responsabilite — chaque choix sera examine. Le hashr est le rappel ultime que la mission a une fin et un compte."
            },
            "Sens isole/Expulser": {
              status: "peu_probable",
              senses: ["expulser"],
              proof_ctx: "Le sens d'expulsion est un sens secondaire de la racine h-sh-r dans le Lane's — hashara peut signifier « expulser, chasser d'un lieu ». Mais la construction « ilayhi tuhsharuna » (vers Lui vous serez rassembles) utilise la preposition ilayhi (vers Lui) qui implique un mouvement de convergence vers un point, pas un mouvement d'expulsion hors d'un lieu. La distinction philosophique est que l'expulsion est centrifuge (on chasse du centre vers l'exterieur), tandis que le rassemblement est centripete (on reunit de l'exterieur vers le centre). La preposition ilayhi impose le sens centripete de rassemblement."
            }
          }
        }
      }
    ]
  }
};

// =====================================================
// NEW ROOT: athm
// =====================================================
const newRoot = {
  word_key: "athm",
  root_ar: "\u0623 \u062b \u0645",
  root_phon: "athm",
  occ: 48,
  concepts: [
    {
      concept: "Faute/Peche",
      senses: ["pecher", "commettre une faute", "crime", "delit", "transgression"],
      description: "La faute est un acte qui devie de ce qui est juste et droit. C'est un acte exterieur et volontaire — celui qui commet une faute a agi contre ce qu'il savait etre correct. La faute implique une responsabilite personnelle et une consequence."
    },
    {
      concept: "Chatiment/Consequence",
      senses: ["punition du peche", "retribution", "consequence"],
      description: "Le chatiment est la consequence naturelle de la faute. Il est exterieur et directionnel — il vient de la source de justice et atteint celui qui a faute."
    },
    {
      concept: "Culpabilite/Remords",
      senses: ["se sentir coupable", "regret"],
      description: "La culpabilite est un etat interieur qui reste chez celui qui la ressent."
    },
    {
      concept: "Sens isole/Lenteur",
      senses: ["etre lent"],
      description: "Sens concret lie a la racine. Etre lent — ce sens est un usage specifique et concret de la racine qui peut eclairer le champ semantique dans certains contextes."
    }
  ]
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
// CREATE NEW ROOT: athm
// =====================================================
async function createNewRoot() {
  console.log('\n=== CREATION RACINE athm ===');

  // 1. Insert into word_analyses
  const { data: wa, error: waErr } = await supabase.from('word_analyses').insert({
    word_key: newRoot.word_key,
    root_ar: newRoot.root_ar,
    root_phon: newRoot.root_phon,
    occ: newRoot.occ,
    status: 'done'
  }).select('id').single();

  if (waErr) {
    console.error('  ERREUR insertion word_analyses athm:', waErr.message);
    return;
  }
  console.log(`  OK word_analyses athm id=${wa.id}`);

  // 2. Insert concepts into word_meanings
  for (const c of newRoot.concepts) {
    const { error: wmErr } = await supabase.from('word_meanings').insert({
      analysis_id: wa.id,
      concept: c.concept,
      senses: c.senses,
      description: c.description,
      status: 'pending'
    });

    if (wmErr) {
      console.error(`  ERREUR insertion word_meanings ${c.concept}:`, wmErr.message);
    } else {
      console.log(`  OK word_meanings athm/${c.concept}`);
    }
  }
}

// =====================================================
// SYNC word_meanings
// =====================================================
async function syncWordMeanings() {
  console.log('\n=== SYNC word_meanings ===');

  const verseIds = [210];
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
  console.log('=== PIPELINE SOURATE 2 — VERSET 203 ===\n');
  await createNewRoot();
  await processVerse(203);
  await syncWordMeanings();
  console.log('\n=== PIPELINE V203 TERMINEE ===');
}

main().catch(e => console.error('FATAL:', e));
