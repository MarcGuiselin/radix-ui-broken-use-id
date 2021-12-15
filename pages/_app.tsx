import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { withTRPC } from '@trpc/next'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default withTRPC({
  ssr: true,
  config: () => ({
    url: 'http://localhost:3000/api/trpc',
  }),
})(MyApp)
