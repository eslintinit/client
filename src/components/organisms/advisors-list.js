import {
  AdvisorListItem,
  AdvisorListItemPlaceholder,
} from 'components/molecules'

export const AdvisorsList = ({ advisors, setShowPremiumModal }) => {
  return (
    <div className="flex w-4/5 flex-grow flex-col">
      {advisors.map((advisor) => (
        <AdvisorListItem advisor={advisor} key={advisor.id} />
      ))}
      <AdvisorListItemPlaceholder
        advisor={advisors[0]}
        setShowPremiumModal={setShowPremiumModal}
      />
    </div>
  )
}
