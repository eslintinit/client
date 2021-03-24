import { Button } from 'components/atoms'
import { TimelineItem } from 'components/molecules'
import splitbee from '@splitbee/web'

export const Timeline = ({ setShowBookingWidget, year, advisor }) => {
  const events = [
    {
      time: `16 Sep, ${year}`,
      event: 'Met with immigration offical',
    },
    {
      time: `21 Sep, ${year}`,
      event: 'Canceled federal and state taxes ',
    },
    {
      time: `24 Sep, ${year}`,
      event: 'Collected documents',
    },
    {
      time: `24 Sep, ${year}`,
      event: 'Purchased health insurance',
    },
    {
      time: `27 Oct, ${year}`,
      event: 'Applied for a visa',
    },

    // { time: `4 Nov, ${year}`, event: 'Got long term visa in Mexico' },
    // { time: `24 Jun 2017`, event: 'Moved' },
    { time: `24 Jun ${year} - present`, event: 'Living his best life in 🇲🇽' },
  ]
  return (
    <div className="flex flex-col relative h-full">
      <span className="mb-4 font-medium text-xl text-gray-800">
        Moving plan
      </span>
      <ol className="p-4 pb-0 mb-12">
        {events.map((event, i) => (
          <TimelineItem
            key={event}
            event={event}
            last={i === events.length - 1}
          />
        ))}
      </ol>
      <div className="absolute bottom-0 ml-8" style={{ zIndex: 1 }}>
        {advisor && advisor.name && (
          <div className="component border border-transparent rounded-lg font-medium tracking-wide text-sm px-8 py-6 focus:outline-none focus:shadow-outline bg-indigo-500 text-gray-100 flex flex-col items-center text-center">
            {`Book a call ${advisor.name.split(' ')[0]}`} <br />
            to learn about his moving plan
            <div
              className="component border-2 border-indigo rounded font-semibold tracking-wide text-sm px-5 py-2 focus:outline-none focus:shadow-outline bg-white-500 text-white hover:bg-indigo-900 hover:text-gray-200 w-max mt-4 cursor-pointer"
              onClick={() => setShowBookingWidget(true)}
            >
              Schedule call
            </div>
          </div>
        )}
      </div>
      <div
        className="absolute background-gray-900 w-full bottom-0"
        onClick={() => {
          splitbee.track('Start scheduling call', { from: 'moving plan' })
          global.analytics.track('Start scheduling call', {
            from: 'moving plan',
          })
          // mixpanel.track('Start scheduling call')
          setShowBookingWidget(true)
        }}
        style={{
          background:
            'linear-gradient(#e6646500, #f9fafbba, #f9fafbbf, #f9fafbe0, #f9fafb, #f9fafb)',
          height: 'calc(100% - 176px)',
        }}
      ></div>
    </div>
  )
}
