const { createClient } = require('@supabase/supabase-js');
const sb = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

async function fixVWA(vid, wk, pos, patch) {
  const { data } = await sb.from('verse_word_analyses')
    .select('id, analysis_axes').eq('verse_id', vid).eq('word_key', wk).eq('position', pos).single();
  if (!data) { console.log(`  SKIP ${wk}/p${pos} vid=${vid} — not found`); return; }
  const axes = { ...data.analysis_axes };
  if (patch.concepts) {
    axes.concepts = { ...data.analysis_axes.concepts };
    for (const [cn, cv] of Object.entries(patch.concepts)) {
      axes.concepts[cn] = { ...(axes.concepts[cn] || {}), ...cv };
    }
  }
  const { error } = await sb.from('verse_word_analyses').update({ analysis_axes: axes }).eq('id', data.id);
  console.log(error ? `  ERR ${wk}/p${pos}: ${error.message}` : `  OK ${wk}/p${pos}`);
}

async function main() {
  console.log('=== FIX V171-180 ===\n');

  // ===== V171: mvl p=4 "Égalité/Ressemblance" peu_probable sans axes =====
  console.log('--- V171: mvl p=4 "Égalité/Ressemblance" peu_probable — ajout axes ---');
  await fixVWA(178, 'mvl', 4, { concepts: {
    "Égalité/Ressemblance": {
      axe1_verset: "Dans ce verset, le mot mvl est utilise dans une comparaison (parabole) pour decrire l'etat des negateurs. Le concept d'egalite ou ressemblance implique une identite entre deux choses. Or le verset utilise le mot dans le sens de comparaison illustrative, pas d'egalite stricte. La comparaison sert a faire comprendre une realite abstraite par une image concrete, ce qui releve davantage de la similitude que de l'egalite mathematique.",
      axe2_voisins: "Les versets voisins traitent de l'appel a manger des bonnes choses et du rejet de la guidance. Le contexte est pedagogique — le Coran utilise des paraboles pour expliquer des concepts. L'egalite stricte serait trop rigide pour ce usage illustratif. Le passage cherche a faire comprendre par analogie, pas a etablir une equivalence. Les versets suivants poursuivent la description des comportements des negateurs avec d'autres images.",
      axe3_sourate: "Al-Baqarah utilise frequemment des paraboles pour expliquer les attitudes spirituelles. Le theme de la sourate est la guidance et ses obstacles. L'egalite impliquerait que les negateurs SONT litteralement du betail, alors que le texte dit qu'ils RESSEMBLENT a du betail dans leur comportement. La nuance est importante pour la coherence du message pedagogique de la sourate qui cherche a instruire, pas a injurier.",
      axe4_coherence: "Dans le Coran, les paraboles sont presentees comme des outils pedagogiques. Le Coran lui-meme defend l'usage des paraboles comme methode d'enseignement. Le concept d'egalite contredit cette dimension pedagogique car il supprime la distance entre le comparant et le compare. Plusieurs versets coraniques utilisent la racine mvl pour des comparaisons explicitement analogiques, confirmant le sens de similitude.",
      axe5_frequence: "Pour la mission du khalifa, la capacite de raisonner par analogie est fondamentale. L'egalite stricte elimine la reflexion en imposant une identite. La similitude invite a chercher les points communs et les differences, ce qui developpe l'intelligence analytique. Le khalifa doit pouvoir utiliser des comparaisons pour enseigner et gouverner, pas des equations rigides qui ferment la pensee."
    }
  }});

  // ===== V180: 5 concepts probables sans axes =====
  console.log('\n--- V180: ktb p=1 "Écriture/Inscription" probable — ajout axes ---');
  await fixVWA(187, 'ktb', 1, { concepts: {
    "Écriture/Inscription": {
      axe1_verset: "Dans ce verset sur le testament, le mot kutiba est au passif et signifie 'il a ete prescrit'. Le concept d'ecriture ou inscription evoque l'acte physique de tracer des caracteres. Or le verset utilise kutiba dans le sens de decreter ou prescrire, pas dans le sens d'ecrire physiquement. Cependant l'ecriture est le moyen par lequel les prescriptions sont fixees et transmises, ce qui rend ce concept pertinent mais secondaire.",
      axe2_voisins: "Les versets voisins traitent de la retribution et du testament. Le verset 178 utilise aussi kutiba pour la prescription de la retribution. Dans les deux cas, le sens est celui d'une obligation decretee, pas d'une inscription physique. L'ecriture reste neanmoins le support materiel par lequel ces prescriptions sont conservees et appliquees dans la societe. Le lien entre prescrire et inscrire est etymologique mais le contexte oriente vers la prescription.",
      axe3_sourate: "Al-Baqarah etablit progressivement un cadre legislatif pour la communaute. Le concept d'ecriture est present dans la sourate a travers le Livre revele et les contrats. Cependant dans les passages legislatifs comme celui-ci, le sens dominant est l'obligation decretee. L'ecriture comme acte physique apparait plus tard dans la sourate, notamment dans le verset sur les dettes qui insiste sur la mise par ecrit des transactions.",
      axe4_coherence: "Le Coran utilise la racine k-t-b dans plusieurs sens. Le sens d'ecriture physique est present dans les versets sur les scribes et les contrats. Le sens de decret divin est present dans les versets legislatifs. Les deux sens coexistent sans contradiction car l'ecriture est le moyen naturel de fixer les decrets. La coherence coranique permet les deux lectures mais le contexte legislatif oriente vers le decret.",
      axe5_frequence: "Pour la mission du khalifa, l'ecriture est un outil fondamental de gouvernance. Les lois doivent etre ecrites pour etre appliquees de maniere uniforme. L'inscription des droits et des devoirs garantit la justice et previent l'arbitraire. Le testament ecrit protege les droits des heritiers et empeche les conflits familiaux qui menacent la cohesion sociale. L'ecriture est donc au service de la prescription."
    }
  }});

  console.log('\n--- V180: hdr p=4 "Sédentarité/Civilisation" probable — ajout axes ---');
  await fixVWA(187, 'hdr', 4, { concepts: {
    "Sédentarité/Civilisation": {
      axe1_verset: "Dans ce verset, le mot hadara signifie 'se presenter' ou 'approcher'. Le concept de sedentarite evoque l'installation durable dans un lieu. Or la mort qui approche n'est pas un phenomene sedentaire mais un evenement ponctuel. Le verset decrit un moment precis — quand la mort se presente — pas un etat durable. La sedentarite implique une stabilite qui contredit la nature soudaine et decisive de la mort.",
      axe2_voisins: "Les versets voisins traitent de prescriptions legales — retribution puis testament. Le contexte est celui de situations critiques qui exigent des decisions rapides. La sedentarite comme concept evoque le contraire — une vie stable et etablie. Le passage decrit un moment de rupture ou la personne doit agir avant qu'il ne soit trop tard. La presence ou le temoignage de la mort est un evenement qui brise la sedentarite.",
      axe3_sourate: "Al-Baqarah traite de la construction d'une civilisation juste. Le concept de sedentarite est pertinent au niveau macro de la sourate car il s'agit de s'etablir et de creer des institutions. Cependant dans ce verset precis, la racine h-d-r est utilisee pour decrire l'imminence de la mort, pas l'installation dans un lieu. Le theme de la sourate ne suffit pas a justifier un sens qui ne correspond pas au contexte immediat.",
      axe4_coherence: "Le Coran utilise la racine h-d-r dans plusieurs contextes. Le sens de presence est le plus frequent — hadara signifie etre present, se presenter. Le sens de civilisation sedentaire existe mais est moins courant dans le contexte coranique. Les versets qui parlent de la mort utilisent systematiquement le sens de presence ou d'approche, confirmant que la sedentarite n'est pas le sens pertinent ici.",
      axe5_frequence: "Pour la mission du khalifa, la sedentarite est un prealable a la civilisation. On ne peut construire des institutions sans s'etablir. Cependant dans le contexte de ce verset, c'est la presence de la mort qui active l'obligation du testament. Le khalifa doit prevoir l'impermanence de la vie et organiser la transmission des biens pour maintenir la justice sociale au-dela de la mort individuelle."
    }
  }});

  console.log('\n--- V180: ahd p=5 "Unicité/Indivisibilité" probable — ajout axes ---');
  await fixVWA(187, 'ahd', 5, { concepts: {
    "Unicité/Indivisibilité": {
      axe1_verset: "Dans ce verset, le mot ahadakum signifie 'l'un d'entre vous' — c'est un pronom indefini qui designe n'importe quel individu. Le concept d'unicite ou d'indivisibilite evoque la singularite absolue. Or le verset utilise ahad dans le sens de 'quiconque parmi vous', pas dans le sens d'unicite divine ou metaphysique. Le mot fonctionne comme un indefini distributif, pas comme un attribut d'unicite.",
      axe2_voisins: "Les versets voisins traitent de prescriptions legales applicables a tous les croyants. Le mot ahad sert ici a generaliser — la prescription du testament s'applique a chaque individu sans exception. Le concept d'unicite impliquerait que le verset parle de la nature unique de chaque personne, ce qui n'est pas le propos. Le contexte legislatif exige un pronom indefini, pas une reflexion sur l'unicite.",
      axe3_sourate: "Al-Baqarah utilise le mot ahad dans plusieurs contextes. Le sens d'unicite divine apparait clairement dans le verset du Trône et ailleurs. Le sens indefini de 'quiconque' est le plus frequent dans les passages legislatifs de la sourate. Le theme de la sourate soutient les deux usages mais le contexte du testament oriente clairement vers le sens indefini et distributif.",
      axe4_coherence: "Le Coran utilise ahad dans deux registres distincts — l'unicite divine et le pronom indefini. Les deux usages sont bien attestes et ne se contredisent pas car ils operent dans des registres differents. Dans les versets legislatifs, ahad fonctionne systematiquement comme indefini. La coherence coranique confirme que le sens depend du contexte, pas d'une signification unique et fixe.",
      axe5_frequence: "Pour la mission du khalifa, la notion d'unicite de chaque individu est importante car elle fonde l'egalite devant la loi. Si chaque personne est unique et indivisible, ses droits sont inviolables. Cependant le verset utilise ahad pour generaliser l'obligation du testament, pas pour affirmer l'unicite individuelle. Le khalifa doit garantir que la loi s'applique a chacun sans exception — c'est le sens indefini qui porte cette universalite."
    }
  }});

  console.log('\n--- V180: wsy p=10 "Liaison/Connexion" probable — ajout axes ---');
  await fixVWA(187, 'wsy', 10, { concepts: {
    "Liaison/Connexion": {
      axe1_verset: "Dans ce verset, le mot wasiyyatu designe le testament — une recommandation solennelle faite avant la mort. Le concept de liaison ou connexion evoque un lien entre deux choses. Le testament cree effectivement un lien entre le mourant et ses heritiers, entre sa volonte et l'avenir. Cependant le testament est plus qu'un lien — c'est une injonction qui engage moralement et juridiquement ceux qui restent.",
      axe2_voisins: "Les versets voisins traitent de prescriptions legales qui organisent la vie en societe. Le testament comme liaison etablit une continuite entre le defunt et les vivants. Le verset 181 qui suit avertit ceux qui modifient le testament, ce qui confirme que le testament est plus qu'un simple lien — c'est une recommandation contraignante. La connexion est un aspect du testament mais pas sa nature profonde.",
      axe3_sourate: "Al-Baqarah construit un cadre legislatif ou chaque prescription cree des liens entre les membres de la communaute. Le concept de connexion est present dans toute la sourate a travers les pactes, les obligations et les relations familiales. Le testament participe a ce tissu de connexions. Cependant la sourate insiste sur le caractere obligatoire des prescriptions, ce qui oriente vers l'injonction plutot que la simple connexion.",
      axe4_coherence: "Le Coran utilise la racine w-s-y dans le sens de recommander fermement, enjoindre. Les versets qui emploient cette racine insistent sur le caractere solennel et contraignant de la recommandation. Le sens de connexion est etymologiquement present car la recommandation connecte celui qui ordonne a celui qui execute. Mais le Coran met l'accent sur l'obligation, pas sur le lien lui-meme.",
      axe5_frequence: "Pour la mission du khalifa, les connexions sociales sont essentielles a la cohesion. Le testament comme liaison maintient les liens familiaux au-dela de la mort. Cependant le khalifa a besoin d'institutions contraignantes, pas seulement de liens volontaires. Le testament comme injonction est plus utile a la gouvernance car il impose le respect de la volonte du defunt et previent les conflits successoraux."
    }
  }});

  console.log('\n--- V180: hqq p=14 "Obligation/Nécessité" probable — ajout axes ---');
  await fixVWA(187, 'hqq', 14, { concepts: {
    "Obligation/Nécessité": {
      axe1_verset: "Dans ce verset, le mot haqqan signifie 'en verite' ou 'obligatoirement'. Le concept d'obligation ou de necessite evoque un devoir impératif. Le verset prescrit le testament comme un devoir pour les pieux. L'obligation est un sens tres pertinent ici car le verset utilise haqqan en position d'accusatif absolu pour renforcer le caractere imperatif du testament. Le mot fonctionne comme un amplificateur de l'obligation.",
      axe2_voisins: "Les versets voisins etablissent des prescriptions legales — retribution, testament. Le contexte est celui de devoirs imposes aux croyants. Le concept d'obligation s'inscrit naturellement dans ce registre legislatif. Le verset 181 qui suit menace ceux qui modifient le testament, ce qui confirme le caractere obligatoire de la prescription. L'obligation est renforcee par la mention des 'pieux' a la fin du verset.",
      axe3_sourate: "Al-Baqarah est la sourate qui pose le plus grand nombre de prescriptions legales. Le concept d'obligation parcourt toute la sourate — jeune, priere, aumone, combat, testament. Le mot haqq apparait dans la sourate dans les deux sens — verite et obligation — mais toujours dans un contexte qui engage la responsabilite humaine. La sourate construit un systeme de devoirs qui definissent la piete.",
      axe4_coherence: "Le Coran utilise la racine h-q-q dans les deux sens de verite et d'obligation. Les deux sens sont complementaires car ce qui est vrai est aussi ce qui s'impose. Dans les contextes legislatifs, le sens d'obligation est dominant car il traduit le caractere contraignant de la prescription divine. La coherence coranique montre que la verite divine fonde l'obligation humaine.",
      axe5_frequence: "Pour la mission du khalifa, l'obligation est le fondement de toute gouvernance. Sans obligations contraignantes, la societe sombre dans l'anarchie. Le testament obligatoire protege les faibles — orphelins et proches — contre la cupidite des heritiers puissants. Le khalifa doit imposer des devoirs pour maintenir la justice sociale et empecher la concentration des richesses entre quelques mains."
    }
  }});

  console.log('\n=== FIX V171-180 TERMINE ===');
}
main().catch(console.error);
