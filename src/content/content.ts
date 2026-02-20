/* Altere aqui os textos, links, logos e depoimentos centralizados do site */

export type NavLink = { label: string; href: string };

export const siteContent = {
  brand: {
    name: 'LeaderIT',
    tagline: 'Inovação e Segurança'
    
  },
  links: {
    ctaPrimary: 'mailto:contato@leaderit.com.br',
    ctaSecondary: 'https://wa.me/5527988609240'
  },
  navLinks: [
    { label: 'Home', href: '#home' },
    { label: 'Soluções', href: '#solucoes' },
    { label: 'Parceiros', href: '#parceiros' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'Contato', href: '#contato' }
  ] as NavLink[],
  hero: {
    title:
      'Automação com IA, Sistemas WEB, CAIO e LGPD sem burocracia',
    subtitle:
      'Transforme operações críticas com decisões orientadas por dados, segurança contínua e processos digitais mais rápidos.',
    bullets: [
      'Automações inteligentes, do atendimento à análise de dados.',
      'Governança, riscos e compliance com IA aplicada.',
      'Sistemas e WebApps modernos sob-medida em tempo recorde.',
      'Adequação contínua a LGPD e ISO 27001 com rastreabilidade.'
    ]
  },
  benefits: [
    {
      title: 'Automação inteligente, onboarding sem barreiras',
      description:
        'Implantação ágil com IA para acelerar políticas, controles e documentação essencial.'
    },
    {
      title: 'GRC automático, LGPD por IA e segurança contínua',
      description:
        'Monitoramento ativo de riscos, compliance auditável e respostas rápidas a incidentes.'
    },
    {
      title: 'Evolução contínua com IA',
      description:
        'Operação orientada por dados para ganhos constantes em produtividade e segurança.'
    }
  ],
  editorial: {
    title: 'Inovação que automatiza',
    topics: [
      {
        title: 'Processos Inteligentes e Ágeis',
        description:
          'Automação de fluxos operacionais, controles e auditorias com previsibilidade e mínima intervenção manual.'
      },
      {
        title: 'Documentação Digital e Dinâmica',
        description:
          'Políticas, procedimentos e evidências sempre atualizados para auditorias e novas exigências regulatórias.'
      },
      {
        title: 'Atendimento Personalizado e Proativo',
        description:
          'Suporte inteligente para antecipar dúvidas e acelerar desenvolvimento sob medida.'
      }
    ]
  },
  partners: [
    { name: 'Drut', logo: '/assets/partners/drut.png' },
    { name: 'Vembu', logo: '/assets/partners/vembu.png' },
    { name: 'Fortinet', logo: '/assets/partners/fortinet.png' },
    { name: 'Lenovo', logo: '/assets/partners/lenovo.png' },
    { name: 'Positivo', logo: '/assets/partners/positivo.png' },
    { name: 'BlinkOps', logo: '/assets/partners/blinkops.png' }
  ],
  testimonials: [
    {
      company: 'Boulevard Lagoa',
      text: 'A LeaderIT conduziu nossa adequação à LGPD com clareza técnica e entregas sem burocracia, trazendo segurança jurídica e operacional.',
      author: 'Diretoria Executiva'
    },
    {
      company: 'MedSênior',
      text: 'Os treinamentos de gestão e auditoria ISO 27001 elevaram a maturidade do time e aceleraram decisões críticas baseadas em dados.',
      author: 'Coordenação de Compliance'
    },
    {
      company: 'Outview',
      text: 'Com o suporte ampliado por IA, ganhamos produtividade diária e maior previsibilidade na gestão de riscos e incidentes.',
      author: 'Sócio Diretor'
    }
  ],
  finalCta: {
    title: 'Pronto para transformar sua operação digital?',
    description:
      'Converse com a LeaderIT e desenhe um plano prático para evoluir processos, compliance e performance digital.',
    buttonLabel: 'Enviar mensagem'
  },
  footer: {
    email: 'contato@leaderit.com.br',
    phone: '+55 (27) 98860-9240',
    address: 'Vitória, ES - Brasil',
    social: [
      { label: 'LinkedIn', href: 'https://www.linkedin.com' },
      { label: 'Instagram', href: 'https://www.instagram.com' }
    ]
  }
};
