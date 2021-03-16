import { useState } from 'react'
import { Button } from 'components/atoms'
import { Modal } from 'components/organisms'

const Item = ({ label, value, total, last }) => (
  <li
    className={`flex justify-between items-center ${
      total ? 'font-medium' : ''
    } ${!last ? 'border-b' : ''} pb-0 mb-2`}
  >
    <span
      className={
        value === 'XX' && !total
          ? 'text-gray-500'
          : total
          ? 'text-indigo-600'
          : ''
      }
    >
      {label}
    </span>
    <span
      className={`${
        !total
          ? value !== 'XX'
            ? 'text-gray-800 text-sm'
            : 'text-gray-500 text-sm'
          : 'text-indigo-600 '
      }`}
    >
      {value}
    </span>
  </li>
)

export const MovingBudgetTwo = () => {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <div className="flex flex-col relative">
        <span className="mb-6 font-medium text-xl text-gray-800">
          Moving budget
        </span>
        <ul className="max-w-xs">
          <Item label="Medical checks" value="$1200" />
          <Item label="Insurance" value="$2000" />
          <Item label="Tax Exempt fee" value="$4000" />
          <Item label="Visa" value="XX" />
          <Item label="Airline tickets" value="XX" />
          <Item label="Something" value="XX" />
          <Item label="Something else" value="XX" />
          <Item label="Goods shipping" value="XX" />
          <Item label="Total" value="XX" total />
        </ul>
        <span
          className="font-semibold text-indigo-500 mt-6 cursor-pointer hover:underline"
          onClick={() => setShowModal(true)}
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
