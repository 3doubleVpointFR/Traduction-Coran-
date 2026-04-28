const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)

// Sourate 107 — Al-Ma'un (L'Aide élémentaire)
// Thème : celui qui dément la rétribution néglige l'orphelin, ne nourrit pas le pauvre,
// prie sans présence, fait de l'ostentation, et refuse l'aide élémentaire.
const V = { 1: 6198, 2: 6199, 3: 6200, 4: 6201, 5: 6202, 6: 6203, 7: 6204 }

// ========================================================================
// CONCEPT NAMES (EXACT from word_meanings via SELECT)
// ========================================================================
// ray: Vision/Perception | Jugement/Avis | Apparition
// kdhb: Mensonge/Fausseté | Déni/Rejet
// dyn: Rétribution/Compte | Religion/Système | Obéissance/Soumission | Dette/Obligation
// dee2: Repoussement/Brutalité
// ytm: Orphelinat/Solitude
// hdd2: Incitation/Encouragement
// tem: Gustation/Nourriture
// skn: Calme/Repos | Habitation/Demeure | Sens isolé/Pauvre
// wyl: Malédiction/Désastre
// slw: Prière/Invocation | Proximité/Attachement
// shw2: Distraction/Négligence
// ray: Vision/Perception (pour v6 = yura'un = ostentation)
// mne: Empêchement/Interdiction | Protection/Défense
// men: Source/Jaillissement

// ========================================================================
// AXES — Analyse étape 3
// ========================================================================

const ray_axes = {
  sense_chosen: "as-tu vu",
  concept_chosen: "Vision/Perception",
  concepts: {
    "Vision/Perception": {
      status: "retenu",
      senses: ["voir", "percevoir"],
      proof_ctx: "Le sens retenu est « Vision/Perception ». Le verbe ara'ayta est à l'accompli deuxième personne (une forme qui dit que l'action a eu lieu) avec le hamza interrogatif a- — « as-tu vu ? ». C'est une question rhétorique qui invite le Prophète à observer une réalité. Le test grammatical : un verbe accompli interrogatif peut-il exprimer la vision ? Oui — « as-tu vu celui qui... » est une invitation à observer et comprendre. Distinction avec « Jugement/Avis » : le jugement est intérieur, la vision est une observation extérieure. Le verset invite à voir, pas à juger.",
      axe1_verset: "Le verbe ara'ayta ouvre la sourate par une question — « as-tu vu celui qui dément ? ». Le champ lexical est celui de l'observation directe. On invite le Prophète à regarder le comportement de cette personne pour comprendre ce qu'est le déni de la rétribution.",
      axe2_voisins: "Les versets 2-3 décrivent ce que le Prophète doit observer : celui qui repousse l'orphelin et ne nourrit pas le pauvre. La vision du verset 1 est le cadre — les versets suivants montrent ce qu'il y a à voir.",
      axe3_sourate: "La sourate commence par « as-tu vu » — elle est construite comme une démonstration visuelle. Le thème est : regarde ce que fait celui qui dément, et tu comprendras ce qu'est le vrai déni.",
      axe4_coherence: "Le Coran utilise ara'ayta dans d'autres sourates pour les questions rhétoriques (sourate 96:9 — ara'ayta alladhi yanha). C'est un schéma récurrent d'invitation à observer.",
      axe5_frequence: "Observer le comportement des gens permet de comprendre leurs vraies croyances. La mission humaine de justice commence par l'observation lucide de la réalité."
    },
    "Jugement/Avis": { status: "peu_probable", senses: ["opinion", "avis"],
      proof_ctx: "Le jugement est un acte intérieur — former un avis. Le verset invite à VOIR un comportement extérieur, pas à former une opinion. La question ara'ayta est « as-tu vu ? », pas « que penses-tu ? ».",
      axe1_verset: "Le champ lexical est celui de l'observation, pas du jugement. Le verbe est suivi de alladhi (celui qui) qui pointe vers une personne observable.",
      axe2_voisins: "Les versets suivants décrivent des actions visibles (repousser, ne pas nourrir). C'est de l'observation, pas du jugement.",
      axe3_sourate: "La sourate montre des actes concrets, pas des opinions.",
      axe4_coherence: "Le Coran utilise ara'ayta pour l'observation, pas pour l'opinion.",
      axe5_frequence: "L'observation précède le jugement — il faut d'abord voir pour pouvoir juger."
    },
    "Apparition": { status: "nul", senses: ["apparaître"], proof_ctx: "Le sujet voit, il n'apparaît pas. Hors sujet." }
  }
}

const kdhb_axes = {
  sense_chosen: "dément",
  concept_chosen: "Déni/Rejet",
  concepts: {
    "Déni/Rejet": {
      status: "retenu",
      senses: ["nier", "démentir", "traiter de menteur"],
      proof_ctx: "Le sens retenu est « Déni/Rejet ». Le verbe yukadhdhibu est à la forme II inaccompli (une forme intensive qui dit que l'action est faite avec insistance et en continu) — « il dément activement et continuellement ». La forme II ajoute l'intensité : ce n'est pas un doute passager mais un déni actif et permanent. Le verbe est suivi de bi-d-din (la rétribution) — il dément la rétribution. Distinction avec « Mensonge/Fausseté » : le mensonge est dire le faux, le déni est refuser de reconnaître le vrai. Le verset décrit quelqu'un qui REJETTE une vérité, pas quelqu'un qui INVENTE un mensonge.",
      axe1_verset: "Le verbe yukadhdhibu est relié à bi-d-din par la préposition bi. Le champ lexical est celui du refus de reconnaître une réalité. On dément la rétribution — on refuse de croire que les actes auront des conséquences.",
      axe2_voisins: "Les versets 2-3 montrent les conséquences de ce déni : celui qui ne croit pas à la rétribution maltraite l'orphelin et ignore le pauvre. Le déni mène directement au mauvais comportement.",
      axe3_sourate: "Le déni de la rétribution est le point de départ de toute la sourate. C'est PARCE qu'il dément que cette personne agit mal. La sourate lie la croyance au comportement.",
      axe4_coherence: "Le Coran utilise kadhdhabha (forme II) pour le déni actif dans d'autres versets. La forme II insiste sur l'intensité et la répétition du déni.",
      axe5_frequence: "Le déni de la rétribution — le refus de croire que les actes ont des conséquences — est la racine de l'injustice. Celui qui ne croit pas au retour de ses actes n'a aucune raison de bien agir."
    },
    "Mensonge/Fausseté": { status: "probable", senses: ["mentir", "dire le faux", "fausseté"],
      proof_ctx: "Le mensonge est un acte de parole — dire ce qui est contraire à la réalité. Le déni est un acte de rejet — refuser de reconnaître ce qui est vrai. Le verset décrit quelqu'un qui REJETTE la rétribution, pas quelqu'un qui invente un mensonge. La distinction : le menteur sait la vérité et dit le contraire, le démenteur refuse de l'accepter. La forme II (yukadhdhibu) est intensive et indique le rejet actif.",
      axe1_verset: "Le verbe yukadhdhibu avec bi (avec/en) signifie « démentir, rejeter » — pas « mentir à quelqu'un ». Le champ est celui du rejet, pas de la fabrication de faux.",
      axe2_voisins: "Les conséquences décrites (maltraiter l'orphelin, ne pas nourrir) sont le résultat d'un rejet de principes, pas d'un mensonge.",
      axe3_sourate: "Le thème est le lien entre croyance et acte — le déni de la rétribution mène au mauvais comportement.",
      axe4_coherence: "Le Coran distingue kadhaba (mentir, forme I) de kadhdhabha (démentir, forme II). La forme II est le rejet, pas le mensonge.",
      axe5_frequence: "Le mensonge est un acte ponctuel, le déni est un état permanent. La sourate traite d'un état qui produit un comportement."
    }
  }
}

