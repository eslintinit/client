import { AdvisorTemplate } from 'components/templates'
import { advisors } from 'data'

const AdvisorPage = ({ advisor }) => {
  return <AdvisorTemplate advisor={advisor} />
}

export async function getStaticProps({ params }) {
  const advisor = advisors.find(
    (advisor) => advisor.id === parseInt(params.advisor),
  )

  // console.log('advisor')
  // console.log(advisor)

  return {
    props: {
      advisor,
    },
  }
}

export async function getStaticPaths() {
  // return {
  //   paths: [],
  //   fallback: true,
  // }
  // console.log('advisors')
  // console.log(advisors)
  return {
    paths: advisors.map(({ id }) => ({
      params: { advisor: id.toString() },
    })),
    fallback: true,
  }
}

export default AdvisorPage
