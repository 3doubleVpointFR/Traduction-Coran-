/**
 * Restructure V39, V42, V45 selon le format canonique V3 :
 *   §DEMARCHE§     : intro + analyse mot-par-mot (grammaire/morphologie)
 *   §JUSTIFICATION§: justification des choix de traduction (anges, etc.)
 *   §CRITIQUE§     : différences réelles avec Hamidullah (pas le doublon "anges vs Anges")
 */
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

const ETY_NOTE =
  "La racine archaïque l-ʾ-k signifie « envoyer » — étymologiquement, un malak est un « envoyé ». Mais son référent dans l'arabe coranique est exclusivement une créature céleste agente de Dieu, distincte du rasūl (humain envoyé, racine r-s-l). Pour préserver cette distinction sémantique, on traduit malak par « ange » (et non par « messager »).";

// ===================== V39 (vid=332) =====================
// Hamidullah V39 : « Alors, les Anges l'appelèrent pendant qu'il priait debout dans le Sanctuaire :
//   "Voilà qu'Allah t'annonce la naissance de Yahya, confirmateur d'une parole d'Allah.
//    Il sera un chef, un chaste, un prophète et du nombre des gens de bien". »
const V39 = `§DEMARCHE§
Ce verset est la réponse à l'invocation de Zacharie (verset 38) qui demandait une bonne descendance. Les anges lui annoncent que Dieu lui accorde Yaḥyā, décrit par quatre qualités : confirmateur d'une parole de Dieu, chef, abstinent et prophète parmi les vertueux.

**fanādathu** (alors ils l'appelèrent) est un verbe accompli de la racine n-d-w, 3ème personne du féminin singulier (accord avec le collectif malāʾikah) avec le pronom suffixe -hu (le). Le sens premier est appeler à voix haute, interpeller. La particule fa- (alors) établit la succession avec l'invocation du verset précédent.

**al-malāʾikatu** (les anges) est le pluriel de malak, racine m-l-k, au nominatif défini comme sujet du verbe nādā. ${ETY_NOTE}

**allāha** (Dieu) est le nom propre de la divinité à l'accusatif après la particule anna (que). Il est le sujet réel de l'annonce : c'est Dieu qui donne la bonne nouvelle, les anges ne font que transmettre.

**yubashshiruka** (t'annonce une bonne nouvelle) est un verbe forme II de la racine b-š-r, qui transforme le sens « peau, surface visible » en « réjouir le visage » d'où « annoncer une bonne nouvelle ». La forme II porte la dimension active et causative.

**muṣaddiqan** (confirmateur) est un participe actif forme II de la racine ṣ-d-q (vérité, véracité). Forme II = rendre véritable, attester la vérité. C'est un état du sujet (Yaḥyā) — il viendra confirmer une parole divine.

**sayyidan** (chef) — racine s-w-d, sens premier de prééminence, leadership. Désigne celui qui est au-dessus de son groupe par dignité, pas par force.

**ḥaṣūran** (abstinent) — racine ḥ-ṣ-r (enclore, retenir), schème d'intensité fa'ūl. Désigne celui qui se retient activement, en particulier des plaisirs charnels — d'où la tradition exégétique du célibat de Yaḥyā.

**ṣāliḥīna** (vertueux) — racine ṣ-l-ḥ, sens premier d'équilibre, d'ajustement, de droiture active. Le ṣāliḥ est celui qui fait activement le bien.

§JUSTIFICATION§
**les anges** : choix de « anges » plutôt que « messagers » pour al-malāʾikatu. Bien que la racine archaïque l-ʾ-k (envoyer) confère au malak une étymologie de « envoyé », son référent en arabe coranique est exclusivement une créature céleste — distincte du rasūl (humain en mission). Préserver cette distinction lexicale est essentiel : confondre les deux gomme une distinction structurante du Coran (un ange n'est pas un prophète, un prophète n'est pas un ange). Le mot français « ange », issu du grec angelos qui signifie aussi « messager », porte la même dualité étymologie/référent.

**chef** plutôt que « seigneur » pour sayyid : la racine s-w-d (noirceur, densité) glisse au sens de prééminence sociale (le chef visible parmi son groupe). « Chef » conserve cette dimension de statut social, alors que « seigneur » l'élève en autorité féodale absente du sens étymologique.

**abstinent** plutôt que « chaste » pour ḥaṣūr : le schème d'intensité fa'ūl marque une retenue active de soi, pas seulement la chasteté sexuelle. « Abstinent » couvre la retenue volontaire dans tous les domaines.

**vertueux** plutôt que « gens de bien » pour ṣāliḥīn : le participe actif décrit l'agent qui pratique activement le bien (ṣalāḥ = ajustement, droiture). « Vertueux » conserve ce caractère agentif, là où « gens de bien » est une catégorie passive.

§CRITIQUE§
**Dieu vs « Allah »** : Hamidullah translittère ٱللَّهَ par « Allah ». On préfère traduire « Dieu » : ʾallāh est lexicalement « la divinité » (al-ilāh), nom commun déterminé par excellence — le Dieu unique. Conserver le mot arabe non traduit fige la divinité en nom propre étranger et coupe le lecteur francophone du sens linguistique. Le Coran dit littéralement « la divinité », accessible en français.

**chef, abstinent et prophète vs « un chef, un chaste, un prophète »** : Hamidullah distribue chaque qualité avec un article indéfini répété, ajoutant une cadence litanique absente du texte qui aligne simplement les qualificatifs. Et « chaste » réduit ḥaṣūr (retenue active générale) à la sexualité, alors que la racine ḥ-ṣ-r couvre toute forme de retenue volontaire.

**parmi les vertueux vs « du nombre des gens de bien »** : Hamidullah délaye min aṣ-ṣāliḥīn en « du nombre des gens de bien » — paraphrase explicative qui dissout le participe actif arabe (le ṣāliḥ qui agit en bien) dans une catégorie passive (les « gens de bien »). « Parmi les vertueux » conserve l'agentivité.`;

