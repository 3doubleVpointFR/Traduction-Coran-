const { createClient } = require('@supabase/supabase-js');
const db = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// S2:11 — وَإِذَا قِيلَ لَهُمْ لَا تُفْسِدُوا فِي الْأَرْضِ قَالُوا إِنَّمَا نَحْنُ مُصْلِحُونَ
// S2:12 — أَلَا إِنَّهُمْ هُمُ الْمُفْسِدُونَ وَلَـٰكِن لَّا يَشْعُرُونَ
// S2:13 — وَإِذَا قِيلَ لَهُمْ آمِنُوا كَمَا آمَنَ النَّاسُ قَالُوا أَنُؤْمِنُ كَمَا آمَنَ السُّفَهَاءُ أَلَا إِنَّهُمْ هُمُ السُّفَهَاءُ وَلَـٰكِن لَّا يَعْلَمُونَ

// Word analysis IDs lookup - need to fetch these
async function getWaIds(keys) {
  const { data } = await db.from('word_analyses').select('id, word_key').in('word_key', keys);
  const map = {};
  for (const d of data) map[d.word_key] = d.id;
  return map;
}

// VWA data for V11-13
const vwaData = [
  // === V11 (verse_id=18) ===
  { verse_id: 18, word_key: 'qwl', position: 2, analysis_axes: {
    sense_chosen: "on dit",
    concept_chosen: "Parole/Énonciation",
    concepts: {
      "Parole/Énonciation": {
        senses: ["dire", "parole", "énoncer", "prononcer", "discours"],
        status: "retenu",
        proof_ctx: "Le sens retenu est « Parole/Énonciation ». Le verbe qila est à l'accompli passif (une forme qui dit que l'action a été faite sans nommer qui l'a faite) — « il a été dit », c'est-à-dire « on dit ». Le passif efface l'identité du locuteur pour centrer sur le contenu du message. Distinction avec « Pensée/Avis » : le verset porte sur ce qui est dit à voix haute, pas sur ce qui est pensé en silence. La parole est un acte extérieur dirigé vers un interlocuteur.",
        axe1_verset: "Le verbe qila ouvre le verset par une citation au passif — « quand on leur dit ». Le champ lexical est celui de l'échange verbal : quelqu'un parle, quelqu'un écoute. Le passif efface l'auteur de la parole pour centrer l'attention sur le message et sur la réaction de ceux qui l'entendent. Le contenu de la parole est un ordre négatif (la tufsidu = ne corrompez pas). Le verbe introduit un dialogue entre les avertisseurs et les hypocrites. La structure « quand on leur dit X, ils disent Y » est un schéma coranique récurrent pour exposer l'hypocrisie.",
        axe2_voisins: "Le verset 12 répond à cette affirmation : ce sont EUX les corrupteurs, mais ils n'en ont pas conscience. La parole du verset 11 est le prétexte qui déclenche la révélation de l'hypocrisie. Le verset 13 reprend la même structure (« quand on leur dit ») avec un autre ordre (croyez). Les versets 11-13 forment un triptyque de dialogues où la parole adressée aux hypocrites est systématiquement rejetée ou détournée. Le schéma « on dit / ils répondent » structure toute cette section.",
        axe3_sourate: "La sourate 2 commence par décrire les catégories de gens face au Coran : les croyants (v3-5), les incroyants (v6-7), et les hypocrites (v8-20). Les versets 11-13 sont au cœur de la description des hypocrites — leur parole révèle leur duplicité. Le verbe qila introduit les injonctions divines que les hypocrites prétendent suivre mais rejettent en réalité. La parole est l'outil par lequel leur hypocrisie est mise en lumière.",
        axe4_coherence: "Le Coran utilise massivement la structure wa idha qila lahum (et quand on leur dit) pour exposer le comportement des hypocrites et des incroyants. Cette formule apparaît dans les sourates 2, 7, 31, 45 et d'autres. C'est un procédé rhétorique coranique constant — la parole adressée sert de test qui révèle la vraie nature de celui qui la reçoit. La cohérence est parfaite avec l'usage coranique.",
        axe5_frequence: "La parole est le vecteur du rappel et de l'avertissement dans la mission humaine de justice. Quand on dit « ne corrompez pas », c'est la mission de prévention de la corruption en action. La réponse hypocrite (« nous ne faisons que réformer ») montre que la parole peut être détournée — le même outil qui devrait servir la vérité est utilisé pour la masquer. La mission humaine passe par la parole vraie et la capacité à entendre les avertissements."
      },
      "Pensée/Avis": {
        senses: ["penser", "avis"],
        status: "nul",
        proof_ctx: "Le verbe est au passif (qila = il a été dit), pas un verbe de pensée. Le contexte est un dialogue oral. Hors sujet."
      }
    }
  }},
  { verse_id: 18, word_key: 'fsd', position: 5, analysis_axes: {
    sense_chosen: "ne corrompez pas",
    concept_chosen: "Corruption/Désordre",
    concepts: {
      "Corruption/Désordre": {
        senses: ["corrompre", "gâter", "détériorer", "désordre"],
        status: "retenu",
        proof_ctx: "Le sens retenu est « Corruption/Désordre ». Le verbe tufsidu est à l'inaccompli forme IV 2ème personne pluriel, précédé de la négation la — « ne corrompez pas ». La forme IV (af'ala) ajoute la causalité : faire entrer la corruption. L'inaccompli avec la négation la exprime un ordre permanent de ne pas corrompre. Le complément fi l-ard (sur la terre) indique que la corruption est spatiale et concrète. La racine n'a qu'un seul concept majeur — toutes les nuances convergent vers la corruption/le désordre.",
        axe1_verset: "Le verbe tufsidu est au centre de l'injonction : « ne corrompez pas sur la terre ». Le champ lexical est celui de la dégradation volontaire de l'ordre — la corruption est un acte qui sort de celui qui corrompt et atteint l'environnement (fi l-ard). La forme IV indique la causalité : ils FONT entrer la corruption, ils ne la subissent pas. L'inaccompli dit que c'est une tendance habituelle qu'il faut arrêter. La négation la est un impératif négatif — c'est un ordre permanent. Le verset oppose cette corruption à la réforme (islah) que les hypocrites prétendent pratiquer.",
        axe2_voisins: "Le verset 12 confirme qu'ils sont bien les corrupteurs (al-mufsidun — participe actif forme IV = ceux qui font la corruption activement). Le parallèle entre tufsidu (v11, inaccompli : vous corrompez) et al-mufsidun (v12, participe : les corrupteurs) renforce le diagnostic. Le verset 11 rapporte l'avertissement, le verset 12 donne le verdict divin. La corruption est le fil rouge de ces deux versets — elle est d'abord niée par les hypocrites puis confirmée par Dieu.",
        axe3_sourate: "La corruption sur la terre est un thème central de la sourate 2 qui définit la mission du khalifa. Le verset 2:30 annonce que l'être humain est placé sur terre comme khalifa — sa mission est de ne PAS corrompre (yufsidu fiha, même racine et forme). Les versets 11-12 montrent les hypocrites qui font exactement ce que la mission du khalifa interdit. La corruption est l'antithèse de la mission humaine, et les hypocrites en sont les agents tout en prétendant le contraire.",
        axe4_coherence: "Le Coran utilise la racine f-s-d dans de nombreux contextes pour désigner la corruption sur la terre — sourate 2:30 (les anges demandent : tu y places quelqu'un qui y sèmera la corruption ?), sourate 7:56 (ne corrompez pas la terre après qu'elle a été réformée). La forme IV est systématiquement utilisée pour la corruption active et intentionnelle. La cohérence est totale : la corruption sur la terre est le test central de la mission du khalifa dans tout le Coran.",
        axe5_frequence: "La corruption sur la terre est l'exact opposé de la mission humaine de justice et de civilisation. Le khalifa est placé sur terre pour empêcher la corruption (la tufsidu fi l-ard), et les hypocrites font le contraire tout en prétendant réformer. La mission de prévention de la corruption est au cœur du message coranique. Le verset montre que les pires corrupteurs sont ceux qui prétendent réformer — la corruption déguisée en réforme est la plus dangereuse car elle est invisible."
      }
    }
  }},
  { verse_id: 18, word_key: 'ard', position: 7, analysis_axes: {
    sense_chosen: "la terre",
    concept_chosen: "Terre/Sol",
    concepts: {
      "Terre/Sol": {
        senses: ["terre", "sol", "terrain", "pays", "contrée"],
        status: "retenu",
        proof_ctx: "Le sens retenu est « Terre/Sol ». Le mot al-ard est un nom défini féminin — la terre comme espace global. Le mot est précédé de fi (dans/sur), formant fi l-ard (sur la terre). C'est la terre au sens large — l'espace de vie humain, le lieu de la mission du khalifa. Distinction avec les sens isolés : le contexte (corruption SUR la terre) ne laisse aucune ambiguïté.",
        axe1_verset: "Le mot al-ard est le complément locatif de tufsidu (corrompre) via la préposition fi — ne corrompez pas SUR la terre. Le champ lexical est celui de l'espace de vie humain — la terre est le lieu où se joue la mission du khalifa. Le nom est défini avec al-, ce qui en fait LA terre en général, pas un terrain spécifique. La terre est présentée comme l'objet de la corruption — c'est elle qui est atteinte par les actes des corrupteurs. L'expression fi l-ard est très fréquente dans le Coran pour désigner l'espace de la mission humaine. La terre est à la fois le lieu et l'enjeu de la corruption.",
        axe2_voisins: "Le verset 12 confirme la corruption sans repréciser « sur la terre » — le complément est sous-entendu. Le verset 2:30 (plus loin dans la sourate) établit que la terre est le lieu de la mission du khalifa : « Je vais placer sur la terre un khalifa ». Les versets 11-12 montrent ceux qui trahissent cette mission en corrompant la terre. La terre est le théâtre permanent de l'action humaine dans cette section de la sourate.",
        axe3_sourate: "La terre est omniprésente dans la sourate 2 comme espace de la mission humaine. Le mot al-ard revient des dizaines de fois dans la sourate — c'est l'espace où le khalifa exerce sa responsabilité. Les hypocrites qui corrompent la terre trahissent la mission fondamentale de l'être humain. La terre n'est pas un simple décor mais le lieu de responsabilité qui justifie l'existence même du khalifa.",
        axe4_coherence: "Le Coran utilise fi l-ard (sur la terre) dans de très nombreux contextes — sourate 2:30, 7:56, 28:77. L'expression est un marqueur de la mission humaine et de la responsabilité sur terre. La terre comme espace de responsabilité est un thème coranique transversal. La cohérence est parfaite avec l'ensemble du corpus.",
        axe5_frequence: "La terre est le lieu de la mission humaine de justice et de civilisation. Corrompre la terre c'est trahir la mission du khalifa — la terre n'appartient pas aux humains, elle leur est confiée. La responsabilité envers la terre est une responsabilité envers Dieu qui l'a confiée. Le verset rappelle que la terre est un espace à préserver, pas à corrompre."
      },
      "Sens isolé/Rhume": { senses: ["rhume"], status: "nul", proof_ctx: "Hors sujet." },
      "Sens isolé/Tremblement": { senses: ["trembler"], status: "nul", proof_ctx: "Hors sujet." }
    }
  }},
  { verse_id: 18, word_key: 'qwl', position: 9, analysis_axes: {
    sense_chosen: "ils disent",
    concept_chosen: "Parole/Énonciation",
    concepts: {
      "Parole/Énonciation": {
        senses: ["dire", "parole", "énoncer", "prononcer", "discours"],
        status: "retenu",
        proof_ctx: "Le sens retenu est « Parole/Énonciation ». Le verbe qalu est à l'accompli 3ème personne masculin pluriel — « ils ont dit ». L'accompli indique que leur réponse est un fait attesté et répété. La parole est ici la réponse des hypocrites à l'avertissement. Distinction avec « Pensée/Avis » : ils DISENT à voix haute, ils ne pensent pas en silence.",
        axe1_verset: "Le verbe qalu introduit la réponse des hypocrites : « Nous ne faisons que réformer ». Le champ lexical est celui de la réplique mensongère — ils utilisent la parole pour se justifier face à l'accusation de corruption. L'accompli dit que c'est un fait attesté — ils ont dit cela et ils le disent encore. La parole est l'outil de leur dissimulation : ils corrompent mais prétendent réformer. Le verbe qalu s'oppose à qila (passif, avertissement) : la parole vraie est au passif (on ne sait pas qui avertit), la parole fausse est à l'actif (ils se désignent comme réformateurs).",
        axe2_voisins: "Le verset 12 contredit directement leur parole : « ce sont eux les corrupteurs ». La réponse hypocrite (v11) est immédiatement démentie (v12). Le verset 13 reprend la même structure : « quand on leur dit... ils disent ». Le verbe qalu est le pivot de chaque verset — c'est la parole des hypocrites qui est systématiquement contredite. Ce schéma « ils disent X / mais en vérité Y » est le cœur de la description de l'hypocrisie.",
        axe3_sourate: "La parole des hypocrites est un thème majeur des versets 8-20. Ils disent croire (v8), ils disent réformer (v11), ils disent que les autres sont stupides (v13). Chaque parole est un mensonge que le texte corrige immédiatement. La sourate 2 utilise la parole comme révélateur de l'hypocrisie. Le verbe qalu est l'instrument de la mise en lumière de leur duplicité.",
        axe4_coherence: "Le Coran rapporte systématiquement la parole des hypocrites pour la démentir — sourate 63:1 (les hypocrites viennent te dire : nous attestons que tu es le messager de Dieu, mais Dieu sait qu'ils mentent). Le schéma est constant dans le Coran. La parole hypocrite est un thème transversal qui traverse de nombreuses sourates.",
        axe5_frequence: "La parole est un outil à double tranchant — elle peut servir la vérité ou la masquer. Les hypocrites utilisent la parole pour prétendre réformer alors qu'ils corrompent. La mission humaine de justice exige la parole vraie — celle qui correspond aux actes. La parole qui contredit les actes est la marque de l'hypocrisie."
      },
      "Pensée/Avis": { senses: ["penser"], status: "nul", proof_ctx: "Verbe de parole, pas de pensée. Accompli actif 3MP. Hors sujet." }
    }
  }},
  { verse_id: 18, word_key: 'slh', position: 11, analysis_axes: {
    sense_chosen: "réformateurs",
    concept_chosen: "Bonté/Rectitude",
    concepts: {
      "Bonté/Rectitude": {
        senses: ["être bon", "être vertueux", "réformer", "remettre en ordre", "convenir"],
        status: "retenu",
        proof_ctx: "Le sens retenu est « Bonté/Rectitude ». Le mot muslihun est un participe actif forme IV pluriel — « ceux qui réforment activement ». La forme IV (aslaha) ajoute la causalité : faire entrer la rectitude, remettre en ordre. Le participe actif dit que c'est leur identité — ils SE présentent comme réformateurs de profession. La réforme (islah) est l'exact opposé de la corruption (ifsad) — le verset oppose les deux avec la même racine structurelle (forme IV). Distinction avec « Sens isolé/Paix » : le contexte est la réforme sociale, pas la paix.",
        axe1_verset: "Le mot muslihun est le attribut de nahnu (nous) dans la phrase nominale « innama nahnu muslihun » — nous ne sommes que des réformateurs. Le champ lexical est celui de la prétention à la vertu — ils se proclament réformateurs alors qu'ils corrompent. Le participe actif forme IV dit qu'ils font activement et continuellement la réforme — c'est leur identité revendiquée. L'opposition entre tufsidu (corrompre, forme IV) et muslihun (réformateur, forme IV) est structurelle : les deux verbes utilisent la même forme mais avec des racines opposées. Le mot innama (seulement, uniquement) renforce la prétention — ils ne font QUE réformer.",
        axe2_voisins: "Le verset 12 contredit cette prétention : « ce sont eux les corrupteurs ». Le parallèle est frappant : au v11 ils se disent muslihun (réformateurs), au v12 le texte les appelle mufsidun (corrupteurs). Les deux mots sont des participes actifs de forme IV — même structure grammaticale, sens opposés. Le verset 11 présente leur version, le verset 12 donne la vérité. La réforme prétendue est une corruption réelle.",
        axe3_sourate: "La réforme (islah) et la corruption (ifsad) sont les deux pôles de la mission du khalifa dans la sourate 2. Le verset 2:30 établit la tension fondamentale : les anges craignent la corruption, Dieu affirme sa sagesse. Les hypocrites prétendent réformer (v11) mais corrompent (v12) — ils incarnent la pire trahison de la mission. La réforme est ce que le khalifa devrait faire, la corruption est ce qu'il doit empêcher. Les hypocrites font le contraire sous couvert de réforme.",
        axe4_coherence: "Le Coran oppose systématiquement islah (réforme) et ifsad (corruption) — sourate 7:56 (ne corrompez pas la terre après qu'elle a été réformée), sourate 2:220 (Dieu distingue le corrupteur du réformateur). La réforme est toujours valorisée, la corruption toujours condamnée. Le verset 2:11 montre le cas le plus dangereux : la corruption déguisée en réforme. La cohérence est parfaite avec la vision coranique de la mission humaine.",
        axe5_frequence: "La réforme (islah) est au cœur de la mission humaine de justice et de civilisation. Le réformateur est celui qui remet en ordre ce qui a été dérangé, qui répare ce qui a été corrompu. Prétendre réformer alors qu'on corrompt est la pire forme de trahison de cette mission — c'est la corruption invisible, celle qui ne peut pas être corrigée tant qu'elle n'est pas démasquée. Le verset montre que la mission de justice exige la lucidité : savoir distinguer la vraie réforme de la fausse."
      },
      "Sens isolé/Paix": { senses: ["paix", "réconciliation"], status: "nul", proof_ctx: "Le contexte est la réforme sociale (islah), pas la paix entre parties. Le mot est un participe actif forme IV (réformateur), pas un nom abstrait (paix). Hors sujet." }
    }
  }},

  // === V12 (verse_id=19) ===
  { verse_id: 19, word_key: 'fsd', position: 4, analysis_axes: {
    sense_chosen: "les corrupteurs",
    concept_chosen: "Corruption/Désordre",
    concepts: {
      "Corruption/Désordre": {
        senses: ["corrompre", "gâter", "détériorer", "désordre"],
        status: "retenu",
        proof_ctx: "Le sens retenu est « Corruption/Désordre ». Le mot al-mufsidun est un participe actif forme IV pluriel défini avec al- — « les corrupteurs », ceux qui font activement et continuellement la corruption. Le participe actif dit que la corruption est leur identité permanente, pas un acte ponctuel. La forme IV (afsada) ajoute la causalité : ils FONT entrer la corruption. Le al- définit les identifie — ce sont LES corrupteurs connus et identifiés par Dieu.",
        axe1_verset: "Le mot al-mufsidun est l'attribut de hum (eux) dans la phrase emphatique « ala innahum humu l-mufsidun » — n'est-ce pas que ce sont eux les corrupteurs. Le champ lexical est celui du verdict divin — après la prétention des hypocrites (v11 : nous sommes des réformateurs), le texte prononce le jugement : non, ils sont les corrupteurs. Le participe actif forme IV les définit par leur corruption — c'est ce qu'ils sont, pas ce qu'ils font ponctuellement. Le pronom emphatique hum (eux-mêmes) insiste : ce sont EUX, précisément eux, les corrupteurs. L'interjection ala (n'est-ce pas que) ajoute la certitude — il n'y a aucun doute.",
        axe2_voisins: "Le verset 11 présentait leur version (nous sommes des réformateurs). Le verset 12 donne la vérité divine (ce sont les corrupteurs). Le parallèle structural est frappant : muslihun (v11) vs mufsidun (v12) — mêmes structures grammaticales (participe actif forme IV pluriel), racines opposées. Le walakinna (mais) qui suit introduit leur aveuglement : ils ne s'en rendent même pas compte (la yash'urun). La corruption est double — ils corrompent ET ils ne savent pas qu'ils corrompent.",
        axe3_sourate: "Le verdict « ce sont eux les corrupteurs » est au cœur de la description des hypocrites dans la sourate 2. La corruption sur la terre est le crime fondamental qui justifie la mise en place du khalifa (v30). Les hypocrites sont les pires ennemis de la mission du khalifa car ils corrompent tout en prétendant réformer. La sourate établit que la corruption déguisée est la plus dangereuse forme de corruption. Le mot mufsidun résonne avec le yufsidu fiha du verset 30.",
        axe4_coherence: "Le Coran identifie les corrupteurs (mufsidun) dans de nombreux versets — sourate 2:27, 7:56, 26:152. Le participe actif forme IV est la forme standard pour désigner les agents actifs de la corruption. La construction emphatique (ala innahum humu) est utilisée dans le Coran pour les vérités que les gens refusent de voir. La cohérence est parfaite — le Coran dénonce systématiquement ceux qui prétendent réformer en corrompant.",
        axe5_frequence: "La corruption active et inconsciente est la forme la plus dangereuse de trahison de la mission humaine. Le corrupteur qui ne sait pas qu'il corrompt est pire que celui qui le sait — car il ne peut pas se corriger. La mission de justice exige la lucidité sur ses propres actes. Le verset montre que l'aveuglement sur sa propre corruption est un symptôme de l'hypocrisie. La prévention de la corruption commence par la conscience de ses propres actes."
      }
    }
  }},
  { verse_id: 19, word_key: 'sher', position: 7, analysis_axes: {
    sense_chosen: "n'ont pas conscience",
    concept_chosen: "Perception/Conscience",
    concepts: {
      "Perception/Conscience": {
        senses: ["percevoir", "avoir conscience", "sentir", "ressentir"],
        status: "retenu",
        proof_ctx: "Le sens retenu est « Perception/Conscience ». Le verbe yash'urun est à l'inaccompli 3ème personne masculin pluriel, précédé de la négation la — « ils ne perçoivent pas, ils n'ont pas conscience ». La racine sh-'-r signifie percevoir par les sens et par l'esprit — avoir conscience de quelque chose. L'inaccompli nié dit que leur absence de conscience est permanente et continue. Distinction avec « Cheveux/Poils » : aucun rapport avec les cheveux dans ce contexte. Distinction avec « Poésie/Expression » : le contexte est la conscience intérieure, pas l'expression poétique.",
        axe1_verset: "Le verbe yash'urun est nié (la yash'urun) — ils n'ont pas conscience. Le champ lexical est celui de l'aveuglement intérieur — les hypocrites corrompent mais ne savent pas qu'ils corrompent. La négation la avec l'inaccompli dit que cette absence de conscience est permanente. Le verbe clôt le verset par un diagnostic sévère : non seulement ils corrompent, mais ils ne s'en rendent même pas compte. La racine sh-'-r évoque la perception subtile — sha'ara c'est percevoir ce qui est fin et discret. Ils ne perçoivent pas la réalité de leurs actes.",
        axe2_voisins: "Le verset 11 montre leur prétention (nous réformons), le verset 12 montre la réalité (ils corrompent) et ajoute l'aveuglement (ils n'en ont pas conscience). Le verset 13 utilise une formule parallèle (la ya'lamun = ils ne savent pas) — la même idée avec une racine différente. La progression est : prétention (v11) → vérité (v12) → aveuglement (v12b). L'absence de conscience est le pont entre la corruption et l'hypocrisie. La walakinna (mais) introduit une nuance : ils ne sont pas seulement corrupteurs, ils sont aveuglés.",
        axe3_sourate: "L'aveuglement des hypocrites est un thème central des versets 8-20 de la sourate 2. Ils croient tromper Dieu mais ne trompent qu'eux-mêmes (v9). Ils n'ont pas conscience de leur corruption (v12). Ils ne savent pas qu'ils sont les stupides (v13). La sourate dresse un portrait de l'aveuglement systématique — à chaque prétention correspond un aveuglement sur la réalité. Le verbe yash'urun pointe vers la dimension la plus profonde de cet aveuglement : ils ne perçoivent même pas.",
        axe4_coherence: "Le Coran utilise la yash'urun dans d'autres contextes pour l'absence de perception — sourate 2:154 (les martyrs sont vivants mais vous ne percevez pas), sourate 7:95 (le châtiment vient et ils ne perçoivent pas). L'absence de perception est toujours liée à un aveuglement face à une réalité importante. La cohérence est directe — le Coran utilise cette racine pour les réalités que les gens ne perçoivent pas malgré leur évidence.",
        axe5_frequence: "La perception (shu'ur) est un outil essentiel de la mission humaine — celui qui ne perçoit pas la réalité de ses actes ne peut pas les corriger. L'absence de conscience est la pire forme d'aveuglement car elle empêche toute correction. La mission de justice exige la lucidité — percevoir la réalité telle qu'elle est, même quand elle contredit ce qu'on aimerait croire. Le verset montre que la corruption inconsciente est plus dangereuse que la corruption délibérée."
      },
      "Cheveux/Poils": { senses: ["cheveu", "poil"], status: "nul", proof_ctx: "Aucun rapport avec les cheveux dans ce contexte. Le verbe yash'urun est un inaccompli de perception, pas un nom de partie du corps. Hors sujet." },
      "Poésie/Expression": { senses: ["poésie", "vers"], status: "nul", proof_ctx: "Le contexte est la conscience intérieure, pas l'expression poétique. Hors sujet." },
      "Rites": { senses: ["rites"], status: "nul", proof_ctx: "Aucun contexte rituel. Hors sujet." }
    }
  }},

  // === V13 (verse_id=20) ===
  { verse_id: 20, word_key: 'qwl', position: 2, analysis_axes: {
    sense_chosen: "on dit",
    concept_chosen: "Parole/Énonciation",
    concepts: {
      "Parole/Énonciation": {
        senses: ["dire", "parole", "énoncer", "prononcer", "discours"],
        status: "retenu",
        proof_ctx: "Le sens retenu est « Parole/Énonciation ». Même structure qu'au verset 11 : qila au passif accompli — « on leur dit ». Le passif efface l'auteur de la parole pour centrer sur le contenu. Le contenu est ici un impératif : « croyez comme les gens ont cru ».",
        axe1_verset: "Le verbe qila reprend la structure du verset 11 — « quand on leur dit ». Le champ lexical est celui de l'injonction : quelqu'un ordonne de croire, les hypocrites refusent. Le passif accompli dit que cet avertissement a eu lieu et continue d'avoir lieu. Le contenu de la parole est un impératif (aminu = croyez), plus directif que l'interdit du v11 (ne corrompez pas). La structure « quand on dit / ils répondent » se répète identiquement — c'est un schéma coranique de démonstration de l'hypocrisie.",
        axe2_voisins: "Le verset 11 utilisait la même structure avec « ne corrompez pas ». Le verset 13 passe à « croyez » — la parole adressée aux hypocrites change de nature (d'un interdit à un ordre positif). Leur réaction est identique dans les deux cas : ils rejettent en se justifiant. Le verset 14 va montrer leur comportement en privé (quand ils retrouvent leurs diables). La parole du verset 13 est le deuxième test que les hypocrites échouent.",
        axe3_sourate: "La sourate 2 utilise le verbe qala/qila comme outil structurel pour exposer les dialogues. La parole au passif (qila) représente la voix de la vérité, la parole à l'actif (qalu) représente la réponse humaine — vraie ou fausse. Dans les versets 11-13, la parole passive est toujours juste et la parole active est toujours mensongère. La sourate oppose la parole de guidance à la parole de dissimulation.",
        axe4_coherence: "La structure wa idha qila lahum aminu (et quand on leur dit croyez) est un schéma coranique récurrent pour tester la sincérité des gens. Le Coran utilise cette structure dans plusieurs sourates pour exposer ceux qui refusent la guidance. La cohérence est parfaite avec l'usage coranique de cette formule.",
        axe5_frequence: "La parole de guidance est un outil de la mission humaine — transmettre la vérité est un devoir. Celui qui refuse la parole de vérité et la détourne en accusation contre les croyants (les traitant de stupides) trahit doublement : il refuse la guidance et il calomnie les guidés. La mission de justice passe par la réception honnête de la parole vraie."
      },
      "Pensée/Avis": { senses: ["penser"], status: "nul", proof_ctx: "Verbe de parole au passif, pas de pensée. Hors sujet." }
    }
  }},
  { verse_id: 20, word_key: 'amn', position: 3, analysis_axes: {
    sense_chosen: "croyez",
    concept_chosen: "Foi/Adhésion",
    concepts: {
      "Foi/Adhésion": {
        senses: ["croire", "adhérer", "faire confiance", "accepter comme vrai"],
        status: "retenu",
        proof_ctx: "Le sens retenu est « Foi/Adhésion ». Le verbe aminu est à l'impératif forme IV 2ème personne pluriel — « croyez ». La forme IV (af'ala) ajoute la causalité : faire entrer la confiance en soi, c'est-à-dire accorder sa confiance. L'impératif est un ordre direct. Le verbe est suivi de kama amana n-nas (comme les gens ont cru) — c'est un modèle à suivre. Distinction avec « Sécurité/Confiance » : le contexte est la foi/adhésion à la guidance, pas la sécurité physique. Distinction avec « Garantie/Protection » : il ne s'agit pas de protéger mais d'adhérer.",
        axe1_verset: "Le verbe aminu est l'impératif central du verset — « croyez comme les gens ont cru ». Le champ lexical est celui de l'adhésion demandée et refusée. La forme IV indique que croire est un acte volontaire : on FAIT entrer la confiance en soi, on la choisit. L'impératif est collectif (2MP) — c'est adressé au groupe des hypocrites. Le complément kama (comme) établit un modèle : les gens (an-nas) ont déjà cru, les hypocrites sont invités à faire de même. Le refus de cet impératif est le signe de l'hypocrisie.",
        axe2_voisins: "Le verset 11 demandait de ne pas corrompre, le verset 13 demande de croire — deux faces de la même injonction. Le refus des hypocrites est symétrique : au v11 ils prétendent réformer, au v13 ils traitent les croyants de stupides. Les versets 14 montrent leur double jeu : quand ils rencontrent les croyants ils disent « nous croyons » (amanna, même racine), mais en privé ils disent le contraire. La foi est le test central de l'hypocrisie dans cette section.",
        axe3_sourate: "La foi (iman) est le thème d'ouverture de la sourate 2 : les versets 3-5 décrivent les croyants sincères, les versets 6-7 les incroyants, les versets 8-20 les hypocrites qui prétendent croire. Le verbe amana est le mot-clé qui traverse toute cette section. La sourate établit que la vraie foi transforme le comportement — les hypocrites qui « croient » sans changer de comportement ne croient pas vraiment. L'impératif aminu du v13 est un test que les hypocrites échouent.",
        axe4_coherence: "Le Coran utilise la forme IV amana dans des centaines de versets pour la foi/adhésion. La construction aminu kama amana (croyez comme X a cru) se retrouve dans d'autres contextes où un modèle de foi est proposé. La forme IV est systématiquement utilisée pour la foi active et volontaire dans tout le Coran. La cohérence est totale.",
        axe5_frequence: "La foi (iman) est le fondement de la mission humaine — sans adhésion aux principes de justice, la mission du khalifa est impossible. Croire comme les gens ont cru c'est s'intégrer dans la communauté de ceux qui ont accepté la guidance. Refuser de croire en traitant les croyants de stupides c'est non seulement rejeter la guidance mais aussi mépriser ceux qui l'ont acceptée. La mission de justice repose sur la foi sincère — la foi simulée des hypocrites est sa pire ennemie."
      },
      "Sécurité/Confiance": {
        senses: ["être en sécurité", "accorder confiance"],
        status: "peu_probable",
        proof_ctx: "La sécurité est un état physique ou psychologique. Le verset parle d'adhésion à une guidance, pas de sécurité. La forme IV + impératif oriente vers l'action de faire entrer la confiance (croire), pas vers l'état de sécurité. Le complément kama amana n-nas (comme les gens ont cru) confirme le sens de foi/adhésion.",
        axe1_verset: "Le verbe aminu avec le complément kama (comme) oriente vers le fait de croire en suivant un modèle, pas vers la sécurité. Le champ lexical est celui de la guidance refusée, pas de la protection recherchée. L'impératif demande une adhésion intellectuelle et spirituelle, pas un état de sécurité physique. Le refus des hypocrites porte sur la croyance, pas sur la sécurité.",
        axe2_voisins: "Les versets environnants parlent de corruption (v11-12), de stupidité (v13b), de double jeu (v14) — le registre est celui de l'hypocrisie face à la foi, pas de l'insécurité face au danger. La sécurité ne s'inscrit pas dans le thème de cette section.",
        axe3_sourate: "La sourate 2 ouvre sur la foi (v3-5) et l'incroyance (v6-7). Le verbe amana est utilisé dans le sens de croire/adhérer tout au long de cette section. La sécurité n'est pas le thème de l'ouverture de la sourate.",
        axe4_coherence: "Le Coran distingue les contextes de foi (amanu bi = ils ont cru en) et de sécurité (amintu = je suis en sécurité). Le verset 13 utilise la forme d'adhésion, pas la forme de sécurité.",
        axe5_frequence: "La foi comme adhésion est plus directement liée à la mission du khalifa que la sécurité. Le refus de croire est le problème des hypocrites, pas le manque de sécurité."
      },
      "Garantie/Protection": { senses: ["protéger", "garantir"], status: "nul", proof_ctx: "Le contexte est l'adhésion à la guidance, pas la protection. Hors sujet." },
      "Sens isolés": { senses: ["amana"], status: "nul", proof_ctx: "Hors sujet dans ce contexte." }
    }
  }},
  { verse_id: 20, word_key: 'nws', position: 6, analysis_axes: {
    sense_chosen: "les gens",
    concept_chosen: "Humanité/Peuple",
    concepts: {
      "Humanité/Peuple": {
        senses: ["gens", "peuple", "humanité", "être humain"],
        status: "retenu",
        proof_ctx: "Le sens retenu est « Humanité/Peuple ». Le mot an-nas est un nom défini collectif — les gens, le peuple. Le mot est défini avec al- ce qui en fait une référence à un groupe connu — les gens qui ont déjà cru. Distinction avec « Perception/Visibilité » : le contexte est un groupe humain, pas un acte de perception.",
        axe1_verset: "Le mot an-nas est le sujet de amana (a cru) dans la comparaison kama amana n-nas — « comme les gens ont cru ». Le champ lexical est celui du groupe humain de référence — les gens qui ont cru sont le modèle que les hypocrites refusent de suivre. Le nom est défini et collectif — il désigne un ensemble connu de personnes. L'expression « les gens » est neutre — elle désigne la majorité qui a accepté la guidance, sans valorisation ni dévalorisation. Les hypocrites sont invités à rejoindre ce groupe. Leur refus les isole de la communauté humaine.",
        axe2_voisins: "Le verset 13b oppose « les gens » (an-nas, ceux qui ont cru) aux « stupides » (as-sufahau, que les hypocrites pensent être les croyants). Les hypocrites traitent « les gens » de stupides — ils inversent la réalité. Le texte corrige immédiatement : ce sont EUX les stupides. La mention de « les gens » établit un contraste entre la majorité qui croit et la minorité hypocrite qui refuse.",
        axe3_sourate: "Le mot an-nas est omniprésent dans la sourate 2 — les gens sont l'objet de la mission du khalifa. La sourate distingue les catégories humaines face à la guidance. « Les gens » qui ont cru représentent l'humanité qui a accompli sa mission. Les hypocrites sont ceux qui se placent en dehors de cette humanité guidée.",
        axe4_coherence: "Le Coran utilise an-nas dans des milliers de versets pour désigner l'humanité. Le mot est neutre et désigne le groupe humain dans sa globalité ou dans un sous-ensemble spécifique au contexte. La cohérence est universelle dans le corpus coranique.",
        axe5_frequence: "Les gens (an-nas) sont l'objet et les agents de la mission humaine de justice. Croire comme les gens ont cru c'est s'intégrer dans l'humanité qui porte la mission. Refuser, c'est s'exclure. La mission de civilisation est collective — elle requiert l'adhésion de la communauté humaine."
      },
      "Perception/Visibilité": { senses: ["percevoir", "visible"], status: "nul", proof_ctx: "Le mot an-nas est un nom collectif désignant les gens, pas un verbe de perception. Hors sujet." }
    }
  }},
  { verse_id: 20, word_key: 'qwl', position: 8, analysis_axes: {
    sense_chosen: "ils disent",
    concept_chosen: "Parole/Énonciation",
    concepts: {
      "Parole/Énonciation": {
        senses: ["dire", "parole", "énoncer"],
        status: "retenu",
        proof_ctx: "Le sens retenu est « Parole/Énonciation ». Le verbe qalu est à l'accompli 3MP — « ils disent ». Même usage qu'au v11 : la réponse hypocrite à l'injonction divine. Ici ils demandent rhétoriquement « devons-nous croire comme les stupides ont cru ? » — la parole est l'outil de leur mépris.",
        axe1_verset: "Le verbe qalu introduit la réponse méprisante des hypocrites : « devons-nous croire comme les stupides ? ». Le champ lexical est celui de la parole qui rejette et méprise. L'accompli 3MP dit que c'est un fait attesté. La réponse est une question rhétorique qui transforme l'injonction en accusation — au lieu de croire, ils accusent les croyants d'être stupides. La parole des hypocrites est systématiquement un détournement. Le verbe qalu fonctionne comme révélateur : chaque fois qu'ils parlent, leur hypocrisie se dévoile.",
        axe2_voisins: "Le schéma qila/qalu (on dit/ils disent) se répète du v11 au v13. Chaque paire révèle un aspect de l'hypocrisie : v11 (corruption niée), v13 (foi refusée). Le v14 poursuit avec un double qalu : ils disent une chose aux croyants et le contraire à leurs diables. La parole est le fil conducteur de la description de l'hypocrisie dans toute cette section.",
        axe3_sourate: "La sourate 2 utilise le verbe qala comme instrument de révélation de la vérité intérieure. Ce que les gens disent montre ce qu'ils sont. Les hypocrites se trahissent par leur parole — chaque réponse révèle leur duplicité. La sourate oppose la parole vraie (celle de la guidance) à la parole fausse (celle de l'hypocrisie).",
        axe4_coherence: "Le Coran rapporte systématiquement la parole des hypocrites pour la démentir. Le schéma est constant. La parole hypocrite est un thème transversal du Coran. La cohérence est parfaite.",
        axe5_frequence: "La parole qui méprise ceux qui croient est une corruption de la mission humaine. Traiter les croyants de stupides c'est s'attaquer à la communauté qui porte la mission de justice. La parole devrait servir la vérité — ici elle sert le mépris."
      },
      "Pensée/Avis": { senses: ["penser"], status: "nul", proof_ctx: "Verbe de parole, pas de pensée. Hors sujet." }
    }
  }},
  { verse_id: 20, word_key: 'amn', position: 9, analysis_axes: {
    sense_chosen: "croire",
    concept_chosen: "Foi/Adhésion",
    concepts: {
      "Foi/Adhésion": {
        senses: ["croire", "adhérer", "faire confiance"],
        status: "retenu",
        proof_ctx: "Le sens retenu est « Foi/Adhésion ». Le verbe nu'minu est à l'inaccompli forme IV 1ère personne pluriel avec le hamza interrogatif a- — « devons-nous croire ? ». La question est rhétorique et méprisante : les hypocrites refusent de croire en présentant la foi comme un acte stupide. La forme IV confirme l'adhésion volontaire.",
        axe1_verset: "Le verbe anu'minu est une question rhétorique : « devons-nous croire comme les stupides ont cru ? ». Le champ lexical est celui du refus méprisant de la foi. L'interrogatif a- transforme la foi en objet de dérision. Les hypocrites ne demandent pas vraiment s'ils doivent croire — ils affirment qu'ils ne le feront pas car c'est pour les « stupides ». Le verbe est à l'inaccompli 1ère personne pluriel, ce qui les implique collectivement. La foi comme acte volontaire (forme IV) est ici refusée volontairement.",
        axe2_voisins: "La question nu'minu (devons-nous croire) fait écho à l'impératif aminu (croyez) du début du même verset. La même racine est utilisée pour l'ordre (croyez) et pour le refus (devons-nous croire comme les stupides ?). Le verset 14 montre qu'en privé ils disent « nous croyons » (amanna) — le même verbe encore, cette fois en mensonge. La racine amn est le fil rouge qui traverse les versets 13-14 et révèle la duplicité.",
        axe3_sourate: "La foi (iman) est testée tout au long de la sourate 2. Les hypocrites échouent au test — ils refusent la foi sincère tout en la simulant en public. Le verbe amana dans ses diverses formes (impératif, interrogatif, accompli) cartographie les attitudes face à la foi. La sourate montre que la vraie foi est un choix difficile que les hypocrites refusent de faire.",
        axe4_coherence: "Le Coran utilise la question rhétorique anu'minu dans la sourate 2:13 comme expression du refus méprisant. La forme est unique mais le sens est cohérent avec les autres passages où les incroyants moquent la foi. La cohérence est directe.",
        axe5_frequence: "La foi refusée par mépris est un obstacle majeur à la mission humaine. Celui qui méprise la foi méprise la communauté qui porte la mission de justice. Le refus de croire par orgueil (se croire supérieur aux croyants) est une corruption de l'intelligence — utiliser la raison contre la guidance au lieu de la mettre à son service."
      },
      "Sécurité/Confiance": { senses: ["sécurité"], status: "nul", proof_ctx: "Le contexte est la foi/adhésion, pas la sécurité. Question rhétorique sur la croyance. Hors sujet." },
      "Garantie/Protection": { senses: ["protéger"], status: "nul", proof_ctx: "Hors sujet." }
    }
  }},
  { verse_id: 20, word_key: 'sfh', position: 11, analysis_axes: {
    sense_chosen: "les stupides",
    concept_chosen: "Légèreté/Stupidité",
    concepts: {
      "Légèreté/Stupidité": {
        senses: ["stupide", "léger d'esprit", "insensé", "ignorant"],
        status: "retenu",
        proof_ctx: "Le sens retenu est « Légèreté/Stupidité ». Le mot as-sufahau est un nom pluriel défini — « les stupides ». La racine s-f-h signifie être léger, manquer de poids — le safih est celui qui manque de gravité intellectuelle et morale. Le nom est défini avec al- ce qui en fait une catégorie identifiée. Les hypocrites appellent les croyants « les stupides » — le texte retourne immédiatement l'accusation : ce sont EUX les stupides. Distinction avec « Agitation/Mouvement » : le contexte est la stupidité, pas l'agitation physique.",
        axe1_verset: "Le mot as-sufahau est le qualificatif que les hypocrites donnent aux croyants : « devons-nous croire comme les stupides ont cru ? ». Le champ lexical est celui du mépris intellectuel — les hypocrites se croient supérieurs aux croyants. Le pluriel défini (as-sufahau) fait des croyants une catégorie de gens que les hypocrites identifient comme idiots. Le mot revient une deuxième fois dans le verset quand le texte retourne l'accusation : « ce sont eux les stupides ». L'ironie est structurelle — ceux qui traitent les autres de stupides sont eux-mêmes les stupides. Le safih est celui qui manque de discernement, pas celui qui croit.",
        axe2_voisins: "Le verset 12 utilisait la même structure de retournement : ils se disent réformateurs (v11), le texte dit qu'ils sont corrupteurs (v12). Au v13, ils traitent les croyants de stupides, le texte dit qu'ils sont eux-mêmes les stupides. Le parallèle est parfait. Le verset 14 va montrer leur double langage — en public ils disent croire, en privé ils moquent les croyants. La stupidité est liée à l'aveuglement : ils ne savent pas qu'ils sont les stupides (la ya'lamun).",
        axe3_sourate: "Le mot sufahau revient au v142 de la sourate 2 (les stupides diront : qui les a détournés de leur direction de prière ?). La racine s-f-h est utilisée dans la sourate pour désigner ceux qui manquent de discernement face aux décisions divines. Les hypocrites et les opposants sont qualifiés de sufahau — ceux qui ne comprennent pas la sagesse derrière les commandements. Le safih dans la sourate 2 est celui qui juge avec légèreté ce qui demande de la profondeur.",
        axe4_coherence: "Le Coran utilise safih/sufahau dans plusieurs contextes — sourate 2:13, 2:142, 7:155. Le safih est toujours celui qui manque de discernement, qui juge avec légèreté. La racine s-f-h (être léger, manquer de poids) est cohérente dans son usage : le safih est l'opposé du halim (celui qui a du poids, de la gravité). Le Coran retourne systématiquement l'accusation de stupidité contre ceux qui la profèrent.",
        axe5_frequence: "La vraie stupidité est de ne pas reconnaître la guidance quand elle se présente. La mission humaine exige le discernement — la capacité de distinguer le vrai du faux, le juste de l'injuste. Celui qui traite les croyants de stupides fait preuve de la pire forme de légèreté intellectuelle — il méprise ce qu'il ne comprend pas. La mission de justice est portée par ceux qui ont la gravité nécessaire pour la comprendre, pas par ceux qui la rejettent avec légèreté."
      },
      "Agitation/Mouvement": { senses: ["s'agiter"], status: "nul", proof_ctx: "Le contexte est la stupidité intellectuelle, pas l'agitation physique. Le mot as-sufahau est un nom qui désigne des personnes, pas un acte de mouvement. Hors sujet." }
    }
  }},
  { verse_id: 20, word_key: 'elm', position: 19, analysis_axes: {
    sense_chosen: "ne savent pas",
    concept_chosen: "Savoir/Connaissance",
    concepts: {
      "Savoir/Connaissance": {
        senses: ["savoir", "connaître", "science", "connaissance"],
        status: "retenu",
        proof_ctx: "Le sens retenu est « Savoir/Connaissance ». Le verbe ya'lamun est à l'inaccompli 3MP précédé de la négation la — « ils ne savent pas ». La racine '-l-m signifie savoir, connaître avec certitude. L'inaccompli nié dit que leur ignorance est permanente. Distinction avec « Marque/Signe » : le contexte est l'ignorance, pas les signes visibles. Parallèle avec la yash'urun du v12 : ils ne perçoivent pas (v12) ET ils ne savent pas (v13) — deux niveaux d'aveuglement.",
        axe1_verset: "Le verbe ya'lamun est nié (la ya'lamun) et clôt le verset par le même diagnostic que le v12 : les hypocrites sont dans l'ignorance de leur propre état. Le champ lexical est celui de l'ignorance involontaire — ils ne savent pas qu'ils sont les stupides. L'inaccompli nié dit que cette ignorance est permanente et continue. Le verbe ya'lamun est plus fort que yash'urun (v12) : yash'urun est percevoir (sentir), ya'lamun est savoir (connaître). L'escalade est subtile : au v12 ils ne perçoivent pas, au v13 ils ne savent même pas. L'aveuglement est total — ni perception ni connaissance.",
        axe2_voisins: "Le verset 12 se terminait par la yash'urun (ils ne perçoivent pas). Le verset 13 se termine par la ya'lamun (ils ne savent pas). Le parallèle est structurel et les deux verbes forment une gradation : du non-percevoir au non-savoir. Le verset 14 va montrer qu'en privé ils sont conscients de leur double jeu — ce qui rend leur ignorance du v13 encore plus troublante. La section oscille entre l'aveuglement sincère et la duplicité consciente.",
        axe3_sourate: "Le savoir ('ilm) est un thème majeur de la sourate 2 — Dieu enseigne à Adam les noms de toutes choses (v31), Dieu sait ce que vous montrez et ce que vous cachez (v33). L'ignorance des hypocrites contraste avec le savoir divin. La sourate établit que le vrai savoir est celui qui vient de Dieu, et que l'ignorance de sa propre condition est la pire forme d'ignorance. Les hypocrites ne savent pas ce qu'ils sont — c'est leur plus grand handicap.",
        axe4_coherence: "Le Coran utilise la ya'lamun dans de nombreux contextes pour l'ignorance des gens face aux réalités spirituelles. La construction walakinna la ya'lamun (mais ils ne savent pas) est récurrente — sourate 2:13, 6:37, 12:21. C'est toujours un verdict sur l'ignorance de ceux qui refusent la guidance. La cohérence est parfaite dans tout le corpus coranique.",
        axe5_frequence: "Le savoir est un outil essentiel de la mission humaine — sans connaissance de la réalité, la mission de justice est impossible. L'ignorance de sa propre condition (ne pas savoir qu'on est stupide, ne pas savoir qu'on corrompt) est la forme la plus dangereuse d'ignorance car elle empêche toute correction. La mission de civilisation exige la connaissance de soi autant que la connaissance du monde."
      },
      "Marque/Signe": { senses: ["signe", "marque"], status: "nul", proof_ctx: "Le verbe ya'lamun est un inaccompli de connaissance, pas un nom de signe. Hors sujet." },
      "Monde/Création": { senses: ["monde"], status: "nul", proof_ctx: "Le contexte est la connaissance, pas le monde physique. Hors sujet." },
      "Lieu/Géographie": { senses: ["lieu"], status: "nul", proof_ctx: "Hors sujet." }
    }
  }}
];

