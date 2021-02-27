import Layout from 'components/layout'
import { CountryDoublePicker } from 'components/atoms'
import { MoveOptions } from 'components/molecules'
import { AdvisorsList, TopicsPicker } from 'components/organisms'

export const AdvisorsListTemplate = () => {
  return (
    <Layout bg="gray-50" hideFooter hideHeader>
      {/*
       */}
      <img src="/logo-wide.svg" className="mt-10 w-40 opacity-90" />
      <div className="my-4 flex justify-center">
        <CountryDoublePicker />
      </div>
      <MoveOptions />
      <div className="flex justify-between mt-20 px-32">
        <AdvisorsList />
        <TopicsPicker />
      </div>
    </Layout>
  )
}
