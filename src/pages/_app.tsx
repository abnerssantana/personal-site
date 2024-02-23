import { useEffect, useRef } from 'react'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import '../styles/tailwind.css'
import 'focus-visible'

function usePrevious(value) {
  const ref = useRef()

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}

export default function App({ Component, pageProps, router }) {
  const previousPathname = usePrevious(router.pathname)
  return (
    <>
      <main className={``}>
        <Component previousPathname={previousPathname} {...pageProps} />
      </main>
      <Analytics />
      <SpeedInsights />
    </>
  )
}
