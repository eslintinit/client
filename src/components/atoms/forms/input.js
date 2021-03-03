export const Input = ({ value, onChange }) => (
  <div>
    <label htmlFor="price" className="block text-sm font-medium text-gray-700">
      Email
    </label>
    <div className="mt-1 relative rounded-md shadow-sm">
      <input
        value={value}
        onChange={onChange}
        type="text"
        name="price"
        id="price"
        className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pr-12 sm:text-sm border-gray-300 rounded-md px-3 py-2 border border-gray-200 hover:border-indigo-500 focus:border-2 focus:border-indigo-500 focus:outline-none "
        placeholder="Your email"
      />
    </div>
  </div>
)
