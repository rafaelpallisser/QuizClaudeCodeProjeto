import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { fetchLeaderboard } from '@/lib/supabase'
import type { LeaderboardEntry } from '@/types'

export default function Leaderboard() {
  const navigate = useNavigate()
  const [entries, setEntries] = useState<LeaderboardEntry[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    fetchLeaderboard()
      .then(setEntries)
      .catch(() => setError('Não foi possível carregar o leaderboard.'))
      .finally(() => setLoading(false))
  }, [])

  const medalFor = (pos: number) => (pos === 1 ? '🥇' : pos === 2 ? '🥈' : pos === 3 ? '🥉' : `${pos}.`)

  return (
    <main className="min-h-screen bg-bg flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-2xl"
      >
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold font-mono">
            <span className="text-success">$</span> Leaderboard
          </h1>
          <button onClick={() => navigate('/')} className="btn-ghost text-sm font-mono">
            ← Início
          </button>
        </div>

        {loading && (
          <div className="card text-center py-12">
            <p className="text-success animate-pulse font-mono">Carregando top 50...</p>
          </div>
        )}

        {error && (
          <div className="card border-error text-center py-8">
            <p className="text-error font-mono">{error}</p>
          </div>
        )}

        {!loading && !error && (
          <div className="card">
            {entries.length === 0 ? (
              <p className="text-center text-muted font-mono py-8">Nenhum resultado ainda. Seja o primeiro!</p>
            ) : (
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border text-muted font-mono text-xs">
                    <th className="text-left pb-3 pr-4">#</th>
                    <th className="text-left pb-3 pr-4">Nickname</th>
                    <th className="text-right pb-3 pr-4">Score</th>
                    <th className="text-right pb-3 pr-4 hidden sm:table-cell">Acertos</th>
                    <th className="text-right pb-3">Título</th>
                  </tr>
                </thead>
                <tbody>
                  {entries.map((entry, i) => (
                    <tr
                      key={entry.id}
                      className="border-b border-border/50 last:border-0 hover:bg-surface transition-colors"
                    >
                      <td className="py-3 pr-4 font-mono text-muted">{medalFor(i + 1)}</td>
                      <td className="py-3 pr-4 font-mono text-fg truncate max-w-[120px]">{entry.nickname}</td>
                      <td className="py-3 pr-4 text-right font-mono font-bold text-success">{entry.score}</td>
                      <td className="py-3 pr-4 text-right font-mono text-muted hidden sm:table-cell">
                        {entry.correct_count}/15
                      </td>
                      <td className="py-3 text-right font-mono text-xs text-fg">{entry.title}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        )}
      </motion.div>
    </main>
  )
}