// ===================== V42 (vid=335) =====================
// Hamidullah V42 : « (Rappelle-toi,) quand les Anges dirent: "Ô Marie, certes Allah t'a élue
//   et purifiée; et Il t'a élue au-dessus des femmes des mondes." »
const V42 = `§DEMARCHE§
Ce verset fait suite au signe donné à Zacharie (verset 41). Le récit revient à une scène antérieure introduite par la particule temporelle **iḏ** (lorsque) : les anges s'adressent directement à Marie — par le vocatif **yā** (ô) — pour lui annoncer que Dieu l'a choisie et purifiée, et l'a choisie au-dessus de toutes les femmes. La particule emphatique **inna** (certes) renforce la solennité de l'annonce, et la préposition **ʿalā** (au-dessus de) marque la supériorité du choix divin.

**iḏ** (lorsque) est une particule temporelle qui place la scène dans le passé. Elle introduit une narration directe sans nécessiter de verbe principal antécédent — la lecture qui ajoute « (Rappelle-toi) » est une lecture exégétique, pas grammaticale.

**qālatī** (dirent) est un verbe accompli, 3ème personne du féminin singulier de la racine q-w-l. En arabe, les pluriels brisés de non-humains prennent un accord au féminin singulier — c'est pourquoi le verbe est singulier malgré le sujet pluriel.

**al-malāʾikatu** (les anges) est un nom pluriel défini de la racine m-l-k. ${ETY_NOTE}

**iṣṭafāki** (t'a choisie) est un verbe accompli, forme VIII de la racine ṣ-f-w (pureté, clarté). La forme VIII oriente le sens vers l'acte de trier pour ne garder que le meilleur — sélection active pour soi-même.

**ṭahharaki** (t'a purifiée) est un verbe accompli forme II de la racine ṭ-h-r (pureté). Forme II = rendre pur. Suit immédiatement le choix : Dieu choisit puis purifie.

**ʿalā nisāʾi al-ʿālamīna** (au-dessus des femmes des mondes) — la préposition ʿalā marque la supériorité hiérarchique, et le pluriel ʿālamīn (mondes, époques, catégories de créatures) étend la portée du choix.

§JUSTIFICATION§
**les anges** : choix de « anges » plutôt que « messagers » pour al-malāʾikatu. ${ETY_NOTE}

**dirent** plutôt que « ont dit » pour qālatī : le passé simple français préserve la valeur d'événement révolu et clos du verbe accompli arabe, qui présente la scène comme un tableau achevé, alors que le passé composé la rapprocherait du présent du locuteur.

**choisie** plutôt que « élue » pour iṣṭafāki : la forme VIII de ṣ-f-w décrit un tri actif qui ne retient que le pur. « Choisie » conserve la généralité de l'acte de sélection, alors que « élue » porte une connotation politique/votive (élue par scrutin, élue de Dieu) absente du sens étymologique de la racine.

**les mondes** plutôt que « l'univers » pour al-ʿālamīn : le pluriel arabe désigne plusieurs mondes ou catégories de créatures (humains, jinns, anges, époques) — le singulier français « univers » fusionne ces catégories en un seul espace unifié.

§CRITIQUE§
**ajout de « (Rappelle-toi) »** : Les traductions courantes (dont Hamidullah) ajoutent « (Rappelle-toi) » ou « (Mentionne) » avant « quand les anges dirent ». Ce mot n'existe pas dans le texte arabe — la particule iḏ signifie simplement « lorsque ». L'ajout vient des exégèses qui lisent un verbe sous-entendu (uḏkur) avant iḏ. Cette lecture transforme la narration en injonction adressée au Prophète, ajoutant un destinataire et un impératif absents du texte. Notre traduction rend le texte tel qu'il est : « Et lorsque... ».

**Dieu vs « Allah »** : Hamidullah translittère ٱللَّهَ par « Allah ». On préfère « Dieu » : ʾallāh est lexicalement « la divinité » (al-ilāh), accessible en français sans dépaysement.

**t'a choisie vs « t'a élue »** : Hamidullah rend iṣṭafāki par « élue ». La racine ṣ-f-w est celle de la pureté et du tri (sélection du plus pur), alors que « élue » convoque le champ politique/électoral et la notion d'« élue de Dieu » comme catégorie spéciale. « Choisie » garde la simplicité descriptive du verbe arabe.

**au-dessus des femmes des mondes vs « au-dessus des femmes de l'univers »** : Hamidullah passe au singulier « l'univers » — le pluriel arabe ʿālamīn désigne plusieurs catégories ou époques, ce qui élargit la portée du choix divin (toutes les femmes de toutes les époques, et non seulement les femmes contemporaines de Marie).`;

