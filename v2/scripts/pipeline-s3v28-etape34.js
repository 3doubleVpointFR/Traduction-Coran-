const {createClient} = require('@supabase/supabase-js');
const db = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

const VERSE_ID = 321; // 3:28
const VA_ID = 680;

// =============================================
// ÉTAPE 3+4 — S3:V28
// =============================================

const translation_arab = "Que ceux qui font confiance n'adoptent pas ceux qui rejettent comme alliés, à l'exclusion de ceux qui font confiance. Et quiconque fait cela, n'est de Dieu en rien — sauf que vous vous prémunissiez d'eux par précaution. Et Dieu vous met en garde contre lui-même. Et vers Dieu est la destination.";

const full_translation = "Que les croyants ne prennent pas, pour alliés, des infidèles, au lieu de croyants. Quiconque le fait contrevient à la religion d'Allah, à moins que vous ne vous protégiez d'eux avec prudence. Allah vous met en garde contre Lui-même. Et c'est vers Allah le retour.";

const translation_explanation = `§DEMARCHE§

Après les versets 26-27 où le Prophète s'adresse à Dieu en louant Sa souveraineté absolue — celui qui donne et reprend le pouvoir, qui fait entrer la nuit dans le jour — le verset 28 passe de la louange à une directive sociale : l'interdiction d'adopter ceux qui rejettent comme alliés à la place de ceux qui font confiance.

**Yattakhidhi** (n'adoptent) est un verbe à la forme VIII (ittakhadha), précédé de la particule d'interdiction lā. La forme VIII ajoute au sens premier de la racine a-kh-dh (prendre, saisir) la dimension de choix personnel — « prendre POUR SOI ». Là où la forme I (akhadha) signifie simplement saisir, la forme VIII signifie choisir délibérément pour soi, adopter. D'après les sources étymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), ittakhadha dérive de akhadha par assimilation phonétique et signifie « il s'est pris pour lui-même, il a adopté ». Le mode jussif (après lā) fait de cette phrase une interdiction : « que ne prennent pas pour eux... ».

**Al-muʾminūna** (ceux qui font confiance) est le participe actif de la forme IV (āmana) de la racine a-m-n, au pluriel nominatif avec l'article défini. Un participe actif désigne ceux qui FONT l'action activement et de manière continue — ce n'est pas un état passif. La forme IV, forme causative, signifie « rendre sûr, accorder la confiance ». Le muʾmin est donc celui qui fait confiance activement et qui accorde la sécurité aux autres. D'après les sources étymologiques, la racine a-m-n porte le sens premier de « être en sécurité, se sentir en sécurité ». Le même mot revient en position 8 (al-muʾminīna) au génitif après min dūni — « à l'exclusion de ceux qui font confiance ».

**Al-kāfirīna** (ceux qui rejettent) est le participe actif de la forme I de la racine k-f-r, au pluriel accusatif (objet direct de yattakhidhi). Comme pour les muʾminūn, c'est un participe actif : ces personnes font activement l'action. D'après les sources étymologiques, la racine k-f-r porte le sens premier de « couvrir, cacher » — le cultivateur qui recouvre la graine de terre, la nuit qui couvre le jour. Par extension, c'est celui qui recouvre les bienfaits reçus (ingratitude) ou rejette ce qui lui est donné. Le verset oppose les deux groupes : ceux qui font confiance vs. ceux qui rejettent.

**Awliyāʾa** (alliés) est le pluriel de waliyy, de la racine w-l-y, à l'accusatif indéfini. C'est le second objet du verbe ittakhadha — « prendre les rejeteurs COMME alliés ». D'après les sources étymologiques, le waliyy est étymologiquement celui qui est immédiatement proche, si proche qu'il n'y a rien entre les deux. De cette proximité naît la protection, et de la protection naît l'alliance. Le mot est indéfini (sans al-), ce qui marque le caractère général : n'importe quel type d'alliance.

La construction **min dūni** (à l'exclusion de) précise que l'interdiction porte sur un remplacement : ne pas adopter les rejeteurs comme alliés À LA PLACE de ceux qui font confiance.

**Yafʿal** (fait) est un verbe à l'inaccompli jussif de la racine f-ʿ-l (faire, agir), après la particule conditionnelle man (quiconque). C'est un verbe générique : « quiconque fait cela ».

**Dhālika** (cela) est un démonstratif éloigné qui pointe vers l'action qui vient d'être interdite — adopter les rejeteurs comme alliés.

**Allāhi** (Dieu) apparaît trois fois dans ce verset. La première occurrence est au génitif après mina : « n'est pas DE Dieu ». La racine ʾ-l-h porte le sens de divinité. La deuxième occurrence (position 24) est au nominatif comme sujet de la mise en garde. La troisième (position 28) est au génitif après ilā : « vers Dieu ».

**Shayʾin** (chose) est un nom indéfini au génitif après fī, de la racine sh-y-ʾ. D'après les sources étymologiques, shayʾ signifie « ce qui peut être connu, ce dont on peut énoncer un attribut ». Avec la négation laysa, la construction « laysa mina allāhi fī shayʾin » donne : « n'est pas de Dieu en une chose quelconque » — n'a aucun lien avec Dieu, dans aucun domaine. Le texte ne dit pas « contrevient à la religion » — il dit « n'est en rien du côté de Dieu ».

**Tattaqū** (vous vous prémunissiez) est un verbe à la forme VIII (ittaqā) de la racine w-q-y, au subjonctif (après an). La racine w-q-y signifie « protéger, préserver ». La forme VIII ajoute la dimension réflexive : « se protéger soi-même ». D'après les sources étymologiques, ittaqā signifie « se prémunir, se mettre à l'abri ». Le complément minhum (d'eux) précise contre qui on se protège — les rejeteurs. C'est une exception à l'interdiction : on peut adopter les rejeteurs comme alliés si c'est pour se protéger d'eux.

**Tuqātan** (par précaution) est le nom verbal (masdar) de la même forme VIII, à l'accusatif absolu (mafʿūl muṭlaq). C'est une construction arabe qui renforce le verbe — littéralement « vous vous prémunissez d'eux d'une prémunition ». Elle souligne le caractère sérieux et nécessaire de cette protection.

**Yuḥadhdhirukum** (vous met en garde) est un verbe à la forme II (ḥadhdhara) de la racine ḥ-dh-r, à l'inaccompli. D'après les sources étymologiques, la racine ḥ-dh-r porte le sens premier de « être prudent, être sur ses gardes ». La forme II en dérive avec le sens de « rendre quelqu'un vigilant face à un danger ». C'est un acte dirigé vers l'extérieur — la mise en garde SORT de celui qui avertit et ATTEINT celui qui est averti. Le suffixe -kum (vous) est l'objet direct. Le sujet est Dieu. La conjonction wa (et) est intégrée au segment.

**Nafsahu** (lui-même) est un nom de la racine n-f-s (soi-même, personne, être) avec le pronom possessif -hu (son), à l'accusatif (second objet de yuḥadhdhiru). D'après les sources étymologiques, nafs signifie « soi-même, personne ». Utilisé avec un pronom possessif, il forme le réfléchi. Dieu vous met en garde contre SA PROPRE PERSONNE — c'est une formulation où l'objet de la mise en garde est la propre personne de Dieu.

**Al-maṣīru** (la destination) est un nom de lieu (sur le schème mafʿīl) de la racine ṣ-y-r, au nominatif (prédicat de la phrase nominale). D'après les sources étymologiques, la racine ṣ-y-r signifie « devenir, aboutir à un état ». Le maṣīr est le lieu ou l'état vers lequel on aboutit — la destination finale. La construction « wa ilā allāhi al-maṣīru » est une phrase nominale : « et vers Dieu est la destination » — un fait permanent.

§JUSTIFICATION§

**adopter** — Le sens retenu est « Adoption/Choix ». Le mot « adopter » est choisi car la forme VIII (ittakhadha) signifie « prendre pour soi », un choix délibéré et personnel. L'alternative « prendre » est écartée car elle appartient au sens « Prise/Saisie » — un acte physique ponctuel, sans la dimension de choix réfléchi. L'alternative « choisir pour soi » est correcte mais « adopter » est plus concis et naturel dans cette construction.

**ceux qui font confiance** — Le sens retenu est « Sécurité/Confiance ». Le mot « faire confiance » est choisi car la forme IV (āmana) est la forme causative de « être en sécurité ». L'alternative « croire » est écartée car c'est un sens post-islamique qui réduit la richesse étymologique de a-m-n (sécurité, confiance) à une adhésion doctrinale.

**ceux qui rejettent** — Le sens retenu est « Rejet/Ingratitude ». Le mot « rejeter » est choisi car le participe actif kāfir appliqué à des personnes décrit un comportement actif de rejet des bienfaits ou de la vérité. L'alternative « couvrir » est écartée car le sens physique ne s'applique pas à des personnes dans un contexte social.

**alliés** — Le sens retenu est « Proximité/Protection ». Le mot « allié » est choisi car le waliyy dans ce contexte est celui qu'on prend comme proche pour un soutien mutuel. L'alternative « protecteur » ajoute une hiérarchie absente du texte. L'alternative « proche » est trop vague.

**chose** — Le sens retenu est « Chose/Existence ». Le mot « chose » est le sens fondamental de shayʾ — avec la négation, « en rien ».

**se prémunir** — Le sens retenu est « Protection/Préservation ». Le mot « se prémunir » est choisi car la forme VIII (ittaqā) est réflexive — se protéger soi-même. L'alternative « craindre » est écartée car le contexte est explicitement « tattaqū minhum » (se prémunir D'EUX) — une protection contre des personnes, pas une crainte de Dieu. L'alternative « piété » est un sens post-islamique sans rapport.

**mettre en garde** — Le sens retenu est « Avertissement/Mise en garde ». Le mot « mettre en garde » est choisi car la forme II (ḥadhdhara) est un acte dirigé vers autrui. L'alternative « être prudent » est écartée car la prudence est un état intérieur (forme I) — ici c'est un acte extérieur de Dieu vers les humains.

**soi-même** — Le sens retenu est « Âme/Être ». Le mot « soi-même » est choisi car nafsahu est un réfléchi — Dieu met en garde contre SA PROPRE PERSONNE. L'alternative « âme » est possible mais le contexte est clairement réflexif.

**destination** — Le sens retenu est « Devenir/Destination ». Le mot « destination » est choisi car al-maṣīr est l'aboutissement, le lieu ou l'état vers lequel on parvient. L'alternative « retour » est écartée car elle implique un mouvement de retour (revenir à un point de départ) qui n'est pas dans l'étymologie de ṣ-y-r — la racine dit « aboutir à », pas « revenir à ».

§CRITIQUE§

Trois points changent significativement le sens du verset.

**« croyants/infidèles » vs « ceux qui font confiance/ceux qui rejettent »** — Les traductions courantes utilisent « croyants » pour muʾminūn et « infidèles » pour kāfirīn. Ces termes sont devenus des catégories confessionnelles rigides après la période de révélation. L'étymologie dit autre chose : muʾmin (de a-m-n, sécurité) est celui qui fait confiance et accorde la sécurité ; kāfir (de k-f-r, couvrir) est celui qui recouvre les bienfaits. Le verset ne trace pas une frontière entre deux groupes religieux figés — il décrit deux comportements opposés : la confiance vs. le rejet. Ça change la portée du verset : il ne s'agit pas d'une interdiction catégorielle mais d'une directive comportementale — ne pas s'allier à ceux qui rejettent au détriment de ceux qui font confiance.

**« contrevient à la religion d'Allah » vs « n'est de Dieu en rien »** — Hamidullah traduit « fa-laysa mina allāhi fī shayʾin » par « contrevient à la religion d'Allah ». Le mot « religion » (dīn) est absent du texte arabe. Le texte dit littéralement « n'est pas de Dieu en une chose ». Ajouter « religion » transforme une rupture de lien personnel — n'avoir plus rien de Dieu — en une transgression institutionnelle. L'étymologie dit : celui qui fait cela perd tout lien avec Dieu, dans tous les domaines, pas seulement dans un cadre « religieux ».

**« le retour » vs « la destination »** — Les traductions courantes donnent « le retour » pour al-maṣīr. La racine ṣ-y-r signifie « devenir, aboutir à ». Le maṣīr est une destination, un aboutissement. Le mot « retour » implique un retour à un point de départ, ce qui est une interprétation. D'après les sources étymologiques, ṣāra signifie « il est parvenu à l'état de, il est devenu ». Le texte dit : vers Dieu est l'aboutissement de toute chose — sans présumer d'un mouvement de retour.`;

