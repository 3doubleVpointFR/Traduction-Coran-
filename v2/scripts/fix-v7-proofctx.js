const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: require('path').join(__dirname, '..', '.env.local') })
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)

async function fix() {
  console.log('=== CORRECTIONS proof_ctx verset 1:7 — toutes racines ===')

  async function upd(analysisId, sense, data) {
    const {data: rows} = await db.from('word_meanings').select('id').eq('analysis_id', analysisId).eq('sense', sense)
    if (rows && rows[0]) {
      await db.from('word_meanings').update(data).eq('id', rows[0].id)
      console.log('  ' + sense + ' -> corrigé')
    } else {
      console.log('  ' + sense + ' -> PAS TROUVÉ')
    }
  }

  // ── srt (262) ──
  console.log('\n[srt]')
  await upd(262, 'chemin', {
    proof_ctx: "Le mot sirata est un nom en idafa (annexion, c'est quand deux mots sont liés pour dire que le premier appartient au second). Test grammatical : \"chemin de ceux qui\" fonctionne en français courant, \"pont de ceux qui\" fonctionne aussi. La distinction n'est donc pas grammaticale mais contextuelle. Distinction avec \"pont\" : le pont est un passage entre deux points, une fois traversé on n'y revient plus. Le chemin est un parcours qu'on emprunte et qu'on peut suivre ou quitter. Le verset 7 décrit des gens qui suivent un parcours (les bienfaités) et d'autres qui l'ont quitté (les égarés), ce qui correspond au chemin, pas au pont. Le qualificatif \"droit\" (mustaqim) du verset 6 qualifie naturellement un chemin (un chemin peut être droit ou tordu), moins naturellement un pont (un pont est par définition un passage direct)."
  })
  await upd(262, 'pont', {
    proof_ctx: "Le pont est un passage entre deux points. Le verset décrit des gens qui suivent ou quittent un parcours (bienfaités vs égarés), ce qui correspond au chemin qu'on emprunte, pas au pont qu'on traverse une fois. La frontière philosophique avec \"chemin\" : le pont est fini (on le traverse et c'est terminé), le chemin est continu (on le suit au quotidien). Le qualificatif \"droit\" (mustaqim) du verset 6 qualifie naturellement un chemin (droit vs tordu), moins naturellement un pont."
  })

  // ── nem (264) ──
  console.log('\n[nem]')
  await upd(264, 'bienfait', {
    proof_ctx: "Le mot an'amta est un verbe accompli forme IV (une forme qui ajoute l'idée de \"faire faire\" ou \"accorder\"). Test grammatical : \"Tu as accordé le bienfait\" fonctionne, \"Tu as accordé le confort\" aussi, \"Tu as accordé l'abondance\" aussi. La distinction n'est donc pas grammaticale mais sémantique. Distinction avec \"confort\" : le confort est strictement matériel (un bon lit, de la nourriture, un abri). Le bienfait englobe le matériel et l'immatériel (la guidance, le savoir, la paix intérieure). Le verset parle du chemin droit (guidance), ce qui est un bienfait immatériel, pas du confort matériel. La frontière philosophique : le confort touche le corps, le bienfait touche la vie entière. Distinction avec \"abondance\" : l'abondance est une question de quantité (combien on a reçu). Le bienfait est une question de nature (ce qu'on a reçu). Le verset ne parle pas de combien on a reçu mais de la nature de ce qui a été accordé."
  })
  await upd(264, 'confort', {
    proof_ctx: "Le confort désigne un bien-être matériel et physique. Le test grammatical (\"Tu as accordé le confort\") fonctionne en français courant. La frontière philosophique avec \"bienfait\" : le confort touche le corps (conditions de vie agréables), le bienfait touche la vie entière (corps et esprit). Le verset parle du chemin droit (verset 6), qui est une guidance immatérielle. Le confort est matériel, le bienfait peut être immatériel. Le verset décrit un bienfait lié au chemin, pas aux conditions matérielles."
  })
  await upd(264, 'abondance', {
    proof_ctx: "L'abondance est une question de quantité (profusion, beaucoup). Le test grammatical (\"Tu as accordé l'abondance\") fonctionne. La frontière philosophique avec \"bienfait\" : l'abondance mesure combien on a reçu, le bienfait décrit ce qu'on a reçu. Le verset dit \"Tu as accordé sur eux\" sans mentionner de quantité. Le verset parle de la nature du chemin accordé, pas de la quantité de choses reçues."
  })

  // ── ghyr (266) ──
  console.log('\n[ghyr]')
  await upd(266, 'sauf', {
    proof_ctx: "Le mot ghayri est en position nominale dans le verset, il fonctionne comme un outil d'exclusion. Test grammatical : ghayri en position nominale peut signifier \"sauf\" ou \"autre que\", les deux fonctionnent. Distinction avec \"autre\" : \"autre\" constate passivement qu'il existe des gens différents, c'est une observation. \"Sauf\" pose un acte d'exclusion actif, c'est une séparation. La frontière philosophique : \"autre\" observe (il y a d'autres gens dans le monde), \"sauf\" agit (ces gens sont séparés du premier groupe). Le verset ne fait pas un constat passif, il trace une frontière active entre le chemin des bienfaités et celui des deux autres groupes. Distinction avec \"changer\" : le mot est en position nominale (pas de verbe), il ne décrit pas un changement d'état mais une séparation entre catégories."
  })
  await upd(266, 'autre', {
    proof_ctx: "\"Autre\" constate passivement la différence entre des groupes. Le test grammatical fonctionne (\"autre que ceux qui\"). La frontière philosophique avec \"sauf\" : constater une différence (\"il y a d'autres gens\") n'est pas la même chose que tracer une exclusion (\"ces gens sont exclus du chemin\"). Le verset ne dit pas simplement qu'il existe d'autres personnes, il sépare activement deux groupes du chemin des bienfaités. \"Autre\" observe, \"sauf\" agit."
  })
  await upd(266, 'changer', {
    proof_ctx: "Sens physique premier (passer d'un état à un autre). Le mot ghayri est en position nominale dans le verset, il ne fonctionne pas comme un verbe de transformation. La frontière philosophique avec \"sauf\" : changer décrit un processus (quelque chose se transforme), l'exclusion décrit une catégorisation (quelque chose est séparé). Le verset catégorise des groupes, il ne raconte pas un changement d'état."
  })

  // ── ghdb (267) ──
  console.log('\n[ghdb]')
  await upd(267, 'durcir', {
    proof_ctx: "\"Durcir\" est le sens physique qui sous-tend tous les sens abstraits de la racine. Le mot maghdhub est un participe passif (une forme qui dit que l'action est subie par la personne, pas faite par elle). \"Subir le durcissement\" est bancal en français courant : on dit \"subir un durcissement des conditions\" mais pas \"subir le durcissement\" tout court. La frontière philosophique avec \"désapprobation\" : le durcissement est un processus physique neutre (quelque chose devient dur), la désapprobation est un jugement relationnel dirigé vers l'extérieur (quelqu'un juge négativement et ce jugement atteint l'autre). Le verset parle de la relation entre des groupes humains, pas de physique. Les sources étymologiques définissent ghadhab comme \"le contraire de al-rida\", ce qui est une définition relationnelle, pas physique."
  })
  await upd(267, 'rancœur', {
    proof_ctx: "La rancœur est une colère latente qui persiste dans le temps. Le Lane's distingue ghadhab de ghayz (colère plus véhémente), et la rancœur se rapproche plus de ghayz. Le mot maghdhub est un participe passif (une forme qui dit que l'action est subie, pas faite). \"Subir la rancœur\" est bancal en français courant : la rancœur, comme l'insatisfaction, est un état intérieur qui reste chez celui qui la ressent. On ne subit pas le ressentiment intérieur de quelqu'un d'autre. La frontière philosophique avec \"désapprobation\" : la rancœur est un sentiment personnel qui couve à l'intérieur, la désapprobation est un jugement qui sort vers l'extérieur et atteint l'autre. Le participe passif impose un acte dirigé vers l'extérieur."
  })
  await upd(267, 'sévir', {
    proof_ctx: "Sévir est l'action concrète de punir quelqu'un. Le mot maghdhub est un participe passif (une forme qui dit que l'action est subie, pas faite). \"Subir la punition\" fonctionne mais sévir décrit une action ponctuelle (on sévit à un moment donné), alors que le participe passif dans le verset décrit un état permanent (\"ceux sur qui c'est tombé\", pas \"ceux qu'on est en train de punir\"). La frontière philosophique avec \"désapprobation\" : sévir est un acte ponctuel (on fait quelque chose une fois), la désapprobation est un état relationnel permanent (on juge). Le Coran utilise d'autres mots pour l'acte de punir (aqaba, adh-dhaba)."
  })
  await upd(267, 'sévérité', {
    proof_ctx: "La sévérité est un état de fermeté dure et inflexible. Le mot maghdhub est un participe passif (une forme qui dit que l'action est subie, pas faite). \"Subir la sévérité\" fonctionne en français courant, le test grammatical passe. Cependant, le Lane's définit ghadhab comme \"le contraire de al-rida\", pas comme synonyme de sévérité. Le Coran utilise d'autres mots pour la sévérité (shadid, qaswa). La frontière philosophique avec \"désapprobation\" : la sévérité décrit une attitude (comment on se comporte), la désapprobation décrit un jugement (ce qu'on pense de quelque chose). Le verset parle d'un état subi par des groupes humains dans leur relation avec Dieu, ce qui correspond à un jugement (désapprobation), pas à une attitude (sévérité)."
  })
  await upd(267, 'rupture', {
    proof_ctx: "La rupture est l'acte de couper les liens avec quelqu'un. Le mot maghdhub est un participe passif (une forme qui dit que l'action est subie, pas faite). \"Subir la rupture\" fonctionne en français courant mais la rupture est un acte ponctuel (on coupe à un moment précis), alors que le participe passif dans le verset décrit un état permanent. La frontière philosophique avec \"désapprobation\" : la rupture met fin à la relation (c'est terminé, il n'y a plus de lien), la désapprobation maintient la relation mais avec un jugement négatif (la relation existe encore, elle est marquée par la désapprobation). Le verset classe des groupes dans une relation, pas des groupes dont la relation est coupée. Le Coran utilise d'autres mots pour la rupture (qata'a)."
  })

  // ── dll (268) ──
  console.log('\n[dll]')
  await upd(268, 'égarer', {
    proof_ctx: "Le mot ad-dalliina est un participe actif (une forme qui dit que l'action est en cours et faite par les personnes elles-mêmes, pas subie). \"Ceux qui s'égarent\" fonctionne en français courant. Distinction avec \"errer\" : \"errer\" veut dire vagabonder sans but, comme si on n'avait jamais eu de chemin. \"S'égarer\" veut dire qu'on avait un chemin et qu'on l'a perdu, qu'on connaissait la direction et qu'on l'a quittée. Le verset mentionne explicitement le sirat (chemin), donc les personnes concernées avaient un chemin et l'ont quitté. La frontière philosophique : l'errance est un état sans référence (pas de point de départ connu), l'égarement est un mouvement par rapport à une référence connue (le chemin droit). Distinction avec \"disparaître\" : disparaître est physique (un objet perdu), s'égarer est moral (un chemin quitté). Distinction avec \"oublier\" : oublier est un processus passif et intérieur (la mémoire efface), s'égarer est un mouvement actif et extérieur (on quitte le chemin). Le participe actif indique un mouvement actif, pas un effacement intérieur."
  })
  await upd(268, 'errer', {
    proof_ctx: "\"Errer\" veut dire vagabonder sans but, sans direction. Le test grammatical (\"ceux qui errent\") fonctionne avec le participe actif. La frontière philosophique avec \"s'égarer\" : errer implique qu'il n'y a jamais eu de chemin, on vagabonde dans le vide sans référence. S'égarer implique qu'il y avait un chemin et qu'on l'a perdu, qu'on avait une référence et qu'on l'a quittée. Le verset mentionne explicitement le sirat (chemin), ce qui présuppose l'existence d'un chemin connu. Les dalliina l'ont quitté, ils ne vagabondent pas dans le néant. L'errance est sans référence, l'égarement est par rapport à une référence."
  })
  await upd(268, 'disparaître', {
    proof_ctx: "\"Disparaître\" est le sens physique premier de la racine (un objet perdu, un animal introuvable). Le test grammatical (\"ceux qui disparaissent\") fonctionne avec le participe actif. La frontière philosophique avec \"s'égarer\" : disparaître est physique (on n'est plus là, on est introuvable), s'égarer est moral (on est toujours là mais on a quitté le bon chemin). Le verset classe des groupes humains vivants dans des catégories, pas des groupes qui ont physiquement disparu."
  })
  await upd(268, 'oublier', {
    proof_ctx: "\"Oublier\" est un processus intérieur de la mémoire (on perd le souvenir de quelque chose). Le test grammatical (\"ceux qui oublient\") fonctionne avec le participe actif. La frontière philosophique avec \"s'égarer\" : oublier est un processus passif et intérieur (la mémoire efface sans qu'on le décide), s'égarer est un mouvement actif et extérieur (on quitte un chemin). Le participe actif dallin indique un mouvement actif vers l'extérieur, pas un effacement passif intérieur."
  })

  console.log('\n=== TOUTES LES CORRECTIONS TERMINÉES ===')
}

fix().catch(e => { console.error('ERREUR:', e); process.exit(1) })
