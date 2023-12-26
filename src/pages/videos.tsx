import clsx from 'clsx'
import Link from 'next/link'
import { Container, Wrapper } from 'src/components/'
import LatestVideos from 'src/lib/LatestVideos';

export const videos = () => {
  return (
    <>
      <Container title="Vídeos">
        <Wrapper>
        <SimpleLayout
            title="Últimos vídeos do canal"
            intro="É apenas uma página gerada automaticamente, atráves da API do YouTube, usando do axios :)"
          >
          <div className="mx-auto min-h-full pt-20 pb-20 text-center sm:pt-40 sm:pb-40">
            <LatestVideos videoCount={12} />
          </div>
        </Wrapper>
      </Container>
    </>
  )
}

export default videos