// =============================================
// VWA — analysis_axes pour chaque mot important
// =============================================
const vwaEntries = [
  {word_key:'khdh', position:2, analysis_axes:{
    sense_chosen:'adopter', concept_chosen:'Adoption/Choix',
    concepts:{
      'Prise/Saisie':{status:'probable', senses:['prendre','saisir','recevoir','empoigner','retirer','attraper'],
        proof_ctx:"La prise est un acte physique de saisie. Ici la forme VIII (ittakhadha) ajoute la dimension de choix personnel absent de la forme I. Prendre physiquement n'est pas prendre POUR SOI de manière réfléchie."},
      'Adoption/Choix':{status:'retenu', senses:['adopter','choisir pour soi','prendre pour ami','prendre comme demeure','établir'],
        proof_ctx:"La forme VIII ittakhadha signifie « prendre pour soi, adopter ». Le verset demande de ne pas CHOISIR POUR SOI les rejeteurs comme alliés — c'est un choix délibéré. Contrairement à la Prise qui est un acte ponctuel et physique, l'Adoption est un engagement réfléchi et durable."},
      'Châtiment':{status:'nul', senses:['châtier','punir','faire rendre des comptes'],
        proof_ctx:"Le contexte est un choix d'alliance, pas une punition."},
      'Captivité':{status:'nul', senses:['captif','prisonnier','pris de force'],
        proof_ctx:"Aucun rapport avec l'emprisonnement."},
      'Enchantement/Fascination':{status:'nul', senses:['ensorceler','fasciner','retenir par charme'],
        proof_ctx:"Hors sujet — le verset parle de choix d'alliance."},
      'Terrain/Eau':{status:'nul', senses:["bassin d'eau",'terre appropriée'],
        proof_ctx:"Sens physique sans rapport avec le contexte."}
    }
  }},
  {word_key:'amn', position:3, analysis_axes:{
    sense_chosen:'faire confiance', concept_chosen:'Sécurité/Confiance',
    concepts:{
      'Sécurité/Confiance':{status:'retenu', senses:['être en sécurité','se sentir en sécurité','faire confiance','confier','fidèle','lieu sûr'],
        proof_ctx:"Le participe actif de la forme IV désigne celui qui accorde activement la confiance. Dans un verset sur les alliances, la confiance est le lien fondamental. Contrairement à la Foi qui est une adhésion doctrinale post-islamique, la Confiance est un lien relationnel actif qui correspond au contexte social du verset."},
      'Foi/Adhésion':{status:'probable', senses:['croire','avoir la foi','accepter comme vrai','croyant','confirmer'],
        proof_ctx:"Le sens de croyance est une extension post-islamique du sens premier de sécurité. Le contexte d'alliance sociale active le sens de confiance plutôt que d'adhésion doctrinale."},
      'Garantie/Protection':{status:'peu_probable', senses:['protéger','accorder la sécurité'],
        proof_ctx:"Le verset ne met pas l'accent sur la protection physique mais sur les liens d'alliance fondés sur la confiance."},
      'Sens isolé/Amen':{status:'nul', senses:['amen'],
        proof_ctx:"Sens liturgique isolé, sans rapport."}
    }
  }},
  {word_key:'kfr', position:4, analysis_axes:{
    sense_chosen:'rejeter', concept_chosen:'Rejet/Ingratitude',
    concepts:{
      'Couverture/Dissimulation':{status:'probable', senses:['couvrir','cacher','la nuit qui couvre'],
        proof_ctx:"Le sens premier de k-f-r est couvrir physiquement. Mais le participe actif appliqué à des personnes dans un contexte social dépasse la couverture physique — ce sont des gens qui couvrent les bienfaits, ce qui relève du Rejet."},
      'Rejet/Ingratitude':{status:'retenu', senses:['nier','être ingrat','renier un bienfait','rejeter','mécréant'],
        proof_ctx:"Le participe actif kāfir désigne des personnes par leur comportement social — l'opposition aux muʾminūn. Le rejet est l'acte de couvrir les bienfaits reçus, le contraire de la confiance. Contrairement à la Couverture physique, le Rejet est un comportement relationnel actif."},
      'Expiation/Réparation':{status:'nul', senses:['expier','effacer les péchés'],
        proof_ctx:"Le contexte n'est pas celui de l'expiation."},
      'Sens isolé/Cultivateur':{status:'nul', senses:['cultivateur'],
        proof_ctx:"Le cultivateur couvre la graine de terre — sens physique isolé."},
      'Sens isolé/Goudron':{status:'nul', senses:['goudron'], proof_ctx:"Sans rapport."},
      'Sens isolé/Village':{status:'nul', senses:['village'], proof_ctx:"Sans rapport."}
    }
  }},
  {word_key:'wly', position:5, analysis_axes:{
    sense_chosen:'allié', concept_chosen:'Proximité/Protection',
    concepts:{
      'Proximité/Protection':{status:'retenu', senses:['proche','ami','protecteur','allié','tuteur','patron','héritier','parent','affranchi'],
        proof_ctx:"Awliyāʾ désigne ceux qu'on prend comme proches — un lien de proximité et d'alliance. Le waliyy est celui qui est immédiatement adjacent, sans intermédiaire. Contrairement à l'Autorité qui est un rapport de pouvoir vertical, la Proximité est un lien horizontal de confiance mutuelle."},
      'Autorité':{status:'peu_probable', senses:['gouverner','administrer','régir','préfet','prendre en charge','maîtriser'],
        proof_ctx:"Le verset ne parle pas de prendre les rejeteurs comme gouvernants mais comme alliés dans un rapport horizontal."},
      'Éloignement/Détournement':{status:'nul', senses:['se détourner',"s'éloigner",'tourner le dos','fuir'],
        proof_ctx:"Contraire du contexte — on choisit des alliés pour la proximité."},
      'Succession/Consécution':{status:'nul', senses:['suivre','être adjacent','consécutif'],
        proof_ctx:"La succession temporelle n'est pas le sujet."},
      'Bienfaisance/Don':{status:'nul', senses:['accorder un bienfait','infliger'],
        proof_ctx:"Le verset ne parle pas de bienfaisance."},
      'Droit/Mérite':{status:'nul', senses:['être plus digne de','avoir droit'],
        proof_ctx:"Le comparatif de mérite n'est pas le sujet."}
    }
  }},
  {word_key:'amn', position:8, analysis_axes:{
    sense_chosen:'faire confiance', concept_chosen:'Sécurité/Confiance',
    concepts:{
      'Sécurité/Confiance':{status:'retenu', senses:['être en sécurité','se sentir en sécurité','faire confiance','confier','fidèle','lieu sûr'],
        proof_ctx:"Même analyse que la position 3. Le participe actif de la forme IV désigne ceux qui font confiance. Ici au génitif après min dūni — « à l'exclusion de ceux qui font confiance »."},
      'Foi/Adhésion':{status:'probable', senses:['croire','avoir la foi','accepter comme vrai','croyant','confirmer'],
        proof_ctx:"Sens post-islamique — le contexte social active la confiance plutôt que la croyance doctrinale."},
      'Garantie/Protection':{status:'peu_probable', senses:['protéger','accorder la sécurité'],
        proof_ctx:"L'accent est sur la confiance mutuelle, pas la protection physique."},
      'Sens isolé/Amen':{status:'nul', senses:['amen'], proof_ctx:"Sans rapport."}
    }
  }},
  {word_key:'fel', position:10, analysis_axes:{
    sense_chosen:'faire', concept_chosen:'Action/Acte',
    concepts:{'Action/Acte':{status:'retenu', senses:['faire','agir','action','subir une action','faire ensemble','efficace'],
      proof_ctx:"Verbe général qui désigne l'acte de faire. Seul sens de cette racine, appliqué ici à « quiconque fait cela »."}}
  }},
  {word_key:'ðlk', position:11, analysis_axes:{
    sense_chosen:'cela', concept_chosen:'Démonstratif éloigné',
    concepts:{'Démonstratif éloigné':{status:'retenu', senses:['celui-là','cela','ce'],
      proof_ctx:"Démonstratif d'éloignement qui pointe vers l'action décrite. Seul sens de cette racine."}}
  }},
  {word_key:'llh', position:14, analysis_axes:{
    sense_chosen:'Dieu', concept_chosen:'Divinité',
    concepts:{
      'Divinité':{status:'retenu', senses:['divinité','dieu','Dieu','théologie'],
        proof_ctx:"Allāh est le nom propre de la divinité. Ici au génitif — « n'est pas de Dieu en rien »."},
      'Adoration/Culte':{status:'probable', senses:['adorer','servir','se consacrer au culte'],
        proof_ctx:"La racine porte le sens d'adoration, mais ici allāh est utilisé comme nom propre."},
      'Confusion/Perplexité':{status:'nul', senses:['être confus'], proof_ctx:"Sens marginal sans rapport."},
      'Asservissement':{status:'nul', senses:['réduire en esclavage'], proof_ctx:"Sans rapport."}
    }
  }},
  {word_key:'šya', position:16, analysis_axes:{
    sense_chosen:'chose', concept_chosen:'Chose/Existence',
    concepts:{
      'Chose/Existence':{status:'retenu', senses:['chose','quelque chose','rien','entité','existence'],
        proof_ctx:"Shayʾin indéfini au génitif après fī signifie « une chose quelconque ». Avec la négation laysa, l'expression donne « en aucune chose, en rien »."},
      'Volonté':{status:'nul', senses:['vouloir','créer','désirer','souhaiter','volonté'],
        proof_ctx:"Le nom shayʾ n'active pas le sens verbal de vouloir."},
      'Incitation/Contrainte':{status:'nul', senses:['inciter','contraindre'],
        proof_ctx:"Formes verbales dérivées sans rapport avec le nom."},
      'Laideur/Difformité':{status:'nul', senses:['rendre laid','mal formé'], proof_ctx:"Sens isolé sans rapport."},
      'Apaisement':{status:'nul', senses:['apaiser sa colère'], proof_ctx:"Sens isolé sans rapport."}
    }
  }},
  {word_key:'wqy', position:19, analysis_axes:{
    sense_chosen:'se prémunir', concept_chosen:'Protection/Préservation',
    concepts:{
      'Protection/Préservation':{status:'retenu', senses:['protéger','préserver','craindre','piété','se prémunir','éviter'],
        proof_ctx:"La forme VIII (ittaqā) est réflexive — se protéger soi-même. Le contexte est explicite : tattaqū MINHUM (se prémunir D'EUX). Le sens de piété/crainte de Dieu est une extension post-islamique qui ne s'applique pas ici."},
      'Sens isolé/Bouclier':{status:'nul', senses:['bouclier'],
        proof_ctx:"Objet physique, pas l'acte de se protéger."}
    }
  }},
  {word_key:'wqy', position:22, analysis_axes:{
    sense_chosen:'se prémunir', concept_chosen:'Protection/Préservation',
    concepts:{
      'Protection/Préservation':{status:'retenu', senses:['protéger','préserver','craindre','piété','se prémunir','éviter'],
        proof_ctx:"Tuqātan est le masdar de la forme VIII, en accusatif absolu renforçant le verbe tattaqū. C'est l'acte de protection lui-même. Le contexte — se protéger des rejeteurs — confirme le sens de protection active."},
      'Sens isolé/Bouclier':{status:'nul', senses:['bouclier'],
        proof_ctx:"Objet physique, pas l'acte de protection."}
    }
  }},
  {word_key:'hðr', position:23, analysis_axes:{
    sense_chosen:'mettre en garde', concept_chosen:'Avertissement/Mise en garde',
    concepts:{
      'Prudence/Méfiance':{status:'probable', senses:['se méfier','être prudent','craindre','prendre garde','être vigilant','être sur ses gardes','précaution'],
        proof_ctx:"La prudence est un état intérieur qui reste chez celui qui la ressent. Mais la forme II (yuḥadhdhiru) est un acte dirigé vers l'extérieur — Dieu FAIT quelqu'un devenir vigilant. C'est la mise en garde, pas la prudence elle-même."},
      'Avertissement/Mise en garde':{status:'retenu', senses:['mettre en garde','avertir','prévenir','faire craindre'],
        proof_ctx:"La forme II ḥadhdhara est l'acte de rendre autrui vigilant — un transfert de vigilance. Dieu est le sujet, les humains sont l'objet. Contrairement à la Prudence qui est un état intérieur, la Mise en garde est un acte extérieur dirigé vers autrui."},
      'Danger/Calamité':{status:'peu_probable', senses:['chose crainte','calamité','guerre','attaque hostile'],
        proof_ctx:"Le danger est ce contre quoi on met en garde, pas l'acte de mise en garde. Dieu met en garde, il n'est pas une calamité."},
      'Terrain/Rugosité':{status:'nul', senses:['sol rugueux','sommet de montagne'],
        proof_ctx:"Sens physique sans rapport."},
      'Fausseté/Vanité':{status:'nul', senses:['ce qui est faux','vain'],
        proof_ctx:"Sans rapport."}
    }
  }},
  {word_key:'llh', position:24, analysis_axes:{
    sense_chosen:'Dieu', concept_chosen:'Divinité',
    concepts:{
      'Divinité':{status:'retenu', senses:['divinité','dieu','Dieu','théologie'],
        proof_ctx:"Allāh au nominatif, sujet de yuḥadhdhiru — c'est Dieu qui met en garde."},
      'Adoration/Culte':{status:'probable', senses:['adorer','servir','se consacrer au culte'],
        proof_ctx:"Sens de la racine mais allāh est nom propre ici."},
      'Confusion/Perplexité':{status:'nul', senses:['être confus'], proof_ctx:"Sans rapport."},
      'Asservissement':{status:'nul', senses:['réduire en esclavage'], proof_ctx:"Sans rapport."}
    }
  }},
  {word_key:'nfs', position:25, analysis_axes:{
    sense_chosen:'soi-même', concept_chosen:'Âme/Être',
    concepts:{
      'Âme/Être':{status:'retenu', senses:['âme','soi-même','personne','esprit','désir'],
        proof_ctx:"Nafs avec le pronom -hu forme le réfléchi « lui-même ». Dieu met en garde contre SA PROPRE PERSONNE — le sens réflexif est directement activé par cette construction."},
      'Souffle/Vie':{status:'nul', senses:['souffle','respirer','soulagement'],
        proof_ctx:"Le souffle physique n'est pas activé par la construction réflexive."},
      'Corps/Anatomie':{status:'nul', senses:['sang'], proof_ctx:"Sens physique isolé sans rapport."},
      'Sens isolé/Oeil':{status:'nul', senses:['oeil mauvais'], proof_ctx:"Sans rapport."},
      'Sens isolé/Quantité':{status:'nul', senses:['quantité'], proof_ctx:"Sans rapport."}
    }
  }},
  {word_key:'llh', position:28, analysis_axes:{
    sense_chosen:'Dieu', concept_chosen:'Divinité',
    concepts:{
      'Divinité':{status:'retenu', senses:['divinité','dieu','Dieu','théologie'],
        proof_ctx:"Allāh au génitif après ilā — « vers Dieu est la destination »."},
      'Adoration/Culte':{status:'probable', senses:['adorer','servir','se consacrer au culte'],
        proof_ctx:"Sens de la racine mais allāh est nom propre."},
      'Confusion/Perplexité':{status:'nul', senses:['être confus'], proof_ctx:"Sans rapport."},
      'Asservissement':{status:'nul', senses:['réduire en esclavage'], proof_ctx:"Sans rapport."}
    }
  }},
  {word_key:'syr', position:29, analysis_axes:{
    sense_chosen:'destination', concept_chosen:'Devenir/Destination',
    concepts:{
      'Devenir/Destination':{status:'retenu', senses:['devenir','destination','aboutir','se transformer','évoluer','faire devenir','fin','résultat','issue'],
        proof_ctx:"Al-maṣīr (nom de lieu, schème mafʿīl) est l'aboutissement, le lieu vers lequel on parvient. La racine ṣ-y-r porte l'idée de devenir — le maṣīr est ce qu'on DEVIENT ou l'endroit où l'on ABOUTIT. Contrairement au Séjour qui est un lieu où l'on reste, la Destination est un point d'arrivée directionnel."},
      'Enclos/Habitat':{status:'nul', senses:['enclos pour bétail','parc'],
        proof_ctx:"Un enclos n'est pas une destination."},
      'Jugement/Intelligence':{status:'nul', senses:['jugement final','opinion','intelligence'],
        proof_ctx:"Le jugement intellectuel n'est pas activé par le nom de lieu."},
      'Séjour/Sépulture':{status:'peu_probable', senses:['lieu de séjour','tombe'],
        proof_ctx:"Le séjour est un lieu où l'on reste, alors que al-maṣīr est un aboutissement directionnel (ilā = vers). L'accent est sur le mouvement, pas la permanence."}
    }
  }}
];

