import { describe, it, expect } from 'vitest'
import { calculatePoints, getMaxScore } from './scoring'

describe('calculatePoints', () => {
  it('retorna peso + bônus máximo para resposta instantânea', () => {
    expect(calculatePoints('iniciante', 20_000)).toBe(15) // 10 + 5
    expect(calculatePoints('intermediario', 20_000)).toBe(30) // 20 + 10
    expect(calculatePoints('avancado', 20_000)).toBe(45) // 30 + 15
  })

  it('retorna apenas o peso base sem bônus quando não há tempo restante', () => {
    expect(calculatePoints('iniciante', 0)).toBe(10)
    expect(calculatePoints('intermediario', 0)).toBe(20)
    expect(calculatePoints('avancado', 0)).toBe(30)
  })

  it('calcula bônus proporcional ao tempo restante', () => {
    // round((10_000/20_000) * 20 * 0.5) = round(5) = 5 → 20+5=25
    expect(calculatePoints('intermediario', 10_000)).toBe(25)
    // round((10_000/20_000) * 10 * 0.5) = round(2.5) = 3 → 10+3=13
    expect(calculatePoints('iniciante', 10_000)).toBe(13)
  })

  it('nunca retorna bônus negativo', () => {
    expect(calculatePoints('avancado', -100)).toBe(30)
  })
})

describe('getMaxScore', () => {
  it('calcula score máximo de uma sessão padrão 6+6+3', () => {
    const difficulties = [
      ...Array(6).fill('iniciante'),
      ...Array(6).fill('intermediario'),
      ...Array(3).fill('avancado'),
    ] as const
    const max = getMaxScore(difficulties as Parameters<typeof getMaxScore>[0])
    // iniciante: 6 * 15 = 90
    // intermediario: 6 * 30 = 180
    // avancado: 3 * 45 = 135
    // total: 405
    expect(max).toBe(405)
  })
})
