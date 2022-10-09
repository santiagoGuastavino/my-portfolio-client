import '../styles/globals.css'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { useEffect } from 'react'

export default function MyApp ({ Component, pageProps }) {
  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_DEFAULT_URL)
  }, [])

  return <Component {...pageProps} />
}
