import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Container, Wrapper, SimpleLayout } from 'src/components/';
import { getAllArticles } from 'src/lib/getAllArticles';
import { format } from 'date-fns';

export const Articles = ({ articles }) => {
  const { register, handleSubmit, setValue } = useForm();
  const [filteredArticles, setFilteredArticles] = useState(articles);

  const onSubmit = (data) => {
    const searchTerm = data.search.toLowerCase();
    const filtered = articles.filter((article) =>
      article.title.toLowerCase().includes(searchTerm) ||
      article.description.toLowerCase().includes(searchTerm)
    );
    setFilteredArticles(filtered);
  };

  useEffect(() => {
    setFilteredArticles(articles);
  }, [articles]);

  return (
    <>
      <Container title="Blog">
        <Wrapper>

          <SimpleLayout
            title="Meus pensamentos"
            intro="Corrida, tecnologia, reflexões e um pouco de choro/drama as vezes..."
          >
            <form onSubmit={handleSubmit(onSubmit)} className="mb-4 flex items-center">
              <input
                type="text"
                id="search"
                placeholder="Pesquisar artigos..."
                {...register('search')}
                className="w-11/12 text-sm leading-6 px-3 py-1.5 font-medium text-gray-700 
                rounded-lg transition-colors delay-150 hover:text-gray-900 hover:delay-[0ms] 
                dark:text-gray-400 dark:hover:text-gray-100 border-gray-500 dark:border-gray-500 
                focus:outline-none focus:border-gray-500 focus:ring focus:ring-gray-200 mr-2"
              />
              <button
                type="submit"
                className="rounded-lg border leading-6 px-3 py-1.5 text-sm font-medium
                text-gray-700 transition-colors delay-150 hover:text-gray-900 hover:delay-[0ms]
                dark:text-gray-400 dark:hover:text-gray-100 border-gray-00 dark:border-gray-500 hover:bg-slate-50 
                dark:hover:bg-gray-800"
              >
                Buscar
              </button>
            </form>
            <ul
              role="list"
              className="mt-6 grid grid-cols-1 gap-x-12 gap-y-4 sm:grid-cols-1"
            >
              {filteredArticles.map((article) => (
                <article
                  key={article.slug}
                  className="md:grid md:grid-cols-4 md:items-baseline"
                >
                  <div className="group relative flex flex-col items-start md:col-span-7">
                    <Link href={`/blog/${article.slug}`}>
                      <h3 className="text-sm font-sans font-bold text-gray-900 dark:text-gray-100 sm:text-lg hover:text-neutral-400">
                        <span className="absolute inset-0" />
                        {article.title}
                      </h3>
                      <p className="mt-1 line-clamp-3 font-sans text-sm leading-6 text-gray-600 dark:text-gray-400">
                        {article.description}
                      </p>
                    </Link>
                  </div>
                  <time
                    dateTime={article.date}
                    className="relative z-10 mb-3 mt-1 flex items-center text-sm text-gray-500 dark:text-gray-500 md:block"
                  >
                    {format(new Date(article.date), 'dd/MM/yyyy')}
                  </time>
                  <hr />
                </article>
              ))}
            </ul>
          </SimpleLayout>
        </Wrapper>
      </Container>
    </>
  );
};

export default Articles;

export async function getStaticProps() {
  return {
    props: {
      articles: (await getAllArticles()).map(({ component, ...meta }) => meta),
    },
  };
}
