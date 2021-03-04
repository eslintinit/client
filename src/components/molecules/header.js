import Link from 'next/link'
import splitbee from '@splitbee/web'
import mixpanel from 'mixpanel-browser'

export const Header = ({ fixed = false, light = false }) => {
  return (
    <div
      className={`w-full px-4 py-5 mx-auto md:px-24 lg:px-8 z-10 ${
        fixed ? 'absolute' : ''
      }`}
    >
      <div className="relative flex items-center justify-between max-w-6xl mx-auto">
        <div className="flex items-center">
          <Link href="/">
            <img
              src="/logo-wide.svg"
              className="w-40"
              style={
                light
                  ? {
                      filter: 'invert(1)',
                      opacity: 0.8,
                    }
                  : {}
              }
            />
          </Link>
        </div>{' '}
        <ul className="flex items-center space-x-8 lg:flex">
          <li>
            <Link href="/advisors">
              <a
                aria-label="Sign in"
                title="Sign in"
                className={`font-medium tracking-wide ${
                  light ? 'text-gray-400' : 'text-gray-700'
                } transition-colors duration-200 hover:text-gray-900 hidden lg:flex`}
                style={
                  light
                    ? {
                        fontWeight: 400,
                        color: 'white',
                        opacity: 0.7,
                      }
                    : {}
                }
                onClick={() => {
                  global.analytics.track('Open advisors list', {
                    from: 'Browse advisors',
                  })
                  splitbee.track('Open advisors list', {
                    from: 'Browse advisors',
                  })
                  // mixpanel.track('Open advisors list', {
                  // from: 'Browse advisors',
                  // })
                }}
              >
                Browse advisors
              </a>
            </Link>
          </li>{' '}
          <li>
            <Link href="/advisors">
              <a
                aria-label="Sign up"
                onClick={() => {
                  global.analytics.track('Open advisors list', {
                    from: 'Get started',
                  })
                  splitbee.track('Open advisors list', {
                    from: 'Get started',
                  })
                  // mixpanel.track('Open advisors list', {
                  // from: 'Get started',
                  // })
                }}
                title="Sign up"
                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-indigo-500 hover:bg-indigo-500 focus:shadow-outline focus:outline-none"
                style={
                  light
                    ? {
                        background: 'white',
                        color: 'rgb(99, 102, 241)',
                      }
                    : {}
                }
              >
                Get started
              </a>
            </Link>
          </li>
        </ul>{' '}
        <div className="hidden">
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
