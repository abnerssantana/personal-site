import Link from 'next/link'
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { Container, Wrapper, SimpleLayout } from 'src/components/'
import { getAllArticles } from 'src/lib/getAllArticles'

export const Articles = ({ articles }) => {
  const { register, handleSubmit, setValue } = useForm();
  const [filteredArticles, setFilteredArticles] = useState(articles);

  const onSubmit = (data) => {
    // Lógica de filtragem dos artigos com base na busca
    const searchTerm = data.search.toLowerCase();
    const filtered = articles.filter((article) =>
      article.title.toLowerCase().includes(searchTerm) ||
      article.description.toLowerCase().includes(searchTerm)
    );
    setFilteredArticles(filtered);
  };

  useEffect(() => {
    // Reinicia os artigos filtrados quando a lista de artigos muda
    setFilteredArticles(articles);
  }, [articles]);
  
  return (
    <>
      <Container title="Writing">
        <Wrapper>
          <SimpleLayout
            title="Product & Software Development"
            intro="You can read about my thoughts on product development and web design."
          >
            <ul
              role="list"
              className="mt-6 grid grid-cols-1 gap-x-12 gap-y-4 sm:grid-cols-1"
            >
              {articles.map((article) => (
                <article
                  key={article.slug}
                  className="md:grid md:grid-cols-4 md:items-baseline"
                >
                  <div className="group relative flex flex-col items-start md:col-span-3">
                    <Link href={`/writing/${article.slug}`}>
                      <h3 className="font-serif text-sm font-medium text-gray-900 dark:text-gray-100 sm:text-base">
                        <span className="absolute inset-0" />
                        {article.title}
                      </h3>
                      <p className="mt-1 line-clamp-3 font-sans text-sm leading-6 text-gray-600 dark:text-gray-400">
                        {article.description}
                      </p>
                    </Link>
                  </div>
                  <time
                    dateTime={article.datetime}
                    className="relative z-10 order-first mb-3 mt-1 flex items-center text-sm text-gray-500 dark:text-gray-500 md:block"
                  >
                    {article.date}
                  </time>
                </article>
              ))}
            </ul>
          </SimpleLayout>
        </Wrapper>
      </Container>
    </>
  )
}

export default Articles

export async function getStaticProps() {
  return {
    props: {
      articles: (await getAllArticles()).map(({ component, ...meta }) => meta),
    },
  }
}
