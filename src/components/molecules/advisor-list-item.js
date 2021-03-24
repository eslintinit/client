import { useState, useEffect, useContext } from 'react'
import { AppContext } from 'context'
import { Avatar, Button } from 'components/atoms'
import { Tags, ParametersGrid } from 'components/molecules'
import { useRouter } from 'next/router'
import Link from 'next/link'
import splitbee from '@splitbee/web'
import mixpanel from 'mixpanel-browser'

import axios from 'axios'

import AttachMoneyIcon from '@material-ui/icons/AttachMoney'

export const AdvisorListItem = ({ advisor: initAdvisor }) => {
  const [noOfReviews, setNoOfReviews] = useState(null)
  const [price, setPrice] = useState(null)
  const [advisor, setAdvisor] = useState(initAdvisor)
  const { push } = useRouter()
  const { setShowBookingWidget, setSelectedAdvisor } = useContext(AppContext)

  useEffect(() => {
    setNoOfReviews(Math.floor(Math.random() * 8) + 1 - 1)
  }, [])

  useEffect(() => {
    setPrice(Math.floor(Math.random() * 16) * 5 + 5)
  }, [])

  if (!advisor) return <div />

  return (
    <div
      className="flex flex-col md:flex-row items-center mb-10"
      onClick={() => {
        splitbee.track('Open advisor page')
        global.analytics.track('Open advisor page')
        // mixpanel.track('Open advisor page')
        // push(``, `/advisors/${advisor.id}`)
        setSelectedAdvisor({
          ...advisor,
          price,
          noOfReviews,
        })
        push({
          pathname: '/advisors/[advisor]',
          query: { advisor: advisor.id },
          someShit: 'yo',
        })
      }}
    >
      <div className="min-w-24 w-24 mx-auto md:mx-0 min-w-max self-start mt-1 mb-4 md:mb-0 cursor-pointer">
        <Avatar src={advisor.picture} />
      </div>
      <div className="flex justify-between items-center md:items-start border-b pb-10">
        <div className="flex flex-col ml-4">
          <h2 className="text-lg font-medium cursor-pointer text-center md:text-left">{`${advisor.name} ‎ ‎🇺🇸 → 🇲🇽`}</h2>
          <div className="flex flex-col md:flex-row justify-between">
            <div className="flex flex-col w-full md:w-9/12">
              <span className="text-gray-600 font-regular my-2 text-center md:text-left">
                {advisor.bio}
              </span>
              <ParametersGrid
                advisor={advisor}
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
                ]}
              />
              {/*
              <Tags tags={advisor.tags || []} />
              */}
            </div>
            <div className="flex flex-col md:flex-col items-center mt-4 md:mt-0">
              <Button
                onClick={(e) => {
                  e.stopPropagation()
                  setSelectedAdvisor({
                    ...advisor,
                    price,
                    noOfReviews,
                    picture: advisor.picture,
                  })
                  splitbee.track('Start scheduling call')
                  global.analytics.track('Start scheduling call')
                  // mixpanel.track('Start scheduling call')
                  setShowBookingWidget(true)
                }}
                className="mt-4 md:mt-0"
              >
                Get in touch
              </Button>
              <div className="flex flex-col mt-4 md:mt-0">
                {price && (
                  <div className="flex flex-col items-center mt-2 border-b pb-2">
                    <span className="text-sm text-medium text-gray-700">{`$${price}`}</span>
                    <span className="text-xs text-gray-500">30 minutes</span>
                  </div>
                )}
                {noOfReviews > 0 && (
                  <a
                    href="#"
                    className="component hover:border-b-2 text-gray-500 border-gray-400 hover:border-gray-500 hover:text-gray-600 text-xs mt-2 mx-auto md:mx-0 text-center"
                  >
                    {`${noOfReviews} reviews`}
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
