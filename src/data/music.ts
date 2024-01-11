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
    title: 'Moonlight Sonata',
    spotify: 'https://open.spotify.com/playlist/1brTCQ0WLDSf74BaV07duH',
    deezer: 'https://www.deezer.com/br/playlist/12252277271',
    category: Genres.classical,
    description: 'A timeless classical piece by Beethoven, renowned for its emotional depth and piano virtuosity.',
    img: 'static/music/moonlight_sonata.jpg',
  },
];