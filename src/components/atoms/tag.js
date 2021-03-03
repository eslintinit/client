export const Tag = ({ tag }) => {
  if (tag === 'Study') {
    return (
      <div className="text-sm inline-flex items-center font-medium leading-sm px-3 py-1 bg-green-100 text-green-700 rounded-full mr-2">
        🎓 Study
      </div>
    )
  }

  if (tag === 'Work') {
    return (
      <div className="text-sm inline-flex items-center font-medium leading-sm  px-3 py-1 bg-blue-100 text-blue-700 rounded-full mr-2">
        👩‍💼 Work
      </div>
    )
  }

  if (tag === 'Business') {
    return (
      <div className="text-sm inline-flex items-center font-medium leading-sm  px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full mr-2">
        💼 Business
      </div>
    )
  }

  if (tag === 'Family') {
    return (
      <div className="text-sm inline-flex items-center font-medium leading-sm  px-3 py-1 bg-pink-100 text-pink-700 rounded-full mr-2">
        👪 Family
      </div>
    )
  }

  if (tag === 'Retirement') {
    return (
      <div className="text-sm inline-flex items-center font-medium leading-sm  px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full mr-2">
        🏖 Retirement
      </div>
    )
  }

  return (
    <div className="text-sm inline-flex items-center font-medium leading-sm  px-3 py-1 bg-gray-100 text-gray-700 rounded-full mr-2">
      {tag}
    </div>
  )
}
