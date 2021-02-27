export const Button = ({
  primary = false,
  secondary = false,
  success = false,
  warning = false,
  danger = false,
  children,
  className = '',
}) => {
  return (
    <button
      className={`component border border-transparent rounded font-semibold tracking-wide text-sm px-5 py-2 focus:outline-none focus:shadow-outline bg-indigo-500 text-gray-100 hover:bg-indigo-600 hover:text-gray-200 ${className}`}
    >
      {children}
    </button>
  )
}
