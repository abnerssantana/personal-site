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
          <div>
            <h2 className="mt-8 font-sans text-lg font-medium tracking-wide text-gray-900 dark:text-gray-100 sm:text-xl">
              Últimas competições
            </h2>
            <p className="mt-2 font-sans text-sm text-gray-600 dark:text-gray-400 sm:text-base">
              Últimas corridas que participei:
            </p>
            <p>
              1ª Etapa Copa Paulista de Meio-Fundo e Fundo
                <span>5.000 metros rasos – 9º colocado – 15:42</span>
            </p>

            <p>
              35ª 10Km Tribuna FM – UNILUS (05/12/2021)
              <span>10 km – 1º colocado na categoria 32:02 – 18º Geral</span>
            </p>

            <p>
              97º CAMPEONATO PAULISTA ADULTO DE ATLETISMO (26/06/2021)
              <span>10.000 metros rasos – 11º colocado – 33:19</span>
            </p>

            <p>
              97º CAMPEONATO PAULISTA ADULTO DE ATLETISMO (25/06/2021)
              <span>5.000 metros rasos – 21º colocado – 15:53</span>
            </p>

            <p>
              9° TORNEIO ATLETISMO PAULISTA - ADULTO E SUB-20 (03/10/2020)
              <span>10.000 metros rasos - 2º colocado – 33:25</span>
            </p>

            <p>
              Unimed Run Rio Preto 2019 (29/09/2019)
              <span>10 km – 2º colocado - 35:39</span>
            </p>

            <p>
              MARATONA INTERNACIONAL DE FLORIPA (25/08/2019)
              <span>meia maratona (21km) – 3º colocado na categoria 17º colocado - 01:17:06</span>
            </p>

            <p>
              14ª Corrida Seven Rio Preto Shopping (07/07/2019)
              <span>10 km - 4º colocado - 33:48</span>
            </p>

            <p>
              MARATONA INTERNACIONAL DA CIDADE DE FLORIANÓPOLIS (23/06/2019)
              <span>meia maratona (21km) – 1º colocado na categoria - 8º colocado geral – 01:18:13</span>
            </p>

            <p>
              TRACK&FIELD RUN Iguatemi SJRP (26/05/2019)
              <span>10 km – 5º colocado – 34:56</span>
            </p>

            <p>
              EMS Sprint Triathlon 2019 – 1ª Etapa (06/04/2019)
              <span>5 km – 2º colocado – 17:07</span>
            </p>

            <p>
              13ª MEIA MARATONA INTERNACIONAL DE SÃO PAULO (17/02/2019)
              <span>meia maratona (21km) – 1º colocado na categoria e 27º Geral 01:17:28</span>
            </p>

            <p>
              1° Corrida MRV Rio Prado – Rio Preto (20/01/2019)
              <span>5 km - 2º colocado – 17:02</span>
            </p>

            <p>
              SEGURALTA HALF MARATHON SJP CITY 2019 (10/06/2018)
              <span>meia maratona (21km) – 4º colocado – 01:22:01</span>
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
