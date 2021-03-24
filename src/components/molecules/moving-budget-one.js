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

export const MovingBudgetOne = ({ cost, advisor }) => {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <div className="flex flex-col items-center md:items-start relative ml-4">
        <span className="mb-6 font-medium text-xl text-gray-800">
          Moving budget
        </span>
        <ul className="w-2/3 md:w-full">
          <Item total label="Total" value={cost} />
          <Item label="Medical checks" value="XX" />
          <Item label="Insurance" value="XX" />
          <Item label="Tax Exempt fee" value="XX" />
          <Item label="Visa" value="XX" />
          <Item label="Airline tickets" value="XX" />
          <Item label="Transportation" value="XX" />
          <Item label="Aight" value="XX" />
          <Item label="Goods shipping" value="XX" last />
        </ul>
        <span
          className="font-semibold text-indigo-500 mt-6 cursor-pointer hover:underline"
          onClick={() => setShowModal(true)}
        >
          See price breakdown
        </span>
        <div className="absolute bottom-1 ml-5" style={{ zIndex: 1 }}>
          {advisor && advisor.name && (
            <div className="component border border-transparent rounded-lg font-medium tracking-wide text-sm px-12 py-6 focus:outline-none focus:shadow-outline bg-indigo-500 text-gray-100 flex flex-col items-center text-center">
              {`Pay 30$ to see ${advisor.name.split(' ')[0]}'s`} <br />
              moving budget plan
              <div
                className="component border-2 border-indigo rounded font-semibold tracking-wide text-sm px-5 py-2 focus:outline-none focus:shadow-outline bg-white-500 text-white hover:bg-indigo-900 hover:text-gray-200 w-max mt-4 cursor-pointer"
                onClick={() => setShowModal(true)}
              >
                See price breakdown
              </div>
            </div>
          )}
        </div>
        <div
          className="absolute background-gray-900 w-full bottom-0"
          onClick={() => {
            global.analytics.track('Buy moving budget breakdown', {})
            splitbee.track('Buy moving budget breakdown', {})
            // mixpanel.track('Start scheduling call')
            setShowModal(true)
          }}
          style={{
            background:
              'linear-gradient(#e6646500, #f9fafbba, #f9fafbbf, #f9fafbe0, #f9fafb, #f9fafb)',
            height: 'calc(100% - 176px)',
          }}
        ></div>
      </div>
      {showModal && (
        <div
          className="flex left-0 top-0 items-center justify-center w-full h-full bg-black bg-opacity-50 fixed z-10"
          onClick={() => setShowModal(false)}
        >
          <Modal
            title="Buy moving budget costs breakdown by Mike"
            body={
              <>
                <span>
                  To get access to Mike's moving budget plan, please buy access
                  to it
                </span>
              </>
            }
            actions={
              <Button
                primary
                className="ml-2"
                onClick={() => {
                  global.analytics.track('Buy moving budget breakdown', {})
                  splitbee.track('Buy moving budget breakdown', {})

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
