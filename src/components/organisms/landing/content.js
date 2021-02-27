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
            MoveNation provides insights from people who have moved and are
            willing to share their story, lessons learned, and advice with you
            in order to make your decision easier. explicabo.
          </p>
        </div>{' '}
        <div className="mb-4 transition-shadow duration-300 hover:shadow-xl lg:mb-6">
          <img
            src="https://images.pexels.com/photos/3727459/pexels-photo-3727459.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt=""
            className="object-cover w-full h-56 rounded shadow-lg sm:h-64 md:h-80 lg:h-96"
          />
        </div>{' '}
        <p className="max-w-xl mb-4 text-base text-gray-700 sm:mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud ullamco laboris aliquip ex ea.
        </p>{' '}
        <a
          href="/"
          aria-label
          className="inline-flex items-center font-semibold transition-colors duration-200 text-indigo-500 hover:text-indigo-500"
        >
          Start chatting.{' '}
          <svg
            fill="currentColor"
            viewBox="0 0 12 12"
            className="inline-block w-3 ml-2"
          >
            <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
          </svg>
        </a>
      </div>
    </div>
  )
}
