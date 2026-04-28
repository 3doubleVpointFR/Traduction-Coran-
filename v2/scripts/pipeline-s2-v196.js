const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// =====================================================
// PIPELINE SOURATE 2 — VERSET 196
// verse_id=203, analysis_id=564
// "Et accomplissez pour Dieu le pelerinage et la visite.
//  Si vous en etes empeches, alors ce qui est facile comme
//  offrande. Et ne rasez pas vos tetes jusqu'a ce que
//  l'offrande atteigne son lieu de licite. Si l'un de vous
//  est malade ou a une souffrance de sa tete, alors un
//  rachat par un jeune ou une aumone ou un sacrifice. Puis
//  quand vous etes en securite, quiconque profite de la
//  visite jusqu'au pelerinage, alors ce qui est facile
//  comme offrande. Et quiconque ne trouve pas, alors un
//  jeune de trois jours pendant le pelerinage et sept
//  quand vous etes rentres — voila dix complets. Cela
//  pour qui sa famille ne reside pas pres de la Mosquee
//  sacree. Et premunissez-vous de Dieu et sachez que
//  Dieu est severe en consequence."
// Regles du pelerinage, offrandes, jeune, rachat
// =====================================================

const verseData = {
  196: {
    verse_id: 203,
    analysis_id: 564,
    translation_arab: "Et accomplissez pour Dieu le pelerinage et la visite. Si vous en etes empeches, alors ce qui est facile comme offrande. Et ne rasez pas vos tetes jusqu'a ce que l'offrande atteigne son lieu de licite. Si l'un de vous est malade ou a une souffrance de sa tete, alors un rachat par un jeune ou une aumone ou un sacrifice. Puis quand vous etes en securite, quiconque profite de la visite jusqu'au pelerinage, alors ce qui est facile comme offrande. Et quiconque ne trouve pas, alors un jeune de trois jours pendant le pelerinage et sept quand vous etes rentres — voila dix complets. Cela pour qui sa famille ne reside pas pres de la Mosquee sacree. Et premunissez-vous de Dieu et sachez que Dieu est severe en consequence.",
    full_translation: "Et accomplissez pour Allah le pelerinage et l'Umra. Si vous en etes empeches, alors faites un sacrifice tel que vous le pouvez. Et ne rasez pas vos tetes avant que l'offrande n'ait atteint son lieu d'immolation. Si l'un d'entre vous est malade ou souffre d'une affection de la tete, qu'il se rachete alors par un jeune, ou une aumone, ou une offrande sacrificielle. Puis, quand vous etes en securite, quiconque a joui d'une vie normale apres avoir fait l'Umra en attendant le pelerinage, doit faire un sacrifice tel qu'il peut se le permettre. S'il n'a pas les moyens, qu'il jeune trois jours pendant le pelerinage et sept jours une fois rentre chez lui, soit en tout dix jours. Cela est prescrit pour celui dont la famille n'habite pas aupres de la Mosquee sacree. Et craignez Allah. Et sachez qu'Allah est dur en punition.",
    translation_explanation: `§DEMARCHE§
Le verset 2:196 est un des versets legislatifs les plus longs de la sourate, posant les regles du pelerinage (hajj) et de la visite (umra). Il contient plusieurs blocs normatifs enchaines par des propositions conditionnelles.

Le verbe **atimmu** est un imperatif 2MP de la forme IV de la racine t-m-m. Le Lane's donne pour la forme IV : rendre complet, accomplir integralement, parfaire, mener a terme. L'imperatif collectif (atimmu = accomplissez) s'adresse a l'ensemble des croyants. La forme IV ajoute l'idee causative : faire en sorte que la chose soit complete. Accomplir le pelerinage, c'est le mener a son terme avec tous ses rites, sans rien omettre. Le complement « li-Llahi » (pour Dieu) indique la destination exclusive de l'acte — le pelerinage et la visite sont pour Dieu seul, pas pour le prestige ou le commerce.

Le nom **al-hajja** est un nom defini accusatif singulier de la racine h-j-j. Le Lane's donne : se diriger vers, pelerinage, visite d'un lieu sacre, argument, preuve. Le hajj est l'acte de se diriger vers un lieu avec intention — dans le contexte coranique, c'est le pelerinage a la Maison sacree. L'article al- definit le pelerinage comme l'institution connue et etablie. L'accusatif marque l'objet direct de atimmu — c'est le pelerinage qu'on accomplit.

Le nom **al-umrata** est un nom defini accusatif singulier de la racine '-m-r. Le Lane's donne : vie, duree, visite, frequentation d'un lieu, umra (visite pieuse). La umra est la visite de la Maison sacree en dehors de la periode du hajj — une visite plus courte et moins contraignante. Le mot est coordonne au hajj par « wa » (et), placant les deux actes sur le meme plan d'obligation.

Le verbe **uhsirtum** est un accompli passif 2MP de la racine h-s-r. Le Lane's donne : empecher, confiner, assieger, retenir, bloquer l'acces. Le passif indique que l'empechement vient de l'exterieur — ce n'est pas un choix mais une contrainte subie (maladie, ennemi, obstacle). La construction « fa-in uhsirtum » (si vous etes empeches) ouvre une clause d'exception — si l'accomplissement complet est impossible, une alternative est prevue.

Le verbe **istaysara** est un accompli de la forme X de la racine y-s-r. Le Lane's donne pour la forme X : trouver facile, ce qui est aise, ce qui est a portee. La forme X (istaf'ala) ajoute l'idee de chercher ou trouver la qualite — chercher ce qui est facile, c'est-a-dire ce qui est a sa portee. La construction « fa-ma istaysara mina l-hadyi » signifie « alors ce qui est facile/a portee parmi l'offrande » — le croyant empoche offre ce qu'il peut, sans contrainte excessive.

Le nom **al-hadyi** est un nom defini de la racine h-d-y. Le Lane's donne : ce qu'on conduit, offrande, animal sacrificiel, ce qu'on mene au lieu de sacrifice. Dans le contexte du pelerinage, al-hady est l'animal qu'on conduit (hada = conduire, mener) au lieu de sacrifice. La racine h-d-y contient aussi le sens de guidance, mais dans le contexte rituel du pelerinage, le hady est specifiquement l'offrande animale — ce qu'on « guide » vers le lieu d'immolation. Le mot est defini par al- car l'offrande est une institution connue du pelerinage.

Le verbe **tahliquu** est un inaccompli 2MP de la racine h-l-q avec negation (la tahliquu = ne rasez pas). Le Lane's donne : raser, couper les cheveux a ras, tondre. Le rasage de la tete est un rite de desacralisation du pelerinage — il marque la fin de l'etat de sacralisation (ihram). L'interdiction de raser avant que l'offrande n'atteigne son lieu est une regle temporelle qui maintient l'etat sacralise jusqu'a l'accomplissement du sacrifice.

Le mot **ru'usakum** est un nom pluriel avec pronom suffixe 2MP de la racine r-'-s. Le Lane's donne : tete, sommet, extremite superieure, chef, principal. Le pluriel « vos tetes » designe la tete physique de chaque pelerin — c'est le lieu du rasage rituel.

Le verbe **yablugha** est un inaccompli 3MS de la racine b-l-gh. Le Lane's donne : atteindre, parvenir a, arriver a destination, accomplir. Le sens est spatial et temporel — l'offrande doit atteindre physiquement le lieu designe pour le sacrifice. Le verbe est a l'inaccompli apres « hatta » (jusqu'a ce que), marquant une action en cours qui n'est pas encore accomplie.

Le nom **mahillahu** est un nom de lieu de la racine h-l-l avec pronom suffixe 3MS. Le Lane's donne : lieu ou quelque chose devient licite, lieu de desacralisation, lieu d'immolation. Le mahall est le lieu ou l'offrande atteint sa destination et ou le sacrifice devient licite — le lieu ou l'interdit de l'ihram prend fin. La racine h-l-l porte l'idee de licite/permis (halal), et le mahall est le lieu ou la chose devient licite.

Le verbe **kana** est un accompli 3MS de la racine k-w-n. Le Lane's donne : etre, exister, devenir, se trouver dans un etat. La construction « fa-man kana minkum maridan » (quiconque d'entre vous est malade) ouvre une deuxieme clause d'exception — apres l'empechement total (uhsirtum), le verset traite le cas de l'empechement partiel (maladie ou souffrance de la tete).

Le nom **maridan** est un adjectif accusatif indefini de la racine m-r-d. Le Lane's donne : malade, souffrant, affaibli, atteint d'un mal. Le malade est celui dont le corps est affaibli par un mal — dans le contexte du pelerinage, la maladie empeche de maintenir l'etat de sacralisation (ne pas raser) et ouvre droit a un rachat.

Le nom **adhan** est un nom accusatif indefini de la racine '-dh-y. Le Lane's donne : nuisance, souffrance, tort, gene, desagrement. Le mot designe toute souffrance ou gene — dans le verset, c'est la souffrance de la tete (min ra'sihi) qui empeche de maintenir la chevelure intacte pendant l'ihram. L'indefini (adhan = une souffrance) laisse la qualification ouverte — toute souffrance de la tete justifie le rachat.

Le nom **ra'sihi** est un nom avec pronom suffixe 3MS de la racine r-'-s. Le Lane's donne : tete, sommet, extremite superieure. Ici la tete est le lieu de la souffrance — une affection du cuir chevelu, des poux, ou toute gene qui rend le maintien de la chevelure penible.

Le nom **fidyatun** est un nom nominatif indefini de la racine f-d-y. Le Lane's donne : rancon, rachat, ce qu'on donne pour liberer quelqu'un ou se liberer d'une obligation. La fidya est un acte compensatoire — le pelerin malade se libere de l'obligation de ne pas raser en offrant une compensation. Le nominatif marque le sujet de la phrase nominale : « alors un rachat ».

Le nom **siyamin** est un nom genitif indefini de la racine s-w-m. Le Lane's donne : s'abstenir, cesser, jeune, abstention de nourriture et de boisson du lever au coucher du soleil. Le sawm est l'acte de cesser — cesser de manger, de boire, de toute activite qui rompt le jeune. C'est une premiere option de rachat pour le pelerin malade.

Le nom **sadaqatin** est un nom genitif indefini de la racine s-d-q. Le Lane's donne : verite, sincerite, aumone, don fait avec sincerite, charite. La sadaqa est le don sincere — le mot partage la racine de sidq (verite) car l'aumone est la preuve materielle de la sincerite de la foi. C'est la deuxieme option de rachat.

Le nom **nusukin** est un nom genitif indefini de la racine n-s-k. Le Lane's donne : devotion, sacrifice, rite, acte de culte, offrande sacrificielle. Le nusuk est l'acte de sacrifice ou de devotion rituelle — ici c'est la troisieme option de rachat : offrir un sacrifice animal. Le Lane's precise que le nusuk peut designer specifiquement l'immolation d'une bete.

Le verbe **amintum** est un accompli 2MP de la racine '-m-n. Le Lane's donne : etre en securite, etre en surete, ne plus craindre. La construction « fa-idha amintum » (puis quand vous etes en securite) marque la fin de la situation d'empechement. Les pelerins sont desormais libres et en securite — les clauses d'exception ne s'appliquent plus, les regles normales reprennent.

Le verbe **tamatta'a** est un accompli 3MS de la forme V de la racine m-t-'. Le Lane's donne pour la forme V : jouir, profiter, tirer avantage, vivre en jouissant d'un bien. Le tamattou' dans le contexte du pelerinage est le fait de profiter de la periode entre la umra et le hajj — le pelerin se desacralise apres la umra et vit normalement jusqu'au hajj. C'est un type specifique de pelerinage (hajj tamattu') ou le pelerin combine umra et hajj avec une periode de jouissance entre les deux.

Le verbe **yajid** est un inaccompli 3MS de la racine w-j-d avec negation (lam yajid = ne trouve pas). Le Lane's donne : trouver, decouvrir, rencontrer, posseder. La construction « fa-man lam yajid » (quiconque ne trouve pas) designe celui qui n'a pas les moyens d'offrir un sacrifice — il ne trouve pas de bete a sacrifier, soit par pauvrete soit par indisponibilite.

Le nom **siyamu** est un nom nominatif de la racine s-w-m. Meme racine que siyamin plus haut — le jeune est la compensation pour celui qui ne peut pas offrir de sacrifice. Le nominatif marque le sujet de la phrase nominale : « alors un jeune de trois jours ».

Le nom **thalathati** est un nom de la racine th-l-th. Le Lane's donne : trois, le nombre trois. Le nombre est en idafa (construct state) avec ayyamin (jours) — trois jours de jeune pendant le pelerinage.

Le nom **ayyamin** est un nom genitif pluriel de la racine y-w-m. Le Lane's donne : jour, journee, periode, temps. Les jours sont la mesure du jeune — trois jours pendant le hajj et sept au retour.

Le nom **sab'atin** est un nom de la racine s-b-'. Le Lane's donne : sept, le nombre sept. Sept jours de jeune apres le retour chez soi. Le total est dix jours — trois pendant le pelerinage et sept au retour.

Le verbe **raja'tum** est un accompli 2MP de la racine r-j-'. Le Lane's donne : revenir, retourner, rentrer. Le retour est le moment ou les sept jours de jeune supplementaires commencent — quand les pelerins sont rentres chez eux.

Le nom **'asharatun** est un nom de la racine '-sh-r. Le Lane's donne : dix, le nombre dix, une dizaine. Le verset precise le total pour lever toute ambiguite : trois plus sept font dix. Le demonstratif « tilka » (voila) introduit cette precision recapitulative.

Le adjectif **kamilatun** est un adjectif nominatif de la racine k-m-l. Le Lane's donne : complet, parfait, acheve, entier. L'adjectif confirme que les dix jours sont un tout complet — rien de plus n'est requis. La completude indique que le jeune de dix jours est une compensation pleine et suffisante pour remplacer le sacrifice.

Le verbe **yakun** est un inaccompli 3MS de la racine k-w-n avec negation (lam yakun = n'est pas). La construction « dhalika li-man lam yakun ahluhu hadiri l-masjidi l-harami » designe ceux dont la famille ne reside pas pres de la Mosquee sacree — les pelerins venus de loin, pas les residents de La Mecque.

Le nom **ahluhu** est un nom avec pronom suffixe 3MS de la racine '-h-l. Le Lane's donne : famille, gens d'un lieu, habitants, ceux qui appartiennent a un lieu ou a une personne. La famille du pelerin est le critere geographique — si sa famille habite pres de la Mosquee sacree, les regles du tamattou' ne s'appliquent pas a lui.

Le nom **hadiri** est un participe actif genitif pluriel de la racine h-d-r. Le Lane's donne : etre present, resider, habiter. Les hadiri sont ceux qui resident pres de la Mosquee sacree — les habitants de La Mecque et ses environs. Le participe actif marque une presence continue et habituelle — ce sont des residents permanents, pas des visiteurs temporaires.

Le nom **al-masjidi** est un nom defini genitif de la racine s-j-d. Le Lane's donne : lieu de prosternation, mosquee, lieu de culte. Le masjid est etymologiquement le lieu ou l'on se prosterne (sajada = se prosterner). L'article al- et la qualification « al-haram » (le sacre) designent specifiquement la Mosquee de La Mecque.

Le nom **al-harami** est un nom defini genitif de la racine h-r-m. Le Lane's donne : sacre, interdit, inviolable, ce qui est protege par un tabou. Le haram est ce qui est a la fois sacre et interdit — le lieu sacre est un lieu ou certains actes sont interdits. La Mosquee sacree est un lieu protege par une inviolabilite divine.

Le verbe **ittaqu** est un imperatif 2MP de la forme VIII de la racine w-q-y. Le Lane's donne : se premunir, se proteger, prendre garde, placer un bouclier entre soi et ce qu'on craint. L'imperatif « ittaqu Llaha » (premunissez-vous de Dieu) est une injonction qui ferme la section legislative. Se premunir de Dieu, c'est placer une protection entre soi et les consequences de la desobeissance.

Le nom **Allaha** (p84, p87) est le nom defini de la racine '-l-h. Le Lane's donne : divinite, ce qui est adore, Dieu. Le nom Allah est mentionne trois fois dans le verset : une fois comme destinataire du pelerinage (li-Llahi = pour Dieu), une fois comme objet de la premunition (ittaqu Llaha), et une fois dans la clause finale (anna Llaha = que Dieu).

Le verbe **i'lamu** est un imperatif 2MP de la racine '-l-m. Le Lane's donne : savoir, connaitre, apprendre, etre informe. L'imperatif « wa-'lamu » (et sachez) introduit la conclusion du verset — un avertissement qui rappelle les consequences de la desobeissance.

Le adjectif **shadidu** est un adjectif de la racine sh-d-d en idafa. Le Lane's donne : severe, fort, intense, rigoureux, dur. La severite est une intensite — Dieu est intense/severe dans la consequence. L'adjectif est en idafa avec al-'iqab (la consequence), formant « severe en consequence ».

Le nom **al-'iqabi** est un nom defini genitif de la racine '-q-b. Le Lane's donne : consequence, suite, ce qui vient apres, talonnement, chatiment. La racine '-q-b porte l'idee de ce qui suit — le 'iqab est ce qui vient apres un acte, sa consequence naturelle. Le mot est souvent traduit par « chatiment » ou « punition », mais l'etymologie pointe vers la consequence — ce qui talonne l'acte et le suit inevitablement. La consequence est le resultat naturel de la desobeissance, pas une punition arbitraire.

§JUSTIFICATION§
**accomplissez** — Le sens retenu est « accomplir/parfaire ». Le verbe atimmu a la forme IV marque l'accomplissement complet. L'alternative « terminer » est ecartee car elle implique juste la fin, alors que la forme IV insiste sur la perfection de l'acte du debut a la fin.

**le pelerinage** — Le sens retenu est « pelerinage/se diriger vers ». Le mot al-hajja designe l'institution connue du pelerinage. L'alternative « argumentation/preuve » est ecartee car le contexte est rituel — le complement « pour Dieu » confirme qu'il s'agit d'un acte de devotion, pas d'une argumentation.

**la visite** — Le sens retenu est « visite/frequentation ». Le mot al-umrata designe la visite de la Maison sacree. Le mot « visite » est prefere a « umra » (translitteration) car il est plus accessible en francais courant. L'alternative « vie/duree » est ecartee car le contexte rituel impose le sens de visite pieuse.

**empeches** — Le sens retenu est « empecher/confiner ». Le verbe uhsirtum au passif designe un empechement subi. L'alternative « regretter » est ecartee car la racine h-s-r au sens de regret est une racine differente — ici le contexte est l'obstacle physique au pelerinage.

**ce qui est facile** — Le sens retenu est « facilite/aisance ». Le verbe istaysara a la forme X designe ce qui est a portee. L'alternative « cote gauche » est ecartee car elle releve d'un sens physique sans rapport avec le contexte.

**l'offrande** — Le sens retenu est « offrande/ce qu'on conduit ». Le mot al-hadyi designe l'animal sacrificiel. Bien que la racine h-d-y soit surtout connue pour « guidance », dans le contexte du pelerinage le hady est ce qu'on conduit (guide) vers le lieu de sacrifice. Le mot « offrande » est prefere a « sacrifice » car le texte ne dit pas encore qu'on immole — on conduit l'animal vers son lieu.

**ne rasez pas** — Le sens retenu est « raser/tondre ». Le verbe tahliquu designe le rasage de la tete. Aucune alternative pertinente — le sens est univoque dans ce contexte rituel.

**vos tetes** — Le sens retenu est « tete/sommet ». Le mot ru'usakum designe la tete physique. L'alternative « chef/principal » est ecartee car le contexte est corporel — il s'agit du rasage des cheveux.

**atteigne** — Le sens retenu est « atteindre/parvenir ». Le verbe yablugha designe l'arrivee a destination. L'alternative « transmettre un message » est ecartee car le sujet est l'offrande qui atteint un lieu, pas un message qu'on transmet.

**son lieu de licite** — Le sens retenu est « lieu ou la chose devient licite ». Le mot mahillahu designe le lieu de desacralisation. L'alternative « permission generale » est ecartee car le mot est un nom de lieu (mahall = lieu de hall) specifique au contexte rituel.

**malade** — Le sens retenu est « malade/souffrant ». Le mot maridan designe l'etat de maladie. Aucune alternative pertinente — le sens est univoque.

**souffrance** — Le sens retenu est « nuisance/souffrance ». Le mot adhan designe la gene ou le tort subi. L'alternative « tort moral » est ecartee car le contexte est physique — la souffrance vient de la tete (min ra'sihi).

**sa tete** — Le sens retenu est « tete ». Meme racine que ru'usakum plus haut, mais au singulier avec pronom 3MS — la tete du pelerin malade.

**rachat** — Le sens retenu est « rancon/rachat ». Le mot fidyatun designe la compensation. L'alternative « sacrifice » est ecartee car la fidya est plus large — elle peut etre un jeune, une aumone ou un sacrifice.

**jeune** — Le sens retenu est « jeune/abstention ». Le mot siyam designe l'acte de s'abstenir de manger et boire. L'alternative « cessation » au sens general est ecartee car le contexte rituel impose le sens specifique de jeune.

**aumone** — Le sens retenu est « aumone/don sincere ». Le mot sadaqatin designe le don fait avec sincerite. L'alternative « verite » est ecartee car le contexte est la compensation materielle — on donne quelque chose, on n'enonce pas une verite.

**sacrifice** — Le sens retenu est « sacrifice/rite ». Le mot nusukin designe l'acte sacrificiel. L'alternative « devotion abstraite » est ecartee car le contexte est la liste des compensations materielles — jeune, aumone, sacrifice. Le nusuk ici est concret.

**vous etes en securite** — Le sens retenu est « etre en securite ». Le verbe amintum designe le retour a la securite apres l'empechement. L'alternative « foi/adhesion » est ecartee car le contexte est le retour a la normale apres un obstacle — la securite physique, pas la foi.

**profite** — Le sens retenu est « jouir/profiter ». Le verbe tamatta'a a la forme V designe le fait de profiter de la periode entre la umra et le hajj. L'alternative « provision de voyage » est ecartee car le verbe decrit un etat de jouissance temporaire, pas un approvisionnement.

**ne trouve pas** — Le sens retenu est « trouver/decouvrir ». Le verbe yajid designe le fait de trouver les moyens. L'alternative « existence » est ecartee car le contexte est la possession materielle — trouver ou ne pas trouver de quoi offrir un sacrifice.

**trois** — Le nombre thalathati designe le nombre de jours de jeune pendant le pelerinage.

**jours** — Le mot ayyamin designe les journees du jeune.

**sept** — Le nombre sab'atin designe les jours de jeune au retour.

**vous etes rentres** — Le sens retenu est « revenir/retourner ». Le verbe raja'tum designe le retour chez soi. L'alternative « retracter » est ecartee car le contexte est le voyage de retour du pelerinage.

**dix** — Le nombre 'asharatun recapitule le total des jours de jeune.

**complets** — Le sens retenu est « complet/parfait ». L'adjectif kamilatun confirme que les dix jours forment un tout suffisant. L'alternative « maturite » est ecartee car le contexte est arithmetique — dix jours complets, pas dix jours murs.

**sa famille** — Le sens retenu est « famille/gens d'un lieu ». Le mot ahluhu designe la famille du pelerin. L'alternative « aptitude » est ecartee car le contexte est geographique — ou reside sa famille.

**residents** — Le sens retenu est « etre present/resider ». Le mot hadiri designe ceux qui habitent pres de la Mosquee. L'alternative « civilisation » est ecartee car le contexte est la residence permanente pres d'un lieu precis.

**la Mosquee** — Le sens retenu est « lieu de prosternation ». Le mot al-masjidi designe etymologiquement le lieu ou l'on se prosterne. L'alternative « prosternation » comme acte est ecartee car le mot est un nom de lieu (ma-sjid = lieu de s-j-d).

**sacree** — Le sens retenu est « sacre/inviolable ». Le mot al-harami designe le caractere sacre et protege du lieu. L'alternative « interdit » au sens de peche est ecartee car le haram ici qualifie un lieu — la Mosquee est sacree parce qu'elle est protegee par une inviolabilite, pas parce qu'elle est un peche.

**premunissez-vous** — Le sens retenu est « se premunir/se proteger ». Le verbe ittaqu est un imperatif collectif. L'alternative « craindre » au sens emotionnel est ecartee car le participe actif et l'imperatif marquent une action volontaire et continue — se premunir activement, pas subir passivement la peur.

**Dieu** — Le sens retenu est « divinite ». Le nom Allah designe Dieu. Traduit par « Dieu » en francais courant conformement aux regles.

**sachez** — Le sens retenu est « savoir/connaitre ». Le verbe i'lamu est un imperatif qui introduit un avertissement. L'alternative « marque/signe » est ecartee car le contexte est l'injonction de savoir, pas la designation d'un signe.

**severe** — Le sens retenu est « severe/intense ». L'adjectif shadidu designe l'intensite. L'alternative « force physique » est ecartee car le contexte est l'intensite de la consequence divine, pas la force brute.

**la consequence** — Le sens retenu est « consequence/suite ». Le mot al-'iqabi designe ce qui suit un acte. L'alternative « chatiment » est un glissement interpretatif — la racine '-q-b porte l'idee de « ce qui talonne, ce qui suit », pas de punition deliberee. La consequence est le resultat naturel qui suit la desobeissance, comme l'ombre suit le corps.

§CRITIQUE§
**offrande vs sacrifice** — Les traductions courantes rendent « al-hady » par « sacrifice » ou « offrande sacrificielle ». Notre traduction garde « offrande » car le texte dit al-hady — ce qu'on conduit vers un lieu. Le mot ne dit pas encore qu'on immole — il decrit l'acte de mener l'animal a sa destination. Le mot « sacrifice » anticipe l'immolation que le texte ne mentionne pas explicitement a cet endroit. La nuance est que le texte insiste sur le parcours de l'offrande (la conduire, qu'elle atteigne son lieu), pas sur l'acte d'immolation lui-meme.

**chatiment vs consequence** — Les traductions courantes donnent « dur en chatiment » ou « dur en punition » pour « shadidu l-'iqab ». Le mot 'iqab vient de '-q-b dont le sens premier est « ce qui suit, ce qui vient apres, le talon ». La consequence est ce qui talonne l'acte comme le talon suit le pied — c'est une suite naturelle, pas une punition decidee arbitrairement. Le choix de « chatiment » ou « punition » importe un vocabulaire de justice penale qui transforme une loi naturelle (les actes ont des consequences) en une punition deliberee. Notre traduction « severe en consequence » preserve l'idee que la severite porte sur l'intensite de la suite des actes, pas sur la cruaute d'un chatiment.

**craignez vs premunissez-vous** — Les traductions courantes donnent « craignez Allah » pour « ittaqu Llaha ». Le verbe ittaqu vient de w-q-y (se premunir, placer un bouclier). La racine ne contient pas la peur — elle contient la protection active. « Craignez » reduit un acte volontaire de protection a une emotion passive de peur. « Premunissez-vous de Dieu » garde l'idee de protection active : le croyant place un bouclier entre lui et les consequences de la desobeissance.

**vie normale vs jouissance** — Hamidullah traduit « tamatta'a bi-l-'umrati ila l-hajji » par « a joui d'une vie normale apres avoir fait l'Umra en attendant le pelerinage ». Le verbe tamatta'a (forme V de m-t-') signifie « profiter, jouir » — le pelerin profite de la visite en direction du pelerinage. Notre traduction « profite de la visite jusqu'au pelerinage » est plus litterale : le texte dit bi-l-'umrati (de la visite) ila l-hajji (jusqu'au pelerinage), decrivant une jouissance temporaire entre deux actes rituels.`,
    segments: [
      { fr: "et", phon: "wa", arabic: "\u0648\u064e", is_particle: true, position: 0 },
      { fr: "accomplissez", pos: "verbe", phon: "atimmu", arabic: "\u0623\u064e\u062a\u0650\u0645\u0651\u064f\u0648\u0627\u06df", word_key: "tmm", is_particle: false, sense_retenu: "accomplir", position: 1 },
      { fr: "le pelerinage", pos: "nom", phon: "al-hajja", arabic: "\u0671\u0644\u0652\u062d\u064e\u062c\u0651\u064e", word_key: "hjj", is_particle: false, sense_retenu: "pelerinage", position: 2 },
      { fr: "et", phon: "wa", arabic: "\u0648\u064e", is_particle: true, position: 3 },
      { fr: "la visite", pos: "nom", phon: "al-'umrata", arabic: "\u0671\u0644\u0652\u0639\u064f\u0645\u0652\u0631\u064e\u0629\u064e", word_key: "emr", is_particle: false, sense_retenu: "visite", position: 4 },
      { fr: "pour Dieu", pos: "nom", phon: "li-Llahi", arabic: "\u0644\u0650\u0644\u0651\u064e\u0647\u0650", word_key: "alh", is_particle: false, sense_retenu: "Dieu", position: 5 },
      { fr: "si", phon: "fa-in", arabic: "\u0641\u064e\u0625\u0650\u0646\u0652", is_particle: true, position: 6 },
      { fr: "vous etes empeches", pos: "verbe", phon: "uhsirtum", arabic: "\u0623\u064f\u062d\u0652\u0635\u0650\u0631\u0652\u062a\u064f\u0645\u0652", word_key: "hsr", is_particle: false, sense_retenu: "empecher", position: 7 },
      { fr: "alors", phon: "fa", arabic: "\u0641\u064e", is_particle: true, position: 8 },
      { fr: "ce qui est facile", pos: "verbe", phon: "ma-staysara", arabic: "\u0645\u064e\u0627 \u0671\u0633\u0652\u062a\u064e\u064a\u0652\u0633\u064e\u0631\u064e", word_key: "ysr", is_particle: false, sense_retenu: "facilite", position: 9 },
      { fr: "de", phon: "mina", arabic: "\u0645\u0650\u0646\u064e", is_particle: true, position: 10 },
      { fr: "l'offrande", pos: "nom", phon: "al-hadyi", arabic: "\u0671\u0644\u0652\u0647\u064e\u062f\u0652\u0649\u0650", word_key: "hdy", is_particle: false, sense_retenu: "offrande", position: 11 },
      { fr: "et ne", phon: "wa-la", arabic: "\u0648\u064e\u0644\u064e\u0627", is_particle: true, position: 12 },
      { fr: "rasez", pos: "verbe", phon: "tahliquu", arabic: "\u062a\u064e\u062d\u0652\u0644\u0650\u0642\u064f\u0648\u0627\u06df", word_key: "hlq", is_particle: false, sense_retenu: "raser", position: 13 },
      { fr: "vos tetes", pos: "nom", phon: "ru'usakum", arabic: "\u0631\u064f\u0621\u064f\u0648\u0633\u064e\u0643\u064f\u0645\u0652", word_key: "ras", is_particle: false, sense_retenu: "tete", position: 14 },
      { fr: "jusqu'a ce que", phon: "hatta", arabic: "\u062d\u064e\u062a\u0651\u064e\u0649\u0670", is_particle: true, position: 15 },
      { fr: "atteigne", pos: "verbe", phon: "yablugha", arabic: "\u064a\u064e\u0628\u0652\u0644\u064f\u063a\u064e", word_key: "blgh", is_particle: false, sense_retenu: "atteindre", position: 16 },
      { fr: "l'offrande", pos: "nom", phon: "al-hadyu", arabic: "\u0671\u0644\u0652\u0647\u064e\u062f\u0652\u0649\u064f", word_key: "hdy", is_particle: false, sense_retenu: "offrande", position: 17 },
      { fr: "son lieu de licite", pos: "nom", phon: "mahillahu", arabic: "\u0645\u064e\u062d\u0650\u0644\u0651\u064e\u0647\u064f\u06e5", word_key: "hll", is_particle: false, sense_retenu: "lieu de licite", position: 18 },
      { fr: "quiconque", phon: "fa-man", arabic: "\u0641\u064e\u0645\u064e\u0646", is_particle: true, position: 19 },
      { fr: "est", pos: "verbe", phon: "kana", arabic: "\u0643\u064e\u0627\u0646\u064e", word_key: "kwn", is_particle: false, sense_retenu: "etre", position: 20 },
      { fr: "d'entre vous", phon: "minkum", arabic: "\u0645\u0650\u0646\u0643\u064f\u0645", is_particle: true, position: 21 },
      { fr: "malade", pos: "adjectif", phon: "maridan", arabic: "\u0645\u0651\u064e\u0631\u0650\u064a\u0636\u064b\u0627", word_key: "mrd", is_particle: false, sense_retenu: "malade", position: 22 },
      { fr: "ou", phon: "aw", arabic: "\u0623\u064e\u0648\u0652", is_particle: true, position: 23 },
      { fr: "a", phon: "bihi", arabic: "\u0628\u0650\u0647\u0650\u06e6\u0653", is_particle: true, position: 24 },
      { fr: "une souffrance", pos: "nom", phon: "adhan", arabic: "\u0623\u064e\u0630\u064b\u0649", word_key: "adhy", is_particle: false, sense_retenu: "souffrance", position: 25 },
      { fr: "de", phon: "min", arabic: "\u0645\u0650\u0646", is_particle: true, position: 26 },
      { fr: "sa tete", pos: "nom", phon: "ra'sihi", arabic: "\u0631\u0651\u064e\u0623\u0652\u0633\u0650\u0647\u0650\u06e6", word_key: "ras", is_particle: false, sense_retenu: "tete", position: 27 },
      { fr: "alors un rachat", pos: "nom", phon: "fa-fidyatun", arabic: "\u0641\u064e\u0641\u0650\u062f\u0652\u064a\u064e\u0629\u064c", word_key: "fdy", is_particle: false, sense_retenu: "rachat", position: 28 },
      { fr: "par", phon: "min", arabic: "\u0645\u0650\u0646", is_particle: true, position: 29 },
      { fr: "un jeune", pos: "nom", phon: "siyamin", arabic: "\u0635\u0650\u064a\u064e\u0627\u0645\u064d", word_key: "swm", is_particle: false, sense_retenu: "jeune", position: 30 },
      { fr: "ou", phon: "aw", arabic: "\u0623\u064e\u0648\u0652", is_particle: true, position: 31 },
      { fr: "une aumone", pos: "nom", phon: "sadaqatin", arabic: "\u0635\u064e\u062f\u064e\u0642\u064e\u0629\u064d", word_key: "sdq", is_particle: false, sense_retenu: "aumone", position: 32 },
      { fr: "ou", phon: "aw", arabic: "\u0623\u064e\u0648\u0652", is_particle: true, position: 33 },
      { fr: "un sacrifice", pos: "nom", phon: "nusukin", arabic: "\u0646\u064f\u0633\u064f\u0643\u064d", word_key: "nsk", is_particle: false, sense_retenu: "sacrifice", position: 34 },
      { fr: "puis quand", phon: "fa-idha", arabic: "\u0641\u064e\u0625\u0650\u0630\u064e\u0627\u0653", is_particle: true, position: 35 },
      { fr: "vous etes en securite", pos: "verbe", phon: "amintum", arabic: "\u0623\u064e\u0645\u0650\u0646\u062a\u064f\u0645\u0652", word_key: "amn", is_particle: false, sense_retenu: "securite", position: 36 },
      { fr: "quiconque", phon: "fa-man", arabic: "\u0641\u064e\u0645\u064e\u0646", is_particle: true, position: 37 },
      { fr: "profite", pos: "verbe", phon: "tamatta'a", arabic: "\u062a\u064e\u0645\u064e\u062a\u0651\u064e\u0639\u064e", word_key: "mte", is_particle: false, sense_retenu: "profiter", position: 38 },
      { fr: "de la visite", pos: "nom", phon: "bi-l-'umrati", arabic: "\u0628\u0650\u0671\u0644\u0652\u0639\u064f\u0645\u0652\u0631\u064e\u0629\u0650", word_key: "emr", is_particle: false, sense_retenu: "visite", position: 39 },
      { fr: "jusqu'au", phon: "ila", arabic: "\u0625\u0650\u0644\u064e\u0649", is_particle: true, position: 40 },
      { fr: "pelerinage", pos: "nom", phon: "al-hajji", arabic: "\u0671\u0644\u0652\u062d\u064e\u062c\u0651\u0650", word_key: "hjj", is_particle: false, sense_retenu: "pelerinage", position: 41 },
      { fr: "alors", phon: "fa", arabic: "\u0641\u064e", is_particle: true, position: 42 },
      { fr: "ce qui est facile", pos: "verbe", phon: "ma-staysara", arabic: "\u0645\u064e\u0627 \u0671\u0633\u0652\u062a\u064e\u064a\u0652\u0633\u064e\u0631\u064e", word_key: "ysr", is_particle: false, sense_retenu: "facilite", position: 43 },
      { fr: "de", phon: "mina", arabic: "\u0645\u0650\u0646\u064e", is_particle: true, position: 44 },
      { fr: "l'offrande", pos: "nom", phon: "al-hadyi", arabic: "\u0671\u0644\u0652\u0647\u064e\u062f\u0652\u0649\u0650", word_key: "hdy", is_particle: false, sense_retenu: "offrande", position: 45 },
      { fr: "quiconque", phon: "fa-man", arabic: "\u0641\u064e\u0645\u064e\u0646", is_particle: true, position: 46 },
      { fr: "ne", phon: "lam", arabic: "\u0644\u064e\u0645\u0652", is_particle: true, position: 47 },
      { fr: "trouve pas", pos: "verbe", phon: "yajid", arabic: "\u064a\u064e\u062c\u0650\u062f\u0652", word_key: "wjd", is_particle: false, sense_retenu: "trouver", position: 48 },
      { fr: "alors un jeune de", pos: "nom", phon: "fa-siyamu", arabic: "\u0641\u064e\u0635\u0650\u064a\u064e\u0627\u0645\u064f", word_key: "swm", is_particle: false, sense_retenu: "jeune", position: 49 },
      { fr: "trois", pos: "nom", phon: "thalathati", arabic: "\u062b\u064e\u0644\u064e\u0640\u0670\u062b\u064e\u0629\u0650", word_key: "thlth", is_particle: false, sense_retenu: "trois", position: 50 },
      { fr: "jours", pos: "nom", phon: "ayyamin", arabic: "\u0623\u064e\u064a\u0651\u064e\u0627\u0645\u064d", word_key: "ywm", is_particle: false, sense_retenu: "jour", position: 51 },
      { fr: "pendant", phon: "fi", arabic: "\u0641\u0650\u0649", is_particle: true, position: 52 },
      { fr: "le pelerinage", pos: "nom", phon: "al-hajji", arabic: "\u0671\u0644\u0652\u062d\u064e\u062c\u0651\u0650", word_key: "hjj", is_particle: false, sense_retenu: "pelerinage", position: 53 },
      { fr: "et sept", pos: "nom", phon: "wa-sab'atin", arabic: "\u0648\u064e\u0633\u064e\u0628\u0652\u0639\u064e\u0629\u064d", word_key: "sbe", is_particle: false, sense_retenu: "sept", position: 54 },
      { fr: "quand", phon: "idha", arabic: "\u0625\u0650\u0630\u064e\u0627", is_particle: true, position: 55 },
      { fr: "vous etes rentres", pos: "verbe", phon: "raja'tum", arabic: "\u0631\u064e\u062c\u064e\u0639\u0652\u062a\u064f\u0645\u0652", word_key: "rje", is_particle: false, sense_retenu: "revenir", position: 56 },
      { fr: "voila", phon: "tilka", arabic: "\u062a\u0650\u0644\u0652\u0643\u064e", is_particle: true, position: 57 },
      { fr: "dix", pos: "nom", phon: "'asharatun", arabic: "\u0639\u064e\u0634\u064e\u0631\u064e\u0629\u064c", word_key: "eshr", is_particle: false, sense_retenu: "dix", position: 58 },
      { fr: "complets", pos: "adjectif", phon: "kamilatun", arabic: "\u0643\u064e\u0627\u0645\u0650\u0644\u064e\u0629\u064c", word_key: "kml", is_particle: false, sense_retenu: "complet", position: 59 },
      { fr: "cela", phon: "dhalika", arabic: "\u0630\u064e\u0640\u0670\u0644\u0650\u0643\u064e", is_particle: true, position: 60 },
      { fr: "pour qui", phon: "li-man", arabic: "\u0644\u0650\u0645\u064e\u0646", is_particle: true, position: 61 },
      { fr: "n'est pas", pos: "verbe", phon: "lam yakun", arabic: "\u0644\u064e\u0645\u0652 \u064a\u064e\u0643\u064f\u0646\u0652", word_key: "kwn", is_particle: false, sense_retenu: "etre", position: 62 },
      { fr: "sa famille", pos: "nom", phon: "ahluhu", arabic: "\u0623\u064e\u0647\u0652\u0644\u064f\u0647\u064f\u06e5", word_key: "ahl", is_particle: false, sense_retenu: "famille", position: 63 },
      { fr: "residents de", pos: "nom", phon: "hadiri", arabic: "\u062d\u064e\u0627\u0636\u0650\u0631\u0650\u0649", word_key: "hdr", is_particle: false, sense_retenu: "resider", position: 64 },
      { fr: "la Mosquee", pos: "nom", phon: "al-masjidi", arabic: "\u0671\u0644\u0652\u0645\u064e\u0633\u0652\u062c\u0650\u062f\u0650", word_key: "sjd", is_particle: false, sense_retenu: "lieu de prosternation", position: 65 },
      { fr: "sacree", pos: "nom", phon: "al-harami", arabic: "\u0671\u0644\u0652\u062d\u064e\u0631\u064e\u0627\u0645\u0650", word_key: "hrm", is_particle: false, sense_retenu: "sacre", position: 66 },
      { fr: "et", phon: "wa", arabic: "\u0648\u064e", is_particle: true, position: 67 },
      { fr: "premunissez-vous de", pos: "verbe", phon: "ittaqu", arabic: "\u0671\u062a\u0651\u064e\u0642\u064f\u0648\u0627\u06df", word_key: "wqy", is_particle: false, sense_retenu: "se premunir", position: 68 },
      { fr: "Dieu", pos: "nom", phon: "Allaha", arabic: "\u0671\u0644\u0644\u0651\u064e\u0647\u064e", word_key: "alh", is_particle: false, sense_retenu: "Dieu", position: 69 },
      { fr: "et", phon: "wa", arabic: "\u0648\u064e", is_particle: true, position: 70 },
      { fr: "sachez", pos: "verbe", phon: "i'lamu", arabic: "\u0671\u0639\u0652\u0644\u064e\u0645\u064f\u0648\u0653\u0627\u06df", word_key: "elm", is_particle: false, sense_retenu: "savoir", position: 71 },
      { fr: "que", phon: "anna", arabic: "\u0623\u064e\u0646\u0651\u064e", is_particle: true, position: 72 },
      { fr: "Dieu", pos: "nom", phon: "Allaha", arabic: "\u0671\u0644\u0644\u0651\u064e\u0647\u064e", word_key: "alh", is_particle: false, sense_retenu: "Dieu", position: 73 },
      { fr: "est severe en", pos: "adjectif", phon: "shadidu", arabic: "\u0634\u064e\u062f\u0650\u064a\u062f\u064f", word_key: "shdd", is_particle: false, sense_retenu: "severe", position: 74 },
      { fr: "consequence", pos: "nom", phon: "al-'iqabi", arabic: "\u0671\u0644\u0652\u0639\u0650\u0642\u064e\u0627\u0628\u0650", word_key: "eqb", is_particle: false, sense_retenu: "consequence", position: 75 }
    ],
    words: [
      // tmm pos=1
      {
        word_key: "tmm", position: 1, sense_chosen: "accomplir",
        analysis_axes: {
          sense_chosen: "accomplir",
          concept_chosen: "Achèvement/Perfection",
          concepts: {
            "Achèvement/Perfection": {
              status: "retenu",
              senses: ["achever", "accomplir", "parfaire", "compléter", "mener à terme", "rendre entier"],
              proof_ctx: "Le verbe atimmu est un imperatif 2MP de la forme IV de la racine t-m-m. Le Lane's donne : etre complet, achever, parfaire, mener a terme, rendre entier ce qui etait incomplet. La forme IV (af'ala) ajoute la dimension causative : faire en sorte que la chose soit complete. L'achevement est un acte exterieur et directif — celui qui accomplit mene la chose de son debut a sa fin sans rien omettre. C'est un acte volontaire et continu qui exige de suivre toutes les etapes. Le complement « li-Llahi » (pour Dieu) oriente l'achevement vers Dieu comme destinataire exclusif — la perfection de l'acte est pour Dieu. Le champ lexical du verset (pelerinage, visite, offrande, jeune, aumone, sacrifice) montre que l'achevement porte sur un ensemble complexe de rites que le pelerin doit accomplir dans leur integralite. Le contexte des versets voisins (2:189-203) traite du pelerinage et de ses regles — l'achevement est le principe directeur de cette section. La sourate al-Baqarah pose les fondements legislatifs de l'islam, et l'imperatif atimmu inscrit le pelerinage parmi les obligations a mener a perfection. Dans le Coran, la racine t-m-m apparait en 2:187 « puis accomplissez le jeune jusqu'a la nuit » — le meme principe d'achevement integral s'applique au jeune comme au pelerinage. En 5:3, « aujourd'hui J'ai acheve (akmaltou) pour vous votre religion » utilise une racine synonyme (k-m-l) pour l'achevement divin de la religion. Pour la mission du khalifa, l'achevement est la discipline de la mission — le khalifa ne fait pas les choses a moitie mais les accomplit integralement, que ce soit le culte ou la justice sociale.",
              axe1_verset: "Le verbe atimmu ouvre le verset en posant le principe directeur : accomplir integralement. Le champ lexical (pelerinage, visite, Dieu) montre que l'achevement porte sur deux actes rituels majeurs. L'imperatif collectif s'adresse a tous les croyants sans exception. La forme IV insiste sur la perfection de l'acte — il ne suffit pas de commencer le pelerinage, il faut le mener a son terme avec tous ses rites. Le complement « pour Dieu » exclut toute motivation autre que la devotion — le pelerinage n'est pas un voyage touristique ou commercial.",
              axe2_voisins: "Le verset 2:189 parlait des nouvelles lunes comme reperes temporels pour le pelerinage. Le verset 2:194 evoquait le mois sacre et le respect des choses sacrees. Le verset 2:196 developpe les regles du pelerinage lui-meme — l'achevement est la premiere regle posee. Les versets suivants (197-203) detailleront le comportement pendant le pelerinage. L'imperatif atimmu lance la section normative qui structure toute la pratique du pelerinage.",
              axe3_sourate: "La racine t-m-m apparait dans la sourate al-Baqarah en 2:150 « pour que J'acheve Mon bienfait sur vous » et en 2:187 « puis accomplissez le jeune ». La sourate utilise l'achevement comme un principe recurrent — Dieu acheve Son bienfait, les croyants achevent leurs obligations. L'achevement est reciproque : Dieu parfait Sa guidance et les croyants parfont leurs rites.",
              axe4_coherence: "La racine t-m-m apparait environ 12 fois dans le Coran. En 2:187, l'achevement porte sur le jeune. En 2:196, il porte sur le pelerinage et la visite. En 6:115, « la parole de ton Seigneur s'est accomplie en verite et en justice ». Le Coran lie l'achevement a l'integralite — accomplir c'est ne rien omettre, c'est mener la chose a sa perfection. Chaque obligation divine doit etre menee a terme sans raccourci.",
              axe5_frequence: "Pour la mission du khalifa, l'achevement est la discipline fondamentale. Le khalifa ne commence pas une tache pour l'abandonner — il la mene a son terme. Le pelerinage est un acte qui exige un engagement total : le deplacement, les rites, les sacrifices, le jeune. L'achevement de cet acte complexe est un entrainement a l'achevement de la mission elle-meme — gouverner la terre avec justice exige la meme perseverance que mener le pelerinage a sa perfection."
            }
          }
        }
      },
      // hjj pos=2 (al-hajja)
      {
        word_key: "hjj", position: 2, sense_chosen: "pelerinage",
        analysis_axes: {
          sense_chosen: "pelerinage",
          concept_chosen: "Pèlerinage/Preuve",
          concepts: {
            "Pèlerinage/Preuve": {
              status: "retenu",
              senses: ["pèlerinage", "se diriger vers", "argument", "preuve", "visite d'un lieu sacré"],
              proof_ctx: "Le nom al-hajja est un nom defini accusatif singulier de la racine h-j-j. Le Lane's donne : se diriger vers, pelerinage, visite d'un lieu sacre, argument, preuve, intention de visiter. Le hajj est l'acte de se diriger vers un lieu avec intention determinee — dans le contexte coranique, c'est le pelerinage a la Maison sacree de La Mecque. L'article al- definit le pelerinage comme l'institution connue. L'accusatif marque l'objet direct de atimmu (accomplissez le pelerinage). Le pelerinage est un acte exterieur et collectif — il implique un deplacement physique vers un lieu sacre avec des rites a accomplir. La racine porte aussi le sens de preuve/argument, mais dans le contexte rituel du verset, c'est le sens de pelerinage qui s'impose par le champ lexical (visite, offrande, rasage, sacrifice). Le champ lexical du verset est entierement rituel — le pelerinage est le cadre de toutes les regles qui suivent. Les versets voisins (2:189-203) forment un bloc entierement consacre au pelerinage. La sourate al-Baqarah traite du pelerinage comme un des piliers legislatifs. Dans le Coran, la racine h-j-j apparait en 3:97 « le pelerinage de la Maison est un devoir envers Dieu pour quiconque en a la capacite ». Pour la mission du khalifa, le pelerinage est le rassemblement universel ou les croyants de toutes origines se retrouvent dans l'egalite — chacun porte le meme vetement, accomplit les memes rites.",
              axe1_verset: "Le mot al-hajja est l'objet premier de l'accomplissement. Le champ lexical (accomplir, visite, Dieu, offrande) montre que le pelerinage est le cadre normatif de tout le verset. Toutes les regles qui suivent (empechement, offrande, rasage, rachat, jeune) sont des cas de figure du pelerinage. Le pelerinage defini (al-hajja) designe l'institution etablie, pas un voyage quelconque.",
              axe2_voisins: "Les versets 2:189-203 forment la section du pelerinage dans la sourate. Le verset 2:196 est le coeur normatif de cette section — il pose les regles concretes. Le verset 2:197 ajoutera « le pelerinage a lieu dans des mois connus ». Le verset 2:198 permettra le commerce pendant le pelerinage. Le pelerinage est le sujet central de tout ce passage.",
              axe3_sourate: "La racine h-j-j apparait dans la sourate al-Baqarah en 2:158 (le parcours entre Safa et Marwa pour « quiconque fait le pelerinage »), en 2:189 (les nouvelles lunes comme reperes du pelerinage), en 2:196-203 (les regles detaillees). La sourate developpe le pelerinage progressivement — d'abord le cadre general, puis les regles specifiques.",
              axe4_coherence: "La racine h-j-j apparait environ 33 fois dans le Coran. En 3:97, le pelerinage est declare obligatoire pour ceux qui en ont la capacite. En 22:27, Abraham est charge d'annoncer le pelerinage aux gens. Le Coran presente le pelerinage comme une institution remontant a Abraham, pas une innovation — c'est une continuite historique.",
              axe5_frequence: "Pour la mission du khalifa, le pelerinage est le rassemblement universel. Les pelerins viennent de partout, portent le meme vetement, accomplissent les memes rites — le pelerinage est l'image de l'egalite que le khalifa doit realiser dans la societe. L'accomplissement du pelerinage est un exercice de discipline collective qui prepare le khalifa a sa mission de justice."
            }
          }
        }
      },
      // emr pos=4 (al-'umrata)
      {
        word_key: "emr", position: 4, sense_chosen: "visite",
        analysis_axes: {
          sense_chosen: "visite",
          concept_chosen: "Vie/Durée",
          concepts: {
            "Vie/Durée": {
              status: "retenu",
              senses: ["vie", "durée", "visite", "fréquentation d'un lieu", "habiter", "peupler", "umra"],
              proof_ctx: "Le nom al-umrata est un nom defini accusatif singulier de la racine '-m-r. Le Lane's donne : vivre, durer, habiter un lieu, le peupler, le frequenter, le visiter. La umra est etymologiquement la frequentation d'un lieu — l'acte de visiter et de peupler un espace. Dans le contexte coranique, la umra est la visite de la Maison sacree en dehors de la periode du hajj. La racine porte l'idee de vie et de duree — frequenter un lieu c'est lui donner vie, le peupler de sa presence. Le sens de « visite » est retenu car le contexte rituel impose la visite de la Maison sacree. Le champ lexical (accomplir, pelerinage, Dieu) montre que la visite est un acte de devotion coordinate au pelerinage. La distinction avec le pelerinage (hajj) est que la visite est plus courte et sans contrainte de periode — le pelerinage a lieu dans des mois precis, la visite peut se faire a tout moment. Les versets voisins confirment le contexte rituel. Le Coran utilise la racine '-m-r en 9:18 « seuls peuplent les mosquees de Dieu ceux qui croient » — le sens de frequenter/peupler est le meme fondement semantique. Pour la mission du khalifa, la visite de la Maison sacree est un acte de frequentation qui donne vie au lieu sacre par la presence des croyants.",
              axe1_verset: "Le mot al-umrata est coordonne au hajj par « wa » — les deux actes sont places sur le meme plan d'obligation. Le champ lexical (accomplir, pelerinage, Dieu) montre que la visite partage le meme cadre normatif. Le complement « pour Dieu » couvre aussi bien la visite que le pelerinage. Le verset traite les deux actes comme un ensemble a accomplir integralement.",
              axe2_voisins: "Le verset 2:158 mentionnait le parcours entre Safa et Marwa « pour quiconque fait le pelerinage de la Maison ou la visite ». Le verset 2:196 reprend les deux termes en imposant leur accomplissement. Les versets voisins montrent que hajj et umra sont les deux formes de visite de la Maison sacree — l'une longue et periodique, l'autre courte et libre.",
              axe3_sourate: "La racine '-m-r apparait dans la sourate en 2:158 (la visite de la Maison). La sourate al-Baqarah traite de la visite comme un acte rituel institue. En 9:19, « faites-vous de l'abreuvement des pelerins et de la frequentation (imarat) de la Mosquee sacree l'egal de celui qui croit ? » — la racine '-m-r est liee a la frequentation de la Mosquee.",
              axe4_coherence: "La racine '-m-r apparait dans le Coran pour designer la vie, la duree et la frequentation d'un lieu. En 2:196, c'est specifiquement la visite rituelle. En 9:17-18, ceux qui « peuplent les mosquees » sont ceux qui croient. Le Coran lie la frequentation des lieux sacres a la foi — visiter la Maison sacree est un acte de foi concretise par le deplacement.",
              axe5_frequence: "Pour la mission du khalifa, la visite est un acte de frequentation qui donne vie aux lieux sacres. Le khalifa ne se contente pas d'habiter la terre — il la peuple, il la visite, il lui donne vie par sa presence active. La umra est une expression de cette mission : frequenter la Maison sacree, c'est reconnecter avec le centre spirituel de la mission."
            }
          }
        }
      },
      // alh pos=5 (li-Llahi)
      {
        word_key: "alh", position: 5, sense_chosen: "Dieu",
        analysis_axes: {
          sense_chosen: "Dieu",
          concept_chosen: "Divinité",
          concepts: {
            "Divinité": {
              status: "retenu",
              senses: ["divinité", "Dieu", "ce qui est adoré", "être suprême"],
              proof_ctx: "Le nom Allah est un nom propre defini de la racine '-l-h. Le Lane's donne pour ilah : divinite, ce qui est adore, ce vers quoi on se tourne avec devotion. Le nom Allah est le nom propre de Dieu en arabe, utilise par les arabophones de toutes confessions. Dans le verset, « li-Llahi » (pour Dieu) indique le destinataire exclusif du pelerinage et de la visite — ces actes sont pour Dieu seul. Le sens est univoque dans ce contexte — il n'y a pas d'alternative pertinente. Le mot apparait trois fois dans le verset a des positions differentes (p5, p69, p73), chaque fois avec une fonction grammaticale differente : destinataire (li-Llahi), objet de premunition (ittaqu Llaha), sujet de la clause finale (anna Llaha).",
              axe1_verset: "Le mot Dieu apparait comme destinataire du pelerinage — « accomplissez pour Dieu ». Le complement li-Llahi oriente exclusivement l'acte vers Dieu, excluant tout autre motif.",
              axe2_voisins: "Les versets voisins mentionnent Dieu a plusieurs reprises comme le legislateur et le destinataire des actes rituels. Le verset 2:194 « premunissez-vous de Dieu ». Le verset 2:196 repete cette injonction. Dieu est omnipresent dans la section du pelerinage.",
              axe3_sourate: "La racine '-l-h est la plus frequente de la sourate. Dieu est le legislateur, le destinataire du culte, et la source des consequences. Le verset 2:196 illustre ces trois fonctions : Dieu recoit le pelerinage, commande la premunition, et est severe en consequence.",
              axe4_coherence: "Le nom Allah apparait plus de 2600 fois dans le Coran. Il est le centre de gravite de chaque verset legislatif. La mention de Dieu dans un contexte rituel rappelle que les rites ne sont pas des coutumes humaines mais des obligations divines.",
              axe5_frequence: "Pour la mission du khalifa, Dieu est le mandataire de la mission. Le pelerinage « pour Dieu » rappelle que la mission du khalifa n'est pas pour lui-meme mais pour Dieu — toute action du khalifa a Dieu comme destinataire ultime."
            }
          }
        }
      },
      // hsr pos=7 (uhsirtum)
      {
        word_key: "hsr", position: 7, sense_chosen: "empecher",
        analysis_axes: {
          sense_chosen: "empecher",
          concept_chosen: "Empêchement/Confinement",
          concepts: {
            "Empêchement/Confinement": {
              status: "retenu",
              senses: ["empêcher", "confiner", "assiéger", "bloquer", "retenir", "enfermer"],
              proof_ctx: "Le verbe uhsirtum est un accompli passif 2MP de la racine h-s-r. Le Lane's donne : empecher, confiner, assieger, retenir quelqu'un de faire quelque chose, bloquer l'acces. Le ihsar est l'empechement d'accomplir un acte rituel par un obstacle exterieur — maladie, ennemi, obstacle naturel. Le passif (uhsirtum = vous etes empeches) indique que la contrainte vient de l'exterieur — les pelerins ne choisissent pas de s'arreter, ils sont bloques par une force qui les depasse. L'empechement est un etat subi, involontaire et contraint — celui qui est empoche n'a pas de choix. La clause « fa-in uhsirtum » ouvre la premiere exception du verset : si l'accomplissement complet est impossible, une alternative est prevue. Le champ lexical (accomplir, pelerinage, visite) montre que l'empechement porte sur les rites — le pelerin veut accomplir mais ne peut pas. Les versets voisins ne precisent pas la nature de l'empechement — le texte reste ouvert a toute cause (maladie, ennemi, obstacle). La sourate al-Baqarah pose des regles pratiques qui anticipent les difficultes — l'empechement est la premiere difficulte traitee. En 2:273, la racine h-s-r designe ceux qui sont « confines dans la voie de Dieu et ne peuvent pas circuler dans le pays » — le meme sens d'empechement physique. Pour la mission du khalifa, l'empechement est un obstacle a la mission que le khalifa doit surmonter ou compenser — la legislation prevoit des alternatives pour que la mission ne s'arrete pas.",
              axe1_verset: "Le verbe uhsirtum ouvre la clause d'exception. Le champ lexical (accomplir, pelerinage, visite, offrande) montre que l'empechement est un obstacle a l'accomplissement complet. La reponse a l'empechement est « ce qui est facile comme offrande » — une compensation proportionnee aux moyens du pelerin. Le passif indique que l'empechement est subi et non voulu.",
              axe2_voisins: "Le verset 2:195 interdisait de « se jeter dans la destruction ». Le verset 2:196 traite de l'empechement au pelerinage — le pelerin empoche n'est pas en destruction mais dans une situation prevue par la loi. Les versets voisins montrent que la legislation anticipe les obstacles et les compense.",
              axe3_sourate: "La racine h-s-r apparait en 2:273 pour decrire ceux qui sont confines dans la voie de Dieu. En 2:196, le confinement est applique au pelerinage. La sourate utilise h-s-r pour l'empechement physique qui empeche d'accomplir une mission — que ce soit le jihad (2:273) ou le pelerinage (2:196).",
              axe4_coherence: "La racine h-s-r apparait environ 12 fois dans le Coran. En 2:196, c'est l'empechement du pelerinage. En 2:273, c'est le confinement des combattants. En 17:100, les hommes sont decrits comme « confines/restreints ». Le Coran utilise h-s-r pour toute situation ou quelqu'un est empoche d'agir par une force exterieure.",
              axe5_frequence: "Pour la mission du khalifa, l'empechement est un obstacle a surmonter. Le khalifa rencontre des obstacles dans sa mission — la legislation divine prevoit des compensations pour que l'obstacle ne mette pas fin a la mission. L'empechement n'est pas un echec mais une circonstance que la loi divine a anticipee."
            },
            "Regret/Désolation": {
              status: "nul",
              senses: ["regretter", "être désolé", "se lamenter"],
              proof_ctx: "Le sens de regret est atteste pour une racine h-s-r differente (hasira = regretter). Mais dans le verset 2:196, le contexte est l'empechement physique au pelerinage — le passif uhsirtum designe un blocage subi, pas un sentiment de regret. Le champ lexical (accomplir, offrande) confirme que c'est un empechement concret qui appelle une compensation materielle, pas un etat emotionnel."
            }
          }
        }
      },
      // ysr pos=9 (istaysara)
      {
        word_key: "ysr", position: 9, sense_chosen: "facilite",
        analysis_axes: {
          sense_chosen: "facilite",
          concept_chosen: "Facilité/Aisance",
          concepts: {
            "Facilité/Aisance": {
              status: "retenu",
              senses: ["facilité", "aisance", "ce qui est facile", "ce qui est à portée", "abondance", "richesse"],
              proof_ctx: "Le verbe istaysara est un accompli de la forme X de la racine y-s-r. Le Lane's donne : etre facile, aise, abondant, a portee. La forme X (istaf'ala) ajoute l'idee de chercher ou trouver la qualite — istaysara signifie « ce qui se trouve etre facile, ce qui est a portee ». La facilite est un etat de ce qui est accessible sans contrainte excessive — ce qui est facile n'exige pas d'effort disproportionne. Dans le verset, « ma staysara mina l-hadyi » designe l'offrande que le pelerin peut se permettre — ce qui est a sa portee financiere. La legislation divine ne demande pas l'impossible — elle demande ce qui est facile. Le champ lexical (empeche, offrande) montre que la facilite est la reponse a l'empechement : si tu ne peux pas accomplir le pelerinage complet, offre ce que tu peux. Les versets voisins confirment le principe de facilite : en 2:185, « Dieu veut pour vous la facilite et ne veut pas pour vous la difficulte ». La sourate pose la facilite comme un principe legislatif fondamental. Pour la mission du khalifa, la facilite est un principe de gouvernance — la loi divine est applicable parce qu'elle est proportionnee aux capacites de chacun.",
              axe1_verset: "Le verbe istaysara designe la proportion de l'offrande aux moyens du pelerin. Le champ lexical (empoche, offrande) montre que la facilite est la mesure de la compensation — pas plus que ce que le pelerin peut. La construction « ma staysara » (ce qui est facile) est relative — chacun offre selon ses moyens, il n'y a pas de minimum impose.",
              axe2_voisins: "Le verset 2:185 posait le principe : « Dieu veut pour vous la facilite ». Le verset 2:196 applique ce principe au pelerinage — si l'accomplissement est impossible, la compensation est proportionnee. Les versets voisins montrent que la legislation coranique est construite sur la facilite, pas sur la rigueur excessive.",
              axe3_sourate: "La racine y-s-r apparait dans la sourate al-Baqarah en 2:185 (Dieu veut la facilite) et en 2:196 (ce qui est facile comme offrande). La sourate construit la facilite comme un principe legislatif — chaque obligation est assortie d'une clause de facilitation pour ceux qui sont dans la difficulte.",
              axe4_coherence: "La racine y-s-r apparait environ 39 fois dans le Coran. En 2:185, la facilite est voulue par Dieu. En 65:7, « Dieu n'impose a personne que selon ce qu'Il lui a donne ». En 92:7, « Nous lui faciliterons la voie facile ». Le Coran presente la facilite comme une intention divine constante — la legislation est toujours proportionnee aux capacites.",
              axe5_frequence: "Pour la mission du khalifa, la facilite est un principe de justice. Le khalifa ne charge pas les gens au-dela de leurs capacites — il facilite l'obeissance en la rendant proportionnee. La facilite du pelerinage est un modele de gouvernance : demander aux gens ce qu'ils peuvent donner, pas ce qui les ecrase."
            },
            "Sens isolé/Côté": {
              status: "nul",
              senses: ["côté gauche", "direction", "sens"],
              proof_ctx: "Le sens de cote ou direction est un sens physique atteste pour la racine y-s-r (le cote gauche est al-yasar). Mais dans le verset, la forme X istaysara et le contexte d'offrande compensatoire eliminent ce sens — il ne s'agit pas d'un cote physique mais de la facilite d'acces a une offrande."
            }
          }
        }
      },
      // hdy pos=11 (al-hadyi — premiere occurrence)
      {
        word_key: "hdy", position: 11, sense_chosen: "offrande",
        analysis_axes: {
          sense_chosen: "offrande",
          concept_chosen: "Guidance/Direction",
          concepts: {
            "Guidance/Direction": {
              status: "retenu",
              senses: ["guider", "diriger", "conduire", "offrir", "mener", "hady (offrande)", "guidance"],
              proof_ctx: "Le nom al-hadyi est un nom defini de la racine h-d-y. Le Lane's donne deux champs semantiques principaux : (1) guider, diriger, montrer le chemin, conduire ; (2) ce qu'on conduit au lieu de sacrifice, l'offrande sacrificielle, l'animal mene au lieu d'immolation. Le lien entre les deux est l'acte de conduire/mener — le hady est ce qu'on conduit (guide, mene) vers le lieu sacre pour l'offrir. Le sens d'offrande est retenu dans ce verset car le contexte est entierement rituel : le pelerin offre un animal qu'il conduit au lieu de sacrifice. Le champ lexical (pelerinage, empeche, rasage, lieu de licite) est celui du rituel du pelerinage ou le hady est l'animal sacrificiel. L'article al- definit l'offrande comme l'institution connue du pelerinage. La construction « ma staysara mina l-hadyi » (ce qui est facile parmi l'offrande) montre que l'offrande est la categorie dont le pelerin choisit un element selon ses moyens. Les versets voisins (2:196 lui-meme) mentionnent le hady trois fois, chaque fois dans le contexte du sacrifice du pelerinage. La sourate al-Baqarah utilise h-d-y pour la guidance (2:2 « guidance pour les pieux ») et pour l'offrande (2:196) — la meme racine couvre les deux sens car conduire peut se diriger vers la verite ou vers le lieu de sacrifice. Pour la mission du khalifa, l'offrande est un acte de devotion materielle — le khalifa donne de ses biens pour accomplir la loi divine.",
              axe1_verset: "Le mot al-hadyi designe l'animal sacrificiel que le pelerin empeche doit offrir. Le champ lexical (empeche, facile, rasage, lieu de licite) est celui du rite du pelerinage. L'offrande est mentionnee trois fois dans le verset, chaque fois dans un contexte de compensation ou d'obligation rituelle. La premiere mention est pour le pelerin empeche, la deuxieme pour le moment du rasage, la troisieme pour le pelerin qui fait le tamattou'.",
              axe2_voisins: "Le verset 2:196 traite l'offrande comme un element central du pelerinage. Les versets voisins (2:197-200) developpent le comportement du pelerin pendant le hajj. L'offrande est le lien materiel entre le pelerin et l'accomplissement de ses obligations rituelles.",
              axe3_sourate: "La racine h-d-y apparait dans la sourate al-Baqarah sous deux sens : la guidance spirituelle (2:2, 2:5, 2:16, 2:38, etc.) et l'offrande rituelle (2:196). Le double sens est coherent : la guidance est le fait de conduire vers la verite, et l'offrande est le fait de conduire un animal vers le lieu de sacrifice. La meme racine couvre les deux parce que l'acte fondamental est de « mener vers ».",
              axe4_coherence: "La racine h-d-y apparait environ 316 fois dans le Coran. Le sens d'offrande (hady) apparait en 2:196, 5:2, 5:95, 5:97, 48:25. Le sens de guidance est beaucoup plus frequent. En 5:95, « un hady parvenant a la Ka'ba » — le hady est explicitement l'animal mene au lieu sacre. Le Coran confirme que dans le contexte du pelerinage, h-d-y designe l'offrande animale.",
              axe5_frequence: "Pour la mission du khalifa, l'offrande est un acte de don materiel pour Dieu. Le khalifa donne de ses biens — l'offrande est la preuve physique de la soumission. Conduire un animal au sacrifice c'est conduire une partie de sa richesse vers Dieu."
            }
          }
        }
      },
      // hlq pos=13 (tahliquu)
      {
        word_key: "hlq", position: 13, sense_chosen: "raser",
        analysis_axes: {
          sense_chosen: "raser",
          concept_chosen: "Rasage/Coupe",
          concepts: {
            "Rasage/Coupe": {
              status: "retenu",
              senses: ["raser", "tondre", "couper les cheveux à ras", "dégarnir"],
              proof_ctx: "Le verbe tahliquu est un inaccompli 2MP de la racine h-l-q avec negation (la tahliquu = ne rasez pas). Le Lane's donne : raser la tete, couper les cheveux a ras, tondre. Le rasage est un acte physique de suppression des cheveux — la lame passe sur la tete et enleve tout ce qui pousse. Dans le contexte du pelerinage, le rasage de la tete est un rite de desacralisation (tahallul) — il marque la fin de l'etat d'ihram. L'interdiction « ne rasez pas vos tetes jusqu'a ce que l'offrande atteigne son lieu » maintient l'etat sacralise en interdisant le geste qui y met fin. Le champ lexical (tetes, offrande, lieu de licite) confirme le contexte rituel. Les versets voisins traitent des rites du pelerinage. La sourate al-Baqarah detaille les regles pratiques du hajj. En 48:27, « vous entrerez dans la Mosquee sacree, si Dieu veut, en securite, ayant rase vos tetes ou coupe vos cheveux » — le rasage est un rite de completion du pelerinage. Pour la mission du khalifa, le rasage symbolise le depouillement — le pelerin se depouille de ce qui pousse sur lui comme il se depouille de son ego.",
              axe1_verset: "Le verbe tahliquu est l'objet de l'interdiction « ne rasez pas ». Le champ lexical (tetes, offrande, lieu de licite) montre que le rasage est lie au cycle rituel du pelerinage — l'interdit de raser maintient l'etat de sacralisation jusqu'au sacrifice. Le verset pose une sequence temporelle : d'abord l'offrande atteint son lieu, PUIS le rasage est permis.",
              axe2_voisins: "Les versets 2:196-200 detaillent les rites du pelerinage. Le rasage est un rite de transition — il marque le passage de l'etat sacralise a l'etat normal. Les versets voisins ne reviennent pas sur le rasage, montrant qu'il est traite de maniere complete en 2:196.",
              axe3_sourate: "La racine h-l-q n'apparait qu'une fois dans la sourate al-Baqarah, en 2:196. Le rasage est un rite specifique du pelerinage qui n'a pas de portee legislative generale dans la sourate — il est confine a la section du hajj.",
              axe4_coherence: "La racine h-l-q apparait en 2:196 et en 48:27 dans le contexte du pelerinage. En 48:27, le rasage est mentionne comme un signe de securite et d'accomplissement — les pelerins entrent dans la Mosquee sacree « ayant rase vos tetes ». Le Coran lie le rasage a l'aboutissement du pelerinage — c'est le geste final qui marque la completion.",
              axe5_frequence: "Pour la mission du khalifa, le rasage est un acte de depouillement. Le pelerin rase ce qui pousse de lui — il se presente devant Dieu depouille de tout ornement. Ce depouillement symbolise l'humilite du khalifa qui reconnait que rien de ce qu'il possede n'est veritablement a lui."
            },
            "Gorge/Passage": {
              status: "nul",
              senses: ["gorge", "gosier", "passage étroit", "anneau"],
              proof_ctx: "Le sens de gorge (hulqum) et d'anneau (halqa) sont des sens attestes de la racine h-l-q, mais le contexte du pelerinage et la construction « ne rasez pas vos tetes » eliminent ces sens — le sujet est les cheveux de la tete, pas la gorge ou un anneau."
            },
            "Anneau/Encerclement": {
              status: "nul",
              senses: ["anneau", "cercle", "encerclement", "halqa"],
              proof_ctx: "Le sens d'anneau ou de cercle (halqa) est atteste pour h-l-q. Mais le verbe tahliquu a l'inaccompli avec l'objet « vos tetes » designe exclusivement le rasage dans ce contexte rituel."
            }
          }
        }
      },
      // ras pos=14 (ru'usakum)
      {
        word_key: "ras", position: 14, sense_chosen: "tete",
        analysis_axes: {
          sense_chosen: "tete",
          concept_chosen: "Tête/Sommet",
          concepts: {
            "Tête/Sommet": {
              status: "retenu",
              senses: ["tête", "sommet", "extrémité supérieure", "début", "chef", "principal", "capital"],
              proof_ctx: "Le nom ru'usakum est un nom pluriel avec pronom suffixe 2MP de la racine r-'-s. Le Lane's donne : tete, sommet, extremite superieure, debut, chef, principal, capital. Le ra's est la partie la plus haute du corps — le sommet physique. Le pluriel « vos tetes » designe les tetes physiques des pelerins, lieu du rasage rituel. Le sens est univoque dans ce contexte : la tete est l'objet du rasage. Le champ lexical (raser, offrande, lieu de licite) confirme le contexte corporel et rituel. Les versets voisins parlent du pelerinage — les tetes sont celles des pelerins. La meme racine apparait plus bas dans le verset sous la forme ra'sihi (sa tete) pour la souffrance — toujours le sens physique. Pour la mission du khalifa, la tete est le siege de la pensee et de la volonte — raser la tete est un acte qui touche la partie la plus haute du corps, celle qui porte la dignite de l'homme.",
              axe1_verset: "Le mot ru'usakum designe les tetes physiques, objet du rasage rituel. Le champ lexical (raser, offrande) confirme le sens corporel. Le pronom « vos » (kum) lie les tetes aux pelerins — c'est leur propre tete qu'ils ne doivent pas raser.",
              axe2_voisins: "Le verset 2:196 mentionne la tete deux fois : ru'usakum (vos tetes — objet du rasage) et ra'sihi (sa tete — lieu de la souffrance). Les deux occurrences sont dans le sens physique. Les versets voisins ne mentionnent pas la tete.",
              axe3_sourate: "La racine r-'-s apparait dans la sourate al-Baqarah principalement en 2:196 et en 2:279 (ru'usu amwalikum = le capital de vos biens). La sourate utilise r-'-s au sens physique (tete) et au sens financier (capital). En 2:196, c'est le sens physique qui s'impose.",
              axe4_coherence: "La racine r-'-s apparait environ 13 fois dans le Coran. En 2:196 et 48:27, la tete est liee au pelerinage et au rasage. En 2:279, le ra's est le capital. En 7:150, Moise saisit « la tete de son frere ». Le Coran utilise la racine pour la tete physique et pour le capital/principal.",
              axe5_frequence: "Pour la mission du khalifa, la tete est le siege de la dignite et de la volonte. Le rasage de la tete est un acte de depouillement qui touche le sommet du corps — le khalifa qui rase sa tete se depouille de son apparence pour se presenter devant Dieu dans le depouillement."
            },
            "Capital/Principal": {
              status: "nul",
              senses: ["capital", "principal", "essentiel"],
              proof_ctx: "Le sens de capital/principal est atteste pour r-'-s (cf. 2:279 « le capital de vos biens »). Mais le contexte du rasage et le pronom « vos tetes » eliminent ce sens — il s'agit de la tete physique, pas du capital financier."
            }
          }
        }
      },
      // blgh pos=16 (yablugha)
      {
        word_key: "blgh", position: 16, sense_chosen: "atteindre",
        analysis_axes: {
          sense_chosen: "atteindre",
          concept_chosen: "Atteinte/Accomplissement",
          concepts: {
            "Atteinte/Accomplissement": {
              status: "retenu",
              senses: ["atteindre", "parvenir", "arriver à", "accomplir", "toucher le but"],
              proof_ctx: "Le verbe yablugha est un inaccompli 3MS de la racine b-l-gh. Le Lane's donne : atteindre, parvenir a un lieu ou a un etat, arriver a destination, accomplir. Le bulugh est l'acte d'atteindre un point precis — le voyageur atteint sa destination, le jeune atteint la maturite, le message atteint son destinataire. L'atteinte est un mouvement qui s'acheve en un point — c'est la fin d'un parcours. Dans le verset, le sujet est l'offrande (al-hadyu) qui « atteint son lieu de licite » — l'animal conduit parvient au lieu ou il sera sacrifice. Le verbe est a l'inaccompli apres « hatta » (jusqu'a ce que), marquant une action en cours vers sa completion. Le champ lexical (offrande, lieu de licite, rasage) montre que l'atteinte est le declencheur qui leve l'interdit du rasage. Les versets voisins traitent du pelerinage et de ses etapes — l'atteinte du lieu de sacrifice est une etape cle. La sourate al-Baqarah utilise b-l-gh en 2:231-232 dans le contexte du divorce (« quand elles atteignent leur terme ») — la meme idee d'arriver a un point precis dans le temps. En 6:19, « ce Coran m'a ete revele pour que je vous en avertisse, vous et quiconque il atteint » — le message atteint son destinataire. Pour la mission du khalifa, l'atteinte est l'aboutissement de l'effort — le khalifa agit pour que ses actions atteignent leur but.",
              axe1_verset: "Le verbe yablugha designe l'arrivee de l'offrande a son lieu de sacrifice. Le champ lexical (offrande, lieu de licite, rasage) montre que l'atteinte est la condition qui leve l'interdit — tant que l'offrande n'a pas atteint son lieu, le rasage est interdit.",
              axe2_voisins: "Les versets 2:196-200 detaillent les etapes du pelerinage. L'atteinte du lieu de sacrifice est une des etapes cles de ce parcours rituel. Les versets suivants (2:197-200) decrivent les etapes suivantes du pelerinage.",
              axe3_sourate: "La racine b-l-gh apparait dans la sourate al-Baqarah en 2:196 (l'offrande atteint son lieu), 2:231 et 2:232 (les femmes divorcees atteignent leur terme). La sourate utilise b-l-gh pour l'atteinte d'un point temporel ou spatial precis — un moment ou un lieu charniere.",
              axe4_coherence: "La racine b-l-gh apparait environ 36 fois dans le Coran. En 2:196, l'atteinte est spatiale. En 2:231, elle est temporelle. En 6:19, le Coran « atteint » les gens comme un message. En 40:36, Pharaon veut « atteindre les causes des cieux ». Le Coran utilise b-l-gh pour tout mouvement qui aboutit a sa cible.",
              axe5_frequence: "Pour la mission du khalifa, l'atteinte est la concretisation de l'effort. Le khalifa agit pour que ses actions atteignent leur but — la justice, l'ordre, la prevention de la corruption. L'offrande qui atteint son lieu est l'image de l'action qui atteint son objectif."
            },
            "Transmission/Communication": {
              status: "probable",
              senses: ["transmettre", "communiquer", "faire parvenir", "porter un message"],
              proof_ctx: "Le sens de transmission est bien atteste pour b-l-gh — ballagha signifie transmettre un message, faire parvenir une communication. En 5:67, « Messager, transmets (balligh) ce qui t'a ete revele ». Mais dans le verset 2:196, le sujet est l'offrande (al-hadyu), pas un message. L'offrande ne transmet pas — elle parvient a un lieu physique. La distinction philosophique est que la transmission est un acte communicatif (un contenu passe d'un emetteur a un recepteur), tandis que l'atteinte est un mouvement spatial (un objet arrive a une destination). Le sujet inamine (l'offrande) et le complement spatial (mahillahu = son lieu) imposent le sens d'atteinte spatiale, pas de transmission communicative."
            },
            "Sens isolé/Être": {
              status: "nul",
              senses: ["être", "devenir"],
              proof_ctx: "Ce sens n'est pas atteste de maniere autonome pour b-l-gh dans le Lane's. La racine porte toujours l'idee d'atteindre ou de parvenir, jamais d'etre au sens existentiel."
            }
          }
        }
      },
      // hdy pos=17 (al-hadyu — deuxieme occurrence)
      {
        word_key: "hdy", position: 17, sense_chosen: "offrande",
        analysis_axes: {
          sense_chosen: "offrande",
          concept_chosen: "Guidance/Direction",
          concepts: {
            "Guidance/Direction": {
              status: "retenu",
              senses: ["guider", "diriger", "conduire", "offrir", "mener", "hady (offrande)", "guidance"],
              proof_ctx: "Meme racine et meme sens que la position 11 — al-hadyu est l'offrande sacrificielle. Ici le mot est au nominatif car il est sujet du verbe yablugha (l'offrande atteint). Le verset dit « jusqu'a ce que l'offrande atteigne son lieu de licite » — l'offrande est l'agent qui parcourt le chemin vers le lieu de sacrifice. Le sens d'offrande (ce qu'on conduit vers le lieu sacre) est confirme par le complement mahillahu (son lieu de licite/desacralisation).",
              axe1_verset: "Le mot al-hadyu est le sujet du verbe atteindre. Le champ lexical (rasage, lieu de licite) montre que l'offrande est l'element dont l'arrivee a destination leve l'interdit du rasage. L'offrande est un agent en mouvement — elle est conduite vers son lieu.",
              axe2_voisins: "Meme contexte que la premiere occurrence — la section du pelerinage dans les versets 2:196-200.",
              axe3_sourate: "Meme analyse que pour la position 11.",
              axe4_coherence: "Meme analyse que pour la position 11.",
              axe5_frequence: "Meme analyse que pour la position 11 — l'offrande est un acte de don materiel dans le cadre de la mission du khalifa."
            }
          }
        }
      },
      // hll pos=18 (mahillahu)
      {
        word_key: "hll", position: 18, sense_chosen: "lieu de licite",
        analysis_axes: {
          sense_chosen: "lieu de licite",
          concept_chosen: "Licéité/Permission",
          concepts: {
            "Licéité/Permission": {
              status: "retenu",
              senses: ["être licite", "être permis", "se désacraliser", "halal", "dissoudre", "dénouer", "descendre dans un lieu"],
              proof_ctx: "Le nom mahillahu est un nom de lieu (maf'il) de la racine h-l-l avec pronom suffixe 3MS. Le Lane's donne : devenir licite/permis, se desacraliser, descendre dans un lieu, se poser, halal (le permis). Le mahall est le lieu ou la chose devient licite — dans le contexte du pelerinage, c'est le lieu ou l'offrande atteint sa destination et ou la desacralisation devient permise. La racine h-l-l porte l'idee fondamentale de dissolution/denouement — ce qui etait noue (l'interdit) se denoue (devient licite). Le pronom suffixe « son » renvoie a l'offrande — c'est le lieu propre de l'offrande, la ou elle « descend » et ou son sacrifice devient licite. Le champ lexical (offrande, rasage, atteindre) montre que le mahall est le point d'arrivee du parcours de l'offrande — une fois que l'offrande y est, le rasage devient licite. Les versets voisins traitent du pelerinage. La sourate al-Baqarah utilise h-l-l en 2:187 « Dieu sait que vous vous trahissiez vous-memes, alors Il a accepte votre repentir et vous a pardonnes — desormais cohabitez avec elles » — le meme sens de rendre licite ce qui etait interdit. En 5:2, « quand vous vous etes desacralises (halaltum), chassez » — la desacralisation rend licite la chasse. Pour la mission du khalifa, la licite est la permission divine qui structure la vie — le khalifa vit dans le cadre du licite et de l'illicite poses par Dieu.",
              axe1_verset: "Le mot mahillahu designe le lieu ou la desacralisation devient permise. Le champ lexical (offrande, atteindre, rasage) montre que le lieu de licite est le point de basculement — avant, l'interdit tient ; apres, il est leve. Le verset construit une sequence temporelle et spatiale : l'offrande parcourt un chemin, atteint son lieu, et la desacralisation devient licite.",
              axe2_voisins: "En 5:2, la desacralisation (halaltum) est le moment ou la chasse redevient permise. En 2:196, le mahall est le lieu ou le sacrifice redevient permis. Les versets voisins montrent que la licite et l'illicite sont des etats qui alternent selon le contexte rituel.",
              axe3_sourate: "La racine h-l-l apparait dans la sourate al-Baqarah en 2:187 (rendre licite la cohabitation pendant le ramadan), 2:196 (le lieu de licite de l'offrande), 2:275 (Dieu a rendu licite le commerce). La sourate utilise h-l-l pour la permission divine qui rend les choses licites — c'est Dieu qui decide de ce qui est permis.",
              axe4_coherence: "La racine h-l-l apparait environ 52 fois dans le Coran. Le halal (licite) et le haram (illicite) sont les deux poles de la legislation coranique. En 2:196, le mahall est le lieu ou le haram (l'interdit de raser) cede place au halal. Le Coran structure la vie en zones de licite et d'illicite, et le mahall est le point de passage entre les deux.",
              axe5_frequence: "Pour la mission du khalifa, la licite est le cadre de la mission. Le khalifa agit dans le licite et empeche l'illicite — il est le gardien de la frontiere entre le permis et l'interdit. Le mahall du pelerinage est une image de cette mission : il y a un lieu et un moment ou les choses changent de statut."
            }
          }
        }
      },
      // kwn pos=20 (kana)
      {
        word_key: "kwn", position: 20, sense_chosen: "etre",
        analysis_axes: {
          sense_chosen: "etre",
          concept_chosen: "Être/Existence",
          concepts: {
            "Être/Existence": {
              status: "retenu",
              senses: ["être", "exister", "devenir", "se trouver dans un état"],
              proof_ctx: "Le verbe kana est un accompli 3MS de la racine k-w-n. Le Lane's donne : etre, exister, devenir, se trouver dans un etat. Le kawn est l'existence, l'etre. Dans le verset, « man kana minkum maridan » (quiconque d'entre vous est malade) utilise kana comme verbe d'etat — il pose une condition sur l'etat du pelerin. Le verbe est a l'accompli dans une proposition conditionnelle generalisante — « quiconque se trouve etre malade ». Le sens est univoque — kana est un auxiliaire d'etat qui n'a pas d'alternative semantique pertinente dans ce contexte.",
              axe1_verset: "Le verbe kana ouvre la deuxieme clause d'exception — apres l'empechement total (uhsirtum), le verset traite l'empechement partiel (maladie). Le champ lexical (malade, souffrance, tete, rachat) montre que kana pose un etat de fait qui declenche une regle de compensation.",
              axe2_voisins: "Le verset 2:196 utilise kana comme charniere entre le cas general et le cas particulier. Les versets voisins utilisent kana frequemment comme verbe d'etat dans les propositions legislatives.",
              axe3_sourate: "La racine k-w-n est omnipresente dans la sourate. Kana est un des verbes les plus frequents de l'arabe coranique — il pose des etats de fait sans emphase particuliere.",
              axe4_coherence: "La racine k-w-n apparait des centaines de fois dans le Coran. C'est un verbe auxiliaire qui ne porte pas de charge semantique autonome — il sert a situer des etats dans le temps.",
              axe5_frequence: "Pour la mission du khalifa, l'etre est le fondement de la mission — le khalifa existe dans un etat donne et agit a partir de cet etat. Kana pose la realite de la condition humaine avant d'en tirer les consequences legislatives."
            }
          }
        }
      },
      // mrd pos=22 (maridan)
      {
        word_key: "mrd", position: 22, sense_chosen: "malade",
        analysis_axes: {
          sense_chosen: "malade",
          concept_chosen: "Maladie/Faiblesse",
          concepts: {
            "Maladie/Faiblesse": {
              status: "retenu",
              senses: ["malade", "souffrant", "affaibli", "atteint d'un mal", "infirme"],
              proof_ctx: "Le nom maridan est un adjectif accusatif indefini de la racine m-r-d. Le Lane's donne : etre malade, souffrir, etre affaibli par un mal, maladie du corps ou de l'ame. Le marad est l'etat contraire a la sante — le corps est affaibli et ne fonctionne plus normalement. L'indefini (maridan = malade, sans article) garde la qualification ouverte — toute forme de maladie justifie le rachat. Le champ lexical (souffrance, tete, rachat, jeune, aumone, sacrifice) montre que la maladie est une condition qui ouvre droit a une compensation. Les versets voisins traitent du pelerinage — la maladie est un empechement partiel qui ne met pas fin au pelerinage mais qui justifie un amenagement des rites. La sourate al-Baqarah mentionne la maladie en 2:184 pour le jeune du ramadan (« quiconque d'entre vous est malade ou en voyage ») — la meme clause d'exception s'applique au pelerinage et au jeune. En 2:10, « dans leurs coeurs il y a une maladie » — la maladie peut etre physique ou spirituelle. Ici le contexte est physique. Pour la mission du khalifa, la maladie est un etat de faiblesse que la legislation divine prend en compte — le khalifa n'est pas surhumain, il peut etre malade et la loi le prevoit.",
              axe1_verset: "Le mot maridan est le premier etat qui justifie le rachat. Le champ lexical (souffrance, tete, rachat) montre que la maladie empeche de maintenir l'etat de sacralisation sans souffrance excessive. La loi divine prevoit une alternative pour le malade.",
              axe2_voisins: "En 2:184-185, la maladie justifiait un report du jeune. En 2:196, elle justifie un rachat pour le pelerinage. Le meme principe de facilite pour le malade s'applique aux deux obligations.",
              axe3_sourate: "La racine m-r-d apparait en 2:10 (maladie du coeur), 2:184 (maladie du corps pour le jeune), 2:196 (maladie du corps pour le pelerinage). La sourate distingue la maladie du coeur (spirituelle) et la maladie du corps (physique).",
              axe4_coherence: "La racine m-r-d apparait environ 24 fois dans le Coran. Les mentions de maladie physique sont toujours assorties de facilitations legislatives — Dieu ne charge pas le malade au-dela de ses capacites.",
              axe5_frequence: "Pour la mission du khalifa, la maladie rappelle la fragilite humaine. Le khalifa est un etre humain sujet a la maladie — la legislation divine le prend en compte et le traite avec justice."
            }
          }
        }
      },
      // adhy pos=25 (adhan)
      {
        word_key: "adhy", position: 25, sense_chosen: "souffrance",
        analysis_axes: {
          sense_chosen: "souffrance",
          concept_chosen: "Nuisance/Souffrance",
          concepts: {
            "Nuisance/Souffrance": {
              status: "retenu",
              senses: ["nuisance", "souffrance", "tort", "gêne", "désagrément", "mal causé", "dommage"],
              proof_ctx: "Le nom adhan est un nom accusatif indefini de la racine '-dh-y. Le Lane's donne : nuisance, tort, dommage, gene, desagrement, souffrance causee a quelqu'un, mal leger. Le adha est un mal qui gene et incommode — il est moins grave que le darar (prejudice grave) mais suffisamment penible pour justifier un amenagement. C'est un etat subi et desagreable — la nuisance affecte celui qui la recoit sans qu'il l'ait choisie. Dans le verset, « aw bihi adhan min ra'sihi » (ou a une souffrance de sa tete) designe une affection du cuir chevelu — poux, irritation, maladie de peau — qui rend le maintien de la chevelure penible. L'indefini (adhan) laisse la qualification ouverte — toute souffrance de la tete suffit. Le champ lexical (malade, tete, rachat) montre que la souffrance est une condition qui justifie le rachat comme la maladie. Les versets voisins traitent du pelerinage. La sourate al-Baqarah utilise la racine '-dh-y en 2:222 (« une souffrance » a propos des menstrues) et en 2:262-264 (« ne suivez pas vos aumones de la nuisance »). En 33:53, « cela blesse le Prophete et il eprouve de la gene ». Pour la mission du khalifa, la souffrance est une realite que la legislation prend en compte — le khalifa n'ignore pas la souffrance des gens.",
              axe1_verset: "Le mot adhan est coordonne a la maladie comme deuxieme condition justifiant le rachat. Le champ lexical (malade, tete, rachat, jeune, aumone, sacrifice) montre que la souffrance, meme mineure, est prise en compte. Le texte precise « de sa tete » — c'est specifiquement la tete qui souffre, le lieu du rasage.",
              axe2_voisins: "En 2:222, la racine '-dh-y designe la gene des menstrues. En 2:196, elle designe la gene de la tete. Les versets voisins montrent que le Coran utilise la racine pour toute gene physique qui justifie un amenagement des regles.",
              axe3_sourate: "La racine '-dh-y apparait en 2:196 (souffrance de la tete), 2:222 (menstrues), 2:262-264 (nuisance apres l'aumone). La sourate couvre les differentes formes de nuisance — physique et sociale.",
              axe4_coherence: "La racine '-dh-y apparait environ 24 fois dans le Coran. Le Coran est attentif aux souffrances des gens et prevoit des amenagements — la legislation n'est pas rigide mais adaptable aux conditions reelles.",
              axe5_frequence: "Pour la mission du khalifa, la prise en compte de la souffrance est un devoir de justice. Le khalifa ne peut pas ignorer les souffrances de son peuple — la legislation divine montre l'exemple en amenageant les regles pour ceux qui souffrent."
            }
          }
        }
      },
      // ras pos=27 (ra'sihi)
      {
        word_key: "ras", position: 27, sense_chosen: "tete",
        analysis_axes: {
          sense_chosen: "tete",
          concept_chosen: "Tête/Sommet",
          concepts: {
            "Tête/Sommet": {
              status: "retenu",
              senses: ["tête", "sommet", "extrémité supérieure", "chef", "principal"],
              proof_ctx: "Meme racine que la position 14 (ru'usakum). Le nom ra'sihi est au singulier avec pronom suffixe 3MS — « sa tete » designe la tete du pelerin malade. Le sens physique est identique : la tete est le lieu de la souffrance qui justifie le rachat. La construction « adhan min ra'sihi » (souffrance de sa tete) localise la gene au niveau du cuir chevelu — poux, irritation, maladie cutanee — qui rend le maintien de la chevelure intacte pendant l'ihram penible.",
              axe1_verset: "Le mot ra'sihi localise la souffrance. Le champ lexical (malade, souffrance, rachat) montre que la tete est le point de douleur specifique qui justifie l'exemption du rasage rituel.",
              axe2_voisins: "Meme contexte que pour la position 14 — la section du pelerinage.",
              axe3_sourate: "Meme analyse que pour la position 14.",
              axe4_coherence: "Meme analyse que pour la position 14.",
              axe5_frequence: "Meme analyse que pour la position 14."
            }
          }
        }
      },
      // fdy pos=28 (fidyatun)
      {
        word_key: "fdy", position: 28, sense_chosen: "rachat",
        analysis_axes: {
          sense_chosen: "rachat",
          concept_chosen: "Rançon/Sacrifice",
          concepts: {
            "Rançon/Sacrifice": {
              status: "retenu",
              senses: ["rançon", "rachat", "compensation", "fidya", "ce qu'on donne pour se libérer"],
              proof_ctx: "Le nom fidyatun est un nom nominatif indefini de la racine f-d-y. Le Lane's donne : rancon, rachat, ce qu'on donne pour liberer quelqu'un ou se liberer d'une obligation, compensation, substitution. La fidya est un acte compensatoire — celui qui ne peut pas accomplir une obligation la remplace par une compensation equivalente. C'est un acte exterieur et volontaire — on donne quelque chose pour se racheter. Le nominatif marque le sujet de la phrase nominale (« alors un rachat »). L'indefini (fidyatun) ne fixe pas la nature du rachat — le verset precise ensuite les trois options : jeune, aumone, sacrifice. Le champ lexical (malade, souffrance, jeune, aumone, sacrifice) montre que la fidya est le principe general dont les trois options sont les formes concretes. Les versets voisins traitent du pelerinage. En 2:184, la fidya est mentionnee pour ceux qui ne peuvent pas jeuner (« une rancon : nourrir un pauvre »). Le meme principe s'applique au pelerinage et au jeune. Pour la mission du khalifa, le rachat est un principe de justice — la loi divine ne bloque pas celui qui est dans la difficulte mais lui offre une alternative proportionnee.",
              axe1_verset: "Le mot fidyatun introduit le principe de compensation. Le champ lexical (jeune, aumone, sacrifice) montre les trois formes de rachat. Le verset offre le choix au pelerin malade — il n'est pas contraint a une seule forme de compensation.",
              axe2_voisins: "En 2:184, la fidya est la compensation pour le jeune manque. En 2:196, c'est la compensation pour le rite non accompli. Les versets voisins montrent que le principe de compensation est un element recurrent de la legislation coranique.",
              axe3_sourate: "La racine f-d-y apparait en 2:48 (« aucune rancon ne sera acceptee »), 2:184 (rachat pour le jeune), 2:196 (rachat pour le pelerinage). La sourate montre que le rachat a des limites — au Jour du Jugement, aucun rachat ne sera accepte, mais dans la vie terrestre, le rachat est un mecanisme de facilitation.",
              axe4_coherence: "La racine f-d-y apparait environ 15 fois dans le Coran. Le principe de rachat est utilise pour le jeune (2:184), le pelerinage (2:196), et le sacrifice d'Abraham (37:107 « nous l'avons rachete par un sacrifice immense »). Le Coran pose le rachat comme un principe de justice compensatoire.",
              axe5_frequence: "Pour la mission du khalifa, le rachat est un mecanisme de justice. La loi divine ne punit pas celui qui est dans l'incapacite — elle lui offre une voie de compensation. Le khalifa applique ce meme principe dans sa gouvernance."
            }
          }
        }
      },
      // swm pos=30 (siyamin)
      {
        word_key: "swm", position: 30, sense_chosen: "jeune",
        analysis_axes: {
          sense_chosen: "jeune",
          concept_chosen: "Jeûne/Abstention",
          concepts: {
            "Jeûne/Abstention": {
              status: "retenu",
              senses: ["jeûne", "abstention", "cessation", "s'abstenir de nourriture", "s'arrêter"],
              proof_ctx: "Le nom siyamin est un nom genitif indefini de la racine s-w-m. Le Lane's donne : s'abstenir, cesser, s'arreter, jeune (abstention de nourriture et de boisson), silence. Le sawm est l'acte de cesser — cesser de manger, de boire, de parler. Le sens premier est l'arret, la cessation d'une activite. Dans le contexte coranique, le sawm est specifiquement l'abstention de nourriture et de boisson du lever au coucher du soleil. C'est un etat interieur de privation volontaire — celui qui jeune se prive pour se discipliner. Le genitif (siyamin) est regi par « min » (par) — « un rachat par un jeune ». Le jeune est la premiere des trois options de compensation. Le champ lexical (rachat, aumone, sacrifice) montre que le jeune est une forme de compensation parmi d'autres. Les versets 2:183-187 traitaient du jeune du ramadan en detail. En 2:196, le jeune est mentionne comme option de rachat pour le pelerinage et comme compensation pour l'absence de sacrifice. Pour la mission du khalifa, le jeune est un entrainement a la maitrise de soi — le khalifa qui jeune apprend a se passer du superflu.",
              axe1_verset: "Le mot siyamin est la premiere option de rachat. Le champ lexical (rachat, aumone, sacrifice) montre les trois alternatives. Le jeune est mentionne deux fois dans le verset : comme rachat pour le pelerin malade et comme compensation pour celui qui ne trouve pas d'offrande (trois jours + sept jours).",
              axe2_voisins: "Les versets 2:183-187 detaillaient les regles du jeune du ramadan. En 2:196, le jeune est utilise comme compensation dans le pelerinage. Le meme acte (s'abstenir) sert le culte (ramadan) et la compensation (pelerinage).",
              axe3_sourate: "La racine s-w-m apparait en 2:183-187 (jeune du ramadan) et en 2:196 (jeune compensatoire). La sourate al-Baqarah traite du jeune sous ses deux aspects : obligation cultuelle et compensation legislative.",
              axe4_coherence: "La racine s-w-m apparait environ 14 fois dans le Coran. Le jeune est toujours un acte de discipline volontaire — que ce soit pour le culte ou pour la compensation. En 19:26, Marie fait voeu de « jeune du silence » — le sawm peut etre un silence aussi bien qu'une abstention alimentaire.",
              axe5_frequence: "Pour la mission du khalifa, le jeune est l'entrainement a la privation volontaire. Le khalifa qui apprend a se passer de nourriture apprend a se passer de tout ce qui est superflu — le jeune forge la discipline necessaire a la mission."
            }
          }
        }
      },
      // sdq pos=32 (sadaqatin)
      {
        word_key: "sdq", position: 32, sense_chosen: "aumone",
        analysis_axes: {
          sense_chosen: "aumone",
          concept_chosen: "Vérité/Sincérité",
          concepts: {
            "Vérité/Sincérité": {
              status: "retenu",
              senses: ["vérité", "sincérité", "véracité", "aumône", "don sincère", "charité", "confirmation"],
              proof_ctx: "Le nom sadaqatin est un nom genitif indefini de la racine s-d-q. Le Lane's donne : dire la verite, etre sincere, confirmer, aumone, don fait avec sincerite, charite. La sadaqa partage la racine de sidq (verite) — l'aumone est la preuve materielle de la sincerite de la foi. Celui qui donne prouve par son acte qu'il est sincere dans sa croyance — le don est une confirmation tangible. C'est un acte exterieur et volontaire — l'aumone sort de celui qui donne et atteint celui qui recoit. Le genitif (sadaqatin) est la deuxieme option de rachat apres le jeune. Le champ lexical (rachat, jeune, sacrifice) montre que l'aumone est une compensation parmi les trois possibles. Les versets 2:261-274 traiteront de l'aumone en detail. En 2:196, l'aumone est mentionnee brievement comme option de rachat. La sourate al-Baqarah developpe la sadaqa comme un pilier de la vie sociale. Pour la mission du khalifa, l'aumone est un acte de sincerite — le khalifa prouve sa foi par ses dons materiels.",
              axe1_verset: "Le mot sadaqatin est la deuxieme option de rachat. Le champ lexical (jeune, sacrifice) montre les trois alternatives. L'aumone est un don materiel — le pelerin donne de ses biens pour compenser le rite non accompli.",
              axe2_voisins: "Les versets 2:261-274 traiteront en detail de l'aumone et de ses regles. En 2:196, l'aumone est mentionnee comme option de compensation. La sourate construit progressivement le theme de l'aumone — d'abord comme compensation, puis comme vertu en soi.",
              axe3_sourate: "La racine s-d-q est frequente dans la sourate al-Baqarah. En 2:177, la sadaqa fait partie de la piete. En 2:196, elle est une option de rachat. En 2:261-274, elle est traitee en profondeur. La sourate montre que l'aumone est a la fois un acte de culte et un mecanisme de justice sociale.",
              axe4_coherence: "La racine s-d-q apparait environ 155 fois dans le Coran. La verite et l'aumone partagent la meme racine — donner est un acte de verite. Le Coran lie la sincerite interieure a l'acte materiel de don — celui qui est veridique dans sa foi le prouve par sa generosite.",
              axe5_frequence: "Pour la mission du khalifa, l'aumone est la preuve de la sincerite. Le khalifa ne se contente pas de declarer sa foi — il la prouve par ses dons. La sadaqa est l'acte par lequel la parole devient realite materielle."
            }
          }
        }
      },
      // nsk pos=34 (nusukin)
      {
        word_key: "nsk", position: 34, sense_chosen: "sacrifice",
        analysis_axes: {
          sense_chosen: "sacrifice",
          concept_chosen: "Rite/Cérémonie",
          concepts: {
            "Rite/Cérémonie": {
              status: "retenu",
              senses: ["rite", "cérémonie", "sacrifice", "offrande sacrificielle", "dévotion", "acte de culte", "immolation"],
              proof_ctx: "Le nom nusukin est un nom genitif indefini de la racine n-s-k. Le Lane's donne : devotion, rite, acte de culte, sacrifice, offrande sacrificielle, immolation d'une bete. Le nusuk est l'acte rituel par lequel on se rapproche de Dieu — il peut designer tout acte de devotion mais dans le contexte du pelerinage, il designe specifiquement l'immolation d'un animal sacrificiel. C'est un acte exterieur et sacre — le sacrifice sort de l'offrant et monte vers Dieu. Le genitif (nusukin) est la troisieme option de rachat apres le jeune et l'aumone. Le champ lexical (rachat, jeune, aumone) montre que le sacrifice est la troisieme et derniere option de compensation. Le Lane's precise que le nusuk peut designer specifiquement une brebis sacrifiee. Les versets voisins traitent du pelerinage. En 2:128, Abraham demande « montre-nous nos rites (manasik) ». En 22:34, « pour chaque communaute Nous avons institue un rite (mansak) ». Le Coran lie le nusuk au pelerinage abrahamique. Pour la mission du khalifa, le sacrifice est l'acte de donner quelque chose de precieux pour Dieu — le khalifa sacrifie de ses biens et de son confort pour accomplir sa mission.",
              axe1_verset: "Le mot nusukin est la troisieme option de rachat. Le champ lexical (jeune, aumone) montre la gradation des compensations : privation (jeune), don (aumone), sacrifice (nusuk). Le pelerin malade choisit parmi ces trois selon ses moyens et ses preferences.",
              axe2_voisins: "En 2:128, Abraham demande a Dieu de lui montrer ses rites (manasik). En 2:196, le nusuk est un rite specifique de compensation. Les versets voisins montrent que le pelerinage est un ensemble de rites herites d'Abraham.",
              axe3_sourate: "La racine n-s-k apparait en 2:128 (les rites d'Abraham) et en 2:196 (le sacrifice comme compensation). La sourate lie les rites du pelerinage a la tradition abrahamique.",
              axe4_coherence: "La racine n-s-k apparait environ 9 fois dans le Coran. En 2:196, c'est un sacrifice compensatoire. En 22:34, les rites sont institues pour chaque communaute. Le Coran montre que le sacrifice est un acte universel — chaque communaute a ses rites sacrificiels.",
              axe5_frequence: "Pour la mission du khalifa, le sacrifice est la preuve ultime de la devotion. Le khalifa qui sacrifie renonce a quelque chose de precieux pour Dieu — c'est un acte qui depasse le don ordinaire car il implique la destruction volontaire d'un bien."
            },
            "Dévotion/Culte": {
              status: "probable",
              senses: ["dévotion", "culte", "adoration", "piété pratique"],
              proof_ctx: "Le sens de devotion generale est bien atteste pour n-s-k — le Lane's donne « devotion, acte de culte, adoration ». Le nasik est le devot, celui qui se consacre au culte. Mais dans le verset, le nusuk est la troisieme option d'une liste concrete de compensations (jeune, aumone, nusuk). Les deux premieres options sont des actes materiels specifiques, ce qui pousse a interpreter le nusuk comme un acte materiel specifique aussi — le sacrifice animal — plutot que comme la devotion abstraite. La distinction philosophique est que la devotion est un etat interieur general de piete, tandis que le sacrifice est un acte exterieur precis et ponctuel. Le contexte de la liste des compensations impose l'acte concret, pas l'etat abstrait."
            }
          }
        }
      },
      // amn pos=36 (amintum)
      {
        word_key: "amn", position: 36, sense_chosen: "securite",
        analysis_axes: {
          sense_chosen: "securite",
          concept_chosen: "Foi/Adhésion",
          concepts: {
            "Foi/Adhésion": {
              status: "retenu",
              senses: ["foi", "adhésion", "confiance", "sécurité", "être en sûreté", "ne plus craindre"],
              proof_ctx: "Le verbe amintum est un accompli 2MP de la racine '-m-n. Le Lane's donne : etre en securite, etre en surete, ne plus craindre, avoir confiance, croire, adherer. La racine '-m-n porte deux champs semantiques lies : la securite (aman) et la foi (iman). Les deux sont lies parce que celui qui croit se sent en securite — la foi procure la securite interieure. Dans le verset, « fa-idha amintum » (puis quand vous etes en securite) designe le retour a la securite apres l'empechement — les pelerins ne sont plus empeches, ils peuvent accomplir le pelerinage normalement. Le sens de securite physique est retenu car le contexte est la levee de l'empechement (maladie, ennemi, obstacle). Le verbe est a l'accompli apres « idha » (quand), marquant un evenement futur traite comme accompli — quand la securite sera acquise. Le champ lexical (empoche, offrande, profiter, visite, pelerinage) montre que la securite est le point de basculement entre les regles d'exception et les regles normales. Les versets voisins traitent du pelerinage. Le verset 2:125 utilisait la racine '-m-n pour le Sanctuaire comme « lieu de securite ». En 2:196, la securite permet la reprise du pelerinage normal. Pour la mission du khalifa, la securite est la condition de la mission — le khalifa ne peut accomplir sa mission que dans un etat de securite.",
              axe1_verset: "Le verbe amintum marque la fin de la situation d'empechement. Le champ lexical (profiter, visite, pelerinage, offrande) montre que la securite ouvre la voie aux regles normales du tamattou'. Le verset passe des clauses d'exception aux regles standards.",
              axe2_voisins: "En 2:125, le Sanctuaire est un lieu de securite (amn). En 2:196, la securite des pelerins est retablie. Les versets voisins montrent que le pelerinage est lie a la securite — le lieu sacre et le pelerin doivent etre en securite.",
              axe3_sourate: "La racine '-m-n est une des plus frequentes de la sourate. En 2:3, les croyants (mu'minun) croient en l'invisible. En 2:125, le Sanctuaire est un lieu de securite. En 2:196, les pelerins sont en securite. La sourate lie la foi, la securite et le pelerinage.",
              axe4_coherence: "La racine '-m-n apparait environ 879 fois dans le Coran. Le lien entre securite et foi est constant — le croyant est en securite parce qu'il croit, et le lieu sacre est un lieu de securite parce qu'il est sacre. En 106:4, « qui les a nourris contre la faim et les a mis en securite contre la peur » — la securite est un bienfait divin.",
              axe5_frequence: "Pour la mission du khalifa, la securite est une condition necessaire. Le khalifa doit etablir la securite pour que les gens puissent accomplir leurs obligations — sans securite, ni pelerinage ni justice ne sont possibles."
            }
          }
        }
      },
      // mte pos=38 (tamatta'a)
      {
        word_key: "mte", position: 38, sense_chosen: "profiter",
        analysis_axes: {
          sense_chosen: "profiter",
          concept_chosen: "Jouissance/Profit",
          concepts: {
            "Jouissance/Profit": {
              status: "retenu",
              senses: ["jouir", "profiter", "tirer avantage", "vivre en jouissant", "bénéficier"],
              proof_ctx: "Le verbe tamatta'a est un accompli 3MS de la forme V de la racine m-t-'. Le Lane's donne pour la forme V : jouir, profiter, tirer avantage, vivre en jouissant d'un bien, beneficier d'une chose pendant une periode. La mata'a est ce dont on jouit — la jouissance est un etat de benefice et de plaisir tire d'une chose. La forme V (tafa''ala) ajoute l'idee de reflexivite — le sujet se fait jouir lui-meme, il tire activement profit. Dans le contexte du pelerinage, le tamattou' est le fait de profiter de la periode entre la umra et le hajj — le pelerin se desacralise apres la visite et vit normalement (vetements, parfum, relations) jusqu'au debut du hajj. La construction « tamatta'a bi-l-'umrati ila l-hajji » signifie « il a profite de la visite [en se dirigeant] vers le pelerinage » — la jouissance temporaire entre deux actes rituels. Le champ lexical (securite, visite, pelerinage, offrande) montre que la jouissance est inseree dans un cadre rituel. La sourate al-Baqarah utilise m-t-' en 2:36 (« une jouissance jusqu'a un moment donne ») et en 2:241 (« une jouissance pour les divorcees »). Le profit est toujours temporaire dans le Coran — il a une fin. Pour la mission du khalifa, la jouissance temporaire rappelle que la vie terrestre est un profit a duree limitee.",
              axe1_verset: "Le verbe tamatta'a designe le pelerin qui combine umra et hajj avec une periode de jouissance entre les deux. Le champ lexical (visite, pelerinage, offrande) montre que la jouissance est encadree par deux actes rituels — elle n'est pas libre mais inseree dans un parcours sacre.",
              axe2_voisins: "Le verset 2:197 detaillera le comportement pendant le pelerinage. Le verset 2:196 pose les regles du tamattou' — la jouissance entre deux rites. Les versets voisins montrent que le pelerinage est un acte structure ou meme la jouissance est reglementee.",
              axe3_sourate: "La racine m-t-' apparait dans la sourate al-Baqarah en 2:36, 2:126, 2:196, 2:236, 2:241. Chaque occurrence montre une jouissance temporaire et encadree — la vie terrestre est une jouissance temporaire (2:36), la jouissance du tamattou' est entre deux rites (2:196), la jouissance de la divorcee est un droit (2:241).",
              axe4_coherence: "La racine m-t-' apparait environ 69 fois dans le Coran. En 2:36, la vie terrestre est « une jouissance jusqu'a un moment donne ». En 4:77, « la jouissance de ce monde est breve ». Le Coran presente systematiquement la jouissance comme temporaire — elle a toujours une fin.",
              axe5_frequence: "Pour la mission du khalifa, la jouissance temporaire est un rappel de la finitude. Le khalifa profite des biens de la terre mais sait que cette jouissance est limitee — elle ne dure pas. Le tamattou' du pelerinage est une image de la vie terrestre : une jouissance entre deux etats sacres."
            },
            "Bien/Provision": {
              status: "probable",
              senses: ["bien", "provision", "objet de jouissance", "mata'", "bagages"],
              proof_ctx: "Le sens de provision/objet de jouissance (mata') est bien atteste pour m-t-'. Le Lane's donne : ce dont on tire profit, provision, bagage, ustensile, bien. Mais dans le verset, le verbe tamatta'a a la forme V designe l'acte de jouir (verbe), pas l'objet dont on jouit (nom). La forme V est reflexive et active — le pelerin se fait jouir, il tire activement profit. La distinction philosophique est que la provision est un objet passif (le bien existe et attend d'etre utilise), tandis que la jouissance est un acte actif (le sujet tire profit de quelque chose). Le verbe a la forme V impose le sens actif, pas le sens passif de provision."
            }
          }
        }
      },
      // emr pos=39 (bi-l-'umrati)
      {
        word_key: "emr", position: 39, sense_chosen: "visite",
        analysis_axes: {
          sense_chosen: "visite",
          concept_chosen: "Vie/Durée",
          concepts: {
            "Vie/Durée": {
              status: "retenu",
              senses: ["vie", "durée", "visite", "fréquentation d'un lieu", "habiter", "peupler", "umra"],
              proof_ctx: "Meme racine et meme sens que la position 4 — al-'umrati est la visite de la Maison sacree. Ici le mot est au genitif regi par « bi » (de/avec) dans la construction « tamatta'a bi-l-'umrati » (il a profite de la visite). La visite est l'objet de la jouissance — le pelerin profite de la visite en se dirigeant vers le pelerinage.",
              axe1_verset: "Le mot al-'umrati est l'objet de la jouissance du tamattou'. Le champ lexical (profiter, pelerinage) montre que la visite est le premier acte du tamattou' — apres la visite, le pelerin profite d'une periode de desacralisation avant le hajj.",
              axe2_voisins: "Meme contexte que la position 4 — la section du pelerinage.",
              axe3_sourate: "Meme analyse que pour la position 4.",
              axe4_coherence: "Meme analyse que pour la position 4.",
              axe5_frequence: "Meme analyse que pour la position 4."
            }
          }
        }
      },
      // hjj pos=41 (al-hajji)
      {
        word_key: "hjj", position: 41, sense_chosen: "pelerinage",
        analysis_axes: {
          sense_chosen: "pelerinage",
          concept_chosen: "Pèlerinage/Preuve",
          concepts: {
            "Pèlerinage/Preuve": {
              status: "retenu",
              senses: ["pèlerinage", "se diriger vers", "argument", "preuve"],
              proof_ctx: "Meme racine que la position 2. Le nom al-hajji est au genitif regi par « ila » (vers/jusqu'a) dans la construction « tamatta'a bi-l-'umrati ila l-hajji » (il a profite de la visite jusqu'au pelerinage). Le pelerinage est la destination finale du tamattou' — la jouissance prend fin quand le hajj commence.",
              axe1_verset: "Le mot al-hajji est la destination de la jouissance du tamattou'. Le champ lexical (profiter, visite) montre que le pelerinage est le point d'arrivee apres la periode de jouissance.",
              axe2_voisins: "Meme contexte que la position 2.",
              axe3_sourate: "Meme analyse que pour la position 2.",
              axe4_coherence: "Meme analyse que pour la position 2.",
              axe5_frequence: "Meme analyse que pour la position 2."
            }
          }
        }
      },
      // ysr pos=43 (istaysara — deuxieme occurrence)
      {
        word_key: "ysr", position: 43, sense_chosen: "facilite",
        analysis_axes: {
          sense_chosen: "facilite",
          concept_chosen: "Facilité/Aisance",
          concepts: {
            "Facilité/Aisance": {
              status: "retenu",
              senses: ["facilité", "aisance", "ce qui est facile", "ce qui est à portée"],
              proof_ctx: "Meme racine et meme forme que la position 9. Le verbe istaysara designe ici ce que le pelerin du tamattou' peut offrir selon ses moyens. La construction est identique : « ma staysara mina l-hadyi » (ce qui est facile parmi l'offrande). Le principe de facilite s'applique aussi bien au pelerin empoche (position 9) qu'au pelerin du tamattou' (position 43) — dans les deux cas, Dieu demande ce que le pelerin peut donner, pas ce qui le depasse.",
              axe1_verset: "Le mot istaysara repete le principe de facilite pour le deuxieme cas de figure (tamattou'). Le champ lexical (offrande) confirme la meme construction que la premiere occurrence.",
              axe2_voisins: "Meme contexte que la position 9.",
              axe3_sourate: "Meme analyse que pour la position 9.",
              axe4_coherence: "Meme analyse que pour la position 9.",
              axe5_frequence: "Meme analyse que pour la position 9."
            }
          }
        }
      },
      // hdy pos=45 (al-hadyi — troisieme occurrence)
      {
        word_key: "hdy", position: 45, sense_chosen: "offrande",
        analysis_axes: {
          sense_chosen: "offrande",
          concept_chosen: "Guidance/Direction",
          concepts: {
            "Guidance/Direction": {
              status: "retenu",
              senses: ["guider", "diriger", "conduire", "offrir", "hady (offrande)"],
              proof_ctx: "Meme racine que les positions 11 et 17. Le nom al-hadyi est au genitif regi par « min » (parmi). C'est la troisieme mention de l'offrande dans le verset — cette fois pour le pelerin du tamattou' qui doit offrir un sacrifice selon ses moyens. Les trois mentions de al-hady dans le verset couvrent trois situations : (1) le pelerin empoche offre ce qu'il peut, (2) l'offrande doit atteindre son lieu, (3) le pelerin du tamattou' offre ce qu'il peut.",
              axe1_verset: "Le mot al-hadyi est l'objet de l'offrande du pelerin du tamattou'. Le champ lexical (facile, trouver, jeune) montre que l'offrande est l'obligation principale, le jeune etant la compensation de dernier recours.",
              axe2_voisins: "Meme contexte que les positions 11 et 17.",
              axe3_sourate: "Meme analyse que pour la position 11.",
              axe4_coherence: "Meme analyse que pour la position 11.",
              axe5_frequence: "Meme analyse que pour la position 11."
            }
          }
        }
      },
      // wjd pos=48 (yajid)
      {
        word_key: "wjd", position: 48, sense_chosen: "trouver",
        analysis_axes: {
          sense_chosen: "trouver",
          concept_chosen: "Découverte/Existence",
          concepts: {
            "Découverte/Existence": {
              status: "retenu",
              senses: ["trouver", "découvrir", "rencontrer", "posséder", "exister", "être capable de"],
              proof_ctx: "Le verbe yajid est un inaccompli 3MS de la racine w-j-d avec negation (lam yajid = ne trouve pas). Le Lane's donne : trouver, decouvrir, rencontrer, posseder, etre capable de, exister. Le wujud est l'acte de trouver ce qu'on cherche ou de se trouver dans un etat. La decouverte est un acte de rencontre entre le sujet et l'objet — on tombe sur ce qu'on cherchait ou on constate qu'on possede quelque chose. Dans le verset, « man lam yajid » (quiconque ne trouve pas) designe celui qui n'a pas les moyens — il ne trouve pas d'offrande a sacrifier, soit par pauvrete soit par indisponibilite. La negation (lam) transforme la decouverte en absence — ne pas trouver c'est ne pas avoir les moyens. Le champ lexical (offrande, jeune, trois jours) montre que l'absence de moyens ouvre une alternative de dernier recours : le jeune. Les versets voisins traitent du pelerinage. La sourate al-Baqarah utilise w-j-d en 2:65 « vous avez su ceux d'entre vous qui transgresserent le sabbat ». En 4:43, « si vous ne trouvez pas d'eau, faites le tayammum » — le meme principe : si tu ne trouves pas le moyen normal, utilise l'alternative. Pour la mission du khalifa, ne pas trouver de moyen n'est pas une excuse pour abandonner — la loi divine prevoit toujours une alternative.",
              axe1_verset: "Le verbe yajid ouvre la clause de dernier recours. Le champ lexical (offrande, jeune, trois, sept, dix) montre que l'absence de moyens est compensee par le jeune de dix jours. La loi divine ne laisse personne sans solution.",
              axe2_voisins: "En 4:43, l'absence d'eau ouvre le tayammum. En 2:196, l'absence d'offrande ouvre le jeune. Les versets voisins montrent le meme principe de compensation pour l'incapacite.",
              axe3_sourate: "La racine w-j-d apparait dans la sourate al-Baqarah en plusieurs endroits. En 2:96, « tu trouveras qu'ils sont les plus avides de vivre ». En 2:196, ne pas trouver de quoi offrir. La sourate utilise w-j-d pour la decouverte concrete et pour la possession materielle.",
              axe4_coherence: "La racine w-j-d apparait environ 107 fois dans le Coran. Le sens de « ne pas trouver les moyens » apparait dans les versets legislatifs — 2:196, 4:43, 4:92, 5:89, 58:4. Le Coran prevoit systematiquement des alternatives pour ceux qui n'ont pas les moyens.",
              axe5_frequence: "Pour la mission du khalifa, l'incapacite n'est pas une excuse mais une circonstance prevue. Le khalifa peut se trouver dans l'incapacite d'accomplir certaines obligations — la loi divine lui offre des alternatives proportionnees."
            }
          }
        }
      },
      // swm pos=49 (fa-siyamu — deuxieme occurrence)
      {
        word_key: "swm", position: 49, sense_chosen: "jeune",
        analysis_axes: {
          sense_chosen: "jeune",
          concept_chosen: "Jeûne/Abstention",
          concepts: {
            "Jeûne/Abstention": {
              status: "retenu",
              senses: ["jeûne", "abstention", "cessation", "s'abstenir de nourriture"],
              proof_ctx: "Meme racine que la position 30. Le nom siyamu est au nominatif comme sujet de la phrase nominale (« alors un jeune de trois jours »). Ici le jeune est la compensation de dernier recours pour celui qui ne trouve pas d'offrande — dix jours de jeune (trois pendant le hajj et sept au retour) remplacent l'offrande animale. Le nominatif sans article montre que c'est une obligation nouvelle qui se pose.",
              axe1_verset: "Le mot siyamu est la compensation de dernier recours. Le champ lexical (trois, jours, sept, dix) montre que le jeune est quantifie precisement — ce n'est pas un jeune indetermine mais un nombre precis de jours.",
              axe2_voisins: "Meme contexte que la position 30.",
              axe3_sourate: "Meme analyse que pour la position 30.",
              axe4_coherence: "Meme analyse que pour la position 30.",
              axe5_frequence: "Meme analyse que pour la position 30."
            }
          }
        }
      },
      // thlth pos=50 (thalathati)
      {
        word_key: "thlth", position: 50, sense_chosen: "trois",
        analysis_axes: {
          sense_chosen: "trois",
          concept_chosen: "Nombre/Trinité",
          concepts: {
            "Nombre/Trinité": {
              status: "retenu",
              senses: ["trois", "triple", "le nombre trois", "tiers", "troisième"],
              proof_ctx: "Le nom thalathati est un nom en idafa (etat construit) avec ayyamin (jours) de la racine th-l-th. Le Lane's donne : trois, le nombre trois, tripler, tiers, troisieme. Le nombre trois est un denominatif qui quantifie les jours de jeune pendant le pelerinage. L'idafa « thalathati ayyamin » (trois jours) est une construction genitive ordinaire — le nombre qualifie les jours. Le sens est univoque — il n'y a pas d'alternative pertinente pour un nombre. Le nombre trois est mentionne dans un contexte legislatif precis : trois jours de jeune pendant le hajj, complementes par sept jours au retour, pour un total de dix. Le champ lexical (jeune, jours, sept, dix) montre le calcul legislatif. Pour la mission du khalifa, la precision numerique montre que la loi divine est concrete et mesurable — trois jours, pas plus, pas moins.",
              axe1_verset: "Le mot thalathati quantifie les jours de jeune pendant le pelerinage. Le champ lexical (jeune, jours, pelerinage) montre la precision de la legislation.",
              axe2_voisins: "Les versets voisins traitent du pelerinage et de ses regles chiffrees. La precision numerique est caracteristique des versets legislatifs.",
              axe3_sourate: "La racine th-l-th apparait dans la sourate al-Baqarah en 2:196 (trois jours de jeune) et en 2:228 (trois periodes de menstrues). La sourate utilise les nombres pour quantifier les obligations.",
              axe4_coherence: "Le nombre trois apparait dans de nombreux versets legislatifs. En 5:89, trois jours de jeune pour l'expiation du serment. Le Coran utilise trois comme une unite de temps pour les compensations mineures.",
              axe5_frequence: "Pour la mission du khalifa, la precision numerique est un signe de justice — la loi divine ne laisse pas place a l'arbitraire."
            }
          }
        }
      },
      // ywm pos=51 (ayyamin)
      {
        word_key: "ywm", position: 51, sense_chosen: "jour",
        analysis_axes: {
          sense_chosen: "jour",
          concept_chosen: "Temps/Période",
          concepts: {
            "Temps/Période": {
              status: "retenu",
              senses: ["jour", "journée", "période", "temps", "époque", "moment"],
              proof_ctx: "Le nom ayyamin est un nom genitif pluriel de la racine y-w-m. Le Lane's donne : jour, journee, periode de temps, epoque, moment. Le yawm est l'unite de temps fondamentale — du lever au coucher du soleil, ou une periode plus large selon le contexte. Le pluriel ayyam (jours) quantifie la duree du jeune. Le genitif est regi par l'idafa avec thalathati (trois jours). Le sens est univoque — les jours sont la mesure du jeune. Le champ lexical (jeune, trois, pelerinage) confirme le sens de journees de jeune. Pour la mission du khalifa, le temps est la mesure de la mission — chaque jour est une unite d'action.",
              axe1_verset: "Le mot ayyamin mesure la duree du jeune. Le champ lexical (trois, pelerinage, sept) montre la structuration temporelle de la compensation.",
              axe2_voisins: "Les versets voisins utilisent le temps comme cadre de la legislation — les mois, les jours, les periodes structurent les obligations.",
              axe3_sourate: "La racine y-w-m est omnipresente dans la sourate. En 2:184, « des jours comptes » pour le jeune du ramadan. En 2:196, des jours de jeune compensatoire. La sourate mesure les obligations en jours.",
              axe4_coherence: "La racine y-w-m apparait environ 475 fois dans le Coran. Le jour est l'unite de temps la plus frequente — il mesure les obligations terrestres (jeune, pelerinage) et les realites eschatologiques (Jour du Jugement).",
              axe5_frequence: "Pour la mission du khalifa, chaque jour est une unite de la mission. Le jeune de trois jours pendant le hajj est un rappel que chaque jour compte et doit etre utilise avec intention."
            }
          }
        }
      },
      // hjj pos=53 (fi l-hajji)
      {
        word_key: "hjj", position: 53, sense_chosen: "pelerinage",
        analysis_axes: {
          sense_chosen: "pelerinage",
          concept_chosen: "Pèlerinage/Preuve",
          concepts: {
            "Pèlerinage/Preuve": {
              status: "retenu",
              senses: ["pèlerinage", "se diriger vers", "argument", "preuve"],
              proof_ctx: "Meme racine que les positions 2 et 41. Le nom al-hajji est au genitif regi par « fi » (dans/pendant). La construction « fi l-hajji » (pendant le pelerinage) localise temporellement les trois jours de jeune — ils doivent etre accomplis pendant la periode du pelerinage, pas apres le retour. Le pelerinage est ici un cadre temporel, pas un acte a accomplir.",
              axe1_verset: "Le mot al-hajji localise les trois jours de jeune dans le temps du pelerinage. Le champ lexical (trois, jours, sept) montre la repartition temporelle du jeune : trois pendant le hajj, sept au retour.",
              axe2_voisins: "Meme contexte que les positions 2 et 41.",
              axe3_sourate: "Meme analyse que pour la position 2.",
              axe4_coherence: "Meme analyse que pour la position 2.",
              axe5_frequence: "Meme analyse que pour la position 2."
            }
          }
        }
      },
      // sbe pos=54 (sab'atin)
      {
        word_key: "sbe", position: 54, sense_chosen: "sept",
        analysis_axes: {
          sense_chosen: "sept",
          concept_chosen: "Désignation/Pointage",
          concepts: {
            "Désignation/Pointage": {
              status: "retenu",
              senses: ["sept", "le nombre sept", "septième", "semaine"],
              proof_ctx: "Le nom sab'atin est un nom genitif de la racine s-b-'. Le Lane's donne : sept, le nombre sept, septieme, semaine. Le nombre sept est un denominatif qui quantifie les jours de jeune au retour du pelerinage. Le sens de « designation/pointage » qui est le nom du concept dans la base vient d'un autre sens de la racine (saba'a = pointer du doigt), mais ici le sens numerique est le seul pertinent. Le nombre sept complete les trois jours pendant le hajj pour atteindre le total de dix. Le champ lexical (trois, jours, dix, complets) montre le calcul legislatif. La precision numerique est significative : le Coran fixe un nombre exact pour eliminer l'arbitraire. Pour la mission du khalifa, la precision des nombres montre que la justice divine est mesurable et verifiable.",
              axe1_verset: "Le mot sab'atin est le complement des trois jours — sept au retour pour un total de dix. Le champ lexical (trois, dix, complets) montre le calcul legislatif precis.",
              axe2_voisins: "Les versets legislatifs utilisent des nombres precis pour quantifier les obligations. La precision numerique est un trait des sections legislatives de la sourate.",
              axe3_sourate: "La racine s-b-' apparait dans la sourate en 2:196 (sept jours) et en 2:261 (sept epis). La sourate utilise le nombre sept dans des contextes differents — legislatif et parabolique.",
              axe4_coherence: "Le nombre sept apparait frequemment dans le Coran — sept cieux (2:29), sept epis (2:261), sept vaches (12:43). Le Coran utilise sept comme un nombre complet et significatif.",
              axe5_frequence: "Pour la mission du khalifa, la precision numerique montre que la loi divine est concrete et applicable — sept jours, pas approximativement mais exactement."
            }
          }
        }
      },
      // rje pos=56 (raja'tum)
      {
        word_key: "rje", position: 56, sense_chosen: "revenir",
        analysis_axes: {
          sense_chosen: "revenir",
          concept_chosen: "Retour/Réversion",
          concepts: {
            "Retour/Réversion": {
              status: "retenu",
              senses: ["revenir", "retourner", "rentrer", "rétracter", "restituer", "ramener"],
              proof_ctx: "Le verbe raja'tum est un accompli 2MP de la racine r-j-'. Le Lane's donne : revenir, retourner, rentrer, ramener, restituer, retracter. Le ruju' est l'acte de revenir a un point de depart — le mouvement inverse du depart. Le retour est un mouvement spatial et temporel — on quitte un lieu et on y revient. Dans le verset, « idha raja'tum » (quand vous etes rentres) designe le retour des pelerins chez eux apres le pelerinage. Le moment du retour est le declencheur des sept jours de jeune supplementaires. Le verbe est a l'accompli apres « idha » (quand), traitant un evenement futur comme acquis. Le champ lexical (jours, sept, pelerinage) montre que le retour est un repere temporel pour la completion du jeune. Les versets voisins traitent du pelerinage. La sourate al-Baqarah utilise r-j-' en 2:28 « puis a Lui vous serez ramenes » et en 2:46 « ceux qui savent qu'ils rencontreront leur Seigneur et qu'a Lui ils retourneront ». Le retour est un theme majeur de la sourate — le retour a Dieu et le retour chez soi. Pour la mission du khalifa, le retour est une constante de la vie — le khalifa part en mission et revient, le pelerin part en pelerinage et revient.",
              axe1_verset: "Le verbe raja'tum marque le moment du retour chez soi. Le champ lexical (sept, jours, dix) montre que le retour est le declencheur de la deuxieme phase du jeune compensatoire.",
              axe2_voisins: "Le verset 2:202 dira « puis quand vous avez deverse depuis Arafat ». Les versets voisins decrivent les etapes du pelerinage — le retour en est la derniere.",
              axe3_sourate: "La racine r-j-' est frequente dans la sourate al-Baqarah. En 2:28, le retour a Dieu. En 2:196, le retour du pelerinage. La sourate lie le retour physique (du voyage) et le retour metaphysique (a Dieu).",
              axe4_coherence: "La racine r-j-' apparait environ 104 fois dans le Coran. Le retour est un theme fondamental — retour a Dieu, retour chez soi, retour a la raison. Chaque retour est un mouvement vers un point d'origine.",
              axe5_frequence: "Pour la mission du khalifa, le retour est le completement du cycle. Le khalifa part en mission et revient — chaque retour est l'occasion de completer ce qui manquait pendant le voyage."
            }
          }
        }
      },
      // eshr pos=58 ('asharatun)
      {
        word_key: "eshr", position: 58, sense_chosen: "dix",
        analysis_axes: {
          sense_chosen: "dix",
          concept_chosen: "Nombre/Complétude",
          concepts: {
            "Nombre/Complétude": {
              status: "retenu",
              senses: ["dix", "dizaine", "le nombre dix", "dixième"],
              proof_ctx: "Le nom 'asharatun est un nom nominatif de la racine '-sh-r. Le Lane's donne : dix, dizaine, le nombre dix, dixieme, groupe de dix. Le nombre dix recapitule le total des jours de jeune — trois pendant le hajj plus sept au retour. Le demonstratif « tilka » (voila) introduit cette precision recapitulative — le verset verifie que le total est bien compris. Le sens est univoque — c'est un nombre. Le champ lexical (trois, sept, complets) montre le calcul final. La precision « tilka 'asharatun kamilatun » (voila dix complets) est une confirmation emphatique — le Coran ne laisse aucune ambiguite sur le nombre total. Pour la mission du khalifa, la precision numerique est un modele de clarte legislative — la loi doit etre claire pour etre juste.",
              axe1_verset: "Le mot 'asharatun recapitule le calcul des jours de jeune. Le champ lexical (trois, sept, complets) montre la conclusion du calcul legislatif.",
              axe2_voisins: "Les versets legislatifs sont precis dans leurs nombres. La recapitulation est un trait pedagogique du Coran.",
              axe3_sourate: "La racine '-sh-r n'apparait qu'en 2:196 dans la sourate pour le nombre dix. La sourate utilise differents nombres pour differentes obligations.",
              axe4_coherence: "Le nombre dix apparait dans le Coran en 2:196 (dix jours de jeune), 5:89 (nourrir dix pauvres), 7:142 (trente nuits completees de dix). Le Coran utilise dix comme un nombre de completude.",
              axe5_frequence: "Pour la mission du khalifa, le total de dix est un nombre complet — trois plus sept forment un tout suffisant et parfait."
            },
            "Relation proche": {
              status: "nul",
              senses: ["relation", "compagnonnage", "voisinage"],
              proof_ctx: "Le sens de relation proche ('ashira = clan, compagnons) est atteste pour '-sh-r mais le contexte numerique du verset elimine ce sens — il s'agit du nombre dix, pas des relations sociales."
            }
          }
        }
      },
      // kml pos=59 (kamilatun)
      {
        word_key: "kml", position: 59, sense_chosen: "complet",
        analysis_axes: {
          sense_chosen: "complet",
          concept_chosen: "Complétude/Perfection",
          concepts: {
            "Complétude/Perfection": {
              status: "retenu",
              senses: ["complet", "parfait", "achevé", "entier", "intégral", "plein"],
              proof_ctx: "L'adjectif kamilatun est un adjectif nominatif feminin indefini de la racine k-m-l. Le Lane's donne : etre complet, parfait, acheve, entier, ne manquer de rien. Le kamal est l'etat de ce qui est complet et n'a besoin de rien d'autre. L'adjectif qualifie 'asharatun (dix) — « dix complets » signifie que les dix jours forment un tout suffisant. Le feminin singulier s'accorde avec 'asharatun. La completude confirme que le jeune de dix jours est une compensation pleine et entiere — rien de plus n'est requis. C'est un etat de suffisance — celui qui a jeune dix jours a accompli sa compensation integralement. Le champ lexical (dix, trois, sept) montre que la completude est la conclusion du calcul legislatif. La racine k-m-l est proche de t-m-m (achever) qui ouvre le verset — le verset commence par l'achevement (atimmu = accomplissez) et se confirme par la completude (kamilatun = complets). En 5:3, « aujourd'hui J'ai complete (akmaltou) votre religion » — la meme racine pour la completion divine de la religion. Pour la mission du khalifa, la completude est le standard de la mission — rien n'est laisse incomplet.",
              axe1_verset: "L'adjectif kamilatun confirme que les dix jours sont un tout suffisant. Le champ lexical (dix, trois, sept) montre la conclusion du calcul. La completude elimine toute incertitude — dix jours, complets, rien de plus.",
              axe2_voisins: "Les versets legislatifs posent des obligations completes et mesurables. La completude est un trait de la legislation coranique — chaque obligation est definie de maniere claire et suffisante.",
              axe3_sourate: "La racine k-m-l n'apparait qu'en 2:196 dans la sourate. Mais la racine synonyme t-m-m (achevement) apparait en 2:150 et 2:187. La sourate utilise les deux racines pour la meme idee de completion integrale.",
              axe4_coherence: "La racine k-m-l apparait environ 7 fois dans le Coran. En 5:3, « J'ai complete votre religion et acheve Mon bienfait ». En 2:196, la completude des dix jours. Le Coran lie la completude a la suffisance — ce qui est complet n'a besoin de rien d'autre.",
              axe5_frequence: "Pour la mission du khalifa, la completude est le standard. Le khalifa ne fait pas les choses a moitie — chaque obligation est menee a son terme complet."
            }
          }
        }
      },
      // kwn pos=62 (lam yakun)
      {
        word_key: "kwn", position: 62, sense_chosen: "etre",
        analysis_axes: {
          sense_chosen: "etre",
          concept_chosen: "Être/Existence",
          concepts: {
            "Être/Existence": {
              status: "retenu",
              senses: ["être", "exister", "devenir", "se trouver dans un état"],
              proof_ctx: "Meme racine que la position 20. Le verbe yakun est un inaccompli 3MS avec negation (lam yakun = n'est pas). La construction « li-man lam yakun ahluhu hadiri l-masjidi l-harami » designe ceux dont la famille ne reside pas pres de la Mosquee sacree. Le verbe d'etat pose une condition geographique — les regles du tamattou' s'appliquent a ceux qui viennent de loin, pas aux residents de La Mecque. La negation (lam yakun) exclut les residents locaux de l'obligation du tamattou'.",
              axe1_verset: "Le verbe yakun pose la condition geographique. Le champ lexical (famille, residents, Mosquee, sacree) montre le critere de distinction — residence ou non pres de la Mosquee sacree.",
              axe2_voisins: "Meme contexte que la position 20.",
              axe3_sourate: "Meme analyse que pour la position 20.",
              axe4_coherence: "Meme analyse que pour la position 20.",
              axe5_frequence: "Meme analyse que pour la position 20."
            }
          }
        }
      },
      // ahl pos=63 (ahluhu)
      {
        word_key: "ahl", position: 63, sense_chosen: "famille",
        analysis_axes: {
          sense_chosen: "famille",
          concept_chosen: "Famille/Communauté",
          concepts: {
            "Famille/Communauté": {
              status: "retenu",
              senses: ["famille", "gens d'un lieu", "habitants", "ceux qui appartiennent", "ceux qui méritent", "apte", "digne"],
              proof_ctx: "Le nom ahluhu est un nom avec pronom suffixe 3MS de la racine '-h-l. Le Lane's donne : famille, gens d'un lieu, habitants, ceux qui appartiennent a un lieu ou a une personne, ceux qui sont dignes de quelque chose, apte. L'ahl est l'ensemble des personnes liees a quelqu'un par la parente ou la residence — la famille au sens large. Le pronom « son » (hu) lie la famille au pelerin individuel. La construction « lam yakun ahluhu hadiri l-masjidi l-harami » signifie « sa famille ne reside pas pres de la Mosquee sacree » — le critere est la residence familiale, pas individuelle. Le champ lexical (residents, Mosquee, sacree) montre que la famille est le critere geographique de l'applicabilite de la regle. Les versets voisins traitent du pelerinage. Le Coran utilise ahl pour les gens d'un lieu (ahl al-kitab = les gens du Livre) et pour la famille. En 2:196, c'est la famille du pelerin. Pour la mission du khalifa, la famille est le premier cercle de la mission — le lieu de residence de la famille determine l'applicabilite des regles.",
              axe1_verset: "Le mot ahluhu designe la famille du pelerin comme critere geographique. Le champ lexical (residents, Mosquee, sacree) montre que c'est la residence de la famille qui determine l'applicabilite des regles du tamattou'.",
              axe2_voisins: "Les versets voisins traitent du pelerinage. La distinction entre residents et non-residents est specifique au verset 2:196.",
              axe3_sourate: "La racine '-h-l apparait frequemment dans la sourate al-Baqarah. En 2:105, « les gens du Livre » (ahl al-kitab). En 2:196, la famille du pelerin. La sourate utilise ahl pour les gens d'un lieu ou d'un groupe.",
              axe4_coherence: "La racine '-h-l apparait environ 127 fois dans le Coran. L'ahl designe la famille, les habitants, les adherents d'un groupe. En 11:45, « mon fils est de ma famille (ahli) ». Le Coran utilise ahl pour le lien familial et pour le lien d'appartenance.",
              axe5_frequence: "Pour la mission du khalifa, la famille est le premier cercle de responsabilite. La residence de la famille determine les obligations rituelles — le khalifa est lie a son lieu d'origine par sa famille."
            }
          }
        }
      },
      // hdr pos=64 (hadiri)
      {
        word_key: "hdr", position: 64, sense_chosen: "resider",
        analysis_axes: {
          sense_chosen: "resider",
          concept_chosen: "Présence/Témoignage",
          concepts: {
            "Présence/Témoignage": {
              status: "retenu",
              senses: ["être présent", "résider", "habiter", "se trouver dans un lieu", "témoin", "sédentaire"],
              proof_ctx: "Le nom hadiri est un participe actif genitif pluriel de la racine h-d-r. Le Lane's donne : etre present, resider, habiter un lieu, se trouver quelque part, etre sedentaire. Le hadir est celui qui est present dans un lieu — il y reside, il y habite de maniere permanente. Le participe actif marque une presence continue et habituelle — ce sont des residents permanents, pas des visiteurs temporaires. Le pluriel hadiri designe « les residents de » la Mosquee sacree — les habitants de La Mecque et de ses environs. La construction « hadiri l-masjidi l-harami » est une idafa — les residents DE la Mosquee sacree. Le champ lexical (famille, Mosquee, sacree) montre que la residence est le critere de distinction. La racine h-d-r est la meme que celle utilisee pour la presence en 2:133 et 2:180. Ici le sens est la residence permanente, pas la presence ponctuelle. En 2:180, hadara etait la presence ponctuelle de la mort. En 2:196, hadiri est la residence permanente. La meme racine couvre les deux nuances : la presence ponctuelle et la residence permanente. Pour la mission du khalifa, la residence est le lieu de la mission — le khalifa vit quelque part et y exerce sa responsabilite.",
              axe1_verset: "Le mot hadiri designe les residents permanents de la Mosquee sacree. Le champ lexical (famille, Mosquee, sacree) montre que c'est la residence familiale pres du lieu sacre qui determine l'applicabilite des regles.",
              axe2_voisins: "Les versets voisins traitent du pelerinage. La distinction entre residents et non-residents est propre au verset 2:196.",
              axe3_sourate: "La racine h-d-r apparait en 2:133 (la mort de Jacob), 2:180 (la mort du croyant) et 2:196 (les residents de la Mosquee). La sourate utilise h-d-r pour la presence ponctuelle et la residence permanente.",
              axe4_coherence: "La racine h-d-r apparait environ 44 fois dans le Coran. Le sens de residence permanente est atteste en 2:196. Le sens de presence ponctuelle est plus frequent. Le Coran distingue implicitement les deux nuances par le contexte.",
              axe5_frequence: "Pour la mission du khalifa, la residence est le lieu de la mission. Les residents de la Mosquee sacree ont des obligations differentes des pelerins venus de loin — le lieu de vie determine les regles applicables."
            },
            "Sédentarité/Civilisation": {
              status: "probable",
              senses: ["sédentarité", "civilisation", "vie urbaine", "installation permanente"],
              proof_ctx: "Le sens de sedentarite est bien atteste pour h-d-r — le hadar est la vie sedentaire par opposition au badw (nomadisme). En 2:196, les hadiri l-masjidi l-harami sont les sedentaires de La Mecque — ceux qui y sont installes de maniere permanente. La distinction philosophique entre presence et sedentarite est mince dans ce contexte — les residents de la Mosquee sacree sont a la fois presents (hadirin) et sedentaires (hadariyyin). Le concept de Presence/Temoignage est retenu parce qu'il est plus large et couvre aussi la dimension de temoignage — les residents de la Mosquee sont des temoins permanents de son existence."
            }
          }
        }
      },
      // sjd pos=65 (al-masjidi)
      {
        word_key: "sjd", position: 65, sense_chosen: "lieu de prosternation",
        analysis_axes: {
          sense_chosen: "lieu de prosternation",
          concept_chosen: "Prosternation/Adoration",
          concepts: {
            "Prosternation/Adoration": {
              status: "retenu",
              senses: ["se prosterner", "s'incliner", "adorer", "prosternation", "mosquée", "lieu de prosternation"],
              proof_ctx: "Le nom al-masjidi est un nom defini genitif de la racine s-j-d. Le Lane's donne : se prosterner, s'incliner en posant le front au sol, adorer, se soumettre. Le masjid est etymologiquement le lieu ou l'on se prosterne (ma-sjid = lieu de s-j-d) — le nom de lieu est forme sur le schema maf'id. L'article al- et la qualification al-haram (le sacre) designent specifiquement la Mosquee de La Mecque — al-Masjid al-Haram. La prosternation est l'acte de soumission ultime — poser le front au sol, la partie la plus haute du corps, au point le plus bas. Le lieu de prosternation est l'espace consacre a cet acte de soumission totale. Le champ lexical (residents, sacre) montre que le masjid est le lieu de reference geographique pour la distinction entre residents et pelerins. Les versets voisins traitent du pelerinage autour de la Mosquee sacree. La sourate al-Baqarah mentionne al-Masjid al-Haram en 2:144, 2:149, 2:150 (qibla), 2:191 (combat), 2:196 (pelerinage), 2:217 (interdit d'en empecher l'acces). Le Masjid al-Haram est un lieu central de la sourate. Pour la mission du khalifa, la mosquee est le lieu ou le khalifa se prosterne — l'acte de prosternation est la reconnaissance que la mission vient de Dieu.",
              axe1_verset: "Le mot al-masjidi designe la Mosquee sacree comme point de reference geographique. Le champ lexical (residents, sacre) montre que le lieu est le critere de distinction entre residents et pelerins.",
              axe2_voisins: "En 2:144-150, al-Masjid al-Haram est la qibla. En 2:191, il est interdit de combattre pres de lui. En 2:196, il est le critere de residence. La Mosquee sacree est omnipresente dans la section du pelerinage.",
              axe3_sourate: "La racine s-j-d apparait dans la sourate en 2:34 (prosternez-vous devant Adam), 2:125 (la Maison comme lieu de priere), 2:144-150 (la qibla), 2:196 (la Mosquee sacree). La sourate developpe la prosternation depuis l'acte des anges jusqu'au lieu du pelerinage.",
              axe4_coherence: "La racine s-j-d apparait environ 92 fois dans le Coran. La prosternation est l'acte d'adoration par excellence. Le Masjid al-Haram est mentionne environ 16 fois — c'est le lieu le plus sacre du Coran.",
              axe5_frequence: "Pour la mission du khalifa, la mosquee est le lieu de la prosternation et de la mission. Le khalifa se prosterne pour reconnaitre que sa mission vient de Dieu — la Mosquee sacree est le centre geographique de cette mission."
            }
          }
        }
      },
      // hrm pos=66 (al-harami)
      {
        word_key: "hrm", position: 66, sense_chosen: "sacre",
        analysis_axes: {
          sense_chosen: "sacre",
          concept_chosen: "Interdiction/Sacré",
          concepts: {
            "Interdiction/Sacré": {
              status: "retenu",
              senses: ["interdit", "sacré", "inviolable", "protégé", "haram", "tabou", "illicite"],
              proof_ctx: "Le nom al-harami est un nom defini genitif de la racine h-r-m. Le Lane's donne : interdire, rendre sacre, inviolable, protege par un tabou, haram (l'interdit), le Sanctuaire. Le haram est ce qui est a la fois sacre et interdit — le caractere sacre d'un lieu ou d'un acte le rend intouchable. C'est un etat de protection divine — ce qui est haram est protege par Dieu contre la profanation. Le sacre et l'interdit sont les deux faces de la meme realite : ce qui est sacre est interdit a la profanation, et ce qui est interdit est sacre parce que protege. L'article al- definit le sacre comme une qualite connue de la Mosquee. La construction « al-Masjid al-Haram » (la Mosquee sacree) est un nom propre compose — le lieu de prosternation qui est sacre et inviolable. Le champ lexical (Mosquee, residents) montre que le sacre est la qualification du lieu. Les versets voisins traitent du pelerinage autour du lieu sacre. La sourate al-Baqarah utilise h-r-m en 2:144-150 (al-Masjid al-Haram), 2:191 (combat), 2:194 (mois sacre), 2:196 (pelerinage), 2:197 (pelerinage). La racine h-r-m est omnipresente dans la section du pelerinage. Pour la mission du khalifa, le sacre est la limite qui ne peut pas etre franchie — le khalifa respecte les interdits divins comme des frontieres inviolables.",
              axe1_verset: "Le mot al-harami qualifie la Mosquee comme sacree et inviolable. Le champ lexical (Mosquee, residents) montre que le sacre est le critere qui rend ce lieu specifique et different de tout autre.",
              axe2_voisins: "En 2:194, le mois sacre (al-shahru l-haram). En 2:196, la Mosquee sacree (al-Masjid al-Haram). En 2:197, le pelerinage a lieu dans des mois connus. La section du pelerinage est construite autour de la sacralite — mois sacres, lieu sacre, etat sacralise.",
              axe3_sourate: "La racine h-r-m apparait dans la sourate en 2:173 (interdit alimentaire), 2:194 (mois sacre), 2:196 (Mosquee sacree), 2:217 (combattre dans le mois sacre). La sourate couvre l'interdit sous toutes ses formes — alimentaire, temporel, spatial.",
              axe4_coherence: "La racine h-r-m apparait environ 83 fois dans le Coran. Le sacre et l'interdit structurent la vie du croyant — il y a des lieux sacres, des temps sacres, des actes interdits. Le Coran pose des limites claires entre le halal et le haram.",
              axe5_frequence: "Pour la mission du khalifa, le sacre est la frontiere que le khalifa ne franchit pas. Le respect du haram est le fondement de la mission — sans respect des interdits, la mission perd sa base."
            }
          }
        }
      },
      // wqy pos=68 (ittaqu)
      {
        word_key: "wqy", position: 68, sense_chosen: "se premunir",
        analysis_axes: {
          sense_chosen: "se premunir",
          concept_chosen: "Protection/Préservation",
          concepts: {
            "Protection/Préservation": {
              status: "retenu",
              senses: ["se prémunir", "se protéger", "prendre garde", "préserver", "placer un bouclier"],
              proof_ctx: "Le verbe ittaqu est un imperatif 2MP de la forme VIII de la racine w-q-y. Le Lane's donne : se premunir, se proteger, prendre garde, placer un bouclier (wiqaya) entre soi et ce qu'on craint. La forme VIII (ifta'ala) ajoute l'idee de reflexivite et d'effort — le sujet se protege lui-meme activement. L'imperatif « ittaqu Llaha » (premunissez-vous de Dieu) est une injonction qui ferme la section legislative. Se premunir de Dieu c'est placer une protection entre soi et les consequences de la desobeissance — en obeissant a Ses commandements, on se protege de Ses consequences. Le champ lexical (Dieu, sachez, severe, consequence) montre que la premunition est liee a la conscience des consequences. Les versets voisins (2:194, 2:196, 2:197) repetent cette injonction — elle est le refrain de la section du pelerinage. La sourate al-Baqarah ouvre par les muttaqin (2:2) et y revient constamment. La racine w-q-y est une des plus frequentes de la sourate. Pour la mission du khalifa, la premunition est la discipline de la mission — le khalifa se protege activement contre la corruption en obeissant aux commandements divins.",
              axe1_verset: "Le verbe ittaqu ferme la section legislative. Le champ lexical (Dieu, sachez, severe, consequence) montre que la premunition est l'attitude requise apres l'enonce des regles — obeir aux regles c'est se premunir.",
              axe2_voisins: "En 2:194, « premunissez-vous de Dieu ». En 2:196, meme injonction. En 2:197, « premunissez-vous de Dieu, o doues d'intelligence ». Le refrain de la premunition ponctue toute la section du pelerinage.",
              axe3_sourate: "La racine w-q-y est presente des 2:2 (les muttaqin) et ponctue toute la sourate. La taqwa est le fil conducteur de la legislation — chaque section legislative se conclut par un appel a la premunition.",
              axe4_coherence: "La racine w-q-y apparait environ 258 fois dans le Coran. La premunition est l'attitude fondamentale du croyant — se proteger activement contre les consequences de la desobeissance.",
              axe5_frequence: "Pour la mission du khalifa, la premunition est le moteur de la mission. Le khalifa qui se premunit activement contre la corruption accomplit sa mission."
            }
          }
        }
      },
      // alh pos=69 (Allaha — deuxieme occurrence)
      {
        word_key: "alh", position: 69, sense_chosen: "Dieu",
        analysis_axes: {
          sense_chosen: "Dieu",
          concept_chosen: "Divinité",
          concepts: {
            "Divinité": {
              status: "retenu",
              senses: ["divinité", "Dieu", "ce qui est adoré"],
              proof_ctx: "Meme racine que la position 5. Le nom Allaha est ici l'objet de la premunition (ittaqu Llaha = premunissez-vous de Dieu). Se premunir de Dieu c'est placer une protection entre soi et les consequences de la desobeissance a Dieu.",
              axe1_verset: "Le mot Allaha est l'objet de la premunition. Le champ lexical (premunissez-vous, sachez, severe, consequence) montre que Dieu est a la fois l'objet de la crainte et la source des consequences.",
              axe2_voisins: "Meme contexte que la position 5.",
              axe3_sourate: "Meme analyse que pour la position 5.",
              axe4_coherence: "Meme analyse que pour la position 5.",
              axe5_frequence: "Meme analyse que pour la position 5."
            }
          }
        }
      },
      // elm pos=71 (i'lamu)
      {
        word_key: "elm", position: 71, sense_chosen: "savoir",
        analysis_axes: {
          sense_chosen: "savoir",
          concept_chosen: "Savoir/Connaissance",
          concepts: {
            "Savoir/Connaissance": {
              status: "retenu",
              senses: ["savoir", "connaître", "apprendre", "être informé", "science", "connaissance"],
              proof_ctx: "Le verbe i'lamu est un imperatif 2MP de la racine '-l-m. Le Lane's donne : savoir, connaitre, apprendre, etre informe, avoir la science de. Le 'ilm est la connaissance certaine — savoir quelque chose avec certitude, pas simplement le croire. L'imperatif « wa-'lamu » (et sachez) introduit un avertissement — le verset passe de la legislation a l'avertissement. Savoir que Dieu est severe en consequence n'est pas une information neutre — c'est une mise en garde qui motive l'obeissance. Le champ lexical (premunissez-vous, Dieu, severe, consequence) montre que le savoir est lie a la conscience des consequences — savoir c'est etre informe de ce qui suivra la desobeissance. Les versets voisins repetent cette formule. La sourate al-Baqarah utilise '-l-m constamment — le savoir est un theme central. En 2:194, « sachez que Dieu est avec ceux qui se premunissent ». En 2:196, « sachez que Dieu est severe en consequence ». Le meme imperatif i'lamu introduit des verites differentes selon le contexte. Pour la mission du khalifa, le savoir est la base de la mission — le khalifa agit en connaissance de cause, pas dans l'ignorance.",
              axe1_verset: "Le verbe i'lamu introduit l'avertissement final. Le champ lexical (Dieu, severe, consequence) montre que le savoir porte sur les consequences de la desobeissance.",
              axe2_voisins: "En 2:194, « sachez que Dieu est avec les muttaqin ». En 2:196, « sachez que Dieu est severe en consequence ». En 2:209, « sachez que Dieu est puissant et sage ». L'imperatif i'lamu est le refrain d'avertissement de la sourate.",
              axe3_sourate: "La racine '-l-m est une des plus frequentes de la sourate. En 2:30, les anges disent « nous ne savons que ce que Tu nous as appris ». En 2:31, Dieu apprend a Adam les noms. La sourate construit le savoir comme un don divin et une responsabilite humaine.",
              axe4_coherence: "La racine '-l-m apparait environ 854 fois dans le Coran. Le savoir est un des themes les plus developpes — le Coran insiste sur la connaissance comme fondement de la foi et de l'action.",
              axe5_frequence: "Pour la mission du khalifa, le savoir est le fondement de la mission. Le khalifa sait — il connait les regles, les consequences, et la realite de la situation. Le savoir transforme l'obeissance aveugle en obeissance eclairee."
            }
          }
        }
      },
      // alh pos=73 (Allaha — troisieme occurrence)
      {
        word_key: "alh", position: 73, sense_chosen: "Dieu",
        analysis_axes: {
          sense_chosen: "Dieu",
          concept_chosen: "Divinité",
          concepts: {
            "Divinité": {
              status: "retenu",
              senses: ["divinité", "Dieu", "ce qui est adoré"],
              proof_ctx: "Meme racine que les positions 5 et 69. Le nom Allaha est ici le sujet de la clause finale (anna Llaha shadidu l-'iqabi = que Dieu est severe en consequence). Dieu est qualifie par la severite de ses consequences — c'est une mise en garde directe.",
              axe1_verset: "Le mot Allaha est le sujet de la clause d'avertissement. Le champ lexical (sachez, severe, consequence) montre que Dieu est la source des consequences de la desobeissance.",
              axe2_voisins: "Meme contexte que les positions 5 et 69.",
              axe3_sourate: "Meme analyse que pour la position 5.",
              axe4_coherence: "Meme analyse que pour la position 5.",
              axe5_frequence: "Meme analyse que pour la position 5."
            }
          }
        }
      },
      // shdd pos=74 (shadidu)
      {
        word_key: "shdd", position: 74, sense_chosen: "severe",
        analysis_axes: {
          sense_chosen: "severe",
          concept_chosen: "Force",
          concepts: {
            "Force": {
              status: "retenu",
              senses: ["fort", "sévère", "intense", "rigoureux", "dur", "violent", "puissant"],
              proof_ctx: "L'adjectif shadidu est un adjectif de la racine sh-d-d en idafa avec al-'iqab. Le Lane's donne : etre fort, severe, intense, rigoureux, dur, violent, puissant, difficile a supporter. Le shidda est l'intensite — ce qui est shadid est intense dans sa nature. La force n'est pas la brutalite — c'est l'intensite qui ne laisse pas de place a la faiblesse. L'adjectif qualifie Dieu en idafa avec la consequence (shadidu l-'iqab = severe en consequence / intense dans la consequence). La construction en idafa lie la severite a la consequence comme une qualite indissociable — Dieu n'est pas severe en general, il est severe DANS sa consequence. Le champ lexical (Dieu, sachez, consequence) montre que la severite est l'attribut divin qui motive l'obeissance — savoir que les consequences sont severes pousse a obeir. Les versets voisins traitent du pelerinage — la severite divine est le garde-fou de la legislation. La sourate al-Baqarah mentionne la severite en 2:165 « que la force appartient a Dieu tout entiere » et en 2:196 « severe en consequence ». En 2:211, « Dieu est severe en consequence ». Pour la mission du khalifa, la severite divine rappelle que la mission a des enjeux reels — la desobeissance a des consequences severes.",
              axe1_verset: "L'adjectif shadidu qualifie la consequence divine. Le champ lexical (sachez, Dieu, consequence) montre la conclusion du verset — un avertissement solennel.",
              axe2_voisins: "En 2:211, la meme expression « shadidu l-'iqab ». En 3:11, « Dieu est severe en consequence ». La formule est un leitmotiv coranique d'avertissement.",
              axe3_sourate: "La racine sh-d-d apparait dans la sourate en 2:74 (coeurs durs comme la pierre), 2:85 (chatiment severe), 2:165 (force), 2:196 (severe en consequence). La sourate utilise la severite comme avertissement et comme attribut divin.",
              axe4_coherence: "La racine sh-d-d apparait environ 105 fois dans le Coran. L'expression « shadidu l-'iqab » apparait environ 14 fois — c'est un attribut divin recurrent qui rappelle que les consequences de la desobeissance sont intenses.",
              axe5_frequence: "Pour la mission du khalifa, la severite divine rappelle les enjeux de la mission. Les consequences de la corruption et de l'injustice sont severes — le khalifa qui neglige sa mission fait face a des consequences intenses."
            }
          }
        }
      },
      // eqb pos=75 (al-'iqabi)
      {
        word_key: "eqb", position: 75, sense_chosen: "consequence",
        analysis_axes: {
          sense_chosen: "consequence",
          concept_chosen: "Succession/Conséquence",
          concepts: {
            "Succession/Conséquence": {
              status: "retenu",
              senses: ["conséquence", "suite", "talonnement", "succession", "ce qui suit", "rétribution", "punition"],
              proof_ctx: "Le nom al-'iqabi est un nom defini genitif de la racine '-q-b. Le Lane's donne : ce qui vient apres, suite, consequence, talonnement (suivre les talons de quelqu'un), chatiment, retribution, resultat d'un acte. La racine '-q-b porte l'idee fondamentale de succession — le 'aqib est le talon, la partie du pied qui suit le reste du corps. Le 'iqab est ce qui suit un acte comme le talon suit le pied — c'est la consequence naturelle et inevitable. Le mot est souvent traduit par « chatiment » ou « punition », mais l'etymologie pointe vers la consequence — ce qui talonne l'acte et le suit inevitablement. La consequence n'est pas une punition arbitraire decidee apres coup — c'est une suite naturelle inscrite dans la nature des choses. L'article al- definit la consequence comme une realite connue — LA consequence, pas une consequence parmi d'autres. Le champ lexical (Dieu, severe, sachez) montre que la consequence est l'objet de la severite divine — Dieu est severe dans ses consequences. Les versets voisins traitent du pelerinage. La sourate al-Baqarah mentionne la consequence en 2:196 et 2:211. En 13:6, « ton Seigneur est pardonnant envers les gens malgre leur injustice, et ton Seigneur est severe en consequence ». Le Coran lie le pardon et la consequence — Dieu pardonne mais ses consequences sont severes. Pour la mission du khalifa, les consequences rappellent que chaque acte a une suite — le khalifa agit en sachant que ses actes seront suivis de consequences.",
              axe1_verset: "Le mot al-'iqabi est l'objet de la severite divine. Le champ lexical (sachez, Dieu, severe) montre que la consequence ferme le verset par un avertissement — apres les regles, les consequences de la desobeissance.",
              axe2_voisins: "En 2:211, « Dieu est severe en consequence ». En 3:11, meme expression. La formule est un refrain d'avertissement qui ponctue les sections legislatives.",
              axe3_sourate: "La racine '-q-b apparait en 2:196 et 2:211 dans la sourate. Les deux occurrences sont des avertissements qui ferment des sections legislatives. La sourate utilise la consequence comme garde-fou de la legislation.",
              axe4_coherence: "La racine '-q-b apparait environ 60 fois dans le Coran. L'expression « shadidu l-'iqab » apparait environ 14 fois. En 59:7, « Dieu est severe en consequence ». Le Coran rappelle constamment que les actes ont des consequences — la legislation est encadree par la conscience de ces consequences.",
              axe5_frequence: "Pour la mission du khalifa, les consequences sont la realite de la mission. Le khalifa sait que chaque decision a une suite — les consequences de la justice sont positives, les consequences de l'injustice sont severes. La conscience des consequences est le moteur de l'action juste."
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

  const verseIds = [203];
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
  console.log('=== PIPELINE SOURATE 2 — VERSET 196 ===\n');
  await processVerse(196);
  await syncWordMeanings();
  console.log('\n=== PIPELINE V196 TERMINEE ===');
}

main().catch(e => console.error('FATAL:', e));
