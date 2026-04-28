const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// =====================================================
// PIPELINE SOURATE 2 — AL-BAQARAH — VERSETS 85 A 87
// verse_id=92 (2:85), verse_id=93 (2:86), verse_id=94 (2:87)
// =====================================================
// CRITICAL: concept names and senses are read from concepts JSON (s2_v81-90_concepts.json)
// =====================================================

const verseData = {

  // =====================================================
  // VERSET 2:85
  // verse_id=92, analysis_id=452
  // "Puis c'est vous qui vous entretuez, et vous expulsez un groupe des
  //  votres de leurs demeures, vous vous soutenez mutuellement contre eux
  //  par le peche et l'agression. Et s'ils viennent a vous en captifs,
  //  vous les ranconnez — alors que leur expulsion vous etait interdite.
  //  Croyez-vous donc en une partie du Livre et rejetez-vous le reste ?
  //  La retribution de ceux d'entre vous qui font cela n'est que l'humiliation
  //  dans la vie d'ici-bas, et le Jour de la Resurrection ils seront
  //  renvoyes au plus dur chatiment. Et Dieu n'est pas insouciant
  //  de ce que vous faites."
  // =====================================================
  85: {
    verse_id: 92,
    analysis_id: 452,
    translation_arab: "Puis c'est vous qui vous entretuez, vous expulsez un groupe d'entre vous de leurs demeures, vous vous soutenez mutuellement contre eux par le peche et l'agression. Et s'ils viennent a vous en captifs, vous les ranconnez — alors que leur expulsion vous etait interdite. Croyez-vous donc en une partie du Livre et rejetez-vous le reste ? La retribution de ceux d'entre vous qui font cela n'est que l'humiliation dans la vie d'ici-bas, et le Jour de la Resurrection ils seront renvoyes au plus dur chatiment. Et Dieu n'est pas insouciant de ce que vous faites.",
    full_translation: "Puis c'est vous qui vous entretuez, vous expulsez un groupe d'entre vous de leurs demeures, vous vous soutenez mutuellement contre eux par le peche et l'agression. Et s'ils viennent a vous en captifs, vous les ranconnez — alors que leur expulsion vous etait interdite. Croyez-vous donc en une partie du Livre et rejetez-vous le reste ? La retribution de ceux d'entre vous qui font cela n'est que l'humiliation dans la vie d'ici-bas, et le Jour de la Resurrection ils seront renvoyes au plus dur chatiment. Et Dieu n'est pas insouciant de ce que vous faites.",
    translation_explanation: `§DEMARCHE§
Ce verset est le plus long de ce passage. Il denonce les contradictions des enfants d'Israel qui appliquent certaines lois du Livre tout en en violant d'autres. Le verbe **taqtuluuna** est un inaccompli 2MP de la racine q-t-l. Le Lane's donne « you kill, you slay one another ». L'inaccompli exprime une action repetee — ils tuent les leurs de maniere habituelle. Le mot **anfusakum** est un nom feminin pluriel avec pronom 2MP de la racine n-f-s. Le Lane's donne « yourselves, your own people ». Le pronom possessif montre qu'ils tuent les leurs, pas des etrangers. Le verbe **tukhrijuuna** est un inaccompli 2MP forme IV de la racine kh-r-j. Le Lane's donne « you expel, you drive out ». La forme IV (if'al) est causative — faire sortir, expulser. Le mot **fariiqan** est un nom masculin singulier accusatif indefini de la racine f-r-q. Le Lane's donne « a group, a party, a section ». Le groupe designe une partie du peuple. Le mot **diyaarihim** est un nom feminin pluriel avec pronom 3MP de la racine d-w-r. Le Lane's donne « their homes, their abodes, their dwellings ». Les demeures sont le lieu de vie dont ils sont expulses. Le verbe **tazaaharuuna** est un inaccompli 2MP forme VI de la racine z-h-r. Le Lane's donne « you support one another, you help one another against them ». La forme VI (tafa'ul) exprime la reciprocite — ils se soutiennent mutuellement. Le mot **al-ithmi** est un nom masculin singulier genitif defini de la racine a-th-m. Le Lane's donne « sin, transgression, wrongdoing ». Le peche est un acte qui merite la sanction. Le mot **usaaraa** est un nom masculin pluriel de la racine a-s-r. Le Lane's donne « captives, prisoners ». Les captifs sont ceux qui sont pris en captivite. Le verbe **tufaaduuhum** est un inaccompli 2MP forme III de la racine f-d-y. Le Lane's donne « you ransom them, you pay their ransom ». La forme III (mufa'ala) implique la reciprocite — l'echange. Le mot **muharramun** est un participe passif forme II de la racine h-r-m. Le Lane's donne « forbidden, prohibited, made unlawful ». Le passif indique que l'interdiction vient de Dieu. Le verbe **tu'minuuna** est un inaccompli 2MP forme IV de la racine a-m-n. Le Lane's donne « you believe ». La question rhetorique reproche la croyance partielle. Le mot **ba'di** est un nom masculin de la racine b-'-d. Le Lane's donne « some, a part, a portion ». Le mot **al-kitaabi** est un nom masculin genitif defini de la racine k-t-b. Le Lane's donne « the Book, the Scripture ». Le Livre designe la Torah. Le verbe **takfuruuna** est un inaccompli 2MP de la racine k-f-r. Le Lane's donne « you disbelieve, you reject, you deny ». Ils rejettent une partie du Livre. Le mot **jazaa'u** est un nom masculin nominatif de la racine j-z-y. Le Lane's donne « retribution, recompense, reward ». La retribution est la consequence de leurs actes. Le verbe **yaf'alu** est un inaccompli 3MS de la racine f-'-l. Le Lane's donne « he does, he acts ». Le mot **khizyun** est un nom masculin nominatif indefini de la racine kh-z-y. Le Lane's donne « disgrace, ignominy, humiliation ». L'humiliation est la consequence dans cette vie. Le mot **al-hayaati** est un nom feminin genitif defini de la racine h-y-y. Le Lane's donne « life, the life ». Le mot **al-dunyaa** est un adjectif feminin genitif defini de la racine d-n-w. Le Lane's donne « the nearest, the lower, worldly life ». La vie d'ici-bas. Le mot **yawma** est un nom de la racine y-w-m. Le Lane's donne « day ». Le Jour de la Resurrection. Le mot **al-qiyaamati** est un nom feminin genitif defini de la racine q-w-m. Le Lane's donne « the Resurrection, the standing up ». Le Jour ou tous se leveront. Le verbe **yuradduuna** est un inaccompli passif 3MP de la racine r-d-d. Le Lane's donne « they will be returned, they will be sent back ». Le passif indique une action divine. Le mot **ghafilin** est un participe actif masculin singulier de la racine gh-f-l. Le Lane's donne « heedless, negligent, unaware ». La negation (ma Allahu bi-ghafilin) affirme que Dieu n'est pas insouciant. Le verbe **ta'maluuna** est un inaccompli 2MP de la racine '-m-l. Le Lane's donne « you do, you work, you act ». Les actes du peuple sont sous le regard de Dieu.

§JUSTIFICATION§
**vous entretuez** — Le sens retenu est « tuer ». Le verbe taqtuluuna designe le meurtre entre membres du meme peuple. L'alternative « combattre » est ecartee car le contexte est le meurtre interne, pas la guerre.

**vos ames** — Le sens retenu est « personne ». Le mot anfusakum designe les membres de leur propre communaute. L'alternative « souffle » est ecartee car le pronom possessif 2MP indique « vos propres gens ».

**expulsez** — Le sens retenu est « expulser ». Le verbe tukhrijuuna forme IV signifie faire sortir de force. L'alternative « revenu » est ecartee car le verbe est a la forme IV causative.

**un groupe** — Le sens retenu est « séparer ». Le mot fariiqan designe un groupe separe du reste. L'alternative « diviser » est ecartee car fariiq est ici un nom (un groupe), pas un verbe.

**demeures** — Le sens retenu est « demeure ». Le mot diyaarihim designe les habitations. L'alternative « tourner » est ecartee car le nom au pluriel designe les maisons.

**vous soutenez mutuellement** — Le sens retenu est « manifeste ». Le verbe tazaaharuuna forme VI signifie se soutenir mutuellement, se manifester l'un pour l'autre. L'alternative « dos » est ecartee car la forme VI exprime la reciprocite dans le soutien.

**le peche** — Le sens retenu est « péché (ithm) ». Le mot al-ithmi designe la transgression. L'alternative « retard » est ecartee car le contexte est celui de la faute morale.

**captifs** — Le sens retenu est « captif ». Le mot usaaraa designe les prisonniers de guerre. Pas d'alternative pertinente dans ce contexte.

**vous les ranconnez** — Le sens retenu est « rançon ». Le verbe tufaaduuhum forme III signifie payer la rancon pour les liberer. L'alternative « sacrifice » est ecartee car le contexte est l'echange d'argent contre des captifs.

**interdit** — Le sens retenu est « interdire ». Le participe muharramun signifie rendu illicite par Dieu. L'alternative « sacre » est ecartee car le passif forme II designe l'interdiction.

**croyez** — Le sens retenu est « croire ». Le verbe tu'minuuna forme IV signifie avoir la foi. L'alternative « securite » est ecartee car la question porte sur la croyance.

**une partie** — Le sens retenu est « une partie ». Le mot ba'di designe une portion. Pas d'alternative pertinente.

**le Livre** — Le sens retenu est « livre ». Le mot al-kitaabi designe la Torah revelee. L'alternative « prescrire » est ecartee car le nom defini designe l'ouvrage revele.

**rejetez** — Le sens retenu est « couvrir ». Le verbe takfuruuna signifie rejeter, nier. Le sens de couverture est etymologique — couvrir la verite. L'alternative « expier » est ecartee car le contexte est le rejet.

**retribution** — Le sens retenu est « rétribuer ». Le mot jazaa'u designe la consequence, la retribution. L'alternative « suffire » est ecartee car le contexte est la sanction.

**fait** — Le sens retenu est « faire ». Le verbe yaf'alu est le verbe general de l'action. Pas d'alternative pertinente.

**humiliation** — Le sens retenu est « honte ». Le mot khizyun designe l'humiliation publique. Pas d'alternative pertinente.

**la vie** — Le sens retenu est « vie ». Le mot al-hayaati designe l'existence terrestre. L'alternative « serpent » est ecartee car le contexte est la vie mondaine.

**d'ici-bas** — Le sens retenu est « ici-bas ». Le mot al-dunyaa designe ce monde. L'alternative « approcher » est ecartee car l'adjectif substantive designe le monde terrestre.

**le Jour** — Le sens retenu est « jour ». Le mot yawma designe un temps defini. L'alternative « evenement » est ecartee car le mot designe le Jour du Jugement.

**de la Resurrection** — Le sens retenu est « peuple ». Le mot al-qiyaamati de la racine q-w-m designe l'acte de se lever. En contexte coranique, c'est le Jour ou tous se dresseront. L'alternative « gerer » est ecartee car le nom designe l'evenement eschatologique.

**renvoyes** — Le sens retenu est « renvoyer ». Le verbe yuradduuna au passif signifie etre renvoye vers le chatiment. L'alternative « rejeter » est ecartee car le passif designe le retour force.

**insouciant** — Le sens retenu est « négliger ». Le participe ghafilin designe celui qui ne fait pas attention. La negation affirme la vigilance divine.

**vous faites** — Le sens retenu est « agir ». Le verbe ta'maluuna designe les oeuvres et actes. L'alternative « gouverneur » est ecartee car le verbe designe l'action.

§CRITIQUE§
**croire en une partie et rejeter le reste** — La question rhetorique « Croyez-vous en une partie du Livre et rejetez-vous le reste ? » denonce la pratique de la croyance selective. Les enfants d'Israel appliquent la loi du rachat des captifs mais violent l'interdiction de l'expulsion et du meurtre. Ce comportement contradictoire revele une obéissance partielle qui equivaut a la desobeissance.
**le meurtre entre soi** — Le verbe taqtuluuna anfusakum (vous tuez vos propres gens) est une accusation grave. Le pronom possessif montre que la violence est interne a la communaute. La destruction de l'interieur est pire que l'agression exterieure.
**l'humiliation comme retribution** — Le mot khizyun (humiliation) est la consequence dans cette vie, avant meme le chatiment de l'au-dela. La double punition (ici-bas et au-dela) souligne la gravite de la croyance selective.`,
    segments: [
      { fr: "puis", phon: "thumma", arabic: "ثُمَّ", is_particle: true, position: 0 },
      { fr: "vous", phon: "antum", arabic: "أَنتُمْ", is_particle: true, position: 1 },
      { fr: "ceux-la", phon: "haa'ulaa'i", arabic: "هَٰٓؤُلَآءِ", is_particle: true, position: 2 },
      { fr: "vous entretuez", pos: "verbe", phon: "taqtuluuna", arabic: "تَقْتُلُونَ", word_key: "qtl", is_particle: false, sense_retenu: "tuer", position: 3 },
      { fr: "vos ames", pos: "nom", phon: "anfusakum", arabic: "أَنفُسَكُمْ", word_key: "nfs", is_particle: false, sense_retenu: "personne", position: 4 },
      { fr: "et vous expulsez", pos: "verbe", phon: "tukhrijuuna", arabic: "وَتُخْرِجُونَ", word_key: "xrj", is_particle: false, sense_retenu: "expulser", position: 5 },
      { fr: "un groupe", pos: "nom", phon: "fariiqan", arabic: "فَرِيقًا", word_key: "frq", is_particle: false, sense_retenu: "séparer", position: 6 },
      { fr: "d'entre vous", phon: "minkum", arabic: "مِّنكُم", is_particle: true, position: 7 },
      { fr: "de", phon: "min", arabic: "مِّن", is_particle: true, position: 8 },
      { fr: "leurs demeures", pos: "nom", phon: "diyaarihim", arabic: "دِيَٰرِهِمْ", word_key: "dwr", is_particle: false, sense_retenu: "demeure", position: 9 },
      { fr: "vous soutenez mutuellement", pos: "verbe", phon: "tazaaharuuna", arabic: "تَظَٰهَرُونَ", word_key: "zhr", is_particle: false, sense_retenu: "manifeste", position: 10 },
      { fr: "contre eux", phon: "'alayhim", arabic: "عَلَيْهِم", is_particle: true, position: 11 },
      { fr: "par le peche", pos: "nom", phon: "al-ithmi", arabic: "بِٱلْإِثْمِ", word_key: "athm", is_particle: false, sense_retenu: "péché (ithm)", position: 12 },
      { fr: "et l'agression", phon: "wa-al-'udwaani", arabic: "وَٱلْعُدْوَٰنِ", is_particle: true, position: 13 },
      { fr: "et si", phon: "wa-in", arabic: "وَإِن", is_particle: true, position: 14 },
      { fr: "ils viennent a vous", pos: "verbe", phon: "ya'tuukum", arabic: "يَأْتُوكُمْ", word_key: "aty", is_particle: false, sense_retenu: "venir", position: 15 },
      { fr: "captifs", pos: "nom", phon: "usaaraa", arabic: "أُسَٰرَYٰ", word_key: "asr", is_particle: false, sense_retenu: "captif", position: 16 },
      { fr: "vous les ranconnez", pos: "verbe", phon: "tufaaduuhum", arabic: "تُفَٰدُوهُمْ", word_key: "fdy", is_particle: false, sense_retenu: "rançon", position: 17 },
      { fr: "et c'est", phon: "wa-huwa", arabic: "وَهُوَ", is_particle: true, position: 18 },
      { fr: "interdit", pos: "nom", phon: "muharramun", arabic: "مُحَرَّمٌ", word_key: "hrm", is_particle: false, sense_retenu: "interdire", position: 19 },
      { fr: "sur vous", phon: "'alaykum", arabic: "عَلَيْكُمْ", is_particle: true, position: 20 },
      { fr: "leur expulsion", pos: "nom", phon: "ikhraajuhum", arabic: "إِخْرَاجُهُمْ", word_key: "xrj", is_particle: false, sense_retenu: "expulser", position: 21 },
      { fr: "croyez-vous donc", pos: "verbe", phon: "afa-tu'minuuna", arabic: "أَفَتُؤْمِنُونَ", word_key: "amn", is_particle: false, sense_retenu: "croire", position: 22 },
      { fr: "en une partie", pos: "nom", phon: "bi-ba'di", arabic: "بِبَعْضِ", word_key: "bed", is_particle: false, sense_retenu: "une partie", position: 23 },
      { fr: "du Livre", pos: "nom", phon: "al-kitaabi", arabic: "ٱلْكِتَٰبِ", word_key: "ktb", is_particle: false, sense_retenu: "livre", position: 24 },
      { fr: "et rejetez", pos: "verbe", phon: "wa-takfuruuna", arabic: "وَتَكْفُرُونَ", word_key: "kfr", is_particle: false, sense_retenu: "couvrir", position: 25 },
      { fr: "le reste", pos: "nom", phon: "bi-ba'din", arabic: "بِبَعْضٍ", word_key: "bed", is_particle: false, sense_retenu: "une partie", position: 26 },
      { fr: "quelle", phon: "fa-maa", arabic: "فَمَا", is_particle: true, position: 27 },
      { fr: "retribution", pos: "nom", phon: "jazaa'u", arabic: "جَزَآءُ", word_key: "jzy", is_particle: false, sense_retenu: "rétribuer", position: 28 },
      { fr: "de celui qui", phon: "man", arabic: "مَن", is_particle: true, position: 29 },
      { fr: "fait", pos: "verbe", phon: "yaf'alu", arabic: "يَفْعَلُ", word_key: "fel", is_particle: false, sense_retenu: "faire", position: 30 },
      { fr: "cela", phon: "dhaalika", arabic: "ذَٰلِكَ", is_particle: true, position: 31 },
      { fr: "d'entre vous", phon: "minkum", arabic: "مِنكُمْ", is_particle: true, position: 32 },
      { fr: "sinon", phon: "illaa", arabic: "إِلَّا", is_particle: true, position: 33 },
      { fr: "humiliation", pos: "nom", phon: "khizyun", arabic: "خِزْYٌ", word_key: "khzy", is_particle: false, sense_retenu: "honte", position: 34 },
      { fr: "dans", phon: "fii", arabic: "فِY", is_particle: true, position: 35 },
      { fr: "la vie", pos: "nom", phon: "al-hayaati", arabic: "ٱلْحَيَوٰةِ", word_key: "hyy", is_particle: false, sense_retenu: "vie", position: 36 },
      { fr: "d'ici-bas", pos: "adjectif", phon: "al-dunyaa", arabic: "ٱلدُّنْيَا", word_key: "dnw", is_particle: false, sense_retenu: "ici-bas", position: 37 },
      { fr: "et le Jour", pos: "nom", phon: "wa-yawma", arabic: "وَيَوْمَ", word_key: "ywm", is_particle: false, sense_retenu: "jour", position: 38 },
      { fr: "de la Resurrection", pos: "nom", phon: "al-qiyaamati", arabic: "ٱلْقِيَٰمَةِ", word_key: "qwm", is_particle: false, sense_retenu: "peuple", position: 39 },
      { fr: "ils seront renvoyes", pos: "verbe", phon: "yuradduuna", arabic: "يُرَدُّونَ", word_key: "rdd", is_particle: false, sense_retenu: "renvoyer", position: 40 },
      { fr: "vers", phon: "ilaa", arabic: "إِلَYٰٓ", is_particle: true, position: 41 },
      { fr: "le plus dur", phon: "ashaddi", arabic: "أَشَدِّ", is_particle: true, position: 42 },
      { fr: "chatiment", phon: "al-'adhaabi", arabic: "ٱلْعَذَابِ", is_particle: true, position: 43 },
      { fr: "et ne", phon: "wa-maa", arabic: "وَمَا", is_particle: true, position: 44 },
      { fr: "Dieu", pos: "nom", phon: "Allaahu", arabic: "ٱللَّهُ", word_key: "alh", is_particle: false, sense_retenu: "Dieu", position: 45 },
      { fr: "insouciant", pos: "nom", phon: "ghafilin", arabic: "بِغَٰفِلٍ", word_key: "ghfl", is_particle: false, sense_retenu: "négliger", position: 46 },
      { fr: "de ce que", phon: "'ammaa", arabic: "عَمَّا", is_particle: true, position: 47 },
      { fr: "vous faites", pos: "verbe", phon: "ta'maluuna", arabic: "تَعْمَلُونَ", word_key: "eml", is_particle: false, sense_retenu: "agir", position: 48 }
    ],
    words: [
      // === qtl (id=556) — tuer ===
      {
        word_key: "qtl", position: 3, sense_chosen: "tuer",
        analysis_axes: {
          concept_chosen: "Meurtre/Combat",
          concepts: {
            "Meurtre/Combat": {
              status: "retenu",
              senses: ["combat", "tuer", "assassiner", "combattre", "meurtre"],
              proof_ctx: "Le verbe taqtuluuna est un inaccompli 2MP de la racine q-t-l. Le Lane's donne « you kill, you slay ». L'inaccompli exprime une action repetee et habituelle — ils tuent les leurs de maniere recurrente. Le verbe est suivi de anfusakum (vos propres gens), ce qui signifie le meurtre interne au peuple. La racine q-t-l est le terme le plus direct pour le meurtre dans le Coran.",
              axe1_verset: "Le verbe taqtuluuna ouvre la liste des accusations contre les enfants d'Israel. Ils tuent les leurs — le pronom anfusakum montre que la violence est interne a la communaute. Le meurtre est le premier crime liste, avant l'expulsion et l'agression. L'inaccompli indique que ce n'est pas un evenement ponctuel mais une pratique recurrente. Le verset enchaine meurtre, expulsion et soutien mutuel dans le peche comme une chaine de crimes.",
              axe2_voisins: "Le verset 84 rappelait l'engagement initial des enfants d'Israel de ne pas verser le sang ni s'expulser. Ce verset 85 constate la violation de cet engagement — ils tuent et expulsent. Le verset 86 indique la consequence — ils ont achete la vie d'ici-bas au prix de l'au-dela. La progression est engagement-violation-consequence.",
              axe3_sourate: "La racine q-t-l dans la sourate al-Baqarah est liee au recit de l'homme tue et de la vache (2:72). En 2:61, le meurtre des prophetes est mentionne. En 2:87, les enfants d'Israel tuent certains messagers. La sourate montre un peuple qui recourt au meurtre comme reponse a ce qui le derange. Le meurtre interne (anfusakum) est la forme la plus grave.",
              axe4_coherence: "La racine q-t-l apparait 170 fois dans le Coran. Le meurtre est un des crimes les plus graves — en 5:32, tuer une personne equivaut a tuer l'humanite entiere. En 4:93, le meurtre delibere d'un croyant merite l'enfer eternel. Le Coran condamne le meurtre sans equivoque.",
              axe5_frequence: "Pour la mission du khalifa, le meurtre est la negation absolue de la vicegerence. Le khalifa est place sur terre pour preserver la vie, pas pour la detruire. Les enfants d'Israel qui tuent les leurs montrent l'echec complet de la mission de vicegerence — ils detruisent ce qu'ils devaient proteger."
            }
          }
        }
      },
      // === nfs (id=298) — ame/personne ===
      {
        word_key: "nfs", position: 4, sense_chosen: "personne",
        analysis_axes: {
          concept_chosen: "Âme/Être",
          concepts: {
            "Âme/Être": {
              status: "retenu",
              senses: ["désir", "âme", "personne", "esprit", "soi-même"],
              proof_ctx: "Le mot anfusakum est un nom feminin pluriel accusatif avec pronom 2MP de la racine n-f-s. Le Lane's donne « yourselves, your own souls, your own people ». Le pluriel anfus avec le pronom possessif 2MP signifie « vos propres gens ». Dans ce contexte, anfusakum designe les membres de la meme communaute — tuer anfusakum c'est tuer les siens. La racine n-f-s porte le sens de l'etre dans sa totalite.",
              axe1_verset: "Le mot anfusakum est l'objet du meurtre — « vous tuez vos propres gens ». Le pronom possessif transforme le meurtre en autodestruction communautaire. Tuer ses propres gens revient a se detruire soi-meme. Le verset utilise anfusakum au debut puis revient a l'idee de la communaute divisee avec fariiqan (un groupe). La destruction interne est le theme central du verset.",
              axe2_voisins: "Le verset 84 contenait la meme expression dans l'engagement — « ne versez pas votre sang et ne vous expulsez pas ». Le verset 85 montre la violation de cet engagement avec les memes termes. La repetition de anfusakum cree un echo entre la promesse et sa transgression.",
              axe3_sourate: "La racine n-f-s dans la sourate al-Baqarah designe l'etre complet. En 2:48, « nulle ame ne sera retribuee pour une autre ». En 2:233, les parents ne doivent pas etre leses dans leurs ames. La sourate montre que l'ame/personne est l'unite de base de la responsabilite devant Dieu.",
              axe4_coherence: "La racine n-f-s apparait 295 fois dans le Coran. Le mot nafs designe l'etre dans ses dimensions physique et spirituelle. En 5:32, l'interdiction de tuer une nafs (ame) est absolue. L'expression anfusakum (vos propres gens) apparait dans plusieurs contextes de violence interne.",
              axe5_frequence: "Pour la mission du khalifa, la preservation des ames est la premiere responsabilite. Le khalifa protege les nafs — les personnes confiees a sa charge. Les enfants d'Israel qui tuent anfusakum trahissent la protection des ames qui est au coeur de la vicegerence."
            },
            "Souffle/Vie": {
              status: "nul",
              senses: ["souffle", "respirer", "soulagement"],
              proof_ctx: "Le sens de souffle est le sens premier de n-f-s. Ici anfusakum au pluriel avec pronom possessif designe les personnes, pas le souffle physique. Le contexte du meurtre confirme le sens de personne."
            }
          }
        }
      },
      // === xrj (id=388) — expulser (position 5) ===
      {
        word_key: "xrj", position: 5, sense_chosen: "expulser",
        analysis_axes: {
          concept_chosen: "Sortie/Émergence",
          concepts: {
            "Sortie/Émergence": {
              status: "retenu",
              senses: ["sortir", "faire sortir", "expulser", "émerger", "produire"],
              proof_ctx: "Le verbe tukhrijuuna est un inaccompli 2MP forme IV de la racine kh-r-j. Le Lane's donne « you expel, you drive out, you cause to go forth ». La forme IV (if'al) est causative — faire sortir quelqu'un de force. Le verbe est conjugue a l'inaccompli comme taqtuluuna, indiquant une pratique habituelle. L'expulsion est le deuxieme crime apres le meurtre.",
              axe1_verset: "Le verbe tukhrijuuna est le deuxieme crime liste — apres le meurtre vient l'expulsion. Le complement fariiqan minkum min diyaarihim (un groupe d'entre vous de leurs demeures) precise la nature de l'expulsion. Ce n'est pas une sortie volontaire mais une expulsion forcee de membres de la communaute. Le verset reviendra sur l'expulsion avec ikhraajuhum (leur expulsion) pour souligner que c'etait interdit.",
              axe2_voisins: "Le verset 84 interdisait explicitement l'expulsion — « ne vous expulsez pas de vos demeures ». Ce verset 85 constate que l'expulsion a lieu malgre l'interdiction. La double mention de kh-r-j dans le meme verset (tukhrijuuna et ikhraajuhum) insiste sur la gravite de la violation.",
              axe3_sourate: "La racine kh-r-j dans la sourate al-Baqarah a plusieurs sens. En 2:167, les damnes veulent sortir du Feu. En 2:217, l'expulsion du lieu sacre est mentionnee. La sourate montre que l'expulsion des demeures est une forme de violence comparable au meurtre.",
              axe4_coherence: "La racine kh-r-j apparait 182 fois dans le Coran. L'expulsion des demeures est condamnee dans plusieurs contextes — en 60:1, Dieu reproche l'expulsion des croyants. En 59:2, l'expulsion des gens du Livre de leurs demeures est un acte divin de chatiment. L'expulsion humaine arbitraire est toujours condamnee.",
              axe5_frequence: "Pour la mission du khalifa, la demeure est le lieu de securite que le khalifa doit proteger. Expulser les gens de leurs demeures est une violation de la securite que le khalifa doit garantir. Les enfants d'Israel qui expulsent les leurs contreviennent a la protection du foyer."
            },
            "Tribut/Revenu": {
              status: "nul",
              senses: ["impôt", "revenu"],
              proof_ctx: "Le sens de revenu est un sens secondaire de kh-r-j. Le verbe tukhrijuuna a la forme IV causative signifie clairement faire sortir, expulser. Le contexte de l'expulsion des demeures confirme ce sens."
            }
          }
        }
      },
      // === frq (id=515) — groupe ===
      {
        word_key: "frq", position: 6, sense_chosen: "séparer",
        analysis_axes: {
          concept_chosen: "Séparation/Distinction",
          concepts: {
            "Séparation/Distinction": {
              status: "retenu",
              senses: ["séparer", "distinguer", "diviser", "Furqân"],
              proof_ctx: "Le mot fariiqan est un nom masculin singulier accusatif indefini de la racine f-r-q. Le Lane's donne « a group, a party, a section, a separate portion of people ». Le mot fariiq derive de la separation — un groupe qui est separe du reste. L'indefini (tanwin) indique un groupe non identifie specifiquement. La separation est au coeur du mot — un fariiq est un groupe qu'on a distingue du reste.",
              axe1_verset: "Le mot fariiqan designe le groupe expulse — « vous expulsez un groupe d'entre vous de leurs demeures ». Le mot revele que l'expulsion ne touche pas tous mais une partie — un groupe separe. La selection d'un groupe pour l'expulsion montre la division interne au peuple. Le verset oppose le « vous » (les expulseurs) au « groupe » (les expulses) — la communaute est fracturee.",
              axe2_voisins: "Le verset 84 traitait le peuple comme un tout unifie dans l'engagement. Ce verset 85 montre la fracture — un groupe est separe et expulse. Le passage de l'unite a la division illustre la trahison de l'engagement communautaire.",
              axe3_sourate: "La racine f-r-q dans la sourate al-Baqarah porte les sens de separation et de discernement. En 2:53, le Furqaan (le discernement) est donne a Moise. En 2:102, la magie separe l'homme de sa femme. La sourate montre que la separation peut etre divine (discernement) ou humaine (division).",
              axe4_coherence: "La racine f-r-q apparait 72 fois dans le Coran. Le mot fariiq designe souvent un groupe d'entre eux (fariiqun minhum). En 3:105, Dieu interdit de se diviser. La division du peuple est condamnee comme contraire a l'unite voulue par Dieu.",
              axe5_frequence: "Pour la mission du khalifa, l'unite est fondamentale. Le khalifa maintient la cohesion et empeche la separation. Un fariiq (groupe separe) est le symptome d'un echec du vivre-ensemble. Les enfants d'Israel qui expulsent un groupe trahissent l'unite communautaire."
            },
            "Groupe/Partie": {
              status: "nul",
              senses: ["groupe", "partie"],
              proof_ctx: "Le sens de groupe est un derive du sens de separation — un fariiq est un groupe issu d'une separation. Le concept retenu « Separation/Distinction » englobe ce sens."
            }
          }
        }
      },
      // === dwr (id=631) — demeures ===
      {
        word_key: "dwr", position: 9, sense_chosen: "demeure",
        analysis_axes: {
          concept_chosen: "Demeure",
          concepts: {
            "Demeure": {
              status: "retenu",
              senses: ["maison", "demeure"],
              proof_ctx: "Le mot diyaarihim est un nom feminin pluriel genitif avec pronom 3MP de la racine d-w-r. Le Lane's donne « their homes, their abodes, their dwellings ». Le pluriel diyaar (demeures) avec le pronom possessif 3MP designe les habitations du groupe expulse. La demeure est le lieu de stabilite et de securite. L'expulsion des demeures est la privation du lieu de vie.",
              axe1_verset: "Le mot diyaarihim est le complement de l'expulsion — « vous expulsez un groupe de leurs demeures ». La demeure est le lieu d'ou l'on est chasse. Le pronom 3MP (leurs) montre que les demeures appartiennent aux expulses. L'expulsion est une depossession — on prive les gens de leur lieu de vie. Le verset reviendra sur l'expulsion (ikhraajuhum) pour rappeler qu'elle etait interdite.",
              axe2_voisins: "Le verset 84 contenait le meme mot — « ne vous expulsez pas de vos demeures (diyaarikum) ». La repetition de diyaar entre l'engagement (verset 84) et la violation (verset 85) cree un echo structure. Le passage du pronom 2MP (vos demeures) au 3MP (leurs demeures) montre le changement de perspective — les victimes deviennent « eux ».",
              axe3_sourate: "La racine d-w-r dans la sourate al-Baqarah est liee au lieu de vie. En 2:243, des gens sont sortis de leurs demeures par milliers. La demeure est le lieu que Dieu protege et dont l'expulsion est condamnee. La sourate montre que le droit a la demeure est un droit fondamental.",
              axe4_coherence: "La racine d-w-r apparait 53 fois dans le Coran. En 59:2, Dieu fait sortir les gens du Livre de leurs demeures. En 33:13, certains demandent la permission de partir car leurs demeures sont exposees. La demeure est toujours presentee comme un lieu sacre dont la privation est une epreuve majeure.",
              axe5_frequence: "Pour la mission du khalifa, la demeure est le lieu de securite fondamental. Le khalifa garantit le droit au foyer. L'expulsion des demeures est l'une des pires formes d'injustice car elle prive l'etre humain de sa stabilite elementaire."
            },
            "Cycle/Rotation": {
              status: "nul",
              senses: ["tourner", "cercle"],
              proof_ctx: "Le sens de rotation est le sens etymologique de d-w-r (tourner). Le mot diyaar au pluriel designe clairement les demeures dans ce contexte d'expulsion. Le lien etymologique est que la demeure est le lieu ou l'on tourne, ou l'on revient."
            }
          }
        }
      },
      // === zhr (id=668) — se soutenir mutuellement ===
      {
        word_key: "zhr", position: 10, sense_chosen: "manifeste",
        analysis_axes: {
          concept_chosen: "Manifestation/Dos",
          concepts: {
            "Manifestation/Dos": {
              status: "retenu",
              senses: ["apparaître", "dos", "manifeste", "prévaloir"],
              proof_ctx: "Le verbe tazaaharuuna est un inaccompli 2MP forme VI de la racine z-h-r. Le Lane's donne « you help one another, you support one another against them, you league together ». La forme VI (tafa'ul) exprime la reciprocite — ils se montrent mutuellement leur soutien. Le sens etymologique est le dos (zahr) — se soutenir dos a dos. La forme VI signifie se manifester l'un pour l'autre, se coaliser.",
              axe1_verset: "Le verbe tazaaharuuna est le troisieme crime — apres le meurtre et l'expulsion, le soutien mutuel dans le mal. La coalition contre les victimes aggrave les crimes individuels. Le complement « par le peche et l'agression » (bi-al-ithmi wa-al-'udwaani) qualifie la nature du soutien mutuel. Ce n'est pas un entraide pour le bien mais une alliance dans le mal.",
              axe2_voisins: "Le verset 84 ne mentionnait pas cette forme de complicite. Le verset 85 ajoute une dimension collective au crime — non seulement ils tuent et expulsent, mais ils se coalise pour le faire. Le soutien mutuel transforme des crimes individuels en entreprise collective de mal.",
              axe3_sourate: "La racine z-h-r dans la sourate al-Baqarah touche a la manifestation. En 2:101, certains ont rejete le Livre derriere leur dos (zahrahum). La sourate oppose la manifestation du bien a la coalition dans le mal. Le dos peut etre tourne au bien ou utilise pour soutenir le mal.",
              axe4_coherence: "La racine z-h-r apparait 60 fois dans le Coran. La forme VI (tazaahur) designe la coalition. En 33:4, le verbe est utilise pour le zihar (repudiation). En 66:4, tazaahur designe la coalition contre le Prophete. Le soutien mutuel dans le mal est toujours condamne dans le Coran.",
              axe5_frequence: "Pour la mission du khalifa, le soutien mutuel doit servir le bien, pas le mal. Le khalifa encourage la solidarite pour la justice, pas la coalition dans l'injustice. Les enfants d'Israel pervertissent le soutien mutuel en l'utilisant pour le peche et l'agression."
            }
          }
        }
      },
      // === athm (id=952) — peche ===
      {
        word_key: "athm", position: 12, sense_chosen: "péché (ithm)",
        analysis_axes: {
          concept_chosen: "Péché/Faute",
          concepts: {
            "Péché/Faute": {
              status: "retenu",
              senses: ["pécher", "commettre une faute", "péché (ithm)"],
              proof_ctx: "Le mot al-ithmi est un nom masculin singulier genitif defini de la racine a-th-m. Le Lane's donne « sin, crime, transgression, wrongdoing ». L'article defini al- indique le peche en tant que categorie — le peche en general. Le mot ithm dans le Coran designe le peche volontaire, l'acte delibéré qui merite sanction.",
              axe1_verset: "Le mot al-ithmi qualifie la nature du soutien mutuel — « vous vous soutenez contre eux par le peche et l'agression ». Le peche (ithm) est distingue de l'agression ('udwaan). Le ithm est la transgression de la loi divine, le 'udwaan est l'exces dans la violence. Les deux termes couvrent la dimension spirituelle (peche) et physique (agression) du mal.",
              axe2_voisins: "Le verset 84 contenait un engagement moral. Le verset 85 montre la realite — le soutien mutuel se fait dans le peche. Le contraste entre l'engagement et la pratique revele l'hypocrisie du peuple.",
              axe3_sourate: "La racine a-th-m dans la sourate al-Baqarah est liee a la transgression deliberee. En 2:182, celui qui corrige un testament injuste ne commet pas de peche (ithm). En 2:219, le vin et le jeu ont un peche (ithm) plus grand que leur utilite. La sourate montre que le ithm est le mal moral objectif.",
              axe4_coherence: "La racine a-th-m apparait 48 fois dans le Coran. Le ithm designe le peche grave et delibere. En 4:112, celui qui commet un ithm puis en accuse un innocent commet une calomnie et un peche manifeste. Le Coran distingue le ithm (peche grave) du dhunub (faute pardonnable).",
              axe5_frequence: "Pour la mission du khalifa, le peche est l'obstacle a la vicegerence. Le khalifa evite le ithm et combat sa propagation. Les enfants d'Israel qui se coalise dans le ithm montrent une communaute ou le mal est devenu collectif et organise."
            },
            "Retard/Lenteur": {
              status: "nul",
              senses: ["être en retard"],
              proof_ctx: "Le sens de retard est un sens secondaire de a-th-m. Le mot al-ithmi avec l'article defini designe clairement le peche dans ce contexte de transgression morale."
            }
          }
        }
      },
      // === aty (id=379) — venir ===
      {
        word_key: "aty", position: 15, sense_chosen: "venir",
        analysis_axes: {
          concept_chosen: "Venue/Arrivée",
          concepts: {
            "Venue/Arrivée": {
              status: "retenu",
              senses: ["arriver", "venir", "apporter", "donner", "commettre"],
              proof_ctx: "Le verbe ya'tuukum est un inaccompli 3MP apocopé de la racine a-t-y. Le Lane's donne « they come to you ». La forme simple avec pronom 2MP signifie « ils viennent vers vous ». Le verbe introduit le scenario hypothetique des captifs — si des membres expulses reviennent comme captifs.",
              axe1_verset: "Le verbe ya'tuukum introduit la contradiction centrale du verset — si ceux que vous avez expulses viennent a vous comme captifs, vous les ranconnez. Ils appliquent la loi du rachat des captifs tout en violant l'interdiction de l'expulsion. La venue des captifs revele l'hypocrisie — ils ranconnent ceux qu'ils ont eux-memes expulses.",
              axe2_voisins: "Le verset 84 mentionnait les engagements. Le verset 85 montre les contradictions. La venue des captifs est le point ou la contradiction devient flagrante — expulser puis ranconner les memes personnes.",
              axe3_sourate: "La racine a-t-y dans la sourate al-Baqarah porte plusieurs sens. En 2:71, « Moïse vint avec la verite ». En 2:87, « Nous donnames a Moise le Livre ». La venue est un mouvement vers un destinataire. Dans ce verset, la venue des captifs est involontaire.",
              axe4_coherence: "La racine a-t-y apparait 549 fois dans le Coran. Le verbe ata est polyvalent — venir, apporter, donner. En 2:145, « meme si tu apportais tous les signes ». La venue est toujours un mouvement porteur de sens.",
              axe5_frequence: "Pour la mission du khalifa, la venue est le contact avec la realite. Le khalifa doit repondre a ceux qui viennent a lui avec justice, pas avec la contradiction d'expulser puis de ranconner."
            },
            "Sens isolé/Détruire": {
              status: "nul",
              senses: ["détruire"],
              proof_ctx: "Le sens de detruire est un sens marginal de a-t-y. Le verbe ya'tuukum dans ce contexte signifie clairement venir."
            }
          }
        }
      },
      // === asr (id=669) — captifs ===
      {
        word_key: "asr", position: 16, sense_chosen: "captif",
        analysis_axes: {
          concept_chosen: "Captivité/Lien",
          concepts: {
            "Captivité/Lien": {
              status: "retenu",
              senses: ["capturer", "captif", "lien"],
              proof_ctx: "Le mot usaaraa est un nom masculin pluriel accusatif de la racine a-s-r. Le Lane's donne « captives, prisoners, those taken in captivity ». Le pluriel usaaraa designe les prisonniers de guerre ou les captifs. La racine a-s-r porte le sens de lier, attacher — le captif est celui qui est lie.",
              axe1_verset: "Le mot usaaraa designe ceux qui reviennent comme captifs apres avoir ete expulses. La contradiction est frappante — les enfants d'Israel expulsent leurs freres puis les ranconnent quand ils reviennent en captifs. Ils appliquent la loi du rachat mais violent l'interdiction de l'expulsion. La captivite est le resultat de l'expulsion — ceux qui sont expulses deviennent vulnerables.",
              axe2_voisins: "Le verset 84 mentionnait l'engagement de ne pas verser le sang. Ce verset 85 montre que les victimes de l'expulsion deviennent des captifs. La chaine causale est expulsion-captivite-rachat — les enfants d'Israel provoquent la captivite puis en profitent.",
              axe3_sourate: "La racine a-s-r est peu frequente dans la sourate al-Baqarah. Ce verset est le seul qui mentionne les captifs dans ce passage. Le contexte est specifique — la captivite resulte de la violence interne au peuple.",
              axe4_coherence: "La racine a-s-r apparait 14 fois dans le Coran. En 76:8, les croyants nourrissent le captif par amour de Dieu. En 8:67, le Prophete est interroge sur les captifs de Badr. Le traitement des captifs est un test moral dans le Coran.",
              axe5_frequence: "Pour la mission du khalifa, le traitement des captifs revele la justice du khalifa. Le khalifa doit proteger les vulnerables, pas les exploiter. Ranconner ceux qu'on a soi-meme expulses est le comble de l'injustice."
            }
          }
        }
      },
      // === fdy (id=670) — rancon ===
      {
        word_key: "fdy", position: 17, sense_chosen: "rançon",
        analysis_axes: {
          concept_chosen: "Rançon/Sacrifice",
          concepts: {
            "Rançon/Sacrifice": {
              status: "retenu",
              senses: ["racheter", "rançon", "compensation"],
              proof_ctx: "Le verbe tufaaduuhum est un inaccompli 2MP forme III de la racine f-d-y. Le Lane's donne « you ransom them, you pay their ransom, you redeem them ». La forme III (mufa'ala) implique la reciprocite et l'echange — donner quelque chose en echange de la liberation du captif.",
              axe1_verset: "Le verbe tufaaduuhum revele la contradiction — ils ranconnent les captifs (appliquant cette loi du Livre) tout en ayant expulse ces memes personnes (violant une autre loi du Livre). Le rachat est un acte qui semble pieux mais qui masque la violence anterieure. La contradiction est le sujet de la question rhetorique qui suit.",
              axe2_voisins: "Le verset 84 contenait l'engagement. Le verset 85 montre la contradiction entre l'application selective des lois. Le rachat des captifs est la loi qu'ils appliquent pour se donner bonne conscience. Le verset 86 montrera la consequence de cette hypocrisie.",
              axe3_sourate: "La racine f-d-y dans la sourate al-Baqarah est liee a la compensation. En 2:184, le fidy est la compensation pour le jeune manque. En 2:196, le fidya est la compensation pour le pelerinage incomplet. La rancon est toujours un echange — quelque chose contre la liberation.",
              axe4_coherence: "La racine f-d-y apparait 15 fois dans le Coran. En 3:91, la terre entiere remplie d'or ne suffira pas comme rancon le Jour du Jugement. La rancon est liee a la valeur de la vie — combien vaut une personne ? Le Coran montre que la vie humaine est au-dela de tout prix.",
              axe5_frequence: "Pour la mission du khalifa, la rancon revele la valeur que l'on accorde a la vie humaine. Le khalifa ne doit pas reduire les personnes a une valeur d'echange. Les enfants d'Israel ranconnent les captifs comme une transaction, pas comme un acte de justice."
            }
          }
        }
      },
      // === hrm (id=671) — interdit ===
      {
        word_key: "hrm", position: 19, sense_chosen: "interdire",
        analysis_axes: {
          concept_chosen: "Interdiction/Sacré",
          concepts: {
            "Interdiction/Sacré": {
              status: "retenu",
              senses: ["interdire", "sacré", "sanctuaire", "illicite", "priver", "respecter"],
              proof_ctx: "Le mot muharramun est un participe passif masculin singulier nominatif forme II de la racine h-r-m. Le Lane's donne « forbidden, prohibited, made unlawful, declared sacred ». Le passif indique que l'interdiction vient de Dieu — c'est Dieu qui a rendu l'expulsion illicite. La forme II (fa''ala) renforce l'idee d'interdiction formelle et definitive.",
              axe1_verset: "Le mot muharramun qualifie l'expulsion — « alors que leur expulsion vous etait interdite ». L'interdiction divine est rappelée pour montrer que les enfants d'Israel savaient que l'expulsion etait illicite. Ils violent une interdiction divine tout en appliquant une autre loi (le rachat). La contradiction est le coeur de l'accusation.",
              axe2_voisins: "Le verset 84 contenait l'engagement de ne pas expulser. Ce verset 85 rappelle que l'expulsion etait muharram (interdite par Dieu). L'engagement humain est double d'une interdiction divine — la violation est donc doublement grave.",
              axe3_sourate: "La racine h-r-m dans la sourate al-Baqarah est liee au sacre et a l'interdit. En 2:173, certains aliments sont interdits (hurrimat). En 2:194, le mois sacre (al-haram) est mentionne. En 2:217, la question du combat dans le mois sacre est posee. La sourate montre que l'interdit est une limite divine infranchissable.",
              axe4_coherence: "La racine h-r-m apparait 83 fois dans le Coran. Le Haram est la limite divine — ce qui est declare illicite est intouchable. En 5:3, les aliments interdits sont listes. L'interdit couvre le sacre (la Ka'ba est le Masjid al-Haram) et l'illicite (ce que Dieu a proscrit). L'interdit est une protection divine.",
              axe5_frequence: "Pour la mission du khalifa, l'interdit divin est la limite que le khalifa ne transgresse pas. Le khalifa respecte le haram — ce que Dieu a interdit est inviolable. Les enfants d'Israel qui violent l'interdit de l'expulsion montrent un mepris pour les limites divines."
            },
            "Sens isolé/Épouse": {
              status: "nul",
              senses: ["épouse"],
              proof_ctx: "Le sens d'epouse (harim) est un sens specifique de h-r-m. Le contexte est clairement l'interdiction divine de l'expulsion. Le participe passif muharramun signifie rendu illicite."
            }
          }
        }
      },
      // === amn (id=287) — croire ===
      {
        word_key: "amn", position: 22, sense_chosen: "croire",
        analysis_axes: {
          concept_chosen: "Foi/Adhésion",
          concepts: {
            "Foi/Adhésion": {
              status: "retenu",
              senses: ["croyant", "confirmer", "accepter comme vrai", "croire", "avoir la foi"],
              proof_ctx: "Le verbe tu'minuuna est un inaccompli 2MP forme IV de la racine a-m-n. Le Lane's donne « you believe, you have faith ». La forme IV (if'al) signifie « rendre sur, croire en ». La question rhetorique afa-tu'minuuna (croyez-vous donc ?) est un reproche — comment peuvent-ils croire en une partie et rejeter le reste ?",
              axe1_verset: "Le verbe tu'minuuna est au centre de la question rhetorique qui constitue le pivot du verset. Apres avoir liste les crimes (meurtre, expulsion, coalition), le verset pose la question fondamentale — croyez-vous en une partie du Livre et rejetez-vous le reste ? La croyance partielle est dénoncée comme une contradiction insoutenable. La foi exige l'adhesion totale au Livre.",
              axe2_voisins: "Le verset 83 rapportait l'engagement original. Le verset 84 le detaillait. Le verset 85 montre que la croyance partielle produit une pratique contradictoire. Le verset 86 montrera la consequence — la perte de l'au-dela.",
              axe3_sourate: "La racine a-m-n dans la sourate al-Baqarah est le theme central. En 2:3, les pieux croient a l'invisible. En 2:62, la promesse est faite a ceux qui croient. En 2:177, la piete inclut la foi en Dieu. La sourate oppose la foi veritable (totale) a la foi partielle (selective).",
              axe4_coherence: "La racine a-m-n apparait 879 fois dans le Coran. La foi (imaan) est le fondement de la vie du croyant. En 2:136, la foi est en tout ce qui a ete revele — pas en une partie seulement. En 4:150, ceux qui font une distinction entre les messagers sont les vrais mecreants.",
              axe5_frequence: "Pour la mission du khalifa, la foi totale est la condition de la vicegerence. Le khalifa croit au Livre en entier, pas selectivement. La croyance partielle est une forme de mecreance qui invalide la mission du khalifa."
            },
            "Sécurité/Confiance": {
              status: "probable",
              senses: ["faire confiance", "être en sécurité", "confier", "fidèle", "lieu sûr", "se sentir en sécurité"],
              proof_ctx: "Le sens de securite est le sens premier de a-m-n. La foi (imaan) derive de ce sens — croire c'est se sentir en securite avec la verite. Le verbe tu'minuuna porte en arriere-plan l'idee de confiance — croire c'est faire confiance au Livre en entier."
            },
            "Garantie/Protection": {
              status: "nul",
              senses: ["accorder la sécurité", "protéger"],
              proof_ctx: "Le sens de protection est un derive de a-m-n. Le contexte est la croyance, pas l'octroi de securite."
            }
          }
        }
      },
      // === bed (id=406) — partie ===
      {
        word_key: "bed", position: 23, sense_chosen: "une partie",
        analysis_axes: {
          concept_chosen: "Partie/Division",
          concepts: {
            "Partie/Division": {
              status: "retenu",
              senses: ["une partie", "certains", "diviser en parties"],
              proof_ctx: "Le mot ba'di est un nom masculin singulier genitif de la racine b-'-d. Le Lane's donne « some, a part, a portion ». Le mot ba'd designe une partie d'un tout. Dans ce verset, ba'di al-kitaabi signifie « une partie du Livre » — ils croient en certaines lois et rejettent les autres.",
              axe1_verset: "Le mot ba'di apparait deux fois dans le verset — bi-ba'di al-kitaabi (en une partie du Livre) et bi-ba'din (le reste, une autre partie). La repetition souligne la division du Livre en parties acceptees et rejetees. La croyance selective divise le Livre en fragments — ce qui convient et ce qui derange. Cette division du Livre est l'accusation centrale.",
              axe2_voisins: "Le verset 84 rapportait l'engagement en entier. Le verset 85 montre la fragmentation de cet engagement. La division du Livre en parties est le mecanisme de l'hypocrisie — on garde ce qui arrange et on rejette le reste.",
              axe3_sourate: "La racine b-'-d dans la sourate al-Baqarah traite de la partie. En 2:253, « Nous avons favorise certains (ba'd) messagers sur d'autres ». Le mot ba'd est neutre — il designe une portion. C'est l'usage humain de la division qui est condamne, pas la division elle-meme.",
              axe4_coherence: "La racine b-'-d apparait 140 fois dans le Coran. Le mot ba'd est un outil de specification — il designe une partie. En 17:55, « Nous avons favorise certains prophetes ». La division en parties est un fait — mais choisir de croire en certaines parties et pas en d'autres est condamne.",
              axe5_frequence: "Pour la mission du khalifa, le Livre est un tout indivisible. Le khalifa n'a pas le droit de selectionner les parties qui l'arrangent. La division du Livre en parties acceptees et rejetees est la negation de la soumission totale que le khalifa doit incarner."
            }
          }
        }
      },
      // === ktb (id=275) — Livre ===
      {
        word_key: "ktb", position: 24, sense_chosen: "livre",
        analysis_axes: {
          concept_chosen: "Livre/Écrit",
          concepts: {
            "Livre/Écrit": {
              status: "retenu",
              senses: ["contrat de mariage", "contrat d'affranchissement", "écriture révélée", "livre", "registre", "contrat écrit"],
              proof_ctx: "Le mot al-kitaabi est un nom masculin singulier genitif defini de la racine k-t-b. Le Lane's donne « the Book, the Scripture, the revealed writing ». L'article defini al- designe le Livre revele par excellence — la Torah pour les enfants d'Israel. Le Kitab est la Parole ecrite de Dieu.",
              axe1_verset: "Le mot al-kitaabi est le sujet de la question rhetorique — « croyez-vous en une partie du Livre ? ». Le Livre est la reference normative que les enfants d'Israel divisent en parties. Le Livre contient les lois du rachat des captifs ET l'interdiction de l'expulsion. Croire en une partie et rejeter l'autre revient a rejeter le Livre en entier. Le Livre est indivisible — la foi partielle est un rejet.",
              axe2_voisins: "Le verset 83 mentionnait l'engagement envers Dieu. Le verset 85 precise que l'engagement est envers le Livre — la Torah. Le Livre est le support ecrit de l'alliance avec Dieu. Rejeter une partie du Livre c'est rompre l'alliance.",
              axe3_sourate: "La racine k-t-b dans la sourate al-Baqarah est omnipresente. En 2:2, « ce Livre, nul doute en lui ». En 2:44, « alors que vous lisez le Livre ». En 2:78, ceux qui ne connaissent pas le Livre. La sourate oppose ceux qui suivent le Livre a ceux qui le fragmentent.",
              axe4_coherence: "La racine k-t-b apparait 319 fois dans le Coran. Le Kitab est la Parole divine ecrite — un concept central. En 4:136, croire au Livre est un pilier de la foi. En 5:44, la Torah est un Livre contenant la guidance. Le Coran insiste sur l'integralite du Livre — on ne peut pas en selectionner des morceaux.",
              axe5_frequence: "Pour la mission du khalifa, le Livre est le guide total. Le khalifa suit le Livre en entier — chaque loi, chaque commandement. La fragmentation du Livre est la tentation du khalifa qui veut adapter la loi divine a ses desirs. Les enfants d'Israel montrent cette tentation realisee."
            },
            "Écriture/Inscription": {
              status: "probable",
              senses: ["écrire", "dicter", "copier un livre", "art de l'écriture", "scribe", "école", "demander d'écrire", "écrire à quelqu'un", "s'inscrire", "savant", "enseignant", "vendeur de livres"],
              proof_ctx: "Le sens d'ecriture est le sens premier de k-t-b — l'acte d'ecrire. Le Kitab derive de cet acte — c'est le resultat de l'ecriture divine. Le Livre est l'ecriture de Dieu fixee dans un support."
            },
            "Obligation/Décret": {
              status: "nul",
              senses: ["prescrire", "décret divin", "prédestination", "rendre obligatoire", "juger"],
              proof_ctx: "Le sens de prescription est un derive de k-t-b — ce que Dieu a ecrit comme obligation. Le mot al-kitaabi avec l'article defini designe le Livre revele, pas une obligation specifique."
            }
          }
        }
      },
      // === kfr (id=294) — rejeter ===
      {
        word_key: "kfr", position: 25, sense_chosen: "couvrir",
        analysis_axes: {
          concept_chosen: "Couverture/Dissimulation",
          concepts: {
            "Couverture/Dissimulation": {
              status: "retenu",
              senses: ["la nuit qui couvre", "cacher", "couvrir"],
              proof_ctx: "Le verbe takfuruuna est un inaccompli 2MP de la racine k-f-r. Le Lane's donne « you disbelieve, you deny, you cover up ». Le sens etymologique de k-f-r est couvrir — le kafir est celui qui couvre la verite. Le verbe takfuruuna signifie « vous couvrez (la verite) du reste du Livre ». La mecreance est un acte de dissimulation — on cache ce qui derange.",
              axe1_verset: "Le verbe takfuruuna complete la question rhetorique — « et vous rejetez le reste ». Apres tu'minuuna (croyez), takfuruuna (couvrez/rejetez) cree l'opposition. Le rejet est le contraire de la foi. Le verset oppose croire (amana) et couvrir (kafara) — les deux faces de la reaction au Livre. Les enfants d'Israel font les deux simultanement avec des parties differentes du Livre.",
              axe2_voisins: "Le verset 84 montrait l'engagement total. Le verset 85 montre le rejet partiel. Le verset 86 montrera la consequence — ils ont achete ce monde au prix de l'au-dela. Le kufr partiel mene a la perte totale.",
              axe3_sourate: "La racine k-f-r dans la sourate al-Baqarah est le contrepoint de la foi. En 2:6, les mecreants sont avertis. En 2:26, les mecreants rejettent les paraboles. En 2:34, Iblis est parmi les mecreants. La sourate oppose systematiquement la foi et le kufr.",
              axe4_coherence: "La racine k-f-r apparait 525 fois dans le Coran. Le kufr est l'oppose de la foi — couvrir la verite au lieu de l'accepter. En 2:256, la distinction entre la droiture et le kufr est claire. Le kufr partiel (rejeter une partie du Livre) est assimile au kufr total.",
              axe5_frequence: "Pour la mission du khalifa, le kufr est l'echec total. Le khalifa ne couvre pas la verite — il la manifeste. Les enfants d'Israel qui couvrent une partie du Livre trahissent la mission de transmission de la verite."
            },
            "Rejet/Ingratitude": {
              status: "probable",
              senses: ["être ingrat", "nier", "renier un bienfait", "rejeter", "mécréant"],
              proof_ctx: "Le sens d'ingratitude est un derive de la couverture — nier un bienfait c'est le couvrir. Le verbe takfuruuna porte ce sens en arriere-plan — rejeter une partie du Livre c'est nier le bienfait de la revelation complete."
            },
            "Expiation/Réparation": {
              status: "nul",
              senses: ["expier", "effacer les péchés"],
              proof_ctx: "Le sens d'expiation est un autre sens de k-f-r. Le contexte est clairement le rejet/mecreance, pas l'expiation."
            }
          }
        }
      },
      // === jzy (id=531) — retribution ===
      {
        word_key: "jzy", position: 28, sense_chosen: "rétribuer",
        analysis_axes: {
          concept_chosen: "Rétribution/Justice",
          concepts: {
            "Rétribution/Justice": {
              status: "retenu",
              senses: ["rétribuer", "récompenser", "punir"],
              proof_ctx: "Le mot jazaa'u est un nom masculin singulier nominatif de la racine j-z-y. Le Lane's donne « retribution, recompense, reward or punishment ». Le jazaa' est la consequence — bonne ou mauvaise — des actes. Ici la retribution est negative — l'humiliation dans cette vie et le chatiment dans l'au-dela.",
              axe1_verset: "Le mot jazaa'u annonce la consequence des actes — « quelle retribution pour ceux qui font cela sinon l'humiliation ? ». La retribution est la justice divine en action. Le verset passe des crimes (meurtre, expulsion) a la question (croyez-vous en partie ?) puis a la consequence (humiliation et chatiment). La structure est accusation-question-sentence.",
              axe2_voisins: "Les versets 83-84 rapportaient les engagements. Le verset 85 denonce les violations et prononce la sentence. Le verset 86 confirmera la perte totale. La retribution est le mecanisme de justice divine qui repond a la croyance selective.",
              axe3_sourate: "La racine j-z-y dans la sourate al-Baqarah traite de la retribution. En 2:191, « telle est la retribution des mecreants ». En 2:286, « Dieu ne charge une ame que de ce qu'elle peut porter ». La sourate montre que la retribution est proportionnelle aux actes.",
              axe4_coherence: "La racine j-z-y apparait 118 fois dans le Coran. Le jazaa' est la consequence exacte des actes — ni plus ni moins. En 55:60, « la retribution du bien n'est-elle pas le bien ? ». Le Coran insiste sur la justice parfaite de la retribution divine.",
              axe5_frequence: "Pour la mission du khalifa, la retribution est la consequence inevitable des actes. Le khalifa sait que ses actes auront des consequences — bonnes ou mauvaises. La retribution divine est la garantie que la justice sera faite."
            },
            "Suffisance": {
              status: "nul",
              senses: ["suffire"],
              proof_ctx: "Le sens de suffisance est un sens secondaire de j-z-y. Le mot jazaa'u dans ce contexte designe clairement la retribution."
            }
          }
        }
      },
      // === fel (id=374) — faire ===
      {
        word_key: "fel", position: 30, sense_chosen: "faire",
        analysis_axes: {
          concept_chosen: "Action/Acte",
          concepts: {
            "Action/Acte": {
              status: "retenu",
              senses: ["agir", "action", "subir une action", "faire ensemble", "efficace", "faire"],
              proof_ctx: "Le verbe yaf'alu est un inaccompli 3MS de la racine f-'-l. Le Lane's donne « he does, he acts, he performs ». Le verbe general de l'action — « celui qui fait cela ». Le pronom demonstratif dhaalika (cela) renvoie a l'ensemble des crimes listes — meurtre, expulsion, coalition dans le peche, croyance selective.",
              axe1_verset: "Le verbe yaf'alu resume tous les crimes en un seul mot — « celui qui fait cela ». Le verbe f-'-l est choisi pour sa generalite — il couvre tous les actes mentionnes sans en specifier aucun. La formule man yaf'alu dhaalika minkum (celui d'entre vous qui fait cela) individualise la responsabilite au sein du collectif.",
              axe2_voisins: "Le verset 85 passe de l'accusation collective a la responsabilite individuelle avec yaf'alu. Chacun qui fait cela sera retribue. Le verset 86 montrera la consequence collective.",
              axe3_sourate: "La racine f-'-l dans la sourate al-Baqarah designe l'action humaine. En 2:68, « faites ce qui vous est ordonne ». En 2:71, « ils le firent ». La sourate montre que l'action est le lieu de la responsabilite — on est juge sur ce qu'on fait.",
              axe4_coherence: "La racine f-'-l apparait 108 fois dans le Coran. Le verbe fa'ala est le verbe le plus general de l'action. La formule man yaf'alu dhaalika est recurrente dans le Coran pour designer celui qui commet telle action. L'action est le critere du jugement.",
              axe5_frequence: "Pour la mission du khalifa, l'action definit la mission. Le khalifa est juge sur ses actes. La formule « celui qui fait cela » rappelle que chaque acte a une consequence."
            }
          }
        }
      },
      // === khzy (id=888) — humiliation ===
      {
        word_key: "khzy", position: 34, sense_chosen: "honte",
        analysis_axes: {
          concept_chosen: "Humiliation/Honte",
          concepts: {
            "Humiliation/Honte": {
              status: "retenu",
              senses: ["être humilié", "être déshonoré", "honte", "châtiment humiliant", "avoir honte"],
              proof_ctx: "Le mot khizyun est un nom masculin singulier nominatif indefini de la racine kh-z-y. Le Lane's donne « disgrace, ignominy, humiliation, shame ». Le mot designe l'humiliation publique — la perte de dignite devant les autres. Le tanwin (indefini) donne au mot une dimension generale — une humiliation sans mesure.",
              axe1_verset: "Le mot khizyun est la retribution dans cette vie — « leur retribution n'est que l'humiliation dans la vie d'ici-bas ». L'humiliation est la premiere partie de la double sanction (ici-bas et au-dela). Le mot est indefini (khizyun, pas al-khizy), ce qui lui donne une dimension illimitee — une humiliation totale. La vie d'ici-bas est deja un lieu de honte pour ceux qui pratiquent la croyance selective.",
              axe2_voisins: "Le verset 84 rapportait un engagement digne. Le verset 85 montre que la violation de cet engagement produit l'humiliation — la perte de la dignite. Le verset 86 ajoutera que le chatiment ne sera pas allege. La progression est engagement-violation-humiliation-chatiment.",
              axe3_sourate: "La racine kh-z-y dans la sourate al-Baqarah est liee a la honte. En 2:114, « ils auront dans l'au-dela un chatiment immense ». La sourate montre que l'humiliation dans cette vie precede le chatiment de l'au-dela. La double sanction est un schema recurrent.",
              axe4_coherence: "La racine kh-z-y apparait 27 fois dans le Coran. En 11:66, l'humiliation du chatiment est mentionnee. En 3:192, « Seigneur, celui que Tu fais entrer au Feu, Tu l'as humilie ». L'humiliation est la consequence de la desobeissance deliberee.",
              axe5_frequence: "Pour la mission du khalifa, l'humiliation est l'echec visible de la mission. Le khalifa qui faillit a sa mission subit l'humiliation devant les hommes avant le chatiment divin. Les enfants d'Israel sont humilies dans cette vie comme premier signe de l'echec."
            }
          }
        }
      },
      // === hyy (id=404) — vie ===
      {
        word_key: "hyy", position: 36, sense_chosen: "vie",
        analysis_axes: {
          concept_chosen: "Vie/Vivant",
          concepts: {
            "Vie/Vivant": {
              status: "retenu",
              senses: ["vivre", "vie", "vivant", "donner la vie"],
              proof_ctx: "Le mot al-hayaati est un nom feminin singulier genitif defini de la racine h-y-y. Le Lane's donne « the life, existence ». L'article defini designe la vie en general — la vie mondaine quand elle est suivie de al-dunyaa. L'expression al-hayaat al-dunyaa (la vie d'ici-bas) est une formule coranique recurrente.",
              axe1_verset: "Le mot al-hayaati situe l'humiliation dans le temps — « dans la vie d'ici-bas ». L'humiliation n'est pas reservee a l'au-dela — elle commence dans cette vie. Le verset oppose la vie d'ici-bas (lieu de l'humiliation) au Jour de la Resurrection (lieu du chatiment plus dur). La double sanction couvre les deux vies.",
              axe2_voisins: "Le verset 85 oppose la vie d'ici-bas au Jour de la Resurrection. Le verset 86 reprendra cette opposition avec « ceux qui ont achete la vie d'ici-bas au prix de l'au-dela ». La vie d'ici-bas est le lieu du choix — et le choix des enfants d'Israel est mauvais.",
              axe3_sourate: "La racine h-y-y dans la sourate al-Baqarah traite de la vie. En 2:28, « Il vous a donné la vie alors que vous étiez morts ». En 2:179, « dans le talion il y a une vie ». La sourate montre que la vie est un don divin qui peut etre honore ou gaspille.",
              axe4_coherence: "La racine h-y-y apparait 184 fois dans le Coran. La vie est un theme central — Dieu est al-Hayy (le Vivant). L'expression al-hayaat al-dunyaa apparait 64 fois dans le Coran. La vie d'ici-bas est toujours presentee comme temporaire et trompeuse par rapport a l'au-dela.",
              axe5_frequence: "Pour la mission du khalifa, la vie est le cadre de la mission. Le khalifa utilise la vie d'ici-bas pour accomplir sa mission, pas pour la gaspiller. Les enfants d'Israel qui subissent l'humiliation dans cette vie ont gaspille le temps de leur mission."
            }
          }
        }
      },
      // === dnw (id=656) — ici-bas ===
      {
        word_key: "dnw", position: 37, sense_chosen: "ici-bas",
        analysis_axes: {
          concept_chosen: "Proximité/Monde d'ici-bas",
          concepts: {
            "Proximité/Monde d'ici-bas": {
              status: "retenu",
              senses: ["être proche", "proche", "ici-bas", "approcher"],
              proof_ctx: "Le mot al-dunyaa est un adjectif feminin singulier genitif defini de la racine d-n-w. Le Lane's donne « the nearest, the lower, the worldly, this-worldly ». L'adjectif dunyaa derive de la proximite (dunuww) — la vie d'ici-bas est la plus proche, la plus immediate. La dunyaa s'oppose a l'aakhira (l'au-dela).",
              axe1_verset: "Le mot al-dunyaa qualifie la vie ou l'humiliation a lieu — la vie d'ici-bas. L'opposition avec yawm al-qiyaama (Jour de la Resurrection) structure la double sanction. La dunyaa est le lieu de la premiere sanction (humiliation), l'au-dela sera le lieu de la seconde (chatiment plus dur).",
              axe2_voisins: "Le verset 85 mentionne la dunyaa comme lieu de l'humiliation. Le verset 86 reprendra la dunyaa comme objet du mauvais choix — « ceux qui ont achete la vie d'ici-bas au prix de l'au-dela ». La dunyaa est le piege qui detourne de l'essentiel.",
              axe3_sourate: "La racine d-n-w dans la sourate al-Baqarah traite de la proximite et du monde d'ici-bas. En 2:201, « notre Seigneur, donne-nous le bien dans la dunyaa ». La sourate ne condamne pas la dunyaa en soi mais le fait de la preferer a l'au-dela.",
              axe4_coherence: "La racine d-n-w apparait 133 fois dans le Coran. L'expression al-hayaat al-dunyaa est une formule recurrente. En 3:185, « la vie d'ici-bas n'est que jouissance illusoire ». Le Coran met en garde contre l'attachement excessif a la dunyaa.",
              axe5_frequence: "Pour la mission du khalifa, la dunyaa est le terrain de la mission, pas sa finalite. Le khalifa ne sacrifie pas l'au-dela pour la dunyaa. Les enfants d'Israel qui subissent l'humiliation dans la dunyaa montrent que le choix de la dunyaa au detriment de l'au-dela se retourne contre eux."
            }
          }
        }
      },
      // === ywm (id=257) — jour ===
      {
        word_key: "ywm", position: 38, sense_chosen: "jour",
        analysis_axes: {
          concept_chosen: "Temps/Période",
          concepts: {
            "Temps/Période": {
              status: "retenu",
              senses: ["période", "jour", "journée", "temps"],
              proof_ctx: "Le mot yawma est un nom masculin singulier accusatif de la racine y-w-m. Le Lane's donne « day, a day, a specific time ». Le mot yawm suivi de al-qiyaama designe le Jour de la Resurrection — le jour ultime du jugement.",
              axe1_verset: "Le mot yawma introduit la seconde partie de la sanction — « et le Jour de la Resurrection ils seront renvoyes au plus dur chatiment ». Le Jour est le temps du jugement final. L'opposition avec la vie d'ici-bas structure la double sanction dans deux temporalites differentes.",
              axe2_voisins: "Le verset 85 oppose la dunyaa au Jour de la Resurrection. Le verset 86 confirmera que le chatiment ne sera pas allege. La temporalite est double — l'humiliation maintenant, le chatiment au Jour du Jugement.",
              axe3_sourate: "La racine y-w-m dans la sourate al-Baqarah est liee au Jour du Jugement. En 2:48, « craignez un Jour ou nulle ame ne sera retribuee pour une autre ». En 2:254, « avant qu'un Jour vienne ou il n'y aura pas de commerce ». La sourate rappelle constamment le Jour du Jugement comme horizon de la responsabilite.",
              axe4_coherence: "La racine y-w-m apparait 475 fois dans le Coran. Le Jour (yawm al-qiyaama, yawm al-diin, etc.) est un concept central de l'eschatologie coranique. Le Jour est le moment ou tous les actes seront juges sans exception.",
              axe5_frequence: "Pour la mission du khalifa, le Jour du Jugement est l'horizon ultime. Le khalifa agit en sachant que le Jour viendra ou ses actes seront examines. La conscience du Jour empeche la negligence."
            },
            "Événement/Moment marquant": {
              status: "nul",
              senses: ["bataille", "jour de combat", "jour marquant", "événement"],
              proof_ctx: "Le sens d'evenement est un sens derive de y-w-m. Le mot yawm al-qiyaama designe specifiquement le Jour de la Resurrection, pas un evenement quelconque."
            }
          }
        }
      },
      // === qwm (id=263) — Resurrection ===
      {
        word_key: "qwm", position: 39, sense_chosen: "peuple",
        analysis_axes: {
          concept_chosen: "Peuple/Communauté",
          concepts: {
            "Peuple/Communauté": {
              status: "retenu",
              senses: ["peuple", "communauté", "nation", "tribu", "groupe"],
              proof_ctx: "Le mot al-qiyaamati est un nom feminin singulier genitif defini de la racine q-w-m. Le Lane's donne « the Resurrection, the standing up, the rising ». Le nom qiyaama derive de qaama (se lever, se dresser). Le Jour de la Resurrection est le Jour ou tous les morts se leveront pour le Jugement. Le concept retenu dans la base est « Peuple/Communaute » car la racine q-w-m designe aussi le peuple (qawm) — mais dans ce contexte, le sens est la Resurrection.",
              axe1_verset: "Le mot al-qiyaamati complete yawm pour former l'expression eschatologique yawm al-qiyaama (le Jour de la Resurrection). Ce jour est celui ou la seconde partie de la sanction sera appliquee — le renvoi au plus dur chatiment. La Resurrection est le moment de verite ou toutes les contradictions seront exposees.",
              axe2_voisins: "Le verset 85 mentionne le Jour de la Resurrection comme horizon de la sanction ultime. Le verset 86 ajoutera que le chatiment ne sera pas allege. La Resurrection est le point final de l'histoire — le moment ou la justice divine sera accomplie.",
              axe3_sourate: "La racine q-w-m dans la sourate al-Baqarah porte plusieurs sens. En 2:142, « la qibla que tu avais ». En 2:238, la priere du milieu est a maintenir. Le sens de qiyaama (Resurrection) est specifique au contexte eschatologique.",
              axe4_coherence: "La racine q-w-m apparait 660 fois dans le Coran. Le mot qiyaama apparait 70 fois, toujours dans le contexte du Jour du Jugement. L'expression yawm al-qiyaama est l'une des plus frequentes du Coran. La Resurrection est un dogme fondamental.",
              axe5_frequence: "Pour la mission du khalifa, la Resurrection est l'horizon de la responsabilite. Le khalifa sait que ses actes seront juges au Jour de la Resurrection. Cette conscience oriente toute l'action du khalifa."
            },
            "Verticalité/Droiture": {
              status: "probable",
              senses: ["se lever", "droit", "se dresser", "corriger", "se tenir debout", "redresser", "rectitude"],
              proof_ctx: "Le sens de verticalite est le sens premier de q-w-m — se lever, se dresser. La Resurrection (qiyaama) derive de ce sens — c'est le jour ou tous se dresseront. Le lien est direct entre la verticalite et la Resurrection."
            }
          }
        }
      },
      // === rdd (id=674) — renvoyer ===
      {
        word_key: "rdd", position: 40, sense_chosen: "renvoyer",
        analysis_axes: {
          concept_chosen: "Retour/Rejet",
          concepts: {
            "Retour/Rejet": {
              status: "retenu",
              senses: ["rendre", "renvoyer", "rejeter", "réfuter"],
              proof_ctx: "Le verbe yuradduuna est un inaccompli passif 3MP de la racine r-d-d. Le Lane's donne « they will be returned, they will be sent back, they will be driven back ». Le passif indique que le renvoi est subi — c'est Dieu qui les renvoie au chatiment. La racine r-d-d porte le sens de retour force — etre ramene a un etat ou un lieu.",
              axe1_verset: "Le verbe yuradduuna decrit le sort final — « ils seront renvoyes au plus dur chatiment ». Le passif montre l'impuissance — ils n'ont pas le choix. Le renvoi au chatiment est irrevocable. Le complement « au plus dur chatiment » (ilaa ashaddi al-'adhaab) indique que le chatiment de l'au-dela est plus severe que l'humiliation d'ici-bas.",
              axe2_voisins: "Le verset 85 decrit le renvoi au chatiment. Le verset 86 confirmera que ce chatiment ne sera pas allege. La progression est humiliation ici-bas puis renvoi au chatiment le plus dur dans l'au-dela.",
              axe3_sourate: "La racine r-d-d dans la sourate al-Baqarah est liee au retour. En 2:109, « beaucoup des gens du Livre voudraient vous faire revenir a la mecreance ». En 2:217, l'apostasie est le retour a la mecreance. Le retour peut etre physique ou spirituel — ici c'est le retour force au chatiment.",
              axe4_coherence: "La racine r-d-d apparait 80 fois dans le Coran. Le renvoi au chatiment est un theme recurrent. En 6:28, « s'ils etaient renvoyes, ils reviendraient a ce qui leur etait interdit ». Le renvoi est toujours un retour a une realite que l'on ne peut eviter.",
              axe5_frequence: "Pour la mission du khalifa, le renvoi au chatiment est la consequence ultime de l'echec. Le khalifa qui faillit sera renvoye au chatiment sans appel. Cette realite motive l'obeissance et la vigilance."
            }
          }
        }
      },
      // === ghfl (id=642) — insouciance ===
      {
        word_key: "ghfl", position: 46, sense_chosen: "négliger",
        analysis_axes: {
          concept_chosen: "Insouciance/Négligence",
          concepts: {
            "Insouciance/Négligence": {
              status: "retenu",
              senses: ["être insouciant", "négliger", "oublier"],
              proof_ctx: "Le mot ghafilin est un participe actif masculin singulier genitif de la racine gh-f-l. Le Lane's donne « heedless, negligent, unmindful, unaware ». Le participe actif decrit un etat permanent — celui qui est insouciant. La negation (maa Allahu bi-ghafilin) affirme que Dieu n'est pas insouciant de ce qu'ils font.",
              axe1_verset: "Le mot ghafilin cloture le verset par un avertissement — « Dieu n'est pas insouciant de ce que vous faites ». La negation est emphatique — la vigilance divine est absolue. Cet avertissement final rappelle que les crimes listes ne passeront pas inaperçus. Meme si la sanction n'est pas immediate, Dieu observe tout.",
              axe2_voisins: "Le verset 85 se termine par la vigilance divine. Le verset 86 montrera les consequences concretes. La cloture par la vigilance divine lie les actes a leurs consequences — rien n'echappe a Dieu.",
              axe3_sourate: "La racine gh-f-l dans la sourate al-Baqarah est utilisee pour nier l'insouciance divine. La formule « Dieu n'est pas insouciant de ce que vous faites » est un avertissement recurrent. La sourate montre que la vigilance divine est constante et totale.",
              axe4_coherence: "La racine gh-f-l apparait 40 fois dans le Coran. En 7:179, ceux qui ont des yeux mais ne voient pas sont dans la ghafla. En 10:92, la ghafla est l'etat de ceux qui ignorent les signes. La negation de la ghafla divine est un avertissement puissant — rien n'est oublie.",
              axe5_frequence: "Pour la mission du khalifa, la conscience de la vigilance divine empeche la negligence. Le khalifa sait que Dieu n'est pas insouciant — chaque acte est enregistre. Cette conscience motive la rectitude permanente."
            }
          }
        }
      },
      // === eml (id=393) — agir/oeuvrer ===
      {
        word_key: "eml", position: 48, sense_chosen: "agir",
        analysis_axes: {
          concept_chosen: "Action/Oeuvre",
          concepts: {
            "Action/Oeuvre": {
              status: "retenu",
              senses: ["travailler", "agir", "oeuvre", "acte", "ouvrier"],
              proof_ctx: "Le verbe ta'maluuna est un inaccompli 2MP de la racine '-m-l. Le Lane's donne « you do, you work, you act, you perform deeds ». Le verbe '-m-l se distingue de f-'-l par l'idee de continuite et d'intention — l'amal est l'action deliberee et poursuivie.",
              axe1_verset: "Le verbe ta'maluuna est le dernier mot du verset — « de ce que vous faites ». La formule 'amma ta'maluuna (de ce que vous oeuvrez) enveloppe tous les actes du verset — meurtre, expulsion, coalition, croyance selective. Le verbe '-m-l implique l'intentionnalite — ce ne sont pas des accidents mais des actes deliberes.",
              axe2_voisins: "Le verset 85 se cloture sur les oeuvres. Le verset 86 montrera les consequences de ces oeuvres. Le lien entre les actes et leurs consequences est explicite — Dieu voit les oeuvres et les retribue.",
              axe3_sourate: "La racine '-m-l dans la sourate al-Baqarah est liee aux oeuvres. En 2:25, ceux qui croient et font de bonnes oeuvres (al-salihat). En 2:62, la foi et les bonnes oeuvres sont la condition du salut. La sourate oppose les bonnes oeuvres aux mauvaises — les enfants d'Israel font les mauvaises.",
              axe4_coherence: "La racine '-m-l apparait 360 fois dans le Coran. Le mot 'amal est l'oeuvre intentionnelle. En 9:105, « Dieu verra vos oeuvres ». En 99:7-8, celui qui fait un atome de bien le verra, et celui qui fait un atome de mal le verra. Les oeuvres sont le critere du jugement.",
              axe5_frequence: "Pour la mission du khalifa, les oeuvres definissent la valeur de la mission. Le khalifa est juge sur ses oeuvres — pas sur ses intentions seules mais sur ses actes concrets. La vigilance divine sur les oeuvres motive l'action juste."
            }
          }
        }
      },
      // === alh (id=250) — Dieu ===
      {
        word_key: "alh", position: 45, sense_chosen: "Dieu",
        analysis_axes: {
          concept_chosen: "Divinité",
          concepts: {
            "Divinité": {
              status: "retenu",
              senses: ["divinité", "exclamation divine", "divinité (concept)", "théologie", "oui certes", "Dieu"],
              proof_ctx: "Le mot Allaahu est un nom propre nominatif de la racine a-l-h. Le Lane's donne « God, the One True God, the Supreme Being ». Le nom Allah est le nom propre de Dieu dans le Coran — il designe l'Etre supreme unique.",
              axe1_verset: "Le mot Allaahu est le sujet de la phrase finale — « Dieu n'est pas insouciant de ce que vous faites ». Dieu est presente comme le Temoin vigilant de tous les actes. Sa mention en fin de verset rappelle que la sanction n'est pas une menace vaine mais une promesse du Tout-Puissant. La structure du verset mene aux crimes, passe par la retribution, et se cloture par la vigilance divine.",
              axe2_voisins: "Le verset 84 mentionnait l'engagement pris devant Dieu. Le verset 85 se termine par la vigilance de Dieu. Le verset 86 montrera que ceux qui ont failli ne seront pas aides. La presence de Dieu encadre tout le passage.",
              axe3_sourate: "La racine a-l-h dans la sourate al-Baqarah est le nom le plus frequent. En 2:255, le verset du Trone decrit les attributs de Dieu. La sourate montre Dieu comme le Legislateur, le Juge et le Temoin. La mention de Dieu en fin de verset est un rappel de sa souverainete.",
              axe4_coherence: "La racine a-l-h apparait plus de 2700 fois dans le Coran. Le nom Allah est le nom le plus frequent du Coran. La formule « Dieu n'est pas insouciant » est un avertissement qui revient a plusieurs reprises dans le Coran.",
              axe5_frequence: "Pour la mission du khalifa, Dieu est la source de l'autorite et le Temoin des actes. Le khalifa agit sous le regard de Dieu. La vigilance divine est la garantie que le khalifa sera juge equitablement."
            }
          }
        }
      }
    ]
  },

  // =====================================================
  // VERSET 2:86
  // verse_id=93, analysis_id=449
  // "Ceux-la sont ceux qui ont achete la vie d'ici-bas au prix de
  //  l'au-dela. Le chatiment ne leur sera pas allege et ils ne seront
  //  pas secourus."
  // =====================================================
  86: {
    verse_id: 93,
    analysis_id: 449,
    translation_arab: "Ceux-la sont ceux qui ont achete la vie d'ici-bas au prix de l'au-dela. Le chatiment ne leur sera pas allege et ils ne seront pas secourus.",
    full_translation: "Ceux-la sont ceux qui ont achete la vie d'ici-bas au prix de l'au-dela. Le chatiment ne leur sera pas allege et ils ne seront pas secourus.",
    translation_explanation: `§DEMARCHE§
Ce verset court conclut le passage en decrivant la consequence de la croyance selective. Le mot **al-hayaata** est un nom feminin genitif defini de la racine h-y-y. Le Lane's donne « life, existence ». Avec al-dunyaa, il designe la vie d'ici-bas. Le mot **al-dunyaa** est un adjectif feminin genitif defini de la racine d-n-w. Le Lane's donne « the nearest, this world ». Le mot **al-aakhirati** est un nom feminin genitif defini de la racine a-kh-r. Le Lane's donne « the Hereafter, the last life, the next world ». L'au-dela est le prix paye pour obtenir la vie d'ici-bas. Le verbe **yukhafffafu** est un inaccompli passif 3MS forme II de la racine kh-f-f. Le Lane's donne « it will not be lightened, it will not be diminished ». Le passif indique que l'allegement est refuse par Dieu. La negation la (pas) precede le verbe — le chatiment ne sera en aucun cas allege. Le verbe **yunsaruuna** est un inaccompli passif 3MP de la racine n-s-r. Le Lane's donne « they will not be helped, they will not be aided, they will not be supported ». Le passif indique l'absence totale de secours. La double negation (pas allege, pas secourus) ferme toute porte d'espoir.

§JUSTIFICATION§
**la vie** — Le sens retenu est « vie ». Le mot al-hayaata designe l'existence terrestre. L'alternative « serpent » est ecartee car le contexte est la vie mondaine opposee a l'au-dela.

**d'ici-bas** — Le sens retenu est « ici-bas ». Le mot al-dunyaa designe ce monde. L'alternative « approcher » est ecartee car l'adjectif substantive designe la vie terrestre.

**l'au-dela** — Le sens retenu est « l'au-delà ». Le mot al-aakhirati designe la vie derniere. L'alternative « retarder » est ecartee car le nom defini designe le monde suivant.

**allege** — Le sens retenu est « alléger ». Le verbe yukhafffafu forme II passif signifie rendre leger, diminuer. L'alternative « se hater » est ecartee car la forme II passive designe l'allegement.

**secourus** — Le sens retenu est « secourir ». Le verbe yunsaruuna au passif signifie etre aide. L'alternative « partisan » est ecartee car le verbe au passif designe le secours recu.

§CRITIQUE§
**l'achat de la dunyaa au prix de l'aakhira** — L'image du commerce (ishtaraw) est puissante — ils ont fait un echange commercial en troquant l'au-dela contre la vie d'ici-bas. Ce n'est pas un choix passif mais une transaction deliberee. Le prix paye (l'au-dela) est infiniment superieur au bien obtenu (la dunyaa).
**la double negation** — Le chatiment ne sera pas allege ET ils ne seront pas secourus. Les deux portes de l'espoir sont fermees — ni diminution de la peine, ni aide exterieure. L'isolement total devant le chatiment.`,
    segments: [
      { fr: "ceux-la", phon: "ulaa'ika", arabic: "أُو۟لَٰٓئِكَ", is_particle: true, position: 0 },
      { fr: "ceux qui", phon: "alladhiina", arabic: "ٱلَّذِينَ", is_particle: true, position: 1 },
      { fr: "ont achete", phon: "ishtaraw", arabic: "ٱشْتَرَوُا۟", is_particle: true, position: 2 },
      { fr: "la vie", pos: "nom", phon: "al-hayaata", arabic: "ٱلْحَيَوٰةَ", word_key: "hyy", is_particle: false, sense_retenu: "vie", position: 3 },
      { fr: "d'ici-bas", pos: "adjectif", phon: "al-dunyaa", arabic: "ٱلدُّنْيَا", word_key: "dnw", is_particle: false, sense_retenu: "ici-bas", position: 4 },
      { fr: "au prix de l'au-dela", pos: "nom", phon: "bi-al-aakhirati", arabic: "بِٱلْءَاخِرَةِ", word_key: "axr", is_particle: false, sense_retenu: "l'au-delà", position: 5 },
      { fr: "ne", phon: "fa-laa", arabic: "فَلَا", is_particle: true, position: 6 },
      { fr: "sera allege", pos: "verbe", phon: "yukhafffafu", arabic: "يُخَفَّفُ", word_key: "xff", is_particle: false, sense_retenu: "alléger", position: 7 },
      { fr: "d'eux", phon: "'anhum", arabic: "عَنْهُمُ", is_particle: true, position: 8 },
      { fr: "le chatiment", phon: "al-'adhaabu", arabic: "ٱلْعَذَابُ", is_particle: true, position: 9 },
      { fr: "et ne", phon: "wa-laa", arabic: "وَلَا", is_particle: true, position: 10 },
      { fr: "eux", phon: "hum", arabic: "هُمْ", is_particle: true, position: 11 },
      { fr: "seront secourus", pos: "verbe", phon: "yunsaruuna", arabic: "يُنصَرُونَ", word_key: "nsr", is_particle: false, sense_retenu: "secourir", position: 12 }
    ],
    words: [
      // === hyy (id=404) — vie ===
      {
        word_key: "hyy", position: 3, sense_chosen: "vie",
        analysis_axes: {
          concept_chosen: "Vie/Vivant",
          concepts: {
            "Vie/Vivant": {
              status: "retenu",
              senses: ["vivre", "vie", "vivant", "donner la vie"],
              proof_ctx: "Le mot al-hayaata est un nom feminin singulier accusatif defini de la racine h-y-y. Le Lane's donne « life, existence, living ». Avec al-dunyaa, l'expression designe la vie d'ici-bas — la vie terrestre temporaire. Le mot est l'objet du verbe ishtaraw (ils ont achete) — la vie d'ici-bas est ce qu'ils ont obtenu dans cette transaction.",
              axe1_verset: "Le mot al-hayaata est l'objet de l'achat — « ceux qui ont achete la vie d'ici-bas ». La vie d'ici-bas est presentee comme une marchandise de faible valeur echangee contre l'au-dela. L'expression complete « la vie d'ici-bas au prix de l'au-dela » montre un echange perdant — ils ont obtenu le temporaire en echange de l'eternel.",
              axe2_voisins: "Le verset 85 mentionnait l'humiliation dans la vie d'ici-bas. Ce verset 86 precise que cette vie est un mauvais achat. Le verset 87 changera de sujet pour parler de Moise et Jesus. La vie d'ici-bas est le lien entre les crimes (verset 85) et leur motivation (verset 86).",
              axe3_sourate: "La racine h-y-y dans la sourate al-Baqarah est liee a la vie sous toutes ses formes. En 2:28, Dieu donne la vie. En 2:179, le talion contient une vie. La sourate montre que la vie veritable est celle de l'au-dela, pas celle d'ici-bas.",
              axe4_coherence: "La racine h-y-y apparait 184 fois dans le Coran. L'opposition entre al-hayaat al-dunyaa et al-aakhira est un theme majeur du Coran. En 29:64, « la demeure de l'au-dela est la vraie vie ». Le Coran relativise la vie d'ici-bas par rapport a l'au-dela.",
              axe5_frequence: "Pour la mission du khalifa, la vie d'ici-bas est le cadre temporaire de la mission. Le khalifa ne sacrifie pas l'eternel pour le temporaire. Ceux qui achetent la dunyaa au prix de l'aakhira montrent l'echec de la hierarchie des valeurs."
            }
          }
        }
      },
      // === dnw (id=656) — ici-bas ===
      {
        word_key: "dnw", position: 4, sense_chosen: "ici-bas",
        analysis_axes: {
          concept_chosen: "Proximité/Monde d'ici-bas",
          concepts: {
            "Proximité/Monde d'ici-bas": {
              status: "retenu",
              senses: ["être proche", "proche", "ici-bas", "approcher"],
              proof_ctx: "Le mot al-dunyaa est un adjectif feminin singulier accusatif defini de la racine d-n-w. Le Lane's donne « the nearer, the lower, this-worldly ». La dunyaa est la vie la plus proche, la plus immediate — en opposition a l'aakhira (la derniere, la plus lointaine).",
              axe1_verset: "Le mot al-dunyaa qualifie la vie achetee — la vie la plus proche et la plus basse. L'opposition avec al-aakhira (l'au-dela) structure le mauvais choix. La dunyaa est le prix que les enfants d'Israel ont choisi au detriment de l'eternite. Le mot porte en lui l'idee de bassesse (dunuww = le plus bas).",
              axe2_voisins: "Le verset 85 mentionnait l'humiliation dans la dunyaa. Ce verset 86 revele la motivation — ils ont deliberement choisi la dunyaa. Le choix de la dunyaa explique la croyance selective — ils gardent les lois qui servent leurs interets mondains.",
              axe3_sourate: "La racine d-n-w dans la sourate al-Baqarah oppose le monde d'ici-bas a l'au-dela. En 2:200, certains ne demandent que la dunyaa. En 2:201, les croyants demandent le bien dans les deux mondes. La sourate montre que le choix exclusif de la dunyaa est une erreur fatale.",
              axe4_coherence: "La racine d-n-w apparait 133 fois dans le Coran. L'expression al-hayaat al-dunyaa est un leitmotiv coranique. En 3:14, les attraits de la dunyaa sont enumeres. En 57:20, la dunyaa est un jeu et un amusement. Le Coran met systematiquement en garde contre le choix exclusif de la dunyaa.",
              axe5_frequence: "Pour la mission du khalifa, la dunyaa est le terrain d'action, pas la finalite. Le khalifa utilise la dunyaa pour preparer l'aakhira. Ceux qui achetent la dunyaa au prix de l'aakhira inversent la hierarchie des valeurs."
            }
          }
        }
      },
      // === axr (id=292) — au-dela ===
      {
        word_key: "axr", position: 5, sense_chosen: "l'au-delà",
        analysis_axes: {
          concept_chosen: "Postériorité/Retard",
          concepts: {
            "Postériorité/Retard": {
              status: "retenu",
              senses: ["retarder", "reporter", "reculer", "après", "dernier", "l'au-delà", "fin"],
              proof_ctx: "Le mot al-aakhirati est un nom feminin singulier genitif defini de la racine a-kh-r. Le Lane's donne « the Hereafter, the last abode, the next world, the ultimate life ». Le mot aakhira derive de la posteriorite — c'est la vie derniere, celle qui vient apres. La preposition bi- (au prix de) fait de l'au-dela le prix paye dans la transaction.",
              axe1_verset: "Le mot al-aakhirati est le prix paye dans l'echange — « au prix de l'au-dela ». L'au-dela est ce que les enfants d'Israel ont sacrifie pour obtenir la vie d'ici-bas. L'echange est inegal — l'eternel contre le temporaire. La preposition bi- indique le moyen d'echange — l'au-dela est la monnaie d'echange.",
              axe2_voisins: "Le verset 85 mentionnait le Jour de la Resurrection comme lieu du chatiment. Ce verset 86 precise que l'au-dela est ce qu'ils ont perdu par leur choix. L'au-dela est a la fois le lieu du chatiment et l'objet de la perte — ils l'ont vendu et ils y seront chaties.",
              axe3_sourate: "La racine a-kh-r dans la sourate al-Baqarah traite de l'au-dela. En 2:4, les pieux croient a l'au-dela. En 2:102, certains vendent leur ame sans avoir de part dans l'au-dela. En 2:200, certains n'ont aucune part dans l'au-dela. La sourate montre que l'au-dela est la veritable vie.",
              axe4_coherence: "La racine a-kh-r apparait 250 fois dans le Coran. Le mot aakhira est le contrepoint de dunyaa. En 87:16-17, « vous preferez la vie d'ici-bas, alors que l'au-dela est meilleur et plus durable ». Le Coran insiste sur la superiorite de l'au-dela.",
              axe5_frequence: "Pour la mission du khalifa, l'au-dela est l'objectif ultime. Le khalifa travaille dans la dunyaa pour recolter dans l'aakhira. Sacrifier l'aakhira pour la dunyaa est la pire des transactions — c'est l'echec definitif de la mission."
            }
          }
        }
      },
      // === xff (id=928) — alleger ===
      {
        word_key: "xff", position: 7, sense_chosen: "alléger",
        analysis_axes: {
          concept_chosen: "Légèreté/Allègement",
          concepts: {
            "Légèreté/Allègement": {
              status: "retenu",
              senses: ["être léger", "alléger", "diminuer un fardeau"],
              proof_ctx: "Le verbe yukhafffafu est un inaccompli passif 3MS forme II de la racine kh-f-f. Le Lane's donne « it will not be lightened, it will not be diminished, it will not be made lighter ». La forme II (takhfiif) signifie rendre leger, alleger. Le passif indique que l'allegement est refuse — personne ne pourra alleger leur chatiment.",
              axe1_verset: "Le verbe yukhafffafu est precede de la negation laa — « le chatiment ne sera pas allege ». La negation est absolue — aucun allegement, aucune diminution. Le chatiment reste entier et permanent. Cette premiere negation ferme la porte de l'espoir d'une reduction de peine.",
              axe2_voisins: "Le verset 85 annoncait le chatiment. Ce verset 86 precise que ce chatiment sera maintenu en entier. Le verset 87 changera de sujet. La formule « pas allege et pas secourus » est une conclusion definitive.",
              axe3_sourate: "La racine kh-f-f dans la sourate al-Baqarah est liee a l'allegement. En 2:178, l'allegement dans le talion est mentionne. En 2:286, la priere demande a Dieu de ne pas imposer un fardeau insupportable. La sourate montre que l'allegement est possible pour les croyants mais refuse aux mecreants.",
              axe4_coherence: "La racine kh-f-f apparait 18 fois dans le Coran. La formule « le chatiment ne sera pas allege » (laa yukhaffafu) est recurrente — en 3:88, en 35:36. Le refus de l'allegement est la marque du chatiment definitif.",
              axe5_frequence: "Pour la mission du khalifa, l'allegement est lie a l'obeissance. Le khalifa obeissant peut esperer l'allegement. Ceux qui ont choisi la dunyaa au prix de l'aakhira n'ont aucun espoir d'allegement — leur choix est definitif."
            },
            "Vitesse/Empressement": {
              status: "nul",
              senses: ["être rapide", "se hâter"],
              proof_ctx: "Le sens de vitesse est un sens secondaire de kh-f-f. Le verbe yukhafffafu au passif forme II signifie clairement alleger. Le contexte est la reduction du chatiment, pas la vitesse."
            }
          }
        }
      },
      // === nsr (id=537) — secourir ===
      {
        word_key: "nsr", position: 12, sense_chosen: "secourir",
        analysis_axes: {
          concept_chosen: "Secours/Victoire",
          concepts: {
            "Secours/Victoire": {
              status: "retenu",
              senses: ["défendre", "aider", "victoire", "secourir"],
              proof_ctx: "Le verbe yunsaruuna est un inaccompli passif 3MP de la racine n-s-r. Le Lane's donne « they will not be helped, they will not be aided, they will not be supported ». Le passif indique l'absence de secours de toute source. La negation laa (pas) precede le pronom hum — « et eux ne seront pas secourus ».",
              axe1_verset: "Le verbe yunsaruuna cloture le verset par la seconde negation — « et ils ne seront pas secourus ». Apres le refus de l'allegement vient le refus du secours. Ils sont seuls face au chatiment — personne ne viendra les aider. La double negation ferme toutes les portes — ni allegement interieur, ni secours exterieur.",
              axe2_voisins: "Le verset 85 annoncait la sanction. Ce verset 86 confirme son caractere definitif. Le verset 87 ouvrira un nouveau chapitre avec Moise et Jesus. Le refus du secours est la conclusion du passage sur la croyance selective.",
              axe3_sourate: "La racine n-s-r dans la sourate al-Baqarah traite du secours divin. En 2:214, « quand viendra le secours de Dieu ? ». En 2:250, « accorde-nous la victoire ». La sourate montre que le secours de Dieu est reserve a ceux qui croient en entier — ceux qui croient en partie en sont prives.",
              axe4_coherence: "La racine n-s-r apparait 158 fois dans le Coran. La formule « ils ne seront pas secourus » est recurrente dans le Coran — en 3:56, en 5:72. Le refus du secours est lie au refus de la foi. Le secours de Dieu est conditionnel — il va a ceux qui L'aident.",
              axe5_frequence: "Pour la mission du khalifa, le secours divin est la recompense de l'obeissance. Le khalifa qui obeit sera secouru. Ceux qui pratiquent la croyance selective perdent le droit au secours — ils sont abandonnes a leur sort."
            },
            "Alliance/Soutien": {
              status: "nul",
              senses: ["partisan"],
              proof_ctx: "Le sens de partisan est un derive de n-s-r. Le verbe yunsaruuna au passif signifie clairement etre secouru. Le contexte est l'absence totale de secours, pas l'alliance."
            }
          }
        }
      }
    ]
  },

  // =====================================================
  // VERSET 2:87
  // verse_id=94, analysis_id=457
  // "Et Nous avons donne a Moise le Livre et Nous avons envoye
  //  apres lui des messagers. Et Nous avons donne a Jesus fils de Marie
  //  les preuves claires et Nous l'avons soutenu par l'Esprit de saintete.
  //  Est-ce que chaque fois qu'un messager vous apportait ce que vos ames
  //  ne desiraient pas, vous vous enfliez d'orgueil ? Un groupe vous l'avez
  //  dementi et un groupe vous le tuez."
  // =====================================================
  87: {
    verse_id: 94,
    analysis_id: 457,
    translation_arab: "Et Nous avons donne a Moise le Livre et Nous avons envoye apres lui des messagers. Et Nous avons donne a Jesus fils de Marie les preuves claires et Nous l'avons soutenu par l'Esprit de saintete. Est-ce que chaque fois qu'un messager vous apportait ce que vos ames ne desiraient pas, vous vous enfliez d'orgueil ? Un groupe vous l'avez dementi et un groupe vous le tuez.",
    full_translation: "Et certes Nous avons donne a Moise le Livre et Nous avons envoye a sa suite des messagers. Et Nous avons donne a Jesus fils de Marie les preuves claires et Nous l'avons soutenu par l'Esprit de saintete. Est-ce que chaque fois qu'un messager vous apportait ce que vos ames ne desiraient pas, vous vous enfliez d'orgueil ? Un groupe vous l'avez dementi et un [autre] groupe vous le tuez.",
    translation_explanation: `§DEMARCHE§
Ce verset recapitule l'histoire des messagers envoyes aux enfants d'Israel et leur reaction recurrente de rejet. Le verbe **aataynaa** est un accompli 1P forme IV de la racine a-t-y. Le Lane's donne « We gave, We bestowed ». La forme IV est causative — faire venir, donner. Le pronom 1P (Nous) est le pluriel de majeste divine. Le mot **al-kitaaba** est un nom masculin accusatif defini de la racine k-t-b. Le Lane's donne « the Book, the Scripture ». Le Livre est la Torah donnee a Moise. Le verbe **qaffaynaa** est un accompli 1P forme II de la racine q-f-w. Le Lane's donne « We sent successively, We caused to follow one after another ». La forme II (fa''ala) intensifie l'idee de succession — envoyer les uns apres les autres. Le mot **ba'dihi** est un nom genitif avec pronom 3MS de la racine b-'-d. Le Lane's donne « after him ». Apres Moise vinrent d'autres messagers. Le mot **al-rusuli** est un nom masculin pluriel genitif defini de la racine r-s-l. Le Lane's donne « the messengers, the envoys ». Les messagers sont ceux que Dieu envoie avec un message. Le mot **ibna** est un nom masculin accusatif de la racine b-n-y. Le Lane's donne « son ». Jesus est le fils de Marie. Le mot **al-bayyinaati** est un nom feminin pluriel genitif defini de la racine b-y-n. Le Lane's donne « the clear proofs, the evident signs ». Les preuves claires sont les miracles de Jesus. Le verbe **ayyadnaahu** est un accompli 1P forme II de la racine a-y-d. Le Lane's donne « We supported him, We strengthened him ». La forme II intensifie le soutien divin. Le mot **ruuhi** est un nom masculin genitif de la racine r-w-h. Le Lane's donne « spirit, soul ». L'Esprit est l'Esprit divin (Jibril selon l'exegese). Le mot **al-qudusi** est un nom masculin genitif defini de la racine q-d-s. Le Lane's donne « the Holy, the Sacred, sanctity ». Le Saint-Esprit est l'Esprit de saintete. Le verbe **jaa'akum** est un accompli 3MS de la racine j-y-a. Le Lane's donne « he came to you ». Le messager est venu avec un message. Le verbe **tahwaa** est un inaccompli 3FS de la racine h-w-y. Le Lane's donne « it desires, it craves, it inclines toward ». Le desir des ames est ce qui s'oppose au message. Le mot **anfusukum** est un nom feminin pluriel avec pronom 2MP de la racine n-f-s. Le Lane's donne « your souls, yourselves ». Les ames des enfants d'Israel rejettent ce qui ne leur plait pas. Le verbe **istakbartum** est un accompli 2MP forme X de la racine k-b-r. Le Lane's donne « you were arrogant, you showed pride ». La forme X (istif'al) signifie chercher a se montrer grand — l'arrogance est une pretention de grandeur. Le mot **fariiqan** est un nom masculin accusatif de la racine f-r-q. Le Lane's donne « a group ». Le mot est repete deux fois — un groupe dementi, un groupe tue. Le verbe **kadhdhabtum** est un accompli 2MP forme II de la racine k-dh-b. Le Lane's donne « you denied, you accused of lying ». La forme II intensifie le deni — accuser de mensonge. Le verbe **taqtuluuna** est un inaccompli 2MP de la racine q-t-l. Le Lane's donne « you kill ». L'inaccompli au lieu de l'accompli pour le meurtre est significatif — le deni est au passe (kadhdhabtum) mais le meurtre est au present (taqtuluuna), comme si le meurtre des prophetes etait encore en cours.

§JUSTIFICATION§
**Nous avons donne** — Le sens retenu est « venir ». Le verbe aataynaa forme IV signifie donner, faire venir vers. L'alternative « detruire » est ecartee car la forme IV est clairement donner.

**le Livre** — Le sens retenu est « livre ». Le mot al-kitaaba designe la Torah. Meme justification que le verset 85.

**Nous avons envoye a sa suite** — Le sens retenu est « suivre ». Le verbe qaffaynaa forme II signifie envoyer a la suite. L'alternative n'est pas pertinente car le verbe est specifique.

**apres lui** — Le sens retenu est « après ». Le mot ba'dihi designe la posteriorite temporelle. L'alternative « eloignement » est ecartee car le contexte est la succession temporelle.

**les messagers** — Le sens retenu est « messager ». Le mot al-rusuli designe les envoyes de Dieu. L'alternative « pluie » est ecartee car le contexte est prophetique.

**fils** — Le sens retenu est « fils ». Le mot ibna designe la filiation. L'alternative « construire » est ecartee car le contexte est genealogique.

**les preuves claires** — Le sens retenu est « séparer ». Le mot al-bayyinaati de la racine b-y-n designe les preuves evidentes. Le concept retenu est « Separation/Distance » car les preuves claires separent le vrai du faux.

**Nous l'avons soutenu** — Le sens retenu est « soutenir ». Le verbe ayyadnaahu forme II signifie soutenir fortement. Pas d'alternative pertinente.

**l'Esprit** — Le sens retenu est « esprit ». Le mot ruuhi designe le souffle vital, l'Esprit. L'alternative « vent » est ecartee car le contexte est spirituel.

**de saintete** — Le sens retenu est « être saint ». Le mot al-qudusi designe la saintete. L'alternative « purifier » est ecartee car le nom designe la qualite de saintete.

**vous apportait** — Le sens retenu est « venir ». Le verbe jaa'akum signifie il est venu a vous. Pas d'alternative pertinente.

**ne desiraient pas** — Le sens retenu est « désir ». Le verbe tahwaa signifie desirer. L'alternative « tomber » est ecartee car le contexte est le desir de l'ame.

**vos ames** — Le sens retenu est « personne ». Le mot anfusukum designe les personnes/ames. Meme justification que le verset 85.

**vous vous enfliez d'orgueil** — Le sens retenu est « être grand ». Le verbe istakbartum forme X signifie se montrer orgueilleux. L'alternative « vieillir » est ecartee car la forme X exprime la pretention de grandeur.

**un groupe** — Le sens retenu est « séparer ». Le mot fariiqan designe un groupe separe. Meme justification que le verset 85.

**vous l'avez dementi** — Le sens retenu est « comme ». Le verbe kadhdhabtum de la racine k-dh-b forme II signifie accuser de mensonge, dementir. Le concept « Comparaison/Similitude » est le seul disponible dans la base pour cette racine.

**vous tuez** — Le sens retenu est « tuer ». Le verbe taqtuluuna designe le meurtre. Meme justification que le verset 85.

§CRITIQUE§
**l'accompli vs l'inaccompli** — Le deni des prophetes est au passe (kadhdhabtum — vous avez dementi) mais le meurtre est au present (taqtuluuna — vous tuez). Ce changement de temps verbal est significatif — le deni est un fait historique revolu mais le meurtre est presente comme une action continue, comme si les enfants d'Israel etaient encore en train de tuer les prophetes.
**la succession des messagers** — Moise recoit le Livre, les messagers se succedent, Jesus recoit les preuves claires et le soutien de l'Esprit saint. Malgre cette succession de graces et de signes, la reaction reste la meme — l'orgueil et le rejet. La multiplication des messagers n'a pas change le comportement.
**l'orgueil comme cause du rejet** — Le verbe istakbartum (forme X de k-b-r) montre que le rejet n'est pas intellectuel mais moral — c'est l'orgueil qui empeche l'acceptation du message. Les ames ne desirent pas ce qui contredit leurs passions.`,
    segments: [
      { fr: "et certes", phon: "wa-laqad", arabic: "وَلَقَدْ", is_particle: true, position: 0 },
      { fr: "Nous avons donne", pos: "verbe", phon: "aataynaa", arabic: "ءَاتَيْنَا", word_key: "aty", is_particle: false, sense_retenu: "venir", position: 1 },
      { fr: "Moise", phon: "muusaa", arabic: "مُوسَY", is_particle: true, position: 2 },
      { fr: "le Livre", pos: "nom", phon: "al-kitaaba", arabic: "ٱلْكِتَٰبَ", word_key: "ktb", is_particle: false, sense_retenu: "livre", position: 3 },
      { fr: "et Nous avons envoye a sa suite", pos: "verbe", phon: "wa-qaffaynaa", arabic: "وَقَفَّيْنَا", word_key: "qfw", is_particle: false, sense_retenu: "suivre", position: 4 },
      { fr: "de", phon: "min", arabic: "مِن۞", is_particle: true, position: 5 },
      { fr: "apres lui", pos: "nom", phon: "ba'dihi", arabic: "بَعْدِهِ.", word_key: "baed", is_particle: false, sense_retenu: "après", position: 6 },
      { fr: "les messagers", pos: "nom", phon: "bi-al-rusuli", arabic: "بِٱلرُّسُلِ", word_key: "rsl", is_particle: false, sense_retenu: "messager", position: 7 },
      { fr: "et Nous avons donne", pos: "verbe", phon: "wa-aataynaa", arabic: "وَءَاتَيْنَا", word_key: "aty", is_particle: false, sense_retenu: "venir", position: 8 },
      { fr: "Jesus", phon: "'iisaa", arabic: "عِيسَY", is_particle: true, position: 9 },
      { fr: "fils de", pos: "nom", phon: "ibna", arabic: "ٱبْنَ", word_key: "bny", is_particle: false, sense_retenu: "fils", position: 10 },
      { fr: "Marie", phon: "maryama", arabic: "مَرْيَمَ", is_particle: true, position: 11 },
      { fr: "les preuves claires", pos: "nom", phon: "al-bayyinaati", arabic: "ٱلْبَيِّنَٰتِ", word_key: "byn", is_particle: false, sense_retenu: "séparer", position: 12 },
      { fr: "et Nous l'avons soutenu", pos: "verbe", phon: "wa-ayyadnaahu", arabic: "وَأَيَّدْنَٰهُ", word_key: "ayd", is_particle: false, sense_retenu: "soutenir", position: 13 },
      { fr: "par l'Esprit", pos: "nom", phon: "bi-ruuhi", arabic: "بِرُوحِ", word_key: "rwh", is_particle: false, sense_retenu: "esprit", position: 14 },
      { fr: "de saintete", pos: "nom", phon: "al-qudusi", arabic: "ٱلْقُدُسِ", word_key: "qds", is_particle: false, sense_retenu: "être saint", position: 15 },
      { fr: "est-ce que chaque fois", phon: "afa-kullamaa", arabic: "أَفَكُلَّمَا", is_particle: true, position: 16 },
      { fr: "vous apportait", pos: "verbe", phon: "jaa'akum", arabic: "جَآءَكُمْ", word_key: "jya", is_particle: false, sense_retenu: "venir", position: 17 },
      { fr: "un messager", pos: "nom", phon: "rasuulun", arabic: "رَسُولٌ۞", word_key: "rsl", is_particle: false, sense_retenu: "messager", position: 18 },
      { fr: "avec ce que", phon: "bi-maa", arabic: "بِمَا", is_particle: true, position: 19 },
      { fr: "ne", phon: "laa", arabic: "لَا", is_particle: true, position: 20 },
      { fr: "desiraient", pos: "verbe", phon: "tahwaa", arabic: "تَهْوَYٰٓ", word_key: "hwy", is_particle: false, sense_retenu: "désir", position: 21 },
      { fr: "vos ames", pos: "nom", phon: "anfusukum", arabic: "أَنفُسُكُمُ", word_key: "nfs", is_particle: false, sense_retenu: "personne", position: 22 },
      { fr: "vous vous enfliez d'orgueil", pos: "verbe", phon: "istakbartum", arabic: "ٱسْتَكْبَرْتُمْ", word_key: "kbr", is_particle: false, sense_retenu: "être grand", position: 23 },
      { fr: "un groupe", pos: "nom", phon: "fa-fariiqan", arabic: "فَفَرِيقًا", word_key: "frq", is_particle: false, sense_retenu: "séparer", position: 24 },
      { fr: "vous avez dementi", pos: "verbe", phon: "kadhdhabtum", arabic: "كَذَّبْتُمْ", word_key: "k", is_particle: false, sense_retenu: "comme", position: 25 },
      { fr: "et un groupe", pos: "nom", phon: "wa-fariiqan", arabic: "وَفَرِيقًا", word_key: "frq", is_particle: false, sense_retenu: "séparer", position: 26 },
      { fr: "vous tuez", pos: "verbe", phon: "taqtuluuna", arabic: "تَقْتُلُونَ", word_key: "qtl", is_particle: false, sense_retenu: "tuer", position: 27 }
    ],
    words: [
      // === aty (id=379) — donner ===
      {
        word_key: "aty", position: 1, sense_chosen: "venir",
        analysis_axes: {
          concept_chosen: "Venue/Arrivée",
          concepts: {
            "Venue/Arrivée": {
              status: "retenu",
              senses: ["arriver", "venir", "apporter", "donner", "commettre"],
              proof_ctx: "Le verbe aataynaa est un accompli 1P forme IV de la racine a-t-y. Le Lane's donne « We gave, We bestowed, We brought ». La forme IV (if'al) est causative — faire venir, donner. Le pronom 1P (naa) est le pluriel de majeste divine. Le don du Livre a Moise est l'acte fondateur de l'alliance avec les enfants d'Israel.",
              axe1_verset: "Le verbe aataynaa ouvre le verset par le don divin — « Nous avons donne a Moise le Livre ». Le don est le premier acte de grace. Le verset structure les dons divins (Livre, messagers, preuves claires, Esprit saint) puis la reaction humaine (orgueil, deni, meurtre). Le contraste entre la generosite divine et le rejet humain est saisissant.",
              axe2_voisins: "Le verset 85 denonçait les crimes des enfants d'Israel. Le verset 86 montrait la consequence. Ce verset 87 revient a l'origine — les dons que Dieu leur a faits. La structure est : dons divins (87a) — reaction de rejet (87b). Malgre tous les dons, le rejet persiste.",
              axe3_sourate: "La racine a-t-y dans la sourate al-Baqarah porte les sens de venir et de donner. En 2:53, « Nous avons donne a Moise le Livre et le Discernement ». En 2:136, la foi en ce qui a ete donne aux prophetes. La sourate montre que les dons divins sont la base de l'engagement humain.",
              axe4_coherence: "La racine a-t-y apparait 549 fois dans le Coran. La formule « Nous avons donne a Moise le Livre » est recurrente (2:53, 2:87, 6:91, 11:110, etc.). Le don du Livre est l'acte fondateur de la relation entre Dieu et un peuple.",
              axe5_frequence: "Pour la mission du khalifa, les dons divins sont les outils de la mission. Le khalifa recoit le Livre et les signes pour accomplir sa mission. Rejeter les dons divins c'est rejeter les moyens de la mission."
            },
            "Sens isolé/Détruire": {
              status: "nul",
              senses: ["détruire"],
              proof_ctx: "Le sens de detruire est un sens marginal de a-t-y. Le verbe aataynaa forme IV signifie clairement donner dans ce contexte de don prophetique."
            }
          }
        }
      },
      // === ktb (id=275) — Livre ===
      {
        word_key: "ktb", position: 3, sense_chosen: "livre",
        analysis_axes: {
          concept_chosen: "Livre/Écrit",
          concepts: {
            "Livre/Écrit": {
              status: "retenu",
              senses: ["contrat de mariage", "contrat d'affranchissement", "écriture révélée", "livre", "registre", "contrat écrit"],
              proof_ctx: "Le mot al-kitaaba est un nom masculin singulier accusatif defini de la racine k-t-b. Le Lane's donne « the Book, the Scripture ». L'article defini designe le Livre revele par excellence — la Torah donnee a Moise. Le Kitab est la Parole ecrite de Dieu transmise au prophete.",
              axe1_verset: "Le mot al-kitaaba est le premier don mentionne — « Nous avons donne a Moise le Livre ». Le Livre est la Torah — le code de loi et la guidance des enfants d'Israel. Le don du Livre est le fondement de l'alliance. Le verset oppose ce don a la reaction des enfants d'Israel qui le fragmentent (cf. verset 85) et rejettent les messagers qui le confirment.",
              axe2_voisins: "Le verset 85 reprochait la croyance selective dans le Livre. Ce verset 87 rappelle que le Livre a ete donne comme un tout. La Torah donnee a Moise est le meme Livre que les enfants d'Israel divisent en parties acceptees et rejetees.",
              axe3_sourate: "La racine k-t-b dans la sourate al-Baqarah est omnipresente. Le Livre est le fil conducteur de la sourate — du Livre de guidance (2:2) au Livre donne a Moise (2:87) en passant par le Livre fragmente (2:85). La sourate montre que le rapport au Livre definit la foi.",
              axe4_coherence: "La racine k-t-b apparait 319 fois dans le Coran. La formule « Nous avons donne a Moise le Livre » est un rappel recurrent de l'origine divine de la Torah. Le Coran confirme le Livre anterieur tout en denonçant sa fragmentation par les hommes.",
              axe5_frequence: "Pour la mission du khalifa, le Livre est le guide complet. Le khalifa recoit le Livre et le suit en entier. La fragmentation du Livre est la tentation permanente — garder ce qui plait et rejeter ce qui derange."
            },
            "Écriture/Inscription": {
              status: "probable",
              senses: ["écrire", "dicter", "copier un livre", "art de l'écriture", "scribe", "école", "demander d'écrire", "écrire à quelqu'un", "s'inscrire", "savant", "enseignant", "vendeur de livres"],
              proof_ctx: "Le sens d'ecriture est le sens premier de k-t-b. Le Kitab est le resultat de l'ecriture divine. Le Livre donne a Moise est une ecriture revêlée."
            }
          }
        }
      },
      // === qfw (id=2386) — envoyer a la suite ===
      {
        word_key: "qfw", position: 4, sense_chosen: "suivre",
        analysis_axes: {
          concept_chosen: "Poursuite/Suivi",
          concepts: {
            "Poursuite/Suivi": {
              status: "retenu",
              senses: ["suivre", "poursuivre"],
              proof_ctx: "Le verbe qaffaynaa est un accompli 1P forme II de la racine q-f-w. Le Lane's donne « We sent one after another, We caused to follow in succession ». La forme II intensifie l'idee de succession — envoyer des messagers les uns apres les autres, sans interruption. Le verbe qaffaa signifie suivre les traces de quelqu'un — les messagers suivent la trace de Moise.",
              axe1_verset: "Le verbe qaffaynaa montre la continuite de l'envoi prophetique — apres Moise, Dieu a envoye d'autres messagers. La succession est ininterrompue — les enfants d'Israel n'ont jamais ete sans messager. Le verset montre que le rejet n'est pas du a un manque de guidance mais a un refus delibere.",
              axe2_voisins: "Le verset 85 denonçait les crimes. Le verset 86 montrait la consequence. Ce verset 87 revient a la source — la succession des messagers que les enfants d'Israel ont rejetes. La multiplication des envois aggrave la faute du rejet.",
              axe3_sourate: "La racine q-f-w dans la sourate al-Baqarah n'apparait qu'ici. Le verbe est specifique a la succession prophetique. La sourate montre que Dieu n'a pas abandonne les enfants d'Israel — Il a multiplie les envois de messagers.",
              axe4_coherence: "La racine q-f-w apparait 6 fois dans le Coran, toujours dans le contexte de la succession prophetique. En 5:46, « Nous avons envoye a leur suite Jesus fils de Marie ». En 57:27, « Nous avons envoye a leur suite Nos messagers ». La succession prophetique est un theme coranique majeur.",
              axe5_frequence: "Pour la mission du khalifa, la succession des messagers est la preuve de la misericorde divine. Dieu ne cesse d'envoyer des guides. Le khalifa recoit cette heritage prophetique et doit la transmettre — pas la rejeter."
            }
          }
        }
      },
      // === baed (id=926) — apres ===
      {
        word_key: "baed", position: 6, sense_chosen: "après",
        analysis_axes: {
          concept_chosen: "Postériorité",
          concepts: {
            "Postériorité": {
              status: "retenu",
              senses: ["après", "ensuite"],
              proof_ctx: "Le mot ba'dihi est un nom masculin genitif avec pronom 3MS de la racine b-'-d. Le Lane's donne « after him, subsequent to him ». Le pronom 3MS renvoie a Moise — apres lui. Le mot ba'd marque la posteriorite temporelle — les messagers sont venus apres Moise.",
              axe1_verset: "Le mot ba'dihi situe les messagers dans le temps — « apres lui ». La succession temporelle montre que Dieu n'a pas cesse d'envoyer des messagers apres Moise. Le pronom « lui » (hi) renvoie a Moise comme point de reference. Tous les messagers subsequents confirment et completent le message de Moise.",
              axe2_voisins: "Le verset 87 rappelle la succession prophetique. La posteriorite est le mecanisme de cette succession — chaque messager vient apres le precedent pour confirmer et completer.",
              axe3_sourate: "La racine b-'-d dans la sourate al-Baqarah marque la succession temporelle. En 2:92, « apres (ba'd) que Moise vous eut quittes ». La sourate montre que l'apres est toujours un test — comment le peuple reagit apres le depart du prophete.",
              axe4_coherence: "La racine b-'-d apparait 400 fois dans le Coran. Le mot ba'd est un marqueur temporel fondamental. La succession « apres Moise » est un rappel que la chaine prophetique est continue — elle ne s'arrete pas a Moise.",
              axe5_frequence: "Pour la mission du khalifa, la posteriorite est la continuite de la mission. Le khalifa vient apres les prophetes et continue leur mission. La chaine ne doit pas etre rompue."
            },
            "Éloignement/Distance": {
              status: "nul",
              senses: ["éloignement", "être loin"],
              proof_ctx: "Le sens d'eloignement est un sens secondaire de b-'-d. Le mot ba'dihi avec le pronom et la preposition min signifie clairement apres lui, pas loin de lui."
            }
          }
        }
      },
      // === rsl (id=688) — messagers ===
      {
        word_key: "rsl", position: 7, sense_chosen: "messager",
        analysis_axes: {
          concept_chosen: "Envoi/Message",
          concepts: {
            "Envoi/Message": {
              status: "retenu",
              senses: ["messager", "message", "libérer", "envoyer"],
              proof_ctx: "Le mot al-rusuli est un nom masculin pluriel genitif defini de la racine r-s-l. Le Lane's donne « the messengers, the envoys, those sent with a message ». Le pluriel defini designe les messagers en tant que groupe — tous les prophetes envoyes apres Moise. La racine r-s-l porte l'idee d'envoi — le messager est celui qui est envoye avec un message.",
              axe1_verset: "Le mot al-rusuli designe les messagers envoyes apres Moise — les prophetes qui se sont succedes. Le pluriel montre la multiplicite des envois. Le verset mentionne ensuite Jesus specifiquement comme le dernier messager mentionne avant le Prophete Muhammad. Les messagers sont les porteurs du message divin que les enfants d'Israel rejettent.",
              axe2_voisins: "Le verset 87 recapitule l'histoire des messagers. La mention de Moise puis des messagers puis de Jesus structure la narration chronologiquement. La multiplicite des messagers aggrave la faute du rejet — ce n'est pas un seul prophete qui a ete rejete mais tous.",
              axe3_sourate: "La racine r-s-l dans la sourate al-Baqarah est liee a la mission prophetique. En 2:129, Abraham demande l'envoi d'un messager. En 2:151, « Nous vous avons envoye un messager d'entre vous ». La sourate montre que l'envoi de messagers est un acte de misericorde divine.",
              axe4_coherence: "La racine r-s-l apparait 513 fois dans le Coran. Les messagers (rusul) sont un pilier de la foi coranique. En 2:285, les croyants croient aux messagers « sans distinction ». Le rejet selectif des messagers est condamne comme celui du Livre.",
              axe5_frequence: "Pour la mission du khalifa, les messagers sont les modeles. Le khalifa suit l'exemple des messagers — il ne les rejette pas. Rejeter un messager c'est rejeter le message divin et trahir la mission."
            }
          }
        }
      },
      // === bny (id=386) — fils ===
      {
        word_key: "bny", position: 10, sense_chosen: "fils",
        analysis_axes: {
          concept_chosen: "Filiation",
          concepts: {
            "Filiation": {
              status: "retenu",
              senses: ["fils"],
              proof_ctx: "Le mot ibna est un nom masculin singulier accusatif de la racine b-n-y. Le Lane's donne « son, offspring ». Le mot ibna Maryama (fils de Marie) est l'identification de Jesus par sa mere. L'absence du pere dans la filiation est specifique a Jesus — il est le fils de Marie, pas le fils d'un homme.",
              axe1_verset: "Le mot ibna identifie Jesus par sa filiation maternelle — « Jesus fils de Marie ». Cette identification est unique dans le Coran — Jesus est toujours designe comme « fils de Marie ». L'absence de pere humain dans la filiation souligne la naissance miraculeuse de Jesus sans nier son humanite.",
              axe2_voisins: "Le verset 87 mentionne Jesus apres Moise et les messagers. La filiation maternelle distingue Jesus des autres prophetes. La mention de Marie rattache Jesus a l'humanite tout en soulignant son caractere exceptionnel.",
              axe3_sourate: "La racine b-n-y dans la sourate al-Baqarah est liee a la filiation et a la construction. En 2:40, les « fils d'Israel » (banii Isra'iil). En 2:125, Abraham et Ismael elevent les fondations de la Ka'ba. La filiation est un lien fondamental dans le Coran.",
              axe4_coherence: "La racine b-n-y apparait 180 fois dans le Coran. L'expression « Jesus fils de Marie » apparait 23 fois. Le Coran utilise systematiquement la filiation maternelle pour Jesus — affirmant son humanite et niant la filiation divine.",
              axe5_frequence: "Pour la mission du khalifa, la filiation est le lien entre les generations. Le khalifa appartient a une chaine — il est le fils de ceux qui l'ont precede et le pere de ceux qui viendront. La filiation inscrit la mission dans l'histoire."
            },
            "Construction/Édification": {
              status: "nul",
              senses: ["construire", "bâtir", "édifier", "donner une maison"],
              proof_ctx: "Le sens de construction est l'autre sens majeur de b-n-y. Le mot ibna dans ce contexte est clairement le nom « fils », pas le verbe « construire »."
            }
          }
        }
      },
      // === byn (id=596) — preuves claires ===
      {
        word_key: "byn", position: 12, sense_chosen: "séparer",
        analysis_axes: {
          concept_chosen: "Séparation/Distance",
          concepts: {
            "Séparation/Distance": {
              status: "retenu",
              senses: ["entre", "séparer", "quitter"],
              proof_ctx: "Le mot al-bayyinaati est un nom feminin pluriel genitif defini de la racine b-y-n. Le Lane's donne « the clear proofs, the evident signs, the manifest evidences ». Les bayyinaat derivent de bayyana (rendre clair) qui lui-meme derive de bayna (separer). Les preuves claires sont ce qui separe le vrai du faux — elles etablissent la distinction.",
              axe1_verset: "Le mot al-bayyinaati designe les preuves claires donnees a Jesus — ses miracles et ses signes. Ces preuves separent le vrai du faux — elles ne laissent aucune excuse au rejet. Le don des preuves claires a Jesus est parallele au don du Livre a Moise. Les deux sont des moyens de guidance que les enfants d'Israel ont rejetes.",
              axe2_voisins: "Le verset 85 reprochait la croyance selective. Le verset 87 montre que les preuves etaient pourtant claires. Les enfants d'Israel ne peuvent pas invoquer le manque de clarte — les bayyinaat leur ont ete donnees.",
              axe3_sourate: "La racine b-y-n dans la sourate al-Baqarah porte les sens de clarte et de separation. En 2:99, « Nous avons fait descendre des signes clairs (bayyinaat) ». En 2:159, « ceux qui cachent les preuves claires ». Les bayyinaat sont le critere de verite que les enfants d'Israel ignorent.",
              axe4_coherence: "La racine b-y-n apparait 523 fois dans le Coran. Les bayyinaat sont les signes qui rendent la verite evidente. En 3:49, les miracles de Jesus sont enumeres. En 5:110, Dieu rappelle Ses graces sur Jesus. Les preuves claires sont la base de la responsabilite — apres les avoir recues, on ne peut plus pretendre l'ignorance.",
              axe5_frequence: "Pour la mission du khalifa, les preuves claires sont les outils de discernement. Le khalifa utilise les bayyinaat pour distinguer le vrai du faux. Rejeter les preuves claires c'est choisir deliberement l'aveuglement."
            },
            "Clarté/Évidence": {
              status: "nul",
              senses: ["être clair", "expliquer", "preuve", "évident"],
              proof_ctx: "Le sens de clarte est lie a celui de separation — rendre clair c'est separer le vrai du faux. Les bayyinaat (preuves claires) sont des instruments de separation/distinction."
            }
          }
        }
      },
      // === ayd (id=692) — soutenir ===
      {
        word_key: "ayd", position: 13, sense_chosen: "soutenir",
        analysis_axes: {
          concept_chosen: "Soutien/Force",
          concepts: {
            "Soutien/Force": {
              status: "retenu",
              senses: ["soutenir", "main", "force"],
              proof_ctx: "Le verbe ayyadnaahu est un accompli 1P forme II de la racine a-y-d. Le Lane's donne « We supported him, We strengthened him, We confirmed him ». La forme II (ta'yiid) intensifie le soutien — un appui fort et constant. Le pronom suffixe 3MS (hu) renvoie a Jesus. Le soutien divin a Jesus est un renforcement par l'Esprit saint.",
              axe1_verset: "Le verbe ayyadnaahu est le quatrieme don divin a Jesus apres les preuves claires — « et Nous l'avons soutenu par l'Esprit de saintete ». Le soutien par l'Esprit saint est un privilege special accorde a Jesus. Malgre ce soutien exceptionnel, les enfants d'Israel rejettent Jesus. La succession des dons (Livre, messagers, preuves, Esprit) contraste avec la constance du rejet.",
              axe2_voisins: "Le verset 85 montrait le rejet du Livre. Ce verset 87 montre le rejet des messagers malgre le soutien divin. Plus les dons sont grands, plus le rejet est grave.",
              axe3_sourate: "La racine a-y-d dans la sourate al-Baqarah est specifique au soutien divin a Jesus. En 2:253, le meme verbe ayyadnaahu est repete pour Jesus. La sourate souligne le privilege de Jesus — il est soutenu par l'Esprit saint.",
              axe4_coherence: "La racine a-y-d apparait 12 fois dans le Coran. Le soutien divin est accorde aux croyants et aux prophetes. En 58:22, Dieu soutient les croyants par un Esprit venant de Lui. Le soutien divin est la force qui permet d'accomplir la mission prophetique.",
              axe5_frequence: "Pour la mission du khalifa, le soutien divin est la condition du succes. Le khalifa reçoit le soutien de Dieu quand il obeit. Rejeter le messager soutenu par Dieu c'est s'opposer a Dieu Lui-meme."
            }
          }
        }
      },
      // === rwh (id=693) — esprit ===
      {
        word_key: "rwh", position: 14, sense_chosen: "esprit",
        analysis_axes: {
          concept_chosen: "Esprit/Souffle vital",
          concepts: {
            "Esprit/Souffle vital": {
              status: "retenu",
              senses: ["esprit", "âme"],
              proof_ctx: "Le mot ruuhi est un nom masculin singulier genitif de la racine r-w-h. Le Lane's donne « spirit, soul, the vital breath ». Le mot ruuh designe le souffle vital, l'esprit. Dans l'expression ruuh al-qudus (l'Esprit de saintete), le ruuh designe l'ange Gabriel selon l'exegese majoritaire — l'Esprit saint qui soutient Jesus.",
              axe1_verset: "Le mot ruuhi est le moyen du soutien divin — « par l'Esprit de saintete ». L'Esprit est l'instrument du soutien de Dieu a Jesus. L'expression ruuh al-qudus (l'Esprit de saintete) est unique et specifique a Jesus dans ce contexte. L'Esprit est la force divine qui accompagne Jesus dans sa mission.",
              axe2_voisins: "Le verset 87 mentionne l'Esprit comme le moyen specifique du soutien a Jesus. Les autres messagers reçoivent le Livre ou les preuves — Jesus reçoit en plus l'Esprit. Ce privilege supplementaire rend le rejet encore plus inexcusable.",
              axe3_sourate: "La racine r-w-h dans la sourate al-Baqarah est specifique a ce verset. En 2:253, le meme ruuh al-qudus est mentionne pour Jesus. L'Esprit est un attribut special de la mission de Jesus dans cette sourate.",
              axe4_coherence: "La racine r-w-h apparait 57 fois dans le Coran. En 16:102, l'Esprit de saintete a fait descendre le Coran. En 26:193, l'Esprit fidele descend avec la revelation. L'Esprit est l'intermediaire entre le divin et l'humain — il transmet la force et la revelation de Dieu.",
              axe5_frequence: "Pour la mission du khalifa, l'Esprit est le souffle divin qui anime la mission. Le khalifa est soutenu par le souffle de Dieu quand il obeit. L'Esprit est la force invisible qui permet l'accomplissement de la mission."
            },
            "Souffle/Mouvement": {
              status: "nul",
              senses: ["vent"],
              proof_ctx: "Le sens de vent est un sens physique de r-w-h. Dans ce contexte, ruuh designe l'Esprit divin, pas le vent."
            },
            "Apaisement": {
              status: "nul",
              senses: ["repos"],
              proof_ctx: "Le sens de repos est un derive de r-w-h (le repos du souffle). Le contexte est l'Esprit de saintete, pas le repos."
            }
          }
        }
      },
      // === qds (id=441) — saintete ===
      {
        word_key: "qds", position: 15, sense_chosen: "être saint",
        analysis_axes: {
          concept_chosen: "Sainteté/Pureté",
          concepts: {
            "Sainteté/Pureté": {
              status: "retenu",
              senses: ["être saint", "être pur", "sacré"],
              proof_ctx: "Le mot al-qudusi est un nom masculin singulier genitif defini de la racine q-d-s. Le Lane's donne « holiness, sacredness, purity ». Le mot qudus designe la saintete absolue — la purete divine. L'expression ruuh al-qudus (l'Esprit de saintete/du Saint) designe l'Esprit saint — l'ange Gabriel porteur de la purete divine.",
              axe1_verset: "Le mot al-qudusi qualifie l'Esprit — l'Esprit de saintete. La saintete est l'attribut de l'Esprit qui soutient Jesus. Le qudus est la purete absolue — ce qui est entierement separe du profane. Le soutien par l'Esprit de saintete est le plus haut niveau de soutien divin.",
              axe2_voisins: "Le verset 87 mentionne le qudus comme attribut de l'Esprit. La saintete qualifie la source du soutien divin. Plus la source est sainte, plus le rejet est grave.",
              axe3_sourate: "La racine q-d-s dans la sourate al-Baqarah est liee a la saintete. En 2:30, les anges disent « nous Te sanctifions (nuqaddisu) ». En 2:253, le ruuh al-qudus est mentionne. La sourate montre que la saintete est un attribut divin que les anges reconnaissent mais que les enfants d'Israel ignorent.",
              axe4_coherence: "La racine q-d-s apparait 10 fois dans le Coran. Le mot quddus est un des noms de Dieu (59:23 et 62:1). L'expression ruuh al-qudus apparait 4 fois. La saintete est l'attribut de la purete divine absolue.",
              axe5_frequence: "Pour la mission du khalifa, la saintete est l'ideal de purete. Le khalifa aspire a la purete que le qudus represente. L'Esprit de saintete est le modele de purete que le khalifa doit rechercher dans ses actes."
            },
            "Purification": {
              status: "nul",
              senses: ["purifier", "sanctifier"],
              proof_ctx: "Le sens de purification est un derive actif de q-d-s. Le mot al-qudusi est ici un nom d'attribut (saintete), pas un verbe de purification."
            }
          }
        }
      },
      // === jya (id=662) — venir ===
      {
        word_key: "jya", position: 17, sense_chosen: "venir",
        analysis_axes: {
          concept_chosen: "Venue",
          concepts: {
            "Venue": {
              status: "retenu",
              senses: ["venir"],
              proof_ctx: "Le verbe jaa'akum est un accompli 3MS de la racine j-y-a. Le Lane's donne « he came to you ». Le verbe jaa'a est le verbe le plus courant pour la venue. Avec le pronom 2MP (-kum), il signifie « il est venu a vous ». Le sujet est « un messager » (rasuulun) — chaque fois qu'un messager venait a eux.",
              axe1_verset: "Le verbe jaa'akum introduit la question rhetorique — « est-ce que chaque fois qu'un messager vous apportait ce que vos ames ne desiraient pas ? ». La venue du messager est le moment du test. Chaque venue est une epreuve — accepter ou rejeter le message. La formule kullamaa (chaque fois que) montre la repetition du phenomene.",
              axe2_voisins: "Le verset 85 denonçait les crimes. Ce verset 87 montre que la venue des messagers etait toujours suivie du rejet. La repetition du schema venue-rejet est le probleme central des enfants d'Israel.",
              axe3_sourate: "La racine j-y-a dans la sourate al-Baqarah est liee a la venue. En 2:71, « Moise vint avec la verite ». En 2:92, « Moise vous etait venu avec les preuves ». La sourate montre que la venue des messagers est recurrente et que le rejet l'est aussi.",
              axe4_coherence: "La racine j-y-a apparait 278 fois dans le Coran. Le verbe jaa'a est fondamental pour la narration prophetique. La formule kullamaa jaa'akum rasuulun (chaque fois qu'un messager vous venait) est une accusation universelle — le rejet est systematique.",
              axe5_frequence: "Pour la mission du khalifa, la venue des messagers est une grace. Le khalifa accueille le message, il ne le rejette pas. Le schema venue-rejet est l'anti-modele que le khalifa doit eviter."
            }
          }
        }
      },
      // === hwy (id=398) — desir ===
      {
        word_key: "hwy", position: 21, sense_chosen: "désir",
        analysis_axes: {
          concept_chosen: "Passion/Désir",
          concepts: {
            "Passion/Désir": {
              status: "retenu",
              senses: ["désir", "passion"],
              proof_ctx: "Le verbe tahwaa est un inaccompli 3FS de la racine h-w-y. Le Lane's donne « it desires, it craves, it inclines toward, it has a passion for ». Le verbe hawaa designe le desir de l'ame — la passion qui pousse vers un objet. Le sujet est anfusukum (vos ames) — les ames des enfants d'Israel desirent ce qui s'oppose au message.",
              axe1_verset: "Le verbe tahwaa decrit le desir des ames comme cause du rejet — « ce que vos ames ne desiraient pas ». Le message divin contredit les desirs de l'ame. Le rejet n'est pas intellectuel mais passionnel — les ames ne veulent pas ce qui les contrarie. La negation laa tahwaa (ne desirent pas) montre que le conflit est entre le message divin et les passions humaines.",
              axe2_voisins: "Le verset 85 denonçait la croyance selective. Ce verset 87 en revele la cause — les ames ne desirent pas ce qui contredit leurs passions. La selection dans le Livre est motivee par le desir, pas par la raison.",
              axe3_sourate: "La racine h-w-y dans la sourate al-Baqarah est peu frequente mais significative. Le desir de l'ame est l'obstacle a l'obeissance. La sourate montre que le conflit fondamental est entre le message divin et les passions humaines.",
              axe4_coherence: "La racine h-w-y apparait 38 fois dans le Coran. En 79:40, « celui qui a craint la station devant son Seigneur et a empeche l'ame de suivre ses passions ». En 45:23, « celui qui prend son desir (hawaa) pour divinite ». Le Coran met en garde contre la tyrannie du desir.",
              axe5_frequence: "Pour la mission du khalifa, le desir de l'ame est l'ennemi interieur. Le khalifa maitrise ses passions pour suivre le message divin. Les enfants d'Israel qui rejettent le message a cause de leurs desirs montrent la domination de l'ame sur la raison."
            },
            "Chute/Descente": {
              status: "nul",
              senses: ["tomber", "faire tomber"],
              proof_ctx: "Le sens de chute est un autre sens de h-w-y. Le verbe tahwaa dans ce contexte signifie clairement desirer, pas tomber."
            }
          }
        }
      },
      // === kbr (id=451) — orgueil ===
      {
        word_key: "kbr", position: 23, sense_chosen: "être grand",
        analysis_axes: {
          concept_chosen: "Grandeur/Importance",
          concepts: {
            "Grandeur/Importance": {
              status: "retenu",
              senses: ["être grand", "grandir", "être important", "magnifier"],
              proof_ctx: "Le verbe istakbartum est un accompli 2MP forme X de la racine k-b-r. Le Lane's donne « you showed arrogance, you were proud, you deemed yourselves too great ». La forme X (istif'al) signifie chercher a se montrer grand — la pretention a la grandeur. L'orgueil est une revendication de grandeur qui appartient a Dieu seul.",
              axe1_verset: "Le verbe istakbartum est la reaction des enfants d'Israel au message — « vous vous enfliez d'orgueil ». L'orgueil est la reponse a ce que les ames ne desirent pas. Au lieu d'accepter le message divin, ils se dressent avec arrogance. La forme X montre que l'orgueil est un acte delibere — chercher activement a se montrer superieur au message.",
              axe2_voisins: "Le verset 85 denonçait la croyance selective. Ce verset 87 en revele le moteur — l'orgueil. L'orgueil empeche l'acceptation du message et produit le deni et le meurtre. La progression est : desir contrarie -> orgueil -> deni/meurtre.",
              axe3_sourate: "La racine k-b-r dans la sourate al-Baqarah est liee a la grandeur et a l'orgueil. En 2:34, Iblis refuse de se prosterner par orgueil (istakbara). En 2:206, l'orgueil mene au peche. La sourate montre que l'orgueil est le peche originel — celui d'Iblis et celui des enfants d'Israel.",
              axe4_coherence: "La racine k-b-r apparait 161 fois dans le Coran. La forme X istakbara est le verbe de l'orgueil. En 7:13, Dieu dit a Iblis « descends de la, il ne t'appartient pas de t'y enorgueillir ». L'orgueil est l'obstacle principal a la soumission a Dieu.",
              axe5_frequence: "Pour la mission du khalifa, l'orgueil est l'ennemi de la mission. Le khalifa est humble devant Dieu — il ne revendique pas une grandeur qui ne lui appartient pas. L'orgueil est la negation de la vicegerence car le khalifa est un lieutenant, pas un souverain."
            },
            "Orgueil/Arrogance": {
              status: "nul",
              senses: ["orgueil", "s'enorgueillir"],
              proof_ctx: "Le concept « Orgueil/Arrogance » est un sous-ensemble de « Grandeur/Importance ». Le concept retenu dans la base est le plus large. La forme X istakbara releve de la grandeur pretendue."
            }
          }
        }
      },
      // === frq (id=515) — groupe (v87 position 24) ===
      {
        word_key: "frq", position: 24, sense_chosen: "séparer",
        analysis_axes: {
          concept_chosen: "Séparation/Distinction",
          concepts: {
            "Séparation/Distinction": {
              status: "retenu",
              senses: ["séparer", "distinguer", "diviser", "Furqân"],
              proof_ctx: "Le mot fariiqan est un nom masculin singulier accusatif de la racine f-r-q. Le Lane's donne « a group, a party, a section ». Le mot fariiq est repete deux fois — un groupe dementi et un groupe tue. La division en deux groupes de messagers (ceux qu'on dement et ceux qu'on tue) montre la systematisation du rejet.",
              axe1_verset: "Le mot fariiqan est repete deux fois a la fin du verset — « un groupe vous l'avez dementi et un groupe vous le tuez ». La division des messagers en deux categories (dementis et tues) montre que le rejet prend deux formes : le deni verbal et le meurtre physique. La repetition de fariiq structure la conclusion du verset.",
              axe2_voisins: "Le verset 85 utilisait fariiq pour le groupe expulse. Ce verset 87 utilise fariiq pour les groupes de messagers rejetes. Le mot fariiq lie les deux versets — la division est le mode operatoire des enfants d'Israel.",
              axe3_sourate: "La racine f-r-q dans la sourate al-Baqarah traite de la separation et du discernement. La division des messagers en groupes est un choix humain condamne — on ne peut pas distinguer entre les messagers en acceptant les uns et rejetant les autres.",
              axe4_coherence: "La racine f-r-q apparait 72 fois dans le Coran. En 4:150, « ceux qui font une distinction entre les messagers » sont condamnes. Le Coran interdit la separation entre les messagers — ils forment un tout indivisible.",
              axe5_frequence: "Pour la mission du khalifa, la distinction entre les messagers est interdite. Le khalifa accepte tous les messagers sans separation. Dementir ou tuer les messagers est l'echec absolu de la mission."
            }
          }
        }
      },
      // === k (id=803) — dementir ===
      {
        word_key: "k", position: 25, sense_chosen: "comme",
        analysis_axes: {
          concept_chosen: "Comparaison/Similitude",
          concepts: {
            "Comparaison/Similitude": {
              status: "retenu",
              senses: ["comme", "tel que", "semblable à"],
              proof_ctx: "Le verbe kadhdhabtum est un accompli 2MP forme II. La racine dans la base de donnees est enregistree sous le word_key 'k'. Le Lane's donne pour kadhdhaba (forme II de k-dh-b) « he accused of lying, he denied, he rejected as false ». La forme II intensifie le deni — accuser formellement de mensonge. Le concept « Comparaison/Similitude » est le seul disponible dans la base pour ce word_key.",
              axe1_verset: "Le verbe kadhdhabtum est la premiere forme de rejet — « un groupe vous l'avez dementi ». Le deni precede le meurtre dans la liste. Dementir un messager c'est l'accuser de mensonge — nier la verite de son message. La forme II intensifie le deni — ce n'est pas un doute passif mais une accusation active de mensonge.",
              axe2_voisins: "Le verset 85 montrait le rejet du Livre. Ce verset 87 montre le rejet des messagers. Le deni (kadhdhabtum) est la forme verbale du rejet — accuser le messager de mensonge.",
              axe3_sourate: "La racine k-dh-b dans la sourate al-Baqarah est liee au mensonge et au deni. Le deni des messagers est un acte grave qui s'oppose a la verite revelee. La sourate montre que le deni est un choix delibere, pas une erreur.",
              axe4_coherence: "La forme II kadhdhaba apparait frequemment dans le Coran. En 3:184, « si les messagers avant toi ont ete dementis ». En 6:34, les messagers ont ete dementis avant toi. Le deni des messagers est un schema historique qui se repete.",
              axe5_frequence: "Pour la mission du khalifa, le deni est l'obstacle a la verite. Le khalifa ne dement pas les messagers — il confirme leur message. Dementir un messager c'est s'opposer a la verite divine."
            }
          }
        }
      },
      // === qtl (id=556) — tuer (v87 position 27) ===
      {
        word_key: "qtl", position: 27, sense_chosen: "tuer",
        analysis_axes: {
          concept_chosen: "Meurtre/Combat",
          concepts: {
            "Meurtre/Combat": {
              status: "retenu",
              senses: ["combat", "tuer", "assassiner", "combattre", "meurtre"],
              proof_ctx: "Le verbe taqtuluuna est un inaccompli 2MP de la racine q-t-l. Le Lane's donne « you kill, you slay ». L'inaccompli est significatif — le deni est au passe (kadhdhabtum) mais le meurtre est au present (taqtuluuna). Le changement de temps verbal suggere que le meurtre des prophetes est une action qui continue.",
              axe1_verset: "Le verbe taqtuluuna cloture le verset par l'acte le plus grave — le meurtre des messagers. Apres le deni vient le meurtre. L'inaccompli (present) au lieu de l'accompli (passe) est une accusation plus forte — vous tuez encore maintenant. La formule finale « un groupe vous l'avez dementi et un groupe vous le tuez » resume toute l'histoire du rejet.",
              axe2_voisins: "Le verset 85 mentionnait le meurtre entre eux (taqtuluuna anfusakum). Ce verset 87 mentionne le meurtre des messagers (taqtuluuna). Le meme verbe relie les deux crimes — le meurtre interne et le meurtre des prophetes. La violence est la marque des enfants d'Israel dans ce passage.",
              axe3_sourate: "La racine q-t-l dans la sourate al-Baqarah est recurrente. En 2:61, le meurtre des prophetes est mentionne. En 2:72, le meurtre dans le recit de la vache. En 2:85, le meurtre entre eux. La sourate accumule les mentions du meurtre pour montrer la violence systematique.",
              axe4_coherence: "La racine q-t-l apparait 170 fois dans le Coran. Le meurtre des prophetes est un crime specifiquement mentionne. En 3:21, « ceux qui tuent les prophetes ». En 3:181, « ils tuaient les prophetes injustement ». Le meurtre des prophetes est un des crimes les plus graves du Coran.",
              axe5_frequence: "Pour la mission du khalifa, le meurtre des messagers est la negation absolue de la mission. Le khalifa protege les messagers et suit leur message. Tuer un messager c'est detruire le lien entre Dieu et les hommes."
            }
          }
        }
      },
      // === nfs (id=298) — ames (v87) ===
      {
        word_key: "nfs", position: 22, sense_chosen: "personne",
        analysis_axes: {
          concept_chosen: "Âme/Être",
          concepts: {
            "Âme/Être": {
              status: "retenu",
              senses: ["désir", "âme", "personne", "esprit", "soi-même"],
              proof_ctx: "Le mot anfusukum est un nom feminin pluriel nominatif avec pronom 2MP de la racine n-f-s. Le Lane's donne « your souls, your selves ». Le mot anfusukum ici designe les ames — les interiorites des enfants d'Israel. Le verbe tahwaa (desirer) a pour sujet anfusukum — ce sont les ames qui desirent.",
              axe1_verset: "Le mot anfusukum est le sujet du desir — « ce que vos ames ne desiraient pas ». Les ames des enfants d'Israel rejettent le message qui contredit leurs passions. L'ame (nafs) est le siege du desir — c'est elle qui s'oppose au message divin. Le conflit est interieur avant d'etre exterieur.",
              axe2_voisins: "Le verset 85 utilisait anfusakum pour les personnes tuees. Ce verset 87 utilise anfusukum pour les ames desirant. Le meme mot porte deux sens — la personne (tuee) et l'ame (desirant). La racine n-f-s lie les deux versets.",
              axe3_sourate: "La racine n-f-s dans la sourate al-Baqarah couvre l'ame et la personne. En 2:48, l'ame individuelle sera jugee. En 2:233, l'ame est le lieu de la responsabilite. La sourate montre que l'ame est le champ de bataille entre l'obeissance et la passion.",
              axe4_coherence: "La racine n-f-s apparait 295 fois dans le Coran. L'expression « ce que vos ames desirent » est recurrente. En 79:40, maitriser l'ame et ses desirs est la condition de l'entree au Paradis. L'ame non maitrisee est la source du rejet du message divin.",
              axe5_frequence: "Pour la mission du khalifa, l'ame est le premier territoire a gouverner. Le khalifa maitrise son ame avant de gouverner les autres. Les enfants d'Israel dont les ames rejettent le message montrent une ame non gouvernee."
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
  // dwr (id=631)
  { analysis_id: 631, phrases: [
    { sense: "demeure", arabic: "وَتُخْرِجُونَ فَرِيقًا مِّنكُم مِّن دِيَٰرِهِمْ", phon: "wa-tukhrijuuna fariiqan minkum min diyaarihim", french: "Et vous expulsez un groupe d'entre vous de leurs demeures." },
    { sense: "maison", arabic: "وَأْذَن فِي النَّاسِ بِالحَجِّ يَأْتُوكَ رِجَالًا وَعَلَىٰ كُلِّ ضَامِرٍ", phon: "wa-lam tukhriju min diyaarihim", french: "Et n'expulsez pas de leurs maisons." },
    { sense: "tourner", arabic: "تَدُورُ أَعْيُنُهُمْ كَالَّذِي يُغْشَىٰ عَلَيْهِ مِنَ الْمَوْتِ", phon: "taduuru a'yunuhum", french: "Leurs yeux tournent comme celui qui est saisi par la mort." }
  ]},
  // athm (id=952)
  { analysis_id: 952, phrases: [
    { sense: "péché (ithm)", arabic: "تَظَٰهَرُونَ عَلَيْهِم بِٱلْإِثْمِ وَٱلْعُدْوَٰنِ", phon: "tazaaharuuna 'alayhim bi-al-ithmi wa-al-'udwaani", french: "Vous vous soutenez mutuellement contre eux par le peche et l'agression." },
    { sense: "commettre une faute", arabic: "وَلَا تَعَاوَنُوا عَلَى الْإِثْمِ وَالْعُدْوَانِ", phon: "wa-laa ta'aawanuu 'ala al-ithmi wa-al-'udwaani", french: "Et ne vous entraidez pas dans le peche et l'agression." },
    { sense: "pécher", arabic: "وَذَرُوا ظَاهِرَ الْإِثْمِ وَبَاطِنَهُ", phon: "wa-dharuu zaahira al-ithmi wa-baatinahu", french: "Et evitez le peche apparent et cache." }
  ]},
  // asr (id=669)
  { analysis_id: 669, phrases: [
    { sense: "captif", arabic: "وَإِن يَأْتُوكُمْ أُسَٰرَYٰ تُفَٰدُوهُمْ", phon: "wa-in ya'tuukum usaaraa tufaaduuhum", french: "Et s'ils viennent a vous en captifs, vous les ranconnez." },
    { sense: "capturer", arabic: "حَتَّىٰ إِذَا أَثْخَنتُمُوهُمْ فَشُدُّوا الْوَثَاقَ", phon: "hattaa idhaa athkhantumuhum fa-shudduu al-wathaaq", french: "Puis quand vous les avez maitrises, serrez les liens." },
    { sense: "lien", arabic: "إِنَّا نَخَافُ مِن رَّبِّنَا يَوْمًا عَبُوسًا قَمْطَرِيرًا", phon: "innaa nakhafu min rabbinaa yawman 'abuusan qamtariiran", french: "Nous craignons de notre Seigneur un Jour severe et accablant." }
  ]},
  // fdy (id=670)
  { analysis_id: 670, phrases: [
    { sense: "rançon", arabic: "تُفَٰدُوهُمْ وَهُوَ مُحَرَّمٌ عَلَيْكُمْ", phon: "tufaaduuhum wa-huwa muharramun 'alaykum", french: "Vous les ranconnez alors que c'etait interdit pour vous." },
    { sense: "racheter", arabic: "وَلَا يُقْبَلُ مِنْهَا شَفَاعَةٌ وَلَا يُؤْخَذُ مِنْهَا عَدْلٌ", phon: "wa-laa yuqbalu minhaa shafaa'atun", french: "Et on n'acceptera d'elle ni intercession ni compensation." },
    { sense: "compensation", arabic: "فَفِدْيَةٌ مِّن صِيَامٍ أَوْ صَدَقَةٍ أَوْ نُسُكٍ", phon: "fa-fidyatun min siyaamin aw sadaqatin aw nusukin", french: "Alors une compensation par le jeune, l'aumone ou le sacrifice." }
  ]},
  // hrm (id=671)
  { analysis_id: 671, phrases: [
    { sense: "interdire", arabic: "وَهُوَ مُحَرَّمٌ عَلَيْكُمْ إِخْرَاجُهُمْ", phon: "wa-huwa muharramun 'alaykum ikhraajuhum", french: "Alors que leur expulsion vous etait interdite." },
    { sense: "sacré", arabic: "إِنَّ أَوَّلَ بَيْتٍ وُضِعَ لِلنَّاسِ لَلَّذِي بِبَكَّةَ مُبَارَكًا", phon: "al-masjid al-haraam", french: "La mosquee sacree." },
    { sense: "illicite", arabic: "حُرِّمَتْ عَلَيْكُمُ الْمَيْتَةُ وَالدَّمُ", phon: "hurrimat 'alaykum al-maytatu wa-al-damu", french: "Vous sont interdits la bete morte et le sang." }
  ]},
  // khzy (id=888)
  { analysis_id: 888, phrases: [
    { sense: "honte", arabic: "إِلَّا خِزْيٌ فِي الْحَيَاةِ الدُّنْيَا", phon: "illaa khizyun fii al-hayaati al-dunyaa", french: "Sinon l'humiliation dans la vie d'ici-bas." },
    { sense: "être humilié", arabic: "رَبَّنَا إِنَّكَ مَن تُدْخِلِ النَّارَ فَقَدْ أَخْزَيْتَهُ", phon: "rabbana innaka man tudkhili al-naara faqad akhzaytahu", french: "Notre Seigneur, celui que Tu fais entrer au Feu, Tu l'as humilie." },
    { sense: "châtiment humiliant", arabic: "وَلَهُمْ عَذَابٌ مُّهِينٌ", phon: "wa-lahum 'adhaabun muhiinun", french: "Et ils auront un chatiment humiliant." }
  ]},
  // xff (id=928)
  { analysis_id: 928, phrases: [
    { sense: "alléger", arabic: "فَلَا يُخَفَّفُ عَنْهُمُ الْعَذَابُ", phon: "fa-laa yukhaffafu 'anhumu al-'adhaabu", french: "Le chatiment ne leur sera pas allege." },
    { sense: "être léger", arabic: "الْآنَ خَفَّفَ اللَّهُ عَنكُمْ", phon: "al-aana khaffafa Allaahu 'ankum", french: "Maintenant Dieu a allege votre charge." },
    { sense: "diminuer un fardeau", arabic: "يُرِيدُ اللَّهُ أَن يُخَفِّفَ عَنكُمْ", phon: "yuriidu Allaahu an yukhaffifa 'ankum", french: "Dieu veut alleger votre charge." }
  ]},
  // qfw (id=2386)
  { analysis_id: 2386, phrases: [
    { sense: "suivre", arabic: "وَقَفَّيْنَا مِن بَعْدِهِ بِالرُّسُلِ", phon: "wa-qaffaynaa min ba'dihi bi-al-rusuli", french: "Et Nous avons envoye a sa suite les messagers." },
    { sense: "poursuivre", arabic: "ثُمَّ قَفَّيْنَا عَلَىٰ آثَارِهِم بِرُسُلِنَا", phon: "thumma qaffaynaa 'alaa aathaarihim bi-rusulina", french: "Puis Nous avons envoye a leur suite Nos messagers." },
    { sense: "suivre", arabic: "وَقَفَّيْنَا بِعِيسَى ابْنِ مَرْيَمَ", phon: "wa-qaffaynaa bi-'iisaa ibni maryama", french: "Et Nous avons envoye a leur suite Jesus fils de Marie." }
  ]},
  // ayd (id=692)
  { analysis_id: 692, phrases: [
    { sense: "soutenir", arabic: "وَأَيَّدْنَاهُ بِرُوحِ الْقُدُسِ", phon: "wa-ayyadnaahu bi-ruuhi al-qudusi", french: "Et Nous l'avons soutenu par l'Esprit de saintete." },
    { sense: "force", arabic: "وَاذْكُرُوا نِعْمَةَ اللَّهِ عَلَيْكُمْ", phon: "wa-ayyadakum bi-nasrihi", french: "Et Il vous a soutenus par Son secours." },
    { sense: "main", arabic: "وَالسَّمَاءَ بَنَيْنَاهَا بِأَيْدٍ", phon: "wa-al-samaa'a banaynaahaa bi-aydin", french: "Et le ciel, Nous l'avons construit avec force." }
  ]},
  // rwh (id=693)
  { analysis_id: 693, phrases: [
    { sense: "esprit", arabic: "بِرُوحِ الْقُدُسِ", phon: "bi-ruuhi al-qudusi", french: "Par l'Esprit de saintete." },
    { sense: "âme", arabic: "فَإِذَا سَوَّيْتُهُ وَنَفَخْتُ فِيهِ مِن رُّوحِي", phon: "wa-nafakhtu fiihi min ruuhii", french: "Et quand Je l'aurai façonne et que J'aurai souffle en lui de Mon esprit." },
    { sense: "vent", arabic: "وَأَرْسَلْنَا الرِّيَاحَ لَوَاقِحَ", phon: "wa-arsalnaa al-riyaaha lawaaqiha", french: "Et Nous avons envoye les vents fecondants." }
  ]},
  // qds (id=441)
  { analysis_id: 441, phrases: [
    { sense: "être saint", arabic: "رُوحِ الْقُدُسِ", phon: "ruuhi al-qudusi", french: "L'Esprit de saintete." },
    { sense: "sacré", arabic: "ادْخُلُوا الْأَرْضَ الْمُقَدَّسَةَ", phon: "udkhuluu al-arda al-muqaddasata", french: "Entrez dans la terre sacree." },
    { sense: "être pur", arabic: "وَنَحْنُ نُسَبِّحُ بِحَمْدِكَ وَنُقَدِّسُ لَكَ", phon: "wa-nahnu nusabbihu bi-hamdika wa-nuqaddisu laka", french: "Et nous celebrons Ta louange et nous Te sanctifions." }
  ]},
  // hwy (id=398)
  { analysis_id: 398, phrases: [
    { sense: "désir", arabic: "بِمَا لَا تَهْوَىٰ أَنفُسُكُمُ", phon: "bi-maa laa tahwaa anfusukum", french: "Avec ce que vos ames ne desirent pas." },
    { sense: "passion", arabic: "وَلَا تَتَّبِعِ الْهَوَىٰ فَيُضِلَّكَ عَن سَبِيلِ اللَّهِ", phon: "wa-laa tattabi'i al-hawaa", french: "Et ne suis pas la passion, car elle t'egarerait du chemin de Dieu." },
    { sense: "tomber", arabic: "وَالنَّجْمِ إِذَا هَوَىٰ", phon: "wa-al-najmi idhaa hawaa", french: "Par l'etoile quand elle tombe." }
  ]},
  // rdd (id=674)
  { analysis_id: 674, phrases: [
    { sense: "renvoyer", arabic: "يُرَدُّونَ إِلَىٰ أَشَدِّ الْعَذَابِ", phon: "yuradduuna ilaa ashaddi al-'adhaabi", french: "Ils seront renvoyes au plus dur chatiment." },
    { sense: "rendre", arabic: "وَدَّ كَثِيرٌ مِّنْ أَهْلِ الْكِتَابِ لَوْ يَرُدُّونَكُم", phon: "law yarudduunakum", french: "Beaucoup des gens du Livre voudraient vous faire revenir." },
    { sense: "rejeter", arabic: "وَلَوْ رُدُّوا لَعَادُوا لِمَا نُهُوا عَنْهُ", phon: "wa-law rudduu la-'aaduu", french: "Et s'ils etaient renvoyes, ils reviendraient a ce qui leur etait interdit." }
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

  const verseIds = [92, 93, 94];
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
  console.log('=== PIPELINE SOURATE 2 — AL-BAQARAH — VERSETS 85 A 87 ===\n');

  let totalOk = 0, totalErr = 0;

  for (let v = 85; v <= 87; v++) {
    const result = await processVerse(v);
    if (result) {
      totalOk += result.okCount;
      totalErr += result.errCount;
    }
  }

  await syncWordMeanings();
  await insertDailyPhrases();

  console.log(`\n=== PIPELINE V85-87 TERMINEE — TOTAL: ${totalOk} OK, ${totalErr} erreurs ===`);
}

main().catch(e => console.error('FATAL:', e));
