const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// =====================================================
// PIPELINE SOURATE 2 — VERSET 143
// verse_id=150, analysis_id=512
// "Et ainsi Nous avons fait de vous une communaute du milieu
//  pour que vous soyez temoins sur les gens et que l'envoye
//  soit temoin sur vous. Et Nous n'avons etabli la direction
//  sur laquelle tu etais que pour savoir qui suit l'envoye
//  de celui qui se retourne sur ses talons. Et c'etait certes
//  une grande epreuve sauf pour ceux que Dieu a guides.
//  Et Dieu n'est pas tel qu'Il fasse perdre votre foi.
//  Certes Dieu est, envers les gens, compatissant et
//  misericordieux."
// =====================================================

const verseData = {
  143: {
    verse_id: 150,
    analysis_id: 512,
    translation_arab: "Et ainsi Nous avons fait de vous une communaute du milieu pour que vous soyez temoins sur les gens et que l'envoye soit temoin sur vous. Et Nous n'avons etabli la direction sur laquelle tu etais que pour savoir qui suit l'envoye de celui qui se retourne sur ses talons. Et c'etait certes une grande epreuve sauf pour ceux que Dieu a guides. Et Dieu n'est pas tel qu'Il fasse perdre votre foi. Certes Dieu est, envers les gens, compatissant et misericordieux.",
    full_translation: "Et aussi Nous avons fait de vous une communaute de justes pour que vous soyez temoins aux gens, comme le Messager sera temoin a vous. Et Nous n'avions etabli la direction (Qibla) vers laquelle tu te tournais que pour savoir qui suit le Messager et qui s'en retourne sur ses talons. C'etait certes une grande epreuve, mais pas pour ceux qu'Allah guide. Et ce n'est pas Allah qui vous fera perdre [la recompense de] votre foi, car Allah, certes est Compatissant et Misericordieux pour les gens.",
    translation_explanation: `§DEMARCHE§
Le verset s'ouvre par **wa-ka-dhalika** (et ainsi), expression comparative qui lie ce verset a ce qui precede — la designation de la communaute est dans la continuite du plan divin. Le verbe **ja'alnakum** est un accompli 1P de la racine j-'-l avec pronom suffixe 2MP (kum). Le Lane's donne : faire, rendre, etablir, placer. L'accompli marque que l'acte est acheve — Dieu a fait de vous, c'est un fait accompli. Le pronom « nous » est le nous de majeste divine. Le nom **ummatan** est un accusatif feminin singulier indefini de la racine a-m-m. Le Lane's donne : mere, communaute, nation, peuple. Ici le mot designe le groupe humain uni — une communaute. L'indefini marque la nature qualitative : une communaute (d'un certain type). Le nom **wasatan** est un accusatif masculin singulier de la racine w-s-t. Le Lane's donne : milieu, centre, meilleur, modere. Le wasat designe le point equidistant des extremes. Ici la communaute est qualifiee de « du milieu » — ni dans l'exces ni dans le defaut. Le Lane's precise que wasat peut signifier « le meilleur » car ce qui est au centre evite les deux extremes. La preposition **li** (pour) + le verbe **takunu** (inaccompli 2MP subjonctif de k-w-n) introduit le but : pour que vous soyez. Le nom **shuhada'a** est un pluriel brise accusatif de la racine sh-h-d. Le Lane's donne : temoin, celui qui est present et voit, celui qui atteste. Le pluriel brise indique un groupe de temoins. Les temoins sont ceux qui ont vu et qui rapportent — leur parole engage parce qu'elle vient de l'observation directe. La preposition **'ala** (sur) indique la superiorite ou la responsabilite : temoins sur les gens, c'est-a-dire garants pour eux. Le nom **an-nasi** est le genitif defini pluriel de la racine n-w-s. Le Lane's donne : gens, etres humains, peuple. L'article defini (an-nas) designe l'ensemble des gens, l'humanite. La coordination **wa** (et) + **yakuna** (inaccompli 3MS subjonctif de k-w-n) enchaine : et que l'envoye soit. Le nom **ar-rasulu** est le nominatif defini singulier de r-s-l. Le Lane's donne : envoye, messager. L'article defini (ar-rasul) identifie l'envoye connu — le Prophete. Le nom **shahidan** est un accusatif masculin singulier indefini de sh-h-d. Le Lane's donne : temoin. Ici l'envoye est temoin sur vous — il surveille et attestera de votre conduite. La deuxieme partie du verset commence par **wa-ma** (et ne pas) + **ja'alna** (accompli 1P de j-'-l) : et Nous n'avons etabli. Le nom **al-qiblata** est l'accusatif defini feminin de q-b-l. Le Lane's donne : direction vers laquelle on se tourne, orientation de la priere. La qibla est la direction de la priere — elle definit l'orientation physique du croyant. Le pronom relatif **allati** (celle que) + **kunta** (accompli 2MS de k-w-n) + **'alayha** (sur elle) : celle sur laquelle tu etais. La restriction **illa** (sauf, sinon que) + **li-na'lama** (pour que nous sachions, inaccompli 1P subjonctif de '-l-m) : sauf pour savoir. Le verbe na'lama signifie savoir — Dieu sait deja tout, mais « pour que Nous sachions » signifie « pour que se manifeste dans la realite observable » qui suit et qui ne suit pas. Le pronom **man** (celui qui) + **yattabi'u** (inaccompli 3MS de t-b-' forme VIII) : celui qui suit. Le Lane's donne : suivre, marcher derriere, imiter. La forme VIII (ittaba'a) intensifie : suivre deliberement, choisir de suivre. Le nom **ar-rasula** (accusatif defini de r-s-l) : l'envoye. La preposition **mimman** (de celui qui) + **yanqalibu** (inaccompli 3MS de q-l-b forme VII) : de celui qui se retourne. Le Lane's donne : retourner, renverser, changer d'etat. La forme VII (inqalaba) est reflexive : se retourner soi-meme, faire volte-face. Le nom **'aqibayhi** est le duel genitif de '-q-b avec pronom 3MS. Le Lane's donne : talon, ce qui vient apres. Se retourner sur ses talons = faire demi-tour, revenir en arriere. La coordination **wa-in** (et certes) + **kanat** (accompli 3FS de k-w-n) : et c'etait certes. Le nom **la-kabiratan** est un accusatif feminin indefini de k-b-r avec lam emphatique. Le Lane's donne : grand, important, difficile. La grandeur ici designe la difficulte de l'epreuve — changer de direction de priere etait une epreuve grande. La restriction **illa 'ala** (sauf sur) + **alladhina** (ceux que) + **hada** (accompli 3MS de h-d-y) : sauf sur ceux que Dieu a guides. Le Lane's donne : guider, montrer le chemin. Ceux que Dieu a guides n'ont pas ete eprouves par le changement. Le nom **Allahu** (nominatif defini) : Dieu. La troisieme partie commence par **wa-ma kana Allahu** (et Dieu n'etait pas) + **li-yudi'a** (pour faire perdre, inaccompli 3MS forme IV de d-y-'). Le Lane's donne : perdre, gaspiller, negliger. La forme IV (ada'a) est causative : faire perdre. Dieu ne fait pas perdre. Le nom **imanakum** est l'accusatif de a-m-n avec pronom 2MP. Le Lane's donne : foi, securite, confiance. L'iman est la foi — l'adhesion interieure qui se manifeste en actes. Dieu ne fait pas perdre votre foi = les prieres que vous avez faites vers l'ancienne qibla ne sont pas perdues. La particule emphatique **inna** + **Allaha** (accusatif) : certes Dieu. La preposition **bi-n-nasi** (envers les gens) situe l'objet de la compassion. Le nom **la-ra'ufun** est un nominatif indefini de r-'-f avec lam emphatique. Le Lane's donne : compatissant, plein de tendresse, celui qui cherche a prevenir la souffrance. Le ra'uf est plus tendre que le rahim — la compassion previent la douleur, la misericorde la soulage apres. Le nom **rahimun** est un nominatif indefini de r-h-m. Le Lane's donne : misericordieux, celui qui fait misericorde. Le rahim est celui qui agit avec misericorde — il soulage la souffrance qui existe deja.

§JUSTIFICATION§
**fait de vous** — Le sens retenu est « faire ». Le verbe ja'ala dans ce contexte est un verbe de transformation : Dieu a fait de vous (rendu) une communaute. L'alternative « creer » est ecartee car il ne s'agit pas de creation ex nihilo mais de qualification — la communaute existait deja, Dieu lui donne une qualite (du milieu).

**communaute** — Le sens retenu est « communaute ». Le mot umma designe le groupe uni par un lien commun. L'alternative « mere » est ecartee car le contexte parle d'un groupe humain qualifie, pas d'une relation maternelle.

**du milieu** — Le sens retenu est « milieu ». Le mot wasat designe le centre, le point d'equilibre. L'alternative « meilleur » est compatible mais « du milieu » est plus proche de l'etymologie — la communaute est au centre, ni dans l'exces ni dans le defaut. Le Lane's precise que wasat signifie « le meilleur » justement parce que le milieu evite les extremes.

**temoins** — Le sens retenu est « temoigner ». Le mot shuhada' designe ceux qui temoignent — ils ont vu et rapportent. L'alternative « martyrs » est ecartee car le contexte est le temoignage sur les gens, pas le sacrifice.

**les gens** — Le sens retenu est « gens ». Le mot an-nas designe l'ensemble des etres humains.

**l'envoye** — Le sens retenu est « envoyer ». Le mot ar-rasul designe celui qui est envoye. L'article defini identifie le Prophete.

**la direction** — Le sens retenu est « se tourner vers ». Le mot al-qibla designe la direction de la priere — la direction vers laquelle on se tourne. L'alternative « recevoir » est ecartee car le contexte est l'orientation physique, pas la reception.

**savoir** — Le sens retenu est « savoir ». Le verbe na'lama designe le savoir. « Pour que Nous sachions » est une expression qui signifie « pour que se manifeste dans la realite » — Dieu sait deja tout.

**suit** — Le sens retenu est « suivre ». Le verbe yattabi'u (forme VIII de t-b-') designe l'acte delibere de suivre quelqu'un. L'alternative « consequence » est ecartee car le mot est un verbe actif, pas un nom.

**se retourne** — Le sens retenu est « retourner ». Le verbe yanqalibu (forme VII de q-l-b) designe le fait de se retourner sur soi-meme. Se retourner sur ses talons = faire demi-tour. L'alternative « coeur » est ecartee car le mot est un verbe, pas un nom.

**ses talons** — Le sens retenu est « succession/ce qui vient apres ». Le mot 'aqibayhi (duel de 'aqib) designe les deux talons. L'expression « se retourner sur ses talons » est idiomatique — elle signifie revenir en arriere, apostasier.

**grande** — Le sens retenu est « grandeur ». Le mot kabiratan qualifie l'epreuve comme grande, difficile. L'alternative « orgueil » est ecartee car le mot qualifie l'epreuve, pas une personne.

**guide** — Le sens retenu est « guider ». Le verbe hada designe l'acte de montrer le chemin. Ceux que Dieu a guides n'ont pas ete destabilises par le changement de qibla.

**Dieu** — Le nom propre Allah apparait trois fois : sujet de la guidance, sujet de ne pas faire perdre, et sujet de la compassion. Les trois occurrences montrent que Dieu guide, preserve et compatit.

**faire perdre** — Le sens retenu est « perdre ». Le verbe yudi'a (forme IV de d-y-') signifie faire perdre, gaspiller. Dieu ne fait pas perdre votre foi — les prieres faites vers l'ancienne qibla sont preservees.

**votre foi** — Le sens retenu est « foi/adhesion ». Le mot imanakum designe la foi des croyants. Le Lane's lie la foi a la securite — croire c'est se sentir en securite dans la verite. L'alternative « securite » est ecartee car le contexte est la foi religieuse (les prieres), pas la securite physique.

**compatissant** — Le sens retenu est « etre compatissant ». Le mot ra'uf designe celui qui a une compassion tendre, qui cherche a prevenir la souffrance avant qu'elle n'arrive. Dieu est ra'uf — Il previent.

**misericordieux** — Le sens retenu est « misericorde ». Le mot rahim designe celui qui fait misericorde, qui soulage la souffrance existante. Dieu est rahim — Il soulage.

§CRITIQUE§
Les traductions courantes rendent ce verset de maniere similaire. La difference principale porte sur le mot **wasat** : Hamidullah traduit « communaute de justes », ce qui interprete wasat comme la justice. Notre traduction « du milieu » est plus littérale et preserve le sens etymologique de position centrale, d'equilibre entre les extremes. L'autre point notable est « se retourne sur ses talons » — Hamidullah donne « s'en retourne sur ses talons », qui est equivalent. Le sens global du verset est le meme dans toutes les traductions.`,
    segments: [
      { fr: "et", phon: "wa", arabic: "\u0648\u064e", is_particle: true, position: 1 },
      { fr: "ainsi", pos: "adjectif", phon: "ka-dhalika", arabic: "\u0643\u064e\u0630\u064e\u0670\u0644\u0650\u0643\u064e", word_key: "kdl", is_particle: false, sense_retenu: "ainsi", position: 2 },
      { fr: "avons fait de vous", pos: "verbe", phon: "ja'alnakum", arabic: "\u062c\u064e\u0639\u064e\u0644\u0652\u0646\u064e\u0640\u0670\u0643\u064f\u0645\u0652", word_key: "jel", is_particle: false, sense_retenu: "faire", position: 3 },
      { fr: "une communaute", pos: "nom", phon: "ummatan", arabic: "\u0623\u064f\u0645\u0651\u064e\u0629\u064b", word_key: "amm", is_particle: false, sense_retenu: "communaute", position: 4 },
      { fr: "et", phon: "wa", arabic: "\u0648\u064e", is_particle: true, position: 5 },
      { fr: "du milieu", pos: "nom", phon: "wasatan", arabic: "\u0648\u064e\u0633\u064e\u0637\u064b\u0627", word_key: "wst", is_particle: false, sense_retenu: "milieu", position: 6 },
      { fr: "pour", phon: "li", arabic: "\u0644\u0650\u0651", is_particle: true, position: 7 },
      { fr: "vous soyez", pos: "verbe", phon: "takunu", arabic: "\u062a\u064e\u0643\u064f\u0648\u0646\u064f\u0648\u0627\u06df", word_key: "kwn", is_particle: false, sense_retenu: "etre", position: 8 },
      { fr: "temoins", pos: "nom", phon: "shuhada'a", arabic: "\u0634\u064f\u0647\u064e\u062f\u064e\u0622\u0621\u064e", word_key: "shhd", is_particle: false, sense_retenu: "temoigner", position: 9 },
      { fr: "sur", phon: "'ala", arabic: "\u0639\u064e\u0644\u064e\u0649", is_particle: true, position: 10 },
      { fr: "les gens", pos: "nom", phon: "an-nasi", arabic: "\u0671\u0644\u0646\u0651\u064e\u0627\u0633\u0650", word_key: "nws", is_particle: false, sense_retenu: "gens", position: 11 },
      { fr: "et", phon: "wa", arabic: "\u0648\u064e", is_particle: true, position: 12 },
      { fr: "soit", pos: "verbe", phon: "yakuna", arabic: "\u064a\u064e\u0643\u064f\u0648\u0646\u064e", word_key: "kwn", is_particle: false, sense_retenu: "etre", position: 13 },
      { fr: "l'envoye", pos: "nom", phon: "ar-rasulu", arabic: "\u0671\u0644\u0631\u0651\u064e\u0633\u064f\u0648\u0644\u064f", word_key: "rsl", is_particle: false, sense_retenu: "envoyer", position: 14 },
      { fr: "sur vous", phon: "'alaykum", arabic: "\u0639\u064e\u0644\u064e\u064a\u0652\u0643\u064f\u0645\u0652", is_particle: true, position: 15 },
      { fr: "temoin", pos: "adjectif", phon: "shahidan", arabic: "\u0634\u064e\u0647\u0650\u064a\u062f\u064b\u0627", word_key: "shhd", is_particle: false, sense_retenu: "temoigner", position: 16 },
      { fr: "et", phon: "wa", arabic: "\u0648\u064e", is_particle: true, position: 17 },
      { fr: "ne pas", phon: "ma", arabic: "\u0645\u064e\u0627", is_particle: true, position: 18 },
      { fr: "avons etabli", pos: "verbe", phon: "ja'alna", arabic: "\u062c\u064e\u0639\u064e\u0644\u0652\u0646\u064e\u0627", word_key: "jel", is_particle: false, sense_retenu: "etablir", position: 19 },
      { fr: "la direction", pos: "nom", phon: "al-qiblata", arabic: "\u0671\u0644\u0652\u0642\u0650\u0628\u0652\u0644\u064e\u0629\u064e", word_key: "qbl", is_particle: false, sense_retenu: "se tourner vers", position: 20 },
      { fr: "celle que", pos: "adjectif", phon: "allati", arabic: "\u0671\u0644\u0651\u064e\u062a\u0650\u0649", word_key: "lwy", is_particle: false, sense_retenu: "celle que", position: 21 },
      { fr: "tu etais", pos: "verbe", phon: "kunta", arabic: "\u0643\u064f\u0646\u062a\u064e", word_key: "kwn", is_particle: false, sense_retenu: "etre", position: 22 },
      { fr: "sur elle", phon: "'alayha", arabic: "\u0639\u064e\u0644\u064e\u064a\u0652\u0647\u064e\u0622", is_particle: true, position: 23 },
      { fr: "sauf", phon: "illa", arabic: "\u0625\u0650\u0644\u0651\u064e\u0627", is_particle: true, position: 24 },
      { fr: "pour", phon: "li", arabic: "\u0644\u0650", is_particle: true, position: 25 },
      { fr: "nous sachions", pos: "verbe", phon: "na'lama", arabic: "\u0646\u064e\u0639\u0652\u0644\u064e\u0645\u064e", word_key: "elm", is_particle: false, sense_retenu: "savoir", position: 26 },
      { fr: "qui", pos: "nom", phon: "man", arabic: "\u0645\u064e\u0646", word_key: "mny", is_particle: false, sense_retenu: "celui qui", position: 27 },
      { fr: "suit", pos: "verbe", phon: "yattabi'u", arabic: "\u064a\u064e\u062a\u0651\u064e\u0628\u0650\u0639\u064f", word_key: "tbae", is_particle: false, sense_retenu: "suivre", position: 28 },
      { fr: "l'envoye", pos: "nom", phon: "ar-rasula", arabic: "\u0671\u0644\u0631\u0651\u064e\u0633\u064f\u0648\u0644\u064e", word_key: "rsl", is_particle: false, sense_retenu: "envoyer", position: 29 },
      { fr: "de celui qui", phon: "mimman", arabic: "\u0645\u0650\u0645\u0651\u064e\u0646", is_particle: true, position: 30 },
      { fr: "se retourne", pos: "verbe", phon: "yanqalibu", arabic: "\u064a\u064e\u0646\u0642\u064e\u0644\u0650\u0628\u064f", word_key: "qlb", is_particle: false, sense_retenu: "se retourner", position: 31 },
      { fr: "sur", phon: "'ala", arabic: "\u0639\u064e\u0644\u064e\u0649\u0670", is_particle: true, position: 32 },
      { fr: "ses talons", pos: "nom", phon: "'aqibayhi", arabic: "\u0639\u064e\u0642\u0650\u0628\u064e\u064a\u0652\u0647\u0650", word_key: "eqb", is_particle: false, sense_retenu: "succession", position: 33 },
      { fr: "et", phon: "wa", arabic: "\u0648\u064e", is_particle: true, position: 34 },
      { fr: "si", phon: "in", arabic: "\u0625\u0650\u0646", is_particle: true, position: 35 },
      { fr: "c'etait", pos: "verbe", phon: "kanat", arabic: "\u0643\u064e\u0627\u0646\u064e\u062a\u0652", word_key: "kwn", is_particle: false, sense_retenu: "etre", position: 36 },
      { fr: "certes grande", pos: "adjectif", phon: "la-kabiratan", arabic: "\u0644\u064e\u0643\u064e\u0628\u0650\u064a\u0631\u064e\u0629\u064b", word_key: "kbr", is_particle: false, sense_retenu: "etre grand", position: 37 },
      { fr: "sauf", phon: "illa", arabic: "\u0625\u0650\u0644\u0651\u064e\u0627", is_particle: true, position: 38 },
      { fr: "sur", phon: "'ala", arabic: "\u0639\u064e\u0644\u064e\u0649", is_particle: true, position: 39 },
      { fr: "ceux que", pos: "nom", phon: "alladhina", arabic: "\u0671\u0644\u0651\u064e\u0630\u0650\u064a\u0646\u064e", word_key: "dhyy", is_particle: false, sense_retenu: "ceux que", position: 40 },
      { fr: "a guide", pos: "verbe", phon: "hada", arabic: "\u0647\u064e\u062f\u064e\u0649", word_key: "hdy", is_particle: false, sense_retenu: "guider", position: 41 },
      { fr: "Dieu", pos: "nom", phon: "Allahu", arabic: "\u0671\u0644\u0644\u0651\u064e\u0647\u064f", word_key: "alh", is_particle: false, sense_retenu: "Dieu", position: 42 },
      { fr: "et", phon: "wa", arabic: "\u0648\u064e", is_particle: true, position: 43 },
      { fr: "ne pas", phon: "ma", arabic: "\u0645\u064e\u0627", is_particle: true, position: 44 },
      { fr: "etait", pos: "verbe", phon: "kana", arabic: "\u0643\u064e\u0627\u0646\u064e", word_key: "kwn", is_particle: false, sense_retenu: "etre", position: 45 },
      { fr: "Dieu", pos: "nom", phon: "Allahu", arabic: "\u0671\u0644\u0644\u0651\u064e\u0647\u064f", word_key: "alh", is_particle: false, sense_retenu: "Dieu", position: 46 },
      { fr: "faire perdre", pos: "verbe", phon: "li-yudi'a", arabic: "\u0644\u0650\u064a\u064f\u0636\u0650\u064a\u0639\u064e", word_key: "dye", is_particle: false, sense_retenu: "perdre", position: 47 },
      { fr: "votre foi", pos: "nom", phon: "imanakum", arabic: "\u0625\u0650\u064a\u0645\u064e\u0640\u0670\u0646\u064e\u0643\u064f\u0645\u0652", word_key: "amn", is_particle: false, sense_retenu: "croire", position: 48 },
      { fr: "certes", pos: "particule", phon: "inna", arabic: "\u0625\u0650\u0646\u0651\u064e", word_key: "nnn", is_particle: false, sense_retenu: "certes", position: 49 },
      { fr: "Dieu", pos: "nom", phon: "Allaha", arabic: "\u0671\u0644\u0644\u0651\u064e\u0647\u064e", word_key: "alh", is_particle: false, sense_retenu: "Dieu", position: 50 },
      { fr: "envers les gens", pos: "nom", phon: "bi-n-nasi", arabic: "\u0628\u0650\u0671\u0644\u0646\u0651\u064e\u0627\u0633\u0650", word_key: "nws", is_particle: false, sense_retenu: "gens", position: 51 },
      { fr: "compatissant", pos: "adjectif", phon: "ra'ufun", arabic: "\u0644\u064e\u0631\u064e\u0621\u064f\u0648\u0641\u064c", word_key: "raf", is_particle: false, sense_retenu: "etre compatissant", position: 52 },
      { fr: "misericordieux", pos: "adjectif", phon: "rahimun", arabic: "\u0631\u0651\u064e\u062d\u0650\u064a\u0645\u064c", word_key: "rhm", is_particle: false, sense_retenu: "misericorde", position: 53 }
    ],
    words: [
      // jel pos=3
      {
        word_key: "jel", position: 3, sense_chosen: "faire",
        analysis_axes: {
          sense_chosen: "faire",
          concept_chosen: "Action/Réalisation",
          concepts: {
            "Action/Réalisation": {
              status: "retenu",
              senses: ["faire", "rendre", "placer", "commencer a", "etablir", "creer"],
              proof_ctx: "Le verbe ja'alnakum est un accompli 1P de la racine j-'-l avec pronom suffixe 2MP. Le Lane's donne : faire, rendre, placer, etablir. Ici le verbe est a double complement — ja'ala + objet + qualificatif : « Nous avons fait de vous (kum) une communaute (ummatan) du milieu (wasatan) ». L'accompli marque que l'acte est acheve — la designation est un fait divin accompli. La racine j-'-l porte l'idee de transformation : ce qui etait dans un etat passe dans un autre. Dieu ne cree pas la communaute ex nihilo — Il la qualifie, Il lui donne son statut.",
              axe1_verset: "Le verbe ja'alnakum ouvre la premiere proposition du verset apres l'adverbe comparatif. Le champ lexical du verset tourne autour de la designation divine (faire, communaute, milieu, temoins) et de l'epreuve (direction, suivre, se retourner, grande). Le verbe ja'ala structure les deux temps du verset : d'abord Dieu fait de vous une communaute du milieu (ja'alnakum), puis Dieu a etabli la direction (ja'alna al-qiblata). Les deux usages montrent l'acte de Dieu qui pose les fondements — Il designe et Il eprouve.",
              axe2_voisins: "Le verset 142 posait la question des insenses : « Qu'est-ce qui les a detournes de la direction sur laquelle ils etaient ? ». Le verset 143 repond : Dieu a fait de vous une communaute du milieu. La designation divine est la reponse a la critique des insenses — la communaute n'est pas perdue, elle est placee deliberement par Dieu dans une position centrale. Le verset 144 enchainera avec l'ordre de tourner le visage vers la Mosquee Sacree.",
              axe3_sourate: "La racine j-'-l apparait frequemment dans la sourate al-Baqarah pour decrire les actes divins de designation. En 2:22, Dieu a fait de la terre un lit. En 2:125, Dieu a fait de la Maison un lieu de retour. En 2:143, Dieu fait de la communaute un milieu. La sourate montre que Dieu designe, place et qualifie — chaque chose recoit sa fonction de Dieu.",
              axe4_coherence: "La racine j-'-l apparait environ 346 fois dans le Coran. Le schema « ja'alnakum + qualificatif » apparait pour designer des statuts divins — en 5:48, « Nous avons fait de vous des nations et tribus ». En 21:73, « Nous les avons faits des guides ». Le Coran utilise ja'ala pour montrer que les statuts humains viennent de Dieu, pas des hommes.",
              axe5_frequence: "Pour la mission du khalifa, etre fait communaute du milieu est un mandat divin. Le khalifa n'a pas choisi sa position — Dieu l'a placee. Etre au milieu c'est avoir la responsabilite du temoignage sur les gens. La designation divine engage — elle n'est pas un privilege gratuit mais une mission."
            },
            "Sens isolé/Récompense": {
              status: "nul",
              senses: ["recompense"],
              proof_ctx: "Le sens de recompense est hors sujet — le contexte est la designation divine d'une communaute, pas une retribution."
            }
          }
        }
      },
      // amm pos=4
      {
        word_key: "amm", position: 4, sense_chosen: "communaute",
        analysis_axes: {
          sense_chosen: "communaute",
          concept_chosen: "Origine/Communauté",
          concepts: {
            "Origine/Communauté": {
              status: "retenu",
              senses: ["mere", "nation", "communaute"],
              proof_ctx: "Le mot ummatan est un accusatif feminin singulier indefini de la racine a-m-m. Le Lane's donne : mere, communaute, nation, chef de file. La racine porte l'idee d'origine et de rassemblement — l'umma est le groupe uni par une mere commune, une origine commune. Ici l'umma designe la communaute des croyants. L'indefini (ummatan sans article) marque la qualite : une communaute d'un certain type, pas n'importe quelle communaute. Le mot est qualifie par wasatan (du milieu) — c'est une communaute definie par sa position centrale.",
              axe1_verset: "Le mot ummatan est le complement d'objet second de ja'alnakum — Nous avons fait de vous une communaute. Le champ lexical du verset (temoins, gens, envoye, foi) montre que la communaute a une fonction : elle est faite pour temoigner. L'umma n'est pas un groupe passif — elle est designee pour une mission active. La communaute du milieu est celle qui se tient entre l'exces et le defaut pour porter temoignage.",
              axe2_voisins: "Le verset 141 mentionnait « celle-la est une communaute (ummah) deja passee ». Le verset 143 parle d'une autre communaute — la communaute presente, designee par Dieu. La sourate oppose les communautes passees (qui ont eu leurs oeuvres) et la communaute presente (qui a sa mission propre).",
              axe3_sourate: "La racine a-m-m apparait dans la sourate al-Baqarah pour designer les groupes humains et leurs responsabilites. En 2:128, Abraham demande une communaute (umma) soumise. En 2:134 et 141, « celle-la est une communaute deja passee ». Le verset 143 precise quelle communaute Dieu a choisie — du milieu, pour le temoignage.",
              axe4_coherence: "La racine a-m-m apparait environ 64 fois dans le Coran. En 3:110, « Vous etes la meilleure communaute suscitee pour les gens ». En 2:143, « une communaute du milieu ». Le Coran designe la communaute musulmane par sa position (milieu) et sa fonction (temoignage) — pas par un privilege ethnique.",
              axe5_frequence: "Pour la mission du khalifa, la communaute est le cadre de la mission. Le khalifa ne travaille pas seul — il fait partie d'une communaute designee. L'umma est unie par la mission commune du temoignage. La qualite de la communaute depend de la qualite de ses membres dans l'accomplissement de cette mission."
            }
          }
        }
      },
      // wst pos=6
      {
        word_key: "wst", position: 6, sense_chosen: "milieu",
        analysis_axes: {
          sense_chosen: "milieu",
          concept_chosen: "Centre/Modération",
          concepts: {
            "Centre/Modération": {
              status: "retenu",
              senses: ["milieu", "centre", "meilleur (wassat)", "modere"],
              proof_ctx: "Le mot wasatan est un accusatif masculin singulier indefini de la racine w-s-t. Le Lane's donne : milieu, centre, le meilleur d'une chose, modere. Le wasat est le point equidistant des deux extremes — il n'est ni dans l'exces ni dans le defaut. Le Lane's precise que les Arabes appellent wasat ce qui est le meilleur, car le milieu d'une chose est sa partie la plus protegee et la plus noble (la moelle, le coeur). Ici ummatan wasatan signifie une communaute du milieu — au centre de l'humanite, entre les exces opposes.",
              axe1_verset: "Le mot wasatan qualifie la communaute (ummatan) et fonde sa mission de temoignage. Le raisonnement du verset est : parce que vous etes au milieu, vous pouvez temoigner sur les gens. Le temoin doit etre au centre — ni d'un cote ni de l'autre — pour que son temoignage soit juste. Le champ lexical (temoins, gens, envoye) montre que la centralite est la condition du temoignage equitable.",
              axe2_voisins: "Le verset 142 posait : « Qu'est-ce qui les a detournes de leur direction ? ». Le verset 143 repond que la communaute est au milieu — le changement de qibla n'est pas un egarement mais un repositionnement au centre. Le verset 144 ordonnera de tourner le visage vers la Mosquee Sacree — le nouveau centre.",
              axe3_sourate: "La racine w-s-t apparait rarement dans la sourate al-Baqarah. En 2:238, « la priere du milieu » (as-salat al-wusta). Le verset 143 est l'unique occurrence de wasat pour qualifier la communaute. La sourate utilise la centralite pour designer l'excellence — la priere du milieu est la meilleure, la communaute du milieu est la meilleure.",
              axe4_coherence: "La racine w-s-t apparait environ 5 fois dans le Coran. En 100:5, « penetrant au milieu ». En 68:28, « le plus modere d'entre eux ». Le Coran utilise wasat pour designer la position centrale et la moderation. L'idee de milieu est liee a l'equilibre et a la justice — etre au centre permet de voir les deux cotes.",
              axe5_frequence: "Pour la mission du khalifa, la centralite est la position ideale de la mission. Le khalifa doit etre au milieu — ni dans l'exces de rigueur ni dans l'exces de laxisme. La moderation n'est pas la tiedeur — c'est la position d'equilibre qui permet le jugement juste et le temoignage equitable."
            },
            "Intériorité": {
              status: "nul",
              senses: ["parmi"],
              proof_ctx: "Le sens de « parmi » est un usage prepositionnel de w-s-t. Le contexte est la qualification de la communaute — du milieu, pas « parmi ». Le mot est un adjectif qualificatif (wasatan), pas une preposition."
            }
          }
        }
      },
      // kwn pos=8
      {
        word_key: "kwn", position: 8, sense_chosen: "etre",
        analysis_axes: {
          sense_chosen: "etre",
          concept_chosen: "Être/Existence",
          concepts: {
            "Être/Existence": {
              status: "retenu",
              senses: ["etre (verbe incomplet)", "venir a l'existence"],
              proof_ctx: "Le verbe takunu est un inaccompli 2MP subjonctif de la racine k-w-n. Le Lane's donne : etre, exister, devenir. Ici le verbe est incomplet — il sert de support grammatical : « pour que vous soyez temoins ». Le verbe kana/yakunu est le verbe d'etat par excellence en arabe — il porte le temps et la modalite sans decrire une action. Le subjonctif (apres li, pour que) indique le but. Le verbe kwn apparait 5 fois dans ce verset : takunu (pour que vous soyez), yakuna (que soit l'envoye), kunta (tu etais), kanat (c'etait), kana (il etait/n'etait pas). Chaque occurrence porte un temps et un sujet different mais la fonction est la meme — support grammatical.",
              axe1_verset: "Le verbe kwn structure les cinq propositions du verset en portant le temps et le sujet de chacune. Il est transparent — il ne porte pas de sens propre mais permet aux autres mots de fonctionner. Le verset est construit autour de kwn comme une charpente autour de ses poutres : pour que vous SOYEZ temoins, que l'envoye SOIT temoin, tu ETAIS sur elle, c'ETAIT grande, Dieu n'ETAIT pas pour faire perdre.",
              axe2_voisins: "Le verbe kwn est present dans presque tous les versets de la sourate. Son usage dans le verset 143 est typique — il porte les etats et les temps sans apporter de sens lexical propre.",
              axe3_sourate: "La racine k-w-n est la plus frequente de la sourate al-Baqarah. Elle apparait dans presque chaque verset comme support grammatical. Le verset 143 en concentre 5 occurrences, ce qui est revelateur de la complexite syntaxique du verset.",
              axe4_coherence: "La racine k-w-n apparait environ 1358 fois dans le Coran. C'est la racine la plus frequente apres le nom Allah. Le verbe kana est le verbe fondamental de l'arabe — il porte l'existence, le temps, la negation et la modalite.",
              axe5_frequence: "Pour la mission du khalifa, l'etre (kwn) est le fondement de tout. Avant de faire, il faut etre. Le verset dit « pour que vous soyez temoins » — d'abord etre, ensuite temoigner. La mission commence par l'etre, pas par le faire."
            },
            "Humilité/Soumission": {
              status: "nul",
              senses: ["etre humble soumis"],
              proof_ctx: "Le sens de soumission est hors sujet — le verbe est ici un verbe d'etat grammatical, pas un verbe de soumission."
            },
            "Lieu/État": {
              status: "nul",
              senses: ["lieu", "reste a ta place", "etat condition", "motif raison", "devenir comme"],
              proof_ctx: "Le sens de lieu ou d'etat est hors sujet — le verbe est ici un verbe d'etat incomplet, pas un nom de lieu."
            }
          }
        }
      },
      // shhd pos=9
      {
        word_key: "shhd", position: 9, sense_chosen: "temoigner",
        analysis_axes: {
          sense_chosen: "temoigner",
          concept_chosen: "Témoignage/Présence",
          concepts: {
            "Témoignage/Présence": {
              status: "retenu",
              senses: ["temoigner", "voir", "etre present", "faire temoigner", "attester", "martyr"],
              proof_ctx: "Le mot shuhada'a est un pluriel brise accusatif de la racine sh-h-d. Le Lane's donne : temoin, celui qui est present et voit, celui qui atteste. La racine porte l'idee de presence qui fonde le temoignage — on ne peut temoigner que de ce qu'on a vu. Le pluriel brise (shuhada') designe un groupe de temoins. Le mot shahid apparait aussi en position 16 au singulier indefini (shahidan) — l'envoye est temoin individuel (shahid), la communaute est un groupe de temoins (shuhada'). La distinction entre les deux formes montre deux niveaux de temoignage : collectif et individuel.",
              axe1_verset: "Le mot shuhada' est la fonction assignee a la communaute du milieu — temoins sur les gens. Le temoignage est la raison d'etre de la centralite (li-takunu, pour que vous soyez). Le champ lexical du verset construit une chaine de temoignage : la communaute temoigne sur les gens et l'envoye temoigne sur la communaute. C'est une hierarchie de responsabilite — chacun est surveille par celui qui est au-dessus.",
              axe2_voisins: "Le verset 142 mentionnait ceux qui critiquent le changement de qibla. Le verset 143 montre que la communaute n'est pas la pour etre critiquee mais pour temoigner. Le verset 144 ordonnera la nouvelle direction — la communaute temoignera de cette direction. Le temoignage est la reponse aux critiques.",
              axe3_sourate: "La racine sh-h-d apparait dans la sourate al-Baqarah sous plusieurs formes. En 2:185, « celui qui temoigne du mois ». En 2:282, « faites temoigner deux temoins ». En 2:143, le temoignage est eleve au niveau cosmique — la communaute temoigne sur l'humanite entiere, pas sur un contrat ou un mois.",
              axe4_coherence: "La racine sh-h-d apparait environ 160 fois dans le Coran. En 4:41, « quand Nous amenerons de chaque communaute un temoin et que Nous t'amenerons comme temoin sur ceux-la ». Le Coran construit une eschatologie du temoignage — au Jour du Jugement, chaque communaute aura son temoin. Le verset 143 prepare ce role.",
              axe5_frequence: "Pour la mission du khalifa, le temoignage est la mission premiere. La communaute est faite pour temoigner — pas pour dominer, pas pour conquerir, mais pour attester de la verite devant l'humanite. Le temoin engage sa credibilite — s'il ment, son temoignage le condamne."
            }
          }
        }
      },
      // nws pos=11
      {
        word_key: "nws", position: 11, sense_chosen: "gens",
        analysis_axes: {
          sense_chosen: "gens",
          concept_chosen: "Humanité/Peuple",
          concepts: {
            "Humanité/Peuple": {
              status: "retenu",
              senses: ["gens", "etres humains", "peuple"],
              proof_ctx: "Le mot an-nasi est un genitif defini pluriel de la racine n-w-s. Le Lane's donne : gens, etres humains, peuple. L'article defini (an-nas) designe l'ensemble de l'humanite. Le mot apparait deux fois dans le verset : une fois comme objet du temoignage (temoins sur les gens, pos 11) et une fois comme objet de la compassion divine (envers les gens, pos 51). Les gens sont a la fois ceux sur qui la communaute temoigne et ceux envers qui Dieu est compatissant.",
              axe1_verset: "Le mot an-nasi en position 11 designe ceux sur qui la communaute temoigne. En position 51, les gens sont ceux envers qui Dieu est compatissant et misericordieux. Le verset trace un double rapport aux gens : la communaute a une responsabilite envers eux (temoignage) et Dieu a une compassion envers eux. Le temoignage et la compassion sont les deux faces de la relation a l'humanite.",
              axe2_voisins: "Le verset 142 mentionnait « les insenses parmi les gens ». Le verset 143 place les gens comme destinataires du temoignage — meme les insenses font partie des gens sur qui la communaute temoigne.",
              axe3_sourate: "La racine n-w-s (an-nas) est une des plus frequentes de la sourate al-Baqarah. En 2:8, « parmi les gens il y a ceux qui disent ». En 2:13, « comme les gens ont cru ». La sourate utilise an-nas pour designer l'humanite dans sa diversite — croyants, hypocrites, insenses, tous font partie des gens.",
              axe4_coherence: "Le mot an-nas apparait environ 241 fois dans le Coran. Il designe l'ensemble de l'humanite sans distinction. En 114:1-6 (sourate an-Nas), les gens sont ceux que Dieu protege. Le Coran s'adresse aux gens en general avant de s'adresser aux croyants en particulier.",
              axe5_frequence: "Pour la mission du khalifa, les gens sont les destinataires de la mission. Le khalifa temoigne devant les gens et pour les gens. L'humanite entiere est concernee par le temoignage de la communaute du milieu."
            },
            "Perception/Visibilité": {
              status: "nul",
              senses: ["voir de loin", "etre visible"],
              proof_ctx: "Le sens de perception est hors sujet — le mot an-nas designe les gens, pas l'acte de voir."
            }
          }
        }
      },
      // rsl pos=14
      {
        word_key: "rsl", position: 14, sense_chosen: "envoyer",
        analysis_axes: {
          sense_chosen: "envoyer",
          concept_chosen: "Envoi/Message",
          concepts: {
            "Envoi/Message": {
              status: "retenu",
              senses: ["envoyer", "messager", "message", "liberer"],
              proof_ctx: "Le mot ar-rasulu est un nominatif defini singulier de la racine r-s-l. Le Lane's donne : envoye, messager, celui qui est envoye. L'article defini (ar-rasul) identifie un envoye specifique connu — le Prophete. Le mot apparait deux fois dans le verset : en position 14 (ar-rasulu, nominatif, sujet de yakuna) et en position 29 (ar-rasula, accusatif, objet de yattabi'u). L'envoye est a la fois le temoin sur la communaute (pos 14) et celui qu'on suit ou qu'on ne suit pas (pos 29).",
              axe1_verset: "Le mot ar-rasul apparait deux fois, structurant deux propositions. D'abord l'envoye est temoin sur la communaute (yakuna ar-rasulu 'alaykum shahidan) — il surveille et attestera. Ensuite l'envoye est l'objet du choix : qui suit l'envoye et qui se retourne (man yattabi'u ar-rasula mimman yanqalibu). Le verset fait de l'envoye le critere du discernement — suivre ou ne pas suivre l'envoye determine la position de chacun.",
              axe2_voisins: "Le verset 142 evoquait la critique des insenses. Le verset 143 montre que l'envoye est au-dessus de la critique — il est le temoin et le critere. Le verset 144 s'adressera directement a l'envoye : « tourne ton visage ». L'envoye est le pivot des versets 142-145.",
              axe3_sourate: "La racine r-s-l est structurante dans la sourate al-Baqarah. En 2:87, les messagers se succedent. En 2:101, un envoye vient confirmer. En 2:143, l'envoye est temoin sur la communaute. La sourate construit progressivement le role de l'envoye : il vient (87), il confirme (101), il temoigne (143).",
              axe4_coherence: "La racine r-s-l apparait environ 513 fois dans le Coran. En 4:41, « Nous amenerons de chaque communaute un temoin et Nous t'amenerons comme temoin sur ceux-la ». Le Coran confirme en 4:41 ce que 2:143 annonce — l'envoye sera temoin sur sa communaute au Jour du Jugement.",
              axe5_frequence: "Pour la mission du khalifa, l'envoye est le modele de la mission. Le suivre c'est accomplir la mission. Se retourner sur ses talons c'est abandonner la mission. L'envoye est le critere de la fidelite a la mission."
            },
            "Eau/Liquide": {
              status: "nul",
              senses: ["pluie"],
              proof_ctx: "Le sens de pluie est hors sujet — le mot ar-rasul designe l'envoye dans un contexte de temoignage."
            }
          }
        }
      },
      // qbl pos=20
      {
        word_key: "qbl", position: 20, sense_chosen: "se tourner vers",
        analysis_axes: {
          sense_chosen: "se tourner vers",
          concept_chosen: "Orientation/Direction",
          concepts: {
            "Réception/Accueil": {
              status: "probable",
              senses: ["recevoir", "accepter", "agreer"],
              proof_ctx: "Le sens de reception est un sens majeur de q-b-l — recevoir ce qui vient. Mais ici le mot est al-qiblata, un nom de lieu/direction derive de la racine. La qibla n'est pas l'acte de recevoir mais la direction vers laquelle on se tourne. Le sens de reception est en arriere-plan — la qibla est ce vers quoi on fait face, ce qu'on recoit par le regard.",
              axe1_verset: "Le mot al-qiblata pourrait porter le sens de reception si on le lit comme « ce qu'on accepte comme direction ». Mais le contexte est clairement l'orientation physique de la priere (kunta 'alayha, tu etais sur elle). Le sens de direction est plus direct.",
              axe2_voisins: "Le verset 142 demandait : « Qu'est-ce qui les a detournes de leur qibla ? ». Le contexte est la direction de la priere, pas la reception.",
              axe3_sourate: "La qibla est un theme majeur des versets 142-150. La sourate traite de l'orientation physique de la priere et de sa signification spirituelle.",
              axe4_coherence: "La racine q-b-l porte les deux sens (recevoir et se tourner vers) dans le Coran. Mais quand le mot est al-qibla, il designe toujours la direction de la priere.",
              axe5_frequence: "Pour la mission du khalifa, la qibla est l'orientation de la mission — la direction vers laquelle on se tourne definit ce qu'on cherche."
            },
            "Orientation/Direction": {
              status: "retenu",
              senses: ["se tourner vers", "faire face", "venir vers"],
              proof_ctx: "Le mot al-qiblata est un accusatif defini feminin de la racine q-b-l. Le Lane's donne : direction vers laquelle on se tourne, qibla, orientation de la priere. La qibla est la direction que le croyant fait face pendant la priere. C'est un point fixe qui oriente le corps et le coeur. Le changement de qibla (de Jerusalem a La Mecque) est l'evenement declencheur de ce passage. Le mot porte l'idee de faire face — se tourner vers une direction c'est lui donner la priorite de son attention.",
              axe1_verset: "Le mot al-qiblata est l'objet de la deuxieme proposition : « Nous n'avons etabli la direction... que pour savoir ». La qibla est l'outil de l'epreuve — le changement de direction sert a reveler qui suit l'envoye et qui se retourne. Le champ lexical (direction, etais sur elle, suivre, se retourner, talons) montre que la qibla est un test d'obeissance. Ce n'est pas la direction elle-meme qui compte mais la reaction au changement.",
              axe2_voisins: "Le verset 142 mentionnait la qibla implicitement (« la direction sur laquelle ils etaient »). Le verset 143 la nomme explicitement. Le verset 144 ordonnera la nouvelle direction. Les versets 142-145 forment le passage de la qibla — le changement, sa justification, l'ordre et la confirmation.",
              axe3_sourate: "La qibla est un theme specifique de ce passage (2:142-150) dans la sourate al-Baqarah. En 2:115, « a Dieu appartiennent l'est et l'ouest ». En 2:142, la question de la qibla est soulevee. La sourate prepare le changement de qibla par l'affirmation que toutes les directions appartiennent a Dieu.",
              axe4_coherence: "Le mot qibla n'apparait que 4 fois dans le Coran, toutes dans la sourate al-Baqarah (2:142, 143, 144, 145). Ce concentrement montre que la qibla est un sujet specifique de cette sourate — elle n'est pas traitee ailleurs avec autant de detail.",
              axe5_frequence: "Pour la mission du khalifa, la qibla est la direction de la mission. Changer de qibla sur ordre divin montre que l'obeissance prime sur l'habitude. Le khalifa doit etre pret a changer de direction quand l'ordre vient — la souplesse dans l'obeissance est une qualite de la mission."
            },
            "Antériorité/Passé": {
              status: "nul",
              senses: ["avant", "auparavant", "ancien", "devant"],
              proof_ctx: "Le sens d'anteriorite est hors sujet — le mot est al-qibla (direction de la priere), pas un adverbe de temps."
            }
          }
        }
      },
      // elm pos=26
      {
        word_key: "elm", position: 26, sense_chosen: "savoir",
        analysis_axes: {
          sense_chosen: "savoir",
          concept_chosen: "Savoir/Connaissance",
          concepts: {
            "Savoir/Connaissance": {
              status: "retenu",
              senses: ["savoir", "connaitre", "etre informe", "certitude", "savant", "science", "enseignement"],
              proof_ctx: "Le verbe na'lama est un inaccompli 1P subjonctif de la racine '-l-m. Le Lane's donne : savoir, connaitre, etre informe. L'expression « li-na'lama » (pour que Nous sachions) pose un probleme theologique apparent — Dieu sait deja tout. Mais en arabe coranique, « pour que Nous sachions » signifie « pour que se manifeste dans la realite observable » la distinction entre celui qui suit et celui qui se retourne. Le savoir divin est eternel, mais sa manifestation dans le temps est ce que le verset designe.",
              axe1_verset: "Le verbe na'lama introduit le but du changement de qibla : « sauf pour savoir qui suit l'envoye de celui qui se retourne ». Le savoir est ici un instrument de discernement — la qibla sert a reveler les positions. Le champ lexical (suivre, se retourner, talons) montre que le savoir porte sur le comportement des gens face a l'epreuve. Savoir n'est pas decouvrir mais manifester.",
              axe2_voisins: "Le verset 142 posait la question des insenses. Le verset 143 montre que Dieu sait qui est sincere et qui ne l'est pas. Le changement de qibla est l'outil par lequel ce savoir se manifeste dans le temps.",
              axe3_sourate: "La racine '-l-m est une des plus frequentes de la sourate al-Baqarah. En 2:30, « Je sais ce que vous ne savez pas ». En 2:33, Dieu connait le cache du ciel et de la terre. En 2:143, le savoir divin se manifeste par l'epreuve de la qibla.",
              axe4_coherence: "La racine '-l-m apparait environ 854 fois dans le Coran. L'expression « li-na'lama » (pour que Nous sachions) apparait en 3:140 et 47:31. Le Coran utilise cette expression pour montrer que les epreuves revelent ce qui est cache dans les coeurs.",
              axe5_frequence: "Pour la mission du khalifa, le savoir est l'outil de la mission et le but de l'epreuve. Les epreuves revelent la sincerite — elles separent celui qui suit de celui qui se retourne. Le khalifa doit comprendre que les epreuves ne sont pas des punitions mais des revelateurs."
            },
            "Marque/Signe": {
              status: "nul",
              senses: ["marquer", "signe", "drapeau", "montagne", "repere", "etendard", "levre fendue"],
              proof_ctx: "Le sens de signe/marque est hors sujet — le verbe na'lama est un verbe de connaissance, pas un nom de signe."
            },
            "Monde/Création": {
              status: "nul",
              senses: ["monde", "les mondes", "ensemble des creatures", "univers"],
              proof_ctx: "Le sens de monde est hors sujet — le verbe na'lama signifie savoir, pas le nom 'alamin (mondes)."
            }
          }
        }
      },
      // tbae pos=28
      {
        word_key: "tbae", position: 28, sense_chosen: "suivre",
        analysis_axes: {
          sense_chosen: "suivre",
          concept_chosen: "Suite/Succession",
          concepts: {
            "Suite/Succession": {
              status: "retenu",
              senses: ["suivre", "poursuivre", "successeur", "partisan"],
              proof_ctx: "Le verbe yattabi'u est un inaccompli 3MS de la racine t-b-' forme VIII (ittaba'a). Le Lane's donne : suivre, marcher derriere, imiter, obeir. La forme VIII (ittaba'a) est reflexive et intensive — elle designe le choix delibere de suivre, pas le simple fait de marcher derriere. Suivre l'envoye est un acte de volonte, pas un automatisme. L'inaccompli indique une action continue — celui qui suit l'envoye le fait en permanence, pas ponctuellement.",
              axe1_verset: "Le verbe yattabi'u est le critere du discernement dans le verset — le changement de qibla sert a distinguer « man yattabi'u ar-rasula » (celui qui suit l'envoye) de « man yanqalibu 'ala 'aqibayhi » (celui qui se retourne sur ses talons). Le champ lexical oppose suivre et se retourner — deux mouvements directionnels opposes. Suivre va vers l'avant dans la direction de l'envoye, se retourner va vers l'arriere.",
              axe2_voisins: "Le verset 142 montrait la critique des insenses face au changement. Le verset 143 precise que le changement sert a reveler qui suit vraiment. Le verset 145 montrera que meme avec toutes les preuves, certains ne suivront pas.",
              axe3_sourate: "La racine t-b-' apparait dans la sourate al-Baqarah sous plusieurs formes. En 2:38, « celui qui suit Ma guidance ». En 2:120, « si tu suivais leurs passions ». En 2:143, suivre l'envoye est le critere de la fidelite. La sourate oppose ceux qui suivent la guidance de Dieu et ceux qui suivent les passions.",
              axe4_coherence: "La racine t-b-' apparait environ 168 fois dans le Coran. En 3:31, « suivez-moi, Dieu vous aimera ». En 7:3, « suivez ce qui vous a ete descendu de votre Seigneur ». Le Coran fait du ittiba' (le fait de suivre) le critere de la sincerite — suivre l'envoye est la preuve de la foi.",
              axe5_frequence: "Pour la mission du khalifa, suivre l'envoye est l'axe central de la mission. Le khalifa doit choisir de suivre — ce n'est pas un automatisme. Le choix de suivre face a l'epreuve revele la sincerite de l'engagement."
            },
            "Résultat/Effet": {
              status: "nul",
              senses: ["consequence"],
              proof_ctx: "Le sens de consequence est hors sujet — le verbe yattabi'u est un verbe actif de mouvement delibere, pas un nom de resultat."
            }
          }
        }
      },
      // qlb pos=31
      {
        word_key: "qlb", position: 31, sense_chosen: "se retourner",
        analysis_axes: {
          sense_chosen: "se retourner",
          concept_chosen: "Retournement/Changement",
          concepts: {
            "Retournement/Changement": {
              status: "retenu",
              senses: ["retourner", "renverser", "transformer", "changer d'etat", "revenir"],
              proof_ctx: "Le verbe yanqalibu est un inaccompli 3MS de la racine q-l-b forme VII (inqalaba). Le Lane's donne : se retourner, faire demi-tour, revenir sur ses pas. La forme VII est reflexive — le sujet se retourne lui-meme. L'inaccompli indique une action continue ou habituelle. Se retourner sur ses talons ('ala 'aqibayhi) est une expression idiomatique qui signifie apostasier, abandonner sa position, faire marche arriere. Le retournement est l'oppose du suivi — l'un avance, l'autre recule.",
              axe1_verset: "Le verbe yanqalibu s'oppose directement a yattabi'u dans le verset — l'un suit l'envoye, l'autre se retourne sur ses talons. Le changement de qibla sert a distinguer ces deux groupes. Le champ lexical (suivre vs se retourner, envoye vs talons) construit une opposition directionnelle : l'avant vs l'arriere. Se retourner sur ses talons c'est choisir le passe contre l'avenir que l'envoye indique.",
              axe2_voisins: "Le verset 142 montrait les insenses qui critiquent. Le verset 143 precise que certains se retournent sur leurs talons — ils ne se contentent pas de critiquer, ils abandonnent. Le verset 144 ordonnera la nouvelle direction — ceux qui ne se retournent pas suivront.",
              axe3_sourate: "La racine q-l-b apparait dans la sourate al-Baqarah sous ses differents sens. En 2:7, « sceau sur leurs coeurs ». En 2:143, le retournement. Le double sens de la racine (coeur et retournement) est significatif — le coeur est l'organe qui se retourne, qui change de direction. Celui qui se retourne sur ses talons a un coeur qui a change.",
              axe4_coherence: "La racine q-l-b apparait environ 168 fois dans le Coran. L'expression « yanqalibu 'ala 'aqibayhi » (se retourner sur ses talons) apparait en 3:144. Le Coran utilise cette expression pour decrire l'apostasie — le fait de revenir en arriere apres avoir avance.",
              axe5_frequence: "Pour la mission du khalifa, le retournement est le danger principal de la mission. Se retourner sur ses talons c'est abandonner la mission apres l'avoir commencee. Le khalifa doit perseverer dans le suivi malgre les epreuves — le retournement est la trahison de l'engagement."
            },
            "Coeur/Centre": {
              status: "probable",
              senses: ["coeur", "esprit", "intelligence", "milieu"],
              proof_ctx: "Le sens de coeur est un sens majeur de q-l-b. Le coeur (qalb) est l'organe qui se retourne — il est appele qalb justement parce qu'il change et se retourne. Dans le verset 143, le mot est un verbe (yanqalibu, se retourner), pas le nom qalb (coeur). Mais le lien semantique est fort : celui qui se retourne sur ses talons a un coeur qui a tourne.",
              axe1_verset: "Le verbe yanqalibu est la forme verbale de la meme racine qui donne qalb (coeur). Le verset parle du retournement physique (se retourner sur ses talons) mais implique un retournement du coeur — un changement d'adhesion interieure.",
              axe2_voisins: "Le verset 142 parlait des insenses. Le verset 143 montre que le retournement est un choix du coeur, pas seulement un changement de direction physique.",
              axe3_sourate: "En 2:7, les coeurs sont scelles. En 2:143, ceux qui se retournent ont un coeur qui a change. La sourate lie le coeur et le retournement.",
              axe4_coherence: "Le Coran utilise la racine q-l-b pour le coeur (qalb) et pour le retournement (inqilab). Les deux sens sont lies — le coeur est ce qui change et se retourne.",
              axe5_frequence: "Le coeur du khalifa doit rester ferme dans la mission. Le retournement du coeur est ce qui conduit au retournement physique."
            }
          }
        }
      },
      // eqb pos=33
      {
        word_key: "eqb", position: 33, sense_chosen: "succession",
        analysis_axes: {
          sense_chosen: "succession",
          concept_chosen: "Succession/Conséquence",
          concepts: {
            "Succession/Conséquence": {
              status: "retenu",
              senses: ["succeder", "venir apres", "consequence", "alternance"],
              proof_ctx: "Le mot 'aqibayhi est un duel genitif de la racine '-q-b avec pronom suffixe 3MS. Le Lane's donne : talon, ce qui vient apres, consequence. Le talon (aqib) est la partie du pied qui touche le sol en dernier quand on avance et en premier quand on recule. Le duel (aqibayhi) designe les deux talons — les deux pieds qui font demi-tour. L'expression « yanqalibu 'ala aqibayhi » (se retourner sur ses talons) est idiomatique — elle signifie faire volte-face, revenir en arriere, apostasier. Le talon est le point d'appui du retournement.",
              axe1_verset: "Le mot 'aqibayhi complete le verbe yanqalibu pour former l'expression idiomatique « se retourner sur ses talons ». Le champ lexical du verset oppose l'avant (suivre l'envoye) et l'arriere (se retourner sur ses talons). Les talons sont la partie arriere du corps — se retourner sur ses talons c'est litteralement revenir en arriere, abandonner la direction dans laquelle on avancait.",
              axe2_voisins: "Le verset 142 mentionnait le changement de direction. Le verset 143 montre que certains reagissent a ce changement en faisant demi-tour — en se retournant sur leurs talons. La reaction au changement de qibla revele la fidelite ou l'infidelite.",
              axe3_sourate: "La racine '-q-b apparait dans la sourate al-Baqarah en plusieurs endroits. En 2:143, les talons sont l'image du retour en arriere. La sourate construit une opposition entre avancer (suivre) et reculer (se retourner sur ses talons).",
              axe4_coherence: "L'expression « yanqalibu 'ala 'aqibayhi » apparait en 3:144 : « Celui qui se retourne sur ses talons ne nuira en rien a Dieu ». Le Coran utilise cette expression pour decrire l'apostasie. Le talon est le symbole du recul — celui qui se retourne choisit de revenir la d'ou il venait.",
              axe5_frequence: "Pour la mission du khalifa, les talons representent le point de non-retour. Se retourner sur ses talons c'est choisir l'arriere plutot que l'avant. Le khalifa doit avancer — pas reculer. La mission exige la perseverance dans la direction de l'envoye."
            },
            "Talon/Arrière": {
              status: "nul",
              senses: ["frapper le talon", "talon"],
              proof_ctx: "Le sens physique de talon est present mais secondaire — le mot est utilise dans une expression idiomatique (se retourner sur ses talons) ou le sens est le retour en arriere, pas le talon comme partie du corps."
            },
            "Châtiment/Rétribution": {
              status: "nul",
              senses: ["punir", "chatiment"],
              proof_ctx: "Le sens de chatiment est hors sujet — le contexte est le retournement, pas la punition."
            },
            "Descendance": {
              status: "nul",
              senses: ["descendance", "posterite"],
              proof_ctx: "Le sens de descendance est hors sujet — le mot designe les talons dans une expression idiomatique de retournement."
            }
          }
        }
      },
      // kbr pos=37
      {
        word_key: "kbr", position: 37, sense_chosen: "etre grand",
        analysis_axes: {
          sense_chosen: "etre grand",
          concept_chosen: "Grandeur/Importance",
          concepts: {
            "Grandeur/Importance": {
              status: "retenu",
              senses: ["etre grand", "grandir", "etre important", "magnifier"],
              proof_ctx: "Le mot la-kabiratan est un accusatif feminin singulier indefini de la racine k-b-r avec le lam emphatique. Le Lane's donne : grand, important, difficile. Le lam emphatique (la-) renforce l'affirmation — c'etait CERTES grande. L'indefini (kabiratan sans article) marque l'intensite qualitative : pas juste grande mais d'une grandeur indefinie, immense. Le feminin concorde avec le sujet implicite (l'epreuve du changement de qibla). La grandeur ici designe la difficulte — le changement de direction de priere etait une epreuve immense pour ceux qui n'avaient pas la guidance.",
              axe1_verset: "Le mot la-kabiratan qualifie l'epreuve du changement de qibla. Le verset precise : grande SAUF pour ceux que Dieu a guides. Le champ lexical (grande, sauf, guides) montre que la grandeur de l'epreuve est inversement proportionnelle a la guidance — plus on est guide, moins l'epreuve est pesante. La grandeur est un poids qui ecrase ceux qui n'ont pas la guidance.",
              axe2_voisins: "Le verset 142 montrait la reaction des insenses (critique). Le verset 143 explique que le changement etait une grande epreuve. Le verset 144 ordonnera la nouvelle direction sans plus hesiter. La grandeur de l'epreuve est reconnue par Dieu Lui-meme — Il ne minimise pas la difficulte.",
              axe3_sourate: "La racine k-b-r apparait dans la sourate al-Baqarah sous differentes formes. En 2:45, « Elle est certes difficile (kabirah) sauf pour les humbles ». En 2:143, « c'etait certes grande sauf pour ceux que Dieu a guides ». La sourate utilise la meme structure (kabirah + illa, grande sauf) pour montrer que la difficulte est relative a la disposition interieure.",
              axe4_coherence: "La racine k-b-r apparait environ 161 fois dans le Coran. En 2:45 et 2:143, la meme structure montre que la grandeur de l'epreuve depend de l'etat interieur. Le Coran reconnait la difficulte des epreuves mais les relativise par la guidance divine.",
              axe5_frequence: "Pour la mission du khalifa, la grandeur des epreuves est reelle. Le khalifa doit reconnaitre la difficulte sans la nier. Mais la guidance divine allege l'epreuve — ceux qui sont guides trouvent la force de perseverer malgre la grandeur de l'obstacle."
            },
            "Orgueil/Arrogance": {
              status: "nul",
              senses: ["s'enorgueillir", "orgueil"],
              proof_ctx: "Le sens d'orgueil est hors sujet — le mot qualifie l'epreuve comme grande, pas une personne comme orgueilleuse."
            },
            "Âge/Ancienneté": {
              status: "nul",
              senses: ["vieillir", "aine"],
              proof_ctx: "Le sens d'age est hors sujet — la grandeur ici est celle de la difficulte, pas de l'anciennete."
            }
          }
        }
      },
      // hdy pos=41
      {
        word_key: "hdy", position: 41, sense_chosen: "guider",
        analysis_axes: {
          sense_chosen: "guider",
          concept_chosen: "Guidance/Direction",
          concepts: {
            "Guidance/Direction": {
              status: "retenu",
              senses: ["guider", "diriger vers la bonne voie", "montrer le chemin", "guidance", "se guider soi-meme"],
              proof_ctx: "Le verbe hada est un accompli 3MS de la racine h-d-y. Le Lane's donne : guider, montrer le chemin correct, diriger vers la bonne voie. L'accompli marque que la guidance est achevee — Dieu a guide. Le sujet est Allah (Allahu) — c'est Dieu qui guide, pas les hommes. La guidance divine est un acte directionnel — elle part de Dieu et atteint celui qui est guide. Le verset precise que ceux que Dieu a guides ne sont pas ecrases par la grandeur de l'epreuve.",
              axe1_verset: "Le verbe hada introduit la restriction salvatrice du verset — « grande sauf pour ceux que Dieu a guides ». Le champ lexical oppose la grandeur de l'epreuve et la guidance : l'epreuve est grande, mais la guidance la rend supportable. La guidance est l'antidote de l'epreuve. Ceux qui sont guides traversent l'epreuve sans se retourner sur leurs talons.",
              axe2_voisins: "Le verset 142 montrait les insenses. Le verset 143 oppose les guides aux non-guides. Le verset 144 montrera la direction (qibla) comme manifestation concrete de la guidance. La guidance est le fil conducteur : Dieu guide par la qibla, et ceux qu'Il guide suivent.",
              axe3_sourate: "La racine h-d-y est structurante dans la sourate al-Baqarah. En 2:2, « guidance pour les pieux ». En 2:5, « ceux-la sont sur une guidance de leur Seigneur ». En 2:143, la guidance est ce qui allege l'epreuve. La sourate ouvre par la guidance et la retrouve ici au coeur du passage de la qibla.",
              axe4_coherence: "La racine h-d-y apparait environ 316 fois dans le Coran. La guidance est un theme central du Coran — elle est a la fois le chemin (huda) et l'acte de guider (hada). En 2:143, la guidance est la condition pour traverser l'epreuve du changement.",
              axe5_frequence: "Pour la mission du khalifa, la guidance est la condition de la reussite de la mission. Sans la guidance divine, l'epreuve ecrase. Avec la guidance, l'epreuve revele et renforce. Le khalifa doit chercher la guidance pour pouvoir accomplir sa mission face aux epreuves."
            },
            "Conduite/Comportement": {
              status: "nul",
              senses: ["conduite", "maniere d'agir", "comportement calme"],
              proof_ctx: "Le sens de conduite est hors sujet — le verbe hada designe l'acte de guider, pas la maniere d'agir."
            },
            "Don/Offrande": {
              status: "nul",
              senses: ["cadeau", "offrande", "sacrifice", "present"],
              proof_ctx: "Le sens de don est hors sujet — le contexte est la guidance divine, pas un cadeau."
            }
          }
        }
      },
      // alh pos=42
      {
        word_key: "alh", position: 42, sense_chosen: "Dieu",
        analysis_axes: {
          sense_chosen: "Dieu",
          concept_chosen: "Divinité",
          concepts: {
            "Divinité": {
              status: "retenu",
              senses: ["divinite", "dieu", "Dieu", "theologie"],
              proof_ctx: "Le nom Allahu apparait trois fois dans le verset : en position 42 comme sujet de hada (ceux que Dieu a guides), en position 46 comme sujet de kana (Dieu n'etait pas pour faire perdre), et en position 50 comme sujet de inna (certes Dieu est compatissant). Les trois occurrences montrent trois attributs divins : Dieu guide, Dieu preserve et Dieu est compatissant. La triple mention structure la fin du verset autour de Dieu comme acteur central.",
              axe1_verset: "Le nom Allah structure les trois dernieres propositions du verset. Dieu guide (hada Allahu) — la guidance est divine. Dieu ne fait pas perdre (ma kana Allahu li-yudi'a) — la preservation est divine. Dieu est compatissant et misericordieux (inna Allaha ra'ufun rahim) — la compassion est divine. Le verset se ferme sur trois affirmations rassurantes : guidance, preservation, compassion.",
              axe2_voisins: "Le verset 142 montrait les critiques. Le verset 143 rassure par trois attributs divins. Le verset 144 sera un ordre direct de Dieu. Le passage construit la confiance : Dieu guide, preserve et compatit — donc suivez Son ordre.",
              axe3_sourate: "Le nom Allah est le mot le plus frequent de la sourate al-Baqarah. Chaque passage se ferme sur un ou plusieurs attributs divins. Le verset 143 en concentre trois : guidance, preservation, compassion.",
              axe4_coherence: "Le nom Allah apparait plus de 2600 fois dans le Coran. La triple mention dans un meme verset souligne l'importance du message : Dieu est au centre de tout — Il guide, preserve et compatit.",
              axe5_frequence: "Pour la mission du khalifa, Dieu est le mandant et le protecteur de la mission. Le khalifa peut compter sur la guidance, la preservation et la compassion de Dieu. La triple mention est un triple encouragement."
            }
          }
        }
      },
      // dye pos=47
      {
        word_key: "dye", position: 47, sense_chosen: "perdre",
        analysis_axes: {
          sense_chosen: "perdre",
          concept_chosen: "Perte/Gaspillage",
          concepts: {
            "Perte/Gaspillage": {
              status: "retenu",
              senses: ["perdre", "gaspiller", "negliger", "etre perdu", "laisser sans soin"],
              proof_ctx: "Le verbe li-yudi'a est un inaccompli 3MS subjonctif forme IV de la racine d-y-'. Le Lane's donne : perdre, gaspiller, negliger, laisser sans soin. La forme IV (ad'a'a) est causative — faire perdre, causer la perte. La negation (ma kana Allahu li-yudi'a) signifie : Dieu n'est pas tel qu'Il fasse perdre. L'objet est imanakum (votre foi) — Dieu ne fait pas perdre votre foi. Le contexte historique : les compagnons s'inquietaient que leurs prieres faites vers l'ancienne qibla soient perdues. Le verset les rassure : rien n'est perdu.",
              axe1_verset: "Le verbe li-yudi'a rassure apres l'epreuve. Le verset a montre que le changement de qibla est une grande epreuve, puis rassure : Dieu ne fait pas perdre votre foi. Le champ lexical (perdre, foi, compatissant, misericordieux) construit un message de reassurance. L'epreuve est grande mais la foi n'est pas perdue — Dieu est compassionnel.",
              axe2_voisins: "Le verset 142 posait la question du changement. Le verset 143 rassure que rien n'est perdu. Le verset 144 ordonnera la nouvelle direction avec confiance. Le passage construit un schema : question → justification → reassurance → ordre.",
              axe3_sourate: "La racine d-y-' est rare dans la sourate al-Baqarah. Le verset 143 est la seule occurrence notable. La rarete souligne l'importance du message : Dieu ne gaspille pas, ne neglige pas, ne fait pas perdre.",
              axe4_coherence: "La racine d-y-' apparait rarement dans le Coran. En 3:195, « Je ne laisserai pas perdre l'oeuvre d'un ouvrier parmi vous ». En 12:12, « nous ne le laisserons pas perdre ». Le Coran affirme que Dieu ne laisse pas perdre les oeuvres des croyants.",
              axe5_frequence: "Pour la mission du khalifa, la reassurance que rien n'est perdu est essentielle. Le khalifa peut changer de direction sur ordre divin sans craindre que ses efforts passes soient gaspilles. Dieu preserve chaque oeuvre sincere."
            }
          }
        }
      },
      // amn pos=48
      {
        word_key: "amn", position: 48, sense_chosen: "croire",
        analysis_axes: {
          sense_chosen: "croire",
          concept_chosen: "Foi/Adhésion",
          concepts: {
            "Sécurité/Confiance": {
              status: "probable",
              senses: ["etre en securite", "se sentir en securite", "faire confiance", "confier", "fidele", "lieu sur"],
              proof_ctx: "Le sens de securite est le sens premier de a-m-n. Le Lane's donne d'abord la securite avant la foi. Le mot imanakum (votre foi) derive de ce sens premier — la foi est un etat de securite interieure, la confiance en la verite divine. Celui qui a la foi (iman) se sent en securite parce qu'il sait en qui il a confiance. La distinction avec le sens de foi est que la securite est l'etat interieur, tandis que la foi est l'adhesion qui produit cet etat.",
              axe1_verset: "Le mot imanakum pourrait etre lu comme « votre securite » — Dieu ne fait pas perdre votre securite. Mais le contexte (les prieres faites vers l'ancienne qibla) oriente vers la foi comme actes d'adoration. Les compagnons craignaient que leurs prieres soient perdues — le verset les rassure que leur foi (iman, manifestee par la priere) n'est pas perdue.",
              axe2_voisins: "Le verset 142 montrait l'inquietude. Le verset 143 rassure que la foi/securite est preservee.",
              axe3_sourate: "La racine a-m-n est une des plus frequentes de la sourate al-Baqarah. En 2:3, les pieux sont ceux qui croient (yu'minuna) au cache. La foi est le fil conducteur de la sourate.",
              axe4_coherence: "La racine a-m-n apparait environ 879 fois dans le Coran. Le iman est a la fois la foi et la securite — les deux sens sont lies. Celui qui a la foi a la securite interieure.",
              axe5_frequence: "La foi est le fondement de la mission du khalifa. Sans la foi, pas de securite interieure, pas de perseverance dans l'epreuve."
            },
            "Foi/Adhésion": {
              status: "retenu",
              senses: ["croire", "avoir la foi", "accepter comme vrai", "croyant", "confirmer"],
              proof_ctx: "Le mot imanakum est l'accusatif de iman avec pronom suffixe 2MP. Le Lane's donne : foi, adhesion interieure, croyance. Le iman est l'adhesion interieure a la verite divine qui se manifeste en actes (les prieres). Ici imanakum designe la foi des compagnons — leurs actes de devotion (les prieres faites vers l'ancienne qibla). Le contexte historique eclaire : les compagnons s'inquietaient que leurs prieres vers Jerusalem soient invalidees par le changement de qibla. Le verset repond : Dieu ne fait pas perdre votre foi, c'est-a-dire vos prieres comptent.",
              axe1_verset: "Le mot imanakum est l'objet de li-yudi'a — ce que Dieu ne fait pas perdre. La foi est a la fois l'adhesion interieure et sa manifestation exterieure (les prieres). Le verset garantit que les actes de foi passes sont preserves malgre le changement de direction. Le champ lexical (perdre, foi, compatissant, misericordieux) montre que Dieu protege la foi de Ses serviteurs.",
              axe2_voisins: "Le verset 142 montrait l'inquietude face au changement. Le verset 143 rassure : la foi n'est pas perdue. Le verset 144 ordonnera avec confiance. La foi est le lien entre l'epreuve et la reassurance.",
              axe3_sourate: "En 2:3, les pieux sont ceux qui croient. En 2:143, la foi est preservee. La sourate montre que la foi est a la fois la condition de la mission et l'objet de la protection divine.",
              axe4_coherence: "En 9:99, les depenses (des croyants) sont un rapprochement aupres de Dieu. En 2:143, les prieres (manifestation de la foi) sont preservees. Le Coran garantit que les actes de foi sinceres ne sont jamais perdus.",
              axe5_frequence: "Pour la mission du khalifa, la foi est le capital de la mission. Chaque acte de foi s'accumule — rien n'est perdu. Le khalifa peut agir avec confiance sachant que Dieu preserve chaque oeuvre sincere."
            },
            "Garantie/Protection": {
              status: "nul",
              senses: ["proteger", "accorder la securite"],
              proof_ctx: "Le sens de protection est hors sujet — le mot imanakum designe la foi des croyants, pas un acte de protection."
            }
          }
        }
      },
      // raf pos=52
      {
        word_key: "raf", position: 52, sense_chosen: "etre compatissant",
        analysis_axes: {
          sense_chosen: "etre compatissant",
          concept_chosen: "Compassion/Clémence",
          concepts: {
            "Compassion/Clémence": {
              status: "retenu",
              senses: ["etre compatissant", "avoir pitie", "etre clement", "tres compatissant (rauf)"],
              proof_ctx: "Le mot la-ra'ufun est un nominatif masculin singulier indefini de la racine r-'-f avec le lam emphatique. Le Lane's donne : compatissant, plein de tendresse, celui qui cherche a prevenir la souffrance avant qu'elle n'arrive. Le ra'uf est celui qui compatit par anticipation — il ne se contente pas de soulager la douleur existante, il cherche a l'empecher. Le Lane's distingue le ra'uf du rahim : le ra'uf previent, le rahim guerit. Le lam emphatique (la-) renforce : Dieu est CERTES compatissant.",
              axe1_verset: "Le mot la-ra'ufun ferme le verset avec rahimun. Les deux attributs forment un couple : ra'uf (compassion preventive) + rahim (misericorde curative). Dieu previent la souffrance (ra'uf) et soulage ce qui reste (rahim). Le champ lexical du verset (perdre, foi, compatissant, misericordieux) construit un message de reassurance totale : rien n'est perdu, Dieu previent et soulage.",
              axe2_voisins: "Le verset 142 montrait l'inquietude. Le verset 143 conclut par la double compassion divine. Le verset 144 ordonnera avec confiance — la compassion divine fonde la confiance pour le nouvel ordre.",
              axe3_sourate: "La racine r-'-f apparait rarement dans la sourate al-Baqarah. En 2:143, c'est la seule occurrence de ra'uf. En 2:207, « Dieu est compatissant (ra'uf) envers Ses serviteurs ». La sourate utilise ra'uf pour marquer une compassion intense et personnelle.",
              axe4_coherence: "La racine r-'-f apparait environ 13 fois dans le Coran. Le mot ra'uf est souvent couple avec rahim. En 9:128, l'envoye est ra'uf rahim envers les croyants. En 2:143, c'est Dieu qui est ra'uf rahim envers les gens. Le Coran presente la compassion comme un attribut partage entre Dieu et Son envoye.",
              axe5_frequence: "Pour la mission du khalifa, la compassion est un modele de la mission. Le khalifa doit etre compatissant comme Dieu l'est — prevenir la souffrance plutot que la soulager apres coup. La compassion preventive est superieure a la charite reactive."
            }
          }
        }
      },
      // rhm pos=53
      {
        word_key: "rhm", position: 53, sense_chosen: "misericorde",
        analysis_axes: {
          sense_chosen: "misericorde",
          concept_chosen: "Miséricorde/Tendresse",
          concepts: {
            "Miséricorde/Tendresse": {
              status: "retenu",
              senses: ["misericorde", "pardon", "traiter avec compassion", "le Compatissant", "plus misericordieux", "objet de misericorde"],
              proof_ctx: "Le mot rahimun est un nominatif masculin singulier indefini de la racine r-h-m. Le Lane's donne : misericordieux, celui qui fait misericorde, qui soulage la souffrance. Le rahim est le nom intensif (fa'il) qui designe celui dont la misericorde est active et continue. La racine r-h-m porte le sens de matrice (rahim) — la misericorde est un amour qui enveloppe comme la matrice enveloppe le foetus. Le mot complete ra'uf pour former le couple compassion + misericorde : prevention + soulagement.",
              axe1_verset: "Le mot rahimun ferme le verset sur la note la plus tendre. Le couple ra'uf-rahim enveloppe les gens dans une double protection : la compassion previent et la misericorde soulage. Le verset qui s'ouvrait sur la designation (Nous avons fait de vous) se ferme sur la compassion — la designation est un acte de compassion, pas de domination.",
              axe2_voisins: "Le verset 142 montrait les critiques. Le verset 143 se ferme sur la misericorde — la reponse aux critiques est la compassion divine. Le verset 144 ordonnera avec autorite mais cette autorite est fondee sur la misericorde.",
              axe3_sourate: "La racine r-h-m est une des plus frequentes de la sourate al-Baqarah. En 2:163, « Il est le Compatissant, le Misericordieux ». En 2:143, Dieu est ra'uf rahim envers les gens. La sourate revient constamment sur la misericorde comme attribut central de Dieu.",
              axe4_coherence: "La racine r-h-m apparait environ 339 fois dans le Coran. Le couple ra'uf-rahim apparait ensemble 10 fois. Le Coran associe systematiquement la compassion preventive et la misericorde curative. La misericorde est l'attribut le plus cite de Dieu apres la divinite elle-meme.",
              axe5_frequence: "Pour la mission du khalifa, la misericorde est le style de la mission. Le khalifa ne domine pas — il fait misericorde. La misericorde divine est le modele de la conduite humaine dans la mission."
            },
            "Utérus/Reproduction": {
              status: "nul",
              senses: ["uterus", "vulve"],
              proof_ctx: "Le sens d'uterus est le sens premier physique de r-h-m. Le contexte est la misericorde divine envers les gens, pas l'organe reproducteur."
            },
            "Parenté/Lien familial": {
              status: "nul",
              senses: ["lien de parente"],
              proof_ctx: "Le sens de parente derive de l'uterus commun. Le contexte est la misericorde divine, pas les liens familiaux."
            },
            "Provision/Bienfait matériel": {
              status: "nul",
              senses: ["subsistance", "pluie", "abondance"],
              proof_ctx: "Le sens de provision est une manifestation concrete de la misericorde. Le contexte est l'attribut divin ra'uf-rahim, pas un bienfait materiel specifique."
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

  const verseIds = [150];
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
  console.log('=== PIPELINE SOURATE 2 — VERSET 143 ===\n');
  await processVerse(143);
  await syncWordMeanings();
  console.log('\n=== PIPELINE V143 TERMINEE ===');
}

main().catch(e => console.error('FATAL:', e));
