const { createClient } = require('@supabase/supabase-js');
const db = createClient('https://gwtgftosscjupxxsubev.supabase.co',process.env.SUPABASE_SERVICE_KEY);

// S2:17 (verse_id=24) — مَثَلُهُمْ كَمَثَلِ ٱلَّذِى ٱسْتَوْقَدَ نَارًا فَلَمَّآ أَضَآءَتْ مَا حَوْلَهُ ذَهَبَ ٱللَّهُ بِنُورِهِمْ وَتَرَكَهُمْ فِى ظُلُمَٰتٍ لَّا يُبْصِرُونَ
// S2:18 (verse_id=25) — صُمٌّ بُكْمٌ عُمْىٌ فَهُمْ لَا يَرْجِعُونَ

async function getWaIds(keys) {
  const { data } = await db.from('word_analyses').select('id, word_key').in('word_key', keys);
  const map = {};
  for (const d of data) map[d.word_key] = d.id;
  return map;
}

// VWA data for V17-18
const vwaData = [
  // === V17 (verse_id=24) ===
  { verse_id: 24, word_key: 'mvl', position: 1, analysis_axes: {
    sense_chosen: "leur exemple",
    concept_chosen: "Similitude/Comparaison",
    concepts: {
      "Similitude/Comparaison": {
        senses: ["exemple", "parabole", "similitude"],
        status: "retenu",
        proof_ctx: "Le sens retenu est « Similitude/Comparaison ». Le mot mathaluhum est un nom masculin suivi du pronom 3MP (hum) — « leur exemple, leur similitude ». Le nom mathal introduit une parabole — une comparaison concrète pour illustrer un comportement. Le kasra final du second mathal (mathali) indique le cas indirect après ka (comme). La structure mathaluhum ka-mathali (leur exemple est comme l'exemple de) est un procédé coranique classique d'illustration par l'image concrète. Distinction avec « Ressemblance/Identité » : il ne s'agit pas de ressembler mais de comparer par une image. Distinction avec « Représentation/Image » : il ne s'agit pas d'une statue ou d'une image physique mais d'une parabole.",
        axe1_verset: "Le mot mathaluhum ouvre le verset par une parabole — « leur exemple est comme l'exemple de celui qui a allumé un feu ». Le champ lexical est celui de la comparaison didactique : le texte va utiliser une image concrète (le feu, la lumiere, les tenebres) pour illustrer l'etat des hypocrites. Le pronom hum renvoie aux hypocrites decrits dans les versets precedents (v8-16). Le nom mathal est au cas sujet (nominatif) car il est le mubtada (sujet) de la phrase nominale. La parabole du feu est une mise en scene : quelqu'un allume un feu, la lumiere eclaire autour de lui, puis Dieu emporte la lumiere et les laisse dans les tenebres. Le mathal est l'outil par lequel le texte passe de la description abstraite (v8-16) a l'illustration concrete.",
        axe2_voisins: "Le verset 17 ouvre une serie de paraboles sur les hypocrites. Le verset 19 propose une seconde parabole (l'orage avec la foudre et le tonnerre). Le verset 20 complete cette seconde parabole. Les deux paraboles (feu v17, orage v19-20) illustrent le meme phenomene : les hypocrites ont eu un moment de lumiere (la guidance) puis l'ont perdu. Le verset 18 (sourds, muets, aveugles) est le verdict qui suit la premiere parabole. Les paraboles encadrent le diagnostic : l'image concrete precede, le verdict suit.",
        axe3_sourate: "La sourate 2 utilise les paraboles a plusieurs reprises pour illustrer des comportements — v26 annonce que Dieu n'hesite pas a proposer des paraboles. La parabole des hypocrites (v17) est la premiere de la sourate. Elle s'inscrit dans la section v8-20 qui decrit les hypocrites. La sourate passe de la description directe (v8-16 : ils disent, ils font) a l'illustration par l'image (v17-20 : la parabole du feu et de l'orage). Le mathal est l'outil pedagogique que la sourate utilise pour rendre visible ce qui est cache — l'etat interieur des hypocrites.",
        axe4_coherence: "Le Coran utilise le mot mathal dans de nombreuses sourates pour introduire des paraboles — sourate 14:24 (le bon arbre), sourate 24:35 (la lumiere), sourate 29:41 (l'araignee). Le procede est constant : mathaluhum ka-mathali (leur exemple est comme l'exemple de) introduit une comparaison concrete. La coherence est parfaite avec l'usage coranique du mathal comme outil didactique. Le verset 2:26 confirme que Dieu utilise les paraboles comme methode d'enseignement.",
        axe5_frequence: "La parabole (mathal) est un outil de la mission humaine de comprehension — elle rend accessible ce qui est abstrait. Le texte utilise des images concretes (feu, lumiere, tenebres) pour que l'etre humain comprenne l'etat des hypocrites. La mission de justice passe par la comprehension — et le mathal est l'instrument qui permet de comprendre les comportements humains en les illustrant par des images du quotidien. La parabole montre que la guidance divine utilise les moyens les plus accessibles pour etre comprise."
      },
      "Ressemblance/Identité": {
        senses: ["ressembler", "être semblable"],
        status: "nul",
        proof_ctx: "Le mot mathal ici est un nom qui introduit une parabole (ka-mathali = comme l'exemple de), pas un verbe de ressemblance. Le contexte est la comparaison didactique, pas l'identite. Hors sujet."
      },
      "Représentation/Image": {
        senses: ["statue", "image"],
        status: "nul",
        proof_ctx: "Il ne s'agit pas d'une image physique ou d'une statue. Le mathal est une parabole, une comparaison abstraite. Hors sujet."
      }
    }
  }},
  { verse_id: 24, word_key: 'wqd', position: 4, analysis_axes: {
    sense_chosen: "a cherché à allumer",
    concept_chosen: "Combustion/Feu",
    concepts: {
      "Combustion/Feu": {
        senses: ["allumer", "brûler", "combustion"],
        status: "retenu",
        proof_ctx: "Le sens retenu est « Combustion/Feu ». Le verbe istawqada est a l'accompli 3MS forme X (istaf'ala) — « il a cherche a allumer ». La forme X ajoute la demande ou la recherche active : istawqada c'est chercher a obtenir du feu, s'efforcer d'allumer. L'accompli dit que l'action est achevee — il a effectivement allume le feu. Le verbe est suivi de naran (un feu, accusatif indefini). La racine w-q-d signifie bruler, s'allumer — le waqud est le combustible, le waqid est celui qui allume. La forme X insiste sur l'effort volontaire d'obtenir le feu.",
        axe1_verset: "Le verbe istawqada est l'action centrale de la parabole — « celui qui a cherche a allumer un feu ». Le champ lexical est celui de l'effort pour obtenir la lumiere : allumer un feu dans l'obscurite est un acte volontaire qui demande un effort. La forme X (istaf'ala) indique que le personnage a activement cherche le feu — ce n'est pas un feu qui est venu a lui, c'est lui qui l'a provoque. Le feu allume produit de la lumiere (ada'at = a eclaire), puis Dieu emporte cette lumiere. L'ironie est dans l'effort : il a cherche la lumiere, il l'a obtenue, puis elle lui a ete retiree. La combustion est le point de depart de toute la parabole.",
        axe2_voisins: "Le verset 17 introduit le feu comme source de lumiere temporaire. Le verset 18 (sourds, muets, aveugles) decrit l'etat final apres la perte de la lumiere. Le verset 19 propose une seconde parabole avec d'autres elements naturels (pluie, tonnerre, foudre). La combustion du v17 est la premiere image — le feu est une lumiere fragile et temporaire que Dieu peut retirer a tout moment. Le feu allume par l'effort humain est oppose a la lumiere divine qui est permanente.",
        axe3_sourate: "La sourate 2 utilise le feu et la lumiere comme metaphores de la guidance et de l'egarement. La parabole du feu (v17) illustre la situation des hypocrites qui ont eu un moment de guidance (le feu allume) puis l'ont perdu. Le feu revient au v24 (un feu dont le combustible est les hommes et les pierres) comme chatiment. La sourate oppose le feu-lumiere (guidance temporaire perdue) au feu-chatiment (consequence de l'egarement).",
        axe4_coherence: "Le Coran utilise la racine w-q-d dans plusieurs contextes — sourate 3:10 (combustible du feu), sourate 85:5 (le feu alimente). La forme X (istawqada) est rare dans le Coran, ce qui souligne le caractere unique de cette parabole. L'effort d'allumer (forme X) oppose a la perte de la lumiere cree un contraste dramatique. La coherence est forte avec l'usage coranique du feu comme symbole.",
        axe5_frequence: "La combustion comme effort humain pour obtenir la lumiere illustre la recherche de la guidance. L'etre humain fait un effort pour comprendre (allumer un feu), obtient un moment de clarte (le feu eclaire), mais s'il ne maintient pas cet effort avec sincerite, la lumiere lui est retiree. La mission humaine exige un effort constant — la guidance n'est pas un acquis definitif mais une lumiere qu'il faut entretenir. La parabole montre que l'effort initial ne suffit pas si la sincerite fait defaut."
      }
    }
  }},
  { verse_id: 24, word_key: 'nwr', position: 5, analysis_axes: {
    sense_chosen: "un feu",
    concept_chosen: "Lumière/Clarté",
    concepts: {
      "Lumière/Clarté": {
        senses: ["lumière", "éclairer", "feu", "guider par la lumière"],
        status: "retenu",
        proof_ctx: "Le sens retenu est « Lumiere/Clarte ». Le mot naran est un nom feminin indefini a l'accusatif — « un feu ». La racine n-w-r couvre a la fois le feu et la lumiere — le feu est une source de lumiere. Le mot est complement d'objet de istawqada (a cherche a allumer) — il a allume UN feu, c'est-a-dire une source de lumiere. L'indefini (tanwin) dit que c'est un feu quelconque, pas un feu specifique. Le feu ici est la source de la lumiere qui va eclairer puis etre retiree.",
        axe1_verset: "Le mot naran est l'objet de l'allumage — « a cherche a allumer un feu ». Le champ lexical est celui de la source lumineuse : le feu est ce qui produit la lumiere (ada'at = a eclaire) et dont la lumiere (nur) sera ensuite emportee par Dieu. Le nom est feminin (d'ou le verbe ada'at au feminin qui suit). L'indefini dit que c'est un feu ordinaire — pas un feu special, juste une flamme dans l'obscurite. Le feu est la premiere etape de la parabole : allumage, eclairage, puis extinction. L'image est celle d'un voyageur dans la nuit qui allume un feu pour y voir.",
        axe2_voisins: "Le feu (nar) du v17 est oppose a la lumiere (nur) du meme verset. Le feu est allume par l'homme (istawqada), la lumiere est emportee par Dieu (dhahaba llahu bi-nurihim). Le verset 18 decrit l'etat apres l'extinction : sourds, muets, aveugles. Le verset 19 introduit une autre source lumineuse (la foudre, barq) dans la seconde parabole. Le feu du v17 et la foudre du v19 sont deux images de lumiere temporaire qui apparait puis disparait.",
        axe3_sourate: "La sourate 2 oppose lumiere et tenebres dans plusieurs passages. Le v257 dit que Dieu est le protecteur des croyants — Il les sort des tenebres vers la lumiere. La parabole du v17 illustre le mouvement inverse : les hypocrites avaient la lumiere et se retrouvent dans les tenebres. Le feu comme source de lumiere temporaire s'oppose a la lumiere divine permanente. La sourate montre que la lumiere humaine (le feu) est fragile, seule la lumiere divine est fiable.",
        axe4_coherence: "Le Coran utilise nar (feu) dans des centaines de versets. La racine n-w-r couvre le feu et la lumiere — les deux sont lies car le feu est la source naturelle de lumiere. La sourate 24:35 (la parabole de la lumiere) utilise la meme racine pour la lumiere divine. La coherence est totale : le feu est une lumiere d'origine humaine, la nur est la lumiere divine. Le verset 2:17 oppose les deux.",
        axe5_frequence: "Le feu comme source de lumiere illustre l'effort humain pour comprendre et voir. La mission humaine passe par la recherche de la lumiere — comprendre, discerner, voir clairement. Le feu est un outil humain qui peut eclairer mais qui est temporaire et fragile. La guidance divine est la vraie lumiere — le feu humain n'en est qu'un substitut imparfait. La parabole rappelle que la mission de justice necessite la lumiere divine, pas seulement l'effort humain."
      }
    }
  }},
  { verse_id: 24, word_key: 'dwa', position: 7, analysis_axes: {
    sense_chosen: "a éclairé",
    concept_chosen: "Lumière/Éclairage",
    concepts: {
      "Lumière/Éclairage": {
        senses: ["donner de la lumière", "briller", "éclairer"],
        status: "retenu",
        proof_ctx: "Le sens retenu est « Lumiere/Eclairage ». Le verbe ada'at est a l'accompli 3FS forme IV — « elle a eclaire ». La forme IV (af'ala) ajoute la causalite : la chose a produit de la lumiere, elle a FAIT briller. Le feminin (ta marbuta) renvoie au feu (nar, feminin). L'accompli dit que l'eclairage a eu lieu — le feu a effectivement eclaire. Le complement ma hawlahu (ce qui est autour de lui) indique que la lumiere a illumine tout l'environnement. La racine d-w-' signifie emettre de la lumiere, briller.",
        axe1_verset: "Le verbe ada'at marque le moment ou le feu a eclaire — « quand il a eclaire ce qui est autour de lui ». Le champ lexical est celui de l'illumination temporaire : le feu eclaire tout autour, puis Dieu emporte la lumiere. La forme IV dit que le feu a PRODUIT la lumiere — c'est une action causative. Le complement ma hawlahu (ce qui est autour de lui) montre que la lumiere a atteint tout l'environnement du personnage. Ce moment d'eclairage est le sommet de la parabole — apres cet instant de clarte, tout bascule dans les tenebres. L'accompli dit que c'est un fait revolu — la lumiere a brille mais ne brille plus.",
        axe2_voisins: "L'eclairage (ada'at) du v17 precede immediatement la perte de lumiere (dhahaba llahu bi-nurihim). Le contraste est brutal : l'eclairage est au v17a, les tenebres sont au v17b. Le verset 18 (sourds, muets, aveugles) decrit l'etat apres l'extinction. Le verset 19 reprend l'image de la lumiere avec la foudre (barq) qui eclaire par intermittence. Les deux paraboles utilisent un moment d'eclairage suivi d'un retour aux tenebres.",
        axe3_sourate: "La sourate 2 utilise l'eclairage comme metaphore de la guidance. Le moment ou le feu eclaire represente le moment ou les hypocrites ont recu la guidance — ils ont vu, ils ont compris. Mais leur insincerité a cause la perte de cette lumiere. La sourate oppose ceux qui gardent la lumiere (les croyants) et ceux qui la perdent (les hypocrites). L'eclairage temporaire est l'image de la guidance rejetee.",
        axe4_coherence: "Le Coran utilise la racine d-w-' dans plusieurs contextes de lumiere — le verbe ada'a signifie eclairer, produire de la lumiere. La forme IV est la forme standard pour la production de lumiere. La coherence est directe avec l'usage coranique de cette racine pour l'eclairage physique et metaphorique.",
        axe5_frequence: "L'eclairage represente le moment de comprehension dans la mission humaine — quand la verite est vue clairement. Les hypocrites ont eu ce moment de clarte mais ne l'ont pas preserve. La mission de justice exige de maintenir la lumiere de la comprehension — un moment de clarte ne suffit pas s'il n'est pas suivi d'un engagement sincere. La parabole montre que la lumiere est un don qui peut etre retire si celui qui la recoit n'est pas sincere."
      }
    }
  }},
  { verse_id: 24, word_key: 'dhb', position: 10, analysis_axes: {
    sense_chosen: "a emporté",
    concept_chosen: "Départ/Mouvement",
    concepts: {
      "Départ/Mouvement": {
        senses: ["aller", "partir", "passer", "disparaître"],
        status: "retenu",
        proof_ctx: "Le sens retenu est « Depart/Mouvement ». Le verbe dhahaba est a l'accompli 3MS — « il est parti ». Mais avec la preposition bi- (dhahaba bi = est parti avec), le sens devient « a emporte ». Le sujet est Allah — c'est Dieu qui a emporte leur lumiere. Le complement bi-nurihim (avec leur lumiere) indique que la lumiere a ete retiree, emportee loin d'eux. La racine dh-h-b signifie aller, partir, et avec bi- elle signifie emporter, faire disparaitre. Distinction avec « Or/Richesse » : il ne s'agit pas d'or mais de mouvement. Distinction avec « Doctrine/Voie » : il ne s'agit pas d'une ecole de pensee mais d'un acte de retrait.",
        axe1_verset: "Le verbe dhahaba avec bi- marque le tournant de la parabole — « Dieu a emporte leur lumiere ». Le champ lexical est celui du retrait divin : apres l'eclairage, Dieu retire la lumiere. La construction dhahaba bi (partir avec = emporter) est idiomatique en arabe — elle signifie retirer, faire disparaitre. Le sujet est Allah, ce qui fait du retrait de la lumiere un acte divin volontaire. Le complement bi-nurihim (avec leur lumiere) utilise la racine n-w-r (lumiere), creant un lien avec le feu (nar, meme racine) allume plus tot. L'accompli dit que le retrait est definitif — la lumiere ne reviendra pas.",
        axe2_voisins: "Le retrait de la lumiere (v17) precede l'etat de tenebres (v17b) et le verdict (v18 : sourds, muets, aveugles). La sequence est : allumage, eclairage, retrait de la lumiere, tenebres, aveuglement. Le verset 19 reprend l'idee avec la foudre qui eclaire par intermittence — meme la lumiere qui reste est instable. Le retrait de la lumiere par Dieu est le moment decisif de la parabole — c'est la reponse divine a l'insincerité des hypocrites.",
        axe3_sourate: "La sourate 2 presente Dieu comme celui qui donne et retire la guidance. Le v257 dit que Dieu sort les croyants des tenebres vers la lumiere. Le v17 montre le mouvement inverse : Dieu emporte la lumiere des hypocrites. La sourate etablit que la guidance est un don divin qui peut etre retire si la sincerite fait defaut. Le retrait de la lumiere est la consequence de l'hypocrisie — pas une punition arbitraire mais une consequence logique de leur comportement.",
        axe4_coherence: "Le Coran utilise dhahaba bi dans d'autres contextes de retrait — sourate 67:19 (Dieu emporte). La construction dhahaba + bi est un idiome coranique pour le retrait definitif. Le sujet divin (Allah) confirme que le retrait de la lumiere est un acte de puissance divine. La coherence est forte avec l'usage coranique de cette construction.",
        axe5_frequence: "Le retrait de la lumiere illustre la consequence de l'insincerité dans la mission humaine. La guidance est donnee a tous mais n'est preservee que par ceux qui la meritent par leur sincerite. L'emport de la lumiere par Dieu montre que la mission de justice exige la sincerite — sans elle, meme la comprehension deja acquise peut etre retiree. La parabole avertit : la lumiere est un pret, pas un acquis definitif."
      },
      "Or/Richesse": {
        senses: ["or"],
        status: "nul",
        proof_ctx: "Le verbe dhahaba est utilise ici comme verbe de mouvement (partir avec = emporter), pas comme nom (or). Le contexte est le retrait de la lumiere, pas l'or. Hors sujet."
      },
      "Doctrine/Voie": {
        senses: ["école de pensée"],
        status: "nul",
        proof_ctx: "Il ne s'agit pas d'une doctrine ou ecole de pensee. Le verbe est utilise dans son sens premier de mouvement/depart. Hors sujet."
      }
    }
  }},
  { verse_id: 24, word_key: 'alh', position: 11, analysis_axes: {
    sense_chosen: "Dieu",
    concept_chosen: "Divinité",
    concepts: {
      "Divinité": {
        senses: ["Dieu"],
        status: "retenu",
        proof_ctx: "Le sens retenu est « Divinite ». Le mot Allah est le nom propre de Dieu — le sujet du verbe dhahaba (a emporte). C'est Dieu qui a emporte leur lumiere. Le nom est au cas sujet (nominatif) car il est le sujet grammatical de la phrase. La racine '-l-h designe la divinite — Allah est le nom propre du Dieu unique.",
        axe1_verset: "Le mot Allah est le sujet du verbe dhahaba — « Dieu a emporte leur lumiere ». Le champ lexical est celui de l'intervention divine directe : c'est Dieu en personne qui retire la lumiere aux hypocrites. Le nom Allah marque le tournant de la parabole — le personnage avait allume un feu, le feu avait eclaire, mais c'est Dieu qui decide de retirer la lumiere. L'intervention divine est le point central de la parabole — sans elle, le feu continuerait d'eclairer. Le fait que ce soit Allah le sujet montre que le retrait de la lumiere n'est pas un accident mais une decision divine.",
        axe2_voisins: "Le verset 17 presente Dieu comme l'agent du retrait de la lumiere. Le verset 18 ne mentionne pas Dieu — le verdict (sourds, muets, aveugles) decoule de l'action divine du v17. Le verset 19 mentionne les tenebres, le tonnerre et la foudre comme elements naturels — l'action divine est implicite. Dans la premiere parabole (v17), Dieu agit directement. Dans la seconde (v19-20), Dieu agit a travers les elements naturels.",
        axe3_sourate: "La sourate 2 presente Allah comme le maitre de la guidance et de l'egarement. Le v6 dit que les incroyants ne croiront pas — c'est un fait. Le v7 dit que Dieu a scelle leurs coeurs. Le v17 dit que Dieu a emporte la lumiere des hypocrites. La sourate etablit que Dieu est l'agent actif de la guidance et de son retrait. Allah n'est pas un spectateur mais l'acteur principal qui donne et retire la lumiere selon la sincerite des gens.",
        axe4_coherence: "Le Coran presente systematiquement Allah comme celui qui guide et egare — sourate 14:4 (Dieu egare qui Il veut et guide qui Il veut), sourate 2:26 (Dieu egare par les paraboles beaucoup de gens et guide beaucoup de gens). L'action divine de retrait de la lumiere est coherente avec la theologie coranique de la guidance conditionnelle. La coherence est parfaite.",
        axe5_frequence: "Dieu comme agent de la guidance est au coeur de la mission humaine — la mission n'est possible que par la lumiere divine. Quand Dieu retire la lumiere, la mission devient impossible. Le verset montre que la sincerite envers Dieu est la condition de la guidance. La mission de justice depend de la relation sincere avec Dieu — sans cette sincerite, meme l'effort d'allumer un feu (chercher la lumiere) est vain."
      }
    }
  }},
  { verse_id: 24, word_key: 'nwr', position: 12, analysis_axes: {
    sense_chosen: "leur lumière",
    concept_chosen: "Lumière/Clarté",
    concepts: {
      "Lumière/Clarté": {
        senses: ["lumière", "éclairer", "feu", "guider par la lumière"],
        status: "retenu",
        proof_ctx: "Le sens retenu est « Lumiere/Clarte ». Le mot nurihim est un nom masculin suivi du pronom 3MP (him) — « leur lumiere ». Le mot nur designe la lumiere en tant que clarte — c'est la lumiere produite par le feu (nar) allume plus tot. Le pronom him (leur) rattache la lumiere aux hypocrites — c'etait LEUR lumiere, celle qu'ils avaient obtenue par l'effort d'allumer le feu. La preposition bi- (dhahaba bi-nurihim = a emporte leur lumiere) fait de la lumiere l'objet du retrait divin.",
        axe1_verset: "Le mot nurihim est l'objet de l'emport divin — « Dieu a emporte LEUR lumiere ». Le champ lexical est celui de la perte de la clarte : la lumiere qui etait la leur a ete retiree. Le pronom him (leur) est crucial — la lumiere etait en leur possession, elle leur appartenait temporairement. Le passage de nar (feu, pos 5) a nur (lumiere, pos 12) dans le meme verset montre la transformation : le feu (source) produit la lumiere (effet), et c'est la lumiere qui est emportee, pas le feu. Le feu peut rester, mais sans lumiere il ne sert a rien. La perte de la lumiere est la perte de la capacite a voir et a comprendre.",
        axe2_voisins: "La perte de la lumiere (v17) conduit directement aux tenebres (zulumat, v17b). Le verset 18 decrit l'etat sans lumiere : sourds, muets, aveugles. La lumiere emportee au v17 est la cause des incapacites decrites au v18. Le verset 19 mentionne des tenebres (zulumat) dans la seconde parabole — la meme consequence. La perte de la lumiere est le fil rouge qui relie les deux paraboles et le verdict.",
        axe3_sourate: "La sourate 2 utilise la lumiere (nur) comme metaphore de la guidance — v257 (Dieu sort les croyants des tenebres vers la lumiere). Le v17 montre le mouvement inverse : la lumiere est retiree aux hypocrites. La sourate oppose lumiere (guidance) et tenebres (egarement). La lumiere est un don divin conditionnel — elle est donnee a ceux qui sont sinceres et retiree a ceux qui ne le sont pas.",
        axe4_coherence: "Le Coran utilise nur (lumiere) dans de nombreux contextes — sourate 24:35 (la parabole de la lumiere), sourate 5:15 (un livre et une lumiere claire). La lumiere est systematiquement associee a la guidance et a la clarte. La coherence est parfaite avec l'usage coranique de nur comme symbole de la guidance divine.",
        axe5_frequence: "La lumiere est la metaphore centrale de la guidance dans la mission humaine. Perdre la lumiere c'est perdre la capacite de voir le bien et le mal, le juste et l'injuste. La mission de justice est impossible sans la lumiere de la comprehension. Le verset montre que la lumiere est un don precieux que l'insincerité fait perdre — la mission humaine exige de proteger cette lumiere par la sincerite."
      }
    }
  }},
  { verse_id: 24, word_key: 'trk', position: 13, analysis_axes: {
    sense_chosen: "les a laissés",
    concept_chosen: "Abandon/Délaissement",
    concepts: {
      "Abandon/Délaissement": {
        senses: ["laisser", "abandonner"],
        status: "retenu",
        proof_ctx: "Le sens retenu est « Abandon/Delaissement ». Le verbe tarakahum est a l'accompli 3MS avec le pronom suffixe hum (les) — « Il les a laisses ». Le sujet implicite est Allah (mentionne juste avant). Le verbe taraka signifie laisser, abandonner — ici Dieu les a laisses dans les tenebres apres avoir emporte leur lumiere. L'accompli dit que l'abandon est un fait accompli. Le complement fi zulumat (dans des tenebres) precise l'etat dans lequel ils sont laisses. Le pronom hum (les) renvoie aux hypocrites.",
        axe1_verset: "Le verbe tarakahum poursuit l'action divine — apres avoir emporte la lumiere, Dieu « les a laisses dans des tenebres ». Le champ lexical est celui de l'abandon divin : Dieu retire la lumiere ET les laisse dans les tenebres. Le verbe taraka est fort — laisser, abandonner, ne plus s'occuper de. Le wa (et) qui le precede le coordonne avec dhahaba (a emporte) — les deux actions sont liees : emporter la lumiere ET abandonner dans les tenebres. Le complement fi zulumat (dans des tenebres) avec le pluriel (zulumat = des tenebres multiples) indique que l'obscurite est totale et multiple. La proposition la yubsirun (ils ne voient pas) qui suit est la consequence de cet abandon.",
        axe2_voisins: "L'abandon dans les tenebres (v17) precede le verdict (v18 : sourds, muets, aveugles). L'abandon divin est la cause de leur etat — c'est parce que Dieu les a abandonnes dans les tenebres qu'ils sont devenus sourds, muets et aveugles. Le verset 19 reprend l'image des tenebres dans la seconde parabole. L'abandon est le point de non-retour — apres le retrait de la lumiere, il n'y a plus de secours.",
        axe3_sourate: "La sourate 2 presente l'abandon divin comme consequence de l'hypocrisie. Le v7 dit que Dieu a scelle les coeurs des incroyants. Le v17 dit que Dieu a laisse les hypocrites dans les tenebres. La sourate montre que l'abandon divin n'est pas arbitraire — il est la consequence directe du comportement des gens. Les hypocrites ont rejete la guidance, Dieu les a laisses dans leur etat. L'abandon est une reponse, pas une initiative.",
        axe4_coherence: "Le Coran utilise le verbe taraka dans plusieurs contextes d'abandon — sourate 9:39 (si vous ne partez pas, Il vous chatiera et vous laissera). Le verbe taraka avec le complement fi (dans) designe l'abandon dans un etat precis. La coherence est directe avec l'usage coranique du verbe comme acte divin consequent a la desobeissance.",
        axe5_frequence: "L'abandon divin est la pire consequence de la trahison de la mission humaine. Etre laisse dans les tenebres c'est perdre toute capacite de voir, comprendre et agir justement. La mission de justice devient impossible quand Dieu se retire. Le verset montre que la sincerite est la condition du soutien divin — sans sincerite, l'etre humain est laisse a lui-meme dans l'obscurite totale."
      }
    }
  }},
  { verse_id: 24, word_key: 'zlm', position: 15, analysis_axes: {
    sense_chosen: "ténèbres",
    concept_chosen: "Obscurité/Ténèbres",
    concepts: {
      "Obscurité/Ténèbres": {
        senses: ["ténèbres", "obscurité"],
        status: "retenu",
        proof_ctx: "Le sens retenu est « Obscurite/Tenebres ». Le mot zulumat est un nom feminin pluriel au cas indirect (majrur) apres fi — « dans des tenebres ». Le pluriel indique des tenebres multiples, des couches d'obscurite. Le mot est indefini (tanwin) ce qui ajoute a l'indetermination — des tenebres dont on ne connait pas la fin. La racine z-l-m couvre a la fois l'obscurite physique et l'injustice. Ici le contexte est l'obscurite physique (parabole du feu eteint) qui est metaphore de l'obscurite spirituelle. Distinction avec « Injustice/Oppression » : le contexte de la parabole est l'obscurite, pas l'injustice directe.",
        axe1_verset: "Le mot zulumat est le complement de taraka (les a laisses) avec fi — « les a laisses dans des tenebres ». Le champ lexical est celui de l'obscurite totale apres la perte de la lumiere. Le pluriel zulumat (pas le singulier zulma) indique des tenebres multiples — l'obscurite est epaisse, multicouche. L'indefini (sans al-) ajoute l'immensité — des tenebres sans limites connues. Les tenebres sont l'oppose direct de la lumiere emportee (nur) et de l'eclairage (ada'at). La proposition la yubsirun (ils ne voient pas) qui suit est la consequence naturelle des tenebres. La parabole se termine dans l'obscurite totale.",
        axe2_voisins: "Les tenebres du v17 precedent le verdict du v18 (sourds, muets, aveugles). Les tenebres ne touchent pas seulement la vue — elles rendent sourds et muets aussi (v18). Le verset 19 reprend le mot zulumat dans la seconde parabole — les tenebres sont le fil rouge des deux paraboles. Les tenebres sont l'etat permanent des hypocrites apres le retrait de la lumiere divine.",
        axe3_sourate: "La sourate 2 oppose systematiquement lumiere et tenebres — v257 (Dieu sort les croyants des tenebres vers la lumiere) utilise le meme mot zulumat. Le v17 montre le mouvement inverse : les hypocrites passent de la lumiere aux tenebres. La sourate etablit que les tenebres sont l'etat de ceux qui rejettent la guidance. Les tenebres ne sont pas imposees arbitrairement — elles sont la consequence du rejet de la lumiere.",
        axe4_coherence: "Le Coran utilise zulumat (pluriel) dans de nombreux contextes — sourate 2:257, 6:1, 6:63. Le pluriel zulumat est systematiquement utilise pour les tenebres de l'egarement, pas pour l'obscurite physique simple. La coherence est parfaite — les tenebres multiples sont l'image standard de l'egarement dans le Coran.",
        axe5_frequence: "Les tenebres sont l'antithese de la mission humaine de justice et de comprehension. La mission du khalifa est d'agir dans la lumiere — de voir clairement, de comprendre et de juger justement. Les tenebres rendent cette mission impossible. Le verset montre que rejeter la guidance c'est choisir les tenebres — et dans les tenebres, aucune mission ne peut etre accomplie."
      },
      "Injustice/Oppression": {
        senses: ["opprimer", "être injuste"],
        status: "peu_probable",
        proof_ctx: "La racine z-l-m couvre aussi l'injustice, mais dans ce verset le contexte est la parabole du feu — l'obscurite physique qui est metaphore de l'egarement. Le mot zulumat au pluriel avec fi (dans des tenebres) oriente vers l'obscurite, pas vers l'injustice directe. L'injustice est un sens secondaire possible mais pas le sens premier ici.",
        axe1_verset: "Le contexte est une parabole sur la lumiere et les tenebres — le feu, l'eclairage, le retrait de la lumiere. Le mot zulumat s'inscrit dans ce champ lexical de l'obscurite, pas de l'injustice.",
        axe2_voisins: "Les versets environnants parlent de feu, lumiere, foudre — le registre est physique et metaphorique, pas juridique ou moral.",
        axe3_sourate: "La sourate utilise zulumat au v257 dans le sens explicite de tenebres opposees a la lumiere. Le sens est le meme au v17.",
        axe4_coherence: "Le Coran distingue les emplois de zulumat (tenebres) et zulm (injustice). Les deux sont de la meme racine mais dans des contextes differents.",
        axe5_frequence: "L'injustice et les tenebres sont liees conceptuellement — l'injustice est une forme d'obscurite morale. Mais dans ce verset, le sens premier est l'obscurite physique comme metaphore."
      }
    }
  }},
  { verse_id: 24, word_key: 'bsr', position: 17, analysis_axes: {
    sense_chosen: "ils ne voient pas",
    concept_chosen: "Vision/Perception",
    concepts: {
      "Vision/Perception": {
        senses: ["voir", "regarder", "vue", "clairvoyance"],
        status: "retenu",
        proof_ctx: "Le sens retenu est « Vision/Perception ». Le verbe yubsirun est a l'inaccompli 3MP forme IV precede de la negation la — « ils ne voient pas ». La forme IV (absara) ajoute la causalite : voir clairement, percevoir avec clarte. L'inaccompli nie dit que leur incapacite a voir est permanente et continue. La negation la est generale — ils ne voient plus rien du tout. La racine b-s-r couvre la vision physique et la perception — ici les deux sont concernees car les tenebres empechent de voir (physiquement dans la parabole, spirituellement dans la metaphore).",
        axe1_verset: "Le verbe yubsirun cloture le verset par le diagnostic final — « ils ne voient pas ». Le champ lexical est celui de la cecite qui resulte des tenebres : apres le retrait de la lumiere et l'abandon dans les tenebres, la vision est impossible. La forme IV (ubsira) indique une vision claire et complete — c'est cette vision claire qui est niee. L'inaccompli dit que l'etat est continu — ils ne voient pas et ne verront pas. La proposition la yubsirun est la consequence logique de toute la parabole : allumage, eclairage, retrait, tenebres, cecite. La parabole aboutit a la privation totale de vision.",
        axe2_voisins: "La privation de vision (v17) est reprise et amplifiee au v18 : sourds, muets, aveugles ('umyun). Le v17 dit « ils ne voient pas » (la yubsirun, verbe), le v18 dit « aveugles » ('umyun, nom) — la privation de vision passe du fait (ne pas voir) a l'etat permanent (aveugles). Le v20 reprend la vision avec yakadu l-barqu yakhtifu absarahum (la foudre manque de leur arracher la vue) — la meme racine b-s-r. La vision est le sens le plus menace dans les deux paraboles.",
        axe3_sourate: "La sourate 2 utilise la vision comme metaphore de la comprehension. Le v7 dit que Dieu a mis un voile sur leurs yeux (absarihim, meme racine). Le v17 dit qu'ils ne voient pas. Le v18 dit qu'ils sont aveugles. La sourate accumule les images de cecite pour decrire l'etat des hypocrites. La privation de vision est la privation de la capacite a comprendre la guidance.",
        axe4_coherence: "Le Coran utilise la racine b-s-r dans de nombreux contextes de vision et de perception — sourate 2:7, 2:17, 2:20, 6:103. La forme IV (absara/yubsiru) est la forme standard pour la vision claire. La negation la yubsirun est utilisee pour la cecite spirituelle dans plusieurs sourates. La coherence est parfaite.",
        axe5_frequence: "La vision est l'outil fondamental de la mission humaine — voir clairement pour agir justement. Perdre la vision c'est perdre la capacite de discerner le bien du mal. La mission de justice exige la clairvoyance (basira) — la vision interieure qui permet de comprendre la realite. Le verset montre que les hypocrites ont perdu cette clairvoyance a cause de leur insincerité — ils ne peuvent plus voir ni agir justement."
      }
    }
  }},

  // === V18 (verse_id=25) ===
  { verse_id: 25, word_key: 'smm', position: 1, analysis_axes: {
    sense_chosen: "sourds",
    concept_chosen: "Surdité",
    concepts: {
      "Surdité": {
        senses: ["être sourd", "rendre sourd", "sourd"],
        status: "retenu",
        proof_ctx: "Le sens retenu est « Surdite ». Le mot summun est un nom masculin pluriel indefini au cas sujet (nominatif) — « sourds ». C'est un attribut (khabar) qui qualifie les hypocrites : ils sont sourds. Le mot est au nominatif car il est en position predicative dans une phrase nominale dont le sujet est implicite (hum = ils, les hypocrites). Le pluriel renforce le diagnostic — ils sont tous sourds, sans exception. L'indefini (tanwin) ajoute l'intensite — sourds d'une surdite complete. La racine s-m-m signifie etre sourd, ne pas entendre. Ici c'est la surdite aux avertissements et a la guidance.",
        axe1_verset: "Le mot summun ouvre le verset par le premier des trois diagnostics — « sourds, muets, aveugles ». Le champ lexical est celui des privations sensorielles : la surdite est la premiere incapacite listee. L'ordre (sourds, muets, aveugles) suit une logique : ils ne peuvent pas entendre (sourds), donc ne peuvent pas repondre (muets), et ne peuvent pas voir (aveugles). La surdite est la cause premiere — celui qui n'entend pas les avertissements ne peut ni repondre ni voir. Le nom est indefini, ce qui en fait un etat general et absolu. Les trois mots (summun bukmun 'umyun) forment une phrase nominale sans verbe — c'est un etat permanent, pas une action.",
        axe2_voisins: "Le verset 17 decrit la perte de la lumiere et la chute dans les tenebres. Le verset 18 donne le verdict : les tenebres ne touchent pas seulement la vue mais aussi l'ouie et la parole. La surdite (v18) explique pourquoi ils n'ont pas entendu les avertissements des v11 et v13 (« quand on leur dit... »). On leur a parle, mais ils sont sourds — la parole n'atteint pas leurs oreilles. Le verset 19 reprend avec l'image du tonnerre — ils mettent les doigts dans les oreilles, confirmant la surdite.",
        axe3_sourate: "La sourate 2 utilise la surdite comme metaphore du refus d'entendre la guidance. Le v171 compare les incroyants a du betail a qui on crie — sourds, muets, aveugles. Le diagnostic du v18 est repris presque mot pour mot. La sourate montre que la surdite spirituelle est la premiere etape de l'egarement — celui qui refuse d'entendre ne peut pas etre guide. La surdite est volontaire — ils ne sont pas nes sourds, ils se sont rendus sourds en refusant d'ecouter.",
        axe4_coherence: "Le Coran utilise la racine s-m-m dans plusieurs contextes de surdite spirituelle — sourate 2:18, 2:171, 8:22, 17:97. Le mot summun (sourds) est systematiquement associe a bukmun (muets) et 'umyun (aveugles) dans une triade de privation. La coherence est parfaite — cette triade est un diagnostic coranique recurrent pour ceux qui refusent la guidance.",
        axe5_frequence: "La surdite est la premiere privation qui empeche la mission humaine de justice. La mission exige d'ecouter — entendre les avertissements, les enseignements, les appels a la justice. Celui qui est sourd aux avertissements ne peut pas participer a la mission. Le verset montre que les hypocrites se sont prives eux-memes de la capacite d'entendre — et sans cette capacite, ils ne peuvent plus revenir a la guidance."
      }
    }
  }},
  { verse_id: 25, word_key: 'bkm', position: 2, analysis_axes: {
    sense_chosen: "muets",
    concept_chosen: "Mutisme",
    concepts: {
      "Mutisme": {
        senses: ["être muet", "muet de naissance", "incapable de s'exprimer"],
        status: "retenu",
        proof_ctx: "Le sens retenu est « Mutisme ». Le mot bukmun est un nom masculin pluriel indefini au cas sujet — « muets ». Meme structure que summun : attribut predicatif en phrase nominale. Le pluriel et l'indefini indiquent un mutisme total et general. La racine b-k-m signifie etre muet, ne pas pouvoir parler. Ici c'est le mutisme de celui qui ne peut plus exprimer la verite — l'incapacite de parler juste apres avoir refuse d'ecouter.",
        axe1_verset: "Le mot bukmun est le deuxieme diagnostic de la triade — « sourds, muets, aveugles ». Le champ lexical est celui de l'incapacite d'expression : apres la surdite vient le mutisme — celui qui n'entend pas ne peut pas non plus parler (car la parole repond a ce qu'on entend). L'ordre est logique : pas d'ecoute, donc pas de reponse. Le nom est indefini et au pluriel — le mutisme est complet et touche tous les hypocrites. Le mutisme est l'impossibilite de prononcer la verite — les hypocrites qui mentaient (v8-16) sont maintenant incapables de parler du tout. L'ironie est severe : eux qui parlaient tant pour mentir sont devenus muets.",
        axe2_voisins: "Le verset 17 decrit la perte de lumiere. Le verset 18 ajoute la perte de l'ouie (sourds) et de la parole (muets) a la perte de la vue. La triade sourds-muets-aveugles est le resultat complet de la chute dans les tenebres. Les versets 11-13 montraient des hypocrites qui PARLAIENT (qalu = ils disent) — au v18 ils ne peuvent plus parler. La parole mensongere des v11-13 aboutit au mutisme total du v18.",
        axe3_sourate: "La sourate 2 montre que la parole des hypocrites est une parole vide — ils disent croire (v8), ils disent reformer (v11), ils traitent les croyants de stupides (v13). Au v18 ils deviennent muets — la parole mensongere finit par se taire. La sourate oppose la parole vraie (qui guide) et la parole fausse (qui egare) et montre que la parole fausse aboutit au silence force. Le mutisme est la consequence ultime du mensonge.",
        axe4_coherence: "Le Coran associe systematiquement bukmun (muets) a summun (sourds) et 'umyun (aveugles) — sourate 2:18, 2:171, 6:39. La triade est un diagnostic recurrent. Le mutisme est toujours lie a l'incapacite de dire la verite, pas a un handicap physique. La coherence est parfaite avec l'usage coranique de cette triade.",
        axe5_frequence: "Le mutisme empeche la mission humaine de justice qui passe par la parole — dire la verite, temoigner, transmettre. Celui qui est muet ne peut plus remplir sa mission de transmission. Les hypocrites qui utilisaient la parole pour mentir perdent la capacite de parler — le mensonge aboutit au silence. La mission de justice exige la parole vraie — le mutisme est la sanction de la parole fausse."
      }
    }
  }},
  { verse_id: 25, word_key: 'emy', position: 3, analysis_axes: {
    sense_chosen: "aveugles",
    concept_chosen: "Cécité/Aveuglement",
    concepts: {
      "Cécité/Aveuglement": {
        senses: ["être aveugle", "rendre aveugle"],
        status: "retenu",
        proof_ctx: "Le sens retenu est « Cecite/Aveuglement ». Le mot 'umyun est un nom masculin pluriel indefini au cas sujet — « aveugles ». Meme structure que summun et bukmun : troisieme element de la triade. La racine '-m-y signifie etre aveugle, ne pas voir. Le mot complete la triade diagnostique : sourds (pas d'ecoute), muets (pas de parole), aveugles (pas de vision). L'aveuglement est le dernier diagnostic — il reprend et complete la yubsirun (ils ne voient pas) du v17.",
        axe1_verset: "Le mot 'umyun cloture la triade diagnostique — « sourds, muets, aveugles ». Le champ lexical est celui de la privation sensorielle totale : les trois sens principaux de communication sont coupes. L'aveuglement est le dernier de la liste car il reprend le la yubsirun du v17 — « ils ne voient pas » devient « aveugles ». Le passage du verbe (ne voient pas) au nom (aveugles) indique une aggravation : ne pas voir est un etat temporaire, etre aveugle est une identite. L'indefini et le pluriel indiquent un aveuglement total et collectif. La triade sourds-muets-aveugles coupe les hypocrites de toute communication avec le monde exterieur.",
        axe2_voisins: "Le verset 17 disait la yubsirun (ils ne voient pas) — le v18 dit 'umyun (aveugles), confirmant et aggravant le diagnostic. Le verset 19 montre que meme la foudre qui eclaire ne les aide pas — yakadu l-barqu yakhtifu absarahum (la foudre manque d'arracher leur vue). La cecite traverse les deux paraboles. Le verset 20 confirme que s'il faisait noir, ils resteraient immobiles — leur aveuglement les paralyse.",
        axe3_sourate: "La sourate 2 utilise la cecite comme diagnostic des hypocrites et des incroyants. Le v7 dit que Dieu a mis un voile sur leurs yeux. Le v17 dit qu'ils ne voient pas. Le v18 dit qu'ils sont aveugles. Le v171 reprend la triade sourds-muets-aveugles pour les incroyants. La sourate accumule les images de cecite pour montrer que l'egarement est une privation de vision — de la capacite de voir la verite.",
        axe4_coherence: "Le Coran utilise 'umyun dans la triade sourds-muets-aveugles dans plusieurs sourates — 2:18, 2:171, 6:39. Le mot est systematiquement utilise pour la cecite spirituelle, pas pour un handicap physique. La coherence est totale avec l'usage coranique recurrent de cette triade diagnostique.",
        axe5_frequence: "La cecite est la privation la plus grave pour la mission humaine — voir c'est comprendre, discerner, evaluer. La mission de justice exige la clairvoyance (basira). L'aveugle ne peut ni voir l'injustice ni la combattre. Le verset montre que la cecite des hypocrites est la consequence de leur rejet de la lumiere — ils ont refuse la guidance et sont devenus aveugles a la verite."
      }
    }
  }},
  { verse_id: 25, word_key: 'rje', position: 6, analysis_axes: {
    sense_chosen: "ils ne reviennent pas",
    concept_chosen: "Retour/Réversion",
    concepts: {
      "Retour/Réversion": {
        senses: ["retourner", "revenir"],
        status: "retenu",
        proof_ctx: "Le sens retenu est « Retour/Reversion ». Le verbe yarji'un est a l'inaccompli 3MP precede de la negation la — « ils ne reviennent pas ». Le verbe raja'a signifie retourner, revenir — ici revenir de l'egarement a la guidance. L'inaccompli nie dit que leur incapacite a revenir est permanente. La negation est renforcee par le contexte : sourds, muets, aveugles — dans cet etat, le retour est impossible. Distinction avec « Repetition » : il ne s'agit pas de repeter mais de revenir sur ses pas. Distinction avec « Pluie/Renouvellement » : aucun contexte de pluie ici.",
        axe1_verset: "Le verbe yarji'un cloture le verset par le verdict final — « ils ne reviennent pas ». Le champ lexical est celui de l'impossibilite du retour : apres avoir ete diagnostiques sourds, muets et aveugles, le retour a la guidance est declare impossible. Le fa (donc) qui precede hum (fa-hum = donc ils) introduit une consequence logique : PARCE QUE ils sont sourds, muets, aveugles, DONC ils ne peuvent pas revenir. L'inaccompli nie dit que cette impossibilite est permanente — il n'y a pas de retour possible. Le verbe yarji'un est au pluriel — aucun d'entre eux ne reviendra. Le verset se termine sur cette impossibilite — c'est le point final de la premiere parabole.",
        axe2_voisins: "Le verset 17 decrit la perte de la lumiere. Le verset 18 donne le diagnostic (sourds, muets, aveugles) et le verdict (ils ne reviennent pas). La sequence est complete : parabole (v17), diagnostic et verdict (v18). Le verset 19 ouvre une seconde parabole qui reprend les memes themes mais avec d'autres images. Le « ils ne reviennent pas » du v18 est le point de non-retour — la premiere parabole se conclut sur cette impossibilite avant que la seconde ne commence.",
        axe3_sourate: "La sourate 2 montre que le retour (tawba, ruju') est toujours possible sauf pour ceux qui ont perdu toute capacite de percevoir la guidance. Les versets 37 montrent Adam qui revient (fa-taba 'alayhi) apres sa faute — le retour est possible quand la sincerite est la. Les hypocrites du v18 ne reviennent pas car ils ont perdu les moyens du retour — sans ouie, sans parole, sans vue, comment revenir a la guidance ? La sourate oppose le retour possible (tawba) et le retour impossible (la yarji'un).",
        axe4_coherence: "Le Coran utilise le verbe raja'a dans plusieurs contextes de retour — sourate 2:28 (puis vers Lui vous retournerez), sourate 3:83 (vers Lui ils sont retournes). Le retour vers Dieu est un theme coranique central. Le v18 dit que les hypocrites ne reviennent pas — c'est une exception au principe general du retour. La coherence est directe : le Coran affirme que le retour est la norme et que l'impossibilite du retour est la pire consequence de l'egarement.",
        axe5_frequence: "Le retour est la capacite fondamentale de l'etre humain dans sa mission — la capacite de se corriger, de revenir sur ses erreurs, de reprendre le bon chemin. Perdre la capacite de revenir c'est perdre la possibilite de se corriger. La mission de justice exige la capacite de retour — celui qui ne peut pas revenir est condamne a perpetuer ses erreurs. Le verset montre que l'hypocrisie mene a un point de non-retour — la privation sensorielle totale empeche toute correction."
      },
      "Répétition": {
        senses: ["répéter"],
        status: "nul",
        proof_ctx: "Le contexte est le retour de l'egarement vers la guidance, pas la repetition d'une action. La negation la yarji'un dit qu'ils ne reviennent pas, pas qu'ils ne repetent pas. Hors sujet."
      },
      "Pluie/Renouvellement": {
        senses: ["pluie"],
        status: "nul",
        proof_ctx: "Aucun contexte de pluie ici. Le verset parle de surdite, mutisme et cecite. Hors sujet."
      }
    }
  }}
];

