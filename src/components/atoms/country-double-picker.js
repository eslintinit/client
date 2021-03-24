import axios from 'axios'
import { useEffect, useState } from 'react'

export const CountryDoublePicker = ({ setCountryFrom, setCountryTo }) => {
  const [countries, setCountries] = useState([])
  const [input1Width, setInput1Width] = useState(120)
  const [input2Width, setInput2Width] = useState(80)

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
      <select
        className="appearance-none cursor-pointer bg-transparent"
        style={{ width: input1Width }}
        onChange={(e) => {
          setInput1Width(+e.target.value.length * 7)
          console.log(e.target.value)
          if (e.target.value === '🇺🇸 United states') {
            setCountryFrom('usa')
          } else {
            setCountryFrom(e.target.value)
          }
        }}
      >
        <option>🇺🇸 United states</option>
        {countries.map((country) => (
          <option>{`${country.emoji} ${country.name}`}</option>
        ))}
      </select>
      <span className="mx-4">→</span>
      <select
        className="appearance-none cursor-pointer bg-transparent"
        style={{ width: input2Width }}
        onChange={(e) => {
          setInput2Width(+e.target.value.length * 7)
          if (e.target.value === '🇲🇽 Mexico') {
            setCountryTo('mx')
          } else {
            setCountryTo(e.target.value)
          }
        }}
      >
        <option>🇲🇽 Mexico</option>
        {countries.map((country) => (
          <option>{`${country.emoji} ${country.name}`}</option>
        ))}
      </select>
    </div>
  )
}
