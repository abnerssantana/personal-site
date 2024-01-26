export enum Cat {
  amortecimento = 'Amortecimento',
  performance = 'Performance',
  dailytrainer = 'Daily trainer'
}

export interface Shoes {
  title: string
  link: string
  category: Cat
  description: string
  img?: string
}

export const ten: Shoes[] = [
  {
    title: 'Rap Run',
    link: 'https://open.spotify.com/playlist/7hjxR0ivKGSXAJcYmRWHqc',
    category: Cat.amortecimento,
    description: '"Entre no Rapmobil!" Deixe o poder do rap guiar sua corrida, enquanto as rimas afiadas e os beats envolventes mantêm você no ritmo.',
    img: 'static/music/raprun.jpg',
  },
  {
    title: 'Time Machine Run',
    link: 'https://open.spotify.com/playlist/1SPz8tLBnf5etym8A1odxp',
    category: Cat.performance,
    description: 'Não estamos apenas correndo; estamos dançando com a energia atemporal desses clássicos que transcenderam décadas. Aperte os cadarços, ajuste o ritmo e prepare-se para uma experiência única. Let the music move you!',
    img: 'static/music/timemachine.jpg',
  },
  {
    title: 'Blessings Run',
    link: 'https://open.spotify.com/playlist/1SPz8tLBnf5etym8A1odxp',
    category: Cat.performance,
    description: 'Deixe-se levar pela adoração e paz proporcionadas pelos louvores, permitindo que a música eleve sua mente e espírito enquanto você se entrega ao exercício físico.',
    img: 'static/music/blessings.jpg',
  },
  {
    title: 'FGL Run',
    link: 'https://open.spotify.com/playlist/1SPz8tLBnf5etym8A1odxp',
    category: Cat.dailytrainer,
    description: 'Sinta a vibração contagiante das canções da Florida Georgia Line enquanto você se entrega ao ritmo acelerado e à atmosfera descontraída do country contemporâneo.',
    img: 'static/music/fgl.jpeg',
  },
];