import { useState } from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Slider from '@material-ui/core/Slider'

const IOSSlider = withStyles({
  root: {
    color: '#3880ff',
    height: 2,
    padding: '15px 0',
  },
  valueLabel: {
    top: -22,
    '& *': {
      background: 'transparent',
      color: '#000',
    },
  },
})(Slider)

function valuetext(value) {
  return `fuuuck${value}°C`
}

export const RangeSlider = ({ label, min, max, initMin, initMax }) => {
  const [value, setValue] = useState([initMin, initMax])

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <div className="mt-4">
      <span className="mb-4 sm:mb-2 mt-2 sm:mt-0 ml-0 sm:ml-2 text-gray-600 font-medium text-md sm:text-sm">
        {label}
      </span>
      <div className="mt-6 px-2">
        <IOSSlider
          value={value}
          min={min}
          max={max}
          step={100}
          onChange={handleChange}
          valueLabelFormat={(v) => `$${v}`}
          valueLabelDisplay="on"
        />
      </div>
    </div>
  )
}
