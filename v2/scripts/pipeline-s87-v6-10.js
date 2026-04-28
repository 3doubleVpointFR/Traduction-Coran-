require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');
const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

async function upsertVWA(verse_id, word_key, sense_chosen, analysis_axes, position) {
  const { data: existing } = await sb.from('verse_word_analyses').select('id').eq('verse_id', verse_id).eq('word_key', word_key);
  if (existing && existing.length > 0) {
    const { error } = await sb.from('verse_word_analyses').update({ sense_chosen, analysis_axes, position }).eq('id', existing[0].id);
    if (error) console.log('  ERR update VWA ' + word_key + ': ' + error.message);
    else console.log('  ✓ VWA updated ' + word_key + ' (id=' + existing[0].id + ')');
  } else {
    const { data, error } = await sb.from('verse_word_analyses').insert({ verse_id, word_key, sense_chosen, analysis_axes, position }).select().single();
    if (error) console.log('  ERR insert VWA ' + word_key + ': ' + error.message);
    else console.log('  ✓ VWA created ' + word_key + ' (id=' + data.id + ')');
  }
}

async function upsertVA(verse_id, d) {
  const { data: existing } = await sb.from('verse_analyses').select('id').eq('verse_id', verse_id);
  if (existing && existing.length > 0) {
    const { error } = await sb.from('verse_analyses').update(d).eq('id', existing[0].id);
    if (error) console.log('  ERR update VA: ' + error.message);
    else console.log('  ✓ VA updated (id=' + existing[0].id + ')');
  } else {
    const { data, error } = await sb.from('verse_analyses').insert({ verse_id, ...d }).select().single();
    if (error) console.log('  ERR insert VA: ' + error.message);
    else console.log('  ✓ VA created (id=' + data.id + ')');
  }
}

