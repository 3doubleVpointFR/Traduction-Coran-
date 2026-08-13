# PROMPT VÉRIFICATION PROOF_CTX

Fond et forme des proof_ctx de chaque VWA. Vérifier aussi phrases du quotidien et richesse des racines.

## Étape 0 — Tableau récapitulatif racines (obligatoire, en premier)

Afficher tableau : `racine | id | nb sens | nb concepts | etym✦ | statut ⚠️ ou ✓`. Marquer ⚠️ si ≤5 sens ou 1 concept ou etym null. Pour chaque ⚠️ : consulter Lane's SQLite (`lanes_data/lexicon.sqlite`) — enrichir si Lane's donne plus, ou confirmer mono-conceptuelle honnête.

**≥ 2 sens par concept** obligatoire. **Pastille sens premier (etym✦)** définie sur chaque racine.

Si sens_chosen changé après réflexion → propager (segment.sense_retenu, segment.fr, translation_arab, §DEMARCHE§, §JUSTIFICATION§, §CRITIQUE§, résumés).

## Étape 1 — Phrases du quotidien

Pour chaque racine importante : 3 phrases dans word_daily. Si déjà présentes pour un AUTRE sens de la même racine → SKIP (phrases permanentes par racine).

## Étape 2 — Règles de forme

**R0 — Style français simple** :
- ❌ phonétique arabe (macrons diacritiques `āīūṣḍṭẓʿʾḥ`)
- ❌ lettres arabes
- ❌ jargon linguistique non expliqué (« copule », « accusatif », « idāfa », « participe passif », « schème »…)
- ❌ mots anglais résiduels
- ❌ anthropomorphisme
- ❌ jargon pipeline (« Niveau B », « V97 rotation », « carrie », « Maison rend »)

**R1 — Proof_ctx retenu** :
- (a) commence par `***Sens retenu :*** mot_français` (= sense_chosen exact)
- (b) ≥ 4 phrases : forme grammaticale, racine + champ, contexte précis du verset, nature philosophique
- (c) 5 axes internes contextualisés (champ lexical / versets voisins / thème sourate / cohérence coranique / finalité khalifa)
- **Non générique** — ancré dans le verset
- **≥ 1 phrase de lien avec le sens premier de la racine** (« sens premier étymologique », « coïncide »)

**R2 — Concepts probables** : distinction philosophique ≥80 chars, nature spécifique identifiée, raison d'exclusion contextuelle. Le retenu mentionne CHAQUE probable par nom précédé de `— **NomExact**`.

**R2bis — Format section Comparaison** :
```
[paragraphe retenu]

**Comparaison avec les sens probables :**

— **NomProbable1** : [senses]. Sa nature est celle d'un ***X philosophique***. Tandis qu'ici [contexte], [exclusion].

— **NomProbable2** : ...
```
Sauts `\n\n` avant/après header, entre chaque entrée `— **Nom**`. « Tandis qu'ici » (pas « alors qu'ici »).

**R3 — Peu_probable** : 1-2 phrases avec distinction philo vs retenu.

**R4 — Nul** : 1 phrase, pas de duplicat mot-pour-mot.

**R5 — Triple alignement** : `sense_chosen` (VWA) = `analysis_axes.sense_chosen` = mot dans word_meanings du retenu = `segment.sense_retenu` = mot juste après `***Sens retenu :***` dans le proof_ctx.

**R8bis — Anti-glose attribut divin** : si le verset dit X (muḥīṭ, ʿalīm...), ne pas gloser par Y absent du verset. La glose Hamidullah = à CRITIQUER, pas à REPRENDRE.

⚠️ Section « Comparaison » interdite si 0 probable.
⚠️ Le retenu ne commente que les probable — jamais peu_probable/nul.

## Procédure

1. Afficher tableau racines (Étape 0).
2. Exécuter `scripts/_check_proof_distinctions.js [verseId]`.
3. Audit manuel forme (jargon, phon, lien sens premier, section parasite).
4. Classer anomalies : A (sens à changer), B (distinction <80), C (probable non mentionné), D (section parasite), E (forme), F (duplicat nul), G (triple align cassé), H (phrases quotidien manquantes).
5. Tableau récapitulatif des corrections : `racine | classe | ancien | nouveau | raison`.
6. Re-lancer script à la fin — 0 anomalie.
