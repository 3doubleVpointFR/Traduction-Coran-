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
  console.log('=== FIX V151-160 ===\n');

  // ===== V151 (vid=158) — 3 concepts probables sans axes =====
  console.log('--- V151: ayt, ktb, hkm probables ---');

  await fixVWA(158, 'ayt', 7, { concepts: {
    "Révélation/Parole": {
      axe1_verset: "Dans ce verset, le mot ayatina designe les signes ou versets que le messager recite aux croyants. Le concept de revelation ou parole est pertinent car les versets recites sont effectivement une parole revelee. Cependant, le mot ayah dans sa racine porte davantage le sens de signe visible et manifeste que de parole en tant que telle. La recitation est le moyen de transmission, mais le contenu — les signes — pointe vers une realite observable et identifiable, pas seulement vers un discours verbal.",
      axe2_voisins: "Les versets voisins traitent du rappel des bienfaits divins et de la gratitude. Le verset 150 conclut la section sur la qibla, et le verset 152 appelle a la mention de Dieu. La parole ou revelation est presente dans ce contexte mais le verset insiste sur la dimension pedagogique — enseigner, purifier — pas sur la revelation en tant que parole sacree. Les signes sont le support de l'enseignement, pas sa substance unique.",
      axe3_sourate: "Dans Al-Baqarah, le mot ayat apparait dans de nombreux contextes. Parfois il designe les versets du Coran, parfois les signes de la creation, parfois les miracles des prophetes. Le concept de revelation ou parole ne couvre qu'une partie de ce spectre semantique. La sourate utilise ayat dans un sens plus large que la simple parole revelee — les signes incluent les evenements historiques, les phenomenes naturels et les enseignements moraux.",
      axe4_coherence: "Dans l'ensemble du Coran, le mot ayat oscille entre signe et verset. Le concept de revelation ou parole est plus restreint que celui de signe. Quand le Coran parle de ses propres versets, il utilise souvent ayat au sens de signes qui pointent vers une verite plus large. La revelation est un vehicule, mais le signe est le contenu significatif qui demande reflexion et comprehension au-dela de la simple ecoute de la parole.",
      axe5_frequence: "Pour la mission du khalifa, la distinction entre parole et signe est importante. La parole revelee guide, mais les signes exigent une lecture active et une interpretation responsable. Le khalifa ne se contente pas de repeter une parole — il lit les signes dans la creation et dans la revelation pour gouverner justement. Le concept de revelation ou parole est trop passif pour la mission active du representant de Dieu sur terre."
    }
  }});

  await fixVWA(158, 'ktb', 10, { concepts: {
    "Écriture/Inscription": {
      axe1_verset: "Dans ce verset, le mot al-kitaba designe le Livre enseigne par le messager. Le concept d'ecriture ou inscription est pertinent car le Livre est par nature un texte ecrit et inscrit. Cependant, dans ce contexte pedagogique, l'accent est mis sur le contenu du Livre comme objet d'enseignement, pas sur l'acte d'ecrire ou d'inscrire. Le messager enseigne le Livre, il ne l'ecrit pas devant eux — la dimension d'inscription est secondaire par rapport a celle de contenu revele.",
      axe2_voisins: "Les versets voisins parlent de la mention de Dieu, de la patience et de la priere. Le Livre dans ce contexte est un outil de formation spirituelle, pas un objet calligraphique ou scribal. Le verset 146 mentionnait les gens du Livre pour les definir par leur rapport a l'ecrit, mais ici le Livre est enseigne comme contenu de sagesse. L'inscription est le support materiel, mais le verset insiste sur la transmission orale et pedagogique.",
      axe3_sourate: "Dans Al-Baqarah, le mot kitab apparait des dizaines de fois. Il designe tantot le Coran, tantot la Torah, tantot l'ecriture divine en general. Le concept d'ecriture ou inscription comme acte physique d'inscrire est pertinent pour certaines occurrences mais pas pour toutes. Dans ce verset, c'est le Livre comme corps de connaissance qui est vise, pas le geste d'ecrire ni le support materiel de l'inscription.",
      axe4_coherence: "Dans le Coran, le concept d'ecriture est lie a la permanence et a l'autorite du texte divin. Dieu ecrit, prescrit, inscrit les destinees. Le Livre est la transcription de la volonte divine. Cependant, quand le Coran parle d'enseigner le Livre, il met l'accent sur la comprehension et l'assimilation du contenu, pas sur la materialite de l'ecrit. L'ecriture est le medium, le Livre est le message — et c'est le message qui est enseigne.",
      axe5_frequence: "Pour la mission du khalifa, l'ecriture et l'inscription sont des outils essentiels de gouvernance — lois, traites, registres. Mais le Livre enseigne dans ce verset depasse la simple inscription administrative. Le khalifa doit connaitre le contenu du Livre, pas seulement savoir qu'il est ecrit. L'inscription preserve, mais c'est l'enseignement qui transforme — et la mission du khalifa est une mission de transformation par la connaissance, pas de preservation par l'ecrit."
    }
  }});

  await fixVWA(158, 'hkm', 11, { concepts: {
    "Jugement/Décision": {
      axe1_verset: "Dans ce verset, le mot al-hikmata est enseigne aux croyants par le messager, en parallele avec le Livre. Le concept de jugement ou decision est pertinent car la sagesse inclut la capacite de juger et decider. Cependant, dans ce contexte pedagogique, la sagesse depasse le simple acte de juger — elle englobe une comprehension profonde qui oriente l'action. Le jugement est une application de la sagesse, pas son essence complete.",
      axe2_voisins: "Les versets voisins parlent de la purification et de la gratitude. Le messager enseigne et purifie — la sagesse est l'outil de cette elevation spirituelle. Le concept de jugement ou decision est present dans la sagesse mais ne la resume pas. Les versets appellent a la patience et a la priere — des attitudes qui decoulent de la sagesse comprise comme discernement global, pas seulement comme capacite de trancher un litige.",
      axe3_sourate: "Dans Al-Baqarah, la racine h-k-m apparait dans plusieurs contextes — sagesse enseignee, jugement de Dieu, pouvoir de decision. Le concept de jugement ou decision est dominant dans les contextes juridiques et politiques de la sourate. Mais quand la hikma est associee au kitab comme objet d'enseignement, elle designe plutot la methode de comprehension et d'application du Livre — comment lire, comprendre et vivre selon le Livre.",
      axe4_coherence: "Dans le Coran, le jugement et la decision sont des attributs divins qui sont parfois delegues aux prophetes et aux juges. La hikma comme jugement est presente dans les versets sur la justice et le droit. Mais quand la hikma est enseignee comme complement du Livre, elle depasse le cadre juridique pour englober une sagesse existentielle — savoir quoi faire et pourquoi, pas seulement savoir qui a raison dans un litige.",
      axe5_frequence: "Pour la mission du khalifa, le jugement et la decision sont des fonctions centrales. Le khalifa juge entre les gens et prend des decisions pour la communaute. Le concept de jugement ou decision est donc tres pertinent pour la mission du khalifa, mais il n'epuise pas la hikma qui est enseignee. La sagesse du khalifa depasse le tribunal — elle inclut la vision strategique, la prudence, la comprehension des consequences a long terme de chaque acte de gouvernance."
    }
  }});

  // ===== V157 (vid=164) — rbb probable sans axes =====
  console.log('\n--- V157: rbb probable ---');
  await fixVWA(164, 'rbb', 5, { concepts: {
    "Croissance/Augmentation": {
      axe1_verset: "Dans ce verset, le mot rabbihim designe le Seigneur des endurants qui recoivent les prieres et la misericorde. Le concept de croissance ou augmentation est lie a la racine r-b-b qui porte l'idee de nourrir et faire grandir. Dans ce contexte, le Seigneur accorde Ses prieres aux endurants — l'idee de faire croitre est presente car les prieres divines elevent le statut des eprouves. La croissance est le resultat de l'epreuve supportee avec patience.",
      axe2_voisins: "Les versets voisins decrivent les epreuves que traversent les croyants — peur, faim, diminution des biens et des personnes. La croissance est paradoxalement liee a la diminution — ceux qui perdent dans l'epreuve gagnent aupres de leur Seigneur. Le verset 155 annonce la diminution materielle, et le verset 157 promet la croissance spirituelle. Le Seigneur comme Celui qui fait croitre transforme la perte en gain pour ceux qui endurent.",
      axe3_sourate: "Dans Al-Baqarah, la racine r-b-b apparait frequemment. Le concept de croissance ou augmentation est pertinent dans les passages sur la creation, ou Dieu fait croitre la vie et les biens. Dans la section des epreuves, la croissance prend un sens spirituel — les eprouves grandissent interieurement meme quand ils diminuent exterieurement. La sourate etablit que la vraie croissance est celle de la foi et de la guidance, pas celle des biens materiels.",
      axe4_coherence: "Dans le Coran, la racine r-b-b oscille entre seigneurie et croissance. Le Seigneur est Celui qui fait croitre progressivement — la tarbiyah est l'education progressive. Le concept de croissance est compatible avec l'idee de seigneurie car le Seigneur nourrit et eleve Ses creatures. Cependant, dans ce verset, l'accent est mis sur la relation d'autorite bienveillante entre le Seigneur et Ses serviteurs, pas sur le processus de croissance en lui-meme.",
      axe5_frequence: "Pour la mission du khalifa, le concept de croissance est essentiel. Le khalifa doit faire croitre la communaute — en savoir, en justice, en civilisation. La racine r-b-b rappelle que la gouvernance est une forme de tarbiyah — une education progressive qui accompagne la croissance des individus et de la collectivite. Le verset montre que la croissance passe parfois par l'epreuve, et le gouvernant juste doit savoir accompagner cette croissance difficile."
    }
  }});

  // ===== V159 (vid=166) — warnings: byn et ktb axes courts =====
  console.log('\n--- V159: byn et ktb axes courts ---');

  await fixVWA(166, 'byn', 10, { concepts: {
    "Séparation/Distance": {
      axe2_voisins: "Les versets voisins traitent de la dissimulation de la verite et de la malediction divine qui en resulte. Le concept de separation ou distance est present dans le contexte car cacher la verite cree une distance entre les gens et la guidance. Le verset 160 parle de ceux qui se repentent et expliquent — l'explication abolit la distance creee par la dissimulation. La separation entre la verite et les gens est le crime central de cette section.",
      axe3_sourate: "Dans Al-Baqarah, la racine b-y-n porte deux dimensions — la clarte et la separation. Le concept de separation ou distance est pertinent dans les contextes ou la sourate parle de la distinction entre le vrai et le faux, entre les croyants et les negateurs. La sourate etablit des frontieres claires entre les groupes et les attitudes. Le verset 159 utilise bayyannahu au sens de rendre clair, mais le concept de separation entre ceux qui expliquent et ceux qui cachent est sous-jacent.",
      axe5_frequence: "Pour la mission du khalifa, la separation et la distance entre les groupes sont des enjeux de gouvernance majeurs. Le khalifa doit maintenir la clarte et empecher la dissimulation qui cree des distances entre les gens et la verite. La bonne gouvernance rapproche les gens de la verite en la rendant claire et accessible. La separation n'est justifiee que pour distinguer le juste de l'injuste, pas pour cacher la verite au peuple."
    }
  }});

  await fixVWA(166, 'ktb', 14, { concepts: {
    "Écriture/Inscription": {
      axe2_voisins: "Les versets voisins traitent de ceux qui cachent les preuves claires apres les avoir expliquees aux gens dans le Livre. Le concept d'ecriture ou inscription est pertinent car le Livre est le support ecrit de la verite que ces personnes dissimulent. Le verset 160 mentionne ceux qui se repentent et expliquent — l'explication est l'oppose de la dissimulation. L'inscription dans le Livre rend la dissimulation d'autant plus grave car la verite est fixee par ecrit et donc verifiable.",
      axe3_sourate: "Dans Al-Baqarah, le mot kitab est omnipresent. Le concept d'ecriture ou inscription comme acte de fixer la verite est pertinent tout au long de la sourate. Les gens du Livre sont definis par leur rapport a l'ecrit sacre. La sourate examine en detail comment certains alterent l'ecrit, d'autres le cachent, d'autres le suivent. L'inscription dans le Livre est le fondement de la responsabilite — ce qui est ecrit ne peut etre nie sans mauvaise foi.",
      axe4_coherence: "Dans le Coran, le Livre est la reference ultime. Le concept d'ecriture ou inscription souligne la permanence et l'inalterable de la parole divine une fois fixee. Les nations qui ont recu un Livre portent une responsabilite proportionnelle a la clarte de ce qui leur a ete inscrit. Le Coran lui-meme se presente comme un Livre clair et detaille — l'inscription rend inexcusable toute dissimulation ou negation de son contenu par ceux qui y ont acces."
    }
  }});

  console.log('\n=== FIX V151-160 TERMINE ===');
}
main().catch(console.error);
