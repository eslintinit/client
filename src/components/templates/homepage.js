import Layout from 'components/layout'
import { Feature, Feature2 } from 'components/molecules'
import {
  Intro,
  MoveSection,
  Steps,
  Testimonials,
  Content,
  AdvisorsSection,
  CTA,
} from 'components/organisms'

export const HomepageTemplate = () => {
  return (
    <Layout>
      <Intro />
      <Feature />
      <Feature />
      <MoveSection />
      <Steps />
      <Testimonials />
      <Content />
      <AdvisorsSection />
      <CTA />
    </Layout>
  )
}
