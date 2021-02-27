export default function Styleguide() {
  return (
    <div>
      <div className="px-8 text-gray-900 min-h-screen flex bg-gray-200">
        <div className="w-full max-w-screen-lg mx-auto my-8">
          <div>
            <h1 className="text-3xl font-bold">
              NextUIKit - TailwindCSS Components Template
            </h1>
          </div>
          <section className="my-8">
            <h2 className="text-2xl font-semibold">Buttons</h2>
            <div>
              <div className="flex my-4">
                <div className="m-2">
                  <button className="component border border-transparent rounded font-semibold tracking-wide text-sm px-5 py-2 focus:outline-none focus:shadow-outline bg-indigo-500 text-gray-100 hover:bg-indigo-600 hover:text-gray-200">
                    Primary
                  </button>
                </div>
                <div className="m-2">
                  <button className="component border border-transparent rounded font-semibold tracking-wide text-sm px-5 py-2 focus:outline-none focus:shadow-outline bg-gray-500 text-gray-100 hover:bg-gray-600 hover:text-gray-200 ">
                    Secondary
                  </button>
                </div>
                <div className="m-2">
                  <button className="component border border-transparent rounded font-semibold tracking-wide text-sm px-5 py-2 focus:outline-none focus:shadow-outline bg-green-500 text-gray-100 hover:bg-green-600 hover:text-gray-200">
                    Success
                  </button>
                </div>
                <div className="m-2">
                  <button className="component border border-transparent rounded font-semibold tracking-wide text-sm px-5 py-2 focus:outline-none focus:shadow-outline bg-yellow-500 text-gray-100 hover:bg-yellow-600 hover:text-gray-200">
                    Warning
                  </button>
                </div>
                <div className="m-2">
                  <button className="component border border-transparent rounded font-semibold tracking-wide text-sm px-5 py-2 focus:outline-none focus:shadow-outline bg-red-500 text-gray-100 hover:bg-red-600 hover:text-gray-200">
                    Danger
                  </button>
                </div>
                <div className="m-2">
                  <button className="component border border-transparent rounded font-semibold tracking-wide text-sm px-5 py-2 focus:outline-none focus:shadow-outline bg-blue-500 text-gray-100 hover:bg-blue-600 hover:text-gray-200">
                    Info
                  </button>
                </div>
              </div>
              <div className="flex my-4">
                <div className="m-2">
                  <button className="component border rounded font-semibold tracking-wide text-sm px-5 py-2 focus:outline-none focus:shadow-outline border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-gray-100 ">
                    Primary
                  </button>
                </div>
                <div className="m-2">
                  <button className="component border rounded font-semibold tracking-wide text-sm px-5 py-2 focus:outline-none focus:shadow-outline border-gray-500 text-gray-500 hover:bg-gray-500 hover:text-gray-100 ">
                    Secondary
                  </button>
                </div>
                <div className="m-2">
                  <button className="component border rounded font-semibold tracking-wide text-sm px-5 py-2 focus:outline-none focus:shadow-outline border-green-500 text-green-500 hover:bg-green-500 hover:text-gray-100">
                    Success
                  </button>
                </div>
                <div className="m-2">
                  <button className="component border rounded font-semibold tracking-wide text-sm px-5 py-2 focus:outline-none focus:shadow-outline border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-gray-100">
                    Warning
                  </button>
                </div>
                <div className="m-2">
                  <button className="component border rounded font-semibold tracking-wide text-sm px-5 py-2 focus:outline-none focus:shadow-outline border-red-500 text-red-500 hover:bg-red-500 hover:text-red-100">
                    Danger
                  </button>
                </div>
                <div className="m-2">
                  <button className="component border rounded font-semibold tracking-wide text-sm px-5 py-2 focus:outline-none focus:shadow-outline border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-gray-100">
                    Info
                  </button>
                </div>
              </div>
            </div>
          </section>
          <section className="my-8">
            <h2 className="text-2xl font-semibold">Links</h2>
            <div>
              <div className="flex my-4">
                <div className="m-2">
                  <a
                    href="#"
                    className="component border-b-2 text-indigo-500 border-indigo-200 hover:border-indigo-500 hover:text-indigo-600"
                  >
                    Primary
                  </a>
                </div>
                <div className="m-2">
                  <a
                    href="#"
                    className="component border-b-2 text-gray-500 border-gray-400 hover:border-gray-500 hover:text-gray-600"
                  >
                    Secondary
                  </a>
                </div>
                <div className="m-2">
                  <a
                    href="#"
                    className="component border-b-2 text-green-500 border-green-300 hover:border-green-500 hover:text-green-600"
                  >
                    Success
                  </a>
                </div>
                <div className="m-2">
                  <a
                    href="#"
                    className="component border-b-2 text-yellow-500 border-yellow-400 hover:border-yellow-500 hover:text-yellow-600"
                  >
                    Warning
                  </a>
                </div>
                <div className="m-2">
                  <a
                    href="#"
                    className="component border-b-2 text-red-500 border-red-200 hover:border-red-500 hover:text-red-600"
                  >
                    Danger
                  </a>
                </div>
                <div className="m-2">
                  <a
                    href="#"
                    className="component border-b-2 text-blue-500 border-blue-300 hover:border-blue-500 hover:text-blue-600"
                  >
                    Info
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section className="my-8">
            <h2 className="text-2xl font-semibold">Inputs</h2>
            <div>
              <div className="flex flex-wrap my-4">
                <div className="m-2">
                  <input
                    type="text"
                    className="component border bg-gray-100 px-4 py-2 text-sm tracking-wide focus:outline-none focus:shadow-outline rounded"
                    placeholder="E-Mail"
                  />
                </div>
                <div className="m-2">
                  <div className="component relative">
                    <input
                      type="text"
                      className="border border-green-500 bg-gray-100 px-4 py-2 text-sm tracking-wide focus:outline-none focus:shadow-outline rounded pr-10"
                      placeholder="Successful Input"
                    />
                    <div className="check-icon h-full absolute bottom-0 right-0 flex items-center">
                      <svg
                        className="text-green-400 w-5 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="m-2">
                  <div className="component relative">
                    <input
                      type="text"
                      className="border border-red-500 bg-gray-100 px-4 py-2 text-sm tracking-wide focus:outline-none focus:shadow-outline rounded pr-10"
                      placeholder="Errored Input"
                    />
                    <div className="error-icon h-full absolute bottom-0 right-0 flex items-center">
                      <svg
                        className="text-red-400 w-5 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx={12} cy={12} r={10} />
                        <line x1={15} y1={9} x2={9} y2={15} />
                        <line x1={9} y1={9} x2={15} y2={15} />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="m-2">
                  <div className="component relative">
                    <div className="pl-4 pr-4 border-r error-icon h-full absolute bottom-0 left-0 flex items-center">
                      <svg
                        className="text-gray-400 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx={11} cy={11} r={8} />
                        <line x1={21} y1={21} x2="16.65" y2="16.65" />
                      </svg>
                    </div>
                    <input
                      type="text"
                      className="border bg-gray-100 px-4 py-2 text-sm tracking-wide focus:outline-none focus:shadow-outline rounded pl-16"
                      placeholder="Search"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="my-8">
            <h2 className="text-2xl font-semibold">Cards</h2>
            <div>
              <div className="flex flex-wrap justify-around my-4">
                <div className="m-2">
                  <div className="component flex max-w-sm">
                    <div className="bg-gray-100 shadow-sm rounded-lg">
                      <div
                        className="bg-cover p-8 rounded-t-lg"
                        style={{
                          backgroundImage:
                            'url("https://images.unsplash.com/photo-1556139954-ec19cce61d61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80")',
                        }}
                      >
                        <div className="font-semibold text-gray-100 text-lg tracking-wide">
                          #tailwindcss
                        </div>
                        <div className="font-black text-gray-100 text-2xl tracking-wide mb-10">
                          Get 50% off on all premium components
                        </div>
                      </div>
                      <div className="px-8 py-6 relative">
                        <div
                          className="absolute top-0 left-0 ml-8 transform -translate-y-1/2 h-20 w-20 bg-cover rounded-full border-2 border-gray-500"
                          style={{
                            backgroundImage:
                              'url("https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80")',
                          }}
                        />
                        <div className="mt-10 text-sm">
                          <span className="text-gray-500 font-semibold">
                            From
                          </span>{' '}
                          Feb 08{' '}
                          <span className="text-gray-500 font-semibold">
                            To
                          </span>{' '}
                          Feb 14
                        </div>
                        <div className="mt-6">
                          <div className="uppercase font-bold text-gray-600">
                            Your Coupon Code
                          </div>
                          <div className="uppercase mt-2 text-indigo-500 font-black text-2xl leading-none">
                            TailwindCSS2020
                          </div>
                        </div>
                        <div className="mt-6 text-gray-500 text-sm">
                          Coupon only valid on select UI Components &amp; once
                          per user
                        </div>
                      </div>
                      <div>
                        <button className="w-full border border-transparent rounded-b-lg font-semibold tracking-wide px-5 py-4 focus:outline-none focus:shadow-outline bg-indigo-500 text-gray-100 hover:bg-indigo-600 hover:text-gray-200">
                          Use Coupon Code
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="m-2">
                  <div className="component flex max-w-sm pt-16">
                    <div className="w-full px-8 pb-8 shadow-lg rounded-lg bg-gray-100 text-center relative">
                      <div className="absolute top-0 left-0 right-0 ">
                        <div className="inline-block bg-indigo-200 rounded-full p-8 transform -translate-y-1/2">
                          <svg
                            className="w-6 text-indigo-700"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <rect
                              x={3}
                              y={3}
                              width={18}
                              height={18}
                              rx={2}
                              ry={2}
                            />
                            <line x1={3} y1={9} x2={21} y2={9} />
                            <line x1={9} y1={21} x2={9} y2={9} />
                          </svg>
                        </div>
                      </div>
                      <div className="mt-20 uppercase text-indigo-700 font-bold">
                        Free TailwindCSS Components
                      </div>
                      <div className="mt-6 text-sm text-gray-600">
                        Get responsive components for building your next web
                        project for free with NextUIKit.
                        <br />
                        Free for Personal and Commercial Use.
                      </div>
                      <div className="mt-6">
                        <a
                          href="#"
                          className="uppercase font-bold border-b-2 text-indigo-500 border-indigo-200 hover:border-indigo-500 hover:text-indigo-600"
                        >
                          Learn More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="m-2">
                  <div className="component flex max-w-sm pt-16">
                    <div className="w-full px-12 py-12 shadow-lg rounded-lg bg-gray-100 relative">
                      <div className="text-2xl font-bold text-gray-700 leading-tight">
                        Senior Ruby On Rails Developer
                      </div>
                      <div>
                        <div className="flex mt-6 items-center text-xs font-bold">
                          <svg
                            className="text-gray-400 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                            <circle cx={12} cy={10} r={3} />
                          </svg>
                          <span className="ml-1 text-gray-500">
                            Buffalo, New York
                          </span>
                          <div className="ml-4 px-3 py-2 rounded bg-green-200 text-green-600">
                            Full Time
                          </div>
                        </div>
                        <div className="mt-16 flex items-center">
                          <div
                            className="w-16 h-16 bg-cover rounded-lg shadow-lg"
                            alt=""
                            style={{
                              backgroundImage:
                                'url("https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80")',
                            }}
                          />
                          <div className="ml-5">
                            <div className="font-bold text-gray-800">
                              OniChan Inc.
                            </div>
                            <div className="text-xs text-gray-500">
                              Posted 3 Days ago
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="m-2">
                  <div className="component flex max-w-sm pt-16">
                    <div className="w-full shadow-lg rounded-lg bg-gray-100 relative">
                      <div
                        className="w-full h-48 bg-cover rounded-t-lg"
                        style={{
                          backgroundImage:
                            'url("https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=512&q=80")',
                        }}
                      />
                      <div className="p-6 py-8">
                        <div className="text-lg">
                          Kam-Al-Khaimah Filet-O-Egg Recipe
                        </div>
                        <div className="flex mt-4 text-sm text-gray-900 justify-between">
                          <div className="flex items-center">
                            <svg
                              className="h-5"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                            <span className="ml-2 fonst-bold">4.7</span>
                            <span className="ml-2 text-gray-500">
                              (2033 Ratings)
                            </span>
                          </div>
                          <div className="font-bold text-gray-600">
                            by Sparsh Chan
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="m-2">
                  <div className="component flex max-w-lg pt-16">
                    <div className="w-full rounded bg-gray-100 relative p-8">
                      <div className="flex justify-between">
                        <div className="flex">
                          <div>
                            <div
                              className="h-12 w-12 rounded-full bg-cover"
                              style={{
                                backgroundImage:
                                  'url("https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80")',
                              }}
                            />
                          </div>
                          <div className="ml-4">
                            <div className="font-bold">Tricia Matthew</div>
                            <div className="mt-1 text-xs text-gray-500">
                              Posted 5 Days Ago
                            </div>
                          </div>
                        </div>
                        <div className="text-yellow-400 flex items-center">
                          <svg
                            className="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 2L15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2z" />
                          </svg>
                          <span className="text-xl font-bold ml-2">4.7</span>
                        </div>
                      </div>
                      <div className="my-6 border-b" />
                      <div className="text-sm">
                        A Review card written completely with utlities from
                        Tailwind CSS. This is just some filler text to make the
                        card look populated. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat !
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="my-8">
            <h2 className="text-2xl font-semibold">Tables</h2>
            <div>
              <div className="flex flex-col my-4">
                <div className="m-2">
                  <div className="component flex">
                    <div className="w-full p-8 shadow-lg rounded-lg bg-gray-100 relative">
                      <table className="w-full text-left">
                        <thead>
                          <tr>
                            <th className="pb-6 text-gray-500 text-sm tracking-wide">
                              Employee
                            </th>
                            <th className="pb-6 text-gray-500 text-sm tracking-wide">
                              Joining Date
                            </th>
                            <th className="pb-6 text-gray-500 text-sm tracking-wide">
                              Manager
                            </th>
                            <th className="pb-6 text-gray-500 text-sm tracking-wide">
                              Payment
                            </th>
                            <th className="pb-6 text-gray-500 text-sm tracking-wide">
                              Status
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className>
                            <td className="py-3">
                              <div className="flex">
                                <div
                                  className="w-12 h-12 bg-cover rounded-lg"
                                  style={{
                                    backgroundImage:
                                      'url("https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80")',
                                  }}
                                />
                                <div className="leading-none ml-5 flex flex-col justify-around">
                                  <div className="tracking-wide font-bold">
                                    Tricia Matthew
                                  </div>
                                  <div className="text-xs text-gray-600">
                                    tricia@templatana.com
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div className="leading-none flex flex-col justify-center">
                                <div className="font-bold text-sm">2020</div>
                                <div className="mt-2 text-xs text-gray-600">
                                  19 Jan
                                </div>
                              </div>
                            </td>
                            <td>
                              <div className="leading-none flex flex-col justify-center">
                                <div className="font-bold text-sm">
                                  Garret Walker
                                </div>
                                <div className="mt-2 text-xs text-gray-600">
                                  garret@templatana.com
                                </div>
                              </div>
                            </td>
                            <td>
                              <div className="text-sm text-gray-400">
                                <span className="font-black text-indigo-500">
                                  $120
                                </span>
                                <span className="font-medium">/700</span>
                                <span className="block text-gray-500 font-bold text-xs">
                                  Partially Paid
                                </span>
                              </div>
                            </td>
                            <td>
                              <div className>
                                <div className="text-center px-4 py-2 text-xs font-bold rounded opacity-75 bg-yellow-200 text-yellow-700">
                                  Part Time
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr className>
                            <td className="py-3">
                              <div className="flex">
                                <div
                                  className="w-12 h-12 bg-cover rounded-lg"
                                  style={{
                                    backgroundImage:
                                      'url("https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80")',
                                  }}
                                />
                                <div className="leading-none ml-5 flex flex-col justify-around">
                                  <div className="tracking-wide font-bold">
                                    Sparsh Chan
                                  </div>
                                  <div className="text-xs text-gray-600">
                                    sparsh@templatana.com
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div className="leading-none flex flex-col justify-center">
                                <div className="font-bold text-sm">2011</div>
                                <div className="mt-2 text-xs text-gray-600">
                                  12 Feb
                                </div>
                              </div>
                            </td>
                            <td>
                              <div className="leading-none flex flex-col justify-center">
                                <div className="font-bold text-sm">
                                  Himali Turn
                                </div>
                                <div className="mt-2 text-xs text-gray-600">
                                  himali@templatana.com
                                </div>
                              </div>
                            </td>
                            <td>
                              <div className="text-sm text-gray-400">
                                <span className="font-black text-indigo-500">
                                  $1200
                                </span>
                                <span className="font-medium hidden">
                                  /1200
                                </span>
                                <span className="block text-gray-500 font-bold text-xs">
                                  Completely Paid
                                </span>
                              </div>
                            </td>
                            <td>
                              <div className>
                                <div className="text-center px-4 py-2 text-xs font-bold rounded opacity-75  bg-indigo-200 text-indigo-700">
                                  Full Time
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr className>
                            <td className="py-3">
                              <div className="flex">
                                <div
                                  className="w-12 h-12 bg-cover rounded-lg"
                                  style={{
                                    backgroundImage:
                                      'url("https://images.unsplash.com/photo-1562124638-724e13052daf?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80")',
                                  }}
                                />
                                <div className="leading-none ml-5 flex flex-col justify-around">
                                  <div className="tracking-wide font-bold">
                                    Frank Kern
                                  </div>
                                  <div className="text-xs text-gray-600">
                                    sparsh@templatana.com
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div className="leading-none flex flex-col justify-center">
                                <div className="font-bold text-sm">2019</div>
                                <div className="mt-2 text-xs text-gray-600">
                                  28 Feb
                                </div>
                              </div>
                            </td>
                            <td>
                              <div className="leading-none flex flex-col justify-center">
                                <div className="font-bold text-sm">
                                  Himali Turn
                                </div>
                                <div className="mt-2 text-xs text-gray-600">
                                  himali@templatana.com
                                </div>
                              </div>
                            </td>
                            <td>
                              <div className="text-sm text-gray-400">
                                <span className="font-black">$0</span>
                                <span className="font-medium">/700</span>
                                <span className="block text-gray-500 font-bold text-xs">
                                  Unpaid
                                </span>
                              </div>
                            </td>
                            <td>
                              <div className>
                                <div className="text-center px-4 py-2 text-xs font-bold rounded opacity-75 bg-red-200 text-red-700">
                                  Terminated
                                </div>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="my-8">
            <h2 className="text-2xl font-semibold">Typography</h2>
            <div>
              <div className="flex flex-col my-4">
                <div className="m-2">
                  <h1 className="component text-4xl">
                    This is an H1 Heading - TailwindCSS Components
                  </h1>
                </div>
                <div className="m-2">
                  <h2 className="component text-3xl">
                    This is an H2 Heading - TailwindCSS Components
                  </h2>
                </div>
                <div className="m-2">
                  <h3 className="component text-2xl">
                    This is an H3 Heading - TailwindCSS Components
                  </h3>
                </div>
                <div className="m-2">
                  <h4 className="component text-xl">
                    This is an H4 Heading - TailwindCSS Components
                  </h4>
                </div>
                <div className="m-2">
                  <h5 className="component text-lg">
                    This is an H5 Heading - TailwindCSS Components
                  </h5>
                </div>
                <div className="m-2">
                  <h6 className="component">
                    This is an H5 Heading - TailwindCSS Components
                  </h6>
                </div>
                <div className="m-2">
                  <div className="component font-bold">
                    This is bold text - TailwindCSS Components
                  </div>
                </div>
                <div className="m-2">
                  <div className="component italic">
                    This is italic text - TailwindCSS Components
                  </div>
                </div>
                <div className="m-2">
                  <div className="component underline">
                    This is underlined text - TailwindCSS Components
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
