export const CATEGORIES = ['negocio', 'setup', 'comandos', 'avancado'] as const
export type Category = typeof CATEGORIES[number]
export type Difficulty = 'iniciante' | 'intermediario' | 'avancado'
export type QuizStatus = 'idle' | 'playing' | 'finished'
export type TitleRank = 'Visitante' | 'Explorador' | 'Operador' | 'Hacker' | 'Ninja' | 'Lenda'

export interface Question {
  id: string
  category: Category
  difficulty: Difficulty
  statement: string
  answer: boolean
  explanation: string
  referenceUrl?: string
}

export interface SessionAnswer {
  questionId: string
  userAnswer: boolean | null
  isCorrect: boolean
  pointsEarned: number
  timeSpentMs: number
}

export interface Session {
  id: string
  nickname: string
  startedAt: string
  finishedAt?: string
  questions: Question[]
  answers: SessionAnswer[]
  totalScore: number
  title: TitleRank
}

export interface LeaderboardEntry {
  id: string
  nickname: string
  score: number
  title: string
  correct_count: number
  total_time_ms: number
  created_at: string
}
