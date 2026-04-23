# PRD — Quiz Web sobre Claude Code

> Documento de requisitos de produto (PRD) para construção de um Quiz Web interativo sobre Claude Code. Este documento será consumido pelo Claude Code como fonte de verdade para implementação.

---

## 1. Visão Geral

### 1.1 Nome do Projeto
**Claude Code Quiz** — Quiz Web de perguntas Verdadeiro/Falso sobre Claude Code, cobrindo desde conceitos de negócio até tópicos técnicos avançados.

### 1.2 Elevator Pitch
Uma experiência web gamificada e educacional onde usuários testam e aprendem sobre o Claude Code respondendo 15 perguntas progressivas (fáceis → avançadas), recebem feedback imediato com explicações, competem em um leaderboard global e podem compartilhar seus resultados.

### 1.3 Objetivo do Produto
**Educacional (ensinar brincando).** Cada pergunta errada é uma oportunidade de aprendizado, com explicação didática imediata após a resposta. Ao final, o usuário sai com mais conhecimento sobre Claude Code do que entrou.

### 1.4 Público-Alvo
Mix amplo cobrindo todos os níveis:
- **Iniciantes**: pessoas que nunca usaram Claude Code e querem entender o que é.
- **Usuários intermediários**: devs que já usam o CLI e querem testar conhecimento prático.
- **Usuários avançados**: power users curiosos sobre hooks, MCP, Agent SDK.

### 1.5 Idioma
**Português (PT-BR) exclusivamente** em toda a UI, perguntas, explicações e mensagens.

---

## 2. Requisitos de Negócio

### 2.1 Funcionalidades Essenciais (MVP v1)
| # | Feature | Descrição |
|---|---------|-----------|
| F1 | Banco de 100 perguntas | Pool completo de 100 questões V/F distribuídas entre 4 categorias e 3 níveis de dificuldade |
| F2 | Sessão de 15 perguntas progressivas | Cada partida seleciona 15 perguntas aleatórias ordenadas por dificuldade crescente |
| F3 | Timer por pergunta + bônus de velocidade | Cada pergunta tem 20 segundos; responder rápido dá bônus de pontuação |
| F4 | Feedback imediato após cada resposta | Mostra certo/errado + explicação didática antes de avançar |
| F5 | Pontuação ponderada por dificuldade | Perguntas fáceis = 10pts, médias = 20pts, difíceis = 30pts + bônus de velocidade |
| F6 | Tela de resultado completa | Score, gabarito com todas as perguntas revisadas, título/rank conquistado |
| F7 | Títulos/conquistas (gamificação) | Ranks baseados no score final: Visitante → Explorador → Operador → Hacker → Ninja → Lenda |
| F8 | Compartilhamento social | Geração de card/imagem com score para compartilhar em redes sociais |
| F9 | Leaderboard global | Top 50 scores globais via Supabase, identificação por nickname |
| F10 | Animações e efeitos sonoros | Feedback visual (confetti ao acertar, shake ao errar) e sonoro opcional |
| F11 | Persistência local | Histórico de sessões do usuário salvo em localStorage |

### 2.2 Fluxo do Usuário
```
[Tela Inicial]
   │  (botão "Iniciar Quiz")
   ▼
[Digite seu nickname]
   │
   ▼
[Pergunta 1/15] ──► [Feedback + Explicação] ──► [Pergunta 2/15] ──► ...
   │ Timer 20s
   │ V / F
   ▼
[Resultado Final]
   │  - Score + título conquistado
   │  - Revisão de todas as 15 perguntas
   │  - Botão "Compartilhar"
   │  - Botão "Ver Leaderboard"
   │  - Botão "Jogar Novamente"
   ▼
[Leaderboard Global] (Top 50)
```

### 2.3 Categorias de Perguntas
As 100 perguntas devem ser distribuídas entre **4 categorias**:

