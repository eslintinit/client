import Layout from 'components/layout'
import { Feature, Feature2 } from 'components/molecules'
import {
  Intro,
  MoveSection,
  Values,
  Cases,
  Steps,
  Ratings,
  Testimonials,
  Content,
  AdvisorsSection,
  AdvisorsSectionOne,
  CTA,
  Organisations,
  FeaturedIn,
  About,
} from 'components/organisms'

export const HomepageTemplate = () => {
  return (
    <Layout>
      <Intro />
      <Values />
      <Cases />
      <Steps />
      <Ratings />
      <Testimonials />
      {/*
      <CTA />
      */}
      <FeaturedIn />
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
