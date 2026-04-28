const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// =====================================================
// PIPELINE SOURATE 2 — VERSET 193
// verse_id=200, analysis_id=560
// "Et combattez-les jusqu'a ce qu'il n'y ait plus de fitna
//  et que la religion soit entierement a Dieu seul. S'ils
//  cessent, donc plus d'hostilite, sauf contre les injustes."
// Combat pour eliminer la fitna, religion pour Dieu,
// cessation = fin des hostilites, exception des injustes
// =====================================================

const verseData = {
  193: {
    verse_id: 200,
    analysis_id: 560,
    translation_arab: "Et combattez-les jusqu'a ce qu'il n'y ait plus de fitna et que la religion soit entierement a Dieu. S'ils cessent, alors plus de transgression sauf contre les injustes.",
    full_translation: "Et combattez-les jusqu'a ce qu'il n'y ait plus d'association et que la religion soit entierement a Allah seul. S'ils cessent, donc plus d'hostilite, sauf contre les injustes.",
    translation_explanation: `§DEMARCHE§
Le verset poursuit la section legislative sur le combat en posant les objectifs et les limites. Le verbe **qatiluhum** est un imperatif 2MP forme III de la racine q-t-l avec pronom suffixe 3MP (-hum = les). Le Lane's donne : combattre, lutter mutuellement, s'engager dans un combat reciproque. La forme III (mufa'ala) marque la reciprocite — il s'agit d'un combat mutuel, pas d'un meurtre unilateral. L'imperatif ordonne le combat, le pronom suffixe -hum designe l'ennemi mentionne dans les versets precedents (ceux qui vous combattent, 2:190). La particule **hatta** (jusqu'a ce que) introduit le but du combat — le combat n'est pas un objectif en soi mais un moyen qui doit cesser une fois l'objectif atteint. La negation **la** avec le verbe **takuna** (il n'y ait pas) pose la condition negative : l'objectif est l'absence de fitna. Le verbe takuna est un inaccompli 3FS forme I de la racine k-w-n au subjonctif. Le Lane's donne : etre, exister, se trouver, avoir lieu. L'inaccompli au subjonctif apres hatta exprime le but — jusqu'a ce qu'il n'y ait plus. Le nom **fitnatun** est un nom nominatif indefini singulier de la racine f-t-n. Le Lane's donne : epreuve, mise a l'epreuve, tentation, seduction, trouble, desordre, persecution, discorde, ce qui met a l'epreuve par le feu (sens premier : fondre l'or pour en tester la purete). Le mot est au nominatif indefini comme sujet de takuna — c'est la fitna qui ne doit plus exister. Le texte ne precise pas la nature exacte de la fitna dans ce contexte — le mot couvre un large spectre de realites allant de l'epreuve a la persecution. Le verbe **yakuna** est un inaccompli 3MS forme I de la racine k-w-n au subjonctif. Le Lane's donne : etre, exister, se trouver. L'inaccompli au subjonctif exprime le deuxieme objectif : que la religion soit a Dieu. Le nom **al-dinu** est un nom nominatif defini singulier de la racine d-y-n. Le Lane's donne : religion, systeme de croyances et de pratiques, obeissance, soumission, jugement, retribution, coutume, habitude. Le din est defini par l'article al- — c'est LA religion, la realite connue et definie, pas une religion parmi d'autres. Le nom est sujet de yakuna — c'est la religion qui doit etre pour Dieu. La preposition **li** (pour/a) avec **Allahi** (Dieu) indique l'attribution — la religion est a Dieu, elle lui appartient, elle est pour Lui exclusivement. La particule conditionnelle **fa-ini** (et si) introduit la deuxieme partie du verset — la consequence de la cessation. Le verbe **intahaw** est un accompli 3MP forme VIII de la racine n-h-y. Le Lane's donne pour la forme VIII : cesser, s'arreter, se retenir, parvenir a son terme, atteindre la fin. La forme VIII (ifti'al) marque l'effort reflexif — ils se sont eux-memes arretes, la cessation vient d'eux. L'accompli marque que l'action est achevee — ils ont cesse, c'est fait. La particule **fa** (donc/alors) introduit la consequence. La negation **la** nie ce qui suit. Le nom **udwana** est un nom accusatif indefini singulier de la racine '-d-w. Le Lane's donne : transgression, exces, depassement des limites, hostilite, inimitie, agression. Le mot est a l'accusatif avec la negation la — « pas de transgression » est une interdiction de depasser les limites. L'indefini marque l'absolu — aucune transgression, de quelque nature que ce soit. La particule d'exception **illa** (sauf/excepte) introduit l'exception. La preposition **ala** (contre/sur) avec le nom **al-zalimina** (les injustes) limite l'exception — la transgression n'est permise que contre les injustes. Le nom al-zalimina est un participe actif pluriel defini de la racine z-l-m. Le Lane's donne : etre injuste, opprimer, placer quelque chose hors de sa place, commettre une injustice, faire du tort. Le participe actif marque un etat permanent — les injustes sont ceux dont l'injustice est une caracteristique continue. L'article al- et le pluriel designent une categorie connue : LES injustes, ceux qui sont identifies comme tels.

§JUSTIFICATION§
**combattez-les** — Le sens retenu est « combattre mutuellement ». Le verbe qatiluhum est un imperatif forme III de q-t-l. L'alternative « tuer » (forme I) est ecartee car la forme III marque la reciprocite — il s'agit d'un combat mutuel et non d'un meurtre unilateral. Le pronom suffixe -hum renvoie aux ennemis des versets precedents.

**il n'y ait** — Le sens retenu est « etre/exister ». Le verbe takuna est un inaccompli subjonctif de k-w-n. Ici avec la negation la, le sens est « il n'y ait pas », exprimant l'absence. Aucune alternative pertinente — le sens est univoque dans cette construction grammaticale.

**fitna** — Le sens retenu est « mise a l'epreuve/persecution ». Le mot fitnatun designe ce qui met a l'epreuve, qui trouble, qui persecute. L'alternative « seduction » est ecartee car le contexte est le combat — la fitna ici designe le trouble et la persecution qui poussent les gens hors de leur religion, pas une tentation sensuelle. L'alternative « epreuve interieure » est ecartee car le verset parle d'une fitna a eliminer par le combat — c'est une realite exterieure et sociale.

**soit** — Le sens retenu est « etre/exister ». Le verbe yakuna est un inaccompli subjonctif de k-w-n. Le sens est « que la religion soit (pour Dieu) ». Aucune alternative pertinente.

**la religion** — Le sens retenu est « religion/systeme ». Le mot al-dinu designe le systeme de croyances et de pratiques. L'alternative « jugement/retribution » est ecartee car la construction « yakuna al-dinu li-llahi » (que la religion soit a Dieu) designe l'attribution de la religion a Dieu — la religion lui appartient. Le sens de jugement ne fonctionne pas avec cette construction.

**Dieu** — Le sens retenu est « la divinite unique ». Le mot Allah est le nom propre de Dieu. Aucune alternative pertinente.

**ils cessent** — Le sens retenu est « cesser/s'arreter ». Le verbe intahaw est un accompli forme VIII de n-h-y. La forme VIII marque l'effort reflexif — ils se sont eux-memes arretes. L'alternative « interdiction » (sens de base de la forme I : interdire, empecher) est ecartee car la forme VIII transforme le sens : ce n'est plus interdire (acte dirige vers l'autre) mais s'arreter soi-meme (acte reflexif). L'alternative « intelligence/discernement » (sens atteste par Lane's : nahiya = doue de raison) est ecartee car le contexte est la cessation du combat — le verbe designe l'arret de l'hostilite, pas l'acquisition de l'intelligence.

**transgression** — Le sens retenu est « transgression/exces ». Le mot udwana designe le depassement des limites, l'exces, l'hostilite. L'alternative « hostilite » pure est proche mais « transgression » est plus precis car il insiste sur le depassement de ce qui est permis — l'hostilite peut etre legitime (le combat autorise), la transgression ne l'est jamais.

**les injustes** — Le sens retenu est « injustice/oppression ». Le mot al-zalimina designe ceux qui placent les choses hors de leur place, les oppresseurs. L'alternative « obscurite » (sens physique premier de z-l-m) est ecartee car le participe actif designe des personnes qui commettent l'injustice — il s'agit de la dimension morale et sociale, pas de la dimension physique de la racine.

§CRITIQUE§
**fitna** — Les traductions courantes donnent « association » (Hamidullah) ou « persecution » (Blachere) pour fitna. Le choix de « association » (shirk) est une interpretation exegetique — le texte dit fitna, pas shirk. La racine f-t-n designe l'epreuve par le feu, la mise a l'epreuve, le trouble. Les exegetes classiques ont identifie la fitna au shirk (polytheisme) en se basant sur le contexte historique, mais le texte coranique utilise un mot different et plus large. Notre traduction garde « fitna » comme terme technique car aucun mot francais ne couvre l'ensemble de ses sens. La difference est significative : « association » reduit le combat a une question theologique, alors que « fitna » englobe la persecution, le trouble social, l'epreuve — des realites plus larges que le seul polytheisme.

**transgression vs hostilite** — Hamidullah donne « hostilite » pour udwan. Notre traduction donne « transgression » qui insiste sur le depassement des limites. La nuance est importante : l'hostilite peut etre legitime (le combat autorise par le verset), mais la transgression est par definition le depassement de ce qui est permis. Le verset dit que si les ennemis cessent, il n'y a plus de transgression — c'est-a-dire qu'il n'est plus permis de depasser les limites du combat defensif. Le mot « hostilite » est moins precis car il ne distingue pas l'hostilite permise de l'hostilite interdite.`,
    segments: [
      { fr: "et", phon: "wa", arabic: "\u0648\u064e", is_particle: true, position: 0 },
      { fr: "combattez-les", pos: "verbe", phon: "qatiluhum", arabic: "\u0642\u064e\u0640\u0670\u062a\u0650\u0644\u064f\u0648\u0647\u064f\u0645\u0652", word_key: "qtl", is_particle: false, sense_retenu: "combattre", position: 1 },
      { fr: "jusqu'a ce que", phon: "hatta", arabic: "\u062d\u064e\u062a\u0651\u064e\u0649\u0670", is_particle: true, position: 2 },
      { fr: "ne", phon: "la", arabic: "\u0644\u064e\u0627", is_particle: true, position: 3 },
      { fr: "il n'y ait", pos: "verbe", phon: "takuna", arabic: "\u062a\u064e\u0643\u064f\u0648\u0646\u064e", word_key: "kwn", is_particle: false, sense_retenu: "etre", position: 4 },
      { fr: "de fitna", pos: "nom", phon: "fitnatun", arabic: "\u0641\u0650\u062a\u0652\u0646\u064e\u0629\u064c", word_key: "ftn", is_particle: false, sense_retenu: "mise a l'epreuve", position: 5 },
      { fr: "et que", phon: "wa", arabic: "\u0648\u064e", is_particle: true, position: 6 },
      { fr: "soit", pos: "verbe", phon: "yakuna", arabic: "\u064a\u064e\u0643\u064f\u0648\u0646\u064e", word_key: "kwn", is_particle: false, sense_retenu: "etre", position: 7 },
      { fr: "la religion", pos: "nom", phon: "al-dinu", arabic: "\u0671\u0644\u062f\u0651\u0650\u064a\u0646\u064f", word_key: "dyn", is_particle: false, sense_retenu: "religion", position: 8 },
      { fr: "a Dieu", pos: "nom", phon: "li-llahi", arabic: "\u0644\u0650\u0644\u0651\u064e\u0647\u0650", word_key: "alh", is_particle: false, sense_retenu: "Dieu", position: 9 },
      { fr: "et si", phon: "fa-ini", arabic: "\u0641\u064e\u0625\u0650\u0646\u0650", is_particle: true, position: 10 },
      { fr: "ils cessent", pos: "verbe", phon: "intahaw", arabic: "\u0671\u0646\u062a\u064e\u0647\u064e\u0648\u06e1\u0627", word_key: "nhy", is_particle: false, sense_retenu: "cesser", position: 11 },
      { fr: "alors pas de", phon: "fa-la", arabic: "\u0641\u064e\u0644\u064e\u0627", is_particle: true, position: 12 },
      { fr: "transgression", pos: "nom", phon: "udwana", arabic: "\u0639\u064f\u062f\u0652\u0648\u064e\u0640\u0670\u0646\u064e", word_key: "edw", is_particle: false, sense_retenu: "transgression", position: 13 },
      { fr: "sauf", phon: "illa", arabic: "\u0625\u0650\u0644\u0651\u064e\u0627", is_particle: true, position: 14 },
      { fr: "contre", phon: "ala", arabic: "\u0639\u064e\u0644\u064e\u0649", is_particle: true, position: 15 },
      { fr: "les injustes", pos: "nom", phon: "al-zalimina", arabic: "\u0671\u0644\u0638\u0651\u064e\u0640\u0670\u0644\u0650\u0645\u0650\u064a\u0646\u064e", word_key: "zlm", is_particle: false, sense_retenu: "les injustes", position: 16 }
    ],
    words: [
      // qtl pos=1
      {
        word_key: "qtl", position: 1, sense_chosen: "combattre",
        analysis_axes: {
          sense_chosen: "combattre",
          concept_chosen: "Meurtre/Combat",
          concepts: {
            "Meurtre/Combat": {
              status: "retenu",
              senses: ["tuer", "combattre", "mettre a mort", "lutter", "chercher a tuer"],
              proof_ctx: "Le verbe qatiluhum est un imperatif 2MP forme III de la racine q-t-l avec pronom suffixe 3MP. Le Lane's donne : tuer, combattre mutuellement, lutter, faire la guerre, chercher a tuer reciproquement. La forme III (mufa'ala) transforme le sens de « tuer » (forme I, acte unilateral) en « combattre mutuellement » (forme III, action reciproque). Le combat est un acte exterieur, directionnel et violent — il sort de celui qui combat et atteint celui qui est combattu. La reciprocite de la forme III implique que les deux parties sont engagees dans le combat — ce n'est pas une execution mais une lutte. Le pronom suffixe -hum renvoie aux ennemis mentionnes en 2:190 (ceux qui vous combattent). Le verset 2:190 posait le cadre defensif — le combat est une reponse a l'agression. Le verset 2:193 precise l'objectif de ce combat : eliminer la fitna et etablir la religion pour Dieu.",
              axe1_verset: "Le verbe qatiluhum ouvre le verset en reprenant l'ordre de combat donne en 2:190. Le champ lexical (fitna, religion, Dieu, cesser, transgression, injustes) montre que le combat est un instrument au service d'un objectif precis — eliminer la fitna — pas un objectif en soi. Le combat est encadre par un but (hatta = jusqu'a ce que) et par une limite (fa-ini intahaw = s'ils cessent). L'imperatif est direct et ferme — il ordonne le combat sans hesitation. Le pronom suffixe -hum (les) personnalise l'ennemi — ce ne sont pas des gens en general mais ceux identifies dans les versets precedents.",
              axe2_voisins: "Le verset 2:190 ordonnait deja le combat defensif : « combattez dans la voie de Dieu ceux qui vous combattent ». Le verset 2:191 precisait les actions de combat. Le verset 2:193 ajoute l'objectif strategique du combat. La sequence 190-193 construit un cadre complet : le droit de combattre (190), les modalites du combat (191), les limites sacrees (192), et l'objectif final (193). Chaque verset ajoute une couche de precision et de reglementation. Le combat est le sujet le plus reglemente de cette section.",
              axe3_sourate: "La racine q-t-l est tres frequente dans la sourate al-Baqarah. En 2:154, « ne dites pas de ceux qui sont tues dans la voie de Dieu qu'ils sont morts ». En 2:178, le talion pour le meurtre. En 2:190-193, les regles du combat defensif. La sourate utilise q-t-l dans tous ses registres : le meurtre illegal (talion), la mort au combat (martyrs), le combat autorise (defense). Ici c'est le combat autorise et encadre qui est en jeu — pas le meurtre arbitraire.",
              axe4_coherence: "La racine q-t-l apparait environ 170 fois dans le Coran. La forme III (qatala = combattre mutuellement) est la forme la plus utilisee dans les versets legislatifs sur le combat. En 4:76, « combattez les allies de Satan ». En 9:29, « combattez ceux qui ne croient pas ». En 22:39, « il est permis a ceux qui sont combattus de combattre ». Le Coran utilise systematiquement la forme III pour le combat — la reciprocite est un element constitutif de la legislation sur le combat. Le combat coranique n'est jamais un massacre unilateral mais une lutte entre deux parties.",
              axe5_frequence: "Pour la mission du khalifa, le combat est un instrument de dernier recours pour empecher la corruption sur terre. Le khalifa est d'abord un batisseur de civilisation — il ne combat que lorsque la fitna menace l'ordre social et religieux. Le verset pose un objectif clair : le combat doit cesser des que la fitna disparait. Le khalifa combattant n'est pas un guerrier perpetuel mais un protecteur temporaire qui pose les armes quand la menace est ecartee. Le combat est un moyen, la paix est la finalite."
            }
          }
        }
      },
      // kwn pos=4 (takuna — negation)
      {
        word_key: "kwn", position: 4, sense_chosen: "etre",
        analysis_axes: {
          sense_chosen: "etre",
          concept_chosen: "Être/Existence",
          concepts: {
            "Être/Existence": {
              status: "retenu",
              senses: ["etre", "exister", "se trouver", "avoir lieu", "devenir"],
              proof_ctx: "Le verbe takuna est un inaccompli 3FS forme I de la racine k-w-n au subjonctif apres hatta. Le Lane's donne : etre, exister, se trouver, avoir lieu, devenir, se produire. Le verbe kana est le verbe d'existence par excellence en arabe — il pose la realite d'une chose. L'inaccompli au subjonctif avec la negation la exprime le but negatif : jusqu'a ce qu'il n'y ait plus, jusqu'a ce que la fitna cesse d'exister. Le verbe est au feminin singulier car le sujet fitnatun est feminin. La construction hatta la takuna fitnatun est une proposition finale negative — le combat a pour but l'inexistence de la fitna. Le verbe d'existence est ici utilise dans sa negation — c'est l'absence d'existence qui est recherchee.",
              axe1_verset: "Le verbe takuna, nie par la, pose le premier objectif du combat : l'inexistence de la fitna. Le champ lexical (combattre, fitna, religion, Dieu) montre que le combat vise un etat d'absence — l'absence de fitna. Le verbe d'existence est utilise pour exprimer une non-existence souhaitee. La construction « hatta la takuna fitnatun » est une des plus importantes du Coran car elle definit le but du combat comme l'elimination d'un etat — pas la destruction d'un peuple ou d'un groupe, mais la fin d'une realite (la fitna). Le combat vise un etat, pas des personnes.",
              axe2_voisins: "Le verset 2:190 posait le cadre defensif du combat. Le verset 2:193 ajoute l'objectif : jusqu'a ce qu'il n'y ait plus de fitna. Le verbe takuna dans cette construction finale donne au combat un critere d'arret objectif — le combat n'est pas perpetuel, il a une fin mesurable : la disparition de la fitna. Les versets voisins 194-195 continueront a encadrer le combat. La sequence montre que le Coran ne pose jamais un ordre de combat sans poser simultanement ses limites et ses objectifs.",
              axe3_sourate: "La racine k-w-n est la racine la plus frequente de la langue arabe et apparait dans toute la sourate al-Baqarah. En 2:117, « kun fa-yakun » (Sois et c'est). En 2:134, « tilka ummatun qad khalat » (c'est une communaute qui a passe). Le verbe kana structure la sourate comme verbe d'existence et de devenir. En 2:193, kana est utilise au subjonctif avec negation pour exprimer un objectif — l'inexistence de la fitna est un but a atteindre.",
              axe4_coherence: "La racine k-w-n apparait environ 1358 fois dans le Coran — c'est une des racines les plus frequentes. La construction « hatta la takuna fitnatun » apparait aussi en 8:39 avec une addition : « wa yakuna al-dinu kulluhu li-llahi » (et que la religion soit entierement a Dieu). Le Coran utilise la meme formule dans deux contextes differents — 2:193 pour le debut de la legislation sur le combat et 8:39 pour les batailles. La repetition montre que l'objectif du combat est constant : eliminer la fitna et etablir la religion pour Dieu.",
              axe5_frequence: "Pour la mission du khalifa, l'existence et la non-existence sont les deux poles de la mission. Le khalifa est cree pour faire exister la justice et faire disparaitre la corruption. Le verbe takuna avec negation exprime precisement cette mission : faire en sorte que la fitna n'existe plus. Le khalifa ne combat pas pour le plaisir de combattre mais pour atteindre un etat d'absence de fitna — un etat ou les gens ne sont plus persecutes ni eprouves dans leur religion."
            }
          }
        }
      },
      // ftn pos=5
      {
        word_key: "ftn", position: 5, sense_chosen: "mise a l'epreuve",
        analysis_axes: {
          sense_chosen: "mise a l'epreuve",
          concept_chosen: "Épreuve/Tentation",
          concepts: {
            "Épreuve/Tentation": {
              status: "retenu",
              senses: ["epreuve", "tentation", "mise a l'epreuve", "seduction", "persecution", "trouble", "desordre", "discorde"],
              proof_ctx: "Le nom fitnatun est un nom nominatif indefini singulier de la racine f-t-n. Le Lane's donne : epreuve, mise a l'epreuve par le feu (sens premier : fondre l'or ou l'argent pour tester sa purete), tentation, seduction, persecution, trouble, desordre, discorde, ce qui detourne quelqu'un de sa voie. La fitna est un processus de mise a l'epreuve qui revele la nature veritable de ce qui est eprouve — comme le feu revele la purete de l'or. C'est un acte exterieur qui atteint celui qui est eprouve — l'epreuve sort de celui qui l'impose et touche celui qui la subit. La fitna est a la fois l'acte de mettre a l'epreuve et le trouble qui en resulte. Le mot est au nominatif indefini comme sujet de takuna — c'est la fitna qui ne doit plus exister, sans precision de sa nature exacte. Le texte ne dit pas « shirk » (association) — il dit « fitna », un mot plus large qui couvre l'epreuve, la persecution et le trouble social. La distinction entre la fitna et d'autres termes coraniques est essentielle : la fitna n'est pas un crime specifique mais un etat de trouble generalise qui empeche les gens de vivre leur religion en paix.",
              axe1_verset: "Le mot fitnatun est le premier objectif du combat : le combat doit durer jusqu'a ce que la fitna disparaisse. Le champ lexical (combattre, religion, Dieu, cesser, transgression, injustes) montre que la fitna est le mal que le combat doit eliminer. Le verset ne dit pas « combattez-les jusqu'a ce qu'ils soient tues » ou « jusqu'a ce qu'ils se convertissent » — il dit « jusqu'a ce qu'il n'y ait plus de fitna ». L'objectif est la disparition d'un etat (le trouble, la persecution), pas la destruction d'un groupe. Le mot est indefini (fitnatun, pas al-fitna) — il designe toute forme de fitna, pas une fitna specifique.",
              axe2_voisins: "Le verset 2:191 disait : « la fitna est plus grave que le meurtre (wa-l-fitnatu ashaddu mina-l-qatli) ». Le verset 2:193 ordonne le combat jusqu'a ce que cette fitna disparaisse. La sequence est logique : la fitna est pire que le meurtre (191) → donc il faut la combattre jusqu'a sa disparition (193). Le verset 2:191 posait la gravite de la fitna, le verset 2:193 en tire la consequence operative. Les versets 190-193 forment un syllogisme : le combat defensif est autorise (190) → la fitna est pire que le meurtre (191) → donc combattez jusqu'a l'elimination de la fitna (193).",
              axe3_sourate: "La racine f-t-n apparait dans la sourate al-Baqarah en 2:102 (la fitna des deux anges a Babylone), 2:191 (la fitna est pire que le meurtre), 2:193 (combattre jusqu'a l'elimination de la fitna), 2:217 (la fitna est pire que le meurtre — repetition). La sourate presente la fitna comme un mal majeur — elle revient a quatre reprises dans des contextes differents. La fitna est un des themes centraux de la sourate car elle menace l'ordre social que le Coran cherche a etablir.",
              axe4_coherence: "La racine f-t-n apparait environ 60 fois dans le Coran. En 8:39, la meme formule apparait : « combattez-les jusqu'a ce qu'il n'y ait plus de fitna ». En 29:2, « les gens pensent-ils qu'on les laissera dire 'nous croyons' sans les eprouver (yuftanuna) ». En 85:10, « ceux qui ont eprouve (fatanu) les croyants et les croyantes ». Le Coran utilise f-t-n dans deux registres : l'epreuve divine (qui teste la foi) et la persecution humaine (qui tourmente les croyants). En 2:193, le contexte de combat indique que la fitna est la persecution humaine, pas l'epreuve divine.",
              axe5_frequence: "Pour la mission du khalifa, la fitna est l'ennemi de la mission. La fitna est le trouble qui empeche les gens de vivre selon la justice et la religion — elle corrompt l'ordre social et persecute ceux qui cherchent a le maintenir. Le khalifa combat la fitna non par amour de la guerre mais par amour de l'ordre. L'objectif « jusqu'a ce qu'il n'y ait plus de fitna » montre que la mission du khalifa est de creer un environnement de paix ou les gens peuvent vivre leur religion sans persecution ni trouble."
            }
          }
        }
      },
      // kwn pos=7 (yakuna — positif)
      {
        word_key: "kwn", position: 7, sense_chosen: "etre",
        analysis_axes: {
          sense_chosen: "etre",
          concept_chosen: "Être/Existence",
          concepts: {
            "Être/Existence": {
              status: "retenu",
              senses: ["etre", "exister", "se trouver", "avoir lieu", "devenir"],
              proof_ctx: "Le verbe yakuna est un inaccompli 3MS forme I de la racine k-w-n au subjonctif apres la conjonction wa (et). Le Lane's donne : etre, exister, se trouver, avoir lieu, devenir. Le verbe est au masculin singulier car le sujet al-dinu est masculin. La construction « wa yakuna al-dinu li-llahi » exprime le deuxieme objectif du combat : que la religion soit a Dieu. Contrairement a l'occurrence precedente (la takuna = il n'y ait pas), ici le verbe est affirmatif — il s'agit de faire exister un etat, pas de supprimer un etat. Les deux occurrences de k-w-n dans le verset forment un diptyque : eliminer la fitna (non-existence) ET etablir la religion pour Dieu (existence).",
              axe1_verset: "Le verbe yakuna pose le deuxieme objectif du combat, complementaire du premier. Le champ lexical (combattre, fitna, religion, Dieu) montre que le combat a deux buts lies : supprimer le negatif (la fitna) et etablir le positif (la religion pour Dieu). Le verbe est au subjonctif comme but — « et que la religion soit a Dieu » est un objectif a atteindre, pas un fait accompli. La construction parallele (la takuna fitnatun / wa yakuna al-dinu) cree une symetrie grammaticale qui lie les deux objectifs comme les deux faces d'une meme piece.",
              axe2_voisins: "Le verset 2:190 donnait le cadre defensif. Le verset 2:193 ajoute l'objectif positif : que la religion soit a Dieu. La sequence montre que le combat n'est pas seulement defensif (repousser l'agression) mais aussi constructif (etablir la religion). Les deux objectifs sont inseparables — on ne peut pas eliminer la fitna sans etablir la religion, et inversement. Les versets voisins confirment que le combat est un instrument au service d'un projet de societe, pas une fin en soi.",
              axe3_sourate: "La racine k-w-n structure toute la sourate al-Baqarah comme verbe d'existence fondamental. En 2:193, les deux occurrences de k-w-n (la takuna / wa yakuna) expriment les deux faces de l'objectif du combat. La sourate montre que la legislation divine vise a la fois la suppression du mal (la fitna) et l'etablissement du bien (la religion pour Dieu). Le verbe d'existence est l'outil grammatical de cette double vocation.",
              axe4_coherence: "En 8:39, la meme construction apparait avec une addition : « wa yakuna al-dinu kulluhu li-llahi » (et que la religion soit ENTIEREMENT a Dieu). Le mot kulluhu (entierement) en 8:39 explicite ce qui est implicite en 2:193 — la religion doit etre entierement et exclusivement pour Dieu, sans partage. Le Coran utilise la meme formule dans deux sourates differentes, montrant la constance de l'objectif a travers les periodes de la revelation.",
              axe5_frequence: "Pour la mission du khalifa, l'existence de la religion pour Dieu est le but ultime de la mission. Le khalifa ne combat pas pour etablir sa propre domination mais pour etablir la religion pour Dieu — un ordre social fonde sur la justice divine, pas sur le pouvoir humain. L'objectif « que la religion soit a Dieu » signifie que l'autorite ultime n'est pas un roi, un chef ou une tribu, mais Dieu — et Ses principes de justice et d'equite."
            }
          }
        }
      },
      // dyn pos=8
      {
        word_key: "dyn", position: 8, sense_chosen: "religion",
        analysis_axes: {
          sense_chosen: "religion",
          concept_chosen: "Religion/Système",
          concepts: {
            "Religion/Système": {
              status: "retenu",
              senses: ["religion", "systeme de croyances", "pratique religieuse", "foi", "culte"],
              proof_ctx: "Le nom al-dinu est un nom nominatif defini singulier de la racine d-y-n. Le Lane's donne : religion, systeme de croyances et de pratiques, obeissance, soumission, jugement, retribution, coutume, habitude, maniere de vivre. Le din est un systeme complet qui englobe les croyances, les pratiques, les lois et les coutumes — c'est la maniere dont un peuple organise sa relation avec le divin et avec les autres. Le din est defini par l'article al- — c'est LA religion, la religion connue et definie, celle que Dieu a revelee. Le mot est sujet de yakuna — c'est la religion qui doit etre pour Dieu. La construction « al-dinu li-llahi » (la religion est a/pour Dieu) signifie que la religion appartient a Dieu, elle vient de Lui et elle Lui est destinee. L'attribution marque l'exclusivite — la religion n'est pas pour les hommes, les tribus ou les rois, mais pour Dieu seul. La distinction avec le sens « Obeissance/Soumission » est que le din ici n'est pas l'acte individuel d'obeir mais le systeme collectif de croyances et de pratiques. Le sens de « Jugement/Retribution » est ecarte car la construction syntaxique « yakuna al-dinu li-llahi » designe l'attribution de la religion a Dieu, pas le jour du jugement.",
              axe1_verset: "Le mot al-dinu est le coeur du deuxieme objectif du combat. Le champ lexical (combattre, fitna, Dieu, cesser, transgression) montre que la religion est l'enjeu du verset — le combat vise a proteger la religion et a l'etablir pour Dieu. La religion est ce que la fitna menace et ce que le combat defend. Le verset pose la religion comme un bien collectif qui doit etre preserve de la fitna. L'article al- designe la religion comme une realite unique et connue — pas une religion parmi d'autres mais LA religion revelee par Dieu.",
              axe2_voisins: "Le verset 2:190 disait « combattez dans la voie de Dieu ». Le verset 2:193 ajoute « et que la religion soit a Dieu ». La « voie de Dieu » (sabili l-lahi) et « la religion pour Dieu » (al-dinu li-llahi) sont deux expressions complementaires — la voie est le chemin, la religion est la destination. Les versets construisent un cadre ou le combat est au service de la religion, pas l'inverse. La religion est le but, le combat est le moyen.",
              axe3_sourate: "La racine d-y-n apparait dans la sourate al-Baqarah en 2:132 (la religion de Jacob), 2:193 (la religion pour Dieu), 2:217 (« la fitna est pire que le meurtre... et ils ne cesseront de vous combattre jusqu'a vous detourner de votre religion »), 2:256 (« pas de contrainte en religion »). La sourate presente la religion comme un droit fondamental — les gens ont le droit de pratiquer leur religion sans contrainte ni persecution. Le verset 2:193 et le verset 2:256 ne sont pas contradictoires : le combat vise a eliminer la fitna (persecution), pas a imposer la religion (contrainte).",
              axe4_coherence: "La racine d-y-n apparait environ 101 fois dans le Coran. En 3:19, « la religion aupres de Dieu est l'islam ». En 109:6, « a vous votre religion et a moi ma religion ». En 110:2, « les gens entrent dans la religion de Dieu par groupes ». Le Coran presente le din comme un systeme universel que Dieu a revele et que les gens acceptent ou rejettent librement. Le verset 2:193 ne dit pas de forcer les gens a entrer dans la religion mais de faire en sorte que la religion soit pour Dieu — c'est-a-dire que personne ne s'interpose entre les gens et Dieu.",
              axe5_frequence: "Pour la mission du khalifa, la religion est le cadre de la mission. Le khalifa est le representant de Dieu sur terre — sa mission est d'etablir un ordre social ou la religion (le systeme de justice divine) prevaut. La mention « que la religion soit a Dieu » signifie que l'autorite ultime est Dieu, pas les hommes. Le khalifa ne s'arroge pas le pouvoir divin — il sert le din en le protegeant de la fitna et en le rendant accessible a tous sans contrainte ni persecution."
            },
            "Obéissance/Soumission": {
              status: "probable",
              senses: ["obeissance", "soumission", "servitude", "allegeance"],
              proof_ctx: "Le sens d'obeissance est un sens bien atteste de la racine d-y-n dans le Lane's — dana li signifie obeir a, se soumettre a. L'obeissance est un acte individuel de soumission de la volonte — on obeit a une autorite. Mais la construction « al-dinu li-llahi » ne dit pas « l'obeissance est a Dieu » mais « la religion est a Dieu ». La distinction philosophique est que l'obeissance est un acte individuel ponctuel, tandis que la religion est un systeme collectif permanent. Le verset ne vise pas l'obeissance individuelle mais l'etablissement d'un systeme religieux collectif ou Dieu est l'autorite ultime. L'obeissance est une composante de la religion, mais elle n'en est pas le tout."
            }
          }
        }
      },
      // alh pos=9
      {
        word_key: "alh", position: 9, sense_chosen: "Dieu",
        analysis_axes: {
          sense_chosen: "Dieu",
          concept_chosen: "Divinité",
          concepts: {
            "Divinité": {
              status: "retenu",
              senses: ["Dieu", "divinite", "Celui qui est adore"],
              proof_ctx: "Le nom li-llahi est le nom propre de Dieu au genitif precede de la preposition li (pour/a). Le Lane's donne pour la racine a-l-h : Dieu, la divinite, Celui vers qui les coeurs se tournent dans l'adoration, Celui qui est adore. Le nom Allah est defini par nature — il designe l'Etre unique, le Dieu unique. La preposition li marque l'attribution et l'exclusivite — la religion est POUR Dieu, elle Lui appartient, elle Lui est destinee. Le genitif rattache la religion a Dieu comme sa possession et sa destination. Le sens est univoque dans ce contexte — Allah est le nom propre de la divinite unique.",
              axe1_verset: "Le mot Allahi est le destinataire de la religion — c'est a Dieu que la religion est attribuee. Le champ lexical (combattre, fitna, religion, cesser, transgression) montre que Dieu est le referent ultime du verset — le combat vise a etablir la religion pour Lui. Tout le verset est oriente vers Dieu comme finalite : le combat est dans Sa voie (implicite, cf. 2:190), la religion est pour Lui, et la transgression est interdite parce qu'Il n'aime pas les transgresseurs (cf. 2:190). Dieu est le legislateur, la finalite et le juge.",
              axe2_voisins: "Le verset 2:190 disait « combattez dans la voie de Dieu (fi sabili l-lahi) ». Le verset 2:193 dit « que la religion soit a Dieu (al-dinu li-llahi) ». Les deux versets placent Dieu comme la reference du combat — Sa voie est le cadre, Sa religion est l'objectif. Les versets voisins construisent un systeme ou Dieu est le centre de gravite de toute la legislation sur le combat.",
              axe3_sourate: "Le nom Allah est le mot le plus frequent de la sourate al-Baqarah et de tout le Coran. La sourate construit la relation entre Dieu et les croyants a travers la legislation — chaque obligation est rapportee a Dieu comme source et comme finalite. En 2:193, Dieu est la finalite du combat — la religion est pour Lui.",
              axe4_coherence: "Le nom Allah apparait environ 2699 fois dans le Coran. La construction « li-llahi » (pour Dieu / a Dieu) est omnipresente dans le Coran pour marquer l'exclusivite divine. En 3:154, « l'affaire appartient entierement a Dieu ». En 22:78, « la religion de votre pere Abraham ». Le Coran revient constamment sur l'idee que tout appartient a Dieu et tout retourne a Lui — la religion n'echappe pas a cette regle d'exclusivite.",
              axe5_frequence: "Pour la mission du khalifa, Dieu est le mandant de la mission. Le khalifa n'agit pas pour lui-meme mais pour Dieu — sa mission est de faire regner la justice divine sur terre. La mention « que la religion soit a Dieu » rappelle que le khalifa n'est pas le proprietaire de la religion mais son serviteur. La religion n'est pas un instrument de pouvoir humain — elle est pour Dieu, elle vient de Dieu, elle retourne a Dieu."
            }
          }
        }
      },
      // nhy pos=11
      {
        word_key: "nhy", position: 11, sense_chosen: "cesser",
        analysis_axes: {
          sense_chosen: "cesser",
          concept_chosen: "Interdiction/Empêchement",
          concepts: {
            "Interdiction/Empêchement": {
              status: "retenu",
              senses: ["interdire", "empecher", "cesser", "s'arreter", "retenir", "defendre"],
              proof_ctx: "Le verbe intahaw est un accompli 3MP forme VIII de la racine n-h-y. Le Lane's donne pour la forme I : interdire, empecher, defendre, retenir. Pour la forme VIII (intaha) : cesser, s'arreter, se retenir, parvenir a son terme, atteindre la fin, s'abstenir. La forme VIII transforme le sens de base : de « interdire a quelqu'un » (forme I, acte dirige vers l'exterieur) a « se retenir soi-meme, cesser » (forme VIII, acte reflexif). L'interdiction est un acte d'autorite qui empeche l'autre de faire quelque chose — elle sort de celui qui interdit et atteint celui qui est interdit. Mais la forme VIII retourne l'action vers le sujet lui-meme : « intaha » signifie « il s'est arrete de lui-meme, il a cesse ». L'accompli marque que l'action est achevee — ils ont cesse, c'est fait. Le pronom 3MP designe les ennemis — s'ils se sont arretes de combattre ou de persecuter. La cessation est le point charniere du verset : si les ennemis cessent, alors les hostilites doivent cesser aussi. La condition est reciproque — la fin du combat depend de la fin de l'agression. Le sens « Intelligence/Discernement » (atteste par Lane's : nuha = doue de raison, naha = intelligence) est ecarte car la forme VIII dans ce contexte syntaxique (fa-ini intahaw = s'ils cessent) designe clairement l'arret d'une action, pas l'acquisition d'une faculte mentale.",
              axe1_verset: "Le verbe intahaw est le pivot de la deuxieme moitie du verset. Le champ lexical (combattre, fitna, religion, transgression, injustes) montre que la cessation est la condition qui change tout — si les ennemis cessent, les regles changent. Le verset passe de l'imperatif de combat (qatiluhum) a l'interdiction de la transgression (fa-la udwana) grace a cette condition. La cessation est le moment ou le combat perd sa raison d'etre — si la cause du combat (la fitna) disparait parce que les ennemis cessent, alors le combat doit cesser aussi. L'accompli marque la certitude — « s'ils cessent » est une hypothese possible et souhaitable.",
              axe2_voisins: "Le verset 2:192 disait : « et s'ils cessent, certes Dieu est Pardonneur, Misericordieux ». Le verset 2:193 reprend la meme condition (fa-ini intahaw) mais avec une consequence differente : pas de transgression sauf contre les injustes. La repetition de la condition « s'ils cessent » dans deux versets consecutifs souligne l'importance de la cessation — le Coran insiste sur le fait que le combat n'est pas un etat permanent. Le pardon (2:192) et la fin des hostilites (2:193) sont les deux consequences de la cessation.",
              axe3_sourate: "La racine n-h-y apparait dans la sourate al-Baqarah en plusieurs endroits. En 2:192, « fa-ini intahaw » (s'ils cessent). En 2:193, la meme expression est repetee. La sourate utilise la forme VIII de n-h-y pour marquer la cessation volontaire des hostilites — les ennemis se retiennent d'eux-memes, sans contrainte. La forme VIII est importante car elle montre que la cessation doit venir de l'interieur — les ennemis s'arretent de leur propre volonte.",
              axe4_coherence: "La racine n-h-y apparait environ 56 fois dans le Coran. En 7:166, « nous les avons interdits (nahayna) du mal ». En 11:116, « ceux qui interdisaient la corruption sur terre ». En 9:67, « ils ordonnent le mal et interdisent le bien ». Le Coran utilise la forme I pour l'interdiction (empecher l'autre) et la forme VIII pour la cessation (s'arreter soi-meme). En 2:193, c'est la forme VIII — les ennemis s'arretent volontairement. Le Coran ne demande pas de forcer l'ennemi a cesser mais de combattre jusqu'a ce qu'il cesse de lui-meme.",
              axe5_frequence: "Pour la mission du khalifa, la cessation de l'ennemi est le succes de la mission. Le khalifa ne cherche pas la destruction de l'ennemi mais l'arret de la fitna. Quand l'ennemi cesse, la mission est accomplie — le combat s'arrete. Le khalifa est un pacificateur, pas un conquérant. La mention « s'ils cessent » montre que la porte est toujours ouverte — l'ennemi peut a tout moment mettre fin au conflit en cessant ses hostilites. La mission du khalifa inclut cette ouverture permanente vers la paix."
            },
            "Intelligence/Discernement": {
              status: "peu_probable",
              senses: ["intelligence", "raison", "discernement", "sagesse", "entendement"],
              proof_ctx: "Le sens d'intelligence est un sens atteste de la racine n-h-y dans le Lane's — nuha designe la raison, l'intelligence, la faculte de discernement. Le nahiy est celui qui est doue de raison. Mais la forme VIII (intaha) dans le contexte syntaxique « fa-ini intahaw » ne peut pas signifier « s'ils deviennent intelligents » ou « s'ils acquierent le discernement ». La construction conditionnelle avec l'accompli exige un sens d'action achevee — une chose qui s'est produite. L'intelligence n'est pas un evenement qui « se produit » ponctuellement — c'est une faculte permanente. De plus, le contexte est le combat : la condition qui met fin au combat est la cessation des hostilites, pas l'acquisition de l'intelligence. La distinction philosophique est que l'intelligence est une faculte interieure et permanente, tandis que la cessation est un acte exterieur et ponctuel. Le verset demande un acte (cesser), pas un etat (etre intelligent).",
              axe1_verset: "Le champ lexical du verset (combattre, fitna, religion, transgression, injustes) est entierement tourne vers l'action militaire et ses limites. L'intelligence comme faculte mentale ne s'inscrit pas naturellement dans ce champ lexical. Le verset pose des conditions d'action : combattre, cesser, ne pas transgresser. L'intelligence n'est pas une condition d'action dans ce contexte. Le mot fitna et le mot udwan sont des realites actives — la cessation (intahaw) est la reponse active qui les neutralise.",
              axe2_voisins: "Le verset 2:192 utilise la meme expression « fa-ini intahaw » suivie de « Dieu est Pardonneur ». Le pardon divin est la consequence de la cessation des hostilites — Dieu pardonne a ceux qui cessent de combattre et de persecuter. Si le sens etait « s'ils deviennent intelligents », la consequence du pardon divin serait incongruente — Dieu ne pardonne pas a des gens parce qu'ils deviennent intelligents mais parce qu'ils cessent le mal.",
              axe3_sourate: "La sourate al-Baqarah mentionne l'intelligence par d'autres racines : '-q-l (raison, 2:44, 2:73), l-b-b (doues de coeur, 2:179, 2:197). La racine n-h-y n'est pas utilisee dans la sourate pour l'intelligence. L'utilisation constante de n-h-y forme VIII dans le contexte du combat confirme le sens de cessation.",
              axe4_coherence: "Dans le Coran, quand le sens d'intelligence est vise, les racines '-q-l, f-q-h, l-b-b sont utilisees, pas n-h-y. La racine n-h-y est utilisee pour l'interdiction (forme I) et la cessation (forme VIII). Le Coran a un vocabulaire precis pour chaque realite — l'intelligence releve d'autres racines.",
              axe5_frequence: "L'intelligence est une qualite du khalifa mais elle n'est pas le sujet du verset. Le verset traite du combat et de ses conditions d'arret, pas des qualites intellectuelles des combattants. L'intelligence du khalifa s'exprime dans sa capacite a cesser le combat quand l'ennemi cesse — mais c'est la cessation elle-meme qui est le sujet, pas la faculte qui la motive."
            }
          }
        }
      },
      // edw pos=13
      {
        word_key: "edw", position: 13, sense_chosen: "transgression",
        analysis_axes: {
          sense_chosen: "transgression",
          concept_chosen: "Transgression/Excès",
          concepts: {
            "Transgression/Excès": {
              status: "retenu",
              senses: ["transgression", "exces", "depassement des limites", "hostilite", "agression", "inimitie"],
              proof_ctx: "Le nom udwana est un nom accusatif indefini singulier de la racine '-d-w. Le Lane's donne : transgression, exces, depassement des limites, hostilite, inimitie, agression, injustice, aller au-dela de ce qui est permis. Le udwan est l'acte de depasser les limites fixees — c'est une violation des regles, un exces qui va au-dela de ce qui est autorise. La transgression est un acte exterieur et directionnel — elle sort de celui qui transgresse et atteint celui qui est lese. Le mot est a l'accusatif avec la negation la — la construction « fa-la udwana » signifie « pas de transgression », une interdiction absolue de depasser les limites. L'indefini marque le caractere absolu — aucune transgression, de quelque nature que ce soit. La distinction avec « Hostilite/Inimitie » est importante : l'hostilite est un sentiment ou un etat de conflit, tandis que la transgression est un acte de depassement des limites. Le verset ne dit pas « plus d'hostilite » mais « plus de transgression » — c'est le depassement des limites qui est interdit, pas le sentiment hostile.",
              axe1_verset: "Le mot udwana est la consequence de la cessation des ennemis. Le champ lexical (combattre, fitna, religion, cesser, injustes) montre que la transgression est ce qui est interdit apres la cessation. Si les ennemis cessent, il n'est plus permis de depasser les limites — le combat s'arrete. La construction « fa-la udwana » est une interdiction qui repond a « fa-ini intahaw » — la cessation des ennemis entraine l'interdiction de la transgression. Le verset pose une proportionnalite stricte : quand la cause disparait, l'effet doit disparaitre aussi. Le combat est proportionnel a l'agression.",
              axe2_voisins: "Le verset 2:190 disait : « ne transgressez pas (la ta'tadu), certes Dieu n'aime pas les transgresseurs (al-mu'tadina) ». Le verset 2:193 reprend le meme theme avec « fa-la udwana » (pas de transgression). La racine '-d-w encadre toute la section sur le combat : interdiction de transgresser au debut (2:190) et rappel de l'interdiction a la fin (2:193). Les versets 190 et 193 forment une inclusion — le debut et la fin du passage sur le combat repetent la meme interdiction de transgresser.",
              axe3_sourate: "La racine '-d-w apparait frequemment dans la sourate al-Baqarah. En 2:190, l'interdiction de transgresser dans le combat. En 2:178, la transgression dans le talion. En 2:229, les limites de Dieu que l'on ne doit pas transgresser (hudud). La sourate construit un systeme de limites (hudud) que personne ne doit depasser — le combat, comme toute autre activite, est encadre par des limites inviolables. La transgression est le peche de depassement — aller au-dela de ce que Dieu a permis.",
              axe4_coherence: "La racine '-d-w apparait environ 98 fois dans le Coran. En 5:2, « que la hostilite d'un peuple ne vous pousse pas a transgresser ». En 5:87, « ne transgressez pas, Dieu n'aime pas les transgresseurs ». En 7:55, « n'invoquez pas Dieu avec transgression ». Le Coran interdit la transgression dans tous les domaines — le combat, le culte, les relations sociales. La transgression est un peche universel qui consiste a depasser ce que Dieu a permis, quelle que soit l'activite en question.",
              axe5_frequence: "Pour la mission du khalifa, la transgression est l'antithese de la mission. Le khalifa est le gardien des limites de Dieu — il ne les depasse pas et il empeche les autres de les depasser. L'interdiction « pas de transgression » apres la cessation des ennemis montre que le khalifa doit etre aussi discipline dans la paix que dans la guerre. La fin du combat n'est pas une occasion de vengeance ou de represailles — c'est le retour aux limites de Dieu. Le khalifa qui transgresse apres la cessation perd sa legitimite."
            },
            "Hostilité/Inimitié": {
              status: "probable",
              senses: ["hostilite", "inimitie", "haine", "animosite", "opposition"],
              proof_ctx: "Le sens d'hostilite est un sens bien atteste de la racine '-d-w dans le Lane's — al-adawwa est l'hostilite, l'inimitie, l'etat de conflit entre deux parties. L'hostilite est un etat relationnel entre deux parties — elle est bilaterale et permanente tant que le conflit dure. Mais le mot udwan dans le verset n'est pas l'etat d'hostilite mais l'acte de transgression. La distinction philosophique est que l'hostilite est un etat interieur et relationnel (on est hostile), tandis que la transgression est un acte exterieur et ponctuel (on transgresse). Le verset interdit l'acte de transgresser apres la cessation, pas l'etat d'hostilite — on peut rester mefiant sans transgresser. L'hostilite peut persister comme prudence, mais la transgression (l'acte de depasser les limites) est formellement interdite."
            }
          }
        }
      },
      // zlm pos=16
      {
        word_key: "zlm", position: 16, sense_chosen: "les injustes",
        analysis_axes: {
          sense_chosen: "les injustes",
          concept_chosen: "Injustice/Oppression",
          concepts: {
            "Injustice/Oppression": {
              status: "retenu",
              senses: ["injustice", "oppression", "placer hors de sa place", "faire du tort", "lser", "tyrannie"],
              proof_ctx: "Le nom al-zalimina est un participe actif pluriel defini de la racine z-l-m. Le Lane's donne : etre injuste, opprimer, placer une chose hors de sa place, faire du tort a quelqu'un, leser, priver quelqu'un de son droit. Le sens premier physique est « placer quelque chose hors de sa place » — le zulm est le desordre ontologique, mettre ce qui devrait etre a un endroit dans un autre. L'injustice est un acte exterieur et directionnel — elle sort de celui qui est injuste et atteint celui qui est lese. Le participe actif marque un etat permanent et actif — les injustes sont ceux qui commettent l'injustice de maniere continue, pas ceux qui ont commis un acte isole. L'article al- et le pluriel designent une categorie connue : LES injustes, ceux qui sont identifies comme tels par leurs actes. Le mot est au genitif apres la preposition ala (contre) — la transgression est permise contre eux, ou plus precisement, la riposte contre les injustes n'est pas une transgression.",
              axe1_verset: "Le mot al-zalimina est l'exception a l'interdiction de transgresser. Le champ lexical (combattre, fitna, religion, cesser, transgression) montre que les injustes sont la seule categorie contre laquelle l'action reste permise meme apres la cessation generale. Le verset construit une logique : combattez jusqu'a la fin de la fitna → s'ils cessent, pas de transgression → sauf contre les injustes. L'exception est precise — seuls les injustes restent sujets a la riposte. Le mot « illa » (sauf) cree une opposition nette : les innocents sont proteges, les injustes ne le sont pas.",
              axe2_voisins: "Le verset 2:190 interdisait de transgresser (la ta'tadu). Le verset 2:193 nuance cette interdiction : pas de transgression sauf contre les injustes. La sequence montre que l'interdiction de transgresser n'est pas absolue dans le cas des injustes — ceux qui commettent l'injustice s'excluent eux-memes de la protection. Le verset 2:192 offrait le pardon a ceux qui cessent — mais ceux qui persistent dans l'injustice restent hors de cette clemence. Les versets distinguent clairement deux categories : ceux qui cessent (pardonnes) et ceux qui persistent dans l'injustice (combattus).",
              axe3_sourate: "La racine z-l-m est une des plus frequentes de la sourate al-Baqarah. En 2:35, « vous seriez parmi les injustes ». En 2:51, « vous etiez injustes ». En 2:124, « Mon alliance n'atteint pas les injustes ». En 2:145, « tu serais parmi les injustes ». La sourate presente l'injustice comme la faute la plus grave — celle qui exclut de l'alliance divine et qui justifie la riposte meme apres la cessation du combat.",
              axe4_coherence: "La racine z-l-m apparait environ 315 fois dans le Coran — c'est une des racines les plus frequentes, ce qui montre l'importance du theme de l'injustice. En 3:57, « Dieu n'aime pas les injustes ». En 42:42, « le blame est sur ceux qui oppriment les gens et transgressent sur terre ». Le Coran distingue constamment entre les injustes et les autres — les injustes sont ceux qui meritent la riposte, les autres meritent le pardon. Le verset 2:193 s'inscrit dans cette distinction universelle.",
              axe5_frequence: "Pour la mission du khalifa, les injustes sont ceux qui sabotent la mission. Le khalifa est place sur terre pour empecher la corruption — les injustes sont ceux qui placent les choses hors de leur place, qui corrompent l'ordre social et qui lesent les droits des autres. La mention « sauf contre les injustes » montre que la mission du khalifa ne s'arrete jamais completement — meme en temps de paix, le khalifa doit rester vigilant contre l'injustice. La paix n'est pas la tolerance de l'injustice — elle est l'absence de fitna avec la poursuite de la lutte contre le zulm."
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

  // Check if VWA already exists — skip if yes
  const { data: existingVwa } = await supabase
    .from('verse_word_analyses')
    .select('id')
    .eq('verse_id', data.verse_id);

  if (existingVwa && existingVwa.length > 0) {
    console.log(`  VWA deja existants (${existingVwa.length} entrees) — skip insertion VWA`);
    console.log('  Mise a jour verse_analyses uniquement...');
    const { error: updateErr } = await supabase.from('verse_analyses').update({
      segments: data.segments,
      translation_arab: data.translation_arab,
      translation_explanation: data.translation_explanation,
      full_translation: data.full_translation
    }).eq('id', data.analysis_id);

    if (updateErr) {
      console.error(`  ERREUR update verse_analyses:`, updateErr.message);
    } else {
      console.log(`  OK verse_analyses V${verseNum} (update only)`);
    }
    return;
  }

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

  const verseIds = [200];
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
  console.log('=== PIPELINE SOURATE 2 — VERSET 193 ===\n');
  await processVerse(193);
  await syncWordMeanings();
  console.log('\n=== PIPELINE V193 TERMINEE ===');
}

main().catch(e => console.error('FATAL:', e));
