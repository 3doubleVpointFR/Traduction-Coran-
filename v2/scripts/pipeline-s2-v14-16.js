const { createClient } = require('@supabase/supabase-js');
const db = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// S2:14 — وَإِذَا لَقُوا۟ ٱلَّذِينَ ءَامَنُوا۟ قَالُوٓا۟ ءَامَنَّا وَإِذَا خَلَوْا۟ إِلَىٰ شَيَٰطِينِهِمْ قَالُوٓا۟ إِنَّا مَعَكُمْ إِنَّمَا نَحْنُ مُسْتَهْزِءُونَ
// S2:15 — ٱللَّهُ يَسْتَهْزِئُ بِهِمْ وَيَمُدُّهُمْ فِى طُغْيَٰنِهِمْ يَعْمَهُونَ
// S2:16 — أُو۟لَٰٓئِكَ ٱلَّذِينَ ٱشْتَرَوُا۟ ٱلضَّلَٰلَةَ بِٱلْهُدَىٰ فَمَا رَبِحَت تِّجَٰرَتُهُمْ وَمَا كَانُوا۟ مُهْتَدِينَ

async function getWaIds(keys) {
  const { data } = await db.from('word_analyses').select('id, word_key').in('word_key', keys);
  const map = {};
  for (const d of data) map[d.word_key] = d.id;
  return map;
}

