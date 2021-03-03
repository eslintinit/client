export const Testimonials = () => {
  return (
    <div className="px-4 py-16 mx-auto w-full md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          Talk to people who moved.
        </h2>{' '}
        <p className="text-base text-gray-700 md:text-lg">
          Movenation is a community of expats and recent migrants sharing
          insights, advice, tips and tricks about moving abroad.
        </p>
      </div>{' '}
      <div className="grid gap-10 mx-auto sm:grid-cols-2 lg:grid-cols-4 lg:max-w-screen-lg">
        <div>
          <img
            src="/img/faces/woman1.jpg"
            alt="Person"
            className="object-cover w-24 h-24 rounded-full shadow"
          />
          <div className="flex flex-col justify-center mt-2">
            <p className="text-lg font-semibold text-gray-800 mb-1">
              Dane Bowen
            </p>
            <p className="text-sm tracking-wide text-gray-700 h-16 min-h-16">
              I moved from the US to Mexico with my husband and two children. We
              love it here.
            </p>
            <p className="text-xl mt-4 text-gray-900">🇺🇸 → 🇲🇽</p>
          </div>
        </div>
        <div>
          <img
            src="/img/faces/old-man2.jpg"
            alt="Person"
            className="object-cover w-24 h-24 rounded-full shadow"
          />{' '}
          <div className="flex flex-col justify-center mt-2">
            <p className="text-lg font-semibold text-gray-800 mb-1">
              Wilf Gutierrez
            </p>{' '}
            <p className="text-sm tracking-wide text-gray-700 h-16 min-h-16">
              Been living as a retiree in Mexico for +10 years now. Former
              lawyer in the US
            </p>
            <p className="text-xl mt-4 text-gray-900">🇺🇸 → 🇲🇽</p>
          </div>
        </div>{' '}
        <div>
          <img
            src="/img/faces/woman3.jpg"
            alt="Person"
            className="object-cover w-24 h-24 rounded-full shadow"
          />{' '}
          <div className="flex flex-col justify-center mt-2">
            <p className="text-lg font-semibold text-gray-800 mb-1">
              Marta Clermont
            </p>{' '}
            <p className="text-sm tracking-wide text-gray-700 h-16 min-h-16">
              Working remotely with my husband from Mexico City since 2015.
            </p>
            <p className="text-xl mt-4 text-gray-900">🇺🇸 → 🇲🇽</p>
          </div>
        </div>{' '}
        <div>
          <img
            src="/img/faces/man1.jpg"
            alt="Person"
            className="object-cover w-24 h-24 rounded-full shadow"
          />{' '}
          <div className="flex flex-col justify-center mt-2">
            <p className="text-lg font-semibold text-gray-800 mb-1">
              Jamil Mcarthur
            </p>{' '}
            <p className="text-sm tracking-wide text-gray-700 h-16 min-h-16">
              Moved to Mexico with my family in 2009. Working for a US oil firm.
            </p>
            <p className="text-xl mt-4 text-gray-900">🇺🇸 → 🇲🇽</p>
          </div>
        </div>
      </div>
    </div>
  )
}
