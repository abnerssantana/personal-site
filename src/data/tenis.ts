export enum Cat {
  amortecimento = 'Amortecimento',
  performance = 'Performance',
  dailytrainer = 'Daily trainer'
}

export interface Shoes {
  title: string
  link: string
  review: string
  category: Cat
  description: string
  img?: string
}

export const ten: Shoes[] = [
  {
    title: 'ASICS Dynablast 3',
    link: 'https://open.spotify.com/playlist/1SPz8tLBnf5etym8A1odxp',
    review: 'https://youtu.be/ZXPoXwXJ57k',
    category: Cat.dailytrainer,
    description: 'Não estamos apenas correndo; estamos dançando com a energia atemporal desses clássicos que transcenderam décadas. Aperte os cadarços, ajuste o ritmo e prepare-se para uma experiência única. Let the music move you!',
    img: 'static/tenis/asics-novablast-3.jpg',
  },
  {
    title: 'ASICS Dynablast 3',
    link: 'https://open.spotify.com/playlist/1SPz8tLBnf5etym8A1odxp',
    review: 'https://youtu.be/ZXPoXwXJ57k',
    category: Cat.dailytrainer,
    description: 'Não estamos apenas correndo; estamos dançando com a energia atemporal desses clássicos que transcenderam décadas. Aperte os cadarços, ajuste o ritmo e prepare-se para uma experiência única. Let the music move you!',
    img: 'static/tenis/asics-novablast-3.jpg',
  },
  {
    title: 'ASICS Dynablast 3',
    link: 'https://open.spotify.com/playlist/1SPz8tLBnf5etym8A1odxp',
    review: 'https://youtu.be/ZXPoXwXJ57k',
    category: Cat.dailytrainer,
    description: 'Não estamos apenas correndo; estamos dançando com a energia atemporal desses clássicos que transcenderam décadas. Aperte os cadarços, ajuste o ritmo e prepare-se para uma experiência única. Let the music move you!',
    img: 'static/tenis/asics-novablast-3.jpg',
  },
];