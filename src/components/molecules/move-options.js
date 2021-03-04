import { Option } from 'components/atoms'

export const MoveOptions = ({ option, setOption }) => {
  return (
    <div className="flex flex-col items-center sm:items-start">
      <span className="mb-2 sm:mb-1 mt-2 sm:mt-0 ml-0 sm:ml-2 text-gray-600 font-medium text-md sm:text-sm">
        I move for:
      </span>
      <div className="flex">
        <Option active={option === 'study'} onClick={() => setOption('study')}>
          <span className="text-md sm:text-sm mr-0 sm:mr-1">🎓</span> Study
        </Option>
        <Option active={option === 'work'} onClick={() => setOption('work')}>
          <span className="text-md sm:text-sm mr-0 sm:mr-1">👩‍💼</span> Work
        </Option>
        <Option
          active={option === 'business'}
          onClick={() => setOption('business')}
        >
          <span className="text-md sm:text-sm mr-0 sm:mr-1">💼</span> Business
        </Option>
        <Option
          active={option === 'family'}
          onClick={() => setOption('family')}
        >
          <span className="text-md sm:text-sm mr-0 sm:mr-1">👪</span> Family
        </Option>
        <Option
          active={option === 'retirement'}
          onClick={() => setOption('retirement')}
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
