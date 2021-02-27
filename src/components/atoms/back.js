import { useRouter } from 'next/router'

export const Back = () => {
  const { back } = useRouter()

  return (
    <div
      className="fixed top-4 left-8 cursor-pointer text-gray-500 text-sm flex items-center hover:text-gray-900"
      onClick={back}
    >
      <svg
        data-v-33d71554
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        className="w-4 h-4 transform rotate--135 mr-2"
        style={{ transform: 'rotate(-135deg)' }}
      >
        <path
          data-v-33d71554
          d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z"
        />
      </svg>
      Back
    </div>
  )
}
