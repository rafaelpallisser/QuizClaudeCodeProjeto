import { forwardRef } from 'react'
import type { TitleRank } from '@/types'
import { getTitleInfo } from '@/lib/titles'

interface Props {
  nickname: string
  score: number
  title: TitleRank
  correctCount: number
  total: number
}

export const ShareCard = forwardRef<HTMLDivElement, Props>(
  ({ nickname, score, title, correctCount, total }, ref) => {
    const info = getTitleInfo(title)
    const date = new Date().toLocaleDateString('pt-BR')

    return (
      <div
        ref={ref}
        style={{ fontFamily: 'JetBrains Mono, monospace', backgroundColor: '#0a0e14', color: '#c9d1d9' }}
        className="w-[480px] p-8 rounded-xl border border-[#1e2a38] flex flex-col gap-6"
      >
        <div className="flex items-center gap-2 text-xs text-[#546074]">
          <span className="text-[#39ff14]">$</span>
          <span>claude-code-quiz --result</span>
        </div>

        <div className="text-center">
          <p className="text-4xl mb-2" aria-hidden="true">{info.emoji}</p>
          <p className="text-2xl font-bold text-[#39ff14]">{info.title}</p>
          <p className="text-[#546074] text-sm mt-1">@{nickname}</p>
        </div>

        <div className="grid grid-cols-2 gap-4 text-center">
          <div className="bg-[#141a23] rounded-lg p-4">
            <p className="text-3xl font-bold text-[#39ff14]">{score}</p>
            <p className="text-xs text-[#546074] mt-1">pontos</p>
          </div>
          <div className="bg-[#141a23] rounded-lg p-4">
            <p className="text-3xl font-bold text-[#c9d1d9]">{correctCount}/{total}</p>
            <p className="text-xs text-[#546074] mt-1">acertos</p>
          </div>
        </div>

        <div className="flex justify-between items-center text-xs text-[#546074]">
          <span>claude-code-quiz.vercel.app</span>
          <span>{date}</span>
        </div>
      </div>
    )
  }
)

ShareCard.displayName = 'ShareCard'
