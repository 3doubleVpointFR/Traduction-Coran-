const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

async function run() {
  const vid = 370;

  // === TRANSLATION_ARAB ===
  // Conserver la traduction existante (déjà bonne)
  const translation_arab = "En vérité, ceux qui troquent l'engagement de Dieu et leurs serments contre un prix infime — pour eux aucune part dans la vie à venir, et Dieu ne leur parlera pas, ne les regardera pas au jour de la résurrection, ne les purifiera pas — et pour eux un tourment douloureux.";

  // === §DEMARCHE§ — un mot par paragraphe ===
  const demarche = `§DEMARCHE§

Ce verset fait suite au verset 76 qui louait ceux qui respectent leurs engagements et se préservent. Par un renversement symétrique, le verset 77 dresse le portrait inverse — ceux qui troquent ce même engagement divin contre un gain mondain dérisoire — et annonce quatre conséquences dans la vie à venir : aucune part, pas de parole de Dieu, pas de regard de Dieu, pas de purification.

**Inna** (en vérité) est une particule d'affirmation et de mise en relief qui place ce qui suit sous le signe de la certitude absolue. Elle régit l'accusatif sur le sujet qui la suit.

**Al-ladhīna** (ceux qui) est un pronom relatif masculin pluriel, sujet de la phrase — à l'accusatif après inna. La structure inna al-ladhīna = « certes, ceux qui… » introduit une sentence solennelle qui décrit une catégorie de personnes par leurs actes.

**Yashtarūna** (troquent) est un verbe de la racine ش ر ي (sh-r-y) à la Forme VIII (la Forme VIII ajoute un ta après la première consonne radicale — ish-ta-ra — et exprime l'acte de faire sortir de soi pour acquérir), à l'inaccompli actif, 3ème personne du masculin pluriel. D'après les sources étymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la racine sh-r-y signifie à la fois vendre et acheter — les deux faces d'une même transaction. La Forme VIII ishtarā particularise l'acte d'acquérir en échange de quelque chose. La construction ishtarā bi-X Y (acquérir Y en donnant X) est attestée par Lane's : ici X = ʿahdi Allāhi wa-aymānihim (le pacte divin et les serments), Y = thamanan qalīlan (un prix infime) — échange inégal où l'on cède le précieux pour le dérisoire.

**Bi-ʿahdi** (avec l'engagement de) est formé de la préposition bi (avec, en échange de) + le nom ʿahd au génitif en état construit (idāfa) avec allāhi. La racine ع ه د (ʿ-h-d) désigne au sens premier l'engagement bilatéral qui lie les parties. Dans cette construction avec bi-, la préposition marque ce qui est cédé dans l'échange : le pacte divin est la contrepartie qu'ils donnent.

**Allāhi** (Dieu) est le nom propre divin au génitif, second terme de l'idāfa avec ʿahdi. ʿAhdi Allāhi = « l'engagement de Dieu », ce que Dieu a établi comme lien avec l'humain — lien précieux que les sujets cèdent.

**Aymānihim** (leurs serments) est un nom de la racine ي م ن (y-m-n), masculin pluriel génitif, avec le pronom suffixe -him (leur). D'après les sources étymologiques, la racine y-m-n désigne la droite — la main droite — et par extension le serment prononcé en levant la main droite. Yamīn = main droite au singulier ; aymān (pluriel) = les serments solennels. Coordonné avec ʿahdi Allāhi par wa (et), le terme étend la cession : deux biens liés à la parole donnée sont simultanément troqués.

**Thamanan** (un prix) est un nom de la racine ث م ن (th-m-n), masculin singulier accusatif indéfini, complément d'objet direct de yashtarūna. D'après les sources étymologiques, thaman = ce qui est donné en échange d'une chose, la contrepartie. Dans la construction ishtarā bi-X thamanan, c'est ce qu'ils obtiennent dans l'échange. L'indéfini (thamanan = un prix quelconque) souligne l'insignifiance de ce qu'ils reçoivent.

**Qalīlan** (infime) est un adjectif de la racine ق ل ل (q-l-l), masculin singulier accusatif indéfini, épithète de thamanan. D'après les sources étymologiques, qalīl = qui est en petite quantité, peu abondant. Accolé à thaman, il qualifie le prix comme dérisoire face à ce qui est cédé.

**Ulāʾika** (ceux-là) est un pronom démonstratif pluriel de l'éloignement. Il reprend al-ladhīna et introduit la sentence qui suit — marqueur grammatical classique pour énoncer la conséquence d'un état décrit.

**Lā khalāqa** (aucune part) : lā est ici la particule de négation absolue du genre (lā al-nāfiya li-l-jins) — elle nie l'existence même de la chose, sans exception possible, et régit l'accusatif. **Khalāqa** est un nom de la racine خ ل ق (kh-l-q), masculin singulier accusatif — à distinguer du verbe khalaqa (créer). D'après les sources étymologiques, khalāq signifie une part, une portion de bien — plus précisément, une portion complète et pleine de bien et de droiture. Lane's cite exactement cette construction : « lā khalāqa lahu fī l-ākhirah = il n'y a aucune part [de bien] pour lui dans la vie dernière » en référence à ce verset (3:77). La structure lā + khalāqa (accusatif) + lahum (pour eux) nie absolument toute portion.

**Fī-l-ākhirah** (dans la vie à venir) : fī est la préposition locative (dans, en). **Al-ākhirah** est un nom de la racine أ خ ر (ʾ-kh-r), féminin singulier génitif défini. La racine ʾ-kh-r désigne ce qui vient après, ce qui est le dernier. D'après les sources étymologiques, al-ākhirah (avec l'article défini + forme féminine) est la désignation coranique de la vie après la mort — abréviation de al-dār al-ākhirah (la demeure dernière). Ce qui vient après cette vie-ci.

**Wa-lā yukallimuhumu** (et ne leur parlera pas) : **Yukallimu** est un verbe de la racine ك ل م (k-l-m) à la Forme II (forme factitive qui intensifie l'action sur un objet direct — parler À quelqu'un), à l'inaccompli actif, 3ème personne du masculin singulier, avec le pronom suffixe accusatif -humu (eux). D'après les sources étymologiques, la racine k-l-m désigne la parole articulée, le discours adressé. La Forme II yukallimu = s'adresser directement à quelqu'un. La négation par wa-lā : refus du dialogue divin, exclusion de la communication personnelle.

**Allāhu** (Dieu) est le sujet explicite du verbe yukallimuhumu, au nominatif. La reprise du sujet divin à cet endroit renforce la solennité de l'annonce.

**Wa-lā yanẓuru** (et ne regardera pas) est un verbe de la racine ن ظ ر (n-ẓ-r) à la Forme I, inaccompli actif, 3ème personne du masculin singulier. Construit avec la préposition ilā + pronom (ilayhim = vers eux). D'après les sources étymologiques, naẓara ilā = diriger le regard vers, regarder avec attention. Le regard nié ici n'est pas la perception générale (Dieu perçoit tout) mais le regard d'attention bienveillante accordée à quelqu'un.

**Yawma** (le jour de) est un nom de la racine ي و م (y-w-m), masculin singulier accusatif (complément circonstanciel de temps), en idāfa avec al-qiyāmah. D'après les sources étymologiques, yawm = jour, journée, période de temps définie. La construction yawma al-qiyāmah = « le jour du Grand Lever » situe temporellement le refus divin.

**Al-qiyāmah** (la résurrection) est un nom verbal (masdar) de la racine ق و م (q-w-m), féminin singulier génitif défini. Le masdar qiyāmah = le fait de se lever, l'action de se dresser. D'après les sources étymologiques, qāma = se lever, se tenir debout. Al-qiyāmah (avec l'article défini) désigne le Grand Lever — le moment où tous les êtres se lèveront de leurs tombes. Étymologiquement « le fait que tous se lèvent », non « le jugement » qui serait al-ḥisāb.

**Wa-lā yuzakkīhim** (et ne les purifiera pas) est un verbe de la racine ز ك و (z-k-w) à la Forme II (zakkā = purifier, rendre pur, faire croître), inaccompli actif, 3ème personne du masculin singulier, avec le pronom suffixe -him (eux). La Forme II yuzakkī = il purifie, il rend pur — acte actif et directionnel. D'après les sources étymologiques, zakā (Forme I) = être pur, croître ; zakkā (Forme II) = purifier, déclarer pur. La négation : Dieu ne les purifiera pas, ne les déclarera pas purs.

**Wa-lahum** (et pour eux) : wa = et (coordination), la = préposition (pour, à), -hum = pronom suffixe 3MP (eux). La construction lahum est antéposée par rapport au sujet ʿadhābun — taqdīm (mise en avant) qui souligne que le tourment leur est spécifiquement destiné.

**ʿAdhābun** (un tourment) est un nom de la racine ع ذ ب (ʿ-dh-b), masculin singulier nominatif indéfini, sujet tardif de la construction lahum ʿadhābun. D'après les sources étymologiques, ʿadhāb = tourment, châtiment — acte d'infliger une souffrance. Fait notable : le sens premier de la racine ʿ-dh-b est paradoxalement « doux/agréable » (eau douce, ʿadhb) — ʿadhāb comme tourment est l'extension opposée, celle qui fait mal au lieu d'être agréable.

**Alīmun** (douloureux) est un adjectif de la racine أ ل م (ʾ-l-m), masculin singulier nominatif indéfini, épithète de ʿadhāb. D'après les sources étymologiques, alīm est de la forme faʿīl qui exprime l'intensité ou la permanence de l'état — « qui cause beaucoup de douleur, profondément douloureux ». La forme renforce le caractère aigu et pénétrant du tourment.`;

  // === §JUSTIFICATION§ — un mot par entrée ===
  const justification = `§JUSTIFICATION§

**troquent** — Le sens retenu est « acheter » (Échange/Transaction) de la racine sh-r-y. Le mot « troquent » est choisi car il rend l'échange inégal au cœur du verset : quelque chose de précieux (le pacte divin, les serments) est cédé pour quelque chose de peu de valeur (un prix infime). L'alternative « achètent » est écartée car elle met l'accent sur l'acquisition sans rendre l'inégalité de l'échange. « Vendent » est écartée car la Forme VIII ishtarā spécifie l'acte d'acquérir, non de céder. « Échangent » est possible mais neutre — « troquent » porte la connotation de l'échange peu avantageux.

**l'engagement de** — Le sens retenu est « engagement » (Engagement/Promesse) de la racine ʿ-h-d. Le mot « engagement » est choisi car ʿahd désigne un lien contracté par une parole donnée — quelque chose d'actif, d'obligeant. L'alternative « pacte » est proche mais souligne davantage la dimension bilatérale formelle. « Alliance » est écartée car elle implique une symétrie entre égaux, alors que ʿahd Allāh est un lien établi par Dieu. « Engagement » rend la dimension d'obligation personnelle que le verset décrit comme trahie.

**Dieu** — Nom propre divin (allāh). Toujours rendu par « Dieu » en français courant, conformément à la règle de traduction.

**leurs serments** — Le sens retenu est « serment » (Droite/Serment) de la racine y-m-n. Le mot « serments » est choisi car aymān (pluriel de yamīn = main droite → serment) désigne les engagements solennels pris en levant la main droite. L'alternative « leurs droites » (sens littéral) est écartée car le contexte est celui d'engagements verbaux trahis, non d'une référence anatomique. « Leurs promesses » est écartée car trop faible — le serment a un caractère solennel absent de la simple promesse.

**un prix** — Le sens retenu est « prix » (Valeur/Prix) de la racine th-m-n. Le mot « prix » est choisi car thaman désigne la contrepartie reçue dans un échange — ce que l'on obtient en donnant autre chose. L'alternative « valeur » est écartée car elle implique une qualité intrinsèque, alors que thaman est relationnel (contrepartie d'un échange). « Contrepartie » est trop juridique pour le français courant.

**infime** — Le sens retenu est « être peu » (Quantité/Rareté) de la racine q-l-l. Le mot « infime » est choisi car qalīl qualifie ce qui est de faible quantité ; accolé à thaman, il rend l'insignifiance absolue du prix reçu face à ce qui est cédé. L'alternative « dérisoire » est possible mais porte un jugement de valeur ; « infime » reste quantitatif et plus proche de qalīl (petite quantité).

**aucune part** — Le sens retenu est « portion » (Part/Portion méritée) de la racine kh-l-q (sens khalāq, distinct du sens khalaqa = créer). Le mot « part » est choisi car khalāq désigne une portion de bien qui revient à quelqu'un par attribution. L'alternative « portion » est synonyme correct mais plus formel. « Lot » est possible mais archaïque. « Part » est préféré pour son naturel en français courant.

**la vie à venir** — Le sens retenu est « la vie dernière » (Monde à venir/Vie dernière) de la racine ʾ-kh-r. L'expression « la vie à venir » est choisie car al-ākhirah = « la dernière [demeure] » désigne ce qui vient après cette vie — la suite, pas un « ailleurs ». L'alternative « l'au-delà » est écartée car vague et spatiale. « La vie éternelle » est écartée car elle impose l'éternité, absente du texte.

**ne leur parlera pas** — Le sens retenu est « parler » (Parole/Discours) de la racine k-l-m. Le verbe « parler » est choisi car yukallim = s'adresser directement à quelqu'un — acte de communication personnelle. L'alternative « communiquer avec » est trop large ; « adresser la parole » est lourd.

**ne les regardera pas** — Le sens retenu est « regarder » (Regard/Contemplation) de la racine n-ẓ-r. Le verbe « regarder » est choisi car naẓara ilā = diriger le regard vers quelqu'un avec attention. L'alternative « voir » est écartée : le refus ici n'est pas perceptif mais d'attention bienveillante. « Considérer » est trop abstrait pour un acte dirigé.

**le jour de** — Le sens retenu est « jour » (Temps/Période) de la racine y-w-m. Le mot « jour » est le sens direct du nom yawm. Aucune alternative pertinente.

**la résurrection** — Le sens retenu est « se lever » (Verticalité/Droiture) de la racine q-w-m. Le mot « résurrection » est choisi car al-qiyāmah = le Grand Lever désigne dans l'usage coranique le moment où tous se dressent de leurs tombes. L'alternative « le Jugement » est écartée car le texte nomme al-qiyāmah (le lever), non al-ḥisāb (le compte). « Le redressement » serait trop littéral sans l'ancrage eschatologique.

**ne les purifiera pas** — Le sens retenu est « purifier » (Purification/Croissance) de la racine z-k-w. Le verbe « purifier » est choisi car la Forme II yuzakkī = rendre pur, acte actif et directionnel. L'alternative « faire croître » est écartée : dans ce contexte de condamnation morale, c'est la déclaration de pureté qui est niée, non la croissance matérielle.

**un tourment** — Le sens retenu est « châtiment » (Châtiment/Punition) de la racine ʿ-dh-b. Le mot « tourment » est choisi car il rend la souffrance infligée sans présupposer la finalité corrective. L'alternative « châtiment » est possible mais implique une logique punitive plus explicite qui n'est pas dans la racine (dont le sens premier est paradoxalement « eau douce »).

**douloureux** — Le sens retenu est « douloureux » (Douleur/Souffrance) de la racine ʾ-l-m. L'adjectif « douloureux » est direct. La forme faʿīl d'intensité peut donner « profondément douloureux » mais l'adjectif simple suffit en français courant pour qualifier la nature du tourment.`;

  // === §CRITIQUE§ — ordre d'apparition, entrées substantives uniquement ===
  // Hamidullah : "Ceux qui vendent l'alliance d'Allah et leurs serments à vil prix, ceux-là n'auront aucune part dans l'au-delà ; Allah ne leur adressera pas la parole, ne les regardera pas au Jour de la Résurrection, et ne les purifiera point. Et ils auront un châtiment douloureux."
  const critique = `§CRITIQUE§

**troquent vs « vendent »** : Hamidullah traduit yashtarūna par « vendent ». C'est une inversion de direction : la Forme VIII ishtarā signifie spécifiquement acquérir/acheter — non vendre. Ce sont eux qui obtiennent un prix infime en donnant le pacte. Certes, la racine sh-r-y désigne les deux faces de la transaction (acheter et vendre), mais la Forme VIII particularise le sens d'acquisition. Le sens global change : « ils vendent l'alliance » suggère qu'ils cèdent délibérément pour de l'argent (orientation commerciale explicite), alors que « ils troquent » rend l'échange inégal dans lequel ils perdent le précieux pour le dérisoire (orientation sur l'insensé de la transaction).

**l'engagement de Dieu vs « l'alliance d'Allah »** : Hamidullah rend ʿahd Allāh par « l'alliance d'Allah ». « Alliance » porte en français une forte charge biblique (Ancien Testament : alliance entre Dieu et son peuple élu) qui implique une symétrie cérémonielle entre deux parties. ʿAhd dans le Lane's désigne d'abord « an injunction, a charge, an obligation, a compact, a covenant, a promise » — le premier sens est l'engagement unilatéral imposé ou accepté, pas la structure bilatérale d'une alliance solennelle. « Engagement » préserve l'asymétrie du lien que Dieu établit avec l'humain et la dimension d'obligation personnelle qui peut être trahie.

**un prix infime vs « à vil prix »** : Hamidullah rend thamanan qalīlan par « à vil prix ». « Vil » porte un jugement qualitatif (bas, méprisable moralement), alors que qalīl désigne uniquement la petitesse quantitative (peu en quantité). La différence change la nature de la critique : « vil prix » suggère que le prix est moralement bas, tandis que le texte dit simplement que la quantité reçue est dérisoire face à ce qui est cédé. Le verset critique l'inégalité quantitative de l'échange, pas la nature morale du bien reçu.

**la résurrection vs « la Résurrection »** : Hamidullah rend al-qiyāmah par « la Résurrection » (majuscule théologique). Cette lecture est défendable mais l'étymologie pure est « le fait de se lever » de la racine qāma — moment où tous se dressent, sans présupposer le contenu doctrinal chrétien de la Résurrection (retour à la vie corporelle d'un mort). En français courant, « résurrection » minuscule avec article défini rend l'idée sans charger le terme d'un contenu dogmatique absent de la racine arabe.`;

  const translation_explanation = demarche + '\n\n' + justification + '\n\n' + critique;

  // === SEGMENTS — déjà en place, juste vérifier schema complet ===
  const { data: va } = await db.from('verse_analyses').select('segments').eq('verse_id', vid).single();
  const segs = typeof va.segments === 'string' ? JSON.parse(va.segments) : va.segments;
  // Normaliser le schema : garantir pos, fr, phon, arabic, word_key, is_particle, sense_retenu, position
  for (const s of segs) {
    if (s.is_particle) {
      if (s.word_key === undefined) s.word_key = null;
      if (s.sense_retenu === undefined) s.sense_retenu = null;
      if (s.pos === undefined) s.pos = null;
    } else {
      if (!s.pos) s.pos = 'nom';
    }
  }

  await db.from('verse_analyses').update({
    translation_arab,
    translation_explanation,
    segments: segs
  }).eq('verse_id', vid);

  console.log('V77 corrigé ✅');
  console.log('  - §DEMARCHE§ : 1 mot par paragraphe (inna, al-ladhīna, yashtarūna, bi-ʿahdi, allāhi, aymānihim, thamanan, qalīlan, ulāʾika, lā-khalāqa, fī-l-ākhirah, wa-lā-yukallimuhumu, allāhu, wa-lā-yanẓuru, yawma, al-qiyāmah, wa-lā-yuzakkīhim, wa-lahum, ʿadhābun, alīmun)');
  console.log('  - §JUSTIFICATION§ : 1 entrée par mot traduit');
  console.log('  - §CRITIQUE§ : 4 entrées substantives dans l\'ordre d\'apparition');
  console.log('    1. troquent vs vendent (direction inverse Forme VIII)');
  console.log('    2. l\'engagement de Dieu vs l\'alliance d\'Allah (bilatéral vs unilatéral)');
  console.log('    3. un prix infime vs à vil prix (quantitatif vs qualitatif)');
  console.log('    4. la résurrection vs la Résurrection (étymologie vs théologie)');
}

run().catch(console.error);
