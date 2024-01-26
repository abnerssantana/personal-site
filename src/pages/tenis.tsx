import Image from 'next/image';
import { Container, Wrapper, SimpleLayout, Button } from 'src/components/';
import Link from 'next/link';
import { Shoes, ten, Cat } from 'src/data/tenis';
import clsx from 'clsx';
import { useState } from 'react';

export const TenisCard = ({ title, description, link, review, img, category, kms }: Shoes) => {

  return (

    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            <div key={title} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                {img ? (
                  <Image
                    quality={100}
                    width={200}
                    height={200}
                    src={img}
                    alt={title}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                ) : null}
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <span aria-hidden="true" className="absolute inset-0" />
                    {title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">Categoria: {category}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">Quilômetros: {kms} km</p>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export const Tenis = () => {
  const [current, setCurrent] = useState(null);

  const tabs = [
    {
      name: 'Tudo',
      category: null,
    },
    {
      name: 'Amortecimento',
      category: Cat.amortecimento,
    },
    {
      name: 'Daily trainer',
      category: Cat.dailytrainer,
    },
    {
      name: 'Perfomance',
      category: Cat.performance,
    },
  ];

  const filteredShoess = ten.filter((Shoes) => {
    if (current == null) {
      return true;
    }

    return Shoes.category == current;
  });

  return (
    <>
      <Container title="Tênis de corrida">
        <Wrapper>
          <SimpleLayout
            title="Tênis"
            intro="Os tênis que utilizei para correr desde da primeira corrida."
          >
            <div className="flex w-full items-center justify-center">
              <div className="sm:hidden">
                <label htmlFor="tabs" className="sr-only">
                  Select a tab
                </label>
                <select
                  id="tabs"
                  name="tabs"
                  className="block w-full rounded-md border-gray-300 focus:border-gray-500 focus:ring-gray-500"
                  defaultValue={null}
                  onChange={(e) => setCurrent(e.target.value)}
                >
                  {tabs.map((tab) => (
                    <option key={tab.name} value={tab.category}>
                      {tab.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="hidden sm:block">
                <nav className="flex space-x-4" aria-label="Tabs">
                  {tabs.map((tab) => (
                    <div
                      key={tab.name}
                      onClick={() => setCurrent(tab.category)}
                      className={clsx(
                        current == tab.category
                          ? 'border border-gray-300 bg-gray-100 text-gray-800 dark:border-gray-800 dark:bg-gray-500/10 dark:text-gray-200'
                          : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300',
                        'cursor-pointer rounded-md px-4 py-1.5 text-sm font-medium'
                      )}
                    >
                      {tab.name}
                    </div>
                  ))}
                </nav>
              </div>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-6 w-full max-w-6xl">
              {filteredShoess.map((ten) => {
                return <TenisCard key={ten.title} {...ten} />;
              })}
            </div>
          </SimpleLayout>
        </Wrapper>
      </Container>
    </>
  );
};

export default Tenis;
