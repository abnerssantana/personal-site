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
  kms: string
  description: string
  img?: string
}

export const ten: Shoes[] = [
  {
    title: 'ASICS Novablast 3',
    link: 'https://open.spotify.com/playlist/1SPz8tLBnf5etym8A1odxp',
    review: 'https://youtu.be/ZXPoXwXJ57k',
    category: Cat.dailytrainer,
    kms: '1.177',
    description: 'O melhor tênis sem placa, boa resposta, amortecimento e conforto acima da média, sem ser pesado demais, um perfeito companheiro para seus treinos diários.',
    img: 'static/tenis/asics-novablast-3.jpg',
  },
  {
    title: 'ASICS Metaspeed SKY+ (2)',
    link: 'https://open.spotify.com/playlist/1SPz8tLBnf5etym8A1odxp',
    review: 'https://youtu.be/ZXPoXwXJ57k',
    category: Cat.performance,
    kms: '1.212',
    description: 'Meu segundo par, do tênis de placa de carbono da ASICS, na minha percepção o ponto forte desse tênis é a estabelidade e durabilidade. Além da resposta que desejamos em um tênis com placa, e o aumento da passada que esse modelo entrega é incrível.',
    img: 'static/tenis/asics-metaspeed-sky.jpg',
  },
  {
    title: 'ASICS Dynablast 3',
    link: 'https://open.spotify.com/playlist/1SPz8tLBnf5etym8A1odxp',
    review: 'https://youtu.be/ZXPoXwXJ57k',
    category: Cat.dailytrainer,
    kms: '733',
    description: 'O ASICS Dynablast 3 é um tênis versátil que pode ser usado para uma variedade de treinos e uso diário. É uma ótima opção para corredores que procuram um tênis confortável, responsivo e com um amortecimento mais firme.',
    img: 'static/tenis/asics-dynablast-3.jpg',
  },
];