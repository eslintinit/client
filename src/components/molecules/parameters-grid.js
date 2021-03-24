import { Parameter } from 'components/atoms'

export const ParametersGrid = ({ parameters, grid = false }) => {
  if (grid)
    return (
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {parameters.map((parameter) => (
          <Parameter label={parameter.label} value={parameter.value} />
        ))}
      </div>
    )
  return (
    <div class="flex flex-col items-center md:flex-row">
      {parameters.map((parameter) => (
        <Parameter label={parameter.label} value={parameter.value} />
      ))}
    </div>
  )
}
