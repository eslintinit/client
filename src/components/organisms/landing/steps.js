import splitbee from '@splitbee/web'
import Link from 'next/link'

export const Steps = () => {
  return (
    <div className="px-4 pb-16 mx-auto w-full bg-white md:px-24 lg:px-8 lg:pb-20 pt-16 md:pt-0 lg:pt-16 border-t border-gray-100">
      <h2 className="sm:text-4xl md:mx-auto max-w-full lg: max-w-lg mb-20 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 text-center">
        How it works
      </h2>{' '}
      <div className="grid gap-6 row-gap-10 lg:grid-cols-2 max-w-6xl mx-auto">
        <div className="lg:py-6 lg:pr-16">
          <div className="flex">
            <div className="flex flex-col items-center mr-4">
              <div>
                <div className="flex items-center justify-center w-10 h-10 border rounded-full text-indigo-500">
                  1
                </div>
              </div>{' '}
              <div className="w-px h-full bg-gray-300" />
            </div>{' '}
            <div className="pt-1 pb-8">
              <p className="text-gray-900 mb-2 text-lg font-bold">
                Pick an advisor.
              </p>{' '}
              <p className="text-gray-700">
                They'll help you explore the best options for you, including the
                country's best cities, work opportunities, lifestyle and more.
              </p>
              {/*
                Movenation is a global network of people who have moved country.
                Browse & search our community of advisors that have gone through
                the process of moving to the country/city you are considering
                and find the right one for you.
                */}
            </div>
          </div>{' '}
          <div className="flex">
            <div className="flex flex-col items-center mr-4">
              <div>
                <div className="flex items-center justify-center w-10 h-10 border rounded-full text-indigo-500">
                  2
                </div>
              </div>{' '}
              <div className="w-px h-full bg-gray-300" />
            </div>{' '}
            <div className="pt-1 pb-8">
              <p className="text-gray-900 mb-2 text-lg font-bold">
                Schedule a call or zoom
              </p>{' '}
              <p className="text-gray-700">
                Select date and time that works best for your schedule and
                specify the topics you want to discuss. The advisor has 72 hours
                to respond, or the request will expire.
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col items-center mr-4">
              <div>
                <div className="flex items-center justify-center w-10 h-10 border rounded-full text-indigo-500">
                  3
                </div>
              </div>{' '}
              <div className="w-px h-full bg-gray-300" />
            </div>{' '}
            <div className="pt-1 pb-8">
              <p className="text-gray-900 mb-2 text-lg font-bold">
                The call/meeting is confirmed
              </p>{' '}
              <p className="text-gray-700">
                You will receive a confirmation email with a conference line or
                zoom and access code provided. Block out your calendar and
                prepare some questions to cover in the call.
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col items-center mr-4">
              <div>
                <div className="flex items-center justify-center w-10 h-10 border rounded-full text-indigo-500">
                  4
                </div>
              </div>
            </div>
            <div className="pt-1 pb-0">
              <p className="text-gray-900 mb-2 text-lg font-bold">
                Get advice and insights
              </p>
              <p className="text-gray-700">
                Learn everything there is to know about the new country/city you
                are about to move to. Form friendships before even moving
                abroad. After the call, you’ll be charged the expert’s
                per-minute rate, and they get paid. You can then leave a rating
                and review for the advisor.
              </p>
              <Link href="/advisors">
                <button
                  className="component border-2 rounded font-medium tracking-wide text-md px-6 py-3 focus:outline-none focus:shadow-outline border-indigo-500 text-indigo-500 hover:bg-indigo-50 hover:text-indigo-600 mt-16"
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
                >
                  Get started
                </button>
              </Link>
            </div>
          </div>
        </div>{' '}
        <div className="relative">
          <img
            src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt=""
            className="inset-0 object-cover object-bottom w-full rounded shadow-lg h-96 lg:absolute lg:h-full hidden lg:flex"
          />
        </div>
      </div>
    </div>
  )
}
