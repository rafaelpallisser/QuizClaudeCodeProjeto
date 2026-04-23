import React from 'react'

interface State {
  hasError: boolean
  error: Error | null
}

export class ErrorBoundary extends React.Component<{ children: React.ReactNode }, State> {
  state: State = { hasError: false, error: null }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error('[QuizApp] erro não tratado:', error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-bg flex flex-col items-center justify-center p-8 font-mono">
          <p className="text-error text-xl mb-2">$ erro inesperado</p>
          <p className="text-muted text-sm mb-6 max-w-md text-center break-words">
            {this.state.error?.message ?? 'Algo deu errado.'}
          </p>
          <button
            className="btn-primary"
            onClick={() => {
              this.setState({ hasError: false, error: null })
              window.location.href = '/'
            }}
          >
            Reiniciar
          </button>
        </div>
      )
    }
    return this.props.children
  }
}
