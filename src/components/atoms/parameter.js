export const Parameter = ({ label, value }) => (
  <div className="flex flex-col mt-6 w-max mr-0 md:mr-8 items-center md:items-start">
    <span className="text-gray-500 font-medium text-sm">{label}</span>
    <span className="pl-0 md:pl-5 text-gray-900 font-medium text-md">
      {value}
    </span>
  </div>
)
