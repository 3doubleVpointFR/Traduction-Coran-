require('dotenv').config({path: '.env.local'});
const {createClient} = require('@supabase/supabase-js');
const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

async function run() {
  // =============================================
  // VERSE 105:2 — أَلَمْ يَجْعَلْ كَيْدَهُمْ فِى تَضْلِيلٍ
  // Words: jel (rendre/faire), kyd (ruse), dll (égarement/perte)
  // =============================================

  const v2_vwa = [
    {
      verse_id: 6190,
      word_key: 'jel',
      sense_chosen: 'rendre',
      position: 1,
      analysis_axes: {
        sense_chosen: 'rendre',
        concept_chosen: 'Action/R\u00e9alisation',
        concepts: {
          'Action/R\u00e9alisation': {
            senses: ['faire', 'rendre', 'placer', 'commencer \u00e0', '\u00e9tablir', 'cr\u00e9er'],
            status: 'retenu',
            proof_ctx: "Le sens retenu est 'Action/R\u00e9alisation'. Le verbe yaj\u02bbal est un inaccompli pr\u00e9c\u00e9d\u00e9 de alam (n\u00e9gation interrogative), ce qui donne 'n'a-t-Il pas rendu ?'. D'apr\u00e8s les sources \u00e9tymologiques, ja\u02bbala signifie faire, rendre, placer, transformer quelque chose en autre chose. Ici ja\u02bbala kaydahum f\u012b ta\u1e0dl\u012bl signifie 'rendre leur ruse dans l'\u00e9garement'. Le verbe exprime la transformation d'un \u00e9tat en un autre : la ruse est transform\u00e9e en chose \u00e9gar\u00e9e, vaine. Le seul sens pour cette racine est l'action/r\u00e9alisation, qui s'applique directement.",
            axe1_verset: "Le verset d\u00e9crit la transformation de la ruse en chose vaine. Le champ lexical est celui de la cause et de l'effet : rendre (jel), ruse (kyd), \u00e9garement (dll). Le verbe ja\u02bbala est le pivot qui transforme la ruse en \u00e9garement. L'action de rendre est l'acte central du verset \u2014 c'est par cet acte que la ruse est d\u00e9faite.",
            axe2_voisins: "Le verset 1 pose la question 'n'as-tu pas vu comment ton Seigneur a agi ?'. Le verset 2 r\u00e9pond : Il a rendu leur ruse vaine. C'est la premi\u00e8re r\u00e9ponse \u00e0 la question du verset 1. Les versets 3 \u00e0 5 d\u00e9taillent ensuite comment cette action s'est d\u00e9roul\u00e9e. Le verset 2 est le r\u00e9sum\u00e9, les versets 3-5 sont le d\u00e9tail.",
            axe3_sourate: "La sourate montre la d\u00e9faite de la force brute. Le verbe ja\u02bbala exprime cette d\u00e9faite comme une transformation : ce qui \u00e9tait une ruse est devenu quelque chose de vain. Le th\u00e8me de la transformation est central dans la sourate.",
            axe4_coherence: "Le verbe ja\u02bbala est utilis\u00e9 dans de nombreux versets du Coran pour exprimer la transformation (2:22 'Il a fait la terre un lit', 6:1 'Il a fait les t\u00e9n\u00e8bres et la lumi\u00e8re'). Le sens de rendre/transformer est constant.",
            axe5_frequence: "L'acte de rendre quelque chose en autre chose est fondamental pour la justice. La ruse est transform\u00e9e en chose vaine \u2014 ce qui montre que l'injustice finit par se retourner contre elle-m\u00eame."
          },
          'Sens isol\u00e9/R\u00e9compense': {
            senses: ['r\u00e9compense'],
            status: 'nul',
            proof_ctx: "Sens isol\u00e9 sans rapport avec le contexte du verset qui d\u00e9crit une transformation, pas une r\u00e9tribution."
          }
        }
      }
    },
    {
      verse_id: 6190,
      word_key: 'kyd',
      sense_chosen: 'ruse',
      position: 2,
      analysis_axes: {
        sense_chosen: 'ruse',
        concept_chosen: 'Ruse/Stratag\u00e8me',
        concepts: {
          'Ruse/Stratag\u00e8me': {
            senses: ['ruser', 'comploter', 'stratag\u00e8me'],
            status: 'retenu',
            proof_ctx: "Le sens retenu est 'Ruse/Stratag\u00e8me'. Le mot kaydahum est un nom au cas direct (accusatif), compl\u00e9ment du verbe ja\u02bbala, avec le pronom hum (leur) : 'leur ruse'. D'apr\u00e8s les sources \u00e9tymologiques, le kayd est l'acte de planifier secr\u00e8tement pour atteindre un but en trompant l'adversaire. La ruse est ext\u00e9rieure (elle vise quelqu'un d'autre) et cach\u00e9e (elle fonctionne par secret). Il n'y a qu'un seul sens pour cette racine et il s'applique directement : les compagnons de l'\u00e9l\u00e9phant avaient un plan secret, une ruse.",
            axe1_verset: "Le verset dit que Dieu a rendu leur ruse dans l'\u00e9garement. Le champ lexical oppose la ruse (plan cach\u00e9) \u00e0 l'\u00e9garement (perte de direction). La ruse est ce qui a \u00e9t\u00e9 d\u00e9fait \u2014 c'est l'objet de la transformation. Le mot kayd identifie la nature de ce que les compagnons avaient pr\u00e9par\u00e9 : un plan cach\u00e9.",
            axe2_voisins: "Le verset 1 parle des compagnons de l'\u00e9l\u00e9phant. Le verset 2 r\u00e9v\u00e8le qu'ils avaient une ruse \u2014 ils n'\u00e9taient pas l\u00e0 par hasard mais avec un plan. Les versets 3-5 montrent comment ce plan a \u00e9t\u00e9 d\u00e9fait. La ruse au verset 2 est le lien entre l'identit\u00e9 du groupe (v1) et sa d\u00e9faite (v3-5).",
            axe3_sourate: "La sourate oppose la force brute (l'\u00e9l\u00e9phant) et la ruse (le plan cach\u00e9) \u00e0 la r\u00e9ponse divine. Le kayd repr\u00e9sente la dimension strat\u00e9gique de la menace, qui s'ajoute \u00e0 la dimension physique de l'\u00e9l\u00e9phant.",
            axe4_coherence: "Le mot kayd est utilis\u00e9 dans le Coran pour d\u00e9signer les ruses des humains (12:5 'la ruse de Shaytan est faible') et les plans divins (86:16 'Je ruse d'une ruse'). Le sens de plan secret est constant.",
            axe5_frequence: "La ruse est un acte d\u00e9lib\u00e9r\u00e9 de tromperie. Pour la mission humaine, la sourate montre que m\u00eame la combinaison de la force brute et de la ruse ne peut rien face \u00e0 la justice divine. La ruse est l'oppos\u00e9 de la droiture."
          }
        }
      }
    },
    {
      verse_id: 6190,
      word_key: 'dll',
      sense_chosen: '\u00e9garement',
      position: 3,
      analysis_axes: {
        sense_chosen: '\u00e9garement',
        concept_chosen: '\u00c9garement/D\u00e9viation',
        concepts: {
          '\u00c9garement/D\u00e9viation': {
            senses: ["s'\u00e9garer", 'd\u00e9vier', 'errer', 'perdre son chemin', 'faire \u00e9garer', '\u00eatre \u00e9gar\u00e9', 'confusion', 'perplexit\u00e9', 'feindre l\'\u00e9garement', "demander l'\u00e9garement", 'route qui \u00e9gare', 'terre qui \u00e9gare', "cause d'\u00e9garement"],
            status: 'retenu',
            proof_ctx: "Le sens retenu est '\u00c9garement/D\u00e9viation'. Le mot ta\u1e0dl\u012bl est un masdar (nom verbal) de la forme II de la racine d-l-l, pr\u00e9c\u00e9d\u00e9 de la pr\u00e9position f\u012b (dans). La forme II (fa\u02bb\u02bbala) ajoute l'intensit\u00e9 ou la causalit\u00e9 : ta\u1e0dl\u012bl signifie 'faire \u00e9garer compl\u00e8tement' ou '\u00e9garement total'. D'apr\u00e8s les sources \u00e9tymologiques, \u1e0dalla signifie quitter le bon chemin, d\u00e9vier de la direction correcte. Le ta\u1e0dl\u012bl est le fait de rendre compl\u00e8tement vain, de faire perdre toute direction. La ruse est plac\u00e9e 'dans l'\u00e9garement' \u2014 elle n'a plus de direction, elle est perdue. Distinction avec 'Disparition/Perte' : la disparition est le fait de devenir introuvable physiquement. L'\u00e9garement est le fait de perdre la direction sans dispara\u00eetre. Ici la ruse n'a pas disparu, elle a perdu son efficacit\u00e9, elle est devenue sans direction \u2014 c'est l'\u00e9garement, pas la disparition.",
            axe1_verset: "Le verset dit que la ruse a \u00e9t\u00e9 rendue 'dans l'\u00e9garement' (f\u012b ta\u1e0dl\u012bl). Le champ lexical oppose la ruse (\u00e0 direction : vers un but) \u00e0 l'\u00e9garement (perte de direction). La ruse avait un but pr\u00e9cis, l'\u00e9garement la prive de ce but. C'est la d\u00e9finition m\u00eame de l'\u00e9chec d'un plan : quand il perd sa direction. Le mot ta\u1e0dl\u012bl (forme II, intensive) dit que cet \u00e9garement est total, pas partiel.",
            axe2_voisins: "Le verset 1 montre la puissance apparente des compagnons (l'\u00e9l\u00e9phant). Le verset 2 r\u00e9v\u00e8le que leur plan a \u00e9t\u00e9 totalement \u00e9gar\u00e9. Les versets 3-5 montrent les moyens concrets de cette d\u00e9faite. L'\u00e9garement au verset 2 est le verdict g\u00e9n\u00e9ral, les versets suivants en sont l'ex\u00e9cution.",
            axe3_sourate: "La sourate montre que la force brute et la ruse sont rendues vaines. L'\u00e9garement est le r\u00e9sultat de cette d\u00e9faite : la ruse perd sa direction et devient inutile. Le th\u00e8me de la sourate est la vanit\u00e9 de la force face \u00e0 la justice.",
            axe4_coherence: "Le mot tadl\u012bl appara\u00eet rarement dans le Coran. La racine d-l-l est utilis\u00e9e fr\u00e9quemment pour l'\u00e9garement (1:7 'les \u00e9gar\u00e9s', 2:16 'leur commerce ne leur a pas profit\u00e9 et ils n'\u00e9taient pas guid\u00e9s'). Le sens de perte de direction est constant dans le Coran.",
            axe5_frequence: "L'\u00e9garement de la ruse montre que toute action injuste finit par perdre sa direction. Pour la mission humaine, c'est une loi : la ruse injuste se retourne contre elle-m\u00eame, non pas parce qu'elle dispara\u00eet mais parce qu'elle perd son efficacit\u00e9."
          },
          'Disparition/Perte': {
            senses: ['dispara\u00eetre', 'se perdre', 'p\u00e9rir', 'mourir', 'devenir poussi\u00e8re', '\u00eatre enterr\u00e9', 'perdre quelque chose', '\u00e9tat de perdition', 'futilit\u00e9', 'vain'],
            status: 'probable',
            proof_ctx: "La disparition est le processus de devenir introuvable physiquement. La ruse rendue 'dans la disparition' (f\u012b ta\u1e0dl\u012bl) pourrait signifier que la ruse a disparu, est devenue n\u00e9ante. C'est possible et coh\u00e9rent : le plan a compl\u00e8tement disparu. La fronti\u00e8re philosophique avec le sens retenu : l'\u00e9garement prive la ruse de sa direction sans la faire dispara\u00eetre, la disparition la fait cesser d'exister. La forme II (ta\u1e0dl\u012bl) est plus compatible avec l'\u00e9garement intensif qu'avec la disparition, car la forme II de d-l-l dans les sources \u00e9tymologiques d\u00e9signe le fait de faire \u00e9garer, pas le fait de faire dispara\u00eetre.",
            axe1_verset: "Le verset dit f\u012b ta\u1e0dl\u012bl (dans l'\u00e9garement/la perte). La pr\u00e9position f\u012b (dans) sugg\u00e8re un \u00e9tat dans lequel la ruse est plong\u00e9e, pas une disparition ponctuelle. On est 'dans' un \u00e9tat, pas 'dans' une disparition. Cet argument favorise l\u00e9g\u00e8rement l'\u00e9garement.",
            axe2_voisins: "Les versets 3-5 d\u00e9crivent comment les compagnons ont \u00e9t\u00e9 d\u00e9faits physiquement. La disparition au verset 2 serait redondante avec la destruction des versets 3-5. L'\u00e9garement au verset 2 apporte une information diff\u00e9rente : avant m\u00eame la destruction physique, le plan avait d\u00e9j\u00e0 perdu sa direction.",
            axe3_sourate: "La sourate oppose le plan humain (ruse) au plan divin (action). La disparition du plan est un r\u00e9sultat final, l'\u00e9garement du plan est un processus. Le verset 2 d\u00e9crit plut\u00f4t le processus que le r\u00e9sultat.",
            axe4_coherence: "La forme II de d-l-l dans le Coran et dans les sources \u00e9tymologiques d\u00e9signe le fait de faire \u00e9garer, pas le fait de faire dispara\u00eetre. L'\u00e9garement est plus conforme \u00e0 l'usage de cette forme verbale.",
            axe5_frequence: "La disparition est un aboutissement d\u00e9finitif. L'\u00e9garement est un processus qui montre comment les choses se d\u00e9font. Pour la mission humaine, comprendre le processus (\u00e9garement) est plus instructif que constater le r\u00e9sultat (disparition)."
          },
          'Oubli/Enterrement': {
            senses: ['oublier', 'enterrer', 'cacher dans le sol', 'eau souterraine', 'restes d\'eau'],
            status: 'nul',
            proof_ctx: "Sens li\u00e9s \u00e0 l'enfouissement physique et \u00e0 l'oubli. Sans rapport avec la ruse rendue vaine dans le contexte du verset."
          },
          'Divers': {
            senses: ['terre rugueuse', 'pierres', 'guide habile', 'fils ill\u00e9gitime', 'sang non veng\u00e9', 'suiveur de femmes'],
            status: 'nul',
            proof_ctx: "Sens isol\u00e9s (g\u00e9ographie, parent\u00e9, droit) sans rapport avec le contexte du verset."
          }
        }
      }
    }
  ];

  const {data: vwa2, error: vwa2Err} = await sb.from('verse_word_analyses').insert(v2_vwa).select('id, word_key, position');
  if (vwa2Err) { console.log('VWA v2 Error:', vwa2Err); return; }
  console.log('V2 VWA inserted:', vwa2.length);
  vwa2.forEach(d => console.log('  ' + d.word_key + ' pos=' + d.position));

  // =============================================
  // VERSE 105:2 — verse_analyses (Step 4)
  // =============================================
  const v2_segments = [
    { fr: "n'a-t-Il pas", phon: "alam", arabic: "\u0623\u064e\u0644\u064e\u0645\u0652", position: 1, word_key: null, is_particle: true },
    { fr: "rendu", pos: "verbe", phon: "yaj\u02bbal", arabic: "\u064a\u064e\u062c\u0652\u0639\u064e\u0644\u0652", position: 2, word_key: "jel", is_particle: false, sense_retenu: "rendre" },
    { fr: "leur ruse", pos: "nom", phon: "kaydahum", arabic: "\u0643\u064e\u064a\u0652\u062f\u064e\u0647\u064f\u0645\u0652", position: 3, word_key: "kyd", is_particle: false, sense_retenu: "ruse" },
    { fr: "dans", phon: "f\u012b", arabic: "\u0641\u0650\u0649", position: 4, word_key: null, is_particle: true },
    { fr: "l'\u00e9garement total", pos: "nom", phon: "ta\u1e0dl\u012bl", arabic: "\u062a\u064e\u0636\u0652\u0644\u0650\u064a\u0644\u064d", position: 5, word_key: "dll", is_particle: false, sense_retenu: "\u00e9garement" }
  ];

  const v2_explanation = `\u00a7DEMARCHE\u00a7

La particule **alam** est la m\u00eame n\u00e9gation interrogative qu'au verset 1 (c'est quand on pose une question en disant "n'a-t-Il pas..."). Elle attend une r\u00e9ponse positive : "bien s\u00fbr que si".

Le mot **yaj\u02bbal** est un verbe inaccompli de la racine j-\u02bb-l (une forme qui exprime une action en cours). Pr\u00e9c\u00e9d\u00e9 de alam, il prend le sens d'une action achev\u00e9e : "n'a-t-Il pas rendu ?". Ja\u02bbala suivi d'un compl\u00e9ment et d'une pr\u00e9position signifie "rendre quelque chose dans un \u00e9tat" \u2014 c'est une transformation.

Le mot **kaydahum** est un nom au cas direct (accusatif, compl\u00e9ment du verbe), avec le pronom hum (leur) : "leur ruse". Le kayd est un plan secret, une strat\u00e9gie cach\u00e9e.

La pr\u00e9position **f\u012b** signifie "dans". Elle place la ruse \u00e0 l'int\u00e9rieur d'un \u00e9tat.

Le mot **ta\u1e0dl\u012bl** est un masdar (nom verbal) de la forme II de la racine d-l-l (une forme intensive qui amplifie le sens de base). La forme I dalla signifie "\u00e9garer, perdre sa direction". La forme II ta\u1e0dl\u012bl signifie "\u00e9garement total, perte compl\u00e8te de direction". Le masdar au g\u00e9nitif ind\u00e9fini (sans al-) d\u00e9crit un \u00e9tat g\u00e9n\u00e9ral d'\u00e9garement.

\u00a7JUSTIFICATION\u00a7

**rendu** \u2014 Le sens retenu est 'Action/R\u00e9alisation'. Le mot "rendu" est choisi car il exprime la transformation d'un \u00e9tat en un autre. L'alternative "fait" est \u00e9cart\u00e9e car elle est trop g\u00e9n\u00e9rique et ne capture pas la dimension de transformation. L'alternative "plac\u00e9" est \u00e9cart\u00e9e car elle implique un mouvement physique, alors que la transformation est plus abstraite.

**ruse** \u2014 Le sens retenu est 'Ruse/Stratag\u00e8me'. Le mot "ruse" est choisi car il d\u00e9signe un plan secret visant \u00e0 tromper. L'alternative "stratag\u00e8me" est \u00e9cart\u00e9e car c'est un mot plus rare, moins courant dans la vie quotidienne. L'alternative "complot" est \u00e9cart\u00e9e car il implique plusieurs personnes organis\u00e9es, ce que le texte ne pr\u00e9cise pas.

**\u00e9garement total** \u2014 Le sens retenu est '\u00c9garement/D\u00e9viation'. Le mot "\u00e9garement" est choisi car il d\u00e9signe la perte de direction. Le qualificatif "total" est ajout\u00e9 pour rendre la forme II (intensive). L'alternative "perte" est \u00e9cart\u00e9e car elle est trop vague et pourrait \u00eatre comprise comme une perte mat\u00e9rielle. L'alternative "disparition" est \u00e9cart\u00e9e car la forme II de d-l-l d\u00e9signe l'\u00e9garement intensif, pas la disparition.

\u00a7CRITIQUE\u00a7

Les traductions courantes donnent "N'a-t-Il pas rendu leur ruse compl\u00e8tement vaine ?" ou "en perdition". Le mot ta\u1e0dl\u012bl est g\u00e9n\u00e9ralement rendu par "vain" ou "en perdition". Notre traduction "\u00e9garement total" est plus pr\u00e9cise \u00e9tymologiquement : la racine d-l-l d\u00e9signe sp\u00e9cifiquement la perte de direction, pas la vanit\u00e9 en g\u00e9n\u00e9ral. Dire que la ruse est "dans l'\u00e9garement total" signifie qu'elle a perdu sa direction, qu'elle ne m\u00e8ne plus nulle part \u2014 c'est plus pr\u00e9cis que "vaine" qui ne dit pas comment la ruse a \u00e9chou\u00e9. Cependant, le r\u00e9sultat global du verset reste le m\u00eame : la ruse n'a pas fonctionn\u00e9.`;

  const {error: vaErr2} = await sb.from('verse_analyses').update({
    segments: v2_segments,
    full_translation: "N'a-t-Il pas rendu leur ruse compl\u00e8tement vaine ?",
    translation_explanation: v2_explanation
  }).eq('id', 6553);
  if (vaErr2) { console.log('VA v2 Error:', vaErr2); return; }
  console.log('V2 VA updated (id=6553)');

  // word_daily for v2
  const v2_daily = [
    { analysis_id: 359, sense: 'rendre', arabic: '\u062c\u064e\u0639\u064e\u0644\u064e\u0647\u064f \u0635\u064e\u0639\u0652\u0628\u064b\u0627', phon: "ja\u02bbalahu \u1e63a\u02bbban", french: "Il l'a rendu difficile" },
    { analysis_id: 359, sense: 'rendre', arabic: '\u062c\u064e\u0639\u064e\u0644\u064e \u0627\u0644\u0644\u0651\u064e\u064a\u0652\u0644\u064e \u0633\u064e\u0643\u064e\u0646\u064b\u0627', phon: "ja\u02bbala al-layla sakanan", french: "Il a fait de la nuit un repos" },
    { analysis_id: 359, sense: 'rendre', arabic: '\u0627\u062c\u0652\u0639\u064e\u0644\u0652 \u0647\u064e\u0630\u064e\u0627 \u0623\u064e\u0648\u0651\u064e\u0644\u064b\u0627', phon: "ij\u02bbal h\u0101dh\u0101 awwalan", french: "Mets cela en premier" },
    { analysis_id: 1329, sense: 'ruse', arabic: '\u0643\u064e\u0627\u062f\u064e \u0644\u064e\u0647\u064f', phon: "k\u0101da lahu", french: "Il a rus\u00e9 contre lui" },
    { analysis_id: 1329, sense: 'ruse', arabic: '\u0647\u064e\u0630\u064e\u0627 \u0643\u064e\u064a\u0652\u062f\u064c \u0645\u064e\u0643\u0652\u0634\u064f\u0648\u0641\u064c', phon: "h\u0101dh\u0101 kaydun maksh\u016bf", french: "C'est une ruse d\u00e9couverte" },
    { analysis_id: 1329, sense: 'ruse', arabic: '\u0643\u064e\u064a\u0652\u062f\u064f\u0647\u064f\u0645\u0652 \u0641\u064e\u0634\u0650\u0644\u064e', phon: "kayduhum fashila", french: "Leur ruse a \u00e9chou\u00e9" },
    { analysis_id: 268, sense: '\u00e9garement', arabic: '\u0636\u064e\u0644\u0651\u064e \u0639\u064e\u0646\u0650 \u0627\u0644\u0637\u0651\u064e\u0631\u0650\u064a\u0642\u0650', phon: "\u1e0dalla \u02bban a\u1e6d-\u1e6dar\u012bq", french: "Il s'est \u00e9gar\u00e9 du chemin" },
    { analysis_id: 268, sense: '\u00e9garement', arabic: '\u0623\u064e\u0636\u064e\u0644\u0651\u064e\u0647\u064f \u0639\u064e\u0646\u0650 \u0627\u0644\u0647\u064f\u062f\u064e\u0649', phon: "a\u1e0dallahu \u02bban al-hud\u0101", french: "Il l'a \u00e9gar\u00e9 de la bonne direction" },
    { analysis_id: 268, sense: '\u00e9garement', arabic: '\u0647\u064e\u0630\u064e\u0627 \u062a\u064e\u0636\u0652\u0644\u0650\u064a\u0644\u064c \u0643\u064e\u0628\u0650\u064a\u0631\u064c', phon: "h\u0101dh\u0101 ta\u1e0dl\u012blun kab\u012br", french: "C'est un \u00e9garement total" }
  ];

  const {data: wd2, error: wdErr2} = await sb.from('word_daily').insert(v2_daily).select('id, sense');
  if (wdErr2) { console.log('WD v2 Error:', wdErr2); return; }
  console.log('V2 word_daily inserted:', wd2.length);

  console.log('=== VERSE 105:2 COMPLETE ===');
}

run().catch(e => console.error(e));
