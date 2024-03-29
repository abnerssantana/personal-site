import { Container, Wrapper, TextLink } from 'src/components/'
import clsx from 'clsx'

export const About = () => {
  return (
    <>
      <Container title="Sobre">
        <Wrapper>
          <div>
            <h1
              className={clsx(
                'font-sans text-xl font-medium tracking-wide text-gray-900 dark:text-gray-100 sm:text-2xl'
              )}
            >
              E aí, Abner Santana
            </h1>
          </div>
          <div className="mt-2 space-y-4 text-justify font-sans text-sm text-gray-600 dark:text-gray-400 sm:text-base">
            <p>Desde os 13 anos, venho imerso no universo da computação, trilhando diferentes caminhos que moldaram minha trajetória. Iniciei minha jornada em lojas de informática, onde adquiri conhecimentos sólidos em manutenção e instalações de rede. Com o tempo, direcionei meu foco para a área que verdadeiramente me apaixonou: a infraestrutura e segurança de TI.</p>
            <p>Minha carreira é um constante aprendizado e evolução, enfrentando diariamente desafios que impulsionam minha paixão pela profissão. A capacidade de solucionar problemas complexos e aprimorar a segurança dos sistemas são aspectos que me motivam intensamente.</p>
            <p>Paralelamente, a corrida entrou em minha vida como um catalisador de transformações. Engajado em buscar performance, participei de grandes competições e me tornei um atleta federado. Essa jornada esportiva não é apenas física; é também uma fonte constante de aprendizado sobre treinamento e fisiologia.</p>
            <p>Minha paixão por estudar métodos de treinamento e compreender a fisiologia do corpo humano se reflete em meu compromisso de aplicar esses conhecimentos em meu próprio treinamento. Além disso, compartilho essas experiências e aprendizados através do meu canal no YouTube, buscando inspirar e contribuir.</p>
            <p>Unindo minha expertise em TI com minha dedicação ao esporte, busco constantemente integrar as lições aprendidas em ambos os campos. Sou um profissional resiliente, apaixonado por desafios e comprometido em alcançar o melhor desempenho, tanto na carreira quanto nas pistas de corrida.</p>
            <p>Fora trabalho e corrida, aqui está outras coisas que eu gosto de fazer:</p>
            <ul className="mt-4 list-inside list-disc pl-4 text-gray-600 dark:text-gray-400 md:columns-2">
              <li>Viajar de moto</li>
              <li>Assitir séries e animes</li>
              <li>Fotografia</li>
              <li>Música</li>
              <li>Cozinhar</li>
              <li>Aprender</li>
              <li>Mêcanica</li>
              <li>Ler</li>
            </ul>
            <p>
              Eu me aposentei das redes sociais tradicionais. No entanto, se você quiser entrar em contato,
              pode fazê-lo via{' '}
              <TextLink
                href="https://www.youtube.com/@abnerssantana"
                target="_blank"
                rel="noopener noreferrer"
              >
                YouTube
              </TextLink>
              {' '}
              <TextLink
                href="https://www.strava.com/athletes/abnerss"
                target="_blank"
                rel="noopener noreferrer"
              >
                Strava
              </TextLink>{' '}
              ou{' '}
              <TextLink
                href="mailto:abnerss@outlook.vom"
                target="_blank"
                rel="noopener noreferrer"
              >
                E-mail
              </TextLink>
              , como nos velhos tempos.
            </p>
          </div>
          <h2 className="mt-8 mb-8 font-sans text-xl font-medium tracking-wide text-gray-900 dark:text-gray-100 sm:text-2xl">
            Últimas competições
          </h2>
          <div className="mt-2 text-left uppercase space-y-4 text-lg font-medium text-gray-900 dark:text-gray-50 sm:text-lg">
            <p>
              Virtual TCS New York City Marathon Challenge
              <p className="text-sm font-medium text-gray-500 dark:text-gray-500">42 km - Desafio – 2:49:42 - 04/11/2023</p>
            </p>
            <p>
              38ª MARATONA INTERNACIONAL DE PORTO ALEGRE
              <p className="text-sm font-medium text-gray-500 dark:text-gray-500">42 km – 6º colocado na categoria – 2:34:08 - 18º Geral - 04/06/2023</p>
            </p>
            <p>
              Meia Maratona São Paulo 2023
              <p className="text-sm font-medium text-gray-500 dark:text-gray-500">21 km – 1º Geral "amadores" – 2:34:08 - 05/02/2023</p>
            </p>
            <p>
              1ª Etapa Copa Paulista de Meio-Fundo e Fundo
              <p className="text-sm font-medium text-gray-500 dark:text-gray-500">5.000 metros – 9º colocado – 15:42 - 19/03/2022</p>
            </p>

            <p>
              35ª 10Km Tribuna FM – UNILUS
              <p className="text-sm font-medium text-gray-500 dark:text-gray-500">10 km – 1º colocado na categoria 32:02 – 18º Geral - 05/12/2021</p>
            </p>

            <p>
              97º CAMPEONATO PAULISTA ADULTO DE ATLETISMO
              <p className="text-sm font-medium text-gray-500 dark:text-gray-500">10.000 metros – 11º colocado - 33:19 - 26/06/2021</p>
            </p>

            <p>
              97º CAMPEONATO PAULISTA ADULTO DE ATLETISMO
              <p className="text-sm font-medium text-gray-500 dark:text-gray-500">5.000 metros – 21º colocado – 15:53 - 25/06/2021</p>
            </p>

            <p>
              9° TORNEIO ATLETISMO PAULISTA - ADULTO E SUB-20
              <p className="text-sm font-medium text-gray-500 dark:text-gray-500">10.000 metros - 2º colocado – 33:25 - 03/10/2020</p>
            </p>

            <p>
              Unimed Run Rio Preto 2019
              <p className="text-sm font-medium text-gray-500 dark:text-gray-500">10 km – 2º colocado - 35:39 - 29/09/2019</p>
            </p>

            <p>
              MARATONA INTERNACIONAL DE FLORIPA
              <p className="text-sm font-medium text-gray-500 dark:text-gray-500">21 km – 3º colocado na categoria - 17º Geral - 01:17:06 - 25/08/2019</p>
            </p>

            <p>
              14ª Corrida Seven Rio Preto Shopping
              <p className="text-sm font-medium text-gray-500 dark:text-gray-500">10 km - 4º colocado - 33:48 - 07/07/2019</p>
            </p>

            <p>
              MARATONA INTERNACIONAL DA CIDADE DE FLORIANÓPOLIS
              <p className="text-sm font-medium text-gray-500 dark:text-gray-500">21 km – 1º colocado na categoria - 8º geral – 01:18:13 - 23/06/2019</p>
            </p>

            <p>
              TRACK&FIELD RUN Iguatemi SJRP
              <p className="text-sm font-medium text-gray-500 dark:text-gray-500">10 km – 5º colocado – 34:56 - 26/05/2019</p>
            </p>

            <p>
              EMS Sprint Triathlon 2019 – 1ª Etapa
              <p className="text-sm font-medium text-gray-500 dark:text-gray-500">5 km – 2º colocado – 17:07 - 06/04/2019</p>
            </p>

            <p>
              13ª MEIA MARATONA INTERNACIONAL DE SÃO PAULO
              <p className="text-sm font-medium text-gray-500 dark:text-gray-500">21 km – 1º colocado na categoria e 27º Geral 01:17:28 - 17/02/2019</p>
            </p>

            <p>
              1° Corrida MRV Rio Prado – Rio Preto
              <p className="text-sm font-medium text-gray-500 dark:text-gray-500">5 km - 2º colocado – 17:02 - 20/01/2019</p>
            </p>

            <p>
              SEGURALTA HALF MARATHON SJP CITY 2018
              <p className="text-sm font-medium text-gray-500 dark:text-gray-500">21km – 4º colocado – 01:22:01 - 10/06/2018</p>
            </p>
          </div>
          <div>
            <h2 className="mt-8 font-sans text-lg font-medium tracking-wide text-gray-900 dark:text-gray-100 sm:text-xl">
              Sobre esse site
            </h2>
            <p className="mt-2 font-sans text-sm text-gray-600 dark:text-gray-400 sm:text-base">
              Caso você esteja se perguntando, este site é:
            </p>
            <ul className="mt-4 list-inside list-disc pl-4 font-sans text-sm text-gray-600 dark:text-gray-400 sm:text-base">
              <li>
                Cuidadosamente codificado à mão com{' '}
                <TextLink
                  href="https://code.visualstudio.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visual Studio Code
                </TextLink>
              </li>
              <li>
                Construído com{' '}
                <TextLink
                  href="https://nextjs.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Next.js
                </TextLink>
              </li>
              <li>
                Estilizado com{' '}
                <TextLink
                  href="https://tailwindcss.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Tailwind CSS
                </TextLink>
              </li>
              <li>
                Iconificado com{' '}
                <TextLink
                  href="https://heroicons.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Heroicons
                </TextLink>
              </li>
              <li>
                Hospedado em{' '}
                <TextLink
                  href="https://vercel.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Vercel
                </TextLink>
              </li>
            </ul>
          </div>
        </Wrapper>
      </Container>
    </>
  )
}

export default About
