const values = [
  // {
  //   title: 'Get advice from real people who’ve moved',
  //   content:
  //     'It can be daunting to know where to start or what the process is like when considering moving abroad. Get a wealth of insights and recommendations from people who’ve done it. Start connecting today by chatting to people and find out about their moving process.',
  // },
  {
    title: 'Get informed',
    content:
      'Movenation advisors will help you plan your move - making sure that your lifestyle is protected with practical tips on visas, jobs, accommodation and more.',
  },
  {
    title: 'Save time and money',
    content:
      'No need to get lost on government websites or hire lawyers. We have plenty of resources, stories and guides from people who’ve been there',
  },
  {
    title: 'Move with confidence',
    content:
      'Our advisors will provide you with a step by step checklist on your moving process and will guide through the process. No need to worry, we got your back.',
  },
]

const Value = ({ value: { title, content } = {} }) => (
  <div className="px-10 py-20 text-center bg-gray-100 rounded lg:px-5 lg:py-10 xl:py-20">
    <a
      href="/"
      aria-label="Read article"
      title="Nori grape silver beet broccoli kombu beet`"
      className="inline-block max-w-md mx-auto mb-3 text-2xl font-extrabold leading-7 transition-colors duration-200 hover:text-indigo-500 text-gray-900"
    >
      {title}
    </a>{' '}
    <p className="max-w-md mx-auto mb-2 text-gray-700">{content}</p>
  </div>
)

export const Values = () => (
  <div className="flex flex-col bg-white w-full">
    <div className="w-full p-4 py-4 md:py-12 demo mt-16 bg-white">
      <div className="max-w-full mx-auto space-y-8 md:space-y-16 md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xxl">
        <div className="flex flex-col items-center content-center justify-center w-full space-y-8 text-center pt-24">
          <div className="mx-auto space-y-4 pl-10 md:pl-0">
            <h2 className="text-3xl max-w-3xl font-bold md:text-5xl text-left md:text-center">
              Get advice from real people <br className="flex md:hidden" />
              who’ve moved
            </h2>{' '}
            <p className="text-base leading-6 text-gray-700 md:text-lg text-left md:text-center">
              It can be daunting to know where to start or what the process is
              like when considering moving abroad.{' '}
              <br className="hidden md:flex" />
              Get a wealth of insights and recommendations from people who’ve
              done it. <br className="hidden md:flex" />
              Start connecting today by chatting to people and find out about
              their moving process.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="w-full p-4 py-4 md:py-12 bg-white">
      <div className="max-w-full mx-auto space-y-8 md:space-y-16 md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xxl">
        <div className="w-full space-y-16 text-center">
          <div className="grid-cols-1  md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 grid grid-flow-row gap-4 md:gap-4">
            <div className="text-left mt-0 md:mt-0">
              <div className="flex items-start content-start justify-start space-x-4">
                <div>
                  <img
                    src="/icons/info.png"
                    style={{
                      width: 24,
                      height: 24,
                      minWidth: 24,
                      minHeight: 24,
                    }}
                  />
                </div>{' '}
                <div className="space-y-2 ">
                  <h3 className="text-xl font-semibold">{values[0].title}</h3>{' '}
                  <p className="text-base leading-6 text-gray-700">
                    {values[0].content}
                  </p>
                </div>
              </div>
            </div>
            <div className="text-left mt-4 md:mt-0">
              <div className="flex items-start content-start justify-start space-x-4">
                <div>
                  <img
                    src="/icons/icon.png"
                    style={{
                      width: 24,
                      height: 24,
                      minWidth: 24,
                      minHeight: 24,
                    }}
                  />
                </div>{' '}
                <div className="space-y-2 ">
                  <h3 className="text-xl font-semibold">{values[1].title}</h3>{' '}
                  <p className="text-base leading-6 text-gray-700">
                    {values[1].content}
                  </p>
                </div>
              </div>
            </div>
            <div className="text-left mt-4 md:mt-0">
              <div className="flex items-start content-start justify-start space-x-4">
                <div>
                  <img
                    src="/icons/plane.png"
                    style={{
                      width: 24,
                      height: 24,
                      minWidth: 24,
                      minHeight: 24,
                    }}
                  />
                </div>{' '}
                <div className="space-y-2 ">
                  <h3 className="text-xl font-semibold">{values[2].title}</h3>{' '}
                  <p className="text-base leading-6 text-gray-700">
                    {values[2].content}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

// <div className="bg-white px-4 py-16 mx-auto w-full md:px-24 lg:px-8 lg:py-20">
//   <div className="max-w-6xl mx-auto  grid gap-5 mb-8 lg:grid-cols-2 ">
//     {values.map((value) => (
//       <Value value={value} key={value.title} />
//     ))}
//   </div>
// </div>