const dyn_axes = {
  sense_chosen: "la rétribution",
  concept_chosen: "Rétribution/Compte",
  concepts: {
    "Rétribution/Compte": {
      status: "retenu",
      senses: ["rétribution", "récompense", "punition", "compensation", "rendre ce qui est dû", "jugement"],
      proof_ctx: "Le sens retenu est « Rétribution/Compte ». Le mot ad-din est un nom défini avec al- (la rétribution connue). Dans ce verset, démentir « le din » c'est nier que les actes auront un retour. Le test grammatical : un nom défini peut-il désigner la rétribution comme réalité connue ? Oui — la rétribution est une réalité identifiée. Distinction avec « Religion/Système » : la religion est un système de vie, la rétribution est le mécanisme de retour des actes. Le verset dit que cette personne dément le din — elle ne croit pas que ses actes auront des conséquences. Les versets 2-7 montrent les conséquences de ce déni : quelqu'un qui ne croit pas au retour de ses actes maltraite les faibles et ne se soucie que des apparences.",
      axe1_verset: "Le mot ad-din est le complément de yukadhdhibu (démentir). Le champ lexical est celui du refus de croire au retour des actes. La rétribution est ce qui est démenti.",
      axe2_voisins: "Les versets 2-3 montrent le comportement de celui qui dément : il maltraite l'orphelin et ne nourrit pas le pauvre. Ce comportement est logique si on ne croit pas au retour des actes — pourquoi aider si rien ne revient ?",
      axe3_sourate: "La sourate oppose le déni de la rétribution (v1) au mauvais comportement (v2-7). Le din est le pivot — tout découle de la croyance ou non au retour des actes.",
      axe4_coherence: "Le Coran utilise din pour la rétribution dans la sourate 1:4 (yawm ad-din = le jour de la rétribution). Dans la sourate 107, le din est le même — le retour des actes. La cohérence est totale.",
      axe5_frequence: "Croire que les actes ont des conséquences est le fondement de la responsabilité humaine. Sans rétribution, aucune raison d'être juste — c'est exactement ce que la sourate montre."
    },
    "Religion/Système": { status: "probable", senses: ["religion", "système de croyances", "pratique"],
      proof_ctx: "La religion est le système complet de croyances et de pratiques. La rétribution est le mécanisme de retour des actes. Le verset montre que le déni mène au mauvais comportement (v2-7) — ce lien est plus direct avec la rétribution (cause-conséquence des actes) qu'avec la religion (système global). De plus, la sourate 1:4 utilise le même mot (ad-din) clairement pour la rétribution (yawm ad-din = jour de la rétribution).",
      axe1_verset: "Le champ lexical est celui du déni et de ses conséquences comportementales — plus proche de la rétribution que de la religion.",
      axe2_voisins: "Les versets 2-7 décrivent un comportement, pas un système religieux. Le déni mène à des actes — c'est la logique de la rétribution.",
      axe3_sourate: "Le thème est le lien entre croyance en la rétribution et comportement, pas l'appartenance à une religion.",
      axe4_coherence: "La sourate 1:4 confirme que ad-din peut signifier la rétribution. La sourate 109:6 confirme qu'il peut signifier la voie. Le contexte tranche.",
      axe5_frequence: "La rétribution est plus directement liée au comportement que la religion — le verset montre cette causalité."
    },
    "Obéissance/Soumission": { status: "nul", senses: ["obéir", "se soumettre"], proof_ctx: "Le verset parle de démentir, pas d'obéir ou de se soumettre." },
    "Dette/Obligation": { status: "nul", senses: ["dette", "créance"], proof_ctx: "Pas de contexte financier dans cette sourate." },
    "Sens isolé/Maladie": { status: "nul", senses: ["maladie"], proof_ctx: "Hors sujet." },
    "Eau/Liquide": { status: "nul", senses: ["pluie continue"], proof_ctx: "Hors sujet." }
  }
}

const dee2_axes = {
  sense_chosen: "repousse",
  concept_chosen: "Repoussement/Brutalité",
  concepts: {
    "Repoussement/Brutalité": {
      status: "retenu",
      senses: ["repousser violemment", "bousculer", "rejeter avec rudesse"],
      proof_ctx: "Le sens retenu est « Repoussement/Brutalité ». Le verbe yaduu est à l'inaccompli (action en cours et habituelle) — « il repousse habituellement ». Le complément est al-yatim (l'orphelin). Repousser l'orphelin c'est le traiter avec mépris et brutalité — le rejeter physiquement quand il se présente. C'est un acte extérieur, directionnel, du fort vers le faible.",
      axe1_verset: "Le verbe yaduu est suivi de al-yatim — il repousse l'orphelin. Le champ lexical est celui de la violence envers les faibles. L'inaccompli dit que c'est une habitude, pas un accident.",
      axe2_voisins: "Le verset 1 explique pourquoi : il dément la rétribution. Le verset 3 ajoute un autre comportement : il ne nourrit pas le pauvre. Les versets 2-3 sont les preuves du déni — voilà ce que fait celui qui ne croit pas au retour de ses actes.",
      axe3_sourate: "Repousser l'orphelin est le premier signe concret du déni de la rétribution. La sourate montre les actes qui trahissent l'incroyance.",
      axe4_coherence: "Le Coran mentionne l'orphelin dans de nombreux versets comme test de la bonté (sourate 93:9 — quant à l'orphelin, ne le repousse pas). La sourate 107 confirme que repousser l'orphelin est le signe du déni.",
      axe5_frequence: "Protéger les faibles — et en premier lieu les orphelins — est au cœur de la mission de justice. Repousser l'orphelin est la corruption la plus basique."
    }
  }
}

