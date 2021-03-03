import { useState, useEffect, useContext } from 'react'
import { Avatar, Button, Back } from 'components/atoms'
import { Tags } from 'components/molecules'
import { TopicsGrid, Timeline, FAQ } from 'components/organisms'
import { AppContext } from 'context'
import Layout from 'components/layout'
import splitbee from '@splitbee/web'
import dynamic from 'next/dynamic'

const Reviews = dynamic(() => import('components/organisms/reviews'))

export const AdvisorTemplate = ({ advisor = {} }) => {
  const [price, setPrice] = useState(null)
  const {
    setShowBookingWidget,
    selectedAdvisor,
    setSelectedAdvisor,
  } = useContext(AppContext)

  useEffect(() => {
    const randomizedPrice = Math.floor(Math.random() * 30) + 1
    setPrice(randomizedPrice)
    setSelectedAdvisor({ ...advisor, price: randomizedPrice })
  }, [])

  return (
    <Layout bg="gray-50" hideFooter hideHeader>
      <Back />
      <div className="flex flex-col w-4/5 mt-20 min-h-screen max-w-3xl">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <div className="flex justify-between">
              <div className="flex flex-col">
                {selectedAdvisor && <Avatar src={selectedAdvisor.picture} />}
                <h2 className="text-2xl font-medium mt-4">{advisor.name}</h2>
              </div>

              <div className="flex flex-col items-center">
                <Button
                  className="mt-4 w-max"
                  onClick={() => {
                    splitbee.track('Start scheduling call')
                    setShowBookingWidget(true)
                  }}
                >
                  Book a call
                </Button>
                {selectedAdvisor && selectedAdvisor.price && (
                  <div className="flex flex-col items-center mt-2">
                    <span className="text-md text-medium text-gray-700">{`$${selectedAdvisor.price}`}</span>
                    <span className="text-sm text-gray-500">per minute</span>
                  </div>
                )}
              </div>
            </div>
            <span className="text-lg text-gray-700 w-9/12 mt-4 mb-2">
              {advisor.bio}
            </span>
            <Tags tags={advisor.tags || []} />
          </div>
        </div>

        {/*
        <div className="flex justify-between mt-12">
          <TopicsGrid />
          <div />
          <Timeline />
        </div>
          */}
        <div className="flex justify-between mt-12 mb-24">
          {selectedAdvisor && <Reviews advisor={selectedAdvisor} />}
          {/*
          <FAQ />
          */}
        </div>
      </div>
    </Layout>
  )
}
