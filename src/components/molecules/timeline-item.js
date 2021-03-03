export const TimelineItem = ({ event }) => {
  return (
    <li className="feed-item relative pb-5 pl-6 border-r-2 border-indigo-300 last:border-transparent flex flex-col justify-end pr-6">
      <time
        className="block text-gray-500 relative uppercase text-xs -top-1 text-right"
        dateTime="9-25"
      >
        SEP 25, 2020
      </time>
      <span className="text text-sm text-right pb-8">{event}</span>
    </li>
  )
}