(async () => {
  console.log('=== PIPELINE S87 v6-10 — ÉTAPES 3-4 ===\n');

  // ========== VERSET 6 (5954) ==========
  console.log('--- v6 (5954): sa-nuqri\'uka fa-la tansa ---');

  // qra(512) — Lecture/Récitation
  await upsertVWA(5954, 'qra', 'réciter', {
    sense_chosen: 'réciter',
    concept_chosen: 'Lecture/Récitation',
    concepts: {
      'Lecture/Récitation': {
        senses: ['lire', 'reciter', 'Coran', 'proclamer'],
        status: 'retenu',
        proof_ctx: "D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la racine q-r-' porte le sens premier de lire, reciter, rassembler par la parole. Le verbe sa-nuqri'uka est en forme IV (causatif) avec le futur sa- et le pronom ka : Nous te ferons reciter. La forme IV signifie faire faire l'action a quelqu'un — Dieu fait reciter le prophete. Il n'y a qu'un seul regroupement de sens pour cette racine dans ce contexte, donc pas de comparaison a faire.",
        axe1_verset: "Le verbe nuqri'uka est en forme IV (causatif) avec le futur sa- : Nous te ferons reciter. L'objet est le prophete (ka). Le champ lexical passe de la creation naturelle (v1-5) a la revelation : c'est le debut d'un nouveau theme. La recitation est l'acte par lequel le prophete recoit et transmet le message. Le futur sa- indique une promesse : ce n'est pas encore fait, c'est a venir.",
        axe2_voisins: "Les versets 1-5 parlaient de la creation et du cycle naturel. Le verset 6 ouvre un nouveau passage sur la revelation. Le verset 7 completera avec une exception (sauf ce que Dieu veut) et une affirmation de savoir divin. Le verset 8 promettra la facilitation. La recitation est le premier element de ce bloc revelationnel.",
        axe3_sourate: "La sourate 87 a deux parties : les actes de creation (v1-5) et la revelation-rappel (v6-19). Le verset 6 est la charniere entre les deux. La recitation est le moyen par lequel le prophete recoit la revelation — c'est l'acte fondateur de la mission prophetique dans cette sourate.",
        axe4_coherence: "Le Coran utilise la racine q-r-' pour designer l'acte de recitation revelationnelle. En 75:17-18, inna 'alayna jam'ahu wa qur'anahu, fa-idha qara'nahu fattabi' qur'anahu (c'est a Nous de le rassembler et de le faire reciter, et quand Nous le recitons, suis sa recitation). Le meme contexte de Dieu faisant reciter au prophete.",
        axe5_frequence: "La recitation est le moyen par lequel le khalifa recoit la connaissance divine. Sans recitation, pas de transmission du message. Le khalifa est celui qui recite et transmet — c'est le fondement de sa mission d'education et de guidance pour la communaute."
      }
    }
  }, 1);

  // nsy(511) — Oubli/Négligence
  await upsertVWA(5954, 'nsy', 'oublier', {
    sense_chosen: 'oublier',
    concept_chosen: 'Oubli/Négligence',
    concepts: {
      'Oubli/Négligence': {
        senses: ['oublier', 'negliger', 'omettre', 'laisser'],
        status: 'retenu',
        proof_ctx: "D'apres les sources etymologiques, la racine n-s-y porte le sens premier d'oublier, laisser de cote, negliger. Le verbe tansa est a l'inaccompli 2e personne avec la negation fa-la : et tu n'oublieras pas. C'est une promesse de preservation de la memoire — le prophete ne perdra pas ce qui lui est fait reciter. Il n'y a qu'un seul regroupement de sens pour cette racine.",
        axe1_verset: "Le verbe tansa est a l'inaccompli 2e personne avec la negation la et la conjonction fa qui le relie a nuqri'uka : Nous te ferons reciter et tu n'oublieras pas. Le champ lexical est celui de la memoire et de la preservation : reciter et ne pas oublier. La negation de l'oubli est la garantie de la preservation du message. L'inaccompli avec la negation la indique une permanence : tu n'oublieras jamais.",
        axe2_voisins: "Le verset 6 forme un ensemble avec le verset 7 (sauf ce que Dieu veut). La promesse de ne pas oublier est immediatement nuancee par une exception divine. Les versets 6-7 forment une unite : promesse de recitation et de memoire, avec la reserve de la volonte divine.",
        axe3_sourate: "La sourate passe de la creation a la revelation. L'oubli est l'ennemi de la revelation — si le prophete oublie, le message est perdu. La promesse de non-oubli est donc cruciale pour le theme de la sourate. C'est la garantie que la revelation sera preservee.",
        axe4_coherence: "Le Coran mentionne l'oubli dans d'autres contextes. En 20:115, wa laqad 'ahidna ila Adama min qablu fa-nasiya (Nous avions fait un pacte avec Adam, mais il a oublie). L'oubli est une faiblesse humaine que Dieu peut prevenir. La promesse du verset 6 est que cette faiblesse sera surmontee pour le prophete.",
        axe5_frequence: "La memoire est fondamentale pour le khalifa — c'est par la memoire qu'il garde les enseignements et les transmet. L'oubli est l'ennemi de la civilisation et de la justice. La promesse divine de preserver la memoire du prophete est le fondement de la transmission du savoir a toute l'humanite."
      }
    }
  }, 3);

  // VA verset 6
  await upsertVA(5954, {
    translation_arab: "Nous te ferons reciter et tu n'oublieras pas",
    full_translation: "Nous te ferons reciter (le Coran), de sorte que tu n'oublieras",
    segments: [
      { fr: "Nous te ferons reciter", pos: "V", phon: "sa-nuqri'uka", arabic: "سَنُقْرِئُكَ", position: 1, word_key: "qra", is_particle: false, sense_retenu: "réciter" },
      { fr: "et tu ne", pos: "NEG", phon: "fa-la", arabic: "فَلَا", position: 2, word_key: null, is_particle: true, sense_retenu: null },
      { fr: "oublieras pas", pos: "V", phon: "tansa", arabic: "تَنسَىٰٓ", position: 3, word_key: "nsy", is_particle: false, sense_retenu: "oublier" }
    ],
    translation_explanation: `§DEMARCHE§
Le verbe **sa-nuqri'uka** est compose de trois elements : sa- (particule du futur), nu- (prefixe de la 1ere personne du pluriel, « Nous »), qri'u (forme IV de q-r-', « faire reciter ») et -ka (pronom 2e personne, « te »). D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la forme IV de q-r-' signifie faire reciter, transmettre une recitation a quelqu'un. C'est Dieu qui parle a la premiere personne du pluriel et promet de faire reciter le prophete.

La particule **fa** relie la consequence : et donc. La negation **la** avec l'inaccompli **tansa** (tu oublies) donne : et tu n'oublieras pas. L'inaccompli avec la negation la indique une negation permanente — ce n'est pas « tu n'oublieras pas cette fois » mais « tu n'oublieras jamais ».

§JUSTIFICATION§
**reciter** — Le sens retenu est « reciter ». Ce mot est choisi car il traduit l'acte de prononcer a voix haute un texte recu, ce qui est exactement la fonction prophetique de transmission. L'alternative « lire » est ecartee car lire peut etre silencieux, tandis que la recitation est orale et publique. L'alternative « proclamer » est ecartee car trop solennel pour un contexte de transmission intime entre Dieu et le prophete.

**oublier** — Le sens retenu est « oublier ». Ce mot traduit directement la perte de memoire. L'alternative « negliger » est ecartee car la negligence est un acte volontaire, tandis que l'oubli est involontaire — et c'est precisement l'oubli involontaire que Dieu promet de prevenir.

§CRITIQUE§
**ajout invisible « (le Coran) »** — Les traductions courantes ajoutent « (le Coran) » entre parentheses apres « reciter ». Ce mot est absent du texte arabe. Le verset dit « Nous te ferons reciter » sans preciser l'objet de la recitation. L'ajout de « le Coran » est une interpretation exegetique — les commentateurs ont deduit que l'objet est le Coran, ce qui est probable mais non dit par le texte. Notre traduction respecte le silence du texte : Nous te ferons reciter, point. Le lecteur comprend par le contexte.`
  });

  // ========== VERSET 7 (5955) ==========
  console.log('\n--- v7 (5955): illa ma sha\'a Allah innahu ya\'lamu al-jahra wa-ma yakhfa ---');

  // shya(423) — Volonté
  await upsertVWA(5955, 'shya', 'vouloir', {
    sense_chosen: 'vouloir',
    concept_chosen: 'Volonté',
    concepts: {
      'Volonté': {
        senses: ['vouloir'],
        status: 'retenu',
        proof_ctx: "D'apres les sources etymologiques, la racine sh-y-' porte deux directions. La Volonte est retenue car sha'a est un verbe a l'accompli 3e personne : Il a voulu. Le sujet est Allah (Dieu). L'expression illa ma sha'a Allah (sauf ce que Dieu veut) est une formule de reserve divine — la promesse de non-oubli (v6) est conditionnee par la volonte de Dieu. Le sens de Chose/Existence (shay' = chose) est un nom, pas un verbe, et ne s'applique pas a la forme verbale sha'a.",
        axe1_verset: "Le verbe sha'a est a l'accompli 3e personne avec le sujet Allah. L'expression illa ma sha'a Allah est une exception : sauf ce que Dieu veut. Le champ lexical du verset contient la volonte divine, le savoir (ya'lamu), le manifeste (al-jahra) et le cache (yakhfa). La volonte est le premier element — c'est elle qui conditionne tout, y compris la memoire du prophete.",
        axe2_voisins: "Le verset 6 promettait : tu n'oublieras pas. Le verset 7 nuance immediatement : sauf ce que Dieu veut. Cette nuance est essentielle — elle rappelle que meme les promesses divines restent sous la souverainete de la volonte divine. Le verset 8 continuera avec une nouvelle promesse (facilitation). Les versets 6-8 forment un bloc de promesses encadrees par la volonte divine.",
        axe3_sourate: "La sourate 87 montre la maitrise divine sur la creation (v1-5) et sur la revelation (v6-10). La volonte divine est le fil conducteur — tout ce qui existe et tout ce qui est revele depend de cette volonte. Le verset 7 explicite ce qui est implicite dans toute la sourate : Dieu fait ce qu'Il veut.",
        axe4_coherence: "Le Coran utilise sha'a Allah comme formule de reserve dans plusieurs passages. En 18:69, sa-tajiduni in sha'a Allah sabiran (tu me trouveras patient si Dieu le veut). En 2:70, wa inna in sha'a Allah la-muhtadun (et si Dieu le veut, nous serons guides). La volonte divine est toujours la condition ultime.",
        axe5_frequence: "La volonte divine rappelle au khalifa que ses capacites et sa memoire sont des dons, pas des acquis. Le khalifa agit en reconnaissant que sa mission depend de la volonte de celui qui l'a cree et guide. C'est une humilite fondamentale qui previent l'arrogance."
      },
      'Chose/Existence': {
        senses: ['chose'],
        status: 'nul',
        proof_ctx: "Le sens 'chose' (shay') est un nom, pas un verbe. Dans ce verset, sha'a est une forme verbale (Il a voulu), pas le nom shay' (chose). La forme grammaticale elimine ce sens."
      }
    }
  }, 3);

  // elm(254) — Savoir/Connaissance (retenu pour CE verset)
  await upsertVWA(5955, 'elm', 'savoir', {
    sense_chosen: 'savoir',
    concept_chosen: 'Savoir/Connaissance',
    concepts: {
      'Savoir/Connaissance': {
        senses: ['savoir', 'connaitre', 'etre informe', 'certitude', 'savant', 'science', 'enseignement'],
        status: 'retenu',
        proof_ctx: "D'apres les sources etymologiques, la racine '-l-m porte trois directions majeures. Le Savoir/Connaissance est retenu car ya'lamu est un verbe a l'inaccompli 3e personne : Il sait. L'objet est al-jahra (le manifeste) et ma yakhfa (ce qui est cache). La structure est claire : le sujet sait quelque chose. La distinction avec Monde/Creation est nette : le monde ('alam) est un nom designant l'ensemble des creatures, tandis que savoir ('alima) est un verbe designant l'acte cognitif de connaitre. Ya'lamu est un verbe conjugue, pas un nom — il signifie « il sait », pas « il cree des mondes ». Le Savoir est un acte cognitif dirige vers un objet exterieur (ce qui est manifeste et ce qui est cache), tandis que le Monde est un ensemble de creatures. Le verbe ya'lamu + objet (al-jahra + ma yakhfa) impose le sens de savoir, pas de monde.",
        axe1_verset: "Le verbe ya'lamu est a l'inaccompli 3e personne avec deux objets : al-jahra (le manifeste) et ma yakhfa (ce qui est cache). Le champ lexical est celui de la connaissance : savoir, manifeste, cache. Le verset oppose ce qui est visible et ce qui est invisible, et affirme que Dieu sait les deux. L'inaccompli indique un savoir permanent et continu, pas ponctuel.",
        axe2_voisins: "Le verset 6 promettait la recitation, le verset 7a posait la volonte divine comme condition. Le verset 7b (innahu ya'lamu) explique pourquoi : parce qu'Il sait tout, le manifeste et le cache. Le savoir divin est la justification de la volonte : Il veut en connaissance de cause. Le verset 8 enchinera avec la facilitation, fondee elle aussi sur ce savoir.",
        axe3_sourate: "La sourate montre la maitrise divine sur la creation et la revelation. Le savoir est le fondement de cette maitrise : Dieu cree, determine et guide parce qu'Il sait. Le verset 7 explicite cette omniscience. Tout ce que la sourate decrit — creation, perfectionnement, determination, guidance, revelation — decoule de ce savoir total.",
        axe4_coherence: "Le Coran affirme le savoir divin dans de nombreux passages. En 2:33, a lam aqul lakum inni a'lamu ghayba as-samawati wa-l-ard (ne vous ai-je pas dit que je sais l'invisible des cieux et de la terre). En 49:18, inna-llaha ya'lamu ghayba as-samawati wa-l-ard (Dieu sait l'invisible des cieux et de la terre). Le pattern ya'lamu + objet est recurrent et toujours dans le sens de savoir.",
        axe5_frequence: "Le savoir total est le fondement de la confiance du khalifa en la guidance divine. Si Dieu sait ce qui est manifeste et ce qui est cache, alors sa guidance est complete et fiable. Le khalifa peut s'appuyer sur cette guidance en sachant qu'elle est fondee sur un savoir qui n'a pas de lacune."
      },
      'Monde/Création': {
        senses: ['monde', 'les mondes', 'ensemble des creatures', 'univers'],
        status: 'peu_probable',
        proof_ctx: "Le Monde/Creation designe l'ensemble des creatures ('alamin). Ce sens est peu probable car ya'lamu est un verbe conjugue a l'inaccompli (il sait/il connait), pas un nom ('alam = monde). La construction ya'lamu al-jahra wa-ma yakhfa (il sait le manifeste et ce qui est cache) impose un verbe de connaissance, pas un nom d'univers. Si on prenait le sens de 'monde', le verset dirait 'il monde le manifeste', ce qui est incoherent.",
        axe1_verset: "Le verbe ya'lamu est suivi de deux objets directs : al-jahra et ma yakhfa. Cette structure syntaxique (verbe + deux COD) est celle d'un verbe de perception ou de connaissance, pas d'un nom. Le champ lexical du verset est clairement cognitif : savoir, manifeste, cache. L'idee de monde ne s'integre pas dans ce champ lexical.",
        axe2_voisins: "Les versets voisins parlent de volonte (sha'a), de facilitation (nuyassiruka) et de rappel (dhakkir). Ce sont des actes cognitifs et volitionnels. Le monde comme ensemble de creatures est hors du champ semantique de ce passage sur la revelation et le savoir divin.",
        axe3_sourate: "Le theme de la sourate est la grandeur divine manifestee par ses actes et par la revelation. Le savoir est un attribut qui justifie ces actes (Il fait parce qu'Il sait). Le monde comme creation a deja ete traite dans les versets 1-5. Le verset 7 est dans le bloc de la revelation, pas de la creation.",
        axe4_coherence: "Le Coran utilise ya'lamu toujours comme verbe de connaissance quand il est suivi d'un objet. En 2:77, a wa la ya'lamuna anna-llaha ya'lamu ma yusirruna wa ma yu'linun (ne savent-ils pas que Dieu sait ce qu'ils cachent et ce qu'ils declarent). Le meme pattern ya'lamu + ce qui est cache/manifeste, toujours dans le sens de savoir.",
        axe5_frequence: "Le monde comme creation est une realite importante pour le khalifa, mais ce n'est pas le sujet de ce verset. Le verset affirme le savoir divin, pas l'etendue de la creation. L'information utile au khalifa ici est que Dieu sait tout, pas qu'il existe des mondes."
      },
      'Marque/Signe': {
        senses: ['marquer', 'signe', 'drapeau', 'repere'],
        status: 'nul',
        proof_ctx: "La marque/signe designe un repere physique ou visuel ('alama). Le verbe ya'lamu n'est pas un nom de signe — c'est un verbe conjugue. Ce sens ne s'applique pas a une forme verbale suivie de deux objets directs."
      }
    }
  }, 6);

  // jhr(553) — Manifestation/Publicité
  await upsertVWA(5955, 'jhr', 'manifester', {
    sense_chosen: 'manifester',
    concept_chosen: 'Manifestation/Publicité',
    concepts: {
      'Manifestation/Publicité': {
        senses: ['manifester', 'declarer', 'crier', 'elever la voix', 'public'],
        status: 'retenu',
        proof_ctx: "D'apres les sources etymologiques, la racine j-h-r porte le sens de rendre manifeste, declarer publiquement, elever la voix. Le mot al-jahra est un nom avec l'article al- : le manifeste, ce qui est public et visible. Il n'y a qu'un seul regroupement de sens. Al-jahra est l'oppose de ma yakhfa (ce qui est cache) — les deux forment une paire exhaustive couvrant toute realite.",
        axe1_verset: "Le mot al-jahra est un nom defini (avec al-) au cas accusatif, objet de ya'lamu (Il sait). Il forme une paire avec ma yakhfa (ce qui est cache). Le champ lexical est celui de la visibilite : manifeste vs cache. Al-jahra est ce qui est apparent, declare, public. Le verset affirme que Dieu sait les deux extremes — rien ne lui echappe.",
        axe2_voisins: "Le verset 7 est une parenthese explicative entre la promesse de recitation (v6) et la promesse de facilitation (v8). Al-jahra et ma yakhfa sont les deux poles de la realite que Dieu connait. Cette omniscience justifie la confiance que le prophete peut avoir dans les promesses divines.",
        axe3_sourate: "La sourate oppose le visible et l'invisible a plusieurs niveaux : les actes de creation visibles (v2-5) et le savoir invisible (v7), la recitation publique et la memoire interieure. Al-jahra represente le pole visible de cette dualite qui traverse toute la sourate.",
        axe4_coherence: "Le Coran utilise al-jahra et as-sirra comme paires dans plusieurs passages. En 13:10, sawa'un minkum man asarra al-qawla wa man jahara bihi (c'est egal pour Lui celui qui cache sa parole et celui qui la declare). La paire manifeste/cache est un topos coranique de l'omniscience divine.",
        axe5_frequence: "Le manifeste est ce que le khalifa montre au monde — ses actes, ses paroles, ses decisions. Savoir que Dieu connait le manifeste responsabilise le khalifa dans sa vie publique. Chaque acte public est connu et pris en compte."
      }
    }
  }, 7);

  // xfy(1174) — Dissimulation/Secret
  await upsertVWA(5955, 'xfy', 'être caché', {
    sense_chosen: 'être caché',
    concept_chosen: 'Dissimulation/Secret',
    concepts: {
      'Dissimulation/Secret': {
        senses: ['cacher', 'etre cache', 'etre secret', 'etre invisible'],
        status: 'retenu',
        proof_ctx: "D'apres les sources etymologiques, la racine kh-f-y porte le sens de cacher, dissimuler, etre invisible. Le verbe yakhfa est a l'inaccompli 3e personne : est cache/se dissimule. Il n'y a qu'un seul regroupement de sens. Yakhfa est l'oppose d'al-jahra — ce qui est cache vs ce qui est manifeste. Le verset affirme que Dieu sait ce qui est cache autant que ce qui est public.",
        axe1_verset: "Le verbe yakhfa est a l'inaccompli et fait partie de la proposition relative ma yakhfa (ce qui est cache). Il est coordonne a al-jahra par wa-ma : le manifeste et ce qui est cache. Le champ lexical est celui de la visibilite et de la connaissance. Le verset oppose deux poles et affirme que Dieu les connait tous les deux. La dissimulation est le pole invisible.",
        axe2_voisins: "Le verset 7 complete la promesse du verset 6 en justifiant la fiabilite divine : Il sait tout, meme ce qui est cache. Le verset 8 enchainera avec une facilitation — parce que Dieu sait ce qui est cache (les difficultes futures du prophete), Il peut faciliter. Le savoir du cache fonde la capacite de faciliter.",
        axe3_sourate: "La sourate traite de la revelation — ce qui passe du cache au manifeste. Dieu connait le cache (v7), Il fait reciter le prophete (v6), le prophete transmet (v9-10). La chaine va du cache au public. Yakhfa represente le point de depart de cette chaine : ce qui est encore dissimule et que Dieu seul connait.",
        axe4_coherence: "Le Coran affirme la connaissance divine du cache dans de nombreux passages. En 20:7, wa in tajhar bi-l-qawli fa-innahu ya'lamu as-sirra wa akhfa (meme si tu eleves la voix, Il connait le secret et plus cache encore). Le meme verbe yakhfa est utilise pour designer le plus profond du cache.",
        axe5_frequence: "Le cache est la dimension interieure du khalifa — ses intentions, ses pensees, ses motivations. Savoir que Dieu connait le cache responsabilise le khalifa dans sa vie interieure. La justice ne se limite pas aux actes publics, elle commence dans le secret des intentions."
      }
    }
  }, 9);

  // VA verset 7
  await upsertVA(5955, {
    translation_arab: "Sauf ce que Dieu veut — Il sait ce qui est manifeste et ce qui est dissimule",
    full_translation: "que ce qu'Allah veut. Car Il connait certes, le declare et le cache",
    segments: [
      { fr: "sauf", pos: "EXP", phon: "illa", arabic: "إِلَّا", position: 1, word_key: null, is_particle: true, sense_retenu: null },
      { fr: "ce que", pos: "REL", phon: "ma", arabic: "مَا", position: 2, word_key: null, is_particle: true, sense_retenu: null },
      { fr: "veut", pos: "V", phon: "sha'a", arabic: "شَآءَ", position: 3, word_key: "shya", is_particle: false, sense_retenu: "vouloir" },
      { fr: "Dieu", pos: "PN", phon: "Allah", arabic: "ٱللَّهُ", position: 4, word_key: null, is_particle: true, sense_retenu: null },
      { fr: "— Il", pos: "ACC", phon: "innahu", arabic: "إِنَّهُۥ", position: 5, word_key: null, is_particle: true, sense_retenu: null },
      { fr: "sait", pos: "V", phon: "ya'lamu", arabic: "يَعْلَمُ", position: 6, word_key: "elm", is_particle: false, sense_retenu: "savoir" },
      { fr: "le manifeste", pos: "N", phon: "al-jahra", arabic: "ٱلْجَهْرَ", position: 7, word_key: "jhr", is_particle: false, sense_retenu: "manifester" },
      { fr: "et ce qui", pos: "REL", phon: "wa-ma", arabic: "وَمَا", position: 8, word_key: null, is_particle: true, sense_retenu: null },
      { fr: "est dissimule", pos: "V", phon: "yakhfa", arabic: "يَخْفَىٰ", position: 9, word_key: "xfy", is_particle: false, sense_retenu: "être caché" }
    ],
    translation_explanation: `§DEMARCHE§
La particule **illa** (sauf, excepte) introduit une exception a la promesse du verset 6 (tu n'oublieras pas). L'exception est ma sha'a Allah — ce que Dieu veut. La structure est : tu n'oublieras pas, sauf ce que Dieu veut (te faire oublier).

Le verbe **sha'a** est a l'accompli 3e personne : Il a voulu. D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la racine sh-y-' designe la volonte, le vouloir.

La particule **innahu** (certes Il) ouvre une nouvelle phrase explicative. Le pronom hu (Il) renvoie a Dieu.

Le verbe **ya'lamu** est a l'inaccompli 3e personne : Il sait (de maniere permanente). D'apres les sources etymologiques, la racine '-l-m signifie savoir, connaitre. L'inaccompli indique un savoir continu et permanent.

Le mot **al-jahra** est un nom defini (avec al-) de la racine j-h-r : le manifeste, ce qui est public et declare. Le verbe **yakhfa** est a l'inaccompli de la racine kh-f-y : etre cache, dissimule. Les deux forment une paire exhaustive : tout ce qui existe est soit manifeste soit cache, et Dieu sait les deux.

§JUSTIFICATION§
**veut** — Le sens retenu est « vouloir ». Ce mot traduit directement sha'a. L'alternative « desire » est ecartee car le desir implique un manque, tandis que la volonte est un acte de decision souveraine.

**sait** — Le sens retenu est « savoir ». Ce mot est choisi car ya'lamu avec un objet direct signifie « savoir quelque chose ». L'alternative « connaitre » est ecartee car connaitre implique une familiarite relationnelle, tandis que savoir implique une certitude factuelle. Dieu sait les faits (le manifeste et le cache), Il ne les « connait » pas au sens relationnel.

**le manifeste** — Le sens retenu est « manifester ». Le mot « manifeste » (adjectif substantive) rend l'idee de ce qui est declare et public. L'alternative « le declare » est ecartee car c'est un participe passe qui suppose un acte de declaration, tandis que « le manifeste » est un etat.

**est dissimule** — Le sens retenu est « etre cache ». L'expression « est dissimule » rend la voix passive/reflexive du verbe yakhfa. L'alternative « est secret » est ecartee car le secret implique une intention de cacher, tandis que le cache peut etre naturellement invisible.

§CRITIQUE§
**Dieu vs Allah** — Les traductions courantes gardent « Allah » tel quel. Nous traduisons par « Dieu » car c'est le mot francais pour designer le createur unique. Garder « Allah » en francais donne l'impression que c'est un dieu different du Dieu des chretiens et des juifs, alors que le Coran affirme que c'est le meme.

**sait vs connait** — Hamidullah donne « connait ». La difference est subtile : « savoir » implique une certitude factuelle (Il sait ce qui est cache), « connaitre » implique une familiarite. Les deux sont possibles, mais « savoir » est plus precis pour un verbe suivi d'un objet factuel (le manifeste, le cache).`
  });

  // ========== VERSET 8 (5956) ==========
  console.log('\n--- v8 (5956): wa-nuyassiruka lil-yusra ---');

  // ysr(968) — Facilité/Aisance
  await upsertVWA(5956, 'ysr', 'faciliter', {
    sense_chosen: 'faciliter',
    concept_chosen: 'Facilité/Aisance',
    concepts: {
      'Facilité/Aisance': {
        senses: ['etre facile', 'faciliter', 'aisance', 'richesse'],
        status: 'retenu',
        proof_ctx: "D'apres les sources etymologiques, la racine y-s-r porte le sens premier de facilite, aisance, absence de difficulte. Le verbe nuyassiruka est en forme II (causatif intensif) a l'inaccompli avec wa (et) : et Nous te faciliterons. Le nom al-yusra est le feminin superlatif avec l'article al- et la preposition li (vers) : vers la facilite. Les deux mots du verset partagent la meme racine — un effet de paronomase (jeu de mots) qui renforce le sens de facilitation totale. Le Sens isole/Cote (cote gauche) est completement hors contexte.",
        axe1_verset: "Le verbe nuyassiruka est en forme II a l'inaccompli : Nous te faciliterons. Le complement lil-yusra (vers la facilite) partage la meme racine — c'est un renforcement etymologique : faciliter vers la facilite. Le champ lexical est entierement celui de l'aisance et de l'absence de difficulte. Les deux mots du verset forment un tout semantique uni par la meme racine, ce qui produit un effet de completude.",
        axe2_voisins: "Le verset 6 promettait la recitation, le verset 7 affirmait le savoir divin. Le verset 8 ajoute une promesse de facilitation. La progression est : Nous te ferons reciter (v6), Nous savons tout (v7), et Nous te faciliterons (v8). Chaque verset ajoute une couche de soutien divin au prophete. Le verset 9 enchinera avec l'ordre de rappeler — la facilitation prepare la mission de rappel.",
        axe3_sourate: "La sourate passe des actes de creation (v1-5) aux promesses au prophete (v6-8) puis a la mission de rappel (v9-10). La facilitation est la derniere promesse avant l'ordre d'agir. Dieu facilite puis ordonne — le prophete est soutenu avant d'etre envoye. C'est un theme de preparation avant la mission.",
        axe4_coherence: "Le Coran utilise la racine y-s-r dans le contexte de la facilitation divine. En 94:5-6, fa-inna ma'a al-'usri yusra, inna ma'a al-'usri yusra (avec la difficulte il y a la facilite). En 2:185, yurid Allahu bikum al-yusra wa la yurid bikum al-'usra (Dieu veut pour vous la facilite, pas la difficulte). La facilitation est une constante de la volonte divine.",
        axe5_frequence: "La facilitation est un soutien fondamental pour le khalifa. La mission de justice et de civilisation est difficile, mais Dieu promet de la faciliter. Le khalifa n'est pas abandonne face a sa mission — il est accompagne et soutenu. Cette promesse est le fondement de la confiance dans l'action."
      },
      'Sens isolé/Côté': {
        senses: ['cote gauche'],
        status: 'nul',
        proof_ctx: "Le cote gauche est un sens isole et specifique qui n'a aucun rapport avec le contexte de facilitation et de soutien divin."
      }
    }
  }, 1);

  // VA verset 8
  await upsertVA(5956, {
    translation_arab: "Et Nous te faciliterons vers la facilite",
    full_translation: "Nous te mettrons sur la voie la plus facile",
    segments: [
      { fr: "Et Nous te faciliterons", pos: "V", phon: "wa-nuyassiruka", arabic: "وَنُيَسِّرُكَ", position: 1, word_key: "ysr", is_particle: false, sense_retenu: "faciliter" },
      { fr: "vers la facilite", pos: "N", phon: "lil-yusra", arabic: "لِلْيُسْرَىٰ", position: 2, word_key: "ysr", is_particle: false, sense_retenu: "faciliter" }
    ],
    translation_explanation: `§DEMARCHE§
Le verbe **wa-nuyassiruka** est compose de wa (et), nu- (Nous), yassiru (forme II de y-s-r, faciliter) et -ka (te). D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la forme II de y-s-r signifie rendre facile, faciliter. L'inaccompli indique une action continue — Nous te faciliterons de maniere permanente.

Le complement **lil-yusra** est compose de li (vers, pour) et al-yusra (la facilite, nom feminin superlatif). Les deux mots partagent la meme racine y-s-r, ce qui cree un effet de paronomase : faciliter vers la facilite. Ce procede renforce le sens — c'est une facilitation totale et complete.

§JUSTIFICATION§
**faciliterons** — Le sens retenu est « faciliter ». Ce mot traduit directement la forme II de y-s-r. L'alternative « rendrons facile » est synonyme mais plus lourde. L'alternative « mettrons sur la voie » est une paraphrase qui ajoute « la voie » absent du texte.

**la facilite** — Le sens retenu est « facilite ». Ce mot rend al-yusra au plus pres. L'alternative « l'aisance » est ecartee car plus orientee vers le confort materiel. L'alternative « la voie facile » ajoute « voie » qui n'est pas dans le texte.

§CRITIQUE§
**la facilite vs la voie la plus facile** — Les traductions courantes donnent « la voie la plus facile » (Hamidullah). Cette traduction ajoute « la voie » qui est absent du texte arabe. Le texte dit lil-yusra (vers la facilite), pas li-t-tariqi al-yusra (vers la voie la plus facile). L'ajout de « voie » interprete la facilite comme un chemin, ce qui est une inference possible mais pas ce que le texte dit. De plus, al-yusra n'est pas un superlatif comparatif (« la plus facile » parmi d'autres voies) — c'est un nom abstrait (la facilite en soi). Notre traduction respecte la concision du texte : Nous te faciliterons vers la facilite, sans ajout.`
  });

  // ========== VERSET 9 (5957) ==========
  console.log('\n--- v9 (5957): fa-dhakkir in nafa\'at adh-dhikra ---');

  // ðkr(1051) — Mention/Rappel (pour v9)
  await upsertVWA(5957, 'ðkr', 'rappel (dhikr)', {
    sense_chosen: 'rappel (dhikr)',
    concept_chosen: 'Mention/Rappel',
    concepts: {
      'Mention/Rappel': {
        senses: ['mentionner', 'se souvenir', 'rappel (dhikr)'],
        status: 'retenu',
        proof_ctx: "D'apres les sources etymologiques, la racine dh-k-r porte deux directions. La Mention/Rappel est retenue car les deux formes du verset (dhakkir = rappelle, adh-dhikra = le rappel) sont dans le champ du rappel. Dhakkir est un imperatif de forme II (faire rappeler, c'est-a-dire rappeler a quelqu'un). Adh-dhikra est le nom du rappel avec l'article al-. Les deux mots forment une unite semantique : rappelle, si le rappel est profitable. Le Masculin/Male est un sens completement hors contexte — il n'y a aucune reference au genre dans le verset.",
        axe1_verset: "Le verbe dhakkir est un imperatif de forme II (causatif) : fais rappeler, c'est-a-dire rappelle a quelqu'un. Le nom adh-dhikra est le rappel lui-meme, sujet du verbe nafa'at (a ete profitable). Le champ lexical est entierement celui du rappel : l'acte de rappeler et le rappel lui-meme. Le verset contient deux formes de la meme racine — un effet de paronomase qui souligne l'importance du rappel.",
        axe2_voisins: "Les versets 6-8 preparaient le prophete : recitation, savoir divin, facilitation. Le verset 9 donne l'ordre d'agir : rappelle. C'est le pivot de la sourate — apres la preparation vient la mission. Le verset 10 montrera qui repond au rappel. La sequence est : preparation (v6-8) → ordre (v9) → reponse (v10).",
        axe3_sourate: "La sourate commence par la glorification (v1), enumere les actes divins (v2-5), prepare le prophete (v6-8), puis lui ordonne de rappeler (v9). Le rappel est l'aboutissement de toute la sourate — c'est la mission finale. Les versets 11-19 developperont les consequences du rappel (qui l'accepte, qui le refuse).",
        axe4_coherence: "Le Coran utilise dhakkir comme ordre au prophete dans plusieurs sourates. En 51:55, wa dhakkir fa-inna adh-dhikra tanfa'u al-mu'minin (et rappelle, car le rappel profite aux croyants). Le meme verbe dhakkir avec le meme nom dhikra, dans le meme sens de rappeler les gens a la verite.",
        axe5_frequence: "Le rappel est au coeur de la mission du khalifa. Le khalifa est celui qui rappelle aux autres leur mission, leur origine et leur but. Sans rappel, les gens oublient et s'egarent. Le verset conditionne le rappel a son utilite (si le rappel est profitable) — le khalifa rappelle quand c'est constructif."
      },
      'Masculin/Mâle': {
        senses: ['male', 'masculin'],
        status: 'nul',
        proof_ctx: "Le genre masculin n'a aucun rapport avec le contexte du verset. Les deux formes du verset (dhakkir et adh-dhikra) sont dans le champ du rappel, pas du genre."
      }
    }
  }, 1);

  // nfe(782) — Profit
  await upsertVWA(5957, 'nfe', 'utilité', {
    sense_chosen: 'utilité',
    concept_chosen: 'Profit',
    concepts: {
      'Profit': {
        senses: ['utilite'],
        status: 'retenu',
        proof_ctx: "D'apres les sources etymologiques, la racine n-f-' porte le sens de profiter, etre utile, apporter un benefice. Le verbe nafa'at est a l'accompli 3e personne feminin (le sujet est adh-dhikra, feminin) : elle a ete profitable/utile. Le conditionnel in (si) introduit une condition : si le rappel est profitable. Il n'y a qu'un seul regroupement de sens pour cette racine.",
        axe1_verset: "Le verbe nafa'at est a l'accompli 3e personne feminin, sujet adh-dhikra. La particule conditionnelle in (si) introduit une condition de profit : si le rappel est profitable. Le champ lexical combine le rappel et l'utilite. Le verset ne dit pas de rappeler systematiquement mais de rappeler quand c'est utile — c'est un critere pragmatique.",
        axe2_voisins: "Le verset 9 conditionne le rappel a son utilite. Le verset 10 montre qui tire profit du rappel : celui qui revere. La paire v9-v10 forme une unite : rappelle si c'est utile, et voici qui en profite — celui qui a la crainte reverencielle. Le profit du rappel est reserve a ceux qui sont receptifs.",
        axe3_sourate: "La sourate oppose implicitement ceux qui profitent du rappel (v10) et ceux qui l'evitent (v11-12). Le profit est le critere de tri : le rappel n'est pas impose a tous, il est offert a ceux qui en tireront benefice. C'est un theme de pragmatisme dans la mission prophetique.",
        axe4_coherence: "Le Coran utilise nafa'a dans le contexte du rappel. En 51:55, fa-inna adh-dhikra tanfa'u al-mu'minin (le rappel profite aux croyants). Le profit du rappel est reserve aux croyants — ceux qui sont ouverts a recevoir. Le meme schema conditionnel se retrouve dans les deux passages.",
        axe5_frequence: "Le profit du rappel est la mesure de l'efficacite du khalifa dans sa mission. Le khalifa ne rappelle pas en vain — il rappelle quand c'est utile, quand les gens sont receptifs. C'est un principe d'efficacite et de sagesse dans la transmission du message."
      }
    }
  }, 3);

  // VA verset 9
  await upsertVA(5957, {
    translation_arab: "Rappelle donc, si le rappel est profitable",
    full_translation: "Rappelle, donc, ou le Rappel est utile",
    segments: [
      { fr: "Rappelle donc", pos: "V", phon: "fa-dhakkir", arabic: "فَذَكِّرْ", position: 1, word_key: "ðkr", is_particle: false, sense_retenu: "rappel (dhikr)" },
      { fr: "si", pos: "COND", phon: "in", arabic: "إِن", position: 2, word_key: null, is_particle: true, sense_retenu: null },
      { fr: "est profitable", pos: "V", phon: "nafa'at", arabic: "نَّفَعَتِ", position: 3, word_key: "nfe", is_particle: false, sense_retenu: "utilité" },
      { fr: "le rappel", pos: "N", phon: "adh-dhikra", arabic: "ٱلذِّكْرَىٰ", position: 4, word_key: "ðkr", is_particle: false, sense_retenu: "rappel (dhikr)" }
    ],
    translation_explanation: `§DEMARCHE§
La conjonction **fa** (donc, alors) relie ce verset aux promesses precedentes : puisque Nous te faciliterons (v8), alors rappelle. C'est la consequence logique de la preparation — la mission commence.

Le verbe **dhakkir** est un imperatif de la forme II de dh-k-r. D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la forme II est causative : faire rappeler, c'est-a-dire rappeler a quelqu'un ce qu'il a oublie ou neglige. L'imperatif s'adresse au prophete.

La particule **in** est une conditionnelle : si. Elle introduit une condition. Le verbe **nafa'at** est a l'accompli 3e personne feminin de la racine n-f-' : a ete profitable, a ete utile. Le sujet est **adh-dhikra** (le rappel, nom feminin defini). La structure est : si le rappel a ete profitable / si le rappel est profitable.

§JUSTIFICATION§
**rappelle** — Le sens retenu est « rappel (dhikr) ». Le mot « rappelle » est l'imperatif naturel de rappeler — faire revenir a la memoire. L'alternative « mentionne » est ecartee car mentionner est plus neutre (citer en passant), tandis que rappeler implique un effort actif de remise en memoire.

**profitable** — Le sens retenu est « utilite ». Le mot « profitable » est choisi car il ajoute l'idee de benefice concret a l'utilite — quelque chose qui profite, qui apporte un gain. L'alternative « utile » est synonyme mais plus plat. « Profitable » souligne que le rappel produit un fruit.

§CRITIQUE§
**si vs ou** — Les traductions courantes donnent « ou le Rappel est utile » (Hamidullah). Le mot arabe in est clairement une particule conditionnelle (si), pas un adverbe de lieu (ou, qui serait haythu ou ayna). Ce changement modifie significativement le sens du verset. Avec « si » : rappelle a la condition que le rappel soit profitable — c'est un critere de sagesse, le prophete est invite a juger de l'utilite. Avec « ou » : rappelle dans les lieux ou le rappel est utile — c'est un critere geographique. L'arabe dit « si » (condition), pas « ou » (lieu). La traduction courante transforme une condition de sagesse en indication spatiale.`
  });

  // ========== VERSET 10 (5958) ==========
  console.log('\n--- v10 (5958): sa-yatadhakkaru man yakhsha ---');

  // ðkr(1051) — Mention/Rappel (pour v10)
  await upsertVWA(5958, 'ðkr', 'se souvenir', {
    sense_chosen: 'se souvenir',
    concept_chosen: 'Mention/Rappel',
    concepts: {
      'Mention/Rappel': {
        senses: ['mentionner', 'se souvenir', 'rappel (dhikr)'],
        status: 'retenu',
        proof_ctx: "D'apres les sources etymologiques, la racine dh-k-r porte le sens de mention, rappel, memoire. Le verbe sa-yatadhakkaru est en forme V (reflexif) avec le futur sa- : il se rappellera, il se souviendra. La forme V est reflexive — c'est l'action de se rappeler soi-meme, de faire revenir a sa propre memoire. Le Masculin/Male est hors contexte.",
        axe1_verset: "Le verbe sa-yatadhakkaru est en forme V (reflexive) avec le futur sa- : il se rappellera. Le sujet est man yakhsha (celui qui revere). Le champ lexical combine le souvenir et la crainte reverencielle. Le verset repond au verset 9 : rappelle (v9), et se rappellera celui qui revere (v10). Le souvenir est l'effet du rappel sur celui qui est receptif.",
        axe2_voisins: "Le verset 9 donnait l'ordre de rappeler sous condition de profit. Le verset 10 montre qui profite : celui qui revere se rappellera. Le verset 11 montrera l'oppose : celui qui evite le rappel. Les versets 9-11 forment un triptyque : l'ordre de rappeler, le receptif, le refractaire.",
        axe3_sourate: "La sourate conduit du glorification (v1) au rappel (v9-10). Le souvenir est le fruit final de toute la chaine : la creation, la guidance, la revelation conduisent au rappel, et le rappel conduit au souvenir chez celui qui est receptif. Se souvenir est l'aboutissement de la mission prophetique dans cette sourate.",
        axe4_coherence: "Le Coran utilise yatadhakkaru (forme V, reflexif) pour designer celui qui se rappelle apres un avertissement. En 2:269, wa ma yadhdhakkaru illa ulu-l-albab (et ne se rappellent que les dotes d'intelligence). Le souvenir est reserve a ceux qui ont la capacite de comprendre et de reverer.",
        axe5_frequence: "Le souvenir est l'objectif final du khalifa : faire en sorte que les gens se rappellent leur mission, leur origine et leur but. Le khalifa qui rappelle efficacement produit des gens qui se souviennent — c'est le signe de reussite de la mission de civilisation et de justice."
      },
      'Masculin/Mâle': {
        senses: ['male', 'masculin'],
        status: 'nul',
        proof_ctx: "Le genre masculin n'a aucun rapport avec ce verset. Yatadhakkaru est une forme reflexive de dh-k-r dans le sens de se souvenir, pas dans le sens de masculin."
      }
    }
  }, 1);

  // kšy(1610) — Crainte révérencielle
  await upsertVWA(5958, 'kšy', 'révérer', {
    sense_chosen: 'révérer',
    concept_chosen: 'Crainte révérencielle',
    concepts: {
      'Crainte révérencielle': {
        senses: ['craindre', 'redouter', 'reverer'],
        status: 'retenu',
        proof_ctx: "D'apres les sources etymologiques, la racine kh-sh-y porte le sens de craindre avec reverence, redouter avec respect. Le verbe yakhsha est a l'inaccompli 3e personne : il craint/revere. La khashya est une crainte particuliere — ce n'est pas la peur animale (khawf) mais une crainte melee de respect, de veneration et de conscience de la grandeur de l'autre. Il n'y a qu'un seul regroupement de sens. Le verbe yakhsha est intransitif ici — le texte ne precise pas l'objet de la crainte reverencielle.",
        axe1_verset: "Le verbe yakhsha est a l'inaccompli (action continue/habituelle) dans la proposition relative man yakhsha (celui qui revere). Le champ lexical combine le souvenir (sa-yatadhakkaru) et la reverence (yakhsha) : celui qui revere se rappellera. Les deux sont lies — la reverence rend receptif au souvenir. L'inaccompli indique une attitude permanente, pas une crainte ponctuelle.",
        axe2_voisins: "Le verset 9 conditionnait le rappel a son utilite. Le verset 10 identifie le receptif : celui qui revere. Le verset 11 identifiera le refractaire : celui qui evite. La reverence est le critere de receptivite au rappel — c'est l'attitude interieure qui ouvre a la memoire et au souvenir.",
        axe3_sourate: "La sourate commence par l'ordre de glorifier le Tres-Haut (v1) et aboutit a la reverence (v10). La glorification du debut et la reverence de la fin se repondent : glorifier c'est reconnaitre la grandeur, reverer c'est en etre conscient. Les deux attitudes sont les faces d'une meme reconnaissance.",
        axe4_coherence: "Le Coran utilise khashya pour une crainte melee de connaissance. En 35:28, innama yakhsha-llaha min 'ibadihi al-'ulama'u (ne reverent Dieu parmi Ses serviteurs que les savants). La khashya est liee au savoir — celui qui sait revere, celui qui ignore ne revere pas. Le verset 10 confirme ce lien : la reverence rend receptif au rappel.",
        axe5_frequence: "La reverence est l'attitude fondamentale du khalifa face a sa mission. Le khalifa qui revere celui qui l'a cree et guide agit avec conscience et responsabilite. La reverence n'est pas la peur paralysante mais la conscience lucide de la grandeur — elle pousse a l'action juste, pas a l'immobilisme."
      }
    }
  }, 3);

  // VA verset 10
  await upsertVA(5958, {
    translation_arab: "Se rappellera celui qui revere",
    full_translation: "Quiconque craint (Allah) s'en rappellera",
    segments: [
      { fr: "Se rappellera", pos: "V", phon: "sa-yatadhakkaru", arabic: "سَيَذَّكَّرُ", position: 1, word_key: "ðkr", is_particle: false, sense_retenu: "se souvenir" },
      { fr: "celui qui", pos: "REL", phon: "man", arabic: "مَن", position: 2, word_key: null, is_particle: true, sense_retenu: null },
      { fr: "revere", pos: "V", phon: "yakhsha", arabic: "يَخْشَىٰ", position: 3, word_key: "kšy", is_particle: false, sense_retenu: "révérer" }
    ],
    translation_explanation: `§DEMARCHE§
Le verbe **sa-yatadhakkaru** est compose de sa- (particule du futur), ya- (prefixe 3e personne) et tadhakkaru (forme V de dh-k-r). D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la forme V est reflexive : se rappeler soi-meme, faire revenir a sa propre memoire. Le futur sa- indique une certitude : il se rappellera (c'est certain).

Le pronom relatif **man** (celui qui) introduit une proposition relative qui identifie le sujet : celui qui revere.

Le verbe **yakhsha** est a l'inaccompli 3e personne de la racine kh-sh-y. D'apres les sources etymologiques, khashya est une crainte melee de respect et de veneration. C'est distinct de khawf (peur animale, instinctive) : la khashya suppose une conscience de la grandeur de l'autre, une reconnaissance intellectuelle, pas une reaction de survie. L'inaccompli indique une attitude permanente et habituelle — c'est quelqu'un qui revere de maniere constante, pas ponctuellement.

§JUSTIFICATION§
**se rappellera** — Le sens retenu est « se souvenir ». Le mot « se rappellera » (futur de se rappeler) rend la forme V reflexive avec le futur sa-. L'alternative « se souviendra » est synonyme mais moins directe. L'alternative « mentionnera » est ecartee car mentionner est transitif (mentionner quelque chose), tandis que la forme V est reflexive (revenir a sa propre memoire).

**revere** — Le sens retenu est « reverer ». Ce mot est choisi car il traduit la specificite de la khashya : une crainte melee de respect profond et de veneration, distincte de la peur. L'alternative « craint » est ecartee car la crainte en francais courant est une peur (j'ai peur), tandis que la reverence est un respect profond (je revere). L'alternative « redoute » est ecartee car la redoute est une crainte anticipatoire (redouter un danger), tandis que la reverence est une attitude permanente face a la grandeur.

§CRITIQUE§
**revere vs craint (Allah)** — Les traductions courantes donnent « craint (Allah) » (Hamidullah). Deux problemes : (1) Le mot « craint » traduit la khashya comme une peur, ce qui masque la dimension de respect et de veneration propre a cette racine. La racine kh-sh-y n'est pas kh-w-f (peur). D'apres les sources etymologiques, la khashya est une crainte melee de connaissance et de respect. (2) Le mot « Allah » est ajoute entre parentheses — il est absent du texte arabe. Le texte dit simplement man yakhsha (celui qui revere), sans preciser l'objet de la reverence. L'ajout de « Allah » ferme le sens alors que le texte le laisse ouvert. Notre traduction respecte cette ouverture : se rappellera celui qui revere — le texte ne precise pas qui ou quoi est revere.`
  });

  console.log('\n=== PIPELINE S87 v6-10 TERMINÉE ===');
})();
