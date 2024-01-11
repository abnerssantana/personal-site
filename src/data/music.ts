export enum Genres {
  rock = 'Rock',
  pop = 'Pop',
  hipHop = 'Hip Hop',
  electronic = 'Electronic',
  jazz = 'Jazz',
  classical = 'Classical',
}

export interface Album {
  title: string
  url: string
  category: Genres
  description: string
  img?: string 
}

export const albuns: Album[] = [
  {
    title: 'Bohemian Rhapsody',
    url: 'https://www.youtube.com/watch?v=fJ9rUzIMcZQ',
    category: Genres.rock,
    description: 'A legendary rock ballad by Queen, known for its operatic sections and iconic guitar solos.',
    img: 'static/music/bohemian_rhapsody.jpg',
  },
  {
    title: 'Blinding Lights',
    url: 'https://www.youtube.com/watch?v=4NRXx6U8ABQ',
    category: Genres.pop,
    description: 'A popular pop song by The Weeknd, characterized by its synthwave and 80s-inspired sound.',
    img: 'static/music/blinding_lights.jpg',
  },
  {
    title: 'Sicko Mode',
    url: 'https://www.youtube.com/watch?v=6ONRf7h3Mdk',
    category: Genres.hipHop,
    description: 'A rap song by Travis Scott featuring Drake, known for its unconventional structure and energetic beats.',
    img: 'static/music/sicko_mode.jpg',
  },
  {
    title: 'Strobe',
    url: 'https://www.youtube.com/watch?v=tKi9Z-f6qX4',
    category: Genres.electronic,
    description: 'An electronic music masterpiece by Deadmau5, famous for its progressive house elements and mesmerizing melodies.',
    img: 'static/music/strobe.jpg',
  },
  {
    title: 'So What',
    url: 'https://www.youtube.com/watch?v=Bchx4oj7VFU',
    category: Genres.jazz,
    description: 'A classic jazz composition by Miles Davis, known for its improvisational style and bold trumpet work.',
    img: 'static/music/so_what.jpg',
  },
  {
    title: 'Moonlight Sonata',
    url: 'https://www.youtube.com/watch?v=4Tr0otuiQuU',
    category: Genres.classical,
    description: 'A timeless classical piece by Beethoven, renowned for its emotional depth and piano virtuosity.',
    img: 'static/music/moonlight_sonata.jpg',
  },
];