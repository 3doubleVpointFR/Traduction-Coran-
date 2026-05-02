-- Données morphologiques brutes (depuis QAC)
CREATE TABLE IF NOT EXISTS surahs (
  id INT PRIMARY KEY,
  name_ar TEXT,
  name_fr TEXT,
  name_latin TEXT,
  verse_count INT,
  revelation TEXT
);

CREATE TABLE IF NOT EXISTS verses (
  id SERIAL PRIMARY KEY,
  surah_id INT REFERENCES surahs(id),
  verse_num INT,
  arabic_text TEXT DEFAULT '',
  UNIQUE(surah_id, verse_num)
);

CREATE TABLE IF NOT EXISTS words (
  id SERIAL PRIMARY KEY,
  verse_id INT REFERENCES verses(id),
  position INT,
  arabic TEXT DEFAULT '',
  root TEXT DEFAULT '',
  transliteration TEXT DEFAULT '',
  pos_tag TEXT DEFAULT ''
);

-- Analyses générées par LLM — une ligne par mot analysé
CREATE TABLE IF NOT EXISTS word_analyses (
  id SERIAL PRIMARY KEY,
  word_key TEXT UNIQUE NOT NULL,
  root_ar TEXT,
  root_phon TEXT,
  root_meaning TEXT,
  retenu TEXT,
  model_used TEXT,
  prompt_version TEXT,
  generated_at TIMESTAMPTZ DEFAULT NOW(),
  validated BOOLEAN DEFAULT FALSE,
  validated_at TIMESTAMPTZ,
  total_occurrences INT DEFAULT 0,
  analysis_step TEXT  -- 'senses_done' | 'occurrences_done' | 'classified' | 'sense_selected'
);

-- Sens étymologiques avec classification par occurrences
CREATE TABLE IF NOT EXISTS word_meanings (
  id SERIAL PRIMARY KEY,
  analysis_id INT REFERENCES word_analyses(id) ON DELETE CASCADE,
  meaning_type TEXT DEFAULT 'etymology' CHECK (meaning_type IN ('etymology', 'quranic')),
  sense TEXT NOT NULL,
  sense_ar TEXT,
  description TEXT DEFAULT '',
  period TEXT,  -- 'pre-islamique' | 'classique' | 'coranique' | 'tous'
  status TEXT CHECK (status IN ('ok', 'maybe', 'no')),
  occ_count INT DEFAULT 0,
  occ_refs JSONB DEFAULT '[]',
  proof_ref TEXT,
  proof_phon TEXT,
  proof_tr TEXT,
  proof_ctx TEXT,
  display_order INT
);

-- Occurrences contextualisées (toutes, classifiées par sens)
CREATE TABLE IF NOT EXISTS word_occurrences (
  id SERIAL PRIMARY KEY,
  analysis_id INT REFERENCES word_analyses(id) ON DELETE CASCADE,
  before_ref TEXT, before_ar TEXT, before_phon TEXT, before_tr TEXT,
  main_ref TEXT, main_ar TEXT, main_phon TEXT, main_tr TEXT,
  after_ref TEXT, after_ar TEXT, after_phon TEXT, after_tr TEXT,
  classified_sense TEXT,    -- sens étymologique principal
  classified_sense_2 TEXT   -- sens secondaire (optionnel)
);

-- Phrases du quotidien (3 par mot)
CREATE TABLE IF NOT EXISTS word_daily (
  id SERIAL PRIMARY KEY,
  analysis_id INT REFERENCES word_analyses(id) ON DELETE CASCADE,
  arabic TEXT,
  phon TEXT,
  french TEXT
);

-- Analyses de versets (lecture synchronisée)
CREATE TABLE IF NOT EXISTS verse_analyses (
  id SERIAL PRIMARY KEY,
  verse_id INT REFERENCES verses(id) UNIQUE,
  segments JSONB,
  full_translation TEXT,
  model_used TEXT,
  prompt_version TEXT,
  generated_at TIMESTAMPTZ DEFAULT NOW(),
  validated BOOLEAN DEFAULT FALSE,
  verification_done BOOLEAN DEFAULT FALSE,  -- Indique si les 3 vérifs ont été passées et le verset est prêt pour prod
  verification_done_at TIMESTAMPTZ           -- Date de la mise en prod
);

-- Jobs d'analyse avec suivi par étape
CREATE TABLE IF NOT EXISTS analysis_jobs (
  id SERIAL PRIMARY KEY,
  type TEXT,
  target_key TEXT,
  status TEXT DEFAULT 'pending',
  step TEXT,
  step_total INT DEFAULT 6,
  step_current INT DEFAULT 0,
  step_detail TEXT,
  error TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  started_at TIMESTAMPTZ,
  completed_at TIMESTAMPTZ
);

-- Index pour performance
CREATE INDEX IF NOT EXISTS idx_verses_surah ON verses(surah_id);
CREATE INDEX IF NOT EXISTS idx_words_verse ON words(verse_id);
CREATE INDEX IF NOT EXISTS idx_words_root ON words(root);
CREATE INDEX IF NOT EXISTS idx_word_meanings_analysis ON word_meanings(analysis_id);
CREATE INDEX IF NOT EXISTS idx_word_occurrences_analysis ON word_occurrences(analysis_id);
CREATE INDEX IF NOT EXISTS idx_word_daily_analysis ON word_daily(analysis_id);
CREATE INDEX IF NOT EXISTS idx_analysis_jobs_status ON analysis_jobs(status);
CREATE INDEX IF NOT EXISTS idx_word_occurrences_sense ON word_occurrences(classified_sense);
