import axios from 'axios'
import { useState, useEffect } from 'react'

export const Comment = ({ comment, advisor }) => {
  const [author, setAuthor] = useState(null)

  useEffect(() => {
    axios.get('https://randomuser.me/api/').then((response) => {
      if (response.status === 200) {
        setAuthor(response.data.results[0])
      }
    })
  }, [])

  if (!author) return <div />

  return (
    <div className="flex">
      <div className="flex-shrink-0 mr-3">
        <img
          className="mt-2 rounded-full w-8 h-8 sm:w-10 sm:h-10"
          src={author.picture.large}
          alt=""
        />
      </div>
      <div className="flex-1 border rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
        <strong>{author.name.first}</strong>{' '}
        {/*
        <span className="text-xs text-gray-400">3:34 PM</span>
        */}
        {advisor && advisor.name && (
          <p className="text-md sm:text-sm">
            {comment.replaceAll('{{X}}', advisor.name.split(' ')[0])}
          </p>
        )}
      </div>
    </div>
  )
}