// =============================================
// Segments étape 4 — fr + sense_retenu
// =============================================
const segmentUpdates = {
  2:  {fr:'adoptent', sense_retenu:'adopter'},
  3:  {fr:'ceux qui font confiance', sense_retenu:'faire confiance'},
  4:  {fr:'ceux qui rejettent', sense_retenu:'rejeter'},
  5:  {fr:'alliés', sense_retenu:'allié'},
  8:  {fr:'ceux qui font confiance', sense_retenu:'faire confiance'},
  10: {fr:'fait', sense_retenu:'faire'},
  11: {fr:'cela', sense_retenu:'cela'},
  14: {fr:'Dieu', sense_retenu:'Dieu'},
  16: {fr:'chose', sense_retenu:'chose'},
  19: {fr:'vous prémunissiez', sense_retenu:'se prémunir'},
  22: {fr:'par précaution', sense_retenu:'se prémunir'},
  23: {fr:'et vous met en garde', sense_retenu:'mettre en garde'},
  24: {fr:'Dieu', sense_retenu:'Dieu'},
  25: {fr:'lui-même', sense_retenu:'soi-même'},
  28: {fr:'Dieu', sense_retenu:'Dieu'},
  29: {fr:'la destination', sense_retenu:'destination'}
};

// =============================================
// word_daily — 3 phrases par racine sans phrases
// =============================================
const dailyPhrases = [
  {analysis_id:529, sense:'adopter', arabic:'اتَّخَذَ', phon:'ittakhadha',
   french:"J'ai adopté ce quartier comme mon chez-moi — en trois mois il est devenu une partie de ma vie."},
  {analysis_id:529, sense:'adopter', arabic:'اتَّخَذَ', phon:'ittakhadha',
   french:"Elle a adopté cette méthode de travail et ne veut plus en changer."},
  {analysis_id:529, sense:'adopter', arabic:'اتَّخَذَ', phon:'ittakhadha',
   french:"Ils ont adopté cet enfant il y a dix ans — il fait partie de la famille."},
  {analysis_id:1304, sense:'mettre en garde', arabic:'حَذَّرَ', phon:'ḥadhdhara',
   french:"Le médecin m'a mis en garde contre les effets secondaires du médicament."},
  {analysis_id:1304, sense:'mettre en garde', arabic:'حَذَّرَ', phon:'ḥadhdhara',
   french:"Je te mets en garde : cette route est dangereuse la nuit."},
  {analysis_id:1304, sense:'mettre en garde', arabic:'حَذَّرَ', phon:'ḥadhdhara',
   french:"Les panneaux nous mettent en garde contre les chutes de pierres."},
  {analysis_id:796, sense:'destination', arabic:'مَصِير', phon:'maṣīr',
   french:"Quelle est la destination de ce vol — Paris ou Lyon ?"},
  {analysis_id:796, sense:'destination', arabic:'مَصِير', phon:'maṣīr',
   french:"Après vingt ans de travail, sa destination finale était la retraite."},
  {analysis_id:796, sense:'destination', arabic:'مَصِير', phon:'maṣīr',
   french:"Le colis est arrivé à destination ce matin."}
];


