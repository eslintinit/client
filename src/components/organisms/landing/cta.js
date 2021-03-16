export const CTA = () => (
  <div className="px-4 py-16 mx-auto w-full md:px-24 lg:px-8 lg:py-20 bg-white">
    <div className="p-8 rounded shadow-xl sm:p-16 max-w-6xl mx-auto">
      <div className="flex flex-col lg:flex-row">
        <div className="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5">
          <h2 className="font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            Get advice from people who actually moved
          </h2>
        </div>{' '}
        <div className="lg:w-1/2">
          <p className="mb-4 text-base text-gray-700">
            Have you been thinking about moving to another country? Get insights
            and tips from those who have done it before. Learn what the actual
            process is like, the cost of living, tax rates and more.
          </p>{' '}
          <a
            href="/"
            aria-label
            className="inline-flex items-center font-semibold transition-colors duration-200 text-indigo-500 hover:text-indigo-500"
          >
            Subscribe now
          </a>
        </div>
      </div>
    </div>
  </div>
)
