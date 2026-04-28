const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

const CRITIQUES = {
  // V50 (vid=343)
  // NOUS : Et confirmant ce qui est devant moi de la Torah, et pour vous rendre licite une partie de ce qui vous a été interdit. Et je suis venu à vous avec un signe de votre Seigneur. Prémunissez-vous donc envers Dieu, et obéissez-moi.
  // HAMI : Et confirmant ce qu'il y a dans la Thora révélée avant moi, et pour vous rendre licite une partie de ce qui vous était interdit. Et j'ai apporté un signe de la part de votre Seigneur. Craignez Allah donc, et obéissez-moi.
  343: `§CRITIQUE§

**ce qui est devant moi de la Torah vs « ce qu'il y a dans la Thora révélée avant moi »** : Hamidullah ajoute « révélée » et déplace l'antériorité du démonstratif (devant) vers la révélation. Le texte arabe mā bayna yadayya min al-tawrāti utilise l'expression bayna yadayya (« entre mes deux mains » = devant moi) qui désigne ce qui précède dans le temps ou est immédiatement disponible. « Devant moi » garde l'image arabe ; « révélée avant moi » glose en explicitant la révélation.

**ce qui vous a été interdit vs « ce qui vous était interdit »** : nuance de temps verbal. Notre traduction utilise le passé composé passif (action close avec résultat actuel) ; Hamidullah utilise l'imparfait (état durable dans le passé). Le verbe arabe ḥurrima est un accompli passif — l'événement est révolu, mais son effet persiste : « a été interdit » garde la trace de l'événement, « était interdit » l'efface en état permanent.

**je suis venu à vous avec un signe vs « j'ai apporté un signe »** : Hamidullah condense la structure arabe jiʾtukum bi-āyatin en « j'ai apporté ». Le texte arabe utilise jiʾtukum (je suis venu à vous) + bi- (avec) — la venue de Jésus est l'événement principal, l'apport du signe est l'instrument. « Je suis venu à vous avec » conserve la structure arabe ; « j'ai apporté » fusionne en un seul acte.

**Prémunissez-vous donc envers Dieu vs « Craignez Allah donc »** : Hamidullah rend ittaqū allāh par « craignez Allah ». La racine w-q-y signifie « se protéger, prémunir, mettre à l'abri ». La forme VIII ittaqā = « se prémunir, prendre garde ». La traduction « craindre » glisse vers la peur émotionnelle absente de la racine ; « se prémunir » conserve l'acte actif de protection-respect (prendre garde envers Dieu pour ne pas Lui désobéir).`,

  // V51 (vid=344)
  // NOUS : Dieu est assurément mon Seigneur et votre Seigneur ; adorez-Le donc. Voici un chemin droit.
  // HAMI : Certes, Allah est mon Seigneur et votre Seigneur. Adorez-Le donc: voilà le chemin droit.
  344: `§CRITIQUE§

**Dieu est assurément vs « Certes, Allah est »** : Hamidullah rend inna par « Certes » avec virgule détachée et translittère Allah. La particule arabe inna est postposée au sujet — emphase qui se rend par « assurément » placé après le sujet, plutôt que par « Certes » initial qui crée une rupture syntaxique.

**Voici un chemin droit vs « voilà le chemin droit »** : Hamidullah rend hāḏā ṣirāṭun mustaqīm par « voilà le chemin droit ». Le démonstratif arabe hāḏā désigne ce qui est proche, immédiat — « voici » conserve cette proximité. ṣirāṭun (avec tanwīn = indéfini) signifie « un chemin », pas « le chemin » — l'indéfini désigne un chemin parmi d'autres possibles, pas LE chemin unique. Hamidullah le détermine en français.`,

  // V52 (vid=345)
  // NOUS : Puis, lorsque Jésus a senti la couverture venant d'eux, il a dit : « Qui sont mes secoureurs vers Dieu ? » Les éprouvés ont dit : « Nous sommes les secoureurs de Dieu. Nous avons mis notre confiance en Dieu, et atteste que nous sommes de ceux qui se remettent. »
  // HAMI : Puis, quand Jésus ressentit de l'incrédulité de leur part, il dit: « Qui sont mes alliés dans la voie d'Allah? » Les apôtres dirent: « Nous sommes les alliés d'Allah. Nous croyons en Allah. Et sois témoin que nous lui sommes soumis. »
  345: `§CRITIQUE§

**lorsque vs « quand »** : nuance temporelle. « Lorsque » place l'événement comme révolu et précis ; « quand » est plus neutre.

**a senti vs « ressentit »** : Hamidullah passe au passé simple (« ressentit »). Le texte arabe ʾaḥassa (forme IV de ḥ-s-s = sentir, percevoir par les sens) place l'événement comme acte de perception. « A senti » conserve la trace présente du passé composé ; « ressentit » est plus distant.

**la couverture vs « l'incrédulité »** : Hamidullah rend al-kufr par « l'incrédulité ». La racine k-f-r signifie premièrement « couvrir, cacher » (le cultivateur couvre la graine, la nuit couvre par son obscurité). Le sens théologique « mécréance » est postérieur. « Couverture [de la vérité] » préserve l'étymologie ; « incrédulité » est une glose théologique qui anachronise.

**venant d'eux vs « de leur part »** : Hamidullah rend minhum par « de leur part ». La préposition arabe min est simple (provenance) ; « de leur part » est plus formel et glisse vers la délégation.

**mes secoureurs vers Dieu vs « mes alliés dans la voie d'Allah »** : Hamidullah ajoute « la voie de » et rend anṣārī par « alliés ». La racine n-ṣ-r désigne le secours, le soutien actif (rendre la victoire) — pas l'alliance. Et le texte arabe ilā allāh signifie littéralement « vers Dieu » (mouvement vers, but) — pas « dans la voie d'Allah ». « Secoureurs vers Dieu » conserve la racine et la préposition ; Hamidullah substitue à la racine n-ṣ-r celle d'alliance et glose ilā par « voie ».

**Les éprouvés vs « Les apôtres »** : Hamidullah rend al-ḥawāriyyūn par « apôtres ». La racine ḥ-w-r désigne la blancheur éclatante (du blanc de l'œil) — métaphoriquement la pureté éprouvée, le polissage, le retour à la clarté. Les ḥawāriyyūn sont étymologiquement « ceux qui ont été polis/épurés » par leur fréquentation de Jésus. « Apôtres » est un terme chrétien (du grec apostolos = envoyé) qui anachronise. « Éprouvés » conserve la dimension de purification active.

**mis notre confiance vs « croyons »** : Hamidullah rend āmannā par « croyons ». La racine ʾ-m-n (sécurité, confiance) en forme IV āmana = « accorder sa confiance, se confier en ». « Croire » substantive en catégorie identitaire (les croyants) ; « mettre sa confiance en » conserve l'acte d'accorder activement la confiance.

**atteste vs « sois témoin »** : Hamidullah rend ishhad par « sois témoin ». La racine š-h-d désigne le témoignage — la forme impérative ishhad signifie « atteste, témoigne ». « Atteste » conserve l'acte verbal direct ; « sois témoin » glisse vers une posture identitaire.

**de ceux qui se remettent vs « lui sommes soumis »** : Hamidullah rend muslimūn par « soumis ». La racine s-l-m (paix, intégrité, remise) en forme IV ʾaslama = « se remettre, se rendre activement, transmettre sa volonté ». « Se remettre » conserve le mouvement actif ; « soumis » est passif et porte une connotation de subjugation absente du sens étymologique.`,

  // V56 (vid=349)
  // NOUS : Quant à ceux qui ont rejeté, Je les châtierai d'un châtiment intense dans la vie proche et dans la vie dernière, et aucun secoureur ne sera à eux.
  // HAMI : Quant à ceux qui n'ont pas cru, Je les châtierai d'un dur châtiment, ici-bas tout comme dans l'au-delà; et pour eux, pas de secoureurs.
  349: `§CRITIQUE§

**ceux qui ont rejeté vs « ceux qui n'ont pas cru »** : Hamidullah rend al-ladhīna kafarū par « n'ont pas cru ». La racine k-f-r signifie premièrement « couvrir, cacher » — celui qui kafara est celui qui RECOUVRE la vérité reçue. « Rejeter » conserve l'acte actif (refus volontaire de ce qui est offert) ; « n'a pas cru » est une négation passive qui efface l'acte de refus.

**châtiment intense vs « dur châtiment »** : Hamidullah rend ʿaḏāban shadīdan par « dur châtiment ». La racine sh-d-d couvre l'intensité, la fermeté, la sévérité. « Intense » garde l'idée de force interne ; « dur » est plus matériel (résistant, rigide).

**la vie proche (al-dunyā) vs « ici-bas »** : Hamidullah condense en « ici-bas ». L'arabe al-dunyā (racine d-n-w = être proche) désigne « la [vie] la plus proche » — le présent immédiat. « La vie proche » conserve l'antithèse explicite avec al-ʾākhira (la dernière) ; « ici-bas » est une expression figée qui efface la racine.

**la vie dernière (al-ākhira) vs « l'au-delà »** : Hamidullah rend al-ʾākhira par « l'au-delà ». La racine ʾ-kh-r désigne ce qui est postérieur, ce qui suit. « La vie dernière » garde le sens de fin temporelle ; « l'au-delà » glisse vers la métaphysique spatiale.

**et dans la vie dernière vs « tout comme dans l'au-delà »** : Hamidullah ajoute « tout comme » qui n'existe pas dans le texte arabe (wa-l-ʾākhira = « et la dernière »). L'ajout transforme la coordination en comparaison.

**aucun secoureur ne sera à eux vs « pour eux, pas de secoureurs »** : Hamidullah inverse l'ordre. Le texte arabe wa-mā lahum min nāṣirīn place la négation en tête, puis la possession (lahum), puis le complément. « Aucun secoureur ne sera à eux » conserve la solennité de la structure arabe ; Hamidullah aplatit en « pour eux, pas de secoureurs ».`,

  // V58 (vid=351)
  // NOUS : Cela, Nous te le récitons parmi les signes et parmi le rappel sage.
  // HAMI : Voilà ce que Nous te récitons des versets et de la sage invocation.
  351: `§CRITIQUE§

**Cela vs « Voilà ce que »** : Hamidullah ajoute l'emphatique « Voilà ce que » pour rendre ḏālika. Le démonstratif arabe ḏālika signifie simplement « cela ». L'ajout « Voilà ce que » transforme une référence neutre en pointage emphatique.

**parmi les signes vs « des versets »** : Hamidullah rend min al-āyāti par « des versets ». La racine ʾ-y-y (signe, marque distinctive) désigne d'abord un signe-preuve, une manifestation visible. Le sens « versets coraniques » est dérivé. « Signes » conserve la racine première (signes de Dieu, manifestations) ; « versets » fige en unité textuelle technique. Et « parmi » conserve le partitif arabe min (cela fait partie d'un ensemble plus large) ; « des versets » est plus neutre.

**parmi le rappel sage vs « de la sage invocation »** : Hamidullah rend al-ḏikr al-ḥakīm par « la sage invocation ». La racine ḏ-k-r désigne le rappel, la mémoire active, la mention. Al-ḏikr est le rappel divin. « Invocation » glisse vers le duʿāʾ (appel) qui est une autre racine. « Rappel » conserve la racine ḏ-k-r (faire mémoire, rappeler à la conscience).

**rappel sage vs « sage invocation »** : nuance d'ordre. Le texte arabe al-ḏikr al-ḥakīm place le qualifié (le rappel) avant le qualifiant (sage) — structure arabe normale. En français, l'ordre adjectif/nom est inverse, mais la traduction garde la structure arabe en français pour préserver la solennité.`,

  // V59 (vid=352)
  // NOUS : Certes, l'exemple de Jésus auprès de Dieu est comme l'exemple d'Adam : Il le créa de poussière, puis Il lui dit « Sois » et il est.
  // HAMI : Pour Allah, Jésus est comme Adam qu'Il créa de poussière, puis Il lui dit «Sois»: et il fut.
  352: `§CRITIQUE§

**Certes, l'exemple de Jésus vs « Pour Allah, Jésus »** : Hamidullah supprime « certes » et le mot « exemple » (mathal). Le texte arabe inna mathala ʿīsā ʿinda allāhi ka-mathali ʾādam — la structure arabe est une comparaison explicite (« l'exemple/cas de Jésus est comme l'exemple/cas d'Adam »). Hamidullah condense en « Jésus est comme Adam » et déplace ʿinda allāh (« auprès de Dieu ») en tête (« Pour Allah »). Notre traduction préserve la structure de double mathal qui est le cœur rhétorique du verset.

**auprès de Dieu vs « Pour Allah »** : Hamidullah rend ʿinda allāh par « Pour Allah ». La préposition arabe ʿinda désigne la proximité spatiale ou la perspective (« auprès de, du point de vue de »). « Pour » glisse vers la dédicace ou la destination ; « auprès de » conserve la proximité-perspective.

**Il le créa vs « qu'Il créa »** : Hamidullah utilise le relatif (« qu'Il créa »). Le texte arabe khalaqahu est une proposition autonome avec pronom suffixe (« il le créa ») coordonnée à la précédente. Notre traduction conserve l'autonomie de la proposition ; Hamidullah subordonne en relatif.

**et il est vs « et il fut »** : Hamidullah utilise le passé simple (« il fut »). Le texte arabe fa-yakūnu est à l'inaccompli (présent ou futur) — la création par décret divin reste atemporelle. « Il est » conserve l'aspect inaccompli ; « il fut » fige dans le passé révolu et perd la dimension d'effectivité présente du décret.`,

  // V60 (vid=353)
  // NOUS : La vérité vient de ton Seigneur. Ne sois donc pas de ceux qui disputent obstinément.
  // HAMI : La vérité vient de ton Seigneur. Ne sois donc pas de ceux qui doutent.
  353: `§CRITIQUE§

**ceux qui disputent obstinément vs « ceux qui doutent »** : Hamidullah rend al-mumtarīn par « ceux qui doutent ». La racine m-r-y désigne premièrement la dispute, la contestation tenace, la querelle (étymologie : la traite répétée du pis qui le vide — image d'une argumentation insistante qui épuise). En forme VIII (imtarā), c'est l'acte de disputer activement, de contester avec obstination. « Douter » est passif et intérieur (état d'incertitude) ; « disputer obstinément » conserve l'acte verbal extérieur de contestation. Le verset reproche une attitude active de contestation, pas un simple doute mental.`,
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
    console.log(`✓ vid=${vid} §CRITIQUE§ réécrit`);
  }
}
run().catch(e => { console.error(e); process.exit(1); });
