import { CATEGORIES } from '@/types'
import type { Question, Difficulty } from '@/types'

const SESSION_DISTRIBUTION: Record<Difficulty, number> = {
  iniciante: 6,
  intermediario: 6,
  avancado: 3,
}

function seededRandom(seed: number) {
  let s = seed
  return () => {
    s = (s * 1664525 + 1013904223) & 0xffffffff
    return (s >>> 0) / 0xffffffff
  }
}

function shuffle<T>(arr: T[], rand: () => number): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export function selectQuestions(pool: Question[], seed?: number): Question[] {
  const rand = seed !== undefined ? seededRandom(seed) : Math.random.bind(Math)

  const byDifficulty: Record<Difficulty, Question[]> = {
    iniciante: shuffle(pool.filter((q) => q.difficulty === 'iniciante'), rand),
    intermediario: shuffle(pool.filter((q) => q.difficulty === 'intermediario'), rand),
    avancado: shuffle(pool.filter((q) => q.difficulty === 'avancado'), rand),
  }

  const selected: Question[] = []

  for (const [diff, count] of Object.entries(SESSION_DISTRIBUTION) as [Difficulty, number][]) {
    selected.push(...byDifficulty[diff].slice(0, count))
  }

  // Guarantee at least 3 of 4 categories — if not met, swap one question
  const categories = new Set(selected.map((q) => q.category))
  if (categories.size < 3) {
    const categoryCounts = selected.reduce<Record<string, number>>((acc, q) => {
      acc[q.category] = (acc[q.category] ?? 0) + 1
      return acc
    }, {})
    for (const cat of CATEGORIES) {
      if (!categories.has(cat)) {
        const replacement = pool.find(
          (q) => q.category === cat && !selected.includes(q) && q.difficulty === 'iniciante'
        )
        if (!replacement) continue
        const dupIdx = selected.findIndex(
          (q) => q.difficulty === 'iniciante' && categoryCounts[q.category] > 1
        )
        if (dupIdx !== -1) {
          selected[dupIdx] = replacement
          break
        }
      }
    }
  }

  return selected
}
