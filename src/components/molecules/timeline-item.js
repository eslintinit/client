export const TimelineItem = ({ event, last }) => {
  return (
    <li
      className={`feed-item relative pl-6 border-l-2 border-indigo-300 last:border-transparent flex flex-col justify-start pr-6 ${
        last ? ' pb-0' : ' pb-5'
      }`}
    >
      {!last ? (
        <div className="mt-1 pb-0">
          <time
            className="block text-gray-500 relative uppercase text-xs top-0 text-left"
            dateTime="9-25"
          >
            {event.time}
          </time>
          <span className="text text-sm text-left pb-0 mt-1 cursor-pointer">
            {event.event}
          </span>
        </div>
      ) : (
        <div className="absolute">
          <time
            className="block text-gray-500 relative uppercase text-xs top-0 text-left"
            dateTime="9-25"
          >
            {event.time}
          </time>
          <span className="text text-sm text-left pb-0 mt-1 cursor-pointer">
            {event.event}
          </span>
        </div>
      )}
    </li>
  )
}

// export const TimelineItemRightAlign = ({ event }) => {
//   return (
//     <li className="feed-item relative pb-5 pl-6 border-r-2 border-indigo-300 last:border-transparent flex flex-col justify-start pr-6">
//       <time
//         className="block text-gray-500 relative uppercase text-xs -top-1 text-right"
//         dateTime="9-25"
//       >
//         SEP 25, 2020
//       </time>
//       <span className="text text-sm text-right pb-8">{event}</span>
//     </li>
//   )
// }
