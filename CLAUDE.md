# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A True/False quiz web app about Claude Code (in Portuguese/PT-BR). Players answer 15 questions per session drawn from a 100-question bank, scored by difficulty and speed, with a global leaderboard via Supabase.

## Commands

```bash
npm run dev        # Start Vite dev server
npm run build      # tsc -b && vite build
npm run preview    # Preview production build
npm run lint       # ESLint
npm run format     # Prettier --write
npm run test       # Vitest (unit + component tests)
npm run test -- --run src/lib/scoring.test.ts  # Run a single test file
```

## Environment Variables

Copy `.env.example` to `.env.local` and fill in:
```
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=
```

## Tech Stack

| Concern | Library |
|---------|---------|
| Framework | React 18 + Vite + TypeScript |
| Styling | Tailwind CSS |
| State | Zustand (`src/store/quizStore.ts`) |
| Routing | React Router v6 |
| Animations | Framer Motion |
| Audio | Howler.js |
| Share cards | html-to-image |
| Backend | Supabase (PostgreSQL) |
| Testing | Vitest + React Testing Library |

## Architecture

```
src/
├── app/            # App.tsx (root) + router.tsx (React Router v6)
├── pages/          # Home, Quiz, Result, Leaderboard
├── components/     # QuestionCard, Timer, AnswerButtons, FeedbackModal,
│                   # ProgressBar, ShareCard, TitleBadge, Terminal/
├── store/          # quizStore.ts — single Zustand store for session state
├── data/           # questions.ts — all 100 static Q&A objects
├── lib/            # scoring.ts, selectQuestions.ts, titles.ts,
│                   # supabase.ts, share.ts
├── hooks/          # useTimer, useSoundEffect, useLocalHistory
├── types/          # index.ts — Question, Session, SessionAnswer interfaces
├── assets/         # sounds/ (MP3/OGG), fonts/ (JetBrains Mono, Inter)
└── styles/         # globals.css (Tailwind base + theme vars)
```

### Key Data Flow

1. **Home** → user enters nickname → store initializes session
2. **Quiz** → `selectQuestions` picks 15 (6 easy, 6 medium, 3 hard) → each answer goes through `scoring.ts` → stored in Zustand
3. **Result** → reads session from store, submits to Supabase leaderboard, generates share card
4. **Leaderboard** → fetches top 50 from Supabase, no auth required

### Question Schema

```typescript
interface Question {
  id: string;                    // "q-001" through "q-100"
  category: 'negocio' | 'setup' | 'comandos' | 'avancado';
  difficulty: 'iniciante' | 'intermediario' | 'avancado';
  statement: string;
  answer: boolean;
  explanation: string;
  referenceUrl?: string;
}
```

### Scoring

```
points = difficulty_weight + speed_bonus
speed_bonus = max(0, round((time_remaining / 20) * difficulty_weight * 0.5))
// weights: iniciante=10, intermediario=20, avancado=30
```

### Achievement Titles (score %)

`0–19%` Visitante · `20–39%` Explorador · `40–59%` Operador · `60–79%` Hacker · `80–94%` Ninja · `95–100%` Lenda

## Visual Theme

Terminal/dark aesthetic with these CSS custom properties:
- `--bg`: `#0a0e14` · `--fg`: `#c9d1d9`
- `--success`: `#39ff14` (neon green) · `--error`: `#ff4d4d` · `--warning`: `#f0b74a`
- Monospace font (JetBrains Mono) for UI/questions; Inter for explanations
- Terminal prompt prefixes (`$ `, `>`) used decoratively throughout

## Supabase Leaderboard Table

```sql
CREATE TABLE leaderboard (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  nickname text NOT NULL,        -- max 20 chars
  score integer NOT NULL,
  title text NOT NULL,
  correct_count integer,         -- 0–15
  total_time_ms integer,
  created_at timestamptz DEFAULT now()
);
```

Read with `supabase.from('leaderboard').select().order('score', { ascending: false }).limit(50)`.

## Spec

Full requirements and wireframes are in `prd.md`.
