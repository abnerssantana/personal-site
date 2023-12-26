export enum Category {
  article = 'Artigo',
  resource = 'Fonte',
  tool = 'Ferramenta',
  video = 'Vídeo',
}

export interface Bookmark {
  title: string
  url: string
  category: Category
  description: string
  icon?: string
}

export const bookmarks: Bookmark[] = [
  {
    title: 'PB Viewer',
    url: 'https://pbviewer.com',
    category: Category.tool,
    description: 'Conecte-se ao Strava para visualizar seus registros pessoais de corrida. Você pode classificar e filtrar distâncias de 400m a 50km.',
    icon: '/static/bookmarks/pb.png',
  },
  {
    title: 'Stats Hunters',
    url: 'https://www.statshunters.com',
    category: Category.tool,
    description: 'O StatsHunters oferece muitos recursos extras, para analisar suas atividades além dos seus dados do Strava.',
  },
  {
    title: 'Calculadora de Pace',
    url: 'https://www.omnicalculator.com/sports/pace',
    category: Category.tool,
    description: 'Calcule o ritmo para diferentes distâncias e formatos, /km, /m, /km/h...',
  },
  {
    title: 'CBAT',
    url: 'https://www.cbat.org.br/novo/index.php',
    category: Category.resource,
    description: 'A Confederação Brasileira de Atletismo é o órgão responsável pela organização dos eventos, pelo planejamento do esporte no Brasil.',
    icon: '/static/bookmarks/uxplanet.png',
  },
  {
    title: 'Calendar Hack',
    url: 'https://defy.org/hacks/calendarhack/?d=2024-05-19&p=c25k&s=1&u=mi',
    category: Category.tool,
    description: 'Planilha de treinamento de corrida, para diversas distâncias, baseados em grandes métodos de treinamentoes e livros.',
    icon: '/static/bookmarks/the-product-manifesto.png',
  },
  {
    title: 'Anatomia Cirurgicamente Relevante das Regiões Medial e Lateral do Joelho',
    url: 'https://www.sciencedirect.com/science/article/pii/S106018722200020X',
    category: Category.article,
    description: 'Compreender as relações dos aspectos mediais e laterais do joelho tem um papel clínico crítico para o atendimento ao paciente.',
  },
  {
    title: 'Train like the worlds best endurance athletes',
    url: 'https://www.youtube.com/watch?v=MALsI0mJ09I&t=2s',
    category: Category.video,
    description: 'Como "pessoas normais" podem treinar como os melhores atletas de resistência do mundo | Stephen Seiler',
    icon: '/static/bookmarks/youtube.svg',
  },
  {
    title: 'Defining Training and Performance Caliber',
    url: 'https://journals.humankinetics.com/view/journals/ijspp/17/2/article-p317.xml',
    category: Category.article,
    description: 'Ao longo da literatura de ciência do esporte e medicina esportiva, o termo “elite” pode ser um dos termos mais mal usado e definido.',
  },
  {
    title: 'International Olympic Committee consensus statement on load in sport and risk of injury',
    url: 'https://bjsm.bmj.com/content/50/17/1030',
    category: Category.article,
    description: 'Os atletas que participam de esportes de elite estão expostos a altas cargas de treinamento e calendários de competição cada vez mais saturados. Evidências emergentes indicam que o mau gerenciamento de carga é um importante fator de risco para lesões.',
  },
  {
    title: 'have i been pwned?',
    url: 'https://haveibeenpwned.com',
    category: Category.tool,
    description: 'Verifique se o seu endereço de e-mail está em um vazamento de dados.',
  },
  {
    title: 'Sauce for Strava',
    url: 'https://www.sauce.llc',
    category: Category.tool,
    description: 'A extensão Sauce atualiza o Strava.com com melhores informações sobre ciclismo e corrida. É uma adição JavaScript simples, leve, de código aberto e pura do lado do cliente.',
  },
]
