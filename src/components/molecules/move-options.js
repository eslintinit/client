import { Option } from 'components/atoms'

export const MoveOptions = ({ option, setOption }) => {
  return (
    <div className="flex flex-col">
      <span className="mb-1 ml-2 text-gray-600 font-medium text-sm">
        I move for:
      </span>
      <div className="flex">
        <Option active={option === 'study'} onClick={() => setOption('study')}>
          🎓 Study
        </Option>
        <Option active={option === 'work'} onClick={() => setOption('work')}>
          👩‍💼 Work
        </Option>
        <Option
          active={option === 'business'}
          onClick={() => setOption('business')}
        >
          💼 Business
        </Option>
        <Option
          active={option === 'family'}
          onClick={() => setOption('family')}
        >
          👪 Family
        </Option>
        <Option
          active={option === 'retirement'}
          onClick={() => setOption('retirement')}
        >
          🏖 Retirement
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
