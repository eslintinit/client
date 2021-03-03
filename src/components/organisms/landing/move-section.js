import { useState } from 'react'
import { Select } from 'components/atoms'
import { AdvisorsGrid } from 'components/organisms'

export const MoveSection = () => {
  const [moveFrom, setMoveFrom] = useState('usa')
  const [moveTo, setMoveTo] = useState('mx')

  return (
    <div className="px-4 py-16 w-2/3 md:px-24 lg:px-8 lg:py-20 flex items-center justify-center ">
      <div className="flex flex-row overflow-hidden lg:flex-row justify-between">
        <div className="flex flex-col w-1/4">
          <span className="mb-2 ml-2">I move from:</span>
          <Select />
          <span className="mt-8 mb-2 ml-2">To:</span>
          <Select />
        </div>
        <div className="flex flex-col items-center w-2/4">
          <span className="mb-2 font-medium text-gray-700">
            Get advice from:
          </span>
          <AdvisorsGrid moveFrom={moveFrom} moveTo={moveTo} />
        </div>
      </div>
    </div>
  )
}
