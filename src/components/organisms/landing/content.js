import Link from 'next/link'
import splitbee from '@splitbee/web'
import mixpanel from 'mixpanel-browser'

export const Content = () => {
  return (
    <div className="px-4 py-16 mx-auto w-full md:px-24 lg:px-8 lg:py-32 bg-white">
      <div className="mx-auto sm:text-center lg:max-w-2xl flex flex-col items-center">
        <div className="max-w-full lg:max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-full mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl text-center">
            Moving is a big decision. <br />
            We're here to help.
          </h2>{' '}
          <p className="text-base text-gray-700 md:text-lg text-center">
            Movenation is a network of people who've moved and are willing to
            share their stor, lessons learned, and advice with you in order to
            make your transition easier.
          </p>
        </div>{' '}
        <Link href="/advisors">
          <button
            type="submit"
            className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-indigo-500 hover:bg-indigo-600 focus:shadow-outline focus:outline-none"
            style={{
              transform: 'scale(1.2)',
            }}
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
            Browse advisors
          </button>
        </Link>
        <Link href="/about">
          <button
            className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide transition duration-200 rounded shadow-sm focus:shadow-outline focus:outline-none border border-gray-200 text-gray-500 mt-6 hover:text-gray-400"
            onClick={() => {
              global.analytics.track('Open About page')
              splitbee.track('Open About page')
            }}
          >
            Learn more
          </button>
        </Link>
      </div>
    </div>
  )
}