| Categoria | Qtd sugerida | Exemplos de temas |
|-----------|--------------|-------------------|
| **Negócio / Visão Geral** | 25 | O que é Claude Code, para que serve, modelos de IA disponíveis, diferenças vs. outros assistentes |
| **Instalação, Setup e Configuração** | 25 | Instalação via npm, `settings.json`, `CLAUDE.md`, permissões, env vars, IDE extensions |
| **Comandos, Slash Commands e Skills** | 25 | `/help`, `/init`, `/review`, `/security-review`, skills customizadas, invocação de skills |
| **Hooks, MCP, Agent SDK e Avançado** | 25 | Hooks (PreToolUse, PostToolUse, Stop), MCP servers, Agent SDK, subagents, scheduled tasks |

### 2.4 Distribuição por Dificuldade
| Nível | Qtd | Peso (pontos) | Características |
|-------|-----|---------------|-----------------|
| Iniciante | 40 | 10 pts | Conceitos básicos, definições, "o que é?" |
| Intermediário | 40 | 20 pts | Uso prático, comandos comuns, configurações padrão |
| Avançado | 20 | 30 pts | Casos específicos, edge cases, features menos conhecidas |

### 2.5 Sistema de Títulos/Conquistas
Com base na pontuação percentual da sessão:

| % Score | Título | Descrição |
|---------|--------|-----------|
| 0–19% | 🌱 Visitante | "Você deu os primeiros passos!" |
| 20–39% | 🔍 Explorador | "Já está conhecendo o terreno." |
| 40–59% | ⚙️ Operador | "Você manja do básico e já vai longe." |
| 60–79% | 💻 Hacker | "Uso avançado — impressionante!" |
| 80–94% | 🥷 Ninja | "Você vive o Claude Code." |
| 95–100% | 👑 Lenda | "Você É o Claude Code." |

### 2.6 Sistema de Pontuação
Fórmula por pergunta correta:
```
pontos = peso_dificuldade + bonus_velocidade
bonus_velocidade = max(0, round((tempo_restante / 20) * peso_dificuldade * 0.5))
```
- Resposta errada: 0 pontos (sem penalidade).
- Tempo esgotado sem resposta: 0 pontos, conta como errada.
- Score máximo teórico: soma(peso + bônus_max) de 15 perguntas selecionadas.

### 2.7 Métricas de Sucesso
- Taxa de conclusão do quiz: >70% dos usuários que iniciam terminam.
- Tempo médio de sessão: 4-6 minutos.
- Compartilhamentos por 100 sessões: >10.
- Replay rate: >30% dos usuários jogam novamente.

---

## 3. Requisitos Técnicos

### 3.1 Stack

| Camada | Tecnologia | Justificativa |
|--------|-----------|---------------|
| Frontend | **React 18 + Vite + TypeScript** | DX moderna, build rápido, type-safety, SPA simples |
| Estilização | **Tailwind CSS** | Rápido para prototipar tema terminal/dark, utility-first |
| Estado | **Zustand** | Estado global leve para sessão de quiz, sem boilerplate |
| Roteamento | **React Router v6** | Navegação entre telas (home, quiz, resultado, leaderboard) |
| Animações | **Framer Motion** | Transições entre perguntas, confetti, shake effects |
| Áudio | **Howler.js** | Efeitos sonoros curtos (acerto/erro/finalização) |
| Share card | **html-to-image** | Gera PNG do card de resultado para download/compartilhamento |
| Backend | **Supabase** (Postgres + REST) | Leaderboard global — gratuito até 500MB, sem precisar escrever API |
| Deploy | **Vercel** | Deploy automático via Git, HTTPS nativo, edge network |
| Linter/Format | **ESLint + Prettier** | Qualidade e consistência de código |
| Testes | **Vitest + React Testing Library** | Testes unitários de lógica crítica (scoring, seleção de perguntas) |

