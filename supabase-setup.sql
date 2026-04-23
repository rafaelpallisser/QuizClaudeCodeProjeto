-- Execute no SQL Editor do Supabase Dashboard

CREATE TABLE IF NOT EXISTS leaderboard (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  nickname text NOT NULL CHECK (char_length(nickname) <= 20),
  score integer NOT NULL,
  title text NOT NULL,
  correct_count integer,
  total_time_ms integer,
  created_at timestamptz DEFAULT now()
);

-- Índice para ordenação eficiente do top 50
CREATE INDEX IF NOT EXISTS idx_leaderboard_score
  ON leaderboard (score DESC, created_at ASC);

-- Row Level Security
ALTER TABLE leaderboard ENABLE ROW LEVEL SECURITY;

-- Qualquer um pode ler
CREATE POLICY "leaderboard_select_public"
  ON leaderboard FOR SELECT
  USING (true);

-- Qualquer um pode inserir (rate limit via Edge Function)
CREATE POLICY "leaderboard_insert_public"
  ON leaderboard FOR INSERT
  WITH CHECK (true);

-- UPDATE e DELETE bloqueados (sem policy = bloqueado por padrão com RLS habilitado)