// Verse updates for V11-V13
const verseUpdates = [
  {
    verse_id: 18,
    translation_arab: "Et quand on leur dit : « Ne corrompez pas sur la terre », ils disent : « Nous ne faisons que réformer. »",
    full_translation: "Et quand on leur dit : \"Ne semez pas la corruption sur terre\", ils disent : \"Au contraire nous ne sommes que des réformateurs !\"",
    translation_explanation: `§DEMARCHE§

Le verbe **qila** est à l'accompli passif (une forme qui dit que l'action a été faite sans nommer qui l'a faite) — « il a été dit », c'est-à-dire « on leur dit ». Le passif efface l'identité du locuteur pour centrer l'attention sur le contenu du message : l'ordre de ne pas corrompre.

La particule **la** est une négation impérative — elle donne un ordre négatif permanent : « ne faites pas ».

Le verbe **tufsidu** est à l'inaccompli forme IV (une forme causative qui dit que le sujet FAIT ENTRER quelque chose) 2ème personne du pluriel — « vous faites entrer la corruption ». La forme IV (afsada) ajoute la causalité : ils ne sont pas corrompus passivement, ils corrompent activement. L'inaccompli dit que c'est une action habituelle et continue.

Le complément **fi l-ard** (sur la terre) localise la corruption — c'est sur la terre, dans l'espace de vie humain, que la corruption est semée. La terre est définie avec al- — c'est LA terre connue de tous.

Le verbe **qalu** est à l'accompli 3ème personne du masculin pluriel — « ils ont dit ». L'accompli indique que leur réponse est un fait attesté et répété.

La particule **innama** (seulement, uniquement) restreint — elle limite leur action à la réforme : « nous ne faisons QUE réformer ».

Le mot **muslihun** est un participe actif forme IV pluriel (une forme qui dit que ces personnes FONT l'action activement et en continu) — « des réformateurs ». La forme IV (aslaha) est le symétrique positif de afsada : faire entrer la rectitude. L'opposition entre tufsidu (forme IV de fsd = corrompre) et muslihun (forme IV de slh = réformer) est structurelle — les deux verbes utilisent la même forme causative mais avec des racines opposées.

§JUSTIFICATION§

**ne corrompez pas** — Le sens retenu est « Corruption/Désordre ». Le mot « corrompre » est choisi car il capture l'acte de dégrader volontairement l'ordre établi. L'alternative « ne semez pas le désordre » est écartée car « semer » ajoute une métaphore absente du texte. L'alternative « ne gâtez pas » est écartée car c'est du registre familier.

**la terre** — Le sens retenu est « Terre/Sol ». Le mot « terre » est choisi car il rend al-ard comme espace de vie humain. L'alternative « le pays » est écartée car al-ard est plus large qu'un pays — c'est la terre entière.

**réformer** — Le sens retenu est « Bonté/Rectitude ». Le mot « réformer » est choisi car il capture la causalité de la forme IV (faire entrer la rectitude). L'alternative « faire le bien » est écartée car c'est plus vague — « réformer » implique un acte de correction, de remise en ordre.

§CRITIQUE§

Hamidullah traduit « Au contraire nous ne sommes que des réformateurs ! ». La traduction étymologique donne sensiblement le même sens. La nuance est dans le « ne corrompez pas » : certaines traductions ajoutent « semer » (semer la corruption), qui est une métaphore absente du texte arabe. Le verbe tufsidu dit simplement « vous corrompez » (forme IV causative), sans image agricole.`,
    segments: [
      { fr: "et quand", phon: "wa idha", arabic: "وَإِذَا", position: 1, word_key: null, is_particle: true },
      { fr: "on dit", pos: "verbe", phon: "qila", arabic: "قِيلَ", position: 2, word_key: "qwl", is_particle: false, sense_retenu: "dire" },
      { fr: "à eux", phon: "lahum", arabic: "لَهُمْ", position: 3, word_key: null, is_particle: true },
      { fr: "ne...pas", phon: "la", arabic: "لَا", position: 4, word_key: null, is_particle: true },
      { fr: "corrompez", pos: "verbe", phon: "tufsidu", arabic: "تُفْسِدُوا۟", position: 5, word_key: "fsd", is_particle: false, sense_retenu: "corrompre" },
      { fr: "sur", phon: "fi", arabic: "فِى", position: 6, word_key: null, is_particle: true },
      { fr: "la terre", pos: "nom", phon: "al-ard", arabic: "ٱلْأَرْضِ", position: 7, word_key: "ard", is_particle: false, sense_retenu: "terre" },
      { fr: "ils disent", pos: "verbe", phon: "qalu", arabic: "قَالُوٓا۟", position: 9, word_key: "qwl", is_particle: false, sense_retenu: "dire" },
      { fr: "seulement nous", phon: "innama nahnu", arabic: "إِنَّمَا نَحْنُ", position: 10, word_key: null, is_particle: true },
      { fr: "réformateurs", pos: "nom", phon: "muslihun", arabic: "مُصْلِحُونَ", position: 11, word_key: "slh", is_particle: false, sense_retenu: "réformer" }
    ]
  },
  {
    verse_id: 19,
    translation_arab: "N'est-ce pas que ce sont eux les corrupteurs ? Mais ils n'en ont pas conscience.",
    full_translation: "En vérité, ce sont eux les véritables corrupteurs, mais ils n'en sont pas conscients.",
    translation_explanation: `§DEMARCHE§

L'interjection **ala** (n'est-ce pas que, en vérité) ouvre le verset par une affirmation emphatique — c'est une certitude qui ne souffre aucun doute. Le texte ne questionne pas, il affirme.

La particule **inna** (certes) renforce l'emphase — double emphase avec ala inna.

Le pronom **hum** (eux) est répété deux fois (innahum humu) pour insister : ce sont EUX, précisément eux, et personne d'autre.

Le mot **al-mufsidun** est un participe actif forme IV pluriel défini avec al- (une forme qui dit que ces personnes FONT l'action activement et en continu) — « les corrupteurs ». La forme IV (afsada) est la même que tufsidu au verset 11 — ils sont identifiés comme ceux qui font entrer la corruption activement et continuellement. Le participe actif les définit par leur corruption — c'est ce qu'ils sont comme identité, pas ce qu'ils font par accident.

La conjonction **walakinna** (mais) introduit une nuance importante — non seulement ils corrompent, mais en plus ils ne s'en rendent pas compte.

Le verbe **yash'urun** est à l'inaccompli 3MP précédé de la négation la — « ils ne perçoivent pas ». La racine sh-'-r signifie percevoir, avoir conscience de quelque chose de subtil. L'inaccompli nié dit que leur absence de conscience est permanente et continue — ils ne perçoivent JAMAIS la réalité de ce qu'ils font.

§JUSTIFICATION§

**les corrupteurs** — Le sens retenu est « Corruption/Désordre ». Le mot « corrupteurs » est choisi car il rend le participe actif al-mufsidun — ceux qui font la corruption activement. L'alternative « les fauteurs de désordre » est écartée car c'est une périphrase. L'alternative « les dévastateurs » est écartée car c'est trop physique — la corruption dans le Coran est autant morale que matérielle.

**n'ont pas conscience** — Le sens retenu est « Perception/Conscience ». L'expression « n'ont pas conscience » est choisie car elle rend la yash'urun — l'absence de perception de leur propre état. L'alternative « ne s'en rendent pas compte » est possible mais plus longue. L'alternative « ne le savent pas » est écartée car ya'lamu (savoir) est un autre verbe utilisé au v13 — ici c'est yash'uru (percevoir), qui est plus subtil.

§CRITIQUE§

Les traductions courantes donnent sensiblement le même sens. La seule nuance est dans la yash'urun : Hamidullah traduit « ils n'en sont pas conscients », ce qui capture bien le sens de perception/conscience. Certaines traductions donnent « ils ne le savent pas », qui confond yash'uru (percevoir) et ya'lamu (savoir) — le Coran utilise les deux racines différentes aux v12 et v13, et cette distinction doit être préservée.`,
    segments: [
      { fr: "n'est-ce pas que", phon: "ala", arabic: "أَلَآ", position: 1, word_key: null, is_particle: true },
      { fr: "certes eux", phon: "innahum humu", arabic: "إِنَّهُمْ هُمُ", position: 2, word_key: null, is_particle: true },
      { fr: "les corrupteurs", pos: "nom", phon: "al-mufsidun", arabic: "ٱلْمُفْسِدُونَ", position: 4, word_key: "fsd", is_particle: false, sense_retenu: "corrompre" },
      { fr: "mais", phon: "walakinna", arabic: "وَلَـٰكِن", position: 5, word_key: null, is_particle: true },
      { fr: "ne...pas", phon: "la", arabic: "لَّا", position: 6, word_key: null, is_particle: true },
      { fr: "ont conscience", pos: "verbe", phon: "yash'urun", arabic: "يَشْعُرُونَ", position: 7, word_key: "sher", is_particle: false, sense_retenu: "percevoir" }
    ]
  },
  {
    verse_id: 20,
    translation_arab: "Et quand on leur dit : « Croyez comme les gens ont cru », ils disent : « Devons-nous croire comme les stupides ont cru ? » N'est-ce pas que ce sont eux les stupides ? Mais ils ne savent pas.",
    full_translation: "Et quand on leur dit : \"Croyez comme les gens ont cru\", ils disent : \"Croirons-nous comme ont cru les faibles d'esprit ?\" C'est eux, certes, qui sont les faibles d'esprit, mais ils ne le savent pas.",
    translation_explanation: `§DEMARCHE§

La structure **wa idha qila lahum** (et quand on leur dit) reprend exactement celle du verset 11. Le passif qila efface l'identité du locuteur pour centrer sur le message.

Le verbe **aminu** est à l'impératif forme IV 2MP (une forme causative qui dit « faites entrer la confiance ») — « croyez ». L'impératif est un ordre direct.

La particule **kama** (comme) introduit une comparaison — « comme les gens ont cru ».

Le verbe **amana** est à l'accompli forme IV 3MS — « il a cru ». L'accompli dit que la croyance des gens est un fait accompli.

Le mot **an-nas** est un nom collectif défini — « les gens », la majorité qui a accepté la guidance.

Le verbe **qalu** à l'accompli 3MP introduit la réponse méprisante des hypocrites.

Le verbe **anu'minu** est à l'inaccompli forme IV 1PL avec le hamza interrogatif a- — « devons-nous croire ? ». La question est rhétorique et méprisante — ils ne demandent pas une réponse, ils expriment leur refus.

La particule **kama** (comme) introduit à nouveau la comparaison, mais cette fois avec **as-sufahau** (les stupides) — les hypocrites remplacent « les gens » par « les stupides ».

Le mot **as-sufahau** est un nom pluriel défini — « les stupides ». La racine s-f-h signifie être léger, manquer de poids intellectuel. Le safih est celui qui n'a pas la gravité nécessaire pour comprendre. Les hypocrites traitent les croyants de sufahau.

L'interjection **ala innahum humu** reprend la structure du v12 — emphase triple (ala + inna + hum).

Le même mot **as-sufahau** est retourné contre les hypocrites — ce sont EUX les stupides.

Le verbe **ya'lamun** est à l'inaccompli 3MP précédé de la négation la — « ils ne savent pas ». La racine '-l-m signifie savoir avec certitude. Le v12 disait la yash'urun (ils ne perçoivent pas), le v13 dit la ya'lamun (ils ne savent pas) — gradation dans l'aveuglement : du non-percevoir au non-savoir.

§JUSTIFICATION§

**croyez** — Le sens retenu est « Foi/Adhésion ». Le mot « croyez » est choisi car il rend l'impératif aminu — l'ordre de faire entrer la confiance. L'alternative « ayez la foi » est écartée car c'est du registre religieux chrétien. L'alternative « faites confiance » est écartée car le contexte est l'adhésion complète, pas la confiance ponctuelle.

**les gens** — Le sens retenu est « Humanité/Peuple ». Le mot « les gens » est choisi car il rend an-nas — le groupe humain de référence. L'alternative « le peuple » est écartée car c'est trop politique. L'alternative « les gens ordinaires » est écartée car elle ajoute une nuance absente du texte.

**les stupides** — Le sens retenu est « Légèreté/Stupidité ». Le mot « stupides » est choisi car il capture la légèreté intellectuelle (racine s-f-h = être léger). L'alternative « les insensés » est écartée car c'est du registre littéraire. L'alternative « les idiots » est écartée car c'est du registre familier.

**ne savent pas** — Le sens retenu est « Savoir/Connaissance ». L'expression « ne savent pas » est choisie car elle rend la ya'lamun — l'absence de connaissance de leur propre état. L'alternative « ignorent » est possible mais plus connoté. On distingue de la yash'urun du v12 : « ne perçoivent pas » (v12) vs « ne savent pas » (v13).

§CRITIQUE§

Hamidullah traduit sufahau par « faibles d'esprit ». La traduction étymologique donne « stupides ». La racine s-f-h signifie « être léger, manquer de poids » — le safih est celui qui manque de gravité intellectuelle. « Faibles d'esprit » en français moderne évoque un handicap mental, ce qui n'est pas le sens du texte. « Stupides » est plus proche de la légèreté intellectuelle volontaire. La nuance est importante : les hypocrites ne traitent pas les croyants de handicapés mais de gens qui font un choix idiot — « stupides » capture mieux ce mépris volontaire.`,
    segments: [
      { fr: "et quand", phon: "wa idha", arabic: "وَإِذَا", position: 1, word_key: null, is_particle: true },
      { fr: "on dit", pos: "verbe", phon: "qila", arabic: "قِيلَ", position: 2, word_key: "qwl", is_particle: false, sense_retenu: "dire" },
      { fr: "à eux", phon: "lahum", arabic: "لَهُمْ", position: 3, word_key: null, is_particle: true },
      { fr: "croyez", pos: "verbe", phon: "aminu", arabic: "ءَامِنُوا۟", position: 4, word_key: "amn", is_particle: false, sense_retenu: "croire" },
      { fr: "comme", phon: "kama", arabic: "كَمَآ", position: 5, word_key: null, is_particle: true },
      { fr: "ont cru", pos: "verbe", phon: "amana", arabic: "ءَامَنَ", position: 6, word_key: "amn", is_particle: false, sense_retenu: "croire" },
      { fr: "les gens", pos: "nom", phon: "an-nas", arabic: "ٱلنَّاسُ", position: 7, word_key: "nws", is_particle: false, sense_retenu: "gens" },
      { fr: "ils disent", pos: "verbe", phon: "qalu", arabic: "قَالُوٓا۟", position: 8, word_key: "qwl", is_particle: false, sense_retenu: "dire" },
      { fr: "devons-nous croire", pos: "verbe", phon: "anu'minu", arabic: "أَنُؤْمِنُ", position: 9, word_key: "amn", is_particle: false, sense_retenu: "croire" },
      { fr: "comme", phon: "kama", arabic: "كَمَآ", position: 10, word_key: null, is_particle: true },
      { fr: "ont cru", pos: "verbe", phon: "amana", arabic: "ءَامَنَ", position: 11, word_key: "amn", is_particle: false, sense_retenu: "croire" },
      { fr: "les stupides", pos: "nom", phon: "as-sufahau", arabic: "ٱلسُّفَهَآءُ", position: 12, word_key: "sfh", is_particle: false, sense_retenu: "stupide" },
      { fr: "n'est-ce pas que", phon: "ala", arabic: "أَلَآ", position: 13, word_key: null, is_particle: true },
      { fr: "certes eux", phon: "innahum humu", arabic: "إِنَّهُمْ هُمُ", position: 14, word_key: null, is_particle: true },
      { fr: "les stupides", pos: "nom", phon: "as-sufahau", arabic: "ٱلسُّفَهَآءُ", position: 16, word_key: "sfh", is_particle: false, sense_retenu: "stupide" },
      { fr: "mais", phon: "walakinna", arabic: "وَلَـٰكِن", position: 17, word_key: null, is_particle: true },
      { fr: "ne...pas", phon: "la", arabic: "لَّا", position: 18, word_key: null, is_particle: true },
      { fr: "savent", pos: "verbe", phon: "ya'lamun", arabic: "يَعْلَمُونَ", position: 19, word_key: "elm", is_particle: false, sense_retenu: "savoir" }
    ]
  }
];

