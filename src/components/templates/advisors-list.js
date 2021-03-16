import { useState, useEffect } from 'react'
import {
  CountryDoublePicker,
  RangeSlider,
  Button,
  Input,
} from 'components/atoms'
import { MoveOptions } from 'components/molecules'
import { AdvisorsList, TopicsPicker, Modal } from 'components/organisms'
import Layout from 'components/layout'
import Link from 'next/link'
import splitbee from '@splitbee/web'
import { useAirtable } from 'use-airtable'

export const AdvisorsListTemplate = ({
  advisors: initAdvisors,
  shuffle,
  num,
}) => {
  const [advisors, setAdvisors] = useState(initAdvisors)
  const [showFilters, setShowFilters] = useState(false)
  const [showPremiumModal, setShowPremiumModal] = useState(false)
  const [option, setOption] = useState(null)
  const [countryFrom, setCountryFrom] = useState('usa')
  const [countryTo, setCountryTo] = useState('mx')
  const [email, setEmail] = useState('')

  const [, createRecord] = useAirtable(
    'Go premium',
    'keyl0A56Sw6XVQcY9',
    'appKgZAuYEnKT26U0',
  )

  useEffect(() => {
    setAdvisors(
      initAdvisors
        .filter((advisor) => {
          if (
            countryFrom === 'usa' &&
            advisor.from === 'usa' &&
            countryTo === 'mx' &&
            advisor.to === 'mx'
          ) {
            // alert('ok filtering')
            return true
          }
          return false
        })
        .filter((advisor) =>
          option
            ? advisor.tags.map((t) => t.label.toLowerCase()).indexOf(option) >
              -1
            : true,
        ),
    )
  }, [countryFrom])

  useEffect(() => {
    setAdvisors(
      initAdvisors
        .filter((advisor) => {
          if (
            countryFrom === 'usa' &&
            advisor.from === 'usa' &&
            countryTo === 'mx' &&
            advisor.to === 'mx'
          ) {
            return true
          }
          return false
        })
        .filter((advisor) =>
          option
            ? advisor.tags.map((t) => t.label.toLowerCase()).indexOf(option) >
              -1
            : true,
        ),
    )
  }, [countryTo])

  return (
    <Layout bg="gray-50" hideFooter hideHeader>
      {showPremiumModal && (
        <div
          className="flex items-center justify-center w-full h-full bg-black bg-opacity-50 fixed z-10"
          onClick={close}
        >
          <Modal
            close={() => setShowPremiumModal(false)}
            title={<span className="text-lg">Go premium</span>}
            center
            body={
              <div className="flex flex-col items-center">
                <img src="/illustration2.png" className="w-11/12" />
                <span className="text-gray-900 text-center my-4">
                  Please share your email and we will send your activation link
                  for full access
                </span>
                <div className="w-3/4 mb-0">
                  <Input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
            }
            actions={
              <Button
                onClick={() => {
                  // setShowPremiumModal(false)
                  splitbee.track('Sign up for premium')
                  global.analytics.track('Sign up for premium')
                  createRecord({
                    Email: email,
                    'Country from': countryFrom,
                    'Country to': countryTo,
                  })
                  alert('Thanks!')
                  setShowPremiumModal(false)
                }}
                className="mb-8"
              >
                Get access to all advisors
              </Button>
            }
          />
        </div>
      )}
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
      <div className="flex flex-col mt-2">
        <MoveOptions option={option} setOption={setOption} />
        {/*
        <div className="mb-2" />
        <RangeSlider
          label="Moving budget"
          min={3000}
          max={20000}
          initMin={4000}
          initMax={12000}
        />
        <RangeSlider
          label="Monthly cost of living"
          min={2000}
          max={20000}
          initMin={3500}
          initMax={8000}
        />
        */}
      </div>
      <div
        className={`border border-${
          showFilters ? 'indigo' : 'gray'
        }-500 text-gray-800 p-1 px-4 mx-1 rounded-full text-sm hover:border-indigo-500 cursor-pointer box-content flex flex-col sm:flex-row items-center mt-4 block lg:hidden`}
        onClick={() => setShowFilters(!showFilters)}
      >
        More filters
      </div>
      {showFilters && (
        <div className="flex flex-row justify-between w-full px-4 sm:w-3/4 md:w-2/4 sm:pt-0 sm:border-0 mt-8 h-min border-b border-t pt-8 lg:hidden">
          <TopicsPicker
            label="Professions"
            topics={[
              'Teaching',
              'Medical',
              'Tech',
              'Hospitality',
              'Agriculture',
              'Childcare',
              'Communications',
              'Internship',
              'Volunteering',
            ]}
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
      )}
      <div className="flex justify-between mt-8 sm:mt-16 px-4 md:px-8 lg:px-12 xl:px-32 w-full">
        <AdvisorsList
          advisors={advisors}
          option={option}
          setShowPremiumModal={setShowPremiumModal}
        />
        <div className="hidden lg:flex flex-col h-min min-w-1/5 w-1/5 flex-col ml-8 pl-4 border-l self-start">
          <TopicsPicker
            label="Professions"
            topics={[
              'Teaching',
              'Medical',
              'Tech',
              'Hospitality',
              'Agriculture',
              'Childcare',
              'Communications',
              'Internship',
              'Volunteering',
            ]}
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
