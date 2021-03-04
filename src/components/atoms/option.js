export const Option = ({ children, active, onClick }) => {
  if (active)
    return (
      <div
        className="border-2 border-indigo-500 text-gray-800 p-1 px-4 mx-1 rounded-full text-sm cursor-pointer box-content flex flex-row items-center mb-2 sm:mb-0"
        onClick={onClick}
      >
        {children}
      </div>
    )
  return (
    <div
      className="border border-gray-500 text-gray-800 p-1 px-4 mx-1 rounded-full text-sm hover:border-indigo-500 cursor-pointer box-content flex flex-row items-center mb-2 sm:mb-0"
      onClick={onClick}
    >
      {children}
    </div>
  )
}
