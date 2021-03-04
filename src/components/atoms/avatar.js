export const Avatar = ({ src }) => {
  if (!src) {
    return (
      <div
        className="bg-gray-300 min-w-24 min-h-24 max-w-24 max-h-24 w-24 h-24 mr-0 sm:mr-2 rounded-full"
        style={{}}
      />
    )
  }
  return (
    <img
      className="inline object-cover min-w-24 min-h-24 max-w-24 max-h-24 w-24 h-24 mr-0 sm:mr-2 rounded-full"
      src={src}
      alt="Profile image"
    />
  )
}
