import Layout from 'components/layout'
import { Avatar, Button, Back } from 'components/atoms'
import { TopicsGrid, Timeline, Reviews, FAQ } from 'components/organisms'

export const AdvisorTemplate = () => {
  return (
    <Layout bg="gray-50" hideFooter hideHeader>
      <Back />
      <div className="flex flex-col w-4/5 mt-20">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <h2 className="text-2xl font-medium">Maxim</h2>
            <span className="text-lg text-gray-700 w-9/12 mt-2">
              I am the author of "The Innovator's Mindset" and "Innovate Inside
              the Box" and have a passion for exploring the connection between
              innovation and relationships for learning.
            </span>
          </div>
          <div className="flex flex-col items-end">
            <Avatar src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" />
            <Button className="mt-4 w-max">Book a call</Button>
          </div>
        </div>

        <div className="flex justify-between mt-12">
          <TopicsGrid />
          <Timeline />
        </div>
        <div className="flex justify-between mt-16">
          <Reviews />
          <FAQ />
        </div>
      </div>
    </Layout>
  )
}
