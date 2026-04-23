import { memo, useEffect } from 'react'

interface Props {
  onAnswer: (answer: boolean) => void
  disabled: boolean
  correctAnswer?: boolean
  userAnswer?: boolean | null
}

export const AnswerButtons = memo(function AnswerButtons({ onAnswer, disabled, correctAnswer, userAnswer }: Props) {
  useEffect(() => {
    if (disabled) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'v' || e.key === 'V') onAnswer(true)
      if (e.key === 'f' || e.key === 'F') onAnswer(false)
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [disabled, onAnswer])

  const getBtnClass = (value: boolean) => {
    const base = 'flex-1 py-4 px-6 rounded-lg font-mono font-bold text-xl transition-all min-h-[56px] border-2'
    if (!disabled) {
      return value
        ? `${base} border-success text-success hover:bg-success hover:text-bg active:scale-95 focus-visible:ring-2 focus-visible:ring-success`
        : `${base} border-error text-error hover:bg-error hover:text-bg active:scale-95 focus-visible:ring-2 focus-visible:ring-error`
    }
    if (correctAnswer === value) return `${base} border-success bg-success text-bg`
    if (userAnswer === value && userAnswer !== correctAnswer) return `${base} border-error bg-error/20 text-error`
    return `${base} border-border text-muted opacity-50`
  }

  return (
    <div className="flex gap-4 w-full max-w-2xl mx-auto" role="group" aria-label="Opções de resposta">
      <button
        className={getBtnClass(true)}
        onClick={() => onAnswer(true)}
        disabled={disabled}
        aria-label="Verdadeiro (tecla V)"
        aria-pressed={userAnswer === true}
      >
        ✓ Verdadeiro
        {!disabled && <span className="ml-2 text-xs opacity-60">[V]</span>}
      </button>
      <button
        className={getBtnClass(false)}
        onClick={() => onAnswer(false)}
        disabled={disabled}
        aria-label="Falso (tecla F)"
        aria-pressed={userAnswer === false}
      >
        ✗ Falso
        {!disabled && <span className="ml-2 text-xs opacity-60">[F]</span>}
      </button>
    </div>
  )
})
