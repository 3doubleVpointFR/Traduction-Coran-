# PROMPT VÉRIFICATION COHÉRENCE §DEMARCHE§ / §JUSTIFICATION§ / §CRITIQUE§

Vérifier la cohérence textuelle des 3 sections par rapport à segments[].fr et translation_arab. Tous les mots (mots + particules) doivent être listés dans §DEMARCHE§ ET §JUSTIFICATION§.

## Règles à vérifier

**R0** — Aucun jargon technique de pipeline (« pos », « Niveau B », « V97 rotation », « carrie »), aucun jargon grammatical (« accompli », « inaccompli », « participe », « transitif », « attribut », « idāfa », « accusatif », « génitif », « copule », « schème », « construct », « tanwīn », « antécédent », « reprise pronominale »). Explication simple qu'un enfant de 10 ans peut comprendre en §JUSTIFICATION§ et §CRITIQUE§.

**R1 — §DEMARCHE§ ↔ segments[]** : rôle grammatical. Pour chaque paragraphe `**phon** (fr) —` : le (fr) = segments[i].fr exact. Pas de paragraphe méta qui regroupe 2+ mots arabes — soit particule + verbe séparés, soit formule française portée sur le mot porteur.

**R2 — §JUSTIFICATION§ ↔ segments[]** : rôle lexical. Pour chaque entrée `**fr** — Le sens retenu est...` : le **fr** = segments[i].fr exact. Une entrée par occurrence (ou une entrée qui couvre explicitement toutes les occurrences). **Particules incluses** (nouvelle règle 2026-07-21).

**R3 — Pattern V23 ABANDONNÉ** : aucun segment.fr vide (particules incluses). Pour « ne...pas » : particule = « ne », verbe = « ...pas X ». Les deux visibles.

**R4 — §CRITIQUE§ ordre + cohérence** : ordre gauche→droite du verset arabe. Cohérence interne (JUSTIFICATION et CRITIQUE se renforcent). Cohérence contexte.

**R5 — §CRITIQUE§ format « 2 traductions en tête »** :
```
**Notre traduction :** « X »
**Hamidullah :** « Y »

[prose narrative en français simple, 2-3 phrases : « on garde », « il ajoute », « ça sonne comme »]
```
❌ Ancienne forme `**X vs « Y »** : ...` interdite.
❌ Phonétique arabe interdite dans §CRITIQUE§.
❌ « Maison » interdit → « Notre traduction » ou passive.

**R6 — Phonétique arabe dans §DEMARCHE§/§JUSTIFICATION§** : toujours accompagnée de la traduction française — ex : `wa- (et)`, `ilā (vers)`.

## Procédure

1. Vérifier `verse_analyses.full_translation` (Hamidullah) — si null, ajouter d'abord.
2. Exécuter :
   ```bash
   DOTENV_CONFIG_PATH=.env.local node -r dotenv/config scripts/_check_demarche_coherence.js [verseId]
   DOTENV_CONFIG_PATH=.env.local node -r dotenv/config scripts/_check_v25_demarche_full.js [verseId]
   DOTENV_CONFIG_PATH=.env.local node -r dotenv/config scripts/_check_no_empty_fr.js [verseId]
   ```
3. Vérifier manuellement §CRITIQUE§ pour : jargon, phon arabe, « Maison », format 2 traductions en tête.
4. Corriger les incohérences.
5. Afficher tableau récapitulatif des corrections :
   | segment / section | champ | ancien | nouveau | raison |
6. Re-lancer les 3 scripts à la fin pour confirmer 0 erreur.