const ytm_axes = {
  sense_chosen: "l'orphelin",
  concept_chosen: "Orphelinat/Solitude",
  concepts: {
    "Orphelinat/Solitude": {
      status: "retenu",
      senses: ["être orphelin", "orphelin", "unique"],
      proof_ctx: "Le sens retenu est « Orphelinat/Solitude ». Le mot al-yatim est un nom défini avec al- (l'orphelin connu) — l'orphelin en tant que catégorie sociale identifiée. L'orphelin est celui qui a perdu son père et qui est sans protection. Le texte ne parle pas d'un orphelin spécifique mais de l'orphelin comme type — tout orphelin.",
      axe1_verset: "Le mot al-yatim est le complément de yaduu (repousser). L'orphelin est la victime du repoussement. Le champ lexical est celui de la vulnérabilité sociale.",
      axe2_voisins: "Après l'orphelin (v2), le verset 3 mentionne le pauvre (miskin). Les deux sont les catégories vulnérables de la société — ceux qui ont besoin de protection.",
      axe3_sourate: "L'orphelin et le pauvre sont les témoins du vrai état de la personne. Celui qui dément la rétribution les maltraite car il ne croit pas aux conséquences de ses actes.",
      axe4_coherence: "Le Coran protège l'orphelin dans de nombreux versets (sourate 4:2, 6:152, 89:17, 93:9). L'orphelin est un test central de la justice.",
      axe5_frequence: "L'orphelin est le premier test de la mission humaine — protéger celui qui n'a personne pour le protéger."
    }
  }
}

const hdd2_axes = {
  sense_chosen: "n'incite pas",
  concept_chosen: "Incitation/Encouragement",
  concepts: {
    "Incitation/Encouragement": {
      status: "retenu",
      senses: ["inciter", "encourager", "pousser à", "exhorter"],
      proof_ctx: "Le sens retenu est « Incitation/Encouragement ». Le verbe yahuddu est à l'inaccompli (action habituelle) avec la négation wa la — « et il n'incite pas ». Le verbe est suivi de ala taaam al-miskin (à la nourriture du pauvre). Il n'encourage pas les gens à nourrir le pauvre — c'est pire que de ne pas nourrir soi-même, c'est ne même pas pousser les autres à le faire. Le double refus : il ne nourrit pas ET il n'incite pas.",
      axe1_verset: "Le verbe yahuddu est nié et suivi de ala taaam al-miskin (à nourrir le pauvre). Le champ lexical est celui de l'indifférence sociale — ne pas agir ET ne pas encourager les autres à agir.",
      axe2_voisins: "Le verset 2 montre le repoussement de l'orphelin, le verset 3 montre l'indifférence envers le pauvre. Les deux sont des signes du déni de la rétribution.",
      axe3_sourate: "L'absence d'incitation à nourrir le pauvre est le deuxième signe du déni. La sourate monte : repousser l'orphelin (acte direct) → ne pas inciter à nourrir (absence d'acte).",
      axe4_coherence: "Le Coran utilise la même formule dans la sourate 69:34 (lam yahuddu ala taaam al-miskin — il n'incitait pas à nourrir le pauvre). La cohérence est directe — c'est le même reproche.",
      axe5_frequence: "La mission humaine n'est pas seulement d'agir soi-même mais d'inciter les autres à agir. L'indifférence qui ne se soucie même pas de pousser les autres à aider est la forme la plus profonde de corruption."
    }
  }
}

const tem_axes = {
  sense_chosen: "la nourriture",
  concept_chosen: "Gustation/Nourriture",
  concepts: {
    "Gustation/Nourriture": {
      status: "retenu",
      senses: ["goût", "nourriture", "manger"],
      proof_ctx: "Le sens retenu est « Gustation/Nourriture ». Le mot taaam est un nom en idafa rattaché à al-miskin (le pauvre) — la nourriture du pauvre. C'est ce que le pauvre a besoin de manger — le minimum vital. Le verset dit que cette personne n'incite même pas à fournir cette nourriture.",
      axe1_verset: "Le mot taaam est rattaché à al-miskin par une idafa — la nourriture du pauvre. Le champ lexical est celui du besoin vital non satisfait.",
      axe2_voisins: "La nourriture du pauvre est le complément de l'incitation (v3). C'est l'objet concret de l'indifférence sociale.",
      axe3_sourate: "La nourriture représente le minimum — le besoin le plus basique. Celui qui ne se soucie même pas de ce minimum est au plus bas de l'indifférence.",
      axe4_coherence: "Le Coran mentionne la nourriture du pauvre dans la sourate 69:34 avec la même formule. Nourrir le pauvre est un acte fondamental.",
      axe5_frequence: "Assurer la nourriture du pauvre est le premier devoir social. Ne pas s'en soucier est la forme la plus concrète de corruption."
    }
  }
}

const skn_axes = {
  sense_chosen: "le démuni",
  concept_chosen: "Sens isolé/Pauvre",
  concepts: {
    "Sens isolé/Pauvre": {
      status: "retenu",
      senses: ["pauvre"],
      proof_ctx: "Le sens retenu est « Sens isolé/Pauvre ». Le mot al-miskin est un nom défini — le pauvre, le démuni. La racine s-k-n signifie être calme, immobile. Le miskin est celui qui est immobilisé par le manque — il ne peut pas bouger, il est bloqué dans sa pauvreté. C'est un état permanent qui empêche d'agir.",
      axe1_verset: "Le mot al-miskin est le complément de taaam — la nourriture du pauvre. Le champ lexical est celui de la vulnérabilité sociale — l'orphelin (v2) et le pauvre (v3) sont les deux catégories les plus fragiles.",
      axe2_voisins: "L'orphelin (v2) et le pauvre (v3) forment un couple de vulnérabilité. Les deux sont maltraités ou ignorés par celui qui dément la rétribution.",
      axe3_sourate: "Le pauvre est le deuxième témoin du déni — après l'orphelin. La sourate montre que le déni de la rétribution se manifeste dans le traitement des plus faibles.",
      axe4_coherence: "Le Coran mentionne le miskin dans de nombreux versets comme bénéficiaire de l'aumône et de l'aide (sourate 2:83, 4:36, 76:8). Le miskin est un test central.",
      axe5_frequence: "Le pauvre est celui que la société doit protéger en priorité. L'ignorer est la corruption sociale la plus basique."
    },
    "Habitation/Demeure": { status: "nul", senses: ["habiter", "demeurer"], proof_ctx: "Le verset parle du pauvre (miskin), pas d'habitation." },
    "Calme/Repos": { status: "nul", senses: ["être calme", "s'apaiser"], proof_ctx: "Le verset parle du pauvre, pas du calme." }
  }
}

const wyl_axes = {
  sense_chosen: "malheur",
  concept_chosen: "Malédiction/Désastre",
  concepts: {
    "Malédiction/Désastre": {
      status: "retenu",
      senses: ["malheur", "détresse", "ruine"],
      proof_ctx: "Le sens retenu est « Malédiction/Désastre ». Le mot wayl est un nom indéfini (un malheur) suivi de li (pour) et al-musallin (les priants). Wayl = un malheur POUR les priants. C'est un avertissement sévère — le texte ne dit pas quel est ce malheur exactement, il dit juste que c'est un wayl, un désastre.",
      axe1_verset: "Le mot wayl ouvre le verset 4 avec la particule fa (alors/donc) qui lie aux versets précédents. Le champ lexical est celui de l'avertissement — après avoir décrit le déni et ses signes (v1-3), le texte prononce un avertissement.",
      axe2_voisins: "Les versets 1-3 décrivent le déni et ses manifestations. Le verset 4 change de ton — il passe de la description à l'avertissement. Le wayl est le pivot de la sourate.",
      axe3_sourate: "Le wayl est le tournant — la sourate passe de « voici ce que fait celui qui dément » à « malheur à ceux qui prient (sans y être présents) ». Le thème s'élargit : même les priants peuvent être concernés.",
      axe4_coherence: "Le Coran utilise wayl dans d'autres versets comme avertissement (sourate 83:1 — wayl li-l-mutaffifin = malheur aux fraudeurs). C'est toujours un avertissement sévère.",
      axe5_frequence: "L'avertissement rappelle que les actes formels (la prière) ne suffisent pas sans sincérité. La mission humaine exige la cohérence entre l'intérieur et l'extérieur."
    }
  }
}

