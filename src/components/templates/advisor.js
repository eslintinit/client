import { useState, useEffect, useContext } from 'react'
import { Avatar, Button, Back } from 'components/atoms'
import {
  Tags,
  ParametersGrid,
  MovingBudget,
  MovingBudgetOne,
  MovingBudgetTwo,
  MonthlyCosts,
} from 'components/molecules'
import { TopicsGrid, Timeline, FAQ } from 'components/organisms'
import { AppContext } from 'context'
import Layout from 'components/layout'
import splitbee from '@splitbee/web'
import mixpanel from 'mixpanel-browser'
import dynamic from 'next/dynamic'

const Reviews = dynamic(() => import('components/organisms/reviews'))

export const AdvisorTemplate = ({ advisor = {} }) => {
  const [price, setPrice] = useState(null)
  const [noOfCalls, setNoOfCalls] = useState(null)
  const {
    setShowBookingWidget,
    selectedAdvisor,
    setSelectedAdvisor,
  } = useContext(AppContext)

  useEffect(() => {
    const randomizedPrice = Math.floor(Math.random() * 16) * 5 + 5
    setPrice(randomizedPrice)
    setNoOfCalls(Math.floor(Math.random() * 16) + 5)
    setSelectedAdvisor({ ...advisor, price: randomizedPrice })
  }, [])

  return (
    <Layout bg="gray-50" hideFooter hideHeader>
      <Back />
      <div className="flex flex-col px-4 lg:px-0 w-full lg:w-4/5 mt-8 lg:mt-20 min-h-screen max-w-3xl lg:max-w-2xl">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <div className="flex flex-col md:flex-row justify-between">
              <div className="flex flex-col items-center md:items-start">
                <Avatar src={(selectedAdvisor || advisor).picture} />
                <h2 className="text-2xl font-medium mt-4 flex items-center">
                  {advisor.name}
                </h2>
              </div>

              <div className="flex flex-col items-center">
                <Button
                  className="mt-4 w-max"
                  onClick={() => {
                    splitbee.track('Start scheduling call')
                    global.analytics.track('Start scheduling call')
                    // mixpanel.track('Start scheduling call')
                    setShowBookingWidget(true)
                  }}
                >
                  Book a call
                </Button>
                {selectedAdvisor && selectedAdvisor.price && (
                  <div className="flex items-center mt-3 border-b border-gray-200 pb-2">
                    <span className="text-sm sm:text-md text-medium text-gray-700">{`$${selectedAdvisor.price}`}</span>
                    <span className="text-sm sm:text-md ml-1 text-gray-500">
                      / 30 minutes
                    </span>
                  </div>
                )}
                {noOfCalls && (
                  <span className="text-sm sm:text-md text-gray-500 mt-2 flex items-center">
                    <span
                      className="text-xs mr-1"
                      style={{
                        marginTop: 1,
                      }}
                    >
                      📞
                    </span>
                    {`Advised `}
                    <span className="text-indigo-600 text-bold ml-1">
                      {`${noOfCalls} people`}
                    </span>
                  </span>
                )}
              </div>
            </div>
            <span className="text-md md:text-lg text-center md:text-left text-gray-700 w-full mt-8 md:mt-4 mb-2">
              {advisor.bio}
            </span>
            {/*
            <div className="self-start mt-1">
              <Tags tags={advisor.tags || []} />
            </div>
            */}
            <div className="self-center md:self-start mt-0 md:mt-1">
              <ParametersGrid
                parameters={[
                  {
                    label: `${
                      advisor.movingReason === 'Study'
                        ? '🎓'
                        : advisor.movingReason === 'Work'
                        ? '👩‍💼'
                        : advisor.movingReason === 'Business'
                        ? '💼'
                        : advisor.movingReason === 'Family'
                        ? '👪'
                        : advisor.movingReason === 'Retirement'
                        ? '🏖'
                        : '✴️ '
                    } Moving reason`,
                    value: advisor.movingReason,
                  },
                  {
                    label: '🕒 Been living in Mexico',
                    value: `${2021 - advisor.yearOfMove} years`,
                  },
                  {
                    label: '💵 Monthly living cost',
                    value: advisor.monthlyLivingCost,
                  },
                  {
                    label: '💵 Moving budget',
                    value: advisor.movingBudget,
                  },
                ]}
              />
            </div>
            <div className="border-b my-12" />
            <div className="flex flex-col items-center md:items-start md:flex-row justify-between">
              <div className="w-full md:w-1/2">
                <Timeline
                  advisor={advisor}
                  setShowBookingWidget={setShowBookingWidget}
                  year={advisor.yearOfMove}
                />
              </div>
              <div className="flex md:hidden border-b my-12" />
              <div className="w-full md:w-1/2">
                <MovingBudgetOne
                  advisor={advisor}
                  cost={advisor.movingBudget}
                  setShowBookingWidget={setShowBookingWidget}
                />
              </div>
            </div>
            <div className="border-b my-12" />
            <MonthlyCosts cost={advisor.monthlyLivingCost} />
            {/*
            {/*
            */}
            {/*
             */}
            <div className="flex items-center justify-between mt-16 flex-col-reverse md:flex-row">
              <div className="flex items-center space-x-4 mt-4 md:mt-0">
                <a className="text-gray-500 transition-colors duration-300 hover:text-indigo-500">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                    <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                  </svg>
                </a>{' '}
                <a className="text-gray-500 transition-colors duration-300 hover:text-indigo-500">
                  <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                    <circle cx={15} cy={15} r={4} />{' '}
                    <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
                  </svg>
                </a>{' '}
                <a className="text-gray-500 transition-colors duration-300 hover:text-indigo-500">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                    <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                  </svg>
                </a>
              </div>
              <span className="flex items-center">
                <span
                  className="font-medium text-sm mr-3"
                  style={{ color: '#3b82f6' }}
                >
                  This person's identity is verified
                </span>
                <div
                  className="verified local"
                  style={{
                    position: 'relative',
                    bottom: 0,
                    left: 0,
                    height: 19,
                    width: 19,
                  }}
                >
                  <div className="content-wrapper">
                    <div className="content icon-only">
                      <div className="check" />
                    </div>
                  </div>
                  <div className="badge-wrapper">
                    <div className="badge-layer" />
                    <div className="badge-layer grow" />
                    <div className="badge-layer shadow" />
                  </div>
                </div>
              </span>
            </div>
          </div>
        </div>

        {/*
        <div className="flex justify-between mt-12">
          <TopicsGrid />
          <div />
        </div>
          */}
        <div className="flex justify-between mt-12 mb-24 border-t pt-8">
          {selectedAdvisor && <Reviews advisor={selectedAdvisor} />}
          {/*
          <FAQ />
          */}
        </div>
      </div>
    </Layout>
  )
}
