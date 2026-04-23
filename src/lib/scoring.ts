import type { Difficulty } from '@/types'

const DIFFICULTY_WEIGHT: Record<Difficulty, number> = {
  iniciante: 10,
  intermediario: 20,
  avancado: 30,
}

export function calculatePoints(difficulty: Difficulty, timeRemainingMs: number): number {
  const weight = DIFFICULTY_WEIGHT[difficulty]
  const speedBonus = Math.max(0, Math.round((timeRemainingMs / 20_000) * weight * 0.5))
  return weight + speedBonus
}

export function getMaxScore(difficulties: Difficulty[]): number {
  return difficulties.reduce((sum, d) => sum + DIFFICULTY_WEIGHT[d] + Math.round(DIFFICULTY_WEIGHT[d] * 0.5), 0)
}

export { DIFFICULTY_WEIGHT }
