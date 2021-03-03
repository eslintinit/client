import { useState } from 'react'
import { AdvisorsListTemplate } from 'components/templates'
import { advisors } from 'data'
import { shuffle } from 'helpers'

const AdvisorsListPage = ({ advisors: initAdvisors }) => {
  const [num, setNum] = useState(1) // done for component to rerender when shuffling array
  const [advisors, setAdvisors] = useState(initAdvisors)

  return (
    <AdvisorsListTemplate
      advisors={advisors}
      num={num}
      shuffle={() => {
        setNum(num + 1)
        setAdvisors(shuffle(advisors))
      }}
    />
  )
}

export async function getStaticProps() {
  return {
    props: {
      advisors,
    },
  }
}

export default AdvisorsListPage
