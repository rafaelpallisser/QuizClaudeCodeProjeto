import type { Question } from '@/types'

export const questions: Question[] = [
  // ─── NEGÓCIO / VISÃO GERAL — INICIANTE (10 perguntas) ─────────────────────
  {
    id: 'q-001',
    category: 'negocio',
    difficulty: 'iniciante',
    statement: 'Claude Code é uma ferramenta de linha de comando (CLI) desenvolvida pela Anthropic.',
    answer: true,
    explanation:
      'Claude Code é o CLI oficial da Anthropic que permite interagir com Claude diretamente no terminal. Ele foi projetado para auxiliar desenvolvedores em tarefas de engenharia de software.',
    referenceUrl: 'https://docs.anthropic.com/en/docs/claude-code/overview',
  },
  {
    id: 'q-002',
    category: 'negocio',
    difficulty: 'iniciante',
    statement: 'Claude Code é uma extensão exclusiva para o editor Visual Studio Code.',
    answer: false,
    explanation:
      'Claude Code é um CLI independente que funciona no terminal. Ele possui integrações com IDEs como VS Code e JetBrains, mas não é exclusivo de nenhum editor.',
    referenceUrl: 'https://docs.anthropic.com/en/docs/claude-code/overview',
  },
  {
    id: 'q-003',
    category: 'negocio',
    difficulty: 'iniciante',
    statement: 'Claude Code pode ler, escrever e executar código diretamente no seu ambiente de desenvolvimento.',
    answer: true,
    explanation:
      'Claude Code tem acesso ao sistema de arquivos, pode executar comandos shell, rodar testes e interagir com o ambiente local, tornando-o um assistente de codificação verdadeiramente integrado.',
    referenceUrl: 'https://docs.anthropic.com/en/docs/claude-code/overview',
  },
  {
    id: 'q-004',
    category: 'negocio',
    difficulty: 'iniciante',
    statement: 'Claude Code requer que o usuário copie e cole código manualmente entre o chat e o editor.',
    answer: false,
    explanation:
      'Diferente de chatbots convencionais, Claude Code opera diretamente no ambiente do desenvolvedor, editando arquivos e executando comandos sem necessidade de copiar e colar.',
    referenceUrl: 'https://docs.anthropic.com/en/docs/claude-code/overview',
  },
  {
    id: 'q-005',
    category: 'negocio',
    difficulty: 'iniciante',
    statement: 'Claude Code utiliza modelos Claude da Anthropic para gerar suas respostas.',
    answer: true,
    explanation:
      'Claude Code é alimentado pelos modelos Claude (como Claude Opus e Sonnet) da Anthropic, usando a mesma tecnologia de linguagem avançada disponível via API.',
    referenceUrl: 'https://docs.anthropic.com/en/docs/claude-code/overview',
  },
  {
    id: 'q-006',
    category: 'negocio',
    difficulty: 'iniciante',
    statement: 'Claude Code é gratuito e de código aberto.',
    answer: false,
    explanation:
      'Claude Code é um produto pago da Anthropic. O uso consome créditos da API Anthropic, e não é um projeto de código aberto — embora o SDK do agente seja disponibilizado publicamente.',
    referenceUrl: 'https://docs.anthropic.com/en/docs/claude-code/overview',
  },
  {
    id: 'q-007',
    category: 'negocio',
    difficulty: 'iniciante',
    statement: 'Claude Code pode ajudar a corrigir bugs, refatorar código e adicionar novas funcionalidades.',
    answer: true,
    explanation:
      'Claude Code é versátil e pode realizar uma ampla gama de tarefas de engenharia de software, incluindo correção de bugs, refatoração, escrita de testes e adição de funcionalidades.',
    referenceUrl: 'https://docs.anthropic.com/en/docs/claude-code/overview',
  },
  {
    id: 'q-008',
    category: 'negocio',
    difficulty: 'iniciante',
    statement: 'Claude Code funciona exclusivamente com projetos JavaScript e TypeScript.',
    answer: false,
    explanation:
      'Claude Code é agnóstico a linguagem e pode trabalhar com Python, Go, Rust, Java, C++, Ruby, e qualquer outra linguagem de programação.',
    referenceUrl: 'https://docs.anthropic.com/en/docs/claude-code/overview',
  },
  {
    id: 'q-009',
    category: 'negocio',
    difficulty: 'iniciante',
    statement: 'Claude Code pode criar pull requests no GitHub.',
    answer: true,
    explanation:
      'Claude Code pode interagir com sistemas de controle de versão e criar PRs. Por padrão, ações como criar PRs requerem confirmação do usuário antes de serem executadas.',
    referenceUrl: 'https://docs.anthropic.com/en/docs/claude-code/overview',
  },
  {
    id: 'q-010',
    category: 'negocio',
    difficulty: 'iniciante',
    statement: 'O arquivo CLAUDE.md serve para fornecer contexto e instruções customizadas ao Claude Code.',
    answer: true,
    explanation:
      'O CLAUDE.md é lido automaticamente pelo Claude Code ao iniciar uma sessão, permitindo que equipes definam comandos comuns, arquitetura do projeto e preferências de desenvolvimento.',
    referenceUrl: 'https://docs.anthropic.com/en/docs/claude-code/memory',
  },

  // ─── NEGÓCIO / VISÃO GERAL — INTERMEDIÁRIO (10 perguntas) ─────────────────
  {
    id: 'q-011',
    category: 'negocio',
    difficulty: 'intermediario',
    statement: 'Claude Code opera em um "agentic loop" onde planeja e executa ações autonomamente até completar a tarefa.',
    answer: true,
    explanation:
      'Claude Code usa um loop agêntico que permite planejar sequências de ações, executá-las e verificar resultados iterativamente, sem precisar de intervenção do usuário a cada passo.',
    referenceUrl: 'https://docs.anthropic.com/en/docs/claude-code/overview',
  },
  {
    id: 'q-012',
    category: 'negocio',
    difficulty: 'intermediario',
    statement: 'Claude Code pode ser executado em modo totalmente autônomo sem nenhuma confirmação do usuário.',
    answer: true,
    explanation:
      'O modo --dangerously-skip-permissions permite execução totalmente autônoma, ideal para pipelines de CI/CD. Em uso normal, ações destrutivas requerem confirmação.',
    referenceUrl: 'https://docs.anthropic.com/en/docs/claude-code/settings',
  },
  {
    id: 'q-013',
    category: 'negocio',
    difficulty: 'intermediario',
    statement: 'O modelo padrão usado pelo Claude Code é sempre o Claude Haiku por questões de custo.',
    answer: false,
    explanation:
      'Claude Code usa modelos mais capazes como Claude Opus e Sonnet por padrão. O modelo pode ser configurado pelo usuário, mas o padrão prioriza capacidade sobre custo.',
    referenceUrl: 'https://docs.anthropic.com/en/docs/claude-code/settings',
  },
  {
    id: 'q-014',
    category: 'negocio',
    difficulty: 'intermediario',
    statement: 'Claude Code pode ser integrado a pipelines de CI/CD para automatizar revisões de código.',
    answer: true,
    explanation:
      'Claude Code suporta automação em ambientes não-interativos, sendo possível integrá-lo em pipelines de CI/CD para tarefas como revisão de código, geração de testes e análise de segurança.',
    referenceUrl: 'https://docs.anthropic.com/en/docs/claude-code/overview',
  },
  {
    id: 'q-015',
    category: 'negocio',
    difficulty: 'intermediario',
    statement: 'Claude Code mantém o histórico de conversa apenas durante a sessão atual, sem persistência entre sessões.',
    answer: true,
    explanation:
      'Por padrão, cada sessão do Claude Code começa com contexto limpo. A memória entre sessões pode ser implementada via arquivos de memória (CLAUDE.md) ou o sistema de memória built-in.',
    referenceUrl: 'https://docs.anthropic.com/en/docs/claude-code/memory',
  },
  {
    id: 'q-016',
    category: 'negocio',
    difficulty: 'intermediario',
    statement: 'O Claude Code Agent SDK permite criar agentes customizados que orquestram múltiplos subagentes.',
    answer: true,
    explanation:
      'O Agent SDK da Anthropic permite construir sistemas multiagentes onde Claude Code pode criar e coordenar subagentes para tarefas paralelas ou especializadas.',
    referenceUrl: 'https://docs.anthropic.com/en/docs/claude-code/sdk',
  },
  {
    id: 'q-017',
    category: 'negocio',
    difficulty: 'intermediario',
    statement: 'Claude Code analisa apenas o arquivo atualmente aberto no editor, não o projeto inteiro.',
    answer: false,
    explanation:
      'Claude Code pode explorar todo o repositório, navegar a estrutura de pastas, ler múltiplos arquivos e entender a arquitetura completa do projeto para fornecer respostas contextuais.',
    referenceUrl: 'https://docs.anthropic.com/en/docs/claude-code/overview',
  },
  {
    id: 'q-018',
    category: 'negocio',
    difficulty: 'intermediario',
    statement: 'Claude Code suporta múltiplas janelas de trabalho simultâneas (worktrees).',
    answer: true,
    explanation:
      'Claude Code suporta git worktrees, permitindo trabalhar em múltiplas branches simultaneamente em diretórios separados, sem interferência entre as sessões.',
    referenceUrl: 'https://docs.anthropic.com/en/docs/claude-code/overview',
  },
  {
    id: 'q-019',
    category: 'negocio',
    difficulty: 'intermediario',
    statement: 'Claude Code pode ser usado para gerar documentação automaticamente a partir do código existente.',
    answer: true,
    explanation:
      'Claude Code consegue analisar código-fonte e gerar documentação, READMEs, docstrings e comentários explicativos automaticamente, adaptando o estilo ao projeto existente.',
    referenceUrl: 'https://docs.anthropic.com/en/docs/claude-code/overview',
  },
  {
    id: 'q-020',
    category: 'negocio',
    difficulty: 'intermediario',
    statement: 'A Anthropic armazena todo o código do usuário em seus servidores para treinar modelos futuros.',
    answer: false,
    explanation:
      'A Anthropic tem políticas claras de privacidade. O código enviado ao modelo não é usado para treinamento por padrão, e usuários enterprise têm garantias adicionais de privacidade.',
    referenceUrl: 'https://docs.anthropic.com/en/docs/claude-code/overview',
  },

  // ─── NEGÓCIO / VISÃO GERAL — AVANÇADO (5 perguntas) ──────────────────────
  {
    id: 'q-021',
    category: 'negocio',
    difficulty: 'avancado',
    statement: 'Claude Code pode criar subagentes que executam em paralelo para acelerar tarefas complexas.',
    answer: true,
    explanation:
      'Via Agent SDK, Claude Code pode despachar múltiplos subagentes que rodam em paralelo, cada um com seu próprio contexto e conjunto de ferramentas, coordenados pelo agente principal.',
    referenceUrl: 'https://docs.anthropic.com/en/docs/claude-code/sdk',
  },
  {
    id: 'q-022',
    category: 'negocio',
    difficulty: 'avancado',
    statement: 'O prompt caching do Claude Code reduz custos ao reaproveitar partes do contexto já processado.',
    answer: true,
    explanation:
      'O prompt caching da Anthropic permite que partes repetidas do contexto (como o CLAUDE.md ou código do sistema) sejam cacheadas, reduzindo significativamente os custos de tokens de entrada.',
    referenceUrl: 'https://docs.anthropic.com/en/docs/claude-code/costs',
  },
  {
    id: 'q-023',
    category: 'negocio',
    difficulty: 'avancado',
    statement: 'Claude Code pode ser implantado como um serviço de revisão de código automática em PRs do GitHub via Actions.',
    answer: true,
    explanation:
      'Usando GitHub Actions e o modo não-interativo do Claude Code, é possível configurar revisões automáticas de PRs que rodam Claude Code em cada pull request aberto.',
    referenceUrl: 'https://docs.anthropic.com/en/docs/claude-code/overview',
  },
  {
    id: 'q-024',
    category: 'negocio',
    difficulty: 'avancado',
    statement: 'Claude Code usa exclusivamente a API REST da Anthropic e não suporta comunicação via WebSockets.',
    answer: false,
    explanation:
      'Claude Code suporta streaming via SSE (Server-Sent Events) para respostas em tempo real, além da API REST padrão, proporcionando uma experiência mais fluida no terminal.',
    referenceUrl: 'https://docs.anthropic.com/en/docs/claude-code/overview',
  },
  {
    id: 'q-025',
    category: 'negocio',
    difficulty: 'avancado',
    statement: 'O sistema de memória do Claude Code pode ser configurado para usar diferentes backends de armazenamento além de arquivos locais.',
    answer: false,
    explanation:
      'O sistema de memória nativo do Claude Code usa arquivos locais (como CLAUDE.md). Para persistência em outros backends, seria necessário implementar soluções customizadas via hooks ou MCP.',
    referenceUrl: 'https://docs.anthropic.com/en/docs/claude-code/memory',
  },

  // ─── INSTALAÇÃO & SETUP — INICIANTE (10 perguntas) ────────────────────────
  {
    id: 'q-026',
    category: 'setup',
    difficulty: 'iniciante',
    statement: 'Claude Code é instalado via npm com o comando: npm install -g @anthropic-ai/claude-code',
    answer: true,
    explanation:
      'A instalação oficial do Claude Code é feita via npm globalmente. É necessário ter Node.js instalado e depois executar esse comando para ter o CLI disponível no terminal.',
    referenceUrl: 'https://docs.anthropic.com/en/docs/claude-code/setup',
  },
  {
    id: 'q-027',
    category: 'setup',
    difficulty: 'iniciante',
    statement: 'Claude Code requer uma chave de API da Anthropic para funcionar.',
    answer: true,
    explanation:
      'Uma ANTHROPIC_API_KEY válida é necessária para usar o Claude Code. Ela pode ser configurada como variável de ambiente ou informada durante a configuração inicial.',
    referenceUrl: 'https://docs.anthropic.com/en/docs/claude-code/setup',
  },
  {
    id: 'q-028',
    category: 'setup',
    difficulty: 'iniciante',
    statement: 'O arquivo settings.json do Claude Code fica localizado no diretório ~/.claude/ do usuário.',
    answer: true,
    explanation:
      'As configurações globais do Claude Code são armazenadas em ~/.claude/settings.json no diretório home do usuário, permitindo configurações persistentes entre projetos.',
    referenceUrl: 'https://docs.anthropic.com/en/docs/claude-code/settings',
  },
  {
    id: 'q-029',
    category: 'setup',
    difficulty: 'iniciante',
    statement: 'Claude Code pode ser instalado apenas no macOS e Linux, sem suporte oficial ao Windows.',
    answer: false,
    explanation:
      'Claude Code tem suporte oficial para macOS, Linux e Windows (via WSL e nativamente). A ferramenta é multiplataforma e funciona nos principais sistemas operacionais.',
    referenceUrl: 'https://docs.anthropic.com/en/docs/claude-code/setup',
  },
  {
    id: 'q-030',
    category: 'setup',
    difficulty: 'iniciante',
    statement: 'Para iniciar uma sessão do Claude Code, o comando é simplesmente: claude',
    answer: true,
    explanation:
      'Após a instalação, basta digitar "claude" no terminal para iniciar uma sessão interativa. Também é possível passar um prompt diretamente: "claude \'seu prompt aqui\'".',
    referenceUrl: 'https://docs.anthropic.com/en/docs/claude-code/setup',
  },
  {
    id: 'q-031',
    category: 'setup',
    difficulty: 'iniciante',
    statement: 'O CLAUDE.md deve obrigatoriamente ficar na raiz do projeto para ser lido automaticamente.',
    answer: false,
    explanation:
      'Claude Code procura CLAUDE.md em múltiplos locais: raiz do projeto, diretório home (~/.claude/CLAUDE.md) e subdiretórios. Todos os arquivos CLAUDE.md encontrados são carregados.',
    referenceUrl: 'https://docs.anthropic.com/en/docs/claude-code/memory',
  },
  {
    id: 'q-032',
    category: 'setup',
    difficulty: 'iniciante',
    statement: 'Claude Code possui integração nativa com o VS Code que adiciona um painel lateral.',
    answer: true,
    explanation:
      'A extensão oficial do Claude Code para VS Code adiciona uma interface integrada ao editor, permitindo usar Claude Code sem sair do ambiente de desenvolvimento.',
    referenceUrl: 'https://docs.anthropic.com/en/docs/claude-code/ide-integrations',
  },
  {
    id: 'q-033',
    category: 'setup',
    difficulty: 'iniciante',
    statement: 'A variável de ambiente ANTHROPIC_API_KEY deve ser exportada antes de usar o Claude Code.',
    answer: true,
    explanation:
      'Claude Code busca a chave de API na variável de ambiente ANTHROPIC_API_KEY. Ela pode ser exportada no .bashrc/.zshrc ou definida inline antes do comando claude.',
    referenceUrl: 'https://docs.anthropic.com/en/docs/claude-code/setup',
  },
  {
    id: 'q-034',
    category: 'setup',
    difficulty: 'iniciante',
    statement: 'Claude Code requer Python 3.8+ instalado para funcionar.',
    answer: false,
    explanation:
      'Claude Code é construído em Node.js e não requer Python. O único pré-requisito de runtime é Node.js (versão LTS recomendada).',
    referenceUrl: 'https://docs.anthropic.com/en/docs/claude-code/setup',
  },
  {
    id: 'q-035',
    category: 'setup',
    difficulty: 'iniciante',
    statement: 'Claude Code pode ser atualizado com npm update -g @anthropic-ai/claude-code.',
    answer: true,
    explanation:
      'Como qualquer pacote npm global, o Claude Code pode ser atualizado com npm update -g ou reinstalado com npm install -g para obter a versão mais recente.',
    referenceUrl: 'https://docs.anthropic.com/en/docs/claude-code/setup',
  },

  // ─── INSTALAÇÃO & SETUP — INTERMEDIÁRIO (10 perguntas) ────────────────────
  {
    id: 'q-036',
    category: 'setup',
    difficulty: 'intermediario',
    statement: 'O arquivo .claude/settings.json de um projeto tem precedência sobre o settings.json global do usuário.',
    answer: true,
    explanation:
      'Claude Code utiliza uma hierarquia de configurações: as configurações de projeto (.claude/settings.json) sobrescrevem as do usuário (~/.claude/settings.json) para o projeto específico.',
    referenceUrl: 'https://docs.anthropic.com/en/docs/claude-code/settings',
  },
  {
    id: 'q-037',
    category: 'setup',
    difficulty: 'intermediario',
    statement: 'O settings.json permite configurar quais ferramentas (tools) o Claude Code pode usar sem pedir permissão.',
    answer: true,
    explanation:
      'A chave "permissions" no settings.json permite listar ferramentas na allowlist (allow) ou denylist (deny), controlando quais ações Claude Code pode executar automaticamente.',
    referenceUrl: 'https://docs.anthropic.com/en/docs/claude-code/settings',
  },
  {
    id: 'q-038',
    category: 'setup',
    difficulty: 'intermediario',
    statement: 'Claude Code ignora o .gitignore ao explorar arquivos do projeto.',
    answer: false,
    explanation:
      'Claude Code respeita o .gitignore por padrão, evitando expor arquivos ignorados como variáveis de ambiente, credenciais e artefatos de build ao modelo.',
    referenceUrl: 'https://docs.anthropic.com/en/docs/claude-code/settings',
  },
  {
    id: 'q-039',
    category: 'setup',
    difficulty: 'intermediario',
    statement: 'É possível configurar um proxy HTTP para o Claude Code usando a variável ANTHROPIC_BASE_URL.',
    answer: true,
    explanation:
      'A variável ANTHROPIC_BASE_URL permite redirecionar as requisições do Claude Code para um endpoint customizado, útil para proxies corporativos ou ambientes de desenvolvimento local.',
    referenceUrl: 'https://docs.anthropic.com/en/docs/claude-code/settings',
  },
  {
    id: 'q-040',
    category: 'setup',
    difficulty: 'intermediario',
    statement: 'Claude Code pode usar credenciais do Amazon Bedrock ou Google Vertex AI além da API direta da Anthropic.',
    answer: true,
    explanation:
      'Claude Code suporta múltiplos provedores: API Anthropic, Amazon Bedrock e Google Vertex AI. As credenciais são configuradas via variáveis de ambiente específicas de cada provedor.',
    referenceUrl: 'https://docs.anthropic.com/en/docs/claude-code/settings',
  },
  {
    id: 'q-041',
    category: 'setup',
    difficulty: 'intermediario',
    statement: 'O arquivo CLAUDE.md suporta sintaxe Markdown completa, incluindo tabelas e blocos de código.',
    answer: true,
    explanation:
      'O CLAUDE.md é um arquivo Markdown padrão e todo o seu conteúdo é fornecido como contexto ao Claude Code. Tabelas, blocos de código, listas e outros elementos são suportados.',
    referenceUrl: 'https://docs.anthropic.com/en/docs/claude-code/memory',
  },
  {
    id: 'q-042',
    category: 'setup',
    difficulty: 'intermediario',
    statement: 'Claude Code possui um modo de debug que pode ser ativado com a flag --debug.',
    answer: true,
    explanation:
      'A flag --debug ativa logs detalhados de depuração, mostrando as chamadas de ferramentas, prompts enviados ao modelo e outras informações úteis para troubleshooting.',
    referenceUrl: 'https://docs.anthropic.com/en/docs/claude-code/settings',
  },
  {
    id: 'q-043',
    category: 'setup',
    difficulty: 'intermediario',
    statement: 'A integração do Claude Code com JetBrains IDEs requer instalação de um plugin separado.',
    answer: true,
    explanation:
      'Para IDEs da JetBrains (IntelliJ, PyCharm, etc.), é necessário instalar o plugin Claude Code disponível no JetBrains Marketplace, que adiciona integração nativa ao ambiente.',
    referenceUrl: 'https://docs.anthropic.com/en/docs/claude-code/ide-integrations',
  },
  {
    id: 'q-044',
    category: 'setup',
    difficulty: 'intermediario',
    statement: 'Claude Code pode ler variáveis de ambiente do arquivo .env do projeto automaticamente.',
    answer: false,
    explanation:
      'Claude Code não lê arquivos .env automaticamente por segurança. As variáveis de ambiente devem ser exportadas no shell antes de iniciar a sessão para estarem disponíveis.',
    referenceUrl: 'https://docs.anthropic.com/en/docs/claude-code/settings',
  },
  {
    id: 'q-045',
    category: 'setup',
    difficulty: 'intermediario',
    statement: 'O comando /init no Claude Code cria automaticamente um arquivo CLAUDE.md com documentação do projeto.',
    answer: true,
    explanation:
      'O slash command /init analisa o repositório e gera um CLAUDE.md com informações sobre comandos de build, arquitetura e estrutura do projeto, facilitando futuras sessões.',
    referenceUrl: 'https://docs.anthropic.com/en/docs/claude-code/slash-commands',
  },

  // ─── INSTALAÇÃO & SETUP — AVANÇADO (5 perguntas) ─────────────────────────
  {
    id: 'q-046',
    category: 'setup',
    difficulty: 'avancado',
    statement: 'Claude Code suporta configuração de múltiplos perfis (profiles) para alternar entre diferentes chaves de API.',
    answer: false,
    explanation:
      'Claude Code não tem suporte nativo a múltiplos perfis. Para alternar entre chaves de API, é necessário mudar a variável de ambiente ANTHROPIC_API_KEY manualmente.',
    referenceUrl: 'https://docs.anthropic.com/en/docs/claude-code/settings',
  },
  {
    id: 'q-047',
    category: 'setup',
    difficulty: 'avancado',
    statement: 'Arquivos CLAUDE.md em subdiretórios são carregados somente quando Claude Code navega para aquele diretório.',
    answer: true,
    explanation:
      'Claude Code carrega CLAUDE.md hierarquicamente: o arquivo da raiz sempre é carregado, e arquivos em subdiretórios são incluídos quando Claude Code acessa ou explora aqueles caminhos.',
    referenceUrl: 'https://docs.anthropic.com/en/docs/claude-code/memory',
  },
  {
    id: 'q-048',
    category: 'setup',
    difficulty: 'avancado',
    statement: 'O settings.json aceita expressões glob para configurar permissões de ferramentas em padrões de arquivos específicos.',
    answer: true,
    explanation:
      'As permissões no settings.json suportam padrões glob, permitindo configurar regras como "Bash(npm run *)" para permitir apenas comandos npm ou "Read(src/**)" para restringir leitura a um diretório.',
    referenceUrl: 'https://docs.anthropic.com/en/docs/claude-code/settings',
  },
  {
    id: 'q-049',
    category: 'setup',
    difficulty: 'avancado',
    statement: 'Claude Code pode ser configurado para usar um servidor MCP remoto via SSH tunneling.',
    answer: true,
    explanation:
      'Servidores MCP (Model Context Protocol) podem ser acessados remotamente via SSH tunneling, permitindo que Claude Code use ferramentas hospedadas em infraestrutura remota ou servidores internos.',
    referenceUrl: 'https://docs.anthropic.com/en/docs/claude-code/mcp',
  },
  {
    id: 'q-050',
    category: 'setup',
    difficulty: 'avancado',
    statement: 'O comando claude --resume permite continuar uma sessão anterior pelo ID de conversa.',
    answer: true,
    explanation:
      'A flag --resume (ou -r) seguida do ID de sessão permite retomar conversas anteriores, mantendo o contexto histórico da interação para continuar de onde parou.',
    referenceUrl: 'https://docs.anthropic.com/en/docs/claude-code/cli-reference',
  },

  // ─── COMANDOS, SLASH COMMANDS & SKILLS — INICIANTE (10 perguntas) ─────────
  {
    id: 'q-051',
    category: 'comandos',
    difficulty: 'iniciante',
    statement: 'O comando /help exibe a lista de todos os slash commands disponíveis no Claude Code.',
    answer: true,
    explanation:
      'O /help é o comando de ajuda principal do Claude Code, listando todos os slash commands built-in e customizados disponíveis na sessão atual.',
    referenceUrl: 'https://docs.anthropic.com/en/docs/claude-code/slash-commands',
  },
  {
    id: 'q-052',
    category: 'comandos',
    difficulty: 'iniciante',
    statement: 'O slash command /clear limpa o histórico da conversa atual.',
    answer: true,
    explanation:
      'O /clear reseta o contexto da conversa atual, útil quando o contexto está muito longo ou quando se quer iniciar uma nova tarefa sem o histórico anterior influenciando.',
    referenceUrl: 'https://docs.anthropic.com/en/docs/claude-code/slash-commands',
  },
  {
    id: 'q-053',
    category: 'comandos',
    difficulty: 'iniciante',
    statement: 'O comando /review solicita uma revisão de código das mudanças atuais no repositório.',
    answer: true,
    explanation:
      'O /review analisa as mudanças pendentes no repositório (unstaged, staged ou diff com main) e fornece feedback detalhado sobre qualidade, bugs potenciais e melhorias.',
    referenceUrl: 'https://docs.anthropic.com/en/docs/claude-code/slash-commands',
  },
  {
    id: 'q-054',
    category: 'comandos',
    difficulty: 'iniciante',
    statement: 'No Claude Code, o atalho de teclado Ctrl+C cancela a tarefa em execução.',
    answer: true,
    explanation:
      'Ctrl+C durante a execução de uma tarefa envia um sinal de interrupção, cancelando a operação atual. O Claude Code confirma o cancelamento e retorna ao prompt interativo.',
    referenceUrl: 'https://docs.anthropic.com/en/docs/claude-code/keyboard-shortcuts',
  },
  {
    id: 'q-055',
    category: 'comandos',
    difficulty: 'iniciante',
    statement: 'Slash commands do Claude Code só podem ser usados dentro do modo interativo (REPL).',
    answer: false,
    explanation:
      'Algumas funcionalidades dos slash commands podem ser invocadas via flags da CLI (como --review ou --init). No entanto, a maioria é melhor aproveitada no modo interativo.',
    referenceUrl: 'https://docs.anthropic.com/en/docs/claude-code/slash-commands',
  },
  {
    id: 'q-056',
    category: 'comandos',
    difficulty: 'iniciante',
    statement: 'O comando /compact comprime o contexto da conversa para liberar espaço no context window.',
    answer: true,
    explanation:
      'O /compact usa o modelo para criar um resumo comprimido do histórico de conversa, mantendo as informações essenciais mas reduzindo o uso de tokens e liberando espaço no contexto.',
    referenceUrl: 'https://docs.anthropic.com/en/docs/claude-code/slash-commands',
  },
  {
    id: 'q-057',
    category: 'comandos',
    difficulty: 'iniciante',
    statement: 'É possível passar um arquivo como contexto para o Claude Code usando @ seguido do caminho do arquivo.',
    answer: true,
    explanation:
      'A notação @caminho/do/arquivo permite incluir o conteúdo de arquivos diretamente na mensagem para o Claude Code, tornando a referência a arquivos mais conveniente.',
    referenceUrl: 'https://docs.anthropic.com/en/docs/claude-code/overview',
  },
  {
    id: 'q-058',
    category: 'comandos',
    difficulty: 'iniciante',
    statement: 'O claude -p "prompt" executa o Claude Code em modo não-interativo e retorna apenas o output.',
    answer: true,
    explanation:
      'A flag -p (ou --print) executa Claude Code com o prompt fornecido em modo não-interativo (headless), ideal para scripts e pipelines que precisam do output sem interação.',
    referenceUrl: 'https://docs.anthropic.com/en/docs/claude-code/cli-reference',
  },
  {
    id: 'q-059',
    category: 'comandos',
    difficulty: 'iniciante',
    statement: 'O /memory exibe o conteúdo atual do arquivo de memória (CLAUDE.md) carregado.',
    answer: true,
    explanation:
      'O slash command /memory mostra as instruções e contexto atualmente carregados da memória do Claude Code, permitindo verificar o que está no CLAUDE.md sem abrir o arquivo manualmente.',
    referenceUrl: 'https://docs.anthropic.com/en/docs/claude-code/slash-commands',
  },
  {
    id: 'q-060',
    category: 'comandos',
    difficulty: 'iniciante',
    statement: 'O comando /cost exibe o custo estimado da sessão atual em dólares.',
    answer: true,
    explanation:
      'O /cost mostra estatísticas de uso da sessão atual, incluindo tokens de entrada e saída consumidos e o custo estimado em USD, útil para controle de gastos.',
    referenceUrl: 'https://docs.anthropic.com/en/docs/claude-code/slash-commands',
  },

  // ─── COMANDOS, SLASH COMMANDS & SKILLS — INTERMEDIÁRIO (10 perguntas) ─────
  {
    id: 'q-061',
    category: 'comandos',
    difficulty: 'intermediario',
    statement: 'Skills customizadas do Claude Code são arquivos Markdown armazenados em ~/.claude/commands/.',
    answer: true,
    explanation:
      'Skills (slash commands customizados) são arquivos .md em ~/.claude/commands/ (globais) ou .claude/commands/ (por projeto). O nome do arquivo define o comando, ex: review.md → /review.',
    referenceUrl: 'https://docs.anthropic.com/en/docs/claude-code/slash-commands',
  },
  {
    id: 'q-062',
    category: 'comandos',
    difficulty: 'intermediario',
    statement: 'Uma skill do Claude Code pode invocar outras skills usando a notação /nome-da-skill.',
    answer: false,
    explanation:
      'Skills são prompts Markdown executados pelo modelo, e o modelo pode naturalmente encadear comportamentos. Porém, não há uma sintaxe formal de invocação de skill dentro de outra skill no markdown.',
    referenceUrl: 'https://docs.anthropic.com/en/docs/claude-code/slash-commands',
  },
  {
    id: 'q-063',
    category: 'comandos',
    difficulty: 'intermediario',
    statement: 'O /security-review analisa o código em busca de vulnerabilidades de segurança.',
    answer: true,
    explanation:
      'O /security-review é uma skill built-in que solicita ao Claude Code uma análise de segurança do código atual, buscando vulnerabilidades como injeção SQL, XSS, exposição de credenciais e outros riscos.',
    referenceUrl: 'https://docs.anthropic.com/en/docs/claude-code/slash-commands',
  },
  {
    id: 'q-064',
    category: 'comandos',
    difficulty: 'intermediario',
    statement: 'O atalho Esc+Esc no Claude Code abre o modo de edição do prompt anterior.',
    answer: true,
    explanation:
      'Pressionar Esc duas vezes permite editar o prompt enviado anteriormente, facilitando a correção de erros de digitação ou ajustes na instrução sem redigitar tudo.',
    referenceUrl: 'https://docs.anthropic.com/en/docs/claude-code/keyboard-shortcuts',
  },
  {
    id: 'q-065',
    category: 'comandos',
    difficulty: 'intermediario',
    statement: 'O comando claude --model permite especificar qual modelo Claude usar na sessão.',
    answer: true,
    explanation:
      'A flag --model (ex: --model claude-opus-4-5) permite escolher o modelo específico a ser usado, substituindo o modelo padrão configurado nas preferências.',
    referenceUrl: 'https://docs.anthropic.com/en/docs/claude-code/cli-reference',
  },
  {
    id: 'q-066',
    category: 'comandos',
    difficulty: 'intermediario',
    statement: 'Skills do Claude Code podem receber argumentos passados diretamente no slash command.',
    answer: true,
    explanation:
      'Ao invocar uma skill com /nome-da-skill argumento, o texto após o nome da skill é passado como $ARGUMENTS dentro do template Markdown da skill, permitindo comportamento dinâmico.',
    referenceUrl: 'https://docs.anthropic.com/en/docs/claude-code/slash-commands',
  },
  {
    id: 'q-067',
    category: 'comandos',
    difficulty: 'intermediario',
    statement: 'O /vim ativa o modo de edição de prompt estilo Vim no Claude Code.',
    answer: true,
    explanation:
      'Claude Code suporta um modo de edição Vim para o prompt de entrada, ativado via /vim ou pela configuração correspondente no settings.json, para usuários que preferem keybindings Vim.',
    referenceUrl: 'https://docs.anthropic.com/en/docs/claude-code/keyboard-shortcuts',
  },
  {
    id: 'q-068',
    category: 'comandos',
    difficulty: 'intermediario',
    statement: 'O comando claude --output-format json retorna o resultado em formato JSON estruturado.',
    answer: true,
    explanation:
      'A flag --output-format json (ou stream-json) é útil para integração com outros scripts e ferramentas, pois retorna o output do Claude Code em formato JSON parseável em vez de texto plano.',
    referenceUrl: 'https://docs.anthropic.com/en/docs/claude-code/cli-reference',
  },
  {
    id: 'q-069',
    category: 'comandos',
    difficulty: 'intermediario',
    statement: 'O /doctor verifica a instalação do Claude Code e reporta problemas de configuração.',
    answer: true,
    explanation:
      'O /doctor (ou claude doctor via CLI) executa diagnósticos na instalação do Claude Code, verificando dependências, configurações e conectividade com a API Anthropic.',
    referenceUrl: 'https://docs.anthropic.com/en/docs/claude-code/slash-commands',
  },
  {
    id: 'q-070',
    category: 'comandos',
    difficulty: 'intermediario',
    statement: 'Skills de projeto ficam disponíveis para todos os membros do time quando commitadas no repositório.',
    answer: true,
    explanation:
      'Skills em .claude/commands/ do projeto são versionadas junto com o código, permitindo que toda a equipe tenha acesso aos mesmos slash commands customizados ao clonar o repositório.',
    referenceUrl: 'https://docs.anthropic.com/en/docs/claude-code/slash-commands',
  },

  // ─── COMANDOS, SLASH COMMANDS & SKILLS — AVANÇADO (5 perguntas) ───────────
  {
    id: 'q-071',
    category: 'comandos',
    difficulty: 'avancado',
    statement: 'O placeholder $SELECTION em uma skill captura o texto selecionado no editor de código integrado.',
    answer: true,
    explanation:
      'Nas integrações com IDEs, skills podem usar $SELECTION para receber o texto atualmente selecionado no editor, permitindo criar comandos context-aware como "refatorar seleção" ou "explicar este código".',
    referenceUrl: 'https://docs.anthropic.com/en/docs/claude-code/slash-commands',
  },
  {
    id: 'q-072',
    category: 'comandos',
    difficulty: 'avancado',
    statement: 'Skills podem definir ferramentas (tools) customizadas que Claude Code pode usar durante a execução.',
    answer: false,
    explanation:
      'Skills são apenas prompts Markdown — elas não definem ferramentas. Ferramentas customizadas são adicionadas via servidores MCP, não através do sistema de skills.',
    referenceUrl: 'https://docs.anthropic.com/en/docs/claude-code/slash-commands',
  },
  {
    id: 'q-073',
    category: 'comandos',
    difficulty: 'avancado',
    statement: 'O comando /status exibe o estado atual do sistema de controle de versão (git) do projeto.',
    answer: false,
    explanation:
      'Não existe um slash command built-in /status no Claude Code. Para ver o status do git, basta pedir ao Claude Code diretamente em linguagem natural ou executar "git status" no terminal.',
    referenceUrl: 'https://docs.anthropic.com/en/docs/claude-code/slash-commands',
  },
  {
    id: 'q-074',
    category: 'comandos',
    difficulty: 'avancado',
    statement: 'Claude Code pode ser invocado com stdin: echo "mensagem" | claude processa o input do pipe.',
    answer: true,
    explanation:
      'Claude Code aceita input via stdin, permitindo pipelines como: cat arquivo.py | claude -p "explique este código" ou echo "mensagem" | claude, integrando-se naturalmente com ferramentas Unix.',
    referenceUrl: 'https://docs.anthropic.com/en/docs/claude-code/cli-reference',
  },
  {
    id: 'q-075',
    category: 'comandos',
    difficulty: 'avancado',
    statement: 'O /plan ativa um modo especial onde Claude Code cria um plano de implementação antes de executar qualquer ação.',
    answer: true,
    explanation:
      'O modo de planejamento (/plan ou Plan Mode) faz Claude Code descrever sua abordagem e criar um plano antes de executar, sendo útil para tarefas complexas onde a revisão do plano é importante.',
    referenceUrl: 'https://docs.anthropic.com/en/docs/claude-code/slash-commands',
  },

  // ─── HOOKS, MCP, AGENT SDK & AVANÇADO — INICIANTE (10 perguntas) ──────────
  {
    id: 'q-076',
    category: 'avancado',
    difficulty: 'iniciante',
    statement: 'Hooks no Claude Code são scripts que executam automaticamente em resposta a eventos específicos.',
    answer: true,
    explanation:
      'Hooks são comandos shell configurados no settings.json que disparam em eventos como PreToolUse (antes de usar uma ferramenta), PostToolUse (após usar) e Stop (quando o agente para).',
    referenceUrl: 'https://docs.anthropic.com/en/docs/claude-code/hooks',
  },
  {
    id: 'q-077',
    category: 'avancado',
    difficulty: 'iniciante',
    statement: 'MCP significa "Model Context Protocol" e é um protocolo para estender as capacidades do Claude Code.',
    answer: true,
    explanation:
      'MCP (Model Context Protocol) é um protocolo aberto da Anthropic que permite integrar ferramentas e fontes de dados externas ao Claude Code via servidores MCP locais ou remotos.',
    referenceUrl: 'https://docs.anthropic.com/en/docs/claude-code/mcp',
  },
  {
    id: 'q-078',
    category: 'avancado',
    difficulty: 'iniciante',
    statement: 'Um servidor MCP pode expor ferramentas, recursos e prompts para o Claude Code usar.',
    answer: true,
    explanation:
      'Servidores MCP podem disponibilizar três tipos de recursos: tools (ferramentas executáveis), resources (dados/contexto) e prompts (templates de prompt reutilizáveis).',
    referenceUrl: 'https://docs.anthropic.com/en/docs/claude-code/mcp',
  },
  {
    id: 'q-079',
    category: 'avancado',
    difficulty: 'iniciante',
    statement: 'O hook PreToolUse permite cancelar uma ação do Claude Code antes que ela seja executada.',
    answer: true,
    explanation:
      'O hook PreToolUse recebe dados sobre a ferramenta que será usada e pode retornar um código de saída não-zero para bloquear a execução, adicionando uma camada de controle de segurança.',
    referenceUrl: 'https://docs.anthropic.com/en/docs/claude-code/hooks',
  },
  {
    id: 'q-080',
    category: 'avancado',
    difficulty: 'iniciante',
    statement: 'Servidores MCP são escritos exclusivamente em JavaScript/TypeScript.',
    answer: false,
    explanation:
      'Servidores MCP podem ser escritos em qualquer linguagem que suporte o protocolo, incluindo Python, Go, Rust, Java e outras. Existem SDKs MCP em várias linguagens.',
    referenceUrl: 'https://docs.anthropic.com/en/docs/claude-code/mcp',
  },
  {
    id: 'q-081',
    category: 'avancado',
    difficulty: 'iniciante',
    statement: 'O Agent SDK do Claude Code permite criar aplicações que usam Claude como backbone de raciocínio.',
    answer: true,
    explanation:
      'O Agent SDK (@anthropic-ai/claude-code/sdk) expõe a funcionalidade do Claude Code como biblioteca, permitindo construir aplicações e agentes customizados com Claude como motor de raciocínio.',
    referenceUrl: 'https://docs.anthropic.com/en/docs/claude-code/sdk',
  },
  {
    id: 'q-082',
    category: 'avancado',
    difficulty: 'iniciante',
    statement: 'Hooks do Claude Code são configurados no arquivo settings.json.',
    answer: true,
    explanation:
      'Hooks são definidos na chave "hooks" do settings.json (global ou de projeto), especificando o evento (PreToolUse, PostToolUse, Stop, etc.) e os comandos shell a executar.',
    referenceUrl: 'https://docs.anthropic.com/en/docs/claude-code/hooks',
  },
  {
    id: 'q-083',
    category: 'avancado',
    difficulty: 'iniciante',
    statement: 'Um servidor MCP pode conectar o Claude Code a bancos de dados externos.',
    answer: true,
    explanation:
      'Servidores MCP são amplamente usados para conectar Claude Code a bancos de dados (PostgreSQL, MySQL, MongoDB), APIs externas, serviços cloud e outros sistemas corporativos.',
    referenceUrl: 'https://docs.anthropic.com/en/docs/claude-code/mcp',
  },
  {
    id: 'q-084',
    category: 'avancado',
    difficulty: 'iniciante',
    statement: 'O hook Stop executa um script quando o Claude Code termina de responder ao usuário.',
    answer: true,
    explanation:
      'O evento Stop dispara quando o agente encerra sua resposta ou tarefa. Isso permite executar ações pós-tarefa como notificações, logging ou atualização de status em sistemas externos.',
    referenceUrl: 'https://docs.anthropic.com/en/docs/claude-code/hooks',
  },
  {
    id: 'q-085',
    category: 'avancado',
    difficulty: 'iniciante',
    statement: 'Servidores MCP devem ser reiniciados toda vez que o Claude Code inicia uma nova sessão.',
    answer: false,
    explanation:
      'Servidores MCP configurados no settings.json são iniciados automaticamente pelo Claude Code quando necessário e podem permanecer rodando entre sessões, dependendo do tipo de transporte configurado.',
    referenceUrl: 'https://docs.anthropic.com/en/docs/claude-code/mcp',
  },

  // ─── HOOKS, MCP, AGENT SDK & AVANÇADO — INTERMEDIÁRIO (10 perguntas) ──────
  {
    id: 'q-086',
    category: 'avancado',
    difficulty: 'intermediario',
    statement: 'Hooks do Claude Code recebem dados sobre a ferramenta sendo usada via stdin em formato JSON.',
    answer: true,
    explanation:
      'O Claude Code passa informações contextuais para os hooks via stdin como JSON, incluindo o nome da ferramenta, seus inputs e o contexto da sessão, permitindo lógica customizada baseada nesses dados.',
    referenceUrl: 'https://docs.anthropic.com/en/docs/claude-code/hooks',
  },
  {
    id: 'q-087',
    category: 'avancado',
    difficulty: 'intermediario',
    statement: 'O Agent SDK permite criar subagentes que compartilham o mesmo contexto de conversa do agente pai.',
    answer: false,
    explanation:
      'Subagentes criados via Agent SDK têm seus próprios contextos isolados. Eles recebem apenas as informações explicitamente passadas pelo agente pai, evitando contaminação de contexto.',
    referenceUrl: 'https://docs.anthropic.com/en/docs/claude-code/sdk',
  },
  {
    id: 'q-088',
    category: 'avancado',
    difficulty: 'intermediario',
    statement: 'MCP suporta transporte via stdio (processo local) e SSE (HTTP Server-Sent Events).',
    answer: true,
    explanation:
      'O Model Context Protocol define dois tipos de transporte: stdio para servidores locais (processo filho) e SSE para servidores remotos via HTTP, oferecendo flexibilidade de implantação.',
    referenceUrl: 'https://docs.anthropic.com/en/docs/claude-code/mcp',
  },
  {
    id: 'q-089',
    category: 'avancado',
    difficulty: 'intermediario',
    statement: 'Um hook PostToolUse pode modificar o output de uma ferramenta antes que o Claude Code o processe.',
    answer: false,
    explanation:
      'Hooks PostToolUse são executados após a ferramenta, mas não podem modificar retroativamente o output que já foi retornado ao modelo. Eles servem para ações side-effect como logging ou notificações.',
    referenceUrl: 'https://docs.anthropic.com/en/docs/claude-code/hooks',
  },
  {
    id: 'q-090',
    category: 'avancado',
    difficulty: 'intermediario',
    statement: 'O Agent SDK suporta checkpointing, permitindo pausar e retomar a execução de um agente.',
    answer: false,
    explanation:
      'O Agent SDK do Claude Code não tem suporte nativo a checkpointing. Para retomar tarefas, é necessário implementar a lógica de estado manualmente na aplicação que usa o SDK.',
    referenceUrl: 'https://docs.anthropic.com/en/docs/claude-code/sdk',
  },
  {
    id: 'q-091',
    category: 'avancado',
    difficulty: 'intermediario',
    statement: 'Servidores MCP podem ser configurados com escopo global (usuário) ou de projeto.',
    answer: true,
    explanation:
      'MCP servers podem ser adicionados ao settings.json global (~/.claude/) para disponibilidade em todos os projetos, ou no .claude/settings.json do projeto para uso específico.',
    referenceUrl: 'https://docs.anthropic.com/en/docs/claude-code/mcp',
  },
  {
    id: 'q-092',
    category: 'avancado',
    difficulty: 'intermediario',
    statement: 'Hooks do Claude Code podem ser usados para implementar aprovação humana (human-in-the-loop) antes de ações perigosas.',
    answer: true,
    explanation:
      'Um hook PreToolUse pode pausar a execução e aguardar input humano antes de permitir ações potencialmente perigosas, implementando um gate de aprovação em fluxos automatizados.',
    referenceUrl: 'https://docs.anthropic.com/en/docs/claude-code/hooks',
  },
  {
    id: 'q-093',
    category: 'avancado',
    difficulty: 'intermediario',
    statement: 'O Agent SDK do Claude Code é a mesma biblioteca usada internamente pela ferramenta CLI.',
    answer: true,
    explanation:
      'O CLI do Claude Code é construído sobre o mesmo Agent SDK que é disponibilizado publicamente, permitindo que desenvolvedores criem ferramentas com as mesmas capacidades do CLI oficial.',
    referenceUrl: 'https://docs.anthropic.com/en/docs/claude-code/sdk',
  },
  {
    id: 'q-094',
    category: 'avancado',
    difficulty: 'intermediario',
    statement: 'Claude Code pode usar o protocolo MCP para expor suas próprias ferramentas a outros clientes MCP.',
    answer: false,
    explanation:
      'Claude Code é um cliente MCP, não um servidor. Ele consome ferramentas de servidores MCP externos, mas não expõe suas próprias capacidades como servidor MCP para outros clientes.',
    referenceUrl: 'https://docs.anthropic.com/en/docs/claude-code/mcp',
  },
  {
    id: 'q-095',
    category: 'avancado',
    difficulty: 'intermediario',
    statement: 'O hook PreToolUse pode filtrar quais ferramentas o Claude Code tem permissão para usar com base em regras customizadas.',
    answer: true,
    explanation:
      'Retornando código de saída 2 com uma mensagem de feedback, um hook PreToolUse pode bloquear seletivamente o uso de ferramentas com base em lógica customizada (ex: ambiente de produção, horário, etc).',
    referenceUrl: 'https://docs.anthropic.com/en/docs/claude-code/hooks',
  },

  // ─── HOOKS, MCP, AGENT SDK & AVANÇADO — AVANÇADO (5 perguntas) ───────────
  {
    id: 'q-096',
    category: 'avancado',
    difficulty: 'avancado',
    statement: 'O Agent SDK permite criar agentes com ferramentas customizadas usando a classe Tool do pacote.',
    answer: true,
    explanation:
      'O Agent SDK expõe classes e interfaces para definir ferramentas customizadas com schemas de input/output, permitindo que agentes usem capacidades específicas do domínio da aplicação.',
    referenceUrl: 'https://docs.anthropic.com/en/docs/claude-code/sdk',
  },
  {
    id: 'q-097',
    category: 'avancado',
    difficulty: 'avancado',
    statement: 'Hooks do Claude Code executam no mesmo processo do CLI, tendo acesso direto ao estado da sessão.',
    answer: false,
    explanation:
      'Hooks são executados como processos shell externos separados do processo principal do Claude Code. Eles recebem dados via stdin/stdout e não têm acesso direto ao estado interno da sessão.',
    referenceUrl: 'https://docs.anthropic.com/en/docs/claude-code/hooks',
  },
  {
    id: 'q-098',
    category: 'avancado',
    difficulty: 'avancado',
    statement: 'O Agent SDK suporta execução de múltiplos agentes em paralelo com controle de concorrência.',
    answer: true,
    explanation:
      'O Agent SDK permite criar e gerenciar múltiplos agentes concorrentes, com controle sobre o número máximo de agentes paralelos (maxConcurrency) para evitar esgotamento de recursos.',
    referenceUrl: 'https://docs.anthropic.com/en/docs/claude-code/sdk',
  },
  {
    id: 'q-099',
    category: 'avancado',
    difficulty: 'avancado',
    statement: 'Servidores MCP podem ser autenticados com OAuth 2.0 para acesso seguro a recursos protegidos.',
    answer: true,
    explanation:
      'O protocolo MCP suporta autenticação OAuth 2.0 para servidores remotos, permitindo acesso seguro a APIs e recursos que exigem autorização, como GitHub, Jira ou sistemas internos.',
    referenceUrl: 'https://docs.anthropic.com/en/docs/claude-code/mcp',
  },
  {
    id: 'q-100',
    category: 'avancado',
    difficulty: 'avancado',
    statement: 'Claude Code pode usar o hook UserPromptSubmit para transformar o prompt do usuário antes de enviá-lo ao modelo.',
    answer: true,
    explanation:
      'O evento UserPromptSubmit dispara quando o usuário envia um prompt, permitindo que hooks pré-processem, enriquecam ou validem a mensagem antes que ela chegue ao modelo Claude.',
    referenceUrl: 'https://docs.anthropic.com/en/docs/claude-code/hooks',
  },
]