const slw_axes = {
  sense_chosen: "les priants",
  concept_chosen: "Prière/Invocation",
  concepts: {
    "Prière/Invocation": {
      status: "retenu",
      senses: ["prier", "prière rituelle", "invoquer"],
      proof_ctx: "Le sens retenu est « Prière/Invocation ». Au verset 4, al-musallin est un participe actif pluriel défini (ceux qui prient activement) — les priants. Au verset 5, salatihim est un nom en idafa avec pronom (leur prière). Le test grammatical : un participe actif peut-il désigner des gens qui prient ? Oui — les musallin sont ceux qui font la prière. Le verset dit « malheur aux priants qui... » — le malheur ne vise pas la prière elle-même mais les priants qui sont distraits de leur prière (v5).",
      axe1_verset: "Au v4, al-musallin est le complément de wayl li (malheur à). Au v5, salatihim est la prière dont ils sont distraits. Le champ lexical est celui de la prière formelle sans substance.",
      axe2_voisins: "Le v5 précise : ils sont distraits de leur prière. Le v6 ajoute : ils font de l'ostentation. Le v7 conclut : ils refusent l'aide élémentaire. Les priants visés sont ceux qui prient sans y être présents.",
      axe3_sourate: "La sourate oppose le vrai engagement (aider l'orphelin, nourrir le pauvre) à l'apparence (prier sans être présent, faire de l'ostentation). La prière est le symbole de l'apparence quand elle est vide de substance.",
      axe4_coherence: "Le Coran dit dans la sourate 29:45 que la prière empêche la turpitude et le mal. La sourate 107 montre le cas inverse : quand la prière ne remplit pas cette fonction car le priant est absent.",
      axe5_frequence: "La prière sans présence et sans conséquence sur le comportement est une forme de corruption — elle donne l'apparence de la piété sans la substance de la justice."
    },
    "Proximité/Attachement": { status: "nul", senses: ["suivre de près"], proof_ctx: "Le verset parle de prière rituelle, pas de proximité physique." },
    "Lieu/Géographie": { status: "nul", senses: ["milieu"], proof_ctx: "Hors sujet." },
    "Corps/Anatomie": { status: "nul", senses: ["deuxième dans une course"], proof_ctx: "Hors sujet." }
  }
}

const shw2_axes = {
  sense_chosen: "distraits",
  concept_chosen: "Distraction/Négligence",
  concepts: {
    "Distraction/Négligence": {
      status: "retenu",
      senses: ["être distrait", "négliger", "oublier", "être inattentif"],
      proof_ctx: "Le sens retenu est « Distraction/Négligence ». Le mot sahun est un participe actif pluriel (ceux qui sont distraits activement) — les distraits. Le participe actif dit que la distraction est leur état permanent, pas un moment d'inattention. Ils sont distraits DE leur prière (an salatihim) — la préposition an (de, loin de) indique qu'ils sont éloignés de ce qu'ils font. Le texte ne dit pas « dans » leur prière mais « de » leur prière — ils sont à distance de leur propre acte.",
      axe1_verset: "Le mot sahun qualifie les priants du verset 4. Le champ lexical est celui de l'absence intérieure — le corps prie mais l'esprit est ailleurs. La préposition an (de/loin de) est cruciale : ils sont loin de leur prière.",
      axe2_voisins: "Le verset 4 avertit les priants, le verset 5 précise : ceux qui sont distraits de leur prière. Le verset 6 ajoute l'ostentation. La distraction est le premier défaut — la prière sans présence.",
      axe3_sourate: "La distraction dans la prière est le pendant de l'indifférence sociale (v2-3). La même personne qui ignore le pauvre est distraite dans sa prière — cohérence entre l'intérieur vide et l'extérieur indifférent.",
      axe4_coherence: "Le Coran valorise la présence dans la prière (sourate 23:2 — ceux qui sont concentrés dans leur prière). La sourate 107 décrit l'opposé : ceux qui sont distraits.",
      axe5_frequence: "La distraction dans les actes importants est une forme de corruption intérieure. La mission humaine exige la présence — être là vraiment, pas seulement physiquement."
    }
  }
}

// Pour v6, ray est réutilisé mais dans le sens d'OSTENTATION (yura'un = ils font voir)
const ray_v6_axes = {
  sense_chosen: "font étalage",
  concept_chosen: "Vision/Perception",
  concepts: {
    "Vision/Perception": {
      status: "retenu",
      senses: ["voir", "percevoir"],
      proof_ctx: "Le sens retenu est « Vision/Perception » avec le sens causatif : yura'un = ils font voir, ils montrent. Le verbe yura'un est à la forme III inaccompli (une forme qui implique la réciprocité ou la direction vers l'autre) — « ils font voir aux gens ». C'est le riya' — montrer ses actes aux autres pour être vu. La racine r-'-y (voir) prend ici le sens de « faire voir » — l'ostentation est un acte de vision dirigé vers les spectateurs. Le texte ne précise pas ce qu'ils montrent — il dit juste qu'ils font de l'ostentation.",
      axe1_verset: "Le verbe yura'un décrit le comportement des priants distraits — ils font étalage. Le champ lexical est celui de l'apparence sans substance.",
      axe2_voisins: "Après la distraction (v5), l'ostentation (v6). Les deux sont liés : celui qui n'est pas présent dans sa prière la fait pour les autres, pas pour Dieu.",
      axe3_sourate: "L'ostentation est le troisième défaut après le déni (v1) et la distraction (v5). La sourate montre une dégradation : déni → indifférence → prière vide → ostentation → refus d'aider.",
      axe4_coherence: "Le Coran dénonce l'ostentation dans la sourate 4:142 (yura'un an-nas — ils font voir aux gens). La même racine, le même reproche.",
      axe5_frequence: "L'ostentation corrompt les actes — faire le bien pour être vu vide l'acte de sa substance. La mission humaine exige la sincérité."
    },
    "Jugement/Avis": { status: "nul", senses: ["opinion"], proof_ctx: "Le verset décrit l'ostentation, pas une opinion." },
    "Apparition": { status: "nul", senses: ["apparaître"], proof_ctx: "Hors sujet." }
  }
}

