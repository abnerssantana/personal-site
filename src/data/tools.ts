export interface Tool {
  name: string
  description: string
  url: string
  icon?: string
}

export const categories = [
  {
    name: 'Corrida',
    tools: [
      {
        name: 'Coros Pace 2',
        description:
          "Coros é a marca que me conquistou, relógios com as mais recentes tecnologia, plataforma com muitos recursos únicos, atualizações de melhores constantes. A minha versão é a do Eliud Kipchoge.",
        url: 'https://www.polar.com/br/sensores/sensor-de-frequencia-cardiaca/h10',
        icon: '/static/tools/corospace2.png',
      },
      {
        name: 'Polar H10',
        description:
          'Para quem quer dados com precisão sobre treinamento, ter uma cinta de frequencia cardiaca é fundamental, a melhor opção é a Polar.',
        url: 'https://www.blackmagicdesign.com/br/products/davinciresolve',
        icon: '/static/tools/polarh10.png',
      },
      {
        name: 'Coros Pod',
        description:
        'Métricas de corrida avançadas como potência de corrida, eficiência de corrida, tempo de contato com o solo, equilíbrio esquerdo/direito, altura de passo, proporção de passo, comprimento de passo e cadência.',
        url: 'https://coros.com/pod',
        icon: '/static/tools/corospod.jpeg',
      },
    ],
  },
  {
    name: 'Apps',
    tools: [
      {
        name: 'HRV4Training',
        description:
          "Insights sobre Variabilidade da Frequência Cardíaca (HRV) para ajudá-lo a quantificar o estresse, melhorar o equilíbrio de treinamento e estilo de vida, e melhorar seu desempenho.",
        url: 'https://www.hrv4training.com',
        icon: '/static/tools/hrv4training.png',
      },
      {
        name: 'Affinity Photo 2',
        description:
          "Diferente do Photoshop da Adobe que tem um custo mensal, o Affinity trabalha com licenciamento de software, o que é mais barato para uso pessoal, até mesmo corporativo, ferramenta completa e com recursos diferentes. Curva de aprendizado pequena.",
        url: 'https://affinity.serif.com/pt-br/photo',
        icon: '/static/tools/affinity.png',
      },
      {
        name: 'DaVinci Resolve Studio',
        description:
          'Editor de vídeo que utilizo no meu canal, a versão free já é bem completa, mas os recuros de IA, do Studio me ajudam muito na criação, poupando meu tempo de edições.',
        url: 'https://www.blackmagicdesign.com/br/products/davinciresolve',
        icon: '/static/tools/davinci.png',
      },
      {
        name: 'Visual Studio Code',
        description:
          "O Visual Studio Code é um editor de código-fonte desenvolvido pela Microsoft para Windows, Linux e macOS, uma ferramenta simples e cheia de extensões.",
        url: 'https://code.visualstudio.com/',
        icon: '/static/tools/vscode.png',
      },
      {
        name: 'TomatoBar',
        description: 'O temporizador Pomodoro mais legal do mundo para a barra de menus do macOS.',
        url: 'https://github.com/ivoronin/TomatoBar',
        icon: '/static/tools/tomato-bar.png',
      },
    ],
  },
  {
    name: 'Serviços',
    tools: [
      {
        name: 'Trakt',
        description:
          'Eu uso o Trakt para monitorar meus programas de TV e filmes assistidos e para descobrir novos conteúdos.',
        url: 'https://trakt.tv/',
        icon: '/static/tools/trakt.png',
      },
      {
        name: 'Vercel',
        description:
          'A melhor experiência para desenvolvedores. Onde hospedo esse site.',
        url: 'https://vercel.com/',
        icon: '/static/tools/vercel.png',
      },
    ],
  },
  {
    name: 'Setup',
    tools: [
      {
        name: 'MacBook Air M1 (2020)',
        description:
          'O chip M1 é fantástico. Ele tem potência suficiente para executar todos os aplicativos de que preciso.',
        url: 'https://www.apple.com/br/shop/buy-mac/macbook-air/m1-chip',
        icon: '/static/tools/macbook-air-m1.png',
      },
      {
        name: 'iPhone 13',
        description:
          'O chip M1 é fantástico. Ele tem potência suficiente para executar todos os aplicativos de que preciso.',
        url: 'https://www.apple.com/br/shop/buy-iphone/iphone-13',
        icon: '/static/tools/iphone13.png',
      },
      {
        name: 'LG 25" Monitor Ultra Wide FHD',
        description:
          'É mais fácil trabalhar com duas ou mais janelas lado a lado. Perfeito para desenvolvimento e design.',
        url: 'https://www.lg.com/br/monitores-ultrawide',
        icon: '/static/tools/samsung-monitor.png',
      },
      {
        name: 'Baseus USB-C Hub (8-in-1)',
        description:
          'Tudo que preciso em um só lugar. Posso conectar meu monitor, disco rígido externo e cabo Ethernet.',
        url: 'https://www.amazon.com.br/Adaptador-Baseus-Docking-Ethernet-dispositivos/dp/B0987C5L63?th=1',
        icon: '/static/tools/baseus.png',
      },
    ],
  },
  {
    name: 'Audio e Video',
    tools: [
      {
        name: 'Jaybird Vista',
        description:
          'Utilizo os fones de ouvido Jaybird Vista, principalmente por ser resistente a suor, mas a qualidade de áudio também está em um nível premium. Fone que me acompanha em várias corridas, e diariamente, 2 anos de uso, sem perder autonomia e qualidade.',
        url: 'https://www.jaybirdsport.com/pt-br/vista.985-000868.html',
        icon: '/static/tools/jaybird.webp',
      },
    ],
  },
]
