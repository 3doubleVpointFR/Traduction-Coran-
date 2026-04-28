const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// =====================================================
// PIPELINE SOURATE 2 - VERSET 234
// verse_id=241, analysis_id=599
// "wa alladhina yutawaffawna minkum wa yadharuna azwajan
//  yatarabbasna bi anfusihinna arba'ata ashhurin wa 'ashran
//  fa idha balaghna ajalahunna fa la junaha 'alaykum
//  fima fa'alna fi anfusihinna bi al-ma'rufi
//  wa Allahu bima ta'maluna khabir"
// =====================================================

const verseData = {
  234: {
    verse_id: 241,
    analysis_id: 599,
    translation_arab: "Ceux d'entre vous qui decedent — au sens d'etre pris entierement — et laissent des epouses : celles-ci observeront un delai d'attente par elles-memes de quatre mois et dix jours. Lorsqu'elles auront atteint leur terme, il n'y a pas d'inclinaison vers la faute pour vous dans ce qu'elles feront d'elles-memes convenablement. Et Dieu est Bien Informe de ce que vous faites.",
    full_translation: "Ceux d'entre vous qui decedent et laissent des epouses, celles-ci observeront un delai d'attente de quatre mois et dix jours. Lorsqu'elles auront atteint leur terme, vous ne serez pas responsables de ce qu'elles feront d'elles-memes convenablement. Dieu est Bien Informe de ce que vous faites.",
    translation_explanation: "§DEMARCHE§\n" +
"Le verset 234 fixe le delai d'attente ('idda) de la veuve — la femme dont le mari est decede. Ce delai est de quatre mois et dix jours (arba'ata ashhurin wa 'ashran). La veuve s'abstient pendant ce temps de contracter un nouveau mariage et observe certaines contraintes comportementales. A l'expiration du delai, elle retrouve sa pleine liberte d'action dans les limites du convenable (ma'ruf).\n" +
"\n" +
"La racine **wfy** (waw-fa-ya) signifie l'accomplissement et le fait d'etre pris entierement. Le Lane's donne : s'acquitter pleinement, accomplir entierement, tawaffa = etre pris en totalite, mourir (etre pris entierement par Dieu). Le verbe yutawaffawna (Form V passif) = ils sont pris entierement — la mort comme reception totale de l'etre par Dieu. Le terme tawaffa designe la mort sans jamais employer la racine de la mort physique (mawt) — l'ame est prise (tuwuffiya) par Dieu.\n" +
"\n" +
"La racine **zwj** (zay-waw-jim) signifie le couple et l'epoux. Le Lane's donne : epoux, couple, paire, partenaire conjugal. Azwajan = des epouses (accusatif pluriel). Le zawj est fondamentalement la paire — ce qui va ensemble. En contexte de succession, azwaj (epouses) sont celles qui restent.\n" +
"\n" +
"La racine **rbs** (ra-ba-sad) signifie l'attente et l'observation d'un delai. Le Lane's donne : attendre, observer un delai, s'abstenir pendant une periode definie. Yatarabbasna = elles observeront un delai d'attente (inaccompli 3FP). La Form V (tarabbus) exprime l'effort de l'attente — s'astreindre a demeurer dans un etat d'attente.\n" +
"\n" +
"La racine **nfs** (nun-fa-sin) signifie l'ame et la personne. Le Lane's donne : ame, souffle vital, soi, personne. Bi anfusihinna = par/avec elles-memes (litt. avec leurs ames). L'expression bi anfusihinna souligne l'autonomie personnelle de l'observation : chaque veuve observe le delai en elle-meme, dans sa propre personne.\n" +
"\n" +
"La racine **shhr** (shin-ha-ra) signifie le mois et la lunaison. Le Lane's donne : mois lunaire, croissant de lune, lunaison. Ashhurin = de mois (genitif pluriel de shahr). Le shahr est le mois lunaire — defini par la revolution de la lune. Quatre mois lunaires et dix jours est la duree de l'idda de la veuve.\n" +
"\n" +
"La racine **blgh** (ba-lam-ghayn) signifie l'atteinte et le fait de parvenir a un terme. Le Lane's donne : atteindre, parvenir a, arriver a maturite ou a un terme fixe. Balaghna = elles ont atteint (accompli 3FP). Le bulugh est l'arrivee a un seuil fixe — la maturite, le terme, la destination.\n" +
"\n" +
"La racine **ajl** (alif-jim-lam) signifie le terme fixe et le delai. Le Lane's donne : terme fixe, delai defini, echeance. Ajalahunna = leur terme (suffixe feminin pluriel). L'ajal est le terme fixe par Dieu ou la loi — la limite temporelle au-dela de laquelle la situation change.\n" +
"\n" +
"La racine **jnh** (jim-nun-ha) signifie l'inclinaison vers la faute. Le Lane's donne : s'incliner vers ce qui est blamable, penchant vers la faute. Junaha = inclinaison vers la faute. La negation 'la junaha' = pas d'inclinaison, pas de responsabilite morale pour cet acte.\n" +
"\n" +
"La racine **fel** (fa-'ayn-lam) signifie l'action et le faire. Le Lane's donne : faire, agir, accomplir un acte. Fa'alna = elles auront fait/ce qu'elles feront (accompli 3FP). Le fi'l est l'acte en general — l'action accomplie.\n" +
"\n" +
"La racine **erf** ('ayn-ra-fa) signifie ce qui est reconnu et convenable. Le Lane's donne : ce qui est connu socialement comme bien, bienfait, convention etablie. Bi al-ma'rufi = convenablement/selon l'usage reconnu. Le ma'ruf calibre les actions des veuves apres l'expiration du delai.\n" +
"\n" +
"La racine **eml** ('ayn-mim-lam) signifie l'action et l'oeuvre. Le Lane's donne : agir, travailler, faire, oeuvrer. Ta'maluna = vous faites/vous oeuvrez (inaccompli 2MP). Le 'amal est l'acte dans sa dimension morale — l'oeuvre humaine dont on est responsable.\n" +
"\n" +
"§JUSTIFICATION§\n" +
"**Ceux qui decedent** — yutawaffawna : le verbe tawaffa (Form V passif de wfy) exprime la mort comme acte d'etre pris entierement par Dieu. Le choix de ce terme plutot que yamutuna (ils meurent, de mawt) est significatif : la mort est un accomplissement (wafa' = acquittement total) et une reception divine.\n" +
"\n" +
"**et laissent des epouses** — wa yadharna azwajan : yadhar (ils laissent) designe ceux qui sont laisses derrier — les veuves (azwaj). Le verbe tarka (laisser en heritage) serait different ; yadharu (Form I de wdhr) exprime le fait de laisser en abandonnant.\n" +
"\n" +
"**elles observeront un delai par elles-memes** — yatarabbasna bi anfusihinna : le tarabbus (attente deliberee, Form V) bi anfusihinna (par elles-memes, avec leurs ames) souligne que l'observation du delai est personnelle et interieure. La veuve s'astreint elle-meme — c'est son ame (nafs) qui observe le delai.\n" +
"\n" +
"**quatre mois et dix** — arba'ata ashhurin wa 'ashran : le delai est precise numeriquement — quatre mois lunaires (ashhurin, de shhr) et dix jours. Les juristes ont discute pourquoi 'dix jours' en plus des quatre mois — certains y voient le temps de s'assurer de l'absence de grossesse (le foetus se manifeste dans ce delai selon la medecine classique).\n" +
"\n" +
"**lorsqu'elles auront atteint leur terme** — fa idha balaghna ajalahunna : le terme (ajal) est le point fixe a l'horizon du delai. L'atteinte du terme (blgh) liberere la veuve de ses contraintes. L'ajal ici est temporel (fin du delai), comme l'ajal ultime est la mort.\n" +
"\n" +
"**pas d'inclinaison vers la faute pour vous** — la junaha 'alaykum : la formule 'la junaha 'alaykum' (sur vous, les membres de la communaute) plutot que 'alayhinna (sur elles) est significative. Les gardiens et membres de la famille ne sont pas responsables de ce que les veuves feront d'elles-memes. La liberete appartient aux veuves elles-memes.\n" +
"\n" +
"**de ce qu'elles feront convenablement** — fima fa'alna bi al-ma'rufi : les actes (fel) des veuves apres le delai sont libres mais encadres par le ma'ruf (erf). La liberete post-delai n'est pas absolue — elle s'exerce dans les limites du convenable reconnu.\n" +
"\n" +
"**Dieu est Bien Informe** — Allahu bima ta'maluna khabir : l'attribut khabir (Bien Informe, de kbr) clot le verset. Khabir implique la connaissance interieure et des intentions — Dieu sait non seulement ce qui est fait (bsr) mais ce qui est dans les coeurs. Ce choix de khabir (et non basir comme en v.233) souligne que les actes des veuves et les jugements de la communaute incluent une dimension d'intention.\n" +
"\n" +
"§CRITIQUE§\n" +
"Hamidullah traduit 'yutawaffawna' par 'decedent'. La racine wfy (tawaffa) signifie etre pris entierement, s'acquitter pleinement. La mort est exprimee comme un acte divin de reception totale de l'ame — 'etre pris' plutot que 'deceder'. Cette nuance theologique est perdue dans la traduction standard.\n" +
"\n" +
"Hamidullah traduit 'bi anfusihinna' par 'un delai d'attente' (sans rendre bi anfusihinna). L'expression bi anfusihinna (par/avec elles-memes) est significative : elle souligne l'autonomie personnelle de l'observation. 'Par elles-memes' ou 'dans leur propre personne' serait plus fidele.\n" +
"\n" +
"Hamidullah traduit 'khabir' par 'Bien Informe'. Khabir (de kbr) designe celui qui connait par experience directe et profonde — pas seulement celui qui est informe. L'Omniscient Intime serait plus precis. Cependant, 'Bien Informe' est une traduction acceptable et etablie.",
    segments: [
      { fr: "Ceux d'entre vous qui decedent", pos: "verbe", phon: "wa alladhina yutawaffawna minkum", arabic: "وَٱلَّذِينَ يُتَوَفَّوْنَ مِنكُمْ", word_key: "wfy", is_particle: false, sense_retenu: "deces/accomplissement", position: 1 },
      { fr: "et laissent des epouses", is_particle: true, phon: "wa yadharuna azwajan", arabic: "وَيَذَرُونَ أَزْوَٰجًا", position: 2 },
      { fr: "elles observeront un delai d'attente par elles-memes", pos: "verbe", phon: "yatarabbasna bi anfusihinna", arabic: "يَتَرَبَّصْنَ بِأَنفُسِهِنَّ", word_key: "rbs", is_particle: false, sense_retenu: "attente/observation", position: 3 },
      { fr: "de quatre mois et dix [jours]", pos: "nom", phon: "arba'ata ashhurin wa 'ashran", arabic: "أَرْبَعَةَ أَشْهُرٍ وَعَشْرًا", word_key: "shhr", is_particle: false, sense_retenu: "mois/lunaison", position: 4 },
      { fr: "lorsqu'elles auront atteint leur terme", pos: "verbe", phon: "fa idha balaghna ajalahunna", arabic: "فَإِذَا بَلَغْنَ أَجَلَهُنَّ", word_key: "blgh", is_particle: false, sense_retenu: "atteinte/parvention", position: 5 },
      { fr: "pas d'inclinaison vers la faute pour vous", pos: "nom", phon: "fa la junaha 'alaykum", arabic: "فَلَا جُنَاحَ عَلَيْكُمْ", word_key: "jnh", is_particle: false, sense_retenu: "inclinaison/penchant", position: 6 },
      { fr: "dans ce qu'elles feront d'elles-memes convenablement", pos: "verbe", phon: "fima fa'alna fi anfusihinna bi al-ma'rufi", arabic: "فِيمَا فَعَلْنَ فِىٓ أَنفُسِهِنَّ بِٱلْمَعْرُوفِ", word_key: "fel", is_particle: false, sense_retenu: "action/faire", position: 7 },
      { fr: "Et Dieu est Bien Informe de ce que vous faites", pos: "verbe", phon: "wa Allahu bima ta'maluna khabir", arabic: "وَٱللَّهُ بِمَا تَعْمَلُونَ خَبِيرٌ", word_key: "eml", is_particle: false, sense_retenu: "action/oeuvre", position: 8 }
    ],
    vwa: [
      {
        word_key: "wfy",
        position: 2,
        sense_chosen: "deces/accomplissement",
        analysis_axes: {
          sense_chosen: "deces/accomplissement",
          concept_chosen: "Deces/Accomplissement",
          concepts: {
            "Deces/Accomplissement": {
              status: "retenu",
              senses: ["mourir", "deceder", "s'acquitter pleinement", "etre pris en totalite", "tawaffa = etre pris entierement par Dieu"],
              proof_ctx: "La racine w-f-y (waw-fa-ya) signifie l'acquittement total et l'integralite. Le Lane's donne : s'acquitter pleinement d'une obligation, accomplir en entier, payer integralement. Tawaffa (Form V) = etre pris en totalite, etre recueilli integralement — la mort comme acte de reception divine de l'ame. Yutawaffawna = ils sont pris entierement (inaccompli 3MP passif).",
              axe1_verset: "Yutawaffawna (ils sont pris entierement/ils decedent) est le terme choisi pour la mort dans ce verset. Le choix de la racine wfy (accomplissement/integralite) plutot que mwt (mort physique) ou hlk (perissement) est theologique : la mort est exprimee comme un acte de Dieu qui recueille l'ame dans sa totalite. Ce sens est present dans la formule 'tawaffahu Allahu' — Dieu le prit entierement.",
              axe2_voisins: "Le verset 233 traitait du divorce entre vivants ; le verset 234 traite de la separation par la mort. Les deux versets sont complementaires dans la gestion des consequences de la dissolution du mariage : separation par choix (233) ou par mort (234). La racine wfy introduit la dissolution par disparition totale (deces) d'un des epoux.",
              axe3_sourate: "La racine wfy apparait en S.2:234 (deces), S.3:55 (tawaffika = Je vais te recueillir entierement, dit a Jesus), S.6:60 (tawaffakum bil-layl = Il vous recueille la nuit, dans le sommeil). La coherence est forte : tawaffa designe toujours un acte divin de prise integrale — mort, sommeil, ou ascension.",
              axe4_coherence: "La racine wfy apparait environ 40 fois dans le Coran. Le sens d'acquittement/integralite est constant. La distinction entre yutawaffawna (ils sont pris entierement = ils decedent) et yamutuna (ils meurent, de mwt) est theologique : wfy met l'accent sur la reception divine, mwt sur la cessation biologique.",
              axe5_frequence: "L'utilisation de tawaffa pour la mort dans ce verset et dans d'autres contextes coraniques a des implications doctrinales importantes. Elle exprime que la mort n'est pas une destruction mais une reception — Dieu prend l'ame dans sa totalite (wafa'). Cette conception influence le droit successoral : le mari 'pris entierement' laisse ses obligations (obligations envers l'epouse) a accomplir par ses heritiers."
            }
          }
        }
      },
      {
        word_key: "zwj",
        position: 5,
        sense_chosen: "epouse/couple",
        analysis_axes: {
          sense_chosen: "epouse/couple",
          concept_chosen: "Epouse/Couple",
          concepts: {
            "Epouse/Couple": {
              status: "retenu",
              senses: ["epoux", "epouse", "couple", "paire", "partenaire conjugal"],
              proof_ctx: "La racine z-w-j (zay-waw-jim) signifie le couple et la paire. Le Lane's donne : epoux, couple, paire, partenaire conjugal, les deux elements d'une paire. Azwajan = des epouses (accusatif pluriel indefini). Le zawj est fondamentalement la paire — ce qui va par deux. En contexte de mariage, c'est l'epoux ou l'epouse selon le genre du locuteur.",
              axe1_verset: "Yadharna azwajan (ils laissent des epouses) : azwaj (pluriel de zawj) designe ici les epouses laissees par les maris decedes. La mort dissout la paire (zawj = paire) — l'un des deux elements est disparu, l'autre (l'epouse) doit observer l'idda. Le zawj comme paire souligne que la dissolution par la mort laisse l'autre element de la paire dans un etat intermediaire.",
              axe2_voisins: "Le verset 230 utilisait zawjan ghayrihi (un autre epoux) dans le contexte du divorce avec condition de remariage. Ici, azwajan sont les epouses laissees par les defunts. La racine zwj est presente dans toute la section matrimoniale de al-Baqarah (229-237), couvrant toutes les situations : mariage, divorce, deces.",
              axe3_sourate: "La racine zwj est tres frequente dans al-Baqarah. Le zawj est le partenaire conjugal legitime — la paire formee par le mariage. La dissolution du lien conjugal (par divorce ou deces) rompt la paire (zawj) et cree des obligations transitoires pour les deux parties.",
              axe4_coherence: "La racine zwj apparait environ 80 fois dans le Coran. Le sens de couple/paire est constant. Le zawj couvre a la fois l'epoux et l'epouse — c'est la relation de la paire, pas le genre specifique. L'image de la paire (zawj) est fondamentale dans le Coran : les etres viennent en paires, le mariage est la constitution d'une paire.",
              axe5_frequence: "L'expression 'yadharna azwajan' (ils laissent des epouses) etablit que ce verset concerne specifiquement les maris decedes. Le verset est silencieux sur le cas inverse (femme decedee, mari veuf) — la jurisprudence islamique a etendu le principe mais avec des differences pratiques dues aux asymetries juridiques du mariage."
            }
          }
        }
      },
      {
        word_key: "rbs",
        position: 6,
        sense_chosen: "attente/observation",
        analysis_axes: {
          sense_chosen: "attente/observation",
          concept_chosen: "Attente/Observation",
          concepts: {
            "Attente/Observation": {
              status: "retenu",
              senses: ["attendre", "observer un delai", "s'abstenir pendant une periode", "delai d'observation"],
              proof_ctx: "La racine r-b-s (ra-ba-sad) signifie l'attente active et l'observation d'un delai. Le Lane's donne : attendre en s'abstenant, observer un delai, demeurer dans un etat d'attente delibere. Yatarabbasna = elles observeront/s'astreindront a un delai d'attente (inaccompli 3FP). La Form V (tarabbus) exprime l'effort de l'attente — s'astreindre deliberement a rester dans un etat d'attente.",
              axe1_verset: "Yatarabbasna bi anfusihinna (elles observeront un delai par elles-memes/avec leurs ames) : le tarabbus est une action deliberee (Form V) realisee bi anfusihinna (dans leur propre personne). L'idda de la veuve est un acte d'observation personnelle et interieure — chaque veuve s'astreint elle-meme a ce delai.",
              axe2_voisins: "La racine rbs apparait dans le Coran pour des situations d'attente deliberee : S.9:52 (yatarabbasuna = ils attendent), S.9:106 (murjawna li amri Allahi), S.2:234 (yatarabbasna). L'attente (tarabbus) est toujours deliberee et active — pas une attente passive mais un etat assume.",
              axe3_sourate: "La racine rbs n'apparait qu'une fois dans al-Baqarah (v.234). L'idda (delai d'attente) de la veuve est la manifestation principale du concept dans ce contexte. Le tarabbus (attente deliberee) de la veuve est une discipline personnelle imposee par la loi divine.",
              axe4_coherence: "La racine rbs apparait environ 10 fois dans le Coran. Le sens d'attente deliberee est constant. Le tarabbus (Form V) est toujours une attente active, consciente et assumee — s'astreindre a demeurer dans un etat d'attente jusqu'a un terme fixe.",
              axe5_frequence: "Le tarabbus de la veuve (yatarabbasna) pendant quatre mois et dix jours a plusieurs fonctions selon la jurisprudence : verifier l'absence de grossesse (istibra'), respecter un delai de deuil, et proteger les droits successoraux potentiels. L'observation bi anfusihinna (par elles-memes) souligne que c'est la veuve qui est l'actrice de ce delai, non un tuteur."
            }
          }
        }
      },
      {
        word_key: "nfs",
        position: 8,
        sense_chosen: "ame/personne",
        analysis_axes: {
          sense_chosen: "ame/personne",
          concept_chosen: "Ame/Personne",
          concepts: {
            "Ame/Personne": {
              status: "retenu",
              senses: ["ame", "soi", "personne", "etre vivant", "identite propre"],
              proof_ctx: "La racine n-f-s (nun-fa-sin) signifie l'ame et la personne individuee. Le Lane's donne : ame, souffle vital, soi, personne, etre vivant dans son individualite propre. Anfusihinna = leurs ames/elles-memes (masculin/feminin pluriel avec suffixe feminin pluriel). Bi anfusihinna = par/avec elles-memes, dans leur propre personne.",
              axe1_verset: "Yatarabbasna bi anfusihinna (elles observeront le delai par elles-memes) : la preposition bi + anfus exprime que l'observation est personnelle et interieure — c'est dans leur propre etre (nafs) que les veuves s'astreignent. Plus loin, fi anfusihinna (dans elles-memes, pos=23) repete l'idee pour les actes post-delai : ce qu'elles feront dans leur propre personne.",
              axe2_voisins: "Le verset 233 utilisait nafsun (une ame indefinie) pour le principe de capacite. Le verset 234 utilise anfusihinna (leurs ames/elles-memes) pour souligner l'autonomie personnelle des veuves dans l'observation du delai. La nafs est le sujet autonome — la personne responsable de ses propres actes.",
              axe3_sourate: "La racine nfs est l'une des plus frequentes dans al-Baqarah. La nafs est le sujet moral fondamental : croyant (2:48, 54), responsable (2:233, 286), libre dans son agentivite (2:234). Bi anfusihinna et fi anfusihinna dans le verset 234 soulignent l'autonomie des veuves — leur ame/personne est le lieu de l'observation et de la liberte.",
              axe4_coherence: "La racine nfs apparait plus de 280 fois dans le Coran. La nafs est le sujet moral par excellence. Anfusihinna (leurs ames/elles-memes) exprime l'autonomie personnelle des veuves : c'est en elles-memes, dans leur propre personne, qu'elles observent le delai et retrouvent leur liberte apres.",
              axe5_frequence: "La repetition de anfusihinna (deux fois dans le meme verset : bi anfusihinna et fi anfusihinna) est significative. Elle souligne que l'idda de la veuve est une discipline personnelle interieure, et que la liberte retrouvee apres l'idda s'exerce dans sa propre personne. Cette autonomie est reconnue juridiquement : la veuve decide elle-meme de son remariage apres l'idda."
            }
          }
        }
      },
      {
        word_key: "shhr",
        position: 10,
        sense_chosen: "mois/lunaison",
        analysis_axes: {
          sense_chosen: "mois/lunaison",
          concept_chosen: "Mois/Lunaison",
          concepts: {
            "Mois/Lunaison": {
              status: "retenu",
              senses: ["mois lunaire", "croissant de lune", "lunaison", "periode lunaire"],
              proof_ctx: "La racine sh-h-r (shin-ha-ra) signifie le mois lunaire et le croissant. Le Lane's donne : mois lunaire, la lunaison, le croissant de lune (shu'ra = etre celebre/visible, d'ou shahr = la lune visible/le mois). Ashhurin = de mois (genitif pluriel indefini de shahr). Le shahr est le mois lunaire — defini par la revolution de la lune et la visibilite du croissant.",
              axe1_verset: "Arba'ata ashhurin wa 'ashran (quatre mois et dix) : le delai de l'idda de la veuve est exprime en mois lunaires (ashhurin, de shhr) et en jours supplementaires ('ashran = dix). Les quatre mois lunaires correspondent a environ 118 jours, plus dix = environ 128 jours. La jurisprudence islamique a discute de la signification des dix jours ajoutés.",
              axe2_voisins: "Les periodes dans le Coran sont souvent calculees en mois (shahr) lunaires : S.2:185 (Ramadan = mois du jeune), S.2:217 (al-shahr al-haram = le mois sacre), S.2:234 (quatre mois d'idda). Le calendrier coranique est lunaire — base sur la revolution de la lune et la visibilite du croissant.",
              axe3_sourate: "La racine shhr est frequente dans al-Baqarah, notamment dans les versets sur le Ramadan (185), les mois sacres (194, 197, 217) et les periodes d'idda (234). Le mois lunaire est l'unite de mesure temporelle de reference dans al-Baqarah.",
              axe4_coherence: "La racine shhr apparait environ 30 fois dans le Coran. Le sens de mois lunaire est constant. Le shahr est toujours le mois defini par le croissant de lune (hilal) — un temps cyclique et observable, distinct de la sana (annee) et du hawl (cycle). Les quatre mois et dix de l'idda de la veuve sont quatre lunaisons completes plus dix jours.",
              axe5_frequence: "La precision 'arba'ata ashhurin wa 'ashran' (quatre mois et dix) pour l'idda de la veuve est plus longue que l'idda de la divorces (trois periodes menstruelles ou trois mois selon les ecoles). Les juristes ont explique l'allongement par : 1) honorer la memoire du defunt, 2) verifier l'absence de grossesse, 3) respecter les droits successoraux. Les dix jours supplementaires ont ete interpretes comme une precaution pour la detection d'une grossesse potentielle."
            }
          }
        }
      },
      {
        word_key: "blgh",
        position: 15,
        sense_chosen: "atteinte/parvention",
        analysis_axes: {
          sense_chosen: "atteinte/parvention",
          concept_chosen: "Atteinte/Parvention",
          concepts: {
            "Atteinte/Parvention": {
              status: "retenu",
              senses: ["atteindre", "parvenir a", "arriver a maturite", "arriver au terme", "reaching a limit"],
              proof_ctx: "La racine b-l-gh (ba-lam-ghayn) signifie l'atteinte et le fait de parvenir a un seuil. Le Lane's donne : atteindre, parvenir a, arriver a un but, arriver a maturite ou a un terme fixe. Balaghna = elles ont atteint (accompli 3FP). Le bulugh est l'arrivee au seuil fixe — la maturite pubertaire, le terme d'un delai, la destination d'un voyage.",
              axe1_verset: "Fa idha balaghna ajalahunna (lorsqu'elles auront atteint leur terme) : le bulugh (atteinte) de l'ajal (terme fixe) est le point de liberation de la veuve. Quand le terme est atteint (balaghna ajalahunna), les restrictions de l'idda cessent et la liberte d'action est retablie. L'atteinte (blgh) est le seuil de passage.",
              axe2_voisins: "Le verset 232 utilisait 'balaghna ajalahunna' egalement — le meme syntagme pour les divorcees. La coherence est forte : l'atteinte (blgh) du terme (ajal) est la formule standard de liberation des contraintes de l'idda, que ce soit pour les divorcees (232) ou les veuves (234).",
              axe3_sourate: "La racine blgh apparait en S.2:232, 234, 235 pour l'atteinte du terme de l'idda. En S.6:153 et S.2:232, le bulugh al-nikah (maturite pour le mariage) est une autre application. L'atteinte d'un seuil (blgh) est un marqueur juridique important dans al-Baqarah.",
              axe4_coherence: "La racine blgh apparait environ 70 fois dans le Coran. Le sens d'atteinte d'un seuil ou d'un terme est constant. Le bulugh couvre : la maturite pubertaire (bulugh), l'arrivee a destination, l'atteinte du terme d'un delai. Dans tous les cas, c'est le passage d'un seuil fixe qui change un statut juridique.",
              axe5_frequence: "La formule 'fa idha balaghna ajalahunna' (lorsqu'elles auront atteint leur terme) est une formule de transition juridique : quand le terme est atteint, la situation change. En droit islamique, le bulugh al-ajal (atteinte du terme) est un evenement juridique precis qui fait cesser les interdictions et ouvre de nouveaux droits."
            }
          }
        }
      },
      {
        word_key: "ajl",
        position: 16,
        sense_chosen: "terme/delai",
        analysis_axes: {
          sense_chosen: "terme/delai",
          concept_chosen: "Terme/Delai",
          concepts: {
            "Terme/Delai": {
              status: "retenu",
              senses: ["terme fixe", "delai defini", "echeance", "limite temporelle", "ajal = la mort comme terme fixe"],
              proof_ctx: "La racine '-j-l (alif-jim-lam) signifie le terme fixe et le delai. Le Lane's donne : terme fixe, delai defini, echeance, le moment fixe par Dieu. Ajalahunna = leur terme (suffixe feminin pluriel). L'ajal est la limite temporelle au-dela de laquelle une situation change — c'est Dieu ou la loi qui fixe le terme.",
              axe1_verset: "Balaghna ajalahunna (elles ont atteint leur terme) : l'ajal de la veuve est la fin du delai de quatre mois et dix jours. L'atteinte de cet ajal libere la veuve de ses contraintes. L'ajal est le seuil temporel fixe — avant le terme, les restrictions s'appliquent ; apres, la liberte est retablie.",
              axe2_voisins: "L'ajal dans le Coran a deux sens principaux liés : 1) le terme temporel d'un delai (idda, contrat, pret) ; 2) le terme ultime de la vie humaine (la mort). Dans le verset 234, les deux sens se croisent : l'ajal de l'idda (terme du delai) succede a l'ajal de la vie du mari (sa mort). La veuve passe d'un ajal a l'autre.",
              axe3_sourate: "La racine ajl est frequente dans al-Baqarah : S.2:231, 232, 234, 235, 282. L'ajal structure les droits et obligations temporels : terme des delais, terme des contrats, terme de la vie. Dans les versets du divorce et du deces, l'ajal est toujours le terme du delai d'idda.",
              axe4_coherence: "La racine ajl apparait environ 60 fois dans le Coran. Le sens de terme fixe est constant. L'ajal est toujours un terme fixe par une autorite superieure — Dieu fixe l'ajal de la vie (terme ultime), la loi divine fixe l'ajal de l'idda (terme transitoire). Les deux sens se renforcent mutuellement.",
              axe5_frequence: "Le syntagme 'balaghna ajalahunna' (elles ont atteint leur terme) est une formule juridique standard dans les versets sur l'idda. Ce terme fixe (ajal) est la frontiere entre deux statuts : pendant l'idda (contraintes), apres l'ajal (liberte encadree). La fixite du terme protege la femme en limitant la duree des restrictions."
            }
          }
        }
      },
      {
        word_key: "jnh",
        position: 18,
        sense_chosen: "inclinaison/penchant",
        analysis_axes: {
          sense_chosen: "inclinaison/penchant",
          concept_chosen: "Inclinaison/Penchant",
          concepts: {
            "Inclinaison/Penchant": {
              status: "retenu",
              senses: ["penchant vers la faute", "inclination blamable", "responsabilite morale de pencher", "tendance condamnable"],
              proof_ctx: "La racine j-n-h (jim-nun-ha) signifie l'inclinaison et le penchant vers ce qui est blamable. Le Lane's donne : s'incliner vers ce qui est blamable, penchant vers la faute, tendance condamnable. Junaha = inclinaison vers la faute. La negation 'la junaha 'alaykum' = pas d'inclinaison sur vous, pas de responsabilite pour vous.",
              axe1_verset: "Fa la junaha 'alaykum (pas d'inclinaison vers la faute pour vous) : la formule est adressée aux hommes de la communaute ('alaykum = sur vous, masculin pluriel). Quand le terme de l'idda est atteint, les guardiens et membres de la famille n'ont pas a s'inquieter de responsabilite morale pour les decisions de la veuve. Sa liberte d'action est retablie.",
              axe2_voisins: "La racine jnh apparait en S.2:229, 230, 233 (deux fois), 234, 235. La formule 'la junaha' est recurrente dans la section matrimoniale de al-Baqarah. Elle delimite les zones de liberte et assure les acteurs qu'ils ne commettent pas de faute s'ils agissent dans les conditions posees.",
              axe3_sourate: "La 'la junaha' de ce verset (234) s'adresse a 'alaykum (vous, communaute) et non a 'alayhinna (elles, les veuves). Cette difference est significative : la communaute (gardiens, famille, pretendants potentiels) est liberee de toute responsabilite pour les actes de la veuve apres l'idda. La veuve decide pour elle-meme.",
              axe4_coherence: "La racine jnh apparait environ 20 fois dans le Coran. La formule 'la junaha' est une formule juridique de licite conditionnelle : l'acte ne cree pas de responsabilite penale/morale si les conditions sont remplies. La junah est la responsabilite qui decoule d'un penchant vers le blamable.",
              axe5_frequence: "L'adressage de 'la junaha 'alaykum' (sur vous, pas sur elles) est significatif : les hommes de la communaute sont souvent les gardiens (awliya') des femmes en droit islamique classique. Le Coran les libere de toute responsabilite pour les choix post-idda de la veuve. Cette formule affirme l'autonomie de la veuve dans ses decisions une fois le terme atteint."
            }
          }
        }
      },
      {
        word_key: "fel",
        position: 21,
        sense_chosen: "action/faire",
        analysis_axes: {
          sense_chosen: "action/faire",
          concept_chosen: "Action/Faire",
          concepts: {
            "Action/Faire": {
              status: "retenu",
              senses: ["faire", "agir", "accomplir un acte", "action accomplie", "fi'l = l'acte"],
              proof_ctx: "La racine f-'-l (fa-'ayn-lam) signifie l'action et le faire. Le Lane's donne : faire, agir, accomplir un acte, le fi'l = l'acte accompli. Fa'alna = elles auront fait/feront (accompli 3FP a valeur de futur anterieur). Le fi'l est l'acte en general — toute action accomplie par un sujet.",
              axe1_verset: "Fima fa'alna fi anfusihinna bi al-ma'rufi (dans ce qu'elles feront d'elles-memes convenablement) : le fa'alna (elles feront) est l'acte des veuves apres l'idda. La liberte d'action (fel) est retablie mais encadree bi al-ma'rufi (selon le convenable). L'acte (fi'l) des veuves post-idda est libre dans les limites du ma'ruf.",
              axe2_voisins: "La racine fel est tres generique — elle designe tout acte accompli. Elle est souvent utilisee dans les formules 'bima ta'maluna/ta'fa'aluna' (ce que vous faites). Ici, fa'alna (ce qu'elles feront) designe specifiquement les choix post-idda des veuves : remariage potentiel, gestion de leur vie.",
              axe3_sourate: "La racine fel apparait de nombreuses fois dans al-Baqarah. Le fi'l (acte) est la categorie generique de l'action humaine — distincte de l'amal (oeuvre morale) et du qawl (parole). Fima fa'alna introduit une clause de liberte generale : tout ce qu'elles feront (sans specification) est libre sous condition du ma'ruf.",
              axe4_coherence: "La racine fel apparait environ 100 fois dans le Coran. Le sens d'action/faire est constant. La distinction entre fi'l (acte concret) et 'amal (oeuvre avec dimension morale) est presente dans le Coran : le fi'l est plus neutre, l'amal porte une dimension d'evaluation morale.",
              axe5_frequence: "La formule 'fima fa'alna fi anfusihinna bi al-ma'rufi' (dans ce qu'elles feront d'elles-memes convenablement) est une clause de liberte generale. Elle couvre potentiellement toutes les decisions post-idda : remariage, sortie du deuil, reprise de la vie sociale. La seule condition est le ma'ruf (convenable reconnu). Cette generalite est interpretee comme une protection de l'autonomie de la veuve."
            }
          }
        }
      },
      {
        word_key: "erf",
        position: 24,
        sense_chosen: "convention/bienfait",
        analysis_axes: {
          sense_chosen: "convention/bienfait",
          concept_chosen: "Convention/Bienfait",
          concepts: {
            "Convention/Bienfait": {
              status: "retenu",
              senses: ["ce qui est connu/reconnu", "bienfait", "convention sociale", "ce qui est convenable", "usage etabli"],
              proof_ctx: "La racine '-r-f ('ayn-ra-fa) signifie ce qui est connu et reconnu comme bien. Le Lane's donne : connaitre, reconnaitre, ce qui est socialement connu comme bien, bienfait, convention sociale etablie, usage reconnu. Al-ma'rufi = le convenable/l'usage reconnu. Bi al-ma'rufi = selon l'usage reconnu/convenablement.",
              axe1_verset: "Bi al-ma'rufi (convenablement/selon l'usage reconnu) qualifie les actes des veuves apres l'idda. La liberte retrouvee (la junaha 'alaykum fima fa'alna) s'exerce bi al-ma'rufi — dans le cadre de ce que la communaute reconnait comme convenable. Le ma'ruf est la norme sociale positive qui calibre la liberte.",
              axe2_voisins: "Le ma'ruf est le fil conducteur ethique de toute la section matrimoniale (229-237). Il apparait en S.2:229, 231, 232, 233 (deux fois), 234. Le ma'ruf est la norme objective qui encadre les comportements dans les situations post-conjugales : il assure que la liberte n'est pas license.",
              axe3_sourate: "La racine erf et le terme ma'ruf sont parmi les plus frequents dans al-Baqarah. Le ma'ruf est la norme sociale positive — ce que la communaute reconnait comme bon et convenable. Il est adaptatif : le ma'ruf peut varier selon les contextes sociaux, mais exprime toujours la norme positive reconnue.",
              axe4_coherence: "La racine erf apparait environ 70 fois dans le Coran. Le ma'ruf est un concept ethico-social fondamental dans l'islam. Il s'oppose au munkar (ce qui est desavoue). Dans le contexte de l'idda, bi al-ma'rufi assure que les comportements post-delai restent dans les normes reconnues de la communaute croyante.",
              axe5_frequence: "L'encadrement des actes post-idda par bi al-ma'rufi est sophistique : il ne liste pas d'interdictions specifiques mais renvoie a la norme sociale reconnue. Cette approche est adaptable aux contextes : ce qui est ma'ruf peut evoluer, mais la reference a la norme communautaire positive reste la boussole. Les juristes ont precise les applications concretes (tenue vestimentaire, sorties, attitude de deuil) en fonction de leur interpretation du ma'ruf."
            }
          }
        }
      },
      {
        word_key: "eml",
        position: 29,
        sense_chosen: "action/oeuvre",
        analysis_axes: {
          sense_chosen: "action/oeuvre",
          concept_chosen: "Action/Oeuvre",
          concepts: {
            "Action/Oeuvre": {
              status: "retenu",
              senses: ["agir", "travailler", "faire", "oeuvrer", "l'acte humain dans sa dimension morale"],
              proof_ctx: "La racine '-m-l ('ayn-mim-lam) signifie l'action dans sa dimension morale. Le Lane's donne : agir, travailler, faire, oeuvrer, le 'amal = l'oeuvre humaine avec sa dimension morale. Ta'maluna = vous faites/vous oeuvrez (inaccompli 2MP). Le 'amal est l'acte dans sa valeur morale et spirituelle — ce dont on sera juge.",
              axe1_verset: "Wa Allahu bima ta'maluna khabir (Dieu est Bien Informe de ce que vous oeuvrez/faites) : ta'maluna (vous oeuvrez) est adresse a la communaute (2MP) qui observe et juge les comportements des veuves. La formule de cloture rappelle que Dieu est Bien Informe (khabir) de tous les actes — y compris les jugements, regards et comportements des membres de la communaute envers les veuves.",
              axe2_voisins: "Le verset 233 se clotait avec 'bima ta'maluna basir' (Temoin de ce que vous faites). Le verset 234 se clot avec 'bima ta'maluna khabir' (Bien Informe de ce que vous faites). La difference entre basir (vision externe) et khabir (information interne/intentions) est significative : le verset 234 concerne les intentions de la communaute envers les veuves.",
              axe3_sourate: "La racine eml est tres frequente dans al-Baqarah dans les formules de cloture : 'bima ta'maluna/ya'maluna [attribut divin]'. Ces formules de cloture rappellent que tous les actes sont connus de Dieu et qu'Il en rendra compte. L'amal (oeuvre) est plus charge moralement que le fi'l (acte concret).",
              axe4_coherence: "La racine eml apparait plus de 350 fois dans le Coran. Le 'amal est l'oeuvre humaine dans sa dimension morale — c'est ce qui sera pese au Jour du Jugement. La distinction entre 'amal (oeuvre morale) et fi'l (acte concret) est presente : le fi'l (fa'alna, dans le meme verset) designe les actes des veuves ; le 'amal (ta'maluna) designe les oeuvres morales de la communaute.",
              axe5_frequence: "L'utilisation de ta'maluna (vous oeuvrez) pour la communaute et fa'alna (elles feront) pour les veuves dans le meme verset est significative. Les actes des veuves (fel) sont libres post-idda ; les oeuvres morales de la communaute ('aml) vis-a-vis des veuves sont sous le regard de Dieu qui est Bien Informe (khabir). Cette formule protege les veuves contre les jugements injustes et les pressions sociales."
            }
          }
        }
      }
    ],
    daily_phrases: []
  }
};

async function main() {
  const data = verseData[234];
  const { error: veErr } = await supabase.from('verse_analyses').update({
    translation_arab: data.translation_arab,
    full_translation: data.full_translation,
    translation_explanation: data.translation_explanation,
    segments: data.segments
  }).eq('id', data.analysis_id);
  if (veErr) { console.error('verse_analyses ERROR:', veErr.message); return; }
  console.log('verse_analyses updated (V234)');
  for (const word of data.vwa) {
    const { error: vwaErr } = await supabase.from('verse_word_analyses').insert({
      verse_id: data.verse_id,
      word_key: word.word_key,
      position: word.position,
      sense_chosen: word.sense_chosen,
      analysis_axes: word.analysis_axes
    });
    if (vwaErr) console.error('VWA ERROR ' + word.word_key + ':', vwaErr.message);
    else console.log('  VWA OK: ' + word.word_key + ' pos=' + word.position + ' -> ' + word.sense_chosen);
  }
  console.log('\n' + String.fromCodePoint(0x2705) + ' V234 TERMINE');
}
main().catch(console.error);
