const persons = [
  {
    name: 'Dane Bowen',
    picture: '/img/faces/woman1.jpg',
    comment: `I moved from the US to Mexico with my husband and two children. We love it here.`,
  },
  {
    name: 'Wilf Gutierrez',
    picture: '/img/faces/old-man2.jpg',
    comment: `Been living as a retiree in Mexico for +10 years now. Former
              lawyer in the US`,
  },
  {
    name: 'Marta Clermont',
    picture: '/img/faces/woman3.jpg',
    comment: `Working remotely with my husband from Mexico City since 2015.`,
  },
  {
    name: 'Jamil Mcarthur',
    picture: '/img/faces/man1.jpg',
    comment: `Moved to Mexico with my family in 2009. Working for a US oil firm.`,
  },
]

const Person = ({ person }) => (
  <div>
    <img
      src={person.picture}
      alt="Person"
      className="sm:mx-0 object-cover w-24 h-24 mx-0 mx-auto rounded-full shadow"
    />
    <div className="sm:items-start flex flex-col items-center justify-center mt-2">
      <p className="mb-1 text-lg font-semibold text-gray-800">{person.name}</p>
      <p className="sm:h-16 text-sm tracking-wide text-gray-700 text-center sm:text-left">
        {person.comment}
      </p>
      <p className="mt-4 text-xl text-gray-900">🇺🇸 → 🇲🇽</p>
    </div>
  </div>
)
export const Testimonials = () => {
  return (
    <div className="md:px-24 lg:px-8 lg:py-20 w-full px-4 py-16 mx-auto mt-4 border-b border-gray-100">
      <div className="md:mx-auto sm:text-center lg:max-w-2xl md:mb-12 max-w-full mb-10">
        <h2 className="sm:text-4xl md:mx-auto max-w-full lg: max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 text-center">
          Talk to people who moved.
        </h2>{' '}
        <p className="md:text-lg text-base text-gray-700 text-center">
          Movenation is a community of expats and recent migrants sharing
          insights, advice, tips and tricks about moving abroad.
        </p>
      </div>
      <div className="sm:grid-cols-2 lg:grid-cols-4 lg:max-w-screen-lg grid gap-10 mx-auto">
        {persons.map((person) => (
          <Person person={person} key={person.name} />
        ))}
      </div>
    </div>
  )
}
