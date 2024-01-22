import { useEffect, useRef } from 'react'
import { Analytics } from '@vercel/analytics/react'
import '../styles/tailwind.css'
import 'focus-visible'

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
      <Analytics />
    </>
  )
}
