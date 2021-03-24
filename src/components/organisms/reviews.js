import { reviews } from 'data'
import { Comment } from 'components/molecules'

export const Reviews = ({ advisor }) => {
  return (
    <div className="antialiased max-w-screen-sm">
      <div className="flex flex-row">
        <h1 className="mb-8 text-xl font-bold md:text-xl">
          Reviews
          <span className="text-gray-400 font-medium ml-1">(8)</span>
        </h1>
        {/*
        <h1 className="mb-8 text-md font-bold md:text-xl text-gray-400 ml-4 cursor-pointer">
          Answers
        </h1>
        */}
      </div>
      <div className="space-y-4">
        {(reviews || []).map((review) => {
          if (!review) {
            return <div />
          }

          return (
            <Comment key={review.author} comment={review} advisor={advisor} />
          )
        })}
      </div>
    </div>
  )
}

export default Reviews