### 3.2 Arquitetura de Pastas
```
src/
├── app/
│   ├── App.tsx
│   └── router.tsx
├── pages/
│   ├── Home.tsx                 # Tela inicial com CTA "Iniciar Quiz"
│   ├── Quiz.tsx                 # Tela de pergunta ativa
│   ├── Result.tsx               # Tela de resultado + gabarito
│   └── Leaderboard.tsx          # Top 50 global
├── components/
│   ├── QuestionCard.tsx
│   ├── Timer.tsx
│   ├── AnswerButtons.tsx        # Botões V/F
│   ├── FeedbackModal.tsx        # Feedback pós-resposta
│   ├── ProgressBar.tsx
│   ├── ShareCard.tsx            # Card compartilhável
│   ├── TitleBadge.tsx           # Exibe título conquistado
│   └── Terminal/                # Componentes de estilo terminal (prompt, cursor piscando)
├── store/
│   └── quizStore.ts             # Zustand: sessão atual, respostas, score
├── data/
│   └── questions.ts             # Banco de 100 perguntas (ou JSON importado)
├── lib/
│   ├── scoring.ts               # Cálculo de pontos + bônus
│   ├── selectQuestions.ts       # Seleciona 15 progressivas
│   ├── titles.ts                # Mapeia score → título
│   ├── supabase.ts              # Cliente Supabase
│   └── share.ts                 # Lógica de geração/share do card
├── hooks/
│   ├── useTimer.ts
│   ├── useSoundEffect.ts
│   └── useLocalHistory.ts
├── types/
│   └── index.ts                 # Tipos: Question, Answer, Session, Score
├── assets/
│   ├── sounds/
│   └── fonts/                   # Ex: JetBrains Mono
└── styles/
    └── globals.css
```

### 3.3 Modelo de Dados

#### Question (TypeScript)
```ts
type Category = 'negocio' | 'setup' | 'comandos' | 'avancado';
type Difficulty = 'iniciante' | 'intermediario' | 'avancado';

interface Question {
  id: string;                    // Ex: "q-001"
  category: Category;
  difficulty: Difficulty;
  statement: string;             // Afirmação V/F
  answer: boolean;               // true = Verdadeiro, false = Falso
  explanation: string;           // Explicação didática (mostrada após resposta)
  referenceUrl?: string;         // Link opcional para docs oficiais
}
```

#### Session (TypeScript)
```ts
interface SessionAnswer {
  questionId: string;
  userAnswer: boolean | null;    // null se tempo esgotou
  isCorrect: boolean;
  pointsEarned: number;
  timeSpentMs: number;
}

interface Session {
  id: string;                    // UUID
  nickname: string;
  startedAt: string;             // ISO
  finishedAt?: string;
  questions: Question[];         // 15 perguntas selecionadas
  answers: SessionAnswer[];
  totalScore: number;
  title: string;                 // Ex: "Hacker"
}
```

#### Leaderboard (Supabase — tabela `leaderboard`)
| Coluna | Tipo | Notas |
|--------|------|-------|
| `id` | `uuid` (PK) | Default `gen_random_uuid()` |
| `nickname` | `text` | Max 20 chars, sanitizado |
| `score` | `integer` | |
| `title` | `text` | |
| `correct_count` | `integer` | 0-15 |
| `total_time_ms` | `integer` | Tempo total da sessão |
| `created_at` | `timestamptz` | Default `now()` |

**Index:** `(score DESC, created_at ASC)` para ordenação do top 50.

**Row Level Security (RLS):**
- `SELECT`: público (qualquer um lê top 50).
- `INSERT`: público, mas com rate limit via Supabase Edge Function (1 insert / IP / 60s) para mitigar spam.
- `UPDATE` / `DELETE`: bloqueados.

### 3.4 Regras de Seleção de Perguntas (`selectQuestions.ts`)
- Seleciona **15 perguntas** do pool de 100.
- **Distribuição dentro da sessão (progressiva):**
  - 6 iniciante (posições 1-6)
  - 6 intermediário (posições 7-12)
  - 3 avançado (posições 13-15)
- **Diversidade de categoria:** tenta garantir pelo menos 3 das 4 categorias representadas na sessão.
- **Sem repetição:** nenhuma pergunta aparece duas vezes na mesma sessão.
- **Seed opcional** via query param `?seed=X` para reprodutibilidade em testes.

### 3.5 Regras do Timer
- **20 segundos por pergunta**, contagem regressiva visual.
- Cor do timer muda: verde (>10s) → amarelo (5-10s) → vermelho (<5s) com pulso.
- Se usuário responde, timer para e feedback aparece.
- Se tempo esgota, pergunta conta como errada e avança após 2s mostrando resposta correta.

