import { memo } from 'react'

interface Props {
  timeLeft: number
  total?: number
}

export const Timer = memo(function Timer({ timeLeft, total = 20 }: Props) {
  const percent = (timeLeft / total) * 100

  const colorClass =
    timeLeft <= 4
      ? 'bg-error text-error shadow-error animate-pulse_warn'
      : timeLeft <= 10
        ? 'bg-warning text-warning'
        : 'bg-success text-success'

  return (
    <div className="flex flex-col items-end gap-1">
      <span className={`font-mono font-bold text-2xl tabular-nums ${colorClass.split(' ').slice(1).join(' ')}`}>
        {String(timeLeft).padStart(2, '0')}s
      </span>
      <div className="h-1 w-24 bg-border rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-1000 ease-linear ${colorClass.split(' ')[0]}`}
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  )
})
