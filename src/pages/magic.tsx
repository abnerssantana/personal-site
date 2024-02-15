import { Container, Wrapper, TextLink } from 'src/components/'
import clsx from 'clsx'
import Link from 'next/link'
import plans from 'src/plans/index.js';
import { activityDefaults } from 'src/lib/constants.js';

export const Magic = () => {
  return (
    <>
      <Container title="Sobre">
        <Wrapper>
          <div>
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Magic Training</h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Planos de treinamento gratuitos para corrida, triatlo e fortalecimento, inspirados em renomados livros e elaborados por experientes treinadores.
              </p>
              <div className="sm:mb-8 sm:flex sm:justify-center">
                <div className="relative rounded-full px-3 py-1 mt-8 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                  Apoie minha jornada na corrida. <a href="https://www.youtube.com/channel/UCKl5xev9VFkTV0YTHO74DIQ/join" className="font-semibold text-indigo-600"><span className="absolute inset-0" aria-hidden="true"></span>Seja membro<span aria-hidden="true">&rarr;</span></a>
                </div>
              </div>
              <div className="mt-10 items-center justify-center gap-x-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8">
                  {plans.map(({ name, coach, path, duration, activities }, index) => {
                    const { planColor } = activityDefaults[activities[0]];
                    return (
                      <Link
                        className={`flex flex-col items-center p-4 rounded-lg border border-gray-200 transition-colors hover:border-gray-400 ${planColor}-border-left`}
                        key={'planName' + index}
                        to={path}
                      >
                        <div className="text-xl font-bold mb-2">{name}</div>
                        <div className="text-base font-bold mb-2 text-gray-600">{coach}</div>
                        <div className="flex flex-wrap items-center">
                          {activities.map((activity, activityIndex) => {
                            const { planColor: activityColor } = activityDefaults[activity];
                            return (
                              <div
                                className={`mr-2 mb-2 p-2 uppercase rounded-md home-plan-activity ${activityColor}-bg`}
                                key={`pathActivity${activityIndex}`}
                              >
                                {activity}
                              </div>
                            );
                          })}
                        </div>
                        <div className="text-gray-600 mt-2">
                          Duração - {duration}
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </Wrapper>
      </Container>
    </>
  )
}

export default Magic
