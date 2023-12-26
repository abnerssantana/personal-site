import Image from 'next/image'
import { Container, Wrapper, SimpleLayout, Button } from 'src/components/'
import { books } from 'src/data/books'

export const Bookshelf = () => {
  return (
    <>
      <Container title="Livros">
        <Wrapper>
          <SimpleLayout
            title="Livros"
            intro="Aqui estão alguns livros que tive o prazer de ler e que recomendo.
            Eles abrangem uma variedade de temas, desde corrida, psicologia e treinamento, 
            até desenvolvimento pessoal, literatura cristã, histórias inspiradoras e qualquer 
            outro que tenha capturado minha atenção. Espero que você encontre algo interessante nesta lista diversificada!"
          >
            <ul
              role="list"
              className="mt-8 grid grid-cols-1 divide-y divide-gray-200 dark:divide-gray-800"
            >
              {books.map((book) => (
                <li key={book.title} className="flex py-8">
                  <div className="space-y-4 sm:grid sm:grid-cols-8 sm:items-start sm:gap-4 sm:space-y-0">
                    <div className="aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4 w-32 sm:col-span-2 sm:w-40">
                      <Image
                        quality={100}
                        width={160}
                        height={140}
                        className="object-cover"
                        src={book.cover}
                        alt=""
                      />
                    </div>
                    <div className="sm:col-span-6 sm:ml-2">
                      <div className="space-y-3">
                        <div className="space-y-1">
                          <h3 className="font-serif text-base font-medium text-gray-900 dark:text-gray-50 sm:text-lg">
                            {book.title}
                          </h3>
                          <p className="text-sm font-medium text-gray-500 dark:text-gray-500">
                            by {book.author}
                          </p>
                        </div>
                        <p className="dark:text-gray-4000 text-justify font-sans text-sm text-gray-600 dark:text-gray-400">
                          {book.review}
                        </p>
                        <div className="space-x-3">
                          <Button
                            href={book.literalUrl}
                            variant="outline"
                            target="_blank"
                          >
                            Literal
                          </Button>
                          <Button
                            href={book.goodReadsUrl}
                            variant="outline"
                            target="_blank"
                          >
                            Goodreads
                          </Button>
                          <Button
                            href={book.amazonUrl}
                            variant="outline"
                            target="_blank"
                          >
                            Amazon
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </SimpleLayout>
        </Wrapper>
      </Container>
    </>
  )
}

export default Bookshelf