const mne_axes = {
  sense_chosen: "refusent",
  concept_chosen: "Empêchement/Interdiction",
  concepts: {
    "Empêchement/Interdiction": {
      status: "retenu",
      senses: ["empêcher", "interdire", "refuser"],
      proof_ctx: "Le sens retenu est « Empêchement/Interdiction ». Le verbe yamnaaun est à l'inaccompli pluriel (action habituelle) — « ils refusent habituellement ». Le complément est al-maaun (l'aide élémentaire). Ils empêchent l'accès à l'aide la plus basique. L'empêchement est directionnel — il bloque ce qui devrait passer de celui qui a vers celui qui n'a pas.",
      axe1_verset: "Le verbe yamnaaun est suivi de al-maaun. Le champ lexical est celui du blocage — ils retiennent ce qui devrait être donné.",
      axe2_voisins: "Le verset 7 conclut la sourate par le refus ultime : même l'aide la plus basique est refusée. Après le déni (v1), la maltraitance (v2), l'indifférence (v3), la prière vide (v4-5), l'ostentation (v6), le refus d'aider (v7).",
      axe3_sourate: "Le refus de l'aide élémentaire est le dernier signe et le plus concret. La sourate se termine sur l'acte le plus simple : donner l'aide de base — et ils ne le font même pas.",
      axe4_coherence: "Le Coran dénonce ceux qui empêchent le bien dans la sourate 68:12 (mannaa li-l-khayr = celui qui empêche le bien). Le refus d'aider est un reproche récurrent.",
      axe5_frequence: "Refuser l'aide élémentaire est la forme la plus basse de l'injustice — même le minimum n'est pas donné. La mission humaine commence par ne pas bloquer ce qui est dû aux autres."
    },
    "Protection/Défense": { status: "nul", senses: ["protéger"], proof_ctx: "Le verset parle d'empêcher l'aide, pas de protéger." }
  }
}

const men_axes = {
  sense_chosen: "l'aide élémentaire",
  concept_chosen: "Source/Jaillissement",
  concepts: {
    "Source/Jaillissement": {
      status: "retenu",
      senses: ["eau jaillissante", "source", "courant"],
      proof_ctx: "Le sens retenu est « Source/Jaillissement ». Le mot al-maaun est un nom défini — l'aide élémentaire, ce qui coule facilement et qu'on ne devrait pas retenir. La racine m-'-n signifie couler, jaillir. Le maaun est ce qui devrait couler naturellement d'une personne vers une autre — l'aide basique, les petits objets du quotidien qu'on prête sans y penser. Le texte ne précise pas quels objets — il dit « le maaun », l'aide qui coule. Retenir le maaun c'est bloquer ce qui devrait s'écouler naturellement.",
      axe1_verset: "Le mot al-maaun est le complément de yamnaaun (ils refusent). Le champ lexical est celui de l'aide basique refusée — le minimum qu'on devrait laisser couler vers les autres.",
      axe2_voisins: "Le maaun conclut la sourate — c'est le test final. Après tous les défauts listés, le dernier est le plus simple : refuser l'aide élémentaire.",
      axe3_sourate: "Le maaun donne son nom à la sourate. C'est le symbole de tout ce qui est dénoncé : celui qui dément la rétribution finit par refuser même l'aide la plus basique.",
      axe4_coherence: "Le Coran valorise le don et le partage dans de nombreux versets. Le maaun est le niveau le plus bas du partage — ce qui ne coûte presque rien. Le refuser est le signe le plus clair d'un cœur fermé.",
      axe5_frequence: "L'aide élémentaire est le minimum de la solidarité humaine. La mission de civilisation commence par laisser couler vers les autres ce qui ne coûte rien. Bloquer ce flux est la corruption à son état le plus simple."
    }
  }
}

// ========================================================================
// ÉTAPE 4 — TRADUCTIONS
// ========================================================================

