export enum Genres {
  rock = 'Rock',
  pop = 'Pop',
  rap = 'Rap',
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
    title: 'Rap Run',
    spotify: 'https://open.spotify.com/playlist/7hjxR0ivKGSXAJcYmRWHqc',
    deezer: 'https://www.deezer.com/br/playlist/12267682671',
    tidal: 'https://tidal.com/browse/playlist/b9e62a3a-a363-47aa-8e6b-c229734e3d02',
    category: Genres.rap,
    description: '"Rapmobile, let's go!" Deixe o poder do rap guiar sua corrida, enquanto as rimas afiadas e os beats envolventes mantêm você no ritmo.',
    img: 'static/music/raprun.jpg',
  },
  {
    title: 'Time Machine Run',
    spotify: 'https://open.spotify.com/playlist/1SPz8tLBnf5etym8A1odxp',
    deezer: 'https://www.deezer.com/br/playlist/12261762151',
    tidal: 'https://tidal.com/browse/playlist/e6ec0ce1-5bea-477e-bb9b-af0328006b9e',
    category: Genres.pop,
    description: 'Não estamos apenas correndo; estamos dançando com a energia atemporal desses clássicos que transcenderam décadas. Aperte os cadarços, ajuste o ritmo e prepare-se para uma experiência única. Let the music move you!',
    img: 'static/music/timemachine.jpg',
  },
  {
    title: 'Blessings Run',
    spotify: 'https://open.spotify.com/playlist/1SPz8tLBnf5etym8A1odxp',
    deezer: 'https://www.deezer.com/br/playlist/12259528851',
    tidal: 'https://tidal.com/browse/playlist/d8d9993f-9fcf-4374-9ac1-7197a2d53a12',
    category: Genres.gospel,
    description: 'Deixe-se levar pela adoração e paz proporcionadas pelos louvores, permitindo que a música eleve sua mente e espírito enquanto você se entrega ao exercício físico.',
    img: 'static/music/blessings.jpg',
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
    title: 'War Run',
    spotify: 'https://open.spotify.com/playlist/19EUd93C6M1DaN94DWU4N9',
    deezer: 'https://www.deezer.com/br/playlist/12259601731',
    tidal: 'https://tidal.com/browse/playlist/2101539d-2cc6-48e7-a715-be44396bd694',
    category: Genres.rock,
    description: 'Prepare-se para sentir uma mistura única de adrenalina e emoção, inspirada pelos eventos históricos retratados nas músicas de Sabaton. Suas corridas a um nível totalmente novo, recriando a emoção e a determinação dos campos de batalha.',
    img: 'static/music/sabaton.jpeg',
  },
  {
    title: 'Best Brazil',
    spotify: 'https://open.spotify.com/playlist/5dgdjNXgEmbBkLLJcmlzim',
    deezer: 'https://www.deezer.com/br/playlist/12252277271',
    tidal: 'https://tidal.com/browse/playlist/456851db-85a4-46bb-b45d-8929e11d1bee',
    category: Genres.mpb,
    description: 'Grandes sucessos brasileiros, músicas que se eternizaram durante os anos e marcaram várias gerações, esteja preparado para um momento aleatório.',
    img: 'static/music/bestbrazil.jpeg',
  },
  {
    title: 'Aoki Run',
    spotify: 'https://open.spotify.com/playlist/4mOzXpZt2qg3UnmFTLukB5',
    deezer: 'https://www.deezer.com/br/playlist/12252604811',
    tidal: 'https://tidal.com/browse/playlist/e2a34c80-2d0a-4cd2-9ebe-b5503b3bb5ba',
    category: Genres.electronic,
    description: 'Músicas do DJ Steve Aoki (Steven Hiroyuki Aoki) boas para motivar sua corrida.',
    img: 'static/music/aoki.webp',
  },
];