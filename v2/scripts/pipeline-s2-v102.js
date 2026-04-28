const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// =====================================================
// PIPELINE SOURATE 2 — VERSET 102
// verse_id=109, analysis_id=470
// "Et ils suivirent ce que les diables racontent contre
//  le regne de Salomon. Alors que Salomon n'a jamais ete
//  mecreant mais bien les diables : ils enseignent aux
//  gens la magie ainsi que ce qui est descendu aux deux
//  Anges Harout et Marout, a Babylone ; mais ceux-ci
//  n'enseignaient rien a personne, qu'ils n'aient dit
//  d'abord : Nous ne sommes rien qu'une tentation : ne
//  sois pas mecreant ; ils apprennent aupres d'eux ce
//  qui seme la desunion entre l'homme et son epouse. Or
//  ils ne sont capables de nuire a personne qu'avec la
//  permission de Dieu. Et les gens apprennent ce qui
//  leur nuit et ne leur est pas utile. Et ils savent,
//  tres certainement, que celui qui acquiert [ce pouvoir]
//  n'aura aucune part dans l'au-dela. Certes, quelle
//  detestable marchandise pour laquelle ils se sont
//  vendus eux-memes ! S'ils savaient !"
// =====================================================

const verseData = {
  102: {
    verse_id: 109,
    analysis_id: 470,
    translation_arab: "Et ils suivirent ce que les demons recitaient du temps du regne de Salomon. Et Salomon ne couvrit pas [la verite] mais les demons couvrirent — ils enseignaient aux gens la fascination et ce qui descendit sur les deux anges a Babylone, Harout et Marout. Or ceux-ci n'enseignaient a personne sans dire d'abord : nous ne sommes qu'une epreuve, alors ne couvre pas [la verite]. Puis ils apprirent d'eux deux ce par quoi ils separaient l'homme de son epouse. Et ils ne nuisaient a personne sauf par la permission de Dieu. Et ils apprirent ce qui leur nuisait et ne leur etait pas utile. Et ils surent, certes, que celui qui l'acquiert n'a aucune part dans l'au-dela. Detestable, certes, est ce contre quoi ils vendirent leurs ames. Si seulement ils savaient !",
    full_translation: "Et ils suivirent ce que les diables racontent contre le regne de Salomon. Alors que Salomon n'a jamais ete mecreant mais bien les diables : ils enseignent aux gens la magie ainsi que ce qui est descendu aux deux Anges Harout et Marout, a Babylone ; mais ceux-ci n'enseignaient rien a personne, qu'ils n'aient dit d'abord : Nous ne sommes rien qu'une tentation : ne sois pas mecreant ; ils apprennent aupres d'eux ce qui seme la desunion entre l'homme et son epouse. Or ils ne sont capables de nuire a personne qu'avec la permission de Dieu. Et les gens apprennent ce qui leur nuit et ne leur est pas utile. Et ils savent, tres certainement, que celui qui acquiert [ce pouvoir] n'aura aucune part dans l'au-dela. Certes, quelle detestable marchandise pour laquelle ils se sont vendus eux-memes ! S'ils savaient !",
    translation_explanation: `§DEMARCHE§
Le verset 2:102 est un des plus longs de la sourate. Il traite du rapport entre les demons, Salomon, la magie et les deux anges Harout et Marout. Le verset s'articule en plusieurs propositions enchainant des themes : le suivi des demons, l'innocence de Salomon, l'enseignement de la magie, l'avertissement des anges, l'apprentissage du mal, la limite du pouvoir (permission de Dieu), l'inutilite de ce savoir, la perte dans l'au-dela, et le blame final.

Le verbe **ittaba'u** est un accompli 3MP de la forme VIII de la racine t-b-' avec prefixe wa. Le Lane's donne : suivre, marcher derriere, se conformer a. La forme VIII (ifta'ala) ajoute l'idee de choix delibere — ils ont choisi de suivre. L'accompli marque que l'acte est acheve. Le sujet « ils » renvoie au groupe mentionne au verset precedent (v.101).

Le verbe **tatlu** est un inaccompli 3FP de la racine t-l-w. Le Lane's donne : reciter, lire a haute voix, raconter, suivre. Ici les demons « recitent » ou « racontent » — ils diffusent des recits mensongers. L'inaccompli marque une action repetee et continue dans le temps.

Le nom **mulki** est un nom masculin genitif de la racine m-l-k. Le Lane's donne : regne, royaute, souverainete. Ici « mulki Sulayman » designe le regne de Salomon — l'autorite royale qui lui etait confiee. Le genitif rattache le regne a Salomon.

Le verbe **kafara** est un accompli 3MS de la racine k-f-r. Le Lane's donne : couvrir, cacher, dissimuler, nier un bienfait. Le sens premier est physique — couvrir quelque chose pour le cacher. La premiere occurrence (ma kafara Sulaymanu) est precedee de la negation « ma » — Salomon n'a pas couvert la verite. La deuxieme (kafaru) est le fait des demons — les demons, eux, ont couvert la verite. La troisieme (la takfur) est un imperatif negatif — ne couvre pas la verite.

Le verbe **yu'allimuna** est un inaccompli 3MP de la forme II de la racine '-l-m. Le Lane's donne : enseigner, faire savoir, instruire. La forme II intensifie — ils enseignent activement. Le meme verbe **yu'allimani** (inaccompli 3MD, forme II) designe l'enseignement des deux anges. Le verbe **yata'allamuna** (inaccompli 3MP, forme V) signifie : ils apprennent par eux-memes, ils acquierent le savoir. La forme V (tafa''ala) marque l'effort reflexif — apprendre est un acte de recherche active. Le verbe **'alimu** (accompli 3MP, forme I) signifie : ils surent, ils connurent. La forme I est le savoir brut, la connaissance. Le dernier **ya'lamuna** (inaccompli 3MP, forme I) dans « s'ils savaient » est un inaccompli de condition irreeelle.

Le nom **al-sihra** est un nom masculin defini accusatif de la racine s-h-r. Le Lane's donne : magie, ensorcellement, fascination, ce qui trompe les sens. La magie est ce qui detourne de la realite — elle fascine et egare.

Le verbe **unzila** est un accompli passif 3MS de la forme IV de la racine n-z-l. Le Lane's donne : faire descendre, reveler. Le passif indique que ce qui est descendu sur les deux anges vient d'en haut — c'est une transmission descendante. La forme IV (af'ala) indique la causation — quelqu'un a fait descendre.

Le nom **al-malakayni** est un duel defini accusatif de la racine m-l-k (sens d'ange/messager). Le Lane's donne : ange, messager celeste. Le duel designe les deux anges specifiques : Harout et Marout. Les anges sont des etres qui transmettent.

Le nom **ahadin** est un nom masculin indefini genitif de la racine a-h-d. Le Lane's donne : quelqu'un, quiconque, personne (en contexte negatif). Ici « min ahadin » avec la negation « ma » signifie : personne, pas un seul.

Le verbe **yaqula** est un inaccompli subjonctif 3MD de la racine q-w-l. Le Lane's donne : dire, enoncer, affirmer. Le subjonctif apres « hatta » (jusqu'a ce que) marque la condition prealable — ils ne disent qu'apres avoir averti.

Le nom **fitnatun** est un nom feminin indefini nominatif de la racine f-t-n. Le Lane's donne : epreuve, tentation, purification par le feu, seduction. La fitna est ce qui met a l'epreuve — elle revele la verite interieure de celui qui y est soumis.

Le verbe **yufarriquna** est un inaccompli 3MP de la forme II de la racine f-r-q. Le Lane's donne : separer, diviser, distinguer. La forme II intensifie — ils separent activement et deliberement.

Le nom **bayna** est une preposition de la racine b-y-n. Le Lane's donne : entre, au milieu de. « Entre l'homme et son epouse » designe l'espace relationnel qui les unit.

Le nom **al-mar'i** est un nom masculin defini genitif de la racine m-r-a. Le Lane's donne : homme, individu, personne. Ici « l'homme » dans le couple.

Le nom **zawjihi** est un nom masculin genitif de la racine z-w-j avec pronom 3MS. Le Lane's donne : conjoint, epouse, paire. L'idafa « zawjihi » (son epouse) rattache l'epouse a l'homme par le lien conjugal.

Le nom **darrina** est un participe actif pluriel de la racine d-r-r. Le Lane's donne : nuire, causer du tort. Le participe actif pluriel « darrina » (ceux qui nuisent) avec la negation « ma hum bi-darrina min ahadin » signifie : ils ne sont pas des nuisants pour quiconque — sauf par la permission de Dieu.

Le verbe **yadurruhum** est un inaccompli 3MS de la racine d-r-r. Le Lane's donne : nuire, faire du tort. « Ce qui leur nuit » — le sujet est ce qu'ils apprennent.

Le nom **Allahi** est le nom propre de la divinite au genitif. « bi-idhni Allahi » — par la permission de Dieu. Le pouvoir de nuisance est limite par Dieu.

Le verbe **yanfa'uhum** est un inaccompli 3MS de la racine n-f-'. Le Lane's donne : etre utile, profiter, servir. Avec la negation « la yanfa'uhum » — ce qu'ils apprennent ne leur est pas utile. Le verset oppose nuire et etre utile.

Le nom **al-akhirati** est un nom feminin defini genitif de la racine a-kh-r. Le Lane's donne : l'au-dela, la derniere [demeure], ce qui vient apres. L'au-dela est la vie finale, celle qui suit la vie d'ici-bas.

Le nom **khalaqin** est un nom masculin indefini genitif de la racine kh-l-q. Le Lane's donne dans ce contexte : part, portion, lot. Le mot khalaq designe ici une part de bien dans l'au-dela — « ma lahu fi al-akhirati min khalaqin » (il n'a aucune part dans l'au-dela). Le sens de creation n'est pas le bon ici — c'est le sens de portion/lot qui s'applique.

Le verbe **bi'sa** est un accompli 3MS de la racine b-'-s. Le Lane's donne : etre mauvais, etre detestable, quel malheur. C'est un verbe de blame — « bi'sa ma sharaw bihi anfusahum » (detestable est ce contre quoi ils vendirent leurs ames).

Le nom **anfusahum** est un pluriel feminin accusatif de la racine n-f-s avec pronom 3MP. Le Lane's donne : ames, personnes, eux-memes. « Ils vendirent leurs ames » — ils se sont vendus eux-memes en echangeant la verite contre la magie.

Le verbe **kanu** est un accompli 3MP de la racine k-w-n. Le Lane's donne : etre, exister. Dans la construction « law kanu ya'lamuna » (s'ils etaient en train de savoir), kana sert de verbe auxiliaire pour marquer l'irreeI passe.

§JUSTIFICATION§
**suivirent** — Le sens retenu est « suivre ». La forme VIII de t-b-' marque un suivi delibere et choisi. L'alternative « successeur » est ecartee car le verbe designe un acte volontaire de suivre, pas une succession temporelle.

**recitaient** — Le sens retenu est « reciter/raconter ». La racine t-l-w porte le sens de recitation et de narration. L'alternative « suivre » (sens physique) est ecartee car les demons produisent des recits, ils ne marchent pas derriere quelqu'un.

**regne** — Le sens retenu est « royaute/souverainete ». Le mot mulk designe le pouvoir royal de Salomon. Le sens de « possession » est ecarte car le contexte est politique (un roi et son royaume), pas une propriete privee. Le sens d'« ange » ne s'applique pas a cette occurrence (position 5) — il s'applique a la position 19 (al-malakayni, les deux anges).

**ne couvrit pas / couvrirent** — Le sens retenu est « couvrir/dissimuler ». Le sens premier de k-f-r est physique : couvrir quelque chose pour le cacher. Salomon n'a pas couvert la verite, les demons l'ont couverte. Le sens de « rejet/ingratitude » est le sens derive — nier un bienfait c'est couvrir la reconnaissance due. Les deux sens sont lies mais le premier est plus fondamental.

**enseignent / enseignaient / apprennent / surent / savaient** — La racine '-l-m apparait cinq fois dans le verset sous quatre formes differentes. La forme II (yu'allimuna/yu'allimani) = enseigner activement. La forme V (yata'allamuna) = apprendre par soi-meme. La forme I accompli ('alimu) = savoir/connaitre. La forme I inaccompli (ya'lamuna) = savoir. Cette profusion montre que le savoir est le theme central du verset — qui enseigne quoi, qui apprend quoi, et ce qu'ils savent sans en tirer les consequences.

**la fascination** — Le sens retenu est « magie/fascination ». Le sihr est ce qui trompe les sens et detourne de la realite. L'alternative « aube » est ecartee car le contexte est l'enseignement occulte.

**descendit** — Le sens retenu est « faire descendre ». Le passif unzila indique une transmission d'en haut. L'alternative « halte/sejour » est ecartee car le contexte est une descente de savoir.

**les deux anges** — Le sens retenu est « ange/messager ». Le mot malakayni (duel) designe les deux anges. Le sens de « royaute » ne s'applique pas ici — c'est le meme radical m-l-k mais dans le sens de messager celeste.

**personne** — Le sens retenu est « quiconque/personne ». Le mot ahadin dans un contexte negatif signifie « personne ». L'alternative « unicite » est ecartee car le mot est employe comme pronom indefini, pas comme qualificatif divin.

**dirent** — Le sens retenu est « dire/enoncer ». Le verbe yaqula est le verbe de parole le plus courant. L'alternative « opinion » est ecartee car les anges enoncent un avertissement, pas une opinion.

**epreuve** — Le sens retenu est « epreuve/tentation ». Le mot fitna designe ce qui met a l'epreuve. L'alternative « discorde/persecution » est ecartee car les anges parlent d'eux-memes comme objet d'epreuve, pas comme source de discorde.

**separaient** — Le sens retenu est « separer ». La forme II de f-r-q intensifie la separation. L'alternative « groupe » est ecartee car le mot est un verbe d'action, pas un nom.

**entre** — Le sens retenu est « entre/separation ». Le mot bayna designe l'espace entre deux entites. L'alternative « clarte » est ecartee car le sens est spatial et relationnel.

**l'homme** — Le sens retenu est « homme/individu ». Le mot al-mar' designe l'individu dans le couple. L'alternative « sante » est ecartee car le contexte est la relation conjugale.

**son epouse** — Le sens retenu est « epoux/conjoint ». Le mot zawjihi designe l'epouse rattachee a l'homme. Ce concept est unique dans le champ semantique.

**nuisaient / nuisait** — Le sens retenu est « nuire ». La racine d-r-r designe le tort cause. Le verset etablit une limite : la nuisance ne se produit que par la permission de Dieu.

**Dieu** — Le sens retenu est « Dieu/divinite ». Le nom Allah apparait dans l'expression « par la permission de Dieu » qui est la cle du verset — tout pouvoir est limite par Dieu.

**utile** — Le sens retenu est « etre utile ». Le verbe yanfa'u avec la negation indique que ce qu'ils apprennent ne leur sert pas. Le verset oppose nuire et etre utile.

**l'au-dela** — Le sens retenu est « l'au-dela/posteriorite ». Le mot al-akhira designe la vie finale. L'alternative « arriere/derriere » est ecartee car le contexte est eschatologique.

**part** — Le sens retenu est « part/portion ». Le mot khalaq ici ne signifie pas « creation » mais « part, lot ». Le Lane's note ce sens specifique pour khalaq dans les contextes de repartition. L'alternative « creer » est ecartee car le contexte est une portion de bien dans l'au-dela.

**detestable** — Le sens retenu est « malheur/chatiment ». Le verbe bi'sa exprime le blame absolu. C'est un verbe de jugement negatif.

**leurs ames** — Le sens retenu est « ames/eux-memes ». Le mot anfus designe leurs propres personnes. L'alternative « souffle » est ecartee car le contexte est la vente de soi-meme.

**etaient** — Le sens retenu est « etre/exister ». Le verbe kana sert d'auxiliaire dans la construction irreelle « s'ils etaient en train de savoir ».

§CRITIQUE§
La traduction de Hamidullah donne « mecreant » pour kafara. Notre traduction donne « couvrir la verite » qui est le sens etymologique premier de la racine k-f-r : couvrir quelque chose pour le dissimuler. Le passage du sens physique « couvrir » au sens religieux « mecreant » est une extension semantique bien documentee par le Lane's — le mecreant est celui qui couvre la verite, qui la dissimule sous le mensonge ou l'ignorance volontaire. Notre traduction est plus proche de l'etymologie et permet de comprendre pourquoi le Coran utilise ce terme specifique. Hamidullah donne « magie » la ou nous donnons « fascination » — les deux sont des sens du Lane's pour sihr. « Fascination » est plus proche du sens premier (ce qui captive et detourne les sens) tandis que « magie » est le sens conventionnel. Hamidullah donne « tentation » pour fitna — nous donnons « epreuve ». Les deux sont corrects, l'epreuve etant plus neutre (elle peut etre positive ou negative) tandis que la tentation est orientee vers le mal. Les anges disent qu'ils sont une epreuve — un test, pas necessairement une incitation au mal.`,
    segments: [
      { fr: "et ils suivirent", pos: "verbe", phon: "wa-ittaba'u", arabic: "\u0648\u0671\u062a\u0651\u064e\u0628\u064e\u0639\u064f\u0648\u0627\u06df", word_key: "t b e", is_particle: false, sense_retenu: "suivre", position: 0 },
      { fr: "ce que", phon: "ma", arabic: "\u0645\u064e\u0627", is_particle: true, position: 1 },
      { fr: "recitaient", pos: "verbe", phon: "tatlu", arabic: "\u062a\u064e\u062a\u0652\u0644\u064f\u0648\u0627\u06df", word_key: "tlw", is_particle: false, sense_retenu: "reciter", position: 2 },
      { fr: "les demons", pos: "nom", phon: "al-shayatinu", arabic: "\u0671\u0644\u0634\u0651\u064e\u064a\u064e\u0640\u0670\u0637\u0650\u064a\u0646\u064f", is_particle: true, position: 3 },
      { fr: "du temps du", phon: "'ala", arabic: "\u0639\u064e\u0644\u064eY\u0670", is_particle: true, position: 4 },
      { fr: "regne", pos: "nom", phon: "mulki", arabic: "\u0645\u064f\u0644\u0652\u0643\u0650", word_key: "mlk", is_particle: false, sense_retenu: "regne", position: 5 },
      { fr: "de Salomon", pos: "nom", phon: "Sulaymana", arabic: "\u0633\u064f\u0644\u064e\u064a\u0652\u0645\u064e\u0640\u0670\u0646\u064e", is_particle: true, position: 6 },
      { fr: "et", phon: "wa-ma", arabic: "\u0648\u064e\u0645\u064e\u0627", is_particle: true, position: 7 },
      { fr: "ne couvrit pas", pos: "verbe", phon: "kafara", arabic: "\u0643\u064e\u0641\u064e\u0631\u064e", word_key: "kfr", is_particle: false, sense_retenu: "couvrir", position: 8 },
      { fr: "Salomon", pos: "nom", phon: "Sulaymanu", arabic: "\u0633\u064f\u0644\u064e\u064a\u0652\u0645\u064e\u0640\u0670\u0646\u064f", is_particle: true, position: 9 },
      { fr: "mais", phon: "wa-lakinna", arabic: "\u0648\u064e\u0644\u064e\u0640\u0670\u0643\u0650\u0646\u0651\u064e", is_particle: true, position: 10 },
      { fr: "les demons", pos: "nom", phon: "al-shayatina", arabic: "\u0671\u0644\u0634\u0651\u064e\u064a\u064e\u0640\u0670\u0637\u0650\u064a\u0646\u064e", is_particle: true, position: 11 },
      { fr: "couvrirent", pos: "verbe", phon: "kafaru", arabic: "\u0643\u064e\u0641\u064e\u0631\u064f\u0648\u0627\u06df", word_key: "kfr", is_particle: false, sense_retenu: "couvrir", position: 12 },
      { fr: "ils enseignent", pos: "verbe", phon: "yu'allimuna", arabic: "\u064a\u064f\u0639\u064e\u0644\u0651\u0650\u0645\u064f\u0648\u0646\u064e", word_key: "elm", is_particle: false, sense_retenu: "enseigner", position: 13 },
      { fr: "aux gens", pos: "nom", phon: "al-nasa", arabic: "\u0671\u0644\u0646\u0651\u064e\u0627\u0633\u064e", is_particle: false, position: 14 },
      { fr: "la fascination", pos: "nom", phon: "al-sihra", arabic: "\u0671\u0644\u0633\u0651\u0650\u062d\u0652\u0631\u064e", word_key: "shr", is_particle: false, sense_retenu: "magie", position: 15 },
      { fr: "et ce qui", phon: "wa-ma", arabic: "\u0648\u064e\u0645\u064e\u0622", is_particle: true, position: 16 },
      { fr: "descendit", pos: "verbe", phon: "unzila", arabic: "\u0623\u064f\u0646\u0632\u0650\u0644\u064e", word_key: "nzl", is_particle: false, sense_retenu: "faire descendre", position: 17 },
      { fr: "sur", phon: "'ala", arabic: "\u0639\u064e\u0644\u064eY", is_particle: true, position: 18 },
      { fr: "les deux anges", pos: "nom", phon: "al-malakayni", arabic: "\u0671\u0644\u0652\u0645\u064e\u0644\u064e\u0643\u064e\u064a\u0652\u0646\u0650", word_key: "mlk", is_particle: false, sense_retenu: "ange", position: 19 },
      { fr: "a Babylone", pos: "nom", phon: "bi-Babila", arabic: "\u0628\u0650\u0628\u064e\u0627\u0628\u0650\u0644\u064e", is_particle: true, position: 20 },
      { fr: "Harout", pos: "nom", phon: "Haruta", arabic: "\u0647\u064e\u0640\u0670\u0631\u064f\u0648\u062a\u064e", is_particle: true, position: 21 },
      { fr: "et Marout", pos: "nom", phon: "wa-Maruta", arabic: "\u0648\u064e\u0645\u064e\u0640\u0670\u0631\u064f\u0648\u062a\u064e", is_particle: true, position: 22 },
      { fr: "or", phon: "wa-ma", arabic: "\u0648\u064e\u0645\u064e\u0627", is_particle: true, position: 23 },
      { fr: "n'enseignaient", pos: "verbe", phon: "yu'allimani", arabic: "\u064a\u064f\u0639\u064e\u0644\u0651\u0650\u0645\u064e\u0627\u0646\u0650", word_key: "elm", is_particle: false, sense_retenu: "enseigner", position: 24 },
      { fr: "a", phon: "min", arabic: "\u0645\u0650\u0646\u0652", is_particle: true, position: 25 },
      { fr: "personne", pos: "nom", phon: "ahadin", arabic: "\u0623\u064e\u062d\u064e\u062f\u064d", word_key: "ahd", is_particle: false, sense_retenu: "personne", position: 26 },
      { fr: "sans que", phon: "hatta", arabic: "\u062d\u064e\u062a\u0651\u064eY\u0670", is_particle: true, position: 27 },
      { fr: "ils disent", pos: "verbe", phon: "yaqula", arabic: "\u064a\u064e\u0642\u064f\u0648\u0644\u064e\u0622", word_key: "qwl", is_particle: false, sense_retenu: "dire", position: 28 },
      { fr: "certes", phon: "innama", arabic: "\u0625\u0650\u0646\u0651\u064e\u0645\u064e\u0627", is_particle: true, position: 29 },
      { fr: "nous", phon: "nahnu", arabic: "\u0646\u064e\u062d\u0652\u0646\u064f", is_particle: true, position: 30 },
      { fr: "une epreuve", pos: "nom", phon: "fitnatun", arabic: "\u0641\u0650\u062a\u0652\u0646\u064e\u0629\u064c", word_key: "ftn", is_particle: false, sense_retenu: "epreuve", position: 31 },
      { fr: "alors ne", phon: "fa-la", arabic: "\u0641\u064e\u0644\u064e\u0627", is_particle: true, position: 32 },
      { fr: "couvre pas", pos: "verbe", phon: "takfur", arabic: "\u062a\u064e\u0643\u0652\u0641\u064f\u0631\u0652", word_key: "kfr", is_particle: false, sense_retenu: "couvrir", position: 33 },
      { fr: "puis ils apprirent", pos: "verbe", phon: "fa-yata'allamuna", arabic: "\u0641\u064e\u064a\u064e\u062a\u064e\u0639\u064e\u0644\u0651\u064e\u0645\u064f\u0648\u0646\u064e", word_key: "elm", is_particle: false, sense_retenu: "apprendre", position: 34 },
      { fr: "d'eux deux", phon: "minhuma", arabic: "\u0645\u0650\u0646\u0652\u0647\u064f\u0645\u064e\u0627", is_particle: true, position: 35 },
      { fr: "ce", phon: "ma", arabic: "\u0645\u064e\u0627", is_particle: true, position: 36 },
      { fr: "par quoi ils separaient", pos: "verbe", phon: "yufarriquna", arabic: "\u064a\u064f\u0641\u064e\u0631\u0651\u0650\u0642\u064f\u0648\u0646\u064e", word_key: "frq", is_particle: false, sense_retenu: "separer", position: 37 },
      { fr: "par cela", phon: "bihi", arabic: "\u0628\u0650\u0647\u0650.", is_particle: true, position: 38 },
      { fr: "entre", phon: "bayna", arabic: "\u0628\u064e\u064a\u0652\u0646\u064e", word_key: "byn", is_particle: false, sense_retenu: "entre", position: 39 },
      { fr: "l'homme", pos: "nom", phon: "al-mar'i", arabic: "\u0671\u0644\u0652\u0645\u064e\u0631\u0652\u0621\u0650", word_key: "mra", is_particle: false, sense_retenu: "homme", position: 40 },
      { fr: "et son epouse", pos: "nom", phon: "wa-zawjihi", arabic: "\u0648\u064e\u0632\u064e\u0648\u0652\u062c\u0650\u0647\u0650.", word_key: "zwj", is_particle: false, sense_retenu: "epouse", position: 41 },
      { fr: "or", phon: "wa-ma", arabic: "\u0648\u064e\u0645\u064e\u0627", is_particle: true, position: 42 },
      { fr: "ils ne", phon: "hum", arabic: "\u0647\u064f\u0645", is_particle: true, position: 43 },
      { fr: "nuisaient", pos: "nom", phon: "bi-darrina", arabic: "\u0628\u0650\u0636\u064e\u0622\u0631\u0651\u0650\u064a\u0646\u064e", word_key: "drr", is_particle: false, sense_retenu: "nuire", position: 44 },
      { fr: "par cela", phon: "bihi", arabic: "\u0628\u0650\u0647\u0650.", is_particle: true, position: 45 },
      { fr: "a", phon: "min", arabic: "\u0645\u0650\u0646\u0652", is_particle: true, position: 46 },
      { fr: "personne", pos: "nom", phon: "ahadin", arabic: "\u0623\u064e\u062d\u064e\u062f\u064d", word_key: "ahd", is_particle: false, sense_retenu: "personne", position: 47 },
      { fr: "sauf par", phon: "illa", arabic: "\u0625\u0650\u0644\u0651\u064e\u0627", is_particle: true, position: 48 },
      { fr: "la permission de", phon: "bi-idhni", arabic: "\u0628\u0650\u0625\u0650\u0630\u0652\u0646\u0650", is_particle: true, position: 49 },
      { fr: "Dieu", pos: "nom", phon: "Allahi", arabic: "\u0671\u0644\u0644\u0651\u064e\u0647\u0650", word_key: "alh", is_particle: false, sense_retenu: "Dieu", position: 50 },
      { fr: "et ils apprennent", pos: "verbe", phon: "wa-yata'allamuna", arabic: "\u0648\u064e\u064a\u064e\u062a\u064e\u0639\u064e\u0644\u0651\u064e\u0645\u064f\u0648\u0646\u064e", word_key: "elm", is_particle: false, sense_retenu: "apprendre", position: 51 },
      { fr: "ce qui", phon: "ma", arabic: "\u0645\u064e\u0627", is_particle: true, position: 52 },
      { fr: "leur nuit", pos: "verbe", phon: "yadurruhum", arabic: "\u064a\u064e\u0636\u064f\u0631\u0651\u064f\u0647\u064f\u0645\u0652", word_key: "drr", is_particle: false, sense_retenu: "nuire", position: 53 },
      { fr: "et ne", phon: "wa-la", arabic: "\u0648\u064e\u0644\u064e\u0627", is_particle: true, position: 54 },
      { fr: "leur est utile", pos: "verbe", phon: "yanfa'uhum", arabic: "\u064a\u064e\u0646\u0641\u064e\u0639\u064f\u0647\u064f\u0645\u0652", word_key: "nfa", is_particle: false, sense_retenu: "etre utile", position: 55 },
      { fr: "et certes", phon: "wa-la-qad", arabic: "\u0648\u064e\u0644\u064e\u0642\u064e\u062f\u0652", is_particle: true, position: 56 },
      { fr: "ils surent", pos: "verbe", phon: "'alimu", arabic: "\u0639\u064e\u0644\u0650\u0645\u064f\u0648\u0627\u06df", word_key: "elm", is_particle: false, sense_retenu: "savoir", position: 57 },
      { fr: "que certes celui qui", phon: "la-mani", arabic: "\u0644\u064e\u0645\u064e\u0646\u0650", is_particle: true, position: 58 },
      { fr: "l'acquiert", phon: "ishtarahu", arabic: "\u0671\u0634\u0652\u062a\u064e\u0631\u064eY\u0670\u0647\u064f", is_particle: true, position: 59 },
      { fr: "n'a pas", phon: "ma", arabic: "\u0645\u064e\u0627", is_particle: true, position: 60 },
      { fr: "pour lui", phon: "lahu", arabic: "\u0644\u064e\u0647\u064f\u060c", is_particle: true, position: 61 },
      { fr: "dans", phon: "fi", arabic: "\u0641\u0650Y", is_particle: true, position: 62 },
      { fr: "l'au-dela", pos: "nom", phon: "al-akhirati", arabic: "\u0671\u0644\u0652\u0621\u064e\u0627\u062e\u0650\u0631\u064e\u0629\u0650", word_key: "axr", is_particle: false, sense_retenu: "l'au-dela", position: 63 },
      { fr: "de", phon: "min", arabic: "\u0645\u0650\u0646\u0652", is_particle: true, position: 64 },
      { fr: "part", pos: "nom", phon: "khalaqin", arabic: "\u062e\u064e\u0644\u064e\u0640\u0670\u0642\u064d", word_key: "xlq", is_particle: false, sense_retenu: "part", position: 65 },
      { fr: "et certes detestable est", pos: "verbe", phon: "wa-la-bi'sa", arabic: "\u0648\u064e\u0644\u064e\u0628\u0650\u0626\u0652\u0633\u064e", word_key: "bas", is_particle: false, sense_retenu: "detestable", position: 66 },
      { fr: "ce contre quoi", phon: "ma", arabic: "\u0645\u064e\u0627", is_particle: true, position: 67 },
      { fr: "ils vendirent", phon: "sharaw", arabic: "\u0634\u064e\u0631\u064e\u0648\u0652\u0627\u06df", is_particle: true, position: 68 },
      { fr: "par cela", phon: "bihi", arabic: "\u0628\u0650\u0647\u0650.\u0653", is_particle: true, position: 69 },
      { fr: "leurs ames", pos: "nom", phon: "anfusahum", arabic: "\u0623\u064e\u0646\u0641\u064f\u0633\u064e\u0647\u064f\u0645\u0652", word_key: "nfs", is_particle: false, sense_retenu: "ames", position: 70 },
      { fr: "si seulement", phon: "law", arabic: "\u0644\u064e\u0648\u0652", is_particle: true, position: 71 },
      { fr: "ils etaient", pos: "verbe", phon: "kanu", arabic: "\u0643\u064e\u0627\u0646\u064f\u0648\u0627\u06df", word_key: "knw", is_particle: false, sense_retenu: "etre", position: 72 },
      { fr: "en train de savoir", pos: "verbe", phon: "ya'lamuna", arabic: "\u064a\u064e\u0639\u0652\u0644\u064e\u0645\u064f\u0648\u0646\u064e", word_key: "elm", is_particle: false, sense_retenu: "savoir", position: 73 }
    ],
    words: [
      // t b e pos=0
      {
        word_key: "t b e", position: 0, sense_chosen: "suivre",
        analysis_axes: {
          sense_chosen: "suivre",
          concept_chosen: "Suivi/Poursuite",
          concepts: {
            "Suivi/Poursuite": {
              status: "retenu",
              senses: ["suivre", "poursuivre", "imiter", "faire suivre"],
              proof_ctx: "Le verbe ittaba'u est un accompli 3MP de la forme VIII de la racine t-b-'. Le Lane's donne : suivre, marcher derriere, se conformer a. La forme VIII (ifta'ala) ajoute l'idee de choix delibere et d'appropriation — le sujet choisit activement de suivre. L'accompli marque que le suivi est un fait acheve. Le prefixe « wa » rattache ce verset au precedent (v.101) ou un groupe a jete le Livre derriere son dos. La distinction avec « succession » est que le verbe designe un acte volontaire de marcher derriere, pas un remplacement dans le temps.",
              axe1_verset: "Le verbe ittaba'u ouvre le verset en designant l'acte fondateur : le choix de suivre ce que les demons racontent. Le champ lexical du verset oppose deux sources de savoir — le divin (les anges, la permission de Dieu) et le demoniaque (les demons, la magie). Le suivi des demons est le point de depart de toute la chaine : ils ont suivi → ils ont appris → ils ont separe → ils ont nui. Le verset montre que le premier acte est un choix de direction.",
              axe2_voisins: "Le verset 101 montrait le rejet du Livre de Dieu derriere le dos. Le verset 102 enchaine : apres avoir rejete la verite, ils suivirent le mensonge. La logique est celle du remplacement — on ne jette pas le Livre dans le vide, on le remplace par autre chose. Le verset 103 montrera l'alternative : s'ils avaient cru et craint Dieu, la recompense aurait ete meilleure.",
              axe3_sourate: "La racine t-b-' apparait dans la sourate al-Baqarah dans le contexte du suivi delibere. En 2:38, « celui qui suivra Ma guidance ». En 2:145, « si tu suivais leurs desirs ». La sourate oppose le suivi de la guidance divine et le suivi des desirs ou des demons. Le verset 102 montre le mauvais suivi — suivre les demons au lieu du Livre.",
              axe4_coherence: "La racine t-b-' apparait environ 174 fois dans le Coran. Le schema « ils suivirent ce que... » est recurrent pour designer les choix humains errones. En 7:3, « ne suivez pas d'allies en dehors de Lui ». En 26:224, les poetes sont suivis par les egares. Le Coran montre que le suivi est un choix moral — suivre le bien ou suivre le mal.",
              axe5_frequence: "Pour la mission du khalifa, le suivi est une question de direction. Suivre les demons c'est tourner le dos a la mission. Le khalifa doit choisir ce qu'il suit — la revelation ou les recits des demons. Le suivi delibere (forme VIII) montre que la responsabilite est entiere — ce n'est pas un suivi passif mais un choix actif."
            },
            "Succession": {
              status: "nul",
              senses: ["successeur", "partisan"],
              proof_ctx: "Le sens de succession temporelle est hors sujet — le verbe est un acte de suivi volontaire, pas une succession dans le temps."
            }
          }
        }
      },
      // tlw pos=2
      {
        word_key: "tlw", position: 2, sense_chosen: "reciter",
        analysis_axes: {
          sense_chosen: "reciter",
          concept_chosen: "Récitation/Succession",
          concepts: {
            "Récitation/Succession": {
              status: "retenu",
              senses: ["reciter", "lire", "succeder"],
              proof_ctx: "Le verbe tatlu est un inaccompli 3FP de la racine t-l-w. Le Lane's donne : reciter, lire a haute voix, raconter, suivre. Ici les demons (shayatin, pluriel feminin brise) « recitent » des choses — ils produisent des recits et les diffusent. L'inaccompli marque que cette recitation est continue et repetee dans le temps. Le sens de « succeder/suivre » est secondaire et ne correspond pas au contexte ou les demons sont les agents d'une enonciation.",
              axe1_verset: "Le verbe tatlu designe l'action des demons — ils recitent ou racontent des choses contre le regne de Salomon. Le champ lexical du verset (enseigner, apprendre, dire, savoir) tourne autour de la transmission du savoir. La recitation des demons est le contenu du suivi — ce qu'ils suivent c'est ce que les demons racontent. Le verset construit une chaine de transmission : demons → recitation → enseignement → apprentissage.",
              axe2_voisins: "Le verset 101 mentionnait le rejet du Livre de Dieu. Le verset 102 montre ce qui remplace le Livre — les recitations des demons. Le Livre divin est une recitation (tilawa) de verite, les demons produisent une contrefacon. Le contraste est saisissant : le Livre est jete, les recits des demons sont suivis.",
              axe3_sourate: "La racine t-l-w apparait dans la sourate al-Baqarah en 2:44 (« vous recitez le Livre ») et 2:121 (« ceux a qui Nous avons donne le Livre le recitent comme il doit etre recite »). La sourate oppose la bonne recitation (du Livre de Dieu) et la mauvaise (des demons). Le verset 102 inverse la norme — au lieu de reciter le Livre, ils suivent ce que les demons recitent.",
              axe4_coherence: "La racine t-l-w apparait environ 63 fois dans le Coran. Le verbe « tatlu » avec les demons comme sujet n'apparait qu'ici — c'est un usage unique qui montre que les demons imitent la forme de la revelation (recitation) mais avec un contenu inverse (mensonge et magie).",
              axe5_frequence: "Pour la mission du khalifa, la recitation est un acte sacre quand elle porte sur la Parole de Dieu. Les demons produisent une recitation mensongere qui imite la forme mais pervertit le fond. Le khalifa doit distinguer la recitation authentique de la contrefacon demoniaque."
            }
          }
        }
      },
      // mlk pos=5 (regne)
      {
        word_key: "mlk", position: 5, sense_chosen: "regne",
        analysis_axes: {
          sense_chosen: "regne",
          concept_chosen: "Royauté/Souveraineté",
          concepts: {
            "Royauté/Souveraineté": {
              status: "retenu",
              senses: ["regne", "roi", "souverain", "couronnement", "trone", "royaume"],
              proof_ctx: "Le nom mulki est un nom masculin genitif de la racine m-l-k. Le Lane's donne : royaute, regne, souverainete. Ici « mulki Sulaymana » designe le regne de Salomon — l'autorite royale qui lui etait confiee par Dieu. Le genitif d'annexion rattache le regne a Salomon. La distinction avec le sens d'ange (retenu aussi pour cette racine mais a la position 19) est claire : mulk est la royaute, malak est l'ange. Les deux sens derivent de la meme racine m-l-k mais dans des directions differentes.",
              axe1_verset: "Le mot mulk situe le contexte historique — c'est du temps du regne de Salomon que les demons recitaient leurs mensonges. Le champ lexical (regne, Salomon, demons, magie) montre que le verset traite d'une periode specifique ou la magie etait pratiquee sous couvert de l'autorite royale. Le verset innocente Salomon — les demons mentaient contre son regne, mais Salomon lui-meme n'a pas couvert la verite.",
              axe2_voisins: "Le verset 101 mentionnait un envoye de Dieu confirmatif. Le verset 102 remonte dans le temps jusqu'a Salomon — un roi et prophete. Le contraste est entre la royaute de Salomon (legitime, de Dieu) et les activites des demons (illegitimes, mensonge). Le verset 103 montrera que la foi et la crainte de Dieu auraient ete meilleures.",
              axe3_sourate: "La racine m-l-k dans le sens de royaute apparait dans la sourate al-Baqarah en 2:247 (« Dieu vous a envoye Talut comme roi ») et 2:248 (« le signe de sa royaute »). La sourate traite le theme de la royaute comme une autorite deleguee par Dieu — le roi n'est qu'un representant. Salomon est un roi choisi par Dieu.",
              axe4_coherence: "Le mulk de Salomon est mentionne en 38:35 (« accorde-moi un royaume »). Le Coran presente Salomon comme un roi-prophete dont le regne etait un don divin. Les demons ont tente de salir ce regne en lui associant la magie. Le verset 102 rectifie cette accusation.",
              axe5_frequence: "Pour la mission du khalifa, la royaute est une forme de khilafa — exercer l'autorite sur terre au nom de Dieu. Le regne de Salomon montre que l'autorite legitime est attaquee par les demons. Le khalifa doit proteger sa mission des infiltrations demoniaques."
            },
            "Possession/Autorité": {
              status: "nul",
              senses: ["maitre", "possesseur", "biens", "esclave", "asservir", "posseder", "propriete"],
              proof_ctx: "Le sens de possession privee est hors sujet — le contexte est la royaute de Salomon, un pouvoir politique, pas une propriete privee."
            },
            "Ange/Messager": {
              status: "nul",
              senses: ["ange", "messager", "message"],
              proof_ctx: "Le sens d'ange s'applique a la position 19 (al-malakayni), pas a cette occurrence. Ici mulk designe le regne, pas les anges."
            }
          }
        }
      },
      // kfr pos=8 (premiere occurrence)
      {
        word_key: "kfr", position: 8, sense_chosen: "couvrir",
        analysis_axes: {
          sense_chosen: "couvrir",
          concept_chosen: "Couverture/Dissimulation",
          concepts: {
            "Couverture/Dissimulation": {
              status: "retenu",
              senses: ["couvrir", "cacher", "la nuit qui couvre"],
              proof_ctx: "Le verbe kafara est un accompli 3MS de la racine k-f-r. Le Lane's donne : couvrir, cacher, dissimuler. Le sens premier est physique — le cultivateur (kafir) couvre la graine de terre, la nuit couvre le jour. La construction « ma kafara Sulaymanu » (Salomon n'a pas couvert) montre que Salomon n'a pas dissimule la verite. La negation « ma » avec l'accompli cree un deni categorique. La deuxieme occurrence « kafaru » (les demons ont couvert) designe les demons comme les vrais dissimulateurs. Le sens derive de « mecreance » est une extension de ce sens premier — le mecreant est celui qui couvre la verite.",
              axe1_verset: "Le verbe kafara structure la proposition centrale du verset — l'innocence de Salomon et la culpabilite des demons. La construction est antithetique : « Salomon n'a pas couvert » vs « mais les demons ont couvert ». Le champ lexical du verset (magie, demons, fascination, epreuve) tourne autour de la dissimulation — couvrir la verite sous des apparences trompeuses. La magie est l'outil de la couverture, les demons en sont les agents.",
              axe2_voisins: "Le verset 101 montrait un groupe qui jette le Livre derriere le dos — un acte de dissimulation (cacher le Livre). Le verset 102 revele qui est le vrai responsable de cette couverture : pas Salomon, mais les demons. Le verset 103 montrera l'alternative — la foi au lieu de la couverture.",
              axe3_sourate: "La racine k-f-r est une des plus frequentes de la sourate al-Baqarah. En 2:6, « ceux qui ont couvert ». En 2:89, « la malediction de Dieu est sur ceux qui couvrent ». La sourate utilise cette racine pour designer l'acte fondamental de couverture de la verite — le refus delibere de voir et d'accepter.",
              axe4_coherence: "La racine k-f-r apparait environ 525 fois dans le Coran. Le sens etymologique de couverture physique est le fondement de tous les sens derives. En 57:20, « les cultivateurs (kuffar) l'admirent puis il seche ». Le cultivateur couvre la graine — c'est le sens physique premier. Le Coran utilise cette racine pour montrer que le rejet de la verite est un acte de dissimulation deliberee.",
              axe5_frequence: "Pour la mission du khalifa, couvrir la verite est l'antithese de la mission. Le khalifa doit decouvrir la verite, la reveler, la mettre en lumiere. Salomon est un modele — il n'a pas couvert. Les demons sont le contre-modele — ils couvrent. Le choix entre decouvrir et couvrir definit la mission."
            },
            "Rejet/Ingratitude": {
              status: "probable",
              senses: ["renier un bienfait", "rejeter", "mecreant", "etre ingrat", "nier"],
              proof_ctx: "Le sens de rejet/ingratitude est une extension du sens de couverture. Renier un bienfait c'est couvrir la reconnaissance due. Dans ce verset, la negation pour Salomon et l'affirmation pour les demons jouent sur les deux plans : couvrir la verite (sens premier) et rejeter les bienfaits de Dieu (sens derive). Les deux sens sont coherents mais le sens de couverture est plus fondamental et plus eclairant etymologiquement.",
              axe1_verset: "Le mot kafara peut aussi se lire comme rejet — Salomon n'a pas rejete la verite, les demons l'ont rejetee. Le sens de rejet est une consequence de la couverture : on couvre pour ne pas voir, on rejette ce qu'on ne veut pas voir. Les deux lectures se superposent dans ce verset.",
              axe2_voisins: "Le verset 100 parlait de la rupture des engagements. Le verset 101 du rejet du Livre. Le verset 102 precise que le vrai rejet est celui des demons, pas de Salomon. Le theme du rejet traverse ces trois versets.",
              axe3_sourate: "La sourate al-Baqarah utilise k-f-r abondamment, souvent dans le sens de rejet de la foi. En 2:28, « comment pouvez-vous rejeter Dieu ? ». Le sens de rejet est omnipresent dans la sourate.",
              axe4_coherence: "Le Coran associe frequemment k-f-r au rejet des signes de Dieu. En 2:39, « ceux qui ont rejete et dementi Nos signes ». Le rejet est un acte delibere qui engage la responsabilite de celui qui rejette.",
              axe5_frequence: "Pour la mission du khalifa, le rejet des bienfaits de Dieu est un manquement grave. Reconnaitre les bienfaits et en etre reconnaissant est le fondement de la mission."
            },
            "Expiation/Réparation": {
              status: "nul",
              senses: ["expier", "effacer les peches"],
              proof_ctx: "Le sens d'expiation est hors sujet — le contexte est la dissimulation de la verite, pas la reparation d'une faute."
            }
          }
        }
      },
      // elm pos=13 (enseigner — forme II)
      {
        word_key: "elm", position: 13, sense_chosen: "enseigner",
        analysis_axes: {
          sense_chosen: "enseigner",
          concept_chosen: "Savoir/Connaissance",
          concepts: {
            "Savoir/Connaissance": {
              status: "retenu",
              senses: ["science", "certitude", "enseignement", "connaitre", "etre informe", "savoir", "savant"],
              proof_ctx: "Le verbe yu'allimuna est un inaccompli 3MP de la forme II de la racine '-l-m. Le Lane's donne : enseigner, faire savoir, instruire. La forme II (fa''ala) intensifie l'action — ils enseignent activement et deliberement. L'inaccompli marque que l'enseignement est continu et repete. Le sujet sont les demons. La racine '-l-m apparait cinq fois dans ce verset sous quatre formes differentes (II, V, I accompli, I inaccompli), ce qui fait du savoir le theme central du verset. La distinction avec le monde/creation (nul) est evidente : le contexte est l'enseignement, pas l'univers.",
              axe1_verset: "La racine '-l-m structure tout le verset en cinq occurrences. La forme II (yu'allimuna/yu'allimani) = les demons/anges enseignent. La forme V (yata'allamuna) = les gens apprennent par eux-memes. La forme I accompli ('alimu) = ils savent. La forme I inaccompli (ya'lamuna) = s'ils savaient. Le verset trace un parcours du savoir : qui enseigne → qui apprend → ce qu'on sait → ce qu'on devrait savoir. Le champ lexical (reciter, enseigner, apprendre, savoir, epreuve) montre que le verset est une meditation sur le bon et le mauvais usage du savoir.",
              axe2_voisins: "Le verset 101 se terminait par « comme s'ils ne savaient pas ». Le verset 102 developpe ce theme — ils savaient mais ont choisi de suivre un mauvais savoir. Le verset 103 opposera la foi et la crainte de Dieu a ce faux savoir. Les trois versets forment un ensemble sur le savoir : le savoir feint (101), le mauvais savoir (102), le vrai savoir (103).",
              axe3_sourate: "La racine '-l-m est une des plus frequentes de la sourate al-Baqarah. En 2:31, Dieu enseigne a Adam les noms. En 2:32, les anges disent « nous ne savons que ce que Tu nous as enseigne ». La sourate oppose le savoir divin (enseigne par Dieu) et le savoir demoniaque (enseigne par les demons). Le verset 102 est le contrepoint de 2:31 — l'enseignement des demons contre l'enseignement de Dieu.",
              axe4_coherence: "La racine '-l-m apparait environ 854 fois dans le Coran. Les cinq occurrences dans un seul verset sont remarquables — cela fait du savoir le mot-cle absolu de ce passage. Le Coran montre que le savoir est un outil — il peut servir le bien (savoir de Dieu) ou le mal (savoir des demons). La valeur du savoir depend de sa source et de son usage.",
              axe5_frequence: "Pour la mission du khalifa, le savoir est l'outil fondamental de la mission. Mais tout savoir n'est pas bon — le savoir qui vient des demons nuit et ne profite pas. Le khalifa doit discerner les sources du savoir et ne retenir que celui qui vient de Dieu. Enseigner le bien est un devoir, enseigner le mal est une trahison."
            },
            "Monde/Création": {
              status: "nul",
              senses: ["univers", "monde", "ensemble des creatures", "les mondes"],
              proof_ctx: "Le sens de monde est hors sujet — le verbe yu'allimuna est un verbe d'enseignement, pas un nom designant l'univers."
            },
            "Marque/Signe": {
              status: "nul",
              senses: ["levre fendue", "marquer", "signe", "drapeau", "montagne", "repere", "etendard"],
              proof_ctx: "Le sens de signe/marque est hors sujet — le verbe est « enseigner », pas « marquer »."
            }
          }
        }
      },
      // shr pos=15
      {
        word_key: "shr", position: 15, sense_chosen: "magie",
        analysis_axes: {
          sense_chosen: "magie",
          concept_chosen: "Magie/Aube",
          concepts: {
            "Magie/Aube": {
              status: "retenu",
              senses: ["magie", "ensorceler", "aube"],
              proof_ctx: "Le nom al-sihra est un nom masculin defini accusatif de la racine s-h-r. Le Lane's donne : magie, ensorcellement, fascination, ce qui detourne les sens de la realite. Le sihr est ce qui trompe les perceptions et fait paraitre les choses autrement qu'elles ne sont. L'article defini (al-) marque que c'est LA magie connue — un savoir specifique et identifie. Le Lane's note aussi le sens d'aube (sahar) — le moment ou la nuit se retire. Les deux sens partagent l'idee de ce qui precede la clarte : la magie precede la desillusion, l'aube precede le jour. Le sens d'aube est ecarte ici car le contexte est l'enseignement occulte.",
              axe1_verset: "Le mot al-sihr est l'objet de l'enseignement des demons — « ils enseignent aux gens la magie ». Le champ lexical du verset (demons, epreuve, separer, nuire) montre que la magie est l'outil de la nuisance. Le verset place la magie dans une chaine : demons → enseignement → magie → separation du couple → nuisance. La magie n'est pas un savoir neutre — c'est un savoir destructeur.",
              axe2_voisins: "Le verset 101 parlait du rejet du Livre. Le verset 102 montre ce qui remplace le Livre — la magie. Le contraste est entre le Livre de Dieu (verite) et la magie des demons (illusion). Le verset 103 montrera que la foi aurait ete meilleure que la magie.",
              axe3_sourate: "La racine s-h-r apparait dans la sourate al-Baqarah principalement dans ce verset. Le contexte est l'histoire de Salomon et des deux anges. La sourate traite la magie comme un savoir reel mais nuisible — elle existe mais Dieu seul decide de ses effets.",
              axe4_coherence: "La racine s-h-r apparait environ 63 fois dans le Coran. Les magiciens de Pharaon (7:116, 20:66, 26:44) sont un theme majeur — leur magie est vaincue par la verite de Moussa. En 2:102, la magie est enseignee par les demons. Le Coran reconnaIt l'existence de la magie mais la condamne comme un outil du mal.",
              axe5_frequence: "Pour la mission du khalifa, la magie est une deviation de la mission. La fascination qui detourne de la realite est l'ennemi du khalifa qui doit voir le monde tel qu'il est. Le khalifa ne doit ni pratiquer ni suivre la magie — il doit s'en tenir a la verite."
            }
          }
        }
      },
      // nzl pos=17
      {
        word_key: "nzl", position: 17, sense_chosen: "faire descendre",
        analysis_axes: {
          sense_chosen: "faire descendre",
          concept_chosen: "Descente/Révélation",
          concepts: {
            "Descente/Révélation": {
              status: "retenu",
              senses: ["pluie qui descend", "faire descendre", "reveler", "descendre", "envoyer d'en haut"],
              proof_ctx: "Le verbe unzila est un accompli passif 3MS de la forme IV de la racine n-z-l. Le Lane's donne : faire descendre, reveler, envoyer d'en haut. La forme IV (af'ala) indique la causation — quelqu'un a fait descendre. Le passif indique que l'objet a ete fait descendre sur les deux anges. L'accompli marque que la descente est un fait acheve. La distinction avec le sens de « halte » (nul) est claire : le contexte est une transmission d'en haut, pas un sejour.",
              axe1_verset: "Le verbe unzila introduit la seconde source de ce qui est enseigne — non seulement la magie mais aussi « ce qui est descendu sur les deux anges a Babylone ». Le champ lexical de la descente rejoint celui de l'enseignement — ce qui descend est un savoir transmis d'en haut. Le verset distingue la magie (enseignee par les demons) et ce qui est descendu sur les anges (une epreuve divine).",
              axe2_voisins: "Le verset 97 utilisait « nazzala » pour la descente de la revelation sur le coeur du Prophete. Le verset 102 utilise « unzila » pour la descente sur les deux anges. Le verbe est le meme mais les destinataires et les contenus different. La sourate montre que Dieu fait descendre la guidance et l'epreuve.",
              axe3_sourate: "La racine n-z-l est structurante dans la sourate al-Baqarah. En 2:2, le Livre est descendu. En 2:4, ce qui est descendu vers toi et avant toi. En 2:97, Djibril a fait descendre sur ton coeur. La sourate est construite autour de la descente — tout vient d'en haut et descend vers les hommes.",
              axe4_coherence: "La racine n-z-l apparait environ 293 fois dans le Coran. Le passif unzila (il a ete fait descendre) est la forme standard pour la revelation. En 2:102, la descente sur les anges est un cas particulier — les anges recoivent quelque chose pour le transmettre comme epreuve, pas comme guidance.",
              axe5_frequence: "Pour la mission du khalifa, la descente est le mode de transmission divine. Ce qui descend d'en haut est la source de la mission. Le khalifa doit recevoir ce qui descend et l'appliquer — mais il doit aussi savoir que certaines descentes sont des epreuves, pas des guides."
            },
            "Halte/Séjour": {
              status: "nul",
              senses: ["s'installer", "faire halte", "lieu de descente", "hote"],
              proof_ctx: "Le sens de halte est hors sujet — le verbe est au passif (il a ete fait descendre), pas au reflexif (il s'est installe)."
            }
          }
        }
      },
      // mlk pos=19 (anges)
      {
        word_key: "mlk", position: 19, sense_chosen: "ange",
        analysis_axes: {
          sense_chosen: "ange",
          concept_chosen: "Ange/Messager",
          concepts: {
            "Ange/Messager": {
              status: "retenu",
              senses: ["ange", "messager", "message"],
              proof_ctx: "Le nom al-malakayni est un duel defini accusatif de la racine m-l-k. Le Lane's donne : ange, messager celeste, etre envoye. Le duel designe deux anges specifiques nommes juste apres : Harout et Marout. L'article defini (al-) indique que ces deux anges sont connus. Le duel est une particularite grammaticale arabe — il indique exactement deux. La distinction avec le sens de « royaute » (position 5, mulk) est morphologique : malak (ange) vs mulk (regne).",
              axe1_verset: "Les deux anges sont les destinataires de ce qui est descendu et les enseignants qui avertissent. Le verset les presente comme des agents d'epreuve : ils enseignent mais previennent d'abord que c'est une epreuve. Le champ lexical (descendre, enseigner, epreuve, ne couvre pas) montre que les anges sont dans un role de test — ils transmettent un savoir dangereux mais avec un avertissement prealable.",
              axe2_voisins: "Le verset 97 mentionnait Djibril comme ange de la revelation. Le verset 98 parlait de l'hostilite envers les anges. Le verset 102 introduit deux anges specifiques dans un role particulier — ils ne revelent pas la guidance mais administrent une epreuve. Les versets 97-102 montrent differentes fonctions des anges.",
              axe3_sourate: "La racine m-l-k dans le sens d'ange apparait dans la sourate en 2:30 (les anges qui dialoguent avec Dieu), 2:34 (la prosternation des anges), 2:97-98 (Djibril et les anges). La sourate presente les anges comme des serviteurs de Dieu qui executent Ses ordres — y compris administrer des epreuves.",
              axe4_coherence: "Les anges Harout et Marout ne sont mentionnes que dans ce verset du Coran. C'est un hapax narratif. Le Coran presente les anges comme des etres qui ne desobeissent pas a Dieu (66:6) — leur role dans ce verset est d'administrer une epreuve, pas d'enseigner le mal. Ils previennent avant de transmettre.",
              axe5_frequence: "Pour la mission du khalifa, les anges sont des serviteurs du plan divin. Leur role d'epreuve montre que le savoir peut etre un test — recevoir un savoir dangereux avec un avertissement et choisir de l'utiliser quand meme engage la responsabilite du khalifa."
            },
            "Royauté/Souveraineté": {
              status: "nul",
              senses: ["regne", "roi", "souverain"],
              proof_ctx: "Le sens de royaute s'applique a la position 5 (mulk), pas ici. La morphologie est differente : malak (ange) vs mulk (regne)."
            }
          }
        }
      },
      // qwl pos=28
      {
        word_key: "qwl", position: 28, sense_chosen: "dire",
        analysis_axes: {
          sense_chosen: "dire",
          concept_chosen: "Parole/Énonciation",
          concepts: {
            "Parole/Énonciation": {
              status: "retenu",
              senses: ["parler", "parole", "discours", "dire", "affirmer"],
              proof_ctx: "Le verbe yaqula est un inaccompli subjonctif 3MD de la racine q-w-l. Le Lane's donne : dire, enoncer, affirmer, declarer. Le subjonctif apres « hatta » (jusqu'a ce que) marque la condition prealable — les anges ne transmettent qu'apres avoir averti. Le duel (3MD) designe les deux anges Harout et Marout. La distinction avec l'opinion (nul) est claire : les anges enoncent un avertissement factuel, pas une opinion.",
              axe1_verset: "Le verbe yaqula introduit l'avertissement des anges : « nous ne sommes qu'une epreuve, ne couvre pas la verite ». Le champ lexical de la parole (dire, epreuve, ne couvre pas) montre que la parole des anges est un acte de mise en garde. Le verset oppose la parole de verite des anges (avertissement) et la recitation des demons (mensonge). La parole est l'outil de l'avertissement.",
              axe2_voisins: "Le verset 101 se terminait par « comme s'ils ne savaient pas ». Le verset 102 montre que les anges disent clairement ce qu'il en est — la parole est directe et sans ambiguite. L'ignorance du verset 101 n'est pas due au manque d'avertissement — les anges ont parle clairement.",
              axe3_sourate: "La racine q-w-l est la plus frequente de la sourate al-Baqarah. En 2:30, « Dieu dit aux anges ». En 2:34, « Nous dimes aux anges ». La sourate est structuree par la parole — Dieu parle, les anges parlent, les hommes parlent. Chaque parole engage celui qui la prononce.",
              axe4_coherence: "La racine q-w-l apparait environ 1722 fois dans le Coran. C'est la racine la plus frequente apres « Dieu ». Le verbe « dire » structure la narration coranique — chaque dialogue, chaque avertissement, chaque commandement passe par la parole. En 2:102, la parole des anges est un modele d'avertissement clair.",
              axe5_frequence: "Pour la mission du khalifa, la parole est l'outil de la mission. Dire la verite, avertir, enoncer clairement — c'est ce que font les anges. Le khalifa doit parler avec clarte et prevenir avant d'agir."
            },
            "Pensée/Avis": {
              status: "nul",
              senses: ["avis", "doctrine", "opinion"],
              proof_ctx: "Le sens d'opinion est hors sujet — les anges enoncent un fait (nous sommes une epreuve), pas une opinion."
            }
          }
        }
      },
      // ftn pos=31
      {
        word_key: "ftn", position: 31, sense_chosen: "epreuve",
        analysis_axes: {
          sense_chosen: "epreuve",
          concept_chosen: "Épreuve/Tentation",
          concepts: {
            "Épreuve/Tentation": {
              status: "retenu",
              senses: ["tenter", "seduire", "fondre l'or (purifier par le feu)", "eprouver"],
              proof_ctx: "Le nom fitnatun est un nom feminin indefini nominatif de la racine f-t-n. Le Lane's donne : epreuve, tentation, mise a l'epreuve, purification par le feu. Le sens premier est celui de la purification de l'or par le feu — l'epreuve revele la vraie nature de ce qui est teste. L'indefini (fitnatun sans article) marque que les anges se presentent comme une epreuve parmi d'autres. La distinction avec le sens de « discorde/persecution » est que les anges ne creent pas de discorde — ils administrent un test qui revele le choix de chacun.",
              axe1_verset: "Le mot fitna est le coeur de l'avertissement des anges : « nous ne sommes qu'une epreuve ». Le champ lexical (enseigner, avertir, couvrir, separer, nuire) montre que l'epreuve est le cadre de tout le verset — le savoir transmis est un test. Celui qui l'utilise pour nuire echoue a l'epreuve. Celui qui s'abstient la reussit. L'epreuve est le mecanisme de tri entre ceux qui couvrent la verite et ceux qui la preservent.",
              axe2_voisins: "Le verset 101 montrait un groupe qui rejette le Livre. Le verset 102 montre que meme l'enseignement des anges est une epreuve — la magie est un test, pas une invitation. Le verset 103 montrera que la foi et la crainte de Dieu auraient ete la bonne reponse a l'epreuve. Les trois versets tracent le parcours : rejet → epreuve → choix.",
              axe3_sourate: "La racine f-t-n apparait dans la sourate en 2:191 (« la fitna est pire que le meurtre »), 2:193 (« combattez-les jusqu'a ce qu'il n'y ait plus de fitna ») et 2:217. La sourate utilise fitna dans differents sens — epreuve, discorde, persecution. En 2:102, le sens est specifiquement l'epreuve qui teste la foi.",
              axe4_coherence: "La racine f-t-n apparait environ 60 fois dans le Coran. Le sens de purification par le feu est le sens etymologique — l'or est purifie en etant mis au feu pour reveler sa qualite. En 29:2-3, « les gens pensent-ils qu'on les laissera dire 'nous croyons' sans etre eprouves ? ». Le Coran presente l'epreuve comme un mecanisme universel de purification et de tri.",
              axe5_frequence: "Pour la mission du khalifa, l'epreuve est le mode de perfectionnement. Le khalifa est constamment eprouve — chaque savoir, chaque pouvoir est un test. Reconnaitre l'epreuve et choisir correctement est l'essence de la mission."
            },
            "Désordre/Persécution": {
              status: "nul",
              senses: ["discorde", "persecution", "chatiment par le feu"],
              proof_ctx: "Le sens de discorde est hors sujet — les anges se presentent comme une epreuve individuelle, pas comme une source de discorde sociale."
            }
          }
        }
      },
      // frq pos=37
      {
        word_key: "frq", position: 37, sense_chosen: "separer",
        analysis_axes: {
          sense_chosen: "separer",
          concept_chosen: "Séparation/Distinction",
          concepts: {
            "Séparation/Distinction": {
              status: "retenu",
              senses: ["separer", "distinguer", "diviser", "Furqan"],
              proof_ctx: "Le verbe yufarriquna est un inaccompli 3MP de la forme II de la racine f-r-q. Le Lane's donne : separer, diviser, distinguer, mettre a part. La forme II (fa''ala) intensifie l'action — ils separent activement et deliberement. L'inaccompli marque que la separation est une action continue et repetee. Le sujet « ils » designe ceux qui apprennent la magie. L'objet de la separation est le lien entre l'homme et son epouse — la magie est utilisee pour detruire le couple.",
              axe1_verset: "Le verbe yufarriquna decrit l'usage concret de la magie — separer l'homme de son epouse. Le champ lexical (magie, enseigner, apprendre, nuire) montre que la separation est le resultat pratique de la magie. Le verset descend du general (les demons enseignent la magie) au particulier (la magie sert a separer les couples). La separation du couple est l'image concrete de la destruction sociale causee par la magie.",
              axe2_voisins: "Le verset 101 utilisait « fariqun » (un groupe separe) de la meme racine. Le verset 102 utilise « yufarriquna » (ils separent activement). La racine f-r-q traverse les deux versets avec des sens differents mais lies — la separation est a la fois le statut du groupe (v.101) et l'action de la magie (v.102).",
              axe3_sourate: "La racine f-r-q apparait dans la sourate en 2:53 (le Furqan, le Discernement) et 2:136 (ne pas separer les prophetes). Le verset 102 montre le mauvais usage de la separation — separer le couple au lieu de separer le vrai du faux. La sourate oppose la bonne separation (discernement) et la mauvaise (destruction des liens).",
              axe4_coherence: "La racine f-r-q apparait environ 72 fois dans le Coran. Le Coran utilise cette racine pour le discernement positif (Furqan) et la division negative (fitna). En 2:102, la separation est negative — elle detruit un lien sacre (le mariage). Le Coran condamne cette forme de separation.",
              axe5_frequence: "Pour la mission du khalifa, la separation doit etre au service du discernement, pas de la destruction. Separer le vrai du faux est un devoir. Separer l'homme de son epouse est un crime. Le khalifa doit utiliser la distinction pour clarifier, pas pour detruire."
            },
            "Groupe/Partie": {
              status: "nul",
              senses: ["groupe", "partie"],
              proof_ctx: "Le mot est un verbe d'action (separer), pas un nom designant un groupe."
            }
          }
        }
      },
      // mra pos=40
      {
        word_key: "mra", position: 40, sense_chosen: "homme",
        analysis_axes: {
          sense_chosen: "homme",
          concept_chosen: "Personne/Individu",
          concepts: {
            "Personne/Individu": {
              status: "retenu",
              senses: ["femme (imra'a)", "homme (imru')"],
              proof_ctx: "Le nom al-mar'i est un nom masculin defini genitif de la racine m-r-a. Le Lane's donne : homme, individu, personne (imru'/mar'). L'article defini (al-) generalise — l'homme au sens generique, tout homme dans un couple. Le genitif est regi par la preposition « bayna » (entre). La distinction avec le sens de « sante/bienfaisance » est evidente : le contexte est la relation conjugale, pas la sante.",
              axe1_verset: "Le mot al-mar' designe l'homme dans le couple — « entre l'homme et son epouse ». Le champ lexical du verset (separer, magie, nuire) montre que l'homme et son epouse sont les victimes de la magie. Le verset passe du general (la magie) au particulier (la destruction du couple) en nommant les deux parties : l'homme et son epouse.",
              axe2_voisins: "Le verset 101 parlait du rejet du Livre. Le verset 102 descend dans les consequences concretes — la destruction du lien conjugal. Le passage du spirituel (le Livre) au social (le couple) montre l'etendue des degats causes par le suivi des demons.",
              axe3_sourate: "La racine m-r-a apparait dans la sourate en 2:282 (un homme et une femme comme temoins). La sourate traite les relations homme-femme dans differents contextes — le mariage, le divorce, le temoignage. Le verset 102 montre la destruction de ce lien par la magie.",
              axe4_coherence: "Le mot mar' apparait environ 19 fois dans le Coran. Il designe l'individu dans sa dimension personnelle et relationnelle. En 80:34, « le jour ou l'homme fuira son frere ». Le Coran utilise ce mot pour les moments ou l'individualite est en jeu.",
              axe5_frequence: "Pour la mission du khalifa, le couple est une unite fondamentale de la societe. Proteger le lien conjugal fait partie de la mission. La magie qui separe les couples attaque les fondements de la vie sociale."
            },
            "Santé/Bienfaisance": {
              status: "nul",
              senses: ["etre digeste", "etre bienfaisant", "etre sain"],
              proof_ctx: "Le sens de sante est hors sujet — le contexte est la relation conjugale."
            }
          }
        }
      },
      // zwj pos=41
      {
        word_key: "zwj", position: 41, sense_chosen: "epouse",
        analysis_axes: {
          sense_chosen: "epouse",
          concept_chosen: "Couple/Union",
          concepts: {
            "Couple/Union": {
              status: "retenu",
              senses: ["coupler", "marier", "epoux", "paire", "espece"],
              proof_ctx: "Le nom zawjihi est un nom masculin genitif de la racine z-w-j avec pronom suffixe 3MS. Le Lane's donne : conjoint, epouse, moitie du couple, paire. L'idafa (zawjihi, son epouse) rattache l'epouse a l'homme par le lien conjugal. Le mot zawj en arabe designe aussi bien le mari que l'epouse — c'est le membre d'un couple. Le pronom « hi » (son) precise que c'est l'epouse de l'homme mentionne. Ce sens est unique dans le champ semantique de cette racine.",
              axe1_verset: "Le mot zawjihi complete la paire — « entre l'homme et son epouse ». Le champ lexical (separer, entre, l'homme, son epouse) construit l'image de la destruction du couple par la magie. Le verset montre que la magie s'attaque au lien le plus intime de la societe — le mariage. L'epouse est nommee explicitement pour montrer que la separation vise le coeur de la vie sociale.",
              axe2_voisins: "Le verset 101 traitait du rejet du Livre (niveau spirituel). Le verset 102 descend au niveau social — la destruction du couple. Le verset 103 remontera au niveau spirituel (la foi). La progression montre que le rejet du Livre a des consequences concretes sur les relations humaines.",
              axe3_sourate: "La racine z-w-j est importante dans la sourate al-Baqarah. En 2:25, « des epouses purifiees ». En 2:35, « toi et ton epouse ». En 2:230-232, les regles du divorce et du remariage. La sourate al-Baqarah est la sourate du mariage par excellence. Le verset 102 montre la menace qui pese sur cette institution.",
              axe4_coherence: "La racine z-w-j apparait environ 81 fois dans le Coran. Le couple (zawj) est une creation divine — « Il a cree de vous des epouses pour que vous trouviez la tranquillite » (30:21). Separer le couple c'est defaire une creation divine. Le Coran protege le couple comme institution sacree.",
              axe5_frequence: "Pour la mission du khalifa, le couple est la premiere cellule de la societe que le khalifa doit proteger. La magie qui separe les couples detruit le tissu social. Le khalifa doit preserver les liens conjugaux et combattre ce qui les menace."
            }
          }
        }
      },
      // drr pos=44
      {
        word_key: "drr", position: 44, sense_chosen: "nuire",
        analysis_axes: {
          sense_chosen: "nuire",
          concept_chosen: "Nuisance/Mal",
          concepts: {
            "Nuisance/Mal": {
              status: "retenu",
              senses: ["nuire", "tort", "dommage"],
              proof_ctx: "Le nom darrina est un participe actif pluriel masculin de la racine d-r-r. Le Lane's donne : nuire, causer du tort, faire du dommage. Le participe actif « darrina » designe ceux qui nuisent — ici dans la negation « ma hum bi-darrina min ahadin illa bi-idhni Allah » (ils ne sont pas des nuisants pour quiconque sauf par la permission de Dieu). La meme racine apparait en position 53 sous forme verbale (yadurruhum, il leur nuit). Le verset etablit une regle fondamentale : la nuisance n'est possible que par la permission de Dieu.",
              axe1_verset: "La racine d-r-r apparait deux fois dans le verset — une fois pour limiter le pouvoir de nuisance (les magiciens ne nuisent que par permission divine) et une fois pour decrire ce qu'ils apprennent (ce qui leur nuit). Le champ lexical (magie, separer, nuire, utile) montre que le verset oppose le mal (nuire) et le bien (etre utile). La nuisance est l'outil de la magie, la permission de Dieu en est la limite.",
              axe2_voisins: "Le verset 101 montrait le rejet du Livre. Le verset 102 montre les consequences — la nuisance. Mais le verset pose immediatement une limite : la nuisance ne se produit que par la permission de Dieu. Le verset 103 montrera que la foi aurait prevenu cette nuisance.",
              axe3_sourate: "La racine d-r-r apparait dans la sourate en 2:231 (« ne les retenez pas pour leur nuire ») et 2:233 (« ni mere ni pere ne doivent etre leses »). La sourate interdit la nuisance dans les relations humaines — le mariage, la parentalite, les contrats.",
              axe4_coherence: "La racine d-r-r apparait environ 74 fois dans le Coran. Le principe « la darara wa la dirar » (pas de nuisance ni de represailles nuisibles) est un des fondements du droit islamique. En 2:102, le verset applique ce principe — la nuisance existe mais elle est limitee par la volonte divine. Personne ne peut nuire sans que Dieu le permette.",
              axe5_frequence: "Pour la mission du khalifa, savoir que la nuisance est limitee par Dieu est une source de confiance. Le khalifa ne doit pas craindre la magie ou la nuisance — tout est sous le controle de Dieu. La confiance en la permission divine est le bouclier du khalifa."
            }
          }
        }
      },
      // alh pos=50
      {
        word_key: "alh", position: 50, sense_chosen: "Dieu",
        analysis_axes: {
          sense_chosen: "Dieu",
          concept_chosen: "Divinité",
          concepts: {
            "Divinité": {
              status: "retenu",
              senses: ["divinite (concept)", "Dieu", "theologie", "divinite", "exclamation divine", "oui certes"],
              proof_ctx: "Le nom Allahi est le nom propre de la divinite au genitif. Le Lane's donne : Dieu, la divinite unique. Ici dans l'expression « bi-idhni Allahi » (par la permission de Dieu) — le nom de Dieu apparait comme la limite du pouvoir de nuisance. La nuisance n'est possible que si Dieu le permet. Cette expression etablit la souverainete divine sur tous les phenomenes, y compris la magie.",
              axe1_verset: "Le nom Allahi est le pivot du verset — il separe le domaine de la magie (puissance limitee) et le domaine divin (puissance absolue). L'expression « par la permission de Dieu » est la cle theologique du verset : rien ne se produit sans que Dieu le permette. Le champ lexical (demons, anges, epreuve, Dieu) montre que Dieu est le souverain au-dessus de tous les acteurs — demons et anges agissent dans le cadre de Sa permission.",
              axe2_voisins: "Le verset 101 mentionnait Dieu comme source de l'envoye et proprietaire du Livre. Le verset 102 le mentionne comme limite du pouvoir de nuisance. Le verset 103 montrera que la recompense vient aussi de Dieu. Dieu est present dans chaque verset comme la reference ultime.",
              axe3_sourate: "Le nom Allah est le mot le plus frequent de la sourate al-Baqarah. Il structure chaque passage. En 2:102, Dieu est le garant de l'ordre — meme la magie ne peut agir sans Sa permission. La sourate montre que tout pouvoir est delegue et controle par Dieu.",
              axe4_coherence: "L'expression « bi-idhni Allah » (par la permission de Dieu) apparait plusieurs fois dans le Coran. En 2:97, Djibril a fait descendre la revelation « par la permission de Dieu ». En 3:145, nul ne meurt « sauf par la permission de Dieu ». Le Coran enseigne que tout evenement est sous controle divin.",
              axe5_frequence: "Pour la mission du khalifa, la permission de Dieu est le cadre de la mission. Le khalifa agit avec la permission de Dieu et sait que les obstacles (nuisance, magie, demons) sont limites par cette meme permission. La confiance en Dieu est le fondement de la mission."
            },
            "Détresse": {
              status: "nul",
              senses: ["etre perplexe", "se lamenter"],
              proof_ctx: "Le mot est le nom propre Allah, pas un verbe de detresse."
            },
            "Adoration/Dévotion": {
              status: "nul",
              senses: ["diviniser", "adorer", "faire adorer", "se devouer au culte"],
              proof_ctx: "Le mot est le nom propre Allah, pas un verbe d'adoration."
            },
            "Refuge/Protection": {
              status: "nul",
              senses: ["demeurer", "proteger", "chercher refuge"],
              proof_ctx: "Le sens de refuge est hors sujet — le contexte est la permission divine."
            },
            "Domination": {
              status: "nul",
              senses: ["asservir"],
              proof_ctx: "Le sens de domination est hors sujet — le contexte est la permission divine."
            }
          }
        }
      },
      // nfa pos=55
      {
        word_key: "nfa", position: 55, sense_chosen: "etre utile",
        analysis_axes: {
          sense_chosen: "etre utile",
          concept_chosen: "Utilité/Profit",
          concepts: {
            "Utilité/Profit": {
              status: "retenu",
              senses: ["etre utile", "profiter", "avantage", "servir"],
              proof_ctx: "Le verbe yanfa'uhum est un inaccompli 3MS de la racine n-f-'. Le Lane's donne : etre utile, profiter, servir, apporter un avantage. L'inaccompli avec la negation « la yanfa'uhum » indique que ce qu'ils apprennent ne leur est pas utile — c'est une negation permanente. Le pronom suffixe « hum » (eux) precise que l'inutilite les concerne directement. Ce sens est unique dans le champ semantique de cette racine.",
              axe1_verset: "Le verbe yanfa'u est place en opposition directe avec « yadurruhum » (leur nuit). Le verset cree une antithese : ce qu'ils apprennent leur nuit ET ne leur est pas utile. Le double verdict est accablant — non seulement c'est nuisible, mais en plus c'est inutile. Le champ lexical (apprendre, nuire, utile, savoir) montre que le bilan du mauvais savoir est entierement negatif.",
              axe2_voisins: "Le verset 101 montrait le rejet du Livre (utile par nature). Le verset 102 montre que ce qui remplace le Livre est inutile et nuisible. Le verset 103 montrera que la recompense de Dieu est meilleure. La progression est : rejet de l'utile → acquisition de l'inutile → meilleure alternative (la foi).",
              axe3_sourate: "La racine n-f-' apparait dans la sourate en 2:123 (« aucune intercession ne lui sera utile ») et 2:164 (« ce qui est utile aux gens »). La sourate oppose ce qui est utile (de Dieu) et ce qui est inutile (des demons). L'utilite vraie vient de Dieu.",
              axe4_coherence: "La racine n-f-' apparait environ 50 fois dans le Coran. Le Coran utilise le critere de l'utilite pour evaluer les choix humains. En 13:17, « l'ecume s'en va, ce qui est utile aux gens demeure sur terre ». Ce qui est utile dure, ce qui est inutile disparait.",
              axe5_frequence: "Pour la mission du khalifa, l'utilite est un critere de la mission. Le khalifa doit acquerir le savoir utile et rejeter le savoir nuisible. Ce qui sert la mission est utile, ce qui en detourne est nuisible et inutile."
            }
          }
        }
      },
      // axr pos=63
      {
        word_key: "axr", position: 63, sense_chosen: "l'au-dela",
        analysis_axes: {
          sense_chosen: "l'au-dela",
          concept_chosen: "Postériorité/Retard",
          concepts: {
            "Postériorité/Retard": {
              status: "retenu",
              senses: ["retarder", "reporter", "reculer", "apres", "dernier", "l'au-dela", "fin"],
              proof_ctx: "Le nom al-akhirati est un nom feminin defini genitif de la racine a-kh-r. Le Lane's donne : l'au-dela, la derniere demeure, ce qui vient apres. L'article defini (al-) et la forme feminine (akhira) designent la vie derniere — la vie qui vient apres celle d'ici-bas. Le genitif est regi par « fi » (dans). « Fi al-akhirati min khalaqin » = dans l'au-dela, aucune part. La distinction avec le sens de « arriere/derriere » (nul) est que le mot designe un temps futur, pas un lieu derriere.",
              axe1_verset: "Le mot al-akhira introduit la dimension eschatologique du verset — celui qui acquiert la magie n'a aucune part dans l'au-dela. Le champ lexical (savoir, nuire, utile, au-dela, part, detestable, ames) montre que le verdict est final : la magie prive de l'au-dela. Le verset passe du temporel (la nuisance ici-bas) a l'eternel (la perte de l'au-dela).",
              axe2_voisins: "Le verset 101 montrait le rejet du Livre (la source de la vie eternelle). Le verset 102 montre la consequence — la perte de l'au-dela. Le verset 103 montrera que la foi aurait assure une recompense dans l'au-dela. Les trois versets tracent le parcours : rejet → perte → alternative.",
              axe3_sourate: "La racine a-kh-r dans le sens d'au-dela apparait frequemment dans la sourate al-Baqarah. En 2:4, « ils croient a l'au-dela ». En 2:86, « ils preferent la vie d'ici-bas a l'au-dela ». La sourate oppose systematiquement l'ici-bas et l'au-dela — le choix de l'un au detriment de l'autre est le test fondamental.",
              axe4_coherence: "La racine a-kh-r dans le sens d'au-dela apparait environ 113 fois dans le Coran. L'au-dela est la mesure de la valeur des actes — ce qui sert dans l'au-dela est bon, ce qui en prive est mauvais. En 2:102, la magie prive de l'au-dela — c'est le verdict le plus grave.",
              axe5_frequence: "Pour la mission du khalifa, l'au-dela est la destination de la mission. Le khalifa travaille pour l'au-dela, pas pour l'ici-bas. Ce qui prive de l'au-dela — comme la magie — est incompatible avec la mission."
            },
            "Sens isolé/Arrière": {
              status: "nul",
              senses: ["arriere"],
              proof_ctx: "Le sens d'arriere est hors sujet — le mot designe l'au-dela, pas un lieu physique."
            }
          }
        }
      },
      // xlq pos=65
      {
        word_key: "xlq", position: 65, sense_chosen: "part",
        analysis_axes: {
          sense_chosen: "part",
          concept_chosen: "Création/Production",
          concepts: {
            "Création/Production": {
              status: "retenu",
              senses: ["creer", "creation", "creature", "faconner", "nature", "caractere"],
              proof_ctx: "Le nom khalaqin est un nom masculin indefini genitif de la racine kh-l-q. Le Lane's donne dans ce contexte : part, portion, lot, caractere. Le mot khalaq signifie ici une part de bien — « ma lahu fi al-akhirati min khalaqin » (il n'a dans l'au-dela aucune part). Le Lane's distingue ce sens du sens de creation. Le sens de « part/portion » derive du sens premier de « mesurer/faconner » — une part est ce qui a ete mesure et attribue. L'indefini avec la negation (min khalaqin) cree une negation totale : meme pas la moindre part.",
              axe1_verset: "Le mot khalaq complete la phrase sur l'au-dela — celui qui acquiert la magie n'a aucune part dans l'au-dela. Le champ lexical (savoir, nuire, au-dela, part, detestable, ames) montre que le bilan est total : pas de profit ici-bas (inutile) et pas de part la-bas (au-dela). La double negation (pas utile + pas de part) ferme toute issue pour celui qui choisit la magie.",
              axe2_voisins: "Le verset 101 montrait le rejet du Livre. Le verset 102 montre que ce rejet mene a la perte totale — aucune part dans l'au-dela. Le verset 103 montrera que la foi aurait apporte une meilleure recompense. La part dans l'au-dela est ce qui distingue le croyant du suiveur des demons.",
              axe3_sourate: "La racine kh-l-q apparait dans la sourate en 2:21 (« adorez votre Seigneur qui vous a crees ») et 2:29 (« Il a cree pour vous tout ce qui est sur terre »). Le sens de creation est dominant dans la sourate. En 2:102, le sens de « part » est un usage specifique du meme radical — la part dans l'au-dela est une creation divine allouee a chaque individu.",
              axe4_coherence: "Le mot khalaq dans le sens de « part/portion » apparait aussi en 3:77 (« ceux-la n'ont aucune part [khalaq] dans l'au-dela »). Le Coran utilise ce mot pour designer la portion de bien allouee dans la vie future. Le parallele avec 3:77 confirme le sens de « part » pour ce verset.",
              axe5_frequence: "Pour la mission du khalifa, la part dans l'au-dela est la recompense de la mission. Perdre cette part c'est echouer dans la mission. Le khalifa doit veiller a ne rien faire qui le prive de sa part dans l'au-dela."
            },
            "Sens isolé/Mensonge": {
              status: "nul",
              senses: ["mensonge"],
              proof_ctx: "Le sens de mensonge est hors sujet — le contexte est une portion de bien dans l'au-dela."
            }
          }
        }
      },
      // bas pos=66
      {
        word_key: "bas", position: 66, sense_chosen: "detestable",
        analysis_axes: {
          sense_chosen: "detestable",
          concept_chosen: "Puissance/Malheur",
          concepts: {
            "Puissance/Malheur": {
              status: "retenu",
              senses: ["force", "chatiment", "malheur"],
              proof_ctx: "Le verbe bi'sa est un accompli 3MS de la racine b-'-s. Le Lane's donne : etre mauvais, etre detestable, quel malheur. C'est un verbe de blame intense — bi'sa exprime le blame absolu et l'indignation. La construction « bi'sa ma sharaw bihi anfusahum » (detestable est ce contre quoi ils vendirent leurs ames) est une formule de blame coranique classique. Le verbe est precede de « la » emphatique (la-bi'sa) qui renforce le blame.",
              axe1_verset: "Le verbe bi'sa introduit le jugement final du verset — une exclamation de blame. Le champ lexical (detestable, vendirent, ames, savoir) montre que le verset conclut par un verdict moral : la marchandise (la magie) contre laquelle ils ont vendu leurs ames est detestable. Le verset oppose la valeur de l'ame (inestimable) et la valeur de la magie (nulle). Vendre son ame pour quelque chose de detestable est le comble de la perte.",
              axe2_voisins: "Le verset 101 montrait le rejet du Livre. Le verset 102 conclut par un blame — la magie est une marchandise detestable. Le verset 103 montrera que la recompense de Dieu « aupres de Dieu est meilleure ». Le blame du verset 102 prepare l'alternative positive du verset 103.",
              axe3_sourate: "Le verbe bi'sa apparait dans la sourate en 2:90 (« detestable est ce contre quoi ils vendirent leurs ames ») avec une formulation quasi identique a celle de 2:102. La sourate utilise cette formule de blame pour condemner le choix delibere du mal contre le bien.",
              axe4_coherence: "Le verbe bi'sa apparait environ 36 fois dans le Coran. Il est toujours utilise pour exprimer le blame divin ou moral le plus fort. En 2:206, « bi'sa le berceau, l'Enfer ». En 3:187, « detestable est ce qu'ils achetent ». Le Coran utilise bi'sa pour les pires choix humains.",
              axe5_frequence: "Pour la mission du khalifa, le blame (bi'sa) est un avertissement. Le khalifa doit eviter les choix qui meritent ce blame. Vendre sa mission pour des gains ephemeres est detestable. Le khalifa doit garder la perspective de l'au-dela."
            }
          }
        }
      },
      // nfs pos=70
      {
        word_key: "nfs", position: 70, sense_chosen: "ames",
        analysis_axes: {
          sense_chosen: "ames",
          concept_chosen: "Âme/Être",
          concepts: {
            "Âme/Être": {
              status: "retenu",
              senses: ["desir", "ame", "personne", "esprit", "soi-meme"],
              proof_ctx: "Le nom anfusahum est un pluriel feminin accusatif de la racine n-f-s avec pronom suffixe 3MP. Le Lane's donne : ame, personne, soi-meme, etre interieur. Le pluriel anfus designe leurs propres ames — leurs personnes entieres. Le pronom « hum » (eux) precise que ce sont leurs propres ames. L'expression « sharaw bihi anfusahum » (ils vendirent par cela leurs ames) montre que l'ame est mise en jeu — ils ont echange leurs ames contre la magie.",
              axe1_verset: "Le mot anfus conclut la chaine du verset — depuis le suivi des demons jusqu'a la vente de l'ame. Le champ lexical (detestable, vendirent, ames) montre que le verdict final porte sur la personne entiere — ce n'est pas un bien materiel qui est perdu mais l'ame elle-meme. Le verset oppose l'ame (valeur supreme) et la magie (valeur nulle). Vendre l'ame c'est se perdre entierement.",
              axe2_voisins: "Le verset 90 utilisait la meme formule : « detestable est ce contre quoi ils vendirent leurs ames ». Le verset 102 reprend cette formule pour creer un echo — le meme choix catastrophique se repete. Le verset 103 montrera la meilleure alternative.",
              axe3_sourate: "La racine n-f-s est une des plus frequentes de la sourate al-Baqarah. En 2:48, « une ame ne compensera rien pour une autre ame ». En 2:233, « aucune ame n'est chargee au-dela de sa capacite ». La sourate traite l'ame comme l'unite de responsabilite — chaque ame repond de ses choix.",
              axe4_coherence: "La racine n-f-s apparait environ 295 fois dans le Coran. L'expression « vendre son ame » est un idiome coranique pour designer le pire des choix. En 2:207, le contraste positif : « celui qui vend son ame pour la satisfaction de Dieu ». Le Coran montre que l'ame peut etre bien ou mal vendue.",
              axe5_frequence: "Pour la mission du khalifa, l'ame est ce que le khalifa a de plus precieux. Vendre son ame pour la magie ou les gains ephemeres est la pire trahison de la mission. Le khalifa doit proteger son ame et la consacrer a Dieu."
            },
            "Souffle/Vie": {
              status: "nul",
              senses: ["souffle", "respirer", "soulagement"],
              proof_ctx: "Le sens de souffle physique est hors sujet — le contexte est la vente de l'ame, pas le souffle vital."
            }
          }
        }
      },
      // knw pos=72
      {
        word_key: "knw", position: 72, sense_chosen: "etre",
        analysis_axes: {
          sense_chosen: "etre",
          concept_chosen: "Existence/Devenir",
          concepts: {
            "Existence/Devenir": {
              status: "retenu",
              senses: ["etre", "devenir", "exister"],
              proof_ctx: "Le verbe kanu est un accompli 3MP de la racine k-w-n. Le Lane's donne : etre, exister, devenir. Ici dans la construction « law kanu ya'lamuna » (s'ils etaient en train de savoir / s'ils savaient) — kana sert de verbe auxiliaire pour marquer l'irreel passe. La particule « law » (si) cree une condition irrealisable — le texte suggere qu'ils ne savaient pas, ou plus precisement qu'ils ne tiraient pas les consequences de ce qu'ils savaient. Ce sens est unique dans le champ semantique de cette racine.",
              axe1_verset: "Le verbe kanu ferme le verset avec une exclamation de regret : « s'ils savaient ! ». Le champ lexical (savoir, ames, detestable) montre que la conclusion du verset porte sur le savoir — ils savent (v.57, 'alimu) mais ne tirent pas les consequences de leur savoir. Kana ici marque le contraste entre ce qu'ils sont (en train de suivre les demons) et ce qu'ils auraient du etre (en train de savoir et d'agir en consequence).",
              axe2_voisins: "Le verset 101 se terminait par « comme s'ils ne savaient pas ». Le verset 102 se termine par « s'ils savaient ». Les deux fins se font echo — le theme du savoir feint ou neglige encadre les deux versets. Le verset 103 rencherira : « s'ils avaient cru... une recompense aupres de Dieu serait meilleure, s'ils savaient ! ».",
              axe3_sourate: "La racine k-w-n avec kana comme auxiliaire est tres frequente dans la sourate al-Baqarah. En 2:10, « en raison de ce qu'ils etaient en train de mentir ». La sourate utilise kana pour decrire les etats passes et les conditions irreelles — ce que les gens etaient et ce qu'ils auraient du etre.",
              axe4_coherence: "La racine k-w-n apparait environ 1358 fois dans le Coran. Kana est le verbe le plus frequent du Coran. La construction « law kanu ya'lamuna » apparait en 2:102, 2:103 et dans d'autres sourates. Le Coran utilise cette formule pour exprimer le regret divin devant l'ignorance deliberee des humains.",
              axe5_frequence: "Pour la mission du khalifa, l'existence est le cadre de la mission. Le verbe kana rappelle que chaque etat est un choix — etre en train de savoir ou etre en train d'ignorer. Le khalifa doit choisir d'etre en etat de savoir et d'agir en consequence."
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

  const verseIds = [109];
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
  console.log('=== PIPELINE SOURATE 2 — VERSET 102 ===\n');
  await processVerse(102);
  await syncWordMeanings();
  console.log('\n=== PIPELINE V102 TERMINEE ===');
}

main().catch(e => console.error('FATAL:', e));