const translations = {
  1: {
    verse_id: V[1],
    translation_arab: "As-tu vu celui qui dément la rétribution ?",
    translation_explanation: `§DEMARCHE§

Le verbe **ara'ayta** est composé du hamza interrogatif **a-** (est-ce que) et du verbe **ra'ayta** à l'accompli deuxième personne (une forme qui dit que l'action a eu lieu) — « as-tu vu ? ». C'est une question rhétorique : elle n'attend pas de réponse mais invite à observer. Le Coran utilise cette formule pour attirer l'attention sur un phénomène que le Prophète doit observer et comprendre.

Le pronom relatif **alladhi** (celui qui) introduit la personne à observer.

Le verbe **yukadhdhibu** est à la forme II inaccompli (une forme intensive qui dit que l'action est faite avec insistance et de façon habituelle) — « il dément activement et continuellement ». La forme II (avec le redoublement de la deuxième lettre) ajoute l'intensité : ce n'est pas un doute passager mais un rejet actif et permanent. La forme I (kadhaba) signifie mentir, la forme II (kadhdhabha) signifie démentir/rejeter — le passage de I à II change le sens de « produire le faux » à « rejeter le vrai ».

La préposition **bi** (en/par) relie le verbe à son objet : **ad-din** — la rétribution. Le din dans ce verset désigne le retour des actes — le principe que ce qu'on fait revient. D'après la cohérence coranique, la sourate 1:4 utilise le même mot (yawm ad-din = le jour de la rétribution), confirmant ce sens. Les versets 2-7 montrent les conséquences de ce déni : celui qui ne croit pas au retour de ses actes maltraite les faibles et ne fait que des apparences.

§JUSTIFICATION§

**as-tu vu** — Le sens retenu est « Vision/Perception ». L'expression « as-tu vu » rend la question rhétorique ara'ayta. L'alternative « sais-tu » est écartée car le texte dit « voir », pas « savoir » — c'est une invitation à observer, pas à connaître.

**dément** — Le sens retenu est « Déni/Rejet ». Le mot « dément » est choisi car il capture le rejet actif d'une vérité. L'alternative « nie » est écartée car « nier » est plus passif — on peut nier par ignorance. « Démentir » implique un refus actif face à une vérité connue. L'alternative « traite de mensonge » est écartée car c'est une périphrase.

**la rétribution** — Le sens retenu est « Rétribution/Compte ». Le mot « rétribution » est choisi car il capture le retour des actes — récompense et punition. L'alternative « la religion » est écartée car le contexte (les versets 2-7 montrent les conséquences sur le comportement) oriente vers la rétribution, pas vers un système religieux. L'alternative « le jugement » est écartée car le jugement est le processus, la rétribution est le résultat.`,
    segments: [
      {fr:"as-tu vu",pos:"verbe",phon:"ara'ayta",arabic:"أَرَءَيْتَ",position:1,word_key:"ray",is_particle:false,sense_retenu:"vision"},
      {fr:"celui qui",phon:"alladhi",arabic:"ٱلَّذِى",position:2,word_key:null,is_particle:true},
      {fr:"dément",pos:"verbe",phon:"yukadhdhibu",arabic:"يُكَذِّبُ",position:3,word_key:"kdhb",is_particle:false,sense_retenu:"déni"},
      {fr:"la rétribution",pos:"nom",phon:"bi-d-din",arabic:"بِٱلدِّينِ",position:4,word_key:"dyn",is_particle:false,sense_retenu:"rétribution"}
    ]
  },
  2: {
    verse_id: V[2],
    translation_arab: "C'est bien celui qui repousse l'orphelin,",
    translation_explanation: `§DEMARCHE§

La particule **fa** (alors/donc) lie ce verset au précédent — elle introduit la conséquence : voilà ce que fait celui qui dément la rétribution.

Le démonstratif **dhalika** (celui-là) pointe vers la personne décrite au verset 1 — celui qui dément.

Le pronom relatif **alladhi** (celui qui) introduit la description de son comportement.

Le verbe **yaduu** est à l'inaccompli (une forme qui dit que l'action est en cours et habituelle) — « il repousse habituellement ». D'après les sources étymologiques, la racine d-'-' signifie repousser violemment, bousculer, rejeter avec brutalité. Ce n'est pas un simple refus — c'est un acte physique et méprisant.

Le mot **al-yatim** est un nom défini avec al- (l'orphelin, catégorie connue). L'orphelin est celui qui a perdu son père — il est sans protection naturelle. Le texte dit que celui qui dément la rétribution repousse cette personne vulnérable.

§JUSTIFICATION§

**repousse** — Le sens retenu est « Repoussement/Brutalité ». Le mot « repousse » est choisi car il capture l'acte physique et méprisant. L'alternative « rejette » est écartée car « rejeter » est plus abstrait — « repousser » implique un geste physique. L'alternative « maltraite » est écartée car le texte décrit un acte spécifique (repousser), pas un traitement général.

**l'orphelin** — Le sens retenu est « Orphelinat/Solitude ». Le mot « orphelin » est gardé car c'est le français courant pour yatim. L'alternative « le faible » est écartée car le texte dit précisément « l'orphelin », pas « le faible » en général.`,
    segments: [
      {fr:"c'est bien celui",phon:"fa-dhalika alladhi",arabic:"فَذَٰلِكَ ٱلَّذِى",position:1,word_key:null,is_particle:true},
      // position 2 missing in step1 — but alladhi is part of pos1
      {fr:"qui repousse",pos:"verbe",phon:"yaduu",arabic:"يَدُعُّ",position:3,word_key:"dee2",is_particle:false,sense_retenu:"repoussement"},
      {fr:"l'orphelin",pos:"nom",phon:"al-yatim",arabic:"ٱلْيَتِيمَ",position:4,word_key:"ytm",is_particle:false,sense_retenu:"orphelin"}
    ]
  },
  3: {
    verse_id: V[3],
    translation_arab: "et qui n'incite pas à nourrir le démuni.",
    translation_explanation: `§DEMARCHE§

La conjonction **wa** (et) lie ce verset au précédent — c'est le deuxième signe du déni.

La particule **la** est une négation — « ne...pas ».

Le verbe **yahuddu** est à l'inaccompli (action habituelle) — « il n'incite pas habituellement ». D'après les sources étymologiques, la racine h-d-d signifie inciter, encourager, pousser quelqu'un à faire quelque chose. La négation dit qu'il ne fait même pas l'effort de pousser les autres à agir. C'est pire que de ne pas nourrir soi-même — c'est ne même pas encourager les autres à le faire.

La préposition **ala** (à/sur) introduit l'objet de l'incitation.

Le mot **taaam** est un nom en idafa rattaché à **al-miskin** — la nourriture du pauvre. Le taaam est ce que le pauvre a besoin de manger — le minimum vital.

Le mot **al-miskin** est un nom défini — le démuni, le pauvre. La racine s-k-n signifie être calme, immobile. Le miskin est celui qui est immobilisé par le manque — bloqué dans sa pauvreté, incapable de bouger.

§JUSTIFICATION§

**n'incite pas** — Le sens retenu est « Incitation/Encouragement ». L'expression « n'incite pas » rend la négation du verbe yahuddu. L'alternative « n'encourage pas » est écartée car « inciter » est plus fort — il implique une poussée active, pas juste un encouragement verbal.

**nourrir** — Le sens retenu est « Gustation/Nourriture ». Le mot « nourrir » rend taaam (nourriture) en verbe pour fluidifier le français. L'alternative « la nourriture de » est écartée car c'est plus lourd en français courant.

**le démuni** — Le sens retenu est « Sens isolé/Pauvre ». Le mot « démuni » est choisi car il capture l'état de celui qui n'a rien — le miskin est immobilisé par le manque. L'alternative « le pauvre » est possible mais « démuni » est plus précis — il dit « sans moyens », alors que « pauvre » peut être relatif.`,
    segments: [
      {fr:"et ne...pas",phon:"wa la",arabic:"وَلَا",position:1,word_key:null,is_particle:true},
      {fr:"incite",pos:"verbe",phon:"yahuddu",arabic:"يَحُضُّ",position:2,word_key:"hdd2",is_particle:false,sense_retenu:"incitation"},
      {fr:"à",phon:"ala",arabic:"عَلَىٰ",position:3,word_key:null,is_particle:true},
      {fr:"nourrir",pos:"nom",phon:"taaam",arabic:"طَعَامِ",position:4,word_key:"tem",is_particle:false,sense_retenu:"nourriture"},
      {fr:"le démuni",pos:"nom",phon:"al-miskin",arabic:"ٱلْمِسْكِينِ",position:5,word_key:"skn",is_particle:false,sense_retenu:"pauvre"}
    ]
  },
  4: {
    verse_id: V[4],
    translation_arab: "Alors malheur aux priants",
    translation_explanation: `§DEMARCHE§

La particule **fa** (alors/donc) lie ce verset aux précédents. Après avoir décrit le déni et ses signes (v1-3), le texte prononce un avertissement.

Le mot **wayl** est un nom indéfini — un malheur, un désastre. Le texte ne précise pas la nature exacte de ce malheur — il dit juste que c'est un wayl, quelque chose de terrible.

La préposition **li** (pour/à) introduit ceux qui sont visés.

Le mot **al-musallin** est un participe actif pluriel défini avec al- (une forme qui dit que ces personnes FONT l'action activement et en continu) — « les priants ». Le participe actif dit que la prière est leur activité identitaire — ils sont connus pour prier. Mais le wayl les vise quand même — le verset 5 va préciser pourquoi.

Le fait que le malheur vise des PRIANTS est frappant. Ce ne sont pas les non-priants qui sont visés mais les priants qui ont un défaut — défaut précisé aux versets 5-7.

§JUSTIFICATION§

**malheur** — Le sens retenu est « Malédiction/Désastre ». Le mot « malheur » est choisi car c'est le français courant pour exprimer un avertissement grave. L'alternative « perdition » est écartée car c'est du registre littéraire. L'alternative « ruine » est écartée car elle est financière en français courant.

**les priants** — Le sens retenu est « Prière/Invocation ». Le mot « priants » rend le participe actif al-musallin — ceux qui font la prière activement. L'alternative « ceux qui prient » est écartée car c'est une périphrase — « priants » est plus concis et rend le participe actif.`,
    segments: [
      {fr:"alors malheur",pos:"nom",phon:"fa-wayl",arabic:"فَوَيْلٌ",position:1,word_key:"wyl",is_particle:false,sense_retenu:"malheur"},
      {fr:"aux priants",pos:"nom",phon:"li-l-musallin",arabic:"لِّلْمُصَلِّينَ",position:2,word_key:"slw",is_particle:false,sense_retenu:"prière"}
    ]
  },
  5: {
    verse_id: V[5],
    translation_arab: "qui sont distraits de leur prière,",
    translation_explanation: `§DEMARCHE§

Le pronom relatif **alladhina** (ceux qui) introduit la qualification des priants visés — ce n'est pas tous les priants mais ceux qui ont cette caractéristique.

Le pronom **hum** (eux) insiste sur l'identité.

La préposition **an** (de/loin de) est cruciale. Elle dit « distraits DE leur prière » — pas « distraits DANS leur prière ». La différence est fondamentale : être distrait dans la prière c'est un moment d'inattention (ça arrive à tout le monde). Être distrait DE la prière c'est être structurellement éloigné de ce qu'on fait — la prière n'est pas une priorité, on la fait machinalement sans y être présent.

Le mot **salatihim** est un nom en idafa avec pronom (salat = prière, him = leur) — leur prière.

Le mot **sahun** est un participe actif pluriel (ceux qui sont distraits activement et en permanence) — les distraits. Le participe actif dit que la distraction est leur état permanent, pas un moment ponctuel.

§JUSTIFICATION§

**distraits** — Le sens retenu est « Distraction/Négligence ». Le mot « distraits » est choisi car il capture l'état d'absence intérieure. L'alternative « négligents » est écartée car la négligence implique un choix conscient de ne pas faire, alors que la distraction est un état d'absence — le corps est là, l'esprit non. L'alternative « inattentifs » est écartée car c'est du registre scolaire.

**leur prière** — Le sens retenu est « Prière/Invocation ». L'expression « leur prière » rend salatihim avec le possessif.`,
    segments: [
      {fr:"qui sont",phon:"alladhina hum",arabic:"ٱلَّذِينَ هُمْ",position:1,word_key:null,is_particle:true},
      // position 2,3 are particles
      {fr:"de leur prière",pos:"nom",phon:"an salatihim",arabic:"عَن صَلَاتِهِمْ",position:4,word_key:"slw",is_particle:false,sense_retenu:"prière"},
      {fr:"distraits",pos:"nom",phon:"sahun",arabic:"سَاهُونَ",position:5,word_key:"shw2",is_particle:false,sense_retenu:"distraction"}
    ]
  },
  6: {
    verse_id: V[6],
    translation_arab: "qui font étalage,",
    translation_explanation: `§DEMARCHE§

Le pronom relatif **alladhina** (ceux qui) ajoute une deuxième qualification.

Le pronom **hum** (eux) insiste.

Le verbe **yura'un** est à la forme III inaccompli (une forme qui implique la réciprocité ou la direction vers l'autre) — « ils font voir aux gens ». La racine r-'-y (voir) prend ici le sens causatif : faire voir, montrer. C'est le riya' — l'ostentation. Ils font leurs actes pour être vus des gens, pas pour Dieu. L'inaccompli dit que c'est leur habitude permanente.

Le texte ne précise pas ce qu'ils montrent — il dit juste qu'ils « font voir ». Le contexte (la prière, verset 4-5) suggère que c'est leur prière qu'ils montrent, mais le texte ne le dit pas explicitement.

§JUSTIFICATION§

**font étalage** — Le sens retenu est « Vision/Perception » (sens causatif : faire voir). L'expression « font étalage » est choisie car elle capture l'acte de montrer ses actions pour être vu. L'alternative « font de l'ostentation » est écartée car « ostentation » est du registre soutenu — « faire étalage » est du français courant. L'alternative « se montrent » est écartée car elle est trop vague — « faire étalage » implique qu'on étale ses actes devant les autres.`,
    segments: [
      {fr:"qui",phon:"alladhina hum",arabic:"ٱلَّذِينَ هُمْ",position:1,word_key:null,is_particle:true},
      {fr:"font étalage",pos:"verbe",phon:"yura'un",arabic:"يُرَآءُونَ",position:3,word_key:"ray",is_particle:false,sense_retenu:"ostentation"}
    ]
  },
  7: {
    verse_id: V[7],
    translation_arab: "et refusent l'aide élémentaire.",
    translation_explanation: `§DEMARCHE§

La conjonction **wa** (et) ajoute le dernier défaut.

Le verbe **yamnaaun** est à l'inaccompli pluriel (action habituelle) — « ils refusent habituellement ». D'après les sources étymologiques, la racine m-n-' signifie empêcher, bloquer, retenir. Ce n'est pas un simple « non » — c'est un blocage actif de ce qui devrait passer.

Le mot **al-maaun** est un nom défini avec al- — l'aide élémentaire. La racine m-'-n signifie couler, jaillir. Le maaun est ce qui devrait couler naturellement d'une personne vers une autre — les petits gestes d'aide quotidienne, les objets qu'on prête sans y penser (un outil, un ustensile, un peu d'eau). C'est le minimum de la solidarité humaine.

Ce mot donne son nom à la sourate entière. Le texte se termine sur le refus le plus basique : même l'aide qui ne coûte presque rien est bloquée. La sourate progresse du déni de la rétribution (v1) jusqu'au refus de l'aide la plus élémentaire (v7) — du plus abstrait au plus concret.

§JUSTIFICATION§

**refusent** — Le sens retenu est « Empêchement/Interdiction ». Le mot « refusent » est choisi car il capture le blocage actif. L'alternative « empêchent » est écartée car « empêcher » implique un obstacle mis pour les autres, alors que « refuser » est un acte personnel. L'alternative « retiennent » est écartée car c'est plus passif.

**l'aide élémentaire** — Le sens retenu est « Source/Jaillissement ». L'expression « aide élémentaire » est choisie car elle capture ce qui devrait couler naturellement (racine m-'-n = couler) et qui est du niveau le plus basique. L'alternative « le nécessaire » est écartée car trop vague. L'alternative « les petites aides » est écartée car le texte utilise un singulier défini (al-maaun), pas un pluriel. L'alternative « l'ustensile » est écartée car c'est une interprétation exégétique qui réduit le maaun à un objet spécifique — le texte dit « l'aide élémentaire » au sens large.`,
    segments: [
      {fr:"et refusent",pos:"verbe",phon:"wa-yamnaaun",arabic:"وَيَمْنَعُونَ",position:1,word_key:"mne",is_particle:false,sense_retenu:"refus"},
      {fr:"l'aide élémentaire",pos:"nom",phon:"al-maaun",arabic:"ٱلْمَاعُونَ",position:2,word_key:"men",is_particle:false,sense_retenu:"aide"}
    ]
  }
}