// VWA data for V14-16
const vwaData = [
  // === V14 (verse_id=21) ===
  { verse_id: 21, word_key: 'lqy', position: 2, analysis_axes: {
    sense_chosen: "ils rencontrent",
    concept_chosen: "Rencontre/Face à face",
    concepts: {
      "Rencontre/Face à face": {
        senses: ["rencontrer", "trouver", "recevoir"],
        status: "retenu",
        proof_ctx: "Le sens retenu est « Rencontre/Face à face ». Le verbe laqu est à l'accompli 3ème personne masculin pluriel — « ils ont rencontré ». La racine l-q-y dans son sens premier signifie rencontrer, se trouver face à face avec quelqu'un. Le contexte est celui d'une rencontre physique entre les hypocrites et les croyants. La forme simple (fa'ala) dit que c'est un acte direct sans causalité ajoutée. L'accompli dans la structure « wa idha » (quand) donne une valeur itérative — chaque fois qu'ils rencontrent. Distinction avec « Jeter/Lancer » : le verbe est intransitif ici, il ne s'agit pas de lancer quelque chose mais de se trouver face à des gens.",
        axe1_verset: "Le verbe laqu ouvre la première scène du verset — la rencontre publique entre les hypocrites et les croyants. Le champ lexical est celui du face à face : deux groupes se croisent et échangent. La rencontre est le déclencheur de la première parole hypocrite (amanna = nous avons adhéré). L'accompli dans « idha laqu » dit que cette rencontre est un schéma répété — chaque fois que la situation se produit, le même comportement suit. Le verbe est suivi de alladhina amanu (ceux qui ont adhéré), ce qui identifie clairement l'autre partie. La rencontre est le moment où l'hypocrisie se met en scène — devant les croyants, les hypocrites jouent un rôle.",
        axe2_voisins: "Le verset 14 oppose deux scènes : la rencontre avec les croyants (laqu) et le retrait en privé avec leurs meneurs (khalaw). La rencontre publique est le lieu de la dissimulation, le retrait privé est le lieu de la vérité. Le verset 13 montrait le mépris des hypocrites (ils traitent les croyants de stupides) — le verset 14 montre comment ce mépris se cache derrière une façade de foi. La rencontre est le test de la sincérité : les hypocrites échouent à chaque fois.",
        axe3_sourate: "La sourate 2 décrit les hypocrites dans les versets 8 à 20. La rencontre avec les croyants est le moment clé où la duplicité se manifeste. La sourate montre que l'hypocrite a deux visages — un pour le public et un pour le privé. Le verbe laqu est le déclencheur de la première scène publique de ce passage. La sourate établit que la rencontre avec les croyants est l'occasion pour les hypocrites de simuler la foi qu'ils ne possèdent pas.",
        axe4_coherence: "Le Coran utilise la racine l-q-y pour la rencontre dans de nombreux contextes — la rencontre avec Dieu (liqa' Allah), la rencontre avec l'ennemi (laqitum). La rencontre est toujours un moment de vérité dans le Coran — ce qui se passe lors de la rencontre révèle la nature profonde de la personne. Le verset 2:14 est cohérent avec cet usage : la rencontre avec les croyants déclenche la mise en scène de l'hypocrisie.",
        axe5_frequence: "La rencontre avec les croyants est un test de la mission humaine — celui qui rencontre la communauté des croyants et prétend en faire partie sans y adhérer vraiment trahit la mission de justice. La rencontre exige la cohérence entre les paroles et les actes. Les hypocrites utilisent la rencontre comme un théâtre — ils jouent un rôle au lieu de vivre leur foi. La mission humaine demande l'authenticité dans chaque rencontre."
      },
      "Jeter/Lancer": {
        senses: ["jeter", "lancer"],
        status: "nul",
        proof_ctx: "Le verbe laqu est intransitif ici (pas de complément d'objet jeté). Le contexte est une rencontre entre personnes. Le sens de jeter/lancer est hors sujet."
      }
    }
  }},
  { verse_id: 21, word_key: 'amn', position: 4, analysis_axes: {
    sense_chosen: "ceux qui ont adhéré",
    concept_chosen: "Foi/Adhésion",
    concepts: {
      "Foi/Adhésion": {
        senses: ["croire", "avoir la foi", "adhérer"],
        status: "retenu",
        proof_ctx: "Le sens retenu est « Foi/Adhésion ». Le verbe amanu est à l'accompli forme IV 3ème personne masculin pluriel — « ils ont adhéré ». La forme IV (af'ala) ajoute la causalité : faire entrer la confiance en soi. L'accompli dit que leur adhésion est un fait accompli et stable. Le mot est dans la formule alladhina amanu (ceux qui ont adhéré), le terme coranique standard pour désigner les croyants sincères. Distinction avec « Sécurité/Confiance » : le contexte est la foi, pas la sécurité physique.",
        axe1_verset: "Le mot alladhina amanu identifie le premier interlocuteur des hypocrites — les croyants sincères. Le champ lexical est celui de la foi stable et accomplie — l'accompli dit que leur adhésion est un fait. La formule alladhina amanu est le marqueur coranique des croyants — elle les distingue des hypocrites dont la foi est simulée. Le verset oppose cette foi sincère (amanu, accompli stable) à la foi simulée (amanna, première personne — « nous avons adhéré », mensonge). La même racine amn est utilisée pour les vrais croyants (amanu) et pour la déclaration mensongère des hypocrites (amanna) — la forme est identique mais la réalité est opposée.",
        axe2_voisins: "Le verset 13 utilisait aminu (impératif : croyez) et anu'minu (interrogatif méprisant : devons-nous croire). Le verset 14 utilise amanu (accompli : ceux qui ont cru) et amanna (accompli 1PL : nous avons cru). La racine amn traverse les versets 13-14 sous quatre formes différentes, révélant les attitudes contrastées face à la foi. Les croyants sincères (amanu) sont stables, les hypocrites changent de discours selon le public.",
        axe3_sourate: "La formule alladhina amanu est omniprésente dans la sourate 2 — elle structure la distinction entre croyants et non-croyants. Les versets 3-5 décrivent les croyants sincères, les versets 8-20 les hypocrites. La sourate utilise amanu comme critère de vérité : celui qui a vraiment adhéré se comporte différemment de celui qui prétend avoir adhéré. La foi sincère est le fondement de la mission du khalifa.",
        axe4_coherence: "Le Coran utilise alladhina amanu dans des centaines de versets pour désigner les croyants sincères. La formule est un marqueur d'identité dans tout le corpus coranique. La forme IV accompli 3MP est systématiquement utilisée pour la foi stable et accomplie. La cohérence est totale avec l'usage coranique universel.",
        axe5_frequence: "La foi sincère (iman) est le fondement de la mission humaine — sans adhésion vraie aux principes de justice, la mission est impossible. Le verset montre que la foi des croyants (amanu) est stable et publique, tandis que la foi des hypocrites (amanna) est un discours changeant selon l'audience. La mission de justice exige la constance dans la foi."
      },
      "Sécurité/Confiance": {
        senses: ["être en sécurité"],
        status: "nul",
        proof_ctx: "Le contexte est la foi/adhésion (alladhina amanu = ceux qui ont adhéré). Pas de contexte de sécurité physique. Hors sujet."
      },
      "Garantie/Protection": {
        senses: ["protéger"],
        status: "nul",
        proof_ctx: "Le contexte est la foi, pas la protection. Hors sujet."
      }
    }
  }},
  { verse_id: 21, word_key: 'qwl', position: 5, analysis_axes: {
    sense_chosen: "ils disent",
    concept_chosen: "Parole/Énonciation",
    concepts: {
      "Parole/Énonciation": {
        senses: ["dire", "parler", "parole"],
        status: "retenu",
        proof_ctx: "Le sens retenu est « Parole/Énonciation ». Le verbe qalu est à l'accompli 3ème personne masculin pluriel — « ils ont dit ». L'accompli dans le contexte « wa idha laqu... qalu » a une valeur itérative — chaque fois qu'ils rencontrent les croyants, ils disent. La parole est l'outil de la dissimulation — les hypocrites déclarent ce qu'ils ne pensent pas. Distinction avec « Pensée/Avis » : le verset porte sur la parole prononcée, pas sur la pensée intérieure.",
        axe1_verset: "Le verbe qalu introduit la première déclaration hypocrite : amanna (nous avons adhéré). Le champ lexical est celui de la parole mensongère — ils disent avoir adhéré alors qu'ils n'y croient pas. L'accompli 3MP dit que c'est un fait attesté et répété. La parole est le véhicule de l'hypocrisie — ce qu'ils DISENT ne correspond pas à ce qu'ils SONT. Le même verbe qalu revient une deuxième fois dans le verset pour leur parole en privé — le parallèle montre le double discours. La première parole (aux croyants) et la deuxième (aux meneurs) se contredisent.",
        axe2_voisins: "Les versets 11 et 13 utilisaient la structure qila/qalu (on dit/ils disent). Le verset 14 utilise deux fois qalu dans deux contextes opposés : en public et en privé. La progression est nette : du v11 au v14, la parole des hypocrites passe de la prétention (nous réformons) à la contradiction frontale (nous avons adhéré / nous sommes avec vous et nous nous moquons). Le double qalu du v14 est le sommet de la description de la duplicité verbale.",
        axe3_sourate: "La sourate 2 utilise le verbe qala comme outil structurel pour exposer les dialogues. Dans les versets 8-20, la parole est systématiquement l'outil qui révèle l'hypocrisie. Le double qalu du v14 est le moment le plus explicite de cette révélation — les hypocrites se trahissent par leurs propres mots contradictoires. La sourate montre que la parole vraie est celle qui reste la même en public et en privé.",
        axe4_coherence: "Le Coran rapporte les dialogues des hypocrites dans de nombreuses sourates — sourate 63 (les hypocrites), sourate 9:56-57 (ils jurent qu'ils sont des vôtres). Le double discours est systématiquement exposé par le Coran. La structure « ils disent X en public, ils disent Y en privé » est un procédé coranique récurrent pour dénoncer l'hypocrisie. La cohérence est parfaite.",
        axe5_frequence: "La parole est un outil à double tranchant dans la mission humaine — elle peut servir la vérité ou la masquer. Les hypocrites utilisent la parole pour simuler la foi devant les croyants. La mission de justice exige la parole vraie — celle qui ne change pas selon l'audience. Le verset montre que la parole mensongère est la pire forme de corruption de la communication."
      },
      "Pensée/Avis": {
        senses: ["opinion", "avis"],
        status: "nul",
        proof_ctx: "Le verbe qalu est un verbe de parole à l'accompli actif 3MP. Le contexte est le discours prononcé, pas la pensée intérieure. Hors sujet."
      }
    }
  }},
  { verse_id: 21, word_key: 'amn', position: 6, analysis_axes: {
    sense_chosen: "nous avons adhéré",
    concept_chosen: "Foi/Adhésion",
    concepts: {
      "Foi/Adhésion": {
        senses: ["croire", "avoir la foi", "adhérer"],
        status: "retenu",
        proof_ctx: "Le sens retenu est « Foi/Adhésion ». Le verbe amanna est à l'accompli forme IV 1ère personne pluriel — « nous avons adhéré ». La forme IV confirme l'adhésion volontaire. L'accompli 1PL est une déclaration personnelle — ils affirment avoir adhéré. Mais le contexte montre que cette déclaration est un mensonge : en privé, ils disent le contraire. Distinction avec « Sécurité » : contexte de foi, pas de sécurité.",
        axe1_verset: "Le verbe amanna est la déclaration mensongère des hypocrites aux croyants — « nous avons adhéré ». Le champ lexical est celui de la foi simulée. L'accompli 1PL dit qu'ils présentent leur adhésion comme un fait accompli, mais c'est un mensonge. Le même verbe amana est utilisé pour les vrais croyants (amanu, 3MP) et pour les hypocrites (amanna, 1PL) — la forme grammaticale est différente mais la racine est la même, ce qui souligne le contraste entre foi vraie et foi simulée. La déclaration amanna est immédiatement contredite par la scène privée qui suit.",
        axe2_voisins: "Le verset 8 ouvrait le passage des hypocrites par « parmi les gens il y a ceux qui disent : nous avons adhéré en Dieu et au dernier jour, alors qu'ils ne sont pas des adhérents ». Le verset 14 reprend cette même déclaration mensongère (amanna) mais dans un contexte de double jeu explicite. Le verset 13 montrait le refus méprisant de croire, le verset 14 montre la simulation de la foi. La racine amn est le fil rouge de toute la section hypocrites.",
        axe3_sourate: "La sourate 2 ouvre par la description des croyants sincères (v3-5) qui sont définis par leur foi réelle. Les hypocrites du v14 utilisent le même vocabulaire (amanna) mais sans la réalité qui va avec. La sourate établit que la foi vraie se manifeste dans les actes et la constance, tandis que la foi simulée change de discours selon le contexte. La déclaration amanna des hypocrites est la contrefaçon de la foi décrite aux v3-5.",
        axe4_coherence: "Le Coran utilise amanna bi (nous avons cru en) comme formule de déclaration de foi — mais quand elle vient des hypocrites, elle est systématiquement démasquée. La sourate 63:1 montre le même schéma : les hypocrites déclarent leur foi et le Coran révèle leur mensonge. La cohérence est directe avec l'usage coranique de la déclaration de foi mensongère.",
        axe5_frequence: "La foi simulée est la pire forme de trahison de la mission humaine. Prétendre adhérer aux principes de justice sans y croire c'est saboter la mission de l'intérieur. Le verset montre que la déclaration de foi ne suffit pas — la foi doit être constante et cohérente, en public et en privé. La mission de civilisation est fondée sur la confiance mutuelle, et la foi simulée détruit cette confiance."
      },
      "Sécurité/Confiance": {
        senses: ["être en sécurité"],
        status: "nul",
        proof_ctx: "Contexte de déclaration de foi mensongère, pas de sécurité. Hors sujet."
      },
      "Garantie/Protection": {
        senses: ["protéger"],
        status: "nul",
        proof_ctx: "Hors sujet."
      }
    }
  }},
  { verse_id: 21, word_key: 'xlw', position: 8, analysis_axes: {
    sense_chosen: "se retrouvent seuls",
    concept_chosen: "Vide/Solitude",
    concepts: {
      "Vide/Solitude": {
        senses: ["être seul", "se retirer", "être vide"],
        status: "retenu",
        proof_ctx: "Le sens retenu est « Vide/Solitude ». Le verbe khalaw est à l'accompli 3ème personne masculin pluriel — « ils se sont retirés / se retrouvent seuls ». La racine kh-l-w signifie être vide, être libre de, se retrouver seul avec quelqu'un. Le verbe est suivi de la préposition ila (vers) puis de shayatinihim (leurs diables/meneurs rebelles) — ils se retirent VERS leurs meneurs, ils se retrouvent en privé avec eux. L'accompli dans « wa idha khalaw » a une valeur itérative — chaque fois qu'ils se retrouvent seuls. Le sens de retrait/solitude est confirmé par l'opposition avec laqu (rencontrer en public).",
        axe1_verset: "Le verbe khalaw ouvre la deuxième scène du verset — la scène privée qui contraste avec la scène publique. Le champ lexical est celui de l'isolement volontaire : les hypocrites quittent les croyants et se retirent vers leurs meneurs rebelles. La racine kh-l-w dit que l'espace est vidé des croyants — il ne reste que les hypocrites et leurs alliés. L'opposition structurelle entre laqu (rencontrer les croyants, scène publique) et khalaw (se retirer vers leurs meneurs, scène privée) est le cœur du verset. Le retrait est intentionnel : ils se retirent VERS (ila) quelqu'un, pas juste loin de quelqu'un. La solitude est un espace de vérité — c'est en privé que les hypocrites disent ce qu'ils pensent vraiment.",
        axe2_voisins: "Le verset 14 est construit sur l'opposition entre deux scènes : rencontre publique (laqu) et retrait privé (khalaw). Les versets précédents (11-13) montraient le rejet de la guidance en public — le verset 14 montre que ce rejet est encore plus profond en privé. Le verset 15 va montrer la réponse divine à ce double jeu. La transition du public au privé est le moment clé qui révèle la nature profonde des hypocrites. Le retrait vers les meneurs rebelles montre la hiérarchie de l'hypocrisie.",
        axe3_sourate: "La sourate 2 décrit les hypocrites comme des gens à deux visages — un visage public et un visage privé. Le verbe khalaw est le marqueur de la scène privée dans ce passage. La sourate montre que la vérité d'une personne se révèle dans sa solitude et dans ses fréquentations privées. Le retrait vers les « diables » (shayatin) est le révélateur de l'allégeance réelle des hypocrites — en privé, ils sont avec leurs meneurs rebelles, pas avec les croyants.",
        axe4_coherence: "Le Coran utilise la racine kh-l-w dans plusieurs contextes de retrait et de solitude — khalaw bi (être seul avec), la takhlu (ne soyez pas seul avec). Le verbe est systématiquement utilisé pour des moments d'intimité ou de confidence. La construction khalaw ila (se retirer vers) est spécifique — elle indique un mouvement intentionnel vers un interlocuteur privé. La cohérence avec l'usage coranique est directe.",
        axe5_frequence: "Le retrait vers la vérité privée est un test de la mission humaine — celui dont le comportement privé contredit le comportement public trahit la mission de justice. La solitude révèle la nature profonde de la personne. La mission de civilisation exige la cohérence entre le public et le privé — les hypocrites échouent précisément à ce test. Le verset montre que le lieu où l'on se retire et les gens qu'on fréquente en privé définissent la vraie allégeance."
      },
      "Passé/Antériorité": {
        senses: ["passer", "le passé"],
        status: "nul",
        proof_ctx: "Le verbe khalaw ici n'a pas le sens de passer (au sens temporel). Le contexte est celui du retrait physique vers un lieu privé. La préposition ila (vers) confirme le mouvement spatial, pas temporel. Hors sujet."
      }
    }
  }},
  { verse_id: 21, word_key: 'shtn', position: 10, analysis_axes: {
    sense_chosen: "leurs diables",
    concept_chosen: "Égarement/Rébellion",
    concepts: {
      "Égarement/Rébellion": {
        senses: ["diable", "être rebelle"],
        status: "retenu",
        proof_ctx: "Le sens retenu est « Égarement/Rébellion ». Le mot shayatinihim est un nom pluriel avec pronom possessif 3MP — « leurs diables ». La racine sh-t-n signifie être éloigné de la vérité, être rebelle. Le shaytan est celui qui s'éloigne de la guidance et qui entraîne les autres dans la rébellion. Le pluriel (shayatin) et le possessif (him = leurs) indiquent que les hypocrites ont des meneurs rebelles spécifiques — ce ne sont pas des démons surnaturels ici mais des chefs humains rebelles. Le contexte (khalaw ila = se retirer vers) confirme que ce sont des personnes physiques avec qui on peut se retrouver en privé.",
        axe1_verset: "Le mot shayatinihim identifie les interlocuteurs privés des hypocrites — leurs meneurs rebelles. Le champ lexical est celui de la rébellion et de l'égarement organisé : les hypocrites ne sont pas seuls dans leur duplicité, ils ont des chefs qui les guident dans la rébellion. Le pluriel dit qu'il y a plusieurs meneurs. Le possessif « leurs » (him) crée un lien d'appartenance — ces diables LEUR appartiennent, ce sont les diables de ce groupe spécifique. Le mot shayatin dans ce verset désigne des humains rebelles, pas des êtres surnaturels — on ne « se retire vers » (khalaw ila) des êtres invisibles. La rébellion est structurée et hiérarchisée.",
        axe2_voisins: "Le verset 14 oppose les croyants (alladhina amanu) aux « diables » (shayatinihim) — les deux groupes de référence des hypocrites. En public, les hypocrites prétendent être avec les croyants. En privé, ils sont avec leurs meneurs rebelles. Le verset 15 va montrer que Dieu retourne contre eux leur propre moquerie. La mention des shayatin révèle que l'hypocrisie n'est pas spontanée — elle est organisée par des meneurs qui encouragent la rébellion.",
        axe3_sourate: "La sourate 2 mentionne le shaytan/shayatin dans plusieurs passages — v36 (le shaytan les fit trébucher), v168 (ne suivez pas les pas du shaytan). Le shaytan dans la sourate 2 est l'agent de l'égarement — celui qui détourne de la guidance. Les shayatin du v14 sont les meneurs humains qui jouent ce rôle d'agents d'égarement auprès des hypocrites. La sourate montre que la rébellion contre la guidance a des agents actifs qui la propagent.",
        axe4_coherence: "Le Coran utilise shayatin (pluriel) pour désigner à la fois des êtres surnaturels rebelles et des meneurs humains rebelles — sourate 2:14 (leurs diables humains), sourate 6:112 (les diables des humains et des djinns). La racine sh-t-n désigne toujours l'éloignement de la vérité et la rébellion. La cohérence est parfaite avec l'usage coranique du terme.",
        axe5_frequence: "La rébellion organisée contre la guidance est un obstacle majeur à la mission humaine de justice. Les meneurs rebelles (shayatin) sont ceux qui structurent l'opposition à la mission du khalifa. Le verset montre que l'hypocrisie n'est pas un défaut individuel mais un système organisé avec des meneurs et des suiveurs. La mission de justice doit identifier ces meneurs pour protéger la communauté de leur influence."
      }
    }
  }},
  { verse_id: 21, word_key: 'qwl', position: 11, analysis_axes: {
    sense_chosen: "ils disent",
    concept_chosen: "Parole/Énonciation",
    concepts: {
      "Parole/Énonciation": {
        senses: ["dire", "parler", "parole"],
        status: "retenu",
        proof_ctx: "Le sens retenu est « Parole/Énonciation ». Le verbe qalu est à l'accompli 3ème personne masculin pluriel — « ils ont dit ». C'est le deuxième qalu du verset — la parole privée qui contredit la parole publique. L'accompli dans « wa idha khalaw... qalu » a la même valeur itérative que le premier qalu — chaque fois qu'ils se retirent en privé, ils disent. Distinction avec « Pensée/Avis » : ils prononcent ces mots à voix haute devant leurs meneurs.",
        axe1_verset: "Le verbe qalu introduit la deuxième déclaration des hypocrites — cette fois en privé. Le champ lexical est celui de la parole de vérité cachée. Le premier qalu (position 5) était la parole mensongère en public, le deuxième qalu (position 11) est la parole vraie en privé. La structure symétrique (laqu... qalu / khalaw... qalu) montre le double discours de façon explicite. En privé, ils disent le contraire de ce qu'ils disent en public. La parole privée révèle leur véritable position : « nous sommes avec vous, nous ne faisions que nous moquer ».",
        axe2_voisins: "Le double qalu du v14 est le sommet de la description de l'hypocrisie dans les versets 8-20. Les versets 11 et 13 montraient des réponses uniques (une parole publique). Le verset 14 montre deux paroles contradictoires. Le verset 15 va répondre à cette moquerie privée par la réponse divine. Le deuxième qalu est plus grave que le premier car il révèle l'intention réelle — la moquerie.",
        axe3_sourate: "La sourate 2 utilise les dialogues pour révéler les vérités cachées. Le double qalu du v14 est l'exemple le plus frappant — la même personne dit deux choses opposées selon le contexte. La sourate montre que la parole est un révélateur de la nature profonde : la parole vraie est celle qui reste constante, la parole fausse change selon l'audience.",
        axe4_coherence: "Le Coran rapporte systématiquement les paroles privées des hypocrites pour les opposer à leurs paroles publiques — sourate 3:119 (quand ils vous rencontrent ils disent nous croyons, et quand ils sont seuls ils mordent leurs doigts de rage). Le schéma du double discours est un procédé coranique constant. La cohérence est parfaite.",
        axe5_frequence: "La parole privée qui contredit la parole publique est la marque de l'hypocrisie — l'ennemi le plus dangereux de la mission humaine de justice. La mission exige l'alignement entre le discours public et le discours privé. Le verset montre que la parole des hypocrites est un outil de sabotage : ils minent la confiance de la communauté en prétendant en faire partie."
      },
      "Pensée/Avis": {
        senses: ["opinion", "avis"],
        status: "nul",
        proof_ctx: "Verbe de parole prononcée devant leurs meneurs, pas de pensée intérieure. Hors sujet."
      }
    }
  }},
  { verse_id: 21, word_key: 'hza', position: 16, analysis_axes: {
    sense_chosen: "moqueurs",
    concept_chosen: "Moquerie/Dérision",
    concepts: {
      "Moquerie/Dérision": {
        senses: ["se moquer", "railler", "ridiculiser"],
        status: "retenu",
        proof_ctx: "Le sens retenu est « Moquerie/Dérision ». Le mot mustahzi'un est un participe actif forme X masculin pluriel — « des moqueurs ». La forme X (istaf'ala) ajoute la demande/recherche : ils CHERCHENT à se moquer, ils pratiquent la moquerie de façon active et délibérée. Le participe actif dit que la moquerie est leur identité et leur activité permanente. La phrase complète est « innama nahnu mustahzi'un » (nous ne faisons que nous moquer) — la particule innama restreint à la moquerie seule.",
        axe1_verset: "Le mot mustahzi'un est le mot final du verset et le point culminant de la révélation de l'hypocrisie. Le champ lexical est celui de la dérision — les hypocrites ne se contentent pas de mentir, ils se moquent activement des croyants. La forme X (istaf'ala) indique que la moquerie est recherchée et pratiquée délibérément. Le participe actif pluriel dit que c'est leur identité de groupe — ils sont collectivement des moqueurs. La phrase innama nahnu mustahzi'un (nous ne faisons que nous moquer) révèle leur véritable intention : toute leur interaction avec les croyants n'est qu'une comédie. La moquerie est l'arme la plus méprisante — elle réduit l'autre à un objet de dérision.",
        axe2_voisins: "Le verset 15 reprend le même verbe (yastahzi'u, forme X inaccompli) mais avec Dieu comme sujet — Dieu se moque d'eux en retour. La moquerie des hypocrites (v14) est retournée contre eux par Dieu (v15). Le verset 13 montrait le mépris intellectuel (traiter les croyants de stupides), le verset 14 montre le mépris en action (se moquer activement). La moquerie est l'étape finale de l'hypocrisie — après le mensonge, la dérision.",
        axe3_sourate: "La moquerie des hypocrites est un thème des versets 8-20 de la sourate 2. La sourate montre une progression dans la gravité : mensonge (v8), corruption (v11-12), mépris (v13), moquerie (v14). La moquerie est le sommet de la hiérarchie de l'hypocrisie — elle révèle que les hypocrites ne prennent rien au sérieux dans la guidance. La sourate va répondre à cette moquerie par le châtiment (v15-16).",
        axe4_coherence: "Le Coran condamne la moquerie des signes divins et des croyants dans de nombreux versets — sourate 9:65 (si tu les questionnes, ils disent : nous ne faisions que jouer et nous moquer), sourate 6:10 (on s'est moqué des messagers avant toi). La racine h-z-' est systématiquement associée à la moquerie de la guidance et de ses porteurs. La cohérence est parfaite avec l'usage coranique.",
        axe5_frequence: "La moquerie de la guidance et de ceux qui la portent est une forme grave de corruption de la mission humaine. Se moquer c'est refuser de prendre au sérieux la mission de justice et de civilisation. Les hypocrites traitent la guidance comme un jeu — leur moquerie est une déclaration de guerre contre la mission du khalifa. La mission exige le sérieux et le respect de la vérité — la moquerie est l'exact opposé de cette attitude."
      }
    }
  }},

  // === V15 (verse_id=22) ===
  { verse_id: 22, word_key: 'alh', position: 1, analysis_axes: {
    sense_chosen: "Dieu",
    concept_chosen: "Divinité",
    concepts: {
      "Divinité": {
        senses: ["Dieu"],
        status: "retenu",
        proof_ctx: "Le sens retenu est « Divinité ». Le mot Allah est le nom propre de Dieu — le sujet du verset qui répond à la moquerie des hypocrites. Le nom est le sujet de yastahzi'u (se moque) — c'est Dieu qui retourne la moquerie contre les hypocrites. Distinction avec « Adoration/Dévotion » : le contexte est l'identité de Dieu comme agent, pas l'acte d'adoration.",
        axe1_verset: "Le mot Allah ouvre le verset comme sujet principal — c'est Dieu qui agit en réponse à la moquerie des hypocrites. Le champ lexical est celui de la souveraineté divine — Dieu n'est pas impuissant face à la moquerie, il y répond. Le nom Allah est suivi immédiatement de yastahzi'u (se moque d'eux) — la juxtaposition est frappante : Dieu se moque des moqueurs. Le verset fait de Dieu l'acteur principal après une section où les hypocrites semblaient maîtres de la situation. Le passage de la parole des hypocrites (v14) à l'action de Dieu (v15) marque un tournant dans le passage.",
        axe2_voisins: "Le verset 14 montrait les hypocrites qui se moquent des croyants en privé. Le verset 15 retourne cette moquerie — Dieu se moque d'eux. Le verset 16 montrera le résultat concret : les hypocrites ont troqué la guidance contre l'égarement. La transition du v14 (les hypocrites agissent) au v15 (Dieu répond) au v16 (le verdict) est une progression logique. Dieu est mentionné comme celui qui connaît le discours privé des hypocrites — rien ne lui échappe.",
        axe3_sourate: "Le nom Allah est central dans la sourate 2 — Dieu est le guide (v2), le connaisseur des cœurs (v33), le maître du jour du jugement. Dans les versets 8-20, Dieu est présenté comme celui qui connaît la vérité derrière les masques des hypocrites. Le verset 15 montre Dieu qui passe de l'observation à l'action — il ne se contente pas de savoir, il agit. La sourate établit que la souveraineté divine s'exerce même sur ceux qui croient pouvoir tromper Dieu.",
        axe4_coherence: "Le nom Allah est le nom le plus fréquent du Coran. Dans les contextes de réponse à l'hypocrisie, Dieu est toujours présenté comme celui qui connaît les cœurs et qui rétribue en conséquence. La sourate 9:79 montre un schéma similaire : les hypocrites se moquent, Dieu se moque d'eux. La cohérence est universelle dans le corpus coranique.",
        axe5_frequence: "Dieu est le garant ultime de la mission humaine de justice. La mission du khalifa est confiée par Dieu et supervisée par Dieu. Quand les hypocrites se moquent de cette mission, Dieu intervient — non pas en les empêchant mais en retournant contre eux leur propre attitude. La souveraineté divine est le fondement de la mission — sans cette garantie, la mission de justice serait à la merci des moqueurs."
      },
      "Adoration/Dévotion": {
        senses: ["adorer"],
        status: "nul",
        proof_ctx: "Le mot Allah est ici le sujet agissant, pas l'objet d'adoration. Le contexte est l'action de Dieu contre les hypocrites, pas l'acte d'adoration. Hors sujet."
      }
    }
  }},
  { verse_id: 22, word_key: 'hza', position: 2, analysis_axes: {
    sense_chosen: "se moque d'eux",
    concept_chosen: "Moquerie/Dérision",
    concepts: {
      "Moquerie/Dérision": {
        senses: ["se moquer", "railler", "ridiculiser"],
        status: "retenu",
        proof_ctx: "Le sens retenu est « Moquerie/Dérision ». Le verbe yastahzi'u est à l'inaccompli forme X 3ème personne masculin singulier — « il se moque ». La forme X (istaf'ala) est la même que celle de mustahzi'un au v14 — moquerie active et délibérée. L'inaccompli dit que la moquerie divine est continue. Le sujet est Allah — Dieu retourne la moquerie des hypocrites contre eux. Le pronom bihim (d'eux) complète le verbe — il se moque D'EUX, les hypocrites.",
        axe1_verset: "Le verbe yastahzi'u est l'action principale de Dieu dans ce verset — il se moque des moqueurs. Le champ lexical est celui du retournement : les hypocrites se moquaient des croyants (v14), Dieu se moque d'eux (v15). La forme X dit que la moquerie divine est délibérée et recherchée — ce n'est pas une simple réaction mais une action souveraine. L'inaccompli dit que cette moquerie est en cours et continue. Le complément bihim (d'eux) cible directement les hypocrites. La moquerie divine n'est pas de la dérision gratuite — c'est la rétribution appropriée pour ceux qui se moquent.",
        axe2_voisins: "Le verset 14 utilisait mustahzi'un (forme X, participe actif — moqueurs). Le verset 15 reprend la même forme X avec yastahzi'u mais change le sujet — de « eux » à « Dieu ». Le parallèle est structurel : la même racine, la même forme, mais le sujet passe des hypocrites à Dieu. Le retournement est complet. Le verset 16 va montrer la conséquence concrète de cette moquerie divine : les hypocrites ont perdu leur guidance.",
        axe3_sourate: "La sourate 2 montre que chaque acte des hypocrites reçoit une réponse divine proportionnelle. Ils prétendent réformer (v11), Dieu les identifie comme corrupteurs (v12). Ils se moquent (v14), Dieu se moque d'eux (v15). La sourate établit que la justice divine est un retournement — chacun reçoit la réplique exacte de ce qu'il a fait. La moquerie divine est le sommet de cette justice de retournement dans le passage des hypocrites.",
        axe4_coherence: "Le Coran utilise le retournement divin dans plusieurs sourates — sourate 9:79 (Dieu se moque d'eux), sourate 3:54 (Dieu déjoue les stratagèmes). Le principe est constant : Dieu rétribue par la même catégorie d'acte. La moquerie divine est mentionnée explicitement dans le Coran et ne pose pas de problème théologique — c'est la rétribution proportionnelle. La cohérence est parfaite.",
        axe5_frequence: "La moquerie divine est un outil de justice — elle montre que les actes des hypocrites ne restent pas sans réponse. La mission humaine de justice est garantie par la justice divine. Celui qui se moque de la guidance sera moqué en retour — la proportionnalité de la rétribution est un principe fondamental. Le verset rassure les croyants : les moqueries des hypocrites ne resteront pas impunies."
      }
    }
  }},
  { verse_id: 22, word_key: 'mdd', position: 4, analysis_axes: {
    sense_chosen: "les prolonge",
    concept_chosen: "Extension/Étirement",
    concepts: {
      "Extension/Étirement": {
        senses: ["tirer", "étendre", "prolonger"],
        status: "retenu",
        proof_ctx: "Le sens retenu est « Extension/Étirement ». Le verbe yamuddu est à l'inaccompli 3ème personne masculin singulier avec pronom suffixe hum — « il les prolonge / il les étend ». La racine m-d-d signifie étendre, tirer, prolonger. Le sujet est Dieu — il prolonge leur état de transgression. L'inaccompli dit que cette prolongation est en cours et continue. Le complément « dans leur transgression » (fi tughyanihim) indique que Dieu les laisse dans leur égarement sans les arrêter. Distinction avec « Abondance/Accroissement » : le sens est l'extension temporelle/spatiale, pas l'augmentation quantitative. Distinction avec « Aide/Renfort » : Dieu ne les aide pas, il les laisse dans leur égarement.",
        axe1_verset: "Le verbe yamuddu est la deuxième action de Dieu dans le verset — après la moquerie (yastahzi'u), la prolongation de leur égarement. Le champ lexical est celui de l'extension — Dieu étend la corde de leur transgression, il les laisse aller plus loin dans leur égarement sans les arrêter. L'inaccompli dit que cette action est continue — Dieu les prolonge en permanence. Le pronom hum (eux) en complément direct fait des hypocrites l'objet de cette prolongation. Le complément fi tughyanihim (dans leur transgression) localise la prolongation — ce n'est pas une prolongation de la vie ou du bien-être, c'est une prolongation de l'état de transgression. La prolongation est en elle-même un châtiment — être laissé dans l'égarement sans être ramené.",
        axe2_voisins: "Le verset 14 montrait les hypocrites moqueurs. Le verset 15 montre la double réponse divine : moquerie (yastahzi'u) et prolongation de l'égarement (yamuddu). Le verset 16 montre le résultat final : ils ont troqué la guidance contre l'égarement. La prolongation du v15 explique le troc du v16 — Dieu les a laissé s'enfoncer dans leur égarement jusqu'à ce qu'ils perdent complètement la guidance. La progression est logique : moquerie → égarement prolongé → perte de la guidance.",
        axe3_sourate: "La sourate 2 montre que Dieu guide ceux qui cherchent la guidance et laisse dans l'égarement ceux qui le choisissent. Le verset 2:10 disait « dans leurs cœurs il y a une maladie, et Dieu a augmenté leur maladie ». Le verbe yamuddu du v15 est parallèle — Dieu prolonge leur transgression comme il a augmenté leur maladie. La sourate établit que l'égarement volontaire est puni par sa propre prolongation — celui qui choisit de s'égarer est laissé dans son égarement.",
        axe4_coherence: "Le Coran utilise la racine m-d-d pour la prolongation dans d'autres contextes — sourate 7:202 (les diables prolongent l'égarement), sourate 17:20 (nous prolongeons pour chacun). Le principe est constant : la prolongation de l'égarement est une forme de rétribution divine. Le Coran montre que Dieu ne force personne à revenir sur le bon chemin — il prolonge la liberté de choix, même quand ce choix est l'égarement.",
        axe5_frequence: "La prolongation de l'égarement est une leçon sur la mission humaine — la liberté de choix est réelle, et Dieu ne contraint personne. Celui qui choisit la transgression est laissé dans sa transgression. La mission de justice est fondée sur le libre arbitre — le khalifa doit choisir la guidance librement, et celui qui refuse ce choix en assume les conséquences. La prolongation divine n'est pas une cruauté mais le respect de la liberté humaine poussé jusqu'à ses conséquences."
      },
      "Abondance/Accroissement": {
        senses: ["augmenter"],
        status: "nul",
        proof_ctx: "Le contexte est la prolongation dans la transgression, pas l'augmentation de ressources. Le complément fi tughyanihim oriente vers l'extension temporelle, pas l'accroissement quantitatif. Hors sujet."
      },
      "Aide/Renfort": {
        senses: ["aider"],
        status: "nul",
        proof_ctx: "Dieu ne les aide pas — il les laisse dans leur transgression. La prolongation est un châtiment, pas une aide. Hors sujet."
      }
    }
  }},
  { verse_id: 22, word_key: 'tgy', position: 6, analysis_axes: {
    sense_chosen: "leur transgression",
    concept_chosen: "Transgression/Excès",
    concepts: {
      "Transgression/Excès": {
        senses: ["transgresser", "dépasser les limites", "excès"],
        status: "retenu",
        proof_ctx: "Le sens retenu est « Transgression/Excès ». Le mot tughyanihim est un nom masculin (masdar) avec pronom possessif 3MP — « leur transgression ». La racine t-gh-y signifie dépasser les limites, transgresser, aller au-delà de ce qui est permis. Le mot est précédé de fi (dans) — « dans leur transgression ». Le tughyan est le dépassement volontaire des limites fixées par la guidance. Le possessif (him = leur) rattache la transgression aux hypocrites — c'est LEUR transgression, pas la transgression en général.",
        axe1_verset: "Le mot tughyanihim localise l'état dans lequel Dieu prolonge les hypocrites — dans leur transgression. Le champ lexical est celui du dépassement des limites : la transgression est le franchissement volontaire des bornes de la guidance. Le mot est un masdar (nom verbal) — il exprime l'action de transgresser comme un état permanent. Le possessif « leur » rattache cet état aux hypocrites — la transgression est leur propriété. La préposition fi (dans) fait de la transgression un espace dans lequel ils sont enfermés. La combinaison yamuddu fi tughyanihim (il les prolonge dans leur transgression) crée l'image d'un espace d'égarement qui s'étend indéfiniment.",
        axe2_voisins: "Le verset 14 montrait la moquerie des hypocrites — le verset 15 nomme leur état : la transgression (tughyan). Le mot tughyan donne un nom à ce que les versets 11-14 décrivaient en actes : corruption, mensonge, mépris, moquerie — tout cela est de la transgression. Le verset 16 va montrer la conséquence de cette transgression : la perte de la guidance. La transgression est le diagnostic qui explique tous les symptômes précédents.",
        axe3_sourate: "La racine t-gh-y est utilisée dans la sourate 2 pour les formes extrêmes de rébellion. Le tughyan est le degré le plus élevé de la désobéissance — ce n'est pas une simple erreur mais un dépassement délibéré des limites. La sourate 2 établit que le khalifa a des limites (hudud) à respecter — le transgresseur est celui qui dépasse ces limites. Les hypocrites ne commettent pas des erreurs, ils transgressent systématiquement.",
        axe4_coherence: "Le Coran utilise tughyan dans de nombreux contextes de transgression — sourate 20:24 (Pharaon a transgressé), sourate 79:17 (va vers Pharaon car il a transgressé). Le tughyan est systématiquement associé aux figures les plus rebelles du Coran. Le mot est cohérent avec l'usage coranique pour les dépassements graves et volontaires des limites.",
        axe5_frequence: "La transgression est l'opposé direct de la mission humaine de justice — le khalifa est placé sur terre pour respecter les limites, pas pour les dépasser. La transgression des hypocrites est la plus dangereuse car elle est cachée derrière une façade de foi. La mission de civilisation exige le respect des limites (hudud) fixées par la guidance — le tughyan est la négation de cette mission."
      }
    }
  }},
  { verse_id: 22, word_key: 'emh', position: 7, analysis_axes: {
    sense_chosen: "ils errent",
    concept_chosen: "Confusion/Égarement",
    concepts: {
      "Confusion/Égarement": {
        senses: ["être confus", "errer", "tâtonner"],
        status: "retenu",
        proof_ctx: "Le sens retenu est « Confusion/Égarement ». Le verbe ya'mahun est à l'inaccompli 3ème personne masculin pluriel — « ils errent / ils tâtonnent ». La racine '-m-h signifie errer confusément, être dans un état de désorientation où l'on ne voit pas clairement. L'inaccompli dit que cet état est continu et permanent. Le verbe clôt le verset comme un diagnostic final — les hypocrites errent dans leur transgression sans trouver de direction.",
        axe1_verset: "Le verbe ya'mahun clôt le verset par un état permanent de confusion — les hypocrites errent dans leur transgression. Le champ lexical est celui de la désorientation : ils avancent sans direction, sans repère, sans guidance. L'inaccompli dit que cet état est continu et ne s'arrête pas. Le verbe est en position finale comme un verdict : après la moquerie divine et la prolongation de l'égarement, voici leur état — ils errent. La combinaison des trois verbes du verset (yastahzi'u, yamuddu, ya'mahun) donne la séquence : Dieu se moque, Dieu prolonge, ils errent. Le résultat de la moquerie divine et de la prolongation est l'errance sans fin.",
        axe2_voisins: "Le verset 14 montrait les hypocrites en action (moquerie en privé). Le verset 15 montre leur état réel : errance dans la transgression. Le verset 16 va donner la cause de cette errance : ils ont troqué la guidance contre l'égarement. L'errance du v15 est l'état intermédiaire entre la moquerie (v14) et la perte de la guidance (v16). La progression est claire : moquerie → errance → perte définitive.",
        axe3_sourate: "La sourate 2 oppose la guidance (huda) à l'égarement. L'errance (ya'mahun) est la forme la plus extrême de l'égarement — non seulement ils sont égarés mais ils tâtonnent dans le noir. Le verset 2:17 va utiliser la métaphore de l'obscurité pour illustrer cet état. La sourate montre que le refus de la guidance conduit à la perte de toute orientation — l'errance est la conséquence naturelle du rejet de la guidance.",
        axe4_coherence: "Le Coran utilise ya'mahun dans plusieurs versets pour l'errance des égarés — sourate 2:15, 6:110, 7:186, 10:11, 23:75. Le verbe est systématiquement associé à l'état de ceux qui ont rejeté la guidance et qui errent sans direction. La cohérence est parfaite avec l'ensemble du corpus coranique — ya'mahun est le verbe de l'errance spirituelle et intellectuelle.",
        axe5_frequence: "L'errance est l'état de celui qui a abandonné la mission humaine de justice — sans guidance, pas de direction, pas de but. Le khalifa qui erre a perdu sa mission — il ne sait plus pourquoi il est sur terre ni ce qu'il doit faire. L'errance est la pire conséquence de la transgression — elle ne tue pas mais elle rend la vie sans sens. La mission de civilisation exige une direction claire — l'errance est son effondrement."
      }
    }
  }},

  // === V16 (verse_id=23) ===
  { verse_id: 23, word_key: 'shry', position: 3, analysis_axes: {
    sense_chosen: "ils ont échangé",
    concept_chosen: "Échange/Transaction",
    concepts: {
      "Échange/Transaction": {
        senses: ["acheter", "vendre", "échanger"],
        status: "retenu",
        proof_ctx: "Le sens retenu est « Échange/Transaction ». Le verbe ishtaraw est à l'accompli forme VIII 3ème personne masculin pluriel — « ils ont acheté / échangé ». La forme VIII (ifta'ala) est la forme réfléchie/active : ils ont fait l'échange pour eux-mêmes. L'accompli dit que l'échange est un fait accompli et irréversible. Le verbe est suivi de ad-dalalata bi-l-huda (l'égarement contre la guidance) — le complément direct est l'égarement (ce qu'ils ont acquis) et le prix payé est la guidance (ce qu'ils ont donné). Distinction avec « Sacrifice/Don de soi » : le contexte est une transaction commerciale métaphorique, pas un sacrifice.",
        axe1_verset: "Le verbe ishtaraw est l'acte central du verset — les hypocrites ont acheté l'égarement en payant avec la guidance. Le champ lexical est celui de la transaction commerciale : acheter, payer, profit, commerce. L'accompli dit que la transaction est faite et irréversible — il n'y a pas de retour possible. La forme VIII indique que l'échange est fait pour eux-mêmes, dans leur propre intérêt perçu. Le complément direct est ad-dalalata (l'égarement) — c'est ce qu'ils ont acquis. Le prix payé est al-huda (la guidance), introduit par bi (contre). L'ironie est totale : ils pensaient faire un bon échange mais ils ont donné le plus précieux (la guidance) pour le plus nuisible (l'égarement).",
        axe2_voisins: "Les versets 14-15 montraient les actes des hypocrites et la réponse divine. Le verset 16 tire la conclusion commerciale : tout cela revient à un échange ruineux. Le verset poursuit avec fama rabihat tijaratuhum (leur commerce n'a pas été profitable) — le vocabulaire commercial continue. La métaphore de l'échange est le résumé de toute la section hypocrites (v8-16) — ils ont choisi l'égarement et abandonné la guidance.",
        axe3_sourate: "La sourate 2 utilise la métaphore commerciale dans plusieurs passages — v41 (ne vendez pas mes signes à vil prix), v86 (ceux qui ont acheté la vie d'ici-bas au prix de l'au-delà). Le vocabulaire de l'échange et du commerce est récurrent dans la sourate pour décrire les choix spirituels. Le verset 16 s'inscrit dans cette tradition — les choix de vie sont présentés comme des transactions dont on assume les conséquences. La sourate montre que le pire échange est celui de la guidance contre l'égarement.",
        axe4_coherence: "Le Coran utilise la racine sh-r-y et la forme VIII ishtara dans de nombreux contextes d'échange spirituel — sourate 2:16, 2:86, 2:175, 3:177, 9:111. Le schéma est constant : l'échange de la guidance contre l'égarement (ou l'inverse pour les croyants) est un thème coranique transversal. La cohérence est parfaite avec l'usage coranique de la métaphore commerciale.",
        axe5_frequence: "L'échange est le choix fondamental de la mission humaine — chaque personne échange quelque chose contre autre chose. Le khalifa qui échange la guidance contre l'égarement a fait le pire commerce possible. La mission de justice exige de savoir distinguer les bons échanges des mauvais — les hypocrites ont choisi l'égarement en croyant faire une bonne affaire. Le verset montre que les conséquences d'un mauvais échange sont irréversibles."
      },
      "Sacrifice/Don de soi": {
        senses: ["se sacrifier"],
        status: "nul",
        proof_ctx: "Le contexte est une transaction commerciale métaphorique (acheter l'égarement contre la guidance). Pas de contexte de sacrifice. Hors sujet."
      }
    }
  }},
  { verse_id: 23, word_key: 'dll', position: 4, analysis_axes: {
    sense_chosen: "l'égarement",
    concept_chosen: "Égarement/Déviation",
    concepts: {
      "Égarement/Déviation": {
        senses: ["s'égarer", "dévier", "se perdre"],
        status: "retenu",
        proof_ctx: "Le sens retenu est « Égarement/Déviation ». Le mot ad-dalalata est un nom féminin défini à l'accusatif — « l'égarement ». La racine d-l-l signifie s'égarer, perdre le chemin, dévier de la direction. Le mot est défini avec al- ce qui en fait l'égarement absolu, pas un égarement partiel. Le mot est complément direct de ishtaraw (ils ont acheté) — l'égarement est ce qu'ils ont acquis. L'accusatif confirme la fonction de complément direct.",
        axe1_verset: "Le mot ad-dalalata est l'objet de l'échange — ce que les hypocrites ont acquis en abandonnant la guidance. Le champ lexical est celui de la perte de direction : l'égarement est l'opposé exact de la guidance (huda). Le nom est défini (ad-dalala) — c'est l'égarement absolu et total, pas une simple déviation. Le mot est en position de complément direct après ishtaraw, ce qui en fait l'objet de la transaction : ils ont ACHETÉ l'égarement. L'accusatif (dalalata) confirme cette fonction. Le verset oppose ad-dalalata (l'égarement) à al-huda (la guidance) — les deux pôles du choix humain. Les hypocrites ont choisi le pire pôle.",
        axe2_voisins: "Le verset 15 parlait de tughyan (transgression) et de errance (ya'mahun). Le verset 16 nomme le résultat final : l'égarement (dalala). La transgression mène à l'égarement — la progression est logique. Les versets 14-16 montrent la descente : moquerie → transgression → égarement → perte de la guidance. L'égarement du v16 est le résultat concret de tout ce qui précède.",
        axe3_sourate: "La sourate 2 ouvre par la distinction entre les guidés et les égarés. Les versets 2:2-5 décrivent les guidés, les v6-7 les égarés volontaires, les v8-20 les hypocrites. L'égarement (dalala) est le diagnostic final des hypocrites — ils sont dans la même catégorie que les égarés volontaires. La sourate montre que l'hypocrisie est une forme d'égarement — prétendre être guidé tout en étant égaré est pire que l'égarement assumé.",
        axe4_coherence: "Le Coran oppose systématiquement huda (guidance) et dalala (égarement) dans des dizaines de versets — sourate 2:16, 2:175, 7:30. L'égarement est toujours présenté comme le choix de ceux qui refusent la guidance. La racine d-l-l est l'une des plus utilisées dans le Coran pour décrire la perte du chemin. La cohérence est parfaite avec l'usage coranique universel.",
        axe5_frequence: "L'égarement est la perte de la mission humaine — le khalifa égaré ne peut plus remplir sa mission de justice car il a perdu sa direction. L'égarement n'est pas un accident mais un choix — les hypocrites ont choisi l'égarement en échangeant la guidance. La mission de civilisation exige la guidance comme boussole — sans elle, l'errance est inévitable. Le verset montre que l'égarement est le prix payé pour la moquerie et l'hypocrisie."
      },
      "Disparition/Perte": {
        senses: ["disparaître", "se perdre"],
        status: "nul",
        proof_ctx: "Le contexte est l'égarement spirituel et intellectuel, pas la disparition physique. Le mot ad-dalalata est un nom abstrait désignant la perte de direction, pas la perte matérielle. Hors sujet."
      }
    }
  }},
  { verse_id: 23, word_key: 'hdy', position: 5, analysis_axes: {
    sense_chosen: "la guidance",
    concept_chosen: "Guidance/Direction",
    concepts: {
      "Guidance/Direction": {
        senses: ["guider", "montrer le chemin", "guidance"],
        status: "retenu",
        proof_ctx: "Le sens retenu est « Guidance/Direction ». Le mot al-huda est un nom masculin défini — « la guidance ». La racine h-d-y signifie guider, montrer le chemin, diriger vers le bon chemin. Le mot est introduit par bi (contre/en échange de) — la guidance est le prix que les hypocrites ont payé pour acquérir l'égarement. Le nom est défini (al-huda) — c'est la guidance absolue, pas une guidance partielle. La guidance est ce qu'ils avaient et qu'ils ont perdu.",
        axe1_verset: "Le mot al-huda est le prix payé dans l'échange — les hypocrites ont donné la guidance pour recevoir l'égarement. Le champ lexical est celui de la direction et du chemin : la guidance est la connaissance du bon chemin. La préposition bi (contre) fait de la guidance la monnaie de l'échange — ils ont payé AVEC la guidance. Le mot est défini (al-huda) — c'est la guidance totale et absolue qui a été perdue. L'opposition structurelle entre ad-dalalata (l'égarement, acquis) et al-huda (la guidance, perdue) est le cœur du verset. Le verset dit que les hypocrites avaient accès à la guidance mais l'ont volontairement abandonnée.",
        axe2_voisins: "Le verset 15 montrait l'errance des hypocrites (ya'mahun). Le verset 16 explique pourquoi ils errent : ils ont échangé la guidance contre l'égarement. La guidance qu'ils ont perdue est celle décrite dans les premiers versets de la sourate (v2 : ce livre est une guidance). Le verset 16 boucle le portrait des hypocrites — ils avaient la guidance, ils l'ont échangée, ils errent. Le v16b confirme : leur commerce n'a pas été profitable et ils ne sont pas guidés.",
        axe3_sourate: "La guidance (huda) est le mot-clé d'ouverture de la sourate 2 — le verset 2 dit « ce livre, nul doute, est une guidance pour ceux qui se prémunissent ». La guidance est ce que le Coran offre et ce que les hypocrites refusent. La sourate 2 est structurée autour de la guidance : qui l'accepte, qui la refuse, et les conséquences de chaque choix. Le verset 16 montre que les hypocrites ont eu accès à cette guidance et l'ont rejetée — leur égarement est d'autant plus grave.",
        axe4_coherence: "Le Coran utilise huda comme l'un de ses termes fondamentaux — la guidance est mentionnée dans presque chaque sourate. L'opposition huda/dalala est un axe structurant du Coran entier. Le verset 2:16 est l'un des exemples les plus explicites de cette opposition sous forme de transaction. La cohérence est universelle dans le corpus coranique.",
        axe5_frequence: "La guidance est le fondement de la mission humaine — sans direction, pas de mission possible. Le khalifa a besoin de la guidance comme d'une boussole. Échanger la guidance contre l'égarement c'est jeter sa boussole dans un désert — l'errance est inévitable. La mission de justice exige la guidance comme point de départ — tout le reste en découle. Le verset montre que la guidance est un bien précieux que les hypocrites ont gaspillé."
      },
      "Don/Offrande": {
        senses: ["cadeau"],
        status: "nul",
        proof_ctx: "Le contexte est la guidance spirituelle/directionnelle, pas le cadeau matériel. Le mot al-huda est un nom abstrait de direction, pas un objet physique offert. Hors sujet."
      }
    }
  }},
  { verse_id: 23, word_key: 'rbh', position: 7, analysis_axes: {
    sense_chosen: "n'a pas été profitable",
    concept_chosen: "Gain/Profit",
    concepts: {
      "Gain/Profit": {
        senses: ["gagner", "profit", "être profitable"],
        status: "retenu",
        proof_ctx: "Le sens retenu est « Gain/Profit ». Le verbe rabihat est à l'accompli 3ème personne féminin singulier, précédé de la négation ma — « n'a pas été profitable ». La racine r-b-h signifie gagner, faire du profit, être profitable. L'accompli nié dit que la non-profitabilité est un fait établi et définitif. Le sujet du verbe est tijaratuhum (leur commerce) — c'est le commerce qui n'a pas été profitable, pas les personnes directement. Le féminin singulier s'accorde avec tijara (féminin).",
        axe1_verset: "Le verbe rabihat prolonge la métaphore commerciale du verset — après l'échange (ishtaraw), le profit (rabihat). Le champ lexical est celui du bilan commercial : l'échange a été fait, le résultat est un bilan négatif — pas de profit. La négation ma dit que le résultat est définitif : le commerce a échoué. L'accompli confirme que c'est un bilan final. Le verbe est nié (ma rabihat) — la transaction n'a produit aucun gain. Le sujet tijaratuhum (leur commerce) personnifie l'échange — le commerce lui-même n'a pas été profitable, comme une entreprise en faillite. La métaphore commerciale rend le verdict accessible : tout le monde comprend un commerce qui perd.",
        axe2_voisins: "Le verset 16a montrait l'échange (ishtaraw ad-dalalata bi-l-huda). Le verset 16b tire le bilan : ce commerce n'a pas été profitable. La séquence est logique — échange ruineux → bilan négatif. Le v16c conclut : ils ne sont pas guidés (muhtadin). Chaque partie du verset 16 renforce la précédente : mauvais échange → pas de profit → pas de guidance. Le verdict est triple et sans appel.",
        axe3_sourate: "La sourate 2 utilise le vocabulaire commercial pour les choix spirituels dans plusieurs passages — v41, v86, v207. Le profit et la perte sont des critères que la sourate applique aux choix de vie. Le bilan négatif du v16 s'inscrit dans cette logique — les hypocrites sont comme des commerçants qui ont fait faillite. La sourate montre que les choix spirituels ont des conséquences mesurables, comme un bilan commercial.",
        axe4_coherence: "Le Coran utilise la racine r-b-h dans quelques versets clés pour le profit spirituel — sourate 2:16 est le passage le plus explicite. La métaphore commerciale est un procédé coranique récurrent pour rendre les vérités spirituelles concrètes. Le profit nié (ma rabihat) est un verdict définitif dans le vocabulaire commercial coranique. La cohérence est directe.",
        axe5_frequence: "Le profit véritable dans la mission humaine n'est pas matériel mais directionnel — gagner c'est avancer dans la bonne direction, perdre c'est s'éloigner de la guidance. Les hypocrites ont fait un commerce à perte : ils ont donné la guidance et reçu l'égarement. La mission de justice exige de savoir évaluer ce qui est vraiment profitable — la guidance est plus précieuse que tout ce que l'égarement peut offrir."
      }
    }
  }},
  { verse_id: 23, word_key: 'tjr', position: 8, analysis_axes: {
    sense_chosen: "leur commerce",
    concept_chosen: "Commerce/Négoce",
    concepts: {
      "Commerce/Négoce": {
        senses: ["commercer", "faire du négoce", "commerce"],
        status: "retenu",
        proof_ctx: "Le sens retenu est « Commerce/Négoce ». Le mot tijaratuhum est un nom féminin singulier avec pronom possessif 3MP — « leur commerce ». La racine t-j-r signifie commercer, faire du négoce. Le mot est le sujet du verbe rabihat (a été profitable) nié — « leur commerce n'a pas été profitable ». Le possessif (hum = leur) rattache le commerce aux hypocrites — c'est LEUR commerce qui a échoué. Le commerce est ici métaphorique — il désigne l'ensemble de leurs choix et de leurs échanges spirituels.",
        axe1_verset: "Le mot tijaratuhum est le sujet du verdict final — c'est leur commerce qui n'a pas été profitable. Le champ lexical est celui du négoce : acheter (ishtaraw), commerce (tijara), profit (rabh). La métaphore commerciale structure tout le verset. Le mot tijara résume l'ensemble des actes des hypocrites en un seul concept : un commerce, une série d'échanges. Le possessif « leur » fait des hypocrites les propriétaires de ce commerce raté. Le féminin singulier (tijara) traite l'ensemble des actes comme une seule entreprise commerciale — une entreprise en faillite.",
        axe2_voisins: "Le verset 16 est construit autour du vocabulaire commercial : ishtaraw (acheter), rabihat (profiter), tijaratuhum (leur commerce). L'ensemble forme une parabole du commerce raté. Les versets 14-15 décrivaient les actes des hypocrites, le verset 16 les résume en une métaphore commerciale accessible à tous. Le commerce des hypocrites (leur vie entière) est présenté comme une opération à perte.",
        axe3_sourate: "La sourate 2 utilise le commerce comme métaphore dans plusieurs passages — v282 (la plus longue mention de commerce dans le Coran, sur les dettes et les contrats). Le vocabulaire commercial est familier dans la sourate. Le verset 16 applique ce vocabulaire aux choix spirituels — le commerce de la guidance est le plus important de tous les commerces. La sourate montre que la vie est un commerce et que les choix sont des transactions.",
        axe4_coherence: "Le Coran utilise tijara (commerce) dans plusieurs sourates pour les choix de vie — sourate 35:29 (un commerce qui ne périt pas), sourate 61:10 (vous indiquerai-je un commerce qui vous sauve d'un châtiment douloureux). Le commerce est une métaphore coranique récurrente pour les choix existentiels. La cohérence est parfaite avec l'usage coranique de la métaphore commerciale.",
        axe5_frequence: "Le commerce est une métaphore puissante pour la mission humaine — chaque choix est un échange, chaque décision a un coût et un bénéfice. Le khalifa doit savoir distinguer les bons échanges des mauvais. Les hypocrites ont fait le pire commerce : ils ont troqué la guidance contre l'égarement et leur entreprise a fait faillite. La mission de justice est le meilleur commerce — celui qui échange l'effort pour la guidance."
      }
    }
  }},
  { verse_id: 23, word_key: 'kwn', position: 10, analysis_axes: {
    sense_chosen: "ils n'étaient pas",
    concept_chosen: "Être/Existence",
    concepts: {
      "Être/Existence": {
        senses: ["être", "venir à l'existence"],
        status: "retenu",
        proof_ctx: "Le sens retenu est « Être/Existence ». Le verbe kanu est à l'accompli 3ème personne masculin pluriel, précédé de la négation ma — « ils n'étaient pas ». La racine k-w-n signifie être, exister, venir à l'existence. Le verbe kana à l'accompli nié dit que l'état décrit n'a jamais existé — ils n'ont JAMAIS été guidés. Le verbe est suivi de l'attribut muhtadin (guidés) — c'est un état qu'ils n'ont jamais atteint.",
        axe1_verset: "Le verbe kanu clôt le verset par le verdict final — ils n'ont jamais été guidés. Le champ lexical est celui de l'état permanent : kana exprime un état dans le temps, et sa négation dit que cet état n'a jamais existé. L'accompli nié (ma kanu) est catégorique — ce n'est pas qu'ils ont cessé d'être guidés, c'est qu'ils ne l'ont JAMAIS été. Le verbe kana sert de copule : il relie le sujet (les hypocrites implicites) à l'attribut (muhtadin = guidés). La négation totale (ma kanu muhtadin) ferme le portrait des hypocrites — leur état est sans appel. Le verset 16 se termine comme il a commencé : par le constat d'une perte irréversible.",
        axe2_voisins: "Le verset 16a montrait l'échange (guidance contre égarement). Le v16b montrait le bilan (commerce non profitable). Le v16c conclut par l'état (ils n'ont jamais été guidés). La progression est : acte → bilan → état. Le mot kanu est le verbe du verdict final — après les actes et le bilan, l'état définitif. Les versets 8-16 forment un portrait complet des hypocrites : de leur prétention initiale (v8) à leur état final (v16c).",
        axe3_sourate: "La sourate 2 utilise kana dans de nombreux contextes d'état — c'est l'un des verbes les plus fréquents. Le verbe établit des états dans le temps : ce qui était, ce qui est, ce qui n'a jamais été. L'état final des hypocrites (ma kanu muhtadin) contraste avec l'état des croyants (ula'ika 'ala hudan min rabbihim, v5 = ceux-là sont sur une guidance de leur Seigneur). La sourate oppose les deux états : guidés (v5) et jamais guidés (v16).",
        axe4_coherence: "Le Coran utilise ma kanu comme verdict négatif dans de nombreux contextes — sourate 2:16, 7:148, 16:88. La construction est toujours un constat définitif sur un état qui n'a jamais existé. La cohérence est universelle dans le corpus coranique.",
        axe5_frequence: "L'être (kawn) est le fondement de tout — avant de faire, il faut être. Les hypocrites n'ont jamais été guidés — leur être même est dans l'égarement. La mission humaine de justice commence par l'état d'être guidé — sans cet état fondamental, aucune action juste n'est possible. Le verdict ma kanu muhtadin est le plus sévère : ce n'est pas un échec temporaire, c'est une absence permanente de guidance."
      }
    }
  }},
  { verse_id: 23, word_key: 'hdy', position: 11, analysis_axes: {
    sense_chosen: "guidés",
    concept_chosen: "Guidance/Direction",
    concepts: {
      "Guidance/Direction": {
        senses: ["guider", "montrer le chemin", "être guidé"],
        status: "retenu",
        proof_ctx: "Le sens retenu est « Guidance/Direction ». Le mot muhtadin est un participe actif forme VIII masculin pluriel à l'accusatif — « des guidés / des gens qui sont sur le bon chemin ». La forme VIII (ihtada) est la forme réfléchie : se guider soi-même, accepter la guidance. Le participe actif dit que c'est un état permanent — les muhtadin sont ceux qui se sont guidés et restent guidés. L'accusatif (-in au lieu de -un) est le cas de l'attribut après kana. La négation ma kanu fait que cet état n'a jamais existé pour les hypocrites.",
        axe1_verset: "Le mot muhtadin est le dernier mot du verset et le verdict final du portrait des hypocrites. Le champ lexical est celui de la guidance en tant qu'état : être guidé c'est avoir trouvé et suivi le bon chemin. La forme VIII (ihtada) dit que la guidance est un acte réfléchi — on SE guide, on accepte la guidance pour soi-même. Le participe actif dit que c'est un état continu. Mais la négation ma kanu annule cet état — les hypocrites ne se sont jamais guidés. Le mot muhtadin est l'opposé exact de dalalata (égarement) du début du verset — le verset boucle sur la même opposition entre guidance et égarement.",
        axe2_voisins: "Le verset 16a donnait la guidance (al-huda) comme prix payé. Le verset 16c utilise la même racine sous forme participale (muhtadin = ceux qui se guident). La double mention de la racine h-d-y dans le même verset renforce le verdict : la guidance a été perdue (al-huda, v16a) et l'état de guidé n'a jamais été atteint (muhtadin, v16c). Le verset 5 de la sourate utilisait le même thème (ula'ika 'ala hudan = ceux-là sont sur une guidance). Les hypocrites n'ont jamais atteint cet état.",
        axe3_sourate: "La sourate 2 oppose les muhtadin (guidés) aux dallin (égarés) dans sa structure d'ouverture. Le v5 identifie les croyants comme étant sur la guidance. Le v16 identifie les hypocrites comme n'ayant jamais été guidés. La sourate établit que la guidance est un état à atteindre et à maintenir — les hypocrites ont échoué aux deux niveaux. Le mot muhtadin est la clé de la mission du khalifa : se guider soi-même avant de guider les autres.",
        axe4_coherence: "Le Coran utilise muhtadin/muhtadun dans de nombreux versets pour l'état de guidance — sourate 2:16, 2:157, 7:178. La forme VIII est systématiquement utilisée pour la guidance réfléchie et volontaire. Le participe actif est l'état de celui qui a accepté et maintient la guidance. La cohérence est parfaite avec l'usage coranique.",
        axe5_frequence: "Être guidé (muhtadi) est le fondement de la mission humaine — le khalifa doit d'abord se guider avant de guider les autres. Les hypocrites n'ont jamais atteint cet état — ils sont donc incapables de remplir leur mission. La forme VIII (se guider soi-même) montre que la guidance n'est pas imposée mais choisie — les hypocrites ont refusé ce choix. La mission de civilisation commence par l'acceptation personnelle de la guidance."
      },
      "Don/Offrande": {
        senses: ["cadeau"],
        status: "nul",
        proof_ctx: "Le mot muhtadin est un participe actif forme VIII de la racine h-d-y dans le sens de guidance, pas dans le sens de cadeau. Le contexte est l'état de guidance, pas le don matériel. Hors sujet."
      }
    }
  }}
];

