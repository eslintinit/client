import { Checkbox } from 'components/atoms'

export const TopicsPicker = ({ label, topics, onTopicSelect }) => {
  return (
    <div className="flex flex-col mb-8">
      <span className="text-sm">{label}</span>
      {topics.map((topic) => (
        <Checkbox key={topic} label={topic} onCheck={onTopicSelect} />
      ))}
    </div>
  )
}