// ===================== V45 (vid=338) =====================
// Hamidullah V45 : « (Rappelle-toi,) quand les Anges dirent : "Ô Marie, voici qu'Allah t'annonce
//   une parole de Sa part : son nom sera "Al-Masîh" "Issâ", fils de Marie, illustre ici-bas
//   comme dans l'au-delà, et l'un des rapprochés d'Allah". »
const V45 = `§DEMARCHE§
Ce verset poursuit le récit de Marie commencé aux versets 42-43. Après les commandements de dévotion (verset 43), les anges annoncent maintenant à Marie la nouvelle de la naissance d'un enfant. Ce verset est la première mention du nom de Jésus dans cette sourate. La particule **idh** (lorsque) replace la scène dans le passé et relie ce discours aux paroles précédentes des anges.

**idh** (lorsque) est une particule temporelle qui relie cette scène aux paroles antérieures des anges (V42-43). Pas d'antécédent caché « rappelle-toi » dans le texte.

**qālatī** (dirent) est un verbe à l'accompli, 3ème personne du féminin singulier de la racine q-w-l. Le pluriel brisé al-malāʾikatu prend un verbe au féminin singulier en arabe — règle grammaticale, pas un singulier de sens.

**al-malāʾikatu** (les anges) est un nom pluriel défini de la racine m-l-k. ${ETY_NOTE}

**inna** (certes) est une particule d'emphase qui place l'accent sur ce qui suit : c'est bien Dieu qui annonce, pas les anges de leur propre chef.

**yubashshiruki** (t'annonce une bonne nouvelle) est un verbe forme II de la racine b-š-r, avec pronom suffixe -ki. Forme II = causatif/intensif : « rendre joyeux par une bonne nouvelle ».

**bi-kalimatin** (par un mot/parole) — la préposition bi- marque l'instrument ou la matière de l'annonce. Kalima (parole) est le terme employé ici pour désigner Jésus, fils sans père conçu par décret divin.

**al-Masīḥu** (le Messie / l'Oint) — racine m-s-ḥ (essuyer, oindre). Sens premier : passer la main pour purifier, oindre. Le Messie est l'Oint, celui qui a reçu une onction divine.

**ʿīsā** (Jésus) — nom propre, transposition arabe du nom hébreu Yēšūaʿ.

**wajīhan** (éminent) — racine w-j-h (visage, face). Wajīh = celui dont le visage est tourné vers la dignité, l'honneur — d'où « éminent, considéré ».

**al-muqarrabīna** (les rapprochés) — participe passif forme II de la racine q-r-b (proximité). Forme II passive = ceux qui sont activement rapprochés par quelqu'un d'autre.

§JUSTIFICATION§
**les anges** : choix de « anges » plutôt que « messagers » pour al-malāʾikatu. ${ETY_NOTE}

**le Messie** plutôt que la translittération « Al-Masîh » : préserver la racine arabe m-s-ḥ par sa traduction française usuelle (« Messie », du grec christos = oint) maintient le sens étymologique (l'Oint) accessible au lecteur, alors que la translittération opacifie le mot.

**Jésus** plutôt que la translittération « Issâ » : le nom propre est transposé en français selon l'usage canonique francophone. La forme arabe ʿīsā est elle-même une transposition de l'hébreu Yēšūaʿ — translittérer la transposition arabe est un détour inutile.

**éminent** plutôt que « illustre » pour wajīh : la racine w-j-h (visage, face) ancre wajīh dans la notion de « visage tourné vers la dignité ». « Éminent » conserve l'idée de prééminence visible (qui se distingue, qui se voit), alors que « illustre » glisse vers la célébrité.

**les rapprochés** plutôt que « les proches » pour al-muqarrabīn : le participe passif forme II indique des êtres activement rapprochés par un agent (Dieu) — la proximité est accordée, pas acquise. « Rapprochés » conserve cette passivité agentive.

§CRITIQUE§
**ajout de « (Rappelle-toi) »** : Hamidullah ajoute « (Rappelle-toi) » avant « quand les Anges dirent ». Ce mot n'existe pas dans le texte arabe — la particule idh signifie simplement « lorsque ». L'ajout vient d'une lecture exégétique (verbe uḏkur sous-entendu) qui transforme la narration en injonction adressée au Prophète, ajoutant un destinataire et un impératif absents du texte.

**Dieu vs « Allah »** : Hamidullah translittère ٱللَّهَ par « Allah ». On préfère « Dieu » : ʾallāh est lexicalement « la divinité » (al-ilāh), accessible en français sans dépaysement.

**le Messie, Jésus vs « Al-Masîh, Issâ »** : Hamidullah translittère les deux noms (al-Masīḥ → Al-Masîh ; ʿīsā → Issâ). Cette double translittération coupe le lecteur francophone des sens étymologiques (al-Masīḥ = l'Oint, racine m-s-ḥ ; Jésus = transposition usuelle de l'hébreu Yēšūaʿ). On retient la traduction française usuelle qui maintient l'accessibilité linguistique.

**éminent vs « illustre »** : « illustre » glisse vers la célébrité ; « éminent » conserve mieux le sens de wajīh (racine du visage tourné, prééminence visible).

**parmi les rapprochés vs « l'un des rapprochés d'Allah »** : Hamidullah ajoute « d'Allah » par souci d'explicitation, mais le texte arabe se contente de al-muqarrabīn (les rapprochés) — l'agent du rapprochement est implicite (Dieu) et n'a pas besoin d'être nommé dans la structure participiale arabe.`;

async function run() {
  await db.from('verse_analyses').update({ translation_explanation: V39 }).eq('verse_id', 332);
  console.log('✓ V39 (vid=332) restructuré avec §DEMARCHE§ + §JUSTIFICATION§ + §CRITIQUE§ enrichi');
  await db.from('verse_analyses').update({ translation_explanation: V42 }).eq('verse_id', 335);
  console.log('✓ V42 (vid=335) restructuré');
  await db.from('verse_analyses').update({ translation_explanation: V45 }).eq('verse_id', 338);
  console.log('✓ V45 (vid=338) restructuré');
  console.log('\n✅ TERMINÉ — 3 versets avec sections complètes et critiques substantielles');
}
run().catch(e => { console.error(e); process.exit(1); });
