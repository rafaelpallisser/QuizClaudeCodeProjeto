import { describe, it, expect } from 'vitest'
import { selectQuestions } from './selectQuestions'
import { questions } from '@/data/questions'

describe('selectQuestions', () => {
  it('retorna exatamente 15 perguntas', () => {
    const selected = selectQuestions(questions, 42)
    expect(selected).toHaveLength(15)
  })

  it('distribui corretamente: 6 iniciante, 6 intermediario, 3 avancado', () => {
    const selected = selectQuestions(questions, 42)
    const byDiff = selected.reduce(
      (acc, q) => ({ ...acc, [q.difficulty]: (acc[q.difficulty] ?? 0) + 1 }),
      {} as Record<string, number>
    )
    expect(byDiff['iniciante']).toBe(6)
    expect(byDiff['intermediario']).toBe(6)
    expect(byDiff['avancado']).toBe(3)
  })

  it('não repete perguntas', () => {
    const selected = selectQuestions(questions, 123)
    const ids = selected.map((q) => q.id)
    expect(new Set(ids).size).toBe(ids.length)
  })

  it('representa ao menos 3 das 4 categorias', () => {
    const selected = selectQuestions(questions, 99)
    const cats = new Set(selected.map((q) => q.category))
    expect(cats.size).toBeGreaterThanOrEqual(3)
  })

  it('retorna resultados determinísticos com o mesmo seed', () => {
    const a = selectQuestions(questions, 7)
    const b = selectQuestions(questions, 7)
    expect(a.map((q) => q.id)).toEqual(b.map((q) => q.id))
  })

  it('retorna resultados diferentes com seeds distintos', () => {
    const a = selectQuestions(questions, 1)
    const b = selectQuestions(questions, 2)
    expect(a.map((q) => q.id)).not.toEqual(b.map((q) => q.id))
  })
})
