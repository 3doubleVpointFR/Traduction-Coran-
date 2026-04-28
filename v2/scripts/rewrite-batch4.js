const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

const CRITIQUES = {
  // V61 (vid=354)
  // NOUS : Quiconque a disputé avec toi à ce sujet, après ce qui t'est venu du savoir, alors dis : « Venez, appelons nos fils et vos fils, nos femmes et vos femmes, nous-mêmes et vous-mêmes ; ensuite humilions-nous en invocation, et plaçons l'éloignement de Dieu sur les menteurs. »
  // HAMI : A ceux qui te contredisent à son propos, maintenant que tu en es bien informé, tu n'as qu'à dire: "Venez, appelons nos fils et les vôtres, nos femmes et les vôtres, nos propres personnes et les vôtres, puis proférons exécration réciproque en appelant la malédiction d'Allah sur les menteurs.
  354: `§CRITIQUE§

**Quiconque a disputé vs « À ceux qui te contredisent »** : Hamidullah transforme la structure conditionnelle arabe (man + accompli = quiconque a fait) en proposition descriptive (« à ceux qui te contredisent »). Le pronom man est ouvert et hypothétique (« quiconque, qui que ce soit »), alors que « ceux qui » désigne un groupe identifié. Cette transformation aplatit l'universalité.

**disputer vs « contredire »** : Hamidullah rend ḥājja par « contredire ». La racine ḥ-j-j désigne l'argumentation, la dispute fondée sur des arguments (le verbe est apparenté à ḥajj = pèlerinage, étymologiquement « se diriger vers, argumenter pour »). « Contredire » est plus restreint (nier ce que dit l'autre) ; « disputer » conserve la dimension argumentative ouverte.

**à ce sujet vs « à son propos »** : nuance de préposition. fīhi = « à ce sujet, en cela » ; les deux sont équivalents en français.

**après ce qui t'est venu du savoir vs « maintenant que tu en es bien informé »** : Hamidullah rend min baʿdi mā jāʾaka mina al-ʿilm par « maintenant que tu en es bien informé ». La structure arabe utilise jāʾa (venir) avec ʿilm (savoir) comme sujet — « le savoir t'est venu », image de réception passive. « Tu en es bien informé » transforme la passivité en activité.

**alors dis vs « tu n'as qu'à dire »** : Hamidullah rend fa-qul par « tu n'as qu'à dire ». La particule fa- + impératif est un commandement direct (« alors dis »). « Tu n'as qu'à » glisse vers une suggestion atténuée, perdant l'autorité de l'impératif.

**nos fils et vos fils vs « nos fils et les vôtres »** : Hamidullah condense en utilisant « les vôtres ». Le texte arabe ʾabnāʾanā wa-ʾabnāʾakum répète explicitement « nos fils et vos fils » — la répétition est rhétoriquement intentionnelle (insistance sur la symétrie totale entre les deux camps). Hamidullah brise la répétition.

**humilions-nous en invocation vs « proférons exécration réciproque »** : Hamidullah rend nabtahil par « proférons exécration réciproque ». La racine b-h-l désigne premièrement l'acte de se prosterner, de se répandre humblement en invocation — c'est un acte de prière intense, pas une malédiction. La forme VIII nabtahil = « nous nous engageons mutuellement en invocation suppliante ». « Humilions-nous en invocation » conserve la racine ; Hamidullah substitue à l'humilité priante l'idée d'exécration vindicative absente du verbe.

**plaçons l'éloignement de Dieu vs « en appelant la malédiction d'Allah »** : Hamidullah rend laʿnata allāh par « la malédiction d'Allah ». La racine l-ʿ-n désigne premièrement l'éloignement, la mise à distance. Le sens « malédiction » est dérivé. « Éloignement de Dieu » conserve la racine ; « malédiction » glisse vers la nuance vindicative chrétienne (anathème).`,

  // V62 (vid=355)
  // NOUS : Ceci est bien le récit vrai. Il n'y a de divinité si ce n'est Dieu. Et Dieu est bien le Puissant, le Sage.
  // HAMI : Voilà certes le récit vrai. Il n'y a point de divinité en dehors d'Allah. Et certes Allah, c'est Lui le Tout Puissant, le Sage.
  355: `§CRITIQUE§

**Ceci vs « Voilà »** : Hamidullah rend hāḏā par « Voilà ». Le démonstratif arabe hāḏā désigne ce qui est proche (« ceci ») ; « voilà » est plus distant (« cela là-bas »).

**bien vs « certes »** : Hamidullah rend la- (préfixe emphatique) par « certes ». Le préfixe arabe la- est une emphase légère qui se rend en français par « bien » placé après le verbe ou en tête, plutôt que par « certes » qui crée une rupture.

**si ce n'est Dieu vs « en dehors d'Allah »** : Hamidullah rend illā Allāh par « en dehors d'Allah ». La particule illā est une exception (« sinon, si ce n'est ») qui isole l'élément retenu de l'ensemble nié. « Si ce n'est » conserve la structure logique d'exception ; « en dehors de » glisse vers la spatialité.

**Et Dieu est bien vs « Et certes Allah, c'est Lui »** : Hamidullah ajoute « c'est Lui » pour rendre la structure emphatique arabe. Le texte wa-inna allāha la-huwa — la construction inna + sujet + la- + pronom de rappel huwa est une emphase forte (« Et certes Dieu, Lui, est »). Notre traduction « Dieu est bien » condense ; Hamidullah étire en « c'est Lui ». Les deux rendent l'emphase mais notre formule reste plus fluide.

**le Puissant vs « le Tout Puissant »** : Hamidullah ajoute « Tout » pour rendre al-ʿAzīz. La racine ʿ-z-z désigne la puissance, la force, l'élévation — sans la totalisation que « Tout-Puissant » introduit (calque du latin omnipotent). « Le Puissant » garde la racine ; « le Tout-Puissant » totalise théologiquement.`,

  // V63 (vid=356)
  // NOUS : Et s'ils se détournent, certes Dieu est omniscient des corrupteurs.
  // HAMI : Et s'ils se détournent, alors certes Allah connaît bien les fauteurs de désordre.
  356: `§CRITIQUE§

**ajout de « alors »** : Hamidullah ajoute « alors » pour marquer la conséquence. Le texte arabe fa-inna allāh — la particule fa- est une succession (alors, sur ce) qui s'incorpore en français dans la structure conditionnelle elle-même, sans ajout d'adverbe.

**omniscient vs « connaît bien »** : Hamidullah rend ʿalīm par « connaît bien » (verbal). La racine ʿ-l-m (savoir, connaître) en forme intensive ʿalīm est un nom d'attribut — celui qui sait totalement. « Omniscient » est le terme français exact pour ce sens (du latin omni-sciens) — préserve la dimension d'attribut total. « Connaît bien » est verbal et atténué.

**les corrupteurs vs « les fauteurs de désordre »** : Hamidullah rend al-mufsidīn par « fauteurs de désordre ». La racine f-s-d désigne premièrement la corruption, l'altération, la dégradation (un fruit qui se gâte est fāsid). En forme IV mufsid = « celui qui corrompt activement ». « Corrupteurs » conserve la racine ; « fauteurs de désordre » glisse vers le désordre social/politique, perdant la dimension de corruption morale-physique.`,

  // V64 (vid=357)
  // NOUS : Dis : « Ô gens de l'Écriture, venez à une parole d'égalité entre nous et entre vous : que nous n'adorions que Dieu, que nous ne Lui associions rien, et que les uns d'entre nous ne se prennent pas les autres pour seigneurs en dessous de Dieu. » Et s'ils se détournent, dites : « Témoignez que nous, nous sommes de ceux qui se remettent. »
  // HAMI : Dis: "Ô gens du Livre, venez à une parole commune entre nous et vous : que nous n'adorions qu'Allah, sans rien Lui associer, et que nous ne nous prenions point les uns les autres pour seigneurs en dehors d'Allah". Puis, s'ils tournent le dos, dites: "Soyez témoins que nous, nous sommes soumis".
  357: `§CRITIQUE§

**gens de l'Écriture vs « gens du Livre »** : Hamidullah rend ahl al-kitāb par « gens du Livre ». La racine k-t-b désigne l'écrit, l'écriture. Quand al-kitāb désigne les révélations antérieures (Torah, Évangile), « l'Écriture » conserve la dimension scripturaire ; « le Livre » est plus matériel.

**parole d'égalité vs « parole commune »** : Hamidullah rend kalimatin sawāʾ par « parole commune ». La racine s-w-y désigne premièrement l'égalité, l'équivalence, la mise au même niveau. Sawāʾ = égal, équivalent. « D'égalité » conserve la racine ; « commune » glisse vers le partage de propriété.

**entre nous et entre vous vs « entre nous et vous »** : Hamidullah condense en « entre nous et vous ». Le texte arabe baynanā wa-baynakum répète explicitement « entre nous et entre vous » — la répétition de bayna est rhétoriquement intentionnelle (insistance sur la double portée). Hamidullah brise la répétition.

**que nous ne Lui associions rien vs « sans rien Lui associer »** : Hamidullah rend la subordonnée arabe par une structure sans-verbe (« sans rien Lui associer »). Le texte arabe wa-lā nushrika bihi shayʾan est une subordonnée verbale autonome (« et que nous ne Lui associions rien »). Notre traduction conserve la structure verbale ; Hamidullah substantive.

**que les uns d'entre nous ne se prennent pas les autres vs « que nous ne nous prenions point les uns les autres »** : Hamidullah condense la structure arabe wa-lā yattakhiḏa baʿḍunā baʿḍan — « et que ne se prennent pas certains d'entre nous d'autres ». Notre traduction préserve la nuance partitive de baʿḍunā baʿḍan (les uns... les autres dans le groupe « nous ») ; Hamidullah aplatit en réflexif (« nous nous »).

**en dessous de Dieu vs « en dehors d'Allah »** : Hamidullah rend min dūni allāh par « en dehors d'Allah ». La préposition arabe dūn désigne ce qui est en deçà, à un niveau inférieur, ou à côté — pas une exclusion. « En dessous de » conserve la nuance hiérarchique (statut inférieur) ; « en dehors de » glisse vers l'exclusion spatiale.

**s'ils se détournent vs « s'ils tournent le dos »** : Hamidullah rend tawallaw par « tournent le dos ». La racine w-l-y désigne le détournement, le fait de se tourner ailleurs (en gardant la possibilité de se retourner). « Tourner le dos » est plus catégorique et insultant. « Se détourner » garde la simple action de tourner ailleurs.

**Témoignez que nous, nous sommes de ceux qui se remettent vs « Soyez témoins que nous, nous sommes soumis »** : Hamidullah substantive l'impératif (« Soyez témoins ») au lieu d'utiliser le verbe direct (ishhadū = « témoignez »). Et muslimūn = « ceux qui se remettent activement » est rendu par « soumis » (passif). Notre traduction conserve l'impératif verbal et la dynamique active.`,

  // V65 (vid=358)
  // NOUS : Ô gens de l'écriture, pourquoi argumentez-vous au sujet d'Abraham, alors que la Torah et l'Évangile n'ont été révélés qu'après lui ? Ne raisonnez-vous donc pas ?
  // HAMI : O gens du Livre ! Pourquoi disputez-vous au sujet d'Abraham, alors que la Tora et l'Évangile n'ont été révélés qu'après lui ? Ne raisonnez-vous donc pas ?
  358: `§CRITIQUE§

**gens de l'écriture vs « gens du Livre »** : Hamidullah rend ahl al-kitāb par « gens du Livre ». Cf. V64 — « écriture » conserve la dimension scripturaire ; « Livre » est plus matériel.

**argumentez-vous vs « disputez-vous »** : Hamidullah rend tuḥājjūna par « disputez-vous ». La racine ḥ-j-j désigne l'argumentation fondée sur des preuves (apparenté à ḥujja = preuve). « Argumenter » conserve la dimension d'apport de preuves ; « disputer » glisse vers la querelle stérile.

**Torah vs « Tora »** : variante orthographique. « Torah » est plus proche de la translittération arabe al-tawrāt et de l'hébreu ; « Tora » est francisé.`,

  // V66 (vid=359)
  // NOUS : Vous voilà — vous avez argumenté sur ce dont vous aviez la connaissance. Pourquoi donc argumentez-vous sur ce dont vous n'avez aucune connaissance ? Et Dieu sait, tandis que vous, vous ne savez pas.
  // HAMI : Ha! Vous avez disputé de ce que vous saviez ; pourquoi donc disputez-vous de ce que vous ne savez pas ? Dieu sait, et vous, vous ne savez pas.
  359: `§CRITIQUE§

**Vous voilà vs « Ha! »** : Hamidullah rend hā ʾantum par « Ha! ». L'expression arabe hā ʾantum est une interpellation présentative (« vous voilà, vous voici ») — elle attire l'attention sur le sujet en présentation, comme un coup de projecteur. « Vous voilà » conserve cette présentation ; « Ha! » est une exclamation isolée qui efface la structure.

**argumenté vs « disputé »** : Hamidullah rend ḥājajtum par « disputé ». Cf. V65 — la racine ḥ-j-j désigne l'argumentation par preuves, pas la simple querelle.

**sur ce dont vous aviez la connaissance vs « de ce que vous saviez »** : Hamidullah condense la périphrase. Le texte arabe fīmā lakum bihi ʿilmun (litt. « en ce sur quoi vous avez de la connaissance ») utilise le substantif ʿilm (connaissance, savoir) — une structure substantive. Notre traduction conserve la structure ; Hamidullah verbalise (« vous saviez »).

**argumentez-vous vs « disputez-vous »** : même nuance que ci-dessus.

**sur ce dont vous n'avez aucune connaissance vs « de ce que vous ne savez pas »** : même nuance que ci-dessus.

**Et Dieu sait vs « Dieu sait »** : Hamidullah supprime la conjonction wa- (et) initiale qui marque l'opposition emphatique avec ce qui précède (« Dieu sait, et VOUS ne savez pas »). Le « Et » est rhétoriquement nécessaire pour marquer le contraste.

**tandis que vous vs « et vous »** : Hamidullah rend wa-ʾantum par « et vous ». La conjonction wa- avec pronom indépendant marque ici un contraste (« alors que vous, de votre côté »). « Tandis que » conserve le contraste ; « et » est plus neutre.`,

  // V67 (vid=360)
  // NOUS : Abraham n'était ni juif ni chrétien, mais il était tourné vers la vérité, se remettant [à Dieu], et il n'était pas du nombre des associateurs.
  // HAMI : Abraham n'était ni Juif ni Chrétien. Mais il était de pure foi (hanif) et non des associateurs.
  360: `§CRITIQUE§

**juif vs « Juif »** / **chrétien vs « Chrétien »** : Hamidullah majuscule les noms confessionnels. Le texte arabe yahūdiyyan wa-lā naṣrāniyyan utilise des adjectifs descriptifs (juif, chrétien) — pas des catégories identitaires figées. La minuscule en français garde la dimension descriptive ; la majuscule fige en groupe identitaire défini.

**ponctuation : virgule vs « . Mais »** : Hamidullah coupe la phrase avec un point puis « Mais ». Le texte arabe wa-lākin est une conjonction adversative (« mais, cependant ») dans une phrase fluide. « , mais » conserve la fluidité ; « . Mais » brise rhétoriquement.

**tourné vers la vérité vs « de pure foi (hanif) »** : Hamidullah rend ḥanīfan par « de pure foi (hanif) » en gardant le mot arabe entre parenthèses. La racine ḥ-n-f signifie « se détourner, s'incliner vers » — d'où le sens de celui qui s'écarte du polythéisme pour tendre vers la vérité unitaire. « Pure foi » est une glose tardive (catégorie théologique) qui ne traduit pas le mouvement de la racine. « Tourné vers la vérité » conserve la dynamique : Abraham est en mouvement vers le vrai.

**se remettant [à Dieu] vs absence dans Hamidullah** : Hamidullah omet musliman dans cette phrase. Le texte arabe ḥanīfan musliman (deux qualificatifs juxtaposés) est traduit par Hamidullah comme s'il n'y avait que ḥanīf. Notre traduction garde les deux : « tourné vers la vérité » (ḥanīf) et « se remettant à Dieu » (muslim).

**du nombre des associateurs vs « non des associateurs »** : Hamidullah rend mā kāna min al-mushrikīn par « non des associateurs ». La structure arabe mā kāna min + pluriel défini est une négation d'appartenance à un groupe (« il n'était pas du nombre de »). Hamidullah aplatit en simple négation. « Du nombre de » conserve la nuance d'appartenance niée.`,

  // V68 (vid=361)
  // NOUS : Certes, les hommes les plus en droit envers Abraham sont ceux qui l'ont suivi, ainsi que ce prophète et ceux qui ont accordé leur confiance ; et Dieu est le protecteur de ceux qui accordent leur confiance.
  // HAMI : Les gens les mieux disposés envers Abraham sont ceux qui l'ont suivi, et ce Prophète, et ceux qui ont cru. Et Allah est le Maître des croyants.
  361: `§CRITIQUE§

**Certes vs absence de marqueur** : Hamidullah supprime l'emphatique inna initial. Le texte arabe inna ʾawlā al-nāsi est une affirmation emphatique (« assurément, les plus en droit ») — l'emphase est constitutive du verset. « Certes » la conserve ; absence efface la solennité.

**les hommes les plus en droit envers vs « Les gens les mieux disposés envers »** : Hamidullah rend ʾawlā par « les mieux disposés ». La racine w-l-y désigne la proximité, le tutorat, le droit légal de proximité (le walī = celui qui a la garde, l'autorité-proximité). ʾAwlā = « celui qui a le plus de droit, le plus apparenté, le plus proche en autorité ». « Les plus en droit » conserve la dimension de droit-proximité ; « les mieux disposés » glisse vers la disposition affective (sentiments favorables) absente du sens étymologique.

**ce prophète vs « ce Prophète »** : Hamidullah majuscule. Le texte arabe hāḏā al-nabī est descriptif (« ce prophète-ci ») désignant Muhammad. La majuscule fige en titre ; la minuscule garde le descriptif.

**ceux qui ont accordé leur confiance vs « ceux qui ont cru »** : Hamidullah rend al-ladhīna āmanū par « ceux qui ont cru ». La racine ʾ-m-n (sécurité, confiance) en forme IV āmana = « accorder sa confiance, se confier en ». « Croire » substantive en catégorie identitaire ; « accorder confiance » conserve la dynamique de l'acte.

**protecteur vs « Maître »** : Hamidullah rend walī par « Maître ». La racine w-l-y (proximité, tutorat) en forme nominale walī = « celui qui a la garde, le tuteur-protecteur ». « Protecteur » garde la dimension de protection-proximité ; « Maître » glisse vers l'autorité dominante absente du sens étymologique.

**ceux qui accordent leur confiance vs « croyants »** : même nuance — substantivation identitaire vs dynamique de l'acte.`,

  // V69 (vid=362)
  // NOUS : Une faction des gens de l'Écriture souhaitent ardemment vous égarer — mais ils n'égarent qu'eux-mêmes, sans s'en apercevoir.
  // HAMI : Une partie des gens du Livre voudrait vous égarer ; mais ils n'égarent qu'eux-mêmes, sans s'en rendre compte.
  362: `§CRITIQUE§

**Une faction vs « Une partie »** : Hamidullah rend ṭāʾifa par « partie ». La racine ṭ-w-f désigne le groupe distinct, la troupe, la faction (étymologiquement : ceux qui tournent autour, qui font groupe). « Faction » conserve la dimension de groupe organisé avec une identité ; « partie » est plus neutre (simple fraction quantitative).

**gens de l'Écriture vs « gens du Livre »** : cf. V64.

**souhaitent ardemment vs « voudrait »** : Hamidullah rend wadda par « voudrait » (conditionnel). La racine w-d-d désigne le souhait intense, le désir affectif fort (mawadda = affection profonde). « Souhaiter ardemment » conserve l'intensité affective ; « voudrait » est neutre et conditionnel.

**vous égarer vs « vous égarer »** : identique.

**sans s'en apercevoir vs « sans s'en rendre compte »** : nuance idiomatique. La racine sh-ʿ-r désigne premièrement la perception sensible, le sentiment (sens premier de cheveu — d'où la subtilité de la perception fine). « S'apercevoir » conserve la perception sensible-intuitive ; « se rendre compte » glisse vers la prise de conscience délibérée. Ils n'ont pas l'intuition de ce qu'ils font, pas une compréhension claire qu'ils refusent.`,

  // V70 (vid=363)
  // NOUS : Ô gens de l'Écriture, pourquoi recouvrez-vous les signes de Dieu alors que vous en êtes témoins ?
  // HAMI : Ô gens du Livre, pourquoi niez-vous les signes d'Allah, alors que vous en êtes témoins ?
  363: `§CRITIQUE§

**gens de l'Écriture vs « gens du Livre »** : cf. V64.

**recouvrez-vous vs « niez-vous »** : Hamidullah rend takfurūna par « niez-vous ». La racine k-f-r signifie premièrement « couvrir, cacher » (le cultivateur couvre la graine). Le sens « nier » est dérivé. « Recouvrir » conserve l'image étymologique (couvrir la vérité avec un voile) ; « nier » glisse vers la simple négation verbale, perdant l'image active du recouvrement.

`,
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
