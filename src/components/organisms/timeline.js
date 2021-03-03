import { TimelineItem } from 'components/molecules'

const events = [
  'Applied for PhD in Universidad Nacional Autónoma de México',
  'Moved from US to Mexico to study',
]

export const Timeline = () => {
  return (
    <ol className="p-4">
      {events.map((event, i) => (
        <TimelineItem key={event} event={event} />
      ))}
    </ol>
  )
}
