import { AdvisorListItem } from 'components/molecules'

export const AdvisorsList = ({ advisors }) => {
  return (
    <div className="flex w-4/5 flex-grow flex-col">
      {advisors.map((advisor) => (
        <AdvisorListItem advisor={advisor} key={advisor.id} />
      ))}
    </div>
  )
}
