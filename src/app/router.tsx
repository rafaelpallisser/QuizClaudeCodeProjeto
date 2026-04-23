import { createBrowserRouter } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Home from '@/pages/Home'
import Quiz from '@/pages/Quiz'
import Result from '@/pages/Result'

const Leaderboard = lazy(() => import('@/pages/Leaderboard'))

function LoadingFallback() {
  return (
    <div className="min-h-screen bg-bg flex items-center justify-center">
      <span className="text-success font-mono animate-pulse">Carregando...</span>
    </div>
  )
}

export const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/quiz', element: <Quiz /> },
  { path: '/result', element: <Result /> },
  {
    path: '/leaderboard',
    element: (
      <Suspense fallback={<LoadingFallback />}>
        <Leaderboard />
      </Suspense>
    ),
  },
])
