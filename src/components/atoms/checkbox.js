export const Checkbox = ({ label }) => {
  return (
    <label className="inline-flex items-center mt-3">
      <input type="checkbox" className="form-checkbox h-5 w-5 text-gray-600" />
      <span className="ml-2 text-gray-500 text-sm">{label}</span>
    </label>
  )
}
