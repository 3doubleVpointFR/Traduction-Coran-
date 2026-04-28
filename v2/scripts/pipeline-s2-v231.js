const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// =====================================================
// PIPELINE SOURATE 2 — VERSET 231
// verse_id=238, analysis_id=596
// "wa idha tallaqtumu al-nisaa fa balaghna ajalahunna
//  fa amsikuhunna bi ma'rufin aw sarrihuhunna bi ma'rufin
//  wa la tumsikuhunna diraran li ta'tadu
//  wa man yaf'al dhalika fa qad zalama nafsahu
//  wa la tattakhidhu ayati Allahi huzuwan
//  wa udhkuru ni'mata Allahi 'alaykum
//  wa ma anzala 'alaykum min al-kitabi wa al-hikmati
//  ya'izukum bihi
//  wa ittaqu Allaha wa i'lamu anna Allaha bi kulli shay'in 'alim"
// =====================================================

const verseData = {
  231: {
    verse_id: 238,
    analysis_id: 596,
    translation_arab: "Quand vous repudiez les femmes et qu'elles approchent leur terme, retenez-les convenablement ou liberez-les convenablement. Ne les retenez pas pour leur nuire et transgresser. Quiconque fait cela a opprime son ame. Ne prenez pas les signes de Dieu en derision. Rappelez-vous le bienfait de Dieu envers vous, et ce qu'Il a fait descendre sur vous du Livre et de la Sagesse, vous exhortant par la. Craignez Dieu et sachez que Dieu est omniscient sur toute chose.",
    full_translation: "Lorsque vous répudiez des femmes et qu'elles sont sur le point d'expirer leur délai, retenez-les convenablement ou renvoyez-les convenablement. Ne les retenez pas abusivement pour leur causer du tort : celui qui fait cela est injuste envers lui-même. Ne prenez pas les versets d'Allah en plaisanterie. Rappelez-vous le bienfait d'Allah sur vous, ainsi que ce qu'Il a fait descendre sur vous du Livre et de la Sagesse pour vous instruire. Craignez Allah et sachez qu'Allah est Omniscient.",
    translation_explanation: "§DEMARCHE§\n" +
"Le verset 231 est la continuation directe du passage sur le talaq revocable. Apres avoir fixe les deux talaq revocables (v.229) et le troisieme definitif (v.230), le verset 231 revient sur la situation de la femme a la fin de sa periode d'attente ('idda) : le mari a deux options — soit la retenir (imsak) soit la liberer (tasrih), les deux devant etre faites bi ma'rufin (convenablement). L'interdit est de la retenir pour lui nuire (diraran). Le verset conclut par trois injonctions : ne pas prendre les signes divins en derision (huzuwan), se souvenir du bienfait de Dieu (ni'mat Allah), et craindre Dieu ('ilm Allah).\n" +
"\n" +
"Le verbe **tallaqtumu** est un accompli 2MP de la racine t-l-q (Form II, tallaqa). Le Lane's donne : relacher, dissoudre un lien, repudier. La Form II intensive : acte delibere de repudiation. « Idha tallaqtumu » = quand vous repudiez — l'injonction s'adresse aux maris.\n" +
"\n" +
"Le verbe **balaghna** est un accompli 3FP de la racine b-l-gh. Le Lane's donne : atteindre, parvenir, accomplir, arriver a un terme. « Fa balaghna ajalahunna » = elles ont atteint leur terme (leur echeance). L'atteinte du terme marque la fin imminente de la 'idda (periode d'attente).\n" +
"\n" +
"Le nom **ajala** (ajalahunna) est de la racine '-j-l. Le Lane's donne : terme fixe, echeance, delai, limite temporelle assignee. L'ajal est la limite temporelle fixee — ici la 'idda, la periode d'attente apres le talaq. « Ajalahunna » = leur terme a elles — le terme est propre a chaque femme.\n" +
"\n" +
"Le verbe **amsikuhunna** est un imperatif 2MP de la racine m-s-k. Le Lane's donne : retenir, tenir, saisir, s'accrocher a, preserver. « Amsikuhunna bi ma'rufin » = retenez-les convenablement. La retenue (imsak) est l'un des deux choix legitimes : le mari peut maintenir le mariage avant la fin du terme.\n" +
"\n" +
"Le nom **ma'rufin** (bi ma'rufin) est de la racine '-r-f. Le Lane's donne : ce qui est connu, ce qui est reconnu comme bien, ce qui est convenable, la convention sociale. « Bi ma'rufin » = avec ce qui est connu/convenable — dans le respect des normes sociales et morales etablies.\n" +
"\n" +
"Le verbe **sarrihuhunna** est un imperatif 2MP de la racine s-r-h. Le Lane's donne : liberer, relacher, laisser partir librement, divorcer avec douceur. « Sarrihuhunna bi ma'rufin » = liberez-les convenablement. La liberation (tasrih) est le second choix legitime : laisser s'achever le talaq.\n" +
"\n" +
"Le nom **diraran** est de la racine d-r-r. Le Lane's donne : nuire, causer du tort, prejudice, dommage. « La tumsikuhunna diraran » = ne les retenez pas pour leur nuire. Le darar est l'intention malveillante : retenir la femme pour lui causer du tort plutot que pour preserver le mariage.\n" +
"\n" +
"Le verbe **ta'tadu** est un inaccompli subjonctif 2MP de la racine '-d-w. Le Lane's donne : transgresser, depasser les limites, etre hostile, franchir les frontieres. « Li ta'tadu » = pour que vous transgressiez — retenir avec l'intention de nuire constitue une transgression des limites divines.\n" +
"\n" +
"Le verbe **yaf'al** est un inaccompli jussif 3MS de la racine f-'-l. Le Lane's donne : faire, agir, accomplir un acte. « Man yaf'al dhalika » = quiconque fait cela — la reference est a la retention nuisible.\n" +
"\n" +
"Le verbe **zalama** est un accompli 3MS de la racine z-l-m. Le Lane's donne : opprimer, etre injuste, causer du tort, placer quelque chose hors de sa place. « Zalama nafsahu » = il a opprime son propre etre — l'injustice se retourne contre celui qui la commet.\n" +
"\n" +
"Le nom **nafsa** (nafsahu) est de la racine n-f-s. Le Lane's donne : ame, souffle vital, soi-meme, personne, etre vivant. « Nafsahu » = son ame propre — l'oppresseur se nuit a lui-meme en premier.\n" +
"\n" +
"Le verbe **tattakhidhu** est un inaccompli jussif 2MP de la racine '-kh-z. Le Lane's donne : prendre, saisir, adopter, utiliser pour quelque chose. « La tattakhidhu ayati Allahi huzuwan » = ne prenez pas les signes de Dieu en derision — ne les utilisez pas comme pretexte a la moquerie.\n" +
"\n" +
"Le nom **ayati** est de la racine '-y-y (ou '-w-y). Le Lane's donne : signe, indice, preuve, miracle, verset. « Ayati Allahi » = les signes de Dieu — les versets coraniques mais aussi les signes divins dans la creation.\n" +
"\n" +
"Le nom **huzuwan** est de la racine h-z-w. Le Lane's donne : derision, moquerie, raillerie, traiter avec legerete. « Huzuwan » = en derision — prendre les injonctions divines a la legere ou en faire un jeu.\n" +
"\n" +
"Le verbe **udhkuru** est un imperatif 2MP de la racine dh-k-r. Le Lane's donne : rappeler, se souvenir de, mentionner, commémorer. « Udhkuru ni'mata Allahi » = rappelez-vous le bienfait de Dieu — l'imperatif du dhikr (remembrance) est un ancrage spirituel.\n" +
"\n" +
"Le nom **ni'mata** est de la racine n-'-m. Le Lane's donne : bienfait, faveur, don, abondance, bonheur. « Ni'mat Allahi 'alaykum » = le bienfait de Dieu sur vous — la faveur divine qui inclut la revelation, la guidance et la communaute.\n" +
"\n" +
"Le nom **kitabi** (al-kitab) est de la racine k-t-b. Le Lane's donne : ecriture, livre, prescription, ce qui est ecrit, message. « Al-kitab » est le Livre — la revelation coranique comme ecriture divine.\n" +
"\n" +
"Le nom **hikmati** (al-hikmah) est de la racine h-k-m. Le Lane's donne : sagesse, jugement, decision, gouvernance, discernement. « Al-hikmah » est la Sagesse — l'intelligence appliquee a la comprehension juste des choses.\n" +
"\n" +
"Le verbe **ya'izukum** est un inaccompli 3MS de la racine w-'-z. Le Lane's donne : exhorter, conseiller, admonester, instruire par des avertissements. « Ya'izukum bihi » = Il vous exhorte par cela — la revelation est une exhortation active.\n" +
"\n" +
"Le verbe **ittaqu** est un imperatif 2MP de la racine w-q-y. Le Lane's donne : se proteger, se premunir, craindre en se gardant, la taqwa (piete). « Ittaqu Allaha » = craignez/soyez en piete envers Dieu — la taqwa est une protection active, pas une peur passive.\n" +
"\n" +
"Le verbe **i'lamu** est un imperatif 2MP de la racine '-l-m. Le Lane's donne : savoir, connaitre, etre informe, avoir la connaissance certaine. « I'lamu anna Allaha bi kulli shay'in 'alim » = sachez que Dieu est savant de toute chose — la cloture du verset rappelle l'omniscience divine.\n" +
"\n" +
"§JUSTIFICATION§\n" +
"**Retenez-les convenablement ou liberez-les convenablement** — la double occurence de bi ma'rufin (convenablement) est deliberee : les deux options (retention et liberation) doivent etre faites avec la meme qualite morale — selon ce qui est reconnu comme bien. L'absence de bi ma'rufin dans la retention nuisible (v.231b) marque le contraste : la retention sans ma'ruf est precisement le diraram interdit.\n" +
"\n" +
"**Ne les retenez pas pour leur nuire** — diraran est un masdar (nom verbal) qui exprime l'intention : la retention est nuisible (darar) quand elle est motivee par le desir de prolonger la souffrance de la femme sans vouloir reellement la reprendre. C'est une forme d'oppression (zulm) deguisee en imsak.\n" +
"\n" +
"**Il a opprime son ame** — zalama nafsahu est une formule coranique forte. L'injustice retourne sur l'ame de celui qui la commet : il se nuit a lui-meme. La racine z-l-m (placer hors de sa place) illustre que l'oppresseur deplace sa propre ame hors de sa place naturelle (la droiture).\n" +
"\n" +
"**Ne prenez pas les signes de Dieu en derision** — la transition vers l'interdiction de huzuw (derision) est significative : celui qui utilise les regles du talaq de maniere abusive traite les injonctions divines comme un jeu. La connexion entre la retention nuisible et la derision des signes divins est directe.\n" +
"\n" +
"**Le Livre et la Sagesse** — al-kitab wa al-hikmah est une paire recurrente dans le Coran. Al-kitab est la revelation ecrite ; al-hikmah est la comprehension juste et appliquee. La Sagesse est distincte du Livre — elle est l'intelligence de sa mise en oeuvre.\n" +
"\n" +
"**Sachez que Dieu est omniscient** — 'alimun bi kulli shay'in. La cloture sur l'omniscience divine est un avertissement : Dieu sait quand la retention est sincere et quand elle est nuisible. L'omniscience est la garantie ultime de la justice.\n" +
"\n" +
"§CRITIQUE§\n" +
"Hamidullah traduit « bi ma'rufin » par « convenablement », ce qui est exact mais perd la dimension sociale : al-ma'ruf (de la racine '-r-f, connaitre) est litteralement ce qui est reconnu par la communaute comme bien. Il ne s'agit pas seulement de ce qui est convenable selon le jugement individuel mais de ce qui est socialement valide et moralement reconnu. Une traduction plus precise serait « selon les normes reconnues » ou « de maniere socialement etablie ».\n" +
"\n" +
"Hamidullah traduit « ayat Allah » par « versets d'Allah ». La racine '-y-y donne aya : signe, indice, preuve. Le sens premier est « signe » — un indice de la presence et de la volonte divines. « Verset » est une acception derivee (les versets du Coran etant les signes par excellence). Dans ce contexte, la traduction « signes de Dieu » est plus riche : elle couvre a la fois les versets de la revelation et les signes divins dans la creation et la legislation.\n" +
"\n" +
"La juxtaposition al-kitab wa al-hikmah a ete interpretee differemment par les exegetes : certains voient la hikmah comme la Sunna prophetique, d'autres comme la sagesse innee de la revelation. L'analyse etymologique (h-k-m : gouvernance, jugement, discernement) suggere que la hikmah est la comprehension appliquee — l'intelligence qui sait mettre en oeuvre la revelation dans la realite concrete.",
    segments: [
      { fr: "Quand vous repudiez les femmes", pos: "verbe", phon: "wa idha tallaqtumu al-nisaa", arabic: "وَإِذَا طَلَّقْتُمُ ٱلنِّسَآءَ", word_key: "tlq", is_particle: false, sense_retenu: "separation/liberation", position: 1 },
      { fr: "et qu'elles atteignent leur terme", pos: "verbe", phon: "fa balaghna ajalahunna", arabic: "فَبَلَغْنَ أَجَلَهُنَّ", word_key: "blgh", is_particle: false, sense_retenu: "atteinte/accomplissement", position: 6 },
      { fr: "leur terme", pos: "nom", phon: "ajalahunna", arabic: "أَجَلَهُنَّ", word_key: "ajl", is_particle: false, sense_retenu: "terme/delai", position: 7 },
      { fr: "retenez-les convenablement", pos: "verbe", phon: "fa amsikuhunna bi ma'rufin", arabic: "فَأَمْسِكُوهُنَّ بِمَعْرُوفٍ", word_key: "msk", is_particle: false, sense_retenu: "retenue/preservation", position: 9 },
      { fr: "convenablement", pos: "nom", phon: "bi ma'rufin", arabic: "بِمَعْرُوفٍ", word_key: "erf", is_particle: false, sense_retenu: "convention/bienfait", position: 10 },
      { fr: "ou liberez-les convenablement", pos: "verbe", phon: "aw sarrihuhunna bi ma'rufin", arabic: "أَوْ سَرِّحُوهُنَّ بِمَعْرُوفٍ", word_key: "srh", is_particle: false, sense_retenu: "liberation/relachement", position: 12 },
      { fr: "ne les retenez pas pour leur nuire", pos: "verbe", phon: "wa la tumsikuhunna diraran", arabic: "وَلَا تُمْسِكُوهُنَّ ضِرَارًا", word_key: "drr", is_particle: false, sense_retenu: "nuisance/tort", position: 16 },
      { fr: "pour transgresser", pos: "verbe", phon: "li ta'tadu", arabic: "لِّتَعْتَدُوا۟", word_key: "edw", is_particle: false, sense_retenu: "transgression/hostilite", position: 18 },
      { fr: "quiconque fait cela", pos: "verbe", phon: "wa man yaf'al dhalika", arabic: "وَمَن يَفْعَلْ ذَٰلِكَ", word_key: "fel", is_particle: false, sense_retenu: "action/accomplissement", position: 21 },
      { fr: "a opprime son ame", pos: "verbe", phon: "fa qad zalama nafsahu", arabic: "فَقَدْ ظَلَمَ نَفْسَهُۥ", word_key: "zlm", is_particle: false, sense_retenu: "oppression/injustice", position: 25 },
      { fr: "son ame propre", pos: "nom", phon: "nafsahu", arabic: "نَفْسَهُۥ", word_key: "nfs", is_particle: false, sense_retenu: "ame/soi", position: 26 },
      { fr: "ne prenez pas", pos: "verbe", phon: "wa la tattakhidhu", arabic: "وَلَا تَتَّخِذُوٓا۟", word_key: "akhz", is_particle: false, sense_retenu: "prise/adoption", position: 28 },
      { fr: "les signes de Dieu", pos: "nom", phon: "ayati Allahi", arabic: "ءَايَـٰتِ ٱللَّهِ", word_key: "ayy", is_particle: false, sense_retenu: "signe/indice", position: 29 },
      { fr: "en derision", pos: "nom", phon: "huzuwan", arabic: "هُزُوًا", word_key: "hzw", is_particle: false, sense_retenu: "derision/moquerie", position: 31 },
      { fr: "rappelez-vous le bienfait de Dieu", pos: "verbe", phon: "wa udhkuru ni'mata Allahi 'alaykum", arabic: "وَٱذْكُرُوا۟ نِعْمَتَ ٱللَّهِ عَلَيْكُمْ", word_key: "dhkr", is_particle: false, sense_retenu: "rappel/memoire", position: 33 },
      { fr: "le bienfait de Dieu", pos: "nom", phon: "ni'mata Allahi", arabic: "نِعْمَتَ ٱللَّهِ", word_key: "nem", is_particle: false, sense_retenu: "bienfait/grace", position: 34 },
      { fr: "du Livre", pos: "nom", phon: "min al-kitabi", arabic: "مِنَ ٱلْكِتَـٰبِ", word_key: "ktb", is_particle: false, sense_retenu: "ecriture/prescription", position: 42 },
      { fr: "et de la Sagesse", pos: "nom", phon: "wa al-hikmati", arabic: "وَٱلْحِكْمَةِ", word_key: "hkm", is_particle: false, sense_retenu: "sagesse/jugement", position: 44 },
      { fr: "vous exhortant par cela", pos: "verbe", phon: "ya'izukum bihi", arabic: "يَعِظُكُم بِهِۦ", word_key: "wez", is_particle: false, sense_retenu: "exhortation/conseil", position: 45 },
      { fr: "craignez Dieu", pos: "verbe", phon: "wa ittaqu Allaha", arabic: "وَٱتَّقُوا۟ ٱللَّهَ", word_key: "wqy", is_particle: false, sense_retenu: "protection/piete", position: 47 },
      { fr: "et sachez que Dieu est omniscient", pos: "verbe", phon: "wa i'lamu anna Allaha bi kulli shay'in 'alim", arabic: "وَٱعْلَمُوٓا۟ أَنَّ ٱللَّهَ بِكُلِّ شَىْءٍ عَلِيمٌ", word_key: "elm", is_particle: false, sense_retenu: "savoir/connaissance", position: 49 }
    ],
    vwa: [
      {
        word_key: "tlq",
        position: 1,
        sense_chosen: "separation/liberation",
        analysis_axes: {
          sense_chosen: "separation/liberation",
          concept_chosen: "Séparation/Libération",
          concepts: {
            "Séparation/Libération": {
              status: "retenu",
              senses: ["repudier", "divorcer", "liberer", "separation", "dissolution du lien"],
              proof_ctx: "Le verbe tallaqtumu est un accompli 2MP de la racine t-l-q (Form II, tallaqa). Le Lane's donne pour t-l-q : relacher, liberer, dissoudre un lien, repudier. La Form II intensive marque un acte delibere et complet de separation. Tallaqtumu = vous avez repudie. Le talaq est la dissolution formelle du lien conjugal — la femme devient mutlaqa (liberee).",
              axe1_verset: "Dans le verset 231, tallaqtumu ouvre la conditionnelle (idha tallaqtumu = quand vous repudiez) qui pose le cadre : les deux options suivantes (imsak ou tasrih) s'appliquent pendant la 'idda, tant que la separation n'est pas definitive. Le mot talaq designe ici le premier ou second talaq revocable — la situation est encore reversible, d'ou les deux options.",
              axe2_voisins: "Les versets 229 et 230 ont etabli les deux talaq revocables puis le troisieme definitif. Le verset 231 revient sur la situation post-talaq revocable, precisement parce que c'est la periode de decision critique. La racine t-l-q relie les versets 226 a 237 comme fil conducteur de la legislation matrimoniale.",
              axe3_sourate: "La racine t-l-q est centrale dans la section matrimoniale de al-Baqarah (2:226-241). Elle apparait en 2:229, 230, 231, 232, 236, 237. Le talaq est le terme juridique de la dissolution du mariage islamique — present dans chaque verset traitant de la rupture conjugale.",
              axe4_coherence: "La racine t-l-q apparait environ 30 fois dans le Coran. En contexte conjugal, le sens de separation/liberation est constant et technique. Le talaq est distinct du khul' (separation a l'initiative de la femme) — il designe specifiquement la repudiation par le mari.",
              axe5_frequence: "Dans la legislation coranique, le talaq revocable est concu comme une protection pour les deux parties : la periode d'attente ('idda) permet la reflexion et la reconciliation. Le verset 231 insiste sur les obligations morales qui accompagnent ce droit — la repudiation n'est pas un acte arbitraire mais un acte regie par des normes."
            }
          }
        }
      },
      {
        word_key: "blgh",
        position: 6,
        sense_chosen: "atteinte/accomplissement",
        analysis_axes: {
          sense_chosen: "atteinte/accomplissement",
          concept_chosen: "Atteinte/Accomplissement",
          concepts: {
            "Atteinte/Accomplissement": {
              status: "retenu",
              senses: ["atteindre", "parvenir", "accomplir", "arriver a terme", "balaghna"],
              proof_ctx: "Le verbe balaghna est un accompli 3FP de la racine b-l-gh. Le Lane's donne : atteindre, parvenir a, arriver jusqu'a, accomplir une limite. Balaghna ajalahunna = elles ont atteint leur terme. L'idee centrale est celle d'une progression qui aboutit — le terme est atteint, la limite est touchee. La racine b-l-gh est la racine de l'accomplissement d'un parcours.",
              axe1_verset: "Balaghna ajalahunna (elles ont atteint leur terme) decrit la situation critique : la 'idda est sur le point de se terminer. L'emploi de l'accompli (balaghna) suggere une imminence — le terme est quasiment atteint. C'est le moment de decision : le mari doit choisir entre l'imsak (retention) et le tasrih (liberation) avant que le terme ne soit completement ecoule.",
              axe2_voisins: "La meme formule balaghna ajalahunna apparait en 2:232 avec la meme structure conditionnelle. L'atteinte du terme est le declencheur legal des obligations post-talaq. La racine b-l-gh revient aussi en 2:235 (balaghna ajalahunna) et dans d'autres contextes d'atteinte d'une limite.",
              axe3_sourate: "Dans al-Baqarah, la racine b-l-gh est utilisee pour marquer des seuils critiques : l'atteinte de la maturite, l'atteinte du terme de la 'idda, l'atteinte d'une limite normative. Le sens d'accomplissement d'un parcours est constant.",
              axe4_coherence: "La racine b-l-gh apparait environ 68 fois dans le Coran. Le sens central est toujours l'atteinte d'une limite ou d'un but. En 2:231, le terme est la 'idda — la limite temporelle qui structure le droit du talaq revocable.",
              axe5_frequence: "L'atteinte du terme ('idda) est le seuil juridique cle : avant ce terme, le mari peut retenir sans formalite (le mariage n'est pas encore dissous) ; apres, la separation devient effective. Le verset 231 legifere precisement pour ce moment critique — quand le terme est presque atteint."
            },
            "Baligh/Maturite": {
              status: "probable",
              senses: ["maturite", "age adulte", "baligh", "croissance accomplie"],
              proof_ctx: "La racine b-l-gh donne aussi le nom baligh (celui qui a atteint la maturite) et balaghun (communication accomplie). En 2:231, le contexte est clairement temporel (terme de la 'idda) et non biologique.",
              axe1_verset: "Dans ce contexte precis, balaghna renvoie au terme de la 'idda et non a la maturite des personnes impliquees. Le sens de maturite biologique est present dans la racine mais non actif ici.",
              axe2_voisins: "Les versets voisins (229-232) traitent uniquement du talaq et de la 'idda — aucun contexte de maturite n'est present dans ce passage.",
              axe3_sourate: "La section matrimoniale de al-Baqarah utilise b-l-gh dans le sens temporel d'atteinte du terme, pas dans le sens de maturite biologique.",
              axe4_coherence: "Le sens de maturite est actif dans d'autres contextes coraniques (4:6 : hatta idhaa balaghu al-nikaha) mais pas dans le contexte du talaq.",
              axe5_frequence: "L'emploi de b-l-gh pour le terme de la 'idda est specifique a la section matrimoniale (2:231, 232, 235) — un usage technique et juridique de la racine."
            }
          }
        }
      },
      {
        word_key: "ajl",
        position: 7,
        sense_chosen: "terme/delai",
        analysis_axes: {
          sense_chosen: "terme/delai",
          concept_chosen: "Terme/Délai",
          concepts: {
            "Terme/Délai": {
              status: "retenu",
              senses: ["terme fixe", "echeance", "delai", "limite temporelle", "ajal"],
              proof_ctx: "Le nom ajalahunna est un accusatif de la racine '-j-l avec suffixe possessif feminin pluriel. Le Lane's donne : terme fixe, echeance, delai ordonne, limite temporelle assignee. L'ajal est fondamentalement une limite temporelle fixee a l'avance — une echeance indepassable. Ajalahunna = leur terme a elles — la 'idda est specifique a chaque femme (selon sa situation).",
              axe1_verset: "Ajalahunna dans le verset 231 est le terme de la 'idda — la periode d'attente de trois menstruations (ou trois mois pour les femmes non menstruees). C'est la frontiere temporelle apres laquelle le talaq revocable devient definitif. Le verset legifere pour la fin de cette periode : les decisions doivent etre prises avant l'expiration du terme.",
              axe2_voisins: "La meme formule balaghna ajalahunna revient en 2:232 et 2:234 (pour le deuil) et 2:235 (pour la 'idda). L'ajal est le terme organisateur de la legislation post-talaq dans tout ce passage.",
              axe3_sourate: "Dans al-Baqarah, l'ajal structure les periodes d'attente : 'idda post-talaq (2:228, 231, 232, 235), 'idda de veuvage (2:234). La racine '-j-l organise le temps de la legislation matrimoniale.",
              axe4_coherence: "La racine '-j-l apparait environ 55 fois dans le Coran. Le sens fondamental est la limite temporelle fixee — que ce soit la limite de vie (ajal al-mawt), le terme d'un contrat, ou la periode d'attente. La fixite et l'indepassabilite sont les traits essentiels de l'ajal.",
              axe5_frequence: "L'ajal dans le contexte de la 'idda est a la fois une protection pour la femme (temps de reflexion, verification de grossesse) et une contrainte pour le mari (il doit decider dans ce delai). La sagesse juridique du terme fixe est de forcer la decision avant que la situation ne se prolonge indefiniment."
            }
          }
        }
      },
      {
        word_key: "msk",
        position: 9,
        sense_chosen: "retenue/preservation",
        analysis_axes: {
          sense_chosen: "retenue/preservation",
          concept_chosen: "Retenue/Préservation",
          concepts: {
            "Retenue/Préservation": {
              status: "retenu",
              senses: ["retenir", "tenir", "s'accrocher a", "preserver", "imsak"],
              proof_ctx: "Le verbe amsikuhunna est un imperatif 2MP de la racine m-s-k. Le Lane's donne : retenir, tenir ferme, saisir, s'accrocher a, preserver. Amsikuhunna = retenez-les. L'imsak est le choix de maintenir le mariage en retenant la femme avant l'expiration du terme. La retention est physique (ne pas la laisser partir) et juridique (ne pas laisser le talaq devenir definitif).",
              axe1_verset: "Amsikuhunna bi ma'rufin est la premiere option legale presentee au mari : la retention convenable. La condition bi ma'rufin est essentielle — la retention doit etre motivee par le desir sincere de maintenir le mariage, pas par la malveillance (diraram). Le contraste avec la retention nuisible (la tumsikuhunna diraran) qui suit clarifie que l'imsak n'est legitime que s'il est bi ma'rufin.",
              axe2_voisins: "La meme racine m-s-k revient en 2:231 (la tumsikuhunna = ne les retenez pas [nuisiblement]). Les deux emplois dans le meme verset contrastent : l'un est un imperatif positif (amsikuhunna bi ma'rufin), l'autre est une interdiction (la tumsikuhunna diraran). La racine porte les deux possibilites — la retention peut etre bonne ou mauvaise selon l'intention.",
              axe3_sourate: "La racine m-s-k apparait en 2:229, 231, 256, 286 et dans d'autres sourates. Le sens de retention/preservation est constant. L'imsak dans le contexte du talaq est un terme juridique specifique.",
              axe4_coherence: "La racine m-s-k apparait environ 35 fois dans le Coran avec le sens de retenir, tenir, s'accrocher. La tension entre retention legitime et retention abusive est propre au contexte du talaq.",
              axe5_frequence: "L'imperatif amsiku (retenez) dans ce contexte est une permission conditionnelle : si le mari veut retenir sa femme avant la fin de la 'idda, il le peut, mais cela doit etre bi ma'rufin — selon les normes reconnues. Ce n'est pas une obligation mais un droit conditionne par l'intention."
            }
          }
        }
      },
      {
        word_key: "erf",
        position: 10,
        sense_chosen: "convention/bienfait",
        analysis_axes: {
          sense_chosen: "convention/bienfait",
          concept_chosen: "Convention/Bienfait",
          concepts: {
            "Convention/Bienfait": {
              status: "retenu",
              senses: ["ce qui est connu", "ce qui est convenable", "convention sociale", "bienfait", "norme reconnue"],
              proof_ctx: "Le nom ma'rufin est un genitif indefini de la racine '-r-f (Form I masdar maf'ul). Le Lane's donne : ce qui est connu, ce qui est reconnu comme bien, ce qui est approuve, la convention sociale, le bienfait. Al-ma'ruf est l'ensemble de ce que la communaute reconnait comme bien — les normes morales et sociales partagees. Bi ma'rufin = selon ce qui est connu/approuve comme bien.",
              axe1_verset: "Bi ma'rufin apparait deux fois dans le verset 231 (avec l'imsak et avec le tasrih) et une fois dans le verset 229. La repetition deliberee marque que les deux options post-talaq sont soumises au meme standard moral : le ma'ruf. L'absence de bi ma'rufin dans la retention nuisible (la tumsikuhunna diraran) souligne que le diraram est precisement le contraire du ma'ruf.",
              axe2_voisins: "La racine '-r-f et al-ma'ruf sont recurrents dans tout le passage matrimonial (2:228, 229, 231, 232, 233, 234, 235, 236, 237, 240, 241). Al-ma'ruf est le standard normatif universel qui regit toutes les relations matrimoniales post-talaq.",
              axe3_sourate: "Dans al-Baqarah, al-ma'ruf est aussi mentionne en 2:178 (la loi du talion) et 2:263, 264 (la charite). Le sens de norme sociale reconnue est constant — ce que la conscience collective identifie comme bien.",
              axe4_coherence: "La racine '-r-f apparait environ 70 fois dans le Coran dans ses diverses formes. Al-ma'ruf (le bien reconnu) s'oppose a al-munkar (le reprehensible). La paire ma'ruf/munkar est fondamentale dans l'ethique coranique.",
              axe5_frequence: "La prescription bi ma'rufin est une norme flexible et adaptable : elle n'est pas figee dans un code rigide mais dans la reconnaissance communautaire de ce qui est bien. Cela permet au droit matrimonial de s'adapter aux contextes tout en maintenant un standard moral ferme."
            }
          }
        }
      },
      {
        word_key: "srh",
        position: 12,
        sense_chosen: "liberation/relachement",
        analysis_axes: {
          sense_chosen: "liberation/relachement",
          concept_chosen: "Libération/Relâchement",
          concepts: {
            "Libération/Relâchement": {
              status: "retenu",
              senses: ["liberer", "relacher", "laisser partir", "divorcer avec douceur", "tasrih"],
              proof_ctx: "Le verbe sarrihuhunna est un imperatif 2MP de la racine s-r-h (Form II, sarriha). Le Lane's donne : liberer, relacher, laisser partir librement, divorcer avec douceur, laisser patre librement (metaphore des troupeaux libres). La Form II intensive : acte delibere et complet de liberation. Sarrihuhunna = liberez-les. Le tasrih est la liberation active — laisser la femme partir librement a la fin de la 'idda.",
              axe1_verset: "Sarrihuhunna bi ma'rufin est la seconde option legale : si le mari ne veut pas retenir, il doit liberer convenablement. Le tasrih bi ma'rufin s'oppose au tasrih bi ihsar (liberation avec souffrance ou prejudice). La liberation doit etre nette, propre et respectueuse des droits de la femme.",
              axe2_voisins: "La racine s-r-h apparait en 2:229 (au tasrihun bi ihsan = liberation avec bonte) et 2:231 (sarrihuhunna bi ma'rufin). Les deux apparitions dans ce passage matricial soulignent que la liberation est l'alternative legitime a la retention — avec la meme exigence de bi ma'rufin/bi ihsan.",
              axe3_sourate: "La racine s-r-h est presente en 2:229, 231, 33:28, 33:49. Le tasrih (liberation) est le terme juridique du divorce definitif par consentement — la liberation avec dignite.",
              axe4_coherence: "La racine s-r-h apparait environ 8 fois dans le Coran. La metaphore du relachement libre (comme un animal qu'on laisse patre) est significative : la femme liberee n'est pas rejetee mais laissee libre, sans contrainte.",
              axe5_frequence: "L'imperatif sarrihuhunna (liberez-les) est un rappel que le mariage n'est pas une detention : la femme qui n'est pas retenue bi ma'rufin doit etre liberee bi ma'rufin. Il n'y a pas d'option de retention abusive — seulement deux options nobles."
            }
          }
        }
      },
      {
        word_key: "drr",
        position: 16,
        sense_chosen: "nuisance/tort",
        analysis_axes: {
          sense_chosen: "nuisance/tort",
          concept_chosen: "Nuisance/Tort",
          concepts: {
            "Nuisance/Tort": {
              status: "retenu",
              senses: ["nuire", "causer du tort", "prejudice", "dommage", "darar"],
              proof_ctx: "Le nom diraran est un accusatif masdar de la racine d-r-r. Le Lane's donne : nuire, causer du tort, prejudice, dommage, blesser. Diraran est le masdar d'intention (maf'ul li-ajlihi implicite) : la retention faite dans le but de nuire. La racine d-r-r designe le dommage cause a autrui — le darar (tort) est distinct de l'erreur involontaire.",
              axe1_verset: "La tumsikuhunna diraran (ne les retenez pas pour nuire) interdit precisement la retention malveillante : garder la femme pendant sa 'idda non pour maintenir le mariage mais pour lui nuire — l'empecher de se remarier, lui faire subir une attente inutile, la garder en etat d'incertitude. Cette pratique etait courante dans l'Arabie pre-islamique.",
              axe2_voisins: "Le principe de la non-nuisance (la darar wa la dirar) est repris dans la Sunna prophetique. Le verset 231 est l'une des bases coraniques de ce principe fondamental du droit islamique. La connexion entre diraram (nuire) et i'tida' (transgression) qui suit est directe : nuire = transgresser.",
              axe3_sourate: "La racine d-r-r et ses derives apparaissent en 2:231, 233, 282 dans al-Baqarah, toujours dans des contextes de protection contre le prejudice dans les relations contractuelles et matrimoniales.",
              axe4_coherence: "La racine d-r-r apparait environ 25 fois dans le Coran. Le darar (tort) est toujours condamne — que ce soit dans le contexte matrimonial, commercial ou social. La protection contre le darar est un principe juridique islamique fondamental.",
              axe5_frequence: "L'interdiction de la retention nuisible (diraram) protege la femme contre l'abus du droit du talaq revocable. Sans cette interdiction, un mari de mauvaise foi pourrait indefiniment retenir puis relancer la 'idda pour maintenir la femme dans un etat de precarite juridique."
            }
          }
        }
      },
      {
        word_key: "edw",
        position: 18,
        sense_chosen: "transgression/hostilite",
        analysis_axes: {
          sense_chosen: "transgression/hostilite",
          concept_chosen: "Transgression/Hostilité",
          concepts: {
            "Transgression/Hostilité": {
              status: "retenu",
              senses: ["transgresser", "depasser les limites", "etre hostile", "franchir les frontieres", "i'tida"],
              proof_ctx: "Le verbe ta'tadu est un inaccompli subjonctif 2MP de la racine '-d-w (Form VIII, i'tada). Le Lane's donne : transgresser, depasser les limites fixees, etre hostile, franchir les frontieres normatives. La Form VIII reflexive intensifie : s'engager deliberement dans la transgression. Li ta'tadu = pour que vous transgressiez — la retention nuisible est une transgression deliberee.",
              axe1_verset: "Li ta'tadu est la finalite malveillante de la retention nuisible : on retient la femme (diraram) afin de pouvoir transgresser (li ta'tadu). La transgression ici est le depassement des hudud Allah (limites de Dieu) mentionnes dans le verset 229. Retenir pour nuire = franchir les limites = i'tida.",
              axe2_voisins: "La racine '-d-w apparait en 2:190, 191, 193, 229, 231, 178. Dans le contexte du talaq (2:229, 231), i'tida est le depassement des normes matrimoniales fixees par Dieu. La connexion entre diraram (nuire) et i'tida (transgresser) en 2:231 montre que la nuisance est une forme de transgression.",
              axe3_sourate: "Dans al-Baqarah, la racine '-d-w couvre l'hostilite dans les conflits (2:190-194) et la transgression dans le droit (2:229, 231). Le sens fondamental — depassement d'une limite — est constant.",
              axe4_coherence: "La racine '-d-w apparait environ 100 fois dans le Coran dans ses diverses formes. L'i'tida est la transgression deliberee des normes divines — plus grave que l'erreur (khata) ou l'oubli (nisyan).",
              axe5_frequence: "L'association diraram/i'tida dans le verset 231 cree une equivalence : nuire a sa femme en la retenant abusivement est une transgression des limites divines. Cette equivalence morale est importante : l'injustice domestique est traitee avec la meme severite que la transgression religieuse."
            }
          }
        }
      },
      {
        word_key: "fel",
        position: 21,
        sense_chosen: "action/accomplissement",
        analysis_axes: {
          sense_chosen: "action/accomplissement",
          concept_chosen: "Action/Accomplissement",
          concepts: {
            "Action/Accomplissement": {
              status: "retenu",
              senses: ["faire", "agir", "accomplir", "acte delibere", "fi'l"],
              proof_ctx: "Le verbe yaf'al est un inaccompli jussif 3MS de la racine f-'-l. Le Lane's donne : faire, agir, accomplir un acte, oeuvrer. La racine f-'-l est la racine de l'action en general — le fi'l (acte). Yaf'al dhalika = il fait cela — la reference est a la retention nuisible et a la transgression du verset precedent.",
              axe1_verset: "Man yaf'al dhalika (quiconque fait cela) introduit la consequence universelle : celui qui retient nuisiblement et transgresse (dhalika = cela, reference aux deux interdits) a opprime son ame. Le yaf'al au jussif est une condition : si quelqu'un accomplit cet acte, alors la consequence suit. L'acte (fi'l) est condamne sans exception.",
              axe2_voisins: "La formule man yaf'al dhalika est recurrente dans al-Baqarah et le Coran pour introduire les consequences d'un acte interdit. Elle est presente en 2:231 (retention nuisible), 4:30 (injustice), 2:196 (rupture du pelerinage), etc. C'est une formule de responsabilisation individuelle.",
              axe3_sourate: "La racine f-'-l apparait tres frequemment dans al-Baqarah. Le fi'l (acte) est la base de la responsabilite morale et juridique dans le Coran — on est juge sur ses actes.",
              axe4_coherence: "La racine f-'-l apparait plusieurs centaines de fois dans le Coran. Le sens d'acte/action deliberee est constant. La responsabilite personelle (man yaf'al = quiconque agit) est un principe fondamental de la morale coranique.",
              axe5_frequence: "L'emploi de yaf'al au singulier (3MS) apres man (quiconque) est grammaticalement standard et moralement significatif : chaque individu est interpelle personnellement. La communaute n'efface pas la responsabilite individuelle."
            }
          }
        }
      },
      {
        word_key: "zlm",
        position: 25,
        sense_chosen: "oppression/injustice",
        analysis_axes: {
          sense_chosen: "oppression/injustice",
          concept_chosen: "Oppression/Injustice",
          concepts: {
            "Oppression/Injustice": {
              status: "retenu",
              senses: ["opprimer", "etre injuste", "causer du tort", "placer hors de sa place", "zulm"],
              proof_ctx: "Le verbe zalama est un accompli 3MS de la racine z-l-m. Le Lane's donne : opprimer, etre injuste, causer du tort, placer quelque chose hors de sa place (litteralement : dans les tenebres, az-zulma = l'obscurite). Zalama nafsahu = il a opprime son ame propre. L'idee centrale est le deplacement de l'ordre naturel — l'injuste place les choses la ou elles ne devraient pas etre.",
              axe1_verset: "Zalama nafsahu (il a opprime son ame) est la consequence de la retention nuisible et de la transgression. L'oppression est auto-infligee : celui qui commet l'injustice contre sa femme se nuit en premier a lui-meme. Cette formule coranique retourne la responsabilite : l'oppresseur est aussi la victime de son propre zulm.",
              axe2_voisins: "La racine z-l-m apparait frequemment dans al-Baqarah (2:35, 51, 54, 57, 59, 92, 150, 165, 193, 229, 231, 246, 254, 270, 279, 281). Le zulm (injustice/oppression) est l'un des concepts moraux les plus frequents du Coran. En 2:231, le contexte est le zulm conjugal.",
              axe3_sourate: "Dans al-Baqarah, le zulm couvre l'injustice contre Dieu (shirk), contre soi-meme (zulm al-nafs) et contre autrui. En 2:231, c'est le zulm al-nafs (oppression de sa propre ame) — le plus prive des trois formes.",
              axe4_coherence: "La racine z-l-m apparait environ 290 fois dans le Coran, ce qui en fait l'une des racines les plus frequentes. Le zulm est le contraire de l'adl (justice) et l'une des qualites les plus condamnees dans le Coran.",
              axe5_frequence: "Le retournement zalama nafsahu (il a opprime son ame) est une formule pedagogique puissante : l'injustice faite a autrui est d'abord une injustice faite a soi-meme. Cela cree un incentif ethique au-dela de la sanction externe : l'oppresseur se blesse lui-meme en premier."
            }
          }
        }
      },
      {
        word_key: "nfs",
        position: 26,
        sense_chosen: "ame/soi",
        analysis_axes: {
          sense_chosen: "ame/soi",
          concept_chosen: "Âme/Soi",
          concepts: {
            "Âme/Soi": {
              status: "retenu",
              senses: ["ame", "souffle vital", "soi-meme", "personne", "etre vivant"],
              proof_ctx: "Le nom nafsahu est un accusatif de la racine n-f-s avec suffixe possessif masculin singulier. Le Lane's donne : ame, souffle vital, soi-meme, personne, vie, essence de l'etre. Nafsahu = son ame propre / lui-meme. La nafs est le soi profond — l'etre dans son integrite. Zalama nafsahu = il a opprime son ame propre / il s'est blesse lui-meme.",
              axe1_verset: "Nafsahu (son ame) est l'objet de l'oppression auto-infligee : celui qui retient nuisiblement opprime en premier sa propre nafs. L'emploi de la nafs ici souligne que l'injustice n'est pas seulement sociale (contre la femme) ou juridique (contre les lois divines) mais ontologique — elle atteint l'essence meme de l'etre.",
              axe2_voisins: "La formule zalama nafsahu est recurrente dans le Coran (2:231, 2:54, 7:23, 7:177, 11:101, etc.). Elle designe invariablement l'acte de se nuire a soi-meme en commettant une injustice — un retournement ethique fondamental.",
              axe3_sourate: "Dans al-Baqarah, la nafs apparait en 2:48 (aucune ame ne sera secourue), 2:54 (tuez vos ames = pardonnez-vous mutuellement), 2:233 (aucune ame ne sera chargee au-dela de sa capacite). La nafs est le centre de la responsabilite morale individuelle.",
              axe4_coherence: "La racine n-f-s apparait environ 295 fois dans le Coran, ce qui en fait l'une des racines les plus frequentes. La nafs couvre l'ame, la personne, le soi — trois dimensions de l'etre individuel.",
              axe5_frequence: "L'emploi de la nafs comme objet de l'oppression (zalama nafsahu) cree une responsabilite interieure : l'injustice n'est pas seulement une transgression externe mais une blessure de son propre etre. Cette formulation interorise la morale."
            }
          }
        }
      },
      {
        word_key: "akhz",
        position: 28,
        sense_chosen: "prise/adoption",
        analysis_axes: {
          sense_chosen: "prise/adoption",
          concept_chosen: "Prise/Adoption",
          concepts: {
            "Prise/Adoption": {
              status: "retenu",
              senses: ["prendre", "saisir", "adopter", "utiliser pour", "prendre comme"],
              proof_ctx: "Le verbe tattakhidhu est un inaccompli jussif 2MP de la racine '-kh-z (Form VIII, ittakhadha). Le Lane's donne : prendre, saisir, s'emparer de, adopter quelque chose comme etant quelque chose d'autre. La Form VIII ittakhadha signifie prendre deliberement pour/comme : adopter quelque chose comme instrument, traiter quelque chose comme. La tattakhidhu ayati Allahi huzuwan = ne prenez pas les signes de Dieu en faisant d'eux de la derision.",
              axe1_verset: "La tattakhidhu ayati Allahi huzuwan (ne prenez pas les signes de Dieu en derision) est un avertissement direct : le talaq etant une disposition divine, l'utiliser comme pretexte a la moquerie ou comme jeu est interdit. L'ittikhadh (prise/adoption) implique une utilisation deliberee — on fait des signes divins un objet de derision.",
              axe2_voisins: "La racine '-kh-z (Form VIII) avec huzuwan (derision) revient en 4:140 (ittakhadhu ayat Allah huzuwan = ils prennent les signes de Dieu en derision) et en 9:65-66. C'est une formule de condamnation des moqueurs des revelations divines.",
              axe3_sourate: "Dans al-Baqarah, la racine '-kh-z apparait en 2:51, 54, 80, 231, 256 (la ikraha fi al-din), 286. Le sens de prise/adoption deliberee est constant.",
              axe4_coherence: "La racine '-kh-z apparait environ 120 fois dans le Coran. La Form VIII ittakhadha est particulierement utilisee pour la prise deliberee — adopter quelque chose comme partenaire (ittakhadhu min duni Allahi awliya), comme chef, comme objet de derision.",
              axe5_frequence: "L'interdiction de tattakhidhu huzuwan est particulierement pertinente dans le contexte du talaq : des hommes de l'epoque repudiaient et retractaient leur talaq de maniere repetitive et ludique. Le verset condamne cette pratique comme une prise des signes divins en derision."
            }
          }
        }
      },
      {
        word_key: "ayy",
        position: 29,
        sense_chosen: "signe/indice",
        analysis_axes: {
          sense_chosen: "signe/indice",
          concept_chosen: "Signe/Indice",
          concepts: {
            "Signe/Indice": {
              status: "retenu",
              senses: ["signe", "indice", "preuve", "miracle", "verset", "aya"],
              proof_ctx: "Le nom ayati est un genitif pluriel de la racine '-y-y (ou '-w-y). Le Lane's donne : signe, indice, marque distinctive, preuve, miracle, verset du Coran. L'aya est fondamentalement un signe — quelque chose qui pointe vers autre chose, qui indique une realite cachee. Ayati Allahi = les signes de Dieu — les indices de sa presence et de sa volonte.",
              axe1_verset: "Ayati Allahi dans le verset 231 designe les injonctions divines du passage sur le talaq (retenez convenablement / liberez convenablement / ne nuisez pas). Ces regles sont des signes (ayat) de la volonte divine — les prendre en derision est donc une atteinte directe a Dieu lui-meme.",
              axe2_voisins: "La formule tattakhidhu ayati Allahi huzuwan revient en 4:140 avec les memes termes. Les ayat sont frequemment mentionnes dans al-Baqarah : en 2:39, 61, 99, 106, 118, 145, 159, 170, 211, 231, 252, 253. Ils couvrent a la fois les versets reveles et les signes dans la creation.",
              axe3_sourate: "Dans al-Baqarah, les ayat sont les revelations divines (2:99), les signes de la creation (2:164), et les injonctions legislatives (2:231). L'aya est un concept unificateur — tout ce qui vient de Dieu est signe.",
              axe4_coherence: "La racine '-y-y apparait environ 380 fois dans le Coran, ce qui en fait l'une des plus frequentes. L'aya (signe) est l'un des concepts centraux de la theologie coranique — tout est signe de Dieu pour celui qui sait lire.",
              axe5_frequence: "La connexion entre les regles du talaq (signes legislatifs) et les ayat divins est fondamentale : le droit matrimonial n'est pas seulement une legislation pratique mais un signe de la sagesse divine. Le traiter avec derision revient a nier la sagesse divine qui l'a institue."
            }
          }
        }
      },
      {
        word_key: "hzw",
        position: 31,
        sense_chosen: "derision/moquerie",
        analysis_axes: {
          sense_chosen: "derision/moquerie",
          concept_chosen: "Dérision/Moquerie",
          concepts: {
            "Dérision/Moquerie": {
              status: "retenu",
              senses: ["derision", "moquerie", "raillerie", "traiter avec legerete", "huzuw"],
              proof_ctx: "Le nom huzuwan est un accusatif masdar de la racine h-z-w. Le Lane's donne : derision, moquerie, raillerie, traiter quelque chose avec legerete et mepris. Al-huzuw est l'acte de ridiculiser — traiter une chose serieuse comme un jeu ou une plaisanterie. Huzuwan = en derision / en se moquant / comme un jeu.",
              axe1_verset: "Tattakhidhu ayati Allahi huzuwan (prendre les signes de Dieu en derision) condamne deux pratiques : 1) se moquer litteralement des versets coraniques, 2) traiter les injonctions divines avec legerete en les utilisants de maniere abusive ou ludique. Dans le contexte du talaq, c'est la seconde : repudier et retenir de maniere repetitive et non serieuse est une forme de huzuw.",
              axe2_voisins: "La racine h-z-w apparait en 2:67 (ittakhadhaha huzuwan = ils l'ont pris en derision, a propos de la vache) et en 2:231, 4:140, 9:65-66. La derision des signes divins est condamnee dans plusieurs contextes — c'est une transgression morale grave.",
              axe3_sourate: "En 2:67, les Israelites prennent l'injonction de la vache en derision (huzuwan). En 2:231, le huzuw vise les injonctions du talaq. Dans les deux cas, la reaction de derision devant les prescriptions divines est condamnee.",
              axe4_coherence: "La racine h-z-w apparait environ 8 fois dans le Coran. Le sens de derision/moquerie est constant. Al-huzuw est le contraire du ta'zim (reverence) — traiter ce qui est grave avec legerete.",
              axe5_frequence: "L'interdiction du huzuw des signes divins dans un contexte juridique (le talaq) est pedagogiquement importante : les lois divines ne sont pas des jeux que l'on peut manipuler. Elles ont une gravite morale et ontologique qui exige le serieux (ta'zim)."
            }
          }
        }
      },
      {
        word_key: "dhkr",
        position: 33,
        sense_chosen: "rappel/memoire",
        analysis_axes: {
          sense_chosen: "rappel/memoire",
          concept_chosen: "Rappel/Mémoire",
          concepts: {
            "Rappel/Mémoire": {
              status: "retenu",
              senses: ["rappeler", "se souvenir", "mentionner", "commemorer", "dhikr"],
              proof_ctx: "Le verbe udhkuru est un imperatif 2MP de la racine dh-k-r. Le Lane's donne : rappeler, se souvenir de, mentionner, commémorer, faire memoire. Udhkuru ni'mata Allahi = rappelez-vous le bienfait de Dieu. Le dhikr est la remembrance active — maintenir present a l'esprit ce qui est important. L'imperatif udhkuru est un appel a l'acte de memoire consciente.",
              axe1_verset: "Udhkuru ni'mata Allahi 'alaykum (rappelez-vous le bienfait de Dieu envers vous) est le premier des trois imperatifs de conclusion du verset 231. Apres les interdits (ne retenez pas pour nuire / ne prenez pas en derision), vient l'imperatif positif : rappelez-vous. Le dhikr du bienfait divin est une contre-mesure a l'ingratitude et a la legerete.",
              axe2_voisins: "Le dhikr (rappel/memoire) est un concept central dans le Coran. Il revient en 2:152 (udhkuruni adhkurkum = rappelez-vous de Moi, Je Me souviendrai de vous), 2:200 (udhkuru Allaha = rappelez-vous de Dieu), 2:203, 238, 239. Le dhikr est l'un des actes fondamentaux de la vie spirituelle.",
              axe3_sourate: "Dans al-Baqarah, le dhikr couvre la memoire des bienfaits divins (2:231), la remembrance de Dieu (2:152, 200), et la commemoration des rites (2:200, 203). La racine dh-k-r est la racine de la vie spirituelle consciente.",
              axe4_coherence: "La racine dh-k-r apparait environ 280 fois dans le Coran dans ses diverses formes, ce qui en fait l'une des plus frequentes. Le dhikr est a la fois la memoire (acte cognitif), la mention (acte verbal) et la commemoration (acte liturgique).",
              axe5_frequence: "L'imperatif udhkuru (rappelez-vous) apres les interdits moraux du talaq est significatif : le rappel du bienfait divin est le remede a l'injustice. Celui qui se souvient de ce que Dieu lui a donne ne peut traiter les lois divines avec legerete ou en user pour nuire."
            }
          }
        }
      },
      {
        word_key: "nem",
        position: 34,
        sense_chosen: "bienfait/grace",
        analysis_axes: {
          sense_chosen: "bienfait/grace",
          concept_chosen: "Bienfait/Grâce",
          concepts: {
            "Bienfait/Grâce": {
              status: "retenu",
              senses: ["bienfait", "faveur", "don", "abondance", "grace", "ni'ma"],
              proof_ctx: "Le nom ni'mata est un accusatif de la racine n-'-m. Le Lane's donne : bienfait, faveur, bonheur, abondance, don, grace. Al-ni'ma est ce que Dieu accorde en plus — au-dela du necessaire, le bienfait genereux. Ni'mata Allahi 'alaykum = le bienfait de Dieu sur vous — la faveur divine accordee a la communaute.",
              axe1_verset: "Ni'mata Allahi 'alaykum (le bienfait de Dieu envers vous) est l'objet du rappel (dhikr). Le bienfait n'est pas specifie — il est general et total. Dans le contexte du verset 231, il inclut l'Islam lui-meme, la communaute, et les regles divines du mariage qui protegent les deux partenaires.",
              axe2_voisins: "La racine n-'-m apparait en 2:211 (ni'mati Allahi = mon bienfait), 2:231, 3:103, 5:3, 14:28, 16:18, etc. La formula « udhkuru ni'mata Allahi » (rappelez-vous le bienfait de Dieu) est recurrente dans le Coran — une invitation a la gratitude.",
              axe3_sourate: "Dans al-Baqarah, la ni'ma divine inclut la liberation de l'esclavage (2:49), la nourriture dans le desert (2:57), et les revelations legislatives (2:231). Le bienfait divin couvre le materiel et le spirituel.",
              axe4_coherence: "La racine n-'-m apparait environ 150 fois dans le Coran dans ses diverses formes. Al-ni'ma (bienfait) s'oppose a al-niqma (chatiment) — la paire divine grâce/rigueur. La gratitude (shukr) est la reponse appropriee au bienfait.",
              axe5_frequence: "L'invitation a se rappeler le bienfait divin (udhkuru ni'mata Allahi) dans un contexte juridique est pedagogiquement profonde : les lois du talaq sont elles-memes un bienfait — elles protegent les deux parties et empeche les abus. La legislation divine est une ni'ma qu'il faut reconnaitre."
            }
          }
        }
      },
      {
        word_key: "ktb",
        position: 42,
        sense_chosen: "ecriture/prescription",
        analysis_axes: {
          sense_chosen: "ecriture/prescription",
          concept_chosen: "Écriture/Prescription",
          concepts: {
            "Écriture/Prescription": {
              status: "retenu",
              senses: ["ecriture", "livre", "prescription", "ce qui est ecrit", "kitab"],
              proof_ctx: "Le nom al-kitab est de la racine k-t-b. Le Lane's donne : ecriture, livre, prescription, message ecrit, document, ce qui est trace. Al-kitab est fondamentalement ce qui est ecrit — le resultat de l'acte d'ecriture. En contexte coranique, al-kitab designe la revelation divine transmise par ecrit — le Coran comme Livre.",
              axe1_verset: "Wa ma anzala 'alaykum min al-kitabi wa al-hikmati (et ce qu'Il a fait descendre sur vous du Livre et de la Sagesse) est la specificite du bienfait mentionne : le bienfait divin inclut le Livre (al-kitab = le Coran revele) et la Sagesse (al-hikmah = la comprehension juste). Les deux ensemble constituent la revelation complete.",
              axe2_voisins: "La paire al-kitab wa al-hikmah revient en 2:129, 151, 231 ; 3:48, 81, 164 ; 4:54, 113 ; 33:34 ; 62:2. C'est une formule technique du Coran pour designer la revelation dans sa double dimension : le texte ecrit et son intelligence appliquee.",
              axe3_sourate: "Dans al-Baqarah, al-kitab est mentionne en 2:2 (dhalika al-kitab = voila le Livre), 2:44, 78, 85, 87, 101, 113, 121, 129, 144, 145, 151, 176, 213, 231. Al-kitab est l'un des concepts centraux de la sourate.",
              axe4_coherence: "La racine k-t-b apparait environ 319 fois dans le Coran, ce qui en fait l'une des plus frequentes. Al-kitab couvre le Coran, la Torah, l'Evangile, et les Ecritures anterieures. L'ecriture est le mode de preservation de la revelation divine.",
              axe5_frequence: "La revelation du Livre (al-kitab) comme bienfait divin rappelle la dimension intellectuelle de la foi : Dieu n'a pas seulement donne des commandements oraux mais un texte ecrit, preserve et transmis. Le Livre est un gift pour ceux qui lisent et comprennent."
            }
          }
        }
      },
      {
        word_key: "hkm",
        position: 44,
        sense_chosen: "sagesse/jugement",
        analysis_axes: {
          sense_chosen: "sagesse/jugement",
          concept_chosen: "Sagesse/Jugement",
          concepts: {
            "Sagesse/Jugement": {
              status: "retenu",
              senses: ["sagesse", "jugement", "decision", "gouvernance", "discernement", "hikma"],
              proof_ctx: "Le nom al-hikmah est de la racine h-k-m. Le Lane's donne : sagesse, jugement, decision, gouvernance, discernement, ce qui empeche de faire le mal (hikma vient de l'idee de freiner/empecher). Al-hikmah est la sagesse appliquee — l'intelligence qui juge, decide et gouverne avec justesse.",
              axe1_verset: "Al-kitab wa al-hikmah dans le verset 231 designent la revelation complete : le Livre (texte ecrit) et la Sagesse (intelligence de sa mise en oeuvre). Ya'izukum bihi (Il vous exhorte par cela) montre que la revelation n'est pas seulement texte mais exhortation vivante — la hikmah est la dimension vivante du Livre.",
              axe2_voisins: "La paire al-kitab wa al-hikmah est recurrente (voir axe2 de ktb). La hikmah est systematiquement associee au Livre — elle en est le complement indissociable. La revelation sans sagesse serait lettre morte ; la sagesse sans revelation serait arbitraire.",
              axe3_sourate: "Dans al-Baqarah, la hikmah apparait en 2:129, 151, 231, 251, 269. En 2:269 : wa man yu'ta al-hikmata fa qad utiya khayran kathiran (celui a qui la sagesse est donnee a recu un immense bien).",
              axe4_coherence: "La racine h-k-m apparait environ 210 fois dans le Coran dans ses diverses formes. Al-hakim (le Sage) est l'un des noms divins. Al-hikmah est l'attribut du gouvernement juste — la sagesse est a la fois intellect et gouvernance.",
              axe5_frequence: "La hikmah comme bienfait divin distinct du Livre signifie que Dieu ne donne pas seulement un texte mais aussi l'intelligence pour le comprendre et l'appliquer. Dans le contexte du talaq, la hikmah est la sagesse pratique du droit matrimonial — comprendre pourquoi ces regles existent et comment les appliquer justement."
            },
            "Gouvernance/Autorite": {
              status: "probable",
              senses: ["gouverner", "juger", "exercer l'autorite", "statuer", "hukm"],
              proof_ctx: "La racine h-k-m donne aussi al-hukm (le jugement/la decision) et al-hakim (le juge/gouvernant). En 2:251, wa atahu Allah al-mulk wa al-hikmah = Dieu lui donna la royaute et la sagesse. La hikmah peut inclure la dimension de gouvernance.",
              axe1_verset: "En 2:231, al-hikmah est associee au Livre (al-kitab) et a l'exhortation (ya'izu). Le sens dominant est la sagesse appliquee plutot que la gouvernance au sens politique — bien que les deux soient connexes dans la racine.",
              axe2_voisins: "Dans le verset 2:251, hikmah est associee a la royaute (mulk). Dans le verset 2:269, hikmah est le don le plus precieux. Les deux emplois suggerent que la hikmah couvre un spectre large : sagesse cognitive et autorite normative.",
              axe3_sourate: "La hikmah prophetique est a la fois sagesse personnelle et autorite normative. En 2:231, le contexte est la revelation legislative — la dimension de jugement/autorite est donc presente mais secondaire par rapport a la sagesse.",
              axe4_coherence: "Le hukm (jugement) et la hikmah (sagesse) partagent la meme racine mais se distinguent : le hukm est l'acte de juger, la hikmah est la qualite du juge sage. Dans le Coran, les deux sont souvent inseparables.",
              axe5_frequence: "La dimension de gouvernance de la hikmah est pertinente dans un contexte legislatif (le talaq) : les regles du mariage sont un hukm divin (jugement) informe par la hikmah (sagesse). Dieu legifere avec sagesse."
            }
          }
        }
      },
      {
        word_key: "wez",
        position: 45,
        sense_chosen: "exhortation/conseil",
        analysis_axes: {
          sense_chosen: "exhortation/conseil",
          concept_chosen: "Exhortation/Conseil",
          concepts: {
            "Exhortation/Conseil": {
              status: "retenu",
              senses: ["exhorter", "conseiller", "admonester", "avertir", "wa'z"],
              proof_ctx: "Le verbe ya'izukum est un inaccompli 3MS de la racine w-'-z. Le Lane's donne : exhorter, conseiller, admonester avec bienveillance, avertir, instruire par des paroles qui touchent le coeur. Al-wa'z est l'exhortation — la parole qui instruit et touche, qui appelle a l'action juste. Ya'izukum bihi = Il vous exhorte par cela (le Livre et la Sagesse).",
              axe1_verset: "Ya'izukum bihi (Il vous exhorte par cela) est la finalite de la revelation du Livre et de la Sagesse : Dieu ne donne pas seulement des prescriptions mais des exhortations — des paroles qui touchent le coeur et motivent l'action juste. L'exhortation (wa'z) est plus intime que la loi — c'est un appel, pas seulement une obligation.",
              axe2_voisins: "La racine w-'-z revient en 2:232, 4:34, 16:125, 31:13. En 2:232, yuwaazu bihi = c'est a quoi est exhorte (contexte similaire du talaq). L'exhortation divine est un mode d'intervention bienveillant — Dieu parle au coeur, pas seulement a la raison.",
              axe3_sourate: "Dans al-Baqarah, la racine w-'-z apparait en 2:231 et 232. Elle marque la transition entre la legislation formelle (lois du talaq) et l'invitation spirituelle (craignez Dieu, rappelez-vous le bienfait). L'exhortation est le pont entre la loi et la spiritualite.",
              axe4_coherence: "La racine w-'-z apparait environ 25 fois dans le Coran. Al-wa'z (l'exhortation) est l'une des fonctions prophetiques — le prophete est un mu'iz (exhortateur). En 16:125, la da'wa (invitation) passe par al-hikmah, al-maw'iza al-hasana (la belle exhortation), et al-jadal al-ahsan (le beau dialogue).",
              axe5_frequence: "L'emploi de ya'izukum (Il vous exhorte) plutot d'un imperatif ou d'une interdiction est significatif : Dieu n'impose pas seulement des regles mais s'adresse au coeur. La relation entre Dieu et les croyants est exhortative autant que legislative — une intimite dans l'instruction."
            }
          }
        }
      },
      {
        word_key: "wqy",
        position: 47,
        sense_chosen: "protection/piete",
        analysis_axes: {
          sense_chosen: "protection/piete",
          concept_chosen: "Protection/Piété",
          concepts: {
            "Protection/Piété": {
              status: "retenu",
              senses: ["se proteger", "se premunir", "craindre en se gardant", "taqwa", "piete"],
              proof_ctx: "Le verbe ittaqu est un imperatif 2MP de la racine w-q-y (Form VIII, ittaqa). Le Lane's donne : se proteger de, se premunir contre, craindre Dieu en se gardant de ce qui deplait, la taqwa (piete preventive). Ittaqu Allaha = protegez-vous de Dieu / craignez Dieu en vous gardant de sa desobeissance. La taqwa est une protection active — non une crainte paralysante mais une vigilance qui preserve.",
              axe1_verset: "Wa ittaqu Allaha (et craignez Dieu) est le premier des deux imperatifs de cloture du verset 231. Apres les interdits et les encouragements, vient l'invitation a la taqwa — la protection-piete qui motive l'ensemble. La taqwa est la disposition interieure qui rend les lois exterieures operantes.",
              axe2_voisins: "Ittaqu Allaha est l'une des formules les plus recurrentes du Coran — elle revient dans pratiquement toutes les sections legislatives de al-Baqarah (2:189, 194, 196, 203, 206, 223, 231, 233, 241, 278, 281, 282, 283). La taqwa est le principe motivationnel de toute la legislation islamique.",
              axe3_sourate: "Dans al-Baqarah, la taqwa est la qualite des muttaqin (pieux) mentionnee des le verset 2 (guidance pour les muttaqin). La sourate est encadree par la taqwa — elle commence par la guidance pour les pieux et ses sections legislatives se closent par des appels a la taqwa.",
              axe4_coherence: "La racine w-q-y apparait environ 260 fois dans le Coran dans ses diverses formes. Al-taqwa est l'un des concepts les plus importants de la theologie coranique — la piete comme protection, la crainte de Dieu comme bouclier contre le mal.",
              axe5_frequence: "L'imperatif ittaqu apres la legislation du talaq est une reminder que les lois divines ne sont operantes que si elles sont motivees par la taqwa. La piete n'est pas dans la connaissance des regles mais dans la disposition interieure qui fait qu'on les respecte meme quand personne ne regarde."
            }
          }
        }
      },
      {
        word_key: "elm",
        position: 49,
        sense_chosen: "savoir/connaissance",
        analysis_axes: {
          sense_chosen: "savoir/connaissance",
          concept_chosen: "Savoir/Connaissance",
          concepts: {
            "Savoir/Connaissance": {
              status: "retenu",
              senses: ["savoir", "connaitre", "etre informe", "connaissance certaine", "'ilm"],
              proof_ctx: "Le verbe i'lamu est un imperatif 2MP de la racine '-l-m. Le Lane's donne : savoir, connaitre, etre informe, avoir la connaissance certaine. I'lamu anna Allaha bi kulli shay'in 'alim = sachez que Dieu est savant de toute chose. L'imperatif i'lamu (sachez) est un appel a la cognition certaine — pas une supposition mais une conviction.",
              axe1_verset: "I'lamu anna Allaha bi kulli shay'in 'alim (sachez que Dieu est omniscient) est la cloture epistemique du verset 231. Apres les lois (imsak/tasrih), les interdits (diraram/i'tida), les encouragements (dhikr al-ni'ma), et la piete (taqwa), vient la certitude : Dieu sait tout. L'omniscience divine est la garantie ultime que nul ne peut tricher avec les lois divines.",
              axe2_voisins: "La formule anna Allaha bi kulli shay'in 'alim (que Dieu est omniscient) revient en 2:231, 282, 3:66, 4:176, etc. C'est une cloture frequente des sections legislatives : apres les lois, l'omniscience divine qui garantit leur efficacite.",
              axe3_sourate: "Dans al-Baqarah, la racine '-l-m est omniprésente. En 2:32 (wa anta al-'alim al-hakim = Tu es le Savant, le Sage), 2:115, 2:137, 2:158, 2:181, 2:216, 2:231, 2:232, 2:246, 2:256, 2:261, 2:268, 2:282. L'omniscience divine (al-'ilm) est un des attributs divins les plus soulignés dans la sourate.",
              axe4_coherence: "La racine '-l-m apparait environ 750 fois dans le Coran — c'est l'une des racines les plus frequentes. Al-'alim (l'Omniscient) est l'un des noms divins les plus frequents. La connaissance ('ilm) est l'attribut divin qui fonde la legislation : Dieu legifere parce qu'Il sait.",
              axe5_frequence: "La cloture du verset 231 sur l'omniscience divine (bi kulli shay'in 'alim) est un avertissement subtil : les lois du talaq sont instituees par Celui qui sait tout. Nul ne peut y deroger en secret — ni en retenant nuisiblement, ni en prenant les signes divins en derision. L'omniscience est le garant de la justice."
            }
          }
        }
      }
    ],
    daily_phrases: []
  }
};

async function main() {
  const data = verseData[231];
  const { error: veErr } = await supabase.from('verse_analyses').update({
    translation_arab: data.translation_arab,
    full_translation: data.full_translation,
    translation_explanation: data.translation_explanation,
    segments: data.segments
  }).eq('id', data.analysis_id);
  if (veErr) { console.error('verse_analyses ERROR:', veErr.message); return; }
  console.log('verse_analyses updated (V231)');

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
  console.log('\n✅ V231 TERMINE');
}
main().catch(console.error);
