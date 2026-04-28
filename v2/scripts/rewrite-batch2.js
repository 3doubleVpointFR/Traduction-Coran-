const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

const CRITIQUES = {
  // V42 (vid=335)
  // NOUS : Et lorsque les anges dirent : « Ô Marie, Dieu t'a choisie, t'a purifiée, et t'a choisie au-dessus des femmes des mondes. »
  // HAMI : (Rappelle-toi) quand les Anges dirent : « Ô Marie, certes Allah t'a élue, t'a purifiée ; et t'a élue au-dessus des femmes des mondes. »
  335: `§CRITIQUE§

**ajout de « (Rappelle-toi) »** : Hamidullah ajoute « (Rappelle-toi) » avant « quand les Anges dirent ». Ce mot n'existe pas dans le texte arabe — la particule iḏ signifie simplement « lorsque ». L'ajout vient d'une lecture exégétique (verbe uḏkur sous-entendu) qui transforme la narration en injonction adressée au Prophète.

**lorsque vs « quand »** : Hamidullah rend iḏ par « quand ». L'arabe iḏ est une particule temporelle qui place la scène dans le passé révolu — « lorsque » garde la valeur temporelle révolue ; « quand » est plus neutre et peut couvrir présent ou passé.

**anges vs « Anges »** : Hamidullah majuscule « Anges ». Le mot al-malāʾika est descriptif (créatures célestes) — la majuscule chrétienne tend à figer le mot en concept dogmatique alors que le terme arabe est descriptif.

**Dieu vs « certes Allah »** : Hamidullah ajoute « certes » et translittère Allah. Le texte arabe inna allāha — la particule inna porte l'emphase mais s'incorpore en français par l'ordre des mots, pas par un adverbe ajouté. ʾallāh = la divinité, accessible en français par « Dieu ».

**t'a choisie vs « t'a élue »** : Hamidullah rend iṣṭafāki par « élue ». La racine ṣ-f-w est celle de la pureté et du tri (sélection du plus pur), alors que « élue » convoque le champ politique/électoral. « Choisie » garde la simplicité descriptive du verbe arabe.

**au-dessus des femmes des mondes vs « au-dessus des femmes de l'univers »** : on conserve « des mondes » (pluriel arabe ʿālamīn) — Hamidullah passe au singulier « l'univers ». Le pluriel arabe désigne plusieurs catégories ou époques, ce qui élargit la portée du choix divin (toutes les femmes de toutes les époques).`,

  // V43 (vid=336)
  // NOUS : Ô Marie, dévoue-toi à ton Seigneur, prosterne-toi et incline-toi avec ceux qui s'inclinent.
  // HAMI : Ô Marie, obéis à ton Seigneur, prosterne-toi, et incline-toi avec ceux qui s'inclinent.
  336: `§CRITIQUE§

**dévoue-toi vs « obéis »** : Hamidullah rend uqnutī par « obéis ». La racine q-n-t désigne la dévotion permanente, l'humilité active devant Dieu — bien plus que la simple obéissance. Le qānit est celui qui se tient en posture de soumission constante. « Obéir » réduit l'attitude à un acte ponctuel d'exécution, alors que la racine porte une posture continue de dévouement.`,

  // V44 (vid=337)
  // NOUS : Cela fait partie des nouvelles de l'invisible que Nous te révélons. Et tu n'étais pas auprès d'eux lorsqu'ils lançaient leurs calames : lequel d'entre eux prendrait en charge Marie. Et tu n'étais pas auprès d'eux lorsqu'ils se disputaient.
  // HAMI : Ce sont là des nouvelles de l'Inconnaissable que Nous te révélons. Car tu n'étais pas là lorsqu'ils jetaient leurs calames pour décider qui se chargerait de Marie ! Tu n'étais pas là non plus lorsqu'ils se disputaient.
  337: `§CRITIQUE§

**Cela fait partie des nouvelles vs « Ce sont là des nouvelles »** : Hamidullah rend ḏālika min anbāʾ par « Ce sont là des nouvelles ». Le démonstratif arabe ḏālika (cela) avec min partitif (« parmi, fait partie de ») insiste sur l'appartenance de cet élément à un ensemble plus large (autres nouvelles non révélées). « Ce sont là » aplatit l'image partitive arabe.

**l'invisible vs « l'Inconnaissable »** : Hamidullah rend al-ghayb par « l'Inconnaissable ». Or al-ghayb (racine gh-y-b = être absent, non visible) désigne ce qui échappe à la perception directe, mais reste connaissable par d'autres voies (révélation). « Inconnaissable » fige la chose comme inaccessible par principe — glissement métaphysique kantien absent du sens arabe.

**auprès d'eux vs « là »** : Hamidullah condense « auprès d'eux » en « là ». La structure arabe ladayhim (auprès d'eux) est précise dans sa localisation (à proximité immédiate, dans leur entourage). « Là » est plus vague et perd la dimension de proximité personnelle.

**lançaient vs « jetaient »** : Hamidullah rend yulqūna par « jetaient ». La racine l-q-y porte le sens de « lancer, projeter avec intention » — pas le simple « jeter ». Dans le rite des calames (tirage au sort par projection rituelle), c'est l'intention rituelle qui compte. « Lancer » conserve l'action décidée et orientée.

**lequel d'entre eux prendrait en charge vs « pour décider qui se chargerait de »** : Hamidullah ajoute « pour décider » et reformule. Le texte arabe ayyuhum yakfulu maryam est une question indirecte directe (« lequel d'entre eux assumerait Marie ») — pas un acte de décision préalable. Hamidullah rajoute la couche délibérative absente.

**prendrait en charge vs « se chargerait de »** : Hamidullah rend yakfulu par « se chargerait de ». La racine k-f-l désigne la tutelle, la garantie, la prise en responsabilité formelle. « Prendre en charge » conserve la responsabilité formelle ; « se charger de » glisse vers le simple soin matériel.`,

  // V45 (vid=338)
  // NOUS : Lorsque les anges dirent : « Ô Marie, certes Dieu t'annonce la bonne nouvelle d'un mot venant de Lui, dont le nom est le Messie, Jésus fils de Marie, éminent dans l'ici-bas et l'au-delà, et parmi les rapprochés. »
  // HAMI : (Rappelle-toi) quand les Anges dirent : « Ô Marie, voilà qu'Allah t'annonce une parole de Sa part : son nom sera « al-Masîh » « 'Issâ », fils de Marie, illustre ici-bas comme dans l'au-delà, et l'un des rapprochés d'Allah. »
  338: `§CRITIQUE§

**ajout de « (Rappelle-toi) »** : Hamidullah ajoute « (Rappelle-toi) » avant « quand les Anges dirent ». Ce mot n'existe pas dans le texte arabe — la particule idh signifie simplement « lorsque ». L'ajout vient d'une lecture exégétique qui transforme la narration en injonction.

**Lorsque vs « quand »** : Hamidullah rend idh par « quand ». L'arabe idh place la scène dans le passé révolu — « lorsque » garde la valeur révolue ; « quand » est plus neutre.

**anges vs « Anges »** : Hamidullah majuscule. Le mot al-malāʾika est descriptif ; la majuscule fige en concept dogmatique chrétien.

**certes Dieu vs « voilà qu'Allah »** : Hamidullah ajoute l'emphatique « voilà que » et translittère Allah. Le texte arabe inna allāha — l'emphase de inna se rend par « certes » placé après le sujet, pas par « voilà que » initial.

**la bonne nouvelle vs « une parole »** : Hamidullah aplatit yubashshiruki bi-kalimatin en « t'annonce une parole ». La forme yubashshiru (forme II de b-š-r) est spécifiquement « annoncer une BONNE NOUVELLE qui réjouit » — la dimension joyeuse est dans le verbe lui-même.

**d'un mot venant de Lui vs « une parole de Sa part »** : Hamidullah rend kalima par « parole ». Kalima est plus large que « parole » — c'est un mot, une parole, ou un décret performant (par lequel quelque chose advient). Ici Jésus est désigné comme « kalima » — un mot-décret qui se réalise. « Mot » garde l'unité linguistique ; « parole » glisse vers le discours.

**dont le nom est le Messie, Jésus fils de Marie vs « son nom sera « al-Masîh » « 'Issâ », fils de Marie »** : Hamidullah translittère al-Masīḥ en « al-Masîh » et ʿīsā en « 'Issâ ». Cette double translittération coupe le lecteur francophone des sens étymologiques (al-Masīḥ = l'Oint, racine m-s-ḥ ; Jésus = transposition usuelle de l'hébreu Yēšūaʿ).

**éminent vs « illustre »** : Hamidullah rend wajīhan par « illustre ». La racine w-j-h (visage, face) ancre wajīh dans la notion de prééminence visible. « Éminent » conserve l'idée de qui se distingue, qui se voit ; « illustre » glisse vers la célébrité.

**dans l'ici-bas et l'au-delà vs « ici-bas comme dans l'au-delà »** : Hamidullah ajoute « comme dans » qui n'existe pas dans le texte arabe (fī al-dunyā wa-l-ʾākhira = « dans l'ici-bas et l'au-delà »). L'ajout transforme la coordination en comparaison.

**parmi les rapprochés vs « l'un des rapprochés d'Allah »** : Hamidullah ajoute « d'Allah » par souci d'explicitation, mais le texte arabe se contente de al-muqarrabīn (les rapprochés) — l'agent du rapprochement est implicite et n'a pas besoin d'être nommé.`,

  // V46 (vid=339)
  // NOUS : Et il s'adressera aux gens au berceau et adulte, et parmi les vertueux.
  // HAMI : Il parlera aux gens, dans le berceau et en son âge mûr et il sera du nombre des gens de bien.
  339: `§CRITIQUE§

**Et il s'adressera vs « Il parlera »** : Hamidullah supprime la conjonction wa- (et) initiale et rend yukallimu par « parlera ». La racine k-l-m (parole, discours) en forme II yukallim signifie « adresser la parole à quelqu'un » — c'est un acte communicationnel orienté vers un destinataire. « S'adresser à » conserve cette dimension d'interlocution ; « parler » est plus neutre.

**au berceau vs « dans le berceau »** : Hamidullah ajoute « dans » par souci de précision spatiale. Le texte arabe fī al-mahd peut se rendre par « au berceau » (locution figée en français pour désigner la petite enfance) ou « dans le berceau » (sens littéral). Notre traduction préfère la locution figée qui désigne l'âge.

**adulte vs « en son âge mûr »** : Hamidullah rend kahlan par « son âge mûr ». Kahl désigne précisément l'homme dans la pleine force de l'âge (entre 30 et 50 ans). « Âge mûr » est ambigu en français (peut désigner aussi la vieillesse) ; « adulte » est plus net pour l'opposition au berceau (mahd).

**parmi les vertueux vs « du nombre des gens de bien »** : Hamidullah délaye min aṣ-ṣāliḥīn en « du nombre des gens de bien ». Le participe actif ṣāliḥ marque l'agentivité (celui qui fait activement le bien) ; « gens de bien » est une catégorie passive. « Vertueux » conserve l'agentivité du participe.

**ajout de « il sera »** : Hamidullah ajoute « il sera » devant « du nombre des gens de bien » pour marquer le futur. Le texte arabe wa-min aṣ-ṣāliḥīn est un complément en min partitif simple, sans verbe — l'ajout transforme une simple appartenance en prédication temporelle.`,

  // V47 (vid=340)
  // NOUS : Elle dit : « Mon seigneur, comment y aura-t-il pour moi un enfant alors qu'aucun être humain ne m'a touchée ? » Il dit : « Ainsi Dieu crée ce qu'Il veut. Lorsqu'Il décrète une chose, Il lui dit seulement : "Sois !", et elle est. »
  // HAMI : Elle dit : « Seigneur, comment aurais-je un enfant, aucun homme ne m'ayant touchée ? » Il dit : « C'est ainsi qu'Allah crée ce qu'Il veut. Quand Il décide d'une chose, Il n'a qu'à dire : "Sois", et c'est ! »
  340: `§CRITIQUE§

**Mon Seigneur vs « Seigneur »** : Hamidullah supprime le pronom possessif. Le texte arabe rabbi (avec suffixe -i de la 1ère personne) signifie explicitement « mon Seigneur » — la relation personnelle de Marie à son Seigneur est marquée. « Seigneur » seul efface cette appartenance.

**comment y aura-t-il pour moi un enfant vs « comment aurais-je un enfant »** : Hamidullah condense en futur conditionnel personnel. Le texte arabe annā yakūnu lī waladun est une question existentielle (« comment se fera-t-il à moi un enfant ») avec yakūnu (verbe d'existence) au futur — pas un conditionnel personnel. Notre traduction conserve la structure existentielle arabe.

**alors qu'aucun être humain ne m'a touchée vs « aucun homme ne m'ayant touchée »** : Hamidullah utilise un participe présent et supprime « alors que ». Le texte arabe wa-lam yamsasnī bashar est une proposition concessive (« et alors que ne m'a touchée aucun bashar »). Notre traduction conserve la concessive ; le participe présent français efface la conjonction.

**aucun être humain vs « aucun homme »** : Hamidullah rend bashar par « homme ». La racine b-š-r désigne l'humain en tant qu'espèce (peau, chair) — neutre quant au genre. « Homme » glisse vers le masculin ; « être humain » conserve la neutralité.

**Ainsi vs « C'est ainsi que »** : Hamidullah ajoute la périphrase emphatique « C'est ainsi que ». L'arabe dit simplement kaḏālika (ainsi). « C'est ainsi que » alourdit en démonstration explicative.

**Dieu vs « Allah »** : translittération non traduite (déjà discutée).

**Lorsqu'Il décrète vs « Quand Il décide »** : Hamidullah rend qaḍā par « décide ». La racine q-ḍ-y porte un sens plus solennel et exécutoire — qaḍā désigne l'acte d'achever, de trancher définitivement, de juger sans appel. « Décréter » conserve cette dimension d'autorité performante ; « décider » glisse vers une délibération psychologique.

**Il lui dit seulement vs « Il n'a qu'à dire »** : Hamidullah rend yaqūlu lahu par « n'a qu'à dire ». La structure arabe est simple : « il lui dit ». Notre traduction ajoute « seulement » pour rendre l'instantanéité (un seul mot suffit) ; Hamidullah rend par une structure d'opération minimale (« n'a qu'à »). Les deux sont des amplifications, mais « seulement » garde la simplicité de l'acte (il dit, et c'est fait).

**et elle est vs « et c'est »** : Hamidullah rend fa-yakūn par « et c'est ». Le verbe yakūnu (forme imparfait de kāna = être) signifie ici « et il est, et il advient, et il vient à l'existence ». L'antécédent étant féminin (« une chose », shayʾ — bien que masculin en arabe), notre traduction garde la 3ème personne en français en accord avec « la chose ». La nuance : « c'est » est neutre/présentatif ; « et il/elle est » conserve la dimension d'existence advenue.`,

  // V48 (vid=341)
  // NOUS : Et Il lui enseigne l'Écriture et la sagesse, et la Torah et l'Évangile.
  // HAMI : Et (Dieu) lui enseignera le Livre, la Sagesse, la Thora et l'Évangile,
  341: `§CRITIQUE§

**Il lui enseigne vs « (Dieu) lui enseignera »** : Hamidullah ajoute « (Dieu) » entre parenthèses pour expliciter le sujet et passe au futur. Le texte arabe yuʿallimuhu est à l'imparfait — un présent narratif qui peut couvrir l'action en cours ou à venir, sans qu'il faille trancher. Le sujet est implicite (Dieu, mentionné précédemment). Ces ajouts explicitatifs alourdissent.

**l'Écriture vs « le Livre »** : Hamidullah rend al-kitāb par « le Livre ». La racine k-t-b désigne l'écrit, l'écriture, le décret écrit. Quand al-kitāb est utilisé pour les révélations antérieures (Torah, Évangile), « l'Écriture » conserve la dimension scripturaire commune aux Juifs et aux Chrétiens (l'Écriture sainte) ; « le Livre » est plus matériel et perd la résonance scripturaire.

**la sagesse vs « la Sagesse »** : Hamidullah majuscule. Le mot al-ḥikma est descriptif (la sagesse comme pratique, comme savoir) ; la majuscule en fait un concept dogmatique personnifié. On préfère la minuscule pour rester descriptif.

**la Torah vs « la Thora »** : variante orthographique. « Thora » est l'orthographe traditionnelle française ; « Torah » est plus proche de l'hébreu et de l'arabe (al-tawrāt).`,

  // V49 (vid=342)
  // NOUS : Et [il sera] messager auprès des Fils d'Israël : « Je suis venu à vous avec un signe de votre Seigneur : je façonne pour vous de l'argile comme la forme d'un oiseau, puis je souffle dedans et il devient un oiseau par la permission de Dieu. Et je guéris l'aveugle-né et le lépreux, et je donne la vie aux morts par la permission de Dieu. Et je vous informe de ce que vous mangez et de ce que vous stockez dans vos maisons. Il y a là assurément un signe pour vous, si vous êtes de ceux qui accordent confiance. »
  // HAMI : et il sera le messager aux Enfants d'Israël, [et leur dira]: « En vérité, je viens à vous avec un signe de la part de votre Seigneur. Pour vous, je forme de la glaise comme la figure d'un oiseau, puis je souffle dedans: et, par la permission d'Allah, cela devient un oiseau. Et je guéris l'aveugle-né et le lépreux, et je ressuscite les morts, par la permission d'Allah. Et je vous apprends ce que vous mangez et ce que vous amassez dans vos maisons. Voilà bien là un signe, pour vous, si vous êtes croyants!
  342: `§CRITIQUE§

**[il sera] messager vs « il sera le messager »** : Hamidullah ajoute l'article défini. Le texte arabe rasūlan est indéfini (« un messager, en tant que messager ») — un nom de fonction sans détermination. « Le messager » fige Jésus en messager unique aux Fils d'Israël, alors que rasūlan est descriptif.

**auprès des Fils d'Israël vs « aux Enfants d'Israël »** : Hamidullah rend banī ʾisrāʾīla par « Enfants d'Israël ». Banū (pluriel de ibn = fils) désigne en arabe la filiation. « Fils » est la traduction directe de la racine ; « Enfants » est une atténuation française qui efface la dimension de filiation.

**Je suis venu à vous vs « En vérité, je viens à vous »** : Hamidullah ajoute « En vérité » et passe au présent. Le texte arabe annī qad jiʾtukum — la particule qad avec accompli marque l'événement passé révolu (« je suis venu », pas « je viens »). « En vérité » est une glose ajoutée.

**avec un signe de votre Seigneur vs « avec un signe de la part de votre Seigneur »** : Hamidullah ajoute « de la part de » pour rendre min. La préposition arabe min indique simplement la provenance — « de votre Seigneur » suffit ; « de la part de » est explicatif.

**je façonne vs « je forme »** : Hamidullah rend akhluqu par « je forme ». La racine kh-l-q (créer, façonner avec art, donner une forme) en forme I est l'acte créateur précis et artisanal. « Façonner » conserve l'art du modelage ; « former » est plus général.

**l'argile vs « la glaise »** : « argile » est moderne et neutre ; « glaise » a une connotation rurale/artisanale absente du mot arabe ṭīn (matière souple humide propre au modelage).

**la forme vs « la figure »** : Hamidullah rend ka-hayʾati par « comme la figure ». Hayʾa (racine h-y-ʾ = préparation, disposition) désigne la configuration d'ensemble. « Figure » glisse vers la silhouette ; « forme » conserve la configuration interne.

**et il devient un oiseau par la permission de Dieu vs « et, par la permission d'Allah, cela devient un oiseau »** : Hamidullah inverse l'ordre des mots et substitue « cela » à « il ». Le texte arabe fa-yakūnu ṭayran bi-iḏni allāh place la transformation en tête puis la permission divine. Notre traduction conserve l'ordre arabe.

**je donne la vie aux morts vs « je ressuscite les morts »** : Hamidullah rend uḥyī al-mawtā par « ressuscite les morts ». La racine ḥ-y-y (vivre, faire vivre) en forme IV uḥyī signifie « rendre vivant, donner la vie ». « Ressusciter » porte une charge théologique chrétienne (résurrection eschatologique) ; « donner la vie » est plus proche du sens littéral et neutre.

**je vous informe vs « je vous apprends »** : Hamidullah rend unabbiʾukum par « je vous apprends ». La racine n-b-ʾ désigne l'annonce, la nouvelle (sens premier de prophète = porteur d'annonce). « Informer » conserve la dimension d'annonce ; « apprendre » glisse vers l'enseignement didactique.

**vous stockez vs « vous amassez »** : Hamidullah rend taddakhirūn par « amassez ». La racine d-kh-r désigne l'acte de mettre en réserve, de conserver — pas l'accumulation excessive. « Stocker » garde la mise en réserve neutre ; « amasser » suggère l'accumulation cupide.

**Il y a là assurément un signe vs « Voilà bien là un signe »** : Hamidullah ajoute « voilà bien là » à la place de « il y a là assurément ». Le texte arabe inna fī ḏālika la-āyatan — la double emphase (inna + la-) se rend en français par « assurément » ; « voilà bien là » est une amplification.

**ceux qui accordent confiance vs « croyants »** : Hamidullah substantive en « croyants ». Le texte arabe in kuntum muʾminīn utilise un participe actif (forme IV de ʾ-m-n = être en sécurité, faire confiance) — c'est un acte d'accorder sa confiance, pas une catégorie identitaire fixe. « Ceux qui accordent confiance » conserve la dynamique de l'acte ; « croyants » fige en groupe identitaire.`,
};

async function run() {
  for (const [vidStr, newCrit] of Object.entries(CRITIQUES)) {
    const vid = parseInt(vidStr);
    const r = await db.from('verse_analyses').select('translation_explanation').eq('verse_id', vid).single();
    let expl = r.data.translation_explanation || '';
    const idx = expl.indexOf('§CRITIQUE§');
    if (idx < 0) {
      expl = expl.trimEnd() + '\n\n' + newCrit;
    } else {
      expl = expl.slice(0, idx).trimEnd() + '\n\n' + newCrit;
    }
    await db.from('verse_analyses').update({ translation_explanation: expl }).eq('verse_id', vid);
    console.log(`✓ vid=${vid} §CRITIQUE§ réécrit dans l'ordre`);
  }
}
run().catch(e => { console.error(e); process.exit(1); });
