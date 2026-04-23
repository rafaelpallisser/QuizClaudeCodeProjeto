import { useCallback } from 'react'
import type { Session } from '@/types'

const HISTORY_KEY = 'ccq:history'
const NICKNAME_KEY = 'ccq:nickname'
const MAX_HISTORY = 10

export function useLocalHistory() {
  const saveSession = useCallback((session: Session) => {
    try {
      const existing: Session[] = JSON.parse(localStorage.getItem(HISTORY_KEY) ?? '[]')
      const updated = [session, ...existing].slice(0, MAX_HISTORY)
      localStorage.setItem(HISTORY_KEY, JSON.stringify(updated))
      localStorage.setItem(NICKNAME_KEY, session.nickname)
    } catch {
      // localStorage unavailable — silently ignore
    }
  }, [])

  const getHistory = useCallback((): Session[] => {
    try {
      return JSON.parse(localStorage.getItem(HISTORY_KEY) ?? '[]')
    } catch {
      return []
    }
  }, [])

  const getSavedNickname = useCallback((): string => {
    try {
      return localStorage.getItem(NICKNAME_KEY) ?? ''
    } catch {
      return ''
    }
  }, [])

  return { saveSession, getHistory, getSavedNickname }
}
