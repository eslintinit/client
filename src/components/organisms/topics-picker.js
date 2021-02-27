import { Checkbox } from 'components/atoms'

export const TopicsPicker = () => {
  return (
    <div className="flex h-min w-1/4 flex-col ml-8 pl-4 border-l self-start">
      <div className="flex flex-col">
        <Checkbox label="Relocation Tax  " />
        <Checkbox label="Costs of moving" />
        <Checkbox label="Work permit" />
        <Checkbox label="Setting up a company" />
        <Checkbox label="Citizenship by investment" />
        <Checkbox label="Children relocation moving" />
      </div>
    </div>
  )
}
