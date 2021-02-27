export const MoveSection = () => {
  return (
    <div className="px-4 py-16 mx-auto w-full md:px-24 lg:px-8 lg:py-20 bg-white">
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
            Moving tips and advice from people who've been there
          </h5>{' '}
          <p className="mb-5 text-gray-800">
            Get a wealth of insights and recommendations from people who have
            moved to help you plan your move. Find the right destination for
            you, your family or your business.
          </p>{' '}
          <div className="flex items-center">
            <button
              type="submit"
              className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-indigo-500 hover:bg-indigo-500 focus:shadow-outline focus:outline-none"
            >
              Get started
            </button>{' '}
            <a
              href="/"
              aria-label
              className="inline-flex items-center font-semibold transition-colors duration-200 text-indigo-500 hover:text-indigo-500"
            >
              Learn More
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
      </div>
    </div>
  )
}
