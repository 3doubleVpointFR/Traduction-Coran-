const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

async function run() {
  const verse_analysis_id = 705;

  const translation_arab = "Seigneur ! Nous avons cru en ce que Tu as fait descendre et suivi le messager. Inscris-nous donc parmi ceux qui témoignent.";

  const full_translation = "Notre Maître, nous avons accordé notre confiance en ce que Tu as fait descendre et nous avons suivi le messager, inscris-nous donc avec ceux qui témoignent.";

  const translation_meditational = "Celui qui prend soin de nous, nous te faisons confiance dans ce que Tu as envoyé vers nous, nous avons marché dans le sillage de Ton envoyé — grave nos noms parmi ceux qui portent témoignage.";

  const translation_explanation = `§DEMARCHE§
Ce verset est la réponse des disciples sincères qui ont répondu à l'appel du messager au verset précédent (3:52). Après que le messager a senti la résistance venant d'eux et leur a demandé « qui sont mes secoureurs vers Dieu ? », ceux qui ont répondu adressent maintenant leur invocation directement à Dieu. Ils déclarent trois choses : leur confiance, leur suivi du messager, et leur demande d'inscription parmi les témoins.

**Rabbanā** (notre maître) — c'est un nom au vocatif avec le pronom suffixe « nā » (notre). D'après les sources étymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la racine r-b-b porte le sens premier d'augmenter, faire croître, élever. Le rabb est celui qui possède, entretient et fait grandir ce qui est sous sa responsabilité. Le vocatif « rabbanā » est un appel direct à Celui qui détient l'autorité bienveillante sur les disciples — c'est une invocation qui reconnaît à la fois la position d'autorité de Dieu et sa bienveillance envers eux. On traduit par « notre Maître ».

**Āmannā** (nous avons accordé notre confiance) — c'est un verbe à l'accompli, forme IV de la racine a-m-n, avec le pronom suffixe « nā » (nous). La forme IV est déclarative : elle signifie « déclarer que l'on se met en sécurité auprès de quelqu'un ». L'accompli indique que l'acte est achevé — les disciples ont déjà fait cet acte de confiance. D'après les sources étymologiques, la racine a-m-n porte le sens premier d'être en sécurité, être à l'abri du danger. La forme IV avec la préposition « bi » donne « accorder sa confiance à ». On traduit par « nous avons accordé notre confiance ».

**Bimā anzalta** (en ce que Tu as fait descendre) — « bi » est une préposition (en), « mā » est un pronom relatif (ce que), et « anzalta » est un verbe à l'accompli forme IV de la racine n-z-l avec le pronom « ta » (Tu). La forme IV anzala signifie « faire descendre » — c'est le causatif de « descendre ». D'après les sources étymologiques, la racine n-z-l porte le sens premier de mouvement du haut vers le bas. Le texte ne précise pas ce qui a été fait descendre — les disciples accordent leur confiance à tout ce que Dieu a fait descendre, sans restriction. On traduit par « en ce que Tu as fait descendre ».

**Ittaba'nā** (nous avons suivi) — c'est un verbe à l'accompli, forme VIII de la racine t-b-' avec le pronom « nā ». La forme VIII est réfléchie et intensive : elle ajoute l'idée d'un engagement personnel dans l'action de suivre. D'après les sources étymologiques, la racine t-b-' porte le sens premier de marcher derrière quelqu'un, aller dans son sillage. La forme VIII intensifie cet engagement — les disciples ne se contentent pas de suivre passivement, ils se sont eux-mêmes engagés à suivre. On traduit par « nous avons suivi ».

**Ar-rasūla** (le messager) — c'est un nom défini avec l'article « al- » au cas accusatif, complément d'objet de « ittaba'nā ». D'après les sources étymologiques, le rasūl est « celui qui est envoyé avec un message ». Le Lane's précise que le mot est de la mesure fa'ūl au sens de maf'ūl — c'est-à-dire celui qui subit l'action d'être envoyé. L'article défini montre que le messager est connu et identifié — dans ce contexte, il s'agit du messager mentionné dans les versets précédents. On traduit par « le messager ».

**Fa-uktubnā** (inscris-nous donc) — « fa » est la particule consécutive (donc, alors), et « uktubnā » est un verbe à l'impératif de la racine k-t-b avec le pronom « nā ». L'impératif est adressé à Dieu — les disciples Lui demandent d'accomplir un acte. D'après les sources étymologiques, la racine k-t-b porte le sens premier de tracer des signes, écrire, inscrire. La particule « fa » consécutive relie cette demande aux deux déclarations précédentes : parce que nous avons accordé notre confiance et que nous avons suivi le messager, alors inscris-nous. On traduit par « inscris-nous donc ».

**Ma'a ash-shāhidīn** (avec ceux qui témoignent) — « ma'a » est une préposition (avec), et « ash-shāhidīn » est un participe actif pluriel défini de la racine sh-h-d au cas génitif. Le participe actif signifie « ceux qui font activement l'action de témoigner ». D'après les sources étymologiques, la racine sh-h-d porte le sens premier de rapporter ce que l'on a vu ou appris, déclarer ce que l'on sait. Le participe actif implique que les témoins ne sont pas des spectateurs passifs mais des personnes qui déclarent activement leur témoignage. L'article défini montre que ce groupe est connu — les témoins sont une catégorie définie. On traduit par « avec ceux qui témoignent ».

§JUSTIFICATION§
**notre Maître** — Le sens retenu pour rabb est « Seigneurie/Autorité bienveillante ». Le mot « maître » est choisi car il exprime à la fois l'autorité et la bienveillance : le maître est celui qui possède et prend soin. L'alternative « seigneur » est écartée car elle a une connotation féodale en français courant. L'alternative « éducateur » est écartée car le vocatif ici insiste sur l'autorité, pas sur le processus pédagogique.

**nous avons accordé notre confiance** — Le sens retenu pour āmannā est « faire confiance » du sens « Sécurité/Confiance ». L'expression « accorder sa confiance » est choisie car elle traduit la forme IV déclarative : on déclare que l'on se remet à quelqu'un. L'alternative « croire » est écartée car c'est une extension du sens premier — « croire » efface la dimension concrète de sécurité et de remise de soi que porte la racine a-m-n.

**Tu as fait descendre** — Le sens retenu pour anzalta est « faire descendre » du sens « Descente/Révélation ». Le mot « fait descendre » est choisi car il traduit littéralement la forme IV causative sans présupposer la nature de ce qui descend. L'alternative « révéler » est écartée car elle ajoute une interprétation que le texte ne fait pas — le verbe dit simplement « faire descendre ».

**nous avons suivi** — Le sens retenu pour ittaba'nā est « suivre » du sens « Suivre/Accompagner ». Le mot « suivi » est choisi car il est le plus naturel en français courant. L'alternative « imité » est écartée car elle réduit le suivi à la reproduction des gestes, alors que la racine implique un mouvement dans le sillage de l'autre.

**le messager** — Le sens retenu pour ar-rasūla est « messager » du sens « Messager/Porteur ». Le mot « messager » est choisi car il traduit exactement rasūl : celui qui porte un message. L'alternative « prophète » est écartée car le texte utilise rasūl (envoyé avec un message), pas nabī (qui annonce).

**inscris-nous** — Le sens retenu pour uktubnā est « écrire » du sens « Écriture/Inscription ». Le mot « inscris » est choisi car il combine l'acte d'écrire avec l'idée d'enregistrement dans un groupe — « inscris-nous avec » est une expression naturelle en français. L'alternative « décrète » est écartée car le verbe à l'impératif avec « ma'a » (avec) oriente vers l'inscription, pas vers un décret.

**ceux qui témoignent** — Le sens retenu pour ash-shāhidīn est « témoigner » du sens « Témoignage/Déclaration ». L'expression « ceux qui témoignent » est choisie car le participe actif implique une action continue et volontaire. L'alternative « les témoins » (nom) est possible mais moins précise — « ceux qui témoignent » rend mieux le participe actif qui insiste sur l'action en cours.

§CRITIQUE§
**notre Maître vs Seigneur** — Hamidullah traduit « rabbanā » par « Seigneur ». Notre traduction donne « notre Maître ». Le mot « seigneur » vient du vocabulaire féodal et chrétien — il évoque un rapport de suzeraineté hérité. Le mot « maître » est plus neutre et exprime mieux la relation d'autorité bienveillante que porte la racine r-b-b : celui qui possède, entretient et fait grandir. Le mot « seigneur » est devenu conventionnel dans les traductions coraniques par influence du vocabulaire biblique français.

**nous avons accordé notre confiance vs nous avons cru** — Hamidullah traduit « āmannā » par « nous avons cru ». Notre traduction donne « nous avons accordé notre confiance ». Le verbe « croire » est une traduction conventionnelle qui efface le sens premier de la racine a-m-n : la sécurité, la confiance, la remise de soi. La forme IV avec « bi » signifie étymologiquement « accorder sa confiance à », pas simplement « croire en ». Le choix de « croire » vient de l'influence du vocabulaire chrétien (« croire en Dieu ») appliqué à la traduction coranique.

**en ce que Tu as fait descendre** — Hamidullah donne la même traduction : « ce que Tu as fait descendre ». Pas de différence notable.

**nous avons suivi** — Hamidullah donne « suivi ». Notre traduction donne aussi « nous avons suivi ». Pas de différence.

**le messager** — Hamidullah donne « le messager ». Pas de différence.

**inscris-nous donc vs inscris-nous donc** — Hamidullah donne « Inscris-nous donc ». Pas de différence notable.

**avec ceux qui témoignent vs parmi ceux qui témoignent** — Hamidullah traduit « ma'a » par « parmi ». Notre traduction donne « avec ». La préposition « ma'a » signifie « avec » (en compagnie de), pas « parmi » (au milieu de). « Avec » est plus fidèle à l'arabe — les disciples demandent à être EN COMPAGNIE des témoins, pas simplement comptés dans leur nombre.`;

  // Build display segments
  const segments = [
    { fr: "Notre Maître", pos: "nom", phon: "rabbanā", arabic: "رَبَّنَآ", word_key: "rbb", is_particle: false, sense_retenu: "celui qui entretient", position: 1 },
    { fr: "nous avons accordé notre confiance", pos: "verbe", phon: "āmannā", arabic: "ءَامَنَّا", word_key: "amn", is_particle: false, sense_retenu: "faire confiance", position: 2 },
    { fr: "en", pos: "particle", phon: "bi", arabic: "بِ", word_key: null, is_particle: true, sense_retenu: null, position: 3 },
    { fr: "ce que", pos: "particle", phon: "mā", arabic: "مَآ", word_key: null, is_particle: true, sense_retenu: null, position: 4 },
    { fr: "Tu as fait descendre", pos: "verbe", phon: "anzalta", arabic: "أَنزَلْتَ", word_key: "nzl", is_particle: false, sense_retenu: "faire descendre", position: 5 },
    { fr: "et", pos: "particle", phon: "wa", arabic: "وَ", word_key: null, is_particle: true, sense_retenu: null, position: 6 },
    { fr: "nous avons suivi", pos: "verbe", phon: "ittabaʿnā", arabic: "ٱتَّبَعْنَا", word_key: "tba", is_particle: false, sense_retenu: "suivre", position: 7 },
    { fr: "le messager", pos: "nom", phon: "ar-rasūla", arabic: "ٱلرَّسُولَ", word_key: "rsl", is_particle: false, sense_retenu: "messager", position: 8 },
    { fr: "donc", pos: "particle", phon: "fa", arabic: "فَ", word_key: null, is_particle: true, sense_retenu: null, position: 9 },
    { fr: "inscris-nous", pos: "verbe", phon: "uktubnā", arabic: "ٱكْتُبْنَا", word_key: "ktb", is_particle: false, sense_retenu: "écrire", position: 10 },
    { fr: "avec", pos: "particle", phon: "maʿa", arabic: "مَعَ", word_key: null, is_particle: true, sense_retenu: null, position: 11 },
    { fr: "ceux qui témoignent", pos: "nom", phon: "ash-shāhidīn", arabic: "ٱلشَّـٰهِدِينَ", word_key: "shhd", is_particle: false, sense_retenu: "témoigner", position: 12 }
  ];

  const { error } = await db.from('verse_analyses').update({
    full_translation,
    translation_arab,
    translation_meditational,
    translation_explanation,
    segments
  }).eq('id', verse_analysis_id);

  if (error) console.log('Update error:', JSON.stringify(error));
  else console.log('Updated verse_analyses with translation data');
}

run().catch(console.error);