// Verse updates for V14-V16
const verseUpdates = [
  {
    verse_id: 21,
    translation_arab: "Et quand ils rencontrent ceux qui ont adhéré, ils disent : « Nous avons adhéré. » Et quand ils se retrouvent seuls avec leurs diables, ils disent : « Nous sommes avec vous, nous ne faisions que nous moquer. »",
    full_translation: "Quand ils rencontrent ceux qui croient, ils disent : « Nous croyons » ; mais quand ils se retrouvent seuls avec leurs diables, ils disent : « Nous sommes avec vous ; en vérité nous ne faisions que nous moquer. »",
    translation_explanation: `§DEMARCHE§

Le verbe **laqu** est à l'accompli 3ème personne du masculin pluriel — « ils ont rencontré ». La racine l-q-y signifie rencontrer, se trouver face à face. Dans la structure « wa idha laqu » (et quand ils rencontrent), l'accompli prend une valeur itérative — chaque fois que la situation se produit. Le verbe est suivi de **alladhina amanu** (ceux qui ont adhéré), le terme coranique standard pour les croyants sincères.

Le verbe **qalu** est à l'accompli 3MP — « ils ont dit ». Il introduit la première déclaration hypocrite : **amanna** (nous avons adhéré). Le verbe amanna est à l'accompli forme IV 1ère personne du pluriel — « nous avons fait entrer la confiance ». La forme IV (af'ala) ajoute la causalité. L'accompli 1PL est une déclaration de foi — mais le contexte montre que c'est un mensonge.

Le verbe **khalaw** est à l'accompli 3MP — « ils se sont retirés ». La racine kh-l-w signifie être vide, être seul avec, se retirer. Le verbe est suivi de la préposition **ila** (vers) puis de **shayatinihim** (leurs diables) — ils se retirent VERS leurs meneurs rebelles. Le mot **shayatin** est le pluriel de shaytan (racine sh-t-n = être éloigné de la vérité, être rebelle). Le possessif « him » (leurs) indique que ce sont des meneurs spécifiques à ce groupe.

Le deuxième **qalu** introduit la parole privée — le contraire de la parole publique. La phrase **inna ma'akum** (nous sommes avec vous) révèle leur véritable allégeance. Le mot **mustahzi'un** est un participe actif forme X masculin pluriel (une forme qui dit que le sujet CHERCHE à faire l'action) — « des moqueurs ». La forme X (istaf'ala) ajoute la recherche/demande : ils cherchent activement à se moquer. Le participe actif dit que la moquerie est leur identité permanente.

§JUSTIFICATION§

**rencontrent** — Le sens retenu est « Rencontre/Face à face ». Le mot « rencontrent » rend laqu — la rencontre physique entre deux groupes. L'alternative « croisent » est écartée car elle minimise l'interaction. L'alternative « trouvent » est écartée car laqu ici implique un face à face, pas une découverte.

**adhéré** — Le sens retenu est « Foi/Adhésion ». Le mot « adhéré » rend amanu/amanna — la racine amn dans le sens de l'adhésion volontaire. Le même mot est utilisé pour la foi vraie (amanu) et la foi simulée (amanna) pour souligner le contraste. L'alternative « cru » est courante mais « adhéré » capture mieux la dimension volontaire de la forme IV.

**se retrouvent seuls** — Le sens retenu est « Vide/Solitude ». L'expression rend khalaw — le fait de se retirer en privé. L'alternative « s'isolent » est possible mais « se retrouvent seuls » est plus naturel en français courant.

**diables** — Le sens retenu est « Égarement/Rébellion ». Le mot « diables » rend shayatin — les meneurs rebelles. L'alternative « démons » est écartée car elle évoque des êtres surnaturels alors que le contexte montre des personnes avec qui on se retrouve en privé. « Diables » garde l'ambiguïté du texte.

**moqueurs** — Le sens retenu est « Moquerie/Dérision ». Le mot « moqueurs » rend mustahzi'un — ceux qui cherchent activement à se moquer. L'alternative « railleurs » est du registre littéraire.

§CRITIQUE§

Hamidullah traduit « Nous croyons » pour amanna et « nous ne faisions que nous moquer » pour innama nahnu mustahzi'un. La traduction étymologique donne « nous avons adhéré » et « nous ne faisions que nous moquer ». La nuance principale est dans le choix de « adhéré » au lieu de « croire » — la forme IV amana signifie faire entrer la confiance en soi, ce qui est plus actif que le simple « croire ». Pour le reste, les traductions sont proches. Le mot shayatinihim est rendu par « diables » dans les deux cas, ce qui est fidèle au texte tout en gardant l'ambiguïté entre meneurs humains rebelles et êtres surnaturels.`,
    segments: [
      { fr: "et quand", phon: "wa idha", arabic: "وَإِذَا", position: 1, word_key: null, is_particle: true },
      { fr: "ils rencontrent", pos: "verbe", phon: "laqu", arabic: "لَقُوا۟", position: 2, word_key: "lqy", is_particle: false, sense_retenu: "rencontrer" },
      { fr: "ceux qui", phon: "alladhina", arabic: "ٱلَّذِينَ", position: 3, word_key: null, is_particle: true },
      { fr: "ont adhéré", pos: "verbe", phon: "amanu", arabic: "ءَامَنُوا۟", position: 4, word_key: "amn", is_particle: false, sense_retenu: "croire" },
      { fr: "ils disent", pos: "verbe", phon: "qalu", arabic: "قَالُوٓا۟", position: 5, word_key: "qwl", is_particle: false, sense_retenu: "dire" },
      { fr: "nous avons adhéré", pos: "verbe", phon: "amanna", arabic: "ءَامَنَّا", position: 6, word_key: "amn", is_particle: false, sense_retenu: "croire" },
      { fr: "et quand", phon: "wa idha", arabic: "وَإِذَا", position: 7, word_key: null, is_particle: true },
      { fr: "se retrouvent seuls", pos: "verbe", phon: "khalaw", arabic: "خَلَوْا۟", position: 8, word_key: "xlw", is_particle: false, sense_retenu: "se retirer" },
      { fr: "vers", phon: "ila", arabic: "إِلَىٰ", position: 9, word_key: null, is_particle: true },
      { fr: "leurs diables", pos: "nom", phon: "shayatinihim", arabic: "شَيَٰطِينِهِمْ", position: 10, word_key: "shtn", is_particle: false, sense_retenu: "diable" },
      { fr: "ils disent", pos: "verbe", phon: "qalu", arabic: "قَالُوٓا۟", position: 11, word_key: "qwl", is_particle: false, sense_retenu: "dire" },
      { fr: "certes nous", phon: "inna", arabic: "إِنَّا", position: 12, word_key: null, is_particle: true },
      { fr: "avec vous", phon: "ma'akum", arabic: "مَعَكُمْ", position: 13, word_key: null, is_particle: true },
      { fr: "seulement nous", phon: "innama nahnu", arabic: "إِنَّمَا نَحْنُ", position: 14, word_key: null, is_particle: true },
      { fr: "moqueurs", pos: "nom", phon: "mustahzi'un", arabic: "مُسْتَهْزِءُونَ", position: 16, word_key: "hza", is_particle: false, sense_retenu: "se moquer" }
    ]
  },
  {
    verse_id: 22,
    translation_arab: "Dieu se moque d'eux et les prolonge dans leur transgression — ils errent.",
    full_translation: "C'est Allah qui se moque d'eux et les laisse errer aveuglement dans leur révolte.",
    translation_explanation: `§DEMARCHE§

Le mot **Allah** est le sujet principal du verset — c'est Dieu qui agit après la section où les hypocrites semblaient maîtres de la situation.

Le verbe **yastahzi'u** est à l'inaccompli forme X 3MS — « il se moque ». La forme X (istaf'ala) est la même que celle de mustahzi'un au verset 14. L'inaccompli dit que la moquerie divine est continue et en cours. Le pronom **bihim** (d'eux) complète le verbe. Le retournement est total : les moqueurs sont moqués.

La conjonction **wa** (et) relie les deux actions divines.

Le verbe **yamuddu** est à l'inaccompli 3MS avec pronom suffixe **hum** — « il les prolonge / il les étend ». La racine m-d-d signifie étendre, prolonger. L'inaccompli dit que l'action est continue. Dieu prolonge leur état — il les laisse dans leur situation sans les en sortir.

La préposition **fi** (dans) introduit le lieu/état de la prolongation.

Le mot **tughyanihim** est un nom masculin (masdar) avec pronom possessif 3MP — « leur transgression ». La racine t-gh-y signifie dépasser les limites. Le tughyan est le dépassement volontaire des limites de la guidance. Le possessif « leur » rattache la transgression aux hypocrites.

Le verbe **ya'mahun** est à l'inaccompli 3MP — « ils errent ». La racine '-m-h signifie errer confusément, tâtonner. L'inaccompli dit que l'errance est permanente et continue. Le verbe clôt le verset par un diagnostic final : les hypocrites sont dans un état d'errance sans fin.

§JUSTIFICATION§

**se moque** — Le sens retenu est « Moquerie/Dérision ». Le verbe rend yastahzi'u — la moquerie divine en retour de celle des hypocrites. L'alternative « raille » est du registre littéraire.

**prolonge** — Le sens retenu est « Extension/Étirement ». Le verbe « prolonge » rend yamuddu — l'action d'étendre la durée de leur état. L'alternative « laisse » (comme chez Hamidullah) perd la nuance d'extension active. L'alternative « accroît » est écartée car le sens est la prolongation temporelle, pas l'augmentation quantitative.

**transgression** — Le sens retenu est « Transgression/Excès ». Le mot « transgression » rend tughyan — le dépassement des limites. L'alternative « révolte » (Hamidullah) est plus émotionnelle que factuelle. L'alternative « excès » perd la dimension de franchissement de limites.

**errent** — Le sens retenu est « Confusion/Égarement ». Le verbe « errent » rend ya'mahun — l'errance confuse sans direction. L'alternative « tâtonnent » est possible mais « errent » est plus courant.

§CRITIQUE§

Hamidullah traduit « C'est Allah qui se moque d'eux et les laisse errer aveuglement dans leur révolte ». La traduction étymologique donne « Dieu se moque d'eux et les prolonge dans leur transgression — ils errent ». Les différences principales : « prolonge » au lieu de « laisse » (yamuddu est actif — Dieu prolonge, il ne se contente pas de laisser), « transgression » au lieu de « révolte » (tughyan est le dépassement des limites, pas la révolte émotionnelle), et « errent » séparé au lieu de « errer aveuglement » (ya'mahun est un verbe indépendant, pas un complément de yamuddu). Hamidullah fusionne deux verbes distincts (yamuddu et ya'mahun) en une seule action, alors que le texte arabe les sépare.`,
    segments: [
      { fr: "Dieu", pos: "nom", phon: "Allah", arabic: "ٱللَّهُ", position: 1, word_key: "alh", is_particle: false, sense_retenu: "Dieu" },
      { fr: "se moque d'eux", pos: "verbe", phon: "yastahzi'u bihim", arabic: "يَسْتَهْزِئُ بِهِمْ", position: 2, word_key: "hza", is_particle: false, sense_retenu: "se moquer" },
      { fr: "et", phon: "wa", arabic: "وَ", position: 3, word_key: null, is_particle: true },
      { fr: "les prolonge", pos: "verbe", phon: "yamuddu-hum", arabic: "يَمُدُّهُمْ", position: 4, word_key: "mdd", is_particle: false, sense_retenu: "prolonger" },
      { fr: "dans", phon: "fi", arabic: "فِى", position: 5, word_key: null, is_particle: true },
      { fr: "leur transgression", pos: "nom", phon: "tughyanihim", arabic: "طُغْيَٰنِهِمْ", position: 6, word_key: "tgy", is_particle: false, sense_retenu: "transgresser" },
      { fr: "ils errent", pos: "verbe", phon: "ya'mahun", arabic: "يَعْمَهُونَ", position: 7, word_key: "emh", is_particle: false, sense_retenu: "errer" }
    ]
  },
  {
    verse_id: 23,
    translation_arab: "Ceux-là sont ceux qui ont échangé l'égarement contre la guidance — leur commerce n'a pas été profitable et ils n'étaient pas guidés.",
    full_translation: "Ce sont eux qui ont troqué la bonne voie contre l'égarement. Eh bien, leur négoce n'a point profité. Et ils ne sont pas sur la bonne voie.",
    translation_explanation: `§DEMARCHE§

Le démonstratif **ula'ika** (ceux-là) désigne les hypocrites décrits dans les versets précédents — c'est un renvoi anaphorique.

Le relatif **alladhina** (ceux qui) introduit la qualification des hypocrites par leur acte principal.

Le verbe **ishtaraw** est à l'accompli forme VIII 3MP — « ils ont acheté / échangé ». La forme VIII (ifta'ala) est réfléchie : ils ont fait l'échange pour eux-mêmes. L'accompli dit que l'échange est fait et irréversible.

Le mot **ad-dalalata** est un nom féminin défini à l'accusatif — « l'égarement ». La racine d-l-l signifie s'égarer, perdre le chemin. Le nom est complément direct de ishtaraw — c'est ce qu'ils ont acquis.

Le mot **bi-l-huda** est un nom masculin défini précédé de bi (contre/en échange de) — « contre la guidance ». La racine h-d-y signifie guider, montrer le chemin. La guidance est le prix qu'ils ont payé.

La particule **fa** (alors, et donc) introduit la conséquence.

La négation **ma** précède le verbe **rabihat** à l'accompli 3FS — « n'a pas été profitable ». La racine r-b-h signifie faire du profit. Le féminin s'accorde avec tijara (féminin).

Le mot **tijaratuhum** est un nom féminin avec pronom possessif 3MP — « leur commerce ». La racine t-j-r signifie commercer. Le commerce est métaphorique — il désigne l'ensemble de leurs choix.

La négation **wa ma** introduit le verdict final.

Le verbe **kanu** est à l'accompli 3MP — « ils étaient ». La négation ma kanu dit qu'ils n'ont JAMAIS été dans l'état décrit.

Le mot **muhtadin** est un participe actif forme VIII masculin pluriel à l'accusatif — « guidés ». La forme VIII (ihtada) est réfléchie : se guider soi-même, accepter la guidance. La négation ma kanu muhtadin dit qu'ils ne se sont jamais guidés.

§JUSTIFICATION§

**échangé** — Le sens retenu est « Échange/Transaction ». Le mot « échangé » rend ishtaraw forme VIII — l'acte d'acheter/échanger pour soi-même. L'alternative « acheté » est possible mais « échangé » met en valeur la dimension de troc. L'alternative « troqué » (Hamidullah) est acceptable mais « échangé » est plus neutre.

**l'égarement** — Le sens retenu est « Égarement/Déviation ». Le mot « égarement » rend ad-dalalata — la perte du chemin. L'alternative « l'erreur » est trop faible — la dalala est plus qu'une erreur, c'est la perte totale de direction.

**la guidance** — Le sens retenu est « Guidance/Direction ». Le mot « guidance » rend al-huda — la connaissance du bon chemin. L'alternative « la bonne voie » (Hamidullah) est une périphrase. « Guidance » est un emprunt mais il est désormais courant en français et rend le concept avec précision.

**commerce** — Le sens retenu est « Commerce/Négoce ». Le mot « commerce » rend tijara — l'activité commerciale. L'alternative « négoce » (Hamidullah) est du registre littéraire.

**guidés** — Le sens retenu est « Guidance/Direction ». Le mot « guidés » rend muhtadin — l'état de celui qui a accepté la guidance. L'alternative « sur la bonne voie » (Hamidullah) est une périphrase.

§CRITIQUE§

Hamidullah traduit « Ce sont eux qui ont troqué la bonne voie contre l'égarement ». La traduction étymologique inverse l'ordre pour suivre le texte arabe : ishtaraw ad-dalalata bi-l-huda = « ils ont échangé/acquis l'égarement CONTRE la guidance ». Le complément direct est l'égarement (ce qu'ils ont acquis) et le prix est la guidance (ce qu'ils ont donné). Hamidullah met « la bonne voie » en premier, ce qui change la perspective — dans le texte arabe, l'accent est sur ce qu'ils ont acquis (l'égarement), pas sur ce qu'ils ont perdu. La traduction « leur négoce n'a point profité » est du registre littéraire — « leur commerce n'a pas été profitable » est plus courant.`,
    segments: [
      { fr: "ceux-là", phon: "ula'ika", arabic: "أُو۟لَٰٓئِكَ", position: 1, word_key: null, is_particle: true },
      { fr: "ceux qui", phon: "alladhina", arabic: "ٱلَّذِينَ", position: 2, word_key: null, is_particle: true },
      { fr: "ont échangé", pos: "verbe", phon: "ishtaraw", arabic: "ٱشْتَرَوُا۟", position: 3, word_key: "shry", is_particle: false, sense_retenu: "échanger" },
      { fr: "l'égarement", pos: "nom", phon: "ad-dalalata", arabic: "ٱلضَّلَٰلَةَ", position: 4, word_key: "dll", is_particle: false, sense_retenu: "s'égarer" },
      { fr: "contre la guidance", pos: "nom", phon: "bi-l-huda", arabic: "بِٱلْهُدَىٰ", position: 5, word_key: "hdy", is_particle: false, sense_retenu: "guider" },
      { fr: "et donc ne...pas", phon: "fa-ma", arabic: "فَمَا", position: 6, word_key: null, is_particle: true },
      { fr: "a été profitable", pos: "verbe", phon: "rabihat", arabic: "رَبِحَت", position: 7, word_key: "rbh", is_particle: false, sense_retenu: "gagner" },
      { fr: "leur commerce", pos: "nom", phon: "tijaratuhum", arabic: "تِّجَٰرَتُهُمْ", position: 8, word_key: "tjr", is_particle: false, sense_retenu: "commercer" },
      { fr: "et ne...pas", phon: "wa ma", arabic: "وَمَا", position: 9, word_key: null, is_particle: true },
      { fr: "ils étaient", pos: "verbe", phon: "kanu", arabic: "كَانُوا۟", position: 10, word_key: "kwn", is_particle: false, sense_retenu: "être" },
      { fr: "guidés", pos: "nom", phon: "muhtadin", arabic: "مُهْتَدِينَ", position: 11, word_key: "hdy", is_particle: false, sense_retenu: "guider" }
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
