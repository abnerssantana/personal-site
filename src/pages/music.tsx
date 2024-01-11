import Image from 'next/image'
import { Container, Wrapper, SimpleLayout } from 'src/components/'
import { LinkIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'

import { Album, albums, Genres } from 'src/data/music'
import clsx from 'clsx'
import { useState } from 'react'

export const SongCard = ({ title, description, url, img, category }: Album) => {
  const { hostname } = new URL(url)

  return (
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-6xl">
  {songs.map(({ title, url, category, description, img }) => (
    <div key={title} className="flex flex-col items-center bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md">
      <div className="space-y-4 sm:grid sm:grid-cols-8 sm:items-start sm:gap-4 sm:space-y-0">
        <div className="aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4 w-32 sm:col-span-2 sm:w-40">
          {img ? (
            <Image
              quality={100}
              width={200}
              height={200}
              src={img}
              alt={title}
              style={{
                aspectRatio: "200/200",
                objectFit: "cover",
              }}
              className="object-cover w-full h-60 rounded-lg"
            />
          ) : null}
        </div>
        <div className="sm:col-span-6 sm:ml-2">
          <div className="space-y-3">
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-gray-900 dark:text-gray-50 sm:text-xl mt-4">
                {title}
              </h3>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-500">
                Artista: {category}
              </p>
            </div>
            <p className="dark:text-gray-4000 text-justify font-sans text-sm text-gray-600 dark:text-gray-400">
              {description}
            </p>
            <div className="space-x-3">
              <p className="relative z-10 mt-6 flex text-sm font-medium text-gray-700 transition dark:text-gray-500">
                <LinkIcon className="h-5 w-5 flex-none" />
                <span className="ml-2">{url}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>
  )
}

export const Albums = () => {
  const [current, setCurrent] = useState(null)

  const tabs = [
    {
      name: 'Tudo',
      category: null,
    },
    {
      name: 'Rock',
      category: Genres.rock,
    },
    {
      name: 'Pop',
      category: Genres.pop,
    },
    {
      name: 'Hip Hop',
      category: Genres.hipHop,
    }
  ]

  const filteredAlbums = albums.filter((Album) => {
    if (current == null) {
      return true
    }

    return Album.category == current
  })

  return (
    <>
      <Container title="Minha coleção de Álbuns">
        <Wrapper>
          <SimpleLayout
            title="Álbuns"
            intro="Álbuns que eu ouvi e recomendo, alguns reviews também."
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
            <div className="mt-8 grid grid-cols-1 gap-6">
              {filteredAlbums.map((album) => {
                return <SongCard key={album.title} {...album} />
              })}
            </div>
          </SimpleLayout>
        </Wrapper>
      </Container>
    </>
  )
}

export default Albums
