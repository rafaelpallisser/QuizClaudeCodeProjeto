import { useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { Question } from '@/types'

interface Props {
  isOpen: boolean
  isCorrect: boolean
  question: Question
  pointsEarned: number
  onNext: () => void
}

export function FeedbackModal({ isOpen, isCorrect, question, pointsEarned, onNext }: Props) {
  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (isOpen && (e.key === 'Enter' || e.key === ' ')) {
        e.preventDefault()
        onNext()
      }
    },
    [isOpen, onNext]
  )

  useEffect(() => {
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [handleKey])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-bg/80 backdrop-blur-sm flex items-end sm:items-center justify-center p-4 z-50"
          role="dialog"
          aria-modal="true"
          aria-label={isCorrect ? 'Resposta correta' : 'Resposta incorreta'}
        >
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className={`card w-full max-w-2xl border-2 ${isCorrect ? 'border-success' : 'border-error'}`}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl" aria-hidden="true">{isCorrect ? '✅' : '❌'}</span>
              <div>
                <p className={`font-bold text-lg font-mono ${isCorrect ? 'text-success' : 'text-error'}`}>
                  {isCorrect ? 'Correto!' : 'Incorreto!'}
                </p>
                {isCorrect && (
                  <p className="text-sm text-muted">
                    +{pointsEarned} pts
                  </p>
                )}
              </div>
            </div>

            <div className="mb-4">
              <p className="text-xs text-muted font-mono mb-1">Resposta correta:</p>
              <p className="text-success font-mono font-bold">{question.answer ? 'Verdadeiro' : 'Falso'}</p>
            </div>

            <p className="text-fg font-sans text-sm leading-relaxed mb-4">{question.explanation}</p>

            {question.referenceUrl && (
              <a
                href={question.referenceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-muted hover:text-fg underline font-mono block mb-4"
              >
                Ver documentação →
              </a>
            )}

            <button
              onClick={onNext}
              className="btn-primary w-full font-mono"
              autoFocus
            >
              Próxima <span className="opacity-60 text-sm">[Enter]</span>
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
