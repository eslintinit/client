import { useState } from 'react'
import { Button } from 'components/atoms'
import { Modal } from 'components/organisms'
import splitbee from '@splitbee/web'

const Item = ({ label, value, total, last }) => (
  <li
    className={`flex justify-between items-center ${
      total ? 'font-medium' : ''
    } ${!last ? 'border-b' : ''} pb-0 mb-4 text-sm`}
  >
    <span>{label}</span>
    <span className={`${!total ? 'text-indigo-600 text-sm' : ''}`}>
      {value}
    </span>
  </li>
)

export const MonthlyCosts = ({ cost }) => {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <div className="flex flex-col items-center md:items-start relative">
        <span className="mb-6 font-medium text-xl text-gray-800">
          Monthly living costs in Mexico
        </span>
        <ul className="w-2/3 md:w-full">
          <Item total label="Total" value={cost} />
          <Item label="Rent" value="XX" />
          <Item label="Food" value="XX" />
          <Item label="Transportation" value="XX" />
          <Item label="Childcare" value="XX" />
          <Item label="Utilities" value="XX" last />
        </ul>
        <span
          className="font-semibold text-indigo-500 mt-6 cursor-pointer hover:underline"
          onClick={() => {
            setShowModal(true)

            global.analytics.track('Buy monhtly costs breakdown', {})
            splitbee.track('Buy monhtly costs breakdown', {})
          }}
        >
          See price breakdown
        </span>
      </div>
      {showModal && (
        <div
          className="flex left-0 top-0 items-center justify-center w-full h-full bg-black bg-opacity-50 fixed z-10"
          onClick={() => setShowModal(false)}
        >
          <Modal
            title="Buy monthly costs breakdown by Mike"
            body={
              <>
                <span>
                  To get access to Mike's monthly costs please buy access to
                  this info block
                </span>
              </>
            }
            actions={
              <Button
                primary
                className="ml-2"
                onClick={() => {
                  global.analytics.track('Buy monthly costs breakdown', {})
                  splitbee.track('Buy monthly costs breakdown', {})

                  createRecord({ Email: email, Notes: notes })
                  next()
                }}
              >
                Buy ($30)
              </Button>
            }
          />
        </div>
      )}
    </>
  )
}
