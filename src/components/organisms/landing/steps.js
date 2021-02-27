export const Steps = () => {
  return (
    <div className="px-4 py-16 mx-auto w-full bg-white md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-6 row-gap-10 lg:grid-cols-2 max-w-6xl mx-auto">
        <div className="lg:py-6 lg:pr-16">
          <div className="flex">
            <div className="flex flex-col items-center mr-4">
              <div>
                <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                  <svg
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                    className="w-4 text-indigo-500"
                  >
                    <line
                      fill="none"
                      strokeMiterlimit={10}
                      x1={12}
                      y1={2}
                      x2={12}
                      y2={22}
                    />{' '}
                    <polyline
                      fill="none"
                      strokeMiterlimit={10}
                      points="19,15 12,22 5,15"
                    />
                  </svg>
                </div>
              </div>{' '}
              <div className="w-px h-full bg-gray-300" />
            </div>{' '}
            <div className="pt-1 pb-8">
              <p className="text-gray-900 mb-2 text-lg font-bold">
                Select your country of destination.
              </p>{' '}
              <p className="text-gray-700">
                MoveNation is a community of people who have moved to other
                countries and share their insights, tips and advice on the best
                places to live, work, study or retire abroad.
              </p>
            </div>
          </div>{' '}
          <div className="flex">
            <div className="flex flex-col items-center mr-4">
              <div>
                <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                  <svg
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                    className="w-4 text-indigo-500"
                  >
                    <line
                      fill="none"
                      strokeMiterlimit={10}
                      x1={12}
                      y1={2}
                      x2={12}
                      y2={22}
                    />{' '}
                    <polyline
                      fill="none"
                      strokeMiterlimit={10}
                      points="19,15 12,22 5,15"
                    />
                  </svg>
                </div>
              </div>{' '}
              <div className="w-px h-full bg-gray-300" />
            </div>{' '}
            <div className="pt-1 pb-8">
              <p className="text-gray-900 mb-2 text-lg font-bold">
                Ask for advice.
              </p>{' '}
              <p className="text-gray-700">
                MoveNation is a community of people who have moved to other
                countries and share their insights, tips and advice on the best
                places to live, work, study or retire abroad.
              </p>
            </div>
          </div>{' '}
          <div className="flex">
            <div className="flex flex-col items-center mr-4">
              <div>
                <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                  <svg
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                    className="w-4 text-indigo-500"
                  >
                    <line
                      fill="none"
                      strokeMiterlimit={10}
                      x1={12}
                      y1={2}
                      x2={12}
                      y2={22}
                    />{' '}
                    <polyline
                      fill="none"
                      strokeMiterlimit={10}
                      points="19,15 12,22 5,15"
                    />
                  </svg>
                </div>
              </div>{' '}
              <div className="w-px h-full bg-gray-300" />
            </div>{' '}
            <div className="pt-1 pb-8">
              <p className="text-gray-900 mb-2 text-lg font-bold">
                Streamline the process.
              </p>{' '}
              <p className="text-gray-700">
                Get access to exclusive articles by international journalists in
                English, French &amp; Spanish; meet locals in your new city
                through our online events; discover key cultural differences
                that will make or break your relocation experience (e.g., local
                customs, religious practices).
              </p>
            </div>
          </div>{' '}
          <div className="flex">
            <div className="flex flex-col items-center mr-4">
              <div>
                <div className="flex items-start justify-center w-10 h-10 border rounded-full">
                  <svg
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    className="mt-2 w-6 text-indigo-500"
                  >
                    <polyline
                      fill="none"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeMiterlimit={10}
                      points="6,12 10,16 18,8"
                    />
                  </svg>
                </div>
              </div>
            </div>{' '}
            <div className="pt-1 pb-8">
              <p className="text-gray-900 mb-2 text-lg font-bold">Relocate</p>{' '}
              <p className="text-gray-700">
                For those looking for more information before they leave home we
                offer comprehensive country guides outlining immigration rules
                as well as links to all the necessary government forms needed
                for a successful application process."
              </p>
            </div>
          </div>
        </div>{' '}
        <div className="relative">
          <img
            src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt=""
            className="inset-0 object-cover object-bottom w-full rounded shadow-lg h-96 lg:absolute lg:h-full"
          />
        </div>
      </div>
    </div>
  )
}