// ========================================================================
// INSERTION
// ========================================================================

async function run() {
  console.log('=== INSERTION SOURATE 107 ===')

  const wordAnalyses = [
    {verse_id:V[1],word_key:'ray',sense_chosen:'vision',analysis_axes:ray_axes,position:1},
    {verse_id:V[1],word_key:'kdhb',sense_chosen:'déni',analysis_axes:kdhb_axes,position:3},
    {verse_id:V[1],word_key:'dyn',sense_chosen:'rétribution',analysis_axes:dyn_axes,position:4},
    {verse_id:V[2],word_key:'dee2',sense_chosen:'repoussement',analysis_axes:dee2_axes,position:3},
    {verse_id:V[2],word_key:'ytm',sense_chosen:'orphelin',analysis_axes:ytm_axes,position:4},
    {verse_id:V[3],word_key:'hdd2',sense_chosen:'incitation',analysis_axes:hdd2_axes,position:2},
    {verse_id:V[3],word_key:'tem',sense_chosen:'nourriture',analysis_axes:tem_axes,position:4},
    {verse_id:V[3],word_key:'skn',sense_chosen:'pauvre',analysis_axes:skn_axes,position:5},
    {verse_id:V[4],word_key:'wyl',sense_chosen:'malheur',analysis_axes:wyl_axes,position:1},
    {verse_id:V[4],word_key:'slw',sense_chosen:'prière',analysis_axes:slw_axes,position:2},
    {verse_id:V[5],word_key:'slw',sense_chosen:'prière',analysis_axes:slw_axes,position:4},
    {verse_id:V[5],word_key:'shw2',sense_chosen:'distraction',analysis_axes:shw2_axes,position:5},
    {verse_id:V[6],word_key:'ray',sense_chosen:'ostentation',analysis_axes:ray_v6_axes,position:3},
    {verse_id:V[7],word_key:'mne',sense_chosen:'refus',analysis_axes:mne_axes,position:1},
    {verse_id:V[7],word_key:'men',sense_chosen:'aide',analysis_axes:men_axes,position:2},
  ]

  for (const vid of Object.values(V)) {
    await db.from('verse_word_analyses').delete().eq('verse_id', vid)
  }
  const {error: e1} = await db.from('verse_word_analyses').insert(wordAnalyses)
  if (e1) console.log('ERR vwa:', e1.message)
  else console.log('✅ verse_word_analyses: ' + wordAnalyses.length)

  for (const [vnum, t] of Object.entries(translations)) {
    const {error} = await db.from('verse_analyses').update({
      translation_arab: t.translation_arab,
      translation_explanation: t.translation_explanation,
      segments: t.segments
    }).eq('verse_id', t.verse_id)
    if (error) console.log('ERR v' + vnum + ':', error.message)
    else console.log('✅ v' + vnum + ': ' + t.translation_arab)
  }

  // Daily phrases for new/missing roots
  const phrases = [
    {word_key:'dee2',sense:'repoussement',arabic:'لا تدعّ أحدا',phon:'la tadua ahadan',french:'Ne repousse personne.'},
    {word_key:'dee2',sense:'repoussement',arabic:'دعّه بقوة',phon:'daahu bi-quwwa',french:'Il l\'a repoussé avec force.'},
    {word_key:'dee2',sense:'repoussement',arabic:'من يدعّ الضعيف يُدعّ',phon:'man yadua ad-daeef yudaa',french:'Qui repousse le faible sera repoussé.'},
    {word_key:'hdd2',sense:'incitation',arabic:'حضّ أصدقاءك على الخير',phon:'hadda asdiqaaka ala al-khayr',french:'Incite tes amis au bien.'},
    {word_key:'hdd2',sense:'incitation',arabic:'التحضيض على العلم واجب',phon:'at-tahdid ala al-ilm wajib',french:'Inciter au savoir est un devoir.'},
    {word_key:'hdd2',sense:'incitation',arabic:'حضّني على المشاركة',phon:'haddani ala al-musharaka',french:'Il m\'a encouragé à participer.'},
    {word_key:'shw2',sense:'distraction',arabic:'لا تسه عن واجبك',phon:'la tash an wajibik',french:'Ne sois pas distrait de ton devoir.'},
    {word_key:'shw2',sense:'distraction',arabic:'السهو عدو التركيز',phon:'as-sahwu aduwwu at-tarkiz',french:'La distraction est l\'ennemi de la concentration.'},
    {word_key:'shw2',sense:'distraction',arabic:'سها عن الموعد',phon:'saha an al-maweid',french:'Il a été distrait du rendez-vous.'},
    {word_key:'kdhb',sense:'déni',arabic:'لا تكذب بالحقيقة',phon:'la tukadhdhibu bi-l-haqiqa',french:'Ne démens pas la vérité.'},
    {word_key:'kdhb',sense:'déni',arabic:'التكذيب بالحق خطير',phon:'at-takdhibu bi-l-haqq khatir',french:'Démentir la vérité est grave.'},
    {word_key:'kdhb',sense:'déni',arabic:'كذّبوا بآيات الله',phon:'kadhdhabu bi-ayati llah',french:'Ils ont démenti les signes de Dieu.'},
    {word_key:'ytm',sense:'orphelin',arabic:'اكفل يتيما',phon:'ikful yatiman',french:'Prends en charge un orphelin.'},
    {word_key:'ytm',sense:'orphelin',arabic:'اليتيم يحتاج رعاية',phon:'al-yatimu yahtaju riaya',french:'L\'orphelin a besoin de soin.'},
    {word_key:'ytm',sense:'orphelin',arabic:'لا تقهر اليتيم',phon:'la taqhar al-yatim',french:'N\'opprime pas l\'orphelin.'},
    {word_key:'wyl',sense:'malheur',arabic:'ويل للظالمين',phon:'waylun li-z-zalimin',french:'Malheur aux oppresseurs.'},
    {word_key:'wyl',sense:'malheur',arabic:'الويل عاقبة الظلم',phon:'al-waylu aqibatu az-zulm',french:'Le malheur est la conséquence de l\'oppression.'},
    {word_key:'wyl',sense:'malheur',arabic:'ويل لمن لا يرحم',phon:'waylun li-man la yarham',french:'Malheur à celui qui n\'a pas de compassion.'},
    {word_key:'men',sense:'aide',arabic:'لا تمنع الماعون',phon:'la tamna al-maaun',french:'Ne refuse pas l\'aide élémentaire.'},
    {word_key:'men',sense:'aide',arabic:'الماعون حق الجار',phon:'al-maawunu haqqu al-jar',french:'L\'aide élémentaire est le droit du voisin.'},
    {word_key:'men',sense:'aide',arabic:'أعطه ماعونا',phon:'aatihi maaunan',french:'Donne-lui une aide élémentaire.'},
  ]

  for (const p of phrases) {
    const {data: wa} = await db.from('word_analyses').select('id').eq('word_key', p.word_key).limit(1)
    if (!wa || !wa[0]) continue
    const {error} = await db.from('word_daily').insert({
      analysis_id: wa[0].id, sense: p.sense,
      arabic: p.arabic, phon: p.phon, french: p.french
    })
    if (error && !error.message.includes('duplicate')) console.log('ERR daily ' + p.word_key + ':', error.message)
  }
  console.log('✅ word_daily: ' + phrases.length + ' phrases')

  // LOGS
  console.log('\n=== LOGS ===')
  for (const [vnum, t] of Object.entries(translations)) {
    const words = t.segments.filter(s => !s.is_particle).map(s => s.word_key + ' → "' + s.fr + '"').join(', ')
    console.log('VERSET 107:' + vnum + ' — ' + words)
    console.log('  ' + t.translation_arab)
  }
}

run().catch(e => { console.error('FATAL:', e); process.exit(1) })
