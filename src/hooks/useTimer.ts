import { useState, useEffect, useRef, useCallback } from 'react'

export function useTimer(seconds: number, onExpire: () => void) {
  const [timeLeft, setTimeLeft] = useState(seconds)
  const onExpireRef = useRef(onExpire)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const activeRef = useRef(true)

  useEffect(() => {
    onExpireRef.current = onExpire
  }, [onExpire])

  const startInterval = useCallback(() => {
    intervalRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(intervalRef.current!)
          if (activeRef.current) onExpireRef.current()
          return 0
        }
        return prev - 1
      })
    }, 1000)
  }, [])

  useEffect(() => {
    activeRef.current = true
    setTimeLeft(seconds)
    startInterval()
    return () => {
      activeRef.current = false
      clearInterval(intervalRef.current!)
    }
  }, [seconds, startInterval])

  const stop = useCallback(() => {
    activeRef.current = false
    clearInterval(intervalRef.current!)
  }, [])

  const reset = useCallback(() => {
    clearInterval(intervalRef.current!)
    setTimeLeft(seconds)
    activeRef.current = true
    startInterval()
  }, [seconds, startInterval])

  return { timeLeft, stop, reset }
}
