import { create } from 'zustand'
import type { Question, SessionAnswer, Session, QuizStatus, TitleRank } from '@/types'
import { selectQuestions } from '@/lib/selectQuestions'
import { getTitle } from '@/lib/titles'
import { getMaxScore } from '@/lib/scoring'
import { questions as allQuestions } from '@/data/questions'

interface QuizState {
  status: QuizStatus
  sessionId: string
  nickname: string
  questions: Question[]
  answers: SessionAnswer[]
  currentIndex: number
  totalScore: number
  startedAt: string
  finishedAt: string

  startSession: (nickname: string) => void
  submitAnswer: (answer: SessionAnswer) => void
  advanceQuestion: () => void
  finishSession: () => void
  resetSession: () => void
  getSession: () => Session | null
  getScorePercent: () => number
  getTitle: () => TitleRank
  getMaxPossibleScore: () => number
}

export const useQuizStore = create<QuizState>((set, get) => ({
  status: 'idle',
  sessionId: '',
  nickname: '',
  questions: [],
  answers: [],
  currentIndex: 0,
  totalScore: 0,
  startedAt: '',
  finishedAt: '',

  startSession(nickname) {
    set({
      status: 'playing',
      sessionId: crypto.randomUUID(),
      nickname,
      questions: selectQuestions(allQuestions),
      answers: [],
      currentIndex: 0,
      totalScore: 0,
      startedAt: new Date().toISOString(),
      finishedAt: '',
    })
  },

  submitAnswer(answer) {
    set((state) => ({
      answers: [...state.answers, answer],
      totalScore: state.totalScore + answer.pointsEarned,
    }))
  },

  advanceQuestion() {
    set((state) => ({ currentIndex: state.currentIndex + 1 }))
  },

  finishSession() {
    set({ status: 'finished', finishedAt: new Date().toISOString() })
  },

  resetSession() {
    set({
      status: 'idle',
      sessionId: '',
      nickname: '',
      questions: [],
      answers: [],
      currentIndex: 0,
      totalScore: 0,
      startedAt: '',
      finishedAt: '',
    })
  },

  getSession() {
    const s = get()
    if (!s.sessionId) return null
    const scorePercent = s.getScorePercent()
    return {
      id: s.sessionId,
      nickname: s.nickname,
      startedAt: s.startedAt,
      finishedAt: s.finishedAt || undefined,
      questions: s.questions,
      answers: s.answers,
      totalScore: s.totalScore,
      title: getTitle(scorePercent),
    }
  },

  getScorePercent() {
    const s = get()
    const max = s.getMaxPossibleScore()
    if (max === 0) return 0
    return Math.round((s.totalScore / max) * 100)
  },

  getTitle() {
    return getTitle(get().getScorePercent())
  },

  getMaxPossibleScore() {
    return getMaxScore(get().questions.map((q) => q.difficulty))
  },
}))
