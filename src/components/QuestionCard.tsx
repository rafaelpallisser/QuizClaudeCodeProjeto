import { memo } from 'react'
import { motion } from 'framer-motion'
import type { Question } from '@/types'

interface Props {
  question: Question
  answered: boolean
}

const categoryLabel: Record<string, string> = {
  negocio: 'Negócio',
  setup: 'Instalação & Setup',
  comandos: 'Comandos',
  avancado: 'Avançado',
}

const difficultyLabel: Record<string, string> = {
  iniciante: 'Iniciante',
  intermediario: 'Intermediário',
  avancado: 'Avançado',
}

const difficultyColor: Record<string, string> = {
  iniciante: 'text-success',
  intermediario: 'text-warning',
  avancado: 'text-error',
}

export const QuestionCard = memo(function QuestionCard({ question, answered }: Props) {
  return (
    <motion.div
      key={question.id}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="card w-full max-w-2xl mx-auto"
    >
      <div className="flex justify-between items-center mb-4 text-xs font-mono">
        <span className="text-muted">{categoryLabel[question.category]}</span>
        <span className={difficultyColor[question.difficulty]}>{difficultyLabel[question.difficulty]}</span>
      </div>
      <p className={`text-lg leading-relaxed font-mono ${answered ? 'text-muted' : 'text-fg'}`}>
        {question.statement}
      </p>
    </motion.div>
  )
})
