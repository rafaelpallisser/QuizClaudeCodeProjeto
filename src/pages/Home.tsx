import { useState, useEffect, FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useQuizStore } from '@/store/quizStore'
import { useLocalHistory } from '@/hooks/useLocalHistory'
import { BlinkingCursor } from '@/components/Terminal/BlinkingCursor'

const ASCII_LOGO = `
 ██████╗██╗      █████╗ ██╗   ██╗██████╗ ███████╗
██╔════╝██║     ██╔══██╗██║   ██║██╔══██╗██╔════╝
██║     ██║     ███████║██║   ██║██║  ██║█████╗
██║     ██║     ██╔══██║██║   ██║██║  ██║██╔══╝
╚██████╗███████╗██║  ██║╚██████╔╝██████╔╝███████╗
 ╚═════╝╚══════╝╚═╝  ╚═╝ ╚═════╝ ╚═════╝ ╚══════╝
`.trim()

export default function Home() {
  const navigate = useNavigate()
  const { startSession } = useQuizStore()
  const { getSavedNickname } = useLocalHistory()
  const [nickname, setNickname] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    setNickname(getSavedNickname())
  }, [getSavedNickname])

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const trimmed = nickname.trim().slice(0, 20).replace(/[<>&"]/g, '')
    if (!trimmed) {
      setError('Digite um nickname para continuar.')
      return
    }
    startSession(trimmed)
    navigate('/quiz')
  }

  return (
    <main className="min-h-screen bg-bg flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-2xl"
      >
        <pre
          className="text-success text-[6px] sm:text-[8px] leading-tight font-mono text-center mb-2 select-none overflow-hidden"
          aria-hidden="true"
        >
          {ASCII_LOGO}
        </pre>

        <div className="text-center mb-8">
          <h1 className="text-xl sm:text-2xl font-bold font-mono text-fg">
            CODE QUIZ <BlinkingCursor />
          </h1>
          <p className="text-muted font-sans text-sm mt-2">
            15 perguntas • Verdadeiro ou Falso • Leaderboard global
          </p>
        </div>

        <div className="card max-w-md mx-auto">
          <form onSubmit={handleSubmit} noValidate>
            <label htmlFor="nickname" className="block text-sm font-mono text-muted mb-2">
              <span className="text-success">$</span> Digite seu nickname
            </label>
            <input
              id="nickname"
              type="text"
              value={nickname}
              onChange={(e) => {
                setNickname(e.target.value)
                setError('')
              }}
              maxLength={20}
              placeholder="seu_nickname"
              className="w-full bg-bg border border-border rounded-md px-4 py-3 font-mono text-fg
                placeholder:text-muted focus:outline-none focus:border-success transition-colors mb-1"
              aria-describedby={error ? 'nickname-error' : undefined}
              autoComplete="off"
              autoFocus
            />
            <div className="flex justify-between items-center mb-4 min-h-[20px]">
              {error ? (
                <p id="nickname-error" className="text-error text-xs font-mono" role="alert">{error}</p>
              ) : (
                <span />
              )}
              <p className="text-xs text-muted font-mono">{nickname.length}/20</p>
            </div>

            <button type="submit" className="btn-primary w-full font-mono text-base">
              Iniciar Quiz →
            </button>
          </form>
        </div>

        <p className="text-center text-muted text-xs font-mono mt-6">
          Perguntas baseadas na documentação oficial do Claude Code
        </p>
      </motion.div>
    </main>
  )
}
