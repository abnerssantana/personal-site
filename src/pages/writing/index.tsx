import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Container, Wrapper, SimpleLayout } from 'src/components/';
import { getAllArticles } from 'src/lib/getAllArticles';

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
      <Container title="Writing">
        <Wrapper>
          <form onSubmit={handleSubmit(onSubmit)} className="mb-4 flex items-center">
            <div className="relative flex-grow">
              <label htmlFor="search" className="sr-only">
                Search
              </label>
              <input
                type="text"
                id="search"
                placeholder="Search articles..."
                {...register('search')}
                className="p-2 pl-10 border border-gray-300 rounded focus:outline-none focus:border-blue-500 transition"
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <SearchIcon className="h-5 w-5 text-gray-500" />
              </div>
            </div>
            <button
              type="submit"
              className="ml-2 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 transition"
            >
              Search
            </button>
          </form>
          <SimpleLayout
            title="Product & Software Development"
            intro="You can read about my thoughts on product development and web design."
          >
            <ul
              role="list"
              className="mt-6 grid grid-cols-1 gap-x-12 gap-y-4 sm:grid-cols-1"
            >
              {filteredArticles.map((article) => (
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
