import axios from 'axios'
import { useEffect, useState } from 'react'

export const Select = ({ initOption }) => {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    axios
      .get(
        'https://unpkg.com/country-flag-emoji-json@1.0.2/json/flag-emojis.json',
      )
      .then((response) => {
        if (response.status === 200) {
          setCountries(response.data)
        }
      })
  }, [])

  return (
    <div className="border border-gray-500 font-medium p-4 px-8 rounded-full hover:border-indigo-500 hover:border-2">
      <select className="cursor-pointer bg-transparent" style={{ width: 150 }}>
        <option>🇺🇸 United states</option>
        {countries.map((country) => (
          <option>{`${country.emoji} ${country.name}`}</option>
        ))}
      </select>
    </div>
  )
}
