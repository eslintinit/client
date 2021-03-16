import { Parameter } from 'components/atoms'

export const ParametersGrid = ({ parameters, grid = false }) => {
  if (grid)
    return (
      <div class="grid grid-cols-3 gap-4">
        {parameters.map((parameter) => (
          <Parameter label={parameter.label} value={parameter.value} />
        ))}
      </div>
    )
  return (
    <div class="flex ">
      {parameters.map((parameter) => (
        <Parameter label={parameter.label} value={parameter.value} />
      ))}
    </div>
  )
}
