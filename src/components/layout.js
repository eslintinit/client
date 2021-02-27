import Head from 'next/head'
import { Header, Footer } from 'components/molecules'

const Layout = ({
  children,
  bg = 'white',
  hideFooter = false,
  hideHeader = false,
}) => (
  <div
    className={`w-r elative flex flex-col full items-center py-16 lg:pt-0 lg:flex-col lg:pb-0 bg-${bg}`}
  >
    <Head>
      <title>Movenation</title>
    </Head>
    {!hideHeader && <Header />}
    {children}
    {!hideFooter && <Footer />}
  </div>
)

export default Layout
