interface Book {
  title: string
  author: string
  cover: string
  goodReadsUrl: string
  amazonUrl: string
  literalUrl: string
  review: string
}

export const books: Book[] = [
  {
    title: 'Ester na Casa da Pérsia: e a Vida Cristã no Exílio Secular',
    author: 'Emilio Garofalo Neto',
    cover: 'static/books/ester.jpg',
    amazonUrl: 'https://www.amazon.com.br/Ester-Na-Casa-Pérsia-Secular/dp/6557230263',
    review:
    "Ester na Casa da Pérsia, Emilio Garofalo Neto transporta os leitores para um cenário tanto distante quanto surpreendentemente próximo à nossa própria época. Ao explorar a vida de Ester e do povo de Deus na antiga Pérsia do século V a.C., o autor revela notáveis semelhanças com a experiência da vida cristã no mundo secular contemporâneo.",
  }, 
]
