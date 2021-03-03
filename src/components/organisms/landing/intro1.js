export const IntroOne = () => {
  return (
    <div
      className="w-full relative flex flex-col py-16 lg:pt-0 lg:flex-col lg:pb-0"
      style={{
        backgroundImage: `url('/img/hero1.jpg')`,
        height: '100vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        boxShadow: 'inset 0 0 0 1000px rgb(0 0 0 / 50%)',
      }}
    >
      <div
        className="flex flex-col justify-center items-center w-full max-w-xl px-4 mx-auto lg:px-8 lg:max-w-screen-xl"
        style={{ height: '100%' }}
      >
        <div className="mb-16 lg:my-40 lg:pr-5">
          <div className="mb-6">
            <h2
              className="mb-6 text-center font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none"
              style={{
                color: 'white',
                fontSize: '64px',
                fontWeight: 'bold',
              }}
            >
              Planning to move to another country?
            </h2>{' '}
            <p
              className="text-base text-gray-700 md:text-lg"
              style={{
                color: 'white',
                fontSize: '35px',
                lineHeight: '150%',
                textAlign: 'center',
                width: '100%',
                opacity: 0.8,
                fontWeight: 300,
              }}
            >
              Get insights from people who've been there
            </p>
          </div>{' '}
        </div>
      </div>
    </div>
  )
}
