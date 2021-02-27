import { TimelineItem } from 'components/molecules'

const events = [1, 2, 3, 4, 5, 6]

export const Timeline = () => {
  return (
    <ol className="p-4">
      {events.map((event, i) => (
        <TimelineItem key={event} />
      ))}
    </ol>
  )
}
