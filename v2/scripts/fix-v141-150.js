const { createClient } = require('@supabase/supabase-js');
const sb = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

async function fixVWA(vid, wk, pos, patch) {
  const { data } = await sb.from('verse_word_analyses')
    .select('id, analysis_axes').eq('verse_id', vid).eq('word_key', wk).eq('position', pos).single();
  if (!data) { console.log(`  SKIP ${wk}/p${pos} vid=${vid} — not found`); return; }
  const axes = { ...data.analysis_axes, ...patch };
  if (patch.concepts) {
    axes.concepts = { ...data.analysis_axes.concepts };
    for (const [cn, cv] of Object.entries(patch.concepts)) {
      axes.concepts[cn] = { ...(axes.concepts[cn] || {}), ...cv };
    }
  }
  const upd = { analysis_axes: axes };
  if (patch.sense_chosen) upd.sense_chosen = patch.sense_chosen;
  const { error } = await sb.from('verse_word_analyses').update(upd).eq('id', data.id);
  console.log(error ? `  ERR ${wk}/p${pos}: ${error.message}` : `  OK ${wk}/p${pos}`);
}

async function main() {
  console.log('=== FIX V141-150 ===\n');

  // ===== V145 (vid=152) =====
  console.log('--- V145 FIXES ---');

  // FIX tba (4 occurrences) — concept "Suivisme/Obéissance" needs retenu status + axes
  const tbaAxes = {
    concept_chosen: "Suivisme/Obéissance",
    concepts: {
      "Suivisme/Obéissance": {
        status: "retenu",
        senses: ["suivre", "imiter", "se conformer"],
        proof_ctx: "Le verbe ittaba'a (forme VIII de t-b-') designe l'action de suivre quelqu'un ou quelque chose. Dans ce contexte, il s'agit de suivre une direction de priere ou de se conformer aux passions.",
        axe1_verset: "Dans ce verset, le verbe de la racine t-b-' apparait sous plusieurs formes pour decrire l'attitude des gens du Livre face a la direction de priere. Le sens de suivre est central car le verset oppose ceux qui suivent leur propre qibla a ceux qui suivraient la qibla du Prophete. L'emploi repete du verbe souligne l'obstination de chaque groupe a maintenir sa propre direction. Le verset etablit que meme avec toutes les preuves, ils ne suivraient pas — le refus de suivre est ancre dans leur identite communautaire. La derniere occurrence avertit contre le fait de suivre leurs passions apres avoir recu le savoir.",
        axe2_voisins: "Les versets voisins traitent du changement de qibla et des reactions qu'il suscite. Le verset precedent parle de ceux qui cachent la verite, et le verset suivant affirme que la verite vient du Seigneur. Le theme du suivi est lie a celui de la reconnaissance — suivre ou ne pas suivre implique reconnaitre ou nier la verite. Les versets environnants montrent que le suivi n'est pas aveugle mais resulte d'un choix conscient face a la verite connue.",
        axe3_sourate: "Dans la sourate Al-Baqarah, la racine t-b-' apparait dans de multiples contextes. Au debut, il est dit de ne pas suivre les pas du diable. Plus loin, les croyants sont appeles a suivre ce qui a ete revele. Cette recurrence montre que le suivi est un theme structurant de la sourate — la question n'est pas de suivre ou non, mais de savoir qui et quoi suivre. Le verset 145 cristallise cette problematique autour de la qibla comme test de fidelite.",
        axe4_coherence: "Le concept de suivre est fondamental dans le Coran pour decrire la relation entre les croyants et la guidance divine. Les prophetes sont envoyes pour etre suivis, et le refus de suivre est assimile a l'egarement. Dans ce verset, le refus de suivre la qibla du Prophete par les gens du Livre illustre un schema coranique recurrent — la resistance des communautes anterieures face aux nouvelles revelations. Le suivi est presente comme un acte d'obeissance volontaire, pas une contrainte mecanique.",
        axe5_frequence: "Dans la perspective de la mission du khalifa, le concept de suivi est lie a la gouvernance juste. Le khalifa doit suivre la guidance divine et non les passions humaines. Ce verset avertit explicitement contre le fait de suivre les passions apres avoir recu le savoir — un principe fondamental pour toute autorite responsable. La capacite de distinguer entre le suivi de la verite et le suivisme aveugle est au coeur de la responsabilite du representant de Dieu sur terre."
      }
    }
  };
  await fixVWA(152, 'tba', 8, tbaAxes);
  await fixVWA(152, 'tba', 12, tbaAxes);
  await fixVWA(152, 'tba', 16, tbaAxes);
  await fixVWA(152, 'tba', 19, tbaAxes);

  // FIX ayh pos=6 — concept "Non trouvé" → needs proper concept
  // ayh has no concept in word_meanings. Create a synthetic one.
  await fixVWA(152, 'ayh', 6, {
    concept_chosen: "Signe/Preuve",
    concepts: {
      "Signe/Preuve": {
        status: "retenu",
        senses: ["signe", "preuve", "verset", "miracle"],
        proof_ctx: "Le mot ayah designe un signe, une preuve ou un verset. Dans le Coran, il designe les versets reveles ainsi que les signes manifestes de Dieu dans la creation.",
        axe1_verset: "Dans ce verset, le mot ayah est employe au singulier avec le quantificateur kulli (tout/chaque) pour designer toutes les preuves possibles. Le sens de signe ou preuve est ici central car le verset affirme que meme en apportant toutes les preuves aux gens du Livre, ils ne suivraient pas la qibla du Prophete. L'emploi du singulier avec kulli generalise — chaque preuve individuelle, quelle qu'elle soit, ne suffirait pas. Cette generalisation renforce l'idee d'un refus delibere et systematique.",
        axe2_voisins: "Les versets voisins traitent de la reconnaissance de la verite et du refus de la suivre. Le verset 146 dit que les gens du Livre reconnaissent la verite comme ils reconnaissent leurs fils. Le verset 147 affirme que la verite vient du Seigneur. Le mot ayah s'inscrit dans ce champ semantique de l'evidence et de la preuve — les signes sont la, la reconnaissance est la, mais le suivi est absent. La preuve n'est donc pas le probleme, c'est la volonte qui fait defaut.",
        axe3_sourate: "Dans la sourate Al-Baqarah, le mot ayah et son pluriel ayat apparaissent de nombreuses fois. Les premiers versets parlent de ceux qui croient a l'invisible et a ce qui a ete revele. Plus loin, les signes de Dieu dans la creation sont evoques. Le mot couvre un large spectre — du verset revele au miracle en passant par le signe naturel. Dans le verset 145, il designe specifiquement les preuves argumentatives que le Prophete pourrait presenter.",
        axe4_coherence: "Le concept de signe est central dans l'ensemble du Coran. Les signes de Dieu sont presentes comme des invitations a la reflexion et a la foi. Le refus de les accepter malgre leur evidence est un theme recurrent — les peuples anterieurs ont rejete les signes envoyes par leurs prophetes. Le verset 145 s'inscrit dans cette continuite en montrant que l'accumulation de preuves ne suffit pas face a un refus ancre dans l'identite communautaire.",
        axe5_frequence: "Dans la mission du khalifa, les signes jouent un role fondamental. Le representant de Dieu doit lire les signes, les comprendre et agir en consequence. Le verset montre que l'accumulation de preuves ne garantit pas l'adhesion — un enseignement crucial pour la gouvernance. Le khalifa doit savoir que la persuasion par la preuve a ses limites et que la guidance ultime appartient a Dieu seul."
      }
    }
  });

  // FIX qbl (3 occurrences pos=9,13,17) — concept_chosen should match retenu
  const qblFix = {
    concept_chosen: "Orientation/Direction",
    concepts: {
      "Orientation/Direction": {
        status: "retenu",
        senses: ["direction", "qibla", "orientation"],
        proof_ctx: "Le mot qiblah de la racine q-b-l designe la direction vers laquelle on se tourne pour la priere. Dans ce contexte, il s'agit specifiquement de la direction de priere et de l'enjeu du changement de qibla.",
        axe1_verset: "Dans ce verset, le mot qiblah apparait trois fois sous differentes formes pour opposer la direction de priere du Prophete a celles des gens du Livre. Le sens de direction est dominant car tout le verset tourne autour du refus mutuel de suivre la direction de l'autre. La premiere occurrence designe la qibla du Prophete, la deuxieme celle des gens du Livre, et la troisieme celle d'un sous-groupe. Cette triple repetition structure le verset comme un constat d'irreductibilite des positions.",
        axe2_voisins: "Les versets environnants sont tous centres sur la question de la qibla. Le verset 142 demande pourquoi les musulmans ont change de direction. Le verset 143 explique la sagesse de la communaute mediane. Le verset 144 ordonne de se tourner vers la Mosquee sacree. Le mot qiblah dans le verset 145 conclut cette section en reconnaissant que chaque groupe maintient sa direction — ce n'est pas un echec mais un constat realiste qui libere le Prophete de la pression de convaincre.",
        axe3_sourate: "La racine q-b-l dans Al-Baqarah est concentree dans cette section sur le changement de qibla (versets 142-150). C'est l'un des passages les plus denses en occurrences de cette racine dans tout le Coran. La sourate utilise la question de la direction physique de priere comme metaphore de l'orientation spirituelle — vers qui se tourne-t-on, qui accepte-t-on de suivre. La qibla devient le test concret de l'obeissance et de l'identite communautaire.",
        axe4_coherence: "Le concept de direction de priere dans le Coran est lie a la notion d'unite et de soumission a Dieu. Le changement de qibla de Jerusalem a La Mecque est un evenement majeur qui distingue la communaute musulmane. Dans l'ensemble du Coran, l'orientation physique reflete l'orientation interieure — se tourner vers Dieu, c'est Lui obeir. Le verset 145 montre que cette orientation est aussi un marqueur d'identite communautaire que chaque groupe refuse d'abandonner.",
        axe5_frequence: "Pour la mission du khalifa, la direction de priere symbolise l'unite de la communaute sous une meme orientation. Le khalifa doit maintenir cette unite d'orientation tout en reconnaissant la diversite des traditions. Le verset enseigne que la coercition en matiere de direction spirituelle est vaine — chaque groupe maintient sa qibla. Le gouvernant juste accepte cette realite tout en restant ferme sur sa propre orientation divine."
      },
      "Réception/Accueil": {
        status: "probable",
        senses: ["recevoir", "accueillir", "accepter"],
        proof_ctx: "Le sens de recevoir ou accueillir de la racine q-b-l est secondaire ici car le contexte est clairement celui de la direction physique, pas de la reception.",
        axe1_verset: "Dans ce verset, bien que la racine q-b-l puisse porter le sens de recevoir, le contexte de la direction de priere impose le sens d'orientation. Cependant, la dimension d'accueil n'est pas totalement absente — refuser de suivre la qibla de l'autre, c'est aussi refuser d'accueillir sa tradition. Le verset montre que l'accueil mutuel des traditions est bloque par l'attachement identitaire a sa propre direction. Ce refus de reception est presente comme un fait, pas comme une condamnation.",
        axe2_voisins: "Les versets voisins montrent que la reception de la verite est selective — les gens du Livre reconnaissent la verite mais ne l'accueillent pas dans leurs pratiques. Le verset 146 dit qu'ils reconnaissent le Prophete mais cachent cette reconnaissance. L'accueil theorique existe mais l'accueil pratique fait defaut. Cette nuance entre reconnaitre et accueillir est centrale dans cette section.",
        axe3_sourate: "Dans Al-Baqarah, la racine q-b-l oscille entre direction et reception. Les premiers versets parlent de ceux qui accueillent la revelation et de ceux qui la rejettent. La section sur la qibla fusionne les deux sens — accueillir la direction, c'est accueillir la guidance. Le refus de la qibla est un refus d'accueil de la nouvelle dispensation divine.",
        axe4_coherence: "Dans le Coran, recevoir et accueillir la verite est un acte de foi fondamental. La racine q-b-l porte cette double dimension d'orientation physique et d'accueil interieur. Les prophetes viennent avec des signes et l'accueil de ces signes determine le sort des communautes. Le verset 145 montre que l'accueil est aussi communautaire — chaque groupe accueille sa propre tradition et ferme la porte aux autres.",
        axe5_frequence: "La mission du khalifa implique la capacite d'accueillir la guidance divine et de la transmettre. Le representant de Dieu doit etre receptif aux signes tout en maintenant la direction fixee par la revelation. L'accueil n'est pas passif mais actif — c'est un choix delibere de se tourner vers la source divine."
      }
    }
  };
  await fixVWA(152, 'qbl', 9, qblFix);
  await fixVWA(152, 'qbl', 13, qblFix);
  await fixVWA(152, 'qbl', 17, qblFix);

  // FIX awt pos=3 — "Refuge/Protection" retenu missing axes
  await fixVWA(152, 'awt', 3, {
    concepts: {
      "Refuge/Protection": {
        axe1_verset: "Dans ce verset, le verbe de la racine a-t-y est employe au passif pour designer ceux qui ont recu le Livre. Le sens de donner ou apporter est central car il etablit le statut des gens du Livre comme destinataires d'une revelation anterieure. L'emploi du passif souligne que la reception du Livre n'est pas un merite personnel mais un don divin. Ce statut de recepteur fonde leur autorite en matiere religieuse mais aussi leur responsabilite face a la nouvelle revelation.",
        axe2_voisins: "Les versets voisins utilisent egalement cette racine pour designer les gens du Livre. Le verset 144 parle de ceux a qui le Livre a ete donne et qui savent que le changement de qibla est la verite. Le verset 146 reprend la meme formule. Cette repetition cree un motif : les detenteurs du Livre sont identifies par ce qu'ils ont recu, pas par ce qu'ils font de cette reception. La tension entre recevoir et agir est au coeur de cette section.",
        axe3_sourate: "Dans Al-Baqarah, la formule « ceux a qui le Livre a ete donne » revient de nombreuses fois. Elle designe les communautes juive et chretienne comme heritiers d'une revelation divine. La sourate examine en detail leur rapport a cette revelation — acceptation, rejet, dissimulation, alteration. La racine a-t-y sert de marqueur recurrent pour situer ces communautes dans la hierarchie de la reception divine.",
        axe4_coherence: "Le concept de donner ou apporter dans le Coran est lie a la notion de revelation divine. Dieu donne le Livre, la sagesse, le pouvoir. L'acte de donner est divin et celui de recevoir est humain. La responsabilite du recepteur est proportionnelle a ce qu'il a recu. Les gens du Livre ont recu beaucoup, donc leur responsabilite est grande — leur refus de suivre la verite est d'autant plus grave qu'ils savent ce qu'ils rejettent.",
        axe5_frequence: "Pour la mission du khalifa, le concept de reception divine est fondamental. Le khalifa est celui qui recoit la responsabilite de gouverner selon la guidance divine. Comme les gens du Livre, il a recu un depot sacre dont il doit rendre compte. Le verset enseigne que recevoir ne suffit pas — il faut aussi agir conformement a ce qu'on a recu, sous peine d'etre parmi les injustes."
      }
    }
  });

  // ===== V148 (vid=155) =====
  console.log('\n--- V148 FIXES ---');
  // FIX shya pos=15 — concept_chosen "Chose/Existence" probable → should be "Volonté" (retenu)
  await fixVWA(155, 'shya', 15, {
    concept_chosen: "Volonté",
    concepts: {
      "Volonté": {
        status: "retenu"
      }
    }
  });

  // ===== V150 (vid=157) =====
  console.log('\n--- V150 FIXES ---');
  // FIX nem pos=22 — "Douceur/Aisance" probable missing axes
  await fixVWA(157, 'nem', 22, {
    concepts: {
      "Douceur/Aisance": {
        axe1_verset: "Dans ce verset, le mot ni'mah designe le bienfait divin que Dieu promet de parachever sur les croyants. Le sens de douceur ou d'aisance est sous-jacent — le bienfait divin apporte l'aisance et la facilite. L'expression 'achever Mon bienfait sur vous' implique que le bienfait est un processus progressif qui atteint son terme avec l'obeissance a la direction divine. La douceur divine se manifeste dans la guidance complete que represente la qibla definitive.",
        axe2_voisins: "Les versets voisins parlent de la direction de priere et de la guidance. Le bienfait dont il est question est directement lie a l'etablissement de la qibla vers la Mosquee sacree. Les versets precedents ordonnent de se tourner dans cette direction, et ce verset ajoute que cette orientation fait partie de l'achevement du bienfait divin. La douceur reside dans la clarte de la direction — ne plus douter de ou se tourner est une forme d'aisance spirituelle.",
        axe3_sourate: "Dans la sourate Al-Baqarah, le concept de bienfait divin apparait dans plusieurs contextes. Au debut, les bienfaits accordes aux fils d'Israel sont rappeles. Plus loin, les bienfaits de la creation sont evoques. Le mot ni'mah sert de fil conducteur pour montrer la generosite divine et la responsabilite qu'elle implique. L'achevement du bienfait dans le verset 150 marque un tournant — la communaute musulmane recoit la plenitude de la guidance.",
        axe4_coherence: "Le concept de bienfait divin est omnipresent dans le Coran. La formule 'achever le bienfait' apparait dans des contextes de completion de la revelation et de la guidance. La douceur et l'aisance sont des attributs de la relation divine avec les croyants obeissants. Le Coran presente la guidance comme le plus grand des bienfaits — plus que la richesse ou la sante, c'est la direction claire qui constitue le veritable confort spirituel.",
        axe5_frequence: "Dans la mission du khalifa, le bienfait divin est le fondement de l'autorite legitime. Le representant de Dieu gouverne par la douceur et l'aisance, pas par la contrainte. L'achevement du bienfait signifie que la guidance est complete et que le khalifa dispose de tous les outils necessaires pour sa mission. La douceur dans la gouvernance reflete la douceur divine — le pouvoir juste facilite la vie des gens plutot que de l'alourdir."
      }
    }
  });

  // ===== V143 (vid=150) — WARNING fix: amn short axe =====
  console.log('\n--- V143 WARNING FIXES ---');
  await fixVWA(150, 'amn', 48, {
    concepts: {
      "Sécurité/Confiance": {
        axe2_voisins: "Les versets voisins parlent de la communaute mediane et de son role de temoin. La securite et la confiance sont des prerequis pour exercer ce role de temoignage — une communaute qui ne se sent pas en securite ne peut pas temoigner sereinement. Le verset precedent etablit le changement de qibla, et ce verset assure que la foi passee n'est pas perdue. Cette assurance cree un sentiment de securite spirituelle necessaire pour avancer dans la nouvelle direction avec confiance."
      }
    }
  });

  // ===== V144 (vid=151) — WARNING fixes: short axes =====
  console.log('\n--- V144 WARNING FIXES ---');

  // ktb pos=20 — 3 short axes
  await fixVWA(151, 'ktb', 20, {
    concepts: {
      "Écriture/Inscription": {
        axe2_voisins: "Les versets voisins traitent du changement de qibla et de la reaction des detenteurs du Livre. L'ecriture est au coeur de leur identite — ils sont definis par ce qu'ils possedent, le Livre. Le verset 143 parle de la communaute mediane, et le verset 145 affirme que meme avec toutes les preuves, les gens du Livre ne suivraient pas la qibla du Prophete. L'ecriture comme inscription est pertinente car elle evoque la fixation — ce qui est ecrit est fixe, et les gens du Livre restent fixes dans leur tradition ecrite.",
        axe3_sourate: "Dans Al-Baqarah, le mot kitab est l'un des termes les plus frequents. Il designe tantot le Coran, tantot la Torah ou l'Evangile, tantot l'ecriture divine en general. Le concept d'ecriture comme inscription souligne la permanence et l'autorite du texte revele. La sourate examine en detail le rapport des differentes communautes a leurs ecritures — certains les suivent fidelement, d'autres les alterent, d'autres les cachent. Ce theme de la fidelite a l'ecrit est structurant pour toute la sourate.",
        axe4_coherence: "Dans l'ensemble du Coran, le concept d'ecriture est fondamental. Dieu ecrit, prescrit, inscrit les destinees. Le Livre revele est la transcription de la volonte divine. L'inscription va au-dela du simple fait d'ecrire — elle implique une permanence, une autorite qui transcende le temps. Les detenteurs du Livre sont ceux qui ont recu cette inscription et qui en portent la responsabilite, qu'ils l'honorent ou la trahissent."
      }
    }
  });

  // qbl pos=6 — short axe2
  await fixVWA(151, 'qbl', 6, {
    concepts: {
      "Réception/Accueil": {
        axe2_voisins: "Les versets environnants traitent du changement de direction de priere. La dimension de reception est presente car le Prophete recoit une nouvelle qibla de la part de Dieu. Le verset 143 parle de la communaute mediane qui recoit le role de temoin. Le verset 145 aborde le refus de reception mutuelle des directions de priere. L'accueil de la nouvelle direction est un acte de foi qui distingue ceux qui recoivent la guidance de ceux qui la rejettent."
      }
    }
  });

  // rbb pos=24 — 3 short axes
  await fixVWA(151, 'rbb', 24, {
    concepts: {
      "Croissance/Augmentation": {
        axe2_voisins: "Les versets voisins parlent de la qibla et de la verite divine. Le concept de croissance est lie a la notion de seigneurie — le Seigneur fait croitre et developper. Le verset 143 mentionne la communaute que Dieu a fait croitre comme communaute mediane. Le verset 145 avertit contre les passions qui freinent la croissance spirituelle. La croissance est le resultat de l'obeissance au Seigneur — suivre la direction qu'Il indique permet l'elevation.",
        axe4_coherence: "Dans le Coran, le concept de croissance est intrinsequement lie a la racine r-b-b qui designe aussi le Seigneur. Le Seigneur est Celui qui fait croitre, qui nourrit, qui eleve progressivement. Cette croissance n'est pas seulement materielle mais aussi spirituelle et morale. Le lien entre seigneurie et croissance est fondamental — obeir au Seigneur, c'est se placer dans les conditions optimales de croissance et de developpement integral de l'etre humain.",
        axe5_frequence: "Pour la mission du khalifa, le concept de croissance sous la seigneurie divine est essentiel. Le khalifa doit favoriser la croissance de la communaute — croissance spirituelle, intellectuelle et civilisationnelle. La seigneurie divine fournit le cadre dans lequel cette croissance est possible et benefique. Le khalifa qui s'ecarte de la direction divine freine la croissance collective, tandis que celui qui suit la guidance permet l'epanouissement de la communaute."
      }
    }
  });

  // shtr pos=17 — short axe5
  await fixVWA(151, 'shtr', 17, {
    concepts: {
      "Direction/Orientation": {
        axe5_frequence: "Dans la mission du khalifa, la direction vers laquelle on se tourne est une question d'orientation civilisationnelle. Le mot shatr designe le cote ou la direction, et dans ce contexte il s'agit de la direction physique de la priere. Pour le khalifa, cette orientation physique symbolise l'orientation morale et politique — tourner son visage vers le sacre, c'est orienter la gouvernance vers les valeurs divines. La direction n'est pas arbitraire mais porteuse de sens."
      }
    }
  });

  console.log('\n=== FIX V141-150 TERMINE ===');
}
main().catch(console.error);
