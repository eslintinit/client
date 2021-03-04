import { Tag } from 'components/atoms'

export const Tags = ({ tags }) => {
  return (
    <div className="flex mt-2 justify-center md:justify-start">
      {tags.map((tag) => (
        <Tag tag={tag} key={tag} />
      ))}
    </div>
  )
}
