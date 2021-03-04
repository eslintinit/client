import splitbee from '@splitbee/web'
import mixpanel from 'mixpanel-browser'
import { useEffect } from 'react'
import { HomepageTemplate } from 'components/templates'

const Home = () => {
  useEffect(() => {
    splitbee.track('Open homepage')
    global.analytics.track('Open homepage')
  }, [])

  return <HomepageTemplate />
}

export default Home
