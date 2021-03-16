import { Tooltip } from '@chakra-ui/react'

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
    <div className="relative mr-0 sm:mr-2 w-max">
      <img
        className="inline object-cover min-w-24 min-h-24 max-w-24 max-h-24 w-24 h-24 rounded-full"
        src={src}
        alt="Profile image"
      />
      <VerifiedBadge />
    </div>
  )
}

const VerifiedBadge = () => (
  <Tooltip label="This person's identity is verified" aria-label="Verified">
    <div className="verified local">
      <div className="content-wrapper">
        <div className="content icon-only">
          <div className="check" />
        </div>
      </div>
      <div className="badge-wrapper">
        <div className="badge-layer" />
        <div className="badge-layer grow" />
        <div className="badge-layer shadow" />
      </div>
    </div>
  </Tooltip>
)