(async()=>{
  console.log('=== PIPELINE S3:V28 — ÉTAPES 3+4 ===\n');

  // 1. Update segments avec fr + sense_retenu
  console.log('--- 1. Mise à jour segments ---');
  const {data:va} = await db.from('verse_analyses').select('segments').eq('id', VA_ID).single();
  const segs = [...va.segments];

  for (const [posStr, upd] of Object.entries(segmentUpdates)) {
    const pos = parseInt(posStr);
    const idx = segs.findIndex(s => s.position === pos);
    if (idx >= 0) {
      segs[idx] = {...segs[idx], ...upd};
      console.log('  pos=' + pos + ': fr="' + upd.fr + '" sense_retenu="' + upd.sense_retenu + '"');
    } else {
      console.log('  pos=' + pos + ': NOT FOUND <<<');
    }
  }

  const {error:segErr} = await db.from('verse_analyses').update({
    segments: segs,
    translation_arab: translation_arab,
    translation_explanation: translation_explanation,
    full_translation: full_translation
  }).eq('id', VA_ID);
  console.log('VA update:', segErr ? 'ERROR: '+segErr.message : 'OK');

  // 2. Insert VWA entries
  console.log('\n--- 2. Insert VWA ---');
  const vwaToInsert = vwaEntries.map(e => ({
    verse_id: VERSE_ID,
    word_key: e.word_key,
    position: e.position,
    analysis_axes: e.analysis_axes
  }));

  const {error:vwaErr} = await db.from('verse_word_analyses').insert(vwaToInsert);
  console.log('VWA insert (' + vwaToInsert.length + ' entries):', vwaErr ? 'ERROR: '+vwaErr.message : 'OK');

  // 3. Insert word_daily
  console.log('\n--- 3. Insert word_daily ---');
  for (const aid of [529, 1304, 796]) {
    const {count} = await db.from('word_daily').select('*',{count:'exact',head:true}).eq('analysis_id', aid);
    console.log('  aid=' + aid + ' existing: ' + count);
  }
  const {error:dailyErr} = await db.from('word_daily').insert(dailyPhrases);
  console.log('word_daily insert (' + dailyPhrases.length + '):', dailyErr ? 'ERROR: '+dailyErr.message : 'OK');

  // 4. Vérification finale
  console.log('\n--- 4. Vérification ---');
  const {data:vaFinal} = await db.from('verse_analyses').select('translation_arab,full_translation').eq('id', VA_ID).single();
  console.log('translation_arab:', vaFinal.translation_arab ? vaFinal.translation_arab.substring(0,100) + '...' : 'MISSING');
  console.log('full_translation:', vaFinal.full_translation ? vaFinal.full_translation.substring(0,100) + '...' : 'MISSING');

  const {data:vwaFinal} = await db.from('verse_word_analyses').select('word_key,position').eq('verse_id', VERSE_ID);
  console.log('VWA count:', vwaFinal ? vwaFinal.length : 0);

  const {data:segFinal} = await db.from('verse_analyses').select('segments').eq('id', VA_ID).single();
  const importantSegs = segFinal.segments.filter(s => s.type === 'important');
  const withFr = importantSegs.filter(s => s.fr);
  console.log('Important segments: ' + importantSegs.length + ', with fr: ' + withFr.length);

  // LOGS OBLIGATOIRES
  console.log('\n========================================');
  console.log('VERSET 3:28 — TERMINÉ');
  console.log('========================================');
  console.log('  yattakhidhi (khdh) → sens "Adoption/Choix" → mot français "adopter"');
  console.log('  al-muʾminūna (amn) → sens "Sécurité/Confiance" → mot français "faire confiance"');
  console.log('  al-kāfirīna (kfr) → sens "Rejet/Ingratitude" → mot français "rejeter"');
  console.log('  awliyāʾa (wly) → sens "Proximité/Protection" → mot français "allié"');
  console.log('  yafʿal (fel) → sens "Action/Acte" → mot français "faire"');
  console.log('  dhālika (ðlk) → sens "Démonstratif éloigné" → mot français "cela"');
  console.log('  allāhi (llh) → sens "Divinité" → mot français "Dieu"');
  console.log('  shayʾin (šya) → sens "Chose/Existence" → mot français "chose"');
  console.log('  tattaqū (wqy) → sens "Protection/Préservation" → mot français "se prémunir"');
  console.log('  tuqātan (wqy) → sens "Protection/Préservation" → mot français "précaution"');
  console.log('  yuḥadhdhirukum (hðr) → sens "Avertissement/Mise en garde" → mot français "mettre en garde"');
  console.log('  nafsahu (nfs) → sens "Âme/Être" → mot français "soi-même"');
  console.log('  al-maṣīru (syr) → sens "Devenir/Destination" → mot français "destination"');
  console.log('');
  console.log('Traduction: "' + translation_arab + '"');
  console.log('');
  console.log('Hamidullah: "' + full_translation + '"');
})();
