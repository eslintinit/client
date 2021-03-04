export const Intro = () => {
  return (
    <div
      className="w-full relative flex flex-col py-16 lg:pt-0 lg:flex-col lg:pb-0"
      style={{
        backgroundImage: `url('/img/hero1.jpg')`,
      }}
    >
      <div className="flex flex-col justify-center items-center w-full max-w-xl px-4 mx-auto lg:px-8 lg:max-w-screen-xl">
        <div className="my-12 lg:my-40 lg:pr-5">
          <div className="mb-6">
            <h2 className="mb-6 text-center lg:text-left font-sans text-3xl font-bold tracking-tight text-gray-900 md:text-4xl sm:leading-none">
              Planning to move to another country?
            </h2>{' '}
            {/*
            <p className="text-base text-gray-700 md:text-lg max-w-xl">
              Get advice &amp; insights from people who actually moved. Move for{' '}
              <br />
              🎓study, 👩‍💼work, 💼business, 💸taxes or 🏖️retirement purposes
            </p>
            */}
            <p className="text-base text-gray-700 md:text-lg max-w-xl text-center lg:text-left">
              Get advice &amp; insights from thousands of people who actually
              moved. Move for study, work, business, taxes or retirement
              purposes
            </p>
          </div>{' '}
        </div>
      </div>
    </div>
  )
}
