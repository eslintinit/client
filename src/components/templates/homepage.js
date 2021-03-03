import Layout from 'components/layout'
import { Feature, Feature2 } from 'components/molecules'
import {
  Intro,
  MoveSection,
  Steps,
  Testimonials,
  Content,
  AdvisorsSection,
  AdvisorsSectionOne,
  CTA,
} from 'components/organisms'

export const HomepageTemplate = () => {
  return (
    <Layout bg="gray-50">
      <Intro />
      <Steps />
      <Testimonials />
      <Content />
      {/*
      <MoveSection />
      <AdvisorsSection />
      <AdvisorsSectionOne />
      <CTA />
      */}
    </Layout>
  )
}
