import type { TitleRank } from '@/types'

interface TitleInfo {
  title: TitleRank
  emoji: string
  description: string
}

const TITLES: Array<{ minPercent: number } & TitleInfo> = [
  { minPercent: 95, title: 'Lenda', emoji: '👑', description: 'Você É o Claude Code.' },
  { minPercent: 80, title: 'Ninja', emoji: '🥷', description: 'Você vive o Claude Code.' },
  { minPercent: 60, title: 'Hacker', emoji: '💻', description: 'Uso avançado — impressionante!' },
  { minPercent: 40, title: 'Operador', emoji: '⚙️', description: 'Você manja do básico e já vai longe.' },
  { minPercent: 20, title: 'Explorador', emoji: '🔍', description: 'Já está conhecendo o terreno.' },
  { minPercent: 0, title: 'Visitante', emoji: '🌱', description: 'Você deu os primeiros passos!' },
]

export function getTitle(scorePercent: number): TitleRank {
  for (const entry of TITLES) {
    if (scorePercent >= entry.minPercent) return entry.title
  }
  return 'Visitante'
}

export function getTitleInfo(title: TitleRank): TitleInfo {
  return TITLES.find((t) => t.title === title) ?? TITLES[TITLES.length - 1]
}
