const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

async function main() {
  const verse_id = 6216; // 110:3

  // --- sbh (فَسَبِّحْ) imp\u00e9ratif forme II ---
  const sbh_axes = {
    sense_chosen: "glorifie",
    concept_chosen: "Glorification/Louange",
    concepts: {
      "Glorification/Louange": {
        status: "retenu",
        senses: ["glorifier", "louer", "prier", "subhana"],
        proof_ctx: "Le sens retenu est \u00ab Glorification/Louange \u00bb. Le verbe sabbi\u1e25 est un imp\u00e9ratif de la forme II (une forme intensive \u2014 glorifier intensivement, pas juste une fois). La glorification est l\u2019acte de proclamer la transcendance et la perfection. C\u2019est un acte ext\u00e9rieur qui sort de celui qui glorifie. Le test de compatibilit\u00e9 : un imp\u00e9ratif peut-il ordonner de glorifier ? Oui \u2014 on peut recevoir l\u2019ordre de proclamer la grandeur de quelqu\u2019un. Distinction avec \u00ab Mouvement/Flottement \u00bb : le flottement (nager, flotter) est un d\u00e9placement physique dans un milieu fluide. La construction bi-\u1e25amdi rabbika (\u00ab par/avec la louange de ton Seigneur \u00bb) \u00e9limine le sens physique \u2014 on ne nage pas \u00ab avec la louange de ton Seigneur \u00bb.",
        axe1_verset: "Le verset dit \u00ab glorifie par la louange de ton Seigneur et demande-Lui le pardon \u00bb. Le champ lexical est celui de la d\u00e9votion : glorifier, louange, Seigneur, pardon. La glorification est l\u2019acte central demand\u00e9 dans ce verset. La pr\u00e9position bi (par/avec) introduit le moyen : glorifier \u00ab par \u00bb la louange. La glorification s\u2019accompagne de la louange \u2014 les deux sont compl\u00e9mentaires.",
        axe2_voisins: "Les versets 1-2 d\u00e9crivent un \u00e9v\u00e9nement (le secours et l\u2019entr\u00e9e massive). Le verset 3 donne la r\u00e9action \u00e0 avoir : glorifier et demander pardon. La particule fa (\u00ab alors \u00bb) marque la cons\u00e9quence directe. La glorification est la r\u00e9ponse naturelle \u00e0 la constatation du secours divin et du basculement massif.",
        axe3_sourate: "La sourate a une structure causale : quand le secours vient (v1) et que les gens entrent (v2), alors glorifie (v3). La glorification est la conclusion logique de la sourate \u2014 c\u2019est l\u2019acte qui reconna\u00eet que le secours vient de Dieu et que l\u2019ouverture est Son \u0153uvre.",
        axe4_coherence: "Le Coran utilise sabbi\u1e25 fr\u00e9quemment pour la glorification de Dieu. En 15:98, \u00ab glorifie (sabbi\u1e25) par la louange de ton Seigneur \u00bb \u2014 m\u00eame construction que 110:3. En 56:96, \u00ab glorifie (sabbi\u1e25) le nom de ton Seigneur, le Grand \u00bb. La construction sabbi\u1e25 bi-\u1e25amdi rabbika est une formule coranique r\u00e9currente qui associe glorification et louange.",
        axe5_frequence: "La glorification est la reconnaissance que le secours et l\u2019ouverture viennent de Dieu, pas de l\u2019effort humain seul. C\u2019est l\u2019humilit\u00e9 du khalifa qui reconna\u00eet que sa mission est soutenue par Dieu. La glorification remet la mission humaine dans sa juste perspective : l\u2019effort humain est n\u00e9cessaire, mais le secours est divin."
      },
      "Mouvement/Flottement": {
        status: "nul",
        senses: ["nager", "flotter", "voyager rapidement"],
        proof_ctx: "Le flottement est un d\u00e9placement physique dans un milieu fluide. La construction bi-\u1e25amdi rabbika (\u00ab par la louange de ton Seigneur \u00bb) rend le sens physique impossible \u2014 on ne nage pas \u00ab par la louange \u00bb. Le contexte est enti\u00e8rement d\u00e9votionnel."
      }
    }
  };

  // --- hmd (بِحَمْدِ) nom en idafa ---
  const hmd_axes = {
    sense_chosen: "louange",
    concept_chosen: "Louange/\u00c9loge",
    concepts: {
      "Louange/\u00c9loge": {
        status: "retenu",
        senses: ["louer", "louange", "\u00e9loge", "lou\u00e9", "digne de louange", "lieu de louange", "banni\u00e8re de louange", "louable"],
        proof_ctx: "Le sens retenu est \u00ab Louange/\u00c9loge \u00bb. Le mot \u1e25amdi est un masdar en idafa avec rabbika \u2014 \u00ab la louange de ton Seigneur \u00bb. La louange est un acte ext\u00e9rieur d\u2019expression positive dirig\u00e9 vers quelqu\u2019un pour ce qu\u2019il est ou ce qu\u2019il fait. C\u2019est inconditionnel \u2014 on loue pour les qualit\u00e9s intrins\u00e8ques, pas pour un bienfait re\u00e7u. Distinction avec \u00ab Gratitude/Remerciement \u00bb : la gratitude est conditionnelle (on remercie apr\u00e8s avoir re\u00e7u un bienfait), tandis que la louange est inconditionnelle (on loue pour ce que l\u2019autre EST, pas pour ce qu\u2019il a FAIT pour nous). Dans ce verset, la louange accompagne la glorification \u2014 c\u2019est la reconnaissance des qualit\u00e9s intrins\u00e8ques de Dieu, ind\u00e9pendamment des bienfaits re\u00e7us.",
        axe1_verset: "Le verset dit \u00ab glorifie par la louange de ton Seigneur \u00bb. La louange est le moyen (bi = par/avec) par lequel la glorification s\u2019accomplit. Le champ lexical (glorifier, louange, Seigneur, pardon) est celui de la d\u00e9votion. La louange s\u2019ins\u00e8re naturellement dans ce champ \u2014 elle est l\u2019expression verbale de la reconnaissance des qualit\u00e9s de Dieu.",
        axe2_voisins: "Les versets 1-2 montrent le secours divin et ses effets. Le verset 3 demande de glorifier avec la louange \u2014 c\u2019est la r\u00e9ponse \u00e0 ce qui a \u00e9t\u00e9 constat\u00e9. La louange est la reconnaissance que Dieu m\u00e9rite d\u2019\u00eatre lou\u00e9 pour ce qu\u2019Il est (ses qualit\u00e9s intrins\u00e8ques), au-del\u00e0 du secours qu\u2019Il a accord\u00e9.",
        axe3_sourate: "La sourate culmine dans l\u2019acte de d\u00e9votion (glorification + louange + pardon). La louange est le contenu de la glorification \u2014 on glorifie EN louant. C\u2019est le sommet de la sourate.",
        axe4_coherence: "Le Coran associe fr\u00e9quemment \u1e25amd et tasb\u012b\u1e25. En 1:2, \u00ab la louange appartient \u00e0 Dieu, Seigneur des mondes \u00bb. En 15:98 et 110:3, la m\u00eame construction sabbi\u1e25 bi-\u1e25amdi rabbika lie les deux actes. La louange coranique est toujours inconditionnelle \u2014 elle reconna\u00eet les qualit\u00e9s de Dieu en elles-m\u00eames.",
        axe5_frequence: "La louange maintient le khalifa dans l\u2019humilit\u00e9 : m\u00eame quand la mission r\u00e9ussit (les gens entrent par groupes), c\u2019est Dieu qui m\u00e9rite la louange, pas l\u2019\u00eatre humain. La louange emp\u00eache l\u2019orgueil qui corromprait la mission de justice."
      },
      "Gratitude/Remerciement": {
        status: "probable",
        senses: ["remercier", "gratitude", "reconnaissance", "satisfait de"],
        proof_ctx: "Le sens \u00ab Gratitude/Remerciement \u00bb d\u00e9signe la reconnaissance pour un bienfait re\u00e7u. La distinction philosophique avec la louange est celle entre le conditionnel et l\u2019inconditionnel : la gratitude r\u00e9pond \u00e0 un bienfait (le secours des versets 1-2), tandis que la louange reconna\u00eet les qualit\u00e9s intrins\u00e8ques ind\u00e9pendamment des bienfaits. Dans ce contexte, la gratitude serait coh\u00e9rente car le secours a \u00e9t\u00e9 re\u00e7u. Mais la construction bi-\u1e25amdi rabbika associe la louange \u00e0 la glorification (tasb\u012b\u1e25), qui est la proclamation de la transcendance de Dieu \u2014 une r\u00e9alit\u00e9 inconditionnelle. La louange accompagne mieux la glorification que la gratitude.",
        axe1_verset: "La gratitude serait coh\u00e9rente avec le champ lexical car le secours a \u00e9t\u00e9 re\u00e7u (v1-2). Mais la construction \u00ab glorifie par la gratitude \u00bb est moins naturelle que \u00ab glorifie par la louange \u00bb. La glorification (proclamation de la transcendance) s\u2019accompagne de la louange (reconnaissance des qualit\u00e9s), pas de la gratitude (remerciement pour un bienfait).",
        axe2_voisins: "Apr\u00e8s le secours et l\u2019ouverture, la gratitude serait une r\u00e9ponse logique. Mais le verset 3 demande aussi le pardon (istagfir) \u2014 la combinaison glorification + gratitude + pardon est moins coh\u00e9rente que glorification + louange + pardon. La louange et le pardon sont deux actes d\u00e9votionnels compl\u00e9mentaires, tandis que la gratitude est une r\u00e9ponse \u00e0 un bienfait.",
        axe3_sourate: "La gratitude est une r\u00e9ponse au secours, ce qui correspondrait au th\u00e8me. Mais la sourate va plus loin que la simple reconnaissance du bienfait \u2014 elle demande la glorification, qui est un acte plus profond.",
        axe4_coherence: "En 1:2, al-\u1e25amdu lill\u0101hi est compris comme la louange (inconditionnelle), pas juste la gratitude. La construction bi-\u1e25amdi rabbika en 15:98 et 110:3 est parall\u00e8le \u00e0 1:2.",
        axe5_frequence: "La gratitude est une vertu du khalifa mais la louange va plus loin car elle reconna\u00eet la grandeur de Dieu en elle-m\u00eame, pas seulement en r\u00e9ponse \u00e0 un bienfait."
      },
      "Feu/Chaleur": { status: "nul", senses: ["chauffer"], proof_ctx: "La chaleur est un ph\u00e9nom\u00e8ne physique sans rapport avec le contexte d\u00e9votionnel." },
      "Lieu/G\u00e9ographie": { status: "nul", senses: ["terre noire"], proof_ctx: "Sens g\u00e9ographique sans rapport avec le contexte." }
    }
  };

  // --- rbb (رَبِّكَ) nom en idafa + pronom ---
  const rbb_axes = {
    sense_chosen: "Seigneur",
    concept_chosen: "Seigneurie/Autorit\u00e9 bienveillante",
    concepts: {
      "Seigneurie/Autorit\u00e9 bienveillante": {
        status: "retenu",
        senses: ["seigneur", "ma\u00eetre", "propri\u00e9taire", "celui qui \u00e9l\u00e8ve", "celui qui entretient", "celui qui poss\u00e8de", "gouverner"],
        proof_ctx: "Le sens retenu est \u00ab Seigneurie/Autorit\u00e9 bienveillante \u00bb. Le mot rabbika est en idafa avec le pronom suffixe -ka (ton) \u2014 \u00ab ton Seigneur \u00bb. La seigneurie est une relation ext\u00e9rieure permanente entre un ma\u00eetre et ce qu\u2019il gouverne. Le seigneur poss\u00e8de, \u00e9l\u00e8ve et entretient. Le test de compatibilit\u00e9 : un nom en idafa avec un pronom possessif peut-il d\u00e9signer le seigneur ? Oui \u2014 \u00ab ton Seigneur \u00bb est la formule d\u2019adresse personnelle la plus directe. Le pronom -ka cr\u00e9e un lien personnel entre le Seigneur et celui \u00e0 qui Il s\u2019adresse.",
        axe1_verset: "Le verset demande de glorifier \u00ab par la louange de ton Seigneur \u00bb. Le Seigneur est le destinataire de la glorification et de la louange. Le champ lexical (glorifier, louange, pardon) est celui de la d\u00e9votion \u2014 le Seigneur est celui \u00e0 qui s\u2019adressent ces actes d\u00e9votionnels.",
        axe2_voisins: "Aux versets 1-2, c\u2019est All\u0101h (le nom propre) qui est mentionn\u00e9. Au verset 3, c\u2019est rabbika (ton Seigneur) \u2014 le passage du nom propre au titre relationnel cr\u00e9e une intimit\u00e9. Le \u00ab ton \u00bb rapproche la relation. Le Seigneur est celui qui a envoy\u00e9 le secours (v1) et dont la voie accueille les gens (v2).",
        axe3_sourate: "La sourate culmina dans l\u2019adresse personnelle : \u00ab ton Seigneur \u00bb. C\u2019est le moment le plus intime de la sourate \u2014 apr\u00e8s les \u00e9v\u00e9nements collectifs (v1-2), on passe \u00e0 la relation personnelle (v3). Le Seigneur est celui avec qui cette relation s\u2019\u00e9tablit.",
        axe4_coherence: "Le Coran utilise rabb 980 fois, le plus souvent avec un pronom possessif (rabbuka, rabbukum, etc.). La construction sabbi\u1e25 bi-\u1e25amdi rabbika appara\u00eet identique en 15:98 et 52:48. Le rabb coranique est toujours celui qui \u00e9l\u00e8ve, entretient et gouverne avec bienveillance.",
        axe5_frequence: "Le Seigneur est celui qui a confi\u00e9 la mission au khalifa et qui le soutient. La relation personnelle (ton Seigneur) rappelle que la mission de justice n\u2019est pas impersonnelle \u2014 elle s\u2019inscrit dans une relation directe avec celui qui a tout cr\u00e9\u00e9 et qui \u00e9l\u00e8ve."
      },
      "Croissance/Augmentation": {
        status: "peu_probable",
        senses: ["augmenter", "cro\u00eetre", "faire grandir", "nourrir", "d\u00e9velopper", "exc\u00e8s", "colline", "\u00e9minence"],
        proof_ctx: "La croissance est un processus graduel de d\u00e9veloppement. Dans le contexte du verset, rabbika ne d\u00e9signe pas une croissance mais un titre relationnel. La construction \u00ab glorifie par la louange de ta croissance \u00bb n\u2019a pas de sens. Le mot rabb dans la construction rabbika est toujours utilis\u00e9 comme titre, jamais comme masdar de \u00ab cro\u00eetre \u00bb.",
        axe1_verset: "Le champ lexical (glorifier, louange, pardon) est d\u00e9votionnel. La croissance est un processus physique ou abstrait qui ne s\u2019ins\u00e8re pas dans ce champ.",
        axe2_voisins: "Les versets 1-2 parlent du secours de Dieu et de l\u2019entr\u00e9e des gens. Le verset 3 demande la glorification du Seigneur, pas la c\u00e9l\u00e9bration de la croissance.",
        axe3_sourate: "La sourate parle d\u2019un basculement et de la r\u00e9ponse d\u00e9votionnelle. La croissance n\u2019est pas le th\u00e8me.",
        axe4_coherence: "Quand le Coran parle de croissance (rabba, yurabb\u012b), c\u2019est dans des contextes d\u2019\u00e9ducation ou de d\u00e9veloppement. Ici c\u2019est un titre, pas un verbe.",
        axe5_frequence: "Sans rapport direct avec la mission de justice dans ce contexte."
      },
      "\u00c9ducation/Accompagnement": { status: "nul", senses: ["\u00e9lever un enfant", "\u00e9duquer", "former", "accompagner la croissance"], proof_ctx: "L\u2019\u00e9ducation est un acte d\u2019accompagnement. Dans cette construction (rabbika = titre), le sens est la seigneurie, pas l\u2019acte d\u2019\u00e9duquer." },
      "Commerce/Usure": { status: "nul", senses: ["usure", "augmentation de dette", "int\u00e9r\u00eat"], proof_ctx: "Sans rapport avec le contexte d\u00e9votionnel." },
      "Souffle/Vent": { status: "nul", senses: ["essoufflement"], proof_ctx: "Sans rapport." },
      "Sens isol\u00e9/Fixer": { status: "nul", senses: ["fixer"], proof_ctx: "Sans rapport." },
      "Sens isol\u00e9/Rassembler": { status: "nul", senses: ["rassembler"], proof_ctx: "Sans rapport." },
      "Sens isol\u00e9/Groupe": { status: "nul", senses: ["groupe"], proof_ctx: "Sans rapport." },
      "Sens isol\u00e9/Confiture": { status: "nul", senses: ["confiture"], proof_ctx: "Sans rapport." }
    }
  };

  // --- gfr (وَٱسْتَغْفِرْهُ) imp\u00e9ratif forme X ---
  const gfr_axes = {
    sense_chosen: "pardon",
    concept_chosen: "Pardon/Couverture",
    concepts: {
      "Pardon/Couverture": {
        status: "retenu",
        senses: ["pardonner", "couvrir", "effacer les p\u00e9ch\u00e9s"],
        proof_ctx: "Le sens retenu est \u00ab Pardon/Couverture \u00bb. Le verbe istagfir est un imp\u00e9ratif de la forme X (une forme qui signifie \u00ab demander que soit fait quelque chose \u00bb \u2014 ici, demander le pardon). Le pardon est l\u2019acte de couvrir la faute et de ne plus en tenir compte. C\u2019est un acte ext\u00e9rieur qui sort du pardonneur et atteint le fautif. Le test de compatibilit\u00e9 : un imp\u00e9ratif forme X peut-il ordonner de demander le pardon ? Oui \u2014 la forme X (istaf\u2019ala) ajoute le sens de \u00ab demander \u00bb au sens de base (couvrir). Le pronom suffixe -hu (Lui) renvoie \u00e0 Dieu \u2014 c\u2019est \u00e0 Dieu qu\u2019on demande de couvrir les fautes. C\u2019est le seul groupe de sens pour cette racine.",
        axe1_verset: "Le verset demande deux actes : glorifier et demander le pardon. Le champ lexical est d\u00e9votionnel. Le pardon compl\u00e8te la glorification : on reconna\u00eet la grandeur de Dieu (glorification) ET on reconna\u00eet ses propres manquements (pardon). Les deux actes sont coordonn\u00e9s par wa (et) \u2014 ils forment un couple indissociable.",
        axe2_voisins: "Les versets 1-2 montrent le secours divin et l\u2019entr\u00e9e massive. Le verset 3 demande la glorification ET le pardon. Le pardon apr\u00e8s le secours est paradoxal en apparence : pourquoi demander pardon quand tout va bien ? C\u2019est parce que le moment du succ\u00e8s est aussi le moment de l\u2019humilit\u00e9 \u2014 reconna\u00eetre que le secours vient de Dieu, pas de soi.",
        axe3_sourate: "La sourate se conclut sur le pardon, ce qui donne au basculement une dimension de renouveau personnel. Le secours collectif (v1-2) s\u2019accompagne d\u2019un examen de conscience personnel (v3). Le pardon ferme le cycle : secours re\u00e7u \u2192 reconnaissance \u2192 purification.",
        axe4_coherence: "Le Coran utilise istagfara (demander le pardon) dans de nombreux contextes. En 71:10, \u00ab demandez pardon (istagfir\u016b) \u00e0 votre Seigneur, Il est grand pardonneur \u00bb. En 47:19, \u00ab demande pardon (istagfir) pour tes manquements \u00bb. La demande de pardon coranique est toujours un acte d\u2019humilit\u00e9 et de reconnaissance de ses limites.",
        axe5_frequence: "Le pardon est essentiel \u00e0 la mission du khalifa car il emp\u00eache l\u2019orgueil. M\u00eame au moment du succ\u00e8s (le secours est venu, les gens entrent), le khalifa doit demander pardon \u2014 c\u2019est le garde-fou contre la corruption du pouvoir et du succ\u00e8s."
      }
    }
  };

  // --- kwn (كَانَ) verbe accompli ---
  const kwn_axes = {
    sense_chosen: "\u00eatre",
    concept_chosen: "\u00catre/Existence",
    concepts: {
      "\u00catre/Existence": {
        status: "retenu",
        senses: ["\u00eatre (verbe incomplet)", "venir \u00e0 l\u2019existence"],
        proof_ctx: "Le sens retenu est \u00ab \u00catre/Existence \u00bb. Le verbe k\u0101na est un verbe incomplet (n\u0101qi\u1e63) \u2014 il relie un sujet \u00e0 un attribut. La construction k\u0101na taww\u0101ban signifie \u00ab il est/\u00e9tait [celui qui accueille le retour] \u00bb. Le verbe k\u0101na n\u2019exprime pas ici un pass\u00e9 r\u00e9volu mais un \u00e9tat permanent \u2014 \u00ab il est et a toujours \u00e9t\u00e9 \u00bb. C\u2019est le sens fondamental de k\u0101na comme verbe d\u2019attribution.",
        axe1_verset: "Le verset dit innahu k\u0101na taww\u0101ban (\u00ab certes Il est celui qui accueille le retour \u00bb). K\u0101na relie le pronom -hu (Il, Dieu) \u00e0 l\u2019attribut taww\u0101b. Le champ lexical est celui de l\u2019attribution d\u2019une qualit\u00e9 permanente \u00e0 Dieu. K\u0101na est le verbe de liaison qui \u00e9tablit cette attribution.",
        axe2_voisins: "Le verset 3 est la conclusion de la sourate. Apr\u00e8s les ordres (glorifie, demande pardon), k\u0101na introduit la raison : \u00ab car Il est celui qui accueille le retour \u00bb. K\u0101na justifie pourquoi il faut demander pardon \u2014 parce que Dieu a cette qualit\u00e9 permanente.",
        axe3_sourate: "La sourate se termine sur une affirmation de la nature divine. K\u0101na \u00e9tablit que cette qualit\u00e9 (accueillir le retour) n\u2019est pas circonstancielle mais permanente. C\u2019est un attribut ontologique.",
        axe4_coherence: "Le Coran utilise k\u0101na + attribut pour d\u00e9crire les qualit\u00e9s permanentes de Dieu dans de nombreux versets. En 4:96, \u00ab Dieu est (k\u0101na) pardonneur, mis\u00e9ricordieux \u00bb. En 33:50, \u00ab Dieu est (k\u0101na) connaisseur, indulgent \u00bb. K\u0101na dans ces constructions n\u2019exprime pas le pass\u00e9 mais la permanence.",
        axe5_frequence: "L\u2019\u00eatre de Dieu comme \u00ab celui qui accueille le retour \u00bb est le fondement de la mission du khalifa : m\u00eame quand le khalifa faute, Dieu est l\u00e0 pour accueillir son retour. Cette qualit\u00e9 permanente rend la mission possible malgr\u00e9 les erreurs humaines."
      },
      "Humilit\u00e9/Soumission": { status: "nul", senses: ["\u00eatre humble soumis"], proof_ctx: "L\u2019humilit\u00e9 est un \u00e9tat int\u00e9rieur. K\u0101na dans ce verset est un verbe de liaison suivi d\u2019un attribut (taww\u0101b), pas un verbe plein exprimant l\u2019humilit\u00e9." },
      "Lieu/\u00c9tat": { status: "nul", senses: ["lieu", "reste \u00e0 ta place", "\u00e9tat condition", "motif raison", "devenir comme"], proof_ctx: "Le lieu et l\u2019\u00e9tat sont des sens physiques. K\u0101na ici fonctionne comme verbe incomplet d\u2019attribution, pas comme indicateur de lieu." }
    }
  };

  // --- twb (تَوَّابًۢا) forme fa\u2019\u2019\u0101l, accusatif ---
  const twb_axes = {
    sense_chosen: "celui qui accueille constamment le retour",
    concept_chosen: "Retour/Repentir",
    concepts: {
      "Retour/Repentir": {
        status: "retenu",
        senses: ["revenir", "se repentir", "accepter le repentir", "repentir"],
        proof_ctx: "Le sens retenu est \u00ab Retour/Repentir \u00bb. Le mot taww\u0101b est de la forme fa\u2019\u2019\u0101l (une forme d\u2019intensit\u00e9 et de r\u00e9p\u00e9tition \u2014 celui qui fait constamment cette action). La racine t-w-b d\u00e9signe l\u2019acte de revenir, de se retourner vers la bonne direction. Le taww\u0101b est donc celui qui revient constamment ou celui qui accueille constamment le retour. Dans ce verset, le sujet est Dieu (innahu = certes Il) \u2014 Dieu est taww\u0101b, c\u2019est-\u00e0-dire celui qui accueille constamment le retour de ceux qui reviennent vers Lui. Le test de compatibilit\u00e9 : un attribut de k\u0101na (\u00e0 l\u2019accusatif) peut-il d\u00e9signer cette qualit\u00e9 permanente ? Oui \u2014 la forme fa\u2019\u2019\u0101l exprime pr\u00e9cis\u00e9ment la permanence et l\u2019intensit\u00e9, compatible avec k\u0101na qui d\u00e9signe un \u00e9tat permanent. C\u2019est le seul groupe de sens pour cette racine.",
        axe1_verset: "Le verset demande de demander pardon (istagfir) puis explique pourquoi : \u00ab Il est celui qui accueille constamment le retour \u00bb. Le champ lexical (pardon, retour) est celui de la r\u00e9conciliation. Demander pardon a un sens parce que Dieu accueille le retour \u2014 les deux notions se compl\u00e8tent. Le pardon est l\u2019acte de l\u2019humain (demander), le retour est l\u2019accueil de Dieu.",
        axe2_voisins: "Les versets 1-2 montrent un mouvement de masse vers la voie de Dieu. Le verset 3 ferme le cycle : m\u00eame celui qui a d\u00e9j\u00e0 failli peut revenir car Dieu accueille constamment le retour. Le taww\u0101b est la garantie que le retour est toujours possible \u2014 la porte n\u2019est jamais ferm\u00e9e.",
        axe3_sourate: "La sourate d\u00e9crit un basculement et se conclut sur l\u2019accueil du retour. Le message est : le secours vient, les gens entrent, et Dieu accueille constamment le retour. C\u2019est la derni\u00e8re parole de la sourate \u2014 une invitation permanente au retour.",
        axe4_coherence: "Le Coran utilise taww\u0101b 11 fois, toujours pour d\u00e9crire Dieu. En 2:37, \u00ab Il accueillit son retour (t\u0101ba \u2019alayhi), certes Il est le Taww\u0101b, le Mis\u00e9ricordieux \u00bb. En 2:128, \u00ab accueille notre retour (tub \u2019alayn\u0101), certes Tu es le Taww\u0101b, le Mis\u00e9ricordieux \u00bb. Le taww\u0101b coranique est toujours Dieu qui accueille le retour des \u00eatres humains.",
        axe5_frequence: "La qualit\u00e9 de taww\u0101b est fondamentale pour la mission du khalifa : le khalifa est un \u00eatre humain qui peut faillir. Savoir que Dieu accueille constamment le retour donne le courage de poursuivre la mission malgr\u00e9 les \u00e9checs et les erreurs. C\u2019est le filet de s\u00e9curit\u00e9 moral qui rend la mission tenable."
      }
    }
  };

  // INSERT verse_word_analyses
  const vwa3 = [
    { verse_id, word_key: 'sbh', sense_chosen: 'glorifie', analysis_axes: sbh_axes, position: 1 },
    { verse_id, word_key: 'hmd', sense_chosen: 'louange', analysis_axes: hmd_axes, position: 2 },
    { verse_id, word_key: 'rbb', sense_chosen: 'Seigneur', analysis_axes: rbb_axes, position: 3 },
    { verse_id, word_key: 'gfr', sense_chosen: 'pardon', analysis_axes: gfr_axes, position: 4 },
    { verse_id, word_key: 'kwn', sense_chosen: '\u00eatre', analysis_axes: kwn_axes, position: 6 },
    { verse_id, word_key: 'twb', sense_chosen: 'celui qui accueille constamment le retour', analysis_axes: twb_axes, position: 7 },
  ];

  const { data: inserted, error: e1 } = await supabase.from('verse_word_analyses').insert(vwa3).select();
  if (e1) { console.error('Error inserting vwa v3:', e1); return; }
  console.log('Inserted', inserted.length, 'verse_word_analyses for v3');

  // UPDATE verse_analyses
  const translation_arab = "Alors glorifie par la louange de ton Seigneur et demande-Lui le pardon. Il est celui qui accueille constamment le retour.";
  const translation_explanation = "\u00a7DEMARCHE\u00a7\n\nLa particule **fa** (alors/donc) au d\u00e9but marque une cons\u00e9quence directe des deux versets pr\u00e9c\u00e9dents \u2014 puisque le secours et l\u2019ouverture viennent et que les gens entrent par groupes, alors fais ceci.\n\nLe verbe **sabbi\u1e25** est un imp\u00e9ratif de la forme II (une forme qui intensifie l\u2019action \u2014 glorifier intensivement, pas juste une fois mais de mani\u00e8re appuy\u00e9e et r\u00e9p\u00e9t\u00e9e). La pr\u00e9position **bi** dans bi-\u1e25amdi introduit le moyen ou l\u2019accompagnement : glorifie \u00ab par \u00bb ou \u00ab avec \u00bb la louange.\n\nLe mot **\u1e25amdi** est un masdar (nom d\u2019action) en idafa avec **rabbika** : la louange appartient \u00e0 ton Seigneur. Le pronom suffixe **-ka** (ton) dans rabbika cr\u00e9e un lien personnel direct entre celui \u00e0 qui on s\u2019adresse et son Seigneur.\n\nLe verbe **istaghfirhu** est un imp\u00e9ratif de la forme X (une forme qui signifie \u00ab demander que soit fait quelque chose \u00bb). La racine gh-f-r d\u00e9signe, d\u2019apr\u00e8s les sources \u00e9tymologiques, l\u2019acte de couvrir une faute et de ne plus en tenir compte. La forme X (istaghfara) signifie donc \u00ab demander que la faute soit couverte \u00bb. Le pronom suffixe **-hu** (Lui) renvoie \u00e0 Dieu.\n\nLa particule **inna** (certes) dans innahu introduit une affirmation emphatique \u2014 elle insiste sur la v\u00e9rit\u00e9 de ce qui suit.\n\nLe verbe **k\u0101na** est un verbe incomplet (un verbe qui ne d\u00e9signe pas une action mais relie un sujet \u00e0 un attribut). Suivi de taww\u0101ban \u00e0 l\u2019accusatif, il dit que Dieu \u00ab est \u00bb celui qui accueille le retour. K\u0101na n\u2019exprime pas ici un pass\u00e9 r\u00e9volu mais un \u00e9tat permanent \u2014 Dieu est et a toujours \u00e9t\u00e9 ainsi.\n\nLe mot **taww\u0101b** est de la forme fa\u2019\u2019\u0101l (une forme d\u2019intensit\u00e9 et de r\u00e9p\u00e9tition qui dit que la personne fait cette action constamment, de mani\u00e8re permanente). La racine t-w-b d\u00e9signe le retour. Le taww\u0101b est donc celui qui accueille constamment le retour \u2014 chaque fois que quelqu\u2019un revient, Il l\u2019accueille.\n\n\u00a7JUSTIFICATION\u00a7\n\n**glorifie** \u2014 Le sens retenu est \u00ab Glorification/Louange \u00bb. Le mot \u00ab glorifie \u00bb est choisi car il exprime l\u2019acte de proclamer la grandeur et la transcendance. L\u2019alternative \u00ab nage \u00bb (sens physique de la racine) est hors contexte \u2014 on ne nage pas \u00ab par la louange de ton Seigneur \u00bb. L\u2019alternative \u00ab loue \u00bb est \u00e9cart\u00e9e car elle se confondrait avec \u1e25amd (louange) qui est dans le m\u00eame verset \u2014 la glorification (tasb\u012b\u1e25) et la louange (\u1e25amd) sont deux actes distincts associ\u00e9s dans le verset.\n\n**louange** \u2014 Le sens retenu est \u00ab Louange/\u00c9loge \u00bb. Le mot \u00ab louange \u00bb est choisi car il exprime l\u2019\u00e9loge inconditionnel pour les qualit\u00e9s intrins\u00e8ques. L\u2019alternative \u00ab gratitude \u00bb est \u00e9cart\u00e9e car la gratitude est conditionnelle (on remercie apr\u00e8s un bienfait re\u00e7u), tandis que la louange est inconditionnelle (on loue pour ce que l\u2019autre est).\n\n**Seigneur** \u2014 Le sens retenu est \u00ab Seigneurie/Autorit\u00e9 bienveillante \u00bb. Le mot \u00ab Seigneur \u00bb est choisi car il combine l\u2019autorit\u00e9 (celui qui gouverne) et la bienveillance (celui qui \u00e9l\u00e8ve et entretient). L\u2019alternative \u00ab ma\u00eetre \u00bb manque la dimension d\u2019accompagnement dans la croissance. L\u2019alternative \u00ab propri\u00e9taire \u00bb r\u00e9duit la relation \u00e0 une possession mat\u00e9rielle.\n\n**pardon** \u2014 Le sens retenu est \u00ab Pardon/Couverture \u00bb. Le mot \u00ab pardon \u00bb est choisi car il est direct et courant. La forme X (istaghfir) signifie \u00ab demande le pardon \u00bb \u2014 demande que la faute soit couverte et effac\u00e9e. L\u2019alternative \u00ab couverture \u00bb est le sens physique premier mais trop abstrait pour la traduction.\n\n**celui qui accueille constamment le retour** \u2014 Le sens retenu est \u00ab Retour/Repentir \u00bb. L\u2019expression \u00ab celui qui accueille constamment le retour \u00bb est choisie car elle rend la forme fa\u2019\u2019\u0101l (intensit\u00e9 et r\u00e9p\u00e9tition) et le sens de la racine (revenir). L\u2019alternative \u00ab celui qui pardonne beaucoup \u00bb est \u00e9cart\u00e9e car elle confondrait avec gfr (pardon) \u2014 twb est sp\u00e9cifiquement le retour, pas le pardon. L\u2019alternative \u00ab celui qui se repent \u00bb ne convient pas car le sujet est Dieu \u2014 Dieu n\u2019a pas \u00e0 se repentir, c\u2019est Lui qui accueille le retour des autres.";

  const segments = [
    { fr: "alors glorifie", pos: "verbe", phon: "fa-sabbi\u1e25", arabic: "\u0641\u064e\u0633\u064e\u0628\u0651\u0650\u062d\u0652", position: 1, word_key: "sbh", is_particle: false, sense_retenu: "glorifier" },
    { fr: "par la louange", pos: "nom", phon: "bi-\u1e25amdi", arabic: "\u0628\u0650\u062d\u064e\u0645\u0652\u062f\u0650", position: 2, word_key: "hmd", is_particle: false, sense_retenu: "louange" },
    { fr: "de ton Seigneur", pos: "nom", phon: "rabbika", arabic: "\u0631\u064e\u0628\u0651\u0650\u0643\u064e", position: 3, word_key: "rbb", is_particle: false, sense_retenu: "seigneur" },
    { fr: "et demande-Lui le pardon", pos: "verbe", phon: "wa-staghfirhu", arabic: "\u0648\u0671\u0633\u0652\u062a\u064e\u063a\u0652\u0641\u0650\u0631\u0652\u0647\u064f", position: 4, word_key: "gfr", is_particle: false, sense_retenu: "pardonner" },
    { fr: "certes Il", phon: "innahu", arabic: "\u0625\u0650\u0646\u0651\u064e\u0647\u064f\u0648", position: 5, word_key: null, is_particle: true },
    { fr: "est", pos: "verbe", phon: "k\u0101na", arabic: "\u0643\u064e\u0627\u0646\u064e", position: 6, word_key: "kwn", is_particle: false, sense_retenu: "\u00eatre (verbe incomplet)" },
    { fr: "celui qui accueille constamment le retour", pos: "nom", phon: "taww\u0101ban", arabic: "\u062a\u064e\u0648\u0651\u064e\u0627\u0628\u064b\u06e2\u0627", position: 7, word_key: "twb", is_particle: false, sense_retenu: "accepter le repentir" }
  ];

  const { error: e2 } = await supabase.from('verse_analyses').update({
    translation_arab,
    translation_explanation,
    segments
  }).eq('id', 6579);
  if (e2) console.error('Error updating verse_analyses v3:', e2);
  else console.log('Updated verse_analyses for v3');

  console.log('\nVERSET 110:3 \u2014 TERMIN\u00c9');
  console.log('  sbh (\u0633 \u0628 \u062d) \u2192 sens "Glorification/Louange" \u2192 mot fran\u00e7ais "glorifie"');
  console.log('  hmd (\u062d \u0645 \u062f) \u2192 sens "Louange/\u00c9loge" \u2192 mot fran\u00e7ais "louange"');
  console.log('  rbb (\u0631 \u0628 \u0628) \u2192 sens "Seigneurie/Autorit\u00e9 bienveillante" \u2192 mot fran\u00e7ais "Seigneur"');
  console.log('  gfr (\u063a \u0641 \u0631) \u2192 sens "Pardon/Couverture" \u2192 mot fran\u00e7ais "pardon"');
  console.log('  kwn (\u0643 \u0648 \u0646) \u2192 sens "\u00catre/Existence" \u2192 mot fran\u00e7ais "est"');
  console.log('  twb (\u062a \u0648 \u0628) \u2192 sens "Retour/Repentir" \u2192 mot fran\u00e7ais "celui qui accueille constamment le retour"');
  console.log('  Traduction : "' + translation_arab + '"');
}
main().catch(console.error);
