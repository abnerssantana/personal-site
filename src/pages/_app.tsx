import { useEffect, useRef } from 'react'
import '../styles/tailwind.css'
import 'focus-visible'

const inter = Inter({
  subsets: ['latin'],
})

function usePrevious(value) {
  let ref = useRef()

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}

export default function App({ Component, pageProps, router }) {
  let previousPathname = usePrevious(router.pathname)
  return (
    <>
      <main className={``}>
        <Component previousPathname={previousPathname} {...pageProps} />
      </main>
    </>
  )
}
