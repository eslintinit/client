export const Textarea = ({ value, onChange }) => (
  <div className="mt-4">
    <label htmlFor="price" className="block text-sm font-medium text-gray-700">
      Additional notes
    </label>
    <div className="mt-1 relative rounded-md shadow-sm">
      <textarea
        value={value}
        onChange={onChange}
        rows={5}
        type="text"
        name="price"
        id="price"
        className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pr-12 sm:text-sm border-gray-300 rounded-md px-3 py-2 border border-gray-200 hover:border-indigo-500 focus:border-2 focus:border-indigo-500 focus:outline-none "
        placeholder="Please provide topics you'd like to discuss so advisor can prepare for a call"
      />
    </div>
  </div>
)
