import clsx from 'clsx'
import Link from 'next/link'
import { FaDiscord } from 'react-icons/fa'
import { FaStrava } from 'react-icons/fa'
import { Container, Wrapper } from 'src/components/'

export const Home = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <div className="mx-auto pb-24 pt-24 md:pb-36 md:pt-36">
            <div className="text-center">
              <h2 className="text-2xl font-normal text-gray-600 dark:text-gray-400 md:text-lg">
                TECH - MARATHONER - YOUTUBER
              </h2>
              <h1
                className={clsx(
                  'font-sans text-6xl uppercase font-black leading-tight text-gray-900 dark:text-gray-100 md:leading-snug'
                )}
              >
                VIVENDO A CORRIDA
              </h1>
              <p className="text-lg leading-8 text-gray-600 dark:text-gray-400">
                faça menos, faça melhor, faça uma única vez e faça no lugar certo
              </p>
              <div className="flex justify-center items-center text-gray-600 pt-24 md:pt-36 dark:text-gray-400 ">
                <a href="https://www.strava.com/clubs/vivendoacorrida" target="_blank" rel="noopener noreferrer" className="text-lg flex items-center mr-8">
                  <FaStrava className="h-34 w-34 text-left" />
                  <span className="text-lg pl-4">Strava</span>
                </a>
                <a href="https://discord.gg/pGcDZjhRry" target="_blank" rel="noopener noreferrer" className="text-lg flex items-center">
                  <FaDiscord className="h-34 w-34 text-left" />
                  <span className="text-lg pl-4">Discord</span>
                </a>
              </div>
              <h2 className="text-2xl font-bold text-gray-600 dark:text-gray-400 md:text-lg pt-24 md:pt-36">
                Apoie minha jornada na corrida
              </h2>
              <div className="mt-8 flex justify-center gap-x-4">
                <Link
                  href="https://www.youtube.com/channel/UCKl5xev9VFkTV0YTHO74DIQ/join"
                  target="_blank"
                  className="inline-flex items-center rounded-lg border border-transparent px-4 py-1.5 text-sm font-semibold text-gray-700 transition-colors hover:border-gray-400 dark:text-gray-100 "
                >
                  Seja membro
                  <span
                    className="ml-1.5 text-gray-500 dark:text-gray-100"
                    aria-hidden="true"
                  >
                    &rarr;
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </Wrapper>
      </Container>
    </>
  )
}

export default Home
