export const dataFake = [
  {
    id: '1',
    title: 'Node.js 24 traz melhorias no runtime e performance',
    description: 'A nova versão do Node.js promete otimizações no consumo de memória e mais estabilidade para aplicações modernas.',
    photoCover: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=60',
    content:
      'O ecossistema JavaScript continua evoluindo rapidamente com melhorias no runtime do Node.js.\n\nEntre os destaques da nova versão estão otimizações de performance, melhorias no gerenciamento de processos e ajustes na compatibilidade com APIs modernas.\n\nPontos importantes:\n- Melhor gerenciamento de memória\n- Inicialização mais rápida\n- APIs experimentais estabilizadas\n\nPara quem trabalha com back-end em JavaScript, atualizar pode trazer ganhos reais em produtividade e desempenho.',
    categoria: 'Back-end',
    tags: ['nodejs', 'javascript', 'performance'],
    autor: 'Equipe Tech',
    dataPublicacao: '2026-01-15'
  },
  {
    id: '2',
    title: 'Angular 20 melhora experiência com Signals',
    description: 'O framework recebeu novas otimizações focadas em reatividade e redução de complexidade no estado.',
    photoCover: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=60',
    content:
      'A equipe do Angular apresentou melhorias importantes na experiência com Signals e rendering otimizado.\n\nO objetivo é simplificar o gerenciamento de estado e diminuir renders desnecessários em aplicações grandes.\n\nDestaques:\n- Reatividade mais previsível\n- Melhor integração com componentes standalone\n- Build mais rápido\n\nProjetos corporativos podem se beneficiar bastante dessas mudanças.',
    categoria: 'Front-end',
    tags: ['angular', 'signals', 'frontend'],
    autor: 'Marina Lopes',
    dataPublicacao: '2026-01-12'
  },
  {
    id: '3',
    title: 'PostgreSQL: índices que realmente fazem diferença',
    description: 'Nem todo índice melhora consultas. Veja como escolher melhor para evitar lentidão.',
    photoCover: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=1200&q=60',
    content:
      'Índices ajudam consultas, mas também podem aumentar o custo de escrita no banco de dados.\n\nAntes de criar vários índices, é importante analisar os filtros e ordenações mais utilizados pela aplicação.\n\nBoas práticas:\n- Indexar colunas usadas em WHERE\n- Evitar índices duplicados\n- Monitorar uso com EXPLAIN ANALYZE\n\nUma estratégia bem planejada pode reduzir drasticamente o tempo de resposta.',
    categoria: 'Banco de Dados',
    tags: ['postgresql', 'sql', 'performance'],
    autor: 'Equipe DBA',
    dataPublicacao: '2026-01-10'
  },
  {
    id: '4',
    title: 'Docker Compose simplifica ambiente de desenvolvimento',
    description: 'Subir banco, API e frontend com um único comando acelera o onboarding de equipes.',
    photoCover: 'https://images.unsplash.com/photo-1605745341112-85968b19335b?auto=format&fit=crop&w=1200&q=60',
    content:
      'Docker Compose continua sendo uma ferramenta prática para organizar ambientes locais.\n\nCom poucos arquivos, é possível configurar containers para banco de dados, APIs e serviços auxiliares.\n\nBenefícios:\n- Padronização do ambiente\n- Menos problemas de compatibilidade\n- Inicialização rápida de serviços\n\nIsso facilita tanto o desenvolvimento quanto testes automatizados.',
    categoria: 'DevOps',
    tags: ['docker', 'compose', 'containers'],
    autor: 'Carlos Henrique',
    dataPublicacao: '2026-01-08'
  },
  {
    id: '5',
    title: 'React Server Components: vale usar agora?',
    description: 'A funcionalidade promete melhorar carregamento e SEO, mas ainda exige planejamento.',
    photoCover: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=1200&q=60',
    content:
      'React Server Components vêm ganhando espaço em aplicações modernas por permitir renderização híbrida mais eficiente.\n\nA ideia principal é mover parte do processamento para o servidor e reduzir JavaScript enviado ao cliente.\n\nO que considerar:\n- Complexidade da arquitetura\n- Compatibilidade com bibliotecas\n- Benefícios reais de SEO e performance\n\nPara aplicações grandes, pode ser um diferencial importante.',
    categoria: 'Front-end',
    tags: ['react', 'nextjs', 'server-components'],
    autor: 'Equipe Front',
    dataPublicacao: '2026-01-05'
  },
  {
    id: '6',
    title: 'Firebase Authentication facilita login social',
    description: 'Implementar autenticação com Google e GitHub ficou mais simples nas últimas versões.',
    photoCover: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=1200&q=60',
    content:
      'Firebase Authentication continua sendo uma solução prática para autenticação em aplicações web e mobile.\n\nAlém de login tradicional, a plataforma oferece integração rápida com provedores sociais.\n\nVantagens:\n- Configuração simplificada\n- Integração com aplicações mobile\n- Regras de segurança integradas\n\nPara MVPs e aplicações escaláveis, pode acelerar bastante o desenvolvimento.',
    categoria: 'Cloud',
    tags: ['firebase', 'auth', 'google'],
    autor: 'Equipe Cloud',
    dataPublicacao: '2026-01-02'
  }
]
