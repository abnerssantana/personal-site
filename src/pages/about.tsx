import { Container, Wrapper, TextLink } from 'src/components/'
import clsx from 'clsx'

export const About = () => {
  return (
    <>
      <Container title="About me">
        <Wrapper>
          <div>
            <h1
              className={clsx(
                'font-serif text-xl font-medium tracking-wide text-gray-900 dark:text-gray-100 sm:text-2xl'
              )}
            >
              E aí, Abner Santana
            </h1>
          </div>
          <div className="mt-2 space-y-4 text-justify font-serif text-sm text-gray-600 dark:text-gray-400 sm:text-base">
            <p>
              Analista de infraestrutura e segurança de TI | Corredor e entusiasta em treinamento e fisiologia
            </p>
            <p>
              Trabalho com computadores, desde os 13 anos de idade, já atuei em diferentes áreas, iniciando em lojas de informática,
              manutenção e instalações de rede, e me estabelecendo em infraestrutura e segurança.
              Profissão que amo, e me empolga diariamente com os desafios.
            </p>
            <p>
              A corrida me encontrou, esporte que me transforma diariamente, estou buscando performance,
              competindo em grandes provas do país. Gosto muito de estudar os métodos de treinamento e fisiologia.
              Aplicando o que aprendo no meu próprio treinamento, e compartilhando no meu canal.
            </p>
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
              Eu me aposentei das mídias sociais tradicionais. No entanto, se você quiser entrar em contato,
              pode fazê-lo via{' '}
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
            <h2 className="mt-8 font-serif text-lg font-medium tracking-wide text-gray-900 dark:text-gray-100 sm:text-xl">
              Sobre esse site
            </h2>
            <p className="mt-2 font-serif text-sm text-gray-600 dark:text-gray-400 sm:text-base">
              Caso você esteja se perguntando, este site é:
            </p>
            <ul className="mt-4 list-inside list-disc pl-4 font-serif text-sm text-gray-600 dark:text-gray-400 sm:text-base">
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