// Verse updates
const verseUpdates = [
  {
    verse_id: 24,
    translation_arab: "Leur exemple est comme l'exemple de celui qui a cherché à allumer un feu ; puis quand il a éclairé ce qui est autour de lui, Dieu a emporté leur lumière et les a laissés dans des ténèbres où ils ne voient pas.",
    full_translation: "Ils ressemblent à quelqu'un qui a allumé un feu ; puis quand le feu a illuminé tout à l'entour, Allah a fait disparaître leur lumière et les a laissés dans les ténèbres où ils ne voient plus rien.",
    translation_explanation: `§DEMARCHE§

La structure **mathaluhum ka-mathali lladhi** (leur exemple est comme l'exemple de celui qui) ouvre une parabole — une comparaison concrète. Le nom mathal au nominatif est le sujet, suivi du pronom 3MP hum (leur). Le ka (comme) introduit la comparaison avec un second mathal au génitif.

Le pronom relatif **alladhi** (celui qui) introduit le personnage de la parabole — un individu non identifié.

Le verbe **istawqada** est à l'accompli 3MS forme X (istaf'ala) — « a cherché à allumer ». La forme X ajoute la recherche active : il a fait l'effort d'allumer. L'accompli dit que l'action est achevée.

Le mot **naran** est un nom féminin indéfini à l'accusatif — « un feu ». L'indéfini dit que c'est un feu quelconque.

La particule temporelle **fa-lamma** (puis quand) introduit la séquence temporelle : après l'allumage vient l'éclairage.

Le verbe **ada'at** est à l'accompli 3FS forme IV — « elle a éclairé ». Le féminin renvoie au feu (nar, féminin). La forme IV ajoute la causalité : le feu a PRODUIT de la lumière.

Le complément **ma hawlahu** (ce qui est autour de lui) — ma (ce qui) + hawla (autour) + hu (de lui) — indique que la lumière a éclairé tout l'environnement.

Le verbe **dhahaba** est à l'accompli 3MS — « est parti ». Avec la préposition **bi-** (dhahaba bi = est parti avec), le sens devient « a emporté ». Le sujet est **Allah** (Dieu).

Le complément **bi-nurihim** (avec leur lumière) — bi (avec) + nur (lumière) + him (leur) — indique que c'est la lumière des hypocrites qui a été emportée.

Le verbe **tarakahum** est à l'accompli 3MS avec suffixe hum — « les a laissés ». Le sujet implicite est Dieu. Le wa (et) coordonne les deux actions divines : emporter la lumière ET laisser dans les ténèbres.

Le complément **fi zulumat** (dans des ténèbres) — fi (dans) + zulumat (ténèbres, pluriel indéfini) — indique des ténèbres multiples et sans limites.

Le verbe **la yubsirun** est à l'inaccompli 3MP forme IV nié — « ils ne voient pas ». La forme IV (absara) indique la vision claire. La négation la avec l'inaccompli dit que la cécité est permanente.

§JUSTIFICATION§

**leur exemple** — Le sens retenu est « Similitude/Comparaison ». Le mot « exemple » est choisi car il rend mathal — la parabole introductive. L'alternative « leur parabole » est écartée car c'est du registre littéraire. L'alternative « leur ressemblance » est écartée car mathal ici est une comparaison didactique, pas une identité.

**a cherché à allumer** — Le sens retenu est « Combustion/Feu ». L'expression « a cherché à allumer » rend la forme X istawqada — la recherche active du feu. L'alternative « a allumé » est plus simple mais perd la nuance de la forme X (effort de recherche). L'alternative « a tenté d'allumer » suggère un échec, alors que le feu a bien été allumé.

**un feu** — Le sens retenu est « Lumière/Clarté ». Le mot « feu » rend nar — la source de lumière physique. La racine n-w-r couvre feu et lumière.

**a éclairé** — Le sens retenu est « Lumière/Éclairage ». Le mot « a éclairé » rend ada'at — la production de lumière par le feu. L'alternative « a brillé » est écartée car le texte dit que le feu a éclairé ce qui est autour, pas simplement brillé.

**a emporté** — Le sens retenu est « Départ/Mouvement ». L'expression « a emporté » rend dhahaba bi — l'idiome arabe « partir avec = emporter ». L'alternative « a fait disparaître » (Hamidullah) est une interprétation du sens plutôt qu'une traduction de la structure. L'alternative « est parti avec » est trop littéral en français.

**Dieu** — Le sens retenu est « Divinité ». Le mot « Dieu » rend Allah — le nom propre du Dieu unique.

**leur lumière** — Le sens retenu est « Lumière/Clarté ». L'expression « leur lumière » rend nurihim — la lumière qui leur appartenait. Le pronom possessif « leur » est essentiel — c'est la lumière qu'ils avaient obtenue par leur effort.

**les a laissés** — Le sens retenu est « Abandon/Délaissement ». L'expression « les a laissés » rend tarakahum — l'abandon divin. L'alternative « les a abandonnés » est plus fort mais possible. « Laissés » est plus neutre et fidèle.

**ténèbres** — Le sens retenu est « Obscurité/Ténèbres ». Le mot « ténèbres » rend zulumat — le pluriel indique des couches multiples d'obscurité. L'alternative « obscurité » est au singulier et perd le pluriel arabe.

**ils ne voient pas** — Le sens retenu est « Vision/Perception ». L'expression rend la yubsirun — la négation de la vision claire (forme IV). L'alternative « ils ne voient plus rien » (Hamidullah) ajoute « plus » et « rien » qui ne sont pas dans le texte.

§CRITIQUE§

Hamidullah traduit « ils ressemblent à quelqu'un qui a allumé un feu ». La traduction étymologique donne « leur exemple est comme l'exemple de celui qui a cherché à allumer un feu ». La différence principale est dans mathaluhum ka-mathali : Hamidullah simplifie en « ils ressemblent à », ce qui perd la structure de la parabole (mathal = exemple/parabole, pas simple ressemblance). Hamidullah traduit aussi dhahaba llahu bi-nurihim par « Allah a fait disparaître leur lumière » — c'est une interprétation du sens de dhahaba bi (emporter) qui est correcte au fond mais perd le mouvement concret du verbe (partir avec = emporter). La traduction étymologique préserve la structure de la parabole et le mouvement du verbe.`,
    segments: [
      { fr: "leur exemple", pos: "nom", phon: "mathaluhum", arabic: "مَثَلُهُمْ", position: 1, word_key: "mvl", is_particle: false, sense_retenu: "exemple" },
      { fr: "comme l'exemple de", phon: "ka-mathali", arabic: "كَمَثَلِ", position: 2, word_key: null, is_particle: true },
      { fr: "celui qui", phon: "alladhi", arabic: "ٱلَّذِى", position: 3, word_key: null, is_particle: true },
      { fr: "a cherché à allumer", pos: "verbe", phon: "istawqada", arabic: "ٱسْتَوْقَدَ", position: 4, word_key: "wqd", is_particle: false, sense_retenu: "allumer" },
      { fr: "un feu", pos: "nom", phon: "naran", arabic: "نَارًا", position: 5, word_key: "nwr", is_particle: false, sense_retenu: "feu" },
      { fr: "puis quand", phon: "fa-lamma", arabic: "فَلَمَّآ", position: 6, word_key: null, is_particle: true },
      { fr: "a éclairé", pos: "verbe", phon: "ada'at", arabic: "أَضَآءَتْ", position: 7, word_key: "dwa", is_particle: false, sense_retenu: "éclairer" },
      { fr: "ce qui", phon: "ma", arabic: "مَا", position: 8, word_key: null, is_particle: true },
      { fr: "autour de lui", phon: "hawlahu", arabic: "حَوْلَهُ", position: 9, word_key: null, is_particle: true },
      { fr: "a emporté", pos: "verbe", phon: "dhahaba", arabic: "ذَهَبَ", position: 10, word_key: "dhb", is_particle: false, sense_retenu: "partir" },
      { fr: "Dieu", pos: "nom", phon: "allahu", arabic: "ٱللَّهُ", position: 11, word_key: "alh", is_particle: false, sense_retenu: "Dieu" },
      { fr: "leur lumière", pos: "nom", phon: "bi-nurihim", arabic: "بِنُورِهِمْ", position: 12, word_key: "nwr", is_particle: false, sense_retenu: "lumière" },
      { fr: "les a laissés", pos: "verbe", phon: "tarakahum", arabic: "وَتَرَكَهُمْ", position: 13, word_key: "trk", is_particle: false, sense_retenu: "laisser" },
      { fr: "dans", phon: "fi", arabic: "فِى", position: 14, word_key: null, is_particle: true },
      { fr: "ténèbres", pos: "nom", phon: "zulumat", arabic: "ظُلُمَٰتٍ", position: 15, word_key: "zlm", is_particle: false, sense_retenu: "ténèbres" },
      { fr: "ne...pas", phon: "la", arabic: "لَّا", position: 16, word_key: null, is_particle: true },
      { fr: "voient", pos: "verbe", phon: "yubsirun", arabic: "يُبْصِرُونَ", position: 17, word_key: "bsr", is_particle: false, sense_retenu: "voir" }
    ]
  },
  {
    verse_id: 25,
    translation_arab: "Sourds, muets, aveugles — donc ils ne reviennent pas.",
    full_translation: "Sourds, muets, aveugles, ils ne peuvent donc pas revenir (de leur égarement).",
    translation_explanation: `§DEMARCHE§

Le mot **summun** est un nom masculin pluriel indéfini au nominatif — « sourds ». C'est un attribut prédicatif dans une phrase nominale dont le sujet (les hypocrites) est implicite.

Le mot **bukmun** est un nom masculin pluriel indéfini au nominatif — « muets ». Même structure que summun — deuxième élément de la triade.

Le mot **'umyun** est un nom masculin pluriel indéfini au nominatif — « aveugles ». Troisième élément de la triade. Les trois noms forment une phrase nominale sans verbe — c'est un état permanent, pas une action temporaire.

La particule **fa** (donc) introduit la conséquence logique : PARCE QUE ils sont sourds, muets, aveugles, DONC ce qui suit.

Le pronom **hum** (eux/ils) est le sujet de la proposition suivante.

La négation **la** précède le verbe à l'inaccompli — négation permanente.

Le verbe **yarji'un** est à l'inaccompli 3MP — « ils reviennent ». Avec la négation la — « ils ne reviennent pas ». Le verbe raja'a signifie retourner, revenir. Ici revenir de l'égarement à la guidance. L'inaccompli nié dit que le non-retour est permanent.

§JUSTIFICATION§

**sourds** — Le sens retenu est « Surdité ». Le mot « sourds » rend summun — le diagnostic de l'incapacité d'entendre. L'alternative « durs d'oreille » est écartée car summun est un état total, pas partiel.

**muets** — Le sens retenu est « Mutisme ». Le mot « muets » rend bukmun — l'incapacité totale de parler. L'alternative « silencieux » est écartée car le silence est un choix, le mutisme est une incapacité.

**aveugles** — Le sens retenu est « Cécité/Aveuglement ». Le mot « aveugles » rend 'umyun — l'incapacité totale de voir. L'alternative « mal-voyants » est écartée car 'umyun est une cécité totale.

**ils ne reviennent pas** — Le sens retenu est « Retour/Réversion ». L'expression rend la yarji'un — la négation du retour. L'alternative « ils ne se repentent pas » est écartée car la repentance (tawba) est une autre racine. L'alternative « ils ne peuvent donc pas revenir » (Hamidullah) ajoute « peuvent » qui n'est pas dans le texte — le texte dit simplement « ils ne reviennent pas », pas « ils ne peuvent pas ».

§CRITIQUE§

Hamidullah traduit « sourds, muets, aveugles, ils ne peuvent donc pas revenir (de leur égarement) ». La traduction étymologique donne « sourds, muets, aveugles — donc ils ne reviennent pas ». La différence principale est dans « ils ne peuvent donc pas revenir » vs « donc ils ne reviennent pas ». Hamidullah ajoute le verbe modal « peuvent » et la précision entre parenthèses « de leur égarement ». Le texte arabe dit simplement la yarji'un (ils ne reviennent pas) sans verbe modal ni précision — la simplicité du diagnostic est importante. Le tiret dans la traduction étymologique marque la coupure entre le diagnostic (sourds, muets, aveugles) et la conséquence (donc ils ne reviennent pas).`,
    segments: [
      { fr: "sourds", pos: "nom", phon: "summun", arabic: "صُمٌّ", position: 1, word_key: "smm", is_particle: false, sense_retenu: "être sourd" },
      { fr: "muets", pos: "nom", phon: "bukmun", arabic: "بُكْمٌ", position: 2, word_key: "bkm", is_particle: false, sense_retenu: "être muet" },
      { fr: "aveugles", pos: "nom", phon: "'umyun", arabic: "عُمْىٌ", position: 3, word_key: "emy", is_particle: false, sense_retenu: "être aveugle" },
      { fr: "donc eux", phon: "fa-hum", arabic: "فَهُمْ", position: 4, word_key: null, is_particle: true },
      { fr: "ne...pas", phon: "la", arabic: "لَا", position: 5, word_key: null, is_particle: true },
      { fr: "reviennent", pos: "verbe", phon: "yarji'un", arabic: "يَرْجِعُونَ", position: 6, word_key: "rje", is_particle: false, sense_retenu: "retourner" }
    ]
  }
];

