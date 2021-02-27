const Ukraine = () => <span className="cursor-pointer">🇺🇦 Ukraine</span>
const Denmark = () => <span className="cursor-pointer">🇩🇰 Denmark</span>

export const CountryDoublePicker = () => {
  return (
    <div className="border border-gray-500 font-medium p-4 px-8 rounded-full hover:border-indigo-500 hover:border-2">
      <Ukraine />
      <span className="mx-4">→</span>
      <Denmark />
    </div>
  )
}
