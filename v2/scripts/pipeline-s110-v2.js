const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

async function main() {
  const verse_id = 6215; // 110:2

  // --- ray (وَرَأَيْتَ) verbe accompli 2ème pers ---
  const ray_axes = {
    sense_chosen: "voir",
    concept_chosen: "Vision/Perception",
    concepts: {
      "Vision/Perception": {
        status: "retenu",
        senses: ["voir", "percevoir"],
        proof_ctx: "Le sens retenu est \u00ab Vision/Perception \u00bb. Le verbe ra\u2019ayta est \u00e0 l\u2019accompli 2\u00e8me personne \u2014 \u00ab tu as vu \u00bb. Il est suivi d\u2019un compl\u00e9ment direct (an-n\u0101sa) et d\u2019une proposition d\u2019\u00e9tat (yadkhul\u016bna) \u2014 c\u2019est la construction de la perception directe : voir quelqu\u2019un en train de faire quelque chose. La vision est un acte de perception directionnel du voyant vers le vu. Distinction avec \u00ab Jugement/Avis \u00bb : l\u2019opinion est un jugement int\u00e9rieur apr\u00e8s r\u00e9flexion, tandis que la vision est la perception directe d\u2019un fait observable. Le verset d\u00e9crit un ph\u00e9nom\u00e8ne visible (les gens qui entrent par groupes), pas une opinion personnelle. Distinction avec \u00ab Apparition \u00bb : l\u2019apparition est quand quelque chose devient visible, mais ici c\u2019est le sujet qui voit, pas l\u2019objet qui appara\u00eet.",
        axe1_verset: "Le verset dit \u00ab et tu vois les gens entrer dans la voie de Dieu par groupes \u00bb. Le verbe \u00ab voir \u00bb est suivi de son compl\u00e9ment direct (les gens) et d\u2019une action en cours (entrer). Le champ lexical est celui de la perception directe d\u2019un ph\u00e9nom\u00e8ne de masse. La vision porte sur un \u00e9v\u00e9nement ext\u00e9rieur observable : des groupes de gens qui entrent. C\u2019est la constatation visuelle d\u2019un changement massif.",
        axe2_voisins: "Le verset 1 donne la cause (le secours et l\u2019ouverture), le verset 2 donne la cons\u00e9quence observable : on voit les gens entrer. La vision est le lien entre la cause (v1) et la r\u00e9action (v3). Le verset 3 demande de glorifier \u2014 c\u2019est parce que tu as VU ce ph\u00e9nom\u00e8ne que tu dois glorifier. La vision est la preuve qui justifie la glorification.",
        axe3_sourate: "La sourate d\u00e9crit un basculement. La vision au verset 2 est la fa\u00e7on dont ce basculement est constat\u00e9 : on le voit de ses propres yeux. Le th\u00e8me exige une perception directe, pas une opinion ou une apparition. La vision rend le basculement concret et ind\u00e9niable.",
        axe4_coherence: "Le Coran utilise ra\u2019\u0101 (voir) dans de nombreux contextes de constatation directe. En 105:1, \u00ab n\u2019as-tu pas vu (alam tara) comment ton Seigneur a agi \u00bb \u2014 la vision sert \u00e0 constater l\u2019action divine. En 110:2, la m\u00eame structure (ra\u2019ayta) sert \u00e0 constater l\u2019effet du secours divin. Le Coran utilise la vision comme preuve qui appelle une r\u00e9action.",
        axe5_frequence: "La vision du basculement est li\u00e9e \u00e0 la mission humaine car elle montre que l\u2019effort de justice porte ses fruits. Voir les gens entrer massivement dans la voie de Dieu est la preuve visible que la mission est en train de r\u00e9ussir. Cette constatation visuelle appelle la gratitude (verset 3)."
      },
      "Jugement/Avis": {
        status: "peu_probable",
        senses: ["opinion", "avis"],
        proof_ctx: "Le sens \u00ab Jugement/Avis \u00bb d\u00e9signe une opinion form\u00e9e apr\u00e8s r\u00e9flexion. La distinction philosophique avec la vision est celle entre le constat direct et l\u2019interpr\u00e9tation. Le verset d\u00e9crit un ph\u00e9nom\u00e8ne ext\u00e9rieur observable (les gens entrent par groupes) \u2014 c\u2019est un fait qu\u2019on voit, pas une opinion qu\u2019on se forme. La construction ra\u2019ayta + accusatif + \u1e25\u0101l (proposition d\u2019\u00e9tat) est la construction classique de la perception visuelle directe, pas du jugement.",
        axe1_verset: "Le verset d\u00e9crit un ph\u00e9nom\u00e8ne de masse : les gens entrent par groupes. C\u2019est un \u00e9v\u00e9nement ext\u00e9rieur visible, pas un avis subjectif. Le champ lexical (gens, entrer, groupes) est celui de l\u2019action observable, pas de la r\u00e9flexion personnelle.",
        axe2_voisins: "Si le verset 2 exprimait une opinion, la cons\u00e9quence au verset 3 (glorifier) serait faible \u2014 on ne glorifie pas sur la base d\u2019une opinion mais sur la base d\u2019un constat. La vision directe rend la glorification l\u00e9gitime.",
        axe3_sourate: "La sourate d\u00e9crit un basculement historique. Un tel basculement est constat\u00e9 par les yeux, pas par une opinion.",
        axe4_coherence: "Le Coran distingue nettement la vision (ra\u2019\u0101 + accusatif) de l\u2019opinion (ra\u2019y, nom). Ici c\u2019est le verbe suivi d\u2019un accusatif \u2014 c\u2019est la vision directe.",
        axe5_frequence: "L\u2019opinion est subjective et ne constitue pas une base suffisante pour la glorification demand\u00e9e au verset 3."
      },
      "Apparition": {
        status: "nul",
        senses: ["appara\u00eetre"],
        proof_ctx: "L\u2019apparition signifie devenir visible. Mais ici c\u2019est le sujet (tu) qui voit, pas l\u2019objet qui appara\u00eet. Le verbe est actif (ra\u2019ayta = tu as vu), pas un verbe d\u2019apparition."
      }
    }
  };

  // --- nws (ٱلنَّاسَ) nom d\u00e9fini al-, accusatif ---
  const nws_axes = {
    sense_chosen: "gens",
    concept_chosen: "Humanit\u00e9/Peuple",
    concepts: {
      "Humanit\u00e9/Peuple": {
        status: "retenu",
        senses: ["gens", "\u00eatres humains", "peuple"],
        proof_ctx: "Le sens retenu est \u00ab Humanit\u00e9/Peuple \u00bb. Le mot an-n\u0101sa porte l\u2019article al- (\u00ab les gens \u00bb connus, l\u2019ensemble des gens) et est \u00e0 l\u2019accusatif (compl\u00e9ment direct de \u00ab voir \u00bb). Le test de compatibilit\u00e9 : un nom d\u00e9fini peut-il identifier les gens comme une r\u00e9alit\u00e9 connue ? Oui \u2014 an-n\u0101s d\u00e9signe l\u2019ensemble des \u00eatres humains, une r\u00e9alit\u00e9 universelle et identifiable.",
        axe1_verset: "Le verset d\u00e9crit les gens qui entrent dans la voie de Dieu par groupes. Le champ lexical (entrer, voie, groupes) est celui du mouvement collectif humain. Les gens sont les acteurs de ce mouvement \u2014 ce sont eux qui entrent. Le mot an-n\u0101s d\u00e9signe l\u2019ensemble indiff\u00e9renci\u00e9 des \u00eatres humains, pas un groupe sp\u00e9cifique.",
        axe2_voisins: "Au verset 1, le secours et l\u2019ouverture cr\u00e9ent les conditions. Au verset 2, les gens r\u00e9pondent en entrant massivement. Au verset 3, la cons\u00e9quence est la glorification. Les gens sont le sujet de la r\u00e9action au secours divin \u2014 c\u2019est l\u2019humanit\u00e9 dans son ensemble qui se met en mouvement.",
        axe3_sourate: "La sourate d\u00e9crit un basculement de masse. Les gens sont ceux qui basculent \u2014 ce ne sont pas des individus isol\u00e9s mais une masse humaine. Le mot an-n\u0101s avec l\u2019article al- englobe tout le monde, ce qui souligne le caract\u00e8re massif du mouvement.",
        axe4_coherence: "Le Coran utilise an-n\u0101s 241 fois pour d\u00e9signer les \u00eatres humains collectivement. En 2:8, \u00ab et parmi les gens (an-n\u0101s) il y a ceux qui disent... \u00bb. En 114:1, \u00ab le Seigneur des gens (an-n\u0101s) \u00bb. Le mot d\u00e9signe toujours l\u2019humanit\u00e9 dans sa totalit\u00e9 ou dans sa g\u00e9n\u00e9ralit\u00e9.",
        axe5_frequence: "Les gens qui entrent dans la voie de Dieu par groupes repr\u00e9sentent l\u2019extension de la civilisation de justice. La mission du khalifa est de guider l\u2019humanit\u00e9 vers la justice \u2014 quand les gens entrent massivement, c\u2019est le signe que cette mission porte ses fruits."
      },
      "Perception/Visibilit\u00e9": { status: "nul", senses: ["voir de loin", "\u00eatre visible"], proof_ctx: "La perception \u00e0 distance n\u2019a aucun rapport avec le contexte. Le mot est en position de compl\u00e9ment direct de \u00ab voir \u00bb \u2014 il d\u00e9signe ceux qui sont vus, pas l\u2019acte de voir." },
      "Sens isol\u00e9/Oublier": { status: "nul", senses: ["oublier"], proof_ctx: "L\u2019oubli est un \u00e9tat int\u00e9rieur sans rapport avec le verset." },
      "Sens isol\u00e9/\u00catre": { status: "nul", senses: ["\u00eatre agit\u00e9"], proof_ctx: "L\u2019agitation est un \u00e9tat physique sans rapport avec le contexte de l\u2019entr\u00e9e massive dans la voie de Dieu." }
    }
  };

  // --- dxl (يَدْخُلُونَ) verbe inaccompli 3\u00e8me pluriel ---
  const dxl_axes = {
    sense_chosen: "entrer",
    concept_chosen: "Entr\u00e9e/P\u00e9n\u00e9tration",
    concepts: {
      "Entr\u00e9e/P\u00e9n\u00e9tration": {
        status: "retenu",
        senses: ["entrer", "p\u00e9n\u00e9trer", "acc\u00e9der", "introduire"],
        proof_ctx: "Le sens retenu est \u00ab Entr\u00e9e/P\u00e9n\u00e9tration \u00bb. Le verbe yadkhul\u016bna est \u00e0 l\u2019inaccompli 3\u00e8me personne pluriel \u2014 \u00ab ils entrent \u00bb (action en cours, qui se r\u00e9p\u00e8te). L\u2019entr\u00e9e est le passage de l\u2019ext\u00e9rieur \u00e0 l\u2019int\u00e9rieur \u2014 c\u2019est directionnel de dehors vers dedans. Le test de compatibilit\u00e9 : un verbe \u00e0 l\u2019inaccompli peut-il exprimer l\u2019entr\u00e9e ? Oui \u2014 l\u2019inaccompli indique que les gens entrent continuellement, pas une seule fois. C\u2019est le seul sens pertinent \u2014 le sens \u00ab Ressource/revenu \u00bb est hors sujet.",
        axe1_verset: "Le verset dit que les gens entrent dans la voie de Dieu par groupes. Le champ lexical est celui du mouvement collectif : voir, gens, entrer, voie, groupes. L\u2019entr\u00e9e est le mouvement central \u2014 c\u2019est ce que les gens font. La pr\u00e9position f\u012b (dans) confirme le sens directionnel : ils passent de l\u2019ext\u00e9rieur \u00e0 l\u2019int\u00e9rieur de quelque chose.",
        axe2_voisins: "Le verset 1 parle de l\u2019ouverture (al-fat\u1e25) \u2014 quand quelque chose s\u2019ouvre, on peut y entrer. L\u2019entr\u00e9e est la cons\u00e9quence directe de l\u2019ouverture. La s\u00e9quence est parfaite : secours \u2192 ouverture \u2192 entr\u00e9e. Le verset 3 demande la glorification \u2014 c\u2019est parce que l\u2019entr\u00e9e massive a eu lieu qu\u2019il faut glorifier.",
        axe3_sourate: "La sourate d\u00e9crit un basculement de masse. L\u2019entr\u00e9e massive (soulign\u00e9e par \u00ab par groupes \u00bb et l\u2019inaccompli qui dit que \u00e7a continue) est la manifestation concr\u00e8te de ce basculement. Les gens ne restent pas dehors \u2014 ils entrent, ils franchissent le seuil.",
        axe4_coherence: "Le Coran utilise dakhala (entrer) pour le passage d\u2019un \u00e9tat \u00e0 un autre. En 2:208, \u00ab entrez (udkhul\u016b) dans la soumission enti\u00e8rement \u00bb \u2014 l\u2019entr\u00e9e est l\u2019adh\u00e9sion compl\u00e8te. En 39:73, \u00ab entrez-y (udkhul\u016bh\u0101) pour y demeurer \u00bb \u2014 l\u2019entr\u00e9e est le passage vers un nouvel \u00e9tat permanent. L\u2019entr\u00e9e dans le Coran est toujours un changement d\u2019\u00e9tat d\u00e9cisif.",
        axe5_frequence: "L\u2019entr\u00e9e des gens dans la voie de Dieu est l\u2019extension de la civilisation de justice. Quand les gens entrent, ils adoptent un cadre de vie fond\u00e9 sur la justice et l\u2019\u00e9quit\u00e9. L\u2019entr\u00e9e massive montre que la mission humaine est en train de r\u00e9ussir \u00e0 grande \u00e9chelle."
      },
      "Ressource": {
        status: "nul",
        senses: ["revenu"],
        proof_ctx: "Le revenu est ce qui entre dans les biens mat\u00e9riels. Le verset parle de gens qui entrent dans une voie, pas de biens qui entrent dans un patrimoine."
      }
    }
  };

  // --- dyn (دِينِ) nom en idafa avec Allah ---
  const dyn_axes = {
    sense_chosen: "voie",
    concept_chosen: "Religion/Syst\u00e8me",
    concepts: {
      "Religion/Syst\u00e8me": {
        status: "retenu",
        senses: ["religion", "syst\u00e8me de croyances", "pratique", "coutume", "habitude"],
        proof_ctx: "Le sens retenu est \u00ab Religion/Syst\u00e8me \u00bb. Le mot d\u012bni est en idafa avec All\u0101h \u2014 \u00ab la voie de Dieu \u00bb. Le d\u012bn est un ensemble de pratiques et de r\u00e8gles de vie auxquelles on se conforme \u2014 c\u2019est un cadre ext\u00e9rieur permanent qui structure la vie. Le test de compatibilit\u00e9 : un nom en idafa peut-il \u00eatre rattach\u00e9 \u00e0 Dieu ? Oui \u2014 d\u012bnu ll\u0101hi est \u00ab le syst\u00e8me/la voie de Dieu \u00bb. Distinction avec \u00ab Ob\u00e9issance/Soumission \u00bb : l\u2019ob\u00e9issance est l\u2019acte de se conformer, tandis que le d\u012bn est le cadre dans lequel on entre. Le verset dit que les gens \u00ab entrent dans \u00bb (yadkhul\u016bna f\u012b) \u2014 on entre dans un cadre, un syst\u00e8me, une voie. On n\u2019entre pas \u00ab dans \u00bb l\u2019ob\u00e9issance \u2014 on ob\u00e9it, on ne passe pas un seuil. Distinction avec \u00ab R\u00e9tribution/Compte \u00bb : la r\u00e9tribution est l\u2019acte de rendre \u00e0 chacun ce qu\u2019il m\u00e9rite, mais on n\u2019\u00ab entre pas dans \u00bb une r\u00e9tribution \u2014 on la subit ou on la re\u00e7oit.",
        axe1_verset: "Le verset dit que les gens entrent dans le d\u012bn de Dieu. Le verbe entrer (dakhala + f\u012b) exige un espace dans lequel on p\u00e9n\u00e8tre. Le d\u012bn au sens de syst\u00e8me/voie est cet espace \u2014 un cadre de vie structur\u00e9 dans lequel on peut entrer. Les autres mots du verset (gens, entrer, groupes) forment le champ lexical du mouvement collectif vers un cadre commun.",
        axe2_voisins: "Le verset 1 parle d\u2019ouverture (fat\u1e25) \u2014 ce qui s\u2019ouvre pour que les gens puissent y entrer, c\u2019est la voie de Dieu. Le verset 3 demande de glorifier Dieu \u2014 c\u2019est la cons\u00e9quence de voir les gens entrer dans Sa voie. La voie est ce qui relie l\u2019ouverture (cause) \u00e0 l\u2019entr\u00e9e (effet).",
        axe3_sourate: "La sourate d\u00e9crit un basculement : les gens passent de l\u2019ext\u00e9rieur \u00e0 l\u2019int\u00e9rieur d\u2019un cadre de vie. Ce cadre est la voie de Dieu \u2014 un syst\u00e8me de vie qui englobe croyances et pratiques. Le basculement est l\u2019adh\u00e9sion massive \u00e0 ce cadre.",
        axe4_coherence: "Le Coran utilise d\u012bn dans de nombreux contextes pour d\u00e9signer un cadre de vie complet. En 3:19, \u00ab le d\u012bn aupr\u00e8s de Dieu est l\u2019isl\u0101m (la soumission) \u00bb. En 109:6, \u00ab \u00e0 vous votre d\u012bn, \u00e0 moi mon d\u012bn \u00bb \u2014 le d\u012bn est un cadre personnel de vie. En 2:256, \u00ab pas de contrainte dans le d\u012bn \u00bb. Le d\u012bn coranique est toujours un syst\u00e8me de vie global, pas juste un acte d\u2019ob\u00e9issance ou une r\u00e9tribution.",
        axe5_frequence: "La voie de Dieu est le cadre de la mission humaine de justice et de civilisation. Quand les gens entrent dans cette voie, ils adoptent un mode de vie fond\u00e9 sur la justice, l\u2019\u00e9quit\u00e9 et la lutte contre la corruption. L\u2019entr\u00e9e massive montre l\u2019expansion de ce cadre de justice."
      },
      "Ob\u00e9issance/Soumission": {
        status: "probable",
        senses: ["ob\u00e9ir", "se soumettre", "soumission", "assujettissement"],
        proof_ctx: "Le sens \u00ab Ob\u00e9issance/Soumission \u00bb d\u00e9signe l\u2019acte de se conformer \u00e0 une autorit\u00e9. La distinction philosophique avec \u00ab Religion/Syst\u00e8me \u00bb est celle entre l\u2019acte et le cadre : l\u2019ob\u00e9issance est ce que l\u2019on fait (l\u2019acte de se conformer), tandis que le d\u012bn est ce dans quoi on entre (le cadre structurant). Le verbe yadkhul\u016bna f\u012b (entrer dans) favorise le cadre plut\u00f4t que l\u2019acte \u2014 on entre dans un syst\u00e8me, on n\u2019entre pas dans un acte. N\u00e9anmoins, l\u2019ob\u00e9issance est intrins\u00e8quement li\u00e9e au d\u012bn car entrer dans la voie implique d\u2019ob\u00e9ir \u00e0 ses r\u00e8gles.",
        axe1_verset: "Le verset parle d\u2019entrer \u00ab dans \u00bb quelque chose. L\u2019ob\u00e9issance est un acte continu, pas un espace dans lequel on entre. La construction dakhala f\u012b (entrer dans) est plus naturelle avec un cadre (syst\u00e8me) qu\u2019avec un acte (ob\u00e9issance). Le champ lexical du verset (entrer, groupes) \u00e9voque un mouvement vers un espace, pas l\u2019ex\u00e9cution d\u2019un acte.",
        axe2_voisins: "L\u2019ouverture du verset 1 ouvre un espace \u2014 la cons\u00e9quence est que les gens entrent dans cet espace. Si d\u012bn signifiait \u00ab ob\u00e9issance \u00bb, l\u2019ouverture n\u2019aurait pas de lien logique direct avec le fait d\u2019ob\u00e9ir.",
        axe3_sourate: "Le basculement de la sourate est une adh\u00e9sion massive \u00e0 un cadre de vie, pas simplement un acte d\u2019ob\u00e9issance. Le caract\u00e8re massif (\u00ab par groupes \u00bb) sugg\u00e8re une conversion \u00e0 un syst\u00e8me, pas juste un acte d\u2019ob\u00e9issance ponctuel.",
        axe4_coherence: "En 109:6, \u00ab \u00e0 vous votre d\u012bn, \u00e0 moi mon d\u012bn \u00bb \u2014 le d\u012bn est quelque chose que chacun poss\u00e8de, un cadre de vie, pas un acte d\u2019ob\u00e9issance. Si d\u012bn \u00e9tait \u00ab ob\u00e9issance \u00bb ici, le sens serait \u00ab les gens entrent dans l\u2019ob\u00e9issance de Dieu \u00bb \u2014 grammaticalement possible mais moins naturel.",
        axe5_frequence: "L\u2019ob\u00e9issance contribue \u00e0 la mission de justice car elle implique de suivre les r\u00e8gles. Mais le cadre (syst\u00e8me/voie) est plus large \u2014 il englobe l\u2019ob\u00e9issance comme l\u2019une de ses composantes."
      },
      "R\u00e9tribution/Compte": {
        status: "peu_probable",
        senses: ["r\u00e9tribution", "r\u00e9compense", "punition", "compensation", "rendre ce qui est d\u00fb", "jugement"],
        proof_ctx: "La r\u00e9tribution est l\u2019acte de rendre \u00e0 chacun ce qu\u2019il m\u00e9rite. On n\u2019\u00ab entre pas dans \u00bb une r\u00e9tribution \u2014 on la subit ou on la re\u00e7oit. La construction dakhala f\u012b (entrer dans) est incompatible avec la r\u00e9tribution : on ne franchit pas un seuil pour entrer dans un jugement, on y est soumis.",
        axe1_verset: "Le verset dit que les gens entrent dans le d\u012bn de Dieu par groupes. Si d\u012bn signifiait \u00ab r\u00e9tribution \u00bb, le sens serait \u00ab les gens entrent dans la r\u00e9tribution de Dieu par groupes \u00bb \u2014 ce qui est grammaticalement bancal car on ne choisit pas d\u2019entrer dans une r\u00e9tribution.",
        axe2_voisins: "L\u2019ouverture du verset 1 pr\u00e9c\u00e8de l\u2019entr\u00e9e. Si le d\u012bn \u00e9tait \u00ab r\u00e9tribution \u00bb, l\u2019ouverture serait celle du jugement \u2014 mais le verset 3 demande la glorification, pas la crainte. La tonalit\u00e9 est positive (secours, entr\u00e9e volontaire, glorification), pas judiciaire.",
        axe3_sourate: "Le basculement de la sourate est volontaire (les gens entrent), pas subi (les gens sont jug\u00e9s). La r\u00e9tribution impliquerait un contexte judiciaire, or la sourate d\u00e9crit une adh\u00e9sion massive volontaire.",
        axe4_coherence: "Quand le Coran parle du jour de la r\u00e9tribution, il utilise la construction yawm ad-d\u012bn (le jour de la r\u00e9tribution), pas dakhala f\u012b d\u012bn (entrer dans la r\u00e9tribution). La construction change le sens.",
        axe5_frequence: "La r\u00e9tribution est un \u00e9v\u00e9nement futur, pas un cadre dans lequel on entre volontairement et massivement."
      },
      "Dette/Obligation": { status: "nul", senses: ["dette", "cr\u00e9ance", "obligation financi\u00e8re", "pr\u00eat"], proof_ctx: "La dette est une relation financi\u00e8re entre un cr\u00e9ancier et un d\u00e9biteur. On n\u2019entre pas dans une dette de Dieu par groupes \u2014 c\u2019est hors contexte." },
      "Sens isol\u00e9/Maladie": { status: "nul", senses: ["maladie"], proof_ctx: "Sans rapport avec le contexte." },
      "Eau/Liquide": { status: "nul", senses: ["pluie continue"], proof_ctx: "Sans rapport avec le contexte." }
    }
  };

  // --- alh (ٱللَّهِ) nom propre g\u00e9nitif - m\u00eame analyse que v1 ---
  const alh_axes = {
    sense_chosen: "divinit\u00e9",
    concept_chosen: "Divinit\u00e9",
    concepts: {
      "Divinit\u00e9": {
        status: "retenu",
        senses: ["divinit\u00e9", "divinit\u00e9 (concept)", "Dieu", "th\u00e9ologie", "exclamation divine", "oui certes"],
        proof_ctx: "Le sens retenu est \u00ab Divinit\u00e9 \u00bb. All\u0101h est en position de compl\u00e9ment d\u2019idafa de d\u012bni \u2014 il identifie \u00e0 qui appartient cette voie. C\u2019est la voie de Dieu, pas celle d\u2019un autre. Le nom propre d\u00e9signe l\u2019identit\u00e9 divine.",
        axe1_verset: "Le mot All\u0101h est le compl\u00e9ment d\u2019idafa de d\u012bn \u2014 il d\u00e9finit la voie comme \u00e9tant celle de Dieu. Le champ lexical (entrer dans la voie de X) exige l\u2019identification de X. All\u0101h est cette identification.",
        axe2_voisins: "Au verset 1, All\u0101h est la source du secours. Au verset 2, All\u0101h est le propri\u00e9taire de la voie. Au verset 3, il est appel\u00e9 \u00ab ton Seigneur \u00bb et \u00ab celui qui accueille le retour \u00bb. La progression montre Dieu sous diff\u00e9rentes facettes : source de secours, auteur de la voie, accueillant.",
        axe3_sourate: "Dieu est l\u2019acteur central de la sourate : Il secourt, Il a une voie, Il accueille le retour. Son identification par le nom propre au verset 2 continue celle du verset 1.",
        axe4_coherence: "La construction d\u012bni ll\u0101hi (la voie de Dieu) appara\u00eet dans le Coran en 3:73, 9:33, 48:28. Elle d\u00e9signe toujours le cadre de vie voulu par Dieu.",
        axe5_frequence: "La voie de Dieu est le cadre de la mission humaine de justice. Identifier cette voie comme celle de Dieu lui donne son autorit\u00e9 et sa l\u00e9gitimit\u00e9."
      },
      "Adoration/D\u00e9votion": { status: "nul", senses: ["adorer", "faire adorer", "se d\u00e9vouer au culte", "diviniser"], proof_ctx: "Le mot est un nom propre en idafa, pas un acte d\u2019adoration." },
      "D\u00e9tresse": { status: "nul", senses: ["\u00eatre perplexe", "se lamenter"], proof_ctx: "Hors contexte." },
      "Refuge/Protection": { status: "nul", senses: ["chercher refuge", "prot\u00e9ger", "demeurer"], proof_ctx: "Hors contexte." },
      "Domination": { status: "nul", senses: ["asservir"], proof_ctx: "Hors contexte." }
    }
  };

  // --- fwj (أَفْوَاجًا) nom ind\u00e9fini accusatif (h\u0101l) ---
  const fwj_axes = {
    sense_chosen: "groupes",
    concept_chosen: "Groupe/Troupe",
    concepts: {
      "Groupe/Troupe": {
        status: "retenu",
        senses: ["groupe", "troupe", "compagnie", "foule", "foule dense"],
        proof_ctx: "Le sens retenu est \u00ab Groupe/Troupe \u00bb. Le mot afw\u0101jan est le pluriel de fawj, \u00e0 l\u2019accusatif ind\u00e9fini en position de \u1e25\u0101l (mani\u00e8re) \u2014 il d\u00e9crit la mani\u00e8re dont les gens entrent : \u00ab par groupes \u00bb. D\u2019apr\u00e8s les sources \u00e9tymologiques, fawj d\u00e9signe un rassemblement de personnes, une compagnie, une troupe. Le test de compatibilit\u00e9 : un nom ind\u00e9fini \u00e0 l\u2019accusatif peut-il exprimer la mani\u00e8re ? Oui \u2014 c\u2019est la construction standard du \u1e25\u0101l en arabe.",
        axe1_verset: "Le verset d\u00e9crit les gens qui entrent dans la voie de Dieu. Le mot afw\u0101jan pr\u00e9cise la mani\u00e8re : pas un par un, mais par groupes entiers. Le champ lexical (gens, entrer, voie) est celui du mouvement collectif \u2014 le mot \u00ab groupes \u00bb souligne le caract\u00e8re massif de ce mouvement. C\u2019est l\u2019afflux, pas l\u2019arriv\u00e9e individuelle.",
        axe2_voisins: "Le verset 1 annonce le secours et l\u2019ouverture \u2014 des \u00e9v\u00e9nements d\u2019envergure. Le verset 2 montre que la r\u00e9ponse est \u00e0 la hauteur : les gens entrent par groupes, pas au compte-gouttes. Le verset 3 demande la glorification \u2014 c\u2019est parce que l\u2019entr\u00e9e est massive que la glorification s\u2019impose.",
        axe3_sourate: "La sourate d\u00e9crit un basculement de masse. Le mot \u00ab par groupes \u00bb est le marqueur linguistique de ce caract\u00e8re massif. Sans lui, le verset pourrait d\u00e9crire quelques conversions individuelles \u2014 avec lui, c\u2019est un mouvement de foule.",
        axe4_coherence: "Le Coran utilise afw\u0101j dans d\u2019autres contextes de mouvement collectif. En 78:18, \u00ab vous viendrez par groupes (afw\u0101jan) \u00bb d\u00e9crit l\u2019arriv\u00e9e des gens le Jour du Jugement. Le mot d\u00e9signe toujours un mouvement collectif et massif, pas une foule statique.",
        axe5_frequence: "L\u2019entr\u00e9e par groupes montre que la mission de justice ne touche pas que des individus isol\u00e9s mais des communaut\u00e9s enti\u00e8res. C\u2019est l\u2019extension de la civilisation de justice \u00e0 \u00e9chelle collective \u2014 des groupes entiers adoptent le cadre de vie fond\u00e9 sur la justice."
      },
      "Diffusion/Dispersion": { status: "nul", senses: ["diffuser une odeur", "se disperser dans la terre", "exhaler"], proof_ctx: "La diffusion est un mouvement centrifuge (du centre vers l\u2019ext\u00e9rieur). Or le verset d\u00e9crit un mouvement centripete : les gens convergent vers la voie de Dieu, ils ne se dispersent pas." },
      "Mouvement/Vitesse": { status: "nul", senses: ["se h\u00e2ter", "courir", "\u00eatre lent dans sa course"], proof_ctx: "La vitesse n\u2019est pas le sujet. Le verset parle de la mani\u00e8re dont les gens arrivent (par groupes), pas de leur rapidit\u00e9." },
      "Fra\u00eecheur/Refroidissement": { status: "nul", senses: ["le jour devient frais", "se rafra\u00eechir"], proof_ctx: "La fra\u00eecheur atmosph\u00e9rique est sans rapport avec l\u2019entr\u00e9e des gens dans la voie de Dieu." }
    }
  };

  // INSERT verse_word_analyses
  const vwa2 = [
    { verse_id, word_key: 'ray', sense_chosen: 'voir', analysis_axes: ray_axes, position: 1 },
    { verse_id, word_key: 'nws', sense_chosen: 'gens', analysis_axes: nws_axes, position: 2 },
    { verse_id, word_key: 'dxl', sense_chosen: 'entrer', analysis_axes: dxl_axes, position: 3 },
    { verse_id, word_key: 'dyn', sense_chosen: 'voie', analysis_axes: dyn_axes, position: 5 },
    { verse_id, word_key: 'alh', sense_chosen: 'divinit\u00e9', analysis_axes: alh_axes, position: 6 },
    { verse_id, word_key: 'fwj', sense_chosen: 'groupes', analysis_axes: fwj_axes, position: 7 },
  ];

  const { data: inserted, error: e1 } = await supabase.from('verse_word_analyses').insert(vwa2).select();
  if (e1) { console.error('Error inserting vwa v2:', e1); return; }
  console.log('Inserted', inserted.length, 'verse_word_analyses for v2');

  // UPDATE verse_analyses
  const translation_arab = "et que tu vois les gens entrer dans la voie de Dieu par groupes";
  const translation_explanation = "\u00a7DEMARCHE\u00a7\n\nLa conjonction **wa** (et) lie ce verset au pr\u00e9c\u00e9dent \u2014 les deux \u00e9v\u00e9nements sont simultan\u00e9s. Le verbe **ra\u2019ayta** est \u00e0 l\u2019accompli 2\u00e8me personne (une forme qui s\u2019adresse directement \u00e0 \u00ab toi \u00bb et dit que l\u2019action est achev\u00e9e). Avec idh\u0101 du verset pr\u00e9c\u00e9dent, il continue la condition temporelle : \u00ab quand... et que tu vois \u00bb.\n\nLe mot **an-n\u0101sa** porte l\u2019article al- (les gens connus, l\u2019ensemble des gens) et est \u00e0 l\u2019accusatif (compl\u00e9ment direct de \u00ab voir \u00bb).\n\nLe verbe **yadkhul\u016bna** est \u00e0 l\u2019inaccompli (une forme qui dit que l\u2019action est en cours, qui se r\u00e9p\u00e8te \u2014 les gens entrent continuellement, pas une seule fois). C\u2019est la proposition d\u2019\u00e9tat (\u1e25\u0101l) : \u00ab tu vois les gens [en train d\u2019]entrer \u00bb.\n\nLa pr\u00e9position **f\u012b** (dans) est cruciale : elle indique que les gens entrent \u00c0 L\u2019INT\u00c9RIEUR de quelque chose \u2014 la voie de Dieu est pr\u00e9sent\u00e9e comme un espace dans lequel on p\u00e9n\u00e8tre. C\u2019est un passage de l\u2019ext\u00e9rieur vers l\u2019int\u00e9rieur.\n\nLe mot **d\u012bni** est en idafa avec **All\u0101hi** (la voie de Dieu). D\u2019apr\u00e8s les sources \u00e9tymologiques, la racine d-y-n d\u00e9signe un ensemble de pratiques et de r\u00e8gles de vie auxquelles on se conforme \u2014 un cadre de vie complet.\n\nLe mot **afw\u0101jan** est un accusatif ind\u00e9fini en position de \u1e25\u0101l (mani\u00e8re) \u2014 il d\u00e9crit comment les gens entrent : \u00ab par groupes \u00bb. C\u2019est le pluriel de fawj qui d\u00e9signe, d\u2019apr\u00e8s les sources \u00e9tymologiques, un rassemblement de personnes, une compagnie, une troupe.\n\n\u00a7JUSTIFICATION\u00a7\n\n**vois** \u2014 Le sens retenu est \u00ab Vision/Perception \u00bb. Le mot \u00ab vois \u00bb est choisi car il exprime la perception directe d\u2019un \u00e9v\u00e9nement. L\u2019alternative \u00ab per\u00e7ois \u00bb est plus abstraite et moins naturelle en fran\u00e7ais courant. L\u2019alternative \u00ab constates \u00bb implique un jugement rationnel, or ra\u2019ayta est la vision simple.\n\n**gens** \u2014 Le sens retenu est \u00ab Humanit\u00e9/Peuple \u00bb. Le mot \u00ab gens \u00bb est choisi car c\u2019est le terme le plus courant en fran\u00e7ais pour d\u00e9signer un ensemble de personnes. L\u2019alternative \u00ab \u00eatres humains \u00bb est trop formel. L\u2019alternative \u00ab peuple \u00bb implique une nation organis\u00e9e, or an-n\u0101s d\u00e9signe l\u2019ensemble indiff\u00e9renci\u00e9 des personnes.\n\n**entrer** \u2014 Le sens retenu est \u00ab Entr\u00e9e/P\u00e9n\u00e9tration \u00bb. Le mot \u00ab entrer \u00bb est choisi car c\u2019est le terme le plus direct pour le mouvement de l\u2019ext\u00e9rieur vers l\u2019int\u00e9rieur. L\u2019alternative \u00ab p\u00e9n\u00e9trer \u00bb est trop formel. L\u2019alternative \u00ab acc\u00e9der \u00bb implique une permission, or le texte dit simplement qu\u2019ils entrent.\n\n**voie** \u2014 Le sens retenu est \u00ab Religion/Syst\u00e8me \u00bb. Le mot \u00ab voie \u00bb est choisi car il rend l\u2019id\u00e9e d\u2019un cadre de vie dans lequel on entre. L\u2019alternative \u00ab religion \u00bb est possible mais le mot a en fran\u00e7ais une connotation institutionnelle et rituelle. D\u2019apr\u00e8s les sources \u00e9tymologiques, le d\u012bn est un ensemble de pratiques et de r\u00e8gles de vie \u2014 \u00ab voie \u00bb capture cette id\u00e9e de chemin de vie global. L\u2019alternative \u00ab syst\u00e8me \u00bb est trop technique pour le fran\u00e7ais courant.\n\n**groupes** \u2014 Le sens retenu est \u00ab Groupe/Troupe \u00bb. Le mot \u00ab groupes \u00bb est choisi car c\u2019est le terme le plus naturel en fran\u00e7ais courant. L\u2019alternative \u00ab troupes \u00bb implique une organisation militaire. L\u2019alternative \u00ab foules \u00bb exag\u00e8re la taille et perd la notion de groupes distincts.";

  const segments = [
    { fr: "et tu vois", pos: "verbe", phon: "wa-ra\u2019ayta", arabic: "\u0648\u064e\u0631\u064e\u0623\u064e\u064a\u0652\u062a\u064e", position: 1, word_key: "ray", is_particle: false, sense_retenu: "voir" },
    { fr: "les gens", pos: "nom", phon: "an-n\u0101sa", arabic: "\u0671\u0644\u0646\u0651\u064e\u0627\u0633\u064e", position: 2, word_key: "nws", is_particle: false, sense_retenu: "gens" },
    { fr: "entrer", pos: "verbe", phon: "yadkhul\u016bna", arabic: "\u064a\u064e\u062f\u0652\u062e\u064f\u0644\u064f\u0648\u0646\u064e", position: 3, word_key: "dxl", is_particle: false, sense_retenu: "entrer" },
    { fr: "dans", phon: "f\u012b", arabic: "\u0641\u0650\u0649", position: 4, word_key: null, is_particle: true },
    { fr: "la voie", pos: "nom", phon: "d\u012bni", arabic: "\u062f\u0650\u064a\u0646\u0650", position: 5, word_key: "dyn", is_particle: false, sense_retenu: "religion" },
    { fr: "de Dieu", pos: "nom", phon: "all\u0101hi", arabic: "\u0671\u0644\u0644\u0651\u064e\u0647\u0650", position: 6, word_key: "alh", is_particle: false, sense_retenu: "divinit\u00e9" },
    { fr: "par groupes", pos: "nom", phon: "afw\u0101jan", arabic: "\u0623\u064e\u0641\u0652\u0648\u064e\u0627\u062c\u064b\u0627", position: 7, word_key: "fwj", is_particle: false, sense_retenu: "groupe" }
  ];

  const { error: e2 } = await supabase.from('verse_analyses').update({
    translation_arab,
    translation_explanation,
    segments
  }).eq('id', 6578);
  if (e2) console.error('Error updating verse_analyses v2:', e2);
  else console.log('Updated verse_analyses for v2');

  console.log('\nVERSET 110:2 \u2014 TERMIN\u00c9');
  console.log('  ray (\u0631 \u0623 \u064a) \u2192 sens "Vision/Perception" \u2192 mot fran\u00e7ais "vois"');
  console.log('  nws (\u0646 \u0648 \u0633) \u2192 sens "Humanit\u00e9/Peuple" \u2192 mot fran\u00e7ais "gens"');
  console.log('  dxl (\u062f \u062e \u0644) \u2192 sens "Entr\u00e9e/P\u00e9n\u00e9tration" \u2192 mot fran\u00e7ais "entrer"');
  console.log('  dyn (\u062f \u064a \u0646) \u2192 sens "Religion/Syst\u00e8me" \u2192 mot fran\u00e7ais "voie"');
  console.log('  alh (\u0627 \u0644 \u0647) \u2192 sens "Divinit\u00e9" \u2192 mot fran\u00e7ais "Dieu"');
  console.log('  fwj (\u0641 \u0648 \u062c) \u2192 sens "Groupe/Troupe" \u2192 mot fran\u00e7ais "groupes"');
  console.log('  Traduction : "' + translation_arab + '"');
}
main().catch(console.error);
