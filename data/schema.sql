-- ============================================================
-- Schéma SQLite — Application d'analyse coranique
-- Sources : Quranic Arabic Corpus (QAC) + données éditoriales
-- ============================================================

PRAGMA journal_mode = WAL;
PRAGMA foreign_keys = ON;

-- ------------------------------------------------------------
-- 1. SOURATES
-- ------------------------------------------------------------
CREATE TABLE IF NOT EXISTS surahs (
    id            INTEGER PRIMARY KEY,          -- 1..114
    name_arabic   TEXT    NOT NULL,             -- ex. البقرة
    name_latin    TEXT    NOT NULL,             -- ex. Al-Baqara
    name_french   TEXT,                         -- ex. La Vache
    revelation    TEXT    CHECK (revelation IN ('mecquoise','médinoise')),
    order_rev     INTEGER,                      -- ordre de révélation
    verse_count   INTEGER NOT NULL,
    juz_start     INTEGER,                      -- premier juz'
    page_mushaf   INTEGER                       -- page Mushaf standard
);

-- ------------------------------------------------------------
-- 2. VERSETS (AYAT)
-- ------------------------------------------------------------
CREATE TABLE IF NOT EXISTS verses (
    id            INTEGER PRIMARY KEY AUTOINCREMENT,
    surah_id      INTEGER NOT NULL REFERENCES surahs(id),
    verse_number  INTEGER NOT NULL,             -- numéro au sein de la sourate
    text_arabic   TEXT    NOT NULL,             -- texte arabe sans diacritiques complexes
    text_uthmani  TEXT,                         -- écriture Uthmani (unicode)
    text_simple   TEXT,                         -- forme simplifiée (Quran Simple)
    translation_fr TEXT,                        -- traduction française
    translation_en TEXT,                        -- traduction anglaise
    juz           INTEGER,
    hizb          REAL,                         -- ex. 1.5 = 2ème moitié du 1er hizb
    page_mushaf   INTEGER,
    sajda         INTEGER DEFAULT 0 CHECK (sajda IN (0,1)),  -- verset de prosternation
    UNIQUE(surah_id, verse_number)
);

CREATE INDEX IF NOT EXISTS idx_verses_surah ON verses(surah_id);

-- ------------------------------------------------------------
-- 3. RACINES ARABES
-- ------------------------------------------------------------
CREATE TABLE IF NOT EXISTS roots (
    id            INTEGER PRIMARY KEY AUTOINCREMENT,
    root          TEXT    NOT NULL UNIQUE,      -- ex. ك-ت-ب  (3 ou 4 lettres)
    root_ascii    TEXT,                         -- translitération Buckwalter
    meaning_fr    TEXT,                         -- sens principal français
    meaning_en    TEXT,                         -- sens principal anglais
    occurrence_count INTEGER DEFAULT 0          -- dénombrement total mis à jour par trigger
);

CREATE INDEX IF NOT EXISTS idx_roots_root ON roots(root);

