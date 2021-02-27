export const Header = () => {
  return (
    <div className="w-full px-4 py-5 mx-auto md:px-24 lg:px-8 bg-gray-200">
      <div className="relative flex items-center justify-between max-w-6xl mx-auto">
        <div className="flex items-center">
          <a
            href="/"
            aria-label="Company"
            title="Company"
            className="inline-flex items-center mr-8"
          >
            <svg
              viewBox="0 0 24 24"
              strokeLinejoin="round"
              strokeWidth={2}
              strokeLinecap="round"
              strokeMiterlimit={10}
              stroke="currentColor"
              fill="none"
              className="w-8 text-gray-900"
            >
              <rect x={3} y={1} width={7} height={12} />{' '}
              <rect x={3} y={17} width={7} height={6} />{' '}
              <rect x={14} y={1} width={7} height={6} />{' '}
              <rect x={14} y={11} width={7} height={12} />
            </svg>{' '}
            <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
              Company
            </span>
          </a>{' '}
          <ul className="flex items-center hidden space-x-8 lg:flex">
            <li>
              <a
                href="/"
                aria-label="Our product"
                title="Our product"
                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-gray-900"
              >
                Why move?
              </a>
            </li>{' '}
            <li>
              <a
                href="/"
                aria-label="Our product"
                title="Our product"
                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-gray-900"
              >
                How to play a move
              </a>
            </li>{' '}
            <li>
              <a
                href="/"
                aria-label="Product pricing"
                title="Product pricing"
                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-gray-900"
              >
                Advisors
              </a>
            </li>{' '}
            <li>
              <a
                href="/"
                aria-label="About us"
                title="About us"
                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-gray-900"
              >
                Community
              </a>
            </li>
          </ul>
        </div>{' '}
        <ul className="flex items-center hidden space-x-8 lg:flex">
          <li>
            <a
              href="/"
              aria-label="Sign in"
              title="Sign in"
              className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-gray-900"
            >
              Get listed as advisor
            </a>
          </li>{' '}
          <li>
            <a
              href="/"
              aria-label="Sign up"
              title="Sign up"
              className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-indigo-500 hover:bg-indigo-500 focus:shadow-outline focus:outline-none"
            >
              Join
            </a>
          </li>
        </ul>{' '}
        <div className="lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
          >
            <svg viewBox="0 0 24 24" className="w-5 text-gray-600">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />{' '}
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />{' '}
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
