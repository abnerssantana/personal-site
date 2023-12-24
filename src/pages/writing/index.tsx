import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Container, Wrapper, SimpleLayout } from 'src/components/';
import { getAllArticles } from 'src/lib/getAllArticles';

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
          <form onSubmit={handleSubmit(onSubmit)} className="mb-4 flex items-center">
            <input
              type="text"
              id="search"
              placeholder="Search articles..."
              {...register('search')}
              className="p-2 border border-gray-300 rounded-l focus:outline-none focus:ring focus:border-blue-300 flex-grow"
            />
            <button
              type="submit"
              className="p-2 bg-blue-500 text-white rounded-r hover:bg-blue-600 transition"
            >
              Buscar
            </button>
          </form>
          <SimpleLayout
            title="Product & Software Development"
            intro="You can read about my thoughts on product development and web design."
          >
            {/* ... restante do código ... */}
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
