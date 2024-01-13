export enum Genres {
  rock = 'Rock',
  pop = 'Pop',
  hipHop = 'Hip Hop',
  electronic = 'Electronic',
  jazz = 'Jazz',
  classical = 'Classical',
  mpb = 'MPB',
  country = 'Country',
  gospel = 'Gospel'
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
    title: 'Blessings Run',
    spotify: 'https://open.spotify.com/playlist/1SPz8tLBnf5etym8A1odxp',
    deezer: 'https://www.deezer.com/br/playlist/12259528851',
    tidal: 'https://tidal.com/browse/playlist/d8d9993f-9fcf-4374-9ac1-7197a2d53a12',
    category: Genres.gospel,
    description: 'Deixe-se levar pela adoração e paz proporcionadas pelos louvores, permitindo que a música eleve sua mente e espírito enquanto você se entrega ao exercício físico.',
    img: 'static/music/blessings.jpeg',
  },
  {
    title: 'FGL Run',
    spotify: 'https://open.spotify.com/playlist/1SPz8tLBnf5etym8A1odxp',
    deezer: 'https://www.deezer.com/br/playlist/12259487131',
    tidal: 'https://tidal.com/browse/playlist/cb612974-c49d-4780-a8ee-8cdd80c719d6',
    category: Genres.country,
    description: 'Sinta a vibração contagiante das canções da Florida Georgia Line enquanto você se entrega ao ritmo acelerado e à atmosfera descontraída do country contemporâneo.',
    img: 'static/music/fgl.jpeg',
  },
  {
    title: 'Battle Run',
    spotify: 'https://open.spotify.com/playlist/70jlp40YfkQc5MImGKear2',
    deezer: 'https://www.deezer.com/br/playlist/12259365891',
    tidal: 'https://tidal.com/browse/playlist/2101539d-2cc6-48e7-a715-be44396bd694',
    category: Genres.rock,
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
    tidal:'https://tidal.com/browse/playlist/e2a34c80-2d0a-4cd2-9ebe-b5503b3bb5ba',
    category: Genres.electronic,
    description: 'Músicas do DJ Steve Aoki (Steven Hiroyuki Aoki) boas para motivar sua corrida.',
    img: 'static/music/aoki.webp',
  },
];