import { Transition, Popover } from '@headlessui/react'
import { useState } from 'react'
import { useHover } from 'hooks'

export default function PopoverSample() {
  const [hoverRef, isHovered] = useHover()

  return (
    <Popover.Group opened>
      <Popover opened>
        <Popover.Button>
          <div style={{ background: 'red' }} ref={hoverRef}>
            {isHovered ? 'yo' : 'ya'}
          </div>
        </Popover.Button>
        <Popover.Panel opened>
          <a href="#">Analytics</a>
          <a href="#">Engagement</a>
          <a href="#">Security</a>
          <a href="#">Integrations</a>
          <a href="#">Automations</a>
        </Popover.Panel>
      </Popover>
    </Popover.Group>
  )
}