### 3.6 Persistência Local (localStorage)
Chaves:
- `ccq:nickname` — último nickname usado (preenche o input automaticamente).
- `ccq:history` — array dos últimos 10 `Session` completos (para tela "Minhas sessões" futura).
- `ccq:sound` — boolean (som ligado/desligado).

### 3.7 Tema Visual (Terminal/Dark Hacker)
- **Paleta:**
  - Background: `#0a0e14` (quase preto)
  - Foreground: `#c9d1d9` (cinza claro)
  - Accent primário: `#39ff14` (verde terminal) para ✅ correto
  - Accent secundário: `#ff4d4d` (vermelho) para ❌ errado
  - Warning: `#f0b74a` (amarelo) para alertas e timer crítico
- **Tipografia:**
  - Monoespaçada: **JetBrains Mono** (UI, perguntas, números)
  - Sans secundária: **Inter** (textos longos e explicações)
- **Motivos visuais:**
  - Linhas tipo prompt (`$ `, `>`) nos títulos.
  - Cursor piscando em inputs e títulos de destaque.
  - ASCII art discreto no header da Home.
  - Glow/neon sutil em acertos.
- **Acessibilidade:**
  - Contraste WCAG AA mínimo.
  - Navegação por teclado (V = Verdadeiro, F = Falso, Enter confirma, Esc para).
  - `prefers-reduced-motion` desabilita animações intensas.
  - Atributos `aria-*` em todos os elementos interativos.

### 3.8 Responsividade
- Breakpoints: mobile ≤640px, tablet 641-1024px, desktop ≥1025px.
- Design funciona bem em todos desde o início (equilibrado).
- Cards de pergunta com largura máx 720px centralizada em desktop.
- Botões V/F com área de toque mínima 44×44px em mobile.

### 3.9 Sons e Animações
- Sons curtos (< 1s) em MP3/OGG baixo bitrate:
  - `correct.mp3`, `wrong.mp3`, `tick.mp3` (últimos 3s do timer), `finish.mp3`.
- Toggle de som persistido em localStorage (`ccq:sound`).
- Animações:
  - Entrada de pergunta: fade + slide up.
  - Acerto: flash verde + confetti leve.
  - Erro: shake horizontal + flash vermelho.
  - Transição de tela: crossfade 300ms.

### 3.10 Env Vars (`.env.local`)
```
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=
```
- `.env.example` commitado com as chaves em branco.
- `.env.local` no `.gitignore`.

### 3.11 Scripts NPM
```json
{
  "dev": "vite",
  "build": "tsc -b && vite build",
  "preview": "vite preview",
  "lint": "eslint .",
  "format": "prettier --write .",
  "test": "vitest"
}
```

### 3.12 Testes Mínimos (v1)
- `lib/scoring.test.ts` — casos de pontuação (correta rápida, correta lenta, errada, timeout).
- `lib/selectQuestions.test.ts` — distribuição progressiva correta, sem repetição, categorias diversificadas.
- `lib/titles.test.ts` — mapeamento score → título em todas as faixas.
- `components/QuestionCard.test.tsx` — renderiza pergunta, aceita V/F, bloqueia após resposta.

---

## 4. Requisitos Não-Funcionais

### 4.1 Performance
- **Lighthouse Performance ≥ 90** em mobile.
- Tempo de carregamento inicial < 2s em 3G rápido.
- Perguntas carregadas junto com o bundle JS (JSON estático, sem fetch).
- Lazy load da rota Leaderboard (fetch Supabase só quando acessa).

### 4.2 Qualidade de Código
- 100% TypeScript, zero `any` explícito.
- ESLint + Prettier rodando em pre-commit (via Husky + lint-staged).
- Componentes funcionais com hooks — sem class components.
- Nomes descritivos, sem comentários desnecessários.

### 4.3 Segurança
- Sanitização do nickname antes de enviar ao Supabase (max 20 chars, sem HTML).
- Rate limiting no insert de score (Edge Function ou política Supabase).
- Sem exposição da `service_role` key — apenas `anon_key` pública no frontend.
- CSP básico no `index.html`.

### 4.4 Privacidade
- Nenhum dado pessoal coletado além do nickname voluntário.
- Sem cookies de tracking.
- Sem analytics de terceiros no v1 (pode entrar em v2 com consentimento).

