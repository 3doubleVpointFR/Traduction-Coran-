const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// =====================================================
// PIPELINE SOURATE 2 — VERSET 178
// verse_id=185, analysis_id=546
// "O les croyants, la retribution vous est prescrite en
//  matiere de meurtre : libre pour libre, esclave pour
//  esclave, femelle pour femelle. Quiconque beneficie d'un
//  pardon de la part de son frere, qu'il y ait un suivi
//  selon ce qui est reconnu et un acquittement avec
//  excellence. Cela est un allegement de la part de votre
//  Seigneur et une misericorde. Quiconque transgresse
//  apres cela aura un chatiment douloureux."
// Prescription du qisas + pardon + allegement divin
// =====================================================

const verseData = {
  178: {
    verse_id: 185,
    analysis_id: 546,
    translation_arab: "O les croyants, la retribution vous est prescrite en matiere de meurtre : le libre pour le libre, l'esclave pour l'esclave, la femelle pour la femelle. Quiconque beneficie d'un pardon de la part de son frere, qu'il y ait un suivi selon ce qui est reconnu et un acquittement envers lui avec excellence. Cela est un allegement de la part de votre Seigneur et une misericorde. Quiconque transgresse apres cela aura un chatiment douloureux.",
    full_translation: "O les croyants! On vous a prescrit le talion au sujet des tues: homme libre pour homme libre, esclave pour esclave, femme pour femme. Mais celui a qui son frere aura pardonne en quelque facon doit faire suivre le pardon d'un comportement reconnu et s'acquitter envers lui de bonne grace. C'est la un allegement de la part de votre Seigneur et une misericorde. Donc, quiconque apres cela transgresse, aura un chatiment douloureux.",
    translation_explanation: `§DEMARCHE§
Le verset est le premier verset legislatif sur le meurtre dans la sourate al-Baqarah. Il prescrit le qisas (retribution proportionnelle) puis ouvre immediatement la porte au pardon, montrant que la justice coranique n'est pas uniquement punitive mais aussi reparatrice. Le verset se structure en trois parties : la prescription du qisas, la possibilite du pardon avec ses conditions, et la qualification divine de cette disposition comme allegement et misericorde. Le nom **al-qisasu** est un nom nominatif defini de la racine q-s-s. Le Lane's donne : suivre les traces de quelqu'un, pister, retribuer a l'identique. Le qisas est litteralement le fait de suivre exactement — retribuer un acte par son equivalent exact. Le nom est au nominatif car il est le sujet reel du verbe passif kutiba (il est prescrit). Le verbe **kutiba** est un accompli passif 3MS de la racine k-t-b. Le Lane's donne : ecrire, prescrire, decreter. Le passif « il a ete ecrit » donne le sens de « il est prescrit » — c'est une obligation decretee par Dieu, pas une simple recommandation. Le mot kutiba est utilise dans le Coran pour les obligations majeures : le jeune (2:183), le combat (2:216). Le nom **al-qatla** est un pluriel de la racine q-t-l au genitif. Le Lane's donne : tuer, combattre, mettre a mort. Le pluriel al-qatla designe les victimes de meurtre — ceux qui ont ete tues. Le genitif est regi par la preposition fi (en matiere de). Le nom **al-hurru** est un nom nominatif defini de la racine h-r-r. Le Lane's donne : libre, affranchi, noble, genereux. Le hurr est l'homme libre par opposition a l'esclave — celui qui n'est la propriete de personne. La repetition « le libre pour le libre » pose le principe d'equivalence : la retribution touche un egal. Le nom **al-hurri** est le meme mot au genitif, regi par la preposition bi (pour/en echange de). La structure « al-hurru bi-l-hurri » est une phrase nominale d'equivalence : le libre en echange du libre. Le nom **al-abdu** est un nom nominatif defini de la racine ayn-b-d. Le Lane's donne : esclave, serviteur, adorateur. Le abd est celui qui est en etat de servitude — il appartient a un maitre. Le verset enumere trois categories pour poser l'equivalence dans chacune. Le nom **al-abdi** est le meme mot au genitif. La structure « al-abdu bi-l-abdi » est parallele a la precedente : l'esclave en echange de l'esclave. Le nom **al-untha** (premiere occurrence, nominatif) est un nom feminin de la racine a-n-th. Le Lane's donne : femelle, du sexe feminin. Le mot designe le sexe feminin sans distinction de statut social. Le nom **al-untha** (seconde occurrence, genitif) est le meme mot au genitif. La structure « al-untha bi-l-untha » complete la trilogie d'equivalence. Le verbe **ufiya** est un accompli passif 3MS de la racine ayn-f-w. Le Lane's donne : pardonner, effacer, laisser aller, passer outre. Le pardon est l'acte de laisser aller — de ne pas poursuivre la retribution. Le passif montre que le pardon est accorde au meurtrier par la famille de la victime. La racine afw porte aussi le sens d'effacement — pardonner c'est effacer la dette de sang. Le nom **akhihi** est un nom genitif de la racine a-kh-w avec pronom suffixe 3MS. Le Lane's donne : frere, frere de sang ou de religion. Le frere est ici le frere en religion — la victime (ou sa famille) est le frere du meurtrier au sein de la communaute des croyants. Ce choix du mot « frere » est remarquable : meme apres un meurtre, le lien de fraternite n'est pas rompu, et c'est precisement ce lien qui fonde la possibilite du pardon. Le nom **ittiba'un** est un masdar (nom verbal) nominatif indefini de la racine t-b-ayn a la forme VIII. Le Lane's donne : suivre, poursuivre, se conformer a. L'ittiba' est l'acte de suivre — apres le pardon, il faut suivre les regles de la compensation. Le nom indefini marque un devoir general : un suivi convenable. Le nom **al-ma'rufi** est un participe passif substantive de la racine ayn-r-f au genitif. Le Lane's donne : ce qui est connu, reconnu, convenable, accepte par l'usage. Le ma'ruf est ce que la societe reconnait comme correct et juste — les normes etablies. Le suivi doit se faire selon ce qui est reconnu, c'est-a-dire selon les usages sociaux acceptes. Le nom **ada'un** est un masdar nominatif indefini de la racine a-d-y. Le Lane's donne : accomplir, restituer, s'acquitter de. L'ada' est l'acte d'accomplir ce qui est du — ici le paiement de la compensation. Le mot est distinct de qada (accomplir un jugement) — ada' est l'acquittement concret d'une dette. Le nom **ihsanin** est un masdar genitif indefini de la racine h-s-n. Le Lane's donne : faire le bien, agir avec excellence, embellir. L'ihsan est l'excellence dans l'action — faire plus que le minimum. La preposition bi (avec) indique la maniere : l'acquittement doit se faire avec excellence, c'est-a-dire de bonne grace, sans retard ni mauvaise volonte. Le nom **takhfifun** est un masdar nominatif indefini de la racine kh-f-f. Le Lane's donne : alleger, rendre leger, diminuer le poids. Le takhfif est l'acte d'alleger — le pardon n'existait pas dans la loi du talion anterieure, son introduction est un allegement de la charge. Le demonstratif « dhalika » (cela) renvoie a toute la disposition du pardon — c'est un allegement venant de Dieu. Le nom **rabbikum** est un nom genitif de la racine r-b-b avec pronom suffixe 2MP. Le Lane's donne : seigneur, maitre, educateur, celui qui prend soin et fait croitre. Le rabb est celui qui eduque et accompagne vers la maturite. L'ajout de « votre » (kum) marque le lien personnel entre Dieu et les croyants. Le nom **rahmatun** est un nom nominatif indefini de la racine r-h-m. Le Lane's donne : misericorde, tendresse, compassion, clemence. La rahma est la tendresse active qui pousse a soulager la souffrance. Le verset juxtapose « allegement » et « misericorde » — le premier est l'acte juridique (alleger la loi), le second est la motivation divine (la tendresse). Le verbe **i'tada** est un accompli 3MS de la racine ayn-d-w a la forme VIII. Le Lane's donne : transgresser, depasser les limites, outrepasser. L'i'tida' est le depassement des limites posees par la loi — ici, celui qui depasse les termes du pardon (exige plus que la compensation, ou tue apres avoir pardonne). Le nom **adhabun** est un nom nominatif indefini de la racine ayn-dh-b. Le Lane's donne : chatiment, punition, tourment. Le adhab est la punition qui cause de la souffrance — il est la consequence de la transgression. L'indefini marque l'intensite : un chatiment (d'un type que tu ne peux mesurer). L'adjectif **alimun** est un adjectif nominatif indefini de la racine a-l-m. Le Lane's donne : douloureux, qui cause de la douleur, penible. L'adjectif qualifie le chatiment — il sera douloureux. La forme fa'il (alim) est intensive : non pas « qui fait mal » mais « intensement douloureux ».

§JUSTIFICATION§
**croyants** — Le sens retenu est « foi/adhesion ». Le participe alladhina amanu designe ceux qui ont cru — les croyants. L'alternative « securite » est ecartee car le contexte est l'appel aux croyants par leur qualite de foi, pas par leur etat de securite.

**est prescrite** — Le sens retenu est « obligation/decret ». Le verbe kutiba au passif signifie « il a ete ecrit/prescrit ». L'alternative « ecriture » comme acte physique est ecartee car le verbe est metaphorique — prescrire c'est decreter, pas tracer des lettres.

**la retribution** — Le sens retenu est « suivi/pistage ». Le nom al-qisasu designe la retribution proportionnelle — suivre exactement la trace de l'acte commis. L'alternative « recit/narration » est ecartee car le contexte est juridique, pas narratif.

**meurtre** — Le sens retenu est « meurtre/combat ». Le nom al-qatla designe les personnes tuees. L'alternative « combat » au sens de guerre est ecartee car le verset parle specifiquement de meurtre entre individus, pas de combat arme.

**le libre** (nominatif) — Le sens retenu est « liberte/affranchissement ». Le nom al-hurru designe l'homme libre. L'alternative « chaleur » est ecartee car le contexte est le statut social, pas la temperature.

**le libre** (genitif) — Le sens retenu est « liberte/affranchissement ». Meme mot au genitif dans la structure d'equivalence.

**l'esclave** (nominatif) — Le sens retenu est « servitude/esclavage ». Le nom al-abdu designe l'esclave. L'alternative « adoration » est ecartee car le contexte est le statut juridique, pas l'acte d'adorer.

**l'esclave** (genitif) — Le sens retenu est « servitude/esclavage ». Meme mot au genitif dans la structure d'equivalence.

**la femelle** (nominatif) — Le sens retenu est « feminin/femelle ». Le nom al-untha designe la femelle. Pas d'alternative notable — le mot est univoque dans ce contexte.

**la femelle** (genitif) — Le sens retenu est « feminin/femelle ». Meme mot au genitif dans la structure d'equivalence.

**pardon** — Le sens retenu est « pardon/effacement ». Le verbe ufiya au passif designe le fait d'etre pardonne — l'effacement de la dette de sang. L'alternative « surplus/exces » est ecartee car le contexte est le pardon accorde par la famille de la victime, pas un surplus de bien.

**son frere** — Le sens retenu est « fraternite/lien ». Le nom akhihi designe le frere — ici le frere en religion. L'alternative « frere de sang » est trop restrictive car le Coran utilise ici le frere au sens large de la communaute.

**un suivi** — Le sens retenu est « suite/succession ». Le masdar ittiba'un designe l'acte de suivre — se conformer aux regles de la compensation. L'alternative « imitation » est ecartee car il ne s'agit pas d'imiter mais de suivre un processus.

**ce qui est reconnu** — Le sens retenu est « connaissance/reconnaissance ». Le nom al-ma'rufi designe ce qui est reconnu par l'usage social. L'alternative « bonte » est ecartee car le ma'ruf ici est normatif, pas moral.

**un acquittement** — Le sens retenu est « accomplissement/restitution ». Le masdar ada'un designe l'acte de s'acquitter. L'alternative « ennemi » (de la racine a-d-w) est ecartee car la racine est a-d-y, pas a-d-w.

**avec excellence** — Le sens retenu est « excellence morale ». Le masdar ihsanin designe l'excellence dans l'action. L'alternative « beaute/bonte » est ecartee car le contexte est l'excellence du comportement lors du paiement, pas l'esthetique.

**un allegement** — Le sens retenu est « legerete/allegement ». Le masdar takhfifun designe l'acte d'alleger. Pas d'alternative notable — le mot est univoque dans ce contexte juridique.

**votre Seigneur** — Le sens retenu est « seigneurie/autorite bienveillante ». Le nom rabbikum designe le Seigneur-Educateur. L'alternative « education/accompagnement » est un aspect complementaire retenu comme probable.

**une misericorde** — Le sens retenu est « misericorde/tendresse ». Le nom rahmatun designe la tendresse active de Dieu. Pas d'alternative notable — le mot est un des termes divins les plus clairs.

**transgresse** — Le sens retenu est « transgression/exces ». Le verbe i'tada designe le depassement des limites. L'alternative « hostilite » est ecartee car le contexte est le depassement des limites juridiques, pas l'agression.

**un chatiment** — Le sens retenu est « chatiment/punition ». Le nom adhabun designe la punition. Pas d'alternative notable — le contexte est la sanction du transgresseur.

**douloureux** — Le sens retenu est « douleur/souffrance ». L'adjectif alimun qualifie le chatiment d'intensement douloureux. L'alternative « science/savoir » est ecartee car la racine a-l-m ici porte le sens de douleur, pas de connaissance.

§CRITIQUE§
Les traductions courantes rendent ce verset de facon globalement similaire. La difference principale porte sur le mot « qisas » : Hamidullah traduit par « talion », ce qui evoque la loi du talion biblique (oeil pour oeil). Notre traduction retient « retribution » qui est plus fidele a la racine q-s-s (suivre/pister) et evite la connotation negative du talion purement punitif. Le mot « untha » est traduit par « femme » chez Hamidullah, alors que le terme arabe signifie « femelle » — c'est un terme biologique, pas social. Le mot « akh » (frere) est traduit par certains comme « frere de sang de la victime », mais le Coran utilise deliberement le terme de fraternite religieuse pour montrer que le lien communautaire survit au meurtre. Enfin, « bi-ihsanin » est souvent rendu par « de bonne grace » (Hamidullah), ce qui est affaibli — « avec excellence » (ihsan) est plus fort et plus fidele au masdar.`,
    segments: [
      { fr: "o", phon: "ya", arabic: "\u064a\u064e\u0640\u0670\u0623\u064e\u064a\u0651\u064f\u0647\u064e\u0627", is_particle: true, position: 0 },
      { fr: "ceux qui", phon: "alladhina", arabic: "\u0671\u0644\u0651\u064e\u0630\u0650\u064a\u0646\u064e", is_particle: true, position: 1 },
      { fr: "ont cru", pos: "verbe", phon: "amanu", arabic: "\u0621\u064e\u0627\u0645\u064e\u0646\u064f\u0648\u0627\u06df", word_key: "amn", is_particle: false, sense_retenu: "foi", position: 2 },
      { fr: "il est prescrit", pos: "verbe", phon: "kutiba", arabic: "\u0643\u064f\u062a\u0650\u0628\u064e", word_key: "ktb", is_particle: false, sense_retenu: "obligation", position: 3 },
      { fr: "pour vous", phon: "alaykum", arabic: "\u0639\u064e\u0644\u064e\u064a\u0652\u0643\u064f\u0645\u064f", is_particle: true, position: 4 },
      { fr: "la retribution", pos: "nom", phon: "al-qisasu", arabic: "\u0671\u0644\u0652\u0642\u0650\u0635\u064e\u0627\u0635\u064f", word_key: "qss", is_particle: false, sense_retenu: "retribution", position: 5 },
      { fr: "en matiere de", phon: "fi", arabic: "\u0641\u0650\u0649", is_particle: true, position: 6 },
      { fr: "meurtre", pos: "nom", phon: "al-qatla", arabic: "\u0671\u0644\u0652\u0642\u064e\u062a\u0652\u0644\u064e\u0649", word_key: "qtl", is_particle: false, sense_retenu: "meurtre", position: 7 },
      { fr: "le libre", pos: "nom", phon: "al-hurru", arabic: "\u0671\u0644\u0652\u062d\u064f\u0631\u0651\u064f", word_key: "hrr", is_particle: false, sense_retenu: "libre", position: 8 },
      { fr: "pour le libre", pos: "nom", phon: "bi-l-hurri", arabic: "\u0628\u0650\u0671\u0644\u0652\u062d\u064f\u0631\u0651\u0650", word_key: "hrr", is_particle: false, sense_retenu: "libre", position: 9 },
      { fr: "l'esclave", pos: "nom", phon: "al-abdu", arabic: "\u0648\u064e\u0671\u0644\u0652\u0639\u064e\u0628\u0652\u062f\u064f", word_key: "ebd", is_particle: false, sense_retenu: "esclave", position: 10 },
      { fr: "pour l'esclave", pos: "nom", phon: "bi-l-abdi", arabic: "\u0628\u0650\u0671\u0644\u0652\u0639\u064e\u0628\u0652\u062f\u0650", word_key: "ebd", is_particle: false, sense_retenu: "esclave", position: 11 },
      { fr: "la femelle", pos: "nom", phon: "al-untha", arabic: "\u0648\u064e\u0671\u0644\u0652\u0623\u064f\u0646\u062b\u064e\u0649\u0670", word_key: "anth", is_particle: false, sense_retenu: "femelle", position: 12 },
      { fr: "pour la femelle", pos: "nom", phon: "bi-l-untha", arabic: "\u0628\u0650\u0671\u0644\u0652\u0623\u064f\u0646\u062b\u064e\u0649\u0670", word_key: "anth", is_particle: false, sense_retenu: "femelle", position: 13 },
      { fr: "quiconque", phon: "fa-man", arabic: "\u0641\u064e\u0645\u064e\u0646\u0652", is_particle: true, position: 14 },
      { fr: "est pardonne", pos: "verbe", phon: "ufiya", arabic: "\u0639\u064f\u0641\u0650\u064a\u064e", word_key: "efw", is_particle: false, sense_retenu: "pardon", position: 15 },
      { fr: "a lui", phon: "lahu", arabic: "\u0644\u064e\u0647\u064f", is_particle: true, position: 16 },
      { fr: "de", phon: "min", arabic: "\u0645\u0650\u0646\u0652", is_particle: true, position: 17 },
      { fr: "son frere", pos: "nom", phon: "akhihi", arabic: "\u0623\u064e\u062e\u0650\u064a\u0647\u0650", word_key: "axw", is_particle: false, sense_retenu: "frere", position: 18 },
      { fr: "quelque chose", phon: "shay'un", arabic: "\u0634\u064e\u0649\u0652\u0621\u064c", is_particle: true, position: 19 },
      { fr: "un suivi", pos: "nom", phon: "ittiba'un", arabic: "\u0641\u064e\u0671\u062a\u0651\u0650\u0628\u064e\u0627\u0639\u064c\u06e2", word_key: "tbae", is_particle: false, sense_retenu: "suivi", position: 20 },
      { fr: "selon ce qui est reconnu", pos: "nom", phon: "bi-l-ma'rufi", arabic: "\u0628\u0650\u0671\u0644\u0652\u0645\u064e\u0639\u0652\u0631\u064f\u0648\u0641\u0650", word_key: "erf", is_particle: false, sense_retenu: "ce qui est reconnu", position: 21 },
      { fr: "et un acquittement", pos: "nom", phon: "wa-ada'un", arabic: "\u0648\u064e\u0623\u064e\u062f\u064e\u0627\u0653\u0621\u064c", word_key: "ady", is_particle: false, sense_retenu: "acquittement", position: 22 },
      { fr: "envers lui", phon: "ilayhi", arabic: "\u0625\u0650\u0644\u064e\u064a\u0652\u0647\u0650", is_particle: true, position: 23 },
      { fr: "avec excellence", pos: "nom", phon: "bi-ihsanin", arabic: "\u0628\u0650\u0625\u0650\u062d\u0652\u0633\u064e\u0640\u0670\u0646\u064d", word_key: "hsn", is_particle: false, sense_retenu: "excellence", position: 24 },
      { fr: "cela est", phon: "dhalika", arabic: "\u0630\u064e\u0670\u0644\u0650\u0643\u064e", is_particle: true, position: 25 },
      { fr: "un allegement", pos: "nom", phon: "takhfifun", arabic: "\u062a\u064e\u062e\u0652\u0641\u0650\u064a\u0641\u064c", word_key: "xff", is_particle: false, sense_retenu: "allegement", position: 26 },
      { fr: "de la part de", phon: "min", arabic: "\u0645\u0650\u0646", is_particle: true, position: 27 },
      { fr: "votre Seigneur", pos: "nom", phon: "rabbikum", arabic: "\u0631\u0651\u064e\u0628\u0651\u0650\u0643\u064f\u0645\u0652", word_key: "rbb", is_particle: false, sense_retenu: "seigneur", position: 28 },
      { fr: "et une misericorde", pos: "nom", phon: "wa-rahmatun", arabic: "\u0648\u064e\u0631\u064e\u062d\u0652\u0645\u064e\u0629\u064c", word_key: "rhm", is_particle: false, sense_retenu: "misericorde", position: 29 },
      { fr: "quiconque", phon: "fa-man", arabic: "\u0641\u064e\u0645\u064e\u0646\u0650", is_particle: true, position: 30 },
      { fr: "transgresse", pos: "verbe", phon: "i'tada", arabic: "\u0671\u0639\u0652\u062a\u064e\u062f\u064e\u0649\u0670", word_key: "edw", is_particle: false, sense_retenu: "transgresser", position: 31 },
      { fr: "apres", phon: "ba'da", arabic: "\u0628\u064e\u0639\u0652\u062f\u064e", is_particle: true, position: 32 },
      { fr: "cela", phon: "dhalika", arabic: "\u0630\u064e\u0670\u0644\u0650\u0643\u064e", is_particle: true, position: 33 },
      { fr: "alors pour lui", phon: "fa-lahu", arabic: "\u0641\u064e\u0644\u064e\u0647\u064f", is_particle: true, position: 34 },
      { fr: "un chatiment", pos: "nom", phon: "adhabun", arabic: "\u0639\u064e\u0630\u064e\u0627\u0628\u064c", word_key: "edb", is_particle: false, sense_retenu: "chatiment", position: 35 },
      { fr: "douloureux", pos: "adjectif", phon: "alimun", arabic: "\u0623\u064e\u0644\u0650\u064a\u0645\u064c", word_key: "alm", is_particle: false, sense_retenu: "douloureux", position: 36 }
    ],
    words: [
      // amn pos=3
      {
        word_key: "amn", position: 3, sense_chosen: "foi",
        analysis_axes: {
          sense_chosen: "foi",
          concept_chosen: "Foi/Adhésion",
          concepts: {
            "Foi/Adhésion": {
              status: "retenu",
              senses: ["croire", "avoir la foi", "adhérer", "faire confiance"],
              proof_ctx: "Le verbe amanu est un accompli 3MP de la racine a-m-n a la forme IV. Le Lane's donne : croire, avoir la foi, accorder sa confiance, etre en securite. La forme IV (amana) est causative : se mettre soi-meme en securite par l'acte de croire. Le participe actif mu'min designe celui qui a fait l'acte de foi. Ici, alladhina amanu (ceux qui ont cru) est la formule d'adresse aux croyants par leur qualite essentielle — la foi. L'interpellation ouvre le verset legislatif : la prescription du qisas est adressee a ceux qui ont choisi de croire.",
              axe1_verset: "Le verbe amanu ouvre le verset en identifiant les destinataires de la prescription. Le champ lexical du verset est juridique (prescrire, retribution, meurtre, libre, esclave, pardon, acquittement). La foi est le fondement de l'obeissance a la loi — seuls ceux qui ont cru sont tenus par cette prescription. L'appel « ya ayyuha lladhina amanu » apparait 89 fois dans le Coran et introduit systematiquement un commandement ou une exhortation. Ici, la foi des destinataires est le prealable a l'acceptation du qisas et du pardon.",
              axe2_voisins: "Les versets precedents (2:174-177) traitaient de ceux qui cachent la verite et de la vraie piete (birr). Le verset 177 definissait la piete veritable. Le verset 178 enchaine avec la legislation concrete — apres avoir defini la piete, le Coran prescrit les lois qui l'incarnent. L'appel aux croyants fait la transition entre la theorie de la piete et la pratique de la justice. Le verset suivant (2:179) conclura en disant que dans le qisas il y a une vie pour les gens doues d'intelligence.",
              axe3_sourate: "La racine a-m-n est une des plus frequentes de la sourate al-Baqarah. Des le debut, la sourate distingue les croyants (2:3-5), les mecreants (2:6-7) et les hypocrites (2:8-20). L'appel « ya ayyuha lladhina amanu » structure les sections legislatives de la sourate : le qisas (2:178), le jeune (2:183), le testament (2:180). Chaque prescription majeure commence par cet appel — la foi est la condition de la loi.",
              axe4_coherence: "La racine a-m-n apparait environ 879 fois dans le Coran sous diverses formes. L'appel « ya ayyuha lladhina amanu » est la formule d'adresse la plus frequente aux croyants — elle les interpelle par leur qualite de foi, pas par leur identite ethnique ou tribale. Dans la sourate al-Ma'ida (5:1), le meme appel introduit les prescriptions alimentaires. La constance de cette formule montre que la loi coranique s'adresse a une communaute de foi, pas a un peuple.",
              axe5_frequence: "Pour la mission du khalifa, la foi est le fondement de toute action. Le khalifa n'est pas un simple executant de lois — il est d'abord un croyant qui accepte les prescriptions parce qu'il a fait l'acte de foi. L'appel aux croyants rappelle que la justice (qisas) et la misericorde (pardon) ne sont pas des concepts abstraits mais des obligations liees a l'engagement de foi. Le khalifa agit par conviction, pas par contrainte."
            },
            "Sécurité/Protection": {
              status: "nul",
              senses: ["sécurité", "protection", "refuge"],
              proof_ctx: "Le sens de securite est la racine etymologique de a-m-n (celui qui est en securite) mais dans la forme IV (amana = croire), le sens predominant est la foi — l'acte de croire qui met en securite. Le contexte est l'interpellation des croyants, pas la description d'un etat de securite."
            }
          }
        }
      },
      // ktb pos=4
      {
        word_key: "ktb", position: 4, sense_chosen: "obligation",
        analysis_axes: {
          sense_chosen: "obligation",
          concept_chosen: "Obligation/Décret",
          concepts: {
            "Obligation/Décret": {
              status: "retenu",
              senses: ["prescrire", "décréter", "obliger", "imposer", "écrire"],
              proof_ctx: "Le verbe kutiba est un accompli passif 3MS de la racine k-t-b. Le Lane's donne : ecrire, prescrire, decreter, rendre obligatoire. Le passif « il a ete ecrit » donne le sens de « il est prescrit/decrete ». L'agent implicite est Dieu — c'est Lui qui prescrit. La racine k-t-b au passif est utilisee dans le Coran pour les obligations majeures : kutiba alaykum al-siyam (le jeune vous est prescrit, 2:183), kutiba alaykum al-qital (le combat vous est prescrit, 2:216). Le qisas est mis au meme niveau que le jeune et le combat — c'est une obligation fondamentale.",
              axe1_verset: "Le verbe kutiba est le noyau juridique du verset — il etablit l'obligation. Le sujet reel est al-qisasu (la retribution) et le complement est alaykum (sur vous). La structure kutiba alaykum est imperative au passif — l'obligation vient d'en haut. Le verset enchaine ensuite avec la modalite du pardon (fa-man ufiya), montrant que l'obligation n'est pas rigide — elle laisse place a la clemence. Le contraste entre kutiba (obligatoire) et ufiya (pardonne) structure toute la legislation du verset.",
              axe2_voisins: "Le verset 177 precedent listait les composantes de la vraie piete. Le verset 178 passe de la definition a la prescription — apres avoir dit ce qu'est la piete, le Coran prescrit concretement. Le verset 180 utilisera le meme verbe kutiba pour le testament (kutiba alaykum idha hadara ahadakum al-mawt). La concentration de kutiba en 2:178, 180, 183, 216 montre que cette section de la sourate est le coeur legislatif.",
              axe3_sourate: "La racine k-t-b structure la sourate al-Baqarah. Le mot kitab (livre) ouvre la sourate (2:2 — dhalika l-kitab). La prescription (kutiba) est l'application concrete du Livre — le Coran n'est pas seulement un livre a lire mais un livre qui prescrit. La sourate passe du Livre comme source de guidance (2:2) au Livre comme source de loi (2:178).",
              axe4_coherence: "La racine k-t-b apparait environ 319 fois dans le Coran. Le verbe kutiba au passif avec alaykum apparait specifiquement en 2:178, 180, 183, 216 et 4:77. Cette forme est reservee aux obligations les plus fondamentales de l'islam. Le qisas est donc place au meme rang que le jeune, le testament et le combat — une obligation communautaire essentielle.",
              axe5_frequence: "Pour la mission du khalifa, la prescription divine est le cadre de sa mission. Le khalifa ne cree pas la loi — il la recoit et l'applique. Le verbe kutiba au passif montre que l'autorite legislative est divine, pas humaine. Le khalifa est le gardien de la loi prescrite, pas son auteur. La prescription du qisas montre que la justice est une obligation, pas une option — le khalifa doit l'appliquer avec rigueur et misericorde."
            },
            "Écriture/Livre": {
              status: "nul",
              senses: ["écrire", "livre", "scriptures"],
              proof_ctx: "Le sens d'ecriture physique est la racine litterale de k-t-b. Mais le verbe kutiba au passif dans le Coran est toujours metaphorique — prescrire/decreter, pas ecrire sur un support. Le contexte est juridique : la retribution est prescrite, pas ecrite."
            }
          }
        }
      },
      // qss pos=6
      {
        word_key: "qss", position: 6, sense_chosen: "retribution",
        analysis_axes: {
          sense_chosen: "retribution",
          concept_chosen: "Suivi/Pistage",
          concepts: {
            "Suivi/Pistage": {
              status: "retenu",
              senses: ["suivre", "pister", "retribuer à l'identique", "rendre la pareille", "traquer"],
              proof_ctx: "Le nom al-qisasu est un nom nominatif defini de la racine q-s-s. Le Lane's donne : suivre les traces de quelqu'un, pister, retribuer a l'identique, rendre exactement ce qui est du. Le qisas est etymologiquement le fait de suivre exactement les traces — la retribution proportionnelle suit exactement la mesure de l'acte commis. Le mot est au nominatif car il est le sujet reel du verbe passif kutiba. La definition du qisas est donnee dans le verset meme par la trilogie d'equivalence : libre pour libre, esclave pour esclave, femelle pour femelle.",
              axe1_verset: "Le nom al-qisasu est le mot-cle du verset — il porte toute la charge juridique. Le champ lexical du verset se divise en deux : la retribution (qisas, meurtre, libre, esclave, femelle) et le pardon (pardon, frere, suivi, reconnu, acquittement, excellence). Le qisas ouvre la premiere partie, et le pardon (ufiya) ouvre la seconde. Le verset montre que le qisas n'est pas le seul recours — le pardon est une alternative explicitement offerte. La juxtaposition du qisas et du pardon est l'originalite de ce verset par rapport aux legislations anterieures.",
              axe2_voisins: "Le verset 179 qui suit immediatement dit : « Et dans le qisas il y a pour vous une vie, o vous doues d'intelligence ». Le qisas est donc presente non comme une punition mais comme une preservation de la vie — la retribution dissuade le meurtre et donc sauve des vies. Le verset 178 pose la regle, le verset 179 en donne la sagesse. Les versets 180-182 enchainent avec le testament — apres la loi du meurtre, la loi de la succession.",
              axe3_sourate: "La racine q-s-s apparait peu dans la sourate al-Baqarah — le mot qisas est specifique a ce contexte legislatif. La sourate utilise d'autres racines pour la justice : h-k-m (jugement), a-d-l (equite). Le qisas est distinct du hukm — il est la retribution proportionnelle specifique au meurtre, pas le jugement general. La sourate place le qisas dans une section legislative (2:178-242) qui couvre le meurtre, le testament, le jeune, le pelerinage et le mariage.",
              axe4_coherence: "La racine q-s-s apparait environ 30 fois dans le Coran. Le sens de « recit/narration » (qasas) coexiste avec le sens de « retribution » (qisas). En 5:45, le qisas est detaille : « ame pour ame, oeil pour oeil, nez pour nez ». En 2:178, le qisas est specifique au meurtre et introduit le pardon comme alternative. La sourate 5 donne le detail, la sourate 2 donne le principe avec la misericorde. Le Coran harmonise justice et clemence dans un meme cadre juridique.",
              axe5_frequence: "Pour la mission du khalifa, le qisas est l'instrument de la justice proportionnelle. Le khalifa doit garantir que la retribution soit exacte — pas plus, pas moins. Le pistage etymologique (suivre les traces) montre que la justice doit etre precise, pas approximative. Mais le verset montre aussi que le khalifa doit faciliter le pardon — la justice n'est pas seulement punitive. Le khalifa equilibre la rigueur du qisas et la douceur du pardon."
            },
            "Narration/Récit": {
              status: "probable",
              senses: ["raconter", "récit", "narration", "histoire", "relater"],
              proof_ctx: "Le sens de narration est un sens majeur de la racine q-s-s — le qasas est le recit, le fait de relater une histoire en suivant son fil. Le Lane's donne : raconter, relater, suivre le fil d'une histoire. Ici cependant, le nom al-qisasu est au regime juridique (kutiba alaykum) et suivi de fi-l-qatla (en matiere de meurtre) — le contexte est clairement la retribution, pas la narration.",
              axe1_verset: "Le sens de narration n'est pas actif dans ce verset. Le champ lexical est entierement juridique : prescrire, meurtre, libre, esclave, pardon, acquittement, chatiment. Aucun element du verset ne releve du recit ou de la narration. Le mot qisas ici est la retribution proportionnelle, pas le recit. La structure syntaxique confirme : kutiba alaykum al-qisasu fi-l-qatla — la retribution est prescrite en matiere de meurtre.",
              axe2_voisins: "Les versets voisins (177-182) sont tous legislatifs. Le verset 177 definit la piete, 178 prescrit le qisas, 179 en donne la sagesse, 180 prescrit le testament. Il n'y a pas de narration dans cette section — c'est un code legislatif. Le sens narratif de q-s-s apparait ailleurs dans le Coran (12:3 — le meilleur des recits) mais pas dans ce contexte.",
              axe3_sourate: "La sourate al-Baqarah contient des sections narratives (recit d'Adam, de Moussa, d'Ibrahim) et des sections legislatives (2:178-242). Le mot qisas apparait dans la section legislative, pas narrative. La sourate distingue clairement le recit (qasas) et la retribution (qisas) meme si la racine est la meme.",
              axe4_coherence: "En 12:3, le Coran dit « nahnu naqussu alayka ahsana l-qasas » (Nous te racontons le meilleur des recits). Le qasas est le recit. Le qisas (2:178) est la retribution. Les deux mots viennent de la meme racine q-s-s mais les formes nominales sont distinctes : qasas (recit, forme fa'al) et qisas (retribution, forme fi'al). Le Coran utilise les deux sens de la racine dans des contextes differents.",
              axe5_frequence: "Pour la mission du khalifa, la narration est le moyen de transmettre les lecons du passe. Le qasas coranique raconte les histoires des prophetes pour en tirer des enseignements. Mais ici, le khalifa est dans le registre de l'action juridique, pas du recit — il applique la loi, il ne raconte pas d'histoires. Le lien entre narration et retribution est etymologique : suivre les traces peut mener a raconter ou a retribuer."
            }
          }
        }
      },
      // qtl pos=8
      {
        word_key: "qtl", position: 8, sense_chosen: "meurtre",
        analysis_axes: {
          sense_chosen: "meurtre",
          concept_chosen: "Meurtre/Combat",
          concepts: {
            "Meurtre/Combat": {
              status: "retenu",
              senses: ["tuer", "combattre", "mettre à mort", "assassiner", "meurtre"],
              proof_ctx: "Le nom al-qatla est un pluriel au genitif de la racine q-t-l. Le Lane's donne : tuer, mettre a mort, assassiner, combattre. Le pluriel al-qatla designe les victimes de meurtre — ceux qui ont ete tues. Le genitif est regi par la preposition fi (en matiere de). La racine q-t-l est une des plus frequentes du Coran et couvre le spectre du meurtre individuel au combat arme. Ici, le contexte est le meurtre entre individus (pas la guerre) car la retribution est individualisee : libre pour libre, esclave pour esclave.",
              axe1_verset: "Le nom al-qatla definit le domaine d'application du qisas : le meurtre. Le champ lexical du verset est structure autour de deux poles — la justice (meurtre, retribution, libre, esclave) et la misericorde (pardon, frere, acquittement, excellence). Le meurtre est le crime qui declenche la legislation. Le verset ne donne pas les details du meurtre (intentionnel, accidentel) — il pose le principe general que la retribution est prescrite en matiere de meurtre.",
              axe2_voisins: "Le verset 179 qui suit dit : « Dans le qisas il y a une vie pour vous ». Le paradoxe est saisissant : le meurtre (qatl) mene a la retribution (qisas) qui mene a la vie (hayat). La legislation sur le meurtre vise a preserver la vie. Le verset 178 pose le probleme (le meurtre), le verset 179 donne la sagesse de la solution (la retribution sauve des vies par la dissuasion).",
              axe3_sourate: "La racine q-t-l est tres presente dans la sourate al-Baqarah. En 2:61, les fils d'Israel tuaient les prophetes. En 2:72, le meurtre est l'occasion de la revelation (l'histoire de la vache). En 2:154, ne dites pas de ceux qui sont tues dans le chemin de Dieu qu'ils sont morts. En 2:190-191, le combat est prescrit. La sourate couvre tout le spectre du meurtre : criminel (2:178), sacrificiel (2:72), martyrial (2:154), guerrier (2:190).",
              axe4_coherence: "La racine q-t-l apparait environ 170 fois dans le Coran. Le meurtre est un des grands themes coraniques — de Cain et Abel (5:27-32) a la legislation du qisas (2:178, 5:45). Le Coran pose le principe que « quiconque tue une ame sans droit, c'est comme s'il avait tue l'humanite entiere » (5:32). Le verset 2:178 est la legislation concrete qui decoule de ce principe.",
              axe5_frequence: "Pour la mission du khalifa, le meurtre est la violation la plus grave de la vie que le khalifa est charge de proteger. Le khalifa est le gardien de la vie sur terre — le meurtre est l'antithese de sa mission. La legislation du qisas donne au khalifa un cadre pour repondre au meurtre : la retribution proportionnelle, mais aussi le pardon. Le khalifa doit a la fois punir le meurtrier et faciliter la reconciliation."
            }
          }
        }
      },
      // hrr pos=9 (1ere occurrence, nominatif)
      {
        word_key: "hrr", position: 9, sense_chosen: "libre",
        analysis_axes: {
          sense_chosen: "libre",
          concept_chosen: "Liberté/Affranchissement",
          concepts: {
            "Liberté/Affranchissement": {
              status: "retenu",
              senses: ["libre", "affranchi", "noble", "généreux", "indépendant"],
              proof_ctx: "Le nom al-hurru est un nom nominatif defini de la racine h-r-r. Le Lane's donne : libre, affranchi, noble, genereux, celui qui n'est la propriete de personne. Le hurr est l'homme libre par opposition au abd (esclave). La liberte est ici un statut juridique — elle determine la categorie de la retribution. La structure « al-hurru bi-l-hurri » (le libre pour le libre) pose le principe d'equivalence : la retribution touche un individu de meme statut. Ce principe protege contre l'exces — on ne peut pas tuer un noble pour venger un esclave, ni l'inverse.",
              axe1_verset: "Le mot al-hurru ouvre la trilogie d'equivalence : libre pour libre, esclave pour esclave, femelle pour femelle. Le champ lexical est celui du statut social (libre, esclave, femelle) — le qisas s'applique dans chaque categorie. Le verset pose trois paires d'equivalence pour couvrir les principales categories sociales de l'Arabie du VIIe siecle. Le libre est le premier mentionne car il est le statut le plus eleve dans la hierarchie sociale.",
              axe2_voisins: "Le verset 177 precedent mentionnait l'affranchissement des esclaves (fi-r-riqab) comme une composante de la piete. Le verset 178 utilise la distinction libre/esclave dans un contexte juridique different — la retribution. La proximite des deux usages montre que le Coran est conscient des categories sociales tout en les utilisant pour etablir la justice. Le verset 179 depassera ces categories en parlant de « vie » sans distinction de statut.",
              axe3_sourate: "La racine h-r-r apparait peu dans la sourate al-Baqarah — principalement ici en 2:178. La liberte comme theme est presente indirectement a travers la liberation des fils d'Israel de l'esclavage de Pharaon (2:49-50). La sourate traite la liberte a la fois comme un don divin (liberation d'Egypte) et comme un statut juridique (le libre du verset 178).",
              axe4_coherence: "La racine h-r-r apparait environ 8 fois dans le Coran. En 4:92, l'expiation du meurtre accidentel inclut l'affranchissement d'un esclave croyant (tahriru raqabatin mu'minatin). Le lien entre meurtre et liberte est donc recurrent : tuer engage a liberer. En 2:178, le libre est une categorie de retribution ; en 4:92, l'affranchissement est une expiation. Les deux versets montrent que la liberte est liee a la justice du meurtre.",
              axe5_frequence: "Pour la mission du khalifa, la liberte est un des fondements de la dignite humaine que le khalifa doit proteger. Le verset montre que meme dans la retribution, le statut de liberte est respecte — on ne confond pas les categories. Le khalifa doit garantir que la justice soit proportionnelle et respectueuse des statuts. La mention du libre rappelle que la societe a des structures que la justice doit prendre en compte sans les abolir arbitrairement."
            }
          }
        }
      },
      // hrr pos=10 (2e occurrence, genitif)
      {
        word_key: "hrr", position: 10, sense_chosen: "libre",
        analysis_axes: {
          sense_chosen: "libre",
          concept_chosen: "Liberté/Affranchissement",
          concepts: {
            "Liberté/Affranchissement": {
              status: "retenu",
              senses: ["libre", "affranchi", "noble", "généreux", "indépendant"],
              proof_ctx: "Le nom al-hurri est le meme mot que al-hurru mais au genitif, regi par la preposition bi (pour/en echange de). Le Lane's donne les memes sens : libre, affranchi. La structure « bi-l-hurri » complete la phrase nominale d'equivalence : le libre (nominatif, sujet) pour le libre (genitif, complement). La preposition bi porte le sens d'echange/equivalence — elle etablit la correspondance exacte entre la victime et le retribue.",
              axe1_verset: "Le mot bi-l-hurri est le second terme de la premiere paire d'equivalence. La repetition du meme mot en deux cas grammaticaux differents (nominatif et genitif) cree la structure d'equivalence. Le verset utilise cette structure trois fois (libre-libre, esclave-esclave, femelle-femelle) pour creer un rythme juridique solennel. Chaque paire est une phrase nominale sans verbe — la juxtaposition suffit a exprimer l'equivalence.",
              axe2_voisins: "La structure d'equivalence du verset 178 est unique dans cette section de la sourate. Les versets voisins (177, 179, 180) n'utilisent pas cette structure repetitive. Le verset 178 se distingue par son style legislatif sec et rythme — il enumere les categories sans explication, laissant au verset 179 le soin de donner la sagesse sous-jacente. Le style rappelle celui des codes juridiques antiques.",
              axe3_sourate: "La deuxieme occurrence de hurr dans la sourate al-Baqarah renforce le principe d'equivalence. La sourate est soucieuse de justice proportionnelle — en 2:194, elle dit « quiconque vous agresse, agressez-le dans la meme mesure ». Le bi (pour/en echange de) est le marqueur de cette proportionnalite. La sourate pose le principe que la justice n'est ni excessive ni insuffisante.",
              axe4_coherence: "La structure « X bi-X » (tel pour tel) apparait dans le Coran en 5:45 avec plus de detail : « ame pour ame, oeil pour oeil, nez pour nez ». Le verset 2:178 utilise la meme structure mais avec des categories sociales (libre, esclave, femelle) plutot que des parties du corps. Les deux versets se completent : 2:178 traite le meurtre, 5:45 traite les blessures.",
              axe5_frequence: "Pour la mission du khalifa, la preposition bi (en echange de) rappelle que la justice est un echange proportionnel. Le khalifa ne doit pas permettre l'exces dans la retribution — un libre pour un libre, pas plus. La proportionnalite est le fondement de la justice du khalifa. Quand le Coran repete le meme mot en echange du meme mot, il pose un principe d'egalite stricte que le khalifa doit garantir."
            }
          }
        }
      },
      // ebd pos=11 (1ere occurrence, nominatif)
      {
        word_key: "ebd", position: 11, sense_chosen: "esclave",
        analysis_axes: {
          sense_chosen: "esclave",
          concept_chosen: "Servitude/Esclavage",
          concepts: {
            "Servitude/Esclavage": {
              status: "retenu",
              senses: ["esclave", "serviteur", "asservi", "soumis", "possédé"],
              proof_ctx: "Le nom al-abdu est un nom nominatif defini de la racine ayn-b-d. Le Lane's donne : esclave, serviteur, celui qui est la propriete d'un maitre, celui qui est soumis. Le abd est par opposition au hurr (libre) — il est en etat de servitude. Le mot porte aussi le sens d'adorateur (abd Allah = serviteur de Dieu) mais ici le contexte est juridique : l'esclave comme categorie sociale dans la legislation du qisas. La repetition « al-abdu bi-l-abdi » applique le principe d'equivalence a la categorie des esclaves.",
              axe1_verset: "Le mot al-abdu est le premier terme de la deuxieme paire d'equivalence. Le verset enumere trois categories dans un ordre descendant de statut social : libre, esclave, femelle. Cette enumeration montre que le qisas s'applique a toutes les categories — personne n'est au-dessus de la loi. L'esclave, malgre son statut inferieur, beneficie de la meme protection juridique que le libre. La retribution pour le meurtre d'un esclave est la meme que pour celui d'un libre : un egal pour un egal.",
              axe2_voisins: "Le verset 177 precedent mentionnait l'affranchissement des esclaves (wa-fi-r-riqab) comme un acte de piete. Le verset 178 traite l'esclave dans un contexte different — la retribution pour meurtre. La proximite des deux versets montre que le Coran considere l'esclave a la fois comme un etre a liberer (177) et comme un etre protege par la loi (178). Le passage de la piete (liberer les esclaves) a la justice (proteger les esclaves) est significatif.",
              axe3_sourate: "La racine ayn-b-d est tres frequente dans la sourate al-Baqarah. En 2:21, le Coran dit « O les gens, adorez votre Seigneur » — ici abd est l'adorateur. En 2:23, « et si vous etes dans le doute, produisez une sourate » — le defi est adresse aux serviteurs. En 2:178, abd est l'esclave au sens juridique. La sourate utilise la meme racine pour l'adoration divine et la servitude humaine — les deux sens coexistent.",
              axe4_coherence: "La racine ayn-b-d apparait environ 275 fois dans le Coran. Le sens d'esclave est minoritaire par rapport au sens d'adorateur. En 2:178, le contexte juridique impose le sens d'esclave. En 4:92, le meurtre accidentel d'un croyant exige l'affranchissement d'un esclave croyant — la liberation est l'expiation. Le Coran lie systematiquement la justice du meurtre a la question de la servitude.",
              axe5_frequence: "Pour la mission du khalifa, la mention de l'esclave dans la legislation du qisas rappelle que la justice s'applique a tous, y compris aux plus vulnerables. Le khalifa doit proteger les droits de tous les membres de la communaute, quel que soit leur statut. L'enumeration libre-esclave-femelle montre que la justice n'a pas de preferences — elle traite chaque categorie selon le principe d'equivalence. Le khalifa est le garant de cette egalite devant la loi."
            }
          }
        }
      },
      // ebd pos=12 (2e occurrence, genitif)
      {
        word_key: "ebd", position: 12, sense_chosen: "esclave",
        analysis_axes: {
          sense_chosen: "esclave",
          concept_chosen: "Servitude/Esclavage",
          concepts: {
            "Servitude/Esclavage": {
              status: "retenu",
              senses: ["esclave", "serviteur", "asservi", "soumis", "possédé"],
              proof_ctx: "Le nom al-abdi est le meme mot que al-abdu mais au genitif, regi par la preposition bi. Le Lane's donne les memes sens : esclave, serviteur. La structure « al-abdu bi-l-abdi » est parallele a « al-hurru bi-l-hurri ». Le genitif marque le complement d'echange — l'esclave en echange de l'esclave. Le parallelisme syntaxique des trois paires cree un rythme solennel qui donne au verset la force d'un decret juridique immuable.",
              axe1_verset: "Le mot bi-l-abdi complete la deuxieme paire d'equivalence. La structure syntaxique est identique aux deux autres paires : nom defini nominatif + bi + nom defini genitif. Le parallelisme strict renforce la solennite de la prescription. Le verset ne commente pas ces equivalences — il les pose comme des evidences juridiques. Le commentaire viendra dans la seconde partie du verset avec l'ouverture au pardon.",
              axe2_voisins: "Le parallelisme des trois paires d'equivalence est un procede stylistique propre au verset 178. Les versets voisins n'utilisent pas cette structure. Le verset 179 utilisera un style different — une sentence de sagesse (dans le qisas il y a une vie). Le passage du style juridique enumératif (178) au style sapiential (179) montre la richesse rhetorique du Coran dans les passages legislatifs.",
              axe3_sourate: "La repetition des categories sociales dans la sourate al-Baqarah montre la conscience du Coran des structures sociales de son epoque. La sourate ne cherche pas a abolir ces categories (libre, esclave) dans ce verset — elle cherche a y appliquer une justice proportionnelle. L'abolition progressive de l'esclavage est un theme distinct, present dans l'encouragement a l'affranchissement (2:177).",
              axe4_coherence: "Le parallelisme « X bi-X » est un procede coranique frequant pour exprimer l'equivalence. En 2:194 : « al-shahru l-haramu bi-sh-shahri l-harami » (le mois sacre pour le mois sacre). En 5:45 : « an-nafsa bi-n-nafsi » (l'ame pour l'ame). Le procede est constant — la preposition bi exprime toujours l'echange proportionnel dans ces contextes juridiques.",
              axe5_frequence: "Pour la mission du khalifa, la repetition de la structure d'equivalence est un rappel que la proportionnalite est un principe absolu. Le khalifa ne peut pas modifier les termes de l'echange — un esclave pour un esclave, pas pour un libre. La rigidite de la structure protege contre l'arbitraire. Le khalifa applique la loi telle qu'elle est prescrite, sans favoritisme ni discrimination."
            }
          }
        }
      },
      // anth pos=13 (1ere occurrence, nominatif)
      {
        word_key: "anth", position: 13, sense_chosen: "femelle",
        analysis_axes: {
          sense_chosen: "femelle",
          concept_chosen: "Féminin/Femelle",
          concepts: {
            "Féminin/Femelle": {
              status: "retenu",
              senses: ["femelle", "du sexe féminin", "féminin", "femme"],
              proof_ctx: "Le nom al-untha est un nom nominatif defini de la racine a-n-th. Le Lane's donne : femelle, du sexe feminin, ce qui est de nature feminine. Le mot untha designe le sexe biologique feminin sans connotation de statut social — c'est un terme neutre et universel. Le Coran utilise untha plutot que imra'a (femme mariee) ou niswa (femmes) pour marquer la categorie biologique, pas le role social. La structure « al-untha bi-l-untha » complete la trilogie d'equivalence : le qisas s'applique aussi aux femelles.",
              axe1_verset: "Le mot al-untha est le premier terme de la troisieme et derniere paire d'equivalence. La trilogie libre-esclave-femelle couvre les trois grandes distinctions de la societe arabe du VIIe siecle : le statut juridique (libre/esclave) et le sexe (male/femelle). La mention de la femelle en dernier n'est pas un signe d'inferiorite mais d'exhaustivite — le verset s'assure que toutes les categories sont couvertes. La femelle beneficie de la meme protection que le libre et l'esclave.",
              axe2_voisins: "Le verset 177 precedent ne mentionnait pas specifiquement les femmes. Le verset 178 les inclut explicitement dans la legislation du qisas — la femelle pour la femelle. Le verset 180 suivant parlera du testament sans distinction de genre. La mention explicite de la femelle dans le verset du qisas montre que le Coran considere le meurtre d'une femme comme tout aussi grave que celui d'un homme.",
              axe3_sourate: "La racine a-n-th apparait en 2:178 (la femelle pour la femelle) et en 2:223 (vos epouses sont pour vous un champ). La sourate al-Baqarah traite les femmes dans differents contextes : legislatif (178), matrimonial (221-237), et spirituel. Le mot untha en 2:178 est biologique — il classe par sexe, pas par role social.",
              axe4_coherence: "La racine a-n-th apparait environ 30 fois dans le Coran. En 4:117, le Coran parle de « inathan » (des femelles) que les polytheistes adorent. En 3:36, la mere de Maryam dit « l'untha n'est pas comme le male ». En 2:178, le mot est strictement juridique — la femelle est une categorie de retribution. Le Coran utilise untha dans des contextes tres varies : biologique, religieux, juridique.",
              axe5_frequence: "Pour la mission du khalifa, la mention de la femelle dans le qisas rappelle que la protection de la vie s'etend a tous les sexes. Le khalifa doit proteger les femmes autant que les hommes — le meurtre d'une femme est un crime qui appelle la meme retribution. La justice du khalifa ne fait pas de distinction de genre dans la protection de la vie. La mention explicite de la femelle est une garantie juridique contre l'impunite du meurtre des femmes."
            }
          }
        }
      },
      // anth pos=14 (2e occurrence, genitif)
      {
        word_key: "anth", position: 14, sense_chosen: "femelle",
        analysis_axes: {
          sense_chosen: "femelle",
          concept_chosen: "Féminin/Femelle",
          concepts: {
            "Féminin/Femelle": {
              status: "retenu",
              senses: ["femelle", "du sexe féminin", "féminin", "femme"],
              proof_ctx: "Le nom al-untha au genitif est le second terme de la troisieme paire d'equivalence. Le Lane's donne les memes sens : femelle, du sexe feminin. La structure « al-untha bi-l-untha » ferme la trilogie avec la meme rigueur syntaxique. Le genitif marque le complement d'echange — la femelle en echange de la femelle. La cloture de la trilogie par la femelle montre que le verset a couvert l'ensemble des categories pertinentes pour la legislation du qisas.",
              axe1_verset: "Le mot bi-l-untha ferme la section enumerative du verset. Apres cette triple enumeration, le verset change de registre avec « fa-man » (quiconque) qui ouvre la section du pardon. La structure du verset est donc : prescription (kutiba) → enumeration (libre-esclave-femelle) → exception (pardon) → qualification (allegement et misericorde) → avertissement (chatiment). La femelle est le dernier element de l'enumeration avant le tournant vers le pardon.",
              axe2_voisins: "La fermeture de la trilogie par la femelle prepare le passage au pardon. Le « fa » (alors/quiconque) qui suit marque une transition nette. Les versets voisins n'ont pas cette structure bipartite (enumeration puis exception). Le verset 178 est unique dans sa construction : il pose la regle generale (qisas) puis ouvre immediatement une porte de sortie (pardon) — une technique legislative raffinee.",
              axe3_sourate: "La deuxieme occurrence de untha dans la sourate al-Baqarah complete la paire d'equivalence. La sourate traite les femmes avec une attention particuliere dans la section legislative (2:178-242) : le qisas (178), le testament (180), le mariage (221), le divorce (228-237). La mention de la femelle dans le premier verset legislatif signale que les femmes seront un sujet recurrent de la legislation qui suit.",
              axe4_coherence: "La cloture de la trilogie d'equivalence par la femelle est propre au verset 2:178. En 5:45, la trilogie est differente : ame pour ame, oeil pour oeil, nez pour nez. Le verset 2:178 classe par categorie sociale, le verset 5:45 classe par partie du corps. Les deux approches se completent pour couvrir l'ensemble de la legislation du qisas — le qui (2:178) et le quoi (5:45).",
              axe5_frequence: "Pour la mission du khalifa, la cloture de la trilogie par la femelle est un rappel que la justice est exhaustive. Le khalifa ne peut pas laisser de zone grise — chaque categorie est couverte. La justice du khalifa doit etre systematique et complete, sans exception ni oubli. La trilogie libre-esclave-femelle est le modele de cette exhaustivite."
            }
          }
        }
      },
      // efw pos=16
      {
        word_key: "efw", position: 16, sense_chosen: "pardon",
        analysis_axes: {
          sense_chosen: "pardon",
          concept_chosen: "Pardon/Effacement",
          concepts: {
            "Pardon/Effacement": {
              status: "retenu",
              senses: ["pardonner", "effacer", "laisser aller", "passer outre", "remettre"],
              proof_ctx: "Le verbe ufiya est un accompli passif 3MS de la racine ayn-f-w. Le Lane's donne : pardonner, effacer, laisser aller, passer outre, remettre une dette. Le pardon est l'acte de laisser aller — de ne pas exercer son droit a la retribution. Le passif montre que le pardon est accorde au meurtrier (il est pardonne) par la famille de la victime. La racine afw porte aussi le sens d'effacement — pardonner c'est effacer la dette de sang. Le passif est important : ce n'est pas le meurtrier qui pardonne, c'est la famille de la victime qui pardonne au meurtrier.",
              axe1_verset: "Le verbe ufiya marque le tournant du verset — de la prescription du qisas au pardon. Le fa (alors) de « fa-man ufiya » introduit l'alternative : apres avoir prescrit la retribution, le Coran ouvre immediatement la porte au pardon. Le champ lexical change : on passe de meurtre/libre/esclave a pardon/frere/suivi/reconnu/acquittement/excellence. Le verset montre que la justice coranique n'est pas purement punitive — elle integre la clemence comme composante essentielle.",
              axe2_voisins: "Le verset 179 qui suit dit : « Dans le qisas il y a une vie ». Le pardon du verset 178 est une alternative au qisas, mais le verset 179 ne mentionne que le qisas comme source de vie. La tension entre les deux versets montre que le qisas et le pardon sont complementaires — le qisas dissuade le meurtre (179), le pardon repare la communaute (178). Les deux ensemble forment une justice complete.",
              axe3_sourate: "La racine ayn-f-w apparait en 2:178 (pardon dans le qisas), en 2:187 (Dieu pardonne vos ecarts pendant le jeune), et en 2:286 (pardonne-nous et fais-nous misericorde). La sourate utilise le pardon a la fois dans le contexte humain (la famille pardonne au meurtrier) et divin (Dieu pardonne aux croyants). Le pardon humain du verset 178 reflete le pardon divin de 2:286.",
              axe4_coherence: "La racine ayn-f-w apparait environ 35 fois dans le Coran. En 4:149, « Dieu est Pardonnant, Puissant » (afuwwan qadiran). Le pardon est un attribut divin que le Coran encourage les humains a imiter. En 2:178, le pardon est humain — la famille de la victime pardonne au meurtrier. Le Coran lie le pardon divin et le pardon humain par la meme racine, montrant que pardonner est un acte qui rapproche de Dieu.",
              axe5_frequence: "Pour la mission du khalifa, le pardon est un instrument de reconciliation aussi important que la retribution. Le khalifa doit faciliter le pardon quand il est possible — il ne doit pas seulement punir mais aussi reconcilier. Le verset montre que le pardon n'est pas de la faiblesse — il est suivi de conditions precises (suivi selon le reconnu, acquittement avec excellence). Le khalifa doit s'assurer que le pardon est accompagne de justice reparatrice."
            },
            "Surplus/Excès": {
              status: "probable",
              senses: ["surplus", "excédent", "ce qui dépasse", "abondance", "surcroît"],
              proof_ctx: "Le sens de surplus est un sens atteste de la racine ayn-f-w. Le Lane's donne : ce qui depasse, le surplus, l'excedent, ce qui reste apres les besoins. Le lien avec le pardon est etymologique : pardonner c'est laisser le surplus, ne pas reclamer tout ce qui est du. En 2:219, le Coran utilise al-afwa dans le sens de surplus (donnez le surplus). Ici, le contexte est le pardon dans le qisas — le surplus n'est pas le sens premier.",
              axe1_verset: "Le sens de surplus n'est pas directement actif dans ce verset. Le champ lexical est celui du pardon (pardon, frere, suivi, acquittement) pas du surplus economique. Cependant, le lien etymologique est instructif : pardonner c'est ne pas reclamer tout ce qui est du, c'est laisser un surplus de droit au meurtrier. Le pardon est un surplus de clemence — on donne plus que ce que la justice stricte exige.",
              axe2_voisins: "En 2:219, le Coran dit « ils t'interrogent sur ce qu'ils doivent depenser, dis : le surplus (al-afwa) ». Le surplus de 2:219 est materiel — donner ce qui depasse les besoins. Le pardon de 2:178 est juridique — ne pas reclamer tout son droit a la retribution. Les deux usages partagent la meme racine et la meme logique : ne pas retenir pour soi ce qu'on pourrait reclamer.",
              axe3_sourate: "La sourate al-Baqarah utilise la racine ayn-f-w dans les deux sens : pardon (2:178, 2:286) et surplus (2:219). Cette double utilisation montre la richesse semantique de la racine. Le pardon et le surplus sont lies — pardonner c'est donner un surplus de clemence, depenser le surplus c'est pardonner a son argent de partir.",
              axe4_coherence: "La racine ayn-f-w illustre comment le Coran lie pardon et generosite. En 42:40, « quiconque pardonne et se reforme, sa recompense est aupres de Dieu ». En 7:199, « pratique le pardon (al-afwa), ordonne le bien reconnu ». Le pardon et le surplus sont les deux faces d'une meme generosite — donner plus que le minimum, ne pas reclamer tout ce qui est du.",
              axe5_frequence: "Pour la mission du khalifa, le surplus est le fondement de la generosite que le khalifa doit pratiquer. Le khalifa ne se contente pas du minimum — il donne le surplus, il pardonne quand il pourrait punir. Le lien entre surplus et pardon montre que la mission du khalifa est fondamentalement generouse : il gere les biens de la terre avec generosite, pas avec avarice."
            }
          }
        }
      },
      // axw pos=19
      {
        word_key: "axw", position: 19, sense_chosen: "frere",
        analysis_axes: {
          sense_chosen: "frere",
          concept_chosen: "Fraternité/Lien",
          concepts: {
            "Fraternité/Lien": {
              status: "retenu",
              senses: ["frère", "frère de religion", "lien fraternel", "compagnon", "semblable"],
              proof_ctx: "Le nom akhihi est un nom genitif de la racine a-kh-w avec pronom suffixe 3MS (son). Le Lane's donne : frere, frere de sang, frere de religion, compagnon, semblable. Le frere est ici le frere en religion — la victime (ou sa famille) est designee comme le frere du meurtrier. Ce choix lexical est remarquable : meme apres un meurtre, le Coran maintient le lien de fraternite entre les parties. Le meurtrier n'est pas exclu de la communaute — il reste le frere de la famille de sa victime. C'est ce lien qui rend le pardon possible.",
              axe1_verset: "Le mot akhihi est le mot le plus surprenant du verset. Dans un contexte de meurtre et de retribution, le Coran appelle la famille de la victime « son frere » (le frere du meurtrier). Le champ lexical change radicalement : de la retribution froide (libre pour libre) a la fraternite chaleureuse (son frere). Ce mot est la cle de voute du passage sur le pardon — si la victime est le frere du meurtrier, le pardon est non seulement possible mais naturel. La fraternite fonde la reconciliation.",
              axe2_voisins: "Le verset 177 definissait la piete (birr) par une serie d'actes : croire, donner, prier, jeuner, tenir sa parole, patienter. Le verset 178 montre un acte de piete supreme : pardonner le meurtrier de son frere. La piete de 177 est rituelle et sociale ; la piete de 178 est heroique — pardonner celui qui a tue est l'acte le plus difficile de la birr. Le mot « frere » fait le lien entre la piete theorique (177) et la piete pratique (178).",
              axe3_sourate: "La racine a-kh-w apparait dans la sourate al-Baqarah en 2:178 (le frere dans le qisas), en 2:220 (les orphelins sont vos freres), et en plusieurs recits prophetiques. La sourate construit progressivement une vision de la communaute comme fraternite — les croyants sont freres y compris quand l'un d'eux a commis un crime. En 2:220, les orphelins sont appeles « freres » — le lien de fraternite depasse le sang et le crime.",
              axe4_coherence: "La racine a-kh-w apparait environ 96 fois dans le Coran. En 49:10, « les croyants sont des freres, reconciliez vos freres ». En 3:103, « vous etiez des ennemis et Il a mis la fraternite entre vos coeurs ». Le Coran construit une fraternite de foi qui transcende les conflits. En 2:178, cette fraternite est mise a l'epreuve par le meurtre — et elle survit. Le fait que le Coran appelle la victime « frere » du meurtrier est une affirmation que la fraternite de foi est indestructible.",
              axe5_frequence: "Pour la mission du khalifa, la fraternite est le ciment de la communaute. Le khalifa doit maintenir le lien fraternel meme dans les conflits les plus graves. Le verset 178 montre que la fraternite survit au meurtre — a plus forte raison, elle doit survivre aux conflits mineurs. Le khalifa est le garant de cette fraternite : il facilite le pardon, il maintient le lien, il empeche que le crime ne detruise la communaute."
            }
          }
        }
      },
      // tbae pos=21
      {
        word_key: "tbae", position: 21, sense_chosen: "suivi",
        analysis_axes: {
          sense_chosen: "suivi",
          concept_chosen: "Suite/Succession",
          concepts: {
            "Suite/Succession": {
              status: "retenu",
              senses: ["suivre", "se conformer", "poursuivre", "succéder", "aller après"],
              proof_ctx: "Le nom ittiba'un est un masdar (nom verbal) nominatif indefini de la racine t-b-ayn a la forme VIII. Le Lane's donne : suivre, poursuivre, se conformer a, marcher derriere, obeir. L'ittiba' est l'acte de suivre — apres le pardon, il faut suivre les regles de la compensation. La forme VIII (iftia'l) indique l'engagement actif du sujet — ce n'est pas un suivi passif mais un engagement a se conformer. Le nom indefini (ittiba'un, sans l'article al) marque le caractere general : un suivi (quel qu'il soit, pourvu qu'il soit conforme au ma'ruf).",
              axe1_verset: "Le mot ittiba'un ouvre la partie conditionnelle du pardon. Apres « fa-man ufiya lahu min akhihi shay'un » (quiconque beneficie d'un pardon de son frere), le verset prescrit : « fa-ttiba'un bi-l-ma'rufi wa-ada'un ilayhi bi-ihsanin » (un suivi selon le reconnu et un acquittement avec excellence). Le suivi est la premiere condition du pardon — celui qui pardonne doit suivre les regles de la compensation. Le verset pose le principe que le pardon n'est pas gratuit — il est conditionne par un comportement conforme.",
              axe2_voisins: "Le verset 179 qui suit n'entre pas dans les details du suivi — il donne la sagesse generale du qisas. Le verset 178 est le seul a poser les conditions du pardon : suivi et acquittement. Les versets suivants (180-182) passeront au testament, un autre domaine legislatif. Le suivi de 2:178 est specifique au contexte du qisas — il ne s'agit pas d'un suivi general mais du suivi des conditions de la compensation pour meurtre.",
              axe3_sourate: "La racine t-b-ayn est frequente dans la sourate al-Baqarah. En 2:38, « quiconque suit Ma guidance n'aura rien a craindre ». En 2:145, « si tu suivais leurs desirs ». La sourate utilise le suivi dans des contextes varies : suivre la guidance divine, suivre les desirs, suivre les conditions du pardon. En 2:178, le suivi est juridique — se conformer aux regles de la compensation apres le pardon du qisas.",
              axe4_coherence: "La racine t-b-ayn apparait environ 173 fois dans le Coran. Le Coran distingue le bon suivi (suivre la guidance, 2:38) du mauvais suivi (suivre les pas de Satan, 2:168). En 2:178, le suivi est qualifie par « bi-l-ma'rufi » (selon le reconnu) — c'est un suivi encadre, norme, pas un suivi aveugle. Le Coran impose toujours des conditions au suivi — le suivi n'est bon que s'il est conforme a ce qui est reconnu.",
              axe5_frequence: "Pour la mission du khalifa, le suivi est la conformite aux regles etablies. Le khalifa doit s'assurer que le pardon est accompagne d'un suivi conforme — pas de pardon sans conditions. Le suivi montre que le pardon n'est pas une abolition de la justice mais une transformation : au lieu de la retribution, on impose une compensation suivie selon les regles. Le khalifa supervise ce suivi pour garantir que le pardon ne devienne pas de l'impunite."
            }
          }
        }
      },
      // erf pos=22
      {
        word_key: "erf", position: 22, sense_chosen: "ce qui est reconnu",
        analysis_axes: {
          sense_chosen: "ce qui est reconnu",
          concept_chosen: "Connaissance/Reconnaissance",
          concepts: {
            "Connaissance/Reconnaissance": {
              status: "retenu",
              senses: ["connaître", "reconnaître", "ce qui est connu", "convenable", "usage établi"],
              proof_ctx: "Le nom al-ma'rufi est un participe passif substantive de la racine ayn-r-f au genitif defini. Le Lane's donne : ce qui est connu, reconnu, convenable, accepte par l'usage, conforme aux normes sociales. Le ma'ruf est ce que la communaute reconnait comme juste et acceptable — les normes sociales etablies. Le mot est au genitif regi par la preposition bi (selon). La structure « bi-l-ma'rufi » (selon ce qui est reconnu) est une expression coranique recurrente qui renvoie aux usages sociaux acceptes. Le suivi du pardon doit etre conforme a ces normes — pas de conditions excessives ni humiliantes.",
              axe1_verset: "Le mot al-ma'rufi qualifie le suivi (ittiba'un) qui est la premiere condition du pardon. Le suivi doit etre « selon le reconnu » — c'est-a-dire conforme aux normes sociales de la communaute. Le verset ne definit pas le contenu exact du ma'ruf — il renvoie aux usages etablis. Cette flexibilite est deliberee : le ma'ruf peut varier selon les epoques et les societes. Le verset combine la rigueur juridique (prescrire le qisas) et la flexibilite sociale (selon le reconnu).",
              axe2_voisins: "Le verset 177 mentionnait le ma'ruf implicitement a travers la definition de la piete. Le verset 178 l'utilise explicitement comme norme du suivi apres le pardon. Le verset 180 suivant utilisera le ma'ruf pour le testament (wasiyyatan bi-l-ma'rufi). Le ma'ruf est le fil conducteur de la section legislative : chaque prescription est encadree par les normes sociales reconnues. La repetition du ma'ruf montre que la loi coranique n'est pas abstraite — elle s'inscrit dans le tissu social.",
              axe3_sourate: "La racine ayn-r-f et le mot ma'ruf sont tres frequents dans la sourate al-Baqarah. En 2:228, les femmes ont des droits « bi-l-ma'rufi ». En 2:233, l'allaitement se fait « bi-l-ma'rufi ». En 2:236, la compensation de la femme repudiee est « bi-l-ma'rufi ». La sourate utilise le ma'ruf comme norme universelle dans tous les domaines legislatifs : meurtre, testament, mariage, divorce, allaitement.",
              axe4_coherence: "Le mot ma'ruf apparait environ 39 fois dans le Coran. En 3:104, « qu'il y ait parmi vous un groupe qui appelle au bien et ordonne le ma'ruf ». En 7:199, « ordonne le ma'ruf ». Le ma'ruf est un des concepts-cles de l'ethique coranique — c'est le bien reconnu par tous, la norme sociale positive. Le Coran l'oppose au munkar (le reprehensible, le non reconnu). Le couple ma'ruf/munkar structure toute l'ethique sociale coranique.",
              axe5_frequence: "Pour la mission du khalifa, le ma'ruf est la norme qu'il doit promouvoir et faire respecter. Le khalifa ordonne le ma'ruf et interdit le munkar — c'est sa mission fondamentale. En 2:178, le ma'ruf encadre le pardon — le khalifa doit s'assurer que la compensation apres le pardon est conforme aux normes reconnues. Le ma'ruf est le standard de qualite de la justice du khalifa."
            }
          }
        }
      },
      // ady pos=23
      {
        word_key: "ady", position: 23, sense_chosen: "acquittement",
        analysis_axes: {
          sense_chosen: "acquittement",
          concept_chosen: "Accomplissement/Restitution",
          concepts: {
            "Accomplissement/Restitution": {
              status: "retenu",
              senses: ["accomplir", "restituer", "s'acquitter", "rendre ce qui est dû", "payer"],
              proof_ctx: "Le nom ada'un est un masdar nominatif indefini de la racine a-d-y. Le Lane's donne : accomplir, restituer, s'acquitter de, rendre ce qui est du, payer une dette. L'ada' est l'acte concret d'acquitter une obligation — ici, le paiement de la compensation (diya) au meurtrier pardonne. Le mot est distinct de qada' (juger, prononcer un jugement) — l'ada' est l'execution concrete, pas le jugement. Le nom est au nominatif car il est le second sujet de la phrase nominale (apres ittiba'un) : un suivi... et un acquittement.",
              axe1_verset: "Le mot ada'un est la seconde condition du pardon apres le suivi (ittiba'un). Le verset prescrit deux obligations pour celui qui pardonne : suivre les regles (ittiba'un bi-l-ma'rufi) et s'acquitter de la compensation (ada'un ilayhi bi-ihsanin). L'acquittement est qualifie par « bi-ihsanin » (avec excellence) — il ne suffit pas de payer, il faut payer avec excellence, c'est-a-dire de bonne grace, sans delai ni ressentiment. Le verset combine la justice (payer ce qui est du) et la vertu (payer avec excellence).",
              axe2_voisins: "Le verset 177 mentionnait les depenses dans le chemin de Dieu. Le verset 178 parle de l'acquittement de la compensation apres le pardon. Les deux versets lient la depense financiere a la piete — donner son argent est un acte de foi, qu'il s'agisse de l'aumone (177) ou de la compensation du meurtre (178). Le verset 180 ajoutera le testament — une autre forme d'acquittement financier lie a la mort.",
              axe3_sourate: "La racine a-d-y apparait peu dans la sourate al-Baqarah. Le concept d'acquittement est cependant present a travers d'autres racines : n-f-q (depenser, 2:195), a-t-y (donner, 2:177). La sourate construit une ethique de la depense qui va de l'aumone volontaire (sadaqa) a la compensation obligatoire (diya). L'acquittement de 2:178 est le paiement le plus grave — il rachete un sang verse.",
              axe4_coherence: "La racine a-d-y apparait environ 20 fois dans le Coran. En 4:58, « Dieu vous ordonne de rendre les depots a leurs ayants droit » (tu'addu l-amanati ila ahliha). L'acquittement est un devoir fondamental — rendre ce qui est du. En 2:178, l'acquittement est specifique : c'est la compensation pour meurtre apres le pardon. Le Coran lie l'acquittement a l'excellence (ihsan) pour montrer que payer n'est pas suffisant — il faut payer bien.",
              axe5_frequence: "Pour la mission du khalifa, l'acquittement est l'execution concrete de la justice. Le khalifa ne se contente pas de juger — il s'assure que les compensations sont effectivement payees. L'acquittement avec excellence montre que la mission du khalifa va au-dela de la justice formelle — il doit promouvoir l'excellence dans les relations entre les membres de la communaute. Payer avec excellence c'est maintenir le lien social meme dans l'epreuve du meurtre."
            }
          }
        }
      },
      // hsn pos=25
      {
        word_key: "hsn", position: 25, sense_chosen: "excellence",
        analysis_axes: {
          sense_chosen: "excellence",
          concept_chosen: "Excellence morale",
          concepts: {
            "Excellence morale": {
              status: "retenu",
              senses: ["excellence", "bienfaisance", "perfection", "faire le bien", "agir au mieux"],
              proof_ctx: "Le nom ihsanin est un masdar genitif indefini de la racine h-s-n. Le Lane's donne : faire le bien, agir avec excellence, embellir, perfectionner, ameliorer. L'ihsan est l'excellence dans l'action — faire plus que le minimum requis. Le hadith celebre definit l'ihsan comme « adorer Dieu comme si tu Le voyais ». La preposition bi (avec) indique la maniere : l'acquittement doit se faire avec ihsan — c'est-a-dire de bonne grace, sans retard, sans ressentiment, avec generosite. L'ihsan transforme une obligation juridique en acte de vertu.",
              axe1_verset: "Le mot ihsanin qualifie l'acquittement (ada'un) — payer avec excellence. Le verset construit une gradation morale : prescrire la retribution (minimum juridique), ouvrir au pardon (clemence), conditionner le pardon par un suivi et un acquittement avec excellence (vertu). Le champ lexical du verset culmine dans l'ihsan — apres la rigueur du qisas et la douceur du pardon, l'excellence est l'ideal vers lequel tend le verset. L'ihsan est le point le plus eleve de la legislation.",
              axe2_voisins: "Le verset 177 definissait la piete par des actes concrets. Le verset 178 montre que meme dans le meurtre, l'excellence est attendue — l'acquittement doit etre fait avec ihsan. Le verset 179 dira « dans le qisas il y a une vie » — la sagesse du qisas est liee a l'excellence de son application. Les versets 177-179 forment un ensemble : piete (177), legislation avec excellence (178), sagesse (179).",
              axe3_sourate: "La racine h-s-n est frequente dans la sourate al-Baqarah. En 2:83, « parlez aux gens avec bienveillance » (husnan). En 2:195, « faites le bien (ahsinu) car Dieu aime ceux qui font le bien (al-muhsinina) ». La sourate lie l'ihsan a toutes les spheres de la vie : parole (83), acte juridique (178), comportement general (195). L'ihsan est la qualite transversale que la sourate promeut dans tous les domaines.",
              axe4_coherence: "La racine h-s-n apparait environ 194 fois dans le Coran. L'ihsan est un des trois piliers de la religion avec l'islam (soumission) et l'iman (foi). En 55:60, « la recompense de l'ihsan est-elle autre chose que l'ihsan ? ». En 16:90, « Dieu ordonne la justice et l'ihsan ». Le Coran place l'ihsan au-dessus de la simple justice — la justice est le minimum, l'ihsan est l'ideal. En 2:178, l'ihsan qualifie l'acquittement apres le pardon — la justice du qisas est transcendee par l'excellence du pardon.",
              axe5_frequence: "Pour la mission du khalifa, l'ihsan est le standard d'excellence qui doit guider toutes ses actions. Le khalifa ne se contente pas de la justice — il vise l'excellence. L'acquittement avec ihsan montre que meme dans les situations les plus tragiques (le meurtre), le khalifa doit promouvoir l'excellence des comportements. L'ihsan transforme la vengeance en reconciliation, l'obligation en vertu, le minimum en ideal."
            },
            "Beauté/Bonté": {
              status: "probable",
              senses: ["beauté", "bonté", "beau", "bon", "agréable"],
              proof_ctx: "Le sens de beaute est un sens fondamental de la racine h-s-n. Le Lane's donne : beau, bon, agreable, plaisant. Le hasan est ce qui est beau — la beaute physique et morale. Le lien avec l'ihsan est etymologique : faire le bien c'est embellir, perfectionner. Ici, le contexte est moral (acquittement avec excellence) pas esthetique, mais la beaute est l'arriere-plan semantique de l'ihsan.",
              axe1_verset: "Le sens de beaute n'est pas directement actif dans ce verset mais il est present en arriere-plan. L'acquittement avec ihsan est un acte qui embellit la relation entre le meurtrier et la famille de la victime. Le verset montre que meme dans le meurtre, il y a une possibilite de beaute — la beaute du pardon, la beaute de l'acquittement de bonne grace. Le champ lexical du verset passe de la violence (meurtre) a la beaute (excellence).",
              axe2_voisins: "Le verset 177 mentionnait les belles qualites de la piete. Le verset 178 montre la beaute dans le contexte le plus difficile — le meurtre. La beaute du pardon est plus grande que la beaute de l'aumone ou de la priere car elle exige le depassement de la douleur. Le passage de 177 a 178 montre une progression dans la difficulte de la beaute morale.",
              axe3_sourate: "La racine h-s-n apparait dans la sourate al-Baqarah dans des contextes varies : la belle parole (2:83), le bel acte (2:195), le beau pret (2:245). La sourate montre que la beaute morale s'exprime dans tous les domaines — parler, agir, preter, et meme pardonner un meurtrier. La beaute est le fil conducteur de l'ethique coranique dans la sourate.",
              axe4_coherence: "En 12:3, le Coran dit « Nous te racontons le meilleur des recits » (ahsana l-qasas) — le superlatif de h-s-n qualifie le recit. En 39:18, « ceux qui ecoutent la parole et suivent la meilleure » (ahsanaha). Le Coran utilise la beaute comme critere de qualite dans tous les domaines : recit, parole, acte. En 2:178, l'ihsan est la beaute de l'acquittement.",
              axe5_frequence: "Pour la mission du khalifa, la beaute est la qualite que le khalifa doit rechercher dans toutes ses actions. Le khalifa ne fait pas seulement ce qui est juste — il fait ce qui est beau. L'ihsan est l'embellissement de l'action — rendre belle meme la compensation pour un meurtre. Le khalifa est l'artisan de la beaute morale dans la communaute."
            }
          }
        }
      },
      // xff pos=27
      {
        word_key: "xff", position: 27, sense_chosen: "allegement",
        analysis_axes: {
          sense_chosen: "allegement",
          concept_chosen: "Légèreté/Allègement",
          concepts: {
            "Légèreté/Allègement": {
              status: "retenu",
              senses: ["alléger", "rendre léger", "diminuer", "soulager", "atténuer"],
              proof_ctx: "Le nom takhfifun est un masdar nominatif indefini de la racine kh-f-f a la forme II. Le Lane's donne : alleger, rendre leger, diminuer le poids, soulager, attenuer. Le takhfif est l'acte d'alleger — rendre une charge moins lourde. La forme II (taf'il) est intensive : alleger considerablement, pas juste un peu. Le demonstratif « dhalika » (cela) qui precede renvoie a toute la disposition du pardon — l'introduction du pardon dans la legislation du qisas est qualifiee d'allegement. La loi du talion pure (sans pardon) est plus lourde ; l'ajout du pardon est un allegement.",
              axe1_verset: "Le mot takhfifun ouvre la troisieme partie du verset — la qualification divine de la disposition. Apres la prescription du qisas (premiere partie) et les conditions du pardon (deuxieme partie), le verset qualifie l'ensemble : « cela est un allegement de votre Seigneur et une misericorde ». Le champ lexical change encore : de la legislation (prescrire, retribution) au divin (allegement, Seigneur, misericorde). Le verset montre que la loi n'est pas un fardeau mais un allegement — une grâce divine.",
              axe2_voisins: "Le verset 179 qui suit dit « dans le qisas il y a une vie ». L'allegement de 178 et la vie de 179 sont les deux bienfaits de la legislation : elle est legere (178) et elle preserve la vie (179). Les versets 183-184 utiliseront le meme concept d'allegement pour le jeune : « Dieu veut pour vous la facilite, pas la difficulte ». La section legislative de la sourate est encadree par le theme de l'allegement — Dieu ne veut pas rendre la vie difficile.",
              axe3_sourate: "La racine kh-f-f apparait en 2:178 (allegement dans le qisas), en 2:286 (notre Seigneur, ne nous impose pas ce que nous ne pouvons supporter) et dans l'esprit de 2:185 (Dieu veut la facilite). La sourate construit une theologie de l'allegement — Dieu allege les charges de Ses serviteurs. Le qisas avec pardon est un allegement par rapport au talion sans pardon. Le jeune avec ses exemptions est un allegement par rapport au jeune absolu.",
              axe4_coherence: "La racine kh-f-f apparait environ 16 fois dans le Coran. En 4:28, « Dieu veut alleger pour vous (yukhaffifa ankum) car l'homme a ete cree faible ». En 8:66, Dieu allege pour les croyants en reduisant le ratio de combat de 1:10 a 1:2. Le Coran presente systematiquement l'allegement comme un acte de misericorde divine — Dieu connait la faiblesse humaine et adapte Sa legislation en consequence.",
              axe5_frequence: "Pour la mission du khalifa, l'allegement est un principe de gouvernance. Le khalifa ne doit pas imposer des charges insupportables — il doit alleger quand c'est possible. La legislation du qisas avec pardon est le modele de cet allegement : la rigueur de la justice est temperee par la douceur du pardon. Le khalifa doit equilibrer la rigueur et la douceur, la justice et la misericorde, la loi et l'allegement."
            }
          }
        }
      },
      // rbb pos=29
      {
        word_key: "rbb", position: 29, sense_chosen: "seigneur",
        analysis_axes: {
          sense_chosen: "seigneur",
          concept_chosen: "Seigneurie/Autorité bienveillante",
          concepts: {
            "Seigneurie/Autorité bienveillante": {
              status: "retenu",
              senses: ["seigneur", "maître", "éducateur", "celui qui prend soin", "autorité"],
              proof_ctx: "Le nom rabbikum est un nom genitif de la racine r-b-b avec pronom suffixe 2MP (votre). Le Lane's donne : seigneur, maitre, educateur, celui qui prend soin et fait croitre, celui qui nourrit et eleve. Le rabb est plus qu'un simple maitre — il est celui qui accompagne vers la maturite. L'ajout du pronom suffixe « kum » (votre) marque le lien personnel entre Dieu et les croyants. La structure « min rabbikum » (de la part de votre Seigneur) attribue l'allegement a Dieu — c'est Lui qui a choisi d'alleger la legislation en introduisant le pardon.",
              axe1_verset: "Le mot rabbikum identifie la source de l'allegement — votre Seigneur. Le verset structure la legislation comme un don divin : Dieu prescrit le qisas (obligation), ouvre au pardon (clemence), et qualifie le tout d'allegement de Sa part (grâce). Le Seigneur n'est pas un legislateur distant — Il est le Seigneur qui prend soin de Ses serviteurs en leur donnant une loi legere. La preposition « min » (de la part de) marque l'origine divine de l'allegement.",
              axe2_voisins: "Le verset 177 mentionnait Dieu comme destinataire de la piete. Le verset 178 Le presente comme source de l'allegement. Le verset 179 dira « pour les gens doues d'intelligence » — la sagesse du qisas est accessible a ceux qui reflechissent. Les trois versets montrent Dieu sous trois aspects : objet de piete (177), source de clemence (178), et source de sagesse (179).",
              axe3_sourate: "La racine r-b-b est la racine divine la plus frequente de la sourate al-Baqarah apres la racine de la divinite (a-l-h). Le mot rabb apparait des le premier verset significatif : « al-hamdu li-llahi rabbi l-alamina » (1:2, repris en reference). En 2:21, « adorez votre Seigneur ». En 2:131, « soumis au Seigneur des mondes ». Le Seigneur est omnipresent dans la sourate comme source de toute legislation et toute grâce.",
              axe4_coherence: "La racine r-b-b apparait environ 980 fois dans le Coran — c'est l'une des racines les plus frequentes. Le Rabb est le nom divin qui exprime la relation personnelle entre Dieu et Ses creatures. En 2:178, « votre Seigneur » personalise la legislation — ce n'est pas une loi abstraite mais un cadeau de votre Seigneur. Le Coran utilise rabb pour les moments de grâce et de protection, ilah pour les moments d'adoration et de crainte.",
              axe5_frequence: "Pour la mission du khalifa, le Seigneur est l'autorite supreme que le khalifa represente sur terre. Le khalifa est le lieutenant du Rabb — il applique la legislation du Seigneur avec la meme bienveillance. Le mot rabbikum rappelle que la loi vient de Celui qui prend soin — le khalifa doit appliquer la loi avec le meme soin. La seigneurie divine est le modele de la gouvernance du khalifa : autorite et bienveillance unies."
            },
            "Éducation/Accompagnement": {
              status: "probable",
              senses: ["éduquer", "élever", "accompagner", "faire grandir", "nourrir"],
              proof_ctx: "Le sens d'education est un sens fondamental de la racine r-b-b. Le Lane's donne : elever, eduquer, nourrir, faire croitre. Le rabb est etymologiquement celui qui eleve — il prend un etre immature et l'accompagne vers la maturite. Le rabba est l'acte d'elever un enfant. Ici, le contexte est legislatif (allegement de la loi) mais l'arriere-plan educatif est present : Dieu eduque Sa communaute en lui donnant une loi progressive et allegee.",
              axe1_verset: "Le sens d'education est present en arriere-plan dans le verset. L'introduction du pardon dans la legislation du qisas est un acte educatif — Dieu enseigne a Sa communaute qu'il y a une voie au-dela de la retribution pure. L'allegement est pedagogique : il montre que la justice peut etre temperee par la misericorde. Le verset eduque les croyants a depasser la logique de la vengeance pour atteindre la reconciliation.",
              axe2_voisins: "Le verset 177 definissait la piete par ses composantes — c'est un enseignement. Le verset 178 legifere avec allegement — c'est une education progressive. Le verset 179 donne la sagesse — c'est la conclusion pedagogique. Les trois versets forment une sequence educative : definir (177), legisler (178), expliquer (179). Le Rabb est l'educateur qui guide pas a pas.",
              axe3_sourate: "La sourate al-Baqarah est elle-meme un parcours educatif. Elle commence par les categories de personnes (croyants, mecreants, hypocrites), raconte les histoires des prophetes, puis legifere. Le Rabb est l'educateur qui structure ce parcours. En 2:178, l'allegement est un moment-cle de l'education — apres avoir pose des principes rigoureux, le Rabb allege pour montrer la misericorde.",
              axe4_coherence: "En 12:23, Youssef refuse la seduction en disant « mon maitre (rabbi) m'a bien traite ». Le rabb est celui qui traite bien, qui eduque avec soin. En 1:2, « louange a Dieu, Seigneur des mondes » — le rabb de toute la creation. Le Coran presente Dieu comme l'educateur supreme qui accompagne chaque etre vers sa finalite. En 2:178, l'education se manifeste par l'allegement de la loi.",
              axe5_frequence: "Pour la mission du khalifa, l'education est le moyen par lequel il accomplit sa mission. Le khalifa n'est pas seulement un juge — il est un educateur qui accompagne la communaute vers la maturite. Le Rabb est son modele : eduquer avec bienveillance, legisler avec allegement, accompagner avec patience. La mission du khalifa est fundamentalement educative."
            }
          }
        }
      },
      // rhm pos=30
      {
        word_key: "rhm", position: 30, sense_chosen: "misericorde",
        analysis_axes: {
          sense_chosen: "misericorde",
          concept_chosen: "Miséricorde/Tendresse",
          concepts: {
            "Miséricorde/Tendresse": {
              status: "retenu",
              senses: ["miséricorde", "tendresse", "compassion", "clémence", "pitié"],
              proof_ctx: "Le nom rahmatun est un nom nominatif indefini de la racine r-h-m. Le Lane's donne : misericorde, tendresse, compassion, clemence, pitie, bonte. La rahma est la tendresse active qui pousse a soulager la souffrance d'autrui. Le mot derive de rahim (matrice, uterus) — la misericorde est comparee a la tendresse d'une mere pour son enfant. Le nom est au nominatif car il est coordonne a takhfifun (allegement) par la conjonction wa (et) : « un allegement et une misericorde ». L'indefini marque l'intensite : une misericorde (immense, sans mesure).",
              axe1_verset: "Le mot rahmatun est le dernier qualificatif positif du verset avant l'avertissement final. Le verset structure ses qualificatifs en gradation : allegement (acte juridique) puis misericorde (motivation divine). L'allegement est ce que Dieu fait (alleger la loi), la misericorde est pourquoi Il le fait (par tendresse). Le champ lexical du verset culmine dans la misericorde — apres le meurtre, la retribution, le pardon, l'excellence, l'allegement, la misericorde est le sommet de la legislation.",
              axe2_voisins: "Le verset 177 definissait la piete sans mentionner explicitement la misericorde divine. Le verset 178 revele que la legislation elle-meme est un acte de misericorde — Dieu ne punit pas, Il allege et fait misericorde. Le verset 179 montrera que dans le qisas il y a une vie — la misericorde se manifeste meme dans la retribution. Les versets 177-179 revelent progressivement la misericorde divine : dans la piete (177), dans la loi (178), dans la sagesse (179).",
              axe3_sourate: "La racine r-h-m est omnipresente dans la sourate al-Baqarah. La basmala ouvre par « Au nom de Dieu, le Tout-Misericordieux, le Tres-Misericordieux ». En 2:143, Dieu ne fera pas perdre votre foi — « Dieu est envers les gens plein de bonte et de misericorde ». La sourate est encadree par la misericorde — chaque legislation, chaque recit, chaque exhortation est un acte de misericorde divine.",
              axe4_coherence: "La racine r-h-m apparait environ 339 fois dans le Coran. C'est la racine la plus associee a Dieu apres la racine de la divinite. En 6:12, « Dieu s'est prescrit a Lui-meme la misericorde ». En 21:107, le Prophete est « une misericorde pour les mondes ». La misericorde est l'attribut divin par excellence — elle precede la colere, elle enveloppe la creation. En 2:178, la misericorde qualifie la legislation du qisas — meme la loi du meurtre est un acte de misericorde.",
              axe5_frequence: "Pour la mission du khalifa, la misericorde est la motivation fondamentale de sa mission. Le khalifa n'est pas un juge implacable — il est un instrument de la misericorde divine sur terre. Le verset 178 montre que meme dans la justice du meurtre, la misericorde est presente. Le khalifa doit incarner cette misericorde dans toutes ses decisions — punir quand c'est necessaire mais toujours avec la misericorde comme horizon."
            }
          }
        }
      },
      // edw pos=32
      {
        word_key: "edw", position: 32, sense_chosen: "transgresser",
        analysis_axes: {
          sense_chosen: "transgresser",
          concept_chosen: "Transgression/Excès",
          concepts: {
            "Transgression/Excès": {
              status: "retenu",
              senses: ["transgresser", "dépasser les limites", "outrepasser", "excéder", "agresser"],
              proof_ctx: "Le verbe i'tada est un accompli 3MS de la racine ayn-d-w a la forme VIII. Le Lane's donne : transgresser, depasser les limites, outrepasser, exceder, agresser. L'i'tida' est le depassement des limites posees par la loi — aller au-dela de ce qui est permis. La forme VIII (ifti'al) indique l'engagement actif du sujet dans la transgression — il ne transgresse pas par accident mais deliberement. Le verbe est precede de « fa-man » (quiconque) qui generalise : quiconque transgresse apres cela — la menace est universelle.",
              axe1_verset: "Le verbe i'tada ouvre la partie finale du verset — l'avertissement. Apres avoir prescrit le qisas, ouvert au pardon, et qualifie le tout d'allegement et de misericorde, le verset se ferme par une mise en garde : quiconque transgresse apres cela aura un chatiment douloureux. La transgression est ici le depassement des limites posees par le verset lui-meme — exiger plus que la compensation, tuer apres avoir pardonne, refuser les termes du pardon. Le verset montre que l'allegement a des limites — abuser de la misericorde est une transgression.",
              axe2_voisins: "Le verset 179 qui suit ne mentionne pas la transgression — il donne la sagesse positive du qisas. L'avertissement de 178 est le contrepoids de l'allegement — la misericorde n'est pas de la permissivite. En 2:190, le Coran dit « combattez dans le chemin de Dieu ceux qui vous combattent et ne transgressez pas (la ta'tadu) ». La racine ayn-d-w est systematiquement liee au depassement des limites dans la sourate.",
              axe3_sourate: "La racine ayn-d-w est frequente dans la sourate al-Baqarah. En 2:61, les fils d'Israel « transgressaient ». En 2:173, « quiconque est contraint sans transgression ni exces ». En 2:190, « ne transgressez pas ». En 2:229, « ce sont les limites de Dieu, ne les transgressez pas ». La sourate construit une theologie des limites — Dieu pose des limites (hudud) et la transgression est le depassement de ces limites.",
              axe4_coherence: "La racine ayn-d-w apparait environ 106 fois dans le Coran. En 5:2, « ne cooperez pas dans le peche et la transgression ». En 65:1, « quiconque transgresse les limites de Dieu se fait tort a lui-meme ». Le Coran lie systematiquement la transgression au tort que l'on se fait — transgresser n'est pas seulement nuire aux autres mais se nuire a soi-meme. En 2:178, la transgression apres le pardon est doublement grave : elle viole la loi et elle gache la misericorde.",
              axe5_frequence: "Pour la mission du khalifa, la transgression est la menace permanente contre l'ordre que le khalifa doit maintenir. Le khalifa doit poser les limites (hudud) et les faire respecter. La transgression apres l'allegement est la pire forme de transgression — elle montre l'ingratitude envers la misericorde divine. Le khalifa doit etre vigilant contre ceux qui abusent de la clemence pour transgresser."
            }
          }
        }
      },
      // edb pos=36
      {
        word_key: "edb", position: 36, sense_chosen: "chatiment",
        analysis_axes: {
          sense_chosen: "chatiment",
          concept_chosen: "Châtiment/Punition",
          concepts: {
            "Châtiment/Punition": {
              status: "retenu",
              senses: ["châtiment", "punition", "tourment", "supplice", "peine"],
              proof_ctx: "Le nom adhabun est un nom nominatif indefini de la racine ayn-dh-b. Le Lane's donne : chatiment, punition, tourment, supplice, ce qui cause de la souffrance comme punition. Le adhab est la punition qui inflige de la douleur — il est la consequence de la transgression. L'indefini (adhabun, sans article) marque l'intensite ou l'indetermination : un chatiment d'un type que tu ne peux mesurer. Le nom est au nominatif car il est le sujet de la phrase : « fa-lahu adhabun alimun » (il aura un chatiment douloureux).",
              axe1_verset: "Le mot adhabun est l'avant-dernier mot significatif du verset. Le verset se ferme sur la menace du chatiment — apres avoir offert la misericorde, il previent que la transgression sera punie. Le contraste est saisissant : « allegement et misericorde » dans la phrase precedente, « chatiment douloureux » dans la phrase suivante. Le verset encadre la misericorde par la justice — la misericorde est offerte mais la transgression est punie. La structure est equilibree : grace et rigueur.",
              axe2_voisins: "Le verset 179 qui suit dit « dans le qisas il y a une vie ». La vie de 179 contraste avec le chatiment de 178 — ceux qui respectent la loi ont la vie, ceux qui transgressent ont le chatiment. Les versets 174-176 mentionnaient le feu (nar) pour ceux qui cachent la verite. Le chatiment de 178 est dans la meme ligne — transgresser les limites de Dieu mene au chatiment, que ce soit en cachant la verite (174-176) ou en transgressant apres le pardon (178).",
              axe3_sourate: "La racine ayn-dh-b est tres frequente dans la sourate al-Baqarah. En 2:7, les mecreants ont « un chatiment immense » (adhabun azim). En 2:10, les hypocrites ont « un chatiment douloureux » (adhabun alim). En 2:85, ceux qui violent le pacte ont « le chatiment le plus severe ». La sourate utilise le chatiment comme contrepoids de la grâce — chaque offre de misericorde est accompagnee d'un avertissement. En 2:178, le chatiment est la consequence de la transgression apres le pardon.",
              axe4_coherence: "La racine ayn-dh-b apparait environ 373 fois dans le Coran. Le chatiment est un des themes les plus frequents — il est le contrepoids de la recompense (thawab, ajr). Le Coran lie systematiquement le chatiment a la transgression et la recompense a l'obeissance. En 2:178, le chatiment douloureux est reserve a celui qui transgresse apres avoir beneficie de l'allegement et de la misericorde — c'est le chatiment de l'ingrat.",
              axe5_frequence: "Pour la mission du khalifa, le chatiment est l'instrument ultime de la justice quand la misericorde a echoue. Le khalifa doit d'abord offrir l'allegement et le pardon, mais si le transgresseur persiste, le chatiment est inevitable. Le verset 178 montre que le chatiment n'est pas la premiere option — il est la derniere, apres l'allegement et la misericorde. Le khalifa doit epuiser toutes les voies de la clemence avant de recourir au chatiment."
            }
          }
        }
      },
      // alm pos=37
      {
        word_key: "alm", position: 37, sense_chosen: "douloureux",
        analysis_axes: {
          sense_chosen: "douloureux",
          concept_chosen: "Douleur/Souffrance",
          concepts: {
            "Douleur/Souffrance": {
              status: "retenu",
              senses: ["douloureux", "pénible", "qui cause la souffrance", "affliction", "tourment"],
              proof_ctx: "L'adjectif alimun est un adjectif nominatif indefini de la racine a-l-m. Le Lane's donne : douloureux, penible, qui cause de la douleur, qui fait souffrir. La forme fa'il (alim) est intensive — non pas « qui fait un peu mal » mais « intensement douloureux ». L'adjectif qualifie le chatiment (adhab) — le chatiment sera intensement douloureux. L'indefini renforce l'intensite : un chatiment douloureux d'un degre que tu ne peux imaginer. Le couple « adhabun alimun » (chatiment douloureux) est une expression coranique recurrente qui designe le chatiment dans l'au-dela.",
              axe1_verset: "Le mot alimun est le dernier mot significatif du verset — il ferme le verset sur une note de severite. La structure du verset est un arc : il commence par l'appel aux croyants (douceur), pose le qisas (rigueur), ouvre au pardon (clemence), qualifie d'allegement et de misericorde (grâce), et se ferme sur le chatiment douloureux (severite). Le verset fait un cercle complet — de la douceur a la severite, montrant que la legislation divine integre les deux poles.",
              axe2_voisins: "Le verset 10 de la sourate mentionnait deja le « chatiment douloureux » (adhabun alimun) pour les hypocrites. Le verset 178 utilise la meme expression pour le transgresseur du qisas. Le parallelisme montre que transgresser les limites du pardon est aussi grave que l'hypocrisie. Le verset 179 ne mentionne pas la douleur — il parle de vie. Le passage de la douleur (178) a la vie (179) est un contraste puissant.",
              axe3_sourate: "L'expression « adhabun alimun » apparait 11 fois dans la sourate al-Baqarah (2:10, 104, 174, 178, etc.). Elle est la formule standard de l'avertissement divin dans la sourate. La repetition cree un leitmotiv — chaque section legislative ou narrative se ferme sur cette formule. En 2:178, elle ferme la section du qisas. La douleur du chatiment est le contrepoids de l'allegement — qui abuse de l'allegement recevra la douleur.",
              axe4_coherence: "La racine a-l-m apparait environ 74 fois dans le Coran. En 2:10, « adhabun alimun » pour les hypocrites. En 3:21, pour ceux qui tuent les prophetes. En 4:138, pour les hypocrites encore. L'expression est reservee aux transgressions les plus graves — l'hypocrisie, le meurtre des prophetes, la transgression apres la misericorde. Le verset 2:178 place la transgression apres le pardon au meme niveau que ces crimes majeurs.",
              axe5_frequence: "Pour la mission du khalifa, la douleur du chatiment est le dernier recours de la justice. Le khalifa doit avertir avant de punir — le verset avertit (quiconque transgresse) avant de mentionner le chatiment. L'avertissement est un acte de misericorde — il donne au transgresseur la possibilite de se reprendre. Le khalifa doit toujours avertir avant de sanctionner, et la sanction doit etre proportionnelle a la transgression."
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

  const verseIds = [185];
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
  console.log('=== PIPELINE SOURATE 2 — VERSET 178 ===\n');
  await processVerse(178);
  await syncWordMeanings();
  console.log('\n=== PIPELINE V178 TERMINEE ===');
}

main().catch(e => console.error('FATAL:', e));
