import { useState } from 'react'
import { CountryDoublePicker } from 'components/atoms'
import { MoveOptions } from 'components/molecules'
import { AdvisorsList, TopicsPicker } from 'components/organisms'
import Layout from 'components/layout'
import Link from 'next/link'

export const AdvisorsListTemplate = ({ advisors, shuffle, num }) => {
  console.log(num)
  const [option, setOption] = useState(null)
  const [countryFrom, setCountryFrom] = useState(null)
  const [countryTo, setCountryTo] = useState(null)

  return (
    <Layout bg="gray-50" hideFooter hideHeader>
      {/*
       */}
      <Link href="/">
        <img src="/logo-wide.svg" className="mt-12 w-40 opacity-90" />
      </Link>
      <div className="my-4 flex justify-center">
        <CountryDoublePicker
          countryFrom={countryFrom}
          countryTo={countryTo}
          setCountryFrom={setCountryFrom}
          setCountryTo={setCountryTo}
        />
      </div>
      <MoveOptions option={option} setOption={setOption} />
      <div className="flex justify-between mt-16 px-32">
        <AdvisorsList
          advisors={
            option
              ? advisors.filter(
                  (advisor) =>
                    advisor.tags.map((t) => t.toLowerCase()).indexOf(option) >
                    -1,
                )
              : advisors
          }
          option={option}
        />
        <div className="flex flex-col h-min min-w-1/5 w-1/5 flex-col ml-8 pl-4 border-l self-start">
          <TopicsPicker
            label="Professions"
            topics={['Engineer', 'Journalist', 'Enterpreneur', 'Plumber']}
            onTopicSelect={shuffle}
          />
          <TopicsPicker
            label="Topics"
            topics={[
              'Relocation Tax',
              'Costs of moving',
              'Work permit',
              'Setting up a company',
              'Citizenship by investment',
              'Children relocation moving',
            ]}
            onTopicSelect={shuffle}
          />
        </div>
      </div>
    </Layout>
  )
}
