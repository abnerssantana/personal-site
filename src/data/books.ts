interface Book {
  title: string
  author: string
  cover: string
  amazonUrl: string
  review: string
}

export const books: Book[] = [
  {
    title: 'Fórmula de Corrida de Daniels',
    author: 'Jack Daniels',
    cover: 'static/books/JackDaniels.jpg',
    amazonUrl: 'https://www.amazon.com.br/Fórmula-Corrida-Daniels-Jack/dp/8565852032',
    review:
    "Me sinto como um discípulo de Jack Daniels, de tanto que prego sobre seus ensinos, para mim o melhor e mais completo livro sobre treinamento de corrida, para corredores dos 800m até a maratona.Me sinto como um discípulo de Jack Daniels, de tanto que prego sobre seus ensinos, para mim o melhor e mais completo livro sobre treinamento de corrida, para corredores dos 800m até a maratona.",
  }, 
  {
    title: 'Ester na Casa da Pérsia: e a Vida Cristã no Exílio Secular',
    author: 'Emilio Garofalo Neto',
    cover: 'static/books/ester.jpg',
    amazonUrl: 'https://www.amazon.com.br/Ester-Na-Casa-Pérsia-Secular/dp/6557230263',
    review:
    "Ester na Casa da Pérsia, Emilio Garofalo Neto transporta os leitores para um cenário tanto distante quanto surpreendentemente próximo à nossa própria época. Ao explorar a vida de Ester e do povo de Deus na antiga Pérsia do século V a.C., o autor revela notáveis semelhanças com a experiência da vida cristã no mundo secular contemporâneo.",
  }, 
]
