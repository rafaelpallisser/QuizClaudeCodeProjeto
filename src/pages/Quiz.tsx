import { useEffect, useReducer, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useQuizStore } from '@/store/quizStore'
import { useTimer } from '@/hooks/useTimer'
import { useSoundEffect } from '@/hooks/useSoundEffect'
import { useLocalHistory } from '@/hooks/useLocalHistory'
import { calculatePoints } from '@/lib/scoring'
import { ProgressBar } from '@/components/ProgressBar'
import { QuestionCard } from '@/components/QuestionCard'
import { Timer } from '@/components/Timer'
import { AnswerButtons } from '@/components/AnswerButtons'
import { FeedbackModal } from '@/components/FeedbackModal'
import type { SessionAnswer } from '@/types'

const QUESTION_SECONDS = 20

interface QuizUiState {
  answered: boolean
  lastAnswer: SessionAnswer | null
  answerStartMs: number
  shakeKey: number
}

type QuizUiAction =
  | { type: 'SUBMIT'; answer: SessionAnswer; shake: boolean }
  | { type: 'RESET' }

function quizUiReducer(state: QuizUiState, action: QuizUiAction): QuizUiState {
  switch (action.type) {
    case 'SUBMIT':
      return {
        ...state,
        answered: true,
        lastAnswer: action.answer,
        shakeKey: action.shake ? state.shakeKey + 1 : state.shakeKey,
      }
    case 'RESET':
      return {
        ...state,
        answered: false,
        lastAnswer: null,
        answerStartMs: Date.now(),
      }
  }
}

export default function Quiz() {
  const navigate = useNavigate()
  const { status, questions, currentIndex, submitAnswer, advanceQuestion, finishSession, getSession } = useQuizStore()
  const { play } = useSoundEffect()
  const { saveSession } = useLocalHistory()

  const [ui, dispatch] = useReducer(quizUiReducer, {
    answered: false,
    lastAnswer: null,
    answerStartMs: Date.now(),
    shakeKey: 0,
  })

  useEffect(() => {
    if (status === 'idle') navigate('/')
  }, [status, navigate])

  const handleExpire = useCallback(() => {
    if (ui.answered) return
    const q = questions[currentIndex]
    const answer: SessionAnswer = {
      questionId: q.id,
      userAnswer: null,
      isCorrect: false,
      pointsEarned: 0,
      timeSpentMs: QUESTION_SECONDS * 1000,
    }
    play('wrong')
    dispatch({ type: 'SUBMIT', answer, shake: true })
    submitAnswer(answer)
  }, [ui.answered, questions, currentIndex, submitAnswer, play])

  const { timeLeft, stop } = useTimer(QUESTION_SECONDS, handleExpire)

  useEffect(() => {
    dispatch({ type: 'RESET' })
  }, [currentIndex])

  const handleAnswer = useCallback(
    (userAnswer: boolean) => {
      if (ui.answered) return
      const q = questions[currentIndex]
      const timeSpentMs = Date.now() - ui.answerStartMs
      const timeRemainingMs = Math.max(0, timeLeft * 1000)
      const isCorrect = userAnswer === q.answer
      const pointsEarned = isCorrect ? calculatePoints(q.difficulty, timeRemainingMs) : 0

      const answer: SessionAnswer = { questionId: q.id, userAnswer, isCorrect, pointsEarned, timeSpentMs }
      stop()
      dispatch({ type: 'SUBMIT', answer, shake: !isCorrect })
      submitAnswer(answer)

      if (isCorrect) {
        play('correct')
      } else {
        play('wrong')
      }
    },
    [ui.answered, ui.answerStartMs, questions, currentIndex, timeLeft, stop, submitAnswer, play]
  )

  const handleNext = useCallback(() => {
    const isLast = currentIndex === questions.length - 1
    if (isLast) {
      finishSession()
      const session = getSession()
      if (session) saveSession(session)
      navigate('/result')
    } else {
      dispatch({ type: 'RESET' })
      advanceQuestion()
    }
  }, [currentIndex, questions.length, advanceQuestion, finishSession, getSession, saveSession, navigate])

  if (!questions.length || currentIndex >= questions.length) return null

  const question = questions[currentIndex]

  return (
    <main className="min-h-screen bg-bg flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-2xl flex flex-col gap-6">
        <div className="flex justify-between items-start gap-4">
          <div className="flex-1">
            <ProgressBar current={currentIndex + 1} total={questions.length} />
          </div>
          <Timer timeLeft={timeLeft} total={QUESTION_SECONDS} />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={`shake-${ui.shakeKey}`}
            animate={ui.shakeKey > 0 ? { x: [-8, 8, -5, 5, 0] } : {}}
            transition={{ duration: 0.4 }}
          >
            <QuestionCard question={question} answered={ui.answered} />
          </motion.div>
        </AnimatePresence>

        <AnswerButtons
          onAnswer={handleAnswer}
          disabled={ui.answered}
          correctAnswer={ui.answered ? question.answer : undefined}
          userAnswer={ui.answered ? ui.lastAnswer?.userAnswer : undefined}
        />
      </div>

      {ui.lastAnswer && (
        <FeedbackModal
          isOpen={ui.answered}
          isCorrect={ui.lastAnswer.isCorrect}
          question={question}
          pointsEarned={ui.lastAnswer.pointsEarned}
          onNext={handleNext}
        />
      )}
    </main>
  )
}
