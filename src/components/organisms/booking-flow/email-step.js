import splitbee from '@splitbee/web'
import mixpanel from 'mixpanel-browser'
import { useState } from 'react'
import { Button, Input, Textarea } from 'components/atoms'
import { Modal } from 'components/organisms'
import { useAirtable } from 'use-airtable'

export const EmailStep = ({ close, next }) => {
  const [email, setEmail] = useState('')
  const [notes, setNotes] = useState('')
  const [, createRecord] = useAirtable(
    'Table 1',
    'keyl0A56Sw6XVQcY9',
    'appKgZAuYEnKT26U0',
  )

  return (
    <div
      className="flex items-center justify-center w-full h-full bg-black bg-opacity-50 fixed"
      onClick={() => {
        splitbee.track('Close modal: email step')
        // mixpanel.track('Close modal: email step')
        global.analytics.track('Close modal: email step')
        close()
      }}
    >
      <Modal
        close={close}
        title={'Provide Call Information'}
        body={
          <>
            <Input value={email} onChange={(e) => setEmail(e.target.value)} />
            <Textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </>
        }
        actions={
          <Button
            primary
            className="ml-2"
            onClick={() => {
              global.analytics.track('Enter email', {
                email,
                notes,
              })
              splitbee.track('Enter email', {
                email,
                notes,
              })
              // mixpanel.track('Enter email', {
              // email,
              // notes,
              // })

              createRecord({ Email: email, Notes: notes })
              next()
            }}
          >
            Next
          </Button>
        }
      />
    </div>
  )
}