async function main() {
  const allKeys = [...new Set(vwaData.map(v => v.word_key))];
  const waMap = await getWaIds(allKeys);
  console.log('WA IDs:', JSON.stringify(waMap));

  // Insert VWA entries
  let okVwa = 0, failVwa = 0;
  for (const vwa of vwaData) {
    const { error } = await db.from('verse_word_analyses').insert({
      verse_id: vwa.verse_id,
      word_key: vwa.word_key,
      position: vwa.position,
      analysis_axes: vwa.analysis_axes,
      sense_chosen: vwa.analysis_axes.sense_chosen,
    });
    if (error) {
      console.error(`FAIL VWA ${vwa.word_key} v${vwa.verse_id} pos${vwa.position}:`, error.message);
      failVwa++;
    } else {
      console.log(`OK VWA ${vwa.word_key} v${vwa.verse_id}`);
      okVwa++;
    }
  }

  // Update verse_analyses
  let okV = 0, failV = 0;
  for (const vu of verseUpdates) {
    const { error } = await db.from('verse_analyses').update({
      translation_arab: vu.translation_arab,
      full_translation: vu.full_translation,
      translation_explanation: vu.translation_explanation,
      segments: vu.segments,
    }).eq('verse_id', vu.verse_id);
    if (error) {
      console.error(`FAIL verse ${vu.verse_id}:`, error.message);
      failV++;
    } else {
      console.log(`OK verse ${vu.verse_id}`);
      okV++;
    }
  }

  console.log(`\nDone: VWA ${okVwa}/${vwaData.length}, Verses ${okV}/${verseUpdates.length}`);
}

main().catch(console.error);
