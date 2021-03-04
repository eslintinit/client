import Link from 'next/link'
import splitbee from '@splitbee/web'
import mixpanel from 'mixpanel-browser'

export const Content = () => {
  return (
    <div className="px-4 py-16 mx-auto w-full md:px-24 lg:px-8 lg:py-20 bg-white">
      <div className="mx-auto sm:text-center lg:max-w-2xl">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            Moving is a big decision. <br />
            We're here to help.
          </h2>{' '}
          <p className="text-base text-gray-700 md:text-lg">
            Movenation provides insights from people who have moved and are
            willing to share their story, lessons learned, and advice with you
            in order to make your decision easier. explicabo.
          </p>
        </div>{' '}
        <Link href="/advisors">
          <button
            type="submit"
            className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-indigo-500 hover:bg-indigo-500 focus:shadow-outline focus:outline-none"
            onClick={() => {
              global.analytics.track('Open advisors list', {
                from: 'CTA',
              })
              splitbee.track('Open advisors list', {
                from: 'CTA',
              })
              // mixpanel.track('Open advisors list', {
              //   from: 'CTA',
              // })
            }}
          >
            Get started
          </button>
        </Link>
      </div>
    </div>
  )
}
