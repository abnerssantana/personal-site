export enum Genres {
  rock = 'Rock',
  pop = 'Pop',
  hipHop = 'Hip Hop',
  electronic = 'Electronic',
  jazz = 'Jazz',
  classical = 'Classical',
  mpb ='MPB',
}

export interface Album {
  title: string
  spotify: string
  deezer: string
  applemusic: string
  tidal: string
  category: Genres
  description: string
  img?: string 
}

export const albums: Album[] = [
  {
    title: 'Best Brazil',
    spotify: 'https://open.spotify.com/playlist/1brTCQ0WLDSf74BaV07duH',
    deezer: 'https://www.deezer.com/br/playlist/12252277271',
    category: Genres.mpb,
    description: 'Grandes sucessos brasileiros, músicas que se eternizaram.',
    img: 'static/music/bestbrazil.jpeg',
  },
  {
    title: 'Blinding Lights',
    spotify: 'https://www.youtube.com/watch?v=4NRXx6U8ABQ',
    category: Genres.pop,
    description: 'A popular pop song by The Weeknd, characterized by its synthwave and 80s-inspired sound.',
    img: 'static/music/blinding_lights.jpg',
  },
  {
    title: 'Sicko Mode',
    spotify: 'https://www.youtube.com/watch?v=6ONRf7h3Mdk',
    category: Genres.hipHop,
    description: 'A rap song by Travis Scott featuring Drake, known for its unconventional structure and energetic beats.',
    img: 'static/music/sicko_mode.jpg',
  },
  {
    title: 'Strobe',
    spotify: 'https://www.youtube.com/watch?v=tKi9Z-f6qX4',
    category: Genres.electronic,
    description: 'An electronic music masterpiece by Deadmau5, famous for its progressive house elements and mesmerizing melodies.',
    img: 'static/music/strobe.jpg',
  },
  {
    title: 'So What',
    spotify: 'https://www.youtube.com/watch?v=Bchx4oj7VFU',
    category: Genres.jazz,
    description: 'A classic jazz composition by Miles Davis, known for its improvisational style and bold trumpet work.',
    img: 'static/music/so_what.jpg',
  },
  {
    title: 'Moonlight Sonata',
    spotify: 'https://www.youtube.com/watch?v=4Tr0otuiQuU',
    category: Genres.classical,
    description: 'A timeless classical piece by Beethoven, renowned for its emotional depth and piano virtuosity.',
    img: 'static/music/moonlight_sonata.jpg',
  },
];