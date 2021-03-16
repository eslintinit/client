import { useState, useEffect, useContext } from 'react'
import { AppContext } from 'context'
import { Avatar, Button } from 'components/atoms'
import { Tags } from 'components/molecules'
import { useRouter } from 'next/router'
import Link from 'next/link'
import splitbee from '@splitbee/web'
import mixpanel from 'mixpanel-browser'

import axios from 'axios'

export const AdvisorListItemPlaceholder = ({
  advisor: initAdvisor,
  setShowPremiumModal,
}) => {
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
        splitbee.track('Open premium advisors')
        global.analytics.track('Open premium advisors')
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
      <div className="min-w-24 w-24 mx-auto md:mx-0 min-w-max self-start mt-1 mb-4 md:mb-0 cursor-pointer"></div>
      <div
        className="flex flex-col justify-between items-center md:items-center pb-10"
        style={{ width: '100%' }}
      >
        <div className="flex flex-col items-center ml-4">
          <h2 className="text-lg font-medium cursor-pointer text-center md:text-left">
            Go Premium and see +20.459 more advisors
          </h2>
          <div className="flex flex-col md:flex-row justify-between">
            <div className="flex flex-col-reverse md:flex-col items-center mt-4 md:mt-0">
              <Button
                onClick={(e) => {
                  e.stopPropagation()
                  setSelectedAdvisor({
                    ...advisor,
                    price,
                    noOfReviews,
                    picture: advisor.picture,
                  })
                  splitbee.track('Go premium')
                  global.analytics.track('Go premium')
                  // mixpanel.track('Start scheduling call')
                  // setShowBookingWidget(true)
                  // alert('')
                  setShowPremiumModal(true)
                }}
                className="mt-4 md:mt-4"
              >
                Browse premium advisors
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
