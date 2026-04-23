import { memo } from 'react'

interface Props {
  current: number
  total: number
}

export const ProgressBar = memo(function ProgressBar({ current, total }: Props) {
  const percent = (current / total) * 100

  return (
    <div className="w-full" role="progressbar" aria-valuenow={current} aria-valuemin={0} aria-valuemax={total}>
      <div className="flex justify-between text-xs text-muted mb-2 font-mono">
        <span>Pergunta {current}/{total}</span>
        <span>{Math.round(percent)}%</span>
      </div>
      <div className="h-1.5 bg-border rounded-full overflow-hidden">
        <div
          className="h-full bg-success rounded-full transition-all duration-500 ease-out"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  )
})
