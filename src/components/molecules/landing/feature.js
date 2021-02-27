export const Feature = () => {
  return (
    <div className="px-4 py-16 mx-auto w-full md:px-24 lg:px-8 lg:py-20 bg-white">
      <div className="flex flex-col items-start max-w-screen-sm md:flex-row sm:mx-auto max-w-6xl mx-auto">
        <a href="/" className="mb-4 mr-8">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-100">
            <svg
              stroke="currentColor"
              viewBox="0 0 52 52"
              className="w-12 h-12 text-indigo-500"
            >
              <polygon
                strokeWidth={3}
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </svg>
          </div>
        </a>{' '}
        <div>
          <h2 className="mb-4 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            The global movement of people
          </h2>{' '}
          <p className="text-base text-gray-700 md:text-lg">
            Moving is one of the most life-changing decisions you can make. We
            want to help by connecting you with people who have done it and
            giving you insights into their decision-making process.
          </p>
        </div>
      </div>
    </div>
  )
}

export const Feature2 = () => {
  return (
    <div className="px-4 py-16 mx-auto w-full md:px-24 lg:px-8 lg:py-20 bg-white">
      <div className="flex flex-col items-start max-w-screen-sm md:flex-row sm:mx-auto max-w-6xl mx-auto">
        <a href="/" className="mb-4 mr-8">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-100">
            <svg
              stroke="currentColor"
              viewBox="0 0 52 52"
              className="w-12 h-12 text-indigo-500"
            >
              <polygon
                strokeWidth={3}
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </svg>
          </div>
        </a>{' '}
        <div>
          <h2 className="mb-4 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            Find your new home
          </h2>{' '}
          <p className="text-base text-gray-700 md:text-lg">
            You're not alone - people move all the time! Join other immigrants
            and expats on our community forum to share your experiences.
          </p>
        </div>
      </div>
    </div>
  )
}
