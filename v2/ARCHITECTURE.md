# Architecture du projet — Analyse Coranique

## Vision globale

Ce projet construit une analyse coranique basée sur une méthodologie stricte :
- Aucune traduction traditionnelle importée
- Le Coran s'explique lui-même par lui-même
- Linguistique arabe pure + cohérence interne
- La finalité de l'être humain (khalīfa) comme axe central

---

## Phase 1 — Analyse initiale (en cours)

Pour chaque verset du Coran, pour chaque mot important :

### Pipeline 5 étapes

1. **Tag** — identification mots importants vs particules
2. **Étymologie** — sens étymologiques exhaustifs de la racine
3. **Contexte** — 10 occurrences représentatives depuis QAC pour contexte GPT
4. **Sélection** — choix du sens via 5 axes d'analyse :
   - Axe 1 : Champ lexical du verset
   - Axe 2 : Contexte des versets voisins (±7)
   - Axe 3 : Thème de la sourate
   - Axe 4 : Cohérence coranique (contradictions uniquement)
   - Axe 5 : Finalité de l'être humain (mission du khalīfa)
5. **Reconstruction** — traduction complète du verset en français

### Stockage

Chaque analyse est stockée dans `verse_word_analyses` :
- `verse_id` + `word_key` → identifiant unique
- `sense_chosen` → le sens retenu pour CE verset
- `analysis_axes` → JSON des 5 axes de justification
- `reason` → résumé synthétique

### Compteurs

Les compteurs se construisent automatiquement au fur et à mesure :
- **Total QAC** : nombre d'occurrences de la racine dans le Coran (table `words`)
- **Analysés** : nombre de versets analysés par notre moteur (table `verse_word_analyses`)
- **Par sens** : répartition des sens retenus dans nos analyses

### Limitation de la Phase 1

L'axe 4 (cohérence coranique) est limité car on ne connaît pas encore le sens que notre moteur donnera aux autres versets. On fait de notre mieux avec le contexte disponible.

---

## Phase 2 — Révision de cohérence globale (future)

**Pré-requis** : tout le Coran analysé en phase 1 (6236 versets).

### Objectif

Garantir qu'aucun sens retenu ne contredit un autre sens retenu dans un verset différent quand ils parlent du même sujet.

### Fonctionnement

Pour chaque mot unique (`word_key`) :
1. Récupérer tous les versets avec le sens retenu par la phase 1
2. GPT analyse la cohérence globale de tous ces sens ensemble
3. GPT propose des révisions si nécessaire
4. Les révisions sont stockées avec justification
5. Validation manuelle avant application

### Colonnes prévues dans `verse_word_analyses`

```sql
sense_phase1 TEXT,          -- copie du sens phase 1
sense_phase2 TEXT,          -- sens révisé phase 2
revision_reason TEXT,       -- justification révision
phase INT DEFAULT 1,        -- 1 ou 2
revised_at TIMESTAMPTZ,     -- date de révision
revision_validated BOOLEAN DEFAULT FALSE
```

### Résultat attendu

Un corpus coranique où chaque mot a un sens cohérent avec tous ses autres usages. Aucune contradiction interne. Notre propre traduction construite depuis l'intérieur du texte.

---

## Analogie

C'est comme une traduction humaine sérieuse :
- **Premier passage** (Phase 1) : traduire verset par verset, du début à la fin
- **Second passage** (Phase 2) : relecture globale pour harmoniser les sens entre versets

Notre moteur fait exactement ça, mais de manière systématique et documentée sur les 6236 versets.

---

## Priorité actuelle

Phase 1 : analyser tous les versets de la sourate Al-Baqara (286 versets) pour valider le pipeline avant de lancer sur tout le Coran.

---

## Stack technique

- Next.js 14.2 App Router, TypeScript, Tailwind CSS 3
- Supabase PostgreSQL
- OpenAI GPT-4o (étapes 1, 2, 4) / pas de mini
- Pipeline fire-and-forget avec job polling
- Données QAC (Quranic Arabic Corpus) pour les racines et occurrences

## Tables principales

| Table | Rôle |
|-------|------|
| `surahs` | 114 sourates |
| `verses` | 6236 versets (texte arabe) |
| `words` | 77429 mots QAC (racine, translitération, pos_tag) |
| `word_analyses` | 1 ligne par mot-clé analysé (racine, retenu) |
| `word_meanings` | Sens étymologiques par mot (6-8 sens, status, axes) |
| `verse_analyses` | Segments synchronisés + traduction par verset |
| `verse_word_analyses` | **Nouvelle** — sens retenu par verset × mot (base des compteurs) |
| `word_daily` | 3 expressions du quotidien par racine |
| `analysis_jobs` | Suivi des jobs d'analyse |
