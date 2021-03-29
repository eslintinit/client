import { Organisations } from 'components/organisms'

export const Intro = () => {
  return (
    <div
      className="w-full relative flex flex-col py-16 lg:pt-0 lg:flex-col lg:pb-0 relative items-center pb-40 sm:pb-16"
      style={{
        backgroundImage: `url('/img/hero1.jpg')`,
        boxShadow: 'inset 0 0 0 1000px rgb(0 0 0 / 45%)',
        backgroundPosition: 'center',
      }}
    >
      <div className="flex flex-col justify-center items-center w-full max-w-xl px-4 mx-auto lg:px-8 lg:max-w-screen-xl">
        <div className="my-20 lg:my-48 lg:pr-5">
          <div className="mb-6">
            <h2 className="mb-6 text-center lg:text-left font-sans text-3xl font-bold tracking-tight text-white md:text-4xl sm:leading-none">
              Planning to move to another country?
            </h2>
            {/*
            <p className="text-base text-gray-700 md:text-lg max-w-xl">
              Get advice &amp; insights from people who actually moved. Move for{' '}
              <br />
              🎓study, 👩‍💼work, 💼business, 💸taxes or 🏖️retirement purposes
            </p>
            */}
            <p className="text-base text-white md:text-lg max-w-xl text-center lg:text-left">
              Moving is one of the most life-changing decisions you can make.
              <br />
              We want to help by connecting you with people who have done it and
              giving you insights into their process.
            </p>
          </div>
        </div>
      </div>
      <Organisations />
    </div>
  )
}
