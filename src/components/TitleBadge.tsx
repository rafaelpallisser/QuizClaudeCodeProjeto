import type { TitleRank } from '@/types'
import { getTitleInfo } from '@/lib/titles'

interface Props {
  title: TitleRank
  size?: 'sm' | 'lg'
}

export function TitleBadge({ title, size = 'lg' }: Props) {
  const info = getTitleInfo(title)
  const isSm = size === 'sm'

  return (
    <div className={`flex flex-col items-center gap-2 ${isSm ? '' : 'py-4'}`}>
      <span className={isSm ? 'text-3xl' : 'text-6xl'} aria-hidden="true">{info.emoji}</span>
      <p className={`font-mono font-bold text-fg ${isSm ? 'text-base' : 'text-2xl'}`}>{info.title}</p>
      <p className={`text-muted font-sans text-center ${isSm ? 'text-xs' : 'text-sm'}`}>{info.description}</p>
    </div>
  )
}
