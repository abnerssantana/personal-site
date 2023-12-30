import Image from 'next/image'
import { Container, Wrapper, SimpleLayout } from 'src/components/'
import { LinkIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'

import { Show, shows, Genres } from 'src/data/tv'
import clsx from 'clsx'
import { useState } from 'react'

export const Card = ({ title, description, url, img, category }: show) => {
  const { hostname } = new URL(url)

  return (
    <Link href={url} target="_blank" rel="noopener noreferrer">
      <div className="group relative h-full rounded-lg border border-gray-200 border-transparent transition-colors hover:border-gray-400 dark:border-gray-800 dark:hover:border-gray-500 ">
        <div className="relative overflow-hidden rounded-lg p-6">
          <div className="flex w-full items-center justify-between">
            <div className="relative h-8 w-8 object-cover">
              {img ? (
                <Image
                  quality={100}
                  width={32}
                  height={32}
                  src={img}
                  alt={title}
                  className="rounded-full"
                />
              ) : null}
            </div>
            <span
              className={clsx(
                'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium capitalize',
                'border-gray-300 bg-gray-100 text-gray-800 dark:border-gray-800 dark:bg-gray-500/10 dark:text-gray-300'
              )}
            >
              {category}
            </span>
          </div>
          <h2 className="mt-4 text-base font-bold text-gray-900 dark:text-gray-50">
            {title}
          </h2>
          <p className="mt-1 text-sm text-gray-700 dark:text-gray-400">
            {description}
          </p>
          <p className="relative z-10 mt-6 flex text-sm font-medium text-gray-700 transition dark:text-gray-500">
            <LinkIcon className="h-5 w-5 flex-none" />
            <span className="ml-2">{hostname}</span>
          </p>
        </div>
      </div>
    </Link>
  )
}

export const shows = () => {
  const [current, setCurrent] = useState(null)

  const tabs = [
    {
      name: 'Tudo',
      category: null,
    },
    {
      name: 'Ação',
      category: Genres.acao,
    },
    {
      name: 'Drama',
      category: Genres.drama,
    },
    {
      name: 'Romance',
      category: Genres.romance,
    },
    {
      name: 'Comédia',
      category: Genres.comedia,
    },
    {
      name: 'Crime',
      category: Genres.crime,
    },
    {
      name: 'Aventura',
      category: Genres.aventura,
    },
  ]

  const filteredshows = shows.filter((Show) => {
    if (current == null) {
      return true
    }

    return Show.category == current
  })

  return (
    <>
      <Container title="Links">
        <Wrapper>
          <SimpleLayout
            title="Links"
            intro="Uma coleção de recursos escolhidos a dedo que eu acho valiosos, explore!"
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
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {filteredshows.map((show) => {
                return <Card key={show.title} {...show} />
              })}
            </div>
          </SimpleLayout>
        </Wrapper>
      </Container>
    </>
  )
}

export default Tv
