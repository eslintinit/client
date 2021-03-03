import Link from 'next/link'
import Layout from 'components/layout'
import { IntroOne, Testimonials, Content } from 'components/organisms'

export const Homepage = () => {
  return (
    <Layout bg="gray-50" headerFixed headerLight>
      <IntroOne />
      <Steps />
      <Testimonials />
      <Last />
    </Layout>
  )
}

const Steps = () => (
  <div
    data-v-62ebfb0e
    className="px-4 py-24 mx-auto w-full bg-white md:px-24 lg:px-8 lg:py-24 lg:pb-32"
  >
    <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
      <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
        Moving abroad.
      </h2>{' '}
      <p className="text-base text-gray-700 md:text-lg">
        Moving abroad is an exciting, but also a daunting prospect. Get advice
        and insights from people who have actually moved, so you can make an
        informed decision about your move.
      </p>
    </div>{' '}
    <div className="max-w-6xl mx-auto  grid gap-8 row-gap-8 lg:grid-cols-3">
      <div className="sm:text-center">
        <div className="flex items-center justify-center w-24 h-24 mb-4 text-5xl font-extrabold rounded-full text-indigo-500 bg-indigo-100 sm:mx-auto">
          1
        </div>{' '}
        <h6 className="text-gray-900 mb-2 font-semibold leading-5">
          Schedule a call or zoom
        </h6>{' '}
        <p className="max-w-md mb-3 text-sm text-gray-900 sm:mx-auto">
          Browse & search our community of advisors that have gone through the
          process of moving to the country/city you are considering and find the
          right one for you. Select 3 dates and times that work best for your
          schedule and specify a reason for the call or zoom. The advisor has 72
          hours to respond, or the request will expire.
        </p>{' '}
      </div>{' '}
      <div className="sm:text-center">
        <div className="flex items-center justify-center w-24 h-24 mb-4 text-5xl font-extrabold rounded-full text-indigo-500 bg-indigo-100 sm:mx-auto">
          2
        </div>{' '}
        <h6 className="text-gray-900 mb-2 font-semibold leading-5">
          The call/meeting is confirmed
        </h6>{' '}
        <p className="max-w-md mb-3 text-sm text-gray-900 sm:mx-auto">
          You will receive a confirmation email with a conference line or zoom
          and access code provided. Block out your calendar and prepare some
          questions and topics to cover in the call. Feel free to invite up to 8
          others to the meeting as well!
        </p>{' '}
      </div>{' '}
      <div className="sm:text-center">
        <div className="flex items-center justify-center w-24 h-24 mb-4 text-5xl font-extrabold rounded-full text-indigo-500 bg-indigo-100 sm:mx-auto">
          3
        </div>{' '}
        <h6 className="text-gray-900 mb-2 font-semibold leading-5">
          Get advice and insights
        </h6>{' '}
        <p className="max-w-md mb-3 text-sm text-gray-900 sm:mx-auto">
          Learn everything there is to know about the new country/city you are
          about to move to. Form friendships before even moving abroad. After
          the call, you’ll be charged the expert’s per-minute rate, and they get
          paid. You can then leave a rating and review for the advisor.
        </p>{' '}
      </div>
    </div>
  </div>
)

const Last = () => (
  <div
    data-v-62ebfb0e
    className="px-4 py-16 mx-auto w-full md:px-24 lg:px-8 lg:py-20 bg-white"
  >
    <div className="flex flex-col max-w-screen-lg overflow-hidden bg-white border rounded shadow-sm lg:flex-row sm:mx-auto">
      <div className="relative lg:w-1/2">
        <img
          src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt=""
          className="object-cover w-full lg:absolute h-80 lg:h-full"
        />{' '}
        <svg
          viewBox="0 0 20 104"
          fill="currentColor"
          className="absolute top-0 right-0 hidden h-full text-white lg:inline-block"
        >
          <polygon points="17.3036738 5.68434189e-14 20 5.68434189e-14 20 104 0.824555778 104" />
        </svg>
      </div>{' '}
      <div className="flex flex-col justify-center p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2">
        <h5 className="mb-3 text-3xl font-extrabold leading-none sm:text-4xl">
          Moving is tough. We’ve got your back
        </h5>{' '}
        <p className="mb-5 text-gray-800">
          Moving to a new country can be one of the most difficult and stressful
          experiences in life. MoveNation helps you make it as easy and
          stress-free as possible by providing advice, insights, support,
          connections and more from people who have actually done it before.
        </p>{' '}
        <div className="flex items-center">
          <Link href="/advisors">
            <button
              type="submit"
              className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-indigo-500 hover:bg-indigo-500 focus:shadow-outline focus:outline-none"
            >
              Get started
            </button>
          </Link>
        </div>
      </div>
    </div>
  </div>
)

export default Homepage
