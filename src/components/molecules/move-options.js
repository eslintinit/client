import { Option } from 'components/atoms'

export const MoveOptions = () => {
  return (
    <div className="flex flex-col">
      <span className="mb-1 ml-2 text-gray-600 font-medium text-sm">
        I move for:
      </span>
      <div className="flex">
        <Option>🎓 Study</Option>
        <Option>👩‍💼 Work</Option>
        <Option>💼 Business</Option>
        <Option>🏖 Retirement</Option>
        <Option>💸 Taxes</Option>
      </div>
    </div>
  )
}
