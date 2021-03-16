import { useEffect } from 'react'
import { useApollo } from 'lib/apollo'
import { ApolloProvider } from '@apollo/client'
import { AppProvider } from 'context'
import { ChakraProvider } from '@chakra-ui/react'
import Head from 'next/head'
import splitbee from '@splitbee/web'
import mixpanel from 'mixpanel-browser'

import 'tailwindcss/tailwind.css'
import '../../public/css/index.css'
import 'rc-slider/assets/index.css'

function MyApp({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps)

  useEffect(() => {
    splitbee.init()
    // mixpanel.init(
    //   process.env.NODE_ENV === 'development'
    //     ? '61d6884190fb7aac237df081e24afc72'
    //     : '03da6f561fafe2241810733bb81aa22e',
    // )
  }, [])

  return (
    <ApolloProvider client={apolloClient}>
      <AppProvider>
        <ChakraProvider>
          <Head>
            <title>Movenation</title>
            <meta
              name="keywords"
              content="Relocation Tax, Costs of moving, Work permit, Setting up a company abroad, Citizenship by investment, Children relocation moving, Relocation, Moving advices, Moving"
            />
            <script
              src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js"
              defer
            ></script>
            <meta name="title" content="Movenation" />
            <meta
              name="description"
              content="Planning to move to another country?
Get advice & insights from of people who actually moved."
            />
            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://movenation.world/" />
            <meta property="og:title" content="Movenation" />
            <meta
              property="og:description"
              content="Planning to move to another country?
Get advice & insights from of people who actually moved."
            />
            <meta property="og:image" content="/meta-img.png" />
            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://movenation.world/" />
            <meta property="twitter:title" content="Movenation" />
            <meta
              property="twitter:description"
              content="Planning to move to another country?
Get advice & insights from of people who actually moved."
            />
            <meta property="twitter:image" content="/meta-img.png" />
            <meta
              name="description"
              content="Get advice & insights people who moved country. Move for study, work, business, taxes or retirement purposes"
            />
            <script
              type="text/javascript"
              src="//ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"
            ></script>
            <script
              type="text/javascript"
              src="//cdn.timekit.io/booking-js/v2/booking.min.js"
              defer
            ></script>
            <link rel="icon" href="/favicon.ico" type="image/x-icon" />
          </Head>
          <Component {...pageProps} />
        </ChakraProvider>
      </AppProvider>
    </ApolloProvider>
  )
}

export default MyApp
