export const Testimonials = () => {
  return (
    <div className="px-4 py-16 mx-auto w-full bg-white md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          Talk to people who moved.
        </h2>{' '}
        <p className="text-base text-gray-700 md:text-lg">
          MoveNation is a community of expats and recent migrants sharing
          insights, advice, tips and tricks about moving abroad. Join the
          discussion today!
        </p>
      </div>{' '}
      <div className="grid gap-10 mx-auto sm:grid-cols-2 lg:grid-cols-4 lg:max-w-screen-lg">
        <div>
          <img
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
            alt="Person"
            className="object-cover w-24 h-24 rounded-full shadow"
          />{' '}
          <div className="flex flex-col justify-center mt-2">
            <p className="text-lg font-bold text-gray-900">Oliver Aguilerra</p>{' '}
            <p className="mb-4 text-xs text-gray-900">Product Manager</p>{' '}
            <p className="text-sm tracking-wide text-gray-900">
              Pommy ipsum bent as a nine bob note naff off biscuits nowt, a
              cuppa unhand me sir hadn't done it in donkey's years sod's law.
            </p>
            <p className="text-xl mt-4 text-gray-900">🇺🇦 → 🇩🇰</p>{' '}
          </div>
        </div>{' '}
        <div>
          <img
            src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="Person"
            className="object-cover w-24 h-24 rounded-full shadow"
          />{' '}
          <div className="flex flex-col justify-center mt-2">
            <p className="text-lg font-bold text-gray-900">Marta Clermont</p>{' '}
            <p className="mb-4 text-xs text-gray-900">Design Team Lead</p>{' '}
            <p className="text-sm tracking-wide text-gray-900">
              Secondary fermentation degrees plato units of bitterness, cask
              conditioned ale ibu real ale pint glass craft beer. krausen goblet
              grainy ibu.
            </p>
            <p className="text-xl mt-4 text-gray-900">🇺🇦 → 🇩🇰</p>{' '}
          </div>
        </div>{' '}
        <div>
          <img
            src="https://images.pexels.com/photos/3747435/pexels-photo-3747435.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="Person"
            className="object-cover w-24 h-24 rounded-full shadow"
          />{' '}
          <div className="flex flex-col justify-center mt-2">
            <p className="text-lg font-bold text-gray-900">Alice Melbourne</p>{' '}
            <p className="mb-4 text-xs text-gray-900">Human Resources</p>{' '}
            <p className="text-sm tracking-wide text-gray-900">
              I just closed my eyes and in a nanosecond I cured myself from this
              ridiculous model of disease, addiction and obsession.
            </p>
            <p className="text-xl mt-4 text-gray-900">🇺🇦 → 🇩🇰</p>{' '}
          </div>
        </div>{' '}
        <div>
          <img
            src="https://images.pexels.com/photos/3931603/pexels-photo-3931603.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="Person"
            className="object-cover w-24 h-24 rounded-full shadow"
          />{' '}
          <div className="flex flex-col justify-center mt-2">
            <p className="text-lg font-bold text-gray-900">
              Martin Garix Potter
            </p>{' '}
            <p className="mb-4 text-xs text-gray-900">Good guy</p>{' '}
            <p className="text-sm tracking-wide text-gray-900">
              Est Schlitz shoreditch fashion axe. Messenger bag cupidatat
              Williamsburg sustainable aliqua, umami shabby chic artisan duis
              pickled.
            </p>
            <p className="text-xl mt-4 text-gray-900">🇺🇦 → 🇩🇰</p>{' '}
          </div>
        </div>
      </div>
    </div>
  )
}
