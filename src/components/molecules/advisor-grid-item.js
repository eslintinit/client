import { useState, useEffect } from 'react'
import { Avatar, Button, AdvisorName, AdvisorBio } from 'components/atoms'
import { Tags } from 'components/molecules'
import Link from 'next/link'
import axios from 'axios'

export const AdvisorGridItem = () => {
  const [advisor, setAdvisor] = useState(null)
  useEffect(() => {
    axios.get('https://randomuser.me/api/').then((response) => {
      if (response.status === 200) {
        setAdvisor(response.data.results[0])
      }
    })
  }, [])

  if (!advisor) return null

  return (
    <div className="flex flex-col w-full">
      <img
        src={advisor.picture.large}
        className="w-2/3 self-center rounded-full"
      />
      <span className="text-md font-medium mt-4">{`${advisor.name.first} ${advisor.name.last} ‎ ‎🇺🇸 → 🇲🇽`}</span>
      <span className="text-sm text-gray-700 my-2 mb-4">
        I moved from A to B 5 years ago and I can help you with the process
      </span>
      <Link href={`/advisors/1`}>
        <Button>{`Talk to ${advisor.name.first}`}</Button>
      </Link>
    </div>
  )
}