async function main() {
  const allKeys = [...new Set(vwaData.map(v => v.word_key))];
  const waMap = await getWaIds(allKeys);
  console.log('WA IDs:', JSON.stringify(waMap));

  // Insert VWA entries
  let okVwa = 0, failVwa = 0;
  for (const vwa of vwaData) {
    const { error } = await db.from('verse_word_analyses').insert({
      verse_id: vwa.verse_id,
      word_key: vwa.word_key,
      position: vwa.position,
      analysis_axes: vwa.analysis_axes,
      sense_chosen: vwa.analysis_axes.sense_chosen,
    });
    if (error) {
      console.error(`FAIL VWA ${vwa.word_key} v${vwa.verse_id} pos${vwa.position}:`, error.message);
      failVwa++;
    } else {
      console.log(`OK VWA ${vwa.word_key} v${vwa.verse_id}`);
      okVwa++;
    }
  }

  // Update verse_analyses
  let okV = 0, failV = 0;
  for (const vu of verseUpdates) {
    const { error } = await db.from('verse_analyses').update({
      translation_arab: vu.translation_arab,
      full_translation: vu.full_translation,
      translation_explanation: vu.translation_explanation,
      segments: vu.segments,
    }).eq('verse_id', vu.verse_id);
    if (error) {
      console.error(`FAIL verse ${vu.verse_id}:`, error.message);
      failV++;
    } else {
      console.log(`OK verse ${vu.verse_id}`);
      okV++;
    }
  }

  console.log(`\nDone: VWA ${okVwa}/${vwaData.length}, Verses ${okV}/${verseUpdates.length}`);
}

main().catch(console.error);
