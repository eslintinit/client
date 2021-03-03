import { AdvisorGridItem } from 'components/molecules'

const advisors = [1, 2, 3, 4]

export const AdvisorsGrid = () => {
  return (
    <div className="grid grid-cols-2 gap-8 ">
      {advisors.map((advisor) => (
        <AdvisorGridItem advisor={advisor} key={advisor} />
      ))}
    </div>
  )
}
