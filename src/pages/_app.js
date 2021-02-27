import { useApollo } from 'lib/apollo'
import { ApolloProvider } from '@apollo/client'
import { ChatProvider } from 'context'
import Head from 'next/head'

import 'tailwindcss/tailwind.css'
import '../../public/css/index.css'

function MyApp({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps)

  return (
    <ApolloProvider client={apolloClient}>
      <Head>
        <script async src="https://cdn.splitbee.io/sb.js"></script>
      </Head>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
