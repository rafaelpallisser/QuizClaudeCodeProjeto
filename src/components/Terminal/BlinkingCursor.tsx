interface Props {
  className?: string
}

export function BlinkingCursor({ className = '' }: Props) {
  return (
    <span
      className={`inline-block w-2 h-5 bg-success animate-blink align-middle ${className}`}
      aria-hidden="true"
    />
  )
}