---

## 5. Escopo Fora do MVP (v2+)

- 🔜 Modo livre (escolher categoria ou dificuldade).
- 🔜 Modo desafio diário (1 pergunta/dia com streak).
- 🔜 Login social opcional (GitHub/Google) para perfil persistente.
- 🔜 Histórico detalhado do usuário com gráficos de evolução.
- 🔜 Tradução para inglês (bilíngue).
- 🔜 Multiplayer em tempo real (dois jogadores competindo).
- 🔜 Admin UI para gerenciar o banco de perguntas.
- 🔜 Analytics (opt-in) para identificar perguntas mais erradas e melhorar conteúdo.

---

## 6. Roadmap de Implementação Sugerido

**Fase 1 — Fundação (Sprint 1)**
1. Setup do projeto: Vite + React + TS + Tailwind + ESLint + Prettier.
2. Estrutura de pastas e roteamento.
3. Tipos TypeScript (Question, Session, etc.).
4. Tema visual base (paleta, fontes, componentes Terminal).

**Fase 2 — Core do Quiz (Sprint 2)**
5. Banco de 100 perguntas em `data/questions.ts` (ou JSON importado).
6. Lógica de seleção progressiva (`selectQuestions.ts`).
7. Store Zustand da sessão.
8. Tela Home + input de nickname.
9. Tela Quiz: QuestionCard, Timer, AnswerButtons, FeedbackModal.
10. Lógica de pontuação + timer + bônus.

**Fase 3 — Resultado e Gamificação (Sprint 3)**
11. Tela Result com gabarito completo.
12. Sistema de títulos/ranks.
13. ShareCard (geração de imagem + download/share API).
14. Animações (Framer Motion) e sons (Howler).
15. Persistência localStorage.

**Fase 4 — Leaderboard e Deploy (Sprint 4)**
16. Setup do Supabase: projeto, tabela, RLS.
17. Integração do cliente Supabase + tela Leaderboard.
18. Rate limiting no insert.
19. Testes unitários das libs críticas.
20. Deploy na Vercel + configuração de env vars.
21. Validação manual mobile + desktop.

---

## 7. Critérios de Aceitação do MVP v1

A entrega é considerada pronta quando:

- ✅ Usuário consegue jogar uma sessão completa de 15 perguntas sem erros.
- ✅ O banco contém 100 perguntas revisadas, com explicações e distribuição correta (25 por categoria, 40/40/20 por dificuldade).
- ✅ Feedback imediato aparece após cada resposta com explicação legível.
- ✅ Timer de 20s funciona, com bônus de velocidade aplicado corretamente.
- ✅ Tela de resultado mostra score, título e gabarito completo das 15 perguntas.
- ✅ Botão de compartilhar gera um card PNG baixável.
- ✅ Leaderboard exibe top 50 global via Supabase, insert funciona com nickname.
- ✅ UI responsiva funciona em iPhone SE (375px) até desktop 1440px.
- ✅ Tema dark/terminal aplicado consistentemente em todas as telas.
- ✅ Lighthouse Performance ≥ 90 em mobile.
- ✅ Deploy na Vercel acessível via URL pública.
- ✅ Testes unitários das libs críticas passando (scoring, selectQuestions, titles).

---

## 8. Observações para o Claude Code (implementador)

- **Banco de perguntas:** o arquivo `src/data/questions.ts` deve ser populado com 100 perguntas reais e verificadas. Utilize a documentação oficial do Claude Code (`https://docs.claude.com/en/docs/claude-code`) como fonte primária. Cada pergunta deve ter explicação didática com 2-4 frases e, quando pertinente, um `referenceUrl` para a seção da documentação.
- **Estilo de código:** preferir funções puras, componentes pequenos e isolados. Evitar prop drilling — usar Zustand para estado global da sessão.
- **Commits:** usar Conventional Commits (`feat:`, `fix:`, `chore:`, etc.).
- **Acessibilidade não é opcional:** navegação por teclado (V/F/Enter) deve ser implementada desde o início, não como afterthought.
- **Não implementar features fora do escopo do v1** listado na seção 2.1. Itens da seção 5 ficam para iterações futuras.