-- ------------------------------------------------------------
-- 4. MOTS (TOKENS)
-- Chaque token correspond à un segment de forme orthographique
-- dans le texte (séparable par espace dans l'écriture)
-- ------------------------------------------------------------
CREATE TABLE IF NOT EXISTS words (
    id            INTEGER PRIMARY KEY AUTOINCREMENT,
    verse_id      INTEGER NOT NULL REFERENCES verses(id),
    position      INTEGER NOT NULL,             -- position dans le verset (1-based)
    form          TEXT    NOT NULL,             -- forme arabe du token
    form_simple   TEXT,                         -- forme sans voyelles
    transliteration TEXT,                       -- translitération latine
    translation_fr TEXT,
    translation_en TEXT,
    UNIQUE(verse_id, position)
);

CREATE INDEX IF NOT EXISTS idx_words_verse ON words(verse_id);
CREATE INDEX IF NOT EXISTS idx_words_form  ON words(form_simple);

-- ------------------------------------------------------------
-- 5. MORPHÈMES (SEGMENTS QAC)
-- Un mot peut contenir préfixe(s) + racine + suffixe(s)
-- ex. وَكَتَبَ → [و + كَتَبَ]  (conj. + verbe)
-- ------------------------------------------------------------
CREATE TABLE IF NOT EXISTS morphemes (
    id            INTEGER PRIMARY KEY AUTOINCREMENT,
    word_id       INTEGER NOT NULL REFERENCES words(id),
    segment_index INTEGER NOT NULL,             -- ordre dans le mot (1-based)
    -- Localisation QAC : "surah:verse:word:segment"
    qac_location  TEXT    UNIQUE,               -- ex. "2:5:3:1"
    form          TEXT    NOT NULL,             -- forme du morphème
    -- Partie du discours (POS)
    pos           TEXT    NOT NULL,             -- V/N/ADJ/PRON/P/CONJ/DET/REL/T/INL/PN/ADV
    pos_label_fr  TEXT,                         -- libellé français
    -- Informations morphologiques (encodées en JSON pour flexibilité)
    features      TEXT,                         -- JSON : {"aspect":"PERF","gender":"M",...}
    -- Lien vers la racine (pour pos = V, N, ADJ, etc.)
    root_id       INTEGER REFERENCES roots(id),
    lemma         TEXT,                         -- lemme normalisé
    lemma_ascii   TEXT,                         -- lemme en Buckwalter
    -- Cas grammatical
    case_gram     TEXT    CHECK (case_gram IN ('NOM','ACC','GEN', NULL)),
    state         TEXT    CHECK (state IN ('DEF','INDEF','CONST', NULL)),
    -- Verbe : temps / voix / forme
    verb_form     TEXT,                         -- I..X (formes verbales arabes)
    aspect        TEXT    CHECK (aspect IN ('PERF','IMPF','IMPV', NULL)),
    voice         TEXT    CHECK (voice IN ('ACT','PASS', NULL)),
    mood          TEXT    CHECK (mood IN ('IND','SUBJ','JUSS', NULL)),
    person        TEXT    CHECK (person IN ('1','2','3', NULL)),
    gender        TEXT    CHECK (gender IN ('M','F', NULL)),
    number_gram   TEXT    CHECK (number_gram IN ('SG','DU','PL', NULL)),
    UNIQUE(word_id, segment_index)
);

CREATE INDEX IF NOT EXISTS idx_morph_word   ON morphemes(word_id);
CREATE INDEX IF NOT EXISTS idx_morph_root   ON morphemes(root_id);
CREATE INDEX IF NOT EXISTS idx_morph_pos    ON morphemes(pos);
CREATE INDEX IF NOT EXISTS idx_morph_lemma  ON morphemes(lemma_ascii);

-- ------------------------------------------------------------
-- 6. OCCURRENCES DE RACINES (vue matérialisée)
-- Facilite la recherche de toutes les occurrences d'une racine
-- ------------------------------------------------------------
CREATE TABLE IF NOT EXISTS root_occurrences (
    id            INTEGER PRIMARY KEY AUTOINCREMENT,
    root_id       INTEGER NOT NULL REFERENCES roots(id),
    morpheme_id   INTEGER NOT NULL REFERENCES morphemes(id),
    verse_id      INTEGER NOT NULL REFERENCES verses(id),
    surah_id      INTEGER NOT NULL REFERENCES surahs(id),
    UNIQUE(morpheme_id)           -- un morphème → une seule occurrence
);

CREATE INDEX IF NOT EXISTS idx_occ_root   ON root_occurrences(root_id);
CREATE INDEX IF NOT EXISTS idx_occ_verse  ON root_occurrences(verse_id);
CREATE INDEX IF NOT EXISTS idx_occ_surah  ON root_occurrences(surah_id);

-- ------------------------------------------------------------
-- 7. THÈMES / TAGS ÉDITORIAUX
-- ------------------------------------------------------------
CREATE TABLE IF NOT EXISTS themes (
    id            INTEGER PRIMARY KEY AUTOINCREMENT,
    name_fr       TEXT    NOT NULL UNIQUE,
    name_en       TEXT,
    name_arabic   TEXT,
    color         TEXT                          -- couleur hex pour affichage
);

CREATE TABLE IF NOT EXISTS verse_themes (
    verse_id      INTEGER NOT NULL REFERENCES verses(id),
    theme_id      INTEGER NOT NULL REFERENCES themes(id),
    PRIMARY KEY (verse_id, theme_id)
);

-- ------------------------------------------------------------
-- 8. NOTES / ANNOTATIONS UTILISATEUR
-- ------------------------------------------------------------
CREATE TABLE IF NOT EXISTS annotations (
    id            INTEGER PRIMARY KEY AUTOINCREMENT,
    verse_id      INTEGER NOT NULL REFERENCES verses(id),
    morpheme_id   INTEGER REFERENCES morphemes(id),   -- optionnel : annotation sur morphème
    content       TEXT    NOT NULL,
    type          TEXT    DEFAULT 'note'
                          CHECK (type IN ('note','question','cross-ref','variant')),
    created_at    TEXT    DEFAULT (datetime('now')),
    updated_at    TEXT    DEFAULT (datetime('now'))
);

CREATE INDEX IF NOT EXISTS idx_annot_verse ON annotations(verse_id);

-- ------------------------------------------------------------
-- 9. RELATIONS INTER-VERSETS (cohérence thématique)
-- Pour le CoherenceEngine
-- ------------------------------------------------------------
CREATE TABLE IF NOT EXISTS verse_relations (
    id            INTEGER PRIMARY KEY AUTOINCREMENT,
    source_id     INTEGER NOT NULL REFERENCES verses(id),
    target_id     INTEGER NOT NULL REFERENCES verses(id),
    relation_type TEXT    NOT NULL
                          CHECK (relation_type IN (
                              'root_shared',    -- racine commune
                              'theme_shared',   -- thème commun
                              'lexical_echo',   -- écho lexical
                              'narrative_seq',  -- séquence narrative
                              'cross_ref',      -- renvoi explicite
                              'antithesis'      -- antithèse
                          )),
    weight        REAL    DEFAULT 1.0,          -- force de la relation
    note          TEXT,
    UNIQUE(source_id, target_id, relation_type)
);

CREATE INDEX IF NOT EXISTS idx_rel_source ON verse_relations(source_id);
CREATE INDEX IF NOT EXISTS idx_rel_target ON verse_relations(target_id);

-- ------------------------------------------------------------
-- TRIGGERS : mise à jour automatique de root.occurrence_count
-- ------------------------------------------------------------
CREATE TRIGGER IF NOT EXISTS trg_occ_insert
AFTER INSERT ON root_occurrences
BEGIN
    UPDATE roots SET occurrence_count = occurrence_count + 1
    WHERE id = NEW.root_id;
END;

CREATE TRIGGER IF NOT EXISTS trg_occ_delete
AFTER DELETE ON root_occurrences
BEGIN
    UPDATE roots SET occurrence_count = occurrence_count - 1
    WHERE id = OLD.root_id;
END;

-- ------------------------------------------------------------
-- VUE : enrichissement rapide d'un verset
-- ------------------------------------------------------------
CREATE VIEW IF NOT EXISTS v_verse_full AS
SELECT
    v.id            AS verse_id,
    s.id            AS surah_id,
    s.name_arabic   AS surah_arabic,
    s.name_latin    AS surah_latin,
    s.name_french   AS surah_french,
    v.verse_number,
    v.text_uthmani,
    v.text_simple,
    v.translation_fr,
    v.translation_en,
    v.juz,
    v.page_mushaf
FROM verses v
JOIN surahs s ON s.id = v.surah_id;

-- ------------------------------------------------------------
-- VUE : morphèmes enrichis avec infos racine et verset
-- ------------------------------------------------------------
CREATE VIEW IF NOT EXISTS v_morpheme_full AS
SELECT
    m.id            AS morpheme_id,
    m.qac_location,
    m.form,
    m.pos,
    m.pos_label_fr,
    m.features,
    m.lemma,
    m.lemma_ascii,
    m.root_id,
    r.root          AS root_arabic,
    r.root_ascii,
    r.meaning_fr    AS root_meaning_fr,
    r.occurrence_count AS root_occurrences,
    w.id            AS word_id,
    w.position      AS word_position,
    v.id            AS verse_id,
    v.verse_number,
    s.id            AS surah_id,
    s.name_latin    AS surah_latin
FROM morphemes m
JOIN words      w ON w.id = m.word_id
JOIN verses     v ON v.id = w.verse_id
JOIN surahs     s ON s.id = v.surah_id
LEFT JOIN roots r ON r.id = m.root_id;
