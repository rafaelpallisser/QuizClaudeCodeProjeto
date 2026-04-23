import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useQuizStore } from '@/store/quizStore'
import { TitleBadge } from '@/components/TitleBadge'
import { ShareCard } from '@/components/ShareCard'
import { insertScore } from '@/lib/supabase'
import { generateShareCard, shareOrDownload } from '@/lib/share'

export default function Result() {
  const navigate = useNavigate()
  const { status, questions, answers, totalScore, nickname, getTitle, getScorePercent, resetSession } =
    useQuizStore()
  const shareCardRef = useRef<HTMLDivElement>(null)
  const [sharing, setSharing] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState(false)

  const title = getTitle()
  const scorePercent = getScorePercent()
  const correctCount = answers.filter((a) => a.isCorrect).length

  useEffect(() => {
    if (status !== 'finished') {
      navigate('/')
      return
    }
    if (!submitted) {
      setSubmitted(true)
      const totalTimeMs = answers.reduce((sum, a) => sum + a.timeSpentMs, 0)
      insertScore({ nickname, score: totalScore, title, correct_count: correctCount, total_time_ms: totalTimeMs })
        .catch(() => setSubmitError(true))
    }
  }, [status, submitted, nickname, totalScore, title, correctCount, answers, navigate])

  const handleShare = async () => {
    if (!shareCardRef.current || sharing) return
    setSharing(true)
    try {
      const dataUrl = await generateShareCard(shareCardRef.current)
      await shareOrDownload(dataUrl, `claude-code-quiz-${nickname}.png`)
    } finally {
      setSharing(false)
    }
  }

  if (status !== 'finished') return null

  return (
    <main className="min-h-screen bg-bg flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-2xl flex flex-col gap-6"
      >
        <div className="card text-center">
          <p className="text-muted font-mono text-sm mb-4">Resultado de @{nickname}</p>
          {submitError && (
            <p className="text-error text-xs font-mono mb-4">
              Falha ao salvar pontuação. Verifique sua conexão.
            </p>
          )}
          <TitleBadge title={title} />
          <div className="flex justify-center gap-8 mt-6">
            <div>
              <p className="text-3xl font-bold font-mono text-success">{totalScore}</p>
              <p className="text-xs text-muted">pontos</p>
            </div>
            <div>
              <p className="text-3xl font-bold font-mono text-fg">{correctCount}/{questions.length}</p>
              <p className="text-xs text-muted">acertos</p>
            </div>
            <div>
              <p className="text-3xl font-bold font-mono text-warning">{scorePercent}%</p>
              <p className="text-xs text-muted">aproveitamento</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <button onClick={handleShare} disabled={sharing} className="btn-primary flex-1 font-mono">
            {sharing ? 'Gerando...' : '📤 Compartilhar'}
          </button>
          <button onClick={() => navigate('/leaderboard')} className="btn-ghost flex-1 font-mono">
            🏆 Leaderboard
          </button>
          <button
            onClick={() => { resetSession(); navigate('/') }}
            className="btn-ghost flex-1 font-mono"
          >
            🔄 Jogar Novamente
          </button>
        </div>

        <div className="card">
          <h2 className="font-mono font-bold text-fg mb-4">
            <span className="text-success">$</span> Gabarito completo
          </h2>
          <div className="flex flex-col gap-3">
            {questions.map((q, i) => {
              const a = answers[i]
              const isCorrect = a?.isCorrect ?? false
              return (
                <details key={q.id} className="group">
                  <summary className="flex items-start gap-3 cursor-pointer list-none py-2 hover:bg-surface rounded px-2 -mx-2">
                    <span className="shrink-0 text-sm">{isCorrect ? '✅' : '❌'}</span>
                    <span className="text-sm font-sans text-fg leading-snug">{q.statement}</span>
                  </summary>
                  <div className="pl-8 pt-2 pb-1">
                    <p className="text-xs font-mono text-success mb-1">
                      Resposta: {q.answer ? 'Verdadeiro' : 'Falso'}
                      {a && !isCorrect && a.userAnswer !== null && (
                        <span className="text-error ml-2">
                          (você disse: {a.userAnswer ? 'Verdadeiro' : 'Falso'})
                        </span>
                      )}
                    </p>
                    <p className="text-xs font-sans text-muted">{q.explanation}</p>
                  </div>
                </details>
              )
            })}
          </div>
        </div>
      </motion.div>

      {/* ShareCard off-screen for image generation */}
      <div className="fixed -left-[9999px] top-0" aria-hidden="true">
        <ShareCard
          ref={shareCardRef}
          nickname={nickname}
          score={totalScore}
          title={title}
          correctCount={correctCount}
          total={questions.length}
        />
      </div>
    </main>
  )
}
