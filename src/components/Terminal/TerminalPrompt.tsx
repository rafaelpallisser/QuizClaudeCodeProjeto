import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
}

export function TerminalPrompt({ children, className = '' }: Props) {
  return (
    <div className={`flex items-start gap-2 font-mono ${className}`}>
      <span className="text-success select-none shrink-0">$</span>
      <span>{children}</span>
    </div>
  )
}
