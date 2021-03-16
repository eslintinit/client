import splitbee from '@splitbee/web'
import { Option } from 'components/atoms'

export const MoveOptions = ({ option, setOption }) => {
  return (
    <div className="flex flex-col items-center sm:items-start">
      <span className="mb-2 sm:mb-1 mt-2 sm:mt-0 ml-0 sm:ml-2 text-gray-600 font-medium text-md sm:text-sm">
        Moving reason
      </span>
      <div className="flex flex-wrap">
        <Option
          active={option === 'study'}
          onClick={() => {
            setOption('study')
            splitbee.track('Select moving reason', {
              reason: 'study',
            })
            global.analytics.track('Select moving reason', {
              reason: 'study',
            })
          }}
        >
          <span className="text-md sm:text-sm mr-0 sm:mr-1">🎓</span> Study
        </Option>
        <Option
          active={option === 'work'}
          onClick={() => {
            setOption('work')
            splitbee.track('Select moving reason', {
              reason: 'work',
            })
            global.analytics.track('Select moving reason', {
              reason: 'work',
            })
          }}
        >
          <span className="text-md sm:text-sm mr-0 sm:mr-1">👩‍💼</span> Work
        </Option>
        <Option
          active={option === 'business'}
          onClick={() => {
            setOption('business')
            splitbee.track('Select moving reason', {
              reason: 'business',
            })
            global.analytics.track('Select moving reason', {
              reason: 'business',
            })
          }}
        >
          <span className="text-md sm:text-sm mr-0 sm:mr-1">💼</span> Business
        </Option>
        <Option
          active={option === 'family'}
          onClick={() => {
            setOption('family')
            splitbee.track('Select moving reason', {
              reason: 'family',
            })
            global.analytics.track('Select moving reason', {
              reason: 'family',
            })
          }}
        >
          <span className="text-md sm:text-sm mr-0 sm:mr-1">👪</span> Family
        </Option>
        <Option
          active={option === 'retirement'}
          onClick={() => {
            setOption('retirement')
            splitbee.track('Select moving reason', {
              reason: 'retirement',
            })
            global.analytics.track('Select moving reason', {
              reason: 'retirement',
            })
          }}
        >
          <span className="text-md sm:text-sm mr-0 sm:mr-1">🏖</span> Retirement
        </Option>
        {/*
        <Option active={option === 'taxes'} onClick={() => setOption('taxes')}>
          💸 Taxes
        </Option>
        */}
      </div>
    </div>
  )
}
