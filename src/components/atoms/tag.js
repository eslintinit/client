import { Tooltip } from '@chakra-ui/react'

export const Tag = ({ tag }) => {
  if (tag.label === 'Study') {
    return (
      <Tooltip label={tag.tooltip} aria-label={tag.tooltip}>
        <div className="text-sm inline-flex items-center font-medium leading-sm px-3 py-1 bg-green-100 text-green-700 rounded-full mr-2 cursor-default">
          🎓 Study
        </div>
      </Tooltip>
    )
  }

  if (tag.label === 'Work') {
    return (
      <Tooltip label={tag.tooltip} aria-label={tag.tooltip}>
        <div className="text-sm inline-flex items-center font-medium leading-sm  px-3 py-1 bg-blue-100 text-blue-700 rounded-full mr-2 cursor-default">
          👩‍💼 Work
        </div>
      </Tooltip>
    )
  }

  if (tag.label === 'Business') {
    return (
      <Tooltip label={tag.tooltip} aria-label={tag.tooltip}>
        <div className="text-sm inline-flex items-center font-medium leading-sm  px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full mr-2 cursor-default">
          💼 Business
        </div>
      </Tooltip>
    )
  }

  if (tag.label === 'Family') {
    return (
      <Tooltip label={tag.tooltip} aria-label={tag.tooltip}>
        <div className="text-sm inline-flex items-center font-medium leading-sm  px-3 py-1 bg-pink-100 text-pink-700 rounded-full mr-2 cursor-default">
          👪 Family
        </div>
      </Tooltip>
    )
  }

  if (tag.label === 'Retirement') {
    return (
      <Tooltip label={tag.tooltip} aria-label={tag.tooltip}>
        <div className="text-sm inline-flex items-center font-medium leading-sm  px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full mr-2 cursor-default">
          🏖 Retirement
        </div>
      </Tooltip>
    )
  }

  return (
    <Tooltip label={tag.tooltip} aria-label={tag.tooltip}>
      <div className="text-sm inline-flex items-center font-medium leading-sm  px-3 py-1 bg-gray-100 text-gray-700 rounded-full mr-2 cursor-default">
        {tag.label}
      </div>
    </Tooltip>
  )
}
