const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

const CRITIQUES = {
  // V71 (vid=364)
  // NOUS : Ô gens de l'Écriture, pourquoi mêlez-vous la vérité avec le faux, et dissimulez-vous la vérité alors que vous savez ?
  // HAMI : Ô gens du Livre, pourquoi confondez-vous la vérité et le faux, et cachez-vous la vérité, alors que vous le savez ?
  364: `§CRITIQUE§

**gens de l'Écriture vs « gens du Livre »** : Hamidullah rend ahl al-kitāb par « gens du Livre ». Quand al-kitāb désigne les révélations antérieures, « l'Écriture » conserve la dimension scripturaire (l'Écriture sainte) ; « le Livre » est plus matériel.

**mêlez-vous la vérité avec le faux vs « confondez-vous la vérité et le faux »** : Hamidullah rend talbisūna par « confondez-vous ». La racine l-b-s désigne premièrement « habiller, revêtir, recouvrir d'un vêtement » — d'où le sens dérivé « mélanger pour cacher, voiler par mélange ». « Mêler » conserve l'acte de mélange volontaire pour brouiller ; « confondre » glisse vers une confusion intellectuelle (mélanger mentalement) absente du sens étymologique d'habillage trompeur.

**dissimulez-vous vs « cachez-vous »** : Hamidullah rend taktumūna par « cachez-vous ». La racine k-t-m désigne précisément l'acte de garder secret, de retenir l'information délibérément. « Dissimuler » conserve la dimension de masquage actif et calculé ; « cacher » est plus général (toute occultation).

**alors que vous savez vs « alors que vous le savez »** : Hamidullah ajoute le pronom « le » par souci de précision référentielle. Le texte arabe wa-ʾantum taʿlamūn n'a pas de pronom objet — la connaissance est totale (« vous savez [tout cela] »). « Vous savez » conserve la portée totale ; « vous le savez » fige sur un objet précis.`,

  // V72 (vid=365)
  // NOUS : Une faction des gens de l'Écriture dit : « Croyez en ce qui fut révélé à ceux qui ont cru au lever du jour, et recouvrez-le à sa fin — peut-être qu'ils retourneront. »
  // HAMI : Une faction des gens du Livre dit : « Croyez à ce qui a été révélé aux croyants à l'aube du jour, et n'y croyez plus à la fin du jour. Peut-être qu'ils retourneront. »
  365: `§CRITIQUE§

**gens de l'Écriture vs « gens du Livre »** : cf. V71.

**en ce qui fut révélé vs « à ce qui a été révélé »** : Hamidullah utilise le passé composé. Le texte arabe unzila (accompli) place la révélation comme événement clos. Le passé simple « fut révélé » préserve cette distance temporelle ; le passé composé la rapproche du présent.

**ceux qui ont cru vs « les croyants »** : Hamidullah substantive en « croyants ». La structure arabe al-ladhīna āmanū utilise un relatif + verbe accompli — « ceux qui ont accordé leur confiance ». Notre traduction conserve la structure verbale ; « les croyants » fige en groupe identitaire.

**au lever du jour vs « à l'aube du jour »** : Hamidullah rend wajha al-nahāri par « l'aube du jour ». L'expression arabe wajh al-nahār (litt. « le visage du jour ») désigne le commencement visible du jour — l'image arabe est métaphorique (le visage qui apparaît). « Lever du jour » conserve la dimension de commencement-apparition ; « aube » est plus matériel (la première lumière).

**recouvrez-le à sa fin vs « n'y croyez plus à la fin du jour »** : Hamidullah aplatit le verbe wa-kfurū ākhirahu en « n'y croyez plus ». La racine k-f-r signifie premièrement « couvrir, cacher » — ici « recouvrir [ce qui a été reçu], cacher [la confiance accordée] ». L'image est concrète : ils proposent de croire le matin et de RECOUVRIR (revenir-cacher) le soir, comme une trahison ritualisée. « Recouvrir » conserve l'image étymologique ; « n'y croyez plus » est neutre et perd la dimension d'acte trompeur calculé.

**à sa fin vs « à la fin du jour »** : Hamidullah ajoute « du jour » par souci d'explicitation. Le texte arabe ākhirahu utilise un suffixe pronominal -hu qui réfère à l'antécédent (al-nahār = le jour). « À sa fin » conserve la structure pronominale arabe.`,

  // V73 (vid=366)
  // NOUS : N'accordez confiance qu'à celui qui a suivi votre pratique. Dis : La direction est la direction de Dieu — que quelqu'un reçoive pareil à ce qui vous a été accordé, ou qu'ils discutent contre vous devant votre Seigneur. Dis : La faveur est dans la main de Dieu — Il la donne à qui Il veut, et Dieu est vaste, savant.
  // HAMI : Ne vous fiez qu'à ceux qui suivent votre religion. Dis : La direction est la direction d'Allah — que quelqu'un reçoive pareil à ce qui vous a été accordé, ou qu'ils discutent contre vous devant votre Seigneur. Dis : La grâce est dans la main d'Allah — Il la donne à qui Il veut. Allah est Immense et Omniscient.
  366: `§CRITIQUE§

**N'accordez confiance qu'à celui qui a suivi vs « Ne vous fiez qu'à ceux qui suivent »** : Hamidullah passe au pluriel et au présent. Le texte arabe wa-lā tuʾminū illā li-man tabiʿa utilise un singulier collectif (man = celui qui, quiconque) avec accompli (tabiʿa = a suivi, événement révolu/qualifiant). « Celui qui a suivi » conserve la singularité et le révolu ; « ceux qui suivent » pluralise et présentifie.

**accorder confiance vs « se fier »** : Hamidullah rend tuʾminū (forme IV de ʾ-m-n = sécurité/confiance) par « se fier ». « Accorder confiance » conserve l'acte d'octroyer activement la confiance ; « se fier » est plus diffus (passif intérieur).

**votre pratique vs « votre religion »** : Hamidullah rend dīnakum par « religion ». La racine d-y-n désigne premièrement la pratique, l'observance, la voie de vie suivie (apparenté à dayn = dette, redevance — ce qui est dû). « Pratique » conserve la dimension d'observance vécue ; « religion » fige en catégorie identitaire institutionnelle.

**la faveur vs « la grâce »** : Hamidullah rend al-faḍl par « la grâce ». La racine f-ḍ-l désigne le surplus, le don supplémentaire — la faveur accordée au-delà du dû. « Grâce » porte une connotation chrétienne forte ; « faveur » garde le sens de don préférentiel.

**vaste vs « Immense »** : Hamidullah rend wāsiʿ par « Immense » majusculé. La racine w-s-ʿ désigne l'amplitude, l'étendue, la capacité d'embrasser largement. « Vaste » conserve la racine ; « Immense » totalise théologiquement.

**savant vs « Omniscient »** : Hamidullah rend ʿalīm par « Omniscient » (du latin omni-sciens). « Savant » conserve la dimension de connaissance comme attribut ; « Omniscient » totalise théologiquement.`,

  // V74 (vid=367)
  // NOUS : Il réserve Sa miséricorde à qui Il veut, et Dieu possède la faveur immense.
  // HAMI : Il réserve Sa miséricorde à qui Il veut. Allah est le Détenteur de la grâce immense.
  367: `§CRITIQUE§

**Dieu possède vs « Allah est le Détenteur »** : Hamidullah substantive le verbe arabe en figure (« le Détenteur ») alors que le texte utilise une structure verbale (Allāh dhū al-faḍl al-ʿaẓīm). Le mot dhū n'est pas « détenteur » mais « celui qui est doté de » — un possessif relationnel, pas un titre. « Possède » conserve la structure verbale et la dimension d'attribut.

**la faveur vs « la grâce »** : cf. V73 — al-faḍl conserve la racine du surplus/don supplémentaire ; « grâce » porte une connotation chrétienne.`,

  // V76 (vid=369)
  // NOUS : Bien au contraire — quiconque accomplit son engagement et se préserve : en vérité Dieu aime les vigilants.
  // HAMI : Si ! Quiconque remplit ses engagements et craint Allah, [sache] qu'Allah aime les pieux.
  369: `§CRITIQUE§

**Bien au contraire vs « Si! »** : Hamidullah rend balā par « Si! ». La particule arabe balā est une affirmation positive après une négation (« si, au contraire »). Notre traduction « Bien au contraire » conserve la dimension d'affirmation rectificative ; « Si! » est trop bref et perd la nuance.

**accomplit son engagement vs « remplit ses engagements »** : Hamidullah pluralise « engagements » et passe au présent itératif. Le texte arabe man ʾawfā bi-ʿahdihi utilise le singulier ʿahdihi (son engagement, l'engagement spécifique en question). « Accomplit son engagement » conserve la singularité ; « remplit ses engagements » pluralise et glisse vers une généralité d'obligations multiples.

**accomplit vs « remplit »** : Hamidullah rend ʾawfā par « remplit ». La racine w-f-y désigne premièrement la plénitude, l'achèvement intégral, l'accomplissement complet. « Accomplir » conserve la dimension d'achèvement actif ; « remplir » glisse vers le simple acquittement quantitatif.

**se préserve vs « craint Allah »** : Hamidullah rend ittaqā par « craint Allah ». La racine w-q-y signifie « se protéger, prémunir, mettre à l'abri ». La forme VIII ittaqā = « se prémunir, prendre garde ». « Se préserver » conserve l'acte de protection-respect ; « craindre » glisse vers la peur émotionnelle absente de la racine.

**les vigilants vs « les pieux »** : Hamidullah rend al-muttaqīn par « les pieux ». Al-muttaqīn est le participe actif de la forme VIII ittaqā — « ceux qui se prémunissent activement ». « Les vigilants » conserve la dimension de vigilance active ; « les pieux » glisse vers une catégorie de piété religieuse passive (état de dévotion) absente du dynamisme de la forme verbale.`,

  // V77 (vid=370)
  // NOUS : En vérité, ceux qui troquent l'engagement de Dieu et leurs serments contre un prix infime — pour eux aucune part dans la vie à venir, et Dieu ne leur parlera pas, ne les regardera pas au jour de la résurrection, ne les purifiera pas — et pour eux un tourment douloureux.
  // HAMI : Ceux qui vendent l'alliance d'Allah et leurs serments à vil prix, ceux-là n'auront aucune part dans l'au-delà ; Allah ne leur adressera pas la parole, ne les regardera pas au Jour de la Résurrection, et ne les purifiera point. Et ils auront un châtiment douloureux.
  370: `§CRITIQUE§

**En vérité vs absence** : Hamidullah supprime l'emphatique inna initial. Le texte arabe inna al-ladhīna est une affirmation emphatique (« en vérité, ceux qui »). « En vérité » la conserve ; absence efface la solennité.

**troquent vs « vendent »** : Hamidullah rend yashtarūna par « vendent ». La forme VIII de la racine š-r-y prend ici un sens d'échange — troquer une chose contre une autre (l'engagement contre un prix). « Vendre » réduit la transaction à un sens unilatéral ; « troquer » conserve la dimension d'échange réciproque.

**l'engagement vs « l'alliance »** : Hamidullah rend ʿahd par « alliance ». ʿAhd désigne l'engagement mutuel ou unilatéral — la promesse, le pacte. « Alliance » est plus politique/religieux et porte une connotation chrétienne (Ancienne / Nouvelle Alliance). « Engagement » est plus neutre.

**un prix infime vs « à vil prix »** : Hamidullah rend bi-thamanin qalīl par « à vil prix ». La racine q-l-l désigne la petitesse quantitative (peu nombreux, peu, faible quantité). « Infime » conserve la dimension de petitesse quantitative ; « vil » glisse vers la dépréciation morale (méprisable).

**la vie à venir vs « l'au-delà »** : Hamidullah rend al-ʾākhira par « l'au-delà ». Al-ʾākhira (racine ʾ-kh-r = être derrière, suivre) désigne ce qui vient après cette vie. « La vie à venir » garde la dimension temporelle ; « l'au-delà » est plus métaphysique.

**ne leur parlera pas vs « ne leur adressera pas la parole »** : Hamidullah étire le verbe en locution. Le texte arabe wa-lā yukallimuhum est compact (« et il ne leur parlera pas »). Notre traduction conserve la compacité ; Hamidullah délaye.

**la résurrection vs « la Résurrection »** : Hamidullah majuscule. Le mot arabe al-qiyāma (jour du dressement, racine q-w-m = se lever, se tenir) est descriptif. La majuscule fige en catégorie dogmatique chrétienne ; la minuscule garde la dimension descriptive (le jour où l'on se dresse).

**un tourment vs « un châtiment »** : Hamidullah rend ʿaḏāb par « châtiment ». La racine ʿ-ḏ-b désigne la souffrance vive, le supplice — pas le châtiment juridique. « Tourment » conserve la dimension de souffrance ; « châtiment » glisse vers la sanction punitive (acte juridique).`,

  // V78 (vid=371)
  // NOUS : Et en vérité parmi eux un groupe qui tord leurs langues avec l'écriture pour que vous pensiez que cela est de l'écriture — et cela n'est pas de l'écriture ; et ils disent : « cela vient d'auprès de Dieu », — et cela ne vient pas d'auprès de Dieu ; et ils disent sur Dieu le mensonge, alors qu'eux savent.
  // HAMI : Et il y a parmi eux certains qui roulent leurs langues en lisant le Livre pour vous faire croire que cela provient du Livre, alors qu'il n'est point du Livre ; et ils disent : « Ceci vient d'Allah », alors qu'il ne vient point d'Allah ; ils disent sciemment des mensonges contre Allah.
  371: `§CRITIQUE§

**en vérité parmi eux un groupe vs « il y a parmi eux certains »** : Hamidullah aplatit l'emphase. Le texte arabe wa-inna minhum la-farīqan utilise une double emphase (inna + la-) sur le mot farīq (groupe distinct). Notre traduction conserve l'emphase et préserve le mot farīq ; Hamidullah substitue « certains » qui est neutre et indéfini.

**un groupe vs « certains »** : Hamidullah rend farīq par « certains ». Le farīq est un sous-groupe distinct, identifié — pas une simple sélection quelconque. « Groupe » conserve la dimension d'unité distincte ; « certains » est dispersif.

**tord leurs langues avec l'écriture vs « roulent leurs langues en lisant le Livre »** : Hamidullah rend yalwūna ʾalsinatahum bi-l-kitāb par « roulent leurs langues en lisant le Livre ». La racine l-w-y désigne précisément l'acte de tordre, déformer, plier. « Tordre la langue » est l'image arabe de la déformation phonétique délibérée ; « rouler la langue » suggère plutôt une diction emphatique. Et bi- (avec, par le moyen de) indique l'instrument — pas « en lisant ». La déformation porte SUR l'écriture elle-même, pas sur sa lecture.

**l'écriture vs « le Livre »** : cf. V64.

**pour que vous pensiez vs « pour vous faire croire »** : Hamidullah rend li-taḥsabū par « pour vous faire croire ». La racine ḥ-s-b désigne le calcul, la supputation, la croyance par déduction (ḥisāb = compte). « Penser » conserve la dimension cognitive ; « faire croire » glisse vers la persuasion active de l'autre.

**et ils disent vs « et ils disent »** : identique.

**cela vient d'auprès de Dieu vs « Ceci vient d'Allah »** : Hamidullah supprime « auprès de » pour rendre min ʿindi allāh. La préposition arabe min ʿinda est précise (« d'auprès de, de la proximité de ») — désigne la provenance d'un lieu de proximité. « D'auprès de » conserve cette double dimension ; « de » seul est plus neutre.

**ils disent sur Dieu le mensonge vs « ils disent sciemment des mensonges contre Allah »** : Hamidullah inverse l'ordre, substitue « contre » à « sur », et déplace « alors qu'eux savent » en adverbe « sciemment ». Le texte arabe wa-yaqūlūna ʿalā allāhi al-kaḏiba wa-hum yaʿlamūna — la préposition ʿalā signifie « sur, à propos de » — pas « contre ». Et al-kaḏib (le mensonge, défini, singulier) désigne LE mensonge par excellence, pas « des mensonges ». Notre traduction conserve la structure et la précision arabe.

**alors qu'eux savent vs « sciemment »** : Hamidullah rend wa-hum yaʿlamūn par « sciemment ». La structure arabe wa- + pronom + verbe imparfait est une circonstancielle d'état (« alors qu'ils savent »). Notre traduction conserve la structure verbale ; « sciemment » l'aplatit en adverbe.`,

  // V79 (vid=372)
  // NOUS : Il n'a pas été pour un humain que Dieu lui apporte l'écriture, et le jugement et la prophétie, puis qu'il dise aux gens : « soyez serviteurs pour moi à l'écart de Dieu » ; mais : « soyez des hommes voués au Seigneur, par ce que vous étiez en train d'enseigner l'écriture, et par ce que vous étiez en train d'étudier ».
  // HAMI : Il ne convient pas à un être humain qu'Allah ait honoré du Livre, de la sagesse et de la prophétie, de dire aux gens: « Soyez mes serviteurs, à l'exclusion d'Allah », mais au contraire, [il devra dire]: « Soyez des maîtres parfaits, puisque vous enseignez le Livre et vous l'étudiez ».
  372: `§CRITIQUE§

**il n'a pas été pour un humain vs « il ne convient pas à un être humain »** : Hamidullah rend mā kāna li-bashar par « il ne convient pas ». La structure arabe mā kāna li- + nom est une négation modale (« il n'a pas été [pour quelqu'un] de » = « il n'est pas dans la possibilité/légitimité de »). Notre traduction conserve la structure d'événement révolu (« il n'a pas été ») ; Hamidullah glisse vers la convenance morale (« il ne convient pas »).

**lui apporte vs « ait honoré du »** : Hamidullah rend yuʾtīhu par « ait honoré ». La racine ʾ-t-y (forme IV) signifie « apporter, donner » — pas « honorer ». Hamidullah ajoute une nuance d'estime/déférence absente du verbe arabe.

**l'écriture vs « le Livre »** : cf. V64.

**le jugement vs « la sagesse »** : Hamidullah rend al-ḥukm par « la sagesse ». La racine ḥ-k-m désigne précisément le jugement, la décision sage, la capacité de trancher (ḥakam = juge, ḥukm = jugement). « Le jugement » conserve la racine ; « la sagesse » est un autre mot arabe (al-ḥikma) — Hamidullah confond les deux.

**puis qu'il dise vs « de dire »** : Hamidullah rend thumma yaqūla par « de dire ». La particule arabe thumma marque la postériorité avec progression (« puis, ensuite ») et yaqūla est subjonctif (« qu'il dise »). « Puis qu'il dise » conserve la progression temporelle et le subjonctif ; « de dire » aplatit en infinitif.

**soyez serviteurs pour moi vs « Soyez mes serviteurs »** : Hamidullah condense la structure. Le texte arabe kūnū ʿibādan lī place « pour moi » (lī) en complément avec préposition. « Soyez serviteurs pour moi » conserve la structure ; « mes serviteurs » substitue le possessif au syntagme prépositionnel.

**à l'écart de Dieu vs « à l'exclusion d'Allah »** : Hamidullah rend min dūni allāh par « à l'exclusion d'Allah ». Dūn désigne ce qui est en deçà, à côté, ou en marge — pas une exclusion. « À l'écart de » conserve cette nuance ; « exclusion » durcit en négation totale.

**des hommes voués au Seigneur vs « des maîtres parfaits »** : Hamidullah rend rabbāniyyīn par « maîtres parfaits ». Le mot rabbānī est un adjectif formé sur rabb (Seigneur) avec le suffixe -ānī qui marque l'appartenance/consécration. « Maître » glisse vers l'autorité (relation horizontale avec d'autres) ; rabbānī désigne celui qui est consacré au Seigneur (relation verticale avec Dieu). « Hommes voués au Seigneur » garde la dimension consacrée.

**par ce que vous étiez en train d'enseigner vs « puisque vous enseignez »** : Hamidullah simplifie en présent. Le texte arabe bi-mā kuntum tuʿallimūna utilise la structure kuntum + verbe inaccompli = imparfait habituel passé (« vous étiez en train de, vous aviez l'habitude de »). « Puisque vous enseignez » fige au présent ; notre traduction conserve l'imparfait habituel.

**par ce que vous étiez en train d'étudier vs « vous l'étudiez »** : même nuance que ci-dessus — kuntum tadrusūna est un imparfait habituel.`,

  // V80 (vid=373) — déjà bien couvert dans l'ordre, je laisse comme tel
  // (V80 a déjà 5 blocs dans l'ordre à partir du début du verset)
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
