import { useRef, useCallback, useEffect } from 'react'
import { Howl } from 'howler'

type SoundName = 'correct' | 'wrong' | 'tick' | 'finish'

const soundMap: Record<SoundName, string> = {
  correct: '/sounds/correct.mp3',
  wrong: '/sounds/wrong.mp3',
  tick: '/sounds/tick.mp3',
  finish: '/sounds/finish.mp3',
}

function isSoundEnabled(): boolean {
  try {
    return localStorage.getItem('ccq:sound') !== 'false'
  } catch {
    return true
  }
}

export function useSoundEffect() {
  const howls = useRef<Partial<Record<SoundName, Howl>>>({})

  useEffect(() => {
    return () => {
      Object.values(howls.current).forEach((h) => h?.unload())
    }
  }, [])

  const play = useCallback((name: SoundName) => {
    if (!isSoundEnabled()) return

    if (!howls.current[name]) {
      howls.current[name] = new Howl({ src: [soundMap[name]], volume: 0.6 })
    }
    howls.current[name]!.play()
  }, [])

  const toggleSound = useCallback((): boolean => {
    const next = !isSoundEnabled()
    localStorage.setItem('ccq:sound', String(next))
    return next
  }, [])

  return { play, isSoundEnabled, toggleSound }
}
