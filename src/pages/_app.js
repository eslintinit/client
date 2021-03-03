import { useEffect } from 'react'
import { useApollo } from 'lib/apollo'
import { ApolloProvider } from '@apollo/client'
import { AppProvider } from 'context'
import Head from 'next/head'
import splitbee from '@splitbee/web'

import 'tailwindcss/tailwind.css'
import '../../public/css/index.css'

function MyApp({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps)

  useEffect(() => {
    splitbee.init()
  }, [])

  // <script async src="https://cdn.splitbee.io/sb.js"></script>
  return (
    <ApolloProvider client={apolloClient}>
      <AppProvider>
        <Head>
          <script
            type="text/javascript"
            src="//ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"
          ></script>
          <script
            type="text/javascript"
            src="//cdn.timekit.io/booking-js/v2/booking.min.js"
            defer
          ></script>
        </Head>
        <Component {...pageProps} />
      </AppProvider>
    </ApolloProvider>
  )
}

export default MyApp
