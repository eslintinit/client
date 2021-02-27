import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Avatar, Button } from 'components/atoms'
import { Tags } from 'components/molecules'

import axios from 'axios'

export const AdvisorListItem = () => {
  const [advisor, setAdvisor] = useState({
    name: {
      first: 'Maxim',
      last: '',
    },
    picture: {
      // large: '',
    },
  })

  useEffect(() => {
    axios.get('https://randomuser.me/api/').then((response) => {
      if (response.status === 200) {
        setAdvisor(response.data.results[0])
      }
    })
  }, [])

  if (!advisor) return <div />

  return (
    <Link href={`/advisors/${1}`}>
      <div className="flex items-center mb-10">
        <div className="min-w-24 w-24 min-w-max self-start mt-1">
          <Avatar src={advisor.picture.large} />
        </div>
        <div className="flex justify-between items-center border-b pb-10">
          <div className="flex flex-col ml-4 w-3/4">
            <h2 className="text-lg font-medium">{`${advisor.name.first} ${advisor.name.last} 🇺🇦 → 🇩🇰`}</h2>
            <span className="text-gray-600 font-regular mt-1">
              I am the author of "The Innovator's Mindset" and "Innovate Inside
              the Box" and have a passion for exploring the connection between
              innovation and relationships for learning.
            </span>
            <Tags />
          </div>
          <div className="flex flex-col items-center">
            <Button>Get in touch</Button>
            <a
              href="#"
              className="component hover:border-b-2 text-gray-500 border-gray-400 hover:border-gray-500 hover:text-gray-600 text-xs mt-2"
            >
              15 reviews
            </a>
          </div>
        </div>
      </div>
    </Link>
  )
}
