import splitbee from '@splitbee/web'
import { useEffect } from 'react'
import { HomepageTemplate } from 'components/templates'

const Home = () => {
  useEffect(() => {
    splitbee.track('Open homepage')
  }, [])

  return <HomepageTemplate />
}

export default Home
