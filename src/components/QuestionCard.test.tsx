import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { QuestionCard } from './QuestionCard'
import { AnswerButtons } from './AnswerButtons'
import type { Question } from '@/types'

const mockQuestion: Question = {
  id: 'q-001',
  category: 'negocio',
  difficulty: 'iniciante',
  statement: 'Claude Code é uma ferramenta de linha de comando desenvolvida pela Anthropic.',
  answer: true,
  explanation: 'Claude Code é o CLI oficial da Anthropic.',
}

describe('QuestionCard', () => {
  it('renderiza a afirmação da pergunta', () => {
    render(<QuestionCard question={mockQuestion} answered={false} />)
    expect(screen.getByText(mockQuestion.statement)).toBeInTheDocument()
  })

  it('mostra categoria e dificuldade', () => {
    render(<QuestionCard question={mockQuestion} answered={false} />)
    expect(screen.getByText('Negócio')).toBeInTheDocument()
    expect(screen.getByText('Iniciante')).toBeInTheDocument()
  })

  it('aplica estilo de texto atenuado quando respondido', () => {
    const { container } = render(<QuestionCard question={mockQuestion} answered={true} />)
    const statement = container.querySelector('p.text-muted')
    expect(statement).toBeInTheDocument()
  })
})

describe('AnswerButtons', () => {
  it('chama onAnswer com true ao clicar em Verdadeiro', () => {
    const onAnswer = vi.fn()
    render(<AnswerButtons onAnswer={onAnswer} disabled={false} />)
    fireEvent.click(screen.getByRole('button', { name: /verdadeiro/i }))
    expect(onAnswer).toHaveBeenCalledWith(true)
  })

  it('chama onAnswer com false ao clicar em Falso', () => {
    const onAnswer = vi.fn()
    render(<AnswerButtons onAnswer={onAnswer} disabled={false} />)
    fireEvent.click(screen.getByRole('button', { name: /falso/i }))
    expect(onAnswer).toHaveBeenCalledWith(false)
  })

  it('desabilita botões quando disabled=true', () => {
    const onAnswer = vi.fn()
    render(<AnswerButtons onAnswer={onAnswer} disabled={true} correctAnswer={true} />)
    const buttons = screen.getAllByRole('button')
    buttons.forEach((btn) => expect(btn).toBeDisabled())
  })

  it('não chama onAnswer quando disabled', () => {
    const onAnswer = vi.fn()
    render(<AnswerButtons onAnswer={onAnswer} disabled={true} correctAnswer={true} />)
    fireEvent.click(screen.getByRole('button', { name: /verdadeiro/i }))
    expect(onAnswer).not.toHaveBeenCalled()
  })
})
