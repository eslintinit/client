import splitbee from '@splitbee/web'
import { Modal } from 'components/organisms'
import { Button, Input, Textarea } from 'components/atoms'

export const FinalStep = ({ close }) => (
  <div
    className="flex items-center justify-center w-full h-full bg-black bg-opacity-40 fixed"
    onClick={close}
  >
    <Modal
      close={close}
      title={'Thanks for participating in research!'}
      body={
        <span clasName="text-gray-500">
          Product doesn't exist. We are doing a research. Thanks for
          participation and we'll let you know when we finally launch the
          product (it'll be approximately in 4 months)
        </span>
      }
      actions={<Button onClick={close}>Ok</Button>}
    />
  </div>
)
