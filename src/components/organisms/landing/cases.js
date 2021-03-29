import Link from 'next/link'

const cases = [
  {
    title: 'Moving for Study?',
    content:
      'Find out about the immigration process, accommodation options and more before you go.',
    icon: '🎓',
    color: 'bg-green-50',
  },
  {
    title: 'Moving for Work?',
    content:
      "We'll tell you how to find a job abroad, the best destinations in your field and all about visas & immigration.",
    icon: '👩‍💼',
    color: 'bg-blue-50',
  },
  {
    title: 'Looking to Start a Business?',
    content:
      'Learn what it takes to start a business in your new country of residence.',
    icon: '💼',
    color: 'bg-purple-50',
  },
  {
    title: 'Looking to Retire Abroad?',
    content:
      'Learn about how to find the right destination, what documents are needed and which countries are best suited for retirement living.',
    icon: '🏖',
    color: 'bg-yellow-50',
  },
]

const Case = ({ case: { title, content, icon, color } = {} }) => (
  <div className="flex flex-col justify-between p-5 border border-gray-600 rounded shadow-sm border-opacity-10 bg-white">
    <div>
      <div
        className={`flex items-center justify-center w-16 h-16 mb-4 rounded-full text-3xl ${color}`}
      >
        {icon}
      </div>{' '}
      <h6 className="mb-2 font-semibold leading-5 text-lg text-gray-900">
        {title}
      </h6>{' '}
      <p className="mb-3 text-sm text-gray-700">{content}</p>
    </div>{' '}
    <Link href="/advisors">
      <a className="inline-flex items-center font-semibold transition-colors duration-200 text-indigo-500">
        Browse advisors
      </a>
    </Link>
  </div>
)
export const Cases = () => (
  <div className="px-4 py-16 mx-auto bg-white w-full md:px-24 lg:px-8 lg:py-20 mt-0 md:mt-4 mb-12">
    {/*
    <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
      <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
        <span className="relative inline-block">
          Get insights and advice from people who actually moved.
        </span>
      </h2>{' '}
      <p className="text-base text-gray-700 md:text-lg">
        Find out how to move for study, work, business, taxes or retirement
        purposes.
      </p>
    </div>{' '}
*/}
    <div className="grid max-w-5xl gap-4 row-gap-5 mx-auto sm:grid-cols-2 lg:grid-cols-2">
      {cases.map((c) => (
        <Case case={c} key={c.title} />
      ))}
    </div>
  </div>
)
