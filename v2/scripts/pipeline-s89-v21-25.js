// Pipeline S89 v21-25 — Étapes 3-4 : Axes + Traductions
require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');
const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

async function upsertVWA(verse_id, word_key, sense_chosen, analysis_axes, position) {
  const { data: existing } = await sb.from('verse_word_analyses').select('id').eq('verse_id', verse_id).eq('word_key', word_key);
  if (existing && existing.length > 0) {
    const { error } = await sb.from('verse_word_analyses').update({ sense_chosen, analysis_axes, position }).eq('id', existing[0].id);
    if (error) console.log(`  ERR update VWA ${word_key}: ${error.message}`);
    else console.log(`  ✓ VWA updated ${word_key} (id=${existing[0].id})`);
  } else {
    const { data, error } = await sb.from('verse_word_analyses').insert({ verse_id, word_key, sense_chosen, analysis_axes, position }).select().single();
    if (error) console.log(`  ERR insert VWA ${word_key}: ${error.message}`);
    else console.log(`  ✓ VWA created ${word_key} (id=${data.id})`);
  }
}

async function upsertVA(verse_id, d) {
  const { data: existing } = await sb.from('verse_analyses').select('id').eq('verse_id', verse_id);
  if (existing && existing.length > 0) {
    const { error } = await sb.from('verse_analyses').update(d).eq('id', existing[0].id);
    if (error) console.log(`  ERR update VA: ${error.message}`);
    else console.log(`  ✓ VA updated (id=${existing[0].id})`);
  } else {
    const { data, error } = await sb.from('verse_analyses').insert({ verse_id, ...d }).select().single();
    if (error) console.log(`  ERR insert VA: ${error.message}`);
    else console.log(`  ✓ VA created (id=${data.id})`);
  }
}

