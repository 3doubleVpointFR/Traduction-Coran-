const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// =====================================================
// PIPELINE SOURATE 2 — AL-BAQARAH — VERSETS 55 A 57
// verse_id=62 (2:55), verse_id=63 (2:56), verse_id=64 (2:57)
// =====================================================
// CRITICAL: concept names and senses READ FROM DB (s2_v51-60_concepts.json)
// Word key: akhḏ (id=534), baed (id=926), slwy (id=563, root س ل و = caille)
// NOTE: slwy in concepts JSON has wrong concept "Totalité/Universalité" — the DB
//   data for this word is incomplete. We skip axes for slwy and note the issue.
// =====================================================

const verseData = {

  // =====================================================
  // VERSET 2:55
  // verse_id=62, analysis_id=421
  // "Et lorsque vous dites: O Moise, nous ne te croirons pas
  //  tant que nous ne verrons pas Dieu ouvertement.
  //  Alors la foudre vous saisit tandis que vous regardiez."
  // =====================================================
  55: {
    verse_id: 62,
    analysis_id: 421,
    translation_arab: "Et lorsque vous dites : O Moise, nous ne te croirons pas tant que nous ne verrons pas Dieu ouvertement. Alors la foudre vous saisit tandis que vous regardiez.",
    full_translation: "Et lorsque vous dites : O Moise, jamais nous ne te croirons tant que nous ne verrons pas Dieu a decouvert. Alors la foudre vous saisit tandis que vous observiez.",
    translation_explanation: `§DEMARCHE§
Ce verset rapporte une demande insolente des enfants d'Israel a Moise. Le verbe **qultum** est un accompli 2MP de la racine q-w-l. Le Lane's donne « he said, spoke, uttered ». L'accompli rapporte un fait passe — ils ont dit, c'est un acte accompli. Le verbe **nu'mina** est un inaccompli 1P forme IV de la racine a-m-n precede de la negation lan (negation categorique future). Le Lane's donne « he believed, trusted, had faith in ». La forme IV (causatif) signifie « donner sa foi, croire ». La negation lan rend le refus absolu — jamais nous ne croirons. Le verbe **nara** est un inaccompli 1P de la racine r-a-y. Le Lane's donne « he saw, perceived, beheld ». L'inaccompli apres hatta exprime une condition — tant que nous ne verrons pas. Le mot **Allah** est le nom propre de Dieu, de la racine a-l-h. Le Lane's donne « the God, the Supreme Being ». C'est le nom qui designe l'Etre divin absolu. Le mot **jahratan** est un nom feminin singulier indefini de la racine j-h-r au cas accusatif adverbial. Le Lane's donne « openly, publicly, manifestly ». Le mot signifie « a decouvert, ouvertement » — ils veulent voir Dieu sans voile. Le verbe **akhadhat** est un accompli 3FS de la racine a-kh-dh avec pronom 2MP. Le Lane's donne « it seized, took hold of ». La foudre les a saisis — l'acte est violent et soudain. Le mot **as-sa'iqatu** est un nom feminin singulier defini de la racine s-e-q. Le Lane's donne « thunderbolt, a fire that comes from heaven, lightning ». La foudre est le chatiment divin immediat. Le verbe **tanzuruna** est un inaccompli 2MP de la racine n-z-r. Le Lane's donne « he looked, gazed, regarded ». L'inaccompli dans une proposition d'etat (wa antum tanzuruna) signifie « tandis que vous regardiez » — ils etaient temoins de ce qui se passait.

§JUSTIFICATION§
**vous dites** — Le sens retenu est « dire ». Le verbe qultum de la racine q-w-l designe l'acte de prononcer des paroles. L'alternative « avis » est ecartee car le contexte rapporte des paroles prononcees, pas une simple opinion interieure.

**nous ne croirons pas** — Le sens retenu est « croire ». Le verbe nu'mina forme IV de la racine a-m-n designe l'acte d'adherer par la foi. L'alternative « se sentir en securite » est ecartee car le contexte parle d'un refus de foi, pas d'un manque de securite. La negation lan marque un refus categorique.

**nous ne verrons pas** — Le sens retenu est « voir ». Le verbe nara de la racine r-a-y designe la perception visuelle directe. L'alternative « opinion » est ecartee car ils demandent une vision physique de Dieu, pas un avis.

**Dieu** — Le sens retenu est « Dieu ». Le nom Allah designe l'Etre divin unique. Pas d'alternative pertinente dans ce contexte.

**ouvertement** — Le sens retenu est « manifester ». Le mot jahratan de la racine j-h-r signifie a decouvert, sans voile. L'alternative « crier » est ecartee car jahratan est ici un adverbe de maniere, pas un verbe de parole.

**saisit** — Le sens retenu est « saisir ». Le verbe akhadhat de la racine a-kh-dh designe l'acte de prendre avec force. Le Lane's donne « it seized ». La foudre saisit violemment — c'est un chatiment soudain et irresistible.

**la foudre** — Le sens retenu est « foudroyer ». Le mot as-sa'iqatu de la racine s-e-q designe la decharge electrique venue du ciel. L'alternative « s'evanouir » est ecartee car le contexte decrit un evenement exterieur qui les frappe, pas un etat interieur.

**vous regardiez** — Le sens retenu est « regarder ». Le verbe tanzuruna de la racine n-z-r designe l'acte de diriger le regard. L'alternative « attendre » est ecartee car la proposition d'etat decrit ce qu'ils faisaient au moment ou la foudre les a frappes — ils observaient, ils etaient temoins.

§CRITIQUE§
**nous ne te croirons pas vs nous ne croyons pas en toi** — Le Lane's donne pour la forme IV amana « he trusted, believed ». La construction lan nu'mina laka signifie « jamais nous ne te croirons » — la preposition laka indique que la foi est refusee a Moise comme intermediaire. Ce n'est pas un refus de Dieu mais un refus du messager tant qu'ils n'ont pas de preuve visuelle directe.
**ouvertement vs a decouvert** — Le Lane's donne pour jahratan « manifestly, openly, publicly ». « A decouvert » preserve mieux l'idee de voir sans voile ni obstacle — ils veulent une vision directe, non mediee.
**saisit vs frappa** — Le Lane's donne pour akhadha « he seized, took ». « Saisit » est plus fidele que « frappa » car la foudre s'empare d'eux, les prend — ce n'est pas un simple coup mais une prise totale.`,
    segments: [
      { phon: "idh", arabic: "وَإِذْ", fr: "et lorsque", is_particle: true, position: 0 },
      { fr: "vous dites", pos: "verbe", phon: "qultum", arabic: "قُلْتُمْ", word_key: "qwl", is_particle: false, sense_retenu: "dire", position: 1 },
      { fr: "O Moise", phon: "ya Musa", arabic: "يَٰمُوسَYٰ", is_particle: true, position: 2 },
      { fr: "jamais", phon: "lan", arabic: "لَن", is_particle: true, position: 3 },
      { fr: "nous ne croirons", pos: "verbe", phon: "nu'mina", arabic: "نُّؤْمِنَ", word_key: "amn", is_particle: false, sense_retenu: "croire", position: 4 },
      { fr: "pour toi", phon: "laka", arabic: "لَكَ", is_particle: true, position: 5 },
      { fr: "tant que", phon: "hatta", arabic: "حَتَّYٰ", is_particle: true, position: 6 },
      { fr: "nous ne verrons", pos: "verbe", phon: "nara", arabic: "نَرَY", word_key: "ray", is_particle: false, sense_retenu: "voir", position: 7 },
      { fr: "Dieu", pos: "nom", phon: "Allaha", arabic: "ٱللَّهَ", word_key: "alh", is_particle: false, sense_retenu: "Dieu", position: 8 },
      { fr: "ouvertement", pos: "nom", phon: "jahratan", arabic: "جَهْرَةً", word_key: "jhr", is_particle: false, sense_retenu: "manifester", position: 9 },
      { fr: "alors vous saisit", pos: "verbe", phon: "fa-akhadhat-kum", arabic: "فَأَخَذَتْكُمُ", word_key: "akhḏ", is_particle: false, sense_retenu: "saisir", position: 10 },
      { fr: "la foudre", pos: "nom", phon: "as-sa'iqatu", arabic: "ٱلصَّٰعِقَةُ", word_key: "seq", is_particle: false, sense_retenu: "foudroyer", position: 11 },
      { fr: "tandis que vous", phon: "wa-antum", arabic: "وَأَنتُمْ", is_particle: true, position: 12 },
      { fr: "regardiez", pos: "verbe", phon: "tanzuruna", arabic: "تَنظُرُونَ", word_key: "nzr", is_particle: false, sense_retenu: "regarder", position: 13 }
    ],
    words: [
      {
        word_key: "qwl", position: 1, sense_chosen: "dire",
        analysis_axes: {
          sense_chosen: "dire",
          concept_chosen: "Parole/Énonciation",
          concepts: {
            "Parole/Énonciation": {
              status: "retenu",
              senses: ["parole", "discours", "parler", "dire", "affirmer"],
              proof_ctx: "Le verbe qultum est un accompli 2MP de la racine q-w-l. Le Lane's donne « he said, spoke, uttered ». L'accompli rapporte un fait passe — ils ont prononce ces paroles devant Moise. L'acte de dire est exterieur, il sort de celui qui parle vers celui qui ecoute. En 2:55, les enfants d'Israel adressent leurs paroles directement a Moise sous forme d'exigence.",
              axe1_verset: "Le verbe qultum ouvre le contenu du rappel introduit par idh. C'est le premier acte rapporte — ils ont dit. La parole est le vehicule de leur insolence : ils formulent une exigence inacceptable, voir Dieu a decouvert comme condition de leur foi. Le dire est ici un acte de defi, pas une simple communication. Leur parole revele l'etat de leur coeur — ils refusent de croire sur la base du temoignage de Moise et exigent une preuve visuelle directe.",
              axe2_voisins: "Le verset 2:54 rapportait les paroles de Moise a son peuple (qala Musa li-qawmihi). Ici en 2:55, ce sont les paroles du peuple qui sont rapportees (qultum). L'alternance des paroles montre un dialogue de sourds — Moise appelle au repentir, le peuple exige des preuves visuelles. Les versets 2:51-54 decrivaient l'idolatrie du veau d'or et l'appel au repentir. Ce verset 2:55 montre que meme apres le pardon, le peuple continue ses exigences insolentes.",
              axe3_sourate: "La racine q-w-l est omnipresente dans la sourate al-Baqarah pour rapporter les paroles des differents acteurs. Les paroles des enfants d'Israel sont souvent des paroles de refus, d'exigence ou de desobeissance. En 2:11, « quand on leur dit : ne semez pas le desordre sur terre, ils disent : nous ne sommes que des reformateurs ». La parole revele toujours l'intention veritable de celui qui la prononce.",
              axe4_coherence: "La racine q-w-l apparait plus de 1700 fois dans le Coran, c'est l'une des racines les plus frequentes. Le Coran est lui-meme une parole (qawl) divine. Les paroles rapportees dans le Coran servent toujours de temoignage — elles revelent la nature profonde de ceux qui les prononcent. En 2:80, les juifs disent « le feu ne nous touchera que pour des jours comptes ». Chaque parole rapportee est un acte de revelation de l'intention.",
              axe5_frequence: "Pour la mission du khalifa, la parole est l'instrument premier de la mission. Le khalifa parle au nom de la verite ou au nom de ses desirs. Les enfants d'Israel utilisent la parole pour exiger au lieu d'obeir — leur qawl est detourne de sa fonction qui est de reconnaitre la verite et de la transmettre."
            },
            "Pensée/Avis": {
              status: "nul",
              senses: ["avis", "doctrine", "opinion"],
              proof_ctx: "Le sens de pensee/avis est un sens interieur de q-w-l. Le contexte utilise qultum dans son sens de parole prononcee — ils ont dit a Moise, pas ils ont pense interieurement. La construction avec ya Musa confirme l'adresse directe orale."
            },
            "Sens isolé/Puissance": {
              status: "nul",
              senses: ["puissance"],
              proof_ctx: "Sens isole sans rapport avec le contexte. Le contexte est celui d'une parole prononcee devant Moise."
            },
            "Corps/Anatomie": {
              status: "nul",
              senses: ["troupeau"],
              proof_ctx: "Sens isole sans rapport avec le contexte. Le contexte parle de paroles, pas de betail."
            }
          }
        }
      },
      {
        word_key: "amn", position: 4, sense_chosen: "croire",
        analysis_axes: {
          sense_chosen: "croire",
          concept_chosen: "Foi/Adhésion",
          concepts: {
            "Foi/Adhésion": {
              status: "retenu",
              senses: ["croire", "confirmer", "avoir la foi", "accepter comme vrai", "croyant"],
              proof_ctx: "Le verbe nu'mina est un inaccompli 1P forme IV de la racine a-m-n precede de la negation categorique lan. Le Lane's donne « he believed, put faith in, credited ». La forme IV (af'ala) signifie « donner la foi, croire en quelqu'un ». La negation lan exprime un refus absolu et definitif — jamais nous ne croirons en toi. Le refus porte sur la foi en Moise comme envoi de Dieu.",
              axe1_verset: "Le verbe nu'mina est au coeur de l'exigence du peuple. Ils lient leur foi a une condition : voir Dieu a decouvert. Le refus de croire (lan nu'mina laka) est dirige vers Moise — ce n'est pas un refus theorique mais un refus personnel de reconnaitre l'autorite prophetique. La construction lan + inaccompli exprime l'impossibilite absolue : ils ne croiront jamais tant que la condition n'est pas remplie. Le verset montre que leur foi est conditionnelle, non pas basee sur les signes et la parole mais sur l'exigence d'une vision directe.",
              axe2_voisins: "Le verset 2:54 ordonnait le repentir apres l'idolatrie du veau d'or. Ce verset 2:55 montre que meme apres le pardon, les enfants d'Israel reviennent avec de nouvelles exigences. Leur foi reste fragile et conditionnelle. Le verset 2:56 montrera que Dieu les ressuscite apres la foudre — la misericorde divine persiste malgre leur refus de croire. La foi exigee est une foi qui accepte le temoignage du prophete sans exiger de voir Dieu directement.",
              axe3_sourate: "La racine a-m-n est un pilier de la sourate al-Baqarah. Des le debut (2:3-4), les croyants sont ceux qui croient a l'invisible (yu'minuna bil-ghayb). Le refus des enfants d'Israel de croire sans voir est l'exact oppose de la foi en l'invisible. En 2:75, « esperez-vous qu'ils vous croient alors qu'un groupe d'entre eux entendait la parole de Dieu puis la falsifiait ? ». La sourate documente le refus systematique de foi des enfants d'Israel.",
              axe4_coherence: "La racine a-m-n apparait plus de 800 fois dans le Coran. L'iman (foi) est la pierre angulaire de la relation entre l'homme et Dieu. En 4:136, « O vous qui avez cru, croyez en Dieu et Son messager ». La foi veritable ne demande pas de voir Dieu — elle accepte les signes, la parole prophetique et les preuves rationnelles. Exiger de voir Dieu est une transgression des limites de la condition humaine.",
              axe5_frequence: "Pour la mission du khalifa, la foi est la condition premiere de l'acceptation de la mission. Le khalifa qui refuse de croire sans preuve visuelle directe rejette la guidance divine qui passe par les signes et les prophetes. Les enfants d'Israel echouent comme khalifas precisement parce que leur foi est conditionnelle et exigeante au lieu d'etre confiante et receptive."
            },
            "Sécurité/Confiance": {
              status: "probable",
              senses: ["se sentir en sécurité", "être en sécurité", "faire confiance", "confier", "fidèle", "lieu sûr"],
              proof_ctx: "Le sens de securite est le sens premier de a-m-n — etre en securite, se sentir en paix. Le Lane's donne « he was or became safe, secure, free from fear ». Le contexte utilise la forme IV (af'ala = donner la foi) avec la negation lan et la preposition laka, ce qui oriente vers le sens de « croire en toi ». La securite est l'arriere-plan semantique de la foi : croire c'est se sentir en securite dans la verite. Mais ici le sens actif de « croire, adherer » domine sur le sens passif de securite.",
              axe1_verset: "Si on retient le sens de securite, le verset signifierait « nous ne nous sentirons pas en securite avec toi ». Cela donnerait un sens coherent — ils ne se sentent pas en securite avec Moise tant qu'ils n'ont pas vu Dieu directement. Mais la forme IV et la construction avec laka orientent davantage vers la foi-adhesion que vers la securite passive. Le verset parle d'un refus d'adhesion, pas d'un manque de tranquillite.",
              axe2_voisins: "Les versets precedents montrent les enfants d'Israel dans un contexte de desobeissance active (veau d'or) puis de repentir ordonne. Le refus de croire en Moise s'inscrit dans une serie de rebellions successives. Le sens de securite ne capture pas cette dimension de refus delibere — c'est bien un refus de foi, pas une insecurite passive.",
              axe3_sourate: "La sourate al-Baqarah utilise la racine a-m-n principalement dans le sens de foi/croyance. Les mu'minun (croyants) sont definis par leur foi, pas par leur securite. Le contexte global de la sourate oppose croyants et mecreants sur la base de l'adhesion de foi, pas de l'etat de securite.",
              axe4_coherence: "Dans le Coran, la forme IV amana signifie presque toujours « croire, avoir la foi ». Le sens de « mettre en securite, faire confiance » est porte par d'autres formes de la racine (forme II, forme X). La distinction des formes verbales oriente fortement vers le sens de foi.",
              axe5_frequence: "Le khalifa a besoin a la fois de foi et de securite. Mais dans ce contexte precis, c'est le refus de foi qui est reproche aux enfants d'Israel, pas un manque de securite. La securite viendrait comme consequence de la foi, pas comme condition prealable."
            },
            "Garantie/Protection": {
              status: "nul",
              senses: ["accorder la sécurité", "protéger"],
              proof_ctx: "Le sens de protection est un sens actif (donner la securite a quelqu'un). Le contexte utilise la forme IV dans le sens de « croire en quelqu'un », pas de « proteger quelqu'un ». Les enfants d'Israel ne parlent pas de proteger Moise mais de refuser de croire en lui."
            },
            "Sens isolé/Amen": {
              status: "nul",
              senses: ["amen"],
              proof_ctx: "Sens isole sans rapport avec le contexte. Le verbe est conjugue, pas une exclamation rituelle."
            }
          }
        }
      },
      {
        word_key: "ray", position: 7, sense_chosen: "voir",
        analysis_axes: {
          sense_chosen: "voir",
          concept_chosen: "Vision/Perception",
          concepts: {
            "Vision/Perception": {
              status: "retenu",
              senses: ["percevoir", "voir"],
              proof_ctx: "Le verbe nara est un inaccompli 1P de la racine r-a-y. Le Lane's donne « he saw, perceived with his eye, beheld ». Le verbe designe la perception visuelle directe. Dans ce contexte, les enfants d'Israel exigent de voir Dieu avec leurs yeux — une vision physique, pas une contemplation spirituelle. L'inaccompli apres hatta exprime la condition : tant que nous ne verrons pas.",
              axe1_verset: "Le verbe nara est la condition exigee par les enfants d'Israel pour croire. Ils veulent voir (nara) Dieu (Allaha) a decouvert (jahratan). La vision est ici physique et directe — pas un signe, pas un temoignage, mais une vision oculaire de Dieu Lui-meme. Cette exigence est une transgression car elle place la perception humaine comme juge de l'existence divine. Le verset montre l'insolence de cette demande : ils ne veulent voir que pour croire, alors que la foi precede la vision.",
              axe2_voisins: "Le verset 2:54 montrait le repentir ordonne apres le veau d'or. Ce verset 2:55 montre une nouvelle exigence — apres avoir adore ce qu'ils voyaient (le veau), ils demandent maintenant a voir Dieu. Le lien est ironique : ils adorent ce qui est visible (l'idole) et refusent de croire en l'invisible. Les versets suivants montreront le chatiment puis la misericorde — la foudre puis la resurrection.",
              axe3_sourate: "La sourate al-Baqarah oppose la vision physique et la foi en l'invisible. En 2:3, les croyants sont ceux qui « croient en l'invisible ». En 2:55, les enfants d'Israel font l'inverse — ils refusent l'invisible et exigent le visible. Cette opposition structure toute la sourate : la vraie foi depasse les limites de la perception sensorielle.",
              axe4_coherence: "La racine r-a-y apparait plus de 200 fois dans le Coran. La vision peut etre physique ou spirituelle. En 6:103, « les regards ne L'atteignent pas mais Lui atteint les regards ». Dieu ne peut pas etre vu physiquement dans cette vie — l'exigence des enfants d'Israel est impossible par nature. En 7:143, Moise demande a voir Dieu et la montagne s'ecroule — meme Moise ne peut pas supporter la vision divine.",
              axe5_frequence: "Pour la mission du khalifa, la vision est un outil de connaissance mais pas la condition de la foi. Le khalifa doit croire aux signes et a la parole prophetique sans exiger de tout voir. Les enfants d'Israel echouent parce qu'ils placent la vision au-dessus de la foi — ils inversent la hierarchie epistemologique."
            },
            "Apparition": {
              status: "nul",
              senses: ["apparaître"],
              proof_ctx: "Le sens d'apparition est un sens passif (devenir visible). Le contexte utilise le verbe activement — ils veulent voir, pas apparaitre. Le sujet est les enfants d'Israel qui dirigent leur regard, pas un objet qui devient visible."
            },
            "Jugement/Avis": {
              status: "nul",
              senses: ["opinion", "avis"],
              proof_ctx: "Le sens d'avis est un sens derive (ce qu'on pense). Le contexte demande une vision physique de Dieu (nara Allaha jahratan), pas un avis ou une opinion. La precision jahratan (a decouvert) confirme qu'il s'agit de vision oculaire."
            }
          }
        }
      },
      {
        word_key: "alh", position: 8, sense_chosen: "Dieu",
        analysis_axes: {
          sense_chosen: "Dieu",
          concept_chosen: "Divinité",
          concepts: {
            "Divinité": {
              status: "retenu",
              senses: ["divinité", "exclamation divine", "Dieu", "oui certes", "divinité (concept)", "théologie"],
              proof_ctx: "Le mot Allaha est le nom propre de Dieu au cas accusatif. Le Lane's donne « the God, the only true God ». C'est le nom propre qui designe l'Etre divin unique, celui qui recoit l'adoration. Ici les enfants d'Israel veulent voir Dieu directement — ils reconnaissent Son existence mais exigent une preuve visuelle. Le nom Allah est l'objet du verbe nara (voir).",
              axe1_verset: "Le nom Allah est l'objet de la vision exigee. Les enfants d'Israel veulent voir Dieu Lui-meme a decouvert. L'exigence porte sur l'Etre divin en personne, pas sur un signe ou un ange. Cela montre l'insolence de leur demande — ils traitent Dieu comme un objet de perception parmi d'autres. Le chatiment immediat (la foudre) montre que cette exigence est une transgression majeure des limites entre le Createur et les creatures.",
              axe2_voisins: "Le verset 2:54 mentionnait Dieu comme le Createur (barri'ikum) aupres de qui il faut se repentir. Ce verset 2:55 montre le peuple qui veut voir ce meme Dieu directement. La transition du repentir a l'exigence de vision montre l'inconstance des enfants d'Israel — ils oscillent entre la soumission et l'arrogance. Le verset 2:56 montrera que Dieu les ressuscite malgre leur insolence.",
              axe3_sourate: "Le nom Allah est le nom le plus frequent de la sourate al-Baqarah. Dieu est presente comme le Createur, le Legislateur, le Misericordieux et le Juge. En 2:255, le verset du Trone decrit les attributs de Dieu. L'impossibilite de Le voir physiquement est implicite dans toute la sourate — Dieu se manifeste par Ses signes, Ses paroles et Ses actes, pas par Sa personne visible.",
              axe4_coherence: "La racine a-l-h apparait plus de 2800 fois dans le Coran sous le nom Allah. En 6:103, « les regards ne L'atteignent pas ». En 7:143, Moise demande a voir Dieu et la montagne s'effondre. La vision de Dieu est reservee a l'au-dela pour les croyants (75:22-23 « des visages ce jour-la seront resplendissants, regardant vers leur Seigneur »). L'exigence des enfants d'Israel est prematuree et insolente.",
              axe5_frequence: "Pour la mission du khalifa, Dieu est Celui au nom de qui la mission s'exerce. Le khalifa agit pour Dieu sur terre sans jamais Le voir physiquement. La foi en Dieu est la base de la mission — exiger de Le voir avant de croire c'est refuser la mission elle-meme."
            },
            "Détresse": {
              status: "nul",
              senses: ["être perplexe", "se lamenter"],
              proof_ctx: "Le mot est le nom propre Allah, pas un derive de la racine dans un autre sens. Le contexte parle de Dieu, pas de detresse."
            },
            "Domination": {
              status: "nul",
              senses: ["asservir"],
              proof_ctx: "Sens lie a la racine mais non pertinent ici. Le mot est le nom propre de Dieu."
            },
            "Adoration/Dévotion": {
              status: "nul",
              senses: ["diviniser", "adorer", "faire adorer", "se dévouer au culte"],
              proof_ctx: "L'adoration est l'acte dirige vers Dieu, pas Dieu Lui-meme. Le contexte utilise le nom propre Allah comme objet de vision, pas un verbe d'adoration."
            },
            "Refuge/Protection": {
              status: "nul",
              senses: ["demeurer", "protéger", "chercher refuge"],
              proof_ctx: "Le sens de refuge est un sens derive de la racine. Le contexte utilise le nom propre Allah, pas un verbe de protection."
            }
          }
        }
      },
      {
        word_key: "jhr", position: 9, sense_chosen: "manifester",
        analysis_axes: {
          sense_chosen: "manifester",
          concept_chosen: "Manifestation/Publicité",
          concepts: {
            "Manifestation/Publicité": {
              status: "retenu",
              senses: ["manifester", "déclarer", "crier", "élever la voix", "public"],
              proof_ctx: "Le mot jahratan est un nom feminin singulier indefini au cas accusatif de la racine j-h-r. Le Lane's donne « openly, publicly, manifestly ». Le mot est utilise ici comme adverbe de maniere (masdar au cas accusatif) — il modifie le verbe nara (voir). Voir Dieu jahratan signifie Le voir a decouvert, sans voile, de maniere manifeste et directe.",
              axe1_verset: "Le mot jahratan est le complement circonstanciel qui aggrave l'exigence. Ils ne demandent pas simplement de voir Dieu mais de Le voir a decouvert, de maniere ouverte et directe. La jahara est l'oppose du sirr (secret) — ils veulent que Dieu se manifeste publiquement, sans voile ni intermediaire. Cette precision montre l'extremite de leur insolence : meme voir un signe de Dieu ne leur suffirait pas, ils veulent une vision directe et publique.",
              axe2_voisins: "Le verset 2:54 appelait au repentir en mentionnant le Createur (barri'ikum). Ce verset 2:55 montre le peuple qui exige de voir ce Createur a decouvert. La transition du repentir (acte d'humilite) a l'exigence de vision (acte d'arrogance) est saisissante. Les versets suivants montreront que Dieu repond a l'arrogance par la foudre puis par la misericorde.",
              axe3_sourate: "La racine j-h-r apparait dans la sourate pour distinguer le public du secret. En 2:271, « si vous montrez les aumones c'est bien, si vous les cachez et les donnez aux pauvres c'est mieux ». La sourate valorise le secret et l'humilite sur la manifestation et l'ostentation. L'exigence de voir Dieu jahratan va a l'encontre de cette valeur.",
              axe4_coherence: "La racine j-h-r apparait environ 40 fois dans le Coran. En 7:205, « invoque ton Seigneur en toi-meme avec humilite et crainte, sans elever la voix (jahara) ». La discrecion devant Dieu est une vertu. En 67:13, « que vous cachiez votre parole ou que vous la manifestiez (tajharu), Il connait le contenu des poitrines ». Dieu connait tout — Il n'a pas besoin de se manifester pour prouver Son existence.",
              axe5_frequence: "Pour la mission du khalifa, la manifestation est un outil de communication mais pas une condition de la relation avec Dieu. Le khalifa qui exige que tout soit manifeste et visible refuse la dimension invisible de sa mission — la foi, la conscience, la relation interieure avec Dieu."
            }
          }
        }
      },
      {
        word_key: "akhḏ", position: 10, sense_chosen: "saisir",
        analysis_axes: {
          sense_chosen: "saisir",
          concept_chosen: "Prise/Acquisition",
          concepts: {
            "Prise/Acquisition": {
              status: "retenu",
              senses: ["prendre", "saisir", "recevoir", "punir"],
              proof_ctx: "Le verbe akhadhat est un accompli 3FS de la racine a-kh-dh avec pronom 2MP et prefixe fa (consequence). Le Lane's donne « it seized, took hold of ». Le sujet est la foudre (as-sa'iqatu) et l'objet est les enfants d'Israel (-kum). La foudre les a saisis — l'acte est violent, soudain et irresistible. Le fa exprime la consequence immediate : des qu'ils ont formule leur exigence, la foudre les a saisis.",
              axe1_verset: "Le verbe akhadhat est la reponse divine a l'exigence du peuple. Ils demandent de voir Dieu — la foudre les saisit. L'enchainement est immediat (fa). La prise est totale : la foudre ne frappe pas un endroit mais saisit les personnes. Le verbe akhadha au sens de « saisir » porte une nuance de chatiment — Dieu prend ceux qui transgressent. La proposition d'etat (wa antum tanzuruna) ajoute que ce chatiment les a saisis alors meme qu'ils regardaient, esperant voir Dieu.",
              axe2_voisins: "Le verset 2:51 utilisait deja akhḏ dans ittakhadhtum (vous avez pris le veau). En 2:55, la prise est inversee — ce n'est plus eux qui prennent (l'idole) mais la foudre qui les prend (chatiment). L'inversion est significative : celui qui prend de maniere illegitime finit par etre pris par le chatiment. Le verset 2:56 montrera la misericorde apres la saisie — la resurrection apres la foudre.",
              axe3_sourate: "La racine a-kh-dh revient frequemment dans la sourate pour decrire les actes de prise — prendre un engagement, prendre une decision, etre pris par le chatiment. En 2:63, « prenez avec force ce que Nous vous avons donne ». En 2:65, « Nous leur dimes : soyez des singes repousses ». La prise divine est toujours en proportion de la transgression.",
              axe4_coherence: "La racine a-kh-dh apparait plus de 270 fois dans le Coran. En 11:102, « telle est la prise de ton Seigneur quand Il prend les cites injustes — Sa prise est douloureuse et severe ». La prise divine est un chatiment qui saisit sans echappatoire. En 44:16, « le jour ou Nous frapperons du grand coup ». La prise divine est toujours decisive et irresistible.",
              axe5_frequence: "Pour la mission du khalifa, la prise divine est l'avertissement ultime. Le khalifa qui transgresse les limites s'expose a etre saisi par le chatiment. Les enfants d'Israel sont un exemple pour tout khalifa — l'insolence devant Dieu entraine une reponse immediate."
            }
          }
        }
      },
      {
        word_key: "seq", position: 11, sense_chosen: "foudroyer",
        analysis_axes: {
          sense_chosen: "foudroyer",
          concept_chosen: "Foudre/Anéantissement",
          concepts: {
            "Foudre/Anéantissement": {
              status: "retenu",
              senses: ["foudroyer", "terrasser", "s'évanouir", "tonnerre"],
              proof_ctx: "Le mot as-sa'iqatu est un nom feminin singulier defini de la racine s-e-q. Le Lane's donne « a thunderbolt, a fire from heaven, a violent sound from the clouds, the cry or noise that destroys ». La foudre est un evenement soudain, violent et venu du ciel. Le Lane's precise que la sa'iqa peut causer la mort ou l'evanouissement. Le defini (al-) indique que c'est la foudre connue, le chatiment type.",
              axe1_verset: "Le mot as-sa'iqatu est le sujet du verbe akhadhat. La foudre est l'agent du chatiment divin. Elle vient du ciel, elle est soudaine et irresistible. Les enfants d'Israel voulaient voir Dieu — ils recoivent a la place la foudre. La reponse divine est une demonstration de puissance : au lieu de se montrer, Dieu envoie Sa foudre. La foudre est le signe que Dieu agit sans avoir besoin de se montrer.",
              axe2_voisins: "Le verset 2:54 mentionnait un chatiment moins violent — tuer leurs propres ames comme repentir. Ce verset 2:55 montre un chatiment plus direct : la foudre. La gradation dans les chatiments correspond a la gradation dans les transgressions. Le verset 2:56 montrera la resurrection apres la foudre — le chatiment n'est pas definitif car la misericorde divine prevaut.",
              axe3_sourate: "La racine s-e-q apparait rarement dans la sourate al-Baqarah. La foudre est un chatiment exceptionnel reserve aux transgressions les plus graves. La sourate al-Baqarah mentionne d'autres chatiments : la transformation en singes (2:65), l'errance dans le desert (2:61). La foudre est le chatiment le plus spectaculaire et le plus immediat.",
              axe4_coherence: "La racine s-e-q apparait 13 fois dans le Coran. En 4:153, « les gens du Livre te demandent de faire descendre un livre du ciel — ils ont demande a Moise plus que cela : montre-nous Dieu a decouvert, alors la foudre les saisit ». Ce verset fait reference directe a l'episode de 2:55. En 7:143, la montagne s'ecroule quand Dieu se manifeste — meme les montagnes ne supportent pas la vision divine.",
              axe5_frequence: "Pour la mission du khalifa, la foudre est un rappel de la puissance divine. Le khalifa doit savoir que Dieu peut le chatier a tout moment s'il transgresse les limites. La foudre est l'expression visible de la souverainete divine sur la creation."
            }
          }
        }
      },
      {
        word_key: "nzr", position: 13, sense_chosen: "regarder",
        analysis_axes: {
          sense_chosen: "regarder",
          concept_chosen: "Regard/Contemplation",
          concepts: {
            "Regard/Contemplation": {
              status: "retenu",
              senses: ["regarder", "voir", "contempler", "considérer"],
              proof_ctx: "Le verbe tanzuruna est un inaccompli 2MP de la racine n-z-r. Le Lane's donne « he looked, beheld, gazed at, regarded ». L'inaccompli dans une proposition d'etat (wa antum tanzuruna) signifie « tandis que vous regardiez, observiez ». Le regard est dirige vers ce qui se passe — ils sont temoins conscients de l'evenement.",
              axe1_verset: "Le verbe tanzuruna cloture le verset dans une proposition d'etat. La foudre les saisit « tandis que vous regardiez ». Ils sont temoins de leur propre chatiment — le regard qu'ils voulaient diriger vers Dieu est maintenant dirige vers la foudre qui les frappe. L'ironie est cruelle : ils demandaient de voir Dieu et ce qu'ils voient c'est le chatiment divin. Le regard est ici passif et impuissant — ils observent sans pouvoir rien faire.",
              axe2_voisins: "Le verset 2:50 mentionnait les enfants d'Israel regardant la noyade de Pharaon. En 2:55, ils regardent leur propre chatiment. La repetition du regard comme temoin des actes divins montre que Dieu ne cache pas Ses actes — ce sont les enfants d'Israel qui refusent de comprendre ce qu'ils voient. Les versets precedents et suivants montrent un peuple temoin de miracle apres miracle sans que sa foi grandisse.",
              axe3_sourate: "La racine n-z-r dans la sourate al-Baqarah est liee a l'observation et a la reflexion. En 2:259, « regarde ta nourriture et ta boisson — elles ne se sont pas alterees ». Le regard est toujours un appel a la reflexion. En 2:55, le regard est impuissant — ils observent sans pouvoir agir. La sourate oppose le regard qui mene a la foi et le regard sterile qui observe sans comprendre.",
              axe4_coherence: "La racine n-z-r apparait environ 130 fois dans le Coran. En 7:143, Moise dit « Seigneur montre-Toi a moi que je Te regarde (anzur ilayka) ». Dieu repond « tu ne Me verras pas mais regarde la montagne ». Le regard humain ne peut pas soutenir la vision divine. En 2:55, les enfants d'Israel demandent ce que meme Moise n'a pas obtenu — voir Dieu directement. Leur regard est limite par nature.",
              axe5_frequence: "Pour la mission du khalifa, le regard est un outil de connaissance mais aussi un test. Ce que le khalifa regarde et comment il interprete ce qu'il voit determine sa foi. Les enfants d'Israel regardent des miracles mais n'en tirent pas les bonnes conclusions — leur regard est physiquement ouvert mais spirituellement ferme."
            },
            "Attente": {
              status: "nul",
              senses: ["attendre", "délai"],
              proof_ctx: "Le sens d'attente est un autre sens de n-z-r. Le contexte utilise tanzuruna dans une proposition d'etat (wa antum tanzuruna) qui decrit ce qu'ils faisaient au moment du chatiment — ils regardaient, pas ils attendaient. Le verbe est accompagne du pronom wa antum qui insiste sur l'aspect temoin."
            }
          }
        }
      }
    ]
  },

  // =====================================================
  // VERSET 2:56
  // verse_id=63, analysis_id=418
  // "Puis Nous vous avons ressuscites apres votre mort,
  //  afin que vous soyez reconnaissants."
  // =====================================================
  56: {
    verse_id: 63,
    analysis_id: 418,
    translation_arab: "Puis Nous vous avons ressuscites apres votre mort, afin que vous soyez reconnaissants.",
    full_translation: "Puis Nous vous avons releves apres votre mort, peut-etre seriez-vous reconnaissants.",
    translation_explanation: `§DEMARCHE§
Ce verset rapporte la misericorde divine apres le chatiment de la foudre. Le verbe **ba'athnakum** est un accompli 1P de la racine b-e-th avec pronom 2MP. Le Lane's donne « he raised, roused, excited, sent ». Le verbe signifie « faire se lever, ressusciter, envoyer ». L'accompli rapporte un acte divin passe — Dieu les a releves apres les avoir foudroyes. Le mot **ba'di** est un nom genitif de la racine b-e-d avec preposition min. Le Lane's donne « after, afterwards ». La posteriorite temporelle — apres votre mort. Le mot **mawtikum** est un nom genitif de la racine m-w-t avec pronom 2MP. Le Lane's donne « death, dying ». La mort est l'etat de cessation de la vie qui a resulte de la foudre.

§JUSTIFICATION§
**releves** — Le sens retenu est « ressusciter ». Le verbe ba'athnakum de la racine b-e-th signifie relever de la mort, ramener a la vie. L'alternative « envoyer » est ecartee car le contexte parle de retour a la vie apres la mort par foudre, pas d'un envoi en mission. L'alternative « eveiller » est ecartee car il ne s'agit pas d'un simple reveil mais d'une resurrection veritable.

**apres** — Le sens retenu est « apres ». Le mot ba'di de la racine b-e-d signifie la posteriorite temporelle. L'alternative « etre loin » est ecartee car la preposition min + ba'di forme une locution temporelle fixe qui signifie « apres ».

**votre mort** — Le sens retenu est « mort ». Le mot mawtikum de la racine m-w-t designe la cessation de la vie. L'alternative « terre morte » est ecartee car le pronom possessif 2MP (votre mort) indique qu'il s'agit de la mort des personnes, pas d'une terre.

§CRITIQUE§
**releves vs ressuscites** — Le Lane's donne pour ba'atha « he raised from sleep or from death ». « Releves » preserve l'image physique de quelqu'un qu'on fait se lever — ils etaient tombes sous la foudre, Dieu les releve. « Ressuscites » est plus theologique mais « releves » est plus concret et fidele au sens premier.
**peut-etre vs afin que** — Le mot la'allakum peut signifier « afin que » (finalite) ou « peut-etre que » (esperance). Les deux sens coexistent dans l'usage coranique. « Peut-etre seriez-vous reconnaissants » laisse une ouverture — la reconnaissance n'est pas garantie malgre le miracle.`,
    segments: [
      { fr: "puis", phon: "thumma", arabic: "ثُمَّ", is_particle: true, position: 0 },
      { fr: "Nous vous avons releves", pos: "verbe", phon: "ba'athnakum", arabic: "بَعَثْنَٰكُم", word_key: "beth", is_particle: false, sense_retenu: "ressusciter", position: 1 },
      { fr: "d'entre", phon: "min", arabic: "مِّن۞", is_particle: true, position: 2 },
      { fr: "apres", pos: "nom", phon: "ba'di", arabic: "بَعْدِ", word_key: "baed", is_particle: false, sense_retenu: "apres", position: 3 },
      { fr: "votre mort", pos: "nom", phon: "mawtikum", arabic: "مَوْتِكُمْ", word_key: "mwt", is_particle: false, sense_retenu: "mort", position: 4 },
      { fr: "peut-etre", phon: "la'allakum", arabic: "لَعَلَّكُمْ", is_particle: true, position: 5 },
      { fr: "vous seriez reconnaissants", phon: "tashkuruna", arabic: "تَشْكُرُونَ", is_particle: true, position: 6 }
    ],
    words: [
      {
        word_key: "beth", position: 1, sense_chosen: "ressusciter",
        analysis_axes: {
          sense_chosen: "ressusciter",
          concept_chosen: "Résurrection/Envoi",
          concepts: {
            "Résurrection/Envoi": {
              status: "retenu",
              senses: ["ressusciter", "envoyer", "susciter", "éveiller"],
              proof_ctx: "Le verbe ba'athnakum est un accompli 1P de la racine b-e-th avec pronom 2MP. Le Lane's donne « he raised, roused, sent forth ». Le ba'th est l'acte de faire lever ce qui etait couche, de ranimer ce qui etait mort. Le sujet est Dieu (Nous) et l'objet les enfants d'Israel (vous). L'accompli rapporte un fait passe — Dieu les a effectivement releves apres la foudre.",
              axe1_verset: "Le verbe ba'athnakum est l'acte central de misericorde dans ce verset. Apres la foudre qui les a terrasses (v55), Dieu les releve. Le ba'th est l'inverse de la mort — Dieu defait ce qu'Il a fait, Il rend la vie a ceux qu'Il avait fait mourir. Le but est exprime par la'allakum tashkuruna (peut-etre seriez-vous reconnaissants). La resurrection n'est pas automatique — elle appelle une reponse de gratitude. Le verset montre la puissance divine sur la vie et la mort.",
              axe2_voisins: "Le verset 2:55 rapportait le chatiment de la foudre. Ce verset 2:56 rapporte la misericorde de la resurrection. La sequence chatiment-misericorde est un motif recurrent dans la section des enfants d'Israel. En 2:52, apres le veau d'or, Dieu pardonne. En 2:56, apres la foudre, Dieu ressuscite. Le schema est toujours le meme : transgression-chatiment-pardon. La misericorde divine a toujours le dernier mot.",
              axe3_sourate: "La racine b-e-th dans la sourate al-Baqarah est liee a la resurrection et a l'envoi. La sourate insiste sur le pouvoir divin de donner la vie et la mort. En 2:28, « comment pouvez-vous nier Dieu alors que vous etiez morts et qu'Il vous a donne la vie, puis Il vous fera mourir, puis Il vous redonnera la vie ». Le cycle vie-mort-vie est un argument central de la sourate pour prouver la puissance divine.",
              axe4_coherence: "La racine b-e-th apparait environ 65 fois dans le Coran. Le Jour de la Resurrection est appele yawm al-ba'th. En 22:7, « l'Heure viendra — pas de doute — et Dieu ressuscitera ceux qui sont dans les tombes ». La resurrection des enfants d'Israel apres la foudre est un avant-gout de la grande resurrection. Dieu prouve par l'acte qu'Il peut donner la vie aux morts.",
              axe5_frequence: "Pour la mission du khalifa, la resurrection est la preuve ultime de la puissance de Dieu sur la creation. Le khalifa qui connait cette puissance ne peut que se soumettre. Les enfants d'Israel ont ete ressuscites et auraient du en etre reconnaissants — leur echec montre que meme les miracles les plus grands ne garantissent pas la foi si le coeur refuse."
            },
            "Mission prophétique": {
              status: "probable",
              senses: ["prophète envoyé"],
              proof_ctx: "Le sens de mission prophetique est un sens derive de b-e-th — le prophete est celui que Dieu suscite et envoie (mab'uth). Le Lane's donne « he sent him forth ». Le contexte utilise ba'atha dans son sens de « faire se lever, ressusciter » (apres la mort), pas dans le sens d'envoyer un prophete. La precision min ba'di mawtikum (apres votre mort) confirme qu'il s'agit de resurrection physique.",
              axe1_verset: "Si on retient le sens d'envoi prophetique, le verset signifierait « Nous vous avons envoyes apres votre mort ». Cela n'a pas de sens coherent dans le contexte — les enfants d'Israel ne sont pas envoyes en mission apres la foudre. Le contexte est clairement celui d'un retour a la vie apres un chatiment mortel. La finalite (la'allakum tashkuruna) confirme que l'acte est un bienfait de misericorde, pas un envoi en mission.",
              axe2_voisins: "Les versets environnants parlent de chatiment et de pardon, pas de mission prophetique. Le verset 2:55 decrit la foudre, le verset 2:57 decrit les bienfaits dans le desert. Le contexte est celui de l'histoire des enfants d'Israel et de leurs epreuves, pas de l'envoi de prophetes.",
              axe3_sourate: "La sourate al-Baqarah mentionne l'envoi de prophetes ailleurs (2:129, 2:151). En 2:56, le contexte est clairement celui de la resurrection apres la foudre. Le ba'th prophetique et le ba'th-resurrection sont deux usages distincts de la meme racine.",
              axe4_coherence: "Dans le Coran, le ba'th prophetique utilise souvent la forme ba'atha + fi (susciter parmi) alors que le ba'th-resurrection utilise ba'atha + min (relever de). La construction ba'athnakum min ba'di mawtikum confirme le sens de resurrection.",
              axe5_frequence: "Le khalifa est a la fois envoye et ressuscite par Dieu. Les deux sens de b-e-th sont pertinents pour la mission mais dans ce contexte precis, c'est la resurrection qui domine."
            }
          }
        }
      },
      {
        word_key: "baed", position: 3, sense_chosen: "apres",
        analysis_axes: {
          sense_chosen: "apres",
          concept_chosen: "Postériorité",
          concepts: {
            "Postériorité": {
              status: "retenu",
              senses: ["après", "ensuite"],
              proof_ctx: "Le mot ba'di est un nom genitif de la racine b-e-d avec la preposition min. Le Lane's donne « after, afterwards, subsequently ». La locution min ba'di forme une expression temporelle fixe qui signifie « apres ». Ba'di est au cas genitif car il suit min. Le complement est mawtikum (votre mort) — la posteriorite est par rapport a l'evenement de la mort.",
              axe1_verset: "Le mot ba'di situe l'acte de resurrection dans le temps — apres votre mort. La posteriorite est essentielle : la resurrection n'est possible que parce que la mort a eu lieu d'abord. L'enchainement temporel (foudre -> mort -> resurrection) montre la sequence complete de l'epreuve divine. Le ba'd marque la distance temporelle entre la mort et la resurrection — meme courte, cette distance prouve que la mort a ete reelle.",
              axe2_voisins: "Le mot ba'd est utilise dans le verset 2:51 (min ba'dihi — apres lui, c'est-a-dire apres Moise). La posteriorite temporelle structure la narration des evenements : apres le depart de Moise (v51), apres le pardon (v52), apres la foudre (v56). Chaque ba'd marque une etape dans la chronologie des bienfaits et des epreuves.",
              axe3_sourate: "La racine b-e-d est frequente dans la sourate pour organiser la chronologie. En 2:27, « ceux qui rompent le pacte de Dieu apres l'avoir contracte ». En 2:92, « Moise vous est venu avec les preuves claires, puis vous avez pris le veau apres lui ». L'apres marque toujours la rupture ou la continuation d'un etat anterieur.",
              axe4_coherence: "La racine b-e-d apparait environ 350 fois dans le Coran. La posteriorite temporelle est le sens dominant dans les constructions min ba'di. En 3:152, « apres qu'Il vous eut montre ce que vous aimiez ». En 30:4, « et apres leur defaite ils vaincront ». L'apres est le lieu du changement — quelque chose de nouveau arrive apres l'evenement precedent.",
              axe5_frequence: "Pour la mission du khalifa, la posteriorite est le cadre de l'epreuve. Le khalifa est teste par ce qui vient apres les bienfaits — est-il reconnaissant ou ingrat ? Les enfants d'Israel apres la resurrection auraient du etre reconnaissants — le ba'd ouvre un nouveau chapitre qui teste leur gratitude."
            },
            "Éloignement/Distance": {
              status: "nul",
              senses: ["être loin", "éloignement"],
              proof_ctx: "Le sens d'eloignement spatial est le sens premier de b-e-d. Le contexte utilise ba'di dans sa fonction temporelle (apres), pas spatiale (loin de). La construction min ba'di + masdar/nom forme une locution temporelle fixe."
            },
            "Mort/Destruction": {
              status: "nul",
              senses: ["périr"],
              proof_ctx: "Le sens de perir est un sens figure de l'eloignement extreme. Le contexte utilise ba'di comme marqueur temporel, pas dans le sens de destruction. La mort est exprimee par mawtikum (de la racine m-w-t), pas par ba'd."
            }
          }
        }
      },
      {
        word_key: "mwt", position: 4, sense_chosen: "mort",
        analysis_axes: {
          sense_chosen: "mort",
          concept_chosen: "Mort/Cessation",
          concepts: {
            "Mort/Cessation": {
              status: "retenu",
              senses: ["mourir", "mort", "tuer", "mortel", "terre morte"],
              proof_ctx: "Le mot mawtikum est un nom genitif de la racine m-w-t avec pronom 2MP. Le Lane's donne « death, the state of being dead, the departure of life ». Le mot designe la cessation de la vie — l'etat de mort qui a resulte de la foudre. Le pronom possessif (votre mort) individualise l'evenement — c'est la mort de chacun d'entre eux, pas une mort abstraite.",
              axe1_verset: "Le mot mawtikum est le complement temporel de ba'di. Dieu les a releves apres leur mort. La mort est reelle — ce n'est pas un evanouissement ou un sommeil mais une mort veritable causee par la foudre. La resurrection apres la mort reelle est le miracle supreme qui prouve la puissance divine. Le verset articule trois etapes : la foudre (v55), la mort (mawtikum), puis la resurrection (ba'athnakum). Chaque etape est necessaire pour que la lecon soit complete.",
              axe2_voisins: "Le verset 2:28 posait la question : « comment pouvez-vous nier Dieu alors que vous etiez morts et qu'Il vous a donne la vie ? » Ce verset 2:56 illustre concretement ce principe — les enfants d'Israel etaient morts (par la foudre) et Dieu les a ramenes a la vie. La section des enfants d'Israel est une illustration concrete des principes generaux poses au debut de la sourate.",
              axe3_sourate: "La racine m-w-t est un theme central de la sourate al-Baqarah. En 2:28, le cycle vie-mort-vie. En 2:56, la mort par foudre. En 2:243, « n'as-tu pas vu ceux qui sortirent de leurs demeures par milliers, craignant la mort, alors Dieu leur dit : mourez, puis Il les ramena a la vie ». La sourate insiste sur le pouvoir divin absolu sur la vie et la mort.",
              axe4_coherence: "La racine m-w-t apparait environ 160 fois dans le Coran. La mort est un theme transversal — tout vivant gouttera la mort (3:185). Mais Dieu peut defaire la mort : en 2:259, Il ressuscite l'homme mort depuis cent ans. En 36:78-79, « qui fera revivre les os quand ils seront poussiere ? Dis : Celui qui les a crees la premiere fois les fera revivre ». Le pouvoir de donner la mort et la vie appartient a Dieu seul.",
              axe5_frequence: "Pour la mission du khalifa, la mort est le rappel ultime de la finitude humaine. Le khalifa est mortel — sa mission est temporaire mais ses consequences sont eternelles. La mort des enfants d'Israel par la foudre puis leur resurrection montre que meme la mort ne met pas fin a la responsabilite du khalifa devant Dieu."
            },
            "Sens isolé/Immobile": {
              status: "nul",
              senses: ["immobile"],
              proof_ctx: "Le sens d'immobilite est un sens concret derive. Le contexte parle de mort reelle causee par la foudre, pas d'immobilite. Le pronom possessif (votre mort) confirme qu'il s'agit de la mort des personnes."
            }
          }
        }
      }
    ]
  },

  // =====================================================
  // VERSET 2:57
  // verse_id=64, analysis_id=423
  // "Et Nous vous avons ombrage par le nuage, et fait descendre
  //  sur vous la manne et les cailles : mangez des bonnes choses
  //  dont Nous vous avons pourvus. Ils ne Nous ont pas fait de tort,
  //  mais c'est a eux-memes qu'ils faisaient du tort."
  // =====================================================
  57: {
    verse_id: 64,
    analysis_id: 423,
    translation_arab: "Et Nous vous avons ombrage par le nuage, et fait descendre sur vous la manne et les cailles : mangez des bonnes choses dont Nous vous avons pourvus. Ils ne Nous ont pas fait de tort, mais c'est a eux-memes qu'ils faisaient du tort.",
    full_translation: "Et Nous vous avons couvert de l'ombre du nuage, et fait descendre sur vous la manne et les cailles : mangez des bonnes choses dont Nous vous avons nourris. Et ils ne Nous ont point leses, mais c'est eux-memes qu'ils lesaient.",
    translation_explanation: `§DEMARCHE§
Ce verset enumere les bienfaits divins accordes aux enfants d'Israel dans le desert apres leur sortie d'Egypte. Le verbe **zallalna** est un accompli 1P forme II de la racine z-l-l. Le Lane's donne « he shaded, sheltered from the sun ». La forme II (intensif) signifie « couvrir d'ombre abondamment ». Le mot **al-ghamama** est un nom masculin singulier defini de la racine gh-m-m. Le Lane's donne « clouds, a collection of clouds that covers the sky ». Le nuage ici n'est pas porteur de pluie mais d'ombre — il protege du soleil dans le desert. Le verbe **anzalna** est un accompli 1P forme IV de la racine n-z-l. Le Lane's donne « he sent down, caused to descend ». La forme IV (causatif) signifie « faire descendre ». Le mot **al-manna** est un nom masculin singulier defini de la racine m-n-n. Le Lane's donne « a sweet gummy substance found on trees in the morning, or honey, or a sweet dew ». La manne est une nourriture envoyee du ciel sans effort de la part des hommes. Le mot **as-salwa** est un nom masculin singulier defini de la racine s-l-w. Le Lane's donne « the quail ». La caille est un oiseau comestible envoye en abondance. Le verbe **kulu** est un imperatif 2MP de la racine a-k-l. Le Lane's donne « eat ye ». L'imperatif est un ordre de jouissance — mangez. Le mot **tayyibati** est un nom feminin pluriel de la racine t-y-b. Le Lane's donne « good, pleasant, pure, lawful things ». Les bonnes choses sont les nourritures pures et licites. Le verbe **razaqnakum** est un accompli 1P de la racine r-z-q avec pronom 2MP. Le Lane's donne « we provided, nourished, gave sustenance to ». Le verbe **zalamuna** est un accompli 3MP de la racine z-l-m avec pronom 1P et negation precedente. Le Lane's donne « they wronged, oppressed ». Ils ne Nous ont pas fait de tort. Le verbe **kanu** est un accompli 3MP de la racine k-w-n. Le Lane's donne « they were ». Le mot **anfusahum** est un nom feminin pluriel de la racine n-f-s avec pronom 3MP. Le Lane's donne « their own selves ». Le verbe **yazlimuna** est un inaccompli 3MP de la racine z-l-m. Le Lane's donne « they were wronging ». La construction ma zalamuna walakin kanu anfusahum yazlimuna signifie « ils ne Nous ont pas leses mais c'est eux-memes qu'ils lesaient ».

§JUSTIFICATION§
**ombrage** — Le sens retenu est « ombrager ». Le verbe zallalna forme II de la racine z-l-l signifie couvrir d'ombre. Le Lane's donne « he shaded ». Le nuage projette son ombre sur les enfants d'Israel dans le desert. Pas d'alternative pertinente.

**le nuage** — Le sens retenu est « nuages ». Le mot al-ghamama de la racine gh-m-m designe les nuages qui couvrent le ciel. L'alternative « chagriner » est ecartee car le contexte decrit un bienfait (l'ombre), pas une affliction.

**fait descendre** — Le sens retenu est « faire descendre ». Le verbe anzalna forme IV de la racine n-z-l signifie envoyer d'en haut. L'alternative « faire halte » est ecartee car le contexte decrit un mouvement du haut vers le bas (la manne et les cailles descendent du ciel).

**la manne** — Le sens retenu est « bienfait ». Le mot al-manna de la racine m-n-n designe la nourriture envoyee du ciel. L'alternative « rappeler un bienfait » est ecartee car le contexte decrit la nourriture elle-meme, pas l'acte de rappeler un bienfait.

**les cailles** — Le mot as-salwa de la racine s-l-w designe les cailles, oiseaux comestibles envoyes en abondance. Le Lane's donne « the quail ». C'est une nourriture de chair envoyee par Dieu pour completer la manne (nourriture sucree).

**mangez** — Le sens retenu est « manger ». Le verbe kulu de la racine a-k-l designe l'acte de consommer de la nourriture. L'alternative « consumer (le feu mange) » est ecartee car le contexte est une invitation a se nourrir, pas une destruction par le feu.

**bonnes choses** — Le sens retenu est « etre bon ». Le mot tayyibati de la racine t-y-b designe ce qui est agreable, pur et licite. Le Lane's donne « good, pleasant, pure ». L'alimentation doit etre bonne — a la fois agreable et licite.

**pourvus** — Le sens retenu est « pourvoir ». Le verbe razaqnakum de la racine r-z-q designe l'acte de fournir la subsistance. L'alternative « gratitude » est ecartee car le contexte parle de l'acte de pourvoir, pas de la gratitude pour ce qui est pourvu.

**leses** — Le sens retenu est « etre injuste ». Le verbe zalamuna de la racine z-l-m designe l'acte de commettre une injustice. L'alternative « obscurite » est ecartee car le contexte parle d'un acte moral (faire du tort), pas d'un etat physique (etre dans le noir).

**etaient** — Le sens retenu est « etre ». Le verbe kanu de la racine k-w-n designe l'etat d'existence dans le passe. Le verbe sert ici de verbe auxiliaire dans la construction kanu yazlimuna (ils etaient en train de leser).

**eux-memes** — Le sens retenu est « ame ». Le mot anfusahum de la racine n-f-s avec pronom 3MP designe leurs propres personnes. L'expression anfusahum yazlimuna signifie « eux-memes ils lesaient » — le tort revient sur son auteur.

§CRITIQUE§
**ombrage vs couvert de l'ombre** — Le Lane's donne pour zallala « he shaded, sheltered ». « Ombrage » est plus concis que « couvert de l'ombre ». Les deux rendent le sens de protection contre le soleil par l'ombre du nuage.
**manne vs faveur divine** — Le Lane's donne pour manna « a sweet substance ». « Manne » est le terme consacre pour cette nourriture miraculeuse. « Faveur » serait trop vague — la manne est un produit specifique, pas un bienfait abstrait.
**leses vs fait du tort** — Le Lane's donne pour zalama « he wronged, treated unjustly, placed in a wrong place ». « Leser » est plus precis que « faire du tort » — il porte l'idee de diminuer les droits de quelqu'un. Dieu ne peut pas etre lese car Il est au-dessus de tout tort — le verset le dit explicitement.`,
    segments: [
      { fr: "et Nous avons ombrage", pos: "verbe", phon: "wa-zallalna", arabic: "وَظَلَّلْنَا", word_key: "z l l", is_particle: false, sense_retenu: "ombrager", position: 0 },
      { fr: "sur vous", phon: "'alaykum", arabic: "عَلَيْكُمُ", is_particle: true, position: 1 },
      { fr: "le nuage", pos: "nom", phon: "al-ghamama", arabic: "ٱلْغَمَامَ", word_key: "ghmm", is_particle: false, sense_retenu: "nuages", position: 2 },
      { fr: "et fait descendre", pos: "verbe", phon: "wa-anzalna", arabic: "وَأَنزَلْنَا", word_key: "nzl", is_particle: false, sense_retenu: "faire descendre", position: 3 },
      { fr: "sur vous", phon: "'alaykum", arabic: "عَلَيْكُمُ", is_particle: true, position: 4 },
      { fr: "la manne", pos: "nom", phon: "al-manna", arabic: "ٱلْمَنَّ", word_key: "mnn", is_particle: false, sense_retenu: "bienfait", position: 5 },
      { fr: "et les cailles", pos: "nom", phon: "was-salwa", arabic: "وَٱلسَّلْوَYٰ", word_key: "slwy", is_particle: false, sense_retenu: "caille", position: 6 },
      { fr: "mangez", pos: "verbe", phon: "kulu", arabic: "كُلُوا۟", word_key: "akl", is_particle: false, sense_retenu: "manger", position: 7 },
      { fr: "des", phon: "min", arabic: "مِن", is_particle: true, position: 8 },
      { fr: "bonnes choses", pos: "nom", phon: "tayyibati", arabic: "طَيِّبَٰتِ", word_key: "tyb", is_particle: false, sense_retenu: "etre bon", position: 9 },
      { fr: "dont", phon: "ma", arabic: "مَا", is_particle: true, position: 10 },
      { fr: "Nous vous avons pourvus", pos: "verbe", phon: "razaqnakum", arabic: "رَزَقْنَٰكُمْ", word_key: "rzq", is_particle: false, sense_retenu: "pourvoir", position: 11 },
      { fr: "et ne", phon: "wa-ma", arabic: "وَمَا", is_particle: true, position: 12 },
      { fr: "ils Nous ont leses", pos: "verbe", phon: "zalamuna", arabic: "ظَلَمُونَا", word_key: "zlm", is_particle: false, sense_retenu: "etre injuste", position: 13 },
      { fr: "mais", phon: "walakin", arabic: "وَلَٰكِن", is_particle: true, position: 14 },
      { fr: "ils etaient", pos: "verbe", phon: "kanu", arabic: "كَانُوٓا۟", word_key: "knw", is_particle: false, sense_retenu: "etre", position: 15 },
      { fr: "eux-memes", pos: "nom", phon: "anfusahum", arabic: "أَنفُسَهُمْ", word_key: "nfs", is_particle: false, sense_retenu: "ame", position: 16 },
      { fr: "qu'ils lesaient", pos: "verbe", phon: "yazlimuna", arabic: "يَظْلِمُونَ", word_key: "zlm", is_particle: false, sense_retenu: "etre injuste", position: 17 }
    ],
    words: [
      {
        word_key: "z l l", position: 0, sense_chosen: "ombrager",
        analysis_axes: {
          sense_chosen: "ombrager",
          concept_chosen: "Ombre/Protection",
          concepts: {
            "Ombre/Protection": {
              status: "retenu",
              senses: ["ombrager", "ombre", "abri", "fraîcheur"],
              proof_ctx: "Le verbe zallalna est un accompli 1P forme II de la racine z-l-l avec pronom 1P suffixe. Le Lane's donne « he shaded, protected from the sun ». La forme II (intensif) renforce l'idee de couverture — c'est un ombrage abondant et complet. Le sujet est Dieu (Nous) et le beneficiaire les enfants d'Israel. L'ombre dans le desert est un bienfait vital — elle protege de la chaleur mortelle du soleil.",
              axe1_verset: "Le verbe zallalna ouvre la serie des bienfaits enumeres dans ce verset. L'ombre est le premier bienfait — avant la nourriture. Dieu couvre d'abord les enfants d'Israel de Son ombre protectrice (le nuage) puis Il leur fournit la manne et les cailles. L'ordre est significatif : la protection precede la provision. Le verset articule trois bienfaits : ombre, nourriture sucree (manne) et nourriture carnee (cailles), couvrant les besoins essentiels de survie dans le desert.",
              axe2_voisins: "Le verset 2:56 rapportait la resurrection apres la foudre. Ce verset 2:57 passe de la resurrection a la provision. La sequence chatiment-resurrection-provision montre la progression de la misericorde divine : Dieu punit, puis Il rend la vie, puis Il pourvoit aux besoins. Les versets suivants (2:58-59) montreront de nouvelles instructions divines et de nouvelles desobeissances.",
              axe3_sourate: "La racine z-l-l est rare dans la sourate al-Baqarah. Ce verset est la seule occurrence dans le contexte des bienfaits accordes aux enfants d'Israel dans le desert. L'ombre est un bienfait specifique au desert — un bienfait que les sedentaires ne connaissent pas. La sourate insiste sur les bienfaits concrets pour montrer l'ingratitude des enfants d'Israel.",
              axe4_coherence: "La racine z-l-l apparait environ 30 fois dans le Coran. En 7:160, le meme episode est rapporte : « Nous avons ombrage sur eux le nuage ». En 4:57, « les croyants seront dans des jardins sous lesquels coulent les fleuves, ils y auront des epouses purifiees, et Nous les ferons entrer dans une ombre dense (zillan zalilan) ». L'ombre est un bienfait paradisiaque — ce que Dieu accorde aux enfants d'Israel dans le desert est un avant-gout du paradis.",
              axe5_frequence: "Pour la mission du khalifa, l'ombre est la protection divine qui couvre celui qui accomplit sa mission. Le khalifa dans le desert de l'existence a besoin de l'ombre de la guidance divine. Les enfants d'Israel avaient cette ombre mais ne l'ont pas appreciee — leur ingratitude les a prives de la conscience de la protection divine."
            }
          }
        }
      },
      {
        word_key: "ghmm", position: 2, sense_chosen: "nuages",
        analysis_axes: {
          sense_chosen: "nuages",
          concept_chosen: "Affliction/Couverture",
          concepts: {
            "Affliction/Couverture": {
              status: "retenu",
              senses: ["chagriner", "attrister", "souci", "nuages", "couvrir"],
              proof_ctx: "Le mot al-ghamama est un nom masculin singulier defini au cas accusatif de la racine gh-m-m. Le Lane's donne « clouds, a collection of thin white clouds that covers the sky ». Le ghamam est un type specifique de nuage — blanc, fin, qui couvre le ciel sans apporter de pluie. Ici les nuages ne sont pas porteurs de pluie mais d'ombre. Le defini (al-) indique que ce sont les nuages connus de l'episode du desert.",
              axe1_verset: "Le mot al-ghamama est le complement du verbe zallalna — Dieu a ombrage les enfants d'Israel par le nuage. Le nuage est l'instrument de l'ombre divine. La racine gh-m-m porte l'idee de couverture (ghamm = ce qui couvre le coeur de souci). Ici la couverture est benefique — le nuage couvre et protege au lieu de chagriner. L'image est celle d'un Dieu qui prend soin des besoins physiques de Son peuple dans le desert.",
              axe2_voisins: "Les versets precedents rapportaient des epreuves (veau d'or, foudre). Ce verset introduit les bienfaits. Le nuage est le premier signe de la sollicitude divine — apres le chatiment, Dieu pourvoit. Le contraste entre la foudre (v55) et le nuage protecteur (v57) est saisissant : le ciel peut etre source de chatiment (foudre) ou de protection (nuage). Le meme ciel repond differemment selon l'attitude du peuple.",
              axe3_sourate: "La racine gh-m-m est rare dans la sourate al-Baqarah. En 2:210, « attendent-ils que Dieu vienne a eux dans des ombres de nuages (fi zulal min al-ghamam) ». Les nuages sont associes a la presence divine — Dieu se manifeste derriere ou dans les nuages. Le nuage est le voile qui protege de la vision directe de Dieu que les enfants d'Israel avaient insolemment demandee.",
              axe4_coherence: "La racine gh-m-m apparait peu dans le Coran (3 occurrences de ghamam). En 7:160, le meme episode du desert est rapporte avec les memes bienfaits : ombre, manne, cailles. En 25:25, « le jour ou le ciel se fendra avec les nuages et ou les anges descendront ». Les nuages sont toujours associes a des evenements divins majeurs — protection dans le desert ou manifestation au Jour du Jugement.",
              axe5_frequence: "Pour la mission du khalifa, le nuage represente la couverture divine qui accompagne la mission. Le khalifa est protege par des « nuages » de guidance et de provision tant qu'il reste dans la voie. Les enfants d'Israel avaient le nuage protecteur mais ont choisi l'ingratitude — le nuage etait la pour les abriter, pas pour les dispenser de la foi."
            }
          }
        }
      },
      {
        word_key: "nzl", position: 3, sense_chosen: "faire descendre",
        analysis_axes: {
          sense_chosen: "faire descendre",
          concept_chosen: "Descente/Révélation",
          concepts: {
            "Descente/Révélation": {
              status: "retenu",
              senses: ["pluie qui descend", "descendre", "faire descendre", "révéler", "envoyer d'en haut"],
              proof_ctx: "Le verbe anzalna est un accompli 1P forme IV de la racine n-z-l avec pronom 1P. Le Lane's donne « he sent down, caused to descend from above ». La forme IV (causatif) signifie « faire descendre ». Le sujet est Dieu (Nous) et l'objet est la manne et les cailles. La descente est du ciel vers la terre — Dieu fait descendre la nourriture sur les enfants d'Israel.",
              axe1_verset: "Le verbe anzalna est le deuxieme acte divin du verset (apres zallalna). Dieu fait descendre la manne et les cailles — la nourriture vient du ciel, pas de l'effort humain. La descente exprime la grace divine : les enfants d'Israel n'ont rien fait pour meriter cette nourriture, elle leur est donnee d'en haut. L'imperatif kulu (mangez) qui suit souligne que la seule chose demandee aux humains est de consommer ce que Dieu fournit.",
              axe2_voisins: "Le verset 2:22 utilisait deja la racine n-z-l pour decrire la descente de la pluie du ciel. En 2:57, c'est la manne et les cailles qui descendent. La sourate montre que tout bienfait vient du ciel — l'eau, la nourriture, la revelation. La descente est le mouvement fondamental de la grace divine vers les creatures terrestres.",
              axe3_sourate: "La racine n-z-l est omnipresente dans la sourate al-Baqarah pour decrire la revelation du Livre et la descente des bienfaits materiels. En 2:4, les croyants croient en « ce qui a ete descendu vers toi et ce qui a ete descendu avant toi ». En 2:57, la descente est materielle (manne et cailles). La meme racine couvre la revelation spirituelle et la provision materielle — les deux viennent de Dieu.",
              axe4_coherence: "La racine n-z-l apparait plus de 290 fois dans le Coran. En 7:160, « Nous avons fait descendre sur eux la manne et les cailles ». En 20:80, « Nous avons fait descendre sur vous la manne et les cailles ». L'episode de la descente de la nourriture dans le desert est rapporte a plusieurs reprises. La descente divine est toujours un acte de grace — Dieu fait descendre ce dont les hommes ont besoin.",
              axe5_frequence: "Pour la mission du khalifa, la descente est le mode de communication entre Dieu et Sa creation. Le khalifa recoit d'en haut la guidance et la provision. Les enfants d'Israel ont recu la manne et les cailles d'en haut mais ne l'ont pas apprecie — ils ont voulu autre chose (2:61). Le khalifa doit etre reconnaissant de ce qui descend vers lui."
            },
            "Halte/Séjour": {
              status: "nul",
              senses: ["s'installer", "faire halte", "hôte", "lieu de descente"],
              proof_ctx: "Le sens de halte est un autre sens de n-z-l (descendre pour s'installer). Le contexte utilise la forme IV causative (anzala = faire descendre) avec la manne et les cailles comme objets, pas des personnes qui s'installent. La descente est du ciel vers la terre, pas un voyageur qui fait halte."
            }
          }
        }
      },
      {
        word_key: "mnn", position: 5, sense_chosen: "bienfait",
        analysis_axes: {
          sense_chosen: "bienfait",
          concept_chosen: "Faveur/Rappel",
          concepts: {
            "Faveur/Rappel": {
              status: "retenu",
              senses: ["accorder une faveur", "bienfait", "gratifier", "rappeler un bienfait"],
              proof_ctx: "Le mot al-manna est un nom masculin singulier defini au cas accusatif de la racine m-n-n. Le Lane's donne « manna, a sweet substance that was found upon trees in the morning, like honey in sweetness ». Le manna est une nourriture miraculeuse qui tombe du ciel — c'est un bienfait divin concret sous forme de substance comestible. Le defini (al-) designe la manne specifique de l'episode du desert.",
              axe1_verset: "Le mot al-manna est le premier des deux aliments que Dieu fait descendre. La manne est la nourriture sucree, les cailles sont la nourriture carnee — ensemble elles couvrent les besoins alimentaires complets. Le manna vient de la racine m-n-n qui signifie aussi « accorder une faveur » — la manne est elle-meme une faveur divine materialisee en nourriture. Le fait que Dieu la fasse descendre (anzalna) montre que c'est un don celeste, pas un produit terrestre.",
              axe2_voisins: "Le verset 2:56 rapportait la resurrection. Ce verset 2:57 passe de la resurrection a la provision alimentaire. La manne est le premier bienfait materiel apres la survie elle-meme. Les versets suivants (2:61) montreront que les enfants d'Israel se lasseront de la manne et exigeront une nourriture terrestre (legumes, oignons, ail) — l'ingratitude face au bienfait celeste.",
              axe3_sourate: "La racine m-n-n dans la sourate evoque la faveur divine. En 2:262, « ceux qui depensent leurs biens dans le sentier de Dieu puis ne font pas suivre leur depense de rappel (mann) ». Rappeler ses bienfaits (mann) est blame — Dieu donne sans rappeler. Mais ici le mann est la nourriture elle-meme, pas le reproche. La sourate distingue la faveur divine (toujours bonne) et le rappel des faveurs par les hommes (reprochable).",
              axe4_coherence: "La racine m-n-n apparait environ 25 fois dans le Coran. En 7:160, le meme episode est rapporte. En 20:80, « Nous vous avons delivres de votre ennemi et Nous vous avons donne rendez-vous au flanc droit du mont et Nous avons fait descendre sur vous la manne et les cailles ». La manne est toujours associee aux cailles (salwa) et au desert du Sinai. C'est un bienfait exclusif a l'episode des enfants d'Israel.",
              axe5_frequence: "Pour la mission du khalifa, la manne represente la provision divine gratuite qui accompagne la mission. Le khalifa n'a pas a produire sa propre guidance — elle lui est donnee d'en haut. Les enfants d'Israel avaient la manne mais voulaient les legumes de la terre — ils ont prefere le terrestre au celeste."
            }
          }
        }
      },
      {
        // NOTE: slwy (id=563) has incorrect concept data in JSON ("Totalité/Universalité")
        // The root is correct (س ل و = quail) but concept loading was wrong.
        // We write minimal data and flag for later correction.
        word_key: "slwy", position: 6, sense_chosen: "caille",
        analysis_axes: {
          sense_chosen: "caille",
          concept_chosen: "Totalité/Universalité",
          concepts: {
            "Totalité/Universalité": {
              status: "retenu",
              senses: ["totalité", "entier", "tout", "chaque"],
              proof_ctx: "ATTENTION: Le concept charge pour slwy (id=563, racine s-l-w) est « Totalite/Universalite » avec des sens lies a la totalite. Or la salwa dans le Coran designe exclusivement la caille, oiseau comestible envoye du ciel aux enfants d'Israel. Le Lane's donne pour salwa « the quail ». Le mot as-salwa est un nom collectif defini au cas accusatif. Les cailles sont la nourriture carnee qui complete la manne (nourriture sucree). Ce concept devra etre corrige en base de donnees pour refleter le sens de caille."
            }
          }
        }
      },
      {
        word_key: "akl", position: 7, sense_chosen: "manger",
        analysis_axes: {
          sense_chosen: "manger",
          concept_chosen: "Alimentation/Consommation",
          concepts: {
            "Alimentation/Consommation": {
              status: "retenu",
              senses: ["consommer", "dévorer", "nourriture", "manger"],
              proof_ctx: "Le verbe kulu est un imperatif 2MP de la racine a-k-l. Le Lane's donne « eat ye, eat ». L'imperatif est un ordre divin de jouissance — Dieu ordonne de manger les bonnes choses qu'Il a fournies. L'acte de manger est ici un acte de bienfaisance divine : Dieu nourrit et invite a consommer.",
              axe1_verset: "Le verbe kulu est l'ordre qui suit l'enumeration des bienfaits. Apres avoir ombrage et fait descendre la manne et les cailles, Dieu ordonne : mangez. L'imperatif de permission montre que la nourriture est licite et bonne (min tayyibati). Dieu ne se contente pas de fournir — Il invite explicitement a jouir de Ses bienfaits. L'ordre de manger est un ordre de reconnaitre la generosite divine en acceptant Ses dons.",
              axe2_voisins: "Le verset 2:58 ordonnera aux enfants d'Israel d'entrer dans une cite et d'y manger en abondance (kulu minha raghadan). Le verset 2:61 montrera les enfants d'Israel lasses de la manne et des cailles, reclamant des legumes terrestres. La sequence montre que Dieu ordonne de manger le bon et le pur, mais le peuple veut manger autre chose — l'ingratitude alimentaire est une metaphore de l'ingratitude spirituelle.",
              axe3_sourate: "La racine a-k-l est frequente dans la sourate al-Baqarah dans des contextes alimentaires et moraux. En 2:168, « O hommes, mangez de ce qui est licite et bon sur terre ». En 2:188, « ne mangez pas vos biens entre vous par le faux ». La sourate oppose la nourriture licite (a manger) et la nourriture illicite (a ne pas manger). Manger est un acte moral autant que physique.",
              axe4_coherence: "La racine a-k-l apparait environ 110 fois dans le Coran. En 5:3, les interdits alimentaires sont detailles. En 7:19, « mangez d'ou vous voudrez » dans le paradis. L'acte de manger est encadre par le licite et l'illicite — Dieu determine ce qu'on peut et ne peut pas manger. L'obeissance a Dieu passe aussi par l'alimentation.",
              axe5_frequence: "Pour la mission du khalifa, manger est un acte quotidien qui engage la responsabilite. Le khalifa mange ce que Dieu lui fournit et en est reconnaissant. Refuser la nourriture divine pour en reclamer une autre est une forme de rebellion du khalifa contre les termes de sa mission."
            },
            "Destruction/Érosion": {
              status: "nul",
              senses: ["user", "consumer (le feu mange)"],
              proof_ctx: "Le sens de destruction est un sens derive de a-k-l (le feu « mange » ce qu'il consume). Le contexte est un imperatif de nourriture — mangez des bonnes choses. Il ne s'agit pas de destruction mais d'alimentation."
            }
          }
        }
      },
      {
        word_key: "tyb", position: 9, sense_chosen: "etre bon",
        analysis_axes: {
          sense_chosen: "etre bon",
          concept_chosen: "Bonté/Pureté",
          concepts: {
            "Bonté/Pureté": {
              status: "retenu",
              senses: ["être bon", "pur", "licite", "agréable", "parfum"],
              proof_ctx: "Le mot tayyibati est un nom feminin pluriel au cas genitif de la racine t-y-b. Le Lane's donne « good, pleasant, pure, clean, lawful ». Les tayyibat sont les bonnes choses — ce qui est a la fois agreable au gout et pur dans sa nature. Le pluriel indique la variete des bonnes choses fournies par Dieu (manne, cailles). Le genitif est regi par la preposition min (des bonnes choses).",
              axe1_verset: "Le mot tayyibati qualifie ce que les enfants d'Israel sont invites a manger. L'ordre kulu min tayyibati ma razaqnakum signifie « mangez des bonnes choses dont Nous vous avons pourvus ». Les bonnes choses sont la manne et les cailles — nourriture celeste, pure et agreable. Le qualificatif tayyibat insiste sur la qualite divine de la nourriture : ce n'est pas n'importe quelle nourriture mais des bonnes choses choisies par Dieu.",
              axe2_voisins: "Le verset 2:61 montrera les enfants d'Israel reclamant des legumes terrestres (oignons, ail, lentilles) a la place de la manne et des cailles. Ils echangent les bonnes choses celestes (tayyibat) contre des produits terrestres inferieurs. En 2:61, Moise leur dira : « echangez-vous ce qui est inferieur contre ce qui est meilleur ? ». Les tayyibat du verset 2:57 sont le standard que les enfants d'Israel refuseront.",
              axe3_sourate: "La racine t-y-b dans la sourate al-Baqarah est liee a la purete et au licite. En 2:168, « mangez de ce qui est licite et bon (tayyiban) sur terre ». En 2:172, « mangez des bonnes choses (tayyibat) dont Nous vous avons pourvus ». La sourate insiste sur la qualite morale de l'alimentation — manger pur et bon est un acte d'obeissance a Dieu.",
              axe4_coherence: "La racine t-y-b apparait environ 50 fois dans le Coran. En 14:24, « une bonne parole est comme un bon arbre dont la racine est ferme et la ramure dans le ciel ». Le tayyib s'applique a la parole, a la nourriture, a la terre — tout ce qui est conforme a sa nature et agreable est tayyib. En 5:4, les bonnes choses sont rendues licites aux croyants. Le bon est la norme divine.",
              axe5_frequence: "Pour la mission du khalifa, les bonnes choses sont la provision divine qui accompagne la mission. Le khalifa doit se contenter des tayyibat que Dieu lui fournit et ne pas reclamer autre chose. Les enfants d'Israel ont recu les meilleures nourritures mais les ont meprisees — le khalifa qui meprise les bienfaits divins compromet sa mission."
            }
          }
        }
      },
      {
        word_key: "rzq", position: 11, sense_chosen: "pourvoir",
        analysis_axes: {
          sense_chosen: "pourvoir",
          concept_chosen: "Subsistance/Provision",
          concepts: {
            "Subsistance/Provision": {
              status: "retenu",
              senses: ["pourvoir", "nourrir", "subsistance", "moyens de vivre", "part"],
              proof_ctx: "Le verbe razaqnakum est un accompli 1P de la racine r-z-q avec pronom 2MP. Le Lane's donne « he provided, nourished, gave means of subsistence ». Le sujet est Dieu (Nous) et le beneficiaire les enfants d'Israel (vous). Le rizq est la provision divine — ce que Dieu alloue a chaque creature pour sa survie. L'accompli marque un acte acheve — Dieu a deja pourvu.",
              axe1_verset: "Le verbe razaqnakum cloture l'enumeration des bienfaits. Apres l'ombre, la manne et les cailles, Dieu dit « dont Nous vous avons pourvus ». Le verbe englobe tous les bienfaits precedents sous le concept de provision divine (rizq). Le rizq n'est pas un accident mais un acte delibere de Dieu — Il pourvoit volontairement et generieusement. La suite du verset (ils ne Nous ont pas leses) montre que l'ingratitude face au rizq ne nuit qu'a celui qui est ingrat.",
              axe2_voisins: "Le verset 2:3 definissait les croyants comme ceux qui « depensent de ce dont Nous les avons pourvus (razaqnahum) ». En 2:57, Dieu pourvoit les enfants d'Israel. La question est : que font-ils de cette provision ? Les versets suivants montreront qu'ils reclamaient autre chose (2:61). La provision divine est toujours suffisante — c'est le beneficiaire qui juge insuffisant ce que Dieu juge bon.",
              axe3_sourate: "La racine r-z-q est un pilier de la sourate al-Baqarah. En 2:22, Dieu fait descendre la pluie et fait sortir les fruits « comme provision pour vous (rizqan lakum) ». En 2:25, les croyants au paradis auront des fruits « comme provision ». La sourate montre que la provision vient toujours de Dieu, dans cette vie (manne, pluie) comme dans l'autre (fruits du paradis).",
              axe4_coherence: "La racine r-z-q apparait environ 120 fois dans le Coran. En 11:6, « il n'y a pas de creature sur terre dont la subsistance n'incombe a Dieu ». En 65:3, « quiconque craint Dieu, Il lui donne une issue et lui accorde provision d'ou il ne s'y attendait pas ». La provision divine est universelle et certaine — Dieu pourvoit a toute creature. Le khalifa n'a pas a s'inquieter de sa subsistance s'il est sur la voie.",
              axe5_frequence: "Pour la mission du khalifa, la provision est la base materielle de la mission. Le khalifa recoit de Dieu ce dont il a besoin pour accomplir sa mission — nourriture, moyens, capacites. Les enfants d'Israel avaient tout le rizq necessaire mais l'ont meprise. Le khalifa qui meprise sa provision divine montre son ingratitude et compromet sa mission."
            },
            "Sens isolé/Gratitude": {
              status: "nul",
              senses: ["gratitude pour la subsistance"],
              proof_ctx: "Sens isole sans pertinence directe. Le contexte utilise le verbe razaqa dans son sens actif de « pourvoir », pas dans le sens de gratitude."
            }
          }
        }
      },
      {
        word_key: "zlm", position: 13, sense_chosen: "etre injuste",
        analysis_axes: {
          sense_chosen: "etre injuste",
          concept_chosen: "Injustice/Oppression",
          concepts: {
            "Injustice/Oppression": {
              status: "retenu",
              senses: ["opprimer", "injustice", "oppresseur", "être injuste"],
              proof_ctx: "Le verbe zalamuna est un accompli 3MP de la racine z-l-m avec pronom 1P et negation precedente (ma zalamuna). Le Lane's donne « he wronged, treated unjustly, placed a thing in a wrong place ». Le zulm est l'acte de placer quelque chose la ou ce n'est pas sa place. Ici, precede de la negation : ils ne Nous ont pas fait de tort. Dieu affirme qu'Il ne peut pas etre lese par l'ingratitude humaine.",
              axe1_verset: "Le verbe zalamuna introduit la conclusion morale du verset. Apres l'enumeration des bienfaits, Dieu clarifie : « ils ne Nous ont pas fait de tort mais c'est eux-memes qu'ils lesaient ». L'injustice revient sur son auteur. L'ingratitude face aux bienfaits divins ne diminue pas Dieu — elle diminue celui qui est ingrat. La construction ma zalamuna walakin kanu anfusahum yazlimuna est une formule de retournement : le tort que l'homme croit faire a Dieu revient integralement sur lui-meme.",
              axe2_voisins: "Le verset 2:54 utilisait deja zlm : « vous avez ete injustes envers vous-memes (zalamtum anfusakum) ». En 2:57, la meme idee revient avec plus de force : non seulement ils se font du tort a eux-memes mais Dieu precise qu'Il n'est nullement affecte. La repetition du theme de l'injustice reflexive montre que c'est une lecon centrale de la section.",
              axe3_sourate: "La racine z-l-m est l'une des plus frequentes de la sourate al-Baqarah. Les enfants d'Israel sont regulierement qualifies de zalimun (injustes). En 2:35, « n'approchez pas de cet arbre sinon vous serez parmi les injustes ». En 2:51, « vous avez pris le veau et vous etes injustes ». L'injustice est le fil rouge de leurs transgressions — a chaque bienfait divin correspond une injustice humaine.",
              axe4_coherence: "La racine z-l-m apparait plus de 280 fois dans le Coran. En 3:117, « Dieu ne leur fait pas de tort mais ce sont eux qui se font du tort ». C'est la meme formule que 2:57. En 10:44, « Dieu ne fait de tort aux gens en rien mais ce sont les gens qui se font du tort ». Le principe est universel : l'injustice revient toujours sur son auteur. Dieu est au-dessus de toute injustice.",
              axe5_frequence: "Pour la mission du khalifa, l'injustice reflexive est l'avertissement supreme. Le khalifa qui desobeit ne nuit pas a Dieu mais a lui-meme. Les enfants d'Israel sont l'exemple parfait : chaque transgression les eloigne de la mission sans affecter Dieu en rien. Le khalifa qui comprend ce principe agit justement par interet bien compris, pas par obligation externe."
            },
            "Souffle/Vent": {
              status: "nul",
              senses: ["se faire du tort"],
              proof_ctx: "Ce concept porte le sens « se faire du tort » qui est en realite un doublon du sens d'injustice. Le concept Injustice/Oppression couvre deja ce sens de maniere plus complete et precise."
            },
            "Obscurité/Ténèbres": {
              status: "probable",
              senses: ["obscurité", "ténèbres"],
              proof_ctx: "Le sens d'obscurite est le sens premier physique de z-l-m — l'absence de lumiere. Le Lane's donne « darkness ». Le contexte utilise zalama dans son sens moral d'injustice, pas dans son sens physique d'obscurite. L'injustice est metaphoriquement une obscurite qui cache la lumiere de la verite. Mais ici le sens moral domine clairement sur le sens physique.",
              axe1_verset: "Si on retient le sens d'obscurite, le verset signifierait « ils ne Nous ont pas plonges dans les tenebres ». Cela n'a pas de sens theologique — Dieu ne peut pas etre plonge dans l'obscurite. Le sens moral de zulm (injustice) est le seul coherent avec la construction du verset et son contexte de bienfaits refuses.",
              axe2_voisins: "Les versets environnants parlent de bienfaits et d'ingratitude. L'obscurite physique n'a pas de place dans cette narration. Le sens moral d'injustice s'integre parfaitement dans la progression : bienfaits -> ingratitude -> injustice envers soi-meme.",
              axe3_sourate: "La sourate al-Baqarah utilise z-l-m presque exclusivement dans le sens moral d'injustice. Les occurrences de zulm-obscurite sont tres rares dans cette sourate. Le contexte global est celui de la justice et de l'injustice, pas de la lumiere et de l'obscurite.",
              axe4_coherence: "Dans le Coran, le lien entre zulm (injustice) et zulma (obscurite) est metaphorique : l'injuste est dans les tenebres de l'erreur. Mais les deux sens sont distincts en contexte — ici c'est clairement l'injustice morale qui est visee.",
              axe5_frequence: "L'obscurite et l'injustice partagent la meme racine, ce qui suggere un lien profond : etre injuste c'est etre dans le noir moral. Mais pour ce verset, le sens d'injustice prime."
            }
          }
        }
      },
      {
        word_key: "knw", position: 15, sense_chosen: "etre",
        analysis_axes: {
          sense_chosen: "etre",
          concept_chosen: "Existence/Devenir",
          concepts: {
            "Existence/Devenir": {
              status: "retenu",
              senses: ["être", "exister", "devenir"],
              proof_ctx: "Le verbe kanu est un accompli 3MP de la racine k-w-n. Le Lane's donne « they were, they existed in a state ». Le verbe kana est le verbe d'existence et d'etat par excellence en arabe. Ici il sert de verbe auxiliaire dans la construction kanu anfusahum yazlimuna (ils etaient eux-memes en train de leser). Le kana + inaccompli forme un passe progressif (imparfait) — ils etaient en train de se faire du tort, de maniere continue.",
              axe1_verset: "Le verbe kanu introduit la proposition adversative (walakin kanu anfusahum yazlimuna). Le passe progressif (kanu yazlimuna) indique une action continue et habituelle — ils ne se faisaient pas du tort ponctuellement mais de maniere permanente et repetee. Le kana insiste sur la duree de l'injustice envers eux-memes. Le verset oppose deux etats : Dieu pourvoit (acte acheve, accompli) et eux lesent (acte continu, progressif).",
              axe2_voisins: "Le verbe kana est utilise frequemment dans la section des enfants d'Israel pour decrire leurs etats passes. En 2:61, « ils furent frappes d'avilissement et de misere car ils etaient (kanu) en train de nier les signes de Dieu ». Le kana marque un etat passe qui explique les consequences — parce qu'ils etaient injustes, ils ont souffert.",
              axe3_sourate: "La racine k-w-n est omnipresente dans la sourate al-Baqarah. En 2:34, « il etait (kana) parmi les mecreants ». En 2:71, « ils faillirent ne pas le faire ». Le verbe kana structure la narration en situant les etats et les actions dans le passe. C'est le verbe qui donne la profondeur temporelle au recit coranique.",
              axe4_coherence: "La racine k-w-n apparait plus de 1350 fois dans le Coran. Le verbe kana est le verbe le plus frequent apres qala (dire). Il structure le discours narratif et descriptif. En 2:117, « kun fa-yakun » (Sois et c'est) — le verbe d'existence porte aussi le pouvoir creatif absolu de Dieu. Etre est le premier acte de toute creature.",
              axe5_frequence: "Pour la mission du khalifa, le verbe etre definit l'identite du khalifa. Ce qu'il est determine ce qu'il fait. Les enfants d'Israel etaient (kanu) des injustes envers eux-memes — leur etre determinait leur agir. Le khalifa est appele a etre juste, ce qui determine ses actes justes."
            }
          }
        }
      },
      {
        word_key: "nfs", position: 16, sense_chosen: "ame",
        analysis_axes: {
          sense_chosen: "ame",
          concept_chosen: "Âme/Être",
          concepts: {
            "Âme/Être": {
              status: "retenu",
              senses: ["personne", "esprit", "désir", "soi-même", "âme"],
              proof_ctx: "Le mot anfusahum est un nom feminin pluriel de la racine n-f-s avec pronom 3MP. Le Lane's donne « their own selves, their own souls ». Le pluriel anfus (ames) avec le pronom possessif signifie « eux-memes ». La nafs est la totalite de l'etre — corps, ame, esprit. Ici anfusahum designe les personnes dans leur totalite : eux-memes, pas quelqu'un d'autre.",
              axe1_verset: "Le mot anfusahum est le complement anticipé du verbe yazlimuna. La construction kanu anfusahum yazlimuna (c'est eux-memes qu'ils lesaient) met l'accent sur le reflexif — le tort revient sur son auteur. L'anticipation de anfusahum avant le verbe est une emphase syntaxique : ce n'est pas Dieu qu'ils lesent mais eux-memes. Le tort est autodirige — l'injuste se nuit d'abord a lui-meme avant de nuire a quiconque.",
              axe2_voisins: "Le verset 2:54 utilisait deja anfusakum : « vous avez ete injustes envers vous-memes (zalamtum anfusakum) ». En 2:57, la meme formule revient en troisieme personne. La repetition montre que l'injustice envers soi-meme est le diagnostic recurrent des enfants d'Israel. Ils se font du tort a chaque transgression — le veau d'or (v54), l'exigence de voir Dieu (v55), l'ingratitude face aux bienfaits (v57).",
              axe3_sourate: "La racine n-f-s est omnipresente dans la sourate al-Baqarah. En 2:48, « nulle ame ne suffira a une autre ame ». En 2:233, « aucune ame n'est chargee au-dela de sa capacite ». La nafs est toujours le sujet de la responsabilite — chaque ame repond pour elle-meme. L'injustice envers soi-meme est le resultat de la desobeissance — la nafs porte le poids de ses propres choix.",
              axe4_coherence: "La racine n-f-s apparait environ 295 fois dans le Coran. En 91:7-10, « par l'ame et ce qui l'a equilibree, et lui a inspire sa debauche et sa piete — reussit celui qui la purifie, echoue celui qui la corrompt ». La nafs est le lieu de la lutte entre le bien et le mal. L'injustice envers soi-meme (zulm an-nafs) est la corruption de l'ame par les mauvais choix.",
              axe5_frequence: "Pour la mission du khalifa, l'ame est le siege de la mission. Le khalifa agit par son ame et repond par son ame. Se faire du tort a soi-meme c'est compromettre sa propre mission. Les enfants d'Israel lesaient leurs propres ames — ils sabotaient leur propre mission de khalifas sur terre."
            },
            "Souffle/Vie": {
              status: "nul",
              senses: ["souffle", "respirer", "soulagement"],
              proof_ctx: "Le sens de souffle est le sens physique premier de n-f-s. Le contexte utilise anfusahum dans son sens de « eux-memes, leurs propres personnes ». La construction kanu anfusahum yazlimuna ne parle pas de souffle mais de personnes qui se font du tort."
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
  // jhr (id=553)
  { analysis_id: 553, phrases: [
    { sense: "manifester", arabic: "جَهَرَ بِالْقِرَاءَةِ حَتَّى سَمِعَهُ الْقَوْمُ", phon: "jahara bil-qira'ati hatta sami'ahu al-qawm", french: "Il a lu a haute voix jusqu'a ce que les gens l'entendent." },
    { sense: "public", arabic: "هَذَا أَمْرٌ جَهْرِيٌّ لَا يُخْفَى عَلَى أَحَدٍ", phon: "hadha amrun jahriyyun la yukhfa 'ala ahadin", french: "C'est une affaire publique qui n'echappe a personne." },
    { sense: "élever la voix", arabic: "لَا تَجْهَرْ بِصَوْتِكَ فِي مَجْلِسِ الْعِلْمِ", phon: "la tajhar bi-sawtika fi majlisi al-'ilm", french: "N'eleve pas la voix dans l'assemblee du savoir." }
  ]},
  // beth (id=545)
  { analysis_id: 545, phrases: [
    { sense: "ressusciter", arabic: "يَبْعَثُ اللَّهُ مَنْ فِي الْقُبُورِ يَوْمَ الْقِيَامَةِ", phon: "yab'athu Allahu man fi al-quburi yawma al-qiyamah", french: "Dieu ressuscite ceux qui sont dans les tombes au Jour de la Resurrection." },
    { sense: "envoyer", arabic: "بَعَثَ الْمَلِكُ رَسُولًا إِلَى الْقَوْمِ بِالْأَخْبَارِ", phon: "ba'atha al-maliku rasulan ila al-qawmi bil-akhbar", french: "Le roi a envoye un messager au peuple avec les nouvelles." },
    { sense: "éveiller", arabic: "بَعَثْتُهُ مِنْ نَوْمِهِ فَقَامَ مُسْرِعًا", phon: "ba'athtuhu min nawmihi fa-qama musri'an", french: "Je l'ai eveille de son sommeil et il s'est leve en hatant." }
  ]},
  // z l l (id=2335)
  { analysis_id: 2335, phrases: [
    { sense: "ombrager", arabic: "ظَلَّلَتِ الشَّجَرَةُ الْمُسَافِرِينَ فِي الْحَرِّ", phon: "zallalati ash-shajaratu al-musafirina fi al-harr", french: "L'arbre a ombrage les voyageurs dans la chaleur." },
    { sense: "ombre", arabic: "جَلَسَ فِي ظِلِّ الْجِدَارِ هَرَبًا مِنَ الشَّمْسِ", phon: "jalasa fi zilli al-jidari haraban mina ash-shamsi", french: "Il s'est assis a l'ombre du mur pour fuir le soleil." },
    { sense: "abri", arabic: "وَجَدُوا ظِلًّا ظَلِيلًا تَحْتَ الشَّجَرَةِ الْكَبِيرَةِ", phon: "wajadu zillan zalilan tahta ash-shajarati al-kabirah", french: "Ils ont trouve un abri dense sous le grand arbre." }
  ]},
  // ghmm (id=560)
  { analysis_id: 560, phrases: [
    { sense: "nuages", arabic: "غَطَّى الْغَمَامُ السَّمَاءَ فَلَمْ تُرَ الشَّمْسُ", phon: "ghatta al-ghamamu as-sama'a fa-lam tura ash-shams", french: "Les nuages ont couvert le ciel et le soleil a disparu." },
    { sense: "chagriner", arabic: "غَمَّهُ الْخَبَرُ حَتَّى ضَاقَ صَدْرُهُ", phon: "ghammahu al-khabaru hatta daqa sadruhu", french: "La nouvelle l'a chagrine au point que sa poitrine s'est resserree." },
    { sense: "couvrir", arabic: "غَمَّتِ السَّحَابَةُ الْوَادِيَ كُلَّهُ", phon: "ghammati as-sahabatu al-wadiya kullahu", french: "Le nuage a couvert toute la vallee." }
  ]},
  // mnn (id=561)
  { analysis_id: 561, phrases: [
    { sense: "accorder une faveur", arabic: "مَنَّ اللَّهُ عَلَى عِبَادِهِ بِالْهِدَايَةِ", phon: "manna Allahu 'ala 'ibadihi bil-hidayah", french: "Dieu a accorde Sa faveur a Ses serviteurs par la guidance." },
    { sense: "bienfait", arabic: "لِلَّهِ مِنَنٌ كَثِيرَةٌ عَلَى خَلْقِهِ", phon: "lillahi minanun kathiratun 'ala khalqihi", french: "Dieu a de nombreux bienfaits envers Ses creatures." },
    { sense: "rappeler un bienfait", arabic: "لَا تَمُنَّ عَلَى مَنْ أَحْسَنْتَ إِلَيْهِ", phon: "la tamunna 'ala man ahsanta ilayhi", french: "Ne rappelle pas ton bienfait a celui a qui tu as fait du bien." }
  ]},
  // tyb (id=564)
  { analysis_id: 564, phrases: [
    { sense: "être bon", arabic: "طَابَ الطَّعَامُ حَتَّى أَقْبَلُوا عَلَيْهِ جَمِيعًا", phon: "taba at-ta'amu hatta aqbalu 'alayhi jami'an", french: "La nourriture etait si bonne qu'ils se sont tous jetes dessus." },
    { sense: "pur", arabic: "هَذَا مَاءٌ طَيِّبٌ صَالِحٌ لِلشُّرْبِ", phon: "hadha ma'un tayyibun salihun lish-shurb", french: "C'est une eau pure et propre a la consommation." },
    { sense: "agréable", arabic: "طَابَتْ نَفْسُهُ لَمَّا سَمِعَ الْبُشْرَى", phon: "tabat nafsuhu lamma sami'a al-bushra", french: "Son ame s'est rejouie quand il a entendu la bonne nouvelle." }
  ]},
  // knw (id=2117)
  { analysis_id: 2117, phrases: [
    { sense: "être", arabic: "كَانَ الرَّجُلُ عَالِمًا فِي قَوْمِهِ", phon: "kana ar-rajulu 'aliman fi qawmihi", french: "L'homme etait un savant parmi son peuple." },
    { sense: "exister", arabic: "كُنْ كَمَا أَرَادَ اللَّهُ لَكَ أَنْ تَكُونَ", phon: "kun kama arada Allahu laka an takun", french: "Sois tel que Dieu a voulu que tu sois." },
    { sense: "devenir", arabic: "كَانَ فَقِيرًا ثُمَّ صَارَ غَنِيًّا بِفَضْلِ اللَّهِ", phon: "kana faqiran thumma sara ghaniyyan bi-fadli Allah", french: "Il etait pauvre puis est devenu riche par la grace de Dieu." }
  ]},
  // seq (id=554)
  { analysis_id: 554, phrases: [
    { sense: "foudroyer", arabic: "صَعَقَتِ الصَّاعِقَةُ الشَّجَرَةَ فَٱحْتَرَقَتْ", phon: "sa'aqati as-sa'iqatu ash-shajarata fa-htaraqat", french: "La foudre a frappe l'arbre et il a brule." },
    { sense: "terrasser", arabic: "صُعِقَ الرَّجُلُ مِنْ هَوْلِ مَا رَأَى", phon: "su'iqa ar-rajulu min hawli ma ra'a", french: "L'homme a ete terrasse par l'horreur de ce qu'il a vu." },
    { sense: "tonnerre", arabic: "سَمِعُوا صَوْتَ الصَّاعِقَةِ فَفَزِعُوا", phon: "sami'u sawta as-sa'iqati fa-fazi'u", french: "Ils ont entendu le bruit de la foudre et ont ete pris de frayeur." }
  ]},
  // slwy (id=563)
  { analysis_id: 563, phrases: [
    { sense: "caille", arabic: "أَنْزَلَ اللَّهُ السَّلْوَى عَلَى بَنِي إِسْرَائِيلَ فِي الصَّحْرَاءِ", phon: "anzala Allahu as-salwa 'ala bani Isra'ila fi as-sahra'", french: "Dieu a fait descendre les cailles sur les enfants d'Israel dans le desert." },
    { sense: "caille", arabic: "السَّلْوَى طَائِرٌ يُؤْكَلُ لَحْمُهُ", phon: "as-salwa ta'irun yu'kalu lahmuhu", french: "La caille est un oiseau dont la chair se mange." },
    { sense: "caille", arabic: "كُلُوا مِنَ الْمَنِّ وَالسَّلْوَى وَاشْكُرُوا", phon: "kulu mina al-manni was-salwa wash-kuru", french: "Mangez de la manne et des cailles et soyez reconnaissants." }
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

  const verseIds = [62, 63, 64];
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
  console.log('=== PIPELINE SOURATE 2 — AL-BAQARAH — VERSETS 55 A 57 ===\n');

  let totalOk = 0, totalErr = 0;

  for (let v = 55; v <= 57; v++) {
    const result = await processVerse(v);
    if (result) {
      totalOk += result.okCount;
      totalErr += result.errCount;
    }
  }

  await syncWordMeanings();
  await insertDailyPhrases();

  console.log(`\n=== PIPELINE V55-57 TERMINEE — TOTAL: ${totalOk} OK, ${totalErr} erreurs ===`);
}

main().catch(e => console.error('FATAL:', e));
