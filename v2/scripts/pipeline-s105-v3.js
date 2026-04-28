require('dotenv').config({path: '.env.local'});
const {createClient} = require('@supabase/supabase-js');
const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

async function run() {
  // =============================================
  // VERSE 105:3 — وَأَرْسَلَ عَلَيْهِمْ طَيْرًا أَبَابِيلَ
  // Words: rsl (envoyer), tyr (oiseaux), abl (groupes)
  // =============================================

  const v3_vwa = [
    {
      verse_id: 6191,
      word_key: 'rsl',
      sense_chosen: 'envoi',
      position: 1,
      analysis_axes: {
        sense_chosen: 'envoi',
        concept_chosen: 'Envoi/Message',
        concepts: {
          'Envoi/Message': {
            senses: ['envoyer', 'messager', 'message', 'lib\u00e9rer'],
            status: 'retenu',
            proof_ctx: "Le sens retenu est 'Envoi/Message'. Le verbe arsala est un accompli de la forme IV de la racine r-s-l (une forme qui ajoute l'id\u00e9e de 'faire faire' ou 'accorder'). D'apr\u00e8s les sources \u00e9tymologiques, arsala signifie envoyer, d\u00e9p\u00eacher, lancer quelqu'un ou quelque chose vers une destination. Ici arsala \u02bfalayhim tayran signifie 'Il a envoy\u00e9 sur eux des oiseaux'. L'envoi est un acte ext\u00e9rieur, directionnel (de l'envoyeur vers la cible), et ponctuel dans son d\u00e9clenchement mais durable dans ses effets. Distinction avec 'Eau/Liquide' : le sens de pluie est d\u00e9riv\u00e9 de l'envoi (la pluie est envoy\u00e9e du ciel), mais ici le compl\u00e9ment est tayran (des oiseaux), pas de l'eau.",
            axe1_verset: "Le verset d\u00e9crit l'envoi d'oiseaux sur les compagnons. Le champ lexical est celui de l'action militaire ou punitive : envoyer (rsl), sur eux (\u02bfalayhim), oiseaux (tyr), en groupes (abl). Le verbe arsala est le d\u00e9clencheur de l'action. L'envoi est dirig\u00e9 vers une cible pr\u00e9cise (\u02bfalayhim = sur eux), ce qui confirme la dimension directionnelle de l'envoi.",
            axe2_voisins: "Le verset 2 dit que la ruse a \u00e9t\u00e9 rendue vaine. Le verset 3 montre le premier moyen utilis\u00e9 : l'envoi d'oiseaux. Les versets 4-5 d\u00e9taillent ce que font ces oiseaux (lancer des pierres) et le r\u00e9sultat (paille m\u00e2ch\u00e9e). L'envoi au verset 3 est la mise en mouvement de la r\u00e9ponse divine.",
            axe3_sourate: "La sourate montre comment Dieu a r\u00e9pondu \u00e0 la force brute. L'envoi d'oiseaux est la r\u00e9ponse concr\u00e8te. Le th\u00e8me est l'opposition entre la force humaine (l'\u00e9l\u00e9phant) et la r\u00e9ponse divine (des oiseaux \u2014 cr\u00e9atures bien plus petites mais envoy\u00e9es par l'autorit\u00e9 supr\u00eame).",
            axe4_coherence: "Le verbe arsala est utilis\u00e9 dans le Coran pour l'envoi de messagers (33:45 'Nous t'avons envoy\u00e9 comme t\u00e9moin'), de vents (7:57 'Il envoie les vents'), de pluie (25:48 'Il a envoy\u00e9 les vents annonciateurs de Sa mis\u00e9ricorde'). Le sens d'envoyer est constant dans toutes ces occurrences.",
            axe5_frequence: "L'envoi est un acte d'autorit\u00e9 : celui qui envoie a le pouvoir de d\u00e9p\u00eacher. Pour la mission humaine, la sourate montre que l'autorit\u00e9 divine peut utiliser les moyens les plus simples (des oiseaux) pour d\u00e9faire la force la plus imposante (un \u00e9l\u00e9phant)."
          },
          'Eau/Liquide': {
            senses: ['pluie'],
            status: 'nul',
            proof_ctx: "Le sens de pluie est une extension de l'envoi (la pluie est envoy\u00e9e du ciel). Ici le compl\u00e9ment est tayran (oiseaux), pas de l'eau. Le contexte est sans ambigu\u00eft\u00e9."
          },
          'Divers': {
            senses: ['cheveux l\u00e2ch\u00e9s'],
            status: 'nul',
            proof_ctx: "Sens isol\u00e9 sans rapport avec le contexte du verset."
          }
        }
      }
    },
    {
      verse_id: 6191,
      word_key: 'tyr',
      sense_chosen: 'oiseau',
      position: 2,
      analysis_axes: {
        sense_chosen: 'oiseau',
        concept_chosen: 'Vol/Oiseau',
        concepts: {
          'Vol/Oiseau': {
            senses: ['oiseau', 'voler'],
            status: 'retenu',
            proof_ctx: "Le sens retenu est 'Vol/Oiseau'. Le mot tayran est un nom ind\u00e9fini au cas direct (accusatif), compl\u00e9ment du verbe arsala : 'Il a envoy\u00e9 des oiseaux'. D'apr\u00e8s les sources \u00e9tymologiques, tayr d\u00e9signe les cr\u00e9atures ail\u00e9es qui se d\u00e9placent dans les airs. Le nom ind\u00e9fini (sans al-) indique des oiseaux non sp\u00e9cifi\u00e9s \u2014 le texte ne pr\u00e9cise pas de quelle esp\u00e8ce. Distinction avec 'Pr\u00e9sage/Destin' : le pr\u00e9sage est un signe tir\u00e9 des oiseaux, pas les oiseaux eux-m\u00eames. Le verbe arsala (envoyer) prend un compl\u00e9ment physique qu'on peut envoyer \u2014 on envoie des cr\u00e9atures, pas des pr\u00e9sages. De plus, les versets suivants d\u00e9crivent ces tayran comme lan\u00e7ant des pierres (v4), ce qui confirme qu'il s'agit d'\u00eatres physiques.",
            axe1_verset: "Le verset dit arsala \u02bfalayhim tayran ab\u0101b\u012bla (Il a envoy\u00e9 sur eux des oiseaux en groupes). Le champ lexical est celui de l'action physique : envoyer, sur eux, oiseaux, en groupes. Les oiseaux sont les agents envoy\u00e9s contre les compagnons de l'\u00e9l\u00e9phant. Ils sont le moyen par lequel l'action divine s'ex\u00e9cute.",
            axe2_voisins: "Le verset 4 dit que ces oiseaux 'leur lan\u00e7aient des pierres d'argile'. Les oiseaux sont donc des cr\u00e9atures physiques qui agissent concr\u00e8tement. Les versets voisins confirment sans ambigu\u00eft\u00e9 qu'il s'agit d'\u00eatres ail\u00e9s, pas de pr\u00e9sages.",
            axe3_sourate: "La sourate oppose la force brute (l'\u00e9l\u00e9phant) \u00e0 la r\u00e9ponse divine (les oiseaux). Le contraste est saisissant : l'animal le plus massif est d\u00e9fait par des cr\u00e9atures ail\u00e9es bien plus petites. Ce contraste est au c\u0153ur du th\u00e8me de la sourate.",
            axe4_coherence: "Le mot tayr est utilis\u00e9 dans le Coran pour d\u00e9signer les oiseaux (2:260 'prends quatre oiseaux', 3:49 'je cr\u00e9e pour vous \u00e0 partir d'argile une forme d'oiseau'). Le sens d'oiseau est constant dans le Coran.",
            axe5_frequence: "Les oiseaux repr\u00e9sentent la l\u00e9g\u00e8ret\u00e9 et l'agilit\u00e9 face \u00e0 la masse et la force brute. Pour la mission humaine, la sourate montre que la justice ne d\u00e9pend pas de la taille ou de la force mais de la justesse de l'action."
          },
          'Pr\u00e9sage/Destin': {
            senses: ['augure', 'destin'],
            status: 'peu_probable',
            proof_ctx: "Le pr\u00e9sage est le sort tir\u00e9 des oiseaux ou des signes. C'est un sens abstrait d\u00e9riv\u00e9. Le verbe arsala (envoyer) demande un compl\u00e9ment physique qu'on peut d\u00e9p\u00eacher vers une cible. On envoie des cr\u00e9atures, pas des pr\u00e9sages. De plus, le verset 4 d\u00e9crit ces tayran comme lan\u00e7ant des pierres, ce qui confirme qu'il s'agit d'\u00eatres physiques, pas de signes abstraits. La fronti\u00e8re philosophique : l'oiseau est un \u00eatre qui agit, le pr\u00e9sage est un signe qu'on lit.",
            axe1_verset: "Le verbe arsala \u02bfalayhim (envoyer sur eux) implique un mouvement physique vers une cible. Le pr\u00e9sage ne se d\u00e9place pas vers une cible \u2014 c'est un signe qu'on interpr\u00e8te. Le champ lexical physique du verset (envoyer, sur eux, en groupes) ne s'accorde pas avec le sens abstrait de pr\u00e9sage.",
            axe2_voisins: "Le verset 4 dit que ces tayran 'leur lan\u00e7aient des pierres'. Des pr\u00e9sages ne lancent pas de pierres. Les versets voisins \u00e9liminent toute possibilit\u00e9 de sens abstrait.",
            axe3_sourate: "La sourate est un r\u00e9cit d'\u00e9v\u00e9nements concrets. Les pr\u00e9sages sont des signes abstraits qui ne correspondent pas au registre narratif de la sourate.",
            axe4_coherence: "Le mot tayr dans le Coran d\u00e9signe principalement les oiseaux en tant que cr\u00e9atures. Le sens de pr\u00e9sage (t\u0101\u2019ir) existe mais est moins fr\u00e9quent et ne s'applique pas quand le contexte est physique.",
            axe5_frequence: "Le pr\u00e9sage est passif (un signe qu'on lit). L'oiseau est actif (un \u00eatre qui agit). La sourate d\u00e9crit une action, pas une lecture de signes."
          }
        }
      }
    },
    {
      verse_id: 6191,
      word_key: 'abl',
      sense_chosen: 'groupes',
      position: 3,
      analysis_axes: {
        sense_chosen: 'groupes',
        concept_chosen: 'Chameau/Transport',
        concepts: {
          'Chameau/Transport': {
            senses: ['chameau'],
            status: 'retenu',
            proof_ctx: "Le sens retenu est 'Chameau/Transport' pour la racine, mais le mot ab\u0101b\u012bl dans le verset d\u00e9signe 'en groupes, par vol\u00e9es'. D'apr\u00e8s les sources \u00e9tymologiques, ab\u0101b\u012bl est un pluriel sans singulier attest\u00e9, qui signifie 'en troupes, en groupes distincts, en vol\u00e9es successives'. Le mot qualifie tayran (oiseaux) : des oiseaux en vol\u00e9es successives. Il n'y a qu'un seul sens pour cette racine dans ce contexte : les groupes successifs.",
            axe1_verset: "Le verset dit tayran ab\u0101b\u012bla (oiseaux en groupes). Le mot ab\u0101b\u012bl qualifie les oiseaux comme arrivant en vol\u00e9es distinctes et successives. Le champ lexical est celui de l'envoi massif : envoyer, sur eux, oiseaux, en groupes. Le mot ab\u0101b\u012bl ajoute l'id\u00e9e de multiplicit\u00e9 et de succession \u2014 ce ne sont pas quelques oiseaux isol\u00e9s mais des vol\u00e9es enti\u00e8res.",
            axe2_voisins: "Le verset 4 montre les oiseaux en action (lan\u00e7ant des pierres). Les vol\u00e9es successives expliquent l'ampleur de la destruction d\u00e9crite au verset 5 : pour r\u00e9duire un groupe entier en paille, il faut une action massive et r\u00e9p\u00e9t\u00e9e.",
            axe3_sourate: "La sourate oppose la puissance unique de l'\u00e9l\u00e9phant (un seul animal massif) \u00e0 la multiplicit\u00e9 des oiseaux (des vol\u00e9es enti\u00e8res). Le contraste entre l'un et le multiple est un \u00e9l\u00e9ment du th\u00e8me de la sourate.",
            axe4_coherence: "Le mot ab\u0101b\u012bl n'appara\u00eet qu'une seule fois dans le Coran. Les sources \u00e9tymologiques sont unanimes sur le sens de 'groupes successifs, vol\u00e9es'.",
            axe5_frequence: "La r\u00e9ponse en vol\u00e9es successives montre que la justice ne frappe pas un seul coup mais agit de mani\u00e8re continue et compl\u00e8te. Pour la mission humaine, cela illustre que la justice est m\u00e9thodique, pas impulsive."
          }
        }
      }
    }
  ];

  const {data: vwa3, error: vwa3Err} = await sb.from('verse_word_analyses').insert(v3_vwa).select('id, word_key, position');
  if (vwa3Err) { console.log('VWA v3 Error:', vwa3Err); return; }
  console.log('V3 VWA inserted:', vwa3.length);
  vwa3.forEach(d => console.log('  ' + d.word_key + ' pos=' + d.position));

  // =============================================
  // VERSE 105:3 — verse_analyses (Step 4)
  // =============================================
  const v3_segments = [
    { fr: "et", phon: "wa", arabic: "\u0648\u064e", position: 1, word_key: null, is_particle: true },
    { fr: "Il a envoy\u00e9", pos: "verbe", phon: "arsala", arabic: "\u0623\u064e\u0631\u0652\u0633\u064e\u0644\u064e", position: 2, word_key: "rsl", is_particle: false, sense_retenu: "envoi" },
    { fr: "sur eux", phon: "\u02bfalayhim", arabic: "\u0639\u064e\u0644\u064e\u064a\u0652\u0647\u0650\u0645\u0652", position: 3, word_key: null, is_particle: true },
    { fr: "des oiseaux", pos: "nom", phon: "tayran", arabic: "\u0637\u064e\u064a\u0652\u0631\u064b\u0627", position: 4, word_key: "tyr", is_particle: false, sense_retenu: "oiseau" },
    { fr: "en vol\u00e9es", pos: "nom", phon: "ab\u0101b\u012bla", arabic: "\u0623\u064e\u0628\u064e\u0627\u0628\u0650\u064a\u0644\u064e", position: 5, word_key: "abl", is_particle: false, sense_retenu: "groupes" }
  ];

  const v3_explanation = `\u00a7DEMARCHE\u00a7

La particule **wa** (et) relie ce verset au pr\u00e9c\u00e9dent. Elle ajoute une nouvelle information \u00e0 la s\u00e9quence.

Le mot **arsala** est un verbe accompli de la forme IV de la racine r-s-l (une forme qui ajoute l'id\u00e9e de 'faire partir, d\u00e9p\u00eacher'). D'apr\u00e8s les sources \u00e9tymologiques (Lane's Arabic-English Lexicon, Edward Lane, 1863), arsala signifie envoyer, d\u00e9p\u00eacher vers une destination. Le verbe accompli indique que l'action est achev\u00e9e.

Le mot **\u02bfalayhim** est compos\u00e9 de la pr\u00e9position \u02bfal\u0101 (sur) et du pronom hum (eux) : "sur eux". La pr\u00e9position \u02bfal\u0101 indique une direction de haut en bas, une action qui fond sur la cible.

Le mot **tayran** est un nom ind\u00e9fini au cas direct (accusatif, compl\u00e9ment du verbe). Il d\u00e9signe des oiseaux sans pr\u00e9ciser l'esp\u00e8ce. L'ind\u00e9termination (sans al-) laisse le mot ouvert \u2014 le texte ne pr\u00e9cise pas de quels oiseaux il s'agit.

Le mot **ab\u0101b\u012bla** est un nom au cas direct, qualificatif de tayran. C'est un pluriel sans singulier attest\u00e9 dans les sources \u00e9tymologiques. Il signifie "en vol\u00e9es, en groupes successifs, en troupes distinctes". Les oiseaux arrivent par vagues successives, pas en un seul bloc.

\u00a7JUSTIFICATION\u00a7

**envoy\u00e9** \u2014 Le sens retenu est 'Envoi/Message'. Le mot "envoy\u00e9" est choisi car il exprime l'acte de d\u00e9p\u00eacher quelqu'un ou quelque chose vers une cible. L'alternative "l\u00e2ch\u00e9" est \u00e9cart\u00e9e car elle implique un rel\u00e2chement passif, alors qu'arsala exprime un envoi d\u00e9lib\u00e9r\u00e9 et dirig\u00e9. L'alternative "lib\u00e9r\u00e9" est \u00e9cart\u00e9e car elle met l'accent sur la libert\u00e9 de ce qui est envoy\u00e9, pas sur la direction de l'envoi.

**oiseaux** \u2014 Le sens retenu est 'Vol/Oiseau'. Le mot "oiseaux" est choisi car il d\u00e9signe les cr\u00e9atures ail\u00e9es. L'alternative "pr\u00e9sages" est \u00e9cart\u00e9e car le verbe arsala demande un compl\u00e9ment physique qu'on peut envoyer, et le verset 4 d\u00e9crit ces tayran comme lan\u00e7ant des pierres, ce qui confirme qu'il s'agit d'\u00eatres physiques.

**en vol\u00e9es** \u2014 Le sens retenu est 'Chameau/Transport' pour la racine, mais le mot ab\u0101b\u012bl d\u00e9signe "en vol\u00e9es, en groupes successifs". Le mot "vol\u00e9es" est choisi car il est sp\u00e9cifique aux oiseaux qui arrivent en groupes. L'alternative "en bandes" est \u00e9cart\u00e9e car elle \u00e9voque des groupes humains plus que des oiseaux.

\u00a7CRITIQUE\u00a7

Les traductions courantes donnent "Et envoy\u00e9 sur eux des oiseaux par vol\u00e9es" (Hamidullah) ou "des oiseaux en groupes" (autres). Notre traduction est tr\u00e8s proche. Le seul point notable est le mot ab\u0101b\u012bl, dont l'\u00e9tymologie exacte est discut\u00e9e dans les sources. Les traductions courantes donnent sensiblement le m\u00eame sens.`;

  const {error: vaErr3} = await sb.from('verse_analyses').update({
    segments: v3_segments,
    full_translation: "Et envoy\u00e9 sur eux des oiseaux par vol\u00e9es",
    translation_explanation: v3_explanation
  }).eq('id', 6554);
  if (vaErr3) { console.log('VA v3 Error:', vaErr3); return; }
  console.log('V3 VA updated (id=6554)');

  // word_daily for v3
  const v3_daily = [
    { analysis_id: 688, sense: 'envoi', arabic: '\u0623\u064e\u0631\u0652\u0633\u064e\u0644\u0652\u062a\u064f \u0631\u0650\u0633\u064e\u0627\u0644\u064e\u0629\u064b', phon: "arsaltu ris\u0101latan", french: "J'ai envoy\u00e9 un message" },
    { analysis_id: 688, sense: 'envoi', arabic: '\u0623\u064e\u0631\u0652\u0633\u064e\u0644\u064e\u0647\u064f \u0625\u0650\u0644\u064e\u064a\u0652\u0647\u0650', phon: "arsalahu ilayhi", french: "Il l'a envoy\u00e9 vers lui" },
    { analysis_id: 688, sense: 'envoi', arabic: '\u0623\u064e\u0631\u0652\u0633\u064e\u0644\u064e \u0627\u0644\u0644\u0651\u064e\u0647\u064f \u0627\u0644\u0645\u064e\u0637\u064e\u0631\u064e', phon: "arsala all\u0101hu al-ma\u1e6dara", french: "Dieu a envoy\u00e9 la pluie" },
    { analysis_id: 1152, sense: 'oiseau', arabic: '\u0637\u064e\u064a\u0652\u0631\u064c \u064a\u064e\u0637\u0650\u064a\u0631\u064f \u0641\u0650\u064a \u0627\u0644\u0633\u0651\u064e\u0645\u064e\u0627\u0621\u0650', phon: "tayrun ya\u1e6d\u012bru f\u012b as-sam\u0101'", french: "Un oiseau vole dans le ciel" },
    { analysis_id: 1152, sense: 'oiseau', arabic: '\u0631\u064e\u0623\u064e\u064a\u0652\u062a\u064f \u0637\u064e\u064a\u0652\u0631\u064b\u0627 \u062c\u064e\u0645\u0650\u064a\u0644\u064b\u0627', phon: "ra'aytu tayran jam\u012blan", french: "J'ai vu un bel oiseau" },
    { analysis_id: 1152, sense: 'oiseau', arabic: '\u0627\u0644\u0637\u0651\u064e\u064a\u0652\u0631\u064f \u064a\u064f\u063a\u064e\u0631\u0651\u0650\u062f\u064f', phon: "a\u1e6d-\u1e6dayru yugharridu", french: "L'oiseau chante" },
    { analysis_id: 1851, sense: 'groupes', arabic: '\u062c\u064e\u0627\u0621\u064f\u0648\u0627 \u0623\u064e\u0628\u064e\u0627\u0628\u0650\u064a\u0644\u064e', phon: "j\u0101'\u016b ab\u0101b\u012bla", french: "Ils sont venus en groupes successifs" },
    { analysis_id: 1851, sense: 'groupes', arabic: '\u0623\u064e\u0628\u0650\u0644\u064c \u0645\u0650\u0646\u064e \u0627\u0644\u0625\u0650\u0628\u0650\u0644\u0650', phon: "ibilun min al-ibil", french: "Un troupeau de chameaux" },
    { analysis_id: 1851, sense: 'groupes', arabic: '\u0642\u064e\u0637\u0650\u064a\u0639\u064c \u0645\u0650\u0646\u064e \u0627\u0644\u0625\u0650\u0628\u0650\u0644\u0650 \u064a\u064e\u0645\u0652\u0634\u0650\u064a', phon: "qa\u1e6d\u012b\u02bfun min al-ibil yamsh\u012b", french: "Un troupeau de chameaux marche" }
  ];

  const {data: wd3, error: wdErr3} = await sb.from('word_daily').insert(v3_daily).select('id, sense');
  if (wdErr3) { console.log('WD v3 Error:', wdErr3); return; }
  console.log('V3 word_daily inserted:', wd3.length);

  console.log('=== VERSE 105:3 COMPLETE ===');
}

run().catch(e => console.error(e));