(async () => {
  console.log('=== PIPELINE S89 v21-25 — ÉTAPES 3-4 ===\n');

  // ============================================================
  // VERSET 21 (6014): كَلَّآ إِذَا دُكَّتِ ٱلْأَرْضُ دَكًّا دَكًّا
  // "Certes non ! Quand la terre sera aplatie d'un aplatissement après aplatissement"
  // ============================================================
  console.log('--- VERSET 21 ---');

  // dkk (id=1936) — دُكَّتِ / دَكًّا — passif: la terre est aplatie
  // 1 seul concept: Écrasement/Destruction → retenu par défaut
  await upsertVWA(6014, 'dkk', 'aplatir', {
    sense_chosen: 'aplatir',
    concept_chosen: 'Écrasement/Destruction',
    concepts: {
      'Écrasement/Destruction': {
        status: 'retenu',
        senses: ['aplatir', 'écraser', 'réduire en poussière'],
        proof_ctx: "Ce sens regroupe toutes les formes de destruction par écrasement. La racine d-k-k ne possède qu'un seul regroupement de sens, tous liés a l'acte de rendre plat ce qui avait du relief, de broyer ce qui avait une forme. Dans le verset, le verbe est au passif (dukkat = elle fut aplatie), ce qui indique que la terre SUBIT l'aplatissement — elle ne l'accomplit pas. L'aplatissement est un acte exterieur, directionnel (de haut en bas) et definitif : ce qui est aplati ne retrouve pas sa forme d'origine. La repetition dakkan dakkan renforce l'intensite et la totalite de l'ecrasement.",
        axe1_verset: "Le champ lexical du verset est celui de la destruction totale et du nivellement. Le mot kalla (certes non !) marque une rupture avec ce qui precede — le discours passe de la description des comportements humains (v15-20) a l'annonce d'un evenement cosmique. L'aplatissement de la terre s'inscrit dans un registre de bouleversement total ou toute structure disparait. Le mot ard (terre) est l'objet direct de cet aplatissement, confirmant qu'il s'agit d'un ecrasement physique et concret. La repetition dakkan dakkan (un aplatissement apres un aplatissement) cree un effet de martellement qui renforce l'idee d'une destruction methodique et implacable.",
        axe2_voisins: "Le verset 22 enchaine avec la venue du seigneur et des anges en rangs, et le verset 23 avec la gehenne amenee. L'aplatissement de la terre est donc le premier signe d'un evenement de reddition de comptes : la terre est nivelvee, puis les acteurs de ce jour apparaissent. Les versets voisins en amont (v17-20) decrivaient l'attachement humain aux biens et l'absence de generosite — l'aplatissement de la terre repond a cet attachement en montrant que tout ce a quoi l'humain s'accrochait disparait. Le nivellement de la terre est aussi un acte d'egalisation : plus de montagne, plus de vallee, plus de distinction geographique, tout est mis a plat.",
        axe3_sourate: "La sourate 89 (al-Fajr) commence par l'evocation de l'aube et de civilisations anciennes qui ont ete detruites malgre leur puissance (Aad, Thamoud, Pharaon). L'aplatissement de la terre prolonge cette thematique de destruction, mais a une echelle cosmique : ce n'est plus une civilisation qui est detruite, c'est la terre elle-meme. Le theme general de la sourate est la confrontation entre la puissance terrestre (que l'humain croit eternelle) et la realite du jour ou tout est nivele. L'ecrasement de la terre est le point culminant de cette progression.",
        axe4_coherence: "Le Coran utilise la racine d-k-k dans un autre passage (7:143) ou la montagne est aplatie quand Dieu se manifeste. Cette coherence confirme que le dak est associe a des evenements de manifestation divine majeure — le nivellement du relief terrestre accompagne la presence divine. D'autres versets decrivent la terre mise a plat le Jour du jugement (84:3-4 : quand la terre sera etendue et rejettera ce qu'elle contient). L'idee d'un aplatissement total est donc un motif coranique recurrent pour decrire le basculement vers une realite nouvelle.",
        axe5_frequence: "Dans la perspective du khalifa (mission humaine de civilisation et de justice), l'aplatissement de la terre represente la fin du terrain sur lequel cette mission s'exergait. La terre etait le support de l'activite humaine — l'aplatir revient a retirer le support lui-meme, signifiant que le temps de l'action est termine et que vient le temps de la reddition de comptes. Ce sens s'inscrit parfaitement dans la finalite de responsabilisation : l'humain ne peut plus agir, il ne peut que faire face a ce qu'il a fait."
      }
    }
  }, 3);

  // ard (id=324) — ٱلْأَرْضُ — nom defini
  await upsertVWA(6014, 'ard', 'terre', {
    sense_chosen: 'terre',
    concept_chosen: 'Terre/Sol',
    concepts: {
      'Terre/Sol': {
        status: 'retenu',
        senses: ['terre', 'sol', 'pays', 'bas'],
        proof_ctx: "La terre est le support physique et concret sur lequel se deroule l'existence humaine. Dans ce verset, al-ard (la terre, avec l'article defini) designe la totalite du sol terrestre qui est soumis a l'aplatissement. Les deux autres regroupements de sens (Rhume et Tremblement) sont des emplois isoles qui n'ont aucun rapport avec le contexte cosmique du verset.",
        axe1_verset: "Le champ lexical du verset est l'ecrasement d'une surface physique. Le mot ard (terre) est l'objet qui subit l'aplatissement — il s'agit necessairement du sol, de la surface terrestre. Les autres sens de la racine (pays au sens de territoire, bas au sens de position inferieure) sont des extensions du meme sens physique. Le mot est defini par l'article al-, ce qui indique qu'on parle de LA terre, la totalite connue, pas d'un terrain particulier.",
        axe2_voisins: "Les versets voisins decrivent un evenement cosmique (venue du seigneur, des anges, de la gehenne). La terre est le premier element cosmique mentionne, celui qui subit le premier la transformation. Les versets precedents (v15-20) evoquaient les biens terrestres et l'attachement humain — l'aplatissement de la terre repond directement a cet attachement : le support meme des biens disparait.",
        axe3_sourate: "La sourate evoque des civilisations terrestres (Aad, Thamoud) qui ont construit sur la terre et se croyaient invincibles. L'aplatissement de la terre complete cette progression : meme la terre sur laquelle ces civilisations ont bati est aplatie. Le support est aussi fragile que ceux qui y ont construit.",
        axe4_coherence: "Le Coran utilise ard de maniere constante pour designer la surface terrestre comme lieu de l'activite humaine et du khalifa. Dans 2:30 (je vais placer un khalifa sur la terre), la terre est le lieu de la mission. Dans 89:21, ce lieu est aplati — la mission est terminee, le temps du bilan commence.",
        axe5_frequence: "La terre est le lieu ou s'exerce la mission du khalifa. Son aplatissement signifie la fin de ce lieu d'exercice et le debut du temps ou chacun repond de ce qu'il a fait sur cette terre. Ce sens est fondamental pour comprendre la transition entre les versets 15-20 (comportement sur terre) et les versets 21+ (consequences cosmiques)."
      },
      'Sens isolé/Rhume': { status: 'nul', senses: ['rhume'], proof_ctx: "Sans rapport avec le contexte cosmique du verset." },
      'Sens isolé/Tremblement': { status: 'nul', senses: ['tremblement'], proof_ctx: "Sens physique isole, hors sujet dans ce contexte d'aplatissement total." }
    }
  }, 4);

  // VA verset 21
  await upsertVA(6014, {
    segments: [
      { fr: 'Certes non !', pos: 'AVR', phon: 'kallā', arabic: 'كَلَّآ', word_key: null, is_particle: true, sense_retenu: null, position: 1 },
      { fr: 'Quand', pos: 'T', phon: 'iḏā', arabic: 'إِذَا', word_key: null, is_particle: true, sense_retenu: null, position: 2 },
      { fr: 'sera aplatie', pos: 'V', phon: 'dukkati', arabic: 'دُكَّتِ', word_key: 'dkk', is_particle: false, sense_retenu: 'aplatir', position: 3 },
      { fr: 'la terre', pos: 'N', phon: 'al-arḍ', arabic: 'ٱلْأَرْضُ', word_key: 'ard', is_particle: false, sense_retenu: 'terre', position: 4 },
      { fr: "d'un aplatissement", pos: 'N', phon: 'dakkan', arabic: 'دَكًّا', word_key: 'dkk', is_particle: false, sense_retenu: 'aplatir', position: 5 },
      { fr: 'après aplatissement', pos: 'N', phon: 'dakkan', arabic: 'دَكًّا', word_key: 'dkk', is_particle: false, sense_retenu: 'aplatir', position: 6 }
    ],
    translation_arab: "Certes non ! Quand la terre sera aplatie d'un aplatissement après aplatissement",
    full_translation: "Mais non ! Quand la terre sera complètement pulvérisée",
    translation_explanation: `§DEMARCHE§
Le verset commence par **kalla** (كَلَّآ), une particule de rejet energique qui signifie « certes non ! » ou « pas du tout ! ». Elle rompt avec le discours des versets precedents (v15-20) ou l'etre humain se plaignait de son sort et s'accrochait aux biens. Kalla ferme ce chapitre et ouvre le suivant : le jour du jugement.

Le verbe **dukkati** (دُكَّتِ) est un verbe au passif accompli (une forme qui dit que l'action est SUBIE par le sujet, pas faite par lui). La terre subit l'aplatissement — elle ne s'aplatit pas d'elle-meme. D'apres les sources etymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), la racine d-k-k signifie aplatir, ecraser, reduire en poussiere. Le verbe au passif indique qu'un agent externe (non mentionne) aplatit la terre.

**Dakkan dakkan** (دَكًّا دَكًّا) est un mafoul mutlaq (complement absolu) repete. En arabe, cette construction repete le nom verbal pour insister sur l'intensite et la repetition de l'action. La repetition signifie « un aplatissement apres un aplatissement, encore et encore » — une destruction totale, methodique, qui ne laisse rien debout.

§JUSTIFICATION§
**aplatie** — Le sens retenu est « aplatir » du regroupement Ecrasement/Destruction. Le mot « aplatir » est choisi car il decrit precisement l'acte de rendre plat ce qui avait du relief — la terre avec ses montagnes et ses vallees est rendue plate. L'alternative « ecraser » implique une force brutale mais pas necessairement un resultat plat. L'alternative « reduire en poussiere » va plus loin que ce que le texte dit — le texte dit que la terre est aplatie, pas qu'elle est pulverisee.

**la terre** — Le sens retenu est « terre » du regroupement Terre/Sol. Le mot avec l'article defini designe la totalite du sol terrestre.

§CRITIQUE§
**aplatir vs pulveriser** — Les traductions courantes donnent « pulverisee » (Hamidullah) ou « mise a niveau » pour dukkati. Le mot « pulveriser » vient de l'interpretation qui a assimile le dak au broyage complet, mais d'apres les sources etymologiques, la racine d-k-k signifie d'abord aplatir, mettre a plat, niveler. La nuance est importante : aplatir evoque la disparition du relief (montagnes, vallees, tout est nivele), tandis que pulveriser evoque la destruction en poussiere. Le texte decrit un nivellement de la terre, pas sa desintegration. La meme racine est utilisee en 7:143 quand la montagne est « aplatie » (ja'alahu dakkan) — elle ne disparait pas, elle perd son relief.`
  });
  console.log('  v21 done\n');

  // ============================================================
  // VERSET 22 (6015): وَجَآءَ رَبُّكَ وَٱلْمَلَكُ صَفًّا صَفًّا
  // "Et ton seigneur viendra avec les anges, rang après rang"
  // ============================================================
  console.log('--- VERSET 22 ---');

  // jyy (id=629) — جَآءَ — verbe accompli
  await upsertVWA(6015, 'jyy', 'venir', {
    sense_chosen: 'venir',
    concept_chosen: 'Venue/Apport',
    concepts: {
      'Venue/Apport': {
        status: 'retenu',
        senses: ['venir', 'apporter', 'arriver'],
        proof_ctx: "La racine j-y-' n'a qu'un seul regroupement de sens, tous lies a l'idee de venue ou d'apport. Dans le verset, le verbe est a l'accompli (ja'a = il est venu/viendra), indiquant un evenement present ou accompli dans la certitude coranique. La venue est un mouvement directionnel — quelqu'un vient de quelque part vers un lieu. Le texte ne precise pas la nature de cette venue ni ce qu'elle signifie concretement.",
        axe1_verset: "Le champ lexical du verset est celui de l'apparition solennelle. Le verbe ja'a (venir) est suivi de rabbuka (ton seigneur) et d'al-malak (l'ange, au singulier collectif), avec la precision saffan saffan (rang apres rang). La venue s'inscrit dans un contexte de manifestation organisee — ce n'est pas une arrivee chaotique mais une venue en ordre, en rangs. Le verbe « venir » est le plus neutre des trois sens et laisse le texte dire ce qu'il dit sans ajouter l'idee d'apport ou d'arrivee qui impliqueraient un trajet.",
        axe2_voisins: "Le verset 21 vient de decrire l'aplatissement de la terre — la venue du seigneur suit immediatement la destruction du relief terrestre. Le verset 23 ajoute que la gehenne sera amenee ce jour-la. La venue du seigneur s'inscrit donc entre la destruction de l'ancien monde et l'apparition de ce qui determine le sort des etres humains. Les versets precedents (v15-20) montraient l'humain dans son monde — ici le monde est aplati et le seigneur vient.",
        axe3_sourate: "La sourate 89 est construite sur le contraste entre la puissance terrestre et la realite du jour de la reddition de comptes. La venue du seigneur est le moment pivot ou cette confrontation se produit. Apres les exemples de civilisations detruites (v6-13) et les comportements humains (v15-20), la venue du seigneur inaugure le jugement. C'est le point culminant thematique de la sourate.",
        axe4_coherence: "Le Coran utilise le verbe ja'a dans d'autres contextes de manifestation divine. En 2:210, la question est posee : « attendent-ils que Dieu vienne ? » (hal yanzuruna an ya'tiyahumu Allah). Le motif de la venue divine est un element recurrent pour decrire le moment ou la realite cachee devient manifeste. Le texte ne precise pas comment cette venue se produit, et il ne nous appartient pas de le preciser.",
        axe5_frequence: "Dans la mission du khalifa, la venue du seigneur represente le moment ou celui qui a confie la mission vient constater ce qui a ete fait. L'humain etait charge d'agir sur la terre (v15-20), la terre est aplatie (v21), et maintenant celui qui a confie la mission vient. Ce schema de delegation puis verification est au coeur de la responsabilisation."
      }
    }
  }, 1);

  // rbb (id=253) — رَبُّكَ — nom en idafa
  await upsertVWA(6015, 'rbb', 'seigneur', {
    sense_chosen: 'seigneur',
    concept_chosen: 'Seigneurie/Autorité bienveillante',
    concepts: {
      'Seigneurie/Autorité bienveillante': {
        status: 'retenu',
        senses: ['seigneur', 'maître', 'propriétaire', 'celui qui élève', 'celui qui entretient', 'celui qui possède', 'gouverner'],
        proof_ctx: "La racine r-b-b possede de nombreux regroupements de sens, mais dans le contexte de rabbuka (ton seigneur), seul le sens de seigneurie est pertinent. Les regroupements Croissance/Augmentation et Education/Accompagnement sont philosophiquement proches — la seigneurie inclut l'idee d'elever et de faire grandir — mais le contexte de venue solennelle pour un jour de reddition de comptes pointe vers l'autorite bienveillante plutot que vers l'acte d'eduquer ou de faire croitre. La distinction est : le seigneur est celui qui a l'autorite, l'educateur est celui qui accompagne. Ici, c'est l'autorite qui vient, pas l'accompagnateur.",
        axe1_verset: "Le mot rabbuka (ton seigneur) est le sujet du verbe ja'a (venir). Le champ lexical est celui de l'autorite qui se manifeste — le seigneur vient, accompagne de ses anges en rangs. Ce n'est pas un educateur qui vient accompagner, ni un maitre qui vient faire croitre. C'est une autorite qui vient dans un contexte de solennite et de reddition. Le suffixe -ka (ton) personnalise la relation : c'est TON seigneur, pas un seigneur anonyme.",
        axe2_voisins: "Les versets voisins confirment le registre de l'autorite : la terre est aplatie (v21), la gehenne est amenee (v23), l'etre humain regrette (v24). La venue du seigneur s'inscrit dans un moment d'autorite supreme, pas de pedagoie ou de croissance. Les versets 15-16 utilisaient deja rabbuka dans le sens du seigneur qui eprouve l'etre humain — ici c'est le meme seigneur qui vient constater le resultat.",
        axe3_sourate: "Tout au long de la sourate, le seigneur est l'autorite qui agit : il verse le chatiment sur les civilisations (v13), il est a l'affut (v14), il eprouve l'humain (v15-16). La venue du seigneur en v22 est l'aboutissement de cette progression — l'autorite qui jusque-la agissait a distance se manifeste directement.",
        axe4_coherence: "Le Coran utilise rabb de maniere constante pour designer l'autorite bienveillante qui a cree, qui entretient et qui juge. En 89:22, la venue du rabb s'inscrit dans le schema coranique global ou le rabb est l'autorite ultime qui rend les comptes. D'autres versets confirment cette association (39:69 : « la terre resplendira de la lumiere de son seigneur »).",
        axe5_frequence: "Le seigneur est celui qui a confie la mission du khalifa a l'etre humain. Sa venue signifie que le temps de la mission est termine et que le delegataire vient rendre des comptes a celui qui l'a delegue. C'est un acte d'autorite bienveillante — pas de vengeance, mais de verification de ce qui a ete fait."
      },
      'Croissance/Augmentation': { status: 'nul', senses: ['augmenter', 'croître'], proof_ctx: "Le contexte n'est pas celui de la croissance ou de l'augmentation mais de la venue solennelle d'une autorite." },
      'Éducation/Accompagnement': { status: 'peu_probable', senses: ['élever un enfant', 'éduquer', 'former'],
        proof_ctx: "L'education est un processus continu d'accompagnement — le rabb est aussi celui qui eleve et forme. Mais dans le contexte de la venue au jour du jugement, c'est l'autorite qui se manifeste, pas le pedagogue. La distinction avec le sens retenu est : le seigneur POSSEDE l'autorite et vient l'exercer, l'educateur ACCOMPAGNE la croissance. Ici, la venue est un acte d'autorite, pas d'accompagnement.",
        axe1_verset: "Le verbe ja'a (venir) suivi du singulier collectif al-malak (les anges) en rangs evoque une manifestation d'autorite, pas une session d'education. Un educateur ne vient pas avec des rangs d'anges — c'est un registre de pouvoir, pas de pedagogie.",
        axe2_voisins: "Le verset suivant (v23) amene la gehenne — l'educateur ne vient pas avec la gehenne. Le contexte immédiat confirme qu'il s'agit de l'autorite qui vient pour juger, pas de l'educateur qui vient pour former.",
        axe3_sourate: "La sourate evoque des destructions de civilisations et des comportements humains defaillants. L'education a eu lieu avant — le temps de la pedagogie est passe. Maintenant c'est le temps du bilan.",
        axe4_coherence: "Le Coran distingue les moments d'education (la vie terrestre) et les moments de jugement (le jour dernier). En v22, nous sommes dans le moment du jugement, pas dans celui de l'education.",
        axe5_frequence: "L'education du khalifa se fait pendant la vie terrestre. Au jour du jugement, le khalifa rend des comptes — il n'est plus en formation. Le seigneur vient en tant qu'autorite, pas en tant qu'educateur."
      },
      'Commerce/Usure': { status: 'nul', senses: ['usure'], proof_ctx: "Sans rapport avec le contexte." },
      'Souffle/Vent': { status: 'nul', senses: ['essoufflement'], proof_ctx: "Sens physique isole, hors sujet." },
      'Sens isolé/Fixer': { status: 'nul', senses: ['fixer'], proof_ctx: "Hors sujet." },
      'Sens isolé/Rassembler': { status: 'nul', senses: ['rassembler'], proof_ctx: "Hors sujet." },
      'Sens isolé/Groupe': { status: 'nul', senses: ['groupe'], proof_ctx: "Hors sujet." },
      'Sens isolé/Confiture': { status: 'nul', senses: ['confiture'], proof_ctx: "Hors sujet." }
    }
  }, 2);

  // mlk (id=256) — ٱلْمَلَكُ — singulier collectif defini
  await upsertVWA(6015, 'mlk', 'ange', {
    sense_chosen: 'ange',
    concept_chosen: 'Ange/Messager',
    concepts: {
      'Ange/Messager': {
        status: 'retenu',
        senses: ['ange', 'messager', 'message'],
        proof_ctx: "Le mot al-malak (avec l'article defini, au singulier a valeur collective) designe les anges dans le contexte coranique. D'apres les sources etymologiques, la racine m-l-k lie l'ange a l'idee de message et d'envoi. Le sens Ange/Messager est retenu car le contexte (venue du seigneur avec ses anges en rangs) correspond precisement a l'apparition des etres envoyes. Les sens de Possession/Autorite et de Royaute/Souverainete decrivent l'autorite humaine ou la possession de biens, ce qui ne correspond pas au mot al-malak dans ce verset. La distinction philosophique est : l'ange est un envoye, pas un souverain ni un proprietaire. L'ange ne possede rien et ne regne sur rien — il execute une mission.",
        axe1_verset: "Le champ lexical du verset est la venue solennelle avec le seigneur et les anges en rangs. Le mot al-malak est coordonne avec rabbuka par la particule wa — le seigneur vient ET l'ange (en rangs). Les anges sont ceux qui accompagnent le seigneur dans cette manifestation. Le singulier collectif indique qu'il s'agit de tous les anges, pas d'un seul. L'accompagnement en rangs ordonnes renforce l'idee d'etres qui executent une mission avec discipline.",
        axe2_voisins: "Le verset suivant (v23) mentionne la gehenne amenee — les anges sont les executants de cet evenement. Le verset precedent (v21) decrivait l'aplatissement de la terre. Les anges arrivent dans un contexte de bouleversement cosmique ou chaque element est mis en place pour le jugement. Les versets 25-26 parleront de chatiment et de liens — les anges sont les executants de ces actions.",
        axe3_sourate: "La sourate 89 ne mentionne pas les anges avant ce verset, mais le theme de l'autorite divine qui s'exerce sur les civilisations (v6-13) implique des agents d'execution. Les anges en rangs representent l'organisation et la discipline de cette autorite — chaque chose est a sa place.",
        axe4_coherence: "Le Coran mentionne les anges en rangs dans d'autres passages (37:1 : « par ceux qui sont ranges en rangs », 78:38 : « le jour ou l'esprit et les anges se tiendront en rangs »). La coherence est forte — les anges en rangs sont un motif recurrent du jour du jugement. Le singulier collectif al-malak est une forme habituelle en arabe coranique pour designer l'ensemble des anges.",
        axe5_frequence: "Les anges sont les executants de la volonte divine dans le schema coranique. Leur presence en rangs au jour du jugement signifie que l'ordre cosmique est maintenu meme dans le moment le plus bouleversant. La mission du khalifa se deroulait dans un monde ordonne — le jugement se deroule aussi dans un cadre ordonne, avec des etres qui servent cette mission d'ordre."
      },
      'Possession/Autorité': { status: 'nul', senses: ['posséder', 'maître'], proof_ctx: "Le mot al-malak ne designe pas un possesseur mais un ange. La forme al-malak (avec fatha sur le lam) est distincte de al-malik (roi/proprietaire)." },
      'Royauté/Souveraineté': { status: 'nul', senses: ['roi', 'royaume'], proof_ctx: "Meme distinction : al-malak n'est pas al-malik. Le contexte confirme qu'il s'agit d'etres qui accompagnent le seigneur, pas de souverains." },
      'Sens isolé/Pâte': { status: 'nul', senses: ['pâte'], proof_ctx: "Hors sujet." },
      'Sens isolé/Maîtriser': { status: 'nul', senses: ['maîtriser soi-même'], proof_ctx: "Hors sujet." },
      'Eau/Liquide': { status: 'nul', senses: ['eau stagnante'], proof_ctx: "Hors sujet." }
    }
  }, 3);

  // sff (id=2075) — صَفًّا صَفًّا — nom repete
  await upsertVWA(6015, 'sff', 'rang', {
    sense_chosen: 'rang',
    concept_chosen: 'Ordre/Alignement',
    concepts: {
      'Ordre/Alignement': {
        status: 'retenu',
        senses: ['ranger', 'aligner', 'rang', 'file', 'ceux qui sont rangés'],
        proof_ctx: "La racine s-f-f n'a qu'un seul regroupement de sens, tous lies a l'idee de mettre en ordre, en rangees. Le mot saffan saffan (rang apres rang) est un complement d'etat repete qui decrit la disposition des anges. La repetition indique que les rangs sont multiples et ordonnes — pas un seul rang mais rang apres rang, une organisation profonde et totale.",
        axe1_verset: "Le champ lexical du verset combine la venue solennelle (ja'a, rabbuka) avec l'organisation (saffan saffan). Les rangs qualifient la maniere dont les anges se presentent — de maniere ordonnee, disciplinee. Chaque mot du verset renforce l'idee de solennite et d'ordre : le seigneur vient, les anges sont en rangs. Pas de chaos, pas de desordre — meme dans le bouleversement cosmique, l'organisation est maintenue.",
        axe2_voisins: "Le verset precedent (v21) decrivait le chaos terrestre (la terre aplatie). Le verset 22 contraste ce chaos avec l'ordre celeste — la terre est detruite mais les anges arrivent en rangs parfaits. Ce contraste entre destruction terrestre et ordre celeste est significatif. Le verset suivant (v23) ajoute la gehenne amenee — meme la gehenne est amenee, pas lachee au hasard.",
        axe3_sourate: "La sourate 89 montre des civilisations qui ont transgresse et dont l'ordre a ete detruit. Les rangs des anges sont l'antithese de ce desordre humain — ou les humains semaient la corruption (v12), les anges maintiennent l'ordre parfait. Le theme de la sourate est la confrontation entre le desordre humain et l'ordre divin.",
        axe4_coherence: "Le Coran utilise la racine s-f-f dans la sourate 37 (as-Saffat, « ceux qui sont ranges en rangs ») pour decrire les anges qui se tiennent en ordre. En 78:38, les anges se tiennent en rangs le jour ou l'esprit se tiendra debout. La coherence coranique est forte : les rangs d'anges sont un motif constant associe aux moments de manifestation divine.",
        axe5_frequence: "L'ordre et l'alignement sont des expressions de la justice et de la civilisation — la mission du khalifa est d'etablir l'ordre sur terre. Les rangs des anges montrent que cet ideal d'ordre existe deja dans le monde celeste. Le jour du jugement est lui-meme un acte d'ordre : chacun est mis a sa place, rien n'est laisse au hasard."
      }
    }
  }, 4);

  // VA verset 22
  await upsertVA(6015, {
    segments: [
      { fr: 'Et', pos: 'CONJ', phon: 'wa', arabic: 'وَ', word_key: null, is_particle: true, sense_retenu: null, position: 1 },
      { fr: 'viendra', pos: 'V', phon: "jā'a", arabic: 'جَآءَ', word_key: 'jyy', is_particle: false, sense_retenu: 'venir', position: 1 },
      { fr: 'ton seigneur', pos: 'N', phon: 'rabbuka', arabic: 'رَبُّكَ', word_key: 'rbb', is_particle: false, sense_retenu: 'seigneur', position: 2 },
      { fr: 'et les anges', pos: 'N', phon: 'wal-malak', arabic: 'وَٱلْمَلَكُ', word_key: 'mlk', is_particle: false, sense_retenu: 'ange', position: 3 },
      { fr: 'rang', pos: 'N', phon: 'ṣaffan', arabic: 'صَفًّا', word_key: 'sff', is_particle: false, sense_retenu: 'rang', position: 4 },
      { fr: 'après rang', pos: 'N', phon: 'ṣaffan', arabic: 'صَفًّا', word_key: 'sff', is_particle: false, sense_retenu: 'rang', position: 5 }
    ],
    translation_arab: "Et ton seigneur viendra avec les anges, rang après rang",
    full_translation: "et que ton Seigneur viendra ainsi que les Anges, rang par rang",
    translation_explanation: `§DEMARCHE§
Le verbe **ja'a** (جَآءَ) est un verbe a l'accompli (une forme qui presente l'action comme deja realisee ou certaine). En arabe, l'accompli peut exprimer un evenement futur quand sa realisation est certaine — ici, la venue du seigneur est presentee comme un fait accompli, pas comme une hypothese. D'apres les sources etymologiques, la racine j-y-' signifie venir, se presenter.

Le mot **rabbuka** (رَبُّكَ) est un nom en idafa (construction d'appartenance) avec le suffixe -ka (ton). Le rabb est celui qui a l'autorite bienveillante sur ce qui lui appartient — la construction « ton seigneur » cree un lien personnel entre le destinataire du message et l'autorite qui vient.

Le mot **al-malak** (ٱلْمَلَكُ) est un nom defini au singulier a valeur collective — en arabe, le singulier defini peut designer l'ensemble de la categorie. D'apres les sources etymologiques, la racine m-l-k dans la forme malak designe un envoye, un ange. Le mot est coordonne a rabbuka par wa, indiquant que les anges accompagnent le seigneur.

**Saffan saffan** (صَفًّا صَفًّا) est un complement d'etat (hal) repete pour l'intensite. En arabe, la repetition du meme mot sous forme de complement d'etat exprime la multiplicite : « rang apres rang », « en rangs successifs ». Ce n'est pas un seul rang mais une succession de rangs.

§JUSTIFICATION§
**viendra** — Le sens retenu est « venir » du regroupement Venue/Apport. Le verbe « venir » est le plus neutre et fidele au texte. L'alternative « arriver » implique un point d'arrivee precis. L'alternative « apporter » ajouterait un objet qui n'est pas dans le texte.

**seigneur** — Le sens retenu est « seigneur » du regroupement Seigneurie/Autorite bienveillante. Le mot seigneur est choisi car il combine autorite et lien personnel. L'alternative « maitre » est trop dominateur. L'alternative « celui qui eleve » est trop descriptif pour un nom dans une phrase narrative.

**les anges** — Le sens retenu est « ange » du regroupement Ange/Messager. Le mot « ange » est d'usage courant pour designer ces etres envoyes.

**rang apres rang** — Le sens retenu est « rang » du regroupement Ordre/Alignement. Le mot « rang » est le plus naturel pour decrire une disposition ordonnee en lignes.

§CRITIQUE§
Les traductions courantes donnent sensiblement le meme sens pour ce verset. La principale variante est « rang par rang » (Hamidullah) contre « rang apres rang » dans notre traduction. « Rang apres rang » rend mieux la repetition arabe saffan saffan qui insiste sur la succession des rangs, tandis que « rang par rang » evoque une distribution. La difference est minime et ne change pas le sens global du verset.`
  });
  console.log('  v22 done\n');

  // ============================================================
  // VERSET 23 (6016): وَجِا۟ىٓءَ يَوْمَئِذٍۭ بِجَهَنَّمَ ۚ يَوْمَئِذٍ يَتَذَكَّرُ ٱلْإِنسَـٰنُ وَأَنَّىٰ لَهُ ٱلذِّكْرَىٰ
  // "Et la géhenne sera amenée ce jour-là. Ce jour-là l'être humain se rappellera — mais à quoi bon le rappel pour lui ?"
  // ============================================================
  console.log('--- VERSET 23 ---');

  // ð k r (id=2317) — يَتَذَكَّرُ / ٱلذِّكْرَىٰ — forme V reflexive + nom
  await upsertVWA(6016, 'ð k r', 'rappeler', {
    sense_chosen: 'rappeler',
    concept_chosen: 'Rappel/Mémoire',
    concepts: {
      'Rappel/Mémoire': {
        status: 'retenu',
        senses: ['rappeler', 'mentionner', 'invoquer', 'mémoire'],
        proof_ctx: "Le sens Rappel/Memoire regroupe tous les emplois lies a l'acte de faire revenir quelque chose a la conscience. Le verbe yatadhakkaru (forme V) est la forme reflexive — l'etre humain se rappelle a lui-meme, il fait revenir ses souvenirs. Le nom al-dhikra (le rappel) est la forme nominale du meme acte. Le regroupement Masculinite (male) est completement hors sujet dans ce contexte de souvenir et de prise de conscience.",
        axe1_verset: "Le champ lexical du verset combine la venue de la gehenne (bilan), le rappel (memoire) et l'interrogation desabusee (anna = a quoi bon). Le verbe yatadhakkaru (il se rappellera) decrit le moment ou l'etre humain retrouve la memoire de ce qu'il a fait et de ce qu'on lui avait dit. Le nom al-dhikra (le rappel) est l'objet de l'interrogation — le rappel lui-meme devient inutile puisque le temps d'agir est passe. Le verset cree un contraste entre le fait de se rappeler et l'inutilite de ce rappel — la memoire revient trop tard.",
        axe2_voisins: "Le verset 22 montrait la venue du seigneur et des anges — c'est la manifestation qui declenche le rappel. Le verset 24 donne le contenu de ce rappel : « si seulement j'avais avance pour ma vie ». Le rappel est donc le lien entre la manifestation (v22) et le regret (v24). Les versets 15-20 montraient l'humain inconscient, attache a ses biens — ici la conscience revient, mais trop tard.",
        axe3_sourate: "La sourate 89 est construite sur le theme de l'oubli et de la prise de conscience tardive. L'etre humain oublie pendant sa vie terrestre (v15-20 : il croit que l'honneur ou l'humiliation definissent son rapport au seigneur) et se rappelle au jour du jugement. Le rappel tardif est le pivot de la sourate — il revele que l'etre humain savait mais avait choisi d'oublier.",
        axe4_coherence: "Le Coran utilise la racine dh-k-r de maniere recurrente pour decrire l'acte de se souvenir et ses consequences. En 6:68, « quand tu te rappelles, ne reste pas avec les injustes ». En 80:4, « peut-etre se rappellera-t-il ». Le rappel est presente comme une faculte que l'humain possede mais qu'il n'utilise pas toujours a temps. Le verset 89:23 pousse cette idee a son terme : le rappel vient, mais le moment d'agir est passe.",
        axe5_frequence: "La mission du khalifa implique une conscience active — se rappeler ses responsabilites, se rappeler les enseignements. Le rappel tardif de v23 est l'echec de cette conscience : le khalifa n'a pas utilise sa faculte de rappel quand elle pouvait encore servir. L'interrogation « a quoi bon le rappel ? » n'est pas rhetorique — elle pointe une realite : le rappel sans action est vain."
      },
      'Masculinité': { status: 'nul', senses: ['mâle'], proof_ctx: "Le contexte est celui de la memoire et de la prise de conscience, pas du genre." }
    }
  }, 5);

  // ans (id=866) — ٱلْإِنسَـٰنُ — nom defini
  await upsertVWA(6016, 'ans', 'être humain', {
    sense_chosen: 'être humain',
    concept_chosen: 'Familiarité/Sociabilité',
    concepts: {
      'Familiarité/Sociabilité': {
        status: 'retenu',
        senses: ['être familier', 'être sociable', 'être humain', 'humains (ins)'],
        proof_ctx: "La racine a-n-s designe a l'origine ce qui est familier, sociable, apprivoise — par opposition a ce qui est sauvage. L'etre humain (al-insan) tire son nom de cette racine parce qu'il est l'etre sociable par excellence, celui qui vit en communaute. Le sens Perception (percevoir, voir de loin) est un sens physique qui ne correspond pas au contexte ou al-insan designe l'etre humain en tant que sujet moral qui se rappelle ses actes.",
        axe1_verset: "Le mot al-insan (l'etre humain) est le sujet du verbe yatadhakkaru (il se rappelle). Le champ lexical est celui de la prise de conscience morale — l'etre humain, celui qui est sociable et familier, se retrouve face a ses actes. Le nom est defini par l'article al-, ce qui designe l'etre humain en general, pas un individu specifique. C'est toute l'humanite qui se rappelle ce jour-la.",
        axe2_voisins: "Les versets 15-20 utilisaient al-insan pour decrire l'etre humain dans son comportement terrestre (« quand son seigneur l'eprouve... »). Le meme mot est repris en v23 pour montrer le meme etre humain face au bilan. La continuite du mot cree un lien entre le comportement et sa consequence — c'est le meme insan qui s'accrochait aux biens et qui maintenant se rappelle.",
        axe3_sourate: "L'etre humain (al-insan) est le sujet central de la sourate 89. Il apparait en v15 (quand son seigneur l'eprouve) et en v23 (quand il se rappelle). La sourate trace le parcours de l'insan depuis son comportement sur terre jusqu'a sa prise de conscience au jour du bilan.",
        axe4_coherence: "Le Coran utilise al-insan de maniere constante pour designer l'etre humain en tant qu'etre moral et responsable. En 76:1, « il fut un temps ou l'insan n'etait rien de mentionne ». En 95:4, « nous avons cree l'insan dans la meilleure constitution ». L'insan est toujours presente comme un etre doue de capacites et de responsabilites — c'est cet etre qui, au jour du bilan, se rappelle.",
        axe5_frequence: "L'insan est le khalifa — l'etre charge d'une mission sur terre. En v23, ce khalifa fait face a ce qu'il a fait de sa mission. Le mot al-insan (celui qui est sociable, familier) rappelle que cet etre a ete cree pour vivre en communaute et agir avec responsabilite. Son rappel tardif est la mesure de son echec a utiliser ses capacites."
      },
      'Perception': { status: 'nul', senses: ['percevoir', 'voir de loin'], proof_ctx: "Le contexte est celui de l'etre humain en tant que sujet moral, pas de la perception visuelle." }
    }
  }, 6);

  // VA verset 23
  await upsertVA(6016, {
    segments: [
      { fr: 'Et', pos: 'CONJ', phon: 'wa', arabic: 'وَ', word_key: null, is_particle: true, sense_retenu: null, position: 1 },
      { fr: 'sera amenee', pos: 'V', phon: "jī'a", arabic: 'جِا۟ىٓءَ', word_key: 'jyy', is_particle: false, sense_retenu: 'venir', position: 1 },
      { fr: 'ce jour-la', pos: 'T', phon: "yawma'iḏin", arabic: 'يَوْمَئِذٍ', word_key: null, is_particle: true, sense_retenu: null, position: 2 },
      { fr: 'la gehenne', pos: 'PN', phon: 'bi-jahannam', arabic: 'بِجَهَنَّمَ', word_key: null, is_particle: false, sense_retenu: null, position: 3 },
      { fr: 'Ce jour-la', pos: 'T', phon: "yawma'iḏin", arabic: 'يَوْمَئِذٍ', word_key: null, is_particle: true, sense_retenu: null, position: 4 },
      { fr: 'se rappellera', pos: 'V', phon: 'yataḏakkaru', arabic: 'يَتَذَكَّرُ', word_key: 'ð k r', is_particle: false, sense_retenu: 'rappeler', position: 5 },
      { fr: "l'etre humain", pos: 'N', phon: 'al-insān', arabic: 'ٱلْإِنسَـٰنُ', word_key: 'ans', is_particle: false, sense_retenu: 'être humain', position: 6 },
      { fr: 'mais a quoi bon', pos: 'INTG', phon: 'wa-annā', arabic: 'وَأَنَّىٰ', word_key: null, is_particle: true, sense_retenu: null, position: 7 },
      { fr: 'pour lui', pos: 'PRON', phon: 'lahu', arabic: 'لَهُ', word_key: null, is_particle: true, sense_retenu: null, position: 8 },
      { fr: 'le rappel', pos: 'N', phon: 'aḏ-ḏikrā', arabic: 'ٱلذِّكْرَىٰ', word_key: 'ð k r', is_particle: false, sense_retenu: 'rappeler', position: 9 }
    ],
    translation_arab: "Et la gehenne sera amenee ce jour-la. Ce jour-la, l'etre humain se rappellera — mais a quoi bon le rappel pour lui ?",
    full_translation: "et que ce jour-là, on amènera l'Enfer ; ce jour-là, l'homme se rappellera. Mais à quoi lui servira de se rappeler ?",
    translation_explanation: `§DEMARCHE§
Le verbe **ji'a** (جِا۟ىٓءَ) est ici au passif (une forme qui dit que l'action est subie) — la gehenne est amenee, elle ne vient pas d'elle-meme. La preposition **bi** (بِ) introduit l'objet amene : la gehenne (jahannam, nom propre). L'expression « on amenera la gehenne » utilise le passif impersonnel — le texte ne dit pas qui l'amene.

**Yawma'idhin** (يَوْمَئِذٍ) signifie « ce jour-la » — il fait reference au jour decrit depuis le verset 21 (l'aplatissement de la terre). L'expression est repetee deux fois dans le verset, ce qui cree une insistance : ce jour-la la gehenne sera amenee, ET ce jour-la l'etre humain se rappellera. La repetition lie les deux evenements dans le meme instant.

Le verbe **yatadhakkaru** (يَتَذَكَّرُ) est a la forme V (une forme reflexive qui dit que la personne fait l'action sur elle-meme). En arabe, la forme V de dh-k-r signifie « se rappeler a soi-meme » — l'etre humain fait revenir ses souvenirs, ses actes, ce qu'on lui avait dit. C'est un effort conscient de memoire.

Le mot **al-dhikra** (ٱلذِّكْرَىٰ) est le nom verbal feminin de la meme racine — le rappel, l'acte de se souvenir. L'interrogation **anna** (أَنَّىٰ) signifie « a quoi bon ? » ou « comment ? » — elle exprime l'inutilite du rappel a ce stade.

§JUSTIFICATION§
**se rappellera** — Le sens retenu est « rappeler » du regroupement Rappel/Memoire. La forme V (reflexive) impose « se rappeler » plutot que « rappeler a quelqu'un d'autre ». Le verbe « se rappeler » est choisi car il decrit precisement l'acte de faire revenir un souvenir a sa propre conscience. L'alternative « mentionner » ne convient pas a la forme reflexive. L'alternative « invoquer » ajouterait une dimension religieuse absente du texte.

**l'etre humain** — Le sens retenu est « etre humain » du regroupement Familiarite/Sociabilite. Le mot al-insan designe l'humain en general. L'alternative « l'homme » est acceptable mais « l'etre humain » est plus precis car al-insan inclut les femmes.

**le rappel** — Meme racine, meme regroupement. Le nom al-dhikra est le rappel lui-meme, l'acte de se souvenir.

§CRITIQUE§
**Enfer vs gehenne** — Les traductions courantes donnent « l'Enfer » (Hamidullah) pour jahannam. Le mot « enfer » est un terme du vocabulaire religieux chretien qui evoque les representations medievales de feu eternel. Le mot arabe jahannam est un nom propre emprunte a l'hebreu ge-hinnom (la vallee de Hinnom). Nous gardons « gehenne » qui est la transcription fidele du terme original sans ajouter les connotations chretiennes.

**homme vs etre humain** — Les traductions courantes donnent « l'homme » pour al-insan. Le mot arabe al-insan est generique et designe l'etre humain (homme et femme). « Etre humain » est plus fidele au sens du terme arabe.`
  });
  console.log('  v23 done\n');

  // ============================================================
  // VERSET 24 (6017): يَقُولُ يَـٰلَيْتَنِى قَدَّمْتُ لِحَيَاتِى
  // "Il dit : si seulement j'avais avancé pour ma vie !"
  // ============================================================
  console.log('--- VERSET 24 ---');

  // qdm (id=698) — قَدَّمْتُ — forme II accompli
  await upsertVWA(6017, 'qdm', 'avancer', {
    sense_chosen: 'avancer',
    concept_chosen: 'Antériorité/Établissement',
    concepts: {
      'Antériorité/Établissement': {
        status: 'retenu',
        senses: ['précéder', 'ancien', 'pied', 'avancer'],
        proof_ctx: "La racine q-d-m n'a qu'un seul regroupement de sens, tous lies a l'idee de ce qui est en avant, ce qui precede. Le verbe qaddamtu (forme II accompli, premiere personne) signifie « j'ai avance, j'ai mis en avant, j'ai prepare en avance ». La forme II (fa''ala) ajoute l'intensite — ce n'est pas juste preceder, c'est activement mettre quelque chose en avant. Dans le contexte du verset, l'humain regrette de ne pas avoir mis en avant (prepare) des actes pour sa vie future. Le pied (qadam) est le sens physique premier — ce qui est en avant du corps, ce qui avance en premier.",
        axe1_verset: "Le champ lexical du verset est celui du regret et de la preparation manquee. Le verbe qaddamtu (j'avais avance) est precede de ya laytani (si seulement j'avais) qui exprime le souhait irrealisable. L'expression « avancer quelque chose pour sa vie » signifie mettre en avant des actes, des preparations. Le complement li-hayati (pour ma vie) donne la direction de cette avancee — tout ce qui est mis en avant va vers la vie (future). Le sens « avancer » est le seul qui fonctionne avec la preposition li (pour) et l'objet « ma vie ».",
        axe2_voisins: "Le verset 23 montrait l'etre humain qui se rappelle trop tard. Le verset 24 donne le contenu de ce rappel : le regret de ne pas avoir prepare. Le verset 25 enchaine avec le chatiment que personne ne peut egalre. L'avancee manquee est donc coincee entre le rappel tardif et le chatiment — l'humain realise qu'il n'a rien prepare et qu'il est trop tard.",
        axe3_sourate: "Les versets 15-20 montraient l'humain qui s'accrochait aux biens et ne nourrissait pas les pauvres. Le verset 24 revele ce que cet humain aurait du faire : avancer des actes pour sa vie. La sourate cree un parcours : comportement defaillant (v15-20) → bouleversement cosmique (v21-22) → rappel tardif (v23) → regret de n'avoir rien avance (v24). L'avancee est l'antithese de l'accumulation egoiste des versets precedents.",
        axe4_coherence: "Le Coran utilise la racine q-d-m dans d'autres contextes de preparation pour la vie future. En 2:110, « ce que vous aurez avance de bien pour vous-memes, vous le retrouverez aupres de Dieu ». En 73:20, « ce que vous avancerez pour vous-memes de bien ». La coherence est forte — qaddama est le verbe coranique standard pour « mettre en avant des actes pour sa vie future ». Le verset 89:24 s'inscrit parfaitement dans cette utilisation.",
        axe5_frequence: "La mission du khalifa est d'agir sur terre pour le bien — avancer des actes est l'expression meme de cette mission. Le regret de v24 est le regret de ne pas avoir rempli sa mission. L'humain realise qu'il avait un temps d'action et qu'il l'a gaspille en accumulation egoiste au lieu d'avancer des actes utiles."
      }
    }
  }, 3);

  // hyy (id=404) — حَيَاتِى — nom en idafa
  await upsertVWA(6017, 'hyy', 'vie', {
    sense_chosen: 'vie',
    concept_chosen: 'Vie/Vivant',
    concepts: {
      'Vie/Vivant': {
        status: 'retenu',
        senses: ['vivre', 'vie', 'vivant', 'donner la vie'],
        proof_ctx: "La racine h-y-y possede quatre regroupements de sens, mais dans le contexte de hayati (ma vie), seul Vie/Vivant est pertinent. Le mot hayat designe l'existence elle-meme, l'etat d'etre en vie. Avec le suffixe possessif -i (ma), il s'agit de « ma vie » — l'existence future de l'etre humain apres la mort. Les sens Salutation/Pudeur, Serpent et Eau/Liquide sont des emplois isoles hors sujet.",
        axe1_verset: "Le mot li-hayati (pour ma vie) est le complement de but du verbe qaddamtu (j'avais avance). Le champ lexical combine le regret (ya laytani), la preparation manquee (qaddamtu) et l'objet de cette preparation (hayati). La vie est ce vers quoi l'humain aurait du orienter ses actes — c'est la vie future, celle qui commence apres la mort, pas la vie terrestre deja passee.",
        axe2_voisins: "Le verset 23 evoquait le rappel tardif — la vie dont parle v24 est ce que l'humain retrouve apres le rappel. Les versets 15-20 parlaient de la vie terrestre (« quand son seigneur l'eprouve... »). Le mot hayati en v24 designe la vie qui suit — celle a laquelle l'humain n'a rien prepare. Le contraste entre la vie terrestre gaspillee et la vie future non preparee est le coeur du regret.",
        axe3_sourate: "La sourate oppose la vie terrestre (ou l'humain accumule des biens) et la vie future (pour laquelle il n'a rien avance). La vie est le fil conducteur — tout ce que l'humain fait sur terre conditionne sa vie future. Le verset 24 est le moment ou cette verite eclate dans la conscience de l'humain.",
        axe4_coherence: "Le Coran utilise hayat dans la distinction entre la vie d'ici-bas (al-hayat al-dunya) et la vie ultime (al-hayat al-akhira). En 87:16-17, « vous preferez la vie d'ici-bas, alors que la vie ultime est meilleure et plus durable ». Le verset 89:24 s'inscrit dans cette thematique : l'humain regrette de ne pas avoir prepare pour la vraie vie.",
        axe5_frequence: "La vie est le cadre meme de la mission du khalifa. L'humain vit sur terre pour accomplir une mission — la vie future est le resultat de cette mission. Le regret de v24 est celui d'avoir vecu sans preparer la suite, d'avoir pris la vie terrestre pour fin en soi au lieu de la voir comme un moyen."
      },
      'Salutation/Pudeur': { status: 'nul', senses: ['saluer', 'pudeur'], proof_ctx: "Sans rapport avec le contexte de la vie et du regret." },
      'Sens isolé/Serpent': { status: 'nul', senses: ['serpent'], proof_ctx: "Hors sujet." },
      'Eau/Liquide': { status: 'nul', senses: ['pluie'], proof_ctx: "Hors sujet." }
    }
  }, 4);

  // VA verset 24
  await upsertVA(6017, {
    segments: [
      { fr: 'Il dit', pos: 'V', phon: 'yaqūlu', arabic: 'يَقُولُ', word_key: 'qwl', is_particle: false, sense_retenu: 'dire', position: 1 },
      { fr: 'si seulement', pos: 'ACC', phon: 'yā laytanī', arabic: 'يَـٰلَيْتَنِى', word_key: null, is_particle: true, sense_retenu: null, position: 2 },
      { fr: "j'avais avance", pos: 'V', phon: 'qaddamtu', arabic: 'قَدَّمْتُ', word_key: 'qdm', is_particle: false, sense_retenu: 'avancer', position: 3 },
      { fr: 'pour ma vie', pos: 'N', phon: 'li-ḥayātī', arabic: 'لِحَيَاتِى', word_key: 'hyy', is_particle: false, sense_retenu: 'vie', position: 4 }
    ],
    translation_arab: "Il dit : si seulement j'avais avance pour ma vie !",
    full_translation: "Il dira : « Hélas ! Que n'ai-je fait du bien pour ma vie future ! »",
    translation_explanation: `§DEMARCHE§
Le verbe **yaqulu** (يَقُولُ) est a l'inaccompli (une forme qui presente l'action en cours ou habituelle). L'etre humain est en train de parler — le texte nous fait entendre sa parole au moment meme ou il la prononce. L'inaccompli rend la scene vivante, comme si on y assistait.

**Ya laytani** (يَـٰلَيْتَنِى) est une exclamation de souhait irrealisable. Le ya est une particule d'appel/exclamation, layta signifie « si seulement » et le suffixe -ni est le pronom de la premiere personne. L'expression complete signifie « oh, si seulement j'avais... » — c'est un regret pur, sans espoir de realisation.

Le verbe **qaddamtu** (قَدَّمْتُ) est une forme II (une forme intensive qui dit que l'action est faite avec force ou effort) a l'accompli (acheve), premiere personne. D'apres les sources etymologiques, la racine q-d-m signifie etre en avant, preceder. La forme II ajoute l'idee de « mettre en avant activement » — envoyer devant soi. L'accompli avec layta exprime l'irreel du passe : « si seulement j'avais avance ».

La preposition **li** (لِ) suivie de **hayati** (حَيَاتِى, ma vie) donne le but de l'avancee : « pour ma vie ». Le texte ne dit pas « pour ma vie future » — il dit simplement « pour ma vie ». Le mot hayat, avec le suffixe possessif -i (ma), designe la vie que l'etre humain decouvre au moment du jugement.

§JUSTIFICATION§
**avance** — Le sens retenu est « avancer » du regroupement Anteriorite/Etablissement. Le verbe « avancer » au sens de « mettre en avant, preparer en avance » est choisi car il rend l'idee de q-d-m (envoyer devant soi). L'alternative « preceder » ne fonctionne pas avec la construction « j'avais precede pour ma vie ». L'alternative « pied » est le sens physique qui ne correspond pas au verbe.

**vie** — Le sens retenu est « vie » du regroupement Vie/Vivant. Le mot « vie » est le plus direct et fidele a hayat.

§CRITIQUE§
**avance vs fait du bien** — Les traductions courantes ajoutent « du bien » qui n'est pas dans le texte arabe. Hamidullah traduit « que n'ai-je fait du bien pour ma vie future ». Le texte dit seulement qaddamtu li-hayati — « j'avais avance pour ma vie ». Le mot « bien » est un ajout invisible qui oriente la lecture. De meme, « vie future » ajoute « future » qui n'est pas dans le texte — le texte dit « ma vie » sans preciser si c'est la vie terrestre ou la vie future. L'etymologie pure garde l'ambiguite du texte.

**Si seulement vs Helas** — Hamidullah traduit laytani par « helas » qui est une exclamation de tristesse. Mais layta signifie specifiquement « si seulement » — un souhait irrealisable, pas une simple plainte. La nuance est : l'humain ne se plaint pas seulement, il formule un souhait precis (avoir avance) qui ne peut plus se realiser.`
  });
  console.log('  v24 done\n');

  // ============================================================
  // VERSET 25 (6018): فَيَوْمَئِذٍ لَّا يُعَذِّبُ عَذَابَهُۥٓ أَحَدٌ
  // "Alors ce jour-la, personne ne châtie de son châtiment"
  // ============================================================
  console.log('--- VERSET 25 ---');

  // eḏb (id=309) — يُعَذِّبُ / عَذَابَهُۥٓ — forme II + mafoul mutlaq
  await upsertVWA(6018, 'eḏb', 'châtier', {
    sense_chosen: 'châtier',
    concept_chosen: 'Châtiment/Punition',
    concepts: {
      'Châtiment/Punition': {
        status: 'retenu',
        senses: ['châtier', 'punir', 'châtiment'],
        proof_ctx: "Le sens Chatiment/Punition regroupe tous les emplois lies a l'acte de faire subir une peine pour une faute. Le verbe yu'adhdhibu (forme II inaccompli) signifie « chatier » — la forme II ajoute l'intensite a l'acte. Le nom 'adhabahu (son chatiment) est le mafoul mutlaq (complement absolu) avec le pronom possessif hu (son). Les regroupements Eau/Liquide et Doux sont des sens isoles qui n'ont aucun rapport avec le contexte de punition au jour du jugement.",
        axe1_verset: "Le champ lexical du verset est celui de l'incomparabilite du chatiment. Le verbe yu'adhdhibu et le nom 'adhabahu viennent de la meme racine — la construction mafoul mutlaq (chatier de son chatiment) insiste sur l'intensite et l'unicite de ce chatiment. Le mot ahad (personne) avec la negation la donne : personne ne chatiera de son chatiment. Chaque mot du verset renforce l'idee qu'aucune punition humaine ne peut egalre celle de ce jour.",
        axe2_voisins: "Le verset 24 montrait le regret de l'humain. Le verset 25 passe du regret a la consequence — le chatiment vient apres la prise de conscience. Le verset 26 complete le tableau avec les liens (wathaq). L'enchainement regret → chatiment → liens decrit une progression inexorable. Les versets v27-30 opposeront a ce chatiment la recompense de l'ame sereine.",
        axe3_sourate: "La sourate 89 a deja evoque le chatiment des civilisations anciennes (v13 : « ton seigneur a verse sur eux un fouet de chatiment »). Le chatiment de v25 est la version ultime et definitive — ce n'est plus un chatiment historique mais le chatiment du jour final. Le theme du chatiment traverse toute la sourate : chatiment des anciens (v6-13), annonce du jour (v21-23), chatiment final (v25-26).",
        axe4_coherence: "Le Coran utilise la racine '-dh-b de maniere constante pour le chatiment divin. En 2:165, « le chatiment est pour ceux qui font le mal ». En 3:56, « je les chatierai d'un chatiment severe ». La construction mafoul mutlaq (yu'adhdhibu 'adhabahu) est une forme d'insistance specifique qui souligne l'intensite. Le verset 89:25 s'inscrit dans cette utilisation coherente tout en ajoutant la dimension d'incomparabilite (personne ne peut chatier ainsi).",
        axe5_frequence: "Dans la mission du khalifa, le chatiment est la consequence du manquement a la mission. L'humain charge de justice et de civilisation qui a choisi l'accumulation egoiste (v17-20) fait face a un chatiment que personne d'autre ne peut infliger. La responsabilite est proportionnelle a la mission confiee — plus la mission est elevee, plus les consequences du manquement sont graves."
      },
      'Eau/Liquide': { status: 'nul', senses: ['eau douce'], proof_ctx: "Sens physique isole sans rapport avec le contexte de punition." },
      'Sens isolé/Doux': { status: 'nul', senses: ['doux'], proof_ctx: "Sens physique isole, hors sujet." }
    }
  }, 3);

  // ahd (id=2574) — أَحَدٌ — nom indefini
  await upsertVWA(6018, 'ahd', 'personne', {
    sense_chosen: 'personne',
    concept_chosen: 'Quiconque/Indéfini',
    concepts: {
      'Quiconque/Indéfini': {
        status: 'retenu',
        senses: ['quiconque', 'personne', 'quelque chose'],
        proof_ctx: "Le mot ahad dans un contexte negatif (la ... ahadun) signifie « personne » — c'est l'emploi indefini de la racine a-h-d. Les autres regroupements de sens sont hors sujet : Unicite/Indivisibilite decrit la qualite d'etre un et indivisible, Solitude/Isolement decrit l'etat d'etre seul, et Nombre/Quantification decrit la numeration. La distinction philosophique est : dans un contexte negatif, ahad perd sa valeur de « un/unique » pour devenir un pronom indefini equivalent a « personne ». C'est un emploi syntaxique, pas semantique — le sens d'unicite n'est pas active ici.",
        axe1_verset: "Le mot ahad est le sujet du verbe yu'adhdhibu avec la negation la — « personne ne chatiera ». Le champ lexical est celui de l'incomparabilite : personne (ahad) ne peut faire ce que fait le chatiment decrit. Le mot ahad en position de sujet avec negation est un emploi courant en arabe pour exprimer l'impossibilite absolue. Aucun etre ne peut chatier de ce chatiment.",
        axe2_voisins: "Le meme mot ahad est repete au verset 26 (personne ne lie de ses liens) — la repetition cree un parallelisme qui renforce l'incomparabilite. Le verset 24 montrait le regret, les versets 25-26 montrent la realite : personne ne peut rivaler avec cette justice.",
        axe3_sourate: "La sourate decrit des chatiments historiques (v6-13) infliges par les mains d'agents divers. Au verset 25, on passe a un chatiment que personne ne peut egalre — c'est l'aboutissement ultime de la thematique de la puissance divine vs la pretention humaine.",
        axe4_coherence: "Le Coran utilise ahad dans des constructions negatives pour exprimer l'impossibilite totale. En 72:22, « personne (ahad) ne peut me proteger contre Dieu ». La construction la ... ahadun est un motif coranique recurrent pour marquer les limites absolues de la capacite humaine.",
        axe5_frequence: "L'incomparabilite du chatiment rappelle au khalifa que ses actes ont des consequences que rien ni personne ne peut attenuer. La mission implique une responsabilite totale — personne ne peut intervenir pour reduire la consequence."
      },
      'Unicité/Indivisibilité': { status: 'nul', senses: ['déclarer l\'unicité', 'un (premier des nombres)'], proof_ctx: "Le contexte syntaxique (negation + sujet) active le sens indefini, pas le sens d'unicite." },
      'Solitude/Isolement': { status: 'nul', senses: ['être seul'], proof_ctx: "Hors sujet dans ce contexte negatif." },
      'Nombre/Quantification': { status: 'nul', senses: ['rendre onze'], proof_ctx: "Hors sujet." },
      'Sens isolé/Dimanche': { status: 'nul', senses: ['dimanche'], proof_ctx: "Hors sujet." },
      'Sens isolé/Calamité': { status: 'nul', senses: ['calamité'], proof_ctx: "Hors sujet." },
      'Minéral/Terre': { status: 'nul', senses: ['tradition isolée'], proof_ctx: "Hors sujet." }
    }
  }, 5);

  // VA verset 25
  await upsertVA(6018, {
    segments: [
      { fr: 'Alors', pos: 'CONJ', phon: 'fa', arabic: 'فَ', word_key: null, is_particle: true, sense_retenu: null, position: 1 },
      { fr: 'ce jour-la', pos: 'T', phon: "yawma'iḏin", arabic: 'يَوْمَئِذٍ', word_key: null, is_particle: true, sense_retenu: null, position: 1 },
      { fr: 'ne', pos: 'NEG', phon: 'lā', arabic: 'لَّا', word_key: null, is_particle: true, sense_retenu: null, position: 2 },
      { fr: 'chatie', pos: 'V', phon: "yu'aḏḏibu", arabic: 'يُعَذِّبُ', word_key: 'eḏb', is_particle: false, sense_retenu: 'châtier', position: 3 },
      { fr: 'de son chatiment', pos: 'N', phon: "'aḏābahu", arabic: 'عَذَابَهُۥٓ', word_key: 'eḏb', is_particle: false, sense_retenu: 'châtiment', position: 4 },
      { fr: 'personne', pos: 'N', phon: 'aḥad', arabic: 'أَحَدٌ', word_key: 'ahd', is_particle: false, sense_retenu: 'personne', position: 5 }
    ],
    translation_arab: "Alors ce jour-la, personne ne chatie de son chatiment",
    full_translation: "Ce jour-là donc, nul ne saura châtier comme Lui châtie",
    translation_explanation: `§DEMARCHE§
La particule **fa** (فَ) est une conjonction de consequence — « alors, donc ». Elle relie le regret du verset 24 a la realite du chatiment : l'humain regrette, ALORS (en consequence) ce jour-la personne ne chatie de son chatiment.

**Yawma'idhin** (يَوْمَئِذٍ) signifie « ce jour-la ». C'est le meme jour que celui des versets 21-23.

Le verbe **yu'adhdhibu** (يُعَذِّبُ) est une forme II (une forme intensive qui decrit un acte accompli avec force) a l'inaccompli. D'apres les sources etymologiques, la racine '-dh-b signifie chatier, punir, infliger une peine. La forme II ajoute l'intensite — ce n'est pas une simple punition mais un chatiment intense.

Le mot **'adhabahu** (عَذَابَهُۥٓ) est le nom verbal de la meme racine avec le pronom suffixe hu (son). La construction « chatier de son chatiment » est un mafoul mutlaq (complement absolu) — une figure arabe qui repete le verbe sous forme de nom pour insister sur l'intensite. Le pronom « son » renvoie a celui dont on parle dans le contexte (le seigneur mentionne en v22).

Le mot **ahad** (أَحَدٌ) est un nom indefini qui, dans une phrase negative, signifie « personne ». La construction complete : la yu'adhdhibu 'adhabahu ahadun = personne ne chatiera de son chatiment.

§JUSTIFICATION§
**chatie** — Le sens retenu est « chatier » du regroupement Chatiment/Punition. Le mot « chatier » est choisi plutot que « punir » pour respecter la figure du mafoul mutlaq : « chatier de son chatiment » conserve le lien etymologique entre le verbe et le nom, comme en arabe. « Punir de sa punition » serait aussi correct mais « chatier / chatiment » est plus precis.

**personne** — Le sens retenu est « personne » du regroupement Quiconque/Indefini. Dans le contexte negatif, ahad signifie « personne » — aucun etre.

§CRITIQUE§
**chatier vs savoir chatier** — Hamidullah traduit « nul ne saura chatier comme Lui chatie ». Le texte arabe dit simplement « personne ne chatie de son chatiment » — il n'y a pas le verbe « savoir » (ya'lamu ou yastati'u) dans le texte. L'ajout de « saura » est une interpretation qui ajoute l'idee de capacite. Le texte est plus direct : il enonce le fait brut que personne ne chatie de ce chatiment, sans expliquer pourquoi (incapacite, interdiction, ou autre).`
  });
  console.log('  v25 done\n');

  console.log('=== PIPELINE S89 v21-25 TERMINÉ ===');
})();
