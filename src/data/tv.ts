export enum Genres {
  acao = 'Ação',
  drama = 'Drama',
  romance = 'Romance',
  comedia = 'Comédia',
  crime = 'Crime',
  aventura ='Aventura'
}

export interface Show {
  title: string
  url: string
  category: genres
  description: string
  img?: string
}

export const shows: Show[] = [
  {
    title: 'PB Viewer',
    url: 'https://pbviewer.com',
    category: genres.acao,
    description: 'Conecte-se ao Strava para visualizar seus registros pessoais de corrida. Você pode classificar e filtrar distâncias de 400m a 50km.',
    img: '/static/bookmarks/pb.png',
  },
  {
    title: 'Stats Hunters',
    url: 'https://www.statshunters.com',
    category: genres.acao,
    description: 'O StatsHunters oferece muitos recursos extras, para analisar suas atividades além dos seus dados do Strava.',
  },
  {
    title: 'Calculadora de Pace',
    url: 'https://www.omnicalculator.com/sports/pace',
    category: genres.acao,
    description: 'Calcule o ritmo para diferentes distâncias e formatos, /km, /m, /km/h...',
  },
  {
    title: 'CBAT',
    url: 'https://www.cbat.org.br/novo/index.php',
    category: genres.crime,
    description: 'A Confederação Brasileira de Atletismo é o órgão responsável pela organização dos eventos, pelo planejamento do esporte no Brasil.',
    img: '/static/bookmarks/uxplanet.png',
  },
  {
    title: 'Calendar Hack',
    url: 'https://defy.org/hacks/calendarhack/?d=2024-05-19&p=c25k&s=1&u=mi',
    category: genres.acao,
    description: 'Planilha de treinamento de corrida, para diversas distâncias, baseados em grandes métodos de treinamentoes e livros.',
    img: '/static/bookmarks/the-product-manifesto.png',
  },
  {
    title: 'Anatomia Cirurgicamente Relevante das Regiões Medial e Lateral do Joelho',
    url: 'https://www.sciencedirect.com/science/article/pii/S106018722200020X',
    category: genres.aventura,
    description: 'Compreender as relações dos aspectos mediais e laterais do joelho tem um papel clínico crítico para o atendimento ao paciente.',
  },
  {
    title: 'Train like the worlds best endurance athletes',
    url: 'https://www.youtube.com/watch?v=MALsI0mJ09I&t=2s',
    category: genres.comedia,
    description: 'Como "pessoas normais" podem treinar como os melhores atletas de resistência do mundo | Stephen Seiler',
    img: '/static/bookmarks/youtube.svg',
  },
  {
    title: 'Defining Training and Performance Caliber',
    url: 'https://journals.humankinetics.com/view/journals/ijspp/17/2/article-p317.xml',
    category: genres.crime,
    description: 'Ao longo da literatura de ciência do esporte e medicina esportiva, o termo “elite” pode ser um dos termos mais mal usado e definido.',
  },
  {
    title: 'International Olympic Committee consensus statement on load in sport and risk of injury',
    url: 'https://bjsm.bmj.com/content/50/17/1030',
    category: genres.romance,
    description: 'Os atletas que participam de esportes de elite estão expostos a altas cargas de treinamento e calendários de competição cada vez mais saturados. Evidências emergentes indicam que o mau gerenciamento de carga é um importante fator de risco para lesões.',
  },
  {
    title: 'have i been pwned?',
    url: 'https://haveibeenpwned.com',
    category: genres.comedia,
    description: 'Verifique se o seu endereço de e-mail está em um vazamento de dados.',
  },
  {
    title: 'Sauce for Strava',
    url: 'https://www.sauce.llc',
    category: genres.romance,
    description: 'A extensão Sauce atualiza o Strava.com com melhores informações sobre ciclismo e corrida. É uma adição JavaScript simples, leve, de código aberto e pura do lado do cliente.',
  },
]
