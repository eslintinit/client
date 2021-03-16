import { useContext } from 'react'
import { AppContext } from 'context'
import { Modal } from 'components/organisms'
import { Button, Input, Textarea } from 'components/atoms'
import splitbee from '@splitbee/web'
import mixpanel from 'mixpanel-browser'

export const PaymentStep = ({ close, next }) => {
  const { selectedAdvisor } = useContext(AppContext)

  return (
    <div
      className="flex items-center justify-center w-full h-full bg-black bg-opacity-50 fixed z-10"
      onClick={() => {
        splitbee.track('Close modal: payment step')
        global.analytics.track('Close modal: payment step')
        // mixpanel.track('Close modal: payment step')
        close()
      }}
    >
      <Modal
        close={close}
        title={'Payment'}
        body={
          <span clasName="text-gray-500">
            {`Pay $${selectedAdvisor.price} to ${selectedAdvisor.name}`}
          </span>
        }
        actions={
          <Button
            onClick={() => {
              splitbee.track('Proceed to payment', {
                price: selectedAdvisor.price,
              })
              global.analytics.track('Proceed to payment', {
                price: selectedAdvisor.price,
              })
              // mixpanel.track('Proceed to payment', {
              //   price: selectedAdvisor.price * 60,
              // })
              next()
            }}
          >
            Proceed to checkout
          </Button>
        }
      />
    </div>
  )
}
