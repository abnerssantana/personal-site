interface Book {
  title: string
  author: string
  cover: string
  amazonUrl: string
  review: string
}

export const books: Book[] = [
  {
    title: 'Ayrton. O Heroi Revelado',
    author: 'Ernesto Rodrigues',
    cover: 'static/books/ayrton-heroi-revelado.jpeg',
    amazonUrl: 'https://www.amazon.com.br/Ayrton-Heroi-Revelado-Ernesto-Rodrigues/dp/8573026022?&_encoding=UTF8&tag=abnerssantana-20&linkCode=ur2&linkId=bd0a112d7725862cd582ecd2840d15af&camp=1789&creative=9325',
    review:
    "Este é um ótimo livro sobre a história do Ayrton Senna, aborda desde sua infância até seu status de herói nacional, explorando seus feitos nas pistas e sua influência fora delas.",
  }, 
  {
    title: 'Fórmula de Corrida de Daniels',
    author: 'Jack Daniels',
    cover: 'static/books/JackDaniels.jpg',
    amazonUrl: 'https://www.amazon.com.br/F%C3%B3rmula-Corrida-Daniels-Jack/dp/8565852032?&_encoding=UTF8&tag=abnerssantana-20&linkCode=ur2&linkId=ae40b03e1e54c35c4675d6c0bedf77a7&camp=1789&creative=9325',
    review:
    "Me sinto como um discípulo de Jack Daniels, de tanto que prego sobre seus ensinos, para mim o melhor e mais completo livro sobre treinamento de corrida, para corredores dos 800m até a maratona.",
  }, 
  {
    title: 'Ester na Casa da Pérsia: e a Vida Cristã no Exílio Secular',
    author: 'Emilio Garofalo Neto',
    cover: 'static/books/ester.jpg',
    amazonUrl: 'https://www.amazon.com.br/Ester-Na-Casa-P%C3%A9rsia-Secular/dp/6557230263?&_encoding=UTF8&tag=abnerssantana-20&linkCode=ur2&linkId=77678702eea1f433dbbd23abea8906b3&camp=1789&creative=9325',
    review:
    "Ester na Casa da Pérsia, Emilio Garofalo Neto transporta os leitores para um cenário tanto distante quanto surpreendentemente próximo à nossa própria época. Ao explorar a vida de Ester e do povo de Deus na antiga Pérsia do século V a.C., o autor revela notáveis semelhanças com a experiência da vida cristã no mundo secular contemporâneo.",
  },
  {
    title: 'Advanced Marathoning',
    author: 'Pete Pfitzinger, Scott Douglas',
    cover: 'static/books/marathoning.jpg',
    amazonUrl: 'https://www.amazon.com.br/Advanced-Marathoning-English-Pete-Pfitzinger-ebook/dp/B07PPRH66H/ref=sr_1_1?__mk_pt_BR=ÅMÅŽÕÑ&crid=31IY80APV2DCK&keywords=advanced+marathon&qid=1704391776&s=books&sprefix=advanced+marathon%252Cstripbooks%252C222&sr=1-1736074600&_encoding=UTF8&tag=abnerssantana-20&linkCode=ur2&linkId=af2a4317e79d1cb006afa1db7a7c2f0b&camp=1789&creative=9325',
    review:
    "Ótima opcão para quem está treinando para sua primeira maratona ou quer melhorar seu tempo, treinando com base no tempo alvo e volume correto para cada objetivo, um treinamento mais prazeroso e seguro.",
  }
]
