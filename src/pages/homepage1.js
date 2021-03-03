import Layout from 'components/layout'
import { Intro, Steps, Testimonials, Content } from 'components/organisms'

export const Homepage = () => {
  return (
    <Layout bg="gray-50">
      <Intro />
      <Steps />
      <Testimonials />
      <Content />
    </Layout>
  )
}

export default Homepage
