import { Tag } from 'components/atoms'

export const Tags = ({ tags }) => {
  return (
    <div className="flex mt-2">
      {tags.map((tag) => (
        <Tag tag={tag} key={tag} />
      ))}
    </div>
  )
}
