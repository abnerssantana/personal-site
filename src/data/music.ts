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
  tidal: string
  category: Genres
  description: string
  img?: string 
}

export const albums: Album[] = [
  {
    title: 'Battle Run',
    spotify: 'https://open.spotify.com/playlist/70jlp40YfkQc5MImGKear2',
    deezer: 'https://www.deezer.com/br/playlist/12259365891',
    tidal: 'https://tidal.com/browse/playlist/2101539d-2cc6-48e7-a715-be44396bd694',
    category: Genres.mpb,
    description: 'Prepare-se para sentir uma mistura de adrenalina e determinação enquanto se entrega ao poder do metal da Battle Beast.',
    img: 'static/music/battlebeast.jpeg',
  },
  {
    title: 'Best Brazil',
    spotify: 'https://open.spotify.com/playlist/1brTCQ0WLDSf74BaV07duH',
    deezer: 'https://www.deezer.com/br/playlist/12252277271',
    tidal:'',
    category: Genres.mpb,
    description: 'Grandes sucessos brasileiros, músicas que se eternizaram.',
    img: 'static/music/bestbrazil.jpeg',
  },
  {
    title: 'Aoki Run',
    spotify: 'https://open.spotify.com/playlist/4mOzXpZt2qg3UnmFTLukB5',
    deezer: 'https://www.deezer.com/br/playlist/12252604811',
    tidal:'',
    category: Genres.electronic,
    description: 'Músicas do DJ Steve Aoki (Steven Hiroyuki Aoki) boas para motivar sua corrida.',
    img: 'static/music/aoki.webp',
  },
];